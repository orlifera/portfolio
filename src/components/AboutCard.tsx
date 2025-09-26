import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import { AboutCardType } from "@/types"
import SkillPill from "@/components/SkillPill"
import Link from "next/link"


export default function AboutCard({ icon, title, description, tags }: AboutCardType) {
    return (
        <Card className="flex flex-col justify-between h-full">
            <CardHeader className="flex flex-col gap-4">
                <CardTitle className="flex justify-center">{icon}</CardTitle>
                <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-center text-sm">{description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag, index) => (
                    <Link href={`https://www.google.com/search?q=${tag}`} key={index} target="_blank" rel="noopener noreferrer">
                        <SkillPill title={tag} text="text-xs" />
                    </Link>
                ))}
            </CardFooter>
        </Card>

    )
}