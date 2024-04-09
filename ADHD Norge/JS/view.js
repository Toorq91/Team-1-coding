function updateView() {
    const currentPage = model.app.page;
    if (currentPage == null) mainPage();
    if (currentPage == 'result') resultPage();
};

function mainPage() {
    const texts = info.text;
    let html = /*HTML*/`
    <div class="center">
        <h1>${texts.header1}</h1>
        <div>${texts.desc1}</div>
        </div>
        <h2 class="headersLeft" style="padding-right: 1360px">Instruksjoner</h2>
        <h2 class="headersLeft">Symptomer:</h2>
        <div class="adjust">${texts.list1}</div>
        <h2 class="headersLeft">Funksjonsvekkelse:</h2>
        <div class="adjust" style="padding-right: 440px">${texts.list2}</div>
        <h2 class="headersLeft" style="padding-right: 1415px">Historie:</h2>
        <div class="adjust" style="padding-right: 320px">${texts.desc2}</div>
    
    <h2 class="center">Nytten av ADHD- screening hos voksne</h2>
    <div>${texts.desc3}</div>
    ${credit()}<br/><br/>
    <div>${texts.desc4}</div>
    <div>Referanser:</div><br/>
    <div>${texts.references}</div>
    </div>
    `;
    document.getElementById('app').innerHTML = html
};

function credit() {
    let creditHtml = '';
    creditHtml = /*HTML*/ `
    ${info.credit[0].name}
    ${info.credit[1].name}
    ${info.credit[2].name}
    `
    return creditHtml;
}

