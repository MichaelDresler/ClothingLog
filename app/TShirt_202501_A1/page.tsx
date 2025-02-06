
import Image from "next/image";
import shirtimg from "@/public/shirt.jpg"
import { Timeline } from "@/app/components/Timeline"
import { StatCard } from "../components/StatCard";

export default function shirt() {

    return (
      <div>
        <main className="pb-24 flex flex-col gap-10   ">


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
  