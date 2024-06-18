const db = require('./dbCon');



function registerAccount(name, email, password, contact, callback) {
    const sql = `INSERT INTO accounts (name, email, contact, pw, date_registered)
    VALUES (?, ?, ?, ?, NOW());`;

    db.query(sql, [name,email,contact,password], function(err, res) {
        if (err) {
            console.error(err.message);
            return callback(err, null);
        }
        callback(null, res);
    });
}

function getAccountDetails(email, callback) {
    console.log(email);

    const sql = `SELECT * FROM accounts WHERE email = ?;`;

    db.query(sql, [email], function(err, res) {
        if (err) {
            console.error(err.message);
            return callback(err, null);
        }
        console.log(res);
        callback(null, res);
    });
}




module.exports = {
    registerAccount, getAccountDetails,
}