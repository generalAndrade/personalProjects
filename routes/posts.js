var express = require('express');
var router = new express.Router();

// router.post('/',function(req,res){
//     // res.send(JSON.stringify({
//     //     "name" : "Leo",
//     //     "surname" : "Andrade"
//     // }))
//     res.send(req.body.name);

// })

// router.get('/',function(req,res){
//     var file_ = require('../data.json')
//     res.send(file_.name);
// })

router.post('/',function(req,res,next){
    // res.send(JSON.stringify({
    //     "id" : "1234"
    // }))
    res.send(req.body.name);
})


module.exports = router;