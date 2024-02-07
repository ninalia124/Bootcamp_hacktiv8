// A. Buat array berisi 5 buah-buahan
let fruits = ['apel', 'jeruk', 'mangga', 'pisang', 'anggur'];

// B. Tambahkan satu buah
fruits.push('kiwi');

// C. Ubah satu buah
fruits[2] = 'nanas';

// D. Kurangi satu buah terakhir
const lastFruit = fruits.pop();

// E. Tampilkan isi array di setiap step
console.log('Array setelah dibuat:', fruits);
console.log('Array setelah ditambahkan satu buah:', fruits);
console.log('Array setelah diubah satu buah:', fruits);
console.log('Array setelah dikurangi satu buah terakhir:', fruits);
console.log('Buah terakhir yang dihapus:', lastFruit);

