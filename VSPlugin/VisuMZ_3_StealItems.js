//=============================================================================
// VisuStella MZ - Steal Items
// VisuMZ_3_StealItems.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_StealItems = true;

var VisuMZ = VisuMZ || {};
VisuMZ.StealItems = VisuMZ.StealItems || {};
VisuMZ.StealItems.version = 1.08;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.08] [StealItems]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Steal_Items_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Thieves with the ability to steal items from enemies aren't an uncommon
 * class in RPG's. This plugin lets you set up enemies with items that can be
 * stolen from with different types of effects that can occur upon stealing.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Create a pool of stealable items for each enemy.
 * * Make skills or items that have stealing properties attached to them.
 * * Some skills/items can be dedicated towards stealing specific types of loot
 *   (Gold, Items, Weapons, and/or Armor).
 * * Have different success rates for skills and items.
 * * Actors can gain trait effects that increase or decrease success rates.
 * * Enemies can gain resistance towards stealing.
 * * JavaScript uses can enable special effects to occur upon successfully
 *   stealing, failing, or emptying out an enemy's loot.
 * * Automatically translate drop items from the database into stealable loot.
 * * If weapons or armors are stolen, they can debuff the enemy and lower their
 *   parameters by their base bonuses.
 * * Use a Snatch effect to directly target a specific item to be stolen from
 *   the enemy.
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
 * Gold and Item Drop Removals
 * 
 * This is an optional effect that can be enabled from the Plugin Parameters.
 * 
 * If you have enabled Automatic Gold Drop and Item Drop inclusions from the
 * plugin parameters as well as enabled their respective "Loot Removal" plugin
 * parameters, then once the gold/items have been stolen a target enemy, that
 * enemy will not drop the specific gold value or specific item drop during the
 * victory aftermath phase.
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
 * === Steal Action-Related Notetags ===
 * 
 * The following are notetags that are used to place on skills/items that you
 * want to have stealing properties for.
 * 
 * ---
 *
 * <Steal>
 * <Steal type>
 * <Steal type, type, type>
 *
 * - Used for: Skill, Item Notetags
 * - Gives the skill/item stealing properties.
 * - Replace 'type' with 'All', 'Gold', 'Item', 'Weapon', 'Armor' to restrict
 *   steal targets to those types.
 *
 * ---
 *
 * <Steal type: x%>
 *
 * - Used for: Skill, Item Notetags
 * - Gives the skill/item stealing properties with increased/decreased
 *   multiplicative success rates.
 * - Replace 'type' with 'All', 'Gold', 'Item', 'Weapon', 'Armor' to restrict
 *   steal targets to those types.
 * - Replace 'x' with a number representing the percent value to alter the
 *   success rate multiplicatively by.
 * 
 * ---
 *
 * <Steal type: +x%>
 * <Steal type: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - Gives the skill/item stealing properties with increased/decreased
 *   additive success rates.
 * - Replace 'type' with 'All', 'Gold', 'Item', 'Weapon', 'Armor' to restrict
 *   steal targets to those types.
 * - Replace 'x' with a number representing the percent value to alter the
 *   success rate additively by.
 *
 * ---
 * 
 * <Snatch>
 * <Targeting Steal>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the steal action from targeting a random item from the stealable
 *   types pool to a specific item that the player can select.
 * - If the snatch attempt fails, it will not attempt to steal other items.
 * - Both the <Snatch> and <Targeting Steal> notetags do the same thing.
 * - This does not work with abilities that target multiple enemies, random
 *   enemies, or actors.
 * - Use this in addition to the <Steal>, <Steal type>, or
 *   <Steal type, type, type> notetags as this does not have any steal
 *   properties on its own.
 * 
 * ---
 * 
 * === JavaScript Notetags: Steal Action-Related ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * apply special effects for steal-related skills/items.
 * 
 * ---
 *
 * <JS Steal Rate>
 *  code
 *  code
 *  rate = code;
 * </JS Steal Rate>
 *
 * - Used for: Skill, Item Notetags
 * - Uses JavaScript code to determine the success rate of the steal action.
 *   - The 'rate' value is multiplied against the success rate of the target
 *     item being stolen. This is a multiplicative stack.
 *   - This means an item's default steal rate of 5% and a 200% steal rate on
 *     this notetag's 'rate' variable will yield 10%. Alternatively, if the
 *     default steal rate is 0%, it will yield 0% regardless of this notetag's
 *     'rate' variable value.
 * - This applies to all steal target types.
 * - The 'rate' variable starts at a value equal to the current success rate.
 * - The 'rate' variable will be returned as the declared success rate.
 * - The 'user' variable represents the user who will perform the skill/item.
 * - The 'target' variable represents the target who was stolen from.
 *
 * ---
 *
 * <JS Steal Gold Rate>
 *  code
 *  code
 *  rate = code;
 * </JS Steal Gold Rate>
 *
 * - Used for: Skill, Item Notetags
 * - Uses JavaScript code to determine the success rate of the steal action.
 *   - The 'rate' value is multiplied against the success rate of the target
 *     item being stolen. This is a multiplicative stack.
 *   - This means an item's default steal rate of 5% and a 200% steal rate on
 *     this notetag's 'rate' variable will yield 10%. Alternatively, if the
 *     default steal rate is 0%, it will yield 0% regardless of this notetag's
 *     'rate' variable value.
 * - This applies to only the stealable gold type.
 * - The 'rate' variable starts at a value equal to the current success rate.
 * - The 'rate' variable will be returned as the declared success rate.
 * - The 'user' variable represents the user who will perform the skill/item.
 * - The 'target' variable represents the target who was stolen from.
 *
 * ---
 *
 * <JS Steal Item Rate>
 *  code
 *  code
 *  rate = code;
 * </JS Steal Item Rate>
 *
 * - Used for: Skill, Item Notetags
 * - Uses JavaScript code to determine the success rate of the steal action.
 *   - The 'rate' value is multiplied against the success rate of the target
 *     item being stolen. This is a multiplicative stack.
 *   - This means an item's default steal rate of 5% and a 200% steal rate on
 *     this notetag's 'rate' variable will yield 10%. Alternatively, if the
 *     default steal rate is 0%, it will yield 0% regardless of this notetag's
 *     'rate' variable value.
 * - This applies to only the stealable item type.
 * - The 'rate' variable starts at a value equal to the current success rate.
 * - The 'rate' variable will be returned as the declared success rate.
 * - The 'user' variable represents the user who will perform the skill/item.
 * - The 'target' variable represents the target who was stolen from.
 *
 * ---
 *
 * <JS Steal Weapon Rate>
 *  code
 *  code
 *  rate = code;
 * </JS Steal Weapon Rate>
 *
 * - Used for: Skill, Item Notetags
 * - Uses JavaScript code to determine the success rate of the steal action.
 *   - The 'rate' value is multiplied against the success rate of the target
 *     item being stolen. This is a multiplicative stack.
 *   - This means an item's default steal rate of 5% and a 200% steal rate on
 *     this notetag's 'rate' variable will yield 10%. Alternatively, if the
 *     default steal rate is 0%, it will yield 0% regardless of this notetag's
 *     'rate' variable value.
 * - This applies to only the stealable weapon type.
 * - The 'rate' variable starts at a value equal to the current success rate.
 * - The 'rate' variable will be returned as the declared success rate.
 * - The 'user' variable represents the user who will perform the skill/item.
 * - The 'target' variable represents the target who was stolen from.
 *
 * ---
 *
 * <JS Steal Armor Rate>
 *  code
 *  code
 *  rate = code;
 * </JS Steal Armor Rate>
 *
 * - Used for: Skill, Item Notetags
 * - Uses JavaScript code to determine the success rate of the steal action.
 *   - The 'rate' value is multiplied against the success rate of the target
 *     item being stolen. This is a multiplicative stack.
 *   - This means an item's default steal rate of 5% and a 200% steal rate on
 *     this notetag's 'rate' variable will yield 10%. Alternatively, if the
 *     default steal rate is 0%, it will yield 0% regardless of this notetag's
 *     'rate' variable value.
 * - This applies to only the stealable armor type.
 * - The 'rate' variable starts at a value equal to the current success rate.
 * - The 'rate' variable will be returned as the declared success rate.
 * - The 'user' variable represents the user who will perform the skill/item.
 * - The 'target' variable represents the target who was stolen from.
 *
 * ---
 *
 * <JS On Steal Success>
 *  code
 *  code
 *  code
 * </JS On Steal Success>
 *
 * - Used for: Skill, Item Notetags
 * - Runs the inserted JavaScript code upon successfully stealing.
 * - The 'user' variable represents the user who will perform the skill/item.
 * - The 'target' variable represents the target who was stolen from.
 * - The 'item' variable represents the item that was stolen if there is one.
 *   This will return a null value if gold was stolen instead.
 * - The 'gold' variable represents the gold quantity that was stolen if any.
 *   This will return a 0 value if there was no gold stolen.
 *
 * ---
 *
 * <JS On Steal Failure>
 *  code
 *  code
 *  code
 * </JS On Steal Failure>
 *
 * - Used for: Skill, Item Notetags
 * - Runs the inserted JavaScript code upon failing a stealth attempt.
 * - The 'user' variable represents the user who will perform the skill/item.
 * - The 'target' variable represents the target who was the theft target.
 *
 * ---
 *
 * <JS On Steal Empty>
 *  code
 *  code
 *  code
 * </JS On Steal Empty>
 *
 * - Used for: Skill, Item Notetags
 * - Runs the inserted JavaScript code if there was nothing to steal.
 * - The 'user' variable represents the user who will perform the skill/item.
 * - The 'target' variable represents the target who was the theft target.
 *
 * ---
 * 
 * === Steal Loot Setup-Related Notetags ===
 * 
 * The following notetags are made for enemies and used to set up the loot that
 * can be stolen.
 * 
 * ---
 *
 * <Steal Gold value: x%>
 * 
 * <Steal Item id: x%>
 * <Steal Item name: x%>
 * 
 * <Steal Weapon id: x%>
 * <Steal Weapon name: x%>
 * 
 * <Steal Armor id: x%>
 * <Steal Armor name: x%>
 *
 * - Used for: Enemy Notetags
 * - Sets up droppable loot for the enemy.
 * - When setting up gold loot, replace 'value' with the amount of gold that
 *   will be stolen from this loot entry.
 * - When setting up items, weapons, or armors, replace 'id' with the ID of the
 *   item, weapon, or armor for the loot entry.
 * - When setting up items, weapons, or armors, replace 'name' with the name of
 *   the item, weapon, or armor for the loot entry.
 * - Replace 'x' with a number value representing the base percent chance of
 *   successfully stealing this loot entry.
 * - Insert multiple notetags for multiple loot entries to be stolen.
 *
 * ---
 *
 * <Steal>
 *  Gold value: x%
 * 
 *  Item id: x%
 *  Item name: x%
 * 
 *  Weapon id: x%
 *  Weapon name: x%
 * 
 *  Armor id: x%
 *  Armor name: x%
 * </Steal>
 *
 * - Used for: Enemy Notetags
 * - Sets up a batch setup of droppable loot for the enemy.
 * - When setting up gold loot, replace 'value' with the amount of gold that
 *   will be stolen from this loot entry.
 * - When setting up items, weapons, or armors, replace 'id' with the ID of the
 *   item, weapon, or armor for the loot entry.
 * - When setting up items, weapons, or armors, replace 'name' with the name of
 *   the item, weapon, or armor for the loot entry.
 * - Replace 'x' with a number value representing the base percent chance of
 *   successfully stealing this loot entry.
 * - Insert/remove multiple copies of the loot entries inside the <Steal>
 *   notetags to add more or reduce entries.
 *
 * ---
 * 
 * === Steal Rate Traits-Related Notetags ===
 * 
 * The following notetags are made for trait objects that can alter the
 * success rates of steal skills/items.
 * 
 * ---
 *
 * <Steal Rate: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Alters the steal rate for the stealing actor multiplicatively.
 * - Replace 'x' with a number representing the percent value to alter the
 *   success rate multiplicatively by.
 * 
 * ---
 *
 * <Steal Rate: +x%>
 * <Steal Rate: -x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Alters the steal rate for the stealing actor multiplicatively.
 * - Replace 'x' with a number representing the percent value to alter the
 *   success rate additively by.
 *
 * ---
 *
 * <Steal Resist: +x%>
 * <Steal Resist: -x%>
 *
 * - Used for: Enemy Notetags
 * - Alters the steal resistance for enemies. Higher numbers mean higher steal
 *   resistance.
 * - Replace 'x' with a number representing the percent value to alter the
 *   steal resistance by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Automatic Settings
 * ============================================================================
 *
 * Automatic settings pertaining to the steal mechanics of the game.
 *
 * ---
 *
 * Settings
 * 
 *   Add Gold Drop?:
 *   - Automatically include enemy gold drop into stealable items?
 * 
 *     Success Rate:
 *     - If automatically include gold drop, what is the steal rate?
 *     - Use a number between 0 and 1.
 * 
 *     Loot Removal:
 *     - If using automatic gold, remove the rewards from the enemy gold
 *       when defeated?
 * 
 *   Add Item Drops?:
 *   - Automatically include enemy item drop into stealable items?
 * 
 *     Success Modifier:
 *     - If automatically include item drops, how much do you want to alter
 *       their drop modifiers by?
 * 
 *     Loot Removal:
 *     - If using automatic drops, remove the rewards from the enemy items
 *       when defeated?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle Log Settings
 * ============================================================================
 *
 * Settings pertaining to the steal-related messages that appear in the Battle
 * Log Window.
 *
 * ---
 *
 * Settings
 * 
 *   Show Messages:
 *   - Show messages regarding stolen items in the Battle Log window?
 * 
 *   Steal Item:
 *   - Message displayed when stealing an item.
 *   - %1 - Item's Name, %2 - Item's Icon
 * 
 *   Steal Gold:
 *   - Message displayed when stealing gold.
 *   - %1 - Gold Name, %2 - Gold Amount
 * 
 *   Steal Fail:
 *   - Message displayed when a steal attempt fails.
 * 
 *   Steal Empty:
 *   - Message displayed when there is nothing to steal.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Special game mechanics related to stealing.
 *
 * ---
 *
 * General
 * 
 *   Equip Debuff:
 *   - When weapons/armors are stolen, decrease the enemy's parameters based
 *     on the weapon/armor parameters?
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Bonus Steal %:
 *   - Code used to determine an additive bonus steal rate.
 * 
 *   JS: Steal Resist %:
 *   - Code used to determine an additive steal resistance.
 * 
 *   JS: On Steal Success:
 *   - What kind of code do you want to run when stealing succeeds?
 * 
 *   JS: On Steal Failure:
 *   - What kind of code do you want to run when stealing fails?
 * 
 *   JS: On Steal Empty:
 *   - What kind of code do you want to run when there is nothing to steal?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Popup Settings
 * ============================================================================
 *
 * Popup settings related to stealing.
 *
 * ---
 *
 * Success
 * 
 * Failure
 * 
 * Empty
 * 
 *   Text:
 *   - Text displayed upon stealing an item.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 * 
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Snatch Settings
 * ============================================================================
 *
 * These are the settings for the effect when used with the <Snatch> notetag.
 * When snatching an item, the player can target a specific item in the enemy's
 * loot to be stolen from. The success rates and lists of items will be visible
 * at the expense of only being able to steal just that item.
 *
 * ---
 *
 * Gold
 * 
 *   Icon:
 *   - Icon used to represent gold.
 *   - Ignore if VisuMZ_0_CoreEngine is present.
 * 
 *   Name Format:
 *   - Name format on how gold is displayed.
 *   - %1 - Icon, %2 - Quantity, %3 - Current Name
 * 
 *   Help Text:
 *   - Text that's displayed in the help window when gold is selected in the
 *     Snatch window.
 *
 * ---
 *
 * Success Rate
 * 
 *   Display Success Rate:
 *   - Display success rates in the Snatch window?
 * 
 *   Already Stolen:
 *   - Text displayed when an item has already been stolen.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * Determine the sound effects played related to stealing.
 *
 * ---
 *
 * Successful Gold Steal
 * 
 * Successful Item Steal
 * 
 * Successful Weapon Steal
 * 
 * Successful Armor Steal
 * 
 * Failure
 * 
 * Empty
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
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
 * Version 1.08: April 18, 2024
 * * Bug Fixes!
 * ** Added fail safe for action crash during Active TPB/ATB. Fix by Olivia.
 * 
 * Version 1.07: June 9, 2022
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.06: January 13, 2022
 * * Compatibility Update!
 * ** Better compatibility update with Extra Enemy Drops. Update made by Irina.
 * 
 * Version 1.05: July 23, 2021
 * * Bug Fixes!
 * ** Fixed <JS Steal Armor Rate> notetag. It did not work properly.
 * * Documentation Update!
 * ** Added notes for the various <JS Steal Rate> notetags:
 * *** The 'rate' value is multiplied against the success rate of the target
 *     item being stolen. This is a multiplicative stack.
 * *** This means an item's default steal rate of 5% and a 200% steal rate on
 *     this notetag's 'rate' variable will yield 10%. Alternatively, if the
 *     default steal rate is 0%, it will yield 0% regardless of this notetag's
 *     'rate' variable value.
 * 
 * Version 1.04: July 9, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.03: June 4, 2021
 * * Bug Fixes!
 * ** <JS Steal Rate> should now work properly. Fix by Arisu.
 * * Documentation Update!
 * ** Added clarity to <JS Steal Rate> to mention it affects all types.
 * ** Help file updated for new features.
 * * New Features!
 * ** New JS notetags added by Arisu.
 * *** <JS Steal Gold Rate>
 * *** <JS Steal Item Rate>
 * *** <JS Steal Weapon Rate>
 * *** <JS Steal Armor Rate>
 * **** Similar to the <JS Steal Rate> notetag but works only for specific
 *      categories of items.
 * 
 * Version 1.02: April 2, 2021
 * * Feature Update!
 * ** Success rate calculation should no longer be skewed by JavaScript's float
 *    value math quirks. Update made by Yanfly.
 * 
 * Version 1.01: December 11, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 *
 * Version 1.00: December 9, 2020
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
 * @param StealItems
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Auto:struct
 * @text Automatic Settings
 * @type struct<Auto>
 * @desc Automatic settings pertaining to the steal mechanics of the game.
 * @default {"AutoGold:eval":"true","GoldRate:num":"0.50","GoldRemoval:eval":"true","AutoItem:eval":"true","ItemRate:num":"1.50","ItemRemoval:eval":"true"}
 *
 * @param BattleLog:struct
 * @text Battle Log Settings
 * @type struct<BattleLog>
 * @desc Settings pertaining to the steal-related messages that appear in the Battle Log Window.
 * @default {"ShowMessages:eval":"true","StealItem:str":"Stole %2%1!","StealGold:str":"Stole %2 \\C[16]%1\\C[0]!","StealFail:str":"Steal attempt unsuccessful!","StealEmpty:str":"Nothing to steal!"}
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Special game mechanics related to stealing.
 * @default {"General":"","EquipDebuff:eval":"true","JavaScript":"","JsBonusSteal:func":"\"// Declare Variables\\nconst user = this;\\nlet bonusRate = 0;\\n\\n// Calculate Bonus Rate\\nbonusRate = (user.luk / (512 + user.luk)) / 3;\\n\\n// Return Bonus Rate\\nreturn bonusRate;\"","JsStealResist:func":"\"// Declare Variables\\nconst user = this;\\nlet resistRate = 0;\\n\\n// Calculate Resist Rate\\nresistRate = (user.luk / (512 + user.luk)) / 8;\\n\\n// Return Resist Rate\\nreturn resistRate;\"","JsOnStealSuccess:func":"\"// Declare Variables\\nconst user = arguments[0];\\nconst target = arguments[1];\\nconst a = user;\\nconst b = target;\\n\\n// Perform Action\\n\"","JsOnStealFail:func":"\"// Declare Variables\\nconst user = arguments[0];\\nconst target = arguments[1];\\nconst a = user;\\nconst b = target;\\n\\n// Perform Action\\n\"","JsOnStealEmpty:func":"\"// Declare Variables\\nconst user = arguments[0];\\nconst target = arguments[1];\\nconst a = user;\\nconst b = target;\\n\\n// Perform Action\\n\""}
 *
 * @param Popup:struct
 * @text Popup Settings
 * @type struct<Popup>
 * @desc Popup settings related to stealing.
 * @default {"Success":"","SuccessPopupText:str":"STOLEN","SuccessItemName:eval":"true","SuccessTextColor:str":"0","SuccessFlashColor:eval":"[255, 255, 255, 0]","SuccessFlashDuration:num":"60","Failure":"","FailurePopupText:str":"FAILED","FailureTextColor:str":"8","FailureFlashColor:eval":"[255, 255, 255, 0]","FailureFlashDuration:num":"60","Empty":"","EmptyPopupText:str":"EMPTY","EmptyTextColor:str":"8","EmptyFlashColor:eval":"[255, 255, 255, 0]","EmptyFlashDuration:num":"60"}
 *
 * @param Snatch:struct
 * @text Snatch Settings
 * @type struct<Snatch>
 * @desc Settings related to the snatch mechanic.
 * @default {"Gold":"","GoldIcon:num":"314","GoldNameFmt:str":"%1%2\\C[16]%3\\C[0]","GoldHelp:json":"\"Steal gold from this target!\"","Success":"","DisplaySuccess:eval":"true","AlreadyStolen:str":"Stolen"}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @type struct<Sound>
 * @desc Determine the sound effects played related to stealing.
 * @default {"Successful":"","SuccessGold":"","gold_name:str":"Shop2","gold_volume:num":"90","gold_pitch:num":"120","gold_pan:num":"0","SuccessItem":"","item_name:str":"Item1","item_volume:num":"90","item_pitch:num":"120","item_pan:num":"0","SuccessWeapon":"","weapon_name:str":"Equip1","weapon_volume:num":"90","weapon_pitch:num":"120","weapon_pan:num":"0","SuccessArmor":"","armor_name:str":"Equip2","armor_volume:num":"90","armor_pitch:num":"120","armor_pan:num":"0","Failure":"","fail_name:str":"Buzzer2","fail_volume:num":"90","fail_pitch:num":"120","fail_pan:num":"0","Empty":"","empty_name:str":"Evasion1","empty_volume:num":"90","empty_pitch:num":"120","empty_pan:num":"0"}
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
 * Auto Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Auto:
 *
 * @param AutoGold:eval
 * @text Add Gold Drop?
 * @parent Auto
 * @type boolean
 * @on Include
 * @off Don't Include
 * @desc Automatically include enemy gold drop into stealable items?
 * @default true
 *
 * @param GoldRate:num
 * @text Success Rate
 * @parent AutoGold:eval
 * @desc If automatically include gold drop, what is the steal rate?
 * Use a number between 0 and 1.
 * @default 0.50
 *
 * @param GoldRemoval:eval
 * @text Loot Removal
 * @parent AutoGold:eval
 * @type boolean
 * @on Remove
 * @off Keep
 * @desc If using automatic gold, remove the rewards from the
 * enemy gold when defeated?
 * @default true
 *
 * @param AutoItem:eval
 * @text Add Item Drops?
 * @parent Auto
 * @type boolean
 * @on Include
 * @off Don't Include
 * @desc Automatically include enemy item drop into stealable items?
 * @default true
 *
 * @param ItemRate:num
 * @text Success Modifier
 * @parent AutoItem:eval
 * @desc If automatically include item drops, how much do you want
 * to alter their drop modifiers by?
 * @default 1.50
 *
 * @param ItemRemoval:eval
 * @text Loot Removal
 * @parent AutoItem:eval
 * @type boolean
 * @on Remove
 * @off Keep
 * @desc If using automatic drops, remove the rewards from the
 * enemy items when defeated?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Battle Log Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BattleLog:
 *
 * @param ShowMessages:eval
 * @text Show Messages
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show messages regarding stolen items in the Battle Log window?
 * @default true
 * 
 * @param StealItem:str
 * @text Steal Item
 * @desc Message displayed when stealing an item.
 * %1 - Item's Name, %2 - Item's Icon
 * @default Stole %2%1!
 * 
 * @param StealGold:str
 * @text Steal Gold
 * @desc Message displayed when stealing gold.
 * %1 - Gold Name, %2 - Gold Amount
 * @default Stole %2 \C[16]%1\C[0]!
 * 
 * @param StealFail:str
 * @text Steal Fail
 * @desc Message displayed when a steal attempt fails.
 * @default Steal attempt unsuccessful!
 * 
 * @param StealEmpty:str
 * @text Steal Empty
 * @desc Message displayed when there is nothing to steal.
 * @default Nothing to steal!
 *
 */
