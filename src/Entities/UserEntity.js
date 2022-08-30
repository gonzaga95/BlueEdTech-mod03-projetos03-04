import { randomUUID } from 'node:crypto';
import { BcryptHelper } from '../auth/bcryptHelper.js';

export class UserEntity {
    constructor(user) {
        this.id = user.id ?? randomUUID();
        this.name = user.name;
        this.password = user.password;
        this.email = user.email;
        this.image = user.image;
    }

    validate() {
        if (!(this.name || this.password || this.email || this.image))
            throw new Error('Invalid user');
    }

    getUser() {
        const bcrypt = new BcryptHelper();
        const cryptPassword = bcrypt.hashGenerator(this.password);
        return {
            id: this.id,
            name: this.name,
            password: cryptPassword,
            email: this.email,
            image: this.image
        };
    }
}
