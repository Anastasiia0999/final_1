export class PostContentView {
    constructor() {
        this.postContent = document.querySelector('.post');
    }

    setText = (textOrigin) => {
        let innerText = textOrigin;

        innerText = innerText.replace('p/', '<p class="post-paragraph">');
        innerText = innerText.replace('/p', '</p>');

        innerText = innerText.replace('t/', ' <p class="post-content-title">');
        innerText = innerText.replace('/t', '</p>');

        return innerText;
    }

    renderPostContent = (postData) => {
        const resultText = this.setText(postData.text);

        this.postContent.innerHTML = `
        <p class = 'post-title'>${postData.title}</p>
        <p>${resultText}</p>
        <div class="page__trends-container quote">
            <p class="page__trends-container__inner-text">
            ${postData.quote}
            </p>
        </div>
        <div class="post-date">Date: ${postData.date}</div>
        `;
    }
}
