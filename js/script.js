window.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector(".login-btn")
    const loginModal = document.querySelector("#modalOverlay")
    const closeBtn = loginModal.querySelector(".close-button")
    loginBtn.addEventListener("click", showLoginModal)
    closeBtn.addEventListener("click", closeLoginModal)
    loginModal.addEventListener("click", (e) => {
        if (e.target === loginModal) {
            closeLoginModal()

        }
    })
    function showLoginModal() {
        loginModal.classList.add("active")
    }
    function closeLoginModal() {
        loginModal.classList.remove("active")
    }



    // LoginForm
    const loginForm = loginModal.querySelector("#loginForm")
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const nameInput = loginForm.querySelector(".name")
        const emailInput = loginForm.querySelector(".email")
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
    const seeList = document.querySelector(".full-list")
    const fullList = document.querySelector(".more-posts")
    seeList.addEventListener("click", ()=>{
        fullList.classList.toggle("active")
    })
})