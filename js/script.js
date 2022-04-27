//select header
const selectHeader = document.querySelector('.select__header');
const selectBody = document.querySelector('.select__body');
const selectItem = document.querySelectorAll('.select__item');
const selectSpan = document.querySelector('.select__title');
const selectImg = document.querySelector('.select__header img');

selectHeader.addEventListener('click', () => {
  if (selectBody.classList.contains('select__body--active')) {
    selectBody.classList.remove('select__body--active');
    selectImg.style.transform = 'rotate(0deg)';
    selectBody.style.maxHeight = null;
  } else {
    selectBody.classList.add('select__body--active');
    selectImg.style.transform = 'rotate(180deg)';
    selectBody.style.maxHeight = selectBody.scrollHeight + 'px';
  }
});

selectItem.forEach((item, i) => {
  item.addEventListener('click', () => {
    selectSpan.textContent = item.textContent;
    selectBody.classList.remove('select__body--active');
    selectImg.style.transform = 'rotate(0deg)';
  });
});

//maps
let flag = 0;

window.addEventListener('scroll', function () {
  let scrollY = window.scrollY;
  let mapOffset = document.querySelector('.map').offsetTop;

  if (scrollY >= mapOffset - 500 && flag == 0) {
    let center = [55.75586745710175, 37.595903911178596];
    let right = [55.7604498485872, 37.60777026414854];
    let left = [55.75516617220805, 37.56517216155322];

    function init() {
      let map = new ymaps.Map('map-element', {
        center: center,
        zoom: 15,
      });

      let playsmark = new ymaps.Placemark(
        center,
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: 'img/map/maps-cart.svg',
          iconImageSize: [70, 100],
          iconImageOffset: [-40, -120],
        }
      );

      //balloon1

      let placemarkBallon = new ymaps.Placemark(
        center,
        {
          balloonContent: `
        <div class="balloon">
          <div class="ballon__name"> Arbat House
Гостиница
</div>
          <div class="ballon__duty">Режим работы: Круглосуточно</div>
          <div class="contact"><a href="+7 (495) 697-08-53">+7 (495) 697-08-53</a></div>
          <div class="adress">Россия, Москва, Скатертный переулок, 13</div>
        </div>
       `,
        },
        {
          iconLayout: 'default#image',
          iconImageHref: 'img/map/maps-cart.svg',
          iconImageSize: [70, 100],
          iconImageOffset: [-40, -120],
        }
      );

      //balloon2

      let placemarkBallon2 = new ymaps.Placemark(
        right,
        {
          balloonContent: `
        <div class="balloon">
          <div class="ballon__name"> EUROSPAR -
Супермаркет, магазин продуктов, кафе
</div>
          <div class="ballon__duty">Режим работы: Круглосуточно</div>
                    <div class="contact"><a href="8 (800) 500-13-29">8 (800) 500-13-29</a></div>
          <div class="adress">Россия, Москва, Тверская улица, 9</div>
        </div>
       `,
        },
        {
          iconLayout: 'default#image',
          iconImageHref: 'img/map/maps-cart.svg',
          iconImageSize: [70, 100],
          iconImageOffset: [-40, -120],
        }
      );

      //balloon3

      let placemarkBallon3 = new ymaps.Placemark(
        left,
        {
          balloonContent: `
        <div class="balloon">
          <div class="ballon__name"> Шинок -
Ресторан, банкетный зал
</div>
          <div class="ballon__duty">Режим работы: Ежедневно 12:00–00:00</div>
                    <div class="contact"><a href="+7 (495) 697-08-53">+7 (495) 697-08-53</a></div>
          <div class="adress">Россия, Москва, улица 1905 года, 2</div>
        </div>
       `,
        },
        {
          iconLayout: 'default#image',
          iconImageHref: 'img/map/maps-cart.svg',
          iconImageSize: [70, 100],
          iconImageOffset: [-40, -120],
        }
      );

      //
      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      /*   map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты */
      map.geoObjects.add(playsmark);

      map.geoObjects.add(placemarkBallon);
      map.geoObjects.add(placemarkBallon2);
      map.geoObjects.add(placemarkBallon3);
    }

    ymaps.ready(init);

    flag = 1;
  }
});

