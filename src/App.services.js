export class AppServices{
    url = 'https://jsonplaceholder.typicode.com/users'
    urlPosts = 'https://jsonplaceholder.typicode.com/posts?userId='


    getUser(){
        return fetch(this.url).then(value => value.json()).then(v => v);
    }

    choosePosts(id){
        return fetch(this.urlPosts + id).then(value => value.json()).then(v => v)
    }

    getEmail(id){
        return fetch(this.url + '/' + id).then(value => value.json()).then(v => v)
    }


}
