/*
const csv=document.getElementById("csv");
let verben=[];

Papa.parse(csv.files, {  
     header: true,
	complete: function(result) {       
        verben=result.data;
        console.log("good",result.data);}
})
  */


const verben=[
  {
    "infinitiv": "befehlen",
    "prateritum": "befahl",
    "perfekt": "habe befohlen",
    "duForm": "befiehlst"
  },
  {
    "infinitiv": "beissen",
    "prateritum": "biss",
    "perfekt": "habe gebissen",
    "duForm": "beisst"
  },
  {
    "infinitiv": "belügen",
    "prateritum": "belog",
    "perfekt": "habe belogen",
    "duForm": "belügst"
  },
  {
    "infinitiv": "biegen",
    "prateritum": "bog",
    "perfekt": "habe gebogen",
    "duForm": "biegst"
  },
  {
    "infinitiv": "binden",
    "prateritum": "band",
    "perfekt": "habe gebunden",
    "duForm": "bindest"
  },
  {
    "infinitiv": "bitten",
    "prateritum": "bat",
    "perfekt": "habe gebeten",
    "duForm": "bittest"
  },
  {
    "infinitiv": "blasen",
    "prateritum": "blies",
    "perfekt": "habe geblasen",
    "duForm": "bläst"
  },
  {
    "infinitiv": "bleiben",
    "prateritum": "blieb",
    "perfekt": "bin geblieben",
    "duForm": "bleibst"
  },
  {
    "infinitiv": "brechen",
    "prateritum": "brach",
    "perfekt": "habe gebrochen",
    "duForm": "brichst"
  },
  {
    "infinitiv": "brennen",
    "prateritum": "brannte",
    "perfekt": "habe gebrannt",
    "duForm": "brennst"
  },
  {
    "infinitiv": "bringen",
    "prateritum": "brachte",
    "perfekt": "habe gebracht",
    "duForm": "bringst"
  },
  {
    "infinitiv": "denken",
    "prateritum": "dachte",
    "perfekt": "habe gedacht",
    "duForm": "denkst"
  },
  {
    "infinitiv": "dürfen",
    "prateritum": "durfte",
    "perfekt": "habe gedurft",
    "duForm": "darfst"
  },
  {
    "infinitiv": "essen",
    "prateritum": "ass",
    "perfekt": "habe gegessen",
    "duForm": "isst"
  },
  {
    "infinitiv": "fahren",
    "prateritum": "fuhr",
    "perfekt": "bin gefahren",
    "duForm": "fährst"
  },
  {
    "infinitiv": "fallen",
    "prateritum": "fiel",
    "perfekt": "bin gefallen",
    "duForm": "fällst"
  },
  {
    "infinitiv": "fangen",
    "prateritum": "fing",
    "perfekt": "habe gefangen",
    "duForm": "fängst"
  },
  {
    "infinitiv": "finden",
    "prateritum": "fand",
    "perfekt": "habe gefunden",
    "duForm": "findest"
  },
  {
    "infinitiv": "fliegen",
    "prateritum": "flog",
    "perfekt": "bin geflogen",
    "duForm": "fliegst"
  },
  {
    "infinitiv": "fliehen",
    "prateritum": "floh",
    "perfekt": "bin geflohen",
    "duForm": "fliehst"
  },
  {
    "infinitiv": "fliessen",
    "prateritum": "floss",
    "perfekt": "bin geflossen",
    "duForm": "fliesst"
  },
  {
    "infinitiv": "fressen",
    "prateritum": "frass",
    "perfekt": "habe gefressen",
    "duForm": "frisst"
  },
  {
    "infinitiv": "frieren",
    "prateritum": "fror",
    "perfekt": "habe gefroren",
    "duForm": "frierst"
  },
  {
    "infinitiv": "geben",
    "prateritum": "gab",
    "perfekt": "habe gegeben",
    "duForm": "gibst"
  },
  {
    "infinitiv": "gehen",
    "prateritum": "ging",
    "perfekt": "bin gegangen",
    "duForm": "gehst"
  },
  {
    "infinitiv": "geschehen",
    "prateritum": "geschah",
    "perfekt": "ist geschehen",
    "duForm": "geschieht"
  },
  {
    "infinitiv": "gewinnen",
    "prateritum": "gewann",
    "perfekt": "habe gewonnen",
    "duForm": "gewinnst"
  },
  {
    "infinitiv": "giessen",
    "prateritum": "goss",
    "perfekt": "habe gegossen",
    "duForm": "giesst"
  },
  {
    "infinitiv": "graben",
    "prateritum": "grub",
    "perfekt": "habe gegraben",
    "duForm": "gräbst"
  },
  {
    "infinitiv": "greifen",
    "prateritum": "griff",
    "perfekt": "habe gegriffen",
    "duForm": "greifst"
  },
  {
    "infinitiv": "haben",
    "prateritum": "hatte",
    "perfekt": "habe gehabt",
    "duForm": "hast"
  },
  {
    "infinitiv": "halten",
    "prateritum": "hielt",
    "perfekt": "habe gehalten",
    "duForm": "hältst"
  },
  {
    "infinitiv": "hauen",
    "prateritum": "haute",
    "perfekt": "habe gehauen",
    "duForm": "haust"
  },
  {
    "infinitiv": "heissen",
    "prateritum": "hiess",
    "perfekt": "habe geheissen",
    "duForm": "heisst"
  },
  {
    "infinitiv": "helfen",
    "prateritum": "half",
    "perfekt": "habe geholfen",
    "duForm": "hilfst"
  },
  {
    "infinitiv": "kennen",
    "prateritum": "kannte",
    "perfekt": "habe gekannt",
    "duForm": "kennst"
  },
  {
    "infinitiv": "klingen",
    "prateritum": "klang",
    "perfekt": "habe geklungen",
    "duForm": "klingst"
  },
  {
    "infinitiv": "kommen",
    "prateritum": "kam",
    "perfekt": "bin gekommen",
    "duForm": "kommst"
  },
  {
    "infinitiv": "können",
    "prateritum": "konnte",
    "perfekt": "habe gekonnt",
    "duForm": "kannst"
  },
  {
    "infinitiv": "kriechen",
    "prateritum": "kroch",
    "perfekt": "bin gekrochen",
    "duForm": "kriechst"
  },
  {
    "infinitiv": "lassen",
    "prateritum": "liess",
    "perfekt": "habe gelassen",
    "duForm": "lässt"
  },
  {
    "infinitiv": "laufen",
    "prateritum": "lief",
    "perfekt": "bin gelaufen",
    "duForm": "läufst"
  },
  {
    "infinitiv": "lesen",
    "prateritum": "las",
    "perfekt": "habe gelesen",
    "duForm": "liest"
  },
  {
    "infinitiv": "liegen",
    "prateritum": "lag",
    "perfekt": "bin/habe  gelegen",
    "duForm": "liegst"
  },
  {
    "infinitiv": "lügen",
    "prateritum": "log",
    "perfekt": "habe gelogen",
    "duForm": "lügst"
  },
  {
    "infinitiv": "messen",
    "prateritum": "mass",
    "perfekt": "habe gemessen",
    "duForm": "misst"
  },
  {
    "infinitiv": "mögen",
    "prateritum": "mochte",
    "perfekt": "habe gemocht",
    "duForm": "magst"
  },
  {
    "infinitiv": "müssen",
    "prateritum": "musste",
    "perfekt": "habe gemusst",
    "duForm": "musst"
  },
  {
    "infinitiv": "nehmen",
    "prateritum": "nahm",
    "perfekt": "habe genommen",
    "duForm": "nimmst"
  },
  {
    "infinitiv": "pfeifen",
    "prateritum": "pfiff",
    "perfekt": "habe gepfiffen",
    "duForm": "pfeifst"
  },
  {
    "infinitiv": "raten",
    "prateritum": "riet",
    "perfekt": "habe geraten",
    "duForm": "rätst"
  },
  {
    "infinitiv": "reissen",
    "prateritum": "riss",
    "perfekt": "habe gerissen",
    "duForm": "reisst"
  },
  {
    "infinitiv": "reiten",
    "prateritum": "ritt",
    "perfekt": "bin geritten",
    "duForm": "reitest"
  },
  {
    "infinitiv": "rennen",
    "prateritum": "rannte",
    "perfekt": "bin gerannt",
    "duForm": "rennst"
  },
  {
    "infinitiv": "riechen",
    "prateritum": "roch",
    "perfekt": "habe gerochen",
    "duForm": "riechst"
  },
  {
    "infinitiv": "rufen",
    "prateritum": "rief",
    "perfekt": "habe gerufen",
    "duForm": "rufst"
  },
  {
    "infinitiv": "schieben",
    "prateritum": "schob",
    "perfekt": "habe geschoben",
    "duForm": "schiebst"
  },
  {
    "infinitiv": "schiessen",
    "prateritum": "schoss",
    "perfekt": "habe geschossen",
    "duForm": "schiesst"
  },
  {
    "infinitiv": "schlafen",
    "prateritum": "schlief",
    "perfekt": "habe geschlafen",
    "duForm": "schläfst"
  },
  {
    "infinitiv": "schlagen",
    "prateritum": "schlug",
    "perfekt": "habe geschlagen",
    "duForm": "schlägst"
  },
  {
    "infinitiv": "schleichen",
    "prateritum": "schich",
    "perfekt": "bin geschlichen",
    "duForm": "schleichst"
  },
  {
    "infinitiv": "schliessen",
    "prateritum": "schloss",
    "perfekt": "habe geschlossen",
    "duForm": "schliesst"
  },
  {
    "infinitiv": "schneiden",
    "prateritum": "schnitt",
    "perfekt": "habe geschnitten",
    "duForm": "schneidest"
  },
  {
    "infinitiv": "schreiben",
    "prateritum": "schrieb",
    "perfekt": "habe geschrieben",
    "duForm": "schreibst"
  },
  {
    "infinitiv": "schreien",
    "prateritum": "schrie",
    "perfekt": "habe geschrien",
    "duForm": "schreist"
  },
  {
    "infinitiv": "schweigen",
    "prateritum": "schwieg",
    "perfekt": "habe geschwiegen",
    "duForm": "schweigst"
  },
  {
    "infinitiv": "schwimmen",
    "prateritum": "schwamm",
    "perfekt": "bin geschwommen",
    "duForm": "schwimmst"
  },
  {
    "infinitiv": "schwören",
    "prateritum": "schwor",
    "perfekt": "habe geschworen",
    "duForm": "schwörst"
  },
  {
    "infinitiv": "sehen",
    "prateritum": "sah",
    "perfekt": "habe gesehen",
    "duForm": "siehst"
  },
  {
    "infinitiv": "sein",
    "prateritum": "war",
    "perfekt": "bin gewesen",
    "duForm": "bist"
  },
  {
    "infinitiv": "singen",
    "prateritum": "sang",
    "perfekt": "habe gesungen",
    "duForm": "singst"
  },
  {
    "infinitiv": "sinken",
    "prateritum": "sank",
    "perfekt": "bin gesunken",
    "duForm": "sinkst"
  },
  {
    "infinitiv": "sitzen",
    "prateritum": "sass",
    "perfekt": "bin/habe gesessen",
    "duForm": "sitzt"
  },
  {
    "infinitiv": "sprechen",
    "prateritum": "sprach",
    "perfekt": "habe gesprochen",
    "duForm": "sprichst"
  },
  {
    "infinitiv": "springen",
    "prateritum": "sprang",
    "perfekt": "bin gesprungen",
    "duForm": "springst"
  },
  {
    "infinitiv": "stechen",
    "prateritum": "stach",
    "perfekt": "habe gestochen",
    "duForm": "stichst"
  },
  {
    "infinitiv": "stehen",
    "prateritum": "stand",
    "perfekt": "bin/habe gestanden",
    "duForm": "stehst"
  },
  {
    "infinitiv": "stehlen",
    "prateritum": "stahl",
    "perfekt": "habe gestohlen",
    "duForm": "stiehlst"
  },
  {
    "infinitiv": "steigen",
    "prateritum": "stieg",
    "perfekt": "bin gestiegen",
    "duForm": "steigst"
  },
  {
    "infinitiv": "sterben",
    "prateritum": "starb",
    "perfekt": "bin gestorben",
    "duForm": "stirbst"
  },
  {
    "infinitiv": "stinken",
    "prateritum": "stank",
    "perfekt": "habe gestunken",
    "duForm": "stinkst"
  },
  {
    "infinitiv": "stossen",
    "prateritum": "stiess",
    "perfekt": "habe gestossen",
    "duForm": "stösst"
  },
  {
    "infinitiv": "streichen",
    "prateritum": "strich",
    "perfekt": "habe gestrichen",
    "duForm": "streichst"
  },
  {
    "infinitiv": "streiten",
    "prateritum": "stritt",
    "perfekt": "habe gestritten",
    "duForm": "streitest"
  },
  {
    "infinitiv": "tragen",
    "prateritum": "trug",
    "perfekt": "habe getragen",
    "duForm": "trägst"
  },
  {
    "infinitiv": "treffen",
    "prateritum": "traf",
    "perfekt": "habe getroffen",
    "duForm": "triffst"
  },
  {
    "infinitiv": "trinken",
    "prateritum": "trank",
    "perfekt": "habe getrunken",
    "duForm": "trinkst"
  },
  {
    "infinitiv": "tun",
    "prateritum": "tat",
    "perfekt": "habe getan",
    "duForm": "tust"
  },
  {
    "infinitiv": "vergessen",
    "prateritum": "vergass",
    "perfekt": "habe vergessen",
    "duForm": "vergisst"
  },
  {
    "infinitiv": "verlieren",
    "prateritum": "verlor",
    "perfekt": "habe verloren",
    "duForm": "verlierst"
  },
  {
    "infinitiv": "verzeihen",
    "prateritum": "verzieh",
    "perfekt": "habe verziehen",
    "duForm": "verzeihst"
  },
  {
    "infinitiv": "wachsen",
    "prateritum": "wuchs",
    "perfekt": "bin gewachsen",
    "duForm": "wächst"
  },
  {
    "infinitiv": "waschen",
    "prateritum": "wusch",
    "perfekt": "habe gewaschen",
    "duForm": "wäschst"
  },
  {
    "infinitiv": "werden",
    "prateritum": "wurde",
    "perfekt": "bin geworden",
    "duForm": "wirst"
  },
  {
    "infinitiv": "werfen",
    "prateritum": "warf",
    "perfekt": "habe geworfen",
    "duForm": "wirfst"
  },
  {
    "infinitiv": "wissen",
    "prateritum": "wusste",
    "perfekt": "habe gewusst",
    "duForm": "weisst"
  },
  {
    "infinitiv": "ziehen",
    "prateritum": "zog",
    "perfekt": "habe gezogen",
    "duForm": "ziehst"
  },
  {
    "infinitiv": "erschrecken",
    "prateritum": "erschrak/erschreckte",
    "perfekt": "bin erschrocken/habe erschreckt",
    "duForm": "erschrickst/erschreckst"
  },
  {
    "infinitiv": "hängen",
    "prateritum": "hing/hängte",
    "perfekt": "bin gehangen/habe gehängt",
    "duForm": "hängst"
  },
  {
    "infinitiv": "wägen",
    "prateritum": "wog",
    "perfekt": "habe gewogen",
    "duForm": "wägst"
  },
  {
    "infinitiv": "wiegen",
    "prateritum": "wog",
    "perfekt": "habe gewogen",
    "duForm": "wiegst"
  }
]

