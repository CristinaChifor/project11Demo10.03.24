
const checked = "Hello World";
console.log(checked);

// Exercitiul 1 Creează două array-uri: fructe = ['măr', 'portocală'] și legume = ['morcov', 'broccoli']. Concatenează-le într-un singur array numit alimente;

 let fructe = ['măr','portocală'];
console.log(fructe);
console.log(`Lista mea de fructe este: ${fructe}`);

let legume = ['morcovi','broccoli'];
console.log(legume);

let alimente = fructe.concat(legume);
console.log(alimente); 

// Exercitiul 2 Creează un array de cuvinte: fructe = ['măr', 'portocală', 'banana'] verifica dacă ‘struguri’ se regaseste in array (indexOf) ;

const fructe2 = ['măr', 'portocală', 'banana'];
const indexOfSruguri= fructe2.indexOf('Struguri');
console.log(`Elem Struguri se afla in lista la indexul ${indexOfSruguri}`) !== -1; // de verificat

// Exercitiul 3 Creează un obiect Date și afișează anul curent în consolă;

const date = new Date();
console.log(`year: `, date.getFullYear());

// Exercitiul 4 Creează un obiect Date și adaugă 5 zile la data curentă. Afișează noua dată în consolă;

let currentDate2 = new Date();
currentDate2.setDate(currentDate2.getDate() + 5);
console.log(`currentDate2: `, currentDate2);

// Exercitiul 5 Creează două obiecte Date reprezentând două momente în timp (timestamp). Calculează diferența dintre ele în milisecunde și afișează rezultatul în consolă

let otherDate = new Date(`2022-02-10`);
let differenceInMilliseconds = otherDate - currentDate2;
console.log(`milliseconds: `, differenceInMilliseconds);

// Pag 2 Exercitii
// Exercitiul 1 Creează un obiect cu informații despre tine: persoana = { nume: 'NumeleTau', varsta: 25, oras: 'OrasulTau' }. Afiseaza-l in consola;

let persoana = {
    name: "Cristina Chifor",
    varsta: 25,
    oras: "Cluj-Napoca"
};

console.log(`persoana: `, persoana);

// Exercitiul 2 Modifică vârsta persoanei din obiectul creat anterior. Afișează obiectul modificat în consolă.

persoana.varsta = 30;
console.log(`noua varsta: `, persoana.varsta);

// Exercitiul 3 Creează un array de obiecte, fiecare reprezentând o carte: carti = [{ titlu: 'Carte1', autor: 'Autor1', anPublicare: 2000 }, { titlu: 'Carte2', autor: 'Autor2', anPublicare: 1995 }]. Folosește o metoda a array-ului pentru a adauga încă un obiect reprezentand o carte.

let carti = [
    { titlu: 'Carte1', autor: 'Autor1', anPublicare: 2000 }, 
    { titlu: 'Carte2', autor: 'Autor2', anPublicare: 1995 }
];

console.log(`lista de carti este: `, carti);

const newItem = {titlu: 'Carte3', autor: 'Autor3', anPublicare: 1993 };
carti.push(newItem);
console.log('Lista de carti after push:', carti);