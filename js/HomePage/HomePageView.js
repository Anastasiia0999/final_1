function Slider(width, count, quantity, node) {
    this.width = width; // one slide width
    this.count = count; // counter of slider number
    this.max = width * quantity;
    this.slider = node;
    this.list = this.slider.querySelector('.posts');

    this.endlessMotion = () => {
        this.interval = setInterval(this.slideRight, 4000);
    };

    this.position = 0; // position of slider

    this.liList = this.slider.querySelectorAll('li');

    this.addEventsBtn = (btnRight, btnLeft) => {
        btnRight.addEventListener('click', () => {
            clearInterval(this.interval);
            this.slideRight();
        });
        btnRight.addEventListener('mouseover', () => {
            clearInterval(this.interval);
            btnRight.style.cursor = 'pointer';
        });
        btnRight.addEventListener('mouseout', () => {
            this.interval = setInterval(this.slideRight, 4000);
        });

        btnLeft.addEventListener('click', () => {
            clearInterval(this.interval);
            this.slideLeft();
        });
        btnLeft.addEventListener('mouseover', () => {
            clearInterval(this.interval);
            btnLeft.style.cursor = 'pointer';
        });
        btnLeft.addEventListener('mouseout', () => {
            this.interval = setInterval(this.slideLeft, 4000);
        });
    };

    this.slideRight = () => {
        this.position -= this.width * this.count;
        // on the last/first position of slider it changes to the first/last
        if (this.position === -this.max) {
            this.position = 0;
        }
        this.list.style.marginLeft = `${this.position}px`;
    };

    this.slideLeft = () => {
        if (this.position === 0) {
            this.position = -this.max + this.width;
        } else {
            this.position += this.width * this.count;
        }
        // on the last/first position of slider it changes to the first/last
        this.list.style.marginLeft = `${this.position}px`;
    };

    this.addEventsNode = (nodeMain) => {
        const touchSurface = nodeMain;
        let startX;
        let dist;

        touchSurface.addEventListener('mouseover', () => {
            clearInterval(this.interval);
            touchSurface.style.cursor = 'pointer';
        });
        touchSurface.addEventListener('mouseout', () => {
            this.interval = setInterval(this.slideRight, 4000);
        });

        touchSurface.addEventListener('mousedown', (e) => {
            e.preventDefault();
            startX = e.pageX;
            dist = 0;
        }, false);

        touchSurface.addEventListener('mouseup', (e) => {
            e.preventDefault();
            dist = e.pageX - startX;
            if (dist < 0) {
                this.slideRight();
            }
            if (dist > 0) {
                this.slideLeft();
            }
        }, false);
    };

    this.addEventsNode(this.slider);
    this.endlessMotion();
}

function LastPortfolioSlider(width, count, quantity, node) {
    Slider.apply(this, [width, count, quantity, node]);
    this.liArr = this.liList;
    this.setUpMotion = (li) => {
        li.addEventListener('mouseover', () => {
            li.style.marginBottom = '20px';
        });
        li.addEventListener('mouseout', () => {
            li.style.marginBottom = '10px';
        });
    };
    this.setShadow = (li) => {
        li.addEventListener('mouseover', () => {
            li.style.boxShadow = '0px 10px 5px grey';
        });
        li.addEventListener('mouseout', () => {
            li.style.boxShadow = 'none';
        });
    };
    this.setEvents = () => {
        this.liArr.forEach((el) => {
            this.setUpMotion(el);
            this.setShadow(el);
        });
    };

    this.setEvents();
}

function TestimonialsSlider(width, count, quantity, node) {
    Slider.apply(this, [width, count, quantity, node]);
    this.slider2 = this.slider;
    this.liArr = this.liList;
    this.setScale = (li) => {
        li.addEventListener('mouseover', () => {
            li.style.transform = 'scale(1.05)';
            li.style.cursor = 'pointer';
        });
        li.addEventListener('mouseout', () => {
            li.style.transform = 'scale(1)';
        });
    };

    this.setBorder = (slider) => {
        slider.addEventListener('mouseover', () => {
            slider.style.border = '3px solid white';
        });
        slider.addEventListener('mouseout', () => {
            slider.style.border = 'none';
        });
    };

    this.setEvents = () => {
        this.liArr.forEach((el) => {
            this.setScale(el);
        });
        this.setBorder(this.slider2);
    };

    this.setEvents();
}

document.addEventListener('DOMContentLoaded', () => {
    const lastPortfolioNode = document.querySelector('.latest-portfolio__boxes');
    const btnRight = document.querySelector('.latest-portfolio__button-right');
    const btnLeft = document.querySelector('.latest-portfolio__button-left');
    const lastPortfolioSlider = new LastPortfolioSlider(405, 1, 7, lastPortfolioNode);// 402
    lastPortfolioSlider.addEventsBtn(btnRight, btnLeft);

    const testimonialsNode = document.querySelector('.testimonials__person-box');
    const btnR = document.querySelector('.testimonials__button-right');
    const btnL = document.querySelector('.testimonials__button-left');
    const testimonialsSlider = new TestimonialsSlider(605, 1, 3, testimonialsNode);
    testimonialsSlider.addEventsBtn(btnR, btnL);
});

