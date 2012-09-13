var GameStateDataAccess = require('../ServerComponents/GameStateDataAccess');

var assert = require("assert");


describe('GameStateDataAccess layer', function() {

	/**
	 * System under test.
	 * 
	 * @var {}
	 */
	var repository = null;

	/**
	 * The simulated MongoDB connection.
	 * 
	 * @var {Object}
	 */
	var connection = null;
	
	/**
	 * Creates a simulated find method.
	 * 
	 * If a string is provided then an error will be
	 * simulated. Otherwise the given result will be 
	 * returned.
	 * 
	 * @param {Object}|{String} Result or error message.
	 * @return {function}
	 */
	var createFind = function(result) {
		/**
		 * Simulates the find() function of MongoDB.
		 * 
		 * @param {Object} query JSON object that specifies the query criteria.
		 * @param {function} callback Callback that receives an error and the result.
		 */
		var find = function(query, callback) {
			if ((typeof result) === 'string') {
				// Simulate an error.
				callback(result, createResult(0));
			} else {
				// Simulate a returned collection.
				callback(null, result);
			}
		};
		return find;
	};
	
	/**
	 * Is executed before each test runs and sets up the environment.
	 */
	beforeEach(function() {
		var result = {};
		result.length = 0;
		connection = {
			users: {
				// Simulates an empty result set per default.
				find: createFind(result)
			}
		};
		repository = new GameStateDataAccess.class(connection);
	});

	/**
	 * Removes instances that were created for testing after each test.
	 */
	afterEach(function() {
		repository = null;
		connection = null;
	});

	describe('', function() {
		it('', function() {

		});
	});

});
