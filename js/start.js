$(() => {
  let queNumber = 1;
  const previousQueNumber = [];
  let queClass = '.que' + queNumber;

  const web = new Array(11);
  web[0] = { answer: 'odpA', nextQuestion: 2, actualQuestion: 1 };
  web[1] = { answer: 'odpA', nextQuestion: 3, actualQuestion: 2 };
  web[2] = { answer: 'odpC', nextQuestion: 5, actualQuestion: 2 };
  web[3] = { answer: 'odpB', nextQuestion: 12, actualQuestion: 1 };
  web[4] = { answer: 'odpC', nextQuestion: 5, actualQuestion: 12 };
  web[5] = { answer: 'odpD', nextQuestion: 14, actualQuestion: 1 };
  web[6] = { answer: 'odpB', nextQuestion: 5, actualQuestion: 14 };
  web[7] = { answer: 'odpB', nextQuestion: 6, actualQuestion: 5 };
  web[8] = { answer: 'odpA', nextQuestion: 16, actualQuestion: 6 };
  web[9] = { answer: 'odpB', nextQuestion: 7, actualQuestion: 6 };
  web[10] = { answer: 'odpA', nextQuestion: 17, actualQuestion: 7 };

  const mobile = new Array(6);
  mobile[0] = { answer: 'odpA', nextQuestion: 2, actualQuestion: 1 };
  mobile[1] = { answer: 'odpD', nextQuestion: 8, actualQuestion: 2 };
  mobile[2] = { answer: 'odpA', nextQuestion: 3, actualQuestion: 8 };
  mobile[3] = { answer: 'odpB', nextQuestion: 13, actualQuestion: 12 };
  mobile[4] = { answer: 'odpC', nextQuestion: 3, actualQuestion: 13 };
  mobile[5] = { answer: 'odpC', nextQuestion: 3, actualQuestion: 14 };

  const games = new Array(3);
  games[0] = { answer: 'odpA', nextQuestion: 3, actualQuestion: 8 };
  games[1] = { answer: 'odpB', nextQuestion: 9, actualQuestion: 8 };
  games[2] = { answer: 'odpC', nextQuestion: 10, actualQuestion: 9 };

  const corp = new Array(2);
  corp[0] = { answer: 'odpB', nextQuestion: 4, actualQuestion: 2 };
  corp[1] = { answer: 'odpC', nextQuestion: 18, actualQuestion: 4 };

  const smallGame = new Array(3);
  smallGame[0] = { answer: 'odpB', nextQuestion: 13, actualQuestion: 12 };
  smallGame[1] = { answer: 'odpB', nextQuestion: 19, actualQuestion: 13 };
  smallGame[2] = { answer: 'odpC', nextQuestion: 3, actualQuestion: 13 };

  const software = { answer: 'odpE', nextQuestion: 11, actualQuestion: 2 };

  const scripting = { answer: 'odpD', nextQuestion: 20, actualQuestion: 14 };

  const dataAnalysis = { answer: 'odpA', nextQuestion: 15, actualQuestion: 14 };

  const automation = { answer: 'odpD', nextQuestion: 20, actualQuestion: 12 };

  const creatingOS = { answer: 'odpD', nextQuestion: 14, actualQuestion: 1 };

  const fun = { answer: 'odpE', nextQuestion: 21, actualQuestion: 1 };

  const wholeAnsBtn = $('.ans img, .ans p');

  wholeAnsBtn.click(function () {
    $(this).parent('.ans').addClass('slide_out');
    $(queClass).fadeOut();


    if (queNumber === 1) {
      $('.back').css('visibility', 'visible');
    }
    previousQueNumber.push(queNumber);
    const answer = $(this).parent('.ans').attr('data-answer');

    for (let i = 0; i < web.length; i++) {
      if (web[i].actualQuestion === queNumber) {
        if (web[i].answer === answer) {
          queNumber = web[i].nextQuestion;
          break;
        }
      }
    }

    for (let i = 0; i < mobile.length; i++) {
      if (previousQueNumber[previousQueNumber.length - 1] !== queNumber) break;
      if (mobile[i].actualQuestion === queNumber) {
        if (mobile[i].answer === answer) {
          queNumber = mobile[i].nextQuestion;
        }
      }
    }

    for (let i = 0; i < games.length; i++) {
      if (previousQueNumber[previousQueNumber.length - 1] !== queNumber) break;
      if (games[i].actualQuestion === queNumber) {
        if (games[i].answer === answer) {
          queNumber = games[i].nextQuestion;
        }
      }
    }

    for (let i = 0; i < corp.length; i++) {
      if (previousQueNumber[previousQueNumber.length - 1] !== queNumber) break;
      if (corp[i].actualQuestion === queNumber) {
        if (corp[i].answer === answer) {
          queNumber = corp[i].nextQuestion;
        }
      }
    }

    for (let i = 0; i < smallGame.length; i++) {
      if (previousQueNumber[previousQueNumber.length - 1] !== queNumber) break;
      if (smallGame[i].actualQuestion === queNumber) {
        if (smallGame[i].answer === answer) {
          queNumber = smallGame[i].nextQuestion;
        }
      }
    }


    if (previousQueNumber[previousQueNumber.length - 1] === queNumber) {
      if (software.actualQuestion === queNumber) {
        if (software.answer === answer) {
          queNumber = software.nextQuestion;
        }
      }
    }


    if (previousQueNumber[previousQueNumber.length - 1] === queNumber) {
      if (scripting.actualQuestion === queNumber) {
        if (scripting.answer === answer) {
          queNumber = scripting.nextQuestion;
        }
      }
    }

    if (previousQueNumber[previousQueNumber.length - 1] === queNumber) {
      if (dataAnalysis.actualQuestion === queNumber) {
        if (dataAnalysis.answer === answer) {
          queNumber = dataAnalysis.nextQuestion;
        }
      }
    }

    if (previousQueNumber[previousQueNumber.length - 1] === queNumber) {
      if (automation.actualQuestion === queNumber) {
        if (automation.answer === answer) {
          queNumber = automation.nextQuestion;
        }
      }
    }

    if (previousQueNumber[previousQueNumber.length - 1] === queNumber) {
      if (creatingOS.actualQuestion === queNumber) {
        if (creatingOS.answer === answer) {
          queNumber = creatingOS.nextQuestion;
        }
      }
    }

    if (previousQueNumber[previousQueNumber.length - 1] === queNumber) {
      if (fun.actualQuestion === queNumber) {
        if (fun.answer === answer) {
          queNumber = fun.nextQuestion;
        }
      }
    }

    queClass = '.que' + queNumber;
    window.setTimeout(() => {
      $(queClass).fadeIn();
      $(queClass).find('.ans').fadeIn();
    }, 700);
  });

  let previousColor;

  wholeAnsBtn.hover(
    function markAnswer() {
      const thisParentAns = $(this).parent('.ans');
      previousColor = thisParentAns.children('p').css('background-color');
      thisParentAns.children('img').addClass('jumpImg');
      thisParentAns.children('p').css('background-color', '#0a5677');
      thisParentAns.children('.shade').addClass('shadeImg');
    },
    function unmarkAnswer() {
      const thisParentAns = $(this).parent('.ans');
      thisParentAns.children('img').removeClass('jumpImg');
      thisParentAns.children('p').css('background-color', previousColor);
      thisParentAns.children('.shade').removeClass('shadeImg');
    },
  );
  const answer = $('.ans');

  $('.back').click(() => {
    if (answer.hasClass('slide_out')) answer.removeClass('slide_out');

    $(queClass).fadeOut();
    queClass = '.que' + previousQueNumber[previousQueNumber.length - 1];
    queNumber = previousQueNumber[previousQueNumber.length - 1];
    previousQueNumber.pop();
    window.setTimeout(() => {
      $(queClass).fadeIn();
    }, 500);
    if (queNumber === 1) {
      $('.back').css('visibility', 'hidden');
    }
  });
});

