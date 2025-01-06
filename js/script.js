window.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.querySelector(".login-btn")
    const loginModal = document.querySelector("#modalOverlay")
    const closeBtn = loginModal.querySelector(".close-button")
    loginBtn.addEventListener("click", () => {
        showLoginModal()
        document.body.style.overflow = "hidden"
    })
    closeBtn.addEventListener("click", () => {
        closeLoginModal()
        document.body.style.overflow = "visible"
    })
    loginModal.addEventListener("click", (e) => {
        if (e.target === loginModal){
            closeLoginModal()
        }
    })
    function showLoginModal() {
        loginModal.classList.add("active")
    }
    function closeLoginModal() {
        document.body.style.overflow = "visible"
        loginModal.classList.remove("active")
    }



    // LoginForm
    const loginForm = loginModal.querySelector("#loginForm")
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const formData = new FormData(loginForm)
        const obj = {}
        formData.forEach((value, key) => {
            obj[key] = value
        })
        
        closeLoginModal()
        deleteLoginBtn()

    })
    function deleteLoginBtn() {
        const post = document.querySelector(".post")
        post.classList.add("active")
        loginBtn.style.display = "none"
    }
    window.addEventListener("load", () => {
        if (localStorage.getItem('username') && localStorage.getItem("useremail")) {
            deleteLoginBtn()
        }
    })

    // blogs
    const blogContainer = document.querySelector(".left-blogs")
    axios.get("http://localhost:3000/blogs")
        .then(response => {
            let data = response.data
            data.forEach(blog => {
                let { authorImg, authorName, blogTitle, blogDesc, blogDate, likes, comments, postImg } = blog
                blogContainer.innerHTML += `
                <div class="blog">
                    <div class="author">
                        <img src="${authorImg}" alt="author">
                        <h3 class="blog-author">${authorName}</h3>
                    </div>
                    <div class="card-info">
                        <div class="card-content">
                            <h2 class="card-content__title">${blogTitle}</h2>
                            <h4 class="card-content__subtitle">${blogDesc}</h4>
                            <div class="card-statistics">
                                <div class="date">
                                    <img src="./images/icons/date-icon.png" alt="date">
                                    <span>${blogDate}</span>
                                </div>
                                <div class="likes">
                                    <img src="./images/icons/like-icon.png" alt="like">
                                    <span>${likes}</span>
                                </div>
                                <div class="commments">
                                    <img src="./images/icons/comment.svg" alt="comment">
                                    <span>${comments}</span>
                                </div>

                            </div>
                        </div>
                        <div class="card-content__img">
                            <img src="${postImg}"
                                alt="card-content__img">
                        </div>
                    </div>
                </div>
                `
            })

        })

    const postContainer = document.querySelector(".posts")
    axios.get("http://localhost:3000/posts")
        .then(response => {
            let data = response.data
            data.forEach(blog => {
                let { authorImg, authorName, postTitle, postDate } = blog
                postContainer.innerHTML += `
                <div class="post">
                    <div class="post-author">
                        <img src="${authorImg}"
                            alt="post-author">
                        <span class="post-author__name"${authorName}</span>
                    </div>
                    <h3 class="post-title">${postTitle}</h3>
                    <h4 class="date"><span>${postDate}</span></h4>
                </div>

                `
            })
        })
    const morePostsContainer = document.querySelector(".more-posts")
    axios.get("http://localhost:3000/morePosts")
        .then(response => {

            let data = response.data

            data.forEach(post => {
                let { authorImg, authorName, postDate, postTitle } = post
                morePostsContainer.innerHTML += `
                    <div class="post">
                        <div class="post-author">
                            <img src="${authorImg}"
                                alt="post-author">
                            <span class="post-author__name"${authorName}</span>
                        </div>
                        <h3 class="post-title">${postTitle}</h3>
                        <h4 class="date"><span>${postDate}</span></h4>
                    </div>
                    `
            })
            const seeListBtn = document.querySelector(".full-list")
            seeListBtn.addEventListener("click", () => {
                document.body.classList.toggle("active")
                console.log(morePostsContainer);
            })

        })

    const followContainer = document.querySelector(".recomend-follows")
    axios.get("http://localhost:3000/following")
        .then(response => {
            let data = response.data
            data.forEach(following => {
                let { authorImg, authorName, contentTitle, contentDesc } = following
                followContainer.innerHTML += `
                    <div class="recomend-follow">
                        <img width="30" height="30"
                            src="${authorImg}"
                            alt="follow-img">
                        <div class="recomend-follow__info">
                            <h2 class="follow-name">${authorName}</h2>
                            <p class="follow-job">${contentTitle}}</p>
                            <p class="follow-desc">${contentDesc}</p>
                        </div>
                        <button class="following">Follow</button>
                    </div>
                    `
            })
        })
})  