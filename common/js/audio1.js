
class xesSlideAudio {
    constructor(options){
        this.options = options;
    }
    /**
     * @Description  初始化 audio
     * @param {options} 初始化参数
     */    
    initAudio() {  
        this.ID = this.options.ID
        this.auto = this.options.Auto
        this.loop = this.options.Loop
        this.autoFlag = true,
        this.src = this.options.src

        if (this.ID == undefined || this.ID == '') {
            console.log('id不能为空,初始化失败')
            return
        }
        this.wrap = this.options.wrap || 'body'
        this.audioTimerBar = ''
        this.audioTimerCircle = ''
        this.currentTime = 0
        this.volume = 0.5
        this.duration = 0
        this.audioItem = ''
        this.play = false
        this.event = {
            mousedown: "mousedown",
            mousemove: "mousemove",
            mouseup: "mouseup",
        }
        this.initAudioUI()
        this.initAudioEle()
        this.initAudioEvent()
    }  

    /**
     * @Description  初始化音频播放样式控件
     */    
    initAudioUI() {
        var AudioUI = `
            <div class="audio_wrap">
                <div class="circle">
                    <canvas class="circle_canvas" width="30" height="30"></canvas>
                    <div class="mask_warp">
                        <div class="mask"></div>
                    </div>
                </div>
                <div class="audio_control">
                    <span class="audio_time start_time">00:00</span>
                    <span class="time_progress">
                        <span class="finished_progress"></span>
                        <span class="time_dot"></span>
                    </span>
                    <span class="audio_time end_time">00:00</span>
                    <span class="volume_icon"></span>
                </div>
                <div class="volume_control">
                    <span class="volume_progress">
                        <span class="volume_range"></span>
                        <span class="volume_dot"></span>
                    </span>
                </div>
                <div class="arrow">
                    <div class="img"></div>
                </div>
            </div>
            `

        $(this.wrap).append(AudioUI);
    }

    /**
     * @Description 初始化 audio标签
     */    
    initAudioEle() {
        var AudioEle = $('<audio id = audio' + this.ID + ' controls="controls" src= ' + this.src + '></audio>');
        $(this.wrap).append(AudioEle);
        var _this = this;

        AudioEle.on('canplay', function () {
            _this.duration = AudioEle[0].duration
            _this.audioItem = AudioEle[0]
            $("#" + _this.ID + " .end_time").text(_this.handleTime(_this.duration))
            // 判断是否要 自动播放
            if (_this.auto == 'true' && _this.autoFlag) {
                _this.autoFlag = false
                $("#" + _this.ID + " .mask").trigger("click");
            }
        })

        AudioEle.on('ended', function () {
            _this.updateCircle(0)
            _this.updateBar(0)
            _this.play = false
            clearInterval(_this.audioTimerBar)
            clearInterval(_this.audioTimerCircle)
            $("#" + _this.ID + " .mask").removeClass('stop')

            if (_this.loop == 'true') {
                $("#" + _this.ID + " .mask").trigger("click");
            }
        })
    }

