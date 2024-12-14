import Axios from "./Instance";

const Delete = async (url: string) => {
    try {
        const response = await Axios.delete(url);
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}

export default Delete;