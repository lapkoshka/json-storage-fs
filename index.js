const fs = require('fs');

let STORAGE_CATALOG = './data';
let STORAGE_PATH = STORAGE_CATALOG + '/storage.json';

function updateStoragePath() {
    STORAGE_PATH = STORAGE_CATALOG + '/storage.json'
}

function config(options) {
    STORAGE_CATALOG = options.catalog;
    updateStoragePath();
}

class JsonStorage {
    static _open() {
        if (!fs.existsSync(STORAGE_CATALOG)) {
            fs.mkdirSync(STORAGE_CATALOG);
            fs.writeFileSync(STORAGE_PATH, '{}');
        } else if (!fs.existsSync(STORAGE_PATH)) {
            fs.writeFileSync(STORAGE_PATH, '{}');
        }

        return fs.readFileSync(STORAGE_PATH).toString();
    }

    static _write(data) {
        fs.writeFileSync(STORAGE_PATH, data);
    }

    static get(key) {
        const content = this._open();
        try {
            const json = JSON.parse(content);
            return json[key];
        } catch (e) {
            throw Error(e);
        }
    }

    static set(key, value) {
        const content = this._open();
        try {
            const json = JSON.parse(content);
            json[key] = value;
            this._write(JSON.stringify(json));
        } catch (e) {
            throw Error(e);
        }
    }

    static delete(key) {
        const content = this._open();
        try {
            const json = JSON.parse(content);
            delete json[key];
            this._write(JSON.stringify(json));
        } catch (e) {
            throw Error(e);
        }
    }

    static getAllKeys() {
        const content = this._open();
        try {
            const json = JSON.parse(content);
            return Object.keys(json);
        } catch (e) {
            throw Error(e);
        }
    }

    static clearAll() {
        this.getAllKeys().forEach(key => {
            this.delete(key);
        });
    }
}

module.exports = {
    JsonStorage,
    config
}
