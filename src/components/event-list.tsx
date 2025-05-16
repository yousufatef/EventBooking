// components/EventList.tsx
import { IEvent } from "@/types/event.type";
import { getAllEvents } from "@/lib/actions/event.actions";
import { EventCard } from "./shared/EventCard";
import PaginationControls from "./shared/PaginationControls";

interface EventListProps {
    searchParams: {
        page?: string;
        query?: string
    };
}

const EventList = async ({ searchParams }: EventListProps) => {
    const page = Number(searchParams.page) || 1;
    const limit = 6;

    const eventsData = await getAllEvents({ page, limit });

    if (!eventsData || !eventsData.data || eventsData.data.length === 0) {
        return (
            <div className="container py-8 text-center">
                <p>No events found</p>
            </div>
        );
    }

    const { data: events, totalPages } = eventsData;

    return (
        <div className="py-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {events.map((event: IEvent) => (
                    <EventCard key={event._id} event={event} />
                ))}
            </div>

            {totalPages > 1 && (
                <PaginationControls
                    currentPage={page}
                    totalPages={totalPages}
                />
            )}
        </div>
    );
};

export default EventList;