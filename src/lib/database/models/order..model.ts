import mongoose from "mongoose";



const orderSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    stripeId: {
        type: String,
        required: true,
        unique: true
    },
    totalAmount: {
        type: String,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, { timestamps: true });


const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
