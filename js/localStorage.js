localStorage = localStorage || {};
for (i = 0; i < 11; i++) {
    var rand = Math.floor((Math.random() * 100) + 1);
    switch (true) {
        case (rand < 10):
            localStorage.setItem("AB", "A");
            console.log("A: rand < 10: " + rand);
            break;
        case (rand > 9 && rand < 20):
            localStorage.setItem("AB", "B");
            console.log("B: rand < 20: " + rand);
            break;
        case (rand > 19 && rand < 30):
            localStorage.setItem("AB", "A");
            console.log("A: rand < 30: " + rand);
            break;
        case (rand > 29 && rand < 40):
            localStorage.setItem("AB", "B");
            console.log("B: rand < 40: " + rand);
            break;
        case (rand > 39 && rand < 50):
            localStorage.setItem("AB", "A");
            console.log("A: rand < 50: " + rand);
            break;
        case (rand > 49 && rand < 60):
            localStorage.setItem("AB", "B");
            console.log("B: rand < 60: " + rand);
            break;
        case (rand > 59 && rand < 70):
            localStorage.setItem("AB", "A");
            console.log("A: rand < 70: " + rand);
            break;
        case (rand > 69 && rand < 80):
            localStorage.setItem("AB", "B");
            console.log("B: rand < 80: " + rand);
            break;
        case (rand > 79 && rand < 90):
            localStorage.setItem("AB", "A");
            console.log("A: rand < 90: " + rand);
            break;
        case (rand > 89 && rand < 100):
            localStorage.setItem("AB", "B");
            console.log("B: rand < 100: " + rand);
            break;
        case 100:
            localStorage.setItem("AB", "A");
            console.log("A: rand == 100: " + rand);
            break;
    }
}
console.log("Getting localStorage key for 'AB': "+localStorage.getItem("AB"));
console.log("Removing localStorage key for 'AB': "+localStorage.removeItem("AB"));
console.log("Getting localStorage key for 'AB': "+localStorage.getItem("AB"));