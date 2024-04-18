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
        <div class="center">
            <h1>${texts.header1}</h1>
                <div>${texts.desc1}</div>
                <hr/><br/>

            <h2 class="instruct">Instruksjoner</h2>
                <h2>Symptomer:</h2>
                    <div>${texts.symptoms}</div>
                <h2>Funksjonssvekkelse:</h2>
                    <div>${texts.list2}</div>
                <br/><hr/><br/>
                <h2>Historie:</h2>
                    <div>${texts.desc2}</div>
                <br/><br/><hr/><br/><br/><br/>
            
                ${userInput()}<br/><br/>
                ${createForm()}<br/><br/><br/>
                <div class="textCenter">
                    <div ${isAllQuestionsAnswered()}>Se resultat</div>
                </div>
                <br/><br/><hr/><br/>

            <h2>Nytten av ADHD- screening hos voksne</h2>
                <div>${texts.desc3}</div>
                <div class="textCenter">
                    ${credit()}
                </div>
                <br/><br/>
                <div>${texts.desc4}</div><br/>
            
            <div class="references">
                Referanser:
                <div>${texts.references}</div>
            </div>
        </div>
    `;
};

function isAllQuestionsAnswered() {
    let value = 0;
    for (let i = 0; i < model.questions.length; i++) {
        if (model.questions[i].answer !== null) value++
    };
    if (value < 18)
        return 'class="buttonDisabled"' 
    else if (value >= 18)
        return 'class="buttonEnabled" onclick="pageButtons()"'
};

function userInput() {
    let innerHTML = /*HTML*/ `
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
                <span><b>
                    ${getCurrentDate()}
                </b></span>
            </label>
        </div>
    `;
    return innerHTML;
};

function credit() {
    let innerHTML = /*HTML*/ `
        ${info.credit[0].name}
        ${info.credit[1].name}
        ${info.credit[2].name}
    `;
    return innerHTML;
};

function getCurrentDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    return year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
};