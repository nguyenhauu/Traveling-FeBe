import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        city: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        distance: {
            type: Number,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        desc: {
            type: Number,
            required: true,
        },
        maxGroupSize: {
            type: Number,
            required: true,
        },
        reviews: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Review",
            },
        ],
        featured: {
            type: Boolean,
            default: false,
        },
    },
    {TimesTamps: True}
);

export default mongoose.mode("Tour", tourSchema);