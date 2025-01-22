import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/database";
import Vehicle from "@/models/Vehicle";

export async function POST(req) {
    await connectDB();
    const data = await req.json();
    const vehicle = await Vehicle.create(data);
    return NextResponse.json(vehicle);
  }
  
  export async function GET() {
    await dbConnect();
    const vehicles = await Vehicle.find();
    return NextResponse.json(vehicles);
  }