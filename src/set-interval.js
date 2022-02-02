const refs = {
    btnStart:document.querySelector('.btn-start'),
    btnStop:document.querySelector(".btn-stop"),
    par:document.querySelector('p'),
}
let timerId = null;
let isStarted = false;

console.log(refs.par.textContent);

const startBtnOnclickListener= () => {
    if (isStarted) {
        return;
    }
    let i = 0;

    timerId = setInterval(() => {
        refs.par.textContent = `${i}`
        console.log("timer");
        i++;
    }, 200);
    isStarted = true;
}

const stopBtnOnclickListener = () => {
    clearInterval(timerId);
    refs.par.textContent = `timer have been stoped at value ${refs.par.textContent}`
}
refs.btnStart.addEventListener('click', startBtnOnclickListener);
refs.btnStop.addEventListener('click', stopBtnOnclickListener);
