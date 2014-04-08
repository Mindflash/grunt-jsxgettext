"use strict";
module.exports = function (req, res, mainCb) {
	data.usernamePrompt = res.locals.getText('Username');

	// initial load
	if (!_.size(req.body)) {
		if (!data.layoutData.usernameLoginAvailable)
			data.usernamePrompt = res.locals.getText('Email');
		else
			data.usernamePrompt = res.locals.getText('Email or Username');
	}

	// etc
};
