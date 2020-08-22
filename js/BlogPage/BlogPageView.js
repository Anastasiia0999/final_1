export class BlogPageView {
    constructor() {
        this.posts = document.querySelector('.blog__boxes');
    }

    getNodePost = () => this.posts;
}
