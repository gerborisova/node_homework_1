import csv from 'csvtojson/v2'
import { pipeline } from 'stream'
import fs from 'fs'

const execute = function() {
    csv()
    .fromFile('./csv/input.csv')
    .then((jsonObj) => {
        console.log(jsonObj);
    })
    
    pipeline(
        fs.createReadStream('./csv/input.csv'),
        csv(),
        fs.createWriteStream('output.txt'),
        (err) => {
          if (err) {
            console.error(err)
          }
        }
    );
}

execute()