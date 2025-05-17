import Header from "@/components/shared/Header";
import LottieHandler from "@/components/shared/LottieHandler";
import { findUserFromClerkId } from "@/hooks/findUserFromClerkId"
import { getUserBookingWithEvents } from "@/lib/actions/booking.actions"
import Link from "next/link"

interface BookingWithEvent {
  _id: string;
  userId: string;
  eventId: {
    _id: string;
    title: string;
    startDateTime: Date;
    endDateTime: Date;
    location?: string;
    imageUrl?: string;
  };
  createdAt: Date;
}

const MyTicketsPage = async () => {
  const { dbUserId } = await findUserFromClerkId()
  const bookings: BookingWithEvent[] = await getUserBookingWithEvents(dbUserId)

  if (!bookings || bookings.length === 0) {
    return (
      <div className="mt-[10%] flex flex-col items-center justify-center h-64 gap-4">
        <LottieHandler type="empty" />
        <Link href="/" className="text-blue-600 hover:underline">
          Browse Events
        </Link>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Tickets</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booked On
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {booking.eventId.imageUrl && (
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={booking.eventId.imageUrl}
                            alt={booking.eventId.title}
                          />
                        </div>
                      )}
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {booking.eventId.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(booking.eventId.startDateTime).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(booking.eventId.startDateTime).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {booking.eventId.location || 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      href={`/events/${booking.eventId._id}`}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      View
                    </Link>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default MyTicketsPage