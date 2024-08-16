//=============================================================================
// VisuStella MZ - Weapon Swap System
// VisuMZ_2_WeaponSwapSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_WeaponSwapSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeaponSwapSystem = VisuMZ.WeaponSwapSystem || {};
VisuMZ.WeaponSwapSystem.version = 1.12;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.12] [WeaponSwapSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weapon_Swap_System_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_ItemsEquipsCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds in a Weapon Swap System. Actors can equip a different
 * weapon for each weapon type available for use. These weapons can be swapped
 * to and from during the middle of a battle. Swapping weapons can let the
 * player's team adapt to certain situations better or giving them the ability
 * to hit certain weapon weaknesses in battle.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actors can equip multiple weapons, one for each weapon type.
 * * These weapons can be switched during the middle of battle.
 * * Choose to display only equippable weapon types in the Equip Menu or all
 *   of the possible weapon types.
 * * Have certain skills switch over to different equipped weapons when
 *   performing them.
 * * Shortcut keys to allow switching between weapon types easily when
 *   selecting commands.
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
 * * VisuMZ_1_BattleCore
 * * VisuMZ_1_ItemsEquipsCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
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
 * Dual Wielding
 * 
 * Dual Wielding properties have been disabled to allow for the Weapon Swap
 * System. There are too many conflicts between it and the Weapon Swap System.
 * There is simply no way around it.
 *
 * ---
 * 
 * Required Weapons
 * 
 * RPG Maker MZ's skills allowed for Required Weapons and needed the actor to
 * have any of the said weapon type(s) equipped upon usage. This function has
 * now been changed. Now, as long as the actor has any of the weapon types
 * available and a weapon attached to it, the actor will be able to use the
 * skill without needing to switch to that weapon first.
 * 
 * When using the skill, the actor will switch to the first available weapon
 * type if needed as long as it is a requirement.
 * 
 * ---
 * 
 * Locked Weapons and Sealed Weapons
 * 
 * Actors that can weapon swap are now immune to Lock Weapon and Seal Weapon
 * traits as they go against the nature of this plugin.
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
 * VisuMZ_1_ItemsEquipsCore
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
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
 * === Skill Usage-Related Notetags ===
 * 
 * ---
 *
 * <Require Any Weapon>
 *
 * - Used for: Skill Notetags
 * - Requires the actor to have any weapon equipped in order to use the skill,
 *   regardless of the weapon's type.
 * - This does not affect enemies.
 *
 * ---
 *
 * <Switch to Weapon Type: id>
 * <Switch to Weapon Type: name>
 *
 * - Used for: Skill Notetags
 * - When using the skill, the actor will switch to the equipped weapon of the
 *   matching type.
 * - Replace 'id' with a number representing the weapon type's ID.
 * - Replace 'name' with the name of the weapon type.
 * - Weapon types are not the same as weapons. Weapon types are found in the
 *   Database > Types tab.
 * - This does not affect enemies.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * There's not too many mechanics that can be modified through the Plugin
 * Parameters, but the setting here will at least let you ease up on testing
 * battles from the database.
 *
 * ---
 *
 * Battle Test
 * 
 *   Equip All Weapons?:
 *   - Do you want to equip one of each weapon type during battle tests for
 *     all actors?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * The following Plugin Parameters are dedicated towards modifying the UI
 * elements added through this plugin.
 *
 * ---
 *
 * Attack Command
 * 
 *   Change Attack Icon?:
 *   - Change the Attack command to show the weapon?
 *   - Or have it represent the Attack skill?
 * 
 *   Swap Shortcut?:
 *   - Allow shortcut to switch weapons while selecting the Attack command?
 * 
 *     Show Arrows?:
 *     - Show arrows to the left and right of the Attack command for an easy
 *       reminder of the shortcut?
 *
 * ---
 *
 * Swap Command
 * 
 *   Show Command?:
 *   - Show the Swap weapon command in the Actor Command Window?
 *   - The Swap weapon command will be listed by default after the Attack
 *     command.
 *     - If you do not have the Attack command, it will not be shown unless you
 *       add "Weapon Swap" to the battle command list.
 * 
 * 
 *   Swap Icon:
 *   - What icon do you wish to use to represent the Swap command for the
 *     Actor Command Window?
 * 
 *   Swap Name:
 *   - What text do you want to use to represent the Swap command for the
 *     Actor Command Window?
 * 
 *   Help: Swap:
 *   - Help text for Swap command.
 *
 * ---
 *
 * Equip Scene
 * 
 *   Show Unequippable?:
 *   - Show all weapon types in the equip scene?
 *   - Or only just the equippable ones?
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
 * * Bug Fixes!
 * ** Fixed a bug where the incorrect difference is displayed for swap weapons.
 *    Fix made by Olivia.
 * 
 * Version 1.11: March 14, 2024
 * * Documentation Update!
 * ** Added "Locked Weapons and Sealed Weapons" to Major Changes.
 * * Feature Update!
 * ** Actors that can weapon swap are now immune to Lock Weapon and Seal Weapon
 *    traits as they go against the nature of this plugin.
 * 
 * Version 1.10: August 11, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused item duplication with the "Clear Equipment"
 *    command found in the equip scene. Fix made by Irina.
 * ** Fixed a bug that caused the optimize command to not factor in the weapons
 *    held by the current actor. Fix made by Irina.
 * 
 * Version 1.09: December 9, 2021
 * * Compatibility Update!
 * ** Changing classes via the Class Change System plugin should no longer dupe
 *    weapons under specific circumstances. Update made by Olivia.
 * * Feature Update!
 * ** Upon an actor's turn to input a command, if the actor is barefisted while
 *    having available swap weapons, it will default the choice to the first
 *    available slot. Update made by Olivia.
 * ** The barefisted equip would occur before because when navigating the equip
 *    menu, the switched weapon type would change to whatever is selected. If
 *    you go to a slot without any weapons equipped, it would be as having a
 *    barehanded setup.
 * 
 * Version 1.08: July 9, 2021
 * * Bug Fixes!
 * ** Removed a potential equipment duplication exploit with changing classes.
 *    Fix made by Olivia.
 * 
 * Version 1.07: July 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: June 25, 2021
 * * Bug Fixes!
 * ** Have the "Shortcut" plugin parameter off will no longer cause crashes.
 *    Fix made by Olivia.
 * 
 * Version 1.05: June 4, 2021
 * * Bug Fixes!
 * ** Fixed weapon swap notetags to have them occur naturally. Fix by Arisu.
 * 
 * Version 1.04: May 28, 2021
 * * Bug Fixes!
 * ** Cache clear will now occur when using automatic switching to update any
 *    cached stats for actors. Fix made by Olivia.
 * 
 * Version 1.03: May 21, 2021
 * * Bug Fixes!
 * ** Weapon type requirements for skills will the weapon type to be equipped
 *    as one of the available slots. Fix made by Olivia.
 * 
 * Version 1.02: April 16, 2021
 * * Bug Fixes!
 * ** Shortcut arrows should no longer be visible when an actor has only one
 *    weapon to swap to and from. Fix made by Olivia.
 * * Compatibility Update!
 * ** Weapon Swap System should now be compatible with the Item and Equip
 *    Core's non-removable types setting. Update made by Irina.
 * 
 * Version 1.01: April 9, 2021
 * * Bug Fixes!
 * ** Shortcut arrow now accounts for changes in the actor command window size
 *    when updated post-initialization. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Documentation updated for the "UI Settings Plugin Parameters":
 * *** The Swap weapon command will be listed by default after the Attack
 *     command.
 * **** If you do not have the Attack command, it will not be shown unless you
 *      add "Weapon Swap" to the battle command list.
 * * New Features!
 * ** New Plugin Parameters added by Olivia!
 * *** Plugin Parameters > UI Settings > Help: Swap
 * **** Help text for Swap command.
 *
 * Version 1.00 Official Release Date: May 3, 2021
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
 * @param WeaponSwapSystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Mechanics settings for the Weapon Swap System.
 * @default {"Testing":"","BattleTestAllWeapons:eval":"true"}
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc UI settings for the Weapon Swap System.
 * @default {"AttackCommand":"","ChangeAttackIcon:eval":"true","SwapShortcut:eval":"true","ShowShortcutArrows:eval":"true","SwapCommand":"","ShowSwapCommand:eval":"false","SwapCommandIcon:num":"76","SwapCommandName:str":"Swap","EquipScene":"","ShowUnequippable:eval":"false"}
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
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param Testing
 * @text Battle Test
 *
 * @param BattleTestAllWeapons:eval
 * @text Equip All Weapons?
 * @parent Testing
 * @type boolean
 * @on All Weapons
 * @off Just Settings
 * @desc Do you want to equip one of each weapon type during
 * battle tests for all actors?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param AttackCommand
 * @text Attack Command
 *
 * @param ChangeAttackIcon:eval
 * @text Change Attack Icon?
 * @parent AttackCommand
 * @type boolean
 * @on Represent Weapon
 * @off Represent Skill Icon
 * @desc Change the Attack command to show the weapon?
 * Or have it represent the Attack skill?
 * @default true
 *
 * @param SwapShortcut:eval
 * @text Swap Shortcut?
 * @parent AttackCommand
 * @type boolean
 * @on Allow Shortcut
 * @off Don't Use
 * @desc Allow shortcut to switch weapons while selecting
 * the Attack command?
 * @default true
 *
 * @param ShowShortcutArrows:eval
 * @text Show Arrows?
 * @parent SwapShortcut:eval
 * @type boolean
 * @on Show Arrows
 * @off Hide Arrows
 * @desc Show arrows to the left and right of the Attack
 * command for an easy reminder of the shortcut?
 * @default true
 *
 * @param SwapCommand
 * @text Swap Command
 *
 * @param ShowSwapCommand:eval
 * @text Show Command?
 * @parent SwapCommand
 * @type boolean
 * @on Show Command
 * @off Hide Command
 * @desc Show the Swap weapon command in the
 * Actor Command Window?
 * @default true
 *
 * @param SwapCommandIcon:num
 * @text Swap Icon
 * @parent SwapCommand
 * @desc What icon do you wish to use to represent the
 * Swap command for the Actor Command Window?
 * @default 76
 *
 * @param SwapCommandName:str
 * @text Swap Name
 * @parent SwapCommand
 * @desc What text do you want to use to represent the
 * Swap command for the Actor Command Window?
 * @default Swap
 *
 * @param BattleHelpSwap:json
 * @text Help: Swap
 * @parent SwapCommand
 * @type note
 * @desc Help text for Swap command.
 * @default "Switch out the current weapon."
 *
 * @param EquipScene
 * @text Equip Scene
 *
 * @param ShowUnequippable:eval
 * @text Show Unequippable?
 * @parent EquipScene
 * @type boolean
 * @on All Weapons
 * @off Equippable Weapons
 * @desc Show all weapon types in the equip scene?
 * Or only just the equippable ones?
 * @default false
 *
 */
//=============================================================================

function _0x2bca(){const _0x4855cd=['requiredWtypeId2','playEquip','clearEquipments','length','35qGxOKk','Game_Actor_equipSlots','nonRemovableEtypes','_tempActor','equipSlotIndex','actorSlotNameWeaponSwap','match','BattleHelpSwap','_statusWindow','Scene_Battle_createActorCommandWindow','trim','SwapShortcut','ShowUnequippable','alterAttackCommand','WEAPON_SWAP_SHORTCUT_ARROWS','updateShortcutOpacity','getFirstOfEachWeaponType','parse','_itemWindow','isEquipChangeOk','Game_BattlerBase_meetsSkillConditions','_weaponSwapShortcutSprite_Right','isWeaponSwapShortcutEnabled','1563256PHxQwh','addWeaponSwapCommand','2861139ITivfW','getWtypeIdWithName','151481FoNQiA','opacity','addAttackCommand','isSkillWtypeOk','_scene','_checkingWeaponSwaps','maxItems','_list','isOptimizeEquipOk','RequireAnyWpn','Window_EquipItem_isEnabled','setText','requestMotionRefresh','optimizeSwappableWeapons','_currentweapontype','NUM','commandWeaponSwap','remove','onWeaponSwap','Window_Base_playOkSound','isActor','return\x200','gainItem','playOkSound','height','iconIndex','isEnabledWeaponSwap','Window_ActorCommand_addAttackCommand','equipSlots','changeEquip','FUNC','push','ARRAYSTRUCT','item','setSwapWeapon','note','weaponSwapTypes','performWeaponSwap','MISSING\x20WEAPON\x20TYPE:\x20%1','Window_ActorCommand','Window_EquipSlot_isEnabled','isDualWield','createWeaponSwapTypes','ARRAYNUM','JSON','_swapWeapons','2660980IhSlLi','createActorCommandWindow','version','replace','format','isEnabled','clearSwappableWeapons','description','performAttack','attackSkillId','map','callUpdateHelp','actorSlotName','visible','ARRAYFUNC','Window_StatusBase_actorSlotName','ARRAYJSON','SwapCommandName','getAllEquippedSwapWeapons','_cache','_slotId','_swappingWeapon','Game_Actor_initEquips','canWeaponSwap','requiredWtypeId1','toUpperCase','releaseUnequippableItems','147820OeofAN','isEquipWtypeOk','Window_EquipItem_setSlotId','padding','Game_Action_applyGlobal','STR','setFrame','weapons','parameters','Settings','ARRAYEVAL','isWeaponSwapShortcutVisible','Game_Actor_isDualWield','isSkill','WEAPON_SWAP_SHORTCUT_ENABLE','canAddSkillCommand','concat','parent','Window_EquipItem_initialize','Window_ActorCommand_initialize','_actorCommandWindow','_equips','SwapCommandIcon','currentSymbol','lineHeight','updateHelp','ARRAYSTR','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Game_Actor_isEquipChangeOk','WEAPON_SWAP_CHANGE_ATTACK_ICON','switchToWeaponType','setHandler','swapWeaponHelp','wtypeId','10ddkpah','refresh','Game_BattlerBase_isEquipTypeSealed','_wtypeIDs','setup','processWeaponSwapRelease','WEAPON_SWAP_SYSTEM_SHOW_UNEQUIPPABLE_SLOTS','anchor','RegExp','Sprite_Actor_refreshMotion','WEAPON_SWAP_SHOW_COMMAND','changeWeapon','prototype','setupBattleTestMembers','ShowShortcutArrows','WeaponSwapSystem','Game_Actor_optimizeEquipments','applyGlobal','splice','weaponTypes','createWeaponSwapShortcutSprites','_currentWeaponType','Game_Actor_changeEquip','_wtypeID','swapWeaponPrevious','ConvertParams','Game_Actor_isOptimizeEquipOk','updateArrows','swapWeaponNext','findSymbol','initWeaponSwapSystem','call','WEAPON_SWAP_BATTLE_TEST_ALL_WEAPONS','itemRect','max','unshift','constructor','Switch\x20out\x20the\x20current\x20weapon.','ShowSwapCommand','itemAt','_weaponSwapShortcutSprite_Left','tradeItemWithParty','bestEquipWeapon','status','activate','drawActorParamDifference','width','cursorLeft','_actor','round','BattleTestAllWeapons','contentsOpacity','Window_EquipSlot_equipSlotIndex','_helpWindow','updateSwapToNextAvailableWeapon','filter','optimizeEquipments','refreshMotion','_item','weaponSwap','\x5cI[%1]%2','updateWeaponSwapShortcutSprites','isClearEquipOk','exit','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','etypeId','getSwapWeapon','applyWeaponSwapAction','swapWeaponCmd','Window_EquipSlot_maxItems','meetsSkillConditions','Window_EquipSlot_itemAt','name','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','STRUCT','meetsAnyWeaponEquippedCondition','Window_EquipItem_includes','subject','Window','indexOf','commandStyle','isEquipTypeSealed','isWeapon','VisuMZ_1_BattleCore','_firstOfEachWeaponType','attack','initialize','Window_ActorCommand_setup','Window_ActorCommand_updateHelp','Game_Actor_isClearEquipOk','includes','12332115waTClo','executeEquipChange','processShiftRemoveShortcut','setObject','ChangeAttackIcon','battleCommandName','2224626sPonWe','cursorRight','maxItemsWeaponSwap','setupBattleTestWeapons','actor'];_0x2bca=function(){return _0x4855cd;};return _0x2bca();}const _0x17c892=_0x272c;(function(_0x6dac2,_0x2aa3b9){const _0x30c171=_0x272c,_0x977d9a=_0x6dac2();while(!![]){try{const _0xff38ac=-parseInt(_0x30c171(0x179))/0x1+parseInt(_0x30c171(0x1c2))/0x2+parseInt(_0x30c171(0x177))/0x3+-parseInt(_0x30c171(0x1a7))/0x4+-parseInt(_0x30c171(0x1e4))/0x5*(-parseInt(_0x30c171(0x155))/0x6)+parseInt(_0x30c171(0x15e))/0x7*(parseInt(_0x30c171(0x175))/0x8)+-parseInt(_0x30c171(0x14f))/0x9;if(_0xff38ac===_0x2aa3b9)break;else _0x977d9a['push'](_0x977d9a['shift']());}catch(_0x320d06){_0x977d9a['push'](_0x977d9a['shift']());}}}(_0x2bca,0x88887));function _0x272c(_0x1196d1,_0x162969){const _0x2bca0f=_0x2bca();return _0x272c=function(_0x272cae,_0x4d070a){_0x272cae=_0x272cae-0x13d;let _0xaf7eb0=_0x2bca0f[_0x272cae];return _0xaf7eb0;},_0x272c(_0x1196d1,_0x162969);}var label='WeaponSwapSystem',tier=tier||0x0,dependencies=[_0x17c892(0x147),'VisuMZ_1_ItemsEquipsCore'],pluginData=$plugins[_0x17c892(0x21b)](function(_0xbc6ec6){const _0x364a9b=_0x17c892;return _0xbc6ec6[_0x364a9b(0x20f)]&&_0xbc6ec6[_0x364a9b(0x1ae)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x17c892(0x1cb)]=VisuMZ[label][_0x17c892(0x1cb)]||{},VisuMZ[_0x17c892(0x1fd)]=function(_0x56b0e7,_0x46854b){const _0x593f9c=_0x17c892;for(const _0x32eec8 in _0x46854b){if(_0x32eec8[_0x593f9c(0x164)](/(.*):(.*)/i)){const _0x2798bb=String(RegExp['$1']),_0x3f55c9=String(RegExp['$2'])[_0x593f9c(0x1c0)]()[_0x593f9c(0x168)]();let _0x4aaa5a,_0x540d17,_0x33264f;switch(_0x3f55c9){case _0x593f9c(0x188):_0x4aaa5a=_0x46854b[_0x32eec8]!==''?Number(_0x46854b[_0x32eec8]):0x0;break;case _0x593f9c(0x1a4):_0x540d17=_0x46854b[_0x32eec8]!==''?JSON[_0x593f9c(0x16f)](_0x46854b[_0x32eec8]):[],_0x4aaa5a=_0x540d17['map'](_0xdd60d9=>Number(_0xdd60d9));break;case'EVAL':_0x4aaa5a=_0x46854b[_0x32eec8]!==''?eval(_0x46854b[_0x32eec8]):null;break;case _0x593f9c(0x1cc):_0x540d17=_0x46854b[_0x32eec8]!==''?JSON[_0x593f9c(0x16f)](_0x46854b[_0x32eec8]):[],_0x4aaa5a=_0x540d17[_0x593f9c(0x1b1)](_0x5daa09=>eval(_0x5daa09));break;case _0x593f9c(0x1a5):_0x4aaa5a=_0x46854b[_0x32eec8]!==''?JSON[_0x593f9c(0x16f)](_0x46854b[_0x32eec8]):'';break;case _0x593f9c(0x1b7):_0x540d17=_0x46854b[_0x32eec8]!==''?JSON[_0x593f9c(0x16f)](_0x46854b[_0x32eec8]):[],_0x4aaa5a=_0x540d17[_0x593f9c(0x1b1)](_0x5bdea8=>JSON['parse'](_0x5bdea8));break;case _0x593f9c(0x197):_0x4aaa5a=_0x46854b[_0x32eec8]!==''?new Function(JSON[_0x593f9c(0x16f)](_0x46854b[_0x32eec8])):new Function(_0x593f9c(0x18e));break;case _0x593f9c(0x1b5):_0x540d17=_0x46854b[_0x32eec8]!==''?JSON[_0x593f9c(0x16f)](_0x46854b[_0x32eec8]):[],_0x4aaa5a=_0x540d17[_0x593f9c(0x1b1)](_0x2d7edc=>new Function(JSON['parse'](_0x2d7edc)));break;case _0x593f9c(0x1c7):_0x4aaa5a=_0x46854b[_0x32eec8]!==''?String(_0x46854b[_0x32eec8]):'';break;case _0x593f9c(0x1dc):_0x540d17=_0x46854b[_0x32eec8]!==''?JSON[_0x593f9c(0x16f)](_0x46854b[_0x32eec8]):[],_0x4aaa5a=_0x540d17[_0x593f9c(0x1b1)](_0x2fb9a9=>String(_0x2fb9a9));break;case _0x593f9c(0x13e):_0x33264f=_0x46854b[_0x32eec8]!==''?JSON[_0x593f9c(0x16f)](_0x46854b[_0x32eec8]):{},_0x4aaa5a=VisuMZ['ConvertParams']({},_0x33264f);break;case _0x593f9c(0x199):_0x540d17=_0x46854b[_0x32eec8]!==''?JSON[_0x593f9c(0x16f)](_0x46854b[_0x32eec8]):[],_0x4aaa5a=_0x540d17[_0x593f9c(0x1b1)](_0x26f0f7=>VisuMZ[_0x593f9c(0x1fd)]({},JSON[_0x593f9c(0x16f)](_0x26f0f7)));break;default:continue;}_0x56b0e7[_0x2798bb]=_0x4aaa5a;}}return _0x56b0e7;},(_0x3f2830=>{const _0x3b6ce0=_0x17c892,_0x653d96=_0x3f2830[_0x3b6ce0(0x22c)];for(const _0x3e11ec of dependencies){if(!Imported[_0x3e11ec]){alert(_0x3b6ce0(0x13d)[_0x3b6ce0(0x1ab)](_0x653d96,_0x3e11ec)),SceneManager[_0x3b6ce0(0x223)]();break;}}const _0x2b55b4=_0x3f2830['description'];if(_0x2b55b4[_0x3b6ce0(0x164)](/\[Version[ ](.*?)\]/i)){const _0x504853=Number(RegExp['$1']);_0x504853!==VisuMZ[label][_0x3b6ce0(0x1a9)]&&(alert(_0x3b6ce0(0x1dd)[_0x3b6ce0(0x1ab)](_0x653d96,_0x504853)),SceneManager[_0x3b6ce0(0x223)]());}if(_0x2b55b4['match'](/\[Tier[ ](\d+)\]/i)){const _0x1a6be6=Number(RegExp['$1']);_0x1a6be6<tier?(alert(_0x3b6ce0(0x224)['format'](_0x653d96,_0x1a6be6,tier)),SceneManager[_0x3b6ce0(0x223)]()):tier=Math[_0x3b6ce0(0x206)](_0x1a6be6,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x3b6ce0(0x1cb)],_0x3f2830[_0x3b6ce0(0x1ca)]);})(pluginData),VisuMZ['WeaponSwapSystem'][_0x17c892(0x1ec)]={'RequireAnyWpn':/<(?:REQUIRE|REQUIRES) ANY (?:WEAPON|WEAPONS)>/i,'SwitchWpnTypeNum':/<(?:SWITCH|SWITCHES) TO (?:WEAPON|WEAPON TYPE|WTYPE):[ ](\d+)>/i,'SwitchWpnTypeStr':/<(?:SWITCH|SWITCHES) TO (?:WEAPON|WEAPON TYPE|WTYPE):[ ](\d+)>/i},DataManager[_0x17c892(0x16e)]=function(){const _0x4f675f=_0x17c892;if(this[_0x4f675f(0x148)])return this[_0x4f675f(0x148)];this[_0x4f675f(0x148)]=[];for(let _0x526eca=0x1;_0x526eca<$dataSystem[_0x4f675f(0x1f7)][_0x4f675f(0x15d)];_0x526eca++){const _0x516907=$dataWeapons[_0x4f675f(0x21b)](_0x2108b5=>_0x2108b5&&_0x2108b5[_0x4f675f(0x1e3)]===_0x526eca),_0x432862=_0x516907[0x0]||null;!_0x432862&&console['log'](_0x4f675f(0x19f)[_0x4f675f(0x1ab)]($dataSystem[_0x4f675f(0x1f7)][_0x526eca][_0x4f675f(0x1aa)](/\\I\[(\d+)\]/gi,''))),this['_firstOfEachWeaponType'][_0x4f675f(0x198)](_0x432862);}return this[_0x4f675f(0x148)][_0x4f675f(0x18a)](null)[_0x4f675f(0x18a)](undefined),this[_0x4f675f(0x148)];},DataManager['getWtypeIdWithName']=function(_0x2acd05){const _0x5c55be=_0x17c892;_0x2acd05=_0x2acd05[_0x5c55be(0x1c0)]()[_0x5c55be(0x168)](),this['_wtypeIDs']=this[_0x5c55be(0x1e7)]||{};if(this['_wtypeIDs'][_0x2acd05])return this['_wtypeIDs'][_0x2acd05];for(let _0x2ca659=0x1;_0x2ca659<0x64;_0x2ca659++){if(!$dataSystem[_0x5c55be(0x1f7)][_0x2ca659])continue;let _0x141004=$dataSystem[_0x5c55be(0x1f7)][_0x2ca659][_0x5c55be(0x1c0)]()[_0x5c55be(0x168)]();_0x141004=_0x141004[_0x5c55be(0x1aa)](/\x1I\[(\d+)\]/gi,''),_0x141004=_0x141004['replace'](/\\I\[(\d+)\]/gi,''),this[_0x5c55be(0x1e7)][_0x141004]=_0x2ca659;}return this[_0x5c55be(0x1e7)]['BARE\x20HANDS']=0x0,this[_0x5c55be(0x1e7)][_0x2acd05]||0x0;},ImageManager['swapWeaponIcon']=VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1cb)]['UI'][_0x17c892(0x1d8)],TextManager[_0x17c892(0x228)]=VisuMZ[_0x17c892(0x1f3)]['Settings']['UI'][_0x17c892(0x1b8)],TextManager[_0x17c892(0x1e2)]=VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1cb)]['UI'][_0x17c892(0x165)]??_0x17c892(0x209),VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1c6)]=Game_Action[_0x17c892(0x1f0)][_0x17c892(0x1f5)],Game_Action[_0x17c892(0x1f0)][_0x17c892(0x1f5)]=function(){const _0x7da41a=_0x17c892;VisuMZ[_0x7da41a(0x1f3)]['Game_Action_applyGlobal'][_0x7da41a(0x203)](this),this[_0x7da41a(0x141)]()&&this['subject']()[_0x7da41a(0x18d)]()&&this[_0x7da41a(0x1cf)]()&&this[_0x7da41a(0x141)]()[_0x7da41a(0x227)](this[_0x7da41a(0x19a)]());},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x172)]=Game_BattlerBase[_0x17c892(0x1f0)][_0x17c892(0x22a)],Game_BattlerBase[_0x17c892(0x1f0)][_0x17c892(0x22a)]=function(_0x355ef4){const _0x23deff=_0x17c892;return VisuMZ[_0x23deff(0x1f3)][_0x23deff(0x172)][_0x23deff(0x203)](this,_0x355ef4)&&this[_0x23deff(0x13f)](_0x355ef4);},Game_BattlerBase[_0x17c892(0x1f0)][_0x17c892(0x13f)]=function(_0x180aa6){return!![];},VisuMZ['WeaponSwapSystem']['Game_Battler_requestMotionRefresh']=Game_Battler['prototype'][_0x17c892(0x185)],Game_Battler[_0x17c892(0x1f0)][_0x17c892(0x185)]=function(){const _0x31d229=_0x17c892;if(this['battler']()&&this['_swappingWeapon'])return;else VisuMZ[_0x31d229(0x1f3)]['Game_Battler_requestMotionRefresh'][_0x31d229(0x203)](this);},Game_Actor[_0x17c892(0x204)]=VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1cb)]['Mechanics'][_0x17c892(0x216)],VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1bd)]=Game_Actor[_0x17c892(0x1f0)]['initEquips'],Game_Actor[_0x17c892(0x1f0)]['initEquips']=function(_0x5e3ee5){const _0xdf88df=_0x17c892;VisuMZ[_0xdf88df(0x1f3)][_0xdf88df(0x1bd)][_0xdf88df(0x203)](this,_0x5e3ee5),this['initWeaponSwapSystem']();},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x202)]=function(){const _0x145d1d=_0x17c892;this['_swapWeapons']={};for(let _0x57ccd4=0x1;_0x57ccd4<$dataSystem[_0x145d1d(0x1f7)][_0x145d1d(0x15d)];_0x57ccd4++){this[_0x145d1d(0x1a6)][_0x57ccd4]=0x0;}this['_currentWeaponType']=0x0;for(const _0x3c9b8b of this[_0x145d1d(0x1c9)]()){if(!_0x3c9b8b)continue;const _0x384dbb=_0x3c9b8b[_0x145d1d(0x1e3)];this['_swapWeapons'][_0x384dbb]=_0x3c9b8b['id'],this[_0x145d1d(0x1f9)]=this[_0x145d1d(0x1f9)]||_0x384dbb;}},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x1be)]=function(){const _0x1422c8=_0x17c892;return this[_0x1422c8(0x195)]()['includes'](0x1);},VisuMZ['WeaponSwapSystem'][_0x17c892(0x1ce)]=Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x1a2)],Game_Actor[_0x17c892(0x1f0)]['isDualWield']=function(){return![];},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x15f)]=Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x195)],Game_Actor['prototype'][_0x17c892(0x195)]=function(){const _0x4ea43d=_0x17c892;let _0x1fcb9c=VisuMZ['WeaponSwapSystem'][_0x4ea43d(0x15f)][_0x4ea43d(0x203)](this);return _0x1fcb9c['includes'](0x1)&&(_0x1fcb9c[_0x4ea43d(0x18a)](0x1),_0x1fcb9c[_0x4ea43d(0x207)](0x1)),_0x1fcb9c;},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x19d)]=function(){const _0x502843=_0x17c892;let _0x59261b=_0x502843(0x19d);if(this['checkCacheKey'](_0x59261b))return this[_0x502843(0x1ba)][_0x59261b];return this[_0x502843(0x1ba)][_0x59261b]=this[_0x502843(0x1a3)](),this['_cache'][_0x59261b];},Game_Actor[_0x17c892(0x1f0)]['createWeaponSwapTypes']=function(){const _0x5ca2b6=_0x17c892,_0x2c9cdb=[],_0x59f34b=$dataSystem[_0x5ca2b6(0x1f7)][_0x5ca2b6(0x15d)];for(let _0x515b7a=0x1;_0x515b7a<_0x59f34b;_0x515b7a++){if(this[_0x5ca2b6(0x1c3)](_0x515b7a))_0x2c9cdb[_0x5ca2b6(0x198)](_0x515b7a);}return _0x2c9cdb;},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x226)]=function(_0x2a27fb){const _0x3e079a=_0x17c892;return this['_swapWeapons']===undefined&&this[_0x3e079a(0x202)](),this[_0x3e079a(0x1a6)][_0x2a27fb]=this[_0x3e079a(0x1a6)][_0x2a27fb]||0x0,$dataWeapons[this[_0x3e079a(0x1a6)][_0x2a27fb]]||null;},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x1b9)]=function(){const _0x55acc7=_0x17c892;return this[_0x55acc7(0x19d)]()[_0x55acc7(0x1b1)](_0x38eade=>this[_0x55acc7(0x226)](_0x38eade))['remove'](null)['remove'](undefined);},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x19b)]=function(_0x2c1a7f,_0x4b76dd){const _0x11b225=_0x17c892;this[_0x11b225(0x1a6)]===undefined&&this[_0x11b225(0x202)](),this['_swapWeapons'][_0x2c1a7f]=_0x4b76dd,this[_0x11b225(0x1e5)]();},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x200)]=function(){const _0x107aa0=_0x17c892;this[_0x107aa0(0x1a6)]===undefined&&this['initWeaponSwapSystem']();const _0xd59a94=this[_0x107aa0(0x1f9)],_0x32f11e=this[_0x107aa0(0x19d)]();let _0x4f740d=_0x32f11e['indexOf'](this[_0x107aa0(0x1f9)]);for(;;){_0x4f740d++;if(_0x4f740d>=_0x32f11e[_0x107aa0(0x15d)])_0x4f740d=0x0;if(this['getSwapWeapon'](_0x32f11e[_0x4f740d]))break;}const _0x45ccf7=_0x32f11e[_0x4f740d];this[_0x107aa0(0x1e0)](_0x45ccf7),_0x45ccf7!==_0xd59a94&&this[_0x107aa0(0x18b)](!![]);},Game_Actor['prototype'][_0x17c892(0x1fc)]=function(){const _0x19c2dd=_0x17c892;this[_0x19c2dd(0x1a6)]===undefined&&this['initWeaponSwapSystem']();const _0x43e191=this[_0x19c2dd(0x1f9)],_0x28ac5d=this[_0x19c2dd(0x19d)]();let _0x198acd=_0x28ac5d[_0x19c2dd(0x143)](this['_currentWeaponType']);for(;;){_0x198acd--;if(_0x198acd<0x0)_0x198acd=_0x28ac5d[_0x19c2dd(0x15d)]-0x1;if(this[_0x19c2dd(0x226)](_0x28ac5d[_0x198acd]))break;}const _0x2415d7=_0x28ac5d[_0x198acd];this['switchToWeaponType'](_0x2415d7),_0x2415d7!==_0x43e191&&this[_0x19c2dd(0x18b)](!![]);},Game_Actor['prototype'][_0x17c892(0x18b)]=function(_0x3a7618){const _0xad306c=_0x17c892,_0x1e6b36=this[_0xad306c(0x1c9)]()[0x0];_0x1e6b36&&_0x3a7618&&(this[_0xad306c(0x1bc)]=!![],this[_0xad306c(0x1af)]());},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x1e0)]=function(_0x12fa26){const _0x2b8549=_0x17c892;this['_swapWeapons']===undefined&&this[_0x2b8549(0x202)]();_0x12fa26=_0x12fa26||0x0;if(!this[_0x2b8549(0x1be)]())return;if(!this['isEquipWtypeOk'](_0x12fa26))return;this[_0x2b8549(0x1f9)]=_0x12fa26,this['_swapWeapons'][_0x12fa26]=this[_0x2b8549(0x1a6)][_0x12fa26]||0x0;const _0x16b43c=$dataWeapons[this[_0x2b8549(0x1a6)][_0x12fa26]]||null;this[_0x2b8549(0x1d7)][0x0][_0x2b8549(0x152)](_0x16b43c),this[_0x2b8549(0x1ba)]={};},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1fa)]=Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x196)],Game_Actor['prototype'][_0x17c892(0x196)]=function(_0x473c1e,_0x431b1c){const _0xdedf98=_0x17c892;DataManager[_0xdedf98(0x146)](_0x431b1c)||_0x473c1e===0x0&&this[_0xdedf98(0x1be)]()?this[_0xdedf98(0x1ef)](_0x431b1c):VisuMZ[_0xdedf98(0x1f3)][_0xdedf98(0x1fa)][_0xdedf98(0x203)](this,_0x473c1e,_0x431b1c);},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x1ef)]=function(_0x167a7c){const _0x50a921=_0x17c892;if(!!_0x167a7c){const _0x2667d1=_0x167a7c[_0x50a921(0x1e3)];this[_0x50a921(0x1e0)](_0x2667d1);const _0x94b17b=this[_0x50a921(0x1c9)]()[0x0];!!_0x94b17b?this[_0x50a921(0x20d)](_0x167a7c,_0x94b17b):this[_0x50a921(0x20d)](_0x167a7c,null),this['setSwapWeapon'](_0x2667d1,_0x167a7c['id']),this[_0x50a921(0x1e0)](_0x2667d1);}else{if(!!this[_0x50a921(0x1c9)]()[0x0]){const _0x2101f7=this['weapons']()[0x0],_0x45d61b=_0x2101f7['wtypeId'];this[_0x50a921(0x1e0)](_0x45d61b),this[_0x50a921(0x20d)](null,_0x2101f7),this[_0x50a921(0x19b)](_0x45d61b,0x0),this[_0x50a921(0x21a)]();}}this['refresh']();},Game_Actor['prototype']['updateSwapToNextAvailableWeapon']=function(){const _0x2ea9fd=_0x17c892;if(this[_0x2ea9fd(0x1c9)]()['length']>0x0)return;const _0x235744=this['getAllEquippedSwapWeapons'](),_0x3258a3=_0x235744[0x0]||null,_0x233076=_0x3258a3?_0x3258a3[_0x2ea9fd(0x1e3)]:0x0;this['switchToWeaponType'](_0x233076);},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x1e9)]=function(_0x2bfa46){const _0x420864=_0x17c892;if(this[_0x420864(0x17e)]||_0x2bfa46||this[_0x420864(0x161)])return;this['_checkingWeaponSwaps']=!![];let _0x350e62=![];for(let _0x35305c=0x1;_0x35305c<$dataSystem[_0x420864(0x1f7)]['length'];_0x35305c++){if(this[_0x420864(0x1c3)](_0x35305c))continue;const _0x152fef=this['getSwapWeapon'](_0x35305c);if(!_0x152fef)continue;this[_0x420864(0x1a6)][_0x35305c]=0x0,$gameParty[_0x420864(0x18f)](_0x152fef,0x1),_0x350e62=!![],this[_0x420864(0x1d7)][0x0]['object']()===_0x152fef&&this[_0x420864(0x1d7)][0x0]['setObject'](null);}if(_0x350e62){const _0x4b3991=this['weapons']()[0x0]||null;this[_0x420864(0x1f9)]=_0x4b3991?_0x4b3991['wtypeId']:0x0,this[_0x420864(0x1e5)]();}this[_0x420864(0x17e)]=undefined;},VisuMZ[_0x17c892(0x1f3)]['Game_Actor_releaseUnequippableItems']=Game_Actor['prototype'][_0x17c892(0x1c1)],Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x1c1)]=function(_0x2a8432){const _0xc183e7=_0x17c892;this[_0xc183e7(0x1e9)](_0x2a8432),VisuMZ[_0xc183e7(0x1f3)]['Game_Actor_releaseUnequippableItems'][_0xc183e7(0x203)](this,_0x2a8432);},Game_Actor[_0x17c892(0x1f0)]['setupBattleTestWeapons']=function(){const _0x3c603e=_0x17c892,_0x283356=this[_0x3c603e(0x1f9)],_0x6b2ef=DataManager[_0x3c603e(0x16e)]();for(const _0x481379 of this[_0x3c603e(0x19d)]()){if(this[_0x3c603e(0x226)](_0x481379))continue;const _0x577428=_0x6b2ef[_0x481379-0x1];_0x577428&&this[_0x3c603e(0x19b)](_0x481379,_0x577428['id']);}this[_0x3c603e(0x1e0)](_0x283356);},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x13f)]=function(_0x437ebc){const _0x50b7ad=_0x17c892;return _0x437ebc&&_0x437ebc[_0x50b7ad(0x19c)][_0x50b7ad(0x164)](VisuMZ[_0x50b7ad(0x1f3)][_0x50b7ad(0x1ec)][_0x50b7ad(0x182)])?!!this[_0x50b7ad(0x1c9)]()[0x0]:!![];},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x17c)]=function(_0x507e2d){const _0x128a1c=_0x17c892,_0x44e491=_0x507e2d[_0x128a1c(0x1bf)],_0x442be0=_0x507e2d['requiredWtypeId2'];if(_0x44e491===0x0&&_0x442be0===0x0)return!![];if(_0x44e491>0x0&&!this[_0x128a1c(0x226)](_0x44e491))return![];if(_0x442be0>0x0&&!this[_0x128a1c(0x226)](_0x442be0))return![];return!![];},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x227)]=function(_0x2c775){const _0x435fcd=_0x17c892;if(!DataManager['isSkill'](_0x2c775))return;const _0x2936ad=VisuMZ[_0x435fcd(0x1f3)][_0x435fcd(0x1ec)];if(_0x2c775['note'][_0x435fcd(0x164)](_0x2936ad['SwitchWpnTypeNum'])){this['switchToWeaponType'](Number(RegExp['$1']));return;}else{if(_0x2c775[_0x435fcd(0x19c)][_0x435fcd(0x164)](_0x2936ad['SwitchWpnTypeStr'])){const _0xe3d447=DataManager[_0x435fcd(0x178)](RegExp['$1']);this[_0x435fcd(0x1e0)](_0xe3d447);return;}}if(this[_0x435fcd(0x187)]===_0x2c775[_0x435fcd(0x1bf)]||this[_0x435fcd(0x187)]===_0x2c775[_0x435fcd(0x15a)])return;if(_0x2c775['requiredWtypeId1']>0x0)this['switchToWeaponType'](_0x2c775[_0x435fcd(0x1bf)]);else _0x2c775[_0x435fcd(0x15a)]>0x0&&this[_0x435fcd(0x1e0)](_0x2c775[_0x435fcd(0x15a)]);},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1f4)]=Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x21c)],Game_Actor[_0x17c892(0x1f0)]['optimizeEquipments']=function(){const _0x276a37=_0x17c892;VisuMZ[_0x276a37(0x1f3)]['Game_Actor_optimizeEquipments'][_0x276a37(0x203)](this),this[_0x276a37(0x186)]();},VisuMZ['WeaponSwapSystem'][_0x17c892(0x1fe)]=Game_Actor['prototype'][_0x17c892(0x181)],Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x181)]=function(_0x4086d6){const _0x5906f7=_0x17c892;if(this[_0x5906f7(0x1be)]()&&_0x4086d6===0x0)return![];return VisuMZ['WeaponSwapSystem'][_0x5906f7(0x1fe)][_0x5906f7(0x203)](this,_0x4086d6);},Game_Actor[_0x17c892(0x1f0)]['optimizeSwappableWeapons']=function(){const _0x3ce969=_0x17c892;if(!this['canWeaponSwap']())return;if(!VisuMZ['WeaponSwapSystem'][_0x3ce969(0x1fe)][_0x3ce969(0x203)](this,0x0))return;const _0x340b0c=this[_0x3ce969(0x1f9)];for(const _0x5bfe23 of this[_0x3ce969(0x19d)]()){this[_0x3ce969(0x1e0)](_0x5bfe23),this[_0x3ce969(0x1ef)](this[_0x3ce969(0x20e)](_0x5bfe23));}this[_0x3ce969(0x1e0)](_0x340b0c),this[_0x3ce969(0x1e5)]();},Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x20e)]=function(_0x3bb8f1){const _0x29b8f0=_0x17c892,_0x18f2f5=$gameParty[_0x29b8f0(0x1c9)]()[_0x29b8f0(0x1d2)](this[_0x29b8f0(0x1c9)]()),_0x2c82de=_0x18f2f5[_0x29b8f0(0x21b)](_0x1084c2=>_0x1084c2[_0x29b8f0(0x1e3)]===_0x3bb8f1);let _0x26ab7a=null,_0x4574f1=-0x3e8;for(let _0x1dfeb4=0x0;_0x1dfeb4<_0x2c82de['length'];_0x1dfeb4++){const _0x95fc88=this['calcEquipItemPerformance'](_0x2c82de[_0x1dfeb4]);_0x95fc88>_0x4574f1&&(_0x4574f1=_0x95fc88,_0x26ab7a=_0x2c82de[_0x1dfeb4]);}return _0x26ab7a;},VisuMZ['WeaponSwapSystem']['Game_Actor_clearEquipments']=Game_Actor['prototype'][_0x17c892(0x15c)],Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x15c)]=function(){const _0xb32cf4=_0x17c892;VisuMZ['WeaponSwapSystem']['Game_Actor_clearEquipments'][_0xb32cf4(0x203)](this),this[_0xb32cf4(0x1ad)]();},VisuMZ['WeaponSwapSystem'][_0x17c892(0x14d)]=Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x222)],Game_Actor[_0x17c892(0x1f0)][_0x17c892(0x222)]=function(_0x4c942c){const _0x168419=_0x17c892;if(this[_0x168419(0x1be)]()&&_0x4c942c===0x0)return![];return VisuMZ[_0x168419(0x1f3)][_0x168419(0x14d)]['call'](this,_0x4c942c);},Game_Actor[_0x17c892(0x1f0)]['clearSwappableWeapons']=function(){const _0x2f39d7=_0x17c892;if(!this[_0x2f39d7(0x1be)]())return;if(!VisuMZ['WeaponSwapSystem'][_0x2f39d7(0x14d)][_0x2f39d7(0x203)](this,0x0))return;for(let _0x304d55=0x1;_0x304d55<$dataSystem[_0x2f39d7(0x1f7)][_0x2f39d7(0x15d)];_0x304d55++){const _0x2d9f99=this[_0x2f39d7(0x226)](_0x304d55);_0x2d9f99&&(this[_0x2f39d7(0x1e0)](_0x304d55),this[_0x2f39d7(0x1ef)](null));}this[_0x2f39d7(0x1e5)]();},VisuMZ[_0x17c892(0x1f3)]['Game_Party_setupBattleTestMembers']=Game_Party[_0x17c892(0x1f0)][_0x17c892(0x1f1)],Game_Party['prototype']['setupBattleTestMembers']=function(){const _0x41fc42=_0x17c892;VisuMZ[_0x41fc42(0x1f3)]['Game_Party_setupBattleTestMembers'][_0x41fc42(0x203)](this);for(const _0x23c9c2 of this['allMembers']()){if(!_0x23c9c2)continue;_0x23c9c2[_0x41fc42(0x158)]();}this['_inBattle']=!![];},Scene_Equip[_0x17c892(0x1f0)][_0x17c892(0x150)]=function(){const _0x569304=_0x17c892,_0x3817e3=this[_0x569304(0x159)](),_0x539c3f=this[_0x569304(0x170)][_0x569304(0x1bb)],_0x1fbdb4=this['_itemWindow'][_0x569304(0x19a)]();_0x3817e3[_0x569304(0x196)](_0x539c3f,_0x1fbdb4);},VisuMZ['WeaponSwapSystem'][_0x17c892(0x167)]=Scene_Battle[_0x17c892(0x1f0)][_0x17c892(0x1a8)],Scene_Battle[_0x17c892(0x1f0)]['createActorCommandWindow']=function(){const _0x273d10=_0x17c892;VisuMZ[_0x273d10(0x1f3)][_0x273d10(0x167)][_0x273d10(0x203)](this);const _0x5e2207=this['_actorCommandWindow'];_0x5e2207[_0x273d10(0x1e1)]('weaponSwap',this[_0x273d10(0x189)]['bind'](this));},Scene_Battle[_0x17c892(0x1f0)][_0x17c892(0x189)]=function(){const _0x3d3404=_0x17c892,_0x130ea2=BattleManager['actor']();_0x130ea2['swapWeaponNext'](),this[_0x3d3404(0x1d6)][_0x3d3404(0x210)](),this[_0x3d3404(0x1d6)][_0x3d3404(0x1e5)]();},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1ed)]=Sprite_Actor[_0x17c892(0x1f0)][_0x17c892(0x21d)],Sprite_Actor[_0x17c892(0x1f0)][_0x17c892(0x21d)]=function(){const _0x2b2764=_0x17c892;this[_0x2b2764(0x214)]&&this[_0x2b2764(0x214)][_0x2b2764(0x1bc)]&&(this[_0x2b2764(0x214)]['_swappingWeapon']=undefined),VisuMZ[_0x2b2764(0x1f3)]['Sprite_Actor_refreshMotion']['call'](this);},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x18c)]=Window_Base[_0x17c892(0x1f0)][_0x17c892(0x190)],Window_Base[_0x17c892(0x1f0)][_0x17c892(0x190)]=function(){const _0xba5021=_0x17c892;this[_0xba5021(0x208)][_0xba5021(0x22c)]===_0xba5021(0x1a0)&&this['currentSymbol']()===_0xba5021(0x21f)?SoundManager[_0xba5021(0x15b)]():VisuMZ[_0xba5021(0x1f3)][_0xba5021(0x18c)][_0xba5021(0x203)](this);},VisuMZ[_0x17c892(0x1f3)]['Window_StatusBase_actorSlotName']=Window_StatusBase['prototype'][_0x17c892(0x1b3)],Window_StatusBase[_0x17c892(0x1f0)][_0x17c892(0x1b3)]=function(_0x5cc43f,_0x3ecfbb){const _0x4d96ac=_0x17c892;return _0x5cc43f&&_0x5cc43f[_0x4d96ac(0x1be)]()?this[_0x4d96ac(0x163)](_0x5cc43f,_0x3ecfbb):VisuMZ[_0x4d96ac(0x1f3)]['Window_StatusBase_actorSlotName'][_0x4d96ac(0x203)](this,_0x5cc43f,_0x3ecfbb);},Window_StatusBase[_0x17c892(0x1f0)][_0x17c892(0x163)]=function(_0x3bd4ad,_0xb0ba88){const _0x3eff32=_0x17c892;let _0x3bf9cb=_0x3bd4ad[_0x3eff32(0x19d)]()[_0x3eff32(0x15d)]-0x1;Window_EquipSlot[_0x3eff32(0x1ea)]&&(_0x3bf9cb=$dataSystem['weaponTypes'][_0x3eff32(0x15d)]-0x2);if(_0xb0ba88>_0x3bf9cb)return _0xb0ba88-=_0x3bf9cb,VisuMZ[_0x3eff32(0x1f3)][_0x3eff32(0x1b6)][_0x3eff32(0x203)](this,_0x3bd4ad,_0xb0ba88);else{let _0x2b0a22='';if(Window_EquipSlot['WEAPON_SWAP_SYSTEM_SHOW_UNEQUIPPABLE_SLOTS'])_0x2b0a22=$dataSystem[_0x3eff32(0x1f7)][_0xb0ba88+0x1]||'';else{const _0x1b95e8=_0x3bd4ad[_0x3eff32(0x19d)]()[_0xb0ba88];_0x2b0a22=$dataSystem[_0x3eff32(0x1f7)][_0x1b95e8]||'';}return _0x2b0a22=_0x2b0a22[_0x3eff32(0x1aa)](/\\I\[(\d+)\]/gi,''),_0x2b0a22;}},Window_EquipSlot['WEAPON_SWAP_SYSTEM_SHOW_UNEQUIPPABLE_SLOTS']=VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1cb)]['UI'][_0x17c892(0x16a)],VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x229)]=Window_EquipSlot['prototype'][_0x17c892(0x17f)],Window_EquipSlot['prototype'][_0x17c892(0x17f)]=function(){const _0x34ea13=_0x17c892;return this['_actor']&&this[_0x34ea13(0x214)][_0x34ea13(0x1be)]()?this[_0x34ea13(0x157)]():VisuMZ[_0x34ea13(0x1f3)][_0x34ea13(0x229)][_0x34ea13(0x203)](this);},Window_EquipSlot[_0x17c892(0x1f0)][_0x17c892(0x157)]=function(){const _0x1ec2c1=_0x17c892;let _0x1e7d60=this[_0x1ec2c1(0x214)][_0x1ec2c1(0x195)]()[_0x1ec2c1(0x15d)]-0x1;return Window_EquipSlot[_0x1ec2c1(0x1ea)]?_0x1e7d60+=$dataSystem[_0x1ec2c1(0x1f7)][_0x1ec2c1(0x15d)]-0x1:_0x1e7d60+=this[_0x1ec2c1(0x214)][_0x1ec2c1(0x19d)]()[_0x1ec2c1(0x15d)],_0x1e7d60;},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x22b)]=Window_EquipSlot[_0x17c892(0x1f0)][_0x17c892(0x20b)],Window_EquipSlot[_0x17c892(0x1f0)][_0x17c892(0x20b)]=function(_0x36f195){const _0x431351=_0x17c892;return this[_0x431351(0x214)]&&this[_0x431351(0x214)][_0x431351(0x1be)]()?this['itemAtWeaponSwap'](_0x36f195):VisuMZ['WeaponSwapSystem']['Window_EquipSlot_itemAt'][_0x431351(0x203)](this,_0x36f195);},Window_EquipSlot[_0x17c892(0x1f0)]['itemAtWeaponSwap']=function(_0x3016f2){const _0xf9e3f9=_0x17c892;let _0x3fb8cb=this['_actor']['weaponSwapTypes']()['length']-0x1;Window_EquipSlot[_0xf9e3f9(0x1ea)]&&(_0x3fb8cb=$dataSystem['weaponTypes'][_0xf9e3f9(0x15d)]-0x2);if(_0x3016f2>_0x3fb8cb)return _0x3016f2-=_0x3fb8cb,VisuMZ[_0xf9e3f9(0x1f3)][_0xf9e3f9(0x22b)][_0xf9e3f9(0x203)](this,_0x3016f2);else{let _0x2dbcce=this[_0xf9e3f9(0x214)][_0xf9e3f9(0x19d)]()[_0x3016f2];return Window_EquipSlot['WEAPON_SWAP_SYSTEM_SHOW_UNEQUIPPABLE_SLOTS']&&(_0x2dbcce=_0x3016f2+0x1),this[_0xf9e3f9(0x214)]['getSwapWeapon'](_0x2dbcce);}},VisuMZ['WeaponSwapSystem'][_0x17c892(0x1a1)]=Window_EquipSlot[_0x17c892(0x1f0)]['isEnabled'],Window_EquipSlot[_0x17c892(0x1f0)][_0x17c892(0x1ac)]=function(_0x3632b6){const _0x99488e=_0x17c892;return this[_0x99488e(0x214)]&&this[_0x99488e(0x214)][_0x99488e(0x1be)]()?this[_0x99488e(0x193)](_0x3632b6):VisuMZ[_0x99488e(0x1f3)]['Window_EquipSlot_isEnabled'][_0x99488e(0x203)](this,_0x3632b6);},Window_EquipSlot['prototype'][_0x17c892(0x193)]=function(_0xfe64df){const _0xb50b5b=_0x17c892;let _0x34f4d0=this[_0xb50b5b(0x214)][_0xb50b5b(0x19d)]()[_0xb50b5b(0x15d)]-0x1;Window_EquipSlot['WEAPON_SWAP_SYSTEM_SHOW_UNEQUIPPABLE_SLOTS']&&(_0x34f4d0=$dataSystem[_0xb50b5b(0x1f7)][_0xb50b5b(0x15d)]-0x2);if(_0xfe64df>_0x34f4d0)return _0xfe64df-=_0x34f4d0,VisuMZ[_0xb50b5b(0x1f3)]['Window_EquipSlot_isEnabled'][_0xb50b5b(0x203)](this,_0xfe64df);else{if(!this[_0xb50b5b(0x214)]['isEquipChangeOk'](0x0))return![];else return Window_EquipSlot['WEAPON_SWAP_SYSTEM_SHOW_UNEQUIPPABLE_SLOTS']?this['_actor'][_0xb50b5b(0x19d)]()[_0xb50b5b(0x14e)](_0xfe64df+0x1):!![];}},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1de)]=Game_Actor['prototype'][_0x17c892(0x171)],Game_Actor['prototype'][_0x17c892(0x171)]=function(_0x105509){const _0xb30a65=_0x17c892;if(_0x105509<=0x0&&this[_0xb30a65(0x1be)]())return!![];return VisuMZ['WeaponSwapSystem']['Game_Actor_isEquipChangeOk'][_0xb30a65(0x203)](this,_0x105509);},VisuMZ['WeaponSwapSystem'][_0x17c892(0x1e6)]=Game_BattlerBase[_0x17c892(0x1f0)][_0x17c892(0x145)],Game_BattlerBase[_0x17c892(0x1f0)][_0x17c892(0x145)]=function(_0xb7d9b5){const _0x1bcf68=_0x17c892;if(_0xb7d9b5<=0x0&&this['canWeaponSwap']())return![];return VisuMZ['WeaponSwapSystem'][_0x1bcf68(0x1e6)][_0x1bcf68(0x203)](this,_0xb7d9b5);},Window_EquipSlot[_0x17c892(0x1f0)][_0x17c892(0x151)]=function(){const _0x44978f=_0x17c892;SoundManager[_0x44978f(0x15b)]();const _0x420c7f=SceneManager[_0x44978f(0x17d)]['_actor'];this[_0x44978f(0x170)][_0x44978f(0x1bb)]>0x0?_0x420c7f['changeEquip'](this[_0x44978f(0x170)][_0x44978f(0x1bb)],null):(_0x420c7f['switchToWeaponType'](this['_itemWindow'][_0x44978f(0x1fb)]),_0x420c7f[_0x44978f(0x1ef)](null));this['refresh'](),this['_itemWindow']['refresh'](),this[_0x44978f(0x1b2)]();const _0x27d005=SceneManager['_scene'][_0x44978f(0x166)];if(_0x27d005)_0x27d005[_0x44978f(0x1e5)]();},VisuMZ['WeaponSwapSystem']['Window_EquipSlot_equipSlotIndex']=Window_EquipSlot[_0x17c892(0x1f0)][_0x17c892(0x162)],Window_EquipSlot['prototype'][_0x17c892(0x162)]=function(){const _0x2c3ea4=_0x17c892;let _0x4da6d1=VisuMZ[_0x2c3ea4(0x1f3)][_0x2c3ea4(0x218)],_0xccdd05=this[_0x2c3ea4(0x214)][_0x2c3ea4(0x19d)]()[_0x2c3ea4(0x15d)]-0x1;return Window_EquipSlot[_0x2c3ea4(0x1ea)]&&(_0xccdd05=$dataSystem['weaponTypes'][_0x2c3ea4(0x15d)]-0x2),Math[_0x2c3ea4(0x206)](0x0,_0x4da6d1-_0xccdd05);},VisuMZ[_0x17c892(0x1f3)]['Window_EquipItem_initialize']=Window_EquipItem[_0x17c892(0x1f0)][_0x17c892(0x14a)],Window_EquipItem[_0x17c892(0x1f0)][_0x17c892(0x14a)]=function(_0x4f061f){const _0x2d8494=_0x17c892;VisuMZ[_0x2d8494(0x1f3)][_0x2d8494(0x1d4)][_0x2d8494(0x203)](this,_0x4f061f),this[_0x2d8494(0x1fb)]=0x0;},VisuMZ['WeaponSwapSystem'][_0x17c892(0x1c4)]=Window_EquipItem[_0x17c892(0x1f0)]['setSlotId'],Window_EquipItem[_0x17c892(0x1f0)]['setSlotId']=function(_0x5513d8){const _0x555fe7=_0x17c892;if(!this[_0x555fe7(0x214)])return VisuMZ[_0x555fe7(0x1f3)][_0x555fe7(0x1c4)]['call'](this,_0x5513d8);let _0x4e1b73=this['_actor'][_0x555fe7(0x19d)]()[_0x555fe7(0x15d)]-0x1;Window_EquipSlot[_0x555fe7(0x1ea)]&&(_0x4e1b73=$dataSystem['weaponTypes']['length']-0x2),_0x5513d8>_0x4e1b73?(_0x5513d8-=_0x4e1b73,this[_0x555fe7(0x1fb)]=0x0,VisuMZ[_0x555fe7(0x1f3)][_0x555fe7(0x1c4)][_0x555fe7(0x203)](this,_0x5513d8)):(Window_EquipSlot['WEAPON_SWAP_SYSTEM_SHOW_UNEQUIPPABLE_SLOTS']?this[_0x555fe7(0x1fb)]=_0x5513d8+0x1:this[_0x555fe7(0x1fb)]=this[_0x555fe7(0x214)][_0x555fe7(0x19d)]()[_0x5513d8],_0x5513d8=0x0,VisuMZ['WeaponSwapSystem'][_0x555fe7(0x1c4)][_0x555fe7(0x203)](this,_0x5513d8),this[_0x555fe7(0x214)][_0x555fe7(0x1e0)](this['_wtypeID']),this['_statusWindow']&&this['_statusWindow'][_0x555fe7(0x1e5)]());},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x140)]=Window_EquipItem[_0x17c892(0x1f0)]['includes'],Window_EquipItem['prototype'][_0x17c892(0x14e)]=function(_0x10fef1){const _0x346e25=_0x17c892;if(_0x10fef1===null)return!this[_0x346e25(0x160)]()[_0x346e25(0x14e)](this[_0x346e25(0x225)]());else return this[_0x346e25(0x1bb)]===0x0&&this[_0x346e25(0x1fb)]!==0x0?_0x10fef1['wtypeId']===this[_0x346e25(0x1fb)]:VisuMZ[_0x346e25(0x1f3)][_0x346e25(0x140)]['call'](this,_0x10fef1);},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x183)]=Window_EquipItem[_0x17c892(0x1f0)][_0x17c892(0x1ac)],Window_EquipItem[_0x17c892(0x1f0)][_0x17c892(0x1ac)]=function(_0x3a30b3){const _0x10abcc=_0x17c892;if(!_0x3a30b3)return!this['nonRemovableEtypes']()[_0x10abcc(0x14e)](this[_0x10abcc(0x225)]());return VisuMZ['WeaponSwapSystem'][_0x10abcc(0x183)][_0x10abcc(0x203)](this,_0x3a30b3);},Window_ActorCommand[_0x17c892(0x1df)]=VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1cb)]['UI'][_0x17c892(0x153)],Window_ActorCommand[_0x17c892(0x1d0)]=VisuMZ['WeaponSwapSystem']['Settings']['UI'][_0x17c892(0x169)],Window_ActorCommand[_0x17c892(0x16c)]=VisuMZ[_0x17c892(0x1f3)]['Settings']['UI'][_0x17c892(0x1f2)],Window_ActorCommand[_0x17c892(0x1ee)]=VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1cb)]['UI'][_0x17c892(0x20a)],VisuMZ['WeaponSwapSystem'][_0x17c892(0x1d5)]=Window_ActorCommand['prototype'][_0x17c892(0x14a)],Window_ActorCommand[_0x17c892(0x1f0)][_0x17c892(0x14a)]=function(_0x4237a1){const _0x56fb22=_0x17c892;VisuMZ['WeaponSwapSystem']['Window_ActorCommand_initialize'][_0x56fb22(0x203)](this,_0x4237a1),this[_0x56fb22(0x1f8)]();},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x194)]=Window_ActorCommand[_0x17c892(0x1f0)][_0x17c892(0x17b)],Window_ActorCommand['prototype'][_0x17c892(0x17b)]=function(){const _0x1bfbfb=_0x17c892;if(this[_0x1bfbfb(0x214)])this['_actor'][_0x1bfbfb(0x21a)]();VisuMZ[_0x1bfbfb(0x1f3)][_0x1bfbfb(0x194)][_0x1bfbfb(0x203)](this);if(!this['_actor'][_0x1bfbfb(0x1be)]())return;this[_0x1bfbfb(0x16b)]();if(this[_0x1bfbfb(0x201)](_0x1bfbfb(0x21f))>=0x0)return;this[_0x1bfbfb(0x176)]();},Window_ActorCommand['prototype'][_0x17c892(0x16b)]=function(){const _0x483abc=_0x17c892,_0x4927a9=$dataSkills[this[_0x483abc(0x214)][_0x483abc(0x1b0)]()];if(!_0x4927a9)return;if(!this[_0x483abc(0x1d1)](_0x4927a9))return;if(!Window_ActorCommand['WEAPON_SWAP_CHANGE_ATTACK_ICON'])return;const _0x3fe23d=this['_actor'][_0x483abc(0x1c9)]()[0x0];if(!_0x3fe23d)return;const _0x1741a9=this[_0x483abc(0x144)](),_0x5dbbfe=DataManager[_0x483abc(0x154)](_0x4927a9),_0x132ec1=_0x3fe23d[_0x483abc(0x192)],_0x35c135=_0x1741a9==='text'?_0x5dbbfe:_0x483abc(0x220)['format'](_0x132ec1,_0x5dbbfe),_0x29e60b=this['findSymbol'](_0x483abc(0x149));if(_0x29e60b>=0x0){const _0x1c7764=this[_0x483abc(0x180)][_0x29e60b];_0x1c7764[_0x483abc(0x22c)]=_0x35c135;}},Window_ActorCommand[_0x17c892(0x1f0)][_0x17c892(0x176)]=function(_0x17a950){const _0x2e12ec=_0x17c892;if(!Window_ActorCommand[_0x2e12ec(0x1ee)]&&!_0x17a950)return;if(this[_0x2e12ec(0x214)][_0x2e12ec(0x19d)]()['length']<=0x1)return;this[_0x2e12ec(0x201)](_0x2e12ec(0x21f))>=0x0&&this['removeWeaponSwapCommand']();const _0x4fb49c=this[_0x2e12ec(0x144)](),_0x18c5d6=TextManager[_0x2e12ec(0x228)],_0x5ac573=ImageManager['swapWeaponIcon'],_0x11de0c=_0x4fb49c==='text'?_0x18c5d6:_0x2e12ec(0x220)[_0x2e12ec(0x1ab)](_0x5ac573,_0x18c5d6);this['addCommand'](_0x11de0c,_0x2e12ec(0x21f));},Window_ActorCommand[_0x17c892(0x1f0)]['removeWeaponSwapCommand']=function(){const _0x7b125=_0x17c892;while(this[_0x7b125(0x201)]('weaponSwap')>=0x0){const _0x4d9e2a=this[_0x7b125(0x201)](_0x7b125(0x21f));this[_0x7b125(0x180)][_0x7b125(0x1f6)](_0x4d9e2a,0x1);}},Window_ActorCommand[_0x17c892(0x1f0)][_0x17c892(0x174)]=function(){const _0x1fcaf2=_0x17c892;return Window_ActorCommand[_0x1fcaf2(0x1d0)]&&this[_0x1fcaf2(0x1d9)]()===_0x1fcaf2(0x149)&&this[_0x1fcaf2(0x214)]&&this['_actor']['canWeaponSwap']()&&this[_0x1fcaf2(0x214)][_0x1fcaf2(0x1b9)]()[_0x1fcaf2(0x15d)]>0x1;},Window_ActorCommand[_0x17c892(0x1f0)][_0x17c892(0x156)]=function(_0x31c80f){const _0x4ecec4=_0x17c892;this['isWeaponSwapShortcutEnabled']()?this[_0x4ecec4(0x19e)](!![]):Window_Command[_0x4ecec4(0x1f0)][_0x4ecec4(0x156)][_0x4ecec4(0x203)](this,_0x31c80f);},Window_ActorCommand[_0x17c892(0x1f0)]['cursorLeft']=function(_0xda1e95){const _0x4aac39=_0x17c892;this[_0x4aac39(0x174)]()?this[_0x4aac39(0x19e)](![]):Window_Command['prototype'][_0x4aac39(0x213)]['call'](this,_0xda1e95);},Window_ActorCommand[_0x17c892(0x1f0)][_0x17c892(0x19e)]=function(_0x420088){const _0x49b7f6=_0x17c892;_0x420088?this[_0x49b7f6(0x214)][_0x49b7f6(0x200)]():this['_actor'][_0x49b7f6(0x1fc)](),SoundManager[_0x49b7f6(0x15b)](),this[_0x49b7f6(0x1e5)]();},Window_ActorCommand[_0x17c892(0x1f0)][_0x17c892(0x1f8)]=function(){const _0x4e7880=_0x17c892;if(!Window_ActorCommand[_0x4e7880(0x1d0)])return;if(!Window_ActorCommand[_0x4e7880(0x16c)])return;const _0x3f7989=[new Sprite(),new Sprite()];for(const _0x3665ab of _0x3f7989){this['addChild'](_0x3665ab),_0x3665ab['opacity']=0x0,_0x3665ab[_0x4e7880(0x1eb)]['y']=0.5,_0x3665ab['bitmap']=ImageManager['loadSystem'](_0x4e7880(0x142));}_0x3f7989[0x0]['anchor']['x']=0x0,_0x3f7989[0x0][_0x4e7880(0x1c8)](0x78,0x24,0x18,0x18),_0x3f7989[0x0]['x']=0x0,this[_0x4e7880(0x20c)]=_0x3f7989[0x0],_0x3f7989[0x1][_0x4e7880(0x1eb)]['x']=0x1,_0x3f7989[0x1][_0x4e7880(0x1c8)](0x90,0x24,0x18,0x18),_0x3f7989[0x1]['x']=this[_0x4e7880(0x212)],this['_weaponSwapShortcutSprite_Right']=_0x3f7989[0x1];},Window_ActorCommand['prototype'][_0x17c892(0x1ff)]=function(){const _0x426c60=_0x17c892;Window_Scrollable[_0x426c60(0x1f0)][_0x426c60(0x1ff)]['call'](this),this[_0x426c60(0x221)]();},Window_ActorCommand[_0x17c892(0x1f0)][_0x17c892(0x221)]=function(){const _0x141f18=_0x17c892;if(!Window_ActorCommand[_0x141f18(0x1d0)])return;if(!Window_ActorCommand[_0x141f18(0x16c)])return;VisuMZ[_0x141f18(0x1f3)][_0x141f18(0x16d)]['call'](this['_weaponSwapShortcutSprite_Left']),VisuMZ[_0x141f18(0x1f3)]['updateShortcutOpacity']['call'](this[_0x141f18(0x173)]);},Window_ActorCommand['prototype'][_0x17c892(0x1cd)]=function(){const _0x39ec19=_0x17c892;if(!this['_actor'])return![];if(this[_0x39ec19(0x1d9)]()!==_0x39ec19(0x149))return![];if(this[_0x39ec19(0x214)][_0x39ec19(0x19d)]()[_0x39ec19(0x15d)]<=0x1)return![];return this['_actor'][_0x39ec19(0x1b9)]()[_0x39ec19(0x15d)]>0x1;},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x16d)]=function(){const _0x110e05=_0x17c892;if(!this['parent'][_0x110e05(0x1b4)]||this[_0x110e05(0x1d3)][_0x110e05(0x217)]<0xff||this[_0x110e05(0x1d3)]['openness']<0xff)this[_0x110e05(0x17a)]=0x0;else{if(this['parent'][_0x110e05(0x1cd)]()){var _0x4d0f99=this[_0x110e05(0x1d3)][_0x110e05(0x205)](this[_0x110e05(0x1d3)][_0x110e05(0x201)](_0x110e05(0x149))),_0x130d0c=_0x4d0f99['y']+this['parent']['padding'];_0x130d0c>0x0&&_0x130d0c<this[_0x110e05(0x1d3)][_0x110e05(0x191)]-this[_0x110e05(0x1d3)][_0x110e05(0x1c5)]*0x2&&(_0x130d0c+=Math[_0x110e05(0x215)](this[_0x110e05(0x1d3)][_0x110e05(0x1da)]()/0x2),this['opacity']=0xff,this['y']=_0x130d0c);}else this[_0x110e05(0x17a)]-=0x20;}},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x14b)]=Window_ActorCommand[_0x17c892(0x1f0)][_0x17c892(0x1e8)],Window_ActorCommand[_0x17c892(0x1f0)]['setup']=function(_0x220f87){const _0x59d59d=_0x17c892;VisuMZ[_0x59d59d(0x1f3)]['Window_ActorCommand_setup'][_0x59d59d(0x203)](this,_0x220f87),this[_0x59d59d(0x173)]&&(this[_0x59d59d(0x173)]['x']=this[_0x59d59d(0x212)]);},VisuMZ[_0x17c892(0x1f3)][_0x17c892(0x1cb)][_0x17c892(0x14c)]=Window_ActorCommand[_0x17c892(0x1f0)][_0x17c892(0x1db)],Window_ActorCommand[_0x17c892(0x1f0)]['updateHelp']=function(){const _0x5618a4=_0x17c892,_0x110ecc=this[_0x5618a4(0x1d9)]();switch(_0x110ecc){case'weaponSwap':this[_0x5618a4(0x219)][_0x5618a4(0x184)](TextManager[_0x5618a4(0x1e2)]);break;default:VisuMZ[_0x5618a4(0x1f3)]['Settings'][_0x5618a4(0x14c)][_0x5618a4(0x203)](this);break;}},VisuMZ[_0x17c892(0x1f3)]['Window_ShopStatus_drawActorParamDifference']=Window_ShopStatus[_0x17c892(0x1f0)]['drawActorParamDifference'],Window_ShopStatus[_0x17c892(0x1f0)][_0x17c892(0x211)]=function(_0x247fc3,_0x40605a,_0x32f98f,_0x4719b1,_0x37c9c0){const _0x302f29=_0x17c892;let _0x1c0728=0x0;_0x247fc3&&_0x247fc3[_0x302f29(0x1be)]()&&DataManager['isWeapon'](this[_0x302f29(0x21e)])&&(_0x1c0728=_0x247fc3[_0x302f29(0x1f9)],_0x247fc3['switchToWeaponType'](this[_0x302f29(0x21e)]['wtypeId'])),VisuMZ[_0x302f29(0x1f3)]['Window_ShopStatus_drawActorParamDifference']['call'](this,_0x247fc3,_0x40605a,_0x32f98f,_0x4719b1,_0x37c9c0),_0x247fc3&&_0x247fc3[_0x302f29(0x1be)]()&&_0x1c0728>0x0&&_0x247fc3[_0x302f29(0x1e0)](_0x1c0728);};