// Source: https://medium.com/@amatewasu/how-to-record-a-canvas-element-d4d0826d3591

const canvas = document.getElementsByTagName('canvas')[0]
const videoStream = canvas.captureStream(30)
const mediaRecorder = new MediaRecorder(videoStream)
var chunks = []
mediaRecorder.ondataavailable = function (e) {
	chunks.push(e.data)
}
var video = document.createElement('video')
document.body.appendChild(video)
mediaRecorder.onstop = function (e) {
	var blob = new Blob(chunks, { 'type': 'video/mp4' })	// other types are available such as 'video/webm' for instance, see the doc for more info
	chunks = []
	var videoURL = URL.createObjectURL(blob)
	video.src = videoURL
	video.controls = true
}
// start with mediaRecorder.start()
// stop with mediaRecorder.stop()
// Video controls will have a download option