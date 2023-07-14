export const capitalizeFirstLetter = (value) => {
    if (!value) return ''
    return value = value.charAt(0).toUpperCase() + value.slice(1)
}

