const prompt = require("prompt-sync")();

function inserisciAttivita(arrayA)
 {
    let nuovaAttivita = {
        nome: "",
        stato: "Non completata!",
        categoria: "",
        scadenza: 0
    };
    nuovaAttivita.nome = prompt("Inserire il nome dell'attività: ");
    nuovaAttivita.categoria = prompt("Inserire a quale categoria appartiene l'attività: ");
    nuovaAttivita.scadenza = Number(prompt("Inserire la scadenza dell'attività in ore: "));
    arrayA.push({...nuovaAttivita});
}
function cancellaAttivita(arrayA)
{
    visualizzaElencoAttivita(arrayA);
    let scelta=Number(prompt("Inserire il l'indice dell'attività che si vuole eliminare: "));
    if((scelta-1)<=arrayA.length)
        arrayA.splice((scelta-1),1);
    else
        console.log("Indcie non valido!");
}
function modificaAttivita(arrayA) 
{
    visualizzaElencoAttivita(arrayA);
    let sceltaAtt = Number(prompt("Inserire il numero dell'attività che si vuole modificare: "));
    if ((sceltaAtt - 1) < arrayA.length) 
    {
        let attivitaDaModificare = { ...arrayA[sceltaAtt - 1] };
        attivitaDaModificare.nome = prompt("Inserire il nuovo nome dell'attività: ");
        attivitaDaModificare.categoria = prompt("Inserire la nuova categoria dell'attività: ");
        attivitaDaModificare.scadenza = Number(prompt("Inserire la nuova scadenza dell'attività: "));
        arrayA[sceltaAtt - 1] = attivitaDaModificare;
    } else 
    {
        console.log("Indice inserito non valido!");
    }
}
function spuntaAttivita(arrayA)
{
    visualizzaElencoAttivita(arrayA);
    let sceltaAtt = Number(prompt("Inserire il numero dell'attività che si vuole spuntare: "));
    if ((sceltaAtt - 1) < arrayA.length) 
    {
        arrayA[sceltaAtt-1].stato="Completata!"
    } else 
    {
        console.log("Indice inserito non valido!");
    }
}
function ricercaAttivita(arrayA)
{
    let trovata=false;
    let scelta=prompt("Inserire l'attività che si vuole ricercare: ");
    for(let i=0; i<arrayA.length; i++)
    {
        if(arrayA[i].nome==scelta)
        {
            console.log("L'attività "+scelta+" è presente nell'elenco!");
            trovata=true;
            break;
        }
    }
    if(!trovata)
        console.log("L'attività "+scelta+" non è presente nell'elenco!");
}
function visualizzaNotifiche(arrayA)
{
    
}
function visualizzaElencoAttivita(arrayA)
{
    if(arrayA.length>0)
    {
        console.log("Elenco delle attività:");
        for(let i = 0; i < arrayA.length; i++) 
        {
            console.log("Attività " + (i+1) + ":");
            console.log("Nome: " + arrayA[i].nome);
            console.log("Stato: " + arrayA[i].stato);
            console.log("Categoria: " + arrayA[i].categoria);
            console.log("Scadenza: " + arrayA[i].scadenza);
            console.log("----------------------------");
        }
    }
    else
    {
        console.log("L'elenco delle attività è vuoto!");
    }
}
function main()
{
    let attivita={
        nome:"",
        stato:"Non completata!",
        categoria:"",
        scadenza:0
    }
    let arrayA=[];
    let scelta1=0, scelta2="";
    while(true)
    {
        console.log("Elenco delle azioni che si possono effettuare:");
        console.log("1) Aggiungi attività");
        console.log("2) Elimina attività");
        console.log("3) Modifica attività");
        console.log("4) Spunta attività");
        console.log("5) Ricerca attività");
        console.log("6) Visualizza elenco attività");
        scelta1=Number(prompt("Inserire l'azione che si vuole compiere: "));
        switch(scelta1)
        {
            case 1:
                inserisciAttivita(arrayA);
                break;
            case 2:
                cancellaAttivita(arrayA);
                break;
            case 3:
                modificaAttivita(arrayA);
                break;
            case 4:
                spuntaAttivita(arrayA);
                break;
            case 5:
                ricercaAttivita(arrayA);
                break;
            case 6: 
                visualizzaElencoAttivita(arrayA);
                break;
            default:
                console.log("Comando inserito non valido!");
        }
        scelta2=prompt("Uscire dal programma (Si o No): ");
        scelta2.toLowerCase();
        if(scelta2==="si")
            break;
    }
}
main();