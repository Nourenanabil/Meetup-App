import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from 'react-router-dom'

function NewMeetUpPage() {

    const history = useHistory();

    function AddMeetupHandler (meetupData) {

        fetch("https://meetup-app-756f9-default-rtdb.firebaseio.com/meetups.json",
        {
            method : 'POST',
            body : JSON.stringify(meetupData),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(()=>{
            history.replace('/')
        }); 
    }

    return (
    <section>
        <h1>New MeetUp</h1>
        <NewMeetupForm onAddMeetup = {AddMeetupHandler}/>
    </section>
    );
}

export default NewMeetUpPage