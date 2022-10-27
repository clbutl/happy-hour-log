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

User.hasMany(Item, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})

Item.belongsTo(User, {
  foreignKey: 'userId'
})

module.exports = { User, Item, Location };