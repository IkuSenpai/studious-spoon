//=============================================================================
// VisuStella MZ - Item Amplify Skills
// VisuMZ_3_ItemAmplifySkills.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ItemAmplifySkills = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemAmplifySkills = VisuMZ.ItemAmplifySkills || {};
VisuMZ.ItemAmplifySkills.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.02] [ItemAmplifySkills]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Item_Amplify_Skills_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
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
 * Item Amplify Skills is a plugin that lets you create skills that allow your
 * actors to harness the incredible potential of item amplification. Unlock a
 * new level of strategic gameplay as your characters combine various items to
 * amplify the effects of their skills. By carefully selecting the right
 * combination of amplify-type items, you can enhance accuracy, critical hit
 * rates, variance, and more to take your game to new heights of excitement and
 * strategic gameplay!
 *
 * Features include all (but not limited to) the following:
 * 
 * * Create skills that allow actors to pick combinations of items that can
 *   amplify the skill being used.
 * * Amplification skills can use different types of items, distinguished by
 *   notetag identification.
 * * Amplify-type items have an amplify stat, which can be determined by
 *   a notetag or automatically via plugin parameters.
 * * Amplify skills will use the combined sum of these amplify stats to use
 *   with their damage formulas.
 * * Amplify items can have individual effects, such as altering accuracy,
 *   critical hit rates, variance, the ability to bypass guarding, applying
 *   states, buffs, or debuffs, as well as removing them from targets.
 * * Combined usage with the VisuMZ Elements and Status Menu Core can add in
 *   extra individual effects like added elements.
 * * Use JavaScript code to create custom effects for items when used to
 *   amplify skills.
 * * Amplify item combinations will be stored for each skill so that players
 *   can quickly access their last used combination.
 * * Amplify skills can require a minimum amount of items to be used at once.
 * * Amplify skills can also adjust the maximum amount of items that can be
 *   used simultaneously.
 * * Depending on the items used to amplify the skill, additional animations
 *   will be played upon damage impact with the target.
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
 * Enemies cannot use Item Amplify skills. Simply put, they don't have an item
 * inventory to pick and amplify items from. Use a regular skill instead to
 * give the illusion of an Item Amplify skill.
 *
 * ---
 *
 * Force Action
 * 
 * You cannot use "Forced Action" with a skill that can be amplified. This
 * includes commands that will chain into an Item Amplify skill. The reason
 * behind this is that there is no item input entry for the player to select
 * from for this action.
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
 * VisuMZ_1_ElementStatusCore
 *
 * If the Elements and Status Menu Core is used, you gain access to the
 * notetags that alter the element used based on the amplifying item. There are
 * two notetags accessible through this: <Amplify Add Element: x, x, x> which
 * will add additional elements.
 *
 * ---
 *
 * ============================================================================
 * Instructions - Item Amplify Damage Formula
 * ============================================================================
 *
 * Here's how you can have the amplifying item's "amplify power" incorporated
 * into the damage formula.
 *
 * ---
 * 
 * Step 1: Item Amplify Skill
 * 
 * 1. Create the Item Amplify skill with a <Amplify With: x> notetag.
 * 2. For more information on the notetag, refer to the notetag section.
 * 
 * ---
 * 
 * Step 2: Change the Damage Formula
 * 
 * 1. Change the damage formula to have the word "amplify" in it somewhere
 *    (without the quotes).
 * 2. This will reference the "amplify power" of the selected amplify items.
 * 
 * Example:
 * 
 *   a.atk + (amplify * 10) - b.def
 * 
 * ---
 * 
 * Step 3: Add Amplify Type to Items
 * 
 * 1. Select the Items you want to be selectable for amplification by that
 *    Item Amplify skill you've made.
 * 2. Insert the <Amplify Type: x> notetag and have 'x' match the
 *    <Amplify With: x> notetag's 'x' value.
 * 
 * Example:
 * 
 * If you are using <Amplify With: Orb> in your Item Amplify skill, then only
 * items with the notetag <Amplify Type: Orb> can be used and consumed by that
 * skill.
 * 
 * ---
 * 
 * Step 4: Add Amplify Power to Items
 * 
 * 1. Items will have a default amplify power determined by the settings found
 *    in the Plugin Parameters.
 * 2. The default amplify power can be overwritten with the <Amplify Power: x>
 *    notetag where 'x' is the amplify power value.
 * 3. The value inserted in the damage formula for "amplify" will be the total
 *    sum of all the amplify items' amplify power being used.
 * 4. For more information on the notetag, refer to the notetag section.
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
 * === Amplify-Related Notetags ===
 * 
 * ---
 *
 * <Amplify With: x>
 * <Amplify With: x, x, x>
 *
 * - Used for: Skill Notetags
 * - This notetag causes the skill to be able to amplify itself with items of
 *   'x' type.
 * - Replace 'x' with text marking the type or category.
 *   - Insert more 'x' entries to add more types.
 *   - Use 'any' or 'all' in place of 'x' to amplify using any kind of item.
 * - Types are determined by the <Amplify Type: x> or <Category: x> notetags.
 * - This cannot be used with skills that are made to be used as Active Chain
 *   Skills, Input Combo Skills, or Evolution Matrix Skills.
 * - Likewise, this cannot be used with Item Concoction and Throw effects.
 * - Amplify skills will consume the selected items as well as pay the amplify
 *   skill's cost to initiate this effect.
 *   - Key Items, nonconsumable items, and any items with a successful proc of
 *     the <Amplify Conserve: x%> notetag will not be consumed.
 *
 * ---
 * 
 * <Max Amplify Times: x>
 * <Min Amplify Times: x>
 *
 * - Used for: Skill Notetags
 * - Sets up the maximum and minimum number of items to be used for amplifying
 *   the skill on usage.
 *   - The skill cannot be used if there are less than the minimum number of
 *     items selected.
 *   - The skill cannot select more than the maximum number of items allowed.
 * - Replace 'x' with a number representing the maximum or minimum value of
 *   items that this skill can use for amplifying.
 * - If the notetag(s) are not present, then use the default values found in
 *   the Plugin Parameters.
 * 
 * ---
 * 
 * <Amplify Type: x>
 * <Amplify Types: x, x, x>
 *
 * - Used for: Item Notetags
 * - These are the types that are used to determine what the Item Amplify
 *   skills can use for amplification.
 * - Replace 'x' with text marking the type.
 *   - Insert more 'x' entries to add more types.
 * - <Category: x> will also count as an amplify type. However, this notetag
 *   will separate the amplify types from anything else that uses the
 *   <Category: x> notetag.
 * - All items will have "Any" and "All" types.
 * 
 * ---
 * 
 * <Amplify Power: x>
 *
 * - Used for: Item Notetags
 * - Adjusts the amplify power of the item to 'x'.
 * - Replace 'x' with a numeric value to determine its impact on the Item
 *   Amplify skill's damage formula.
 *   - The 'x' value will replace the 'power' entry in the Item Amplify skill's
 *     damage formula.
 *   - You can also use JavaScript in place of 'x' like the following:
 *     <Amplify Power: $gameVariables.value(5)>
 *   - The value used in the damage formula will be the combined totals of all
 *     the items selected for item amplification.
 * - If this notetag is not used, then the amplify power will default to the
 *   value found in the Plugin Parameters.
 * 
 * ---
 * 
 * <Amplify Impact Animation: x>
 * 
 * - Used for: Item Notetags
 * - Changes the impact animation of this item when amplified to 'x'.
 * - Replace 'x' with a number representing the ID of the animation you wish to
 *   play as the impact animation.
 * 
 * ---
 * 
 * <Amplify Conserve: x%>
 * 
 * - Used for: Item Notetags
 * - When this item is selected and used for amplification, there is a 'x'
 *   percent chance of it not being consumed.
 * - Replace 'x' with a number representing the percent chance for this item to
 *   not be consumed.
 *   - 100% will mean it will never be consumed.
 * - If this notetag is not used, then the item will always be consumed unless
 *   it is a non-consumable item set by the database.
 * 
 * ---
 * 
 * === Amplify Properties-Related Notetags ===
 * 
 * ---
 * 
 * <Amplify Hit Rate: +x%>
 * <Amplify Hit Rate: -x%>
 *
 * - Used for: Item Notetags
 * - When this item is selected and used for amplification, change the hit
 *   rate of the action by '+x' or '-x' percent.
 *   - The hit rate changes are cummulative in respect to the skill and all of
 *     the other selected items used for amplifying the skill.
 * - Replace 'x' with a number representing the percent chance to hit the
 *   skill target.
 * 
 * ---
 * 
 * <Amplify Critical: +x%>
 * <Amplify Critical: -x%>
 *
 * - Used for: Item Notetags
 * - When this item is selected and used for amplification, change the critical
 *   hit rate of the action by '+x' or '-x' percent.
 *   - The critical hit rate changes are cummulative in respect to the skill
 *     and all of the other selected items used for amplifying the skill.
 * - Replace 'x' with a number representing the percent chance to land a
 *   critical hit on the skill target.
 * 
 * ---
 * 
 * <Amplify Variance: +x%>
 * <Amplify Variance: -x%>
 *
 * - Used for: Item Notetags
 * - When this item is selected and used for amplification, change the damage
 *   variance of the action by '+x' or '-x' percent.
 *   - The damage variance changes are cummulative in respect to the skill
 *     and all of the other selected items used for amplifying the skill.
 * - Replace 'x' with a number representing the damage variance changes.
 * 
 * ---
 * 
 * <Amplify Ignore Guard>
 *
 * - Used for: Item Notetags
 * - When this item is selected and used for amplifying a skill, ignore any
 *   damage modifiers if the target is guarding.
 *   - Only one of the items used to amplify the skill need to have this effect
 *     to get the guarding bypass.
 * - If this notetag is not used, the usual damage modifiers applied if the
 *   target is guarding will be normally applied.
 * 
 * ---
 * 
 * === Amplify Effects-Related Notetags ===
 * 
 * ---
 *
 * <Amplify Add Element: id>
 * <Amplify Add Elements: id, id, id>
 * <Amplify Add Element: name>
 * <Amplify Add Elements: name, name, name>
 *
 * - Used for: Item Notetags
 * - Requires VisuMZ_1_ElementStatusCore!
 * - Adds the specified element(s) to the Item Amplify skill.
 * - For 'id' variant, replace 'id' with a number representing the ID of the
 *   element you wish to add with the selected item.
 *   - Insert multiple 'id' entries to add more elements.
 * - For 'name' variant, replace 'name' with the name of the element you wish
 *   to add with the selected item.
 *   - Insert multiple 'name' entries to add more elements.
 * 
 * ---
 *
 * <Amplify Add State: id>
 * <Amplify Add States: id, id, id>
 * <Amplify Add State: name>
 * <Amplify Add States: name, name, name>
 *
 * - Used for: Item Notetags
 * - When this item is used to amplify a skill, apply the state(s) listed in
 *   the notetag to the target.
 * - For 'id' variant, replace 'id' with a number representing the ID of the
 *   state you wish to apply to the target.
 *   - Insert multiple 'id' entries to add more states.
 * - For 'name' variant, replace 'name' with the name of the state you wish to
 *   apply to the target
 *   - Insert multiple 'name' entries to add more states.
 *
 * ---
 *
 * <Amplify Remove State: id>
 * <Amplify Remove States: id, id, id>
 * <Amplify Remove State: name>
 * <Amplify Remove States: name, name, name>
 *
 * - Used for: Item Notetags
 * - When this item is used to amplify a skill, remove the state(s) listed in
 *   the notetag from the target.
 * - For 'id' variant, replace 'id' with a number representing the ID of the
 *   state you wish to remove from the target.
 *   - Insert multiple 'id' entries to remove more states.
 * - For 'name' variant, replace 'name' with the name of the state you wish to
 *   remove from the target
 *   - Insert multiple 'name' entries to remove more states.
 *
 * ---
 * 
 * <Amplify Add Buff: param For x Turns>
 * <Amplify Add Buff: param, param, param For x Turns>
 * <Amplify Add Debuff: param For x Turns>
 * <Amplify Add Debuff: param, param, param For x Turns>
 * 
 * - Used for: Item Notetags
 * - When this item is used to amplify a skill, apply a buff or debuff to the
 *   target for the specified base parameter(s).
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine the type of buff or debuff to add.
 *   - Insert multiple 'param' entries to add more buffs or debuffs.
 *   - If you want to add multiple stacks of a parameter, insert that parameter
 *     multiple times.
 *     - Example: <Amplify Add Debuff: DEF, DEF For 5 Turns>
 * - Replace 'x' with a number representing the number of turns to set the buff
 *   or debuff to.
 * - Insert multiple copies of this notetag if you want to add a variety of
 *   buffs and/or debuffs at different turn intervals.
 * 
 * ---
 * 
 * <Amplify Remove Buff: param>
 * <Amplify Remove Buff: param, param, param>
 * <Amplify Remove Debuff: param>
 * <Amplify Remove Debuff: param, param, param>
 * 
 * - Used for: Item Notetags
 * - When this item is used to amplify a skill, remove a buff or debuff to the
 *   target for the specified base parameter(s).
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine the type of buff or debuff to remove.
 *   - Insert multiple 'param' entries to remove more states.
 * 
 * ---
 * 
 * === JavaScript Notetag: Effect-Related ===
 * 
 * ---
 * 
 * <JS Amplify Effect>
 *  code
 *  code
 * </JS Amplify Effect>
 * 
 * - Used for: Item Notetags
 * - When this item is used to amplify a skill, run the 'code' found inside of
 *   the notetags.
 * - The 'user' variable represents the battler performing the action.
 * - The 'target' variable represents the target the action is performed at.
 * - The 'item' variable represents the item used to amplify the skill.
 * - The 'skill' variable represents the throw skill being amplified.
 * - This effect will occur each time it hits a target.
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
 * $amplifyItems
 * 
 * - This is a variable that gets updated upon the usage of any new action be
 *   it from an actor or enemy. It will return the items being used for the
 *   currently amplified skill if any.
 * - The items are in their rawest form, which are their $dataItems[x] entries.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings for this plugin.
 *
 * ---
 *
 * Mechanics
 * 
 *   Default Amplify Power:
 *   - What is the default amplify power of an item?
 * 
 *   Default Maximum Times:
 *   - What is the default maximum number of times to amplify a skill?
 * 
 *   Default Minimum Times:
 *   - What is the default minimum number of times to amplify a skill?
 *
 * ---
 *
 * Animation
 * 
 *   Auto Animation:
 *   - Automatically play impact animations if there is no
 *     <Amplify Impact Animation: x> notetag to be found.
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
 * Skill Window
 * 
 *   Confirm Text:
 *   - What is the name of the command to confirm the currently selected
 *     amplify items?
 * 
 *   Confirm Icon:
 *   - What is the icon used for the "Confirm" command?
 *
 * ---
 *
 * Help Window
 * 
 *   Confirm Help:
 *   - Help description used when selecting the confirm command.
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
 * Item Window
 * 
 *   Amplify BG Color 1:
 *   Amplify BG Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
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
 * Version 1.02: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a crash that would occur upon using this plugin with Sideview
 *    Battle UI! Fix made by Irina.
 * ** Fixed a crash that would occur upon item throw conflict.
 *    Fix made by Irina.
 * 
 * Version 1.01: February 15, 2024
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.00 Official Release Date: October 27, 2023
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
 * @param ItemAmplifySkills
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc These are the general settings for this plugin.
 * @default {"Mechanics":"","AmplifyPower:num":"20","MaxAmplify:num":"3","MinAmplify:num":"0","Animation":"","AutoAnimation:eval":"true"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"Window_BattleSkill":"","Confirm:str":"Confirm","ConfirmIcon:num":"79","Window_Help":"","ConfirmHelp:json":"\"Perform the skill with the selected item(s).\""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"Window_BattleItem":"","BgColor1:str":"5","BgColor2:str":"13"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param Mechanics
 *
 * @param AmplifyPower:num
 * @text Default Amplify Power
 * @parent Mechanics
 * @type number
 * @desc What is the default amplify power of an item?
 * @default 20
 *
 * @param MaxAmplify:num
 * @text Default Maximum Times
 * @parent Mechanics
 * @type number
 * @min 1
 * @desc What is the default maximum number of times to amplify a skill?
 * @default 3
 *
 * @param MinAmplify:num
 * @text Default Minimum Times
 * @parent Mechanics
 * @type number
 * @desc What is the default minimum number of times to amplify a skill?
 * @default 0
 *
 * @param Animation
 *
 * @param AutoAnimation:eval
 * @text Auto Animation
 * @parent Animation
 * @type boolean
 * @on Auto
 * @off Nothing
 * @desc Automatically play impact animations if there is no
 * <Amplify Impact Animation: x> notetag to be found.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param Window_BattleSkill
 * @text Skill Window
 *
 * @param Confirm:str
 * @text Confirm Text
 * @parent Window_BattleSkill
 * @desc What is the name of the command to confirm the currently
 * selected amplify items?
 * @default Confirm
 *
 * @param ConfirmIcon:num
 * @text Confirm Icon
 * @parent Window_BattleSkill
 * @desc What is the icon used for the "Confirm" command?
 * @default 79
 *
 * @param Window_Help
 * @text Help Window
 *
 * @param ConfirmHelp:json
 * @text Confirm Help
 * @parent Window_Help
 * @type note
 * @desc Help description used when selecting the confirm command.
 * @default "Perform the skill with the selected item(s)."
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Window_BattleItem
 * @text Item Window
 *
 * @param BgColor1:str
 * @text Amplify BG Color 1
 * @parent Window_BattleItem
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 5
 *
 * @param BgColor2:str
 * @text Amplify BG Color 2
 * @parent Window_BattleItem
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 13
 *
 */
//=============================================================================

const _0x2069a8=_0x1274;(function(_0x4a5b24,_0x2d93c9){const _0x47f45f=_0x1274,_0x41897c=_0x4a5b24();while(!![]){try{const _0x4f6c8a=parseInt(_0x47f45f(0x267))/0x1+-parseInt(_0x47f45f(0x1f5))/0x2*(-parseInt(_0x47f45f(0x33f))/0x3)+parseInt(_0x47f45f(0x252))/0x4*(parseInt(_0x47f45f(0x346))/0x5)+parseInt(_0x47f45f(0x1fe))/0x6+parseInt(_0x47f45f(0x302))/0x7+parseInt(_0x47f45f(0x21c))/0x8*(-parseInt(_0x47f45f(0x24e))/0x9)+-parseInt(_0x47f45f(0x255))/0xa*(parseInt(_0x47f45f(0x350))/0xb);if(_0x4f6c8a===_0x2d93c9)break;else _0x41897c['push'](_0x41897c['shift']());}catch(_0x5db792){_0x41897c['push'](_0x41897c['shift']());}}}(_0x1af2,0xc70f7));var label=_0x2069a8(0x2b4),tier=tier||0x0,dependencies=['VisuMZ_0_CoreEngine',_0x2069a8(0x2c0),'VisuMZ_1_ItemsEquipsCore'],pluginData=$plugins[_0x2069a8(0x2ee)](function(_0x43f21a){const _0xc9f277=_0x2069a8;return _0x43f21a[_0xc9f277(0x205)]&&_0x43f21a[_0xc9f277(0x328)][_0xc9f277(0x243)]('['+label+']');})[0x0];function _0x1274(_0x199c18,_0x1e9c4c){const _0x1af231=_0x1af2();return _0x1274=function(_0x1274a8,_0x1fa6e8){_0x1274a8=_0x1274a8-0x1f3;let _0x5501ab=_0x1af231[_0x1274a8];return _0x5501ab;},_0x1274(_0x199c18,_0x1e9c4c);}VisuMZ[label][_0x2069a8(0x238)]=VisuMZ[label][_0x2069a8(0x238)]||{},VisuMZ[_0x2069a8(0x349)]=function(_0x33f049,_0x38eb66){const _0x242e26=_0x2069a8;for(const _0x4d48e2 in _0x38eb66){if(_0x242e26(0x28c)!==_0x242e26(0x28c))_0x2a066a=_0x3aaa6f(_0x32442f)['clamp'](0x0,0x7);else{if(_0x4d48e2[_0x242e26(0x204)](/(.*):(.*)/i)){const _0x4106e8=String(RegExp['$1']),_0x17eaaa=String(RegExp['$2'])[_0x242e26(0x312)]()['trim']();let _0x5abb0e,_0x2a95dd,_0x4b182e;switch(_0x17eaaa){case'NUM':_0x5abb0e=_0x38eb66[_0x4d48e2]!==''?Number(_0x38eb66[_0x4d48e2]):0x0;break;case _0x242e26(0x29a):_0x2a95dd=_0x38eb66[_0x4d48e2]!==''?JSON[_0x242e26(0x301)](_0x38eb66[_0x4d48e2]):[],_0x5abb0e=_0x2a95dd['map'](_0x376ca8=>Number(_0x376ca8));break;case _0x242e26(0x316):_0x5abb0e=_0x38eb66[_0x4d48e2]!==''?eval(_0x38eb66[_0x4d48e2]):null;break;case _0x242e26(0x285):_0x2a95dd=_0x38eb66[_0x4d48e2]!==''?JSON[_0x242e26(0x301)](_0x38eb66[_0x4d48e2]):[],_0x5abb0e=_0x2a95dd[_0x242e26(0x27c)](_0x4f410d=>eval(_0x4f410d));break;case _0x242e26(0x337):_0x5abb0e=_0x38eb66[_0x4d48e2]!==''?JSON[_0x242e26(0x301)](_0x38eb66[_0x4d48e2]):'';break;case'ARRAYJSON':_0x2a95dd=_0x38eb66[_0x4d48e2]!==''?JSON[_0x242e26(0x301)](_0x38eb66[_0x4d48e2]):[],_0x5abb0e=_0x2a95dd[_0x242e26(0x27c)](_0x507cdc=>JSON[_0x242e26(0x301)](_0x507cdc));break;case _0x242e26(0x2c1):_0x5abb0e=_0x38eb66[_0x4d48e2]!==''?new Function(JSON['parse'](_0x38eb66[_0x4d48e2])):new Function(_0x242e26(0x2a4));break;case _0x242e26(0x22e):_0x2a95dd=_0x38eb66[_0x4d48e2]!==''?JSON[_0x242e26(0x301)](_0x38eb66[_0x4d48e2]):[],_0x5abb0e=_0x2a95dd[_0x242e26(0x27c)](_0x513c1d=>new Function(JSON['parse'](_0x513c1d)));break;case _0x242e26(0x214):_0x5abb0e=_0x38eb66[_0x4d48e2]!==''?String(_0x38eb66[_0x4d48e2]):'';break;case _0x242e26(0x300):_0x2a95dd=_0x38eb66[_0x4d48e2]!==''?JSON[_0x242e26(0x301)](_0x38eb66[_0x4d48e2]):[],_0x5abb0e=_0x2a95dd[_0x242e26(0x27c)](_0x2f7ee5=>String(_0x2f7ee5));break;case _0x242e26(0x32e):_0x4b182e=_0x38eb66[_0x4d48e2]!==''?JSON[_0x242e26(0x301)](_0x38eb66[_0x4d48e2]):{},_0x5abb0e=VisuMZ[_0x242e26(0x349)]({},_0x4b182e);break;case _0x242e26(0x30f):_0x2a95dd=_0x38eb66[_0x4d48e2]!==''?JSON['parse'](_0x38eb66[_0x4d48e2]):[],_0x5abb0e=_0x2a95dd[_0x242e26(0x27c)](_0x60801a=>VisuMZ[_0x242e26(0x349)]({},JSON[_0x242e26(0x301)](_0x60801a)));break;default:continue;}_0x33f049[_0x4106e8]=_0x5abb0e;}}}return _0x33f049;},(_0x3276c0=>{const _0x29d317=_0x2069a8,_0x33cbec=_0x3276c0[_0x29d317(0x2f5)];for(const _0x6537c6 of dependencies){if(_0x29d317(0x2d1)===_0x29d317(0x2d1)){if(!Imported[_0x6537c6]){alert(_0x29d317(0x2c8)['format'](_0x33cbec,_0x6537c6)),SceneManager[_0x29d317(0x21d)]();break;}}else _0x101d85[_0x29d317(0x2b4)][_0x29d317(0x308)][_0x29d317(0x2e6)](this);}const _0x514515=_0x3276c0[_0x29d317(0x328)];if(_0x514515[_0x29d317(0x204)](/\[Version[ ](.*?)\]/i)){const _0x831185=Number(RegExp['$1']);if(_0x831185!==VisuMZ[label]['version']){if(_0x29d317(0x303)!==_0x29d317(0x303)){const _0x13ee2c=/^\d+$/['test'](_0x519802);let _0x4505eb=-0x1;_0x13ee2c?_0x4505eb=_0x35810e(_0x216d36)[_0x29d317(0x27b)](0x0,0x7):_0x4505eb=_0x2259ce[_0x29d317(0x353)](_0x5c970f),_0x4505eb>=0x0&&_0x1e8d9e[_0x29d317(0x207)](_0x4505eb,_0x180ac7);}else alert(_0x29d317(0x356)[_0x29d317(0x2ad)](_0x33cbec,_0x831185)),SceneManager[_0x29d317(0x21d)]();}}if(_0x514515[_0x29d317(0x204)](/\[Tier[ ](\d+)\]/i)){const _0x875ec4=Number(RegExp['$1']);if(_0x875ec4<tier)_0x29d317(0x2f3)!=='OXpki'?(alert(_0x29d317(0x22c)[_0x29d317(0x2ad)](_0x33cbec,_0x875ec4,tier)),SceneManager[_0x29d317(0x21d)]()):(_0x45b3d9[_0x29d317(0x2b4)]['UpdateGlobalAmplifyItemsVariable'](this),_0x31d472[_0x29d317(0x2b4)][_0x29d317(0x30a)][_0x29d317(0x2e6)](this));else{if(_0x29d317(0x229)===_0x29d317(0x229))tier=Math[_0x29d317(0x1fc)](_0x875ec4,tier);else return _0x566f53[_0x29d317(0x352)]<_0x3a0550[_0x29d317(0x1fc)](_0x2d6f5c,_0x240c6c);}}VisuMZ[_0x29d317(0x349)](VisuMZ[label]['Settings'],_0x3276c0[_0x29d317(0x1fd)]);})(pluginData);if(VisuMZ[_0x2069a8(0x339)][_0x2069a8(0x1f6)]<1.75){let text='';text+=_0x2069a8(0x2b2),text+='in\x20order\x20for\x20VisuMZ_3_ItemAmplifySkills\x20to\x20work.',alert(text),SceneManager[_0x2069a8(0x21d)]();}if(VisuMZ[_0x2069a8(0x20c)][_0x2069a8(0x1f6)]<1.46){let text='';text+='VisuMZ_1_ItemsEquipsCore\x20needs\x20to\x20be\x20updated\x20',text+=_0x2069a8(0x33b),alert(text),SceneManager[_0x2069a8(0x21d)]();}VisuMZ['ItemAmplifySkills'][_0x2069a8(0x2fe)]={'AmplifyWith':/<AMPLIF(?:Y|IED) (?:WITH|BY):[ ](.*)>/i,'MaxAmplify':/<MAX AMPLIFY(?:| TIME| TIMES):[ ](\d+)>/i,'MinAmplify':/<MIN AMPLIFY(?:| TIME| TIMES):[ ](\d+)>/i,'AmplifyType':/<AMP(?:|LIFY) TYPE(?:|S):[ ](.*)>/i,'AmplifyPower':/<AMP(?:|LIFY) POWER:[ ](.*)>/i,'ImpactAnimation':/<AMP(?:|LIFY) IMPACT ANIMATION:[ ](\d+)>/i,'AmplifyConserve':/<AMP(?:|LIFY) (?:CONSERVE|PRESERVE):[ ](\d+)([%％])>/i,'AmplifyHitRate':/<AMP(?:|LIFY) (?:HIT|HIT RATE|ACC|ACCURACY):[ ]([\+\-]\d+)([%％])>/i,'AmplifyCritRate':/<AMP(?:|LIFY) CRIT(?:|ICAL):[ ]([\+\-]\d+)([%％])>/i,'AmplifyVariance':/<AMP(?:|LIFY) VARIANCE:[ ]([\+\-]\d+)([%％])>/i,'AmplifyIgnoreGuard':/<AMP(?:|LIFY) (?:IGNORE|BYPASS) GUARD>/i,'AmplifyElementAdd':/<AMP(?:|LIFY) ADD ELEMENT(?:|S):[ ](.*)>/i,'AmplifyStateAdd':/<AMP(?:|LIFY) ADD STATE(?:|S):[ ](.*)>/gi,'AmplifyStateRemove':/<AMP(?:|LIFY) REMOVE STATE(?:|S):[ ](.*)>/gi,'AmplifyBuffsAdd':/<AMP(?:|LIFY) ADD BUFF(?:|S):[ ](.*) FOR (\d+)[ ]TURN(?:|S)>/gi,'AmplifyBuffsRemove':/<AMP(?:|LIFY) REMOVE BUFF(?:|S):[ ](.*)>/gi,'AmplifyDebuffsAdd':/<AMP(?:|LIFY) ADD DEBUFF(?:|S):[ ](.*) FOR (\d+)[ ]TURN(?:|S)>/gi,'AmplifyDebuffsRemove':/<AMP(?:|LIFY) REMOVE DEBUFF(?:|S):[ ](.*)>/gi,'AmplifyJsEffect':/<JS AMP(?:|LIFY) EFFECT(?:|S)>\s*([\s\S]*)\s*<\/JS AMP(?:|LIFY) EFFECT(?:|S)>/i},DataManager[_0x2069a8(0x353)]=function(_0x43401a){const _0x30e089=_0x2069a8;_0x43401a=_0x43401a['toUpperCase']()['trim']();switch(_0x43401a){case _0x30e089(0x2b9):case'MAX\x20HP':case'HP':return 0x0;case _0x30e089(0x250):case _0x30e089(0x21f):case'MP':return 0x1;case _0x30e089(0x24b):return 0x2;case _0x30e089(0x2fb):return 0x3;case'MAT':return 0x4;case _0x30e089(0x233):return 0x5;case _0x30e089(0x298):return 0x6;case'LUK':return 0x7;}return-0x1;},DataManager[_0x2069a8(0x2ce)]=function(_0x5ae0e7){const _0x5b12bf=_0x2069a8;_0x5ae0e7=_0x5ae0e7[_0x5b12bf(0x312)]()[_0x5b12bf(0x2bd)](),this[_0x5b12bf(0x2a7)]=this[_0x5b12bf(0x2a7)]||{};if(this[_0x5b12bf(0x2a7)][_0x5ae0e7])return this[_0x5b12bf(0x2a7)][_0x5ae0e7];for(const _0xb39461 of $dataStates){if(!_0xb39461)continue;this['_stateIDs'][_0xb39461[_0x5b12bf(0x2f5)][_0x5b12bf(0x312)]()[_0x5b12bf(0x2bd)]()]=_0xb39461['id'];}return this[_0x5b12bf(0x2a7)][_0x5ae0e7]||0x0;},DataManager[_0x2069a8(0x25a)]=function(_0x1bed0b){const _0x4084e5=_0x2069a8;if(!_0x1bed0b)return!![];if(!DataManager[_0x4084e5(0x227)](_0x1bed0b))return!![];if(this[_0x4084e5(0x288)])return![];this['_hasItemAmplifyConflicts']=this['_hasItemAmplifyConflicts']||{};if(this[_0x4084e5(0x20b)][_0x1bed0b['id']])return this[_0x4084e5(0x20b)][_0x1bed0b['id']];const _0x523a0f=_0x1bed0b[_0x4084e5(0x33c)]||'',_0x444a63=['ActiveChainSkills','EvoMatrixSkills',_0x4084e5(0x23a)];this[_0x4084e5(0x20b)][_0x1bed0b['id']]=![];for(const _0x4271da of _0x444a63){if(_0x4084e5(0x305)===_0x4084e5(0x305)){if(!VisuMZ[_0x4271da])continue;const _0x1d3cdf=VisuMZ[_0x4271da]['RegExp'];for(const _0x58f1b0 in _0x1d3cdf){if(_0x523a0f[_0x4084e5(0x204)](_0x1d3cdf[_0x58f1b0])){if(_0x4084e5(0x32d)!==_0x4084e5(0x32d))this[_0x4084e5(0x2a8)](),this[_0x4084e5(0x314)]();else{this['_hasItemAmplifyConflicts'][_0x1bed0b['id']]=!![];break;}}}if(this['_hasItemAmplifyConflicts'][_0x1bed0b['id']])break;}else _0x337ec5=_0x573632[_0x4084e5(0x1fc)](_0x173a75(_0x236f33['$1']),0x0);}return this[_0x4084e5(0x288)]=!![],Imported[_0x4084e5(0x234)]&&this['canThrowItems'](_0x1bed0b)&&(this[_0x4084e5(0x20b)][_0x1bed0b['id']]=!![]),Imported[_0x4084e5(0x280)]&&this[_0x4084e5(0x311)](_0x1bed0b)&&(this['_hasItemAmplifyConflicts'][_0x1bed0b['id']]=!![]),delete this[_0x4084e5(0x288)],this['_hasItemAmplifyConflicts'][_0x1bed0b['id']];},DataManager[_0x2069a8(0x2cf)]=function(_0x580523){const _0x4f3ec6=_0x2069a8;return this[_0x4f3ec6(0x2c3)](_0x580523)['length']>0x0;},DataManager[_0x2069a8(0x2c3)]=function(_0x39814c){const _0x3dea66=_0x2069a8;if(!_0x39814c)return[];if(!DataManager[_0x3dea66(0x227)](_0x39814c))return[];if(DataManager[_0x3dea66(0x25a)](_0x39814c))return[];this[_0x3dea66(0x2dc)]=this['_cache_canAmplifyWithItemTypes']||{};if(this['_cache_canAmplifyWithItemTypes'][_0x39814c['id']]!==undefined)return this[_0x3dea66(0x2dc)][_0x39814c['id']];let _0x410ee3=[];const _0x25facd=VisuMZ[_0x3dea66(0x2b4)]['RegExp'],_0x1ff012=_0x39814c[_0x3dea66(0x33c)]||'';return _0x1ff012[_0x3dea66(0x204)](_0x25facd['AmplifyWith'])&&(_0x410ee3=String(RegExp['$1'])[_0x3dea66(0x2d9)](',')[_0x3dea66(0x27c)](_0x42585e=>_0x42585e[_0x3dea66(0x312)]()['trim']())),this[_0x3dea66(0x2dc)][_0x39814c['id']]=_0x410ee3,this['_cache_canAmplifyWithItemTypes'][_0x39814c['id']];},DataManager['canBeAmplifiedWith']=function(_0x2d3930,_0x195fbd){const _0x278982=_0x2069a8;return this[_0x278982(0x274)](_0x2d3930)[_0x278982(0x225)](_0x3b422a=>this[_0x278982(0x2c3)](_0x195fbd)['includes'](_0x3b422a));},DataManager[_0x2069a8(0x274)]=function(_0x1e0eab){const _0x411060=_0x2069a8;if(!_0x1e0eab)return[];if(!DataManager[_0x411060(0x306)](_0x1e0eab))return[];this[_0x411060(0x2cd)]=this[_0x411060(0x2cd)]||{};if(this[_0x411060(0x2cd)][_0x1e0eab['id']]!==undefined)return this[_0x411060(0x2cd)][_0x1e0eab['id']];let _0x17d62a=[];const _0x537d5d=VisuMZ['ItemAmplifySkills']['RegExp'],_0xc47cc7=_0x1e0eab['note']||'';return _0xc47cc7[_0x411060(0x204)](_0x537d5d[_0x411060(0x2e7)])&&(_0x17d62a=String(RegExp['$1'])[_0x411060(0x2d9)](',')[_0x411060(0x27c)](_0x286c89=>_0x286c89[_0x411060(0x312)]()[_0x411060(0x2bd)]())),_0x17d62a['push']('all',_0x411060(0x320)),_0x1e0eab[_0x411060(0x291)]&&(_0x17d62a=_0x17d62a[_0x411060(0x2e8)](_0x1e0eab['categories'])),_0x17d62a=_0x17d62a[_0x411060(0x27c)](_0x43e579=>_0x43e579[_0x411060(0x312)]()['trim']()),this[_0x411060(0x2cd)][_0x1e0eab['id']]=_0x17d62a,_0x17d62a;},DataManager['maxItemAmplifyTimes']=function(_0x463881){const _0x3a5349=_0x2069a8;if(!_0x463881)return 0x0;if(!DataManager[_0x3a5349(0x227)](_0x463881))return 0x0;this['_cache_maxItemAmplifyTimes']=this[_0x3a5349(0x217)]||{};if(this[_0x3a5349(0x217)][_0x463881['id']]!==undefined)return this[_0x3a5349(0x217)][_0x463881['id']];let _0x1aabf9=Game_Action['ITEM_AMPLIFY_MAX_AMPS'];const _0x121ee4=VisuMZ[_0x3a5349(0x2b4)][_0x3a5349(0x2fe)],_0x26c90f=_0x463881[_0x3a5349(0x33c)]||'';return _0x26c90f[_0x3a5349(0x204)](_0x121ee4[_0x3a5349(0x232)])&&(_0x1aabf9=Math[_0x3a5349(0x1fc)](Number(RegExp['$1']),0x1)),this['_cache_maxItemAmplifyTimes'][_0x463881['id']]=_0x1aabf9,this[_0x3a5349(0x217)][_0x463881['id']];},DataManager[_0x2069a8(0x28d)]=function(_0x5c36ac){const _0xe95a33=_0x2069a8;if(!_0x5c36ac)return 0x0;if(!DataManager[_0xe95a33(0x227)](_0x5c36ac))return 0x0;this[_0xe95a33(0x31c)]=this[_0xe95a33(0x31c)]||{};if(this[_0xe95a33(0x31c)][_0x5c36ac['id']]!==undefined){if(_0xe95a33(0x2e9)===_0xe95a33(0x2e9))return this[_0xe95a33(0x31c)][_0x5c36ac['id']];else _0x107dd8=_0x515f7c[_0xe95a33(0x353)](_0x3f5d24);}let _0x4d44d3=Game_Action['ITEM_AMPLIFY_MIN_AMPS'];const _0x514eaa=VisuMZ[_0xe95a33(0x2b4)]['RegExp'],_0x178609=_0x5c36ac[_0xe95a33(0x33c)]||'';return _0x178609[_0xe95a33(0x204)](_0x514eaa[_0xe95a33(0x2ab)])&&(_0x4d44d3=Math['max'](Number(RegExp['$1']),0x0)),this[_0xe95a33(0x31c)][_0x5c36ac['id']]=_0x4d44d3,this[_0xe95a33(0x31c)][_0x5c36ac['id']];},DataManager[_0x2069a8(0x212)]=function(_0x15f812){const _0x3d0085=_0x2069a8;if(!_0x15f812)return 0x0;if(DataManager[_0x3d0085(0x227)](_0x15f812))return 0x0;let _0xdc36bb='item-%1'[_0x3d0085(0x2ad)](_0x15f812['id']);this['_cache_itemAmplifyPower']=this[_0x3d0085(0x2c7)]||{};if(this[_0x3d0085(0x2c7)][_0xdc36bb]!==undefined)return this[_0x3d0085(0x2c7)][_0xdc36bb];let _0x1885d2=Game_Action[_0x3d0085(0x25b)];const _0x542bcc=VisuMZ['ItemAmplifySkills'][_0x3d0085(0x2fe)],_0x38f573=_0x15f812[_0x3d0085(0x33c)]||'';return _0x38f573[_0x3d0085(0x204)](_0x542bcc['AmplifyPower'])&&(_0x1885d2=String(RegExp['$1'])),this[_0x3d0085(0x2c7)][_0xdc36bb]=_0x1885d2,_0x1885d2;},ColorManager[_0x2069a8(0x30c)]=function(_0x6dc0a3){const _0x127783=_0x2069a8;_0x6dc0a3=String(_0x6dc0a3);if(_0x6dc0a3[_0x127783(0x204)](/#(.*)/i)){if(_0x127783(0x2aa)===_0x127783(0x2aa))return'#%1'[_0x127783(0x2ad)](String(RegExp['$1']));else this[_0x127783(0x340)](_0x1fd41c);}else return this['textColor'](Number(_0x6dc0a3));},TextManager[_0x2069a8(0x26e)]=VisuMZ['ItemAmplifySkills'][_0x2069a8(0x238)][_0x2069a8(0x2d8)][_0x2069a8(0x2cc)]??_0x2069a8(0x2cc),TextManager[_0x2069a8(0x218)]=VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x238)]['Vocab'][_0x2069a8(0x23b)]??_0x2069a8(0x336),Game_Action[_0x2069a8(0x20a)]=VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x238)][_0x2069a8(0x2f9)][_0x2069a8(0x232)]??0x0,Game_Action[_0x2069a8(0x2a2)]=VisuMZ[_0x2069a8(0x2b4)]['Settings'][_0x2069a8(0x2f9)][_0x2069a8(0x2ab)]??0x3,Game_Action[_0x2069a8(0x25b)]=VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x238)]['General'][_0x2069a8(0x1f3)]??0x14,Game_Action[_0x2069a8(0x244)]=VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x238)][_0x2069a8(0x2f9)][_0x2069a8(0x32c)]??!![],Game_Action[_0x2069a8(0x2a1)]['playItemAmplifyFauxAnimations']=function(_0x5bc441,_0xf7df60){const _0x18a861=_0x2069a8;if(!_0x5bc441)return;if(!_0xf7df60)return;const _0x2849b8=VisuMZ[_0x18a861(0x2b4)][_0x18a861(0x2fe)],_0x4bbd09=_0xf7df60?_0xf7df60[_0x18a861(0x33c)]||'':'';if(_0x4bbd09[_0x18a861(0x204)](_0x2849b8[_0x18a861(0x209)])){if(_0x18a861(0x34b)!==_0x18a861(0x281)){const _0x227e65=Number(RegExp['$1']);$gameTemp[_0x18a861(0x265)]([_0x5bc441],_0x227e65,![],![]);}else{if(!_0x15be52[_0x18a861(0x2cf)](_0x3cab54))return;if(this[_0x18a861(0x317)]())return;this[_0x18a861(0x30b)]===_0x428ee0&&this['initItemAmplifySkills'](),this[_0x18a861(0x30b)][_0x3c1018['id']]=this[_0x18a861(0x30b)][_0x4650d0['id']]||[],!this[_0x18a861(0x30b)][_0x56ae98['id']][_0x18a861(0x243)](_0x4fce70['id'])&&this['_itemAmplifySkillData'][_0x441cb0['id']][_0x18a861(0x26f)](_0x2901d9['id']);}}else{if(Game_Action[_0x18a861(0x244)]){if('CIcih'===_0x18a861(0x254)){const _0x57ceea=_0xf7df60['animationId']||0x0;$gameTemp[_0x18a861(0x265)]([_0x5bc441],_0x57ceea,![],![]);}else this['_hasItemAmplifyConflicts'][_0x325f80['id']]=!![];}}},VisuMZ[_0x2069a8(0x2b4)]['Game_Action_makeDamageValue']=Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x286)],Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x286)]=function(_0x373529,_0x3bef8b){const _0x529adb=_0x2069a8;let _0x85656b=window[_0x529adb(0x34f)];DataManager['canAmplifyWithItems'](this[_0x529adb(0x23d)]())&&$gameParty[_0x529adb(0x2c5)]()?window[_0x529adb(0x34f)]=this[_0x529adb(0x307)]()['getTotalAmplifyPower'](this[_0x529adb(0x23d)]()):_0x529adb(0x2ef)!==_0x529adb(0x2c4)?window[_0x529adb(0x34f)]=0x0:_0x46e6f7[_0x529adb(0x31a)](_0x43d998);const _0x56f7f3=VisuMZ[_0x529adb(0x2b4)][_0x529adb(0x297)][_0x529adb(0x2e6)](this,_0x373529,_0x3bef8b);return window[_0x529adb(0x34f)]=_0x85656b,_0x56f7f3;},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x27f)]=Game_Action['prototype']['itemHit'],Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x29c)]=function(_0x331ca8){const _0x1dfb3e=_0x2069a8;let _0x4f2b4d=VisuMZ[_0x1dfb3e(0x2b4)][_0x1dfb3e(0x27f)][_0x1dfb3e(0x2e6)](this,_0x331ca8);if(DataManager[_0x1dfb3e(0x2cf)](this[_0x1dfb3e(0x23d)]())&&$gameParty[_0x1dfb3e(0x2c5)]()){const _0x478498=VisuMZ[_0x1dfb3e(0x2b4)][_0x1dfb3e(0x2fe)],_0x1ecfb6=this['subject']()[_0x1dfb3e(0x354)](this[_0x1dfb3e(0x23d)]());for(const _0x589a8b of _0x1ecfb6){const _0x361f06=_0x589a8b?_0x589a8b['note']||'':'';_0x361f06[_0x1dfb3e(0x204)](_0x478498[_0x1dfb3e(0x24d)])&&(_0x4f2b4d+=Number(RegExp['$1'])*0.01);}}return _0x4f2b4d;},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x22d)]=Game_Action[_0x2069a8(0x2a1)]['itemCri'],Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x2ec)]=function(_0x40f7bf){const _0xc3f8bb=_0x2069a8;let _0x1d35d7=VisuMZ[_0xc3f8bb(0x2b4)]['Game_Action_itemCri'][_0xc3f8bb(0x2e6)](this,_0x40f7bf);if(DataManager[_0xc3f8bb(0x2cf)](this[_0xc3f8bb(0x23d)]())&&$gameParty[_0xc3f8bb(0x2c5)]()){const _0x477f30=VisuMZ['ItemAmplifySkills']['RegExp'],_0x404296=this[_0xc3f8bb(0x307)]()[_0xc3f8bb(0x354)](this[_0xc3f8bb(0x23d)]());for(const _0x26751f of _0x404296){const _0x5561ea=_0x26751f?_0x26751f[_0xc3f8bb(0x33c)]||'':'';_0x5561ea['match'](_0x477f30['AmplifyCritRate'])&&(_0x1d35d7+=Number(RegExp['$1'])*0.01);}}return _0x1d35d7;},VisuMZ['ItemAmplifySkills']['Game_Action_applyVariance']=Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x23e)],Game_Action['prototype']['applyVariance']=function(_0x21abf5,_0x1001d0){const _0x1f03f3=_0x2069a8;if(DataManager['canAmplifyWithItems'](this[_0x1f03f3(0x23d)]())&&$gameParty[_0x1f03f3(0x2c5)]()){if('rewyS'==='rewyS'){const _0x1cf157=VisuMZ[_0x1f03f3(0x2b4)][_0x1f03f3(0x2fe)],_0xbd5b38=this[_0x1f03f3(0x307)]()[_0x1f03f3(0x354)](this[_0x1f03f3(0x23d)]());for(const _0x13b3f1 of _0xbd5b38){const _0x29f2c4=_0x13b3f1?_0x13b3f1['note']||'':'';_0x29f2c4['match'](_0x1cf157[_0x1f03f3(0x22b)])&&(_0x1001d0+=Number(RegExp['$1']));}}else _0x6d4bef=_0x2a28f8[_0x1f03f3(0x353)](_0x343cf6);}return VisuMZ[_0x1f03f3(0x2b4)][_0x1f03f3(0x290)][_0x1f03f3(0x2e6)](this,_0x21abf5,_0x1001d0);},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x289)]=Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x2be)],Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x2be)]=function(_0x4b52eb,_0x36ccc1){const _0x184608=_0x2069a8;if(DataManager['canAmplifyWithItems'](this[_0x184608(0x23d)]())&&$gameParty[_0x184608(0x2c5)]()){const _0x19661e=VisuMZ[_0x184608(0x2b4)]['RegExp'],_0xc5f211=this[_0x184608(0x307)]()[_0x184608(0x354)](this['item']());for(const _0x1642b7 of _0xc5f211){if('CZDoe'===_0x184608(0x29b)){if(!this[_0x184608(0x23d)]())return;if(!_0x3e565c[_0x184608(0x2c5)]())return;if(!_0x5d612b[_0x184608(0x2cf)](this['item']()))return;if(!this[_0x184608(0x307)]())return;if(!_0x1d8220)return;const _0x57819f=this[_0x184608(0x307)]()[_0x184608(0x354)](this[_0x184608(0x23d)]());for(const _0x3b0665 of _0x57819f){this[_0x184608(0x262)](_0x409714,_0x3b0665),this[_0x184608(0x325)](_0x33f2ac,_0x3b0665);}}else{const _0x2e52cb=_0x1642b7?_0x1642b7[_0x184608(0x33c)]||'':'';if(_0x2e52cb['match'](_0x19661e[_0x184608(0x33e)]))return _0x4b52eb;}}}return VisuMZ['ItemAmplifySkills'][_0x184608(0x289)][_0x184608(0x2e6)](this,_0x4b52eb,_0x36ccc1);},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x357)]=Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x313)],Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x313)]=function(){const _0x47f5af=_0x2069a8;let _0x5537fe=VisuMZ['ItemAmplifySkills']['Game_Action_elements'][_0x47f5af(0x2e6)](this);if(DataManager['canAmplifyWithItems'](this[_0x47f5af(0x23d)]())&&$gameParty['inBattle']()){const _0x300c41=VisuMZ[_0x47f5af(0x2b4)][_0x47f5af(0x2fe)],_0x46519d=this[_0x47f5af(0x307)]()['getItemAmplifiesForSkill'](this['item']());for(const _0x41af58 of _0x46519d){if(_0x47f5af(0x34e)===_0x47f5af(0x333))return'#%1'[_0x47f5af(0x2ad)](_0x42e819(_0x5e790e['$1']));else{const _0x32a8ec=_0x41af58?_0x41af58[_0x47f5af(0x33c)]||'':'';if(_0x32a8ec[_0x47f5af(0x204)](_0x300c41['AmplifyElementAdd'])){const _0x32f185=String(RegExp['$1'])[_0x47f5af(0x2d9)](',')[_0x47f5af(0x27c)](_0x259433=>_0x259433[_0x47f5af(0x2bd)]());for(const _0x35c53c of _0x32f185){if(_0x47f5af(0x292)!==_0x47f5af(0x276)){const _0xcedc53=/^\d+$/[_0x47f5af(0x2b0)](_0x35c53c);let _0x13b3da=0x0;_0xcedc53?_0x47f5af(0x241)!=='BkoTa'?(this[_0x47f5af(0x32b)][_0x47f5af(0x226)](),this[_0x47f5af(0x27a)]['open'](),this[_0x47f5af(0x27a)]['show'](),this[_0x47f5af(0x27a)][_0x47f5af(0x21a)]()):_0x13b3da=Number(_0x35c53c):_0x13b3da=DataManager[_0x47f5af(0x2f7)](_0x35c53c),_0x13b3da&&!_0x5537fe[_0x47f5af(0x243)](_0x13b3da)&&_0x5537fe[_0x47f5af(0x26f)](_0x13b3da);}else{let _0x522129=_0x55537e[_0x47f5af(0x34f)];_0x1e7533['amplify']=0x1;const _0x5df9bc=_0x4e1629[_0x47f5af(0x2b4)]['Window_ShopStatus_getItemDamageAmountTextOriginal'][_0x47f5af(0x2e6)](this);return _0x22a2c0[_0x47f5af(0x34f)]=_0x522129,_0x5df9bc;}}}}}}return _0x5537fe;},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x259)]=Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x239)],Game_Action['prototype'][_0x2069a8(0x239)]=function(_0x280ac2){const _0x25cfa0=_0x2069a8;VisuMZ[_0x25cfa0(0x2b4)]['Game_Action_applyItemUserEffect'][_0x25cfa0(0x2e6)](this,_0x280ac2),this[_0x25cfa0(0x296)](_0x280ac2);},Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x296)]=function(_0x4c68c3){const _0x5c3321=_0x2069a8;if(!this[_0x5c3321(0x23d)]())return;if(!$gameParty[_0x5c3321(0x2c5)]())return;if(!DataManager[_0x5c3321(0x2cf)](this[_0x5c3321(0x23d)]()))return;if(!this[_0x5c3321(0x307)]())return;if(!_0x4c68c3)return;const _0x472411=this[_0x5c3321(0x307)]()[_0x5c3321(0x354)](this[_0x5c3321(0x23d)]());for(const _0x587183 of _0x472411){this[_0x5c3321(0x262)](_0x4c68c3,_0x587183),this[_0x5c3321(0x325)](_0x4c68c3,_0x587183);}},Game_Action['prototype'][_0x2069a8(0x325)]=function(_0x625bf6,_0x74fa67){const _0x3fc6b5=_0x2069a8;if(!_0x625bf6)return;if(!_0x74fa67)return;this[_0x3fc6b5(0x322)](_0x625bf6,_0x74fa67),this[_0x3fc6b5(0x2ca)](_0x625bf6,_0x74fa67),this['applyItemAmplifyJsEffects'](_0x625bf6,_0x74fa67);},Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x322)]=function(_0x1c56fa,_0x4f373d){const _0x44f16e=_0x2069a8,_0x72bf15=VisuMZ[_0x44f16e(0x2b4)][_0x44f16e(0x2fe)],_0x3a8b25=_0x4f373d[_0x44f16e(0x33c)]||'';if(_0x3a8b25[_0x44f16e(0x204)](_0x72bf15[_0x44f16e(0x216)])){if(_0x44f16e(0x220)!==_0x44f16e(0x220))this[_0x44f16e(0x219)]();else{const _0x1fa259=String(RegExp['$1'])[_0x44f16e(0x2d9)](',')[_0x44f16e(0x27c)](_0x3a73b5=>_0x3a73b5['trim']());for(const _0x571e66 of _0x1fa259){const _0x13523a=/^\d+$/[_0x44f16e(0x2b0)](_0x571e66);let _0x3745c3=0x0;_0x13523a?_0x3745c3=Number(_0x571e66):_0x44f16e(0x278)===_0x44f16e(0x272)?_0x4a5491=_0x209faf['getStateIdWithName'](_0x94ed12):_0x3745c3=DataManager[_0x44f16e(0x2ce)](_0x571e66),_0x3745c3&&_0x1c56fa[_0x44f16e(0x2dd)](_0x3745c3);}}}if(_0x3a8b25[_0x44f16e(0x204)](_0x72bf15[_0x44f16e(0x258)])){const _0x5be9ee=String(RegExp['$1'])[_0x44f16e(0x2d9)](',')[_0x44f16e(0x27c)](_0x5f0a1c=>_0x5f0a1c[_0x44f16e(0x2bd)]());for(const _0xfd184b of _0x5be9ee){if(_0x44f16e(0x1f9)!==_0x44f16e(0x1f9))this[_0x44f16e(0x30b)][_0x593d72['id']][_0x44f16e(0x26f)](_0x150f61['id']);else{const _0x55e3f5=/^\d+$/[_0x44f16e(0x2b0)](_0xfd184b);let _0x58aa5f=0x0;_0x55e3f5?_0x58aa5f=Number(_0xfd184b):_0x58aa5f=DataManager[_0x44f16e(0x2ce)](_0xfd184b);if(_0x58aa5f){if(_0x44f16e(0x22a)==='sFOgr'){const _0x532e6d=_0xee49fc[_0x44f16e(0x2b4)]['RegExp'],_0x24d5be=this[_0x44f16e(0x307)]()[_0x44f16e(0x354)](this['item']());for(const _0x3e8e2d of _0x24d5be){const _0x381090=_0x3e8e2d?_0x3e8e2d['note']||'':'';if(_0x381090[_0x44f16e(0x204)](_0x532e6d[_0x44f16e(0x33e)]))return _0x338534;}}else _0x1c56fa[_0x44f16e(0x327)](_0x58aa5f);}}}}},Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x2ca)]=function(_0x57df5b,_0x309892){const _0x260af6=_0x2069a8,_0x46067a=VisuMZ[_0x260af6(0x2b4)][_0x260af6(0x2fe)],_0x10404d=_0x309892[_0x260af6(0x33c)]||'';{if(_0x260af6(0x230)!=='PSwWc'){const _0x1c1129=_0x46067a[_0x260af6(0x355)],_0x37d99d=_0x10404d['match'](_0x1c1129);if(_0x37d99d)for(const _0x3ef5e1 of _0x37d99d){if(_0x260af6(0x31b)!==_0x260af6(0x256)){_0x3ef5e1[_0x260af6(0x204)](_0x1c1129);const _0x3d6245=String(RegExp['$1'])[_0x260af6(0x2d9)](',')[_0x260af6(0x27c)](_0x4854d5=>_0x4854d5[_0x260af6(0x2bd)]()),_0x420b60=Number(RegExp['$2']);for(const _0x531175 of _0x3d6245){if('JGjyT'==='tFNrz')this['_itemAmplifyMode']?this[_0x260af6(0x34d)]():_0x13fcd9[_0x260af6(0x2b4)]['Scene_Battle_onItemOk']['call'](this);else{const _0x59a052=/^\d+$/[_0x260af6(0x2b0)](_0x531175);let _0x203c30=-0x1;if(_0x59a052){if('wbMWM'==='wbMWM')_0x203c30=Number(_0x531175)[_0x260af6(0x27b)](0x0,0x7);else{const _0x59689c=_0x14f296?_0x532db4[_0x260af6(0x33c)]||'':'';_0x59689c[_0x260af6(0x204)](_0x4d8436[_0x260af6(0x24d)])&&(_0x4916f3+=_0x36ac16(_0x574809['$1'])*0.01);}}else _0x203c30=DataManager[_0x260af6(0x353)](_0x531175);if(_0x203c30>=0x0){if(_0x260af6(0x2bb)===_0x260af6(0x20d)){const _0x56a83a=this[_0x260af6(0x29d)](_0x3ab9cb);this[_0x260af6(0x1f8)]&&_0x56a83a===null?this[_0x260af6(0x340)](_0x346bee):_0x65acde[_0x260af6(0x2b4)]['Window_ItemList_drawItem']['call'](this,_0x5a1f95);}else _0x57df5b[_0x260af6(0x24f)](_0x203c30,_0x420b60);}}}}else{const _0x3d358f=this['getItemAmplifiesForSkill'](_0x39b429);let _0x3f2b52=0x0;for(const _0x709f28 of _0x3d358f){_0x3f2b52+=_0x1cebce(_0x133836['itemAmplifyPower'](_0x709f28));}return _0x3f2b52;}}}else{let _0x513565=_0x142e40['ItemAmplifySkills'][_0x260af6(0x22d)][_0x260af6(0x2e6)](this,_0x10d5c7);if(_0x584f75[_0x260af6(0x2cf)](this['item']())&&_0x82ade3[_0x260af6(0x2c5)]()){const _0x1b00dd=_0x4f6cce[_0x260af6(0x2b4)][_0x260af6(0x2fe)],_0x1b4eb0=this[_0x260af6(0x307)]()[_0x260af6(0x354)](this[_0x260af6(0x23d)]());for(const _0x32db32 of _0x1b4eb0){const _0x163454=_0x32db32?_0x32db32['note']||'':'';_0x163454[_0x260af6(0x204)](_0x1b00dd[_0x260af6(0x23f)])&&(_0x513565+=_0x458107(_0x1dece2['$1'])*0.01);}}return _0x513565;}}{const _0xa657e=_0x46067a[_0x260af6(0x2f6)],_0x586f75=_0x10404d[_0x260af6(0x204)](_0xa657e);if(_0x586f75){if('wsDrI'!==_0x260af6(0x222)){const _0x27240c=this[_0x260af6(0x257)][_0x260af6(0x23d)]();_0x2f3f80['canAmplifyWithItems'](_0x27240c)?this[_0x260af6(0x343)](_0x27240c):_0x19affe[_0x260af6(0x2b4)]['Scene_Battle_onSkillOk'][_0x260af6(0x2e6)](this);}else for(const _0x3fdbe0 of _0x586f75){_0x3fdbe0[_0x260af6(0x204)](_0xa657e);const _0x2565b0=String(RegExp['$1'])['split'](',')['map'](_0x27a4b7=>_0x27a4b7['trim']()),_0x5a3386=Number(RegExp['$2']);for(const _0x517eda of _0x2565b0){if('xRFDP'!==_0x260af6(0x261)){const _0x2533b0=/^\d+$/['test'](_0x517eda);let _0x4dd08f=-0x1;_0x2533b0?_0x260af6(0x321)===_0x260af6(0x32f)?this[_0x260af6(0x30b)][_0x72ac9e['id']][_0x260af6(0x26f)](_0x465f58['id']):_0x4dd08f=Number(_0x517eda)['clamp'](0x0,0x7):_0x260af6(0x283)!==_0x260af6(0x2af)?_0x4dd08f=DataManager[_0x260af6(0x353)](_0x517eda):(this[_0x260af6(0x257)][_0x260af6(0x33a)](),this['_skillWindow'][_0x260af6(0x21e)]=!![],this['_skillWindow']['active']=!![]),_0x4dd08f>=0x0&&_0x57df5b[_0x260af6(0x207)](_0x4dd08f,_0x5a3386);}else{const _0x59e967=/^\d+$/[_0x260af6(0x2b0)](_0x4f1075);let _0x124aaa=0x0;_0x59e967?_0x124aaa=_0x51c496(_0x20f18a):_0x124aaa=_0x46ec86[_0x260af6(0x2f7)](_0x5833d2),_0x124aaa&&!_0x4a8b83[_0x260af6(0x243)](_0x124aaa)&&_0x22d9a3[_0x260af6(0x26f)](_0x124aaa);}}}}}{const _0x3efc5a=_0x46067a[_0x260af6(0x264)],_0x456871=_0x10404d[_0x260af6(0x204)](_0x3efc5a);if(_0x456871){if(_0x260af6(0x1fa)!==_0x260af6(0x1fa))_0x15d27a=_0x15a2bb[_0x260af6(0x1fc)](_0x53ac17,_0x3cb676);else for(const _0x2491b8 of _0x456871){if(_0x260af6(0x34a)===_0x260af6(0x34a)){_0x2491b8[_0x260af6(0x204)](_0x3efc5a);const _0x29fd24=String(RegExp['$1'])[_0x260af6(0x2d9)](',')[_0x260af6(0x27c)](_0x5480a4=>_0x5480a4[_0x260af6(0x2bd)]());for(const _0x17a4fa of _0x29fd24){const _0x5ae3b4=/^\d+$/[_0x260af6(0x2b0)](_0x17a4fa);let _0x551501=-0x1;_0x5ae3b4?_0x551501=Number(_0x17a4fa)[_0x260af6(0x27b)](0x0,0x7):_0x551501=DataManager[_0x260af6(0x353)](_0x17a4fa),_0x551501>=0x0&&_0x57df5b[_0x260af6(0x270)](_0x551501)&&_0x57df5b['removeBuff'](_0x551501);}}else _0x396133=_0x3ce4be[_0x260af6(0x2ce)](_0x465804);}}}{const _0xfcb44a=_0x46067a[_0x260af6(0x334)],_0xf8f105=_0x10404d['match'](_0xfcb44a);if(_0xf8f105)for(const _0x5770bf of _0xf8f105){_0x5770bf[_0x260af6(0x204)](_0xfcb44a);const _0x1a62be=String(RegExp['$1'])[_0x260af6(0x2d9)](',')[_0x260af6(0x27c)](_0x299b70=>_0x299b70[_0x260af6(0x2bd)]());for(const _0x2e87b0 of _0x1a62be){if(_0x260af6(0x211)!=='xNKyf'){const _0x208ea2=/^\d+$/[_0x260af6(0x2b0)](_0x2e87b0);let _0x15a77e=-0x1;_0x208ea2?_0x15a77e=Number(_0x2e87b0)[_0x260af6(0x27b)](0x0,0x7):_0x15a77e=DataManager[_0x260af6(0x353)](_0x2e87b0),_0x15a77e>=0x0&&_0x57df5b[_0x260af6(0x221)](_0x15a77e)&&_0x57df5b['removeBuff'](_0x15a77e);}else{if(!_0x105c2f[_0x260af6(0x306)](_0x491f62))return;if(!_0x1b96c9['consumable'])return;if(_0x4e1d55[_0x260af6(0x26b)]===0x2)return;const _0x31797c=_0x396f9b['note']||'',_0x48fe4a=_0x5e8e5b[_0x260af6(0x2b4)][_0x260af6(0x2fe)];if(_0x31797c[_0x260af6(0x204)](_0x48fe4a['AmplifyConserve'])){const _0x23c11d=_0x2afadb(_0x355154['$1'])*0.01;if(_0x119d16[_0x260af6(0x358)]()<_0x23c11d)return;}_0xd3e7ac[_0x260af6(0x1fb)](_0x443850,0x1);}}}}},Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x208)]=function(_0x5a350c,_0x4aebb2){const _0x56c090=_0x2069a8,_0x41348d=VisuMZ['ItemAmplifySkills'][_0x56c090(0x2fe)],_0x15ba09=_0x4aebb2['note']||'';if(_0x15ba09[_0x56c090(0x204)](_0x41348d[_0x56c090(0x26c)])){if(_0x56c090(0x2ea)===_0x56c090(0x2ea)){const _0x417517=String(RegExp['$1']);window[_0x56c090(0x2ff)]=this['subject'](),window[_0x56c090(0x29e)]=_0x5a350c,window['a']=this[_0x56c090(0x307)](),window['b']=_0x5a350c,window[_0x56c090(0x323)]=this['item'](),window[_0x56c090(0x23d)]=_0x4aebb2;try{_0x56c090(0x24a)!==_0x56c090(0x24a)?_0x3ba333[_0x56c090(0x2dd)](_0x3788f4):eval(_0x417517);}catch(_0x571023){if($gameTemp[_0x56c090(0x269)]())console[_0x56c090(0x260)](_0x571023);}window[_0x56c090(0x2ff)]=undefined,window[_0x56c090(0x29e)]=undefined,window['a']=undefined,window['b']=undefined,window[_0x56c090(0x323)]=undefined,window[_0x56c090(0x23d)]=undefined;}else{const _0x190c9a=_0x866c67[_0x56c090(0x2b4)][_0x56c090(0x2fe)],_0x64ac2=this[_0x56c090(0x307)]()[_0x56c090(0x354)](this[_0x56c090(0x23d)]());for(const _0x464845 of _0x64ac2){const _0x5e94c7=_0x464845?_0x464845[_0x56c090(0x33c)]||'':'';_0x5e94c7[_0x56c090(0x204)](_0x190c9a[_0x56c090(0x22b)])&&(_0x2fd0a9+=_0x399d89(_0x4e101f['$1']));}}}},VisuMZ['ItemAmplifySkills'][_0x2069a8(0x30a)]=Game_Action[_0x2069a8(0x2a1)][_0x2069a8(0x23c)],Game_Action['prototype'][_0x2069a8(0x23c)]=function(){const _0x11ff0e=_0x2069a8;VisuMZ['ItemAmplifySkills'][_0x11ff0e(0x287)](this),VisuMZ[_0x11ff0e(0x2b4)]['Game_Action_applyGlobal'][_0x11ff0e(0x2e6)](this);};var $amplifyItems=[];function _0x1af2(){const _0x39169c=['onItemOk','5YFSTLd','removeSkillAmplifyItem','forceSelect','ConvertParams','OMCcc','IbwXH','isEnabled','onItemAmplifyOk','PEpkC','amplify','28298831uigaRv','confirmItemAmplify','length','getParamIdWithName','getItemAmplifiesForSkill','AmplifyBuffsAdd','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Game_Action_elements','random','AmplifyPower','MAX\x20HP','12198vKzEGR','version','paySkillCost','_amplifySkill','iJQlL','xpVSm','loseItem','max','parameters','467022dZIMrI','Game_BattlerBase_paySkillCost','QJBtr','Window_BattleItem_includes','setText','Scene_Battle_onItemOk','match','status','VisuMZ_3_FrontviewBattleUI','addDebuff','applyItemAmplifyJsEffects','ImpactAnimation','ITEM_AMPLIFY_MIN_AMPS','_hasItemAmplifyConflicts','ItemsEquipsCore','EOVUI','drawItem','adjustSideviewUiHeight','canBeAmplifiedWith','BkbJC','itemAmplifyPower','setItem','STR','JaVvs','AmplifyStateAdd','_cache_maxItemAmplifyTimes','ITEM_AMPLIFY_HELP','cancelItemAmplify','activate','EVGpU','81832DBzDAY','exit','visible','MAX\x20MP','hDIFR','isDebuffAffected','wsDrI','changePaintOpacity','adjustFrontviewUiHeight','some','hide','isSkill','CIYrC','eBKYG','BRVwh','AmplifyVariance','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Game_Action_itemCri','ARRAYFUNC','height','OynCw','Scene_Battle_onActorCancel','MaxAmplify','MDF','VisuMZ_3_ItemThrowSkills','maxItemAmplifyTimes','currentExt','min','Settings','applyItemUserEffect','InputComboSkills','ConfirmHelp','applyGlobal','item','applyVariance','AmplifyCritRate','EcvXw','BkoTa','qUHxN','includes','ITEM_AMPLIFY_AUTO_IMPACT_ANIMATION','refresh','inputtingAction','consumable','yBkpM','Window_ShopStatus_getItemDamageAmountTextOriginal','lQPtj','ATK','Scene_Battle_onEnemyOk','AmplifyHitRate','486ZIDylF','addBuff','MAXMP','setSkill','5661564jvDPHd','Scene_Battle_onSkillOk','CIcih','10kDxVgu','ArVaP','_skillWindow','AmplifyStateRemove','Game_Action_applyItemUserEffect','hasItemAmplifyConflicts','ITEM_AMPLIFY_DEFAULT_ITEM_POWER','ITEM_AMPLIFY_SETTINGS','pknmt','Window_ItemList_makeItemList','kaynw','log','hHRPD','playItemAmplifyFauxAnimations','Ausmm','AmplifyBuffsRemove','requestFauxAnimation','getTotalAmplifyPower','237930dKDxIR','FORZI','isPlaytest','updateHelpItemAmplify','itypeId','AmplifyJsEffect','_data','ITEM_AMPLIFY_CONFIRM','push','isBuffAffected','isOccasionOk','jQtfA','onActorOk','amplifyItemTypes','clearAmplifySkill','pFYtv','registerSkillAmplifyItem','uKcQl','isUsingFrontviewUiLayout','_itemWindow','clamp','map','lineHeight','confirmIcon','Game_Action_itemHit','VisuMZ_3_ItemConcoctSkills','EqyFS','actorCommandSingleSkill','BTuHs','adjustSideviewUiWidth','ARRAYEVAL','makeDamageValue','UpdateGlobalAmplifyItemsVariable','_checkItemAmplify','Game_Action_applyGuard','VisuMZ_1_ItemsEquipsCore\x20needs\x20to\x20be\x20updated\x20','endCommandSelection','MzYCe','minItemAmplifyTimes','onSkillOk','Game_Battler_forceAction','Game_Action_applyVariance','categories','ClZwO','AmplifyConserve','You\x20cannot\x20use\x20a\x20forced\x20action\x20with\x20%1.','consumeItemAmplifyCost','applyItemAmplifySkillsUserEffect','Game_Action_makeDamageValue','AGI','onItemCancel','ARRAYNUM','Swksf','itemHit','itemAt','target','onEnemyOk','updateHelp','prototype','ITEM_AMPLIFY_MAX_AMPS','isShowNew','return\x200','drawItemBackground','Scene_Battle_actorCommandSingleSkill','_stateIDs','finalizeItemAmplify','keblu','PjWmY','MinAmplify','rYHdY','format','Window_BattleItem_isEnabled','wUNPq','test','LUK','VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20','unshift','ItemAmplifySkills','VisuMZ_3_SideviewBattleUI','hTGQX','BzWkU','gradientFillRect','MAXHP','initItemAmplifySkills','gpxlV','startEnemySelection','trim','applyGuard','active','VisuMZ_1_BattleCore','FUNC','Scene_Battle_endCommandSelection','canAmplifyWithItemTypes','EuPXR','inBattle','deactivate','_cache_itemAmplifyPower','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Window_ItemList_drawItem','applyItemAmplifyBuffEffects','Window_ItemList_updateHelp','Confirm','_cache_amplifyItemTypes','getStateIdWithName','canAmplifyWithItems','GGdev','egXkf','Window_BattleItem_isShowNew','drawItemAmplifyBackground','onEnemyCancel','forceAction','fwHPc','show','Vocab','split','URpCk','RQFTP','_cache_canAmplifyWithItemTypes','addState','resetFontSettings','fjahQ','BgColor1','_statusWindow','setAmplifySkill','needsSelection','isItemAmplifyingSkill','currentSymbol','call','AmplifyType','concat','Jbtcq','gjPug','Window_BattleItem_drawItemBackground','itemCri','startActorSelection','filter','zAkMp','_actorCommandWindow','EyowF','_itemAmplifyMode','ToSnL','EWZpG','name','AmplifyDebuffsAdd','getElementIdWithName','isUsingSideviewUiLayout','General','oBbxU','DEF','ConfirmIcon','_helpWindow','RegExp','user','ARRAYSTR','parse','10810723tkgQFJ','TmdnD','singleSkill','qzJka','isItem','subject','Scene_Battle_onItemCancel','aFjgt','Game_Action_applyGlobal','_itemAmplifySkillData','getColor','Scene_Battle_onActorOk','wIWJV','ARRAYSTRUCT','numItems','canConcoctItems','toUpperCase','elements','selectNextCommand','ySAAy','EVAL','isEnemy','hacTU','ppeyf','removeBuff','vjYXp','_cache_minItemAmplifyTimes','registerItemAmplify','tgbjE','itemLineRect','any','cAFzL','applyItemAmplifyStateEffects','skill','CnYlF','applyItemAmplifyEffects','Game_BattlerBase_isOccasionOk','removeState','description','contentsBack','Scene_Battle_onEnemyCancel','_actorWindow','AutoAnimation','UOPDj','STRUCT','cYqNo','EvEBr','remove','getItemDamageAmountTextOriginal','RnzRs','AmplifyDebuffsRemove','updateSideviewUiPosition','Perform\x20the\x20skill\x20with\x20the\x20selected\x20item(s).','JSON','payItemAmplifySkillCost','BattleCore','open','in\x20order\x20for\x20VisuMZ_3_ItemAmplifySkills\x20to\x20work.','note','actor','AmplifyIgnoreGuard','327QUiAVL','drawItemAmplifyConfirm','SIWAh','drawText','startItemAmplify','width'];_0x1af2=function(){return _0x39169c;};return _0x1af2();}VisuMZ[_0x2069a8(0x2b4)]['UpdateGlobalAmplifyItemsVariable']=function(_0x181fcf){const _0x37a962=_0x2069a8;$amplifyItems=[];if(!$gameParty[_0x37a962(0x2c5)]())return;if(!_0x181fcf[_0x37a962(0x307)]())return;if(!DataManager[_0x37a962(0x2cf)](_0x181fcf['item']()))return;$amplifyItems=_0x181fcf[_0x37a962(0x307)]()[_0x37a962(0x354)](_0x181fcf[_0x37a962(0x23d)]());},VisuMZ[_0x2069a8(0x2b4)]['Game_BattlerBase_isOccasionOk']=Game_BattlerBase[_0x2069a8(0x2a1)][_0x2069a8(0x271)],Game_BattlerBase[_0x2069a8(0x2a1)][_0x2069a8(0x271)]=function(_0x166dbc){const _0x2df10f=_0x2069a8;if(DataManager[_0x2df10f(0x2cf)](_0x166dbc)){if(!$gameParty['inBattle']())return![];if(this[_0x2df10f(0x317)]())return![];}return VisuMZ[_0x2df10f(0x2b4)][_0x2df10f(0x326)][_0x2df10f(0x2e6)](this,_0x166dbc);},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x1ff)]=Game_BattlerBase[_0x2069a8(0x2a1)][_0x2069a8(0x1f7)],Game_BattlerBase[_0x2069a8(0x2a1)][_0x2069a8(0x1f7)]=function(_0x3940c7){const _0xb60c24=_0x2069a8;VisuMZ[_0xb60c24(0x2b4)][_0xb60c24(0x1ff)][_0xb60c24(0x2e6)](this,_0x3940c7),this['payItemAmplifySkillCost'](_0x3940c7);},Game_BattlerBase[_0x2069a8(0x2a1)][_0x2069a8(0x338)]=function(_0x2ab7ae){const _0x4cf7f1=_0x2069a8;if(!DataManager[_0x4cf7f1(0x2cf)](_0x2ab7ae))return;if(this[_0x4cf7f1(0x317)]())return;const _0x1cd409=this[_0x4cf7f1(0x354)](_0x2ab7ae);for(const _0xc127ad of _0x1cd409){if(_0xc127ad&&$gameParty[_0x4cf7f1(0x310)](_0xc127ad)<=0x0)this[_0x4cf7f1(0x347)](_0x2ab7ae,_0xc127ad);else{if(_0x4cf7f1(0x2f1)==='EyowF')this[_0x4cf7f1(0x295)](_0xc127ad);else{this[_0x4cf7f1(0x2f2)]=!![];const _0x24741b=_0x2fd68[_0x4cf7f1(0x246)]();_0x24741b[_0x4cf7f1(0x251)](_0x436f30['id']),this[_0x4cf7f1(0x257)][_0x4cf7f1(0x21e)]=![],this[_0x4cf7f1(0x27a)][_0x4cf7f1(0x2e2)](_0xa7906),this[_0x4cf7f1(0x27a)]['refresh'](),this['_itemWindow'][_0x4cf7f1(0x2d7)](),this['_itemWindow'][_0x4cf7f1(0x21a)](),this['_itemWindow'][_0x4cf7f1(0x348)](0x0);}}}},Game_BattlerBase[_0x2069a8(0x2a1)][_0x2069a8(0x295)]=function(_0x2e93a3){const _0x340495=_0x2069a8;if(!DataManager[_0x340495(0x306)](_0x2e93a3))return;if(!_0x2e93a3[_0x340495(0x247)])return;if(_0x2e93a3[_0x340495(0x26b)]===0x2)return;const _0x5a82e1=_0x2e93a3[_0x340495(0x33c)]||'',_0x303b60=VisuMZ[_0x340495(0x2b4)][_0x340495(0x2fe)];if(_0x5a82e1[_0x340495(0x204)](_0x303b60[_0x340495(0x293)])){const _0x198511=Number(RegExp['$1'])*0.01;if(Math[_0x340495(0x358)]()<_0x198511)return;}$gameParty[_0x340495(0x1fb)](_0x2e93a3,0x1);},Game_Battler[_0x2069a8(0x2a1)][_0x2069a8(0x2ba)]=function(){const _0x30d2ce=_0x2069a8;this[_0x30d2ce(0x30b)]={};},Game_Battler['prototype'][_0x2069a8(0x354)]=function(_0x419ea0){const _0xbb7574=_0x2069a8;if(!DataManager[_0xbb7574(0x2cf)](_0x419ea0))return[];if(this[_0xbb7574(0x317)]())return[];this[_0xbb7574(0x30b)]===undefined&&this[_0xbb7574(0x2ba)]();this['_itemAmplifySkillData'][_0x419ea0['id']]=this['_itemAmplifySkillData'][_0x419ea0['id']]||[];for(const _0x4a99e7 of this[_0xbb7574(0x30b)][_0x419ea0['id']]){if('ozVuX'!==_0xbb7574(0x309)){const _0x2c8b05=$dataItems[_0x4a99e7];(!_0x2c8b05||$gameParty[_0xbb7574(0x310)](_0x2c8b05)<=0x0)&&this[_0xbb7574(0x30b)][_0x419ea0['id']][_0xbb7574(0x331)](_0x4a99e7);}else{const _0x24d4e3=_0x2b639c[_0xbb7574(0x246)]();if(this['_actorCommandWindow'][_0xbb7574(0x2e5)]()===_0xbb7574(0x323)){const _0x3049ba=this[_0xbb7574(0x257)]['item']();_0x24d4e3[_0xbb7574(0x251)](_0x3049ba['id']);}else{if(this['_actorCommandWindow']['currentSymbol']()===_0xbb7574(0x304)){const _0x2dca96=this['_actorCommandWindow'][_0xbb7574(0x236)](),_0x146a0f=_0x46973b[_0x2dca96];_0x24d4e3['setSkill'](_0x146a0f['id']);}}const _0x220806=_0x24d4e3['item'](),_0x27f495=this[_0xbb7574(0x27a)]['item']();_0x283e82[_0xbb7574(0x33d)]()&&_0x2fdd25['actor']()['registerSkillAmplifyItem'](_0x220806,_0x27f495),this[_0xbb7574(0x27a)][_0xbb7574(0x2bf)]=!![],this[_0xbb7574(0x27a)][_0xbb7574(0x245)]();}}return this['_itemAmplifySkillData'][_0x419ea0['id']][_0xbb7574(0x27c)](_0xb0523b=>$dataItems[_0xb0523b])[_0xbb7574(0x331)](null)[_0xbb7574(0x331)](undefined);},Game_Battler['prototype'][_0x2069a8(0x277)]=function(_0x1a6acb,_0x2a6eeb){const _0x165442=_0x2069a8;if(!DataManager[_0x165442(0x2cf)](_0x1a6acb))return;if(this[_0x165442(0x317)]())return;this[_0x165442(0x30b)]===undefined&&(_0x165442(0x324)!==_0x165442(0x324)?this['_itemAmplifySkillData'][_0x28f5d['id']]['remove'](_0x21bdc0['id']):this[_0x165442(0x2ba)]());this[_0x165442(0x30b)][_0x1a6acb['id']]=this['_itemAmplifySkillData'][_0x1a6acb['id']]||[];if(this[_0x165442(0x30b)][_0x1a6acb['id']]['includes'](_0x2a6eeb['id'])){if(_0x165442(0x2b7)!=='Owvdn')this[_0x165442(0x30b)][_0x1a6acb['id']][_0x165442(0x331)](_0x2a6eeb['id']);else return this['_amplifySkill']?_0x5216f2[_0x165442(0x210)](_0x3a2c92,this['_amplifySkill']):_0xbc827['ItemAmplifySkills'][_0x165442(0x201)]['call'](this,_0x46a955);}else{if(_0x165442(0x2d0)!==_0x165442(0x2d0)){_0x5d7a60=[];if(!_0x4fd05b[_0x165442(0x2c5)]())return;if(!_0x410d1b[_0x165442(0x307)]())return;if(!_0x4cec3a['canAmplifyWithItems'](_0x4184d1[_0x165442(0x23d)]()))return;_0x53f69f=_0x5d198c[_0x165442(0x307)]()[_0x165442(0x354)](_0x5394a2['item']());}else this['_itemAmplifySkillData'][_0x1a6acb['id']][_0x165442(0x26f)](_0x2a6eeb['id']);}},Game_Battler[_0x2069a8(0x2a1)]['addSkillAmplifyItem']=function(_0x376512,_0x25ada5){const _0x32e930=_0x2069a8;if(!DataManager[_0x32e930(0x2cf)](_0x376512))return;if(this['isEnemy']())return;this[_0x32e930(0x30b)]===undefined&&(_0x32e930(0x318)!==_0x32e930(0x318)?(_0x2c3192[_0x32e930(0x2b4)][_0x32e930(0x25e)][_0x32e930(0x2e6)](this),this[_0x32e930(0x1f8)]&&(this[_0x32e930(0x26d)][_0x32e930(0x331)](null),this['_data'][_0x32e930(0x2b3)](null),_0x435e27[_0x32e930(0x2b5)]&&_0x3e1079[_0x32e930(0x2f8)]()&&(this[_0x32e930(0x284)](),this[_0x32e930(0x20f)](),this[_0x32e930(0x335)]()),_0x1dea10[_0x32e930(0x206)]&&_0x2c3018[_0x32e930(0x279)]()&&this[_0x32e930(0x224)]())):this[_0x32e930(0x2ba)]()),this[_0x32e930(0x30b)][_0x376512['id']]=this['_itemAmplifySkillData'][_0x376512['id']]||[],!this['_itemAmplifySkillData'][_0x376512['id']][_0x32e930(0x243)](_0x25ada5['id'])&&this[_0x32e930(0x30b)][_0x376512['id']]['push'](_0x25ada5['id']);},Game_Battler[_0x2069a8(0x2a1)]['removeSkillAmplifyItem']=function(_0x35de7c,_0x518409){const _0x247e25=_0x2069a8;if(!DataManager[_0x247e25(0x2cf)](_0x35de7c))return;if(this[_0x247e25(0x317)]())return;this[_0x247e25(0x30b)]===undefined&&this[_0x247e25(0x2ba)](),this[_0x247e25(0x30b)][_0x35de7c['id']]=this[_0x247e25(0x30b)][_0x35de7c['id']]||[],this[_0x247e25(0x30b)][_0x35de7c['id']][_0x247e25(0x243)](_0x518409['id'])&&this[_0x247e25(0x30b)][_0x35de7c['id']][_0x247e25(0x331)](_0x518409['id']);},Game_Battler[_0x2069a8(0x2a1)][_0x2069a8(0x2e4)]=function(_0x2c7129,_0x32b69f){const _0xe8bcf1=_0x2069a8;if(!_0x2c7129)return![];const _0x2e5c44=this[_0xe8bcf1(0x354)](_0x32b69f);return _0x2e5c44['includes'](_0x2c7129);},Game_Battler['prototype'][_0x2069a8(0x266)]=function(_0x4a2d82){const _0x7da4b1=_0x2069a8,_0x1c81a2=this[_0x7da4b1(0x354)](_0x4a2d82);let _0x1cae73=0x0;for(const _0x394df7 of _0x1c81a2){_0x1cae73+=eval(DataManager[_0x7da4b1(0x212)](_0x394df7));}return _0x1cae73;},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x28f)]=Game_Battler['prototype'][_0x2069a8(0x2d5)],Game_Battler[_0x2069a8(0x2a1)]['forceAction']=function(_0x3e0b12,_0x4020e9){const _0x4352b2=_0x2069a8,_0x449009=$dataSkills[_0x3e0b12];if(DataManager['canAmplifyWithItems'](_0x449009)&&$gameTemp[_0x4352b2(0x269)]()){alert(_0x4352b2(0x294)[_0x4352b2(0x2ad)](_0x449009[_0x4352b2(0x2f5)])),SceneManager[_0x4352b2(0x21d)]();return;}VisuMZ[_0x4352b2(0x2b4)][_0x4352b2(0x28f)][_0x4352b2(0x2e6)](this,_0x3e0b12,_0x4020e9);},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x2a6)]=Scene_Battle[_0x2069a8(0x2a1)][_0x2069a8(0x282)],Scene_Battle[_0x2069a8(0x2a1)][_0x2069a8(0x282)]=function(){const _0x5b5bfc=_0x2069a8,_0x46f856=this[_0x5b5bfc(0x2f0)][_0x5b5bfc(0x236)](),_0x367c8a=$dataSkills[_0x46f856];DataManager[_0x5b5bfc(0x2cf)](_0x367c8a)?this['startItemAmplify'](_0x367c8a):VisuMZ[_0x5b5bfc(0x2b4)][_0x5b5bfc(0x2a6)][_0x5b5bfc(0x2e6)](this);},VisuMZ[_0x2069a8(0x2b4)]['Scene_Battle_onSkillOk']=Scene_Battle['prototype'][_0x2069a8(0x28e)],Scene_Battle[_0x2069a8(0x2a1)][_0x2069a8(0x28e)]=function(){const _0x39c323=_0x2069a8,_0x523147=this[_0x39c323(0x257)][_0x39c323(0x23d)]();DataManager[_0x39c323(0x2cf)](_0x523147)?'eVJuc'===_0x39c323(0x2f4)?_0x53c595['ItemAmplifySkills']['Scene_Battle_onEnemyCancel'][_0x39c323(0x2e6)](this):this[_0x39c323(0x343)](_0x523147):_0x39c323(0x2fa)!==_0x39c323(0x2fa)?(this[_0x39c323(0x262)](_0x48e1b6,_0x2195bf),this[_0x39c323(0x325)](_0x441d48,_0x44d4fd)):VisuMZ[_0x39c323(0x2b4)][_0x39c323(0x253)][_0x39c323(0x2e6)](this);},Scene_Battle[_0x2069a8(0x2a1)]['startItemAmplify']=function(_0x51ffef){const _0x23dc11=_0x2069a8;this[_0x23dc11(0x2f2)]=!![];const _0x963c10=BattleManager[_0x23dc11(0x246)]();_0x963c10[_0x23dc11(0x251)](_0x51ffef['id']),this[_0x23dc11(0x257)][_0x23dc11(0x21e)]=![],this['_itemWindow'][_0x23dc11(0x2e2)](_0x51ffef),this[_0x23dc11(0x27a)][_0x23dc11(0x245)](),this[_0x23dc11(0x27a)][_0x23dc11(0x2d7)](),this[_0x23dc11(0x27a)][_0x23dc11(0x21a)](),this[_0x23dc11(0x27a)]['forceSelect'](0x0);},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x203)]=Scene_Battle['prototype'][_0x2069a8(0x345)],Scene_Battle['prototype'][_0x2069a8(0x345)]=function(){const _0x5d7732=_0x2069a8;if(this[_0x5d7732(0x2f2)])_0x5d7732(0x21b)===_0x5d7732(0x21b)?this[_0x5d7732(0x34d)]():this[_0x5d7732(0x2ba)]();else{if(_0x5d7732(0x25d)===_0x5d7732(0x2df)){const _0x4b8ad3=/^\d+$/[_0x5d7732(0x2b0)](_0x4a4be7);let _0x2aed1f=0x0;_0x4b8ad3?_0x2aed1f=_0x3f684e(_0x196044):_0x2aed1f=_0x124726['getStateIdWithName'](_0x5c27b9),_0x2aed1f&&_0x8b4c9d[_0x5d7732(0x2dd)](_0x2aed1f);}else VisuMZ[_0x5d7732(0x2b4)]['Scene_Battle_onItemOk'][_0x5d7732(0x2e6)](this);}},Scene_Battle[_0x2069a8(0x2a1)]['onItemAmplifyOk']=function(){const _0x5b002d=_0x2069a8;if(DataManager['isItem'](this[_0x5b002d(0x27a)][_0x5b002d(0x23d)]())){if(_0x5b002d(0x31e)!==_0x5b002d(0x2da))this['registerItemAmplify']();else{if(!_0x4f969f[_0x5b002d(0x2cf)](_0x22e700))return;if(this[_0x5b002d(0x317)]())return;const _0x471132=this['getItemAmplifiesForSkill'](_0x111c33);for(const _0x3e8355 of _0x471132){_0x3e8355&&_0x2619ee[_0x5b002d(0x310)](_0x3e8355)<=0x0?this[_0x5b002d(0x347)](_0x297a97,_0x3e8355):this[_0x5b002d(0x295)](_0x3e8355);}}}else this[_0x5b002d(0x351)]();},Scene_Battle[_0x2069a8(0x2a1)][_0x2069a8(0x31d)]=function(){const _0x5a19e6=_0x2069a8,_0x3afa95=BattleManager[_0x5a19e6(0x246)]();if(this[_0x5a19e6(0x2f0)][_0x5a19e6(0x2e5)]()===_0x5a19e6(0x323)){if(_0x5a19e6(0x25f)!==_0x5a19e6(0x25f))_0x700964['removeBuff'](_0x23630f);else{const _0x948bcf=this[_0x5a19e6(0x257)]['item']();_0x3afa95['setSkill'](_0x948bcf['id']);}}else{if(this['_actorCommandWindow'][_0x5a19e6(0x2e5)]()==='singleSkill'){const _0x3ef0c6=this['_actorCommandWindow'][_0x5a19e6(0x236)](),_0x414fe8=$dataSkills[_0x3ef0c6];_0x3afa95[_0x5a19e6(0x251)](_0x414fe8['id']);}}const _0x39b3d5=_0x3afa95[_0x5a19e6(0x23d)](),_0x4f43aa=this[_0x5a19e6(0x27a)][_0x5a19e6(0x23d)]();if(BattleManager[_0x5a19e6(0x33d)]()){if(_0x5a19e6(0x268)!==_0x5a19e6(0x2a9))BattleManager['actor']()['registerSkillAmplifyItem'](_0x39b3d5,_0x4f43aa);else{let _0x5cc483='';_0x5cc483+=_0x5a19e6(0x28a),_0x5cc483+=_0x5a19e6(0x33b),_0x256aec(_0x5cc483),_0xf4baf8['exit']();}}this[_0x5a19e6(0x27a)][_0x5a19e6(0x2bf)]=!![],this[_0x5a19e6(0x27a)][_0x5a19e6(0x245)]();},Scene_Battle[_0x2069a8(0x2a1)][_0x2069a8(0x351)]=function(){const _0x5138d1=_0x2069a8,_0x10bf9d=BattleManager[_0x5138d1(0x246)]();if(this[_0x5138d1(0x2f0)][_0x5138d1(0x2e5)]()===_0x5138d1(0x323)){const _0x440cac=this['_skillWindow']['item']();_0x10bf9d[_0x5138d1(0x251)](_0x440cac['id']);}else{if(this['_actorCommandWindow'][_0x5138d1(0x2e5)]()===_0x5138d1(0x304)){const _0x507052=this['_actorCommandWindow']['currentExt'](),_0x543559=$dataSkills[_0x507052];_0x10bf9d[_0x5138d1(0x251)](_0x543559['id']);}}if(!_0x10bf9d[_0x5138d1(0x2e3)]())this[_0x5138d1(0x2a8)](),this[_0x5138d1(0x314)]();else{if(_0x10bf9d['isForOpponent']()){if(_0x5138d1(0x2ac)===_0x5138d1(0x30e)){const _0x167c2e=_0x3ac549(_0x1f6a72['$1']);_0x3d6da4[_0x5138d1(0x265)]([_0x4eec64],_0x167c2e,![],![]);}else this[_0x5138d1(0x2bc)]();}else{if(_0x5138d1(0x315)===_0x5138d1(0x315))this[_0x5138d1(0x2ed)]();else{if(!_0x551474[_0x5138d1(0x2cf)](_0x1ca015))return;if(this[_0x5138d1(0x317)]())return;this[_0x5138d1(0x30b)]===_0x977de9&&this['initItemAmplifySkills'](),this[_0x5138d1(0x30b)][_0x2327c2['id']]=this['_itemAmplifySkillData'][_0x3de67a['id']]||[],this[_0x5138d1(0x30b)][_0x57b6e8['id']][_0x5138d1(0x243)](_0x510bb0['id'])?this['_itemAmplifySkillData'][_0x51cca5['id']][_0x5138d1(0x331)](_0x1d258e['id']):this[_0x5138d1(0x30b)][_0x24409f['id']][_0x5138d1(0x26f)](_0x7a0f0f['id']);}}}},Scene_Battle['prototype'][_0x2069a8(0x2a8)]=function(){const _0x4cf9b5=_0x2069a8;this['_itemAmplifyMode']=![],this['_itemWindow'][_0x4cf9b5(0x275)](),this[_0x4cf9b5(0x27a)][_0x4cf9b5(0x245)](),this[_0x4cf9b5(0x27a)][_0x4cf9b5(0x226)](),this['_itemWindow']['deactivate']();},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x30d)]=Scene_Battle[_0x2069a8(0x2a1)][_0x2069a8(0x273)],Scene_Battle[_0x2069a8(0x2a1)][_0x2069a8(0x273)]=function(){const _0x4639ae=_0x2069a8;this[_0x4639ae(0x2f2)]&&this[_0x4639ae(0x2a8)](),VisuMZ['ItemAmplifySkills'][_0x4639ae(0x30d)][_0x4639ae(0x2e6)](this);},VisuMZ['ItemAmplifySkills'][_0x2069a8(0x231)]=Scene_Battle['prototype']['onActorCancel'],Scene_Battle[_0x2069a8(0x2a1)]['onActorCancel']=function(){const _0x10c6d2=_0x2069a8;this[_0x10c6d2(0x2f2)]?(this[_0x10c6d2(0x32b)][_0x10c6d2(0x226)](),this[_0x10c6d2(0x27a)][_0x10c6d2(0x33a)](),this[_0x10c6d2(0x27a)][_0x10c6d2(0x2d7)](),this[_0x10c6d2(0x27a)]['activate']()):'MyEfn'==='MyEfn'?VisuMZ[_0x10c6d2(0x2b4)][_0x10c6d2(0x231)]['call'](this):this['confirmItemAmplify']();},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x24c)]=Scene_Battle[_0x2069a8(0x2a1)][_0x2069a8(0x29f)],Scene_Battle['prototype'][_0x2069a8(0x29f)]=function(){const _0x51b2b3=_0x2069a8;this[_0x51b2b3(0x2f2)]&&this[_0x51b2b3(0x2a8)](),VisuMZ['ItemAmplifySkills'][_0x51b2b3(0x24c)]['call'](this);},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x32a)]=Scene_Battle[_0x2069a8(0x2a1)][_0x2069a8(0x2d4)],Scene_Battle['prototype'][_0x2069a8(0x2d4)]=function(){const _0x20acfe=_0x2069a8;if(this[_0x20acfe(0x2f2)]){this['_enemyWindow'][_0x20acfe(0x226)](),this[_0x20acfe(0x27a)][_0x20acfe(0x33a)](),this[_0x20acfe(0x27a)][_0x20acfe(0x2d7)](),this[_0x20acfe(0x27a)][_0x20acfe(0x21a)]();if(this[_0x20acfe(0x32b)]){if(_0x20acfe(0x2d6)!=='UceDg')this['_actorWindow'][_0x20acfe(0x226)]();else{const _0x2e2030=_0x1359e8(_0x2e1e8d['$1']);_0x2e2030<_0x172b80?(_0x3c7ea3(_0x20acfe(0x22c)[_0x20acfe(0x2ad)](_0x55d8d1,_0x2e2030,_0x59c41c)),_0x278803[_0x20acfe(0x21d)]()):_0x4c6ec7=_0x463e0a['max'](_0x2e2030,_0x1cc71d);}}}else VisuMZ[_0x20acfe(0x2b4)][_0x20acfe(0x32a)][_0x20acfe(0x2e6)](this);},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x308)]=Scene_Battle[_0x2069a8(0x2a1)][_0x2069a8(0x299)],Scene_Battle[_0x2069a8(0x2a1)][_0x2069a8(0x299)]=function(){const _0x1c85a2=_0x2069a8;this['_itemAmplifyMode']?this['cancelItemAmplify']():VisuMZ[_0x1c85a2(0x2b4)]['Scene_Battle_onItemCancel']['call'](this);},Scene_Battle[_0x2069a8(0x2a1)][_0x2069a8(0x219)]=function(){const _0x3fda44=_0x2069a8;this['_itemAmplifyMode']=![];if(this[_0x3fda44(0x2f0)]['currentSymbol']()===_0x3fda44(0x323))this['_skillWindow'][_0x3fda44(0x33a)](),this['_skillWindow']['visible']=!![],this[_0x3fda44(0x257)][_0x3fda44(0x2bf)]=!![];else this['_actorCommandWindow'][_0x3fda44(0x2e5)]()===_0x3fda44(0x304)&&('JaVvs'===_0x3fda44(0x215)?this[_0x3fda44(0x2f0)]['active']=!![]:_0x2b3549+=_0x3a0086(_0x56f415['$1'])*0.01);this[_0x3fda44(0x27a)][_0x3fda44(0x275)](),this[_0x3fda44(0x27a)][_0x3fda44(0x245)](),this[_0x3fda44(0x27a)]['hide'](),this[_0x3fda44(0x27a)][_0x3fda44(0x2c6)](),this[_0x3fda44(0x257)]['visible']&&(this[_0x3fda44(0x2fd)][_0x3fda44(0x21e)]=!![],this[_0x3fda44(0x257)][_0x3fda44(0x2a0)](),Imported['VisuMZ_3_FrontviewBattleUI']&&(_0x3fda44(0x2db)==='RQFTP'?this[_0x3fda44(0x257)]['showFrontviewUiShopStatusWindow']():this[_0x3fda44(0x1f8)]=_0x266e00));},VisuMZ[_0x2069a8(0x2b4)]['Scene_Battle_endCommandSelection']=Scene_Battle['prototype'][_0x2069a8(0x28b)],Scene_Battle['prototype']['endCommandSelection']=function(){const _0x1973a5=_0x2069a8;VisuMZ['ItemAmplifySkills'][_0x1973a5(0x2c2)][_0x1973a5(0x2e6)](this),this[_0x1973a5(0x2f2)]=![],this[_0x1973a5(0x27a)]['clearAmplifySkill']();},Window_BattleItem['ITEM_AMPLIFY_SETTINGS']={'confirmIcon':VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x238)][_0x2069a8(0x2d8)][_0x2069a8(0x2fc)]??0x4f,'amplifyBgColor1':VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x238)][_0x2069a8(0x2d8)][_0x2069a8(0x2e0)]??0x5,'amplifyBgColor2':VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x238)][_0x2069a8(0x2d8)]['BgColor2']??0xd},Window_BattleItem[_0x2069a8(0x2a1)][_0x2069a8(0x2e2)]=function(_0xed3eec){const _0x487fdc=_0x2069a8;this[_0x487fdc(0x1f8)]=_0xed3eec;},Window_BattleItem[_0x2069a8(0x2a1)][_0x2069a8(0x275)]=function(){this['_amplifySkill']=null;},VisuMZ[_0x2069a8(0x2b4)]['Window_BattleItem_includes']=Window_BattleItem[_0x2069a8(0x2a1)]['includes'],Window_BattleItem[_0x2069a8(0x2a1)][_0x2069a8(0x243)]=function(_0x4a5d6e){const _0x52ae1c=_0x2069a8;if(this[_0x52ae1c(0x1f8)]){if(_0x52ae1c(0x330)!==_0x52ae1c(0x330))this[_0x52ae1c(0x2fd)]&&this['_helpWindow'][_0x52ae1c(0x202)](_0x3690fe['ITEM_AMPLIFY_HELP']),this[_0x52ae1c(0x2e1)]&&this[_0x52ae1c(0x2e1)][_0x52ae1c(0x213)](this[_0x52ae1c(0x1f8)]);else return DataManager[_0x52ae1c(0x210)](_0x4a5d6e,this[_0x52ae1c(0x1f8)]);}else return VisuMZ[_0x52ae1c(0x2b4)][_0x52ae1c(0x201)][_0x52ae1c(0x2e6)](this,_0x4a5d6e);},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x2ae)]=Window_BattleItem[_0x2069a8(0x2a1)][_0x2069a8(0x34c)],Window_BattleItem[_0x2069a8(0x2a1)][_0x2069a8(0x34c)]=function(_0x87e843){const _0x582940=_0x2069a8;if(this[_0x582940(0x1f8)]){if(_0x582940(0x2b6)==='hTGQX'){const _0x494f05=BattleManager[_0x582940(0x33d)]()[_0x582940(0x354)](this['_amplifySkill']);if(_0x494f05[_0x582940(0x243)](_0x87e843))return!![];const _0x26a2e7=DataManager[_0x582940(0x235)](this[_0x582940(0x1f8)]),_0x29112c=DataManager[_0x582940(0x28d)](this[_0x582940(0x1f8)]),_0x38fe1f=Math['max'](_0x26a2e7,_0x29112c),_0x4d5550=Math[_0x582940(0x237)](_0x26a2e7,_0x29112c);if(!_0x87e843)return _0x494f05[_0x582940(0x352)]>=_0x4d5550;else{if($gameParty[_0x582940(0x310)](_0x87e843)<=0x0){if('ppeyf'!==_0x582940(0x319))_0x264db7[_0x582940(0x24f)](_0x3c782c,_0x16b904);else return![];}else return'ODKYL'!==_0x582940(0x200)?_0x494f05[_0x582940(0x352)]<Math[_0x582940(0x1fc)](_0x38fe1f,_0x4d5550):this[_0x582940(0x2c7)][_0x5030e4];}}else{const _0x25845b=_0x3a7811[_0x582940(0x2b4)]['RegExp'],_0xc80771=this[_0x582940(0x307)]()['getItemAmplifiesForSkill'](this[_0x582940(0x23d)]());for(const _0x2a9af3 of _0xc80771){const _0x2e96b0=_0x2a9af3?_0x2a9af3[_0x582940(0x33c)]||'':'';_0x2e96b0[_0x582940(0x204)](_0x25845b['AmplifyHitRate'])&&(_0x18ed04+=_0x462e1f(_0x41bbbb['$1'])*0.01);}}}return VisuMZ[_0x582940(0x2b4)][_0x582940(0x2ae)][_0x582940(0x2e6)](this,_0x87e843);},VisuMZ['ItemAmplifySkills'][_0x2069a8(0x2d2)]=Window_BattleItem[_0x2069a8(0x2a1)][_0x2069a8(0x2a3)],Window_BattleItem['prototype'][_0x2069a8(0x2a3)]=function(){const _0xe8650c=_0x2069a8;if(this['_amplifySkill'])return![];return VisuMZ[_0xe8650c(0x2b4)][_0xe8650c(0x2d2)][_0xe8650c(0x2e6)](this);},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x25e)]=Window_ItemList[_0x2069a8(0x2a1)]['makeItemList'],Window_ItemList['prototype']['makeItemList']=function(){const _0x37c594=_0x2069a8;VisuMZ[_0x37c594(0x2b4)][_0x37c594(0x25e)]['call'](this);if(this[_0x37c594(0x1f8)]){if(_0x37c594(0x240)===_0x37c594(0x242))return this[_0x37c594(0x2cd)][_0x10275d['id']];else{this['_data'][_0x37c594(0x331)](null),this[_0x37c594(0x26d)][_0x37c594(0x2b3)](null);if(Imported['VisuMZ_3_SideviewBattleUI']&&BattleManager[_0x37c594(0x2f8)]()){if('eFXYa'==='FDOFm'){if(!_0x255f98)return;if(!_0x1bf051)return;this[_0x37c594(0x322)](_0x142058,_0xb0cd2d),this[_0x37c594(0x2ca)](_0x1bb576,_0x2cf024),this[_0x37c594(0x208)](_0x2e182b,_0x317b9b);}else this['adjustSideviewUiWidth'](),this[_0x37c594(0x20f)](),this['updateSideviewUiPosition']();}Imported[_0x37c594(0x206)]&&BattleManager['isUsingFrontviewUiLayout']()&&this[_0x37c594(0x224)]();}}},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x2c9)]=Window_ItemList[_0x2069a8(0x2a1)]['drawItem'],Window_ItemList[_0x2069a8(0x2a1)][_0x2069a8(0x20e)]=function(_0x31a383){const _0x9b7e01=_0x2069a8,_0x3f2914=this[_0x9b7e01(0x29d)](_0x31a383);if(this['_amplifySkill']&&_0x3f2914===null)_0x9b7e01(0x341)!=='SIWAh'?this['adjustFrontviewUiHeight']():this[_0x9b7e01(0x340)](_0x31a383);else{if('qvgDV'==='LTosl'){_0x493a1e(_0x9b7e01(0x294)[_0x9b7e01(0x2ad)](_0x1a9d29[_0x9b7e01(0x2f5)])),_0x20a9a8[_0x9b7e01(0x21d)]();return;}else VisuMZ[_0x9b7e01(0x2b4)][_0x9b7e01(0x2c9)]['call'](this,_0x31a383);}},Window_ItemList[_0x2069a8(0x2a1)][_0x2069a8(0x340)]=function(_0xc64f39){const _0x5ef923=_0x2069a8,_0x352bcb=this[_0x5ef923(0x31f)](_0xc64f39);this[_0x5ef923(0x223)](this[_0x5ef923(0x34c)](null)),this[_0x5ef923(0x2de)]();const _0x414aae=_0x352bcb['y']+(this[_0x5ef923(0x27d)]()-ImageManager['iconHeight'])/0x2,_0x566fbf=ImageManager['iconWidth']+0x4,_0x513454=Math['max'](0x0,_0x352bcb['width']-_0x566fbf),_0x46cbc9=Window_BattleItem[_0x5ef923(0x25c)][_0x5ef923(0x27e)],_0x4f3b99=TextManager[_0x5ef923(0x26e)];this['drawIcon'](_0x46cbc9,_0x352bcb['x'],_0x414aae),this[_0x5ef923(0x342)](_0x4f3b99,_0x352bcb['x']+_0x566fbf,_0x352bcb['y'],_0x513454),this['changePaintOpacity'](!![]);},VisuMZ[_0x2069a8(0x2b4)]['Window_BattleItem_drawItemBackground']=Window_BattleItem[_0x2069a8(0x2a1)][_0x2069a8(0x2a5)],Window_BattleItem['prototype'][_0x2069a8(0x2a5)]=function(_0x549b0c){const _0x51b7fc=_0x2069a8;if(this[_0x51b7fc(0x1f8)]&&BattleManager[_0x51b7fc(0x33d)]()){const _0x25d79a=this[_0x51b7fc(0x29d)](_0x549b0c);if(!!_0x25d79a&&BattleManager[_0x51b7fc(0x33d)]()[_0x51b7fc(0x2e4)](_0x25d79a,this[_0x51b7fc(0x1f8)])){if(_0x51b7fc(0x248)!==_0x51b7fc(0x228)){this[_0x51b7fc(0x2d3)](_0x549b0c);return;}else{const _0x50e876=/^\d+$/[_0x51b7fc(0x2b0)](_0xbf26d3);let _0xf8e14=-0x1;_0x50e876?_0xf8e14=_0x1615e3(_0xdcd9c7)[_0x51b7fc(0x27b)](0x0,0x7):_0xf8e14=_0x521e84['getParamIdWithName'](_0x60d977),_0xf8e14>=0x0&&_0x3d0bea[_0x51b7fc(0x221)](_0xf8e14)&&_0x302fac['removeBuff'](_0xf8e14);}}}VisuMZ['ItemAmplifySkills'][_0x51b7fc(0x2eb)][_0x51b7fc(0x2e6)](this,_0x549b0c);},Window_BattleItem[_0x2069a8(0x2a1)][_0x2069a8(0x2d3)]=function(_0x1c9ce2){const _0x3399c4=_0x2069a8,_0x250c08=Window_BattleItem[_0x3399c4(0x25c)],_0x28e4ae=ColorManager['getColor'](_0x250c08['amplifyBgColor1']),_0x324f08=ColorManager[_0x3399c4(0x30c)](_0x250c08['amplifyBgColor2']),_0x2538e1=this['itemRect'](_0x1c9ce2),_0xe4b0f9=_0x2538e1['x'],_0x2c0e5d=_0x2538e1['y'],_0x43fc52=_0x2538e1[_0x3399c4(0x344)],_0x33a2a8=_0x2538e1[_0x3399c4(0x22f)];this['contentsBack'][_0x3399c4(0x2b8)](_0xe4b0f9,_0x2c0e5d,_0x43fc52,_0x33a2a8,_0x28e4ae,_0x324f08,!![]),this[_0x3399c4(0x329)]['strokeRect'](_0xe4b0f9,_0x2c0e5d,_0x43fc52,_0x33a2a8,_0x28e4ae);},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x2cb)]=Window_ItemList['prototype']['updateHelp'],Window_ItemList['prototype']['updateHelp']=function(){const _0x287bc4=_0x2069a8;if(this['_amplifySkill']&&this[_0x287bc4(0x23d)]()===null)this[_0x287bc4(0x26a)]();else{if(_0x287bc4(0x263)===_0x287bc4(0x263))VisuMZ[_0x287bc4(0x2b4)]['Window_ItemList_updateHelp'][_0x287bc4(0x2e6)](this);else{_0x49e75c=_0x42a172[_0x287bc4(0x312)]()['trim']();switch(_0xb6f901){case _0x287bc4(0x2b9):case _0x287bc4(0x1f4):case'HP':return 0x0;case _0x287bc4(0x250):case _0x287bc4(0x21f):case'MP':return 0x1;case _0x287bc4(0x24b):return 0x2;case'DEF':return 0x3;case'MAT':return 0x4;case _0x287bc4(0x233):return 0x5;case _0x287bc4(0x298):return 0x6;case _0x287bc4(0x2b1):return 0x7;}return-0x1;}}},Window_ItemList[_0x2069a8(0x2a1)][_0x2069a8(0x26a)]=function(){const _0x50dfac=_0x2069a8;this[_0x50dfac(0x2fd)]&&this[_0x50dfac(0x2fd)][_0x50dfac(0x202)](TextManager[_0x50dfac(0x218)]),this['_statusWindow']&&this[_0x50dfac(0x2e1)]['setItem'](this[_0x50dfac(0x1f8)]);},VisuMZ[_0x2069a8(0x2b4)][_0x2069a8(0x249)]=Window_ShopStatus[_0x2069a8(0x2a1)][_0x2069a8(0x332)],Window_ShopStatus[_0x2069a8(0x2a1)][_0x2069a8(0x332)]=function(){const _0x368baa=_0x2069a8;let _0xed018d=window[_0x368baa(0x34f)];window['amplify']=0x1;const _0x4200a1=VisuMZ[_0x368baa(0x2b4)][_0x368baa(0x249)]['call'](this);return window['amplify']=_0xed018d,_0x4200a1;};