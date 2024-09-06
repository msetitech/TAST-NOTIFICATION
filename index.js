"use strict";

let toastBox = document.querySelector(".toatsBox");
let successMsg = `<i class="fa-solid fa-circle-check"></i> Successful checked`;
let erroMsg = `<i class="fa-solid fa-circle-exclamation"></i>  erro occur Not Completed checked`;
let invalidMsg = ` <i class="fa-solid fa-circle-xmark"></i> invalid Check and Try Agnin`;

const showToast = (msg) => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("erro")) {
    toast.classList.add("error");
  }
  if (msg.includes("invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 3000);
};
