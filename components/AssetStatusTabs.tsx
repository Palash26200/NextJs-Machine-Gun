import asset_status from "@/public/constants/asset_status";
import Link from "next/link";

export default function AssetStatusTabs() {
  return (
    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
        {asset_status.map((val, idx) => (
          <Link
            key={`${idx}-${val}`}
            href="/val"
            className="flex w-1/2 items-center justify-center capitalize text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            {val}
          </Link>
        ))}
      </div>
    </div>
  );
}
