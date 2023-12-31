let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req,res)=>{
    res.render('index.html');
});

app.get('/addTwoNumbers',(req,res)=>{
    let statusCode = 200;
    let sucessMesssage = 'Success';
    let number1 = req.query.number1;
    let number2 = req.query.number2;
    let result = parseInt(number1) + parseInt(number2);

    res.json({
        message:sucessMesssage, 
        code: statusCode, 
        data: result
    });
});

app.listen(port, () => {
    console.log('server started on port 3000');
});