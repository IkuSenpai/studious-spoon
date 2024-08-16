//=============================================================================
// VisuStella MZ - Conditional Random Encounters
// VisuMZ_4_ConditonalRandEnc.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_ConditonalRandEnc = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ConditonalRandEnc = VisuMZ.ConditonalRandEnc || {};
VisuMZ.ConditonalRandEnc.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.01] [ConditonalRandEnc]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Conditional_Random_Encounters_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Do you use Random Encounters for your RPG but want certain troops to appear
 * only after certain conditions have been met? For example, a pack of wolves
 * that appear when a specific switch is on, or a school of piranhas that show
 * up if they detect you have bait in your inventory? This plugin allows that
 * to be possible!
 *
 * Features include all (but not limited to) the following:
 * 
 * * Conditional Random Encounter requirements will prevent certain troops from
 *   being a part of the random encounter pool until the requirements are met.
 * * Also applies to the "Battle Processing" event command's "Same As Random
 *   Encounters" feature.
 * * Requirements range from switch conditions, variable values, item counts,
 *   weapon counts, armor counts, alive members, and more.
 * * Additional Comment Tags to force specific BGM's to play for specific
 *   troop encounters.
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
 * Comment Tags
 * ============================================================================
 *
 * To make these comment tags work, insert any of the below comment tags inside
 * a comment found within any of the troop's pages. The page's conditions do
 * not need to be met and can even work with the "Don't Run" condition.
 * 
 * If there are multiple comments, the comments will be stringed together
 * allowing for more than 6 lines of conditions.
 * 
 * If using the Battle Core's "Base Troop ID(s)" Plugin Parameter, the comments
 * from the Base Troop pages will also be copied over.
 *
 * ---
 * 
 * === Requirement Comment Tags ===
 * 
 * ---
 *
 * <Random Encounter Requirements>
 *  condition
 *  condition
 *  condition
 *  condition
 * </Random Encounter Requirements>
 *
 * - Used for: Troop Page Comment Tags
 * - Create conditional requirements for this random encounter to be met before
 *   it would appear in the random encounter pool for the map.
 * - Replace 'condition' with any of the conditions listed in below section.
 * - Insert and/or remove 'condition' lines to add/remove conditions.
 * - If you are using the Battle Core, this will NOT work with a Base Troop.
 *   You will get an alert message saying so.
 *   - Why? Because this can cause all of the troops in the game to just shut
 *     off and you don't want that.
 *
 * -=-=- Condition List -=-=-
 *
 * Replace 'condition' in the notetags in the above section with any of the
 * following to make conditions. These conditions are also used in the Plugin
 * Parameters for the default conditions, too.
 * 
 * ---
 *
 * x >= y
 * x > y
 * x === y
 * x !== y
 * x < y
 * x <= y
 * 
 * - Replace 'x' and 'y' with any of the following:
 *
 * - 'Switch x' (replace 'x' with a number) for switch x's current state.
 * - 'TRUE', 'FALSE', 'ON', 'OFF' for the opposite x/y value.
 * - Using any of these boolean modifiers must be paired with '===' or '!=='
 *
 * - 'Variable x' (replace 'x' with a number) for variable x's current value.
 * - A numeric value representing a hard number.
 * - '50%' or any other percentile number to represent a rate.
 * - '0.5' or any other float number to represent a rate.
 * 
 * - 'Item id Count' for the number of specific items the party owns.
 *   - Replace 'id' with the ID of the item.
 * - 'Item name Count' for the number of specific items the party owns.
 *   - Replace 'name' with the ID of the item.
 * 
 * - 'Weapon id Count' for the number of specific weapons the party owns.
 *   - Replace 'id' with the ID of the weapon.
 * - 'Weapon name Count' for the number of specific weapons the party owns.
 *   - Replace 'name' with the ID of the weapon.
 * 
 * - 'Armor id Count' for the number of specific armors the party owns.
 *   - Replace 'id' with the ID of the armor.
 * - 'Armor name Count' for the number of specific armors the party owns.
 *   - Replace 'name' with the ID of the armor.
 * 
 * - 'Alive Members' for the number of alive party members when drops are
 *   being determined.
 * 
 * - 'Battle Members' for the number of participating party members in battle.
 * 
 * - 'Dead Members' for the number of dead party members when drops are
 *   being determined.
 * 
 * - 'Death Turn' for the turn the enemy died. If an enemy was revived during
 *   battle, then take the most recent turn the enemy has died.
 * 
 * - 'Party Gold' for the party's current gold value when drops are
 *   being determined.
 * 
 * - 'Party Members' for the number of total party members in battle.
 *
 * ---
 * 
 * === BGM Comment Tags ===
 * 
 * ---
 * 
 * <Forced BGM>
 *  Name: filename
 *  Volume: x
 *  Pitch: x
 *  Pan: x
 * </Forced BGM>
 *
 * - Used for: Troop Page Comment Tags
 * - Forces a specific BGM to play whenever this specific encounter is primed
 *   for battle.
 * - This will override any database settings or music changes from event
 *   commands.
 * - Replace 'filename' with the filename of the BGM you want to play.
 *   - Do NOT include the file extension.
 * - Replace 'volume' with a number to determine sound volume.
 * - Replace 'pitch' with a number to determine sound pitch.
 * - Replace 'pan' with a number to determine sound panning.
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
 * Version 1.01: April 13, 2023
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Added an error-prevention feature for <Random Encounter Requirements>
 *    notetag effect:
 * *** If you are using the Battle Core, this will NOT work with a Base Troop.
 *     You will get an alert message saying so.
 * *** Why? Because this can cause all of the troops in the game to just shut
 *     off and you don't want that.
 * *** Update made by Arisu.
 * 
 * Version 1.00 Official Release Date: September 10, 2021
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
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 */
//=============================================================================

