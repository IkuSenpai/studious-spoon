//=============================================================================
// VisuStella MZ - Map Camera Zoom
// VisuMZ_4_MapCameraZoom.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_MapCameraZoom = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MapCameraZoom = VisuMZ.MapCameraZoom || {};
VisuMZ.MapCameraZoom.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.05] [MapCameraZoom]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Map_Camera_Zoom_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin enables the ability to zoom the in-game camera inward and make
 * the visible game area larger and more focused. The camera can also focus on
 * events or specific tiles other than just the player, making it helpful for
 * cutscenes. Easing accessibility also makes the zoom and camera shifts more
 * soft and less rough feeling.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Zoom ability allows the camera to zoom inward and enlarge the focal point.
 * * Auto-zoom notetag allows for the camera to automatically shift when
 *   entering specific maps.
 * * Camera focus function allows the game camera to instantly move over to the
 *   target event or target tile.
 * * Easing accessibility allow for smoothing zooming and camera focus changes
 *   alongside dedicated wait time control.
 * * Wait for Zoom and Wait for Camera Focus plugin commands are available for
 *   more on the go flexibility in eventing.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Caution
 * ============================================================================
 * 
 * When using this plugin, there are things to be cautious about.
 * 
 * ---
 * 
 * Screen Tearing
 * 
 * When using non-whole odd numbers like 1.3, 1.5, and 1.7, the likelihood of
 * there being a "screen tearing" effect for the tilemap or for sprites is
 * greatly increased. This can be avoided by having sprites with a pixel-worth
 * of buffering space or by just simply avoiding to use non-whole odd numbers
 * altogether.
 * 
 * ---
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
 * Cannot Go Under 100%
 * 
 * You can zoom in (aka go above 100% zoom), but you cannot zoom out (aka go
 * under 100% zoom). The reasoning behind this is because of the limitation
 * between PixiJS and WebGL. Going under 100% zoom will break the tilemap and
 * cause large chunks of it to go missing.
 * 
 * This is true even without this plugin installed as you can try to use the
 * innate RPG Maker MZ zoom functions and try to set the zoom scale under 100%.
 * The tileset will immediately start to fall apart.
 *
 * ---
 * 
 * Sprites No Longer Smoothed
 * 
 * When using this plugin, certain resources like on-map character sprites and
 * some tile sprites will have bitmap smoothing removed. The reason for this is
 * due to PixiJS's texture bleeding problem when the sprites are zoomed in. If
 * left alone, this causes an ugly filmy border around the edges of the
 * sprite's dimensions that are otherwise an eye-sore to look at.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_0_CoreEngine
 * 
 * Having the VisuMZ Core Engine installed will enable you to use easing when
 * it comes to zooming and camera panning.
 * 
 * ---
 * 
 * Picture Zooming
 * 
 * If you are NOT using the VisuMZ Core Engine, pictures will be bound to the
 * zoom scale. This is NOT a bug. If you are using pictures in a completely
 * vanilla RPG Maker MZ project without any plugins installed and enter a
 * battle, the battle zoom will also make the pictures zoom in as well.
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
 * === Map-Related Notetags ===
 * 
 * ---
 *
 * <Zoom: x%>
 * <AutoZoom: x%>
 * <Auto Zoom: x%>
 *
 * - Used for: Map Notetags
 * - Causes the game camera to automatically zoom to x% when entering a map
 *   with this notetag.
 *   - This does NOT reverse itself when exiting the map. The zoom settings
 *     will carry over to other maps unless those maps have their own auto-zoom
 *     notetag present.
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
 * - Replace 'x' with a percentage value above 100% to represent the zoom scale
 *   you wish to change to when entering this map.
 *   - 'x' cannot be under 100%! Read the "Cannot Go Under 100%" section for
 *     more information as to why.
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
 * === Camera Plugin Commands ===
 * 
 * ---
 *
 * Camera: Focus Player
 * - Puts the camera focus on the player character.
 *
 *   Duration:
 *   - How many frames should it take to finish focus?
 *   - 60 frames = 1 second.
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Camera: Focus Target Event
 * - Puts the camera focus on target event.
 *
 *   Event ID:
 *   - Insert the ID of the event to focus on.
 *   - Use 0 for this event.
 *   - You may use JavaScript code.
 *
 *   Duration:
 *   - How many frames should it take to finish focus?
 *   - 60 frames = 1 second.
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Camera: Focus Target Tile
 * - Puts the camera focus on target map tile.
 *
 *   Map Tile X:
 *   - What is the X coordinate of the target map tile?
 *   - You may use JavaScript code.
 *
 *   Map Tile Y:
 *   - What is the Y coordinate of the target map tile?
 *   - You may use JavaScript code.
 *
 *   Duration:
 *   - How many frames should it take to finish focus?
 *   - 60 frames = 1 second.
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Camera: Wait for Focus
 * - Waits for camera focus to finish changing before continuing.
 *
 * ---
 * 
 * === Zoom Plugin Commands ===
 * 
 * ---
 *
 * Zoom: Change Zoom
 * - Change the current zoom amount.
 *
 *   Target Zoom Scale:
 *   - What is the target zoom scale?
 *   - 1.0 = 100%; 1.5 = 150%; 2.0 = 200%;
 *   - Cannot go under 1.0!
 *
 *   Duration:
 *   - How many frames should it take to finish zooming?
 *   - 60 frames = 1 second.
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Zoom: Wait for Zoom
 * - Waits for zoom to finish changing before continuing.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings used for the Map Camera Zoom plugin.
 *
 * ---
 *
 * Settings
 * 
 *   Default Zoom:
 *   - What is the default zoom value?
 *   - 1.0 = 100%; 1.5 = 150%; 2.0 = 200%;
 *   - Cannot go under 1.0!
 * 
 *   Adapt Battle Encounter Ani:
 *   - Adapt the battle encounter zoom effect?
 *   - Occurs when entering battle from the map.
 * 
 *   Force Pixelated Map:
 *   - Force the map's tilesets to be rendered in pixelated form regardless of
 *     what other plugins may do.
 *   - This is primarily for pixel art games that would look better with more
 *     pixelated tiles when zoomed in.
 *
 * ---
 * 
 * Compatibility
 * 
 *   Map Lock Adjust:
 *   - Adjusts the Map Lock effect to the map's display position when exiting
 *     menus.
 *   - For VisuMZ_4_VisualParallaxes.
 *   - Best left false unless you know what you're doing.
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
 * * Arisu
 * * Irina
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.05: July 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where screen scrolling and focus didn't work properly. Fix
 *    made by Irina.
 * * Compatibility Update!
 * ** Plugin now works better with Movement Core's smooth scroll.
 * 
 * Version 1.04: April 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > Compatibility > Map Lock Adjust
 * **** Adjusts the Map Lock effect to the map's display position when exiting
 *      menus.
 * **** For VisuMZ_4_VisualParallaxes.
 * **** Best left false unless you know what you're doing.
 * 
 * Version 1.03: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added a new section called "Caution":
 * *** When using non-whole odd numbers like 1.3, 1.5, and 1.7, the likelihood
 *     of there being a "screen tearing" effect for the tilemap or for sprites
 *     is greatly increased. This can be avoided by having sprites with a
 *     pixel-worth of buffering space or by just simply avoiding to use
 *     non-whole odd numbers altogether.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Force Pixelated Map
 * **** Force the map's tilesets to be rendered in pixelated form regardless of
 *      what other plugins may do.
 * **** This is primarily for pixel art games that would look better with more
 *      pixelated tiles when zoomed in.
 * 
 * Version 1.02: July 13, 2023
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.01: March 16, 2023
 * * Compatibility Update
 * ** Better camera zoom with VisuStella MZ Movement Effect's Smooth Scrolling
 *    when this plugin's 'Adapt Battle Encounter Ani' setting is turned off.
 * 
 * Version 1.00 Official Release Date: November 2, 2022
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
 * @command CameraFocusPlayer
 * @text Camera: Focus Player
 * @desc Puts the camera focus on the player character.
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should it take to finish focus?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg EasingType:str
 * @text Easing Type
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
 * Requires VisuMZ_0_CoreEngine!
 * @default InOutSine
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CameraFocusTargetEvent
 * @text Camera: Focus Target Event
 * @desc Puts the camera focus on target event.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the event to focus on.
 * Use 0 for this event. You may use JavaScript code.
 * @default 0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should it take to finish focus?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg EasingType:str
 * @text Easing Type
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
 * Requires VisuMZ_0_CoreEngine!
 * @default InOutSine
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CameraFocusTargetTile
 * @text Camera: Focus Target Tile
 * @desc Puts the camera focus on target map tile.
 *
 * @arg MapX:eval
 * @text Map Tile X
 * @desc What is the X coordinate of the target map tile?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg MapY:eval
 * @text Map Tile Y
 * @desc What is the Y coordinate of the target map tile?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should it take to finish focus?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg EasingType:str
 * @text Easing Type
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
 * Requires VisuMZ_0_CoreEngine!
 * @default InOutSine
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CameraFocusWait
 * @text Camera: Wait for Focus
 * @desc Waits for camera focus to finish changing before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Zoom
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ZoomChange
 * @text Zoom: Change Zoom
 * @desc Change the current zoom amount.
 *
 * @arg TargetScale:num
 * @text Target Zoom Scale
 * @desc What is the target zoom scale?
 * 1.0 = 100%; 1.5 = 150%; 2.0 = 200%; Cannot go under 1.0!
 * @default 1.0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should it take to finish zooming?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg EasingType:str
 * @text Easing Type
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
 * Requires VisuMZ_0_CoreEngine!
 * @default InOutSine
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ZoomWait
 * @text Zoom: Wait for Zoom
 * @desc Waits for zoom to finish changing before continuing.
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
 * @param MapCameraZoom
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param DefaultZoom:num
 * @text Default Zoom
 * @desc What is the default zoom value?
 * 1.0 = 100%; 1.5 = 150%; 2.0 = 200%; Cannot go under 1.0!
 * @default 1.0
 *
 * @param AdaptBattleEncZoom:eval
 * @text Adapt Battle Encounter Ani
 * @parent Animation
 * @type boolean
 * @on Adapt
 * @off Unchanged
 * @desc Adapt the battle encounter zoom effect?
 * Occurs when entering battle from the map.
 * @default true
 *
 * @param ForcePixelatedMap:eval
 * @text Force Pixelated Map
 * @parent Animation
 * @type boolean
 * @on Force
 * @off Don't Force
 * @desc Force the map's tilesets to be rendered in pixelated form
 * regardless of what other plugins may do.
 * @default false
 * 
 * @param Compatibility
 * @text Compatability Parameters
 *
 * @param VisualParallaxAdjust:eval
 * @text Map Lock Adjust
 * @parent Compatibility
 * @type boolean
 * @on Adjust
 * @off Don't Adjust
 * @desc Adjusts the Map Lock effect to the map's display position
 * when exiting menus. For VisuMZ_4_VisualParallaxes.
 * @default false
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
//=============================================================================

