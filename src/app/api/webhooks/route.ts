import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'
export async function POST(req: NextRequest) {
    try {
        const evt = await verifyWebhook(req)

        // Do something with payload
        // For this guide, log payload to console
        const { id } = evt.data
        const eventType = evt.type
        console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
        console.log('Webhook payload:', evt.data)

        if (eventType === 'user.created') {
            console.log('New user created:', evt.data.id)
        }
        if (eventType === 'user.updated') {
            console.log('User updated:', evt.data.id)
        }
        if (eventType === 'user.deleted') {
            console.log('User deleted:', evt.data.id)
        }

        return new Response('Webhook received', { status: 200 })
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error verifying webhook', { status: 400 })
    }
}