"use strict";
(function() {

  const contentEl = document.querySelector('.content');
  const catNames = ['Jorts', 'Jean', 'Nyancat', ];
  let catNum = 0;
  render();

  contentEl.addEventListener('click', (e) => {
    if(!e.target.classList.contains('change-cat')) {
      return;
    }
    catNum = catNum < (catNames.length - 1) ? catNum + 1 : 0;
    render();
  });



function render() {
  contentEl.innerHTML = `
    <div>
      <img
        class="cat-pic"
        src="//placekitten.com/100/100?image=${catNum+1}"
        alt="Populate when data isn't random"
      />
      Your cat is ${catNames[catNum]}
    </div>
    <button class="change-cat" type="button">Next Cat</button>
  `;
}


})();
