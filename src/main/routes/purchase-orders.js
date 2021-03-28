const { adaptRoute } = require('../adapters/express-router-adapter');
const makeFindAllPurchaseOrderController = require('../factories/controllers/purchase-orders/find-all-purchase-orders.js');

module.exports = (router) => {
    router.get('/orders', adaptRoute(makeFindAllPurchaseOrderController()));
};
