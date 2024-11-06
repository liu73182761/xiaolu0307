import axios from "axios";
const  BaseURl = axios.create({
    baseURL:"http://node.dayuan0307.top:300/tasklist",
    timeout:20000
})

BaseURl.interceptors.request.use(config=>{
    return config
})

BaseURl.interceptors.response.use(response=>{
    return response
})

export default BaseURl