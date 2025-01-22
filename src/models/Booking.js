import mongoose, { Schema, model, models } from 'mongoose';

const BookingSchema = new Schema({
  vehicleId: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  customerName: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  status: { type: String, default: 'active' },
});

export default models.Booking || model('Booking', BookingSchema);
