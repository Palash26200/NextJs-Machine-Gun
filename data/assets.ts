import { Asset } from "@/interface/asset";
import { AssetStatus } from "@/enum/assetStatus";

const assets:Asset[] = [
    {
        asset_id: 1,
        asset_type: 1,
        asset_name: 'Mac',
        image: '/image/mac.jpg',
        status: AssetStatus.ASSIGNED,
    },
    {
        asset_id: 2,
        asset_type: 2,
        asset_name: 'Headphones',
        image: '/image/headphone.webp',
        status: AssetStatus.UNASSIGNED,
    },
    {
        asset_id: 3,
        asset_type: 1,
        asset_name: 'Desktop Computer',
        image: '/image/desktop-computer.webp',
        status: AssetStatus.REPAIRING,
    },
    {
        asset_id: 4,
        asset_type: 3,
        asset_name: 'Printer',
        image: '/image/printer.webp',
        status: AssetStatus.UNASSIGNED,
    },
    {
        asset_id: 5,
        asset_type: 2,
        asset_name: 'Monitor',
        image: '/image/monitor.webp',
        status: AssetStatus.ASSIGNED,
    },
    {
        asset_id: 6,
        asset_type: 1,
        asset_name: 'Tablet',
        image: '/image/tablet.webp',
        status: AssetStatus.UNASSIGNED,
    },
    {
        asset_id: 7,
        asset_type: 3,
        asset_name: 'Scanner',
        image: '/image/scanner.webp',
        status: AssetStatus.REPAIRING,
    },
    {
        asset_id: 8,
        asset_type: 2,
        asset_name: 'Mouse',
        image: '/image/mouse.webp',
        status: AssetStatus.ASSIGNED,
    },
    {
        asset_id: 9,
        asset_type: 1,
        asset_name: 'Smartphone',
        image: '/image/smartphone.webp',
        status: AssetStatus.UNASSIGNED,
    },
    {
        asset_id: 10,
        asset_type: 3,
        asset_name: 'Fax Machine',
        image: '/image/fax-machine.webp',
        status: AssetStatus.REPAIRING,
    },
];

export default assets;