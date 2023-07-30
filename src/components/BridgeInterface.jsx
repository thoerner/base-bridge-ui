import { useState } from 'react'
import { amountToBigInt, bigIntToAmount } from '../utils/tools.js'
import toast from 'react-hot-toast'

const BridgeInterface = ({ signer, balance }) => {
    const [amount, setAmount] = useState(0)

    const handleAmountChange = (e) => {
        // need to make sure amount is a valid number
        if (isNaN(e.target.value)) {
            toast.error('Please enter a valid number.')
            e.target.value = ''
            return
        }
        setAmount(amountToBigInt(e.target.value))
    }

    const bridge = async (e) => {
        e.preventDefault()
        if (signer == null) {
            toast.error('Please connect your wallet.')
            return
        }
        if (amount === 0) {
            toast.error('Please enter an amount.')
            return
        }
        if (amount > balance) {
            toast.error('Insufficient balance.')
            return
        }
        try {
            const tx = await signer.sendTransaction({
                to: import.meta.env.VITE_BASE_BRIDGE_ADDRESS,
                value: amount,
            })
            console.log(tx)
            toast.success('Transaction sent.')
        } catch (err) {
            if (err.reason === 'rejected') {
                toast.error('Transaction rejected.')
            } 
        }
        
    }

    return (
        <div className='bridge-interface'>
            <form className='bridge-form'>
                <label htmlFor='amount'>Amount: </label>
                <small>Balance: {bigIntToAmount(balance)} ETH</small>
                <input type='text' id='amount' onChange={handleAmountChange} />
                {' '}Mainnet ➡️ Base{' '}
                <button onClick={bridge}>Bridge</button>
            </form>
        </div>
    )
}

export default BridgeInterface