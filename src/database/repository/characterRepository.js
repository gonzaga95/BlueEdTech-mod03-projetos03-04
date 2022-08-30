import { characterModel } from '../mongoDB/schemas/characterSchema.js';

export class CharacterRepository {
    async create(character) {
        return await characterModel.create(character);
    }

    async update(character) {
        const characterUpdated = await characterModel.findOneAndUpdate(
            { id: character.id },
            character,
            { new: true }
        );
        return characterUpdated;
    }

    async delete(character) {
        return await characterModel.findOneAndDelete({ id: character });
    }

    async findById(characterId) {
        return await characterModel.findOne({ id: characterId });
    }

    async findAll() {
        return await characterModel.find();
    }

    async search(name) {
        return await characterModel.findOne({ name: name });
    }
}
