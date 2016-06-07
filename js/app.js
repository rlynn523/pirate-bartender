$(function(){
	$(".questions").text(strongQuest)
	var input = $("#order").val();
	$("#search").submit(function(e){
 		e.preventDefault();
 		var input = $("#order").val();
 		var input = $("#order").val("");
 	})

	function Pantry (ingredients) {
		this.ingredients = ingredients[Math.floor(Math.random() * ingredients.length)];
	}
	var strongIng = new Pantry(["glug of rum", "slug of whisky", "splash of gin"]);
	var saltyIng = new Pantry(["olive on a stick", "salt-dusted rim", "rasher of bacon"]);
	var bitterIng = new Pantry(["shake of bitters", "splash of tonic", "twist of lemon peel"]);
	var sweetIng = new Pantry(["sugar cube", "spoonful of honey", "splash of cola"]);
	var fruityIng = new Pantry(["slice of orange", "dash of cassis", "cherry on top"]);

	function Question (question){
		this.question = question
	}

	var strongQuest = new Question("Do ye like yer drinks strong?");
	var saltyQuest = new Question("Do ye like it with a salty tang?");
	var bitterQuest = new Question("Are ye a lubber who likes it bitter?");
	var sweetQuest = new Question("Would ye like a bit of sweetness with yer poison?");
	var fruityQuest = new Question("Are ye one for a fruity finish?");

	$(".strong").append(strongQuest.question);
	$(".salty").append(saltyQuest.question);
	$(".bitter").append(bitterQuest.question);
	$(".sweet").append(sweetQuest.question);
	$(".fruity").append(fruityQuest.question);

	// function Drink (question, input, type){
	// 	this.question = question;
	// 	this.input = input;
	// 	this.type = type;
	// }

	// var strongDrink = new Drink(strongQuest, "yes", strongIng);
	// var saltyDrink = new Drink(saltyQuest, "yes", saltyIng);
	// var bitterDrink = new Drink(bitterQuest, "yes", bitterIng);
	// var sweetDrink = new Drink(sweetQuest, "yes", sweetIng);
	// var fruityDrink = new Drink(fruityQuest, "yes", fruityIng);
})