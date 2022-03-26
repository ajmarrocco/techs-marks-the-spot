// new form handler
async function newFormHandler(event) {
    event.preventDefault();
    // declare variables
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value;
    // posts new post with title and content
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
// event listener for button
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);