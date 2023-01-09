import '../ScrollButton/ScrollButton.scss'
import ScrollToTop from "react-scroll-to-top";

function ScrollButton() {

    return (
        <div className='scrollbutton_container'>
            <ScrollToTop
                smooth
            />
        </div>
    );
}

export default ScrollButton;
