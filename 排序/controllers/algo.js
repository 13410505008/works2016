/**
 * Created by Administrator on 2016/9/7.
 */

var Sort_method=require('../algorithm/sorts')
var rf=require('fs')
var path = require('path');
var result_path = path.join(__dirname+"/../public/results.json");

var count=1;
// var scale=new Array(1)
// scale[0]=100000
var sort_name=new Array("选择排序","冒泡排序","插入排序","合并排序","快速排序")
 var scale=new Array(10,100,1000,10000,100000)

exports.sorts=function (req,res) {
    console.log(req.query.count)
    count=parseInt(req.body['count'], 10) || 0
    console.log(count)


    if(count==0){
        var results=rf.readFileSync(result_path,"utf-8");
        // var results=JSON.stringify(data)
    }else{
        var s=req.body['algo']
        var values=new Array(s.length)
        for(var i=0;i<s.length;i++){
            if(s[i]==0){
                values[i]=new serie(sort_name[s[i]],get_select())
            }else if(s[i]==1){
                values[i]=new serie(sort_name[s[i]],get_bubble())
            }else if(s[i]==2){
                values[i]=new serie(sort_name[s[i]],get_insert())
            }else if(s[i]==3){
                values[i]=new serie(sort_name[s[i]],get_merge())
            }else if(s[i]==4){
                values[i]=new serie(sort_name[s[i]],get_quick())
            }
        }
        // console.log("values"+JSON.stringify(values))
        // values[1]=new serie(sort_name[1],get_bubble())
        // console.log("values"+JSON.stringify(values))
        // values[2]=new serie(sort_name[2],get_insert())
        // console.log("values"+JSON.stringify(values))
        // // values[3]=new serie(sort_name[3],get_merge())
        // values[3]=new serie(sort_name[3],get_merge())
        // console.log("values"+JSON.stringify(values))
        // values[4]=new serie(sort_name[4],get_quick())
        // console.log("values"+values)
        var results=JSON.stringify(values)
    }
    console.log("results"+results)
    // console.log(get_merge())
    res.render('algo_sorts', {
        title: '排序结果展示',
        results:results,
        count:count
    });
}
function serie(name,data) {
    this.name=name
    this.data=data
    return this
}
//产生随机数 范围[0,100000]
function random_num(n){
    var num=new Array(n)
    for(var i=0;i<n;i++){
        num[i]=Math.round(Math.random()*100000)
    }
    return num;
}

function get_select() {
    var start
    var end
    var avg_time=new Array(5)
    for(var i=0;i<scale.length;i++){
        var sum_time=0;
        for(var k=0;k<count;k++){
            var num=random_num(scale[i])
            start=Date.now()
            Sort_method.selection_sort(num)
            end=Date.now()
            sum_time=sum_time+end-start
        }
        avg_time[i]=sum_time/count
    }
    return avg_time
}
function get_bubble() {
    var start
    var end
    var avg_time=new Array(5)
    for(var i=0;i<scale.length;i++){
        var sum_time=0;
        for(var k=0;k<count;k++){
            var num=random_num(scale[i])
            start=Date.now()
            Sort_method.bubble_sort(num)
            end=Date.now()
            sum_time=sum_time+end-start
        }
        avg_time[i]=sum_time/count
    }
    return avg_time
}
function get_merge() {
    var start
    var end
    var avg_time=new Array(5)
    for(var i=0;i<scale.length;i++){
        var sum_time=0;
        for(var k=0;k<count;k++){
            var num=random_num(scale[i])
            start=Date.now()
            Sort_method.merge_sort(num)
            end=Date.now()
            sum_time=sum_time+end-start
        }
        avg_time[i]=sum_time/count
    }
    return avg_time
}
function get_quick() {
    var start
    var end
    var avg_time=new Array(5)
    for(var i=0;i<scale.length;i++){
        var sum_time=0;
        for(var k=0;k<count;k++){
            var num=random_num(scale[i])
            start=Date.now()
            Sort_method.quick_sort(num)
            // console.log("re:"+num)
            end=Date.now()
            sum_time=sum_time+end-start
        }
        avg_time[i]=sum_time/count
    }
    return avg_time
}
function get_insert() {
    var start
    var end
    var avg_time=new Array(5)
    for(var i=0;i<scale.length;i++){
        var sum_time=0;
        for(var k=0;k<count;k++){
            var num=random_num(scale[i])
            start=Date.now()
            Sort_method.insertion_sort(num)
            end=Date.now()
            sum_time=sum_time+end-start
        }
        avg_time[i]=sum_time/count
    }
    return avg_time
}
