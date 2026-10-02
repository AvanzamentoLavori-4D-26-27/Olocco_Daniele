"option strict"
let PAROLE = [
    'BIT', 'BUS', 'CPU', 'DNS', 'FTP', 'HUB', 'LAN', 'MAC', 'NAT', 'RAM',
    'ROM', 'SSH', 'TCP', 'UDP', 'URL', 'VPN', 'WEB', 'XML', 'ZIP', 'AJAX',
    'BYTE', 'CHIP', 'CODE', 'DATA', 'DISK', 'FILE', 'FONT', 'HTML', 'HTTP', 'JAVA',
    'JSON', 'LINK', 'LOOP', 'NODE', 'OPEN', 'PING', 'PIPE', 'PORT', 'RUBY', 'SMTP',
    'SOAP', 'SORT', 'SPAM', 'SWAP', 'UNIX', 'USER', 'VLAN', 'VOID', 'WIFI', 'ARRAY',
    'CACHE', 'CLASS', 'CLOUD', 'DEBUG', 'EMAIL', 'FLASH', 'FRAME', 'INDEX', 'INPUT',
    'LAYER', 'LINUX', 'LOGIN', 'MYSQL', 'PATCH', 'PIXEL', 'PROXY', 'QUERY', 'QUEUE',
    'REGEX', 'ROUTE', 'SCALA', 'SHELL', 'SLICE', 'STACK', 'SWIFT', 'TOKEN', 'TUPLE',
    'VIRUS', 'CLASSE', 'CLIENT', 'CODICE', 'COOKIE', 'DAEMON', 'DOCKER', 'DRIVER',
    'ENCODE', 'ERRORE', 'EVENTO', 'FILTER', 'FOOTER', 'HEADER', 'IMPORT', 'LAMBDA',
    'LAYOUT', 'METODO', 'MODULE', 'NAVBAR', 'OBJECT', 'PARSER', 'PLUGIN', 'RECORD',
    'RENDER', 'ROUTER', 'SCHEMA', 'SCRIPT', 'SELECT', 'SERVER', 'SIGNAL', 'SOCKET',
    'STRING', 'SWITCH', 'TABLET', 'THREAD', 'UPDATE', 'UPLOAD', 'UTENTE', 'VECTOR',
    'WIDGET', 'WINDOW', 'GATEWAY', 'COMPILER', 'HARDWARE', 'SOFTWARE', 'PROCESSO',
    'ACCOUNT', 'ACTION', 'ADAPTER', 'ADDRESS', 'ADMIN', 'ALGORITHM', 'ALIAS', 'ALLOCATE',
    'ANALYZE', 'ANCHOR', 'ANIMATE', 'ANNOUNCE', 'APPEND', 'ARCHIVE', 'ARGUMENT', 'ASSERT',
    'ASSIGN', 'ASSET', 'ATTACH', 'ATTEMPT', 'ATTEND', 'ATTRIBUTE', 'AUCTION', 'AUDIT',
    'AUTHOR', 'AUTOMATE', 'AUTOMATION', 'AUXILIARY', 'AVATAR', 'AVERAGE', 'AVOID', 'AWAIT',
    'BACKEND', 'BACKUP', 'BASELINE', 'BATCH', 'BEACON', 'BINDING', 'BITMAP', 'BOOLEAN',
    'BOUNCE', 'BRANCH', 'BRIDGE', 'BROADCAST', 'BROKEN', 'BROWSER', 'BUFFER', 'BUILD',
    'BULLET', 'BUNDLE', 'BUTTON', 'BYPASS', 'CALENDAR', 'CALLBACK', 'CAMPAIGN', 'CANDIDATE',
    'CAPSULE', 'CAPTURE', 'CATEGORY', 'CERTIFIED', 'CHANGELOG', 'CHANNEL', 'CHARSET', 'CHART',
    'CHECKBOX', 'CHECKLIST', 'CHECKSUM', 'CHEVRON', 'CIPHER', 'CIRCUIT', 'CIRCULAR', 'CITATION',
    'CLARIFY', 'CLASSIFY', 'CLEANUP', 'CLUSTER', 'COAUTHOR', 'COEXIST', 'COGNITIVE', 'COHERENCE',
    'COHERENT', 'COINCIDE', 'COLLATERAL', 'COLLECTING', 'COLLECTION', 'COLLECTOR', 'COLLISION',
    'COLOCATE', 'COLORIZE', 'COLORSPACE', 'COLUMN', 'COMBAT', 'COMBINED', 'COMBINER', 'COMMAND',
    'COMMENT', 'COMMIT', 'COMPACT', 'COMPARE', 'COMPILE', 'COMPLEX', 'COMPOSE', 'COMPRESS',
    'COMPUTE', 'CONCAT', 'CONCEPT', 'CONCURRENT', 'CONDITION', 'CONDUCT', 'CONNECT', 'CONNECTOR',
    'CONSTANT', 'CONSTRUCT', 'CONSUME', 'CONTACT', 'CONTAIN', 'CONTAINER', 'CONTENT', 'CONTEXT',
    'CONTINUE', 'CONTRACT', 'CONTROL', 'CONVERT', 'CONVINCE', 'COOKIE', 'COPYRIGHT', 'COORDINATE',
    'CORPUS', 'CORRECT', 'CORRIDOR', 'CORRUPT', 'COSMETIC', 'COST', 'COSTUME', 'COUNTER',
    'COUPLING', 'COVERAGE', 'COVERING', 'CRAFTED', 'CRAFTSMAN', 'CREATION', 'CREATIVE', 'CREDENTIAL',
    'CREDIBLE', 'CREDITED', 'CRISIS', 'CRITERIA', 'CRITICAL', 'CRITIQUE', 'CROP', 'CROSSING',
    'CRYSTAL', 'CUBIC', 'CULPRIT', 'CULTIVATE', 'CULTURE', 'CUMULATIVE', 'CURIOUS', 'CURRENCY',
    'CURRENT', 'CURSOR', 'CUSTOM', 'CUSTOMER', 'CUSTOMIZE', 'CUTOFF', 'CUTTING', 'CYCLE',
    'DATABASE', 'DEADLINE', 'DECISION', 'DECLARED', 'DECODING', 'DECREMENT', 'DEDICATE', 'DEFAULT',
    'DEFERRED', 'DEFINED', 'DEFINITE', 'DELETION', 'DELIMITER', 'DELIVERY', 'DEMOCRACY', 'DEMOLISH',
    'DEPRESSED', 'DEPRIVED', 'DESCENDED', 'DESCENDING', 'DESCRIBED', 'DESCRIBING', 'DESCRIPTOR',
    'DESIGNATED', 'DESIGNER', 'DESIRABLE', 'DESPAIR', 'DESPERATE', 'DESPISE', 'DESTRUCT',
    'NUT', 'MODEM', 'DETACH', 'DETACHED', 'DETAIL', 'DETAILED', 'DETECT', 'DETECTED', 'DETECTION'
];
let n = 0;
let scorri = 0;
let index = 0;
let indexMin = 0;

