const catAll = 'all';
const catClassic = 'classic';
const catElectric = 'electric';
const catSpecial = "special";

const guitars = [
  {
    id: 1,
    category: catClassic,
    name: "normal guitar",
    description: "just a normal guitar, nothing more."
  },
  {
    id: 2,
    category: catElectric,
    name: "electric guitar",
    description: "bla bla"
  },
  {
    id: 3,
    category: catElectric,
    name: "black electric guitar",
    description: "bla bla"
  },
  {
    id: 4,
    category: catElectric,
    name: "red electric guitar",
    description: "bla bla"
  },
  {
    id: 5,
    category: catSpecial,
    name: "guitar form hell",
    description: "bla bla"
  },
  {
    id: 6,
    category: catElectric,
    name: "azure electric guitar",
    description: "bla bla"
  },
  {
    id: 7,
    category: catElectric,
    name: "green electric guitar",
    description: "bla bla"
  },
  {
    id: 8,
    category: catElectric,
    name: "small white electric guitar",
    description: "bla bla"
  },
  {
    id: 9,
    category: catElectric,
    name: "blue electric guitar",
    description: "bla bla"
  },
  {
    id: 10,
    category: catElectric,
    name: "white electric guitar",
    description: "bla bla"
  },
  {
    id: 11,
    category: catElectric,
    name: "homemade electric guitar",
    description: "bla bla"
  },
  {
    id: 12,
    category: catElectric,
    name: "purple",
    description: "bla bla"
  },
  {
    id: 13,
    category: catClassic,
    name: "double guitar",
    description: "bla bla"
  },
  {
    id: 14,
    category: catSpecial,
    name: "iron wood guitar",
    description: "bla bla"
  },
  {
    id: 15,
    category: catClassic,
    name: "elegant guitar",
    description: "bla bla"
  },
  {
    id: 16,
    category: catElectric,
    name: "red and white electric guitar",
    description: "bla bla"
  },
  {
    id: 17,
    category: catElectric,
    name: "strong electric guitar",
    description: "bla bla"
  },
  {
    id: 18,
    category: catClassic,
    name: "a folk song guitar",
    description: "bla bla"
  },
  {
    id: 19,
    category: catClassic,
    name: "a very rare guitar",
    description: "bla bla"
  },
  {
    id: 20,
    category: catClassic,
    name: "small guitar",
    description: "bla bla"
  },
  {
    id: 21,
    category: catClassic,
    name: "a well-made guitar",
    description: "bla bla"
  },
  {
    id: 22,
    category: catElectric,
    name: "rock guitar",
    description: "bla bla"
  },
  {
    id: 23,
    category: catClassic,
    name: "a long guitar",
    description: "bla bla"
  },


];

const maxItemPerPage = 5;

function listGuitar() {
  for (i = 0; i < maxItemPerPage; i++) {
    let guitar = getGuitars()[i + (getPageNumber() - 1) * 5];
    if (typeof guitar === "undefined") {
      continue;
    }
    $("#guitar-list").append(formatGuitarItem(guitar));
  }
  $(".list-navigation")
    .append(getNextButton())
    .append(getBackButton());

  $(".category-list")
    .append(getCategoryLink(catAll))
    .append(getCategoryLink(catElectric))
    .append(getCategoryLink(catClassic))
    .append(getCategoryLink(catSpecial));
}

function getGuitars() {
  let cat = getCategory();
  if(cat===catAll){
    return guitars;
  }
  let list = [];
  for (let i = 0; i < guitars.length; i++) {
    let g = guitars[i].category;

    if( g === cat) {
      console.log("match cat:" + cat);
      list.push(guitars[i]);
    }
  }
  return list;
}

function formatGuitarItem(guitar) {
  return `
      <li>
          <h3>` + guitar.name + `</h3>
          <div>
            <img src="image/guitar/` + guitar.id + `.jpg" alt="` + guitar.name + `">
            <p>` + guitar.description + `</p>
          </div>
          <button type="button" onclick="addToBasket(${guitar.id})">Add to basket</button>
      </li>
    `;
}

function getCategoryLink(catName) {
  let cat = '';
  if (getCategory() === catName) {
    cat = catName;
  } else {
    cat = `<a href="index.html?page=1&cat=` + catName + `">` + catName + `</a>`;
  }
  return `<li class="selected">` + cat + `</li>`;
}

function getNextButton() {
  if (getPageNumber() >= getMaxPage()) {
    return '';
  }
  let nextPage = getPageNumber() + 1;
  return formatGuitarListNavigation("Next", "index.html?page=" + nextPage + "&cat=" + getCategory())
}

function getBackButton() {
  if (getPageNumber() === 1) {
    return '';
  }
  let backPage = parseInt(getPageNumber()) - 1;
  return formatGuitarListNavigation("Back", "index.html?page=" + backPage + "&cat=" + getCategory())
}

function getMaxPage() {
  return Math.ceil(getGuitars().length / maxItemPerPage);
}

// Read a page's GET URL variables and return them as an associative array.
function getPageNumber() {
  let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (let i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    if (hash[0] == 'page') {
      let number = isNaN(hash[1]) || hash[1] == 0 ? 1 : hash[1];
      return number > getMaxPage() ? parseInt(getMaxPage()) : parseInt(number);
    }
  }
  return 0;
}

function getCategory() {
  let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (let i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    if (hash[0] == 'cat') {
      switch (hash[1]) {
        case catClassic:
        case catSpecial:
        case catElectric:
          return hash[1];
      }
      return catAll;
    }
  }
  return catAll;
}

function formatGuitarListNavigation(name, url) {
  return `<li><a href='${url}'>${name}</a></li>`;
}