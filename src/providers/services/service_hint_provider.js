import ApiProviders from "../api_provider"
import { API_SERVICES_HINTS } from "../../utils/cons/api"

const ServiceHintProvider = {

    getList(onSuccess, onFailure) {
        ApiProviders.getList(API_SERVICES_HINTS, onSuccess, onFailure)
    }

}

export default ServiceHintProvider