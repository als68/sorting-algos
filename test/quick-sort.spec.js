var qSort = require( './../quick-sort.js' );
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('The algorithm should quick sort', function(){

  it('should exist', function(){
    expect(qSort).to.exist;
  });

  it('should be a function', function(){
    expect(qSort).to.be.a('function');
  });

  it('the random array should be sorted correctly', function(){
    expect(qSort([4, 3, 5, 1, 7, 7, 8, 19, 4, 22, 9, 2, 99, 100])).to.deep.equal([1, 2, 3, 4, 5, 7, 8, 9, 19, 22]);
  });

});