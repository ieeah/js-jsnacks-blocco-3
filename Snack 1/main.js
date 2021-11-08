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

const player = {
    id: '',
    nome: 'Antonio',
    cognome: 'Capone',
    age: 27,
    averagePoints: 0,
    threeShots: 0,
}

const names = ['Carmelo', 'Pietro', 'Giùann', 'Ajeje', 'Franco', 'Ennio', 'Riccardino'];
const surnames = ['Skifatteruft', 'Fitzgerald', 'Culodigomma', 'Fuffolo', 'Muro', 'Capatonda', 'Jones'];

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Z'];


player.id = getID(letters);
player.averagePoints = averageP();
player.threeShots = threeShots();

console.log(player.nome, player.cognome, player.age, player.id);

const tenPlayers = [];
gen10Players(tenPlayers, letters);
console.log(tenPlayers);



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
        let x = Math.floor((Math.random() * 8));
        let y = Math.floor((Math.random() * 7))
        let newPlayer = {};
        newPlayer.nome = names[x];
        newPlayer.cognome = surnames[y];
        newPlayer.ID = getID(letters);
        newPlayer.averagePoints = averageP();
        newPlayer.threeShots = threeShots();
        array.push(newPlayer);
    }
}