class Slider{
    constructor(width,count, node){
        this.width = width; // one slide width
        this.count = count; // counter of slider number
        this.threeSlides = width*(count*3);
        this.twoSlides = width*(count*2);
        this.oneSlide = width*(count);

        this.slider = node;

        this.list = this.slider.querySelector('ul');

        this.interval = setInterval(this.slideRight,4000);

        this.position = 0; // position of slider

        this.liList = this.slider.querySelectorAll('li');

        this.addEventsNode(this.slider);
    }

    addEventsBtn = (btnRight, btnLeft) =>{

        btnRight.addEventListener('click',() =>{
            clearInterval(this.interval);
            this.slideRight();
        });
        btnRight.addEventListener('mouseover',() =>{
            clearInterval(this.interval);
        });
        btnRight.addEventListener('mouseout', () =>{
            this.interval = setInterval(this.slideRight,4000);
        });

        btnLeft.addEventListener('click',() =>{
            clearInterval(this.interval);
            this.slideLeft();
        });
        btnLeft.addEventListener('mouseover',() =>{
            clearInterval(this.interval);
        });
        btnLeft.addEventListener('mouseout', () =>{
            this.interval = setInterval(this.slideLeft,4000);
        });


    }

    slideRight = () =>{
        this.position -= this.width * this.count;
        // on the last/first position of slider it changes to the first/last
        if(this.position === -this.threeSlides){
            this.position = 0;
        }
        this.list.style.marginLeft = this.position + 'px';
    };

    slideLeft = () =>{
        this.position += this.width * this.count;
        // on the last/first position of slider it changes to the first/last
        if(this.position === this.oneSlide){
            this.position = -this.twoSlides;
        }
        this.list.style.marginLeft = this.position + 'px';
    }

    addEventsNode = (nodeMain) =>{
        const touchSurface = nodeMain;
        let startX,
            dist;

        touchSurface.addEventListener('mouseover',() =>{
            clearInterval(this.interval);
        });
        touchSurface.addEventListener('mouseout', () =>{
            this.interval = setInterval(this.slideRight,4000);
        });


        touchSurface.addEventListener('mousedown', (e) =>{
            e.preventDefault();
            startX = e.pageX;
            dist = 0;
            console.log('mousedown' + startX);
        }, false)


        touchSurface.addEventListener('mouseup',(e) => {
            e.preventDefault();
            dist = e.pageX - startX;
            console.log('mouseup dist' + dist);
            if(dist<0){
                this.slideRight();
            }
            if(dist>0)
            {
                this.slideLeft();
            }
        }, false)

    }
}

class LastPortfolioSlider extends Slider{
    constructor(width,count,node) {
        super(width,count,node);
        this.liArr = this.liList;
        this.setEvents();
    }
    setUpMotion = (li) => {
        li.addEventListener('mouseover', () => {
            li.style.marginBottom = '20px';
        })
        li.addEventListener('mouseout', () => {
            li.style.marginBottom = '10px';
        })
    }
    setShadow = (li) => {
        li.addEventListener('mouseover', () => {
            li.style.boxShadow = '0px 10px 5px grey';
        })
        li.addEventListener('mouseout', () => {
            li.style.boxShadow = 'none'
        })
    }
    setEvents = () =>{
        this.liArr.forEach((el)=> {
            this.setUpMotion(el);
            this.setShadow(el);
        })
    }

}

class TestimonialsSlider extends Slider{
    constructor(width,count,node) {
        super(width,count,node);
        this.slider2 = this.slider;
        this.liArr = this.liList;
        this.setEvents();
    }
    setScale = (li) => {
        li.addEventListener('mouseover', () => {
            li.style.transform = 'scale(1.1)';
        })
        li.addEventListener('mouseout', () => {
            li.style.transform = 'scale(1)';
        })
    }
    setBorder = (slider) => {
        slider.addEventListener('mouseover', () => {
            slider.style.border = '3px solid white';
        })
        slider.addEventListener('mouseout', () => {
            slider.style.border = 'none';
        })
    }
    setEvents = () =>{
        this.liArr.forEach((el)=> {
            this.setScale(el);
        })
        this.setBorder(this.slider2);
    }
}
let lastPortfolioNode=document.querySelector('.latest-portfolio__boxes');
let btnRight = document.querySelector('.latest-portfolio__button-right');
let btnLeft = document.querySelector('.latest-portfolio__button-left');
let lastPortfolioSlider = new LastPortfolioSlider(402,3,lastPortfolioNode);
lastPortfolioSlider.addEventsBtn(btnRight,btnLeft);

let testimonialsNode =document.querySelector('.testimonials__person-box');
let btnR = document.querySelector('.testimonials__button-right');
let btnL= document.querySelector('.testimonials__button-left');

let testimonialsSlider = new TestimonialsSlider(605,1,testimonialsNode);
testimonialsSlider.addEventsBtn(btnR,btnL);








