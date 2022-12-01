
import './App.css';
import { useState } from 'react'
import { type } from '@testing-library/user-event/dist/type';
import Activity from './Components/Activity';

function App() {

  const [activity, setActivity] = useState({
    activity: '',
    key: '',
    participants: null,
    type: '',
    link: ''
  })


  async function getActivity() {
    try {
      let response = await (await fetch('http://www.boredapi.com/api/activity?')).json()
      console.log(response)
      setActivity(response)
      console.log('act', activity)
    }
    catch (error) {
      console.log('Error:', `${error}`)
    }
  }


  return (
    <div className="App">
      <h1>Bored?</h1>
      <h2>Click here to get a suggestion on how to kill some time.</h2>
      <button onClick={getActivity}>click</button>
      <div className='container'>
        <Activity activity={activity} />
      </div>

    </div>
  );
}

export default App;
