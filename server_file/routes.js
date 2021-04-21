const express = require('express')
const app = express()
const router = express.Router()
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sqlite.db');
var request = require('request')

module.exports= router



router.get('/', (req,res)=>{
    res.send('Home Page')
})
router.get('/about', (req,res)=>{
    res.send('About us')
})
router.get('/api/cats',(req,res)=>{
    res.send({
        cats:[{ name: 'lilly'}, {name: 'lucy'}],
    })
})

router.get('/api/', (req,res)=>{
    var query =  'Select * from user'
    var params =[]
    db.all(query, params, (err, rows)=>{
        if (err){
            res.status(400)
            return console.error(err.message)
        }
        res.json({
            "message":"success",
            "data": rows
        })

    })
})

router.get('/api/users/:id',(req,res)=>{
    var query = "select *  from users where UID = ?"
    var params = [req.params.id]
    db.get(query,params, (err,row)=>{
        if(err){
            res.status(400)
            return console.error(err.message)
        }
        res.json({
            "message":"success",
            "data":row
        })
    })
})

router.post('/api/users/', (req,res)=>{
    console.log(req.body)

})


//fullwatchlist
router.get('/api/watchlist/:id',(req,res)=>{
    var query = "select COMPANY from watchlist where UID = ?"
    var params = [req.params.id]
    db.all(query,params,(err,rows)=>{
        if(err){
            res.status(400)
            return console.error(err.message)
        }
        res.json({
            rows
        })
        
    })
    
})
//add watchlist
router.post('/api/watchlist/:id/:ticker',(req,res)=>{
    var query = "insert into watchlist values(?,?)"
    var params = [req.params.id, req.params.ticker]
    db.run(query,params,(err)=>{
        if(err){
            res.status(400)
            return console.error(err.message)
        } 
        res.send(true)
    })
})

//check watchlist
router.get('/api/watchlist/:id/:ticker',(req,res)=>{
    var query = "select * from watchlist where UID = ?  and COMPANY = ?"
    var params = [req.params.id, req.params.ticker]
    db.get(query,params,(err,row)=>{
        if(err){
            res.status(400)
            return console.error(err.message)
        } 
        if (row === undefined || row.length == 0){
            res.send(false)
        }
        else{
            res.send(true)
        }

    })
})

//removewatchlist
router.delete('/api/watchlist/:id/:ticker',(req,res)=>{
    var query = "delete from watchlist where UID = ? and COMPANY = ?"
    var params = [req.params.id, req.params.ticker]
    db.run(query,params,(err)=>{
        if(err){
            res.status(400)
            return console.error(err.message)
        } 
        res.send(true)
    })

})

router.get('/api/notes/:ticker/:id',(req,res)=>{
    var query = "select * from notes where UID = ? and COMPANY = ?"
    var params = [req.params.id, req.params.ticker]
    db.all(query, params, (err,rows)=>{
        if(err){
            res.status(400)
            return console.error(err.message)
        }
        res.json({
            rows
        })
        //console.log(rows[0].BODY)

    })
})

//post notes
router.post('/api/notes/:ticker/:id',(req,res)=>{
    var query = "insert into notes values(NULL,?,?,?,?)"
    var time = new Date()
    var params = [time,req.params.id, req.params.ticker,req.body.BODY]
    db.run(query,params,(err)=>{
        if(err){
            res.status(400)
            coneole.error(err)
        }
        res.send(true)
    })
})

//get all ticker notes
router.get('/api/notes/:ticker/',(req,res)=>{
    var query = "select ID,TIME,COMPANY,BODY,NAME,notes.UID as UID from notes join users on notes.UID = users.UID where COMPANY=? order by ID"
    var params = [req.params.ticker]
    db.all(query, params, (err,rows)=>{
        if(err){
            res.status(400)
            return console.error(err.message)
        }
        res.json({
            rows
        })
    })
})

//news API
//API key: 670b7b9454e64020b16e1f4036572ee3
router.get('/api/:ticker/news',(req,res)=>{
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd
    request('https://newsapi.org/v2/everything?q='+ req.params.ticker+'&apiKey=670b7b9454e64020b16e1f4036572ee3', {json:true},(err3,res3,body3)=>{
        if(err3){
            return console.error(err3.message)
        }
        res.json({
            body3
        })
    })

})

//price API
//API key ?token=pk_2396fba4571f48338291e10041df40d1 
router.get('/api/:ticker/price',(req,res)=>{
    request('https://cloud.iexapis.com/stable/stock/' + req.params.ticker + '/quote?token=pk_2396fba4571f48338291e10041df40d1', {json:true},(err3,res3,body3)=>{
        if(err3){
            return console.error(err3.message)
        }
        res.json({
            body3
        })
    })
})
router.get('/api/:ticker/chart/:time',(req,res)=>{
    request('https://cloud.iexapis.com/stable/stock/'+req.params.ticker+'/chart/'+req.params.time+'?token=pk_2396fba4571f48338291e10041df40d1', {json:true},(err3,res3,body3)=>{
        if(err3){
            return console.error(err3.message)
        }
        res.json({
            body3
        })
        
    })
})


