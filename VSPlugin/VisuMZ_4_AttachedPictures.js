//=============================================================================
// VisuStella MZ - Attached Pictures
// VisuMZ_4_AttachedPictures.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_AttachedPictures = true;

var VisuMZ = VisuMZ || {};
VisuMZ.AttachedPictures = VisuMZ.AttachedPictures || {};
VisuMZ.AttachedPictures.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.04] [AttachedPictures]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Attached_Pictures_VisuStella_MZ
 * @orderAfter VisuMZ_1_MessageCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * This plugin allows you to attach Pictures to the Message Window or other
 * Pictures. This means that their positions, effects, and the like become
 * relative to the attached target's, including their position and properties.
 * Use this to display busts on Message Windows or piece together actor busts
 * with a basic body image, a set of eyes, and a mouth. Add some flavor by
 * letting pictures interact with the Message Window in different ways as well
 * as make your actor busts more vivid.
 *
 * This plugin allows you to attach pictures to the Message Window. This means
 * that their positions, effects, and the like become relative to the Message
 * Window's position. Use this to display busts, special effects on an actor's
 * face, or add some flavor by letting pictures interact with the Message
 * Window in different ways.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Pictures attached to other pictures will appear relative to the target
 *   picture's position, origin, and share its other properties like scaling,
 *   opacity, tint, and rotation.
 * * Pictures attached to the Message Window will appear relative to the
 *   Message Window's position.
 * * Control these pictures with event commands, such as movement, rotation,
 *   tint, and any kind of picture-related Plugin Command.
 * * Use pictures as Message Window busts, special effects, or anything you can
 *   think of.
 * * Create a bust system for your actors displaying various emotions without
 *   needing a whole picture for each emotional combination.
 * * Change the attached pictures throughout the game. Add to the Message
 *   Window or remove from it with Plugin Commands!
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
 * VisuMZ_4_PictureCmnEvts
 * 
 * Attached Pictures (for both pictures attached to other pictures or pictures
 * that are attached to the Message Window) will no longer trigger click
 * effects in order to reduce lag. Instead, the click area is now bound only to
 * the base picture it is attached to, if it is a picture. This does not apply
 * to the Message Window as it would not work with the Message Window anyway.
 * 
 * ---
 *
 * ============================================================================
 * Instructions - Message Pictures
 * ============================================================================
 *
 * Here are the instructions on how to use this plugin.
 *
 * ---
 *
 * Step 1:
 * 
 * Option A:
 * 
 * - Open up the Plugin Parameters for this plugin.
 * - Modify the Message Window > Default Attached ID Plugin Parameter.
 * - This marks the Picture ID's attached to the Message Window by default.
 * - Default Picture ID values: 61, 62, 63, 64, 65, 66, 67, 68, 69, 70
 * - Remember these ID's.
 * 
 * OR
 * 
 * Option B:
 * 
 * - Use the Plugin Command: "Message: Attach Picture(s)"
 * - Add specific Picture ID's to be attached to the Message Window.
 * - Remember these ID's.
 *
 * ---
 *
 * Step 2:
 * 
 * - Create an event or edit an existing one.
 * - Create a "Show Picture" event using one of the ID's attached to the
 *   Message Window from Step 1.
 * - Modify the specific ID's with "Move Picture", "Rotate Picture",
 *   "Tint Picture", or "Erase Picture" event commands.
 * - The effects will be applied to picture(s) attached to the Message Window.
 *
 * ---
 *
 * Things to Note:
 * 
 * - The picture coordinates are relative to the Message Window's upper left
 * corner. This means if your picture has an X coordinate of 100, and a Y
 * coordinate of 50, it will be 100 pixels across and 50 pixels down from the
 * upper left corner of the Message Window while paying heed to the picture's
 * anchor/origin position.
 * 
 * - Pictures will be layered in the order of smallest ID towards the bottom to
 * largest ID towards the top, just like it would on the main map.
 * 
 * - Pictures will only be positioned relative to the Message Window. Any
 * supplemental windows like the Name Window, Choice Window, and Number Input
 * Window will appear above the pictures. Keep this in mind as you use them.
 * There is no changing this.
 * 
 * - Removing a picture from being attached to the Message Window while it is
 * visible will place it back to the main screen.
 * 
 * - The opposite is also true. If you attach a picture to the Message Window
 * while it is already on the main screen, it will be attached to the Message
 * Window suddenly.
 * 
 * - If the Message Window is closing or is invisible, all attached pictures
 * to the Message Window will disappear until it is fully opened again.
 * 
 * - If the Message Window changes positions (ie from the bottom to the middle)
 * then all attached pictures will be transported relative to the new location.
 * 
 * - Pictures cannot be simultaneously attached to Message Windows and other
 * Pictures at the same time. The attachment will go towards whichever command
 * last attaches them. Attached Pictures also cannot be attached to other
 * Attached Pictures regardless of their sources.
 *
 * ---
 *
 * ============================================================================
 * Instructions - Pictures Attached to Other Pictures
 * ============================================================================
 *
 * Here are the instructions on how to use this plugin.
 *
 * ---
 *
 * Step 1:
 * 
 * - Use the Plugin Command: "Picture: Attach Picture(s)"
 * - Add "Attach Picture ID(s)" to be attached to the "Target Picture ID".
 * - Remember these ID's.
 *
 * ---
 *
 * Step 2:
 * 
 * - Create an event or edit an existing one.
 * - Create a "Show Picture" event using one of the ID's attached to the
 *   target Picture from Step 1.
 * - Create a "Show Picture" event using the target picture ID from Step 1.
 * - Modify the specific ID's with "Move Picture", "Rotate Picture",
 *   "Tint Picture", or "Erase Picture" event commands.
 * - The effects will be applied to picture(s) attached to the target Picture.
 *
 * ---
 *
 * Things to Note:
 * 
 * - The picture coordinates of the attached pictures are relative to the
 * origin point determined by the target picture. This means if the target
 * picture uses the "Upper Left" origin point, any attached pictures will use
 * that as their 0, 0. If they use a "Center" origin point, then the attached
 * pictures will use the target picture's center.
 * 
 * - Attached pictures will be layered in the order of smallest ID towards the
 * bottom to largest ID towards the top, just like it would on the main map.
 * 
 * - Attached pictures will always be on top of the picture it is attached to
 * regardless of their ID's. This means if picture 5 is attached to picture 20,
 * the attached picture 5 will appear on top of picture 20.
 * 
 * - Attached pictures of base pictures with higher ID's will appear above
 * other attached pictures and base pictures of lower ID's. This means if
 * picture 5 is attached to picture 20, it will appear on top of picture 90
 * that is attached to picture 15.
 * 
 * - Removing a picture from being attached to the target picture while it is
 * visible will place it back to the main screen.
 * 
 * - The opposite is also true. If you attach a picture to a target picture
 * while it is already on the main screen, it will be attached to the target
 * picture suddenly.
 * 
 * - If the target picture is stretched via scale, has its opacity changed,
 * rotating, or is tinted, attached pictures will adopt those properties. In
 * regards to opacity changes, each layer can be visibly seen apart from one
 * another. There is nothing we can do about this as it's a Pixi-related issue.
 * 
 * - The attached pictures won't be shown if the target picture is erased.
 * 
 * - Pictures cannot be simultaneously attached to Message Windows and other
 * Pictures at the same time. The attachment will go towards whichever command
 * last attaches them. Attached Pictures also cannot be attached to other
 * Attached Pictures regardless of their sources.
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
 * === Message Plugin Commands ===
 * 
 * ---
 *
 * Message: Attach Picture(s)
 * - Select which Picture ID's to attach to the Message Window.
 *
 *   Picture ID(s):
 *   - Select which Picture ID's to attach to the Message Window.
 *
 * ---
 *
 * Message: Remove Picture(s)
 * - Select which Picture ID's to remove from the Message Window.
 *
 *   Picture ID(s):
 *   - Select which Picture ID's to remove from the Message Window.
 *
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 *
 * Picture: Attach Picture(s)
 * - Select which Picture ID's to attach to another picture.
 *
 *   Picture ID(s):
 *   - Select which Picture ID's to attach to another picture.
 * 
 *   Target Picture ID:
 *   - Select which Picture ID to attach the above picture(s) to.
 *
 * ---
 *
 * Picture: Remove Picture(s)
 * - Select which Picture ID's to remove from any other pictures.
 *
 *   Picture ID(s):
 *   - Select which Picture ID's to remove from any other pictures.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings available to this plugin.
 *
 * ---
 *
 * Message Window
 * 
 *   Default Attached ID(s):
 *   - Select which Picture ID's to default to being attached to
 *     Message Window.
 *   - Can be updated with Plugin Commands.
 * 
 *   Container Position:
 *   - Select the position of the picture container.
 *   - Pictures will still appear behind supplemental windows.
 *     - 0 - Behind Window Skin
 *     - 1 - In Front of Window Skin
 *     - 2 - In Front of Window Text
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
 * Version 1.04: September 14, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.03: July 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause attached pictures to appear multiple times
 *    when attaching multiple pairs. Fix made by Arisu.
 * 
 * Version 1.02: January 20, 2023
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.01: December 2, 2021
 * * Documentation Update!
 * ** Added section under "VisuStella MZ Compatibility" for Picture Common
 *    Events explaining the new feature update.
 * * Feature Update!
 * ** Attached pictures are no longer affected by Picture Common Event click
 *    triggers in order to reduce lag. Update made by Arisu.
 * 
 * Version 1.00 Official Release Date: December 10, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageAddPicture
 * @text Message: Attach Picture(s)
 * @desc Select which Picture ID's to attach to the Message Window.
 *
 * @arg PictureID:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which Picture ID's to attach to the Message Window.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageRemovePicture
 * @text Message: Remove Picture(s)
 * @desc Select which Picture ID's to remove from the Message Window.
 *
 * @arg PictureID:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which Picture ID's to remove from the Message Window.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureAddPicture
 * @text Picture: Attach Picture(s)
 * @desc Select which Picture ID's to attach to another picture.
 *
 * @arg PictureID:arraynum
 * @text Attach Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which Picture ID's to attach to another picture.
 * @default ["1"]
 *
 * @arg TargetID:num
 * @text Target Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to attach the above picture(s) to.
 * @default 2
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRemovePicture
 * @text Picture: Remove Picture(s)
 * @desc Select which Picture ID's to remove from any other pictures.
 *
 * @arg PictureID:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which Picture ID's to remove from any other pictures.
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
 * @param AttachedPictures
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param MsgWindow
 * @text Message Window
 *
 * @param PictureIDs:arraynum
 * @text Default Attached ID(s)
 * @parent MsgWindow
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which Picture ID's to default to being attached
 * to Message Window. Can be updated with Plugin Commands.
 * @default ["61","62","63","64","65","66","67","68","69","70"]
 *
 * @param ContainerPosition:num
 * @text Container Position
 * @parent MsgWindow
 * @type select
 * @option 0 - Behind Window Skin
 * @value 0
 * @option 1 - In Front of Window Skin
 * @value 1
 * @option 2 - In Front of Window Text
 * @value 2
 * @desc Select the position of the picture container.
 * Pictures will still appear behind supplemental windows.
 * @default 1
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

