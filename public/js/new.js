const post = async function (e) {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#text').value;

    if (content && title) {
        // send inputed data
        await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {'Content-Type': 'application/json'}
        });
        // redirect to dashboard after clicking post
        document.location = "/dashboard";
    }
};

document.querySelector('#postForm').addEventListener("click", post);