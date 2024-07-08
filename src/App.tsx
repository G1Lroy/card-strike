import { CT_Agent } from "./model/agent/ct"

const App = () => {


  const agent = new CT_Agent(1)
  agent.defuse()

  // console.log(agent);


  return (
    <div className='text-red-400'>{agent.currentHealth}</div>
  )
}


export default App
