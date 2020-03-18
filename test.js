const fs = require('fs');
const JsonStorage = require('./index.js');

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

console.log('Completed');
