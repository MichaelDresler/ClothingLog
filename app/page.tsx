
import Link from "next/link";



export default function Home() {

    return (
      <div>
        <main className=" ">

          <ul className="flex flex-col gap-2 text-[18px]">
          <li><Link className="text-blue-800 font-medium underline" href={"/Jacket_196912_C3"}>Harvard  Square Jacket</Link></li>
          <li><Link className="text-blue-800 font-medium underline" href={"/scarf"}>Scarf</Link></li>
          <li><Link className="text-blue-800 font-medium underline" href={"/TShirt_202501_A1"}>Women's Halter</Link></li>
          <li><Link className="text-blue-800 font-medium underline" href={"/pants"}>Drape Trousers</Link></li>
          <li><Link className="text-blue-800 font-medium underline" href={"/sweatervest"}>Tessellation Vest</Link></li>
          </ul>


        

        </main>
      </div>
    );
  }
  