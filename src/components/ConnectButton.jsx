import { getDefaultProvider, BrowserProvider } from 'ethers'
import { shortenAddress } from '../utils/tools.js'
import toast from 'react-hot-toast'

const ConnectButton = ({address, setAddress, setProvider, setSigner, setBalance}) => {
    const connectWallet = async () => {
        let signer = null
        let provider = null
        let balance = null
        if (window.ethereum == null) {
            toast.error('No Ethereum wallet found. Please install Metamask.')
            provider = getDefaultProvider()
            setProvider(provider)
        } else {
            provider = new BrowserProvider(window.ethereum)
            signer = await provider.getSigner()
            balance = await provider.getBalance(signer.address)
            console.log(balance)
            setProvider(provider)
            setSigner(signer)
            setAddress(signer.address)
            setBalance(balance)
            toast.success('Wallet connected.')
        }
    }
    return (
        <div className='connect-button'>
            <button onClick={connectWallet}>{address ? shortenAddress(address) : 'Connect Wallet'}</button>
        </div>       
    )
}

export default ConnectButton