import Image from "next/image";
import BtsLogoOutlined from "../public/bts_logo_outlined.png";
import { Button } from "./ui/button";

export default function Header(){
    return (
        <div className="mr-10 ml-10 flex flex-row justify-between">
        <div className="text-5xl text-purple-800">
          <Image src={BtsLogoOutlined} alt="BTS logo" height={70} />
        </div>
        <div className="grid grid-cols-3 gap-x-2">
<Button > Read more</Button>        <Button > Read more</Button>     <Button > Read more</Button>     
        </div>
      </div>
    );
}