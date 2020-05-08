module.exports = {
  friendlyName: 'Snapins',
  description: 'Snapins pages.',
  inputs: {
  },
  exits: {
    error: {
      responseType: 'serverError'
    },
    success: {
      viewTemplatePath: 'pages/list',
      description: 'Successful'
    }
  },
  fn: async function (inputs) {
    let req = this.req,
      res = this.res;
    return {
      header: 'Snapin List',
      theads: [
        'Name',
        'Description'
      ],
      model: 'snapin',
      title: 'Snapin List'
    };
  }
};
