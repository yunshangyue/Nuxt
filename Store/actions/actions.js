import { post } from '~/assets/util/util'

export default {
    Login(store) {
        const accesstoken = localStorage.getItem("accesstoken");
        if (!accesstoken) {
            console.log("no localStorage");
            return;
        }
        post("/accesstoken", {}, { accesstoken }).then(data => {
            store.commit('setUserInfo', { ...data, accesstoken })
            console.log(data)
        }).catch(e => { console.log(e) })

    },
    exitLogin(store) {
        store.commit('resetUserInfo')
    },
}

 // async messageMark_all() {
    //     let accesstoken = localStorage.getItem('accesstoken')
    //     await axios.post(`${baseUrl}/message/mark_all?accesstoken=${accesstoken}`)
    // }