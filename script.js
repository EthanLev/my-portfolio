window.onload = function () {
  const words = ["Full Stack Developer", "Java Programmer", "Game Developer"];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  // Pause duration (in ms) after a word is fully typed before deleting starts
  const delayBetweenWords = 1500;
 
  let wordIndex = 0; 
  let charIndex = 0; 

  let isDeleting = false;

  const textElement = document.getElementById("typewriter-text");

  /**
   * Recursive function that handles typing and deleting characters
   */
  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
      // Update the text to the substring of the current word up to charIndex
      textElement.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      // Update the text accordingly
      textElement.textContent = currentWord.substring(0, charIndex);
    }

    // Set the delay time depending on whether typing or deleting
    let delay = isDeleting ? deletingSpeed : typingSpeed;

    // Check if the word has been fully typed
    if (!isDeleting && charIndex === currentWord.length) {
      // Pause before starting to delete
      delay = delayBetweenWords;
      isDeleting = true; 
    } 
    // Check if all characters have been deleted
    else if (isDeleting && charIndex === 0) {
      isDeleting = false; 
      // Move to the next word, looping back to the start if necessary
      wordIndex = (wordIndex + 1) % words.length;
      delay = 300; // Short pause before typing the next word
    }

    // Schedule the next call to type() after the computed delay
    setTimeout(type, delay);
  }

  // Start the typing effect
  type();
};

let isDetailed = false; // Skills section detailed view 
  
// Skills section detailed view toggle 
function toggleLayout() {
  const categorizedLayout = document.getElementById('categorizedLayout');
  const detailedLayout = document.getElementById('detailedLayout');
  const toggleBtn = document.querySelector('.toggle-btn');

  if (isDetailed) {
      categorizedLayout.classList.remove('hidden');
      detailedLayout.classList.add('hidden');
      toggleBtn.textContent = 'Switch to Detailed View';
      isDetailed = false;
  } else {
      categorizedLayout.classList.add('hidden');
      detailedLayout.classList.remove('hidden');
      toggleBtn.textContent = 'Switch to Category View';
      isDetailed = true;
  }
}
