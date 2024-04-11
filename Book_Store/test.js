// Selecting elements
let highlightedElement = document.getElementById('highlighted');
let containerElements = document.getElementsByClassName('container');
// Modifying elements
highlightedElement.textContent = 'This element has been dynamically updated.';
containerElements[0].style.backgroundColor = 'lightblue';
containerElements[1].classList.remove('container');
// Event handling
highlightedElement.addEventListener('click', function() {
    console.log('Element clicked!');
});
const highlightedParagraph = document.querySelector('.highlight');
console.log(highlightedParagraph.textContent); // Output: Paragraph 1
const highlightedParagraphs = document.querySelectorAll('.highlight');
highlightedParagraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
