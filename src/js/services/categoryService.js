
import AXIOS from "axios";

export const WEB = 'https://api.nytimes.com/svc/books/v3/lists/names.json';
export const KEY = 'wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j';
//https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=yourkey

export const CategoryService = {
	//returns a list of all the NYT Best Sellers Lists.
    getAll$() {
        return AXIOS.get(`${WEB}?&api-key=${KEY}`);
    }
}

