function spriteClignote(name) {
    $('img.' + name).fadeOut(1000);
    $('img.' + name).fadeIn(1000);
    spriteClignote(name);
}

spriteClignote('mario');