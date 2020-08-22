import { FormModel } from './FormModel.js';
import { FormView } from './FormView.js';

export class FormController {
    constructor() {
        this.model = new FormModel();
        this.view = new FormView(this.handleFormSubmit);
        this.onLoad();
    }

    onLoad = () => {
        this.view.setHendlers();
    }

    handleFormSubmit = (ev) => {
        ev.preventDefault();
        const data = [...ev.target].reduce((obj, el) => {
            const dataPost = obj;
            if (el.name !== 'submit-btn' && el.name !== 'cancel-btn') {
                dataPost[el.name] = el.value;
            }
            return dataPost;
        }, {});

        if (!this.model.validateData(data)) {
            alert('Fill in all fields or check title');
        } else {
            const endVersion = this.model.prepareData(data);
            this.model.addPost(endVersion);
        }
    }
}
