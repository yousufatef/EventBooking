"use client"

import { useState } from "react"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarProvider,
    SidebarTrigger,
    SidebarInset,
    SidebarRail,
    SidebarFooter,
} from "@/components/ui/sidebar"
import { DashboardNav } from "./_components/dashboard-nav"
import { UsersView } from "./_components/users-view"
import { OrdersView } from "./_components/orders-view"
import EventsView from "./_components/events-view"
import { ModeToggle } from "@/components/ModeToggle"
import { ArrowLeftToLine } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
    const [activeView, setActiveView] = useState<"users" | "events" | "orders">("users")
    const router = useRouter()

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <Sidebar>
                    <SidebarHeader className="border-b border-sidebar-border">
                        <div className="flex h-16 items-center px-3 justify-between">
                            <h2 className="text-lg font-semibold">Dashboard</h2>
                            <ModeToggle />
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <DashboardNav onNavigate={setActiveView} activeItem={activeView} />
                    </SidebarContent>
                    <SidebarFooter className="border-t border-sidebar-border py-4">
                        <div className="flex gap-2 justify-center items-center cursor-pointer" onClick={() => router.push("/")}>
                            <span className="mb-1 font-semibold">Home</span>
                            <ArrowLeftToLine className="h-6 w-6" />
                        </div>
                    </SidebarFooter>
                    <SidebarRail />
                </Sidebar>
                <SidebarInset>
                    <div className="flex flex-col w-full">
                        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
                            <SidebarTrigger />

                        </header>
                        <main className="flex-1 px-6">
                            {activeView === "users" && <UsersView />}
                            {activeView === "events" && <EventsView />}
                            {activeView === "orders" && <OrdersView />}
                        </main>
                    </div>
                </SidebarInset>

            </div>
        </SidebarProvider>
    )
}
