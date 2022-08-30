export class FindUserByIdUseCase {
    constructor(userRepository) {
        this.repository = userRepository;
    }

    async execute(userId) {
        const userFinded = await this.repository.findById(userId);
        if (!userFinded) {
            throw new Error('Invalid ID: user not found');
        }

        return userFinded;
    }
}
