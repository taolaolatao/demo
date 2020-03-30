$(document).ready(function () {
	const progressBar = $('.progress-bar')

	$('.menu').click(function(){
		$(this).toggleClass('active')
		$('.menu-bar').toggleClass('active')
	})

	$('#files').fileupload({
		dropZone: '.zone-upload',
		dataType: 'json',
		autoUpload: false,
		add: (e, data) => {
			progressBar.css({
				background: 'red',
				width: '0%'
			})

			const filedata = data.originalFiles[0]

			const fileReader = new FileReader()
			fileReader.onload = function(e){
				$('#img-preview').attr('src', e.target.result)
			}
			fileReader.readAsDataURL(filedata)

			data.submit()
		},
		progress: (e, data) => {
			const progress = parseInt(data.loaded / data.total * 100, 10)
			setTimeout(() => {
				progressBar.css({
					background: 'greenyellow',
					width: `${progress}%`
				})
			}, 1000);
		},
		done: (e, data) => {
			console.log(data);
			alertify.notify('Hello', 'success', 3)
		}
	})
});

