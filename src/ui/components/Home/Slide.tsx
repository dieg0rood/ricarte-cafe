import ImageSlider from "./ImageSlider";

const slides = [
{url:'http://localhost:3000/images/slide1.jpg',title: 'Slide 1'},
{url:'http://localhost:3000/images/slide1.jpg',title: 'Slide 2'},
{url:'http://localhost:3000/images/slide1.jpg',title: 'Slide 3'},

];

const Slider = () => {
    return(
        <div className="sliderMask">
            <ImageSlider slides={slides} />
        </div>
    );
};



export default Slider