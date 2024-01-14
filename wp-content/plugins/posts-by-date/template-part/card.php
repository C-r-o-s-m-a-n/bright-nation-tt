<div class="plugin-post-by-date-item">
	<div class="plugin-post-by-date-item__wrap" data-id-content="<?php echo $index_for_arr_content_modals++?>">
		<div class="plugin-post-by-date-item__thumb">
          <?php
		  $img_stub = plugins_url('assets/images/WordPress-Logo.png', plugin_dir_path( __FILE__ ));
		  if (has_post_thumbnail()) {
            the_post_thumbnail();
          } else {
            echo '<img src="' . $img_stub . '">';
          } ?>
			<div class="plugin-post-by-date-item__date">
			  <?php the_date('d.m.Y') ?>
			</div>
		</div>
		<p class="plugin-post-by-date-item__title">
          <?php
		  $title = get_the_title();
		  echo $title?>
		</p>
		<?php
        /*add data about post to array for modal*/
		$except_post = get_the_excerpt();
		$link_post = get_the_permalink();
		$arr_data_post = [];

		/*Проверка на линк и тайтл безсмыслинная, так как банально пост не сохраниться без тайтла, но это я чисто опять таки для демонстрации сделал=)*/
        $thumb_post_link = esc_url(get_the_post_thumbnail_url()) ?: $img_stub;
        $arr_data_post['img'] = $thumb_post_link;

		if ($title){
          $arr_data_post['content']['title'] = $title;
		}
		if ($except_post){
          $arr_data_post['content']['excerpt'] = $except_post;
		}
        if ($link_post){
          $arr_data_post['content']['post_link']= $link_post;
        }

        if (!$thumb_post_link && !$title && !$except_post && !$link_post){
         $arr_data_post = null;
        }

        array_push($arr_content_modals, $arr_data_post)?>
	</div>
</div>