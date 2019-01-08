import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let Product = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    numberInStock: {
        type: Number
    },
    cost: {
        type: Number
    },
    supplier: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

export default mongoose.model('Product', Product );