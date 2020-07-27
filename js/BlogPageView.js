export class BlogPageView {
    constructor(handleAddModal, handleFormSubmit, handlePageRender) {
        this.handleAddModal = handleAddModal;
        this.handleFormSubmit = handleFormSubmit;
        this.handlePageRender = handlePageRender;

        this.btn = document.querySelector('.new-post-btn');
        this.btn.addEventListener('click', this.handleAddModal);

        this.posts = document.querySelector('.blog__boxes');
        this.modal = document.querySelector('.m');

        window.onload = () => {
            this.handlePageRender();
        };
    }

    getNodePost = () => this.posts;

    renderModal() {
        this.modal.style.display = 'block';
        this.modal.innerHTML = `   
                <form class="px-2 py-2 add-post-form" name="newPostForm">

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
                            <input class="form-control input" type="text" name="urlimage" id="url" placeholder="Add image">
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
                    
                    <div class="row mb-4">
                        <div class="col d-flex align-items-center">
                            <label class="mr-3 w-25" for="date">Post date</label>
                            <input class="form-control input" type="date" name="date" id="date" placeholder="Add date of post" required>
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
                    
                    <div class="row mb-4">
                        <div class="col d-flex align-items-center">
                            <label class="mr-3 w-25" for="time">Reading time</label>
                            <select name="time" required>
                                <option value="5 min read">5 min </option>
                                <option value="7 min read">7 min </option>
                                <option value="10 min read">10 min </option>
                                <option value="15 min read">15 min </option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="row buttons">
                       <input type="submit" name="submit-btn"  class="btn btn-dark button" value="Save">
                       <input type="button" name="submit-btn" class="btn btn-dark button cancel" value="Cancel">
                    </div>

                </form>
        `;

        const info = document.querySelector('.info');
        this.textArea = document.querySelector('textarea');
        this.textArea.addEventListener('click', () => {
            info.style.display = 'block';
        });

        this.cancel = document.querySelector('.cancel');
        this.cancel.addEventListener('click', this.deleteForm);

        this.form = document.querySelector('form');
        this.form.addEventListener('submit', this.handleFormSubmit);
    }

    deleteForm = () => {
        this.form.style.display = 'none';
        this.modal.style.display = 'none';
        window.scroll(0, 0);
    }
}
