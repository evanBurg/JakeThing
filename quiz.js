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
			correct: "A",
            feedback: "This will be a hint",
            reward: "This will be a tidbit"
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
            correct: "B",
            feedback: "This will be a hint",
            reward: "This will be a tidbit"
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
            correct: "C",
            feedback: "This will be a hint",
            reward: "This will be a tidbit"
		},
        4: {
            title: "This is my fourth question",
            body: "This is my fourth question",
            answers: {
                'A': 'Answer A',
                'B': 'Answer B',
                'C': 'Answer C',
                'D': 'Answer D'
            },
            correct: "C",
            feedback: "This will be a hint",
            reward: "This will be a tidbit"
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
        htmlString += ('</div>'+
			'<div id="question-feedback-'+ questionIndex +'" style="display: none"><h4>Hint:</h4><p>'+ question.feedback +'</p></div>' +
			'<div id="question-correct-'+ questionIndex +'" style="display: none"><h4>Correct:</h4><p>'+ question.reward +'</p></div>');
	});
	$('#questionsContainer').html(htmlString);


    $("#question-1").fadeIn();
    currentQuestion = "1";
		$('.question-select').on('click', function(event){
		if($(this).data('answer-id') === $('#question-'+$(event.target).data('question-id')).data('correct')){
            $('#question-feedback-'+$(event.target).data('question-id')).hide();
            $('#question-correct-'+$(event.target).data('question-id')).fadeIn();
		}else{
            $('#question-feedback-'+$(event.target).data('question-id')).fadeIn();
            $('#question-correct-'+$(event.target).data('question-id')).hide();
		}
	});

    function hideAllHints(){
        for(jsonSize = Object.keys(questionsJson).length; jsonSize > 0; jsonSize--){
            $('#question-feedback-'+jsonSize).hide();
            $('#question-correct-'+jsonSize).hide();
        }
    }

	$('.navbar-button').click(function(event){
        $("#question-"+currentQuestion).hide();
		var question = $(event.target).closest('button').attr('data-page');
        hideAllHints();
        $("#question-"+question).fadeIn();
        $('#last').attr('data-page', parseInt(question)-1);
		$('#next').attr('data-page', parseInt(question)+1);
		if(parseInt(question)-1 < 1){
            $('#last').hide();
            $('#last').prop('disabled', true);
		}else{
            $('#last').fadeIn();
            $('#last').prop('disabled', false);
		}
        if(parseInt(question)+1 > Object.keys(questionsJson).length){
            $('#next').hide();
            $('#next').prop('disabled', true);
        }else{
            $('#next').fadeIn();
            $('#next').prop('disabled', false);
        }
		currentQuestion = question;
	});

});