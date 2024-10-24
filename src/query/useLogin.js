
import axios from "axios";
import {useMutation} from "@tanstack/react-query";

const loginUser = async (credentials) => {
    const response = await axios.post('/api/login', credentials); // Adjust the endpoint as needed
    return response.data;
};

export const useLogin = () => {
    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            // Handle the success response
            console.log(data);
        },
        onError: (error) => {
            // Handle the error response
            console.log(error);
        }
    });

};
