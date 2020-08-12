import axios from 'axios'

const BaseProvider = {

    getList(url, onSuccess, onFailure) {
        axios.get(url)
            .then(res => {
                if (onSuccess != null) onSuccess(res)
            })
            .catch(err => {
                if (onFailure != null) onFailure(err)
            })
    },

    post(url, data, onSuccess, onFailure) {
        axios.post(url, data)
            .then(res => {
                if (onSuccess != null) onSuccess(res)
            })
            .catch(err => {
                if (onFailure != null) onFailure(err)
            })
    },

}

export default BaseProvider