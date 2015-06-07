define(['jquery', 'Class', 'ImageLoader', 'SpriteSheet'], function ($, Class, ImageLoader, SpriteSheet) {
    var _ = Privacy.createKeys();
    var DEFAULT_WIDTH = 64, DEFAULT_HEIGHT = 64;
    var imageloader;
    var Assets = Class.extend({
        init: function () {
            _(this).width = DEFAULT_WIDTH;
            _(this).height = DEFAULT_HEIGHT;
            imageloader = new ImageLoader();
            this.sheet = new SpriteSheet(imageloader.loadImage("http://i55.tinypic.com/2s0fn00.png"));
            this.player = this.sheet.crop(_(this).width * 3, _(this).height * 2, _(this).width, _(this).height);
            this.dirt = this.sheet.crop(0, 0, _(this).width, _(this).height);
            this.grass = this.sheet.crop(_(this).width, 0, _(this).width, _(this).height);
            this.stone = this.sheet.crop(_(this).width * 2, 0, _(this).width, _(this).height);
            this.tree = this.sheet.crop(0, _(this).height * 3, _(this).width, _(this).height);

        }
    });
    return new Assets();
});