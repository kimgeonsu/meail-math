import axios from 'axios'

const api = axios.create({
    baseURL: "localhost:8080/"
})

export const member = {
    //회원가입
    register: (id, password, name, year, phoneNumber) =>
        api.post(`member`, {
            id: id,
            password: password, 
            name: name,
            year: year,
            phoneNumber: phoneNumber
        })
        .then((res) => {
            console.log(res);
        })
        .catch(e => {
            console.log(e)
        }),

    //아이디 중복 체크
    checkId: (id) => api.get(`member`, {
        params: {
            id: id
        }
    })
    .then((res) => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    }),

    //로그인
    login: (id, password) => api.get("login", {
        id: id,
        password: password
    })
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })
}