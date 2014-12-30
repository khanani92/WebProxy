
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Web UnBlocker', subTitle:'Home' });
};
exports.aboutUs = function(req, res){
  res.render('aboutUs', { title: 'Web UnBlocker', subTitle:'About Us' });
};
exports.privacy = function(req, res){
    res.render('Privacy', { title: 'Web UnBlocker', subTitle:'Privacy' });
};