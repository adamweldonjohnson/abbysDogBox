let ball = document.getElementById('btn1');
let treats = document.getElementById('btn2');
let stick = document.getElementById('btn3');

ball.addEventListener('click', () => {
  console.log('Fetch the ball!');
});

treats.addEventListener('click', () => {
  console.log('Yum, Yum! Who\'s a good boy!?!?');
});

stick.addEventListener('click', () => {
  console.log('Go get the stick!');
});