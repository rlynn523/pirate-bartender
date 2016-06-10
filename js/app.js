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
		$(".drink-results").show();
		// created new questions object questObj
		var questObj = new questions();
		// created an empty object 'preferences'
		var preferences = {};

		for(var vars in questObj) {
			if($('input[name="'+vars+'"]:checked').val() == 'true'){
				// for each button that is checked, pass that key into the empty preferences object
				preferences[vars] = vars;
			}
		}
		// created a new Bartender object named pirateBartender
		var pirateBartender = new Bartender();

		// passed the preferences object (which holds the users preferences) into the makeDrink method
		pirateBartender.makeDrink(preferences);
	}

	$(".submit").click(submit);
	$(".reset").click(function(){
		$(".drink-results").html("").hide();
		document.getElementById("form").reset();
	})

	function Bartender(){
		// created new ingredients object ingObj
		var ingObj = new ingredients();
		// created makeDrink method for object Bartender that passes the argument preferences
		/**
		 * makeDrink is a method that takes the user's preferences, randomly selects a value from the key array, and displays on the page
		 * @param  {[array]} - contains the keys from ingredients
		 * @return {[type]}
		 */
		this.makeDrink = function(preferences){
			// for each individual preference key in the preferences object
			for (preference in preferences){

				var itemsArray = ingObj[preference];		
				var ing = itemsArray[Math.floor(Math.random() * itemsArray.length)];
				$(".drink-results").append(ing + '<br>');
			}
		}
	}
});