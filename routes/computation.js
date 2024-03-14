var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    var x = (Math.random(1,10));
    console.log(x);


    if (req.query.x) {
        x = (req.query.x);
    }

    function ceil(x){
        return Math.ceil(x)
    }
    console.log(ceil(x));
    res.send(`Math.ceil applied on ${x} is ${ceil(x)}`);
});

module.exports = router;
