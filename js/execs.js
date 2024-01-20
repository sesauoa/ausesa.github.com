var executives = [
    { name: 'Tony Lim', role: 'President', imageURL: '/img/execs/test.svg' },
  ];
  
function mapExecutivesToHTML() {
  var pageContentDiv = document.querySelector('.page-content');

  executives.forEach(function(executive) {
      var executiveDiv = document.createElement('div');
      executiveDiv.className = 'executive';

      var img = document.createElement('img');
      img.src = executive.imageURL;

      var infoDiv = document.createElement('div');
      infoDiv.className = 'info';
      var p = document.createElement('p');
      p.textContent = executive.name + ', ' + executive.role;
      infoDiv.appendChild(p);

      executiveDiv.appendChild(img);
      executiveDiv.appendChild(infoDiv);

      pageContentDiv.appendChild(executiveDiv);
  });
}
  
mapExecutivesToHTML();