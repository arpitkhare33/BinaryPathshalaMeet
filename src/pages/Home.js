import MeetingCard from "../components/Meetings/MeetingCard";
import './meet.css';
import Welcome from "../images/welcome.svg";
import NoMeetings from "../images/nomeetings.jpg"
import { useState, useEffect } from "react";
// import Moment from "react-moment";
import moment from "moment";
function Home(){
    const [meetings, setMeeting] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
    fetch("https://binarypathshalameetings-default-rtdb.firebaseio.com/meetings.json")
    .then(response => response.json()).then(
        data => {
            const meetings = [];
            for(const key in data) {
                const meeting = {
                    'Id': key,
                    ...data[key]
                    
                }
                meetings.push(meeting);
            }
            
            setMeeting(meetings);
            console.log(meetings);
            setLoading(false);
        }
    )
    },[]);
    return (
        <div>
            
            <div className="container text-center my-5">
                <h1 className="title mt-1">Welcome to Binary Pathshala Meetings</h1>
                <p className="desc">Foster meaningful relationships with events, newsletters, and community analytics</p>
                <div className={loading? 'loading': 'd-none'}>
                    <div className='loading-animation'>
                        page is loading
                    </div>
                
                </div>
            </div>
            
            <div className= {meetings.length === 0 ? 'container text-center': 'd-none'}>
                
                {/* <img src={NoMeetings} alt="Welcome" className="welcome-img" /> */}
                
                <img src={NoMeetings} alt="No Meetings" className="no-meetings" />
                <p>No Meeetings Available</p>
            </div>
            <div>
                <div className="meetings-container">
                    {
                        meetings.filter((meeting) => {
                            let date = new Date();
                            let current = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
                            let today = moment(current);
                            let meetingDate = moment(meeting.Date);
                            console.log("Today date:" + today);
                            console.log("Meeting date:" + meetingDate);
                            if (meetingDate.isSameOrAfter(today)){
                                return meeting;
                            }

                        }).map(meeting=>{
                            let date = moment(meeting.Date).format("MMMM Do, YYYY");
                            return <MeetingCard  title={meeting.Title} desc = {meeting.Description} date = {date} img = {meeting.Image} />
                        })
                    }
                </div>
            </div>
        </div>
        
    );
}

export default Home;