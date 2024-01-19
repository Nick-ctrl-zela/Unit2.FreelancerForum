const names = [
  "Alice", "Bob", "Dr. Seuss", "Samantha", "Jimmy", "Ed", "Edd", "Eddy", "Aoi Todo", "Clark", "Kyle", "Robbie", "Yvonne", "Bubs", "Nick", "Abi", "Mark", "Kevin", "Ford", "Emitt", "Bruce", "Ophelia", "Ellia", "Kat", "Wes", "Johnny", "Lloyd", "Elizabeth", "Karen", "Yolandi", "Billy", "Marceline", "Logan", "Lincoln", "Dave", "Winter"
]

const occupations = [
  "Writer", "Teacher", "Programmer", "Tutor", "Developer", "Artist", "Lawyer", "Chef", "Doctor", "Nurse", 
]

const prices = [
  20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 200, 500, 2000
]

const maxFreelancers = 40;

const listFreelancer = [
{
  name: "Rolf",
  occupation: "Tutor",
  price: 50, 
},
{
  name: "Chewbacca",
  occupation: "Writer",
  price: 100,
},
];

function calculateAveragePrice() {
  const total = listFreelancer.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return listFreelancer.length === 0 ? 0 : total / listFreelancer.length;
};

const addFreelancerIntervalId = setInterval(addFreelancer, 500);

render(); 

function render() {

  const freelancersId = document.querySelector("#freelancers");

  freelancersId.innerHTML =

    `<tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Starting Price</th>
     </tr>`;

     listFreelancer.forEach((freelancer) => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = freelancer.name;

    const tdOccupation = document.createElement("td");
    tdOccupation.textContent = freelancer.occupation;

    const tdPrice = document.createElement("td");
    tdPrice.classList.add("price");
    tdPrice.textContent = `$${freelancer.price}`;

    tr.appendChild(tdName);
    tr.appendChild(tdOccupation);
    tr.appendChild(tdPrice);

    freelancersId.appendChild(tr);

    const average = document.querySelector("#average");
    average.innerHTML = `The average price is: $${calculateAveragePrice().toFixed(
      1
    )}`;
  });
}

function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];
  const occupation =
  occupations[Math.floor(Math.random() * occupations.length)];

  listFreelancer.push({ name, price, occupation });

  render();

  if (listFreelancer.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}
