let like = document.querySelector(".element__like");
let likeOn = document.querySelector(".element__like_active");

function likeActive() {
    like.classList.add("element__like_active");
}
function likeNoActive() {
    like.classList.remove("element__like_active");
}

like.addEventListener("click", likeNoActive);
likeOn.addEventListener("click", likeActive);
