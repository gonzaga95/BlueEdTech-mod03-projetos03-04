import * as bcrypt from 'bcrypt';

export class BcryptHelper {
    hashGenerator(password) {
        const saltRounds = 10;

        const cryptedPassword = bcrypt.hashSync(
            password,
            saltRounds,
            (err, hash) => {
                if (err) {
                    throw new Error('Error in hash');
                }

                return hash;
            }
        );

        return cryptedPassword;
    }

    comparePassword(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
}
