/*1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
3. Stampare Nome, cognome, età e codice giocatore.
4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.
*/

// creazione di un oggetto player
const player = {
    id: '',
    nome: 'Antonio',
    cognome: 'Capone',
    age: 27,
    averagePoints: 0,
    threeShots: 0,
}

// creazione di tre array per la generazione casuale dell' ID e di "nome e Cognome"
const names = ['Carmelo', 'Pietro', 'Giùann', 'Ajeje', 'Franco', 'Ennio', 'Riccardino'];
const surnames = ['Skifatteruft', 'Fitzgerald', 'Culodigomma', 'Fuffolo', 'Muro', 'Capatonda', 'Jones'];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Z'];

// assegnazione casuale delle proprietà "ID", "media punti / partita" e "percentuale di successo per i tiri da tre", con delle funzioni
player.id = getID(letters);
player.averagePoints = averageP();
player.threeShots = threeShots();

// creazione di un array di dieci giocatori creati in modo del tutto casuale
const tenPlayers = [];
gen10Players(tenPlayers, letters);

// creazione di un nuovo array contenente i soli giocatori che hanno una "media punti/partita" superiore a 35 ed una "percentuale di successo sui tiri da tre" superiore ad 80
const topPlayers = tenPlayers.filter(x => x.averagePoints > 35 && x.threeShots > 80);






















//functions
function getID(array) {
    let ID = '';
    for (let i = 1; i < 4; i++) {
        const n = Math.floor((Math.random() * 25));
        ID += array[n];
    }

    const x = Math.floor((Math.random() * 999));
    ID += x;

    return ID;
}

function averageP() {
    return Math.floor((Math.random() * 51));
}

function threeShots() {
    return Math.floor((Math.random() * 101));
}

function gen10Players(array, letters) {
    for (let i = 1; i < 11; i++) {
        let x = Math.floor((Math.random() * 7));
        let y = Math.floor((Math.random() * 7));
        let newPlayer = {};
        newPlayer.nome = names[x];
        newPlayer.cognome = surnames[y];
        newPlayer.ID = getID(letters);
        newPlayer.age = Math.floor((Math.random() * 20) + 17);
        newPlayer.averagePoints = averageP();
        newPlayer.threeShots = threeShots();
        array.push(newPlayer);
        console.log(newPlayer);
    }
}

function checkRatings(averageP, threeShots, tenPlayers) {


  }