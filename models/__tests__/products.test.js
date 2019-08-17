const Products = require('../products/products.js');

describe('Products Model', () => {

  let products;

  beforeEach(() => {
    products = new Products();
  });

  // How might we repeat this to check on types?
  it('sanitize() returns undefined with missing requirements', () => {
    const schema = products.schema;
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(products.sanitize(testRecord)).toBeUndefined();
  });

});