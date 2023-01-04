import axios from "axios";

export const updateHolidays = (payload) => {

    return function (dispatch) {
        return axios.get(payload).then((response) => {
          dispatch({
            type: "DATA",
            payload: response.data,
          });
        });
    }   
};