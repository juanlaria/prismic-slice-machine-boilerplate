// ATTRIBUTION: baptistebriel

const DEV = true

class Perf {
	constructor() {
		this.CPU_BAD = 0
		this.CPU_LOW = 1
		this.CPU_GOOD = 2
		this.CPU_HIGH = 3

		this.GPU_BAD = 0
		this.GPU_LOW = 1
		this.GPU_GOOD = 2
		this.GPU_HIGH = 3

		this.cpu = null
		this.gpu = null

		this.is = {
			bad: false,
			low: false,
			good: false,
			high: false
		}

		this.textures = {
			S3TC: 's3tc',
			ETC1: 'etc1',
			PVRTC: 'pvrtc',
			TRUECOLOR: 'truecolor'
		}
	}

	showStats() {
		if (typeof window !== 'undefined' && !window.stats) {
			const Stats = require('stats.js')
			window.stats = new Stats()
			window.stats.showPanel(0)
			window.stats.dom.style.zIndex = '99999999'
			document.body.appendChild(window.stats.dom)

			const animate = () => {
				window.stats.begin()
				window.stats.end()
				requestAnimationFrame(animate)
			}

			requestAnimationFrame(animate)
		}
	}

	getInfo() {
		if (window.location.hash.indexOf('forceHighAnimation') > -1) {
			this.is.high = true
			return
		}
		if (this.cpu === this.CPU_BAD || this.gpu === this.GPU_BAD) {
			this.is.bad = true
			return
		}
		if (this.cpu === this.CPU_LOW || this.gpu === this.GPU_LOW) {
			this.is.low = true
		} else if (this.cpu >= this.CPU_GOOD && this.gpu >= this.GPU_GOOD) {
			this.is.good = true
			if (this.cpu === this.CPU_HIGH && this.gpu === this.GPU_HIGH) {
				this.is.high = true
			}
		}
		console.log('Perf:', this.is)
	}

	getCPU() {
		let array = []
		let quality = this.CPU_BAD
		const start = (window.performance || Date).now()
		for (let i = 0; i < 20000; i++) {
			array = Math.pow(Math.sin(Math.random()), 2)
		}

		const end = (window.performance || Date).now()
		const perf = end - start

		if (perf < 2) quality = this.CPU_HIGH
		else if (perf < 7) quality = this.CPU_GOOD
		else if (perf < 14) quality = this.CPU_LOW
		else quality = this.CPU_BAD

		this.cpu = quality

		if (DEV) {
			let perfId = 'CPU_BAD'
			if (this.cpu === this.CPU_LOW) perfId = 'CPU_LOW'
			if (this.cpu === this.CPU_GOOD) perfId = 'CPU_GOOD'
			if (this.cpu === this.CPU_HIGH) perfId = 'CPU_HIGH'
			console.warn(`[CPU] ${perfId} (${this.cpu}) ~${perf}ms`)
		}
	}

	getGPU() {
		this.extensions = null
		this.gl = null
		this.texture = null
		this.hasGL = false
		this.detect()
	}

	detect() {
		const gl = this.getGL()
		if (!gl) {
			if (DEV) console.warn('[GPU] WebGL not supported!')
			return
		}
		this.detectPerformance(gl)
		this.detectTextureSupport(gl)
		if (DEV) {
			let perfId = 'GPU_BAD'
			if (this.gpu === this.GPU_LOW) perfId = 'GPU_LOW'
			if (this.gpu === this.GPU_GOOD) perfId = 'GPU_GOOD'
			if (this.gpu === this.GPU_HIGH) perfId = 'GPU_HIGH'
			console.warn(
				[
					`\n`,
					`[GPU] WebGL √`,
					`\n`,
					`[GPU] ${perfId} (${this.gl})`,
					`\n`,
					`[GPU] textures: ${this.texture.toUpperCase()}`
				].join('')
			)
		}
	}

