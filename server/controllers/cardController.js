const { db } = require('../db');

const getCards = (req,res) => {
    const q = `select * from card`;

    db(q,(err,result) => {
        if(err) res.json({
            success : false,
            message : "No data present"
        })
        else{
            res.json({
                success : true,
                data : result
            })
        }
    })
}

const addCards = (req,res) => {
    const {question,answer} = req.body.data;

    const q = "INSERT INTO card(`question`,`answer`) values (?)"
    const values = [question,answer];

    db(q,[values],(err,result) => {
        if(err){
            console.log(err)
            return;
        }

        return res.json({
            success : true,
            message : "Card Created Successfully"
        })
    })
}

const updateCards = (req,res) => {
    const cardId = req.params.id;
    const q = "UPDATE card SET `question` = ? , `answer` = ? where id = ?"

    const values = [
        req.body.question,
        req.body.answer
    ]

    db(q,[...values,cardId], (err,result) => {
        if(err){
            console.log(err)
            return;
        } 
        
        return res.json({
            success : true,
            data : result
        })
    })
}

const deleteCards = (req,res) => {
    const cardId = req.params.id;
    const q = "DELETE FROM card WHERE id=?"

    db(q,[cardId],(err,result) => {
        if(err){
            console.log(err)
            return;
        }
        return res.json({
            success : true,
            message : "Question deleted Successfully"
        })
    })
}

module.exports = {
    getCards,
    addCards,
    updateCards,
    deleteCards
}