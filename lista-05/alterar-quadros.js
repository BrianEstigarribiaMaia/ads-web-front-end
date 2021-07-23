function button1() {
    var element = document.getElementById('q1');
    element.style.backgroundColor = 'blue';
}
function button2() {
    var element = document.getElementById('q2');
    element.style.color = 'blue';
}
function button3() {
    var element = document.getElementById('q1');
    element.style.backgroundColor = 'red';
    
    element = document.getElementById('q2');
    element.style.backgroundColor = 'red';
}
function button3Seletor() {
    var elements = document.querySelectorAll("#q1,#q2");
    var i;
    for (i = 0; i < elements.length; i++)
        elements[i].style.backgroundColor = 'red';
}
function button4() {
    var element = document.getElementById('q3');
    element.style.border = '1px solid green';
}
function button5() {
    var elements = document.querySelectorAll("#q3,#q4");
    for (var i = 0; i < elements.length; i++)
        elements[i].style.backgroundColor = 'red';
}
function button6() {
    var elements = document.getElementsByTagName('td');
    var i;
    for (i = 0; i < elements.length; i++)
        elements[i].style.fontSize = '24px';
}