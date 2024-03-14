var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    var x = Math.floor(Math.random());
    var y = Math.floor(Math.random());

    console.log(x);

    if (req.query.x) {
        x = (req.query.x);
    }

    function calculatingCeil(x, y) {
        return (Math.ceil(x, y));
    }


    console.log(calculatingCeil(x,y));

    res.send(`Math.ceil applied on ${x} and ${y} is ${calculatingCeil(x, y)}`)
});

module.exports = router;
