"use client"
import React, { startTransition, useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { ICategory } from '@/types/category.type'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { createCategory, getAllCategories } from '@/lib/actions/category.actions'

interface DropdownProps {
    value?: string
    onChangeHandler: () => void
}

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
    const [isOpen, setOpen] = useState(false)
    const [categories, setCategories] = useState<ICategory[]>([])
    const [newCategory, setNewCategory] = useState("")
    const handleAddCategory = () => {
        createCategory({
            categoryName: newCategory.trim()
        }).then((category) => {
            setCategories((prevState) => [...prevState, category])
        })
        setOpen(false)
    }
    useEffect(() => {
        const getCategories = async () => {
            const categoryList = await getAllCategories()
            if (categoryList) {
                setCategories(categoryList as ICategory[])
            }
        }
        getCategories()
    }, [])
    return (
        <Select
            defaultValue={value}
            onValueChange={onChangeHandler}

        >

            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
                {categories.length > 0 && categories.map((category) => (
                    <SelectItem key={category._id} value={category.name}>
                        {category.name}
                    </SelectItem>
                ))}

                <Dialog open={isOpen} onOpenChange={setOpen}>
                    <DialogTrigger className='p-2 flex w-full hover:bg-secondary'>Open</DialogTrigger>
                    <DialogContent className='w-full'>
                        <DialogHeader>
                            <DialogTitle>New Category</DialogTitle>
                            <DialogDescription className='my-4'>
                                <Input type='text' placeholder='Category name'
                                    onChange={(e) => setNewCategory(e.target.value)} />
                            </DialogDescription>
                            <DialogFooter>
                                <Button type='button' onClick={() => startTransition(handleAddCategory)}>Add</Button>
                            </DialogFooter>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </SelectContent>


        </Select>
    )

}

export default Dropdown