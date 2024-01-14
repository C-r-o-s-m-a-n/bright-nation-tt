<?php

function posts_by_date_styles() {
  wp_enqueue_style('posts-by-date-style', plugin_dir_url(dirname(__FILE__)).'assets/css/style.css', array(), null);
}
add_action('wp_enqueue_scripts', 'posts_by_date_styles');

function posts_by_date_scripts() {
  wp_enqueue_script('posts-by-date-scripts', plugin_dir_url(dirname(__FILE__)).'assets/js/bundle.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'posts_by_date_scripts');
