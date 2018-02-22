'use strict';
module.exports = (sequelize, DataTypes) => {
  var Listing = sequelize.define('Listing', {
    title: DataTypes.STRIG,
    description: DataTypes.STRING
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
    Listing.belongsTo(models.User);
  };
  return Listing;
};