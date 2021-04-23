import { json } from 'body-parser';
import { linkChecker } from './linkChecker';
function handleSubmit(event) {
    event.preventDefault()

    // check if the entered url is valid
    let url = document.getElementById('name').value;
    
    console.log("::: Form Submitted :::")

    if (Client.linkChecker(url)) {
        
        fetch(`http://localhost:8000/check?url=${url}`)
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = JSON.stringify(res);
        })
    } else {
        document.getElementById('results').innerHTML = 'Please enter a valid URL';

    }


}

export { handleSubmit }
