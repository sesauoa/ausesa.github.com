var executives = [
    { name: 'Tony Lim', role: 'President', imageURL: '/img/execs/test.svg' },
  ];
  
function mapExecutivesToHTML() {
var pageContentDiv = document.querySelector('.page-content');

executives.forEach(function(executive) {
    var executiveDiv = document.createElement('div');
    var img = document.createElement('img');
    img.src = executive.imageURL;
    var p = document.createElement('p');
    p.textContent = executive.name + ', ' + executive.role;

    executiveDiv.appendChild(img);
    executiveDiv.appendChild(p);

    pageContentDiv.appendChild(executiveDiv);
});
}
  
mapExecutivesToHTML();