import mongoose from 'mongoose';
//import dotenv from 'dotenv';
//dotenv.config();
//export const connection = (request, response, next) => {
export function createConnection() {
    const promise = mongoose.connect(process.env.DBURL, { maxPoolSize: 5 }, );
    promise.then(data => {
            console.log('DB Connected...');
            //next();
        }).catch(
            (err) => {
                console.log('Error Connecting database', err);
            }
        )
        //export default mongoose;
}

//}