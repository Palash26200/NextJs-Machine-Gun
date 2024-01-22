"use client"
import { Skeleton } from "@/components/ui/skeleton";
import * as React from "react"
import { Progress } from "@/components/ui/progress"

export default function Loading() {
  let className = "w-full h-12 bg-primary";
  let skeleton = <Skeleton className={className} />;
  return (
    <div className="flex flex-col gap-2 p-2">
      {Array.from({ length: 5 }, () => skeleton)}
      {/* <Progress /> */}
    </div>
  );
}




export function ProgressDemo() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 1)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}
