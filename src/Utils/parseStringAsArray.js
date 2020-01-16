module.exports = (stringAsArray) => {
    return stringAsArray.split(",").map(item => item.trim());
}