const request = require('request-promise');
import { President, IphoneModel } from './model';

export const seedPresident = () => {
  request('https://mysafeinfo.com/api/data?list=presidents&format=json')
    .then(res => JSON.parse(res))
    .then((res) => {
      const data = res.map((r) => {
        const obj = {};
        obj.name = r.nm;
        obj.party = r.pp;
        obj.term = r.tm;
        return obj;
      });
      data.forEach((d) => {
        const president = new President(d);
        president.save((err, item) => {
          console.log('saved:', item);
        });
      });
    })
    .catch((err) => {
      console.log('err:', err);
    });
};

export const seedIphoneModel = () => {
  request('http://phonecatalogues.com/api/IphoneModels')
    .then(res => JSON.parse(res))
    .then((res) => {
      console.log('called');
      const data = res.map((r) => {
        const obj = {};
        obj.name = r.name;
        obj.meta_route = r.meta_route;
        obj.total_wallpaper = r.total_wallpaper;
        return obj;
      });
      data.forEach((d) => {
        const iphoneModel = new IphoneModel(d);
        iphoneModel.save((err, item) => {
          console.log('saved:', item);
        });
      });
    })
    .catch((err) => {
      console.log('err:', err);
    });
};