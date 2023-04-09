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

fetch('/JSON/Class_Note.json')
  .then(response => response.json())
  .then(cardData => {
    let filteredCardData = cardData;

    filterTitleInput.addEventListener('input', () => {
      const filterTitle = filterTitleInput.value.toLowerCase();
      filteredCardData = cardData.filter(card => card.title.toLowerCase().includes(filterTitle) || card.date.toLowerCase().includes(filterTitle) || card.excerpt.toLowerCase().includes(filterTitle));
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
    cardImg.setAttribute('src', '/Images/PDF Icon.png');
    cardImg.setAttribute('alt', 'Blog Name');
    cardTop.appendChild(cardImg);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    card.appendChild(cardInfo);

    const title = document.createElement('h2');
    title.innerText = cardData[i].title;
    cardInfo.appendChild(title);

    const date = document.createElement('span');
    date.classList.add('date');
    date.innerText = cardData[i].date;
    cardInfo.appendChild(date);

    const excerpt = document.createElement('p');
    excerpt.classList.add('excerpt');
    excerpt.innerText = cardData[i].excerpt;
    cardInfo.appendChild(excerpt);

    const cardBottom = document.createElement('div');
    cardBottom.classList.add('card-bottom', 'flex-row');
    card.appendChild(cardBottom);

    if (cardData[i].CodeOrNot == "0") {
      const openBtn = document.createElement('a');
      openBtn.setAttribute('href', "https://drive.google.com/file/d/" + cardData[i].fileId + "/view?usp=share_link");
      openBtn.setAttribute('target', '_blank');
      openBtn.classList.add('buttonDownload');
      openBtn.innerText = 'Open Note';
      cardBottom.appendChild(openBtn);
    }
    else {
      const openBtn1 = document.createElement('a');
      openBtn1.setAttribute('href', cardData[i].CodeId);
      openBtn1.setAttribute('target', '_blank');
      openBtn1.classList.add('buttonDownload');
      openBtn1.innerText = 'Open Code';
      cardBottom.appendChild(openBtn1);
    }
    
    const downloadBtn = document.createElement('a');
    downloadBtn.setAttribute('href', "https://drive.google.com/uc?export=download&id=" + cardData[i].fileId);
    //downloadBtn.setAttribute('target', '_blank');
    downloadBtn.classList.add('buttonDownload');
    downloadBtn.innerText = 'Download Note';
    cardBottom.appendChild(downloadBtn);
  }
}

