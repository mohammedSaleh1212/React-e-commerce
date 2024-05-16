import axios from "axios";
const axiosInstance = axios.create({
    baseURL:'https://fakestoreapi.com'
})
class APIClient<T> {
    endpoint:string

constructor(endpoint:string){
    this.endpoint = endpoint
}

getAll = () => {
 return axiosInstance
 .get<T[]>(this.endpoint )
 .then(res =>res.data)   
}
getOne = (id:string | number) => {
    return axiosInstance
    .get<T>(this.endpoint + '/' + id )
    .then(res =>res.data)   
   }
post = (data:T) => {
    return axiosInstance
    .post<T>(this.endpoint , data)
    .then(res =>res.data)
}

}
export default APIClient