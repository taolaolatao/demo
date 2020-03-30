import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import SimpleImage from '@editorjs/simple-image';
import CodeTool from '@editorjs/code';

const editor = new EditorJs({
	holderId: 'editor',
	tools: {
		image: SimpleImage,
		code: CodeTool,
		header: {
			class: Header,
			inlineToolbar: ['link']
		},
		list: {
			class: List,
			inlineToolbar: [
				'link', 'bold'
			]
		},
		embed: {
			class: Embed,
			config: {
				services: {
					youtube: true
				}
			}
		}
	}
})

$(document).ready(function () {
	document.getElementById('save').addEventListener('click', async () => {
		let output = await editor.save()
		console.log(output);
		
	})
});