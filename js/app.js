// Function that shows successful message when user posts and removes the loading message
function post_success(response) {
    var success_message = document.createElement('p');
    success_message.innerText = "Message Successfully Posted";
    post_section.appendChild(success_message);
    loading_message.style.display = "none";
}
// Function that shows an error message
function post_failure(error) {
    var error_message = document.createElement('h1');
    error_message.innerText = "Sorry Error";
    post_section.appendChild(error_message);
}

// Function that loads the loading message, and makes the API call when the form button gets clicked
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
// Console logging the response on a successful patch request
function patch_success(response) {
    console.log(response);
}
// Genaric Error message if the patch request fails
function patch_error(error) {
    var patch_error_message = document.createElement('h1');
    patch_error_message.innerText = "Sorry Error";
    patch_section.appendChild(patch_error_message);
}
// Making our PATCH request upon page load
axios.request({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    method: "PATCH",
    data: {
        title: "New Title"
    }
}).then(patch_success).catch(patch_error);

// Function that console logs the response on a successful Delete request
function delete_success(response) {
    console.log(response);
}
// Generic error message if the Delete request fails
function delete_failure(error) {
    var delete_error_message = document.createElement('h1');
    delete_error_message.innerText = "Sorry Error";
    delete_section.appendChild(delete_error_message);
}
// Our Delete request API call, loads on page load
axios.request({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    method: "DELETE"
}).then(delete_success).catch(delete_failure);
// This is for the comments section, I have it working halfway/ it changes the comment instead of posting all of them and its hardcoded only to post 1
function comments_success(response_comments) {
    var comments_section = document.createElement('section');
    comments_section.innerText = "Comments";
    var comments_name_tag = document.createElement('h5');
    var comments_tag = document.createElement('p');
    comments_section.appendChild(comments_name_tag);
    comments_section.appendChild(comments_tag);
    for (var i = 0; i < response_comments.data.length; i++) {

        get_parent_tag = document.getElementById('1');
        comments_name_tag.innerText = response_comments.data[i].name;
        comments_tag.innerText = response_comments.data[i].body;
        comments_section.setAttribute('postId', `${i}`);
        get_parent_tag.appendChild(comments_section);

    }

}
// Our API call to get the comments
axios.request({
    url: `https://jsonplaceholder.typicode.com/posts/1/comments`
}).then(comments_success).catch(get_failure);

// Function that shows all the posts on a successful GET request
function get_success(response) {
    console.log(response);
    var card_section = document.createElement('section');
    for (var i = 0; i < response.data.length; i++) {

        var card_title = document.createElement('h1');
        var card_body = document.createElement('p');
        card_body.setAttribute('id', response.data[i].id);
        card_title.innerText = response.data[i].title;
        card_body.innerText = response.data[i].body;
        card_section.appendChild(card_title);
        card_section.appendChild(card_body);
        get_section.appendChild(card_section);

    }

}
// Generic error message if GET request fails
function get_failure(error) {
    var get_error_message = document.createElement('h1');
    get_error_message.innerText = "Sorry Error";
    get_section.appendChild(get_error_message);
}

// Our GET request API call
axios.request({
    url: 'https://jsonplaceholder.typicode.com/posts',
}).then(get_success).catch(get_failure);






// Setting up various variables to use in the functions for appending
var post_section = document.getElementById('post_section');
var patch_section = document.getElementById('patch_section');
var post_section = document.getElementById('delete_section');
var patch_section = document.getElementById('get_section');
var post_submit = document.getElementById('post_submit');
// Adding eventlistener to our form button
post_submit.addEventListener('click', form_submit);

var loading_message = document.createElement('h1');