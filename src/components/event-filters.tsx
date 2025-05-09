"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function EventFilters() {
    const [activeFilters, setActiveFilters] = useState<string[]>([])
    const [priceRange, setPriceRange] = useState([0, 100])

    const addFilter = (filter: string) => {
        if (!activeFilters.includes(filter)) {
            setActiveFilters([...activeFilters, filter])
        }
    }

    const removeFilter = (filter: string) => {
        setActiveFilters(activeFilters.filter((f) => f !== filter))
    }

    return (
        <div>
            <div className="flex gap-2 items-center">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className="flex gap-2">
                            <Filter className="h-4 w-4" />
                            Filters
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium mb-2">Category</h4>
                                <Select onValueChange={(value) => addFilter(`Category: ${value}`)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="conference">Conference</SelectItem>
                                        <SelectItem value="workshop">Workshop</SelectItem>
                                        <SelectItem value="concert">Concert</SelectItem>
                                        <SelectItem value="exhibition">Exhibition</SelectItem>
                                        <SelectItem value="networking">Networking</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Separator />

                            <div>
                                <h4 className="font-medium mb-2">Date</h4>
                                <Select onValueChange={(value) => addFilter(`Date: ${value}`)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select date range" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="today">Today</SelectItem>
                                        <SelectItem value="tomorrow">Tomorrow</SelectItem>
                                        <SelectItem value="this-week">This week</SelectItem>
                                        <SelectItem value="this-weekend">This weekend</SelectItem>
                                        <SelectItem value="next-week">Next week</SelectItem>
                                        <SelectItem value="this-month">This month</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Separator />

                            <div>
                                <h4 className="font-medium mb-2">Location</h4>
                                <Select onValueChange={(value) => addFilter(`Location: ${value}`)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="new-york">New York</SelectItem>
                                        <SelectItem value="los-angeles">Los Angeles</SelectItem>
                                        <SelectItem value="chicago">Chicago</SelectItem>
                                        <SelectItem value="miami">Miami</SelectItem>
                                        <SelectItem value="austin">Austin</SelectItem>
                                        <SelectItem value="san-francisco">San Francisco</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Separator />

                            <div>
                                <div className="flex justify-between mb-2">
                                    <h4 className="font-medium">Price Range</h4>
                                    <span className="text-sm text-muted-foreground">
                                        ${priceRange[0]} - ${priceRange[1]}
                                    </span>
                                </div>
                                <Slider
                                    defaultValue={[0, 100]}
                                    max={500}
                                    step={10}
                                    value={priceRange}
                                    onValueChange={(value) => {
                                        setPriceRange(value as [number, number])
                                        // Only add the filter when user stops dragging
                                    }}
                                    onValueCommit={(value) => {
                                        // Remove any existing price filter
                                        setActiveFilters(activeFilters.filter((f) => !f.startsWith("Price:")))
                                        // Add the new price filter
                                        addFilter(`Price: $${value[0]} - $${value[1]}`)
                                    }}
                                />
                            </div>

                            <Separator />

                            <div className="flex justify-between">
                                <Button variant="outline" size="sm" onClick={() => setActiveFilters([])}>
                                    Clear All
                                </Button>
                                <Button size="sm">Apply Filters</Button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>

                {activeFilters.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {activeFilters.map((filter) => (
                            <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                                {filter}
                                <X className="h-3 w-3 cursor-pointer" onClick={() => removeFilter(filter)} />
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
