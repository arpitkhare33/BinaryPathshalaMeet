import './Meetings.css'

function MeetingCard(props){
    return (
        
        <div className="meeting-card">
            {console.log(props.date)}
                <img src={props.img} className='card-img' alt={props.img} />
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <p>{props.date}</p>
                <button className='meeting-btn'>Join Meeting</button>
        </div>
    )
}

export default MeetingCard;