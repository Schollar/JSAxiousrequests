function post_success(response) {
    var success_message = document.createElement('p');
    success_message.innerText = "Message Successfully Posted";
    post_section.appendChild(success_message);
    loading_message.style.display = "none";
}

function post_failure(error) {
    var error_message = document.createElement('h1');
    error_message.innerText = "Sorry Error";
    post_section.appendChild(error_message);
}
function form_submit() {

    loading_message.innerText = "Posting Message...."
    post_section.appendChild(loading_message);
    axios.request({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: "POST",
        data: {
            title: document.getElementById('post_title').value,
            body: document.getElementById('post_body').value,
            userId: 1
        }
    }).then(post_success).catch(post_failure);


}


function patch_success(response) {
    console.log(response);
}
function patch_error(error) {
    var patch_error_message = document.createElement('h1');
    patch_error_message.innerText = "Sorry Error";
    patch_section.appendChild(patch_error_message);
}
axios.request({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    method: "PATCH",
    data: {
        title: "New Title"
    }
}).then(patch_success).catch(patch_error);
var post_section = document.getElementById('post_section');
var patch_section = document.getElementById('patch_section');
var post_section = document.getElementById('delete_section');
var patch_section = document.getElementById('get_section');
var post_submit = document.getElementById('post_submit');
post_submit.addEventListener('click', form_submit);
var loading_message = document.createElement('h1');