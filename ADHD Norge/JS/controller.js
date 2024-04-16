function showX(aIndex, qIndex) {
    model.questions[qIndex].answer = aIndex;
    updateView()
}

function checkResults() {
    const answer = model.questions
    const hasADHD = model.app.hasADHD
    let value = 0;
    for (let i = 0; i < 3; i++) {
        answer[i].answer >= 2 ? value++ : '';
    }
    for (let i = 3; i < 6; i++) {
        answer[i].answer >= 3 ? value++ : '';
    }
    if (value >= 4) hasADHD = true;
    if (value <= 4) hasADHD = false;
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

function printForm() {
    window.print()
    model.app.page = 'result'
    updateView();
}