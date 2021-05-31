const fs = require('fs');
const { JsonStorage, config } = require('./index.js');

function remove() {
    fs.rmdirSync('data', { recursive: true });
}

// clear storage
JsonStorage.clearAll();

// storage should be empty
const keys = JsonStorage.getAllKeys();
if (keys.length > 0) {
    throw Error('Storage should be empty');
}

// set - get sholud be work
JsonStorage.set('catName', 'Barsik');
const catName = JsonStorage.get('catName');
if (catName !== 'Barsik') {
    throw Error('catName value should be "Barsik"');
}

const notExistedKey = JsonStorage.get('any');
if (notExistedKey !== undefined) {
    throw Error('notExistedKey should be undefined');
}

// key should be undefined after deleting
JsonStorage.delete('catName');
if (JsonStorage.get('catName') !== undefined) {
    throw Error('catName should be undefined after deleting');
}

// check catalog options
remove();

JsonStorage.set('catName', 'Pushistik');
if (!fs.existsSync('data/storage.json')) {
    throw Error('default catalog does not exist');
}

remove();
config({ catalog: '/tmp/meow'});

JsonStorage.set('catName', 'Pushistik');
if (!fs.existsSync('/tmp/meow/storage.json')) {
    throw Error('default catalog does not exist');
}


console.log('Completed');
