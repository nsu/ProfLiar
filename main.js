var myApp = angular.module('myApp', []);
myApp.factory('Data', function () {
    deck2 = ["Amphibious ____(s)", "Antarctic ____(s)", "Applied ____ology", "Are ____(s) Actually Just Adult ____(s)", "Behavioral ____ology", "Can ____(s) Use Tools?", "Computation via ____(s)", "Conservation of ____(s)", "Creating More Aerodynamic ____(s)", "Criminal ____(s)", "Do____(s) Exist?", "Do ____(s) Feel Pain?", "Evolutionary History of ____(s)", "Fair Distribution of ____(s)", "Famous ____(s) and Their ____(s)", "Feminist ____ Theory", "How the Internet is Fixing ____(s)", "In the Company of ____(s)", "Islamic ____(s)", "Juvenile ____(s)", "Lunar ____(s)", "Marketing to ____(s)", "Marxist ____ Theory", "Mechanical ____(s)", "Medical ____(s)", "Micro____ology", "Military Use of ____(s)", "Molecular ____ology", "Musical ____ (s)", "My Time On ____ Island", "Myth and Fable Among ____(s)", "Optimization of ____(s)", "Outmoded ____ Paradigms", "Philosophy of ____(s)", "Prehistoric ____(s)", "Proof of the Existence of ____", "Quantum ____(s)", "Robotic ____(s)", "Schizophrenia in ____s", "Space-____ (s)", "Statistical ____istics", "Superconductive ____(s)", "Synthetic ____(s)", "The Habits of Highly Effective ____(s)", "The Law of Large ____(s)", "The Law of ____(s)", "The Periodic Table of ____(s)", "The Phases of ____", "The Source of ____(s)", "The Subtle Difference Between ____(s) and", "The ____ Cycle", "The ____ Hypothesis", "The ____ Problem", "The ____centric view of Cosmology", "Theoretical ____ Science", "Urban ____(s)", "Use of Language by ____(s)", "Wave-____ duality", "When ____(s) Roamed the Earth", "____(s)", "____(s), Nature\\u2019s ____(s)", "____(s) in Captivity", "____(s) in Christianity", "____(s) in the Media", "____-____ hybridization", "____ Aging", "____ Algorithms", "____ Cognition", "____ Conservation", "____ Demographics", "____ Economics", "____ Ethics", "____ Evolutionary Psychology", "____ Funeral Rites", "____ Genetics", "____ Homeopathy", "____ Informatics", "____ Legal Codes", "____ Linguistics", "____ Mathematics", "____ Mating Rituals", "____ Metaphysics", "____ Midwifery", "____ Nutrition", "____ Oppression", "____ Paleontology", "____ Parasitology", "____ Poetry", "____ Politics", "____ Power Generation Systems", "____ Reproduction", "____ Seismology", "____ Survival Strategy", "____ Tectonics", "____ Theory", "____ ecology", "____ engineering", "____ology", "____ physiology", "____tronics"];
    deck1 = ["Acne", "Air", "Airplane", "Alien", "American", "Atom", "Attractiveness", "Australia", "Baby", "Baldness", "Bank", "Bat", "Bear", "Beauty", "Bird", "Blubber", "Boat", "Bone", "Britain", "Burglar", "Buttocks", "Cake", "Calculator", "Cat", "Caveman", "China", "Clown", "Coffee", "Comedy", "Computer", "Corgi", "Corn", "Cow", "Cowboy", "Death", "Dictator", "Dolphin", "Drama", "Dress", "Ear", "Earth", "Electricity", "Email", "Enemy", "Father", "Female", "Fire", "France", "Fruit", "Gas", "Gun", "Hairball", "Hamburger", "House", "Human", "Insect", "Japan", "Jedi", "Laser", "Lincoln", "Liquid", "Male", "Mars", "Missile", "Money", "Moon", "Mother", "Mouth", "Mustache", "Napoleon", "Navy", "Ninja", "Octopus", "Ottoman", "Pants", "Pie", "Plasma", "Police", "President", "Priest", "Rattlesnake", "Robot", "Samurai", "Sandwich", "Scientist", "Solid", "Sponge", "Star", "Submarine", "Sun", "Surgeon", "Sword", "T. Rex", "Teenager", "Time Traveler", "Tofu", "Venus", "Viking", "Walrus", "Zombie"];
    return {deck2:deck2, deck1:deck1, message: null, count:60, buttontext:"Start"};
});

function FirstCtrl($scope, $timeout, Data){
    $scope.data = Data;

    $scope.changeMessage = function () {
        $scope.data.message = $scope.data.deck2[Math.floor(Math.random()*$scope.data.deck2.length)];
        item = $scope.data.deck1[Math.floor(Math.random()*$scope.data.deck1.length)];
        $scope.data.message = $scope.data.message.replace("____", item);
    };

    $scope.onTimeout = function(countDownIndex){
        $scope.counter = $scope.counter - 0.25;
        if ($scope.counter === 0) {
            return;
        }
        mytimeout = $timeout($scope.onTimeout,250);
    };

    $scope.startCounter = function(){
        $scope.data.currentCountdown++;
        $scope.counter = $scope.data.count;
        var mytimeout = $timeout($scope.onTimeout,250);
    };

    $scope.newRound = function(){
        $scope.data.buttontext = "Give me another!";
        $scope.changeMessage();
        $scope.startCounter();
    };
}
