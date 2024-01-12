import AssetCards from "@/components/AssetCards"
import AssetTable from "@/components/AssetTable/AssetTable"
import Hero from "@/components/Hero"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero/>
      <AssetCards/>
    </div>
  )
}
