const wBtn = document.getElementById('welcome-screen-btn');
const blankWall = document.getElementById('blank-wall');

let honoLogged = false;

wBtn.onclick = (() => {
    blankWall.style.zIndex = '100';
    honoLogged = true;
})

export default {}
export { honoLogged }