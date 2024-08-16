//=============================================================================
// VisuStella MZ - Action Sequence Camera
// VisuMZ_3_ActSeqCamera.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ActSeqCamera = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ActSeqCamera = VisuMZ.ActSeqCamera || {};
VisuMZ.ActSeqCamera.version = 1.13;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.13] [ActSeqCamera]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Action_Sequence_Camera_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds new Action Sequences functions to the VisuStella MZ
 * Battle Core plugin to give you, the game dev, control over the battle camera
 * and zoom functions.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Attach the camera to a specific point on the screen.
 * * Attach the camera to a specific target(s) on the screen.
 * * Pan the camera to be off center using the offset functions.
 * * Remove camera clamping to let the camera go out of bounds.
 * * Set the camera zoom level as you want.
 * * Tilt the camera by adjust the angle.
 * * New Options added to let the player turn on/off the battle camera.
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
 * - VisuMZ_0_CoreEngine
 * - VisuMZ_1_BattleCore
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Spriteset Position Rewrite
 *
 * - The Spriteset_Battle function for updatePosition needed to be rewritten in
 * order to allow all the new features and functions added by the battle camera
 * and zoom.
 * 
 * - Camera tricks like zooming, panning, and tilting will be reset during the
 * input phase to ensure the player is able to see the whole battlefield.
 * 
 * - The player has the option to turn off the battle camera effects. If they
 * choose to turn it off, then all of this plugin's effects will be disabled
 * until they turn it back on. This is to give players control over how the
 * game visually appears in case they have motion sickness.
 *
 * ---
 *
 * ============================================================================
 * Action Sequence - Plugin Commands
 * ============================================================================
 *
 * The following are Action Sequence Plugin Commands that have been added with
 * this plugin. These are accessible from the Battle Core plugin (not this one)
 * in order to keep all the Action Sequences in place.
 * 
 * Once again, these plugin commands are only accessible through the Battle
 * Core plugin and not this one! Make sure you have the most update to date
 * version of the Battle Core for them.
 *
 * ---
 * 
 * === Action Sequences - Angle (Camera) ===
 * 
 * These action sequences allow you to have control over the camera angle.
 * 
 * ---
 *
 * ANGLE: Change Angle
 * - Changes the camera angle.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Angle:
 *   - Change the camera angle to this many degrees.
 *
 *   Duration:
 *   - Duration in frames to change camera angle.
 *
 *   Angle Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Angle?:
 *   - Wait for angle changes to complete before performing next command?
 *
 * ---
 *
 * ANGLE: Reset Angle
 * - Reset any angle settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Duration:
 *   - Duration in frames to reset camera angle.
 *
 *   Angle Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Angle?:
 *   - Wait for angle changes to complete before performing next command?
 *
 * ---
 *
 * ANGLE: Wait For Angle
 * - Waits for angle changes to complete before performing next command.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 *
 * === Action Sequences - Camera Control ===
 *
 * These Action Sequences are battle camera-related.
 *
 * ---
 *
 * CAMERA: Clamp ON/OFF
 * - Turns battle camera clamping on/off.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Setting:
 *   - Turns camera clamping on/off.
 *
 * ---
 *
 * CAMERA: Focus Point
 * - Focus the battle camera on a certain point in the screen.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   X Coordinate:
 *   - Insert the point to focus the camera on.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Insert the point to focus the camera on.
 *   - You may use JavaScript code.
 *
 *   Duration:
 *   - Duration in frames for camera focus change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Focus Target(s)
 * - Focus the battle camera on certain battler target(s).
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Targets:
 *   - Select unit(s) to focus the battle camera on.
 *
 *   Duration:
 *   - Duration in frames for camera focus change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Offset
 * - Offset the battle camera from the focus target.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Offset X:
 *   - How much to offset the camera X by.
 *   - Negative: left. Positive: right.
 *
 *   Offset Y:
 *   - How much to offset the camera Y by.
 *   - Negative: up. Positive: down.
 *
 *   Duration:
 *   - Duration in frames for offset change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Reset
 * - Reset the battle camera settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Reset Focus?:
 *   - Reset the focus point?
 *
 *   Reset Offset?:
 *   - Reset the camera offset?
 *
 *   Duration:
 *   - Duration in frames for reset change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Wait For Camera
 * - Waits for camera changes to complete before performing next command.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 * 
 * === Action Sequences - Skew (Camera) ===
 * 
 * These action sequences allow you to have control over the camera skew.
 * 
 * ---
 *
 * SKEW: Change Skew
 * - Changes the camera skew.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Skew X:
 *   - Change the camera skew X to this value.
 *
 *   Skew Y:
 *   - Change the camera skew Y to this value.
 *
 *   Duration:
 *   - Duration in frames to change camera skew.
 *
 *   Skew Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Skew?:
 *   - Wait for skew changes to complete before performing next command?
 *
 * ---
 *
 * SKEW: Reset Skew
 * - Reset any skew settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Duration:
 *   - Duration in frames to reset camera skew.
 *
 *   Skew Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Skew?:
 *   - Wait for skew changes to complete before performing next command?
 *
 * ---
 *
 * SKEW: Wait For Skew
 * - Waits for skew changes to complete before performing next command.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 *
 * === Action Sequences - Zoom (Camera) ===
 *
 * These Action Sequences are zoom-related.
 *
 * ---
 *
 * ZOOM: Change Scale
 * - Changes the zoom scale.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Scale:
 *   - The zoom scale to change to.
 *
 *   Duration:
 *   - Duration in frames to reset battle zoom.
 *
 *   Zoom Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Zoom?
 *   - Wait for zoom changes to complete before performing next command?
 *
 * ---
 *
 * ZOOM: Reset Zoom
 * - Reset any zoom settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Duration:
 *   - Duration in frames to reset battle zoom.
 *
 *   Zoom Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Zoom?
 *   - Wait for zoom changes to complete before performing next command?
 *
 * ---
 *
 * ZOOM: Wait For Zoom
 * - Waits for zoom changes to complete before performing next command.
 * Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Menu Settings
 * ============================================================================
 *
 * These plugin parameters add a new options command in order to let the player
 * decide if they want the battle camera ON or OFF.
 * 
 * The player has the option to turn off the battle camera effects. If they
 * choose to turn it off, then all of this plugin's effects will be disabled
 * until they turn it back on. This is to give players control over how the
 * game visually appears in case they have motion sickness.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the Battle Camera options to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Options Name:
 *   - Command name of the option.
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
 * Version 1.13: March 14, 2024
 * * Updated Features!
 * ** Anti-tint is no longer forced. Update made by Irina.
 * 
 * Version 1.12: August 17, 2023
 * * Compatibility Update!
 * ** Added better compatibility with Action Sequence Projectiles when using MV
 *    animations for projectiles. Update made by Arisu.
 * 
 * Version 1.11: February 16, 2023
 * * Feature Update!
 * ** Added VisuMZ Core Engine version requirements for this plugin. If you are
 *    using an outdated Core Engine by at least 50 versions, this plugin will
 *    not work. Update made by Irina.
 * 
 * Version 1.10: January 20, 2023
 * * Bug Fixes!
 * ** Corrected the battlefield offset when positioned in specific zoom
 *    levels that would otherwise offset the algorithm. Fix made by Olivia.
 * ** Corrected and updated Anti-Tint UI animation offsets for MV animations.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Update made to be more compatibile with MZ v1.6.1's Effekseer version.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.09: September 22, 2022
 * * Bug Fixes!
 * ** Camera shift fixed when moving from a different scene aside from the map
 *    to battle. Fix made by Olivia.
 * 
 * Version 1.08: May 19, 2022
 * * Compatibility Update
 * ** Camera has a different Y buffer when using VisuMZ Sideview Battle UI.
 *    Update made by Olivia.
 * * Feature Update!
 * ** Smoother clamped zooming from 1.0 to 1.999. Update made by Olivia.
 * 
 * Version 1.07: April 21, 2022
 * * Feature Update!
 * ** Rebuild the animation container for Battle Core's Anti-Tint UI so that it
 *    works properly with MV animations and zoom in sideview. Update by Irina.
 * 
 * Version 1.06: April 14, 2022
 * * Compatibility Update!
 * ** Compatibility update with Anti-Tint UI feature in combination with MV-
 *    MV-related animations for non-sideview actors. Update made by Irina.
 * 
 * Version 1.05: April 7, 2022
 * * Compatibility Update!
 * ** Compatibility update with Anti-Tint UI feature in combination with zoom
 *    for MV-related animations. Update made by Irina.
 * 
 * Version 1.04: March 31, 2022
 * * Compatibility Update!
 * ** Compatibility update with Battle Core's new Anti-Tint UI feature for
 *    MV-related animations. Update made by Irina.
 * 
 * Version 1.03: January 6, 2022
 * * Compatibility Update!
 * ** The newly added MV Animation-support should now work properly with the
 *    Action Sequence Camera plugin. Update made by Irina.
 * 
 * Version 1.02: December 4, 2020
 * * Bug Fixes!
 * ** Show Pictures should now appear in the right positions. Fix by Irina.
 * 
 * Version 1.01: October 4, 2020
 * * Bug Fixes!
 * ** Damage offsets are now corrected and in line with the latest Battle Core
 *    version.
 *
 * Version 1.00: September 23, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ActSeqCamera
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Options:struct
 * @text Options Menu
 * @type struct<Options>
 * @desc Settings for the Options Menu
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","OptionsName:str":"Battle Camera"}
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
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the Battle Camera options to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param OptionsName:str
 * @text Options Name
 * @parent Options
 * @desc Command name of the option.
 * @default Battle Camera
 *
 */
