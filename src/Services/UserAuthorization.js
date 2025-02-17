
import { apiClient } from "C:/XCartApp/Xcart/src/Services/Api.js"

export default {
    async AuthorizeUser(user, password) {
        return await apiClient.get("Home/AuthorizeUser?username=" + user + "&password=" + password + "");
    },
    async Register(email, password) {
        return await apiClient.get("Home/RegisterUser?email=" + email + "&password=" + password + "");
    }
}
