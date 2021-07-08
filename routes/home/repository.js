// Importing node.js file system module
const fs = require('fs')
 class Repository {
  constructor(filename) {
    
   // Creates filename where user activity is going to be stored
   if (!filename) {
     throw new Error(
'This should never happen! You really messed up!')
   }
    this.filename = filename
    try {
     fs.accessSync(this.filename)
   } catch (err) {
      // If file doesn't exist
     // it is created with empty array
     fs.writeFileSync(this.filename, '[]')
   }
 }
  // Logic to add data
 async createNewRecord(attributes) {
    // Read filecontents of the stored-activities.json
   const jsonRecords = await
     fs.promises.readFile(this.filename,{
     encoding : 'utf8'
   })
    // Parsing JSON records in JavaScript
   // object type records
   const objRecord = JSON.parse(jsonRecords)
    // Adding new record
   objRecord.push(attributes)
    // Writing all records back to the file
   await fs.promises.writeFile(
     this.filename,
     JSON.stringify(objRecord, null, 2)  
   )
    return attributes;
 }
 }
 // The 'stored-activities.json' file created at
// with all the searchable data and
// data provided overtime via form entry in
// this file in JSON format.
module.exports = new Repository('stored-activities.json')