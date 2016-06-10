$(function(){
	var ingredients = function(){ 
		this.strong = ['glug of rum', 'slug of whisky', 'splash of gin'], 
		this.salty = ['olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
		this.bitter = ['shake of bitters', 'splash of tonic', 'twist of lemon peel'],
		this.sweet = ['sugar cube', 'spoonful of honey', 'splash of cola'],
		this.fruity = ['slice of orange', 'dash of cassis', 'cherry on top']
	};
	var questions = function(){
		this.strong = 'Do ye like yer drinks strong?',
		this.salty = 'Do ye like it with a salty tang?',
		this.bitter =  'Are ye a lubber who likes it bitter?',
		this.sweet = 'Would ye like a bit of sweetness with yer poison?',
		this.fruity = 'Are ye one for a fruity finish?'
	};

	submit = function(){
		var questObj = new questions();
		var ingObj = new ingredients();
		var preferences = {};

		for(var vars in questObj) {
			if($('input[name="'+vars+'"]:checked').val() == 'true'){
				preferences[vars] = vars;
				var itemsArray = ingObj[vars];		
				makeDrink(itemsArray);
			}
		}
	}
	$(".submit").click(submit);
	
	function makeDrink(itemsArray){
		var ing = itemsArray[Math.floor(Math.random() * itemsArray.length)];
		console.log(ing);
		$(".drink-results").append(ing + '<br>');
	}
	// Bartender.prototype.makeDrink = function(ing) {
	// 	this.ing = itemsArray[Math.floor(Math.random() * itemsArray.length)];
	// 	console.log(ing);
	// }
});