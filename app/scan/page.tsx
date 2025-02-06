
import Image from "next/image";
import scanqr from "@/public/scanqr.jpg"


export default function scan() {

    return (
 <div>
        <main className=" flex flex-col gap-10 relative  ">

        <div className="flex items-center p-4 w-full max-w-[600px] h-[5.25rem] fixed z-50 bottom-0 left-1/2 -translate-x-1/2 bg-white border-none">
        <div className=" flex items-center justify-center text-white  bg-[#4D7B41] w-full h-full rounded-md font-semibold">Scan Item QR Code</div>
          </div>


        <section>
        <h2 className="text-[#577D4E] font-semibold text-2xl tracking-tight pb-2">Offer Your Trade</h2>
        <h3 className="text-[#577D4E] font-medium text-lg tracking-tight  opacity-90 text-pretty">To offer an item for trade, simply scan its QR code. This helps us ensure a fair exchange and keeps our community sustainable.</h3>

        <Image
          src={scanqr}
          alt = "alt text"
          sizes="100vw"
          className=" bg-[#F8F9F6] scale-50 w-full"
          />

          <p>Scan the code on the tag of the item you’re offering to start the trade process. If you’re ready to share something you’ve made, let us know how you craft your garments</p>

          
         
        </section>

        

        </main>
      </div>
    );
  }
  