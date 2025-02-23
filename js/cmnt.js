console.log('my comment')

// step 1: set an event handler to the button
document.getElementById('btn-post-cmnt')
.addEventListener('click', function(){
// console.log('post btn click')
// *step2: get the text written in the comment area*
const commentTextbox = document.getElementById('comment-text-box')
// console.log(commentTextbox)
const newComment = commentTextbox.value;
// console.log(newComment)

// step-3: get the parent node where to publish comment

const commentContainer = document.getElementById('comment-container')
console.log(commentContainer)

//create a comment p and set the innerText

const commentElement = document.createElement('p')
commentElement.classList.add('comment')
commentElement.innerText = newComment;

// step 5: append the new p tag to the parent node
commentContainer.appendChild(commentElement);
// step6: clean the text area 
commentTextbox.value =' ';

})