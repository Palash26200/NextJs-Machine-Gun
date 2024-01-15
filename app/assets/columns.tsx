"use client"
import Image from "next/image";
import { Asset } from "@/interface/asset"
import { ColumnDef } from "@tanstack/table-core"
import { Badge } from "@/components/ui/badge";
import { AssetStatus } from "@/enum/assetStatus";

export const columns: ColumnDef<Asset>[] = [
    {
        accessorKey: "asset_id",
        header: "Asset ID",
    },
    {
        accessorKey: "asset_name",
        header: "Asset",
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({row}) => {
            return (
                <Image 
                    alt={row.getValue("image")}
                    src={row.getValue("image")}
                    width={100}
                    height={100}
                />
            )
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}) => {
            let status = row.getValue("status");
            let className = "text-white cursor-pointer ";
            switch(status) {
                case AssetStatus.ASSIGNED :
                    className += "bg-red-400 hover:bg-red-600";
                    break;
                case AssetStatus.REPAIRING :
                    className += "bg-yellow-400 hover:bg-yellow-600";
                    break;
                case AssetStatus.UNASSIGNED :
                    className += "bg-green-400 hover:bg-green-600";
                    break;
            }
            return <Badge className={className}>{status+""}</Badge>
        }
    }
];