const comment = async function (e) {
    e.preventDefault();
    const comment = document.querySelector('#text').value;

    if (comment) {
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {'Content-Type': 'application/json'}
        });
        document.location.reload();
    }
};
document.querySelector('#postBtn').addEventListener("click", comment);