/* ----------------------------------------------------------------------------
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param General
 *
 * @param EquipDebuff:eval
 * @text Equip Debuff
 * @parent General
 * @type boolean
 * @on Debuff
 * @off No Effects
 * @desc When weapons/armors are stolen, decrease the enemy's
 * parameters based on the weapon/armor parameters?
 * @default true
 *
 * @param JavaScript
 *
 * @param JsBonusSteal:func
 * @text JS: Bonus Steal %
 * @parent JavaScript
 * @type note
 * @desc Code used to determine an additive bonus steal rate.
 * @default "// Declare Variables\nconst user = this;\nlet bonusRate = 0;\n\n// Calculate Bonus Rate\nbonusRate = (user.luk / (512 + user.luk)) / 3;\n\n// Return Bonus Rate\nreturn bonusRate;"
 *
 * @param JsStealResist:func
 * @text JS: Steal Resist %
 * @parent JavaScript
 * @type note
 * @desc Code used to determine an additive steal resistance.
 * @default "// Declare Variables\nconst user = this;\nlet resistRate = 0;\n\n// Calculate Resist Rate\nresistRate = (user.luk / (512 + user.luk)) / 8;\n\n// Return Resist Rate\nreturn resistRate;"
 *
 * @param JsOnStealSuccess:func
 * @text JS: On Steal Success
 * @parent JavaScript
 * @type note
 * @desc What kind of code do you want to run when stealing succeeds?
 * @default "// Declare Variables\nconst user = arguments[0];\nconst target = arguments[1];\nconst a = user;\nconst b = target;\n\n// Perform Action\n"
 *
 * @param JsOnStealFail:func
 * @text JS: On Steal Failure
 * @parent JavaScript
 * @type note
 * @desc What kind of code do you want to run when stealing fails?
 * @default "// Declare Variables\nconst user = arguments[0];\nconst target = arguments[1];\nconst a = user;\nconst b = target;\n\n// Perform Action\n"
 *
 * @param JsOnStealEmpty:func
 * @text JS: On Steal Empty
 * @parent JavaScript
 * @type note
 * @desc What kind of code do you want to run when there is nothing to steal?
 * @default "// Declare Variables\nconst user = arguments[0];\nconst target = arguments[1];\nconst a = user;\nconst b = target;\n\n// Perform Action\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Popup:
 *
 * @param Success
 *
 * @param SuccessPopupText:str
 * @text Text
 * @parent Success
 * @desc Text displayed upon successfully stealing an item.
 * @default STOLEN
 *
 * @param SuccessItemName:eval
 * @text Show Item Name
 * @parent SuccessPopupText:str
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Show the name of the item that is stolen, too?
 * @default true
 *
 * @param SuccessTextColor:str
 * @text Text Color
 * @parent Success
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param SuccessFlashColor:eval
 * @text Flash Color
 * @parent Success
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 255, 0]
 * 
 * @param SuccessFlashDuration:num
 * @text Flash Duration
 * @parent Success
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @param Failure
 *
 * @param FailurePopupText:str
 * @text Text
 * @parent Failure
 * @desc Text displayed upon failing a steal attempt.
 * @default FAILED
 *
 * @param FailureTextColor:str
 * @text Text Color
 * @parent Failure
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 8
 *
 * @param FailureFlashColor:eval
 * @text Flash Color
 * @parent Failure
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 255, 0]
 * 
 * @param FailureFlashDuration:num
 * @text Flash Duration
 * @parent Failure
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @param Empty
 *
 * @param EmptyPopupText:str
 * @text Text
 * @parent Empty
 * @desc Text displayed upon there is nothing to steal.
 * @default EMPTY
 *
 * @param EmptyTextColor:str
 * @text Text Color
 * @parent Empty
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 8
 *
 * @param EmptyFlashColor:eval
 * @text Flash Color
 * @parent Empty
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 255, 0]
 * 
 * @param EmptyFlashDuration:num
 * @text Flash Duration
 * @parent Empty
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Snatch Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Snatch:
 *
 * @param Gold
 *
 * @param GoldIcon:num
 * @text Icon
 * @parent Gold
 * @desc Icon used to represent gold.
 * Ignore if VisuMZ_0_CoreEngine is present.
 * @default 314
 *
 * @param GoldNameFmt:str
 * @text Name Format
 * @parent Gold
 * @desc Name format on how gold is displayed.
 * %1 - Icon, %2 - Quantity, %3 - Current Name
 * @default %1%2\C[16]%3\C[0]
 *
 * @param GoldHelp:json
 * @text Help Text
 * @type note
 * @parent Gold
 * @desc Text that's displayed in the help window when gold is selected in the Snatch window.
 * @default "Steal gold from this target!"
 *
 * @param Success
 * @text Success Rate
 *
 * @param DisplaySuccess:eval
 * @text Display Success Rate
 * @parent Success
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display success rates in the Snatch window?
 * @default true
 *
 * @param AlreadyStolen:str
 * @text Already Stolen
 * @parent Success
 * @desc Text displayed when an item has already been stolen.
 * @default Stolen
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param Successful
 * 
 * @param SuccessGold
 * @text Gold Steal
 * @parent Successful
 *
 * @param gold_name:str
 * @text Filename
 * @parent SuccessGold
 * @type file
 * @dir audio/se/
 * @desc Filename of the sound effect played.
 * @default Shop2
 *
 * @param gold_volume:num
 * @text Volume
 * @parent SuccessGold
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param gold_pitch:num
 * @text Pitch
 * @parent SuccessGold
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param gold_pan:num
 * @text Pan
 * @parent SuccessGold
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param SuccessItem
 * @text Item Steal
 * @parent Successful
 *
 * @param item_name:str
 * @text Filename
 * @parent SuccessItem
 * @type file
 * @dir audio/se/
 * @desc Filename of the sound effect played.
 * @default Item1
 *
 * @param item_volume:num
 * @text Volume
 * @parent SuccessItem
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param item_pitch:num
 * @text Pitch
 * @parent SuccessItem
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param item_pan:num
 * @text Pan
 * @parent SuccessItem
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param SuccessWeapon
 * @text Weapon Steal
 * @parent Successful
 *
 * @param weapon_name:str
 * @text Filename
 * @parent SuccessWeapon
 * @type file
 * @dir audio/se/
 * @desc Filename of the sound effect played.
 * @default Equip1
 *
 * @param weapon_volume:num
 * @text Volume
 * @parent SuccessWeapon
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param weapon_pitch:num
 * @text Pitch
 * @parent SuccessWeapon
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param weapon_pan:num
 * @text Pan
 * @parent SuccessWeapon
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param SuccessArmor
 * @text Armor Steal
 * @parent Successful
 *
 * @param armor_name:str
 * @text Filename
 * @parent SuccessArmor
 * @type file
 * @dir audio/se/
 * @desc Filename of the sound effect played.
 * @default Equip2
 *
 * @param armor_volume:num
 * @text Volume
 * @parent SuccessArmor
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param armor_pitch:num
 * @text Pitch
 * @parent SuccessArmor
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param armor_pan:num
 * @text Pan
 * @parent SuccessArmor
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param Failure
 *
 * @param fail_name:str
 * @text Filename
 * @parent Failure
 * @type file
 * @dir audio/se/
 * @desc Filename of the sound effect played.
 * @default Buzzer2
 *
 * @param fail_volume:num
 * @text Volume
 * @parent Failure
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param fail_pitch:num
 * @text Pitch
 * @parent Failure
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param fail_pan:num
 * @text Pan
 * @parent Failure
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param Empty
 *
 * @param empty_name:str
 * @text Filename
 * @parent Empty
 * @type file
 * @dir audio/se/
 * @desc Filename of the sound effect played.
 * @default Evasion1
 *
 * @param empty_volume:num
 * @text Volume
 * @parent Empty
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param empty_pitch:num
 * @text Pitch
 * @parent Empty
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param empty_pan:num
 * @text Pan
 * @parent Empty
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
//=============================================================================

const _0x325142=_0x3965;(function(_0xe466e4,_0x3ae086){const _0x1bd842=_0x3965,_0x16592f=_0xe466e4();while(!![]){try{const _0x408c81=-parseInt(_0x1bd842(0x24e))/0x1*(-parseInt(_0x1bd842(0x309))/0x2)+-parseInt(_0x1bd842(0x2ca))/0x3*(parseInt(_0x1bd842(0x2cc))/0x4)+parseInt(_0x1bd842(0x231))/0x5+parseInt(_0x1bd842(0x26e))/0x6+-parseInt(_0x1bd842(0x31f))/0x7*(-parseInt(_0x1bd842(0x2f3))/0x8)+-parseInt(_0x1bd842(0x24d))/0x9*(parseInt(_0x1bd842(0x2d3))/0xa)+-parseInt(_0x1bd842(0x2fd))/0xb;if(_0x408c81===_0x3ae086)break;else _0x16592f['push'](_0x16592f['shift']());}catch(_0x398915){_0x16592f['push'](_0x16592f['shift']());}}}(_0x5006,0x8a012));var label='StealItems',tier=tier||0x0,dependencies=[_0x325142(0x2f5)],pluginData=$plugins[_0x325142(0x2a5)](function(_0x5440ba){const _0x39b2ff=_0x325142;return _0x5440ba[_0x39b2ff(0x1d3)]&&_0x5440ba[_0x39b2ff(0x1e8)][_0x39b2ff(0x295)]('['+label+']');})[0x0];VisuMZ[label][_0x325142(0x290)]=VisuMZ[label][_0x325142(0x290)]||{},VisuMZ[_0x325142(0x2c5)]=function(_0x1c9a35,_0x59a5b2){const _0x266951=_0x325142;for(const _0xe8aa6b in _0x59a5b2){if(_0xe8aa6b[_0x266951(0x232)](/(.*):(.*)/i)){const _0x36ebe0=String(RegExp['$1']),_0x36d421=String(RegExp['$2'])[_0x266951(0x2ae)]()[_0x266951(0x2af)]();let _0x4c6c4d,_0x15db4c,_0x900fbc;switch(_0x36d421){case _0x266951(0x276):_0x4c6c4d=_0x59a5b2[_0xe8aa6b]!==''?Number(_0x59a5b2[_0xe8aa6b]):0x0;break;case _0x266951(0x2b0):_0x15db4c=_0x59a5b2[_0xe8aa6b]!==''?JSON[_0x266951(0x297)](_0x59a5b2[_0xe8aa6b]):[],_0x4c6c4d=_0x15db4c['map'](_0x3bd9d1=>Number(_0x3bd9d1));break;case _0x266951(0x2b4):_0x4c6c4d=_0x59a5b2[_0xe8aa6b]!==''?eval(_0x59a5b2[_0xe8aa6b]):null;break;case'ARRAYEVAL':_0x15db4c=_0x59a5b2[_0xe8aa6b]!==''?JSON[_0x266951(0x297)](_0x59a5b2[_0xe8aa6b]):[],_0x4c6c4d=_0x15db4c['map'](_0x244ce0=>eval(_0x244ce0));break;case'JSON':_0x4c6c4d=_0x59a5b2[_0xe8aa6b]!==''?JSON[_0x266951(0x297)](_0x59a5b2[_0xe8aa6b]):'';break;case _0x266951(0x2be):_0x15db4c=_0x59a5b2[_0xe8aa6b]!==''?JSON[_0x266951(0x297)](_0x59a5b2[_0xe8aa6b]):[],_0x4c6c4d=_0x15db4c[_0x266951(0x271)](_0x3a43a8=>JSON['parse'](_0x3a43a8));break;case _0x266951(0x204):_0x4c6c4d=_0x59a5b2[_0xe8aa6b]!==''?new Function(JSON['parse'](_0x59a5b2[_0xe8aa6b])):new Function('return\x200');break;case'ARRAYFUNC':_0x15db4c=_0x59a5b2[_0xe8aa6b]!==''?JSON[_0x266951(0x297)](_0x59a5b2[_0xe8aa6b]):[],_0x4c6c4d=_0x15db4c['map'](_0x46aa3e=>new Function(JSON[_0x266951(0x297)](_0x46aa3e)));break;case _0x266951(0x267):_0x4c6c4d=_0x59a5b2[_0xe8aa6b]!==''?String(_0x59a5b2[_0xe8aa6b]):'';break;case _0x266951(0x1dc):_0x15db4c=_0x59a5b2[_0xe8aa6b]!==''?JSON['parse'](_0x59a5b2[_0xe8aa6b]):[],_0x4c6c4d=_0x15db4c[_0x266951(0x271)](_0x5be9f0=>String(_0x5be9f0));break;case _0x266951(0x2bd):_0x900fbc=_0x59a5b2[_0xe8aa6b]!==''?JSON[_0x266951(0x297)](_0x59a5b2[_0xe8aa6b]):{},_0x4c6c4d=VisuMZ[_0x266951(0x2c5)]({},_0x900fbc);break;case'ARRAYSTRUCT':_0x15db4c=_0x59a5b2[_0xe8aa6b]!==''?JSON[_0x266951(0x297)](_0x59a5b2[_0xe8aa6b]):[],_0x4c6c4d=_0x15db4c[_0x266951(0x271)](_0x47a6c2=>VisuMZ[_0x266951(0x2c5)]({},JSON[_0x266951(0x297)](_0x47a6c2)));break;default:continue;}_0x1c9a35[_0x36ebe0]=_0x4c6c4d;}}return _0x1c9a35;},(_0x3993d2=>{const _0x4f12fd=_0x325142,_0x90bec9=_0x3993d2[_0x4f12fd(0x20e)];for(const _0x4090ce of dependencies){if(!Imported[_0x4090ce]){alert(_0x4f12fd(0x2d2)[_0x4f12fd(0x247)](_0x90bec9,_0x4090ce)),SceneManager['exit']();break;}}const _0x2c7edf=_0x3993d2[_0x4f12fd(0x1e8)];if(_0x2c7edf['match'](/\[Version[ ](.*?)\]/i)){const _0x104935=Number(RegExp['$1']);_0x104935!==VisuMZ[label][_0x4f12fd(0x22d)]&&(_0x4f12fd(0x265)===_0x4f12fd(0x236)?_0x283211=_0x23a7b1[_0x521024['id']]:(alert(_0x4f12fd(0x2c9)[_0x4f12fd(0x247)](_0x90bec9,_0x104935)),SceneManager[_0x4f12fd(0x25b)]()));}if(_0x2c7edf[_0x4f12fd(0x232)](/\[Tier[ ](\d+)\]/i)){if(_0x4f12fd(0x284)==='PAckC')_0x1ccdda=_0xe1076e[_0x4f12fd(0x270)],_0x5b683e=_0x4dc6e5['format'](_0x302aa8[_0x4f12fd(0x31d)],_0x3d9289['id']);else{const _0x4f5989=Number(RegExp['$1']);if(_0x4f5989<tier)_0x4f12fd(0x306)!=='LWOmi'?(_0x121d7f[_0x4f12fd(0x233)][_0x4f12fd(0x294)][_0x4f12fd(0x2ed)](this),this[_0x4f12fd(0x255)]()):(alert(_0x4f12fd(0x1d0)[_0x4f12fd(0x247)](_0x90bec9,_0x4f5989,tier)),SceneManager['exit']());else{if('TFHwi'===_0x4f12fd(0x2c6)){if(_0x5202a5['match'](/(.*):[ ](.*)([%％])/i)){const _0x465a85=_0x482497(_0x375ae8['$1'])[_0x4f12fd(0x2af)](),_0x4e2b89=_0x192e40(_0x9def64['$2'])*0.01,_0x5a9b82=_0x44db8c[_0x4f12fd(0x233)][_0x4f12fd(0x2b6)](_0x465a85,_0x4e2b89);if(!!_0x5a9b82)_0x2bb5d8[_0x4f12fd(0x233)]['StealData'][_0x1a3d25['id']][_0x4f12fd(0x29c)](_0x5a9b82);}}else tier=Math['max'](_0x4f5989,tier);}}}VisuMZ[_0x4f12fd(0x2c5)](VisuMZ[label][_0x4f12fd(0x290)],_0x3993d2['parameters']);})(pluginData),VisuMZ[_0x325142(0x233)][_0x325142(0x251)]=Scene_Boot[_0x325142(0x22c)][_0x325142(0x1e9)],Scene_Boot[_0x325142(0x22c)][_0x325142(0x1e9)]=function(){const _0x53abeb=_0x325142;VisuMZ[_0x53abeb(0x233)][_0x53abeb(0x251)]['call'](this),this[_0x53abeb(0x1f9)]();},Scene_Boot[_0x325142(0x22c)][_0x325142(0x1f9)]=function(){const _0x4209ef=_0x325142;if(VisuMZ['ParseAllNotetags'])return;this[_0x4209ef(0x2d0)]();},VisuMZ['StealItems'][_0x325142(0x214)]={'StealAction1':/<STEAL>/i,'StealAction2':/<STEAL[ ](.*)>/gi,'Snatch':/<(?:SNATCH|TARGETING STEAL)>/i,'JsStealRate':/<JS STEAL RATE>\s*([\s\S]*)\s*<\/JS STEAL RATE>/i,'JsStealRateGold':/<JS STEAL GOLD RATE>\s*([\s\S]*)\s*<\/JS STEAL GOLD RATE>/i,'JsStealRateItem':/<JS STEAL ITEM RATE>\s*([\s\S]*)\s*<\/JS STEAL ITEM RATE>/i,'JsStealRateWeapon':/<JS STEAL WEAPON RATE>\s*([\s\S]*)\s*<\/JS STEAL WEAPON RATE>/i,'JsStealRateArmor':/<JS STEAL ARMOR RATE>\s*([\s\S]*)\s*<\/JS STEAL ARMOR RATE>/i,'JsOnStealSuccess':/<JS ON STEAL SUCCESS>\s*([\s\S]*)\s*<\/JS ON STEAL SUCCESS>/i,'JsOnStealFail':/<JS ON STEAL FAILURE>\s*([\s\S]*)\s*<\/JS ON STEAL FAILURE>/i,'JsOnStealNothing':/<JS ON STEAL EMPTY>\s*([\s\S]*)\s*<\/JS ON STEAL EMPTY>/i,'StealableItemSingle':/<STEAL[ ](.*):[ ](.*)([%％])>/gi,'StealableItemBatch':/<STEAL>\s*([\s\S]*)\s*<\/STEAL>/i,'StealRate':/<STEAL RATE:[ ](\d+)([%％])>/i,'StealPlus':/<STEAL RATE:[ ]([\+\-]\d+)([%％])>/i,'StealResist':/<STEAL RESIST:[ ]([\+\-]\d+)([%％])>/i},Scene_Boot[_0x325142(0x22c)]['process_VisuMZ_StealItems_JS']=function(){const _0x1abc77=_0x325142,_0x8c8f1a=$dataSkills[_0x1abc77(0x1ff)]($dataItems);for(const _0x1bb841 of _0x8c8f1a){if('XFggU'!==_0x1abc77(0x262)){if(this[_0x1abc77(0x21a)]&&this[_0x1abc77(0x21a)]['active'])return!![];return _0x8600d8[_0x1abc77(0x233)]['Scene_Battle_isAnyInputWindowActive'][_0x1abc77(0x2ed)](this);}else{if(!_0x1bb841)continue;VisuMZ[_0x1abc77(0x233)][_0x1abc77(0x2e1)](_0x1bb841);}}},VisuMZ[_0x325142(0x233)][_0x325142(0x217)]=VisuMZ[_0x325142(0x217)],VisuMZ[_0x325142(0x217)]=function(_0x48f431){const _0x31dca0=_0x325142;VisuMZ[_0x31dca0(0x233)][_0x31dca0(0x217)]['call'](this,_0x48f431),VisuMZ[_0x31dca0(0x233)]['Parse_Notetags_JS'](_0x48f431);},VisuMZ[_0x325142(0x233)][_0x325142(0x23f)]=VisuMZ[_0x325142(0x23f)],VisuMZ[_0x325142(0x23f)]=function(_0x3858f5){const _0x1a96b2=_0x325142;VisuMZ[_0x1a96b2(0x233)]['ParseItemNotetags']['call'](this,_0x3858f5),VisuMZ[_0x1a96b2(0x233)][_0x1a96b2(0x2e1)](_0x3858f5);},VisuMZ[_0x325142(0x233)][_0x325142(0x2e1)]=function(_0x34f470){const _0x424d66=_0x325142,_0x291f16=VisuMZ[_0x424d66(0x233)][_0x424d66(0x214)];let _0x53949e=_0x424d66(0x241),_0x495a3a=_0x291f16[_0x424d66(0x241)];VisuMZ['StealItems']['createStealRateJS'](_0x34f470,_0x53949e,_0x495a3a),_0x53949e=_0x424d66(0x30f),_0x495a3a=_0x291f16['JsStealRateGold'],VisuMZ['StealItems'][_0x424d66(0x28b)](_0x34f470,_0x53949e,_0x495a3a),_0x53949e=_0x424d66(0x31a),_0x495a3a=_0x291f16[_0x424d66(0x31a)],VisuMZ['StealItems'][_0x424d66(0x28b)](_0x34f470,_0x53949e,_0x495a3a),_0x53949e='JsStealRateWeapon',_0x495a3a=_0x291f16[_0x424d66(0x227)],VisuMZ['StealItems'][_0x424d66(0x28b)](_0x34f470,_0x53949e,_0x495a3a),_0x53949e='JsStealRateArmor',_0x495a3a=_0x291f16[_0x424d66(0x266)],VisuMZ[_0x424d66(0x233)][_0x424d66(0x28b)](_0x34f470,_0x53949e,_0x495a3a),_0x53949e=_0x424d66(0x268),_0x495a3a=_0x291f16[_0x424d66(0x268)],VisuMZ[_0x424d66(0x233)][_0x424d66(0x219)](_0x34f470,_0x53949e,_0x495a3a),_0x53949e=_0x424d66(0x2ba),_0x495a3a=_0x291f16[_0x424d66(0x2ba)],VisuMZ[_0x424d66(0x233)][_0x424d66(0x219)](_0x34f470,_0x53949e,_0x495a3a),_0x53949e=_0x424d66(0x312),_0x495a3a=_0x291f16[_0x424d66(0x312)],VisuMZ['StealItems'][_0x424d66(0x219)](_0x34f470,_0x53949e,_0x495a3a);},VisuMZ['StealItems']['JS']={},VisuMZ[_0x325142(0x233)][_0x325142(0x28b)]=function(_0x4e1d0f,_0x29df98,_0x445ef4){const _0x268d62=_0x325142,_0x174b3e=_0x4e1d0f[_0x268d62(0x2aa)];if(_0x174b3e[_0x268d62(0x232)](_0x445ef4)){if('Uqcbb'===_0x268d62(0x2d6)){const _0xd147a9=String(RegExp['$1']),_0x297403=_0x268d62(0x1cf)['format'](_0xd147a9),_0x12c34c=VisuMZ[_0x268d62(0x233)]['createKeyJS'](_0x4e1d0f,_0x29df98);VisuMZ[_0x268d62(0x233)]['JS'][_0x12c34c]=new Function(_0x297403);}else{const _0x126333=_0x2bcb5f(_0x15002c['$1']),_0x10f087=_0x268d62(0x1cf)['format'](_0x126333),_0x7c6eaf=_0x4d57c2[_0x268d62(0x233)][_0x268d62(0x1f0)](_0x8feef3,_0x1c3c82);_0x60c4b7[_0x268d62(0x233)]['JS'][_0x7c6eaf]=new _0x2ceaef(_0x10f087);}}},VisuMZ[_0x325142(0x233)]['createOnStealJS']=function(_0x2ef3b4,_0x592dd6,_0x368e8a){const _0x41bfef=_0x325142,_0xd406ae=_0x2ef3b4['note'];if(_0xd406ae[_0x41bfef(0x232)](_0x368e8a)){const _0x1a027e=String(RegExp['$1']),_0x42316b=_0x41bfef(0x26d)['format'](_0x1a027e),_0x5240b0=VisuMZ[_0x41bfef(0x233)]['createKeyJS'](_0x2ef3b4,_0x592dd6);VisuMZ[_0x41bfef(0x233)]['JS'][_0x5240b0]=new Function(_0x42316b);}},VisuMZ[_0x325142(0x233)][_0x325142(0x1f0)]=function(_0x3355e3,_0x36f60c){const _0x341da0=_0x325142;if(VisuMZ[_0x341da0(0x1f0)])return VisuMZ[_0x341da0(0x1f0)](_0x3355e3,_0x36f60c);let _0x5ebfa9='';if($dataActors[_0x341da0(0x295)](_0x3355e3))_0x5ebfa9=_0x341da0(0x226)['format'](_0x3355e3['id'],_0x36f60c);if($dataClasses[_0x341da0(0x295)](_0x3355e3))_0x5ebfa9=_0x341da0(0x302)['format'](_0x3355e3['id'],_0x36f60c);if($dataSkills[_0x341da0(0x295)](_0x3355e3))_0x5ebfa9=_0x341da0(0x2e2)[_0x341da0(0x247)](_0x3355e3['id'],_0x36f60c);if($dataItems['includes'](_0x3355e3))_0x5ebfa9='Item-%1-%2'[_0x341da0(0x247)](_0x3355e3['id'],_0x36f60c);if($dataWeapons['includes'](_0x3355e3))_0x5ebfa9='Weapon-%1-%2'[_0x341da0(0x247)](_0x3355e3['id'],_0x36f60c);if($dataArmors[_0x341da0(0x295)](_0x3355e3))_0x5ebfa9='Armor-%1-%2'['format'](_0x3355e3['id'],_0x36f60c);if($dataEnemies[_0x341da0(0x295)](_0x3355e3))_0x5ebfa9=_0x341da0(0x318)[_0x341da0(0x247)](_0x3355e3['id'],_0x36f60c);if($dataStates['includes'](_0x3355e3))_0x5ebfa9='State-%1-%2'[_0x341da0(0x247)](_0x3355e3['id'],_0x36f60c);return _0x5ebfa9;},DataManager[_0x325142(0x279)]=function(_0x48cd56){const _0x301d68=_0x325142;_0x48cd56=_0x48cd56['toUpperCase']()[_0x301d68(0x2af)](),this[_0x301d68(0x286)]=this[_0x301d68(0x286)]||{};if(this[_0x301d68(0x286)][_0x48cd56])return this[_0x301d68(0x286)][_0x48cd56];for(const _0x3f88bc of $dataItems){if(!_0x3f88bc)continue;this[_0x301d68(0x286)][_0x3f88bc['name'][_0x301d68(0x2ae)]()['trim']()]=_0x3f88bc['id'];}return this[_0x301d68(0x286)][_0x48cd56]||0x0;},DataManager['getWeaponIdWithName']=function(_0x4d444b){const _0x361b26=_0x325142;_0x4d444b=_0x4d444b[_0x361b26(0x2ae)]()[_0x361b26(0x2af)](),this[_0x361b26(0x2ec)]=this[_0x361b26(0x2ec)]||{};if(this[_0x361b26(0x2ec)][_0x4d444b])return this[_0x361b26(0x2ec)][_0x4d444b];for(const _0x8de694 of $dataWeapons){if(!_0x8de694)continue;this[_0x361b26(0x2ec)][_0x8de694[_0x361b26(0x20e)]['toUpperCase']()[_0x361b26(0x2af)]()]=_0x8de694['id'];}return this[_0x361b26(0x2ec)][_0x4d444b]||0x0;},DataManager[_0x325142(0x220)]=function(_0x13a182){const _0x570225=_0x325142;_0x13a182=_0x13a182[_0x570225(0x2ae)]()[_0x570225(0x2af)](),this['_armorIDs']=this[_0x570225(0x235)]||{};if(this[_0x570225(0x235)][_0x13a182])return this[_0x570225(0x235)][_0x13a182];for(const _0x4e14cd of $dataArmors){if(!_0x4e14cd)continue;this[_0x570225(0x235)][_0x4e14cd['name']['toUpperCase']()['trim']()]=_0x4e14cd['id'];}return this[_0x570225(0x235)][_0x13a182]||0x0;},ImageManager[_0x325142(0x210)]=Imported['VisuMZ_0_CoreEngine']?VisuMZ[_0x325142(0x239)]['Settings']['Gold'][_0x325142(0x20b)]:VisuMZ[_0x325142(0x233)][_0x325142(0x290)]['Snatch'][_0x325142(0x20b)],TextManager[_0x325142(0x31c)]=VisuMZ[_0x325142(0x233)][_0x325142(0x290)][_0x325142(0x2a2)][_0x325142(0x2e9)],TextManager[_0x325142(0x27d)]=VisuMZ[_0x325142(0x233)][_0x325142(0x290)]['Snatch'][_0x325142(0x30c)],TextManager[_0x325142(0x27c)]=VisuMZ[_0x325142(0x233)][_0x325142(0x290)][_0x325142(0x2a2)][_0x325142(0x1ce)],VisuMZ[_0x325142(0x233)]['Game_Action_applyItemUserEffect']=Game_Action[_0x325142(0x22c)][_0x325142(0x1df)],Game_Action['prototype'][_0x325142(0x1df)]=function(_0x393bb9){const _0x1d4616=_0x325142;VisuMZ[_0x1d4616(0x233)][_0x1d4616(0x2db)][_0x1d4616(0x2ed)](this,_0x393bb9),this[_0x1d4616(0x2da)](_0x393bb9);},Game_Action['prototype'][_0x325142(0x2da)]=function(_0x453035){const _0xe7e9bd=_0x325142;if(!this[_0xe7e9bd(0x27b)]())return;if(!_0x453035[_0xe7e9bd(0x1f8)]())return;if(this[_0xe7e9bd(0x1d5)]()[_0xe7e9bd(0x1f8)]())return;const _0x147823=VisuMZ[_0xe7e9bd(0x233)][_0xe7e9bd(0x28e)](this,_0x453035);if(_0x147823['types']['length']<=0x0)return;const _0x4285b5=_0x453035[_0xe7e9bd(0x2f4)]();if(_0x4285b5[_0xe7e9bd(0x28d)]<=0x0)return;let _0xb31a24=[];this[_0xe7e9bd(0x2f1)]()?_0xb31a24=this[_0xe7e9bd(0x291)](_0x453035):_0xe7e9bd(0x222)!==_0xe7e9bd(0x222)?this['startStealSnatchSelection']():_0xb31a24=_0x4285b5[_0xe7e9bd(0x2a5)](_0x735144=>{const _0x252b39=_0xe7e9bd;return _0x147823['types'][_0x252b39(0x295)](_0x735144[_0x252b39(0x2a3)]);});_0xb31a24=_0xb31a24[_0xe7e9bd(0x2a5)](_0x54b709=>{const _0x54acfc=_0xe7e9bd;return!_0x54b709[_0x54acfc(0x263)];});if(_0xb31a24[_0xe7e9bd(0x28d)]<=0x0){if(_0xe7e9bd(0x303)!==_0xe7e9bd(0x2dc))return this[_0xe7e9bd(0x31b)](_0x453035);else{const _0x35f640=_0x57e8ec['StealItems'][_0xe7e9bd(0x290)][_0xe7e9bd(0x277)];_0x35f640[_0xe7e9bd(0x2e4)]&&_0x35f640[_0xe7e9bd(0x2c0)]&&(_0x6da679[_0xe7e9bd(0x248)]=_0x4ac3ef[_0xe7e9bd(0x248)]||{},_0xe8a1f3[_0xe7e9bd(0x248)][_0xe7e9bd(0x2cb)]=0x0);}}this[_0xe7e9bd(0x2b8)](_0x453035,_0x147823,_0xb31a24);},VisuMZ[_0x325142(0x233)]['DetermineStealData']=function(_0x4b4d5f,_0x433b90){const _0xc5fa9a=_0x325142,_0xc527d5=VisuMZ[_0xc5fa9a(0x233)][_0xc5fa9a(0x214)],_0x1a6f6c=_0x4b4d5f[_0xc5fa9a(0x27b)]()[_0xc5fa9a(0x2aa)];let _0x1831a5=[],_0x399c56={'all':_0x4b4d5f[_0xc5fa9a(0x1d5)]()[_0xc5fa9a(0x202)](),'gold':0x1,'item':0x1,'weapon':0x1,'armor':0x1},_0x36979b={'all':_0x4b4d5f[_0xc5fa9a(0x1d5)]()[_0xc5fa9a(0x1fd)]()-_0x433b90[_0xc5fa9a(0x316)](),'gold':0x0,'item':0x0,'weapon':0x0,'armor':0x0};_0x1a6f6c['match'](_0xc527d5[_0xc5fa9a(0x27e)])&&(_0x1831a5=[_0xc5fa9a(0x313),_0xc5fa9a(0x207),_0xc5fa9a(0x257),_0xc5fa9a(0x29a)]);const _0x16cd27=_0x1a6f6c[_0xc5fa9a(0x232)](_0xc527d5[_0xc5fa9a(0x26b)]);if(_0x16cd27){if('ItiZX'==='vMHvS')_0x1f6628=_0x808348[_0x44b52f['id']];else for(const _0x2d1d5f of _0x16cd27){if(!_0x2d1d5f)continue;if(_0x2d1d5f[_0xc5fa9a(0x232)](/ALL/i)){if(_0xc5fa9a(0x1f2)!==_0xc5fa9a(0x259)){_0x1831a5=['GOLD',_0xc5fa9a(0x207),_0xc5fa9a(0x257),'ARMOR'];if(_0x2d1d5f[_0xc5fa9a(0x232)](/([\+\-]\d+)([%％])/i))_0x36979b['all']+=Number(RegExp['$1'])*0.01;else _0x2d1d5f[_0xc5fa9a(0x232)](/(\d+)([%％])/i)&&(_0x399c56[_0xc5fa9a(0x2ad)]*=Number(RegExp['$1'])*0.01);}else{let _0x460a8b=_0xc5fa9a(0x1fd);if(this[_0xc5fa9a(0x27f)](_0x460a8b))return this[_0xc5fa9a(0x249)][_0x460a8b];return this[_0xc5fa9a(0x249)][_0x460a8b]=this['createStealPlus'](),this['_cache'][_0x460a8b];}}if(_0x2d1d5f[_0xc5fa9a(0x232)](/GOLD/i)){_0x1831a5[_0xc5fa9a(0x29c)](_0xc5fa9a(0x313));if(_0x2d1d5f[_0xc5fa9a(0x232)](/([\+\-]\d+)([%％])/i))_0x36979b[_0xc5fa9a(0x2cb)]+=Number(RegExp['$1'])*0.01;else _0x2d1d5f['match'](/(\d+)([%％])/i)&&(_0xc5fa9a(0x1da)!==_0xc5fa9a(0x1da)?(_0x56bf68[_0xc5fa9a(0x2a3)]='WEAPON',_0x5bbb64['id']=_0x1b4cfb[_0xc5fa9a(0x1fe)](_0x3b28c2['$1'])):_0x399c56[_0xc5fa9a(0x2cb)]*=Number(RegExp['$1'])*0.01);}if(_0x2d1d5f[_0xc5fa9a(0x232)](/ITEM/i)){_0x1831a5[_0xc5fa9a(0x29c)](_0xc5fa9a(0x207));if(_0x2d1d5f[_0xc5fa9a(0x232)](/([\+\-]\d+)([%％])/i)){if(_0xc5fa9a(0x23c)!==_0xc5fa9a(0x21d))_0x36979b[_0xc5fa9a(0x27b)]+=Number(RegExp['$1'])*0.01;else{const _0x4df20b=_0x1bef0a[_0xc5fa9a(0x21e)][_0x331c18];_0xde3bf5['addParam'](_0x2ff47b,-_0x4df20b);}}else _0x2d1d5f[_0xc5fa9a(0x232)](/(\d+)([%％])/i)&&(_0x399c56[_0xc5fa9a(0x27b)]*=Number(RegExp['$1'])*0.01);}if(_0x2d1d5f['match'](/WEAPON/i)){_0x1831a5[_0xc5fa9a(0x29c)](_0xc5fa9a(0x257));if(_0x2d1d5f[_0xc5fa9a(0x232)](/([\+\-]\d+)([%％])/i))_0xc5fa9a(0x2b2)!==_0xc5fa9a(0x2f0)?_0x36979b['weapon']+=Number(RegExp['$1'])*0.01:_0x8d3ccf['weapon']*=_0xedfc90(_0x2625d9['$1'])*0.01;else _0x2d1d5f[_0xc5fa9a(0x232)](/(\d+)([%％])/i)&&(_0x399c56[_0xc5fa9a(0x31e)]*=Number(RegExp['$1'])*0.01);}if(_0x2d1d5f[_0xc5fa9a(0x232)](/ARMOR/i)){if(_0xc5fa9a(0x229)===_0xc5fa9a(0x2e0)){const _0x3f467e=_0x5701a5[_0x2334ee['id']];if(!_0x3f467e)return;_0x56d61e[_0xc5fa9a(0x285)](_0x3f467e,0x1);const _0x332356=_0xc5fa9a(0x1ee)[_0xc5fa9a(0x247)](_0x3f467e[_0xc5fa9a(0x2e3)]);_0x3057ca=_0x2388a9[_0xc5fa9a(0x247)](_0x3f467e[_0xc5fa9a(0x20e)],_0x332356);}else{_0x1831a5[_0xc5fa9a(0x29c)](_0xc5fa9a(0x29a));if(_0x2d1d5f[_0xc5fa9a(0x232)](/([\+\-]\d+)([%％])/i))_0xc5fa9a(0x28c)!==_0xc5fa9a(0x28c)?(this['_enemy']=_0x1908ab,this[_0xc5fa9a(0x275)]=_0x15b737,this[_0xc5fa9a(0x2ac)](),this['show'](),this[_0xc5fa9a(0x22e)](0x0)):_0x36979b['armor']+=Number(RegExp['$1'])*0.01;else _0x2d1d5f['match'](/(\d+)([%％])/i)&&(_0xc5fa9a(0x1e6)!==_0xc5fa9a(0x2eb)?_0x399c56[_0xc5fa9a(0x1d1)]*=Number(RegExp['$1'])*0.01:_0x5400e2[_0xc5fa9a(0x268)][_0xc5fa9a(0x2ed)](this,this[_0xc5fa9a(0x1d5)](),_0x52cdc8,_0x378263,_0x541729));}}}}let _0x422808=VisuMZ[_0xc5fa9a(0x233)][_0xc5fa9a(0x1f0)](_0x4b4d5f['item'](),_0xc5fa9a(0x241));return VisuMZ[_0xc5fa9a(0x233)]['JS'][_0x422808]&&(_0x399c56[_0xc5fa9a(0x2ad)]=VisuMZ[_0xc5fa9a(0x233)]['JS'][_0x422808][_0xc5fa9a(0x2ed)](_0x4b4d5f,_0x4b4d5f['subject'](),_0x433b90,_0x399c56[_0xc5fa9a(0x2ad)])),_0x422808=VisuMZ[_0xc5fa9a(0x233)]['createKeyJS'](_0x4b4d5f['item'](),'JsStealRateGold'),VisuMZ[_0xc5fa9a(0x233)]['JS'][_0x422808]&&(_0x399c56[_0xc5fa9a(0x2cb)]=VisuMZ[_0xc5fa9a(0x233)]['JS'][_0x422808][_0xc5fa9a(0x2ed)](_0x4b4d5f,_0x4b4d5f[_0xc5fa9a(0x1d5)](),_0x433b90,_0x399c56['gold'])),_0x422808=VisuMZ[_0xc5fa9a(0x233)]['createKeyJS'](_0x4b4d5f[_0xc5fa9a(0x27b)](),_0xc5fa9a(0x31a)),VisuMZ[_0xc5fa9a(0x233)]['JS'][_0x422808]&&(_0x399c56['item']=VisuMZ['StealItems']['JS'][_0x422808][_0xc5fa9a(0x2ed)](_0x4b4d5f,_0x4b4d5f[_0xc5fa9a(0x1d5)](),_0x433b90,_0x399c56[_0xc5fa9a(0x27b)])),_0x422808=VisuMZ[_0xc5fa9a(0x233)][_0xc5fa9a(0x1f0)](_0x4b4d5f['item'](),_0xc5fa9a(0x227)),VisuMZ[_0xc5fa9a(0x233)]['JS'][_0x422808]&&(_0x399c56[_0xc5fa9a(0x31e)]=VisuMZ['StealItems']['JS'][_0x422808]['call'](_0x4b4d5f,_0x4b4d5f[_0xc5fa9a(0x1d5)](),_0x433b90,_0x399c56[_0xc5fa9a(0x31e)])),_0x422808=VisuMZ[_0xc5fa9a(0x233)][_0xc5fa9a(0x1f0)](_0x4b4d5f[_0xc5fa9a(0x27b)](),_0xc5fa9a(0x266)),VisuMZ['StealItems']['JS'][_0x422808]&&(_0x399c56[_0xc5fa9a(0x1d1)]=VisuMZ['StealItems']['JS'][_0x422808][_0xc5fa9a(0x2ed)](_0x4b4d5f,_0x4b4d5f[_0xc5fa9a(0x1d5)](),_0x433b90,_0x399c56[_0xc5fa9a(0x1d1)])),{'types':_0x1831a5,'rate':_0x399c56,'plus':_0x36979b};},VisuMZ[_0x325142(0x233)][_0x325142(0x293)]=function(_0x31ff61){const _0x1b8155=_0x325142;var _0x4a363c,_0x33be3d,_0x532ce0;for(_0x532ce0=_0x31ff61['length']-0x1;_0x532ce0>0x0;_0x532ce0--){_0x1b8155(0x24f)===_0x1b8155(0x244)?(_0x36ae09[_0x1b8155(0x248)]=_0x63413f[_0x1b8155(0x248)]||{},_0x149fb6[_0x1b8155(0x248)]['gold']=0x0):(_0x4a363c=Math[_0x1b8155(0x2c4)](Math[_0x1b8155(0x2b1)]()*(_0x532ce0+0x1)),_0x33be3d=_0x31ff61[_0x532ce0],_0x31ff61[_0x532ce0]=_0x31ff61[_0x4a363c],_0x31ff61[_0x4a363c]=_0x33be3d);}return _0x31ff61;},Game_Action['prototype'][_0x325142(0x2b8)]=function(_0x164b98,_0x3cf4ef,_0x93da8b){const _0x5036d4=_0x325142;VisuMZ[_0x5036d4(0x233)][_0x5036d4(0x293)](_0x93da8b),this[_0x5036d4(0x30a)](_0x164b98);for(const _0x5bff42 of _0x93da8b){if(!_0x5bff42)continue;let _0x5df0dd=_0x3cf4ef[_0x5036d4(0x253)][_0x5036d4(0x2ad)]*_0x5bff42['rate'],_0x4cd502=_0x3cf4ef[_0x5036d4(0x308)][_0x5036d4(0x2ad)];_0x5df0dd*=_0x3cf4ef[_0x5036d4(0x253)][_0x5bff42[_0x5036d4(0x2a3)]['toLowerCase']()],_0x4cd502+=_0x3cf4ef[_0x5036d4(0x308)][_0x5bff42['type'][_0x5036d4(0x1ef)]()];const _0x5b702d=_0x5df0dd+_0x4cd502;if(Math[_0x5036d4(0x2b1)]()<_0x5b702d)return this[_0x5036d4(0x2d5)](_0x164b98,_0x5bff42);}this[_0x5036d4(0x314)](_0x164b98);},Game_Action[_0x325142(0x22c)][_0x325142(0x2f1)]=function(){const _0x18b3dd=_0x325142;if(!this[_0x18b3dd(0x27b)]())return![];if(!this[_0x18b3dd(0x24c)]())return![];if(!this[_0x18b3dd(0x2ff)]())return![];if(!this['needsSelection']())return![];const _0x400f04=VisuMZ[_0x18b3dd(0x233)]['RegExp'],_0x4ae8c3=this['item']()['note'];return _0x4ae8c3['match'](_0x400f04[_0x18b3dd(0x2a2)])&&(_0x4ae8c3[_0x18b3dd(0x232)](_0x400f04['StealAction1'])||_0x4ae8c3['match'](_0x400f04[_0x18b3dd(0x26b)]));},Game_Action[_0x325142(0x22c)][_0x325142(0x2b3)]=function(_0xe8b469,_0x5de128){const _0x55ce36=_0x325142;this[_0x55ce36(0x1eb)]=_0xe8b469[_0x55ce36(0x28f)]();const _0x2341b1=_0xe8b469[_0x55ce36(0x2f4)]();this[_0x55ce36(0x2e7)]=_0x2341b1['indexOf'](_0x5de128);},Game_Action['prototype'][_0x325142(0x291)]=function(_0x2ba859){const _0x2ddc9e=_0x325142;if(_0x2ba859[_0x2ddc9e(0x28f)]()!==this['_snatchEnemyIndex'])return[];this[_0x2ddc9e(0x2e7)]=this[_0x2ddc9e(0x2e7)]||0x0;const _0x5d0583=_0x2ba859[_0x2ddc9e(0x2f4)]();return[_0x5d0583[this[_0x2ddc9e(0x2e7)]]];},Game_Action[_0x325142(0x22c)][_0x325142(0x2d5)]=function(_0x346948,_0x59c626){const _0x204020=_0x325142;_0x59c626['stolen']=!![],this[_0x204020(0x2df)](_0x346948,_0x59c626),this[_0x204020(0x1d9)](_0x59c626),this['processStealItemsSuccessPopup'](_0x346948,_0x59c626),this['processStealItemsSuccessEquipDebuff'](_0x346948,_0x59c626),this['processStealItemsSuccessJS'](_0x346948,_0x59c626);},Game_Action[_0x325142(0x22c)][_0x325142(0x2df)]=function(_0x1ef096,_0x143b19){const _0x449866=_0x325142,_0xe9f290=VisuMZ['StealItems'][_0x449866(0x290)][_0x449866(0x2ee)];let _0x143b73=_0xe9f290[_0x449866(0x2c8)],_0x425aa3='';if(_0x143b19[_0x449866(0x2a3)]===_0x449866(0x313)){if(_0x449866(0x215)===_0x449866(0x1e7))this[_0x449866(0x249)]={},_0x1f063d[_0x449866(0x233)]['Game_BattlerBase_refresh'][_0x449866(0x2ed)](this);else{$gameParty[_0x449866(0x292)](_0x143b19['id']);if(Imported[_0x449866(0x1f3)]){const _0x3539fb=Window_Base[_0x449866(0x304)],_0x4f0f04=VisuMZ['VisualGoldDisplay'][_0x449866(0x21b)](_0x143b19['id'],_0x3539fb,![]);_0x425aa3=_0x143b73[_0x449866(0x247)](_0x4f0f04,'');}else _0x143b73=_0xe9f290['StealGold'],_0x425aa3=_0x143b73[_0x449866(0x247)](TextManager[_0x449866(0x31d)],_0x143b19['id']);if(Imported[_0x449866(0x273)]){const _0xdd9978=VisuMZ[_0x449866(0x233)][_0x449866(0x290)][_0x449866(0x277)];_0xdd9978['AutoGold']&&_0xdd9978[_0x449866(0x2c0)]&&(_0x1ef096['_visualDrops']=_0x1ef096[_0x449866(0x248)]||{},_0x1ef096[_0x449866(0x248)][_0x449866(0x2cb)]=0x0);}}}else{if(_0x143b19[_0x449866(0x2a3)]===_0x449866(0x207)){if(_0x449866(0x321)!==_0x449866(0x296)){const _0x46f0d3=$dataItems[_0x143b19['id']];if(!_0x46f0d3)return;$gameParty[_0x449866(0x285)](_0x46f0d3,0x1);const _0x40bf7e=_0x449866(0x1ee)[_0x449866(0x247)](_0x46f0d3[_0x449866(0x2e3)]);_0x425aa3=_0x143b73['format'](_0x46f0d3['name'],_0x40bf7e);}else _0x544b44[_0x449866(0x233)]['JS'][_0x1a6427][_0x449866(0x2ed)](this,this['subject'](),_0x1c21cc);}else{if(_0x143b19[_0x449866(0x2a3)]===_0x449866(0x257)){if(_0x449866(0x2c1)!=='TYswc'){const _0x5ac1a6=$dataWeapons[_0x143b19['id']];if(!_0x5ac1a6)return;$gameParty['gainItem'](_0x5ac1a6,0x1);const _0x5d053f='\x5cI[%1]'[_0x449866(0x247)](_0x5ac1a6[_0x449866(0x2e3)]);_0x425aa3=_0x143b73[_0x449866(0x247)](_0x5ac1a6['name'],_0x5d053f);}else{if(_0x2b4836['createKeyJS'])return _0x8f1181['createKeyJS'](_0x407c77,_0x176184);let _0x2ef9ec='';if(_0x51925c[_0x449866(0x295)](_0x2977d1))_0x2ef9ec=_0x449866(0x226)['format'](_0x5d5c21['id'],_0x2e5de5);if(_0x3a7151[_0x449866(0x295)](_0x2de565))_0x2ef9ec=_0x449866(0x302)['format'](_0x45bed5['id'],_0x293b1e);if(_0x6f4728[_0x449866(0x295)](_0x44dbc8))_0x2ef9ec=_0x449866(0x2e2)['format'](_0x381322['id'],_0x563f29);if(_0x59aaff[_0x449866(0x295)](_0x41115d))_0x2ef9ec=_0x449866(0x1d2)['format'](_0x408deb['id'],_0x19c720);if(_0x3f36bf[_0x449866(0x295)](_0x59f108))_0x2ef9ec=_0x449866(0x2d4)[_0x449866(0x247)](_0x5aa0fa['id'],_0x253e30);if(_0x4308b1[_0x449866(0x295)](_0x5b8dae))_0x2ef9ec=_0x449866(0x2fc)[_0x449866(0x247)](_0x59246c['id'],_0x4f53c6);if(_0x495c32[_0x449866(0x295)](_0x269409))_0x2ef9ec=_0x449866(0x318)['format'](_0x5c01e7['id'],_0x84c0cc);if(_0x195f9a[_0x449866(0x295)](_0x598af9))_0x2ef9ec=_0x449866(0x278)[_0x449866(0x247)](_0x43491c['id'],_0x598e3c);return _0x2ef9ec;}}else{if(_0x143b19[_0x449866(0x2a3)]===_0x449866(0x29a)){const _0x29a216=$dataArmors[_0x143b19['id']];if(!_0x29a216)return;$gameParty[_0x449866(0x285)](_0x29a216,0x1);const _0x47091b=_0x449866(0x1ee)[_0x449866(0x247)](_0x29a216['iconIndex']);_0x425aa3=_0x143b73['format'](_0x29a216[_0x449866(0x20e)],_0x47091b);}}}}if(_0xe9f290['ShowMessages']){const _0x246429=SceneManager['_scene'][_0x449866(0x221)];if(_0x246429&&_0x425aa3!=='')_0x246429[_0x449866(0x2f7)](_0x425aa3);}},Game_Action[_0x325142(0x22c)][_0x325142(0x1d9)]=function(_0x2d32d8){const _0x1a9020=_0x325142,_0x14ea2d=VisuMZ[_0x1a9020(0x233)][_0x1a9020(0x290)]['Sound'];if(!_0x14ea2d)return;const _0x42e7d0=_0x2d32d8[_0x1a9020(0x2a3)][_0x1a9020(0x1ef)]()[_0x1a9020(0x2af)](),_0x224d15={'name':_0x14ea2d[_0x1a9020(0x2c7)[_0x1a9020(0x247)](_0x42e7d0)]||'','volume':_0x14ea2d['%1_volume'[_0x1a9020(0x247)](_0x42e7d0)]||0x0,'pitch':_0x14ea2d[_0x1a9020(0x1e2)[_0x1a9020(0x247)](_0x42e7d0)]||0x0,'pan':_0x14ea2d[_0x1a9020(0x1fa)[_0x1a9020(0x247)](_0x42e7d0)]||0x0};if(_0x224d15[_0x1a9020(0x20e)]!=='')AudioManager[_0x1a9020(0x256)](_0x224d15);},Game_Action[_0x325142(0x22c)][_0x325142(0x1e1)]=function(_0x3d143e,_0x24e584){const _0x37f590=_0x325142;if(!_0x24e584)return;if(!_0x3d143e)return;const _0x5cdde6=VisuMZ['StealItems'][_0x37f590(0x290)][_0x37f590(0x230)];if(!_0x5cdde6)return;if(_0x5cdde6[_0x37f590(0x2a1)]==='')return;const _0x3554ec=_0x5cdde6['SuccessPopupText'],_0x13b126={'textColor':_0x5cdde6[_0x37f590(0x2a9)]||0x0,'flashColor':_0x5cdde6[_0x37f590(0x22f)]||[0x0,0x0,0x0,0x0],'flashDuration':_0x5cdde6[_0x37f590(0x288)]||0x3c};_0x3d143e['setupTextPopup'](_0x3554ec,_0x13b126);if(_0x5cdde6[_0x37f590(0x25e)]&&_0x24e584[_0x37f590(0x2a3)]!=='GOLD'){let _0x535044=null;if(_0x24e584['type']==='ITEM')_0x535044=$dataItems[_0x24e584['id']];else{if(_0x24e584[_0x37f590(0x2a3)]===_0x37f590(0x257))_0x535044=$dataWeapons[_0x24e584['id']];else _0x24e584[_0x37f590(0x2a3)]===_0x37f590(0x29a)&&(_0x535044=$dataArmors[_0x24e584['id']]);}_0x535044&&_0x3d143e[_0x37f590(0x1e5)](_0x535044[_0x37f590(0x2e3)],_0x535044[_0x37f590(0x20e)],_0x13b126);}},Game_Action[_0x325142(0x22c)]['processStealItemsSuccessEquipDebuff']=function(_0x12836c,_0x5396bd){const _0x52574f=_0x325142;if(!_0x12836c)return;const _0x49c970=VisuMZ[_0x52574f(0x233)]['Settings']['Mechanics'];if(!_0x49c970)return;if(!_0x49c970[_0x52574f(0x1dd)])return;if(![_0x52574f(0x257),_0x52574f(0x29a)][_0x52574f(0x295)](_0x5396bd[_0x52574f(0x2a3)]))return;let _0xe7beed=null;if(_0x5396bd[_0x52574f(0x2a3)]===_0x52574f(0x257))_0xe7beed=$dataWeapons[_0x5396bd['id']];else _0x5396bd['type']===_0x52574f(0x29a)&&(_0xe7beed=$dataArmors[_0x5396bd['id']]);if(!_0xe7beed)return;for(let _0x5ee48c=0x0;_0x5ee48c<0x8;_0x5ee48c++){if(_0x52574f(0x305)!==_0x52574f(0x305))_0x3e937d[_0x52574f(0x27b)]+=_0x1a2781(_0x288a33['$1'])*0.01;else{const _0x2c65e9=_0xe7beed[_0x52574f(0x21e)][_0x5ee48c];_0x12836c[_0x52574f(0x282)](_0x5ee48c,-_0x2c65e9);}}},Game_Action['prototype'][_0x325142(0x1f1)]=function(_0x1e3253,_0x3df4dc){const _0x2ff42c=_0x325142;if(!_0x1e3253)return;let _0x281a31=null,_0x82daab=0x0;if(_0x3df4dc[_0x2ff42c(0x2a3)]===_0x2ff42c(0x313))_0x82daab=_0x3df4dc['id'];else{if(_0x3df4dc['type']===_0x2ff42c(0x207))_0x2ff42c(0x2e5)===_0x2ff42c(0x1d8)?_0x13f61c=_0x3115f5['id']:_0x281a31=$dataItems[_0x3df4dc['id']];else{if(_0x3df4dc['type']===_0x2ff42c(0x257)){if(_0x2ff42c(0x2d9)==='ftAYd')_0x281a31=$dataWeapons[_0x3df4dc['id']];else return this[_0x2ff42c(0x31b)](_0x1710f4);}else _0x3df4dc[_0x2ff42c(0x2a3)]===_0x2ff42c(0x29a)&&(_0x281a31=$dataArmors[_0x3df4dc['id']]);}}const _0x2ee818=VisuMZ[_0x2ff42c(0x233)][_0x2ff42c(0x290)][_0x2ff42c(0x320)];_0x2ee818&&_0x2ee818[_0x2ff42c(0x268)]&&_0x2ee818[_0x2ff42c(0x268)][_0x2ff42c(0x2ed)](this,this['subject'](),_0x1e3253,_0x281a31,_0x82daab);const _0x1a218c=VisuMZ[_0x2ff42c(0x233)]['createKeyJS'](this['item'](),_0x2ff42c(0x268));VisuMZ[_0x2ff42c(0x233)]['JS'][_0x1a218c]&&VisuMZ[_0x2ff42c(0x233)]['JS'][_0x1a218c]['call'](this,this[_0x2ff42c(0x1d5)](),_0x1e3253,_0x281a31,_0x82daab);},Game_Action['prototype'][_0x325142(0x314)]=function(_0xb9ee5b){const _0x42eccf=_0x325142;this[_0x42eccf(0x258)](_0xb9ee5b),this['processStealItemsFailureSFX'](),this['processStealItemsFailurePopup'](_0xb9ee5b),this[_0x42eccf(0x2d1)](_0xb9ee5b);},Game_Action[_0x325142(0x22c)]['processStealItemsFailureLogWindow']=function(_0x3959c0){const _0x5e1c8b=_0x325142,_0x1ddce0=VisuMZ[_0x5e1c8b(0x233)][_0x5e1c8b(0x290)]['BattleLog'];if(_0x1ddce0[_0x5e1c8b(0x238)]){if('joSgO'===_0x5e1c8b(0x2cd))this['_stealSnatchWindow'][_0x5e1c8b(0x283)](),this[_0x5e1c8b(0x21a)][_0x5e1c8b(0x301)]();else{const _0x2c7225=_0x1ddce0['StealFail'],_0x2c1cc9=SceneManager[_0x5e1c8b(0x20a)]['_logWindow'];if(_0x2c1cc9&&_0x2c7225!=='')_0x2c1cc9[_0x5e1c8b(0x2f7)](_0x2c7225);}}},Game_Action[_0x325142(0x22c)][_0x325142(0x25f)]=function(){const _0x3e2d4b=_0x325142,_0x15c831=VisuMZ['StealItems'][_0x3e2d4b(0x290)][_0x3e2d4b(0x2ea)];if(!_0x15c831)return;const _0x5e0df5=_0x3e2d4b(0x1f5),_0x160476={'name':_0x15c831[_0x3e2d4b(0x2c7)['format'](_0x5e0df5)]||'','volume':_0x15c831['%1_volume'['format'](_0x5e0df5)]||0x0,'pitch':_0x15c831[_0x3e2d4b(0x1e2)['format'](_0x5e0df5)]||0x0,'pan':_0x15c831[_0x3e2d4b(0x1fa)[_0x3e2d4b(0x247)](_0x5e0df5)]||0x0};if(_0x160476[_0x3e2d4b(0x20e)]!=='')AudioManager['playSe'](_0x160476);},Game_Action['prototype'][_0x325142(0x300)]=function(_0x1d6c8d){const _0x3c5fb9=_0x325142;if(!_0x1d6c8d)return;const _0x38d3c6=VisuMZ[_0x3c5fb9(0x233)]['Settings'][_0x3c5fb9(0x230)];if(!_0x38d3c6)return;if(_0x38d3c6[_0x3c5fb9(0x2fe)]==='')return;const _0x276e2a=_0x38d3c6[_0x3c5fb9(0x2fe)],_0x1990f0={'textColor':_0x38d3c6[_0x3c5fb9(0x1e4)]||0x0,'flashColor':_0x38d3c6[_0x3c5fb9(0x243)]||[0x0,0x0,0x0,0x0],'flashDuration':_0x38d3c6[_0x3c5fb9(0x252)]||0x3c};_0x1d6c8d['setupTextPopup'](_0x276e2a,_0x1990f0);},Game_Action[_0x325142(0x22c)][_0x325142(0x2d1)]=function(_0x43a551){const _0x51a655=_0x325142;if(!_0x43a551)return;const _0x2716e4=VisuMZ[_0x51a655(0x233)]['Settings'][_0x51a655(0x320)];if(_0x2716e4&&_0x2716e4[_0x51a655(0x2ba)]){if(_0x51a655(0x25a)===_0x51a655(0x29d)){if(_0x64f21c['stolen']){const _0x47a7c6=_0x203dda[_0x51a655(0x27c)];_0x4278b8+=_0x4a8860-this[_0x51a655(0x24a)](_0x47a7c6)[_0x51a655(0x206)],this[_0x51a655(0x2c3)](_0x47a7c6,_0x364b43,_0x2d4d3d);}else{if(_0x5a0ac4['StealItems'][_0x51a655(0x290)][_0x51a655(0x2a2)][_0x51a655(0x240)]){const _0x24391c=_0x24aeda[_0x51a655(0x233)][_0x51a655(0x28e)](this['_action'],this['_enemy']);let _0x328396=_0x24391c[_0x51a655(0x253)]['all']*_0x53f2d6[_0x51a655(0x253)],_0x4d913e=_0x24391c[_0x51a655(0x308)]['all'];_0x328396*=_0x24391c[_0x51a655(0x253)][_0x1ff5b5['type']['toLowerCase']()],_0x4d913e+=_0x24391c[_0x51a655(0x308)][_0x250d43[_0x51a655(0x2a3)][_0x51a655(0x1ef)]()];let _0xe3587=(_0x328396+_0x4d913e)[_0x51a655(0x254)](0x0,0x1)*0x64;_0xe3587>0x0&&_0xe3587<0x64&&(_0xe3587=_0xe3587[_0x51a655(0x246)](0x2)),_0xe3587=_0x1fb48b(_0xe3587)+'%',_0x52326a+=_0xdc90b8-this[_0x51a655(0x24a)](_0xe3587)[_0x51a655(0x206)],this[_0x51a655(0x2c3)](_0xe3587,_0x466da7,_0x166ec2);}}}else _0x2716e4[_0x51a655(0x2ba)][_0x51a655(0x2ed)](this,this['subject'](),_0x43a551);}const _0x466d19=VisuMZ['StealItems'][_0x51a655(0x1f0)](this[_0x51a655(0x27b)](),_0x51a655(0x2ba));VisuMZ[_0x51a655(0x233)]['JS'][_0x466d19]&&VisuMZ['StealItems']['JS'][_0x466d19][_0x51a655(0x2ed)](this,this[_0x51a655(0x1d5)](),_0x43a551);},Game_Action[_0x325142(0x22c)][_0x325142(0x31b)]=function(_0x4e7cd3){const _0x5abd9a=_0x325142;this[_0x5abd9a(0x2fb)](_0x4e7cd3),this[_0x5abd9a(0x218)](),this[_0x5abd9a(0x280)](_0x4e7cd3),this['processStealItemsNothingJS'](_0x4e7cd3);},Game_Action[_0x325142(0x22c)][_0x325142(0x2fb)]=function(_0x593e83){const _0x32fe84=_0x325142,_0x44aa5f=VisuMZ[_0x32fe84(0x233)][_0x32fe84(0x290)][_0x32fe84(0x2ee)];if(_0x44aa5f[_0x32fe84(0x238)]){const _0xb5d86d=_0x44aa5f['StealEmpty'],_0x369b8b=SceneManager[_0x32fe84(0x20a)][_0x32fe84(0x221)];if(_0x369b8b&&_0xb5d86d!=='')_0x369b8b[_0x32fe84(0x2f7)](_0xb5d86d);}},Game_Action['prototype'][_0x325142(0x218)]=function(){const _0x454a15=_0x325142,_0x1c0f6e=VisuMZ[_0x454a15(0x233)][_0x454a15(0x290)][_0x454a15(0x2ea)];if(!_0x1c0f6e)return;const _0x1bcab6=_0x454a15(0x298),_0x3c42d1={'name':_0x1c0f6e['%1_name'[_0x454a15(0x247)](_0x1bcab6)]||'','volume':_0x1c0f6e[_0x454a15(0x2e6)[_0x454a15(0x247)](_0x1bcab6)]||0x0,'pitch':_0x1c0f6e[_0x454a15(0x1e2)[_0x454a15(0x247)](_0x1bcab6)]||0x0,'pan':_0x1c0f6e[_0x454a15(0x1fa)[_0x454a15(0x247)](_0x1bcab6)]||0x0};if(_0x3c42d1[_0x454a15(0x20e)]!=='')AudioManager[_0x454a15(0x256)](_0x3c42d1);},Game_Action[_0x325142(0x22c)][_0x325142(0x280)]=function(_0x1fe1bc){const _0x4fce60=_0x325142;if(!_0x1fe1bc)return;const _0x19ebbe=VisuMZ[_0x4fce60(0x233)]['Settings'][_0x4fce60(0x230)];if(!_0x19ebbe)return;if(_0x19ebbe['FailurePopupText']==='')return;const _0x57cf4c=_0x19ebbe[_0x4fce60(0x213)],_0xc0b4d3={'textColor':_0x19ebbe[_0x4fce60(0x317)]||0x0,'flashColor':_0x19ebbe[_0x4fce60(0x2ef)]||[0x0,0x0,0x0,0x0],'flashDuration':_0x19ebbe[_0x4fce60(0x1db)]||0x3c};_0x1fe1bc['setupTextPopup'](_0x57cf4c,_0xc0b4d3);},Game_Action['prototype'][_0x325142(0x2f6)]=function(_0x227b6f){const _0x223e6f=_0x325142;if(!_0x227b6f)return;const _0x598213=VisuMZ[_0x223e6f(0x233)]['Settings']['Mechanics'];_0x598213&&_0x598213[_0x223e6f(0x2f8)]&&_0x598213[_0x223e6f(0x2f8)][_0x223e6f(0x2ed)](this,this[_0x223e6f(0x1d5)](),_0x227b6f);const _0x3a1144=VisuMZ['StealItems']['createKeyJS'](this[_0x223e6f(0x27b)](),_0x223e6f(0x312));VisuMZ[_0x223e6f(0x233)]['JS'][_0x3a1144]&&VisuMZ['StealItems']['JS'][_0x3a1144][_0x223e6f(0x2ed)](this,this[_0x223e6f(0x1d5)](),_0x227b6f);},VisuMZ[_0x325142(0x233)]['Game_BattlerBase_refresh']=Game_BattlerBase[_0x325142(0x22c)]['refresh'],Game_BattlerBase[_0x325142(0x22c)][_0x325142(0x2ac)]=function(){const _0x3d12b3=_0x325142;this[_0x3d12b3(0x249)]={},VisuMZ['StealItems']['Game_BattlerBase_refresh']['call'](this);},Game_BattlerBase[_0x325142(0x22c)][_0x325142(0x27f)]=function(_0x3d6a1d){const _0x2e4ade=_0x325142;return this[_0x2e4ade(0x249)]=this[_0x2e4ade(0x249)]||{},this[_0x2e4ade(0x249)][_0x3d6a1d]!==undefined;},Game_BattlerBase['prototype'][_0x325142(0x202)]=function(){const _0x30369e=_0x325142;let _0x2f67d8=_0x30369e(0x202);if(this[_0x30369e(0x27f)](_0x2f67d8))return this[_0x30369e(0x249)][_0x2f67d8];return this[_0x30369e(0x249)][_0x2f67d8]=this[_0x30369e(0x201)](),this['_cache'][_0x2f67d8];},Game_BattlerBase[_0x325142(0x22c)]['createStealRate']=function(){const _0x12e8a4=_0x325142,_0x4bae85=VisuMZ[_0x12e8a4(0x233)][_0x12e8a4(0x214)];let _0x1abbf1=0x1;for(const _0x76b628 of this['traitObjects']()){if(!_0x76b628)continue;const _0x32d83f=_0x76b628[_0x12e8a4(0x2aa)];_0x32d83f[_0x12e8a4(0x232)](_0x4bae85[_0x12e8a4(0x2b5)])&&(_0x12e8a4(0x30b)!==_0x12e8a4(0x30b)?_0x461eb9=this[_0x12e8a4(0x291)](_0x1d0a3a):_0x1abbf1*=Number(RegExp['$1'])*0.01);}return Math['max'](0x0,_0x1abbf1);},Game_BattlerBase[_0x325142(0x22c)][_0x325142(0x1fd)]=function(){const _0x2f2fd0=_0x325142;let _0x267dda=_0x2f2fd0(0x1fd);if(this[_0x2f2fd0(0x27f)](_0x267dda))return this[_0x2f2fd0(0x249)][_0x267dda];return this[_0x2f2fd0(0x249)][_0x267dda]=this[_0x2f2fd0(0x237)](),this[_0x2f2fd0(0x249)][_0x267dda];},Game_BattlerBase['prototype']['createStealPlus']=function(){const _0x3185e7=_0x325142,_0x528009=VisuMZ[_0x3185e7(0x233)][_0x3185e7(0x214)];let _0x4c1f71=0x0;const _0xbb633a=VisuMZ[_0x3185e7(0x233)][_0x3185e7(0x290)][_0x3185e7(0x320)];_0xbb633a&&_0xbb633a['JsBonusSteal']&&(_0x4c1f71+=_0xbb633a[_0x3185e7(0x1f7)][_0x3185e7(0x2ed)](this));for(const _0x194e96 of this['traitObjects']()){if(!_0x194e96)continue;const _0x137375=_0x194e96[_0x3185e7(0x2aa)];if(_0x137375['match'](_0x528009[_0x3185e7(0x1f6)])){if(_0x3185e7(0x25d)!=='yVQdb')_0x4c1f71+=Number(RegExp['$1'])*0.01;else{const _0x3dd6ea=_0x569f56[_0x3185e7(0x245)],_0x2b0dd0=_0x3bbc5d['_scene'][_0x3185e7(0x221)];if(_0x2b0dd0&&_0x3dd6ea!=='')_0x2b0dd0[_0x3185e7(0x2f7)](_0x3dd6ea);}}}return _0x4c1f71;},Game_BattlerBase[_0x325142(0x22c)][_0x325142(0x316)]=function(){const _0x55da27=_0x325142;let _0x43a127=_0x55da27(0x316);if(this[_0x55da27(0x27f)](_0x43a127))return this['_cache'][_0x43a127];return this[_0x55da27(0x249)][_0x43a127]=this[_0x55da27(0x289)](),this[_0x55da27(0x249)][_0x43a127];},Game_BattlerBase[_0x325142(0x22c)]['createStealResist']=function(){const _0x114a73=_0x325142,_0x26fff4=VisuMZ[_0x114a73(0x233)]['RegExp'];let _0x451eb4=0x0;const _0x1b1588=VisuMZ[_0x114a73(0x233)][_0x114a73(0x290)]['Mechanics'];_0x1b1588&&_0x1b1588[_0x114a73(0x26a)]&&(_0x451eb4+=_0x1b1588[_0x114a73(0x26a)][_0x114a73(0x2ed)](this));for(const _0x989a67 of this[_0x114a73(0x225)]()){if(_0x114a73(0x1e0)===_0x114a73(0x2f2))_0x280b7d[_0x114a73(0x2a3)]='ITEM',_0x330b27['id']=_0x283005[_0x114a73(0x279)](_0x306fa6['$1']);else{if(!_0x989a67)continue;const _0x1378b3=_0x989a67[_0x114a73(0x2aa)];_0x1378b3[_0x114a73(0x232)](_0x26fff4[_0x114a73(0x2b9)])&&(_0x114a73(0x1cd)!==_0x114a73(0x200)?_0x451eb4+=Number(RegExp['$1'])*0.01:_0x24e3c8[_0x114a73(0x2ad)]+=_0x454f9b(_0x4bcd6c['$1'])*0.01);}}return _0x451eb4;},VisuMZ[_0x325142(0x233)][_0x325142(0x26f)]=Game_Enemy[_0x325142(0x22c)]['setup'],Game_Enemy[_0x325142(0x22c)][_0x325142(0x307)]=function(_0x282f0b,_0x76664d,_0x504868){const _0x1ad61b=_0x325142;VisuMZ[_0x1ad61b(0x233)]['Game_Enemy_setup']['call'](this,_0x282f0b,_0x76664d,_0x504868),!Imported[_0x1ad61b(0x234)]&&this[_0x1ad61b(0x208)]();},VisuMZ[_0x325142(0x233)][_0x325142(0x269)]=Game_Enemy['prototype'][_0x325142(0x1fc)],Game_Enemy[_0x325142(0x22c)]['setupEnemyLevels']=function(){const _0x16597f=_0x325142;VisuMZ[_0x16597f(0x233)][_0x16597f(0x269)][_0x16597f(0x2ed)](this),this[_0x16597f(0x208)]();},Game_Enemy[_0x325142(0x22c)][_0x325142(0x2f4)]=function(){const _0x2ac29b=_0x325142;if(this['_stealableItems']===undefined)this[_0x2ac29b(0x208)]();return this['_stealableItems'];},Game_Enemy[_0x325142(0x22c)]['setupStealableItems']=function(){const _0x1518f9=_0x325142,_0x5f36da=this[_0x1518f9(0x23b)]();if(!_0x5f36da)return;this['_stealableItems']=VisuMZ['StealItems'][_0x1518f9(0x274)](this,_0x5f36da);},VisuMZ['StealItems'][_0x325142(0x1f4)]={},VisuMZ[_0x325142(0x233)][_0x325142(0x274)]=function(_0x1bad3e,_0x2830ce){const _0x4acb10=_0x325142;if(!_0x2830ce)return[];if(VisuMZ[_0x4acb10(0x233)][_0x4acb10(0x1f4)][_0x2830ce['id']]){if('XxPVB'!==_0x4acb10(0x2bb))_0x3f618b[_0x4acb10(0x2ad)]=_0x3f80a8[_0x4acb10(0x233)]['JS'][_0x378ce3][_0x4acb10(0x2ed)](_0x379a65,_0x5efa18[_0x4acb10(0x1d5)](),_0x35e580,_0x289931['all']);else return JsonEx[_0x4acb10(0x25c)](VisuMZ[_0x4acb10(0x233)][_0x4acb10(0x1f4)][_0x2830ce['id']]);}VisuMZ['StealItems']['StealData'][_0x2830ce['id']]=[];const _0x2162bc=VisuMZ[_0x4acb10(0x233)][_0x4acb10(0x290)]['Auto'],_0x1e2e2e=VisuMZ[_0x4acb10(0x233)][_0x4acb10(0x214)],_0x3a1345=_0x2830ce[_0x4acb10(0x2aa)];if(_0x2162bc[_0x4acb10(0x2e4)]&&_0x2830ce[_0x4acb10(0x2cb)]>0x0){if(_0x4acb10(0x1de)===_0x4acb10(0x1de)){const _0xf18866={'type':'GOLD','id':_0x2830ce[_0x4acb10(0x2cb)],'rate':_0x2162bc[_0x4acb10(0x21c)],'stolen':![],'drop':!![]};VisuMZ[_0x4acb10(0x233)]['StealData'][_0x2830ce['id']][_0x4acb10(0x29c)](_0xf18866);}else{const _0xfb09ed=_0x43fae6[_0x4acb10(0x299)]()[this['_enemyWindow'][_0x4acb10(0x24b)]()],_0x45d93f=_0x1b657d[_0x4acb10(0x2a8)]();this[_0x4acb10(0x21a)][_0x4acb10(0x310)](_0xfb09ed,_0x45d93f),this[_0x4acb10(0x21a)][_0x4acb10(0x2ac)](),this[_0x4acb10(0x21a)]['show'](),this[_0x4acb10(0x21a)][_0x4acb10(0x30e)]();}}if(_0x2162bc[_0x4acb10(0x315)]){const _0x115047=_0x2830ce[_0x4acb10(0x29e)];for(const _0x14f73a of _0x115047){if(_0x4acb10(0x23d)==='wYQwB'){if(!_0x500fa4)return;const _0x54280c=_0x1e316b['StealItems']['Settings'][_0x4acb10(0x230)];if(!_0x54280c)return;if(_0x54280c[_0x4acb10(0x2fe)]==='')return;const _0x6dadd8=_0x54280c[_0x4acb10(0x213)],_0x856352={'textColor':_0x54280c[_0x4acb10(0x317)]||0x0,'flashColor':_0x54280c[_0x4acb10(0x2ef)]||[0x0,0x0,0x0,0x0],'flashDuration':_0x54280c[_0x4acb10(0x1db)]||0x3c};_0x5d8716[_0x4acb10(0x1ed)](_0x6dadd8,_0x856352);}else{if(_0x14f73a){const _0x43eefc={'type':_0x4acb10(0x23e),'id':_0x14f73a['dataId'],'rate':0x1/Math[_0x4acb10(0x264)](0x1,_0x14f73a[_0x4acb10(0x2a6)])*_0x2162bc['ItemRate'],'stolen':![],'drop':!![],'dropIndex':_0x115047[_0x4acb10(0x224)](_0x14f73a)};_0x43eefc['type']=[_0x4acb10(0x23e),'ITEM','WEAPON',_0x4acb10(0x29a)][_0x14f73a[_0x4acb10(0x2fa)]];if(_0x43eefc[_0x4acb10(0x2a3)]===_0x4acb10(0x23e))continue;VisuMZ[_0x4acb10(0x233)][_0x4acb10(0x1f4)][_0x2830ce['id']][_0x4acb10(0x29c)](_0x43eefc);}}}}const _0x43be1d=_0x3a1345[_0x4acb10(0x232)](_0x1e2e2e['StealableItemSingle']);if(_0x43be1d)for(const _0x2cea68 of _0x43be1d){if(!_0x2cea68)continue;_0x2cea68[_0x4acb10(0x232)](_0x1e2e2e[_0x4acb10(0x2dd)]);const _0x1a9516=String(RegExp['$1'])[_0x4acb10(0x2af)](),_0x141679=Number(RegExp['$2'])*0.01,_0x88acfb=VisuMZ[_0x4acb10(0x233)]['ParseStealObject'](_0x1a9516,_0x141679);if(!!_0x88acfb)VisuMZ[_0x4acb10(0x233)]['StealData'][_0x2830ce['id']][_0x4acb10(0x29c)](_0x88acfb);}if(_0x3a1345[_0x4acb10(0x232)](_0x1e2e2e[_0x4acb10(0x1ea)])){const _0x52c95e=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x2f945b of _0x52c95e){if('iqxZm'===_0x4acb10(0x22a)){if(_0x2f945b[_0x4acb10(0x232)](/(.*):[ ](.*)([%％])/i)){const _0x3851ad=String(RegExp['$1'])['trim'](),_0x3963f8=Number(RegExp['$2'])*0.01,_0x50cc3b=VisuMZ['StealItems'][_0x4acb10(0x2b6)](_0x3851ad,_0x3963f8);if(!!_0x50cc3b)VisuMZ[_0x4acb10(0x233)][_0x4acb10(0x1f4)][_0x2830ce['id']][_0x4acb10(0x29c)](_0x50cc3b);}}else _0x3e9da9=_0x313630[_0x463230['id']];}}return JsonEx[_0x4acb10(0x25c)](VisuMZ[_0x4acb10(0x233)]['StealData'][_0x2830ce['id']]);},VisuMZ[_0x325142(0x233)][_0x325142(0x2b6)]=function(_0x9798bc,_0x56d824){const _0x174fc0=_0x325142,_0x3642e4={'type':'none','id':0x0,'rate':_0x56d824,'stolen':![],'drop':![]};_0x9798bc['match'](/GOLD[ ](\d+)/i)&&(_0x3642e4[_0x174fc0(0x2a3)]=_0x174fc0(0x313),_0x3642e4['id']=Number(RegExp['$1']));if(_0x9798bc[_0x174fc0(0x232)](/ITEM[ ](\d+)/i))_0x174fc0(0x20d)==='AnVoY'?(_0x3642e4[_0x174fc0(0x2a3)]='ITEM',_0x3642e4['id']=Number(RegExp['$1'])):(_0x35b0c6[_0x174fc0(0x22c)][_0x174fc0(0x2b7)][_0x174fc0(0x2ed)](this,_0x221166),this[_0x174fc0(0x301)](),this['_enemy']=null,this['_action']=null);else _0x9798bc[_0x174fc0(0x232)](/ITEM[ ](.*)/i)&&(_0x3642e4[_0x174fc0(0x2a3)]=_0x174fc0(0x207),_0x3642e4['id']=DataManager[_0x174fc0(0x279)](RegExp['$1']));if(_0x9798bc[_0x174fc0(0x232)](/WEAPON[ ](\d+)/i))_0x3642e4[_0x174fc0(0x2a3)]='WEAPON',_0x3642e4['id']=Number(RegExp['$1']);else _0x9798bc[_0x174fc0(0x232)](/WEAPON[ ](.*)/i)&&(_0x3642e4[_0x174fc0(0x2a3)]=_0x174fc0(0x257),_0x3642e4['id']=DataManager[_0x174fc0(0x1fe)](RegExp['$1']));if(_0x9798bc[_0x174fc0(0x232)](/ARMOR[ ](\d+)/i)){if('KuqAX'!==_0x174fc0(0x281))_0x3642e4['type']=_0x174fc0(0x29a),_0x3642e4['id']=Number(RegExp['$1']);else{const _0x1999e3=_0x4ff185['VISUAL_GOLD_DISPLAY_PAD_ZERO_DEFAULT'],_0x24fbb1=_0x2db093[_0x174fc0(0x22b)][_0x174fc0(0x21b)](_0x3d0054['id'],_0x1999e3,![]);_0x127d6a=_0x185592[_0x174fc0(0x247)](_0x24fbb1,'');}}else _0x9798bc['match'](/ARMOR[ ](.*)/i)&&('BqCqr'==='jRNKb'?(this[_0x174fc0(0x2bc)][_0x174fc0(0x29c)](_0x9aaeab),this[_0x174fc0(0x2ac)]()):(_0x3642e4[_0x174fc0(0x2a3)]='ARMOR',_0x3642e4['id']=DataManager[_0x174fc0(0x220)](RegExp['$1'])));return _0x3642e4;},VisuMZ[_0x325142(0x233)]['Game_Enemy_gold']=Game_Enemy[_0x325142(0x22c)][_0x325142(0x2cb)],Game_Enemy[_0x325142(0x22c)][_0x325142(0x2cb)]=function(){const _0x1bbaba=_0x325142,_0x28e52=VisuMZ['StealItems'][_0x1bbaba(0x290)][_0x1bbaba(0x277)];if(_0x28e52[_0x1bbaba(0x2e4)]&&_0x28e52[_0x1bbaba(0x2c0)]){if(_0x1bbaba(0x311)!==_0x1bbaba(0x311)){const _0x2f888a=_0xb034ca[_0x1bbaba(0x287)],_0x21affc=_0xadce36['_scene'][_0x1bbaba(0x221)];if(_0x21affc&&_0x2f888a!=='')_0x21affc[_0x1bbaba(0x2f7)](_0x2f888a);}else{const _0x3252fe=this[_0x1bbaba(0x2f4)]();for(const _0xc7cc32 of _0x3252fe){if(!_0xc7cc32)continue;if(_0xc7cc32[_0x1bbaba(0x203)]&&_0xc7cc32[_0x1bbaba(0x2a3)]===_0x1bbaba(0x313)){if('pBaCG'===_0x1bbaba(0x30d)){if(_0xc7cc32[_0x1bbaba(0x263)])return 0x0;}else _0x5b7279['armor']*=_0x5cdf73(_0x5c9146['$1'])*0.01;}}}}return VisuMZ[_0x1bbaba(0x233)]['Game_Enemy_gold'][_0x1bbaba(0x2ed)](this);},VisuMZ[_0x325142(0x233)][_0x325142(0x1fb)]=Game_Enemy[_0x325142(0x22c)][_0x325142(0x28a)],Game_Enemy[_0x325142(0x22c)][_0x325142(0x28a)]=function(){const _0x42b35e=_0x325142,_0x13ee21=JsonEx[_0x42b35e(0x25c)](this[_0x42b35e(0x23b)]()[_0x42b35e(0x29e)]),_0x578e30=VisuMZ['StealItems'][_0x42b35e(0x290)][_0x42b35e(0x277)];if(_0x578e30[_0x42b35e(0x315)]&&_0x578e30[_0x42b35e(0x260)]){const _0x1dd143=this[_0x42b35e(0x2f4)]();for(const _0x24b685 of _0x1dd143){if(!_0x24b685)continue;if(_0x24b685[_0x42b35e(0x203)]&&_0x24b685[_0x42b35e(0x2a3)]!==_0x42b35e(0x313)){if(!_0x24b685[_0x42b35e(0x263)])continue;const _0x212cb2=_0x24b685['dropIndex'],_0x51f219=this['enemy']()[_0x42b35e(0x29e)][_0x212cb2];_0x51f219[_0x42b35e(0x2fa)]=0x0;}}}let _0x40cb1b=VisuMZ['StealItems']['Game_Enemy_makeDropItems'][_0x42b35e(0x2ed)](this);return this[_0x42b35e(0x23b)]()[_0x42b35e(0x29e)]=_0x13ee21,_0x40cb1b;},VisuMZ[_0x325142(0x233)]['Scene_Battle_createEnemyWindow']=Scene_Battle['prototype'][_0x325142(0x223)],Scene_Battle[_0x325142(0x22c)]['createEnemyWindow']=function(){const _0x3e4511=_0x325142;VisuMZ['StealItems']['Scene_Battle_createEnemyWindow'][_0x3e4511(0x2ed)](this),this[_0x3e4511(0x255)]();},Scene_Battle[_0x325142(0x22c)][_0x325142(0x255)]=function(){const _0x5577e3=_0x325142,_0x299da1=this[_0x5577e3(0x1d4)]();this['_stealSnatchWindow']=new Window_StealSnatch(_0x299da1),this[_0x5577e3(0x21a)][_0x5577e3(0x2a4)](this[_0x5577e3(0x205)]),this[_0x5577e3(0x21a)]['setHandler']('ok',this[_0x5577e3(0x1d6)]['bind'](this)),this[_0x5577e3(0x21a)]['setHandler']('cancel',this[_0x5577e3(0x23a)][_0x5577e3(0x2e8)](this)),this['addWindow'](this['_stealSnatchWindow']);},VisuMZ[_0x325142(0x233)][_0x325142(0x2cf)]=Scene_Battle[_0x325142(0x22c)][_0x325142(0x2d8)],Scene_Battle[_0x325142(0x22c)][_0x325142(0x2d8)]=function(){const _0x1ef244=_0x325142;if(this['_stealSnatchWindow']&&this['_stealSnatchWindow']['active'])return!![];return VisuMZ['StealItems'][_0x1ef244(0x2cf)][_0x1ef244(0x2ed)](this);},VisuMZ[_0x325142(0x233)][_0x325142(0x2c2)]=Scene_Battle[_0x325142(0x22c)][_0x325142(0x2a7)],Scene_Battle[_0x325142(0x22c)][_0x325142(0x2a7)]=function(){const _0x45e5de=_0x325142;VisuMZ['StealItems'][_0x45e5de(0x2c2)][_0x45e5de(0x2ed)](this),this['_stealSnatchWindow']&&(this['_stealSnatchWindow'][_0x45e5de(0x283)](),this[_0x45e5de(0x21a)][_0x45e5de(0x301)]());},VisuMZ[_0x325142(0x233)]['Scene_Battle_onEnemyOk']=Scene_Battle[_0x325142(0x22c)]['onEnemyOk'],Scene_Battle['prototype'][_0x325142(0x228)]=function(){const _0x594fb6=_0x325142,_0x5bbb70=BattleManager['inputtingAction']();if(this[_0x594fb6(0x21a)]&&_0x5bbb70['isSnatchEffect']())this[_0x594fb6(0x211)]();else{if(_0x594fb6(0x20f)===_0x594fb6(0x20f))VisuMZ['StealItems'][_0x594fb6(0x26c)][_0x594fb6(0x2ed)](this);else{_0x2c4547['push']('GOLD');if(_0x22e721[_0x594fb6(0x232)](/([\+\-]\d+)([%％])/i))_0x23d0fd[_0x594fb6(0x2cb)]+=_0x3d1fef(_0x3353fa['$1'])*0.01;else _0x547a3a['match'](/(\d+)([%％])/i)&&(_0x80b66b[_0x594fb6(0x2cb)]*=_0x3d3720(_0x1f9431['$1'])*0.01);}}},Scene_Battle[_0x325142(0x22c)][_0x325142(0x211)]=function(){const _0x4299ad=_0x325142,_0xda238b=$gameTroop['members']()[this[_0x4299ad(0x2f9)][_0x4299ad(0x24b)]()],_0x856904=BattleManager['inputtingAction']();this[_0x4299ad(0x21a)][_0x4299ad(0x310)](_0xda238b,_0x856904),this[_0x4299ad(0x21a)][_0x4299ad(0x2ac)](),this[_0x4299ad(0x21a)][_0x4299ad(0x272)](),this['_stealSnatchWindow'][_0x4299ad(0x30e)]();},Scene_Battle[_0x325142(0x22c)]['onStealSnatchOk']=function(){const _0x2755ef=_0x325142,_0x262ca4=BattleManager[_0x2755ef(0x2a8)](),_0x2b77e9=$gameTroop[_0x2755ef(0x299)]()[this[_0x2755ef(0x2f9)][_0x2755ef(0x24b)]()],_0x2e2656=this[_0x2755ef(0x21a)][_0x2755ef(0x27b)]();_0x262ca4[_0x2755ef(0x2b3)](_0x2b77e9,_0x2e2656),VisuMZ[_0x2755ef(0x233)][_0x2755ef(0x26c)][_0x2755ef(0x2ed)](this);},Scene_Battle[_0x325142(0x22c)][_0x325142(0x23a)]=function(){const _0x52f020=_0x325142;this[_0x52f020(0x21a)][_0x52f020(0x301)](),this[_0x52f020(0x21a)][_0x52f020(0x283)](),this[_0x52f020(0x2f9)]['show'](),this[_0x52f020(0x2f9)][_0x52f020(0x30e)]();if(Imported['VisuMZ_1_BattleCore']){if(_0x52f020(0x319)==='fuCMc'){const _0x2753d0=_0x49726c['_scene']['_logWindow'];if(_0x2753d0&&_0x143d92!=='')_0x2753d0[_0x52f020(0x2f7)](_0x132301);}else this[_0x52f020(0x2f9)]['autoSelect']();}},Window_BattleLog['prototype'][_0x325142(0x2f7)]=function(_0x1824f8){const _0xa8ea40=_0x325142;this[_0xa8ea40(0x2bc)]['push'](_0x1824f8),this[_0xa8ea40(0x2ac)]();};function Window_StealSnatch(){this['initialize'](...arguments);}function _0x3965(_0x493c33,_0x26290b){const _0x500616=_0x5006();return _0x3965=function(_0x396519,_0x555576){_0x396519=_0x396519-0x1cd;let _0x37db35=_0x500616[_0x396519];return _0x37db35;},_0x3965(_0x493c33,_0x26290b);}Window_StealSnatch['prototype']=Object[_0x325142(0x2ce)](Window_ItemList[_0x325142(0x22c)]),Window_StealSnatch[_0x325142(0x22c)][_0x325142(0x216)]=Window_StealSnatch,Window_StealSnatch['prototype']['initialize']=function(_0x40d179){const _0x294806=_0x325142;Window_ItemList[_0x294806(0x22c)][_0x294806(0x2b7)][_0x294806(0x2ed)](this,_0x40d179),this[_0x294806(0x301)](),this[_0x294806(0x250)]=null,this[_0x294806(0x275)]=null;},Window_StealSnatch[_0x325142(0x22c)]['setDetails']=function(_0x440f92,_0x1f9b0e){const _0x2a3f35=_0x325142;this[_0x2a3f35(0x250)]=_0x440f92,this[_0x2a3f35(0x275)]=_0x1f9b0e,this['refresh'](),this[_0x2a3f35(0x272)](),this[_0x2a3f35(0x22e)](0x0);},Window_StealSnatch[_0x325142(0x22c)][_0x325142(0x29f)]=function(){const _0x1d961c=_0x325142;this[_0x1d961c(0x21f)]=[];if(!this[_0x1d961c(0x250)])return;const _0x4065c1=VisuMZ[_0x1d961c(0x233)][_0x1d961c(0x28e)](this['_action'],this['_enemy']);if(_0x4065c1['types'][_0x1d961c(0x28d)]<=0x0)return;this[_0x1d961c(0x21f)]=this[_0x1d961c(0x250)]['getStealableItems']()[_0x1d961c(0x2a5)](_0x2a7975=>{const _0x569635=_0x1d961c;return _0x4065c1[_0x569635(0x2ab)][_0x569635(0x295)](_0x2a7975[_0x569635(0x2a3)]);});},Window_StealSnatch[_0x325142(0x22c)][_0x325142(0x212)]=function(_0x2f9c16){return _0x2f9c16&&!_0x2f9c16['stolen'];},Window_StealSnatch[_0x325142(0x22c)]['numberWidth']=function(){const _0x454c7d=_0x325142;if(this[_0x454c7d(0x2d7)])return this[_0x454c7d(0x2d7)];return this[_0x454c7d(0x2d7)]=this[_0x454c7d(0x2de)](_0x454c7d(0x27a)),this[_0x454c7d(0x2d7)]=Math['max'](this[_0x454c7d(0x2d7)],this[_0x454c7d(0x24a)](TextManager[_0x454c7d(0x27c)])[_0x454c7d(0x206)]),this[_0x454c7d(0x2d7)];},Window_StealSnatch[_0x325142(0x22c)][_0x325142(0x20c)]=function(_0x5b32d6,_0x4eddbb,_0x4ad7b8,_0x494c10){const _0x5a43a8=_0x325142;if(!_0x5b32d6)return;switch(_0x5b32d6['type'][_0x5a43a8(0x2ae)]()[_0x5a43a8(0x2af)]()){case'GOLD':const _0x4ffdd7=TextManager[_0x5a43a8(0x31c)]['format']('\x5cI[%1]'[_0x5a43a8(0x247)](ImageManager[_0x5a43a8(0x210)]),_0x5b32d6['id'],TextManager[_0x5a43a8(0x31d)]);this[_0x5a43a8(0x2c3)](_0x4ffdd7,_0x4eddbb,_0x4ad7b8);break;case _0x5a43a8(0x207):Window_Base[_0x5a43a8(0x22c)][_0x5a43a8(0x20c)][_0x5a43a8(0x2ed)](this,$dataItems[_0x5b32d6['id']],_0x4eddbb,_0x4ad7b8,_0x494c10);break;case'WEAPON':Window_Base[_0x5a43a8(0x22c)][_0x5a43a8(0x20c)][_0x5a43a8(0x2ed)](this,$dataWeapons[_0x5b32d6['id']],_0x4eddbb,_0x4ad7b8,_0x494c10);break;case _0x5a43a8(0x29a):Window_Base[_0x5a43a8(0x22c)][_0x5a43a8(0x20c)][_0x5a43a8(0x2ed)](this,$dataArmors[_0x5b32d6['id']],_0x4eddbb,_0x4ad7b8,_0x494c10);break;}},Window_StealSnatch['prototype'][_0x325142(0x209)]=function(_0x4ec1d4,_0x17fafd,_0x18f64f,_0x329e2e){const _0x143cc5=_0x325142;if(_0x4ec1d4[_0x143cc5(0x263)]){if(_0x143cc5(0x242)!==_0x143cc5(0x1e3)){const _0x3709f8=TextManager[_0x143cc5(0x27c)];_0x17fafd+=_0x329e2e-this['textSizeEx'](_0x3709f8)[_0x143cc5(0x206)],this[_0x143cc5(0x2c3)](_0x3709f8,_0x17fafd,_0x18f64f);}else this[_0x143cc5(0x258)](_0x727015),this['processStealItemsFailureSFX'](),this[_0x143cc5(0x300)](_0x1f7141),this[_0x143cc5(0x2d1)](_0x42f59c);}else{if(VisuMZ[_0x143cc5(0x233)]['Settings']['Snatch']['DisplaySuccess']){if('idQqY'===_0x143cc5(0x2bf)){const _0x1a55f0=VisuMZ[_0x143cc5(0x233)][_0x143cc5(0x28e)](this[_0x143cc5(0x275)],this['_enemy']);let _0x1e45de=_0x1a55f0[_0x143cc5(0x253)][_0x143cc5(0x2ad)]*_0x4ec1d4['rate'],_0x160a25=_0x1a55f0[_0x143cc5(0x308)][_0x143cc5(0x2ad)];_0x1e45de*=_0x1a55f0[_0x143cc5(0x253)][_0x4ec1d4['type']['toLowerCase']()],_0x160a25+=_0x1a55f0[_0x143cc5(0x308)][_0x4ec1d4[_0x143cc5(0x2a3)][_0x143cc5(0x1ef)]()];let _0x25fc20=(_0x1e45de+_0x160a25)['clamp'](0x0,0x1)*0x64;if(_0x25fc20>0x0&&_0x25fc20<0x64){if(_0x143cc5(0x261)!==_0x143cc5(0x29b))_0x25fc20=_0x25fc20[_0x143cc5(0x246)](0x2);else{const _0x4b8c96=_0x26aea5(_0x236724['$1']);_0x4b8c96!==_0x113086[_0x4902e4][_0x143cc5(0x22d)]&&(_0x2fb119(_0x143cc5(0x2c9)[_0x143cc5(0x247)](_0x4817b8,_0x4b8c96)),_0x4757b1['exit']());}}_0x25fc20=String(_0x25fc20)+'%',_0x17fafd+=_0x329e2e-this[_0x143cc5(0x24a)](_0x25fc20)['width'],this[_0x143cc5(0x2c3)](_0x25fc20,_0x17fafd,_0x18f64f);}else{const _0x84dabe=_0x4d9b0b[_0x143cc5(0x233)]['Settings'][_0x143cc5(0x2ea)];if(!_0x84dabe)return;const _0x3fb8ae=_0x55d9af[_0x143cc5(0x2a3)][_0x143cc5(0x1ef)]()[_0x143cc5(0x2af)](),_0x4ef46d={'name':_0x84dabe[_0x143cc5(0x2c7)[_0x143cc5(0x247)](_0x3fb8ae)]||'','volume':_0x84dabe[_0x143cc5(0x2e6)[_0x143cc5(0x247)](_0x3fb8ae)]||0x0,'pitch':_0x84dabe[_0x143cc5(0x1e2)[_0x143cc5(0x247)](_0x3fb8ae)]||0x0,'pan':_0x84dabe[_0x143cc5(0x1fa)[_0x143cc5(0x247)](_0x3fb8ae)]||0x0};if(_0x4ef46d['name']!=='')_0x36167f[_0x143cc5(0x256)](_0x4ef46d);}}}},Window_StealSnatch[_0x325142(0x22c)][_0x325142(0x1ec)]=function(_0x52a06e){const _0x58d9c8=_0x325142;if(this['_helpWindow'])switch(_0x52a06e[_0x58d9c8(0x2a3)]['toUpperCase']()[_0x58d9c8(0x2af)]()){case _0x58d9c8(0x313):this[_0x58d9c8(0x205)][_0x58d9c8(0x2a0)](TextManager[_0x58d9c8(0x27d)]);break;case'ITEM':this[_0x58d9c8(0x205)][_0x58d9c8(0x1d7)]($dataItems[_0x52a06e['id']]);break;case _0x58d9c8(0x257):this[_0x58d9c8(0x205)][_0x58d9c8(0x1d7)]($dataWeapons[_0x52a06e['id']]);break;case _0x58d9c8(0x29a):this[_0x58d9c8(0x205)][_0x58d9c8(0x1d7)]($dataArmors[_0x52a06e['id']]);break;}};function _0x5006(){const _0x235a01=['snatchAlreadyStolen','snatchGoldHelpText','StealAction1','checkCacheKey','processStealItemsNothingPopup','IWkma','addParam','deactivate','piXFq','gainItem','_itemIDs','StealFail','SuccessFlashDuration','createStealResist','makeDropItems','createStealRateJS','oBFem','length','DetermineStealData','index','Settings','getSnatchTarget','gainGold','ShuffleArray','Scene_Battle_createEnemyWindow','includes','PPkZw','parse','empty','members','ARMOR','mjRtp','push','VpMYF','dropItems','makeItemList','setText','SuccessPopupText','Snatch','type','setHelpWindow','filter','denominator','hideSubInputWindows','inputtingAction','SuccessTextColor','note','types','refresh','all','toUpperCase','trim','ARRAYNUM','random','IBuBL','registerSnatchTarget','EVAL','StealRate','ParseStealObject','initialize','processStealItemsAttempt','StealResist','JsOnStealFail','XxPVB','_lines','STRUCT','ARRAYJSON','idQqY','GoldRemoval','uaSuT','Scene_Battle_hideSubInputWindows','drawTextEx','floor','ConvertParams','dfsNo','%1_name','StealItem','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','3BHfTLs','gold','2470388IQmcDI','nSsYb','create','Scene_Battle_isAnyInputWindowActive','process_VisuMZ_StealItems_JS','processStealItemsFailureJS','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','10AnRfgt','Weapon-%1-%2','processStealItemsSuccess','Uqcbb','_numberWidth','isAnyInputWindowActive','ftAYd','startStealItemsUserEffect','Game_Action_applyItemUserEffect','ySzEP','StealableItemSingle','textWidth','processStealItemsSuccessLogWindow','TpePg','Parse_Notetags_JS','Skill-%1-%2','iconIndex','AutoGold','xZWTJ','%1_volume','_snatchItemIndex','bind','GoldNameFmt','Sound','sTHLY','_weaponIDs','call','BattleLog','EmptyFlashColor','WycEc','isSnatchEffect','iwQMu','112Uouqwx','getStealableItems','VisuMZ_1_BattleCore','processStealItemsNothingJS','addStealText','JsOnStealEmpty','_enemyWindow','kind','processStealItemsNothingLogWindow','Armor-%1-%2','1073193nECMUC','FailurePopupText','isForOpponent','processStealItemsFailurePopup','hide','Class-%1-%2','asxJm','VISUAL_GOLD_DISPLAY_PAD_ZERO_DEFAULT','jOPOg','LWOmi','setup','plus','4uLQnaM','makeSuccess','mTZXw','GoldHelp','pBaCG','activate','JsStealRateGold','setDetails','OkVTC','JsOnStealNothing','GOLD','processStealItemsFailure','AutoItem','stealResist','EmptyTextColor','Enemy-%1-%2','YZMto','JsStealRateItem','processStealItemsNothing','snatchGoldNameFmt','currencyUnit','weapon','442295kCarJt','Mechanics','jIPOK','HHner','AlreadyStolen','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20rate\x20=\x20arguments[2];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Rate\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20rate;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','armor','Item-%1-%2','status','itemWindowRect','subject','onStealSnatchOk','setItem','XeIRC','processStealItemsSuccessSFX','LKUFU','EmptyFlashDuration','ARRAYSTR','EquipDebuff','hTiSj','applyItemUserEffect','JApvt','processStealItemsSuccessPopup','%1_pitch','RJFRW','FailureTextColor','setupIconTextPopup','xufqF','pfCus','description','onDatabaseLoaded','StealableItemBatch','_snatchEnemyIndex','setHelpWindowItem','setupTextPopup','\x5cI[%1]','toLowerCase','createKeyJS','processStealItemsSuccessJS','syOQk','VisuMZ_3_VisualGoldDisplay','StealData','fail','StealPlus','JsBonusSteal','isEnemy','process_VisuMZ_StealItems','%1_pan','Game_Enemy_makeDropItems','setupEnemyLevels','stealPlus','getWeaponIdWithName','concat','YkDVH','createStealRate','stealRate','drop','FUNC','_helpWindow','width','ITEM','setupStealableItems','drawItemNumber','_scene','GoldIcon','drawItemName','AnVoY','name','PkAUr','snatchGoldIcon','startStealSnatchSelection','isEnabled','EmptyPopupText','RegExp','cFEnd','constructor','ParseSkillNotetags','processStealItemsNothingSFX','createOnStealJS','_stealSnatchWindow','CreateVisualGoldText','GoldRate','NMYDN','params','_data','getArmorIdWithName','_logWindow','OVhXw','createEnemyWindow','indexOf','traitObjects','Actor-%1-%2','JsStealRateWeapon','onEnemyOk','LnGAj','iqxZm','VisualGoldDisplay','prototype','version','forceSelect','SuccessFlashColor','Popup','427130aijVSn','match','StealItems','VisuMZ_3_EnemyLevels','_armorIDs','QJpQi','createStealPlus','ShowMessages','CoreEngine','onStealSnatchCancel','enemy','WKPDx','uGyzN','none','ParseItemNotetags','DisplaySuccess','JsStealRate','wLZKF','FailureFlashColor','AIsRt','StealEmpty','toFixed','format','_visualDrops','_cache','textSizeEx','enemyIndex','isForOne','7860663wTnamx','500655avfeQV','IEiBG','_enemy','Scene_Boot_onDatabaseLoaded','FailureFlashDuration','rate','clamp','createStealSnatchWindow','playSe','WEAPON','processStealItemsFailureLogWindow','UeLDo','WwAdh','exit','makeDeepCopy','HSxIM','SuccessItemName','processStealItemsFailureSFX','ItemRemoval','ROKVc','XFggU','stolen','max','iEotV','JsStealRateArmor','STR','JsOnStealSuccess','Game_Enemy_setupEnemyLevels','JsStealResist','StealAction2','Scene_Battle_onEnemyOk','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20user;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20target;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20item\x20=\x20arguments[2];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20gold\x20=\x20arguments[3];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20','1095042zCkUEz','Game_Enemy_setup','StealGold','map','show','VisuMZ_4_ExtraEnemyDrops','StealableItems','_action','NUM','Auto','State-%1-%2','getItemIdWithName','88.88%','item'];_0x5006=function(){return _0x235a01;};return _0x5006();}