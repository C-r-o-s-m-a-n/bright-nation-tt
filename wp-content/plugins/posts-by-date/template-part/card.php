<div class="plugin-post-by-date-item">
	<div class="plugin-post-by-date-item__wrap">
		<div class="plugin-post-by-date-item__thumb">
          <?php if (has_post_thumbnail()) {
            the_post_thumbnail();
          } else {
            echo '<img src="' . plugins_url('assets/images/WordPress-Logo.png') . '">';
          } ?>
			<div class="plugin-post-by-date-item__date">
			  <?php the_date('d.m.Y') ?>
			</div>
		</div>
		<p class="plugin-post-by-date-item__title">
          <?php the_title() ?>
		</p>
		<div class="plugin-post-by-date-item-for-modal">
			<div class="plugin-post-by-date-item-for-modal__excerpt">
              <?php the_excerpt()?>
			</div>
			<div class="plugin-post-by-date-item-for-modal__link">
              <?php the_permalink()?>
			</div>
		</div>
	</div>
</div>