import mongo from 'mongoose';
const { Schema, model } = mongo;

const characterSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    userId: { type: String, required: true },
    createAt: { type: Date, default: Date.now() }
});

export const characterModel = model('Character', characterSchema);
