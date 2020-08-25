import { AsideListView } from './AsideListView.js';

export class AsideListController {
    constructor({ subscribe, publish }, authors) {
        this.subscribe = subscribe;
        this.publish = publish;

        this.authors = authors;

        this.view = new AsideListView(this.handleClick, this.handleClickPost);

        this.onLoad();

        this.subscribe('POSTS_ASIDE_SHOW', this.view.showPosts);
        this.subscribe('POSTS_ASIDE_HIDE', this.view.hidePosts);
    }

    onLoad = () => {
        this.view.renderAuthorList(this.authors);
    }

    handleClick = (authorId, flag) => {
        if (flag) {
            this.publish('POSTS_TOP_SHOW', authorId);
        } else {
            this.publish('POSTS_TOP_HIDE', authorId);
        }
    }

    handleClickPost = (postId) => {
        this.publish('POST_LOAD', postId);
    }
}
