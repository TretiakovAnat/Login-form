const modal = document.querySelector(".backdrop");
const modalbtnopen = document.querySelector(".modal-btn-open");
const modalbtnclose = document.querySelector(".modal-btn-close");

const togglemodal = () => modal.classList.toggle("is-hidden");

modalbtnopen.addEventListener("click", togglemodal);
modalbtnclose.addEventListener("click", togglemodal);
