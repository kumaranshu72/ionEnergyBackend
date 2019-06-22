import { Document, Model, model, Schema } from 'mongoose'

import { Ithermo } from '../interfaces'

export interface IthermoModel extends Ithermo, Document {
}

export const ThermoSchema: Schema = new Schema({
  ts: Number,
  val: Number,
})


export const Thermo: Model<IthermoModel> = model<IthermoModel>('thermo', ThermoSchema)
