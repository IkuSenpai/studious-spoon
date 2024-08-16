//=============================================================================
// VisuStella MZ - Visual Cutin Effect
// VisuMZ_3_VisualCutinEffect.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_VisualCutinEffect = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualCutinEffect = VisuMZ.VisualCutinEffect || {};
VisuMZ.VisualCutinEffect.version = 1.00;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.00] [VisualCutinEffect]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Cutin_Effect_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * A good Visual Cutin Effect can add more impact to a scene, allude to a
 * different character focus, or add hype to an action sequence in battle.
 * This plugin allows you to create Visual Cutin Effects of your choosing, with
 * a plethora of types to pick from. Their different visual appearances each
 * fit a variety of situations for your game.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Pick from 20 different cutin styles of all shapes and sizes that have
 *   variations of their own for more than 60+ total cutin choices.
 * * Select a background color to use, a parallax to go with it, and a portrait
 *   to represent a character in specific.
 * * Create custom masks and outlines to determine how cutins will be shaped.
 * * Various options allow for more versatility when creating a cutin effect.
 * * Animate the cutins via their styles, entrance and exit coordinates, as
 *   well as how the portraits and parallaxes animate.
 * * Cutins are controlled completely by their Plugin Commands from when they
 *   start to their properties to changing the portraits and parallaxes midway
 *   to the moment they end.
 * * Additional features with the Battle Core where Action Sequences can create
 *   a Visual Cutin Effect using Battle Portraits for both actors and enemies.
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
 * * VisuMZ_0_CoreEngine
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Understanding Visual Cutin Effects
 * ============================================================================
 *
 * This section will explain various properties of this plugin.
 *
 * ---
 *
 * Visual Cutin Effect Layer
 * 
 * For the purpose of making cutins visible enough, they will appear over all
 * spriteset objects (ie tilesets, events, battlebacks, battlers, pictures,
 * battle animations) but will appear under the majority of windows.
 *
 * ---
 * 
 * One of Each Type
 * 
 * Although you can bring out cutins at practically any time during the map (or
 * battle as long as you have the VisuMZ Battle Core), you can only bring out
 * one cutin of each type. For example, only one "LeftMajor" cutin-type can be
 * used at a time and the existing "LeftMajor" cutin must be ended before using
 * another "LeftMajor" cutin.
 * 
 * The type-restriction does NOT apply to its variations. For example, you can
 * use "LeftMajor" with "RightMajor" simultaneously without any problems.
 * Likewise, you can use "TwelvePack1" with "TwelvePack2" and "TwelvePack3".
 * 
 * What the "One of Each Type" rule means is that you cannot use multiple
 * "LeftMajor" cutins together. Not that it'd make much sense either since they
 * would just overlap each other.
 * 
 * ---
 * 
 * Order They Start
 * 
 * Cutins are layered in the order they are started with the most recent cutin
 * at the top and the oldest cutin at the back. This means if you have two
 * cutins "LeftHorzSlash" and "RightVertSlash", they will overlap each other
 * based on who has more recently started, with the more recent one on top.
 * 
 * ---
 * 
 * Visual Cutin Masking
 * 
 * Visual Cutin Effects will utilize Pixi JS's masking functions to keep their
 * contents contained within specific boundaries. All the Visual Cutin Effect's
 * individual parts (ie the portrait, parallax, outline, and background color)
 * are all affected by the mask and will not appear outside of it.
 * 
 * ---
 * 
 * Plugin-Generated Masks and Outlines
 * 
 * If you do not provide custom files for masks and outlines (don't worry, it's
 * not required), then the plugin will automatically generate them for you.
 * Each of the 20 different styles and their many variations will have a
 * generated mask and outline that can be used without the need of custom image
 * files, especially for those unfamiliar with how Pixi JS masking works.
 * 
 * ---
 * 
 * There is NO One-Size-Fits-All
 * 
 * The plugin-generated masks and outlines are of many different shapes and
 * sizes. And as images used as portraits and parallaxes can be of many varying
 * shapes and sizes as well, there's not going to be a perfect setting for
 * everything. Different cutin-types need to be experimented with different
 * settings in order to find out what works best.
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
 * VisuMZ_1_BattleCore
 * 
 * In order to use Visual Cutin Effects in battle, the VisuMZ Battle Core must
 * be used in order to properly utilize them. You will also be able to utilize
 * specific battle portrait-related Action Sequence Plugin Commands found in
 * the Battle Core, too.
 * 
 * There will be some Battle Core specific notetags that can be used from this
 * plugin as well.
 * 
 * ---
 * 
 * VisuMZ_4_AnimatedPictures
 * 
 * Animated Pictures can also be used as a portrait for a Visual Cutin Effect.
 * The looping and delay information is set up via the Plugin Command settings.
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
 * === Enemy-Related Notetags ===
 * 
 * ---
 *
 * <Cutin Portrait: filename>
 *
 * - Used for: Enemy Notetags
 * - Gives the enemy a portrait to use when using Visual Cutin Effects.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 *
 * ---
 *
 * <Cutin Flip Horz>
 * <Cutin Flip Horzontal>
 * <Cutin Flip Horzontally>
 *
 * - Used for: Enemy Notetags
 * - Flips the enemy's portrait horizontally.
 * - There are no differences between the variations in notetags. The one you
 *   use is entirely up to your own personal preferences.
 *
 * ---
 *
 * <Cutin Flip Vert>
 * <Cutin Flip Vertical>
 * <Cutin Flip Vertically>
 *
 * - Used for: Enemy Notetags
 * - Flips the enemy's portrait vertically.
 * - There are no differences between the variations in notetags. The one you
 *   use is entirely up to your own personal preferences.
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
 * === Cutin Add - Plugin Commands ===
 * 
 * ---
 *
 * Cutin Add: Add Visual Cutin Effect
 * - Adds the Visual Cutin Effect using these desired settings.
 * - Only one of each cutin-style type can be present at a time.
 *
 *   Basic Settings:
 * 
 *     Cutin Style Type:
 *     - What Visual Cutin Effect style type do you wish to use?
 *     - Refer to VisuMZ wiki for visuals on styles.
 *
 *     Portrait Filename:
 *     - Pick a portrait to use for the Visual Cutin Effect.
 *     - Pick (None) to not use a portrait.
 *
 *     Parallax Filename:
 *     - Pick a parallax to use for the Visual Cutin Effect.
 *     - Pick (None) to not use a parallax.
 *
 *     Background Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 *   Extra Settings:
 *   - Extra Plugin Command settings pertaining to this Visual Cutin Effect.
 *   - These settings will be displayed in a later section.
 * 
 *   Wait for Entrance:
 *   - Wait until cutin entrance is finished before performing the next
 *     event command?
 *
 * ---
 * 
 * === Cutin Change - Plugin Commands ===
 * 
 * ---
 *
 * Cutin Change: Portrait Swap
 * - Changes target cutin-type's portrait with a different image.
 *
 *   Basic Settings:
 *
 *     Cutin Style Type:
 *     - What Visual Cutin Effect style type to update?
 *     - This determines which existing cutin-type to change.
 *
 *     Portrait Filename:
 *     - Pick a portrait to swap for the Visual Cutin Effect.
 *     - Pick (None) to not use a portrait.
 *
 *   Extra Settings:
 *   - Extra Plugin Command settings pertaining to this Visual Cutin Effect's
 *     portrait only.
 *   - These settings will be displayed in a later section.
 *   - This Plugin Command will only have the Portrait-related settings.
 *
 * ---
 *
 * Cutin Change: Parallax Swap
 * - Changes target cutin-type's parallax with a different image.
 *
 *   Basic Settings:
 *
 *     Cutin Style Type:
 *     - What Visual Cutin Effect style type to update?
 *     - This determines which existing cutin-type to change.
 *
 *     Parallax Filename:
 *     - Pick a parallax to swap for the Visual Cutin Effect.
 *     - Pick (None) to not use a parallax.
 *
 *   Extra Settings:
 *   - Extra Plugin Command settings pertaining to this Visual Cutin Effect's
 *     parallax only.
 *   - These settings will be displayed in a later section.
 *   - This Plugin Command will only have the Parallax-related settings.
 *
 * ---
 * 
 * === Cutin End - Plugin Commands ===
 * 
 * ---
 *
 * Cutin End: End Visual Cutin Effect (All)
 * - Ends all Visual Cutin Effects currently present.
 * 
 *   Wait for Exit:
 *   - Wait until cutin exit is finished before performing the next
 *     event command?
 *
 * ---
 *
 * Cutin End: End Visual Cutin Effect (Type)
 * - Ends the Visual Cutin Effect with the matching type.
 *
 *   Cutin Style Type:
 *   - What Visual Cutin Effect style type do you wish to end?
 * 
 *   Wait for Exit:
 *   - Wait until cutin exit is finished before performing the next
 *     event command?
 *
 * ---
 * 
 * === Cutin Wait - Plugin Commands ===
 * 
 * ---
 * 
 * Cutin Wait: Wait for Entrance
 * - Wait until all cutin entrances are finished before performing the next
 *   event command.
 * 
 * ---
 * 
 * Cutin Wait: Wait for Exit
 * - Wait until all cutin exits are finished before performing the next
 *   event command.
 * 
 * ---
 * 
 * === Extra Settings ===
 * 
 * ---
 * 
 * These are the settings found in the "Extra Settings" for various cutin
 * Plugin Commands.
 * 
 * ---
 * 
 * Transition
 * 
 *   Entrance Duration:
 *   - How many frames does it take to fully enter?
 *   - Used when a Visual Cutin Effect starts.
 * 
 *   Exit Duration:
 *   - How many frames does it take to fully exit?
 *   - Used when a Visual Cutin Effect ends.
 * 
 * ---
 * 
 * Cutin Settings
 * 
 *   Show BG Color?:
 *   - Add a background color for this cutin?
 *   - Background colors appear behind the parallax.
 * 
 *   Show Outline?:
 *   - Show the cutin outline?
 * 
 * ---
 * 
 * Portrait Settings > Base Properties
 * 
 *   Anchor X:
 *   - Determines the sprite anchor X alignment.
 *   - 0.0: Left, 0.5: Center, 1.0: Right.
 * 
 *   Anchor Y:
 *   - Determines the sprite anchor Y alignment.
 *   - 0.0: Top, 0.5: Middle, 1.0: Bottom.
 * 
 *   Hue:
 *   - Do you wish to adjust this cutin's portrait hue?
 * 
 *   Opacity:
 *   - What is the opacity level of this cutin's portrait?
 * 
 *   Offset X:
 *   - Offsets the cutin portrait's X location.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cutin portrait's Y location.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Portrait Settings > Entrance Properties
 * 
 *   Entrance X:
 *   - Sets the cutin portrait's X entrance.
 *   - Negative: from left. Positive: from right.
 * 
 *   Entrance Y:
 *   - Sets the cutin portrait's Y entrance.
 *   - Negative: from up. Positive: from down.
 * 
 *   Entrance Easing:
 *   - Select which easing type you wish to apply.
 * 
 * ---
 * 
 * Portrait Settings > Exit Properties
 * 
 *   Exit X:
 *   - Sets the cutin portrait's X exit.
 *   - Negative: to left. Positive: to right.
 * 
 *   Exit Y:
 *   - Sets the cutin portrait's Y exit.
 *   - Negative: to up. Positive: to down.
 * 
 *   Exit Easing:
 *   - Select which easing type you wish to apply.
 * 
 * ---
 * 
 * Portrait Settings > Flip Properties
 * 
 *   Flip Horizontally?:
 *   - Flip the cutin portrait horizontally?
 * 
 *   Flip Vertically?:
 *   - Flip the cutin portrait vertically?
 * 
 * ---
 *
 * Portrait Settings > Scaling Properties
 * 
 *   Forced Scaling:
 *   - Do you want to force a scaling ratio?
 *   - Leave as 0 for none.
 *   - Disables "Fit to Scale?".
 *   - There is NO one size fits all setting for this. Different cutin sizes
 *     will look better with different settings for this parameter.
 * 
 *   Fit to Scale?:
 *   - Scale the cutin portrait to fit the cutin style?
 *   - Cannot be used with "Forced Scaling".
 *   - There is NO one size fits all setting for this. Different cutin sizes
 *     will look better with different settings for this parameter.
 * 
 *     Scale Max?:
 *     - Scale the cutin portrait to the maximum fit or scale the cutin
 *       portrait to the minimum fit.
 *     - There is NO one size fits all setting for this. Different cutin sizes
 *       will look better with different settings for this parameter.
 * 
 * ---
 * 
 * Portrait Settings > Animated Portraits
 * 
 *   Loop?:
 *   - Will loop back to beginning once ended.
 *   - Requires VisuMZ_4_AnimatedPictures!
 * 
 *   Wait Frames:
 *   - Frames to wait before moving to next cell.
 *   - Requires VisuMZ_4_AnimatedPictures!
 *
 * ---
 *
 * Parallax Settings > Base Settings
 * 
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the cutin?
 * 
 *   Hue:
 *   - Do you wish to adjust this cutin's parallax hue?
 * 
 *   Opacity:
 *   - What is the opacity level of this cutin's parallax?
 * 
 * ---
 * 
 * Parallax Settings > Scrolling Settings
 * 
 *   Offset X:
 *   - Offsets the cutin parallax's X location.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cutin parallax's Y location.
 *   - Negative: up. Positive: down.
 * 
 *   Scroll X:
 *   - How many pixels does the parallax scroll horizontally?
 *   - Negative: Scroll to right. Positive: Scroll to left.
 * 
 *   Scroll Y:
 *   - How many pixels does the parallax scroll vertically?
 *   - Negative: Scroll to down. Positive: Scroll to up.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Cutin Style Settings
 * ============================================================================
 *
 * The settings used for each of the various cutin styles. These adjust the
 * ways cutins appear in-game.
 *
 * ---
 *
 * Insert Style Name
 * 
 *   Insert Style Variations:
 *   - The settings used for this specific cutin style.
 *   - Each of them will contain the following sub-settings.
 *
 * ---
 *
 * Cutin
 * 
 *   Offset X:
 *   - Offsets the cutin overall's X location.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cutin overall's Y location.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Entrance Movement
 * 
 *   Entrance X:
 *   - Sets the whole cutin's X entrance.
 *   - Negative: from left. Positive: from right.
 * 
 *   Entrance Y:
 *   - Sets the whole cutin's Y entrance.
 *   - Negative: from up. Positive: from down.
 * 
 *   Entrance Easing:
 *   - Select which easing type you wish to apply.
 *
 * ---
 * 
 * Exit Movement
 * 
 *   Exit X:
 *   - Sets the whole cutin's X entrance.
 *   - Negative: to left. Positive: to right.
 * 
 *   Exit Y:
 *   - Sets the whole cutin's Y entrance.
 *   - Negative: to up. Positive: to down.
 * 
 *   Exit Easing:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * Mask
 * 
 *   Filename:
 *   - Filename used for a custom cutin mask.
 *   - Leave empty for plugin-generated mask.
 * 
 * ---
 * 
 * Outline
 * 
 *   Filename:
 *   - Filename used for a custom cutin outline.
 *   - Leave empty for plugin-generated outline.
 * 
 *   Offset X:
 *   - Offsets the cutin outline's X location.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cutin outline's Y location.
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Outline Settings
 * ============================================================================
 *
 * The settings used for plugin-generated outlines.
 *
 * ---
 *
 * Outer Layer
 * 
 *   Line Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Line Width:
 *   - What is the width of the line?
 *
 * ---
 *
 * Middle Layer
 * 
 *   Line Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Line Width:
 *   - What is the width of the line?
 *
 * ---
 *
 * Inner Layer
 * 
 *   Line Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Line Width:
 *   - What is the width of the line?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: "Extra Settings" Defaults
 * ============================================================================
 *
 * Default "Extra Settings" values if the "Extra Settings" Plugin Command
 * parameter is left untouched. In other words, if you just want the various
 * Plugin Commands to use a global set of settings, leave it empty and it will
 * draw from these instead.
 * 
 * For those wondering, yes, these are replica plugin parameters of the
 * "Extra Settings" found for the Plugin Commands.
 * 
 * With all that said, keep in mind that there is no one-size-fits all set of
 * "Extra Settings" that you can set as the default. The plugin-generated masks
 * and outlines are of many different shapes and sizes. And as images used as
 * portraits and parallaxes can be of many varying shapes and sizes as well,
 * there's not going to be a perfect setting for everything. Different
 * cutin-types need to be experimented with different settings in order to find
 * out what works best.
 *
 * ---
 * 
 * Transition
 * 
 *   Entrance Duration:
 *   - How many frames does it take to fully enter?
 *   - Used when a Visual Cutin Effect starts.
 * 
 *   Exit Duration:
 *   - How many frames does it take to fully exit?
 *   - Used when a Visual Cutin Effect ends.
 * 
 * ---
 * 
 * Cutin Settings
 * 
 *   Show BG Color?:
 *   - Add a background color for this cutin?
 *   - Background colors appear behind the parallax.
 * 
 *   Show Outline?:
 *   - Show the cutin outline?
 * 
 * ---
 * 
 * Portrait Settings > Base Properties
 * 
 *   Anchor X:
 *   - Determines the sprite anchor X alignment.
 *   - 0.0: Left, 0.5: Center, 1.0: Right.
 * 
 *   Anchor Y:
 *   - Determines the sprite anchor Y alignment.
 *   - 0.0: Top, 0.5: Middle, 1.0: Bottom.
 * 
 *   Hue:
 *   - Do you wish to adjust this cutin's portrait hue?
 * 
 *   Opacity:
 *   - What is the opacity level of this cutin's portrait?
 * 
 *   Offset X:
 *   - Offsets the cutin portrait's X location.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cutin portrait's Y location.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Portrait Settings > Entrance Properties
 * 
 *   Entrance X:
 *   - Sets the cutin portrait's X entrance.
 *   - Negative: from left. Positive: from right.
 * 
 *   Entrance Y:
 *   - Sets the cutin portrait's Y entrance.
 *   - Negative: from up. Positive: from down.
 * 
 *   Entrance Easing:
 *   - Select which easing type you wish to apply.
 * 
 * ---
 * 
 * Portrait Settings > Exit Properties
 * 
 *   Exit X:
 *   - Sets the cutin portrait's X exit.
 *   - Negative: to left. Positive: to right.
 * 
 *   Exit Y:
 *   - Sets the cutin portrait's Y exit.
 *   - Negative: to up. Positive: to down.
 * 
 *   Exit Easing:
 *   - Select which easing type you wish to apply.
 * 
 * ---
 * 
 * Portrait Settings > Flip Properties
 * 
 *   Flip Horizontally?:
 *   - Flip the cutin portrait horizontally?
 * 
 *   Flip Vertically?:
 *   - Flip the cutin portrait vertically?
 * 
 * ---
 *
 * Portrait Settings > Scaling Properties
 * 
 *   Forced Scaling:
 *   - Do you want to force a scaling ratio?
 *   - Leave as 0 for none.
 *   - Disables "Fit to Scale?".
 *   - There is NO one size fits all setting for this. Different cutin sizes
 *     will look better with different settings for this parameter.
 * 
 *   Fit to Scale?:
 *   - Scale the cutin portrait to fit the cutin style?
 *   - Cannot be used with "Forced Scaling".
 *   - There is NO one size fits all setting for this. Different cutin sizes
 *     will look better with different settings for this parameter.
 * 
 *     Scale Max?:
 *     - Scale the cutin portrait to the maximum fit or scale the cutin
 *       portrait to the minimum fit.
 *     - There is NO one size fits all setting for this. Different cutin sizes
 *       will look better with different settings for this parameter.
 * 
 * ---
 * 
 * Portrait Settings > Animated Portraits
 * 
 *   Loop?:
 *   - Will loop back to beginning once ended.
 *   - Requires VisuMZ_4_AnimatedPictures!
 * 
 *   Wait Frames:
 *   - Frames to wait before moving to next cell.
 *   - Requires VisuMZ_4_AnimatedPictures!
 *
 * ---
 *
 * Parallax Settings > Base Settings
 * 
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the cutin?
 * 
 *   Hue:
 *   - Do you wish to adjust this cutin's parallax hue?
 * 
 *   Opacity:
 *   - What is the opacity level of this cutin's parallax?
 * 
 * ---
 * 
 * Parallax Settings > Scrolling Settings
 * 
 *   Offset X:
 *   - Offsets the cutin parallax's X location.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cutin parallax's Y location.
 *   - Negative: up. Positive: down.
 * 
 *   Scroll X:
 *   - How many pixels does the parallax scroll horizontally?
 *   - Negative: Scroll to right. Positive: Scroll to left.
 * 
 *   Scroll Y:
 *   - How many pixels does the parallax scroll vertically?
 *   - Negative: Scroll to down. Positive: Scroll to up.
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
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.00 Official Release Date: March 1, 2023
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
 * @command CutinStart_VisualCutinEffect
 * @text Cutin Add: Add Visual Cutin Effect
 * @desc Adds the Visual Cutin Effect using these desired settings.
 * Only one of each cutin-style type can be present at a time.
 * 
 * @arg Basic
 * @text Basic Settings
 * 
 * @arg type:str
 * @text Cutin Style Type
 * @parent Basic
 * @type select
 * @option -
 * @option Whole
 * @option -
 * @option Showcase
 * @option -
 * @option LeftHorzSpan
 * @option CenterHorzSpan
 * @option RightHorzSpan
 * @option -
 * @option LeftHorzSlash
 * @option RightHorzSlash
 * @option -
 * @option LeftVertSlash
 * @option RightVertSlash
 * @option -
 * @option LeftMajor
 * @option RightMajor
 * @option -
 * @option LeftMinor
 * @option CenterMinor
 * @option RightMinor
 * @option -
 * @option LeftDiamond
 * @option CenterDiamond
 * @option RightDiamond
 * @option -
 * @option LeftGemstone
 * @option CenterGemstone
 * @option RightGemstone
 * @option -
 * @option TopLeftQuad
 * @option TopRightQuad
 * @option BottomLeftQuad
 * @option BottomRightQuad
 * @option -
 * @option TopLeftCorner
 * @option TopRightCorner
 * @option BottomLeftCorner
 * @option BottomRightCorner
 * @option -
 * @option Row1stThird
 * @option Row2ndThird
 * @option Row3rdThird
 * @option -
 * @option Row1stFourth
 * @option Row2ndFourth
 * @option Row3rdFourth
 * @option Row4thFourth
 * @option -
 * @option Row1stFifth
 * @option Row2ndFifth
 * @option Row3rdFifth
 * @option Row4thFifth
 * @option Row5thFifth
 * @option -
 * @option Col1stThird
 * @option Col2ndThird
 * @option Col3rdThird
 * @option -
 * @option Col1stFourth
 * @option Col2ndFourth
 * @option Col3rdFourth
 * @option Col4thFourth
 * @option -
 * @option Col1stFifth
 * @option Col2ndFifth
 * @option Col3rdFifth
 * @option Col4thFifth
 * @option Col5thFifth
 * @option -
 * @option SixPack1
 * @option SixPack2
 * @option SixPack3
 * @option SixPack4
 * @option SixPack5
 * @option SixPack6
 * @option -
 * @option EightPack1
 * @option EightPack2
 * @option EightPack3
 * @option EightPack4
 * @option EightPack5
 * @option EightPack6
 * @option EightPack7
 * @option EightPack8
 * @option -
 * @option TwelvePack1
 * @option TwelvePack2
 * @option TwelvePack3
 * @option TwelvePack4
 * @option TwelvePack5
 * @option TwelvePack6
 * @option TwelvePack7
 * @option TwelvePack8
 * @option TwelvePack9
 * @option TwelvePack10
 * @option TwelvePack11
 * @option TwelvePack12
 * @option -
 * @desc What Visual Cutin Effect style type do you wish to use?
 * Refer to VisuMZ wiki for visuals on styles.
 * @default CenterHorzSpan
 *
 * @arg portraitFilename:str
 * @text Portrait Filename
 * @parent Basic
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Pick a portrait to use for the Visual Cutin Effect.
 * Pick (None) to not use a portrait.
 * @default >>>ATTENTION<<<
 *
 * @arg parallaxFilename:str
 * @text Parallax Filename
 * @parent Basic
 * @type file
 * @dir img/parallaxes/
 * @require 1
 * @desc Pick a parallax to use for the Visual Cutin Effect.
 * Pick (None) to not use a parallax.
 * @default >>>ATTENTION<<<
 *
 * @arg bgColor:str
 * @text Background Color
 * @parent Basic
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #888888
 *
 * @arg ExtraSettings:struct
 * @text Extra Settings
 * @type struct<Command>
 * @desc Extra Plugin Command settings pertaining to this Visual Cutin Effect.
 * @default {}
 * 
 * @arg WaitForEntrance:eval
 * @text Wait For Entrance
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until cutin entrance is finished before performing
 * the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CutinChange
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CutinChange_PortraitSwap
 * @text Cutin Change: Portrait Swap
 * @desc Changes target cutin-type's portrait with a different image.
 * 
 * @arg Basic
 * @text Basic Settings
 * 
 * @arg type:str
 * @text Cutin Style Type
 * @parent Basic
 * @type select
 * @option -
 * @option Whole
 * @option -
 * @option Showcase
 * @option -
 * @option LeftHorzSpan
 * @option CenterHorzSpan
 * @option RightHorzSpan
 * @option -
 * @option LeftHorzSlash
 * @option RightHorzSlash
 * @option -
 * @option LeftVertSlash
 * @option RightVertSlash
 * @option -
 * @option LeftMajor
 * @option RightMajor
 * @option -
 * @option LeftMinor
 * @option CenterMinor
 * @option RightMinor
 * @option -
 * @option LeftDiamond
 * @option CenterDiamond
 * @option RightDiamond
 * @option -
 * @option LeftGemstone
 * @option CenterGemstone
 * @option RightGemstone
 * @option -
 * @option TopLeftQuad
 * @option TopRightQuad
 * @option BottomLeftQuad
 * @option BottomRightQuad
 * @option -
 * @option TopLeftCorner
 * @option TopRightCorner
 * @option BottomLeftCorner
 * @option BottomRightCorner
 * @option -
 * @option Row1stThird
 * @option Row2ndThird
 * @option Row3rdThird
 * @option -
 * @option Row1stFourth
 * @option Row2ndFourth
 * @option Row3rdFourth
 * @option Row4thFourth
 * @option -
 * @option Row1stFifth
 * @option Row2ndFifth
 * @option Row3rdFifth
 * @option Row4thFifth
 * @option Row5thFifth
 * @option -
 * @option Col1stThird
 * @option Col2ndThird
 * @option Col3rdThird
 * @option -
 * @option Col1stFourth
 * @option Col2ndFourth
 * @option Col3rdFourth
 * @option Col4thFourth
 * @option -
 * @option Col1stFifth
 * @option Col2ndFifth
 * @option Col3rdFifth
 * @option Col4thFifth
 * @option Col5thFifth
 * @option -
 * @option SixPack1
 * @option SixPack2
 * @option SixPack3
 * @option SixPack4
 * @option SixPack5
 * @option SixPack6
 * @option -
 * @option EightPack1
 * @option EightPack2
 * @option EightPack3
 * @option EightPack4
 * @option EightPack5
 * @option EightPack6
 * @option EightPack7
 * @option EightPack8
 * @option -
 * @option TwelvePack1
 * @option TwelvePack2
 * @option TwelvePack3
 * @option TwelvePack4
 * @option TwelvePack5
 * @option TwelvePack6
 * @option TwelvePack7
 * @option TwelvePack8
 * @option TwelvePack9
 * @option TwelvePack10
 * @option TwelvePack11
 * @option TwelvePack12
 * @option -
 * @desc What Visual Cutin Effect style type to update?
 * This determines which existing cutin-type to change.
 * @default CenterHorzSpan
 *
 * @arg portraitFilename:str
 * @text Portrait Filename
 * @parent Basic
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Pick a portrait to swap for the Visual Cutin Effect.
 * Pick (None) to not use a portrait.
 * @default >>>ATTENTION<<<
 *
 * @arg ExtraSettings:struct
 * @text Extra Settings
 * @type struct<Portrait>
 * @desc Extra Plugin Command settings pertaining to this Visual
 * Cutin Effect's portrait only.
 * @default {}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CutinChange_ParallaxSwap
 * @text Cutin Change: Parallax Swap
 * @desc Changes target cutin-type's parallax with a different image.
 * 
 * @arg Basic
 * @text Basic Settings
 * 
 * @arg type:str
 * @text Cutin Style Type
 * @parent Basic
 * @type select
 * @option -
 * @option Whole
 * @option -
 * @option Showcase
 * @option -
 * @option LeftHorzSpan
 * @option CenterHorzSpan
 * @option RightHorzSpan
 * @option -
 * @option LeftHorzSlash
 * @option RightHorzSlash
 * @option -
 * @option LeftVertSlash
 * @option RightVertSlash
 * @option -
 * @option LeftMajor
 * @option RightMajor
 * @option -
 * @option LeftMinor
 * @option CenterMinor
 * @option RightMinor
 * @option -
 * @option LeftDiamond
 * @option CenterDiamond
 * @option RightDiamond
 * @option -
 * @option LeftGemstone
 * @option CenterGemstone
 * @option RightGemstone
 * @option -
 * @option TopLeftQuad
 * @option TopRightQuad
 * @option BottomLeftQuad
 * @option BottomRightQuad
 * @option -
 * @option TopLeftCorner
 * @option TopRightCorner
 * @option BottomLeftCorner
 * @option BottomRightCorner
 * @option -
 * @option Row1stThird
 * @option Row2ndThird
 * @option Row3rdThird
 * @option -
 * @option Row1stFourth
 * @option Row2ndFourth
 * @option Row3rdFourth
 * @option Row4thFourth
 * @option -
 * @option Row1stFifth
 * @option Row2ndFifth
 * @option Row3rdFifth
 * @option Row4thFifth
 * @option Row5thFifth
 * @option -
 * @option Col1stThird
 * @option Col2ndThird
 * @option Col3rdThird
 * @option -
 * @option Col1stFourth
 * @option Col2ndFourth
 * @option Col3rdFourth
 * @option Col4thFourth
 * @option -
 * @option Col1stFifth
 * @option Col2ndFifth
 * @option Col3rdFifth
 * @option Col4thFifth
 * @option Col5thFifth
 * @option -
 * @option SixPack1
 * @option SixPack2
 * @option SixPack3
 * @option SixPack4
 * @option SixPack5
 * @option SixPack6
 * @option -
 * @option EightPack1
 * @option EightPack2
 * @option EightPack3
 * @option EightPack4
 * @option EightPack5
 * @option EightPack6
 * @option EightPack7
 * @option EightPack8
 * @option -
 * @option TwelvePack1
 * @option TwelvePack2
 * @option TwelvePack3
 * @option TwelvePack4
 * @option TwelvePack5
 * @option TwelvePack6
 * @option TwelvePack7
 * @option TwelvePack8
 * @option TwelvePack9
 * @option TwelvePack10
 * @option TwelvePack11
 * @option TwelvePack12
 * @option -
 * @desc What Visual Cutin Effect style type to update?
 * This determines which existing cutin-type to change.
 * @default CenterHorzSpan
 *
 * @arg parallaxFilename:str
 * @text Parallax Filename
 * @parent Basic
 * @type file
 * @dir img/parallaxes/
 * @require 1
 * @desc Pick a parallax to swap for the Visual Cutin Effect.
 * Pick (None) to not use a parallax.
 * @default >>>ATTENTION<<<
 *
 * @arg ExtraSettings:struct
 * @text Extra Settings
 * @type struct<Parallax>
 * @desc Extra Plugin Command settings pertaining to this Visual
 * Cutin Effect's parallax only.
 * @default {}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CutinEnd
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CutinEnd_VisualCutinEffectAll
 * @text Cutin End: End Visual Cutin Effect (All)
 * @desc Ends all Visual Cutin Effects currently present.
 * 
 * @arg WaitForExit:eval
 * @text Wait For Exit
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until cutin exit is finished before performing
 * the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CutinEnd_VisualCutinEffectType
 * @text Cutin End: End Visual Cutin Effect (Type)
 * @desc Ends the Visual Cutin Effect with the matching type.
 * 
 * @arg type:str
 * @text Cutin Style Type
 * @type select
 * @option -
 * @option Whole
 * @option -
 * @option Showcase
 * @option -
 * @option LeftHorzSpan
 * @option CenterHorzSpan
 * @option RightHorzSpan
 * @option -
 * @option LeftHorzSlash
 * @option RightHorzSlash
 * @option -
 * @option LeftVertSlash
 * @option RightVertSlash
 * @option -
 * @option LeftMajor
 * @option RightMajor
 * @option -
 * @option LeftMinor
 * @option CenterMinor
 * @option RightMinor
 * @option -
 * @option LeftDiamond
 * @option CenterDiamond
 * @option RightDiamond
 * @option -
 * @option LeftGemstone
 * @option CenterGemstone
 * @option RightGemstone
 * @option -
 * @option TopLeftQuad
 * @option TopRightQuad
 * @option BottomLeftQuad
 * @option BottomRightQuad
 * @option -
 * @option TopLeftCorner
 * @option TopRightCorner
 * @option BottomLeftCorner
 * @option BottomRightCorner
 * @option -
 * @option Row1stThird
 * @option Row2ndThird
 * @option Row3rdThird
 * @option -
 * @option Row1stFourth
 * @option Row2ndFourth
 * @option Row3rdFourth
 * @option Row4thFourth
 * @option -
 * @option Row1stFifth
 * @option Row2ndFifth
 * @option Row3rdFifth
 * @option Row4thFifth
 * @option Row5thFifth
 * @option -
 * @option Col1stThird
 * @option Col2ndThird
 * @option Col3rdThird
 * @option -
 * @option Col1stFourth
 * @option Col2ndFourth
 * @option Col3rdFourth
 * @option Col4thFourth
 * @option -
 * @option Col1stFifth
 * @option Col2ndFifth
 * @option Col3rdFifth
 * @option Col4thFifth
 * @option Col5thFifth
 * @option -
 * @option SixPack1
 * @option SixPack2
 * @option SixPack3
 * @option SixPack4
 * @option SixPack5
 * @option SixPack6
 * @option -
 * @option EightPack1
 * @option EightPack2
 * @option EightPack3
 * @option EightPack4
 * @option EightPack5
 * @option EightPack6
 * @option EightPack7
 * @option EightPack8
 * @option -
 * @option TwelvePack1
 * @option TwelvePack2
 * @option TwelvePack3
 * @option TwelvePack4
 * @option TwelvePack5
 * @option TwelvePack6
 * @option TwelvePack7
 * @option TwelvePack8
 * @option TwelvePack9
 * @option TwelvePack10
 * @option TwelvePack11
 * @option TwelvePack12
 * @option -
 * @desc What Visual Cutin Effect style type do you wish to end?
 * @default CenterHorzSpan
 * 
 * @arg WaitForExit:eval
 * @text Wait For Exit
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until cutin exit is finished before performing
 * the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Wait
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CutinWait_WaitForEntrance
 * @text Cutin Wait: Wait for Entrance
 * @desc Wait until all cutin entrances are finished before performing the next event command.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CutinWait_WaitForExit
 * @text Cutin Wait: Wait for Exit
 * @desc Wait until all cutin exits are finished before performing the next event command.
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
 * @param VisualCutinEffect
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Styles:struct
 * @text Cutin Style Settings
 * @type struct<Styles>
 * @desc The settings used for each of the various cutin styles.
 * @default {"WholeStyles":"","whole:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","ShowcaseStyles":"","showcase:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","HorzSpanStyles":"","lefthorzspan:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","centerhorzspan:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","righthorzspan:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","HorzSlashStyles":"","lefthorzslash:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","righthorzslash:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","VertSlashStyles":"","leftvertslash:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","rightvertslash:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","MajorStyles":"","leftmajor:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","rightmajor:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","MinorStyles":"","leftminor:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","centerminor:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","rightminor:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","DiamondStyles":"","leftdiamond:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-96\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","centerdiamond:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","rightdiamond:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+96\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","GemstoneStyles":"","leftgemstone:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-96\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","centergemstone:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","rightgemstone:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+96\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","QuadStyles":"","topleftquad:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","toprightquad:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","bottomleftquad:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","bottomrightquad:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","CornerStyles":"","topleftcorner:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","toprightcorner:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","bottomleftcorner:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","bottomrightcorner:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","RowThirdStyles":"","row1stthird:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-36\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+36\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row2ndthird:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-36\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+36\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row3rdthird:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-36\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+36\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","RowFourthStyles":"","row1stfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row2ndfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row3rdfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row4thfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","RowFifthStyles":"","row1stfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row2ndfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row3rdfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row4thfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row5thfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","ColThirdStyles":"","col1stthird:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col2ndthird:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col3rdthird:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","ColFourthStyles":"","col1stfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col2ndfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col3rdfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col4thfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","ColFifthStyles":"","col1stfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col2ndfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col3rdfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col4thfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col5thfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","PackSixStyles":"","sixpack1:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","sixpack2:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","sixpack3:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","sixpack4:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","sixpack5:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","sixpack6:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","PackEightStyles":"","eightpack1:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack2:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-24\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-24\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack3:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+24\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+24\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack4:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack5:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack6:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-24\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-24\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack7:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+24\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+24\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack8:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","PackTwelveStyles":"","twelvepack1:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack2:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-24\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-24\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack3:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+24\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+24\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack4:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack5:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack6:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack7:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack8:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack9:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack10:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-24\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-24\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack11:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+24\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+24\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack12:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","End":""}
 *
 * @param Outline:struct
 * @text Outline Settings
 * @type struct<Outline>
 * @desc The settings used for plugin-generated outlines.
 * @default {"Outer":"","outerOutlineColor:str":"#000000","outerOutlineWeight:num":"4","Middle":"","middleOutlineColor:str":"#ffffff","middleOutlineWeight:num":"8","Inner":"","innerOutlineColor:str":"#000000","innerOutlineWeight:num":"4"}
 *
 * @param ExtraDefaults:struct
 * @text "Extra Settings" Defaults
 * @type struct<Command>
 * @desc Default "Extra Settings" values if the "Extra Settings"
 * Plugin Command parameter is left untouched.
 * @default {"Transition":"","enterDuration:num":"12","exitDuration:num":"12","Cutin":"","bgShow:eval":"true","outlineShow:eval":"true","Portrait":"","PortraitBase":"","portraitAnchorX:num":"0.5","portraitAnchorY:num":"0.5","portraitHue:num":"0","portraitOpacity:num":"255","portraitOffsetX:num":"+0","portraitOffsetY:num":"+0","PortraitEnter":"","portraitEnterX:num":"+0","portraitEnterY:num":"+0","portraitEnterEasingType:str":"InOutSine","PortraitExit":"","portraitExitX:num":"+0","portraitExitY:num":"+0","portraitExitEasingType:str":"InOutSine","PortraitFlip":"","portraitFlipHorz:eval":"false","portraitFlipVert:eval":"false","PortraitScale":"","portraitForcedScale:num":"0.0","portraitScaleToFit:eval":"true","portraitScaleMax:eval":"false","PortraitAni":"","animatedPortraitLooping:eval":"true","animatedPortraitWaitFrames:num":"4","Parallax":"","ParallaxBase":"","parallaxBlendMode:num":"0","parallaxHue:num":"0","parallaxOpacity:num":"255","ParallaxScroll":"","parallaxOffsetX:num":"+0.0","parallaxOffsetY:num":"+0.0","parallaxScrollX:num":"+0.0","parallaxScrollY:num":"+0.0"}
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
 * Styles Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Styles:
 *
 * @param WholeStyles
 * @text ---Whole Style---
 *
 * @param whole:struct
 * @text Whole
 * @parent WholeStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param ShowcaseStyles
 * @text ---Showcase Style---
 *
 * @param showcase:struct
 * @text Showcase
 * @parent ShowcaseStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param HorzSpanStyles
 * @text ---Horizontal Span---
 *
 * @param lefthorzspan:struct
 * @text LeftHorzSpan
 * @parent HorzSpanStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param centerhorzspan:struct
 * @text CenterHorzSpan
 * @parent HorzSpanStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param righthorzspan:struct
 * @text RightHorzSpan
 * @parent HorzSpanStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param HorzSlashStyles
 * @text ---Horizontal Slash---
 *
 * @param lefthorzslash:struct
 * @text LeftHorzSlash
 * @parent HorzSlashStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param righthorzslash:struct
 * @text RightHorzSlash
 * @parent HorzSlashStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param VertSlashStyles
 * @text ---Vertical Slash---
 *
 * @param leftvertslash:struct
 * @text LeftVertSlash
 * @parent VertSlashStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param rightvertslash:struct
 * @text RightVertSlash
 * @parent VertSlashStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param MajorStyles
 * @text ---Major Styles---
 *
 * @param leftmajor:struct
 * @text LeftMajor
 * @parent MajorStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param rightmajor:struct
 * @text RightMajor
 * @parent MajorStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param MinorStyles
 * @text ---Minor Styles---
 *
 * @param leftminor:struct
 * @text LeftMinor
 * @parent MinorStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param centerminor:struct
 * @text CenterMinor
 * @parent MinorStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param rightminor:struct
 * @text RightMinor
 * @parent MinorStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param DiamondStyles
 * @text ---Diamond Styles---
 *
 * @param leftdiamond:struct
 * @text LeftDiamond
 * @parent DiamondStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-96","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param centerdiamond:struct
 * @text CenterDiamond
 * @parent DiamondStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param rightdiamond:struct
 * @text RightDiamond
 * @parent DiamondStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+96","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param GemstoneStyles
 * @text ---Gemstone Styles---
 *
 * @param leftgemstone:struct
 * @text LeftGemstone
 * @parent GemstoneStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-96","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param centergemstone:struct
 * @text CenterGemstone
 * @parent GemstoneStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param rightgemstone:struct
 * @text RightGemstone
 * @parent GemstoneStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+96","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param QuadStyles
 * @text ---Quadrant Styles---
 *
 * @param topleftquad:struct
 * @text TopLeftQuad
 * @parent QuadStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.0, 0.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param toprightquad:struct
 * @text TopRightQuad
 * @parent QuadStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 1.0, 0.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param bottomleftquad:struct
 * @text BottomLeftQuad
 * @parent QuadStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.0, 1.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param bottomrightquad:struct
 * @text BottomRightQuad
 * @parent QuadStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 1.0, 1.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param CornerStyles
 * @text ---Corner Styles---
 *
 * @param topleftcorner:struct
 * @text TopLeftCorner
 * @parent CornerStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.0, 0.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param toprightcorner:struct
 * @text TopRightCorner
 * @parent CornerStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 1.0, 0.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param bottomleftcorner:struct
 * @text BottomLeftCorner
 * @parent CornerStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.0, 1.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param bottomrightcorner:struct
 * @text BottomRightCorner
 * @parent CornerStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 1.0, 1.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param RowThirdStyles
 * @text ---Row Thirds---
 *
 * @param row1stthird:struct
 * @text Row1stThird
 * @parent RowThirdStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-36","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+36","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row2ndthird:struct
 * @text Row2ndThird
 * @parent RowThirdStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-36","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+36","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row3rdthird:struct
 * @text Row3rdThird
 * @parent RowThirdStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-36","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+36","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param RowFourthStyles
 * @text ---Row Fourths---
 *
 * @param row1stfourth:struct
 * @text Row1stFourth
 * @parent RowFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row2ndfourth:struct
 * @text Row2ndFourth
 * @parent RowFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row3rdfourth:struct
 * @text Row3rdFourth
 * @parent RowFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row4thfourth:struct
 * @text Row4thFourth
 * @parent RowFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param RowFifthStyles
 * @text ---Row Fifths---
 *
 * @param row1stfifth:struct
 * @text Row1stFifth
 * @parent RowFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row2ndfifth:struct
 * @text Row2ndFifth
 * @parent RowFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row3rdfifth:struct
 * @text Row3rdFifth
 * @parent RowFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row4thfifth:struct
 * @text Row4thFifth
 * @parent RowFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row5thfifth:struct
 * @text Row5thFifth
 * @parent RowFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 * 
 * @param ColThirdStyles
 * @text ---Column Thirds---
 *
 * @param col1stthird:struct
 * @text Col1stThird
 * @parent ColThirdStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col2ndthird:struct
 * @text Col2ndThird
 * @parent ColThirdStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col3rdthird:struct
 * @text Col3rdThird
 * @parent ColThirdStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param ColFourthStyles
 * @text ---Column Fourths---
 *
 * @param col1stfourth:struct
 * @text Col1stFourth
 * @parent ColFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col2ndfourth:struct
 * @text Col2ndFourth
 * @parent ColFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col3rdfourth:struct
 * @text Col3rdFourth
 * @parent ColFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col4thfourth:struct
 * @text Col4thFourth
 * @parent ColFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param ColFifthStyles
 * @text ---Column Fifths---
 *
 * @param col1stfifth:struct
 * @text Col1stFifth
 * @parent ColFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col2ndfifth:struct
 * @text Col2ndFifth
 * @parent ColFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col3rdfifth:struct
 * @text Col3rdFifth
 * @parent ColFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col4thfifth:struct
 * @text Col4thFifth
 * @parent ColFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col5thfifth:struct
 * @text Col5thFifth
 * @parent ColFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param PackSixStyles
 * @text ---Six Pack---
 *
 * @param sixpack1:struct
 * @text SixPack1
 * @parent PackSixStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param sixpack2:struct
 * @text SixPack2
 * @parent PackSixStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param sixpack3:struct
 * @text SixPack3
 * @parent PackSixStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param sixpack4:struct
 * @text SixPack4
 * @parent PackSixStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param sixpack5:struct
 * @text SixPack5
 * @parent PackSixStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param sixpack6:struct
 * @text SixPack6
 * @parent PackSixStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param PackEightStyles
 * @text ---Eight Pack---
 *
 * @param eightpack1:struct
 * @text EightPack1
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack2:struct
 * @text EightPack2
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-24","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-24","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack3:struct
 * @text EightPack3
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+24","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+24","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack4:struct
 * @text EightPack4
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack5:struct
 * @text EightPack5
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack6:struct
 * @text EightPack6
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-24","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-24","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack7:struct
 * @text EightPack7
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+24","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+24","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack8:struct
 * @text EightPack8
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param PackTwelveStyles
 * @text ---Twelve Pack---
 *
 * @param twelvepack1:struct
 * @text TwelvePack1
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack2:struct
 * @text TwelvePack2
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-24","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-24","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack3:struct
 * @text TwelvePack3
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+24","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+24","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack4:struct
 * @text TwelvePack4
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack5:struct
 * @text TwelvePack5
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack6:struct
 * @text TwelvePack6
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack7:struct
 * @text TwelvePack7
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack8:struct
 * @text TwelvePack8
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack9:struct
 * @text TwelvePack9
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack10:struct
 * @text TwelvePack10
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-24","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-24","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack11:struct
 * @text TwelvePack11
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+24","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+24","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack12:struct
 * @text TwelvePack12
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param End
 * @text --------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Style Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StyleData:
 *
 * @param Cutin
 * 
 * @param cutinOffsetX:num
 * @text Offset X
 * @parent Cutin
 * @desc Offsets the cutin overall's X location.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param cutinOffsetY:num
 * @text Offset Y
 * @parent Cutin
 * @desc Offsets the cutin overall's Y location.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Enter
 * @text Entrance Movement
 * 
 * @param enterX:num
 * @text Entrance X
 * @parent Enter
 * @desc Sets the whole cutin's X entrance.
 * Negative: from left. Positive: from right.
 * @default +0
 * 
 * @param enterY:num
 * @text Entrance Y
 * @parent Enter
 * @desc Sets the whole cutin's Y entrance.
 * Negative: from up. Positive: from down.
 * @default +0
 *
 * @param enterEasingType:str
 * @text Entrance Easing
 * @parent Enter
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 * @param Exit
 * @text Exit Movement
 * 
 * @param exitX:num
 * @text Exit X
 * @parent Exit
 * @desc Sets the whole cutin's X exit.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param exitY:num
 * @text Exit Y
 * @parent Exit
 * @desc Sets the whole cutin's Y exit.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param exitEasingType:str
 * @text Exit Easing
 * @parent Exit
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 * @param Mask
 *
 * @param maskFilename:str
 * @text Filename
 * @parent Mask
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for a custom cutin mask.
 * Leave empty for plugin-generated mask.
 * @default 
 *
 * @param Outline
 *
 * @param outlineFilename:str
 * @text Filename
 * @parent Outline
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for a custom cutin outline.
 * Leave empty for plugin-generated outline.
 * @default 
 * 
 * @param outlineOffsetX:num
 * @text Offset X
 * @parent Outline
 * @desc Offsets the cutin outline's X location.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param outlineOffsetY:num
 * @text Offset Y
 * @parent Outline
 * @desc Offsets the cutin outline's Y location.
 * Negative: up. Positive: down.
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Outline Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Outline:
 *
 * @param Outer
 * @text Outer Layer
 *
 * @param outerOutlineColor:str
 * @text Line Color
 * @parent Outer
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #000000
 * 
 * @param outerOutlineWeight:num
 * @text Line Width
 * @parent Outer
 * @type number
 * @desc What is the width of the line?
 * @default 4
 *
 * @param Middle
 * @text Middle Layer
 *
 * @param middleOutlineColor:str
 * @text Line Color
 * @parent Middle
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 * 
 * @param middleOutlineWeight:num
 * @text Line Width
 * @parent Middle
 * @type number
 * @desc What is the width of the line?
 * @default 8
 *
 * @param Inner
 * @text Inner Layer
 *
 * @param innerOutlineColor:str
 * @text Line Color
 * @parent Inner
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #000000
 * 
 * @param innerOutlineWeight:num
 * @text Line Width
 * @parent Inner
 * @type number
 * @desc What is the width of the line?
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Command Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Transition
 * 
 * @param enterDuration:num
 * @text Entrance Duration
 * @parent Transition
 * @type number
 * @desc How many frames does it take to fully enter?
 * Used when a Visual Cutin Effect starts.
 * @default 12
 * 
 * @param exitDuration:num
 * @text Exit Duration
 * @parent Transition
 * @type number
 * @desc How many frames does it take to fully exit?
 * Used when a Visual Cutin Effect ends.
 * @default 12
 *
 * @param Cutin
 * @text Cutin Settings
 *
 * @param bgShow:eval
 * @text Show BG Color?
 * @parent Cutin
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add a background color for this cutin?
 * Background colors appear behind the parallax.
 * @default true
 *
 * @param outlineShow:eval
 * @text Show Outline?
 * @parent Cutin
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the cutin outline?
 * @default true
 *
 * @param Portrait
 * @text Portrait Settings
 *
 * @param PortraitBase
 * @text Base Properties
 * @parent Portrait
 * 
 * @param portraitAnchorX:num
 * @text Anchor X
 * @parent PortraitBase
 * @desc Determines the sprite anchor X alignment.
 * 0.0: Left, 0.5: Center, 1.0: Right.
 * @default 0.5
 * 
 * @param portraitAnchorY:num
 * @text Anchor Y
 * @parent PortraitBase
 * @desc Determines the sprite anchor Y alignment.
 * 0.0: Top, 0.5: Middle, 1.0: Bottom.
 * @default 0.5
 *
 * @param portraitHue:num
 * @text Hue
 * @parent PortraitBase
 * @type number
 * @min 0
 * @max 360
 * @desc Do you wish to adjust this cutin's portrait hue?
 * @default 0
 * 
 * @param portraitOpacity:num
 * @text Opacity
 * @parent PortraitBase
 * @type number
 * @max 255
 * @desc What is the opacity level of this cutin's portrait?
 * @default 255
 * 
 * @param portraitOffsetX:num
 * @text Offset X
 * @parent PortraitBase
 * @desc Offsets the cutin portrait's X location.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param portraitOffsetY:num
 * @text Offset Y
 * @parent PortraitBase
 * @desc Offsets the cutin portrait's Y location.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param PortraitEnter
 * @text Entrance Properties
 * @parent Portrait
 * 
 * @param portraitEnterX:num
 * @text Entrance X
 * @parent PortraitEnter
 * @desc Sets the cutin portrait's X entrance.
 * Negative: from left. Positive: from right.
 * @default +0
 * 
 * @param portraitEnterY:num
 * @text Entrance Y
 * @parent PortraitEnter
 * @desc Sets the cutin portrait's Y entrance.
 * Negative: from up. Positive: from down.
 * @default +0
 *
 * @param portraitEnterEasingType:str
 * @text Entrance Easing
 * @parent PortraitEnter
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 * @param PortraitExit
 * @text Exit Properties
 * @parent Portrait
 * 
 * @param portraitExitX:num
 * @text Exit X
 * @parent PortraitExit
 * @desc Sets the cutin portrait's X exit.
 * Negative: to left. Positive: to right.
 * @default +0
 * 
 * @param portraitExitY:num
 * @text Exit Y
 * @parent PortraitExit
 * @desc Sets the cutin portrait's Y exit.
 * Negative: to up. Positive: to down.
 * @default +0
 *
 * @param portraitExitEasingType:str
 * @text Exit Easing
 * @parent PortraitExit
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 * @param PortraitFlip
 * @text Flip Properties
 * @parent Portrait
 *
 * @param portraitFlipHorz:eval
 * @text Flip Horizontally?
 * @parent PortraitFlip
 * @type boolean
 * @on Flip
 * @off Don't Flip
 * @desc Flip the cutin portrait horizontally?
 * @default false
 *
 * @param portraitFlipVert:eval
 * @text Flip Vertically?
 * @parent PortraitFlip
 * @type boolean
 * @on Flip
 * @off Don't Flip
 * @desc Flip the cutin portrait vertically?
 * @default false
 *
 * @param PortraitScale
 * @text Scaling Properties
 * @parent Portrait
 * 
 * @param portraitForcedScale:num
 * @text Forced Scaling
 * @parent PortraitScale
 * @desc Do you want to force a scaling ratio?
 * Leave as 0 for none. Disables "Fit to Scale?".
 * @default 0.0
 *
 * @param portraitScaleToFit:eval
 * @text Fit to Scale?
 * @parent PortraitScale
 * @type boolean
 * @on Fit to Scale
 * @off Don't Scale
 * @desc Scale the cutin portrait to fit the cutin style?
 * Cannot be used with "Forced Scaling".
 * @default true
 *
 * @param portraitScaleMax:eval
 * @text Scale Max?
 * @parent portraitScaleToFit:eval
 * @type boolean
 * @on Scale Maximum
 * @off Scale Minimum
 * @desc Scale the cutin portrait to the maximum fit or
 * scale the cutin portrait to the minimum fit.
 * @default false
 *
 * @param PortraitAni
 * @text Animated Portraits
 * @parent Portrait
 *
 * @param animatedPortraitLooping:eval
 * @text Loop?
 * @parent PortraitAni
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Will loop back to beginning once ended.
 * Requires VisuMZ_4_AnimatedPictures!
 * @default true
 *
 * @param animatedPortraitWaitFrames:num
 * @text Wait Frames
 * @parent PortraitAni
 * @type number
 * @min 1
 * @desc Frames to wait before moving to next cell.
 * Requires VisuMZ_4_AnimatedPictures!
 * @default 4
 *
 * @param Parallax
 * @text Parallax Settings
 *
 * @param ParallaxBase
 * @text Base Settings
 * @parent Parallax
 *
 * @param parallaxBlendMode:num
 * @text Blend Mode
 * @parent ParallaxBase
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the cutin?
 * @default 0
 *
 * @param parallaxHue:num
 * @text Hue
 * @parent ParallaxBase
 * @type number
 * @min 0
 * @max 360
 * @desc Do you wish to adjust this cutin's parallax hue?
 * @default 0
 * 
 * @param parallaxOpacity:num
 * @text Opacity
 * @parent ParallaxBase
 * @type number
 * @max 255
 * @desc What is the opacity level of this cutin's parallax?
 * @default 255
 *
 * @param ParallaxScroll
 * @text Scrolling Settings
 * @parent Parallax
 * 
 * @param parallaxOffsetX:num
 * @text Offset X
 * @parent ParallaxScroll
 * @desc Offsets the cutin parallax's X location.
 * Negative: left. Positive: right.
 * @default +0.0
 * 
 * @param parallaxOffsetY:num
 * @text Offset Y
 * @parent ParallaxScroll
 * @desc Offsets the cutin parallax's Y location.
 * Negative: up. Positive: down.
 * @default +0.0
 * 
 * @param parallaxScrollX:num
 * @text Scroll X
 * @parent ParallaxScroll
 * @desc How many pixels does the parallax scroll horizontally?
 * Negative: Scroll to right. Positive: Scroll to left.
 * @default +0.0
 * 
 * @param parallaxScrollY:num
 * @text Scroll Y
 * @parent ParallaxScroll
 * @desc How many pixels does the parallax scroll vertically?
 * Negative: Scroll to down. Positive: Scroll to up.
 * @default +0.0
 *
 */
