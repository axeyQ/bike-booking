import connectDB from '@/config/database';
import Vehicle from '@/models/Vehicle';

export async function PATCH(request, { params }) {
  const { vehicleId } = await params;

  try {
    await connectDB();
    const vehicle = await Vehicle.findById(vehicleId);

    if (!vehicle) {
      return new Response('Vehicle not found', { status: 404 });
    }

    // Toggle availability and update timestamp
    vehicle.available = !vehicle.available;
    vehicle.lastToggled = new Date();
    await vehicle.save();

    return new Response(JSON.stringify(vehicle), { status: 200 });
  } catch (error) {
    console.error('Error updating vehicle status:', error);
    return new Response('Failed to update vehicle status', { status: 500 });
  }
}
