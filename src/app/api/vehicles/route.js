import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/database";
import Vehicle from "@/models/Vehicle";

export async function GET() {
    try {
      await connectDB();
      const vehicles = await Vehicle.find({});
      return new Response(JSON.stringify(vehicles), { status: 200 });
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      return new Response('Failed to fetch vehicles', { status: 500 });
    }
  }