const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
const csvtojson = require('csvtojson')
const csvCTRL = {};


csvCTRL.bulkInsert = async(req, res) =>{
    const csvFilePath = "glosario.csv";

    csvtojson().fromFile(csvFilePath).then((json) => {console.log(json)})

    let stream = fs.createReadStream("glosario.csv");
    let csvData = [];
    let csvStream = fastcsv
      .parse()
      .on("data", function(data) {
        csvData.push(data);
      })
      .on("end", function() {
        csvData.shift();
    
        const pool = new Pool({
          connectionString: 'postgresql://andres:qwerty1234@204.2.195.89:31400/DB_PALOALTO_V1'
        });
    
        const query =
        `INSERT INTO public."GLOSARIO"(
            nombre, descripcion)
            VALUES ($1, $2)`;
    
        pool.connect((err, client, done) => {
          if (err) throw err;
    
          try {
            csvData.forEach(row => {
              client.query(query, row, (err, res) => {
                if (err) {
                  console.log(err.stack);
                } else {
                  console.log("inserted " + res.rowCount + " row:", row);
                }
              });
            });
          }catch(e){
            console.log(e)
          }
           finally {
            done();
          }
        });
      });
    
    stream.pipe(csvStream);

}


module.exports = csvCTRL;
