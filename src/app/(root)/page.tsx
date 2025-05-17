import { Suspense } from "react"
// import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import EventList from "@/components/event-list"
import Hero from "@/components/shared/Hero"

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{
    pageNum?: string;
    query?: string;
  }>;
}) {
  const searchParamsRe = await searchParams
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />

      {/* Search & Filtering */}
      <section className="mb-8">
        <form className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search events..."
              className="pl-10 py-5 lg:py-6"
              name="query"
              defaultValue={searchParamsRe.query || ''}
            />
          </div>
          <Button type="submit" className="py-5 lg:py-6">Search</Button>
        </form>
      </section>

      {/* Event List */}
      <section>
        {/* <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {searchParamsRe.query
              ? `Search Results for "${searchParamsRe.query}"`
              : "Upcoming Events"}
          </h2>
          {searchParamsRe.query && (
            <Button variant="outline" size="sm" asChild>
              <Link href="/">Clear Search</Link>
            </Button>
          )}
        </div> */}

        <div>
          <Suspense fallback={<EventListSkeleton />}>
            <EventList searchParams={searchParamsRe} />
          </Suspense>
        </div>
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