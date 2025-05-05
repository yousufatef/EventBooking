import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const evt = await verifyWebhook(req)

        if (evt.type === 'user.created') {
            console.log('userCreated:', evt.data)
        }
        if (evt.type === 'user.updated') {
            console.log('userUpdated:', evt.data)
        }
        if (evt.type === 'user.deleted') {
            console.log('userDeleted:', evt.data)
        }

        return new Response('Webhook received', { status: 200 })
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error verifying webhook', { status: 400 })
    }
}