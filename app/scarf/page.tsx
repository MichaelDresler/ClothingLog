
import Image from "next/image";
import scarfimg from "@/public/scarf.jpg"
import { Timeline } from "@/app/components/Timeline"
import { StatCard } from "../components/StatCard";

export default function scarf() {

    return (
      <div>
        <main className="pb-24 flex flex-col gap-10   ">


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
          <Timeline date="2003 February" description="Sent off a close friend to Airport"/>
          <Timeline date="2005 November" description="Went on a date with the one"/>
          <Timeline isLast={true} date="2005 December" description="Won a massive snowball fight"/>
          </div>
        </section>

        <section>
        <h2 className="text-[#577D4E] font-semibold text-2xl tracking-tighter pb-2">Stats</h2>
          <div className="grid grid-cols-2 gap-2">
            <StatCard type="water" stat="Water Saved" measure="105L"/>
            <StatCard type="cloud" stat="CO2 Saved  " measure="20kg"/>
            <StatCard type="shirt" stat="times worn" measure="105"/>


          </div>
        </section>
        

        </main>
      </div>
    );
  }
  