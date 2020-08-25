export class AsideListView {
    constructor(handleClick, handleClickPost) {
        this.authorList = document.querySelector('.authors-list-aside');
        this.handleClick = handleClick;
        this.handleClickPost = handleClickPost;
    }

    renderAuthorList = (authors) => {
        const arrayAuthors = authors;
        arrayAuthors.forEach((author) => {
            const { posts } = author;
            this.authorList.innerHTML += `
            <div class="authors-li-aside">
                <p class="author-name-aside" id="${author.id}">
                ${author.name}
                </p>
                    <div class="aside-posts" id="a${author.id}">
                    ${posts.map((elem) => this.renderItem(elem)).join('')}
                    </div>
            </div> 
            `;
            this.hidePosts(author.id);
        });
        this.setHendlers();
    }

    renderItem = (post) => `
        <div class = 'post-item-aside' id="${post.id}" tabindex="0">${post.title}</div> 
        `

    showPosts = (id) => {
        const idPost = `a${id}`;
        const posts = document.getElementById(idPost);
        posts.style.display = 'block';
        posts.style.fontWeight = '400';
        this.setHendlersPosts();
    }

    hidePosts = (id) => {
        const idPost = `a${id}`;
        const posts = document.getElementById(idPost);
        posts.style.display = 'none';
    }

    setHendlers = () => {
        const liElemAuthor = document.querySelectorAll('.author-name-aside');
        liElemAuthor.forEach((el) => {
            el.addEventListener('click', () => {
                const authorId = el.getAttribute('id');
                el.classList.toggle('opened');
                if (!el.classList.contains('opened')) {
                    el.style.fontWeight = '400';
                    this.handleClick(authorId, false);
                    this.hidePosts(authorId);
                } else {
                    el.style.fontWeight = 'bold';
                    this.handleClick(authorId, true);
                    this.showPosts(authorId);
                }
            });
        });
    }

    setHendlersPosts = () => {
        const posts = document.querySelectorAll('.post-item-aside');
        posts.forEach((el) => {
            el.addEventListener('click', () => {
                const postId = el.getAttribute('id');
                this.handleClickPost(postId);
            });
        });
    }
}
