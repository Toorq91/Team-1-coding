function updateViewSkjema() {
    let html = '<div class="table">';
    const questions = model.question;
    for (let i = 0; i < questions.length; i++) {
        html += createQuestionAndAnswersRowHtml(questions, i);
    };
    html += `<br/><button onclick="results()">Se resultat</button></div>`;
    document.getElementById('main').innerHTML = html;
};

function createQuestionAndAnswersRowHtml(questions, i) {
    const question = questions[i];
    let innerHtml = createOptionsHtml(question, i);
    const rowHtml = `<div style="display: flex;">
                <span class="questions">`
        + question.q +
        `</span> 
                <span class="qanswer">${innerHtml}</span>
            </div>`;
    return rowHtml;
}
