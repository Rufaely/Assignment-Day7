var mongo = require('mongoskin');
var mon = require('mongodb');
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
/* GET home page. */
router.get('/', function(req, res, next) {
    
var db = mongo.db('mongodb://localhost:27017/Exercise7',{native_parser:true});
db.bind('homework7');
db.homework7.findOne({},function(err, item){

const decipher = crypto.createDecipher('aes256', 'asaadsaad');
const encrypted = item.message;
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');
console.log(decrypted);
res.end(decrypted)

  db.close();
})
 
});

module.exports = router;














