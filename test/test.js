var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-at');

describe('next/at', function () {

  it('nx.at --- arguments', function () {

    var arr1 = ['a', 'b', 'c'];
    assert.deepEqual(nx.at(arr1, [0, 2]), ['a', 'c'])
  });

  it('nx.at --- array', function () {
    var arr1 = ['a', 'b', 'c'];
    assert.deepEqual(nx.at(arr1, 0, 2), ['a', 'c'])
  });

  it('nx.at --- array nagative value', function () {
    var arr1 = ['a', 'b', 'c'];
    assert.deepEqual(nx.at(arr1, 0, -1), ['a', 'c'])
  });

});