window.onload = function () {

    let gr = document.getElementById("griglia");
    for (let i = 0; i < 10; i++) {

        let riga = document.createElement("div");

        gr.appendChild(riga);
        for (let i = 0; i < 10; i++) {
            
            let col = document.createElement("div");
            col.classList.add("cella")
            col.classList.add("cella:hover")
            riga.appendChild(col);
            col.id= n;
            n++;
        }



    }

}
function avvia(){
    scorri = setInterval(cronometro,1000);
    let ParoleCasuali = [];
    let rigaCasuale = Math.floor(Math.random() * 10);
    let alfabeto = ['a','b','c','d','e','f','g','h','w','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
    for(let i = 0 ; i < 10; i++){

        for(let c = 0; c <10; c++){
            let rnd = Math.floor(Math.random() * 26);
            let indice = i * 10 +c;
            let cella = document.getElementById(indice);
            cella.textContent = alfabeto[rnd];
        }
    }
    while (ParoleCasuali.length < 9) {
    let rnd = Math.floor(Math.random() * PAROLE.length);
    let parola = PAROLE[rnd];


    if (!ParoleCasuali.includes(parola)) {
        ParoleCasuali.push(parola);
    }
}
let indice = 0;
let gr2 = document.getElementById("pr");
    for(let i = 0; i < 3; i++){

        for(let j = 0; j <3 ;j++){
            let p = document.createElement("div");
            let p2 = document.createElement("input");
            p2.type = 'checkbox'
            p.classList.add("parl");
            p.textContent = ParoleCasuali[indice];
            p.appendChild(p2);
            gr2.appendChild(p);
            
            indice++;
        }
    }
     let btn = document.getElementById("bottone");
     if (btn) {
        btn.disabled = true;
        btn.classList.add("button2");
    }


}

function cronometro(){
     let cron1 = document.getElementById("cron");
    index++;
    let sec = "";
    let min = "";
    if(index >= 60){
        indexMin++;
        index = 0;    }
    if(index < 10){
        sec = "0" + index;
    }else{
        sec = index;
    }
    if(indexMin < 10 ){
        min = "0" + indexMin;
    }else{
        min = indexMin;
    }

    if(cron1){
        cron1.innerHTML = min + ":" + sec;
    }
}