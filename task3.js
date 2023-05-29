var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('wecome.txt', 'welcome node!', function(err) {
   if (err) {
      return console.error(err);
   }
   
   
   
   fs.readFile('wecome.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});