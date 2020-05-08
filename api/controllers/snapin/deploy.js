module.exports = {
  friendlyName: 'Deploy',
  description: 'Deploy snapin.',
  exits: {
    error: {
      description: 'An error occurred',
      responseType: 'serverError'
    },
    invalid: {
      description: 'Invalid request',
      responseType: 'badRequest'
    },
    success: {
      description: 'Stream started'
    }
  },
  fn: async function (inputs, exits) {
    let req = this.req,
      res = this.res,
      params = req.allParams(),
      id = params.id;
    return {};
  }
};
