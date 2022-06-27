import reactsvg from './assets/react.svg'
import './App.scss';
import {languages} from './helper/data'
import {Card} from './components/card/Card'

function App() {
  return (
    <>
    <header>
      <div className='img-container'>
        <img  src={reactsvg} alt="react" />
      </div> 
    </header>
    <main>
      <h1>Languages</h1>
      <article>
      {
        languages.map((item,index)=>{
          return <Card
            key={index}
            {...item}
          />
        })
      }
      </article>
    </main>
    </>
  );
}

export default App;
