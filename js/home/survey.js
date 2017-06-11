const surveyBtn = $('#ankieta');
const survey = $('.survey-dialog');
const surveyCloseBtn = $('.close-survey-btn');

function showSurvey(){
  survey.fadeIn();
  survey.focus();
  survey.attr('aria-hidden', 'false');
}

function closeSurvey(){
  survey.fadeOut();
  surveyBtn.focus();
  survey.attr('aria-hidden', 'true');
}

if (document.location.hash === '#ankieta') {
  showSurvey();
}

surveyBtn.on('click', () => {
  showSurvey();
});

surveyCloseBtn.on('click', () => {
  closeSurvey();
});