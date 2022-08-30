export class FindSearchCharacterUseCase {
    constructor(characterRepository) {
        this.repository = characterRepository;
    }

    async execute(characterName) {
        const finded = await this.repository.search(characterName);

        if (!finded) {
            throw new Error('User not found');
        }

        return finded;
    }
}
