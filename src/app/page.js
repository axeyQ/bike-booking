import { HeroBG } from "@/Components/HeroBg";
import ThemeToggle from "@/Components/ThemeToggle";
import Link from "next/link";

export default function Home() {
  console.log('MONGODB_URI:', process.env.MONGODB_URI);
  return (
      <>
       <HeroBG/> 
       <Link href="/admin" className=" border-none bg-transparent absolute top-4 left-5 ">Switch to Admin Mode</Link>
      </>
  );
}
