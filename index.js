function shorten(c){
    c.theme({
        bl: c.black,
        r: c.red,
        g: c.green,
        y: c.yellow,
        b: c.blue,
        m: c.magenta,
        c: c.cyan,
        w: c.white,
        bgBl: c.bgBlack,
        bgR: c.bgRed,
        bgG: c.bgGreen,
        bgY: c.bgYellow,
        bgB: c.bgBlue,
        bgM: c.bgMagenta,
        bgC: c.bgCyan,
        bgW: c.white
    });
    return c;
}
module.exports = shorten;