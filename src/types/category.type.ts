export interface ICategory {
    _id: string;
    name: string;
}

export type CreateCategoryParams = {
    categoryName: string
}