/**
 * Created by Administrator on 2016/9/7.
 */

//选择排序
exports.selection_sort=function (num) {
    var min;
    var temp;
    var index;
    for(var i=0; i<num.length; i++){
        min = num[i];
        temp;
        index = i;
        for(var j=i+1;j<num.length;j++){
            if(num[j] < min){
                min = num[j];
                index = j;
            }
        }
        temp = num[i];
        num[i] = min;
        num[index]= temp;
    }
    // console.log(num)
}
//冒泡排序
exports.bubble_sort=function (num) {
    var temp
    for(var i=1;i<num.length-1;i++){
        for(var j=0;j<num.length-i;j++){
            if(num[j]>num[j+1]){
                temp=num[j]
                num[j]=num[j+1]
                num[j+1]=temp
            }
        }
    }
    // console.log(num)
}
//合并排序
exports.merge_sort=function (num) {
    _merge_sort(num,0,num.length-1)
    // console.log("merge:"+ _merge_sort(num,0,num.length-1))
}
function _merge_sort(num,left,right) {
    if(left<right){
        var mid=left+parseInt((right-left)/2)
        _merge_sort(num,left,mid)
        _merge_sort(num,mid+1,right)
        Merge(num,left,mid,right)
    }
    return num
}
function Merge(num,left,mid,right) {
    var length=right-left+1
    var temp=new Array(length)
    // console.log("length:"+length)
    var i=left
    var j=mid+1
    var k=0
    while(i<=mid && j<=right){
        if(num[i]<=num[j]){
            temp[k++]=num[i++]
        }else{
            temp[k++]=num[j++]
        }
    }
    while (i <= mid)
        temp[k++] = num[i++];
    while (j <= right)
        temp[k++] = num[j++];
    for (i = 0; i < k; i++)
        num[left+ i] = temp[i];
}
//快速排序
exports.quick_sort=function (num){
     _quick_sort(num,0,num.length-1)
    // console.log(_quick_sort(num,0,num.length-1))
}
function _quick_sort(num,left,right) {
    if(num.length<=1){
        return num
    }
    var index=Math.floor(num.length/2)
    var pivot=num.splice(index,1)[0]
    var left=[]
    var right=[]
    for(var i=0;i<num.length;i++){
        if(num[i]<pivot){
            left.push(num[i])
        }else{
            right.push(num[i])
        }
    }
    return _quick_sort(left).concat([pivot],_quick_sort(right));
}
//插入排序
exports.insertion_sort=function (num) {
    var temp;
    var j
    for(var i=1;i<num.length;i++){
        if(num[i-1]>num[i]){
            temp=num[i]
            j=i
            while(j>0 && num[j-1]>temp){
                num[j]=num[j-1]
                j--
            }
            num[j]=temp
        }
    }
    // console.log(num)
}