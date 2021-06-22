import * as axios from "axios";
import {setCourse} from "../redux/course-reducers";


export const courseAPI = () => {
        return  async (dispatch)  => {
            const response = await axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
            dispatch(setCourse(response.data))
        }

}



