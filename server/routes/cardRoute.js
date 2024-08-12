const express = require('express');
const cardRouter = express.Router();
const {getCards,addCards,updateCards,deleteCards} = require('../controllers/cardController')

cardRouter.get('/',getCards);
cardRouter.post('/add',addCards);
cardRouter.put('/update/:id',updateCards);
cardRouter.delete('/delete/:id',deleteCards);

module.exports = {
    cardRouter
}