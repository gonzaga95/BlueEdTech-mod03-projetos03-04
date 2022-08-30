import express from 'express';
import cors from 'cors';

import { MongoDbConnection } from './src/database/mongoDB/connection/connect.js';
import makeUserFactory from './src/factories/user.js';
import makeCharacterFactory from './src/factories/character.js';
import makeAuthFactory from './src/factories/auth.js';

import swaggerUi from 'swagger-ui-express';
import { swaggerDocumentation } from './swagger.js';

import * as dotenv from 'dotenv';
dotenv.config();

const connectionDb = new MongoDbConnection();
connectionDb.connectDb();

const app = express();
const router = express.Router();

const port = process.env.PORT || 3000;

const characters = makeCharacterFactory(router);
const user = makeUserFactory(router);
const auth = makeAuthFactory(router);

app.use(cors());
app.use(express.json());

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocumentation, {
        swaggerOptions: {
            validatorUrl: null
        }
    })
);
app.use('/auth', auth.route());
app.use('/characters', characters.route());
app.use('/users', user.route());

app.listen(port, () => {
    console.log(`Server rodando em: ${port}`);
});
