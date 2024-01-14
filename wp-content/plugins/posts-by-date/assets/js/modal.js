jQuery(function ($) {
	const modalPlugin = $('#modal-plugin-post-by-date')

	//close or open modal and animate it
	const closeOrOpenModal = (open = true) => {
		const rnd = Math.floor(Math.random() * 4) + 1
		const modalBody = modalPlugin.children('.modal-post-by-date__body')
		const animateModal = open ? 'modal-from' : 'modal-close-to'
		switch (rnd) {
			case 1:
				modalPlugin.add(modalBody).css({'animation-name': `${animateModal}-left`})
				break
			case 2:
				modalPlugin.add(modalBody).css({'animation-name': `${animateModal}-right`})
				break
			case 3:
				modalPlugin.add(modalBody).css({'animation-name': `${animateModal}-top`})
				break
			case 4:
				modalPlugin.add(modalBody).css({'animation-name': `${animateModal}-bottom`})
		}

		modalPlugin.toggleClass('modal-post-by-date--open')

		//lock or unlock body
		$('body').css({'overflow':`${open ? 'hidden' : 'visible'}`})
	}

	//generate block with data for modal
	const newBlockDateForModal = (contentForModal) => {
		const img = contentForModal?.img
		const textContent = contentForModal?.content
		let dataBlock = ``

		if (img !== undefined){
			dataBlock += `<div class="modal-post-by-date__img">
							<img src="${img}">
						</div>`
		}

		if (textContent !== undefined){
			const title = textContent?.title
			const excerpt = textContent?.excerpt
			const link = textContent?.post_link

			let contentBlock = '<div class="modal-post-by-date-content">'

			if (title !== undefined){
				contentBlock += `<p class="modal-post-by-date-content__title">${title}</p>`
			}
			if (excerpt !== undefined){
				contentBlock += `<div class="modal-post-by-date-content__description">${excerpt}</div>`
			}
			if (link !== undefined){
				contentBlock +=`
					<a href="${link}" class="modal-post-by-date-content__btn">
						Read more
					</a>`
			}

			dataBlock += contentBlock + '</div><div class="modal-post-by-date__close"></div>'

			return dataBlock
		}
	}

	//insert data to modal
	$('.plugin-post-by-date-item__wrap').on('click', function (e) {
		e.stopPropagation();
		const idContent = $(this).data('id-content')
		const contentForModal = pluginPostByDateArrContentModals[idContent]

		const modalBody = modalPlugin.find('.modal-post-by-date__wrap')

		if (contentForModal){
			const blockToInsert = newBlockDateForModal(contentForModal)
			modalBody.html(blockToInsert)
		}else{
			modalBody.html('<h2>Sorry, the content for this article is missing or an unknown error has occurred</h2>')
		}

		//open modal
		closeOrOpenModal()
	})


	//click to "close icon" in modal
	$('.modal-post-by-date__wrap').on('click', '.modal-post-by-date__close', function () {
		closeOrOpenModal(false)
	})

	//close the modal window If you click not in its area
	$(document).on('click', function (e) {
		if (!$(e.target).closest('.modal-post-by-date__body').length && modalPlugin.hasClass('modal-post-by-date--open')) {
			closeOrOpenModal(false)
		}
	});
})