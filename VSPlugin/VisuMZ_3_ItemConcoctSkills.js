//=============================================================================
// VisuStella MZ - Item Concoction Skills
// VisuMZ_3_ItemConcoctSkills.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ItemConcoctSkills = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemConcoctSkills = VisuMZ.ItemConcoctSkills || {};
VisuMZ.ItemConcoctSkills.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.03] [ItemConcoctSkills]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Item_Concoction_Skills_VisuStella_MZ
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
 * Unleash the power of item mixing and crafting in your game! With the Item
 * Concoctions plugin, you can create skills that allow players to combine two
 * items—a base and a pair—to create powerful and unique effects. Explore a
 * vast array of concoction types, each with its own set of combinations and
 * outcomes, adding depth and versatility to your gameplay.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Setup skills that can perform Item Concoctions by mixing together two
 *   items, a base and a pair, to form an effect from a result item.
 * * Skills can utilize different concoction types for different bases.
 * * Bases can be merged with specified pair items to produce unique effects.
 * * A separate help window can be displayed for item combinations for players
 *   to quickly see what effects can be produced.
 * * These item combinations can be discovered over time or displayed all from
 *   the getgo.
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
 * Enemy Non-Usage
 * 
 * Enemies cannot use Item Concoction skills. Simply put, they don't have an
 * item inventory to pick and concoct items from. Use a regular skill instead
 * to give the illusion of an Item Concoction skill.
 *
 * ---
 *
 * Force Action
 * 
 * You cannot use "Forced Action" with a skill that requires item concoctions.
 * This includes commands that will chain into an Item Concoction skill. The
 * reason behind this is that there is no item input entry for the player to
 * select from for this action.
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
 * === Concoction-Related Notetags ===
 * 
 * ---
 *
 * <Can Concoct: x>
 * <Can Concoct: x, x, x>
 *
 * - Used for: Skill Notetags
 * - Sets this skill to be able to concoct items that have 'x' type as an item
 *   base (or bases).
 * - Replace 'x' with text marking the type or category.
 *   - Insert more 'x' entries to add more types.
 *   - Use 'any' or 'all' in place of 'x' to use any kind of item base.
 * - Types are determined by the <Concoct Type: x> or <Category: x> notetags.
 * - This cannot be used with skills that are made to be used as Active Chain
 *   Skills, Input Combo Skills, or Evolution Matrix Skills.
 * - Likewise, this cannot be used with Item Throw and Amplify effects.
 * - Concoctions will consume both of the selected items as well pay the skill
 *   cost from the selected skill to initiate this effect.
 *   - Key Items, nonconsumable items, and any items with a successful proc of
 *     the <Concoct Conserve: x%> notetag will not be consumed.
 *
 * ---
 *
 * <Concoct Type: x>
 * <Concoct Types: x, x, x>
 *
 * - Used for: Item Notetags
 * - These are the types that are used to determine what the Item Concoction
 *   skills can use as an item base. This does not affect item pairs.
 * - Replace 'x' with text marking the type.
 *   - Insert more 'x' entries to add more types.
 * - <Category: x> will also count as a concoct base type. However, this
 *   notetag will separate the concoction types from anything else that uses
 *   the <Category: x> notetag.
 *
 * ---
 *
 * <Concoctions>
 *  list
 *  list
 *  list
 *  list
 * </Concoctions>
 *
 * - Used for: Item Notetags
 * - Determines the list of items that can be paired with this item base.
 * - Replace 'list' with the section below to determiner the formatting:
 * 
 *   'list' can be formatted in any of these four ways:
 * 
 *   Item id: Item id
 *   Item id: name
 *   name: Item id
 *   name: name
 * 
 * - If you are using 'Item id', replace 'id' with the ID of the item you wish
 *   to refer to. If you are using a name version, replace name with the full
 *   name of the item (it is case sensitive). The first item on the list before
 *   the : is the pair item for item concoctions. The second item on the list
 *   after the : is the item effect that will occur when the base and pair
 *   items are combined. The effects of the first and second items are
 *   unrelated to the combined item effect.
 * 
 * Example:
 * 
 * <Concoctions>
 *  Item 51: Item 61
 *  Item 52: Item 62
 *  Item 53: Lucid Mist
 *  Item 54: Healing Mist
 *  Plum Essence: Inspiriting Mist
 *  Tomato Essence: Boosting Mist
 *  Onion Bloom: Item 67
 *  Curious Bloom: Item 68
 * </Concoctions>
 *
 * ---
 * 
 * <Concoct Conserve: x%>
 * 
 * - Used for: Item
 * - When this item is selected and used as a base or pair item for concocting,
 *   there is a 'x' percent chance of it not being consumed.
 * - Replace 'x' with a number representing the percent chance for this item to
 *   not be consumed.
 *   - 100% will mean it will never be consumed.
 * - If this notetag is not used, then the item will always be consumed unless
 *   it is a non-consumable item set by the database.
 * 
 * ---
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * The following are Script Calls that can be used with this plugin. These are
 * made for JavaScript proficient users. We are not responsible if you use them
 * incorrectly or for unintended usage.
 *
 * ---
 * 
 * === Item Retrieval-Related Script Calls ===
 * 
 * ---
 *
 * $concoctItems
 * 
 * - This is a variable that gets updated upon the usage of any new action be
 *   it from an actor or enemy. It will return the items being used to make the
 *   current item concoction if any.
 * - The items are in their rawest form, which are their $dataItems[x] entries.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed for this plugin.
 *
 * ---
 *
 * Settings
 * 
 *   Base Item Help:
 *   - Help description used when selecting a base item.
 * 
 *   Pair Item Help:
 *   - Help description used when selecting a pair item.
 * 
 *   Unknown Combination:
 *   - Help description used when there is an unknown combination.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * These settings let you adjust the windows displayed for this plugin.
 *
 * ---
 *
 * Concoct Help Window
 * 
 *   Enable?:
 *   - Do you wish to enable this additional window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Window Scale:
 *   - Do you want to scale the size of the window?
 *   - 0.5 for 50%; 1.0 for 100%; 1.5 for 150%; 2.0 for 200%
 * 
 *   Mask Unknown Combos?:
 *   - Do you wish to mask unknown combinations?
 * 
 *     Show In Battle Test?:
 *     - Do you wish to bypass this in Battle Test mode?
 * 
 *     Masked Item Icon:
 *     - Which icon do you wish to use for unknown combinations?
 * 
 *     Masked Item Name:
 *     - What text should be displayed as the name for unknown items?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 *     Auto Adjust Y?:
 *     - For certain layouts, automatically adjust the Y position of the
 *       window and appear towards the bottom of the screen.
 *     - Mainly applies to Border layout and Frontview layout.
 *     - However, if you are using the mid-screen skill/item list, this will
 *       also apply.
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
 * * Olivia
 * * Arisu
 * * Irina
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.03: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash for specific item combinations.
 *    Fix made by Arisu.
 * 
 * Version 1.02: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug that prevented items from unmasking after usage. 
 *    Fix made by Olivia.
 * 
 * Version 1.01: February 15, 2024
 * * Bug Fixes!
 * ** Fixed a crash that would be caused by numeric ID combination registration
 *    for concoctions. Fix made by Olivia.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 *
 * Version 1.00 Official Release Date: October 25, 2023
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
 * @param ItemConcoctions
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"HelpItem1:json":"\"Select a base item.\"","HelpItem2:json":"\"Select a pair item.\"","UnknownComboHelp:json":"\"UNKNOWN COMBINATION!\\nThis item combination has not been made yet.\""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"Window_ItemConcoctHelp":"","ConcoctHelp_Enable:eval":"true","ConcoctHelp_BgType:num":"0","ConcoctHelp_WindowScale:num":"0.8","ConcoctHelp_MaskUnknown:eval":"true","ConcoctHelp_MaskBattleTest:eval":"true","ConcoctHelp_MaskIconIndex:num":"16","ConcoctHelp_MaskName:str":"??????????","ConcoctHelp_RectJS:func":"\"const ww = Graphics.boxWidth - (48 * 4);\\nconst wh = this.calcWindowHeight(3, false);\\nconst scale = this.itemConcoctHelpWindowScale();\\nconst wx = Math.floor((Graphics.width - (ww * scale)) / 2);\\nconst wy = this._helpWindow.y + this._helpWindow.height + Math.round(this._helpWindow.lineHeight() / 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","ConcoctHelp_AutoAdjustY:eval":"true"}
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
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param HelpItem1:json
 * @text Base Item Help
 * @type note
 * @desc Help description used when selecting a base item.
 * @default "Select a base item."
 *
 * @param HelpItem2:json
 * @text Pair Item Help
 * @type note
 * @desc Help description used when selecting a pair item.
 * @default "Select a pair item."
 *
 * @param UnknownComboHelp:json
 * @text Unknown Combination
 * @type note
 * @desc Help description used when there is an unknown combination.
 * @default "UNKNOWN COMBINATION!\nThis item combination has not been made yet."
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Window_ItemConcoctHelp
 * @text Concoct Help Window
 *
 * @param ConcoctHelp_Enable:eval
 * @text Enable?
 * @parent Window_ItemConcoctHelp
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Do you wish to enable this additional window?
 * @default true
 *
 * @param ConcoctHelp_BgType:num
 * @text Background Type
 * @parent Window_ItemConcoctHelp
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ConcoctHelp_WindowScale:num
 * @text Window Scale
 * @parent Window_ItemConcoctHelp
 * @desc Do you want to scale the size of the window?
 * 0.5 for 50%; 1.0 for 100%; 1.5 for 150%; 2.0 for 200%
 * @default 0.8
 *
 * @param ConcoctHelp_MaskUnknown:eval
 * @text Mask Unknown Combos?
 * @parent Window_ItemConcoctHelp
 * @type boolean
 * @on Mask
 * @off Don't Mask
 * @desc Do you wish to mask unknown combinations?
 * @default true
 *
 * @param ConcoctHelp_MaskBattleTest:eval
 * @text Show In Battle Test?
 * @parent ConcoctHelp_MaskUnknown:eval
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Do you wish to bypass this in Battle Test mode?
 * @default true
 *
 * @param ConcoctHelp_MaskIconIndex:num
 * @text Masked Item Icon
 * @parent ConcoctHelp_MaskUnknown:eval
 * @desc Which icon do you wish to use for unknown combinations?
 * @default 16
 *
 * @param ConcoctHelp_MaskName:str
 * @text Masked Item Name
 * @parent ConcoctHelp_MaskUnknown:eval
 * @desc What text should be displayed as the name for unknown items?
 * @default ??????????
 *
 * @param ConcoctHelp_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_ItemConcoctHelp
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - (48 * 4);\nconst wh = this.calcWindowHeight(3, false);\nconst scale = this.itemConcoctHelpWindowScale();\nconst wx = Math.floor((Graphics.width - (ww * scale)) / 2);\nconst wy = this._helpWindow.y + this._helpWindow.height + Math.round(this._helpWindow.lineHeight() / 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ConcoctHelp_AutoAdjustY:eval
 * @text Auto Adjust Y?
 * @parent ConcoctHelp_RectJS:func
 * @type boolean
 * @on Auto Adjust
 * @off Don't Adjust
 * @desc For certain layouts, automatically adjust the Y position of the window.
 * @default true
 *
 */
//=============================================================================

const _0x4ef935=_0x1451;(function(_0x4875d7,_0xa86553){const _0x181817=_0x1451,_0x1e91f0=_0x4875d7();while(!![]){try{const _0x37ebda=parseInt(_0x181817(0x29b))/0x1+parseInt(_0x181817(0x1a1))/0x2+-parseInt(_0x181817(0x221))/0x3*(-parseInt(_0x181817(0x18f))/0x4)+-parseInt(_0x181817(0x1fb))/0x5+-parseInt(_0x181817(0x19a))/0x6*(parseInt(_0x181817(0x1d9))/0x7)+parseInt(_0x181817(0x280))/0x8*(parseInt(_0x181817(0x1c5))/0x9)+-parseInt(_0x181817(0x265))/0xa;if(_0x37ebda===_0xa86553)break;else _0x1e91f0['push'](_0x1e91f0['shift']());}catch(_0x3aac95){_0x1e91f0['push'](_0x1e91f0['shift']());}}}(_0x574e,0x80f25));var label=_0x4ef935(0x25a),tier=tier||0x0,dependencies=[_0x4ef935(0x243),_0x4ef935(0x259)],pluginData=$plugins[_0x4ef935(0x1bf)](function(_0x1f311d){const _0x3e997a=_0x4ef935;return _0x1f311d[_0x3e997a(0x1aa)]&&_0x1f311d['description'][_0x3e997a(0x2a7)]('['+label+']');})[0x0];VisuMZ[label][_0x4ef935(0x210)]=VisuMZ[label][_0x4ef935(0x210)]||{},VisuMZ[_0x4ef935(0x244)]=function(_0x58b605,_0x262a54){const _0x21c581=_0x4ef935;for(const _0x7ebf4e in _0x262a54){if(_0x21c581(0x22a)==='MhIBJ'){if(_0x7ebf4e[_0x21c581(0x28f)](/(.*):(.*)/i)){const _0x5cb823=String(RegExp['$1']),_0x56e7ad=String(RegExp['$2'])[_0x21c581(0x231)]()[_0x21c581(0x293)]();let _0x254cc9,_0x39a6b9,_0x46a67c;switch(_0x56e7ad){case'NUM':_0x254cc9=_0x262a54[_0x7ebf4e]!==''?Number(_0x262a54[_0x7ebf4e]):0x0;break;case'ARRAYNUM':_0x39a6b9=_0x262a54[_0x7ebf4e]!==''?JSON[_0x21c581(0x1c0)](_0x262a54[_0x7ebf4e]):[],_0x254cc9=_0x39a6b9[_0x21c581(0x1d3)](_0x4dd6f4=>Number(_0x4dd6f4));break;case _0x21c581(0x232):_0x254cc9=_0x262a54[_0x7ebf4e]!==''?eval(_0x262a54[_0x7ebf4e]):null;break;case _0x21c581(0x18a):_0x39a6b9=_0x262a54[_0x7ebf4e]!==''?JSON[_0x21c581(0x1c0)](_0x262a54[_0x7ebf4e]):[],_0x254cc9=_0x39a6b9[_0x21c581(0x1d3)](_0x2a5e29=>eval(_0x2a5e29));break;case'JSON':_0x254cc9=_0x262a54[_0x7ebf4e]!==''?JSON[_0x21c581(0x1c0)](_0x262a54[_0x7ebf4e]):'';break;case _0x21c581(0x26f):_0x39a6b9=_0x262a54[_0x7ebf4e]!==''?JSON['parse'](_0x262a54[_0x7ebf4e]):[],_0x254cc9=_0x39a6b9[_0x21c581(0x1d3)](_0x3bd927=>JSON[_0x21c581(0x1c0)](_0x3bd927));break;case'FUNC':_0x254cc9=_0x262a54[_0x7ebf4e]!==''?new Function(JSON['parse'](_0x262a54[_0x7ebf4e])):new Function(_0x21c581(0x238));break;case _0x21c581(0x298):_0x39a6b9=_0x262a54[_0x7ebf4e]!==''?JSON[_0x21c581(0x1c0)](_0x262a54[_0x7ebf4e]):[],_0x254cc9=_0x39a6b9[_0x21c581(0x1d3)](_0x4400d1=>new Function(JSON[_0x21c581(0x1c0)](_0x4400d1)));break;case'STR':_0x254cc9=_0x262a54[_0x7ebf4e]!==''?String(_0x262a54[_0x7ebf4e]):'';break;case _0x21c581(0x24c):_0x39a6b9=_0x262a54[_0x7ebf4e]!==''?JSON[_0x21c581(0x1c0)](_0x262a54[_0x7ebf4e]):[],_0x254cc9=_0x39a6b9[_0x21c581(0x1d3)](_0x22675d=>String(_0x22675d));break;case'STRUCT':_0x46a67c=_0x262a54[_0x7ebf4e]!==''?JSON['parse'](_0x262a54[_0x7ebf4e]):{},_0x254cc9=VisuMZ[_0x21c581(0x244)]({},_0x46a67c);break;case _0x21c581(0x1b4):_0x39a6b9=_0x262a54[_0x7ebf4e]!==''?JSON['parse'](_0x262a54[_0x7ebf4e]):[],_0x254cc9=_0x39a6b9[_0x21c581(0x1d3)](_0x3dd358=>VisuMZ['ConvertParams']({},JSON[_0x21c581(0x1c0)](_0x3dd358)));break;default:continue;}_0x58b605[_0x5cb823]=_0x254cc9;}}else this[_0x21c581(0x1e1)]['showFrontviewUiShopStatusWindow']();}return _0x58b605;},(_0x3189aa=>{const _0x21b052=_0x4ef935,_0x38ca32=_0x3189aa[_0x21b052(0x1d4)];for(const _0x1563eb of dependencies){if(!Imported[_0x1563eb]){if(_0x21b052(0x2a5)!=='HnsGz'){alert(_0x21b052(0x212)[_0x21b052(0x183)](_0x38ca32,_0x1563eb)),SceneManager['exit']();break;}else{if(this[_0x21b052(0x19f)]){this[_0x21b052(0x277)][_0x21b052(0x262)](),this[_0x21b052(0x286)](),this[_0x21b052(0x1ed)]['open'](),this[_0x21b052(0x1ed)][_0x21b052(0x1a5)]=!![],this[_0x21b052(0x1ed)][_0x21b052(0x1a6)]=!![],this[_0x21b052(0x1ed)][_0x21b052(0x1f7)]();const _0x368aef=this[_0x21b052(0x1ed)][_0x21b052(0x23d)];this[_0x21b052(0x1ed)][_0x21b052(0x216)](_0x368aef[_0x21b052(0x1cd)]),this[_0x21b052(0x1ed)][_0x21b052(0x28c)]=_0x368aef['scrollY'],this[_0x21b052(0x1ed)]['_scrollBaseY']=_0x368aef[_0x21b052(0x29a)],this[_0x21b052(0x1f3)]&&this[_0x21b052(0x1f3)][_0x21b052(0x262)]();}else _0xa16aca[_0x21b052(0x25a)][_0x21b052(0x1a9)][_0x21b052(0x2a9)](this);}}}const _0x2a5284=_0x3189aa[_0x21b052(0x20a)];if(_0x2a5284[_0x21b052(0x28f)](/\[Version[ ](.*?)\]/i)){const _0x176c4f=Number(RegExp['$1']);_0x176c4f!==VisuMZ[label]['version']&&(alert(_0x21b052(0x19c)[_0x21b052(0x183)](_0x38ca32,_0x176c4f)),SceneManager[_0x21b052(0x195)]());}if(_0x2a5284[_0x21b052(0x28f)](/\[Tier[ ](\d+)\]/i)){const _0x38ba81=Number(RegExp['$1']);if(_0x38ba81<tier)alert(_0x21b052(0x28d)[_0x21b052(0x183)](_0x38ca32,_0x38ba81,tier)),SceneManager['exit']();else{if(_0x21b052(0x1ea)!=='WVXvH')tier=Math[_0x21b052(0x270)](_0x38ba81,tier);else{if(_0x4851fe[_0x21b052(0x25f)](_0x40d011)){if(!_0x5cf059[_0x21b052(0x20d)]())return![];if(this[_0x21b052(0x1b5)]())return![];}return _0x3cc98a['ItemConcoctSkills'][_0x21b052(0x2ac)][_0x21b052(0x2a9)](this,_0x314e7);}}}VisuMZ[_0x21b052(0x244)](VisuMZ[label]['Settings'],_0x3189aa['parameters']);})(pluginData);if(VisuMZ['BattleCore'][_0x4ef935(0x18c)]<1.75){let text='';text+=_0x4ef935(0x213),text+='in\x20order\x20for\x20VisuMZ_3_ItemConcoctions\x20to\x20work.',alert(text),SceneManager[_0x4ef935(0x195)]();}if(VisuMZ[_0x4ef935(0x23a)]['version']<1.46){let text='';text+=_0x4ef935(0x205),text+=_0x4ef935(0x201),alert(text),SceneManager[_0x4ef935(0x195)]();}VisuMZ['ItemConcoctSkills'][_0x4ef935(0x208)]={'CanConcoct':/<CAN CONCOCT:[ ](.*)>/i,'ConcoctType':/<CONCOCT(?:|ION) TYPE(?:|S):[ ](.*)>/i,'ConcoctList':/<(?:ITEM |)CONCOCT(?:|ION|IONS)>\s*([\s\S]*)\s*<\/(?:ITEM |)CONCOCT(?:|ION|IONS)>/i,'ConcoctConserve':/<CONCOCT(?:|ION) (?:CONSERVE|PRESERVE):[ ](\d+)([%％])>/i},VisuMZ['ItemConcoctSkills'][_0x4ef935(0x225)]=function(_0x50f4e9){const _0x329b42=_0x4ef935;if(_0x50f4e9[_0x329b42(0x28f)](/ITEM[ ](\d+)/i)){if(_0x329b42(0x25e)!=='WWzrE')return Number(RegExp['$1']);else this[_0x329b42(0x1b1)]=_0x3a3705['id'],this[_0x329b42(0x192)]=_0x53e874['id'];}else{if(_0x329b42(0x279)===_0x329b42(0x279))return DataManager[_0x329b42(0x1b8)](_0x50f4e9);else{const _0x53b621=this[_0x329b42(0x200)](),_0x8414f0=_0x22ec9c[_0x329b42(0x1a0)]*_0x53b621;_0x232b0d['y']=_0x16dc63[_0x329b42(0x189)](_0x1c35da[_0x329b42(0x1a0)]-this['_statusWindow'][_0x329b42(0x1a0)]+(this[_0x329b42(0x187)][_0x329b42(0x1a0)]-_0x8414f0)/0x2);}}},DataManager['hasItemConcoctConflicts']=function(_0x22a02b){const _0xc4269b=_0x4ef935;if(!_0x22a02b)return!![];if(!DataManager[_0xc4269b(0x230)](_0x22a02b))return!![];if(this['_checkItemConcoct'])return![];this['_hasItemConcoctConflicts']=this['_hasItemConcoctConflicts']||{};if(this['_hasItemConcoctConflicts'][_0x22a02b['id']])return this[_0xc4269b(0x224)][_0x22a02b['id']];const _0x4bc635=_0x22a02b['note']||'',_0x3c41f0=[_0xc4269b(0x272),'EvoMatrixSkills',_0xc4269b(0x184)];this[_0xc4269b(0x224)][_0x22a02b['id']]=![];for(const _0x185a2d of _0x3c41f0){if(!VisuMZ[_0x185a2d])continue;const _0x566cef=VisuMZ[_0x185a2d][_0xc4269b(0x208)];for(const _0x6e6c in _0x566cef){if(_0xc4269b(0x1be)!==_0xc4269b(0x1be))this['_itemConcoctHelpWindow'][_0xc4269b(0x262)]();else{if(_0x4bc635[_0xc4269b(0x28f)](_0x566cef[_0x6e6c])){this[_0xc4269b(0x224)][_0x22a02b['id']]=!![];break;}}}if(this[_0xc4269b(0x224)][_0x22a02b['id']])break;}return this['_checkItemConcoct']=!![],Imported[_0xc4269b(0x1af)]&&this['canThrowItems'](_0x22a02b)&&(this[_0xc4269b(0x224)][_0x22a02b['id']]=!![]),Imported['VisuMZ_3_ItemAmplifySkills']&&this['canAmplifyWithItems'](_0x22a02b)&&(this[_0xc4269b(0x224)][_0x22a02b['id']]=!![]),delete this[_0xc4269b(0x2a4)],this[_0xc4269b(0x224)][_0x22a02b['id']];},DataManager[_0x4ef935(0x25f)]=function(_0x11ea2c){const _0x1e93a5=_0x4ef935;return this[_0x1e93a5(0x21c)](_0x11ea2c)[_0x1e93a5(0x19d)]>0x0;},DataManager[_0x4ef935(0x21c)]=function(_0x14daec){const _0x2a2da6=_0x4ef935;if(!_0x14daec)return[];if(!DataManager[_0x2a2da6(0x230)](_0x14daec))return[];if(DataManager[_0x2a2da6(0x294)](_0x14daec))return[];this[_0x2a2da6(0x1e6)]=this[_0x2a2da6(0x1e6)]||{};if(this[_0x2a2da6(0x1e6)][_0x14daec['id']]!==undefined){if(_0x2a2da6(0x1d8)===_0x2a2da6(0x2af)){const _0xd2e931=_0x2b1a9d[_0x49985e];if(_0x3d08e9[_0x2a2da6(0x25f)](_0xd2e931)&&_0x5bb9b0[_0x2a2da6(0x29f)]()){_0x374f21(_0x2a2da6(0x18b)['format'](_0xd2e931[_0x2a2da6(0x1d4)])),_0x1d70e7['exit']();return;}_0x55d43d['ItemConcoctSkills'][_0x2a2da6(0x1c1)]['call'](this,_0x225808,_0x3188fa);}else return this[_0x2a2da6(0x1e6)][_0x14daec['id']];}let _0x582c83=[];const _0x188ecd=VisuMZ[_0x2a2da6(0x25a)][_0x2a2da6(0x208)],_0x2561f1=_0x14daec[_0x2a2da6(0x252)]||'';return _0x2561f1[_0x2a2da6(0x28f)](_0x188ecd[_0x2a2da6(0x203)])&&(_0x582c83=String(RegExp['$1'])['split'](',')['map'](_0x14f5d0=>_0x14f5d0[_0x2a2da6(0x231)]()['trim']())),this[_0x2a2da6(0x1e6)][_0x14daec['id']]=_0x582c83,this[_0x2a2da6(0x1e6)][_0x14daec['id']];},DataManager['canBeConcoctedBy']=function(_0x479d2e,_0x5752a4){const _0x29b2ed=_0x4ef935;return this['concoctItemTypes'](_0x479d2e)[_0x29b2ed(0x27a)](_0x590576=>this[_0x29b2ed(0x21c)](_0x5752a4)[_0x29b2ed(0x2a7)](_0x590576));},DataManager[_0x4ef935(0x1ff)]=function(_0x4c2029){const _0x217bb1=_0x4ef935;if(!_0x4c2029)return[];if(!DataManager[_0x217bb1(0x267)](_0x4c2029))return[];this[_0x217bb1(0x2a8)]=this[_0x217bb1(0x2a8)]||{};if(this[_0x217bb1(0x2a8)][_0x4c2029['id']]!==undefined){if(_0x217bb1(0x257)!==_0x217bb1(0x257))this[_0x217bb1(0x1ed)][_0x217bb1(0x235)](_0x190a44),this['_itemWindow']['refresh'](),this[_0x217bb1(0x1ed)][_0x217bb1(0x26c)](),this[_0x217bb1(0x1ed)][_0x217bb1(0x216)](0x0);else return this[_0x217bb1(0x2a8)][_0x4c2029['id']];}let _0x187a87=[];const _0x319d06=VisuMZ[_0x217bb1(0x25a)][_0x217bb1(0x208)],_0x2741e9=_0x4c2029[_0x217bb1(0x252)]||'';if(_0x2741e9[_0x217bb1(0x28f)](_0x319d06[_0x217bb1(0x1ec)])){if('NaHnx'==='EpvMG'){const _0x7e7eef=_0x57b9b0(_0x2786d4['$1']);_0x7e7eef!==_0x45cb49[_0x15c53e][_0x217bb1(0x18c)]&&(_0x19adc7(_0x217bb1(0x19c)[_0x217bb1(0x183)](_0x35b73e,_0x7e7eef)),_0x2a6420[_0x217bb1(0x195)]());}else _0x187a87=String(RegExp['$1'])[_0x217bb1(0x1f6)](',')[_0x217bb1(0x1d3)](_0x48778c=>_0x48778c[_0x217bb1(0x231)]()[_0x217bb1(0x293)]());}return _0x187a87[_0x217bb1(0x1da)](_0x217bb1(0x1f2),_0x217bb1(0x27c)),_0x4c2029[_0x217bb1(0x1f1)]&&(_0x187a87=_0x187a87[_0x217bb1(0x1f8)](_0x4c2029[_0x217bb1(0x1f1)])),_0x187a87=_0x187a87['map'](_0x52b93d=>_0x52b93d[_0x217bb1(0x231)]()[_0x217bb1(0x293)]()),this[_0x217bb1(0x2a8)][_0x4c2029['id']]=_0x187a87,_0x187a87;},DataManager[_0x4ef935(0x263)]=function(_0x5b2a4f){const _0x1dd15a=_0x4ef935;if(!_0x5b2a4f)return{};if(!DataManager['isItem'](_0x5b2a4f))return{};this[_0x1dd15a(0x1ac)]=this[_0x1dd15a(0x1ac)]||{};if(this[_0x1dd15a(0x1ac)][_0x5b2a4f['id']]!==undefined)return this[_0x1dd15a(0x1ac)][_0x5b2a4f['id']];let _0x3c3c10={};const _0xb52744=VisuMZ[_0x1dd15a(0x25a)][_0x1dd15a(0x208)],_0x3162b5=_0x5b2a4f['note']||'';if(_0x3162b5['match'](_0xb52744['ConcoctList'])){if('BTcnJ'!==_0x1dd15a(0x296)){const _0xb00b=String(RegExp['$1'])['split'](/[\r\n]+/)[_0x1dd15a(0x29e)]('');for(const _0x2d8601 of _0xb00b){if(_0x2d8601[_0x1dd15a(0x28f)](/(.*):[ ](.*)/i)){const _0x5bec51=String(RegExp['$1']),_0x1d4525=String(RegExp['$2']),_0x2db7e1=VisuMZ[_0x1dd15a(0x25a)][_0x1dd15a(0x225)](_0x5bec51),_0x4053ba=VisuMZ[_0x1dd15a(0x25a)][_0x1dd15a(0x225)](_0x1d4525);if(_0x2db7e1===_0x5b2a4f['id'])continue;if(_0x4053ba===_0x5b2a4f['id'])continue;if(_0x2db7e1===_0x4053ba)continue;_0x3c3c10[_0x2db7e1]=_0x4053ba;}}}else{this[_0x1dd15a(0x1a2)]===_0xafe6d8&&this['initItemConcoctCombinations']();this[_0x1dd15a(0x1a2)][_0x3acf8d['id']]=this['_itemConcoctCombinations'][_0x4cb445['id']]||{},this[_0x1dd15a(0x1a2)][_0x408478['id']][_0x46f287['id']]=!![];if(_0x3dbde8[_0x1dd15a(0x26b)]()){const _0x37bcda=_0x50137f[_0x1dd15a(0x22e)];_0x37bcda&&_0x37bcda[_0x1dd15a(0x295)]&&_0x37bcda['_itemConcoctHelpWindow'][_0x1dd15a(0x233)]();}}}return this['_cache_getConcoctBases'][_0x5b2a4f['id']]=_0x3c3c10,this[_0x1dd15a(0x1ac)][_0x5b2a4f['id']];},DataManager[_0x4ef935(0x1f0)]=function(_0xee9a9b){const _0x145c8a=_0x4ef935;if(!_0xee9a9b)return[];if(!this[_0x145c8a(0x25f)](_0xee9a9b))return[];this[_0x145c8a(0x1ac)]=this[_0x145c8a(0x1ac)]||{};if(this['_cache_getConcoctBases'][_0xee9a9b['id']]!==undefined){if('IdrNk'===_0x145c8a(0x2a0)){const _0x535734=this[_0x145c8a(0x1ed)][_0x145c8a(0x236)],_0x11c3c8=this['_itemWindow'][_0x145c8a(0x1e0)],_0x5193dd=_0x2aa82f['getConcoctCombinationID'](_0x535734,_0x11c3c8);this[_0x145c8a(0x1ed)][_0x145c8a(0x1f7)]();const _0x1c173a=_0x46ab02[_0x145c8a(0x27d)]();_0x1c173a[_0x145c8a(0x1cc)](_0x5193dd);if(!_0x1c173a['needsSelection']())this[_0x145c8a(0x239)](),this[_0x145c8a(0x18d)]();else _0x1c173a[_0x145c8a(0x264)]()?this[_0x145c8a(0x23f)]():this[_0x145c8a(0x23b)]();}else return this[_0x145c8a(0x1ac)][_0xee9a9b['id']];}return this[_0x145c8a(0x1ac)][_0xee9a9b['id']]=$dataItems[_0x145c8a(0x1bf)](_0x54a5c8=>_0x54a5c8&&this[_0x145c8a(0x2a3)](_0x54a5c8,_0xee9a9b)),this[_0x145c8a(0x1ac)][_0xee9a9b['id']];},DataManager[_0x4ef935(0x1b2)]=function(_0x1dbc79){const _0x2c5216=_0x4ef935;if(!_0x1dbc79)return[];if(!DataManager[_0x2c5216(0x267)](_0x1dbc79))return[];this[_0x2c5216(0x207)]=this['_cache_getConcoctPairs']||{};if(this['_cache_getConcoctPairs'][_0x1dbc79['id']]!==undefined)return this[_0x2c5216(0x207)][_0x1dbc79['id']];const _0x59581a=Object[_0x2c5216(0x29c)](this['getConcoctData'](_0x1dbc79)),_0x42cb66=_0x59581a['map'](_0x4c577e=>Number(_0x4c577e))[_0x2c5216(0x182)]((_0x1b1410,_0x39265f)=>_0x1b1410-_0x39265f);return this[_0x2c5216(0x207)][_0x1dbc79['id']]=_0x42cb66['map'](_0x363bd1=>$dataItems[_0x363bd1])[_0x2c5216(0x1bf)](_0xb26f3f=>$gameParty[_0x2c5216(0x186)]()[_0x2c5216(0x2a7)](_0xb26f3f)),this[_0x2c5216(0x207)][_0x1dbc79['id']];},DataManager[_0x4ef935(0x206)]=function(_0x15c177,_0x2d48ab){const _0x5980b4=_0x4ef935;return this[_0x5980b4(0x263)](_0x15c177)[_0x2d48ab?_0x2d48ab['id']:0x0];},TextManager[_0x4ef935(0x247)]={'helpItem1':VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x210)][_0x4ef935(0x21b)][_0x4ef935(0x1ab)]??_0x4ef935(0x198),'helpItem2':VisuMZ['ItemConcoctSkills']['Settings'][_0x4ef935(0x21b)]['HelpItem2']??_0x4ef935(0x27f),'unknownComboHelp':VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x210)]['Vocab']['UnknownComboHelp']??_0x4ef935(0x27e)},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x188)]=Game_System['prototype']['initialize'],Game_System[_0x4ef935(0x246)][_0x4ef935(0x245)]=function(){const _0x3a193f=_0x4ef935;VisuMZ[_0x3a193f(0x25a)]['Game_System_initialize'][_0x3a193f(0x2a9)](this),this[_0x3a193f(0x1fa)]();},Game_System[_0x4ef935(0x246)][_0x4ef935(0x1fa)]=function(){const _0x30803b=_0x4ef935;this[_0x30803b(0x1a2)]={};},Game_System['prototype'][_0x4ef935(0x1df)]=function(_0xfa5999,_0x32d673){const _0x8c2a6c=_0x4ef935;if(!Window_ItemConcoctHelp['SETTINGS'][_0x8c2a6c(0x278)])return!![];if($gameTemp['isPlaytest']()&&Window_ItemConcoctHelp[_0x8c2a6c(0x226)][_0x8c2a6c(0x1cb)])return!![];this['_itemConcoctCombinations']===undefined&&this['initItemConcoctCombinations']();if(!_0xfa5999||!_0x32d673)return null;return this[_0x8c2a6c(0x1a2)][_0xfa5999['id']]=this[_0x8c2a6c(0x1a2)][_0xfa5999['id']]||{},this[_0x8c2a6c(0x1a2)][_0xfa5999['id']][_0x32d673['id']];},Game_System[_0x4ef935(0x246)][_0x4ef935(0x1a8)]=function(_0x38140e,_0x5eb5c9){const _0x1d40ea=_0x4ef935;this[_0x1d40ea(0x1a2)]===undefined&&this[_0x1d40ea(0x1fa)]();this['_itemConcoctCombinations'][_0x38140e['id']]=this[_0x1d40ea(0x1a2)][_0x38140e['id']]||{},this[_0x1d40ea(0x1a2)][_0x38140e['id']][_0x5eb5c9['id']]=!![];if(SceneManager[_0x1d40ea(0x26b)]()){if(_0x1d40ea(0x1ca)===_0x1d40ea(0x26e))this[_0x1d40ea(0x1e3)]['active']=!![];else{const _0x568a5d=SceneManager[_0x1d40ea(0x22e)];_0x568a5d&&_0x568a5d['_itemConcoctHelpWindow']&&_0x568a5d[_0x1d40ea(0x295)][_0x1d40ea(0x233)]();}}},VisuMZ[_0x4ef935(0x25a)]['Game_Action_isValid']=Game_Action[_0x4ef935(0x246)]['isValid'],Game_Action[_0x4ef935(0x246)][_0x4ef935(0x1c6)]=function(){const _0x52ff51=_0x4ef935;if(this['item']()&&$gameParty[_0x52ff51(0x20d)]()&&this[_0x52ff51(0x273)]){if('KNuiV'==='btRhx')_0x20704b=_0x3e9990[_0x52ff51(0x270)](_0x2d9cda,_0x5dd48e);else return this[_0x52ff51(0x1a3)]();}else{if(_0x52ff51(0x24b)===_0x52ff51(0x24b))return VisuMZ[_0x52ff51(0x25a)][_0x52ff51(0x2aa)][_0x52ff51(0x2a9)](this);else this[_0x52ff51(0x1fa)]();}},Game_Action['prototype'][_0x4ef935(0x254)]=function(_0x10dfd6){const _0x21598a=_0x4ef935;this[_0x21598a(0x273)]=_0x10dfd6;},Game_Action[_0x4ef935(0x246)]['isConcoctItemValid']=function(){const _0x13f8ee=_0x4ef935;if(!this[_0x13f8ee(0x17e)]())return![];if(this[_0x13f8ee(0x1d2)])return![];return this[_0x13f8ee(0x17e)]()[_0x13f8ee(0x2ae)]();};function _0x574e(){const _0x19b853=['setItemConcoctBase','_itemConcoctBase','ConcoctHelp_MaskIconIndex','return\x200','finalizeItemConcoct','ItemsEquipsCore','startActorSelection','startItemConcoct','_itemConcoctCancelData2','Rtbea','startEnemySelection','_scrollBaseY','AVsCY','VisuMZ_3_FrontviewBattleUI','VisuMZ_1_BattleCore','ConvertParams','initialize','prototype','ITEM_CONCOCT','getConcoctSkill','_item2','random','GuHHE','ARRAYSTR','UgZIx','setItemCombo','actorCommandSingleSkill','createDisplayObjects','Window_ItemList_updateHelp','note','scrollY','setConcoctMode','open','determineItemConcoct','ajMSp','clearItemConcoctSkill','VisuMZ_1_ItemsEquipsCore','ItemConcoctSkills','showFrontviewUiShopStatusWindow','onEnemyCancel','payConcoctCost','pHAWF','canConcoctItems','ConcoctHelp_Enable','wQmVW','hide','getConcoctData','isForOpponent','9840520dQeMdH','currentExt','isItem','onSkillOk','setConcoctItem','singleSkill','isSceneBattle','activate','RVWaS','PGpCy','ARRAYJSON','max','_helpWindow','ActiveChainSkills','_concoctMode','rUXxN','uwPHl','vAQZb','_enemyWindow','maskUnknownCombos','vRMRs','some','scaleSize','any','inputtingAction','UNKNOWN\x20COMBINATION!\x0aThis\x20item\x20combination\x20has\x20not\x20been\x20made\x20yet.','Select\x20a\x20pair\x20item.','3884488jhwWDc','setItemConcoctPair','_subject','setItemConcoctSkill','XKKpO','Game_Battler_onBattleStart','cancelItemConcoct','setConcoctSkill','TwnzQ','concoctConsumeItem','isEnabled','BsiSy','_scrollY','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','unknownIcon','match','ConcoctHelp_WindowScale','setBackgroundType','onEnemyOk','trim','hasItemConcoctConflicts','_itemConcoctHelpWindow','fcKpQ','consumable','ARRAYFUNC','sideview_ui','scrollBaseY','855336nnXnka','keys','enable','remove','isPlaytest','xLLVm','ConcoctConserve','onActorCancel','canBeConcoctedBy','_checkItemConcoct','fdOpV','ConcoctHelp_MaskUnknown','includes','_cache_concoctItemTypes','call','Game_Action_isValid','currentSymbol','Game_BattlerBase_isOccasionOk','?????','canPayConcoction','NmvRT','boxWidth','iyIcg','refresh','setText','subject','getConcoctItems','Scene_Battle_endCommandSelection','MrlxR','sort','format','InputComboSkills','setLastBattleSkill','items','_statusWindow','Game_System_initialize','floor','ARRAYEVAL','You\x20cannot\x20use\x20a\x20forced\x20action\x20with\x20%1.','version','selectNextCommand','meetsSkillConditions','193092DNnpTB','Scene_Battle_createDisplayObjects','hasConcoctCost','_concoctItemId2','kXGiG','skill','exit','createItemConcoctHelpWindow','paySkillCost','Select\x20a\x20base\x20item.','unknownName','53574RdnixB','round','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','length','_item1','_itemConcoctMode','height','1618380CvBBhD','_itemConcoctCombinations','isConcoctItemValid','Game_Battler_useItem','visible','active','clearItemConcoctions','registerItemConcoctCombination','Scene_Battle_onEnemyCancel','status','HelpItem1','_cache_getConcoctBases','onItemCancel','confirmItemConcoct','VisuMZ_3_ItemThrowSkills','setItemConcoctHelpWindow','_concoctItemId1','getConcoctPairs','LarDS','ARRAYSTRUCT','isEnemy','Window_BattleItem_includes','Window','getItemIdWithName','Scene_Battle_onActorOk','bgType','yskTZ','width','onBattleEnd','fYAiE','filter','parse','Game_Battler_forceAction','onActorOk','oFbeT','Scene_Battle_onItemCancel','9EXJLkl','isValid','isOccasionOk','_itemConcoctSkill','xYskG','HZMSa','battleTestShowUnknownCombos','setItem','index','lineHeight','deactivate','kyAZD','RMxcu','_forcing','map','name','UJqIw','Scene_Battle_actorCommandSingleSkill','constructor','mycIj','623sbeWcY','push','_itemConcoctCancelData','onItemOk','ConcoctHelp_MaskName','item','checkItemConcoctCombination','_itemConcoctPair','_skillWindow','ConcoctHelp_RectJS','_actorCommandWindow','onCancelItemConcoctSkill','helpItem2','_cache_canConcoctItemTypes','Scene_Battle_onSkillOk','ndjdn','\x5cI[%1]%2\x0a','ntTSR','itypeId','ConcoctType','_itemWindow','CfBif','Game_Battler_onBattleEnd','getConcoctBases','categories','all','_actorWindow','isActor','sOiPu','split','updateHelp','concat','nbaGu','initItemConcoctCombinations','181405tvfsmW','Rutst','_concoctSkillId','JOffS','concoctItemTypes','itemConcoctHelpWindowScale','in\x20order\x20for\x20VisuMZ_3_ItemConcoctions\x20to\x20work.','addChild','CanConcoct','Window_BattleItem_isShowNew','VisuMZ_1_ItemsEquipsCore\x20needs\x20to\x20be\x20updated\x20','getConcoctCombinationID','_cache_getConcoctPairs','RegExp','helpItem1','description','itemConcoctHelpWindowRect','scale','inBattle','Scene_Battle_onEnemyOk','actor','Settings','frontview_ui','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20','onBattleStart','unknownComboHelp','forceSelect','numItems','yBXUH','XEigl','needsSelection','Vocab','canConcoctItemTypes','Window_BattleItem_isEnabled','autoAdjustItemConcoctHelpWindowY','endCommandSelection','isShowNew','12LfXSvl','Scene_Battle_onItemOk','BattleManager_endAction','_hasItemConcoctConflicts','ConvertToItemID','SETTINGS','loseItem','useItem','NmXDV','MhIBJ','show','aXJrd','forceAction','_scene','autoAdjustY','isSkill','toUpperCase','EVAL','clearItemComboCache','battleLayoutStyle'];_0x574e=function(){return _0x19b853;};return _0x574e();}var $concoctItems=[];VisuMZ[_0x4ef935(0x25a)]['UpdateGlobalCococtItemsVariable']=function(_0x280e8e,_0x1c3ad7){$concoctItems=[_0x280e8e,_0x1c3ad7];},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x2ac)]=Game_BattlerBase[_0x4ef935(0x246)]['isOccasionOk'],Game_BattlerBase[_0x4ef935(0x246)][_0x4ef935(0x1c7)]=function(_0x12578f){const _0x5e032b=_0x4ef935;if(DataManager[_0x5e032b(0x25f)](_0x12578f)){if(_0x5e032b(0x241)===_0x5e032b(0x1fc))return _0x1e51bb[_0x5e032b(0x1aa)]&&_0x53d8fc['description'][_0x5e032b(0x2a7)]('['+_0x322f3a+']');else{if(!$gameParty[_0x5e032b(0x20d)]())return![];if(this[_0x5e032b(0x1b5)]())return![];}}return VisuMZ[_0x5e032b(0x25a)]['Game_BattlerBase_isOccasionOk'][_0x5e032b(0x2a9)](this,_0x12578f);},VisuMZ['ItemConcoctSkills'][_0x4ef935(0x285)]=Game_Battler[_0x4ef935(0x246)][_0x4ef935(0x214)],Game_Battler['prototype'][_0x4ef935(0x214)]=function(_0x7df0df){const _0xb6fddd=_0x4ef935;VisuMZ[_0xb6fddd(0x25a)][_0xb6fddd(0x285)][_0xb6fddd(0x2a9)](this,_0x7df0df),this[_0xb6fddd(0x1a7)]();},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x223)]=BattleManager['endAction'],BattleManager['endAction']=function(){const _0x5a0324=_0x4ef935;this[_0x5a0324(0x282)]&&this[_0x5a0324(0x282)][_0x5a0324(0x1f4)]()&&(_0x5a0324(0x1c3)==='uiZPt'?this[_0x5a0324(0x1e0)]=null:this[_0x5a0324(0x282)][_0x5a0324(0x1a7)]()),VisuMZ['ItemConcoctSkills'][_0x5a0324(0x223)][_0x5a0324(0x2a9)](this);},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x1ef)]=Game_Battler[_0x4ef935(0x246)]['onBattleEnd'],Game_Battler[_0x4ef935(0x246)][_0x4ef935(0x1bd)]=function(){const _0x1c3d09=_0x4ef935;VisuMZ[_0x1c3d09(0x25a)][_0x1c3d09(0x1ef)]['call'](this),this[_0x1c3d09(0x1a7)]();},Game_Battler[_0x4ef935(0x246)][_0x4ef935(0x1a7)]=function(){const _0x2857fe=_0x4ef935;this[_0x2857fe(0x1fd)]=-0x1,this[_0x2857fe(0x1b1)]=-0x1,this[_0x2857fe(0x192)]=-0x1;},Game_Battler[_0x4ef935(0x246)]['canPayConcoction']=function(){const _0x563df2=_0x4ef935,_0x3d8bd2=this[_0x563df2(0x248)]();if(!this[_0x563df2(0x18e)](_0x3d8bd2))return![];const _0x2c6e85=this[_0x563df2(0x17f)]();if($gameParty[_0x563df2(0x217)](_0x2c6e85[0x0])<=0x0)return![];if($gameParty['numItems'](_0x2c6e85[0x1])<=0x0)return![];return!![];},Game_Battler[_0x4ef935(0x246)]['setConcoctSkill']=function(_0x3fc629){const _0xe48d22=_0x4ef935;this[_0xe48d22(0x1fd)]=_0x3fc629['id'];},Game_Battler['prototype'][_0x4ef935(0x248)]=function(){return $dataSkills[this['_concoctSkillId']];},Game_Battler['prototype'][_0x4ef935(0x269)]=function(_0xb7f8d,_0x20fbca){const _0x172216=_0x4ef935;this['_concoctItemId1']=_0xb7f8d['id'],this[_0x172216(0x192)]=_0x20fbca['id'];},Game_Battler[_0x4ef935(0x246)]['getConcoctItems']=function(){const _0x3ca0ac=_0x4ef935;return[$dataItems[this[_0x3ca0ac(0x1b1)]],$dataItems[this[_0x3ca0ac(0x192)]]];},VisuMZ['ItemConcoctSkills'][_0x4ef935(0x1a4)]=Game_Battler[_0x4ef935(0x246)][_0x4ef935(0x228)],Game_Battler['prototype']['useItem']=function(_0x4d8550){const _0x4cc3ad=_0x4ef935;$concoctItems=[];if(this[_0x4cc3ad(0x191)]()){if(_0x4cc3ad(0x1d1)===_0x4cc3ad(0x1d1))this[_0x4cc3ad(0x25d)]();else{if(!_0x56973e)return[];if(!_0x4d771f['isItem'](_0x49346d))return[];this['_cache_getConcoctPairs']=this['_cache_getConcoctPairs']||{};if(this[_0x4cc3ad(0x207)][_0x4806a3['id']]!==_0x44c297)return this[_0x4cc3ad(0x207)][_0x3a0dc0['id']];const _0x232e27=_0x392a40[_0x4cc3ad(0x29c)](this[_0x4cc3ad(0x263)](_0x2e912f)),_0x5a457b=_0x232e27[_0x4cc3ad(0x1d3)](_0x5a4f20=>_0x3b4c3c(_0x5a4f20))[_0x4cc3ad(0x182)]((_0x4b0f0b,_0x5d17f4)=>_0x4b0f0b-_0x5d17f4);return this['_cache_getConcoctPairs'][_0x46aad1['id']]=_0x5a457b[_0x4cc3ad(0x1d3)](_0x5d6f57=>_0xa553be[_0x5d6f57])[_0x4cc3ad(0x1bf)](_0x293dd0=>_0x3620b2['items']()[_0x4cc3ad(0x2a7)](_0x293dd0)),this[_0x4cc3ad(0x207)][_0x4897a4['id']];}}else VisuMZ['ItemConcoctSkills']['Game_Battler_useItem'][_0x4cc3ad(0x2a9)](this,_0x4d8550);},Game_Battler[_0x4ef935(0x246)]['hasConcoctCost']=function(){const _0xb27374=_0x4ef935;if(!$gameParty[_0xb27374(0x20d)]())return![];if(!this[_0xb27374(0x1f4)]())return![];if(this['_concoctSkillId']===undefined)this[_0xb27374(0x1a7)]();if(this['_concoctItemId1']===undefined)this['clearItemConcoctions']();if(this['_concoctItemId2']===undefined)this[_0xb27374(0x1a7)]();if(this[_0xb27374(0x1fd)]>0x0)return!![];if(this[_0xb27374(0x1b1)]>0x0)return!![];if(this['_concoctItemId2']>0x0)return!![];return![];},Game_Battler[_0x4ef935(0x246)]['payConcoctCost']=function(){const _0x13fda7=_0x4ef935,_0xc146cf=$dataSkills[this[_0x13fda7(0x1fd)]],_0x177ea4=$dataItems[this['_concoctItemId1']],_0xf39608=$dataItems[this[_0x13fda7(0x192)]];if(_0xc146cf){this[_0x13fda7(0x197)](_0xc146cf);if(this[_0x13fda7(0x1f4)]())this[_0x13fda7(0x185)](_0xc146cf);}_0x177ea4&&$gameParty[_0x13fda7(0x289)](_0x177ea4),_0xf39608&&$gameParty[_0x13fda7(0x289)](_0xf39608),_0x177ea4&&_0xf39608&&('kyAZD'!==_0x13fda7(0x1d0)?this[_0x13fda7(0x23f)]():$gameSystem[_0x13fda7(0x1a8)](_0x177ea4,_0xf39608)),VisuMZ[_0x13fda7(0x25a)]['UpdateGlobalCococtItemsVariable'](_0x177ea4,_0xf39608),this[_0x13fda7(0x1a7)]();},Game_Party['prototype'][_0x4ef935(0x289)]=function(_0x31a8ec){const _0x290ca8=_0x4ef935;if(!_0x31a8ec)return;if(!_0x31a8ec[_0x290ca8(0x297)])return;if(_0x31a8ec[_0x290ca8(0x1eb)]===0x2)return;const _0x5b99de=_0x31a8ec[_0x290ca8(0x252)]||'',_0x1ef4c9=VisuMZ[_0x290ca8(0x25a)][_0x290ca8(0x208)];if(_0x5b99de['match'](_0x1ef4c9[_0x290ca8(0x2a1)])){if(_0x290ca8(0x229)==='mchZp'){const _0x154fd6=_0x5861a8['_scene'];_0x154fd6&&_0x154fd6[_0x290ca8(0x295)]&&_0x154fd6[_0x290ca8(0x295)]['clearItemComboCache']();}else{const _0x98ba1a=Number(RegExp['$1'])*0.01;if(Math[_0x290ca8(0x24a)]()<_0x98ba1a)return;}}$gameParty[_0x290ca8(0x227)](_0x31a8ec,0x1);},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x1c1)]=Game_Battler[_0x4ef935(0x246)][_0x4ef935(0x22d)],Game_Battler[_0x4ef935(0x246)][_0x4ef935(0x22d)]=function(_0x284845,_0x9d71a5){const _0x31cdc2=_0x4ef935,_0x2ce09a=$dataSkills[_0x284845];if(DataManager[_0x31cdc2(0x25f)](_0x2ce09a)&&$gameTemp[_0x31cdc2(0x29f)]()){alert(_0x31cdc2(0x18b)['format'](_0x2ce09a[_0x31cdc2(0x1d4)])),SceneManager[_0x31cdc2(0x195)]();return;}VisuMZ[_0x31cdc2(0x25a)][_0x31cdc2(0x1c1)]['call'](this,_0x284845,_0x9d71a5);},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x190)]=Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x250)],Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x250)]=function(){const _0x5b6d83=_0x4ef935;VisuMZ['ItemConcoctSkills'][_0x5b6d83(0x190)]['call'](this),Window_ItemConcoctHelp[_0x5b6d83(0x226)][_0x5b6d83(0x29d)]&&this[_0x5b6d83(0x196)]();},Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x196)]=function(){const _0x20f11c=_0x4ef935,_0x41bfb7=this[_0x20f11c(0x20b)]();if(Window_ItemConcoctHelp[_0x20f11c(0x226)]['autoAdjustY']){if('mdSjq'!==_0x20f11c(0x24d))this['autoAdjustItemConcoctHelpWindowY'](_0x41bfb7);else{if(!_0x2de231)return[];if(!_0x3143e2[_0x20f11c(0x267)](_0x20758a))return[];this[_0x20f11c(0x2a8)]=this['_cache_concoctItemTypes']||{};if(this['_cache_concoctItemTypes'][_0x2f1fed['id']]!==_0x226e06)return this['_cache_concoctItemTypes'][_0x3de567['id']];let _0x5cbaaf=[];const _0x467712=_0x1b7cfa[_0x20f11c(0x25a)]['RegExp'],_0x1126c5=_0x4a8ce1[_0x20f11c(0x252)]||'';return _0x1126c5['match'](_0x467712[_0x20f11c(0x1ec)])&&(_0x5cbaaf=_0x55742e(_0x5a6808['$1'])['split'](',')[_0x20f11c(0x1d3)](_0xb17e40=>_0xb17e40[_0x20f11c(0x231)]()[_0x20f11c(0x293)]())),_0x5cbaaf[_0x20f11c(0x1da)]('all',_0x20f11c(0x27c)),_0x194652[_0x20f11c(0x1f1)]&&(_0x5cbaaf=_0x5cbaaf[_0x20f11c(0x1f8)](_0x4a2805[_0x20f11c(0x1f1)])),_0x5cbaaf=_0x5cbaaf[_0x20f11c(0x1d3)](_0x43f907=>_0x43f907['toUpperCase']()['trim']()),this[_0x20f11c(0x2a8)][_0xf40c5b['id']]=_0x5cbaaf,_0x5cbaaf;}}const _0x412562=new Window_ItemConcoctHelp(_0x41bfb7);_0x412562[_0x20f11c(0x262)](),this[_0x20f11c(0x202)](_0x412562),this[_0x20f11c(0x295)]=_0x412562,this[_0x20f11c(0x1ed)]['setItemConcoctHelpWindow'](_0x412562),_0x412562[_0x20f11c(0x291)](Window_ItemConcoctHelp[_0x20f11c(0x226)][_0x20f11c(0x1ba)]);},Scene_Battle[_0x4ef935(0x246)]['autoAdjustItemConcoctHelpWindowY']=function(_0x527354){const _0x5c1c9b=_0x4ef935;if(['border',_0x5c1c9b(0x211)][_0x5c1c9b(0x2a7)](this[_0x5c1c9b(0x234)]())){if('nbaGu'!==_0x5c1c9b(0x1f9))return this[_0x5c1c9b(0x1ac)][_0x75deb8['id']];else{const _0x2eeccf=this[_0x5c1c9b(0x200)](),_0x50d96c=_0x527354[_0x5c1c9b(0x1a0)]*_0x2eeccf;_0x527354['y']=Math['floor'](Graphics[_0x5c1c9b(0x1a0)]-this[_0x5c1c9b(0x187)][_0x5c1c9b(0x1a0)]+(this[_0x5c1c9b(0x187)][_0x5c1c9b(0x1a0)]-_0x50d96c)/0x2);}}else{if([_0x5c1c9b(0x299)]['includes'](this['battleLayoutStyle']())){}else{if(this['isSkillItemWindowsMiddle']()){if(_0x5c1c9b(0x1b3)===_0x5c1c9b(0x1b3)){const _0x4f1db6=this[_0x5c1c9b(0x200)](),_0x35835f=_0x527354['height']*_0x4f1db6;_0x527354['y']=Math[_0x5c1c9b(0x189)](Graphics['height']-this[_0x5c1c9b(0x187)][_0x5c1c9b(0x1a0)]+(this[_0x5c1c9b(0x187)][_0x5c1c9b(0x1a0)]-_0x35835f)/0x2);}else{if(!_0x3f1341[_0x5c1c9b(0x226)][_0x5c1c9b(0x278)])return!![];if(_0x59d84e[_0x5c1c9b(0x29f)]()&&_0x478fb8[_0x5c1c9b(0x226)]['battleTestShowUnknownCombos'])return!![];this[_0x5c1c9b(0x1a2)]===_0x4a952e&&this[_0x5c1c9b(0x1fa)]();if(!_0x3400e6||!_0x10a1a6)return null;return this[_0x5c1c9b(0x1a2)][_0x1cb535['id']]=this[_0x5c1c9b(0x1a2)][_0x2ff5bd['id']]||{},this[_0x5c1c9b(0x1a2)][_0x2b15b3['id']][_0x3e3223['id']];}}}}},Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x20b)]=function(){const _0x328584=_0x4ef935;if(VisuMZ['ItemConcoctSkills'][_0x328584(0x210)][_0x328584(0x1b7)][_0x328584(0x1e2)])return VisuMZ[_0x328584(0x25a)][_0x328584(0x210)]['Window'][_0x328584(0x1e2)][_0x328584(0x2a9)](this);const _0x3d5fe5=Graphics[_0x328584(0x17a)]-0x30*0x4,_0x3e4260=this['calcWindowHeight'](0x3,![]),_0x47f9ab=this[_0x328584(0x200)](),_0x1850cd=Math[_0x328584(0x189)]((Graphics[_0x328584(0x1bc)]-_0x3d5fe5*_0x47f9ab)/0x2),_0x2484ae=this['_helpWindow']['y']+this[_0x328584(0x271)][_0x328584(0x1a0)]+Math[_0x328584(0x19b)](this[_0x328584(0x271)][_0x328584(0x1ce)]()/0x2);return new Rectangle(_0x1850cd,_0x2484ae,_0x3d5fe5,_0x3e4260);},Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x200)]=function(){const _0x9cf750=_0x4ef935;return Window_ItemConcoctHelp[_0x9cf750(0x226)][_0x9cf750(0x20c)];},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x1d6)]=Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x24f)],Scene_Battle[_0x4ef935(0x246)]['actorCommandSingleSkill']=function(){const _0x31d386=_0x4ef935,_0x555fae=this[_0x31d386(0x1e3)][_0x31d386(0x266)](),_0x4a05a1=$dataSkills[_0x555fae];DataManager[_0x31d386(0x25f)](_0x4a05a1)?this[_0x31d386(0x23c)](_0x4a05a1):VisuMZ[_0x31d386(0x25a)]['Scene_Battle_actorCommandSingleSkill'][_0x31d386(0x2a9)](this);},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x1e7)]=Scene_Battle[_0x4ef935(0x246)]['onSkillOk'],Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x268)]=function(){const _0xefad22=_0x4ef935,_0x1c4189=this[_0xefad22(0x1e1)][_0xefad22(0x1de)]();DataManager[_0xefad22(0x25f)](_0x1c4189)?'wQmVW'!==_0xefad22(0x261)?(this[_0xefad22(0x282)]&&this[_0xefad22(0x282)][_0xefad22(0x1f4)]()&&this['_subject'][_0xefad22(0x1a7)](),_0x4af576['ItemConcoctSkills'][_0xefad22(0x223)][_0xefad22(0x2a9)](this)):this['startItemConcoct'](_0x1c4189):'yskTZ'!==_0xefad22(0x1bb)?this['_itemConcoctHelpWindow']=_0x21007f:VisuMZ[_0xefad22(0x25a)]['Scene_Battle_onSkillOk'][_0xefad22(0x2a9)](this);},Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x23c)]=function(_0x594749){const _0xe75fb=_0x4ef935;this[_0xe75fb(0x19f)]=!![],this['_skillWindow'][_0xe75fb(0x1a5)]=![],this['_itemWindow'][_0xe75fb(0x283)](_0x594749),this[_0xe75fb(0x1ed)][_0xe75fb(0x17c)](),this[_0xe75fb(0x1ed)][_0xe75fb(0x22b)](),this[_0xe75fb(0x1ed)]['activate'](),this[_0xe75fb(0x1ed)]['forceSelect'](0x0);},VisuMZ['ItemConcoctSkills'][_0x4ef935(0x222)]=Scene_Battle['prototype'][_0x4ef935(0x1dc)],Scene_Battle['prototype'][_0x4ef935(0x1dc)]=function(){const _0x3ba97e=_0x4ef935;this[_0x3ba97e(0x19f)]?_0x3ba97e(0x274)===_0x3ba97e(0x1d5)?this[_0x3ba97e(0x1ae)]():this['confirmItemConcoct']():VisuMZ['ItemConcoctSkills'][_0x3ba97e(0x222)][_0x3ba97e(0x2a9)](this);},Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x1ae)]=function(){const _0x23a2ef=_0x4ef935,_0x16079f=this[_0x23a2ef(0x1ed)][_0x23a2ef(0x1de)]();if(this['_itemWindow'][_0x23a2ef(0x236)])_0x23a2ef(0x22c)==='aXJrd'?(this[_0x23a2ef(0x1ed)]['setItemConcoctPair'](_0x16079f),this[_0x23a2ef(0x256)]()):(this['_itemConcoctSkill']=_0x1e3762,this[_0x23a2ef(0x236)]=null,this[_0x23a2ef(0x1e0)]=null);else{if(_0x23a2ef(0x284)===_0x23a2ef(0x23e)){this['_enemyWindow'][_0x23a2ef(0x262)](),this[_0x23a2ef(0x286)](),this[_0x23a2ef(0x1ed)][_0x23a2ef(0x255)](),this[_0x23a2ef(0x1ed)]['visible']=!![],this['_itemWindow'][_0x23a2ef(0x1a6)]=!![],this['_itemWindow'][_0x23a2ef(0x1f7)]();const _0x12f1e1=this['_itemWindow'][_0x23a2ef(0x23d)];this['_itemWindow'][_0x23a2ef(0x216)](_0x12f1e1['index']),this['_itemWindow'][_0x23a2ef(0x28c)]=_0x12f1e1['scrollY'],this[_0x23a2ef(0x1ed)][_0x23a2ef(0x240)]=_0x12f1e1[_0x23a2ef(0x29a)],this['_actorWindow']&&this[_0x23a2ef(0x1f3)][_0x23a2ef(0x262)]();}else this[_0x23a2ef(0x1ed)]['setItemConcoctBase'](_0x16079f),this[_0x23a2ef(0x1ed)]['refresh'](),this[_0x23a2ef(0x1ed)][_0x23a2ef(0x26c)](),this['_itemWindow']['forceSelect'](0x0);}},Scene_Battle['prototype']['determineItemConcoct']=function(){const _0x28cf10=_0x4ef935,_0x3a000b=this[_0x28cf10(0x1ed)][_0x28cf10(0x236)],_0xc9bfc0=this[_0x28cf10(0x1ed)]['_itemConcoctPair'],_0x1a89d6=DataManager[_0x28cf10(0x206)](_0x3a000b,_0xc9bfc0);this[_0x28cf10(0x1ed)][_0x28cf10(0x1f7)]();const _0x575937=BattleManager[_0x28cf10(0x27d)]();_0x575937[_0x28cf10(0x1cc)](_0x1a89d6);if(!_0x575937[_0x28cf10(0x21a)]())this[_0x28cf10(0x239)](),this[_0x28cf10(0x18d)]();else _0x575937[_0x28cf10(0x264)]()?_0x28cf10(0x181)!==_0x28cf10(0x181)?this[_0x28cf10(0x1a2)]={}:this['startEnemySelection']():this[_0x28cf10(0x23b)]();},Scene_Battle['prototype'][_0x4ef935(0x239)]=function(){const _0x22759a=_0x4ef935,_0xb75afe=this[_0x22759a(0x1ed)][_0x22759a(0x1c8)],_0x1e261d=this['_itemWindow']['_itemConcoctBase'],_0x487c39=this[_0x22759a(0x1ed)][_0x22759a(0x1e0)],_0x5b778f=BattleManager[_0x22759a(0x20f)]();_0x5b778f[_0x22759a(0x287)](_0xb75afe),_0x5b778f[_0x22759a(0x269)](_0x1e261d,_0x487c39);const _0x398508=BattleManager['inputtingAction']();_0x398508[_0x22759a(0x254)](!![]),this[_0x22759a(0x19f)]=![],this['_itemWindow'][_0x22759a(0x258)](),this['_itemWindow'][_0x22759a(0x17c)](),this[_0x22759a(0x1ed)][_0x22759a(0x262)](),this['_itemWindow'][_0x22759a(0x1cf)]();},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x1b9)]=Scene_Battle[_0x4ef935(0x246)]['onActorOk'],Scene_Battle['prototype'][_0x4ef935(0x1c2)]=function(){const _0xc655c2=_0x4ef935;this[_0xc655c2(0x19f)]&&(_0xc655c2(0x1fe)===_0xc655c2(0x1fe)?this[_0xc655c2(0x239)]():this['autoAdjustItemConcoctHelpWindowY'](_0x11fc4e)),VisuMZ[_0xc655c2(0x25a)][_0xc655c2(0x1b9)]['call'](this);},VisuMZ[_0x4ef935(0x25a)]['Scene_Battle_onActorCancel']=Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x2a2)],Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x2a2)]=function(){const _0x305135=_0x4ef935;if(this[_0x305135(0x19f)]){if('XEigl'===_0x305135(0x219)){this[_0x305135(0x1f3)]['hide'](),this[_0x305135(0x286)](),this['_itemWindow'][_0x305135(0x255)](),this['_itemWindow']['visible']=!![],this[_0x305135(0x1ed)][_0x305135(0x1a6)]=!![],this[_0x305135(0x1ed)]['updateHelp']();const _0xddc881=this[_0x305135(0x1ed)][_0x305135(0x23d)];this[_0x305135(0x1ed)][_0x305135(0x216)](_0xddc881[_0x305135(0x1cd)]),this['_itemWindow'][_0x305135(0x28c)]=_0xddc881[_0x305135(0x253)],this[_0x305135(0x1ed)][_0x305135(0x240)]=_0xddc881[_0x305135(0x29a)];}else _0x631f0f=_0x572a97[_0x305135(0x1f8)](_0x438672[_0x305135(0x1f1)]);}else VisuMZ[_0x305135(0x25a)]['Scene_Battle_onActorCancel'][_0x305135(0x2a9)](this);},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x20e)]=Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x292)],Scene_Battle[_0x4ef935(0x246)]['onEnemyOk']=function(){const _0x274085=_0x4ef935;this[_0x274085(0x19f)]&&this[_0x274085(0x239)](),VisuMZ[_0x274085(0x25a)][_0x274085(0x20e)][_0x274085(0x2a9)](this);},VisuMZ['ItemConcoctSkills'][_0x4ef935(0x1a9)]=Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x25c)],Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x25c)]=function(){const _0x42bddd=_0x4ef935;if(this[_0x42bddd(0x19f)]){this[_0x42bddd(0x277)]['hide'](),this['cancelItemConcoct'](),this['_itemWindow'][_0x42bddd(0x255)](),this[_0x42bddd(0x1ed)][_0x42bddd(0x1a5)]=!![],this[_0x42bddd(0x1ed)][_0x42bddd(0x1a6)]=!![],this[_0x42bddd(0x1ed)][_0x42bddd(0x1f7)]();const _0x51c369=this[_0x42bddd(0x1ed)][_0x42bddd(0x23d)];this[_0x42bddd(0x1ed)]['forceSelect'](_0x51c369[_0x42bddd(0x1cd)]),this[_0x42bddd(0x1ed)][_0x42bddd(0x28c)]=_0x51c369[_0x42bddd(0x253)],this[_0x42bddd(0x1ed)][_0x42bddd(0x240)]=_0x51c369[_0x42bddd(0x29a)],this['_actorWindow']&&('uwPHl'===_0x42bddd(0x275)?this[_0x42bddd(0x1f3)][_0x42bddd(0x262)]():this[_0x42bddd(0x295)][_0x42bddd(0x262)]());}else _0x42bddd(0x1e8)==='ndjdn'?VisuMZ[_0x42bddd(0x25a)][_0x42bddd(0x1a9)][_0x42bddd(0x2a9)](this):_0x298278[_0x42bddd(0x25a)]['Scene_Battle_actorCommandSingleSkill'][_0x42bddd(0x2a9)](this);},VisuMZ['ItemConcoctSkills']['Scene_Battle_onItemCancel']=Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x1ad)],Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x1ad)]=function(){const _0x5f19d5=_0x4ef935;this['_itemConcoctMode']?this[_0x5f19d5(0x286)]():_0x5f19d5(0x218)==='yBXUH'?VisuMZ[_0x5f19d5(0x25a)][_0x5f19d5(0x1c4)]['call'](this):_0x546a27[_0x5f19d5(0x295)][_0x5f19d5(0x233)]();},Scene_Battle['prototype'][_0x4ef935(0x286)]=function(){const _0x533446=_0x4ef935;this[_0x533446(0x1ed)][_0x533446(0x1e4)](),this[_0x533446(0x1ed)][_0x533446(0x1f7)](),this[_0x533446(0x1e3)][_0x533446(0x1a5)]=!![];if(this[_0x533446(0x1ed)][_0x533446(0x1c8)]){this['_itemWindow'][_0x533446(0x17c)](),this[_0x533446(0x1ed)]['activate']();const _0x5c9b21=this['_itemWindow'][_0x533446(0x1db)];this['_itemWindow'][_0x533446(0x216)](_0x5c9b21[_0x533446(0x1cd)]),this[_0x533446(0x1ed)]['_scrollY']=_0x5c9b21[_0x533446(0x253)],this[_0x533446(0x1ed)][_0x533446(0x240)]=_0x5c9b21[_0x533446(0x29a)];return;}else{if(this['_actorCommandWindow'][_0x533446(0x2ab)]()===_0x533446(0x194))this[_0x533446(0x1e1)][_0x533446(0x255)](),this[_0x533446(0x1e1)][_0x533446(0x1a5)]=!![],this['_skillWindow'][_0x533446(0x1a6)]=!![];else{if(this['_actorCommandWindow']['currentSymbol']()===_0x533446(0x26a)){if(_0x533446(0x26d)!=='RVWaS'){_0x5ef83d=_0xc420e9[_0x533446(0x247)][_0x533446(0x1e5)];if(this['_itemConcoctHelpWindow']){const _0x4f3e73=this['_itemConcoctBase'],_0x7f0b5e=this[_0x533446(0x1de)]();this[_0x533446(0x295)][_0x533446(0x24e)](_0x4f3e73,_0x7f0b5e),this[_0x533446(0x295)][_0x533446(0x22b)]();}}else this[_0x533446(0x1e3)][_0x533446(0x1a6)]=!![];}}}this['_itemConcoctMode']=![],this['_itemWindow']['clearItemConcoctSkill'](),this[_0x533446(0x1ed)]['refresh'](),this[_0x533446(0x1ed)]['hide'](),this['_itemWindow']['deactivate'](),this['_skillWindow'][_0x533446(0x1a5)]&&(this[_0x533446(0x271)][_0x533446(0x1a5)]=!![],this[_0x533446(0x1e1)]['updateHelp'](),Imported[_0x533446(0x242)]&&this[_0x533446(0x1e1)][_0x533446(0x25b)]());},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x180)]=Scene_Battle[_0x4ef935(0x246)][_0x4ef935(0x21f)],Scene_Battle[_0x4ef935(0x246)]['endCommandSelection']=function(){const _0x6ef456=_0x4ef935;VisuMZ[_0x6ef456(0x25a)]['Scene_Battle_endCommandSelection'][_0x6ef456(0x2a9)](this),this[_0x6ef456(0x19f)]=![],this[_0x6ef456(0x1ed)][_0x6ef456(0x258)]();},Window_BattleItem[_0x4ef935(0x246)][_0x4ef935(0x258)]=function(){const _0x5ead3f=_0x4ef935;this['_itemConcoctSkill']=null,this['_itemConcoctBase']=null,this[_0x5ead3f(0x1e0)]=null;},Window_BattleItem[_0x4ef935(0x246)][_0x4ef935(0x283)]=function(_0x37fb69){const _0x5af51c=_0x4ef935;this[_0x5af51c(0x1c8)]=_0x37fb69,this[_0x5af51c(0x236)]=null,this[_0x5af51c(0x1e0)]=null;},Window_BattleItem['prototype'][_0x4ef935(0x235)]=function(_0x11d5d4){const _0x566843=_0x4ef935;this[_0x566843(0x236)]=_0x11d5d4,this[_0x566843(0x1e0)]=null,this[_0x566843(0x1db)]={'index':this[_0x566843(0x1cd)](),'scrollY':this[_0x566843(0x28c)],'scrollBaseY':this[_0x566843(0x240)]};},Window_BattleItem[_0x4ef935(0x246)][_0x4ef935(0x281)]=function(_0x4571f9){const _0x154219=_0x4ef935;this[_0x154219(0x1e0)]=_0x4571f9,this[_0x154219(0x23d)]={'index':this['index'](),'scrollY':this[_0x154219(0x28c)],'scrollBaseY':this[_0x154219(0x240)]};},Window_BattleItem[_0x4ef935(0x246)][_0x4ef935(0x1e4)]=function(){const _0x17bfe8=_0x4ef935;if(this[_0x17bfe8(0x1e0)]){if(_0x17bfe8(0x28b)===_0x17bfe8(0x1c9)){const _0x23b9a7=this['itemConcoctHelpWindowRect']();_0x3da2fd[_0x17bfe8(0x226)][_0x17bfe8(0x22f)]&&this[_0x17bfe8(0x21e)](_0x23b9a7);const _0x189abb=new _0x4cdccb(_0x23b9a7);_0x189abb[_0x17bfe8(0x262)](),this[_0x17bfe8(0x202)](_0x189abb),this[_0x17bfe8(0x295)]=_0x189abb,this[_0x17bfe8(0x1ed)][_0x17bfe8(0x1b0)](_0x189abb),_0x189abb[_0x17bfe8(0x291)](_0x33912c[_0x17bfe8(0x226)][_0x17bfe8(0x1ba)]);}else this['_itemConcoctPair']=null;}else{if(this[_0x17bfe8(0x236)])this[_0x17bfe8(0x236)]=null;else this['_itemConcoctSkill']&&(this[_0x17bfe8(0x1c8)]=null);}},VisuMZ['ItemConcoctSkills'][_0x4ef935(0x1b6)]=Window_BattleItem[_0x4ef935(0x246)][_0x4ef935(0x2a7)],Window_BattleItem['prototype']['includes']=function(_0x487c8e){const _0x342a48=_0x4ef935;if(this[_0x342a48(0x236)])return DataManager['getConcoctPairs'](this['_itemConcoctBase'])[_0x342a48(0x2a7)](_0x487c8e);else return this[_0x342a48(0x1c8)]?DataManager[_0x342a48(0x1f0)](this[_0x342a48(0x1c8)])['includes'](_0x487c8e)&&DataManager[_0x342a48(0x1b2)](_0x487c8e)['length']>0x0:_0x342a48(0x1ee)===_0x342a48(0x1ee)?VisuMZ[_0x342a48(0x25a)][_0x342a48(0x1b6)]['call'](this,_0x487c8e):this['_cache_canConcoctItemTypes'][_0x442ec5['id']];},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x21d)]=Window_BattleItem[_0x4ef935(0x246)][_0x4ef935(0x28a)],Window_BattleItem[_0x4ef935(0x246)][_0x4ef935(0x28a)]=function(_0x3a3f52){const _0x4745cb=_0x4ef935;if(this[_0x4745cb(0x1c8)]&&!!_0x3a3f52)return $gameParty[_0x4745cb(0x217)](_0x3a3f52)>0x0;return VisuMZ['ItemConcoctSkills']['Window_BattleItem_isEnabled'][_0x4745cb(0x2a9)](this,_0x3a3f52);},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x204)]=Window_BattleItem[_0x4ef935(0x246)][_0x4ef935(0x220)],Window_BattleItem[_0x4ef935(0x246)][_0x4ef935(0x220)]=function(){const _0x12f7eb=_0x4ef935;if(this[_0x12f7eb(0x1c8)])return![];return VisuMZ[_0x12f7eb(0x25a)][_0x12f7eb(0x204)][_0x12f7eb(0x2a9)](this);},Window_BattleItem[_0x4ef935(0x246)][_0x4ef935(0x1b0)]=function(_0x5997f6){const _0x3a322f=_0x4ef935;this[_0x3a322f(0x295)]=_0x5997f6;},VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x251)]=Window_ItemList[_0x4ef935(0x246)][_0x4ef935(0x1f7)],Window_ItemList[_0x4ef935(0x246)][_0x4ef935(0x1f7)]=function(){const _0x5881c5=_0x4ef935;if(this[_0x5881c5(0x1c8)]&&this[_0x5881c5(0x271)]){let _0x345c58='';if(this[_0x5881c5(0x1e0)]){if(_0x5881c5(0x1f5)===_0x5881c5(0x17b))_0x51b932(_0x5881c5(0x19c)[_0x5881c5(0x183)](_0x33d0dd,_0x51c6a1)),_0x40ce62['exit']();else{const _0x1b2425=this[_0x5881c5(0x236)],_0x231aed=this[_0x5881c5(0x1e0)];if($gameSystem[_0x5881c5(0x1df)](_0x1b2425,_0x231aed)){const _0x12840b=DataManager[_0x5881c5(0x206)](_0x1b2425,_0x231aed),_0x1a300b=$dataItems[_0x12840b];_0x1a300b&&(_0x345c58=_0x1a300b[_0x5881c5(0x20a)]);}else _0x345c58=TextManager[_0x5881c5(0x247)][_0x5881c5(0x215)];this[_0x5881c5(0x295)]&&(_0x5881c5(0x276)!==_0x5881c5(0x276)?_0x1a827d['concoctConsumeItem'](_0x367ba1):this[_0x5881c5(0x295)]['hide']());}}else{if(this[_0x5881c5(0x236)]){_0x345c58=TextManager[_0x5881c5(0x247)][_0x5881c5(0x1e5)];if(this[_0x5881c5(0x295)]){const _0x43e687=this['_itemConcoctBase'],_0x14627e=this[_0x5881c5(0x1de)]();this[_0x5881c5(0x295)][_0x5881c5(0x24e)](_0x43e687,_0x14627e),this[_0x5881c5(0x295)][_0x5881c5(0x22b)]();}}else _0x345c58=TextManager['ITEM_CONCOCT'][_0x5881c5(0x209)],this[_0x5881c5(0x295)]&&this[_0x5881c5(0x295)][_0x5881c5(0x262)]();}this[_0x5881c5(0x271)][_0x5881c5(0x17d)](_0x345c58);}else _0x5881c5(0x288)===_0x5881c5(0x288)?(VisuMZ['ItemConcoctSkills'][_0x5881c5(0x251)][_0x5881c5(0x2a9)](this),this[_0x5881c5(0x295)]&&this[_0x5881c5(0x295)][_0x5881c5(0x262)]()):(this[_0x5881c5(0x271)][_0x5881c5(0x1a5)]=!![],this['_skillWindow'][_0x5881c5(0x1f7)](),_0xb1a03f[_0x5881c5(0x242)]&&this['_skillWindow'][_0x5881c5(0x25b)]());};function _0x1451(_0x25990d,_0x5bad03){const _0x574e94=_0x574e();return _0x1451=function(_0x14515e,_0x3bbf46){_0x14515e=_0x14515e-0x17a;let _0x24bc7c=_0x574e94[_0x14515e];return _0x24bc7c;},_0x1451(_0x25990d,_0x5bad03);}function Window_ItemConcoctHelp(){const _0x538bec=_0x4ef935;this[_0x538bec(0x245)](...arguments);}Window_ItemConcoctHelp[_0x4ef935(0x246)]=Object['create'](Window_Help[_0x4ef935(0x246)]),Window_ItemConcoctHelp[_0x4ef935(0x246)][_0x4ef935(0x1d7)]=Window_ItemConcoctHelp,Window_ItemConcoctHelp[_0x4ef935(0x226)]={'enable':VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x210)]['Window'][_0x4ef935(0x260)]??!![],'bgType':VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x210)][_0x4ef935(0x1b7)]['ConcoctHelp_BgType']??0x0,'scale':VisuMZ['ItemConcoctSkills'][_0x4ef935(0x210)][_0x4ef935(0x1b7)][_0x4ef935(0x290)]??0x1,'maskUnknownCombos':VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x210)][_0x4ef935(0x1b7)][_0x4ef935(0x2a6)]??!![],'battleTestShowUnknownCombos':VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x210)][_0x4ef935(0x1b7)]['ConcoctHelp_MaskBattleTest']??!![],'unknownIcon':VisuMZ[_0x4ef935(0x25a)][_0x4ef935(0x210)][_0x4ef935(0x1b7)][_0x4ef935(0x237)]??0x10,'unknownName':VisuMZ[_0x4ef935(0x25a)]['Settings'][_0x4ef935(0x1b7)][_0x4ef935(0x1dd)]??_0x4ef935(0x2ad),'autoAdjustY':VisuMZ['ItemConcoctSkills'][_0x4ef935(0x210)][_0x4ef935(0x1b7)]['ConcoctHelp_AutoAdjustY']??!![]},Window_ItemConcoctHelp[_0x4ef935(0x246)][_0x4ef935(0x245)]=function(_0x1768a8){const _0x33444e=_0x4ef935;Window_Help['prototype'][_0x33444e(0x245)][_0x33444e(0x2a9)](this,_0x1768a8),this[_0x33444e(0x20c)]['x']=this[_0x33444e(0x20c)]['y']=this[_0x33444e(0x27b)](),this[_0x33444e(0x233)]();},Window_ItemConcoctHelp[_0x4ef935(0x246)]['createSideviewUiDimmerSprite']=function(){},Window_ItemConcoctHelp['prototype'][_0x4ef935(0x27b)]=function(){const _0x1db989=_0x4ef935;return Window_ItemConcoctHelp[_0x1db989(0x226)][_0x1db989(0x20c)];},Window_ItemConcoctHelp[_0x4ef935(0x246)]['setItemCombo']=function(_0x18a18c,_0x1e304d){const _0x25d17a=_0x4ef935;if(this[_0x25d17a(0x19e)]===_0x18a18c&&this[_0x25d17a(0x249)]===_0x1e304d)return;this['_item1']=_0x18a18c,this[_0x25d17a(0x249)]=_0x1e304d;let _0x1f3d2c=null,_0x4db757='';if($gameSystem[_0x25d17a(0x1df)](_0x18a18c,_0x1e304d)){const _0x5a94ec=DataManager[_0x25d17a(0x206)](_0x18a18c,_0x1e304d);_0x1f3d2c=$dataItems[_0x5a94ec];if(_0x1f3d2c){if(_0x25d17a(0x193)!=='kXGiG'){if(this['_itemConcoctSkill']&&!!_0xcdc38b)return _0x5273b2[_0x25d17a(0x217)](_0x3b6028)>0x0;return _0x178abc[_0x25d17a(0x25a)][_0x25d17a(0x21d)][_0x25d17a(0x2a9)](this,_0x1c1f87);}else _0x4db757='\x5cI[%1]%2\x0a'[_0x25d17a(0x183)](_0x1f3d2c['iconIndex'],_0x1f3d2c[_0x25d17a(0x1d4)]),_0x4db757+=_0x1f3d2c[_0x25d17a(0x20a)];}}else{const _0x569293=Window_ItemConcoctHelp[_0x25d17a(0x226)];_0x4db757=_0x25d17a(0x1e9)[_0x25d17a(0x183)](_0x569293[_0x25d17a(0x28e)],_0x569293[_0x25d17a(0x199)]),_0x4db757+=TextManager[_0x25d17a(0x247)]['unknownComboHelp'];}this[_0x25d17a(0x17d)](_0x4db757);},Window_ItemConcoctHelp['prototype'][_0x4ef935(0x233)]=function(){const _0x3a47b1=_0x4ef935;this[_0x3a47b1(0x19e)]=null,this[_0x3a47b1(0x249)]=null;};