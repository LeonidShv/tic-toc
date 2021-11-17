# tic-toc
vue.js, sass, BEM

I save data from the server to the local storage to save traffic, I have only 100 free requests

if suddenly the data stops being displayed, you need to connect another key, in src / constants / index.js


Детально про сторінки:
● В Стрічці новин потрібно відобразити останні 30 постів. Пост містить в собі:
○ контент: відео та текст; +
○ аватарку та імʼя юзера. Клік по аватарці чи імені повинен вести на сторінку юзера; +
○ хештеги; +
○ додаткова інформація: кількість коментарів та лайків. +
● Сторінка юзера містить:
○ інформацію про юзера (колекція Get User Info); +
○ список постів (колекція Get User Feed); +
▪ над відео показувати к-ть переглядів. +
Додаткові завдання:
● пости мають пагінацію на клієнті; -
● пропрацювати помилки від API (помилка мережі, ...); +-
● адаптив під мобільну версію; +
● анімація завантаження відео; добовлял свой лоадер +-
● автоматичне програвання відео; -
● відео можна поставити на паузу; +
● покриття тестами. -

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
