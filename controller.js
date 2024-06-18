const db = require('./dbQueries');
const bcrypt = require('bcrypt');


function registerAccount(name, email, password, contact, callback) {
    bcrypt.hash(password, 10, function(err, hashedPassword) {
        if (err) {
            console.error('Error hashing password:', err.message);
            return callback(err, null);
        }

        db.registerAccount(name, email, hashedPassword, contact, function(err, res) {
            if (err) {
                console.error('Error registering account:', err.message);
                return callback(err, null);
            }
            callback(null, res);
        });
    });
}

function verifyLogin(email, password, callback) {
    console.log(email, password);
    db.getAccountDetails(email, function(err, res) {
        if (err) {
            console.error('Error getting account details:', err.message);
            return callback(err, null);
        } else if (res.length === 0) {
            console.log('Account doesn\'t exist');
            return callback(null, null);
        } else {
            const user = res[0];
            bcrypt.compare(password, user.pw, function(err, isMatch) {
                if (err) {
                    console.error('Error comparing passwords:', err.message);
                    return callback(err, null);
                }
                if (isMatch) {
                    console.log('Login successful');
                    callback(null, user);
                } else {
                    console.log('Password does not match');
                    callback(null, null);
                }
            });
        }
    });
}


module.exports = {
    registerAccount,verifyLogin,
}