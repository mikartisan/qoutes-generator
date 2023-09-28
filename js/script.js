var video = document.getElementById('video');
var content = document.getElementById('content');
var quoteElement = document.getElementById('quote');
var flowerImage = document.getElementById('flower').querySelector('img');

var flowerImages = [
    "images/flower/1.PNG",
    "images/flower/2.PNG",
    "images/flower/3.PNG",
    "images/flower/4.PNG",
    "images/flower/5.PNG",
    "images/flower/6.PNG",
    "images/flower/7.PNG",
    "images/flower/8.PNG",
    "images/flower/9.PNG",
    "images/flower/10.PNG",
    "images/flower/11.PNG",
    "images/flower/12.PNG",
    "images/flower/13.PNG",
    "images/flower/14.PNG",
    "images/flower/15.PNG",
    "images/flower/16.PNG",
    "images/flower/17.PNG",
    "images/flower/18.PNG",
    "images/flower/19.PNG",
    "images/flower/20.PNG",
    "images/flower/21.PNG",
    "images/flower/22.PNG",
    "images/flower/23.PNG",
    "images/flower/24.PNG",
    "images/flower/25.PNG",
    "images/flower/26.PNG",
    "images/flower/27.PNG"
]

// Array of quotes
var quotes = [
    "A ship is safe in harbor, but that’s not what ships are for.",
    "We suffer more often in imagination than in reality.",
    "Be as you wish to seem.",
    "Happiness is to be found along the way, not at the end of the road.",
    "Loneliness does not come from having no one around us but instead being unable to communicate the things that matter most to us.",
    "The only hypocrite I like is myself.",
    "Have you ever noticed that anybody driving slower than you is an idiot, and anyone going faster than you is a maniac?",
    "There is considerable overlap between the intelligence of the smartest bears and the dumbest tourists.",
    "There's a moment in the future where you are remembered one last time.",
    "Never quit, make them fire you.",
    "The master has failed more times than the beginner has even tried.",
    "It is possible to make no mistakes and lose. That is not failure, that is life.",
    "Every lie we tell incurs a debt to the truth. Sooner or later that debt is paid.",
    "Even the finest sword plunged into salt water will eventually rust.",
    "When you do things right, people won't be sure you've done anything at all.",
    "If you have a problem, and then you spend a bunch of energy worrying and fretting about it, then you have two problems.",
    "The only reason you should look into your neighbor’s bowl is to make sure they have enough to eat.",
    "I wish there was a way to know you're in the good old days before you've actually left them.",
    "Finally, I understand. Home isn't where you rest. It's what you fight for.",
    "If you look for the darkness that's all you will ever see, but if you look for the light often you will find it.",
    "Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.",
    "Happiness can be found in even the darkest of times, if one just remembers to turn on the light.",
    "People say nothing is impossible but I do nothing every day.",
    "Blowing out someone else’s candle doesn’t make yours shine brighter.",
    "A straight line may be the shortest distance between two points, but it is by no means the most interesting.",
    "It is not our abilities that show who we truly are. It is our choices.",
    "Life happens wherever you are, whether you make it or not.",
    "If you don't sacrifice for what you want, what you want becomes the sacrifice.",
    "Sticks and stones can break your bones, but words can break your heart.",
    "Don't laugh at the way someone mispronounced something, it usually means they learnt it by reading.",
    "Love is at the root of all things, all learning, all experiences. Love or the lack of it.",
    "Life moved pretty fast. If you don’t stop and look around once in a while, you could miss it.",
    "The future is always built on the past, even if we don't get to see it.",
    "Always try to be nice, never fail to be kind.",
    "Believe you can, and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "You are never too old to set another goal or to dream a new dream.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "The only person you are destined to become is the person you decide to be.",
    "Obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "Don't be afraid to give up the good to go for the great.",
    "The road to success and the road to failure are almost exactly the same.",
    "The best revenge is massive success.",
    "In the middle of every difficulty lies opportunity.",
    "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "Opportunities don't happen. You create them.",
    "Your time is now. Start where you stand and never back down.",
    "Success is not in what you have, but who you are.",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "You miss 100% of the shots you don't take.",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    "Do what you can, with what you have, where you are.",
    "The secret of getting ahead is getting started.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Dream big and dare to fail.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "If you want to achieve greatness stop asking for permission.",
    "Believe you can and you're halfway there.",
    "The greatest wealth is to live content with little.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "One day, I'm gonna have everything I prayed for. I really believe it.",
    "Out of stock na po tayo sa motivational qoutes, Kapag may problema ka, kaya mo na yan, malaki kana",
    "The opposite of love is not hate, but indifference.",
];

// Function to select and display a random quote
function displayRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    randomQuote = '"' + randomQuote + '"';

    quoteElement.innerHTML = '';

    // Create a single span for the entire quote
    var quoteSpan = document.createElement('span');
    quoteSpan.textContent = randomQuote;
    quoteElement.appendChild(quoteSpan);

    // Apply animation to the entire quote
    quoteSpan.style.animation = `fade-in 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
}

// Function to select and display a random flower image
function displayRandomFlowerImage() {
    var randomIndex = Math.floor(Math.random() * flowerImages.length);
    var randomImageSrc = flowerImages[randomIndex];

    flowerImage.src = randomImageSrc;
}

// Add an event listener to detect when the video has ended
video.addEventListener('ended', function () {
    document.getElementById('loader-container').style.display = 'none';
    displayRandomQuote();
    content.style.display = 'block';
    document.body.style.overflow = 'auto';
});

// Display a random quote when the page loads
displayRandomQuote();
displayRandomFlowerImage();