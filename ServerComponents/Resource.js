var Game = require('./Game');
var User = require('./User');


Resource = function() {

	/**
	 * @var {String}
	 */
	this._filename = null;

	/**
	 * that's the temporary path that we store the resource one the file is uploaded to the server
	 * @var {String}
	 */
	this._tempPath = null;

	/**
	 * like image, video, audio...(to be defined...)
	 * @var {String}
	 */
	this._mineType = null;

	/**
	 * @var {Game}
	 */
	this._game = null;

	
	/**
	 * @var {User}
	 */
	this._user = null;
	
	/**
	 * @var {Date}
	 */
	this._date = null;
	
};


Resource.prototype.getFilename = function() {
	return this._filename;
};

Resource.prototype.setFilename = function(filename) {
	if(filename !== null) {
		this._filename = filename;
	} else {
		throw new Error("No resource filename passed. Please give provide the filename.");
	}
};


Resource.prototype.getTempPath = function() {
	return this._tempPath;
};

Resource.prototype.setTempPath = function(tempPath) {
	if(tempPath !== null) {
		this._tempPath = tempPath;
	} else {
		throw new Error("No resource temp path passed. Please provide the temp path.");
	}
};


Resource.prototype.getMineType = function() {
	return this._mineType;
};

Resource.prototype.setMineType = function(mineType) {
	if(mineType !== null) {
		this._mineType = mineType;
	} else {
		throw new Error("No resource mine type passed. Please provide the type.");
	}
};

Resource.prototype.getGame = function() {
	return this._game;
};

Resource.prototype.setGame = function(game) {
	if(game !== null && (game instanceof Game.class)) {
		this._game = game;
	} else {
		throw new Error("No game passed. Please provide the game.");
	}
};

Resource.prototype.getUser = function() {
	return this._user;
};

Resource.prototype.setUser = function(user) {
	if(user !== null && (user instanceof User.class)) {
		this._user = user;
	} else {
		throw new Error("No user passed. Please provide the user.");
	}
};


Resource.prototype.getDate = function() {
	return this._date;
};

Resource.prototype.setDate = function(date) {
	if(date !== null && (date instanceof Date )) {
		this._date = date;
	} else {
		throw new Error("No date obj passed. Please provide the date.");
	}
};

exports.class = Resource;