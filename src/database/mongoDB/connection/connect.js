import { mongoose } from 'mongoose';

export class MongoDbConnection {
    async connectDb() {
        await mongoose.connect(process.env.MONGODB_URI);
    }
}
