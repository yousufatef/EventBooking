"use client";
import EventForm from '@/components/shared/EventForm';
import { useUser } from '@clerk/nextjs';
import React from 'react'

const CreateEventPage = () => {
    const { isSignedIn, user, isLoaded } = useUser();
    if (!isLoaded) {
        return null
    }
    if (isSignedIn && user.publicMetadata.isAdmin) {
        return (
            <>
                <section className='bg-purple-50 py-5 md:py-10 '>
                    <h3 className="text-center sm:text-left text-2xl font-bold">Create Event</h3>
                </section>
                <div className="my-8">
                    <EventForm type='create' />
                </div>
            </>
        )
    } else {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Access Denied</h1>
                <p className="mt-4 text-lg">You do not have permission to access this page.</p>
            </div>
        )
    }
}

export default CreateEventPage