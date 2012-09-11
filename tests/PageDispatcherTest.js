var assert = require("assert");

var PageDispatcher = require("../ServerComponents/PageDispatcher");

describe('PageDispatcher', function() {

	/**
	 * System under test.
	 * 
	 * @var {}
	 */
	var dispatcher = null;
	
	/**
	 * The simulated dependency injector.
	 * 
	 * @var {Object}
	 */
	var injector = null;

	/**
	 * Is executed before each test runs and sets up the environment.
	 */
	beforeEach(function() {
		injector = {
			inject: function(object) {
				// Inject nothing, simply simulate injector API.
				return object;
			}
		};
		dispatcher = new PageDispatcher.class('path', injector);
	});

	/**
	 * Removes instances that were created for testing after each test.
	 */
	afterEach(function() {
		dispatcher = null;
		injector = null;
	});

	describe('constructor', function() {
		it('throws exception if page module path is omitted', function() {

		});
		it('throws exception if module path does not exist', function() {

		});
		it('throws exception if injector is omitted', function() {

		});
	});
	
	describe('createHandlerFor', function() {
		it('returns function', function() {
			
		});
		it('loads required module', function() {
			
		});
		it('passes module to dependency injector', function() {
			
		});
		it('passes request and response to handleRequest()', function() {
			
		});
		it('calls handleRequest() if no restrictions are configured', function() {
			
		});
		it('calls handleRequest() if page is restricted to user and user is logged in', function() {
			
		});
		it('calls handleRequest() if page is restricted to guest and no user is logged in', function() {
			
		});
		it('proceeds without calling handleRequest() if page is restricted to user and no user is logged in', function() {
			
		});
		it('proceeds without calling handleRequest() if page is restricted to guest and user is logged in', function() {
			
		});
	});

});