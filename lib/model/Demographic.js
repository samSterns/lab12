const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  major: {
    type: String,
    required: true
  },
  majorId: {
    type: Number,
    required: true
  },
  majorCategory: {
    type: String,
    required: true
  },
  totalStudent: {
    type: Number,
    required: true
  },
  totalMen: {
    type: Number,
    required: true
  },
  totalWomen: {
    type: Number,
    required: true
  },
  shareWomen: {
    type: Number,
    required: true
  }
});

// schema.statics.getRevenueBudgetRatio = function(n = 10, order = 'desc') {
//   return this.aggregate([
//     {
//       '$match': {
//         'revenue': {
//           '$gt': 10000
//         },
//         'budget': {
//           '$gt': 10000
//         }
//       }
//     }, {
//       '$project': {
//         'ratio': {
//           '$divide': [
//             '$revenue', '$budget'
//           ]
//         },
//         'title': true,
//         'revenue': true,
//         'budget': true,
//         'genres': true,
//         'releaseDate': true
//       }
//     }, {
//       '$sort': {
//         'ratio': order === 'asc' ? 1 : -1
//       }
//     }, {
//       '$limit': n
//     }
//   ]);
// };

// [ FOUND PERCENT WOMEN IN ENGINEERING
//   {
//     '$match': {
//       'majorCategory': 'Engineering'
//     }
//   }, {
//     '$group': {
//       '_id': '$majorCategory', 
//       'totalShareWomen': {
//         '$sum': '$shareWomen'
//       }
//     }
//   }
// ];

// [
//     {
//       '$match': {
//         'majorCategory': 'Physical Sciences'
//       }
//     }, {
//       '$group': {
//         '_id': '$majorCategory', 
//         'totalShareWomen': {
//           '$sum': '$shareWomen'
//         }
//       }
//     }
//   ]

//   [
//     {
//       '$match': {
//         'majorCategory': 'Computers & Mathematics'
//       }
//     }, {
//       '$group': {
//         '_id': '$majorCategory', 
//         'totalShareWomen': {
//           '$sum': '$shareWomen'
//         }
//       }
//     }
//]
// schema.statics.getGenreCount = function(n = 10, order = 'desc') {
//   return this.aggregate([
//     {
//       '$unwind': {
//         'path': '$genres'
//       }
//     }, {
//       '$group': {
//         '_id': '$genres',
//         'count': {
//           '$sum': 1
//         }
//       }
//     }, {
//       '$sort': {
//         'count': order === 'asc' ? 1 : -1
//       }
//     }, {
//       '$limit': n
//     }
//   ]);
// };

// schema.statics.getTopGenresByRatio = function() {
//   return this.aggregate([
//     {
//       '$match': {
//         'revenue': {
//           '$gt': 10000
//         },
//         'budget': {
//           '$gt': 10000
//         }
//       }
//     }, {
//       '$group': {
//         '_id': {
//           '$arrayElemAt': [
//             '$genres', 0
//           ]
//         },
//         'totalRevenue': {
//           '$sum': '$revenue'
//         },
//         'totalBudget': {
//           '$sum': '$budget'
//         }
//       }
//     }, {
//       '$addFields': {
//         'ratio': {
//           '$divide': [
//             '$totalRevenue', '$totalBudget'
//           ]
//         }
//       }
//     }, {
//       '$sort': {
//         'ratio': -1
//       }
//     }, {
//       '$limit': 10
//     }
//   ]);
// };

module.exports = mongoose.model('Demographic', schema);
