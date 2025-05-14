import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getEventById } from '@/lib/actions/event.actions'
import { SearchParamProps } from '@/types'
import { Clock, MapPin } from 'lucide-react'

const EventDetailsPage = async ({ params: { id } }: SearchParamProps) => {
    const event = await getEventById(id)

    return (
        <main className="container  py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="rounded-xl lg:mb-0 ">
                    <img src={event.imageUrl} alt={event.title} />
                </div>

                <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <Badge>HTML</Badge>
                        {<Badge variant="secondary">Featured</Badge>}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-6">{event.title}</h1>
                    <div className="ml-2 text-muted-foreground mb-6">
                        <p >{event.description}</p>
                    </div>
                    <Separator className="my-6" />
                    <div className="flex flex-col gap-3 mb-6 text-muted-foreground ml-2">

                        <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5" />
                            <span>{event.startDateTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5" />
                            <span>{event.endDateTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5" />
                            <span>{event.location}</span>
                        </div>
                    </div>

                    <Separator className="my-6" />


                    <div className="border rounded-xl p-6 w-[80%] text-center ml-2">
                        <div className="flex justify-between items-center p-3 border rounded-lg ">
                            <h3 className="font-bold">Ticket Price:</h3>
                            <span>{event.price ? event.price : "IsFree"}</span>
                        </div>
                        <Button className='w-[80%] mt-6 cursor-pointer'>Book Now</Button>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default EventDetailsPage
