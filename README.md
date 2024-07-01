```
npm i electron @electron-forge/cli @electron-forge/maker-zip desmos fluent-ffmpeg tracking @types/tracking @ffmpeg-installer/ffmpeg
```
Важно! В дополнение к пакетам, нужно прописать `module.exports = tracking` у библиотеки `tracking.js` </br>
Запуск проги через `run` скрипты, потому что `electron` билд слишком тяжелый. </br>

### 🌂Showcase:
![image](https://github.com/supchyan/Hono/assets/123704468/96c4bbbc-fc84-4d5f-83ac-11ebe8549bce) </br>
*Аддон для [desmos](https://desmos.com) , который позволят отслеживать движение объектов на видео. Своеобразный аналог **LabCamera**, которая когда-то существовала.*
