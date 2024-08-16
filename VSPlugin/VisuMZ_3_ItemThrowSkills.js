//=============================================================================
// VisuStella MZ - Item Throw Skills
// VisuMZ_3_ItemThrowSkills.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ItemThrowSkills = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemThrowSkills = VisuMZ.ItemThrowSkills || {};
VisuMZ.ItemThrowSkills.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.01] [ItemThrowSkills]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Item_Throw_Skills_VisuStella_MZ
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
 * This plugin introduces Item Throw, which brings the art of throwing items to
 * your battles! Unlock a whole new level of strategy for your actors as they
 * pick up and hurl various items with unique effects and abilities.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Create skills that allow actors to pick and throw items at their targets.
 * * Different skills can have different types of items to throw, which are
 *   distinguished via notetags.
 * * Throwable items have a throw power stat, which can be determined by a
 *   notetag or automatically via plugin parameters and/or their base ATK stat
 *   if the item is a weapon or armor.
 * * This throw power stat can be adjusted for the damage formula of the skill
 *   used to throw the item.
 * * Items thrown can have individual effects, such as having different rates
 *   of accuracy, critical hit rates, difference variances, the ability to
 *   bypass guard, applying states, buffs, or debuffs, as well as removing them
 *   from the target.
 * * Combined usage with the VisuMZ Elements and Status Menu Core can add in
 *   extra individual effects like added elements or changing the elemental
 *   damage outright.
 * * Use JavaScript code to create custom effects for items, weapons, or armors
 *   when thrown at targets.
 * * Automatic action sequences made to fit item throw skills as well as
 *   notetags that give throwable items different animation properties.
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
 * Enemies cannot use Item Throw skills. Simply put, they don't have an item
 * inventory to pick and throw items from. Use a regular skill instead to give
 * the illusion of an Item Throw skill.
 *
 * ---
 *
 * Force Action
 * 
 * You cannot use "Forced Action" with a skill that will throw an item. This
 * includes commands that will chain into an Item Throw skill. The reason
 * behind this is that there is no item input entry for the player to select
 * from for this action.
 *
 * ---
 *
 * VisuMZ_3_ActSeqProjectiles
 * 
 * When using the custom action sequences "PROJECTILE: Icon", the icon used as
 * a projectile will automatically be changed into whatever the thrown item's
 * icon is (or whatever icon is listed under the thrown item's <Throw Icon: x>
 * notetag). This only applies for throwing skills.
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
 * notetags that alter the element used based on the item thrown. There are
 * two notetags accessible through this: <Throw Add Element: x, x, x> which
 * will add additional elements and <Throw Replace Element: x, x, x> which will
 * replace the existing elements with a new set of elements.
 *
 * ---
 *
 * VisuMZ_3_ActSeqProjectiles
 *
 * The automatic action sequences added through this plugin will utilize the
 * Action Sequence Projectiles plugin to show the item being thrown. There will
 * also be extra Plugin Parameters and notetags that can be used to change
 * certain properties of this automatic action sequence.
 *
 * ---
 *
 * ============================================================================
 * Instructions - Item Throw Damage Formula
 * ============================================================================
 *
 * Here's how you can have the thrown item's "throw power" incorporated into
 * the damage formula.
 *
 * ---
 * 
 * Step 1: Item Throw Skill
 * 
 * 1. Create the Item Throw skill with a <Can Throw: x> notetag.
 * 2. For more information on the notetag, refer to the notetag section.
 * 
 * ---
 * 
 * Step 2: Change the Damage Formula
 * 
 * 1. Change the damage formula to have the word "power" in it somewhere
 *    (without the quotes).
 * 2. This will reference the "throw power" of the item, weapon, or armor.
 * 
 * Example:
 * 
 *   a.atk + (power * 10) - b.def
 * 
 * ---
 * 
 * Step 3: Add Throw Type to Items, Weapons, and Armors
 * 
 * 1. Select the Items, Weapons, and Armors you want to be throwable by that
 *    Item Throw skill you've made.
 * 2. Insert the <Throw Type: x> notetag and have 'x' match the <Can Throw: x>
 *    notetag's 'x' value.
 * 
 * Example:
 * 
 * If you are using <Can Throw: Shuriken> in your item throw skill, then only
 * items, weapons, and armors with the notetag <Throw Type: Shuriken> can be
 * used and thrown by that skill.
 * 
 * ---
 * 
 * Step 4: Add Throw Power to Items, Weapons, and Armors
 * 
 * 1. Items will have a default throw power determined by the settings found in
 *    the Plugin Parameters.
 * 2. Weapons and armors will have a default throw power equal to their ATK
 *    parameter in the database.
 * 3. The default throw power can be overwritten with the <Throw Power: x>
 *    notetag where 'x' is the throw power value.
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
 * === Throw Skill-Related Notetags ===
 * 
 * ---
 *
 * <Can Throw: x>
 * <Can Throw: x, x, x>
 *
 * - Used for: Skill Notetags
 * - This notetag causes the skill to be able to throw items of 'x' type.
 * - Replace 'x' with text marking the type or category.
 *   - Insert more 'x' entries to add more types.
 *   - Use 'any' or 'all' in place of 'x' to throw any kind of item.
 *   - Use 'weapon' or 'armor' in place of 'x' to throw any weapon or armor.
 * - Types are determined by the <Throw Type: x> or <Category: x> notetags.
 * - This cannot be used with skills that are made to be used as Active Chain
 *   Skills, Input Combo Skills, or Evolution Matrix Skills.
 * - Likewise, this cannot be used with Item Concoction and Amplify effects.
 * - Throw will consume the selected item, weapon, or armor as well as pay the
 *   throw skill's cost to initiate this effect.
 *   - Key Items, nonconsumable items, and any items with a successful proc of
 *     the <Throw Conserve: x%> notetag will not be consumed.
 *
 * ---
 *
 * <Throw Type: x>
 * <Throw Types: x, x, x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - These are the types that are used to determine what the Item Throw skills
 *   can throw.
 * - Replace 'x' with text marking the type.
 *   - Insert more 'x' entries to add more types.
 * - <Category: x> will also count as a throwable type. However, this notetag
 *   will separate the throwable types from anything else that uses the
 *   <Category: x> notetag.
 * - Some types will be automatically incorporated:
 *   - All items, weapons, and armors will have "Any" and "All" types.
 *   - "Item" and "Items" will be automatically incorporated into item types.
 *   - "Weapon" and "Weapons" will be automatically added into weapon types.
 *   - Weapon types will also have their weapon type names added.
 *   - "Armor" and "Armors" will be automatically added into weapon types.
 *   - Armor types will also have their armor type names and equip type names
 *     added to their throwable types.
 *
 * ---
 *
 * <Throw Power: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the throw power of the item to 'x'.
 * - Replace 'x' with a numeric value to determine its impact on the item throw
 *   skill's damage formula.
 *   - The 'x' value will replace the 'power' entry in the item throw skill's
 *     damage formula.
 *   - You can also use JavaScript in place of 'x' like the following:
 *     <Throw Power: $gameVariables.value(5)>
 * - If this notetag is not used, then the throw power will default to a value.
 *   - If an item, default throw power is found in the Plugin Parameters.
 *   - If a weapon or armor, default throw power is this item's ATK parameter.
 *
 * ---
 * 
 * <Throw Impact Animation: x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the impact animation of this thrown item, weapon, or armor to 'x'.
 * - Replace 'x' with a number representing the ID of the animation you wish to
 *   play as the impact animation.
 * 
 * ---
 * 
 * <Throw Conserve: x%>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is selected and thrown, there is a 'x'
 *   percent chance of it not being consumed.
 * - Replace 'x' with a number representing the percent chance for this item,
 *   weapon, or armor to not be consumed.
 *   - 100% will mean it will never be consumed.
 * - If this notetag is not used, then the item, weapon, and armor will always
 *   be consumed unless it is a non-consumable item set by the database.
 * 
 * ---
 * 
 * === Throw Properties-Related Notetags ===
 * 
 * ---
 *
 * <Throw Hit Rate: x%>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is selected and thrown, change the hit
 *   rate of the action to 'x' percent.
 * - Replace 'x' with a number representing the percent chance to hit the
 *   skill target.
 * - If this notetag is not used, refer to the hit rate of the skill itself.
 *
 * ---
 *
 * <Throw Critical: x%>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is selected and thrown, change the
 *   critical hit rate of the action to 'x' percent.
 * - Replace 'x' with a number representing the percent chance to land a
 *   critical hit on the skill target.
 * - If this notetag is not used, refer to the critical rate of the skill user
 *   or the skill if applicable.
 *
 * ---
 *
 * <Throw Variance: x%>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is selected and thrown, change the damage
 *   variance of the action to 'x' percent.
 * - Replace 'x' with a number representing the damage variance.
 * - If this notetag is not used, refer to the damage variance of the skill.
 *
 * ---
 * 
 * <Throw Ignore Guard>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is selected and thrown, ignore any damage
 *   modifiers if the target is guarding.
 * - If this notetag is not used, the usual damage modifiers applied if the
 *   target is guarding will be normally applied.
 * 
 * ---
 * 
 * === Throw Effects-Related Notetags ===
 * 
 * ---
 *
 * <Throw Add Element: id>
 * <Throw Add Elements: id, id, id>
 * <Throw Add Element: name>
 * <Throw Add Elements: name, name, name>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_1_ElementStatusCore!
 * - Adds the specified element(s) to the item throw.
 * - For 'id' variant, replace 'id' with a number representing the ID of the
 *   element you wish to add with the thrown item.
 *   - Insert multiple 'id' entries to add more elements.
 * - For 'name' variant, replace 'name' with the name of the element you wish
 *   to add with the thrown item.
 *   - Insert multiple 'name' entries to add more elements.
 *
 * ---
 *
 * <Throw Replace Element: id>
 * <Throw Replace Elements: id, id, id>
 * <Throw Replace Element: name>
 * <Throw Replace Elements: name, name, name>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_1_ElementStatusCore!
 * - Replaces the specified element(s) to the item throw. Any element that the
 *   item throw skill had before will be replaced with the declared notetag's.
 * - For 'id' variant, replace 'id' with a number representing the ID of the
 *   element you wish to replace with the thrown item.
 *   - Insert multiple 'id' entries to add more elements.
 * - For 'name' variant, replace 'name' with the name of the element you wish
 *   to replace with the thrown item.
 *   - Insert multiple 'name' entries to add more elements.
 *
 * ---
 *
 * <Throw Add State: id>
 * <Throw Add States: id, id, id>
 * <Throw Add State: name>
 * <Throw Add States: name, name, name>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is thrown at the target, apply the
 *   state(s) listed in the notetag to the target.
 * - For 'id' variant, replace 'id' with a number representing the ID of the
 *   state you wish to apply to the target.
 *   - Insert multiple 'id' entries to add more states.
 * - For 'name' variant, replace 'name' with the name of the state you wish to
 *   apply to the target
 *   - Insert multiple 'name' entries to add more states.
 *
 * ---
 *
 * <Throw Remove State: id>
 * <Throw Remove States: id, id, id>
 * <Throw Remove State: name>
 * <Throw Remove States: name, name, name>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is thrown at the target, remove the
 *   state(s) listed in the notetag from the target.
 * - For 'id' variant, replace 'id' with a number representing the ID of the
 *   state you wish to remove from the target.
 *   - Insert multiple 'id' entries to remove more states.
 * - For 'name' variant, replace 'name' with the name of the state you wish to
 *   remove from the target
 *   - Insert multiple 'name' entries to remove more states.
 *
 * ---
 * 
 * <Throw Add Buff: param For x Turns>
 * <Throw Add Buff: param, param, param For x Turns>
 * <Throw Add Debuff: param For x Turns>
 * <Throw Add Debuff: param, param, param For x Turns>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is thrown at the target, apply a buff
 *   or debuff to the target for the specified base parameter(s).
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine the type of buff or debuff to add.
 *   - Insert multiple 'param' entries to add more buffs or debuffs.
 *   - If you want to add multiple stacks of a parameter, insert that parameter
 *     multiple times.
 *     - Example: <Throw Add Debuff: DEF, DEF For 5 Turns>
 * - Replace 'x' with a number representing the number of turns to set the buff
 *   or debuff to.
 * - Insert multiple copies of this notetag if you want to add a variety of
 *   buffs and/or debuffs at different turn intervals.
 * 
 * ---
 * 
 * <Throw Remove Buff: param>
 * <Throw Remove Buff: param, param, param>
 * <Throw Remove Debuff: param>
 * <Throw Remove Debuff: param, param, param>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is thrown at the target, remove a buff
 *   or debuff to the target for the specified base parameter(s).
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
 * <JS Throw Effect>
 *  code
 *  code
 * </JS Throw Effect>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is thrown at the target, run the 'code'
 *   found inside of the notetags.
 * - The 'user' variable represents the battler throwing the item.
 * - The 'target' variable represents the target the item is thrown at.
 * - The 'item' variable represents the item, weapon, or armor being thrown.
 * - The 'skill' variable represents the throw skill being used.
 * - This effect will occur each time it hits a target.
 * 
 * ---
 * 
 * === Action Sequence-Related Notetags ===
 * 
 * ---
 *
 * <Throw Icon: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_3_ActSeqProjectiles!
 * - Changes the action sequence's projectile icon to 'x'.
 *   - Used for both custom action sequences and auto action sequences.
 * - Replace 'x' with a number representing the icon index of the projectile
 *   being thrown to the target.
 * - If this notetag is not used, the default icon used will be the item,
 *   weapon, or armor's icon.
 *
 * ---
 *
 * <Throw Duration: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_3_ActSeqProjectiles!
 * - Gives the projectile 'x' frames of air time for the action sequence.
 *   - Used for both custom action sequences and auto action sequences.
 * - Replace 'x' with a number representing the duration in frames the
 *   projectile will spend flying through the air to the target.
 *   - 60 frames = 1 second.
 * - If this notetag is not used, the duration will be set to the default value
 *   found in the Plugin Parameters or the Plugin Command.
 *
 * ---
 * 
 * <Throw Auto Angle>
 * <No Throw Auto Angle>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_3_ActSeqProjectiles!
 * - Turns on/off auto angle for the action sequence.
 *   - Used for both custom action sequences and auto action sequences.
 * - If neither notetag is used, the setting will be the default value found in
 *   the Plugin Parameters or the Plugin Command.
 * 
 * ---
 *
 * <Throw Angle Offset: +x>
 * <Throw Angle Offset: -x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_3_ActSeqProjectiles!
 * - Rotates the initial offset of the projectile icon by 'x' degrees.
 *   - Used for both custom action sequences and auto action sequences.
 * - Replace 'x' with a number representing the initial angle degree offset.
 * - If this notetag is not used, the offset will be set to the default value
 *   found in the Plugin Parameters or the Plugin Command.
 *
 * ---
 *
 * <Throw Arc: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_3_ActSeqProjectiles!
 * - Sets the projectile's arc peak to 'x' pixels.
 *   - Used for both custom action sequences and auto action sequences.
 * - Replace 'x' with a number representing the arc peak in pixels.
 * - If this notetag is not used, the arc peak will be set to the default value
 *   found in the Plugin Parameters or the Plugin Command.
 *
 * ---
 *
 * <Throw Hue: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_3_ActSeqProjectiles!
 * - Sets the projectile icon's hue to 'x'.
 *   - Used for both custom action sequences and auto action sequences.
 * - Replace 'x' with a number representing the hue of the icon.
 *   - Use a number between 0 and 360.
 * - If this notetag is not used, the hue will be set to the default value
 *   found in the Plugin Parameters or the Plugin Command.
 *
 * ---
 *
 * <Throw Scale: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_3_ActSeqProjectiles!
 * - Sets the projectile icon's scale to 'x' value.
 *   - Used for both custom action sequences and auto action sequences.
 * - Replace 'x' with a number representing the scale of the icon.
 *   - 0.5 is 50% scale.
 *   - 1.0 is 100% scale.
 *   - 1.5 is 150% scale.
 *   - 2.0 is 200% scale.
 * - If this notetag is not used, the scale will be set to the default value
 *   found in the Plugin Parameters or the Plugin Command.
 *
 * ---
 *
 * <Throw Spin: +x>
 * <Throw Spin: -x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_3_ActSeqProjectiles!
 * - Sets the projectile icon's spin speed to 'x'.
 *   - Used for both custom action sequences and auto action sequences.
 * - Replace 'x' with a number representing the spin speed of the icon.
 *   - A positive spin speed rotates clockwise.
 *   - A negative spin speed rotates counterclockwise.
 * - This cannot be used with auto angle.
 * - If this notetag is not used, the spin will be set to the default value
 *   found in the Plugin Parameters or the Plugin Command.
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
 * $thrownItem
 * 
 * - This is a variable that gets updated upon the usage of any new action be
 *   it from an actor or enemy. It will return the item, weapon, or armor being
 *   thrown by the skill if any.
 * - The item, weapon, or armor will be in its rawest form, which is its
 *   $dataItems[x] entry, $dataWeapons[x] entry, or $dataArmors[x] entry.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are some basic general plugin parameters used for this plugin.
 *
 * ---
 *
 * General
 * 
 *   Default Item Throw Power:
 *   - What should be the default throw power for an item?
 *   - You can set this with the <Throw Power: x> notetag, too.
 *   - Weapons and Armors will use their ATK value as default throw power.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto Action Sequence Settings
 * ============================================================================
 *
 * Adjust the settings for the Item Throw-related automatic action sequence
 * here. Some of these settings can only be used if VisuMZ_3_ActSeqProjectiles
 * is installed in addition to this plugin.
 *
 * ---
 * 
 * General
 *
 *   Enabled?:
 *   - Use Auto Action Sequences for Item Throw skills?
 * 
 *   Projectiles?:
 *   - Add projectile animations to Item Throw Skills?
 *   - Requires VisuMZ_3_ActSeqProjectiles!
 * 
 * ---
 * 
 * Waiting
 * 
 *   No Projectile Wait:
 *   - If no projectiles are used, wait how many frames before impact
 *     animation?
 *   - 60 frames = 1 second.
 * 
 *   Post-Animation Wait:
 *   - After impact animation plays, wait how many frames before displaying
 *     damage results?
 *   - 60 frames = 1 second.
 * 
 * --
 * 
 * Projectile Defaults
 * 
 *   Projectile Duration:
 *   - How much default air time should projectiles have?
 *   - 60 frames = 1 second.
 *   - Requires VisuMZ_3_ActSeqProjectiles!
 * 
 *   Auto Angle?:
 *   - Automatically angle the projectile to tilt the direction it's moving?
 *   - Requires VisuMZ_3_ActSeqProjectiles!
 * 
 *   Angle Offset:
 *   - Alter the projectile's tilt by this many degrees.
 *   - Requires VisuMZ_3_ActSeqProjectiles!
 * 
 *   Arc Peak:
 *   - This is the height of the project's trajectory arc in pixels.
 *   - Requires VisuMZ_3_ActSeqProjectiles!
 * 
 *   Hue:
 *   - Adjust the hue of the projectile.
 *   - Insert a number between 0 and 360.
 *   - Requires VisuMZ_3_ActSeqProjectiles!
 * 
 *   Scale:
 *   - Adjust the size scaling of the projectile.
 *   - Use decimals for exact control.
 *   - Requires VisuMZ_3_ActSeqProjectiles!
 * 
 *   Spin Speed:
 *   - Determine how much angle the projectile spins per frame.
 *   - Does not work well with "Auto Angle".
 *   - 60 frames = 1 second.
 *   - Requires VisuMZ_3_ActSeqProjectiles!
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
 * Version 1.01: February 15, 2024
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.00 Official Release Date: October 23, 2023
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
 * @param ItemThrow
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemThrowPower:num
 * @text Default Item Throw Power
 * @desc What should be the default throw power for an item?
 * You can set this with the <Throw Power: x> notetag, too.
 * @default 20
 *
 * @param AutoActSeq:struct
 * @text Auto Action Sequence
 * @type struct<AutoActSeq>
 * @desc Adjust the settings for the Item Throw-related
 * automatic action sequence here.
 * @default {"General":"","Enabled:eval":"true","Projectiles:eval":"true","Waiting":"","noProjectileWait:num":"16","animationWait:num":"24","Defaults":"","Duration:num":"20","AutoAngle:eval":"false","AngleOffset:num":"+0","Arc:num":"0","Hue:eval":"0","Scale:num":"1.0","Spin:num":"-30.0"}
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
/*~struct~AutoActSeq:
 *
 * @param General
 *
 * @param Enabled:eval
 * @text Enabled?
 * @parent General
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Use Auto Action Sequences for Item Throw skills?
 * @default true
 *
 * @param Projectiles:eval
 * @text Projectiles?
 * @parent General
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Add projectile animations to Item Throw Skills?
 * Requires VisuMZ_3_ActSeqProjectiles!
 * @default true
 *
 * @param Waiting
 *
 * @param noProjectileWait:num
 * @text No Projectile Wait
 * @parent Waiting
 * @type number
 * @desc If no projectiles are used, wait how many frames before
 * impact animation? 60 frames = 1 second.
 * @default 16
 *
 * @param animationWait:num
 * @text Post-Animation Wait
 * @parent Waiting
 * @type number
 * @desc After impact animation plays, wait how many frames before
 * displaying damage results? 60 frames = 1 second.
 * @default 24
 *
 * @param Defaults
 * @text Projectile Defaults
 *
 * @param Duration:num
 * @text Projectile Duration
 * @parent Defaults
 * @type number
 * @min 1
 * @desc How much default air time should projectiles have?
 * 60 frames = 1 second.
 * @default 20
 *
 * @param AutoAngle:eval
 * @text Auto Angle?
 * @parent Defaults
 * @type boolean
 * @on Automatically Angle
 * @off Normal
 * @desc Automatically angle the projectile to tilt the direction it's moving?
 * @default false
 *
 * @param AngleOffset:num
 * @text Angle Offset
 * @parent Defaults
 * @desc Alter the projectile's tilt by this many degrees.
 * @default +0
 * 
 * @param Arc:num
 * @text Arc Peak
 * @parent Defaults
 * @desc This is the height of the project's trajectory arc in pixels.
 * @default 0
 * 
 * @param Hue:eval
 * @text Hue
 * @parent Defaults
 * @type number
 * @max 360
 * @desc Adjust the hue of the projectile.
 * Insert a number between 0 and 360.
 * @default 0
 * 
 * @param Scale:num
 * @text Scale
 * @parent Defaults
 * @desc Adjust the size scaling of the projectile.
 * Use decimals for exact control.
 * @default 1.0
 * 
 * @param Spin:num
 * @text Spin Speed
 * @parent Defaults
 * @desc Determine how much angle the projectile spins per frame.
 * Does not work well with "Auto Angle".
 * @default -30.0
 *
 */
