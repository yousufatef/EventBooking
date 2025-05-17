'use server';


import { redirect } from 'next/navigation';
import { connect } from '../database';
import Booking from '../database/models/booking.model';

export async function bookEventAction(userId: string, eventId: string) {
    await connect();

    if (!userId || !eventId) throw new Error('Missing IDs');

    const existing = await Booking.findOne({ userId, eventId });

    if (existing) {
        throw new Error('You already booked this event');
    }

    await Booking.create({ userId, eventId });

    redirect('/success');
}

export const isEventBooked = async (userId: string, eventId: string) => {
    await connect();

    const booking = await Booking.findOne({ userId, eventId });

    return Boolean(booking);
};
