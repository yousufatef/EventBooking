import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Calendar, Home, Menu, Ticket } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


const Header = () => {
    return (
        <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <div className="flex flex-col gap-2 py-4 p-6">
                                <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-12">
                                    <Calendar className="h-8 w-8" />
                                    <span>EventHub</span>
                                </Link>
                                <nav className="flex flex-col gap-3">
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-xl font-semibold mb-6"
                                    >
                                        <Home className="h-8 w-8" />
                                        <span>Home</span>
                                    </Link>
                                    <Link
                                        href="/create-event"
                                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-xl font-semibold mb-6"
                                    >
                                        <Calendar className="h-8 w-8" />
                                        <span>Create Event</span>
                                    </Link>
                                    <Link
                                        href="/orders/order-123"
                                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-xl font-semibold mb-6"
                                    >
                                        <Ticket className="h-8 w-8" />
                                        <span>My Tickets</span>
                                    </Link>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                        <Calendar className="h-5 w-5" />
                        <span>EventHub</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                        Home
                    </Link>
                    <Link
                        href="/create-event"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        Create Event
                    </Link>
                    <Link
                        href="/orders/order-123"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        My Tickets
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <SignedOut>
                        <Button asChild size={"lg"}>
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </header>
    )
}

export default Header