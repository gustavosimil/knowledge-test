const makeDbInstance = require('../main/factories/db');

const db = makeDbInstance();

module.exports = class PurchaseOrdersRepository {
    async findAll() {
        const sql = `
            SELECT
                purchaseOrder.id AS purchaseOrderId,
                product.description AS productDescription,
                purchaseOrder.price AS productPrice,
                supplier.name AS supplierName,
                supplier.country AS supplierCountry                
            FROM
                purchase_orders AS purchaseOrder     
            INNER JOIN
                products AS product ON purchaseOrder.product_id = product.id  
            INNER JOIN
                suppliers AS supplier ON product.supplier_id = supplier.id     
        `;
        const purchaseOrder = await db.select(sql);

        return purchaseOrder;
    }
};
