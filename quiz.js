$(document).ready(function(){
	var questionsJson = {
		"questionOne": {
			title: "This is my first question",
			body: "This is my first question",
			answers: {
				'A': 'Answer A',
				'B': 'Answer B',
				'C': 'Answer C',
				'D': 'Answer D',
			},
	}
	
	$.each(questionsJson, function(index, element){
		$('#questionsContainer').append('<div class="question-canvas">' +
			'<h3>' + element.title + '</h3>' +
			'<p>' + element.body + '</p>');
			$.each(element.answers, function(indexA, elementA){
				$('#questionsContainer').append(
				'<span>'+ elementA +'</span>'
				'<input type="radio" name="radio-'+index+'">'
			)};
	});	
	$('#questionsContainer').append('</div');
	
});