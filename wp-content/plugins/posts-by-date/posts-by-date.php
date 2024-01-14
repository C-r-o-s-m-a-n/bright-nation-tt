<?php
/*
Plugin Name: Post by date
Description: Show posts by date.
Version: 1.0
Author: Vlad Stozkyi
*/

if(!defined('ABSPATH')){
  exit;
}
require trailingslashit(plugin_dir_path(__FILE__)) . 'inc/enqueue-scripts-style.php';

function post_by_date_show($shortcode_param) {
  $args = array(
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => -1,
    'date_format' => 'd.m.Y',
  );

  $start_date = $shortcode_param['start_date'];
  $end_date = $shortcode_param['end_date'];

  if (!empty($start_date)){
    $args['date_query']['after'] = date('Y-m-d', strtotime($start_date));
    $args['date_query']['inclusive'] = true;
  }
  if (!empty($end_date)){
    $args['date_query']['before'] = date('Y-m-d', strtotime($end_date));
    $args['date_query']['inclusive'] = true;
  }

  $query = new WP_Query($args);

  if ($query->have_posts()):
	$index_for_arr_content_modals = 0;
	$arr_content_modals = []?>
    <div class="plugin-post-by-date">
      <?php while ($query->have_posts()):
        $query->the_post();
        include trailingslashit(plugin_dir_path(__FILE__)).'template-part/card.php'?>
      <?php endwhile;
      wp_reset_postdata()?>
		<script>
			const pluginPostByDateArrContentModals = <?php echo json_encode($arr_content_modals)?>;
		</script>
    </div>
  <?php else:
    echo 'Posts not found.';
  endif;

  require trailingslashit(plugin_dir_path(__FILE__)) . 'template-part/modal.php';
}

add_shortcode('post_by_date', 'post_by_date_show');