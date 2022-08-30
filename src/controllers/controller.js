import { badRequest } from './errors/badRequest.js';

export class Controller {
    constructor(service) {
        this.service = service;
    }

    async create(req, res) {
        try {
            const response = await this.service.create(req.body);
            res.status(201).send(response);
        } catch (error) {
            console.log(error);
            badRequest(error, res);
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const response = await this.service.update(req.body, id);
            res.status(200).send(response);
        } catch (error) {
            console.log(error);
            badRequest(error, res);
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const response = await this.service.delete(id);
            res.status(200).send(response);
        } catch (error) {
            console.log(error);
            badRequest(error, res);
        }
    }

    async findById(req, res) {
        try {
            const id = req.params.id;
            const response = await this.service.findById(id);
            res.status(200).send(response);
        } catch (error) {
            console.log(error);
            badRequest(error, res);
        }
    }

    async find(req, res) {
        try {
            const data = await this.service.find();
            res.status(200).send(data);
        } catch (error) {
            console.log(error);
            res.staus(404).send('Not Found');
        }
    }
}
