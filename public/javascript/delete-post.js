// delete form handler
async function deleteFormHandler(event) {
    event.preventDefault();
    // declare variables
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}
// event listener for button
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
