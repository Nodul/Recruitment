'use strict';

module.exports = function (sequelize, DataTypes) {

  /**
   * @memberOf DB
   */
  let User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    passwordHash: DataTypes.TEXT
  });

  User.associate = function (DB) {
    User.hasMany(DB.Post, {foreignKey: 'authorId', as: 'Posts'});
  };
  
  User.createUser = async function(model)
  {
	  return User.create({
		  email : model.email,
		  firstName : model.firstName,
		  lastName : model.lastName,
		  password : model.password
	  });
  };

  User.getUsersList = async function(offset,limit)
  {
	  return User.findAll({offset,limit});
  };
  
  User.findyById = async function (id)
  {
	  return User.findOne({id});
  };
  
  return User;
};
