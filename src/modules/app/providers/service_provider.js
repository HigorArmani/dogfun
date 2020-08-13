import BaseProvider from "@/modules/base/providers/base_provider"
import { API_SERVICES } from "@/modules/shared/utils/cons/api"

const ServiceProvider = {

    getList(onSuccess, onFailure) {
        BaseProvider.getList(API_SERVICES, onSuccess, onFailure)
    },

    get(id, onSuccess, onFailure) {
        BaseProvider.getList(`${API_SERVICES}/${id}`, onSuccess, onFailure)
    },

    post(data, onSuccess, onFailure) {
        BaseProvider.post(API_SERVICES, data, onSuccess, onFailure)
    }

}

export default ServiceProvider