export class DeleteUserUseCase {
    constructor(userRepository) {
        this.repository = userRepository;
    }

    async execute(userId) {
        const deleteUser = await this.repository.delete(userId);
        if (!deleteUser) {
            throw new Error('User not found');
        }

        return deleteUser;
    }
}
