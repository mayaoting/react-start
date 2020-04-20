function imgLoad(url) {
  /**
   * Create new Promise with the Promise() constructor;
   * this has as its argument a function 
   * with two parameters, resolve and reject
   */
  return new Promise((resolve,reject) => {
    // standard XHR to load an image
    var request = new XMLHttpRequest();
    request.open('GET',url);
    request.responseType = 'blob';
    // when the request loads, check weather it was successful
    request.onload = function() {
      if(request.status === 200) {
        // if successful, resolve the promise by passing back the request response
        resolve(request.response);
      } else {
        // if it fails,reject the promise with error message
        reject(Error('Image didn\'t load successfully:' + request.statusText));
      }
    };
    request.onerror = function() {
      // Also deal with the case when the entire request fails to begin with 
      //this is probably a network error,so reject the promise with an appropiate message

      reject(Error('There was a net work error.'));
    };
    // send the request
    request.send();
  })
}
// get a reference to the body element and create a new image object
var body = document.querySelector('body');
var myImage = new Image();
/**
 * Call the function with the URL we want to load, but then chain the 
 * promise then() method on to the end of it this contain two callbacks 
 */
imgLoad('myLittleVader.jpg').then(function(response) {
  // the first runs when the promise resolves, with the request.response
  //specified within the resolve() method. 
  var imageURL = window.URL.createObjectURL(response);
  myImage.src = imageURL;
  body.appendChild(myImage);
  // the second runs when the promise 
  // is rejected,and logs the error specified with the reject() method.
},function(Error) {
  console.log(Error)
});