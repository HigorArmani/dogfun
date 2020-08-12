import BaseProvider from "@/modules/base/providers/base_provider"
import { API_SERVICES_HINTS } from "@/modules/shared/utils/cons/api"

const ServiceHintProvider = {

    getList(onSuccess, onFailure) {
        BaseProvider.getList(API_SERVICES_HINTS, onSuccess, onFailure)
    }

}

export default ServiceHintProvider