"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { handleError } from "@/lib/utils"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    status: string;
    isAdmin: boolean;
    lastActive: string;
    profilePicture?: string;
}

export function UsersView() {
    const [users, setUsers] = useState<IUser[]>([])
    const router = useRouter()
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('/api/user')
                const data = await res.json()
                setUsers(data)
            } catch (err) {
                handleError(err)
            }
        }

        fetchUsers()
    }, [])
    console.log(users);



    return (
        <div className="py-6">
            <div className="flex gap-1 items-center cursor-pointer mb-4" onClick={() => router.push("/")}>
                <ChevronLeft className="h-6 w-6" />
                <span className="font-semibold">Home</span>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Users</CardTitle>
                    <CardDescription>Manage your users and their permissions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Role</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={user.profilePicture || "/placeholder.svg"} alt={user.firstName} />
                                                <AvatarFallback>{user.firstName.substring(0, 2).toUpperCase()}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-medium">{user.firstName} {user.lastName}</div>
                                                <div className="text-sm text-muted-foreground">{user.email}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{user.isAdmin ? "Admin" : "User"}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}