module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
      "Users",
      {
        id: {
          type: DataTypes.UUID,
          primaryKey : true,
          autoIncrement : true
        },
        username: DataTypes.STRING, 
        email: DataTypes.STRING,
        password: DataTypes.STRING, 
        name: DataTypes.STRING,
        dni: DataTypes.NUMBER,
        home: DataTypes.INTEGER,
        phone_number: DataTypes.NUMBER,
        image: DataTypes.BLOB,
      },
      {
        tableName: "users",
        timestamps: false
      }
    );
    Users.associate=function(models){
      Users.belongsToMany(models.Products, {
        as:"usuarios",
        through:"orders",
        foreignKey:"id_user",
        otherKey:"id_product",
        timestamps: false,
      })
    }
    return Users;
  };