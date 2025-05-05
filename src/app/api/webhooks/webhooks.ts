import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const evt = await verifyWebhook(request, {
            signingSecret: process.env.CLERK_WEBHOOK_SIGNING_SECRET,
        })

        const { id } = evt.data
        const eventType = evt.type

        console.log(`Webhook received! ID: ${id}, Type: ${eventType}`)
        console.log('Webhook payload:', evt.data)

        switch (eventType) {
            case 'user.created':
                console.log('New user created:', evt.data)
                // Add your user creation logic here
                break
            case 'user.updated':
                console.log('User updated:', evt.data)
                // Add your user update logic here
                break
            case 'user.deleted':
                console.log('User deleted:', evt.data)
                // Add your user deletion logic here
                break
            default:
                console.log(`Unhandled event type: ${eventType}`)
        }

        return new Response('Webhook received successfully', { status: 200 })
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error verifying webhook', { status: 400 })
    }
}