import {Mediator} from './Mediator.js'
import {TopListController} from './TopList/TopListController.js'
import {AsideListController} from './AsideList/AsideListController.js'
import {PostContentController} from './PostContent/PostContentController.js'
import {Author} from './Author.js'

const mediator = new Mediator();

//post array of posts on server
const posts = [
    { type: '1', urlimage: 'https://t3.ftcdn.net/jpg/02/12/43/28/240_F_212432820_Zf6CaVMwOXFIylDOEDqNqzURaYa7CHHc.jpg', title: 'Red Color', author: 'Anastasia Gordienko', urlauthor: 'https://i.pinimg.com/564x/dd/59/4e/dd594e241abf617abed2b7d586c19ef9.jpg', date: '22 aug, 2020', text: 't/Red Color Meaning/t\np/Red is a very hot color. It’s associated with fire, violence, and warfare. It’s also associated with love and passion. In history, it’s been associated with both the Devil and Cupid. Red can actually have a physical effect on people, raising blood pressure and respiration rates. It’s been shown to enhance human metabolism, too./p', quote: 'The bright red of the illustration on the homepage of Nacache Design’s site gives the page a ton of energy and vibrancy.', time: '7 min read', id: 229, href: '<a href=post.html#229>Read more</a>', description: 'Paragraph\nTtitle', icon: '<img src="./icons_second_page/a-icon-melody.svg" alt="">' },
    { type: '2', urlimage: 'https://t3.ftcdn.net/jpg/02/12/43/28/240_F_212432820_Zf6CaVMwOXFIylDOEDqNqzURaYa7CHHc.jpg', title: 'Orange Color', author: 'Alex Gordienko', urlauthor: 'https://i.pinimg.com/originals/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg', date: '28 aug, 2020', text: 't/Meaning/t\np/Orange is a very vibrant and energetic color. In its muted forms it can be associated with the earth and with autumn. Because of its association with the changing seasons, orange can represent change and movement in general. Orange is also strongly associated with creativity./p', quote: 'Bitter Renter’s bright and bold home page takes full advantage of the energy that orange can provide to a design.', time: '5 min read', id: 4134, href: '<a href=post.html#4134>Read more</a>', description: 'Post 2', icon: '<img src="./icons_second_page/a-icon-picture.svg" alt="">' },
    { type: '2', urlimage: 'https://t3.ftcdn.net/jpg/02/12/43/28/240_F_212432820_Zf6CaVMwOXFIylDOEDqNqzURaYa7CHHc.jpg', title: 'Yellow Color', author: 'Jane Smith', urlauthor: 'https://i.pinimg.com/originals/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg', date: '28 aug, 2020', text: 'p/Yellow is often considered the brightest and most energizing of the warm colors. It’s associated with happiness and sunshine. Yellow can also be associated with deceit and cowardice, though (calling someone yellow is calling them a coward)./p', quote: 'Kettle’s not-quite-true-yellow is lively and vibrant without being overwhelming.', time: '5 min read', id: 4135, href: '<a href=post.html#4134>Read more</a>', description: 'Post 2', icon: '<img src="./icons_second_page/a-icon-picture.svg" alt="">' },
    { type: '0', urlimage: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg', title: 'Green Color', author: 'Anastasia Gordienko', urlauthor: 'https://i.pinimg.com/564x/dd/59/4e/dd594e241abf617abed2b7d586c19ef9.jpg', date: '19 aug, 2020', text: 't/Meaning/t\np/Green is a very down-to-earth color. It can represent new beginnings and growth. It also signifies renewal and abundance. Alternatively, green can also represent envy or jealousy, and a lack of experience./p', quote: 'The site for Memory is Our Homeland uses a blue-green hue that’s energized by the yellow typography without being too bright.', time: '5 min read', id: 1484, href: '<a href=post.html#1484>Read more</a>', description: 'Title', icon: '<img src="./icons_second_page/a-icon-playmini.svg" alt="">' },
    { type: '2', urlimage: '', title: 'Blue Color', author: 'Alex Gordienko', urlauthor: 'https://i.pinimg.com/originals/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg', date: '27 aug, 2020', text: 't/Meaning/t\np/Blue is often associated with sadness in the English language. Blue is also used extensively to represent calmness and responsibility. Light blues can be refreshing and friendly. Dark blues are more strong and reliable. Blue is also associated with peace and has spiritual and religious connotations in many cultures and traditions (for example, the Virgin Mary is generally depicted wearing blue robes)./p', quote: 'The bright blue background of the Future of Design Survey results website homepage stands out, and is then used as an accent color throughout the rest of the site.', time: '5 min read', id: 2462, href: '<a href=post.html#2462>Read more</a>', description: 'Text post', icon: '<img src="./icons_second_page/a-icon-text.svg" alt="">' },
];

const addPost = (newPost) => {
    fetch('http://localhost:3000/api/create-article', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(() => {
            console.log('Post was successfully added');
        })
        .catch((error) => console.error(error));
};

posts.forEach((el) => {
    addPost(el);
});

//get posts from server
function result(){ fetch('http://localhost:3000/api/list')
                    .then( (response) => response.json())
                    .then((json) => {
                    setData(json);
                    });
                    }
                    result();
//sort posts by authors
function setData(obj){
    let authors = [];
    let posts = obj;
    for( let p = 2; p< posts.length; p++){
        let flag = true;
        if(!authors.length){
             const author = new Author(posts[p].author);
             author.addPost(posts[p].id,posts[p].title);
             authors.push(author);
        }else{
             for( let a = 0; a < authors.length; a++){
                 if(posts[p].author === authors[a].name){
                    authors[a].addPost(posts[p].id,posts[p].title);
                    flag=false;
                 }
             }
             if(flag){
                const author = new Author(posts[p].author);
                author.addPost(posts[p].id,posts[p].title);
                authors.push(author);
             }
        }
    }
    const topListController = new TopListController(mediator.methods, authors);
    const asideListController = new AsideListController(mediator.methods, authors);
    const postContentController = new PostContentController(mediator.methods);
}


