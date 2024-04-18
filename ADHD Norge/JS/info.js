const info = {
    infoText: "Svar på spørsmålene nedenfor. Vurder deg selv i forhold til kriteriene ved hjelp av skalaen til høyre på arket. For hvert spørsmål <b><u>klikker du i den ruten</b></u> som best beskriver hvordan du har følt og oppført deg de siste seks månedene. Etter at du har fylt ut denne sjekklisten, gir du den til din behandler, slik at dere kan diskutere den i løpet av dagens time.",
    result: [
        {
            header: 'Anbefaling av kontakt med fastlege',
            text: `Med resultat av denne testen anbefaler vi at du tar en prat med fastlegen angående om du burde få utredning av ADHD`,
        },
        {
            header: 'Ser ikke grunn til anbefaling av kontakt med fastlege',
            text: `Ikke tydlige nok symptomer til å anbefale lege, men hvis du selv er usikker og føler 
                   deg plaget med saker kan du ta utskrift av dette dokumentet og ta med til fastlegen for videre oppfølging.`,
        },
    ],
    credit: [
        {
            name: /*HTML*/`
            <div style="font-weight: bold;">Lenard Adler, MD</div>
            <div>Associate Professor of Psychiatry and Neurology</div>
            <div>New York University Medical School</div><br/>`
        },
        {
            name: /*HTML*/`
            <div style="font-weight: bold;">Ronald C. Kessler, PhD</div>
            <div>Professor, Department of Health Care Policy</div>
            <div>Harvard Medical School</div><br/>`
        },
        {
            name: /*HTML*/`
            <div style="font-weight: bold;">Thomas Spencer, MD</div>
            <div>Associate Professor of Psychiatry</div>
            <div>Harvard Medical School</div>`
        },
    ],
    text: {
            header1: 
                'Symptomsjekkliste for ADHD- selvrapporteringsskala for voksne (ASRS-v1.1) Instruksjoner'
            ,
            desc1: 
                `Spørsmålene på baksiden er utarbeidet for å stimulere til dialog mellom deg og pasientene og å 
                bidra til å avgjøre om de kan lide av symptomer forbundet med attention-deficit/hyperactivity disorder (ADHD).<br/><br/>
                
                Beskrivelse: Symptomsjekklisten er et instrument som består av de atten DSM-IV-TR-kriteriene.
                Seks av de atten spørsmålene har vist seg å være mest forutsigbare for symptomer som er overensstemmende med ADHD.<br/>
                Disse seks spørsmålene utgjør grunnlaget for ASRS v1.1 Screener og er også del A avsymptomsjekklisten. 
                Del B av symptomsjekklisten inneholder de tolv resterende spørsmålene.<br/><br/><br/>`
            ,
            symptoms: 
                `1.&emsp;&emsp; Be pasienten fylle ut både del A og del B av symptomsjekklisten ved å krysse av i den ruten som best beskriver hvor hyppig hvert symptom forekommer.<br/><br/>
                2.&emsp;&emsp; Legg sammen svarene i del A. Hvis det er fire eller flere kryss i de skraverte rutene i del A,<br/> 
                &emsp;&emsp;&emsp;har pasienten symptomer som i stor grad er overensstemmende med ADHD hos voksne. Videreutredning anbefales.<br/><br/>
                3.&emsp;&emsp; Svarene i del B gir ytterligere informasjon og kan tjene som utgangspunkt for videre utredning av pasientens symptomer.<br/>
                &emsp;&emsp;&emsp;Vær særlig oppmerksom på kryss i skraverte ruter. Frekvensen av angivelsene blir ulikt vektet for de ulike spørsmålene.<br/> 
                &emsp;&emsp;&emsp;For de tolv spørsmålene regnes det verken ut samlet poengsum eller anvendes diagnostisk sannsynlighet.<br/> 
                &emsp;&emsp;&emsp;Det har vist seg at de seks spørsmålene i del A er de som er mest forutsigbare for ADHD og er best egnet som screeninginstrument.<br/><br/>`
            ,
            list2: 
                `1.&emsp;&emsp; Gå gjennom hele symptomsjekklisten med pasienten og vurder graden av funksjonssvekkelsen som er forbundet med symptomene.<br/><br/>
                2.&emsp;&emsp; Ta arbeid/skole, sosialt liv og familieliv med i betraktningen.<br/><br/>
                3.&emsp;&emsp; Symptomhyppighet og – styrke henger ofte sammen. Symptomsjekklisten kan derfor være til hjelp i evaluering av funksjonssvekkelsen.<br/> 
                &emsp;&emsp;&emsp;Dersom pasientene har hyppige symptomer, kan det være nyttig å be dem beskrive hvordan disse problemene har påvirket evnen til å arbeide,<br/> 
                &emsp;&emsp;&emsp;gjørehusarbeid eller komme overens med andre mennesker, f.eks. ektefelle/partner, samboer eller andre nærpersoner.<br/><br/>`
            ,
            desc2: 
                `Vurder om disse eller lignende symptomer var til stede i barndommen. Voksne med ADHD behøver ikke formelt ha fått diagnosen som barn.<br/> 
                I evalueringen av pasientens historie bør du se etter belegg for tidlig forekommende og langvarige vansker med oppmerksomhet eller problemer med selvkontroll.<br/> 
                Enkelte viktige symptomer bør ha forekommet i barndommen, men allesymptomene trenger ikke å ha vært til stede.`
            ,
            desc3:
                `Forskning viser at symptomene på ADHD kan vedvare inn i voksen alder og ha betydelig innvirkning på forholdet til andre mennesker, yrkeskarriere og til og med 
                sikkerheten til de pasientene som lider av det. 1-4 Fordi denne lidelsen ofte blir misforstått vil mange som lider av den og som ikke mottar relevant behandling, muligens 
                aldri klare å få vist sitt fulle potensial. En del av problemet er at den kanvære vanskelig å diagnostisere, særlig hos voksne.
                <br/><br/>
                Symptomsjekklisten for ADHD- selvrapporteringsskala for voksne (ASRS-v1.1) er utviklet i samarbeid med Verdens helseorganisasjon (WHO) og Workgroup on 
                Adult ADHD, bestående av følgende psykiatere og forskere:<br/><br/><br/>`
            ,
            desc4:
                `Som behandler kan du bruke ASRS v1.1 som et verktøy i arbeidet med å utrede ADHD hos voksnepasienter. Informasjonen som innhentes ved hjelp av 
                spørreskjemaet, kan indikere behovet for en mer inngående utredningssamtale. Spørsmålene i ASRS v1.1 er overensstemmende med kriteriene i DSMIV og er rettet mot 
                hvordan ADHD-symptomene hos voksne viser seg. Innholdet i spørreskjemaetgjenspeiler også hvilken vekt DSM-IV legger på ulike symptomer, funksjonssvekkelser og 
                anamnesefor en korrekt diagnose.<br/><br/>
                
                <span style="font-weight: bold; text-decoration: underline;"> Det tar ca. 5 minutter å fylle ut sjekklisten, og informasjonen den gir kan være et supplement idiagnostiseringen.</span>`
            ,
            references: 
                `<hr/> 1. Schweitzer JB, et al. Med Clin North Am. 2001;85(3):10-I I, 757-777.<br/>
                2. Barkley RA. Attention Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment. 2nd ed. 1998.<br/>
                3. Biederman J, et al. Am J Psychiatry, 1993:150:1792-1798.<br/>
                4. American Psychiatric Association: Diagnostic and Statistical Manual of Mental Disorders,<br/> Fourth Edition, Text Revision. 
                Washington, DC, American Psychiatric Association. 2000: 85-93.<br/>`
            ,
    },
} 