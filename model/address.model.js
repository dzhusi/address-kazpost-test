module.exports = (sequelize, DataTypes, Model) => {

    class addresses extends Model {}

    addresses.init({
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'addresses' // We need to choose the model name
    });

    return addresses;
}
