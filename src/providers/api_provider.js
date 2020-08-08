import axios from 'axios'

const ApiProviders = {

    getList(url, onSuccess, onFailure) {
        axios.get(url)
            .then(res => {
                if (onSuccess != null) onSuccess(res)
            })
            .catch(err => {
                if (onFailure != null) onFailure(err)
            })
    },

}

export default ApiProviders