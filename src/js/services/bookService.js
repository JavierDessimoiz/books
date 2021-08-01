
import AXIOS from "axios";
import { WEB, KEY } from "./constService";

export const BookService = {
	//Get Best Sellers list by date.
    getListByCategory$(category) {
        return AXIOS.get(`${WEB}/current/${category}.json?&api-key=${KEY}`);
    }
}

