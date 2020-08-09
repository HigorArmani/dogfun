import ApiProviders from "../api_provider"
import { API_PLACES_HINTS } from "../../utils/cons/api"

const PlacesHintsProvider = {

    getList(onSuccess, onFailure) {
        ApiProviders.getList(API_PLACES_HINTS, onSuccess, onFailure)
    }

}

export default PlacesHintsProvider