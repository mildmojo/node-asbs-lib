
// The simplest use of the library. Just include the library, connect to 
//   a game in localhost, then dump all game packets to the console.


var artemisLib = require('../index');
var artemisSocket = artemisLib.Socket;




var mySock = new artemisSocket({
	enum: true,	// Use enumerated types wherever possible
	bool: true	// Use Boolean types wherever possible
});

// console.log(mySock.packetDefsByName.consoles);

mySock.on('packet', function(packetName, packet){ console.log(packetName, packet); });

mySock.connect({ host: 'localhost', port: 2010 });

