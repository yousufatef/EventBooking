import { Event, Order } from "@/types/newTypes"

export const mockEvents: Event[] = [
    {
        id: "event-1",
        title: "Tech Conference 2025",
        description:
            "Join us for the biggest tech conference of the year. Network with industry leaders and learn about the latest technologies.",
        date: "2025-06-15",
        time: "09:00 AM",
        location: "San Francisco Convention Center",
        organizer: "TechEvents Inc.",
        category: "conference",
        image: "/placeholder.svg?height=400&width=800",
        isFeatured: true,
        tickets: [
            { type: "General Admission", price: 99, available: 500 },
            { type: "VIP Access", price: 299, available: 50 },
            { type: "Workshop Pass", price: 149, available: 100 },
        ],
    },
    {
        id: "event-2",
        title: "Music Festival",
        description:
            "A three-day music festival featuring top artists from around the world. Experience amazing performances across multiple stages.",
        date: "2025-07-10",
        time: "12:00 PM",
        location: "Central Park, New York",
        organizer: "Music Events Co.",
        category: "concert",
        image: "/placeholder.svg?height=400&width=800",
        isFeatured: false,
        tickets: [
            { type: "1-Day Pass", price: 75, available: 1000 },
            { type: "3-Day Pass", price: 180, available: 500 },
            { type: "VIP Weekend", price: 350, available: 100 },
        ],
    },
    {
        id: "event-3",
        title: "Business Workshop",
        description:
            "Learn essential business skills from industry experts. Topics include marketing, finance, and leadership.",
        date: "2025-05-20",
        time: "10:00 AM",
        location: "Business Center, Chicago",
        organizer: "Business Academy",
        category: "workshop",
        image: "/placeholder.svg?height=400&width=800",
        isFeatured: false,
        tickets: [
            { type: "Standard Entry", price: 50, available: 200 },
            { type: "Premium (with materials)", price: 80, available: 100 },
        ],
    },
    {
        id: "event-4",
        title: "Art Exhibition",
        description:
            "Explore contemporary art from emerging artists. The exhibition features paintings, sculptures, and digital art.",
        date: "2025-08-05",
        time: "11:00 AM",
        location: "Modern Art Gallery, Los Angeles",
        organizer: "Art Collective",
        category: "exhibition",
        image: "/placeholder.svg?height=400&width=800",
        isFeatured: true,
        tickets: [
            { type: "General Entry", price: 15, available: 300 },
            { type: "Guided Tour", price: 25, available: 50 },
        ],
    },
    {
        id: "event-5",
        title: "Startup Networking",
        description:
            "Connect with founders, investors, and industry experts. Perfect opportunity to grow your professional network.",
        date: "2025-06-25",
        time: "06:00 PM",
        location: "Innovation Hub, Austin",
        organizer: "Startup Connect",
        category: "networking",
        image: "/placeholder.svg?height=400&width=800",
        isFeatured: false,
        tickets: [
            { type: "Standard Entry", price: 0, available: 150 },
            { type: "Premium (with dinner)", price: 45, available: 50 },
        ],
    },
    {
        id: "event-6",
        title: "Food & Wine Festival",
        description:
            "Taste exquisite dishes and wines from top chefs and wineries. A culinary experience you won't forget.",
        date: "2025-09-12",
        time: "02:00 PM",
        location: "Waterfront Park, Seattle",
        organizer: "Culinary Events",
        category: "other",
        image: "/placeholder.svg?height=400&width=800",
        isFeatured: true,
        tickets: [
            { type: "Tasting Pass", price: 65, available: 400 },
            { type: "VIP Experience", price: 120, available: 100 },
        ],
    },
    {
        id: "event-7",
        title: "Web Development Bootcamp",
        description:
            "Intensive two-day bootcamp covering frontend and backend development. Perfect for beginners and intermediate developers.",
        date: "2025-07-05",
        time: "09:00 AM",
        location: "Tech Campus, Boston",
        organizer: "Code Academy",
        category: "workshop",
        image: "/placeholder.svg?height=400&width=800",
        isFeatured: false,
        tickets: [
            { type: "Standard Entry", price: 199, available: 50 },
            { type: "Team Ticket (3 people)", price: 499, available: 15 },
        ],
    },
    {
        id: "event-8",
        title: "Charity Gala Dinner",
        description:
            "Annual fundraising event supporting education initiatives. Join us for a night of fine dining and entertainment.",
        date: "2025-10-18",
        time: "07:00 PM",
        location: "Grand Hotel, Miami",
        organizer: "Education Foundation",
        category: "other",
        image: "/placeholder.svg?height=400&width=800",
        isFeatured: false,
        tickets: [
            { type: "Individual Seat", price: 150, available: 200 },
            { type: "Table (10 seats)", price: 1350, available: 20 },
        ],
    },
]

export const mockOrders: Order[] = [
    {
        id: "order-123",
        event: mockEvents[0],
        tickets: [
            { type: "General Admission", price: 99, quantity: 2 },
            { type: "Workshop Pass", price: 149, quantity: 1 },
        ],
        total: 347,
        purchaseDate: "2025-05-01",
        status: "confirmed",
    },
    {
        id: "order-456",
        event: mockEvents[3],
        tickets: [{ type: "Guided Tour", price: 25, quantity: 4 }],
        total: 100,
        purchaseDate: "2025-04-15",
        status: "confirmed",
    },
]
