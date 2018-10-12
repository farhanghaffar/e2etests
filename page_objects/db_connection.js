'use strict';
function ConnectDatabase () {
    var mysql = require('../node_modules/mysql');
    this.conn = mysql.createConnection({
        host : 'staging.cxm9isgfqvce.us-west-2.rds.amazonaws.com',
        user : 'staging_ci',
        password : 'aj(662iTCu96',
        database: 'pro_staging_db'
    });
};
module.exports = ConnectDatabase;