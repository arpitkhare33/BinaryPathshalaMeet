import ErrorImage from "../images/errorimage.svg";
import './meet.css';
function NotFound(){
    return (
        <div className="container text-center">
            <img src={ErrorImage} alt="NotFound" className="nf-img" />
            <h1 className="title mt-1">Not Found</h1>
            <p className="desc">Foster meaningful relationships with events, newsletters, and community analytics</p>
            <button className="btn mt-1">Home Page</button>
        </div>
    );
}

export default NotFound;