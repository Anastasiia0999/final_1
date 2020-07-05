export class NewPostView {
    constructor(handleAddModal,handleFormSubmit, handlePageRender) {
        this.handleAddModal = handleAddModal;
        this.handleFormSubmit = handleFormSubmit;
        this.handlePageRender = handlePageRender;

        this.btn = document.querySelector('.new-post-btn');
        this.btn.addEventListener('click',this.handleAddModal);

        this.posts = document.querySelector('.blog__boxes');
        this.modal = document.querySelector('.m');

        window.onload = () =>{
            this.handlePageRender();
        };

    }
    addNewPost(data){


            this.posts.innerHTML += `<div class="blog-box">

                    <img  class="blog-box__image" src=${data.urlimage} alt="">

                    <div class="blog-box__info">

                      <div class="blog-box__info__author">

                            <img src=${data.urlauthor} alt="">

                            <div class="statistic">

                                <p class="statistic__name">${data.author}</p>

                                <div class="statistic__info">
                                    <p class="date">${data.date}</p>
                                    <p class="dot1"></p>
                                    <p class="read">7 min read</p>
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
                            ${data.title}
                        </p>

                        <p class="blog-box__info__text">
                            ${data.description}
                        </p>

             
                         <div class="button" >${data.href}</div>
                         
                        

                        <div class="blog-box__info__right-icon">

                            ${data.icon}

                        </div>

                    </div>

                </div>`


    }

    renderPage(data){

        console.log(data);

        for(let i=2; i<data.length;i++){

            this.posts.innerHTML += `<div class="blog-box">

                    <img  class="blog-box__image" src=${data[i].urlimage} alt="">

                    <div class="blog-box__info">

                      <div class="blog-box__info__author">

                            <img src=${data[i].urlauthor} alt="">

                            <div class="statistic">

                                <p class="statistic__name">${data[i].author}</p>

                                <div class="statistic__info">
                                    <p class="date">${data[i].date}</p>
                                    <p class="dot1"></p>
                                    <p class="read">7 min read</p>
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
                            ${data[i].title}
                        </p>

                        <p class="blog-box__info__text">
                            ${data[i].description}
                        </p>

             
                         <div class="button" >${data[i].href}</div>
                         
                        

                        <div class="blog-box__info__right-icon">

                           ${data[i].icon}
                           
                        </div>

                    </div>

                </div>`

        }

    }

    renderModal() {
        this.modal.style.display = 'block';
        this.modal.innerHTML = `   
                <form class="px-2 py-2 add-post-form" name="mentor-hiring">

                    <h2 >New Article Info</h2>
                    <hr>

                    <div class="row mb-4">
                        <div class="col d-flex align-items-center">
                            <label class="mr-3 w-25" for="select-type">Type of article</label>
                            <select class="form-control input" name="type" id="select-type" placeholder="Choose type" required >
                                <option value="0">Video</option>
                                <option value="1">Audio</option>
                                <option value="2">Text</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex align-items-center">
                            <label class="mr-3 w-25" for="url">Image(url)</label>
                            <input class="form-control input" type="text" name="urlimage" id="url" placeholder="Add image" required>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex align-items-center">
                            <label class="mr-3 w-25" for="title">Title</label>
                            <input class="form-control input" type="text" name="title" id="title" placeholder="Add title " required>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex align-items-center">
                            <label class="mr-3 w-25" for="author">Author</label>
                            <input class="form-control input" type="text" name="author" id="author" placeholder="Add author" required>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex align-items-center">
                            <label class="mr-3 w-25" for="url-author">Photo(url)</label>
                            <input class="form-control input" type="text" name="urlauthor" id="url-author" placeholder="Add author\`s photo" required>
                        </div>
                    </div>

                    <div class="row info" >
                        <ul class="list-group mx-3 text-center text-warning">
                             <li class="list-group-item ">Start paragraph - 'p/'</li>
                             <li class="list-group-item ">End paragraph - '/p'</li>
                             <li class="list-group-item ">Start title - 't/'</li>
                             <li class="list-group-item ">End title - '/t'</li>
                             <li class="list-group-item ">Start quote - 'q/'</li>
                             <li class="list-group-item ">End quote - '/q'</li>
                         </ul>
                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex align-items-center">
                            <label class="mr-3 w-25" for="post">Description</label>
                            <textarea class="form-control textarea" type="text" name="text" id="post" placeholder="Write post" rows="10" cols="10" maxlength="1000" required></textarea>
                        </div>
                    </div>

                    <div class="row buttons">
                        <input type="submit" name="submit-btn"  class="btn btn-dark button" value="Save">
                       <input type="button" name="submit-btn" class="btn btn-dark button cancel" value="Cancel">
                    </div>

                </form>
        `;

        let info = document.querySelector('.info');
        this.textArea = document.querySelector('textarea');
        this.textArea.addEventListener('click',function (){
            info.style.display = 'block';
        });

        this.cancel = document.querySelector('.cancel');
        this.cancel.addEventListener('click',this.deleteForm);

        this.form = document.querySelector('form');
        this.form.addEventListener('submit',this.handleFormSubmit);
    }

    deleteForm(){
        this.form.style.display = 'none';
        this.modal.style.display = 'none';
    }

}
