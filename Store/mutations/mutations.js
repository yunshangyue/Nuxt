export default {
    setUserInfo(state, userInfo) {
        let { loginname, avatar_url, id, accesstoken } = userInfo
        state.user.loginname = loginname
        state.user.avatar_url = avatar_url
        state.user.id = id
        state.isLogin = true,
        state.accesstoken = accesstoken
    },
    resetUserInfo(state) {
        state.user.loginname = ''
        state.user.avatar_url = ''
        state.user.id = ''
        state.isLogin = false
        state.accesstoken = ''
    }
}