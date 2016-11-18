/**
 * Created by yyl15 on 2016/9/6.
 */
/**
 *
 */
var _mysql ={};
var conn =_mysql.conn = $mysql.createConnection({
    host:"115.159.194.215",
    user:"user1",
    password:"Abc!@#123",
    database:"mydb"
});
conn.connect();
module.exports = _mysql;

