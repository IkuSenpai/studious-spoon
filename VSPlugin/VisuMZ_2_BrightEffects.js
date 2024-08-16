//=============================================================================
// VisuStella MZ - Bright Effects
// VisuMZ_2_BrightEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BrightEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BrightEffects = VisuMZ.BrightEffects || {};
VisuMZ.BrightEffects.version = 1.08;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.08] [BrightEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Bright_Effects_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * This RPG Maker MZ plugin allows you to add various bright effects to your
 * game's maps and battle system. These effects can make the game appear more
 * vivid, light, and gives you control over the color settings of a particular
 * map to make a more distinct feeling, too. The bright effects can be changed
 * midway through events in both maps and battles, too.
 *
 * Features include all (but not limited to) the following:
 * 
 * * A Bloom filter effect that can help soften the feel of a map by giving
 *   objects on the screen a slight hazy glow.
 * * Godrays can be used to show animated sunlight coming down from the sky
 *   above.
 * * The Color Adjustment filter allows you to alter the brightness, contrast,
 *   and saturation levels of your maps and battles.
 * * The Tilt Shift filter creates a blur at the top and bottom sections of the
 *   screen to give a sense of proximity blurring.
 * * Plugin Commands that allow you to adjust these settings on the go.
 * * Notetags for maps to alter the Bloom, Godray, and Color Adjustments
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * Pixi JS Filters*
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * New Effects
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Bloom
 * 
 * This filter puts a faint (or large) glow around lighter-colored objects on
 * the map to give them a softer, hazy, brighter feeling.
 * 
 * Properties:
 *
 * Scale: To adjust the strength of the bloom. Higher values is more
 * intense brightness.
 *
 * Brightness: The brightness, lower value is more subtle brightness, higher
 * value is blown-out.
 *
 * Threshold: Defines how bright a color needs to be to affect bloom.
 *
 * ---
 * 
 * Blur
 * 
 * The blur filter makes the screen appear less focused and more fuzzy. Details
 * become harder to distinguish and the like.
 * 
 * Properties:
 * 
 * Blur: Adjusts the blur strength. For best results, use numbers between 0 and
 * 5 where 0 is no blur and higher numbers mean higher blur strength. There are
 * no default Plugin Parameter settings for the Blur strength as it will
 * automatically default to 0 for best results.
 * 
 * ---
 *
 * Godray
 * 
 * The Godray filter puts down rays of light coming from the sky at an angle.
 * This is often used to represent sunlight peaking from above the clouds.
 * 
 * Properties:
 *
 * Visible: If on, the godrays will be visible by default. If off, they won't.
 *
 * Speed: The speed at which the light flickers. Lower for slower rate.
 * Higher for faster speeds.
 *
 * Gain: General intensity of the effect.
 *
 * Lacunarity: The density of the fractal noise.
 *
 * Angle: The angle/light-source direction of the rays.
 *
 * ---
 *
 * Color Adjustment
 * 
 * The Color Adjustment filter allows you to control the colors on the screen
 * to be more/less bright, contrast more/less, and more/less saturated.
 * 
 * Properties:
 *
 * Brightness: Adjusts the overall brightness of the screen. Use lower numbers
 * to make it darker and higher numbers to increase the brightness.
 *
 * Contrast: Increases the separation between dark and bright. Darker colors
 * become darker. Lighter colors become lighter. Increase this number to make
 * the effect more intense or decrease it to lessen it.
 *
 * Saturate: Adjusts the intensity of color on the screen. User higher numbers
 * to make colors more intense and lower numbers to make it less.
 *
 * ---
 * 
 * Tilt Shift
 * 
 * The Tilt Shift filter creates a blur at the upper and lower edges of the
 * screen with varying degrees of pixelation blur and gradient blur.
 * 
 * Properties:
 * 
 * Pixel Blur: What is the default pixel blur amount for tilt shift? Smaller
 * values mean less blur. Higher values mean more blur.
 * 
 * Gradient Blur: What is the default gradient blur amount for tilt shift?
 * Smaller values mean less gradient. Higher values mean more gradient.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 * 
 * VisuMZ_1_OptionsCore
 * 
 * As of the VisuStella MZ Options Core v1.10 update, both the Bright Effects
 * and Horror Effects plugins will be affected by the "Special Effects" option
 * found under the Options Core's General Settings. If the "Special Effects"
 * option is set to OFF, then the filter effects applied by those plugins will
 * also be disabled. They will be reenabled when the option is set back to ON.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Bloom-Related Notetags ===
 * 
 * ---
 *
 * <Bloom Scale: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Changes the bloom scale to x for map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Less bloom
 *   - Higher - More bloom
 *
 * ---
 *
 * <Bloom Brightness: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Changes the bloom brightness to x for map/battle
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Bloom Threshold: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Changes the bloom threshold to x for map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Less picky
 *   - Higher - More picky
 *
 * ---
 *
 * <Bloom Horz Scale: x to y>
 * <Bloom Vert Scale: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Sets an adjusting scale when traveling left to right on the map
 *   (Horz) or up to down on the map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less bloom
 *   - Higher - More bloom
 *
 * ---
 *
 * <Bloom Horz Brightness: x to y>
 * <Bloom Vert Brightness: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Sets an adjusting brightness when traveling left to right on the
 *   map (Horz) or up to down on the map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Bloom Horz Threshold: x to y>
 * <Bloom Vert Threshold: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Sets an adjusting threshold when traveling left to right on the
 *   map (Horz) or up to down on the map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less picky
 *   - Higher - More picky
 *
 * ---
 * 
 * === Blur-Related Notetags ===
 * 
 * ---
 * 
 * <Blur: x>
 * 
 * - Used for: Map Notetags and Troop Names
 * - Changes the blur strength used for the screen to 'x'.
 * - Replace 'x' with a number representing the blur strength. For best
 *   results, use numbers between 0 and 5 where 0 is no blur and higher numbers
 *   mean higher blur strength.
 * 
 * ---
 * 
 * === Godray-Related Notetags ===
 * 
 * ---
 *
 * <Godray>
 * <No Godray>
 *
 * - Used for: Map Notetags and Troop Names
 * - Changes if there will be a godray on the map/battle regardless of the
 *   default settings in the plugin parameters.
 *
 * ---
 *
 * <Godray Speed: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Sets the flickering speed of the rays.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Slower
 *   - Higher - Faster
 *
 * ---
 *
 * <Godray Gain: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Sets the gain/intensity of the rays.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Lighter
 *   - Higher - Intense
 *
 * ---
 *
 * <Godray Lacunarity: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Sets the lacunarity/density of the rays.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Less dense
 *   - Higher - More dense
 *
 * ---
 *
 * <Godray Angle: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Sets the angle of the rays.
 * - Replace 'x' with a number to represent the value. Use a negative or
 *   positive integer value.
 *   - Negative - Coming from the left
 *   - Positive - Coming from the right
 *
 * ---
 *
 * <Godray Horz Speed: x to y>
 * <Godray Vert Speed: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts godray speed going left to right on a map (Horz) or up
 *   to down on a map (Vert). 
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Slower
 *   - Higher - Faster
 *
 * ---
 *
 * <Godray Horz Gain: x to y>
 * <Godray Vert Gain: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts godray gain going left to right on a map (Horz) or up to
 *   down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Lighter
 *   - Higher - Intense
 *
 * ---
 *
 * <Godray Horz Lacunarity: x to y>
 * <Godray Vert Lacunarity: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts godray lacunarity going left to right on a map (Horz) or
 *   up to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less dense
 *   - Higher - More dense
 *
 * ---
 *
 * <Godray Horz Angle: x to y>
 * <Godray Vert Angle: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts godray angle going left to right on a map (Horz) or up
 *   to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use a negative or
 *   positive integer values.
 *   - Negative - Coming from the left
 *   - Positive - Coming from the right
 *
 * ---
 * 
 * === Color Adjust-Related Notetags ===
 * 
 * ---
 *
 * <Color Adjust Brightness: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Alters the screen brightness for the map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Color Adjust Contrast: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Adjusts the screen contrast for the map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Less contrast
 *   - Higher - More contrast
 *
 * ---
 *
 * <Color Adjust Saturate: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Adjusts the screen saturation for the map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Color Adjust Horz Brightness: x to y>
 * <Color Adjust Vert Brightness: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Alters the screen brightness when moving left to right on a map
 *   (Horz) or up to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Color Adjust Horz Contrast: x to y>
 * <Color Adjust Vert Contrast: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts the screen contrast when moving left to right on a map
 *   (Horz) or up to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less contrast
 *   - Higher - More contrast
 *
 * ---
 *
 * <Color Adjust Horz Saturate: x to y>
 * <Color Adjust Vert Saturate: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts the screen saturation when moving left to right on a map
 *   (Horz) or up to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less intensity
 *   - Higher - More intensity
 *
 * ---
 * 
 * === Tilt Shift Notetags ===
 * 
 * ---
 * 
 * <Tilt Shift Pixel Blur: x>
 * 
 * - Used for: Map Notetags and Troop Names
 * - Adjusts the tilt shift filter's pixel blur amount for the map/battle.
 * - Replace 'x' with a number to represent the blur intensity.
 *   - Lower = less blur
 *   - Higher = more blur
 * 
 * ---
 * 
 * <Tilt Shift Gradient Blur: x>
 * 
 * - Used for: Map Notetags and Troop Names
 * - Adjusts the tilt shift filter's gradient blur amount for the map/battle.
 * - Replace 'x' with a number to represent the gradient blur distance.
 *   - Lower = less gradient
 *   - Higher = more gradient
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Bloom Plugin Commands ===
 * 
 * ---
 *
 * Bloom: Change Settings
 * - Change the Bloom filter settings for the screen.
 *
 *   Bloom Scale:
 *   - Change bloom scale for the screen.
 *
 *   Bloom Brightness:
 *   - Change bloom brightness for the screen.
 *
 *   Bloom Threshold:
 *   - Change bloom threshold for the screen.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 *
 * ---
 *
 * Bloom: Reset
 * - Reset the Bloom filter settings for the settings found in the Plugin
 *   Parameters or map notetags.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the reset to occur.
 *
 * ---
 * 
 * === Blur Plugin Commands ===
 * 
 * ---
 * 
 * Blur: Change Settings
 * - Change the Blur filter settings for the screen.
 * 
 *   Blur Strength:
 *   - Change blur strength for the screen.
 *   - For best results, use numbers between 0 and 5  where 0 is no blur and
 *     higher numbers mean higher blur strength.
 * 
 *   Blur Duration:
 *   - The amount of time it takes for the change to occur.
 * 
 * ---
 * 
 * Blur: Reset
 * - Clears the Blur filter.
 * 
 *   Blur Duration:
 *   - The amount of time it takes for the reset to occur.
 * 
 * ---
 * 
 * === Godray Plugin Commands ===
 * 
 * ---
 *
 * Godray: Change Settings
 * - Change the Godray filter settings for the screen.
 *
 *   Visible?:
 *   - Show godrays on the screen?
 *   - Visibility changes are immediate.
 *
 *   Godray Speed:
 *   - Change godray speed for the screen.
 *
 *   Godray Gain:
 *   - Change godray gain for the screen.
 *
 *   Godray Lacunarity:
 *   - Change godray lacunarity for the screen.
 *
 *   Godray Angle:
 *   - Change godray angle for the screen.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 *   - Visibility changes are immediate.
 *
 * ---
 *
 * Godray: Reset
 * - Reset the Godray filter settings for the settings found in the Plugin
 *   Parameters or map notetags.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the reset to occur.
 *   - Visibility changes are immediate.
 *
 * ---
 * 
 * === Color Adjust Plugin Commands ===
 * 
 * ---
 *
 * Color Adjust: Change Settings
 * - Change the Color Adjustment filter settings for the screen.
 *
 *   Adjust Brightness:
 *   - Change color adjust brightness for the screen.
 *
 *   Adjust Contrast:
 *   - Change color adjust contrast for the screen.
 *
 *   Adjust Saturation:
 *   - Change color adjust saturation for the screen.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 *
 * ---
 *
 * Color Adjust: Reset
 * - Reset the Color Adjustment filter settings for the settings found in the
 *   Plugin Parameters or map notetags.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the reset to occur.
 *
 * ---
 * 
 * === Tilt Shift Plugin Commands ===
 * 
 * ---
 * 
 * Tilt Shift: Change Settings
 * - Change the Tilt Shift filter settings for the screen.
 * 
 *   Pixel Blur:
 *   - What is the default pixel blur amount for tilt shift?
 *   - Smaller = less blur. Higher = more blur.
 * 
 *   Gradient Blur:
 *   - What is the default gradient blur amount for tilt shift?
 *   - Smaller = less gradient. Higher = more gradient.
 * 
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 * 
 * ---
 * 
 * Tilt Shift: Reset
 * - Reset the Tilt Shift filter settings for the settings found in the
 *   Plugin Parameters or map notetags.
 * 
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 * 
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 * 
 * This section is for the general plugin parameter settings.
 * 
 * ---
 * 
 * General
 * 
 *   Apply Base-Only?
 *   - Base-Only excludes pictures, timers, and weather.
 *   - Whole includes the above.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Bloom Settings
 * ============================================================================
 *
 * There are two versions of these plugin parameters. One of them are for the
 * Map Defaults and the other is for the Battle Defaults. These settings are
 * applied to the map and battle scenes respectively and will serve as the
 * stock setting when no map notetags, troop name tags, or Plugin Commands have
 * been used to alter them.
 *
 * ---
 *
 * Bloom Settings
 * 
 *   Bloom Scale:
 *   - Default bloom scale for the screen unless changed through tags.
 * 
 *   Bloom Brightness:
 *   - Default bloom brightness for the screen unless changed through tags.
 * 
 *   Bloom Threshold:
 *   - Default bloom threshold for the screen unless changed through tags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Godray Settings
 * ============================================================================
 *
 * There are two versions of these plugin parameters. One of them are for the
 * Map Defaults and the other is for the Battle Defaults. These settings are
 * applied to the map and battle scenes respectively and will serve as the
 * stock setting when no map notetags, troop name tags, or Plugin Commands have
 * been used to alter them.
 *
 * ---
 *
 * Godray Settings
 * 
 *   Default Visible?:
 *   - Show godrays on all screens by default unless changed through tags?
 * 
 *   Godray Speed:
 *   - Default godray speed for all screens unless changed through tags.
 * 
 *   Godray Gain:
 *   - Default godray gain for all screens unless changed through tags.
 * 
 *   Godray Lacunarity:
 *   - Default godray lacunarity for all screens unless changed through tags.
 * 
 *   Godray Angle:
 *   - Default godray angle for all screens unless changed through tags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Adjust Settings
 * ============================================================================
 *
 * There are two versions of these plugin parameters. One of them are for the
 * Map Defaults and the other is for the Battle Defaults. These settings are
 * applied to the map and battle scenes respectively and will serve as the
 * stock setting when no map notetags, troop name tags, or Plugin Commands have
 * been used to alter them.
 *
 * ---
 *
 * Color Adjust Settings
 * 
 *   Adjust Brightness:
 *   - Default color adjust brightness for all screens unless changed
 *     through tags.
 * 
 *   Adjust Contrast:
 *   - Default color adjust contrast for all screens unless changed
 *     through tags.
 * 
 *   Adjust Saturation:
 *   - Default color adjust saturation for all screens unless changed
 *     through tags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Tilt Shift Settings
 * ============================================================================
 *
 * There are two versions of these plugin parameters. One of them are for the
 * Map Defaults and the other is for the Battle Defaults. These settings are
 * applied to the map and battle scenes respectively and will serve as the
 * stock setting when no map notetags, troop name tags, or Plugin Commands have
 * been used to alter them.
 *
 * ---
 *
 * Tilt Shift Settings
 * 
 *   Pixel Blur:
 *   - What is the default pixel blur amount for tilt shift?
 *   - Smaller = less blur. Higher = more blur.
 * 
 *   Gradient Blur:
 *   - What is the default gradient blur amount for tilt shift?
 *   - Smaller = less gradient. Higher = more gradient.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.08: June 13, 2024
 * * Bug Fixes!
 * ** Added a failsafe to prevent crashes when no focus target is found due to
 *    either changing map or a sprite is deleted. Fix made by Olivia.
 * 
 * Version 1.07: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Olivia and sponsored by Archeia:
 * *** Blur
 * **** The blur filter makes the screen appear less focused and more fuzzy.
 *      Details become harder to distinguish and the like.
 * **** Notetags and Plugin Commands added.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: October 13, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Olivia and sponsored by Archeia:
 * *** Tilt Shift
 * **** The Tilt Shift filter creates a blur at the upper and lower edges of
 *      the screen with varying degrees of pixelation blur and gradient blur.
 * **** Plugin Parameters, Notetags, and Plugin Commands added.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.05: April 28, 2022
 * * Bug Fixes!
 * ** No longer crashes with event test play. Fix made by Olivia.
 * 
 * Version 1.04: March 24, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features:
 * ** New Plugin Parameters added: "Apply Base-Only?"
 * *** Base-Only excludes pictures, timers, and weather.
 * *** Whole includes the above.
 * 
 * Version 1.03: April 2, 2021
 * * Bug Fixes!
 * ** Changing scenes while a filter change is in transition will automatically
 *    load up the changes made to the filter to prevent desynchronization.
 *    Fix made by Olivia.
 * 
 * Version 1.02: March 12, 2021
 * * Compatibility Update!
 * ** Added compatibility with the VisuStella MZ Options Core v1.10 update.
 * *** When the "Special Effects" option is set to OFF, the filters for this
 *     plugin will be shut off. They will be returned to normal when set to ON.
 * * Documentation Update!
 * ** Added the Options Core section to the "Extra Features" list.
 * 
 * Version 1.01: December 25, 2020
 * * Bug Fixes!
 * ** Bright effects from battle should no longer carry back over into the
 *    map scene. Fix made by Yanfly.
 *
 * Version 1.00: January 18, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BloomChange
 * @text Bloom: Change Settings
 * @desc Change the Bloom filter settings for the screen.
 *
 * @arg Scale:num
 * @text Bloom Scale
 * @desc Change bloom scale for the screen.
 * @default 0.5
 *
 * @arg Brightness:num
 * @text Bloom Brightness
 * @desc Change bloom brightness for the screen.
 * @default 1.0
 *
 * @arg Threshold:num
 * @text Bloom Threshold
 * @desc Change bloom threshold for the screen.
 * @default 0.5
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BloomReset
 * @text Bloom: Reset
 * @desc Reset the Bloom filter settings for the settings found in
 * the Plugin Parameters or map notetags.
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Blur
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BlurChange
 * @text Blur: Change Settings
 * @desc Change the Blur filter settings for the screen.
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the screen.
 * For best results, use numbers between 0 and 5.
 * @default 2.0
 *
 * @arg Duration:num
 * @text Blur Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BlurReset
 * @text Blur: Reset
 * @desc Clears the Blur filter.
 *
 * @arg Duration:num
 * @text Blur Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Godray
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GodrayChange
 * @text Godray: Change Settings
 * @desc Change the Godray filter settings for the screen.
 *
 * @arg Visible:eval
 * @text Visible?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show godrays on the screen?
 * Visibility changes are immediate.
 * @default true
 *
 * @arg Speed:num
 * @text Godray Speed
 * @desc Change godray speed for the screen.
 * @default 0.01
 *
 * @arg Gain:num
 * @text Godray Gain
 * @desc Change godray gain for the screen.
 * @default 0.6
 *
 * @arg Lacunarity:num
 * @text Godray Lacunarity
 * @desc Change godray lacunarity for the screen.
 * @default 2.0
 *
 * @arg Angle:num
 * @text Godray Angle
 * @desc Change godray angle for the screen.
 * @default -30
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * Visibility changes are immediate.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GodrayReset
 * @text Godray: Reset
 * @desc Reset the Godray filter settings for the settings
 * found in the Plugin Parameters or map notetags.
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * Visibility changes are immediate.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ColorAdjust
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ColorAdjustChange
 * @text Color Adjust: Change Settings
 * @desc Change the Color Adjustment filter settings for the screen.
 *
 * @arg Brightness:num
 * @text Adjust Brightness
 * @desc Change color adjust brightness for the screen.
 * @default 1.0
 *
 * @arg Contrast:num
 * @text Adjust Contrast
 * @desc Change color adjust contrast for the screen.
 * @default 0.0
 *
 * @arg Saturate:num
 * @text Adjust Saturation
 * @desc Change color adjust saturation for the screen.
 * @default 0.0
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ColorAdjustReset
 * @text Color Adjust: Reset
 * @desc Reset the Color Adjustment filter settings for the settings
 * found in the Plugin Parameters or map notetags.
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_TiltShift
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TiltShiftChange
 * @text Tilt Shift: Change Settings
 * @desc Change the Tilt Shift filter settings for the screen.
 *
 * @arg Blur:num
 * @text Pixel Blur
 * @desc What is the default pixel blur amount for tilt shift?
 * Smaller = less blur. Higher = more blur.
 * @default 24
 *
 * @arg GradientBlur:num
 * @text Gradient Blur
 * @desc What is the default gradient blur amount for tilt shift?
 * Smaller = less gradient. Higher = more gradient.
 * @default 1000
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TiltShiftReset
 * @text Tilt Shift: Reset
 * @desc Reset the Tilt Shift filter settings for the settings
 * found in the Plugin Parameters or map notetags.
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param BrightEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Map
 * @text Map Defaults
 *
 * @param MapBaseFilter:eval
 * @text Apply Base-Only?
 * @parent Map
 * @type boolean
 * @on Base-Only
 * @off Apply Whole
 * @desc Base-Only excludes pictures, timers, and weather.
 * Whole includes the above.
 * @default true
 *
 * @param MapBloom:struct
 * @text Bloom Settings
 * @parent Map
 * @type struct<Bloom>
 * @desc Default bloom settings for all maps.
 * @default {"Scale:num":"0.5","Brightness:num":"1.0","Threshold:num":"0.5"}
 *
 * @param MapGodray:struct
 * @text Godray Settings
 * @parent Map
 * @type struct<Godray>
 * @desc Default Godray settings for all maps.
 * @default {"Visible:eval":"false","Speed:num":"0.01","Gain:num":"0.6","Lacunarity:num":"2.0","Angle:num":"-30"}
 *
 * @param MapColorAdjust:struct
 * @text Color Adjust Settings
 * @parent Map
 * @type struct<ColorAdjust>
 * @desc Default color adjustment settings for all maps.
 * @default {"Brightness:num":"1.0","Contrast:num":"0.0","Saturate:num":"0.0"}
 *
 * @param MapTiltShift:struct
 * @text Tilt Shift Settings
 * @parent Map
 * @type struct<TiltShift>
 * @desc Default tilt shift adjustment settings for all maps.
 * @default {"Blur:num":"24","GradientBlur:num":"1000"}
 * 
 * @param Battle
 * @text Battle Defaults
 *
 * @param BattleBaseFilter:eval
 * @text Apply Base-Only?
 * @parent Battle
 * @type boolean
 * @on Base-Only
 * @off Apply Whole
 * @desc Base-Only excludes pictures, timers, and weather.
 * Whole includes the above.
 * @default true
 *
 * @param BattleBloom:struct
 * @text Bloom Settings
 * @parent Battle
 * @type struct<Bloom>
 * @desc Default bloom settings for all battles.
 * @default {"Scale:num":"0.5","Brightness:num":"1.0","Threshold:num":"0.5"}
 *
 * @param BattleGodray:struct
 * @text Godray Settings
 * @parent Battle
 * @type struct<Godray>
 * @desc Default Godray settings for all battles.
 * @default {"Visible:eval":"false","Speed:num":"0.01","Gain:num":"0.6","Lacunarity:num":"2.0","Angle:num":"-30"}
 *
 * @param BattleColorAdjust:struct
 * @text Color Adjust Settings
 * @parent Battle
 * @type struct<ColorAdjust>
 * @desc Default color adjustment settings for all battles.
 * @default {"Brightness:num":"1.0","Contrast:num":"0.0","Saturate:num":"0.0"}
 *
 * @param BattleTiltShift:struct
 * @text Tilt Shift Settings
 * @parent Battle
 * @type struct<TiltShift>
 * @desc Default tilt shift adjustment settings for all battles.
 * @default {"Blur:num":"0","GradientBlur:num":"1600"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Bloom Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Bloom:
 *
 * @param Scale:num
 * @text Bloom Scale
 * @desc Default bloom scale for the screen unless changed through tags.
 * @default 0.5
 *
 * @param Brightness:num
 * @text Bloom Brightness
 * @desc Default bloom brightness for the screen unless changed through tags.
 * @default 1.0
 *
 * @param Threshold:num
 * @text Bloom Threshold
 * @desc Default bloom threshold for the screen unless changed through tags.
 * @default 0.5
 *
 */
/* ----------------------------------------------------------------------------
 * Godray Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Godray:
 *
 * @param Visible:eval
 * @text Default Visible?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show godrays on all screens by default unless changed through tags?
 * @default false
 *
 * @param Speed:num
 * @text Godray Speed
 * @desc Default godray speed for all screens unless changed through tags.
 * @default 0.01
 *
 * @param Gain:num
 * @text Godray Gain
 * @desc Default godray gain for all screens unless changed through tags.
 * @default 0.6
 *
 * @param Lacunarity:num
 * @text Godray Lacunarity
 * @desc Default godray lacunarity for all screens unless changed through tags.
 * @default 2.0
 *
 * @param Angle:num
 * @text Godray Angle
 * @desc Default godray angle for all screens unless changed through tags.
 * @default -30
 *
 */
/* ----------------------------------------------------------------------------
 * Color Adjust Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ColorAdjust:
 *
 * @param Brightness:num
 * @text Adjust Brightness
 * @desc Default color adjust brightness for all screens unless changed through tags.
 * @default 1.0
 *
 * @param Contrast:num
 * @text Adjust Contrast
 * @desc Default color adjust contrast for all screens unless changed through tags.
 * @default 0.0
 *
 * @param Saturate:num
 * @text Adjust Saturation
 * @desc Default color adjust saturation for all screens unless changed through tags.
 * @default 0.0
 *
 */
/* ----------------------------------------------------------------------------
 * Tilt Shift Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TiltShift:
 *
 * @param Blur:num
 * @text Pixel Blur
 * @desc What is the default pixel blur amount for tilt shift?
 * Smaller = less blur. Higher = more blur.
 * @default 24
 *
 * @param GradientBlur:num
 * @text Gradient Blur
 * @desc What is the default gradient blur amount for tilt shift?
 * Smaller = less gradient. Higher = more gradient.
 * @default 1000
 *
 */
//=============================================================================

function _0x5060(_0x2448f2,_0x40ba59){var _0x3b91a1=_0x1717();return _0x5060=function(_0x446113,_0xffad62){_0x446113=_0x446113-(-0xb4d+-0x1e4*0xf+-0x487*-0x9);var _0x1365ac=_0x3b91a1[_0x446113];return _0x1365ac;},_0x5060(_0x2448f2,_0x40ba59);}var _0x47dc13=_0x5060;(function(_0x2ad31f,_0x1614c3){var _0x3ca39c=_0x5060,_0xfce6b2=_0x2ad31f();while(!![]){try{var _0x21d078=parseInt(_0x3ca39c(0x224))/(-0x38b+-0x1173*-0x2+-0xfad*0x2)*(parseInt(_0x3ca39c(0x2ae))/(0x69b+0x15b*0x7+-0x8e*0x1d))+-parseInt(_0x3ca39c(0x198))/(-0x1*0x292+-0x5b3*0x1+-0x424*-0x2)*(-parseInt(_0x3ca39c(0x138))/(0x6ae*0x2+0x1*0x696+-0x13ee))+-parseInt(_0x3ca39c(0x218))/(-0x65*-0xa+-0x6f9+0x30c)+-parseInt(_0x3ca39c(0x1d4))/(-0xa9b+0x14f2+-0xa51*0x1)+parseInt(_0x3ca39c(0x223))/(-0x2351*-0x1+-0x236e+0x12*0x2)+parseInt(_0x3ca39c(0x2e7))/(-0x20b1+0x29*-0x37+0x2988)*(parseInt(_0x3ca39c(0x201))/(0x1e72+0x76c+-0x25d5))+-parseInt(_0x3ca39c(0x27e))/(0x1*-0xf69+0x374+0x1*0xbff)*(parseInt(_0x3ca39c(0x1c8))/(-0x2517+-0x233b+-0x11d*-0x41));if(_0x21d078===_0x1614c3)break;else _0xfce6b2['push'](_0xfce6b2['shift']());}catch(_0x1b787e){_0xfce6b2['push'](_0xfce6b2['shift']());}}}(_0x1717,-0x4e1*-0x31f+0xa15e4+-0x108f10));var label='BrightEffe'+_0x47dc13(0x1fe),tier=tier||0xa*-0xb5+-0x3*-0xbdf+-0x1c8b,dependencies=[],pluginData=$plugins[_0x47dc13(0x174)](function(_0x60a487){var _0x25c3b0=_0x47dc13,_0x1d8058={'wWvRb':function(_0x60c64c,_0x5b1adb){return _0x60c64c+_0x5b1adb;}};return _0x60a487[_0x25c3b0(0x1dc)]&&_0x60a487[_0x25c3b0(0x26e)+'n'][_0x25c3b0(0x14a)](_0x1d8058['wWvRb'](_0x1d8058[_0x25c3b0(0x230)]('[',label),']'));})[-0x936+-0xcb9+0x463*0x5];VisuMZ[label][_0x47dc13(0x16e)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x47dc13(0x280)+'ams']=function(_0x23ecf7,_0x48192b){var _0x36d933=_0x47dc13,_0x2ba933={'fJlsJ':function(_0x370319,_0x4c5616){return _0x370319(_0x4c5616);},'XFDRF':_0x36d933(0x17c),'CRLAm':function(_0x25a91e,_0x579192){return _0x25a91e!==_0x579192;},'JYbWm':_0x36d933(0x14e),'jTdeI':'EVAL','hdebZ':function(_0x2bd9d8,_0x2fb79f){return _0x2bd9d8!==_0x2fb79f;},'kUfSI':function(_0x27f4fd,_0x5354b2){return _0x27f4fd(_0x5354b2);},'AtVDY':_0x36d933(0x241),'dCdQG':function(_0x2a07e3,_0x4c4dcc){return _0x2a07e3!==_0x4c4dcc;},'epnDG':_0x36d933(0x12c),'NXLdQ':'ARRAYJSON','rTIAB':function(_0x1a29b3,_0x5e4494){return _0x1a29b3!==_0x5e4494;},'sXCSl':_0x36d933(0x287),'WtXEw':_0x36d933(0x2a1),'tCVuX':_0x36d933(0x274),'puaUx':'STR','hUbsM':function(_0x4597b9,_0x3817ca){return _0x4597b9(_0x3817ca);},'ZFJpi':_0x36d933(0x120),'MSDyX':function(_0x169e94,_0x3cf8f4){return _0x169e94!==_0x3cf8f4;},'BgCwA':_0x36d933(0x1f1),'ejwrf':_0x36d933(0x236)+'T'};for(const _0x150ea4 in _0x48192b){if(_0x150ea4['match'](/(.*):(.*)/i)){const _0x464633=_0x2ba933['fJlsJ'](String,RegExp['$1']),_0x419fbc=_0x2ba933[_0x36d933(0x2e1)](String,RegExp['$2'])['toUpperCas'+'e']()[_0x36d933(0x278)]();let _0x2d75bb,_0x46412c,_0x471a48;switch(_0x419fbc){case _0x2ba933[_0x36d933(0x249)]:_0x2d75bb=_0x2ba933[_0x36d933(0x184)](_0x48192b[_0x150ea4],'')?_0x2ba933[_0x36d933(0x2e1)](Number,_0x48192b[_0x150ea4]):0xc2b+0x2167+0x2*-0x16c9;break;case _0x2ba933[_0x36d933(0x2f1)]:_0x46412c=_0x2ba933[_0x36d933(0x184)](_0x48192b[_0x150ea4],'')?JSON[_0x36d933(0x28e)](_0x48192b[_0x150ea4]):[],_0x2d75bb=_0x46412c[_0x36d933(0x130)](_0x2282ed=>Number(_0x2282ed));break;case _0x2ba933['jTdeI']:_0x2d75bb=_0x2ba933['hdebZ'](_0x48192b[_0x150ea4],'')?_0x2ba933[_0x36d933(0x22c)](eval,_0x48192b[_0x150ea4]):null;break;case _0x2ba933[_0x36d933(0x17f)]:_0x46412c=_0x2ba933[_0x36d933(0x18d)](_0x48192b[_0x150ea4],'')?JSON[_0x36d933(0x28e)](_0x48192b[_0x150ea4]):[],_0x2d75bb=_0x46412c[_0x36d933(0x130)](_0x1b596d=>eval(_0x1b596d));break;case _0x2ba933[_0x36d933(0x18a)]:_0x2d75bb=_0x2ba933[_0x36d933(0x18d)](_0x48192b[_0x150ea4],'')?JSON[_0x36d933(0x28e)](_0x48192b[_0x150ea4]):'';break;case _0x2ba933[_0x36d933(0x20b)]:_0x46412c=_0x2ba933[_0x36d933(0x259)](_0x48192b[_0x150ea4],'')?JSON['parse'](_0x48192b[_0x150ea4]):[],_0x2d75bb=_0x46412c[_0x36d933(0x130)](_0x51ad43=>JSON[_0x36d933(0x28e)](_0x51ad43));break;case _0x2ba933[_0x36d933(0x194)]:_0x2d75bb=_0x2ba933[_0x36d933(0x257)](_0x48192b[_0x150ea4],'')?new Function(JSON['parse'](_0x48192b[_0x150ea4])):new Function(_0x2ba933[_0x36d933(0x2e0)]);break;case _0x2ba933['tCVuX']:_0x46412c=_0x2ba933[_0x36d933(0x184)](_0x48192b[_0x150ea4],'')?JSON[_0x36d933(0x28e)](_0x48192b[_0x150ea4]):[],_0x2d75bb=_0x46412c['map'](_0x1616da=>new Function(JSON['parse'](_0x1616da)));break;case _0x2ba933[_0x36d933(0x20a)]:_0x2d75bb=_0x2ba933[_0x36d933(0x259)](_0x48192b[_0x150ea4],'')?_0x2ba933[_0x36d933(0x1ac)](String,_0x48192b[_0x150ea4]):'';break;case _0x2ba933[_0x36d933(0x193)]:_0x46412c=_0x2ba933[_0x36d933(0x2dc)](_0x48192b[_0x150ea4],'')?JSON[_0x36d933(0x28e)](_0x48192b[_0x150ea4]):[],_0x2d75bb=_0x46412c[_0x36d933(0x130)](_0x217c9e=>String(_0x217c9e));break;case _0x2ba933[_0x36d933(0x1b3)]:_0x471a48=_0x2ba933[_0x36d933(0x257)](_0x48192b[_0x150ea4],'')?JSON['parse'](_0x48192b[_0x150ea4]):{},_0x2d75bb=VisuMZ['ConvertPar'+'ams']({},_0x471a48);break;case _0x2ba933[_0x36d933(0x305)]:_0x46412c=_0x2ba933[_0x36d933(0x2dc)](_0x48192b[_0x150ea4],'')?JSON[_0x36d933(0x28e)](_0x48192b[_0x150ea4]):[],_0x2d75bb=_0x46412c[_0x36d933(0x130)](_0x25bf1c=>VisuMZ[_0x36d933(0x280)+'ams']({},JSON[_0x36d933(0x28e)](_0x25bf1c)));break;default:continue;}_0x23ecf7[_0x464633]=_0x2d75bb;}}return _0x23ecf7;},(_0x5f4c3d=>{var _0x4681ab=_0x47dc13,_0x490dd8={'UJhZw':function(_0x529abf,_0x42adf1){return _0x529abf(_0x42adf1);},'JiEYB':_0x4681ab(0x21b)+_0x4681ab(0x11a)+_0x4681ab(0x13d)+_0x4681ab(0x122)+_0x4681ab(0x28a)+_0x4681ab(0x166)+_0x4681ab(0x11b)+_0x4681ab(0x2cf),'ioOsX':function(_0x39cdbd,_0x4dac5a){return _0x39cdbd(_0x4dac5a);},'ANkhP':function(_0x3cdc43,_0x2d9e11){return _0x3cdc43!==_0x2d9e11;},'PCZjZ':function(_0x2cf538,_0xd53cb1){return _0x2cf538(_0xd53cb1);},'QWDUR':_0x4681ab(0x26a)+_0x4681ab(0x2d1)+_0x4681ab(0x143)+_0x4681ab(0x275)+'ease\x20updat'+_0x4681ab(0x1b8)+_0x4681ab(0x2ec)+_0x4681ab(0x119),'XGaRk':function(_0x45c0c2,_0x390de6){return _0x45c0c2(_0x390de6);},'qqnaj':function(_0xa6e88e,_0x29f0b5){return _0xa6e88e<_0x29f0b5;},'EzsFg':function(_0x35d96f,_0x19faeb){return _0x35d96f(_0x19faeb);},'Giern':'%1\x20is\x20inco'+_0x4681ab(0x266)+_0x4681ab(0x1c5)+'e\x20plugin\x20l'+_0x4681ab(0x263)+_0x4681ab(0x26b)+_0x4681ab(0x2f9)+_0x4681ab(0x271)+_0x4681ab(0x268)+_0x4681ab(0x270)+_0x4681ab(0x2a5)+'reorder\x20th'+_0x4681ab(0x177)+_0x4681ab(0x253)+_0x4681ab(0x1f8)+_0x4681ab(0x27b)+'ier\x20number'+'s.'};const _0x1e4997=_0x5f4c3d[_0x4681ab(0x185)];for(const _0x2c13bf of dependencies){if(!Imported[_0x2c13bf]){_0x490dd8['UJhZw'](alert,_0x490dd8[_0x4681ab(0x2f7)][_0x4681ab(0x2b8)](_0x1e4997,_0x2c13bf)),SceneManager[_0x4681ab(0x300)]();break;}}const _0x3a308c=_0x5f4c3d[_0x4681ab(0x26e)+'n'];if(_0x3a308c[_0x4681ab(0x2cb)](/\[Version[ ](.*?)\]/i)){const _0x55d58e=_0x490dd8['ioOsX'](Number,RegExp['$1']);_0x490dd8[_0x4681ab(0x22f)](_0x55d58e,VisuMZ[label]['version'])&&(_0x490dd8[_0x4681ab(0x15c)](alert,_0x490dd8[_0x4681ab(0x11d)][_0x4681ab(0x2b8)](_0x1e4997,_0x55d58e)),SceneManager[_0x4681ab(0x300)]());}if(_0x3a308c['match'](/\[Tier[ ](\d+)\]/i)){const _0x51cb4f=_0x490dd8[_0x4681ab(0x181)](Number,RegExp['$1']);_0x490dd8['qqnaj'](_0x51cb4f,tier)?(_0x490dd8[_0x4681ab(0x19a)](alert,_0x490dd8[_0x4681ab(0x1b2)]['format'](_0x1e4997,_0x51cb4f,tier)),SceneManager['exit']()):tier=Math[_0x4681ab(0x2c8)](_0x51cb4f,tier);}VisuMZ['ConvertPar'+_0x4681ab(0x2a7)](VisuMZ[label]['Settings'],_0x5f4c3d[_0x4681ab(0x2c6)]);})(pluginData),PluginManager[_0x47dc13(0x302)+_0x47dc13(0x20d)](pluginData['name'],_0x47dc13(0x2c2)+'e',_0x3491e6=>{var _0x25892c=_0x47dc13;VisuMZ[_0x25892c(0x280)+_0x25892c(0x2a7)](_0x3491e6,_0x3491e6);const _0x23f133=$gameScreen[_0x25892c(0x164)+_0x25892c(0x244)+_0x25892c(0x12a)+'gs']();_0x23f133[_0x25892c(0x1ff)]=_0x3491e6[_0x25892c(0x2be)],_0x23f133['brightness']=_0x3491e6[_0x25892c(0x264)],_0x23f133[_0x25892c(0x23e)]=_0x3491e6[_0x25892c(0x2c1)],_0x23f133[_0x25892c(0x239)]=_0x3491e6[_0x25892c(0x2f6)],!SceneManager[_0x25892c(0x129)+_0x25892c(0x16d)]()&&($gameMap['_brightEff'+_0x25892c(0x202)+_0x25892c(0x25d)+_0x25892c(0x1bd)]=undefined,$gameMap[_0x25892c(0x132)+_0x25892c(0x2f8)+_0x25892c(0x2a0)+_0x25892c(0x1bd)]=undefined);}),PluginManager[_0x47dc13(0x302)+_0x47dc13(0x20d)](pluginData['name'],_0x47dc13(0x1ed),_0x3eb522=>{var _0x1a8a86=_0x47dc13;VisuMZ['ConvertPar'+_0x1a8a86(0x2a7)](_0x3eb522,_0x3eb522);SceneManager[_0x1a8a86(0x129)+'tle']()?$gameTroop['setupBrigh'+_0x1a8a86(0x126)+_0x1a8a86(0x1bc)+'er']():$gameMap[_0x1a8a86(0x2e2)+_0x1a8a86(0x126)+_0x1a8a86(0x1bc)+'er']();const _0x2ff20f=$gameScreen['getBrightE'+_0x1a8a86(0x244)+_0x1a8a86(0x12a)+'gs']();_0x2ff20f['duration']=_0x3eb522['Duration'];}),PluginManager[_0x47dc13(0x302)+_0x47dc13(0x20d)](pluginData[_0x47dc13(0x185)],_0x47dc13(0x155),_0x383d92=>{var _0x222dcf=_0x47dc13;VisuMZ[_0x222dcf(0x280)+_0x222dcf(0x2a7)](_0x383d92,_0x383d92);const _0x2c02be=$gameScreen[_0x222dcf(0x164)+'ffectsBlur'+_0x222dcf(0x16e)]();_0x2c02be['blur']=_0x383d92[_0x222dcf(0x1af)],_0x2c02be[_0x222dcf(0x239)]=_0x383d92[_0x222dcf(0x2f6)];}),PluginManager[_0x47dc13(0x302)+_0x47dc13(0x20d)](pluginData[_0x47dc13(0x185)],_0x47dc13(0x183),_0x5912cb=>{var _0x20cac1=_0x47dc13;VisuMZ[_0x20cac1(0x280)+'ams'](_0x5912cb,_0x5912cb);SceneManager[_0x20cac1(0x129)+_0x20cac1(0x16d)]()?$gameTroop['setupBrigh'+_0x20cac1(0x309)+_0x20cac1(0x2f5)]():$gameMap[_0x20cac1(0x2e2)+_0x20cac1(0x309)+_0x20cac1(0x2f5)]();const _0x4815fd=$gameScreen[_0x20cac1(0x164)+_0x20cac1(0x211)+_0x20cac1(0x16e)]();_0x4815fd[_0x20cac1(0x239)]=_0x5912cb[_0x20cac1(0x2f6)];}),PluginManager[_0x47dc13(0x302)+_0x47dc13(0x20d)](pluginData[_0x47dc13(0x185)],'GodrayChan'+'ge',_0xdd71d8=>{var _0x513a88=_0x47dc13;VisuMZ[_0x513a88(0x280)+'ams'](_0xdd71d8,_0xdd71d8);const _0x157399=$gameScreen['getBrightE'+'ffectsGodr'+_0x513a88(0x19c)]();_0x157399[_0x513a88(0x2b7)]=_0xdd71d8[_0x513a88(0x19b)],_0x157399[_0x513a88(0x23d)]=_0xdd71d8[_0x513a88(0x25f)],_0x157399[_0x513a88(0x136)]=_0xdd71d8[_0x513a88(0x2a4)],_0x157399[_0x513a88(0x19d)]=_0xdd71d8[_0x513a88(0x1fc)],_0x157399[_0x513a88(0x1db)]=_0xdd71d8[_0x513a88(0x1c7)],_0x157399[_0x513a88(0x239)]=_0xdd71d8[_0x513a88(0x2f6)],!SceneManager[_0x513a88(0x129)+_0x513a88(0x16d)]()&&($gameMap[_0x513a88(0x132)+_0x513a88(0x1b6)+_0x513a88(0x255)]=undefined,$gameMap[_0x513a88(0x132)+_0x513a88(0x1b6)+_0x513a88(0x2d2)]=undefined);}),PluginManager['registerCo'+_0x47dc13(0x20d)](pluginData[_0x47dc13(0x185)],_0x47dc13(0x1aa)+'t',_0x4f8245=>{var _0x4a457e=_0x47dc13;VisuMZ['ConvertPar'+_0x4a457e(0x2a7)](_0x4f8245,_0x4f8245);SceneManager[_0x4a457e(0x129)+_0x4a457e(0x16d)]()?$gameTroop[_0x4a457e(0x2e2)+'tEffectsGo'+_0x4a457e(0x17b)]():$gameMap[_0x4a457e(0x2e2)+_0x4a457e(0x245)+'drayFilter']();const _0x1823f5=$gameScreen['getBrightE'+_0x4a457e(0x1be)+'aySettings']();_0x1823f5['duration']=_0x4f8245[_0x4a457e(0x2f6)];}),PluginManager[_0x47dc13(0x302)+'mmand'](pluginData[_0x47dc13(0x185)],'ColorAdjus'+_0x47dc13(0x204),_0x4c125f=>{var _0x43de98=_0x47dc13;VisuMZ[_0x43de98(0x280)+_0x43de98(0x2a7)](_0x4c125f,_0x4c125f);const _0x16c0ad=$gameScreen[_0x43de98(0x164)+_0x43de98(0x1fa)+'rAdjustSet'+'tings']();_0x16c0ad[_0x43de98(0x2e9)]=_0x4c125f[_0x43de98(0x264)],_0x16c0ad[_0x43de98(0x285)]=_0x4c125f[_0x43de98(0x2ac)],_0x16c0ad[_0x43de98(0x252)]=_0x4c125f[_0x43de98(0x2af)],_0x16c0ad[_0x43de98(0x239)]=_0x4c125f[_0x43de98(0x2f6)],!SceneManager['isSceneBat'+_0x43de98(0x16d)]()&&($gameMap[_0x43de98(0x132)+_0x43de98(0x1e9)+_0x43de98(0x1e2)+_0x43de98(0x154)]=undefined,$gameMap[_0x43de98(0x132)+_0x43de98(0x1e9)+'djustVertS'+_0x43de98(0x154)]=undefined);}),PluginManager['registerCo'+_0x47dc13(0x20d)](pluginData[_0x47dc13(0x185)],_0x47dc13(0x140)+'tReset',_0x2f672a=>{var _0x5746a0=_0x47dc13;VisuMZ[_0x5746a0(0x280)+_0x5746a0(0x2a7)](_0x2f672a,_0x2f672a);SceneManager[_0x5746a0(0x129)+_0x5746a0(0x16d)]()?$gameTroop[_0x5746a0(0x2e2)+_0x5746a0(0x297)+_0x5746a0(0x2a8)+'ilter']():$gameMap[_0x5746a0(0x2e2)+'tEffectsCo'+_0x5746a0(0x2a8)+_0x5746a0(0x145)]();const _0x6fa395=$gameScreen[_0x5746a0(0x164)+'ffectsColo'+_0x5746a0(0x168)+_0x5746a0(0x2ad)]();_0x6fa395[_0x5746a0(0x239)]=_0x2f672a[_0x5746a0(0x2f6)];}),PluginManager[_0x47dc13(0x302)+'mmand'](pluginData[_0x47dc13(0x185)],_0x47dc13(0x139)+_0x47dc13(0x173),_0x8ac92c=>{var _0x29b53c=_0x47dc13;VisuMZ[_0x29b53c(0x280)+_0x29b53c(0x2a7)](_0x8ac92c,_0x8ac92c);const _0x4ef9ca=$gameScreen[_0x29b53c(0x164)+'ffectsTilt'+'ShiftSetti'+_0x29b53c(0x308)]();_0x4ef9ca[_0x29b53c(0x21e)]=_0x8ac92c[_0x29b53c(0x1af)],_0x4ef9ca[_0x29b53c(0x178)+'ur']=_0x8ac92c[_0x29b53c(0x1b1)+'ur'],_0x4ef9ca[_0x29b53c(0x239)]=_0x8ac92c['Duration'];}),PluginManager[_0x47dc13(0x302)+'mmand'](pluginData['name'],_0x47dc13(0x13a)+'eset',_0x1fa756=>{var _0x319614=_0x47dc13;VisuMZ['ConvertPar'+'ams'](_0x1fa756,_0x1fa756);SceneManager[_0x319614(0x129)+_0x319614(0x16d)]()?$gameTroop['setupBrigh'+_0x319614(0x19f)+_0x319614(0x2ce)+_0x319614(0x25a)]():$gameMap[_0x319614(0x2e2)+_0x319614(0x19f)+_0x319614(0x2ce)+_0x319614(0x25a)]();const _0x39f1f3=$gameScreen[_0x319614(0x164)+_0x319614(0x1a5)+_0x319614(0x1eb)+_0x319614(0x308)]();_0x39f1f3[_0x319614(0x239)]=_0x1fa756[_0x319614(0x2f6)];}),SceneManager[_0x47dc13(0x129)+'tle']=function(){var _0x5bc11f=_0x47dc13,_0x1f18cd={'oqPEr':function(_0x5322ce,_0x133ee6){return _0x5322ce===_0x133ee6;}};return this[_0x5bc11f(0x2e8)]&&_0x1f18cd[_0x5bc11f(0x227)](this[_0x5bc11f(0x2e8)]['constructo'+'r'],Scene_Battle);},SceneManager[_0x47dc13(0x209)]=function(){var _0x411798={'HuYHC':function(_0x52b44d,_0x36913a){return _0x52b44d===_0x36913a;}};return this['_scene']&&_0x411798['HuYHC'](this['_scene']['constructo'+'r'],Scene_Map);},Game_Screen[_0x47dc13(0x251)][_0x47dc13(0x240)+'ffectsAdvB'+'loomSettin'+'gs']=function(_0x717b2f,_0x26a6ec,_0x519a7f,_0x29f340){var _0x47693c=_0x47dc13,_0x41b704={'jCdgJ':function(_0x4bac1e,_0x4486cd){return _0x4bac1e||_0x4486cd;},'SlqXx':function(_0x85a10a,_0x3d0f4b){return _0x85a10a||_0x3d0f4b;}};SceneManager[_0x47693c(0x129)+_0x47693c(0x16d)]()?this[_0x47693c(0x1a9)+'ectsAdvBlo'+'omSettings'+'Battle']={'bloomScale':_0x717b2f,'brightness':_0x26a6ec,'threshold':_0x519a7f,'duration':_0x41b704[_0x47693c(0x273)](_0x29f340,0x265b*0x1+0x1*0xe59+-0x1a5a*0x2)}:this[_0x47693c(0x1a9)+_0x47693c(0x12f)+_0x47693c(0x2f2)+'Map']={'bloomScale':_0x717b2f,'brightness':_0x26a6ec,'threshold':_0x519a7f,'duration':_0x41b704[_0x47693c(0x24a)](_0x29f340,-0x1*0xe44+0x2*0x1122+-0x200*0xa)};},Game_Screen[_0x47dc13(0x251)][_0x47dc13(0x164)+_0x47dc13(0x244)+_0x47dc13(0x12a)+'gs']=function(){var _0x3b7527=_0x47dc13,_0x3a8bf1={'Dzkiw':function(_0x262b99,_0x31e681){return _0x262b99===_0x31e681;},'DUaPF':function(_0x1683f9,_0x549a08){return _0x1683f9===_0x549a08;}};return SceneManager[_0x3b7527(0x129)+_0x3b7527(0x16d)]()?(_0x3a8bf1[_0x3b7527(0x216)](this['_BrightEff'+'ectsAdvBlo'+_0x3b7527(0x2f2)+_0x3b7527(0x21c)],undefined)&&$gameTroop[_0x3b7527(0x2e2)+_0x3b7527(0x126)+'vBloomFilt'+'er'](),this[_0x3b7527(0x1a9)+_0x3b7527(0x12f)+_0x3b7527(0x2f2)+'Battle']):(_0x3a8bf1[_0x3b7527(0x147)](this[_0x3b7527(0x1a9)+'ectsAdvBlo'+_0x3b7527(0x2f2)+_0x3b7527(0x229)],undefined)&&$gameMap[_0x3b7527(0x2e2)+_0x3b7527(0x126)+_0x3b7527(0x1bc)+'er'](),this[_0x3b7527(0x1a9)+_0x3b7527(0x12f)+_0x3b7527(0x2f2)+_0x3b7527(0x229)]);},Game_Screen[_0x47dc13(0x251)][_0x47dc13(0x240)+'ffectsGodr'+_0x47dc13(0x19c)]=function(_0x386b1d,_0x5ac31b,_0x412def,_0x3b33da,_0x4400e2,_0x4c0deb){var _0x18218e=_0x47dc13,_0x35f5be={'oNACM':function(_0x4c9a60,_0x520b6f){return _0x4c9a60||_0x520b6f;}};SceneManager[_0x18218e(0x129)+_0x18218e(0x16d)]()?this[_0x18218e(0x1a9)+'ectsGodray'+'SettingsBa'+_0x18218e(0x2f4)]={'visible':_0x386b1d,'speed':_0x5ac31b,'gain':_0x412def,'lacunarity':_0x3b33da,'angle':_0x4400e2,'duration':_0x35f5be[_0x18218e(0x189)](_0x4c0deb,0x1*-0x1822+0x480+0x13a2)}:this[_0x18218e(0x1a9)+_0x18218e(0x1b6)+'SettingsMa'+'p']={'visible':_0x386b1d,'speed':_0x5ac31b,'gain':_0x412def,'lacunarity':_0x3b33da,'angle':_0x4400e2,'duration':_0x35f5be[_0x18218e(0x189)](_0x4c0deb,-0xd59+0x194f+-0xbf6*0x1)};},Game_Screen[_0x47dc13(0x251)]['getBrightE'+_0x47dc13(0x1be)+'aySettings']=function(){var _0x4df7d5=_0x47dc13,_0x482b4b={'ZenmQ':function(_0x2a9e8d,_0x5a1a72){return _0x2a9e8d===_0x5a1a72;},'TnZXV':function(_0xdc9fb1,_0x5023fd){return _0xdc9fb1===_0x5023fd;}};return SceneManager[_0x4df7d5(0x129)+'tle']()?(_0x482b4b['ZenmQ'](this[_0x4df7d5(0x1a9)+_0x4df7d5(0x1b6)+_0x4df7d5(0x11c)+_0x4df7d5(0x2f4)],undefined)&&$gameTroop[_0x4df7d5(0x2e2)+'tEffectsGo'+_0x4df7d5(0x17b)](),this['_BrightEff'+'ectsGodray'+_0x4df7d5(0x11c)+_0x4df7d5(0x2f4)]):(_0x482b4b[_0x4df7d5(0x28d)](this[_0x4df7d5(0x1a9)+_0x4df7d5(0x1b6)+_0x4df7d5(0x1ad)+'p'],undefined)&&$gameMap['setupBrigh'+_0x4df7d5(0x245)+_0x4df7d5(0x17b)](),this[_0x4df7d5(0x1a9)+_0x4df7d5(0x1b6)+_0x4df7d5(0x1ad)+'p']);},Game_Screen['prototype']['setBrightE'+_0x47dc13(0x1fa)+_0x47dc13(0x168)+_0x47dc13(0x2ad)]=function(_0x2f471d,_0x263256,_0x3dbbc6,_0x37bcbc){var _0x15c9b5=_0x47dc13,_0x237b67={'lHkYQ':function(_0x46dc22,_0x4fad5f){return _0x46dc22||_0x4fad5f;}};SceneManager[_0x15c9b5(0x129)+'tle']()?this[_0x15c9b5(0x1a9)+_0x15c9b5(0x1e9)+'djustSetti'+_0x15c9b5(0x203)]={'brightness':_0x2f471d,'contrast':_0x263256,'saturate':_0x3dbbc6,'duration':_0x237b67[_0x15c9b5(0x149)](_0x37bcbc,0x8b7*-0x2+0x1*0x273+0xefb)}:this[_0x15c9b5(0x1a9)+_0x15c9b5(0x1e9)+_0x15c9b5(0x1d0)+_0x15c9b5(0x212)]={'brightness':_0x2f471d,'contrast':_0x263256,'saturate':_0x3dbbc6,'duration':_0x237b67[_0x15c9b5(0x149)](_0x37bcbc,-0x2b*-0xbb+-0x1*0x206d+0x4*0x41)};},Game_Screen['prototype'][_0x47dc13(0x164)+_0x47dc13(0x1fa)+_0x47dc13(0x168)+_0x47dc13(0x2ad)]=function(){var _0x2c01d0=_0x47dc13,_0x1e2ebf={'AKBKz':function(_0x21aace,_0x26988f){return _0x21aace===_0x26988f;},'mEjVh':function(_0x8014e3,_0x4f2923){return _0x8014e3===_0x4f2923;}};return SceneManager[_0x2c01d0(0x129)+_0x2c01d0(0x16d)]()?(_0x1e2ebf['AKBKz'](this['_BrightEff'+'ectsColorA'+_0x2c01d0(0x1d0)+_0x2c01d0(0x203)],undefined)&&$gameTroop[_0x2c01d0(0x2e2)+_0x2c01d0(0x297)+_0x2c01d0(0x2a8)+_0x2c01d0(0x145)](),this['_BrightEff'+'ectsColorA'+_0x2c01d0(0x1d0)+_0x2c01d0(0x203)]):(_0x1e2ebf[_0x2c01d0(0x301)](this['_BrightEff'+_0x2c01d0(0x1e9)+_0x2c01d0(0x1d0)+_0x2c01d0(0x212)],undefined)&&$gameMap['setupBrigh'+_0x2c01d0(0x297)+_0x2c01d0(0x2a8)+'ilter'](),this['_BrightEff'+_0x2c01d0(0x1e9)+_0x2c01d0(0x1d0)+_0x2c01d0(0x212)]);},Game_Screen[_0x47dc13(0x251)][_0x47dc13(0x240)+_0x47dc13(0x1a5)+_0x47dc13(0x1eb)+_0x47dc13(0x308)]=function(_0x1700c4,_0x16a2f5,_0x55535d){var _0x35a026=_0x47dc13,_0x529b9b={'EdqLh':function(_0x232d4a,_0x5c1b4a){return _0x232d4a||_0x5c1b4a;}};SceneManager['isSceneBat'+_0x35a026(0x16d)]()?this[_0x35a026(0x1a9)+'ectsTiltSh'+_0x35a026(0x220)+'sBattle']={'pixelBlur':_0x1700c4,'gradientBlur':_0x16a2f5,'duration':_0x529b9b[_0x35a026(0x2a6)](_0x55535d,-0x7e5+0x7*-0x1+0x7ec)}:this[_0x35a026(0x1a9)+'ectsTiltSh'+'iftSetting'+'sMap']={'pixelBlur':_0x1700c4,'gradientBlur':_0x16a2f5,'duration':_0x529b9b['EdqLh'](_0x55535d,0xc*0x2ab+-0x3*-0x7ca+-0x11*0x342)};},Game_Screen['prototype'][_0x47dc13(0x164)+_0x47dc13(0x1a5)+_0x47dc13(0x1eb)+'ngs']=function(){var _0x45b02c=_0x47dc13,_0xf66960={'zYLoB':function(_0x203297,_0x3e36a5){return _0x203297===_0x3e36a5;}};return SceneManager[_0x45b02c(0x129)+_0x45b02c(0x16d)]()?(_0xf66960[_0x45b02c(0x29b)](this[_0x45b02c(0x1a9)+_0x45b02c(0x282)+_0x45b02c(0x220)+_0x45b02c(0x26c)],undefined)&&$gameTroop[_0x45b02c(0x2e2)+_0x45b02c(0x19f)+_0x45b02c(0x2ce)+_0x45b02c(0x25a)](),this[_0x45b02c(0x1a9)+'ectsTiltSh'+'iftSetting'+'sBattle']):(_0xf66960[_0x45b02c(0x29b)](this[_0x45b02c(0x1a9)+_0x45b02c(0x282)+'iftSetting'+_0x45b02c(0x1ba)],undefined)&&$gameMap[_0x45b02c(0x2e2)+'tEffectsTi'+'ltShiftFil'+_0x45b02c(0x25a)](),this[_0x45b02c(0x1a9)+_0x45b02c(0x282)+'iftSetting'+_0x45b02c(0x1ba)]);},Game_Screen['prototype'][_0x47dc13(0x240)+_0x47dc13(0x211)+_0x47dc13(0x16e)]=function(_0x327374,_0x24e0c7){var _0x26f293=_0x47dc13,_0x203644={'Wikoo':function(_0x11d482,_0x429940){return _0x11d482||_0x429940;},'bbRjx':function(_0x13e39f,_0x515d98){return _0x13e39f||_0x515d98;},'nnVoF':function(_0x274004,_0x2c9cc4){return _0x274004||_0x2c9cc4;}};SceneManager[_0x26f293(0x129)+_0x26f293(0x16d)]()?this[_0x26f293(0x1a9)+_0x26f293(0x22b)+_0x26f293(0x117)+'le']={'blur':_0x203644[_0x26f293(0x2cd)](_0x327374,-0x1909+-0x1*0xfd1+-0x6cf*-0x6),'duration':_0x203644['Wikoo'](_0x24e0c7,-0x3*0xac1+0x746+0x18fd)}:this['_BrightEff'+_0x26f293(0x22b)+_0x26f293(0x279)]={'blur':_0x203644[_0x26f293(0x243)](_0x327374,-0x249e*0x1+-0x267e+0xd1*0x5c),'duration':_0x203644[_0x26f293(0x2d9)](_0x24e0c7,-0x35*0x5c+-0x1249+0x2555)};},Game_Screen[_0x47dc13(0x251)][_0x47dc13(0x164)+'ffectsBlur'+'Settings']=function(){var _0x36b1c3=_0x47dc13,_0x2a483c={'YhttI':function(_0x4d9844,_0x46068c){return _0x4d9844===_0x46068c;},'zhaKA':function(_0xb7c673,_0x4a9d26){return _0xb7c673===_0x4a9d26;}};return SceneManager[_0x36b1c3(0x129)+_0x36b1c3(0x16d)]()?(_0x2a483c[_0x36b1c3(0x272)](this[_0x36b1c3(0x1a9)+_0x36b1c3(0x22b)+'ttingsBatt'+'le'],undefined)&&$gameTroop[_0x36b1c3(0x2e2)+_0x36b1c3(0x309)+'urFilter'](),this[_0x36b1c3(0x1a9)+_0x36b1c3(0x22b)+_0x36b1c3(0x117)+'le']):(_0x2a483c['zhaKA'](this['_BrightEff'+_0x36b1c3(0x22b)+'ttingsMap'],undefined)&&$gameMap['setupBrigh'+_0x36b1c3(0x309)+'urFilter'](),this[_0x36b1c3(0x1a9)+_0x36b1c3(0x22b)+_0x36b1c3(0x279)]);},VisuMZ[_0x47dc13(0x214)+_0x47dc13(0x1fe)]['Scene_Batt'+'le_start']=Scene_Battle['prototype'][_0x47dc13(0x23f)],Scene_Battle['prototype'][_0x47dc13(0x23f)]=function(){var _0x1168b1=_0x47dc13;VisuMZ[_0x1168b1(0x214)+'cts'][_0x1168b1(0x222)+_0x1168b1(0x2e6)][_0x1168b1(0x180)](this),$gameTroop[_0x1168b1(0x2e2)+_0x1168b1(0x15f)+_0x1168b1(0x190)]();},Game_Troop[_0x47dc13(0x251)][_0x47dc13(0x2e2)+'tEffectsFi'+'lters']=function(){var _0x2d2059=_0x47dc13,_0x13d69a={'tMJct':_0x2d2059(0x1c4)},_0x10936e=_0x13d69a[_0x2d2059(0x1d6)]['split']('|'),_0x49c5db=0x1185+-0x1f4a+-0x3*-0x497;while(!![]){switch(_0x10936e[_0x49c5db++]){case'0':this[_0x2d2059(0x2e2)+_0x2d2059(0x297)+'lorAdjustF'+_0x2d2059(0x145)]();continue;case'1':this[_0x2d2059(0x2e2)+'tEffectsGo'+_0x2d2059(0x17b)]();continue;case'2':this['setupBrigh'+_0x2d2059(0x309)+'urFilter']();continue;case'3':this[_0x2d2059(0x2e2)+_0x2d2059(0x19f)+_0x2d2059(0x2ce)+'ter']();continue;case'4':this['setupBrigh'+_0x2d2059(0x126)+_0x2d2059(0x1bc)+'er']();continue;}break;}},Game_Troop[_0x47dc13(0x251)][_0x47dc13(0x2e2)+_0x47dc13(0x126)+_0x47dc13(0x1bc)+'er']=function(){var _0x225d6e=_0x47dc13,_0x25bb8a={'mszUj':function(_0x50f668,_0x5252b2){return _0x50f668(_0x5252b2);}};const _0x1d2b78=VisuMZ['BrightEffe'+_0x225d6e(0x1fe)]['Settings'][_0x225d6e(0x27a)+'m'];var _0x38c014=_0x1d2b78[_0x225d6e(0x2be)],_0x57f089=_0x1d2b78['Brightness'],_0x3d40a7=_0x1d2b78['Threshold'];if(!!this['troop']()){var _0x2327a5=this['troop']()['name'];if(_0x2327a5[_0x225d6e(0x2cb)](/<BLOOM SCALE: (.*)>/i))var _0x38c014=_0x25bb8a[_0x225d6e(0x2f3)](Number,RegExp['$1'])||0x4*0x92f+-0x1b97+-0x925;if(_0x2327a5[_0x225d6e(0x2cb)](/<BLOOM BRIGHTNESS: (.*)>/i))var _0x57f089=_0x25bb8a[_0x225d6e(0x2f3)](Number,RegExp['$1'])||0x18c3+-0x569+-0x2*0x9ad;if(_0x2327a5[_0x225d6e(0x2cb)](/<BLOOM THRESHOLD: (.*)>/i))var _0x3d40a7=_0x25bb8a['mszUj'](Number,RegExp['$1'])||0x1a93+0x77*-0x7+-0x1752;}$gameScreen[_0x225d6e(0x240)+_0x225d6e(0x244)+_0x225d6e(0x12a)+'gs'](_0x38c014,_0x57f089,_0x3d40a7,0x7*0x1b7+0x949+-0x1*0x154a);},Game_Troop['prototype']['setupBrigh'+_0x47dc13(0x245)+'drayFilter']=function(){var _0x21106f=_0x47dc13,_0x5ac4b0={'eZuOp':_0x21106f(0x13e)+'1','gtEJK':function(_0x43c3d,_0x48ed99){return _0x43c3d(_0x48ed99);},'PGIQj':function(_0x951722,_0xd55820){return _0x951722(_0xd55820);}};const _0x58cb3d=VisuMZ[_0x21106f(0x214)+_0x21106f(0x1fe)][_0x21106f(0x16e)][_0x21106f(0x306)+'ay'];var _0x1bed07=_0x58cb3d[_0x21106f(0x19b)],_0x3645ff=_0x58cb3d['Speed'],_0x4ce62c=_0x58cb3d['Gain'],_0x20ccb7=_0x58cb3d[_0x21106f(0x1fc)],_0x860d5a=_0x58cb3d[_0x21106f(0x1c7)];if(!!this['troop']()){var _0x4dbb9c=_0x5ac4b0[_0x21106f(0x137)][_0x21106f(0x23c)]('|'),_0x4262ae=-0x1c1f+0x15fe+0x621*0x1;while(!![]){switch(_0x4dbb9c[_0x4262ae++]){case'0':_0x3c9bb7[_0x21106f(0x2cb)](/<GODRAY GAIN: (.*)>/i)&&(_0x4ce62c=_0x5ac4b0[_0x21106f(0x150)](Number,RegExp['$1'])||0x1c8+-0x737*0x1+-0x1*-0x56f);continue;case'1':_0x3c9bb7[_0x21106f(0x2cb)](/<GODRAY ANGLE: (.*)>/i)&&(_0x860d5a=_0x5ac4b0['PGIQj'](Number,RegExp['$1'])||0xce3+0x293*0x7+-0x1ee8);continue;case'2':if(_0x3c9bb7[_0x21106f(0x2cb)](/<GODRAY>/i))_0x1bed07=!![];else _0x3c9bb7[_0x21106f(0x2cb)](/<NO GODRAY>/i)&&(_0x1bed07=![]);continue;case'3':var _0x3c9bb7=this[_0x21106f(0x134)]()[_0x21106f(0x185)];continue;case'4':_0x3c9bb7[_0x21106f(0x2cb)](/<GODRAY SPEED: (.*)>/i)&&(_0x3645ff=_0x5ac4b0[_0x21106f(0x150)](Number,RegExp['$1'])||-0x10a9+-0xb*-0x295+0x3*-0x3ea);continue;case'5':_0x3c9bb7[_0x21106f(0x2cb)](/<GODRAY LACUNARITY: (.*)>/i)&&(_0x20ccb7=_0x5ac4b0[_0x21106f(0x150)](Number,RegExp['$1'])||-0xcb5*-0x1+-0x1bbd+0x8*0x1e1);continue;}break;}}$gameScreen[_0x21106f(0x240)+_0x21106f(0x1be)+_0x21106f(0x19c)](_0x1bed07,_0x3645ff,_0x4ce62c,_0x20ccb7,_0x860d5a,-0xac6*0x1+0xa1d+0xa9*0x1);},Game_Troop[_0x47dc13(0x251)][_0x47dc13(0x2e2)+'tEffectsCo'+_0x47dc13(0x2a8)+_0x47dc13(0x145)]=function(){var _0x21935b=_0x47dc13,_0x258c2f={'IriOT':function(_0x212db1,_0x1e0163){return _0x212db1(_0x1e0163);},'whwcb':function(_0x2813df,_0x5f39c5){return _0x2813df(_0x5f39c5);}};const _0x502cfa=VisuMZ[_0x21935b(0x214)+_0x21935b(0x1fe)][_0x21935b(0x16e)]['BattleColo'+_0x21935b(0x231)];var _0x33b3b1=_0x502cfa[_0x21935b(0x264)],_0x3d2bdf=_0x502cfa[_0x21935b(0x2ac)],_0x37e1c0=_0x502cfa['Saturate'];if(!!this[_0x21935b(0x134)]()){var _0x3a2dac=this[_0x21935b(0x134)]()['name'];if(_0x3a2dac[_0x21935b(0x2cb)](/<COLOR ADJUST BRIGHTNESS: (.*)>/i))var _0x33b3b1=_0x258c2f['IriOT'](Number,RegExp['$1'])||0xa90*-0x1+-0xabf*-0x2+-0x2*0x577;if(_0x3a2dac[_0x21935b(0x2cb)](/<COLOR ADJUST CONTRAST: (.*)>/i))var _0x3d2bdf=_0x258c2f[_0x21935b(0x158)](Number,RegExp['$1'])||0x2472+0x1d60+-0x41d2;if(_0x3a2dac[_0x21935b(0x2cb)](/<COLOR ADJUST SATURATE: (.*)>/i))var _0x37e1c0=_0x258c2f[_0x21935b(0x2de)](Number,RegExp['$1'])||-0x21fc+0x1f5a+0x2a2;}$gameScreen['setBrightE'+_0x21935b(0x1fa)+_0x21935b(0x168)+_0x21935b(0x2ad)](_0x33b3b1,_0x3d2bdf,_0x37e1c0,-0x1*0x8aa+-0x187f+0x2129);},Game_Troop[_0x47dc13(0x251)][_0x47dc13(0x2e2)+_0x47dc13(0x19f)+'ltShiftFil'+'ter']=function(){var _0x1df903=_0x47dc13,_0x1874e5={'CqSky':function(_0x5c5f9f,_0x51e599){return _0x5c5f9f(_0x51e599);},'BjSBS':function(_0xa30a09,_0x50482c){return _0xa30a09(_0x50482c);}};const _0x16c34c=VisuMZ[_0x1df903(0x214)+_0x1df903(0x1fe)][_0x1df903(0x16e)][_0x1df903(0x2dd)+'Shift'];let _0x5ab779=_0x16c34c['Blur'],_0x47356f=_0x16c34c['GradientBl'+'ur'];if(!!this[_0x1df903(0x134)]()){const _0x6b1d6=this[_0x1df903(0x134)]()[_0x1df903(0x185)];_0x6b1d6[_0x1df903(0x2cb)](/<(?:TILTSHIFT|TILT SHIFT) PIXEL BLUR:[ ](\d+)>/i)&&(_0x5ab779=_0x1874e5[_0x1df903(0x2b4)](Number,RegExp['$1'])),_0x6b1d6['match'](/<(?:TILTSHIFT|TILT SHIFT) (?:GRAD|GRADIENT) BLUR:[ ](\d+)>/i)&&(_0x47356f=_0x1874e5['BjSBS'](Number,RegExp['$1']));}$gameScreen['setBrightE'+_0x1df903(0x1a5)+_0x1df903(0x1eb)+_0x1df903(0x308)](_0x5ab779,_0x47356f,-0xd*-0x2f1+0xb5a+-0x3197);},Game_Troop[_0x47dc13(0x251)][_0x47dc13(0x2e2)+_0x47dc13(0x309)+_0x47dc13(0x2f5)]=function(){var _0x2ce029=_0x47dc13,_0x4a8adb={'aqvzc':function(_0x2d135b,_0x48d68c){return _0x2d135b(_0x48d68c);}};let _0x1f71c7=-0x1eb8+-0x40*-0x35+-0x34*-0x56;if(!!this[_0x2ce029(0x134)]()){const _0x27970d=this['troop']()[_0x2ce029(0x185)];_0x27970d[_0x2ce029(0x2cb)](/<BLUR:[ ](.*?)>/i)&&(_0x1f71c7=_0x4a8adb[_0x2ce029(0x26d)](Number,RegExp['$1']));}$gameScreen['setBrightE'+_0x2ce029(0x211)+_0x2ce029(0x16e)](_0x1f71c7,-0x1*-0x774+0x935*-0x1+-0x1c1*-0x1);},VisuMZ[_0x47dc13(0x214)+_0x47dc13(0x1fe)][_0x47dc13(0x228)+_0x47dc13(0x234)]=Game_Map[_0x47dc13(0x251)][_0x47dc13(0x291)],Game_Map['prototype']['setup']=function(_0x5f2fc1){var _0x526343=_0x47dc13;VisuMZ[_0x526343(0x214)+_0x526343(0x1fe)][_0x526343(0x228)+_0x526343(0x234)][_0x526343(0x180)](this,_0x5f2fc1),!!$dataMap&&this[_0x526343(0x2e2)+_0x526343(0x15f)+_0x526343(0x190)]();},Game_Map[_0x47dc13(0x251)][_0x47dc13(0x2e2)+'tEffectsFi'+_0x47dc13(0x190)]=function(){var _0x4a09fa=_0x47dc13,_0x47a19c={'vDIat':'4|2|0|3|1'},_0x289ab0=_0x47a19c['vDIat'][_0x4a09fa(0x23c)]('|'),_0x440199=0x1aca+0x1458+0x6*-0x7db;while(!![]){switch(_0x289ab0[_0x440199++]){case'0':this[_0x4a09fa(0x2e2)+'tEffectsCo'+'lorAdjustF'+'ilter']();continue;case'1':$gamePlayer[_0x4a09fa(0x188)+'rightEffec'+'ts']();continue;case'2':this[_0x4a09fa(0x2e2)+'tEffectsGo'+_0x4a09fa(0x17b)]();continue;case'3':this[_0x4a09fa(0x2e2)+'tEffectsTi'+'ltShiftFil'+_0x4a09fa(0x25a)]();continue;case'4':this[_0x4a09fa(0x2e2)+_0x4a09fa(0x126)+_0x4a09fa(0x1bc)+'er']();continue;}break;}},Game_Map['prototype'][_0x47dc13(0x2e2)+_0x47dc13(0x126)+'vBloomFilt'+'er']=function(){var _0x1e37c3=_0x47dc13,_0x3b2ddf={'xMIIL':'9|0|5|2|8|'+_0x1e37c3(0x1a0),'SLdWi':function(_0x2557dc,_0x5530a2){return _0x2557dc(_0x5530a2);},'uXUQe':function(_0x3d4aba,_0x5a42a1){return _0x3d4aba(_0x5a42a1);},'pNzAl':function(_0x105cdf,_0x2573e4){return _0x105cdf(_0x2573e4);},'dSkGk':function(_0x55061f,_0x40b2d3){return _0x55061f(_0x40b2d3);},'UbbBC':function(_0x312ff8,_0x27b29a){return _0x312ff8(_0x27b29a);},'ILtlX':function(_0x15c8c1,_0x3fcd0b){return _0x15c8c1(_0x3fcd0b);},'vHbMD':function(_0x3d7a34,_0x1bac20){return _0x3d7a34(_0x1bac20);}};const _0x1b1494=VisuMZ['BrightEffe'+_0x1e37c3(0x1fe)]['Settings'][_0x1e37c3(0x2c0)];var _0x227a43=_0x1b1494['Scale'],_0x4e1de6=_0x1b1494[_0x1e37c3(0x264)],_0x5543d7=_0x1b1494['Threshold'];this[_0x1e37c3(0x132)+_0x1e37c3(0x202)+'orzScale']=undefined,this[_0x1e37c3(0x132)+'ectsBloomV'+'ertScale']=undefined,this[_0x1e37c3(0x132)+'ectsBloomH'+_0x1e37c3(0x25d)+_0x1e37c3(0x1bd)]=undefined,this[_0x1e37c3(0x132)+_0x1e37c3(0x2f8)+_0x1e37c3(0x2a0)+_0x1e37c3(0x1bd)]=undefined,this[_0x1e37c3(0x132)+'ectsBloomH'+'orzThresho'+'ld']=undefined,this['_brightEff'+_0x1e37c3(0x2f8)+_0x1e37c3(0x1f4)+'ld']=undefined;if($dataMap){var _0x1d9d6b=_0x3b2ddf['xMIIL'][_0x1e37c3(0x23c)]('|'),_0x1cf8a7=0x2050+-0x1524+-0xdc*0xd;while(!![]){switch(_0x1d9d6b[_0x1cf8a7++]){case'0':if(_0x2f9cd3[_0x1e37c3(0x2cb)](/<BLOOM SCALE: (.*)>/i))var _0x227a43=_0x3b2ddf[_0x1e37c3(0x303)](Number,RegExp['$1'])||0x6e+0x147+-0x1b5;continue;case'1':_0x2f9cd3[_0x1e37c3(0x2cb)](/<BLOOM (?:VERT|VERTICAL) THRESHOLD: (.*) TO (.*)>/i)&&(this['_brightEff'+_0x1e37c3(0x202)+_0x1e37c3(0x1fd)+'ld']=undefined,this[_0x1e37c3(0x132)+_0x1e37c3(0x2f8)+'ertThresho'+'ld']=[_0x3b2ddf[_0x1e37c3(0x303)](Number,RegExp['$1']),_0x3b2ddf['uXUQe'](Number,RegExp['$2'])]);continue;case'2':if(_0x2f9cd3[_0x1e37c3(0x2cb)](/<BLOOM THRESHOLD: (.*)>/i))var _0x5543d7=_0x3b2ddf['uXUQe'](Number,RegExp['$1'])||-0x808+0x1a05+-0x11fd;continue;case'3':_0x2f9cd3[_0x1e37c3(0x2cb)](/<BLOOM (?:VERT|VERTICAL) BRIGHTNESS: (.*) TO (.*)>/i)&&(this['_brightEff'+_0x1e37c3(0x202)+_0x1e37c3(0x25d)+_0x1e37c3(0x1bd)]=undefined,this['_brightEff'+'ectsBloomV'+'ertBrightn'+_0x1e37c3(0x1bd)]=[_0x3b2ddf[_0x1e37c3(0x2d7)](Number,RegExp['$1']),_0x3b2ddf[_0x1e37c3(0x303)](Number,RegExp['$2'])]);continue;case'4':_0x2f9cd3['match'](/<BLOOM (?:HORZ|HORIZONTAL) THRESHOLD: (.*) TO (.*)>/i)&&(this['_brightEff'+_0x1e37c3(0x202)+_0x1e37c3(0x1fd)+'ld']=[_0x3b2ddf[_0x1e37c3(0x152)](Number,RegExp['$1']),_0x3b2ddf[_0x1e37c3(0x261)](Number,RegExp['$2'])],this[_0x1e37c3(0x132)+'ectsBloomV'+_0x1e37c3(0x1f4)+'ld']=undefined);continue;case'5':if(_0x2f9cd3[_0x1e37c3(0x2cb)](/<BLOOM BRIGHTNESS: (.*)>/i))var _0x4e1de6=_0x3b2ddf[_0x1e37c3(0x1a7)](Number,RegExp['$1'])||0x3*-0xb07+0xf*0x106+0x11bb;continue;case'6':_0x2f9cd3['match'](/<BLOOM (?:VERT|VERTICAL) SCALE: (.*) TO (.*)>/i)&&(this[_0x1e37c3(0x132)+'ectsBloomH'+'orzScale']=undefined,this[_0x1e37c3(0x132)+_0x1e37c3(0x2f8)+_0x1e37c3(0x2d3)]=[_0x3b2ddf[_0x1e37c3(0x21d)](Number,RegExp['$1']),_0x3b2ddf[_0x1e37c3(0x2d7)](Number,RegExp['$2'])]);continue;case'7':_0x2f9cd3['match'](/<BLOOM (?:HORZ|HORIZONTAL) BRIGHTNESS: (.*) TO (.*)>/i)&&(this[_0x1e37c3(0x132)+_0x1e37c3(0x202)+_0x1e37c3(0x25d)+_0x1e37c3(0x1bd)]=[_0x3b2ddf[_0x1e37c3(0x152)](Number,RegExp['$1']),_0x3b2ddf[_0x1e37c3(0x2bc)](Number,RegExp['$2'])],this[_0x1e37c3(0x132)+_0x1e37c3(0x2f8)+'ertBrightn'+_0x1e37c3(0x1bd)]=undefined);continue;case'8':_0x2f9cd3[_0x1e37c3(0x2cb)](/<BLOOM (?:HORZ|HORIZONTAL) SCALE: (.*) TO (.*)>/i)&&(this[_0x1e37c3(0x132)+_0x1e37c3(0x202)+_0x1e37c3(0x24d)]=[_0x3b2ddf['uXUQe'](Number,RegExp['$1']),_0x3b2ddf[_0x1e37c3(0x2bc)](Number,RegExp['$2'])],this['_brightEff'+'ectsBloomV'+'ertScale']=undefined);continue;case'9':var _0x2f9cd3=$dataMap['note']||'';continue;}break;}}$gameScreen['setBrightE'+_0x1e37c3(0x244)+_0x1e37c3(0x12a)+'gs'](_0x227a43,_0x4e1de6,_0x5543d7,0x1066*-0x2+0xf7f*0x2+0x1ce);},Game_Map[_0x47dc13(0x251)][_0x47dc13(0x2e2)+_0x47dc13(0x245)+_0x47dc13(0x17b)]=function(){var _0x152b74=_0x47dc13,_0x48ecee={'HKmBy':_0x152b74(0x13f)+_0x152b74(0x210)+'1|7|8|3|2|'+'5','wQODQ':function(_0x31223d,_0x33b6bf){return _0x31223d(_0x33b6bf);},'ieDDP':function(_0x45f615,_0x25f3b0){return _0x45f615(_0x25f3b0);},'ViJAO':function(_0x25e5c2,_0x403791){return _0x25e5c2(_0x403791);},'IhhVV':function(_0x4c88cd,_0x5c40b1){return _0x4c88cd(_0x5c40b1);},'fptTG':function(_0x290e83,_0x2042ac){return _0x290e83(_0x2042ac);},'VJand':function(_0x12708b,_0x41607b){return _0x12708b(_0x41607b);},'lcyIU':function(_0x4fe199,_0x215a53){return _0x4fe199(_0x215a53);},'wmflp':function(_0x28f5c9,_0x4199f5){return _0x28f5c9(_0x4199f5);}};const _0x433ee7=VisuMZ[_0x152b74(0x214)+_0x152b74(0x1fe)]['Settings'][_0x152b74(0x2b2)];var _0x39a88f=_0x433ee7[_0x152b74(0x19b)],_0x2cdaf1=_0x433ee7[_0x152b74(0x25f)],_0x3045a1=_0x433ee7[_0x152b74(0x2a4)],_0x5a496e=_0x433ee7[_0x152b74(0x1fc)],_0x255788=_0x433ee7[_0x152b74(0x1c7)];this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x255)]=undefined,this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x2d2)]=undefined,this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x215)]=undefined,this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x22a)]=undefined,this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x1f9)+_0x152b74(0x23b)]=undefined,this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x1e5)+_0x152b74(0x23b)]=undefined,this[_0x152b74(0x132)+'ectsGodray'+_0x152b74(0x1b7)]=undefined,this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x29c)]=undefined;if($dataMap){var _0x151a93=_0x48ecee[_0x152b74(0x118)][_0x152b74(0x23c)]('|'),_0x5e97dc=0x571+0x128c*-0x1+0xd1b;while(!![]){switch(_0x151a93[_0x5e97dc++]){case'0':_0x8396c7[_0x152b74(0x2cb)](/<GODRAY (?:VERT|VERTICAL) SPEED: (.*) TO (.*)>/i)&&(this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x255)]=undefined,this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x2d2)]=[_0x48ecee[_0x152b74(0x293)](Number,RegExp['$1']),_0x48ecee[_0x152b74(0x293)](Number,RegExp['$2'])]);continue;case'1':_0x8396c7[_0x152b74(0x2cb)](/<GODRAY ANGLE: (.*)>/i)&&(_0x255788=_0x48ecee[_0x152b74(0x293)](Number,RegExp['$1'])||0x145*-0x1+-0x28*-0x33+0x7*-0xf5);continue;case'2':_0x8396c7[_0x152b74(0x2cb)](/<GODRAY (?:HORZ|HORIZONTAL) ANGLE: (.*) TO (.*)>/i)&&(this['_brightEff'+'ectsGodray'+_0x152b74(0x1b7)]=[_0x48ecee[_0x152b74(0x293)](Number,RegExp['$1']),_0x48ecee[_0x152b74(0x293)](Number,RegExp['$2'])],this['_brightEff'+_0x152b74(0x1b6)+_0x152b74(0x29c)]=undefined);continue;case'3':_0x8396c7['match'](/<GODRAY (?:VERT|VERTICAL) LACUNARITY: (.*) TO (.*)>/i)&&(this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x1f9)+_0x152b74(0x23b)]=undefined,this['_brightEff'+_0x152b74(0x1b6)+_0x152b74(0x1e5)+'rity']=[_0x48ecee['ieDDP'](Number,RegExp['$1']),_0x48ecee[_0x152b74(0x238)](Number,RegExp['$2'])]);continue;case'4':if(_0x8396c7[_0x152b74(0x2cb)](/<GODRAY>/i))_0x39a88f=!![];else _0x8396c7[_0x152b74(0x2cb)](/<NO GODRAY>/i)&&(_0x39a88f=![]);continue;case'5':_0x8396c7[_0x152b74(0x2cb)](/<GODRAY (?:VERT|VERTICAL) ANGLE: (.*) TO (.*)>/i)&&(this['_brightEff'+_0x152b74(0x1b6)+_0x152b74(0x1b7)]=undefined,this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x29c)]=[_0x48ecee[_0x152b74(0x246)](Number,RegExp['$1']),_0x48ecee[_0x152b74(0x256)](Number,RegExp['$2'])]);continue;case'6':_0x8396c7[_0x152b74(0x2cb)](/<GODRAY LACUNARITY: (.*)>/i)&&(_0x5a496e=_0x48ecee[_0x152b74(0x293)](Number,RegExp['$1'])||0x2*-0x4f6+0x212b+-0x173f*0x1);continue;case'7':_0x8396c7['match'](/<GODRAY (?:VERT|VERTICAL) GAIN: (.*) TO (.*)>/i)&&(this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x215)]=undefined,this[_0x152b74(0x132)+_0x152b74(0x1b6)+'VertGain']=[_0x48ecee[_0x152b74(0x246)](Number,RegExp['$1']),_0x48ecee[_0x152b74(0x246)](Number,RegExp['$2'])]);continue;case'8':_0x8396c7[_0x152b74(0x2cb)](/<GODRAY (?:HORZ|HORIZONTAL) LACUNARITY: (.*) TO (.*)>/i)&&(this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x1f9)+_0x152b74(0x23b)]=[_0x48ecee['ViJAO'](Number,RegExp['$1']),_0x48ecee[_0x152b74(0x13c)](Number,RegExp['$2'])],this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x1e5)+_0x152b74(0x23b)]=undefined);continue;case'9':_0x8396c7[_0x152b74(0x2cb)](/<GODRAY SPEED: (.*)>/i)&&(_0x2cdaf1=_0x48ecee[_0x152b74(0x238)](Number,RegExp['$1'])||0x20a1*0x1+0x2*0x5e7+-0x2c6f);continue;case'10':var _0x8396c7=$dataMap[_0x152b74(0x2c5)]||'';continue;case'11':_0x8396c7[_0x152b74(0x2cb)](/<GODRAY (?:HORZ|HORIZONTAL) GAIN: (.*) TO (.*)>/i)&&(this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x215)]=[_0x48ecee[_0x152b74(0x284)](Number,RegExp['$1']),_0x48ecee[_0x152b74(0x13c)](Number,RegExp['$2'])],this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x22a)]=undefined);continue;case'12':_0x8396c7[_0x152b74(0x2cb)](/<GODRAY (?:HORZ|HORIZONTAL) SPEED: (.*) TO (.*)>/i)&&(this[_0x152b74(0x132)+_0x152b74(0x1b6)+_0x152b74(0x255)]=[_0x48ecee['lcyIU'](Number,RegExp['$1']),_0x48ecee['wmflp'](Number,RegExp['$2'])],this['_brightEff'+_0x152b74(0x1b6)+_0x152b74(0x2d2)]=undefined);continue;case'13':_0x8396c7[_0x152b74(0x2cb)](/<GODRAY GAIN: (.*)>/i)&&(_0x3045a1=_0x48ecee[_0x152b74(0x13c)](Number,RegExp['$1'])||0xe41+0x47*0x58+-0x26a9);continue;}break;}}$gameScreen[_0x152b74(0x240)+_0x152b74(0x1be)+'aySettings'](_0x39a88f,_0x2cdaf1,_0x3045a1,_0x5a496e,_0x255788,-0xe80+-0x1ba6*-0x1+0x462*-0x3);},Game_Map[_0x47dc13(0x251)][_0x47dc13(0x2e2)+'tEffectsCo'+_0x47dc13(0x2a8)+_0x47dc13(0x145)]=function(){var _0x20a856=_0x47dc13,_0x212c92={'ZcRmS':'5|2|4|9|7|'+_0x20a856(0x1c9),'CHZUv':function(_0x2ef9d5,_0x1fb339){return _0x2ef9d5(_0x1fb339);},'XblWa':function(_0x18b427,_0x290456){return _0x18b427(_0x290456);},'RkmfJ':function(_0x1d84c4,_0x806b11){return _0x1d84c4(_0x806b11);},'zSzzf':function(_0x23e723,_0x264358){return _0x23e723(_0x264358);},'yhZfH':function(_0x29eaca,_0x13bd63){return _0x29eaca(_0x13bd63);},'DRKlX':function(_0x23b5f4,_0x29ee2a){return _0x23b5f4(_0x29ee2a);},'mbMIk':function(_0x123884,_0xa85561){return _0x123884(_0xa85561);},'dznoF':function(_0x2ff370,_0x373e34){return _0x2ff370(_0x373e34);}};const _0x148349=VisuMZ[_0x20a856(0x214)+_0x20a856(0x1fe)]['Settings'][_0x20a856(0x1f2)+_0x20a856(0x206)];var _0x355780=_0x148349['Brightness'],_0x2fbb35=_0x148349[_0x20a856(0x2ac)],_0x3fc186=_0x148349[_0x20a856(0x2af)];this[_0x20a856(0x132)+_0x20a856(0x1e9)+_0x20a856(0x160)+'rightness']=undefined,this['_brightEff'+_0x20a856(0x1e9)+_0x20a856(0x200)+_0x20a856(0x1e1)]=undefined,this[_0x20a856(0x132)+_0x20a856(0x1e9)+'djustHorzC'+_0x20a856(0x27c)]=undefined,this[_0x20a856(0x132)+_0x20a856(0x1e9)+_0x20a856(0x2b9)+_0x20a856(0x27c)]=undefined,this[_0x20a856(0x132)+_0x20a856(0x1e9)+_0x20a856(0x1e2)+_0x20a856(0x154)]=undefined,this[_0x20a856(0x132)+_0x20a856(0x1e9)+_0x20a856(0x179)+_0x20a856(0x154)]=undefined;if($dataMap){var _0x315761=_0x212c92['ZcRmS'][_0x20a856(0x23c)]('|'),_0x54a839=-0xb0d+0x5de*0x6+-0x2af*0x9;while(!![]){switch(_0x315761[_0x54a839++]){case'0':_0x414726[_0x20a856(0x2cb)](/<COLOR ADJUST (?:VERT|VERTICAL) SATURATE: (.*) TO (.*)>/i)&&(this[_0x20a856(0x132)+_0x20a856(0x1e9)+_0x20a856(0x1e2)+'aturate']=undefined,this[_0x20a856(0x132)+_0x20a856(0x1e9)+_0x20a856(0x179)+_0x20a856(0x154)]=[_0x212c92[_0x20a856(0x29f)](Number,RegExp['$1']),_0x212c92[_0x20a856(0x29f)](Number,RegExp['$2'])]);continue;case'1':_0x414726[_0x20a856(0x2cb)](/<COLOR ADJUST (?:HORZ|HORIZONTAL) SATURATE: (.*) TO (.*)>/i)&&(this['_brightEff'+_0x20a856(0x1e9)+'djustHorzS'+'aturate']=[_0x212c92[_0x20a856(0x2ab)](Number,RegExp['$1']),_0x212c92['RkmfJ'](Number,RegExp['$2'])],this['_brightEff'+_0x20a856(0x1e9)+_0x20a856(0x179)+'aturate']=undefined);continue;case'2':if(_0x414726[_0x20a856(0x2cb)](/<COLOR ADJUST BRIGHTNESS: (.*)>/i))var _0x355780=_0x212c92['zSzzf'](Number,RegExp['$1'])||0x12a7*0x2+0x92d+0x1*-0x2e7b;continue;case'3':_0x414726['match'](/<COLOR ADJUST (?:VERT|VERTICAL) CONTRAST: (.*) TO (.*)>/i)&&(this[_0x20a856(0x132)+_0x20a856(0x1e9)+_0x20a856(0x1df)+_0x20a856(0x27c)]=undefined,this['_brightEff'+'ectsColorA'+_0x20a856(0x2b9)+'ontrast']=[_0x212c92[_0x20a856(0x18f)](Number,RegExp['$1']),_0x212c92[_0x20a856(0x175)](Number,RegExp['$2'])]);continue;case'4':if(_0x414726[_0x20a856(0x2cb)](/<COLOR ADJUST CONTRAST: (.*)>/i))var _0x2fbb35=_0x212c92[_0x20a856(0x175)](Number,RegExp['$1'])||-0x48f*0x4+-0x3c1*-0x2+0xaba;continue;case'5':var _0x414726=$dataMap['note']||'';continue;case'6':_0x414726[_0x20a856(0x2cb)](/<COLOR ADJUST (?:HORZ|HORIZONTAL) CONTRAST: (.*) TO (.*)>/i)&&(this[_0x20a856(0x132)+'ectsColorA'+_0x20a856(0x1df)+_0x20a856(0x27c)]=[_0x212c92[_0x20a856(0x29f)](Number,RegExp['$1']),_0x212c92['zSzzf'](Number,RegExp['$2'])],this[_0x20a856(0x132)+_0x20a856(0x1e9)+'djustVertC'+_0x20a856(0x27c)]=undefined);continue;case'7':_0x414726['match'](/<COLOR ADJUST (?:HORZ|HORIZONTAL) BRIGHTNESS: (.*) TO (.*)>/i)&&(this['_brightEff'+'ectsColorA'+_0x20a856(0x160)+_0x20a856(0x1e1)]=[_0x212c92[_0x20a856(0x299)](Number,RegExp['$1']),_0x212c92[_0x20a856(0x18f)](Number,RegExp['$2'])],this[_0x20a856(0x132)+_0x20a856(0x1e9)+_0x20a856(0x200)+_0x20a856(0x1e1)]=undefined);continue;case'8':_0x414726[_0x20a856(0x2cb)](/<COLOR ADJUST (?:VERT|VERTICAL) BRIGHTNESS: (.*) TO (.*)>/i)&&(this[_0x20a856(0x132)+'ectsColorA'+_0x20a856(0x160)+_0x20a856(0x1e1)]=undefined,this[_0x20a856(0x132)+_0x20a856(0x1e9)+_0x20a856(0x200)+_0x20a856(0x1e1)]=[_0x212c92[_0x20a856(0x18b)](Number,RegExp['$1']),_0x212c92[_0x20a856(0x175)](Number,RegExp['$2'])]);continue;case'9':if(_0x414726[_0x20a856(0x2cb)](/<COLOR ADJUST SATURATE: (.*)>/i))var _0x3fc186=_0x212c92[_0x20a856(0x28f)](Number,RegExp['$1'])||0x6e*0x7+0x1*0x1331+0x1633*-0x1;continue;}break;}}$gameScreen[_0x20a856(0x240)+_0x20a856(0x1fa)+_0x20a856(0x168)+_0x20a856(0x2ad)](_0x355780,_0x2fbb35,_0x3fc186,0x19cd+-0x1*0x1b65+-0x66*-0x4);},Game_Map[_0x47dc13(0x251)][_0x47dc13(0x2e2)+_0x47dc13(0x19f)+_0x47dc13(0x2ce)+_0x47dc13(0x25a)]=function(){var _0x30f0fc=_0x47dc13,_0x5adfa3={'JanxM':function(_0x3b5978,_0x1b6d53){return _0x3b5978(_0x1b6d53);},'JqzGT':function(_0x468046,_0x3f6852){return _0x468046(_0x3f6852);}};const _0x45fb7e=VisuMZ['BrightEffe'+'cts']['Settings'][_0x30f0fc(0x28c)+'ft'];let _0x3df6e9=_0x45fb7e['Blur'],_0xa5e16a=_0x45fb7e['GradientBl'+'ur'];if($dataMap){const _0x4f9d15=$dataMap[_0x30f0fc(0x2c5)]||'';_0x4f9d15[_0x30f0fc(0x2cb)](/<(?:TILTSHIFT|TILT SHIFT) PIXEL BLUR:[ ](\d+)>/i)&&(_0x3df6e9=_0x5adfa3[_0x30f0fc(0x2bf)](Number,RegExp['$1'])),_0x4f9d15[_0x30f0fc(0x2cb)](/<(?:TILTSHIFT|TILT SHIFT) (?:GRAD|GRADIENT) BLUR:[ ](\d+)>/i)&&(_0xa5e16a=_0x5adfa3[_0x30f0fc(0x2ca)](Number,RegExp['$1']));}$gameScreen[_0x30f0fc(0x240)+_0x30f0fc(0x1a5)+'ShiftSetti'+_0x30f0fc(0x308)](_0x3df6e9,_0xa5e16a,-0xccf*-0x2+-0x11ff+-0x79f);},Game_Map[_0x47dc13(0x251)][_0x47dc13(0x2e2)+_0x47dc13(0x309)+'urFilter']=function(){var _0x6ce9c4=_0x47dc13,_0x4ec695={'QxNYc':function(_0x3f0109,_0x395ee0){return _0x3f0109(_0x395ee0);}};let _0x3bf203=0x4d4+-0x656+0x182;if($dataMap){const _0x5062b4=$dataMap[_0x6ce9c4(0x2c5)]||'';_0x5062b4[_0x6ce9c4(0x2cb)](/<BLUR:[ ](.*?)>/i)&&(_0x3bf203=_0x4ec695['QxNYc'](Number,RegExp['$1']));}$gameScreen[_0x6ce9c4(0x240)+_0x6ce9c4(0x211)+_0x6ce9c4(0x16e)](_0x3bf203,-0x4*0x303+0x4e3+0x729);},VisuMZ[_0x47dc13(0x214)+'cts'][_0x47dc13(0x2ba)+'cterBase_l'+'ocate']=Game_CharacterBase[_0x47dc13(0x251)][_0x47dc13(0x15a)],Game_CharacterBase[_0x47dc13(0x251)]['locate']=function(_0x44b2e6,_0x73431b){var _0x57ccfa=_0x47dc13,_0x4c2f64={'tmBih':function(_0x5e41b1,_0x3481f6){return _0x5e41b1===_0x3481f6;}};VisuMZ[_0x57ccfa(0x214)+_0x57ccfa(0x1fe)]['Game_Chara'+_0x57ccfa(0x1cc)+_0x57ccfa(0x1fb)][_0x57ccfa(0x180)](this,_0x44b2e6,_0x73431b),_0x4c2f64['tmBih'](this,$gamePlayer)&&this[_0x57ccfa(0x188)+_0x57ccfa(0x151)+'ts']();},VisuMZ[_0x47dc13(0x214)+_0x47dc13(0x1fe)][_0x47dc13(0x208)+_0x47dc13(0x16a)]=Game_Player[_0x47dc13(0x251)][_0x47dc13(0x286)],Game_Player[_0x47dc13(0x251)][_0x47dc13(0x286)]=function(_0x5da7b7){var _0x50bf8b=_0x47dc13;VisuMZ['BrightEffe'+_0x50bf8b(0x1fe)][_0x50bf8b(0x208)+_0x50bf8b(0x16a)]['call'](this,_0x5da7b7),this[_0x50bf8b(0x188)+_0x50bf8b(0x151)+'ts']();},Game_Player[_0x47dc13(0x251)][_0x47dc13(0x188)+'rightEffec'+'ts']=function(){var _0xb9eae4=_0x47dc13,_0x533be1={'YqiTH':function(_0x42adf6,_0x4947a6){return _0x42adf6===_0x4947a6;}};if(_0x533be1['YqiTH'](ConfigManager[_0xb9eae4(0x24b)+_0xb9eae4(0x237)],![]))return;this['updateMapB'+_0xb9eae4(0x151)+_0xb9eae4(0x116)](),this[_0xb9eae4(0x188)+_0xb9eae4(0x151)+'tsGodray'](),this[_0xb9eae4(0x188)+_0xb9eae4(0x151)+_0xb9eae4(0x15b)+_0xb9eae4(0x226)]();},Game_Player[_0x47dc13(0x251)]['updateMapB'+'rightEffec'+_0x47dc13(0x116)]=function(){var _0x10324d=_0x47dc13,_0x16e01a={'srBLS':_0x10324d(0x172)+_0x10324d(0x14d),'tMUxz':function(_0x49fdfa,_0x1e05f2){return _0x49fdfa!==_0x1e05f2;},'nmQSH':function(_0x238eaa,_0x39102d){return _0x238eaa-_0x39102d;},'YgwvO':function(_0x2a1c2b,_0x3e881e){return _0x2a1c2b/_0x3e881e;},'IOeWZ':function(_0x1416ed,_0x4dd3ef){return _0x1416ed+_0x4dd3ef;},'PtJvD':function(_0x5cc164,_0x12d3e4){return _0x5cc164*_0x12d3e4;},'tOwRc':function(_0x483b60,_0x4d0c8b){return _0x483b60!==_0x4d0c8b;},'LHAtP':function(_0x408662,_0x4cb7f0){return _0x408662-_0x4cb7f0;},'NaPUt':function(_0xa5babc,_0x26a36b){return _0xa5babc/_0x26a36b;},'VWXoB':function(_0x2265e7,_0x33d48e){return _0x2265e7!==_0x33d48e;},'zQSpk':function(_0x4e377c,_0x412608){return _0x4e377c*_0x412608;},'hysZT':function(_0x34ceb8,_0x212213){return _0x34ceb8!==_0x212213;},'UuWUs':function(_0x42f65e,_0x261001){return _0x42f65e-_0x261001;},'fKLoq':function(_0x463263,_0x4391ef){return _0x463263/_0x4391ef;},'AIILL':function(_0x453210,_0x302f05){return _0x453210*_0x302f05;},'tUzvU':function(_0x5e8f01,_0x5961a6){return _0x5e8f01-_0x5961a6;},'lzcaI':function(_0x53aaba,_0x78a413){return _0x53aaba/_0x78a413;},'ZxsMX':function(_0x1f6087,_0x3cdcf5){return _0x1f6087+_0x3cdcf5;},'tkEVE':function(_0x178124,_0x5aa72e){return _0x178124!==_0x5aa72e;},'dSTZM':function(_0x2d1180,_0xee0736){return _0x2d1180+_0xee0736;}},_0x250010=_0x16e01a[_0x10324d(0x1ea)][_0x10324d(0x23c)]('|'),_0x4952cc=0x4b2+-0x2*0x44f+0x3ec;while(!![]){switch(_0x250010[_0x4952cc++]){case'0':if(_0x16e01a[_0x10324d(0x21f)]($gameMap[_0x10324d(0x132)+_0x10324d(0x202)+_0x10324d(0x1fd)+'ld'],undefined))var _0x274f28=$gameMap[_0x10324d(0x132)+_0x10324d(0x202)+'orzThresho'+'ld'][0x262b+-0x9*-0x16b+0x6a*-0x7b],_0x72d7df=_0x16e01a[_0x10324d(0x2c4)]($gameMap[_0x10324d(0x132)+_0x10324d(0x202)+_0x10324d(0x1fd)+'ld'][0xd20+0x15*-0x1b7+0x2*0xb72],_0x274f28),_0x560216=_0x16e01a[_0x10324d(0x11f)]($gamePlayer[_0x10324d(0x2c3)],$gameMap['width']()),_0x52b923=_0x16e01a[_0x10324d(0x2e5)](_0x274f28,_0x16e01a[_0x10324d(0x135)](_0x72d7df,_0x560216));else{if(_0x16e01a['tOwRc']($gameMap[_0x10324d(0x132)+'ectsBloomV'+_0x10324d(0x1f4)+'ld'],undefined))var _0x274f28=$gameMap[_0x10324d(0x132)+_0x10324d(0x2f8)+_0x10324d(0x1f4)+'ld'][-0x1358+-0x1*0x17cc+0x16*0x1f6],_0x72d7df=_0x16e01a[_0x10324d(0x2d6)]($gameMap[_0x10324d(0x132)+'ectsBloomV'+_0x10324d(0x1f4)+'ld'][0x1*-0x13eb+-0x19d5+-0x385*-0xd],_0x274f28),_0x560216=_0x16e01a[_0x10324d(0x1da)]($gamePlayer['_realY'],$gameMap[_0x10324d(0x1e0)]()),_0x52b923=_0x16e01a['IOeWZ'](_0x274f28,_0x16e01a['PtJvD'](_0x72d7df,_0x560216));}continue;case'1':if(_0x16e01a[_0x10324d(0x1e3)]($gameMap[_0x10324d(0x132)+'ectsBloomH'+_0x10324d(0x24d)],undefined))var _0x274f28=$gameMap[_0x10324d(0x132)+'ectsBloomH'+'orzScale'][-0x12e5+0x1b2b+-0x846],_0x72d7df=_0x16e01a[_0x10324d(0x2d6)]($gameMap[_0x10324d(0x132)+'ectsBloomH'+'orzScale'][-0x21e9*0x1+0x2454+-0x26a],_0x274f28),_0x560216=_0x16e01a[_0x10324d(0x1da)]($gamePlayer['_realX'],$gameMap[_0x10324d(0x1bb)]()),_0xae151e=_0x16e01a[_0x10324d(0x2e5)](_0x274f28,_0x16e01a[_0x10324d(0x12e)](_0x72d7df,_0x560216));else{if(_0x16e01a[_0x10324d(0x13b)]($gameMap[_0x10324d(0x132)+_0x10324d(0x2f8)+_0x10324d(0x2d3)],undefined))var _0x274f28=$gameMap[_0x10324d(0x132)+_0x10324d(0x2f8)+_0x10324d(0x2d3)][0x61b*-0x3+-0x1497+0x1*0x26e8],_0x72d7df=_0x16e01a[_0x10324d(0x1c3)]($gameMap['_brightEff'+'ectsBloomV'+_0x10324d(0x2d3)][-0xdb*-0x11+0xf24+-0x1dae],_0x274f28),_0x560216=_0x16e01a[_0x10324d(0x2e3)]($gamePlayer[_0x10324d(0x2ef)],$gameMap[_0x10324d(0x1e0)]()),_0xae151e=_0x16e01a[_0x10324d(0x2e5)](_0x274f28,_0x16e01a[_0x10324d(0x121)](_0x72d7df,_0x560216));}continue;case'2':$gameScreen['setBrightE'+'ffectsAdvB'+_0x10324d(0x12a)+'gs'](_0xae151e,_0x3df647,_0x52b923,_0x5f6655[_0x10324d(0x239)]);continue;case'3':if(_0x16e01a[_0x10324d(0x2db)]($gameMap['_brightEff'+_0x10324d(0x202)+_0x10324d(0x25d)+_0x10324d(0x1bd)],undefined))var _0x274f28=$gameMap[_0x10324d(0x132)+_0x10324d(0x202)+_0x10324d(0x25d)+_0x10324d(0x1bd)][0x38f+-0xf5f+0xbd0],_0x72d7df=_0x16e01a[_0x10324d(0x1d1)]($gameMap[_0x10324d(0x132)+_0x10324d(0x202)+_0x10324d(0x25d)+_0x10324d(0x1bd)][-0x22c1+-0x133c+0x35fe],_0x274f28),_0x560216=_0x16e01a[_0x10324d(0x20c)]($gamePlayer[_0x10324d(0x2c3)],$gameMap[_0x10324d(0x1bb)]()),_0x3df647=_0x16e01a[_0x10324d(0x294)](_0x274f28,_0x16e01a[_0x10324d(0x135)](_0x72d7df,_0x560216));else{if(_0x16e01a[_0x10324d(0x29a)]($gameMap[_0x10324d(0x132)+'ectsBloomV'+'ertBrightn'+_0x10324d(0x1bd)],undefined))var _0x274f28=$gameMap[_0x10324d(0x132)+_0x10324d(0x2f8)+_0x10324d(0x2a0)+'ess'][-0x270b+0x1*-0xf40+0x364b],_0x72d7df=_0x16e01a['nmQSH']($gameMap[_0x10324d(0x132)+_0x10324d(0x2f8)+'ertBrightn'+'ess'][0x25f1*-0x1+0x1383+0x27*0x79],_0x274f28),_0x560216=_0x16e01a[_0x10324d(0x11f)]($gamePlayer[_0x10324d(0x2ef)],$gameMap[_0x10324d(0x1e0)]()),_0x3df647=_0x16e01a[_0x10324d(0x144)](_0x274f28,_0x16e01a['AIILL'](_0x72d7df,_0x560216));}continue;case'4':var _0x5f6655=$gameScreen[_0x10324d(0x164)+_0x10324d(0x244)+_0x10324d(0x12a)+'gs']();continue;case'5':var _0x3df647=_0x5f6655[_0x10324d(0x2e9)];continue;case'6':var _0x52b923=_0x5f6655['threshold'];continue;case'7':var _0xae151e=_0x5f6655['bloomScale'];continue;}break;}},Game_Player[_0x47dc13(0x251)]['updateMapB'+_0x47dc13(0x151)+_0x47dc13(0x16f)]=function(){var _0x5278b3=_0x47dc13,_0x460845={'CjQpd':_0x5278b3(0x1ae)+'9|7|10|5|2'+'|8','OWtqN':function(_0x37388b,_0x2422c3){return _0x37388b!==_0x2422c3;},'bmrLS':function(_0x4b2ea7,_0x5a5d5e){return _0x4b2ea7-_0x5a5d5e;},'xqAxz':function(_0x16abac,_0xe28aee){return _0x16abac/_0xe28aee;},'JCLdT':function(_0x3fd9d0,_0xf975fc){return _0x3fd9d0+_0xf975fc;},'kNBpA':function(_0x5874d8,_0x422197){return _0x5874d8*_0x422197;},'qrGnN':function(_0x22ee5f,_0x142e30){return _0x22ee5f/_0x142e30;},'LmXgj':function(_0x8fe643,_0x3aa992){return _0x8fe643+_0x3aa992;},'piBvu':function(_0x4635e0,_0x420761){return _0x4635e0!==_0x420761;},'mHZcr':function(_0x295035,_0x113d84){return _0x295035-_0x113d84;},'hPNXb':function(_0x565529,_0x5e39fc){return _0x565529+_0x5e39fc;},'iKyqm':function(_0x5da93c,_0x1ecf66){return _0x5da93c+_0x1ecf66;},'qFzGD':function(_0x325aa2,_0x130b22){return _0x325aa2!==_0x130b22;},'Lhovz':function(_0x4a2ece,_0x39b350){return _0x4a2ece-_0x39b350;},'sqPpi':function(_0x21bbf8,_0x229c5d){return _0x21bbf8/_0x229c5d;},'lJtNv':function(_0x31cf0f,_0x4a80f0){return _0x31cf0f*_0x4a80f0;},'aqYtI':function(_0x8d2f05,_0x20789b){return _0x8d2f05!==_0x20789b;},'EEIJu':function(_0x3a0f73,_0x50b6c3){return _0x3a0f73-_0x50b6c3;},'GrfbN':function(_0x2a5450,_0x3e63eb){return _0x2a5450!==_0x3e63eb;},'iPLcn':function(_0x91157f,_0x3f1bca){return _0x91157f-_0x3f1bca;},'yYOnc':function(_0x3b51b6,_0x2e166d){return _0x3b51b6/_0x2e166d;},'INUhZ':function(_0x8a4d76,_0x561f3e){return _0x8a4d76+_0x561f3e;},'QNsXN':function(_0x526be4,_0x2361c2){return _0x526be4*_0x2361c2;}},_0x56302b=_0x460845[_0x5278b3(0x221)][_0x5278b3(0x23c)]('|'),_0x3dc296=0x1336+0x2*-0xafd+0x2c4*0x1;while(!![]){switch(_0x56302b[_0x3dc296++]){case'0':var _0x32f31f=_0x8f9841[_0x5278b3(0x19d)];continue;case'1':var _0xa3ca81=_0x8f9841[_0x5278b3(0x23d)];continue;case'2':if(_0x460845[_0x5278b3(0x2ee)]($gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+_0x5278b3(0x1b7)],undefined))var _0x5e45e2=$gameMap[_0x5278b3(0x132)+'ectsGodray'+_0x5278b3(0x1b7)][0xa5c+-0x52f*-0x7+0x1*-0x2ea5],_0x436114=_0x460845['bmrLS']($gameMap['_brightEff'+_0x5278b3(0x1b6)+_0x5278b3(0x1b7)][0x151b+0xe6b+-0x2385],_0x5e45e2),_0x2e59ab=_0x460845[_0x5278b3(0x195)]($gamePlayer['_realX'],$gameMap['width']()),_0x164ecf=_0x460845['JCLdT'](_0x5e45e2,_0x460845[_0x5278b3(0x197)](_0x436114,_0x2e59ab));else{if(_0x460845[_0x5278b3(0x2ee)]($gameMap['_brightEff'+_0x5278b3(0x1b6)+'VertAngle'],undefined))var _0x5e45e2=$gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+_0x5278b3(0x29c)][-0x1667+-0x1c1f*-0x1+-0x5b8],_0x436114=_0x460845['bmrLS']($gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+_0x5278b3(0x29c)][-0x84*0xe+-0x2180+0xd93*0x3],_0x5e45e2),_0x2e59ab=_0x460845[_0x5278b3(0x195)]($gamePlayer['_realY'],$gameMap[_0x5278b3(0x1e0)]()),_0x164ecf=_0x460845['JCLdT'](_0x5e45e2,_0x460845[_0x5278b3(0x197)](_0x436114,_0x2e59ab));}continue;case'3':var _0x3d30cb=_0x8f9841[_0x5278b3(0x2b7)];continue;case'4':var _0x8f9841=$gameScreen[_0x5278b3(0x164)+'ffectsGodr'+_0x5278b3(0x19c)]();continue;case'5':if(_0x460845[_0x5278b3(0x2ee)]($gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+_0x5278b3(0x1f9)+_0x5278b3(0x23b)],undefined))var _0x5e45e2=$gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+'HorzLacuna'+_0x5278b3(0x23b)][0x736+0x25*0x103+-0x40f*0xb],_0x436114=_0x460845[_0x5278b3(0x162)]($gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+_0x5278b3(0x1f9)+'rity'][0x43*-0x93+0x1215*0x1+0x1465],_0x5e45e2),_0x2e59ab=_0x460845['qrGnN']($gamePlayer[_0x5278b3(0x2c3)],$gameMap[_0x5278b3(0x1bb)]()),_0x32f31f=_0x460845['LmXgj'](_0x5e45e2,_0x460845['kNBpA'](_0x436114,_0x2e59ab));else{if(_0x460845[_0x5278b3(0x16c)]($gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+_0x5278b3(0x1e5)+_0x5278b3(0x23b)],undefined))var _0x5e45e2=$gameMap[_0x5278b3(0x132)+'ectsGodray'+_0x5278b3(0x1e5)+_0x5278b3(0x23b)][-0x813*-0x1+0x25*-0x5f+0x8*0xb5],_0x436114=_0x460845[_0x5278b3(0x267)]($gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+_0x5278b3(0x1e5)+_0x5278b3(0x23b)][0xec8+-0x1*-0x157a+-0x1*0x2441],_0x5e45e2),_0x2e59ab=_0x460845['xqAxz']($gamePlayer[_0x5278b3(0x2ef)],$gameMap[_0x5278b3(0x1e0)]()),_0x32f31f=_0x460845['hPNXb'](_0x5e45e2,_0x460845[_0x5278b3(0x197)](_0x436114,_0x2e59ab));}continue;case'6':var _0x1836bb=_0x8f9841[_0x5278b3(0x136)];continue;case'7':if(_0x460845[_0x5278b3(0x2ee)]($gameMap[_0x5278b3(0x132)+'ectsGodray'+_0x5278b3(0x255)],undefined))var _0x5e45e2=$gameMap['_brightEff'+_0x5278b3(0x1b6)+_0x5278b3(0x255)][-0x1866+0xa54+0x709*0x2],_0x436114=_0x460845[_0x5278b3(0x267)]($gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+_0x5278b3(0x255)][0x10*0x1e1+-0x204d*0x1+-0x11f*-0x2],_0x5e45e2),_0x2e59ab=_0x460845[_0x5278b3(0x23a)]($gamePlayer[_0x5278b3(0x2c3)],$gameMap[_0x5278b3(0x1bb)]()),_0xa3ca81=_0x460845[_0x5278b3(0x1f7)](_0x5e45e2,_0x460845[_0x5278b3(0x197)](_0x436114,_0x2e59ab));else{if(_0x460845[_0x5278b3(0x290)]($gameMap[_0x5278b3(0x132)+'ectsBloomV'+'ertScale'],undefined))var _0x5e45e2=$gameMap[_0x5278b3(0x132)+'ectsGodray'+'VertSpeed'][0x17c*-0xf+0x20dd*0x1+-0xa99],_0x436114=_0x460845[_0x5278b3(0x2c7)]($gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+_0x5278b3(0x2d2)][-0x1a6c+0xd9*0x9+-0x2*-0x966],_0x5e45e2),_0x2e59ab=_0x460845['sqPpi']($gamePlayer['_realY'],$gameMap[_0x5278b3(0x1e0)]()),_0xa3ca81=_0x460845[_0x5278b3(0x1f7)](_0x5e45e2,_0x460845[_0x5278b3(0x171)](_0x436114,_0x2e59ab));}continue;case'8':$gameScreen[_0x5278b3(0x240)+_0x5278b3(0x1be)+_0x5278b3(0x19c)](_0x3d30cb,_0xa3ca81,_0x1836bb,_0x32f31f,_0x164ecf,_0x8f9841[_0x5278b3(0x239)]);continue;case'9':var _0x164ecf=_0x8f9841['angle'];continue;case'10':if(_0x460845['aqYtI']($gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+_0x5278b3(0x215)],undefined))var _0x5e45e2=$gameMap['_brightEff'+_0x5278b3(0x1b6)+_0x5278b3(0x215)][-0x9d2*0x3+-0x1fb+0x1f71],_0x436114=_0x460845[_0x5278b3(0x2fb)]($gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+_0x5278b3(0x215)][-0x21c8+0x1d41+-0x3a*-0x14],_0x5e45e2),_0x2e59ab=_0x460845[_0x5278b3(0x23a)]($gamePlayer['_realX'],$gameMap[_0x5278b3(0x1bb)]()),_0x1836bb=_0x460845[_0x5278b3(0x1f7)](_0x5e45e2,_0x460845[_0x5278b3(0x197)](_0x436114,_0x2e59ab));else{if(_0x460845[_0x5278b3(0x232)]($gameMap['_brightEff'+_0x5278b3(0x1b6)+'VertGain'],undefined))var _0x5e45e2=$gameMap['_brightEff'+_0x5278b3(0x1b6)+_0x5278b3(0x22a)][-0x1c1*0x11+0x71*-0x56+0x43c7],_0x436114=_0x460845['iPLcn']($gameMap[_0x5278b3(0x132)+_0x5278b3(0x1b6)+_0x5278b3(0x22a)][-0x1*-0x4b7+0x1d8*-0x3+0x46*0x3],_0x5e45e2),_0x2e59ab=_0x460845[_0x5278b3(0x213)]($gamePlayer[_0x5278b3(0x2ef)],$gameMap['height']()),_0x1836bb=_0x460845[_0x5278b3(0x1e4)](_0x5e45e2,_0x460845[_0x5278b3(0x2b0)](_0x436114,_0x2e59ab));}continue;}break;}},Game_Player[_0x47dc13(0x251)][_0x47dc13(0x188)+_0x47dc13(0x151)+_0x47dc13(0x15b)+_0x47dc13(0x226)]=function(){var _0x140a7d=_0x47dc13,_0x553c50={'gDFHG':_0x140a7d(0x2c9)+_0x140a7d(0x19e),'ClYLL':function(_0x16d45c,_0x59500d){return _0x16d45c!==_0x59500d;},'lODzL':function(_0xe7c27,_0xe708c){return _0xe7c27-_0xe708c;},'LwTgw':function(_0x4cc1a7,_0x1a72b9){return _0x4cc1a7/_0x1a72b9;},'rUltB':function(_0x5c981b,_0x3f76e0){return _0x5c981b+_0x3f76e0;},'dsEMx':function(_0x1cbcc1,_0x305d75){return _0x1cbcc1*_0x305d75;},'LFVMN':function(_0xf1171e,_0x2932d4){return _0xf1171e!==_0x2932d4;},'oRzQf':function(_0x4d8019,_0x497ea3){return _0x4d8019/_0x497ea3;},'FiTvq':function(_0x3c6e18,_0x3a4666){return _0x3c6e18!==_0x3a4666;},'pdUgM':function(_0x38585b,_0x37fa37){return _0x38585b-_0x37fa37;},'NOWDb':function(_0x5ade1f,_0x330b4f){return _0x5ade1f/_0x330b4f;},'ANVum':function(_0x491ad9,_0x169dd6){return _0x491ad9*_0x169dd6;},'YiqfX':function(_0x3b71b9,_0x305e75){return _0x3b71b9!==_0x305e75;},'fblNO':function(_0x14aea2,_0x218b1a){return _0x14aea2/_0x218b1a;},'rVsfo':function(_0xa04b23,_0x2df0d6){return _0xa04b23!==_0x2df0d6;},'UWgtc':function(_0x26b45c,_0x3d9954){return _0x26b45c/_0x3d9954;}},_0x5a77df=_0x553c50['gDFHG'][_0x140a7d(0x23c)]('|'),_0x34edba=-0x1*0x6a+0x1*0x1233+-0x1d*0x9d;while(!![]){switch(_0x5a77df[_0x34edba++]){case'0':var _0x15775d=_0x124613[_0x140a7d(0x252)];continue;case'1':var _0x467da9=_0x124613[_0x140a7d(0x2e9)];continue;case'2':var _0x124613=$gameScreen['getBrightE'+_0x140a7d(0x1fa)+_0x140a7d(0x168)+_0x140a7d(0x2ad)]();continue;case'3':if(_0x553c50[_0x140a7d(0x1f0)]($gameMap['_brightEff'+_0x140a7d(0x1e9)+'djustHorzB'+_0x140a7d(0x1e1)],undefined))var _0xbc95f6=$gameMap['_brightEff'+_0x140a7d(0x1e9)+_0x140a7d(0x160)+_0x140a7d(0x1e1)][0x8f*-0x33+0x1f38+-0x2bb],_0x1e5717=_0x553c50['lODzL']($gameMap[_0x140a7d(0x132)+'ectsColorA'+'djustHorzB'+_0x140a7d(0x1e1)][-0xfdb*0x1+-0x2419*-0x1+-0x143d],_0xbc95f6),_0x97258c=_0x553c50[_0x140a7d(0x24f)]($gamePlayer['_realX'],$gameMap[_0x140a7d(0x1bb)]()),_0x467da9=_0x553c50[_0x140a7d(0x288)](_0xbc95f6,_0x553c50['dsEMx'](_0x1e5717,_0x97258c));else{if(_0x553c50[_0x140a7d(0x247)]($gameMap[_0x140a7d(0x132)+_0x140a7d(0x1e9)+_0x140a7d(0x200)+_0x140a7d(0x1e1)],undefined))var _0xbc95f6=$gameMap['_brightEff'+_0x140a7d(0x1e9)+_0x140a7d(0x200)+_0x140a7d(0x1e1)][0x35*0x23+-0x20d1+0x1992],_0x1e5717=_0x553c50['lODzL']($gameMap[_0x140a7d(0x132)+_0x140a7d(0x1e9)+'djustVertB'+'rightness'][-0x12d9+-0x1*0x2695+0x1325*0x3],_0xbc95f6),_0x97258c=_0x553c50['oRzQf']($gamePlayer[_0x140a7d(0x2ef)],$gameMap[_0x140a7d(0x1e0)]()),_0x467da9=_0x553c50[_0x140a7d(0x288)](_0xbc95f6,_0x553c50[_0x140a7d(0x186)](_0x1e5717,_0x97258c));}continue;case'4':var _0x49abc9=_0x124613[_0x140a7d(0x285)];continue;case'5':if(_0x553c50['FiTvq']($gameMap[_0x140a7d(0x132)+_0x140a7d(0x1e9)+'djustHorzC'+_0x140a7d(0x27c)],undefined))var _0xbc95f6=$gameMap[_0x140a7d(0x132)+'ectsColorA'+_0x140a7d(0x1df)+_0x140a7d(0x27c)][-0x14da*0x1+0x15d7+-0x17*0xb],_0x1e5717=_0x553c50[_0x140a7d(0x125)]($gameMap[_0x140a7d(0x132)+_0x140a7d(0x1e9)+'djustHorzC'+_0x140a7d(0x27c)][-0xb*0x64+-0x252f+0x297c],_0xbc95f6),_0x97258c=_0x553c50[_0x140a7d(0x1d9)]($gamePlayer[_0x140a7d(0x2c3)],$gameMap['width']()),_0x49abc9=_0x553c50[_0x140a7d(0x288)](_0xbc95f6,_0x553c50[_0x140a7d(0x186)](_0x1e5717,_0x97258c));else{if(_0x553c50[_0x140a7d(0x247)]($gameMap[_0x140a7d(0x132)+_0x140a7d(0x1e9)+_0x140a7d(0x2b9)+'ontrast'],undefined))var _0xbc95f6=$gameMap[_0x140a7d(0x132)+_0x140a7d(0x1e9)+_0x140a7d(0x2b9)+'ontrast'][-0x7c*-0x2e+0x39f*-0x5+-0x42d],_0x1e5717=_0x553c50[_0x140a7d(0x2da)]($gameMap[_0x140a7d(0x132)+'ectsColorA'+_0x140a7d(0x2b9)+_0x140a7d(0x27c)][-0x78d+-0x2*0xf0+0x47*0x22],_0xbc95f6),_0x97258c=_0x553c50[_0x140a7d(0x2ff)]($gamePlayer['_realY'],$gameMap['height']()),_0x49abc9=_0x553c50['rUltB'](_0xbc95f6,_0x553c50['ANVum'](_0x1e5717,_0x97258c));}continue;case'6':if(_0x553c50['YiqfX']($gameMap[_0x140a7d(0x132)+_0x140a7d(0x1e9)+_0x140a7d(0x1e2)+_0x140a7d(0x154)],undefined))var _0xbc95f6=$gameMap[_0x140a7d(0x132)+_0x140a7d(0x1e9)+_0x140a7d(0x1e2)+_0x140a7d(0x154)][-0x17f4+0x4f3*-0x1+-0x421*-0x7],_0x1e5717=_0x553c50[_0x140a7d(0x125)]($gameMap['_brightEff'+_0x140a7d(0x1e9)+'djustHorzS'+_0x140a7d(0x154)][0xa7*0x9+-0x226+0x1*-0x3b8],_0xbc95f6),_0x97258c=_0x553c50[_0x140a7d(0x159)]($gamePlayer[_0x140a7d(0x2c3)],$gameMap['width']()),_0x15775d=_0x553c50[_0x140a7d(0x288)](_0xbc95f6,_0x553c50[_0x140a7d(0x186)](_0x1e5717,_0x97258c));else{if(_0x553c50[_0x140a7d(0x1ca)]($gameMap[_0x140a7d(0x132)+_0x140a7d(0x1e9)+_0x140a7d(0x179)+_0x140a7d(0x154)],undefined))var _0xbc95f6=$gameMap[_0x140a7d(0x132)+_0x140a7d(0x1e9)+'djustVertS'+'aturate'][-0x1928+-0x157c+0x2ea4],_0x1e5717=_0x553c50['pdUgM']($gameMap[_0x140a7d(0x132)+'ectsColorA'+_0x140a7d(0x179)+_0x140a7d(0x154)][-0x1*0x8c3+0x1e51+-0x3*0x72f],_0xbc95f6),_0x97258c=_0x553c50['UWgtc']($gamePlayer[_0x140a7d(0x2ef)],$gameMap['height']()),_0x15775d=_0x553c50[_0x140a7d(0x288)](_0xbc95f6,_0x553c50[_0x140a7d(0x186)](_0x1e5717,_0x97258c));}continue;case'7':$gameScreen[_0x140a7d(0x240)+_0x140a7d(0x1fa)+_0x140a7d(0x168)+_0x140a7d(0x2ad)](_0x467da9,_0x49abc9,_0x15775d,_0x124613[_0x140a7d(0x239)]);continue;}break;}},Spriteset_Base['BRIGHT_EFF'+_0x47dc13(0x2b3)+_0x47dc13(0x2bb)]=![],Spriteset_Map['BRIGHT_EFF'+_0x47dc13(0x2b3)+_0x47dc13(0x2bb)]=VisuMZ[_0x47dc13(0x214)+_0x47dc13(0x1fe)][_0x47dc13(0x16e)][_0x47dc13(0x12d)+_0x47dc13(0x25a)],Spriteset_Battle[_0x47dc13(0x17e)+_0x47dc13(0x2b3)+'ONLY']=VisuMZ[_0x47dc13(0x214)+_0x47dc13(0x1fe)][_0x47dc13(0x16e)][_0x47dc13(0x17d)+'Filter'],Spriteset_Base['prototype']['brightEffe'+_0x47dc13(0x248)+'y']=function(){var _0x383166=_0x47dc13;return Spriteset_Base[_0x383166(0x17e)+_0x383166(0x2b3)+_0x383166(0x2bb)];},Spriteset_Map[_0x47dc13(0x251)][_0x47dc13(0x187)+_0x47dc13(0x248)+'y']=function(){return Spriteset_Map['BRIGHT_EFF'+'ECTS_BASE_'+'ONLY'];},Spriteset_Battle[_0x47dc13(0x251)][_0x47dc13(0x187)+_0x47dc13(0x248)+'y']=function(){var _0xcd7fc2=_0x47dc13;return Spriteset_Battle[_0xcd7fc2(0x17e)+_0xcd7fc2(0x2b3)+_0xcd7fc2(0x2bb)];},VisuMZ[_0x47dc13(0x214)+_0x47dc13(0x1fe)]['Spriteset_'+_0x47dc13(0x269)+_0x47dc13(0x283)+_0x47dc13(0x190)]=Spriteset_Base[_0x47dc13(0x251)]['createOver'+'allFilters'],Spriteset_Base['prototype'][_0x47dc13(0x254)+_0x47dc13(0x1a3)]=function(){var _0x190886=_0x47dc13;VisuMZ['BrightEffe'+'cts'][_0x190886(0x12b)+'Base_creat'+_0x190886(0x283)+_0x190886(0x190)][_0x190886(0x180)](this),this[_0x190886(0x1ce)+_0x190886(0x258)+_0x190886(0x2ea)]();},VisuMZ['BrightEffe'+_0x47dc13(0x1fe)]['Spriteset_'+_0x47dc13(0x199)+'e']=Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x286)],Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x286)]=function(){var _0x476bf6=_0x47dc13;VisuMZ[_0x476bf6(0x214)+'cts'][_0x476bf6(0x12b)+_0x476bf6(0x199)+'e'][_0x476bf6(0x180)](this),this[_0x476bf6(0x242)+_0x476bf6(0x258)+_0x476bf6(0x2ea)]();},Spriteset_Map[_0x47dc13(0x251)][_0x47dc13(0x20e)+_0x47dc13(0x2eb)]=function(){var _0x5bfa00=_0x47dc13,_0x3b1139={'eSKpy':function(_0x1f1f88,_0x3813c7){return _0x1f1f88/_0x3813c7;},'aCMak':function(_0x3e4cc2,_0x435686){return _0x3e4cc2*_0x435686;},'ijxyh':function(_0x128384,_0x57dab7){return _0x128384*_0x57dab7;},'qykoi':function(_0x4dc085,_0x12aeb4){return _0x4dc085*_0x12aeb4;}};const _0x1b1cfb=$gameScreen[_0x5bfa00(0x225)]();let _0x4d55a1=-0x2c*-0x13+0xdcf+0x1113*-0x1;if(Imported['VisuMZ_3_M'+_0x5bfa00(0x27f)+'om']&&$gameScreen[_0x5bfa00(0x123)+_0x5bfa00(0x2bd)]()[_0x5bfa00(0x2aa)])_0x4d55a1=_0x3b1139[_0x5bfa00(0x28b)](Graphics[_0x5bfa00(0x1e0)],-0x1433*0x1+0x1135+0x4*0xc0),_0x4d55a1-=_0x3b1139[_0x5bfa00(0x25b)](_0x3b1139[_0x5bfa00(0x25b)]($gameMap[_0x5bfa00(0x18c)](),0x1*0x1963+-0x4*-0x82b+-0x3a0f+0.5),_0x1b1cfb);else{const _0x3d827b=Imported['VisuMZ_3_M'+_0x5bfa00(0x27f)+'om']?$gameScreen[_0x5bfa00(0x1a8)+'ocusTarget'](!![]):$gamePlayer,_0x3b8bd5=this[_0x5bfa00(0x22e)+'Sprite'](_0x3d827b);_0x3b8bd5&&(_0x4d55a1=_0x3b1139['aCMak'](_0x3d827b[_0x5bfa00(0x128)](),_0x1b1cfb),_0x4d55a1-=_0x3b1139[_0x5bfa00(0x21a)](_0x3b8bd5[_0x5bfa00(0x1e0)],0x28*-0x7f+-0x2*-0x3be+0xc5c+0.5),_0x4d55a1-=_0x3b1139['qykoi'](_0x3b1139[_0x5bfa00(0x25b)](_0x3d827b[_0x5bfa00(0x29d)](),_0x1b1cfb),0x26e6+0x1*-0x916+-0x1dd0+0.5));}return _0x4d55a1;},Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x20e)+_0x47dc13(0x2eb)]=function(){var _0x422650=_0x47dc13,_0x1df2d0={'SAIhF':function(_0x4a098f,_0xd2c864){return _0x4a098f/_0xd2c864;}};return _0x1df2d0[_0x422650(0x2d8)](Graphics['height'],0x3*0x9f5+-0x19eb+-0x3f2);},Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x1ce)+'htEffectsF'+_0x47dc13(0x2ea)]=function(){var _0xaf46ca=_0x47dc13,_0x3607ca={'UPplT':_0xaf46ca(0x165)+'0|3|1','yspme':function(_0x24f234,_0x4bdd3c){return _0x24f234===_0x4bdd3c;}},_0x319710=_0x3607ca[_0xaf46ca(0x2fd)][_0xaf46ca(0x23c)]('|'),_0x254d2d=-0x239b*-0x1+0x1*-0x1f+-0x237c;while(!![]){switch(_0x319710[_0x254d2d++]){case'0':this[_0xaf46ca(0x1ce)+_0xaf46ca(0x2f0)+'iltShiftFi'+_0xaf46ca(0x2cc)]();continue;case'1':this[_0xaf46ca(0x242)+_0xaf46ca(0x258)+_0xaf46ca(0x2ea)]();continue;case'2':if(_0x3607ca[_0xaf46ca(0x161)](ConfigManager[_0xaf46ca(0x24b)+_0xaf46ca(0x237)],![]))return;continue;case'3':this['createBrig'+'htEffectsB'+_0xaf46ca(0x1ab)]();continue;case'4':this[_0xaf46ca(0x1ce)+_0xaf46ca(0x2e4)+'olorAdjust'+_0xaf46ca(0x207)]();continue;case'5':this[_0xaf46ca(0x1ce)+_0xaf46ca(0x2b6)+'dvBloomFil'+_0xaf46ca(0x25a)]();continue;case'6':this['filters']=this[_0xaf46ca(0x1dd)]||[];continue;case'7':this['createBrig'+_0xaf46ca(0x1d2)+_0xaf46ca(0x131)+'r']();continue;}break;}},Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x242)+_0x47dc13(0x258)+_0x47dc13(0x2ea)]=function(){var _0xff73aa=_0x47dc13,_0x399057={'FYUnu':_0xff73aa(0x2fc)},_0x5351d4=_0x399057[_0xff73aa(0x1d8)][_0xff73aa(0x23c)]('|'),_0x164a5f=-0x2*0x1233+0x23a+0x222c;while(!![]){switch(_0x5351d4[_0x164a5f++]){case'0':this[_0xff73aa(0x242)+_0xff73aa(0x2f0)+_0xff73aa(0x296)+_0xff73aa(0x2cc)]();continue;case'1':this[_0xff73aa(0x242)+_0xff73aa(0x2b6)+_0xff73aa(0x26f)+_0xff73aa(0x25a)]();continue;case'2':this[_0xff73aa(0x242)+_0xff73aa(0x1d2)+_0xff73aa(0x131)+'r']();continue;case'3':this['updateBrig'+_0xff73aa(0x24e)+_0xff73aa(0x1ab)]();continue;case'4':this['updateBrig'+'htEffectsC'+_0xff73aa(0x18e)+_0xff73aa(0x207)]();continue;}break;}},Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x1ce)+_0x47dc13(0x2b6)+_0x47dc13(0x26f)+'ter']=function(){var _0x52e94e=_0x47dc13,_0x282242={'qITrC':'0|2|3|1|4','LBVIP':function(_0x39f4b0,_0x22abde){return _0x39f4b0>_0x22abde;}},_0x7888f8=_0x282242[_0x52e94e(0x2d0)][_0x52e94e(0x23c)]('|'),_0xeab382=0x1742+-0xa72+-0xcd*0x10;while(!![]){switch(_0x7888f8[_0xeab382++]){case'0':if(!PIXI['filters'][_0x52e94e(0x2b5)+'oomFilter'])return;continue;case'1':var _0x45a2ba=$gameScreen[_0x52e94e(0x164)+_0x52e94e(0x244)+_0x52e94e(0x12a)+'gs']();continue;case'2':this[_0x52e94e(0x1a9)+_0x52e94e(0x12f)+_0x52e94e(0x153)]=new PIXI[(_0x52e94e(0x1dd))][(_0x52e94e(0x2b5))+(_0x52e94e(0x163))]();continue;case'3':this[_0x52e94e(0x187)+_0x52e94e(0x248)+'y']()?this['_baseSprit'+'e'][_0x52e94e(0x1dd)][_0x52e94e(0x1f3)](this[_0x52e94e(0x1a9)+_0x52e94e(0x12f)+'omFilter']):this[_0x52e94e(0x1dd)][_0x52e94e(0x1f3)](this[_0x52e94e(0x1a9)+'ectsAdvBlo'+_0x52e94e(0x153)]);continue;case'4':_0x45a2ba&&_0x282242['LBVIP'](_0x45a2ba[_0x52e94e(0x239)],0x14b9+0x1bf1*0x1+0x2*-0x1855)&&(this[_0x52e94e(0x1a9)+'ectsAdvBlo'+_0x52e94e(0x153)]['bloomScale']=_0x45a2ba[_0x52e94e(0x1ff)],this['_BrightEff'+_0x52e94e(0x12f)+'omFilter'][_0x52e94e(0x2e9)]=_0x45a2ba[_0x52e94e(0x2e9)],this[_0x52e94e(0x1a9)+'ectsAdvBlo'+_0x52e94e(0x153)][_0x52e94e(0x23e)]=_0x45a2ba[_0x52e94e(0x23e)]);continue;}break;}},Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x242)+_0x47dc13(0x2b6)+_0x47dc13(0x26f)+_0x47dc13(0x25a)]=function(){var _0x3a3fe9=_0x47dc13,_0x29f215={'fEKYp':function(_0x3c9f65,_0x1e4bb7){return _0x3c9f65<=_0x1e4bb7;},'RYtke':function(_0x25851a,_0x18b676){return _0x25851a/_0x18b676;},'aqIPx':function(_0x208828,_0x458ade){return _0x208828+_0x458ade;},'rMTDM':function(_0x103268,_0x3b9a3e){return _0x103268*_0x3b9a3e;},'QKvVg':function(_0x1c7d94,_0x2dc5ba){return _0x1c7d94-_0x2dc5ba;},'fJPkb':function(_0x4baeac,_0x50b592){return _0x4baeac/_0x50b592;},'rkGGj':function(_0x2d011c,_0x207a1a){return _0x2d011c*_0x207a1a;},'PQEpO':function(_0xdf627e,_0x46957c){return _0xdf627e-_0x46957c;},'zjiCQ':function(_0x480cb3,_0xb610f6){return _0x480cb3/_0xb610f6;},'KhDJu':function(_0x142e5e,_0xa5d340){return _0x142e5e+_0xa5d340;},'lVuao':function(_0x51b104,_0x337830){return _0x51b104*_0x337830;}};if(!!this[_0x3a3fe9(0x1a9)+_0x3a3fe9(0x12f)+_0x3a3fe9(0x153)]){var _0x49d5d2=$gameScreen[_0x3a3fe9(0x164)+'ffectsAdvB'+_0x3a3fe9(0x12a)+'gs'](),_0x143cfa=_0x49d5d2['duration'];_0x29f215[_0x3a3fe9(0x304)](_0x143cfa,-0x231d+-0x1*-0x199f+0x32a*0x3)?(this['_BrightEff'+_0x3a3fe9(0x12f)+_0x3a3fe9(0x153)]['bloomScale']=_0x49d5d2[_0x3a3fe9(0x1ff)],this[_0x3a3fe9(0x1a9)+_0x3a3fe9(0x12f)+_0x3a3fe9(0x153)][_0x3a3fe9(0x2e9)]=_0x49d5d2[_0x3a3fe9(0x2e9)],this[_0x3a3fe9(0x1a9)+_0x3a3fe9(0x12f)+_0x3a3fe9(0x153)][_0x3a3fe9(0x23e)]=_0x49d5d2['threshold']):(_0x49d5d2['duration']--,this[_0x3a3fe9(0x1a9)+'ectsAdvBlo'+'omFilter'][_0x3a3fe9(0x1ff)]=_0x29f215[_0x3a3fe9(0x217)](_0x29f215['aqIPx'](_0x29f215[_0x3a3fe9(0x1bf)](this[_0x3a3fe9(0x1a9)+'ectsAdvBlo'+'omFilter'][_0x3a3fe9(0x1ff)],_0x29f215[_0x3a3fe9(0x1a2)](_0x143cfa,0xbd3*0x1+-0x1b6e+0x1b*0x94)),_0x49d5d2[_0x3a3fe9(0x1ff)]),_0x143cfa),this[_0x3a3fe9(0x1a9)+_0x3a3fe9(0x12f)+_0x3a3fe9(0x153)]['brightness']=_0x29f215[_0x3a3fe9(0x156)](_0x29f215[_0x3a3fe9(0x265)](_0x29f215[_0x3a3fe9(0x148)](this['_BrightEff'+'ectsAdvBlo'+_0x3a3fe9(0x153)][_0x3a3fe9(0x2e9)],_0x29f215[_0x3a3fe9(0x15d)](_0x143cfa,0x2639+0xb4b+0x1081*-0x3)),_0x49d5d2['brightness']),_0x143cfa),this[_0x3a3fe9(0x1a9)+_0x3a3fe9(0x12f)+'omFilter'][_0x3a3fe9(0x23e)]=_0x29f215[_0x3a3fe9(0x1b0)](_0x29f215['KhDJu'](_0x29f215['lVuao'](this[_0x3a3fe9(0x1a9)+'ectsAdvBlo'+'omFilter']['threshold'],_0x29f215[_0x3a3fe9(0x15d)](_0x143cfa,-0x5*0x2b5+-0xb23+0x18ad*0x1)),_0x49d5d2['threshold']),_0x143cfa));}},Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x1ce)+_0x47dc13(0x1d2)+'odrayFilte'+'r']=function(){var _0x20915a=_0x47dc13,_0x42f7b3={'NwojM':_0x20915a(0x289)+_0x20915a(0x2fe),'vggoe':function(_0x2324df,_0x1875a5){return _0x2324df>_0x1875a5;}},_0x51743d=_0x42f7b3[_0x20915a(0x1e7)][_0x20915a(0x23c)]('|'),_0x17f52a=-0x313*-0x7+-0x201b*0x1+0x5*0x21e;while(!![]){switch(_0x51743d[_0x17f52a++]){case'0':if(!PIXI[_0x20915a(0x1dd)][_0x20915a(0x17a)+'er'])return;continue;case'1':var _0x1791be=$gameScreen[_0x20915a(0x164)+_0x20915a(0x1be)+_0x20915a(0x19c)]();continue;case'2':this[_0x20915a(0x1a9)+'ectsGodray'+_0x20915a(0x207)][_0x20915a(0x292)]=-0x2224*-0x1+-0x1*0x1b65+0x9d*-0xb;continue;case'3':this[_0x20915a(0x1a9)+_0x20915a(0x1b6)+'Filter']=new PIXI[(_0x20915a(0x1dd))][(_0x20915a(0x17a))+'er']();continue;case'4':this[_0x20915a(0x1a9)+'ectsGodray'+_0x20915a(0x207)][_0x20915a(0x219)]=![];continue;case'5':this[_0x20915a(0x187)+_0x20915a(0x248)+'y']()?this[_0x20915a(0x25e)+'e'][_0x20915a(0x1dd)][_0x20915a(0x1f3)](this['_BrightEff'+_0x20915a(0x1b6)+_0x20915a(0x207)]):this[_0x20915a(0x1dd)][_0x20915a(0x1f3)](this[_0x20915a(0x1a9)+_0x20915a(0x1b6)+_0x20915a(0x207)]);continue;case'6':_0x1791be&&_0x42f7b3[_0x20915a(0x1c6)](_0x1791be[_0x20915a(0x239)],-0x1f6*-0x2+-0x49c*-0x7+-0x2430)&&(this[_0x20915a(0x1a9)+_0x20915a(0x1b6)+_0x20915a(0x207)]['speed']=_0x1791be[_0x20915a(0x23d)],this['_BrightEff'+_0x20915a(0x1b6)+_0x20915a(0x207)]['gain']=_0x1791be['gain'],this[_0x20915a(0x1a9)+_0x20915a(0x1b6)+'Filter'][_0x20915a(0x19d)]=_0x1791be['lacunarity'],this[_0x20915a(0x1a9)+_0x20915a(0x1b6)+_0x20915a(0x207)]['angle']=_0x1791be['angle']);continue;}break;}},Spriteset_Base['prototype'][_0x47dc13(0x242)+'htEffectsG'+_0x47dc13(0x131)+'r']=function(){var _0x40e0ea=_0x47dc13,_0x418538={'ONsyE':'1|4|3|2|0','jLEfT':function(_0x4f0797,_0x744235){return _0x4f0797<=_0x744235;},'jDPNw':_0x40e0ea(0x192),'LJwmm':function(_0xd872e,_0x3b4a69){return _0xd872e/_0x3b4a69;},'NqjMN':function(_0x47f4d2,_0x36e670){return _0x47f4d2+_0x36e670;},'pmMVa':function(_0x48d5d6,_0x4485d4){return _0x48d5d6*_0x4485d4;},'eQSLX':function(_0x40849f,_0x13d4f2){return _0x40849f-_0x13d4f2;},'sodZN':function(_0x42463c,_0x2fe595){return _0x42463c+_0x2fe595;},'JUUhT':function(_0x27f9af,_0x13dd5d){return _0x27f9af-_0x13dd5d;},'jpdII':function(_0x31d595,_0xc35050){return _0x31d595+_0xc35050;},'WLana':function(_0x3c54bf,_0x47fec3){return _0x3c54bf-_0x47fec3;},'CUqhK':function(_0x5abd4a,_0x41eb5d){return _0x5abd4a-_0x41eb5d;}};if(!!this['_BrightEff'+_0x40e0ea(0x1b6)+'Filter']){var _0x5a65e7=_0x418538[_0x40e0ea(0x146)][_0x40e0ea(0x23c)]('|'),_0x265335=-0x482*0x3+0x9a5*-0x2+-0x2*-0x1068;while(!![]){switch(_0x5a65e7[_0x265335++]){case'0':this[_0x40e0ea(0x1a9)+_0x40e0ea(0x1b6)+'Filter'][_0x40e0ea(0x219)]=_0x1a011e[_0x40e0ea(0x2b7)];continue;case'1':var _0x1a011e=$gameScreen['getBrightE'+_0x40e0ea(0x1be)+_0x40e0ea(0x19c)]();continue;case'2':this['_BrightEff'+_0x40e0ea(0x1b6)+'Filter'][_0x40e0ea(0x292)]+=this[_0x40e0ea(0x1a9)+'ectsGodray'+_0x40e0ea(0x207)][_0x40e0ea(0x23d)];continue;case'3':if(_0x418538[_0x40e0ea(0x307)](_0x528c25,0x18ea+-0x47*-0x6b+-0x3697))this['_BrightEff'+_0x40e0ea(0x1b6)+_0x40e0ea(0x207)][_0x40e0ea(0x23d)]=_0x1a011e[_0x40e0ea(0x23d)],this[_0x40e0ea(0x1a9)+'ectsGodray'+_0x40e0ea(0x207)]['gain']=_0x1a011e[_0x40e0ea(0x136)],this[_0x40e0ea(0x1a9)+_0x40e0ea(0x1b6)+_0x40e0ea(0x207)]['lacunarity']=_0x1a011e['lacunarity'],this[_0x40e0ea(0x1a9)+_0x40e0ea(0x1b6)+_0x40e0ea(0x207)]['angle']=_0x1a011e[_0x40e0ea(0x1db)];else{var _0x5c00cd=_0x418538[_0x40e0ea(0x205)][_0x40e0ea(0x23c)]('|'),_0x2d3ae4=-0x2*-0xa6f+0x22be+-0x379c;while(!![]){switch(_0x5c00cd[_0x2d3ae4++]){case'0':this['_BrightEff'+_0x40e0ea(0x1b6)+_0x40e0ea(0x207)][_0x40e0ea(0x1db)]=_0x418538[_0x40e0ea(0x142)](_0x418538[_0x40e0ea(0x2d5)](_0x418538[_0x40e0ea(0x1b4)](this[_0x40e0ea(0x1a9)+'ectsGodray'+_0x40e0ea(0x207)][_0x40e0ea(0x1db)],_0x418538[_0x40e0ea(0x1de)](_0x528c25,0x41*-0x42+0x2105+-0x1042)),_0x1a011e[_0x40e0ea(0x1db)]),_0x528c25);continue;case'1':this['_BrightEff'+'ectsGodray'+'Filter']['speed']=_0x418538[_0x40e0ea(0x142)](_0x418538[_0x40e0ea(0x1d7)](_0x418538[_0x40e0ea(0x1b4)](this[_0x40e0ea(0x1a9)+_0x40e0ea(0x1b6)+_0x40e0ea(0x207)]['speed'],_0x418538[_0x40e0ea(0x22d)](_0x528c25,-0xe7f+0x1a04+-0xb84)),_0x1a011e['speed']),_0x528c25);continue;case'2':this[_0x40e0ea(0x1a9)+_0x40e0ea(0x1b6)+_0x40e0ea(0x207)][_0x40e0ea(0x19d)]=_0x418538[_0x40e0ea(0x142)](_0x418538[_0x40e0ea(0x182)](_0x418538[_0x40e0ea(0x1b4)](this[_0x40e0ea(0x1a9)+_0x40e0ea(0x1b6)+_0x40e0ea(0x207)][_0x40e0ea(0x19d)],_0x418538[_0x40e0ea(0x15e)](_0x528c25,-0x5*-0x691+-0x254a+0x476)),_0x1a011e[_0x40e0ea(0x19d)]),_0x528c25);continue;case'3':this['_BrightEff'+_0x40e0ea(0x1b6)+_0x40e0ea(0x207)][_0x40e0ea(0x136)]=_0x418538[_0x40e0ea(0x142)](_0x418538[_0x40e0ea(0x1d7)](_0x418538[_0x40e0ea(0x1b4)](this['_BrightEff'+_0x40e0ea(0x1b6)+_0x40e0ea(0x207)][_0x40e0ea(0x136)],_0x418538[_0x40e0ea(0x141)](_0x528c25,0x24d4+0x2a2*-0xd+-0x299)),_0x1a011e[_0x40e0ea(0x136)]),_0x528c25);continue;case'4':_0x1a011e['duration']--;continue;}break;}}continue;case'4':var _0x528c25=_0x1a011e['duration'];continue;}break;}}},Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x1ce)+_0x47dc13(0x2e4)+'olorAdjust'+'Filter']=function(){var _0x2c0f3c=_0x47dc13,_0x1fa2d8={'UhoxY':_0x2c0f3c(0x277),'AtQew':function(_0x3cdb6d,_0x21284b){return _0x3cdb6d>_0x21284b;}},_0x4b8097=_0x1fa2d8[_0x2c0f3c(0x191)][_0x2c0f3c(0x23c)]('|'),_0x74ca3d=-0x1b7+-0x1c1f+0x1dd6;while(!![]){switch(_0x4b8097[_0x74ca3d++]){case'0':this[_0x2c0f3c(0x187)+'ctsBaseOnl'+'y']()?this[_0x2c0f3c(0x25e)+'e'][_0x2c0f3c(0x1dd)][_0x2c0f3c(0x1f3)](this['_BrightEff'+_0x2c0f3c(0x1e9)+_0x2c0f3c(0x235)+'r']):this[_0x2c0f3c(0x1dd)][_0x2c0f3c(0x1f3)](this[_0x2c0f3c(0x1a9)+_0x2c0f3c(0x1e9)+_0x2c0f3c(0x235)+'r']);continue;case'1':if(!PIXI[_0x2c0f3c(0x1dd)][_0x2c0f3c(0x1a6)+_0x2c0f3c(0x276)])return;continue;case'2':this['_BrightEff'+'ectsColorA'+_0x2c0f3c(0x235)+'r']=new PIXI[(_0x2c0f3c(0x1dd))][(_0x2c0f3c(0x1a6))+(_0x2c0f3c(0x276))]();continue;case'3':var _0x379319=$gameScreen['getBrightE'+_0x2c0f3c(0x1fa)+_0x2c0f3c(0x168)+_0x2c0f3c(0x2ad)]();continue;case'4':_0x379319&&_0x1fa2d8[_0x2c0f3c(0x170)](_0x379319[_0x2c0f3c(0x239)],0x1f2f+0x1197+0x1863*-0x2)&&(this[_0x2c0f3c(0x1a9)+_0x2c0f3c(0x1e9)+_0x2c0f3c(0x235)+'r']['currentBri'+_0x2c0f3c(0x1f6)]=_0x379319[_0x2c0f3c(0x2e9)],this['_BrightEff'+_0x2c0f3c(0x1e9)+'djustFilte'+'r']['currentCon'+'trast']=_0x379319[_0x2c0f3c(0x285)],this[_0x2c0f3c(0x1a9)+_0x2c0f3c(0x1e9)+_0x2c0f3c(0x235)+'r'][_0x2c0f3c(0x169)+'urate']=_0x379319[_0x2c0f3c(0x252)]);continue;}break;}},Spriteset_Base[_0x47dc13(0x251)]['updateBrig'+'htEffectsC'+_0x47dc13(0x18e)+'Filter']=function(){var _0x4f5f17=_0x47dc13,_0x2919ec={'iQNGi':_0x4f5f17(0x2a2)+'1','TWeyD':function(_0x32aab5,_0x50e71d){return _0x32aab5<=_0x50e71d;},'gIMDH':function(_0x10b069,_0x4c3f83){return _0x10b069/_0x4c3f83;},'pURhe':function(_0x3a678d,_0x24796b){return _0x3a678d+_0x24796b;},'tgGGA':function(_0x293ddd,_0x58e7e9){return _0x293ddd*_0x58e7e9;},'nIggn':function(_0x3ef713,_0x34549d){return _0x3ef713-_0x34549d;},'txJHD':function(_0x4fa5b8,_0x4667f8){return _0x4fa5b8*_0x4667f8;},'CwAQc':function(_0x52f01c,_0xbd8828){return _0x52f01c/_0xbd8828;},'JgYvU':function(_0x2dd8a0,_0x5c6cbb){return _0x2dd8a0+_0x5c6cbb;},'rQKVG':function(_0x40cd7a,_0x3a322d){return _0x40cd7a*_0x3a322d;}};if(!!this['_BrightEff'+_0x4f5f17(0x1e9)+_0x4f5f17(0x235)+'r']){var _0x5a6d7b=_0x2919ec[_0x4f5f17(0x29e)]['split']('|'),_0x1fe1a5=-0x1*0x1ed0+0x82*-0x2f+0x36ae;while(!![]){switch(_0x5a6d7b[_0x1fe1a5++]){case'0':var _0x213ca9=$gameScreen[_0x4f5f17(0x164)+'ffectsColo'+_0x4f5f17(0x168)+'tings']();continue;case'1':this['_BrightEff'+'ectsColorA'+_0x4f5f17(0x235)+'r'][_0x4f5f17(0x252)](this[_0x4f5f17(0x1a9)+_0x4f5f17(0x1e9)+_0x4f5f17(0x235)+'r'][_0x4f5f17(0x169)+_0x4f5f17(0x127)],!![]);continue;case'2':var _0x58dd7c=_0x213ca9[_0x4f5f17(0x239)];continue;case'3':this[_0x4f5f17(0x1a9)+_0x4f5f17(0x1e9)+_0x4f5f17(0x235)+'r'][_0x4f5f17(0x2e9)](this[_0x4f5f17(0x1a9)+_0x4f5f17(0x1e9)+_0x4f5f17(0x235)+'r'][_0x4f5f17(0x1ef)+'ghtness']);continue;case'4':_0x2919ec[_0x4f5f17(0x1c0)](_0x58dd7c,0x1*0xc0b+0xc80+0x67*-0x3d)?(this['_BrightEff'+'ectsColorA'+_0x4f5f17(0x235)+'r'][_0x4f5f17(0x1ef)+_0x4f5f17(0x1f6)]=_0x213ca9[_0x4f5f17(0x2e9)],this[_0x4f5f17(0x1a9)+_0x4f5f17(0x1e9)+_0x4f5f17(0x235)+'r']['currentCon'+_0x4f5f17(0x2df)]=_0x213ca9[_0x4f5f17(0x285)],this[_0x4f5f17(0x1a9)+'ectsColorA'+_0x4f5f17(0x235)+'r'][_0x4f5f17(0x169)+'urate']=_0x213ca9[_0x4f5f17(0x252)]):(_0x213ca9[_0x4f5f17(0x239)]--,this['_BrightEff'+_0x4f5f17(0x1e9)+_0x4f5f17(0x235)+'r'][_0x4f5f17(0x1ef)+_0x4f5f17(0x1f6)]=_0x2919ec[_0x4f5f17(0x11e)](_0x2919ec[_0x4f5f17(0x2fa)](_0x2919ec[_0x4f5f17(0x1ec)](this[_0x4f5f17(0x1a9)+'ectsColorA'+_0x4f5f17(0x235)+'r']['currentBri'+_0x4f5f17(0x1f6)],_0x2919ec[_0x4f5f17(0x295)](_0x58dd7c,0x1354+-0x3*0x9e5+0xa5c)),_0x213ca9[_0x4f5f17(0x2e9)]),_0x58dd7c),this[_0x4f5f17(0x1a9)+'ectsColorA'+_0x4f5f17(0x235)+'r'][_0x4f5f17(0x260)+_0x4f5f17(0x2df)]=_0x2919ec[_0x4f5f17(0x11e)](_0x2919ec[_0x4f5f17(0x2fa)](_0x2919ec[_0x4f5f17(0x1a4)](this[_0x4f5f17(0x1a9)+_0x4f5f17(0x1e9)+'djustFilte'+'r'][_0x4f5f17(0x260)+'trast'],_0x2919ec[_0x4f5f17(0x295)](_0x58dd7c,-0x11e0+0x25ba+-0x13d9)),_0x213ca9[_0x4f5f17(0x285)]),_0x58dd7c),this[_0x4f5f17(0x1a9)+_0x4f5f17(0x1e9)+_0x4f5f17(0x235)+'r'][_0x4f5f17(0x169)+_0x4f5f17(0x127)]=_0x2919ec[_0x4f5f17(0x167)](_0x2919ec[_0x4f5f17(0x1d5)](_0x2919ec[_0x4f5f17(0x1cf)](this[_0x4f5f17(0x1a9)+'ectsColorA'+'djustFilte'+'r']['currentSat'+_0x4f5f17(0x127)],_0x2919ec['nIggn'](_0x58dd7c,-0x1*0x2566+-0xdf3*-0x1+-0xbba*-0x2)),_0x213ca9['saturate']),_0x58dd7c));continue;case'5':this['_BrightEff'+'ectsColorA'+_0x4f5f17(0x235)+'r'][_0x4f5f17(0x285)](this[_0x4f5f17(0x1a9)+'ectsColorA'+_0x4f5f17(0x235)+'r'][_0x4f5f17(0x260)+'trast'],!![]);continue;}break;}}},Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x1ce)+_0x47dc13(0x2f0)+'iltShiftFi'+'lter']=function(){var _0x87e03b=_0x47dc13,_0x4e78a7={'frfVx':function(_0x583e85,_0x318341){return _0x583e85>_0x318341;}};if(!PIXI[_0x87e03b(0x1dd)]['TiltShiftF'+_0x87e03b(0x145)])return;const _0x133c2d=new PIXI['filters'][(_0x87e03b(0x1ee))+(_0x87e03b(0x145))]();this[_0x87e03b(0x1a9)+_0x87e03b(0x282)+_0x87e03b(0x2b1)]=_0x133c2d;this[_0x87e03b(0x187)+_0x87e03b(0x248)+'y']()?this[_0x87e03b(0x25e)+'e'][_0x87e03b(0x1dd)][_0x87e03b(0x1f3)](_0x133c2d):this['filters'][_0x87e03b(0x1f3)](_0x133c2d);var _0x1fdd0e=$gameScreen['getBrightE'+_0x87e03b(0x1a5)+_0x87e03b(0x1eb)+_0x87e03b(0x308)]();_0x1fdd0e&&_0x4e78a7[_0x87e03b(0x298)](_0x1fdd0e[_0x87e03b(0x239)],0x65*0x2+-0x1d47+-0x8f*-0x33)&&(_0x133c2d[_0x87e03b(0x1c1)+_0x87e03b(0x1a1)]=_0x1fdd0e[_0x87e03b(0x21e)],_0x133c2d[_0x87e03b(0x2a3)+_0x87e03b(0x133)]=_0x1fdd0e['gradientBl'+'ur']);},Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x242)+_0x47dc13(0x2f0)+_0x47dc13(0x296)+_0x47dc13(0x2cc)]=function(){var _0x4b1d6e=_0x47dc13,_0x3ac8b6={'IzPUC':function(_0x408711,_0x402755){return _0x408711+_0x402755;}};if(!this[_0x4b1d6e(0x1a9)+_0x4b1d6e(0x282)+_0x4b1d6e(0x2b1)])return;const _0x37df12=_0x3ac8b6[_0x4b1d6e(0x250)](this[_0x4b1d6e(0x20e)+_0x4b1d6e(0x2eb)](),-0x2*-0x34b+0x1*-0xdbd+0x727*0x1+0.5);this[_0x4b1d6e(0x25c)+_0x4b1d6e(0x1c2)+_0x4b1d6e(0x20f)](_0x37df12),this[_0x4b1d6e(0x242)+_0x4b1d6e(0x2f0)+_0x4b1d6e(0x296)+'lterProper'+_0x4b1d6e(0x196)]();},Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x25c)+'nceTiltShi'+'ftFilterY']=function(_0x335e36){var _0xa66bce=_0x47dc13,_0x30fd0e={'wtpQv':function(_0x422233,_0x273033){return _0x422233>_0x273033;},'pkSFU':function(_0x9a49eb,_0x2deba5){return _0x9a49eb-_0x2deba5;},'KGAjs':function(_0xf946d3,_0x2ca438){return _0xf946d3-_0x2ca438;},'RQjrs':function(_0x492f94,_0x1fb7fb){return _0x492f94<_0x1fb7fb;},'tWrra':function(_0x4853bd,_0x352ad8){return _0x4853bd+_0x352ad8;}};const _0x55303c=0x2bc+0x4*0x2b+0x1f*-0x1c;if(_0x30fd0e[_0xa66bce(0x14f)](this[_0xa66bce(0x1a9)+_0xa66bce(0x282)+_0xa66bce(0x2b1)][_0xa66bce(0x23f)]['y'],_0x335e36))this[_0xa66bce(0x1a9)+_0xa66bce(0x282)+_0xa66bce(0x2b1)][_0xa66bce(0x23f)]={'x':0x0,'y':Math[_0xa66bce(0x2c8)](_0x30fd0e[_0xa66bce(0x176)](this['_BrightEff'+_0xa66bce(0x282)+_0xa66bce(0x2b1)][_0xa66bce(0x23f)]['y'],_0x55303c),_0x335e36)},this[_0xa66bce(0x1a9)+_0xa66bce(0x282)+_0xa66bce(0x2b1)][_0xa66bce(0x2a9)]={'x':0x258,'y':Math[_0xa66bce(0x2c8)](_0x30fd0e[_0xa66bce(0x233)](this[_0xa66bce(0x1a9)+_0xa66bce(0x282)+'iftFilter'][_0xa66bce(0x2a9)]['y'],_0x55303c),_0x335e36)};else _0x30fd0e[_0xa66bce(0x1cb)](this['_BrightEff'+_0xa66bce(0x282)+'iftFilter'][_0xa66bce(0x23f)]['y'],_0x335e36)&&(this[_0xa66bce(0x1a9)+_0xa66bce(0x282)+_0xa66bce(0x2b1)][_0xa66bce(0x23f)]={'x':0x0,'y':Math[_0xa66bce(0x1f5)](_0x30fd0e[_0xa66bce(0x14b)](this[_0xa66bce(0x1a9)+'ectsTiltSh'+'iftFilter'][_0xa66bce(0x23f)]['y'],_0x55303c),_0x335e36)},this['_BrightEff'+_0xa66bce(0x282)+_0xa66bce(0x2b1)][_0xa66bce(0x2a9)]={'x':0x258,'y':Math[_0xa66bce(0x1f5)](_0x30fd0e[_0xa66bce(0x14b)](this[_0xa66bce(0x1a9)+'ectsTiltSh'+_0xa66bce(0x2b1)][_0xa66bce(0x2a9)]['y'],_0x55303c),_0x335e36)});},Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x242)+_0x47dc13(0x2f0)+'iltShiftFi'+_0x47dc13(0x24c)+_0x47dc13(0x196)]=function(){var _0x496ae4=_0x47dc13,_0x370c68={'lzzzy':function(_0x3500ee,_0x59c923){return _0x3500ee<=_0x59c923;},'NDrbG':function(_0x414fc8,_0x1cde63){return _0x414fc8/_0x1cde63;},'OrrFT':function(_0x53a62c,_0x1fdeff){return _0x53a62c+_0x1fdeff;},'dmijU':function(_0x1e627f,_0x30e4b4){return _0x1e627f*_0x30e4b4;},'coRhu':function(_0x34c2c9,_0x2e23eb){return _0x34c2c9-_0x2e23eb;},'mwPSb':function(_0x31c9ce,_0x18656a){return _0x31c9ce*_0x18656a;},'jngGt':function(_0x3fda4a,_0x3aeb8f){return _0x3fda4a-_0x3aeb8f;}};const _0xab70c4=this[_0x496ae4(0x1a9)+_0x496ae4(0x282)+_0x496ae4(0x2b1)];var _0x43d4bc=$gameScreen[_0x496ae4(0x164)+_0x496ae4(0x1a5)+'ShiftSetti'+_0x496ae4(0x308)](),_0x2dc4f4=_0x43d4bc[_0x496ae4(0x239)];_0x370c68['lzzzy'](_0x2dc4f4,0x2b*-0x1+-0x1f*0x9+-0x2*-0xa1)?(_0xab70c4[_0x496ae4(0x1c1)+_0x496ae4(0x1a1)]=_0x43d4bc['pixelBlur'],_0xab70c4[_0x496ae4(0x2a3)+_0x496ae4(0x133)]=_0x43d4bc[_0x496ae4(0x178)+'ur']):(_0x43d4bc[_0x496ae4(0x239)]--,_0xab70c4[_0x496ae4(0x1c1)+_0x496ae4(0x1a1)]=_0x370c68[_0x496ae4(0x16b)](_0x370c68['OrrFT'](_0x370c68['dmijU'](_0xab70c4[_0x496ae4(0x1c1)+'elBlur'],_0x370c68[_0x496ae4(0x1e6)](_0x2dc4f4,-0x12a1+0xc10+0x692)),_0x43d4bc[_0x496ae4(0x21e)]),_0x2dc4f4),_0xab70c4['currentGra'+_0x496ae4(0x133)]=_0x370c68[_0x496ae4(0x16b)](_0x370c68[_0x496ae4(0x124)](_0x370c68[_0x496ae4(0x14c)](_0xab70c4['currentGra'+_0x496ae4(0x133)],_0x370c68[_0x496ae4(0x2d4)](_0x2dc4f4,-0x1b0*0xe+-0x1*0x2582+-0x6cb*-0x9)),_0x43d4bc[_0x496ae4(0x178)+'ur']),_0x2dc4f4)),_0xab70c4['blur']=_0xab70c4[_0x496ae4(0x1c1)+'elBlur'],_0xab70c4[_0x496ae4(0x178)+'ur']=_0xab70c4[_0x496ae4(0x2a3)+_0x496ae4(0x133)];},Spriteset_Base[_0x47dc13(0x251)][_0x47dc13(0x1ce)+_0x47dc13(0x24e)+_0x47dc13(0x1ab)]=function(){var _0x33c67a=_0x47dc13,_0x11137c={'tbqHK':function(_0x2e9c19,_0x3bcd4d){return _0x2e9c19>_0x3bcd4d;}};const _0x4eb8e5=new PIXI[(_0x33c67a(0x1dd))][(_0x33c67a(0x262))]();this[_0x33c67a(0x1a9)+'ectsBlurFi'+_0x33c67a(0x2cc)]=_0x4eb8e5;this[_0x33c67a(0x187)+'ctsBaseOnl'+'y']()?this[_0x33c67a(0x25e)+'e']['filters']['push'](_0x4eb8e5):this[_0x33c67a(0x1dd)][_0x33c67a(0x1f3)](_0x4eb8e5);var _0x3f803b=$gameScreen[_0x33c67a(0x164)+_0x33c67a(0x211)+_0x33c67a(0x16e)]();_0x3f803b&&_0x11137c[_0x33c67a(0x2ed)](_0x3f803b[_0x33c67a(0x239)],0x67d+-0x1*-0x6f5+-0xd72)&&(_0x4eb8e5['currentBlu'+'r']=_0x3f803b[_0x33c67a(0x1b5)]);},Spriteset_Base['prototype'][_0x47dc13(0x242)+_0x47dc13(0x24e)+_0x47dc13(0x1ab)]=function(){var _0x107843=_0x47dc13,_0x2fb258={'JYsHa':function(_0x1388ec,_0x268339){return _0x1388ec<=_0x268339;},'pNCIP':function(_0x4c1fbe,_0x531489){return _0x4c1fbe/_0x531489;},'XgCFE':function(_0x3718ee,_0x45de9b){return _0x3718ee+_0x45de9b;},'lJtyQ':function(_0xb95870,_0x581bce){return _0xb95870*_0x581bce;},'cpxct':function(_0x6df8d,_0x5e2666){return _0x6df8d-_0x5e2666;}};if(!!this[_0x107843(0x1a9)+_0x107843(0x281)+'lter']){var _0xdac5d6=$gameScreen[_0x107843(0x164)+'ffectsBlur'+_0x107843(0x16e)](),_0xe36fa3=_0xdac5d6[_0x107843(0x239)];_0x2fb258[_0x107843(0x27d)](_0xe36fa3,-0x1*0x13fe+-0x29f+0x169d)?this[_0x107843(0x1a9)+_0x107843(0x281)+_0x107843(0x2cc)][_0x107843(0x1b9)+'r']=_0xdac5d6[_0x107843(0x1b5)]:(_0xdac5d6[_0x107843(0x239)]--,this[_0x107843(0x1a9)+_0x107843(0x281)+'lter'][_0x107843(0x1b9)+'r']=_0x2fb258[_0x107843(0x1e8)](_0x2fb258[_0x107843(0x1cd)](_0x2fb258[_0x107843(0x157)](this[_0x107843(0x1a9)+_0x107843(0x281)+_0x107843(0x2cc)][_0x107843(0x1b9)+'r'],_0x2fb258[_0x107843(0x1d3)](_0xe36fa3,0x92*0x29+0x1*0x119b+-0x28fc)),_0xdac5d6[_0x107843(0x1b5)]),_0xe36fa3)),this[_0x107843(0x1a9)+_0x107843(0x281)+_0x107843(0x2cc)][_0x107843(0x1b5)]=this[_0x107843(0x1a9)+'ectsBlurFi'+'lter'][_0x107843(0x1b9)+'r'];}};function _0x1717(){var _0x42a8a7=['ILtlX','pixelBlur','tMUxz','iftSetting','CjQpd','Scene_Batt','3211607jkOpvj','1ZFuEhX','zoomScale','ust','oqPEr','Game_Map_s','Map','VertGain','ectsBlurSe','kUfSI','JUUhT','findTarget','ANkhP','wWvRb','rAdjust','GrfbN','KGAjs','etup','djustFilte','ARRAYSTRUC','ects','ViJAO','duration','qrGnN','rity','split','speed','threshold','start','setBrightE','ARRAYEVAL','updateBrig','bbRjx','ffectsAdvB','tEffectsGo','ieDDP','LFVMN','ctsBaseOnl','XFDRF','SlqXx','specialEff','lterProper','orzScale','htEffectsB','LwTgw','IzPUC','prototype','saturate','ist\x20from\x20s','createOver','HorzSpeed','IhhVV','hdebZ','htEffectsF','rTIAB','ter','aCMak','setMapEnha','orzBrightn','_baseSprit','Speed','currentCon','dSkGk','BlurFilter','ist.\x0aIt\x20is','Brightness','aqIPx','rrectly\x20pl','mHZcr','other\x20Tier','Base_creat','%1\x27s\x20versi','\x20a\x20Tier\x20%2','sBattle','aqvzc','descriptio','dvBloomFil','\x20%3\x20plugin','aced\x20over\x20','YhttI','jCdgJ','ARRAYFUNC','ugin\x27s.\x20Pl','xFilter','1|2|0|3|4','trim','ttingsMap','BattleBloo','\x20largest\x20t','ontrast','JYsHa','26314940pqRwLC','apCameraZo','ConvertPar','ectsBlurFi','ectsTiltSh','eOverallFi','VJand','contrast','update','FUNC','rUltB','0|3|4|2|5|','install\x20%2','eSKpy','MapTiltShi','TnZXV','parse','dznoF','qFzGD','setup','time','wQODQ','ZxsMX','nIggn','iltShiftFi','tEffectsCo','frfVx','DRKlX','tkEVE','zYLoB','VertAngle','shiftY','iQNGi','CHZUv','ertBrightn','return\x200','0|2|4|3|5|','currentGra','Gain','s.\x0aPlease\x20','EdqLh','ams','lorAdjustF','end','tileFocus','XblWa','Contrast','tings','1978498feZSiz','Saturate','QNsXN','iftFilter','MapGodray','ECTS_BASE_','CqSky','AdvancedBl','htEffectsA','visible','format','djustVertC','Game_Chara','ONLY','vHbMD','ettings','Scale','JanxM','MapBloom','Threshold','BloomChang','_realX','nmQSH','note','parameters','Lhovz','max','2|1|4|0|3|','JqzGT','match','lter','Wikoo','ltShiftFil','ager.','qITrC','on\x20does\x20no','VertSpeed','ertScale','jngGt','NqjMN','LHAtP','pNzAl','SAIhF','nnVoF','pdUgM','tOwRc','MSDyX','BattleTilt','whwcb','trast','WtXEw','fJlsJ','setupBrigh','fKLoq','htEffectsC','IOeWZ','le_start','1222352ShzwNR','_scene','brightness','ilters','nceScreenY','e\x20Plugin\x20M','tbqHK','OWtqN','_realY','htEffectsT','JYbWm','omSettings','mszUj','ttle','urFilter','Duration','JiEYB','ectsBloomV','\x20plugin\x20pl','pURhe','EEIJu','1|2|4|0|3','UPplT','1|6','NOWDb','exit','mEjVh','registerCo','SLdWi','fEKYp','ejwrf','BattleGodr','jLEfT','ngs','tEffectsBl','tsAdvBloom','ttingsBatt','HKmBy','anager.','ing\x20a\x20requ','Plugin\x20Man','SettingsBa','QWDUR','gIMDH','YgwvO','ARRAYSTR','AIILL','n.\x0aPlease\x20','mapCameraS','OrrFT','lODzL','tEffectsAd','urate','screenY','isSceneBat','loomSettin','Spriteset_','JSON','MapBaseFil','zQSpk','ectsAdvBlo','map','odrayFilte','_brightEff','dientBlur','troop','PtJvD','gain','eZuOp','4uHiZVS','TiltShiftC','TiltShiftR','hysZT','fptTG','ired\x20plugi','3|2|4|0|5|','10|4|9|13|','ColorAdjus','CUqhK','LJwmm','t\x20match\x20pl','dSTZM','ilter','ONsyE','DUaPF','rkGGj','lHkYQ','includes','tWrra','mwPSb','3|0|2','ARRAYNUM','wtpQv','gtEJK','rightEffec','uXUQe','omFilter','aturate','BlurChange','fJPkb','lJtyQ','IriOT','fblNO','locate','tsColorAdj','PCZjZ','PQEpO','WLana','tEffectsFi','djustHorzB','yspme','bmrLS','oomFilter','getBrightE','2|6|5|7|4|','\x20into\x20the\x20','CwAQc','rAdjustSet','currentSat','r_update','NDrbG','piBvu','tle','Settings','tsGodray','AtQew','lJtNv','4|7|5|6|1|','hange','filter','zSzzf','pkSFU','e\x20plugin\x20l','gradientBl','djustVertS','GodrayFilt','drayFilter','NUM','BattleBase','BRIGHT_EFF','AtVDY','call','XGaRk','jpdII','BlurReset','CRLAm','name','dsEMx','brightEffe','updateMapB','oNACM','epnDG','mbMIk','tileHeight','dCdQG','olorAdjust','yhZfH','lters','UhoxY','4|1|3|2|0','ZFJpi','sXCSl','xqAxz','ties','kNBpA','3352521agFcLE','Base_updat','EzsFg','Visible','aySettings','lacunarity','5|6|7','tEffectsTi','6|7|3|4|1','elBlur','QKvVg','allFilters','txJHD','ffectsTilt','ColorMatri','UbbBC','mapCameraF','_BrightEff','GodrayRese','lurFilter','hUbsM','SettingsMa','4|3|1|6|0|','Blur','zjiCQ','GradientBl','Giern','BgCwA','pmMVa','blur','ectsGodray','HorzAngle','e\x20it\x20in\x20th','currentBlu','sMap','width','vBloomFilt','ess','ffectsGodr','rMTDM','TWeyD','currentPix','nceTiltShi','UuWUs','4|1|0|3|2','aced\x20on\x20th','vggoe','Angle','11kzlzji','8|6|3|1|0','rVsfo','RQjrs','cterBase_l','XgCFE','createBrig','rQKVG','djustSetti','tUzvU','htEffectsG','cpxct','474720tQsqEU','JgYvU','tMJct','sodZN','FYUnu','oRzQf','NaPUt','angle','status','filters','eQSLX','djustHorzC','height','rightness','djustHorzS','VWXoB','INUhZ','VertLacuna','coRhu','NwojM','pNCIP','ectsColorA','srBLS','ShiftSetti','tgGGA','BloomReset','TiltShiftF','currentBri','ClYLL','STRUCT','MapColorAd','push','ertThresho','min','ghtness','iKyqm','mallest\x20to','HorzLacuna','ffectsColo','ocate','Lacunarity','orzThresho','cts','bloomScale','djustVertB','54IsRhaL','ectsBloomH','ngsBattle','tChange','jDPNw','just','Filter','Game_Playe','isSceneMap','puaUx','NXLdQ','lzcaI','mmand','getMapEnha','ftFilterY','6|1|12|0|1','ffectsBlur','ngsMap','yYOnc','BrightEffe','HorzGain','Dzkiw','RYtke','989960loAnJJ','enabled','ijxyh','%1\x20is\x20miss','Battle'];_0x1717=function(){return _0x42a8a7;};return _0x1717();}