module.exports = class ProductRepositorySpy {
    constructor() {
        this.result = 0;
    }

    async findAll() {
        return this.result;
    }

    async create(params) {
        this.params = params;
        return this.result;
    }
};
