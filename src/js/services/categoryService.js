
import AXIOS from "axios";
import { WEB, KEY } from "./constService";

export const CategoryService = {
	//returns a list of all the NYT Best Sellers Lists.
    getAll$() {
        return AXIOS.get(`${WEB}names.json?&api-key=${KEY}`);
    }
}

