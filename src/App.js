import logo from './logo.svg';
import './App.css';
import './style.css';
import ProfileComponent from './profile/ProfileComponent';
import Picture from './pic.jpg'

const handleName=(name)=>alert('the name of the profile user is${ name}');

function App() {
  return (
    <div className="App">
      <ProfileComponent
        fullname="My name is Bacem Souibgui"
        bio="This is my biography"
        profession="I am an energy engineer and a full stack developer"
        handleName={handleName}

      />
      <img className='imm' src={Picture}alt=""/>
    </div>
    
      

  );
}


export default App;
