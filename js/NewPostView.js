export class Post {
    icon = document.getElementById('icon');

    constructor(objInput) {
        this.author = objInput.author;
        this.date = objInput.date;
        this.desc = objInput.description;
        this.href = objInput.href;
        this.id = objInput.id;
        this.time = objInput.time;
        this.title = objInput.title;
        this.type = objInput.type;
        this.urlAuthor = objInput.urlauthor;
        this.urlImage = objInput.urlimage;
        this.icon = objInput.icon;
    }

    renderImagePost = (node) => {
        node.innerHTML += `<div class="blog-box">

                    <img  class="blog-box__image" src=${this.urlImage} alt="">

                    <div class="blog-box__info">

                      <div class="blog-box__info__author">

                            <img src=${this.urlAuthor} alt="">

                            <div class="statistic">

                                <p class="statistic__name">${this.author}</p>

                                <div class="statistic__info">
                                    <p class="date">${this.date}</p>
                                    <p class="dot1"></p>
                                    <p class="read">${this.time}</p>
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

                        <p class="blog-box__info__title">
                            ${this.title}
                        </p>
                       

                        <p class="blog-box__info__text">
                            ${this.desc}
                        </p>

             
                         <div class="button" >${this.href}</div>

                        <div class="blog-box__info__right-icon" id="icon">
                             ${this.icon}             
                        </div>

                    </div>

                </div>`;
    }

    renderTextPost = (node) => {
        node.innerHTML += `<div class="blog-box">

                    <div class="blog-box__last">
            
                        <div class="blog-box__last__author">
                
                            <img src=${this.urlAuthor} alt="">
                    
                                <div class="statistic">
                        
                                    <p class="statistic__name">${this.author}</p>
                            
                                        <div class="statistic__info">
                                            <p class="date">${this.date}</p>
                                            <p class="dot1"></p>
                                                    <p class="read">${this.time}</p>
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
            
                    <p class="blog-box__last__title">
                    ${this.title}
                </p>
            
            <p class="blog-box__last__text">
                    ${this.desc}
            </p>
            
            <button class="button">
                   ${this.href}
                </button>
            
            </div>
            
            <div class="blog-box__last__right-icon" id="icon">
                   ${this.icon}
            </div>
           
             </div>`;
    }
}

export class AudioPost extends Post {
    renderImagePost = (node) => {
        node.innerHTML += `<div class="blog-box">

                    <img  class="blog-box__image" src=${this.urlImage} alt="">

                    <div class="blog-box__info">

                      <div class="blog-box__info__author">

                            <img src=${this.urlAuthor} alt="">

                            <div class="statistic">

                                <p class="statistic__name">${this.author}</p>

                                <div class="statistic__info">
                                    <p class="date">${this.date}</p>
                                    <p class="dot1"></p>
                                    <p class="read">${this.time}</p>
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

                        <p class="blog-box__info__title">
                            ${this.title}
                        </p>
                        
                        <audio class="blog-box__info__audio" controls>
                          <source src="myAudio.mp3" type="audio/mpeg">
                          <source src="myAudio.ogg" type="audio/ogg">
                          <p>Ваш браузер не поддерживает HTML5 аудио. Вот взамен
                          <a href="myAudio.mp4">ссылка на аудио</a></p>
                        </audio>

                        <p class="blog-box__info__text">
                            ${this.desc}
                        </p>

             
                         <div class="button" >${this.href}</div>

                        <div class="blog-box__info__right-icon" id="icon">
                             ${this.icon}             
                        </div>

                    </div>

                </div>`;
    }

    renderTextPost = (node) => {
        node.innerHTML += `<div class="blog-box">

                    <div class="blog-box__last">
            
                        <div class="blog-box__last__author">
                
                            <img src=${this.urlAuthor} alt="">
                    
                                <div class="statistic">
                        
                                    <p class="statistic__name">${this.author}</p>
                            
                                        <div class="statistic__info">
                                            <p class="date">${this.date}</p>
                                            <p class="dot1"></p>
                                                    <p class="read">${this.time}</p>
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
            
                 <p class="blog-box__last__title">
                    ${this.title}
                </p>
                
                <audio class="blog-box__info__audio" controls>
                          <source src="myAudio.mp3" type="audio/mpeg">
                          <source src="myAudio.ogg" type="audio/ogg">
                          <p>Ваш браузер не поддерживает HTML5 аудио. Вот взамен
                          <a href="myAudio.mp4">ссылка на аудио</a></p>
                 </audio>
            
            <p class="blog-box__last__text">
                    ${this.desc}
            </p>
            
            <button class="button">
                   ${this.href}
                </button>
            
            </div>
            
            <div class="blog-box__last__right-icon" id="icon">
                   ${this.icon}
            </div>
           
             </div>`;
    }
}

export class VideoPost extends Post {
    renderImagePost = (node) => {
        node.innerHTML += `<div class="blog-box">

                    <img  class="blog-box__image" src=${this.urlImage} alt="">
                    
                     <img class="blog-box__play" src="./icons_first_page/a-icon-play.svg" alt="">

                    <div class="blog-box__info">

                      <div class="blog-box__info__author">

                            <img src=${this.urlAuthor} alt="">

                            <div class="statistic">

                                <p class="statistic__name">${this.author}</p>

                                <div class="statistic__info">
                                    <p class="date">${this.date}</p>
                                    <p class="dot1"></p>
                                    <p class="read">${this.time}</p>
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

                        <p class="blog-box__info__title">
                            ${this.title}
                        </p>
                        
                        <p class="blog-box__info__text">
                            ${this.desc}
                        </p>

             
                         <div class="button" >${this.href}</div>

                        <div class="blog-box__info__right-icon" id="icon">
                             ${this.icon}             
                        </div>

                    </div>

                </div>`;
    }
}
