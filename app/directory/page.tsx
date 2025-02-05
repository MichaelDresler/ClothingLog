
import Link from "next/link";



export default function Hoodie() {

    return (
      <div>
        <main className="grid grid-cols-1 md:grid-cols-2 md:gap-24  ">

          <ul>
          <li><Link className="text-blue-800 font-medium underline" href={"/Jacket_196912_C3"}>Jacket</Link></li>
          <li><Link className="text-blue-800 font-medium underline" href={"/scarf"}>hoodie</Link></li>
          <li><Link className="text-blue-800 font-medium underline" href={"/TShirt_202501_A1"}>Tshirt</Link></li>
          <li><Link className="text-blue-800 font-medium underline" href={"/pants"}>Tshirt</Link></li>
          <li><Link className="text-blue-800 font-medium underline" href={"/sweatervest"}>Tshirt</Link></li>
          </ul>


        

        </main>
      </div>
    );
  }
  