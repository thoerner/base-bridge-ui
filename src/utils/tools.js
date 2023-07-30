export const shortenAddress = (address, chars = 4) => {
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
