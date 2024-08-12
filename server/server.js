const express = require('express');
const app = express();
const cors = require('cors');
const {cardRouter} = require('./routes/cardRoute')

app.use(cors());
app.use(express.json());
app.use("/api",cardRouter);

app.listen(3000,() => {
    console.log("App is listening on port " + 3000);
})