/* ----------------------------------------------------------------------------
 * Portrait Change Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Portrait:
 *
 * @param Portrait
 * @text Portrait Settings
 *
 * @param PortraitBase
 * @text Base Properties
 * @parent Portrait
 * 
 * @param portraitAnchorX:num
 * @text Anchor X
 * @parent PortraitBase
 * @desc Determines the sprite anchor X alignment.
 * 0.0: Left, 0.5: Center, 1.0: Right.
 * @default 0.5
 * 
 * @param portraitAnchorY:num
 * @text Anchor Y
 * @parent PortraitBase
 * @desc Determines the sprite anchor Y alignment.
 * 0.0: Top, 0.5: Middle, 1.0: Bottom.
 * @default 0.5
 *
 * @param portraitHue:num
 * @text Hue
 * @parent PortraitBase
 * @type number
 * @min 0
 * @max 360
 * @desc Do you wish to adjust this cutin's portrait hue?
 * @default 0
 * 
 * @param portraitOpacity:num
 * @text Opacity
 * @parent PortraitBase
 * @type number
 * @max 255
 * @desc What is the opacity level of this cutin's portrait?
 * @default 255
 * 
 * @param portraitOffsetX:num
 * @text Offset X
 * @parent PortraitBase
 * @desc Offsets the cutin portrait's X location.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param portraitOffsetY:num
 * @text Offset Y
 * @parent PortraitBase
 * @desc Offsets the cutin portrait's Y location.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param PortraitEnter
 * @text Entrance Properties
 * @parent Portrait
 * 
 * @param portraitEnterX:num
 * @text Entrance X
 * @parent PortraitEnter
 * @desc Sets the cutin portrait's X entrance.
 * Negative: from left. Positive: from right.
 * @default +0
 * 
 * @param portraitEnterY:num
 * @text Entrance Y
 * @parent PortraitEnter
 * @desc Sets the cutin portrait's Y entrance.
 * Negative: from up. Positive: from down.
 * @default +0
 *
 * @param portraitEnterEasingType:str
 * @text Entrance Easing
 * @parent PortraitEnter
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 * @param PortraitExit
 * @text Exit Properties
 * @parent Portrait
 * 
 * @param portraitExitX:num
 * @text Exit X
 * @parent PortraitExit
 * @desc Sets the cutin portrait's X exit.
 * Negative: to left. Positive: to right.
 * @default +0
 * 
 * @param portraitExitY:num
 * @text Exit Y
 * @parent PortraitExit
 * @desc Sets the cutin portrait's Y exit.
 * Negative: to up. Positive: to down.
 * @default +0
 *
 * @param portraitExitEasingType:str
 * @text Exit Easing
 * @parent PortraitExit
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 * @param PortraitFlip
 * @text Flip Properties
 * @parent Portrait
 *
 * @param portraitFlipHorz:eval
 * @text Flip Horizontally?
 * @parent PortraitFlip
 * @type boolean
 * @on Flip
 * @off Don't Flip
 * @desc Flip the cutin portrait horizontally?
 * @default false
 *
 * @param portraitFlipVert:eval
 * @text Flip Vertically?
 * @parent PortraitFlip
 * @type boolean
 * @on Flip
 * @off Don't Flip
 * @desc Flip the cutin portrait vertically?
 * @default false
 *
 * @param PortraitScale
 * @text Scaling Properties
 * @parent Portrait
 * 
 * @param portraitForcedScale:num
 * @text Forced Scaling
 * @parent PortraitScale
 * @desc Do you want to force a scaling ratio?
 * Leave as 0 for none. Disables "Fit to Scale?".
 * @default 0.0
 *
 * @param portraitScaleToFit:eval
 * @text Fit to Scale?
 * @parent PortraitScale
 * @type boolean
 * @on Fit to Scale
 * @off Don't Scale
 * @desc Scale the cutin portrait to fit the cutin style?
 * Cannot be used with "Forced Scaling".
 * @default true
 *
 * @param portraitScaleMax:eval
 * @text Scale Max?
 * @parent portraitScaleToFit:eval
 * @type boolean
 * @on Scale Maximum
 * @off Scale Minimum
 * @desc Scale the cutin portrait to the maximum fit or
 * scale the cutin portrait to the minimum fit.
 * @default true
 *
 * @param PortraitAni
 * @text Animated Portraits
 * @parent Portrait
 *
 * @param animatedPortraitLooping:eval
 * @text Loop?
 * @parent PortraitAni
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Will loop back to beginning once ended.
 * Requires VisuMZ_4_AnimatedPictures!
 * @default true
 *
 * @param animatedPortraitWaitFrames:num
 * @text Wait Frames
 * @parent PortraitAni
 * @type number
 * @min 1
 * @desc Frames to wait before moving to next cell.
 * Requires VisuMZ_4_AnimatedPictures!
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Parallax Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Parallax:
 *
 * @param Parallax
 * @text Parallax Settings
 *
 * @param ParallaxBase
 * @text Base Settings
 * @parent Parallax
 *
 * @param parallaxBlendMode:num
 * @text Blend Mode
 * @parent ParallaxBase
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the cutin?
 * @default 0
 *
 * @param parallaxHue:num
 * @text Hue
 * @parent ParallaxBase
 * @type number
 * @min 0
 * @max 360
 * @desc Do you wish to adjust this cutin's parallax hue?
 * @default 0
 * 
 * @param parallaxOpacity:num
 * @text Opacity
 * @parent ParallaxBase
 * @type number
 * @max 255
 * @desc What is the opacity level of this cutin's parallax?
 * @default 255
 *
 * @param ParallaxScroll
 * @text Scrolling Settings
 * @parent Parallax
 * 
 * @param parallaxOffsetX:num
 * @text Offset X
 * @parent ParallaxScroll
 * @desc Offsets the cutin parallax's X location.
 * Negative: left. Positive: right.
 * @default +0.0
 * 
 * @param parallaxOffsetY:num
 * @text Offset Y
 * @parent ParallaxScroll
 * @desc Offsets the cutin parallax's Y location.
 * Negative: up. Positive: down.
 * @default +0.0
 * 
 * @param parallaxScrollX:num
 * @text Scroll X
 * @parent ParallaxScroll
 * @desc How many pixels does the parallax scroll horizontally?
 * Negative: Scroll to right. Positive: Scroll to left.
 * @default +0.0
 * 
 * @param parallaxScrollY:num
 * @text Scroll Y
 * @parent ParallaxScroll
 * @desc How many pixels does the parallax scroll vertically?
 * Negative: Scroll to down. Positive: Scroll to up.
 * @default +0.0
 *
 */
