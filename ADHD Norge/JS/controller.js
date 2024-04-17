function showX(aIndex, qIndex) {
    model.questions[qIndex].answer = aIndex;
    model.questions[qIndex].bruv = true;
    updateView()
}

function checkResults() {
    const answer = model.questions          
    let hasADHD = model.app.hasADHD
    let value = 0;
    for (let i = 0; i < 3; i++) {
        answer[i].answer >= 2 ? value++ : '';
    }
    for (let i = 3; i < 6; i++) {
        answer[i].answer >= 3 ? value++ : '';
    }
    if (value >= 4) hasADHD = true;
    if (value <= 3) hasADHD = false;
}

function printForm() {
    window.print()
    model.app.page = 'result'
    updateView();
}

function pageButtons() {
    checkResults();
    model.app.answered = !model.app.answered;
    if (model.app.page == null) model.app.page = 'result'
    else if (model.app.page == 'result') model.app.page = null
    updateView();
}
