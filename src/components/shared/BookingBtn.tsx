"use client"
import { bookEventAction } from '@/lib/actions/booking.actions';
import { Button } from '../ui/button'
import { useState } from 'react';

const BookingBtn = ({ userId, eventId, isBooked: initialBooked }: { userId: string, eventId: string, isBooked: boolean; }) => {
    const [isBooked, setIsBooked] = useState(initialBooked);
    const handleBooking = async () => {
        if (isBooked) return;
        await bookEventAction(userId, eventId);
        setIsBooked(true);
    }
    return (
        <Button
            className="mb-2"
            disabled={isBooked ? true : false}
            size="lg"
            onClick={handleBooking}
        >
            {isBooked ? "Booked" : "Book Now"}
        </Button>
    )
}

export default BookingBtn