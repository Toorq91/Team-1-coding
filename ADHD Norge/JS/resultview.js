function resultPage() {
    window.scrollTo(0,0);
    model.html = /*HTML*/`
        <div style="display: grid; align-items: center; justify-content: center;">
            <div class="toolbar">
                <div class="button" onclick="pageButtons()">Tilbake</div>
                <div class="resultDetailsFont">${fname} ${sname}</div>
                <div class="resultDetailsFont">${getCurrentDate()}</div>
            </div>
        </div>
        <div class="center" style="padding-bottom: 20px;">
        <br/><br/><br/>
            ${resultPageAdhdAnswer()}<br/><br/>
            ${createForm()}<br/><br/><br/>
        <div class="textCenter">
            <div class="buttonEnabled" onclick="model.app.page = 'print'; updateView(); printForm();">Skriv ut</div>
        </div>
        </div>
    `;
}

function createGray(aIndex, qIndex) {
    if (model.app.answered == true && aIndex >= model.questions[qIndex].gray)
    return 'style="background-color: lightgray; cursor: not-allowed;"'
}

function resultPageAdhdAnswer() {
    const hasADHD = model.app.hasADHD;
    let header = '';
    let text = '';
    let innerHTML = '';
    if (hasADHD == true) {
        header = info.result[0].header;
        text = info.result[0].text;
    }
    else {
        header = info.result[1].header;
        text = info.result[1].text;
    }
    innerHTML = /*HTML*/`
    <div class="textCenter">
        <h1>${header}</h1>
        <h3 style="width: 950px;">${text}</h3>
    </div>
    `;
    return innerHTML;
}

function printPage() {
    model.html = /*HTML*/ `
    <div style="background-color: white;">
        <h3>${fname} ${sname}</h3>
        <div style="scale: 0.65; position: relative; bottom: 100px;">${createForm()}</div>
    </div>
    `;
}

// ikke ferdig
function generatePDF() {
    const doc = new window.jspdf.jsPDF();
    const formContent = document.getElementById('createOptionsHtml').textContent.trim();
}