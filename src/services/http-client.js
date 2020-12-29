export default class HttpClient{
    get(url, params){
        return fetch(url, params)
    }
}


