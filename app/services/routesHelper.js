'use strict';

exports.allowOnly = function(accessLevel, callback) {
    function checkUserRole(req, res) {
        if(!(accessLevel & req.user.role)) {
            res.sendStatus(403);
            return;
        }

        callback(req, res);
    }

    return checkUserRole;
};