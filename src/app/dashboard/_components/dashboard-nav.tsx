"use client"

import { Users, Calendar, ShoppingCart } from "lucide-react"
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"

interface DashboardNavProps {
    onNavigate: (view: "users" | "events" | "orders") => void
    activeItem: string
}

export function DashboardNav({ onNavigate, activeItem }: DashboardNavProps) {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton isActive={activeItem === "users"} onClick={() => onNavigate("users")}>
                    <Users className="h-4 w-4" />
                    <span>Users</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton isActive={activeItem === "events"} onClick={() => onNavigate("events")}>
                    <Calendar className="h-4 w-4" />
                    <span>Events</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton isActive={activeItem === "orders"} onClick={() => onNavigate("orders")}>
                    <ShoppingCart className="h-4 w-4" />
                    <span>Orders</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
