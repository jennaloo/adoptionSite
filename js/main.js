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

        //labels name, age, and sex of each animal below the container.
        var info = document.createElement('h6');
        info.innerHTML = "<p> " + this.name + "</p>" +
            "<p>" + this.age + " " + this.sex + "</p>";
        info.className = "text-center p-3"
        info.style.fontFamily = "'Josefin Slab', serif";
        info.style.fontSize = "20px";

        //container for the images
        var container = document.createElement('div');
        container.className = "container-fluid d-inline-block col-xs-12 col-sm-6 col-md-4 col-xl-3 animated fadeIn text-center";
        container.id = "container";
        document.body.appendChild(container);

        //attaches a link to the image container -- links to a product page
        var anchorTags = document.createElement('a');
        anchorTags.setAttribute("href", "" + this.site + "");
        anchorTags.setAttribute("target", "_blank");
        container.appendChild(anchorTags);

        //specifications about how the image looks
        var item = document.createElement('div');
        item.setAttribute("style", "background-image: url('" + this.image + "')");
        item.style.backgroundRepeat = "no-repeat";
        item.style.backgroundSize = "cover";
        item.style.boxShadow = "5px 5px 10px lightgrey";
        item.id = "item";
        item.className = "mx-auto";
        anchorTags.appendChild(item);
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


var Dodger = new Dog(myArray, 'Dodger', 'img/dog.jpg', 'F', 'Black & Black & Brown', 'Shepard Mix', '1mo');

var Fluff = new Dog(myArray, 'Dodger', 'img/fluff.jpg', 'F', 'Black & White', 'Unknown Mix', '3mo');


for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i].image);
    myArray[i].populateHTML();
}


var footer = document.createElement('footer');
footer.className = "col-12 footer p-0";
footer.style.backgroundImage = "url('img/grass.jpeg')"
footer.style.backgroundRepeat = "repeat";
footer.style.backgroundSize = "contain";
footer.id = "footer";
document.body.appendChild(footer);
