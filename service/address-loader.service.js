const kazpostApi = require('../api/kazpost.api');
const logger = require('../logger/api.logger');
const UtAddress = require('../utils/UtAddress');
let fs = require('fs');

class AddressLoaderService {
    constructor() {}

    async loadChildren(parentId) {
        return kazpostApi.getChildren(parentId).then(response => response.data.data || []);
    }

    async loadBuildings(id) {
        return kazpostApi.getBuildings(id).then(response => {
            return response.data.data || [];
        }).catch(error => {
            console.info("error", error);
        });
    }

    async loadAll(parentId) {
        let addresses = await this.loadChildren(parentId);

        // Recursion exit
        if(!addresses || !addresses.length) {
            return {};
        }

        for(let address of addresses) {
            if(!address.children) {
                address.children = await this.loadAll(address.id) || [];

                if(UtAddress.hasBuildings(address.type.id)) {
                    address.buildings = await this.loadBuildings(address.id) || [];
                }
            }
        }

        return addresses;
    }

    async saveAllToFile() {
        let addresses = await this.loadAll('G108781')

        console.info("addresses", addresses);

        fs.writeFileSync('./addresses.json', JSON.stringify(addresses), () => {
            logger.info('Addresses saved to addresses.json');
        });
    }

    paginate() {

    }
}

module.exports = new AddressLoaderService();
