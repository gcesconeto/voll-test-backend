/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
    admLogin: { email: 'admin@email.com', password: '123456' },
    usrLogin: { email: 'user@email.com', password: '123456' },
    admEmail: { email: 'admin@email.com' },
    usrEmail: { email: 'user@email.com' },
    wrongEmail: { email: 'idontexist@email.com' },
    newUser: {
        name: 'Test Consumer Name',
        email: 'consumer@email.com',
        password: 'imAPassword',
    },
    newSale: {
        totalPrice: 651,
        products: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 4 },
        ],
    },
    newProduct: {
        name: 'beer',
	    price: 200,
	    description: 'very overpriced beer',
    },
    updateBalance: {
        id: 1,
        adjustment: 500,
    }
};