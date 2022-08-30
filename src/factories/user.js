import { UserRepository } from '../database/repository/userRepository.js';
import { CreateUserUseCase } from '../services/usecases/user/createUser.js';
import { UpdateUserUseCase } from '../services/usecases/user/updateUser.js';
import { DeleteUserUseCase } from '../services/usecases/user/deleteUser.js';
import { FindAllUserUseCase } from '../services/usecases/user/findAllUser.js';
import { FindUserByIdUseCase } from '../services/usecases/user/findUserById.js';
import { Services } from '../services/services.js';
import { Controller } from '../controllers/controller.js';
import { UserRoutes } from '../routes/userRoutes.js';

export default (router) => {
    const userRepository = new UserRepository();

    const createUserUseCase = new CreateUserUseCase(userRepository);
    const findByIdUseCase = new FindUserByIdUseCase(userRepository);
    const findAllUserUseCase = new FindAllUserUseCase(userRepository);
    const deleteUserUseCase = new DeleteUserUseCase(userRepository);
    const updateUserUseCase = new UpdateUserUseCase(
        userRepository,
        findByIdUseCase
    );

    const userServices = new Services(
        createUserUseCase,
        updateUserUseCase,
        deleteUserUseCase,
        findByIdUseCase,
        findAllUserUseCase
    );

    const userController = new Controller(userServices);

    const userRoutes = new UserRoutes(userController, router);

    return userRoutes;
};
