$(function(){
	$("#search").submit(function(e){
 		e.preventDefault();
 		var input = $("#order").val();
 		strongDrink(input);
 		var input = $("#order").val("");
 	})

	function Pantry (type, ingredients) {
		this.type = type;
		this.ingredients = ingredients
	}
	var strongIng = new Pantry("strong", ["glug of rum", "slug of whisky", "splash of gin"]);
	var saltyIng = new Pantry("salty", ["olive on a stick", "salt-dusted rim", "rasher of bacon"]);
	var bitterIng = new Pantry("bitter", ["shake of bitters", "splash of tonic", "twist of lemon peel"]);
	var sweetIng = new Pantry("sweet", ["sugar cube", "spoonful of honey", "splash of cola"]);
	var fruityIng = new Pantry("fruity", ["slice of orange", "dash of cassis", "cherry on top"]);

	function Drink (input, type){
		this.input = input;
		this.type = type;
	} 

	var strongDrink = new Drink("yes", strongIng);
	var saltyDrink = new Drink("yes", saltyIng);
	var bitterDrink = new Drink("yes", bitterIng);
	var sweetDrink = new Drink("yes", sweetIng);
	var fruityDrnik = new Drink("yes", fruityIng);

	console.log(saltyDrink);
})