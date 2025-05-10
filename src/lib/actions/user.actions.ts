import { IUser } from "@/types/user.type";
import { connect } from "../database";
import User from "../database/models/user.model";

export const createOrUpdateUser = async ({
    id,
    first_name,
    last_name,
    image_url,
    email_addresses
}: IUser) => {
    try {
        await connect()
        const user = await User.findOneAndUpdate(
            { clerkId: id }, {
            $set: {
                firstName: first_name,
                lastName: last_name,
                profilePicture: image_url,
                email: email_addresses[0].email_address,
            }
        }, {
            new: true,
            upsert: true
        })
        return user

    }
    catch (error) {
        console.error("Error creating or updating user:", error);
        throw new Error("Failed to create or update user");
    }
}

export const getUserById = async (userId: string) => {
    try {
        await connect()
        const user = await User.findOne({ _id: userId })
        return user
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw new Error("Failed to fetch user");
    }
}

export const deleteUser = ({ id }: { id: string }) => {
    try {
        connect()
        return User.findOneAndDelete({ clerkId: id })
    } catch (error) {
        console.error("Error deleting user:", error);
        throw new Error("Failed to delete user");
    }
}