var express = require('express');

const router = express.Router();
const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./db/chinook.db',sqlite3.OPEN_READWRITE,(err) =>{
    if(err){
        return console.error(err.message);
    }
    console.log('connected to chinook Db Sqlite3 database.');
});



router.get('/',function(req,res){
    const sql = `SELECT DISTINCT Name as name FROM playlists ORDER BY name`;
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      });      
});

function dbCLose(){
    db.close((err) =>{
        if(err){
            return console.error(err.message);
        }
            console.log('Close database connection.');
    });    
}

module.exports = router;

// db.serialize(() =>{
//     db.each(`SELECT PlaylistId as id, Name as name FROM playlists`,(err,row) =>{
//         if(err){
//             console.error(err.message);
//         }
//             console.log(row.id + ':' + row.name);
//             //return row.id + ':' + row.name;
//     });
// });






























