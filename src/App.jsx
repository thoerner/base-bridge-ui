import { useState } from 'react'
import ConnectButton from './components/ConnectButton.jsx'
import BridgeInterface from './components/BridgeInterface.jsx'
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
      <p>Bridging will send ETH directly to the official Base Bridge contract at {' '} 
      <a href='https://etherscan.io/address/0x49048044d57e1c92a77f79988d21fa8faf74e97e' target='_blank' rel='noreferrer'>
        0x49048044d57e1c92a77f79988d21fa8faf74e97e
      </a>.</p>
      <p><strong>Please allow five minutes for the bridge to process your transaction.</strong></p>
      <p>For more information, read the 
        <a href='https://docs.base.org/tools/bridges' target='_blank' rel='noreferrer'> Base Bridge documentation</a>.
      </p>
      <p>Source code for this UI is available on
        <a href='https://github.com/thoerner/base-bridge-ui' target='_blank' rel='noreferrer'> Github</a>.
      </p>
      <p>
        A <a href='https://crypt0potam.us'>crypt0potamus</a> project.
      </p>
    </div>
  )
}

export default App
