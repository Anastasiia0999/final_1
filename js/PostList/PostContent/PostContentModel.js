export class PostContentModel {
    constructor() {
        this.url = 'http://localhost:3000/api/list/';
    }

    getPost = (id) => fetch(`http://localhost:3000/api/list/${id}`)
        .then((posts) => posts.json())
        .catch((error) => console.error(error));
}
