import instance from ".";

export const DishApi = {
    getAll: () => instance.get('/dish'),
    create: (data) => instance.post('/dish', data)
}
