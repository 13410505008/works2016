/**
 * Created by Administrator on 2016/9/13.
 */



exports.index=function (req,res) {

    res.render('web_index', {
        title: 'web首页',
    });
}
