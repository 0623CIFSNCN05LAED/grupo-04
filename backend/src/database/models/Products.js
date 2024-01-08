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
        image: DataTypes.STRING/* ,
        brand_id: DataTypes.STRING */
      },
      {
        tableName: "products",
        timestamps: false
      }
    );
    Products.associate = function(models){
      Products.belongsToMany(models.Users, {
        as:"usuarios",
        through:"orders",
        foreignKey:"id_product",
        otherKey:"id_user",
        timestamps: false,
      })/* ,
      Products.belongsTo(models.Brands, {
        as: "brands",
        foreignKey: "brand_id"
      }) */
    }
    return Products;
  };