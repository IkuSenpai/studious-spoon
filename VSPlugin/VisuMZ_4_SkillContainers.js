//=============================================================================
// VisuStella MZ - Skill Containers
// VisuMZ_4_SkillContainers.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_SkillContainers = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillContainers = VisuMZ.SkillContainers || {};
VisuMZ.SkillContainers.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.05] [SkillContainers]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skill_Containers_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Skill Containers let you transform skills in-game to contain an inner list
 * of skills, accessible to players. These container skills will draw from a
 * list of skills that either require the player to already have them or allow
 * them to even use skills they don't normally have access to.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Skill Containers let you condense skills to become containers for lists of
 *   other skills accessible to the player.
 * * Reduce the size of a skill library by grouping them together.
 * * Skill Containers can contain skills that require the actor to already know
 *   them (either through learning or traits) or forcefully allow them to be
 *   accessible regardless.
 * * These container skills don't appear unless the container itself has access
 *   to at least one skill.
 * * These container skills are usable from the skill menu or in-battle!
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
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Skill Container-Related Notetags ===
 * 
 * ---
 *
 * <Known Skill List: id>
 * <Known Skills List: id, id, id>
 *
 * <Known Skill List: name>
 * <Known Skills List: name, name, name>
 * 
 * <Known Skills List: id To id>
 *
 * - Used for: Skill Notetags
 * - Turns the skill into a skill container, accessible to actors and players.
 * - Replace 'id' with a number representing the ID of the skill you wish to
 *   add to the skill container.
 * - Replace 'name' with the name of the skill you wish to add to the
 *   skill container.
 * - Use the 'id To id' version to get a range of skills to add to the list.
 *   - This will ignore any skills with no names or have ----- in their name.
 * - These skills require the actor to have learned the skill or to have access
 *   to the skill 
 * - Insert multiple copies of the notetag to add more.
 * - Skill Containers cannot be used as Single Skill Commands for the VisuMZ
 *   Battle Core's Actor Command Window (just use a Skill Type instead).
 * - Skill Containers can be stacked inside one another.
 * 
 *   Examples:
 * 
 *   <Known Skills List: 51, 52, 53>
 *   <Known Skills List: Heal I, Heal II, Heal III>
 *   <Known Skills List: 51 To 53>
 *
 * ---
 *
 * <Force Skill List: id>
 * <Force Skills List: id, id, id>
 *
 * <Force Skill List: name>
 * <Force Skills List: name, name, name>
 * 
 * <Force Skills List: id To id>
 *
 * - Used for: Skill Notetags
 * - Turns the skill into a skill container, accessible to actors and players.
 * - Replace 'id' with a number representing the ID of the skill you wish to
 *   add to the skill container.
 * - Replace 'name' with the name of the skill you wish to add to the
 *   skill container.
 * - Use the 'id To id' version to get a range of skills to add to the list.
 *   - This will ignore any skills with no names or have ----- in their name.
 * - These skills do NOT require the actor to have learned the skill. These
 *   listed skills will always be accessible.
 * - Insert multiple copies of the notetag to add more.
 * - Skill Containers cannot be used as Single Skill Commands for the VisuMZ
 *   Battle Core's Actor Command Window (just use a Skill Type instead).
 * - Skill Containers can be stacked inside one another.
 * 
 *   Examples:
 * 
 *   <Force Skills List: 51, 52, 53>
 *   <Force Skills List: Heal I, Heal II, Heal III>
 *   <Force Skills List: 51 To 53>
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * The Plugin Parameters allow you to adjust how the text for Skill Containers
 * appear in-game. This way, you can help your players differentiate them from
 * regular skills.
 *
 * ---
 *
 * General
 * 
 *   Skill Container Text:
 *   - Determines the text that appears where the skill costs normally would
 *     appear instead.
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
 * Version 1.05: May 16, 2024
 * * Compatibility Update!
 * ** Added better compatibility with Skill Learn System, allowing actors to
 *    learn skill containers. Update made by Irina.
 * 
 * Version 1.04: September 8, 2022
 * * Feature Update!
 * ** Removed function dependency on Skills & States Core to prevent crash.
 *    Update made by Irina.
 * 
 * Version 1.03: December 9, 2021
 * * Bug Fixes!
 * ** Plugin Parameter for Skill Container Text should now work properly.
 * 
 * Version 1.02: June 4, 2021
 * * Compatibility Update!
 * ** Skill containers should now work with Auto Battle. This does not apply
 *    to enemies, however. Enemies will still require the actual skills to be
 *    used properly. Update made by Olivia.
 * 
 * Version 1.01: April 30, 2021
 * * Compatibility Update!
 * ** Skills displayed inside the containers are now affected by the visibility
 *    notetags such as <Show Switch: x> and <Hide Switch :x> as well as the
 *    <JS Skill Visible> notetags. Update made by Arisu.
 * * Feature Update!
 * ** When using the VisuMZ_3_SideviewBattleUI plugin, resize the window
 *    according to the title items inside of the container window instead of
 *    basing it off the skill window's size. Update made by Olivia.
 *
 * Version 1.00 Official Release Date: May 7, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PluginCommandFunctionName
 * @text Category: Function Name
 * @desc Plugin Command Description Text
 *
 * @arg Step1:arraynum
 * @text Step 1: Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg option:num
 * @text Option Text
 * @type number
 * @max 1
 * @desc Change the value to this number
 * @default 42069
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableSkillContainersMenu
 * @text System: Enable SkillContainers in Menu?
 * @desc Enables/disables SkillContainers menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables SkillContainers menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowSkillContainersMenu
 * @text System: Show SkillContainers in Menu?
 * @desc Shows/hides SkillContainers menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides SkillContainers menu inside the main menu.
 * @default true
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
 * @param SkillContainers
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ContainerText:str
 * @text Skill Container Text
 * @desc Determines the text that appears where the skill costs
 * normally would appear instead.
 * @default \FS[22]...
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

