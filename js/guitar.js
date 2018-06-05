const guitars = [
  {
    id: 1,
    category: 'classic',
    name: "normal guitar",
    description: "just a normal guitar, nothing more."
  },
  {
    id: 2,
    category: 'electric',
    name: "electric guitar",
    description: "bla bla"
  },
  {
    id: 3,
    category: 'electric',
    name: "black electric guitar",
    description: "bla bla"
  },
  {
    id: 4,
    category: 'electric',
    name: "red electric guitar",
    description: "bla bla"
  },
  {
    id: 5,
    category: 'special',
    name: "guitar form hell",
    description: "bla bla"
  },
  {
    id: 6,
    category: 'electric',
    name: "azure electric guitar",
    description: "bla bla"
  },
  {
    id: 7,
    category: 'electric',
    name: "green electric guitar",
    description: "bla bla"
  },
  {
    id: 8,
    category: 'electric',
    name: "small white electric guitar",
    description: "bla bla"
  },
  {
    id: 9,
    category: 'electric',
    name: "blue electric guitar",
    description: "bla bla"
  },
  {
    id: 10,
    category: 'electric',
    name: "white electric guitar",
    description: "bla bla"
  },
  {
    id: 11,
    category: 'electric',
    name: "homemade electric guitar",
    description: "bla bla"
  },
  {
    id: 12,
    category: 'electric',
    name: "purple",
    description: "bla bla"
  },
  {
    id: 13,
    category: 'classic',
    name: "double guitar",
    description: "bla bla"
  },
  {
    id: 14,
    category: 'special',
    name: "iron wood guitar",
    description: "bla bla"
  },
  {
    id: 15,
    category: 'classic',
    name: "elegant guitar",
    description: "bla bla"
  },
  {
    id: 16,
    category: 'electric',
    name: "red and white electric guitar",
    description: "bla bla"
  },
  {
    id: 17,
    category: 'electric',
    name: "strong electric guitar",
    description: "bla bla"
  },
  {
    id: 18,
    category: 'classic',
    name: "a folk song guitar",
    description: "bla bla"
  },
  {
    id: 19,
    category: 'classic',
    name: "a very rare guitar",
    description: "bla bla"
  },
  {
    id: 20,
    category: 'classic',
    name: "small guitar",
    description: "bla bla"
  },
  {
    id: 21,
    category: 'classic',
    name: "a well-made guitar",
    description: "bla bla"
  },
  {
    id: 22,
    category: 'electric',
    name: "rock guitar",
    description: "bla bla"
  },
  {
    id: 23,
    category: 'classic',
    name: "a long guitar",
    description: "bla bla"
  },


];

const maxItemPerPage = 5;

function listGuitar() {
  for (i = 0; i < maxItemPerPage; i++) {
    let guitar = guitars[i + (getPageNumber() - 1) * 5];
    if (typeof guitar === "undefined") {
      continue;
    }
    $("#guitar-list").append(formatGuitarItem(guitar));
  }
  $(".list-navigation").append(getNextButton()).append(getBackButton());
}

function formatGuitarItem(guitar) {
  return `
      <li>
          <h3>` + guitar.name + `</h3>
          <div>
            <img src="image/guitar/` + guitar.id + `.jpg" alt="` + guitar.name + `">
            <p>` + guitar.description + `</p>
          </div>
      </li>
    `;
}

function getNextButton() {
  if (getPageNumber() >= getMaxPage()) {
    return '';
  }
  let nextPage = getPageNumber() + 1;
  return formatGuitarListNavigation("Next", "index.html?page=" + nextPage)
}

function getBackButton() {
  if (getPageNumber() === 1) {
    return '';
  }
  let backPage = parseInt(getPageNumber()) - 1;
  return formatGuitarListNavigation("Back", "index.html?page=" + backPage)
}

function getMaxPage() {
  return Math.ceil(guitars.length / maxItemPerPage);
}

// Read a page's GET URL variables and return them as an associative array.
function getPageNumber() {
  let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (let i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    if (hash[0] == 'page') {
      let number = isNaN(hash[1]) || hash[1] == 0 ? 1 : hash[1];
      return number > getMaxPage() ? parseInt(getMaxPage()) : parseInt(number);
      // return hash[1]
    }
  }
  return 0;
}

function formatGuitarListNavigation(name, url) {
  return `<li><a href='${url}'>${name}</a></li>`;
}