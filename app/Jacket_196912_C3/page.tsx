
import Image from "next/image";
import placeholder from "@/public/placeholder.png"

export default function Jacket() {

    return (
      <div>
        <main className="  ">

          <h1>title of clothing</h1>
          <Image
          src={placeholder}
          alt = "alt text"
          />
          <h2>Biography</h2>
          <p>On a cold winter day in December 2001, the Red Scarf was gifted to a girl from her roommate, in celebration of her 21st birthday. The scarf would then make occasional appearances when the weather got cooler. As time went on, the student graduated and moved out, leaving the scarf behind in her old home. Many years later, the student makes a trip back home to visit her parents with her new family and rediscovers her old scarf. She subsequently gifts it to her daughter, who is also heading to University. </p>

          <h2>memories</h2>
          

        

        </main>
      </div>
    );
  }
  