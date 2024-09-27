const blogPosts = [
    { title: 'First Blog Post', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus tenetur impedit similique blanditiis.', link: '#' },
    { title: 'Second Blog Post', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi perferendis ipsa rerum excepturi dignissimos sapiente.', link: '#' },
    { title: 'Third Blog Post', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consectetur consequuntur, beatae illo, illum unde.', link: '#' },
    { title: 'Fourth Blog Post', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio necessitatibus similique optio.', link: '#' },
    { title: 'Fifth Blog Post', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, iure incidunt eaque provident pariatur.', link: '#' },
    { title: 'Sixth Blog Post', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quisquam distinctio molestiae natus deserunt veritatis.', link: '#' }
];

// Function to dynamically load blog posts
function loadBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
        const blogPostHTML = `
            <div class="col-lg-6 col-md-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${post.title}</h3>
                        <p class="card-text">${post.text}</p>
                        <a href="${post.link}" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        `;
        blogPostsContainer.innerHTML += blogPostHTML;
    });
}

// Smooth scrolling for navbar links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-message').style.display = 'block';
    setTimeout(() => {
        document.getElementById('form-message').style.display = 'none';
        document.getElementById('contactForm').reset();
    }, 3000);
});

// Load blog posts on page load
window.onload = loadBlogPosts;
