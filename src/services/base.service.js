import Http from "./http.init"
export default class BaseService {
    construct() {
        this.instance = new BaseService
    }

    static request(status = { auth: false }) {
        return new Http(status)
    }
}