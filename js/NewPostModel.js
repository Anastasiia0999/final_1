export class NewPostModel {
    constructor() {
        this.urlPost = 'http://localhost:3000/api/create-article';
        this.id = Math.floor(Math.random() * Math.floor(5000))+3;
        this.date = new Date();
    }

    validateData = (data) =>{

        let flag = true;
        for (let key in data){
            if(!data[key].trim('')){
                console.log(data[key].trim(''));
                flag = false;
                break;
            }
        }
        let title = data.title;
        console.log(data.title);
        if(title.indexOf('?')!==-1 || title.indexOf('!')!==-1 || title.indexOf('.')!==-1 || title.indexOf('-')!==-1){
            flag=false;
        }
        console.log(flag);
        return flag;

    }
    setId = (obj) =>{
        obj.id = this.id;
    }
    setDate = (obj) =>{
        let month = this.date.getMonth();
        switch (month){
            case 0:
                month = 'jan';
                break;
            case 1:
                month = 'feb';
                break;
            case 2:
                month = 'mar';
                break;
            case 3:
                month = 'apr';
                break;
            case 4:
                month = 'may';
                break;
            case 5:
                month = 'jun';
                break;
            case 6:
                month = 'jul';
                break;
            case 7:
                month = 'aug';
                break;
            case 8:
                month = 'sep';
                break;
            case 9:
                month = 'oct';
                break;
            case 10:
                month = 'nov';
                break;
            case 11:
                month = 'dec';
                break;
        }
        let day = this.date.getDate();
        let year = this.date.getFullYear();
        obj.date = day + ' ' + month + ', ' + year;
        console.log(this.date);
    }

    setHref = (obj) =>{
    obj.href = `<a href=post.html#${obj.id}>Read more</a>`;
    }

    setDescr = (obj) =>{
        console.log([...obj.text].length);
        if([...obj.text].length >200 ){
            let str = obj.text;
            str = str.slice(0,200);
            str = str.replace('p/','');
            str = str.replace('/p','');
            str = str.replace('t/','');
            str = str.replace('/t','');
            str = str.replace('q/','');
            str = str.replace('/q','');
            let space = str.lastIndexOf(' ');
            str = str.slice(0,space);
            str += '...';
            obj.description = str;
            console.log(obj.description);
        }else{
            obj.description = obj.text;
        }
    }

    setIcon = (obj) =>{

        if(obj.type === '0'){
            obj.icon = '<img src="./icons_second_page/a-icon-playmini.svg" alt="">';
        }

        if(obj.type === '1'){
            obj.icon = '<img src="./icons_second_page/a-icon-melody.svg" alt="">';
        }

        if(obj.type === '2'){
            obj.icon = '<img src="./icons_second_page/a-icon-text.svg" alt="">';
        }

    }

    prepareData = (data) =>{
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
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                alert('Post was successfully added');
            })
            .catch((error) => console.error(error));
    }

    getPosts = () => { return fetch('http://localhost:3000/api/list')
            .then((posts) => {
                return posts.json();
            })
            .catch((error) => console.error(error));
    }
}
