const User = require('./User');
const Item = require('./Item');
const Location = require('./Location');

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

module.exports = { User, Item, Location };