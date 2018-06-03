export class OAuthModel {

    private config: any;
  
    constructor() {
        this.config = {
            clients: [{
                clientId: 'application',
                clientSecret: 'secret'
            }],
            confidentialClients: [{
                clientId: 'confidentialApplication',
                clientSecret: 'topSecret'
            }],
            tokens: [],
            users: [{
                id: '123',
                username: 'jdodsoncollins@gmail.com',
                password: 'password'
            }]
        };
    }
    
    getAccessToken(bearerToken, callback) {
    
        let tokens = this.config.tokens.filter(function(token) {
    
            return token.accessToken === bearerToken;
        });
    
        return callback(false, tokens[0]);
    };
    
    getClient(clientId, clientSecret, callback) {
    
        let clients = this.config.clients.filter(function(client) {
    
            return client.clientId === clientId && client.clientSecret === clientSecret;
        });
    
        let confidentialClients = this.config.confidentialClients.filter(function(client) {
    
            return client.clientId === clientId && client.clientSecret === clientSecret;
        });
    
        callback(false, clients[0] || confidentialClients[0]);
    };
    
   grantTypeAllowed(clientId, grantType, callback) {
    
        let clientsSource,
            clients = [];
    
        if (grantType === 'password') {
            clientsSource = this.config.clients;
        } else if (grantType === 'client_credentials') {
            clientsSource = this.config.confidentialClients;
        }
    
        if (!!clientsSource) {
            clients = clientsSource.filter(function(client) {
    
                return client.clientId === clientId;
            });
        }
    
        callback(false, clients.length);
    };
    
    saveAccessToken(accessToken, clientId, expires, user, callback) {
    
        this.config.tokens.push({
            accessToken: accessToken,
            expires: expires,
            clientId: clientId,
            user: user
        });
    
        callback(false);
    };
    
    /*
     * Method used only by password grant type.
     */
    
    getUser(username, password, callback) {
    
        let users = this.config.users.filter(function(user) {
    
            return user.username === username && user.password === password;
        });
    
        callback(false, users[0]);
    };
    
    /*
     * Method used only by client_credentials grant type.
     */
    
    getUserFromClient(clientId, clientSecret, callback) {
    
        let clients = this.config.confidentialClients.filter(function(client) {
    
            return client.clientId === clientId && client.clientSecret === clientSecret;
        });
    
        let user;
    
        if (clients.length) {
            user = {
                username: clientId
            };
        }
    
        callback(false, user);
    };

}
  

// /**
//  * Configuration.
//  */

// let config = {
// 	clients: [{
// 		clientId: 'application',
// 		clientSecret: 'secret'
// 	}],
// 	confidentialClients: [{
// 		clientId: 'confidentialApplication',
// 		clientSecret: 'topSecret'
// 	}],
// 	tokens: [],
// 	users: [{
// 		id: '123',
// 		username: 'pedroetb',
// 		password: 'password'
// 	}]
// };

// /**
//  * Dump the memory storage content (for debug).
//  */

// let dump = function() {

// 	console.log('clients', config.clients);
// 	console.log('confidentialClients', config.confidentialClients);
// 	console.log('tokens', config.tokens);
// 	console.log('users', config.users);
// };

// /*
//  * Methods used by all grant types.
//  */

// let getAccessToken = function(bearerToken, callback) {

// 	let tokens = config.tokens.filter(function(token) {

// 		return token.accessToken === bearerToken;
// 	});

// 	return callback(false, tokens[0]);
// };

// let getClient = function(clientId, clientSecret, callback) {

// 	let clients = config.clients.filter(function(client) {

// 		return client.clientId === clientId && client.clientSecret === clientSecret;
// 	});

// 	let confidentialClients = config.confidentialClients.filter(function(client) {

// 		return client.clientId === clientId && client.clientSecret === clientSecret;
// 	});

// 	callback(false, clients[0] || confidentialClients[0]);
// };

// let grantTypeAllowed = function(clientId, grantType, callback) {

// 	let clientsSource,
// 		clients = [];

// 	if (grantType === 'password') {
// 		clientsSource = config.clients;
// 	} else if (grantType === 'client_credentials') {
// 		clientsSource = config.confidentialClients;
// 	}

// 	if (!!clientsSource) {
// 		clients = clientsSource.filter(function(client) {

// 			return client.clientId === clientId;
// 		});
// 	}

// 	callback(false, clients.length);
// };

// let saveAccessToken = function(accessToken, clientId, expires, user, callback) {

// 	config.tokens.push({
// 		accessToken: accessToken,
// 		expires: expires,
// 		clientId: clientId,
// 		user: user
// 	});

// 	callback(false);
// };

// /*
//  * Method used only by password grant type.
//  */

// let getUser = function(username, password, callback) {

// 	let users = config.users.filter(function(user) {

// 		return user.username === username && user.password === password;
// 	});

// 	callback(false, users[0]);
// };

// /*
//  * Method used only by client_credentials grant type.
//  */

// let getUserFromClient = function(clientId, clientSecret, callback) {

// 	let clients = config.confidentialClients.filter(function(client) {

// 		return client.clientId === clientId && client.clientSecret === clientSecret;
// 	});

// 	let user;

// 	if (clients.length) {
// 		user = {
// 			username: clientId
// 		};
// 	}

// 	callback(false, user);
// };

// /**
//  * Export model definition object.
//  */

// module.exports = {
// 	getAccessToken: getAccessToken,
// 	getClient: getClient,
// 	grantTypeAllowed: grantTypeAllowed,
// 	saveAccessToken: saveAccessToken,
// 	getUser: getUser,
// 	getUserFromClient: getUserFromClient
// };