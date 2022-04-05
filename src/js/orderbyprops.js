export default function orderByProps(obj, arr) {
    const firstArray = [];
    const secondArray = [];
    arr.forEach(element => {
        firstArray.push({ key: element, value: `${obj[element]}` });
        delete obj[element];
    });
    for (const prop in obj) {
        secondArray.push({ key: prop, value: `${obj[prop]}` });
    }
    secondArray.sort((a, b) => {
        if (a.key < b.key) return -1;
        if (a.key < b.key) return 1;
    });
    return firstArray.concat(secondArray);
}