
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('home', { v: 'home' });
};

exports.blog = function(req, res){
  
  
  res.render('blog', { v: 'blog' });
};

exports.talks = function(req, res){
  res.render('talks', { v : 'talks' });
};

exports.beers = function(req, res){
  var bs = require('beersmithtaplist');
  bs({
    path : process.env.BS_FILE_PATH || 'https://www.dropbox.com/s/q325t9axuumefqx/Recipe.bsmx?dl=1'
  }, function(err, beers){
    if (err){
      console.log(err);
    }
    
    res.render('beers', { v : 'beers', beers : beers });
  });
  
};

exports.contact = function(req, res){
  res.render('contact', { v: 'contact' });
};
exports.gallery = function(req, res){
  res.render('gallery.ejs', { v : 'gallery', gallery : req.html });
};

exports.cv = function(req, res){
  res.render('cv', { v: 'cv' });
};
