const express = require("express");
const router = express.Router();
const Ninja = require("./modules/ninja");

//get list of ninjas from db
router.get("/ninjas",function(req, res, next){
    /*Ninja.geoNear(
        {type : "Point", coordinates : [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance : 100000 , spherical: true}
    ).then(function(ninjas){
        res.send(ninjas)
    }).catch(next);
     this will give you all the ninjas*/
    Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    });
});

//add new ninja to db
router.post("/ninjas",function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
     }).catch(next);
    });

//update ninja in db
router.put("/ninjas/:id",function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}.req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);  
        });
    });
});

//delete ninja from db
router.delete("/ninjas/:id",function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
    //console.log(req.params.id);
});

module.exports = router;