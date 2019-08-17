'use strict';
const DataModel = require('../file.js');


class Person extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: {required: true},
      name: { required: true, type: 'string' },
      height: { required: true, type: 'integer' },
      weight: { required: true, type: 'integer' },
    };
  }
}


module.exports = Person;