//=============================================================================

const _0x314f3a=_0x547c;(function(_0x38a913,_0x5610b5){const _0x46f356=_0x547c,_0x1f21ed=_0x38a913();while(!![]){try{const _0x1c4e7a=parseInt(_0x46f356(0x187))/0x1*(-parseInt(_0x46f356(0x214))/0x2)+parseInt(_0x46f356(0x291))/0x3+parseInt(_0x46f356(0x21b))/0x4*(-parseInt(_0x46f356(0x2cb))/0x5)+parseInt(_0x46f356(0x2e0))/0x6*(-parseInt(_0x46f356(0x2a5))/0x7)+-parseInt(_0x46f356(0x2da))/0x8+parseInt(_0x46f356(0x20c))/0x9+parseInt(_0x46f356(0x2b0))/0xa;if(_0x1c4e7a===_0x5610b5)break;else _0x1f21ed['push'](_0x1f21ed['shift']());}catch(_0x384ab4){_0x1f21ed['push'](_0x1f21ed['shift']());}}}(_0x733e,0x78a7d));var label='ItemThrowSkills',tier=tier||0x0,dependencies=[_0x314f3a(0x235),_0x314f3a(0x2ab)],pluginData=$plugins[_0x314f3a(0x237)](function(_0x4a4cae){const _0x2be11a=_0x314f3a;return _0x4a4cae[_0x2be11a(0x273)]&&_0x4a4cae[_0x2be11a(0x199)][_0x2be11a(0x1b2)]('['+label+']');})[0x0];VisuMZ[label][_0x314f3a(0x1da)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x314f3a(0x1dd)]=function(_0x2ac3ba,_0x50efab){const _0x238d85=_0x314f3a;for(const _0x428fd0 in _0x50efab){if('BnyKK'===_0x238d85(0x21d)){if(_0x428fd0[_0x238d85(0x25f)](/(.*):(.*)/i)){const _0x106c66=String(RegExp['$1']),_0x457341=String(RegExp['$2'])[_0x238d85(0x1ec)]()[_0x238d85(0x1c4)]();let _0x377dd4,_0x3f1610,_0x300b05;switch(_0x457341){case _0x238d85(0x2d1):_0x377dd4=_0x50efab[_0x428fd0]!==''?Number(_0x50efab[_0x428fd0]):0x0;break;case _0x238d85(0x24c):_0x3f1610=_0x50efab[_0x428fd0]!==''?JSON[_0x238d85(0x1ea)](_0x50efab[_0x428fd0]):[],_0x377dd4=_0x3f1610[_0x238d85(0x253)](_0x83c354=>Number(_0x83c354));break;case _0x238d85(0x2ec):_0x377dd4=_0x50efab[_0x428fd0]!==''?eval(_0x50efab[_0x428fd0]):null;break;case _0x238d85(0x2e1):_0x3f1610=_0x50efab[_0x428fd0]!==''?JSON[_0x238d85(0x1ea)](_0x50efab[_0x428fd0]):[],_0x377dd4=_0x3f1610[_0x238d85(0x253)](_0xc2f075=>eval(_0xc2f075));break;case'JSON':_0x377dd4=_0x50efab[_0x428fd0]!==''?JSON[_0x238d85(0x1ea)](_0x50efab[_0x428fd0]):'';break;case'ARRAYJSON':_0x3f1610=_0x50efab[_0x428fd0]!==''?JSON[_0x238d85(0x1ea)](_0x50efab[_0x428fd0]):[],_0x377dd4=_0x3f1610[_0x238d85(0x253)](_0x4e9ff5=>JSON[_0x238d85(0x1ea)](_0x4e9ff5));break;case _0x238d85(0x1cb):_0x377dd4=_0x50efab[_0x428fd0]!==''?new Function(JSON[_0x238d85(0x1ea)](_0x50efab[_0x428fd0])):new Function(_0x238d85(0x2a8));break;case'ARRAYFUNC':_0x3f1610=_0x50efab[_0x428fd0]!==''?JSON[_0x238d85(0x1ea)](_0x50efab[_0x428fd0]):[],_0x377dd4=_0x3f1610[_0x238d85(0x253)](_0x174fb2=>new Function(JSON[_0x238d85(0x1ea)](_0x174fb2)));break;case'STR':_0x377dd4=_0x50efab[_0x428fd0]!==''?String(_0x50efab[_0x428fd0]):'';break;case _0x238d85(0x1a5):_0x3f1610=_0x50efab[_0x428fd0]!==''?JSON[_0x238d85(0x1ea)](_0x50efab[_0x428fd0]):[],_0x377dd4=_0x3f1610[_0x238d85(0x253)](_0x2c7252=>String(_0x2c7252));break;case'STRUCT':_0x300b05=_0x50efab[_0x428fd0]!==''?JSON[_0x238d85(0x1ea)](_0x50efab[_0x428fd0]):{},_0x377dd4=VisuMZ['ConvertParams']({},_0x300b05);break;case'ARRAYSTRUCT':_0x3f1610=_0x50efab[_0x428fd0]!==''?JSON[_0x238d85(0x1ea)](_0x50efab[_0x428fd0]):[],_0x377dd4=_0x3f1610[_0x238d85(0x253)](_0x43ac43=>VisuMZ[_0x238d85(0x1dd)]({},JSON[_0x238d85(0x1ea)](_0x43ac43)));break;default:continue;}_0x2ac3ba[_0x106c66]=_0x377dd4;}}else{if(this[_0x238d85(0x1bc)]&&!!_0x1fd8af)return _0x376d9f[_0x238d85(0x1ae)](_0x50df8a)>0x0;return _0x2d59f9['ItemThrowSkills']['Window_BattleItem_isEnabled'][_0x238d85(0x1a6)](this,_0x1fcf22);}}return _0x2ac3ba;},(_0x32c1d1=>{const _0x36dea2=_0x314f3a,_0x36fa3a=_0x32c1d1['name'];for(const _0x9f141e of dependencies){if(!Imported[_0x9f141e]){alert(_0x36dea2(0x276)[_0x36dea2(0x1d0)](_0x36fa3a,_0x9f141e)),SceneManager[_0x36dea2(0x203)]();break;}}const _0x352ff0=_0x32c1d1['description'];if(_0x352ff0[_0x36dea2(0x25f)](/\[Version[ ](.*?)\]/i)){const _0x4d02a2=Number(RegExp['$1']);_0x4d02a2!==VisuMZ[label][_0x36dea2(0x245)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x36fa3a,_0x4d02a2)),SceneManager['exit']());}if(_0x352ff0[_0x36dea2(0x25f)](/\[Tier[ ](\d+)\]/i)){const _0x1d56af=Number(RegExp['$1']);if(_0x1d56af<tier){if(_0x36dea2(0x1d5)===_0x36dea2(0x1d5))alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x36fa3a,_0x1d56af,tier)),SceneManager[_0x36dea2(0x203)]();else{const _0x17c3f4=_0x22d838(_0x246e37['$1']);_0x49ad7e[_0x36dea2(0x224)]=this[_0x36dea2(0x234)](),_0x3a442c[_0x36dea2(0x295)]=_0x34745e,_0x535526['a']=this[_0x36dea2(0x234)](),_0x36cfcd['b']=_0x1df24d,_0x278e1a[_0x36dea2(0x1a4)]=this[_0x36dea2(0x1f7)](),_0x476975[_0x36dea2(0x1f7)]=_0x5f1737;try{_0xf41eaa(_0x17c3f4);}catch(_0x149c05){if(_0x43eba9[_0x36dea2(0x221)]())_0x2bbdf3[_0x36dea2(0x1f1)](_0x149c05);}_0xb0034[_0x36dea2(0x224)]=_0x1eed47,_0x3cc50d['target']=_0xcbbd54,_0x370752['a']=_0x570617,_0x51f6fc['b']=_0x35c1be,_0x26d590['skill']=_0x5428c3,_0x6dcd5e[_0x36dea2(0x1f7)]=_0xdd10a9;}}else _0x36dea2(0x29f)==='mSLpv'?tier=Math[_0x36dea2(0x28e)](_0x1d56af,tier):_0x26fd61['Extra'][_0x36dea2(0x289)]=![];}VisuMZ[_0x36dea2(0x1dd)](VisuMZ[label][_0x36dea2(0x1da)],_0x32c1d1[_0x36dea2(0x24b)]);})(pluginData);if(VisuMZ[_0x314f3a(0x1e9)][_0x314f3a(0x245)]<1.75){let text='';text+=_0x314f3a(0x23a),text+=_0x314f3a(0x270),alert(text),SceneManager[_0x314f3a(0x203)]();}if(VisuMZ[_0x314f3a(0x250)][_0x314f3a(0x245)]<1.46){let text='';text+=_0x314f3a(0x28c),text+=_0x314f3a(0x270),alert(text),SceneManager[_0x314f3a(0x203)]();}function _0x547c(_0x285e82,_0x1fada7){const _0x733e24=_0x733e();return _0x547c=function(_0x547c2b,_0x417026){_0x547c2b=_0x547c2b-0x178;let _0xb5b01c=_0x733e24[_0x547c2b];return _0xb5b01c;},_0x547c(_0x285e82,_0x1fada7);}VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x1c2)]={'CanThrowType':/<CAN THROW:[ ](.*)>/i,'ThrowType':/<THROW(?:|ABLE) TYPE(?:|S):[ ](.*)>/i,'ThrowPower':/<THROW POWER:[ ](.*)>/i,'ThrowProperties':{'Icon':/<THROW ICON:[ ](\d+)>/i,'Duration':/<THROW DURATION:[ ](\d+)>/i,'NoAutoAngle':/<NO THROW AUTO ANGLE>/i,'YesAutoAngle':/<THROW AUTO ANGLE>/i,'AngleOffset':/<THROW ANGLE OFFSET:[ ](.*)>/i,'Arc':/<THROW ARC:[ ](.*)>/i,'Hue':/<THROW HUE:[ ](\d+)>/i,'Scale':/<THROW SCALE:[ ](.*)>/i,'Spin':/<THROW SPIN:[ ](.*)>/i},'ImpactAnimation':/<THROW IMPACT ANIMATION:[ ](\d+)>/i,'ThrowConserve':/<THROW (?:CONSERVE|PRESERVE):[ ](\d+)([%％])>/i,'ThrowHitRate':/<THROW (?:HIT|HIT RATE|ACC|ACCURACY):[ ](\d+)([%％])>/i,'ThrowCritRate':/<THROW CRIT(?:|ICAL):[ ](\d+)([%％])>/i,'ThrowVariance':/<THROW VARIANCE:[ ](\d+)([%％])>/i,'ThrowIgnoreGuard':/<THROW (?:IGNORE|BYPASS) GUARD>/i,'ThrowElementAdd':/<THROW ADD ELEMENT(?:|S):[ ](.*)>/i,'ThrowElementSet':/<THROW (?:SET|REPLACE|OVERRIDE) ELEMENT(?:|S):[ ](.*)>/i,'ThrowStateAdd':/<THROW ADD STATE(?:|S):[ ](.*)>/gi,'ThrowStateRemove':/<THROW REMOVE STATE(?:|S):[ ](.*)>/gi,'ThrowBuffsAdd':/<THROW ADD BUFF(?:|S):[ ](.*) FOR (\d+)[ ]TURN(?:|S)>/gi,'ThrowBuffsRemove':/<THROW REMOVE BUFF(?:|S):[ ](.*)>/gi,'ThrowDebuffsAdd':/<THROW ADD DEBUFF(?:|S):[ ](.*) FOR (\d+)[ ]TURN(?:|S)>/gi,'ThrowDebuffsRemove':/<THROW REMOVE DEBUFF(?:|S):[ ](.*)>/gi,'ThrowJsEffect':/<JS THROW EFFECT(?:|S)>\s*([\s\S]*)\s*<\/JS THROW EFFECT(?:|S)>/i},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x1d6)]=function(_0x5264e3,_0x346fed){const _0x5bf27e=_0x314f3a,_0x55bcee=_0x5264e3[_0x5bf27e(0x244)](),_0x395b51=_0x55bcee[_0x5bf27e(0x2ce)]||'',_0x26bef8=VisuMZ[_0x5bf27e(0x20a)][_0x5bf27e(0x1c2)][_0x5bf27e(0x23f)],_0x56c684=[_0x5bf27e(0x1a1),'Arc','Hue',_0x5bf27e(0x206),_0x5bf27e(0x2e4)];for(const _0x2d6c3a of _0x56c684){if(_0x395b51[_0x5bf27e(0x25f)](_0x26bef8[_0x2d6c3a])){_0x346fed[_0x5bf27e(0x1cd)][_0x2d6c3a]=Number(RegExp['$1']);if(_0x2d6c3a===_0x5bf27e(0x2e4)){if(_0x5bf27e(0x2d7)===_0x5bf27e(0x2d7))_0x346fed[_0x5bf27e(0x1cd)]['AutoAngle']=![];else{_0x44f9be['push'](_0x5bf27e(0x1d2),_0x5bf27e(0x208));let _0x4fccd2=_0xe9b822[_0x5bf27e(0x1f4)][_0xdf4614[_0x5bf27e(0x220)]];_0x4fccd2&&(_0x4fccd2=_0x4fccd2['replace'](/\\I\[(\d+)\]/gi,'')[_0x5bf27e(0x1ec)]()),_0x22d643[_0x5bf27e(0x2b6)](_0x4fccd2);}}}}if(_0x395b51[_0x5bf27e(0x25f)](_0x26bef8['Icon'])){if('ITMPV'===_0x5bf27e(0x2e7))_0x346fed[_0x5bf27e(0x1b9)]=Number(RegExp['$1'])||0x0;else{const _0x385a47=this[_0x5bf27e(0x1b0)][_0x5bf27e(0x1f7)]();_0x3500d5[_0x5bf27e(0x18d)](_0x385a47)?this[_0x5bf27e(0x1bf)](_0x385a47):_0x306272[_0x5bf27e(0x20a)][_0x5bf27e(0x2c2)]['call'](this);}}_0x395b51['match'](_0x26bef8[_0x5bf27e(0x1ff)])&&(_0x346fed[_0x5bf27e(0x1ff)]=Number(RegExp['$1'])||0x1);if(_0x395b51[_0x5bf27e(0x25f)](_0x26bef8['NoAutoAngle']))_0x5bf27e(0x2ca)!==_0x5bf27e(0x2ca)?_0x4e2e45=_0x57554a[_0x5bf27e(0x29e)](_0xbe7472[_0x5bf27e(0x2cd)]):_0x346fed[_0x5bf27e(0x1cd)][_0x5bf27e(0x289)]=![];else _0x395b51[_0x5bf27e(0x25f)](_0x26bef8['YesAutoAngle'])&&(_0x346fed['Extra'][_0x5bf27e(0x289)]=!![]);},DataManager['getParamIdWithName']=function(_0x4d9203){const _0xfb0af4=_0x314f3a;_0x4d9203=_0x4d9203[_0xfb0af4(0x1ec)]()[_0xfb0af4(0x1c4)]();switch(_0x4d9203){case _0xfb0af4(0x1bb):case _0xfb0af4(0x24a):case'HP':return 0x0;case _0xfb0af4(0x198):case _0xfb0af4(0x277):case'MP':return 0x1;case'ATK':return 0x2;case _0xfb0af4(0x19d):return 0x3;case _0xfb0af4(0x227):return 0x4;case _0xfb0af4(0x261):return 0x5;case _0xfb0af4(0x226):return 0x6;case _0xfb0af4(0x204):return 0x7;}return-0x1;},DataManager[_0x314f3a(0x2d2)]=function(_0x475010){const _0x553ce8=_0x314f3a;_0x475010=_0x475010['toUpperCase']()['trim'](),this[_0x553ce8(0x2c0)]=this[_0x553ce8(0x2c0)]||{};if(this[_0x553ce8(0x2c0)][_0x475010])return this[_0x553ce8(0x2c0)][_0x475010];for(const _0x2e295f of $dataStates){if(!_0x2e295f)continue;this['_stateIDs'][_0x2e295f[_0x553ce8(0x28d)][_0x553ce8(0x1ec)]()[_0x553ce8(0x1c4)]()]=_0x2e295f['id'];}return this['_stateIDs'][_0x475010]||0x0;},DataManager[_0x314f3a(0x288)]=function(_0x5dc81d){const _0x49064=_0x314f3a;if(!_0x5dc81d)return!![];if(!DataManager[_0x49064(0x264)](_0x5dc81d))return!![];if(this[_0x49064(0x255)])return![];this[_0x49064(0x2c7)]=this['_hasItemThrowConflicts']||{};if(this[_0x49064(0x2c7)][_0x5dc81d['id']])return this['_hasItemThrowConflicts'][_0x5dc81d['id']];const _0x14f63e=_0x5dc81d[_0x49064(0x2ce)]||'',_0x57978a=[_0x49064(0x2c4),_0x49064(0x275),_0x49064(0x2d6)];this['_hasItemThrowConflicts'][_0x5dc81d['id']]=![];for(const _0x103b4f of _0x57978a){if(!VisuMZ[_0x103b4f])continue;const _0x3c01be=VisuMZ[_0x103b4f]['RegExp'];for(const _0x18d70c in _0x3c01be){if(_0x49064(0x2ad)===_0x49064(0x2ad)){if(_0x14f63e[_0x49064(0x25f)](_0x3c01be[_0x18d70c])){if('VDXNK'!=='TZbgE'){this['_hasItemThrowConflicts'][_0x5dc81d['id']]=!![];break;}else _0x4929dd=_0x5167b4[_0x49064(0x2d2)](_0x36722e);}}else _0x38c9e4=_0x4b9af9(_0x1d07ba)[_0x49064(0x1db)](0x0,0x7);}if(this['_hasItemThrowConflicts'][_0x5dc81d['id']])break;}return this[_0x49064(0x255)]=!![],Imported[_0x49064(0x272)]&&this[_0x49064(0x1eb)](_0x5dc81d)&&(_0x49064(0x28f)!=='lXMBg'?this['_itemThrowMode']?(this[_0x49064(0x1b5)][_0x49064(0x1e0)](),this[_0x49064(0x1af)][_0x49064(0x2bd)](),this[_0x49064(0x1af)][_0x49064(0x2c5)](),this[_0x49064(0x1af)][_0x49064(0x1a9)]()):_0x5c792a[_0x49064(0x20a)][_0x49064(0x22f)][_0x49064(0x1a6)](this):this[_0x49064(0x2c7)][_0x5dc81d['id']]=!![]),Imported[_0x49064(0x18e)]&&this[_0x49064(0x25d)](_0x5dc81d)&&(this['_hasItemThrowConflicts'][_0x5dc81d['id']]=!![]),delete this[_0x49064(0x255)],this[_0x49064(0x2c7)][_0x5dc81d['id']];},DataManager[_0x314f3a(0x18d)]=function(_0x2ad503){const _0x5103b3=_0x314f3a;return this[_0x5103b3(0x2ba)](_0x2ad503)['length']>0x0;},DataManager[_0x314f3a(0x2ba)]=function(_0x35a203){const _0x41cc35=_0x314f3a;if(!_0x35a203)return[];if(!DataManager[_0x41cc35(0x264)](_0x35a203))return[];if(DataManager[_0x41cc35(0x288)](_0x35a203))return[];this[_0x41cc35(0x1d3)]=this[_0x41cc35(0x1d3)]||{};if(this[_0x41cc35(0x1d3)][_0x35a203['id']]!==undefined)return this['_cache_canThrowItemTypes'][_0x35a203['id']];let _0x152551=[];const _0x6c1a0a=VisuMZ[_0x41cc35(0x20a)][_0x41cc35(0x1c2)],_0x26dfd4=_0x35a203['note']||'';return _0x26dfd4['match'](_0x6c1a0a['CanThrowType'])&&(_0x152551=String(RegExp['$1'])['split'](',')[_0x41cc35(0x253)](_0x52036d=>_0x52036d[_0x41cc35(0x1ec)]()[_0x41cc35(0x1c4)]())),this['_cache_canThrowItemTypes'][_0x35a203['id']]=_0x152551,_0x152551;},DataManager['canBeThrownBy']=function(_0x2ae323,_0x36e789){const _0x41d05b=_0x314f3a;return this[_0x41d05b(0x18b)](_0x2ae323)[_0x41d05b(0x232)](_0x25d314=>this['canThrowItemTypes'](_0x36e789)[_0x41d05b(0x1b2)](_0x25d314));},DataManager[_0x314f3a(0x18b)]=function(_0x14ac5d){const _0x2d0332=_0x314f3a;if(!_0x14ac5d)return[];if(DataManager[_0x2d0332(0x264)](_0x14ac5d))return[];let _0x6c65c3='';if(this[_0x2d0332(0x2d5)](_0x14ac5d))_0x6c65c3=_0x2d0332(0x284)[_0x2d0332(0x1d0)](_0x14ac5d['id']);if(this[_0x2d0332(0x258)](_0x14ac5d))_0x6c65c3='weapon-%1'[_0x2d0332(0x1d0)](_0x14ac5d['id']);if(this[_0x2d0332(0x1cc)](_0x14ac5d))_0x6c65c3=_0x2d0332(0x1d1)[_0x2d0332(0x1d0)](_0x14ac5d['id']);this[_0x2d0332(0x1b7)]=this[_0x2d0332(0x1b7)]||{};if(this[_0x2d0332(0x1b7)][_0x6c65c3]!==undefined)return this['_cache_itemThrowTypes'][_0x6c65c3];let _0xbcdc25=[];const _0x58e353=VisuMZ[_0x2d0332(0x20a)][_0x2d0332(0x1c2)],_0xdb4161=_0x14ac5d[_0x2d0332(0x2ce)]||'';_0xdb4161[_0x2d0332(0x25f)](_0x58e353['ThrowType'])&&(_0x2d0332(0x296)!=='kZLHE'?_0xbcdc25=String(RegExp['$1'])[_0x2d0332(0x19e)](',')[_0x2d0332(0x253)](_0x2eae58=>_0x2eae58[_0x2d0332(0x1ec)]()[_0x2d0332(0x1c4)]()):(_0x404c64[_0x2d0332(0x2bc)](_0x2d0332(0x239)),_0x407456[_0x2d0332(0x2f0)](0x0)));_0xbcdc25[_0x2d0332(0x2b6)](_0x2d0332(0x2a9),'any');if(this[_0x2d0332(0x2d5)](_0x14ac5d))_0xbcdc25['push']('item',_0x2d0332(0x2c8));if(this[_0x2d0332(0x258)](_0x14ac5d)){_0xbcdc25['push'](_0x2d0332(0x1d2),'weapons');let _0x46829f=$dataSystem[_0x2d0332(0x1f4)][_0x14ac5d[_0x2d0332(0x220)]];_0x46829f&&(_0x46829f=_0x46829f[_0x2d0332(0x1f3)](/\\I\[(\d+)\]/gi,'')[_0x2d0332(0x1ec)]()),_0xbcdc25[_0x2d0332(0x2b6)](_0x46829f);}if(this[_0x2d0332(0x1cc)](_0x14ac5d)){_0xbcdc25[_0x2d0332(0x2b6)](_0x2d0332(0x2e5),'armors');let _0x4adf0c=$dataSystem[_0x2d0332(0x297)][_0x14ac5d[_0x2d0332(0x287)]];_0x4adf0c&&(_0x2d0332(0x2b4)===_0x2d0332(0x179)?this[_0x2d0332(0x2d3)]?this[_0x2d0332(0x17f)]():_0x5c76d2[_0x2d0332(0x20a)]['Scene_Battle_onItemOk'][_0x2d0332(0x1a6)](this):_0x4adf0c=_0x4adf0c[_0x2d0332(0x1f3)](/\\I\[(\d+)\]/gi,'')[_0x2d0332(0x1ec)]());let _0x6aba8f=$dataSystem['equipTypes'][_0x14ac5d[_0x2d0332(0x241)]];_0x6aba8f&&(_0x6aba8f=_0x6aba8f[_0x2d0332(0x1f3)](/\\I\[(\d+)\]/gi,'')[_0x2d0332(0x1ec)]()),_0xbcdc25[_0x2d0332(0x2b6)](_0x4adf0c,_0x6aba8f);}return _0x14ac5d[_0x2d0332(0x2cd)]&&(_0xbcdc25=_0xbcdc25[_0x2d0332(0x29e)](_0x14ac5d['categories'])),_0xbcdc25=_0xbcdc25['map'](_0x3e22cd=>_0x3e22cd['toUpperCase']()['trim']()),this[_0x2d0332(0x1b7)][_0x6c65c3]=_0xbcdc25,_0xbcdc25;},DataManager[_0x314f3a(0x282)]=function(_0x34b8b0){const _0x162018=_0x314f3a;if(!_0x34b8b0)return 0x0;if(DataManager[_0x162018(0x264)](_0x34b8b0))return 0x0;let _0x13e174='';if(this[_0x162018(0x2d5)](_0x34b8b0))_0x13e174=_0x162018(0x284)['format'](_0x34b8b0['id']);if(this['isWeapon'](_0x34b8b0))_0x13e174=_0x162018(0x2c6)[_0x162018(0x1d0)](_0x34b8b0['id']);if(this[_0x162018(0x1cc)](_0x34b8b0))_0x13e174=_0x162018(0x1d1)['format'](_0x34b8b0['id']);this[_0x162018(0x2ea)]=this[_0x162018(0x2ea)]||{};if(this[_0x162018(0x2ea)][_0x13e174]!==undefined)return this['_cache_itemThrowPower'][_0x13e174];let _0x328c85=Game_Action[_0x162018(0x19b)];(this[_0x162018(0x258)](_0x34b8b0)||this[_0x162018(0x1cc)](_0x34b8b0))&&(_0x162018(0x1d8)!=='FFYTp'?_0x357a2d=_0x2c8c2[_0x162018(0x23c)][0x2]||0x1:_0x328c85=_0x34b8b0[_0x162018(0x23c)][0x2]||0x1);const _0x1842d0=VisuMZ[_0x162018(0x20a)][_0x162018(0x1c2)],_0x228f41=_0x34b8b0['note']||'';return _0x228f41[_0x162018(0x25f)](_0x1842d0[_0x162018(0x215)])&&(_0x328c85=String(RegExp['$1'])),this['_cache_itemThrowPower'][_0x13e174]=_0x328c85,_0x328c85;},VisuMZ['ItemThrowSkills']['BattleManager_startAction']=BattleManager['startAction'],BattleManager[_0x314f3a(0x2bb)]=function(){const _0x390da1=_0x314f3a;this[_0x390da1(0x2de)](),VisuMZ['ItemThrowSkills'][_0x390da1(0x1c9)][_0x390da1(0x1a6)](this);},BattleManager[_0x314f3a(0x2de)]=function(){const _0x449bfa=_0x314f3a,_0x55e3fb=this[_0x449bfa(0x254)],_0x399920=_0x55e3fb['currentAction']();if(!DataManager[_0x449bfa(0x18d)](_0x399920[_0x449bfa(0x1f7)]()))return;if(Imported[_0x449bfa(0x26b)]&&VisuMZ[_0x449bfa(0x29a)][_0x449bfa(0x245)]<1.06){let _0x53c0a8='';_0x53c0a8+=_0x449bfa(0x1fb),_0x53c0a8+=_0x449bfa(0x270),alert(_0x53c0a8),SceneManager[_0x449bfa(0x203)]();}const _0x5e4706=_0x399920[_0x449bfa(0x1f7)]();if(_0x5e4706[_0x449bfa(0x205)]===undefined){if(_0x449bfa(0x240)!==_0x449bfa(0x240)){const _0x47d1d=this[_0x449bfa(0x2f1)][_0x449bfa(0x256)](),_0x14d76=_0x2cbdc1[_0x47d1d];_0x5a0f5a['canThrowItems'](_0x14d76)?this[_0x449bfa(0x1bf)](_0x14d76):_0x17b2ea['ItemThrowSkills'][_0x449bfa(0x2a0)][_0x449bfa(0x1a6)](this);}else _0x5e4706[_0x449bfa(0x205)]=_0x5e4706[_0x449bfa(0x1fd)];}const _0x5ce3c6=_0x55e3fb[_0x449bfa(0x244)]();if(_0x5ce3c6){if(_0x449bfa(0x2d4)===_0x449bfa(0x2d4)){const _0xe86e99=VisuMZ['ItemThrowSkills'][_0x449bfa(0x1c2)];_0x5ce3c6['note']['match'](_0xe86e99[_0x449bfa(0x25b)])?_0x449bfa(0x24f)===_0x449bfa(0x1f5)?_0x2455ce[_0x449bfa(0x219)](_0x5e332d):_0x5e4706['animationId']=Number(RegExp['$1']):_0x5e4706[_0x449bfa(0x1fd)]=_0x5ce3c6['animationId']||0x0;}else{const _0x221022=_0x33c806(_0x77a7b5['$1']);_0x221022!==_0x280cb8[_0x197c7c][_0x449bfa(0x245)]&&(_0x5d918a(_0x449bfa(0x189)['format'](_0x595dc3,_0x221022)),_0x2de432['exit']());}}else{if('vyvcp'===_0x449bfa(0x180))_0x5e4706[_0x449bfa(0x1fd)]=_0x5e4706['_defaultAnimationID'];else return _0x1c7edc[this[_0x449bfa(0x267)]];}},Game_Action[_0x314f3a(0x19b)]=VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x1da)]['ItemThrowPower']??0x14,VisuMZ['ItemThrowSkills'][_0x314f3a(0x1d9)]=Game_Action[_0x314f3a(0x269)]['isValid'],Game_Action[_0x314f3a(0x269)][_0x314f3a(0x1ee)]=function(){const _0x402a95=_0x314f3a;if(this[_0x402a95(0x1f7)]()&&$gameParty[_0x402a95(0x1f6)]()&&DataManager[_0x402a95(0x18d)](this[_0x402a95(0x1f7)]())){if('wMvtk'!==_0x402a95(0x1e1)){if(_0x194eaf['canThrowItems'](this[_0x402a95(0x1f7)]())&&_0x133ffc[_0x402a95(0x1f6)]()){const _0x26853f=this[_0x402a95(0x234)]()[_0x402a95(0x244)](),_0x9b2e88=_0x26853f[_0x402a95(0x2ce)]||'',_0x2a6a27=_0x5b5f06[_0x402a95(0x20a)][_0x402a95(0x1c2)];if(_0x9b2e88[_0x402a95(0x25f)](_0x2a6a27['ThrowHitRate']))return _0x58ea65(_0xb16c5['$1'])*0.01;}return _0x457e3c[_0x402a95(0x20a)][_0x402a95(0x21e)][_0x402a95(0x1a6)](this,_0x45b70a);}else return this['isThrowItemValid']();}else return VisuMZ[_0x402a95(0x20a)]['Game_Action_isValid'][_0x402a95(0x1a6)](this);},Game_Action[_0x314f3a(0x269)][_0x314f3a(0x2a3)]=function(){const _0x1563f5=_0x314f3a;if(!this['subject']())return![];if(!this[_0x1563f5(0x1f7)]())return![];if(this[_0x1563f5(0x2bf)])return![];const _0x2fd25e=this['item']();if(!this[_0x1563f5(0x234)]()[_0x1563f5(0x185)](_0x2fd25e))return![];const _0x28caa2=this[_0x1563f5(0x234)]()[_0x1563f5(0x244)]();if($gameParty['numItems'](_0x28caa2)<=0x0)return![];return!![];},VisuMZ[_0x314f3a(0x20a)]['Game_Action_makeDamageValue']=Game_Action[_0x314f3a(0x269)][_0x314f3a(0x2b8)],Game_Action[_0x314f3a(0x269)]['makeDamageValue']=function(_0x3b4da6,_0x1bbd4d){const _0x182ea9=_0x314f3a;let _0x4612b1=window['power'];DataManager[_0x182ea9(0x18d)](this[_0x182ea9(0x1f7)]())&&$gameParty['inBattle']()?'jjEXk'===_0x182ea9(0x1c3)?_0x58c009=_0x549ea4(_0x46d61c):window[_0x182ea9(0x1ab)]=this[_0x182ea9(0x234)]()[_0x182ea9(0x21c)]():_0x182ea9(0x238)!==_0x182ea9(0x1f9)?window[_0x182ea9(0x1ab)]=0x0:(this[_0x182ea9(0x2b6)](_0x182ea9(0x229),_0x49429c[_0x182ea9(0x1c1)]),this[_0x182ea9(0x285)](_0x571a23,_0x4e19e1,_0x132301));const _0x13f608=VisuMZ[_0x182ea9(0x20a)][_0x182ea9(0x2e8)][_0x182ea9(0x1a6)](this,_0x3b4da6,_0x1bbd4d);return window[_0x182ea9(0x1ab)]=_0x4612b1,_0x13f608;},VisuMZ['ItemThrowSkills']['Game_Action_itemHit']=Game_Action['prototype'][_0x314f3a(0x2b3)],Game_Action[_0x314f3a(0x269)]['itemHit']=function(_0x1b6c01){const _0x1955e9=_0x314f3a;if(DataManager['canThrowItems'](this[_0x1955e9(0x1f7)]())&&$gameParty['inBattle']()){if(_0x1955e9(0x1a7)!=='sWvlX')_0x546b97[_0x1955e9(0x2b6)](_0x430229);else{const _0x2b1ad8=this[_0x1955e9(0x234)]()[_0x1955e9(0x244)](),_0x387e71=_0x2b1ad8[_0x1955e9(0x2ce)]||'',_0x5e2985=VisuMZ[_0x1955e9(0x20a)][_0x1955e9(0x1c2)];if(_0x387e71[_0x1955e9(0x25f)](_0x5e2985[_0x1955e9(0x2af)])){if(_0x1955e9(0x1a3)===_0x1955e9(0x1a3))return Number(RegExp['$1'])*0.01;else _0x10b352=_0x285a43(_0x325609['$1']);}}}return VisuMZ[_0x1955e9(0x20a)][_0x1955e9(0x21e)]['call'](this,_0x1b6c01);},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x17e)]=Game_Action[_0x314f3a(0x269)][_0x314f3a(0x222)],Game_Action[_0x314f3a(0x269)][_0x314f3a(0x222)]=function(_0x1a55bc){const _0x56f280=_0x314f3a;if(DataManager[_0x56f280(0x18d)](this[_0x56f280(0x1f7)]())&&$gameParty[_0x56f280(0x1f6)]()){const _0xe08563=this[_0x56f280(0x234)]()['getThrownItem'](),_0x4fb9ab=_0xe08563['note']||'',_0x38dfe8=VisuMZ['ItemThrowSkills'][_0x56f280(0x1c2)];if(_0x4fb9ab[_0x56f280(0x25f)](_0x38dfe8[_0x56f280(0x1b6)])){if(_0x56f280(0x1ef)===_0x56f280(0x1ef))return Number(RegExp['$1'])*0.01;else _0x12d4ba['ItemThrowSkills']['Scene_Battle_onItemCancel']['call'](this);}}return VisuMZ[_0x56f280(0x20a)]['Game_Action_itemCri']['call'](this,_0x1a55bc);},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x1ca)]=Game_Action[_0x314f3a(0x269)][_0x314f3a(0x1c7)],Game_Action['prototype']['applyVariance']=function(_0x678361,_0xe2b52e){const _0x3c7cfe=_0x314f3a;if(DataManager['canThrowItems'](this[_0x3c7cfe(0x1f7)]())&&$gameParty['inBattle']()){if(_0x3c7cfe(0x266)==='nLbfR'){const _0x49ad87=this['subject']()['getThrownItem'](),_0x1ceaac=_0x49ad87['note']||'',_0x497f29=VisuMZ[_0x3c7cfe(0x20a)][_0x3c7cfe(0x1c2)];_0x1ceaac['match'](_0x497f29[_0x3c7cfe(0x17a)])&&(_0x3c7cfe(0x28b)===_0x3c7cfe(0x29d)?_0x59a870[_0x3c7cfe(0x2b6)](_0x5bdf42):_0xe2b52e=Number(RegExp['$1']));}else return _0x49c74c[this[_0x3c7cfe(0x267)]];}return VisuMZ[_0x3c7cfe(0x20a)]['Game_Action_applyVariance'][_0x3c7cfe(0x1a6)](this,_0x678361,_0xe2b52e);},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x23e)]=Game_Action[_0x314f3a(0x269)][_0x314f3a(0x2ef)],Game_Action['prototype'][_0x314f3a(0x2ef)]=function(_0x469aec,_0x303232){const _0x158d6a=_0x314f3a;if(DataManager[_0x158d6a(0x18d)](this['item']())&&$gameParty[_0x158d6a(0x1f6)]()){if(_0x158d6a(0x1b3)!==_0x158d6a(0x1f0)){const _0x389e00=this[_0x158d6a(0x234)]()[_0x158d6a(0x244)](),_0x5e1008=_0x389e00[_0x158d6a(0x2ce)]||'',_0x5e0b40=VisuMZ[_0x158d6a(0x20a)][_0x158d6a(0x1c2)];if(_0x5e1008[_0x158d6a(0x25f)](_0x5e0b40['ThrowIgnoreGuard']))return _0x469aec;}else _0x1d4dc3=_0x814dee[_0x158d6a(0x1e6)](_0x439e20);}return VisuMZ[_0x158d6a(0x20a)][_0x158d6a(0x23e)]['call'](this,_0x469aec,_0x303232);},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x27a)]=Game_Action[_0x314f3a(0x269)]['elements'],Game_Action[_0x314f3a(0x269)][_0x314f3a(0x1e7)]=function(){const _0x469371=_0x314f3a;let _0x590c3e=VisuMZ['ItemThrowSkills'][_0x469371(0x27a)][_0x469371(0x1a6)](this);if(DataManager[_0x469371(0x18d)](this['item']())&&$gameParty['inBattle']()){const _0x2e7a05=this[_0x469371(0x234)]()['getThrownItem'](),_0x412eba=_0x2e7a05['note']||'',_0x2315d0=VisuMZ[_0x469371(0x20a)][_0x469371(0x1c2)];if(_0x412eba['match'](_0x2315d0['ThrowElementAdd'])){if(_0x469371(0x1c8)==='cOMKS')_0x13a7db(_0x469371(0x1f8)[_0x469371(0x1d0)](_0x531786,_0x54ed47,_0x601783)),_0x223294['exit']();else{const _0x23f041=String(RegExp['$1'])[_0x469371(0x19e)](',')['map'](_0x1d9aed=>_0x1d9aed[_0x469371(0x1c4)]());for(const _0x3ff410 of _0x23f041){const _0x5327ff=/^\d+$/[_0x469371(0x236)](_0x3ff410);let _0x5f64fc=0x0;_0x5327ff?_0x5f64fc=Number(_0x3ff410):_0x5f64fc=DataManager[_0x469371(0x293)](_0x3ff410),_0x5f64fc&&!_0x590c3e[_0x469371(0x1b2)](_0x5f64fc)&&_0x590c3e['push'](_0x5f64fc);}}}else{if(_0x412eba[_0x469371(0x25f)](_0x2315d0[_0x469371(0x1e3)])){_0x590c3e=[];const _0x24d560=String(RegExp['$1'])[_0x469371(0x19e)](',')[_0x469371(0x253)](_0x13123c=>_0x13123c[_0x469371(0x1c4)]());for(const _0x1bbda7 of _0x24d560){const _0x128518=/^\d+$/['test'](_0x1bbda7);let _0x1d7c10=0x0;if(_0x128518){if(_0x469371(0x2cf)===_0x469371(0x2cf))_0x1d7c10=Number(_0x1bbda7);else{let _0x476d3c=_0x28fc8b[_0x469371(0x1ab)];_0x2c253c[_0x469371(0x18d)](this[_0x469371(0x1a2)])&&_0x32b608[_0x469371(0x1f6)]()?_0x1e9743[_0x469371(0x1ab)]=this[_0x469371(0x2b7)]?this[_0x469371(0x2b7)][_0x469371(0x21c)]():0x1:_0x2d80e1['power']=0x1;const _0x4a18e2=_0x19f1cf[_0x469371(0x20a)]['Window_ShopStatus_getItemDamageAmountTextOriginal']['call'](this);return _0x2cbf97[_0x469371(0x1ab)]=_0x476d3c,_0x4a18e2;}}else _0x469371(0x23b)===_0x469371(0x200)?this[_0x469371(0x1bf)](_0xc4c1bb):_0x1d7c10=DataManager[_0x469371(0x293)](_0x1bbda7);_0x1d7c10&&_0x590c3e[_0x469371(0x2b6)](_0x1d7c10);}}}}return _0x590c3e;},VisuMZ[_0x314f3a(0x20a)]['Game_Action_applyItemUserEffect']=Game_Action[_0x314f3a(0x269)][_0x314f3a(0x223)],Game_Action[_0x314f3a(0x269)][_0x314f3a(0x223)]=function(_0x181c79){const _0x490d98=_0x314f3a;VisuMZ[_0x490d98(0x20a)][_0x490d98(0x281)][_0x490d98(0x1a6)](this,_0x181c79);if(DataManager['canThrowItems'](this[_0x490d98(0x1f7)]())&&$gameParty[_0x490d98(0x1f6)]()){if(_0x490d98(0x195)===_0x490d98(0x195)){const _0x560a30=this[_0x490d98(0x234)]()['getThrownItem']();this['applyItemThrowEffects'](_0x181c79,_0x560a30);}else _0x287bd6=_0x48e8f8(_0xa38bf9['$1']);}},Game_Action[_0x314f3a(0x269)][_0x314f3a(0x1ad)]=function(_0x57a197,_0x13b2ae){const _0x15cd51=_0x314f3a;if(!_0x57a197)return;if(!_0x13b2ae)return;this['applyItemThrowStateEffects'](_0x57a197,_0x13b2ae),this[_0x15cd51(0x2ed)](_0x57a197,_0x13b2ae),this[_0x15cd51(0x2ae)](_0x57a197,_0x13b2ae);},Game_Action[_0x314f3a(0x269)]['applyItemThrowStateEffects']=function(_0x344438,_0x328c0b){const _0x2e26a0=_0x314f3a,_0x3219af=VisuMZ[_0x2e26a0(0x20a)]['RegExp'],_0x531cab=_0x328c0b[_0x2e26a0(0x2ce)]||'';if(_0x531cab[_0x2e26a0(0x25f)](_0x3219af[_0x2e26a0(0x1cf)])){const _0x57b2dc=String(RegExp['$1'])[_0x2e26a0(0x19e)](',')[_0x2e26a0(0x253)](_0x520b43=>_0x520b43['trim']());for(const _0x44f32f of _0x57b2dc){if(_0x2e26a0(0x19f)!==_0x2e26a0(0x1de)){const _0x50b0d5=/^\d+$/[_0x2e26a0(0x236)](_0x44f32f);let _0x1ae7d0=0x0;_0x50b0d5?_0x2e26a0(0x18a)===_0x2e26a0(0x18a)?_0x1ae7d0=Number(_0x44f32f):_0x2a86ed[_0x2e26a0(0x1ab)]=this[_0x2e26a0(0x2b7)]?this[_0x2e26a0(0x2b7)]['getThrownItemPower']():0x1:'IRdpT'!==_0x2e26a0(0x2ac)?this['finalizeThrowItem']():_0x1ae7d0=DataManager[_0x2e26a0(0x2d2)](_0x44f32f),_0x1ae7d0&&_0x344438[_0x2e26a0(0x219)](_0x1ae7d0);}else{let _0x5359e9=_0x295c51['power'];_0xe288b9[_0x2e26a0(0x18d)](this[_0x2e26a0(0x1f7)]())&&_0xf05b01['inBattle']()?_0xc7712f[_0x2e26a0(0x1ab)]=this[_0x2e26a0(0x234)]()[_0x2e26a0(0x21c)]():_0x28027e['power']=0x0;const _0x73061b=_0x3e9f02[_0x2e26a0(0x20a)][_0x2e26a0(0x2e8)]['call'](this,_0x4ac8bf,_0x1dfdff);return _0x51f5e5[_0x2e26a0(0x1ab)]=_0x5359e9,_0x73061b;}}}if(_0x531cab[_0x2e26a0(0x25f)](_0x3219af[_0x2e26a0(0x18f)])){if(_0x2e26a0(0x2c9)!==_0x2e26a0(0x2c9))_0x44019c=_0x115da4(_0x4b1fc5['$1'])[_0x2e26a0(0x19e)](',')['map'](_0xcf2c3c=>_0xcf2c3c[_0x2e26a0(0x1ec)]()[_0x2e26a0(0x1c4)]());else{const _0x18a6a0=String(RegExp['$1'])['split'](',')[_0x2e26a0(0x253)](_0x2b3beb=>_0x2b3beb[_0x2e26a0(0x1c4)]());for(const _0x5b6200 of _0x18a6a0){if('WeEHC'!==_0x2e26a0(0x18c)){if(_0x3574c4[_0x2e26a0(0x18d)](_0xd3c52d)){if(!_0x25a237['inBattle']())return![];if(this[_0x2e26a0(0x2a6)]())return![];}return _0x2efada[_0x2e26a0(0x20a)]['Game_BattlerBase_isOccasionOk'][_0x2e26a0(0x1a6)](this,_0x58896c);}else{const _0x472148=/^\d+$/[_0x2e26a0(0x236)](_0x5b6200);let _0x13cca1=0x0;if(_0x472148){if(_0x2e26a0(0x27d)===_0x2e26a0(0x27d))_0x13cca1=Number(_0x5b6200);else return this[_0x2e26a0(0x1bc)]?_0x3adc46[_0x2e26a0(0x1e2)](_0x306fe9,this[_0x2e26a0(0x1bc)]):_0x36ed11['ItemThrowSkills'][_0x2e26a0(0x21a)][_0x2e26a0(0x1a6)](this,_0x593060);}else{if(_0x2e26a0(0x1b8)===_0x2e26a0(0x1b8))_0x13cca1=DataManager[_0x2e26a0(0x2d2)](_0x5b6200);else return this[_0x2e26a0(0x1d3)][_0x4bd578['id']];}_0x13cca1&&_0x344438[_0x2e26a0(0x28a)](_0x13cca1);}}}}},Game_Action[_0x314f3a(0x269)][_0x314f3a(0x2ed)]=function(_0x251cd5,_0x47b554){const _0x1b2386=_0x314f3a,_0x1e02f5=VisuMZ[_0x1b2386(0x20a)]['RegExp'],_0x2f2e54=_0x47b554['note']||'';{const _0x1585c8=_0x1e02f5['ThrowBuffsAdd'],_0x5374bd=_0x2f2e54[_0x1b2386(0x25f)](_0x1585c8);if(_0x5374bd)for(const _0xa6dede of _0x5374bd){_0xa6dede[_0x1b2386(0x25f)](_0x1585c8);const _0x350272=String(RegExp['$1'])[_0x1b2386(0x19e)](',')[_0x1b2386(0x253)](_0x398d04=>_0x398d04[_0x1b2386(0x1c4)]()),_0x5c76c6=Number(RegExp['$2']);for(const _0x47b454 of _0x350272){if('SGZLI'!==_0x1b2386(0x2e3)){const _0x42735c=/^\d+$/['test'](_0x47b454);let _0x44a56d=-0x1;if(_0x42735c){if(_0x1b2386(0x2db)!==_0x1b2386(0x183))_0x44a56d=Number(_0x47b454)[_0x1b2386(0x1db)](0x0,0x7);else{const _0x24a192=/^\d+$/[_0x1b2386(0x236)](_0x10627d);let _0x1aa145=0x0;_0x24a192?_0x1aa145=_0xf1c7b4(_0xd3b98e):_0x1aa145=_0x31d7e9[_0x1b2386(0x2d2)](_0x123818),_0x1aa145&&_0x28769c['removeState'](_0x1aa145);}}else _0x44a56d=DataManager[_0x1b2386(0x1e6)](_0x47b454);if(_0x44a56d>=0x0){if(_0x1b2386(0x2a1)===_0x1b2386(0x2a1))_0x251cd5['addBuff'](_0x44a56d,_0x5c76c6);else{if(this['_throwItemType']===0x0)return _0x247c30[this[_0x1b2386(0x267)]];else{if(this[_0x1b2386(0x26a)]===0x1)return _0xe08ccd[this[_0x1b2386(0x267)]];else{if(this[_0x1b2386(0x26a)]===0x2)return _0x1708ca[this['_throwItemID']];}}return null;}}}else{const _0x5e7049=this[_0x1b2386(0x244)]();return _0x59e712(_0x4585e5['itemThrowPower'](_0x5e7049));}}}}{const _0x24ae33=_0x1e02f5[_0x1b2386(0x1ed)],_0x5eb93a=_0x2f2e54['match'](_0x24ae33);if(_0x5eb93a)for(const _0x38a21c of _0x5eb93a){if('yyxyw'===_0x1b2386(0x20e)){_0x38a21c[_0x1b2386(0x25f)](_0x24ae33);const _0x1cd235=String(RegExp['$1'])[_0x1b2386(0x19e)](',')[_0x1b2386(0x253)](_0x345cac=>_0x345cac[_0x1b2386(0x1c4)]()),_0x369b71=Number(RegExp['$2']);for(const _0x54e28d of _0x1cd235){if(_0x1b2386(0x213)==='qbUGe'){const _0x14e0bd=/^\d+$/[_0x1b2386(0x236)](_0x54e28d);let _0x5cb8e9=-0x1;_0x14e0bd?_0x1b2386(0x251)!==_0x1b2386(0x26f)?_0x5cb8e9=Number(_0x54e28d)[_0x1b2386(0x1db)](0x0,0x7):_0x1b0d1d=_0x2a24a3[_0x1b2386(0x1e6)](_0x58947f):_0x5cb8e9=DataManager[_0x1b2386(0x1e6)](_0x54e28d);if(_0x5cb8e9>=0x0){if(_0x1b2386(0x23d)!=='iKEhy'){_0x7c0e66=null;if(!_0x225f91[_0x1b2386(0x1f6)]())return;if(!_0x3e2c02[_0x1b2386(0x234)]())return;if(!_0x3f552d['canThrowItems'](_0x1410ea[_0x1b2386(0x1f7)]()))return;_0x28380e=_0x1632fe[_0x1b2386(0x234)]()[_0x1b2386(0x244)]();}else _0x251cd5['addDebuff'](_0x5cb8e9,_0x369b71);}}else _0x505c20=_0x3a9569[_0x1b2386(0x1e6)](_0x56d584);}}else{const _0x4e4cfc=this['subject']()['getThrownItem'](),_0x40b28f=_0x4e4cfc[_0x1b2386(0x2ce)]||'',_0x91dc02=_0x30c886[_0x1b2386(0x20a)][_0x1b2386(0x1c2)];_0x40b28f['match'](_0x91dc02[_0x1b2386(0x17a)])&&(_0x766ccc=_0x4269ae(_0x59c40a['$1']));}}}{const _0x3abd62=_0x1e02f5['ThrowBuffsRemove'],_0x149468=_0x2f2e54['match'](_0x3abd62);if(_0x149468)for(const _0x3e30d1 of _0x149468){_0x3e30d1[_0x1b2386(0x25f)](_0x3abd62);const _0x16ed41=String(RegExp['$1'])[_0x1b2386(0x19e)](',')[_0x1b2386(0x253)](_0x5f009d=>_0x5f009d[_0x1b2386(0x1c4)]());for(const _0x5d6455 of _0x16ed41){if('iSBJD'===_0x1b2386(0x2b2)){if(this[_0x1b2386(0x298)]===_0x1b2386(0x216)){if(_0x16cb15[_0x1b2386(0x2ee)][_0x1b2386(0x2cc)]())return!![];this['_waitMode']='';}return _0x3de77d['ItemThrowSkills']['Window_BattleLog_updateWaitMode'][_0x1b2386(0x1a6)](this);}else{const _0x167689=/^\d+$/[_0x1b2386(0x236)](_0x5d6455);let _0x1a7c3c=-0x1;_0x167689?_0x1a7c3c=Number(_0x5d6455)['clamp'](0x0,0x7):_0x1a7c3c=DataManager[_0x1b2386(0x1e6)](_0x5d6455),_0x1a7c3c>=0x0&&_0x251cd5[_0x1b2386(0x249)](_0x1a7c3c)&&_0x251cd5[_0x1b2386(0x24d)](_0x1a7c3c);}}}}{if('zHCVO'!==_0x1b2386(0x1be)){if(!_0xcb449a['canThrowItems'](_0x1e2b73))return;if(this[_0x1b2386(0x2a6)]())return;const _0x1496b0=this['getThrownItem']();if(_0x5c45ec['isItem'](_0x1496b0)){if(!_0x1496b0[_0x1b2386(0x1aa)])return;if(_0x1496b0['itypeId']===0x2)return;}const _0xdde54=_0x1496b0[_0x1b2386(0x2ce)]||'',_0x184337=_0x44d7ce[_0x1b2386(0x20a)][_0x1b2386(0x1c2)];if(_0xdde54['match'](_0x184337[_0x1b2386(0x210)])){const _0x11e7d2=_0x5f0882(_0xe53f0c['$1'])*0.01;if(_0x41494d['random']()<_0x11e7d2)return;}_0x3b85c5[_0x1b2386(0x2f3)](_0x1496b0,0x1);}else{const _0x5a25f3=_0x1e02f5[_0x1b2386(0x181)],_0xbf7794=_0x2f2e54['match'](_0x5a25f3);if(_0xbf7794)for(const _0x255d73 of _0xbf7794){_0x255d73['match'](_0x5a25f3);const _0x227b5a=String(RegExp['$1'])[_0x1b2386(0x19e)](',')[_0x1b2386(0x253)](_0x3037c4=>_0x3037c4[_0x1b2386(0x1c4)]());for(const _0x3b2886 of _0x227b5a){const _0x2abb3a=/^\d+$/[_0x1b2386(0x236)](_0x3b2886);let _0x52e1f9=-0x1;_0x2abb3a?_0x52e1f9=Number(_0x3b2886)[_0x1b2386(0x1db)](0x0,0x7):_0x52e1f9=DataManager['getParamIdWithName'](_0x3b2886),_0x52e1f9>=0x0&&_0x251cd5[_0x1b2386(0x1c6)](_0x52e1f9)&&_0x251cd5[_0x1b2386(0x24d)](_0x52e1f9);}}}}},Game_Action[_0x314f3a(0x269)][_0x314f3a(0x2ae)]=function(_0x3d2b1e,_0x50ecc2){const _0x1f964a=_0x314f3a,_0x54e11e=VisuMZ[_0x1f964a(0x20a)][_0x1f964a(0x1c2)],_0x1f57e2=_0x50ecc2[_0x1f964a(0x2ce)]||'';if(_0x1f57e2[_0x1f964a(0x25f)](_0x54e11e[_0x1f964a(0x1b4)])){if(_0x1f964a(0x212)!==_0x1f964a(0x212))return _0x2ca02e[_0x1f964a(0x1e2)](_0x1029c5,this['_throwSkill']);else{const _0x5a0ade=String(RegExp['$1']);window[_0x1f964a(0x224)]=this['subject'](),window[_0x1f964a(0x295)]=_0x3d2b1e,window['a']=this[_0x1f964a(0x234)](),window['b']=_0x3d2b1e,window[_0x1f964a(0x1a4)]=this[_0x1f964a(0x1f7)](),window[_0x1f964a(0x1f7)]=_0x50ecc2;try{eval(_0x5a0ade);}catch(_0x33006f){if(_0x1f964a(0x1bd)!==_0x1f964a(0x1bd)){if(!_0x1acbb8)return[];if(!_0x310d6e[_0x1f964a(0x264)](_0x30bce0))return[];if(_0x1162a0[_0x1f964a(0x288)](_0x16d2ca))return[];this[_0x1f964a(0x1d3)]=this[_0x1f964a(0x1d3)]||{};if(this[_0x1f964a(0x1d3)][_0x72b488['id']]!==_0x2fb784)return this[_0x1f964a(0x1d3)][_0x34d50['id']];let _0x396b41=[];const _0x4af31e=_0x34f454[_0x1f964a(0x20a)]['RegExp'],_0x11d67c=_0x43bf5b[_0x1f964a(0x2ce)]||'';return _0x11d67c[_0x1f964a(0x25f)](_0x4af31e[_0x1f964a(0x292)])&&(_0x396b41=_0x5a4526(_0x489386['$1'])[_0x1f964a(0x19e)](',')[_0x1f964a(0x253)](_0x58ec13=>_0x58ec13[_0x1f964a(0x1ec)]()[_0x1f964a(0x1c4)]())),this[_0x1f964a(0x1d3)][_0x473b9b['id']]=_0x396b41,_0x396b41;}else{if($gameTemp[_0x1f964a(0x221)]())console[_0x1f964a(0x1f1)](_0x33006f);}}window[_0x1f964a(0x224)]=undefined,window[_0x1f964a(0x295)]=undefined,window['a']=undefined,window['b']=undefined,window['skill']=undefined,window[_0x1f964a(0x1f7)]=undefined;}}},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x1c0)]=Game_Action[_0x314f3a(0x269)][_0x314f3a(0x231)],Game_Action[_0x314f3a(0x269)][_0x314f3a(0x231)]=function(){const _0x53ac73=_0x314f3a;VisuMZ[_0x53ac73(0x20a)][_0x53ac73(0x2f2)](this),VisuMZ['ItemThrowSkills']['Game_Action_applyGlobal'][_0x53ac73(0x1a6)](this);};var $thrownItem=null;VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x2f2)]=function(_0xb377db){const _0x1fbbe0=_0x314f3a;$thrownItem=null;if(!$gameParty[_0x1fbbe0(0x1f6)]())return;if(!_0xb377db[_0x1fbbe0(0x234)]())return;if(!DataManager[_0x1fbbe0(0x18d)](_0xb377db['item']()))return;$thrownItem=_0xb377db[_0x1fbbe0(0x234)]()[_0x1fbbe0(0x244)]();},VisuMZ[_0x314f3a(0x20a)]['Game_BattlerBase_isOccasionOk']=Game_BattlerBase['prototype'][_0x314f3a(0x2b1)],Game_BattlerBase[_0x314f3a(0x269)][_0x314f3a(0x2b1)]=function(_0x221157){const _0x5bb40e=_0x314f3a;if(DataManager[_0x5bb40e(0x18d)](_0x221157)){if(_0x5bb40e(0x27f)!==_0x5bb40e(0x27f)){let _0x19f3c5='';_0x19f3c5+=_0x5bb40e(0x28c),_0x19f3c5+=_0x5bb40e(0x270),_0x5f53f3(_0x19f3c5),_0x3bfbee['exit']();}else{if(!$gameParty[_0x5bb40e(0x1f6)]())return![];if(this[_0x5bb40e(0x2a6)]())return![];}}return VisuMZ[_0x5bb40e(0x20a)][_0x5bb40e(0x218)][_0x5bb40e(0x1a6)](this,_0x221157);},VisuMZ[_0x314f3a(0x20a)]['Game_BattlerBase_paySkillCost']=Game_BattlerBase[_0x314f3a(0x269)]['paySkillCost'],Game_BattlerBase[_0x314f3a(0x269)]['paySkillCost']=function(_0x4d5e97){const _0x20bcc3=_0x314f3a;VisuMZ['ItemThrowSkills']['Game_BattlerBase_paySkillCost'][_0x20bcc3(0x1a6)](this,_0x4d5e97),this[_0x20bcc3(0x2a7)](_0x4d5e97);},Game_BattlerBase[_0x314f3a(0x269)][_0x314f3a(0x2a7)]=function(_0x127f1d){const _0x2c22a5=_0x314f3a;if(!DataManager['canThrowItems'](_0x127f1d))return;if(this[_0x2c22a5(0x2a6)]())return;const _0x8a577b=this[_0x2c22a5(0x244)]();if(DataManager[_0x2c22a5(0x2d5)](_0x8a577b)){if(_0x2c22a5(0x2a2)!==_0x2c22a5(0x217)){if(!_0x8a577b[_0x2c22a5(0x1aa)])return;if(_0x8a577b['itypeId']===0x2)return;}else{const _0x586104=/^\d+$/[_0x2c22a5(0x236)](_0x596998);let _0x5d9405=-0x1;_0x586104?_0x5d9405=_0x47ac6c(_0xb962bc)[_0x2c22a5(0x1db)](0x0,0x7):_0x5d9405=_0x540511[_0x2c22a5(0x1e6)](_0x2d36d7),_0x5d9405>=0x0&&_0x432864['isBuffAffected'](_0x5d9405)&&_0x5e27f7[_0x2c22a5(0x24d)](_0x5d9405);}}const _0x20f0c6=_0x8a577b[_0x2c22a5(0x2ce)]||'',_0x23971a=VisuMZ['ItemThrowSkills'][_0x2c22a5(0x1c2)];if(_0x20f0c6[_0x2c22a5(0x25f)](_0x23971a[_0x2c22a5(0x210)])){const _0x54a62f=Number(RegExp['$1'])*0.01;if(Math[_0x2c22a5(0x228)]()<_0x54a62f)return;}$gameParty['loseItem'](_0x8a577b,0x1);},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x299)]=Game_Battler[_0x314f3a(0x269)]['onBattleStart'],Game_Battler['prototype'][_0x314f3a(0x182)]=function(_0x4e6283){const _0x42174a=_0x314f3a;VisuMZ['ItemThrowSkills'][_0x42174a(0x299)][_0x42174a(0x1a6)](this,_0x4e6283),this[_0x42174a(0x263)]();},VisuMZ['ItemThrowSkills'][_0x314f3a(0x2df)]=Game_Battler[_0x314f3a(0x269)][_0x314f3a(0x1fa)],Game_Battler[_0x314f3a(0x269)][_0x314f3a(0x1fa)]=function(){VisuMZ['ItemThrowSkills']['Game_Battler_onBattleEnd']['call'](this),this['clearThrowItem']();},Game_Battler[_0x314f3a(0x269)][_0x314f3a(0x263)]=function(){const _0x38caee=_0x314f3a;this[_0x38caee(0x267)]=-0x1,this['_throwItemType']=-0x1;},Game_Battler[_0x314f3a(0x269)]['setThrowItem']=function(_0x4e8d54){const _0x2f9daa=_0x314f3a;if(DataManager[_0x2f9daa(0x2d5)](_0x4e8d54))this['_throwItemType']=0x0;else{if(DataManager[_0x2f9daa(0x258)](_0x4e8d54))this[_0x2f9daa(0x26a)]=0x1;else{if(DataManager[_0x2f9daa(0x1cc)](_0x4e8d54))_0x2f9daa(0x2c1)!==_0x2f9daa(0x26d)?this['_throwItemType']=0x2:_0x5999cb[_0x2f9daa(0x24d)](_0x1fa0a2);else{this[_0x2f9daa(0x263)]();return;}}}this[_0x2f9daa(0x267)]=_0x4e8d54['id'];},Game_Battler[_0x314f3a(0x269)][_0x314f3a(0x244)]=function(){const _0x12b2ff=_0x314f3a;if(this[_0x12b2ff(0x26a)]===0x0){if(_0x12b2ff(0x184)!==_0x12b2ff(0x25c))return $dataItems[this[_0x12b2ff(0x267)]];else _0x1d430f[_0x12b2ff(0x20a)][_0x12b2ff(0x2a0)][_0x12b2ff(0x1a6)](this);}else{if(this[_0x12b2ff(0x26a)]===0x1)return $dataWeapons[this[_0x12b2ff(0x267)]];else{if(this[_0x12b2ff(0x26a)]===0x2)return $dataArmors[this[_0x12b2ff(0x267)]];}}return null;},Game_Battler[_0x314f3a(0x269)][_0x314f3a(0x21c)]=function(){const _0x73426c=this['getThrownItem']();return eval(DataManager['itemThrowPower'](_0x73426c));},VisuMZ['ItemThrowSkills'][_0x314f3a(0x274)]=Game_Battler['prototype']['forceAction'],Game_Battler[_0x314f3a(0x269)][_0x314f3a(0x178)]=function(_0x570c55,_0x507696){const _0x4b4751=_0x314f3a,_0x5a8add=$dataSkills[_0x570c55];if(DataManager[_0x4b4751(0x18d)](_0x5a8add)&&$gameTemp[_0x4b4751(0x221)]()){if(_0x4b4751(0x22e)!==_0x4b4751(0x202)){alert('You\x20cannot\x20use\x20a\x20forced\x20action\x20with\x20%1.'['format'](_0x5a8add[_0x4b4751(0x28d)])),SceneManager[_0x4b4751(0x203)]();return;}else _0x1fbeef=_0x55c1b8(_0x5e8d60);}VisuMZ[_0x4b4751(0x20a)][_0x4b4751(0x274)]['call'](this,_0x570c55,_0x507696);},VisuMZ['ItemThrowSkills'][_0x314f3a(0x2a0)]=Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x201)],Scene_Battle['prototype']['actorCommandSingleSkill']=function(){const _0x47ec37=_0x314f3a,_0x497c99=this[_0x47ec37(0x2f1)][_0x47ec37(0x256)](),_0x27aa9e=$dataSkills[_0x497c99];DataManager[_0x47ec37(0x18d)](_0x27aa9e)?this[_0x47ec37(0x1bf)](_0x27aa9e):VisuMZ[_0x47ec37(0x20a)][_0x47ec37(0x2a0)][_0x47ec37(0x1a6)](this);},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x2c2)]=Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x1d7)],Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x1d7)]=function(){const _0x173361=_0x314f3a,_0x1814e5=this['_skillWindow'][_0x173361(0x1f7)]();DataManager[_0x173361(0x18d)](_0x1814e5)?this[_0x173361(0x1bf)](_0x1814e5):_0x173361(0x247)!==_0x173361(0x257)?VisuMZ[_0x173361(0x20a)]['Scene_Battle_onSkillOk'][_0x173361(0x1a6)](this):this[_0x173361(0x2dc)](_0x4b7e0f,_0xdbca4,_0x1d52e7);},Scene_Battle['prototype'][_0x314f3a(0x1bf)]=function(_0x3be2a0){const _0x588a34=_0x314f3a;this[_0x588a34(0x2d3)]=!![];const _0x2e37ea=BattleManager[_0x588a34(0x2aa)]();_0x2e37ea[_0x588a34(0x27c)](_0x3be2a0['id']),this['_skillWindow'][_0x588a34(0x248)]=![],this['_itemWindow']['setThrowSkill'](_0x3be2a0),this[_0x588a34(0x1af)][_0x588a34(0x1f2)](),this[_0x588a34(0x1af)][_0x588a34(0x2c5)](),this[_0x588a34(0x1af)][_0x588a34(0x1a9)](),this[_0x588a34(0x1af)][_0x588a34(0x278)](0x0);},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x2b5)]=Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x225)],Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x225)]=function(){const _0x1d1df1=_0x314f3a;this[_0x1d1df1(0x2d3)]?this[_0x1d1df1(0x17f)]():VisuMZ[_0x1d1df1(0x20a)][_0x1d1df1(0x2b5)][_0x1d1df1(0x1a6)](this);},Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x17f)]=function(){const _0x2feb38=_0x314f3a,_0x2a5f23=this['_itemWindow'][_0x2feb38(0x1f7)]();BattleManager[_0x2feb38(0x17b)]()&&BattleManager[_0x2feb38(0x17b)]()[_0x2feb38(0x2d0)](_0x2a5f23);const _0x227df6=BattleManager['inputtingAction']();if(this[_0x2feb38(0x2f1)][_0x2feb38(0x1ba)]()==='skill'){if(_0x2feb38(0x24e)!=='xjoII'){const _0x2a9de9=this[_0x2feb38(0x1b0)][_0x2feb38(0x1f7)]();_0x227df6[_0x2feb38(0x27c)](_0x2a9de9['id']);}else this[_0x2feb38(0x2d3)]&&this[_0x2feb38(0x1b1)](),_0x53e555['ItemThrowSkills']['Scene_Battle_onEnemyOk'][_0x2feb38(0x1a6)](this);}else{if(this[_0x2feb38(0x2f1)]['currentSymbol']()===_0x2feb38(0x22c)){const _0x3c9353=this[_0x2feb38(0x2f1)][_0x2feb38(0x256)](),_0xa8d4bc=$dataSkills[_0x3c9353];_0x227df6[_0x2feb38(0x27c)](_0xa8d4bc['id']);}}if(!_0x227df6[_0x2feb38(0x1c5)]()){if(_0x2feb38(0x1df)!==_0x2feb38(0x242))this[_0x2feb38(0x1b1)](),this['selectNextCommand']();else return _0x38c309;}else _0x227df6[_0x2feb38(0x2d8)]()?this[_0x2feb38(0x252)]():this[_0x2feb38(0x26c)]();},Scene_Battle['prototype']['finalizeThrowItem']=function(){const _0x1db63a=_0x314f3a;this[_0x1db63a(0x2d3)]=![],this[_0x1db63a(0x1af)]['clearThrowSkill'](),this[_0x1db63a(0x1af)]['refresh'](),this[_0x1db63a(0x1af)][_0x1db63a(0x1e0)](),this['_itemWindow'][_0x1db63a(0x188)]();},VisuMZ['ItemThrowSkills'][_0x314f3a(0x260)]=Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x2b9)],Scene_Battle[_0x314f3a(0x269)]['onActorOk']=function(){const _0x2acdc5=_0x314f3a;this[_0x2acdc5(0x2d3)]&&(_0x2acdc5(0x194)===_0x2acdc5(0x194)?this['finalizeThrowItem']():_0x519dca=_0x51b478(_0x40a32b)['clamp'](0x0,0x7)),VisuMZ['ItemThrowSkills'][_0x2acdc5(0x260)][_0x2acdc5(0x1a6)](this);},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x22f)]=Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x192)],Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x192)]=function(){const _0x2bb526=_0x314f3a;this[_0x2bb526(0x2d3)]?(this[_0x2bb526(0x1b5)]['hide'](),this[_0x2bb526(0x1af)]['open'](),this[_0x2bb526(0x1af)][_0x2bb526(0x2c5)](),this[_0x2bb526(0x1af)]['activate']()):VisuMZ['ItemThrowSkills']['Scene_Battle_onActorCancel'][_0x2bb526(0x1a6)](this);},VisuMZ['ItemThrowSkills'][_0x314f3a(0x209)]=Scene_Battle['prototype'][_0x314f3a(0x19c)],Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x19c)]=function(){const _0x3249a3=_0x314f3a;this['_itemThrowMode']&&(_0x3249a3(0x211)!==_0x3249a3(0x283)?this[_0x3249a3(0x1b1)]():this[_0x3249a3(0x2f1)][_0x3249a3(0x280)]=!![]),VisuMZ[_0x3249a3(0x20a)][_0x3249a3(0x209)][_0x3249a3(0x1a6)](this);},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x262)]=Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x1e4)],Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x1e4)]=function(){const _0x31aeee=_0x314f3a;if(this[_0x31aeee(0x2d3)]){this[_0x31aeee(0x286)][_0x31aeee(0x1e0)](),this[_0x31aeee(0x1af)][_0x31aeee(0x2bd)](),this[_0x31aeee(0x1af)][_0x31aeee(0x2c5)](),this['_itemWindow'][_0x31aeee(0x1a9)]();if(this[_0x31aeee(0x1b5)]){if(_0x31aeee(0x2d9)===_0x31aeee(0x2d9))this[_0x31aeee(0x1b5)][_0x31aeee(0x1e0)]();else{const _0x310e23=_0x13dfd1(_0x2d3fce['$1']);_0x310e23<_0x146375?(_0x5e2192(_0x31aeee(0x1f8)[_0x31aeee(0x1d0)](_0x45ca1e,_0x310e23,_0x4c2187)),_0x580dde[_0x31aeee(0x203)]()):_0x556ff2=_0x69bb58[_0x31aeee(0x28e)](_0x310e23,_0x4de719);}}}else VisuMZ[_0x31aeee(0x20a)]['Scene_Battle_onEnemyCancel'][_0x31aeee(0x1a6)](this);},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x17c)]=Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x207)],Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x207)]=function(){const _0x2d158a=_0x314f3a;if(this[_0x2d158a(0x2d3)])this['cancelItemThrow']();else{if(_0x2d158a(0x271)==='DphTS'){if(_0x162291[_0x2d158a(0x18d)](this[_0x2d158a(0x1f7)]())&&_0x4270bd[_0x2d158a(0x1f6)]()){const _0x53929d=this[_0x2d158a(0x234)]()[_0x2d158a(0x244)](),_0xeac018=_0x53929d['note']||'',_0x42fe21=_0x40372f[_0x2d158a(0x20a)]['RegExp'];_0xeac018[_0x2d158a(0x25f)](_0x42fe21[_0x2d158a(0x17a)])&&(_0x302c6a=_0x657b3c(_0xc0a442['$1']));}return _0x11d0dd[_0x2d158a(0x20a)][_0x2d158a(0x1ca)]['call'](this,_0xf2678c,_0x480aac);}else VisuMZ[_0x2d158a(0x20a)][_0x2d158a(0x17c)][_0x2d158a(0x1a6)](this);}},Scene_Battle[_0x314f3a(0x269)][_0x314f3a(0x193)]=function(){const _0x335ad4=_0x314f3a;this[_0x335ad4(0x2d3)]=![];if(this[_0x335ad4(0x2f1)]['currentSymbol']()===_0x335ad4(0x1a4))this[_0x335ad4(0x1b0)][_0x335ad4(0x2bd)](),this[_0x335ad4(0x1b0)]['visible']=!![],this[_0x335ad4(0x1b0)][_0x335ad4(0x280)]=!![];else this[_0x335ad4(0x2f1)][_0x335ad4(0x1ba)]()===_0x335ad4(0x22c)&&(this[_0x335ad4(0x2f1)][_0x335ad4(0x280)]=!![]);this['_itemWindow']['clearThrowSkill'](),this[_0x335ad4(0x1af)][_0x335ad4(0x1f2)](),this[_0x335ad4(0x1af)]['hide'](),this['_itemWindow'][_0x335ad4(0x188)](),this[_0x335ad4(0x1b0)][_0x335ad4(0x248)]&&(this[_0x335ad4(0x191)]['visible']=!![],this[_0x335ad4(0x1b0)][_0x335ad4(0x20b)](),Imported[_0x335ad4(0x2e2)]&&this[_0x335ad4(0x1b0)][_0x335ad4(0x1e8)]());},VisuMZ[_0x314f3a(0x20a)]['Scene_Battle_endCommandSelection']=Scene_Battle[_0x314f3a(0x269)]['endCommandSelection'],Scene_Battle[_0x314f3a(0x269)]['endCommandSelection']=function(){const _0x139472=_0x314f3a;VisuMZ[_0x139472(0x20a)][_0x139472(0x19a)][_0x139472(0x1a6)](this),this['_itemThrowMode']=![],this[_0x139472(0x1af)]['clearThrowSkill']();},Spriteset_Battle[_0x314f3a(0x269)]['updateActionSequenceProjectileItemThrow']=function(_0x708c1c){const _0x519528=_0x314f3a,_0x5c4404=BattleManager[_0x519528(0x254)];if(!_0x5c4404)return;const _0x2798f5=BattleManager['_action'];if(!_0x2798f5)return;if(!_0x2798f5[_0x519528(0x264)]())return;const _0x5a0d86=_0x5c4404[_0x519528(0x244)]();if(!_0x5a0d86)return;const _0x51d835=Window_BattleLog['AUTO_THROW_ITEM_SEQUENCE'];_0x708c1c['Icon']=_0x5a0d86[_0x519528(0x25e)],VisuMZ['ItemThrowSkills']['adjustAutoItemThrowSettings'](_0x5c4404,_0x708c1c);},Window_BattleLog[_0x314f3a(0x25a)]={'enabled':VisuMZ[_0x314f3a(0x20a)]['Settings'][_0x314f3a(0x196)][_0x314f3a(0x294)]??!![],'projectiles':VisuMZ['ItemThrowSkills'][_0x314f3a(0x1da)]['AutoActSeq']['Projectiles']??!![],'Duration':VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x1da)][_0x314f3a(0x196)][_0x314f3a(0x1ff)]??0x14,'AutoAngle':VisuMZ[_0x314f3a(0x20a)]['Settings'][_0x314f3a(0x196)]['AutoAngle']??![],'AngleOffset':VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x1da)][_0x314f3a(0x196)][_0x314f3a(0x1a1)]??-0x5a,'Arc':VisuMZ[_0x314f3a(0x20a)]['Settings'][_0x314f3a(0x196)]['Arc']??0x0,'Scale':VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x1da)][_0x314f3a(0x196)][_0x314f3a(0x206)]??0x1,'Spin':VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x1da)][_0x314f3a(0x196)][_0x314f3a(0x2e4)]??-0x1e,'noProjectileWait':VisuMZ['ItemThrowSkills'][_0x314f3a(0x1da)]['AutoActSeq'][_0x314f3a(0x1c1)]??0x10,'animationWait':VisuMZ[_0x314f3a(0x20a)]['Settings']['AutoActSeq'][_0x314f3a(0x2a4)]??0x18},Window_BattleLog[_0x314f3a(0x269)][_0x314f3a(0x259)]=function(_0x2ee4cc){const _0x1a702d=_0x314f3a;if(!Window_BattleLog[_0x1a702d(0x25a)][_0x1a702d(0x1a0)])return![];return DataManager[_0x1a702d(0x18d)](_0x2ee4cc[_0x1a702d(0x1f7)]());},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x20d)]=Window_BattleLog[_0x314f3a(0x269)][_0x314f3a(0x1fc)],Window_BattleLog[_0x314f3a(0x269)][_0x314f3a(0x1fc)]=function(_0xfd1343,_0xae7bb4,_0x395325){const _0x188bc8=_0x314f3a;if(this['isItemThrowAction'](_0xae7bb4))_0x188bc8(0x20f)!==_0x188bc8(0x265)?this[_0x188bc8(0x2dc)](_0xfd1343,_0xae7bb4,_0x395325):_0x1c825f[_0x188bc8(0x20a)]['Window_BattleLog_createEffectActionSet']['call'](this,_0x3ef321,_0x59eccc,_0x3ffb22);else{if(_0x188bc8(0x1fe)!==_0x188bc8(0x1fe)){let _0x322374='';_0x322374+=_0x188bc8(0x1fb),_0x322374+='in\x20order\x20for\x20VisuMZ_3_ItemThrow\x20to\x20work.',_0x396ff0(_0x322374),_0xb5bc9['exit']();}else VisuMZ[_0x188bc8(0x20a)][_0x188bc8(0x20d)][_0x188bc8(0x1a6)](this,_0xfd1343,_0xae7bb4,_0x395325);}},Window_BattleLog[_0x314f3a(0x269)]['autoItemThrowActionSet']=function(_0x2b91b0,_0x1b2736,_0x2b0f3f){const _0xe031be=_0x314f3a,_0x4c2ceb=Window_BattleLog[_0xe031be(0x25a)];this[_0xe031be(0x2b6)](_0xe031be(0x186),_0x2b91b0);this[_0xe031be(0x268)]()?_0xe031be(0x21f)===_0xe031be(0x1e5)?_0x4ec839(_0x23eedf):(this[_0xe031be(0x2b6)]('waitCount',_0x4c2ceb[_0xe031be(0x1c1)]),this[_0xe031be(0x285)](_0x2b91b0,_0x1b2736,_0x2b0f3f)):this['push'](_0xe031be(0x229),_0x4c2ceb[_0xe031be(0x1c1)]);this['push'](_0xe031be(0x2e9),_0x2b91b0,_0x2b0f3f,_0x1b2736[_0xe031be(0x1f7)]()[_0xe031be(0x1fd)]),this['push'](_0xe031be(0x229),_0x4c2ceb[_0xe031be(0x2a4)]);for(const _0x505039 of _0x2b0f3f){if(_0xe031be(0x2dd)==='mdykT')this[_0xe031be(0x2b6)](_0xe031be(0x22a),_0x2b91b0,_0x505039);else{if(!this[_0xe031be(0x234)]())return![];if(!this['item']())return![];if(this['_forcing'])return![];const _0x118211=this['item']();if(!this[_0xe031be(0x234)]()['canUse'](_0x118211))return![];const _0x5e3e44=this[_0xe031be(0x234)]()['getThrownItem']();if(_0x448b96[_0xe031be(0x1ae)](_0x5e3e44)<=0x0)return![];return!![];}}},Window_BattleLog[_0x314f3a(0x269)][_0x314f3a(0x268)]=function(){const _0x2647de=_0x314f3a;if(!Window_BattleLog['AUTO_THROW_ITEM_SEQUENCE'][_0x2647de(0x190)])return![];if(!Imported[_0x2647de(0x26b)])return![];return!![];},Window_BattleLog[_0x314f3a(0x269)]['addAutoItemThrowProjectileActions']=function(_0x38d65d,_0x246d2f,_0x129077){const _0x570387=_0x314f3a,_0x28d68d=Window_BattleLog['AUTO_THROW_ITEM_SEQUENCE'],_0x36a745=_0x38d65d[_0x570387(0x244)](),_0x45db7d={'Icon':_0x36a745['iconIndex'],'Duration':_0x28d68d[_0x570387(0x1ff)]};_0x45db7d['Start']={'Type':_0x570387(0x295),'Targets':[_0x570387(0x224)],'TargetCenter':![],'TargetLocation':_0x570387(0x22d),'PointX':Graphics[_0x570387(0x197)]/0x2,'PointY':Graphics[_0x570387(0x290)]/0x2,'OffsetX':0x0,'OffsetY':0x0},_0x45db7d[_0x570387(0x1d4)]={'Type':_0x570387(0x295),'Targets':[_0x570387(0x230)],'TargetCenter':![],'TargetLocation':'middle\x20center','PointX':Graphics['width']/0x2,'PointY':Graphics[_0x570387(0x290)]/0x2,'OffsetX':0x0,'OffsetY':0x0},_0x45db7d['Extra']={'AutoAngle':_0x28d68d['AutoAngle'],'AngleOffset':_0x28d68d[_0x570387(0x1a1)],'Arc':_0x28d68d[_0x570387(0x1dc)],'BlendMode':0x0,'EasingType':_0x570387(0x279),'Hue':0x0,'Scale':_0x28d68d[_0x570387(0x206)],'Spin':_0x28d68d[_0x570387(0x2e4)]},VisuMZ['ItemThrowSkills'][_0x570387(0x1d6)](_0x38d65d,_0x45db7d),this['push'](_0x570387(0x17d),_0x45db7d),this[_0x570387(0x2b6)](_0x570387(0x229),_0x45db7d[_0x570387(0x1ff)]);},Window_BattleLog[_0x314f3a(0x269)]['throwItemMotion']=function(_0x387d8e){const _0x3115c8=_0x314f3a;_0x387d8e['requestMotion'](_0x3115c8(0x239)),_0x387d8e[_0x3115c8(0x2f0)](0x0);},Window_BattleLog[_0x314f3a(0x269)]['performAutoItemThrowProjectile']=function(_0x2c6045){const _0x28cc0a=_0x314f3a,_0x33a7f5=BattleManager[_0x28cc0a(0x2ee)];if(!_0x33a7f5)return;BattleManager[_0x28cc0a(0x22b)]=BattleManager['_targets']['slice'](0x0),_0x33a7f5['createActionSequenceProjectile'](_0x2c6045);},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x1ac)]=Window_BattleLog['prototype'][_0x314f3a(0x27e)],Window_BattleLog['prototype'][_0x314f3a(0x27e)]=function(){const _0xff2440=_0x314f3a;if(this['_waitMode']===_0xff2440(0x216)){if('hLzka'!==_0xff2440(0x26e)){if(_0x4a1463[_0xff2440(0x221)]())_0x467c37[_0xff2440(0x1f1)](_0x3c9006);}else{if(BattleManager[_0xff2440(0x2ee)][_0xff2440(0x2cc)]())return!![];this[_0xff2440(0x298)]='';}}return VisuMZ[_0xff2440(0x20a)][_0xff2440(0x1ac)]['call'](this);},Window_BattleLog[_0x314f3a(0x269)]['thrownItemImpactAnimation']=function(_0x352452,_0x83621e){const _0x17927b=_0x314f3a,_0x377759=_0x352452[_0x17927b(0x244)](),_0x371b11=VisuMZ[_0x17927b(0x20a)][_0x17927b(0x1c2)];if(_0x377759&&_0x377759[_0x17927b(0x2ce)][_0x17927b(0x25f)](_0x371b11['ImpactAnimation']))return _0x17927b(0x1ce)==='TzKqM'?Number(RegExp['$1']):this['isThrowItemValid']();else{if('JBUWj'===_0x17927b(0x246))return _0x46a7e3(_0x225134['$1'])*0.01;else{const _0x563590=_0x83621e[_0x17927b(0x1f7)]();return _0x563590['animationId'];}}},Window_BattleItem[_0x314f3a(0x269)][_0x314f3a(0x243)]=function(_0x480715){const _0x27769c=_0x314f3a;this[_0x27769c(0x1bc)]=_0x480715;},Window_BattleItem['prototype']['clearThrowSkill']=function(){const _0x5a4380=_0x314f3a;this[_0x5a4380(0x1bc)]=null;},VisuMZ[_0x314f3a(0x20a)]['Window_BattleItem_includes']=Window_BattleItem['prototype'][_0x314f3a(0x1b2)],Window_BattleItem[_0x314f3a(0x269)][_0x314f3a(0x1b2)]=function(_0xbb28a6){const _0x42dc4e=_0x314f3a;if(this[_0x42dc4e(0x1bc)]){if(_0x42dc4e(0x233)!=='yMIoY')return DataManager['canBeThrownBy'](_0xbb28a6,this[_0x42dc4e(0x1bc)]);else _0x3207ae[_0x42dc4e(0x2eb)](_0x46e675,_0x216059);}else{if(_0x42dc4e(0x29c)==='zXTrz'){const _0x175186=this[_0x42dc4e(0x234)]()[_0x42dc4e(0x244)]();this[_0x42dc4e(0x1ad)](_0xd65496,_0x175186);}else return VisuMZ['ItemThrowSkills'][_0x42dc4e(0x21a)][_0x42dc4e(0x1a6)](this,_0xbb28a6);}},VisuMZ[_0x314f3a(0x20a)]['Window_BattleItem_isEnabled']=Window_BattleItem[_0x314f3a(0x269)][_0x314f3a(0x27b)],Window_BattleItem['prototype'][_0x314f3a(0x27b)]=function(_0x179064){const _0x2c0351=_0x314f3a;if(this['_throwSkill']&&!!_0x179064)return $gameParty['numItems'](_0x179064)>0x0;return VisuMZ[_0x2c0351(0x20a)][_0x2c0351(0x1a8)][_0x2c0351(0x1a6)](this,_0x179064);},VisuMZ[_0x314f3a(0x20a)]['Window_BattleItem_isShowNew']=Window_BattleItem['prototype'][_0x314f3a(0x29b)],Window_BattleItem[_0x314f3a(0x269)][_0x314f3a(0x29b)]=function(){const _0x5692cc=_0x314f3a;if(this[_0x5692cc(0x1bc)])return![];return VisuMZ['ItemThrowSkills'][_0x5692cc(0x2e6)][_0x5692cc(0x1a6)](this);},VisuMZ[_0x314f3a(0x20a)][_0x314f3a(0x2c3)]=Window_ShopStatus['prototype'][_0x314f3a(0x2be)],Window_ShopStatus[_0x314f3a(0x269)][_0x314f3a(0x2be)]=function(){const _0x3b6703=_0x314f3a;let _0x37005e=window[_0x3b6703(0x1ab)];DataManager[_0x3b6703(0x18d)](this[_0x3b6703(0x1a2)])&&$gameParty['inBattle']()?window[_0x3b6703(0x1ab)]=this[_0x3b6703(0x2b7)]?this[_0x3b6703(0x2b7)][_0x3b6703(0x21c)]():0x1:window[_0x3b6703(0x1ab)]=0x1;const _0x35b4ec=VisuMZ['ItemThrowSkills']['Window_ShopStatus_getItemDamageAmountTextOriginal']['call'](this);return window[_0x3b6703(0x1ab)]=_0x37005e,_0x35b4ec;};function _0x733e(){const _0x282996=['width','MAXMP','description','Scene_Battle_endCommandSelection','ITEM_THROW_DEFAULT_ITEM_POWER','onEnemyOk','DEF','split','THyDV','enabled','AngleOffset','_item','CVsBo','skill','ARRAYSTR','call','sWvlX','Window_BattleItem_isEnabled','activate','consumable','power','Window_BattleLog_updateWaitMode','applyItemThrowEffects','numItems','_itemWindow','_skillWindow','finalizeThrowItem','includes','FTeUT','ThrowJsEffect','_actorWindow','ThrowCritRate','_cache_itemThrowTypes','zBcKd','Icon','currentSymbol','MAXHP','_throwSkill','AKwHm','zHCVO','startItemThrow','Game_Action_applyGlobal','noProjectileWait','RegExp','LcGxz','trim','needsSelection','isDebuffAffected','applyVariance','tIxDs','BattleManager_startAction','Game_Action_applyVariance','FUNC','isArmor','Extra','TzKqM','ThrowStateAdd','format','armor-%1','weapon','_cache_canThrowItemTypes','Goal','LbBGh','adjustAutoItemThrowSettings','onSkillOk','FFYTp','Game_Action_isValid','Settings','clamp','Arc','ConvertParams','gvAdB','ikESH','hide','wMvtk','canBeThrownBy','ThrowElementSet','onEnemyCancel','qdjTv','getParamIdWithName','elements','showFrontviewUiShopStatusWindow','BattleCore','parse','canConcoctItems','toUpperCase','ThrowDebuffsAdd','isValid','ZSxoy','gqIOi','log','refresh','replace','weaponTypes','KEcIq','inBattle','item','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','FARXa','onBattleEnd','VisuMZ_3_ActSeqProjectiles\x20needs\x20to\x20be\x20updated\x20','createEffectActionSet','animationId','ujlWd','Duration','mXOcv','actorCommandSingleSkill','SBmBm','exit','LUK','_defaultAnimationID','Scale','onItemCancel','weapons','Scene_Battle_onEnemyOk','ItemThrowSkills','updateHelp','3473532MmqYcH','Window_BattleLog_createEffectActionSet','yyxyw','lbNAt','ThrowConserve','dAvgc','vFgAN','qbUGe','194190vfyPpg','ThrowPower','battleProjectiles','YznxY','Game_BattlerBase_isOccasionOk','addState','Window_BattleItem_includes','3779240dAaHhp','getThrownItemPower','BnyKK','Game_Action_itemHit','grwiG','wtypeId','isPlaytest','itemCri','applyItemUserEffect','user','onItemOk','AGI','MAT','random','waitCount','actionEffect','_allTargets','singleSkill','middle\x20center','OBPRQ','Scene_Battle_onActorCancel','all\x20targets','applyGlobal','some','IZnWF','subject','VisuMZ_1_BattleCore','test','filter','QyGfH','swing','VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20','YWaXr','params','iKEhy','Game_Action_applyGuard','ThrowProperties','gwMUe','etypeId','qKcJG','setThrowSkill','getThrownItem','version','SOTPB','sQHQP','visible','isBuffAffected','MAX\x20HP','parameters','ARRAYNUM','removeBuff','IGpLP','RtacH','ItemsEquipsCore','EkEbz','startEnemySelection','map','_subject','_checkItemThrow','currentExt','GKenb','isWeapon','isItemThrowAction','AUTO_THROW_ITEM_SEQUENCE','ImpactAnimation','jmYbZ','canAmplifyWithItems','iconIndex','match','Scene_Battle_onActorOk','MDF','Scene_Battle_onEnemyCancel','clearThrowItem','isSkill','SuyNi','nLbfR','_throwItemID','canAutoItemThrowProjectile','prototype','_throwItemType','VisuMZ_3_ActSeqProjectiles','startActorSelection','PyRai','hLzka','KDVSu','in\x20order\x20for\x20VisuMZ_3_ItemThrow\x20to\x20work.','pFALe','VisuMZ_3_ItemConcoctSkills','status','Game_Battler_forceAction','EvoMatrixSkills','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','MAX\x20MP','forceSelect','Linear','Game_Action_elements','isEnabled','setSkill','aMBNP','updateWaitMode','pXzzm','active','Game_Action_applyItemUserEffect','itemThrowPower','EltCN','item-%1','addAutoItemThrowProjectileActions','_enemyWindow','atypeId','hasItemThrowConflicts','AutoAngle','removeState','nIVhU','VisuMZ_1_ItemsEquipsCore\x20needs\x20to\x20be\x20updated\x20','name','max','lXMBg','height','1511007yUdLlg','CanThrowType','getElementIdWithName','Enabled','target','qKpxv','armorTypes','_waitMode','Game_Battler_onBattleStart','ActSeqProjectiles','isShowNew','PiNte','qFOaX','concat','mSLpv','Scene_Battle_actorCommandSingleSkill','ulMjZ','ejpAG','isThrowItemValid','animationWait','35ugCbFU','isEnemy','payItemThrowSkillCost','return\x200','all','inputtingAction','VisuMZ_1_ItemsEquipsCore','IRdpT','TgExS','applyItemThrowJsEffects','ThrowHitRate','17672260AuudUq','isOccasionOk','GkjyI','itemHit','QyUrU','Scene_Battle_onItemOk','push','_tempActorA','makeDamageValue','onActorOk','canThrowItemTypes','startAction','requestMotion','open','getItemDamageAmountTextOriginal','_forcing','_stateIDs','DmKzl','Scene_Battle_onSkillOk','Window_ShopStatus_getItemDamageAmountTextOriginal','ActiveChainSkills','show','weapon-%1','_hasItemThrowConflicts','items','jljLV','rnuwk','5SlGIds','isAnyProjectilePresent','categories','note','zGNCu','setThrowItem','NUM','getStateIdWithName','_itemThrowMode','gJSwM','isItem','InputComboSkills','pUZoo','isForOpponent','JigSd','6925264LFXHMu','cvFHR','autoItemThrowActionSet','mdykT','updateItemThrowAnimation','Game_Battler_onBattleEnd','189576VPETic','ARRAYEVAL','VisuMZ_3_FrontviewBattleUI','fUHxT','Spin','armor','Window_BattleItem_isShowNew','ITMPV','Game_Action_makeDamageValue','showAnimation','_cache_itemThrowPower','addBuff','EVAL','applyItemThrowBuffEffects','_spriteset','applyGuard','startWeaponAnimation','_actorCommandWindow','UpdateGlobalThrowItemVariable','loseItem','forceAction','cerxW','ThrowVariance','actor','Scene_Battle_onItemCancel','performAutoItemThrowProjectile','Game_Action_itemCri','confirmThrowItem','vyvcp','ThrowDebuffsRemove','onBattleStart','shZSn','bROsa','canUse','throwItemMotion','2pEANGN','deactivate','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','fQVgo','itemThrowTypes','WeEHC','canThrowItems','VisuMZ_3_ItemAmplifySkills','ThrowStateRemove','projectiles','_helpWindow','onActorCancel','cancelItemThrow','RAUJD','IXamY','AutoActSeq'];_0x733e=function(){return _0x282996;};return _0x733e();}