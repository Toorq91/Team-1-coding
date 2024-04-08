function skjema() {
    const appDiv = document.getElementById('app');
    const tabellDiv = document.createElement('div');
    tabellDiv.id = 'tabell';
    appDiv.appendChild(tabellDiv);

    // Loop through each question and create table rows and cells
    for (let x = 0; x < model.question.length; x++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        tabellDiv.appendChild(rowDiv);

        // Create cell for question
        const questionCell = document.createElement('div');
        questionCell.className = 'cell';
        questionCell.innerText = model.question[x].q;
        rowDiv.appendChild(questionCell);

        // Create cells for each answer
        for (let i = 0; i < 5; i++) {
            const answerCell = document.createElement('div');
            answerCell.className = 'cell answer';
            rowDiv.appendChild(answerCell);
        }
    }
}