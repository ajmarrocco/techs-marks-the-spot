// new form handler
async function commentFormHandler(event) {
    event.preventDefault();
    // declare variables
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    // if there is text inside textarea
    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
                body: JSON.stringify({
                    post_id,
                    comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}
// event listener for button
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);