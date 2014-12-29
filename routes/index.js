
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Web Un-Blocker', subTitle:'Home' });
};
exports.aboutUs = function(req, res){
  res.render('aboutUs', { title: 'Web Un-Blocker', subTitle:'About Us' });
};