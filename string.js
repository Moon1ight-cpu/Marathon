function showVerticalMessage(string) {

    if (string[0] == 'м') {
        string = 'M' + string.slice(1);
    }
    let more = string.length > 10 ? 10 : string.length;
    for (let i = 0; i < more; i++) {
        console.log(string[i]);
    }
}
showVerticalMessage('марафон');
showVerticalMessage('Не марафон, а марафонище');