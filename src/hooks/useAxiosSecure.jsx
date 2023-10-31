import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.response.use(res => {
        return res
    }, error => {
        console.log("error traced in the inter sector", error.response);

        if (error.response.status===403 || error.response.status===401) {
            console.log("logged out the user");
            logOut()
            .then(()=> {
               return navigate('/')

            })
            .catch(err => {
                console.log(err);
            })
        }
    })
    return axiosSecure
};

export default useAxiosSecure;