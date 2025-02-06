
import Image from "next/image";
import placeholder from "@/public/placeholder.png"
import { Timeline } from "@/app/components/Timeline"

export default function scarf() {

    return (
      <div>
        <main className=" ">



        <h2 className="text-[#577D4E] font-medium text-2xl tracking-tighter pb-2">Red Scarf</h2>
          
          <Image
          src={placeholder}
          alt = "alt text"
          className="pb-8 w-full"
          />

          <h2 className="text-[#577D4E] font-medium text-xl tracking-tighter pb-2">Biography</h2>

          <p>On a cold winter day in December 2001, the Red Scarf was gifted to a girl from her roommate, in celebration of her 21st birthday. The scarf would then make occasional appearances when the weather got cooler. As time went on, the student graduated and moved out, leaving the scarf behind in her old home. Many years later, the student makes a trip back home to visit her parents with her new family and rediscovers her old scarf. She subsequently gifts it to her daughter, who is also heading to University. </p>


          <div className="pt-8">
          <h2 className="text-[#577D4E] font-medium text-xl tracking-tighter pb-4">Memories</h2>
          <Timeline date="1999" description="Sent off a close friend to Airport"/>
          <Timeline date="1999" description="Went on a date with the one"/>
          <Timeline date="1999" description="Won a massive snowball fight"/>
          <Timeline isLast={true} date="1999" description="Custom embroidery added by grandmother"/>
          </div>
        
          

        

        </main>
      </div>
    );
  }
  