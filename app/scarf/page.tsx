
import Image from "next/image";
import scarfimg from "@/public/scarf.jpg"
import { Timeline } from "@/app/components/Timeline"
import { StatCard } from "../components/StatCard";
import Link from "next/link";

export default function scarf() {

    return (
      <div>
        <main className="pb-24 flex flex-col gap-10 relative  ">

        <div className="flex items-center p-4 w-full max-w-[600px] h-[5.25rem] fixed z-50 bottom-0 left-1/2 -translate-x-1/2 bg-white border-none">
        <Link href={"/scan"} className=" flex items-center justify-center text-white  bg-[#4D7B41] w-full h-full rounded-md font-semibold">Offer Trade</Link>
          </div>


        <section>
        <h2 className="text-[#577D4E] font-semibold text-2xl tracking-tight pb-2">Red Scarf</h2>
          
          <Image
          src={scarfimg}
          alt = "alt text"
          className="aspect-[1/1.21] object-cover object-[70%_0%] w-full"
          />

        </section>

        <section className="">
        <h2 className="text-[#577D4E] font-semibold text-xl tracking-tight pb-2">Biography</h2>
          <p>On a cold winter day in December 2001, the Red Scarf was gifted to a girl from her roommate, in celebration of her 21st birthday. The scarf would then make occasional appearances when the weather got cooler. As time went on, the student graduated and moved out, leaving the scarf behind in her old home. Many years later, the student makes a trip back home to visit her parents with her new family and rediscovers her old scarf. She subsequently gifts it to her daughter, who is also heading to University. </p>

        </section>

        <section>
        <h2 className="text-[#577D4E] font-semibold text-xl tracking-tight pb-4">Memories</h2>
        <div className="mt-6">
          <Timeline date="2001" description="The Red Scarf was gifted to a girl by her roommate for her 21st birthday."/>
          <Timeline date="2004" description="The girl graduated, moved out, and left the Red Scarf behind in her old home."/>
          <Timeline date="2012" description=" The girl returned home to visit her parents and rediscovered the Red Scarf."/>
          <Timeline isLast={true} date="2022" description="She gifted the Red Scarf to her daughter, who was heading to University."/>
          </div>
        </section>

        <section>
        <h2 className="text-[#577D4E] font-semibold text-2xl tracking-tighter pb-2">Stats</h2>
          <div className="grid grid-cols-2 gap-2">
            <StatCard type="water" stat="Water Saved" measure="1800L"/>
            <StatCard type="cloud" stat="CO2 Saved  " measure="5kg"/>
            <StatCard type="shirt" stat="times worn" measure="105"/>


          </div>
        </section>
        

        </main>
      </div>
    );
  }
  