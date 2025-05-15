"use server"

import { IEvent } from "@/types/event.type"
import { connect } from "../database"
import Event from "../database/models/event.model"
import { handleError } from "../utils"

export const createEvent = async (values: IEvent) => {
    try {
        await connect();

        const { categoryId, ...rest } = values;

        if (!categoryId) {
            throw new Error('categoryId is required');
        }

        const newEvent = await Event.create({
            ...rest,
            category: categoryId, // ✅ mapping categoryId → category
        });

        return JSON.parse(JSON.stringify(newEvent));
    } catch (error) {
        handleError(error);
    }
};

export const getEventById = async (eventId: string) => {
    try {
        await connect()
        const event = await Event.findById(eventId)
        return JSON.parse(JSON.stringify(event))

    }
    catch (error) {
        handleError(error)
    }
}
export const getAllEvents = async () => {
    try {
        await connect()
        const events = await Event.find()
        return JSON.parse(JSON.stringify(events))

    }
    catch (error) {
        handleError(error)
    }
}
