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
];

function listGuitar() {
  for (i = 0; i < guitars.length; i++) {
    $("#guitar-list").append(formatGuitarItem(guitars[i]));
  }
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
