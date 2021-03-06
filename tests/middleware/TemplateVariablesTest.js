var assert = require("assert");

var Request = require("../../ServerComponents/util/test/Request");
var Response = require("../../ServerComponents/util/test/Response");
var templateVariables = require("../../ServerComponents/middleware/TemplateVariables");

describe('Template variables middleware', function() {

	/**
	 * System under test.
	 * 
	 * @var {function}
	 */
	var middleware = null;
	
	/**
	 * A simulated request object.
	 * 
	 * @var {Object}
	 */
	var request = null;
	
	/**
	 * A simulated response object.
	 * 
	 * @var {Object}
	 */
	var response = null;

	/**
	 * Is executed before each test runs and sets up the environment.
	 */
	beforeEach(function() {
		request = new Request.class();
		request.app = {};
		request.app.locals = {};
		response = new Response.class();
		middleware = templateVariables.importVariables();
	});

	/**
	 * Removes instances that were created for testing after each test.
	 */
	afterEach(function() {
		middleware = null;
		response = null;
		request = null;
	});
	
	describe('importVariables', function() {
		it('returns function', function() {
			assert.equal(typeof middleware, 'function');
		});
	});
	
	it('registers user function', function() {
		middleware(request, response, function(){});
		assert.equal(typeof request.app.locals.user, 'function');
	});
	it('exposes function that returns null if user is not logged in', function() {
		middleware(request, response, function(){});
		assert.strictEqual(request.app.locals.user(), null); 
	});
	it('exposes function that returns null if session does not exist', function() {
		request.session = undefined;
		middleware(request, response, function(){});
		assert.strictEqual(request.app.locals.user(), null); 
	});
	it('exposes function that returns user data if user is logged in', function() {
		var user = {'name': 'Max Power'};
		request.session.user = user;
		middleware(request, response, function(){});
		assert.strictEqual(request.app.locals.user(), user); 
	});
	it('invokes next() callback', function(done) {
		var next = function() {
			done();
		};
		middleware(request, response, next);
	});

});