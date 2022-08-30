export class FindUserByEmailUseCase {
    constructor(userRepository) {
        this.repository = userRepository;
    }

    async execute(email) {
        const findUser = await this.repository.findByEmail(email);

        if (!findUser) {
            throw new Error('User not found');
        }

        return findUser;
    }
}
