const db = require('../database');

class Cities {
    static retrieveALL (callback){
        db.query('SELECT nazwa_miasta from miasta', function (err, res) {
            if(err.error)
                return callback(err);
            callback(res);
        });
    }
    static insert (city, callback){
        db.query('INSERT INTO miasta (nazwa_miasta) VALUES ($1)', [city], function (err, res) {
            if(err.error)
                return callback(err);
            callback(res);
        });
    }
}

module.exports = Cities;