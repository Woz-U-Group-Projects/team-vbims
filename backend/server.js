import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import product from './models/product';

import { runInNewContext } from 'vm';

const app = express();
const router = express.Router();



app.use(cors());
app.use(bodyParser.json());



mongoose.connect('mongodb+srv://Brandon:Wozu12345@cluster0-awxzg.mongodb.net/products?retryWrites=true');


const connection = mongoose.connection;


connection.once('open', () => {
    console.log('MongoDB connected Successfuly!');

});

// endpoints configuration 

router.route('/products').get((req, res) =>{
    product.find((err, products) => {
        if (err)
           console.log(err);
        else
            res.json(products);
    });
});




router.route('/products/:id').get((req, res) =>{
    product.findById(req.params.id, (err, prodcut) => {
        if (err)
            console.log(err);
        else
            res.json(prodcut);
    });
});

// geting product frm the database by id 




router.route('/products/add').post((req, res) => {
    let product = new Product(req.body);
    product.save()
           .then(product =>{
               res.status(200).json({'product': ' Added Successfully'});

           })
           .catch(err => {
               res.status(400).send( 'failed to create new products') 
           });
});

router.route('/products/update/:id').post((req, res) => {
    product.findById(req.params.id, (err, product) => {
        if (!Product)
            return next(new Error('Not Able To Load Doc'));
        else {
            product.name = req.body.name;
            product.description = req.body.description;
            product.numberInStock = req.body.numberInStock;
            product.cost = req.body.cost;
            product.supplier = req.body.supplier;
            product.status = req.body.status;


            product.save().then(issue => {
                res.json('Update complete');
            }).catch(err => {
                res.status(400).send('Update failed')
            });
        }
    });

});

router.route('/products/delete/:id').get((req, res) => {
    Product.findByIdAndRemove({_id: req.params.id}, (err,issue) =>{
        if (err)
            res.json(err);
        else
            res.json('Product removed');
    });
});








app.use('/', router);

app.listen(8000, () => console.log('Express server is running on port 8000'));