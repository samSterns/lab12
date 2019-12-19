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

schema.statics.getShareWomenEngineer = function() {
  return this.aggregate([
    {
      '$match': {
        'majorCategory': 'Engineering'
      }
    }, {
      '$group': {
        '_id': '$majorCategory', 
        'totalShareWomen': {
          '$sum': '$shareWomen'
        }
      }
    }
  ]);
};

schema.statics.getShareWomenPhysical = function() {
  return this.aggregate([
    {
      '$match': {
        'majorCategory': 'Physical Sciences'
      }
    }, {
      '$group': {
        '_id': '$majorCategory', 
        'totalShareWomen': {
          '$sum': '$shareWomen'
        }
      }
    }
  ]);
};

schema.statics.getShareWomenComputer = function() {
  return this.aggregate([
    {
      '$match': {
        'majorCategory': 'Computers & Mathematics'
      }
    }, {
      '$group': {
        '_id': '$majorCategory', 
        'totalShareWomen': {
          '$sum': '$shareWomen'
        }
      }
    }
  ]);
};

module.exports = mongoose.model('Demographic', schema);
