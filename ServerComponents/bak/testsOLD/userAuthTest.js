//var assert = require("assert");
//var db = require("../ServerComponents/GQUserDB");
//
//describe('User Login Authentication: ', function(){
//	
//  describe('Login as GQUser (authGQUser(user, pass, callback()))', function(){
//    it('Should return true when feed in corrrect password', function(done){
//
//    	var tentativeUser = "UserName00";
//    	var tentativePass = "whatever password";
//
//    	//before we test the authentication, we have to insert that user manually
//    	//\question not sure if that follows the correct paradigm
//    	
//    	db.dropCollection();
//    	db.createCollection();
//    	db.addTestingUserEntry("First Name","Last Name","someone@example.com",tentativeUser, tentativePass);
//    	
//    	//now the test starts
//    	//expect authSuccessful == true
//    	db.authGQUser(
//    	        tentativeUser, 
//    	        tentativePass, 
//    	        function(err, authSuccessful, plm){
//                    assert.equal(null,err);
//    	            assert.equal(true, authSuccessful);
//                    done();
//    	        }
//    	 );
//    });
//
//    it('Should return false when feed in wrong password', function(done){
//
//    	var tentativeUser = "UserName00";
//    	var tentativePass = "whatever password";
//    	var wrongPass = "whatever password1";
//
//    	//before we test the authentication, we have to insert that user manually
//    	//\question not sure if that follows the correct paradigm
//    	
//    	db.dropCollection();
//    	db.createCollection();
//    	db.addTestingUserEntry("First Name","Last Name","someone@example.com",tentativeUser, tentativePass);
//    	
//    	//now the test starts
//    	//expect authSuccessful == true
//    	db.authGQUser(
//    	        tentativeUser, 
//    	        wrongPass, 
//    	        function(err, authSuccessful, plm){
//    	            assert.equal(false, authSuccessful);
//                    done();    	
//    	        }
//    	 )	 
//    });
//
//    it('Should return false when feed in non-existing user', function(done){
//
//    	var tentativeUser = "UserName00";
//    	var tentativePass = "whatever password";
//    	var nonExistUser = "nonExistUser";
//
//    	//before we test the authentication, we have to insert that user manually
//    	//\question not sure if that follows the correct paradigm
//    	
//    	db.dropCollection();
//    	db.createCollection();
//    	db.addTestingUserEntry("First Name","Last Name","someone@example.com",tentativeUser, tentativePass);
//    	
//    	//now the test starts
//    	//expect authSuccessful == true
//    	db.authGQUser(
//    			nonExistUser, 
//    			tentativePass, 
//    	        function(err, authSuccessful, plm){
//    	            assert.equal(false, authSuccessful);
//                    done();    	
//    	        }
//    	 )	 
//    });
//
//    
//    
//    it('Should return false when log in as with password length < 6', function(done){
//
//    	var tentativeUser = "UserName00";
//    	var tentativePass = "short";
//    	
//    	//before we test the authentication, we have to insert that user manually
//    	//\question not sure if that follows the correct paradigm
//    	
//    	db.dropCollection();
//    	db.createCollection();
//    	db.addTestingUserEntry("First Name","Last Name","someone@example.com",tentativeUser, tentativePass);
//    	
//    	//now the test starts
//    	//expect authSuccessful == true
//    	db.authGQUser(
//    			tentativeUser, 
//    			tentativePass, 
//    	        function(err, authSuccessful, plm){
//    	            assert.equal(false, authSuccessful);
//                    done();    	
//    	        }
//    	 )	 
//    });
//    
//    it('Should return false when log in as FB User with FB authenticated account like \"_FB_xxxxxxxxx\"', function(done){
//
//    	var tentativeUser = "_FB_1234567989";
//    	var tentativePass = "";
//    	
//    	//before we test the authentication, we have to insert that user manually
//    	//\question not sure if that follows the correct paradigm
//    	
//    	db.dropCollection();
//    	db.createCollection();
//    	db.addTestingUserEntry("First Name","Last Name","someone@example.com",tentativeUser, tentativePass);
//    	
//    	//now the test starts
//    	//expect authSuccessful == true
//    	db.authGQUser(
//    			tentativeUser, 
//    			tentativePass, 
//    	        function(err, authSuccessful, plm){
//    	            assert.equal(false, authSuccessful);
//                    done();    	
//    	        }
//    	 )	 
//    });
//    
//    it('Should return false when log in as GQ User with G+ authenticated account like \"_G+_xxxxxxxxx\"', function(done){
//
//    	var tentativeUser = "_G+_1234567989";
//    	var tentativePass = "";
//    	
//    	//before we test the authentication, we have to insert that user manually
//    	//\question not sure if that follows the correct paradigm
//    	
//    	db.dropCollection();
//    	db.createCollection();
//    	db.addTestingUserEntry("First Name","Last Name","someone@example.com",tentativeUser, tentativePass);
//    	
//    	//now the test starts
//    	//expect authSuccessful == true
//    	db.authGQUser(
//    			tentativeUser, 
//    			tentativePass, 
//    	        function(err, authSuccessful, plm){
//        	            // if(err) throw err
//    	            assert.equal(false, authSuccessful);
//    	            //if(!authSuccessful) throw "Not authenticated!";
//                    done();    	
//    	        }
//    	 )	 
//    });
//    
//  });  
//  describe('Login as GQUser (authGQUser(user, pass, callback()))', function(){
//	  
//  
//  });
//});