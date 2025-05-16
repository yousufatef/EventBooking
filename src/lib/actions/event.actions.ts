"use server"

import { IEvent } from "@/types/event.type"
import { connect } from "../database"
import Event from "../database/models/event.model"
import { handleError } from "../utils"
import { GetAllEventsParams } from "@/types"

export const createEvent = async (event: IEvent) => {
  try {
    await connect();
    const newEvent = await Event.create({ ...event })

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
export const getAllEvents = async ({
  limit = 6,
  page = 1
}: GetAllEventsParams) => {
  try {
    await connect();

    const condition = {};

    // Calculate how many documents to skip
    const skip = (page - 1) * limit;

    const eventsQuery = Event.find(condition)
      .sort({ createdAt: "desc" })
      .skip(skip)
      .limit(limit);

    const eventsCount = await Event.countDocuments(condition);

    // Execute the query
    const events = await eventsQuery.exec();

    return {
      data: JSON.parse(JSON.stringify(events)),
      totalPages: Math.ceil(eventsCount / limit),
      currentPage: page,
      totalEvents: eventsCount
    };
  } catch (error) {
    handleError(error);
  }
};
export const getAllEventsDashboard = async () => {
  try {
    await connect();
    const events = await Event.find();

    return JSON.parse(JSON.stringify(events))
  } catch (error) {
    handleError(error);
  }
};
