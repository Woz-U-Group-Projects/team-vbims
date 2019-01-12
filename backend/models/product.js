import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let Product = new Schema({
    id: {
        type: String
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
        type: String
    },
    supplier: {
        type: String
    }
});

export default mongoose.model('Product', Product );