'use strict';

const uuid = require('uuid/v4');
const fs = require('fs');


class Model {

  constructor() {
    this.database = [];
    fs.readFile('../data/person.db', (err,data) => {
      let buffer = data.toString();
      // breaks here?
      if (err){throw err;}
    });
  }
  
  saveFs() {
    fs.writeFile('../person/person.db', this.database, function (err) {
      if (err){throw err;}
    });
  }
  

  get(id) {
    let response = id ? this.database.filter((record) => record.id === id) : this.database;
    return Promise.resolve(response);
  }

  create(entry) {
    entry.id = uuid();
    let record = this.sanitize(entry);
    if (record.id) { this.database.push(record); }
    return Promise.resolve(record);
  }

  update(id, entry) {
    let record = this.sanitize(entry);
    if (record.id) { this.database = this.database.map((item) => (item.id === id) ? record : item); }
    return Promise.resolve(record);
  }

  delete(id) {
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

  sanitize(entry) {

    let valid = true;
    let record = entry;

    Object.keys(this.schema).forEach(field => {
      if (this.schema[field].required && !record[field]) {
        valid = false;
      }
      if(record[field] && this.schema[field].type && !(typeof record[field] === this.schema[field].type)) {
        valid = false;
      }
    });

    return valid ? record : undefined;
  }

}

module.exports = Model;