import { useRef } from "react";
import MeetingCard from "../components/Meetings/MeetingCard";
import './meet.css'
import { useNavigate } from "react-router-dom";
function AddMeeting(){
    const navigate = useNavigate();
    const meetingsRef = useRef();
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const imgInputRef = useRef();
    const dateInputRef = useRef();
    function submitHandler(event){
        
        event.preventDefault();
        const title = titleInputRef.current.value;
        const img = "https://source.unsplash.com/1600x800/?"+ imgInputRef.current.value;
        const description = descriptionInputRef.current.value;
        const date = dateInputRef.current.value;
        const meetingDetails = {'Title': title, 'Description': description, 'Image': img, 'Date': date}
        console.log(meetingDetails);
        fetch("https://binarypathshalameetings-default-rtdb.firebaseio.com/meetings.json", {
            method: 'POST',
            body: JSON.stringify(meetingDetails),

        }).then(() => {
            navigate('/', {replace : true});
        });
    }
    return (
        <div>
        <div className="container text-center">
            <h1 className="title mt-5">Create New Meeting</h1>
            {/* <p className="desc">Foster meaningful relationships with events, newsletters, and community analytics</p> */}
            {/* <button className="btn mt-1">Create Meeting</button> */}
        </div>
        <div className="container text-center mt-3">
            <form className="meetings-form" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="meetingTitle">Meeting Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter the meeting title" name="meetingTitle" ref={titleInputRef}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="meetingTitle">Image Keyword</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter the image keyword" name="meetingTitle" ref={imgInputRef}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="meetingTitle">Meeting Date</label>
                    <input type="date" className="form-control" id="title" placeholder="Enter the meeting date" name="meetingTitle" ref={dateInputRef}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="meetingTitle">Meeting Desc</label>
                    <textarea type="text" rows="5" className="form-control" id="title" placeholder="Enter the meeting desc" name="meetingTitle" ref={descriptionInputRef}></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" placeholder="Submit" value="Add Meeting" className="btn" />
                </div>
                
                
            </form>
        </div>
        </div>
    );
}


export default AddMeeting;