const root = document.querySelector('.page');

export class FullPost {
    constructor(data) {
        this.data = data;
    }

    renderTextPost = () => {
        root.innerHTML = `<div class="page__title">
                        ${this.data.title}
                        <p class="page__title__under">
                        </p>
                    </div>
                    <div class="blog-box__info__author">
                            <img src=${this.data.urlauthor} alt="">
                            <div class="statistic">
                                <p class="statistic__name">${this.data.author}</p>
                                <div class="statistic__info">
                                    <p class="date">${this.data.date}</p>
                                    <p class="dot1"></p>
                                    <p class="read">${this.data.time}</p>
                                    <p class="dot2"></p>
                                    <img src="icons_first_page/a-icon-comment.svg" alt="">
                                    <p class="number-comments">0</p>
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                </div>
                            </div>
                     </div>
                        
                        <div class="audio"> </div>
                        <div class="text"> </div>
                        <div class="page__trends-container">

                            <p class="page__trends-container__inner-text">
                            ${this.data.quote}
                            </p>

                         </div>
                    
                        <div class="page__footer">
                            <div class="page__footer__like-icon">
                                <img src="./icons_third_page/a-icon-like.svg" alt="">
                                <p>0 likes</p>
                            </div>
                            <div class="footer-box__icons">
                                <img class="icon" src="./icons_first_page/a-icon-facebook.svg">
                                <img class="icon" src="./icons_first_page/a-icon-instagram.svg">
                                <img class="icon" src="./icons_first_page/a-icon-dribbble.svg">
                            </div>
                        </div>`;
    };

    renderPicturePost = () => {
        root.innerHTML = `<div class="page__title">
                        ${this.data.title}
                        <p class="page__title__under">
                        </p>
                    </div>
                    <div class="blog-box__info__author">
                            <img src=${this.data.urlauthor} alt="">
                            <div class="statistic">
                                <p class="statistic__name">${this.data.author}</p>
                                <div class="statistic__info">
                                    <p class="date">${this.data.date}</p>
                                    <p class="dot1"></p>
                                    <p class="read">${this.data.time}</p>
                                    <p class="dot2"></p>
                                    <img src="icons_first_page/a-icon-comment.svg" alt="">
                                    <p class="number-comments">0</p>
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                </div>
                            </div>
                     </div>
                        <img  class="page__image" src=${this.data.urlimage} alt="">
                        
                        <div class="audio"> </div>
                        <div class="text"> </div>
                        <div class="page__trends-container">

                            <p class="page__trends-container__inner-text">
                            ${this.data.quote}
                            </p>

                         </div>
                    
                        <div class="page__footer">
                            <div class="page__footer__like-icon">
                                <img src="./icons_third_page/a-icon-like.svg" alt="">
                                <p>0 likes</p>
                            </div>
                            <div class="footer-box__icons">
                                <img class="icon" src="./icons_first_page/a-icon-facebook.svg">
                                <img class="icon" src="./icons_first_page/a-icon-instagram.svg">
                                <img class="icon" src="./icons_first_page/a-icon-dribbble.svg">
                            </div>
                        </div>`;
    };

    renderText = () => {
        const text = document.querySelector('.text');

        let innerText = this.data.text;

        innerText = innerText.replace('p/', '<p class="page__trends-text">');
        innerText = innerText.replace('/p', '</p>');

        innerText = innerText.replace('t/', ' <p class="page__trends-title">');
        innerText = innerText.replace('/t', '</p>');

        text.innerHTML = innerText;
    };
}

export class VideoFullPost extends FullPost {
    renderPicturePost = () => {
        root.innerHTML = `<div class="page__title">
                        ${this.data.title}
                        <p class="page__title__under">
                        </p>
                    </div>
                    <div class="blog-box__info__author">
                            <img src=${this.data.urlauthor} alt="">
                            <div class="statistic">
                                <p class="statistic__name">${this.data.author}</p>
                                <div class="statistic__info">
                                    <p class="date">${this.data.date}</p>
                                    <p class="dot1"></p>
                                    <p class="read">${this.data.time}</p>
                                    <p class="dot2"></p>
                                    <img src="icons_first_page/a-icon-comment.svg" alt="">
                                    <p class="number-comments">0</p>
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                </div>
                            </div>
                     </div>
                        <img  class="page__image" src=${this.data.urlimage} alt="">
                        
                        <img class="play-icon" src="./icons_first_page/a-icon-play.svg" alt="">
                        
                        <div class="text"> </div>
                        <div class="page__trends-container">

                            <p class="page__trends-container__inner-text">
                            ${this.data.quote}
                            </p>

                         </div>
                    
                        <div class="page__footer">
                            <div class="page__footer__like-icon">
                                <img src="./icons_third_page/a-icon-like.svg" alt="">
                                <p>0 likes</p>
                            </div>
                            <div class="footer-box__icons">
                                <img class="icon" src="./icons_first_page/a-icon-facebook.svg">
                                <img class="icon" src="./icons_first_page/a-icon-instagram.svg">
                                <img class="icon" src="./icons_first_page/a-icon-dribbble.svg">
                            </div>
                        </div>`;
    };
}

