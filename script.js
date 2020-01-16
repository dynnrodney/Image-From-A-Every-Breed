function getDogPicture() {
  fetch('https://dog.ceo/api/breed/sheepdog/shetland/images/random')
    .then(response => response.json())
    .then(responseJson => 
      showResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function showResults(responseJson) {
  let imageUrls = `<img src="${responseJson.message}" alt="Generated dog image" class="newPicture">`;

  $('.images').replaceWith(`<div class="images">${imageUrls}</div>`);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogPicture();
  });
}

$(function() {
  console.log('Yay! App is loaded ... Waiting for submit!');
  watchForm();
});