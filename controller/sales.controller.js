const realtysalescountsService  = require('../service/realty-sales-count.service');
const logger = require('../logger/api.logger');

class SalesController {

    async search() {
        logger.info('Controller: search')
        return await realtysalescountsService.search();
    }

}
module.exports = new SalesController();
