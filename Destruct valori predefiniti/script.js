let book = {
    genre: 'adventure',
    title: 'Le tigri di Mompracem',
};

let {author = 'Emilio Salgari', year = 1900, protagonist = 'Sandokan'} = book;

console.log(`Autore: ${author}`, `Anno di stampa: ${year}`, `Protagonista del romanzo: ${protagonist}`)