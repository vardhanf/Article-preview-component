let shareBtn = document.getElementById('share');
let shareContainer = document.getElementsByClassName('share_container')[0]; // Get the first element with the collection of class 'share_container'

shareBtn.addEventListener('click', () => {

console.log('clicked')
    // Toggle visibility of shareContainer  with css inlilne styling
    if (shareContainer.style.display === 'block') {
        shareContainer.style.display = 'none';
        shareBtn.style.backgroundColor = 'hsl(212, 23%, 69%)'; // Revert to original background color
        shareBtn.style.color = 'hsl(214, 17%, 51%)'; // Revert to original text color
    } else {
        shareContainer.style.display = 'block';
        shareBtn.style.backgroundColor = 'hsl(214, 17%, 51%)'; // Change background color on activation
        shareBtn.style.color = 'white'; // Change text color on activation
    }
});
