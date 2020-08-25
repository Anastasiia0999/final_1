import { TopListView } from './TopListView.js';

export class TopListController {
    constructor({ subscribe, publish }, authors) {
        this.subscribe = subscribe;
        this.publish = publish;

        this.authors = authors;

        this.view = new TopListView(this.handleClick, this.handleClickPost);

        this.onLoad();

        this.subscribe('POSTS_TOP_SHOW', this.view.showPosts);
        this.subscribe('POSTS_TOP_HIDE', this.view.hidePosts);
    }

    onLoad = () => {
        this.view.renderAuthorList(this.authors);
    }

    handleClick = (authorId, flag) => {
        if (flag) {
            this.publish('POSTS_ASIDE_SHOW', authorId);
        } else {
            this.publish('POSTS_ASIDE_HIDE', authorId);
        }
    }

    handleClickPost = (postId) => {
        this.publish('POST_LOAD', postId);
    }
}