//=============================================================================

const _0x157cda=_0x125e;function _0x1561(){const _0x5c2b80=['STRUCT','enterEasingType','clearAllVisualCutins','DgpjI','portraitType','_loadingBitmaps','twelvepack3','visualCutinPortraitType','setFrame','type','bgColor','portraitForcedScale','_context','parallaxBlendMode','OutlineThickness','_maskSprite','create_VisualCutinEffect_Bitmap_Corner','ApplyEasing','CutinChange_ParallaxSwap','DgRMF','remove','animationWaitFrames','prepareNewParallax','initMembers','checkAllBitmapsLoaded','hasCustomCutinMaskAndOutline','_customVisualCutinPortraitFlipHorz','_cached_VisualCutinEffect_Outline','hvRuo','RegExp','updateParallaxSprite','faceIndex','height','visualCutinPortraitFilename','fillStyle','FUNC','changeVisualCutinEffectPortrait','_fadeDuration','outlineFilename','twelvepack2','eightpack4','initVisualCutinEffect','exitEasingType','exit','max','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','WaitForEntrance','rgba(0,0,0,0)','MwjNC','_entering','isAnimationLooping','2610819BzOAjp','1877628tSZHFC','col3rdthird','cutinExit','isAnyCutinExiting','getCustomVisualCutinPortraitFilename','col1stfifth','middleOutlineWeight','eightpack1','loadEnemy','getBattlePortraitFilename','createParallaxSprite','portraitAnchorY','_visualCutinEffect','isUsingSideviewUiLayout','statusWindowHeight','euTJE','bind','description','_cached_VisualCutinEffect_Mask','face','log','VhcMI','935586ytTNwB','faceHeight','Actor1_2','CreateCutinSettings','EnemyCutinFlipVert','HREeh','ExtraSettings','_animationCount','beginPath','MgBoF','CutinChange_PortraitSwap','_type','parallaxOffsetY','loadPicture','EnemyCutinFlipHorz','_foregroundMaskFilter','showcase','ZDkPk','_moveTargetY','parallaxOpacity','Scene_Battle_createSpriteset','outlineOffsetY','create_VisualCutinEffect_Bitmap_VertSlash','faceName','format','enemy','_loadingState','children','createMaskSprites','round','Only\x20one\x20cutin\x20of\x20each\x20type\x20can\x20be\x20visible\x20at\x20a\x20time.','stroke','row3rdthird','jNzRL','_visualCutins','216760VHWNYs','filter','updateAnimatedPortrait','includes','portraitScaleMax','eightpack8','_movePortraitDuration','col2ndfifth','col4thfourth','save','loadPortraitBitmap','MPqoy','enterY','scale','outlineOffsetX','Game_Screen_initialize','changeVisualCutinEffectParallax','bgShow','NUM','calcWindowHeight','portraitEnterEasingType','fill','_parallaxColorFilter','col4thfifth','portraitEnterX','jyGxg','updateCutinMovement','topleftquad','removeChild','sixpack3','NiQzA','XCGvJ','rightgemstone','prototype','sixpack4','rightdiamond','setHue','gISrx','fill_VisualCutinEffect_Bitmap','changeVisualCutinParallax','push','parallaxFilename','parallaxScrollY','animatedPortraitWaitFrames','_parallaxSprite','leftvertslash','parallaxHue','CutinEnd_VisualCutinEffectType','ARRAYFUNC','_fadeTarget','loadAllBitmaps','JxGOD','_customModified','bgColorJS','isSceneBattle','twelvepack10','_animationMaxCells','updatePortraitMovement','cutinEnter','leftminor','col5thfifth','_movePortraitWholeDuration','endVisualCutin','row5thfifth','col2ndthird','createAllSprites','row2ndfifth','toLowerCase','outerOutlineColor','initPosition','_animationIndex','klMtv','_portraitSprite','svActorVertCells','_customVisualCutinPortraitFlipVert','updateAnimatedPictureCount','origin','portraitScaleToFit','_movePortraitEasingType','hasSvBattler','create_VisualCutinEffect_Bitmap_Pack','eightpack6','_waitMode','portraitHue','settings','outerOutlineWeight','_spriteset','col3rdfourth','isAnyCutinEntering','_foregroundContainer','bottomleftcorner','battlerName','Outline','portraitOpacity','floor','create_VisualCutinEffect_Bitmap_Diamond','leftdiamond','rightminor','_fadeRemove','parallaxScrollX','createOutlineSprite','registerCommand','row4thfourth','whole','move','outlineShow','create_VisualCutinEffect_Bitmap_Showcase','width','status','styles','opacity','34mznHHd','centerhorzspan','min','row3rdfourth','getVisualCutinStyleData','toprightcorner','_moveEasingType','length','lefthorzspan','twelvepack6','innerOutlineWeight','filters','DPQKR','cached_VisualCutinEffect_Mask','sixpack1','STR','_moveWholeDuration','startExit','updateAnimatedPictureFrame','VISUAL_CUTIN_EFFECT','battle','loadSvEnemy','eightpack5','row1stthird','create_VisualCutinEffect_Bitmap','_exiting','11lWsMwv','AnimatedPictures','_animationVertCells','bottom','SpriteMaskFilter','VisuMZ_4_AnimatedPictures','getVisualCutinEffectSettings','textColor','cached_VisualCutinEffect_Outline','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','stringify','note','_baseTexture','Settings','CutinStart_VisualCutinEffect','blendMode','applyParallaxBitmap','portraitFlipHorz','Styles','getLastPluginCommandInterpreter','create_VisualCutinEffect_Bitmap_Whole','portraitExitX','twelvepack4','restore','row4thfifth','YnyJb','exitDuration','col2ndfourth','loading','create_VisualCutinEffect_Bitmap_HorzSlash','applyPortraitBitmap','create_VisualCutinEffect_Bitmap_Cols','#000000','Space','JSON','col3rdfifth','_outlineSprite','portraitAnchorX','exitY','anchor','_portraitTargetX','row2ndthird','_visualCutinContainer','twelvepack7','addChildAt','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','row1stfifth','createSpriteset','bottomleftquad','destroy','bottomrightcorner','row2ndfourth','fillRect','_statusWindow','visualCutinPortraitIndex','removeVisualCutin','sixpack2','isAnimatedPortrait','trim','styleData','righthorzslash','leftmajor','svEnemy','addChild','ceil','row3rdfifth','twelvepack11','32pEHXCO','rightmajor','_backgroundMaskFilter','prepareNewPortrait','VqcPC','loadFace','svActor','updateOpacity','udYcn','applyPortraitFrame','bOOCJ','1486coDQnj','initialize','_customVisualCutinPortraitFilename','ConvertParams','qktsW','twelvepack1','portraitExitY','black','WaitForExit','portraitOffsetX','loadParallax','bottomrightquad','toprightquad','some','GBoGw','centerdiamond','A\x20Visual\x20Cutin\x20Effect\x20for\x20this\x20type\x20already\x20exists.\x0a','strokeStyle','1622132ekGLcF','order','visualCutinPortraitHue','BnBqy','middleOutlineColor','create','_scene','create_VisualCutinEffect_Bitmap_HorzSpan','centerminor','ARRAYSTRUCT','map','lineTo','lefthorzslash','portraitFilename','createBgColorSprite','_animationHorzCells','row1stfourth','fMdVm','parameters','Linear','leftgemstone','enterX','_isAnimatedPicture','svActorHorzCells','version','twelvepack5','topleftcorner','10ljzZqa','createVisualCutinContainer','create_VisualCutinEffect_Bitmap_Gemstone','createVisualCutins','maskFilename','setWaitMode','VisuMZ_1_BattleCore','eightpack2','VisuMZ_3_SideviewBattleUI','innerOutlineColor','VisualCutinEffect','portraitFlipVert','parallaxOffsetX','animatedPortraitLooping','name','_moveTargetX','VisuMZ_0_CoreEngine','addLoadListener','call','svBattlerName','isPlaytest','create_VisualCutinEffect_Bitmap_Quad','constructor','toUpperCase','portraitOffsetY','return\x200','_portraitTargetY','col1stthird','rightvertslash','_moveDuration','lineWidth','righthorzspan','ARRAYSTR','Game_Interpreter_updateWaitMode','create_VisualCutinEffect_Bitmap_Rows','cutinOffsetX','createExistingVisualCutinSprites','eightpack7','Loop','ARRAYNUM','globalAlpha','typeJS','match','removeVisualCutinEffect','_bgSprite','centergemstone','ExtraDefaults','col1stfourth','>>>attention<<<','drawOutlinePolygon','parse','loadSvActor','portraitEnterY','twelvepack8','gREtx','#cccccc','OJOuz','sixpack6','update','parallaxFilenameJS','bitmap','cutinOffsetY','EnemyCutinPortraitName','applyEasing','portraitExitEasingType','WYlTy','uxFiu','WaitFrames','sixpack5','startVisualCutin','faceWidth','eightpack3','createPortraitSprite','570577GEARns','ymsmh','36kpSAnt','enterDuration','getColor','twelvepack12','SGPiK','_backgroundContainer','exitX','twelvepack9','addVisualCutinEffect','getVisualCutinEffectSpriteOrder'];_0x1561=function(){return _0x5c2b80;};return _0x1561();}(function(_0x5834ce,_0x4ad940){const _0x3061e1=_0x125e,_0x289135=_0x5834ce();while(!![]){try{const _0x43a8a9=parseInt(_0x3061e1(0x307))/0x1*(parseInt(_0x3061e1(0x36f))/0x2)+parseInt(_0x3061e1(0x275))/0x3+parseInt(_0x3061e1(0x381))/0x4+parseInt(_0x3061e1(0x298))/0x5*(-parseInt(_0x3061e1(0x221))/0x6)+parseInt(_0x3061e1(0x21f))/0x7*(-parseInt(_0x3061e1(0x364))/0x8)+-parseInt(_0x3061e1(0x25e))/0x9*(-parseInt(_0x3061e1(0x39c))/0xa)+parseInt(_0x3061e1(0x321))/0xb*(-parseInt(_0x3061e1(0x25f))/0xc);if(_0x43a8a9===_0x4ad940)break;else _0x289135['push'](_0x289135['shift']());}catch(_0x291e28){_0x289135['push'](_0x289135['shift']());}}}(_0x1561,0x46d4b));var label=_0x157cda(0x3a6),tier=tier||0x0,dependencies=[_0x157cda(0x3ac)],pluginData=$plugins[_0x157cda(0x299)](function(_0x155e84){const _0x132205=_0x157cda;return _0x155e84[_0x132205(0x304)]&&_0x155e84['description'][_0x132205(0x29b)]('['+label+']');})[0x0];function _0x125e(_0x5c15c1,_0x2a5391){const _0x156126=_0x1561();return _0x125e=function(_0x125e0,_0x2a8c31){_0x125e0=_0x125e0-0x1f3;let _0x367e38=_0x156126[_0x125e0];return _0x367e38;},_0x125e(_0x5c15c1,_0x2a5391);}VisuMZ[label][_0x157cda(0x32e)]=VisuMZ[label][_0x157cda(0x32e)]||{},VisuMZ[_0x157cda(0x372)]=function(_0x1b4858,_0x509109){const _0xfb400a=_0x157cda;for(const _0x1d2834 in _0x509109){if('hsRqi'===_0xfb400a(0x27a))this[_0xfb400a(0x2de)]=this[_0xfb400a(0x2d0)]-0x1;else{if(_0x1d2834[_0xfb400a(0x200)](/(.*):(.*)/i)){if(_0xfb400a(0x27e)!==_0xfb400a(0x37d)){const _0x20b144=String(RegExp['$1']),_0x2d77a2=String(RegExp['$2'])[_0xfb400a(0x3b3)]()[_0xfb400a(0x35b)]();let _0x347dc8,_0x200582,_0x3ab752;switch(_0x2d77a2){case _0xfb400a(0x2aa):_0x347dc8=_0x509109[_0x1d2834]!==''?Number(_0x509109[_0x1d2834]):0x0;break;case _0xfb400a(0x1fd):_0x200582=_0x509109[_0x1d2834]!==''?JSON[_0xfb400a(0x208)](_0x509109[_0x1d2834]):[],_0x347dc8=_0x200582[_0xfb400a(0x38b)](_0x3316c1=>Number(_0x3316c1));break;case'EVAL':_0x347dc8=_0x509109[_0x1d2834]!==''?eval(_0x509109[_0x1d2834]):null;break;case'ARRAYEVAL':_0x200582=_0x509109[_0x1d2834]!==''?JSON['parse'](_0x509109[_0x1d2834]):[],_0x347dc8=_0x200582[_0xfb400a(0x38b)](_0xb79390=>eval(_0xb79390));break;case _0xfb400a(0x343):_0x347dc8=_0x509109[_0x1d2834]!==''?JSON['parse'](_0x509109[_0x1d2834]):'';break;case'ARRAYJSON':_0x200582=_0x509109[_0x1d2834]!==''?JSON[_0xfb400a(0x208)](_0x509109[_0x1d2834]):[],_0x347dc8=_0x200582['map'](_0x2af53c=>JSON[_0xfb400a(0x208)](_0x2af53c));break;case _0xfb400a(0x24e):_0x347dc8=_0x509109[_0x1d2834]!==''?new Function(JSON[_0xfb400a(0x208)](_0x509109[_0x1d2834])):new Function(_0xfb400a(0x3b5));break;case _0xfb400a(0x2c8):_0x200582=_0x509109[_0x1d2834]!==''?JSON[_0xfb400a(0x208)](_0x509109[_0x1d2834]):[],_0x347dc8=_0x200582[_0xfb400a(0x38b)](_0x5b612b=>new Function(JSON[_0xfb400a(0x208)](_0x5b612b)));break;case _0xfb400a(0x316):_0x347dc8=_0x509109[_0x1d2834]!==''?String(_0x509109[_0x1d2834]):'';break;case _0xfb400a(0x1f6):_0x200582=_0x509109[_0x1d2834]!==''?JSON[_0xfb400a(0x208)](_0x509109[_0x1d2834]):[],_0x347dc8=_0x200582[_0xfb400a(0x38b)](_0xe938c6=>String(_0xe938c6));break;case _0xfb400a(0x22b):_0x3ab752=_0x509109[_0x1d2834]!==''?JSON[_0xfb400a(0x208)](_0x509109[_0x1d2834]):{},_0x347dc8=VisuMZ[_0xfb400a(0x372)]({},_0x3ab752);break;case _0xfb400a(0x38a):_0x200582=_0x509109[_0x1d2834]!==''?JSON[_0xfb400a(0x208)](_0x509109[_0x1d2834]):[],_0x347dc8=_0x200582['map'](_0x155350=>VisuMZ[_0xfb400a(0x372)]({},JSON[_0xfb400a(0x208)](_0x155350)));break;default:continue;}_0x1b4858[_0x20b144]=_0x347dc8;}else{this[_0xfb400a(0x202)]=new _0x4c8d03(),this[_0xfb400a(0x226)]['addChild'](this['_bgSprite']);if(this[_0xfb400a(0x2ec)]()['bgShow']){const _0xbe6c0e=this[_0xfb400a(0x23a)][_0xfb400a(0x212)],_0x5626e7=_0x23f04c[_0xfb400a(0x223)](this[_0xfb400a(0x2ec)]()[_0xfb400a(0x235)]||_0xfb400a(0x341));this[_0xfb400a(0x202)]['bitmap']=new _0x4f8a6f(_0xbe6c0e[_0xfb400a(0x303)],_0xbe6c0e[_0xfb400a(0x24b)]),this[_0xfb400a(0x202)][_0xfb400a(0x212)]['fillRect'](0x0,0x0,_0xbe6c0e[_0xfb400a(0x303)],_0xbe6c0e[_0xfb400a(0x24b)],_0x5626e7);}this['_bgSprite'][_0xfb400a(0x348)]['x']=this[_0xfb400a(0x348)]['x'],this[_0xfb400a(0x202)]['anchor']['y']=this[_0xfb400a(0x348)]['y'];}}}}return _0x1b4858;},(_0xdfd32e=>{const _0x4da43d=_0x157cda,_0x215fa1=_0xdfd32e['name'];for(const _0x75efe2 of dependencies){if(!Imported[_0x75efe2]){if('meYVq'===_0x4da43d(0x2b7)){const _0x4f30c0=this['settings']()['portraitFilename']||'';if(_0x4f30c0['match'](/\[ANI\]\[(\d+)x(\d+)\]/i))return this[_0x4da43d(0x397)]=!![],this[_0x4da43d(0x390)]=_0x3fff15[_0x4da43d(0x257)](0x1,_0x236a64(_0x11c6c4['$1'])),this[_0x4da43d(0x323)]=_0x489ab6['max'](0x1,_0x2117a7(_0x1ad7fe['$2'])),this[_0x4da43d(0x2d0)]=this[_0x4da43d(0x390)]*this[_0x4da43d(0x323)],!![];}else{alert(_0x4da43d(0x32a)['format'](_0x215fa1,_0x75efe2)),SceneManager[_0x4da43d(0x256)]();break;}}}const _0x3ba4d0=_0xdfd32e[_0x4da43d(0x270)];if(_0x3ba4d0[_0x4da43d(0x200)](/\[Version[ ](.*?)\]/i)){const _0x51c99d=Number(RegExp['$1']);_0x51c99d!==VisuMZ[label][_0x4da43d(0x399)]&&(_0x4da43d(0x36c)==='ZNqvM'?(this[_0x4da43d(0x39d)](),this[_0x4da43d(0x1fa)]()):(alert(_0x4da43d(0x258)[_0x4da43d(0x28d)](_0x215fa1,_0x51c99d)),SceneManager[_0x4da43d(0x256)]()));}if(_0x3ba4d0[_0x4da43d(0x200)](/\[Tier[ ](\d+)\]/i)){const _0x5c8907=Number(RegExp['$1']);if(_0x5c8907<tier){if(_0x4da43d(0x22e)===_0x4da43d(0x36e))return this[_0x4da43d(0x397)]=!![],this[_0x4da43d(0x390)]=_0x156a45[_0x4da43d(0x257)](0x1,_0x1579ee(_0x3bc3e3['$1'])),this[_0x4da43d(0x323)]=_0x360109[_0x4da43d(0x257)](0x1,_0xb830e2(_0x3d7059['$2'])),this[_0x4da43d(0x2d0)]=this[_0x4da43d(0x390)]*this['_animationVertCells'],!![];else alert(_0x4da43d(0x34e)[_0x4da43d(0x28d)](_0x215fa1,_0x5c8907,tier)),SceneManager['exit']();}else tier=Math[_0x4da43d(0x257)](_0x5c8907,tier);}VisuMZ[_0x4da43d(0x372)](VisuMZ[label][_0x4da43d(0x32e)],_0xdfd32e[_0x4da43d(0x393)]);})(pluginData),VisuMZ[_0x157cda(0x3a6)][_0x157cda(0x278)]=function(_0x386b3d){const _0x3c0181=_0x157cda,_0x3f59d9={};_0x386b3d[_0x3c0181(0x1ff)]!==undefined?(_0x3f59d9['type']=String(_0x386b3d[_0x3c0181(0x1ff)]()||_0x3c0181(0x2ff))['toLowerCase']()['trim'](),_0x3f59d9[_0x3c0181(0x235)]=String(_0x386b3d[_0x3c0181(0x2cd)]),_0x3f59d9[_0x3c0181(0x2c1)]=String(_0x386b3d[_0x3c0181(0x211)]()||'')[_0x3c0181(0x35b)](),_0x3f59d9[_0x3c0181(0x38e)]=String(_0x386b3d['portraitFilenameJS']()||'')[_0x3c0181(0x35b)]()):(_0x3f59d9[_0x3c0181(0x234)]=_0x386b3d[_0x3c0181(0x234)]['toLowerCase']()['trim'](),_0x3f59d9['bgColor']=_0x386b3d[_0x3c0181(0x235)]||_0x3c0181(0x341),_0x3f59d9[_0x3c0181(0x2c1)]=_0x386b3d['parallaxFilename']['trim'](),_0x3f59d9[_0x3c0181(0x38e)]=_0x386b3d[_0x3c0181(0x38e)][_0x3c0181(0x35b)]());_0x3f59d9['parallaxFilename']['toLowerCase']()===_0x3c0181(0x206)&&(_0x3f59d9[_0x3c0181(0x2c1)]='');if(_0x3f59d9[_0x3c0181(0x38e)]['toLowerCase']()==='>>>attention<<<'){if(_0x3c0181(0x20e)==='sOWVS')return _0x41a138[_0x3c0181(0x209)](_0x1fa189);else _0x3f59d9['portraitFilename']='';}const _0x41b3ff=VisuMZ['VisualCutinEffect'][_0x3c0181(0x32e)][_0x3c0181(0x204)],_0x367dc5=_0x386b3d['ExtraSettings']||{},_0x1531a5=['enterDuration',_0x3c0181(0x33b),'outlineShow',_0x3c0181(0x2eb),_0x3c0181(0x2f5),_0x3c0181(0x346),'portraitAnchorY',_0x3c0181(0x378),'portraitOffsetY',_0x3c0181(0x2b0),_0x3c0181(0x20a),_0x3c0181(0x2ac),_0x3c0181(0x336),_0x3c0181(0x375),_0x3c0181(0x216),_0x3c0181(0x332),'portraitFlipVert','portraitScaleToFit',_0x3c0181(0x29c),_0x3c0181(0x236),'animatedPortraitLooping',_0x3c0181(0x2c3),_0x3c0181(0x238),_0x3c0181(0x2c6),_0x3c0181(0x288),'parallaxOffsetX','parallaxOffsetY',_0x3c0181(0x2fb),_0x3c0181(0x2c2),_0x3c0181(0x2a9)];for(const _0x354cec of _0x1531a5){_0x3f59d9[_0x354cec]=_0x367dc5[_0x354cec]??_0x41b3ff[_0x354cec]??0x0;}return _0x3f59d9;},PluginManager[_0x157cda(0x2fd)](pluginData[_0x157cda(0x3aa)],_0x157cda(0x32f),_0x6b7c2c=>{const _0x5edf6a=_0x157cda;if(SceneManager[_0x5edf6a(0x2ce)]()&&!Imported[_0x5edf6a(0x3a2)])return;VisuMZ['ConvertParams'](_0x6b7c2c,_0x6b7c2c);const _0x20a587=VisuMZ[_0x5edf6a(0x3a6)]['CreateCutinSettings'](_0x6b7c2c);SceneManager[_0x5edf6a(0x387)][_0x5edf6a(0x21b)](_0x20a587);const _0x413e71=$gameTemp['getLastPluginCommandInterpreter']();_0x413e71&&_0x6b7c2c[_0x5edf6a(0x259)]&&_0x413e71[_0x5edf6a(0x3a1)](_0x5edf6a(0x2d2));}),PluginManager[_0x157cda(0x2fd)](pluginData['name'],'CutinStart_VisualCutinEffectJS',_0x2bf3c1=>{const _0x4c7018=_0x157cda;if(SceneManager['isSceneBattle']()&&!Imported[_0x4c7018(0x3a2)])return;VisuMZ[_0x4c7018(0x372)](_0x2bf3c1,_0x2bf3c1);const _0x30d412=VisuMZ['VisualCutinEffect'][_0x4c7018(0x278)](_0x2bf3c1);SceneManager[_0x4c7018(0x387)][_0x4c7018(0x21b)](_0x30d412);}),PluginManager[_0x157cda(0x2fd)](pluginData[_0x157cda(0x3aa)],_0x157cda(0x27f),_0x153f0e=>{const _0x182ca2=_0x157cda;if(SceneManager['isSceneBattle']()&&!Imported['VisuMZ_1_BattleCore'])return;VisuMZ[_0x182ca2(0x372)](_0x153f0e,_0x153f0e);const _0x294f6e=_0x153f0e[_0x182ca2(0x234)][_0x182ca2(0x2db)]()['trim']();let _0x5c0859=_0x153f0e[_0x182ca2(0x38e)]['trim']();if(_0x5c0859[_0x182ca2(0x2db)]()['trim']()===_0x182ca2(0x206))_0x5c0859='';const _0x3842da=_0x153f0e[_0x182ca2(0x27b)]??{};SceneManager[_0x182ca2(0x387)]['changeVisualCutinPortrait'](_0x294f6e,_0x5c0859,_0x3842da);}),PluginManager[_0x157cda(0x2fd)](pluginData['name'],_0x157cda(0x23d),_0x4cb380=>{const _0x15e036=_0x157cda;if(SceneManager[_0x15e036(0x2ce)]()&&!Imported['VisuMZ_1_BattleCore'])return;VisuMZ['ConvertParams'](_0x4cb380,_0x4cb380);const _0x582db7=_0x4cb380[_0x15e036(0x234)][_0x15e036(0x2db)]()[_0x15e036(0x35b)]();let _0x5588d5=_0x4cb380['parallaxFilename'][_0x15e036(0x35b)]();if(_0x5588d5[_0x15e036(0x2db)]()[_0x15e036(0x35b)]()==='>>>attention<<<')_0x5588d5='';const _0x22e2d9=_0x4cb380[_0x15e036(0x27b)]??{};SceneManager[_0x15e036(0x387)][_0x15e036(0x2bf)](_0x582db7,_0x5588d5,_0x22e2d9);}),PluginManager['registerCommand'](pluginData[_0x157cda(0x3aa)],'CutinEnd_VisualCutinEffectAll',_0x50caa0=>{const _0x2e61d3=_0x157cda;if(SceneManager[_0x2e61d3(0x2ce)]()&&!Imported['VisuMZ_1_BattleCore'])return;VisuMZ[_0x2e61d3(0x372)](_0x50caa0,_0x50caa0),SceneManager[_0x2e61d3(0x387)]['clearAllVisualCutins']();const _0x8a837e=$gameTemp[_0x2e61d3(0x334)]();_0x8a837e&&_0x50caa0['WaitForExit']&&_0x8a837e[_0x2e61d3(0x3a1)](_0x2e61d3(0x261));}),PluginManager[_0x157cda(0x2fd)](pluginData[_0x157cda(0x3aa)],_0x157cda(0x2c7),_0x504741=>{const _0x408e05=_0x157cda;if(SceneManager[_0x408e05(0x2ce)]()&&!Imported[_0x408e05(0x3a2)])return;VisuMZ[_0x408e05(0x372)](_0x504741,_0x504741);const _0x26e78d=_0x504741[_0x408e05(0x234)][_0x408e05(0x2db)]()[_0x408e05(0x35b)]();SceneManager[_0x408e05(0x387)][_0x408e05(0x2d6)](_0x26e78d);const _0x17d59f=$gameTemp[_0x408e05(0x334)]();_0x17d59f&&_0x504741[_0x408e05(0x377)]&&(_0x408e05(0x384)!==_0x408e05(0x2b1)?_0x17d59f[_0x408e05(0x3a1)]('cutinExit'):this[_0x408e05(0x2de)]=0x0);}),PluginManager[_0x157cda(0x2fd)](pluginData['name'],'CutinWait_WaitForEntrance',_0x3d7eec=>{const _0x162809=_0x157cda;if(SceneManager[_0x162809(0x2ce)]()&&!Imported[_0x162809(0x3a2)])return;const _0x4ad1ab=$gameTemp[_0x162809(0x334)]();_0x4ad1ab[_0x162809(0x3a1)](_0x162809(0x2d2));}),PluginManager[_0x157cda(0x2fd)](pluginData['name'],'CutinWait_WaitForExit',_0x5c14c7=>{const _0x40ae38=_0x157cda;if(SceneManager['isSceneBattle']()&&!Imported[_0x40ae38(0x3a2)])return;const _0x3cb9cc=$gameTemp[_0x40ae38(0x334)]();_0x3cb9cc[_0x40ae38(0x3a1)](_0x40ae38(0x261));}),VisuMZ[_0x157cda(0x3a6)]['RegExp']={'EnemyCutinPortraitName':/<CUTIN (?:PORTRAIT|PICTURE|IMAGE|IMG):[ ](.*?)>/i,'EnemyCutinFlipHorz':/<CUTIN FLIP (?:HORZ|HORIZONTAL|HORIZONTALLY)>/i,'EnemyCutinFlipVert':/<CUTIN FLIP (?:VERT|VERTICAL|VERTICALLY)>/i},Bitmap[_0x157cda(0x2b9)][_0x157cda(0x207)]=function(_0xb58e43,_0x2ff844,_0x15b1c4,_0x5b7af9,_0x55ec47,_0xb0cb75){const _0x3b0b66=_0x157cda,_0x2a4a31=this[_0x3b0b66(0x237)];_0x2a4a31[_0x3b0b66(0x2a1)](),_0x2a4a31[_0x3b0b66(0x27d)](),_0x2a4a31['moveTo'](_0xb58e43[0x0],_0xb58e43[0x1]);for(var _0x40d0b5=0x2;_0x40d0b5<_0xb58e43[_0x3b0b66(0x30e)];_0x40d0b5+=0x2){_0x2a4a31[_0x3b0b66(0x38c)](_0xb58e43[_0x40d0b5],_0xb58e43[_0x40d0b5+0x1]);}_0x2a4a31[_0x3b0b66(0x38c)](_0xb58e43[0x0],_0xb58e43[0x1]),_0x2a4a31[_0x3b0b66(0x380)]=_0x2ff844,_0x2a4a31[_0x3b0b66(0x1f4)]=_0x5b7af9,_0xb0cb75&&_0x2a4a31[_0x3b0b66(0x294)](),_0x2a4a31[_0x3b0b66(0x1fe)]=_0x55ec47,_0x2a4a31[_0x3b0b66(0x24d)]=_0x15b1c4,_0x2a4a31[_0x3b0b66(0x2ad)](),_0x2a4a31[_0x3b0b66(0x1fe)]=0x1,_0x2a4a31[_0x3b0b66(0x338)](),this[_0x3b0b66(0x32d)][_0x3b0b66(0x210)]();},ImageManager['VISUAL_CUTIN_EFFECT']={'outerOutlineColor':VisuMZ['VisualCutinEffect'][_0x157cda(0x32e)][_0x157cda(0x2f4)][_0x157cda(0x2dc)],'outerOutlineWeight':VisuMZ[_0x157cda(0x3a6)]['Settings'][_0x157cda(0x2f4)][_0x157cda(0x2ed)],'middleOutlineColor':VisuMZ[_0x157cda(0x3a6)][_0x157cda(0x32e)][_0x157cda(0x2f4)][_0x157cda(0x385)],'middleOutlineWeight':VisuMZ[_0x157cda(0x3a6)]['Settings'][_0x157cda(0x2f4)][_0x157cda(0x265)],'innerOutlineColor':VisuMZ[_0x157cda(0x3a6)][_0x157cda(0x32e)]['Outline'][_0x157cda(0x3a5)],'innerOutlineWeight':VisuMZ[_0x157cda(0x3a6)][_0x157cda(0x32e)][_0x157cda(0x2f4)][_0x157cda(0x311)],'styles':VisuMZ[_0x157cda(0x3a6)][_0x157cda(0x32e)][_0x157cda(0x333)]},(ImageManager[_0x157cda(0x31a)][_0x157cda(0x35c)]={'cutinOffsetX':0x0,'cutinOffsetY':0x0,'enterX':0x0,'enterY':0x0,'enterEasingType':_0x157cda(0x394),'exitX':0x0,'exitY':0x0,'exitEasingType':'Linear','maskFilename':'','outlineFilename':'','outlineOffsetX':0x0,'outlineOffsetY':0x0},ImageManager[_0x157cda(0x31a)][_0x157cda(0x239)]=ImageManager[_0x157cda(0x31a)][_0x157cda(0x2ed)]+ImageManager[_0x157cda(0x31a)][_0x157cda(0x265)]+ImageManager[_0x157cda(0x31a)]['innerOutlineWeight']),ImageManager[_0x157cda(0x30b)]=function(_0x39e1d0){const _0x1a3b36=_0x157cda;_0x39e1d0=_0x39e1d0['toLowerCase']()[_0x1a3b36(0x35b)]();if(!ImageManager[_0x1a3b36(0x31a)]['styles'][_0x39e1d0]){if(_0x1a3b36(0x25b)==='eVdjA')return this[_0x1a3b36(0x263)]()!=='';else ImageManager[_0x1a3b36(0x31a)]['styles'][_0x39e1d0]=JSON[_0x1a3b36(0x208)](JSON[_0x1a3b36(0x32b)](ImageManager[_0x1a3b36(0x31a)][_0x1a3b36(0x35c)]));}const _0x498647=ImageManager[_0x1a3b36(0x31a)][_0x1a3b36(0x305)][_0x39e1d0];if(_0x498647[_0x1a3b36(0x3a0)]===undefined)_0x498647[_0x1a3b36(0x3a0)]='';if(_0x498647[_0x1a3b36(0x251)]===undefined)_0x498647[_0x1a3b36(0x251)]='';if(_0x498647[_0x1a3b36(0x2a6)]===undefined)_0x498647[_0x1a3b36(0x2a6)]=0x0;if(_0x498647[_0x1a3b36(0x28a)]===undefined)_0x498647[_0x1a3b36(0x28a)]=0x0;if(_0x498647[_0x1a3b36(0x1f9)]===undefined)_0x498647[_0x1a3b36(0x1f9)]=0x0;if(_0x498647[_0x1a3b36(0x213)]===undefined)_0x498647[_0x1a3b36(0x213)]=0x0;if(_0x498647[_0x1a3b36(0x396)]===undefined)_0x498647['enterX']=0x0;if(_0x498647['enterY']===undefined)_0x498647[_0x1a3b36(0x2a4)]=0x0;if(_0x498647[_0x1a3b36(0x22c)]===undefined)_0x498647[_0x1a3b36(0x22c)]=_0x1a3b36(0x394);if(_0x498647[_0x1a3b36(0x227)]===undefined)_0x498647[_0x1a3b36(0x227)]=0x0;if(_0x498647[_0x1a3b36(0x347)]===undefined)_0x498647[_0x1a3b36(0x347)]=0x0;if(_0x498647[_0x1a3b36(0x255)]===undefined)_0x498647[_0x1a3b36(0x255)]=_0x1a3b36(0x394);return _0x498647;},ImageManager[_0x157cda(0x244)]=function(_0x319ba6){const _0x1e1155=_0x157cda;return _0x319ba6=_0x319ba6['toLowerCase']()[_0x1e1155(0x35b)](),ImageManager[_0x1e1155(0x30b)](_0x319ba6)[_0x1e1155(0x3a0)]!==''&&ImageManager[_0x1e1155(0x30b)](_0x319ba6)[_0x1e1155(0x251)];},ImageManager[_0x157cda(0x314)]=function(_0x49d8a4){const _0x4ef368=_0x157cda;if(this[_0x4ef368(0x244)](_0x49d8a4)){if(_0x4ef368(0x373)===_0x4ef368(0x373)){const _0x4312b3=ImageManager[_0x4ef368(0x30b)](_0x49d8a4)['maskFilename'];return ImageManager['loadPicture'](_0x4312b3);}else this[_0x4ef368(0x2c4)][_0x4ef368(0x2e4)]['x']+=this[_0x4ef368(0x2ec)]()[_0x4ef368(0x2fb)];}_0x49d8a4=_0x49d8a4[_0x4ef368(0x2db)]()[_0x4ef368(0x35b)](),this[_0x4ef368(0x271)]=this[_0x4ef368(0x271)]||{};if(this[_0x4ef368(0x271)][_0x49d8a4])return this[_0x4ef368(0x271)][_0x49d8a4];const _0x462359=this['create_VisualCutinEffect_Bitmap'](_0x49d8a4,!![]);return _0x462359[_0x4ef368(0x2cc)]=![],this[_0x4ef368(0x271)][_0x49d8a4]=_0x462359,this[_0x4ef368(0x271)][_0x49d8a4];},ImageManager[_0x157cda(0x329)]=function(_0x21c599){const _0x5c6d92=_0x157cda;if(this[_0x5c6d92(0x244)](_0x21c599)){const _0x43e0a3=ImageManager[_0x5c6d92(0x30b)](_0x21c599)[_0x5c6d92(0x251)];return ImageManager[_0x5c6d92(0x282)](_0x43e0a3);}_0x21c599=_0x21c599[_0x5c6d92(0x2db)]()[_0x5c6d92(0x35b)](),this[_0x5c6d92(0x246)]=this[_0x5c6d92(0x246)]||{};if(this[_0x5c6d92(0x246)][_0x21c599])return this[_0x5c6d92(0x246)][_0x21c599];const _0x485db8=this[_0x5c6d92(0x31f)](_0x21c599,![]);return _0x485db8['_customModified']=![],this[_0x5c6d92(0x246)][_0x21c599]=_0x485db8,this[_0x5c6d92(0x246)][_0x21c599];},ImageManager[_0x157cda(0x31f)]=function(_0x49452c,_0x808f62){const _0x3fdde1=_0x157cda;switch(_0x49452c){case'whole':return ImageManager[_0x3fdde1(0x335)](_0x808f62);case _0x3fdde1(0x285):return ImageManager[_0x3fdde1(0x302)](_0x808f62);case _0x3fdde1(0x30f):return ImageManager['create_VisualCutinEffect_Bitmap_HorzSpan'](_0x808f62,0x0);case'centerhorzspan':return ImageManager['create_VisualCutinEffect_Bitmap_HorzSpan'](_0x808f62,0x1);case _0x3fdde1(0x1f5):return ImageManager['create_VisualCutinEffect_Bitmap_HorzSpan'](_0x808f62,0x2);case'lefthorzslash':return ImageManager['create_VisualCutinEffect_Bitmap_HorzSlash'](_0x808f62,0x0);case _0x3fdde1(0x35d):return ImageManager[_0x3fdde1(0x33e)](_0x808f62,0x1);case _0x3fdde1(0x2c5):return ImageManager['create_VisualCutinEffect_Bitmap_VertSlash'](_0x808f62,0x0);case'rightvertslash':return ImageManager[_0x3fdde1(0x28b)](_0x808f62,0x1);case _0x3fdde1(0x35e):case _0x3fdde1(0x365):return ImageManager[_0x3fdde1(0x2e8)](_0x808f62,0x2,1.5);case'leftminor':case _0x3fdde1(0x389):case _0x3fdde1(0x2f9):return ImageManager['create_VisualCutinEffect_Bitmap_Pack'](_0x808f62,0x3,1.5);case _0x3fdde1(0x2f8):case _0x3fdde1(0x37e):case _0x3fdde1(0x2bb):return ImageManager['create_VisualCutinEffect_Bitmap_Diamond'](_0x808f62);case _0x3fdde1(0x395):case _0x3fdde1(0x203):case'rightgemstone':return ImageManager['create_VisualCutinEffect_Bitmap_Gemstone'](_0x808f62);case _0x3fdde1(0x2b3):return ImageManager[_0x3fdde1(0x3b1)](_0x808f62,0x0);case _0x3fdde1(0x37b):return ImageManager[_0x3fdde1(0x3b1)](_0x808f62,0x1);case _0x3fdde1(0x351):return ImageManager[_0x3fdde1(0x3b1)](_0x808f62,0x2);case'bottomrightquad':return ImageManager[_0x3fdde1(0x3b1)](_0x808f62,0x3);case'topleftcorner':return ImageManager[_0x3fdde1(0x23b)](_0x808f62,0x0);case _0x3fdde1(0x30c):return ImageManager[_0x3fdde1(0x23b)](_0x808f62,0x1);case'bottomleftcorner':return ImageManager[_0x3fdde1(0x23b)](_0x808f62,0x2);case _0x3fdde1(0x353):return ImageManager[_0x3fdde1(0x23b)](_0x808f62,0x3);case'row1stthird':case _0x3fdde1(0x34a):case'row3rdthird':return ImageManager['create_VisualCutinEffect_Bitmap_Rows'](_0x808f62,0x3);case _0x3fdde1(0x391):case'row2ndfourth':case _0x3fdde1(0x30a):case _0x3fdde1(0x2fe):return ImageManager[_0x3fdde1(0x1f8)](_0x808f62,0x4);case'row1stfifth':case _0x3fdde1(0x2da):case _0x3fdde1(0x362):case _0x3fdde1(0x339):case _0x3fdde1(0x2d7):return ImageManager['create_VisualCutinEffect_Bitmap_Rows'](_0x808f62,0x5);case _0x3fdde1(0x3b7):case _0x3fdde1(0x2d8):case _0x3fdde1(0x260):return ImageManager[_0x3fdde1(0x340)](_0x808f62,0x3);case _0x3fdde1(0x205):case _0x3fdde1(0x33c):case'col3rdfourth':case'col4thfourth':return ImageManager[_0x3fdde1(0x340)](_0x808f62,0x4);case _0x3fdde1(0x264):case _0x3fdde1(0x29f):case'col3rdfifth':case _0x3fdde1(0x2af):case _0x3fdde1(0x2d4):return ImageManager['create_VisualCutinEffect_Bitmap_Cols'](_0x808f62,0x5);case _0x3fdde1(0x315):case _0x3fdde1(0x359):case _0x3fdde1(0x2b5):case _0x3fdde1(0x2ba):case _0x3fdde1(0x21a):case'sixpack6':return ImageManager[_0x3fdde1(0x2e8)](_0x808f62,0x3,0x2);case _0x3fdde1(0x266):case _0x3fdde1(0x3a3):case _0x3fdde1(0x21d):case _0x3fdde1(0x253):case _0x3fdde1(0x31d):case _0x3fdde1(0x2e9):case _0x3fdde1(0x1fb):case'eightpack8':return ImageManager['create_VisualCutinEffect_Bitmap_Pack'](_0x808f62,0x4,0x2);case'twelvepack1':case _0x3fdde1(0x252):case _0x3fdde1(0x231):case _0x3fdde1(0x337):case'twelvepack5':case _0x3fdde1(0x310):case _0x3fdde1(0x34c):case _0x3fdde1(0x20b):case _0x3fdde1(0x228):case _0x3fdde1(0x2cf):case _0x3fdde1(0x363):case _0x3fdde1(0x224):return ImageManager[_0x3fdde1(0x2e8)](_0x808f62,0x4,0x3);default:return ImageManager[_0x3fdde1(0x335)](_0x808f62);}},ImageManager[_0x157cda(0x2be)]=function(_0x2d55c2,_0x3dc73b,_0x182448,_0x2ca64b){const _0xe3eb57=_0x157cda;if(_0x182448)_0x2d55c2['drawOutlinePolygon'](_0x3dc73b,_0xe3eb57(0x376),'white',0x0,0xff,![]);else{const _0x2f6ea8=ImageManager[_0xe3eb57(0x31a)],_0x38859a=_0xe3eb57(0x25a),_0x43096b=_0x2ca64b;{const _0x215d39=ColorManager[_0xe3eb57(0x223)](_0x2f6ea8[_0xe3eb57(0x2dc)]),_0x4b1de8=_0x2f6ea8[_0xe3eb57(0x2ed)]*_0x43096b+_0x2f6ea8[_0xe3eb57(0x265)]*_0x43096b+_0x2f6ea8[_0xe3eb57(0x311)]*_0x43096b;_0x2d55c2[_0xe3eb57(0x207)](_0x3dc73b,_0x215d39,_0x38859a,_0x4b1de8,0xff,!![]);}{const _0x503e91=ColorManager[_0xe3eb57(0x223)](_0x2f6ea8[_0xe3eb57(0x385)]),_0x28e98a=_0x2f6ea8[_0xe3eb57(0x265)]*_0x43096b+_0x2f6ea8[_0xe3eb57(0x311)]*_0x43096b;_0x2d55c2[_0xe3eb57(0x207)](_0x3dc73b,_0x503e91,_0x38859a,_0x28e98a,0xff,!![]);}{if(_0xe3eb57(0x220)!==_0xe3eb57(0x220))this[_0xe3eb57(0x371)]=_0x152fef(_0x361b68['$1'])['trim']();else{const _0x1cbd66=ColorManager['getColor'](_0x2f6ea8[_0xe3eb57(0x3a5)]),_0x582334=_0x2f6ea8[_0xe3eb57(0x311)]*_0x43096b;_0x2d55c2['drawOutlinePolygon'](_0x3dc73b,_0x1cbd66,_0x38859a,_0x582334,0xff,!![]);}}}return _0x2d55c2;},ImageManager['create_VisualCutinEffect_Bitmap_Whole']=function(_0x4c6e24){const _0x563b00=_0x157cda,_0x2d431a=Graphics['width'],_0x39c45c=Graphics['height'],_0x3a9926=new Bitmap(_0x2d431a,_0x39c45c),_0x2a4e23=[0x0,0x0,_0x2d431a,0x0,_0x2d431a,_0x39c45c,0x0,_0x39c45c];return this[_0x563b00(0x2be)](_0x3a9926,_0x2a4e23,_0x4c6e24,0x2);},ImageManager[_0x157cda(0x302)]=function(_0x705e7a){const _0x2a2634=_0x157cda,_0x18788e=Math[_0x2a2634(0x309)](Graphics['width']-0x50,0x330),_0x59c20e=Graphics[_0x2a2634(0x24b)]-Sprite_VisualCutin[_0x2a2634(0x2b9)]['statusWindowHeight']()-0x50,_0x54d030=new Bitmap(_0x18788e,_0x59c20e),_0x2256f5=0x3c,_0xb9d9c9=[_0x2256f5,0x0,_0x18788e-_0x2256f5,0x0,_0x18788e,_0x2256f5,_0x18788e,_0x59c20e-_0x2256f5,_0x18788e-_0x2256f5,_0x59c20e,_0x2256f5,_0x59c20e,0x0,_0x59c20e-_0x2256f5,0x0,_0x2256f5];return this[_0x2a2634(0x2be)](_0x54d030,_0xb9d9c9,_0x705e7a,0x2);},ImageManager[_0x157cda(0x388)]=function(_0x2d9ca9,_0x5b3815){const _0x25cbe4=_0x157cda,_0x5aa637=Graphics['width']+0x28,_0x1a6eeb=ImageManager[_0x25cbe4(0x276)]*0x2,_0x2cce8d=new Bitmap(_0x5aa637,_0x1a6eeb),_0x3471ee=[[0x0,0x0,_0x5aa637,Math[_0x25cbe4(0x2f6)](_0x1a6eeb*0x1/0x8),_0x5aa637,Math['ceil'](_0x1a6eeb*0x7/0x8),0x0,_0x1a6eeb],[0x0,0x0,_0x5aa637,0x0,_0x5aa637,_0x1a6eeb,0x0,_0x1a6eeb],[0x0,Math[_0x25cbe4(0x2f6)](_0x1a6eeb*0x1/0x8),_0x5aa637,0x0,_0x5aa637,_0x1a6eeb,0x0,Math[_0x25cbe4(0x361)](_0x1a6eeb*0x7/0x8)]];return this[_0x25cbe4(0x2be)](_0x2cce8d,_0x3471ee[_0x5b3815],_0x2d9ca9,0x1);},ImageManager[_0x157cda(0x33e)]=function(_0x4a41a9,_0x4ad235){const _0x170e86=_0x157cda,_0x5b6bad=Graphics['width']+0x28,_0x225f67=ImageManager[_0x170e86(0x276)]*0x3,_0x47b515=new Bitmap(_0x5b6bad,_0x225f67),_0x454a00=[[0x0,Math[_0x170e86(0x292)](_0x225f67*0x3/0x5),_0x5b6bad,0x0,_0x5b6bad,Math[_0x170e86(0x292)](_0x225f67*0x3/0x4),0x0,_0x225f67],[0x0,0x0,_0x5b6bad,Math[_0x170e86(0x292)](_0x225f67*0x3/0x5),_0x5b6bad,_0x225f67,0x0,Math[_0x170e86(0x292)](_0x225f67*0x3/0x4)]];return this[_0x170e86(0x2be)](_0x47b515,_0x454a00[_0x4ad235],_0x4a41a9,0x2);},ImageManager[_0x157cda(0x28b)]=function(_0x3632a4,_0x8f73c){const _0x36686a=_0x157cda,_0x447122=Math[_0x36686a(0x361)](Graphics[_0x36686a(0x303)]/0x2),_0x4dfc35=Graphics['height']+0x28,_0x114dcd=new Bitmap(_0x447122,_0x4dfc35),_0x1a1913=[[0x0,0x0,_0x447122,0x0,Math['round'](_0x447122*0x3/0x4),_0x4dfc35,Math[_0x36686a(0x292)](_0x447122*0x1/0x2),_0x4dfc35],[0x0,0x0,_0x447122,0x0,Math['round'](_0x447122*0x1/0x2),_0x4dfc35,Math[_0x36686a(0x292)](_0x447122*0x1/0x4),_0x4dfc35]];return this[_0x36686a(0x2be)](_0x114dcd,_0x1a1913[_0x8f73c],_0x3632a4,0x2);},ImageManager['create_VisualCutinEffect_Bitmap_Minor']=function(_0x98bd9b,_0x273451){const _0x450336=_0x157cda,_0x2e30d5=[0x1,0x2,0x1][_0x273451],_0xadeaa6=Math[_0x450336(0x361)](Graphics[_0x450336(0x303)]*_0x2e30d5/0x3),_0x1babd4=Math[_0x450336(0x2f6)](Graphics[_0x450336(0x303)]*0x1/0x3),_0x445d71=Graphics[_0x450336(0x24b)],_0x4685cf=new Bitmap(_0xadeaa6,_0x445d71),_0x5b94b5=[[0x0,0x0,_0xadeaa6,0x0,Math[_0x450336(0x2f6)](_0xadeaa6/0x2),_0x445d71,0x0,_0x445d71],[0x0,_0x445d71,_0xadeaa6,_0x445d71,_0xadeaa6-Math[_0x450336(0x292)](_0x1babd4/0x2),0x0,Math[_0x450336(0x292)](_0x1babd4/0x2),0x0],[0x0,0x0,_0xadeaa6,0x0,_0xadeaa6,_0x445d71,Math[_0x450336(0x2f6)](_0xadeaa6/0x2),_0x445d71]];return this[_0x450336(0x2be)](_0x4685cf,_0x5b94b5[_0x273451],_0x98bd9b,0x2);},ImageManager[_0x157cda(0x2f7)]=function(_0x542d29){const _0x54a58f=_0x157cda,_0x3dcb86=Math[_0x54a58f(0x361)](Graphics['height']*0x1/0x2)+0x14,_0x54d9e6=Math[_0x54a58f(0x361)](Graphics['height']*0x1/0x2)+0x14,_0x2980ff=new Bitmap(_0x3dcb86,_0x54d9e6),_0x39b3d4=[Math['round'](_0x3dcb86/0x2),0x0,_0x3dcb86,Math[_0x54a58f(0x292)](_0x54d9e6/0x2),Math[_0x54a58f(0x292)](_0x3dcb86/0x2),_0x54d9e6,0x0,Math[_0x54a58f(0x292)](_0x54d9e6/0x2)];return this[_0x54a58f(0x2be)](_0x2980ff,_0x39b3d4,_0x542d29,0x2);},ImageManager[_0x157cda(0x39e)]=function(_0x56aad4){const _0x573cfb=_0x157cda,_0xc198f6=Math[_0x573cfb(0x361)](Graphics[_0x573cfb(0x303)]/0x4)+0x28,_0x6de014=Math[_0x573cfb(0x361)](Graphics[_0x573cfb(0x24b)]*0x3/0x5),_0x3bfe9e=new Bitmap(_0xc198f6,_0x6de014),_0x5792f1=[Math[_0x573cfb(0x292)](_0xc198f6*0x2/0x5),0x0,Math[_0x573cfb(0x292)](_0xc198f6*0x7/0x8),Math[_0x573cfb(0x292)](_0x6de014*0x1/0x5),_0xc198f6,Math['round'](_0x6de014*0x3/0x5),Math['round'](_0xc198f6*0x3/0x5),_0x6de014,Math[_0x573cfb(0x292)](_0xc198f6*0x1/0x8),Math[_0x573cfb(0x292)](_0x6de014*0x4/0x5),0x0,Math[_0x573cfb(0x292)](_0x6de014*0x2/0x5)];return this[_0x573cfb(0x2be)](_0x3bfe9e,_0x5792f1,_0x56aad4,0x2);},ImageManager[_0x157cda(0x3b1)]=function(_0x381943,_0x17f26d){const _0x424ce5=_0x157cda,_0x312e7d=ImageManager[_0x424ce5(0x31a)][_0x424ce5(0x239)],_0x367807=ImageManager[_0x424ce5(0x31a)][_0x424ce5(0x2ed)],_0x2fddbc=Math[_0x424ce5(0x361)](Graphics[_0x424ce5(0x303)]*0x1/0x2)+_0x312e7d/0x2+Math[_0x424ce5(0x2f6)](_0x367807/0x2),_0x560c80=Math[_0x424ce5(0x361)](Graphics[_0x424ce5(0x24b)]*0x1/0x2)+_0x312e7d/0x2+Math[_0x424ce5(0x2f6)](_0x367807/0x2),_0x550dcb=new Bitmap(_0x2fddbc,_0x560c80),_0x5ca1ad=[[0x0,0x0,_0x2fddbc,0x0,_0x2fddbc,_0x560c80,0x0,_0x560c80],[_0x2fddbc,0x0,0x0,0x0,0x0,_0x560c80,_0x2fddbc,_0x560c80],[0x0,_0x560c80,_0x2fddbc,_0x560c80,_0x2fddbc,0x0,0x0,0x0],[_0x2fddbc,_0x560c80,0x0,_0x560c80,0x0,0x0,_0x2fddbc,0x0]];return this['fill_VisualCutinEffect_Bitmap'](_0x550dcb,_0x5ca1ad[_0x17f26d],_0x381943,0x2);},ImageManager['create_VisualCutinEffect_Bitmap_Corner']=function(_0x176b0a,_0x356c0c){const _0x4bc72a=_0x157cda,_0x44b924=ImageManager[_0x4bc72a(0x31a)][_0x4bc72a(0x239)],_0x423d65=Math[_0x4bc72a(0x361)](Graphics[_0x4bc72a(0x303)]/0x3)+_0x44b924,_0x24f890=Math[_0x4bc72a(0x361)](Graphics[_0x4bc72a(0x24b)]/0x2)+_0x44b924,_0xf4b152=new Bitmap(_0x423d65,_0x24f890),_0x42ba83=[[0x0,0x0,_0x423d65,0x0,Math[_0x4bc72a(0x292)](_0x423d65*0x5/0x6),Math[_0x4bc72a(0x292)](_0x24f890*0x5/0x6),0x0,_0x24f890],[_0x423d65,0x0,0x0,0x0,Math[_0x4bc72a(0x292)](_0x423d65*0x1/0x6),Math[_0x4bc72a(0x292)](_0x24f890*0x5/0x6),_0x423d65,_0x24f890],[0x0,_0x24f890,_0x423d65,_0x24f890,Math[_0x4bc72a(0x292)](_0x423d65*0x5/0x6),Math[_0x4bc72a(0x292)](_0x24f890*0x1/0x6),0x0,0x0],[_0x423d65,_0x24f890,0x0,_0x24f890,Math[_0x4bc72a(0x292)](_0x423d65*0x1/0x6),Math[_0x4bc72a(0x292)](_0x24f890*0x1/0x6),_0x423d65,0x0]];return this['fill_VisualCutinEffect_Bitmap'](_0xf4b152,_0x42ba83[_0x356c0c],_0x176b0a,0x2);},ImageManager[_0x157cda(0x1f8)]=function(_0x10c259,_0x1ec6a6){const _0x2c5046=_0x157cda,_0x5c9d97=Graphics['width']+0x28,_0x484fbe=Math['ceil'](Graphics['height']/_0x1ec6a6),_0x4e55b0=new Bitmap(_0x5c9d97,_0x484fbe),_0x5c08b6=0x5,_0x1fa4b8=[0x0,Math[_0x2c5046(0x361)](_0x484fbe*0x1/_0x5c08b6),_0x5c9d97,Math[_0x2c5046(0x361)](_0x484fbe*0x0/_0x5c08b6),_0x5c9d97,Math[_0x2c5046(0x361)](_0x484fbe*(_0x5c08b6-0x1)/_0x5c08b6),0x0,Math[_0x2c5046(0x361)](_0x484fbe*_0x5c08b6/_0x5c08b6)];return this[_0x2c5046(0x2be)](_0x4e55b0,_0x1fa4b8,_0x10c259,0.5);},ImageManager[_0x157cda(0x340)]=function(_0x16a949,_0x1223b6){const _0x5a6ade=_0x157cda,_0x5b3684=Math[_0x5a6ade(0x361)](Graphics[_0x5a6ade(0x303)]/_0x1223b6),_0x189f6c=Graphics[_0x5a6ade(0x24b)]+0x28,_0x3dd31c=new Bitmap(_0x5b3684,_0x189f6c),_0x1c8d89=0x5,_0x58b89a=[Math[_0x5a6ade(0x361)](_0x5b3684*0x1/_0x1c8d89),0x0,_0x5b3684,0x0,Math[_0x5a6ade(0x361)](_0x5b3684*(_0x1c8d89-0x1)/_0x1c8d89),_0x189f6c,0x0,_0x189f6c];return this[_0x5a6ade(0x2be)](_0x3dd31c,_0x58b89a,_0x16a949,0x1);},ImageManager[_0x157cda(0x2e8)]=function(_0x4d15ac,_0x5a39b5,_0x139d4c){const _0x2d2186=_0x157cda,_0x1c72ef=Math[_0x2d2186(0x361)](Graphics[_0x2d2186(0x303)]/_0x5a39b5)-0x14,_0x135963=Math[_0x2d2186(0x361)](Graphics['height']/_0x139d4c)-0x14,_0x50ab63=new Bitmap(_0x1c72ef,_0x135963),_0x5a8abe=0x5,_0xea88f0=[Math['ceil'](_0x1c72ef*0x1/_0x5a8abe),0x0,_0x1c72ef,0x0,Math[_0x2d2186(0x361)](_0x1c72ef*(_0x5a8abe-0x1)/_0x5a8abe),_0x135963,0x0,_0x135963];return this[_0x2d2186(0x2be)](_0x50ab63,_0xea88f0,_0x4d15ac,0x1);},ColorManager['getColor']=function(_0x52e510){const _0x2605b7=_0x157cda;return _0x52e510=String(_0x52e510),_0x52e510[_0x2605b7(0x200)](/#(.*)/i)?'#%1'[_0x2605b7(0x28d)](String(RegExp['$1'])):this[_0x2605b7(0x328)](Number(_0x52e510));},Game_Temp['prototype']['testMask']=function(_0x55bed8){const _0x5099b5=_0x157cda;let _0x1e93dd={};_0x1e93dd['type']=_0x55bed8['toLowerCase']()['trim'](),_0x1e93dd[_0x5099b5(0x222)]=0xc,_0x1e93dd['exitDuration']=0xc,_0x1e93dd['outlineShow']=!![],_0x1e93dd['portraitFilename']=_0x5099b5(0x277),_0x1e93dd[_0x5099b5(0x2f5)]=0xff,_0x1e93dd[_0x5099b5(0x332)]=![],_0x1e93dd[_0x5099b5(0x3a7)]=![],_0x1e93dd[_0x5099b5(0x2e5)]=!![],_0x1e93dd['portraitScaleMax']=![],_0x1e93dd[_0x5099b5(0x236)]=0x0,_0x1e93dd['portraitOffsetX']=0x0,_0x1e93dd['portraitOffsetY']=0x0,_0x1e93dd[_0x5099b5(0x3a9)]=!![],_0x1e93dd[_0x5099b5(0x2c3)]=0x4,_0x1e93dd['parallaxFilename']=_0x5099b5(0x342),_0x1e93dd[_0x5099b5(0x288)]=0xff,_0x1e93dd[_0x5099b5(0x2fb)]=0x1,_0x1e93dd[_0x5099b5(0x2c2)]=0x0,_0x1e93dd[_0x5099b5(0x2a9)]=!![],_0x1e93dd[_0x5099b5(0x235)]=_0x5099b5(0x20d),$scene[_0x5099b5(0x21b)](_0x1e93dd);},VisuMZ['VisualCutinEffect'][_0x157cda(0x2a7)]=Game_Screen[_0x157cda(0x2b9)]['initialize'],Game_Screen[_0x157cda(0x2b9)][_0x157cda(0x370)]=function(){const _0x3cc5f1=_0x157cda;VisuMZ[_0x3cc5f1(0x3a6)]['Game_Screen_initialize']['call'](this),this[_0x3cc5f1(0x254)]();},Game_Screen['prototype'][_0x157cda(0x254)]=function(){this['_visualCutinEffect']={'order':{'map':[],'battle':[]},'settings':{'map':{},'battle':{}}};},Game_Screen[_0x157cda(0x2b9)]['addVisualCutinEffect']=function(_0x2949a1){const _0x12d7f8=_0x157cda;if(this[_0x12d7f8(0x26b)]===undefined)this['initVisualCutinEffect']();if(!_0x2949a1)return;if(!_0x2949a1[_0x12d7f8(0x234)])return;if(_0x2949a1[_0x12d7f8(0x234)][_0x12d7f8(0x35b)]()==='')return;const _0x18d108=_0x2949a1['type']['toLowerCase']()[_0x12d7f8(0x35b)](),_0x3c050a=this[_0x12d7f8(0x26b)],_0x569f51=_0x3c050a['order'][SceneManager[_0x12d7f8(0x2ce)]()?'battle':_0x12d7f8(0x38b)],_0x3550ef=_0x3c050a['settings'][SceneManager['isSceneBattle']()?_0x12d7f8(0x31b):_0x12d7f8(0x38b)];if(_0x569f51[_0x12d7f8(0x29b)](_0x18d108))return;_0x569f51[_0x12d7f8(0x2c0)](_0x18d108),_0x3550ef[_0x18d108]=JSON[_0x12d7f8(0x208)](JSON[_0x12d7f8(0x32b)](_0x2949a1));},Game_Screen['prototype'][_0x157cda(0x24f)]=function(_0xa5167c,_0x36d3e6,_0x473aa8){const _0x16e16e=_0x157cda;if(this['_visualCutinEffect']===undefined)this[_0x16e16e(0x254)]();if(!_0xa5167c)return;if(_0xa5167c[_0x16e16e(0x35b)]()==='')return;_0xa5167c=_0xa5167c['toLowerCase']()[_0x16e16e(0x35b)]();const _0x27730c=this['getVisualCutinEffectSettings'](_0xa5167c);_0x27730c[_0x16e16e(0x38e)]=_0x36d3e6,_0x27730c[_0x16e16e(0x22f)]='';for(const _0x52c943 in _0x473aa8){if(_0x16e16e(0x217)==='WYlTy')_0x27730c[_0x52c943]=_0x473aa8[_0x52c943];else{if(_0x2dc9fa[_0x16e16e(0x2ce)]()&&!_0x32bab1[_0x16e16e(0x3a2)])return;_0x49b9f3['ConvertParams'](_0x2b0905,_0x9ea95a);const _0x3d962c=_0x5f4510[_0x16e16e(0x234)][_0x16e16e(0x2db)]()['trim']();let _0x34310b=_0x1939da['parallaxFilename'][_0x16e16e(0x35b)]();if(_0x34310b[_0x16e16e(0x2db)]()[_0x16e16e(0x35b)]()===_0x16e16e(0x206))_0x34310b='';const _0x334ade=_0x3a07a8[_0x16e16e(0x27b)]??{};_0x450aed[_0x16e16e(0x387)][_0x16e16e(0x2bf)](_0x3d962c,_0x34310b,_0x334ade);}}},Game_Screen['prototype'][_0x157cda(0x2a8)]=function(_0x85df93,_0x12c5fb,_0x4a27d4){const _0x5b791c=_0x157cda;if(this[_0x5b791c(0x26b)]===undefined)this[_0x5b791c(0x254)]();if(!_0x85df93)return;if(_0x85df93['trim']()==='')return;_0x85df93=_0x85df93[_0x5b791c(0x2db)]()[_0x5b791c(0x35b)]();const _0x21374f=this[_0x5b791c(0x327)](_0x85df93);_0x21374f[_0x5b791c(0x2c1)]=_0x12c5fb;for(const _0x370b3b in _0x4a27d4){_0x21374f[_0x370b3b]=_0x4a27d4[_0x370b3b];}},Game_Screen[_0x157cda(0x2b9)][_0x157cda(0x201)]=function(_0x3336ae){const _0x367097=_0x157cda;if(this[_0x367097(0x26b)]===undefined)this[_0x367097(0x254)]();if(!_0x3336ae)return;if(_0x3336ae[_0x367097(0x35b)]()==='')return;_0x3336ae=_0x3336ae[_0x367097(0x2db)]()['trim']();const _0x3a7620=this[_0x367097(0x26b)],_0x34f02b=_0x3a7620[_0x367097(0x382)][SceneManager[_0x367097(0x2ce)]()?'battle':_0x367097(0x38b)],_0x2003e6=_0x3a7620['settings'][SceneManager[_0x367097(0x2ce)]()?_0x367097(0x31b):_0x367097(0x38b)];_0x34f02b[_0x367097(0x23f)](_0x3336ae),_0x2003e6[_0x3336ae]=undefined;},Game_Screen[_0x157cda(0x2b9)][_0x157cda(0x22a)]=function(){const _0x62d1dd=_0x157cda;if(this['_visualCutinEffect']===undefined)this[_0x62d1dd(0x254)]();const _0x4dbe02=this[_0x62d1dd(0x26b)],_0x3a19c0=_0x4dbe02['order'][SceneManager[_0x62d1dd(0x2ce)]()?_0x62d1dd(0x31b):'map'];return _0x3a19c0;},Game_Screen['prototype'][_0x157cda(0x327)]=function(_0x5efeec){const _0x1ca401=_0x157cda;if(this['_visualCutinEffect']===undefined)this[_0x1ca401(0x254)]();if(!_0x5efeec)return;if(_0x5efeec[_0x1ca401(0x35b)]()==='')return;_0x5efeec=_0x5efeec[_0x1ca401(0x2db)]()['trim']();const _0x4704e9=this[_0x1ca401(0x26b)],_0x2a9497=_0x4704e9['settings'][SceneManager[_0x1ca401(0x2ce)]()?'battle':_0x1ca401(0x38b)];return _0x2a9497[_0x5efeec]||null;},Game_Actor[_0x157cda(0x2b9)][_0x157cda(0x24c)]=function(){const _0x542ef0=_0x157cda;if(this[_0x542ef0(0x268)]()!=='')return this[_0x542ef0(0x268)]();return this[_0x542ef0(0x28c)]();},Game_Actor[_0x157cda(0x2b9)][_0x157cda(0x357)]=function(){const _0x344985=_0x157cda;if(this[_0x344985(0x268)]()!=='')return 0x0;return this[_0x344985(0x24a)]();},Game_Actor['prototype'][_0x157cda(0x383)]=function(){return 0x0;},Game_Actor['prototype'][_0x157cda(0x232)]=function(){const _0x3a6758=_0x157cda;if(this[_0x3a6758(0x268)]()!=='')return'';return _0x3a6758(0x272);},Game_Enemy[_0x157cda(0x2b9)][_0x157cda(0x24c)]=function(){const _0x915f66=_0x157cda;if(this['hasCustomVisualCutinPortrait']())return this['getCustomVisualCutinPortraitFilename']();if(this[_0x915f66(0x2e7)]())return this[_0x915f66(0x3af)]();return this[_0x915f66(0x2f3)]();},Game_Enemy[_0x157cda(0x2b9)]['visualCutinPortraitIndex']=function(){return 0x0;},Game_Enemy['prototype'][_0x157cda(0x383)]=function(){const _0x3a5dba=_0x157cda;if(this[_0x3a5dba(0x2e7)]())return 0x0;return this['battlerHue']();},Game_Enemy[_0x157cda(0x2b9)][_0x157cda(0x232)]=function(){const _0x1828c6=_0x157cda;if(this['hasCustomVisualCutinPortrait']())return'';if(this[_0x1828c6(0x2e7)]())return'svActor';if($gameSystem['isSideView']())return _0x1828c6(0x35f);return'enemy';},Game_Enemy[_0x157cda(0x2b9)]['hasCustomVisualCutinPortrait']=function(){const _0xeda104=_0x157cda;return this[_0xeda104(0x263)]()!=='';},Game_Enemy['prototype'][_0x157cda(0x263)]=function(){const _0x585c34=_0x157cda;if(this[_0x585c34(0x371)]===undefined){this[_0x585c34(0x371)]='';const _0x5ed63a=VisuMZ['VisualCutinEffect'][_0x585c34(0x248)],_0x155e2b=this['enemy']()[_0x585c34(0x32c)];_0x155e2b['match'](_0x5ed63a['EnemyCutinPortraitName'])&&(this[_0x585c34(0x371)]=String(RegExp['$1'])[_0x585c34(0x35b)]());_0x155e2b[_0x585c34(0x200)](_0x5ed63a[_0x585c34(0x283)])&&(this['_customVisualCutinPortraitFlipHorz']=!![]);if(_0x155e2b['match'](_0x5ed63a[_0x585c34(0x279)])){if(_0x585c34(0x20c)==='AXDCT'){this[_0x585c34(0x371)]='';const _0x127330=_0x131892['VisualCutinEffect']['RegExp'],_0x53415d=this[_0x585c34(0x28e)]()[_0x585c34(0x32c)];_0x53415d['match'](_0x127330[_0x585c34(0x214)])&&(this[_0x585c34(0x371)]=_0x5754d(_0x5c9abd['$1'])['trim']()),_0x53415d['match'](_0x127330[_0x585c34(0x283)])&&(this[_0x585c34(0x245)]=!![]),_0x53415d[_0x585c34(0x200)](_0x127330[_0x585c34(0x279)])&&(this['_customVisualCutinPortraitFlipVert']=!![]);}else this[_0x585c34(0x2e2)]=!![];}}return this[_0x585c34(0x371)];},Game_Enemy[_0x157cda(0x2b9)]['flipVisualCutinHorz']=function(){const _0x6ddcfc=_0x157cda;return(this[_0x6ddcfc(0x28e)]()[_0x6ddcfc(0x32c)]||'')[_0x6ddcfc(0x200)](VisuMZ['VisualCutinEffect'][_0x6ddcfc(0x248)][_0x6ddcfc(0x283)]);},Game_Enemy[_0x157cda(0x2b9)]['flipVisualCutinVert']=function(){const _0xf1a931=_0x157cda;return(this[_0xf1a931(0x28e)]()['note']||'')[_0xf1a931(0x200)](VisuMZ[_0xf1a931(0x3a6)]['RegExp']['EnemyCutinFlipVert']);},VisuMZ[_0x157cda(0x3a6)][_0x157cda(0x1f7)]=Game_Interpreter[_0x157cda(0x2b9)]['updateWaitMode'],Game_Interpreter['prototype']['updateWaitMode']=function(){const _0x557a04=_0x157cda;switch(this[_0x557a04(0x2ea)]){case _0x557a04(0x2d2):if(SceneManager[_0x557a04(0x387)]&&SceneManager[_0x557a04(0x387)][_0x557a04(0x2f0)]())return!![];this['_waitMode']='';break;case _0x557a04(0x261):if(SceneManager[_0x557a04(0x387)]&&SceneManager[_0x557a04(0x387)][_0x557a04(0x262)]())return!![];this[_0x557a04(0x2ea)]='';break;}return VisuMZ[_0x557a04(0x3a6)][_0x557a04(0x1f7)][_0x557a04(0x3ae)](this);},Scene_Message[_0x157cda(0x2b9)]['createVisualCutins']=function(){const _0x1c15a4=_0x157cda;this[_0x1c15a4(0x39d)](),this[_0x1c15a4(0x1fa)]();},Scene_Message[_0x157cda(0x2b9)][_0x157cda(0x39d)]=function(){const _0x4d91fb=_0x157cda;this[_0x4d91fb(0x297)]=this[_0x4d91fb(0x297)]||{},this[_0x4d91fb(0x34b)]=new Sprite();const _0x65e812=this['children']['indexOf'](this[_0x4d91fb(0x2ee)]);this[_0x4d91fb(0x34d)](this[_0x4d91fb(0x34b)],_0x65e812+0x1);},Scene_Message[_0x157cda(0x2b9)]['createExistingVisualCutinSprites']=function(){const _0x193c7e=_0x157cda,_0x517947=$gameScreen['getVisualCutinEffectSpriteOrder']();for(const _0x42defe of _0x517947){const _0x47ba02=$gameScreen[_0x193c7e(0x327)](_0x42defe);_0x47ba02&&this['startVisualCutin'](_0x47ba02);}this[_0x193c7e(0x34b)][_0x193c7e(0x210)]();},Scene_Message[_0x157cda(0x2b9)][_0x157cda(0x21b)]=function(_0x36e179){const _0x27d951=_0x157cda;if(!_0x36e179)return;if(!_0x36e179[_0x27d951(0x234)])return;if(_0x36e179['type'][_0x27d951(0x35b)]()==='')return;const _0x334b30=_0x36e179['type'][_0x27d951(0x2db)]()[_0x27d951(0x35b)]();if(this[_0x27d951(0x297)][_0x334b30]){if('Dghsc'==='Dghsc'){if($gameTemp[_0x27d951(0x3b0)]()){const _0x16e957=_0x27d951(0x37f)+_0x27d951(0x293);console[_0x27d951(0x273)](_0x16e957);}return;}else for(const _0x3adf5f of this[_0x27d951(0x230)]){_0x3adf5f['addLoadListener'](this[_0x27d951(0x243)][_0x27d951(0x26f)](this,_0x3adf5f));}}$gameScreen[_0x27d951(0x229)](_0x36e179);const _0x556401=new Sprite_VisualCutin(_0x36e179);this['_visualCutins'][_0x334b30]=_0x556401,this[_0x27d951(0x34b)]['addChild'](_0x556401);},Scene_Message['prototype']['changeVisualCutinPortrait']=function(_0x500c9f,_0x12ceaa,_0xf013b7){const _0x942125=_0x157cda;if(_0x500c9f[_0x942125(0x35b)]()==='')return;if(!this['_visualCutins'][_0x500c9f])return;$gameScreen['changeVisualCutinEffectPortrait'](_0x500c9f,_0x12ceaa,_0xf013b7);const _0x3b75a5=this[_0x942125(0x297)][_0x500c9f];_0x3b75a5['prepareNewPortrait']();},Scene_Message[_0x157cda(0x2b9)][_0x157cda(0x2bf)]=function(_0x300681,_0x410f08,_0x2003c8){const _0x46fed0=_0x157cda;if(_0x300681[_0x46fed0(0x35b)]()==='')return;if(!this[_0x46fed0(0x297)][_0x300681])return;$gameScreen[_0x46fed0(0x2a8)](_0x300681,_0x410f08,_0x2003c8);const _0x475de8=this[_0x46fed0(0x297)][_0x300681];_0x475de8[_0x46fed0(0x241)]();},Scene_Message[_0x157cda(0x2b9)][_0x157cda(0x2d6)]=function(_0x11dd2a){const _0x3a2bdd=_0x157cda;_0x11dd2a=_0x11dd2a['toLowerCase']()[_0x3a2bdd(0x35b)]();if(!this[_0x3a2bdd(0x297)][_0x11dd2a])return;this[_0x3a2bdd(0x297)][_0x11dd2a][_0x3a2bdd(0x318)]();},Scene_Message['prototype'][_0x157cda(0x358)]=function(_0x42f7bc){const _0x9fa843=_0x157cda;_0x42f7bc=_0x42f7bc[_0x9fa843(0x2db)]()[_0x9fa843(0x35b)]();if(!this['_visualCutins'][_0x42f7bc])return;$gameScreen[_0x9fa843(0x201)](_0x42f7bc);const _0xa079a4=this[_0x9fa843(0x297)][_0x42f7bc];this['_visualCutinContainer'][_0x9fa843(0x2b4)](_0xa079a4),_0xa079a4[_0x9fa843(0x352)](),this['_visualCutins'][_0x42f7bc]=undefined;},Scene_Message[_0x157cda(0x2b9)][_0x157cda(0x22d)]=function(){const _0x1ba62e=_0x157cda,_0x13347e=$gameScreen[_0x1ba62e(0x22a)]();for(const _0x28cafe of _0x13347e){_0x1ba62e(0x225)!==_0x1ba62e(0x33a)?this[_0x1ba62e(0x2d6)](_0x28cafe):this['_customVisualCutinPortraitFlipHorz']=!![];}},Scene_Message[_0x157cda(0x2b9)][_0x157cda(0x2f0)]=function(){const _0xed6255=_0x157cda;if(this['_visualCutinContainer']){if('MPqoy'!==_0xed6255(0x2a3)){if(this['_visualCutinEffect']===_0xe6c7f7)this[_0xed6255(0x254)]();const _0x3c53a4=this['_visualCutinEffect'],_0x34f9be=_0x3c53a4['order'][_0x1eec5d['isSceneBattle']()?_0xed6255(0x31b):_0xed6255(0x38b)];return _0x34f9be;}else return this[_0xed6255(0x34b)][_0xed6255(0x290)]['some'](_0x41e15a=>_0x41e15a[_0xed6255(0x25c)]);}return![];},Scene_Message[_0x157cda(0x2b9)]['isAnyCutinExiting']=function(){const _0x54bd49=_0x157cda;if(this[_0x54bd49(0x34b)])return this['_visualCutinContainer']['children'][_0x54bd49(0x37c)](_0x4dfbca=>_0x4dfbca[_0x54bd49(0x320)]);return![];},VisuMZ[_0x157cda(0x3a6)]['Scene_Map_createSpriteset']=Scene_Map[_0x157cda(0x2b9)][_0x157cda(0x350)],Scene_Map[_0x157cda(0x2b9)][_0x157cda(0x350)]=function(){const _0x25a982=_0x157cda;VisuMZ['VisualCutinEffect']['Scene_Map_createSpriteset'][_0x25a982(0x3ae)](this),this[_0x25a982(0x39f)]();},VisuMZ[_0x157cda(0x3a6)][_0x157cda(0x289)]=Scene_Battle[_0x157cda(0x2b9)]['createSpriteset'],Scene_Battle[_0x157cda(0x2b9)][_0x157cda(0x350)]=function(){const _0x2dfae8=_0x157cda;VisuMZ[_0x2dfae8(0x3a6)][_0x2dfae8(0x289)][_0x2dfae8(0x3ae)](this),this[_0x2dfae8(0x39f)]();};function Sprite_VisualCutin(){this['initialize'](...arguments);}Sprite_VisualCutin[_0x157cda(0x2b9)]=Object[_0x157cda(0x386)](Sprite[_0x157cda(0x2b9)]),Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x3b2)]=Sprite_VisualCutin,Sprite_VisualCutin['prototype'][_0x157cda(0x370)]=function(_0x32d08b){const _0x4e15ff=_0x157cda;this['_type']=_0x32d08b[_0x4e15ff(0x234)]['toLowerCase']()['trim']();;Sprite['prototype'][_0x4e15ff(0x370)][_0x4e15ff(0x3ae)](this),this[_0x4e15ff(0x242)](),this[_0x4e15ff(0x2dd)](),this[_0x4e15ff(0x312)]=this[_0x4e15ff(0x312)]||[],this[_0x4e15ff(0x2ca)]();},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x2ec)]=function(){const _0x1f845a=_0x157cda;return $gameScreen['getVisualCutinEffectSettings'](this[_0x1f845a(0x280)]);},Sprite_VisualCutin[_0x157cda(0x2b9)]['initMembers']=function(){const _0x324755=_0x157cda;this[_0x324755(0x250)]=0x0,this[_0x324755(0x306)]=0x0,this['_entering']=!![],this[_0x324755(0x320)]=![],this[_0x324755(0x27c)]=0x0,this['_animationIndex']=0x0;},Sprite_VisualCutin[_0x157cda(0x2b9)]['initPosition']=function(){const _0x31d481=_0x157cda,_0x3146aa=this[_0x31d481(0x2ec)]()['type'],_0x4983e3=this[_0x31d481(0x26d)]();switch(_0x3146aa){case _0x31d481(0x2b3):case _0x31d481(0x351):case'topleftcorner':case _0x31d481(0x2f2):this[_0x31d481(0x348)]['x']=0x0;break;case _0x31d481(0x2ff):case _0x31d481(0x285):case _0x31d481(0x35e):case _0x31d481(0x365):case _0x31d481(0x2d3):case _0x31d481(0x389):case'rightminor':case _0x31d481(0x30f):case _0x31d481(0x308):case _0x31d481(0x1f5):case _0x31d481(0x38d):case'righthorzslash':case _0x31d481(0x2c5):case _0x31d481(0x3b8):case _0x31d481(0x2f8):case _0x31d481(0x37e):case _0x31d481(0x2bb):case _0x31d481(0x395):case'centergemstone':case _0x31d481(0x2b8):case _0x31d481(0x31e):case _0x31d481(0x34a):case'row3rdthird':case _0x31d481(0x391):case _0x31d481(0x354):case _0x31d481(0x30a):case _0x31d481(0x2fe):case _0x31d481(0x34f):case _0x31d481(0x2da):case _0x31d481(0x362):case _0x31d481(0x339):case _0x31d481(0x2d7):case'col1stthird':case _0x31d481(0x2d8):case _0x31d481(0x260):case _0x31d481(0x205):case _0x31d481(0x33c):case _0x31d481(0x2ef):case _0x31d481(0x2a0):case _0x31d481(0x264):case _0x31d481(0x29f):case'col3rdfifth':case _0x31d481(0x2af):case'col5thfifth':case _0x31d481(0x315):case _0x31d481(0x359):case _0x31d481(0x2b5):case _0x31d481(0x2ba):case'sixpack5':case'sixpack6':case'eightpack1':case'eightpack2':case _0x31d481(0x21d):case _0x31d481(0x253):case _0x31d481(0x31d):case'eightpack6':case'eightpack7':case _0x31d481(0x29d):case _0x31d481(0x374):case _0x31d481(0x252):case _0x31d481(0x231):case _0x31d481(0x337):case _0x31d481(0x39a):case _0x31d481(0x310):case'twelvepack7':case _0x31d481(0x20b):case'twelvepack9':case _0x31d481(0x2cf):case _0x31d481(0x363):case _0x31d481(0x224):this[_0x31d481(0x348)]['x']=0.5;break;case _0x31d481(0x37b):case _0x31d481(0x37a):case'toprightcorner':case _0x31d481(0x353):this[_0x31d481(0x348)]['x']=0x1;break;}switch(_0x3146aa){case _0x31d481(0x2b3):case'toprightquad':case _0x31d481(0x39b):case _0x31d481(0x30c):this[_0x31d481(0x348)]['y']=0x0;break;case _0x31d481(0x2ff):case _0x31d481(0x285):case'leftmajor':case _0x31d481(0x365):case _0x31d481(0x2d3):case'centerminor':case'rightminor':case _0x31d481(0x30f):case _0x31d481(0x308):case'righthorzspan':case _0x31d481(0x38d):case'righthorzslash':case'leftvertslash':case _0x31d481(0x3b8):case'leftdiamond':case _0x31d481(0x37e):case _0x31d481(0x2bb):case _0x31d481(0x395):case _0x31d481(0x203):case'rightgemstone':case _0x31d481(0x31e):case _0x31d481(0x34a):case _0x31d481(0x295):case _0x31d481(0x391):case _0x31d481(0x354):case'row3rdfourth':case _0x31d481(0x2fe):case _0x31d481(0x34f):case _0x31d481(0x2da):case _0x31d481(0x362):case _0x31d481(0x339):case _0x31d481(0x2d7):case _0x31d481(0x3b7):case _0x31d481(0x2d8):case _0x31d481(0x260):case'col1stfourth':case'col2ndfourth':case _0x31d481(0x2ef):case'col4thfourth':case _0x31d481(0x264):case'col2ndfifth':case _0x31d481(0x344):case _0x31d481(0x2af):case'col5thfifth':case'sixpack1':case _0x31d481(0x359):case'sixpack3':case _0x31d481(0x2ba):case _0x31d481(0x21a):case _0x31d481(0x20f):case _0x31d481(0x266):case _0x31d481(0x3a3):case _0x31d481(0x21d):case'eightpack4':case _0x31d481(0x31d):case _0x31d481(0x2e9):case _0x31d481(0x1fb):case _0x31d481(0x29d):case _0x31d481(0x374):case _0x31d481(0x252):case _0x31d481(0x231):case _0x31d481(0x337):case'twelvepack5':case _0x31d481(0x310):case _0x31d481(0x34c):case _0x31d481(0x20b):case'twelvepack9':case _0x31d481(0x2cf):case _0x31d481(0x363):case _0x31d481(0x224):this[_0x31d481(0x348)]['y']=0.5;break;case _0x31d481(0x351):case _0x31d481(0x37a):case'bottomleftcorner':case _0x31d481(0x353):this[_0x31d481(0x348)]['y']=0x1;break;}switch(_0x3146aa){case'topleftquad':case _0x31d481(0x351):case _0x31d481(0x39b):case'bottomleftcorner':this['x']=-ImageManager['VISUAL_CUTIN_EFFECT'][_0x31d481(0x239)];break;case'farleft':this['x']=0x0;break;case _0x31d481(0x2ff):case'showcase':case _0x31d481(0x30f):case'centerhorzspan':case _0x31d481(0x1f5):case _0x31d481(0x38d):case _0x31d481(0x35d):case _0x31d481(0x2c5):case _0x31d481(0x3b8):case _0x31d481(0x37e):case _0x31d481(0x203):case _0x31d481(0x31e):case _0x31d481(0x34a):case'row3rdthird':case'row1stfourth':case _0x31d481(0x354):case'row3rdfourth':case _0x31d481(0x2fe):case'row1stfifth':case _0x31d481(0x2da):case _0x31d481(0x362):case'row4thfifth':case _0x31d481(0x2d7):this['x']=Math['round'](Graphics['width']/0x2);break;case _0x31d481(0x2f8):case _0x31d481(0x395):this['x']=Math[_0x31d481(0x292)](Graphics['width']*0x1/0x6)+0x28;break;case _0x31d481(0x2bb):case _0x31d481(0x2b8):this['x']=Math[_0x31d481(0x292)](Graphics['width']*0x5/0x6)-0x28;break;case'farright':this['x']=Graphics[_0x31d481(0x303)];break;case _0x31d481(0x37b):case _0x31d481(0x37a):case _0x31d481(0x30c):case'bottomrightcorner':this['x']=Graphics[_0x31d481(0x303)]+ImageManager[_0x31d481(0x31a)][_0x31d481(0x239)];break;case _0x31d481(0x35e):this['x']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x303)]*(0x1-0.5)/0x2);break;case _0x31d481(0x365):this['x']=Math[_0x31d481(0x292)](Graphics['width']*(0x2-0.5)/0x2);break;case _0x31d481(0x2d3):case _0x31d481(0x3b7):case _0x31d481(0x315):case _0x31d481(0x2ba):this['x']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x303)]*(0x1-0.5)/0x3);break;case _0x31d481(0x389):case _0x31d481(0x2d8):case _0x31d481(0x359):case'sixpack5':this['x']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x303)]*(0x2-0.5)/0x3);break;case _0x31d481(0x2f9):case _0x31d481(0x260):case _0x31d481(0x2b5):case _0x31d481(0x20f):this['x']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x303)]*(0x3-0.5)/0x3);break;case _0x31d481(0x205):case _0x31d481(0x266):case _0x31d481(0x31d):case _0x31d481(0x374):case'twelvepack5':case _0x31d481(0x228):this['x']=Math['round'](Graphics[_0x31d481(0x303)]*(0x1-0.5)/0x4);break;case'col2ndfourth':case _0x31d481(0x3a3):case _0x31d481(0x2e9):case'twelvepack2':case _0x31d481(0x310):case _0x31d481(0x2cf):this['x']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x303)]*(0x2-0.5)/0x4);break;case _0x31d481(0x2ef):case _0x31d481(0x21d):case _0x31d481(0x1fb):case _0x31d481(0x231):case _0x31d481(0x34c):case _0x31d481(0x363):this['x']=Math['round'](Graphics[_0x31d481(0x303)]*(0x3-0.5)/0x4);break;case _0x31d481(0x2a0):case _0x31d481(0x253):case _0x31d481(0x29d):case _0x31d481(0x337):case'twelvepack8':case _0x31d481(0x224):this['x']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x303)]*(0x4-0.5)/0x4);break;case _0x31d481(0x264):this['x']=Math[_0x31d481(0x292)](Graphics['width']*(0x1-0.5)/0x5);break;case _0x31d481(0x29f):this['x']=Math['round'](Graphics[_0x31d481(0x303)]*(0x2-0.5)/0x5);break;case _0x31d481(0x344):this['x']=Math['round'](Graphics[_0x31d481(0x303)]*(0x3-0.5)/0x5);break;case _0x31d481(0x2af):this['x']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x303)]*(0x4-0.5)/0x5);break;case _0x31d481(0x2d4):this['x']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x303)]*(0x5-0.5)/0x5);break;}switch(_0x3146aa){case _0x31d481(0x2b3):case _0x31d481(0x37b):case _0x31d481(0x39b):case _0x31d481(0x30c):this['y']=-ImageManager[_0x31d481(0x31a)][_0x31d481(0x239)];break;case'top':this['y']=0x0;break;case _0x31d481(0x285):case'lefthorzspan':case _0x31d481(0x308):case _0x31d481(0x1f5):case _0x31d481(0x38d):case _0x31d481(0x35d):case _0x31d481(0x35e):case _0x31d481(0x365):case'leftminor':case'centerminor':case _0x31d481(0x2f9):case _0x31d481(0x2f8):case _0x31d481(0x37e):case _0x31d481(0x2bb):case'leftgemstone':case _0x31d481(0x203):case _0x31d481(0x2b8):const _0xa056c8=Graphics['height']-_0x4983e3;this['y']=Math['floor'](_0xa056c8/0x2);break;case _0x31d481(0x2ff):case _0x31d481(0x2c5):case _0x31d481(0x3b8):case _0x31d481(0x3b7):case _0x31d481(0x2d8):case _0x31d481(0x260):case'col1stfourth':case _0x31d481(0x33c):case'col3rdfourth':case _0x31d481(0x2a0):case _0x31d481(0x264):case _0x31d481(0x29f):case _0x31d481(0x344):case'col4thfifth':case _0x31d481(0x2d4):this['y']=Math[_0x31d481(0x292)](Graphics['height']/0x2);break;case _0x31d481(0x324):this['y']=Graphics[_0x31d481(0x24b)];break;case _0x31d481(0x351):case _0x31d481(0x37a):case _0x31d481(0x2f2):case _0x31d481(0x353):this['y']=Graphics['height']+ImageManager[_0x31d481(0x31a)][_0x31d481(0x239)];break;case _0x31d481(0x315):case _0x31d481(0x359):case _0x31d481(0x2b5):case _0x31d481(0x266):case _0x31d481(0x3a3):case'eightpack3':case _0x31d481(0x253):this['y']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x24b)]*(0x1-0.5)/0x2);break;case'sixpack4':case _0x31d481(0x21a):case'sixpack6':case _0x31d481(0x31d):case'eightpack6':case _0x31d481(0x1fb):case _0x31d481(0x29d):this['y']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x24b)]*(0x2-0.5)/0x2);break;case _0x31d481(0x31e):case _0x31d481(0x374):case _0x31d481(0x252):case'twelvepack3':case _0x31d481(0x337):this['y']=Math[_0x31d481(0x292)](Graphics['height']*(0x1-0.5)/0x3);break;case _0x31d481(0x34a):case _0x31d481(0x39a):case'twelvepack6':case _0x31d481(0x34c):case _0x31d481(0x20b):this['y']=Math['round'](Graphics[_0x31d481(0x24b)]*(0x2-0.5)/0x3);break;case _0x31d481(0x295):case _0x31d481(0x228):case _0x31d481(0x2cf):case _0x31d481(0x363):case _0x31d481(0x224):this['y']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x24b)]*(0x3-0.5)/0x3);break;case _0x31d481(0x391):this['y']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x24b)]*(0x1-0.5)/0x4);break;case _0x31d481(0x354):this['y']=Math[_0x31d481(0x292)](Graphics['height']*(0x2-0.5)/0x4);break;case _0x31d481(0x30a):this['y']=Math[_0x31d481(0x292)](Graphics['height']*(0x3-0.5)/0x4);break;case'row4thfourth':this['y']=Math['round'](Graphics[_0x31d481(0x24b)]*(0x4-0.5)/0x4);break;case _0x31d481(0x34f):this['y']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x24b)]*(0x1-0.5)/0x5);break;case _0x31d481(0x2da):this['y']=Math[_0x31d481(0x292)](Graphics[_0x31d481(0x24b)]*(0x2-0.5)/0x5);break;case'row3rdfifth':this['y']=Math['round'](Graphics[_0x31d481(0x24b)]*(0x3-0.5)/0x5);break;case _0x31d481(0x339):this['y']=Math['round'](Graphics['height']*(0x4-0.5)/0x5);break;case _0x31d481(0x2d7):this['y']=Math['round'](Graphics['height']*(0x5-0.5)/0x5);break;}},Sprite_VisualCutin['prototype'][_0x157cda(0x26d)]=function(){const _0x123e8d=_0x157cda;if(Imported[_0x123e8d(0x3a2)]&&SceneManager[_0x123e8d(0x2ce)]()){if(_0x123e8d(0x247)==='hIuVo'){const _0xa9afa3=_0x23804f[_0x123e8d(0x22a)]();for(const _0x4d3d43 of _0xa9afa3){const _0x452ddb=_0x67a505[_0x123e8d(0x327)](_0x4d3d43);_0x452ddb&&this[_0x123e8d(0x21b)](_0x452ddb);}this[_0x123e8d(0x34b)][_0x123e8d(0x210)]();}else{if(Imported[_0x123e8d(0x3a4)]&&BattleManager[_0x123e8d(0x26c)]())return 0x0;if(SceneManager[_0x123e8d(0x387)][_0x123e8d(0x356)]){if(_0x123e8d(0x2b6)!==_0x123e8d(0x2b6)){if(_0x421579[_0x123e8d(0x35b)]()==='')return;if(!this[_0x123e8d(0x297)][_0x21ba37])return;_0x13ca3b['changeVisualCutinEffectParallax'](_0xa62640,_0x225719,_0x3a8343);const _0x313908=this[_0x123e8d(0x297)][_0x3c5b6c];_0x313908['prepareNewParallax']();}else return SceneManager[_0x123e8d(0x387)][_0x123e8d(0x356)][_0x123e8d(0x24b)];}}}return SceneManager[_0x123e8d(0x387)][_0x123e8d(0x2ab)](0x4,SceneManager[_0x123e8d(0x2ce)]());},Sprite_VisualCutin[_0x157cda(0x2b9)]['startEntrance']=function(){const _0x126dff=_0x157cda,_0x514f94=ImageManager[_0x126dff(0x30b)](this[_0x126dff(0x2ec)]()['type']);this[_0x126dff(0x25c)]=!![],this['_fadeDuration']=this[_0x126dff(0x2ec)]()[_0x126dff(0x222)]||0x1,this[_0x126dff(0x2c9)]=0xff,this[_0x126dff(0x2fa)]=![],this[_0x126dff(0x1f3)]=this[_0x126dff(0x250)],this[_0x126dff(0x317)]=this[_0x126dff(0x250)],this[_0x126dff(0x30d)]=_0x514f94[_0x126dff(0x22c)]||'Linear',this['x']+=_0x514f94['cutinOffsetX']??0x0,this['y']+=_0x514f94[_0x126dff(0x213)]??0x0,this[_0x126dff(0x3ab)]=this['x'],this[_0x126dff(0x287)]=this['y'],this['x']+=_0x514f94['enterX']??0x0,this['y']+=_0x514f94[_0x126dff(0x2a4)]??0x0,this[_0x126dff(0x29e)]=this['_fadeDuration'],this[_0x126dff(0x2d5)]=this[_0x126dff(0x250)],this[_0x126dff(0x2e6)]=this[_0x126dff(0x2ec)]()[_0x126dff(0x2ac)]||_0x126dff(0x394),this[_0x126dff(0x349)]=this[_0x126dff(0x2e0)]['x'],this[_0x126dff(0x3b6)]=this[_0x126dff(0x2e0)]['y'],this[_0x126dff(0x2e0)]['x']+=this['settings']()[_0x126dff(0x2b0)],this[_0x126dff(0x2e0)]['y']+=this[_0x126dff(0x2ec)]()['portraitEnterY'];},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x318)]=function(){const _0x2f8285=_0x157cda,_0x5ef6c1=ImageManager[_0x2f8285(0x30b)](this['settings']()[_0x2f8285(0x234)]);this['_exiting']=!![],this['_fadeDuration']=this[_0x2f8285(0x2ec)]()[_0x2f8285(0x33b)]||0x1,this[_0x2f8285(0x2c9)]=0x0,this[_0x2f8285(0x2fa)]=!![],this[_0x2f8285(0x1f3)]=this['_fadeDuration'],this[_0x2f8285(0x317)]=this[_0x2f8285(0x250)],this['_moveEasingType']=_0x5ef6c1['exitEasingType']||_0x2f8285(0x394),this[_0x2f8285(0x3ab)]=this['x']+_0x5ef6c1[_0x2f8285(0x227)]??0x0,this[_0x2f8285(0x287)]=this['y']+_0x5ef6c1[_0x2f8285(0x347)]??0x0,this[_0x2f8285(0x29e)]=this[_0x2f8285(0x250)],this['_movePortraitWholeDuration']=this['_fadeDuration'],this[_0x2f8285(0x2e6)]=this[_0x2f8285(0x2ec)]()['portraitExitEasingType']||'Linear',this[_0x2f8285(0x349)]=this[_0x2f8285(0x2e0)]['x']+this[_0x2f8285(0x2ec)]()[_0x2f8285(0x336)],this[_0x2f8285(0x3b6)]=this[_0x2f8285(0x2e0)]['y']+this['settings']()[_0x2f8285(0x375)];},Sprite_VisualCutin['prototype'][_0x157cda(0x352)]=function(){const _0x33e63a=_0x157cda;Sprite[_0x33e63a(0x2b9)][_0x33e63a(0x352)][_0x33e63a(0x3ae)](this);if(this[_0x33e63a(0x202)]){if(_0x33e63a(0x2bd)===_0x33e63a(0x2bd))this[_0x33e63a(0x202)]['destroy']();else{const _0x39bf98=_0xeda0d5[_0x33e63a(0x223)](_0x133c03[_0x33e63a(0x385)]),_0xb49d90=_0x561cb7[_0x33e63a(0x265)]*_0x458235+_0x3af299[_0x33e63a(0x311)]*_0xaed82f;_0x42f554[_0x33e63a(0x207)](_0x4b404a,_0x39bf98,_0x1668cb,_0xb49d90,0xff,!![]);}}},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x2ca)]=function(){const _0x16471a=_0x157cda;this[_0x16471a(0x230)]=[];if(ImageManager[_0x16471a(0x244)](this[_0x16471a(0x2ec)]()['type'])){if('VhcMI'!==_0x16471a(0x274)){const _0xd2b79d=_0x3c7048['ceil'](_0x313510[_0x16471a(0x303)]/0x2),_0x102559=_0x3be6c5[_0x16471a(0x24b)]+0x28,_0x5714b2=new _0x41d9a3(_0xd2b79d,_0x102559),_0x912176=[[0x0,0x0,_0xd2b79d,0x0,_0x4215af['round'](_0xd2b79d*0x3/0x4),_0x102559,_0x1e1133[_0x16471a(0x292)](_0xd2b79d*0x1/0x2),_0x102559],[0x0,0x0,_0xd2b79d,0x0,_0x180676[_0x16471a(0x292)](_0xd2b79d*0x1/0x2),_0x102559,_0x1e8cf6[_0x16471a(0x292)](_0xd2b79d*0x1/0x4),_0x102559]];return this['fill_VisualCutinEffect_Bitmap'](_0x5714b2,_0x912176[_0x4416ff],_0x75ba8b,0x2);}else{const _0x4cd918=this['settings']()['type']||'',_0x1c40f5=ImageManager[_0x16471a(0x314)](_0x4cd918);this[_0x16471a(0x230)][_0x16471a(0x2c0)](_0x1c40f5);const _0x89739e=ImageManager[_0x16471a(0x329)](_0x4cd918);this['_loadingBitmaps']['push'](_0x89739e);}}if((this['settings']()[_0x16471a(0x2c1)]||'')!==''){const _0x47d5ff=ImageManager['loadParallax'](this['settings']()[_0x16471a(0x2c1)]);if(_0x47d5ff[_0x16471a(0x28f)]===_0x16471a(0x33d))this[_0x16471a(0x230)][_0x16471a(0x2c0)](_0x47d5ff);}if((this[_0x16471a(0x2ec)]()['portraitFilename']||'')!==''){const _0x3552e3=this[_0x16471a(0x2a2)]();if(_0x3552e3['_loadingState']===_0x16471a(0x33d))this['_loadingBitmaps']['push'](_0x3552e3);}if(this['_loadingBitmaps'][_0x16471a(0x30e)]<=0x0)this[_0x16471a(0x2d9)]();else for(const _0x1cfeaf of this[_0x16471a(0x230)]){_0x1cfeaf[_0x16471a(0x3ad)](this[_0x16471a(0x243)]['bind'](this,_0x1cfeaf));}},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x243)]=function(_0x2d74a1){const _0x2bad9a=_0x157cda;this[_0x2bad9a(0x230)][_0x2bad9a(0x23f)](_0x2d74a1);if(this[_0x2bad9a(0x230)][_0x2bad9a(0x30e)]<=0x0)this[_0x2bad9a(0x2d9)]();},Sprite_VisualCutin['prototype'][_0x157cda(0x2d9)]=function(){const _0x3c9281=_0x157cda;this['createMaskContainers'](),this['createMaskSprites'](),this[_0x3c9281(0x38f)](),this['createParallaxSprite'](),this[_0x3c9281(0x21e)](),this[_0x3c9281(0x2fc)](),this['startEntrance']();},Sprite_VisualCutin[_0x157cda(0x2b9)]['createMaskContainers']=function(){const _0x41a18d=_0x157cda;this[_0x41a18d(0x226)]=new Sprite(),this[_0x41a18d(0x2f1)]=new Sprite();const _0x349636=[this[_0x41a18d(0x226)],this['_foregroundContainer']];for(const _0x3e04db of _0x349636){if(_0x41a18d(0x2cb)==='JxGOD')this['addChild'](_0x3e04db),_0x3e04db[_0x41a18d(0x312)]=_0x3e04db[_0x41a18d(0x312)]||[],_0x3e04db[_0x41a18d(0x348)]['x']=this[_0x41a18d(0x348)]['x'],_0x3e04db[_0x41a18d(0x348)]['y']=this[_0x41a18d(0x348)]['y'];else{if(this['_visualCutinEffect']===_0x5ec71d)this[_0x41a18d(0x254)]();if(!_0x39c372)return;if(_0x1cd1a2[_0x41a18d(0x35b)]()==='')return;_0xbf07bb=_0x9ef945[_0x41a18d(0x2db)]()[_0x41a18d(0x35b)]();const _0x19945f=this[_0x41a18d(0x26b)],_0x510847=_0x19945f[_0x41a18d(0x2ec)][_0x3f9da0[_0x41a18d(0x2ce)]()?_0x41a18d(0x31b):_0x41a18d(0x38b)];return _0x510847[_0x5e70f9]||null;}}},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x291)]=function(){const _0x22c0f2=_0x157cda,_0x341b5c=this[_0x22c0f2(0x2ec)]()['type']||'';this[_0x22c0f2(0x23a)]=new Sprite(),this[_0x22c0f2(0x23a)][_0x22c0f2(0x212)]=ImageManager[_0x22c0f2(0x314)](_0x341b5c),this[_0x22c0f2(0x360)](this[_0x22c0f2(0x23a)]),this[_0x22c0f2(0x23a)][_0x22c0f2(0x348)]['x']=this[_0x22c0f2(0x348)]['x'],this[_0x22c0f2(0x23a)][_0x22c0f2(0x348)]['y']=this[_0x22c0f2(0x348)]['y'],this['_backgroundMaskFilter']=new PIXI[(_0x22c0f2(0x325))](this[_0x22c0f2(0x23a)]),this['_backgroundContainer'][_0x22c0f2(0x312)][_0x22c0f2(0x2c0)](this[_0x22c0f2(0x366)]),this[_0x22c0f2(0x284)]=new PIXI['SpriteMaskFilter'](this[_0x22c0f2(0x23a)]),this['_foregroundContainer']['filters'][_0x22c0f2(0x2c0)](this[_0x22c0f2(0x284)]);},Sprite_VisualCutin['prototype']['createBgColorSprite']=function(){const _0xac50d6=_0x157cda;this[_0xac50d6(0x202)]=new Sprite(),this[_0xac50d6(0x226)][_0xac50d6(0x360)](this[_0xac50d6(0x202)]);if(this[_0xac50d6(0x2ec)]()[_0xac50d6(0x2a9)]){if('BkACE'==='ZOHZV'){if(this[_0xac50d6(0x268)]()!=='')return 0x0;return this[_0xac50d6(0x24a)]();}else{const _0x2b697a=this['_maskSprite'][_0xac50d6(0x212)],_0x4cedc4=ColorManager[_0xac50d6(0x223)](this[_0xac50d6(0x2ec)]()[_0xac50d6(0x235)]||_0xac50d6(0x341));this[_0xac50d6(0x202)][_0xac50d6(0x212)]=new Bitmap(_0x2b697a[_0xac50d6(0x303)],_0x2b697a[_0xac50d6(0x24b)]),this[_0xac50d6(0x202)][_0xac50d6(0x212)][_0xac50d6(0x355)](0x0,0x0,_0x2b697a[_0xac50d6(0x303)],_0x2b697a[_0xac50d6(0x24b)],_0x4cedc4);}}this['_bgSprite'][_0xac50d6(0x348)]['x']=this[_0xac50d6(0x348)]['x'],this['_bgSprite'][_0xac50d6(0x348)]['y']=this[_0xac50d6(0x348)]['y'];},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x269)]=function(){const _0x1c5fe4=_0x157cda,_0x15dee6=this['settings']()['parallaxFilename']||'';if(_0x15dee6[_0x1c5fe4(0x35b)]()==='')return;this[_0x1c5fe4(0x2c4)]=new TilingSprite(),this[_0x1c5fe4(0x226)][_0x1c5fe4(0x360)](this[_0x1c5fe4(0x2c4)]);const _0x41e6d8=ImageManager[_0x1c5fe4(0x379)](_0x15dee6);this[_0x1c5fe4(0x331)](_0x41e6d8);},Sprite_VisualCutin['prototype'][_0x157cda(0x331)]=function(_0x5727b8){const _0x260dc3=_0x157cda;this[_0x260dc3(0x2c4)][_0x260dc3(0x212)]=_0x5727b8;const _0x80a8d1=this[_0x260dc3(0x23a)][_0x260dc3(0x212)];this[_0x260dc3(0x2c4)][_0x260dc3(0x300)](0x0,0x0,_0x80a8d1[_0x260dc3(0x303)],_0x80a8d1[_0x260dc3(0x24b)]),this[_0x260dc3(0x2c4)][_0x260dc3(0x306)]=this[_0x260dc3(0x2ec)]()[_0x260dc3(0x288)]??0xff,this[_0x260dc3(0x366)][_0x260dc3(0x330)]=this[_0x260dc3(0x2ec)]()[_0x260dc3(0x238)]??0x0,this[_0x260dc3(0x2c4)]['anchor']['x']=this['anchor']['x'],this['_parallaxSprite'][_0x260dc3(0x348)]['y']=this[_0x260dc3(0x348)]['y'],this[_0x260dc3(0x2c4)][_0x260dc3(0x2e4)]['x']+=this['settings']()[_0x260dc3(0x3a8)],this['_parallaxSprite']['origin']['y']+=this[_0x260dc3(0x2ec)]()[_0x260dc3(0x281)],this[_0x260dc3(0x2ae)]=new ColorFilter(),this[_0x260dc3(0x2c4)][_0x260dc3(0x312)]=this[_0x260dc3(0x2c4)][_0x260dc3(0x312)]||[],this[_0x260dc3(0x2c4)]['filters'][_0x260dc3(0x2c0)](this['_parallaxColorFilter']),this[_0x260dc3(0x2ae)][_0x260dc3(0x2bc)](this[_0x260dc3(0x2ec)]()[_0x260dc3(0x2c6)]??0x0);},Sprite_VisualCutin['prototype']['loadPortraitBitmap']=function(){const _0x488df7=_0x157cda,_0x100759=this[_0x488df7(0x2ec)]()['portraitFilename'];if(this[_0x488df7(0x2ec)]()[_0x488df7(0x22f)]!==undefined){if(this[_0x488df7(0x2ec)]()[_0x488df7(0x22f)]==='enemy')return ImageManager[_0x488df7(0x267)](_0x100759);else{if(this[_0x488df7(0x2ec)]()[_0x488df7(0x22f)]===_0x488df7(0x35f))return ImageManager[_0x488df7(0x31c)](_0x100759);else{if(this[_0x488df7(0x2ec)]()[_0x488df7(0x22f)]===_0x488df7(0x36a))return ImageManager[_0x488df7(0x209)](_0x100759);else{if(this[_0x488df7(0x2ec)]()['portraitType']===_0x488df7(0x272)){if('IyDbZ'==='CYPfU')this['y']=this['applyEasing'](this['y'],this['_moveTargetY']??this['y'],_0x42de4c,_0x353d11,_0x6f2221);else return ImageManager[_0x488df7(0x369)](_0x100759);}}}}}return ImageManager['loadPicture'](_0x100759);},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x21e)]=function(){const _0x192f81=_0x157cda,_0x113833=this[_0x192f81(0x2ec)]()['portraitFilename']||'';if(_0x113833[_0x192f81(0x35b)]()==='')return;this[_0x192f81(0x2e0)]=new Sprite(),this[_0x192f81(0x2f1)]['addChild'](this['_portraitSprite']);const _0x53b2b7=this[_0x192f81(0x2a2)]();this[_0x192f81(0x33f)](_0x53b2b7);},Sprite_VisualCutin['prototype'][_0x157cda(0x33f)]=function(_0x23dbe5){const _0x41a2af=_0x157cda;this['_portraitSprite'][_0x41a2af(0x212)]=_0x23dbe5,this[_0x41a2af(0x2e0)][_0x41a2af(0x2bc)](this['settings']()[_0x41a2af(0x2eb)]??0x0),this[_0x41a2af(0x2e0)][_0x41a2af(0x306)]=this[_0x41a2af(0x2ec)]()['potraitOpacity']??0xff,this[_0x41a2af(0x2e0)][_0x41a2af(0x348)]['x']=this['settings']()[_0x41a2af(0x346)]??0.5,this[_0x41a2af(0x2e0)][_0x41a2af(0x348)]['y']=this[_0x41a2af(0x2ec)]()[_0x41a2af(0x26a)]??0.5;const _0xf2ad96=this[_0x41a2af(0x23a)][_0x41a2af(0x212)];this[_0x41a2af(0x2e0)]['x']=_0xf2ad96['width']*(this[_0x41a2af(0x2e0)][_0x41a2af(0x348)]['x']-this[_0x41a2af(0x348)]['x']),this[_0x41a2af(0x2e0)]['y']=_0xf2ad96['height']*(this['_portraitSprite'][_0x41a2af(0x348)]['y']-this[_0x41a2af(0x348)]['y']),this[_0x41a2af(0x2e0)]['x']+=this[_0x41a2af(0x2ec)]()[_0x41a2af(0x378)],this[_0x41a2af(0x2e0)]['y']+=this[_0x41a2af(0x2ec)]()[_0x41a2af(0x3b4)],this['applyPortraitFrame']();if(this[_0x41a2af(0x2ec)]()[_0x41a2af(0x236)]!==0x0){const _0x21fdef=this['settings']()[_0x41a2af(0x236)];this[_0x41a2af(0x2e0)][_0x41a2af(0x2a5)]['x']=_0x21fdef,this[_0x41a2af(0x2e0)]['scale']['y']=_0x21fdef;}else{if(this['settings']()['portraitScaleToFit']){const _0x3235b3=_0xf2ad96[_0x41a2af(0x303)]/this['_portraitSprite'][_0x41a2af(0x303)],_0x51e873=_0xf2ad96[_0x41a2af(0x24b)]/this[_0x41a2af(0x2e0)]['height'],_0x4dc11f=this[_0x41a2af(0x2ec)]()[_0x41a2af(0x29c)]?Math[_0x41a2af(0x257)](_0x3235b3,_0x51e873):Math['min'](_0x3235b3,_0x51e873);this[_0x41a2af(0x2e0)][_0x41a2af(0x2a5)]['x']=_0x4dc11f,this[_0x41a2af(0x2e0)][_0x41a2af(0x2a5)]['y']=_0x4dc11f;}}if(this[_0x41a2af(0x2ec)]()[_0x41a2af(0x332)])this[_0x41a2af(0x2e0)][_0x41a2af(0x2a5)]['x']*=-0x1;if(this[_0x41a2af(0x2ec)]()['portraitFlipVert'])this[_0x41a2af(0x2e0)]['scale']['y']*=-0x1;},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x36d)]=function(){const _0x333e7d=_0x157cda;if(this[_0x333e7d(0x35a)]()){this[_0x333e7d(0x27c)]=0x0,this[_0x333e7d(0x2de)]=0x0,this[_0x333e7d(0x319)]();return;}const _0x3a1cbf=this[_0x333e7d(0x2e0)]['bitmap'],_0xe15bee=this['settings']()[_0x333e7d(0x22f)];if(_0xe15bee!==undefined){if(_0xe15bee===_0x333e7d(0x272)){if(_0x333e7d(0x368)!=='VqcPC')this[_0x333e7d(0x25d)]()?this['_animationIndex']=0x0:this[_0x333e7d(0x2de)]=this['_animationMaxCells']-0x1;else{const _0x3d02cd=this[_0x333e7d(0x2ec)]()['portraitIndex'],_0x19f63f=ImageManager[_0x333e7d(0x21c)],_0x513bfe=ImageManager[_0x333e7d(0x276)],_0x3ea191=Math['floor'](_0x3d02cd%0x4*_0x19f63f/0x2),_0x46b9d3=Math[_0x333e7d(0x2f6)](Math['floor'](_0x3d02cd/0x4)*_0x513bfe/0x2);this[_0x333e7d(0x2e0)][_0x333e7d(0x233)](_0x3ea191,_0x46b9d3,_0x513bfe,_0x513bfe);return;}}else{if(_0xe15bee===_0x333e7d(0x36a)){if(_0x333e7d(0x218)!==_0x333e7d(0x296)){const _0x1335d3=this['settings']()[_0x333e7d(0x38e)]['match'](/\$/i),_0x537f04=_0x1335d3?0x1:ImageManager[_0x333e7d(0x398)],_0x23b5cd=_0x1335d3?0x1:ImageManager[_0x333e7d(0x2e1)],_0x1cfb08=_0x3a1cbf['width']/_0x537f04,_0x422388=_0x3a1cbf['height']/_0x23b5cd;this[_0x333e7d(0x2e0)]['setFrame'](0x0,0x0,_0x1cfb08,_0x422388);return;}else{if(this[_0x333e7d(0x34b)])return this[_0x333e7d(0x34b)]['children'][_0x333e7d(0x37c)](_0x101013=>_0x101013[_0x333e7d(0x320)]);return![];}}}}this[_0x333e7d(0x2e0)][_0x333e7d(0x233)](0x0,0x0,_0x3a1cbf['width'],_0x3a1cbf[_0x333e7d(0x24b)]);},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x2fc)]=function(){const _0x595fb7=_0x157cda;if(!this['settings']()[_0x595fb7(0x301)])return;const _0x26e221=this[_0x595fb7(0x2ec)]()[_0x595fb7(0x234)]||'';this[_0x595fb7(0x345)]=new Sprite(),this[_0x595fb7(0x2f1)][_0x595fb7(0x360)](this[_0x595fb7(0x345)]),this['_outlineSprite'][_0x595fb7(0x212)]=ImageManager[_0x595fb7(0x329)](_0x26e221),this[_0x595fb7(0x345)][_0x595fb7(0x348)]['x']=0.5,this[_0x595fb7(0x345)][_0x595fb7(0x348)]['y']=0.5;const _0x1fdc99=this[_0x595fb7(0x23a)]['bitmap'],_0x2e316e=ImageManager[_0x595fb7(0x30b)](_0x26e221);this[_0x595fb7(0x345)]['x']=_0x1fdc99[_0x595fb7(0x303)]*(0.5-this['anchor']['x']),this['_outlineSprite']['x']+=_0x2e316e[_0x595fb7(0x2a6)],this[_0x595fb7(0x345)]['y']=_0x1fdc99[_0x595fb7(0x24b)]*(0.5-this['anchor']['y']),this['_outlineSprite']['y']+=_0x2e316e['outlineOffsetY'];},Sprite_VisualCutin[_0x157cda(0x2b9)]['update']=function(){const _0x478eec=_0x157cda;Sprite[_0x478eec(0x2b9)]['update']['call'](this);if(!this[_0x478eec(0x2ec)]())return![];this['updateAnimatedPortrait'](),this[_0x478eec(0x249)](),this[_0x478eec(0x2b2)](),this[_0x478eec(0x2d1)](),this[_0x478eec(0x36b)]();},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x249)]=function(){const _0xff3523=_0x157cda;if(!this[_0xff3523(0x2c4)])return;if(this[_0xff3523(0x2ec)]()['parallaxX']!==0x0){if(_0xff3523(0x26e)!==_0xff3523(0x286))this[_0xff3523(0x2c4)]['origin']['x']+=this['settings']()[_0xff3523(0x2fb)];else return(this[_0xff3523(0x28e)]()['note']||'')[_0xff3523(0x200)](_0x1cea9b[_0xff3523(0x3a6)][_0xff3523(0x248)][_0xff3523(0x279)]);}this['settings']()['parallaxY']!==0x0&&(this[_0xff3523(0x2c4)]['origin']['y']+=this[_0xff3523(0x2ec)]()['parallaxScrollY']);},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x2b2)]=function(){const _0x5319b0=_0x157cda;if(this[_0x5319b0(0x1f3)]===undefined)return;if(this[_0x5319b0(0x1f3)]<=0x0)return;const _0xebecdb=this[_0x5319b0(0x1f3)],_0x3d1fc6=this[_0x5319b0(0x317)],_0x42a6d2=this[_0x5319b0(0x30d)];this[_0x5319b0(0x3ab)]!==undefined&&(this['x']=this[_0x5319b0(0x215)](this['x'],this[_0x5319b0(0x3ab)]??this['x'],_0xebecdb,_0x3d1fc6,_0x42a6d2));this[_0x5319b0(0x287)]!==undefined&&(this['y']=this[_0x5319b0(0x215)](this['y'],this[_0x5319b0(0x287)]??this['y'],_0xebecdb,_0x3d1fc6,_0x42a6d2));this[_0x5319b0(0x1f3)]--;if(this[_0x5319b0(0x1f3)]<=0x0){if(this['_moveTargetX']!==undefined)this['x']=this[_0x5319b0(0x3ab)]??this['x'];if(this[_0x5319b0(0x287)]!==undefined)this['y']=this[_0x5319b0(0x287)]??this['y'];}},Sprite_VisualCutin['prototype'][_0x157cda(0x2d1)]=function(){const _0x51112d=_0x157cda;if(this[_0x51112d(0x29e)]===undefined)return;if(this[_0x51112d(0x29e)]<=0x0)return;if(!this[_0x51112d(0x2e0)])return;const _0x4dfc24=this[_0x51112d(0x29e)],_0x41b8b3=this[_0x51112d(0x2d5)],_0x51e265=this[_0x51112d(0x2e6)];this['_portraitSprite']['x']=this[_0x51112d(0x215)](this[_0x51112d(0x2e0)]['x'],this[_0x51112d(0x349)],_0x4dfc24,_0x41b8b3,_0x51e265),this[_0x51112d(0x2e0)]['y']=this[_0x51112d(0x215)](this[_0x51112d(0x2e0)]['y'],this[_0x51112d(0x3b6)],_0x4dfc24,_0x41b8b3,_0x51e265),this['_movePortraitDuration']--,this['_movePortraitDuration']<=0x0&&(this[_0x51112d(0x2e0)]['x']=this[_0x51112d(0x349)],this[_0x51112d(0x2e0)]['y']=this[_0x51112d(0x3b6)]);},Sprite_VisualCutin[_0x157cda(0x2b9)]['applyEasing']=function(_0x4453e0,_0xa7c94c,_0x38a3cb,_0x224511,_0x2ff8d3){const _0x66b2b4=_0x157cda,_0x1eaa34=VisuMZ[_0x66b2b4(0x23c)]((_0x224511-_0x38a3cb)/_0x224511,_0x2ff8d3||_0x66b2b4(0x394)),_0x5f2e42=VisuMZ[_0x66b2b4(0x23c)]((_0x224511-_0x38a3cb+0x1)/_0x224511,_0x2ff8d3||_0x66b2b4(0x394)),_0x5c730a=(_0x4453e0-_0xa7c94c*_0x1eaa34)/(0x1-_0x1eaa34);return _0x5c730a+(_0xa7c94c-_0x5c730a)*_0x5f2e42;},Sprite_VisualCutin['prototype'][_0x157cda(0x36b)]=function(){const _0x125c4a=_0x157cda;if(this[_0x125c4a(0x250)]<=0x0)return;const _0x56b65=this[_0x125c4a(0x250)],_0x5c8df6=this[_0x125c4a(0x2c9)];this[_0x125c4a(0x306)]=(this[_0x125c4a(0x306)]*(_0x56b65-0x1)+_0x5c8df6)/_0x56b65,this['_fadeDuration']--;if(this['_fadeDuration']<=0x0){this['settings']()[_0x125c4a(0x222)]=0x1,this[_0x125c4a(0x306)]=_0x5c8df6,this['_entering']=![],this[_0x125c4a(0x320)]=![];if(this['_fadeRemove']){if(_0x125c4a(0x2df)!==_0x125c4a(0x2df)){const _0x32f0f1=_0x3f6996['loadParallax'](this['settings']()[_0x125c4a(0x2c1)]);if(_0x32f0f1[_0x125c4a(0x28f)]==='loading')this[_0x125c4a(0x230)][_0x125c4a(0x2c0)](_0x32f0f1);}else SceneManager['_scene'][_0x125c4a(0x358)](this[_0x125c4a(0x2ec)]()['type']);}}},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x35a)]=function(){const _0x479f1d=_0x157cda;if(!this[_0x479f1d(0x2ec)]())return![];if(this['_isAnimatedPicture'])return!![];if(Imported[_0x479f1d(0x326)]&&this[_0x479f1d(0x2e0)]){const _0x1c6f88=this[_0x479f1d(0x2ec)]()[_0x479f1d(0x38e)]||'';if(_0x1c6f88[_0x479f1d(0x200)](/\[ANI\]\[(\d+)x(\d+)\]/i))return this['_isAnimatedPicture']=!![],this[_0x479f1d(0x390)]=Math[_0x479f1d(0x257)](0x1,parseInt(RegExp['$1'])),this[_0x479f1d(0x323)]=Math[_0x479f1d(0x257)](0x1,parseInt(RegExp['$2'])),this[_0x479f1d(0x2d0)]=this['_animationHorzCells']*this[_0x479f1d(0x323)],!![];}return![];},Sprite_VisualCutin['prototype'][_0x157cda(0x29a)]=function(){const _0x3d265d=_0x157cda;if(!this[_0x3d265d(0x35a)]())return;this['updateAnimatedPictureCount']();},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x2e3)]=function(){const _0x49aa87=_0x157cda;this[_0x49aa87(0x27c)]+=0x1;if(this['_animationCount']>=this[_0x49aa87(0x240)]()){this[_0x49aa87(0x27c)]=0x0,this[_0x49aa87(0x2de)]+=0x1;if(this[_0x49aa87(0x2de)]>=this['_animationMaxCells']){if(this[_0x49aa87(0x25d)]())this['_animationIndex']=0x0;else{if(_0x49aa87(0x392)!==_0x49aa87(0x392)){if(!_0x2685e0)return;if(!_0x4baf23['type'])return;if(_0xcdef85[_0x49aa87(0x234)][_0x49aa87(0x35b)]()==='')return;const _0x419a2b=_0x33ea63[_0x49aa87(0x234)]['toLowerCase']()[_0x49aa87(0x35b)]();if(this[_0x49aa87(0x297)][_0x419a2b]){if(_0xf70bf1['isPlaytest']()){const _0x2852ac='A\x20Visual\x20Cutin\x20Effect\x20for\x20this\x20type\x20already\x20exists.\x0a'+_0x49aa87(0x293);_0xbfe1d8[_0x49aa87(0x273)](_0x2852ac);}return;}_0xc6505b[_0x49aa87(0x229)](_0x1b2ddb);const _0x3c8b73=new _0x19b99c(_0xdcbb08);this[_0x49aa87(0x297)][_0x419a2b]=_0x3c8b73,this[_0x49aa87(0x34b)][_0x49aa87(0x360)](_0x3c8b73);}else this[_0x49aa87(0x2de)]=this[_0x49aa87(0x2d0)]-0x1;}}this[_0x49aa87(0x319)]();}},Sprite_VisualCutin['prototype'][_0x157cda(0x319)]=function(){const _0x2fda22=_0x157cda,_0x38b5be=this[_0x2fda22(0x2e0)][_0x2fda22(0x212)],_0x49421c=_0x38b5be['width']/this['_animationHorzCells'],_0x118977=_0x38b5be['height']/this['_animationVertCells'],_0x3b1c43=this[_0x2fda22(0x2de)]%this['_animationHorzCells']*_0x49421c,_0x54d4a7=Math[_0x2fda22(0x2f6)](this[_0x2fda22(0x2de)]/this['_animationHorzCells'])*_0x118977;this[_0x2fda22(0x2e0)][_0x2fda22(0x233)](_0x3b1c43,_0x54d4a7,_0x49421c,_0x118977);},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x25d)]=function(){const _0x1c9ae1=_0x157cda;return this[_0x1c9ae1(0x2ec)]()[_0x1c9ae1(0x3a9)]??VisuMZ[_0x1c9ae1(0x322)][_0x1c9ae1(0x32e)][_0x1c9ae1(0x1fc)];},Sprite_VisualCutin['prototype'][_0x157cda(0x240)]=function(){const _0x2851fc=_0x157cda;return this[_0x2851fc(0x2ec)]()['animatedPortraitWaitFrames']??VisuMZ[_0x2851fc(0x322)][_0x2851fc(0x32e)][_0x2851fc(0x219)];},Sprite_VisualCutin['prototype'][_0x157cda(0x367)]=function(){const _0x9f3827=_0x157cda,_0x1bc384=this[_0x9f3827(0x2ec)]()[_0x9f3827(0x38e)];if(_0x1bc384==='')this[_0x9f3827(0x2e0)]['bitmap']=new Bitmap(0x1,0x1);else{if(_0x9f3827(0x23e)===_0x9f3827(0x23e)){const _0x5a0961=this[_0x9f3827(0x2a2)]();_0x5a0961[_0x9f3827(0x3ad)](this[_0x9f3827(0x33f)][_0x9f3827(0x26f)](this,_0x5a0961));}else{const _0x23fc87=_0x615538(_0x3efd92['$1']);_0x23fc87<_0xc7a177?(_0x4c0d5c('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x9f3827(0x28d)](_0x52dd45,_0x23fc87,_0xad8f4a)),_0x36a526[_0x9f3827(0x256)]()):_0x1f119d=_0x1daf11[_0x9f3827(0x257)](_0x23fc87,_0x3f0e16);}}},Sprite_VisualCutin[_0x157cda(0x2b9)][_0x157cda(0x241)]=function(){const _0x5275aa=_0x157cda,_0x1c1208=this['settings']()[_0x5275aa(0x2c1)];if(_0x1c1208==='')this['_parallaxSprite'][_0x5275aa(0x212)]=new Bitmap(0x1,0x1);else{if(_0x5275aa(0x313)==='DPQKR'){const _0x409a8a=ImageManager[_0x5275aa(0x379)](_0x1c1208);_0x409a8a[_0x5275aa(0x3ad)](this[_0x5275aa(0x331)][_0x5275aa(0x26f)](this,_0x409a8a));}else{const _0x2f3000=this[_0x5275aa(0x2a2)]();_0x2f3000['addLoadListener'](this[_0x5275aa(0x33f)][_0x5275aa(0x26f)](this,_0x2f3000));}}};