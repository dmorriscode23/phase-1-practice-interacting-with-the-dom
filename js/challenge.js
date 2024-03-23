let isPaused = false;
const counterElement = document.getElementById('counter');

function incrementCounter() {
  if (!isPaused) {
    let currentCount = parseInt(counterElement.textContent);
    counterElement.textContent = currentCount + 1;
  }
}

// Start timer when the page loads
window.onload = () => {
  setInterval(incrementCounter, 1000);
};

document.getElementById('plus').addEventListener('click', () => {
    let currentCount = parseInt(counterElement.textContent);
    counterElement.textContent = currentCount + 1;
  });
  
  document.getElementById('minus').addEventListener('click', () => {
    let currentCount = parseInt(counterElement.textContent);
    counterElement.textContent = currentCount - 1;
  });
  
  const likes = {};
const likesUl = document.querySelector('.likes');

document.getElementById('heart').addEventListener('click', () => {
  const number = counterElement.textContent;
  likes[number] = (likes[number] || 0) + 1;
  const message = `${number} has been liked ${likes[number]} times`;

  const existingLi = document.querySelector(`[data-number="${number}"]`);
  if (existingLi) {
    existingLi.textContent = message;
  } else {
    const li = document.createElement('li');
    li.textContent = message;
    li.setAttribute('data-number', number);
    likesUl.appendChild(li);
  }
});

const pauseBtn = document.getElementById('pause');
const buttons = document.querySelectorAll('button:not(#pause)');

pauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? 'resume' : 'pause';
  buttons.forEach(button => button.disabled = isPaused);
});

document.getElementById('comment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const newComment = document.createElement('p');
    newComment.textContent = commentInput.value;
    document.getElementById('list').appendChild(newComment);
    commentInput.value = ''; // Clear input after submitting
  });
  