var navBar = document.createElement('div');
navBar.className = "row";
document.body.appendChild(navBar);

var logoSpace = document.createElement('div');
logoSpace.className = "col-4 pb-5"
logoSpace.style.backgroundColor = "#859C0F";
navBar.appendChild(logoSpace);

var logo = document.createElement('div');
logo.innerHTML = "<img src='../img/pawPrint.png' width='50px' height='auto'>";
logo.className = "m-2 pt-3 px-0";
logoSpace.appendChild(logo);

var title = document.createElement('div');
title.className = "col-8 pb-5 pt-3"
title.innerText = "Up for Adoption";
title.id = "title";
title.style.backgroundColor = "#859C0F";
navBar.appendChild(title);

document.body.style.backgroundColor = "#EDEDED";

function Dog(someArray, name, image, sex, color, breed, age) {
    this.name = name;
    this.image = image;
    this.breed = breed;
    this.age = age;
    this.color = color;
    this.sex = sex;
    someArray.push(this);
    this.populateHTML = function () {
        var container = document.createElement('div');
        var name = document.createElement('h3');
        name.innerText = this.name;
        container.style.backgroundColor = "#EDEDED";
        name.className = "text-center"
        container.className = "d-inline-block col-xs-12 col-sm-6 col-md-6 col-xl-4 animated fadeInUp m-0";
        container.id = "container";
        document.body.appendChild(container);
        var item = document.createElement('div');
        item.style.backgroundImage = "url(" + this.image + ")";
        item.style.backgroundRepeat = "no-repeat";
        item.style.backgroundSize = "cover";
        item.id = "item";
        item.className = "m-0"
        item.style.border = "1px solid black"
        container.appendChild(item);
        container.appendChild(name);
        var info = document.createElement('div');
        info.className = "text-center";
        info.innerText = '' + this.age + ' old ' + this.breed;
        container.appendChild(info);
    };
};


var myArray = [];

var Piglet = new Dog(myArray, 'Piglet', 'img/chi.jpg', 'F', 'brown', 'Chihuahua Mix', '5yr');

var Roger = new Dog(myArray, 'Roger', 'img/husky.jpg', 'M', 'White', 'Husky Mix', '6yr');

var Atlas = new Dog(myArray, 'Atlas', 'img/rot.jpg', 'M', 'Black & Brown', 'Rotweiler', '5mo');

var Stormy = new Dog(myArray, 'Stormy', 'img/poodle.jpeg', 'F', 'White', 'Poodle Mix', '2yr');

var Gypsy = new Dog(myArray, 'Gypsy', 'img/pitbull.jpg', 'M', 'Black & White', 'Pitbull', '1yr');

var Emma = new Dog(myArray, 'Emma', 'img/shepard.jpg', 'M', 'Black & Black & Brown', 'Shepard Mix', '2mo');

for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i].image);
    myArray[i].populateHTML();
}


var footer = document.createElement('footer');
footer.className = "col-12 footer p-0";
footer.style.backgroundImage = "url('../img/grass.jpeg')"
footer.style.backgroundRepeat = "repeat";
footer.style.backgroundSize = "contain";
footer.id = "footer";
document.body.appendChild(footer);
