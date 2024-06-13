<?php
function particles_theme_scripts() {
    wp_enqueue_script('particles-js', get_template_directory_uri() . '/particles.min.js', array(), null, true);
    wp_enqueue_script('app-js', get_template_directory_uri() . '/app.js', array('particles-js'), null, true);
}
add_action('wp_enqueue_scripts', 'particles_theme_scripts');
