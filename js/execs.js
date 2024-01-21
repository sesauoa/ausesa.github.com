var executives = [
    { name: 'Tony Lim', role: 'President', imageURL: '/img/execs/tonyl.jpg' },
    { name: 'Victor Qiu', role: 'Sponsorship Manager', imageURL: '/img/execs/victorq.jpg' },
    { name: 'Grace Kerr', role: 'Women\'s Representative', imageURL: '/img/execs/gracek.JPG' },
    { name: 'Sunny Sepia', role: 'Industry Event Co-ordinator', imageURL: '/img/execs/sunnys.jpeg' },
    { name: 'Jamie Lee', role: 'Secretary', imageURL: '/img/execs/jamiel.jpeg' },
    { name: 'Andy Zhang', role: 'Marketing Manager', imageURL: '/img/execs/andyz.jpeg' },
    { name: 'Alex Liang', role: 'Industry Event Co-ordinator', imageURL: '/img/execs/alexl.jpeg' },
    { name: 'Alex Liang', role: 'Industry Event Co-ordinator', imageURL: '/img/execs/test.svg' },
    { name: 'Alex Liang', role: 'Industry Event Co-ordinator', imageURL: '/img/execs/test.svg' },
    { name: 'Alex Liang', role: 'Industry Event Co-ordinator', imageURL: '/img/execs/test.svg' },
    { name: 'Alex Liang', role: 'Industry Event Co-ordinator', imageURL: '/img/execs/test.svg' },
    { name: 'Alex Liang', role: 'Industry Event Co-ordinator', imageURL: '/img/execs/test.svg' },
  ];
  
function mapExecutivesToHTML() {
  var pageContentDiv = document.querySelector('.page-content');
  pageContentDiv.className = 'parent-container';

  var executivesContainer = document.createElement('div');
  executivesContainer.className = 'executives-container';

  var descriptionContainer = document.createElement('div');
  descriptionContainer.className = 'description-container';

  executives.forEach(function(executive) {
    var executiveDiv = document.createElement('div');
    executiveDiv.className = 'executive';

    var img = document.createElement('img');
    img.src = executive.imageURL;

    var infoDiv = document.createElement('div');
    infoDiv.className = 'info';

    var nameP = document.createElement('b');
    nameP.textContent = executive.name;
    infoDiv.appendChild(nameP);

    var roleP = document.createElement('p');
    roleP.textContent = executive.role;
    infoDiv.appendChild(roleP);

    executiveDiv.appendChild(img);
    executiveDiv.appendChild(infoDiv);

    executivesContainer.appendChild(executiveDiv);  
  })

  executives.forEach(function(executive) {
    var p = document.createElement('p');
    p.textContent = executive.name + ', ' + executive.role;
    descriptionContainer.appendChild(p);
  });
  
  pageContentDiv.appendChild(executivesContainer);
  pageContentDiv.appendChild(descriptionContainer);
}
  
mapExecutivesToHTML();