var express	= require('express'),
	mongoose	= require('mongoose'),
	app	= express(),
	bodyParser  = require('body-parser');
	dataBase = require('./models/Schema')

mongoose.connect('mongodb://localhost/databasenew')
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.post('/pushToSchema',(req,res)=>{
	obj = {
		amount : req.body.amount,
		description : req.body.description
	}
	console.log('req.body',req.body)
	dataBase.create(obj,(err,done)=>{
		if(err) return console.log('err',err)
		console.log('done', done)
		res.json()
	})
})

app.listen(2472, function () {
  console.log('Express server is up on port 2472');
});
