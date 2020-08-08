import ApiProviders from "./api_provider"
import { API_PLACES } from "../utils/cons/api"

const PlacesProvider = {

    getList(onSuccess, onFailure) {
        ApiProviders.getList(API_PLACES, onSuccess, onFailure)
    }

}

export default PlacesProvider