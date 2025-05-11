"use server"

import { IEvent } from "@/types/event.type"
import { connect } from "../database"
import Event from "../database/models/event.model"
import { handleError } from "../utils"

export const createEvent = async (values: IEvent) => {
    try {
        await connect()
        const newEvent = await Event.create(values)
        return JSON.parse(JSON.stringify(newEvent))

    }
    catch (error) {
        handleError(error)
    }
}