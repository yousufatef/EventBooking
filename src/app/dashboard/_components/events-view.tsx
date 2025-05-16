"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllEventsDashboard } from "@/lib/actions/event.actions"
import { useEffect, useState } from "react"
import { IEvent } from "@/types/event.type"
import { format } from "date-fns"



export default function EventsView() {
    const [events, setEvents] = useState<IEvent[]>([])
    useEffect(() => {
        const getEvents = async () => {
            const res = await getAllEventsDashboard()
            setEvents(res)
        }
        getEvents()
    })
    return (
        <Card>
            <CardHeader>
                <CardTitle>Events</CardTitle>
                <CardDescription>Manage your upcoming and past events.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead >Event Title</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {events.map((event: IEvent) => (
                            <TableRow key={event._id}>
                                <TableCell className="font-medium">{event.title}</TableCell>
                                <TableCell>{format(new Date(event.startDateTime), "PP")} - {format(new Date(event.endDateTime), "PP")}</TableCell>
                                <TableCell>{event.location}</TableCell>
                                <TableCell className="flex gap-2">
                                    <Badge className="bg-red-500">
                                        Delete
                                    </Badge>
                                    <Badge className="bg-green-500">
                                        Update
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
