'use strict';

const DataModel = require('../categories/categories.js');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
      category_id: { required: true },
      price: { type:Number, required: true },
      weight: { type:Number, required: true} ,
      quanity_in_stock: { type:Number, required: true },
    };
  }
}

module.exports = Products;