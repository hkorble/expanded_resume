import logo from './logo.svg';
import './App.css';
import HomePage from './content/home-page';
import Hunter from './Images/Hunter_Casual_Photo_1-removebg-preview.png';


function App() {
  return (
    <div className="App">
      <div className='Hunter'>
        <div><img src={Hunter} /></div>
      <div className='InfoHunter'><h2>Hunter Korble</h2> <p>September 2023 Snapshot</p>
      <div className='Links'>
      <a href="https://www.instagram.com/hunter_korble/" target="_blank" alt="No Website">Instagram</a><br></br>
      <a href="https://www.tiktok.com/@hunter_korble" target="_blank" alt="No Website">Tik Tok</a><br></br>
      <a href="https://www.linkedin.com/in/hunter-korble-963926225/" target="_blank" alt="No Website">LinkedIn</a><br></br>
      <a href="https://linktr.ee/hkorble" target="_blank" alt="No Website">Linktree</a>

      </div>
      </div>
      </div>
      
      
      <HomePage/>
    
    </div>
  );
}

export default App;
