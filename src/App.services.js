export class AppServices{
    url = 'https://jsonplaceholder.typicode.com/users'



    getUsers(){
        return fetch(this.url).then(value => value.json()).then(v => v)
    }

    getUserById (id) {
        console.log('getUserById');
            return fetch(`${this.url}/${id}`)
                .then(resp => {
                    if(resp.status === 200){ // or resp.ok
                        return resp.json()
                    }else{
                        return Promise.reject('is not ok: ' + resp.status)
                    }
                })


        }


}
