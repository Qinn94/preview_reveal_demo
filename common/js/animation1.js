class Animation{
    constructor(pageData){
        this.PAGEDATA = pageData
        this.ANIMATION = {
            // 出现动画
            'AnimationA': {
                'none': {
                    'name': 'none',
                    'type': 0,
                    'animation': (index) => {
                        document.getElementById(pageData.Item[index].ID).style.display = 'inline-flex'    
                    }
                },
                '1': {
                    'name': 'None1',
                    'type': 0,
                    'animation': (index) => {
                        document.getElementById(pageData.Item[index].ID).style.display = 'inline-flex'
                        
                    }
                },
                '2': {
                    'name': 'FadeIn',
                    'type': 0,
                    'animation':  (index) => {
                        this.domAnimation(index, 'fadeIn', pageData.Item[index].curEffectDuration, 'AnimationA')
                        
                    }
                },
                '3': {
                    'name': 'EraseIn',
                    'type': 1,
                    'animation': (index) => {
                        this.domAnimation(index, 'fadeIn', pageData.Item[index].curEffectDuration, 'AnimationA')
                        
                    }
                },
                '4': {
                    'name': 'MoveIn',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'MoveIn', pageData.Item[index].curEffectDuration, 'AnimationA')
                    }
                },
                '5': {
                    'name': 'RiseIn',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'RiseIn', pageData.Item[index].curEffectDuration, 'AnimationA')
                        
                    }
                },
                '6': {
                    'name': 'ScaleIn',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'ScaleIn', pageData.Item[index].curEffectDuration, 'AnimationA')
                        
                    }
                },
                '7': {
                    'name': 'Dissolve',
                    'type': 1,
                    'animation': (index) => {
                        this.domAnimation(index, 'fadeIn', pageData.Item[index].curEffectDuration, 'AnimationA')
                    }
                },
                '8': {
                    'name': 'Blinds',
                    'type': 1,
                    'animation': (index) => {
                        this.domAnimation(index, 'fadeIn', pageData.Item[index].curEffectDuration, 'AnimationA')
                        
                    }
                },
                '9': {
                    'name': 'Randomline',
                    'type': 1,
                    'animation': (index) => {
                        this.domAnimation(index, 'fadeIn', pageData.Item[index].curEffectDuration, 'AnimationA')
                        
                    }
                },
                '10': {
                    'name': 'JumpIn',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'JumpIn', pageData.Item[index].curEffectDuration, 'AnimationA', Math.ceil(pageData.Item[index].curEffectDuration / 1000))
                    }
                },
                '11': {
                    // 螺旋
                    'name': 'FlipIn',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'FlipIn', pageData.Item[index].curEffectDuration, 'AnimationA')
                    }
                },
                '12': {
                    // 飞旋
                    'name': 'SpiralIn',
                    'type': 1,
                    'animation': (index) => {
                        this.domAnimation(index, 'SpiralIn', pageData.Item[index].curEffectDuration, 'AnimationA')
                        
                    }
                }
            },
            // 动作
            'AnimationT': {
                'none': {
                    'name': 'none',
                    'type': 0,
                    'animation': (index) => {
                        document.getElementById(this.PAGEDATA.Item[index].ID).style.display = 'inline-flex'
                    },
                },
                '16': {
                    'name': 'None2',
                    'type': 0,
                    'animation': (index) => {
                        document.getElementById(this.PAGEDATA.Item[index].ID).style.display = 'inline-flex'
                    },
                },
                '32': {
                    // 闪烁
                    'name': 'Flicker',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'Flicker', 650, 'AnimationT', pageData.Item[index].curEffectDuration / 500 )    
                    }
                },
                '48': {
                    // 抖动
                    'name': 'Jitter',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'Jitter', 550, 'AnimationT', pageData.Item[index].curEffectDuration / 500 )
                    }
                },
                '64': {
                    // 心跳
                    'name': 'Heartbeat',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'Heartbeat', 500, 'AnimationT', pageData.Item[index].curEffectDuration / 500 )
                    }
                },
                '80': {
                    // 弹跳
                    'name': 'Bounce',
                    'type': 0,
                    'animation': (index) => { 
                        this.domAnimation(index, 'Bounce', 800, 'AnimationT', pageData.Item[index].curEffectDuration / 600 )
                        
                    }
                },
                '96': {
                    // 自定义
                    'name': 'Custom',
                    'type': 0,
                    'animation': (index) => {
                        document.getElementById(this.PAGEDATA.Item[index].ID).style.display = 'inline-flex'
                    }
                },
                '112': {
                    'name': 'Wave',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'Wave', pageData.Item[index].curEffectDuration, 'AnimationT', 1)
                    }
                },
                '128': {
                    'name': 'TypeWriter',
                    'type': 0,
                    'animation': (index) => {
                        document.getElementById(this.PAGEDATA.Item[index].ID).style.display = 'inline-flex'
                    }
                }
            },
            // 消失
            'AnimationD': {
                'none': {
                    'name': 'none',
                    'type': 0,
                    'animation': (index) => {
                            document.getElementById(this.PAGEDATA.Item[index].ID).style.display = 'none'
                    },
                },
                '256': {
                    'name': 'None3',
                    'type': 0,
                    'animation': (index) => {
                        document.getElementById(this.PAGEDATA.Item[index].ID).style.display = 'none'
                        
                    },
                },
                '512': {
                    'name': 'FadeOut',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'FadeOut', pageData.Item[index].curEffectDuration, 'AnimationD')                   
                    }
                },
                '1024': {
                    'name': 'MoveOut',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'MoveOut', pageData.Item[index].curEffectDuration, 'AnimationD')
                    }
                },
                '1280': {
                    'name': 'RiseOut',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'RiseOut', pageData.Item[index].curEffectDuration, 'AnimationD')
                    }
                },
                '1536': {
                    'name': 'ScaleOut',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'ScaleOut', pageData.Item[index].curEffectDuration, 'AnimationD')
                    }
                },
                '768': {
                    'name': 'EraseOut',
                    'type': 1,
                    'animation': (index) => {
                        this.domAnimation(index, 'FadeOut', pageData.Item[index].curEffectDuration, 'AnimationD')
                        
                    }
                },
                '1792': {
                    // 溶解
                    'name': 'DissolveOut',
                    'type': 1,
                    'animation': (index) => {
                        this.domAnimation(index, 'FadeOut', pageData.Item[index].curEffectDuration, 'AnimationD')
                        
                    }
                },
                '2048': {
                    // 随机线条
                    'name': 'RandomlineOut',
                    'type': 1,
                    'animation': (index) => {
                        this.domAnimation(index, 'FadeOut', pageData.Item[index].curEffectDuration, 'AnimationD')
                    }
                },
                '2304': {
                    //  涟漪
                    'name': 'RippleOut',
                    'type': 1,
                    'animation': (index) => {
                        this.domAnimation(index, 'FadeOut', pageData.Item[index].curEffectDuration, 'AnimationD')
                    }
                },
                '2560': {
                    'name': 'JumpOut',
                    'type': 0,
                    'animation': (index) => {
                        document.getElementById(this.PAGEDATA.Item[index].ID).style.display = 'none'
                    }
                },
                '2816': {
                    'name': 'FlipOut',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'FlipOut', pageData.Item[index].curEffectDuration, 'AnimationD')
                    }
                },
                '3072': {
                    'name': 'SpiralOut',
                    'type': 0,
                    'animation': (index) => {
                        this.domAnimation(index, 'SpiralOut', pageData.Item[index].curEffectDuration, 'AnimationD')
                        
                    }
                }
            }
        }
        this.ANIMATIONCONFIG = { 
            // appear动画 开始结束范围
            'APPEARSTART': 1,
            'APPEAREND': 12,
            // translate动画 开始结束范围
            'TRANSLATESTART': 16,
            'TRANSLATESTEND': 128,
            // disappear动画 开始结束范围
            'DISSAPPEARSTART': 256,
            'DISSAPPEAREND': 3072
        }
        this.CURTIMELINEIDX = 0 // 当前进行到的动画顺序
    }

    init(){
        this.initpageObject()
        this.initClickEvent()
        $('title').html(this.PAGEDATA.pageName)
    }
    preloadImage() {
        // 将图片资源提前加载
        $("img").each(function (key, value) {
            if (value.getAttribute('data-src') != null) {
                $(value).attr({
                    
                    'src': value.getAttribute('data-src'),
                    'data-src': null
                })
            }
        })
    }
    initClickEvent(){
       var _this = this
        // 监听键盘事件 处理页面动画
        $(document).keydown(function (event) {
            // 34 pagedown 向右箭头
            // 下一步
            if (event.keyCode == 39) {
                _this.playNext()
            }

            // 33 pageup 向左箭头
            // 上一步
            if (event.keyCode == 37) {
                _this.playLast()
            }
        })

        // 下一个动画
        $("#rightArrow").on('click', function () {
            // debugger
            _this.playNext()
        })

        // 上一个动画
        $("#leftArrow").on('click', function () {
            _this.playLast()
        })
    }

    /**
     * @description 初始化页面中元素
     */
    initpageObject() {
        var pageObj = this.PAGEDATA

        this.preloadImage()
        // 当前页面有背景图片情况下，将图片作为纹理添加
        if (pageObj.Image != undefined) {
            // 页面的effect 实际类型是 AnimationA 
            var pageItem = {
                'isPage': true,
                'PaintType': 'Image',
                'X': 0,
                'Y': 0,
                'Z': -1000,
                'Rotation': 0,
                'ID': pageObj.ID,
                'ImageID': pageObj.ImageID,
                'AnimationA': {
                    'Effect': pageObj.Effect,
                    'Delay': '0',
                    'Duration': '1000'
                },
                'AnimationT': {
                    'Effect': '0',
                    'Delay': '0',
                    'Duration': '1000'
                },
                'AnimationD': {
                    'Effect': '0',
                    'Delay': '0',
                    'Duration': '1000'
                },
                'Image': pageObj.Image,
                'Width': pageObj.Width,
                'Height': pageObj.Height
            }
            this.addMeshTexture(pageItem, 0, true)
        } else {
            $("#container").css({
                'backgroundColor': pageObj.Color
            })
        }

        if (pageObj.Item != undefined) {
            // 循环处理页面中元素
            for (var i = 0; i < pageObj.Item.length; i++) {
                switch (pageObj.Item[i].PaintType) {
                    case 'Image':
                    case 'Text':
                    case 'ShapeRect':
                    case 'ShapeEllipse':
                    case 'ShapeRoundRect':
                    case 'MathFomula':
                    case 'Line':
                    case 'LineStart':
                    case 'LineArrow':
                    case 'Table':
                    case 'Button':
                    case 'RichTextChild':
                    case 'Web':
                    case 'NormalWeb':
                    case 'InteractiveWeb':
                    case 'Video':
                    case 'ShapeRightTriangle':
                    case 'ShapeTriangle':
                    case 'ShapeParallelogram':
                    case 'ShapeDiamond':
                    case 'ShapeTrapezia':
                    case 'ShapePentagon':
                    case 'ShapeHexagon':
                    case 'ShapeHeadArrow':
                    case 'ShapeDoubleHeadArrow':
                    case 'ShapeArrow':
                    case 'ShapeRect':
                    case 'ShapeRoundRect':
                    case 'MindMapWeb':
                    case 'NB':
                    case 'GGB':
                    case 'SWFWeb':
                    case 'Coding':
                    case 'PPT2H5':
                    case 'SubImage':
                        this.addMeshTexture(pageObj.Item[i], i, false);
                        break
                    case 'Audio':
                        this.addAudio(pageObj.Item[i], i, false);
                        break
                    default:
                        this.addNothing(pageObj.Item[i], i, false);
                        break
                }
            }
        }
        //this.hideLoading()       
    }
    /**
     * @description 添加图片/canvas 
     */
    addMeshTexture(itemObj, idx, page) {
        // 当TimeLine存在
        var _this = this
        var orderArr = []
        if (this.PAGEDATA.TimeLine != undefined) {
            $('#sliderSelect').show()
            orderArr = this.getOrderArr(itemObj.ID)
        }
        var curEffectType = this.getEffectType(orderArr[0], page)
        var visible = this.getMeshVisible(orderArr[0], page, itemObj.IsTarget)
        
        // if($('#'+itemObj.ID).children().prop('tagName') == 'IFRAME'){          
        //     if($('#'+itemObj.ID).find('iframe').attr('isLocal') == 'isLocal'){
        //         $('#'+itemObj.ID).find('iframe').contents().find('body').keydown(function(event){
        //             if(event.keyCode == 34){
        //                 _this.playNext()
        //             }
        //             if(event.keyCode == 33){
        //                 _this.playLast()
        //             }
        //         })
        //     }    
        // }

        $("#" + itemObj.ID).css({
            display: visible ? 'inline-flex' : 'none',
        })

        if (itemObj.Target != undefined) {
            // 绑定元素事件
            this.initButtonEvent(itemObj.ID)
        }

        // 是表格并且有遮罩情况下，绑定遮罩事件
        if (itemObj.PaintType == 'Table' && itemObj.TableCover.length != 0) {
            this.initTableEvent(itemObj.TableCover)
        }

        if (itemObj.PaintType == 'PPT2H5' || itemObj.PaintType == 'Coding' || itemObj.PaintType == 'Web' || itemObj.PaintType == 'NormalWeb' || itemObj.PaintType == 'InteractiveWeb' || itemObj.PaintType == 'MindMapWeb' || itemObj.PaintType == 'NB' || itemObj.PaintType == 'GGB' || itemObj.PaintType == 'SWFWeb') {
            $('#' + itemObj.ID).css({
                overflow: 'auto',
                '-webkit-overflow-scrolling': 'touch',
            })
        }

        //强制重新刷新GGB iframe
        if(itemObj.PaintType == 'GGB'){
            var iframe = $('#' + itemObj.ID).find('iframe')
            iframe.attr('src', itemObj.GGBUrl);
        }

        //思维导图
        if(itemObj.PaintType == 'MindMapWeb'){
            $('#' + itemObj.ID).find('iframe').on('load',function(event){
                 this.contentWindow.xesMinderImportJson(itemObj['ContentJson'])
             })
        }


        // 非背景
        if (!page) {
            //this.setMeshPosition(itemObj.ID, itemObj.X, itemObj.Y, itemObj.Z, itemObj.maxWidth, itemObj.maxHeight); 
            this.concactMeshData(idx, {
                'TargetIdx': 0,
                'curEffect': orderArr[0],
                'curEffectType': curEffectType,
                'curEffectDelay': itemObj[curEffectType].Delay,
                'curEffectDuration': itemObj[curEffectType].Duration,
            })
        } else {
            // 背景图默认展示
            $("#" + itemObj.ImageID).css({
                display: 'block'
            })
            //this.setMeshPosition(itemObj.ImageID, itemObj.X, itemObj.Y, itemObj.Z, itemObj.Width, itemObj.Height);
        }
    }

    /**
     * 
     * @param {*} itemObj audio 元素
     * @param {*} idx 当前idx
     * @description 添加音频
     */
    addAudio(itemObj, idx) {
        // this.initAudio({
        //     ID: itemObj.ID,
        //     src: itemObj.AudioUrl,
        //     wrap: '#' + itemObj.ID,
        //     // wrap: '#container',
        //     Auto: itemObj.AudioAuto,
        //     Loop: itemObj.AudioLoop,
        // })

        // $("#" + itemObj.ID).css({
        //     position: 'absolute',
        //     left: itemObj.X / DomBase + 'rem',
        //     top: itemObj.Y / DomBase + 'rem',
        //     zIndex: 3,
        //     display: 'inline-flex',
        //     justifyContent: 'left',
        // })

        var order = this.getOrderArr(itemObj.ID)
        var curEffectType = this.getEffectType(order[0], false)
        var visible = this.getMeshVisible(order[0], false, itemObj.IsTarget)

        $("#" + itemObj.ID).css({
            display: visible == true ? 'inline-flex' : 'none'
        })

        this.concactMeshData(idx, {
            'TargetIdx': 0,
            'curEffect': order[0],
            'curEffectType': curEffectType,
            'curEffectDelay': itemObj[curEffectType].Delay,
            'curEffectDuration': itemObj[curEffectType].Duration,
        })
    }
    /**
     * @description 不识别元素
     */
    addNothing(itemObj, idx) {
        console.log(itemObj)
        console.log('当前元素不识别')
    }

    // 将mesh数据与对应data数据合并到一起
    concactMeshData(idx, obj) {
        Object.assign(this.PAGEDATA.Item[idx], obj);
    }

    /**
     * @description 初始化表格遮罩相关事件
     */
    initTableEvent (tablecoverArr) {
        tablecoverArr.forEach(function (item, index, array) {
            $('#' + item.ID).click(function () {
                $(this).hide()
            })
        })  
    }

    // //解析item数据和事件
    // initItemData(){
    //     //解析item数据
    //     this.PAGEDATA.Item.forEach(itemObj => {
    //         //渲染思维导图
    //         if(itemObj.ContentJson != undefined){
    //             this.minderRender(itemObj)
    //         }

    //         //按钮
    //         if (itemObj.Target != undefined) {
    //             // 绑定元素事件
    //             this.initButtonEvent(itemObj.ID)
    //         }
    //     })
    // }

    //神奇按钮
    initButtonEvent(id) {
        var _this = this
        $("#" + id).click(function (e) {
            _this.buttonAnimation(e.currentTarget.id)
        })
    }

    /**
     * @description 点击神奇按钮触发动画
     */
    buttonAnimation (id) {
        if (!this.PAGEDATA.Item[this.getIdxBytargetId(id)]) {
            return
        }
        var playMode = this.PAGEDATA.Item[this.getIdxBytargetId(id)].TargetPlayMode
        // 一起播放
        if (playMode === '0') {
            for (let i = 0; i < this.PAGEDATA.Item[this.getIdxBytargetId(id)].Target.length; i++) {
                this.playTatgetAnimation(id)
            }
        } else {
            this.playTatgetAnimation(id)
        }
    }
    /**
     * @description 根据targetId获取物体在xml中顺序
     */
    getIdxBytargetId(targetId) {
        for (let i = 0; i < this.PAGEDATA.Item.length; i++) {
            if (this.PAGEDATA.Item[i].ID == targetId) {
                return i
            }
        }
        return null
    }

    /**
     * @description 播放神奇按钮触发的元素动画
     */
    playTatgetAnimation(id) {
        var targetId = this.getTargetById(id)
        var targetIdx = this.getIdxBytargetId(targetId)
        // 当前不存在target
        if (targetIdx == null) { return; }

        try {
            var a = this.PAGEDATA.Item[targetIdx].name
        }
        catch (err) {
            return
        }
        // 默认出现动画为fadein类型
        this.PAGEDATA.Item[targetIdx].curEffect = 2
        this.PAGEDATA.Item[targetIdx].curEffectDelay = 0
        this.PAGEDATA.Item[targetIdx].curEffectDuration = 1000
        this.PAGEDATA.Item[targetIdx].curEffectType = "AnimationA"
        this.getAnimation(targetIdx)
    }

    /**
     * @description 根据当前选中物体id,获取神奇按钮对应触发物体的在id
     */
    getTargetById(id) {
        for (let i = 0; i < this.PAGEDATA.Item.length; i++) {
            if (this.PAGEDATA.Item[i].ID == id) {
                if (this.PAGEDATA.Item[i].Target == undefined) {
                    return null
                }
                if (parseInt(this.PAGEDATA.Item[i].TargetIdx) < parseInt(this.PAGEDATA.Item[i].Target.length)) {
                    return this.PAGEDATA.Item[i].Target[this.PAGEDATA.Item[i].TargetIdx++]
                }
            }
        }
        return null;
    }

    getAnimation(index) {
        var _this = this
        // 当前要进行动画的物体
        var item = this.PAGEDATA.Item[index]
        // 延时动画
        setTimeout(() => {
            _this.getPropertyAnimation(index)
        }, item.curEffectDelay);
    }

    /**
     * @Description: 
     * @param {type} 
     */    
    getPropertyAnimation(index) {
        var effect = this.PAGEDATA.Item[index].curEffect
        var id = this.PAGEDATA.Item[index].ID
        // 出现
        if (this.ANIMATIONCONFIG.APPEARSTART < effect && effect <= this.ANIMATIONCONFIG.APPEAREND) {
            // 当前存在这个动画
            if (this.ANIMATION.AnimationA[effect] != undefined) {
                this.ANIMATION.AnimationA[effect].animation(index)
            } else {
                // 没有对应的动画 元素直接出现
                $("#" + id).show()
            }
        }

        // 过程
        if (this.ANIMATIONCONFIG.TRANSLATESTART < effect && effect <= this.ANIMATIONCONFIG.TRANSLATESTEND) {
            // table 类型的过程动画都不展示
            // if (this.PAGEDATA.Item[index].PaintType == 'Table') {
            //     // this.PAGEDATA.Item[index].mesh.visible = true
            //     // 默认展示48, 由于其他方法 改变opacity, group 类型会有问题
            //     this.ANIMATION.AnimationT[48].animation(index)
            // } else
            if (this.ANIMATION.AnimationT[effect] != undefined) {
                // 当前存在这个动画
                this.ANIMATION.AnimationT[effect].animation(index)
            } else {
                // 没有对应的动画 元素显示
                $("#" + id).show()
            }
        }

        // 消失
        if (this.ANIMATIONCONFIG.DISSAPPEARSTART < effect && effect <= this.ANIMATIONCONFIG.DISSAPPEAREND) {
            
            // 当前存在这个动画
            if (this.ANIMATION.AnimationD[effect] != undefined) {
                this.ANIMATION.AnimationD[effect].animation(index)
            } else {
                // 没有对应的动画 元素消失
                $("#" + id).hide()
            }
        }
    }

    // **
    // effect: 当前动画类型
    // isPage: 是否为背景页
    // isTarget: 当前是否为被触发元素
    // **
    // 根据动画类型，获取当前页面是否展示
    getMeshVisible(effect, isPage, isTarget) {
        var visible = true;
        if (isPage) {
            visible = true
        } else if (isTarget == 'true' || isTarget == true) {
            // 当前是被触发源的时候 默认隐藏
            visible = false
        } else {
            if (this.ANIMATIONCONFIG.APPEARSTART < effect && effect <= this.ANIMATIONCONFIG.APPEAREND) {
                visible = false
            }
            if ((this.ANIMATIONCONFIG.DISSAPPEARSTART < effect && effect <= this.ANIMATIONCONFIG.DISSAPPEAREND) || (this.ANIMATIONCONFIG.TRANSLATESTART < effect && effect <= this.ANIMATIONCONFIG.TRANSLATESTEND)) {
                visible = true
            }
        }
        return visible
    }


    /**
     * @Description: 进行切页动画
     * @param {idx} 
     * @param {callback} 回调
     */    
    pageAnimation(idx, callback) {
        $("#container").hide(500, function name(params) {
            if (typeof (callback) == 'function') {
                callback()
            }
        })
    }  
    /**
     * @Description: 根据效果，获取当时是什么类型动画
     * @param {isPage} 是否为页面元素
     * @param {effect} 效果
     */    
    getEffectType(effect, isPage) {
        var effectType = 'AnimationA'
        if (isPage) {
            effectType = 'AnimationA'
        } else {
            if (this.ANIMATIONCONFIG.APPEARSTART < effect && effect <= this.ANIMATIONCONFIG.APPEAREND) {
                effectType = 'AnimationA'
            }
            if (this.ANIMATIONCONFIG.TRANSLATESTART < effect && effect <= this.ANIMATIONCONFIG.TRANSLATESTEND) {
                effectType = 'AnimationT'
            }
            if (this.ANIMATIONCONFIG.DISSAPPEARSTART < effect && effect <= this.ANIMATIONCONFIG.DISSAPPEAREND) {
                effectType = 'AnimationD'
            }
        }
        return effectType
    }
    /**
     * @Description:  获取页面某个元素 动画顺序数组
     * @param {id} 当前物体id
     */    
    getOrderArr(id) {
        var orderArr = []
        if (this.PAGEDATA.TimeLine) {
            for (var i = 0; i < this.PAGEDATA.TimeLine.length; i++) {
                if (this.PAGEDATA.TimeLine[i].ID == id) {
                    orderArr.push(this.PAGEDATA.TimeLine[i].Effect)
                }
            }
        }
        return orderArr
    }
    
    /**
     * @description 显示当前背景
     */
    showBackgroundImg() {
        var data = this.PAGEDATA
        if (data.Image != undefined) {
            // console.log(data.ImageID)
            $("#" + data.ImageID).show();
        } else {
            $("#container").css({
                'backgroundColor': data.Color
            })
        }
    }
    /**
     * @Description: 隐藏背景
     * @param {index} 当前隐藏页面id
     */    
    hideBackgroundImg(index) {
        var data = this.PAGEDATA[index].data
        if (data.Image != undefined) {
            $("#" + data.ImageID).hide();
        } else {
            // 设置背景色
            $("#container").css({
                'backgroundColor': data.Color
            })
        }
    }
    /**
     * @description 展示当前页面下所有物体
     */
    showAllMesh() {
        var data = this.PAGEDATA
        var orderArr = [], endEffectType;
        if (this.PAGEDATA.Item == undefined) { return }
        for (let i = 0; i < data.Item.length; i++) {
            // 非神奇按钮元素展示
            if (data.Item[i].IsTarget == 'false' || data.Item[i].IsTarget == false || data.Item[i].IsTarget == null) {
                orderArr = this.getOrderArr(data.Item[i].ID)
                // 没有动画时，默认物体一直显示
                endEffectType = this.getEffectType(orderArr[0], false)
                // 当前物体没有动画, 则默认展示
                if (orderArr.length == 0 || data.TimeLine == undefined) {
                    this.setMeshVisible(i)
                } else {
                    document.getElementById(data.Item[i].ID).style.display = (this.getMeshVisible(orderArr[0], false, data.Item[i].IsTarget)) ? 'inline-flex' : 'none'
                }
            } else {
                // 神奇按钮 默认隐藏
                document.getElementById(data.Item[i].ID).style.display = 'none'
            }
        }
    }
    /**
     * @description 展示单个mesh
     */
    setMeshVisible(index) {
        var items = this.PAGEDATA.Item
        if (document.getElementById(items[index].ID)) {
            document.getElementById(items[index].ID).style.display = 'inline-flex'
        }
    }
    /**
     * @description dom 元素动画
     */
    domAnimation(index, type, time, animateType, count) {
        var animateFlag = animateType
        $("#" + this.PAGEDATA.Item[index].ID).css({
            'animation-play-state':'paused',
            '-webkit-animation-play-state':'paused'
        })
        // debugger
        // 螺旋进入
        var _this = this
        if (type == 'FlipIn') {
            this.createFlipInAnimation(index, time)
            return
        }

        // 螺旋淡出
        if (type == 'FlipOut') {
            this.createFlipOutAnimation(index, time)
            return
        }

        // 跳跃进入
        if (type == 'JumpIn') {
            this.createJumpInAnimation(index, time, count)
            return
        }

        // 跳出
        if (type == 'JumpOut') {
            this.createJumpOutAnimation(index, time, count)
            return
        }

        if (animateType == 'AnimationA') {
            console.log('aaaaaa')
            $("#" + this.PAGEDATA.Item[index].ID)
                .css({ display: 'inline-flex','animation-play-state':'running',
                '-webkit-animation-play-state':'running' })
                .addClass(type)
                .addClass('animated')
                // 动画时间
                .css('animation-duration', time + 'ms')
        }
        if (animateType == 'AnimationD') {
            console.log('dddddd')
            $("#" + this.PAGEDATA.Item[index].ID)    
                .css({ display: 'inline-flex','animation-play-state':'running',
                '-webkit-animation-play-state':'running' })
                .addClass(type)
                .addClass('animated')
                // 动画时间
                .css('animation-duration', time + 'ms')
        }

        if (animateType == 'AnimationT') {
            console.log('tttttt')
            count = count.toString()
            $("#" + this.PAGEDATA.Item[index].ID)
                .css({ display: 'inline-flex' ,'animation-play-state':'running',
                '-webkit-animation-play-state':'running'})
                .addClass(type)
                .addClass('animated')
                .css('animation-duration', time + 'ms')
                // 只接受string类型参数
                .css('animation-iteration-count', count)
                .css('-webkit-animation-iteration-count', count)
        }
        $("#" + this.PAGEDATA.Item[index].ID).one('animationend', function () {
            if(animateFlag == 'AnimationA'){
                $("#" + _this.PAGEDATA.Item[index].ID)
                .removeClass(type)
                .removeClass('animated')
            }
            if (animateFlag == 'AnimationD') {
                $("#" + _this.PAGEDATA.Item[index].ID)
                .removeClass(type)
                .removeClass('animated')
                .css({ display: 'none' })
            }
            if (animateFlag == 'AnimationT') {
                $("#" + _this.PAGEDATA.Item[index].ID)
                .removeClass(type)
                .removeClass('animated')
                .css('animation-iteration-count', '1')
                .css('-webkit-animation-iteration-count', '1')
            }
        })
    }
    /**
     * @description 创建螺旋进入动画
     */
    createFlipInAnimation(index, time) {
        var id = this.PAGEDATA.Item[index].ID
        var dom = $("#" + this.PAGEDATA.Item[index].ID)
        var width = parseInt(dom.width())
        var height = parseInt(dom.height())
        // 螺旋半径
        var radius = (Math.max(width, height) / 20) > 20 ? Math.max(width, height) / 20 : 20
        var originTop = parseInt(dom.css('top'))
        var originLeft = parseInt(dom.css('left'))
        var FlipInX =
            `@keyframes FlipInX_${id} {
            0% {
                animation-timing-function: ease-in;
                left: ${originLeft - radius * 18}px 
            }
            15% {
                animation-timing-function: ease-out;
                left: ${originLeft - radius * 3}px 
            }
            30% {
                animation-timing-function: ease-in;
                left: ${originLeft + radius * 10}px 
            }
            45% {
                animation-timing-function: ease-out;
                left: ${originLeft + radius * 2}px   
            }
            60% {
                animation-timing-function: ease-in;
                left: ${originLeft - radius * 3}px
            }
            75% {
                animation-timing-function: ease-out;
                left: ${originLeft}px
            }
            82.5% {
                animation-timing-function: ease-in;
                left: ${originLeft + radius * 2}px
            }
            95%{
                animation-timing-function: ease-out;
                left: ${originLeft + radius}px
            }
            100% {
                animation-timing-function: ease-in;
                left: ${originLeft}px
            }
        }`;


        var FlipInY =
            `@keyframes FlipInY_${id} {
            0% {
                opacity: 0.3;
                -webkit-transform: scale3d(0.3, 0.3, 0.3);
                transform: scale3d(0.3, 0.3, 0.3);
                animation-timing-function: ease-out;
                top: ${originTop + radius * 6}px 
            }
            15% {
                animation-timing-function: ease-in;
                top: ${originTop - radius * 13}px 
            }
            30% {
                animation-timing-function: ease-out;
                top: ${originTop - radius * 2}px 
            }
            45% {
                animation-timing-function: ease-in;
                top: ${originTop + radius * 6}px   
            }
            60% {
                animation-timing-function: ease-out;
                top: ${originTop + radius}px
            }
            75% {
                animation-timing-function: ease-in;
                top: ${originTop - radius * 2}px
            }
            82.5% {
                animation-timing-function: ease-out;
                top: ${originTop}px
            }
            95% {
                animation-timing-function: ease-in;
                top: ${originTop + radius}px
            }
            100% {
                opacity: 1;
                -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
                animation-timing-function: ease-out;
                top: ${originTop}px
            }
        }`;

        var animationClass =
            ` .FlipIn_${id} {
            animation: FlipInX_${id} FlipInY_${id};
            -webkit-animation: FlipInX_${id} FlipInY_${id};
            animation-duration: ${time}ms;
        }`;

        // 将 keyframe 通过style动态 插入页面中
        $("<style></style>").append(FlipInX).append(FlipInY).append(animationClass).appendTo('html')
        $("#" + this.PAGEDATA.Item[index].ID)
            .css({ display: 'inline-flex' })
            .addClass('animated')
            .addClass('FlipIn_' + id)

        $("#" + this.PAGEDATA.Item[index].ID).on('animationend', function () {
            $("#" + this.PAGEDATA.Item[index].ID)
                .removeClass('FlipIn_' + id)
                .removeClass('animated')
        })
    }
    /**
     * @description 创建螺旋退出动画
     */
    createFlipOutAnimation(index, time) {
        var id = this.PAGEDATA.Item[index].ID
        var dom = $("#" + this.PAGEDATA.Item[index].ID)
        var width = parseInt(dom.width())
        var height = parseInt(dom.height())
        // 螺旋半径
        var radius = (Math.max(width, height) / 20) > 20 ? Math.max(width, height) / 20 : 20
        var originTop = parseInt(dom.css('top'))
        var originLeft = parseInt(dom.css('left'))
        var FlipOutX =
            `@keyframes FlipOutX_${id} {
            0% {
                animation-timing-function: ease-in;
                left: ${originLeft}px
            }
            5% {
                animation-timing-function: ease-out;
                left: ${originLeft + radius}px
            }
            12.5% {
                animation-timing-function: ease-in;
                left: ${originLeft + radius * 2}px
            }
            25% {
                animation-timing-function: ease-out;
                left: ${originLeft}px  
            }
            50% {
                animation-timing-function: ease-in;
                left: ${originLeft - radius * 3}px
            }
            65% {
                animation-timing-function: ease-out;
                left: ${originLeft + radius * 2}px 
            }
            80% {
                animation-timing-function: ease-in;
                left: ${originLeft + radius * 10}px 
            }
            90%{
                animation-timing-function: ease-out;
                left: ${originLeft - radius * 3}px
            }
            100% {
                animation-timing-function: ease-in;
                left: ${originLeft - radius * 18}px
            }
        }`;


        var FlipOutY =
            `@keyframes FlipOutY_${id} {
            0% {
                opacity: 1;
                -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
                animation-timing-function: ease-out;
                top: ${originTop}px
            }
            5% {
                animation-timing-function: ease-in;
                top: ${originTop + radius}px
            }
            12.5% {
                animation-timing-function: ease-out;
                top: ${originTop}px
            }
            25% {
                animation-timing-function: ease-in;
                top: ${originTop - radius * 2}px
            }
            50% {
                animation-timing-function: ease-out;
                top: ${originTop + radius}px
            }
            65% {
                animation-timing-function: ease-in;
                top: ${originTop + radius * 6}px 
            }
            80% {
                animation-timing-function: ease-out;
                top: ${originTop - radius * 2}px 
            }
            90% {
                animation-timing-function: ease-in;
                top: ${originTop - radius * 13}px 
            }
            100% {
                opacity: 0.3;
                -webkit-transform: scale3d(0.3, 0.3, 0.3);
                transform: scale3d(0.3, 0.3, 0.3);
                animation-timing-function: ease-out;
                top: ${originTop + radius * 6}px 
            }
        }`;

        var animationClass =
            ` .FlipOut_${id} {
            animation: FlipOutX_${id} FlipOutY_${id};
            -webkit-animation: FlipOutX_${id} FlipOutY_${id};
            animation-duration: ${time}ms;
        }`;

        // 将 keyframe 通过style动态 插入页面中
        $("<style></style>").append(FlipOutX).append(FlipOutY).append(animationClass).appendTo('html')
        $("#" + this.PAGEDATA.Item[index].ID)
            .css({ display: 'inline-flex' })
            .addClass('animated')
            .addClass('FlipOut_' + id)

        $("#" + this.PAGEDATA.Item[index].ID).on('animationend', function () {
            $("#" + this.PAGEDATA.Item[index].ID)
                .css({ display: 'none' })
                .removeClass('FlipOut_' + id)
                .removeClass('animated')
        })
    }
    /**
     * @description 创建跳跃进入动画
     */
    createJumpInAnimation(index, time, count) {
        var _this = this
        var id = this.PAGEDATA.Item[index].ID
        var dom = $("#" + this.PAGEDATA.Item[index].ID)
        var width = parseInt(dom.width())
        var height = parseInt(dom.height())
        var originTop = parseInt(dom.css('top'))
        var originLeft = parseInt(dom.css('left'))
        var radius = (Math.max(width, height) / 20) > 20 ? Math.max(width, height) / 20 : 20
        var FlipOutX =
            `@keyframes FlipOutX_${id} {
            0% {
                animation-timing-function: ease-in;
                left: ${originLeft}px
            }
            5% {
                animation-timing-function: ease-out;
                left: ${originLeft + radius}px
            }
            12.5% {
                animation-timing-function: ease-in;
                left: ${originLeft + radius * 2}px
            }
            25% {
                animation-timing-function: ease-out;
                left: ${originLeft}px  
            }
            50% {
                animation-timing-function: ease-in;
                left: ${originLeft - radius * 3}px
            }
            65% {
                animation-timing-function: ease-out;
                left: ${originLeft + radius * 2}px 
            }
            80% {
                animation-timing-function: ease-in;
                left: ${originLeft + radius * 10}px 
            }
            90%{
                animation-timing-function: ease-out;
                left: ${originLeft - radius * 3}px
            }
            100% {
                animation-timing-function: ease-in;
                left: ${originLeft - radius * 18}px
            }
        }`;


        var FlipOutY =
            `@keyframes FlipOutY_${id} {
            0% {
                opacity: 1;
                -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
                animation-timing-function: ease-out;
                top: ${originTop}px
            }
            5% {
                animation-timing-function: ease-in;
                top: ${originTop + radius}px
            }
            12.5% {
                animation-timing-function: ease-out;
                top: ${originTop}px
            }
            25% {
                animation-timing-function: ease-in;
                top: ${originTop - radius * 2}px
            }
            50% {
                animation-timing-function: ease-out;
                top: ${originTop + radius}px
            }
            65% {
                animation-timing-function: ease-in;
                top: ${originTop + radius * 6}px 
            }
            80% {
                animation-timing-function: ease-out;
                top: ${originTop - radius * 2}px 
            }
            90% {
                animation-timing-function: ease-in;
                top: ${originTop - radius * 13}px 
            }
            100% {
                opacity: 0.3;
                -webkit-transform: scale3d(0.3, 0.3, 0.3);
                transform: scale3d(0.3, 0.3, 0.3);
                animation-timing-function: ease-out;
                top: ${originTop + radius * 6}px 
            }
        }`;
        var animationClass =
            ` .FlipOut_${id} {
            animation: FlipOutX_${id} FlipOutY_${id};
            -webkit-animation: FlipOutX_${id} FlipOutY_${id};
            animation-duration: ${time}ms;
        }`;
        // 将 keyframe 通过style动态 插入页面中
        $("<style></style>").append(FlipOutX).append(FlipOutY).append(animationClass).appendTo('html')
        $("#" + this.PAGEDATA.Item[index].ID)
            .css({ display: 'inline-flex' })
            .addClass('animated')
            .addClass('FlipOut_' + id)
        $("#" + this.PAGEDATA.Item[index].ID).on('animationend', function () {
            $("#" + _this.PAGEDATA.Item[index].ID)
                //.css({ display: 'none' })
                .removeClass('FlipOut_' + id)
                .removeClass('animated')
        })
    }
    /**
     * @description 创建跳跃消失动画
     */
    createJumpOutAnimation(index, time, count) {
        // todo
    }
    /**
     * @description 播放当前页面下一个动画
     */
    playNextAnimation() {
        var _this = this
        // console.log('playNextAnimation')
        // 判断当前动画是否是成组动画
        // 当数量大于1时，会同时触发多个动画
        if (this.PAGEDATA.TimeLineGroup[this.CURTIMELINEIDX].length > 1) {
            this.PAGEDATA.TimeLineGroup[this.CURTIMELINEIDX].forEach(function (item, index, array) {
                _this.playNextAnimationItem(index)
            })
            // 组动画在多个动画结束后，只增加一次curTimelineIdx
            // SETCURTIMELINEIDX(this.CURPAGEIDX + 1)
            // console.log('this.CURTIMELINEIDX++')
            // todo
            this.CURTIMELINEIDX++
        } else {
            // 只有一个内容取0
            this.playNextAnimationItem(0)
            // SETCURTIMELINEIDX(this.CURPAGEIDX + 1)
            this.CURTIMELINEIDX++
        }
    }
    /**
     * @description 播放当前页面上一个动画
     */
    playLastAnimation() {
        // 将动画定位到上一个元素
        this.CURTIMELINEIDX--;
        // 判断当前动画是否是成组动画
        // 当数量大于1时，会同时触发多个动画
        if (this.PAGEDATA.TimeLineGroup[this.CURTIMELINEIDX].length > 1) {
            for (let i = 0; i < this.PAGEDATA.TimeLineGroup[this.CURTIMELINEIDX].length; i++) {
                this.playLastAnimationItem(i)
            }
        } else {
            // 只有一个内容取0
            this.playLastAnimationItem(0)
        }
    }

    playNext() {
        if (this.LOADING) {
            console.log('加载中')
            return
        }
        // 当前页面有动画
        if (this.PAGEDATA.TimeLine != undefined) {
            if (this.CURTIMELINEIDX >= this.PAGEDATA.TimeLineGroup.length) {
                $('#rightArrow').css({
                    opacity:.3
                })
            }
            else{
                this.playNextAnimation()
                $('#rightArrow,#leftArrow').css({
                    opacity:1
                })
            }
                
        }
    }
    
    playLast() {
        // debugger;
        if (this.LOADING) {
            console.log('加载中')
            return
        }
        if (this.PAGEDATA.TimeLine != undefined) {
            // debugger
            if (this.CURTIMELINEIDX <= 0) {
                $('#leftArrow').css({
                    opacity:.3
                })
            } else {
                console.log('播放上一个动画')
                this.playLastAnimation()
                $('#leftArrow,#rightArrow').css({
                    opacity:1
                })
            }
        }
    }

    
    /**
     * @description 隐藏当前页
     */
    // hideCurPage(index) {
    //     // console.log(index)
    //     // console.log(this.PAGEDATA[index])
    //     var items = this.PAGEDATA[index].data.Item
    //     // console.log(items)
    //     this.hideBackgroundImg(index)
    //     if (items == undefined) { return }
    //     for (let i = 0; i < items.length; i++) {
    //         // 将神奇按钮触发idx置为0
    //         items[i].TargetIdx = 0
    //         document.getElementById(items[i].ID).style.display = 'none'
    //         if (items[i].PaintType == 'Audio') {
    //             // 当音频没有使用跨页播放，停止音乐
    //             // 当音频使用了跨页播放，则不停止音乐播放
    //             if (items[i].AudioCrosspage != 'true' && !document.getElementById('audio' + items[i].ID).paused) {
    //                 var id = items[i].ID
    //                 $("#" + id + " .mask").click()
    //             }
    //         }
    //         if (items[i].PaintType == 'Video') {
    //             $("#" + items[i].ID + ' video')[0].pause()
    //         }
    //     }
    // }
    /**
     * @description 播放下一个小动画 修改材质类型 设置动画持续延迟时间类型等参数
     */
    playNextAnimationItem(idx) {
        // console.log('playNextAnimationItem')
        var ID = this.PAGEDATA.TimeLineGroup[this.CURTIMELINEIDX][idx].ID
        var effect = this.PAGEDATA.TimeLineGroup[this.CURTIMELINEIDX][idx].Effect
        // var visible = this.getMeshVisible(effect)
        var items = this.PAGEDATA.Item
        var index = this.getItemIndexByID(ID)

        // 将物体上一个动画清除掉并置初始位置
        this.resetMesh(index)
        // this.clearAnimation(index)
        // debugger
        items[index].curEffectType = this.getEffectType(effect, 0)
        items[index].curEffect = effect
        items[index].curEffectDelay = items[index][items[index].curEffectType].Delay
        items[index].curEffectDuration = items[index][items[index].curEffectType].Duration

        // console.log(index)
        // console.log(items[index])
        this.getAnimation(index)
    }
    /**
     * @description 播放上一个小动画
     */
    playLastAnimationItem(idx) {
        var ID = this.PAGEDATA.TimeLineGroup[this.CURTIMELINEIDX][idx].ID
        var effect = this.PAGEDATA.TimeLineGroup[this.CURTIMELINEIDX][idx].Effect
        var items = this.PAGEDATA.Item
        var index = this.getItemIndexByID(ID)

        // 将物体上一个动画清除掉并置初始位置
        // this.clearAnimation(index)
        this.resetMesh(index)

        var curEffectType = this.getEffectType(effect, 0)
        items[index].curEffectType = curEffectType
        items[index].curEffect = -1
        items[index].curEffectDelay = 0
        items[index].curEffectDuration = 1000
        if (curEffectType == 'AnimationA') {
            document.getElementById(items[index].ID).style.display = 'none'
        }
        if (curEffectType == 'AnimationT') {
            document.getElementById(items[index].ID).style.display = 'inline-flex'
        }
        if (curEffectType == 'AnimationD') {
            document.getElementById(items[index].ID).style.display = 'inline-flex'
        }
    }
    /**
     * @description 通过 id 获取 此物体在item中位置
     */
    getItemIndexByID(ID) {
        var index
        for (let i = 0; i < this.PAGEDATA.Item.length; i++) {
            if (ID == this.PAGEDATA.Item[i].ID) {
                index = i
                break;
            }
        }
        return index
    }
    /**
     * @description 重置元素位置
     */
    resetMesh(index) {
        var item = this.PAGEDATA.Item[index]
        // 还原元素 取消class 即去掉动画效果
        if (item.PaintType == "Audio") {
            $("#" + item.ID).removeClass().addClass("audio")
        } else if (item.PaintType == "Video") {
            $("#" + item.ID).removeClass().addClass("video")
        } else if (item.PaintType == 'iframe') {
            $("#" + item.ID).removeClass().addClass('iframe')
        } else {
            $("#" + item.ID).removeClass()
        }
    }
}

var animations = new Animation(pageData)
animations.init()
