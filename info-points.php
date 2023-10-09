<?php
/**
 * Plugin Name:       Info Points
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       info-points
 *
 * @package           nah-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_info_points_block_init() {
	register_block_type( __DIR__ . '/build' );

	$blocks = array(
		'highlight-point',
		'info-points',
		'point-description',
		'point-title',
	);

	foreach ( $blocks as $dir) {
		register_block_type( __DIR__ . '/build/' . $dir, [] );
	}
}
add_action( 'init', 'create_block_info_points_block_init' );
