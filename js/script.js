'use strict'
$(function () {

    function StopWatch(elem) {
        this.elem = elem;

        this.container = $('<div>').css({
            'width' : '400px',
            'height' : '600px',
            'margin' : 'auto'
        });
        this.watchArrow = $('<div>').css({
            'width' : '300px',
            'height' : '300px',
            'margin' : 'auto',
            'border-radius' : '100%',
            'background' : 'url(img/timer.png)',
            'background-size' : '100% 100%',
            'transform' : 'rotate(0deg)'
        });
        this.watchCont = $('<div>').css({
            'width' : '300px',
            'height' : '300px',
            'margin' : 'auto',
            'border' : '10px solid black',
            'border-radius' : '100%'
        });
        this.startButton = $('<button>').html('Старт');
        this.pauseButton = $('<button>').html('Пауза');
        this.stopButton = $('<button>').html('Стоп');
        this.valueCont = $('<h1>').text('0 сек.').css({
            'text-align' : 'center'
        });

        this.rotate = 0;
        this.interval = null;
        this.value = 0;

        this.init();
    }

    StopWatch.prototype.init = function () {
        var _self = this;

        $(this.watchCont).append(this.watchArrow);
        $(this.container).append(this.watchCont, this.valueCont, this.startButton, this.pauseButton, this.stopButton);
        this.elem.append(this.container);

        $(this.startButton).on('click', function () {
            _self.start();
        });

        $(this.pauseButton).on('click', function () {
            _self.pause();
        });

        $(this.stopButton).on('click', function () {
            _self.stop();
        });
    };

    StopWatch.prototype.start = function () {
        var _self = this;

        if (_self.interval) return;

        _self.interval = setInterval(function () {
            _self.rotate += 6;
            $(_self.watchArrow).css('transform', 'rotate(' + _self.rotate + 'deg)');
            $(_self.valueCont).text(++_self.value + ' сек.');
        }, 1000);
    };

    StopWatch.prototype.pause = function () {
        clearInterval(this.interval);
        this.interval = null;
    };

    StopWatch.prototype.stop = function () {
        clearInterval(this.interval);
        this.interval = null;
        this.value = 0;
        this.rotate = 0;
        $(this.watchArrow).css('transform', 'rotate(' + this.rotate + 'deg)');
        $(this.valueCont).text('0 сек.');
    };
    
    new StopWatch($('.container'));
});
