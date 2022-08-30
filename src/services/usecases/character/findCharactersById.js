export class FindCharactersByIdUseCase {
    constructor(characterRepository) {
        this.repository = characterRepository;
    }

    async execute(characterId) {
        const characterFinded = await this.repository.findById(characterId);
        if (!characterFinded) {
            throw new Error('Character not found');
        }

        return characterFinded;
    }
}
