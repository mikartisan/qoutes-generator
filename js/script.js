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
];

function fetchAndDisplayQuote() {
    var categories = [
        "age",
        "alone",
        "amazing",
        "anger",
        "architecture",
        "art",
        "attitude",
        "beauty",
        "best",
        "birthday",
        "business",
        "change",
        "communication",
        "computers",
        "cool",
        "courage",
        "dad",
        "dating",
        "death",
        "design",
        "dreams",
        "education",
        "environmental",
        "equality",
        "experience",
        "failure",
        "faith",
        "family",
        "famous",
        "fear",
        "fitness",
        "food",
        "forgiveness",
        "freedom",
        "friendship",
        "funny",
        "future",
        "god",
        "good",
        "government",
        "graduation",
        "great",
        "happiness",
        "health",
        "history",
        "home",
        "hope",
        "humor",
        "imagination",
        "inspirational",
        "intelligence",
        "jealousy",
        "knowledge",
        "leadership",
        "learning",
        "legal",
        "life",
        "love",
        "marriage",
        "medical",
        "men",
        "mom",
        "money",
        "morning",
        "movies",
        "success"
    ];

    var randomIndex = Math.floor(Math.random() * categories.length);
    var randomCategory = categories[randomIndex];
    var api = "https://api.api-ninjas.com/v1/quotes?category=" + randomCategory;

    fetch(api, {
        headers: { 'X-Api-Key': 'YOUR_API_KEY' }
    })
    .then(response => response.json())
    .then(data => {
        var randomQuote = data[0].quote + " - " + data[0].author;

        quoteElement.innerHTML = '';

        var quoteSpan = document.createElement('span');
        quoteSpan.textContent = randomQuote;
        quoteElement.appendChild(quoteSpan);

        quoteSpan.style.animation = `fade-in 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
    })
    .catch(error => console.error('Error fetching quote:', error));
}

function displayRandomFlowerImage() {
    var randomIndex = Math.floor(Math.random() * flowerImages.length);
    var randomImageSrc = flowerImages[randomIndex];

    flowerImage.src = randomImageSrc;
}

video.addEventListener('ended', function () {
    document.getElementById('loader-container').style.display = 'none';
    fetchAndDisplayQuote();
    content.style.display = 'block';
    document.body.style.overflow = 'auto';
});

fetchAndDisplayQuote();
displayRandomFlowerImage();