export class AudioFullPost extends FullPost {
    renderPicturePost = () => {
        root.innerHTML = `<div class="page__title">
                        ${this.data.title}
                        <p class="page__title__under">
                        </p>
                    </div>
                    <div class="blog-box__info__author">
                            <img src=${this.data.urlauthor} alt="">
                            <div class="statistic">
                                <p class="statistic__name">${this.data.author}</p>
                                <div class="statistic__info">
                                    <p class="date">${this.data.date}</p>
                                    <p class="dot1"></p>
                                    <p class="read">${this.data.time}</p>
                                    <p class="dot2"></p>
                                    <img src="icons_first_page/a-icon-comment.svg" alt="">
                                    <p class="number-comments">0</p>
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                </div>
                            </div>
                     </div>
                        <img  class="page__image" src=${this.data.urlimage} alt="">
                        
                         <audio class="page__audio" controls>
                            <source src="myAudio.mp3" type="audio/mpeg">
                            <source src="myAudio.ogg" type="audio/ogg">
                            <p>Ваш браузер не поддерживает HTML5 аудио. Вот взамен
                            <a href="myAudio.mp4">ссылка на аудио</a></p>
                         </audio>
                         
                        <div class="text"> </div>
                        <div class="page__trends-container">

                            <p class="page__trends-container__inner-text">
                            ${this.data.quote}
                            </p>

                         </div>
                    
                        <div class="page__footer">
                            <div class="page__footer__like-icon">
                                <img src="./icons_third_page/a-icon-like.svg" alt="">
                                <p>0 likes</p>
                            </div>
                            <div class="footer-box__icons">
                                <img class="icon" src="./icons_first_page/a-icon-facebook.svg">
                                <img class="icon" src="./icons_first_page/a-icon-instagram.svg">
                                <img class="icon" src="./icons_first_page/a-icon-dribbble.svg">
                            </div>
                        </div>`;
    };

    renderTextPost = () => {
        root.innerHTML = `<div class="page__title">
                        ${this.data.title}
                        <p class="page__title__under">
                        </p>
                    </div>
                    <div class="blog-box__info__author">
                            <img src=${this.data.urlauthor} alt="">
                            <div class="statistic">
                                <p class="statistic__name">${this.data.author}</p>
                                <div class="statistic__info">
                                    <p class="date">${this.data.date}</p>
                                    <p class="dot1"></p>
                                    <p class="read">${this.data.time}</p>
                                    <p class="dot2"></p>
                                    <img src="icons_first_page/a-icon-comment.svg" alt="">
                                    <p class="number-comments">0</p>
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                    <img class="star" src="./icons_second_page/Star-1.svg" alt="">
                                </div>
                            </div>
                     </div>
                     
                         <audio class="page__audio" controls>
                            <source src="myAudio.mp3" type="audio/mpeg">
                            <source src="myAudio.ogg" type="audio/ogg">
                            <p>Ваш браузер не поддерживает HTML5 аудио. Вот взамен
                             <a href="myAudio.mp4">ссылка на аудио</a></p>
                         </audio>
                         
                        <div class="text"> </div>
                        <div class="page__trends-container">

                            <p class="page__trends-container__inner-text">
                            ${this.data.quote}
                            </p>

                         </div>
                    
                        <div class="page__footer">
                            <div class="page__footer__like-icon">
                                <img src="./icons_third_page/a-icon-like.svg" alt="">
                                <p>0 likes</p>
                            </div>
                            <div class="footer-box__icons">
                                <img class="icon" src="./icons_first_page/a-icon-facebook.svg">
                                <img class="icon" src="./icons_first_page/a-icon-instagram.svg">
                                <img class="icon" src="./icons_first_page/a-icon-dribbble.svg">
                            </div>
                        </div>`;
    };
}
