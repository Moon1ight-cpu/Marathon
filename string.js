function showVerticalMessage(string) {

    if (string[0] == 'м') {
        string = 'M' + string.slice(1);
    }

    if (string.length > 10) {
        for (let i = 0; i < 10; i++) {
            console.log(string[i]) + '/n';
        }
        return;
    }
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]) + '/n';
    }
}
showVerticalMessage('марафон');
showVerticalMessage('Не марафон, а марафонище');