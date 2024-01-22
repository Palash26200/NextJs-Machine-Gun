"use client";
import Image from "next/image";
import { Asset } from "@/interface/asset";
import { ColumnDef } from "@tanstack/table-core";
import { Badge } from "@/components/ui/badge";
import { AssetStatus } from "@/enum/assetStatus";
import { CalendarIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
    cell: ({ row }) => {
      return (
        <Image
          alt={row.getValue("image")}
          src={row.getValue("image")}
          width={50}
          height={50}
        />
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      let status = row.getValue("status");
      let className = "text-white cursor-pointer ";
      switch (status) {
        case AssetStatus.ASSIGNED:
          className += "bg-red-400 hover:bg-red-600";
          break;
        case AssetStatus.REPAIRING:
          className += "bg-yellow-400 hover:bg-yellow-600";
          break;
        case AssetStatus.UNASSIGNED:
          className += "bg-green-400 hover:bg-green-600";
          break;
      }

      return (
        <HoverCard>
          <HoverCardTrigger>
            <Badge className={className}>{status + ""}</Badge>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">User name</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      );
    },
  },
];
