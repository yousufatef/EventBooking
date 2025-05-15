import { getEventById } from "@/lib/actions/event.actions";
import { format } from "date-fns";
import { Calendar, MapPin } from "lucide-react";

const EventDetailsPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const event = await getEventById(id);
    const formattedStartDate = format(new Date(event.startDateTime), "PP");
    const formattedEndDate = format(new Date(event.endDateTime), "PP");

    return (
        <section className="bg-primary-50 bg-dotted-pattern bg-contain py-10 px-4 md:px-10">
            <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="h-full w-full object-cover"
                />
                <div className="flex flex-col gap-8 p-6 md:p-10">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold text-gray-900">{event.title}</h2>
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-semibold">
                                {event.isFree ? "FREE" : `$${event.price}`}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 text-gray-700">
                        <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-primary" />
                            <p className="text-base md:text-lg">
                                {formattedStartDate} - {formattedEndDate}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-primary" />
                            <p className="text-base md:text-lg">{event.location}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-semibold text-gray-800">
                            {"  What You'll Learn"}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{event.description}</p>
                        {event.url && (
                            <a
                                href={event.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 underline hover:text-primary-800 transition"
                            >
                                {event.url}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetailsPage;
