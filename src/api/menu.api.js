import instance from ".";

export const MenuApi = {
    getAll: () => instance.get('/menu'),
    create: () => instance.post('/menu')
}
