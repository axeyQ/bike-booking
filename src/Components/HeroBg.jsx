import { MovingButton } from "./MovingButton";

export function HeroBG() {
  return (
    <div className=" h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-6xl text-center sm:text-7xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 font-bold">
        MR Travels & Rental Services
      </p>
      <div className=" flex justify-center items-center gap-2">
      <MovingButton Links={`/add/addVehicle`} LinkName={"Add Vehicle"}/>
      <MovingButton Links={`/add/viewVehicle`} LinkName={"View Vehicle"}/>
      </div>

    </div>
  );
}