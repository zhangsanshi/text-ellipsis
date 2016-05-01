(function ($) {
    $.fn.textEllipsis = function () {
        this.each(function (key, item) {
            var $this = $(this),
                $clone = $(this.cloneNode(true)).hide(),
                maxHeight = $this.height(),
                text = '',
                originText = '';
            $clone.css({
                height: 'auto',
                overflow: 'visible'
            });
            $this.after($clone);
            originText = text = $clone.text();
            while ($clone.height() > maxHeight) {
                text = text.replace(/\u2026$/, '').replace(/[\s\S]$/, '\u2026');
                $clone.text(text);
            }
            $this.text(text).attr('data-origin', originText);
            $clone.remove();
        });
    }
})(jQuery);