    /**
     * @Description 初始化事件
     * @param {type} 
     */    
    initAudioEvent() {
        var id = this.ID;
        var _this = this;
        this.setEventType();
        // 注册事件
        // 箭头展开与收缩
        $("#" + id + " .arrow").on('click', function () {
            // bar 隐藏状态, 需要展开bar
            if ($("#" + id + " .audio_control").css('display') == 'none') {
                $("#" + id + " .audio_control").show(500, function () {
                    $(this).css({
                        display: 'inline-flex'
                    })
                })
                $("#" + id + " .arrow").addClass('arrow_show')

                // 清除圆环定时器
                _this.updateCircle(0)
                clearInterval(_this.audioTimerCircle)
                clearInterval(_this.audioTimerBar)

                _this.audioTimerBar = setInterval(function () {
                    _this.currentTime = _this.audioItem.currentTime
                    _this.updateBar((_this.currentTime / _this.duration) * 100)
                }, 200)

            } else {
                // bar 展开状态,需要隐藏bar,更新circle状态
                $("#" + id + " .audio_control").hide(500)
                $('#'+id+' .volume_control').hide(500)
                $("#" + id + " .arrow").removeClass('arrow_show')
                clearInterval(_this.audioTimerCircle)
                // 当只有在播放状态时，才更新Circle状态
                if (_this.play) {
                    _this.audioTimerCircle = setInterval(function () {
                        _this.updateCircle((_this.currentTime / _this.duration) * 100)
                    }, 200)
                }
            }
        })

        //音量按钮
        $('#' + id + ' .volume_icon').on('click',function(){
            if($('#'+id+' .volume_control').css('display') == 'none'){
                $('#'+id+' .volume_control').show(500,function(){
                    $(this).css({
                        display: 'inline-flex'
                    })
                })
            }else{
                $('#'+id+' .volume_control').hide(500)
            }
        })

        // 播放按钮
        $("#" + id + " .mask_warp").on('click', function () {
            if (!$("#" + id + " .mask").hasClass('stop')) {
                // 开始播放
                _this.audioItem.play()
                _this.play = true
                $("#" + id + " .mask").addClass('stop')

                // bar 隐藏
                if ($("#" + id + " .audio_control").css('display') == 'none') {
                    clearInterval(_this.audioTimerCircle)
                    _this.audioTimerCircle = setInterval(function () {
                        _this.currentTime = _this.audioItem.currentTime
                        _this.updateCircle((_this.currentTime / _this.duration) * 100)
                    }, 200)
                } else {
                    clearInterval(_this.audioTimerBar)
                    _this.audioTimerBar = setInterval(function () {
                        _this.currentTime = _this.audioItem.currentTime
                        _this.updateBar((_this.currentTime / _this.duration) * 100)
                    }, 200)
                }

            } else {
                // 暂停播放
                _this.audioItem.pause()
                _this.play = false
                $("#" + id + " .mask").removeClass('stop')
                _this.updateCircle(0)
                clearInterval(_this.audioTimerBar)
                clearInterval(_this.audioTimerCircle)
            }
        })

        var dragflag = false, ox = 0, left = 0, bgleft = 0;
        // 拖动进度条相关事件
        $("#" + id + " .time_dot").on(this.event.mousedown, function (e) {
            var pageX = e.pageX ? e.pageX : e.originalEvent.targetTouches[0].pageX;
            ox = pageX - left;
            dragflag = true;
        })

        //拖动音量条相关事件
        $("#" + id + " .volume_dot").on(this.event.mousedown, function (e) {
            var pageX = e.pageX ? e.pageX : e.originalEvent.targetTouches[0].pageX;
            ox = pageX - left;
            dragflag = true;
        })

        

        $(document).on(this.event.mouseup, function () {
            dragflag = false;
        });

        //鼠标移动
        $("#" + id + " .audio_control").on(this.event.mousemove, function (e) {
            // debugger
            var totalLeft = $('.time_progress').width()
            var pageX = e.pageX ? e.pageX : e.originalEvent.targetTouches[0].pageX;
            if (dragflag) {
                left = pageX - ox;
                if (left <= 0) {
                    left = 0;
                } else if (left > totalLeft) {
                    left = totalLeft;
                }
                $("#" + id + " .time_dot").css('left', left);
                $("#" + id + " .finished_progress").width(left);
                _this.updateAudioTime(left / totalLeft)
            }
        });

        //音量条鼠标移动
        $("#" + id + " .volume_control").on(this.event.mousemove, function (e) {
            // debugger
            var totalLeft = $('.volume_progress').width()
            var pageX = e.pageX ? e.pageX : e.originalEvent.targetTouches[0].pageX;
            //left = totalLeft * _this.volume
            if (dragflag) {
                left = pageX - ox;
                if (left <= 0) {
                    left = 0;
                } else if (left > totalLeft) {
                    left = totalLeft;
                }
                $("#" + id + " .volume_dot").css('left', left);
                $("#" + id + " .volume_range").css('width', left);
                _this.updateVolume(left / totalLeft)
            }
        });



        // 点击进度条相关
        $("#" + id + " .time_progress").click(function (e) {//鼠标点击
            var totalLeft = $('.time_progress').width()
            var pageX = e.pageX ? e.pageX : e.originalEvent.targetTouches[0].pageX;
            if (!dragflag) {
                bgleft = $("#" + id + " .time_progress").offset().left;
                left = pageX - bgleft;
                if (left <= 0) {
                    left = 0;
                } else if (left > totalLeft) {
                    left = totalLeft;
                }
                
                $("#" + id + " .time_dot").css('left', left);
                $("#" + id + " .finished_progress").css('width', left);
                _this.updateAudioTime(left / totalLeft)
            }
        });

        //点击音量条相关
        $("#" + id + " .volume_progress").click(function (e) {//鼠标点击
            var totalLeft = $('.volume_progress').width()
            var pageX = e.pageX ? e.pageX : e.originalEvent.targetTouches[0].pageX;
            if (!dragflag) {
                bgleft = $("#" + id + " .volume_progress").offset().left;
                left = pageX - bgleft;
                if (left <= 0) {
                    left = 0;
                } else if (left > totalLeft) {
                    left = totalLeft;
                }
                $("#" + id + " .volume_dot").css('left', left);
                $("#" + id + " .volume_range").css('width', left);
                _this.updateVolume(left / totalLeft)
            }
        });
    }

