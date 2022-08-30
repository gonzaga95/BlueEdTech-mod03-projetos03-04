import jwt from 'jsonwebtoken';

export class JwtHelper {
    generateToken(data) {
        const token = jwt.sign({ data }, process.env.SECRET, {
            expiresIn: '2h'
        });
        return token;
    }

    verifyToken(token) {
        const data = jwt.verify(token, process.env.SECRET);
        return data;
    }
}
