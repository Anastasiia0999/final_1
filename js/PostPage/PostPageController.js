import { PostPageModel } from './PostPageModel.js';
import { AudioFullPost, FullPost, VideoFullPost } from './PostPageView.js';

export class PostPageController {
    constructor() {
        const { href } = window.location;
        this.id = href.slice(href.lastIndexOf('#') + 1, href.length);

        this.model = new PostPageModel(this.id);

        this.handlePageRender();
    }

       createPost = (obj) => {
           if (obj.urlimage === '') {
               if (obj.type === '1') {
                   const audioPost = new AudioFullPost(obj);
                   audioPost.renderTextPost();
                   audioPost.renderText();
               }
               if (obj.type === '2') {
                   const textPost = new FullPost(obj);
                   textPost.renderTextPost();
                   textPost.renderText();
               }
           } else {
               if (obj.type === '0') {
                   const videoPost = new VideoFullPost(obj);
                   videoPost.renderPicturePost();
                   videoPost.renderText();
               }
               if (obj.type === '1') {
                   const audioPost = new AudioFullPost(obj);
                   audioPost.renderPicturePost();
                   audioPost.renderText();
               }
               if (obj.type === '2') {
                   const picturePost = new FullPost(obj);
                   picturePost.renderPicturePost();
                   picturePost.renderText();
               }
           }
       }

    handlePageRender = () => {
        this.model.getPageData()
            .then((data) => {
                this.createPost(data);
            });
    }
}
