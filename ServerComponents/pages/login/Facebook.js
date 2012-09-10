
var UserRepository = require('../../UserDataAccess'); 
var everyauth = require('everyauth');
var extAuthConf = require('../../conf/extAuthConf');

everyauth.debug = true;

FacebookLogin = function() {
    this._userRepository = null;
};

/**
 * Receives the User Repository and stores it for later usage.
 * 
 * @param {UserDataAccess.class}
 */
FacebookLogin.prototype.setUserRepository = function(repository){
    this._userRepository = repository;
};

FacebookLogin.prototype.handleRequest = function(request, response){
    //console.log(request.user);
    var self = this;
    var facebookUser = request.session.facebookUser;
    delete request.session.facebookUser;

    if (facebookUser) {
        // redirect from facebook
        var user;
        self._userRepository.byFacebookIdentifier(facebookUser['username'], function(userOrNull){
            if(userOrNull === null){
                user = new User();
                user.setIdentifier(facebookUser['username']);
                user.setFirstname(facebookUser['first_name']);
                user.setLastname(facebookUser['last_name']);
                user.setLoginType("Facebook");
                self._userRepository.insertUser(user);
            } else {
               user = userOrNull;
            }
            request.session.user = user;
            console.log(user.toJSON());
            response.render('login.ejs', { title: 'Log in Succeed.', msg: ('Hi, ' +  user.getFirstname() + '!')} );
        });
    } else {
        // page url entered in browser
    	response.redirect(302, '/auth/facebook');
    }
};

exports.class = FacebookLogin;