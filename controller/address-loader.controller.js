const addressLoaderService  = require('../service/address-loader.service');
const logger = require('../logger/api.logger');


class AddressLoaderController {

    async loadAddresses(parentId) {
        logger.info('Controller: loadAddresses')
        await addressLoaderService.saveAllToFile();
    }

}
module.exports = new AddressLoaderController();
