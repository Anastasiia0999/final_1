import { FormModel } from './FormModel.js';
import { FormView } from './FormView.js';

export class FormController {
    constructor() {
        this.model = new FormModel();
        this.view = new FormView(this.handleNewPost);

        this.model.getCoursesList('http://www.json-generator.com/api/json/get/clIlTbmoOa?indent=2')
            .then((courses) => this.view.renderForm(courses));
    }

    handleAddMentor = (ev) => {
        ev.preventDefault();
        const selectedCoursesId = [];
        const data = [...ev.target].reduce((obj, el) => {
            const dataMentor = obj;
            if (el.type !== 'submit' && el.id !== 'select') {
                dataMentor[el.name] = el.value;
            } else if (el.id === 'select') {
                [...el.selectedOptions].forEach((opt) => selectedCoursesId.push(opt.index));
                dataMentor[el.name] = selectedCoursesId;
            }
            return dataMentor;
        }, {});
        this.model.addData(data);
    }
}
