export class BlogPageModel {
    constructor() {
        this.id = Math.floor(Math.random() * Math.floor(5000)) + 3;
    }

    getPosts = () => fetch('http://localhost:3000/api/list')
        .then((posts) => posts.json())
        .catch((error) => console.error(error))
}
