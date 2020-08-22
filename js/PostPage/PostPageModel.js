export class PostPageModel {
    constructor(id) {
        this.id = id;
    }

    getPageData = () => fetch(`http://localhost:3000/api/list/${this.id}`)
        .then((posts) => posts.json())
        .catch((error) => console.error(error));
}
