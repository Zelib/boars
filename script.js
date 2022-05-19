const slide = document.querySelector('.product__line');
let count = 0;

document.querySelector('.product__next').addEventListener('click', function(){
  count += 550;
  if (count > 2200) {
    count = 0;
  }
  slide.style.left = -count + 'px';
});

document.querySelector('.product__pre').addEventListener('click', function(){
  count -= 550;
  if (count < 0) {
    count = 2200;
  }
  slide.style.left = -count + 'px';
});