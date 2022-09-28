import instance from ".";

export const ProductApi = {
    getAll: () => instance.get('/products')
}
