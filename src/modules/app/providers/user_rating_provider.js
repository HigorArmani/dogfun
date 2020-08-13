import BaseProvider from "@/modules/base/providers/base_provider"
import { API_RATINGS_USERS } from "@/modules/shared/utils/cons/api"

const UserRatingProvider = {

    getList(onSuccess, onFailure) {
        BaseProvider.getList(API_RATINGS_USERS, onSuccess, onFailure)
    }

}

export default UserRatingProvider