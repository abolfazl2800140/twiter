import Axios from "./Instance";

const Get = async (url: string) => {
    try {
        const response = await Axios.get(url);
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}

export default Get;