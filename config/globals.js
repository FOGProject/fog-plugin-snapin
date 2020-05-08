module.exports.globals = {
  menuItems: [
    {
      text: 'Snapin',
      plural: 'Snapins',
      link: '/snapins',
      icon: 'fa-cube',
      subLinks: [
        {
          link: '/snapins/create',
          text: 'Create New Snapin'
        },
        {
          link: '/snapins/export',
          text: 'Export Snapins'
        },
        {
          link: '/snapins/import',
          text: 'Import Snapins',
        }
      ]
    }
  ]
};
