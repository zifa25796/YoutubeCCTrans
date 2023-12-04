
function handleClick(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:5000/', true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          var result = JSON.parse(xhr.responseText);
          console.log(result.status);
        } else {
          console.error('Request failed with status:', xhr.status);
        }
      };
    xhr.send({});

}

const button = document.getElementById("test");
console.log("Button:", button); 
button.addEventListener("click",handleClick);