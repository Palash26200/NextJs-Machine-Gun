import AssetCards from "@/components/AssetCards"
import Hero from "@/components/Hero"

export const prefixUrl = "/web"

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero/>
      <AssetCards/>
    </div>
  )
}
