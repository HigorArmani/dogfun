import ApiProviders from "@/providers/api_provider"
import { API_PLACES } from "@/utils/cons/api"

const PlacesProvider = {

    getList(onSuccess, onFailure) {
        ApiProviders.getList(API_PLACES, onSuccess, onFailure)
    },

    get(id, onSuccess, onFailure) {
        ApiProviders.getList(`${API_PLACES}/${id}`, onSuccess, onFailure)
    }

}

export default PlacesProvider