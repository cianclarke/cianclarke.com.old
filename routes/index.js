
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('home', { v: 'home' });
};

exports.blog = function(req, res){
  res.render('blog', { v: 'blog' });
};
exports.contact = function(req, res){
  res.render('contact', { v: 'contact' });
};
exports.gallery = function(req, res){
  // We automatically have the gallery data available to us in req thanks to middleware
  var data = req.gallery;
  // and we can res.render using one of the supplied templates (photo.ejs/album.ejs) or one of our own

  data.v = 'gallery';
  res.render(data.type + '.ejs', data);
};

exports.webdesign = function(req, res){
  res.render('webdesign', { v: 'webdesign' });
};
exports.cv = function(req, res){
  res.render('cv', { v: 'cv' });
};