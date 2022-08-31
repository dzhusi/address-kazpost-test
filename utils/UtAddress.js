let ADDRESS_TYPES_WITH_BUILDINGS = ['G11', 'G13', 'G12', 'G15', 'G17', 'G19', 'G18', 'G20', 'G24', 'G27', 'G29', 'G39']

const UtAddress = {
    hasBuildings(addressType) {
        return ADDRESS_TYPES_WITH_BUILDINGS.indexOf(addressType) >= 0;
    }
}

module.exports = UtAddress;
