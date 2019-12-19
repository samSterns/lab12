const csv = require('csvtojson');
const Demographic = require('../model/Demographic');

function seedData() {
  return csv()
    .fromFile('./csv/women-stem.csv')
    .then(demographics => {
      return demographics.map(demographic => ({
        major: demographic['Major'],
        majorId: demographic['Major_code'],
        majorCategory: demographic['Major_category'],
        totalStudent: demographic['Total'],
        totalMen: demographic['Men'],
        totalWomen: demographic['Women'],
        shareWomen: demographic['ShareWomen']
      }));
    })

    .then(demographics => Demographic.create(demographics));
}

module.exports = { 
  seedData
};
