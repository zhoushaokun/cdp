const getContext = function (width, height) {
  var canvas = document.createElement('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  return canvas.getContext('2d');
};


const getAreaData = (img, { x = 0, y = 0, spanX, spanY, scale = 1 }) => {

    if (typeof scale === 'function') {
        scale = scale(img.width, img.height);
    }
    const width = ~~(img.width * scale);
    const height = ~~(img.height * scale);

    if (spanX === undefined) spanX = width;
    if (spanY === undefined) spanY = height;

    const context = getContext(width, height);
    context.drawImage(img, 0, 0, width, height);

    const area = [x, y, spanX, spanY];
    const areaData = context.getImageData(...area).data; //读取整张图片的像素。
    return areaData;
};

const getImageData = (src, { success, fail, ...options }) => {
    const img = new Image();
    if (!src.startsWith('data')) { img.crossOrigin = 'Anonymous'; }
    // 对options ，如果 targeX 比 x 小等 错，
    
    return new Promise(function (resolve, reject) {
        img.onload = function () {
            resolve(getAreaData(img, { 
                ...options,
            }));
        };

        const errorHandler = function () {
            const errMsg =  'An error occurred attempting to load image';
            if (fail) fail(errMsg);
            else return reject(new Error(errMsg)); 
        };

        img.onerror = errorHandler;
        img.onabort = errorHandler;
        img.src = src;
    }).then(data => {
        if (success) success(data);
        else return data;
    }).catch((e) => {
        if (fail) fail(e);
        else throw new Error(`An error occoured processing image!${e}`);
    });
}

const getImageDataWrapper = (src, { x, y, spanX, spanY, scale, fail = () => {}, ...options }) => {
    [x, y, spanX, spanY].forEach(v => {
        if ( v && v < 0 ) {
            const errMsg = 'The area pick param cant be negative!';
            if (fail) return fail(errMsg);
            else throw new Error(errMsg);
        }
    });

    if (scale !== undefined && (typeof scale !== 'number' && typeof scale !== 'function')) {
        const errMsg = 'The scale type can only be Number or Function!';
        if (fail) return fail(errMsg);
        else throw new Error(errMsg);
    }

    return getImageData(src, {
        x,
        y,
        spanX,
        spanY,
        scale,
        fail,
        ...options,
    });
}

module.exports = {
	getImageData: getImageDataWrapper,
};