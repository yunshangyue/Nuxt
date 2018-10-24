import axios from 'axios'

const baseUrl = 'https://cnodejs.org/api/v1'

const parseUrl = (url, params) => {
    const str = Object.keys(params).reduce((result, key) => {
        result += `${key}=${params[key]}&`
        return result
    }, '')
    return `${baseUrl}${url}?${str.substr(0, str.length - 1)}`
}

export const get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(parseUrl(url, params))
            .then(res => {
                const data = res.data
                if (data && data.success === true) {
                    resolve(data)
                } else {
                    reject(data)
                }
            }).catch(reject)
    })
}

export const post = (url, params, data) => {
    return new Promise((resolve, reject) => {
        axios.post(parseUrl(url, params), data)
            .then(res => {
                const data = res.data
                if (data && data.success === true) {
                    resolve(data)
                } else {
                    reject(data)
                }
            }).catch(reject)
    })
}
