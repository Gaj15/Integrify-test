import { Link } from "react-router-dom"
const Home = () => {
    return <div style={{textAlign: 'center', width: '60%', margin: '0 auto'}}>
      <h3 style={{color: ' #654321'}}>
        WELCOME TO THE
    </h3>
    <h2 style={{color: ' #654321'}}>
      REACT SAMPLE USER MANAGEMENT SYSTEM
    </h2>
    <hr />

    <p style={{color: '#00008B' }}>
      HERE YOU CAN SEE THE LIST OF ACTIVE USERS AND THEIR DETAILS<br />
      THE SITE IS STILL IN DEVELOPMENT PHASE, MORE FEATURES TO COME
    </p >
    <hr />
    <Link to="/users">
      SEE ACTIVE USERS
    </Link>
    </div>
};

export default Home;