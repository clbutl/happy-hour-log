const User = require('./User');
const Item = require('./Item');
const Location = require('./Location');

Location.hasMany(Item, {
  foreignKey: 'locationId',
  onDelete: 'CASCADE'
});

Item.belongsTo(Location, {
  foreignKey: 'locationId'
});

module.exports = { User, Item, Location };