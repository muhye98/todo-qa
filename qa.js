'use strict';

let userName = prompt('please enter your name');
alert('Welcome Mr/Ms' + " " + userName)


let number2 = prompt('plese enter your mark')
if (number2 >= Math.floor(0) && number2 <= Math.floor(49)) {
    alert("Yor mark is (F) (you are failed)");
} else
    if (number2 >= Math.floor(50) && number2 <= Math.floor(60)) {
        alert("Yor mark is (D)(you are pass)")
    } else
        if (number2 >= Math.floor(61) && number2 <= Math.floor(70)) {
            alert("Yor mark is (C) (you are pass)")
        } else
            if (number2 >= Math.floor(71) && number2 <= Math.floor(80)) {
                alert("Yor mark is (B) (you are pass)")
            } else
                if (number2 >= Math.floor(81) && number2 <= Math.floor(90)) {
                    alert("Yor mark is (A) (you are pass)")
                } else
                    if (number2 >= Math.floor(91) && number2 <= Math.floor(100)) {
                        alert("Yor mark is (A+) (you are pass)")
                    } else
                        if (number2 < 0 || number2 > 100) {
                            alert('INVALID NUMBER')
                        }

