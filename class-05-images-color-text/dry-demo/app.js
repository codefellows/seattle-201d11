'use strict';

function questionEngine (question, answer, correctResp, wrongResp) {
  var userAnswer = prompt(question);
  if (userAnswer === answer) {
    alert(correctResp);
  } else {
    alert(wrongResp);
  }
}

var guts = [['My shoe size?', '13', 'You are right! I have freaky feet', 'You are wrong. Have you looked at my feets?'],
          ['Do I have 2 dogs?', 'y', 'Right! They are named Parker & Demi', 'Nope, you are wrong. I haz 2 pups'],
          ['Is Nick my favorite co-instructor?','y', 'Right! Nick rules!', 'Wrong. Nick is my fave but Aaron is awesome too'],
          ['Is it raining today?', 'y', 'Good. you are observant', 'Look around you big dummy'],
          ['Has the point of DRY been proven?', 'y', 'Good. You will be a code ninja in no time', 'Better get with the program']];

for (var i = 0; i < guts.length; i++) {
  questionEngine(guts[i][0], guts[i][1], guts[i][2], guts[i][3]);
}
