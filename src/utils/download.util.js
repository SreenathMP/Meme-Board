import domtoimage from 'dom-to-image';

export const downloadImage = (node, width, height, type) => {
	const config = {
		style: {
			'transform-origin': 'center'
		},
		width,
		height,
		quality: 1
	};

	const downloadFile = (dataUrl, ext) => {
		let link = document.createElement('a');
		link.download = `CoverImage.${ext}`;
		link.href = 'data:' + dataUrl;
		document.body.appendChild(link);
		link.click();
		link.remove();
	};


	 if (type === 'jpeg') {
		domtoimage.toJpeg(node, config).then(dataUrl => downloadFile(dataUrl, 'jpeg'));

	 }

};