//mobile menu

const headerMobile = document.querySelector('.header__mobile'),
  burger = document.querySelector('.header__burger'),
  cross = document.querySelector('.header__cross'),
  body = document.querySelector('body');

burger.addEventListener('click', () => {
  headerMobile.classList.toggle('active');
  burger.style.display = 'none';
  cross.style.display = 'block';
  body.classList.add('noscroll');
});

cross.addEventListener('click', () => {
  headerMobile.classList.toggle('active');
  burger.style.display = 'block';
  cross.style.display = 'none ';
});

//modal

const modal = document.querySelector('.modal'),
  modalButtons = document.querySelectorAll('.button__modal');

modalButtons.forEach((item) => {
  item.addEventListener('click', () => {
    modal.classList.add('active');
    body.classList.add('noscroll');
  });
});

modal.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');

  if (!isModal) {
    modal.classList.remove('active');
    body.classList.remove('noscroll');
  }
});

//slider

const swiper = new Swiper('.slider', {
  loop: true,
  pagination: {
    el: '.slider__pagination',
  },
  navigation: {
    nextEl: '.slider__arrow-right',
    prevEl: '.slider__arrow-left',
  },
});

// iform send + validation
const form = document.querySelector('.form__elements');

const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form__elements');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Количество символов меньше 2!',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Количество символов больше 30!',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя!',
    },
  ])
  .addField('#telephone', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите номер телефона!',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректрый номер телефона!',
    },
  ])
  .onSuccess((e) => {
    if (document.querySelector('#check').checked) {
      const sendForm = (data) => {
        return fetch('mail.php', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }).then((res) => res.json());
      };

      const dataForm = new FormData(e.target);
      const user = {};

      dataForm.forEach((val, key) => {
        user[key] = val;
      });

      sendForm(user).then((data) => {
        console.log('Письмо успешно отправлено!');
      });

      e.target.reset();

      if (document.querySelector('div[class="check"]')) {
        document.querySelector('div[class="check"]').remove();
      }

      function time() {
        document
          .querySelector('div[class="modal modal--style"]')
          .classList.add('active');
      }
      setTimeout(time, 1000);
    } else {
      let check = document.querySelector('label[for="check"]');
      let block = document.createElement('div');
      block.className = 'check';
      block.innerHTML = ' Вы не дали согласие на обработку личных данных';
      check.after(block);
    }
  });

//AOS
AOS.init();

//accordeon
let accardion = document.querySelector('.facts__items'),
  tab = document.querySelectorAll('.facts__item'),
  answer = document.querySelectorAll('.facts__answer'),
  plus = document.querySelectorAll('.facts__plus'),
  minus = document.querySelectorAll('.facts__minus');

accardion.addEventListener('click', (e) => {
  const target = e.target.closest('.facts__item');
  if (target) {
    tab.forEach((item, i) => {
      if (item === target) {
        answer[i].classList.add('active');
        tab[i].classList.add('facts__item--active');
        plus[i].style.display = 'none';
        minus[i].style.display = 'flex';
      } else {
        answer[i].classList.remove('active');
        tab[i].classList.remove('facts__item--active');
        plus[i].style.display = 'flex';
        minus[i].style.display = 'none';
      }
    });
  }
});
//features

const elems = document.querySelectorAll('.feature__item'),
  points = document.querySelectorAll('.feature__point');

for (const item of elems) {
  item.addEventListener('click', () => {
    clearActiveClasses();
    item.classList.add('active');
  });
}

function clearActiveClasses() {
  elems.forEach((item) => {
    item.classList.remove('active');
  });
}

//features-mobile_slider
$(document).ready(function () {
  $('.feature__slider').slick({
    arrows: false,
    adaptiveHeight: true,
  });
});

document.addEventListener('touchstart', onTouchStart, { passive: true });

//lazy
