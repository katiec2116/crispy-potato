// Requiring our models
var db = require("../../models");

// Routes
// =============================================================
module.exports = function (app) {

    // POST route for saving a new user
    app.post("/register", function (req, res) {
        db.User.create({
            firstName: req.body.first,
            lastName: req.body.last,
            email: req.body.email,
            password: req.body.password,
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
};
