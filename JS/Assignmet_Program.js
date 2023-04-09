const form = document.getElementById("event-search-form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent default form submission behavior

  // handle form submission here
  const filterValue = document.getElementById("filterTitle").value;
  console.log(filterValue);
});




const cardsContainer = document.getElementById('cards-container');
const filterTitleInput = document.getElementById('filterTitle');
const filterDateInput = document.getElementById('filterDate');
const filterExcerptInput = document.getElementById('filterExcerpt');

fetch('/JSON/Assignmet_Program.json')
  .then(response => response.json())
  .then(cardData => {
    let filteredCardData = cardData;

    filterTitleInput.addEventListener('input', () => {
      const filterTitle = filterTitleInput.value.toLowerCase();
      filteredCardData = cardData.filter(card => card.title.toLowerCase().includes(filterTitle) || card.excerpt.toLowerCase().includes(filterTitle));
      renderCards(filteredCardData);
    });

    renderCards(filteredCardData);
  })
  .catch(err => console.error(err));

function renderCards(cardData) {
  cardsContainer.innerHTML = '';
  for (let i = 0; i < cardData.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    cardsContainer.appendChild(card);

    const cardTop = document.createElement('div');
    cardTop.classList.add('card-top');
    card.appendChild(cardTop);

    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', '/Images/java_Background.jpg');
    cardImg.setAttribute('alt', 'Blog Name');
    cardTop.appendChild(cardImg);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    card.appendChild(cardInfo);

    const title = document.createElement('h2');
    title.innerText = cardData[i].title;
    cardInfo.appendChild(title);

    const excerpt = document.createElement('p');
    excerpt.classList.add('excerpt');
    excerpt.innerText = cardData[i].excerpt;
    cardInfo.appendChild(excerpt);

    const cardBottom = document.createElement('div');
    cardBottom.classList.add('card-bottom', 'flex-row');
    card.appendChild(cardBottom);
    
    const openBtn = document.createElement('a');
    openBtn.setAttribute('href', "/HTML/Assignment_Program/"+cardData[i].fileId+".html");
    openBtn.setAttribute('target', '_blank');
    openBtn.classList.add('View_Code_Button');
    openBtn.innerText = 'View Code';
    cardBottom.appendChild(openBtn);

  }
}

