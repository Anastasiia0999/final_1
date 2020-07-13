window.onload = () =>{

    //this.pageData = getData(id);


};
let href = window.location.href;

/*function addId(id){
    href+=id;
    console.log(id);

}*/
let root = document.querySelector('.page');

let id = href.slice(href.lastIndexOf('#')+1,href.length);
console.log(id);


function getPageData() { return fetch(`http://localhost:3000/api/list/${id}`)
    .then((posts) => {
        return posts.json();
    })
    .catch((error) => console.error(error));
}

getPageData().then((data) => renderPage(data));


function renderPage (data){

    console.log(data);

    root.innerHTML = `<div class="page__title">
                        ${data.title}

                        <p class="page__title__under">

                        </p>
                    </div>

                    <div class="blog-box__info__author">

                            <img src=${data.urlauthor} alt="">

                            <div class="statistic">

                                <p class="statistic__name">${data.author}</p>

                                <div class="statistic__info">
                                    <p class="date">${data.date}</p>
                                    <p class="dot1"></p>
                                    <p class="read">12 min read</p>
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

                      <img  class="page__image" src=${data.urlimage} alt="">
                        
                        <div class="text"> </div>

                    

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

                        </div>`
    let text= document.querySelector('.text');

    let innerText = data.text;

    innerText = innerText.replace('p/','<p class="page__trends-text">');
    innerText = innerText.replace('/p','</p>');

    innerText = innerText.replace('t/',' <p class="page__trends-title">');
    innerText = innerText.replace('/t','</p>');

    innerText = innerText.replace('q/','<div class="page__trends-container"><p class="page__trends-container__inner-text">');
    innerText = innerText.replace('/q','</p></div>');

    console.log(innerText);

    text.innerHTML = innerText;


}

