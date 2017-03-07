'use strict'

var FRAME_WIDTH  = 988 / 4,
	FRAME_HEIGHT = 1164 / 6,
	MASK_WIDTH   = 146

function $(sel) {
	return document.querySelectorAll(sel)
}

/**
 * 更新界面
 */
var ui = {
	update: function(val) {
		if (this._checkSupport(val)) {
			this.force = val
			this._updateForceVal()
			this._scaleBtnMask()
			this._makeSlothLaugh()
		} else {
			this.force = -1
			this._updateForceVal()
		}
	},
	_sum: 0,
	_i: 0,
	//10 次 force 相加还是 0 的话，则判定为不支持
	_checkSupport: function(force) {
		this._sum += force
		return !(this._i++ > 10 && this._sum == 0)
	},
	_updateForceVal: function() {
		$('#force_val')[0].innerHTML = this.force == -1 ? '不支持 3D Touch :(' : this.force
	},
	_scaleBtnMask: function() {
		var scale = 1 + Math.ceil(this.force * 100) / MASK_WIDTH
		$('#btn_mask')[0].style.webkitTransform = 'scale(' + scale + ')'
	},
	_makeSlothLaugh: function() {
		var frame = Math.max(1, Math.ceil(this.force * 24)),
		    posX = ((frame - 1) % 4) * -FRAME_WIDTH,
		    posY = Math.floor((frame - 1) / 4) * -FRAME_HEIGHT

		$('#sloth')[0].style.backgroundPosition = posX + 'px ' + posY + 'px'
	}
}

//GO~
new ThreeDTouch($('#force_btn')[0], function(force) {
	ui.update(force)
})
