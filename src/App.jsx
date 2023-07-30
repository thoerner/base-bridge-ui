import { useState } from 'react'
import ConnectButton from './components/ConnectButton.jsx'
import BridgeInterface from './components/BridgeInterface.jsx'
import Details from './components/Details.jsx'
import { Toaster } from 'react-hot-toast'
import BaseLogo from './assets/base.svg'
import './App.css'

function App() {
  const [address, setAddress] = useState('')
  const [signer, setSigner] = useState(null)
  const [provider, setProvider] = useState(null)
  const [balance, setBalance] = useState(null)

  return (
    <div className='app'>
      <Toaster />
      <img src={BaseLogo} alt='Base Logo' />
      <h2>Unofficial Bridge UI</h2>
      <ConnectButton address={address} setAddress={setAddress} setSigner={setSigner} setProvider={setProvider} setBalance={setBalance}/>
      <BridgeInterface address={address} signer={signer} balance={balance} />
      <Details />
    </div>
  )
}

export default App
