const typeErrorMessage = (name, desc) => {
    return `Invalid ${name} Field. ${desc}`
}

const requiredErrorMessage = name => {
    return `${name} Field Cannot Be Empty.`
}

export { typeErrorMessage, requiredErrorMessage }
