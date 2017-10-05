import PresidentModel from './models/President';
import IphoneModelModel from './models/IphoneModel';

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
