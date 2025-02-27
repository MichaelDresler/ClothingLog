
import Image from "next/image";
import jacketimg from "@/public/jacket.jpg"
import { Timeline } from "@/app/components/Timeline"
import { StatCard } from "../components/StatCard";
import Link from "next/link";

export default function Jacket() {

    return (
      <div>
        <main className="pb-24 flex flex-col gap-10 relative  ">

        <div className="flex items-center p-4 w-full max-w-[600px] h-[5.25rem] fixed z-50 bottom-0 left-1/2 -translate-x-1/2 bg-white border-none">
        <Link href={"/scan"} className=" flex items-center justify-center text-white  bg-[#4D7B41] w-full h-full rounded-md font-semibold">Offer Trade</Link>
          </div>


        <section>
        <h2 className="text-[#577D4E] font-semibold text-2xl tracking-tight pb-2">Harvard Square Jacket</h2>
          
          <Image
          src={jacketimg}
          alt = "alt text"
          sizes="100vw"
          className=" bg-[#FDFDFD] aspect-[1/1.21] object-contain object-[40%_50%] w-full"
          />

        </section>

        <section className="">
        <h2 className="text-[#577D4E] font-semibold text-xl tracking-tight pb-2">Biography</h2>
          <p>In 1969, a teenager in Chicago got this jacket as a Christmas gift. It quickly became a second skin, worn on late-night bike rides, to concerts, and even to a first job interview. In ‘72, their grandmother stitched a floral pattern above the right breast, turning it into something more personal. Years later, it landed in a Boston thrift exchange, where a college student traded 3 shirts and a pair of pants for it. He wore it everyday, through crammed study sessions, coffee-fueled all-nighters, and road trips. Over the decades, it’s been patched up, reinforced, and passed along, carrying a history stitched into every thread. The jacket was traded along with 8 other garments in exchange for a brand new denim jacket.</p>

        </section>

        <section>
        <h2 className="text-[#577D4E] font-semibold text-xl tracking-tight pb-4">Memories</h2>
        <div className="mt-6">

          <Timeline date="1969" description="A teenager in Chicago received this jacket as a Christmas gift, wearing it on late-night bike rides, to concerts, and to a first job interview. "/>


          <Timeline date="1972" description="The teenager’s grandmother stitched a floral pattern above the right breast"/>

          <Timeline date="1982 " description="The jacket ended up in a Boston thrift exchange, where a college student traded 3 shirts and a pair of pants for it. He wore it every day through study sessions, all-nighters, and road trips."/>

          <Timeline isLast={true} date="2006" description="Over the decades, the jacket was patched, reinforced, and passed along, carrying a history stitched into every thread. Eventually, it was traded here, along with 8 other garments, for a brand-new denim jacket"/>

          
          </div>
        </section>

        <section>
        <h2 className="text-[#577D4E] font-semibold text-2xl tracking-tighter pb-2">Stats</h2>
          <div className="grid grid-cols-2 gap-2">
            <StatCard type="water" stat="Water Saved" measure="18,800L"/>
            <StatCard type="cloud" stat="CO2 Saved  " measure="36kg"/>
            <StatCard type="shirt" stat="times worn" measure="6024"/>


          </div>
        </section>
        

        </main>
      </div>
    );
  }
  