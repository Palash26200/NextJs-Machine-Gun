import { Asset } from "@/interface/asset";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const AssetCard = ({data}:{data:Asset}) => {
  return (
    <Card className="w-[350px] overflow-hidden cursor-pointer">
        <CardContent className="w-full h-[250px]">
            <Image
                alt={data.asset_name}
                src={data.image}
                className="w-fit m-auto mt-1"
                width={250}
                height={350}
            />
        </CardContent>
      <CardContent>
        <div className="text-1xl">{data.asset_id+" "+data.asset_name}</div>
        <div>{}</div>
      </CardContent>
    </Card>
  );
}

export default AssetCard;