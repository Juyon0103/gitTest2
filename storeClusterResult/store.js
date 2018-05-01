const fs = require('fs');
var d3 = require('d3');
var jlouvain = require('./jLouvain')

d3.csv('/data/edgeData.csv', function (err, edge_data) {
    console.log(edge_data);
})

fs.readFile('data/edgeData.csv','utf8' (err, data) => {
    if (err) throw err;
    console.log(data);
  });
/* fs.writeFile('message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); */