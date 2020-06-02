let Anna = {

isAnnHappy: () => {
    let hugRoos = document.getElementById('roos').value;
    let distToAus = document.getElementById('kms').value;
    let pinkDress = document.getElementById('colour').value.toLowerCase();
    let worldSaved = document.getElementById('safety').value;
    let justEaten = document.getElementById('time').value;
    let result;
    let img = document.getElementById("photo");
    document.getElementById('result').style.color = 'rgb(255, 101, 127)';

    if (distToAus == "") distToAus=3478784934;
    if (justEaten == "") justEaten=3478784934;
    if (new Number(hugRoos) > 0) { 
        result = 'HAPPY!';
        img.src = './assets/roos.jpg';
    }
    else if (new Number(distToAus) == 0) { 
        result = 'HAPPY!';
        img.src = './assets/aussie.jpg';
    } 
    else if (pinkDress == 'pink' || pinkDress == 'розовый') { 
        result = 'HAPPY!';
        img.src = './assets/pink.jpg';
    }
    else if (worldSaved >= 5) { 
        result = 'HAPPY!';
        img.src = './assets/safe.jpg';
    }
    else if (new Number(justEaten) < 30) { 
        result = 'HAPPY!';
        img.src = './assets/eaten.jpg';
    } 
    else { 
        result = "WARNING!";
        img.src = './assets/warning.jpg';
        document.getElementById('result').style.color = 'blue';
    }  

    document.getElementById('result').innerHTML="<b>"+result+"</b>"
}
}

/*let enter = (e) => {
    let keyCode = e.keyCode || e.which;
    if (keyCode === 13 || keyCode === 10) {
        Anna.isAnnHappy();
    }
}
const node = document.getElementsById("roos");
node.addEventListener("keyup", function(event) {
if (event.key === "Enter") {
    Anna.isAnnHappy()
}
})*/