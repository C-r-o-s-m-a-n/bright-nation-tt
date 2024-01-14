<?php
if(!defined('ABSPATH')){
  exit;
}

function include_style(){
  wp_enqueue_style( 'style', get_template_directory_uri().'/assets/css/style.css', array(), null);

}
add_action('wp_enqueue_scripts', 'include_style');