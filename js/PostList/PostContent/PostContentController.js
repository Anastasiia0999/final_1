import { PostContentView } from './PostContentView.js';
import { PostContentModel } from './PostContentModel.js';

export class PostContentController {
    constructor({ subscribe, publish }) {
        this.subscribe = subscribe;
        this.publish = publish;

        this.view = new PostContentView();
        this.model = new PostContentModel();

        this.subscribe('POST_LOAD', this.onLoad);
    }

    onLoad = (id) => {
        this.model.getPost(id)
            .then((data) => {
                this.view.renderPostContent(data);
            });
    }
}
