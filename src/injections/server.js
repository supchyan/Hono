import customApi from './customApi.js';
function createServer() {
    var http = require('http');
    http.createServer(function (req, res) {
        fetch(`http://desmos.com${req.url}`).then((realRes) => {
            realRes.headers.forEach((value, key) => {
                res.setHeader(key, value);
            });

            res.removeHeader('Content-Encoding');

            // res.setHeader('Content-Type', realRes.headers.get('Content-Type'));
            // res.setHeader('Content-Encoding', realRes.headers.get('Content-Encoding'));
            
            realRes.blob().then(async (realBody) => {
                // https://www.desmos.com/assets/build/calculator_desktop-2b445b5393e984b9ac26a3a8484938c29e6fe2bf.js
                if (req.url.startsWith('/assets/build/calculator_desktop')) {
                    res.write(`alert('zopa');`);
                }
                
                for await (const chunk of realBody.stream()) {
                    res.write(chunk);
                }
                
                res.end();

                
                // realBody.stream().then((text) => {

                //     // https://www.desmos.com/assets/build/calculator_desktop-2b445b5393e984b9ac26a3a8484938c29e6fe2bf.js
                    // if (req.url.startsWith('/assets/build/calculator_desktop')) {
                    //     text = `alert('zopa'); ${text}`;
                    // }

                //     res.write(text);
                //     res.end();
                // });
            });
        });
        
    }).listen(8080);
}
export { createServer }