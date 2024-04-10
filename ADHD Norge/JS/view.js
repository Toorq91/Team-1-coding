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
            <div>${texts.desc1}</div><hr/>
            <h2 id="instruct">Instruksjoner</h2>
            <h2>Symptomer:</h2>
            <div>${texts.list1}</div>
            <h2>Funksjonssvekkelse:</h2>
            <div>${texts.list2}</div>
            <h2>Historie:</h2>
            <div>${texts.desc2}</div><br/><br/><hr/><br/><br/>
            <h2><hr/>Nytten av ADHD- screening hos voksne</h2>
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

function credit() {
    let creditHtml = '';
    creditHtml = /*HTML*/ `
    ${info.credit[0].name}
    ${info.credit[1].name}
    ${info.credit[2].name}
    `
    return creditHtml;
}

