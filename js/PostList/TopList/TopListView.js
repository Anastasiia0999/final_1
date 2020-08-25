export class TopListView {
    constructor(handleClick, handleClickPost) {
        this.authorList = document.querySelector('.authors-list-top');
        this.handleClick = handleClick;
        this.handleClickPost = handleClickPost;
    }

    renderAuthorList = (authors) => {
        const arrayAuthors = authors;
        arrayAuthors.forEach((author) => {
            const { posts } = author;
            this.authorList.innerHTML += `
            <div class="authors-li-top">
                <p class="author-name" id="${author.id}">
                ${author.name}
                </p>
                 <div class="top-posts" id="t${author.id}">
                    ${posts.map((elem) => this.renderItem(elem)).join('')}
              </div>
            </div> 
            `;
            this.hidePosts(author.id);
        });
        this.setHendlers();
    }

    renderItem = (post) => `
        <div class='post-item' id="${post.id}" tabindex="0">${post.title}</div> 
        `

    showPosts = (id) => {
        const idPost = `t${id}`;
        const posts = document.getElementById(idPost);
        posts.style.display = 'block';
        posts.style.fontWeight = '400';
        this.setHendlersPosts();
    }

    hidePosts = (id) => {
        const idPost = `t${id}`;
        const posts = document.getElementById(idPost);
        posts.style.fontWeight = '400';
        posts.style.display = 'none';
    }

    setHendlers = () => {
        const liElemAuthor = document.querySelectorAll('.author-name');
        liElemAuthor.forEach((el) => {
            el.addEventListener('click', () => {
                const authorId = el.getAttribute('id');
                el.classList.toggle('opened');
                if (!el.classList.contains('opened')) {
                    this.handleClick(authorId, false);
                    el.style.fontWeight = '400';
                    this.hidePosts(authorId);
                } else {
                    this.handleClick(authorId, true);
                    el.style.fontWeight = 'bold';
                    this.showPosts(authorId);
                }
            });
        });
    }

    setHendlersPosts = () => {
        const posts = document.querySelectorAll('.post-item');
        posts.forEach((el) => {
            el.addEventListener('click', () => {
                const postId = el.getAttribute('id');
                this.handleClickPost(postId);
            });
        });
    }
}
