
import Image from "next/image";
import pantsimg from "@/public/pants.jpg"
import { Timeline } from "@/app/components/Timeline"
import { StatCard } from "../components/StatCard";

export default function pants() {

    return (
      <div>
        <main className="pb-24 flex flex-col gap-10   ">


        <section>
        <h2 className="text-[#577D4E] font-semibold text-2xl tracking-tight pb-2">Drape Trousers</h2>
          
          <Image
          src={pantsimg}
          alt = "alt text"
          className=" bg-[#f3f3f0] aspect-[1/1.21] object-contain object-[40%_50%] w-full"
          />

        </section>

        <section className="">
        <h2 className="text-[#577D4E] font-semibold text-xl tracking-tight pb-2">Biography</h2>
          <p>In 2006, a foreign exchange student from Brazil received these homemade lounge pants as a gift from their host family in Vancouver. Created from old window drapes, they were worn and loved throughout the winter of 2006, but were ultimately left in Canada when the student returned home. Years later, these pants were found in the family’s closet and brought to this shop, where it was traded for a pair of boots.</p>

        </section>

        <section>
        <h2 className="text-[#577D4E] font-semibold text-xl tracking-tight pb-4">Memories</h2>
        <div className="mt-6">

          <Timeline date="1987" description="The drapes were first hung in a cozy home, adding warmth and privacy to the space. They remained for years before being repurposed."/>


          <Timeline date="1992 " description="The drapes were cut and transformed into costumes for a school play, starting their journey of reuse."/>

          <Timeline date="1999 " description="The remaining fabric was used to teach the family's daughter to sew. She turned it into a pair of pants for her older brother who wore them until he outgrew them."/>

          <Timeline isLast={true} date="2006" description="In 2006, the family hosted a foreign exchange student from Brazil. He received these homemade lounge pants as a gift the host family in Vancouver and wore them throughout a memorable Canadian winter."/>

          
          </div>
        </section>

        <section>
        <h2 className="text-[#577D4E] font-semibold text-2xl tracking-tighter pb-2">Stats</h2>
          <div className="grid grid-cols-2 gap-2">
            <StatCard type="water" stat="Water Saved" measure="6300L"/>
            <StatCard type="cloud" stat="CO2 Saved  " measure="20kg"/>
            <StatCard type="shirt" stat="times worn" measure="429"/>


          </div>
        </section>
        

        </main>
      </div>
    );
  }
  