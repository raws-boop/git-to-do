const User = require('./User');
const Activities = require('./Activities');

User.hasMany(Activities, {
  foreignKey: 'user_id',
});

Activities.hasMany(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Activities };