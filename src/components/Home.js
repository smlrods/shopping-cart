import { Link } from 'react-router-dom'
import '../assets/styles/Home.css';

function Home() {
  return (
    <div id='home'>
      <h1>Home</h1>
      <Link to='/shop'><button>visit the shop</button></Link>
    </div>
  );
}

export default Home;
