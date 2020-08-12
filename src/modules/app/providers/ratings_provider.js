import BaseProvider from "@/modules/base/providers/base_provider"
import { API_RATINGS } from "@/modules/shared/utils/cons/api"

const RatingsProvider = {

    getList(onSuccess, onFailure) {
        BaseProvider.getList(API_RATINGS, onSuccess, onFailure)
    }

}

export default RatingsProvider