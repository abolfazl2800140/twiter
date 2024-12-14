import Axios from "./Instance";


const Post = async (url: string, params: Record<string , any> = {}) => {
    try {
        const response = await Axios.post(url, params);
        return response?.data;
    } catch (error) {
        throw error
    }
}

export default Post;