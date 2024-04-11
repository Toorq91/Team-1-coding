function updateView() {
    const currentPage = model.app.page;
    if (currentPage == null) mainPage();
    if (currentPage == 'result') resultPage();
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
                <div>${texts.desc2}</div><br/><br/><hr/><br/>
                <form>
                <label for="fname">Fornavn:</label>
                <input type="text" id="fname" name="fname">
                <label for="lname">Etternavn:</label>
                <input type="text" id="lname" name="lname">
                <label for="date">Dato:</label>
                <input type="text" id="date" name="date" readonly>
                </form><br/>
                <div>${model.infoText}</div><br/>
                <div>${createOptionsHtml()}</div><br/><br/><br/>
                <form id="myForm">
                <input type="submit" value="Generate PDF" onclick="generatePDF()">
                </form><hr/>
                <h2>Nytten av ADHD- screening hos voksne</h2>
                <div>${texts.desc3}</div>
                <div class="textCenter">${credit()}</div><br/><br/>
                <div>${texts.desc4}</div><br/>
                <div class="references">Referanser:
                <div>${texts.references}</div>
                </div>
        </div>
    </div>
    `;
};

function createOptionsHtml() {
    let innerHtml = '<table style="border: 2px solid black;">';
    for (let i = 0; i < model.questions.length; i++) {
        const option = model.questions[i];
        let showX = option.answer ? 'x' : ' ';
        innerHtml += /*HTML*/`
               <tr>
                    <td>${option.question}</td>
                    <td>
                        <span onclick="selectedAnswer(${i});" class="answers">${showX}</span>
                        <span onclick="selectedAnswer(${i});" class="answers">${showX}</span>
                        <span onclick="selectedAnswer(${i});" class="answers">${showX}</span>
                        <span onclick="selectedAnswer(${i});" class="answers">${showX}</span>
                        <span onclick="selectedAnswer(${i});" class="answers">${showX}</span>
                    </td>
               </tr>
        `;
    };
    innerHtml += '</table>';
    return innerHtml;
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

// Get current date to load when pageonload.
function getCurrentDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    return year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
}
function setCurrentDate() {
    var dateField = document.getElementById('date');
    if (dateField) {
        dateField.value = getCurrentDate();
    }
}
window.onload = function () {
    setCurrentDate();
}

function generatePDF() {
    const doc = new window.jspdf.jsPDF();
    const formContent = document.getElementById('createOptionsHtml').textContent.trim();
}


// // Get the points info
// const pointsContent = document.getElementById('pointsInfo').textContent.trim();

// // Add points info to PDF
// doc.setFontSize(50);
// doc.text(20, 120, pointsContent);

// // Add smiley face directly to PDF
// const smileyUnicode = smileyIndex === 0 ? '😀' : '😁';
// doc.setFontSize(100);
// doc.text(10, 50, smileyUnicode);

// doc.save('output.pdf');















