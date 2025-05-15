"use client";

import { Badge } from "@/components/ui/badge";
import { IEvent } from "@/types/event.type";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function EventCard({ event }: { event: IEvent }) {
    const formattedStartDate = format(new Date(event.startDateTime), "PP");
    const formattedEndDate = format(new Date(event.endDateTime), "PP");
    const formattedPrice = event.isFree ? "FREE" : `$${event.price}`;

    return (
        <motion.div
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="absolute -right-12 -top-12 h-24 w-24 rotate-12 bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
            <div className="absolute -left-12 -bottom-12 h-24 w-24 rotate-12 bg-gradient-to-tr from-primary/20 to-primary/5 blur-2xl" />

            {/* Image with overlay on hover */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <img
                    src={event.imageUrl || "/placeholder.svg?height=400&width=600"}
                    alt={event.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={400}
                    height={256}
                />

                {/* Category badge positioned on image */}
                <Badge
                    variant="outline"
                    className="absolute right-3 top-3 z-20 bg-white/90 backdrop-blur-sm hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-800"
                >
                    {/* {event.categoryId} */}
                    HTML
                </Badge>

                {/* Price badge */}
                <div className="absolute bottom-3 right-3 z-20">
                    <Badge
                        variant={event.isFree ? "secondary" : "default"}
                        className={cn(
                            "px-3 py-1 font-bold shadow-md",
                            event.isFree
                                ? "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600"
                                : "bg-gradient-to-r from-violet-600 to-primary hover:from-violet-700 hover:to-primary/90",
                        )}
                    >
                        {formattedPrice}
                    </Badge>
                </div>
            </div>

            {/* Card content */}
            <div className="p-5">
                <div className="mb-4">
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h3>
                    <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                        {event.description || "Join us for an exciting event!"}
                    </p>
                </div>

                {/* Event details */}
                <div className="mb-5 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                            <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{event.location}</span>
                    </div>
                    <>
                        <div className="flex items-center gap-2 text-sm">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                                <Calendar className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">{formattedStartDate} - {formattedEndDate}</span>
                        </div>
                    </>

                </div>

                {/* Action button */}
                <Button
                    asChild
                    size="sm"
                    className="relative w-full overflow-hidden"
                >
                    <Link href={`/events/${event._id}`}>
                        <span className="relative z-10">Get Tickets</span>
                        <motion.div
                            className="absolute inset-0 -z-0 bg-white"
                            initial={{ x: "-100%", opacity: 0.3 }}
                            whileHover={{ x: "100%", opacity: 0.2 }}
                            transition={{ duration: 0.5 }}
                        />

                    </Link>
                </Button>
            </div>
        </motion.div >
    );
}
