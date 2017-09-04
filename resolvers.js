const resolveFunctions = {
  RootQuery: {
    president(_, { name }, ctx) {
      const president = new ctx.constructor.President();
      return president.findPresident(name);
    },
    iphoneModel(_, { name }, ctx) {
      const iphoneModel = new ctx.constructor.IphoneModel();
      return iphoneModel.findIphoneModel(name);
    },
  },
};

export default resolveFunctions;
