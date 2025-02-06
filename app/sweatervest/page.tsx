
import Image from "next/image";
import sweatervestimg from "@/public/sweatervest.jpg"
import { Timeline } from "@/app/components/Timeline"
import { StatCard } from "../components/StatCard";
import Link from "next/link";

export default function sweatervest() {

    return (
      <div>
        <main className="pb-24 flex flex-col gap-10 relative  ">

        <div className="flex items-center p-4 w-full max-w-[600px] h-[5.25rem] fixed z-50 bottom-0 left-1/2 -translate-x-1/2 bg-white border-none">
        <Link href={"/scan"} className=" flex items-center justify-center text-white  bg-[#4D7B41] w-full h-full rounded-md font-semibold">Offer Trade</Link>
          </div>


        <section>
        <h2 className="text-[#577D4E] font-semibold text-2xl tracking-tight pb-2">Tessellation Vest</h2>
          
          <Image
          src={sweatervestimg}
          alt = "alt text"
          sizes="100vw"
          className=" bg-[#F8FBF9] aspect-[1/1.21] object-contain object-[40%_50%] w-full"
          />

        </section>

        <section className="">
        <h2 className="text-[#577D4E] font-semibold text-xl tracking-tight pb-2">Biography</h2>
          <p>In 2006, a foreign exchange student from Brazil received these homemade lounge pants as a gift from their host family in Vancouver. Created from old window drapes, they were worn and loved throughout the winter of 2006, but were ultimately left in Canada when the student returned home. Years later, these pants were found in the family’s closet and brought to this shop, where it was traded for a pair of boots.</p>

        </section>

        <section>
        <h2 className="text-[#577D4E] font-semibold text-xl tracking-tight pb-4">Memories</h2>
        <div className="mt-6">

          <Timeline date="1994" description="The knitted sweater vest was worn by its original owner when they watched Titanic in the theater for the first time, marking a memorable moment of youthful excitement. "/>


          <Timeline date="2000" description="The vest was present when the owner’s daughter spoke her first words, a quiet witness to the joy of new beginnings."/>

          <Timeline date="2018" description="It accompanied the daughter on her 18th birthday celebration, an enduring presence in a milestone that marked her transition into adulthood."/>

          <Timeline isLast={true} date="2022" description="The vest found its way to a new owner, worn on a trip to Fuji Mountain, carrying with it the legacy of family and travel. Its fabric, weathered and familiar, would make a great addition to you closet, with the right trade"/>

          
          </div>
        </section>

        <section>
        <h2 className="text-[#577D4E] font-semibold text-2xl tracking-tighter pb-2">Stats</h2>
          <div className="grid grid-cols-2 gap-2">
            <StatCard type="water" stat="Water Saved" measure="7300L"/>
            <StatCard type="cloud" stat="CO2 Saved  " measure="50kg"/>
            <StatCard type="shirt" stat="times worn" measure="600"/>


          </div>
        </section>
        

        </main>
      </div>
    );
  }
  