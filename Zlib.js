const zlib = require('zlib');

const input = "Hello World!";

zlib.gzip(input, (err, compressedData) => {
    if (err) {
        console.error('Error compressing data: ', err);
        return;
    }

    console.log('Compressed Data: ', compressedData);

    zlib.unzip(compressedData, (err, decompressedData) => {
        if (err) {
            console.error('Error decompressing data: ', err);
            return;
        }

        console.log('Decompressed Data: ', decompressedData.toString());
    });
});