	getGL() {
		const canvas = document.createElement('canvas')
		let gl
		try {
			gl = canvas.getContext('experimental-webgl') || canvas.getContext('webgl')
			this.hasGL = true
			return gl
		} catch (t) {
			this.hasGL = false
			return null
		}
	}

	detectPerformance(gl) {
		const infos = gl.getExtension('WEBGL_debug_renderer_info')
		this.gl = gl.getParameter(infos.UNMASKED_RENDERER_WEBGL).toLowerCase()
		this.extensions = gl.getSupportedExtensions()
		let quality = this.GPU_LOW
		if (typeof screen.orientation !== 'undefined') {
			if (this.matchAll(['intel', 'hd'])) quality = this.GPU_LOW
			if (this.matchAll(['radeon', 'nvidia'])) quality = this.GPU_GOOD
			if (this.matchAll(['apple m1', 'metal'])) quality = this.GPU_HIGH
		} else {
			if (iOS()) {
				const bad = times(5, (i) => `a${i + 1}`)
				const good = times(3, (i) => `a${i + 7}`)
				const high = times(10, (i) => `a${i + 10}`)
				if (this.matchAll(bad)) quality = this.GPU_BAD
				if (this.matchAll(good)) quality = this.GPU_GOOD
				if (this.matchAll(high)) quality = this.GPU_HIGH
			} else {
				const isAdreno = this.match('adreno')
				const isMali = this.match('mali-t')
				if (isAdreno) {
					quality = this.GPU_LOW
					if (this.matchVersion(400)) quality = this.GPU_GOOD
					if (this.matchVersion(500)) quality = this.GPU_HIGH
				}
				if (isMali && this.matchVersion(70)) quality = this.GPU_HIGH
			}
		}
		this.gpu = quality
	}

	detectTextureSupport(gl) {
		const hasS3TC =
			gl.getExtension('WEBGL_compressed_texture_s3tc') ||
			gl.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
			gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc')
		const hasPVR =
			gl.getExtension('WEBGL_compressed_texture_pvrtc') ||
			gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc')
		const hasETC1 =
			gl.getExtension('WEBGL_compressed_texture_etc1') || gl.getExtension('WEBKIT_WEBGL_compressed_texture_etc1')
		if (hasS3TC) {
			this.texture = this.textures.S3TC
		} else if (hasPVR) {
			this.texture = this.textures.PVRTC
		} else if (hasETC1) {
			this.texture = this.textures.ETC1
		} else {
			this.texture = this.textures.TRUECOLOR
		}
		this.texture = this.textures.TRUECOLOR
	}

	match(info) {
		return this.gl.indexOf(info) > -1
	}

	matchAll(infos) {
		return infos.reduce((reduce, info) => {
			return reduce || this.match(info)
		}, false)
	}

	matchVersion(version) {
		return parseInt(this.gl.slice().replace(/[\D]/g, ''), 10) >= version
	}
}

function iOS() {
	return (
		['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
			navigator.platform
		) ||
		// iPad on iOS 13 detection
		(navigator.userAgent.includes('Mac') && 'ontouchend' in document)
	)
}

// https://underscorejs.org/docs/underscore-esm.html
function times(n, iteratee, context) {
	const accum = Array(Math.max(0, n))
	iteratee = optimizeCb(iteratee, context, 1)
	for (let i = 0; i < n; i++) accum[i] = iteratee(i)
	return accum
}

// https://underscorejs.org/docs/underscore-esm.html
function optimizeCb(func, context, argCount) {
	if (context === undefined) return func
	switch (argCount == null ? 3 : argCount) {
		case 1:
			return function (value) {
				return func.call(context, value)
			}
		case 3:
			return function (value, index, collection) {
				return func.call(context, value, index, collection)
			}
		case 4:
			return function (accumulator, value, index, collection) {
				return func.call(context, accumulator, value, index, collection)
			}
	}
	return function () {
		return func.apply(context, arguments)
	}
}

export default new Perf()
