import axios from 'axios'

const api = axios.create({
    baseURL: "http://3.145.136.64:8080/"
})

export const member = {
    //회원가입
    signup: (id, password, name, year, phoneNumber, emoji) =>
        api.post(`auth/signup`, {
            username: id,
            password: password, 
            name: name,
            phoneNumber: phoneNumber,
            year: year,
            emoji: emoji
        })
        .then((res) => {
            return res.data;
        })
        .catch(e => {
            console.log(e)
        }),

    //아이디 중복 체크
    checkId: (id) => 
        api.post(`auth/checkId`, {
            username: id
        })
        .then((res) => {
            return res.data;
        })
        .catch(e => {
            console.log(e);
        }),

    //로그인
    login: (id, password) => api.post("auth/login", {
        username: id,
        password: password
    })
    .then(res => {
        return res.data;
    })
    .catch(e => {
        console.log(e);
    })
}

export const room = {
    create: (title, subject, info) => api.post("room/create", {
        title: title,
        subject: subject,
        info: info
    })
    .then(res => {return res.data;})
    .catch(e => {console.log(e);})
    ,

    list: () => api.get("room/list"),

    detail: (data) => api.get(`room/detail/${data}`),

    enter: (roomId, name, emoji) => api.post("room/enter", {
        roomId: roomId,
        name: name,
        emoji: emoji
    })
    .then(res => {return res})
    .catch(e => {console.log(e);})
    ,

    exit: (roomId, name) => api.post("room/exit", {
        roomId: roomId,
        name: name
    })
    .then(res => {return res.data})
    .catch(e => {console.log(e);})
}

export const timer = {
    allTime: (name) => api.get("timer/allTime", {
        name: name
    }),

    rank: () => api.get("timer/rank"),

    create: (time) => api.post("timer/createTime", {
        time: time
    }),

}