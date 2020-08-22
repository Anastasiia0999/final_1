export class FormView {
    constructor(handleFormSubmit) {
        this.handleFormSubmit = handleFormSubmit;
    }

    setHendlers = () => {
        const info = document.querySelector('.info');
        const textArea = document.querySelector('textarea');
        textArea.addEventListener('click', () => {
            info.style.display = 'block';
        });

        this.form = document.querySelector('form');
        this.form.addEventListener('submit', this.handleFormSubmit);
    }
}
