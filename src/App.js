import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import Button from './Button';

function App() {
  const [data, setData] = useState({})
  const [submit, setSubmit] = useState(false)
  const sections = [
    "food",
    "name",
    "adjective",
    "noun",
    "noun2",
    "verb1",
    "verb2",
    "verb3",
  ]

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value})
  const handleSubmit = e => setSubmit(true)
  return !submit ? (
    <div className="App">
      <form>
        {
          sections.map(el => <input name={ el } id={ el } key={el} value={data[el]} onChange={handleChange} />)
        }

      </form>
      <Button id="submit-button" onClick={handleSubmit} disabled={ Object.keys(data).length < 8 }>SUBMIT</Button>
    </div>
  ) : (
    <div className='result'>
      It was { data.food } day at school, and { data.name } was super { data.adjective } for lunch. 
      But when she went outside to eat, a { data.noun } stole her { data.food } ! 
      { data.name } chased the { data.noun } all over school. 
      She { data.verb1 }, { data.verb2 }, and { data.verb3 } through the playground. 
      Then she tripped on her { data.noun2 } and the { data.noun } escaped! 
      Luckily, { data.name }’s friends were willing to share their { data.food2 } with her.
    </div>
  );
}

export default App;
