var express = require('express');
var router = express.Router();
var Algo=require('../controllers/algo')


/* GET sorts page. */
router.get('/', Algo.sorts);

//Web编程

//算法设计与分析
router.get('/sorts', Algo.sorts);
router.post('/sorts', Algo.sorts);

//计算机安全导论

module.exports = router;
