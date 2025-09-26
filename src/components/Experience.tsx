import { Timeline } from "@/components/ui/timeline"
import { timelineData } from "@/data"

export default function Experience() {
    return (

        <div id="experience" className="relative w-full">
            <Timeline data={timelineData} />
        </div>

    )
}