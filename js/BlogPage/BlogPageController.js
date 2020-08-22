import { BlogPageModel } from './BlogPageModel.js';
import { BlogPageView } from './BlogPageView.js';
import { Post, VideoPost, AudioPost } from './NewPost.js';

export class BlogPageController {
    constructor() {
        this.model = new BlogPageModel();
        this.view = new BlogPageView();
        console.log('blog page');
        this.handlePageRender();
    }

    createPost = (obj) => {
        if (obj.urlimage === '') {
            if (obj.type === '1') {
                const audioPost = new AudioPost(obj);
                audioPost.renderTextPost(this.view.getNodePost());
            }
            if (obj.type === '2') {
                const textPost = new Post(obj);
                textPost.renderTextPost(this.view.getNodePost());
            }
        } else {
            if (obj.type === '0') {
                const videoPost = new VideoPost(obj);
                videoPost.renderImagePost(this.view.getNodePost());
            }
            if (obj.type === '1') {
                const audioPost = new AudioPost(obj);
                audioPost.renderImagePost(this.view.getNodePost());
            }
            if (obj.type === '2') {
                const picturePost = new Post(obj);
                picturePost.renderImagePost(this.view.getNodePost());
            }
        }
    }

    handlePageRender = () => {
        this.model.getPosts()
            .then((data) => {
                data.forEach((el) => {
                    this.createPost(el);
                });
            });
    }
}