//=============================================================================

const _0x20fb1c=_0x5ca4;(function(_0x22bb10,_0x53aa4a){const _0x5005d9=_0x5ca4,_0x161119=_0x22bb10();while(!![]){try{const _0x5975b5=parseInt(_0x5005d9(0x10d))/0x1*(-parseInt(_0x5005d9(0xd8))/0x2)+parseInt(_0x5005d9(0xa8))/0x3*(-parseInt(_0x5005d9(0xfd))/0x4)+-parseInt(_0x5005d9(0x156))/0x5*(parseInt(_0x5005d9(0xbf))/0x6)+parseInt(_0x5005d9(0xcc))/0x7*(-parseInt(_0x5005d9(0x128))/0x8)+-parseInt(_0x5005d9(0xd2))/0x9+parseInt(_0x5005d9(0x98))/0xa*(-parseInt(_0x5005d9(0x91))/0xb)+parseInt(_0x5005d9(0x123))/0xc*(parseInt(_0x5005d9(0xd3))/0xd);if(_0x5975b5===_0x53aa4a)break;else _0x161119['push'](_0x161119['shift']());}catch(_0x68ef00){_0x161119['push'](_0x161119['shift']());}}}(_0x444b,0x7a182));var label='ActSeqCamera',tier=tier||0x0,dependencies=[_0x20fb1c(0x94),_0x20fb1c(0xbe)],pluginData=$plugins[_0x20fb1c(0x13e)](function(_0x15133d){const _0x286153=_0x20fb1c;return _0x15133d[_0x286153(0xf8)]&&_0x15133d['description'][_0x286153(0x15b)]('['+label+']');})[0x0];function _0x5ca4(_0x51028c,_0xf6195d){const _0x444bfa=_0x444b();return _0x5ca4=function(_0x5ca4e9,_0x2340e0){_0x5ca4e9=_0x5ca4e9-0x8d;let _0x3384f2=_0x444bfa[_0x5ca4e9];return _0x3384f2;},_0x5ca4(_0x51028c,_0xf6195d);}VisuMZ[label][_0x20fb1c(0x101)]=VisuMZ[label][_0x20fb1c(0x101)]||{},VisuMZ[_0x20fb1c(0xb2)]=function(_0x1de226,_0xb2f0bf){const _0x423a7e=_0x20fb1c;for(const _0x19f718 in _0xb2f0bf){if(_0x423a7e(0x144)!==_0x423a7e(0xf6)){if(_0x19f718[_0x423a7e(0x131)](/(.*):(.*)/i)){const _0x40b6bd=String(RegExp['$1']),_0x2c5907=String(RegExp['$2'])[_0x423a7e(0xb9)]()['trim']();let _0x3d4159,_0x267a96,_0x50b951;switch(_0x2c5907){case _0x423a7e(0x162):_0x3d4159=_0xb2f0bf[_0x19f718]!==''?Number(_0xb2f0bf[_0x19f718]):0x0;break;case _0x423a7e(0x122):_0x267a96=_0xb2f0bf[_0x19f718]!==''?JSON[_0x423a7e(0xa0)](_0xb2f0bf[_0x19f718]):[],_0x3d4159=_0x267a96['map'](_0x2dafb6=>Number(_0x2dafb6));break;case _0x423a7e(0x107):_0x3d4159=_0xb2f0bf[_0x19f718]!==''?eval(_0xb2f0bf[_0x19f718]):null;break;case _0x423a7e(0xf1):_0x267a96=_0xb2f0bf[_0x19f718]!==''?JSON['parse'](_0xb2f0bf[_0x19f718]):[],_0x3d4159=_0x267a96[_0x423a7e(0x14b)](_0x40e075=>eval(_0x40e075));break;case _0x423a7e(0x102):_0x3d4159=_0xb2f0bf[_0x19f718]!==''?JSON['parse'](_0xb2f0bf[_0x19f718]):'';break;case'ARRAYJSON':_0x267a96=_0xb2f0bf[_0x19f718]!==''?JSON[_0x423a7e(0xa0)](_0xb2f0bf[_0x19f718]):[],_0x3d4159=_0x267a96[_0x423a7e(0x14b)](_0x541012=>JSON[_0x423a7e(0xa0)](_0x541012));break;case _0x423a7e(0x10a):_0x3d4159=_0xb2f0bf[_0x19f718]!==''?new Function(JSON[_0x423a7e(0xa0)](_0xb2f0bf[_0x19f718])):new Function('return\x200');break;case _0x423a7e(0xdc):_0x267a96=_0xb2f0bf[_0x19f718]!==''?JSON['parse'](_0xb2f0bf[_0x19f718]):[],_0x3d4159=_0x267a96[_0x423a7e(0x14b)](_0x52ae3e=>new Function(JSON['parse'](_0x52ae3e)));break;case _0x423a7e(0xba):_0x3d4159=_0xb2f0bf[_0x19f718]!==''?String(_0xb2f0bf[_0x19f718]):'';break;case'ARRAYSTR':_0x267a96=_0xb2f0bf[_0x19f718]!==''?JSON['parse'](_0xb2f0bf[_0x19f718]):[],_0x3d4159=_0x267a96['map'](_0x42c0cd=>String(_0x42c0cd));break;case _0x423a7e(0xca):_0x50b951=_0xb2f0bf[_0x19f718]!==''?JSON[_0x423a7e(0xa0)](_0xb2f0bf[_0x19f718]):{},_0x3d4159=VisuMZ[_0x423a7e(0xb2)]({},_0x50b951);break;case _0x423a7e(0x129):_0x267a96=_0xb2f0bf[_0x19f718]!==''?JSON[_0x423a7e(0xa0)](_0xb2f0bf[_0x19f718]):[],_0x3d4159=_0x267a96[_0x423a7e(0x14b)](_0x3057f4=>VisuMZ[_0x423a7e(0xb2)]({},JSON['parse'](_0x3057f4)));break;default:continue;}_0x1de226[_0x40b6bd]=_0x3d4159;}}else _0x77725e[_0x423a7e(0xb8)][_0x423a7e(0x132)][_0x423a7e(0xd5)](this,_0x1d1a33,_0xac6c86,_0x59140b),this[_0x423a7e(0xc7)]();}return _0x1de226;},(_0x52f46e=>{const _0x26406f=_0x20fb1c,_0x4da9a7=_0x52f46e[_0x26406f(0x104)];for(const _0xd57b06 of dependencies){if(!Imported[_0xd57b06]){alert(_0x26406f(0xe6)[_0x26406f(0x105)](_0x4da9a7,_0xd57b06)),SceneManager[_0x26406f(0xb5)]();break;}}const _0x165a72=_0x52f46e['description'];if(_0x165a72[_0x26406f(0x131)](/\[Version[ ](.*?)\]/i)){if(_0x26406f(0xa2)===_0x26406f(0xa2)){const _0xd7f2e0=Number(RegExp['$1']);if(_0xd7f2e0!==VisuMZ[label]['version']){if(_0x26406f(0xa3)!=='CWHQD')alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x26406f(0x105)](_0x4da9a7,_0xd7f2e0)),SceneManager[_0x26406f(0xb5)]();else return this['_animation']['position']===0x3;}}else this[_0x26406f(0x108)]();}if(_0x165a72[_0x26406f(0x131)](/\[Tier[ ](\d+)\]/i)){const _0x12f4db=Number(RegExp['$1']);_0x12f4db<tier?(alert(_0x26406f(0x142)[_0x26406f(0x105)](_0x4da9a7,_0x12f4db,tier)),SceneManager[_0x26406f(0xb5)]()):tier=Math[_0x26406f(0xc0)](_0x12f4db,tier);}VisuMZ[_0x26406f(0xb2)](VisuMZ[label][_0x26406f(0x101)],_0x52f46e[_0x26406f(0x115)]);})(pluginData);function _0x444b(){const _0x123256=['battleFieldOffsetY','cameraFocusTargets','forSideviewTargets','gdUzA','InOutSine','cameraXTarget','vJytq','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_battleFieldCameraY','updateBattleCameraOffset','cameraX','skewX','_baseSprite','Ssqbt','cameraFocusTargetsY','cameraOffsetEasing','zoomScale','update','ARRAYEVAL','ApplyEasing','cameraOffsetDuration','zoomDuration','addCommand','kUzhB','_scene','status','Sprite_AnimationMV_updatePosition','ConfigManager_applyData','updatePositionCameraRoamOld','cameraOffsetDurationWhole','610756YErUpH','boxHeight','UHKcR','skewEasing','Settings','JSON','initialBattleCameraSettings','name','format','cameraOffsetYTarget','EVAL','addBattleCameraCommand','position','FUNC','applyData','battleFieldCameraY','612665lbzhPl','skewTargetY','BattleCore','Spriteset_Battle_createLowerLayer','updateEffectGeometry','getBattleAngle','advanced','battleCameraData','parameters','cameraOffsetX','TCjqG','zoomEasing','_animation','cameraOffsetY','getBattleCameraClamp','damageOffsetY','applyEasing','WkaMr','screenWidth','VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20','cameraDuration','ARRAYNUM','4572ImxpJI','battleCamera','_spriteset','addGeneralOptions','dsecW','256DWckeh','ARRAYSTRUCT','updatePositionCamera','Options','boxWidth','updatePosition','indexOf','scale','log','match','BattleManager_setup','_battleCamera','isSideView','angleEasing','setup','updateBattleAngle','_damageContainer','clear','zoomWholeDuration','angleDuration','setBattleAngle','_oldCamera','filter','updatePositionCameraRoamNew','Game_Screen_update','cameraYTarget','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','setCameraFocusTargets','HPkWr','in\x20order\x20for\x20VisuMZ_3_ActSeqCamera\x20to\x20work.','damageOffsetX','round','gjniF','cameraEasing','width','map','updatePositionZoom','battleCameraOption','updatePositionAngle','KkekB','angle','UmENV','isSceneBattle','cameraOffsetXTarget','setBattleSkew','isCenteredAnimation','313825qNdPsN','GjxUj','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','cameraDurationWhole','updateBattleSkew','includes','skewWholeDuration','Spriteset_Battle_initialize','isUsingSideviewUiLayout','isInputting','reduce','prototype','NUM','version','Sprite_Animation_updateEffectGeometry','battler','updatePositionCoreEngine','push','1121263WENGUO','setBattleCameraOffset','anchor','VisuMZ_0_CoreEngine','updateBattleCamera','VisuMZ_3_SideviewBattleUI','windowAreaHeight','10KMcGrO','_targets','skew','getBattleZoom','angleWholeDuration','Game_Screen_clear','_cacheScaleY','cameraFocusTarget','parse','YEsmV','PITGH','UdTqn','cameraY','constructor','height','cameraClamp','3mSgUKA','Scene_Options_maxCommands','clearBattleCamera','FqJOn','xQKkx','_battleField','ZDOjm','ceil','screenHeight','createLowerLayer','ConvertParams','Sprite_Battler_damageOffsetX','sqrt','exit','skewTargetX','FEBLa','ActSeqCamera','toUpperCase','STR','CoreEngine','makeData','rEiLI','VisuMZ_1_BattleCore','6TCNoCR','max','addBattleCameraCommands','skewY','kEXSJ','skewDuration','_animationContainer','zoomScaleTarget','clearCameraFocusTargets','INJyX','ConfigManager_makeData','STRUCT','length','77651FvKFuX','clamp','Linear','_cameraFocusTargets','min','cameraFocusTargetsX','7175628zCpWJg','88114IdSMfX','AddOption','call','maxCommands','OptionsName','2DHKsAX','uHABG','angleTarget','OJLmY','ARRAYFUNC','updatePositionSkew','initialize'];_0x444b=function(){return _0x123256;};return _0x444b();}if(VisuMZ[_0x20fb1c(0xbb)][_0x20fb1c(0x163)]<1.73){let text='';text+=_0x20fb1c(0x120),text+=_0x20fb1c(0x145),alert(text),SceneManager[_0x20fb1c(0xb5)]();}if(VisuMZ[_0x20fb1c(0x10f)]['version']<1.81){let text='';text+='VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20',text+='in\x20order\x20for\x20VisuMZ_3_ActSeqCamera\x20to\x20work.',alert(text),SceneManager['exit']();}ConfigManager[_0x20fb1c(0x124)]=!![],VisuMZ[_0x20fb1c(0xb8)][_0x20fb1c(0xc9)]=ConfigManager[_0x20fb1c(0xbc)],ConfigManager['makeData']=function(){const _0x232525=_0x20fb1c,_0x27ca55=VisuMZ['ActSeqCamera'][_0x232525(0xc9)][_0x232525(0xd5)](this);return _0x27ca55['battleCamera']=this[_0x232525(0x124)],_0x27ca55;},VisuMZ['ActSeqCamera']['ConfigManager_applyData']=ConfigManager[_0x20fb1c(0x10b)],ConfigManager[_0x20fb1c(0x10b)]=function(_0x5099b8){const _0x14a850=_0x20fb1c;VisuMZ[_0x14a850(0xb8)][_0x14a850(0xfa)][_0x14a850(0xd5)](this,_0x5099b8),_0x14a850(0x124)in _0x5099b8?'nnNHE'!==_0x14a850(0xbd)?this['battleCamera']=_0x5099b8[_0x14a850(0x124)]:this[_0x14a850(0x13f)]():_0x14a850(0xe2)!==_0x14a850(0xc3)?this[_0x14a850(0x124)]=!![]:this[_0x14a850(0x124)]=_0x3620e1[_0x14a850(0x124)];},TextManager[_0x20fb1c(0x14d)]=VisuMZ['ActSeqCamera'][_0x20fb1c(0x101)]['Options'][_0x20fb1c(0xd7)],VisuMZ[_0x20fb1c(0xb8)]['BattleManager_setup']=BattleManager[_0x20fb1c(0x136)],BattleManager[_0x20fb1c(0x136)]=function(_0x56957f,_0x28ab24,_0x712b6f){const _0x376f1b=_0x20fb1c;VisuMZ[_0x376f1b(0xb8)][_0x376f1b(0x132)][_0x376f1b(0xd5)](this,_0x56957f,_0x28ab24,_0x712b6f),this[_0x376f1b(0xc7)]();},BattleManager[_0x20fb1c(0xc7)]=function(){const _0xacc7b=_0x20fb1c;this[_0xacc7b(0xcf)]=[];},BattleManager[_0x20fb1c(0xe0)]=function(){const _0x157b2e=_0x20fb1c;if(this['_cameraFocusTargets']===undefined)this['clearCameraFocusTargets']();return this[_0x157b2e(0xcf)];},BattleManager[_0x20fb1c(0x143)]=function(_0x459c96){const _0x45a53f=_0x20fb1c;this[_0x45a53f(0xcf)]=_0x459c96[_0x45a53f(0x13e)]((_0x409216,_0x3877e8,_0x291fd2)=>_0x291fd2[_0x45a53f(0x12e)](_0x409216)===_0x3877e8);},BattleManager[_0x20fb1c(0xd1)]=function(){const _0xc5247c=_0x20fb1c,_0x14c917=this[_0xc5247c(0xe0)]();if(_0x14c917[_0xc5247c(0xcb)]<=0x0)return Math[_0xc5247c(0x147)](Graphics[_0xc5247c(0x14a)]/0x2);let _0xe2ffe4=_0x14c917[_0xc5247c(0x160)]((_0x4ca610,_0xfd1b92)=>_0x4ca610+=_0xfd1b92[_0xc5247c(0x8e)]()['x'],0x0)/_0x14c917[_0xc5247c(0xcb)];return _0xe2ffe4+=Math[_0xc5247c(0x147)]((Graphics[_0xc5247c(0x14a)]-Graphics[_0xc5247c(0x12c)])/0x2),_0xe2ffe4;},BattleManager[_0x20fb1c(0xed)]=function(){const _0x3acb76=_0x20fb1c,_0x378865=this['cameraFocusTargets']();if(_0x378865[_0x3acb76(0xcb)]<=0x0)return Math[_0x3acb76(0x147)](Graphics[_0x3acb76(0xa6)]/0x2);let _0x2bf930=_0x378865[_0x3acb76(0x160)]((_0x552758,_0x467ef9)=>_0x552758+=_0x467ef9['battler']()['y']-Math[_0x3acb76(0x147)](_0x467ef9['battler']()[_0x3acb76(0xa6)]/0x2),0x0)/_0x378865[_0x3acb76(0xcb)];return _0x2bf930+=Math[_0x3acb76(0x147)]((Graphics[_0x3acb76(0xa6)]-Graphics[_0x3acb76(0xfe)])/0x2),_0x2bf930;},VisuMZ[_0x20fb1c(0xb8)][_0x20fb1c(0x9d)]=Game_Screen[_0x20fb1c(0x161)][_0x20fb1c(0x139)],Game_Screen[_0x20fb1c(0x161)][_0x20fb1c(0x139)]=function(){const _0x4edbe5=_0x20fb1c;VisuMZ['ActSeqCamera'][_0x4edbe5(0x9d)][_0x4edbe5(0xd5)](this),this[_0x4edbe5(0xaa)]();},Game_Screen[_0x20fb1c(0x161)]['clearBattleCamera']=function(){const _0x4664e3=_0x20fb1c;this['_battleCamera']=this[_0x4664e3(0x103)]();},Game_Screen['prototype']['initialBattleCameraSettings']=function(){const _0x2a573b=_0x20fb1c,_0x55b307=$dataSystem[_0x2a573b(0x113)][_0x2a573b(0x11f)],_0x11f128=$dataSystem[_0x2a573b(0x113)][_0x2a573b(0xb0)];return{'angle':0x0,'angleTarget':0x0,'angleDuration':0x0,'angleWholeDuration':0x0,'angleEasing':'InOutSine','cameraFocusTarget':![],'cameraX':Math[_0x2a573b(0x147)](_0x55b307/0x2),'cameraY':Math[_0x2a573b(0x147)](_0x11f128/0x2),'cameraXTarget':Math[_0x2a573b(0x147)](_0x55b307/0x2),'cameraYTarget':Math[_0x2a573b(0x147)](_0x11f128/0x2),'cameraDuration':0x0,'cameraDurationWhole':0x0,'cameraEasing':_0x2a573b(0xe3),'cameraClamp':!![],'cameraOffsetX':0x0,'cameraOffsetY':0x0,'cameraOffsetXTarget':0x0,'cameraOffsetYTarget':0x0,'cameraOffsetDuration':0x0,'cameraOffsetDurationWhole':0x0,'cameraOffsetEasing':_0x2a573b(0xe3),'skewX':0x0,'skewTargetX':0x0,'skewY':0x0,'skewTargetY':0x0,'skewDuration':0x0,'skewWholeDuration':0x0,'skewEasing':_0x2a573b(0xe3),'zoomScale':0x1,'zoomScaleTarget':0x1,'zoomDuration':0x0,'zoomWholeDuration':0x0,'zoomEasing':_0x2a573b(0xe3)};},Game_Screen[_0x20fb1c(0x161)][_0x20fb1c(0x114)]=function(){const _0xd2669=_0x20fb1c;if(this['_battleCamera']===undefined)this['clearBattleCamera']();if(!ConfigManager[_0xd2669(0x124)])return this[_0xd2669(0x103)]();return this[_0xd2669(0x133)];},VisuMZ[_0x20fb1c(0xb8)]['Game_Screen_update']=Game_Screen[_0x20fb1c(0x161)][_0x20fb1c(0xf0)],Game_Screen[_0x20fb1c(0x161)][_0x20fb1c(0xf0)]=function(){const _0x55ab2f=_0x20fb1c;VisuMZ['ActSeqCamera'][_0x55ab2f(0x140)][_0x55ab2f(0xd5)](this),this['updateBattleAngle'](),this[_0x55ab2f(0x95)](),this[_0x55ab2f(0xe8)](),this[_0x55ab2f(0x15a)](),this['updateBattleZoom']();},Game_Screen['prototype'][_0x20fb1c(0x13c)]=function(_0xdf1519,_0x1007ac,_0x5d1f05){const _0x376244=_0x20fb1c,_0x4a66e0=this[_0x376244(0x114)]();_0x4a66e0[_0x376244(0xda)]=-_0xdf1519,_0x4a66e0['angleDuration']=_0x1007ac,_0x4a66e0[_0x376244(0x9c)]=_0x1007ac,_0x4a66e0[_0x376244(0x135)]=_0x5d1f05;},Game_Screen[_0x20fb1c(0x161)][_0x20fb1c(0x137)]=function(){const _0xc44269=_0x20fb1c;if(!SceneManager[_0xc44269(0x152)]())return;const _0x1bb5b9=this[_0xc44269(0x114)](),_0x4296ef=_0x1bb5b9[_0xc44269(0x13b)],_0x3f90f4=_0x1bb5b9[_0xc44269(0x9c)],_0x29adfc=_0x1bb5b9[_0xc44269(0x135)];_0x4296ef>0x0?(_0x1bb5b9[_0xc44269(0x150)]=this[_0xc44269(0x11d)](_0x1bb5b9[_0xc44269(0x150)],_0x1bb5b9[_0xc44269(0xda)],_0x4296ef,_0x3f90f4,_0x29adfc),_0x1bb5b9[_0xc44269(0x13b)]--):_0x1bb5b9[_0xc44269(0x150)]=_0x1bb5b9[_0xc44269(0xda)];},Game_Screen['prototype']['setBattleCameraPoint']=function(_0x1d481e,_0x1b908d,_0x103d90,_0x5c8d5a){const _0x4e0068=_0x20fb1c,_0x6c7bce=this['battleCameraData']();_0x6c7bce['cameraFocusTarget']=![],_0x6c7bce[_0x4e0068(0xe4)]=Math[_0x4e0068(0x147)](_0x1d481e),_0x6c7bce['cameraYTarget']=Math[_0x4e0068(0x147)](_0x1b908d),_0x6c7bce[_0x4e0068(0x121)]=_0x103d90,_0x6c7bce[_0x4e0068(0x159)]=_0x103d90,_0x6c7bce['cameraEasing']=_0x5c8d5a;},Game_Screen['prototype']['setBattleCameraTargets']=function(_0x429f88,_0x54ec39,_0x476810){const _0x55a068=_0x20fb1c;if(_0x429f88[_0x55a068(0xcb)]<=0x0)return;const _0x16d620=this[_0x55a068(0x114)]();_0x16d620['cameraFocusTarget']=!![],BattleManager[_0x55a068(0x143)](_0x429f88),_0x16d620[_0x55a068(0x121)]=_0x54ec39,_0x16d620['cameraDurationWhole']=_0x54ec39,_0x16d620[_0x55a068(0x149)]=_0x476810;},Game_Screen[_0x20fb1c(0x161)][_0x20fb1c(0x95)]=function(){const _0x4f88c9=_0x20fb1c;if(!SceneManager[_0x4f88c9(0x152)]())return;const _0x5d328b=this[_0x4f88c9(0x114)](),_0x1bb484=_0x5d328b[_0x4f88c9(0x121)],_0x32f93a=_0x5d328b[_0x4f88c9(0x159)],_0x306e72=_0x5d328b['cameraEasing'];_0x5d328b[_0x4f88c9(0x9f)]&&(_0x4f88c9(0xae)===_0x4f88c9(0x117)?_0x4c3794['_oldCamera']?this[_0x4f88c9(0xfb)]():this['updatePositionCameraRoamNew']():(_0x5d328b[_0x4f88c9(0xe4)]=BattleManager[_0x4f88c9(0xd1)](),_0x5d328b[_0x4f88c9(0x141)]=BattleManager[_0x4f88c9(0xed)]()));if(_0x1bb484>0x0)_0x5d328b['cameraX']=this[_0x4f88c9(0x11d)](_0x5d328b['cameraX'],_0x5d328b[_0x4f88c9(0xe4)],_0x1bb484,_0x32f93a,_0x306e72),_0x5d328b['cameraY']=this[_0x4f88c9(0x11d)](_0x5d328b['cameraY'],_0x5d328b['cameraYTarget'],_0x1bb484,_0x32f93a,_0x306e72),_0x5d328b['cameraDuration']--;else{if(_0x4f88c9(0xd9)!==_0x4f88c9(0x14f))_0x5d328b[_0x4f88c9(0xe9)]=_0x5d328b[_0x4f88c9(0xe4)],_0x5d328b[_0x4f88c9(0xa4)]=_0x5d328b[_0x4f88c9(0x141)];else{const _0x288980=_0x37622a(_0x5de808['$1']);_0x288980!==_0x5bd465[_0x428eb7]['version']&&(_0x2d94ec(_0x4f88c9(0x158)['format'](_0x4c6904,_0x288980)),_0x462a07[_0x4f88c9(0xb5)]());}}},Game_Screen[_0x20fb1c(0x161)][_0x20fb1c(0x92)]=function(_0x5133ba,_0x1011fc,_0x36f90d,_0x37d16d){const _0x228f98=_0x20fb1c,_0x139511=this[_0x228f98(0x114)]();_0x139511['cameraOffsetXTarget']=Math[_0x228f98(0x147)](_0x5133ba),_0x139511[_0x228f98(0x106)]=Math[_0x228f98(0x147)](_0x1011fc),_0x139511[_0x228f98(0xf3)]=_0x36f90d,_0x139511['cameraOffsetDurationWhole']=_0x36f90d,_0x139511['cameraOffsetEasing']=_0x37d16d;},Game_Screen['prototype'][_0x20fb1c(0xe8)]=function(){const _0x4d8be7=_0x20fb1c;if(!SceneManager[_0x4d8be7(0x152)]())return;const _0x16373f=this[_0x4d8be7(0x114)](),_0x14e89c=_0x16373f['cameraOffsetDuration'],_0x45974f=_0x16373f[_0x4d8be7(0xfc)],_0x1409d1=_0x16373f[_0x4d8be7(0xee)];_0x14e89c>0x0?(_0x16373f[_0x4d8be7(0x116)]=this[_0x4d8be7(0x11d)](_0x16373f[_0x4d8be7(0x116)],_0x16373f['cameraOffsetXTarget'],_0x14e89c,_0x45974f,_0x1409d1),_0x16373f[_0x4d8be7(0x11a)]=this[_0x4d8be7(0x11d)](_0x16373f['cameraOffsetY'],_0x16373f[_0x4d8be7(0x106)],_0x14e89c,_0x45974f,_0x1409d1),_0x16373f[_0x4d8be7(0xf3)]--):_0x4d8be7(0xa1)!==_0x4d8be7(0x127)?(_0x16373f[_0x4d8be7(0x116)]=_0x16373f[_0x4d8be7(0x153)],_0x16373f[_0x4d8be7(0x11a)]=_0x16373f['cameraOffsetYTarget']):this[_0x4d8be7(0xfb)]();},Game_Screen[_0x20fb1c(0x161)][_0x20fb1c(0x154)]=function(_0x13fbcb,_0x9f845d,_0x10d9d7,_0x33a010){const _0x4ff359=_0x20fb1c,_0x268e21=this['battleCameraData']();_0x268e21['skewTargetX']=_0x13fbcb,_0x268e21[_0x4ff359(0x10e)]=_0x9f845d,_0x268e21[_0x4ff359(0xc4)]=_0x10d9d7,_0x268e21[_0x4ff359(0x15c)]=_0x10d9d7,_0x268e21[_0x4ff359(0x100)]=_0x33a010;},Game_Screen['prototype']['updateBattleSkew']=function(){const _0x1bcaf4=_0x20fb1c;if(!SceneManager[_0x1bcaf4(0x152)]())return;const _0x5037cd=this[_0x1bcaf4(0x114)](),_0x2cd554=_0x5037cd['skewDuration'],_0x3029ba=_0x5037cd[_0x1bcaf4(0x15c)],_0x1f6d60=_0x5037cd[_0x1bcaf4(0x100)];_0x2cd554>0x0?(_0x5037cd['skewX']=this[_0x1bcaf4(0x11d)](_0x5037cd['skewX'],_0x5037cd[_0x1bcaf4(0xb6)],_0x2cd554,_0x3029ba,_0x1f6d60),_0x5037cd[_0x1bcaf4(0xc2)]=this[_0x1bcaf4(0x11d)](_0x5037cd[_0x1bcaf4(0xc2)],_0x5037cd[_0x1bcaf4(0x10e)],_0x2cd554,_0x3029ba,_0x1f6d60),_0x5037cd[_0x1bcaf4(0xc4)]--):_0x1bcaf4(0x151)!==_0x1bcaf4(0x148)?(_0x5037cd['skewX']=_0x5037cd[_0x1bcaf4(0xb6)],_0x5037cd['skewY']=_0x5037cd[_0x1bcaf4(0x10e)]):(_0x3bea86[_0x1bcaf4(0xef)]=this['applyEasing'](_0x4636f2['zoomScale'],_0x2f0cfc[_0x1bcaf4(0xc6)],_0xff454,_0x1f4d1e,_0x397d0d),_0x161920['zoomDuration']--);},Game_Screen[_0x20fb1c(0x161)]['setBattleZoom']=function(_0x4d1e7f,_0x320833,_0x48171b){const _0x39dc05=_0x20fb1c,_0x1fbee7=this[_0x39dc05(0x114)]();_0x1fbee7[_0x39dc05(0xc6)]=_0x4d1e7f,_0x1fbee7[_0x39dc05(0xf4)]=_0x320833,_0x1fbee7[_0x39dc05(0x13a)]=_0x320833,_0x1fbee7[_0x39dc05(0x118)]=_0x48171b,console[_0x39dc05(0x130)](_0x4d1e7f);},Game_Screen[_0x20fb1c(0x161)]['updateBattleZoom']=function(){const _0x4f41cf=_0x20fb1c;if(!SceneManager[_0x4f41cf(0x152)]())return;const _0x383cf0=this[_0x4f41cf(0x114)](),_0xd6517c=_0x383cf0[_0x4f41cf(0xf4)],_0x5f1421=_0x383cf0[_0x4f41cf(0x13a)],_0x5156cf=_0x383cf0['zoomEasing'];_0xd6517c>0x0?(_0x383cf0[_0x4f41cf(0xef)]=this[_0x4f41cf(0x11d)](_0x383cf0[_0x4f41cf(0xef)],_0x383cf0['zoomScaleTarget'],_0xd6517c,_0x5f1421,_0x5156cf),_0x383cf0[_0x4f41cf(0xf4)]--):_0x383cf0[_0x4f41cf(0xef)]=_0x383cf0[_0x4f41cf(0xc6)];},Game_Screen[_0x20fb1c(0x161)][_0x20fb1c(0x11d)]=function(_0x1b71cc,_0x3537f1,_0x3e4e6f,_0x66d766,_0x84ee9b){const _0x546bfe=_0x20fb1c,_0xd28f18=VisuMZ[_0x546bfe(0xf2)]((_0x66d766-_0x3e4e6f)/_0x66d766,_0x84ee9b||_0x546bfe(0xce)),_0x953513=VisuMZ[_0x546bfe(0xf2)]((_0x66d766-_0x3e4e6f+0x1)/_0x66d766,_0x84ee9b||'Linear'),_0x98d5a4=(_0x1b71cc-_0x3537f1*_0xd28f18)/(0x1-_0xd28f18);return _0x98d5a4+(_0x3537f1-_0x98d5a4)*_0x953513;},VisuMZ[_0x20fb1c(0xb8)][_0x20fb1c(0xa9)]=Scene_Options[_0x20fb1c(0x161)][_0x20fb1c(0xd6)],Scene_Options[_0x20fb1c(0x161)][_0x20fb1c(0xd6)]=function(){const _0xb58511=_0x20fb1c;let _0x4db9f2=VisuMZ[_0xb58511(0xb8)]['Scene_Options_maxCommands']['call'](this);const _0x238fc0=VisuMZ[_0xb58511(0xb8)][_0xb58511(0x101)];if(_0x238fc0[_0xb58511(0x12b)][_0xb58511(0xd4)]&&_0x238fc0[_0xb58511(0x12b)]['AdjustRect'])_0x4db9f2++;return _0x4db9f2;},VisuMZ[_0x20fb1c(0xb8)][_0x20fb1c(0xb3)]=Sprite_Battler['prototype'][_0x20fb1c(0x146)],Sprite_Battler[_0x20fb1c(0x161)]['damageOffsetX']=function(){const _0x1a3938=_0x20fb1c;let _0xef58a4=VisuMZ[_0x1a3938(0xb8)]['Sprite_Battler_damageOffsetX']['call'](this);return _0xef58a4+=Math[_0x1a3938(0x147)]((Graphics[_0x1a3938(0x14a)]-Graphics[_0x1a3938(0x12c)])/0x2),_0xef58a4;},VisuMZ[_0x20fb1c(0xb8)]['Sprite_Battler_damageOffsetY']=Sprite_Battler[_0x20fb1c(0x161)]['damageOffsetY'],Sprite_Battler[_0x20fb1c(0x161)][_0x20fb1c(0x11c)]=function(){const _0x2fbd7f=_0x20fb1c;let _0x2d847d=VisuMZ[_0x2fbd7f(0xb8)]['Sprite_Battler_damageOffsetY'][_0x2fbd7f(0xd5)](this);return _0x2d847d+=Math['round']((Graphics[_0x2fbd7f(0xa6)]-Graphics[_0x2fbd7f(0xfe)])/0x2),_0x2d847d;},VisuMZ['ActSeqCamera'][_0x20fb1c(0x8d)]=Sprite_Animation['prototype']['updateEffectGeometry'],Sprite_Animation[_0x20fb1c(0x161)][_0x20fb1c(0x111)]=function(){const _0x722e4b=_0x20fb1c,_0xaf6fba=this[_0x722e4b(0x119)][_0x722e4b(0x12f)];if(SceneManager[_0x722e4b(0xf7)]['_spriteset']){const _0x1671a2=SceneManager['_scene'][_0x722e4b(0x125)];this[_0x722e4b(0x119)][_0x722e4b(0x12f)]*=_0x1671a2[_0x722e4b(0x12f)]['x'];}VisuMZ['ActSeqCamera'][_0x722e4b(0x8d)][_0x722e4b(0xd5)](this),this[_0x722e4b(0x119)][_0x722e4b(0x12f)]=_0xaf6fba;},VisuMZ[_0x20fb1c(0xb8)][_0x20fb1c(0xf9)]=Sprite_AnimationMV['prototype']['updatePosition'],Sprite_AnimationMV['prototype'][_0x20fb1c(0x12d)]=function(){const _0x1d3e98=_0x20fb1c;VisuMZ[_0x1d3e98(0xb8)][_0x1d3e98(0xf9)]['call'](this);if(!SceneManager[_0x1d3e98(0x152)]())return;if(this['_isProjectile'])return;if(Spriteset_Battle['ANTI_TINT_UI'])this['x']-=$spriteset[_0x1d3e98(0x14a)]/0x2,this['y']-=$spriteset[_0x1d3e98(0xa6)]/0x2;else{if(_0x1d3e98(0xec)!=='HqWWF')this['x']+=$spriteset[_0x1d3e98(0x14a)]/0x2,this['y']+=$spriteset[_0x1d3e98(0xa6)]/0x2;else{if(this['_battleFieldCameraY']!==_0x1bfe80)return this['_battleFieldCameraY'];return this[_0x1d3e98(0xe7)]=(_0x38f498['height']-_0x5a8364[_0x1d3e98(0xfe)])/0x2-this[_0x1d3e98(0xdf)](),this['_battleFieldCameraY'];}}},Sprite_AnimationMV[_0x20fb1c(0x161)][_0x20fb1c(0x155)]=function(){const _0xb7910d=_0x20fb1c;return this[_0xb7910d(0x119)][_0xb7910d(0x109)]===0x3;},Sprite_AnimationMV[_0x20fb1c(0x161)]['hasTargets']=function(){const _0x148017=_0x20fb1c;return this[_0x148017(0x99)][_0x148017(0xcb)]>0x0;},Sprite_AnimationMV[_0x20fb1c(0x161)][_0x20fb1c(0xe1)]=function(){const _0x1b64fa=_0x20fb1c;if(!$gameSystem[_0x1b64fa(0x134)]()){const _0x349582=this[_0x1b64fa(0x99)][0x0];if(_0x349582[_0x1b64fa(0xa5)]===Sprite_Actor)return![];}return!![];},VisuMZ['ActSeqCamera'][_0x20fb1c(0x15d)]=Spriteset_Battle[_0x20fb1c(0x161)]['initialize'],Spriteset_Battle[_0x20fb1c(0x161)][_0x20fb1c(0xde)]=function(){const _0x20dc6e=_0x20fb1c;VisuMZ[_0x20dc6e(0xb8)][_0x20dc6e(0x15d)][_0x20dc6e(0xd5)](this),this['_cacheScaleX']=undefined,this[_0x20dc6e(0x9e)]=undefined;},VisuMZ[_0x20fb1c(0xb8)][_0x20fb1c(0x110)]=Spriteset_Battle[_0x20fb1c(0x161)]['createLowerLayer'],Spriteset_Battle[_0x20fb1c(0x161)][_0x20fb1c(0xb1)]=function(){const _0x377419=_0x20fb1c;VisuMZ[_0x377419(0xb8)][_0x377419(0x110)][_0x377419(0xd5)](this),this['applyAnchorsForTiltEffect']();},Spriteset_Battle[_0x20fb1c(0x161)]['applyAnchorsForTiltEffect']=function(){const _0x127e8d=_0x20fb1c;if(Spriteset_Battle[_0x127e8d(0x13d)])return;const _0x17ad7d=-Math['ceil'](Graphics[_0x127e8d(0x14a)]/0x2),_0x339508=-Math[_0x127e8d(0xaf)](Graphics['height']/0x2);this[_0x127e8d(0x93)]['x']=0.5,this[_0x127e8d(0x93)]['y']=0.5;const _0x3e3c8e=[this[_0x127e8d(0xeb)],this[_0x127e8d(0x138)]];_0x3e3c8e[_0x127e8d(0x90)](this[_0x127e8d(0xc5)]);for(const _0x1e1793 of _0x3e3c8e){if(!_0x1e1793)continue;_0x1e1793['x']=_0x17ad7d,_0x1e1793['y']=_0x339508;}},Spriteset_Battle[_0x20fb1c(0x161)][_0x20fb1c(0x12d)]=function(){const _0x5c4e88=_0x20fb1c;this[_0x5c4e88(0x14e)](),this[_0x5c4e88(0xdd)](),this[_0x5c4e88(0x14c)](),this[_0x5c4e88(0x12a)](),this['updatePositionShake']();},Spriteset_Battle[_0x20fb1c(0x161)][_0x20fb1c(0x14e)]=function(){const _0x527e7a=_0x20fb1c,_0x540848=this[_0x527e7a(0x112)]();this[_0x527e7a(0x150)]=_0x540848;},Spriteset_Battle['prototype'][_0x20fb1c(0x112)]=function(){const _0x3a6159=_0x20fb1c;if(!ConfigManager['battleCamera'])return 0x0;if(BattleManager[_0x3a6159(0x15f)]())return 0x0;return $gameScreen[_0x3a6159(0x114)]()[_0x3a6159(0x150)];},Spriteset_Battle[_0x20fb1c(0x161)]['updatePositionSkew']=function(){const _0x2eb048=_0x20fb1c;if(BattleManager['isInputting']()||!ConfigManager['battleCamera'])this[_0x2eb048(0x9a)]['x']=0x0,this[_0x2eb048(0x9a)]['y']=0x0;else{const _0x44b4e2=$gameScreen['battleCameraData']();this[_0x2eb048(0x9a)]['x']=_0x44b4e2[_0x2eb048(0xea)],this['skew']['y']=_0x44b4e2[_0x2eb048(0xc2)];}},Spriteset_Battle[_0x20fb1c(0x161)][_0x20fb1c(0x14c)]=function(){const _0x50a0f4=_0x20fb1c,_0xf111e8=this[_0x50a0f4(0x9b)]();this[_0x50a0f4(0x12f)]['x']=this[_0x50a0f4(0x12f)]['y']=_0xf111e8;},Spriteset_Battle[_0x20fb1c(0x161)][_0x20fb1c(0x9b)]=function(){const _0x32e0ef=_0x20fb1c;if(!ConfigManager['battleCamera'])return 0x1;if(BattleManager[_0x32e0ef(0x15f)]())return 0x1;return $gameScreen[_0x32e0ef(0x114)]()[_0x32e0ef(0xef)];},Spriteset_Battle['prototype'][_0x20fb1c(0x12a)]=function(){const _0x4e9124=_0x20fb1c;if(BattleManager[_0x4e9124(0x15f)]()||!ConfigManager[_0x4e9124(0x124)])this['updatePositionCameraNeutral']();else{if(_0x4e9124(0xac)==='xQKkx'){if(Spriteset_Battle[_0x4e9124(0x13d)])this[_0x4e9124(0xfb)]();else{if(_0x4e9124(0xff)===_0x4e9124(0xdb)){const _0x3e02bb=_0x4a7a4a[_0x4e9124(0x14a)]-_0x5bf999*_0x4c624a,_0x44894b=_0xa4613b*_0x115aea;_0x58694e=_0x593b88[_0x4e9124(0xcd)](_0x3e02bb,_0x44894b);const _0x3a01e6=_0x5f3b2b['height']-_0x4159a0*_0x2e68e5,_0x18f416=_0x359921*_0x1a2985;_0x284757=_0x47d26d[_0x4e9124(0xcd)](_0x3a01e6,_0x18f416);}else this[_0x4e9124(0x13f)]();}}else _0x211575['cameraX']=this[_0x4e9124(0x11d)](_0x3d7889[_0x4e9124(0xe9)],_0x472ec4[_0x4e9124(0xe4)],_0x5c46ae,_0x5406a6,_0x84407f),_0x109c12[_0x4e9124(0xa4)]=this[_0x4e9124(0x11d)](_0x2236a8[_0x4e9124(0xa4)],_0x305763[_0x4e9124(0x141)],_0x160821,_0x4953b8,_0x538ce5),_0x5a5482['cameraDuration']--;}},Spriteset_Battle['prototype'][_0x20fb1c(0x10c)]=function(){const _0x47eb3f=_0x20fb1c;if(this[_0x47eb3f(0xe7)]!==undefined)return this[_0x47eb3f(0xe7)];return this[_0x47eb3f(0xe7)]=(Graphics[_0x47eb3f(0xa6)]-Graphics[_0x47eb3f(0xfe)])/0x2-this[_0x47eb3f(0xdf)](),this[_0x47eb3f(0xe7)];},Spriteset_Battle[_0x20fb1c(0x161)]['updatePositionCameraNeutral']=function(){const _0x4c20db=_0x20fb1c;if(Spriteset_Battle[_0x4c20db(0x13d)])return;this[_0x4c20db(0xad)]['y']=this['battleFieldCameraY'](),this['x']=Math[_0x4c20db(0x147)](Graphics[_0x4c20db(0x14a)]/0x2),this['y']=Math[_0x4c20db(0x147)](Graphics[_0x4c20db(0xa6)]/0x2);},Spriteset_Battle[_0x20fb1c(0x161)][_0x20fb1c(0xfb)]=function(){const _0x3ba3ad=_0x20fb1c,_0x1c83cf=$gameScreen[_0x3ba3ad(0x114)](),_0x1187f5=this[_0x3ba3ad(0x11b)](),_0x4d56c8=this['getBattleZoom']();let _0x145012=-(_0x1c83cf[_0x3ba3ad(0xe9)]+_0x1c83cf[_0x3ba3ad(0x116)])*_0x4d56c8+Graphics[_0x3ba3ad(0x14a)]/0x2,_0x26ea4d=-(_0x1c83cf['cameraY']+_0x1c83cf[_0x3ba3ad(0x11a)])*_0x4d56c8+Graphics[_0x3ba3ad(0xa6)]/0x2;if(_0x1187f5&&_0x4d56c8>=0x1){const _0x155e3c=-Graphics['width']*_0x4d56c8+Graphics[_0x3ba3ad(0x14a)]/0x2,_0x592e7f=-Graphics[_0x3ba3ad(0xa6)]*_0x4d56c8+Graphics[_0x3ba3ad(0xa6)]/0x2;this['x']=Math['round'](_0x145012[_0x3ba3ad(0xcd)](_0x155e3c,0x0)),this['y']=Math[_0x3ba3ad(0x147)](_0x26ea4d[_0x3ba3ad(0xcd)](_0x592e7f,0x0));}else _0x1187f5&&_0x4d56c8<0x1?(this['x']=Math[_0x3ba3ad(0x147)]((Graphics['width']-Graphics[_0x3ba3ad(0x14a)]*_0x4d56c8)/0x2),this['y']=Math[_0x3ba3ad(0x147)]((Graphics[_0x3ba3ad(0xa6)]-Graphics['height']*_0x4d56c8)/0x2)):_0x3ba3ad(0xab)===_0x3ba3ad(0x157)?(_0x5c96e5[_0x3ba3ad(0x116)]=this[_0x3ba3ad(0x11d)](_0x107e39[_0x3ba3ad(0x116)],_0x50e356['cameraOffsetXTarget'],_0x210a21,_0x14bc79,_0x3ea5ac),_0x52ed4c[_0x3ba3ad(0x11a)]=this[_0x3ba3ad(0x11d)](_0x3e585d['cameraOffsetY'],_0x389eed[_0x3ba3ad(0x106)],_0x5df32d,_0x472f2e,_0x5001fd),_0x900cc0[_0x3ba3ad(0xf3)]--):(this['x']=Math['round'](_0x145012),this['y']=Math[_0x3ba3ad(0x147)](_0x26ea4d));},Spriteset_Battle[_0x20fb1c(0x13d)]=![],Spriteset_Battle['prototype'][_0x20fb1c(0xdf)]=function(){const _0xa43382=_0x20fb1c;if(Imported[_0xa43382(0x96)]&&BattleManager['isUsingSideviewUiLayout']()){if('uNpxS'==='tssQX'){let _0x3b63ac='';_0x3b63ac+=_0xa43382(0x120),_0x3b63ac+=_0xa43382(0x145),_0x3d9647(_0x3b63ac),_0x157106[_0xa43382(0xb5)]();}else return 0x0;}else{if(_0xa43382(0xc8)===_0xa43382(0xc8))return 0x18;else{const _0x2f0c08=_0x3f840c[_0xa43382(0xf7)][_0xa43382(0x97)]();_0x3a8bac-=_0x2f0c08/0x2*_0x220118[_0xa43382(0xd0)](0x1,_0x1c60ea[_0xa43382(0xb4)](_0x1497e3-0x1));}}},Spriteset_Battle['prototype']['updatePositionCameraRoamNew']=function(){const _0x9d015b=_0x20fb1c;let _0xd41999=this[_0x9d015b(0x11b)](),_0xd6a170=this[_0x9d015b(0x9b)]();const _0x1d6b55=Graphics['width']/0x2,_0x388930=Graphics['height']/0x2;if(_0xd41999&&_0xd6a170<=0x1){if(_0x9d015b(0xb7)===_0x9d015b(0xe5))this[_0x9d015b(0x9a)]['x']=0x0,this[_0x9d015b(0x9a)]['y']=0x0;else{this['x']=Math[_0x9d015b(0x147)](_0x1d6b55),this['y']=Math[_0x9d015b(0x147)](_0x388930);return;}}const _0x558348=$gameScreen[_0x9d015b(0x114)]();let _0x236324=-(_0x558348[_0x9d015b(0xe9)]+_0x558348[_0x9d015b(0x116)])+Graphics[_0x9d015b(0x14a)];_0x236324-=(0x1-_0xd6a170)*(_0x1d6b55-_0x558348[_0x9d015b(0xe9)]-_0x558348[_0x9d015b(0x116)]);let _0x126635=-(_0x558348[_0x9d015b(0xa4)]+_0x558348[_0x9d015b(0x11a)])+Graphics['height'];this['_battleField']['y']=this[_0x9d015b(0x10c)]();const _0x345d93=this[_0x9d015b(0xad)]['y']*0x2-Math['round']((Graphics[_0x9d015b(0xa6)]-Graphics[_0x9d015b(0xfe)])/0x2);_0x126635+=_0x345d93*(0x1-_0xd6a170),_0x126635-=(0x1-_0xd6a170)*(_0x388930-_0x558348['cameraY']-_0x558348['cameraOffsetY']);const _0x2951e9=Imported[_0x9d015b(0x96)]&&BattleManager[_0x9d015b(0x15e)]();if(!_0x2951e9){const _0x2d7d8a=SceneManager['_scene'][_0x9d015b(0x97)]();_0x126635-=_0x2d7d8a/0x2*Math['min'](0x1,Math[_0x9d015b(0xb4)](_0xd6a170-0x1));}if(_0xd41999){if(_0xd6a170>0x1){const _0x276b60=Graphics[_0x9d015b(0x14a)]-_0x1d6b55*_0xd6a170,_0x1c3700=_0x1d6b55*_0xd6a170;_0x236324=_0x236324[_0x9d015b(0xcd)](_0x276b60,_0x1c3700);const _0x3b86a0=Graphics['height']-_0x388930*_0xd6a170,_0x55760f=_0x388930*_0xd6a170;_0x126635=_0x126635['clamp'](_0x3b86a0,_0x55760f);}else{if(_0xd6a170<=0x1){if(_0x9d015b(0x11e)===_0x9d015b(0x11e))_0x236324=_0x1d6b55,_0x126635=_0x388930;else{if(!_0x3aba85[_0x9d015b(0x124)])return!![];if(_0x22306b['isInputting']())return!![];return _0x444093[_0x9d015b(0x114)]()[_0x9d015b(0xa7)];}}}}this['x']=Math['round'](_0x236324),this['y']=Math[_0x9d015b(0x147)](_0x126635);},Spriteset_Battle[_0x20fb1c(0x161)][_0x20fb1c(0x11b)]=function(){const _0xd429f1=_0x20fb1c;if(!ConfigManager[_0xd429f1(0x124)])return!![];if(BattleManager[_0xd429f1(0x15f)]())return!![];return $gameScreen[_0xd429f1(0x114)]()['cameraClamp'];},Spriteset_Battle['prototype']['updatePositionShake']=function(){const _0x2a1600=_0x20fb1c;this['x']+=Math[_0x2a1600(0x147)]($gameScreen['shake']()),Imported['VisuMZ_0_CoreEngine']&&this[_0x2a1600(0x8f)]&&this[_0x2a1600(0x8f)]();},VisuMZ[_0x20fb1c(0xb8)]['Window_Options_addGeneralOptions']=Window_Options[_0x20fb1c(0x161)][_0x20fb1c(0x126)],Window_Options[_0x20fb1c(0x161)][_0x20fb1c(0x126)]=function(){const _0x274b57=_0x20fb1c;VisuMZ[_0x274b57(0xb8)]['Window_Options_addGeneralOptions']['call'](this),this[_0x274b57(0xc1)]();},Window_Options[_0x20fb1c(0x161)]['addBattleCameraCommands']=function(){const _0x5d6cc6=_0x20fb1c;VisuMZ[_0x5d6cc6(0xb8)][_0x5d6cc6(0x101)][_0x5d6cc6(0x12b)][_0x5d6cc6(0xd4)]&&this[_0x5d6cc6(0x108)]();},Window_Options[_0x20fb1c(0x161)]['addBattleCameraCommand']=function(){const _0x117e44=_0x20fb1c,_0x7c87e8=TextManager['battleCameraOption'],_0x4a5c7f=_0x117e44(0x124);this[_0x117e44(0xf5)](_0x7c87e8,_0x4a5c7f);};