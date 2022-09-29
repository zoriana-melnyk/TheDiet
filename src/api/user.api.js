import instance from ".";

export const UserApi = {
    me: () => instance.get('/user/me'),
    register: (data) => instance.post('/user/register', data),
    login: (data) => instance.post('/user/login', data),
}
