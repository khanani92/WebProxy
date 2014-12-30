
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Web UnBlocker', subTitle:'Home' });
};
exports.aboutUs = function(req, res){
  res.render('aboutUs', { title: 'Web UnBlocker', subTitle:'About Us' });
};