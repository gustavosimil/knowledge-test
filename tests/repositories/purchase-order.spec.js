const PurchaseOrdersRepository = require('../../src/repositories/purchase-orders');

jest.mock('../../src/main/factories/db', () => {
    return () => ({
        persistMany: () => mockCreateProductParams().length,
        select: () => []
    });
});

const makeSut = () => {
    return new PurchaseOrdersRepository();
};

describe('PurchaseOrdersRepository', () => {
    describe('findAll()', () => {
        it('should return purchase order list', async () => {
            const sut = makeSut();
            const purchaseOrders = await sut.findAll();
            expect(purchaseOrders).toEqual([]);
        });
    });
});
