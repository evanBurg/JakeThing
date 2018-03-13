$(document).ready(function(){
	var questionsJson = {
		1: {
			title: "This is my first question",
			body: "This is my first question",
			answers: {
				'A': 'Answer A',
				'B': 'Answer B',
				'C': 'Answer C',
				'D': 'Answer D'
			},
			correct: "A"
		},
		2: {
            title: "This is my second question",
            body: "This is my second question",
            answers: {
                'A': 'Answer A',
                'B': 'Answer B',
                'C': 'Answer C',
                'D': 'Answer D'
            },
            correct: "B"
        },
        3: {
            title: "This is my third question",
            body: "This is my third question",
            answers: {
                'A': 'Answer A',
                'B': 'Answer B',
                'C': 'Answer C',
                'D': 'Answer D'
            },
            correct: "C"
        },
		};

    var htmlString = '';
    var currentQuestion = null;
	$.each(questionsJson, function(questionIndex, question){

        htmlString += ('<div class="question-canvas" id="question-'+ questionIndex +'" data-correct="'+ question.correct +'" style="display: none">' +
			'<h3>' + question.title + '</h3>' +
			'<p>' + question.body + '</p>');
			$.each(question.answers, function(answerIndex, answer){
                htmlString += (
				'<span>'+ answer +'</span>' +
				'<input type="radio" class="question-select" name="radio-'+questionIndex+'" data-answer-id="'+answerIndex+'" data-question-id="'+ questionIndex +'">');
			});
        htmlString += ('</div>');
	});
	$('#questionsContainer').html(htmlString);


    $("#question-1").fadeIn();
    currentQuestion = "1";

		$('.question-select').on('click', function(event){
		if($(this).data('answer-id') === $('#question-'+$(event.target).data('question-id')).data('correct')){
			alert('Good job jake');
		}else{
			alert('Bad');
		}
	});

	$('#navbar').click(function(event){
        $("#question-"+currentQuestion).hide();
		var question = $(event.target).closest('button').attr('data-page');
        $("#question-"+question).fadeIn();
		$('#last').attr('data-page', currentQuestion);
		$('#next').attr('data-page', parseInt(question)+1);
		if(currentQuestion < 1){
            $('#last').hide();
		}else{
            $('#last').fadeIn();
		}
		currentQuestion = question;
	});
	
});