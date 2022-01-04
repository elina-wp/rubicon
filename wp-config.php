<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'JBcQeCFleUreDlqdaOJKMiPnWqPQaRZNi6n3875+gCuB0yTi15lrQuatcwTbKDp3kzhIVx9OXrSoWxm4i7o9SQ==');
define('SECURE_AUTH_KEY',  'kzKJH9pbQiTpnVXxUPh4I2IlA7l30bKSCNdQPVaXsOkQVpYBB2gHFidm/HUACqcbrvTWp4wQUEyXthSFZ6uATQ==');
define('LOGGED_IN_KEY',    'hy/sJ5MTfZB+euybjfWUPG+FCKiwPSCtQOei8fYMYSiyYEW7CAwPRBCjr9+eXrhP+fE3lY78JyCypjrlFPXeRQ==');
define('NONCE_KEY',        'EUrJfmpjbleWNsT2e12C4kBUnl4DsciZjADnOXIUrOf2ftDCa0t+sYD0x5NDgHsGqg4b50IuFdvez+zY089d9w==');
define('AUTH_SALT',        'q394YGICI8VpqLbDzqdA2F/iOw2JSrx+oS7PpKnVuZlXt1DZORdgSYFrU1JH3tIMmfj/AqPqoWAS6XK1LHGCTA==');
define('SECURE_AUTH_SALT', 'AzmAB+WaijYevfE5iEsmF0J19KZrwnswi03l8YF84zAwAyCGfV27+GMxgs7W0oFBgxV4O+wqGeecZYNdbMUCeA==');
define('LOGGED_IN_SALT',   'nt8/Xjin+9A53+RTV051FQETJMlH9Ai80vEL7dx91AEeCPy/AU/3P0ker7onls+hCE8+jk8+Y0TJq7Oo77y7/Q==');
define('NONCE_SALT',       '1mD0TYKcd2+i4fEa/GQM61zjArrvY3mmghkVCxoCR/LXctnxak3G/1jOHxvaRgYuqR9RCPCc3v+65CVfauAj1A==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
