// Lab1 Utilities 
module.exports.getFirstLineKeyArray = (fileString)=>{
    var start = 0;
    var endLine = fileString.indexOf('\n');
    var line1 = fileString.slice(start,endLine); 
    line1 = line1.replace(/\r/g, "");
    var line1Array= line1.split(',');
    return {keyFieldsArray: line1Array,
            endPos: endLine};
}

module.exports.getFileRowsArray = (fileString, endLine)=>{
    var count = 0;
    var fileRows = [];
        while (endLine != -1){
            start = endLine +1;
            endLine = fileString.indexOf('\n', start);
            row = fileString.slice(start,endLine); 
            row = row.replace(/\r/g, "");
            if (row != '') {
                fileRows[count]=row.split(',');
            }
            count++;
        }
    return fileRows;
}

module.exports.getFileObjectArray = (fileRows, keyFields)=>{
    var objectArray = [];
    fileRows.forEach(r => {
        let obj = {};
        r.forEach((r, i) => {
            obj[keyFields[i]] = r;
            });
            objectArray.push(obj);
        });
    return objectArray;
}