var Edible = require('../models/edible.js')

/*
 * GET home page.
 */

exports.home = function(req, res){
  getEdibles(function (edibles) {
    console.log("edibles", edibles);
    res.render('index', {edibles:edibles});
  });
};

exports.displayEdibles = function(req, res){
  // displayEdibles based off ingredients list

  // given the list of ingredients

  // find the edibles that use only those ingredients

  // send them to be rendered on the home page.

};

exports.create = function(req, res){
  console.log('About to add a new Pinterest item', req.body);
  var edible = new Edible({ 
  	pinterestURL: req.body.pinterestURL, 
  	recipeURL: req.body.recipeURL,
  	ingredients: req.body.availIngredients.split("\r\n")
  });
  edible.save(function (err) {
    if (err)
      return console.log("error saving" + edible.pinterestURL);

    res.render('newItem', {title: "Add a New Pinterest Edible!"});
  });

}

exports.submitPinterestItem = function(req, res){
  console.log('Add a New Pinterest Item');
  res.render('newItem', {title: "Add a New Pinterest Edible!"});
}


// helpers
function getEdibles (next) {
  Edible.find().exec(
    function (err, edibles) {
      if (err)
        return console.log("can't find edibles", err);
      next(edibles);
    }
  );
}
