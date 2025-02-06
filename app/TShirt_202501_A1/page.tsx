
import Image from "next/image";
import shirtimg from "@/public/shirt.jpg"
import { Timeline } from "@/app/components/Timeline"
import { StatCard } from "../components/StatCard";

export default function shirt() {

    return (
      <div>
        <main className="pb-24 flex flex-col gap-10  relative">
        <div className="flex items-center p-4 w-full max-w-[600px] h-[5.25rem] fixed z-50 bottom-0 left-1/2 -translate-x-1/2 bg-white border-none">
            <div className=" flex items-center justify-center text-white  bg-[#4D7B41] w-full h-full rounded-md font-semibold">Offer Trade</div>
          </div>


        <section>
        <h2 className="text-[#577D4E] font-semibold text-2xl tracking-tight pb-2">Women's Halter</h2>
          
          <Image
          src={shirtimg}
          alt = "alt text"
          className=" bg-[#F8F9F6] aspect-[1/1.21] object-contain object-[10%_50%] w-full"
          />

        </section>

        <section className="">
        <h2 className="text-[#577D4E] font-semibold text-xl tracking-tight pb-2">Biography</h2>
          <p>No information available</p>

        </section>

        <section>
        <h2 className="text-[#577D4E] font-semibold text-xl tracking-tight pb-4">Memories</h2>
        <div className="mt-6">

          <Timeline isLast={true} date="N/a" description="No history recorded"/>


          
          </div>
        </section>

        <section>
        <h2 className="text-[#577D4E] font-semibold text-2xl tracking-tighter pb-2">Stats</h2>
          <div className="grid grid-cols-2 gap-2">
            <StatCard type="water" stat="Water Saved" measure="0L"/>
            <StatCard type="cloud" stat="CO2 Saved  " measure="0kg"/>
            <StatCard type="shirt" stat="times worn" measure="4"/>


          </div>
        </section>
        

        </main>
      </div>
    );
  }
  