const score=document.getElementById("score");
const starten=document.getElementById("starten");
const nachste=document.getElementById("nachste");
const infinitiv=document.getElementById("infinitiv");
const prateritum=document.getElementById("prateritum");
const perfekt=document.getElementById("perfekt");
const duForm=document.getElementById("duForm");
const infLosung=document.getElementById("infLosung");
const praLosung=document.getElementById("praLosung");
const perLosung=document.getElementById("perLosung");
const duLosung=document.getElementById("duLosung");
const praIch=document.getElementById("praIch");
const perfektIch=document.getElementById("perfektIch");
const du=document.getElementById("du");

// get the keys from object verben
const verbenType=Object.keys(verben[0]);

let vn,tn,ranVerb,verbenT,richtig,total;


starten.addEventListener("click",function(){
    richtig=0;
    total=0;
    score.textContent="";
    nachste.classList.remove("invisible");
    initial();
});

nachste.addEventListener("click",function(){
    initial();
});


infinitiv.addEventListener("keyup",function(e) {
    if (!infinitiv.readOnly && e.key === 'Enter' && infinitiv.value!="") {
        if (infinitiv.value==verben[vn].infinitiv) {
            infLosung.textContent="\u2714";
            richtig++;
        } else {
            infLosung.textContent=`\u274C ${verben[vn].infinitiv}`;
        }
        infinitiv.readOnly= true;
        total++;
        score.textContent=`${richtig} richtig / ${total}`;
        if (!prateritum.readOnly) {
            prateritum.focus();
        } else {
            perfekt.focus();
        }   
    }   
});
prateritum.addEventListener("keyup",function(e) {
    if (!prateritum.readOnly && e.key === 'Enter'  && prateritum.value!="") {
        if (prateritum.value==verben[vn].prateritum) {
            praLosung.textContent="\u2714";
            richtig++;
        } else {
            praLosung.textContent=`\u274C ${verben[vn].prateritum}`;
        }
        prateritum.readOnly= true;
        total++;
        score.textContent=`${richtig} richtig / ${total}`;
        if (!perfekt.readOnly) {
            perfekt.focus();
        } else {
            duForm.focus();
        }
      }
});
perfekt.addEventListener("keyup",function(e) {
    if (!perfekt.readOnly && e.key === 'Enter' && perfekt.value!="") {
        if (perfekt.value==verben[vn].perfekt) {
            perLosung.textContent="\u2714";
            richtig++;
        } else {
            perLosung.textContent=`\u274C ${verben[vn].perfekt}`;
        }
        perfekt.readOnly= true;
        total++;
        score.textContent=`${richtig} richtig / ${total}`;
        if (!duForm.readOnly) {
            duForm.focus();
        } else {
            nachste.focus();
        }
      }
});
duForm.addEventListener("keyup",function(e) {
    if (!duForm.readOnly && e.key === 'Enter' && duForm.value!="") {
        if (duForm.value==verben[vn].duForm) {
            duLosung.textContent="\u2714";
            richtig++;
        } else {
            duLosung.textContent=`\u274C ${verben[vn].duForm}`;
        }
        duForm.readOnly= true;
        total++;
        score.textContent=`${richtig} richtig / ${total}`;
        nachste.focus();
      }
});

