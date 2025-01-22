import mongoose, {Schema, model, models} from "mongoose";

const VehicleSchema = new Schema({
  name: { type: String, required: true },
  registrationNumber: { type: String, required: true }, // New field
  hourlyRate: { type: Number, required: true },         // New field
  available: { type: Boolean, default: true },
  lastToggled: { type: Date, default: null },
  });
  
  export default models.Vehicle || model('Vehicle', VehicleSchema);