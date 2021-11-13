function showVerticalMessage(string) {
    if (string.startsWith("м")) {
        string = string[0].toUpperCase() + string.slice(1);
    }
    let more = string.length > 10 ? 10 : string.length;
    for (let i = 0; i < more; i++) {
        console.log(string[i]);
    }
}
showVerticalMessage('марафон');
showVerticalMessage('Не марафон, а марафонище');