const _0x31b08d=_0xe9aa;(function(_0x38640e,_0x15dd97){const _0x355f2b=_0xe9aa,_0x3cba55=_0x38640e();while(!![]){try{const _0x1bb622=-parseInt(_0x355f2b(0xb3))/0x1*(-parseInt(_0x355f2b(0xdd))/0x2)+-parseInt(_0x355f2b(0xc1))/0x3*(parseInt(_0x355f2b(0xa4))/0x4)+-parseInt(_0x355f2b(0xc8))/0x5*(-parseInt(_0x355f2b(0xb7))/0x6)+parseInt(_0x355f2b(0xa1))/0x7*(parseInt(_0x355f2b(0xd6))/0x8)+parseInt(_0x355f2b(0xbb))/0x9+-parseInt(_0x355f2b(0xd0))/0xa+-parseInt(_0x355f2b(0xf3))/0xb*(parseInt(_0x355f2b(0xd2))/0xc);if(_0x1bb622===_0x15dd97)break;else _0x3cba55['push'](_0x3cba55['shift']());}catch(_0x1ae885){_0x3cba55['push'](_0x3cba55['shift']());}}}(_0x2292,0x1bef8));var label='AttachedPictures',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x31b08d(0xef)](function(_0x3aa158){const _0x54b57f=_0x31b08d;return _0x3aa158[_0x54b57f(0xb9)]&&_0x3aa158[_0x54b57f(0xa5)][_0x54b57f(0x87)]('['+label+']');})[0x0];VisuMZ[label][_0x31b08d(0xb4)]=VisuMZ[label][_0x31b08d(0xb4)]||{},VisuMZ['ConvertParams']=function(_0x4f8346,_0x11fdef){const _0x4f4a34=_0x31b08d;for(const _0x2cdfed in _0x11fdef){if(_0x2cdfed[_0x4f4a34(0x83)](/(.*):(.*)/i)){const _0x36536a=String(RegExp['$1']),_0x5e2f7d=String(RegExp['$2'])[_0x4f4a34(0xd9)]()['trim']();let _0x274a96,_0x5b06a1,_0x26af3d;switch(_0x5e2f7d){case _0x4f4a34(0xb0):_0x274a96=_0x11fdef[_0x2cdfed]!==''?Number(_0x11fdef[_0x2cdfed]):0x0;break;case _0x4f4a34(0xd7):_0x5b06a1=_0x11fdef[_0x2cdfed]!==''?JSON['parse'](_0x11fdef[_0x2cdfed]):[],_0x274a96=_0x5b06a1[_0x4f4a34(0xf0)](_0x415ad2=>Number(_0x415ad2));break;case'EVAL':_0x274a96=_0x11fdef[_0x2cdfed]!==''?eval(_0x11fdef[_0x2cdfed]):null;break;case'ARRAYEVAL':_0x5b06a1=_0x11fdef[_0x2cdfed]!==''?JSON['parse'](_0x11fdef[_0x2cdfed]):[],_0x274a96=_0x5b06a1[_0x4f4a34(0xf0)](_0x576c32=>eval(_0x576c32));break;case'JSON':_0x274a96=_0x11fdef[_0x2cdfed]!==''?JSON[_0x4f4a34(0x8a)](_0x11fdef[_0x2cdfed]):'';break;case _0x4f4a34(0xa6):_0x5b06a1=_0x11fdef[_0x2cdfed]!==''?JSON[_0x4f4a34(0x8a)](_0x11fdef[_0x2cdfed]):[],_0x274a96=_0x5b06a1[_0x4f4a34(0xf0)](_0x41938c=>JSON['parse'](_0x41938c));break;case'FUNC':_0x274a96=_0x11fdef[_0x2cdfed]!==''?new Function(JSON[_0x4f4a34(0x8a)](_0x11fdef[_0x2cdfed])):new Function(_0x4f4a34(0xbc));break;case _0x4f4a34(0x96):_0x5b06a1=_0x11fdef[_0x2cdfed]!==''?JSON[_0x4f4a34(0x8a)](_0x11fdef[_0x2cdfed]):[],_0x274a96=_0x5b06a1[_0x4f4a34(0xf0)](_0x38379b=>new Function(JSON[_0x4f4a34(0x8a)](_0x38379b)));break;case _0x4f4a34(0x8d):_0x274a96=_0x11fdef[_0x2cdfed]!==''?String(_0x11fdef[_0x2cdfed]):'';break;case _0x4f4a34(0x8c):_0x5b06a1=_0x11fdef[_0x2cdfed]!==''?JSON[_0x4f4a34(0x8a)](_0x11fdef[_0x2cdfed]):[],_0x274a96=_0x5b06a1[_0x4f4a34(0xf0)](_0x2afd28=>String(_0x2afd28));break;case'STRUCT':_0x26af3d=_0x11fdef[_0x2cdfed]!==''?JSON[_0x4f4a34(0x8a)](_0x11fdef[_0x2cdfed]):{},_0x274a96=VisuMZ[_0x4f4a34(0x9e)]({},_0x26af3d);break;case'ARRAYSTRUCT':_0x5b06a1=_0x11fdef[_0x2cdfed]!==''?JSON['parse'](_0x11fdef[_0x2cdfed]):[],_0x274a96=_0x5b06a1['map'](_0x3cdb5b=>VisuMZ['ConvertParams']({},JSON[_0x4f4a34(0x8a)](_0x3cdb5b)));break;default:continue;}_0x4f8346[_0x36536a]=_0x274a96;}}return _0x4f8346;},(_0x5e99f0=>{const _0x27dc72=_0x31b08d,_0x1383c2=_0x5e99f0[_0x27dc72(0xbf)];for(const _0x4dc171 of dependencies){if(!Imported[_0x4dc171]){if(_0x27dc72(0x85)==='DajjG')_0x14e243=_0x41e8bf[_0x27dc72(0x8f)](_0x6b161e,_0x33402d);else{alert(_0x27dc72(0xc3)[_0x27dc72(0xdc)](_0x1383c2,_0x4dc171)),SceneManager['exit']();break;}}}const _0x382755=_0x5e99f0[_0x27dc72(0xa5)];if(_0x382755['match'](/\[Version[ ](.*?)\]/i)){if(_0x27dc72(0xae)!=='pbPmL'){const _0x2bbe21=Number(RegExp['$1']);_0x2bbe21!==VisuMZ[label]['version']&&(alert(_0x27dc72(0xbd)[_0x27dc72(0xdc)](_0x1383c2,_0x2bbe21)),SceneManager[_0x27dc72(0xe4)]());}else this[_0x27dc72(0x99)]();}if(_0x382755[_0x27dc72(0x83)](/\[Tier[ ](\d+)\]/i)){if('BhAFT'!=='BhAFT')_0x150d90[_0x27dc72(0xf6)]['Game_System_initialize']['call'](this),this[_0x27dc72(0x99)]();else{const _0x114712=Number(RegExp['$1']);_0x114712<tier?(alert(_0x27dc72(0x88)[_0x27dc72(0xdc)](_0x1383c2,_0x114712,tier)),SceneManager[_0x27dc72(0xe4)]()):_0x27dc72(0x8e)==='McoHi'?tier=Math[_0x27dc72(0x8f)](_0x114712,tier):this[_0x27dc72(0x99)]();}}VisuMZ[_0x27dc72(0x9e)](VisuMZ[label][_0x27dc72(0xb4)],_0x5e99f0[_0x27dc72(0x9f)]);})(pluginData),PluginManager[_0x31b08d(0xa7)](pluginData[_0x31b08d(0xbf)],_0x31b08d(0x93),_0x4c8370=>{const _0x36782a=_0x31b08d;VisuMZ[_0x36782a(0x9e)](_0x4c8370,_0x4c8370);const _0x16110b=_0x4c8370['PictureID'];for(const _0x1c64c2 of _0x16110b){if('SIDNk'===_0x36782a(0xc0))return this[_0x36782a(0xcc)]===_0x58818f&&this[_0x36782a(0x99)](),this[_0x36782a(0xcc)];else $gameSystem['addAttachedMessagePictureID'](_0x1c64c2);}}),PluginManager[_0x31b08d(0xa7)](pluginData[_0x31b08d(0xbf)],'MessageRemovePicture',_0x534af4=>{const _0x57a9b6=_0x31b08d;VisuMZ[_0x57a9b6(0x9e)](_0x534af4,_0x534af4);const _0xb4c846=_0x534af4[_0x57a9b6(0xc4)];for(const _0x3b925e of _0xb4c846){if(_0x57a9b6(0xb6)!==_0x57a9b6(0xb6)){if(this[_0x57a9b6(0xed)]!==_0x2a5317)return;if(this[_0x57a9b6(0xc2)])return;this['_pictureContainer']=new _0x3e749a(),this['addChild'](this[_0x57a9b6(0xc2)]);for(let _0x195261=0x1;_0x195261<=0x64;_0x195261++){this[_0x57a9b6(0xc2)]['addChild'](new _0x44f57d(_0x195261,this[_0x57a9b6(0xb1)]));}}else $gameSystem[_0x57a9b6(0xd5)](_0x3b925e);}}),PluginManager['registerCommand'](pluginData['name'],'PictureAddPicture',_0x487cde=>{const _0x2d568d=_0x31b08d;VisuMZ[_0x2d568d(0x9e)](_0x487cde,_0x487cde);const _0x7e0cc=_0x487cde['PictureID'],_0x26d24b=_0x487cde[_0x2d568d(0xaa)]['clamp'](0x1,0x64);for(const _0x393ff8 of _0x7e0cc){_0x2d568d(0x98)===_0x2d568d(0x98)?$gameSystem[_0x2d568d(0xac)](_0x393ff8,_0x26d24b):(_0x3e0d0d(_0x2d568d(0x88)[_0x2d568d(0xdc)](_0x5e7f00,_0x113126,_0x2220e3)),_0x532d60[_0x2d568d(0xe4)]());}}),PluginManager[_0x31b08d(0xa7)](pluginData[_0x31b08d(0xbf)],'PictureRemovePicture',_0x83af98=>{const _0x485a11=_0x31b08d;VisuMZ['ConvertParams'](_0x83af98,_0x83af98);const _0x183d05=_0x83af98[_0x485a11(0xc4)];for(const _0x54cd3e of _0x183d05){if(_0x485a11(0x95)===_0x485a11(0x95))$gameSystem[_0x485a11(0xcd)](_0x54cd3e);else{_0x3f4df1[_0x485a11(0x9e)](_0x37a8e9,_0x5b786a);const _0x165551=_0x24d311['PictureID'];for(const _0x2831f1 of _0x165551){_0x2c8c41['addAttachedMessagePictureID'](_0x2831f1);}}}}),VisuMZ[_0x31b08d(0xf6)][_0x31b08d(0xb5)]=Game_System[_0x31b08d(0xee)]['initialize'],Game_System[_0x31b08d(0xee)][_0x31b08d(0x84)]=function(){const _0x5f5d4d=_0x31b08d;VisuMZ[_0x5f5d4d(0xf6)][_0x5f5d4d(0xb5)]['call'](this),this['initAttachedPictures']();},Game_System[_0x31b08d(0xee)][_0x31b08d(0x99)]=function(){const _0xaa3b3f=_0x31b08d;this[_0xaa3b3f(0xa3)]=[],this['_attachedBasePictureTargets']={},this[_0xaa3b3f(0xcc)]=Window_Message['DEFAULT_MESSAGE_PICTURE_IDS']['clone']();},Game_System[_0x31b08d(0xee)][_0x31b08d(0xbe)]=function(_0x46303f){const _0x97036=_0x31b08d;return this[_0x97036(0xdf)](_0x46303f)||this[_0x97036(0xc9)](_0x46303f);},Game_System[_0x31b08d(0xee)][_0x31b08d(0xc7)]=function(){const _0x733db8=_0x31b08d;return this[_0x733db8(0xa3)]===undefined&&this[_0x733db8(0x99)](),this[_0x733db8(0xa3)];},Game_System[_0x31b08d(0xee)]['isAttachedBasePicture']=function(_0x34003c){const _0x256693=_0x31b08d;return this[_0x256693(0xa3)]===undefined&&(_0x256693(0xec)!==_0x256693(0xec)?this['initialize'](...arguments):this[_0x256693(0x99)]()),this[_0x256693(0xa3)]['includes'](_0x34003c);},Game_System[_0x31b08d(0xee)][_0x31b08d(0xd1)]=function(_0x593e67){const _0x5c0c24=_0x31b08d;return this[_0x5c0c24(0xeb)]===undefined&&this[_0x5c0c24(0x99)](),this[_0x5c0c24(0xeb)][_0x593e67];},Game_System[_0x31b08d(0xee)][_0x31b08d(0xac)]=function(_0x6288c7,_0x411b19){const _0x49664b=_0x31b08d;this[_0x49664b(0xa3)]===undefined&&(_0x49664b(0x86)===_0x49664b(0x90)?_0x489d9f[_0x49664b(0xda)][_0x49664b(0xc5)](this[_0x49664b(0xc2)]):this[_0x49664b(0x99)]()),!this[_0x49664b(0xa3)][_0x49664b(0x87)](_0x6288c7)&&(this['_attachedBasePictures'][_0x49664b(0xb2)](_0x6288c7),this['_attachedBasePictureTargets'][_0x6288c7]=_0x411b19),this[_0x49664b(0xd5)](_0x6288c7);},Game_System[_0x31b08d(0xee)]['removeAttachedBasePictureID']=function(_0x32a9d8){const _0x19d4ff=_0x31b08d;this[_0x19d4ff(0xa3)]===undefined&&this[_0x19d4ff(0x99)](),this[_0x19d4ff(0xa3)][_0x19d4ff(0x87)](_0x32a9d8)&&(this['_attachedBasePictures'][_0x19d4ff(0xa8)](_0x32a9d8),delete this[_0x19d4ff(0xeb)][_0x32a9d8]);},Game_System[_0x31b08d(0xee)][_0x31b08d(0xb8)]=function(_0x4e19d5){const _0x4bcb6c=_0x31b08d;if(this[_0x4bcb6c(0xa3)]){if('cjJhR'!==_0x4bcb6c(0x9a))return this['_attachedBasePictures'][_0x4bcb6c(0x91)](_0x5429fd=>this[_0x4bcb6c(0xeb)][_0x5429fd]===_0x4e19d5);else this[_0x4bcb6c(0xa3)]===_0xf6ff71&&this[_0x4bcb6c(0x99)](),!this[_0x4bcb6c(0xa3)][_0x4bcb6c(0x87)](_0x3de512)&&(this[_0x4bcb6c(0xa3)]['push'](_0x56cb99),this[_0x4bcb6c(0xeb)][_0x507591]=_0x52b4b7),this[_0x4bcb6c(0xd5)](_0x2ee882);}else return![];},Game_System[_0x31b08d(0xee)][_0x31b08d(0xe8)]=function(){const _0x4b4ed4=_0x31b08d;return this[_0x4b4ed4(0xcc)]===undefined&&this['initAttachedPictures'](),this['_attachedMessagePictures'];},Game_System[_0x31b08d(0xee)][_0x31b08d(0xc9)]=function(_0x59b241){const _0x3e8a22=_0x31b08d;return this[_0x3e8a22(0xcc)]===undefined&&(_0x3e8a22(0x9b)!=='EquaC'?this[_0x3e8a22(0x99)]():_0x12cceb[_0x3e8a22(0xcd)](_0x3d1ea3)),this[_0x3e8a22(0xcc)][_0x3e8a22(0x87)](_0x59b241);},Game_System[_0x31b08d(0xee)]['addAttachedMessagePictureID']=function(_0x1fdac7){const _0x32d2d7=_0x31b08d;this['_attachedMessagePictures']===undefined&&this['initAttachedPictures'](),!this['_attachedMessagePictures'][_0x32d2d7(0x87)](_0x1fdac7)&&(_0x32d2d7(0xe9)!==_0x32d2d7(0xa0)?this['_attachedMessagePictures'][_0x32d2d7(0xb2)](_0x1fdac7):!_0x5a78f0[_0x32d2d7(0xc9)](this['_pictureId'])?this['hideAttachedPicture']():_0x459510[_0x32d2d7(0xee)][_0x32d2d7(0xcf)][_0x32d2d7(0xf7)](this)),this[_0x32d2d7(0xcd)](_0x1fdac7);},Game_System[_0x31b08d(0xee)][_0x31b08d(0xd5)]=function(_0x23536a){const _0x312b14=_0x31b08d;if(this[_0x312b14(0xcc)]===undefined){if('qNuGH'!=='kDCSq')this['initAttachedPictures']();else return this[_0x312b14(0xcc)]===_0x489dd6&&this[_0x312b14(0x99)](),this[_0x312b14(0xcc)][_0x312b14(0x87)](_0x4bec8e);}if(this[_0x312b14(0xcc)][_0x312b14(0x87)](_0x23536a)){if(_0x312b14(0xce)===_0x312b14(0xce))this[_0x312b14(0xcc)]['remove'](_0x23536a);else return _0x6c9bfd[_0x312b14(0xb8)](this[_0x312b14(0xb1)]);}},VisuMZ['AttachedPictures'][_0x31b08d(0x9d)]=Sprite_Picture['prototype'][_0x31b08d(0x84)],Sprite_Picture[_0x31b08d(0xee)][_0x31b08d(0x84)]=function(_0x1712c2){const _0x37e9ff=_0x31b08d;VisuMZ[_0x37e9ff(0xf6)][_0x37e9ff(0x9d)][_0x37e9ff(0xf7)](this,_0x1712c2);if(this[_0x37e9ff(0xb8)]())this[_0x37e9ff(0xe0)]();},Sprite_Picture['prototype']['hasAttachedPicture']=function(){const _0x37ee29=_0x31b08d;return $gameSystem['hasAttachedPicture'](this[_0x37ee29(0xb1)]);},Sprite_Picture[_0x31b08d(0xee)]['createAttachedPictures']=function(){const _0x9905a6=_0x31b08d;if(this[_0x9905a6(0xed)]!==Sprite_Picture)return;if(this[_0x9905a6(0xc2)])return;this['_pictureContainer']=new Sprite(),this['addChild'](this[_0x9905a6(0xc2)]);for(let _0x25e170=0x1;_0x25e170<=0x64;_0x25e170++){this[_0x9905a6(0xc2)][_0x9905a6(0xd8)](new Sprite_AttachPicture(_0x25e170,this['_pictureId']));}},Sprite_Picture[_0x31b08d(0xee)][_0x31b08d(0xde)]=function(){const _0x3608d9=_0x31b08d;if(!this[_0x3608d9(0xc2)])return;this[_0x3608d9(0x97)](this[_0x3608d9(0xc2)]),this[_0x3608d9(0xc2)]=undefined;},VisuMZ[_0x31b08d(0xf6)]['Sprite_Picture_updateBitmap']=Sprite_Picture[_0x31b08d(0xee)][_0x31b08d(0xcf)],Sprite_Picture[_0x31b08d(0xee)][_0x31b08d(0xcf)]=function(){const _0x2ed79a=_0x31b08d;this['hasAttachedPicture']()?(this[_0x2ed79a(0xe0)](),Imported[_0x2ed79a(0xf4)]&&VisuMZ['PictureEffects'][_0x2ed79a(0xc5)](this[_0x2ed79a(0xc2)])):this[_0x2ed79a(0xde)](),this['constructor']===Sprite_Picture&&$gameSystem['isPictureAttached'](this[_0x2ed79a(0xb1)])?this[_0x2ed79a(0x82)]():VisuMZ[_0x2ed79a(0xf6)][_0x2ed79a(0xf5)][_0x2ed79a(0xf7)](this);},Sprite_Picture[_0x31b08d(0xee)]['hideAttachedPicture']=function(){const _0x5c9ae7=_0x31b08d;this[_0x5c9ae7(0xea)]=![],this['_pictureName']='';};function _0xe9aa(_0x2b1b47,_0x4e5ef9){const _0x2292e0=_0x2292();return _0xe9aa=function(_0xe9aa5c,_0x532f3f){_0xe9aa5c=_0xe9aa5c-0x82;let _0x24ea96=_0x2292e0[_0xe9aa5c];return _0x24ea96;},_0xe9aa(_0x2b1b47,_0x4e5ef9);}function Sprite_AttachPicture(){const _0x533bbb=_0x31b08d;this[_0x533bbb(0x84)](...arguments);}Sprite_AttachPicture[_0x31b08d(0xee)]=Object[_0x31b08d(0xad)](Sprite_Picture[_0x31b08d(0xee)]),Sprite_AttachPicture[_0x31b08d(0xee)]['constructor']=Sprite_AttachPicture,Sprite_AttachPicture[_0x31b08d(0xee)][_0x31b08d(0x84)]=function(_0x5bed14,_0x1419df){const _0x3ad645=_0x31b08d;this[_0x3ad645(0xe2)]=_0x1419df,Sprite_Picture[_0x3ad645(0xee)]['initialize'][_0x3ad645(0xf7)](this,_0x5bed14);},Sprite_AttachPicture[_0x31b08d(0xee)][_0x31b08d(0xcf)]=function(){const _0x577a80=_0x31b08d;if(this[_0x577a80(0xe6)]()){if(_0x577a80(0xa9)===_0x577a80(0xd4))return![];else Sprite_Picture[_0x577a80(0xee)]['updateBitmap']['call'](this);}else this[_0x577a80(0x82)]();},Sprite_AttachPicture[_0x31b08d(0xee)]['isUsingAttachedPicture']=function(){const _0x2021b8=_0x31b08d;if(!$gameSystem[_0x2021b8(0xdf)](this[_0x2021b8(0xb1)]))return![];if($gameSystem[_0x2021b8(0xd1)](this['_pictureId'])!==this[_0x2021b8(0xe2)])return![];return!![];},Sprite_AttachPicture[_0x31b08d(0xee)][_0x31b08d(0xc6)]=function(){return![];},Sprite_AttachPicture[_0x31b08d(0xee)]['isBeingTouched']=function(){return![];},Sprite_AttachPicture['prototype'][_0x31b08d(0xe5)]=function(){},Sprite_AttachPicture[_0x31b08d(0xee)]['onMouseExit']=function(){},Sprite_AttachPicture[_0x31b08d(0xee)][_0x31b08d(0xe7)]=function(){},Sprite_AttachPicture[_0x31b08d(0xee)][_0x31b08d(0xe1)]=function(){};function Sprite_MessagePicture(){const _0x2ac6e3=_0x31b08d;this[_0x2ac6e3(0x84)](...arguments);}function _0x2292(){const _0x3ee5d2=['Sprite_Picture_initialize','ConvertParams','parameters','Nsuho','309330zXsRdL','addChildToBack','_attachedBasePictures','4ugmSYD','description','ARRAYJSON','registerCommand','remove','xKMcN','TargetID','addChildAt','addAttachedBasePictureID','create','wvNSx','Window_Message_update','NUM','_pictureId','push','1UdwUJm','Settings','Game_System_initialize','dCFUA','6VHzWmc','hasAttachedPicture','status','_container','1266705xEFhZx','return\x200','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','isPictureAttached','name','LeVxq','198159bmHPHz','_pictureContainer','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','PictureID','SortByLayerZ','isClickEnabled','getAttachedBasePictures','204845qKXPVG','isAttachedMessagePicture','PictureIDs','createMessagePictureContainer','_attachedMessagePictures','removeAttachedBasePictureID','mVmmI','updateBitmap','1400020Kepppk','getAttachedBasePictureTarget','41676eQaQeF','update','eteHx','removeAttachedMessagePictureID','40GGTDru','ARRAYNUM','addChild','toUpperCase','PictureEffects','onMouseExit','format','384364aOdobD','removeAttachedPictures','isAttachedBasePicture','createAttachedPictures','onClick','_parentID','Nuidc','exit','onMouseEnter','isUsingAttachedPicture','onPress','getAttachedMessagePictures','tpfsa','visible','_attachedBasePictureTargets','gjOoJ','constructor','prototype','filter','map','DEFAULT_MESSAGE_PICTURE_IDS','indexOf','869nspTMq','VisuMZ_2_PictureEffects','Sprite_Picture_updateBitmap','AttachedPictures','call','hideAttachedPicture','match','initialize','RLLam','XUcjP','includes','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','MESSAGE_PICTURE_CONTAINER_LOCATION','parse','openness','ARRAYSTR','STR','McoHi','max','JRwnV','some','Window_Message_initialize','MessageAddPicture','updateMessagePictureContainerVisibility','fdNxb','ARRAYFUNC','removeChild','wPNUk','initAttachedPictures','UnkRE','PCCOn','children'];_0x2292=function(){return _0x3ee5d2;};return _0x2292();}Sprite_MessagePicture[_0x31b08d(0xee)]=Object['create'](Sprite_Picture[_0x31b08d(0xee)]),Sprite_MessagePicture['prototype'][_0x31b08d(0xed)]=Sprite_MessagePicture,Sprite_MessagePicture[_0x31b08d(0xee)]['updateBitmap']=function(){const _0x263416=_0x31b08d;!$gameSystem['isAttachedMessagePicture'](this[_0x263416(0xb1)])?this['hideAttachedPicture']():Sprite_Picture['prototype'][_0x263416(0xcf)]['call'](this);},Sprite_MessagePicture['prototype']['isClickEnabled']=function(){return![];},Sprite_MessagePicture[_0x31b08d(0xee)]['isBeingTouched']=function(){return![];},Sprite_MessagePicture[_0x31b08d(0xee)][_0x31b08d(0xe5)]=function(){},Sprite_MessagePicture[_0x31b08d(0xee)][_0x31b08d(0xdb)]=function(){},Sprite_MessagePicture['prototype'][_0x31b08d(0xe7)]=function(){},Sprite_MessagePicture[_0x31b08d(0xee)][_0x31b08d(0xe1)]=function(){},Window_Message[_0x31b08d(0xf1)]=VisuMZ['AttachedPictures']['Settings'][_0x31b08d(0xca)],Window_Message[_0x31b08d(0x89)]=VisuMZ[_0x31b08d(0xf6)][_0x31b08d(0xb4)]['ContainerPosition'],VisuMZ[_0x31b08d(0xf6)][_0x31b08d(0x92)]=Window_Message[_0x31b08d(0xee)][_0x31b08d(0x84)],Window_Message['prototype'][_0x31b08d(0x84)]=function(_0x2c6896){const _0x4ecf70=_0x31b08d;VisuMZ['AttachedPictures'][_0x4ecf70(0x92)][_0x4ecf70(0xf7)](this,_0x2c6896),this[_0x4ecf70(0xcb)]();},Window_Message[_0x31b08d(0xee)]['createMessagePictureContainer']=function(){const _0x19cc80=_0x31b08d;this[_0x19cc80(0xc2)]=new Sprite();switch(Window_Message[_0x19cc80(0x89)]){case 0x0:const _0x2b9598=this[_0x19cc80(0x9c)][_0x19cc80(0xf2)](this[_0x19cc80(0xba)]);this[_0x19cc80(0xab)](this[_0x19cc80(0xc2)],_0x2b9598);break;case 0x1:this[_0x19cc80(0xa2)](this['_pictureContainer']);break;default:this[_0x19cc80(0xd8)](this['_pictureContainer']);break;}for(let _0x63f4bf=0x1;_0x63f4bf<=0x64;_0x63f4bf++){this[_0x19cc80(0xc2)]['addChild'](new Sprite_MessagePicture(_0x63f4bf));}},VisuMZ[_0x31b08d(0xf6)][_0x31b08d(0xaf)]=Window_Message['prototype'][_0x31b08d(0xd3)],Window_Message['prototype'][_0x31b08d(0xd3)]=function(){const _0x463f64=_0x31b08d;VisuMZ[_0x463f64(0xf6)][_0x463f64(0xaf)][_0x463f64(0xf7)](this),this[_0x463f64(0x94)]();},Window_Message[_0x31b08d(0xee)][_0x31b08d(0x94)]=function(){const _0x56c093=_0x31b08d;if(!this['_pictureContainer'])return;this['_pictureContainer'][_0x56c093(0xea)]=this[_0x56c093(0x8b)]>=0xff,Imported['VisuMZ_2_PictureEffects']&&(_0x56c093(0xe3)!==_0x56c093(0xe3)?(_0x176aa9[_0x56c093(0xf6)][_0x56c093(0xaf)][_0x56c093(0xf7)](this),this[_0x56c093(0x94)]()):VisuMZ[_0x56c093(0xda)]['SortByLayerZ'](this[_0x56c093(0xc2)]));};