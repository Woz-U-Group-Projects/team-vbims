import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let User = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    saltSecret: String
});

export default mongoose.model('User', User);