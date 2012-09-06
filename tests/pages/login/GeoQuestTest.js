var assert = require("assert");

var GeoQuestLogin = require("../../../ServerComponents/pages/login/GeoQuest.js");

describe('GeoQuestLogin page', function() {
	
	/**
	 * System under test.
	 * 
	 * @var {GeoQuestLogin.class}
	 */
	var page = null;
	
	/**
	 * A simulated User repository.
	 * 
	 * @var {Object}
	 */
	var userRepository = null;
	
	/**
	 * Is executed before each test runs and sets up the environment.
	 */
	beforeEach(function() {
		userRepository = {
			
		};
		page = new GeoQuestLogin.class();
		page.setUserRepository(userRepository);
	});
	
	/**
	 * Removes instances that were created for testing after each test.
	 */
	afterEach(function() {
		page = null;
		userRepository = null;
	});
	
	describe('constructor', function() {
		it('should create a page instance', function() {
			assert.ok(page instanceof GeoQuestLogin.class);
		});
	});
	
	describe('handleRequest', function() {
		it('renders login form if GET request is handled', function() {
			
		});
		it('does not search for user if GET request is handled', function() {
			
		});
		it('rejects credentials if user is not in the database', function() {
			
		});
		it('rejects credentials if password is not valid', function() {
			
		});
		it('adds user to session if credentials are valid', function() {
			
		});
	});
	
});