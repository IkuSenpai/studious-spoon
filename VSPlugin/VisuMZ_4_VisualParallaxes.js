//=============================================================================
// VisuStella MZ - Visual Parallaxes
// VisuMZ_4_VisualParallaxes.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_VisualParallaxes = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualParallaxes = VisuMZ.VisualParallaxes || {};
VisuMZ.VisualParallaxes.version = 1.12;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.12] [VisualParallaxes]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Parallaxes_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * By default, RPG Maker MZ only allows each map to have one parallax. Such a
 * limit makes it difficult to create different layers of objects to portray
 * distance and the like. This plugin will remedy that by allowing you to add
 * an unlimited amount of parallaxes per map alongside many controls to make
 * the parallaxes more vivid.
 * 
 * A restricted parallax area system is also added to this plugin to make
 * parallaxes appear only within certain regions and/or terrain tags. This way,
 * you can utilize parallaxes as masked layers for water surfaces and the like.
 * 
 * To make the most out of this, with the tilesets are formatted properly,
 * reflective water and reflective solid surfaces are also new effects added
 * through this plugin. Water effects will show ripples while reflective solid
 * surfaces are static.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Add, change, and/or remove parallaxes through map notetags.
 * * Lots of customization options for each of the parallaxes.
 * * Limit where parallaxes can be displayed on the map through regions and/or
 *   terrain tags.
 * * Create reflective surfaces for water and solid ground as long as the
 *   tilesets have been formatted properly.
 * * Use Plugin Commands midway through the game to add, change, fade, and/or
 *   remove parallaxes as needed.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Recommended Plugin List ------
 *
 * * Pixi JS Filters*
 *
 * This plugin recommends the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You can use this plugin without
 * it, but there will be features missing.
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
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Parallaxes
 * 
 * The map editor's inherent parallax will remain untouched and unable to
 * utilize the extra features provided by this plugin. However, you can just
 * simply create a new parallax layer over it and hide it from view if needed.
 * 
 * Each of the parallaxes added through this plugin's notetags and/or commands
 * are assigned an ID. Referring back to the ID later will allow you to update
 * and/or remove that parallax when needed.
 * 
 * The new parallaxes are created on a separate layer from the map editor's
 * parallax and isn't included with the new parallaxes. Layers with higher ID's
 * will appear above layers with lower ID's.
 * 
 * However, other than that, all of the new parallaxes follow the same rules as
 * the map editor's parallax. This means that they will not appear above the
 * tile map and require transparent tiles to be seen. They will also scroll the
 * same way the original parallax does to provide consistency.
 *
 * ---
 * 
 * Regions and Terrain Tags
 * 
 * If you don't want a parallax to appear for the whole entire background and
 * want to confine them to certain areas of the map, you can assign regions or
 * terrain tags for them to appear in.
 * 
 * Only the parts of the map marked by the designated regions and/or terrain
 * tags will reveal the parallax. Those parts will be little squares each,
 * equal to the size of a tile. They have hard borders and do not have any
 * smoothing options in order to display the parallax tiles accurately.
 * 
 * Each parallax layer can have their own custom regions and/or terrain tags to
 * appear in. These can be adjusted through the notetag settings or through the
 * Plugin Commands provided by this plugin. Parallax layers can be limited to
 * multiple regions and/or terrain tags at the same time.
 * 
 * WARNING: This will cause longer load times on larger maps and affect their
 * performance. We highly recommend that you don't use this feature on maps
 * larger than 120 tiles wide or tall. However, this value can vary from device
 * to device.
 * 
 * ---
 * 
 * Reflections
 * 
 * In order to use reflections, you need to use tiles that are semi-transparent
 * or fully transparent. For example, water reflections need to come from tiles
 * that have been modified to be semi-transparent or fully transparent. If the
 * tile is completely opaque, the reflection will not show through. This rule
 * also applies to ground surfaces.
 * 
 * By default, water-based reflections are assigned the Terrain Tag 1 and solid
 * ground reflections are assigned the Terrain Tag 2. In order to make water
 * tiles show water reflections, you need to mark their tiles in the database's
 * tilesets with 1's. To mark reflective ground surfaces, mark them with 2's.
 * If the tiles are not tagged properly, the reflections will not be shown.
 * 
 * In the Plugin Parameters and notetags, you can decide if the reflections
 * will appear above the parallaxes or below them. By default, they will appear
 * above them. However, if you change them to appear below the parallaxes, then
 * pay attention to the opacity level of the parallaxes. If the parallaxes are
 * too opaque, you will barely see the reflection.
 * 
 * Once again, both water and ground tiles need to be semi-transparent or fully
 * transparent in order for reflections to be seen.
 * 
 * WARNING: This will cause longer load times on larger maps and affect their
 * performance. We highly recommend that you don't use this feature on maps
 * larger than 120 tiles wide or tall. However, this value can vary from device
 * to device.
 * 
 * ---
 * 
 * Not For Battle
 * 
 * For clarification, the VisuStella MZ Visual Parallaxes plugin is NOT made
 * for battle. There's a separate plugin for that called Visual Battle
 * Environment. The reason why parallaxes aren't made for battle is because the
 * way parallaxes are handled in map vary from how they would be handled in
 * battle. Using the Visual Parallax Plugin Commands will only alter the
 * parallax appearances when the player finishes battle.
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
 * Pixi JS Filters
 *
 * If the game project has Pixi JS Filters installed, then water reflections
 * will have a ripple effect. This is based off the Pixi JS ReflectionFilter
 * and will follow their rules. There are a couple of settings that can be
 * adjusted to customize the reflective properties.
 * 
 * Boundary: Vertical position of the reflection point, default is 50% (middle)
 * smaller numbers produce a larger reflection, larger numbers produce a
 * smaller reflection. This also means that reflections closer to the edges
 * will also have a different visual ripple effect than those towards the
 * middle of the reflection.
 * 
 * Amplitude: Starting and ending amplitude of waves allows you to control the
 * intensity of the reflection ripples. Use larger numbers for more intensity.
 * You have control over the values for the start and end values.
 * 
 * Wavelength: Starting and ending wavelength values determine the size of the
 * ripples for the reflection filter. Use larger numbers for larger wave sizes.
 * You have control over the values for the start and end values.
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
 * === Parallax-Related Notetags ===
 * 
 * ---
 *
 * <Parallax id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Parallax id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a regular parallax layer for this map by default.
 * - Replace 'id' with a number value to assign to the parallax.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no parallax will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a parallax found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 *
 * ---
 *
 * <Water Parallax id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Water Parallax id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a water-based parallax layer for this map by default.
 *   - This will utilize the water reflection properties and will only appear
 *     on water-marked regions and terrain tags.
 * - Replace 'id' with a number value to assign to the parallax.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no parallax will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a parallax found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 *
 * <Solid Parallax id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Solid Parallax id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a solid-based parallax layer for this map by default.
 *   - This will utilize the solid reflection properties and will only appear
 *     on solid-marked regions and terrain tags.
 * - Replace 'id' with a number value to assign to the parallax.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no parallax will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a parallax found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 * 
 * -=-=- Optional Properties -=-=-
 * 
 * Replace the 'optional property' segment of the notetags above with any of
 * the text below to acquire their effects. You can add/remove as many of the
 * optional properties as you need.
 * 
 * ---
 * 
 * Horz Scroll: x
 * Vert Scroll: y
 * 
 * - This enables horizontal or vertical scrolling for the parallax.
 * - Replace 'x' or 'y' with a Number value to determine how fast they will
 *   scroll across the screen.
 * - Use a negative value to make them scroll the other way.
 * - These effects are mutually exclusive from the "Map Locked" property.
 * 
 * ---
 * 
 * Map Locked
 * 
 * - This will cause the parallax to only scroll when the map scrolls.
 * - This has the same effect as naming a parallax with "!" in front of
 *   its filename.
 * - If the filename used for this parallax has "!" in front of it, the
 *   Map Locked effect will be automatically turned on.
 * - These effect is mutually exclusive from the "Horz Scroll" and
 *   "Vert Scroll" properties.
 * 
 * ---
 * 
 * Opacity: x
 * Opacity: x%
 * 
 * - Changes the opacity level of the parallax.
 * - Replace 'x' with a number from 0 to 255 representing the opacity level.
 * - Replace 'x%' with a percentage from 0% to 100% representing the opacity.
 * 
 * ---
 * 
 * Blend Mode: Normal
 * Blend Mode: Additive
 * Blend Mode: Multiply
 * Blend Mode: Screen
 * 
 * - Sets the blend mode for the icon on the parallax.
 * - Use only one of the above.
 * 
 * ---
 * 
 * Hue: x
 * Hue Shift: x
 * 
 * - Changes the hue of the parallax to 'x' so that you don't need to create
 *   multiple copies of the files with different colors.
 * - Replace 'x' with a number value between 0 and 360.
 * - If the "Hue Shift" property is also used, then adjust the hue of the
 *   parallax each frame by 'x' amount.
 *   - 'x' can be positive or negative.
 * 
 * ---
 * 
 * Color Tone: red, green, blue, gray
 * 
 * - Changes the color tone or tint of the parallax.
 * - Replace 'red', 'green', 'blue' with a value between -255 and 255.
 * - Replace 'gray' with a value between 0 and 255.
 * 
 * ---
 * 
 * Region: id
 * Regions: id, id, id
 * 
 * - Forces the parallax to only become visible on tiles marked regions with a
 *   matching ID (alongside valid terrain tags).
 * - If this isn't used, then the parallax will be as large as the screen.
 * - Replace 'id' with a region ID between 1 and 255.
 *   - Region 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - WARNING: This WILL cause longer load times on larger maps.
 * 
 * ---
 * 
 * Terrain Tag: id
 * Terrain Tags: id, id, id
 * 
 * - Forces the parallax to only become visible on tiles marked terrain tags
 *   with a matching ID (alongside valid regions).
 * - If this isn't used, then the parallax will be as large as the screen.
 * - Replace 'id' with a terrain tag ID between 1 and 7.
 *   - Terrain tag 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - WARNING: This WILL cause longer load times on larger maps.
 * 
 * ---
 * 
 * === Event Reflection-Related Notetags ===
 * 
 * ---
 *
 * <No Reflection>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - This will cause the event to not show any reflection on reflective tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Reflection-Related Notetags ===
 * 
 * In order to use reflections, you need to use tiles that are semi-transparent
 * or fully transparent. For example, water reflections need to come from tiles
 * that have been modified to be semi-transparent or fully transparent. If the
 * tile is completely opaque, the reflection will not show through. This rule
 * also applies to ground surfaces.
 * 
 * ---
 *
 * <Water Reflection Region: id>
 * <Water Reflection Regions: id, id, id>
 *
 * <Solid Reflection Region: id>
 * <Solid Reflection Regions: id, id, id>
 *
 * - Used for: Map Notetags
 * - Sets the tiles marked by the region ID's to become reflective.
 * - This will override the Plugin Parameter settings for this map.
 *   - This does not add upon them.
 * - Replace 'id' with a region ID between 1 and 255.
 *   - Region 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 *
 * <Water Reflection Terrain Tag: id>
 * <Water Reflection Terrain Tags: id, id, id>
 *
 * <Solid Reflection Terrain Tag: id>
 * <Solid Reflection Terrain Tags: id, id, id>
 *
 * - Used for: Map Notetags
 * - Sets the tiles marked by the terrain tag ID's to become reflective.
 * - This will override the Plugin Parameter settings for this map.
 *   - This does not add upon them.
 * - Replace 'id' with a terrain tag ID between 1 and 7.
 *   - Terrain Tag 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 * 
 * <No Reflections>
 * 
 * - Used for: Map Notetags
 * - Disable water and map reflections on the current map.
 * 
 * ---
 *
 * <Water Reflection Top>
 * <Water Reflection Bottom>
 *
 * <Solid Reflection Top>
 * <Solid Reflection Bottom>
 *
 * - Used for: Map Notetags
 * - This will put the reflection layer either above all of the newly added
 *   parallaxes or below them.
 *   - If placed below, the reflection layer will not appear below the map
 *     editor's parallax layer.
 *   - If you change them to appear below the parallaxes, then pay attention to
 *     the opacity level of the parallaxes. If the parallaxes are too opaque,
 *     you will barely see the reflection.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 *
 * ---
 *
 * <Water Reflection Blur: x>
 * 
 * <Solid Reflection Blur: x>
 *
 * - Used for: Map Notetags
 * - Changes how much the water/solid tiles will blur the reflection for
 *   this map.
 * - Replace 'x' with a decimal Number value. Use a number between 0 and 1 for
 *   the best results.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 *
 * ---
 *
 * <Water Reflection Opacity: x>
 * <Water Reflection Opacity: x%>
 * 
 * <Solid Reflection Opacity: x>
 * <Solid Reflection Opacity: x%>
 *
 * - Used for: Map Notetags
 * - Changes the opacity level of the tile's reflection.
 * - Replace 'x' with a number from 0 to 255 representing the opacity level.
 * - Replace 'x%' with a percentage from 0% to 100% representing the opacity.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 *
 * ---
 * 
 * <Water Reflection Boundary: x>
 *
 * <Water Reflection Amplitude: start, end>
 * 
 * <Water Reflection Wavelength: start, end>
 *
 * - Used for: Map Notetags
 * - Requires Pixi JS Filters installed for the game project.
 * - These settings adjust the water reflection's ripple intensity.
 * - Replace Boundary's 'x' with a number value between 0 and 1.
 *   - Vertical position of the reflection point, default is 50% (middle)
 *     smaller numbers produce a larger reflection, larger numbers produce a
 *     smaller reflection. This also means that reflections closer to the edges
 *     will also have a different visual ripple effect than those towards the
 *     middle of the reflection.
 * - Replace Amplitude's 'start' and 'end' with number values representing how
 *   much to alter the intensity by.
 *   - Starting and ending amplitude of waves allows you to control the
 *     intensity of the reflection ripples.
 *   - Use larger numbers for more intensity.
 * - Replace Wavelength's 'start' and 'end' with number values representing the
 *   wave size.
 *   - Starting and ending wavelength values determine the size of the ripples
 *     for the reflection filter.
 *   - Use larger numbers for larger wave sizes.
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
 * === Parallax Plugin Commands ===
 * 
 * ---
 *
 * Parallax: Add/Change Settings
 * - Add/Change settings for target parallax.
 * - Does not alter the map editor's parallax.
 *
 *   Required:
 *
 *     ID:
 *     - What is the ID of this parallax to be added/changed?
 *
 *     Filename:
 *     - What is the filename of the parallax?
 *
 *     Type:
 *     - What kind of parallax is this going to be?
 *     - Normal
 *     - Water
 *     - Solid
 * 
 *   Optional Settings:
 * 
 *     Scrolling:
 *
 *       Map Lock?:
 *       - Lock the parallax to the map's scrolling?
 *       - Automatically enable if the filename starts with "!"
 *
 *       Loop Horizontally?:
 *       - Loop the parallax horizontally?
 *       - Does not work with Map Lock enabled.
 *
 *         Scroll:
 *         - What is the horizontal scroll speed?
 *         - Use a negative value to invert the direction.
 *
 *       Loop Vertically?:
 *       - Loop the parallax vertically?
 *       - Does not work with Map Lock enabled.
 *
 *         Scroll:
 *         - What is the vertical scroll speed?
 *         - Use a negative value to invert the direction.
 * 
 *     Appearance:
 *
 *       Opacity:
 *       - What is the opacity level for this parallax?
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the parallax?
 *       - You may use JavaScript code.
 *         - Normal
 *         - Additive
 *         - Multiply
 *         - Screen
 *
 *       Hue:
 *       - Do you wish to adjust this parallax's hue?
 *       - You may use JavaScript code.
 *
 *       Hue Shift:
 *       - How much do you want the hue to shift each frame?
 *       - You may use JavaScript code.
 *
 *       Color Tone:
 *       - What tone do you want for the parallax?
 *       - Format: [Red, Green, Blue, Gray]
 * 
 *     Location:
 *
 *       Regions:
 *       - Which regions will show this parallax?
 *       - Does not work with 0. Leave empty to ignore.
 *
 *       Terrain Tags:
 *       - Which terrain tags will show this parallax?
 *       - Does not work with 0. Leave empty to ignore.
 *
 * ---
 * 
 * Parallax: Fade Opacity
 * - Fades the target parallax(es) opacity to a different value.
 * 
 *   ID(s):
 *   - Target which parallax(es)?
 *   - Cannot target the map editor's parallax.
 * 
 *   Target Opacity:
 *   - What opacity level to this value (0-255).
 *   - You may use JavaScript code to determine the value.
 * 
 *   Duration:
 *   - How many frames should this change take?
 *   - You may use JavaScript code to determine the value.
 * 
 * ---
 *
 * Parallax: Remove
 * - Removes target parallax(es).
 *
 *   ID(s):
 *   - Remove which parallax(es)?
 *   - Cannot remove the map editor's parallax.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Water Reflection Settings
 * ============================================================================
 *
 * These are the default settings for water-based reflections.
 *
 * ---
 *
 * Markers
 * 
 *   Regions:
 *   - By default, which regions by default apply this reflection?
 *   - 0 is ignored.
 * 
 *   Terrain Tags:
 *   - By default, which terrain tags by default apply this reflection?
 *   - 0 is ignored.
 *
 * ---
 *
 * Positioning
 * 
 *   Above Parallaxes?:
 *   - Place water reflections above visual parallaxes?
 *
 * ---
 *
 * Appearance
 * 
 *   Blur Rate:
 *   - How much do you wish to blur this reflection?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Opacity:
 *   - What is the default opacity for this reflection?
 *   - Use a value between 0 and 255.
 * 
 *   Water Boundary:
 *   - At which point is the water boundary?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Amplitude Start:
 *   - What should be the starting amplitude value?
 * 
 *   Amplitude End:
 *   - What should be the ending amplitude value?
 * 
 *   Wavelength Start:
 *   - What should be the starting wavelength value?
 * 
 *   Wavelength End:
 *   - What should be the ending wavelength value?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Solid Reflection Settings
 * ============================================================================
 *
 * These are the default settings for solid ground reflections.
 *
 * ---
 *
 * Markers
 * 
 *   Regions:
 *   - By default, which regions by default apply this reflection?
 *   - 0 is ignored.
 * 
 *   Terrain Tags:
 *   - By default, which terrain tags by default apply this reflection?
 *   - 0 is ignored.
 *
 * ---
 *
 * Positioning
 * 
 *   Above Parallaxes?:
 *   - Place water reflections above visual parallaxes?
 *
 * ---
 *
 * Appearance
 * 
 *   Blur Rate:
 *   - How much do you wish to blur this reflection?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Opacity:
 *   - What is the default opacity for this reflection?
 *   - Use a value between 0 and 255.
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
 * Version 1.12: July 18, 2024
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * ** Uses a better algorithm to determine terrain tags.
 * 
 * Version 1.11: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where having a '!' at the start of a parallax file's name
 *    did not automatically incur map lock when done from plugin commands.
 *    Fix made by Arisu.
 * 
 * Version 1.10: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.09: August 17, 2023
 * * Bug Fixes!
 * ** Fixed an error that would cause a crash upon using the "Return to Title
 *    Screen" event command with the "Event Title Screen" plugin installed. Fix
 *    made by Irina.
 * 
 * Version 1.08: May 18, 2023
 * * Bug Fixes!
 * ** Reflections should now work properly with VisuMZ_1_EventsMoveCore's
 *    latest version. Fix made by Arisu.
 * 
 * Version 1.07: August 4, 2022
 * * Compatibility Update!
 * ** Map Locked parallaxes now work better with smooth scroll.
 * 
 * Version 1.06: July 7, 2022
 * * Feature Update!
 * ** Blend modes are now revamped for the parallaxes to behave more like they
 *    do for pictures for better accuracy. Update made by Irina.
 * 
 * Version 1.05: January 27, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.04: January 6, 2022
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.03: December 9, 2021
 * * Documentation Update!
 * ** Added section to "Major Changes" for clarification purposes:
 * *** Not For Battle
 * *** For clarification, the VisuStella MZ Visual Parallxes plugin is NOT made
 *     for battle. There's a separate plugin for that called Visual Battle
 *     Environment. The reason why parallaxes aren't made for battle is because
 *     the way parallaxes are handled in map vary from how they would be
 *     handled in battle. Using the Visual Parallaxes Plugin Commands will only
 *     alter the parallax appearances when the player finishes battle.
 * * Feature Update!
 * ** Added fail safes to prevent Plugin Command usage during battle to cause
 *    problems while inside battle test. Update made by Irina.
 * 
 * Version 1.02: June 25, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for Event Title Scene.
 * 
 * Version 1.01: May 28, 2021
 * * Feature Update!
 * ** Fail safe added for those without Pixi JS Filters added.
 * ** Removed the VisuStella MZ Core Engine requirement.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 *
 * Version 1.00 Official Release Date: March 12, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ParallaxAddChangeSettings
 * @text Parallax: Add/Change Settings
 * @desc Add/Change settings for target parallax.
 * Does not alter the map editor's parallax.
 * 
 * @arg Required
 *
 * @arg id:num
 * @text ID
 * @parent Required
 * @type number
 * @min 1
 * @desc What is the ID of this parallax to be added/changed?
 * @default 1
 *
 * @arg filename:str
 * @text Filename
 * @parent Required
 * @type file
 * @dir img/parallaxes/
 * @desc What is the filename of the parallax?
 * @default >>>ATTENTION<<<
 *
 * @arg type:str
 * @text Type
 * @parent Required
 * @type select
 * @option Normal
 * @value normal
 * @option Water
 * @value water
 * @option Solid
 * @value solid
 * @desc What kind of parallax is this going to be?
 * @default normal
 *
 * @arg Optional:struct
 * @text Optional Settings
 * @type struct<Optional>
 * @desc Optional settings regarding Visual Parallaxes.
 * @default {"Scrolling":"","_parallaxZero:eval":"false","_parallaxLoopX:eval":"false","_parallaxSx:eval":"+0","_parallaxLoopY:eval":"false","_parallaxSy:eval":"+0","Appearance":"","opacity:eval":"255","blendMode:eval":"0","hue:eval":"0","hueShift:eval":"+0","colorTone:eval":"[0, 0, 0, 0]","Location":"","maskRegions:arraynum":"[]","maskTerrainTags:arraynum":"[]"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ParallaxFadeOpacity
 * @text Parallax: Fade Opacity
 * @desc Fades the target parallax(es) opacity to a different value.
 *
 * @arg list:arraynum
 * @text ID(s)
 * @type number[]
 * @min 1
 * @desc Target which parallax(es)?
 * Cannot target the map editor's parallax.
 * @default ["1"]
 *
 * @arg targetOpacity:eval
 * @text Target Opacity
 * @desc What opacity level to this value (0-255).
 * You may use JavaScript code to determine the value.
 * @default 255
 *
 * @arg opacityDuration:eval
 * @text Duration
 * @desc How many frames should this change take?
 * You may use JavaScript code to determine the value.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ParallaxRemove
 * @text Parallax: Remove
 * @desc Removes target parallax(es).
 *
 * @arg list:arraynum
 * @text ID(s)
 * @type number[]
 * @min 1
 * @desc Remove which parallax(es)?
 * Cannot remove the map editor's parallax.
 * @default ["1"]
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
 * @param VisualParallaxes
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param WaterReflect:struct
 * @text Water Reflection Settings
 * @type struct<WaterReflect>
 * @desc These are the default settings for water-based reflections.
 * @default {"Markers":"","Regions:arraynum":"[]","TerrainTags:arraynum":"[\"1\"]","Positioning":"","Top:eval":"true","Appearance":"","Blur:num":"0.8","Opacity:num":"128","Boundary:num":"0.1","AmpStart:num":"2","AmpEnd:num":"4","WaveStart:num":"4","WaveEnd:num":"16"}
 *
 * @param SolidReflect:struct
 * @text Solid Reflection Settings
 * @type struct<SolidReflect>
 * @desc These are the default settings for solid ground reflections.
 * @default {"Markers":"","Regions:arraynum":"[]","TerrainTags:arraynum":"[\"2\"]","Positioning":"","Top:eval":"true","Appearance":"","Blur:num":"0.8","Opacity:num":"128"}
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
 * Water Reflection Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WaterReflect:
 *
 * @param Markers
 *
 * @param Regions:arraynum
 * @text Regions
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 255
 * @desc By default, which regions by default apply this reflection? 0 is ignored.
 * @default []
 *
 * @param TerrainTags:arraynum
 * @text Terrain Tags
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 7
 * @desc By default, which terrain tags by default apply this reflection? 0 is ignored.
 * @default ["1"]
 * 
 * @param Positioning
 * 
 * @param Top:eval
 * @text Above Parallaxes?
 * @parent Positioning
 * @type boolean
 * @on Above Parallaxes
 * @off Below Parallaxes
 * @desc Place water reflections above visual parallaxes?
 * @default true
 * 
 * @param Appearance
 *
 * @param Blur:num
 * @text Blur Rate
 * @parent Appearance
 * @desc How much do you wish to blur this reflection?
 * Use a decimal number between 0 and 1.
 * @default 0.8
 *
 * @param Opacity:num
 * @text Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What is the default opacity for this reflection?
 * Use a value between 0 and 255.
 * @default 128
 *
 * @param Boundary:num
 * @text Water Boundary
 * @parent Appearance
 * @desc At which point is the water boundary?
 * Use a decimal number between 0 and 1.
 * @default 0.1
 *
 * @param AmpStart:num
 * @text Amplitude Start
 * @parent Appearance
 * @type number
 * @desc What should be the starting amplitude value?
 * @default 2
 *
 * @param AmpEnd:num
 * @text Amplitude End
 * @parent Appearance
 * @type number
 * @desc What should be the ending amplitude value?
 * @default 4
 *
 * @param WaveStart:num
 * @text Wavelength Start
 * @parent Appearance
 * @type number
 * @desc What should be the starting wavelength value?
 * @default 4
 *
 * @param WaveEnd:num
 * @text Wavelength End
 * @parent Appearance
 * @type number
 * @desc What should be the ending wavelength value?
 * @default 16
 *
 */
/* ----------------------------------------------------------------------------
 * Solid Reflection Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SolidReflect:
 *
 * @param Markers
 *
 * @param Regions:arraynum
 * @text Regions
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 255
 * @desc By default, which regions by default apply this reflection? 0 is ignored.
 * @default []
 *
 * @param TerrainTags:arraynum
 * @text Terrain Tags
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 7
 * @desc By default, which terrain tags by default apply this reflection? 0 is ignored.
 * @default ["2"]
 * 
 * @param Positioning
 * 
 * @param Top:eval
 * @text Above Parallaxes?
 * @parent Positioning
 * @type boolean
 * @on Above Parallaxes
 * @off Below Parallaxes
 * @desc Place solid reflections above visual parallaxes?
 * @default true
 * 
 * @param Appearance
 *
 * @param Blur:num
 * @text Blur Rate
 * @parent Appearance
 * @desc How much do you wish to blur this reflection?
 * Use a decimal number between 0 and 1.
 * @default 0.8
 *
 * @param Opacity:num
 * @text Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What is the default opacity for this reflection?
 * Use a value between 0 and 255.
 * @default 128
 *
 */
/* ----------------------------------------------------------------------------
 * Optional Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Optional:
 * 
 * @param Scrolling
 * 
 * @param _parallaxZero:eval
 * @text Map Lock?
 * @parent Scrolling
 * @type boolean
 * @on Map Lock
 * @off No Map Lock
 * @desc Lock the parallax to the map's scrolling?
 * Automatically enable if the filename starts with "!"
 * @default false
 * 
 * @param _parallaxLoopX:eval
 * @text Loop Horizontally?
 * @parent Scrolling
 * @type boolean
 * @on Loop
 * @off No Loop
 * @desc Loop the parallax horizontally?
 * Does not work with Map Lock enabled.
 * @default false
 *
 * @param _parallaxSx:eval
 * @text Scroll:
 * @parent _parallaxLoopX:eval
 * @desc What is the horizontal scroll speed?
 * Use a negative value to invert the direction.
 * @default +0
 * 
 * @param _parallaxLoopY:eval
 * @text Loop Vertically?
 * @parent Scrolling
 * @type boolean
 * @on Loop
 * @off No Loop
 * @desc Loop the parallax horizontally?
 * Does not work with Map Lock enabled.
 * @default false
 *
 * @param _parallaxSy:eval
 * @text Scroll:
 * @parent _parallaxLoopY:eval
 * @desc What is the vertical scroll speed?
 * Use a negative value to invert the direction.
 * @default +0
 * 
 * @param Appearance
 *
 * @param opacity:eval
 * @text Opacity
 * @parent Appearance
 * @desc What is the opacity level for this parallax?
 * You may use JavaScript code.
 * @default 255
 *
 * @param blendMode:eval
 * @text Blend Mode
 * @parent Appearance
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the parallax?
 * You may use JavaScript code.
 * @default 0
 *
 * @param hue:eval
 * @text Hue
 * @parent Appearance
 * @desc Do you wish to adjust this parallax's hue?
 * You may use JavaScript code.
 * @default 0
 *
 * @param hueShift:eval
 * @text Hue Shift
 * @parent hue:eval
 * @desc How much do you want the hue to shift each frame?
 * You may use JavaScript code.
 * @default +0
 *
 * @param colorTone:eval
 * @text Color Tone
 * @parent Appearance
 * @desc What tone do you want for the parallax?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 * 
 * @param Location
 *
 * @param maskRegions:arraynum
 * @text Regions
 * @parent Location
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which regions will show this parallax?
 * Does not work with 0. Leave empty to ignore.
 * @default []
 *
 * @param maskTerrainTags:arraynum
 * @text Terrain Tags
 * @parent Location
 * @type number[]
 * @min 1
 * @max 7
 * @desc Which terrain tags will show this parallax?
 * Does not work with 0. Leave empty to ignore.
 * @default []
 *
 */
//=============================================================================

const _0x563cb5=_0x4512;(function(_0x5365c2,_0x42f4ee){const _0x1ec7ef=_0x4512,_0xf6a597=_0x5365c2();while(!![]){try{const _0x476eaa=parseInt(_0x1ec7ef(0x223))/0x1+-parseInt(_0x1ec7ef(0x1a1))/0x2*(-parseInt(_0x1ec7ef(0x238))/0x3)+-parseInt(_0x1ec7ef(0x1ea))/0x4+parseInt(_0x1ec7ef(0x1d2))/0x5+-parseInt(_0x1ec7ef(0x161))/0x6*(parseInt(_0x1ec7ef(0x193))/0x7)+parseInt(_0x1ec7ef(0x162))/0x8+parseInt(_0x1ec7ef(0x181))/0x9*(parseInt(_0x1ec7ef(0x1e1))/0xa);if(_0x476eaa===_0x42f4ee)break;else _0xf6a597['push'](_0xf6a597['shift']());}catch(_0x587760){_0xf6a597['push'](_0xf6a597['shift']());}}}(_0x287a,0xe0445));var label='VisualParallaxes',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x563cb5(0x19c)](function(_0x3b869b){const _0x2f71eb=_0x563cb5;return _0x3b869b[_0x2f71eb(0x1a6)]&&_0x3b869b['description'][_0x2f71eb(0x194)]('['+label+']');})[0x0];VisuMZ[label][_0x563cb5(0x232)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x563cb5(0x1fc)]=function(_0x514f6d,_0x5820c2){const _0x634484=_0x563cb5;for(const _0x130547 in _0x5820c2){if(_0x130547[_0x634484(0x125)](/(.*):(.*)/i)){const _0x3861b6=String(RegExp['$1']),_0x4d8cb8=String(RegExp['$2'])[_0x634484(0x13c)]()['trim']();let _0x3435d7,_0x128851,_0x1664e5;switch(_0x4d8cb8){case _0x634484(0x135):_0x3435d7=_0x5820c2[_0x130547]!==''?Number(_0x5820c2[_0x130547]):0x0;break;case _0x634484(0x11e):_0x128851=_0x5820c2[_0x130547]!==''?JSON[_0x634484(0x18b)](_0x5820c2[_0x130547]):[],_0x3435d7=_0x128851[_0x634484(0x234)](_0x8066d5=>Number(_0x8066d5));break;case'EVAL':_0x3435d7=_0x5820c2[_0x130547]!==''?eval(_0x5820c2[_0x130547]):null;break;case _0x634484(0x1ff):_0x128851=_0x5820c2[_0x130547]!==''?JSON['parse'](_0x5820c2[_0x130547]):[],_0x3435d7=_0x128851[_0x634484(0x234)](_0x4b157f=>eval(_0x4b157f));break;case _0x634484(0x204):_0x3435d7=_0x5820c2[_0x130547]!==''?JSON[_0x634484(0x18b)](_0x5820c2[_0x130547]):'';break;case _0x634484(0x1bc):_0x128851=_0x5820c2[_0x130547]!==''?JSON[_0x634484(0x18b)](_0x5820c2[_0x130547]):[],_0x3435d7=_0x128851[_0x634484(0x234)](_0x386357=>JSON['parse'](_0x386357));break;case _0x634484(0x219):_0x3435d7=_0x5820c2[_0x130547]!==''?new Function(JSON[_0x634484(0x18b)](_0x5820c2[_0x130547])):new Function('return\x200');break;case _0x634484(0x170):_0x128851=_0x5820c2[_0x130547]!==''?JSON[_0x634484(0x18b)](_0x5820c2[_0x130547]):[],_0x3435d7=_0x128851['map'](_0x1a3d81=>new Function(JSON[_0x634484(0x18b)](_0x1a3d81)));break;case _0x634484(0x19a):_0x3435d7=_0x5820c2[_0x130547]!==''?String(_0x5820c2[_0x130547]):'';break;case _0x634484(0x12e):_0x128851=_0x5820c2[_0x130547]!==''?JSON[_0x634484(0x18b)](_0x5820c2[_0x130547]):[],_0x3435d7=_0x128851[_0x634484(0x234)](_0x1146c3=>String(_0x1146c3));break;case _0x634484(0x154):_0x1664e5=_0x5820c2[_0x130547]!==''?JSON[_0x634484(0x18b)](_0x5820c2[_0x130547]):{},_0x3435d7=VisuMZ[_0x634484(0x1fc)]({},_0x1664e5);break;case _0x634484(0x169):_0x128851=_0x5820c2[_0x130547]!==''?JSON[_0x634484(0x18b)](_0x5820c2[_0x130547]):[],_0x3435d7=_0x128851[_0x634484(0x234)](_0x4fe93e=>VisuMZ[_0x634484(0x1fc)]({},JSON[_0x634484(0x18b)](_0x4fe93e)));break;default:continue;}_0x514f6d[_0x3861b6]=_0x3435d7;}}return _0x514f6d;},(_0x420552=>{const _0x2c3f0c=_0x563cb5,_0x1130a4=_0x420552[_0x2c3f0c(0x148)];for(const _0x13d4fb of dependencies){if(!Imported[_0x13d4fb]){alert(_0x2c3f0c(0x1c7)[_0x2c3f0c(0x1e7)](_0x1130a4,_0x13d4fb)),SceneManager[_0x2c3f0c(0x1d5)]();break;}}const _0x5cd84=_0x420552[_0x2c3f0c(0x1df)];if(_0x5cd84[_0x2c3f0c(0x125)](/\[Version[ ](.*?)\]/i)){const _0x46b247=Number(RegExp['$1']);_0x46b247!==VisuMZ[label]['version']&&(alert(_0x2c3f0c(0x1ab)[_0x2c3f0c(0x1e7)](_0x1130a4,_0x46b247)),SceneManager[_0x2c3f0c(0x1d5)]());}if(_0x5cd84['match'](/\[Tier[ ](\d+)\]/i)){const _0x324b83=Number(RegExp['$1']);_0x324b83<tier?(alert(_0x2c3f0c(0x164)[_0x2c3f0c(0x1e7)](_0x1130a4,_0x324b83,tier)),SceneManager[_0x2c3f0c(0x1d5)]()):tier=Math[_0x2c3f0c(0x1cd)](_0x324b83,tier);}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x420552['parameters']);})(pluginData),VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x15d)]=function(){return{'id':0x0,'filename':'','_parallaxZero':![],'_parallaxLoopX':![],'_parallaxLoopY':![],'_parallaxSx':0x0,'_parallaxSy':0x0,'_parallaxX':0x0,'_parallaxY':0x0,'opacity':0xff,'targetOpacity':0xff,'opacityDuration':0x0,'blendMode':0x0,'hue':0x0,'hueShift':0x0,'colorTone':[0x0,0x0,0x0,0x0],'maskRegions':[],'maskTerrainTags':[]};},PluginManager[_0x563cb5(0x1aa)](pluginData[_0x563cb5(0x148)],_0x563cb5(0x207),_0x2e8c41=>{const _0x2e2b73=_0x563cb5;VisuMZ[_0x2e2b73(0x1fc)](_0x2e8c41,_0x2e8c41);if(_0x2e8c41['id']<=0x0)return;if(_0x2e8c41[_0x2e2b73(0x1c3)]===''||_0x2e8c41['filename']===_0x2e2b73(0x165))return;let _0x2c7e9e=JsonEx[_0x2e2b73(0x1a4)](_0x2e8c41['Optional']);if(!_0x2c7e9e[_0x2e2b73(0x1d7)](_0x2e2b73(0x19e)))_0x2c7e9e=VisuMZ['VisualParallaxes'][_0x2e2b73(0x15d)]();_0x2c7e9e['filename']=_0x2e8c41[_0x2e2b73(0x1c3)],_0x2c7e9e['id']=_0x2e8c41['id'];_0x2e8c41[_0x2e2b73(0x1f5)]===_0x2e2b73(0x158)&&(_0x2c7e9e[_0x2e2b73(0x19e)][_0x2e2b73(0x22b)]<=0x0&&(_0x2c7e9e[_0x2e2b73(0x19e)]=JsonEx[_0x2e2b73(0x1a4)]($gameMap[_0x2e2b73(0x235)]())),_0x2c7e9e[_0x2e2b73(0x12d)][_0x2e2b73(0x22b)]<=0x0&&(_0x2c7e9e[_0x2e2b73(0x12d)]=JsonEx[_0x2e2b73(0x1a4)]($gameMap['getWaterReflectionTerrainTags']())));_0x2e8c41['type']===_0x2e2b73(0x212)&&(_0x2c7e9e[_0x2e2b73(0x19e)][_0x2e2b73(0x22b)]<=0x0&&(_0x2c7e9e['maskRegions']=JsonEx['makeDeepCopy']($gameMap[_0x2e2b73(0x1e4)]())),_0x2c7e9e['maskTerrainTags']['length']<=0x0&&(_0x2c7e9e[_0x2e2b73(0x12d)]=JsonEx[_0x2e2b73(0x1a4)]($gameMap[_0x2e2b73(0x205)]())));while(_0x2c7e9e[_0x2e2b73(0x19d)][_0x2e2b73(0x22b)]<0x4){_0x2c7e9e[_0x2e2b73(0x19d)]['push'](0x0);}_0x2c7e9e[_0x2e2b73(0x21f)]=0x0,_0x2c7e9e[_0x2e2b73(0x1d1)]=0x0,_0x2c7e9e[_0x2e2b73(0x14d)]=_0x2e8c41['opacity'],_0x2c7e9e['opacityDuration']=0x0,$gameMap['addChangeVisualParallax'](_0x2c7e9e);}),PluginManager[_0x563cb5(0x1aa)](pluginData[_0x563cb5(0x148)],_0x563cb5(0x206),_0x2ff99b=>{const _0x5ff734=_0x563cb5;if(!SceneManager[_0x5ff734(0x1a2)]())return;VisuMZ[_0x5ff734(0x1fc)](_0x2ff99b,_0x2ff99b);const _0x57e16d=_0x2ff99b[_0x5ff734(0x1a5)];for(const _0x4155da of _0x57e16d){const _0x4216d8=$gameMap[_0x5ff734(0x163)](_0x4155da);if(!_0x4216d8)continue;_0x4216d8[_0x5ff734(0x14d)]=_0x2ff99b[_0x5ff734(0x14d)]||0x0,_0x4216d8['opacityDuration']=_0x2ff99b['opacityDuration']||0x0,_0x4216d8[_0x5ff734(0x228)]<=0x0&&(_0x4216d8['opacity']=_0x4216d8[_0x5ff734(0x14d)]);}}),PluginManager[_0x563cb5(0x1aa)](pluginData[_0x563cb5(0x148)],_0x563cb5(0x134),_0x51f608=>{const _0x4970ae=_0x563cb5;if(!SceneManager[_0x4970ae(0x1a2)]())return;VisuMZ[_0x4970ae(0x1fc)](_0x51f608,_0x51f608);const _0x13e378=_0x51f608['list'];for(const _0x405378 of _0x13e378){$gameMap[_0x4970ae(0x1c1)](_0x405378);}}),VisuMZ[_0x563cb5(0x233)]['RegExp']={'Start':/<(?:PARALLAX|WATER PARALLAX|SOLID PARALLAX)[ ](\d+)[ ](?:SETTING|SETTINGS)>/i,'End':/<\/(?:PARALLAX|WATER PARALLAX|SOLID PARALLAX)[ ](\d+)[ ](?:SETTING|SETTINGS)>/i,'Filename':/(?:FILENAME|NAME):[ ](.*)/i,'HorzLoop':/(?:HORZ|HORIZONTAL) (?:LOOP|SCROLL):[ ](.*)/i,'VertLoop':/(?:VERT|VERTICAL) (?:LOOP|SCROLL):[ ](.*)/i,'ScrollLock':/<(?:MAP|SCROLL)[ ](?:LOCK|LOCKED)>/i,'OpacityRate':/(?:OPACITY):[ ](\d+)([%％])/i,'OpacityFlat':/(?:OPACITY):[ ](\d+)/i,'BlendMode':/BLEND MODE:[ ](.*)/i,'Hue':/HUE:[ ](\d+)/i,'HueShift':/HUE (?:SHIFT|SPEED):[ ](.*)/i,'Tone':/(?:COLOR TONE|TONE|TINT):[ ](.*)/i,'MaskRegions':/(?:REGION|REGIONS):[ ](.*)/i,'MaskTerrainTags':/TERRAIN (?:TAG|TAGS):[ ](.*)/i,'WaterRegions':/<(?:WATER|WATER REFLECT|WATER REFLECTION) (?:REGION|REGIONS):[ ](.*)>/i,'WaterTerrainTags':/<(?:WATER|WATER REFLECT|WATER REFLECTION) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'WaterTop':/<(?:WATER|WATER REFLECT|WATER REFLECTION) TOP>/i,'WaterBottom':/<(?:WATER|WATER REFLECT|WATER REFLECTION) BOTTOM>/i,'WaterBlur':/<(?:WATER|WATER REFLECT|WATER REFLECTION) BLUR:[ ](.*)>/i,'WaterOpacityRate':/<(?:WATER|WATER REFLECT|WATER REFLECTION) OPACITY:[ ](\d+)([%％])>/i,'WaterOpacityFlat':/<(?:WATER|WATER REFLECT|WATER REFLECTION) OPACITY:[ ](\d+)>/i,'WaterBoundary':/<(?:WATER|WATER REFLECT|WATER REFLECTION) BOUNDARY:[ ](.*)>/i,'WaterAmplitude':/<(?:WATER|WATER REFLECT|WATER REFLECTION) (?:AMP|AMPLITUDE):[ ](.*)>/i,'WaterWavelength':/<(?:WATER|WATER REFLECT|WATER REFLECTION) (?:WAVE|WAVELENGTH):[ ](.*)>/i,'SolidRegions':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) (?:REGION|REGIONS):[ ](.*)>/i,'SolidTerrainTags':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'SolidTop':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) TOP>/i,'SolidBottom':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) BOTTOM>/i,'SolidBlur':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) BLUR:[ ](.*)>/i,'SolidOpacityRate':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) OPACITY:[ ](\d+)([%％])>/i,'SolidOpacityFlat':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) OPACITY:[ ](\d+)>/i,'NoReflection':/<NO (?:REFLECT|REFLECTION|REFLECTIONS)>/i},SceneManager[_0x563cb5(0x227)]=function(){const _0xfde24=_0x563cb5;return this['_scene']&&this[_0xfde24(0x177)][_0xfde24(0x1dc)]===Scene_Map;},SceneManager['isInstanceOfSceneMap']=function(){const _0xde8891=_0x563cb5;return this['_scene']&&this[_0xde8891(0x177)]instanceof Scene_Map;},VisuMZ['VisualParallaxes'][_0x563cb5(0x208)]=Game_Map[_0x563cb5(0x147)][_0x563cb5(0x1c6)],Game_Map[_0x563cb5(0x147)]['setup']=function(_0xa62566){const _0x3c1d3c=_0x563cb5;VisuMZ[_0x3c1d3c(0x233)]['Game_Map_setup']['call'](this,_0xa62566),this[_0x3c1d3c(0x1ef)](),this[_0x3c1d3c(0x216)]();},Game_Map[_0x563cb5(0x12c)]=VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x232)][_0x563cb5(0x214)][_0x563cb5(0x138)],Game_Map[_0x563cb5(0x22a)]=VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x232)][_0x563cb5(0x214)]['TerrainTags'],Game_Map[_0x563cb5(0x147)][_0x563cb5(0x1e3)]=function(){const _0x4c4ce8=_0x563cb5;if(DataManager[_0x4c4ce8(0x122)]())return!![];if(this[_0x4c4ce8(0x22c)]()||this['isLoopVertical']())return!![];const _0x22f610=VisuMZ[_0x4c4ce8(0x233)][_0x4c4ce8(0x133)],_0x4dee3c=$dataMap[_0x4c4ce8(0x11c)]||'';return _0x4dee3c['match'](_0x22f610[_0x4c4ce8(0x20c)])?!![]:![];},Game_Map[_0x563cb5(0x147)]['getWaterReflectionRegions']=function(){const _0x2b733f=_0x563cb5,_0x2ef4af=VisuMZ[_0x2b733f(0x233)][_0x2b733f(0x133)],_0x1b9069=$dataMap[_0x2b733f(0x11c)]||'';if(_0x1b9069[_0x2b733f(0x125)](_0x2ef4af[_0x2b733f(0x18d)]))return String(RegExp['$1'])[_0x2b733f(0x141)](',')[_0x2b733f(0x234)](_0x264c9c=>Number(_0x264c9c)||0x1)[_0x2b733f(0x127)](0x0);return JsonEx[_0x2b733f(0x1a4)](Game_Map[_0x2b733f(0x12c)])['remove'](0x0);},Game_Map[_0x563cb5(0x147)][_0x563cb5(0x237)]=function(){const _0x216e0c=_0x563cb5,_0x45497e=VisuMZ['VisualParallaxes'][_0x216e0c(0x133)],_0x2fa6fc=$dataMap[_0x216e0c(0x11c)]||'';if(_0x2fa6fc[_0x216e0c(0x125)](_0x45497e['WaterTerrainTags']))return String(RegExp['$1'])[_0x216e0c(0x141)](',')[_0x216e0c(0x234)](_0x242179=>Number(_0x242179)||0x1)[_0x216e0c(0x127)](0x0);return JsonEx[_0x216e0c(0x1a4)](Game_Map[_0x216e0c(0x22a)])[_0x216e0c(0x127)](0x0);},Game_Map[_0x563cb5(0x189)]=VisuMZ[_0x563cb5(0x233)]['Settings'][_0x563cb5(0x214)][_0x563cb5(0x155)],Game_Map[_0x563cb5(0x13e)]=VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x232)]['WaterReflect'][_0x563cb5(0x151)],Game_Map[_0x563cb5(0x1a7)]=VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x232)][_0x563cb5(0x214)]['Opacity'],Game_Map[_0x563cb5(0x17a)]=VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x232)][_0x563cb5(0x214)][_0x563cb5(0x12f)],Game_Map['DEFAULT_WATER_REFLECTION_FILTER_AMPLITUDE']=[VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x232)][_0x563cb5(0x214)][_0x563cb5(0x14c)],VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x232)][_0x563cb5(0x214)]['AmpEnd']],Game_Map[_0x563cb5(0x199)]=[VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x232)][_0x563cb5(0x214)][_0x563cb5(0x13a)],VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x232)]['WaterReflect']['WaveEnd']],Game_Map[_0x563cb5(0x147)][_0x563cb5(0x137)]=function(){const _0x40aa2a=_0x563cb5,_0x315230=VisuMZ[_0x40aa2a(0x233)][_0x40aa2a(0x133)],_0x42cc35=$dataMap[_0x40aa2a(0x11c)]||'';if(_0x42cc35['match'](_0x315230[_0x40aa2a(0x187)]))return!![];else{if(_0x42cc35[_0x40aa2a(0x125)](_0x315230['WaterBottom']))return![];}return Game_Map['DEFAULT_WATER_REFLECTION_FILTER_TOP'];},Game_Map[_0x563cb5(0x147)][_0x563cb5(0x1d6)]=function(){const _0x35e181=_0x563cb5,_0x4449ee=VisuMZ[_0x35e181(0x233)][_0x35e181(0x133)],_0x141ea4=$dataMap[_0x35e181(0x11c)]||'';if(_0x141ea4['match'](_0x4449ee[_0x35e181(0x1fa)]))return Math[_0x35e181(0x1cd)](0x0,Number(RegExp['$1'])||0x0);return Game_Map['DEFAULT_WATER_REFLECTION_FILTER_BLUR'];},Game_Map[_0x563cb5(0x147)][_0x563cb5(0x203)]=function(){const _0x4771ff=_0x563cb5,_0x30d125=VisuMZ[_0x4771ff(0x233)][_0x4771ff(0x133)],_0x13bd7d=$dataMap[_0x4771ff(0x11c)]||'';if(_0x13bd7d[_0x4771ff(0x125)](_0x30d125[_0x4771ff(0x1af)]))return Math[_0x4771ff(0x22d)]((Number(RegExp['$1'])||0x0)*0.01*0xff)[_0x4771ff(0x178)](0x0,0xff);else{if(_0x13bd7d[_0x4771ff(0x125)](_0x30d125[_0x4771ff(0x222)]))return(Number(RegExp['$1'])||0x0)[_0x4771ff(0x178)](0x0,0xff);}return Game_Map['DEFAULT_SOLID_REFLECTION_FILTER_OPACITY'];},Game_Map[_0x563cb5(0x147)][_0x563cb5(0x1f1)]=function(){const _0x3596fd=_0x563cb5,_0x54fffc=VisuMZ[_0x3596fd(0x233)][_0x3596fd(0x133)],_0x3a579a=$dataMap[_0x3596fd(0x11c)]||'';if(_0x3a579a[_0x3596fd(0x125)](_0x54fffc[_0x3596fd(0x224)]))return(Number(RegExp['$1'])||0x0)[_0x3596fd(0x178)](0x0,0x1);return Game_Map[_0x3596fd(0x17a)];},Game_Map[_0x563cb5(0x147)][_0x563cb5(0x1e2)]=function(){const _0x52a65d=_0x563cb5,_0x1495e3=VisuMZ['VisualParallaxes'][_0x52a65d(0x133)],_0x30fb39=$dataMap['note']||'';if(_0x30fb39[_0x52a65d(0x125)](_0x1495e3['WaterAmplitude'])){const _0x789699=String(RegExp['$1'])[_0x52a65d(0x141)](',')['map'](_0x5de676=>Number(_0x5de676)||0x0);if(_0x789699['length']<=0x1)_0x789699[0x1]=_0x789699[0x0];}return JsonEx['makeDeepCopy'](Game_Map[_0x52a65d(0x1c0)])[_0x52a65d(0x127)](0x0);},Game_Map[_0x563cb5(0x147)][_0x563cb5(0x1d4)]=function(){const _0x300e03=_0x563cb5,_0x136b8d=VisuMZ[_0x300e03(0x233)][_0x300e03(0x133)],_0x4dd415=$dataMap[_0x300e03(0x11c)]||'';if(_0x4dd415[_0x300e03(0x125)](_0x136b8d[_0x300e03(0x225)])){const _0x290ec5=String(RegExp['$1'])['split'](',')[_0x300e03(0x234)](_0x34478b=>Number(_0x34478b)||0x0);if(_0x290ec5['length']<=0x1)_0x290ec5[0x1]=_0x290ec5[0x0];}return JsonEx[_0x300e03(0x1a4)](Game_Map[_0x300e03(0x199)])[_0x300e03(0x127)](0x0);},Game_Map[_0x563cb5(0x1e0)]=VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x232)][_0x563cb5(0x173)][_0x563cb5(0x138)],Game_Map[_0x563cb5(0x1ba)]=VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x232)][_0x563cb5(0x173)]['TerrainTags'],Game_Map[_0x563cb5(0x147)][_0x563cb5(0x1e4)]=function(){const _0x26267c=_0x563cb5,_0xc9c340=VisuMZ[_0x26267c(0x233)][_0x26267c(0x133)],_0x52f464=$dataMap[_0x26267c(0x11c)]||'';if(_0x52f464[_0x26267c(0x125)](_0xc9c340[_0x26267c(0x1f9)]))return String(RegExp['$1'])[_0x26267c(0x141)](',')['map'](_0xafd4e6=>Number(_0xafd4e6)||0x1)[_0x26267c(0x127)](0x0);return JsonEx['makeDeepCopy'](Game_Map[_0x26267c(0x1e0)])[_0x26267c(0x127)](0x0);},Game_Map[_0x563cb5(0x147)][_0x563cb5(0x205)]=function(){const _0x198f53=_0x563cb5,_0x57b8c0=VisuMZ[_0x198f53(0x233)][_0x198f53(0x133)],_0x567f84=$dataMap[_0x198f53(0x11c)]||'';if(_0x567f84['match'](_0x57b8c0['SolidTerrainTags']))return String(RegExp['$1'])[_0x198f53(0x141)](',')['map'](_0x31d163=>Number(_0x31d163)||0x1)[_0x198f53(0x127)](0x0);return JsonEx['makeDeepCopy'](Game_Map['DEFAULT_SOLID_REFLECTION_TERRAINTAGS'])[_0x198f53(0x127)](0x0);},Game_Map[_0x563cb5(0x119)]=VisuMZ[_0x563cb5(0x233)]['Settings'][_0x563cb5(0x173)][_0x563cb5(0x155)],Game_Map[_0x563cb5(0x210)]=VisuMZ[_0x563cb5(0x233)]['Settings'][_0x563cb5(0x173)][_0x563cb5(0x151)],Game_Map['DEFAULT_SOLID_REFLECTION_FILTER_OPACITY']=VisuMZ[_0x563cb5(0x233)]['Settings'][_0x563cb5(0x173)][_0x563cb5(0x11f)],Game_Map['prototype'][_0x563cb5(0x1c2)]=function(){const _0x4dd03a=_0x563cb5,_0x4d2aca=VisuMZ[_0x4dd03a(0x233)][_0x4dd03a(0x133)],_0x4e6428=$dataMap[_0x4dd03a(0x11c)]||'';if(_0x4e6428['match'](_0x4d2aca[_0x4dd03a(0x1e6)]))return!![];else{if(_0x4e6428[_0x4dd03a(0x125)](_0x4d2aca[_0x4dd03a(0x239)]))return![];}return Game_Map[_0x4dd03a(0x119)];},Game_Map[_0x563cb5(0x147)][_0x563cb5(0x22f)]=function(){const _0x26dad9=_0x563cb5,_0x221a06=VisuMZ[_0x26dad9(0x233)]['RegExp'],_0x354eda=$dataMap[_0x26dad9(0x11c)]||'';if(_0x354eda[_0x26dad9(0x125)](_0x221a06[_0x26dad9(0x1ee)]))return Math[_0x26dad9(0x1cd)](0x0,Number(RegExp['$1'])||0x0);return Game_Map[_0x26dad9(0x210)];},Game_Map['prototype'][_0x563cb5(0x1d3)]=function(){const _0x483538=_0x563cb5,_0x268f79=VisuMZ['VisualParallaxes'][_0x483538(0x133)],_0x3c2cfa=$dataMap[_0x483538(0x11c)]||'';if(_0x3c2cfa['match'](_0x268f79[_0x483538(0x221)]))return Math[_0x483538(0x22d)]((Number(RegExp['$1'])||0x0)*0.01*0xff)[_0x483538(0x178)](0x0,0xff);else{if(_0x3c2cfa[_0x483538(0x125)](_0x268f79[_0x483538(0x144)]))return(Number(RegExp['$1'])||0x0)[_0x483538(0x178)](0x0,0xff);}return Game_Map['DEFAULT_SOLID_REFLECTION_FILTER_OPACITY'];},Game_Map[_0x563cb5(0x147)]['registerReflectionSettings']=function(){const _0x55aede=_0x563cb5,_0x5f181c=this[_0x55aede(0x235)](),_0x275a7a=this[_0x55aede(0x237)](),_0x34e4cf=this[_0x55aede(0x1e4)](),_0x1c8f83=this[_0x55aede(0x205)](),_0x5b8a0e=this[_0x55aede(0x145)](),_0xd5738c=this[_0x55aede(0x1ed)]();this['_hasWaterReflections']=![],this['_hasSolidReflections']=![];const _0x25f210=this[_0x55aede(0x15c)]();for(let _0x4f92c6=0x0;_0x4f92c6<_0x5b8a0e;_0x4f92c6++){for(let _0x24e137=0x0;_0x24e137<_0xd5738c;_0x24e137++){const _0x1fbedf=this[_0x55aede(0x192)](_0x4f92c6,_0x24e137);_0x5f181c['includes'](_0x1fbedf)&&(this[_0x55aede(0x146)]=!![]);_0x34e4cf[_0x55aede(0x194)](_0x1fbedf)&&(this[_0x55aede(0x143)]=!![]);const _0x1845e5=this[_0x55aede(0x1ac)](_0x4f92c6,_0x24e137);for(const _0x5e81ae of _0x1845e5){if(_0x5e81ae<0x400)continue;const _0x32726c=_0x25f210[_0x5e81ae]>>0xc;_0x275a7a[_0x55aede(0x194)](_0x32726c)&&(this[_0x55aede(0x146)]=!![]),_0x1c8f83['includes'](_0x32726c)&&(this[_0x55aede(0x143)]=!![]);}if(this[_0x55aede(0x146)]&&this[_0x55aede(0x143)])break;}}},Game_Map[_0x563cb5(0x147)][_0x563cb5(0x11a)]=function(){const _0x40cb96=_0x563cb5;if(this['_hasWaterReflections']===undefined)this[_0x40cb96(0x216)]();return this[_0x40cb96(0x146)];},Game_Map['prototype'][_0x563cb5(0x16d)]=function(){const _0x3e6d67=_0x563cb5;if(this[_0x3e6d67(0x143)]===undefined)this['registerReflectionSettings']();return this['_hasSolidReflections'];},Game_Map[_0x563cb5(0x147)]['setupVisualParallaxes']=function(){const _0x28411d=_0x563cb5;this['_visualParallaxSettings']=[null];if(!$dataMap)return;const _0x35300=VisuMZ[_0x28411d(0x233)][_0x28411d(0x22e)]();for(const _0x524076 of _0x35300){if(!_0x524076)continue;this['_visualParallaxSettings'][_0x524076['id']]=_0x524076;}},VisuMZ['VisualParallaxes'][_0x563cb5(0x22e)]=function(){const _0x8bf926=_0x563cb5;if(!$dataMap)return[];const _0x1a4b41=[],_0x1dd70d=VisuMZ[_0x8bf926(0x233)][_0x8bf926(0x15d)]();if(!$dataMap['note'])return[];const _0x1015bb=VisuMZ[_0x8bf926(0x233)][_0x8bf926(0x133)],_0x41e290=$dataMap[_0x8bf926(0x11c)]['split'](/[\r\n]+/);let _0x4ba8e6=JsonEx[_0x8bf926(0x1a4)](_0x1dd70d);for(const _0x36a9f6 of _0x41e290){if(_0x36a9f6['match'](_0x1015bb[_0x8bf926(0x172)])){_0x4ba8e6['id']=Number(RegExp['$1']);if(_0x36a9f6['match'](/WATER/i))_0x4ba8e6['maskRegions']=JsonEx[_0x8bf926(0x1a4)]($gameMap[_0x8bf926(0x235)]()),_0x4ba8e6[_0x8bf926(0x12d)]=JsonEx['makeDeepCopy']($gameMap[_0x8bf926(0x237)]());else _0x36a9f6['match'](/SOLID/i)&&(_0x4ba8e6[_0x8bf926(0x19e)]=JsonEx[_0x8bf926(0x1a4)]($gameMap[_0x8bf926(0x1e4)]()),_0x4ba8e6['maskTerrainTags']=JsonEx[_0x8bf926(0x1a4)]($gameMap[_0x8bf926(0x205)]()));}else{if(_0x36a9f6[_0x8bf926(0x125)](_0x1015bb['End'])){const _0x55f933=Number(RegExp['$1']);if(_0x55f933>0x0&&_0x55f933===_0x4ba8e6['id']&&_0x4ba8e6[_0x8bf926(0x1c3)]!=='')_0x1a4b41[_0x8bf926(0x201)](_0x4ba8e6);_0x4ba8e6=JsonEx[_0x8bf926(0x1a4)](_0x1dd70d);}else{if(_0x4ba8e6['id']<=0x0)continue;}}if(_0x36a9f6[_0x8bf926(0x125)](_0x1015bb[_0x8bf926(0x19f)]))_0x4ba8e6[_0x8bf926(0x1c3)]=String(RegExp['$1'])['trim'](),_0x4ba8e6[_0x8bf926(0x1c3)]['charAt'](0x0)==='!'&&(_0x4ba8e6[_0x8bf926(0x19b)]=!![]);else{if(_0x36a9f6[_0x8bf926(0x125)](_0x1015bb[_0x8bf926(0x14a)]))_0x4ba8e6[_0x8bf926(0x1ae)]=!![],_0x4ba8e6['_parallaxSx']=Number(RegExp['$1'])||0x0;else{if(_0x36a9f6['match'](_0x1015bb[_0x8bf926(0x121)]))_0x4ba8e6[_0x8bf926(0x17c)]=!![],_0x4ba8e6['_parallaxSy']=Number(RegExp['$1'])||0x0;else{if(_0x36a9f6[_0x8bf926(0x125)](_0x1015bb['ScrollLock']))_0x4ba8e6[_0x8bf926(0x19b)]=!![];else{if(_0x36a9f6[_0x8bf926(0x125)](_0x1015bb['OpacityRate'])){const _0x565e14=Number(RegExp['$1'])*0.01;_0x4ba8e6[_0x8bf926(0x15e)]=Math[_0x8bf926(0x22d)](_0x565e14*0xff)[_0x8bf926(0x178)](0x0,0xff);}else{if(_0x36a9f6['match'](_0x1015bb[_0x8bf926(0x1b6)]))_0x4ba8e6[_0x8bf926(0x15e)]=Number(RegExp['$1'])['clamp'](0x0,0xff);else{if(_0x36a9f6['match'](_0x1015bb[_0x8bf926(0x1e5)])){const _0x5f2442=String(RegExp['$1'])['toUpperCase']()[_0x8bf926(0x20b)](),_0x47b3ae=[_0x8bf926(0x1e9),'ADDITIVE',_0x8bf926(0x153),_0x8bf926(0x1a3)];_0x4ba8e6[_0x8bf926(0x123)]=_0x47b3ae[_0x8bf926(0x21b)](_0x5f2442)[_0x8bf926(0x178)](0x0,0x3);}else{if(_0x36a9f6['match'](_0x1015bb[_0x8bf926(0x186)]))_0x4ba8e6[_0x8bf926(0x18f)]=Number(RegExp['$1'])[_0x8bf926(0x178)](0x0,0x168);else{if(_0x36a9f6[_0x8bf926(0x125)](_0x1015bb[_0x8bf926(0x16f)]))_0x4ba8e6[_0x8bf926(0x213)]=Number(RegExp['$1'])||0x0;else{if(_0x36a9f6[_0x8bf926(0x125)](_0x1015bb[_0x8bf926(0x1d8)])){const _0x31fab9=String(RegExp['$1'])['split'](',')[_0x8bf926(0x234)](_0x5ee248=>Number(_0x5ee248)||0x0);while(_0x31fab9[_0x8bf926(0x22b)]<0x4)_0x31fab9['push'](0x0);_0x4ba8e6[_0x8bf926(0x19d)]=_0x31fab9;}else{if(_0x36a9f6[_0x8bf926(0x125)](_0x1015bb[_0x8bf926(0x14e)])){const _0x22ac62=String(RegExp['$1'])['split'](',')[_0x8bf926(0x234)](_0xfd6bee=>Number(_0xfd6bee)||0x1);_0x4ba8e6[_0x8bf926(0x19e)]=_0x22ac62;}else{if(_0x36a9f6[_0x8bf926(0x125)](_0x1015bb[_0x8bf926(0x130)])){const _0x3b9236=String(RegExp['$1'])[_0x8bf926(0x141)](',')[_0x8bf926(0x234)](_0x263f79=>Number(_0x263f79)||0x1);_0x4ba8e6[_0x8bf926(0x12d)]=_0x3b9236;}}}}}}}}}}}}}return _0x1a4b41;},Game_Map['prototype'][_0x563cb5(0x120)]=function(){const _0x3778ce=_0x563cb5;return this[_0x3778ce(0x195)]===undefined&&this[_0x3778ce(0x1ef)](),this[_0x3778ce(0x195)][_0x3778ce(0x19c)](_0x3f3319=>!!_0x3f3319);},Game_Map[_0x563cb5(0x147)][_0x563cb5(0x163)]=function(_0x39471c){const _0x51c39a=_0x563cb5;return this[_0x51c39a(0x195)]=this[_0x51c39a(0x195)]||[],this[_0x51c39a(0x195)][_0x39471c]||null;},Game_Map['prototype'][_0x563cb5(0x1f7)]=function(_0xcf21e5){const _0x12d054=_0x563cb5,_0x40f601=this[_0x12d054(0x163)](_0xcf21e5);if(_0x40f601[_0x12d054(0x19b)])return Math[_0x12d054(0x191)](_0x40f601[_0x12d054(0x21f)]*this[_0x12d054(0x1bd)]());else return _0x40f601[_0x12d054(0x1ae)]?_0x40f601[_0x12d054(0x21f)]*this['tileWidth']()/0x2:0x0;},Game_Map[_0x563cb5(0x147)][_0x563cb5(0x12b)]=function(_0x2e9c26){const _0x23a801=_0x563cb5,_0x31d235=this[_0x23a801(0x163)](_0x2e9c26);if(_0x31d235[_0x23a801(0x19b)])return Math['floor'](_0x31d235[_0x23a801(0x1d1)]*this[_0x23a801(0x21c)]());else return _0x31d235[_0x23a801(0x17c)]?_0x31d235[_0x23a801(0x1d1)]*this[_0x23a801(0x21c)]()/0x2:0x0;},Game_Map[_0x563cb5(0x147)]['removeVisualParallax']=function(_0x2bfc1f){const _0x470d6e=_0x563cb5;this[_0x470d6e(0x195)]=this[_0x470d6e(0x195)]||[];if(!this['_visualParallaxSettings'][_0x2bfc1f])return;this['_visualParallaxSettings'][_0x2bfc1f]=null;const _0x13308c=SceneManager['_scene'][_0x470d6e(0x174)];_0x13308c&&_0x13308c[_0x470d6e(0x217)](_0x2bfc1f);},Game_Map[_0x563cb5(0x147)][_0x563cb5(0x20d)]=function(_0x335123){const _0x15898b=_0x563cb5,_0x25f75b=_0x335123['id'];_0x335123['filename'][_0x15898b(0x1f2)](0x0)==='!'&&(_0x335123['_parallaxZero']=!![]);let _0xc1e8f6=![];this[_0x15898b(0x195)]=this[_0x15898b(0x195)]||[];if(this[_0x15898b(0x195)][_0x25f75b]){const _0x3b47f6=this[_0x15898b(0x195)][_0x25f75b];if(!_0x3b47f6['maskRegions']['equals'](_0x335123[_0x15898b(0x19e)]))_0xc1e8f6=!![];else!_0x3b47f6['maskTerrainTags']['equals'](_0x335123[_0x15898b(0x12d)])&&(_0xc1e8f6=!![]);}this[_0x15898b(0x195)][_0x25f75b]=_0x335123;if(!SceneManager[_0x15898b(0x227)]())return;const _0x4b8114=SceneManager[_0x15898b(0x177)][_0x15898b(0x174)];_0x4b8114&&_0x4b8114[_0x15898b(0x18c)](_0x25f75b,_0xc1e8f6);},VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x1b7)]=Game_Map[_0x563cb5(0x147)]['setDisplayPos'],Game_Map[_0x563cb5(0x147)][_0x563cb5(0x156)]=function(_0x1b7bb4,_0x4198df){const _0x4dd951=_0x563cb5;VisuMZ[_0x4dd951(0x233)][_0x4dd951(0x1b7)][_0x4dd951(0x149)](this,_0x1b7bb4,_0x4198df);for(const _0x1bec9b of this['getVisualParallaxes']()){if(!_0x1bec9b)continue;this[_0x4dd951(0x22c)]()?_0x1bec9b['_parallaxX']=_0x1b7bb4:_0x1bec9b[_0x4dd951(0x21f)]=this['_displayX'],this[_0x4dd951(0x1ad)]()?_0x1bec9b[_0x4dd951(0x1d1)]=_0x4198df:_0x1bec9b['_parallaxY']=this[_0x4dd951(0x166)];}},VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x13f)]=Game_Map[_0x563cb5(0x147)]['scrollLeft'],Game_Map[_0x563cb5(0x147)][_0x563cb5(0x20a)]=function(_0x52fef4){const _0x458224=_0x563cb5,_0x35edea=this['_displayX'];VisuMZ[_0x458224(0x233)][_0x458224(0x13f)][_0x458224(0x149)](this,_0x52fef4);for(const _0x5abea0 of this['getVisualParallaxes']()){if(!_0x5abea0)continue;if(this[_0x458224(0x22c)]())_0x5abea0[_0x458224(0x1ae)]&&(_0x5abea0[_0x458224(0x21f)]-=_0x52fef4);else this[_0x458224(0x145)]()>=this[_0x458224(0x21e)]()&&(_0x5abea0[_0x458224(0x21f)]+=this[_0x458224(0x229)]-_0x35edea);}},VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x18a)]=Game_Map[_0x563cb5(0x147)][_0x563cb5(0x1ce)],Game_Map[_0x563cb5(0x147)][_0x563cb5(0x1ce)]=function(_0xc25733){const _0x48adad=_0x563cb5,_0xc15e83=this[_0x48adad(0x229)];VisuMZ['VisualParallaxes'][_0x48adad(0x18a)][_0x48adad(0x149)](this,_0xc25733);for(const _0x2d7834 of this['getVisualParallaxes']()){if(!_0x2d7834)continue;if(this[_0x48adad(0x22c)]())_0x2d7834[_0x48adad(0x1ae)]&&(_0x2d7834[_0x48adad(0x21f)]+=_0xc25733);else this[_0x48adad(0x145)]()>=this[_0x48adad(0x21e)]()&&(_0x2d7834[_0x48adad(0x21f)]+=this['_displayX']-_0xc15e83);}},VisuMZ[_0x563cb5(0x233)]['Game_Map_scrollDown']=Game_Map['prototype'][_0x563cb5(0x16b)],Game_Map[_0x563cb5(0x147)]['scrollDown']=function(_0x2a0d8f){const _0x31a0a3=_0x563cb5,_0x3d8c15=this[_0x31a0a3(0x166)];VisuMZ['VisualParallaxes'][_0x31a0a3(0x1dd)]['call'](this,_0x2a0d8f);for(const _0x124a01 of this[_0x31a0a3(0x120)]()){if(!_0x124a01)continue;if(this[_0x31a0a3(0x1ad)]())_0x124a01[_0x31a0a3(0x17c)]&&(_0x124a01[_0x31a0a3(0x1d1)]+=_0x2a0d8f);else this[_0x31a0a3(0x1ed)]()>=this[_0x31a0a3(0x1de)]()&&(_0x124a01[_0x31a0a3(0x1d1)]+=this['_displayY']-_0x3d8c15);}},VisuMZ[_0x563cb5(0x233)]['Game_Map_scrollUp']=Game_Map[_0x563cb5(0x147)][_0x563cb5(0x1eb)],Game_Map['prototype'][_0x563cb5(0x1eb)]=function(_0xcd483c){const _0x2fa858=_0x563cb5,_0x5ac969=this[_0x2fa858(0x166)];VisuMZ['VisualParallaxes'][_0x2fa858(0x1bf)][_0x2fa858(0x149)](this,_0xcd483c);for(const _0x4cd76c of this['getVisualParallaxes']()){if(!_0x4cd76c)continue;if(this['isLoopVertical']())_0x4cd76c[_0x2fa858(0x17c)]&&(_0x4cd76c['_parallaxY']-=_0xcd483c);else this['height']()>=this[_0x2fa858(0x1de)]()&&(_0x4cd76c['_parallaxY']+=this[_0x2fa858(0x166)]-_0x5ac969);}},VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x1da)]=Game_Map[_0x563cb5(0x147)][_0x563cb5(0x14f)],Game_Map[_0x563cb5(0x147)][_0x563cb5(0x14f)]=function(){const _0x21c1c6=_0x563cb5;VisuMZ[_0x21c1c6(0x233)]['Game_Map_updateParallax']['call'](this);for(const _0x320cc5 of this[_0x21c1c6(0x120)]()){if(!_0x320cc5)continue;this[_0x21c1c6(0x1ec)](_0x320cc5);}},Game_Map[_0x563cb5(0x147)]['updateVisualParallaxSettings']=function(_0x2d476c){const _0x4ee2bd=_0x563cb5;_0x2d476c[_0x4ee2bd(0x1ae)]&&(_0x2d476c[_0x4ee2bd(0x21f)]+=_0x2d476c[_0x4ee2bd(0x1a8)]/this[_0x4ee2bd(0x1bd)]()/0x2);_0x2d476c['_parallaxLoopY']&&(_0x2d476c[_0x4ee2bd(0x1d1)]+=_0x2d476c[_0x4ee2bd(0x1cb)]/this[_0x4ee2bd(0x21c)]()/0x2);_0x2d476c[_0x4ee2bd(0x18f)]+=_0x2d476c[_0x4ee2bd(0x213)];if(_0x2d476c['opacityDuration']>0x0){const _0x3b1513=_0x2d476c['opacityDuration'];_0x2d476c['opacity']=(_0x2d476c[_0x4ee2bd(0x15e)]*(_0x3b1513-0x1)+_0x2d476c[_0x4ee2bd(0x14d)])/_0x3b1513,_0x2d476c[_0x4ee2bd(0x228)]--;}},VisuMZ['VisualParallaxes']['Game_Event_clearPageSettings']=Game_Event[_0x563cb5(0x147)][_0x563cb5(0x17b)],Game_Event[_0x563cb5(0x147)]['clearPageSettings']=function(){const _0x3e6a8c=_0x563cb5;VisuMZ['VisualParallaxes']['Game_Event_clearPageSettings'][_0x3e6a8c(0x149)](this),this[_0x3e6a8c(0x179)]();},VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x1fe)]=Game_Event[_0x563cb5(0x147)]['setupPageSettings'],Game_Event[_0x563cb5(0x147)]['setupPageSettings']=function(){const _0x40cbaf=_0x563cb5;VisuMZ[_0x40cbaf(0x233)][_0x40cbaf(0x1fe)][_0x40cbaf(0x149)](this),this[_0x40cbaf(0x231)]();},Game_Event[_0x563cb5(0x147)][_0x563cb5(0x231)]=function(){const _0x178949=_0x563cb5;if(!this['event']())return;this[_0x178949(0x179)](),this[_0x178949(0x215)](),this[_0x178949(0x129)]();},Game_Event['prototype'][_0x563cb5(0x215)]=function(){const _0x5eda1a=_0x563cb5,_0x26060b=this[_0x5eda1a(0x1c5)]()[_0x5eda1a(0x11c)];if(_0x26060b==='')return;this['checkVisualParallaxesStringTags'](_0x26060b);},Game_Event[_0x563cb5(0x147)][_0x563cb5(0x129)]=function(){const _0x534102=_0x563cb5;if(!this[_0x534102(0x18e)]())return;const _0x33e52a=this[_0x534102(0x1a5)]();let _0x3cf63e='';for(const _0x5e2d1b of _0x33e52a){if([0x6c,0x198][_0x534102(0x194)](_0x5e2d1b[_0x534102(0x211)])){if(_0x3cf63e!=='')_0x3cf63e+='\x0a';_0x3cf63e+=_0x5e2d1b[_0x534102(0x23a)][0x0];}}this[_0x534102(0x1cc)](_0x3cf63e);},Game_Event['prototype'][_0x563cb5(0x179)]=function(){const _0x2df8e0=_0x563cb5;this[_0x2df8e0(0x185)]=![];},Game_Event[_0x563cb5(0x147)]['checkVisualParallaxesStringTags']=function(_0x1c52d4){const _0xbe31a3=_0x563cb5,_0x244176=VisuMZ[_0xbe31a3(0x233)][_0xbe31a3(0x133)];_0x1c52d4[_0xbe31a3(0x125)](_0x244176[_0xbe31a3(0x20c)])&&(this[_0xbe31a3(0x185)]=!![]);};function _0x4512(_0x3fa35c,_0x3adead){const _0x287ab7=_0x287a();return _0x4512=function(_0x45121c,_0x3052a6){_0x45121c=_0x45121c-0x119;let _0x4de834=_0x287ab7[_0x45121c];return _0x4de834;},_0x4512(_0x3fa35c,_0x3adead);}function Sprite_VisualParallax(){const _0x2bbfc6=_0x563cb5;this[_0x2bbfc6(0x1ca)](...arguments);}Sprite_VisualParallax[_0x563cb5(0x147)]=Object[_0x563cb5(0x21d)](TilingSprite[_0x563cb5(0x147)]),Sprite_VisualParallax[_0x563cb5(0x147)][_0x563cb5(0x1dc)]=Sprite_VisualParallax,Sprite_VisualParallax[_0x563cb5(0x147)][_0x563cb5(0x1ca)]=function(_0x430474){const _0x137c7c=_0x563cb5;this[_0x137c7c(0x202)]=_0x430474,TilingSprite['prototype'][_0x137c7c(0x1ca)]['call'](this),this['_createColorFilter'](),this[_0x137c7c(0x17e)](),this['bitmap']['addLoadListener'](this[_0x137c7c(0x184)][_0x137c7c(0x197)](this));},Sprite_VisualParallax['prototype'][_0x563cb5(0x16a)]=function(){const _0xb916e2=_0x563cb5;return $gameMap['getVisualParallaxSettings'](this[_0xb916e2(0x202)]);},Sprite_VisualParallax[_0x563cb5(0x147)][_0x563cb5(0x132)]=function(){const _0x1f4a3a=_0x563cb5;this[_0x1f4a3a(0x1c4)]=0x0,this[_0x1f4a3a(0x15b)]=[0x0,0x0,0x0,0x0],this[_0x1f4a3a(0x167)]=new ColorFilter(),!this[_0x1f4a3a(0x1f6)]&&(this[_0x1f4a3a(0x1f6)]=[]),this['filters']['push'](this['_colorFilter']);},Sprite_VisualParallax[_0x563cb5(0x147)][_0x563cb5(0x198)]=function(){const _0x3e6149=_0x563cb5;!this[_0x3e6149(0x167)]&&this['_createColorFilter'](),this[_0x3e6149(0x167)]['setHue'](this[_0x3e6149(0x1c4)]),this[_0x3e6149(0x167)][_0x3e6149(0x180)](this[_0x3e6149(0x15b)]);},Sprite_VisualParallax[_0x563cb5(0x147)]['loadBitmap']=function(){const _0x4f84cf=_0x563cb5;this[_0x4f84cf(0x131)]=this['settings']()[_0x4f84cf(0x1c3)],this['bitmap']=ImageManager['loadParallax'](this[_0x4f84cf(0x131)]);},Sprite_VisualParallax[_0x563cb5(0x147)][_0x563cb5(0x184)]=function(){const _0x1a925e=_0x563cb5;this['_maskSprite']=new Sprite(),this[_0x1a925e(0x209)]();},Sprite_VisualParallax[_0x563cb5(0x147)]['createMaskBitmap']=function(){const _0x4bc3c5=_0x563cb5;this[_0x4bc3c5(0x17f)][_0x4bc3c5(0x188)]&&(this['_maskSprite'][_0x4bc3c5(0x188)][_0x4bc3c5(0x136)](),this[_0x4bc3c5(0x1f4)](this[_0x4bc3c5(0x17f)]));const _0x5da932=new Bitmap(Graphics[_0x4bc3c5(0x145)],Graphics['height']);_0x5da932[_0x4bc3c5(0x157)](0x0,0x0,_0x5da932['width'],_0x5da932[_0x4bc3c5(0x1ed)],_0x4bc3c5(0x1a9)),this[_0x4bc3c5(0x17f)][_0x4bc3c5(0x188)]=_0x5da932,this[_0x4bc3c5(0x1fd)](this['_maskSprite']),this[_0x4bc3c5(0x16e)]=new PIXI[(_0x4bc3c5(0x1b0))](this[_0x4bc3c5(0x17f)]),this[_0x4bc3c5(0x1f6)][_0x4bc3c5(0x201)](this[_0x4bc3c5(0x16e)]);const _0x48a837=this['settings']()[_0x4bc3c5(0x19e)],_0x10ae2e=this[_0x4bc3c5(0x16a)]()['maskTerrainTags'];if(_0x48a837[_0x4bc3c5(0x22b)]<=0x0&&_0x10ae2e['length']<=0x0)return;if($gameMap[_0x4bc3c5(0x22c)]()||$gameMap[_0x4bc3c5(0x1ad)]())return;const _0x305ec1=$gameMap[_0x4bc3c5(0x145)](),_0x4569b6=$gameMap[_0x4bc3c5(0x1ed)](),_0x40f11a=$gameMap[_0x4bc3c5(0x1bd)](),_0x50a2f7=$gameMap[_0x4bc3c5(0x21c)]();this[_0x4bc3c5(0x17f)][_0x4bc3c5(0x188)]=new Bitmap(_0x305ec1*_0x40f11a,_0x4569b6*_0x50a2f7);for(let _0x54721e=0x0;_0x54721e<_0x305ec1;_0x54721e++){for(let _0x120778=0x0;_0x120778<_0x4569b6;_0x120778++){const _0x4fb1fe=$gameMap['regionId'](_0x54721e,_0x120778);(_0x48a837[_0x4bc3c5(0x194)](_0x4fb1fe)||_0x10ae2e[_0x4bc3c5(0x194)]($gameMap[_0x4bc3c5(0x21a)](_0x54721e,_0x120778)))&&(this[_0x4bc3c5(0x17f)][_0x4bc3c5(0x188)]['fillRect'](_0x54721e*_0x40f11a,_0x120778*_0x50a2f7,_0x40f11a,_0x50a2f7,_0x4bc3c5(0x1a9)),Imported[_0x4bc3c5(0x182)]&&SceneManager['_scene'][_0x4bc3c5(0x226)][_0x4bc3c5(0x201)](_0x4fb1fe));}}},Sprite_VisualParallax[_0x563cb5(0x147)]['update']=function(){const _0x23f303=_0x563cb5;TilingSprite[_0x23f303(0x147)]['update']['call'](this);if(!this[_0x23f303(0x188)])return;if(!this[_0x23f303(0x16a)]())return;this[_0x23f303(0x160)](),this[_0x23f303(0x13b)](),this[_0x23f303(0x1b8)](),this[_0x23f303(0x1fb)](),this[_0x23f303(0x124)](),this[_0x23f303(0x1f8)]();},Sprite_VisualParallax[_0x563cb5(0x147)][_0x563cb5(0x160)]=function(){const _0x1b1b76=_0x563cb5;this['opacity']=this['settings']()[_0x1b1b76(0x15e)];},Sprite_VisualParallax['prototype'][_0x563cb5(0x13b)]=function(){const _0x239f0a=_0x563cb5;this['origin']['x']=$gameMap[_0x239f0a(0x1f7)](this[_0x239f0a(0x202)]),this[_0x239f0a(0x1f3)]['y']=$gameMap['getVisualParallaxOy'](this[_0x239f0a(0x202)]);},Sprite_VisualParallax[_0x563cb5(0x147)][_0x563cb5(0x1b8)]=function(){const _0x20d501=_0x563cb5;this['_maskFilter']&&(this[_0x20d501(0x16e)][_0x20d501(0x123)]=this[_0x20d501(0x16a)]()[_0x20d501(0x123)]);},Sprite_VisualParallax[_0x563cb5(0x147)][_0x563cb5(0x1fb)]=function(){const _0x57232c=_0x563cb5;this[_0x57232c(0x220)](this[_0x57232c(0x16a)]()[_0x57232c(0x18f)]);},Sprite_VisualParallax[_0x563cb5(0x147)][_0x563cb5(0x220)]=function(_0x4a6b66){const _0x4c10af=_0x563cb5;this[_0x4c10af(0x1c4)]!==Number(_0x4a6b66)&&(this[_0x4c10af(0x1c4)]=Number(_0x4a6b66),this[_0x4c10af(0x198)]());},Sprite_VisualParallax[_0x563cb5(0x147)]['updateTone']=function(){const _0x4fea09=_0x563cb5;this[_0x4fea09(0x180)](this['settings']()[_0x4fea09(0x19d)]);},Sprite_VisualParallax[_0x563cb5(0x147)][_0x563cb5(0x180)]=function(_0x6b6543){const _0xf0e9bc=_0x563cb5;if(!(_0x6b6543 instanceof Array))throw new Error('Argument\x20must\x20be\x20an\x20array');!this[_0xf0e9bc(0x15b)][_0xf0e9bc(0x1a0)](_0x6b6543)&&(this[_0xf0e9bc(0x15b)]=_0x6b6543[_0xf0e9bc(0x1b2)](),this['_updateColorFilter']());},Sprite_VisualParallax[_0x563cb5(0x147)]['updateMask']=function(){const _0x5c7e8b=_0x563cb5;if(!this[_0x5c7e8b(0x17f)])return;const _0x1eb0b4=this[_0x5c7e8b(0x16a)]()[_0x5c7e8b(0x19e)],_0x367ba1=this[_0x5c7e8b(0x16a)]()[_0x5c7e8b(0x12d)];if(_0x1eb0b4['length']<=0x0&&_0x367ba1['length']<=0x0)return;if($gameMap[_0x5c7e8b(0x22c)]()||$gameMap['isLoopVertical']())return;this[_0x5c7e8b(0x17f)]['x']=Math[_0x5c7e8b(0x191)](-$gameMap['displayX']()*$gameMap['tileWidth']()),this[_0x5c7e8b(0x17f)]['y']=Math[_0x5c7e8b(0x191)](-$gameMap[_0x5c7e8b(0x1b1)]()*$gameMap['tileHeight']());};function Sprite_ReflectionCharacter(){this['initialize'](...arguments);}Sprite_ReflectionCharacter[_0x563cb5(0x147)]=Object['create'](Sprite_Character[_0x563cb5(0x147)]),Sprite_ReflectionCharacter[_0x563cb5(0x147)][_0x563cb5(0x1dc)]=Sprite_ReflectionCharacter,Sprite_ReflectionCharacter[_0x563cb5(0x147)][_0x563cb5(0x190)]=function(_0xb89bbe){},Sprite_ReflectionCharacter['prototype']['update']=function(){const _0x25efce=_0x563cb5;Sprite_Character[_0x25efce(0x147)][_0x25efce(0x128)][_0x25efce(0x149)](this);},Sprite_ReflectionCharacter['prototype'][_0x563cb5(0x13d)]=function(){const _0x56a168=_0x563cb5;this[_0x56a168(0x12a)]['x']=this['_character'][_0x56a168(0x236)],this['scale']['y']=-this[_0x56a168(0x1c8)][_0x56a168(0x230)];},VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x175)]=Spriteset_Map[_0x563cb5(0x147)]['createParallax'],Spriteset_Map[_0x563cb5(0x147)][_0x563cb5(0x14b)]=function(){const _0x17a2eb=_0x563cb5;VisuMZ[_0x17a2eb(0x233)][_0x17a2eb(0x175)][_0x17a2eb(0x149)](this);if(!$gameMap['getWaterReflectionTop']())this[_0x17a2eb(0x1d9)]();if(!$gameMap[_0x17a2eb(0x1e4)]())this[_0x17a2eb(0x196)]();this[_0x17a2eb(0x15a)](),this[_0x17a2eb(0x171)](),this[_0x17a2eb(0x23b)]();if($gameMap[_0x17a2eb(0x137)]())this[_0x17a2eb(0x1d9)]();if($gameMap['getSolidReflectionRegions']())this[_0x17a2eb(0x196)]();},Spriteset_Map[_0x563cb5(0x147)][_0x563cb5(0x1d9)]=function(){const _0x413b70=_0x563cb5;if(!PIXI[_0x413b70(0x1f6)])return;if($gameMap[_0x413b70(0x22c)]()||$gameMap[_0x413b70(0x1ad)]())return;if($gameMap[_0x413b70(0x1e3)]())return;this[_0x413b70(0x1bb)]=new Sprite(),this[_0x413b70(0x11b)]=new Sprite(),this['_waterReflectAdded']=![],this['_baseSprite'][_0x413b70(0x1fd)](this[_0x413b70(0x1bb)]),this[_0x413b70(0x1bb)][_0x413b70(0x1f6)]=[],this[_0x413b70(0x1bb)][_0x413b70(0x15e)]=$gameMap['getWaterReflectionOpacity'](),!!PIXI[_0x413b70(0x1f6)][_0x413b70(0x11d)]&&(this[_0x413b70(0x1bb)][_0x413b70(0x20e)]=new PIXI[(_0x413b70(0x1f6))][(_0x413b70(0x11d))]({'boundary':$gameMap[_0x413b70(0x1f1)](),'amplitude':$gameMap['getWaterReflectionAmplitude'](),'waveLength':$gameMap[_0x413b70(0x1d4)](),'mirror':![]})),!!PIXI[_0x413b70(0x1f6)][_0x413b70(0x1be)]&&(this[_0x413b70(0x1bb)][_0x413b70(0x218)]=new PIXI[(_0x413b70(0x1f6))][(_0x413b70(0x1be))]($gameMap[_0x413b70(0x1d6)]()),this[_0x413b70(0x1bb)][_0x413b70(0x1f6)][_0x413b70(0x201)](this[_0x413b70(0x1bb)][_0x413b70(0x218)])),this['createWaterReflectionMask']();},Spriteset_Map[_0x563cb5(0x147)][_0x563cb5(0x183)]=function(){const _0x33e3b0=_0x563cb5,_0x1f6859=$gameMap[_0x33e3b0(0x235)](),_0x144f89=$gameMap[_0x33e3b0(0x237)](),_0x44a4df=this['createReflectionMask'](_0x1f6859,_0x144f89);_0x44a4df&&(this[_0x33e3b0(0x1fd)](_0x44a4df),this[_0x33e3b0(0x1bb)][_0x33e3b0(0x1b9)]=_0x44a4df);},Spriteset_Map[_0x563cb5(0x147)][_0x563cb5(0x196)]=function(){const _0x386fa4=_0x563cb5;if(!PIXI['filters'])return;if($gameMap['isLoopHorizontal']()||$gameMap[_0x386fa4(0x1ad)]())return;if($gameMap['noReflections']())return;this[_0x386fa4(0x159)]=new Sprite(),this[_0x386fa4(0x1b5)]=new Sprite(),this[_0x386fa4(0x15f)]=![],this[_0x386fa4(0x1db)][_0x386fa4(0x1fd)](this[_0x386fa4(0x159)]),this[_0x386fa4(0x159)][_0x386fa4(0x1f6)]=[],this[_0x386fa4(0x159)][_0x386fa4(0x15e)]=$gameMap[_0x386fa4(0x1d3)](),!!PIXI[_0x386fa4(0x1f6)][_0x386fa4(0x1be)]&&(this[_0x386fa4(0x159)][_0x386fa4(0x218)]=new PIXI[(_0x386fa4(0x1f6))][(_0x386fa4(0x1be))]($gameMap[_0x386fa4(0x22f)]()),this[_0x386fa4(0x159)]['filters'][_0x386fa4(0x201)](this['_solidReflectLayer'][_0x386fa4(0x218)])),this['createSolidReflectionMask']();},Spriteset_Map['prototype']['createSolidReflectionMask']=function(){const _0x2832a2=_0x563cb5,_0xf2213a=$gameMap[_0x2832a2(0x1e4)](),_0x3b4d4f=$gameMap['getSolidReflectionTerrainTags'](),_0x46a01a=this['createReflectionMask'](_0xf2213a,_0x3b4d4f);_0x46a01a&&(this[_0x2832a2(0x1fd)](_0x46a01a),this['_solidReflectLayer']['mask']=_0x46a01a);},Spriteset_Map[_0x563cb5(0x147)]['createReflectionMask']=function(_0x42faf1,_0x5e71e9){const _0x42a2da=_0x563cb5;if(_0x42faf1['length']<=0x0&&_0x5e71e9[_0x42a2da(0x22b)]<=0x0)return null;const _0x5440ba=$gameMap['width'](),_0x5b34d0=$gameMap[_0x42a2da(0x1ed)](),_0xf2fe0b=$gameMap[_0x42a2da(0x1bd)](),_0x27bb32=$gameMap['tileHeight'](),_0x15e775=0x0,_0x5e6700=_0x15e775*0x2,_0x1817fa=new Sprite();_0x1817fa[_0x42a2da(0x188)]=new Bitmap(_0x5440ba*_0xf2fe0b,_0x5b34d0*_0x27bb32);for(let _0x2c9568=0x0;_0x2c9568<_0x5440ba;_0x2c9568++){for(let _0x2d4e88=0x0;_0x2d4e88<_0x5b34d0;_0x2d4e88++){const _0x2245ed=$gameMap[_0x42a2da(0x192)](_0x2c9568,_0x2d4e88);(_0x42faf1[_0x42a2da(0x194)](_0x2245ed)||_0x5e71e9['includes']($gameMap['terrainTag'](_0x2c9568,_0x2d4e88)))&&(_0x1817fa[_0x42a2da(0x188)][_0x42a2da(0x157)](_0x2c9568*_0xf2fe0b+_0x15e775,_0x2d4e88*_0x27bb32+_0x15e775,_0xf2fe0b-_0x5e6700,_0x27bb32-_0x5e6700,'#ffffff'),Imported[_0x42a2da(0x182)]&&SceneManager[_0x42a2da(0x177)][_0x42a2da(0x226)][_0x42a2da(0x201)](_0x2245ed));}}return _0x1817fa;},VisuMZ['VisualParallaxes'][_0x563cb5(0x142)]=Spriteset_Map[_0x563cb5(0x147)][_0x563cb5(0x1d0)],Spriteset_Map['prototype'][_0x563cb5(0x1d0)]=function(){const _0x36e59f=_0x563cb5;VisuMZ['VisualParallaxes'][_0x36e59f(0x142)]['call'](this),this[_0x36e59f(0x139)]();},Spriteset_Map[_0x563cb5(0x147)]['createCharacterReflections']=function(){const _0x517c80=_0x563cb5;if($gameMap['noReflections']())return;const _0x2a10eb=[],_0x2e2c9c=[];for(const _0x47aa2f of $gameMap['events']()){if(_0x47aa2f['_noReflection'])continue;_0x2a10eb[_0x517c80(0x201)](new Sprite_ReflectionCharacter(_0x47aa2f)),_0x2e2c9c[_0x517c80(0x201)](new Sprite_ReflectionCharacter(_0x47aa2f));}for(const _0x1c1bca of $gameMap[_0x517c80(0x1b4)]()){_0x2a10eb[_0x517c80(0x201)](new Sprite_ReflectionCharacter(_0x1c1bca)),_0x2e2c9c[_0x517c80(0x201)](new Sprite_ReflectionCharacter(_0x1c1bca));}for(const _0x29193d of $gamePlayer[_0x517c80(0x168)]()[_0x517c80(0x1c9)]()){_0x2a10eb['push'](new Sprite_ReflectionCharacter(_0x29193d)),_0x2e2c9c['push'](new Sprite_ReflectionCharacter(_0x29193d));}_0x2a10eb[_0x517c80(0x201)](new Sprite_ReflectionCharacter($gamePlayer)),_0x2e2c9c[_0x517c80(0x201)](new Sprite_ReflectionCharacter($gamePlayer));if(this[_0x517c80(0x1bb)])for(const _0xff2020 of _0x2a10eb){_0xff2020[_0x517c80(0x176)]=!![],this[_0x517c80(0x11b)][_0x517c80(0x1fd)](_0xff2020),_0xff2020[_0x517c80(0x12a)]['y']=-0.85,_0xff2020[_0x517c80(0x1f6)]=_0xff2020['filters']||[],this[_0x517c80(0x1bb)]['_reflectFilter']&&_0xff2020['filters'][_0x517c80(0x201)](this[_0x517c80(0x1bb)]['_reflectFilter']);}if(this['_solidReflectLayer'])for(const _0x37902a of _0x2e2c9c){_0x37902a[_0x517c80(0x176)]=!![],this['_solidReflectContainer'][_0x517c80(0x1fd)](_0x37902a),_0x37902a['scale']['y']=-0.85;}},VisuMZ[_0x563cb5(0x233)][_0x563cb5(0x1e8)]=Spriteset_Map['prototype'][_0x563cb5(0x128)],Spriteset_Map[_0x563cb5(0x147)][_0x563cb5(0x128)]=function(){const _0x275935=_0x563cb5;VisuMZ[_0x275935(0x233)][_0x275935(0x1e8)][_0x275935(0x149)](this),this[_0x275935(0x126)](),this[_0x275935(0x140)]();},Spriteset_Map[_0x563cb5(0x147)][_0x563cb5(0x126)]=function(){const _0xb53494=_0x563cb5;if(!this[_0xb53494(0x1bb)])return;if($gameMap){if(!this[_0xb53494(0x1b3)]&&$gameMap[_0xb53494(0x11a)]())this[_0xb53494(0x1bb)]['addChild'](this[_0xb53494(0x11b)]),this[_0xb53494(0x1b3)]=!![];else this[_0xb53494(0x1b3)]&&!$gameMap[_0xb53494(0x11a)]()&&(this['_waterReflectLayer'][_0xb53494(0x1f4)](this[_0xb53494(0x11b)]),this[_0xb53494(0x1b3)]=![]);}this[_0xb53494(0x1bb)][_0xb53494(0x20e)]&&(this['_waterReflectLayer'][_0xb53494(0x20e)][_0xb53494(0x16c)]+=0.05);const _0x37352f=this[_0xb53494(0x1bb)][_0xb53494(0x17d)];_0x37352f&&(_0x37352f['x']=Math[_0xb53494(0x191)](-$gameMap[_0xb53494(0x150)]()*$gameMap[_0xb53494(0x1bd)]()),_0x37352f['y']=Math['floor'](-$gameMap['displayY']()*$gameMap[_0xb53494(0x21c)]()));},Spriteset_Map[_0x563cb5(0x147)][_0x563cb5(0x140)]=function(){const _0x3c2224=_0x563cb5;if(!this[_0x3c2224(0x159)])return;if($gameMap){if(!this['_solidReflectAdded']&&$gameMap[_0x3c2224(0x16d)]())this['_solidReflectLayer']['addChild'](this[_0x3c2224(0x1b5)]),this[_0x3c2224(0x15f)]=!![];else this['_solidReflectAdded']&&!$gameMap[_0x3c2224(0x16d)]()&&(this[_0x3c2224(0x159)][_0x3c2224(0x1f4)](this['_solidReflectContainer']),this[_0x3c2224(0x15f)]=![]);}const _0x13c507=this['_solidReflectLayer'][_0x3c2224(0x17d)];_0x13c507&&(_0x13c507['x']=Math[_0x3c2224(0x191)](-$gameMap[_0x3c2224(0x150)]()*$gameMap[_0x3c2224(0x1bd)]()),_0x13c507['y']=Math['floor'](-$gameMap[_0x3c2224(0x1b1)]()*$gameMap[_0x3c2224(0x21c)]()));},Spriteset_Map['prototype'][_0x563cb5(0x15a)]=function(){const _0x167823=_0x563cb5;this[_0x167823(0x1f0)]=new Sprite(),this[_0x167823(0x1db)][_0x167823(0x1fd)](this[_0x167823(0x1f0)]),this['_parallaxDataRef']=[null];},Spriteset_Map[_0x563cb5(0x147)]['createParallaxLayers']=function(){const _0x4500e9=_0x563cb5,_0x32ecb1=$gameMap[_0x4500e9(0x120)]();for(const _0x3e3d7d of _0x32ecb1){if(!_0x3e3d7d)continue;this[_0x4500e9(0x1cf)](_0x3e3d7d);}},Spriteset_Map[_0x563cb5(0x147)][_0x563cb5(0x1cf)]=function(_0x300385){const _0x415c86=_0x563cb5;if(!_0x300385)return;const _0x28d2dd=new Sprite_VisualParallax(_0x300385['id']);_0x28d2dd['move'](0x0,0x0,Graphics[_0x415c86(0x145)],Graphics['height']),this[_0x415c86(0x1f0)][_0x415c86(0x1fd)](_0x28d2dd);},Spriteset_Map['prototype'][_0x563cb5(0x23b)]=function(){const _0x41971f=_0x563cb5;this['_parallaxContainer']['children']['sort']((_0x4671fa,_0x4a45d9)=>_0x4671fa[_0x41971f(0x202)]-_0x4a45d9[_0x41971f(0x202)]);},Spriteset_Map[_0x563cb5(0x147)][_0x563cb5(0x152)]=function(_0x10b180){const _0x24c99a=_0x563cb5;return this['_parallaxContainer'][_0x24c99a(0x200)]['find'](_0x3e0685=>_0x3e0685['_id']===_0x10b180);},Spriteset_Map[_0x563cb5(0x147)][_0x563cb5(0x217)]=function(_0x4200b6){const _0x16d3cb=_0x563cb5,_0x5ee4f1=this['findTargetVisualParallax'](_0x4200b6);_0x5ee4f1&&this['_parallaxContainer'][_0x16d3cb(0x1f4)](_0x5ee4f1);},Spriteset_Map[_0x563cb5(0x147)][_0x563cb5(0x18c)]=function(_0x218dd5,_0x3d8aad){const _0x3fe260=_0x563cb5,_0x20a024=this['findTargetVisualParallax'](_0x218dd5);!_0x20a024?(this[_0x3fe260(0x1cf)]($gameMap[_0x3fe260(0x163)](_0x218dd5)),this[_0x3fe260(0x23b)]()):(_0x20a024[_0x3fe260(0x17e)](),_0x3d8aad&&_0x20a024['bitmap'][_0x3fe260(0x20f)](_0x20a024['createMaskBitmap'][_0x3fe260(0x197)](_0x20a024)));};function _0x287a(){const _0x555f52=['getWaterReflectionBlur','hasOwnProperty','Tone','createWaterReflectionLayer','Game_Map_updateParallax','_baseSprite','constructor','Game_Map_scrollDown','screenTileY','description','DEFAULT_SOLID_REFLECTION_REGIONS','17682770FcQzMo','getWaterReflectionAmplitude','noReflections','getSolidReflectionRegions','BlendMode','SolidTop','format','Spriteset_Map_update','NORMAL','3983520uloEAA','scrollUp','updateVisualParallaxSettings','height','SolidBlur','setupVisualParallaxes','_parallaxContainer','getWaterReflectionBoundary','charAt','origin','removeChild','type','filters','getVisualParallaxOx','updateMask','SolidRegions','WaterBlur','updateHue','ConvertParams','addChild','Game_Event_setupPageSettings','ARRAYEVAL','children','push','_id','getWaterReflectionOpacity','JSON','getSolidReflectionTerrainTags','ParallaxFadeOpacity','ParallaxAddChangeSettings','Game_Map_setup','createMaskBitmap','scrollLeft','trim','NoReflection','addChangeVisualParallax','_reflectFilter','addLoadListener','DEFAULT_SOLID_REFLECTION_FILTER_BLUR','code','wasolidter','hueShift','WaterReflect','setupVisualParallaxesNotetags','registerReflectionSettings','removeVisualParallaxLayer','_blurFilter','FUNC','terrainTag','indexOf','tileHeight','create','screenTileX','_parallaxX','setHue','SolidOpacityRate','WaterOpacityFlat','752899NzdIYr','WaterBoundary','WaterAmplitude','_grafterRefreshRegions','isSceneMap','opacityDuration','_displayX','DEFAULT_WATER_REFLECTION_TERRAINTAGS','length','isLoopHorizontal','round','CreateLayerData','getSolidReflectionBlur','_scaleY','setupVisualParallaxesEffects','Settings','VisualParallaxes','map','getWaterReflectionRegions','_scaleX','getWaterReflectionTerrainTags','332373fudUCP','SolidBottom','parameters','sortVisualParallaxes','DEFAULT_SOLID_REFLECTION_FILTER_TOP','hasWaterReflections','_waterReflectContainer','note','ReflectionFilter','ARRAYNUM','Opacity','getVisualParallaxes','VertLoop','isEventTest','blendMode','updateTone','match','updateWaterReflections','remove','update','setupVisualParallaxesCommentTags','scale','getVisualParallaxOy','DEFAULT_WATER_REFLECTION_REGIONS','maskTerrainTags','ARRAYSTR','Boundary','MaskTerrainTags','_parallaxName','_createColorFilter','RegExp','ParallaxRemove','NUM','destroy','getWaterReflectionTop','Regions','createCharacterReflections','WaveStart','updateOrigin','toUpperCase','updateScaleBase','DEFAULT_WATER_REFLECTION_FILTER_BLUR','Game_Map_scrollLeft','updateSolidReflections','split','Spriteset_Map_createCharacters','_hasSolidReflections','SolidOpacityFlat','width','_hasWaterReflections','prototype','name','call','HorzLoop','createParallax','AmpStart','targetOpacity','MaskRegions','updateParallax','displayX','Blur','findTargetVisualParallax','MULTIPLY','STRUCT','Top','setDisplayPos','fillRect','water','_solidReflectLayer','createParallaxContainer','_colorTone','tilesetFlags','TemplateSettings','opacity','_solidReflectAdded','updateOpacity','1212pIdTkf','644120FoYLji','getVisualParallaxSettings','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','>>>ATTENTION<<<','_displayY','_colorFilter','followers','ARRAYSTRUCT','settings','scrollDown','time','hasSolidReflections','_maskFilter','HueShift','ARRAYFUNC','createParallaxLayers','Start','SolidReflect','_spriteset','Spriteset_Map_createParallax','_reflection','_scene','clamp','initVisualParallaxesEffects','DEFAULT_WATER_REFLECTION_FILTER_BOUNDARY','clearPageSettings','_parallaxLoopY','_mask','loadBitmap','_maskSprite','setColorTone','9ZHQzNI','VisuMZ_2_TileGrafterSystem','createWaterReflectionMask','createMaskSprite','_noReflection','Hue','WaterTop','bitmap','DEFAULT_WATER_REFLECTION_FILTER_TOP','Game_Map_scrollRight','parse','updateVisualParallaxLayer','WaterRegions','page','hue','setupRadialLight','floor','regionId','40131BLpVYj','includes','_visualParallaxSettings','createSolidReflectionLayer','bind','_updateColorFilter','DEFAULT_WATER_REFLECTION_FILTER_WAVELENGTH','STR','_parallaxZero','filter','colorTone','maskRegions','Filename','equals','6kEtJLR','isInstanceOfSceneMap','SCREEN','makeDeepCopy','list','status','DEFAULT_WATER_REFLECTION_FILTER_OPACITY','_parallaxSx','#ffffff','registerCommand','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','layeredTiles','isLoopVertical','_parallaxLoopX','WaterOpacityRate','SpriteMaskFilter','displayY','clone','_waterReflectAdded','vehicles','_solidReflectContainer','OpacityFlat','Game_Map_setDisplayPos','updateBlendMode','mask','DEFAULT_SOLID_REFLECTION_TERRAINTAGS','_waterReflectLayer','ARRAYJSON','tileWidth','BlurFilter','Game_Map_scrollUp','DEFAULT_WATER_REFLECTION_FILTER_AMPLITUDE','removeVisualParallax','getSolidReflectionTop','filename','_hue','event','setup','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_character','reverseData','initialize','_parallaxSy','checkVisualParallaxesStringTags','max','scrollRight','createNewParallaxLayer','createCharacters','_parallaxY','692395fVpwly','getSolidReflectionOpacity','getWaterReflectionWavelength','exit'];_0x287a=function(){return _0x555f52;};return _0x287a();}