    /**
     * @Description 根据秒数，返回小时：分钟：秒格式数据
     * @param {*} seconds 秒数
     * @returns 小时：分钟：秒格式数据
     */
    handleTime(seconds) {
        var secondTime = parseInt(seconds);// 秒
        if (isNaN(secondTime)) {
            return '00:00';
        }
        var minuteTime = 0;// 分
        var hourTime = 0;// 小时
        if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
            //获取分钟，除以60取整数，得到整数分钟
            minuteTime = parseInt(secondTime / 60);
            //获取秒数，秒数取佘，得到整数秒数
            secondTime = parseInt(secondTime % 60);
            //如果分钟大于60，将分钟转换成小时
            if (minuteTime > 60) {
                //获取小时，获取分钟除以60，得到整数小时
                hourTime = parseInt(minuteTime / 60);
                //获取小时后取佘的分，获取分钟除以60取佘的分
                minuteTime = parseInt(minuteTime % 60);
            }
        }
        var result

        if (parseInt(secondTime) > 9) {
            result = parseInt(secondTime);
        } else {
            result = "0" + parseInt(secondTime);
        }

        if (minuteTime > 0) {
            result = " " + parseInt(minuteTime) + ":" + result;
        } else {
            result = "0" + parseInt(minuteTime) + ":" + result;
        }
        if (hourTime > 0) {
            result = parseInt(hourTime) + ":" + result;
        }
        return result;
    }


    /**
     * @Description 更新圆环进度条
     * @param {*} percentage 时间百分比
     */
    updateCircle(percentage) {
        var canvas = $("#" + this.ID + " .circle_canvas")[0];
        var cxt = canvas.getContext('2d');
        cxt.lineWidth = 30;
        cxt.strokeStyle = '#5A75F6';
        cxt.clearRect(0, 0, canvas.width, canvas.height)
        cxt.beginPath();
        cxt.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0, percentage / 100 * 360 * Math.PI / 180, false)
        cxt.stroke();
        cxt.closePath();
    }

    /**
     * @Description 更新矩形进度条
     * @param {*} percentage 播放百分比
     */
    updateBar(percentage) {
        var totalLeft = $('.time_progress').width();
        var left = percentage / 100 * totalLeft
        if (left <= 0) {
            left = 0;
        } else if (left > totalLeft) {
            left = totalLeft;
        }
        $("#" + this.ID + " .time_dot").css('left', left);
        $("#" + this.ID + " .finished_progress").css('width', left);
        this.updateAudioTimeText(left / totalLeft)
    }

    //音量调节
    updateVolume(volume){
        this.audioItem.volume = volume

    }

    /**
     * @Description 设置当前播放时间
     * @param {*} percentage 播放百分比
     * @memberof xesSlideAudio
     */
    updateAudioTime(percentage) {
        var curtime = percentage * this.duration;
        this.audioItem.currentTime = curtime
        $("#" + this.ID + " .start_time").text(this.handleTime(curtime))
    }

    /**
     * @Description 更改当前播放时间
     * @param {*} percentage 播放百分比
     * @memberof xesSlideAudio
     */
    updateAudioTimeText(percentage) {
        var curtime = percentage * this.duration;
        $("#" + this.ID + " .start_time").text(this.handleTime(curtime))
    }

    /**
     * @Description 修改事件类型
     */    
    setEventType() {
        var isMobile = this.getMobile()
        if (isMobile) {
            this.event = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }
        }
    }

    /**
     * 获取是否移动端
     */
    getMobile() {
        var ua = navigator.userAgent;
        var system = {
            win: false,
            mac: false,
            x11: false,
            //mobile
            iphone: false,
            ipad: false,
            ios: false,
            android: false,
            winMobile: false
        };

        var p = navigator.platform;
        system.win = p.indexOf('Win') == 0;
        system.mac = p.indexOf('Mac') == 0;
        system.x11 = (p == 'x11') || (p.indexOf('Linux') == 0);

        system.iphone = ua.indexOf('iPhone') > -1;
        system.ipad = ua.indexOf('iPad') > -1;
        system.android = ua.indexOf('Android') > -1;

        if (system.iphone || system.ipad || system.android) {
            return true
        } else {
            return false
        }
    }
}

var _audioList = $('.audio')
_audioList.each(function(){
    var options = {
        ID:$(this).attr('id'),
        wrap:"#"+$(this).attr('id'),
        Auto:$(this).attr('auto'),
        Loop:$(this).attr('isloop'),
        src:$(this).attr('audiosrc')
    }
    window.audioObj = options
    let audio = new xesSlideAudio(options)
    audio.initAudio()
})

