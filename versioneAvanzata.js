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
    let ver=false;
    let numA=0;
    for(let i=0; i<arrayA.length; i++)
    {
        if(arrayA[i].stato=="Non completata!")
        {
            numA++;
            console.log("Attività n° "+(numA)+" nome attività: "+arrayA[i].nome);   
            ver=true;   
        }
    }
    if(!ver)
        console.log("Non ci sono attività da completare!");
}
function ordinaAttivitaPerNome(arrayA) 
{
    arrayA.sort((a, b) => a.nome.localeCompare(b.nome));
}

function ordinaAttivitaPerScadenza(arrayA) 
{
    arrayA.sort((a, b) => a.scadenza - b.scadenza);
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
            console.log("Scadenza: " + arrayA[i].scadenza+" ore");
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
    let arrayA=[];
    let scelta1=0;
    while(true)
    {
        console.log("Elenco delle azioni che si possono effettuare:");
        console.log("1) Aggiungi attività");
        console.log("2) Elimina attività");
        console.log("3) Modifica attività");
        console.log("4) Spunta attività");
        console.log("5) Ricerca attività");
        console.log("6) Visualizza notifiche");
        console.log("7) Visualizza elenco attività ordinata per nome");
        console.log("8) Visualizza elenco attività ordinata per scadenza");
        console.log("9) Visualizza elenco attività non ordinato");
        console.log("10) Termina programma");
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
                visualizzaNotifiche(arrayA);
                break;
            case 7: 
                ordinaAttivitaPerNome(arrayA);
                visualizzaElencoAttivita(arrayA);
                break;
            case 8:
                ordinaAttivitaPerScadenza(arrayA);
                visualizzaElencoAttivita(arrayA);
                break;
            case 9: 
                visualizzaElencoAttivita(arrayA);
                break;
            case 10:
                return;
            default:
                console.log("Comando inserito non valido!");
        }
    }
}
main();