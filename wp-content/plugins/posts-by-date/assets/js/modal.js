jQuery(function ($) {
	const modalPlugin = $('#modal-plugin-post-by-date')

	$('.plugin-post-by-date-item__wrap').on('click', function () {
		const img = $(this).find('.plugin-post-by-date-item__thumb img').clone()
		const title = $(this).find('.plugin-post-by-date-item__title').text()
		const excerpt = $(this).find('.plugin-post-by-date-item-for-modal__excerpt').text()
		const readMore = $(this).find('.plugin-post-by-date-item-for-modal__link').text()

		modalPlugin.find('.modal-post-by-date__img').html(img)
		modalPlugin.find('.modal-post-by-date-content__title').text(title)
		modalPlugin.find('.modal-post-by-date-content__description').text(excerpt)
		modalPlugin.find('.modal-post-by-date-content__btn').attr('href', readMore)

		modalPlugin.addClass('modal-post-by-date--open')
		$('body').css({'overflow':'hidden'})
	})

	$('.modal-post-by-date__close').on('click', function () {
		modalPlugin.removeClass('modal-post-by-date--open')

		$('body').css({'overflow':'visible'})
	})
})