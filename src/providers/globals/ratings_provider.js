import ApiProviders from "@/providers/api_provider"
import { API_RATINGS } from "@/utils/cons/api"

const RatingsProvider = {

    getList(onSuccess, onFailure) {
        ApiProviders.getList(API_RATINGS, onSuccess, onFailure)
    }

}

export default RatingsProvider