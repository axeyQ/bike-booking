"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FaArrowLeft, FaFontAwesome } from "react-icons/fa";
import Link from "next/link";

export default function AddVehicleForm() {

    const [form, setForm]=useState({name:'',registrationNumber: '', hourlyRate: 0 })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/addVehicle',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
    });
    if (res.ok) alert('Vehicle added Successfully!');
  };
  return (
    (<div
      className="max-w-md w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <div className=" flex items-center justify-start gap-4">
      <Link href="/">
      <FaArrowLeft/>
      </Link>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Add Vehicles
      </h2>
      </div>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Ex: Honda Active 5G" type="text" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="regNum">Registration Number</Label>
          <Input id="regNum" placeholder="Ex: MP04XXXX" type="text" onChange={(e) => setForm({ ...form, registrationNumber: e.target.value })}  />
        </LabelInputContainer>
        {/* <LabelInputContainer className="mb-4">
          <Label htmlFor="hourly">Hourly Rate</Label>
          <Input id="hourly" placeholder="Ex: 80" type="number" onChange={(e) => setForm({ ...form, hourlyRate: +e.target.value })}  />
        </LabelInputContainer> */}

        <div
          className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Add &rarr;
          <BottomGradient />
        </button>



      </form>
    </div>)
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};
