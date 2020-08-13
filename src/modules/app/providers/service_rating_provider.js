import BaseProvider from "@/modules/base/providers/base_provider"
import { API_RATINGS_SERVICES } from "@/modules/shared/utils/cons/api"

const ServiceRatingProvider = {

    getList(onSuccess, onFailure) {
        BaseProvider.getList(API_RATINGS_SERVICES, onSuccess, onFailure)
    }

}

export default ServiceRatingProvider