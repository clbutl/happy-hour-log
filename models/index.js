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
  foreignKey: 'userCreated',
  onDelete: 'CASCADE'
})

Item.belongsTo(User, {
  foreignKey: 'userCreated'
})

module.exports = { User, Item, Location };