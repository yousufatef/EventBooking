export interface IEvent {
    _id?: string
    title: string
    description: string
    location: string
    imageUrl: string
    startDateTime: Date
    endDateTime: Date
    categoryId: string
    price: string
    isFree: boolean
    url: string
}
export type CreateEventParams = {
    event: IEvent
}
