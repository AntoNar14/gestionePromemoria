const prompt=require("prompt-sync")();
/**
 * Programma realizzato da:
 * 1) Nardella Antonio
 * 2) De Bonis Pierferdinando
 * 3) Fini Francesco Pio
 * Programma realizzato a scopi didattici nell' A.S. 2023/2024
 * Questo programma permette di gestire con diverse funzionalità dei promemoria inseriti dall'utente.
 * Questa è la versione base del programma e racchiude le funzioni principali per la gestione di promemoria. 
 */

/**
 * Permette di visualizzare l'elenco delle attività.
 * @param {string} attivita - E' l'array che contiene tutte le attività inserite dall'utente. 
 */
function visualizzaElencoAttivita(attivita)
{
    console.log("Registro attività: ");
    for(let i=0; i<attivita.length; i++)
    {
        console.log((i+1)+") "+attivita[i]);
    }
}

/**
 * Permette di inserire tutte le attività desiderate dall'utente.
 * @param {string} attivita - E' l'array che contiene tutte le attività inserite dall'utente. 
 */
function inserisciAttivita(attivita)
{
    let a="";
    do
    {
        console.log("In caso non si vuole aggiungere altre attività premere semplicemente 'invio'");
        a=prompt("Inserire l'attività che si vuole aggiungere: ");
        if(a.length>0)
            attivita.push(a+" (Non completata!)");
    }while(a.length>0);
}

/**
 * Permette di cancellare le attività che sono state inserite nell'elenco.
 * @param {string} attivita - E' l'array che contiene tutte le attività inserite dall'utente. 
 */
function cancellaAttivita(attivita)
{
    let stringa=prompt("Inserisci l'attività che si vuole eliminare: ");
    let pos=attivita.indexOf(stringa);
    if(pos!==-1)
        attivita.splice(pos,1);
    else
        console.log("L'attività inserita non è presente nell'elenco!");
}

/**
 * Permette di modificare un'attività.
 * @param {string} attivita - E' l'array che contiene tutte le attività inserite dall'utente.  
 */
function modificaAttivita(attivita)
{
    let sceltaAtt=0;
    visualizzaElencoAttivita(attivita);
    sceltaAtt=Number(prompt("Inserire il numero dell' attivita che si vuole modificare: "));
    if((sceltaAtt-1)<=attivita.length)
        attivita[sceltaAtt-1]=(prompt("Inserire la nuova attività: ")+" (Non completata!)");
    else
        console.log("Indice inserito non valido!");
}

/**
 * Permette di spuntare un attività.
 * @param {string} attivita - E' l'array che contiene tutte le attività inserite dall'utente.  
 */
function spuntaAttivita(attivita)
{
    visualizzaElencoAttivita(attivita);
    let attivitaC=Number(prompt("Inserire l'indice dell'attività che si vuole spuntare come completata: "));
    if((attivitaC-1)<=attivita.length)
        attivita[attivitaC-1]=attivita[attivitaC-1].replace("(Non completata!)","(Completata!)");
    else
        console.log("Indice inserito non valido!");
}

/**
 * Permette di ricercare una specifica attività nell'elenco.
 * @param {string} attivita - E' l'array che contiene tutte le attività inserite dall'utente. 
 */
function ricercaAttivita(attivita)
{
    let stringa=prompt("Inserire l'attività che si vuole ricercare nell'elenco: ");
    if(attivita.includes(stringa))
        console.log("L' attività ("+stringa+") è presente nell'elenco!");
    else
        console.log("L' attività ("+stringa+") non è presente nell'elenco!");
}

/**
 * Questo è il main, ovvero la funzione principale del programma dove tutte le altre funzioni vengono richiamate se necessario.
 */
function main()
{
    /**
     * @description E' l'array che contiene tutte le attività inserite dall'utente.
     * @type {Array.string}
     * @member {attivita}
     */
    let attivita=[];
    /**
     * @description E' la variabile che contiene la scelta fatta dall'utente.
     * @type {number}
     * @var {scelta1}
     */
    let scelta1=0;
    /**
     * Inizializzazione elenco delle azioni che l'utente può compiere all'interno del programma.
     */
    while(true)
    {
        console.log("Elenco delle azioni che si possono effettuare:");
        console.log("1) Aggiungi attività");
        console.log("2) Elimina attività");
        console.log("3) Modifica attività");
        console.log("4) Spunta attività");
        console.log("5) Ricerca attività");
        console.log("6) Visualizza elenco attività");
        console.log("7) Termina programma");
        scelta1=Number(prompt("Inserire l'azione che si vuole compiere: "));
        /**
         * In base alla scelta dell'utente viene richiamata una funzione.
         */
        switch(scelta1)
        {
            case 1:
                inserisciAttivita(attivita);
                break;
            case 2:
                cancellaAttivita(attivita);
                break;
            case 3:
                modificaAttivita(attivita);
                break;
            case 4:
                spuntaAttivita(attivita);
                break;
            case 5:
                ricercaAttivita(attivita);
                break;
            case 6: 
                visualizzaElencoAttivita(attivita);
                break;
            case 7:
                return;
            default:
                console.log("Comando inserito non valido!");
        }
    }
}
main();