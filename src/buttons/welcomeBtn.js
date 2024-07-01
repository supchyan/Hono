const wBtn = document.getElementById('welcome-screen-btn');

let honoLogged = false;

wBtn.onclick = (() => {
    honoLogged = true;
})

export default {}
export { honoLogged }