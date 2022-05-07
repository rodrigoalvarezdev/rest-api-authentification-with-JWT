import Mongoose from "mongoose";

(async()=>{
    try {
        await Mongoose.connect('mongodb://localhost/conpanydb');
        console.log('database is connected');
    } catch (error) {
        console.log(error);
    }
})();

