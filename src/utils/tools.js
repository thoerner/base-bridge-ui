export function shortenAddress (address, chars = 4) {
    if (!address) {
        return ''
    }
    const parseAddress = (address) => {
        if (address.length < chars * 2 + 2) {
            return {
                prefix: address.slice(0, 2),
                suffix: address.slice(-2),
            }
        }
        return {
            prefix: address.slice(0, chars + 2),
            suffix: address.slice(-chars),
        }
    }
    const parsed = parseAddress(address)
    return `${parsed.prefix}...${parsed.suffix}`
}

export function amountToBigInt(amount) {
    let bigInt = BigInt(amount * 10 ** 18)
    return bigInt
}

export function bigIntToAmount(bigInt) {
    let amount = Number(bigInt)
    amount = amount / 10 ** 18
    // need to round to 5 decimal places
    amount = (Math.floor(amount * 100000) / 100000).toFixed(5)
    return amount
}