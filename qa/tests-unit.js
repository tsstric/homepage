var random = require('../random.js');
var expect = require('chai').expect;

suite('Random tests', function(){

	test('randomInt(1, 100) should return a number', function(){
		expect(typeof random.randomInt(1,100) === 'integer');
	});
});
