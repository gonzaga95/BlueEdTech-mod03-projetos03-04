import { JwtHelper } from '../auth/jwt.js';
import { UserRepository } from '../database/repository/userRepository.js';
import { FindUserByIdUseCase } from '../services/usecases/user/findUserById.js';

export async function authentication(req, res, next) {
    const token = req.headers.authorization;
    const jwt = new JwtHelper();

    try {
        const userData = jwt.verifyToken(token.slice(7));

        const repository = new UserRepository();
        const findUserById = new FindUserByIdUseCase(repository);

        await findUserById.execute(userData.data.id);

        next();
    } catch (err) {
        console.log(err);
        res.status(401).send('Authetication failed, invalid token');
    }
}
