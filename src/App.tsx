import CVWebsite from './components/CVWebsite'
import PasswordProtection from './components/PasswordProtection'

function App() {
  return (
    <div className="App">
      <PasswordProtection>
        <CVWebsite />
      </PasswordProtection>
    </div>
  )
}

export default App