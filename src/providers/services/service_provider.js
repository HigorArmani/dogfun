import ApiProviders from "@/providers/api_provider"
import { API_SERVICES } from "@/utils/cons/api"

const PlacesProvider = {

    getList(onSuccess, onFailure) {
        ApiProviders.getList(API_SERVICES, onSuccess, onFailure)
    },

    get(id, onSuccess, onFailure) {
        ApiProviders.getList(`${API_SERVICES}/${id}`, onSuccess, onFailure)
    }

}

export default PlacesProvider