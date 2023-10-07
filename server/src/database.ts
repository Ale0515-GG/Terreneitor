import mysql from 'promise-mysql';
import keys from './keys'
const pool= mysql.createPool(keys.database)
export default pool;
// const mysql = require('promise-mysql');
//  import keys from './keys'

//  const pool= mysql.createConnection(keys.database); //nos va a traer conexion

//   pool.getConnection()
//   .then((connection:any) => {
//    pool.releaseConnection (connection);
//  console.log('DB conectada');
// });

//  export default pool;