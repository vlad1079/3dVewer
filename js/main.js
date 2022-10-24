const container = document.getElementById('container');

function createImg() {
  for (let i = 0; i <= 71; i++) {
    const link = `https://3d0.elmir.ua/models/17706/17706955/${i}_1.jpg`;
    console.log(link);
    const img = `<img src="${link}" alt="photo">`;
    container.insertAdjacentHTML('beforeend' , img );
  }
  container.firstElementChild.classList.add('current');
}
createImg();
