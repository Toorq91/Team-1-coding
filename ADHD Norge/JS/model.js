let fname = '';
let sname = '';
const model = {
    app: {
        page: null,
        hasADHD: false,
    },

    html: null,
    infoText: "Svar på spørsmålene nedenfor. Vurder deg selv i forhold til kriteriene ved hjelp av skalaen til høyre på arket. For hvert spørsmål <b><u>klikker du i den ruten</b></u> som best beskriver hvordan du har følt og oppført deg de siste seks månedene. Etter at du har fylt ut denne sjekklisten, gir du den til din behandler, slik at dere kan diskutere den i løpet av dagens time.",
    questions: [
        {
            question: '1.&ensp; Hvor ofte har du problemer med å avslutte en oppgave etter at de interessante delene er unnagjort?',
            answer: null,
            gray: 3,
        },
        {
            question: '2.&ensp; Hvor ofte er det vanskelig for deg å få orden på ting når du skal utføre en oppgave som krever organisering?',
            answer: null,
            gray: 3,
        },
        {
            question: '3.&ensp; Hvor ofte har du problemer med å huske avtaler eller forpliktelser?',
            answer: null,
            gray: 3,
        },
        {
            question: '4.&ensp; Når du har en oppgave som krever at du tenker nøye igjennom det du skal gjøre, hvor ofte unngår eller utsetter du å begynne på den?',
            answer: null,
            gray: 4,
        },
        {
            question: '5.&ensp; Hvor ofte sitter du og fikler med noe når du må sitte lenge i ro?',
            answer: null,
            gray: 4,
        },
        {
            question: '6.&ensp; Hvor ofte føler du deg overdrevet aktiv og tvunget til å gjøre noe, som om du var drevet av en indre motor?',
            answer: null,
            gray: 4,
        },
        {
            question: '7.&ensp; Hvor ofte gjør du slurvefeil når du må jobbe med en kjedelig eller vanskelig oppgave?',
            answer: null,
            gray: 4,
        },
        {
            question: '8.&ensp; Hvor ofte har du problemer med å holde oppmerksomheten oppe når du gjør kjedelig eller ensformig arbeid?',
            answer: null,
            gray: 4,
        },
        {
            question: '9.&ensp; Hvor ofte har du vansker med å konsentrere deg om hva folk sier, selv når de snakker direkte til deg?',
            answer: null,
            gray: 3,
        },
        {
            question: '10.&ensp; Hvor ofte har du vanskeligheter med å finne igjen ting hjemme eller på jobb?',
            answer: null,
            gray: 4,
        },
        {
            question: '11.&ensp; Hvor ofte blir du distrahert av aktiviteter eller lyder rundt deg?',
            answer: null,
            gray: 4,
        },
        {
            question: '12.&ensp; Hvor ofte forlater du plassen din på møter eller i andre situasjoner der det forventes at du blir sittende?',
            answer: null,
            gray: 3,
        },
        {
            question: '13.&ensp; Hvor ofte føler du deg rastløs eller urolig i kroppen?',
            answer: null,
            gray: 4,
        },
        {
            question: '14.&ensp; Hvor ofte har du vanskelig for å ta det med ro og slappe av når du har tid for deg selv?',
            answer: null,
            gray: 4,
        },
        {
            question: '15.&ensp; Hvor ofte opplever du å snakke for mye i sosiale sammenhenger?',
            answer: null,
            gray: 4, 
        },
        {
            question: '16.&ensp; Hvor ofte opplever du at du fullfører setninger for andre før de rekker å fullføre dem selv?',
            answer: null,
            gray: 3,
        },
        {
            question: '17.&ensp; Hvor ofte har du problemer med å vente på tur i situasjoner der dette er nødvendig?',
            answer: null,
            gray: 4,
        },
        {
            question: '18.&ensp; Hvor ofte avbryter du andre når de holder på med noe?',
            answer: null,
            gray: 3,
        },
    ],
};