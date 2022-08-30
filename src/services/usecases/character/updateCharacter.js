import { CharacterEntity } from '../../../Entities/CharacterEntity.js';

export class UpdateCharacterUseCase {
    constructor(characterRepository, findByIdCharacter) {
        this.repository = characterRepository;
        this.findByIdCharacter = findByIdCharacter;
    }

    async execute(characterUpdate, characterId) {
        const characterToUpdate = await this.findByIdCharacter.execute(
            characterId
        );
        const characterModified = Object.assign(
            characterToUpdate,
            characterUpdate
        );
        const characterUpdated = new CharacterEntity(
            characterModified,
            characterModified.userId
        );
        characterUpdated.validate();

        return await this.repository.update(characterUpdated.getCharacter());
    }
}
