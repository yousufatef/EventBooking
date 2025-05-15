import { Suspense } from "react"
import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import EventFilters from "@/components/event-filters"
import EventList from "@/components/event-list"

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 mix-blend-multiply" />
        <div className="relative py-20 px-6 md:px-12 flex flex-col items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Events Near You</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Find and attend events that match your interests, connect with like-minded people, and create unforgettable
            memories.
          </p>
          <Button size="lg" asChild>
            <Link href="/create-event">Create Your Event</Link>
          </Button>
        </div>
      </section>

      {/* Search & Filtering */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search events..." className="pl-10" />
          </div>
          <EventFilters />
        </div>
      </section>

      {/* Event List */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>

        <div>
          <Suspense fallback={<EventListSkeleton />}>
            <EventList />
          </Suspense></div>
      </section>
    </main>
  )
}

function EventListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-4 space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          </div>
        ))}
    </div>
  )
}
