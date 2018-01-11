window.addEventListener('load', function () {
    let box = document.querySelector('.banner'),
        imgBox = document.querySelector('.imgBox'),
        lis = document.querySelectorAll('.dot'),
        iw = box.offsetWidth,
        sx, dirx;
    imgBox.innerHTML += imgBox.innerHTML;
    imgBox.style.width = iw * imgBox.childElementCount + 'px';
    box.addEventListener('touchstart', function (e) {
        let event = e.changedTouches[0];
        sx = event.pageX;
        dirx = imgBox.offsetLeft;
        imgBox.style.transition = 'none';
        if (dirx / iw == 0) {
            imgBox.style.left = -lis.length * iw + 'px';
        } else if (dirx / iw == -7) {
            imgBox.style.left = 1 - lis.length * iw + 'px';
        }
        dirx = imgBox.offsetLeft;
    });
    box.addEventListener('touchmove', function (e) {
        let event = e.changedTouches[0];
        let mx = event.pageX;
        imgBox.style.left = dirx + (mx - sx) + 'px';
    });
    box.addEventListener('touchend', function () {
        let num = Math.round(imgBox.offsetLeft / iw);
        lis.forEach(ele => {
            ele.classList.remove('active');
        });
        lis[(-num % 4)].classList.add('active');
        imgBox.style.transition = 'all ease .5s';
        imgBox.style.left = num * iw + 'px';
    });
})