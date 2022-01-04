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
        api.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
        return res.data;
    })
    .catch(e => {
        console.log(e);
    }),

    me: () => api.get("auth/me"), 
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
    rank: () => api.get("timer/ranking"),

    create: () => api.post("timer/createTime"),

    update: (time) => api.put("timer/updateTime", {
        time: time
    })
<<<<<<< HEAD
=======
    .then(res => {return res.data})
    .catch(e => {console.log(e)}),

    update: (id, time) => api.put("time/updateTime", {
        userId: id,
        time: time
    })
    .then(res => {return res.data})
    .catch(e => {console.log(e);}),
>>>>>>> 6b94f49ae61343546a7013cbc70d2eead46cc7fa
}