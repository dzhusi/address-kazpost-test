const realtyAvgPriceService  = require('../service/realty-avg-price.service');
const logger = require('../logger/api.logger');

class PriceController {

    async search() {
        logger.info('Controller: search')
        return await realtyAvgPriceService.search();
    }

}
module.exports = new PriceController();
