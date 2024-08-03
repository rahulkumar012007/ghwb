document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        { username: 'JohnDoe', message: 'I found the symptom checker really helpful!' },
        { username: 'JaneDoe', message: 'The community support here is amazing.' }
    ];
    
    const postsContainer = document.getElementById('community-posts');
    posts.forEach(post => {
        const postElement = `
            <div class="post">
                <h3>${post.username}</h3>
                <p>${post.message}</p>
            </div>
        `;
        postsContainer.innerHTML += postElement;
    });
});
