<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bright-nation-tt' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'GAasS>6le--y)*<vgxp10<6tUi><T,;Tb<)CRa]_nP>Q/MAFM,mz4JTf0eDPbP!n' );
define( 'SECURE_AUTH_KEY',  'UGs?CiFjD31u^04CwX%i,f5L7<`FjMwm#]rXxO8[lSS7jn.X}]^M[<W,N)t5a]|>' );
define( 'LOGGED_IN_KEY',    'vzoGXMn<)~W,dHmVwq~6Qb[T]FJxI=R4K1(y8%;~KJjx:FnR9Cr:jWF1|_Fkhr?B' );
define( 'NONCE_KEY',        'C!K|%>bI,/{J>[](Ol53H~I!OdEV>wjrZpW)8j8x-O/KKwE}?ks7{`+FPbxjvBvo' );
define( 'AUTH_SALT',        '@Rq+H5j|+t<9>^jgXNZx]T$f: eli$bC=Q$(oc[3H<ECsQlvA5[li~~[WR1q=gsK' );
define( 'SECURE_AUTH_SALT', 'F3&;pR&GOY2LwIi~#%V1|(bs|UP>K{KG#Sc5g0Q kd|&0a_3+D6[+MTYI.L1y9;/' );
define( 'LOGGED_IN_SALT',   '-~+1GV3edL#s)6OFsSl!^3yl`?BOPcsbM2~{MKdkMNc-a:rJTPOc>2Z.f_@inVp^' );
define( 'NONCE_SALT',       'Nq-J`xycg:b#l~Dc]-<oU2A 3) .so?<!Z.RIGi|C}t XDrJq-50[kB?L$7uhIFp' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
