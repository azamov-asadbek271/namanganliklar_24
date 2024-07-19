 const btnModal = document.querySelector(".telegram_icon");
 const modal = document.querySelector(".modal")
 const close = document.querySelector(".modal_img");
 const overlay = document.querySelector(".overlay");

 btnModal.addEventListener("click", () => {
   modal.classList.remove("hidden")
   overlay.classList.remove("hidden");
 });
 close.addEventListener("click", () => {
   modal.classList.add("hidden");
   overlay.classList.add("hidden");
 });
  overlay.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });