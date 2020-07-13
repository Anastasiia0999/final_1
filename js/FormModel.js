export class FormModel {
    constructor() {
        this.urlPost = 'http://www.json-generator.com/api/json/get/clIlTbmoOa?indent=2';
    }

    addData = (mentorData) => {
        fetch(this.urlPost, {
            method: 'POST',
            body: JSON.stringify(mentorData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                alert('success');
            })
            .catch((error) => console.error(error));
    }

    getCoursesList = (url) => fetch(url)
        .then((courses) => courses.json())
        .catch((error) => console.error(error));
}
