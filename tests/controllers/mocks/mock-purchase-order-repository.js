module.exports = class PurchaseOrderRepositorySpy {
    constructor() {
        this.result = 0;
    }

    async findAll() {
        return this.result;
    }
};
