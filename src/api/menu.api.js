import instance from ".";

export const MenuApi = {
    getAll: () => instance.get('/menu'),
    create: (data) => instance.post('/menu', data)
}
