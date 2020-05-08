module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    description: {
      type: 'string'
    },
    file: {
      type: 'string',
      required: true
    },
    action: {
      type: 'json',
      required: true
    },
    protected: {
      type: 'boolean',
      defaultsTo: false
    },
    runWith: {
      type: 'string'
    },
    runWithArgs: {
      type: 'string'
    },
    enabled: {
      type: 'boolean',
      defaultsTo: false
    },
    replicate: {
      type: 'boolean',
      defaultsTo: false
    },
    hidecmd: {
      type: 'boolean',
      defaultsTo: false
    },
    timeout: {
      type: 'number',
      isInteger: true
    },
    pack: {
      type: 'boolean',
      defaultsTo: false
    },
    hash: {
      type: 'string'
    },
    size: {
      type: 'number'
    },
    writeLock: {
      type: 'boolean',
      defaultsTo: false
    },
    readers: {
      type: 'number',
      isInteger: true,
      min: 0,
      defaultsTo: 0
    },
    hosts: {
      collection: 'host',
      via: 'snapin'
    },
    groups: {
      collection: 'group',
      via: 'snapin'
    }
  }
}
