import { AuthorPost } from './AuthorPost.js';

export class Author {
    constructor(name) {
        this.name = name;
        this.posts = [];
        this.id = Math.floor(Math.random() * Math.floor(5000)) + 3;
    }

    addPost = (id, title) => {
        const post = new AuthorPost(id, title);
        this.posts.push(post);
    }

    getPosts = () => this.posts;
}
