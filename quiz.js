jQuery(document).ready(function(){
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
	jQuery.each(questionsJson, function(questionIndex, question){

        htmlString += ('<div class="question-canvas" id="question-'+ questionIndex +'" data-correct="'+ question.correct +'" style="display: none">' +
			'<h3>' + question.title + '</h3>' +
			'<p>' + question.body + '</p>');
			jQuery.each(question.answers, function(answerIndex, answer){
                htmlString += (
				'<span>'+ answer +'</span>' +
				'<input type="radio" class="question-select" name="radio-'+questionIndex+'" data-answer-id="'+answerIndex+'" data-question-id="'+ questionIndex +'">');
			});
        htmlString += ('</div>'+
			'<div id="question-feedback-'+ questionIndex +'" style="display: none"><h4>Hint:</h4><p>'+ question.feedback +'</p></div>' +
			'<div id="question-correct-'+ questionIndex +'" style="display: none"><h4>Correct:</h4><p>'+ question.reward +'</p></div>');
	});
	jQuery('#questionsContainer').html(htmlString);


    jQuery("#question-1").fadeIn();
    currentQuestion = "1";
		jQuery('.question-select').on('click', function(event){
		if(jQuery(this).data('answer-id') === jQuery('#question-'+jQuery(event.target).data('question-id')).data('correct')){
            jQuery('#question-feedback-'+jQuery(event.target).data('question-id')).hide();
            jQuery('#question-correct-'+jQuery(event.target).data('question-id')).fadeIn();
		}else{
            jQuery('#question-feedback-'+jQuery(event.target).data('question-id')).fadeIn();
            jQuery('#question-correct-'+jQuery(event.target).data('question-id')).hide();
		}
	});

    function hideAllHints(){
        for(jsonSize = Object.keys(questionsJson).length; jsonSize > 0; jsonSize--){
            jQuery('#question-feedback-'+jsonSize).hide();
            jQuery('#question-correct-'+jsonSize).hide();
        }
    }

	jQuery('.navbar-button').click(function(event){
        jQuery("#question-"+currentQuestion).hide();
		var question = jQuery(event.target).closest('button').attr('data-page');
        hideAllHints();
        jQuery("#question-"+question).fadeIn();
        jQuery('#last').attr('data-page', parseInt(question)-1);
		jQuery('#next').attr('data-page', parseInt(question)+1);
		if(parseInt(question)-1 < 1){
            jQuery('#last').hide();
            jQuery('#last').prop('disabled', true);
		}else{
            jQuery('#last').fadeIn();
            jQuery('#last').prop('disabled', false);
		}
        if(parseInt(question)+1 > Object.keys(questionsJson).length){
            jQuery('#next').hide();
            jQuery('#next').prop('disabled', true);
        }else{
            jQuery('#next').fadeIn();
            jQuery('#next').prop('disabled', false);
        }
		currentQuestion = question;
	});

});