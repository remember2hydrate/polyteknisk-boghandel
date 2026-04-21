/**
 * data.js — Polyteknisk Boghandel
 * Mock product catalogue used across all pages
 */

const BOOKS = [
  {
    id: 1,
    title: 'Ledelse i praksis, 6. udgave',
    author: 'Lone Hermann, Erik Johansen',
    price: 498,
    category: ['management', 'students'],
    tags: ['New'],
    img: 'https://www.polyteknisk.dk/system/images/product_normal/9788/771/541/9788771541823.jpg',
    isbn: '9788771541823',
    publisher: 'Djøf Forlag',
    pages: 512,
    year: 2023,
    description: 'En grundlæggende og praksisnær introduktion til moderne ledelse. Bogen behandler ledelse på alle niveauer og integrerer klassisk ledelsesteori med aktuelle tendenser.',
  },
  {
    id: 2,
    title: 'Vi kan gøre det bedre – Vejen til en bæredygtig fremtid',
    author: 'Maja Göpel',
    price: 349,
    category: ['leisure', 'popular'],
    tags: ['Bestseller'],
    img: 'https://www.polyteknisk.dk/system/images/product_normal/9788/759/346/9788759346242.jpg',
    isbn: '9788759346242',
    publisher: 'Gyldendal',
    pages: 256,
    year: 2024,
    description: 'Maja Göpel er en af verdens fremmeste bæredygtighedseksperter. Her viser hun, at vores nuværende veje ikke er de eneste mulige, og at vi er nødt til at sætte os nye mål.',
  },
  {
    id: 3,
    title: 'Grundlæggende bygningsvidenskab – Indeklima',
    author: 'Steffen Petersen m.fl.',
    price: 399,
    category: ['building', 'engineering'],
    tags: ['SBI'],
    img: 'https://www.polyteknisk.dk/system/images/product_normal/9788/750/068/9788750068815.jpg',
    isbn: '9788750068815',
    publisher: 'SBI / Aalborg Universitetsforlag',
    pages: 340,
    year: 2023,
    description: 'Indeklima, termisk komfort, fugtforhold og luftkvalitet. Komplet introduktion til bygningsvidenskab for ingeniørstuderende og praktikere.',
  },
  {
    id: 4,
    title: 'Skriveprocessen – En overlevelsesguide',
    author: 'Hans Lind',
    price: 239,
    category: ['students', 'dtu'],
    tags: ['Study'],
    img: 'https://www.polyteknisk.dk/system/images/product_normal/9788/759/344/9788759344743.jpg',
    isbn: '9788759344743',
    publisher: 'Polyteknisk Forlag',
    pages: 192,
    year: 2024,
    description: 'En praktisk guide til at skrive akademiske opgaver, rapporter og speciale. Fra idé til færdigt produkt.',
  },
  {
    id: 5,
    title: 'De usynlige pionerer',
    author: 'Holger Dahl',
    price: 349.95,
    category: ['engineering', 'leisure'],
    tags: [],
    img: 'https://www.polyteknisk.dk/system/images/product_normal/9788/792/596/9788792596659.jpg',
    isbn: '9788792596659',
    publisher: 'Ingeniørens Forlag',
    pages: 288,
    year: 2024,
    description: '12 arkitektoniske mesterværker og ingeniørerne bag dem. En fascinerende rejse bag facaden på verdens mest berømte bygningsværker.',
  },
  {
    id: 6,
    title: 'Besat af bakterier',
    author: 'Fatima AlZahra\'a Alatrakchi',
    price: 300,
    category: ['science', 'popular'],
    tags: ['New'],
    img: 'https://www.polyteknisk.dk/system/images/product_normal/9788/740/084/9788740084962.jpg',
    isbn: '9788740084962',
    publisher: 'Gyldendal',
    pages: 224,
    year: 2024,
    description: 'De mindste organismers svar på livets store spørgsmål. En fascinerende fortælling om bakterier og deres afgørende rolle for alt levende.',
  },
  {
    id: 7,
    title: 'Rejsen til det mindste – atomfysik',
    author: 'Holger Bech Nielsen',
    price: 249.95,
    category: ['science', 'popular'],
    tags: ['Bestseller'],
    img: 'https://www.polyteknisk.dk/system/images/product_normal/9788/773/393/9788773393826.jpg',
    isbn: '9788773393826',
    publisher: 'Gyldendal',
    pages: 208,
    year: 2024,
    description: 'En fortælling om atomfysik for alle aldre. Fra kvarker til kvantefysik – fortalt med passion og humor.',
  },
  {
    id: 8,
    title: 'Din guide til at studere smartere med AI',
    author: 'Per Bergfors',
    price: 298,
    category: ['students', 'it'],
    tags: ['Hot', 'New'],
    img: 'https://www.polyteknisk.dk/system/images/product_normal/9788/797/156/9788797156216.jpg',
    isbn: '9788797156216',
    publisher: 'Akademisk Forlag',
    pages: 168,
    year: 2025,
    description: 'Effektivt studiearbejde og trivsel med kunstig intelligens. En praktisk guide til universitetsstuderende om, hvordan AI kan støtte dit studieliv.',
  },
  {
    id: 9,
    title: 'SBI 281 – Skimmelsvampe i bygninger',
    author: 'Erik Brandt, Tom Bunch-Nielsen',
    price: 500,
    category: ['building'],
    tags: ['SBI'],
    img: 'https://www.polyteknisk.dk/system/images/product_normal/9788/750/067/9788750067122.jpg',
    isbn: '9788750067122',
    publisher: 'SBI',
    pages: 180,
    year: 2023,
    description: 'Renovering og forebyggelse af skimmelsvampe i bygninger. Standardreference for alle, der arbejder med indeklima og bygningsrenovering.',
  },
  {
    id: 10,
    title: 'SBI 280 – Varmeisoleringsmaterialer',
    author: 'SBI',
    price: 599,
    category: ['building'],
    tags: ['SBI'],
    img: 'https://www.polyteknisk.dk/system/images/product_normal/9788/750/066/9788750066644.jpg',
    isbn: '9788750066644',
    publisher: 'SBI',
    pages: 200,
    year: 2023,
    description: 'Varmeisoleringsmaterialer og deres anvendelse. Komplet reference for ingeniører og håndværkere inden for bygningsisolering.',
  },
  {
    id: 11,
    title: 'Algoritmer og datastrukturer',
    author: 'Thomas H. Cormen m.fl.',
    price: 645,
    category: ['it', 'dtu'],
    tags: ['Classic'],
    img: 'https://via.placeholder.com/160x210/1a2744/ffffff?text=Algoritmer',
    isbn: '9780262046305',
    publisher: 'MIT Press',
    pages: 1312,
    year: 2022,
    description: 'Den klassiske og altomfattende reference til algoritmer og datastrukturer. Pensumbog på DTU og mange andre tekniske uddannelser.',
  },
  {
    id: 12,
    title: 'Hvordan forsvarer vi os mod hybridkrig?',
    author: 'Flemming Splidsboel Hansen',
    price: 49.95,
    category: ['leisure', 'popular'],
    tags: ['New'],
    img: 'https://www.polyteknisk.dk/system/images/product_normal/9788/785/381/9788785381125.jpg',
    isbn: '9788785381125',
    publisher: 'Informations Forlag',
    pages: 128,
    year: 2024,
    description: 'En klar og velskrevet introduktion til hybridkrigførelse og, hvad vi kan gøre for at forsvare os mod det.',
  },
];

window.BOOKS = BOOKS;

// Helper: format price Danish style
function fmtPrice(price) {
  return price.toFixed(2).replace('.', ',') + ' kr.';
}
window.fmtPrice = fmtPrice;

// Helper: build a book card HTML
function buildBookCard(book, extraClass = '') {
  const tags = book.tags.map(t => `<span class="badge me-1" style="background:var(--poly-red);font-size:10px;">${t}</span>`).join('');
  return `
    <div class="book-card ${extraClass}" data-id="${book.id}">
      <div class="book-card-img">
        <img src="${book.img}" alt="${book.title}" loading="lazy"
             onerror="this.src='https://via.placeholder.com/160x210/f2ede8/1c1c1c?text=Book'">
      </div>
      <div class="book-card-body">
        <div class="mb-1">${tags}</div>
        <div class="book-card-title">${book.title}</div>
        <div class="book-card-author">${book.author}</div>
        <div class="book-card-price">${fmtPrice(book.price)}</div>
        <button class="btn-add-cart" onclick="addToCart(BOOKS.find(b=>b.id===${book.id}))">
          🛒 <span data-i18n="product.addcart">Læg i kurv</span>
        </button>
      </div>
    </div>`;
}
window.buildBookCard = buildBookCard;
