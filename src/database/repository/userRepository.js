import { userModel } from '../mongoDB/schemas/userSchema.js';

export class UserRepository {
    async create(userData) {
        return await userModel.create(userData);
    }

    async update(user) {
        const userUpdated = await userModel.findOneAndUpdate(
            { id: user.id },
            user,
            {
                new: true
            }
        );
        return userUpdated;
    }

    async delete(id) {
        return await userModel.findOneAndDelete({ id: id });
    }

    async findById(id) {
        return await userModel.findOne({ id: id });
    }

    async findAll() {
        return await userModel.find();
    }

    async findByEmail(email) {
        return await userModel.findOne({ email: email });
    }
}
