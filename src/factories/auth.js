import { AuthRoute } from '../routes/authRoute.js';
import { AuthController } from '../controllers/authController.js';
import { FindUserByEmailUseCase } from '../services/usecases/user/findUserByEmail.js';
import { UserRepository } from '../database/repository/userRepository.js';
import { BcryptHelper } from '../auth/bcryptHelper.js';
import { JwtHelper } from '../auth/jwt.js';

export default (router) => {
    const repository = new UserRepository();
    const bcryptHelper = new BcryptHelper();
    const jwtHelper = new JwtHelper();

    const findUserByEmailUseCase = new FindUserByEmailUseCase(repository);

    const authController = new AuthController(
        findUserByEmailUseCase,
        bcryptHelper,
        jwtHelper
    );

    const authRoutes = new AuthRoute(authController, router);

    return authRoutes;
};
