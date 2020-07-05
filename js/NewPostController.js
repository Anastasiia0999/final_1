import { NewPostModel } from './NewPostModel.js';
import { NewPostView } from './NewPostView.js';

export class NewPostController {
    constructor() {
        this.model = new NewPostModel();
        this.view = new NewPostView(this.handleAddModal,this.handleFormSubmit, this.handlePageRender);

    }

    handlePageRender = () =>{
        this.model.getPosts()
            .then((data)=>{
            this.view.renderPage(data);
        });
    }

    handleAddModal = (ev) => {
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
        console.log(data);

        if(!this.model.validateData(data)){
            alert('Invalid data');
        }else{
            const endVersion = this.model.prepareData(data);
            console.log(endVersion);
            this.model.addPost(endVersion);
            this.view.addNewPost(endVersion);
            this.view.deleteForm();
        }


    }
}
