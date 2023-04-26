//returning all even those who don`t have the info : 

//const container = document.querySelector('.container');

//fetch('https://restcountries.com/v3.1/all')
//  .then((response) => response.json())
//  .then((data) => {
 //   data.forEach((country) => {
//      const card = document.createElement('div');
//      card.classList.add('card');
//      const name = document.createElement('h2');
//      name.textContent = country.name.common;
//      const population = document.createElement('p');
//      population.textContent = `Population: ${country.population}`;
//      const coatOfArms = document.createElement('img');
//      coatOfArms.src = country.coatOfArms.png;
 //     coatOfArms.alt = `${country.name.common} coat of arms`;
//      card.appendChild(name);
//      card.appendChild(population);
//      card.appendChild(coatOfArms);
//      container.appendChild(card);
//    });
//  })
//  .catch((error) => console.log(error));

  const container = document.querySelector('.container');

fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    data = data.filter(country => {
      return ![
        'GS',
        'HM',
        'MF',
        'UM',
        'SH',
        'PR',
        'BL',
        'RE',
        'TL',
        'TC',
        'BV',
        'VI',
        'WF',
        'SZ',
        'AS',
        'SJ',
        'NF',
        'PN',
        'CG',
        'EH',
        'PM',
        'IO',
        'NU',
        'MP',
        'CC',
        'TK',
        'SX',
        'YT',
      ].includes(country.cca2);
    });
    data.forEach((country) => {
      const card = document.createElement('div');
      card.classList.add('card');
      const name = document.createElement('h2');
      name.textContent = country.name.common;
      const population = document.createElement('p');
      population.textContent = `Population: ${country.population}`;
      const coatOfArms = document.createElement('img');
      coatOfArms.src = country.coatOfArms.png;
      coatOfArms.alt = `${country.name.common} coat of arms`;
      card.appendChild(name);
      card.appendChild(population);
      card.appendChild(coatOfArms);
      container.appendChild(card);
    });
  })
  .catch((error) => console.log(error));
