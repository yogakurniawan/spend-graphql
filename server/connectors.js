const PresidentModel = require('./model').President;
const IphoneModelModel = require('./model').IphoneModel;

class President {
  constructor() {
    this.findPresident = (name) => {
      const person = PresidentModel.findOne({ name }, (error, data) => {
        return data;
      });
      return person;
    };
  }
}

class IphoneModel {
  constructor() {
    this.findIphoneModel = (name) => {
      const model = IphoneModelModel.findOne({ name }, (error, data) => {
        return data;
      });
      return model;
    };
  }
}

export default { President, IphoneModel };
