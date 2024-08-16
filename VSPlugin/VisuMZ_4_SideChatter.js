//=============================================================================
// VisuStella MZ - Side Chatter
// VisuMZ_4_SideChatter.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_SideChatter = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SideChatter = VisuMZ.SideChatter || {};
VisuMZ.SideChatter.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.01] [SideChatter]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Side_Chatter_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you to create dialogue that appears on the side of the
 * screen without interrupting gameplay. These can be accompanied by sound (and
 * thus, voice acting if desired). After a while, the side chatter that appears
 * on the side will fade out.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Add in desired text to the side chatter you want displayed.
 * * Insert face graphics for the side chatter entries.
 * * Play sound effects (which also means voice acting) to side chatter.
 * * Side chatter can be delayed before appearing on the screen, giving a sense
 *   of timing without needing to setup wait commands.
 * * You can select which side of the screen the side chatter will appear on.
 *   Both are always available.
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
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Side Chatter Plugin Commands ===
 * 
 * ---
 *
 * SideChatterAdd
 * - Adds a side chatter entry.
 *
 *   Text:
 *   - What text do you wish to add to the side chatter?
 *   - Text codes are allowed.
 *
 *   Face Filename:
 *   - What face graphic do you wish to display in the side chatter?
 *   - Leave empty to not use.
 * 
 *     Face Index:
 *     - What is the index of the face graphic you wish to display?
 *     - Index values start at 0.
 *
 *   Sound Effect:
 *   - Filename of the sound effect played.
 *   - Leave empty for no sound effect.
 * 
 *     Volume:
 *     - Volume of the sound effect played.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played.
 * 
 *     Pan:
 *     - Pan of the sound effect played.
 *
 *   Delay:
 *   - Delay this side chatter from appearing in this many frames.
 *   - 60 frames = 1 second.
 *   - 0 for instant.
 *
 *   Screen Side:
 *   - Which side of the screen do you wish to add the Side Chatter to?
 *   - If Plugin Command is using "default" as its value, refer to whatever
 *     the setting is found in the Plugin Parameters.
 *
 * ---
 *
 * Side Chatter: Clear
 * - Clears Side Chatter.
 *
 *   Screen Side:
 *   - Which side of the screen do you wish to clear the Side Chatter from?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings related to the side chatter effects found in
 * this plugin. Adjust them to best fit your game.
 *
 * ---
 * 
 * General Settings
 * 
 *   Default Side:
 *   - Which side of the screen do you wish to add the Side Chatter to?
 *   - Only applies when the Plugin Command selects "default".
 *
 *   Auto-Clear:
 * 
 *     On Battle End:
 *     - Automatically clear battle-related side chatter at the end of battle?
 * 
 *     On Map Change:
 *     - Automatically clear battle-related side chatter when changing maps?
 * 
 *   Duration:
 * 
 *     Fade In Duration:
 *     - How many frames does a side chatter entry fade in?
 *     - 60 frames = 1 second.
 * 
 *     Fade Out Duration:
 *     - How many frames does a side chatter entry fade out?
 *     - 60 frames = 1 second.
 * 
 *     Stay Duration:
 *     - How many frames does a side chatter entry stay?
 *     - 60 frames = 1 second.
 * 
 *   Left-Side:
 * 
 *     Offset X:
 *     - Offsets the graphics x alignment from left side.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offsets the graphics y position from bottom.
 *     - Negative: up. Positive: down.
 * 
 *     Scale:
 *     - What scale will left-side chatter boxes be?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * 
 *     Spacing:
 *     - How many pixels of spacing are there between side chatter entries?
 * 
 *   Right-Side:
 * 
 *     Offset X:
 *     - Offsets the graphics x alignment from right side.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offsets the graphics y position from bottom.
 *     - Negative: up. Positive: down.
 * 
 *     Scale:
 *     - What scale will right-side chatter boxes be?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * 
 *     Spacing:
 *     - How many pixels of spacing are there between side chatter entries?
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
 * Version 1.01: September 14, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated Plugin Command help description.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > Default Side
 * *** Which side of the screen do you wish to add the Side Chatter to?
 * * Feature Update!
 * ** Plugin Command "Side Chatter: Add Entry" now has the "Screen Side"
 *    parameter defaulted to the "default" value, referencing the value used
 *    by the new Plugin Parameter.
 * 
 * Version 1.00 Official Release Date: September 1, 2023
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
 * @command SideChatterAdd
 * @text Side Chatter: Add Entry
 * @desc Adds a side chatter entry.
 *
 * @arg text:json
 * @text Text
 * @type note
 * @desc What text do you wish to add to the side chatter?
 * Text codes are allowed.
 * @default "Line1\nLine2\nLine3\nLine4"
 *
 * @arg faceName:str
 * @text Face Filename
 * @type file
 * @dir img/faces/
 * @require 1
 * @desc What face graphic do you wish to display in the side
 * chatter? Leave empty to not use.
 * @default 
 *
 * @arg faceIndex:num
 * @text Face Index
 * @parent faceName:str
 * @type number
 * @desc What is the index of the face graphic you wish to display?
 * Index values start at 0.
 * @default 0
 *
 * @arg sfxName:str
 * @text Sound Effect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * Leave empty for no sound effect.
 * @default Book1
 *
 * @arg sfxVolume:num
 * @text Volume
 * @parent sfxName:str
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @arg sfxPitch:num
 * @text Pitch
 * @parent sfxName:str
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @arg sfxPan:num
 * @text Pan
 * @parent sfxName:str
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @arg delay:eval
 * @text Delay
 * @desc Delay this side chatter from appearing in this many frames.
 * 60 frames = 1 second. 0 for instant.
 * @default 0
 *
 * @arg ScreenSide:str
 * @text Screen Side
 * @type select
 * @option default
 * @option -
 * @option left
 * @option right
 * @desc Which side of the screen do you wish to add the Side Chatter to?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SideChatterClear
 * @text Side Chatter: Clear
 * @desc Clears Side Chatter.
 *
 * @arg ScreenSide:str
 * @text Screen Side
 * @type select
 * @option left
 * @option right
 * @desc Which side of the screen do you wish to clear the Side Chatter from?
 * @default left
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
 * @param SideChatter
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ScreenSide:str
 * @text Default Side
 * @type select
 * @option left
 * @option right
 * @desc Which side of the screen do you wish to add the Side Chatter to?
 * @default left
 * 
 * @param AutoClear
 * @text Auto-Clear
 *
 * @param AutoClearBattleEnd:eval
 * @text On Battle End
 * @parent AutoClear
 * @type boolean
 * @on Auto-Clear
 * @off Don't Clear
 * @desc Automatically clear battle-related side chatter at the end of battle?
 * @default true
 *
 * @param AutoClearMapChange:eval
 * @text On Map Change
 * @parent AutoClear
 * @type boolean
 * @on Auto-Clear
 * @off Don't Clear
 * @desc Automatically clear battle-related side chatter when changing maps?
 * @default false
 * 
 * @param Duration
 *
 * @param fadeInDuration:num
 * @text Fade In Duration
 * @parent Duration
 * @desc How many frames does a side chatter entry fade in?
 * 60 frames = 1 second.
 * @default 20
 *
 * @param fadeOutDuration:num
 * @text Fade Out Duration
 * @parent Duration
 * @desc How many frames does a side chatter entry fade out?
 * 60 frames = 1 second.
 * @default 20
 *
 * @param stayDuration:num
 * @text Stay Duration
 * @parent Duration
 * @desc How many frames does a side chatter entry stay?
 * 60 frames = 1 second.
 * @default 600
 * 
 * @param LeftSide
 * @text Left-Side
 *
 * @param LeftSideOffsetX:num
 * @text Offset X
 * @parent LeftSide
 * @desc Offsets the graphics x alignment from left side.
 * Negative: left. Positive: right.
 * @default +4
 *
 * @param LeftSideOffsetY:num
 * @text Offset Y
 * @parent LeftSide
 * @desc Offsets the graphics y position from bottom.
 * Negative: up. Positive: down.
 * @default -168
 *
 * @param LeftSideScale:num
 * @text Scale
 * @parent LeftSide
 * @desc What scale will left-side chatter boxes be?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.60
 *
 * @param LeftSideSpacing:num
 * @text Spacing
 * @parent LeftSide
 * @desc How many pixels of spacing are there between
 * side chatter entries?
 * @default 8
 * 
 * @param RightSide
 * @text Right-Side
 *
 * @param RightSideOffsetX:num
 * @text Offset X
 * @parent RightSide
 * @desc Offsets the graphics x alignment from right side.
 * Negative: left. Positive: right.
 * @default -4
 *
 * @param RightSideOffsetY:num
 * @text Offset Y
 * @parent RightSide
 * @desc Offsets the graphics y position from bottom.
 * Negative: up. Positive: down.
 * @default -168
 *
 * @param RightSideScale:num
 * @text Scale
 * @parent RightSide
 * @desc What scale will right-side chatter boxes be?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.60
 *
 * @param RightSideSpacing:num
 * @text Spacing
 * @parent RightSide
 * @desc How many pixels of spacing are there between
 * side chatter entries?
 * @default 8
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

