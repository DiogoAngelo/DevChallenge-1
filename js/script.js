const menu = document.querySelector(".menu-burger");
const nav = document.querySelector(".navegacao");
const fechar = document.querySelector(".menu-fechar");

menu.addEventListener("click", openMenu);

function openMenu() {
  nav.classList.add("ativo");

  outterClick(nav, ["click", "touchstart"], () => {
    removeClass();
  });
}
function outterClick(element, events, callback) {
  const html = document.documentElement;
  if (!element.hasAttribute("data-outside")) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutterClick);
      });
      element.setAttribute("data-outside", "");
    });
  }
  function handleOutterClick(event) {
    if (!element.contains(event.target)) {
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutterClick);
        element.removeAttribute("data-outside");
      });
      callback();
    }
  }
}

fechar.addEventListener("click", removeClass);

function removeClass() {
  nav.classList.remove("ativo");
}
