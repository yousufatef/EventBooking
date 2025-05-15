import { IEvent } from "@/types/event.type"
import { getAllEvents } from "@/lib/actions/event.actions"
import { EventCard } from "./shared/EventCard"

const EventList = async () => {
    const events = await getAllEvents()


    return (
        <div className="container py-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event: IEvent) => (
                <EventCard key={event._id} event={event} />
            ))}
        </div>
    )
}

export default EventList
