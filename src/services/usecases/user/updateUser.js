import { UserEntity } from '../../../Entities/UserEntity.js';

export class UpdateUserUseCase {
    constructor(userRepository, findUserByIdUseCase) {
        this.repository = userRepository;
        this.findById = findUserByIdUseCase;
    }

    async execute(dataUpdateUser, userId) {
        const userToUpdated = await this.findById.execute(userId);

        const updatedUser = Object.assign(userToUpdated, dataUpdateUser);

        const newUser = new UserEntity(updatedUser);
        newUser.validate();

        return await this.repository.update(newUser.getUser());
    }
}
