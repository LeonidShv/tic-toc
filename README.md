# tic-toc
vue.js, sass, BEM

I save data from the server to the local storage to save traffic, I have only 100 free requests

if suddenly the data stops being displayed, you need to connect another key, in src / constants / index.js


Детально про сторінки:
● В Стрічці новин потрібно відобразити останні 30 постів. Пост містить в собі:
○ контент: відео та текст; + <br>
○ аватарку та імʼя юзера. Клік по аватарці чи імені повинен вести на сторінку юзера; +  <br>
○ хештеги; +  <br>
○ додаткова інформація: кількість коментарів та лайків. +  <br>
● Сторінка юзера містить:
○ інформацію про юзера (колекція Get User Info); + <br>
○ список постів (колекція Get User Feed); + <br>
▪ над відео показувати к-ть переглядів. + <br>
Додаткові завдання:
● пости мають пагінацію на клієнті; - <br>
● пропрацювати помилки від API (помилка мережі, ...); +- <br>
● адаптив під мобільну версію; + <br>
● анімація завантаження відео; добовлял свой лоадер +- <br>
● автоматичне програвання відео; - <br>
● відео можна поставити на паузу; + <br>
● покриття тестами. - <br>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
