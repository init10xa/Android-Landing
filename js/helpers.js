var onscroll;
var className = 'sticky';
var originalStyles = {};

function sticky(el, top) {
    var requiredOriginalStyles = ['position', 'top', 'z-index'];
    var requiredTop = top || 0;
    var originalRect = calcRect(el);
    var styles = {
        position: 'fixed',
        top: requiredTop + 'px',
        'z-index': 9999
    };

    requiredOriginalStyles.forEach(function (key) {
        originalStyles[key] = el.style[key];
    });

    onscroll = function () {
        if (window.innerWidth <= 768 && getWindowScroll().top > originalRect.top - requiredTop) {
            el.classList.add(className);
            for (var key in styles) {
                el.style[key] = styles[key];
            }
        } else {
            el.classList.remove(className);
            for (var key in originalStyles) {
                el.style[key] = originalStyles[key];
            }
        }
    };

    window.addEventListener('scroll', onscroll, false);
}

function calcRect(el) {
    var rect = el.getBoundingClientRect();
    var windowScroll = getWindowScroll();
    return {
        left: rect.left + windowScroll.left,
        top: rect.top + windowScroll.top,
        width: rect.width,
        height: rect.height
    }
}

function getWindowScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    }
}

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};