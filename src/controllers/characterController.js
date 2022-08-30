import { Controller } from './controller.js';
import { badRequest } from './errors/badRequest.js';

export class CharacterController extends Controller {
    constructor(service, findCharacterByName) {
        super(service);
        this.findCharacterByName = findCharacterByName;
    }

    async findByName(req, res) {
        try {
            const name = req.query.name;
            const response = await this.findCharacterByName.execute(name);
            res.status(200).send(response);
        } catch (error) {
            badRequest(error, res);
        }
    }
}
