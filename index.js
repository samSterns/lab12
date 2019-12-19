const fs = require('fs').promises;
const mongoose = require('mongoose');
const csv = require('csvtojson');

mongoose.connect('mongodb://localhost:27017/techDiversity', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const schema = new mongoose.Schema({
  major: String,
  majorId: Number,
  majorCategory: String,
  totalStudent: Number,
  totalMen: Number,
  totalWomen: Number,
  shareWomen: Number,
});

const Demographic = mongoose.model('Demographic', schema);

fs.readdir('./csv')
  .then(files => {
    return Promise.all(
      files.map(file => {
        return csv({
          delimeter: ','
        })
          .fromFile(`./csv/${file}`);
      })
    );
  })
  .then(csvToJsonFiles => {
    const demographic = csvToJsonFiles[3]
      .map(demographic => ({ 
        major: demographic['Major'],
        majorId: demographic['Major_code'],
        majorCategory: demographic['Major_category'],
        totalStudent: demographic['Total'],
        totalMen: demographic['Men'],
        totalWomen: demographic['Women'],
        shareWomen: demographic['ShareWomen'],
      }));

    return Demographic.create(demographic);

  })
  .then(() => console.log('done'));
