(function ($) {
    $.fn.textEllipsis = function () {
        this.each(function (key, item) {
            var $this = $(this),
                $clone = $(this.cloneNode(true)),
                maxHeight = $this.height(),
                text = '',
                originText = '';
            $clone.css({
                height: 'auto',
                overflow: 'visible',
                visibility: 'hidden',
                'margin-top': maxHeight + 'px'
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
