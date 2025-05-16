import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const orders = [
    {
        id: "ORD-001",
        customer: "John Doe",
        date: "May 15, 2024",
        amount: "$129.99",
        status: "Delivered",
    },
    {
        id: "ORD-002",
        customer: "Jane Smith",
        date: "May 16, 2024",
        amount: "$79.50",
        status: "Processing",
    },
    {
        id: "ORD-003",
        customer: "Robert Johnson",
        date: "May 14, 2024",
        amount: "$249.99",
        status: "Shipped",
    },
    {
        id: "ORD-004",
        customer: "Emily Davis",
        date: "May 13, 2024",
        amount: "$59.99",
        status: "Delivered",
    },
    {
        id: "ORD-005",
        customer: "Michael Wilson",
        date: "May 17, 2024",
        amount: "$199.99",
        status: "Processing",
    },
]

export function OrdersView() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription>View and manage customer orders.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>{order.customer}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>{order.amount}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            order.status === "Delivered"
                                                ? "default"
                                                : order.status === "Shipped"
                                                ? "secondary"
                                                : "outline"
                                        }
                                    >
                                        {order.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
