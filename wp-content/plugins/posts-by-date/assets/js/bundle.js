(()=>{var t={917:()=>{jQuery((function(t){var o=t("#modal-plugin-post-by-date");t(".plugin-post-by-date-item__wrap").on("click",(function(){var e=t(this).find(".plugin-post-by-date-item__thumb img").clone(),i=t(this).find(".plugin-post-by-date-item__title").text(),d=t(this).find(".plugin-post-by-date-item-for-modal__excerpt").text(),n=t(this).find(".plugin-post-by-date-item-for-modal__link").text();o.find(".modal-post-by-date__img").html(e),o.find(".modal-post-by-date-content__title").text(i),o.find(".modal-post-by-date-content__description").text(d),o.find(".modal-post-by-date-content__btn").attr("href",n),o.addClass("modal-post-by-date--open"),t("body").css({overflow:"hidden"})})),t(".modal-post-by-date__close").on("click",(function(){o.removeClass("modal-post-by-date--open"),t("body").css({overflow:"visible"})}))}))}},o={};!function e(i){var d=o[i];if(void 0!==d)return d.exports;var n=o[i]={exports:{}};return t[i](n,n.exports,e),n.exports}(917)})();