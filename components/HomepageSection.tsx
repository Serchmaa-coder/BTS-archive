import Image from "next/image";
import BtsLogoFilled from "../public/bts_logo_filled.png";
import { Button } from "./ui/button";
import ReadMore from "./ReadMore";
import { btsWikiIntro } from "@/lib/info";
export default function HomepageSection() {
  
  return (
    <div className="m-10 flex flex-row justify-between bg-white p-10 shadow-xl">
      <div className="w flex h-100 flex-col w-1/2">
        <h1 className="pt-20 pb-20 text-7xl">BTS/방탄소년단</h1>
        <hr />
        <ReadMore text={btsWikiIntro} />
      </div>
      <div className="flex-shrink-0">
        <Image
          src={BtsLogoFilled}
          alt="BTS logo"
          height={500}
          width={350}
          className="object-contain"
        />
      </div>
    </div>
  );
}