function initial() {
    infinitiv.readOnly= false;
    prateritum.readOnly= false;
    perfekt.readOnly= false;
    duForm.readOnly= false;
    infinitiv.value="";
    prateritum.value="";
    perfekt.value="";
    duForm.value="";
    infLosung.textContent="";
    praLosung.textContent="";
    perLosung.textContent="";
    duLosung.textContent="";
    randomVerben();
}

function randomVerben() {
    vn=Math.floor(Math.random() * verben.length);
    tn=Math.floor(Math.random() * verbenType.length);
    verbT=verbenType[tn];
    ranVerb=verben[vn][verbT];
    switch (verbenType[tn]) {
        case "infinitiv": 
            infinitiv.value=ranVerb;
            infinitiv.readOnly= true;
            prateritum.focus();
            break;
        case "prateritum": 
            prateritum.value=ranVerb;
            prateritum.readOnly= true;
            infinitiv.focus();
            break;
        case "perfekt": 
            perfekt.value=ranVerb;
            perfekt.readOnly= true;
            infinitiv.focus();
            break;
        case "duForm": 
            duForm.value=ranVerb;
            duForm.readOnly= true;
            infinitiv.focus();
            break;    
    }
    if (verbT.infinitiv=="geschehen") {
        praIch.textContent="Präteritum: es";
        perfektIch.textContent="Perfekt: es";
        du.textContent="du-Form: es";
    } else {
        praIch.textContent="Präteritum: ich";
        perfektIch.textContent="Perfekt: ich";
        du.textContent="du-Form: du";
    }
}

