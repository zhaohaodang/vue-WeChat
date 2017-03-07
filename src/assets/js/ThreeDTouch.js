/**
 * 3D Touch 事件处理器，传入要监听的 DOM 对象，在 callback 回调中获取当前 force 值
 *
 * @param { HTMLElement } el - 要监听的 DOM 对象
 * @param { Function } callback - 带有 force 值的回调函数
 *
 */
function ThreeDTouch(el, callback) {
    this.el = el
    this.callback = callback
    this._bindEvents()
}

ThreeDTouch.prototype = {
    //绑定相关 touch 事件
    _bindEvents: function() {
        var events = ['touchforcechange', 'touchstart', 'touchend', 'touchcancel']
        events.forEach(function(event) {
            this.el.addEventListener(event, this, false)
        }.bind(this))
    },
    //分派 touch 事件
    handleEvent: function(ev) {
        switch (ev.type) {
            case 'touchforcechange':
                this._touchForceDidChange(ev)
                break
            case 'touchstart':
                this._touchDidStart(ev)
                break
            case 'touchend':
            case 'touchcancel':
                this._touchDidEnd(ev)
        }
    },
    //force 值改变时
    _touchForceDidChange: function(ev) {
        var force = ev.touches[0].force
        this.callback(force)
        clearTimeout(this.timeoutId) //支持 touchforcechange 的话则取消轮询
    },
    _touchDidStart: function(ev) {
        var touch = ev.touches[0]
        this._checkForce(touch)
    },
    _touchDidEnd: function(ev) {
        this.callback(0)
        clearTimeout(this.timeoutId)
    },
    //轮询地获取 force 值
    _checkForce: function(touch) {
        this.callback(touch.force)
        this.timeoutId = setTimeout(this._checkForce.bind(this, touch), 16)
    }
}
export default ThreeDTouch