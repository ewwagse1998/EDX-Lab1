//CSVtoJSON Convert REad Page Function Lab 1
const fs = require('fs');
const path = require('path');
var utility = require('./lab1Utilities.js');
var beautify = require('js-beautify').js;

var convertCSVtoJSON =  (fPath = path.join(__dirname,  'customer-data.csv'))=>{
    var fileData = fs.readFile(fPath, 'utf8',(err, data) => {
        if (err) throw err;
        console.log('Reading file:', fPath);
        var start = 0;
        var data_JSON;
        var outputPath;
        var keyFieldObject = utility.getFirstLineKeyArray(data);
        var keyFields = keyFieldObject.keyFieldsArray;
        var endLine = keyFieldObject.endPos;
        var fileRows = utility.getFileRowsArray(data,endLine);
        objectArray = utility.getFileObjectArray(fileRows, keyFields);
        data_JSON = JSON.stringify(objectArray);
        data_JSON = beautify(data_JSON, { indent_size: 2, space_in_empty_paren: true });
        outputPath = fPath.replace(".csv",".JSON");
        fs.writeFile(outputPath, data_JSON, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    })
}
convertCSVtoJSON(process.argv[2]);