function submit() {
    let input = document.getElementById("input").value;
    let stringArray = input.split('');
    let stringArrayRev = stringArray.reverse();
    let joinString = stringArrayRev.join('');

    if (input === '') {
        document.getElementById("res").innerHTML = '';
        return;
    } else if (input === joinString) {
        document.getElementById("res").innerHTML = `${input} is Palindrome`;
    } else {
        document.getElementById("res").innerHTML = `${input} is not Palindrome`;
    }

    document.getElementById("input").value = '';
}
