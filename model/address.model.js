module.exports = (sequelize, DataTypes, Model) => {

    class address extends Model {}

    address.init({
        // Model attributes are defined here
        id: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'realtyavgprice' // We need to choose the model name
    });

    return address;
}
