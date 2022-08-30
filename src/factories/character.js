import { CharacterRepository } from '../database/repository/characterRepository.js';
import { CreateCharacterUseCase } from '../services/usecases/character/createCharacter.js';
import { UpdateCharacterUseCase } from '../services/usecases/character/updateCharacter.js';
import { DeleteCharacterUseCase } from '../services/usecases/character/deleteCharacter.js';
import { FindAllCharacterUseCase } from '../services/usecases/character/findAllCharacter.js';
import { FindCharactersByIdUseCase } from '../services/usecases/character/findCharactersById.js';
import { FindSearchCharacterUseCase } from '../services/usecases/character/findCharacterByName.js';
import { Services } from '../services/services.js';
import { CharacterController } from '../controllers/characterController.js';
import { CharacterRoutes } from '../routes/characterRoutes.js';

export default (router) => {
    const characterRepository = new CharacterRepository();

    const findCharacterbyIdUseCase = new FindCharactersByIdUseCase(
        characterRepository
    );
    const createCharacterUseCase = new CreateCharacterUseCase(
        characterRepository
    );

    const updateCharacterUseCase = new UpdateCharacterUseCase(
        characterRepository,
        findCharacterbyIdUseCase
    );
    const deleteCharacterUseCase = new DeleteCharacterUseCase(
        characterRepository
    );
    const findAllCharacterUseCase = new FindAllCharacterUseCase(
        characterRepository
    );
    const findCharacterByNameUseCase = new FindSearchCharacterUseCase(
        characterRepository
    );

    const characterService = new Services(
        createCharacterUseCase,
        updateCharacterUseCase,
        deleteCharacterUseCase,
        findCharacterbyIdUseCase,
        findAllCharacterUseCase,
        findCharacterByNameUseCase
    );

    const characterController = new CharacterController(
        characterService,
        findCharacterByNameUseCase
    );

    const characterRoutes = new CharacterRoutes(characterController, router);

    return characterRoutes;
};