const _0x7d1c0c=_0x3ef5;function _0x3ef5(_0x26c5dc,_0xd4fb66){const _0x2f86b2=_0x2f86();return _0x3ef5=function(_0x3ef500,_0x14dc43){_0x3ef500=_0x3ef500-0x17a;let _0x489d5b=_0x2f86b2[_0x3ef500];return _0x489d5b;},_0x3ef5(_0x26c5dc,_0xd4fb66);}function _0x2f86(){const _0x1e9985=['trim','description','Game_Player_meetsEncounterConditions','ITEM','2425239JFexmQ','deadMembers','aliveMembers','getStateIdWithName','!\x0a\x0a','3410waUjUP','pan','value','_weaponIDs','meetsEncounterConditions','toUpperCase','Mechanics','ReplaceText','Settings','getDatabaseItemID','EVAL','meetsConditionalRandomEncounterConditions','map','Game_System_battleBgm','ARRAYEVAL','724635yaWKwu','clamp','list','FUNC','includes','ARMORS','114273knEgpj','SKILLS','STR','true','getDatabaseItem','ARRAYSTR','name','BattleCore','ARRAYJSON','filter','ITEMS','designated\x20as\x20a\x20\x22Base\x20Troop\x22.\x20','members','troopId','battleBgmCondRandEnc','parse','volume','format','gold','12332DagRcC','_troopId','length','BaseTroopIDs','ARRAYFUNC','Error\x20with\x20Troop\x20ID\x20','split','false','getArmorIdWithName','getDatabase','battleMembers','JSON','getActorIdWithName','ARMOR','battleBgm','getItemIdWithName','_itemIDs','status','getWeaponIdWithName','VisuMZ_1_BattleCore','7poxhoG','2234648xBYjWE','WEAPONS','6920616XiyzsL','max','createTroopNote','_stateIDs','5159172vzlxYf','parameters','numItems','getSkillIdWithName','log','match','pitch','_actorIDs','replace','STATE','_skillIDs','meetsConditionalRandomEncounterRequirement','exit','pages','_armorIDs','code','_classIDs','getClassIdWithName','call','93wKgYnq','STRUCT','SKILL','return\x200','version','a\x20Base\x20Troop.\x0a\x0a','WEAPON','STATES','ConvertParams','ConditonalRandEnc','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','You\x20cannot\x20use\x20<Random\x20Encounter\x20Requirements>\x20with\x20a\x20troop\x20','prototype'];_0x2f86=function(){return _0x1e9985;};return _0x2f86();}(function(_0x8e5c57,_0x59d15b){const _0x59206d=_0x3ef5,_0x122998=_0x8e5c57();while(!![]){try{const _0x152e49=parseInt(_0x59206d(0x1bd))/0x1*(-parseInt(_0x59206d(0x18f))/0x2)+-parseInt(_0x59206d(0x1ce))/0x3+-parseInt(_0x59206d(0x1a4))/0x4+-parseInt(_0x59206d(0x1e2))/0x5+-parseInt(_0x59206d(0x1aa))/0x6*(parseInt(_0x59206d(0x1a3))/0x7)+-parseInt(_0x59206d(0x1a6))/0x8+parseInt(_0x59206d(0x17c))/0x9*(parseInt(_0x59206d(0x1d3))/0xa);if(_0x152e49===_0x59d15b)break;else _0x122998['push'](_0x122998['shift']());}catch(_0x4a95bd){_0x122998['push'](_0x122998['shift']());}}}(_0x2f86,0x7ec82));var label=_0x7d1c0c(0x1c6),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x7d1c0c(0x185)](function(_0x41fec5){const _0x48488a=_0x7d1c0c;return _0x41fec5[_0x48488a(0x1a0)]&&_0x41fec5[_0x48488a(0x1cb)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x7d1c0c(0x1db)]=VisuMZ[label][_0x7d1c0c(0x1db)]||{},VisuMZ[_0x7d1c0c(0x1c5)]=function(_0x39de6b,_0x6d2b1e){const _0x8c1523=_0x7d1c0c;for(const _0x469187 in _0x6d2b1e){if(_0x469187[_0x8c1523(0x1af)](/(.*):(.*)/i)){const _0x559c7a=String(RegExp['$1']),_0x5c1d6c=String(RegExp['$2'])[_0x8c1523(0x1d8)]()['trim']();let _0x2a0f79,_0x1a49fd,_0x2a3e1c;switch(_0x5c1d6c){case'NUM':_0x2a0f79=_0x6d2b1e[_0x469187]!==''?Number(_0x6d2b1e[_0x469187]):0x0;break;case'ARRAYNUM':_0x1a49fd=_0x6d2b1e[_0x469187]!==''?JSON[_0x8c1523(0x18b)](_0x6d2b1e[_0x469187]):[],_0x2a0f79=_0x1a49fd['map'](_0x43c751=>Number(_0x43c751));break;case _0x8c1523(0x1dd):_0x2a0f79=_0x6d2b1e[_0x469187]!==''?eval(_0x6d2b1e[_0x469187]):null;break;case _0x8c1523(0x1e1):_0x1a49fd=_0x6d2b1e[_0x469187]!==''?JSON[_0x8c1523(0x18b)](_0x6d2b1e[_0x469187]):[],_0x2a0f79=_0x1a49fd['map'](_0x2fa759=>eval(_0x2fa759));break;case _0x8c1523(0x19a):_0x2a0f79=_0x6d2b1e[_0x469187]!==''?JSON[_0x8c1523(0x18b)](_0x6d2b1e[_0x469187]):'';break;case _0x8c1523(0x184):_0x1a49fd=_0x6d2b1e[_0x469187]!==''?JSON['parse'](_0x6d2b1e[_0x469187]):[],_0x2a0f79=_0x1a49fd['map'](_0x603c2b=>JSON[_0x8c1523(0x18b)](_0x603c2b));break;case _0x8c1523(0x1e5):_0x2a0f79=_0x6d2b1e[_0x469187]!==''?new Function(JSON['parse'](_0x6d2b1e[_0x469187])):new Function(_0x8c1523(0x1c0));break;case _0x8c1523(0x193):_0x1a49fd=_0x6d2b1e[_0x469187]!==''?JSON[_0x8c1523(0x18b)](_0x6d2b1e[_0x469187]):[],_0x2a0f79=_0x1a49fd[_0x8c1523(0x1df)](_0x571ca1=>new Function(JSON[_0x8c1523(0x18b)](_0x571ca1)));break;case _0x8c1523(0x17e):_0x2a0f79=_0x6d2b1e[_0x469187]!==''?String(_0x6d2b1e[_0x469187]):'';break;case _0x8c1523(0x181):_0x1a49fd=_0x6d2b1e[_0x469187]!==''?JSON[_0x8c1523(0x18b)](_0x6d2b1e[_0x469187]):[],_0x2a0f79=_0x1a49fd[_0x8c1523(0x1df)](_0x406db3=>String(_0x406db3));break;case _0x8c1523(0x1be):_0x2a3e1c=_0x6d2b1e[_0x469187]!==''?JSON[_0x8c1523(0x18b)](_0x6d2b1e[_0x469187]):{},_0x2a0f79=VisuMZ[_0x8c1523(0x1c5)]({},_0x2a3e1c);break;case'ARRAYSTRUCT':_0x1a49fd=_0x6d2b1e[_0x469187]!==''?JSON[_0x8c1523(0x18b)](_0x6d2b1e[_0x469187]):[],_0x2a0f79=_0x1a49fd[_0x8c1523(0x1df)](_0x5d4e8c=>VisuMZ['ConvertParams']({},JSON[_0x8c1523(0x18b)](_0x5d4e8c)));break;default:continue;}_0x39de6b[_0x559c7a]=_0x2a0f79;}}return _0x39de6b;},(_0x5bb5fe=>{const _0x1deb07=_0x7d1c0c,_0x396d9e=_0x5bb5fe[_0x1deb07(0x182)];for(const _0xa14771 of dependencies){if(!Imported[_0xa14771]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x1deb07(0x18d)](_0x396d9e,_0xa14771)),SceneManager[_0x1deb07(0x1b6)]();break;}}const _0x3ee0c6=_0x5bb5fe[_0x1deb07(0x1cb)];if(_0x3ee0c6[_0x1deb07(0x1af)](/\[Version[ ](.*?)\]/i)){const _0x4183be=Number(RegExp['$1']);_0x4183be!==VisuMZ[label][_0x1deb07(0x1c1)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x396d9e,_0x4183be)),SceneManager['exit']());}if(_0x3ee0c6[_0x1deb07(0x1af)](/\[Tier[ ](\d+)\]/i)){const _0x510821=Number(RegExp['$1']);_0x510821<tier?(alert(_0x1deb07(0x1c7)['format'](_0x396d9e,_0x510821,tier)),SceneManager['exit']()):tier=Math[_0x1deb07(0x1a7)](_0x510821,tier);}VisuMZ[_0x1deb07(0x1c5)](VisuMZ[label]['Settings'],_0x5bb5fe[_0x1deb07(0x1ab)]);})(pluginData),DataManager['createTroopNote']=function(_0x567fa2){const _0x2dfd12=_0x7d1c0c,_0x34588d=$dataTroops[_0x567fa2];if(!_0x34588d)return'';let _0x584d6a='';_0x584d6a+=_0x34588d['name'];for(const _0x5f0d1c of _0x34588d[_0x2dfd12(0x1b7)]){for(const _0x32dd95 of _0x5f0d1c[_0x2dfd12(0x1e4)]){[0x6c,0x198][_0x2dfd12(0x17a)](_0x32dd95[_0x2dfd12(0x1b9)])&&(_0x584d6a+='\x0a',_0x584d6a+=_0x32dd95[_0x2dfd12(0x1ab)][0x0]);}}return _0x584d6a;},DataManager[_0x7d1c0c(0x19b)]=function(_0x4b84af){const _0x282f44=_0x7d1c0c;_0x4b84af=_0x4b84af['toUpperCase']()[_0x282f44(0x1ca)](),this[_0x282f44(0x1b1)]=this[_0x282f44(0x1b1)]||{};if(this[_0x282f44(0x1b1)][_0x4b84af])return this[_0x282f44(0x1b1)][_0x4b84af];for(const _0x453a6a of $dataActors){if(!_0x453a6a)continue;this[_0x282f44(0x1b1)][_0x453a6a['name']['toUpperCase']()[_0x282f44(0x1ca)]()]=_0x453a6a['id'];}return this[_0x282f44(0x1b1)][_0x4b84af]||0x0;},DataManager[_0x7d1c0c(0x1bb)]=function(_0x475301){const _0x44062f=_0x7d1c0c;_0x475301=_0x475301['toUpperCase']()['trim'](),this[_0x44062f(0x1ba)]=this[_0x44062f(0x1ba)]||{};if(this[_0x44062f(0x1ba)][_0x475301])return this[_0x44062f(0x1ba)][_0x475301];for(const _0x1ccd22 of $dataClasses){if(!_0x1ccd22)continue;let _0x3264a3=_0x1ccd22[_0x44062f(0x182)];_0x3264a3=_0x3264a3[_0x44062f(0x1b2)](/\x1I\[(\d+)\]/gi,''),_0x3264a3=_0x3264a3[_0x44062f(0x1b2)](/\\I\[(\d+)\]/gi,''),this[_0x44062f(0x1ba)][_0x3264a3[_0x44062f(0x1d8)]()[_0x44062f(0x1ca)]()]=_0x1ccd22['id'];}return this['_classIDs'][_0x475301]||0x0;},DataManager[_0x7d1c0c(0x1ad)]=function(_0x4c852f){const _0x31992c=_0x7d1c0c;_0x4c852f=_0x4c852f['toUpperCase']()['trim'](),this['_skillIDs']=this[_0x31992c(0x1b4)]||{};if(this['_skillIDs'][_0x4c852f])return this[_0x31992c(0x1b4)][_0x4c852f];for(const _0x1d703a of $dataSkills){if(!_0x1d703a)continue;this[_0x31992c(0x1b4)][_0x1d703a[_0x31992c(0x182)][_0x31992c(0x1d8)]()['trim']()]=_0x1d703a['id'];}return this['_skillIDs'][_0x4c852f]||0x0;},DataManager[_0x7d1c0c(0x19e)]=function(_0xedb631){const _0x13037a=_0x7d1c0c;_0xedb631=_0xedb631[_0x13037a(0x1d8)]()['trim'](),this[_0x13037a(0x19f)]=this[_0x13037a(0x19f)]||{};if(this[_0x13037a(0x19f)][_0xedb631])return this[_0x13037a(0x19f)][_0xedb631];for(const _0x5078fc of $dataItems){if(!_0x5078fc)continue;this[_0x13037a(0x19f)][_0x5078fc['name']['toUpperCase']()[_0x13037a(0x1ca)]()]=_0x5078fc['id'];}return this[_0x13037a(0x19f)][_0xedb631]||0x0;},DataManager[_0x7d1c0c(0x1a1)]=function(_0x2fb851){const _0x5732fe=_0x7d1c0c;_0x2fb851=_0x2fb851['toUpperCase']()[_0x5732fe(0x1ca)](),this[_0x5732fe(0x1d6)]=this['_weaponIDs']||{};if(this[_0x5732fe(0x1d6)][_0x2fb851])return this[_0x5732fe(0x1d6)][_0x2fb851];for(const _0x2e2565 of $dataWeapons){if(!_0x2e2565)continue;this[_0x5732fe(0x1d6)][_0x2e2565[_0x5732fe(0x182)][_0x5732fe(0x1d8)]()[_0x5732fe(0x1ca)]()]=_0x2e2565['id'];}return this[_0x5732fe(0x1d6)][_0x2fb851]||0x0;},DataManager[_0x7d1c0c(0x197)]=function(_0x2df9dc){const _0xbb71cd=_0x7d1c0c;_0x2df9dc=_0x2df9dc[_0xbb71cd(0x1d8)]()[_0xbb71cd(0x1ca)](),this['_armorIDs']=this['_armorIDs']||{};if(this[_0xbb71cd(0x1b8)][_0x2df9dc])return this[_0xbb71cd(0x1b8)][_0x2df9dc];for(const _0x1546bf of $dataArmors){if(!_0x1546bf)continue;this[_0xbb71cd(0x1b8)][_0x1546bf[_0xbb71cd(0x182)]['toUpperCase']()[_0xbb71cd(0x1ca)]()]=_0x1546bf['id'];}return this[_0xbb71cd(0x1b8)][_0x2df9dc]||0x0;},DataManager[_0x7d1c0c(0x1d1)]=function(_0x384d9f){const _0x5a2378=_0x7d1c0c;_0x384d9f=_0x384d9f['toUpperCase']()[_0x5a2378(0x1ca)](),this[_0x5a2378(0x1a9)]=this[_0x5a2378(0x1a9)]||{};if(this[_0x5a2378(0x1a9)][_0x384d9f])return this[_0x5a2378(0x1a9)][_0x384d9f];for(const _0xb40149 of $dataStates){if(!_0xb40149)continue;this[_0x5a2378(0x1a9)][_0xb40149[_0x5a2378(0x182)]['toUpperCase']()['trim']()]=_0xb40149['id'];}return this[_0x5a2378(0x1a9)][_0x384d9f]||0x0;},VisuMZ[_0x7d1c0c(0x1c6)][_0x7d1c0c(0x198)]=function(_0x2cc874){const _0x558499=_0x7d1c0c;_0x2cc874=_0x2cc874['toUpperCase']()[_0x558499(0x1ca)]();if(['I','ITEM',_0x558499(0x186)][_0x558499(0x17a)](_0x2cc874))return $dataItems;if(['W',_0x558499(0x1c3),'WEAPONS']['includes'](_0x2cc874))return $dataWeapons;if(['A',_0x558499(0x19c),'ARMORS']['includes'](_0x2cc874))return $dataArmors;if(['S',_0x558499(0x1bf),_0x558499(0x17d)]['includes'](_0x2cc874))return $dataSkills;if(['T',_0x558499(0x1b3),_0x558499(0x1c4)][_0x558499(0x17a)](_0x2cc874))return $dataStates;return $dataItems;},VisuMZ['ConditonalRandEnc']['getDatabaseKind']=function(_0x5bfad2){const _0x1e15b2=_0x7d1c0c;_0x5bfad2=_0x5bfad2['toUpperCase']()[_0x1e15b2(0x1ca)]();if(['I',_0x1e15b2(0x1cd),_0x1e15b2(0x186)][_0x1e15b2(0x17a)](_0x5bfad2))return 0x1;if(['W','WEAPON','WEAPONS'][_0x1e15b2(0x17a)](_0x5bfad2))return 0x2;if(['A','ARMOR',_0x1e15b2(0x17b)][_0x1e15b2(0x17a)](_0x5bfad2))return 0x3;return 0x0;},VisuMZ[_0x7d1c0c(0x1c6)][_0x7d1c0c(0x180)]=function(_0x31e9ce,_0x24987f){const _0x5e5945=_0x7d1c0c;_0x31e9ce=_0x31e9ce[_0x5e5945(0x1d8)]()['trim']();if(['I',_0x5e5945(0x1cd),_0x5e5945(0x186)][_0x5e5945(0x17a)](_0x31e9ce))return $dataItems[DataManager['getItemIdWithName'](_0x24987f)];if(['W',_0x5e5945(0x1c3),_0x5e5945(0x1a5)][_0x5e5945(0x17a)](_0x31e9ce))return $dataWeapons[DataManager['getWeaponIdWithName'](_0x24987f)];if(['A',_0x5e5945(0x19c),_0x5e5945(0x17b)][_0x5e5945(0x17a)](_0x31e9ce))return $dataArmors[DataManager['getArmorIdWithName'](_0x24987f)];if(['S',_0x5e5945(0x1bf),_0x5e5945(0x17d)][_0x5e5945(0x17a)](_0x31e9ce))return $dataSkills[DataManager[_0x5e5945(0x1ad)](_0x24987f)];if(['T',_0x5e5945(0x1b3),_0x5e5945(0x1c4)][_0x5e5945(0x17a)](_0x31e9ce))return $dataStates[DataManager[_0x5e5945(0x1d1)](_0x24987f)];return null;},VisuMZ[_0x7d1c0c(0x1c6)][_0x7d1c0c(0x1dc)]=function(_0x3c6188,_0x56d4f4){const _0x5db09a=_0x7d1c0c;_0x3c6188=_0x3c6188[_0x5db09a(0x1d8)]()[_0x5db09a(0x1ca)]();if(['I',_0x5db09a(0x1cd),_0x5db09a(0x186)]['includes'](_0x3c6188))return $dataItems[DataManager[_0x5db09a(0x19e)](_0x56d4f4)]['id'];if(['W',_0x5db09a(0x1c3),_0x5db09a(0x1a5)][_0x5db09a(0x17a)](_0x3c6188))return $dataWeapons[DataManager['getWeaponIdWithName'](_0x56d4f4)]['id'];if(['A',_0x5db09a(0x19c),_0x5db09a(0x17b)][_0x5db09a(0x17a)](_0x3c6188))return $dataArmors[DataManager[_0x5db09a(0x197)](_0x56d4f4)]['id'];return 0x0;},VisuMZ['ConditonalRandEnc'][_0x7d1c0c(0x1e0)]=Game_System['prototype'][_0x7d1c0c(0x19d)],Game_System['prototype'][_0x7d1c0c(0x19d)]=function(){const _0x426231=_0x7d1c0c;return this[_0x426231(0x18a)]()||VisuMZ[_0x426231(0x1c6)][_0x426231(0x1e0)][_0x426231(0x1bc)](this);},Game_System['prototype'][_0x7d1c0c(0x18a)]=function(){const _0x3122f3=_0x7d1c0c,_0x3031eb=$dataTroops[$gameTroop[_0x3122f3(0x190)]||0x0];if(_0x3031eb){let _0x5924b2=DataManager[_0x3122f3(0x1a8)](_0x3031eb['id'])||'';if(_0x5924b2[_0x3122f3(0x1af)](/<(?:FORCE|FORCED) BGM>\s*([\s\S]*)\s*<\/(?:FORCE|FORCED) BGM>/i)){const _0x4ce859=String(RegExp['$1']),_0x4ae2b9={'name':'','volume':0x5a,'pitch':0x64,'pan':0x0},_0x5ee569=_0x4ce859['split'](/[\r\n]+/);for(const _0x564fc1 of _0x5ee569){_0x564fc1[_0x3122f3(0x1af)](/NAME:[ ]*(.*)/i)&&(_0x4ae2b9[_0x3122f3(0x182)]=String(RegExp['$1'])),_0x564fc1[_0x3122f3(0x1af)](/VOLUME:[ ]*(.*)/i)&&(_0x4ae2b9[_0x3122f3(0x18c)]=Number(RegExp['$1'])[_0x3122f3(0x1e3)](0x0,0x64)),_0x564fc1['match'](/PITCH:[ ]*(.*)/i)&&(_0x4ae2b9[_0x3122f3(0x1b0)]=Number(RegExp['$1'])['clamp'](0x0,0x3e8)),_0x564fc1[_0x3122f3(0x1af)](/PAN:[ ]*(.*)/i)&&(_0x4ae2b9[_0x3122f3(0x1d4)]=Number(RegExp['$1'])[_0x3122f3(0x1e3)](-0x64,0x64));}if(_0x4ae2b9[_0x3122f3(0x182)]!=='')return _0x4ae2b9;}}return null;},VisuMZ[_0x7d1c0c(0x1c6)]['Game_Player_meetsEncounterConditions']=Game_Player['prototype'][_0x7d1c0c(0x1d7)],Game_Player[_0x7d1c0c(0x1c9)][_0x7d1c0c(0x1d7)]=function(_0x49ffdd){const _0x12e9d2=_0x7d1c0c;if(!_0x49ffdd)return![];let _0x337ff9=VisuMZ[_0x12e9d2(0x1c6)][_0x12e9d2(0x1cc)][_0x12e9d2(0x1bc)](this,_0x49ffdd);if(!_0x337ff9)return![];let _0x55358e=_0x49ffdd[_0x12e9d2(0x189)];const _0x2d5a90=$dataTroops[_0x55358e];if(!_0x2d5a90)return![];const _0x42ce8d=DataManager[_0x12e9d2(0x1a8)](_0x2d5a90['id']);return this[_0x12e9d2(0x1de)](_0x42ce8d,_0x2d5a90['id']);},Game_Player[_0x7d1c0c(0x1c9)]['meetsConditionalRandomEncounterConditions']=function(_0x25c012,_0x232709){const _0x271f5c=_0x7d1c0c;if(_0x25c012['match'](/<RANDOM ENCOUNTER (?:REQ|REQUIREMENT|REQUIREMENTS)>\s*([\s\S]*)\s*<\/RANDOM ENCOUNTER (?:REQ|REQUIREMENT|REQUIREMENTS)>/i)){if(Imported[_0x271f5c(0x1a2)]){const _0x3acd1f=VisuMZ[_0x271f5c(0x183)][_0x271f5c(0x1db)][_0x271f5c(0x1d9)][_0x271f5c(0x192)];if(_0x3acd1f['includes'](_0x232709)){let _0x4511b1='';_0x4511b1+='Error\x20with\x20Troop\x20ID\x20'+_0x232709+_0x271f5c(0x1d2),_0x4511b1+=_0x271f5c(0x1c8),_0x4511b1+=_0x271f5c(0x187),_0x4511b1+='Either\x20adjust\x20the\x20Base\x20Troop\x20IDs\x20found\x20in\x20the\x20Battle\x20Core\x20',_0x4511b1+='Mechanics\x20settings\x20or\x20duplicate\x20this\x20troop\x20to\x20an\x20ID\x20that\x20is\x20not\x20',_0x4511b1+=_0x271f5c(0x1c2),_0x4511b1+=_0x271f5c(0x194)+_0x232709+'!',alert(_0x4511b1),SceneManager[_0x271f5c(0x1b6)]();}}let _0x411ae7=String(RegExp['$1']);_0x411ae7=VisuMZ[_0x271f5c(0x1c6)][_0x271f5c(0x1da)](_0x411ae7)[_0x271f5c(0x1ca)]();const _0x59703d=_0x411ae7[_0x271f5c(0x195)](/[\r\n]+/);for(const _0x5ca560 of _0x59703d){if(!this[_0x271f5c(0x1b5)](_0x5ca560))return![];}}return!![];},VisuMZ['ConditonalRandEnc'][_0x7d1c0c(0x1da)]=function(_0x3bc344){const _0x2061e0=_0x7d1c0c;while(_0x3bc344[_0x2061e0(0x1af)](/\b\\V\[(\d+)\]\b/gi)){_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/\b\\V\[(\d+)\]\b/gi,(_0x1b1c73,_0x359aa6)=>$gameVariables[_0x2061e0(0x1d5)](parseInt(_0x359aa6)));}while(_0x3bc344[_0x2061e0(0x1af)](/\bVARIABLE (\d+)\b/gi)){_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/\bVARIABLE (\d+)\b/gi,(_0x1259a4,_0x16d18e)=>$gameVariables['value'](parseInt(_0x16d18e)));}return _0x3bc344=_0x3bc344['replace'](/\\S\[(\d+)\] ON/gi,(_0x3c7955,_0x339cdd)=>String($gameSwitches[_0x2061e0(0x1d5)](parseInt(_0x339cdd))===!![])),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/\\S\[(\d+)\] OFF/gi,(_0x121262,_0x204e77)=>String($gameSwitches[_0x2061e0(0x1d5)](parseInt(_0x204e77))===![])),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/\\S\[(\d+)\]/gi,(_0x298970,_0x1a64de)=>String($gameSwitches['value'](parseInt(_0x1a64de)))),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/SWITCH (\d+) ON/gi,(_0x1b3f10,_0x1ac3d4)=>String($gameSwitches['value'](parseInt(_0x1ac3d4))===!![])),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/SWITCH (\d+) OFF/gi,(_0x3aa3d1,_0x3298ee)=>String($gameSwitches[_0x2061e0(0x1d5)](parseInt(_0x3298ee))===![])),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/SWITCH (\d+)/gi,(_0xe35d52,_0x389376)=>String($gameSwitches['value'](parseInt(_0x389376)))),_0x3bc344=_0x3bc344['replace'](/\bON\b/gi,_0x2061e0(0x17f)),_0x3bc344=_0x3bc344['replace'](/\bOFF\b/gi,_0x2061e0(0x196)),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/\bTRUE\b/gi,_0x2061e0(0x17f)),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/\bFALSE\b/gi,'false'),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/\b(ITEM|WEAPON|ARMOR)[ ](\d+)[ ]COUNT\b/gi,(_0x4a7afe,_0x17c73d,_0x5ad07c)=>{const _0x251139=_0x2061e0,_0xd6413e=VisuMZ['ConditonalRandEnc'][_0x251139(0x198)](_0x17c73d),_0x4f17ed=_0xd6413e[Number(_0x5ad07c)]||null;return _0x4f17ed?$gameParty[_0x251139(0x1ac)](_0x4f17ed):0x0;}),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/\b(ITEM|WEAPON|ARMOR)[ ](.*)[ ]COUNT\b/gi,(_0x1149ea,_0x3be15f,_0xe0a1a7)=>{const _0x1d5f39=_0x2061e0,_0x2770a4=VisuMZ['ConditonalRandEnc'][_0x1d5f39(0x180)](_0x3be15f,_0xe0a1a7);return _0x2770a4?$gameParty[_0x1d5f39(0x1ac)](_0x2770a4):0x0;}),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/\bALIVE MEMBERS\b/gi,$gameParty[_0x2061e0(0x1d0)]()[_0x2061e0(0x191)]),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/\bBATTLE MEMBERS\b/gi,$gameParty[_0x2061e0(0x199)]()[_0x2061e0(0x191)]),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/\bDEAD MEMBERS\b/gi,$gameParty[_0x2061e0(0x1cf)]()['length']),_0x3bc344=_0x3bc344[_0x2061e0(0x1b2)](/\bPARTY GOLD\b/gi,$gameParty[_0x2061e0(0x18e)]()),_0x3bc344=_0x3bc344['replace'](/\bPARTY MEMBERS\b/gi,$gameParty[_0x2061e0(0x188)]()[_0x2061e0(0x191)]),_0x3bc344[_0x2061e0(0x1ca)]();},Game_Player[_0x7d1c0c(0x1c9)]['meetsConditionalRandomEncounterRequirement']=function(_0x25b98f){const _0xe3de10=_0x7d1c0c;let _0x5b9a16=![];if(_0x5b9a16)console[_0xe3de10(0x1ae)](_0x25b98f);try{return eval(_0x25b98f);}catch(_0x196168){return![];}};