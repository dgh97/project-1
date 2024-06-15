const db = require('./dbCon');


// function testDBconnection(ID, callback) {
//     const sql = `SELECT * FROM accounts WHERE account_id = ?;`;
    
//     db.query(sql, [ID], function(err, res) {
//         if (err) {
//             console.error('Error executing the query:', err.message);
//             return callback(err, null);
//         }
        
//         if (res.length === 0) {
//             console.log(`No account found with ID ${ID}.`);
//         } else {
//             console.log('Query successful. Account details:', res);
//         }
        
//         callback(null, res);
//     });
// }

module.exports = {

}