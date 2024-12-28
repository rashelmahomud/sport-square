import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <div>
   
      <h1>hi today start</h1>
      <Link href={'/admin'}><Button>Click me</Button></Link>
      
      
    </div>
  );
}
