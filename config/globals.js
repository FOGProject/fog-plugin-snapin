const array_insert_before = function(text, item, insert) {
  let index = undefined;
  for (var _i = 0, _len = item.length;_i < _len;_i++) {
    if (item[_i].text === text) {
      index = _i;
      break;
    }
  }
  item.splice(index, 0, insert);
  return item;
};
let menuItems = {
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
};
sails.config.globals.menuItems = array_insert_before('User', sails.config.globals.menuItems, menuItems);
