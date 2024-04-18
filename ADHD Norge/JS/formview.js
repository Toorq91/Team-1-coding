function createForm() {
    let html = '';
    html = /*HTML*/ `
    <div class="upscale">
        <div style="display: grid; align-items: center; justify-content: center">
            <br/>
            <div style="border: 2px solid black; border-right: 3px solid black">
                <div style="display: flex">
                    <span class="questions">${info.infoText}</span>
                    <div class="answers">
                        <b class="grade">&ensp;Aldri</b>
                        <b class="grade">&ensp;Sjelden</b>
                        <b class="grade">&ensp;I blant</b>
                        <b class="grade">&ensp;Ofte</b>
                        <b class="grade">&ensp;Svært ofte</b>
                    </div>
                </div>
                <div style="background-color: lightgrey; border: 1px solid black; width: 977px; text-align: center;">Del A</div>
                ${createQuestions(0, 5)}
                <div style="background-color: lightgrey; border: 1px solid black; width: 977px; text-align: center;">Del B</div>
                ${createQuestions(6, 17)}
            </div>
        </div>
    </div>
    `
    return html;
}

function createQuestions(startIndex, endIndex) {
    let innerHTML = '';
    const question = model.questions;
    for (let q = startIndex; q <= endIndex; q++) {
        innerHTML += /*HTML*/`
            <div style="display: flex;">
                <span class="questions">${question[q].question}</span>
                <span class="answers">
                ${createAnswers(q)}
                </span>
            </div>
        `
    }
    return innerHTML;
}

function createAnswers(qIndex) {
    let innerHTML = '';
    let answer = model.questions[qIndex].answer
    for (let a = 0; a < 5; a++) {
        let showX = answer == null ? '' : answer == a ? 'X' : '';
        innerHTML += /*HTML*/`
            <span ${createGray(a, qIndex)} class="checkbox" ${clickableCheckbox(a, qIndex)}>${showX}</span>
        `
    }
    return innerHTML;
}

function clickableCheckbox(aIndex, qIndex) {
    const answered = model.app.answered;
    if (answered == false) 
    return 'onclick="showX('+ aIndex + ', ' + qIndex + ')"'
    if (answered == true)
    return 'style="cursor: not-allowed"'
}