const _0x13b46a=_0x54e1;(function(_0x381b09,_0x41aaa6){const _0x57aa79=_0x54e1,_0x434ea8=_0x381b09();while(!![]){try{const _0x2c8664=parseInt(_0x57aa79(0x1ab))/0x1+-parseInt(_0x57aa79(0x137))/0x2*(-parseInt(_0x57aa79(0x170))/0x3)+-parseInt(_0x57aa79(0x1b7))/0x4*(-parseInt(_0x57aa79(0x139))/0x5)+-parseInt(_0x57aa79(0x167))/0x6*(parseInt(_0x57aa79(0x1a3))/0x7)+parseInt(_0x57aa79(0x114))/0x8+parseInt(_0x57aa79(0x19d))/0x9*(parseInt(_0x57aa79(0x100))/0xa)+parseInt(_0x57aa79(0x18e))/0xb*(-parseInt(_0x57aa79(0x1b9))/0xc);if(_0x2c8664===_0x41aaa6)break;else _0x434ea8['push'](_0x434ea8['shift']());}catch(_0x12d804){_0x434ea8['push'](_0x434ea8['shift']());}}}(_0x536d,0x4ade0));var label=_0x13b46a(0x127),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x13b46a(0x194)](function(_0x573c6e){const _0x1d26e2=_0x13b46a;return _0x573c6e[_0x1d26e2(0x12d)]&&_0x573c6e[_0x1d26e2(0x1b5)]['includes']('['+label+']');})[0x0];function _0x536d(){const _0xf53696=['_mapCameraParallaxUpdates','MAP_ZOOM_ENTER_BATTLE_ADAPT','clearTransferInfo','onUpdateMapZoomEnd','isChangingMapCameraFocusTargets','updateMapZoomPosition','canvasToMapY','MapCameraZoom','ImageManager_loadSystem','wholeDuration','ConvertParams','tileFocus','_displayY','status','getVisualParallaxes','exit','DefaultZoom','tileHeight','Game_Map_parallaxOx','setMapCameraFocusToPlayer','prototype','isSmoothCameraEnabled','ZoomWait','2dlBJWR','tileCoordinates','21215BmtWRr','parameters','scrolledX','setupMapCameraSettings','updateEncounterEffect','isSceneMap','Game_Screen_setZoom','onUpdateMapCameraFocusEnd','setMapCameraFocusToEvent','Scene_Map_start','xScrollLinkedOffset','duration','tileWidth','match','constructor','mapCameraSettings','setBattleEncounterZoom','ARRAYEVAL','RegExp','setMapCameraFocusToTile','screenTileX','STR','scrolledY','NUM','STRUCT','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ImageManager_loadCharacter','startMapZoom','Game_Screen_initialize','Settings','_scene','Game_Player_updateScroll','setCurrentCameraFocusTile','mapZoomEnterBattleSettings','CameraFocusTargetTile','setWaitMode','AutoZoom','FUNC','updateWaitMode','EVAL','roundX','NEAREST','isPreviousScene','ARRAYFUNC','targetScale','_mapEnterBattleZoom','3596358MKGruL','Game_Map_updateParallax','Zoom\x20cannot\x20go\x20under\x20100%.','parse','zoomScale','JSON','Linear','eventId','mod','1713027npjsQd','DEFAULT_MAP_ZOOM_SCALE','resize','scale','TargetScale','allowExtendMapZoom','setup','parallaxOy','AdaptBattleEncZoom','Game_Interpreter_updateWaitMode','updateScrollSmoothCamera','mapZoomSettings','CameraFocusPlayer','mapCameraFocus','easingType','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','setDisplayPosMapCameraZoom','ZoomChange','Game_Map_screenTileX','ARRAYNUM','updateMapCameraCenteredParallax','loadSystem','updateMapCameraFocusSmooth','trim','_realY','Game_Map_setup','Renderer','Sprite_AnimationMV_updatePosition','_mapZoomEnterBattle','scaleMode','165oGgmaQ','centerX','setupMapZoomSettings','MAX_GL_TEXTURES','Game_Screen_zoomScale','_parallaxZero','filter','note','currentCamera','ARRAYSTRUCT','Game_Player_clearTransferInfo','call','updateParallax','Game_System_isSmoothCameraEnabled','_mapZoomSettings','396FeMZJd','height','_waitMode','Game_Interpreter_PluginCommand','_parallaxY','VisuMZ_2_FurnitureSystem','7FqLSYB','_lastPluginCommandInterpreter','isInAirship','playerFocus','_displayX','Layer','clamp','mapZoom','170161sVeeMc','setLastPluginCommandInterpreter','EasingType','CameraFocusTargetEvent','ApplyEasing','isNextScene','_parallaxX','MapX','loadTileset','updateMapScrollLinkedCenteredParallax','description','canSmoothScroll','392PkJEKJ','_visualParallaxSettings','914076VnsnRV','MapY','ARRAYSTR','width','_realX','centerY','map','updatePosition','setZoom','Duration','parent','parallaxOx','setupMapCameraZoom','event','updateMapCameraFocus','command357','MIN_ZOOM','updateMapZoom','Game_Event_update','_doodadEditorMode','isLoopVertical','eventTargetID','update','_mapCameraSettings','91030bQruoi','isPlaytest','isMapCameraFocusTarget','ForcePixelatedMap','floor','start','getLastPluginCommandInterpreter','applyEasing','mapCameraFocusTarget','canvasToMapX','format','Game_Screen_updateZoom','shouldCenterMapCameraZoom','max','setupMapCameraZoomNotetags','updateZoom','initialize','eventFocus','_animation','registerCommand','3929024ANhEXi','MovementEffects','screenTileY','Game_Map_parallaxOy','updateScroll','centerMapCameraZoom','roundY','name','smooth','return\x200','Game_Map_screenTileY','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'];_0x536d=function(){return _0xf53696;};return _0x536d();}VisuMZ[label][_0x13b46a(0x156)]=VisuMZ[label][_0x13b46a(0x156)]||{},VisuMZ[_0x13b46a(0x12a)]=function(_0xb77f82,_0x9f5a5d){const _0x562804=_0x13b46a;for(const _0xc4a1f5 in _0x9f5a5d){if(_0xc4a1f5['match'](/(.*):(.*)/i)){const _0xb2f19c=String(RegExp['$1']),_0x460fcc=String(RegExp['$2'])['toUpperCase']()[_0x562804(0x187)]();let _0x5afaea,_0x41ce07,_0x29f697;switch(_0x460fcc){case _0x562804(0x150):_0x5afaea=_0x9f5a5d[_0xc4a1f5]!==''?Number(_0x9f5a5d[_0xc4a1f5]):0x0;break;case _0x562804(0x183):_0x41ce07=_0x9f5a5d[_0xc4a1f5]!==''?JSON[_0x562804(0x16a)](_0x9f5a5d[_0xc4a1f5]):[],_0x5afaea=_0x41ce07['map'](_0x58e053=>Number(_0x58e053));break;case _0x562804(0x160):_0x5afaea=_0x9f5a5d[_0xc4a1f5]!==''?eval(_0x9f5a5d[_0xc4a1f5]):null;break;case _0x562804(0x14a):_0x41ce07=_0x9f5a5d[_0xc4a1f5]!==''?JSON[_0x562804(0x16a)](_0x9f5a5d[_0xc4a1f5]):[],_0x5afaea=_0x41ce07[_0x562804(0x1bf)](_0xe8b0a8=>eval(_0xe8b0a8));break;case _0x562804(0x16c):_0x5afaea=_0x9f5a5d[_0xc4a1f5]!==''?JSON[_0x562804(0x16a)](_0x9f5a5d[_0xc4a1f5]):'';break;case'ARRAYJSON':_0x41ce07=_0x9f5a5d[_0xc4a1f5]!==''?JSON[_0x562804(0x16a)](_0x9f5a5d[_0xc4a1f5]):[],_0x5afaea=_0x41ce07[_0x562804(0x1bf)](_0x3eb65f=>JSON[_0x562804(0x16a)](_0x3eb65f));break;case _0x562804(0x15e):_0x5afaea=_0x9f5a5d[_0xc4a1f5]!==''?new Function(JSON[_0x562804(0x16a)](_0x9f5a5d[_0xc4a1f5])):new Function(_0x562804(0x11d));break;case _0x562804(0x164):_0x41ce07=_0x9f5a5d[_0xc4a1f5]!==''?JSON[_0x562804(0x16a)](_0x9f5a5d[_0xc4a1f5]):[],_0x5afaea=_0x41ce07[_0x562804(0x1bf)](_0x5cbd4c=>new Function(JSON[_0x562804(0x16a)](_0x5cbd4c)));break;case _0x562804(0x14e):_0x5afaea=_0x9f5a5d[_0xc4a1f5]!==''?String(_0x9f5a5d[_0xc4a1f5]):'';break;case _0x562804(0x1bb):_0x41ce07=_0x9f5a5d[_0xc4a1f5]!==''?JSON[_0x562804(0x16a)](_0x9f5a5d[_0xc4a1f5]):[],_0x5afaea=_0x41ce07[_0x562804(0x1bf)](_0x48351c=>String(_0x48351c));break;case _0x562804(0x151):_0x29f697=_0x9f5a5d[_0xc4a1f5]!==''?JSON[_0x562804(0x16a)](_0x9f5a5d[_0xc4a1f5]):{},_0x5afaea=VisuMZ['ConvertParams']({},_0x29f697);break;case _0x562804(0x197):_0x41ce07=_0x9f5a5d[_0xc4a1f5]!==''?JSON[_0x562804(0x16a)](_0x9f5a5d[_0xc4a1f5]):[],_0x5afaea=_0x41ce07[_0x562804(0x1bf)](_0x5185b6=>VisuMZ[_0x562804(0x12a)]({},JSON[_0x562804(0x16a)](_0x5185b6)));break;default:continue;}_0xb77f82[_0xb2f19c]=_0x5afaea;}}return _0xb77f82;},(_0x5654e6=>{const _0x512fbd=_0x13b46a,_0x142add=_0x5654e6[_0x512fbd(0x11b)];for(const _0x37880f of dependencies){if(!Imported[_0x37880f]){alert(_0x512fbd(0x17f)[_0x512fbd(0x10a)](_0x142add,_0x37880f)),SceneManager[_0x512fbd(0x12f)]();break;}}const _0x5e6943=_0x5654e6[_0x512fbd(0x1b5)];if(_0x5e6943['match'](/\[Version[ ](.*?)\]/i)){const _0x4425bd=Number(RegExp['$1']);_0x4425bd!==VisuMZ[label]['version']&&(alert(_0x512fbd(0x152)[_0x512fbd(0x10a)](_0x142add,_0x4425bd)),SceneManager[_0x512fbd(0x12f)]());}if(_0x5e6943[_0x512fbd(0x146)](/\[Tier[ ](\d+)\]/i)){const _0x27a353=Number(RegExp['$1']);_0x27a353<tier?(alert(_0x512fbd(0x11f)[_0x512fbd(0x10a)](_0x142add,_0x27a353,tier)),SceneManager['exit']()):tier=Math[_0x512fbd(0x10d)](_0x27a353,tier);}VisuMZ[_0x512fbd(0x12a)](VisuMZ[label]['Settings'],_0x5654e6[_0x512fbd(0x13a)]);})(pluginData),PluginManager[_0x13b46a(0x113)](pluginData['name'],_0x13b46a(0x17c),_0x346101=>{const _0x38c5ec=_0x13b46a;if(!SceneManager[_0x38c5ec(0x13e)]())return;if($gamePlayer['isMapCameraFocusTarget']())return;VisuMZ[_0x38c5ec(0x12a)](_0x346101,_0x346101);const _0x1ece74=_0x346101['Duration']||0x1,_0x1e0939=_0x346101[_0x38c5ec(0x1ad)]||_0x38c5ec(0x16d);$gameScreen[_0x38c5ec(0x133)](_0x1ece74,_0x1e0939);}),PluginManager[_0x13b46a(0x113)](pluginData['name'],_0x13b46a(0x1ae),_0x30ae36=>{const _0x436e5f=_0x13b46a;if(!SceneManager[_0x436e5f(0x13e)]())return;VisuMZ[_0x436e5f(0x12a)](_0x30ae36,_0x30ae36);const _0x1ded75=$gameTemp[_0x436e5f(0x106)](),_0x1272b7=_0x30ae36['EventID']||_0x1ded75[_0x436e5f(0x16e)](),_0x4ffacd=$gameMap[_0x436e5f(0x1c6)](_0x1272b7),_0x113630=_0x30ae36[_0x436e5f(0x1c2)]||0x1,_0x35fe1b=_0x30ae36[_0x436e5f(0x1ad)]||_0x436e5f(0x16d);if(!_0x4ffacd)return;$gameScreen[_0x436e5f(0x141)](_0x1272b7,_0x113630,_0x35fe1b);}),PluginManager[_0x13b46a(0x113)](pluginData[_0x13b46a(0x11b)],_0x13b46a(0x15b),_0x24b824=>{const _0x26a2a9=_0x13b46a;if(!SceneManager['isSceneMap']())return;VisuMZ['ConvertParams'](_0x24b824,_0x24b824);const _0x5a2044=_0x24b824[_0x26a2a9(0x1b2)][_0x26a2a9(0x1a9)](0x0,$gameMap[_0x26a2a9(0x1bc)]()-0x1),_0x14883f=_0x24b824[_0x26a2a9(0x1ba)][_0x26a2a9(0x1a9)](0x0,$gameMap[_0x26a2a9(0x19e)]()-0x1),_0x5385ab=_0x24b824[_0x26a2a9(0x1c2)]||0x1,_0x5c8a41=_0x24b824['EasingType']||'Linear';$gameScreen['setMapCameraFocusToTile'](_0x5a2044,_0x14883f,_0x5385ab,_0x5c8a41);}),PluginManager[_0x13b46a(0x113)](pluginData[_0x13b46a(0x11b)],'CameraFocusWait',_0x4f0d32=>{const _0x4dd455=_0x13b46a;if(!SceneManager[_0x4dd455(0x13e)]())return;const _0x1fcbbf=$gameTemp['getLastPluginCommandInterpreter']();_0x1fcbbf[_0x4dd455(0x15c)](_0x4dd455(0x17d));}),PluginManager['registerCommand'](pluginData[_0x13b46a(0x11b)],_0x13b46a(0x181),_0x3f2196=>{const _0x438f14=_0x13b46a;if(!SceneManager[_0x438f14(0x13e)]())return;VisuMZ[_0x438f14(0x12a)](_0x3f2196,_0x3f2196);let _0x164181=_0x3f2196[_0x438f14(0x174)];_0x164181<Game_Screen[_0x438f14(0x1c9)]&&$gameTemp['isPlaytest']()&&(alert(_0x438f14(0x169)),_0x164181=Game_Screen['MIN_ZOOM']);const _0x564339=_0x3f2196[_0x438f14(0x1c2)]||0x1,_0x48b543=_0x3f2196['EasingType']||_0x438f14(0x16d);$gameScreen[_0x438f14(0x154)](_0x164181,_0x564339,_0x48b543);}),PluginManager[_0x13b46a(0x113)](pluginData[_0x13b46a(0x11b)],_0x13b46a(0x136),_0x2e617f=>{const _0x3bef7a=_0x13b46a;if(!SceneManager['isSceneMap']())return;const _0xbb5768=$gameTemp[_0x3bef7a(0x106)]();_0xbb5768['setWaitMode'](_0x3bef7a(0x1aa));}),VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x14b)]={'AutoZoom':/<(?:ZOOM|AUTO ZOOM|AUTOZOOM):[ ](\d+)([%％])>/i},VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x153)]=ImageManager['loadCharacter'],ImageManager['loadCharacter']=function(_0xa4bd5a){const _0x300976=_0x13b46a,_0xbc0fb3=VisuMZ[_0x300976(0x127)][_0x300976(0x153)][_0x300976(0x199)](this,_0xa4bd5a);return _0xbc0fb3[_0x300976(0x11c)]=![],_0xbc0fb3;},VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x128)]=ImageManager[_0x13b46a(0x185)],ImageManager[_0x13b46a(0x185)]=function(_0x51bcb4){const _0x5d7b4a=_0x13b46a,_0x388eaf=VisuMZ['MapCameraZoom'][_0x5d7b4a(0x128)][_0x5d7b4a(0x199)](this,_0x51bcb4);if(_0x51bcb4==='IconSet')_0x388eaf[_0x5d7b4a(0x11c)]=![];return _0x388eaf;},VisuMZ[_0x13b46a(0x127)]['ImageManager_loadTileset']=ImageManager[_0x13b46a(0x1b3)],ImageManager[_0x13b46a(0x1b3)]=function(_0x483ef2){const _0x1e685a=_0x13b46a,_0x52e233=VisuMZ[_0x1e685a(0x127)]['ImageManager_loadTileset']['call'](this,_0x483ef2);return _0x52e233[_0x1e685a(0x11c)]=![],_0x52e233;},SceneManager[_0x13b46a(0x13e)]=function(){const _0x57ab5e=_0x13b46a;return this['_scene']&&this[_0x57ab5e(0x157)][_0x57ab5e(0x147)]===Scene_Map;},Game_Temp['prototype'][_0x13b46a(0x1ac)]=function(_0x476189){const _0x37f832=_0x13b46a;this[_0x37f832(0x1a4)]=_0x476189;},Game_Temp[_0x13b46a(0x134)][_0x13b46a(0x106)]=function(){const _0x3be93f=_0x13b46a;return this[_0x3be93f(0x1a4)];},VisuMZ[_0x13b46a(0x127)]['Game_Interpreter_PluginCommand']=Game_Interpreter[_0x13b46a(0x134)][_0x13b46a(0x1c8)],Game_Interpreter[_0x13b46a(0x134)][_0x13b46a(0x1c8)]=function(_0x4c19d4){const _0x23711c=_0x13b46a;return $gameTemp[_0x23711c(0x1ac)](this),VisuMZ['MapCameraZoom'][_0x23711c(0x1a0)][_0x23711c(0x199)](this,_0x4c19d4);},Game_Screen[_0x13b46a(0x1c9)]=0x1,Game_Screen[_0x13b46a(0x171)]=Math[_0x13b46a(0x10d)](Game_Screen[_0x13b46a(0x1c9)],VisuMZ[_0x13b46a(0x127)]['Settings'][_0x13b46a(0x130)]||0x1),VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x155)]=Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x110)],Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x110)]=function(){const _0x26a6d5=_0x13b46a;VisuMZ['MapCameraZoom'][_0x26a6d5(0x155)]['call'](this),this[_0x26a6d5(0x1c5)]();},Game_Screen[_0x13b46a(0x134)]['setupMapCameraZoom']=function(){const _0x3f5675=_0x13b46a;this[_0x3f5675(0x190)](),this['setupMapCameraSettings']();},Game_Screen['prototype'][_0x13b46a(0x119)]=function(_0x2abc49){const _0x146525=_0x13b46a,_0x545018=this['mapCameraFocusTarget']();$gameMap['centerMapCameraZoom'](_0x545018['_realX'],_0x545018[_0x146525(0x188)],_0x2abc49);},VisuMZ[_0x13b46a(0x127)]['Game_Screen_updateZoom']=Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x10f)],Game_Screen['prototype'][_0x13b46a(0x10f)]=function(){const _0x4927f0=_0x13b46a;VisuMZ['MapCameraZoom'][_0x4927f0(0x10b)][_0x4927f0(0x199)](this),this[_0x4927f0(0x1ca)](),this[_0x4927f0(0x1c7)]();},Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x190)]=function(){const _0x37d5ef=_0x13b46a;this[_0x37d5ef(0x19c)]={'scale':Game_Screen['DEFAULT_MAP_ZOOM_SCALE'],'targetScale':Game_Screen[_0x37d5ef(0x171)],'duration':0x0,'wholeDuration':0x0,'easingType':_0x37d5ef(0x16d)},this[_0x37d5ef(0x166)]={'scale':0x1,'targetScale':0x1,'duration':0x0,'wholeDuration':0x0,'easingType':_0x37d5ef(0x16d)};},Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x17b)]=function(){const _0x2c2d6d=_0x13b46a;if(this[_0x2c2d6d(0x19c)]===undefined)this['setupMapZoomSettings']();return this[_0x2c2d6d(0x19c)];},Game_Screen['prototype'][_0x13b46a(0x15a)]=function(){const _0x43e564=_0x13b46a;if(this['_mapEnterBattleZoom']===undefined)this['setupMapZoomSettings']();return this[_0x43e564(0x166)];},Game_Screen[_0x13b46a(0x134)]['startMapZoom']=function(_0xb6e19a,_0x54914d,_0x291c73){const _0x21b58e=_0x13b46a,_0x27994e=this[_0x21b58e(0x17b)]();if(_0x27994e[_0x21b58e(0x165)]===_0xb6e19a)return;_0x27994e['targetScale']=_0xb6e19a,_0x27994e[_0x21b58e(0x144)]=_0x54914d||0x1,_0x27994e[_0x21b58e(0x129)]=_0x54914d||0x1,_0x27994e[_0x21b58e(0x17e)]=_0x291c73;},VisuMZ[_0x13b46a(0x127)]['Game_Screen_zoomScale']=Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x16b)],Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x16b)]=function(){const _0x53f924=_0x13b46a;let _0x20747a=VisuMZ[_0x53f924(0x127)][_0x53f924(0x192)][_0x53f924(0x199)](this);if(!this['allowExtendMapZoom']())return _0x20747a;return SceneManager['isSceneMap']()&&(_0x20747a*=Math[_0x53f924(0x10d)](this['mapZoomSettings']()[_0x53f924(0x173)],Game_Screen[_0x53f924(0x1c9)]),_0x20747a*=Math[_0x53f924(0x10d)](this['mapZoomEnterBattleSettings']()[_0x53f924(0x173)],Game_Screen[_0x53f924(0x1c9)])),_0x20747a;},Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x175)]=function(){const _0x8d4c54=_0x13b46a;if(!SceneManager['isSceneMap']())return![];if($gameTemp[_0x8d4c54(0x1cc)])return![];if(Imported[_0x8d4c54(0x1a2)]&&$gameMap['isFurnitureSystemMode']())return![];return!![];},Game_Screen['prototype'][_0x13b46a(0x1ca)]=function(){const _0x76f82f=_0x13b46a,_0x13e191=this['mapZoomSettings']();if(_0x13e191[_0x76f82f(0x144)]<=0x0)return;const _0xf38867=_0x13e191[_0x76f82f(0x144)],_0xc5eb11=_0x13e191[_0x76f82f(0x129)],_0x2e910b=_0x13e191['easingType']||'Linear',_0x58bf52=_0x13e191[_0x76f82f(0x173)],_0x3d3dbe=_0x13e191[_0x76f82f(0x165)];_0x13e191['scale']=VisuMZ[_0x76f82f(0x127)][_0x76f82f(0x107)](_0x58bf52,_0x3d3dbe,_0xf38867,_0xc5eb11,_0x2e910b),this[_0x76f82f(0x119)](!![]),_0x13e191[_0x76f82f(0x144)]--,_0x13e191[_0x76f82f(0x144)]<=0x0&&this[_0x76f82f(0x123)]();},Game_Screen[_0x13b46a(0x134)]['onUpdateMapZoomEnd']=function(){const _0x3b60ea=_0x13b46a,_0xef9e31=this[_0x3b60ea(0x17b)]();_0xef9e31[_0x3b60ea(0x173)]=_0xef9e31[_0x3b60ea(0x165)];},VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x107)]=function(_0x29d1d7,_0x4fa68d,_0x8a676e,_0x365cd8,_0xbb77e0){const _0x170f33=_0x13b46a,_0xc04aee=VisuMZ[_0x170f33(0x1af)]((_0x365cd8-_0x8a676e)/_0x365cd8,_0xbb77e0||_0x170f33(0x16d)),_0x1f7f71=VisuMZ[_0x170f33(0x1af)]((_0x365cd8-_0x8a676e+0x1)/_0x365cd8,_0xbb77e0||_0x170f33(0x16d)),_0x213403=(_0x29d1d7-_0x4fa68d*_0xc04aee)/(0x1-_0xc04aee);return _0x213403+(_0x4fa68d-_0x213403)*_0x1f7f71;};!VisuMZ[_0x13b46a(0x1af)]&&(VisuMZ[_0x13b46a(0x1af)]=function(_0x1b088a,_0x2f3b9c){return _0x1b088a;});function _0x54e1(_0x4c8020,_0x5d65c1){const _0x536dc5=_0x536d();return _0x54e1=function(_0x54e1a8,_0x5b5911){_0x54e1a8=_0x54e1a8-0xfc;let _0x1c799b=_0x536dc5[_0x54e1a8];return _0x1c799b;},_0x54e1(_0x4c8020,_0x5d65c1);};Game_Screen['prototype'][_0x13b46a(0x13c)]=function(){const _0x3a9e7d=_0x13b46a;this[_0x3a9e7d(0xff)]={'playerFocus':!![],'eventFocus':![],'eventTargetID':0x0,'tileFocus':![],'tileCoordinates':{'_realX':0x0,'_realY':0x0},'duration':0x0,'wholeDuration':0x0,'easingType':_0x3a9e7d(0x16d),'currentCamera':{'_realX':0x0,'_realY':0x0}};},Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x148)]=function(){const _0x3eeee0=_0x13b46a;if(this[_0x3eeee0(0xff)]===undefined)this[_0x3eeee0(0x13c)]();return this[_0x3eeee0(0xff)];},Game_Screen['prototype'][_0x13b46a(0x108)]=function(_0x498890){const _0x4f1ecf=_0x13b46a,_0x13e465=this[_0x4f1ecf(0x148)]();if(!_0x498890&&_0x13e465[_0x4f1ecf(0x144)]>0x0)return _0x13e465[_0x4f1ecf(0x196)];else{if(_0x13e465['playerFocus'])return $gamePlayer;else{if(_0x13e465[_0x4f1ecf(0x111)])return $gameMap[_0x4f1ecf(0x1c6)](_0x13e465[_0x4f1ecf(0xfd)])||$gamePlayer;else{if(_0x13e465[_0x4f1ecf(0x12b)])return _0x13e465[_0x4f1ecf(0x138)];}}}return $gamePlayer;},Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x124)]=function(){const _0x1b2781=_0x13b46a;return this[_0x1b2781(0x108)]()===this[_0x1b2781(0x148)]()[_0x1b2781(0x196)];},Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x159)]=function(_0x2f090f,_0x5df4b5){const _0x29f350=_0x13b46a,_0xd0571d=this[_0x29f350(0x148)](),_0xe10129=this[_0x29f350(0x108)]();_0xd0571d[_0x29f350(0x196)][_0x29f350(0x1bd)]=_0xe10129[_0x29f350(0x1bd)],_0xd0571d[_0x29f350(0x196)][_0x29f350(0x188)]=_0xe10129[_0x29f350(0x188)],_0xd0571d[_0x29f350(0x144)]=_0x2f090f||0x1,_0xd0571d['wholeDuration']=_0x2f090f||0x1,_0xd0571d[_0x29f350(0x17e)]=_0x5df4b5||_0x29f350(0x16d);},Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x133)]=function(_0x4b9c31,_0x51c7b0){const _0x399f1f=_0x13b46a,_0x224567=this['mapCameraSettings']();if($gamePlayer[_0x399f1f(0x102)]())return;this[_0x399f1f(0x159)](_0x4b9c31,_0x51c7b0),_0x224567[_0x399f1f(0x1a6)]=!![],_0x224567[_0x399f1f(0x111)]=![],_0x224567[_0x399f1f(0x12b)]=![];const _0xb5f253=_0x224567['tileCoordinates'];_0xb5f253[_0x399f1f(0x1bd)]=-0x1,_0xb5f253[_0x399f1f(0x188)]=-0x1;},Game_Screen[_0x13b46a(0x134)]['setMapCameraFocusToEvent']=function(_0x104660,_0x46d136,_0x171a6c){const _0x420edf=_0x13b46a,_0x5b408e=$gameMap[_0x420edf(0x1c6)](_0x104660);if(!_0x5b408e)return;const _0x3fafa8=this[_0x420edf(0x148)]();if(_0x5b408e[_0x420edf(0x102)]())return;this[_0x420edf(0x159)](_0x46d136,_0x171a6c),_0x3fafa8[_0x420edf(0x1a6)]=![],_0x3fafa8[_0x420edf(0x111)]=!![],_0x3fafa8[_0x420edf(0x12b)]=![],_0x3fafa8[_0x420edf(0xfd)]=_0x104660;const _0x1c5d41=_0x3fafa8['tileCoordinates'];_0x1c5d41[_0x420edf(0x1bd)]=-0x1,_0x1c5d41[_0x420edf(0x188)]=-0x1;},Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x14c)]=function(_0x3b3b58,_0x4bc069,_0x37e1e1,_0x33f26e){const _0x56c6da=_0x13b46a,_0x4a4ab0=this['mapCameraSettings'](),_0x381c2b=_0x4a4ab0['tileCoordinates'];if(_0x381c2b['_realX']===_0x3b3b58&&_0x381c2b['_realY']===_0x4bc069)return;this[_0x56c6da(0x159)](_0x37e1e1,_0x33f26e),_0x4a4ab0[_0x56c6da(0x1a6)]=![],_0x4a4ab0[_0x56c6da(0x111)]=![],_0x4a4ab0[_0x56c6da(0x12b)]=!![],_0x4a4ab0[_0x56c6da(0x138)][_0x56c6da(0x1bd)]=_0x3b3b58,_0x4a4ab0[_0x56c6da(0x138)][_0x56c6da(0x188)]=_0x4bc069;},Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x1c7)]=function(){const _0xcb7034=_0x13b46a,_0x5829a9=this['mapCameraSettings']();if(_0x5829a9['duration']<=0x0)return;const _0xb33a8b=_0x5829a9[_0xcb7034(0x144)],_0x94c94e=_0x5829a9[_0xcb7034(0x129)],_0x44d9a1=_0x5829a9[_0xcb7034(0x17e)]||'Linear',_0x4c6324=_0x5829a9[_0xcb7034(0x196)],_0x221cb1=this[_0xcb7034(0x108)](!![]),_0x1e363b=$gameMap['_displayX'],_0x1677bd=$gameMap[_0xcb7034(0x12c)];_0x4c6324['_realX']=VisuMZ[_0xcb7034(0x127)]['applyEasing'](_0x4c6324[_0xcb7034(0x1bd)],_0x221cb1[_0xcb7034(0x1bd)],_0xb33a8b,_0x94c94e,_0x44d9a1),_0x4c6324[_0xcb7034(0x188)]=VisuMZ['MapCameraZoom'][_0xcb7034(0x107)](_0x4c6324[_0xcb7034(0x188)],_0x221cb1[_0xcb7034(0x188)],_0xb33a8b,_0x94c94e,_0x44d9a1),this[_0xcb7034(0x119)](!![]);if(this['updateMapCameraFocusSmooth']()){const _0x566b02=$gameMap['_displayX'],_0x1d6932=$gameMap[_0xcb7034(0x12c)];$gameMap['_displayX']=VisuMZ[_0xcb7034(0x127)][_0xcb7034(0x107)](_0x1e363b,_0x566b02,_0xb33a8b,_0x94c94e,_0x44d9a1),$gameMap[_0xcb7034(0x12c)]=VisuMZ[_0xcb7034(0x127)]['applyEasing'](_0x1677bd,_0x1d6932,_0xb33a8b,_0x94c94e,_0x44d9a1);}_0x5829a9['duration']--,_0x5829a9[_0xcb7034(0x144)]<=0x0&&this['onUpdateMapCameraFocusEnd']();},Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x186)]=function(){const _0x372a0e=_0x13b46a;return![];if(!Imported['VisuMZ_2_MovementEffects'])return![];if(!$gamePlayer[_0x372a0e(0x1b6)]())return![];const _0x4b3706=this[_0x372a0e(0x148)](),_0x4914e8=_0x4b3706[_0x372a0e(0x144)],_0x113357=_0x4b3706[_0x372a0e(0x129)];return _0x4914e8>_0x113357;},Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x140)]=function(){const _0x163bd7=_0x13b46a,_0x1eb957=this[_0x163bd7(0x148)](),_0x1b6192=_0x1eb957[_0x163bd7(0x196)],_0x5b477c=this[_0x163bd7(0x108)](!![]);_0x1b6192['_realX']=_0x5b477c[_0x163bd7(0x1bd)],_0x1b6192[_0x163bd7(0x188)]=_0x5b477c[_0x163bd7(0x188)];},Game_Picture[_0x13b46a(0x134)][_0x13b46a(0x143)]=function(){const _0x306a40=_0x13b46a,_0x359cb9=$gameMap['displayX']()*$gameMap[_0x306a40(0x145)]();return(this['_x']-_0x359cb9)*$gameScreen[_0x306a40(0x16b)]();},Game_Picture['prototype']['yScrollLinkedOffset']=function(){const _0x3aa895=_0x13b46a,_0x33216b=$gameMap['displayY']()*$gameMap[_0x3aa895(0x131)]();return(this['_y']-_0x33216b)*$gameScreen[_0x3aa895(0x16b)]();},VisuMZ[_0x13b46a(0x127)]['Game_Map_setup']=Game_Map[_0x13b46a(0x134)][_0x13b46a(0x176)],Game_Map[_0x13b46a(0x134)][_0x13b46a(0x176)]=function(_0x102509){const _0x58a7ba=_0x13b46a;VisuMZ['MapCameraZoom'][_0x58a7ba(0x189)]['call'](this,_0x102509),this[_0x58a7ba(0x10e)](),this[_0x58a7ba(0x120)]=0x0;},Game_Map[_0x13b46a(0x134)][_0x13b46a(0x10e)]=function(){const _0x50fe3d=_0x13b46a,_0x299b34=VisuMZ['MapCameraZoom']['RegExp'],_0x4dd4da=$dataMap?$dataMap[_0x50fe3d(0x195)]||'':'';if(_0x4dd4da['match'](_0x299b34[_0x50fe3d(0x15d)])){let _0xd25f6b=Number(RegExp['$1'])*0.01;_0xd25f6b<0x1&&$gameTemp[_0x50fe3d(0x101)]()&&alert(_0x50fe3d(0x169)),_0xd25f6b=Math[_0x50fe3d(0x10d)](Game_Screen[_0x50fe3d(0x1c9)],_0xd25f6b),$gameScreen[_0x50fe3d(0x17b)]()[_0x50fe3d(0x173)]=_0xd25f6b,$gameScreen[_0x50fe3d(0x17b)]()['targetScale']=_0xd25f6b,$gameScreen[_0x50fe3d(0x17b)]()[_0x50fe3d(0x144)]=0x0;}$gameScreen[_0x50fe3d(0x119)]();},Game_Map[_0x13b46a(0x134)]['centerMapCameraZoom']=function(_0x3b2b1e,_0x53b1fd,_0x302722){const _0x5d3046=_0x13b46a;_0x3b2b1e-=$gamePlayer[_0x5d3046(0x18f)](),_0x53b1fd-=$gamePlayer[_0x5d3046(0x1be)](),_0x302722&&this['setDisplayPosMapCameraZoom'](_0x3b2b1e,_0x53b1fd),this[_0x5d3046(0x184)](_0x3b2b1e,_0x53b1fd),this[_0x5d3046(0x1b4)](_0x3b2b1e,_0x53b1fd);},Game_Map[_0x13b46a(0x134)][_0x13b46a(0x180)]=function(_0x2ccb42,_0x5dc303){const _0x40fb06=_0x13b46a;if(this['isLoopHorizontal']())this[_0x40fb06(0x1a7)]=_0x2ccb42[_0x40fb06(0x16f)](this[_0x40fb06(0x1bc)]()),this[_0x40fb06(0x1b1)]=_0x2ccb42;else{const _0x37bf17=this[_0x40fb06(0x1bc)]()-this['screenTileX']();this[_0x40fb06(0x1a7)]=_0x37bf17<0x0?_0x37bf17/0x2:_0x2ccb42['clamp'](0x0,_0x37bf17),this[_0x40fb06(0x1b1)]=this['_displayX'];}if(this[_0x40fb06(0xfc)]())this[_0x40fb06(0x12c)]=_0x5dc303[_0x40fb06(0x16f)](this[_0x40fb06(0x19e)]()),this[_0x40fb06(0x1a1)]=_0x5dc303;else{const _0x47083b=this['height']()-this[_0x40fb06(0x116)]();this[_0x40fb06(0x12c)]=_0x47083b<0x0?_0x47083b/0x2:_0x5dc303[_0x40fb06(0x1a9)](0x0,_0x47083b),this[_0x40fb06(0x1a1)]=this[_0x40fb06(0x12c)];}},Game_Map['prototype'][_0x13b46a(0x184)]=function(_0x335ead,_0x1edbe5){const _0x50bf08=_0x13b46a,_0x1dd9d6=this['_mapCameraParallaxUpdates']||0x0;if(_0x1dd9d6<=0x0)return;this['_parallaxLoopX']&&(this['_parallaxX']+=this['_parallaxSx']/this['tileWidth']()/0x2*_0x1dd9d6),this['_parallaxLoopY']&&(this['_parallaxY']+=this['_parallaxSy']/this[_0x50bf08(0x131)]()/0x2*_0x1dd9d6);},Game_Map[_0x13b46a(0x134)][_0x13b46a(0x1b4)]=function(_0x58d354,_0xf7ffc4){const _0x492d2e=_0x13b46a,_0x5aed65=VisuMZ['MapCameraZoom'][_0x492d2e(0x156)];if(Imported['VisuMZ_4_VisualParallaxes']&&_0x5aed65['VisualParallaxAdjust']){this[_0x492d2e(0x1b8)]=this[_0x492d2e(0x1b8)]||[];for(const _0x2ce84b of this[_0x492d2e(0x12e)]()){if(!_0x2ce84b)continue;_0x2ce84b[_0x492d2e(0x193)]&&(_0x2ce84b[_0x492d2e(0x1b1)]=this[_0x492d2e(0x1a7)],_0x2ce84b[_0x492d2e(0x1a1)]=this[_0x492d2e(0x12c)]);}}},VisuMZ[_0x13b46a(0x127)]['Game_Map_updateParallax']=Game_Map[_0x13b46a(0x134)]['updateParallax'],Game_Map[_0x13b46a(0x134)][_0x13b46a(0x19a)]=function(){const _0x447c3e=_0x13b46a;VisuMZ[_0x447c3e(0x127)][_0x447c3e(0x168)]['call'](this),this[_0x447c3e(0x120)]=this[_0x447c3e(0x120)]||0x0,this[_0x447c3e(0x120)]++;},VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x132)]=Game_Map['prototype'][_0x13b46a(0x1c4)],Game_Map[_0x13b46a(0x134)][_0x13b46a(0x1c4)]=function(){const _0xd4614c=_0x13b46a;let _0x32b5f9=VisuMZ[_0xd4614c(0x127)][_0xd4614c(0x132)][_0xd4614c(0x199)](this);if(this[_0xd4614c(0x193)])_0x32b5f9=Math['floor'](_0x32b5f9);return _0x32b5f9;},VisuMZ[_0x13b46a(0x127)]['Game_Map_parallaxOy']=Game_Map[_0x13b46a(0x134)]['parallaxOy'],Game_Map[_0x13b46a(0x134)][_0x13b46a(0x177)]=function(){const _0x215d2f=_0x13b46a;let _0x40ce9c=VisuMZ['MapCameraZoom'][_0x215d2f(0x117)][_0x215d2f(0x199)](this);if(this['_parallaxZero'])_0x40ce9c=Math[_0x215d2f(0x104)](_0x40ce9c);return _0x40ce9c;},Game_Map['prototype'][_0x13b46a(0x109)]=function(_0x286dbb){const _0x3e0b46=_0x13b46a,_0x265b60=this['tileWidth']()*$gameScreen[_0x3e0b46(0x16b)](),_0x4a9cdc=this[_0x3e0b46(0x1a7)]*_0x265b60,_0x4ce6ac=Math['floor']((_0x4a9cdc+_0x286dbb)/_0x265b60);return this[_0x3e0b46(0x161)](_0x4ce6ac);},Game_Map[_0x13b46a(0x134)][_0x13b46a(0x126)]=function(_0x36d318){const _0x3d55d1=_0x13b46a,_0x951c6d=this[_0x3d55d1(0x131)]()*$gameScreen['zoomScale'](),_0x5771e7=this[_0x3d55d1(0x12c)]*_0x951c6d,_0x22f86d=Math[_0x3d55d1(0x104)]((_0x5771e7+_0x36d318)/_0x951c6d);return this[_0x3d55d1(0x11a)](_0x22f86d);},VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x182)]=Game_Map[_0x13b46a(0x134)][_0x13b46a(0x14d)],Game_Map['prototype']['screenTileX']=function(){const _0x1228d6=_0x13b46a,_0xf2638e=VisuMZ['MapCameraZoom'][_0x1228d6(0x182)][_0x1228d6(0x199)](this);return _0xf2638e/$gameScreen['zoomScale']();},VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x11e)]=Game_Map[_0x13b46a(0x134)][_0x13b46a(0x116)],Game_Map[_0x13b46a(0x134)][_0x13b46a(0x116)]=function(){const _0x3095fd=_0x13b46a,_0x5d5f3c=VisuMZ['MapCameraZoom'][_0x3095fd(0x11e)][_0x3095fd(0x199)](this);return _0x5d5f3c/$gameScreen['zoomScale']();},Game_CharacterBase[_0x13b46a(0x134)][_0x13b46a(0x102)]=function(){const _0x3b9f58=_0x13b46a;return $gameScreen[_0x3b9f58(0x108)]()===this;},VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x198)]=Game_Player[_0x13b46a(0x134)][_0x13b46a(0x122)],Game_Player['prototype']['clearTransferInfo']=function(){const _0x3958a0=_0x13b46a;VisuMZ[_0x3958a0(0x127)]['Game_Player_clearTransferInfo'][_0x3958a0(0x199)](this),$gameScreen['setMapCameraFocusToPlayer'](0x1,'Linear'),$gameScreen[_0x3958a0(0x119)]();},VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x158)]=Game_Player['prototype']['updateScroll'],Game_Player['prototype'][_0x13b46a(0x118)]=function(_0x2c8d15,_0x1f2ed1){const _0x34366d=_0x13b46a;if(!this[_0x34366d(0x102)]())return;VisuMZ[_0x34366d(0x127)]['Game_Player_updateScroll'][_0x34366d(0x199)](this,_0x2c8d15,_0x1f2ed1);},Game_Event[_0x13b46a(0x134)][_0x13b46a(0x18f)]=function(){const _0x1de3b0=_0x13b46a;return Game_Player[_0x1de3b0(0x134)]['centerX'][_0x1de3b0(0x199)](this);},Game_Event['prototype'][_0x13b46a(0x1be)]=function(){const _0x326623=_0x13b46a;return Game_Player[_0x326623(0x134)]['centerY'][_0x326623(0x199)](this);},VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x1cb)]=Game_Event[_0x13b46a(0x134)]['update'],Game_Event[_0x13b46a(0x134)][_0x13b46a(0xfe)]=function(){const _0x4507d5=_0x13b46a,_0x143e6e=this[_0x4507d5(0x13b)](),_0xfa647d=this[_0x4507d5(0x14f)]();VisuMZ[_0x4507d5(0x127)]['Game_Event_update'][_0x4507d5(0x199)](this);if(!this[_0x4507d5(0x102)]())return;this[_0x4507d5(0x118)](_0x143e6e,_0xfa647d);},Game_Event[_0x13b46a(0x134)][_0x13b46a(0x118)]=function(_0x2a24f0,_0x51164d){const _0x104b02=_0x13b46a;return Game_Player[_0x104b02(0x134)][_0x104b02(0x118)][_0x104b02(0x199)](this,_0x2a24f0,_0x51164d);},Game_Event[_0x13b46a(0x134)][_0x13b46a(0x1b6)]=function(){const _0x28ace7=_0x13b46a;try{return Game_Player[_0x28ace7(0x134)][_0x28ace7(0x1b6)]['call'](this);}catch(_0x4f165b){return![];}},Game_Event['prototype'][_0x13b46a(0x17a)]=function(_0x89eda4,_0x2e26da){const _0x3762a8=_0x13b46a;try{Game_Player[_0x3762a8(0x134)][_0x3762a8(0x17a)][_0x3762a8(0x199)](this,_0x89eda4,_0x2e26da);}catch(_0x394c00){VisuMZ[_0x3762a8(0x115)]['Game_Player_updateScroll'][_0x3762a8(0x199)](this,_0x89eda4,_0x2e26da);}},Game_Event[_0x13b46a(0x134)][_0x13b46a(0x1a5)]=function(){return![];},VisuMZ['MapCameraZoom'][_0x13b46a(0x179)]=Game_Interpreter[_0x13b46a(0x134)][_0x13b46a(0x15f)],Game_Interpreter[_0x13b46a(0x134)][_0x13b46a(0x15f)]=function(){const _0x35c52c=_0x13b46a;if(this[_0x35c52c(0x19f)]===_0x35c52c(0x17d)){if($gameScreen[_0x35c52c(0x148)]()[_0x35c52c(0x144)]>0x0)return!![];this['_waitMode']='';}else{if(this[_0x35c52c(0x19f)]===_0x35c52c(0x1aa)){if($gameScreen[_0x35c52c(0x17b)]()[_0x35c52c(0x144)]>0x0)return!![];this['_waitMode']='';}}return VisuMZ[_0x35c52c(0x127)][_0x35c52c(0x179)][_0x35c52c(0x199)](this);},Scene_Map['MAP_ZOOM_ENTER_BATTLE_ADAPT']=VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x156)][_0x13b46a(0x178)],VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x142)]=Scene_Map[_0x13b46a(0x134)][_0x13b46a(0x105)],Scene_Map[_0x13b46a(0x134)][_0x13b46a(0x105)]=function(){const _0x4dac18=_0x13b46a;VisuMZ[_0x4dac18(0x127)][_0x4dac18(0x142)][_0x4dac18(0x199)](this);if(Scene_Map[_0x4dac18(0x121)]){$gameScreen[_0x4dac18(0x15a)]()['scale']=0x1;const _0x2d0bc1=this[_0x4dac18(0x10c)]();$gameScreen[_0x4dac18(0x119)](_0x2d0bc1);}},Scene_Map[_0x13b46a(0x134)][_0x13b46a(0x10c)]=function(){const _0x40259c=_0x13b46a;if(SceneManager['isPreviousScene'](Scene_Menu))return![];if(SceneManager[_0x40259c(0x163)](Scene_Boot))return![];return!![];},VisuMZ[_0x13b46a(0x127)]['Scene_Map_updateEncounterEffect']=Scene_Map[_0x13b46a(0x134)]['updateEncounterEffect'],Scene_Map['prototype'][_0x13b46a(0x13d)]=function(){const _0x56ed43=_0x13b46a;$gameTemp[_0x56ed43(0x18c)]=Scene_Map['MAP_ZOOM_ENTER_BATTLE_ADAPT'],VisuMZ[_0x56ed43(0x127)]['Scene_Map_updateEncounterEffect'][_0x56ed43(0x199)](this),$gameTemp[_0x56ed43(0x18c)]=undefined;},VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x13f)]=Game_Screen['prototype'][_0x13b46a(0x1c1)],Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x1c1)]=function(_0x172dcb,_0x6561c2,_0x52a3df){const _0x5b425c=_0x13b46a;$gameTemp[_0x5b425c(0x18c)]?this[_0x5b425c(0x149)](_0x52a3df):VisuMZ[_0x5b425c(0x127)]['Game_Screen_setZoom']['call'](this,_0x172dcb,_0x6561c2,_0x52a3df);},Game_Screen[_0x13b46a(0x134)][_0x13b46a(0x149)]=function(_0x58876c){const _0x3ffffb=_0x13b46a;this[_0x3ffffb(0x15a)]()[_0x3ffffb(0x173)]=_0x58876c;let _0x47eb1c=!![];if(Imported['VisuMZ_4_EncounterEffects']&&VisuMZ['EncounterEffects']['version']>=1.11){}this['centerMapCameraZoom'](_0x47eb1c);},VisuMZ['MapCameraZoom'][_0x13b46a(0x19b)]=Game_System[_0x13b46a(0x134)]['isSmoothCameraEnabled'],Game_System['prototype'][_0x13b46a(0x135)]=function(){const _0x208401=_0x13b46a;if(!Scene_Map[_0x208401(0x121)]&&SceneManager[_0x208401(0x1b0)](Scene_Battle))return![];return VisuMZ[_0x208401(0x127)][_0x208401(0x19b)][_0x208401(0x199)](this);},VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x18b)]=Sprite_AnimationMV[_0x13b46a(0x134)]['updatePosition'],Sprite_AnimationMV[_0x13b46a(0x134)][_0x13b46a(0x1c0)]=function(){const _0x466af7=_0x13b46a;SceneManager[_0x466af7(0x13e)]()&&this[_0x466af7(0x112)]['position']===0x3?this['updateMapZoomPosition']():VisuMZ[_0x466af7(0x127)][_0x466af7(0x18b)][_0x466af7(0x199)](this);},Sprite_AnimationMV['prototype'][_0x13b46a(0x125)]=function(){const _0x55bba4=_0x13b46a,_0x1ffe13=SceneManager[_0x55bba4(0x157)]['_spriteset'],_0x27d6bc=$gameScreen[_0x55bba4(0x16b)](),_0x10e094=0.5/_0x27d6bc,_0x7d17e0=-_0x1ffe13['x']/_0x27d6bc,_0x5deef8=-_0x1ffe13['y']/_0x27d6bc;this['x']=this[_0x55bba4(0x1c3)][_0x55bba4(0x1bc)]*_0x10e094+_0x7d17e0,this['y']=this[_0x55bba4(0x1c3)][_0x55bba4(0x19e)]*_0x10e094+_0x5deef8;};(VisuMZ[_0x13b46a(0x127)][_0x13b46a(0x156)][_0x13b46a(0x103)]??!![])&&(Tilemap[_0x13b46a(0x18a)][_0x13b46a(0x134)]['_createInternalTextures']=function(){const _0x2cdb31=_0x13b46a;this['_destroyInternalTextures']();for(let _0x56f604=0x0;_0x56f604<Tilemap[_0x2cdb31(0x1a8)][_0x2cdb31(0x191)];_0x56f604++){const _0x1d8357=new PIXI['BaseRenderTexture']();_0x1d8357[_0x2cdb31(0x172)](0x800,0x800),_0x1d8357[_0x2cdb31(0x18d)]=PIXI['SCALE_MODES'][_0x2cdb31(0x162)],this['_internalTextures']['push'](_0x1d8357);}});;