var express=require('express')
var ejs =require('ejs')
var mysql =require('mysql')
var bodyParser=require('body-parser')
var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(8080);
app.get('/',function(req,res){
res.render('pages/index');
});
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"uk2"
    });
    
    con.connect(function(err){
    if(err){
        throw err;
    }
    });

app.get('/',function(req,res,next)
{
    con.query('SELECT * FROM sim',function(err,rows)
    {
        if(err)
        {
            res.render('/',{data:''})
        }
        else{
            res.render('pages/disp',{data:rows})
        }
    })
})

