import axios from "axios";
const instance= axios.create({
    baseURL:"https://www.nepallocation.com.np/api/v1"

})
instance.defaults.headers.common["Authorization"]="Bearer iTkH9Is-oe7RW-am8uM2kjSb"
instance.defaults.headers.common["authorization"]="Bearer iTkH9Is-oe7RW-am8uM2kjSb"

instance.interceptors.request.use(
    async(config)=>{
        config.headers={
            Authorization:"Bearer iTkH9Is-oe7RW-am8uM2kjSb"
        }

        return config
    },
    (
        error
    )=>{
        Promise.reject(error)
    }
)
export default instance;