const _0x1746e7=_0x1418;(function(_0x19a716,_0xeeb090){const _0x30f712=_0x1418,_0x3f4c0a=_0x19a716();while(!![]){try{const _0x547f1b=parseInt(_0x30f712(0x18d))/0x1+-parseInt(_0x30f712(0x19e))/0x2+-parseInt(_0x30f712(0x131))/0x3*(parseInt(_0x30f712(0x180))/0x4)+parseInt(_0x30f712(0x171))/0x5+-parseInt(_0x30f712(0x19b))/0x6+parseInt(_0x30f712(0x18a))/0x7+-parseInt(_0x30f712(0x159))/0x8*(-parseInt(_0x30f712(0x1ab))/0x9);if(_0x547f1b===_0xeeb090)break;else _0x3f4c0a['push'](_0x3f4c0a['shift']());}catch(_0x4b31ac){_0x3f4c0a['push'](_0x3f4c0a['shift']());}}}(_0x2c62,0x922f2));function _0x2c62(){const _0x144f67=['log','ForceListRange','KnownListRange','parameters','isSkillContainer','Window_SkillList_includes','adjustSideviewUiHeight','makeSkillContainerList','name','ConvertParams','45JvNlrZ','trim','onItemCancel','VisuMZ_1_BattleCore','oEGBe','Scene_Skill_onItemCancel','VisuMZ_1_SkillsStatesCore','getSkillIdWithName','activate','Scene_Skill_onItemOk','VWJxk','map','drawSkillCost','KnownList','zSFuJ','3ghCClj','vTrUD','kEZBC','_actor','Scene_Battle_onSkillOk','item','sort','onSkillOk','dRLKl','STRUCT','fUzZl','VisuMZ_2_SkillLearnSystem','getSkillContainerList','ybdgj','ehWku','index','forceSelect','Settings','UjXGU','initialize','ARRAYSTR','description','ForceList','containerIncludes','Scene_Battle_onSkillCancel','ARRAYNUM','updateSideviewUiPosition','xGaga','NUM','prototype','push','max','Window_SkillList_drawSkillCost','match','krGPG','test','drawSkillContainerText','adjustSideviewUiWidth','filter','format','829896eNbpAn','indexOf','processSkillContainerCancel','_skillContainerStack','drawTextEx','makeItemList','concat','onkpD','width','_skillWindow','onSkillCancel','call','ARRAYJSON','removeSkillContainerStack','pop','canAddSkillCommand','isShowingSkillContainerList','_skillIDs','JSON','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','ContainerText','OdDrn','selectNextCommand','otAyy','1492950KoOdjF','version','Window_ActorCommand_canAddSkillCommand','yyTLm','MAgpy','length','skillContainerText','clearSkillContainerStacks','EVAL','aswUw','exit','ARRAYFUNC','XzMMb','textSizeEx','_data','4000660qbRTQA','hgTwg','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','checkShowHideNotetags','LKGkX','addSkillContainerStack','isSkillLearnMode','SkillContainers','Window_SkillList_makeItemList','RegExp','7065758DnuyiH','Window_SkillList_initialize','includes','955949YlOilE','_itemWindow','skill','refresh','FUNC','toUpperCase','Scene_Battle_selectNextCommand','hasSkill','lHLdR','parse','Game_Actor_usableSkills','parseSkillContainerList','XotuE','ARRAYSTRUCT','3251190lenjbV','processSkillContainerOk','pWief','1283636AduxFF','note','KOkBN'];_0x2c62=function(){return _0x144f67;};return _0x2c62();}var label=_0x1746e7(0x187),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x1746e7(0x157)](function(_0x58a8e1){const _0x5b47f5=_0x1746e7;return _0x58a8e1['status']&&_0x58a8e1[_0x5b47f5(0x146)][_0x5b47f5(0x18c)]('['+label+']');})[0x0];VisuMZ[label][_0x1746e7(0x142)]=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0x45cb89,_0x53d880){const _0x4227ec=_0x1746e7;for(const _0x348bcb in _0x53d880){if(_0x4227ec(0x133)!==_0x4227ec(0x14c)){if(_0x348bcb[_0x4227ec(0x152)](/(.*):(.*)/i)){const _0x2da537=String(RegExp['$1']),_0xc3f147=String(RegExp['$2'])[_0x4227ec(0x192)]()[_0x4227ec(0x1ac)]();let _0x42e4a3,_0x3dac3e,_0x36d879;switch(_0xc3f147){case _0x4227ec(0x14d):_0x42e4a3=_0x53d880[_0x348bcb]!==''?Number(_0x53d880[_0x348bcb]):0x0;break;case _0x4227ec(0x14a):_0x3dac3e=_0x53d880[_0x348bcb]!==''?JSON['parse'](_0x53d880[_0x348bcb]):[],_0x42e4a3=_0x3dac3e[_0x4227ec(0x12d)](_0xa78e9e=>Number(_0xa78e9e));break;case _0x4227ec(0x179):_0x42e4a3=_0x53d880[_0x348bcb]!==''?eval(_0x53d880[_0x348bcb]):null;break;case'ARRAYEVAL':_0x3dac3e=_0x53d880[_0x348bcb]!==''?JSON['parse'](_0x53d880[_0x348bcb]):[],_0x42e4a3=_0x3dac3e[_0x4227ec(0x12d)](_0x5132b1=>eval(_0x5132b1));break;case _0x4227ec(0x16b):_0x42e4a3=_0x53d880[_0x348bcb]!==''?JSON[_0x4227ec(0x196)](_0x53d880[_0x348bcb]):'';break;case _0x4227ec(0x165):_0x3dac3e=_0x53d880[_0x348bcb]!==''?JSON[_0x4227ec(0x196)](_0x53d880[_0x348bcb]):[],_0x42e4a3=_0x3dac3e[_0x4227ec(0x12d)](_0x584811=>JSON['parse'](_0x584811));break;case _0x4227ec(0x191):_0x42e4a3=_0x53d880[_0x348bcb]!==''?new Function(JSON[_0x4227ec(0x196)](_0x53d880[_0x348bcb])):new Function('return\x200');break;case _0x4227ec(0x17c):_0x3dac3e=_0x53d880[_0x348bcb]!==''?JSON[_0x4227ec(0x196)](_0x53d880[_0x348bcb]):[],_0x42e4a3=_0x3dac3e[_0x4227ec(0x12d)](_0xce973c=>new Function(JSON['parse'](_0xce973c)));break;case'STR':_0x42e4a3=_0x53d880[_0x348bcb]!==''?String(_0x53d880[_0x348bcb]):'';break;case _0x4227ec(0x145):_0x3dac3e=_0x53d880[_0x348bcb]!==''?JSON['parse'](_0x53d880[_0x348bcb]):[],_0x42e4a3=_0x3dac3e[_0x4227ec(0x12d)](_0x545d27=>String(_0x545d27));break;case _0x4227ec(0x13a):_0x36d879=_0x53d880[_0x348bcb]!==''?JSON[_0x4227ec(0x196)](_0x53d880[_0x348bcb]):{},_0x42e4a3=VisuMZ['ConvertParams']({},_0x36d879);break;case _0x4227ec(0x19a):_0x3dac3e=_0x53d880[_0x348bcb]!==''?JSON['parse'](_0x53d880[_0x348bcb]):[],_0x42e4a3=_0x3dac3e[_0x4227ec(0x12d)](_0x50041b=>VisuMZ[_0x4227ec(0x1aa)]({},JSON[_0x4227ec(0x196)](_0x50041b)));break;default:continue;}_0x45cb89[_0x2da537]=_0x42e4a3;}}else this['_itemWindow'][_0x4227ec(0x169)]()?this['processSkillContainerCancel']():_0x589b9e[_0x4227ec(0x187)][_0x4227ec(0x127)][_0x4227ec(0x164)](this);}return _0x45cb89;},(_0x4dc09c=>{const _0x7f11d2=_0x1746e7,_0x2de7d1=_0x4dc09c[_0x7f11d2(0x1a9)];for(const _0x2dfdf8 of dependencies){if(!Imported[_0x2dfdf8]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x7f11d2(0x158)](_0x2de7d1,_0x2dfdf8)),SceneManager[_0x7f11d2(0x17b)]();break;}}const _0x497599=_0x4dc09c[_0x7f11d2(0x146)];if(_0x497599[_0x7f11d2(0x152)](/\[Version[ ](.*?)\]/i)){const _0x56b9ce=Number(RegExp['$1']);_0x56b9ce!==VisuMZ[label][_0x7f11d2(0x172)]&&(alert(_0x7f11d2(0x182)[_0x7f11d2(0x158)](_0x2de7d1,_0x56b9ce)),SceneManager['exit']());}if(_0x497599[_0x7f11d2(0x152)](/\[Tier[ ](\d+)\]/i)){const _0x3f83e5=Number(RegExp['$1']);if(_0x3f83e5<tier)'dRLKl'===_0x7f11d2(0x139)?(alert(_0x7f11d2(0x16c)['format'](_0x2de7d1,_0x3f83e5,tier)),SceneManager['exit']()):(_0x18fe02['SkillContainers'][_0x7f11d2(0x18b)][_0x7f11d2(0x164)](this,_0xa44888),this['_skillContainerStack']=[]);else{if(_0x7f11d2(0x175)===_0x7f11d2(0x175))tier=Math['max'](_0x3f83e5,tier);else{if(!_0x279f6c)return![];typeof _0x5f44c5===_0x599a2e&&(_0x14934a[_0x7f11d2(0x1a1)](_0x7f11d2(0x154)),_0x3678fb=_0x55a178[_0x53e347]);const _0x57daea=_0x5c7043[_0x7f11d2(0x187)][_0x7f11d2(0x189)],_0x12a8ae=_0x3fa272[_0x7f11d2(0x19f)];return _0x12a8ae[_0x7f11d2(0x152)](_0x57daea[_0x7f11d2(0x12f)])||_0x12a8ae[_0x7f11d2(0x152)](_0x57daea[_0x7f11d2(0x147)]);}}}VisuMZ[_0x7f11d2(0x1aa)](VisuMZ[label][_0x7f11d2(0x142)],_0x4dc09c[_0x7f11d2(0x1a4)]);})(pluginData),VisuMZ['SkillContainers'][_0x1746e7(0x189)]={'KnownList':/<(?:KNOWN|EXTRA) (?:SKILL|SKILLS) LIST:[ ](.*)>/gi,'KnownListRange':/<(?:KNOWN|EXTRA) (?:SKILL|SKILLS) LIST:[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/gi,'ForceList':/<(?:FORCE|FORCED) (?:SKILL|SKILLS) LIST:[ ](.*)>/gi,'ForceListRange':/<(?:FORCE|FORCED) (?:SKILL|SKILLS) LIST:[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/gi,'Type1':/<(?:NOTETAG):[ ](\d+)([%％])>/i,'Type2':/<(?:NOTETAG):[ ]([\+\-]\d+)>/i,'Type3':/<(?:NOTETAG):[ ](.*)>/i,'Type3nonGreedy':/<(?:NOTETAG):[ ](.*?)>/i,'Type4':/<(?:NOTETAG):[ ]*(\d+(?:\s*,\s*\d+)*)>/i,'Type5':/<(?:NOTETAG):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i,'Type6':/<(?:NOTETAG)>/i,'Type7':/<\/(?:NOTETAG)>/i,'Type8':/<(?:NOTETAG)>\s*([\s\S]*)\s*<\/(?:NOTETAG)>/i},DataManager['isSkillContainer']=function(_0xa889ca){const _0x52b72e=_0x1746e7;if(!_0xa889ca)return![];typeof _0xa889ca===Number&&(_0x52b72e(0x126)===_0x52b72e(0x126)?(console[_0x52b72e(0x1a1)](_0x52b72e(0x154)),_0xa889ca=$dataSkills[_0xa889ca]):(this[_0x52b72e(0x15c)][_0x52b72e(0x14f)](_0x4716fb),this[_0x52b72e(0x190)](),this[_0x52b72e(0x141)](0x0)));const _0x683640=VisuMZ[_0x52b72e(0x187)][_0x52b72e(0x189)],_0x17fdfb=_0xa889ca[_0x52b72e(0x19f)];return _0x17fdfb[_0x52b72e(0x152)](_0x683640[_0x52b72e(0x12f)])||_0x17fdfb[_0x52b72e(0x152)](_0x683640['ForceList']);},DataManager[_0x1746e7(0x13d)]=function(_0x50b2d1,_0x58094e){const _0x371843=_0x1746e7;if(!_0x58094e)return[];const _0x460949=VisuMZ[_0x371843(0x187)][_0x371843(0x189)],_0x1b6f79=_0x58094e[_0x371843(0x19f)];let _0x6c9687=[];if(_0x50b2d1){if(_0x371843(0x132)!=='vTrUD')_0x37bede[_0x371843(0x187)]['Scene_Battle_onSkillCancel'][_0x371843(0x164)](this);else{if(!![]){const _0x15aea8=_0x1b6f79[_0x371843(0x152)](_0x460949['KnownList']);if(_0x15aea8){if(_0x371843(0x12c)!=='VWJxk')_0x1985d2[_0x371843(0x14f)](_0x97175c);else for(const _0x108adb of _0x15aea8){_0x108adb['match'](_0x460949[_0x371843(0x12f)]);let _0x3b0668=DataManager[_0x371843(0x198)](RegExp['$1']);_0x3b0668=_0x3b0668[_0x371843(0x157)](_0x55ea64=>_0x50b2d1[_0x371843(0x194)](_0x55ea64)),_0x6c9687=_0x6c9687[_0x371843(0x15f)](_0x3b0668);}}}if(!![]){const _0x558c22=_0x1b6f79['match'](_0x460949[_0x371843(0x1a3)]);if(_0x558c22){if(_0x371843(0x195)===_0x371843(0x195))for(const _0x114fd7 of _0x558c22){_0x114fd7[_0x371843(0x152)](_0x460949[_0x371843(0x1a3)]);const _0xe53854=Number(RegExp['$1']),_0x3c25d3=Number(RegExp['$2']);let _0x32d732=[];for(let _0x2437f6=_0xe53854;_0x2437f6<=_0x3c25d3;_0x2437f6++){if(_0x371843(0x143)==='UjXGU')_0x32d732['push'](_0x2437f6);else{if(_0x5aefbf[_0x371843(0x13c)]&&this['_itemWindow'][_0x371843(0x186)]())return _0x251d80['SkillContainers'][_0x371843(0x12b)]['call'](this);this[_0x371843(0x19c)]();}}_0x32d732=_0x32d732['filter'](_0x4359f2=>_0x50b2d1['hasSkill'](_0x4359f2)),_0x6c9687=_0x6c9687[_0x371843(0x15f)](_0x32d732);}else this[_0x371843(0x15b)]();}}}}if(!![]){if(!![]){const _0xe0604b=_0x1b6f79['match'](_0x460949['ForceList']);if(_0xe0604b)for(const _0x5a6fa9 of _0xe0604b){if(_0x371843(0x13b)!==_0x371843(0x13b))_0x101b80('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x371843(0x158)](_0x14287a,_0x4fbf79,_0x48537c)),_0x5294ea[_0x371843(0x17b)]();else{_0x5a6fa9[_0x371843(0x152)](_0x460949[_0x371843(0x147)]);let _0x2794b6=DataManager[_0x371843(0x198)](RegExp['$1']);_0x6c9687=_0x6c9687[_0x371843(0x15f)](_0x2794b6);}}}if(!![]){const _0x25d0a1=_0x1b6f79[_0x371843(0x152)](_0x460949[_0x371843(0x1a2)]);if(_0x25d0a1)for(const _0x41a29b of _0x25d0a1){_0x41a29b['match'](_0x460949[_0x371843(0x1a2)]);const _0x336691=Number(RegExp['$1']),_0x31afab=Number(RegExp['$2']);let _0x550038=[];for(let _0x1b3a0d=_0x336691;_0x1b3a0d<=_0x31afab;_0x1b3a0d++){if(_0x371843(0x13f)!==_0x371843(0x13f)){if(this[_0x371843(0x15c)][_0x371843(0x176)]<=0x0)return;const _0x474d53=this[_0x371843(0x15c)][this['_skillContainerStack'][_0x371843(0x176)]-0x1],_0x2fa1ea=_0x474d53[_0x371843(0x140)]||0x0;this[_0x371843(0x15c)][_0x371843(0x167)](),this[_0x371843(0x190)](),this[_0x371843(0x141)](_0x2fa1ea);}else _0x550038['push'](_0x1b3a0d);}_0x6c9687=_0x6c9687[_0x371843(0x15f)](_0x550038);}}}return _0x6c9687=_0x6c9687[_0x371843(0x157)](_0x35de4b=>!!$dataSkills[_0x35de4b]),_0x6c9687=_0x6c9687[_0x371843(0x157)](_0x3afa74=>_0x3afa74!==_0x58094e['id']),_0x6c9687=_0x6c9687['filter'](_0x474b5f=>$dataSkills[_0x474b5f][_0x371843(0x1a9)][_0x371843(0x1ac)]()!==''),_0x6c9687=_0x6c9687[_0x371843(0x157)](_0x42d763=>!$dataSkills[_0x42d763][_0x371843(0x1a9)][_0x371843(0x152)](/-----/i)),_0x6c9687=_0x6c9687[_0x371843(0x157)]((_0x23e574,_0x3758da,_0x2e5d5c)=>_0x2e5d5c[_0x371843(0x15a)](_0x23e574)===_0x3758da),_0x6c9687[_0x371843(0x137)]((_0x44413d,_0x2e49e9)=>_0x44413d-_0x2e49e9),_0x6c9687;},DataManager[_0x1746e7(0x198)]=function(_0x485124){const _0x180910=_0x1746e7;_0x485124=_0x485124['split'](',')[_0x180910(0x12d)](_0x544f10=>_0x544f10[_0x180910(0x1ac)]());let _0x37ff84=[];for(let _0x43e7b1 of _0x485124){_0x43e7b1=(String(_0x43e7b1)||'')[_0x180910(0x1ac)]();const _0x541ec2=/^\d+$/[_0x180910(0x154)](_0x43e7b1);if(_0x541ec2){if(_0x180910(0x1a0)!==_0x180910(0x1a0)){const _0x3fc7c4=_0x367a7b(_0x46680d['$1']);_0x3fc7c4<_0x4695e2?(_0x3dff9a(_0x180910(0x16c)[_0x180910(0x158)](_0x4c14b9,_0x3fc7c4,_0x595915)),_0xfe6f05['exit']()):_0x4cf22a=_0xd99437[_0x180910(0x150)](_0x3fc7c4,_0x3755c6);}else _0x37ff84[_0x180910(0x14f)](Number(_0x43e7b1));}else _0x37ff84[_0x180910(0x14f)](DataManager['getSkillIdWithName'](_0x43e7b1));}return _0x37ff84;},DataManager['getSkillIdWithName']=function(_0x56ed0a){const _0x5a53d4=_0x1746e7;_0x56ed0a=_0x56ed0a[_0x5a53d4(0x192)]()[_0x5a53d4(0x1ac)](),this[_0x5a53d4(0x16a)]=this[_0x5a53d4(0x16a)]||{};if(this[_0x5a53d4(0x16a)][_0x56ed0a])return this[_0x5a53d4(0x16a)][_0x56ed0a];for(const _0x309437 of $dataSkills){if(_0x5a53d4(0x19d)!=='VHYGp'){if(!_0x309437)continue;this['_skillIDs'][_0x309437[_0x5a53d4(0x1a9)][_0x5a53d4(0x192)]()['trim']()]=_0x309437['id'];}else{_0x4b513f=(_0x3b6e57(_0x1f72d4)||'')[_0x5a53d4(0x1ac)]();const _0x16bdce=/^\d+$/['test'](_0x3ffab1);_0x16bdce?_0x1be677['push'](_0x462137(_0x145ff0)):_0x11374a['push'](_0x15807c[_0x5a53d4(0x129)](_0x476199));}}return this[_0x5a53d4(0x16a)][_0x56ed0a]||0x0;},TextManager[_0x1746e7(0x177)]=VisuMZ[_0x1746e7(0x187)][_0x1746e7(0x142)][_0x1746e7(0x16d)],VisuMZ[_0x1746e7(0x187)][_0x1746e7(0x12b)]=Scene_Skill[_0x1746e7(0x14e)]['onItemOk'],Scene_Skill[_0x1746e7(0x14e)]['onItemOk']=function(){const _0x25216d=_0x1746e7,_0x25b376=this[_0x25216d(0x136)]();if(DataManager['isSkillContainer'](_0x25b376)){if(Imported[_0x25216d(0x13c)]&&this[_0x25216d(0x18e)][_0x25216d(0x186)]()){if(_0x25216d(0x160)==='pZeib'){if(_0x317d5f[_0x25216d(0x13c)]&&this[_0x25216d(0x186)]())return _0x1dbd4a[_0x25216d(0x187)][_0x25216d(0x151)][_0x25216d(0x164)](this,_0x10cdf7,_0x292642,_0x3b6209,_0x1bf419);this[_0x25216d(0x155)](_0x526ec7,_0x53e9c1,_0x2130a8,_0x989157);}else return VisuMZ[_0x25216d(0x187)]['Scene_Skill_onItemOk']['call'](this);}this[_0x25216d(0x19c)]();}else VisuMZ[_0x25216d(0x187)][_0x25216d(0x12b)][_0x25216d(0x164)](this);},Scene_Skill[_0x1746e7(0x14e)][_0x1746e7(0x19c)]=function(){const _0x42b779=_0x1746e7,_0x168f48={'skill':this[_0x42b779(0x18e)][_0x42b779(0x136)](),'index':this[_0x42b779(0x18e)][_0x42b779(0x140)]()};this[_0x42b779(0x18e)]['addSkillContainerStack'](_0x168f48),this['_itemWindow'][_0x42b779(0x12a)]();},VisuMZ[_0x1746e7(0x187)]['Scene_Skill_onItemCancel']=Scene_Skill[_0x1746e7(0x14e)][_0x1746e7(0x124)],Scene_Skill[_0x1746e7(0x14e)]['onItemCancel']=function(){const _0x5a0466=_0x1746e7;this['_itemWindow'][_0x5a0466(0x169)]()?this[_0x5a0466(0x15b)]():'yoaba'==='REvPP'?this[_0x5a0466(0x15b)]():VisuMZ[_0x5a0466(0x187)][_0x5a0466(0x127)][_0x5a0466(0x164)](this);},Scene_Skill['prototype'][_0x1746e7(0x15b)]=function(){const _0x533ed5=_0x1746e7;this[_0x533ed5(0x18e)][_0x533ed5(0x166)](),this[_0x533ed5(0x18e)][_0x533ed5(0x12a)]();},VisuMZ[_0x1746e7(0x187)][_0x1746e7(0x135)]=Scene_Battle[_0x1746e7(0x14e)]['onSkillOk'],Scene_Battle['prototype'][_0x1746e7(0x138)]=function(){const _0x368c85=_0x1746e7,_0x352cf2=this[_0x368c85(0x162)]['item']();DataManager['isSkillContainer'](_0x352cf2)?this[_0x368c85(0x19c)]():_0x368c85(0x17d)==='XzMMb'?VisuMZ[_0x368c85(0x187)]['Scene_Battle_onSkillOk'][_0x368c85(0x164)](this):_0x4db69e[_0x368c85(0x187)][_0x368c85(0x12b)][_0x368c85(0x164)](this);},Scene_Battle[_0x1746e7(0x14e)][_0x1746e7(0x19c)]=function(){const _0x5310ac=_0x1746e7,_0x588db3={'skill':this['_skillWindow'][_0x5310ac(0x136)](),'index':this[_0x5310ac(0x162)][_0x5310ac(0x140)]()};this['_skillWindow'][_0x5310ac(0x185)](_0x588db3),this['_skillWindow'][_0x5310ac(0x12a)]();},VisuMZ[_0x1746e7(0x187)]['Scene_Battle_onSkillCancel']=Scene_Battle[_0x1746e7(0x14e)][_0x1746e7(0x163)],Scene_Battle[_0x1746e7(0x14e)][_0x1746e7(0x163)]=function(){const _0x468d9f=_0x1746e7;if(this['_skillWindow'][_0x468d9f(0x169)]()){if(_0x468d9f(0x184)==='RlbIy')for(const _0x4e2b45 of _0x4cbdba){_0x4e2b45[_0x468d9f(0x152)](_0x73f825[_0x468d9f(0x147)]);let _0x385e51=_0x45218f[_0x468d9f(0x198)](_0x41a13a['$1']);_0x11f5fd=_0x5d534e[_0x468d9f(0x15f)](_0x385e51);}else this['processSkillContainerCancel']();}else VisuMZ[_0x468d9f(0x187)][_0x468d9f(0x149)]['call'](this);},Scene_Battle[_0x1746e7(0x14e)]['processSkillContainerCancel']=function(){const _0x25479f=_0x1746e7;this[_0x25479f(0x162)][_0x25479f(0x166)](),this[_0x25479f(0x162)][_0x25479f(0x12a)]();},VisuMZ[_0x1746e7(0x187)][_0x1746e7(0x193)]=Scene_Battle[_0x1746e7(0x14e)][_0x1746e7(0x16f)],Scene_Battle['prototype'][_0x1746e7(0x16f)]=function(){const _0x149451=_0x1746e7;this['_skillWindow']&&this[_0x149451(0x162)]['clearSkillContainerStacks'](![]),VisuMZ[_0x149451(0x187)]['Scene_Battle_selectNextCommand'][_0x149451(0x164)](this);},VisuMZ[_0x1746e7(0x187)]['Game_Actor_usableSkills']=Game_Actor[_0x1746e7(0x14e)]['usableSkills'],Game_Actor[_0x1746e7(0x14e)]['usableSkills']=function(){const _0x28e7c5=_0x1746e7;let _0x1969c5=VisuMZ[_0x28e7c5(0x187)][_0x28e7c5(0x197)][_0x28e7c5(0x164)](this);return this['_skillContainerLoops']=0x0,_0x1969c5=this['addSkillContainerSkills'](_0x1969c5),_0x1969c5;},Game_Actor[_0x1746e7(0x14e)]['addSkillContainerSkills']=function(_0x467590){const _0x2699e3=_0x1746e7;if(this['_skillContainerLoops']>=0x64)return _0x467590;for(const _0x525c83 of _0x467590){if(!_0x525c83)continue;if(DataManager['isSkillContainer'](_0x525c83)){if(_0x2699e3(0x170)==='unjJr'){_0x19bafb['match'](_0x486ba4['ForceListRange']);const _0x2b4cfa=_0x2070e1(_0x58732a['$1']),_0x83dc4e=_0x52905e(_0x21be9e['$2']);let _0x5f8106=[];for(let _0x54ef5d=_0x2b4cfa;_0x54ef5d<=_0x83dc4e;_0x54ef5d++){_0x5f8106[_0x2699e3(0x14f)](_0x54ef5d);}_0x189165=_0x3b901b[_0x2699e3(0x15f)](_0x5f8106);}else{let _0x3344ad=DataManager[_0x2699e3(0x13d)](this,_0x525c83);_0x3344ad=_0x3344ad['map'](_0x51c1b4=>$dataSkills[_0x51c1b4]),_0x3344ad=_0x3344ad['filter'](_0xb8a609=>!!_0xb8a609),_0x3344ad=this['addSkillContainerSkills'](_0x3344ad),_0x467590=_0x467590[_0x2699e3(0x15f)](_0x3344ad);}}}return _0x467590;},VisuMZ[_0x1746e7(0x187)][_0x1746e7(0x18b)]=Window_SkillList[_0x1746e7(0x14e)][_0x1746e7(0x144)],Window_SkillList[_0x1746e7(0x14e)][_0x1746e7(0x144)]=function(_0x5c1aa5){const _0x2409cb=_0x1746e7;VisuMZ[_0x2409cb(0x187)][_0x2409cb(0x18b)]['call'](this,_0x5c1aa5),this[_0x2409cb(0x15c)]=[];},Window_SkillList[_0x1746e7(0x14e)][_0x1746e7(0x185)]=function(_0x3d107d){const _0x2a6024=_0x1746e7;this[_0x2a6024(0x15c)]['push'](_0x3d107d),this['refresh'](),this[_0x2a6024(0x141)](0x0);},Window_SkillList['prototype'][_0x1746e7(0x166)]=function(){const _0x2d464b=_0x1746e7;if(this['_skillContainerStack'][_0x2d464b(0x176)]<=0x0)return;const _0xe4b9d7=this[_0x2d464b(0x15c)][this[_0x2d464b(0x15c)][_0x2d464b(0x176)]-0x1],_0x22b59b=_0xe4b9d7[_0x2d464b(0x140)]||0x0;this[_0x2d464b(0x15c)]['pop'](),this['refresh'](),this[_0x2d464b(0x141)](_0x22b59b);},Window_SkillList[_0x1746e7(0x14e)][_0x1746e7(0x178)]=function(_0x15bb84){const _0x462f3c=_0x1746e7;if(this[_0x462f3c(0x15c)][_0x462f3c(0x176)]<=0x0)return;const _0x57002a=this[_0x462f3c(0x15c)][0x0],_0x58685e=_0x57002a[_0x462f3c(0x140)]||0x0;this[_0x462f3c(0x15c)]=[],_0x15bb84&&(this[_0x462f3c(0x190)](),this['forceSelect'](_0x58685e));},Window_SkillList['prototype'][_0x1746e7(0x169)]=function(){const _0x21212d=_0x1746e7;return this[_0x21212d(0x15c)][_0x21212d(0x176)]>0x0;},VisuMZ['SkillContainers'][_0x1746e7(0x188)]=Window_SkillList['prototype'][_0x1746e7(0x15e)],Window_SkillList[_0x1746e7(0x14e)]['makeItemList']=function(){const _0x5ee7ad=_0x1746e7;if(this['isShowingSkillContainerList']())_0x5ee7ad(0x13e)!==_0x5ee7ad(0x199)?this['makeSkillContainerList']():_0x2db2d3[_0x5ee7ad(0x14f)](_0x5c960d['getSkillIdWithName'](_0x245f6e));else{if(_0x5ee7ad(0x181)===_0x5ee7ad(0x130))return this[_0x5ee7ad(0x15c)][_0x5ee7ad(0x176)]>0x0;else VisuMZ[_0x5ee7ad(0x187)][_0x5ee7ad(0x188)][_0x5ee7ad(0x164)](this);}},VisuMZ[_0x1746e7(0x187)][_0x1746e7(0x1a6)]=Window_SkillList[_0x1746e7(0x14e)][_0x1746e7(0x18c)],Window_SkillList['prototype']['includes']=function(_0x48cdf2){const _0x1d1a4c=_0x1746e7;if(_0x48cdf2&&DataManager['isSkillContainer'](_0x48cdf2)){if(Imported[_0x1d1a4c(0x13c)]&&this['isSkillLearnMode']())return VisuMZ[_0x1d1a4c(0x187)][_0x1d1a4c(0x1a6)][_0x1d1a4c(0x164)](this,_0x48cdf2);const _0x499864=DataManager[_0x1d1a4c(0x13d)](this[_0x1d1a4c(0x134)],_0x48cdf2);if(_0x499864['length']<=0x0)return![];}return VisuMZ[_0x1d1a4c(0x187)][_0x1d1a4c(0x1a6)][_0x1d1a4c(0x164)](this,_0x48cdf2);},Window_SkillList[_0x1746e7(0x14e)][_0x1746e7(0x1a8)]=function(){const _0x22f10e=_0x1746e7,_0x313ef0=this[_0x22f10e(0x15c)][this['_skillContainerStack']['length']-0x1],_0xd56109=_0x313ef0[_0x22f10e(0x18f)],_0x261787=DataManager['getSkillContainerList'](this[_0x22f10e(0x134)],_0xd56109);this[_0x22f10e(0x17f)]=_0x261787['map'](_0x2855da=>$dataSkills[_0x2855da])['filter'](_0x33ff39=>!!_0x33ff39&&this[_0x22f10e(0x148)](_0x33ff39)),Imported['VisuMZ_3_SideviewBattleUI']&&(this[_0x22f10e(0x156)](),this[_0x22f10e(0x1a7)](),this[_0x22f10e(0x14b)]());},Window_SkillList[_0x1746e7(0x14e)]['containerIncludes']=function(_0x225d73){const _0xbb3a44=_0x1746e7;if(Imported[_0xbb3a44(0x128)]){if(!this[_0xbb3a44(0x183)](_0x225d73))return![];if(!this['checkShowHideJS'](_0x225d73))return![];}return!![];},VisuMZ[_0x1746e7(0x187)][_0x1746e7(0x151)]=Window_SkillList[_0x1746e7(0x14e)][_0x1746e7(0x12e)],Window_SkillList[_0x1746e7(0x14e)]['drawSkillCost']=function(_0x233711,_0x3ea2b7,_0x5f0836,_0x47e14f){const _0x2791c9=_0x1746e7;if(DataManager[_0x2791c9(0x1a5)](_0x233711)){if(Imported['VisuMZ_2_SkillLearnSystem']&&this['isSkillLearnMode']())return VisuMZ['SkillContainers'][_0x2791c9(0x151)][_0x2791c9(0x164)](this,_0x233711,_0x3ea2b7,_0x5f0836,_0x47e14f);this['drawSkillContainerText'](_0x233711,_0x3ea2b7,_0x5f0836,_0x47e14f);}else _0x2791c9(0x17a)!==_0x2791c9(0x153)?VisuMZ['SkillContainers']['Window_SkillList_drawSkillCost']['call'](this,_0x233711,_0x3ea2b7,_0x5f0836,_0x47e14f):_0x5ed174['push'](_0x2ba1e4(_0x597caa));},Window_SkillList[_0x1746e7(0x14e)][_0x1746e7(0x155)]=function(_0x2a0c37,_0x10cfb9,_0x25576c,_0x5ef4a1){const _0x582b29=_0x1746e7;if(!_0x2a0c37)return;this['resetFontSettings']();const _0x99c7c6=TextManager[_0x582b29(0x177)],_0x4a4b87=this[_0x582b29(0x17e)](_0x99c7c6)[_0x582b29(0x161)];_0x10cfb9+=_0x5ef4a1-_0x4a4b87,this[_0x582b29(0x15d)](_0x99c7c6,_0x10cfb9,_0x25576c,_0x4a4b87),this['resetFontSettings']();};Imported[_0x1746e7(0x125)]&&(VisuMZ[_0x1746e7(0x187)][_0x1746e7(0x173)]=Window_ActorCommand[_0x1746e7(0x14e)][_0x1746e7(0x168)],Window_ActorCommand[_0x1746e7(0x14e)][_0x1746e7(0x168)]=function(_0x349e40){const _0x10f77e=_0x1746e7;if(DataManager['isSkillContainer'](_0x349e40)){if(_0x10f77e(0x174)!==_0x10f77e(0x16e))return![];else for(const _0x39f611 of _0x27313b){_0x39f611[_0x10f77e(0x152)](_0x45b4c5[_0x10f77e(0x1a3)]);const _0x2f99b1=_0x3e71ce(_0x1b4ce5['$1']),_0x1756d4=_0x408354(_0x303846['$2']);let _0x311b79=[];for(let _0x518df1=_0x2f99b1;_0x518df1<=_0x1756d4;_0x518df1++){_0x311b79[_0x10f77e(0x14f)](_0x518df1);}_0x311b79=_0x311b79[_0x10f77e(0x157)](_0x4524d5=>_0x21c1e1['hasSkill'](_0x4524d5)),_0x126e8a=_0x439953['concat'](_0x311b79);}}else return VisuMZ[_0x10f77e(0x187)][_0x10f77e(0x173)][_0x10f77e(0x164)](this,_0x349e40);});function _0x1418(_0x2ecf31,_0x468eca){const _0x2c62b1=_0x2c62();return _0x1418=function(_0x14181a,_0x3dd9ae){_0x14181a=_0x14181a-0x124;let _0x1bb3ee=_0x2c62b1[_0x14181a];return _0x1bb3ee;},_0x1418(_0x2ecf31,_0x468eca);};