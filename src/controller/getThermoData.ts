import { Request, Response } from 'express'
var stream = require('stream')

import { Thermo } from '../model'
import { Ithermo } from '../interfaces'

export const getData = async (req: Request, res: Response) => {
  try {
    let arr1: number[] = [0,0,0,0,0,0,0,0,0,0,0,0],arr2: number[] = [0,0,0,0,0,0,0,0,0,0,0,0]
    const data = Thermo.find({ts: {$gte : 1417305600000, $lte : 1451563199000}}).cursor()
    for(let doc = await data.next(); doc != null; doc = await data.next()) {
      const time = new Date(doc.ts)
      const month = time.getMonth()
      arr1[month]+=doc.val
      arr2[month]++
      console.log(month)
    }
    for(let i=0;i<12;i++) {
      if(arr2[i]!=0) {
        arr1[i] = arr1[i] / arr2[i]
      }
    }
    res.send({
      data: arr1
    })
  }
  catch(e) {
    res.send(e)
  }
}
