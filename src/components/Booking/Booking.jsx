import './Booking.css'
import { Form, Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { FcHome } from "react-icons/fc";

const Booking = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    
    const book = () => toast.success('Successfully Room Booked!',{
        position: "top-right",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    
    return (
        <div onSubmit={book} className='container'>
            <h4>Book Now!</h4>
            <h6><FcHome style={{fontSize:'22px'}}/> A Home Away From Home Choose Your Perfect Stay</h6>
            <p>Quick, Simple, No Reservation Cost, Easy to Use</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group controlId="formBasicCheckIn">
                    <Form.Label>Check-in Date</Form.Label>
                    <Form.Control type="date" required />
                </Form.Group>

                <Form.Group controlId="formBasicCheckOut">
                    <Form.Label>Check-out Date</Form.Label>
                    <Form.Control type="date" required />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    Book Now
                </Button>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Booking;
