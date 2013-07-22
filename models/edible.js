var mongoose = require("mongoose");


var edibleSchema = mongoose.Schema({

	// for now, we'll pull the info as needed and do brute force search through ingredients.
	pinterestURL: String,
	recipeURL: String,
	ingredients: Array  // can make this an array later
    
	// CHANGE TO MORE EFFICIENT MODEL REAL FAST
	// name: String,
    // photo: Image,
    // pinterestURL: String,
    // recipeURL: String,
    // pinnerName: String,
    // prepTime: Number,
    // ingredients: [ARRAY of Ingredients]
    // REQUIRED VS OPTIONAL
    // make this an array of ingredients later on so we don't have to search for shit. ex. [{ type: Schema.Types.ObjectId, ref: 'Tweet' }]
    // use this to infer Vegetarian or gluten free by creating ingredient schema
});
var Edible = mongoose.model('Edible', edibleSchema);

module.exports = Edible;
