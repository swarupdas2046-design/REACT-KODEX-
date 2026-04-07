import axios from "axios";
import { AxiosInstance } from "../config/Axiosintence";

export let FetchProduct = async () => {
try {
    let res = await AxiosInstance.get("/products");
    console.log('api hitted');
    return res.data.products;
} 
catch (error) {
    console.log(error);
}
};
