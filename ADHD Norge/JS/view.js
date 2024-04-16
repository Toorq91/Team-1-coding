// 1:  resultat siden ✔
// 2:  tilbake knapp ✔
// 3:  knapp som skriver ut ✔
// 4:  knapp som generer PDF ✔ ?

// 1: Få grå felter til å vises seg på resultat siden
// 2: Få grå del A og B til å vise på printen
// 3: Få grå felter til å vises på printen

// Start verdi:
// model.app.answered = false,

// Knappen "se resultat", skal sette:
// model.app.answered = true

// Tilbake knappen på resultPage(), skal sette:
// model.app.answered = false

function updateView() {
    const currentPage = model.app.page;
    if (currentPage == null) mainPage();
    if (currentPage == 'result') resultPage();
    if (currentPage == 'print') printPage();
    document.getElementById('app').innerHTML = model.html;
};

function mainPage() {
    const texts = info.text;
    model.html = /*HTML*/`
    <div class="sides">
        <div style="background-color: lightgray"></div>
            <div class="center">
                <h1>${texts.header1}</h1>
                <div>${texts.desc1}</div><hr/><br/>
                <h2 class="instruct">Instruksjoner</h2>
                <h2>Symptomer:</h2>
                <div>${texts.list1}</div>
                <h2>Funksjonssvekkelse:</h2>
                <div>${texts.list2}</div><br/><hr/><br/>
                <h2>Historie:</h2>
                <div>${texts.desc2}</div><br/><br/><hr/><br/><br/><br/>
                ${userInput()}<br/><br/>
                ${createForm()}
                <br/><br/><br/>
                <form id="myForm">
                <div class ="button" onclick ="model.app.page = 'result'; updateView()">Se resultat</div>
                </form><hr/>
                <h2>Nytten av ADHD- screening hos voksne</h2>
                <div>${texts.desc3}</div>
                <div class="textCenter">${credit()}</div><br/><br/>
                <div>${texts.desc4}</div><br/>
                <div class="references">Referanser:
                <div>${texts.references}</div>
                </div><br/>
        </div>
    </div>
    `;
};


function userInput() {
    let innerHTML = '';
    innerHTML = /*HTML*/ `
        <div class="inputField">   
            <div>
                <label for="fname">Fornavn:
                    <input type="text" id="fname" name="fname" value="${fname}" onchange="fname = this.value"/>
                </label>
                <label style="padding-left: 30px;" for="lname">Etternavn:
                    <input type="text" id="lname" name="lname" value="${sname}" onchange="sname = this.value"/>
                </label>
            </div>
            <label style="padding-left: 30px;" for="date">Dato:
            <span type="text" id="date" name="date" readonly><b>${getCurrentDate()}</b></span></label>
        </div>
    `;
    return innerHTML;
}

function createForm() {
    let html = '';
    html = /*HTML*/ `
    <div class="upscale">
    
        <div style="display: grid; align-items: center; justify-content: center">
            <br/>
            <div style="border: 2px solid black; border-right: 3px solid black">
            <div style="display: flex">
                <span class="questions">${model.infoText}</span>
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
        </div></div></div>
    `
    return html;
}

function createQuestions(startIndex, endIndex) {
    let innerHTML = '';
    const question = model.questions;
    for (let q = startIndex; q <= endIndex; q++) {
        innerHTML += /*HTML*/`
        <div style="display: flex;">
            <span class="questions">${model.questions[q].question}</span>
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
        innerHTML /*HTML*/+= `
        <span class="checkbox" onclick="showX(${a}, ${qIndex})">${showX}</span>
        `
    }
    return innerHTML;
}

function credit() {
    let creditHtml = '';
    creditHtml = /*HTML*/ `
    ${info.credit[0].name}
    ${info.credit[1].name}
    ${info.credit[2].name}
    `
    return creditHtml;
}

// Get current date to load in form when pageonload.
function getCurrentDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    return year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
}

// ikke ferdig
function generatePDF() {
    const doc = new window.jspdf.jsPDF();
    const formContent = document.getElementById('createOptionsHtml').textContent.trim();
}


















