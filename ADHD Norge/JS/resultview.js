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
        <div class="center">
        <br/><br/><br/>
            ${resultPageAdhdAnswer()}<br/><br/>
            ${createForm()}<br/><br/><br/>
            <div class="button2" onclick="model.app.page = 'print'; updateView(); printForm();">Skriv ut</div>
            
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
        header = 'Anbefaling av kontakt med fastlege'
        text = `Med resultat av denne testen anbefaler vi at du tar en prat med fastlegen angående om du burde få utredning av ADHD`;
    }
    else {
        header = 'Ser ikke grunn til anbefaling av kontakt med fastlege'
        text = `Ikke tydlige nok symptomer til å anbefale lege, men hvis du selv er usikker og føler 
                deg plaget med saker kan du ta utskrift av dette dokumentet og ta med til fastlegen for videre oppfølging.`;
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

