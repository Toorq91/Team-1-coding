function resultPage() {
    window.scrollTo(0,0);
    model.html = /*HTML*/`
        <div style="display: grid; align-items: center; justify-content: center;">
            <div class="toolbar">
                <div class="button" onclick="pageButtons(); window.scrollTo(0, 1350)">Tilbake</div>
                <div class="resultDetailsFont">${fname} ${sname}</div>
                <div class="resultDetailsFont">${getCurrentDate()}</div>
            </div>
        </div>
        <div class="center">
        <br/><br/><br/>
            ${resultPageAdhdAnswer()}<br/><br/>
            ${createForm()}<br/><br/><br/>
            <div class="textCenter">
                <div class="buttonEnabled" onclick="model.app.page = 'print'; updateView(); printForm();">Skriv ut</div>
            </div>
        </div>
    `;
};

function createGray(aIndex, qIndex) {
    const answered = model.app.answered;
    const question = model.questions;
    if (answered == true && aIndex >= question[qIndex].gray)
        return 'style="background-color: lightgray; cursor: not-allowed;"'
};

function resultPageAdhdAnswer() {
    const hasADHD = model.app.hasADHD;
    const output = info.result;
    let header = '';
    let text = '';
    if (hasADHD == true) {
        header = output[0].header;
        text = output[0].text;
    }
    else {
        header = output[1].header;
        text = output[1].text;
    }
    let innerHTML = /*HTML*/`
        <div class="textCenter">
            <h1>${header}</h1>
            <h3 style="width: 950px;">${text}</h3>
        </div>
    `;
    return innerHTML;
};

function printPage() {
    model.html = /*HTML*/ `
        <div style="background-color: white; text-align: center;">
            <div style="position: relative; top: 50px;">
                <b><u>Symptomsjekkliste for ADHD- selvrapporteringsskala for voksne (ASRS-v1.1)</b></u>
                <div>${fname} ${sname}</div>
            </div>
            <div style="scale: 0.65; position: relative; bottom: 80px;">
                ${createForm()}
            </div>
        </div>
    `;
}; //transform: scale(0.6, 0.9)

// ikke ferdig
function generatePDF() {
    const doc = new window.jspdf.jsPDF();
    const formContent = document.getElementById('createOptionsHtml').textContent.trim();
};