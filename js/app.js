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
		var preferences = {};

		for(vars in questObj) {
			var question = vars
			if($('input[name="'+question+'"]:checked').val() == 'true'){
				preferences[question] = true;
				console.log(preferences[question]);
			}
		}
	}
	$(".submit").click(submit);
	var bartender = function(){
		this.createDrink = function(preferences){
			for(i=0; i<preferences.length; i++) {
				var preference = preferences[i]
				preference[Math.floor(Math.random() * preference.length)];
			}
		}
	}
});