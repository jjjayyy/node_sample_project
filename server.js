const express = require('express');
const app = express();
const router = require('./router/index')(app);

app.set('views', )
const port = process.env.PORT||5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/helllo',(req,res) => {
    res.send({message:'Hello Express!'});
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));