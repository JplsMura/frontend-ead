import Http from "./Http.init"
export default class BaseService {
    construct() {
        this.instance = new BaseService
    }

    static request(status = { auth: false }) {
        return new Http(status)
    }
}