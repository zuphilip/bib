'use strict';

module.exports = {
	uuid4: () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		var r = Math.random() * 16 | 0,
		    v = c == 'x' ? r : r & 0x3 | 0x8;

		return v.toString(16);
	}),
	isLikeZoteroItem: item => item && typeof item === 'object' && 'itemType' in item
};