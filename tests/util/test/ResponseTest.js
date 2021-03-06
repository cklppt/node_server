var assert = require("assert");

var Response = require("../../../ServerComponents/util/test/Response.js");

describe('Response', function() {

	/**
	 * System under test.
	 * 
	 * @var {Response.class}
	 */
	var response = null;

	/**
	 * Is executed before each test runs and sets up the environment.
	 */
	beforeEach(function() {
		response = new Response.class();
	});

	/**
	 * Removes instances that were created for testing after each test.
	 */
	afterEach(function() {
		response = null;
	});

	describe('constructor', function() {
		it('creates response instance', function() {
			assert.ok(response instanceof Response.class);
		});
	});
	
	describe('template attribute', function() {
		it('is initially null', function() {
			assert.equal(response.template, null);
		});
	});
	
	describe('templateVars attribute', function() {
		it('is initially null', function() {
			assert.equal(response.templateVars, null);
		});
	});
	
	describe('body attribute', function() {
		it('is string', function() {
			assert.equal(typeof response.body, 'string');
		});
		it('is initially empty', function() {
			assert.equal(response.body.length, 0);
		});
	});
	
	describe('redirectUrl attribute', function() {
		it('is initially null', function() {
			assert.equal(response.redirectUrl, null);
		});
	});
	
	describe('redirectStatus attribute', function() {
		it('is initially null', function() {
			assert.equal(response.redirectStatus, null);
		});
	});
	
	describe('headers attribute', function() {
		it('is object', function() {
			assert.equal(typeof response.headers, 'object');
		});
		it('is initially empty', function() {
			assert.equal(Object.keys(response.headers).length, 0);
		});
	});
	
	describe('render', function() {
		it('stores template name in template attribute', function() {
			response.render("name.ejs");
			assert.equal(response.template, "name.ejs");
		});
		it('stores template variables in templateVars attribute', function() {
			response.render("name.ejs", {'title' : 'Hallo'});
			assert.equal(response.templateVars['title'], 'Hallo');
		});
		it('stores empty object in templateVars attribute if variables are omitted', function() {
			response.render("name.ejs");
			assert.deepEqual(response.templateVars, {});
		});
	});
	
	describe('redirect function', function() {
		it('stores status code in redirectStatus attribute', function() {
			response.redirect(302 , "haha.de");
			assert.equal(response.redirectStatus, 302);
		});
		it('stores url in redirectUrl attribute', function() {
			response.redirect(302 , "haha.de");
			assert.equal(response.redirectUrl, "haha.de");
		});
		it('stores correct url if status is omitted', function() {
			response.redirect("haha.de");
			assert.equal(response.redirectUrl, "haha.de");
		});
		it('stores status code 302 if status is omitted', function() {
			response.redirect("haha.de");
			assert.equal(response.redirectStatus, 302);
		});
	});
	
	describe('status code', function() {
		it('is initially 200', function() {
			assert.strictEqual(response.statusCode, 200);
		});
		it('is changed by status()', function() {
			response.status(404);
			assert.strictEqual(response.statusCode, 404);
		});
		it('is changed by status()', function() {
			assert.strictEqual(response.status(200), response);
		});
	});
	
	describe('ended', function() {
		it('is initially false', function() {
			assert.strictEqual(response.ended, false);
		});
		it('is true if end() was called', function() {
			response.end();
			assert.strictEqual(response.ended, true);
		});
		it('is true if a template was rendered', function() {
			response.render('any.ejs');
			assert.strictEqual(response.ended, true);
		});
	});
	
	describe('end()', function() {
		it('does not modify body if chunk is omitted', function() {
			response.end();
			assert.equal(response.body, '');
		});
		it('assigns chunk to body', function() {
			response.end('bye');
			assert.equal(response.body, 'bye');
		});
		it('appends chunk to body if content is already available', function() {
			response.body = 'hello ';
			response.end('bye');
			assert.equal(response.body, 'hello bye');
		});
	});
	
	describe('write()', function() {
		it('assigns chunk to body', function() {
			response.write('lulu');
			assert.equal(response.body, 'lulu');
		});
		it('appends chunk to body if content is already available', function() {
			response.body = 'buhu ';
			response.write('lulu');
			assert.equal(response.body, 'buhu lulu');
		});
	});
	
	describe('setHeader()', function() {
		it('adds property to headers attribute', function() {
			response.setHeader('Content-Type', 'text/plain');
			assert.equal(Object.keys(response.headers).length, 1);
		});
		it('adds name as key to headers attribute', function() {
			response.setHeader('Content-Type', 'text/plain');
			assert.ok('Content-Type' in response.headers);
		});
		it('assigns value to according attribute to headers attribute', function() {
			response.setHeader('Content-Type', 'text/plain');
			assert.equal(response.headers['Content-Type'], 'text/plain');
		});
	});

});