import { BlogPageModel } from './BlogPageModel.js';
import { BlogPageView } from './BlogPageView.js';
import { Post, VideoPost, AudioPost } from './NewPostView.js';

export class BlogPageController {
    constructor() {
        this.model = new BlogPageModel();
        this.view = new BlogPageView(this.handleAddModal, this.handleFormSubmit, this.handlePageRender);
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

    handleAddModal = (ev) => {
        ev.preventDefault();
        this.view.renderModal();
    }

    handleFormSubmit = (ev) => {
        ev.preventDefault();
        const data = [...ev.target].reduce((obj, el) => {
            const dataPost = obj;
            if (el.type !== 'submit' && el.type !== 'button') {
                dataPost[el.name] = el.value;
            }
            return dataPost;
        }, {});

        if (!this.model.validateData(data)) {
            alert('Invalid data');
        } else {
            const endVersion = this.model.prepareData(data);
            this.model.addPost(endVersion);
            this.createPost(endVersion);
            this.view.deleteForm();
        }
    }
}
