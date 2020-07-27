export class BlogPageModel {
    constructor() {
        this.urlPost = 'http://localhost:3000/api/create-article';
        this.id = Math.floor(Math.random() * Math.floor(5000)) + 3;
    }

    validateData = (data) => {
        let flag = true;
        for (const key in data) {
            if (!data[key].trim('') && key !== 'urlimage') {
                flag = false;
                break;
            }
        }
        const { title } = data;
        if (title.indexOf('?') !== -1 || title.indexOf('!') !== -1 || title.indexOf('.') !== -1 || title.indexOf('-') !== -1) {
            flag = false;
        }
        if (data.type === '0' && data.urlimage === '') {
            flag = false;
        }
        return flag;
    }

    setId = (obj) => {
        obj.id = this.id;
    }

    setDate = (obj) => {
        const { date } = obj;
        let month = date.slice(5, 7);
        let day = date.slice(8, 10);
        const year = date.slice(0, 4);
        if (date[8] === '0') {
            day = date[9];
        }
        switch (month) {
        case '01':
            month = 'jan';
            break;
        case '02':
            month = 'feb';
            break;
        case '03':
            month = 'mar';
            break;
        case '04':
            month = 'apr';
            break;
        case '05':
            month = 'may';
            break;
        case '06':
            month = 'jun';
            break;
        case '07':
            month = 'jul';
            break;
        case '08':
            month = 'aug';
            break;
        case '09':
            month = 'sep';
            break;
        case '10':
            month = 'oct';
            break;
        case '11':
            month = 'nov';
            break;
        case '12':
            month = 'dec';
            break;
        }
        obj.date = `${day} ${month}, ${year}`;
    }

    setHref = (obj) => {
        obj.href = `<a href=post.html#${obj.id}>Read more</a>`;
    }

    setDescr = (obj) => {
        let chars = 200;
        if (obj.type === '1') {
            chars = 100;
        }
        if (obj.type === '2' && obj.urlimage === '') {
            chars = 400;
        }
        let str = obj.text;
        str = str.slice(0, chars);
        str = str.replace('p/', '');
        str = str.replace('/p', '');
        str = str.replace('t/', '');
        str = str.replace('/t', '');
        str = str.replace('q/', '');
        str = str.replace('/q', '');
        if ([...obj.text].length > chars) {
            const space = str.lastIndexOf(' ');
            str = str.slice(0, space);
            str += '...';
            obj.description = str;
        } else {
            obj.description = str;
        }
    }

    setIcon = (obj) => {
        if (obj.type === '0') {
            obj.icon = '<img src="./icons_second_page/a-icon-playmini.svg" alt="">';
        }

        if (obj.type === '1') {
            obj.icon = '<img src="./icons_second_page/a-icon-melody.svg" alt="">';
        }

        if (obj.type === '2' && obj.urlimage != '') {
            obj.icon = '<img src="./icons_second_page/a-icon-picture.svg" alt="">';
        }

        if (obj.type === '2' && obj.urlimage === '') {
            obj.icon = '<img src="./icons_second_page/a-icon-text.svg" alt="">';
        }
    }

    prepareData = (data) => {
        this.setId(data);
        this.setDate(data);
        this.setHref(data);
        this.setDescr(data);
        this.setIcon(data);
        return data;
    }

    addPost = (newPost) => {
        fetch(this.urlPost, {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(() => {
                alert('Post was successfully added');
            })
            .catch((error) => console.error(error));
    }

    getPosts = () => fetch('http://localhost:3000/api/list')
        .then((posts) => posts.json())
        .catch((error) => console.error(error))
}
