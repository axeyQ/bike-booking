import connectDB from "@/config/database";
import Booking from "@/models/Booking";
import Vehicle from "@/models/Vehicle";
import { NextResponse } from "next/server";

export async function POST(req){
    try{

        await connectDB();
        const {vehicleId, customerName, bookignTime, duration} = await req.json();
     // Check if the vehicle is available
     const vehicle = await Vehicle.findById(vehicleId);
     if (!vehicle) {
       return NextResponse.json({ message: 'Vehicle not found' }, { status: 404 });
     }
 
     if (!vehicle.availability) {
       return NextResponse.json({ message: 'Vehicle is already booked' }, { status: 400 });
     }
 
     // Create a new booking
     const newBooking = new Booking({
       vehicleId,
       customerName,
       bookingTime,
       duration,
       totalAmount: vehicle.hourlyRate * duration,
     });
 
     await newBooking.save();
 
     // Update vehicle availability
     vehicle.availability = false;
     await vehicle.save();
 
     return NextResponse.json(newBooking, { status: 201 });
   } catch (error) {
     console.error('Error creating booking:', error);
     return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
   }
 }


export async function GET(){
    await connectDB();
    const bookings = await Booking.find().populate('VehicleId'); 
    return NextResponse.json(bookings)
}