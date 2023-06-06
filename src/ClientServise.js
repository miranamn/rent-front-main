import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('http://localhost:8081/advertising', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }
}