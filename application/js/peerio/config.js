// ---------------------
// Peerio.config
// ---------------------
//
// Peerio's config object contains client configuration.

Peerio.config = {};

(function() {
	'use strict';

	Peerio.config = {
		version: '1.6.5',
		buildID: 30,
		updateJSON: 'https://peerio.com/update/info.json',
		updateWin: 'https://peerio.com/download/peerio-win.msi',
		updateMac: 'https://peerio.com/download/peerio-mac.dmg',
		updateLin: 'https://linux.peerio.com',
		minPINEntropy: 10,
		fileUploadSizeLimit: 419430400
	}

})()
