var localization = {
    en: {
        title: 'English',
        translations: {
            0: 'This app is only available for Android devices',
            1: 'Free',
            2: 'Download',
            3: 'Description',
            4: 'Additional information',
            5: 'Installation',
            6: 'Live betting made simple',
            7: 'Updated',
            8: 'Size',
            9: 'Age Rating',
            10: 'Support 24/7',
            11: 'Current Version',
            12: 'Android Version',
            13: 'Publisher',
            14: 'Certified bookmaker',
            15: 'More',
            16: 'Simplicity',
            17: 'You don’t need to know everything about the betting or a sport. Simple interface, simple decisions.',
            18: 'Always fun',
            19: 'Play 24/7. There’re always events and markets to bet on. We update constantly.',
            20: 'Money',
            21: 'Add or withdraw funds easy and secure.',
            22: 'Convenience',
            23: 'Upcoming matches, live games, results: everything is here, arranged in a nice readable way.',
            24: 'Personal',
            25: 'Organize the content you see. Follow the players, teams and tournaments and watch the games you like.',
            26: 'Care',
            27: 'We’re constantly improving our app, adding new features and making the existing ones better. You are important, we’ve got our support ready in case you have some questions.',
            28: 'Emotions first',
            29: 'We’ve made a platform that brings our users bright emotions every day. It doesn’t matter what sport you like, every game is a Super Bowl if you make a bet. Enjoy the atmosphere!',
            30: 'The download will start now…',
            31: 'Tap the download button to start downloading your file',
            32: 'Tap open. You will be presented with security dialogue. To install the app you will need to allow installation from unknown sources',
            33: 'To enable it, please tap on Settings on the dialogue and enable app installation from unknown sources',
            34: 'Enable by swiping this control',
            35: 'Press install and wait for installation to complete',
            36: 'You\'re all set! Open your app and enjoy the best betting service in the world.',
            37: '<img src="img/screen/en/1.jpg" alt="">',
            38: '<img src="img/screen/en/2.jpg" alt="">',
            39: '<img src="img/screen/en/3.jpg" alt="">',
            40: '<img src="img/screen/en/4.jpg" alt="">',
            41: '<img src="img/screen/en/5.jpg" alt="">',
            42: 'LESS'
        }
    },

    ru: {
        title: 'Русский',
        translations: {
            0: 'Это приложение доступно только для Android устройств',
            1: 'Бесплатно',
            2: 'Скачать',
            3: 'Описание',
            4: 'Дополнительная информация',
            5: 'Установка',
            6: 'Live betting made simple',
            7: 'Обновлено',
            8: 'Размер',
            9: 'Возрастные ограничения',
            10: 'Поддержка 24/7',
            11: 'Текущая версия',
            12: 'Версия Android',
            13: 'Издатель',
            14: 'Официальный букмекер',
            15: 'Показать полностью',
            16: 'Простота',
            17: 'Вам не нужно знать всё о ставках или спорте. Простой интерфейс - простые решения.',
            18: 'Всегда кайф',
            19: 'Играйте 24/7. У нас всегда есть события и коэффициенты, на которые можно поставить.',
            20: 'Деньги',
            21: 'Вносите и выводите деньги просто и безопасно.',
            22: 'Удобство',
            23: 'Предстоящие матчи, live игры, результаты: всё легко считывается и удобно в использовании.',
            24: 'Персонализация',
            25: 'Выбирайте события, которые вы видите. Следуйте за игроками, командами и турнирами и смотрите, то что вам нравится!',
            26: 'Забота',
            27: 'Мы постоянно улучшаем наше приложение, добавляем новые функции и совершенствуем уже существующие. Вы важны для нас, поэтому наша поддержка всегда на готове, на случай, если у вас возникнут вопросы.',
            28: 'Главное яркие эмоции',
            29: 'Мы создали платформу, которая приносит нашим пользователям яркие эмоции каждый день. Не важно, какой спорт вы любите, каждая игра - Супер  Кубок, если вы ставите. Наслаждайтесь атмосферой.',
            30: 'Сейчас начнется скачивание',
            31: 'Нажмите на кнопку Скачать, чтобы начать скачивание',
            32: 'Нажмите Открыть. Появится диалог о разрешении установки из неизвестных источников.',
            33: 'Чтобы разрешить установку из неизвестных источников нажмите Настройки.',
            34: 'Пункт "позволять из этого источника" сделайте активным.',
            35: 'Нажмите "Установить" винзу экрана.',
            36: 'Все готово, теперь вы сможете запустить приложение.',
            37: '<img src="img/screen/ru/1.jpg" alt="">',
            38: '<img src="img/screen/ru/2.jpg" alt="">',
            39: '<img src="img/screen/ru/3.jpg" alt="">',
            40: '<img src="img/screen/ru/4.jpg" alt="">',
            41: '<img src="img/screen/ru/5.jpg" alt="">',
            42: 'Скрыть',
        }
    },
};


var getLocale = function() {
    var currentLocale = window.localStorage.getItem('localization');
    if (currentLocale === 'ru_RU') { // Для совместимости если у кого то уже было значение в localStorage
        window.localStorage.setItem('localization', 'ru');
    }
    if (currentLocale === 'en_US') {
        window.localStorage.setItem('localization', 'en');
    }

    if (!currentLocale || currentLocale === '') { // Определяем язык пользователя
        var langFromUrl = window.location.search.substring(1).split("&");
        if (langFromUrl.length) {
            langFromUrl.forEach(function (item) {
                var name = item.split('=')[0], value = item.split('=')[1];
                if (name === 'lang') {
                    currentLocale = value;
                }
            })
        }

        if (!currentLocale || currentLocale === '') {
            currentLocale = navigator.languages && navigator.languages[1] ||
                navigator.languages && navigator.languages[0] ||
                navigator.language || navigator.userLanguage;
        }
    }
    return currentLocale.slice(0, 2);
};

var ready = function() {
    var locale = getLocale();
    var languagesList = document.querySelector('.languages-list-js');
    var languageBtn = document.querySelector('.language-btn-js');
    var translateElements = document.querySelectorAll('[translate]');
    var languagesButtons = [];

    // Translate landing
    var translate = function () {
        translateElements.forEach(function (element) {
            var translateId = element.getAttribute('translate');
            element.innerHTML = localization[locale].translations[+translateId];
        })
    };


    // Current language
    if (!localization[locale]) locale = 'en';
    window.localStorage.setItem('localization', locale);
    languageBtn.innerText = localization[locale].title;
    translate(locale);


    // Change language button click handler
    var changeLanguage = function () {
        languagesButtons.forEach(function (button) {
            button.classList.remove('active');
        });
        this.classList.add('active');
        languageBtn.innerText = this.innerText;

        locale = this.getAttribute('data-lang');
        window.localStorage.setItem('localization', locale);
        translate();
    };


    // Add available languages
    var buttonsHtml = '';
    for (var lang in localization) {
        buttonsHtml += '<li><button data-lang="'+ lang +'" type="button">'+ localization[lang].title +'</button></li>';
    }
    languagesList.innerHTML = buttonsHtml;
    languagesButtons = languagesList.querySelectorAll('button');
    languagesButtons.forEach(function (btn) {
        btn.addEventListener('click', changeLanguage.bind(btn), false);
    });
};

document.addEventListener('DOMContentLoaded', ready);