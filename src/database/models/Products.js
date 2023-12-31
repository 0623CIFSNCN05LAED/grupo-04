module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define(
      "Products",
      {
        id: {
          type: DataTypes.UUID,
          primaryKey : true,
          autoIncrement : true
        },  
        name: DataTypes.STRING,
        taste: DataTypes.STRING,
        weight: DataTypes.STRING,
        category: DataTypes.STRING,
        description: DataTypes.STRING,
        age: DataTypes.INTEGER,
        price: DataTypes.NUMBER,
        image: DataTypes.BLOB,
      },
      {
        tableName: "products",
        timestamps: false
      }
    );
    Products.associate = function(models){
      Products.belongsToMany(models.Users, {
        as:"productos",
        through:"orders",
        foreignKey:"id_product",
        otherKey:"id_user",
        timestamps: false,
      })
    }
    return Products;
  };