const _0x8934a9=_0x4ca6;function _0x4ca6(_0x4b4f67,_0x4cf1b8){const _0x422ca0=_0x422c();return _0x4ca6=function(_0x4ca66b,_0xff052c){_0x4ca66b=_0x4ca66b-0x141;let _0x2acce0=_0x422ca0[_0x4ca66b];return _0x2acce0;},_0x4ca6(_0x4b4f67,_0x4cf1b8);}(function(_0x1f6bb7,_0x2aab20){const _0x3c5bab=_0x4ca6,_0x320f3c=_0x1f6bb7();while(!![]){try{const _0x164903=parseInt(_0x3c5bab(0x192))/0x1*(-parseInt(_0x3c5bab(0x15d))/0x2)+parseInt(_0x3c5bab(0x1e8))/0x3+parseInt(_0x3c5bab(0x190))/0x4+-parseInt(_0x3c5bab(0x187))/0x5+parseInt(_0x3c5bab(0x1ad))/0x6+-parseInt(_0x3c5bab(0x141))/0x7+parseInt(_0x3c5bab(0x1d0))/0x8*(parseInt(_0x3c5bab(0x1c8))/0x9);if(_0x164903===_0x2aab20)break;else _0x320f3c['push'](_0x320f3c['shift']());}catch(_0x285684){_0x320f3c['push'](_0x320f3c['shift']());}}}(_0x422c,0xba1c3));var label=_0x8934a9(0x17e),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x1176cf){const _0x204680=_0x8934a9;return _0x1176cf[_0x204680(0x16e)]&&_0x1176cf['description'][_0x204680(0x193)]('['+label+']');})[0x0];VisuMZ[label][_0x8934a9(0x15b)]=VisuMZ[label][_0x8934a9(0x15b)]||{},VisuMZ[_0x8934a9(0x1ee)]=function(_0x18e486,_0x48a991){const _0x4023ae=_0x8934a9;for(const _0xdac47 in _0x48a991){if(_0xdac47['match'](/(.*):(.*)/i)){const _0x415235=String(RegExp['$1']),_0x35a2cf=String(RegExp['$2'])[_0x4023ae(0x1cb)]()['trim']();let _0x57b1ca,_0xbd21ef,_0x76fcd7;switch(_0x35a2cf){case _0x4023ae(0x160):_0x57b1ca=_0x48a991[_0xdac47]!==''?Number(_0x48a991[_0xdac47]):0x0;break;case _0x4023ae(0x1a5):_0xbd21ef=_0x48a991[_0xdac47]!==''?JSON[_0x4023ae(0x1e9)](_0x48a991[_0xdac47]):[],_0x57b1ca=_0xbd21ef[_0x4023ae(0x16f)](_0x5d814e=>Number(_0x5d814e));break;case _0x4023ae(0x153):_0x57b1ca=_0x48a991[_0xdac47]!==''?eval(_0x48a991[_0xdac47]):null;break;case'ARRAYEVAL':_0xbd21ef=_0x48a991[_0xdac47]!==''?JSON['parse'](_0x48a991[_0xdac47]):[],_0x57b1ca=_0xbd21ef[_0x4023ae(0x16f)](_0x2e6c88=>eval(_0x2e6c88));break;case _0x4023ae(0x1db):_0x57b1ca=_0x48a991[_0xdac47]!==''?JSON['parse'](_0x48a991[_0xdac47]):'';break;case _0x4023ae(0x169):_0xbd21ef=_0x48a991[_0xdac47]!==''?JSON['parse'](_0x48a991[_0xdac47]):[],_0x57b1ca=_0xbd21ef[_0x4023ae(0x16f)](_0x3abbd5=>JSON[_0x4023ae(0x1e9)](_0x3abbd5));break;case _0x4023ae(0x1c4):_0x57b1ca=_0x48a991[_0xdac47]!==''?new Function(JSON[_0x4023ae(0x1e9)](_0x48a991[_0xdac47])):new Function('return\x200');break;case _0x4023ae(0x18a):_0xbd21ef=_0x48a991[_0xdac47]!==''?JSON[_0x4023ae(0x1e9)](_0x48a991[_0xdac47]):[],_0x57b1ca=_0xbd21ef[_0x4023ae(0x16f)](_0x17c2d5=>new Function(JSON[_0x4023ae(0x1e9)](_0x17c2d5)));break;case _0x4023ae(0x1d9):_0x57b1ca=_0x48a991[_0xdac47]!==''?String(_0x48a991[_0xdac47]):'';break;case _0x4023ae(0x1bd):_0xbd21ef=_0x48a991[_0xdac47]!==''?JSON['parse'](_0x48a991[_0xdac47]):[],_0x57b1ca=_0xbd21ef['map'](_0x294a09=>String(_0x294a09));break;case'STRUCT':_0x76fcd7=_0x48a991[_0xdac47]!==''?JSON[_0x4023ae(0x1e9)](_0x48a991[_0xdac47]):{},_0x57b1ca=VisuMZ['ConvertParams']({},_0x76fcd7);break;case _0x4023ae(0x176):_0xbd21ef=_0x48a991[_0xdac47]!==''?JSON[_0x4023ae(0x1e9)](_0x48a991[_0xdac47]):[],_0x57b1ca=_0xbd21ef[_0x4023ae(0x16f)](_0x58e934=>VisuMZ[_0x4023ae(0x1ee)]({},JSON[_0x4023ae(0x1e9)](_0x58e934)));break;default:continue;}_0x18e486[_0x415235]=_0x57b1ca;}}return _0x18e486;},(_0x1e7762=>{const _0x253dae=_0x8934a9,_0x486df5=_0x1e7762[_0x253dae(0x1de)];for(const _0x24ea15 of dependencies){if(!Imported[_0x24ea15]){if(_0x253dae(0x185)!==_0x253dae(0x1b1)){alert(_0x253dae(0x1df)[_0x253dae(0x1e7)](_0x486df5,_0x24ea15)),SceneManager[_0x253dae(0x186)]();break;}else{const _0x16a436=_0x3c4fb2[_0x253dae(0x162)],_0xbe7155=this[_0x253dae(0x1e1)][_0x253dae(0x162)];this[_0x253dae(0x181)]=(_0x16a436-_0xbe7155)/(_0x16a436||0x1)*0xff;}}}const _0x13af42=_0x1e7762[_0x253dae(0x1d6)];if(_0x13af42[_0x253dae(0x1b2)](/\[Version[ ](.*?)\]/i)){const _0x4a4d8e=Number(RegExp['$1']);_0x4a4d8e!==VisuMZ[label][_0x253dae(0x168)]&&(alert(_0x253dae(0x1c6)[_0x253dae(0x1e7)](_0x486df5,_0x4a4d8e)),SceneManager[_0x253dae(0x186)]());}if(_0x13af42[_0x253dae(0x1b2)](/\[Tier[ ](\d+)\]/i)){const _0x155363=Number(RegExp['$1']);_0x155363<tier?(alert(_0x253dae(0x1e5)[_0x253dae(0x1e7)](_0x486df5,_0x155363,tier)),SceneManager[_0x253dae(0x186)]()):tier=Math[_0x253dae(0x1be)](_0x155363,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x253dae(0x15b)],_0x1e7762[_0x253dae(0x19c)]);})(pluginData),PluginManager[_0x8934a9(0x1eb)](pluginData[_0x8934a9(0x1de)],'SideChatterAdd',_0x284246=>{const _0x195cb7=_0x8934a9;VisuMZ[_0x195cb7(0x1ee)](_0x284246,_0x284246);const _0x3a4592=_0x284246[_0x195cb7(0x1b0)]||'',_0x523953=_0x284246[_0x195cb7(0x17c)]||'',_0x2a8bd6=_0x284246[_0x195cb7(0x1b4)]||0x0,_0x19629d={'name':_0x284246[_0x195cb7(0x189)]||'','volume':_0x284246[_0x195cb7(0x151)]||0x0,'pitch':_0x284246[_0x195cb7(0x17f)]||0x0,'pan':_0x284246['sfxPan']||0x0},_0x52ae9e=_0x284246[_0x195cb7(0x1e4)]||0x0;let _0x5eebbe=![];const _0x1f5720=_0x284246[_0x195cb7(0x195)];switch(_0x1f5720['toLowerCase']()[_0x195cb7(0x166)]()){case _0x195cb7(0x161):_0x5eebbe=!![];break;case _0x195cb7(0x15a):_0x5eebbe=![];break;default:_0x5eebbe=Game_Screen[_0x195cb7(0x18b)][_0x195cb7(0x17d)]===_0x195cb7(0x161);break;}$gameScreen[_0x195cb7(0x1b6)](_0x3a4592,_0x523953,_0x2a8bd6,_0x19629d,_0x52ae9e,_0x5eebbe);}),PluginManager[_0x8934a9(0x1eb)](pluginData['name'],_0x8934a9(0x1cd),_0x37a4c7=>{const _0x178fbb=_0x8934a9;VisuMZ[_0x178fbb(0x1ee)](_0x37a4c7,_0x37a4c7);const _0x34d6cf=_0x37a4c7[_0x178fbb(0x195)]===_0x178fbb(0x161);$gameScreen[_0x178fbb(0x146)](_0x34d6cf);}),BattleManager[_0x8934a9(0x18b)]={'clearOnEnd':VisuMZ[_0x8934a9(0x17e)][_0x8934a9(0x15b)]['AutoClearBattleEnd']??!![]},VisuMZ[_0x8934a9(0x17e)][_0x8934a9(0x1d4)]=BattleManager['endBattle'],BattleManager[_0x8934a9(0x163)]=function(_0x5caa3a){const _0x42a4d6=_0x8934a9;VisuMZ[_0x42a4d6(0x17e)][_0x42a4d6(0x1d4)]['call'](this,_0x5caa3a),BattleManager['SIDE_CHATTER_SETTINGS'][_0x42a4d6(0x1c2)]&&this[_0x42a4d6(0x144)]();},BattleManager['endBattleSideChatter']=function(){const _0x3e0f44=_0x8934a9;$gameScreen[_0x3e0f44(0x146)](!![]),$gameScreen[_0x3e0f44(0x146)](![]);},Game_Screen['SIDE_CHATTER_SETTINGS']={'defaultSide':VisuMZ[_0x8934a9(0x17e)]['Settings']['ScreenSide']??_0x8934a9(0x161),'fadeInDuration':VisuMZ[_0x8934a9(0x17e)][_0x8934a9(0x15b)][_0x8934a9(0x162)]??0x14,'fadeOutDuration':VisuMZ[_0x8934a9(0x17e)][_0x8934a9(0x15b)][_0x8934a9(0x1c3)]??0x14,'duration':VisuMZ[_0x8934a9(0x17e)][_0x8934a9(0x15b)][_0x8934a9(0x197)]??0x258},Game_Screen[_0x8934a9(0x178)][_0x8934a9(0x19e)]=function(){const _0x260e99=_0x8934a9;this[_0x260e99(0x14c)]={'left':[],'right':[]},this[_0x260e99(0x177)]={'left':[],'right':[]};},Game_Screen[_0x8934a9(0x178)][_0x8934a9(0x1c9)]=function(_0x4efe67){const _0x4ce12d=_0x8934a9;if(this['_sideChatterMap']===undefined)this[_0x4ce12d(0x19e)]();const _0x58d4fb=_0x4efe67?_0x4ce12d(0x161):_0x4ce12d(0x15a);if($gameParty[_0x4ce12d(0x1bc)]()){if(_0x4ce12d(0x172)===_0x4ce12d(0x1b7)){const _0x368ae0=_0x58fcb7[_0x4ce12d(0x1d5)]();this[_0x4ce12d(0x175)](_0x368ae0);}else return this[_0x4ce12d(0x177)][_0x58d4fb];}else return this[_0x4ce12d(0x14c)][_0x58d4fb];},Game_Screen[_0x8934a9(0x178)][_0x8934a9(0x146)]=function(_0x42bc61){const _0x52e7d1=_0x8934a9,_0x5c5293=this[_0x52e7d1(0x1c9)](_0x42bc61);while(_0x5c5293['length']){_0x5c5293['pop']();}},Game_Screen[_0x8934a9(0x178)][_0x8934a9(0x1b6)]=function(_0x2cb4cd,_0x355c58,_0x169f4e,_0x331c9e,_0x24ea1d,_0x158882){const _0x2ee210=_0x8934a9;_0x2cb4cd=VisuMZ[_0x2ee210(0x17e)][_0x2ee210(0x16c)](_0x2cb4cd);const _0x20e81c=Game_Screen[_0x2ee210(0x18b)],_0x855e8b={'text':_0x2cb4cd,'faceName':_0x355c58||'','faceIndex':_0x169f4e||0x0,'sound':_0x331c9e||null,'delay':_0x24ea1d,'stayDuration':_0x20e81c[_0x2ee210(0x164)],'fadeInDuration':_0x20e81c['fadeInDuration'],'fadeOutDuration':_0x20e81c[_0x2ee210(0x1c3)],'stage':''};stage=_0x24ea1d>0x0?_0x2ee210(0x1e4):'fadeIn';const _0x1f158b=this['sideChatter'](_0x158882);if(_0x1f158b['length']>0x0){if('mjjAn'!==_0x2ee210(0x16b))this[_0x2ee210(0x181)]=0xff;else{const _0x1ed93d=_0x1f158b[_0x1f158b[_0x2ee210(0x183)]-0x1];if(_0x1ed93d['text']===_0x2cb4cd&&_0x1ed93d['faceName']===_0x355c58&&_0x1ed93d[_0x2ee210(0x1b4)]===_0x169f4e)return;}}_0x1f158b[_0x2ee210(0x173)](_0x855e8b);},VisuMZ[_0x8934a9(0x17e)][_0x8934a9(0x16c)]=function(_0x36e239){const _0x4be10b=_0x8934a9;Imported[_0x4be10b(0x1a0)]&&(_0x4be10b(0x1dc)!==_0x4be10b(0x1dc)?(_0x7a889e['SideChatter'][_0x4be10b(0x143)][_0x4be10b(0x18e)](this),this[_0x4be10b(0x147)]()):(_0x36e239=_0x36e239[_0x4be10b(0x199)](_0x4be10b(0x1da),Window_Base[_0x4be10b(0x178)][_0x4be10b(0x1b8)](![])),_0x36e239=_0x36e239['replace'](_0x4be10b(0x19b),Window_Base[_0x4be10b(0x178)]['lastGainedObjectQuantity']()),_0x36e239=_0x36e239[_0x4be10b(0x199)](_0x4be10b(0x1cf),Window_Base[_0x4be10b(0x178)][_0x4be10b(0x1b8)](!![]))));for(;;){if(_0x36e239[_0x4be10b(0x1b2)](/\\V\[(\d+)\]/gi))_0x36e239=_0x36e239[_0x4be10b(0x199)](/\\V\[(\d+)\]/gi,(_0x4c3260,_0x4c1289)=>$gameVariables[_0x4be10b(0x17a)](parseInt(_0x4c1289)));else{if(_0x4be10b(0x1c0)===_0x4be10b(0x155)){const _0x1964a7=_0x8554bc[_0x4be10b(0x18b)][_0x4be10b(0x162)],_0x2c742a=this['_data'][_0x4be10b(0x162)];if(this[_0x4be10b(0x1d2)]){const _0x41f78d=_0x2c742a/(_0x1964a7||0x1);this['x']=(_0x2f2847+_0x324b75)*_0x41f78d;}else{const _0x35d0c5=(_0x1964a7-_0x2c742a)/(_0x1964a7||0x1);this['x']=(_0x4d0047+_0x547d97)*_0x35d0c5;}}else break;}}return _0x36e239;},VisuMZ[_0x8934a9(0x17e)][_0x8934a9(0x156)]=Game_Screen[_0x8934a9(0x178)][_0x8934a9(0x1b9)],Game_Screen[_0x8934a9(0x178)][_0x8934a9(0x1b9)]=function(){const _0xe399a4=_0x8934a9;VisuMZ[_0xe399a4(0x17e)][_0xe399a4(0x156)][_0xe399a4(0x18e)](this),this[_0xe399a4(0x1cc)](!![]),this[_0xe399a4(0x1cc)](![]);},Game_Screen[_0x8934a9(0x178)][_0x8934a9(0x1cc)]=function(_0x1ca0e2){const _0x403745=_0x8934a9,_0x5b0f6b=this[_0x403745(0x1c9)](_0x1ca0e2),_0x3ff05b=[];for(const _0x359286 of _0x5b0f6b){if('oQcQV'!=='oQcQV'){_0x452e5e[_0x403745(0x178)][_0x403745(0x1b9)][_0x403745(0x18e)](this);if(!this['_dummyWindow'])return;this['checkNewEntries'](!![]),this['removeOldEntries']();}else VisuMZ[_0x403745(0x17e)][_0x403745(0x159)](_0x359286),_0x359286&&_0x359286[_0x403745(0x150)]===_0x403745(0x18f)&&_0x3ff05b[_0x403745(0x173)](_0x359286);}for(const _0x531145 of _0x3ff05b){_0x5b0f6b[_0x403745(0x1c1)](_0x531145);}},VisuMZ['SideChatter'][_0x8934a9(0x159)]=function(_0x31b526){const _0x5b49ab=_0x8934a9;if(_0x31b526[_0x5b49ab(0x1e4)]>0x0)_0x31b526[_0x5b49ab(0x1e4)]--,_0x31b526['stage']='delay';else{if(_0x31b526[_0x5b49ab(0x162)]>0x0)_0x31b526[_0x5b49ab(0x162)]--,_0x31b526[_0x5b49ab(0x150)]=_0x5b49ab(0x1a6);else{if(_0x31b526[_0x5b49ab(0x197)]>0x0)_0x5b49ab(0x1bf)===_0x5b49ab(0x1bf)?(_0x31b526[_0x5b49ab(0x197)]--,_0x31b526[_0x5b49ab(0x150)]=_0x5b49ab(0x1dd)):(_0x1b3f47['fadeOutDuration']--,_0xd8d06b[_0x5b49ab(0x150)]=_0x5b49ab(0x1d1));else _0x31b526['fadeOutDuration']>0x0?(_0x31b526[_0x5b49ab(0x1c3)]--,_0x31b526[_0x5b49ab(0x150)]='fadeOut'):_0x31b526[_0x5b49ab(0x150)]=_0x5b49ab(0x18f);}}},Game_Player['SIDE_CHATTER_SETTINGS']={'clearOnTransfer':VisuMZ['SideChatter'][_0x8934a9(0x15b)][_0x8934a9(0x1a7)]??![]},VisuMZ['SideChatter'][_0x8934a9(0x152)]=Game_Player[_0x8934a9(0x178)][_0x8934a9(0x182)],Game_Player[_0x8934a9(0x178)][_0x8934a9(0x182)]=function(){const _0x73488b=_0x8934a9;Game_Player[_0x73488b(0x18b)][_0x73488b(0x1aa)]&&this[_0x73488b(0x1ca)]()&&((this[_0x73488b(0x1ac)]!==$gameMap['mapId']()||this['_needsMapReload'])&&this[_0x73488b(0x184)]()),VisuMZ[_0x73488b(0x17e)][_0x73488b(0x152)][_0x73488b(0x18e)](this);},Game_Player[_0x8934a9(0x178)]['clearTransferSideChatter']=function(){const _0x19f272=_0x8934a9;$gameScreen['clearSideChatter'](!![]),$gameScreen[_0x19f272(0x146)](![]);},VisuMZ['SideChatter'][_0x8934a9(0x143)]=Scene_Map['prototype']['createSpriteset'],Scene_Map[_0x8934a9(0x178)][_0x8934a9(0x194)]=function(){const _0x16a3e8=_0x8934a9;VisuMZ['SideChatter'][_0x16a3e8(0x143)][_0x16a3e8(0x18e)](this),this[_0x16a3e8(0x147)]();},VisuMZ['SideChatter'][_0x8934a9(0x1ce)]=Scene_Battle[_0x8934a9(0x178)]['createSpriteset'],Scene_Battle['prototype'][_0x8934a9(0x194)]=function(){const _0x7f98c=_0x8934a9;VisuMZ[_0x7f98c(0x17e)]['Scene_Battle_createSpriteset'][_0x7f98c(0x18e)](this),this[_0x7f98c(0x147)]();},Scene_Message['prototype'][_0x8934a9(0x147)]=function(){const _0x568743=_0x8934a9;this[_0x568743(0x165)]={'left':new Sprite_SideChatterContainer(!![]),'right':new Sprite_SideChatterContainer(![])},this[_0x568743(0x1e6)](this[_0x568743(0x165)][_0x568743(0x161)]),this[_0x568743(0x1e6)](this[_0x568743(0x165)][_0x568743(0x15a)]);};function Sprite_SideChatterContainer(){const _0x2d1a34=_0x8934a9;this[_0x2d1a34(0x1d7)](...arguments);}Sprite_SideChatterContainer['prototype']=Object[_0x8934a9(0x198)](Sprite[_0x8934a9(0x178)]),Sprite_SideChatterContainer[_0x8934a9(0x178)]['constructor']=Sprite_SideChatterContainer,Sprite_SideChatterContainer[_0x8934a9(0x158)]={'offsetLeft':{'x':VisuMZ[_0x8934a9(0x17e)][_0x8934a9(0x15b)][_0x8934a9(0x1d3)]??0x4,'y':VisuMZ[_0x8934a9(0x17e)]['Settings'][_0x8934a9(0x1c7)]??-0xa8},'offsetRight':{'x':VisuMZ[_0x8934a9(0x17e)][_0x8934a9(0x15b)][_0x8934a9(0x1ab)]??-0x4,'y':VisuMZ['SideChatter'][_0x8934a9(0x15b)][_0x8934a9(0x142)]??-0xa8},'scale':{'left':VisuMZ[_0x8934a9(0x17e)]['Settings'][_0x8934a9(0x167)]??0.6,'right':VisuMZ[_0x8934a9(0x17e)]['Settings'][_0x8934a9(0x145)]??0.6},'spacing':{'left':VisuMZ[_0x8934a9(0x17e)][_0x8934a9(0x15b)][_0x8934a9(0x15c)]??0x8,'right':VisuMZ['SideChatter'][_0x8934a9(0x15b)][_0x8934a9(0x14f)]??0x8}},Sprite_SideChatterContainer[_0x8934a9(0x178)]['initialize']=function(_0x9ac395){const _0x4103eb=_0x8934a9;this[_0x4103eb(0x1d2)]=_0x9ac395,Sprite[_0x4103eb(0x178)][_0x4103eb(0x1d7)][_0x4103eb(0x18e)](this),this['initMembers'](),this[_0x4103eb(0x149)](),this[_0x4103eb(0x18d)](![]);},Sprite_SideChatterContainer[_0x8934a9(0x178)][_0x8934a9(0x1e2)]=function(){const _0x4f48f9=_0x8934a9;this[_0x4f48f9(0x17b)]['x']=0.5,this[_0x4f48f9(0x17b)]['y']=0x1,this['x']=this['isLeftSide']()?0x0:Graphics['width'],this['y']=Graphics[_0x4f48f9(0x1a1)];const _0x5ca8b5=this[_0x4f48f9(0x14a)]()?_0x4f48f9(0x16a):_0x4f48f9(0x1e3),_0x487f95=Sprite_SideChatterContainer['SETTINGS'][_0x5ca8b5];this['x']+=_0x487f95['x'],this['y']+=_0x487f95['y'];},Sprite_SideChatterContainer[_0x8934a9(0x178)][_0x8934a9(0x149)]=function(){const _0x231f8f=_0x8934a9,_0x593d18=new Rectangle(0x0,0x0,Graphics[_0x231f8f(0x180)],Graphics[_0x231f8f(0x1a1)]);this[_0x231f8f(0x1ed)]=new Window_Base(_0x593d18);},Sprite_SideChatterContainer['prototype'][_0x8934a9(0x14a)]=function(){return this['_leftSide'];},Sprite_SideChatterContainer[_0x8934a9(0x178)][_0x8934a9(0x1b9)]=function(){const _0x91c9d0=_0x8934a9;Sprite[_0x91c9d0(0x178)][_0x91c9d0(0x1b9)][_0x91c9d0(0x18e)](this);if(!this[_0x91c9d0(0x1ed)])return;this[_0x91c9d0(0x18d)](!![]),this[_0x91c9d0(0x191)]();},Sprite_SideChatterContainer[_0x8934a9(0x178)][_0x8934a9(0x18d)]=function(_0x2fdd08){const _0x42b7b1=_0x8934a9,_0x436884=$gameScreen[_0x42b7b1(0x1c9)](this[_0x42b7b1(0x1d2)]);if(_0x436884['length']<=0x0)return;for(const _0x53df46 of _0x436884){if(_0x42b7b1(0x1af)===_0x42b7b1(0x1af)){if(!_0x53df46)continue;if(_0x53df46[_0x42b7b1(0x150)]===_0x42b7b1(0x1e4))continue;if(this[_0x42b7b1(0x1a4)](_0x53df46))continue;this['createNewEntry'](_0x53df46,_0x2fdd08);}else{if(!this[_0x42b7b1(0x1e1)])return;if(this[_0x42b7b1(0x1e1)][_0x42b7b1(0x1b0)]==='')return;const _0x517f80=this[_0x42b7b1(0x1e1)][_0x42b7b1(0x17c)]!=='',_0x4fdc65=_0x517f80?_0x5a7449[_0x42b7b1(0x1a9)]+0x14:0x4,_0x5932b2=0x0;this[_0x42b7b1(0x14e)](this['_data'][_0x42b7b1(0x1b0)],_0x4fdc65,_0x5932b2);}}},Sprite_SideChatterContainer['prototype']['isEntryMade']=function(_0x2b8c16){const _0x721e42=_0x8934a9;return this[_0x721e42(0x1ae)][_0x721e42(0x154)](_0x441be5=>_0x441be5[_0x721e42(0x1e1)]===_0x2b8c16);},Sprite_SideChatterContainer[_0x8934a9(0x178)][_0x8934a9(0x1ba)]=function(_0x1b41e1,_0x32e37d){const _0x18312f=_0x8934a9,_0x3f9894=$gameSystem['windowPadding']()*0x2,_0x5a217d=this[_0x18312f(0x1ed)]['textSizeEx'](_0x1b41e1[_0x18312f(0x1b0)]);let _0x2c2276=_0x5a217d['width']+_0x3f9894+0x8,_0x53c9a3=_0x5a217d[_0x18312f(0x1a1)]+_0x3f9894;_0x1b41e1[_0x18312f(0x17c)]!==''&&(_0x18312f(0x1b3)!=='ABrmw'?(this['_sideChatterContainers']={'left':new _0x109933(!![]),'right':new _0x903110(![])},this[_0x18312f(0x1e6)](this[_0x18312f(0x165)]['left']),this[_0x18312f(0x1e6)](this[_0x18312f(0x165)][_0x18312f(0x15a)])):(_0x2c2276+=ImageManager[_0x18312f(0x1a9)]+0x14,_0x53c9a3=Math[_0x18312f(0x1be)](ImageManager[_0x18312f(0x1a9)]+_0x3f9894,_0x53c9a3)));const _0x3f18f2=this[_0x18312f(0x14a)]()?'left':_0x18312f(0x15a),_0x693b43=Sprite_SideChatterContainer[_0x18312f(0x158)][_0x18312f(0x179)][_0x3f18f2],_0x175375=new Rectangle(0x0,0x0,_0x2c2276,_0x53c9a3),_0x5caa5c=new Window_SideChatter(_0x175375,this[_0x18312f(0x14a)](),_0x1b41e1);_0x5caa5c[_0x18312f(0x179)]['x']=_0x5caa5c['scale']['y']=_0x693b43,this[_0x18312f(0x1e6)](_0x5caa5c);_0x32e37d&&_0x1b41e1[_0x18312f(0x171)]&&_0x1b41e1['sound'][_0x18312f(0x1de)]!==''&&AudioManager[_0x18312f(0x1a2)](_0x1b41e1[_0x18312f(0x171)]);const _0x3d17b6=Sprite_SideChatterContainer[_0x18312f(0x158)][_0x18312f(0x14d)][_0x3f18f2],_0x43fc03=Math[_0x18312f(0x19f)](_0x53c9a3*_0x693b43)+_0x3d17b6;this[_0x18312f(0x15f)](_0x43fc03);},Sprite_SideChatterContainer[_0x8934a9(0x178)][_0x8934a9(0x15f)]=function(_0x47adc5){const _0x24705c=_0x8934a9;for(const _0x697c07 of this[_0x24705c(0x1ae)]){_0x697c07['y']-=_0x47adc5;};},Sprite_SideChatterContainer[_0x8934a9(0x178)][_0x8934a9(0x191)]=function(){const _0x87b003=_0x8934a9;if(this[_0x87b003(0x1ae)]['length']<=0x0)return;const _0x30a2a2=[],_0x86083b=$gameScreen[_0x87b003(0x1c9)](this['isLeftSide']());for(const _0x2716c6 of this[_0x87b003(0x1ae)]){const _0x4ae9c3=_0x2716c6[_0x87b003(0x1e1)];if(_0x86083b[_0x87b003(0x193)](_0x4ae9c3))continue;_0x30a2a2[_0x87b003(0x173)](_0x2716c6);}while(_0x30a2a2['length']){if(_0x87b003(0x1c5)===_0x87b003(0x1c5)){const _0xaf7d06=_0x30a2a2[_0x87b003(0x1d5)]();this['removeChild'](_0xaf7d06);}else this['endBattleSideChatter']();}};function Window_SideChatter(){const _0x40af5f=_0x8934a9;this[_0x40af5f(0x1d7)](...arguments);}function _0x422c(){const _0x1b22cc=['69416DZczUj','prepareFace','shiftAllChildrenUpward','NUM','left','fadeInDuration','endBattle','duration','_sideChatterContainers','trim','LeftSideScale','version','ARRAYJSON','offsetLeft','mjjAn','ConvertSideChatterText','ayryI','status','map','updateOpacity','sound','ENHIm','push','refresh','removeChild','ARRAYSTRUCT','_sideChatterBattle','prototype','scale','value','anchor','faceName','defaultSide','SideChatter','sfxPitch','width','opacity','performTransfer','length','clearTransferSideChatter','zAXAJ','exit','3097810ColdSg','updatePositionX','sfxName','ARRAYFUNC','SIDE_CHATTER_SETTINGS','min','checkNewEntries','call','end','5353808vbuFSh','removeOldEntries','31ZUaeQv','includes','createSpriteset','ScreenSide','contents','stayDuration','create','replace','floor','\x5cLastGainObjQuantity','parameters','jgncC','initSideChatter','ceil','VisuMZ_1_MessageCore','height','playSe','constructor','isEntryMade','ARRAYNUM','fadeIn','AutoClearMapChange','drawText','faceWidth','clearOnTransfer','RightSideOffsetX','_newMapId','892068RiEXKG','children','ISjxg','text','TBulA','match','ABrmw','faceIndex','bind','addSideChatter','ylfxc','lastGainedObjectName','update','createNewEntry','clear','inBattle','ARRAYSTR','max','sYWgO','machN','remove','clearOnEnd','fadeOutDuration','FUNC','PXEYZ','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','LeftSideOffsetY','9cKTSnZ','sideChatter','isTransferring','toUpperCase','updateSideChatter','SideChatterClear','Scene_Battle_createSpriteset','\x5cLastGainObj','17497360hqRaSc','fadeOut','_leftSide','LeftSideOffsetX','BattleManager_endBattle','pop','description','initialize','drawFace','STR','\x5cLastGainObjName','JSON','qBdFU','stay','name','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','contentsOpacity','_data','initMembers','offsetRight','delay','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','addChild','format','876183Aswssp','parse','yIney','registerCommand','blt','_dummyWindow','ConvertParams','10559808XTmSxU','RightSideOffsetY','Scene_Map_createSpriteset','endBattleSideChatter','RightSideScale','clearSideChatter','createSideChatterContainers','loadFace','createDummyWindow','isLeftSide','faceHeight','_sideChatterMap','spacing','drawTextEx','RightSideSpacing','stage','sfxVolume','Game_Player_performTransfer','EVAL','find','ZhGeH','Game_Screen_update','addLoadListener','SETTINGS','updateSideChatterData','right','Settings','LeftSideSpacing'];_0x422c=function(){return _0x1b22cc;};return _0x422c();}Window_SideChatter[_0x8934a9(0x178)]=Object[_0x8934a9(0x198)](Window_Base[_0x8934a9(0x178)]),Window_SideChatter['prototype'][_0x8934a9(0x1a3)]=Window_SideChatter,Window_SideChatter['SETTINGS']={},Window_SideChatter[_0x8934a9(0x178)]['initialize']=function(_0x4e8f41,_0x42c7ae,_0x3d5b80){const _0x46f4ed=_0x8934a9;this[_0x46f4ed(0x1d2)]=_0x42c7ae,this[_0x46f4ed(0x1e1)]=_0x3d5b80,Window_Base[_0x46f4ed(0x178)]['initialize'][_0x46f4ed(0x18e)](this,_0x4e8f41),this[_0x46f4ed(0x174)](),this[_0x46f4ed(0x1b9)]();},Window_SideChatter[_0x8934a9(0x178)]['refresh']=function(){const _0x4a7f3=_0x8934a9;this[_0x4a7f3(0x196)][_0x4a7f3(0x1bb)](),this[_0x4a7f3(0x15e)](),this[_0x4a7f3(0x1a8)]();},Window_SideChatter[_0x8934a9(0x178)][_0x8934a9(0x15e)]=function(){const _0x3aa610=_0x8934a9;if(!this[_0x3aa610(0x1e1)])return;if(this[_0x3aa610(0x1e1)][_0x3aa610(0x17c)]==='')return;const _0x1c973c=ImageManager[_0x3aa610(0x148)](this['_data']['faceName']);_0x1c973c[_0x3aa610(0x157)](this[_0x3aa610(0x1d8)][_0x3aa610(0x1b5)](this,_0x1c973c));},Window_SideChatter[_0x8934a9(0x178)]['drawFace']=function(_0x285111){const _0x45cead=_0x8934a9,_0x206b9a=this['_data'][_0x45cead(0x1b4)],_0x4e0f17=0x0,_0x54ae74=0x0,_0x3f370e=ImageManager[_0x45cead(0x1a9)],_0x531369=ImageManager[_0x45cead(0x14b)],_0x41ad32=ImageManager[_0x45cead(0x1a9)],_0x5d3aaa=ImageManager[_0x45cead(0x14b)],_0x5badb8=Math[_0x45cead(0x18c)](_0x3f370e,_0x41ad32),_0x254b15=Math[_0x45cead(0x18c)](_0x531369,_0x5d3aaa),_0x2aa2d0=Math['floor'](_0x4e0f17+Math[_0x45cead(0x1be)](_0x3f370e-_0x41ad32,0x0)/0x2),_0x1220a5=Math['floor'](_0x54ae74+Math['max'](_0x531369-_0x5d3aaa,0x0)/0x2),_0x337f35=Math[_0x45cead(0x19a)](_0x206b9a%0x4*_0x41ad32+(_0x41ad32-_0x5badb8)/0x2),_0x46e5dd=Math['floor'](Math[_0x45cead(0x19a)](_0x206b9a/0x4)*_0x5d3aaa+(_0x5d3aaa-_0x254b15)/0x2);this[_0x45cead(0x196)][_0x45cead(0x1ec)](_0x285111,_0x337f35,_0x46e5dd,_0x5badb8,_0x254b15,_0x2aa2d0,_0x1220a5);},Window_SideChatter[_0x8934a9(0x178)][_0x8934a9(0x1a8)]=function(){const _0x13ad10=_0x8934a9;if(!this['_data'])return;if(this['_data'][_0x13ad10(0x1b0)]==='')return;const _0x134a75=this[_0x13ad10(0x1e1)]['faceName']!=='',_0xe37e37=_0x134a75?ImageManager['faceWidth']+0x14:0x4,_0x5c3332=0x0;this[_0x13ad10(0x14e)](this['_data'][_0x13ad10(0x1b0)],_0xe37e37,_0x5c3332);},Window_SideChatter[_0x8934a9(0x178)][_0x8934a9(0x1b9)]=function(){const _0x3fd8f7=_0x8934a9;Window_Base[_0x3fd8f7(0x178)][_0x3fd8f7(0x1b9)][_0x3fd8f7(0x18e)](this),this['updateOpacity'](),this[_0x3fd8f7(0x188)]();},Window_SideChatter['prototype'][_0x8934a9(0x170)]=function(){const _0x30c016=_0x8934a9,_0x21a6b0=Game_Screen[_0x30c016(0x18b)],_0x48b65d=this[_0x30c016(0x1e1)][_0x30c016(0x150)];if(_0x48b65d===_0x30c016(0x1dd))this[_0x30c016(0x181)]=0xff;else{if(_0x48b65d==='delay'||_0x48b65d===_0x30c016(0x18f))this[_0x30c016(0x181)]=0x0;else{if(_0x48b65d==='fadeIn'){const _0x8d05c1=_0x21a6b0[_0x30c016(0x162)],_0x94dc77=this[_0x30c016(0x1e1)][_0x30c016(0x162)];this[_0x30c016(0x181)]=(_0x8d05c1-_0x94dc77)/(_0x8d05c1||0x1)*0xff;}else{if(_0x48b65d===_0x30c016(0x1d1)){const _0xe3ea5b=_0x21a6b0['fadeOutDuration'],_0x108aa4=this[_0x30c016(0x1e1)][_0x30c016(0x1c3)];this[_0x30c016(0x181)]=_0x108aa4/(_0xe3ea5b||0x1)*0xff;}else this[_0x30c016(0x181)]=0xff;}}}this[_0x30c016(0x1e0)]=this[_0x30c016(0x181)];},Window_SideChatter[_0x8934a9(0x178)]['updatePositionX']=function(){const _0x4bc187=_0x8934a9,_0x2f3330=this['_data'][_0x4bc187(0x150)],_0x1d3934=this[_0x4bc187(0x179)]['x'],_0x3319e9=this[_0x4bc187(0x1d2)]?Math[_0x4bc187(0x19a)](-this[_0x4bc187(0x180)]*_0x1d3934):0x0,_0xeb1a17=this[_0x4bc187(0x1d2)]?0x0:Math[_0x4bc187(0x19a)](-this['width']*_0x1d3934);;if(_0x2f3330===_0x4bc187(0x1dd))this['x']=_0xeb1a17;else{if(_0x2f3330===_0x4bc187(0x1e4)){if(_0x4bc187(0x16d)!==_0x4bc187(0x16d)){this[_0x4bc187(0x17b)]['x']=0.5,this[_0x4bc187(0x17b)]['y']=0x1,this['x']=this[_0x4bc187(0x14a)]()?0x0:_0x29fe4a[_0x4bc187(0x180)],this['y']=_0x1f3b0b[_0x4bc187(0x1a1)];const _0x2011cf=this['isLeftSide']()?'offsetLeft':'offsetRight',_0x451f55=_0x4d1622[_0x4bc187(0x158)][_0x2011cf];this['x']+=_0x451f55['x'],this['y']+=_0x451f55['y'];}else this['x']=_0x3319e9;}else{if(_0x2f3330===_0x4bc187(0x1a6)){if('gmHRz'!==_0x4bc187(0x19d)){const _0xd8fdc=Game_Screen[_0x4bc187(0x18b)]['fadeInDuration'],_0x2fd586=this[_0x4bc187(0x1e1)][_0x4bc187(0x162)];if(this[_0x4bc187(0x1d2)]){if('zkopq'===_0x4bc187(0x1ea)){const _0xdb4b14=this[_0x4bc187(0x1e1)][_0x4bc187(0x1b4)],_0x1b102a=0x0,_0x25d73c=0x0,_0x56571c=_0x205fc2[_0x4bc187(0x1a9)],_0x54377a=_0x42f881[_0x4bc187(0x14b)],_0x559fa3=_0xd926a[_0x4bc187(0x1a9)],_0x5cccc9=_0x57e8e1[_0x4bc187(0x14b)],_0x11bea=_0x32e172[_0x4bc187(0x18c)](_0x56571c,_0x559fa3),_0x164e2c=_0x3845e1[_0x4bc187(0x18c)](_0x54377a,_0x5cccc9),_0x152bea=_0x1040e6[_0x4bc187(0x19a)](_0x1b102a+_0x116561[_0x4bc187(0x1be)](_0x56571c-_0x559fa3,0x0)/0x2),_0x5bc172=_0x3874e1['floor'](_0x25d73c+_0x23af57[_0x4bc187(0x1be)](_0x54377a-_0x5cccc9,0x0)/0x2),_0x59f7e1=_0x25ebbc[_0x4bc187(0x19a)](_0xdb4b14%0x4*_0x559fa3+(_0x559fa3-_0x11bea)/0x2),_0x471e9e=_0x3bf7ab[_0x4bc187(0x19a)](_0x36a744['floor'](_0xdb4b14/0x4)*_0x5cccc9+(_0x5cccc9-_0x164e2c)/0x2);this[_0x4bc187(0x196)][_0x4bc187(0x1ec)](_0x4674f7,_0x59f7e1,_0x471e9e,_0x11bea,_0x164e2c,_0x152bea,_0x5bc172);}else{const _0xe2e050=_0x2fd586/(_0xd8fdc||0x1);this['x']=(_0x3319e9+_0xeb1a17)*_0xe2e050;}}else{const _0x2b6ae0=(_0xd8fdc-_0x2fd586)/(_0xd8fdc||0x1);this['x']=(_0x3319e9+_0xeb1a17)*_0x2b6ae0;}}else{const _0x23dddd=new _0x1f417e(0x0,0x0,_0x52aacf[_0x4bc187(0x180)],_0x446ec7[_0x4bc187(0x1a1)]);this[_0x4bc187(0x1ed)]=new _0x8415ec(_0x23dddd);}}else this['x']=_0xeb1a17;}}};