import mongoose from 'mongoose';

import { Injectable } from '@nestjs/common';

@Injectable()
export class MongooseService {
  connection: mongoose.Mongoose | null = null;

  constructor() {
    const DBNAME = process.env.DBNAME;
    const DBURL = process.env.DBURL;
    const DBPORT = process.env.DBPORT;
    const MONGODB_URI = `mongodb://${DBURL}:${DBPORT}/${DBNAME}`;
    mongoose
      .connect(MONGODB_URI, {
        connectTimeoutMS: 5000,
        tls: false,
      })
      .then(() => console.info('Connection to mongodb successful'))
      .catch((error) => {
        console.error(error);
        throw Error('Error establishing connection to mongodb');
      });
  }
}
