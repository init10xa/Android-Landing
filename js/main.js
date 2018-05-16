function generateLink() {
    openInstruction();
    var t = [],
        n = "https://app.appsflyer.com/com.techsolutionsinc.betman-install?af_r=https://betmansports.com/static/app/betmansports.apk",
        e = "", a = window.location.search;
    return "" != a && (a = a.substring(1).split("&"), a.forEach(function (n) {
        n = n.split("=");
        var a = n[0], o = n[1];
        switch (a) {
            case"utm_source":
                t.push("pid=" + o);
                break;
            case"utm_campaign":
                t.push("c=" + o);
                break;
            case"aff":
                t.push("af_sub1=" + o);
                break;
            case"click_id":
                t.push("clickid=" + o);
                break;
            default:
                e += a + "=" + o + "&"
        }
    }), n = "https://app.appsflyer.com/com.techsolutionsinc.betman-install?" + t.join("&") + "&af_sub2=" + e + "af_r=https://betmansports.com/static/app/betmansports.apk"), window.location.href = n, !1
}

function openInstruction() {
    var n = document.querySelector(".installation-container");
    n.classList.remove("hidden");
}

function ready() {
    /**
     * "More" button
     */
    var descriptionButton = document.querySelector('.description__btn');
    descriptionButton.addEventListener('click', function () {
        var description = document.querySelector('.description');

        if (description.classList.contains('open')) {
            description.classList.remove('open');
        } else {
            description.classList.add('open');
        }
    }, false);


    /**
     * Sticky header
     */
    var stickyHeader = document.querySelector('.content-top-sticky');
    var stickyHeaderParent = stickyHeader.parentNode;
    sticky(stickyHeader);
    stickyHeaderParent.style.minHeight = stickyHeader.offsetHeight + 'px';

    var resize = debounce(function () {
        if (window.innerWidth <= 768) {
            stickyHeaderParent.style.minHeight = stickyHeader.offsetHeight + 'px';
        }
    }, 300);

    window.addEventListener('resize', resize);
}

document.addEventListener('DOMContentLoaded', ready);