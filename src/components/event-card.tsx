import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Event } from "@/types/newTypes"

interface EventCardProps {
    event: Event
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="relative aspect-video">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                {event.isFeatured && <Badge className="absolute top-2 right-2">Featured</Badge>}
            </div>
            <CardContent className="p-4">
                <div className="flex flex-col gap-2 mb-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                    </div>
                </div>
                <h3 className="font-semibold line-clamp-1">{event.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{event.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div>
                    <span className="font-bold">
                        {event.tickets[0].price === 0 ? "Free" : `$${event.tickets[0].price.toFixed(2)}`}
                    </span>
                </div>
                <Link href={`/events/${event.id}`} className="text-sm font-medium text-primary hover:underline">
                    View Details
                </Link>
            </CardFooter>
        </Card>
    )
}
