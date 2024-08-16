//=============================================================================
// VisuStella MZ - Battle System BTB - Brave Turn Battle
// VisuMZ_2_BattleSystemBTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemBTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemBTB = VisuMZ.BattleSystemBTB || {};
VisuMZ.BattleSystemBTB.version = 1.16;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.16] [BattleSystemBTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_BTB_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_ItemsEquipsCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Brave Turn Battle (BTB) system plays off RPG Maker MZ's default battle
 * system with a twist of allowing actors (and enemies) to use up actions from
 * the future or save up for later. These actions will be queued and delivered
 * all in one go! Any borrowed actions from the future will result in following
 * turns without any actions to use. Should a player decide to save up their
 * actions instead through Guarding, they can charge actions with less
 * repercussions. Players will have to be brave about how to go about the
 * battle system strategically.
 * 
 * Because multiple actions can be queued up all at once, they can result in
 * the creation of an action fusion. Some skills (and items) can appear instead
 * of the originally queued actions to result in stronger, better, and more
 * awesome effects, all of which, can be defined by the game dev.
 * 
 * A Turn Order Display will also appear on the screen to show the order the
 * battlers will take their turns in. This lets the player plan in advance on
 * how to go about the rest of the turn.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "btb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Puts a twist on the Default Turn Battle system by allowing brave players
 *   to borrow actions from the future turns or save them up for later turns.
 * * Brave Points, a new currency, are added to mark how many saved turns there
 *   are for each battler.
 * * Certain actions can cost more Brave Points than others.
 * * Effects that allow battlers to alter the Brave Points of their targets.
 * * A Turn Order Display to show the player when each battler will have its
 *   turn to perform an action.
 * * Action fusion system which takes any of the queued up skills and/or items
 *   to bring forth new ones.
 * * Action fusion combinations can be either flexible or strict.
 * * Flexible action fusion combinations can have their actions queued up in
 *   any order to bring forth the result.
 * * Strict action fusion combinations must require their actions to be queued
 *   up in a specific order in order to bring forth the result.
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
 * * VisuMZ_1_SkillsStatesCore
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
 * Turn Order Display
 * 
 * The Turn Order Display will capture the battle's currently active battler
 * and any battlers found in the active battlers array for the BattleManager.
 * This does not overwrite any functions, but the Turn Order Display may or may
 * not conflict with any existing HUD elements that are already positioned on
 * the screen. If so, you can choose to offset the Turn Order Display or move
 * it to a different part of the screen through the plugin parameters.
 * 
 * ---
 * 
 * Brave Points and the Brave Command
 * 
 * Abbreviated to "BP", Brave Points are a new currency available through the
 * Brave Turn Battle system. Battlers require at least 0 BP in order to perform
 * any actions for that turn. By default, each action consumes 1 BP. At the end
 * of each turn, each battler regenerates 1 BP. With the normal flow of battle,
 * this results in a net balance.
 * 
 * However, the player can activate the "Brave Command" located right above the
 * Guard Command. This lets the battler create an extra action to perform. When
 * used, the flow of battle will result in a negative net of BP. When BP is at
 * -1 or under, that battler's turn is skipped until it raises back to 0. This
 * effectively means that the "Brave Command" will borrow actions from future
 * turns.
 * 
 * The Guard Command, however will never consume any BP for its actions even if
 * replaced as it is always determined by the battler's current guard skill.
 * This means that when used, the Guard Command lets a battler save up BP for
 * future turns, allowing BP to go net positive for the turn.
 * 
 * By strategically deciding when to borrow actions or save up for them, whole
 * new strategies can be created for battle.
 * 
 * The game dev has control over how many max actions can be borrowed at once,
 * the maximum and minimum amounts for BP to go to, how much BP will cost at
 * default, and how much BP can be regenerated by default. These settings can
 * all be made within the Plugin Parameters.
 * 
 * ---
 *
 * Action Times +
 * 
 * While the Brave Turn Battle system is active, the "Action Times +" trait
 * is disabled. This is to prevent any conflicts with the Brave system. If the
 * Brave Turn Battle system is disabled during the course of the game, then the
 * "Action Times +" will resume working like normal.
 *
 * ---
 * 
 * Can Input
 * 
 * As mentioned in the "Brave Points and the Brave Command" above, if BP is
 * under 0, then that battler cannot input or act for that turn. The battler
 * would have to wait for BP regenerate back up to 0 first.
 * 
 * ---
 * 
 * Can Guard
 * 
 * The Guard action is only enabled when there's one action to use for that
 * turn. This means that if the "Brave Command" is used to generate new actions
 * to perform during that turn, the Guard Command will be disabled. It can be
 * enabled once again if the player cancels out the Brave Command until the
 * action count reaches 1.
 * 
 * ---
 * 
 * Enemy Brave Actions
 * 
 * Enemies can also use the "Brave Command" by faking it. By making a dummy
 * skill with the <BTB Multiple Actions: id, id, id, id> skill notetag or the
 * <BTB Multiple Actions: name, name, name, name> skill notetag, you can have
 * the enemy perform the exact skills you want in a multi-action queue.
 * 
 * Enemies that use this will also suffer from heavy BP expenditure and wait on
 * subsequent turns until they have enough BP to perform actions again.
 * 
 * This is also how you can have enemies perform Action Fusions. For the queued
 * skills, load up the Action Fusion's skill combination you want for the enemy
 * to perform.
 * 
 * ---
 *
 * ============================================================================
 * Action Fusions
 * ============================================================================
 *
 * This feature deserves its own section as it's quite indepth with how it
 * works. Action Fusions can be performed by either the actor and/or enemy
 * (though this can be disabled in the Plugin Parameters or through traits).
 * In order for them to occur, the queued up action list must have a certain
 * combination of skills/items for the Action Fusion to occur.
 *
 * ---
 * 
 * Fusion Types
 * 
 * There are two types of Action Fusions: Flexible and Strict. Flexible Action
 * Fusions can use a combination of skills/items in any order (thus flexible),
 * while Strict Action Fusions must have their skill/item combinations queued
 * up in the exact order they're listed (thus strict).
 * 
 * They all share the following properties:
 * 
 * Skill Action Fusions can only use skills for combinations. This means that
 * Action Fusions made as a skill database object cannot have item requirements
 * for the combinations.
 * 
 * Item Action Fusions can only use items for combinations. This means that
 * Action Fusions made as an item database object cannot have skills for the
 * combination requirements.
 * 
 * Skills and items that have selectable targets need to have matching targets
 * to be a part of the same Action Fusion combination. For example, if "Quad
 * Attack" requires "Attack", "Attack", "Attack", "Attack", then the player
 * would have to target the same enemy for each of the "Attack" actions. This
 * is to prevent the cases where the player wants to spread out the damage
 * evenly across various enemies without forming it into a single target "Quad
 * Attack" against one.
 * 
 * Skills and items that do not have selectable targets are combination targets
 * for any and all candidates. This means an area of effect "Flame" spell can
 * combine with any target selectable or otherwise skill.
 * 
 * When an Action Fusion is performed, it will not consume the resources for
 * the database object itself, but instead, from each of the skills/items used
 * to bring it out. This means the skill costs of the Action Fusion itself are
 * irrelevant, but the skill costs of the combinations do matter and will be
 * consumed instead. The same applies to items.
 * 
 * If the Action Fusion skill/item is used directly, its resource consumption
 * will be performed as if it was not an Action Fusion skill/item. The "Quad
 * Attack" skill will use its regular MP and TP costs while the "Double Elixir"
 * item will consume itself.
 * 
 * If a queue could potentially meet the demands of multiple Action Fusions,
 * then the Action Fusion with the highest database ID will be given priority,
 * as to make it less complicated. This means if the "Double Attack" Action
 * Fusion and "Triple Attack" Action Fusion were to occur at the same time,
 * if the "Triple Attack" skill has a higher ID than "Double Attack", then
 * "Triple Attack" will take priority instead.
 * 
 * The battler must be able to pay the actions of each of the queued actions
 * used to form the Action Fusion. This means if a battler would run out of MP
 * or items for the cost, it will just simply not occur.
 * 
 * An Action Fusion can have multiple combinations that create it as long as
 * there are multiple notetags that determine the Action Fusion. As an example,
 * the "Flame Strike" can occur with the "Attack" and "Flame" combination or
 * the "Strike" and "Flame" combination.
 * 
 * ---
 *
 * Flexible Action Fusion
 *
 * <BTB Flexible Fusion: id, id>
 * <BTB Flexible Fusion: id, id, id>
 * <BTB Flexible Fusion: id, id, id, id>
 *
 * <BTB Flexible Fusion: name, name>
 * <BTB Flexible Fusion: name, name, name>
 * <BTB Flexible Fusion: name, name, name, name>
 *
 * - Used for: Skill, Item Notetags
 * - This Action Fusion skill/item will occur as long as any of the listed
 *   combination skills/items are queued in the action list for that turn.
 *   These actions can be queued in any order.
 * - Replace 'id' with the database ID of the skill/item to use as a
 *   combination requirement.
 * - Replace 'name' with the name of the skill/item to use as a combination
 *   requirement.
 * - Skill Action Fusions can only use skills for combinations.
 * - Item Action Fusions can only use items for combinations.
 * - Skills and items that have selectable targets need to have matching
 *   targets to be a part of the same Action Fusion combination.
 * - Skills and items that do not have selectable targets are combination
 *   targets for any and all candidates.
 * - When an Action Fusion is performed, it will not consume the resources for
 *   the database object itself, but instead, from each of the skills/items
 *   used to bring it out.
 * - Is used directly, this action's resource consumption will be performed as
 *   if it was not an Action Fusion skill/item.
 * - If a queue could potentially meet the demands of multiple Action Fusions,
 *   then the Action Fusion with the highest database ID is given priority.
 * - The battler must be able to pay the actions of each of the queued actions
 *   used to form the Action Fusion.
 * - Insert multiple copies of this notetag to give this Action Fusion more
 *   combinations that can activate it.
 * 
 * Examples:
 * 
 *   ---
 * 
 *   Fire Strike
 * 
 *   <BTB Flexible Fusion: Attack, Fire>
 * 
 *   This Action Fusion will occur if a battler has the "Attack" and "Fire"
 *   actions queued up in any order. "Attack" can come before "Fire" or "Fire"
 *   can come before "Attack" and it would still call upon "Fire Strike".
 * 
 *   ---
 * 
 *   Flame Strike
 * 
 *   <BTB Flexible Fusion: Attack, Flame>
 *   <BTB Flexible Fusion: Strike, Flame>
 * 
 *   This Action Fusion will occur if a battler has "Attack" and "Flame",
 *   "Flame" and "Attack", "Strike" and "Flame", or "Flame" and "Strike" in its
 *   action queue.
 * 
 *   ---
 *
 * ---
 * 
 * Strict Action Fusion
 *
 * <BTB Strict Fusion: id, id>
 * <BTB Strict Fusion: id, id, id>
 * <BTB Strict Fusion: id, id, id, id>
 *
 * <BTB Strict Fusion: name, name>
 * <BTB Strict Fusion: name, name, name>
 * <BTB Strict Fusion: name, name, name, name>
 *
 * - Used for: Skill, Item Notetags
 * - This Action Fusion skill/item will occur as long as the exact listed
 *   combination(s) of skills/items is queued in the action list for that turn.
 *   These actions can be queued in any order.
 * - Replace 'id' with the database ID of the skill/item to use as a
 *   combination requirement.
 * - Replace 'name' with the name of the skill/item to use as a combination
 *   requirement.
 * - Skill Action Fusions can only use skills for combinations.
 * - Item Action Fusions can only use items for combinations.
 * - Skills and items that have selectable targets need to have matching
 *   targets to be a part of the same Action Fusion combination.
 * - Skills and items that do not have selectable targets are combination
 *   targets for any and all candidates.
 * - When an Action Fusion is performed, it will not consume the resources for
 *   the database object itself, but instead, from each of the skills/items
 *   used to bring it out.
 * - Is used directly, this action's resource consumption will be performed as
 *   if it was not an Action Fusion skill/item.
 * - If a queue could potentially meet the demands of multiple Action Fusions,
 *   then the Action Fusion with the highest database ID is given priority.
 * - The battler must be able to pay the actions of each of the queued actions
 *   used to form the Action Fusion.
 * - Insert multiple copies of this notetag to give this Action Fusion more
 *   combinations that can activate it.
 * 
 * Example:
 * 
 *   ---
 * 
 *   Shadow Flare Blade
 * 
 *   <BTB Strict Fusion: Shade II, Fire II, Attack>
 * 
 *   The battler must queue up "Shade II", "Fire II", and "Attack" in that
 *   exact order or else "Shadow Flare Blade" will not occur. Even if the
 *   battler changed the order to "Fire II", "Shade II", and "Attack", the
 *   Action Fusion will not occur.
 * 
 *   ---
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
 * VisuMZ_3_BoostAction
 * 
 * The Boost Actions plugin cannot be used together with Battle System - BTB.
 * If the Battle System is switched to using Battle System - BTB, then the
 * Boost Actions plugin will shut itself off.
 * 
 * The reason why these plugins cannot work together is because their mechanics
 * play off too similarly to each other and cause conflicts. We, the plugin
 * developer team, highly recommend that you utilize Battle System - BTB's
 * Brave system instead of the Boost system to make the best use of the battle
 * system in effect.
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
 * === General BTB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <BTB Help>
 *  description
 *  description
 * </BTB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under BTB.
 * - This is primarily used if the skill behaves differently in BTB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to BTB.
 *
 * ---
 *
 * <BTB Cannot Brave>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - If a battler is affected by a trait object with one of these notetags,
 *   that battler cannot use Brave to generate more actions.
 * - For actors, this will come with the Brave Command disabled.
 *
 * ---
 *
 * <BTB Hide Brave>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - If a battler is affected by a trait object with one of these notetags,
 *   that battler cannot use Brave to generate more actions.
 * - For actors, this will come with the Brave Command hidden along with their
 *   BP values.
 *
 * ---
 * 
 * === BTB Turn Order Display-Related Notetags ===
 * 
 * These notetags affect the BTB Turn Order Display
 * 
 * ---
 *
 * <BTB Turn Order Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <BTB Turn Order Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <BTB Turn Order Face: Monster, 1>
 * 
 * ---
 * 
 * === Brave Points Cost-Related Notetags ===
 * 
 * The following notetags are used to manage Brave Point (BP) costs, how some
 * actions can alter other BP values, and more.
 * 
 * ---
 *
 * <BTB BP Cost: x>
 *
 * - Used for: Skill, Item Notetags
 * - Determines how much BP the battler uses when performing this action.
 * - Replace 'x' with a number value to determine its BP cost.
 *
 * ---
 *
 * <BTB Hide BP Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Prevents the BP cost from being shown for this action.
 *
 * ---
 * 
 * === Brave Point Manipulation-Related Notetags ===
 * 
 * The following notetags are used to manage Brave Point (BP) costs, how some
 * actions can alter other BP values, and more.
 * 
 * ---
 *
 * <BTB User Set BP: x>
 * <BTB Target Set BP: x>
 *
 * - Used for: Skill, Item Notetags
 * - Sets the user/target's current BP to a specific value.
 * - Replace 'x' with a number value to determine how much you want the user
 *   or target's BP to be set to.
 * - The 'user' variant only affects the action's user.
 * - The 'target' variant only affects the action's target.
 *
 * ---
 *
 * <BTB User Gain BP: +x>
 * <BTB Target Gain BP: +x>
 *
 * <BTB User Lose BP: -x>
 * <BTB Target Lose BP: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Causes the action to alter how much BP the user/target has.
 * - Replace 'x' with a number value to determine how much BP is gained/lost
 *   for the user/target.
 * - The 'user' variant only affects the action's user.
 * - The 'target' variant only affects the action's target.
 *
 * ---
 * 
 * === JavaScript Notetags: Brave Point Manipulation ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * give more control over Brave Point alteration.
 * 
 * ---
 *
 * <JS BTB User BP>
 *  code
 *  code
 *  value = code;
 * </JS BTB User BP>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine what is the user's final
 *   BP value after all of the code is ran.
 * - The 'value' variable is the returned value to be set as the user's BP.
 *   This value also starts off as the user's current BP.
 * - The 'user' variable refers to the action's user.
 * - The 'target' variable refers to the action's current target.
 * 
 * ---
 *
 * <JS BTB Target BP>
 *  code
 *  code
 *  value = code;
 * </JS BTB Target BP>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine what is the current
 *   target's final BP value after all of the code is ran.
 * - The 'value' variable is the returned value to be set as the target's BP.
 *   This value also starts off as the target's current BP.
 * - The 'user' variable refers to the action's user.
 * - The 'target' variable refers to the action's current target.
 * 
 * ---
 * 
 * === Brave Point Managment-Related Notetags ===
 * 
 * The following notetags are used to for battlers to manage their BP settings
 * throughout the course of the fight.
 * 
 * ---
 *
 * <BTB Initial BP: +x>
 * <BTB Initial BP: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - If a battler is affected by a trait object with one of these notetags,
 *   alter that battler's initial BP at the start of battle.
 * - Replace 'x' with a number value representing how much you want to alter
 *   the affected battler's initial BP at the start of battle.
 *
 * ---
 *
 * <BTB BP Regen: +x>
 * <BTB BP Degen: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - If a battler is affected by a trait object with one of these notetags,
 *   alter the amount of BP regenerated at the end of each battle turn.
 * - Replace 'x' with a number value representing how much BP is regenerated
 *   (or decreased). 
 *   - Use a positive number for gaining BP at the end of each turn.
 *   - Use a negative number for losing BP at the end of each turn.
 *
 * ---
 *
 * <BTB Maximum BP: +x>
 * <BTB Maximum BP: -x>
 *
 * <BTB Minimum BP: +x>
 * <BTB Minimum BP: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - If a battler is affected by a trait object with one of these notetags,
 *   increase or decrease the maximum/minimum BP that battler can have by 'x'.
 * - Replace 'x' with a number value representing the amount to change the
 *   battler's maximum/minimum BP by.
 * - These numbers cannot exceed or go under the designated amounts set by the
 *   hard cap in this plugin's Plugin Parameters.
 *
 * ---
 * 
 * === Multiple Action-Related Notetags ===
 * 
 * These notetags allow you to determine how multiple actions are handled
 * through the Brave Turn Battle system.
 * 
 * ---
 *
 * <BTB Maximum Actions: +x>
 * <BTB Maximum Actions: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - If a battler is affected by a trait object with one of these notetags,
 *   increase/decrease the maximum number of actions that battler can have
 *   through the Brave Command.
 * - Replace 'x' with a number value representing the amount of maximum actions
 *   to increase/decrease by.
 * - This value cannot make a battler go below 1 maximum action.
 * - This value cannot make a battler go above the hard cap set in this
 *   plugin's Plugin Parameters.
 *
 * ---
 *
 * <BTB Multiple Actions: id, id>
 * <BTB Multiple Actions: id, id, id>
 * <BTB Multiple Actions: id, id, id, id>
 *
 * <BTB Multiple Actions: name, name>
 * <BTB Multiple Actions: name, name, name>
 * <BTB Multiple Actions: name, name, name, name>
 *
 * - Used for: Skill Notetags
 * - When an enemy (NOT ACTOR) uses this skill, the game will appear as if the
 *   enemy is using the Brave Command to load up multiple actions at a time.
 * - Replace 'id' with the database ID of the skill to use in the multiple
 *   action queue.
 * - Replace 'name' with the name of the skill to use in the enemy's multiple
 *   action queue.
 * 
 * ---
 * 
 * === Action Fusion-Related Notetags ===
 * 
 * For more details, please refer to the Action Fusion dedicated section listed
 * earlier in the documentation.
 * 
 * ---
 *
 * Flexible Action Fusion
 *
 * <BTB Flexible Fusion: id, id>
 * <BTB Flexible Fusion: id, id, id>
 * <BTB Flexible Fusion: id, id, id, id>
 *
 * <BTB Flexible Fusion: name, name>
 * <BTB Flexible Fusion: name, name, name>
 * <BTB Flexible Fusion: name, name, name, name>
 *
 * - Used for: Skill, Item Notetags
 * - This Action Fusion skill/item will occur as long as any of the listed
 *   combination skills/items are queued in the action list for that turn.
 *   These actions can be queued in any order.
 * - Replace 'id' with the database ID of the skill/item to use as a
 *   combination requirement.
 * - Replace 'name' with the name of the skill/item to use as a combination
 *   requirement.
 * - Skill Action Fusions can only use skills for combinations.
 * - Item Action Fusions can only use items for combinations.
 * - Skills and items that have selectable targets need to have matching
 *   targets to be a part of the same Action Fusion combination.
 * - Skills and items that do not have selectable targets are combination
 *   targets for any and all candidates.
 * - When an Action Fusion is performed, it will not consume the resources for
 *   the database object itself, but instead, from each of the skills/items
 *   used to bring it out.
 * - Is used directly, this action's resource consumption will be performed as
 *   if it was not an Action Fusion skill/item.
 * - If a queue could potentially meet the demands of multiple Action Fusions,
 *   then the Action Fusion with the highest database ID is given priority.
 * - The battler must be able to pay the actions of each of the queued actions
 *   used to form the Action Fusion.
 * - Insert multiple copies of this notetag to give this Action Fusion more
 *   combinations that can activate it.
 *
 * ---
 * 
 * Strict Action Fusion
 *
 * <BTB Strict Fusion: id, id>
 * <BTB Strict Fusion: id, id, id>
 * <BTB Strict Fusion: id, id, id, id>
 *
 * <BTB Strict Fusion: name, name>
 * <BTB Strict Fusion: name, name, name>
 * <BTB Strict Fusion: name, name, name, name>
 *
 * - Used for: Skill, Item Notetags
 * - This Action Fusion skill/item will occur as long as the exact listed
 *   combination(s) of skills/items is queued in the action list for that turn.
 *   These actions can be queued in any order.
 * - Replace 'id' with the database ID of the skill/item to use as a
 *   combination requirement.
 * - Replace 'name' with the name of the skill/item to use as a combination
 *   requirement.
 * - Skill Action Fusions can only use skills for combinations.
 * - Item Action Fusions can only use items for combinations.
 * - Skills and items that have selectable targets need to have matching
 *   targets to be a part of the same Action Fusion combination.
 * - Skills and items that do not have selectable targets are combination
 *   targets for any and all candidates.
 * - When an Action Fusion is performed, it will not consume the resources for
 *   the database object itself, but instead, from each of the skills/items
 *   used to bring it out.
 * - Is used directly, this action's resource consumption will be performed as
 *   if it was not an Action Fusion skill/item.
 * - If a queue could potentially meet the demands of multiple Action Fusions,
 *   then the Action Fusion with the highest database ID is given priority.
 * - The battler must be able to pay the actions of each of the queued actions
 *   used to form the Action Fusion.
 * - Insert multiple copies of this notetag to give this Action Fusion more
 *   combinations that can activate it.
 *
 * ---
 *
 * <BTB Cannot Fusion>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - If a battler is affected by a trait object that has this notetag, that
 *   battler cannot perform any Action Fusions. Queued skills will occur
 *   normally instead.
 * - If the actor is affected by both notetags for <BTB Cannot Fusion> and
 *   <BTB Enable Fusion> priority will be given based on the order of their
 *   trait objects.
 *
 * ---
 *
 * <BTB Enable Fusion>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - If a battler is affected by a trait object that has this notetag, that
 *   battler is allowed to perform any Action Fusions. Queued skills will occur
 *   normally instead.
 * - If the actor is affected by both notetags for <BTB Cannot Fusion> and
 *   <BTB Enable Fusion> priority will be given based on the order of their
 *   trait objects.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change BTB Turn Order Icon
 * - Changes the icons used for the specific actor(s) on the BTB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Actor: Change BTB Turn Order Face
 * - Changes the faces used for the specific actor(s) on the BTB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Actor: Clear BTB Turn Order Graphic
 * - Clears the BTB Turn Order graphics for the actor(s).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change BTB Turn Order Icon
 * - Changes the icons used for the specific enemy(ies) on the BTB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change BTB Turn Order Face
 * - Changes the faces used for the specific enemy(ies) on the BTB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Enemy: Clear BTB Turn Order Graphic
 * - Clears the BTB Turn Order graphics for the enemy(ies).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: BTB Turn Order Visibility
 * - Determine the visibility of the BTB Turn Order Display.
 *
 *   Visibility:
 *   - Changes the visibility of the BTB Turn Order Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings regarding Battle System BTB. These range from how Brave
 * Points (BP) appear in-game to how their costs are displayed.
 *
 * ---
 *
 * Brave Points
 * 
 *   Full Name:
 *   - What is the full name of "Brave Points" in your game?
 * 
 *   Abbreviation:
 *   - What is the abbreviation of "Brave Points" in your game?
 * 
 *   Icon:
 *   - What icon do you wish to use to represent Brave Points?
 * 
 *   Cost Format:
 *   - How are Brave Point costs displayed?
 *   - %1 - Cost, %2 - BP Text, %3 - Icon
 *
 * ---
 *
 * Displayed Costs
 * 
 *   Cost Position Front?:
 *   - Put the BP Cost at the front of skill/item costs?
 * 
 *   Show Cost: Attack:
 *   - Show the BP cost for the Attack command?
 * 
 *   Show Cost: Guard:
 *   - Show the BP cost for the Guard command?
 * 
 *   Reduce Shown BP Cost:
 *   - Reduce shown BP costs by this much.
 *   - Used to match traditional games.
 * 
 *   Show Cost: 0 BP:
 *   - Show the BP cost when the cost is 0 BP?
 *   - Shown BP Cost reduction is applied.
 * 
 *   Show Cost: 1 BP:
 *   - Show the BP cost when the cost is 1 BP?
 *   - Shown BP Cost reduction is applied.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Adjust the mechanics settings for the Battle System BTB. Mechanics range
 * from how speed is handled to Brave action caps, how Brave Points are
 * managed, and Action Fusions.
 *
 * ---
 *
 * Action Speed
 * 
 *   Allow Random Speed?:
 *   - Allow speed to be randomized base off the user's AGI?
 * 
 *   JS: Calculate:
 *   - Code used to calculate action speed.
 *
 * ---
 *
 * Brave Action Max
 * 
 *   Default:
 *   - What is the default number of max actions a battler can have from the
 *     Brave system?
 * 
 *   Hard Cap:
 *   - What is the absolute highest for maximum actions a battler can have
 *     from the Brave system?
 *
 * ---
 *
 * Brave Points > Limits
 * 
 *   Default Maximum:
 *   - What is the default maximum number of Brave Points a battler can have at
 *     a time?
 * 
 *   Default Minimum:
 *   - What is the default minimum number of Brave Points a battler can have at
 *     a time?
 * 
 *   Hard Cap Maximum:
 *   - What is the absolute maximum number of Brave Points a battler can have
 *     at a time?
 * 
 *   Hard Cap Minimum:
 *   - What is the absolute minimum number of Brave Points a battler can have
 *     at a time?
 *
 * ---
 *
 * Brave Points > Costs
 * 
 *   Default Skill Cost:
 *   - How many Brave Points does a skill cost by default?
 * 
 *   Default Item Cost:
 *   - How many Brave Points does an item cost by default?
 * 
 *   Predicted Cost:
 *   - What is considered predicted cost?
 *
 * ---
 *
 * Brave Points > Start Battle
 * 
 *   Neutral:
 *   - How many Brave Points should a battler have if the battle advantage is
 *     neutral?
 * 
 *   Favored:
 *   - How many Brave Points should a battler have if the battle advantage is
 *     favored?
 *
 * ---
 *
 * Brave Points > Regeneration
 * 
 *   Base Recovery:
 *   - How many Brave Points are regenerated at the end of each turn?
 * 
 *   Needs to be Alive?:
 *   - Do battlers need to be alive to regenerate Brave Points?
 *
 * ---
 *
 * Action Fusions
 * 
 *   Actor Access?:
 *   - Allow actors access to Action Fusions?
 * 
 *   Enemy Access?:
 *   - Allow enemies access to Action Fusions?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Brave Animations Settings
 * ============================================================================
 *
 * Animation when applying/canceling Brave effects.
 *
 * ---
 *
 * On Brave
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *
 * ---
 *
 * Cancel Brave
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *
 * ---
 *
 * Enemy Brave
 * 
 *   Show Activation?:
 *   - Show the enemy activating Brave?
 * 
 *   Wait Frames:
 *   - This is the number of frames to wait between activations.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Turn Order Display Settings
 * ============================================================================
 *
 * Turn Order Display settings used for Battle System BTB. These adjust how the
 * visible turn order appears in-game.
 *
 * ---
 *
 * General
 * 
 *   Display Position:
 *   - Select where the Turn Order will appear on the screen.
 * 
 *     Offset X:
 *     - How much to offset the X coordinate by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset the Y coordinate by.
 *     - Negative: up. Positive: down.
 * 
 *   Center Horizontal?:
 *   - Reposition the Turn Order Display to always be centered if it is a
 *     'top' or 'bottom' position?
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the display when the
 *     help window is open?
 * 
 *   Reposition Log?:
 *   - If the display position is at the top, reposition the Battle Log Window
 *     to be lower?
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Turn Order.
 *   - Settings may vary depending on position.
 *   - Left to Right / Down to Up
 *   - Right to Left / Up to Down
 * 
 *   Subject Distance:
 *   - How far do you want the currently active battler to distance itself from
 *     the rest of the Turn Order?
 * 
 *   Screen Buffer:
 *   - What distance do you want the display to be away from the edge of the
 *     screen by?
 *
 * ---
 *
 * Reposition For Help
 * 
 *   Repostion X By:
 *   Repostion Y By:
 *   - Reposition the display's coordinates by this much when the Help Window
 *     is visible.
 *
 * ---
 *
 * Slots
 * 
 *   Max Horizontal:
 *   - Maximum slots you want to display for top and bottom Turn Order Display
 *     positions?
 * 
 *   Max Vertical:
 *   - Maximum slots you want to display for left and right Turn Order Display
 *     positions?
 * 
 *   Length:
 *   - How many pixels long should the slots be on the Turn Order display?
 * 
 *   Thin:
 *   - How many pixels thin should the slots be on the Turn Order display?
 * 
 *   Update Frames:
 *   - How many frames should it take for the slots to update their
 *     positions by?
 *
 * ---
 *
 * Slot Border
 * 
 *   Show Border?:
 *   - Show borders for the slot sprites?
 * 
 *   Border Thickness:
 *   - How many pixels thick should the colored portion of the border be?
 * 
 *   Actors
 *   Enemies
 * 
 *     Border Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Border Skin:
 *     - Optional. Place a skin on the actor/enemy borders instead of
 *       rendering them?
 *
 * ---
 *
 * Slot Sprites
 * 
 *   Actors
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the actor graphic.
 *     - Face Graphic - Show the actor's face.
 *     - Icon - Show a specified icon.
 *     - Sideview Actor - Show the actor's sideview battler.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for actors by default?
 * 
 *   Enemies
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the enemy graphic.
 *     - Face Graphic - Show a specified face graphic.
 *     - Icon - Show a specified icon.
 *     - Enemy - Show the enemy's graphic or sideview battler.
 * 
 *     Default Face Name:
 *     - Use this default face graphic if there is no specified face.
 * 
 *     Default Face Index:
 *     - Use this default face index if there is no specified index.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for enemies by default?
 * 
 *     Match Hue?:
 *     - Match the hue for enemy battlers?
 *     - Does not apply if there's a sideview battler.
 *
 * ---
 *
 * Slot Letter
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the slot sprite?
 * 
 *   Font Name:
 *   - The font name used for the text of the Letter.
 *   - Leave empty to use the default game's font.
 * 
 *   Font Size:
 *   - The font size used for the text of the Letter.
 *
 * ---
 *
 * Slot Background
 * 
 *   Show Background?:
 *   - Show the background on the slot sprite?
 * 
 *   Actors
 *   Enemies
 * 
 *     Background Color 1:
 *     Background Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Background Skin:
 *     - Optional. Use a skin for the actor background instead of
 *       rendering them?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings Settings
 * ============================================================================
 *
 * Settings regarding the windows of the Battle System BTB. These mostly adjust
 * how certain aspects of the Brave Turn Battle system appear in-game.
 *
 * ---
 *
 * Window_ActorCommand
 * 
 *   Command Text:
 *   - What is the text that appears for the Brave command?
 * 
 *   Show Command?:
 *   - Show the Brave command in the Actor Command Window?
 * 
 *   Page Up/Dn Shortcuts?:
 *   - Use Page Up/Down for shortcuts on activating Brave?
 * 
 *   JS: Draw Counters:
 *   - Code used to determine how the action counters are displayed on
 *     the window.
 * 
 *     Action Slot:
 *     - This is the text used to represent a non-selected action slot.
 * 
 *     Current Action:
 *     - This is the text used to represent the current action slot.
 *
 * ---
 *
 * Window_BattleStatus
 * 
 *   Display Format:
 *   - How are actor Brave Point displayed?
 *   - %1 - Total BP, %2 - BP Text, %3 - Icon
 * 
 *   Predict Format:
 *   - How are predicted Brave Point displayed?
 *   - %1 - Total BP, %2 - BP Text, %3 - Icon, %4 - Predicted
 *
 * ---
 *
 * Window_BattleStatus > Text Colors
 * 
 *   Neutral Color:
 *   - Text code color for neutral number values.
 * 
 *   Positive Color:
 *   - Text code color for positive number values.
 * 
 *   Negative Color:
 *   - Text code color for negative number values.
 *
 * ---
 *
 * Window_BattleStatus > Style Settings > Default Style
 *
 * Window_BattleStatus > Style Settings > List Style
 *
 * Window_BattleStatus > Style Settings > XP Style
 *
 * Window_BattleStatus > Style Settings > Portrait Style
 *
 * Window_BattleStatus > Style Settings > Border Style
 *
 * Window_BattleStatus > Style Settings > Alignment Style
 * 
 *   Show Display?:
 *   - Show the actor's BP values in the Battle Status Window?
 * 
 *   Alignment:
 *   - How do you want the actor BP values to be aligned?
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset the actor BP display X/Y by how many pixels?
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
 * Version 1.16: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where strict action fusion combinations would not register.
 *    Fix made by Olivia.
 * 
 * Version 1.15: February 15, 2024
 * * Bug Fixes!
 * ** Fixed a bug where action fusions would consume double the amount of items
 *    if the skills were to cost items. Fix made by Olivia.
 * 
 * Version 1.14: December 15, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.13: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the BTB Turn Order faces and icons to not change
 *    properly for actors and enemies. Fix made by Olivia.
 * 
 * Version 1.12: August 11, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused a crash due to removing actors midway in battle.
 *    Fix made by Olivia.
 * 
 * Version 1.11: July 7, 2022
 * * Compatibility Update!
 * ** Plugin is now updated to support larger than 8 troop sizes.
 * 
 * Version 1.10: June 9, 2022
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.09: March 3, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.08: January 13, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: May 21, 2021
 * * Bug Fixes!
 * ** Using items and skills outside of battle will no longer have BP
 *    restrictions imposed upon them. Fix made by Olivia.
 * 
 * Version 1.06: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_3_BoostAction plugin.
 * 
 * Version 1.05: March 19, 2021
 * * Feature Update!
 * ** Turn Order Window calculations slightly tweaked for times when the window
 *    layer is bigger than it should be. Update made by Olivia.
 * 
 * Version 1.04: March 5, 2021
 * * Bug Fixes!
 * ** <BTB User Set BP: x>, <BTB User Gain BP: +x>, <BTB User Lose BP: -x>
 *    notetags should no work properly. Fix made by Arisu.
 * 
 * Version 1.03: January 22, 2021
 * * Feature Update!
 * ** A different kind of end battle check is now made to determine hiding the
 *    turn order display. Update made by Olivia.
 * 
 * Version 1.02: January 1, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.01: December 25, 2020
 * * Bug Fixes!
 * ** Brave Point preview in the battle status will now be bound by the
 *    absolute minimum hard card and the maximum soft cap. Fixed by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetag added by Yanfly.
 * *** <BTB Enable Fusion>
 *
 * Version 1.00: January 4, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BtbTurnOrderActorIcon
 * @text Actor: Change BTB Turn Order Icon
 * @desc Changes the icons used for the specific actor(s) on the BTB Turn Order.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 84
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BtbTurnOrderActorFace
 * @text Actor: Change BTB Turn Order Face
 * @desc Changes the faces used for the specific actor(s) on the BTB Turn Order.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Actor1
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BtbTurnOrderClearActorGraphic
 * @text Actor: Clear BTB Turn Order Graphic
 * @desc Clears the BTB Turn Order graphics for the actor(s).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BtbTurnOrderEnemyIcon
 * @text Enemy: Change BTB Turn Order Icon
 * @desc Changes the icons used for the specific enemy(ies) on the BTB Turn Order.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 298
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BtbTurnOrderEnemyFace
 * @text Enemy: Change BTB Turn Order Face
 * @desc Changes the faces used for the specific enemy(ies) on the BTB Turn Order.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Monster
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BtbTurnOrderClearEnemyGraphic
 * @text Enemy: Clear BTB Turn Order Graphic
 * @desc Clears the BTB Turn Order graphics for the enemy(ies).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemTurnOrderVisibility
 * @text System: BTB Turn Order Visibility
 * @desc Determine the visibility of the BTB Turn Order Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the BTB Turn Order Display.
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
 * @param BattleSystemBTB
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
 * @desc General settings regarding Battle System BTB.
 * @default {"BravePoints":"","BravePointsFull:str":"Brave Points","BravePointsAbbr:str":"BP","BravePointsIcon:num":"73","BravePointCostFmt:str":"\\FS[22]\\C[4]%1\\C[6]%2\\C[0]","DisplayedCosts":"","CostPosition:eval":"false","ShowCostForAttack:eval":"false","ShowCostForGuard:eval":"false","ReduceShownBPCost:num":"0","Show_0_BP_Cost:eval":"true","Show_1_BP_Cost:eval":"true"}
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Adjust the mechanics settings for the Battle System BTB.
 * @default {"ActionSpeed":"","AllowRandomSpeed:eval":"false","CalcActionSpeedJS:func":"\"// Declare Constants\\nconst agi = this.subject().agi;\\n\\n// Create Speed\\nlet speed = agi;\\nif (this.allowRandomSpeed()) {\\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\\n}\\nif (this.item()) {\\n    speed += this.item().speed;\\n}\\nif (this.isAttack()) {\\n    speed += this.subject().attackSpeed();\\n}\\n\\n// Return Speed\\nreturn speed;\"","ActionMax":"","MaxActionsDefault:num":"4","MaxActionsHardCap:num":"9","BravePoints":"","BravePointsLimits":"","MaxBravePointsDefault:num":"3","MinBravePointsDefault:num":"-4","MaxBravePointsHardCap:num":"9","MinBravePointsHardCap:num":"-9","BravePointsCosts":"","BravePointSkillCost:num":"1","BravePointItemCost:num":"1","BravePointPredictedCost:num":"1","BravePointsStartBattle":"","BravePointStartNeutral:num":"0","BravePointStartFavor:num":"3","BravePointsRegen":"","BravePointRegenBase:num":"1","BravePointsRegenAlive:eval":"true","ActionFusions":"","ActorActionFusions:eval":"true","EnemyActionFusions:eval":"true"}
 *
 * @param BraveAnimation:struct
 * @text Brave Animations
 * @type struct<BraveAnimation>
 * @desc Animation when applying/canceling Brave effects.
 * @default {"OnBrave":"","BraveAnimationID:num":"12","BraveMirror:eval":"false","BraveMute:eval":"false","CancelBrave":"","CancelAnimationID:num":"62","CancelMirror:eval":"false","CancelMute:eval":"false"}
 *
 * @param TurnOrder:struct
 * @text Turn Order Display
 * @type struct<TurnOrder>
 * @desc Turn Order Display settings used for Battle System BTB.
 * @default {"General":"","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","CenterHorz:eval":"true","RepositionTopForHelp:eval":"true","RepositionLogWindow:eval":"true","OrderDirection:eval":"true","SubjectDistance:num":"8","ScreenBuffer:num":"20","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"96","Slots":"","MaxHorzSprites:num":"16","MaxVertSprites:num":"10","SpriteLength:num":"72","SpriteThin:num":"36","UpdateFrames:num":"24","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","ActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","EnemySystemBorder:str":"","BorderThickness:num":"2","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"19","ActorBgColor2:str":"9","ActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"19","EnemyBgColor2:str":"18","EnemySystemBg:str":""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Settings regarding the windows of the Battle System BTB.
 * @default {"Window_ActorCommand":"","CommandName:str":"Brave","ShowCommand:eval":"true","BraveShortcuts:eval":"true","DrawActionCountersJS:func":"\"// Declare Constants\\nconst sprite = arguments[0];\\nconst parentWindow = arguments[1];\\nconst actor = arguments[2];\\n\\n// Set Location\\nsprite.x = Math.round(parentWindow.width / 2);\\nsprite.y = 0;\\nsprite.anchor.x = 0.5\\nsprite.anchor.y = 0.5\\n\\n// Create Text\\nconst textSlot = TextManager.btbActionSlot;\\nconst textCurrent = TextManager.btbActionCurrent;\\nlet text = textSlot.repeat(actor.numActions());\\nconst index = actor._actionInputIndex;\\ntext = text.substring(0, index) + textCurrent + text.substring(index + 1);\\n\\n// Create and Draw Bitmap\\nconst bitmap = new Bitmap(parentWindow.width, parentWindow.lineHeight());\\nbitmap.fontSize = 36;\\nbitmap.drawText(text, 0, 0, bitmap.width, bitmap.height, 'center');\\nsprite.bitmap = bitmap;\"","ActionSlot:str":"○","ActionCurrent:str":"◉","Window_BattleStatus":"","StatusDisplayFmt:str":"\\FS[16]\\C[6]%2\\C[0] \\FS[22]%1","StatusPredictFmt:str":"\\FS[16]\\C[6]%2\\C[0] \\FS[22]%1\\FS[16] → \\FS[22]%4","TextColors":"","NeutralColor:num":"0","PositiveColor:num":"4","NegativeColor:num":"2","Styles":"","DefaultStyle":"","default_display:eval":"true","default_align:str":"right","default_offsetX:num":"16","default_offsetY:num":"0","ListStyle":"","list_display:eval":"true","list_align:str":"left","list_offsetX:num":"-8","list_offsetY:num":"0","XPStyle":"","xp_display:eval":"true","xp_align:str":"right","xp_offsetX:num":"16","xp_offsetY:num":"0","PortraitStyle":"","portrait_display:eval":"true","portrait_align:str":"right","portrait_offsetX:num":"-8","portrait_offsetY:num":"56","BorderStyle":"","border_display:eval":"true","border_align:str":"right","border_offsetX:num":"16","border_offsetY:num":"0"}
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
 * @param BravePoints
 * @text Brave Points
 *
 * @param BravePointsFull:str
 * @text Full Name
 * @parent BravePoints
 * @desc What is the full name of "Brave Points" in your game?
 * @default Brave Points
 *
 * @param BravePointsAbbr:str
 * @text Abbreviation
 * @parent BravePoints
 * @desc What is the abbreviation of "Brave Points" in your game?
 * @default BP
 *
 * @param BravePointsIcon:num
 * @text Icon
 * @parent BravePoints
 * @desc What icon do you wish to use to represent Brave Points?
 * @default 73
 *
 * @param BravePointCostFmt:str
 * @text Cost Format
 * @parent BravePoints
 * @desc How are Brave Point costs displayed?
 * %1 - Cost, %2 - BP Text, %3 - Icon
 * @default \FS[22]\C[4]%1\C[6]%2\C[0]
 *
 * @param DisplayedCosts
 * @text Displayed Costs
 *
 * @param CostPosition:eval
 * @text Cost Position Front?
 * @parent DisplayedCosts
 * @type boolean
 * @on Front
 * @off Back
 * @desc Put the BP Cost at the front of skill/item costs?
 * @default false
 *
 * @param ShowCostForAttack:eval
 * @text Show Cost: Attack
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the BP cost for the Attack command?
 * @default false
 *
 * @param ShowCostForGuard:eval
 * @text Show Cost: Guard
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the BP cost for the Guard command?
 * @default false
 *
 * @param ReduceShownBPCost:num
 * @text Reduce Shown BP Cost
 * @parent DisplayedCosts
 * @type number
 * @desc Reduce shown BP costs by this much.
 * Used to match traditional games.
 * @default 0
 *
 * @param Show_0_BP_Cost:eval
 * @text Show Cost: 0 BP
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the BP cost when the cost is 0 BP?
 * Shown BP Cost reduction is applied.
 * @default true
 *
 * @param Show_1_BP_Cost:eval
 * @text Show Cost: 1 BP
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the BP cost when the cost is 1 BP?
 * Shown BP Cost reduction is applied.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param ActionSpeed
 * @text Action Speed
 *
 * @param AllowRandomSpeed:eval
 * @text Allow Random Speed?
 * @parent ActionSpeed
 * @type boolean
 * @on Allow
 * @off Disable
 * @desc Allow speed to be randomized base off the user's AGI?
 * @default false
 *
 * @param CalcActionSpeedJS:func
 * @text JS: Calculate
 * @parent ActionSpeed
 * @type note
 * @desc Code used to calculate action speed.
 * @default "// Declare Constants\nconst agi = this.subject().agi;\n\n// Create Speed\nlet speed = agi;\nif (this.allowRandomSpeed()) {\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\n}\nif (this.item()) {\n    speed += this.item().speed;\n}\nif (this.isAttack()) {\n    speed += this.subject().attackSpeed();\n}\n\n// Return Speed\nreturn speed;"
 *
 * @param ActionMax
 * @text Brave Action Max
 *
 * @param MaxActionsDefault:num
 * @text Default
 * @parent ActionMax
 * @type number
 * @min 1
 * @desc What is the default number of max actions a battler can 
 * have from the Brave system?
 * @default 4
 *
 * @param MaxActionsHardCap:num
 * @text Hard Cap
 * @parent ActionMax
 * @type number
 * @min 1
 * @desc What is the absolute highest for maximum actions a battler
 * can have from the Brave system?
 * @default 9
 *
 * @param BravePoints
 * @text Brave Points
 *
 * @param BravePointsLimits
 * @text Limits
 * @parent BravePoints
 *
 * @param MaxBravePointsDefault:num
 * @text Default Maximum
 * @parent BravePointsLimits
 * @type number
 * @min 1
 * @desc What is the default maximum number of Brave Points a
 * battler can have at a time?
 * @default 3
 *
 * @param MinBravePointsDefault:num
 * @text Default Minimum
 * @parent BravePointsLimits
 * @desc What is the default minimum number of Brave Points a
 * battler can have at a time?
 * @default -4
 *
 * @param MaxBravePointsHardCap:num
 * @text Hard Cap Maximum
 * @parent BravePointsLimits
 * @type number
 * @min 1
 * @desc What is the absolute maximum number of Brave Points a
 * battler can have at a time?
 * @default 9
 *
 * @param MinBravePointsHardCap:num
 * @text Hard Cap Minimum
 * @parent BravePointsLimits
 * @desc What is the absolute minimum number of Brave Points a
 * battler can have at a time?
 * @default -9
 *
 * @param BravePointsCosts
 * @text Costs
 * @parent BravePoints
 *
 * @param BravePointSkillCost:num
 * @text Default Skill Cost
 * @parent BravePointsCosts
 * @type number
 * @min 0
 * @desc How many Brave Points does a skill cost by default?
 * @default 1
 *
 * @param BravePointItemCost:num
 * @text Default Item Cost
 * @parent BravePointsCosts
 * @type number
 * @min 0
 * @desc How many Brave Points does an item cost by default?
 * @default 1
 *
 * @param BravePointPredictedCost:num
 * @text Predicted Cost
 * @parent BravePointsCosts
 * @type number
 * @min 0
 * @desc What is considered predicted cost?
 * @default 1
 *
 * @param BravePointsStartBattle
 * @text Start Battle
 * @parent BravePoints
 *
 * @param BravePointStartNeutral:num
 * @text Neutral
 * @parent BravePointsStartBattle
 * @desc How many Brave Points should a battler have if the
 * battle advantage is neutral?
 * @default 0
 *
 * @param BravePointStartFavor:num
 * @text Favored
 * @parent BravePointsStartBattle
 * @desc How many Brave Points should a battler have if the
 * battle advantage is favored?
 * @default 3
 *
 * @param BravePointsRegen
 * @text Regeneration
 * @parent BravePoints
 *
 * @param BravePointRegenBase:num
 * @text Base Recovery
 * @parent BravePointsRegen
 * @type number
 * @min 0
 * @desc How many Brave Points are regenerated at the end
 * of each turn?
 * @default 1
 *
 * @param BravePointsRegenAlive:eval
 * @text Needs to be Alive?
 * @parent BravePointsRegen
 * @type boolean
 * @on Alive
 * @off Can Be Dead
 * @desc Do battlers need to be alive to regenerate Brave Points?
 * @default true
 *
 * @param ActionFusions
 * @text Action Fusions
 *
 * @param ActorActionFusions:eval
 * @text Actor Access?
 * @parent ActionFusions
 * @type boolean
 * @on Allow
 * @off Disable
 * @desc Allow actors access to Action Fusions?
 * @default true
 *
 * @param EnemyActionFusions:eval
 * @text Enemy Access?
 * @parent ActionFusions
 * @type boolean
 * @on Allow
 * @off Disable
 * @desc Allow enemies access to Action Fusions?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * BraveAnimation Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BraveAnimation:
 *
 * @param OnBrave
 * @text On Brave
 *
 * @param BraveAnimationID:num
 * @text Animation ID
 * @parent OnBrave
 * @type animation
 * @desc Play this animation when the effect activates.
 * @default 12
 *
 * @param BraveMirror:eval
 * @text Mirror Animation
 * @parent OnBrave
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * @default false
 *
 * @param BraveMute:eval
 * @text Mute Animation
 * @parent OnBrave
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * @default false
 *
 * @param CancelBrave
 * @text Cancel Brave
 *
 * @param CancelAnimationID:num
 * @text Animation ID
 * @parent CancelBrave
 * @type animation
 * @desc Play this animation when the effect activates.
 * @default 62
 *
 * @param CancelMirror:eval
 * @text Mirror Animation
 * @parent CancelBrave
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * @default false
 *
 * @param CancelMute:eval
 * @text Mute Animation
 * @parent CancelBrave
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * @default false
 *
 * @param EnemyBrave
 * @text Enemy Brave
 *
 * @param ShowEnemyBrave:eval
 * @text Show Activation?
 * @parent EnemyBrave
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy activating Brave?
 * @default true
 *
 * @param WaitFrames:num
 * @text Wait Frames
 * @parent EnemyBrave
 * @type number
 * @desc This is the number of frames to wait between activations.
 * @default 20
 *
 */
/* ----------------------------------------------------------------------------
 * Turn Order Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TurnOrder:
 *
 * @param General
 *
 * @param DisplayPosition:str
 * @text Display Position
 * @parent General
 * @type select
 * @option top
 * @option bottom
 * @option left
 * @option right
 * @desc Select where the Turn Order will appear on the screen.
 * @default top
 * 
 * @param DisplayOffsetX:num
 * @text Offset X
 * @parent DisplayPosition:str
 * @desc How much to offset the X coordinate by.
 * Negative: left. Positive: right.
 * @default 0
 * 
 * @param DisplayOffsetY:num
 * @text Offset Y
 * @parent DisplayPosition:str
 * @desc How much to offset the Y coordinate by.
 * Negative: up. Positive: down.
 * @default 0
 *
 * @param CenterHorz:eval
 * @text Center Horizontal?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Center
 * @off Stay
 * @desc Reposition the Turn Order Display to always be centered
 * if it is a 'top' or 'bottom' position?
 * @default true
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * display when the help window is open?
 * @default true
 *
 * @param RepositionLogWindow:eval
 * @text Reposition Log?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * Battle Log Window to be lower?
 * @default true
 *
 * @param OrderDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right / Down to Up
 * @off Right to Left / Up to Down
 * @desc Decide on the direction of the Turn Order.
 * Settings may vary depending on position.
 * @default true
 *
 * @param SubjectDistance:num
 * @text Subject Distance
 * @parent General
 * @type number
 * @desc How far do you want the currently active battler to
 * distance itself from the rest of the Turn Order?
 * @default 8
 *
 * @param ScreenBuffer:num
 * @text Screen Buffer
 * @parent General
 * @type number
 * @desc What distance do you want the display to be away
 * from the edge of the screen by?
 * @default 20
 * 
 * @param Reposition
 * @text Reposition For Help
 *
 * @param RepositionTopHelpX:num
 * @text Repostion X By
 * @parent Reposition
 * @desc Reposition the display's X coordinates by this much when
 * the Help Window is visible.
 * @default 0
 *
 * @param RepositionTopHelpY:num
 * @text Repostion Y By
 * @parent Reposition
 * @desc Reposition the display's Y coordinates by this much when
 * the Help Window is visible.
 * @default 96
 * 
 * @param Slots
 *
 * @param MaxHorzSprites:num
 * @text Max Horizontal
 * @parent Slots
 * @type number
 * @min 1
 * @desc Maximum slots you want to display for top and
 * bottom Turn Order Display positions?
 * @default 16
 *
 * @param MaxVertSprites:num
 * @text Max Vertical
 * @parent Slots
 * @type number
 * @min 1
 * @desc Maximum slots you want to display for left and
 * right Turn Order Display positions?
 * @default 10
 *
 * @param SpriteLength:num
 * @text Length
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels long should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param SpriteThin:num
 * @text Thin
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels thin should the slots be on the
 * Turn Order display?
 * @default 36
 *
 * @param UpdateFrames:num
 * @text Update Frames
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many frames should it take for the slots to
 * update their positions by?
 * @default 24
 *
 * @param Border
 * @text Slot Border
 *
 * @param ShowMarkerBorder:eval
 * @text Show Border?
 * @parent Border
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show borders for the slot sprites?
 * @default true
 *
 * @param BorderThickness:num
 * @text Border Thickness
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels thick should the colored portion of the border be?
 * @default 2
 *
 * @param BorderActor
 * @text Actors
 * @parent Border
 *
 * @param ActorBorderColor:str
 * @text Border Color
 * @parent BorderActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 4
 *
 * @param ActorSystemBorder:str
 * @text Border Skin
 * @parent BorderActor
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param BorderEnemy
 * @text Enemies
 * @parent Border
 *
 * @param EnemyBorderColor:str
 * @text Border Color
 * @parent BorderEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param EnemySystemBorder:str
 * @text Border Skin
 * @parent BorderEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param Sprite
 * @text Slot Sprites
 *
 * @param ActorSprite
 * @text Actors
 * @parent Sprite
 *
 * @param ActorBattlerType:str
 * @text Sprite Type
 * @parent ActorSprite
 * @type select
 * @option Face Graphic - Show the actor's face.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Sideview Actor - Show the actor's sideview battler.
 * @value svactor
 * @desc Select the type of sprite used for the actor graphic.
 * @default face
 *
 * @param ActorBattlerIcon:num
 * @text Default Icon
 * @parent ActorSprite
 * @desc Which icon do you want to use for actors by default?
 * @default 84
 *
 * @param EnemySprite
 * @text Enemies
 * @parent Sprite
 *
 * @param EnemyBattlerType:str
 * @text Sprite Type
 * @parent EnemySprite
 * @type select
 * @option Face Graphic - Show a specified face graphic.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Enemy - Show the enemy's graphic or sideview battler.
 * @value enemy
 * @desc Select the type of sprite used for the enemy graphic.
 * @default enemy
 *
 * @param EnemyBattlerFaceName:str
 * @text Default Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc Use this default face graphic if there is no specified face.
 * @default Monster
 *
 * @param EnemyBattlerFaceIndex:num
 * @text Default Face Index
 * @parent EnemySprite
 * @type number
 * @desc Use this default face index if there is no specified index.
 * @default 1
 *
 * @param EnemyBattlerIcon:num
 * @text Default Icon
 * @parent EnemySprite
 * @desc Which icon do you want to use for enemies by default?
 * @default 298
 *
 * @param EnemyBattlerMatchHue:eval
 * @text Match Hue?
 * @parent EnemySprite
 * @type boolean
 * @on Match
 * @off Don't Match
 * @desc Match the hue for enemy battlers?
 * Does not apply if there's a sideview battler.
 * @default true
 *
 * @param Letter
 * @text Slot Letter
 *
 * @param EnemyBattlerDrawLetter:eval
 * @text Show Enemy Letter?
 * @parent Letter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the slot sprite?
 * @default true
 *
 * @param EnemyBattlerFontFace:str
 * @text Font Name
 * @parent Letter
 * @desc The font name used for the text of the Letter.
 * Leave empty to use the default game's font.
 * @default 
 *
 * @param EnemyBattlerFontSize:num
 * @text Font Size
 * @parent Letter
 * @min 1
 * @desc The font size used for the text of the Letter.
 * @default 16
 *
 * @param Background
 * @text Slot Background
 *
 * @param ShowMarkerBg:eval
 * @text Show Background?
 * @parent Background
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the background on the slot sprite?
 * @default true
 *
 * @param BackgroundActor
 * @text Actors
 * @parent Background
 *
 * @param ActorBgColor1:str
 * @text Background Color 1
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ActorBgColor2:str
 * @text Background Color 2
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 9
 *
 * @param ActorSystemBg:str
 * @text Background Skin
 * @parent BackgroundActor
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param BackgroundEnemy
 * @text Enemies
 * @parent Background
 *
 * @param EnemyBgColor1:str
 * @text Background Color 1
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EnemyBgColor2:str
 * @text Background Color 2
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param EnemySystemBg:str
 * @text Background Skin
 * @parent BackgroundEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Window_ActorCommand
 *
 * @param CommandName:str
 * @text Command Text
 * @parent Window_ActorCommand
 * @desc What is the text that appears for the Brave command?
 * @default Brave
 *
 * @param ShowCommand:eval
 * @text Show Command?
 * @parent Window_ActorCommand
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the Brave command in the Actor Command Window?
 * @default true
 *
 * @param BraveShortcuts:eval
 * @text Page Up/Dn Shortcuts?
 * @parent Window_ActorCommand
 * @type boolean
 * @on Use Shortcuts
 * @off Don't Use
 * @desc Use Page Up/Down for shortcuts on activating Brave?
 * @default true
 *
 * @param DrawActionCountersJS:func
 * @text JS: Draw Counters
 * @parent Window_ActorCommand
 * @type note
 * @desc Code used to determine how the action counters are
 * displayed on the window.
 * @default "// Declare Constants\nconst sprite = arguments[0];\nconst parentWindow = arguments[1];\nconst actor = arguments[2];\n\n// Set Location\nsprite.x = Math.round(parentWindow.width / 2);\nsprite.y = 0;\nsprite.anchor.x = 0.5\nsprite.anchor.y = 0.5\n\n// Create Text\nconst textSlot = TextManager.btbActionSlot;\nconst textCurrent = TextManager.btbActionCurrent;\nlet text = textSlot.repeat(actor.numActions());\nconst index = actor._actionInputIndex;\ntext = text.substring(0, index) + textCurrent + text.substring(index + 1);\n\n// Create and Draw Bitmap\nconst bitmap = new Bitmap(parentWindow.width, parentWindow.lineHeight());\nbitmap.fontSize = 36;\nbitmap.drawText(text, 0, 0, bitmap.width, bitmap.height, 'center');\nsprite.bitmap = bitmap;"
 *
 * @param ActionSlot:str
 * @text Action Slot
 * @parent DrawActionCountersJS:func
 * @desc This is the text used to represent a non-selected action slot.
 * @default ○
 *
 * @param ActionCurrent:str
 * @text Current Action
 * @parent DrawActionCountersJS:func
 * @desc This is the text used to represent the current action slot.
 * @default ◉
 *
 * @param Window_BattleStatus
 *
 * @param StatusDisplayFmt:str
 * @text Display Format
 * @parent Window_BattleStatus
 * @desc How are actor Brave Point displayed?
 * %1 - Total BP, %2 - BP Text, %3 - Icon
 * @default \FS[16]\C[6]%2\C[0] \FS[22]%1
 *
 * @param StatusPredictFmt:str
 * @text Predict Format
 * @parent Window_BattleStatus
 * @desc How are predicted Brave Point displayed?
 * %1 - Total BP, %2 - BP Text, %3 - Icon, %4 - Predicted
 * @default \FS[16]\C[6]%2\C[0] \FS[22]%1\FS[16] → \FS[22]%4
 *
 * @param TextColors
 * @text Text Colors
 * @parent Window_BattleStatus
 *
 * @param NeutralColor:num
 * @text Neutral Color
 * @parent TextColors
 * @desc Text code color for neutral number values.
 * @default 0
 *
 * @param PositiveColor:num
 * @text Positive Color
 * @parent TextColors
 * @desc Text code color for positive number values.
 * @default 4
 *
 * @param NegativeColor:num
 * @text Negative Color
 * @parent TextColors
 * @desc Text code color for negative number values.
 * @default 2
 *
 * @param Styles
 * @text Style Settings
 * @parent Window_BattleStatus
 *
 * @param DefaultStyle
 * @text Default Style
 * @parent Styles
 *
 * @param default_display:eval
 * @text Show Display?
 * @parent DefaultStyle
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor's BP values in the Battle Status Window?
 * @default true
 *
 * @param default_align:str
 * @text Alignment
 * @parent DefaultStyle
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc How do you want the actor BP values to be aligned?
 * @default right
 *
 * @param default_offsetX:num
 * @text Offset X
 * @parent DefaultStyle
 * @desc Offset the actor BP display X by how many pixels?
 * @default 16
 *
 * @param default_offsetY:num
 * @text Offset Y
 * @parent DefaultStyle
 * @desc Offset the actor BP display Y by how many pixels?
 * @default 0
 *
 * @param ListStyle
 * @text List Style
 * @parent Styles
 *
 * @param list_display:eval
 * @text Show Display?
 * @parent ListStyle
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor's BP values in the Battle Status Window?
 * @default true
 *
 * @param list_align:str
 * @text Alignment
 * @parent ListStyle
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc How do you want the actor BP values to be aligned?
 * @default left
 *
 * @param list_offsetX:num
 * @text Offset X
 * @parent ListStyle
 * @desc Offset the actor BP display X by how many pixels?
 * @default -8
 *
 * @param list_offsetY:num
 * @text Offset Y
 * @parent ListStyle
 * @desc Offset the actor BP display Y by how many pixels?
 * @default 0
 *
 * @param XPStyle
 * @text XP Style
 * @parent Styles
 *
 * @param xp_display:eval
 * @text Show Display?
 * @parent XPStyle
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor's BP values in the Battle Status Window?
 * @default true
 *
 * @param xp_align:str
 * @text Alignment
 * @parent XPStyle
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc How do you want the actor BP values to be aligned?
 * @default right
 *
 * @param xp_offsetX:num
 * @text Offset X
 * @parent XPStyle
 * @desc Offset the actor BP display X by how many pixels?
 * @default 16
 *
 * @param xp_offsetY:num
 * @text Offset Y
 * @parent XPStyle
 * @desc Offset the actor BP display Y by how many pixels?
 * @default 0
 *
 * @param PortraitStyle
 * @text Portrait Style
 * @parent Styles
 *
 * @param portrait_display:eval
 * @text Show Display?
 * @parent PortraitStyle
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor's BP values in the Battle Status Window?
 * @default true
 *
 * @param portrait_align:str
 * @text Alignment
 * @parent PortraitStyle
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc How do you want the actor BP values to be aligned?
 * @default right
 *
 * @param portrait_offsetX:num
 * @text Offset X
 * @parent PortraitStyle
 * @desc Offset the actor BP display X by how many pixels?
 * @default -8
 *
 * @param portrait_offsetY:num
 * @text Offset Y
 * @parent PortraitStyle
 * @desc Offset the actor BP display Y by how many pixels?
 * @default 56
 *
 * @param BorderStyle
 * @text Border Style
 * @parent Styles
 *
 * @param border_display:eval
 * @text Show Display?
 * @parent BorderStyle
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor's BP values in the Battle Status Window?
 * @default true
 *
 * @param border_align:str
 * @text Alignment
 * @parent BorderStyle
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc How do you want the actor BP values to be aligned?
 * @default right
 *
 * @param border_offsetX:num
 * @text Offset X
 * @parent BorderStyle
 * @desc Offset the actor BP display X by how many pixels?
 * @default 16
 *
 * @param border_offsetY:num
 * @text Offset Y
 * @parent BorderStyle
 * @desc Offset the actor BP display Y by how many pixels?
 * @default 0
 *
 */
//=============================================================================

function _0x1bde(_0x5a4f44,_0x5a700d){const _0x2b7bc3=_0x2b7b();return _0x1bde=function(_0x1bde64,_0x3221af){_0x1bde64=_0x1bde64-0xc4;let _0xab5724=_0x2b7bc3[_0x1bde64];return _0xab5724;},_0x1bde(_0x5a4f44,_0x5a700d);}const _0x5fdf60=_0x1bde;(function(_0x7a56b,_0x53a03a){const _0xa566a5=_0x1bde,_0x21f96d=_0x7a56b();while(!![]){try{const _0x2cc075=-parseInt(_0xa566a5(0xc6))/0x1*(parseInt(_0xa566a5(0x27e))/0x2)+parseInt(_0xa566a5(0x22a))/0x3*(parseInt(_0xa566a5(0x139))/0x4)+-parseInt(_0xa566a5(0x289))/0x5*(parseInt(_0xa566a5(0xeb))/0x6)+parseInt(_0xa566a5(0x302))/0x7+-parseInt(_0xa566a5(0x14c))/0x8*(-parseInt(_0xa566a5(0x12c))/0x9)+parseInt(_0xa566a5(0x2ec))/0xa+-parseInt(_0xa566a5(0xd7))/0xb;if(_0x2cc075===_0x53a03a)break;else _0x21f96d['push'](_0x21f96d['shift']());}catch(_0x101348){_0x21f96d['push'](_0x21f96d['shift']());}}}(_0x2b7b,0x1a4ad));var label=_0x5fdf60(0x112),tier=tier||0x0,dependencies=[_0x5fdf60(0x12b),_0x5fdf60(0x1ef),'VisuMZ_1_ItemsEquipsCore','VisuMZ_1_SkillsStatesCore'],pluginData=$plugins[_0x5fdf60(0xfe)](function(_0x536631){const _0x4fd2b7=_0x5fdf60;return _0x536631['status']&&_0x536631[_0x4fd2b7(0x15b)][_0x4fd2b7(0xd2)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x5fdf60(0x103)]||{},VisuMZ[_0x5fdf60(0xd8)]=function(_0x593bcc,_0x55f444){const _0x1367fc=_0x5fdf60;for(const _0x27dbe9 in _0x55f444){if(_0x27dbe9[_0x1367fc(0x18e)](/(.*):(.*)/i)){const _0x73ae3f=String(RegExp['$1']),_0x33956e=String(RegExp['$2'])[_0x1367fc(0x191)]()[_0x1367fc(0x298)]();let _0x21efa8,_0x2e847e,_0x396efd;switch(_0x33956e){case _0x1367fc(0x104):_0x21efa8=_0x55f444[_0x27dbe9]!==''?Number(_0x55f444[_0x27dbe9]):0x0;break;case _0x1367fc(0x20c):_0x2e847e=_0x55f444[_0x27dbe9]!==''?JSON['parse'](_0x55f444[_0x27dbe9]):[],_0x21efa8=_0x2e847e[_0x1367fc(0x114)](_0xc6f98c=>Number(_0xc6f98c));break;case _0x1367fc(0x2b5):_0x21efa8=_0x55f444[_0x27dbe9]!==''?eval(_0x55f444[_0x27dbe9]):null;break;case _0x1367fc(0x296):_0x2e847e=_0x55f444[_0x27dbe9]!==''?JSON[_0x1367fc(0x2cd)](_0x55f444[_0x27dbe9]):[],_0x21efa8=_0x2e847e[_0x1367fc(0x114)](_0x1a19ba=>eval(_0x1a19ba));break;case _0x1367fc(0x133):_0x21efa8=_0x55f444[_0x27dbe9]!==''?JSON[_0x1367fc(0x2cd)](_0x55f444[_0x27dbe9]):'';break;case _0x1367fc(0x2f0):_0x2e847e=_0x55f444[_0x27dbe9]!==''?JSON['parse'](_0x55f444[_0x27dbe9]):[],_0x21efa8=_0x2e847e[_0x1367fc(0x114)](_0x4024ab=>JSON[_0x1367fc(0x2cd)](_0x4024ab));break;case _0x1367fc(0x309):_0x21efa8=_0x55f444[_0x27dbe9]!==''?new Function(JSON['parse'](_0x55f444[_0x27dbe9])):new Function('return\x200');break;case _0x1367fc(0x2ff):_0x2e847e=_0x55f444[_0x27dbe9]!==''?JSON[_0x1367fc(0x2cd)](_0x55f444[_0x27dbe9]):[],_0x21efa8=_0x2e847e[_0x1367fc(0x114)](_0x2a73d9=>new Function(JSON['parse'](_0x2a73d9)));break;case _0x1367fc(0x297):_0x21efa8=_0x55f444[_0x27dbe9]!==''?String(_0x55f444[_0x27dbe9]):'';break;case _0x1367fc(0x17f):_0x2e847e=_0x55f444[_0x27dbe9]!==''?JSON[_0x1367fc(0x2cd)](_0x55f444[_0x27dbe9]):[],_0x21efa8=_0x2e847e[_0x1367fc(0x114)](_0x30f9c4=>String(_0x30f9c4));break;case _0x1367fc(0xde):_0x396efd=_0x55f444[_0x27dbe9]!==''?JSON[_0x1367fc(0x2cd)](_0x55f444[_0x27dbe9]):{},_0x21efa8=VisuMZ[_0x1367fc(0xd8)]({},_0x396efd);break;case _0x1367fc(0x26d):_0x2e847e=_0x55f444[_0x27dbe9]!==''?JSON['parse'](_0x55f444[_0x27dbe9]):[],_0x21efa8=_0x2e847e[_0x1367fc(0x114)](_0x4a51f3=>VisuMZ[_0x1367fc(0xd8)]({},JSON[_0x1367fc(0x2cd)](_0x4a51f3)));break;default:continue;}_0x593bcc[_0x73ae3f]=_0x21efa8;}}return _0x593bcc;},(_0x55e8c3=>{const _0xfe23ce=_0x5fdf60,_0x425167=_0x55e8c3[_0xfe23ce(0x1b8)];for(const _0x5732bc of dependencies){if(!Imported[_0x5732bc]){alert(_0xfe23ce(0x129)[_0xfe23ce(0xd4)](_0x425167,_0x5732bc)),SceneManager['exit']();break;}}const _0x3110bc=_0x55e8c3[_0xfe23ce(0x15b)];if(_0x3110bc[_0xfe23ce(0x18e)](/\[Version[ ](.*?)\]/i)){const _0x4b297b=Number(RegExp['$1']);_0x4b297b!==VisuMZ[label][_0xfe23ce(0x282)]&&(alert(_0xfe23ce(0x136)[_0xfe23ce(0xd4)](_0x425167,_0x4b297b)),SceneManager[_0xfe23ce(0x154)]());}if(_0x3110bc['match'](/\[Tier[ ](\d+)\]/i)){const _0x3df98c=Number(RegExp['$1']);_0x3df98c<tier?(alert(_0xfe23ce(0x1d5)['format'](_0x425167,_0x3df98c,tier)),SceneManager[_0xfe23ce(0x154)]()):tier=Math[_0xfe23ce(0x128)](_0x3df98c,tier);}VisuMZ[_0xfe23ce(0xd8)](VisuMZ[label]['Settings'],_0x55e8c3[_0xfe23ce(0x1e9)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x5fdf60(0x1b8)],_0x5fdf60(0x151),_0x26322e=>{const _0x50f54d=_0x5fdf60;VisuMZ[_0x50f54d(0xd8)](_0x26322e,_0x26322e);const _0x3600aa=_0x26322e[_0x50f54d(0x1e1)],_0x41d71d=_0x26322e[_0x50f54d(0x18b)];for(const _0x56c303 of _0x3600aa){const _0x39e2b0=$gameActors[_0x50f54d(0xf4)](_0x56c303);if(!_0x39e2b0)continue;_0x39e2b0[_0x50f54d(0x1f7)]=_0x50f54d(0x1d8),_0x39e2b0[_0x50f54d(0x1e6)]=_0x41d71d;}}),PluginManager['registerCommand'](pluginData['name'],_0x5fdf60(0x167),_0x535ae9=>{const _0x4e3301=_0x5fdf60;VisuMZ[_0x4e3301(0xd8)](_0x535ae9,_0x535ae9);const _0x5915fe=_0x535ae9[_0x4e3301(0x1e1)],_0x4a5d12=_0x535ae9[_0x4e3301(0x2b1)],_0x58d631=_0x535ae9[_0x4e3301(0x313)];for(const _0x1cab4a of _0x5915fe){const _0x3c06f8=$gameActors['actor'](_0x1cab4a);if(!_0x3c06f8)continue;_0x3c06f8[_0x4e3301(0x1f7)]='face',_0x3c06f8[_0x4e3301(0x20e)]=_0x4a5d12,_0x3c06f8['_btbTurnOrderFaceIndex']=_0x58d631;}}),PluginManager['registerCommand'](pluginData[_0x5fdf60(0x1b8)],_0x5fdf60(0x19b),_0x25dcd4=>{const _0x2840f8=_0x5fdf60;VisuMZ[_0x2840f8(0xd8)](_0x25dcd4,_0x25dcd4);const _0x3e4922=_0x25dcd4[_0x2840f8(0x1e1)];for(const _0x300e85 of _0x3e4922){const _0x3b7b85=$gameActors[_0x2840f8(0xf4)](_0x300e85);if(!_0x3b7b85)continue;_0x3b7b85[_0x2840f8(0xf6)]();}}),PluginManager[_0x5fdf60(0x288)](pluginData[_0x5fdf60(0x1b8)],_0x5fdf60(0x1e5),_0x5d885a=>{const _0x375696=_0x5fdf60;VisuMZ[_0x375696(0xd8)](_0x5d885a,_0x5d885a);const _0x5c0ba0=_0x5d885a[_0x375696(0x227)],_0x3cf01e=_0x5d885a['IconIndex'];for(const _0x2ac247 of _0x5c0ba0){const _0x3c441e=$gameTroop[_0x375696(0x1f6)]()[_0x2ac247];if(!_0x3c441e)continue;_0x3c441e['_btbTurnOrderGraphicType']=_0x375696(0x1d8),_0x3c441e['_btbTurnOrderIconIndex']=_0x3cf01e;}}),PluginManager[_0x5fdf60(0x288)](pluginData[_0x5fdf60(0x1b8)],'BtbTurnOrderEnemyFace',_0x4efec9=>{const _0x7c242b=_0x5fdf60;VisuMZ['ConvertParams'](_0x4efec9,_0x4efec9);const _0x10b791=_0x4efec9[_0x7c242b(0x227)],_0x5a5a58=_0x4efec9['FaceName'],_0x3b700d=_0x4efec9['FaceIndex'];for(const _0x595e20 of _0x10b791){const _0xb68d12=$gameTroop[_0x7c242b(0x1f6)]()[_0x595e20];if(!_0xb68d12)continue;_0xb68d12['_btbTurnOrderGraphicType']=_0x7c242b(0x142),_0xb68d12['_btbTurnOrderFaceName']=_0x5a5a58,_0xb68d12[_0x7c242b(0x197)]=_0x3b700d;}}),PluginManager['registerCommand'](pluginData[_0x5fdf60(0x1b8)],_0x5fdf60(0x1d3),_0x633b9d=>{const _0x2ef9c5=_0x5fdf60;VisuMZ[_0x2ef9c5(0xd8)](_0x633b9d,_0x633b9d);const _0x5202a7=_0x633b9d['Enemies'];for(const _0xa0ec96 of _0x5202a7){const _0x4baf3c=$gameTroop[_0x2ef9c5(0x1f6)]()[_0xa0ec96];if(!_0x4baf3c)continue;_0x4baf3c['clearTurnOrderBTBGraphics']();}}),PluginManager[_0x5fdf60(0x288)](pluginData[_0x5fdf60(0x1b8)],'SystemTurnOrderVisibility',_0xeda91f=>{const _0x30f9e4=_0x5fdf60;VisuMZ['ConvertParams'](_0xeda91f,_0xeda91f);const _0x50807f=_0xeda91f['Visible'];$gameSystem[_0x30f9e4(0xed)](_0x50807f);}),VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x253)]={'EnemyMultiAction':/<BTB (?:MULTI|MULTIPLE) (?:ACTION|ACTIONS):[ ](.*)>/i,'BravePointCost':/<BTB (?:BRAVE|BP) COST:[ ](\d+)>/i,'BravePointSetUser':/<BTB USER SET (?:BRAVE|BP):[ ](\d+)>/i,'BravePointSetTarget':/<BTB TARGET SET (?:BRAVE|BP):[ ](\d+)>/i,'BravePointAlterUser':/<BTB USER (?:GAIN|LOSE) (?:BRAVE|BP):[ ]([\+\-]\d+)>/i,'BravePointAlterTarget':/<BTB TARGET (?:GAIN|LOSE) (?:BRAVE|BP):[ ]([\+\-]\d+)>/i,'HideBravePointCost':/<BTB HIDE (?:BRAVE|BP) COST>/i,'BTB_Help':/<BTB HELP>\s*([\s\S]*)\s*<\/BTB HELP>/i,'FusionFlex':/<BTB (?:FLEX|FLEXIBLE) FUSION:[ ](.*)>/gi,'FusionStrict':/<BTB (?:STRICT|EXACT) FUSION:[ ](.*)>/gi,'JsBravePointsUser':/<JS BTB USER (?:BRAVE|BP)>\s*([\s\S]*)\s*<\/JS BTB USER (?:BRAVE|BP)>/i,'JsBravePointsTarget':/<JS BTB TARGET (?:BRAVE|BP)>\s*([\s\S]*)\s*<\/JS BTB TARGET (?:BRAVE|BP)>/i,'BravePointBattleStart':/<BTB INITIAL (?:BRAVE|BP):[ ]([\+\-]\d+)>/i,'BravePointRegen':/<BTB (?:BRAVE|BP) (?:REGEN|DEGEN):[ ]([\+\-]\d+)>/i,'MaxBravePoints':/<BTB (?:MAXIMUM|MAX) (?:BRAVE|BP):[ ]([\+\-]\d+)>/i,'MinBravePoints':/<BTB (?:MINIMUM|MIN) (?:BRAVE|BP):[ ]([\+\-]\d+)>/i,'MaxActions':/<BTB (?:MAXIMUM|MAX) (?:ACTION|ACTIONS):[ ]([\+\-]\d+)>/i,'CannotBrave':/<BTB CANNOT BRAVE>/i,'HideBrave':/<BTB HIDE BRAVE>/i,'CannotFusion':/<BTB CANNOT FUSION>/i,'EnableFusion':/<BTB ENABLE FUSION>/i},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x1c1)]=Scene_Boot[_0x5fdf60(0x1a4)]['onDatabaseLoaded'],Scene_Boot[_0x5fdf60(0x1a4)][_0x5fdf60(0x113)]=function(){const _0x506820=_0x5fdf60;VisuMZ['BattleSystemBTB'][_0x506820(0x1c1)][_0x506820(0x14d)](this),this[_0x506820(0x2b6)]();},Scene_Boot[_0x5fdf60(0x1a4)][_0x5fdf60(0x2b6)]=function(){const _0x45fc24=_0x5fdf60;this[_0x45fc24(0x26a)](),this[_0x45fc24(0x2ac)]();},Scene_Boot[_0x5fdf60(0x1a4)][_0x5fdf60(0x26a)]=function(){const _0x156b49=_0x5fdf60;if(VisuMZ[_0x156b49(0x1f4)])return;const _0x418383=$dataSkills[_0x156b49(0x244)]($dataItems);for(const _0x50547f of _0x418383){if(!_0x50547f)continue;DataManager[_0x156b49(0x1db)](_0x50547f);}},VisuMZ[_0x5fdf60(0x112)]['JS']={},Scene_Boot[_0x5fdf60(0x1a4)][_0x5fdf60(0x2ac)]=function(){const _0x55bb5e=_0x5fdf60;if(VisuMZ[_0x55bb5e(0x1f4)])return;const _0xf1cb47=VisuMZ[_0x55bb5e(0x112)]['RegExp'],_0x3e53c0=$dataSkills[_0x55bb5e(0x244)](dataItems);for(const _0x30c4be of _0x3e53c0){if(!_0x30c4be)continue;VisuMZ[_0x55bb5e(0x112)][_0x55bb5e(0x2f6)](_0x30c4be,_0x55bb5e(0x2a7)),VisuMZ[_0x55bb5e(0x112)][_0x55bb5e(0x2f6)](_0x30c4be,'JsBravePointsTarget');}},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x2f6)]=function(_0x3ed892,_0x2fa191){const _0x23df2b=_0x5fdf60,_0x335fdd=VisuMZ[_0x23df2b(0x112)][_0x23df2b(0x253)][_0x2fa191],_0x3bc906=_0x3ed892[_0x23df2b(0x1e0)];if(_0x3bc906['match'](_0x335fdd)){const _0x5bdfcf=String(RegExp['$1']),_0x58f3fa=_0x23df2b(0x230)[_0x23df2b(0xd4)](_0x5bdfcf),_0x3d0b7f=VisuMZ[_0x23df2b(0x112)][_0x23df2b(0x137)](_0x3ed892,_0x2fa191);VisuMZ[_0x23df2b(0x112)]['JS'][_0x3d0b7f]=new Function(_0x58f3fa);}},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x137)]=function(_0x2bd4a4,_0x3421af){const _0x6bd36b=_0x5fdf60;if(VisuMZ[_0x6bd36b(0x137)])return VisuMZ['createKeyJS'](_0x2bd4a4,_0x3421af);let _0x5550ef='';if($dataActors[_0x6bd36b(0xd2)](_0x2bd4a4))_0x5550ef=_0x6bd36b(0x17d)[_0x6bd36b(0xd4)](_0x2bd4a4['id'],_0x3421af);if($dataClasses[_0x6bd36b(0xd2)](_0x2bd4a4))_0x5550ef=_0x6bd36b(0x266)[_0x6bd36b(0xd4)](_0x2bd4a4['id'],_0x3421af);if($dataSkills[_0x6bd36b(0xd2)](_0x2bd4a4))_0x5550ef='Skill-%1-%2'['format'](_0x2bd4a4['id'],_0x3421af);if($dataItems[_0x6bd36b(0xd2)](_0x2bd4a4))_0x5550ef=_0x6bd36b(0x1bd)[_0x6bd36b(0xd4)](_0x2bd4a4['id'],_0x3421af);if($dataWeapons[_0x6bd36b(0xd2)](_0x2bd4a4))_0x5550ef=_0x6bd36b(0x141)[_0x6bd36b(0xd4)](_0x2bd4a4['id'],_0x3421af);if($dataArmors[_0x6bd36b(0xd2)](_0x2bd4a4))_0x5550ef=_0x6bd36b(0x107)[_0x6bd36b(0xd4)](_0x2bd4a4['id'],_0x3421af);if($dataEnemies[_0x6bd36b(0xd2)](_0x2bd4a4))_0x5550ef=_0x6bd36b(0x29e)['format'](_0x2bd4a4['id'],_0x3421af);if($dataStates['includes'](_0x2bd4a4))_0x5550ef=_0x6bd36b(0x1cc)[_0x6bd36b(0xd4)](_0x2bd4a4['id'],_0x3421af);return _0x5550ef;},VisuMZ['BattleSystemBTB'][_0x5fdf60(0x149)]=VisuMZ[_0x5fdf60(0x149)],VisuMZ[_0x5fdf60(0x149)]=function(_0x4e2d46){const _0x3caa1a=_0x5fdf60;VisuMZ[_0x3caa1a(0x112)][_0x3caa1a(0x149)][_0x3caa1a(0x14d)](this,_0x4e2d46),DataManager['btbRegisterFusions'](_0x4e2d46),VisuMZ[_0x3caa1a(0x112)][_0x3caa1a(0x2f6)](_0x4e2d46,_0x3caa1a(0x2a7)),VisuMZ['BattleSystemBTB'][_0x3caa1a(0x2f6)](_0x4e2d46,_0x3caa1a(0x1a6));},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0xff)]=VisuMZ['ParseItemNotetags'],VisuMZ['ParseItemNotetags']=function(_0x35aa63){const _0x27a9d3=_0x5fdf60;VisuMZ['BattleSystemBTB'][_0x27a9d3(0xff)]['call'](this,_0x35aa63),DataManager[_0x27a9d3(0x1db)](_0x35aa63),VisuMZ[_0x27a9d3(0x112)]['Parse_Notetags_BravePointsUserJS'](_0x35aa63,'JsBravePointsUser'),VisuMZ[_0x27a9d3(0x112)][_0x27a9d3(0x2f6)](_0x35aa63,_0x27a9d3(0x1a6));},DataManager['getSkillIdWithName']=function(_0x364a0f){const _0x129c3a=_0x5fdf60;_0x364a0f=_0x364a0f[_0x129c3a(0x191)]()[_0x129c3a(0x298)](),this[_0x129c3a(0x1ce)]=this[_0x129c3a(0x1ce)]||{};if(this[_0x129c3a(0x1ce)][_0x364a0f])return this[_0x129c3a(0x1ce)][_0x364a0f];for(const _0x29fbd5 of $dataSkills){if(!_0x29fbd5)continue;this[_0x129c3a(0x1ce)][_0x29fbd5[_0x129c3a(0x1b8)]['toUpperCase']()['trim']()]=_0x29fbd5['id'];}return this[_0x129c3a(0x1ce)][_0x364a0f]||0x0;},DataManager[_0x5fdf60(0x1bf)]=function(_0x5c6ae8){const _0x1a65f6=_0x5fdf60;_0x5c6ae8=_0x5c6ae8[_0x1a65f6(0x191)]()[_0x1a65f6(0x298)](),this['_itemIDs']=this[_0x1a65f6(0x20f)]||{};if(this[_0x1a65f6(0x20f)][_0x5c6ae8])return this['_itemIDs'][_0x5c6ae8];for(const _0x480851 of $dataItems){if(!_0x480851)continue;this[_0x1a65f6(0x20f)][_0x480851[_0x1a65f6(0x1b8)]['toUpperCase']()['trim']()]=_0x480851['id'];}return this[_0x1a65f6(0x20f)][_0x5c6ae8]||0x0;},DataManager[_0x5fdf60(0x210)]={},DataManager[_0x5fdf60(0x2b0)]={},DataManager[_0x5fdf60(0x19e)]={},DataManager[_0x5fdf60(0x11c)]={},DataManager[_0x5fdf60(0x1db)]=function(_0x372c2c){const _0x2a7f65=_0x5fdf60;if(!_0x372c2c)return;const _0x275243=VisuMZ[_0x2a7f65(0x112)][_0x2a7f65(0x253)],_0x145644=_0x372c2c[_0x2a7f65(0x1e0)],_0x5d65c5=DataManager['isSkill'](_0x372c2c),_0x271ec6=_0x145644[_0x2a7f65(0x18e)](_0x275243[_0x2a7f65(0x2c8)]);if(_0x271ec6)for(const _0x39e8ab of _0x271ec6){if(!_0x39e8ab)continue;_0x39e8ab['match'](_0x275243[_0x2a7f65(0x2c8)]);const _0x5a89bb=String(RegExp['$1'])[_0x2a7f65(0x12f)](','),_0x1045b3=this[_0x2a7f65(0xd1)](_0x5a89bb,_0x5d65c5)[_0x2a7f65(0x208)]((_0x58805b,_0x493a51)=>_0x58805b-_0x493a51);if(_0x1045b3[_0x2a7f65(0x26b)]<=0x1)continue;const _0x17021e=_0x1045b3[_0x2a7f65(0x1ea)]('-'),_0x4579a9=_0x5d65c5?DataManager['_btbSkillFlexFusion']:DataManager[_0x2a7f65(0x19e)];_0x4579a9[_0x17021e]=_0x372c2c['id'];}const _0x1227fb=_0x145644[_0x2a7f65(0x18e)](_0x275243[_0x2a7f65(0x18a)]);if(_0x1227fb)for(const _0x1fb9c6 of _0x1227fb){if(!_0x1fb9c6)continue;_0x1fb9c6[_0x2a7f65(0x18e)](_0x275243[_0x2a7f65(0x18a)]);const _0x2eaa65=String(RegExp['$1'])[_0x2a7f65(0x12f)](','),_0x50374f=this['btbParseFusionData'](_0x2eaa65,_0x5d65c5);if(_0x50374f['length']<=0x1)continue;const _0x206b57=_0x50374f[_0x2a7f65(0x1ea)]('-'),_0xe01535=_0x5d65c5?DataManager[_0x2a7f65(0x210)]:DataManager[_0x2a7f65(0x19e)];_0xe01535[_0x206b57]=_0x372c2c['id'];}},DataManager[_0x5fdf60(0xd1)]=function(_0x4d512a,_0x8af904){const _0x1a3d34=_0x5fdf60,_0x1defcf=[];for(let _0x4280fe of _0x4d512a){_0x4280fe=(String(_0x4280fe)||'')['trim']();const _0x16582a=/^\d+$/[_0x1a3d34(0xc5)](_0x4280fe);if(_0x16582a)_0x1defcf['push'](Number(_0x4280fe));else _0x8af904?_0x1defcf[_0x1a3d34(0x15f)](DataManager[_0x1a3d34(0x2a5)](_0x4280fe)):_0x1defcf['push'](DataManager[_0x1a3d34(0x1bf)](_0x4280fe));}return _0x1defcf;},ImageManager[_0x5fdf60(0x31b)]=VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x103)]['General']['BravePointsIcon'],ImageManager[_0x5fdf60(0x1a2)]=ImageManager[_0x5fdf60(0x1a2)]||0x9,ImageManager[_0x5fdf60(0x1b2)]=ImageManager[_0x5fdf60(0x1b2)]||0x6,TextManager['btbBravePointsFull']=VisuMZ[_0x5fdf60(0x112)]['Settings'][_0x5fdf60(0x22f)]['BravePointsFull'],TextManager[_0x5fdf60(0x19d)]=VisuMZ[_0x5fdf60(0x112)]['Settings'][_0x5fdf60(0x22f)][_0x5fdf60(0x24d)],TextManager[_0x5fdf60(0x258)]=VisuMZ[_0x5fdf60(0x112)]['Settings']['General'][_0x5fdf60(0x22d)],TextManager[_0x5fdf60(0x2c9)]=VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x103)][_0x5fdf60(0x145)][_0x5fdf60(0x322)],TextManager[_0x5fdf60(0xe5)]=VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x103)][_0x5fdf60(0x145)]['ActionSlot'],TextManager[_0x5fdf60(0x2d7)]=VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x103)][_0x5fdf60(0x145)][_0x5fdf60(0x259)],SceneManager[_0x5fdf60(0x2f7)]=function(){const _0x36c6f2=_0x5fdf60;return this[_0x36c6f2(0xcb)]&&this[_0x36c6f2(0xcb)][_0x36c6f2(0x2f1)]===Scene_Battle;},VisuMZ['BattleSystemBTB'][_0x5fdf60(0x310)]=BattleManager[_0x5fdf60(0x2e8)],BattleManager[_0x5fdf60(0x2e8)]=function(){const _0x3e981f=_0x5fdf60;if(this[_0x3e981f(0x1d1)]())return _0x3e981f(0xf7);return VisuMZ[_0x3e981f(0x112)][_0x3e981f(0x310)][_0x3e981f(0x14d)](this);},BattleManager[_0x5fdf60(0x1d1)]=function(){const _0x153c20=_0x5fdf60;return $gameSystem[_0x153c20(0x1ae)]()===_0x153c20(0xf7);},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x15d)]=BattleManager[_0x5fdf60(0x28a)],BattleManager[_0x5fdf60(0x28a)]=function(){const _0x502471=_0x5fdf60;if(this[_0x502471(0x1d1)]())return![];return VisuMZ[_0x502471(0x112)][_0x502471(0x15d)]['call'](this);},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x264)]=BattleManager[_0x5fdf60(0x24a)],BattleManager[_0x5fdf60(0x24a)]=function(){const _0x84418f=_0x5fdf60;if(this[_0x84418f(0x1d1)]())return![];return VisuMZ[_0x84418f(0x112)][_0x84418f(0x264)]['call'](this);},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x143)]=BattleManager[_0x5fdf60(0x157)],BattleManager['isTurnBased']=function(){const _0x2fb70e=_0x5fdf60;if(this[_0x2fb70e(0x1d1)]())return!![];return VisuMZ[_0x2fb70e(0x112)][_0x2fb70e(0x143)]['call'](this);},VisuMZ['BattleSystemBTB'][_0x5fdf60(0x1df)]=BattleManager[_0x5fdf60(0x239)],BattleManager[_0x5fdf60(0x239)]=function(){const _0xabea5e=_0x5fdf60;VisuMZ[_0xabea5e(0x112)][_0xabea5e(0x1df)][_0xabea5e(0x14d)](this),this['isBTB']()&&this[_0xabea5e(0xef)]()&&!this['_surprise']&&$gameParty[_0xabea5e(0x111)]()&&this[_0xabea5e(0x203)]();},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x158)]=BattleManager[_0x5fdf60(0x318)],BattleManager[_0x5fdf60(0x318)]=function(){const _0x3c5ff6=_0x5fdf60;VisuMZ[_0x3c5ff6(0x112)]['BattleManager_startTurn'][_0x3c5ff6(0x14d)](this),this['refreshStatusBTB']();},BattleManager['refreshStatusBTB']=function(){const _0x2ea8cd=_0x5fdf60;if(!SceneManager[_0x2ea8cd(0x2f7)]())return;if(!this[_0x2ea8cd(0x1d1)]())return;const _0xf10b47=SceneManager['_scene'];if(!_0xf10b47)return;const _0x27bba1=_0xf10b47[_0x2ea8cd(0x198)];if(!_0x27bba1)return;_0x27bba1[_0x2ea8cd(0x248)]();},VisuMZ['BattleSystemBTB'][_0x5fdf60(0x23f)]=BattleManager[_0x5fdf60(0x2ba)],BattleManager['makeActionOrders']=function(){const _0x4ee0c7=_0x5fdf60;VisuMZ[_0x4ee0c7(0x112)]['BattleManager_makeActionOrders'][_0x4ee0c7(0x14d)](this),this[_0x4ee0c7(0x1d1)]()&&(this[_0x4ee0c7(0x10a)]=this[_0x4ee0c7(0x10a)][_0x4ee0c7(0xfe)](_0x1603d2=>_0x1603d2&&_0x1603d2[_0x4ee0c7(0x130)]['length']>0x0),this[_0x4ee0c7(0x1de)]());},BattleManager[_0x5fdf60(0x256)]=function(){const _0x42a7ab=_0x5fdf60;if(!this[_0x42a7ab(0x1d1)]())return;if(!SceneManager['isSceneBattle']())return;const _0x58a958=this[_0x42a7ab(0x10a)];for(const _0x193835 of _0x58a958){_0x193835[_0x42a7ab(0xe3)]();}_0x58a958[_0x42a7ab(0x208)]((_0x991b53,_0x42f752)=>_0x42f752[_0x42a7ab(0x19a)]()-_0x991b53[_0x42a7ab(0x19a)]()),this[_0x42a7ab(0x1d1)]()&&this['updateTurnOrderBTB']();},BattleManager[_0x5fdf60(0x23b)]=function(){const _0x4d7bc4=_0x5fdf60;if(!this['isBTB']())return;this[_0x4d7bc4(0x10a)]=this['_actionBattlers']||[],this[_0x4d7bc4(0x10a)]=this[_0x4d7bc4(0x10a)]['filter'](_0x4af1e4=>_0x4af1e4&&_0x4af1e4[_0x4d7bc4(0x10b)]()&&_0x4af1e4[_0x4d7bc4(0x29c)]()),this['updateTurnOrderBTB']();},BattleManager[_0x5fdf60(0x1de)]=function(_0xceb368){const _0x404ad7=_0x5fdf60;if(!this['isBTB']())return;const _0x36c869=SceneManager['_scene'][_0x404ad7(0x233)];if(!_0x36c869)return;_0x36c869[_0x404ad7(0x11e)](_0xceb368);},VisuMZ[_0x5fdf60(0x112)]['BattleManager_startAction']=BattleManager[_0x5fdf60(0x25a)],BattleManager[_0x5fdf60(0x25a)]=function(){const _0x2dd9c8=_0x5fdf60;BattleManager[_0x2dd9c8(0x1d1)]()&&this[_0x2dd9c8(0x2cf)]&&this[_0x2dd9c8(0x2cf)]['processActionFusionsBTB'](),VisuMZ[_0x2dd9c8(0x112)][_0x2dd9c8(0x19c)][_0x2dd9c8(0x14d)](this);},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x156)]=Game_System['prototype'][_0x5fdf60(0x225)],Game_System[_0x5fdf60(0x1a4)][_0x5fdf60(0x225)]=function(){const _0x339a0c=_0x5fdf60;VisuMZ[_0x339a0c(0x112)][_0x339a0c(0x156)]['call'](this),this[_0x339a0c(0x305)]();},Game_System[_0x5fdf60(0x1a4)]['initBattleSystemBTB']=function(){const _0x25509c=_0x5fdf60;this[_0x25509c(0x312)]=!![];},Game_System[_0x5fdf60(0x1a4)][_0x5fdf60(0x121)]=function(){const _0x3f19e3=_0x5fdf60;return this[_0x3f19e3(0x312)]===undefined&&this[_0x3f19e3(0x305)](),this[_0x3f19e3(0x312)];},Game_System['prototype'][_0x5fdf60(0xed)]=function(_0x1588c9){const _0x12acdb=_0x5fdf60;this[_0x12acdb(0x312)]===undefined&&this[_0x12acdb(0x305)](),this[_0x12acdb(0x312)]=_0x1588c9;},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x1d9)]=Game_Action[_0x5fdf60(0x1a4)]['applyItemUserEffect'],Game_Action[_0x5fdf60(0x1a4)][_0x5fdf60(0xe9)]=function(_0x343df9){const _0x2e02ac=_0x5fdf60;VisuMZ[_0x2e02ac(0x112)]['Game_Action_applyItemUserEffect'][_0x2e02ac(0x14d)](this,_0x343df9),this[_0x2e02ac(0x2fc)](_0x343df9);},Game_Action[_0x5fdf60(0x1a4)]['applyBattleSystemBTBUserEffect']=function(_0x2ca3ee){const _0x5b36cf=_0x5fdf60;if(!BattleManager[_0x5b36cf(0x1d1)]())return;if(this[_0x5b36cf(0x1a3)]())this[_0x5b36cf(0x152)](_0x2ca3ee);},Game_Action[_0x5fdf60(0x1a4)][_0x5fdf60(0x152)]=function(_0x2e3215){const _0x154859=_0x5fdf60,_0xa21dfd=VisuMZ['BattleSystemBTB']['RegExp'],_0x40998f=this['item']()[_0x154859(0x1e0)],_0x589aa8=this[_0x154859(0x1a3)]();if(this[_0x154859(0x2bb)]()){if(_0x40998f['match'](_0xa21dfd[_0x154859(0x1c5)])){const _0x10279a=Number(RegExp['$1']);this[_0x154859(0x2bb)]()[_0x154859(0x1b6)](_0x10279a);}if(_0x40998f[_0x154859(0x18e)](_0xa21dfd[_0x154859(0x13b)])){const _0x51f3c3=Number(RegExp['$1']);this[_0x154859(0x2bb)]()[_0x154859(0x260)](_0x51f3c3);}const _0x4025c3=_0x154859(0x2a7),_0x19e003=VisuMZ['BattleSystemBTB']['createKeyJS'](_0x589aa8,_0x4025c3);if(VisuMZ[_0x154859(0x112)]['JS'][_0x19e003]){const _0x4663f1=VisuMZ[_0x154859(0x112)]['JS'][_0x19e003][_0x154859(0x14d)](this,this[_0x154859(0x2bb)](),_0x2e3215,this[_0x154859(0x2bb)]()['bravePoints']());this['subject']()[_0x154859(0x1b6)](_0x4663f1);}}if(_0x2e3215){if(_0x40998f[_0x154859(0x18e)](_0xa21dfd['BravePointSetTarget'])){const _0x3b9134=Number(RegExp['$1']);_0x2e3215[_0x154859(0x1b6)](_0x3b9134);}if(_0x40998f[_0x154859(0x18e)](_0xa21dfd['BravePointAlterTarget'])){const _0x1ab8d6=Number(RegExp['$1']);_0x2e3215[_0x154859(0x260)](_0x1ab8d6);}const _0x3020f1=_0x154859(0x1a6),_0x1d9c03=VisuMZ[_0x154859(0x112)]['createKeyJS'](_0x589aa8,_0x3020f1);if(VisuMZ[_0x154859(0x112)]['JS'][_0x1d9c03]){const _0x221294=VisuMZ[_0x154859(0x112)]['JS'][_0x1d9c03]['call'](this,this[_0x154859(0x2bb)](),_0x2e3215,_0x2e3215[_0x154859(0x2e2)]());_0x2e3215['setBravePoints'](_0x221294);}}},VisuMZ[_0x5fdf60(0x112)]['Game_Action_speed']=Game_Action[_0x5fdf60(0x1a4)][_0x5fdf60(0x19a)],Game_Action[_0x5fdf60(0x1a4)][_0x5fdf60(0x19a)]=function(){const _0x5fb786=_0x5fdf60;return BattleManager[_0x5fb786(0x1d1)]()?VisuMZ[_0x5fb786(0x112)][_0x5fb786(0x103)][_0x5fb786(0x1c9)][_0x5fb786(0x215)]['call'](this):VisuMZ[_0x5fb786(0x112)][_0x5fb786(0x295)][_0x5fb786(0x14d)](this);},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x25c)]=Game_Action[_0x5fdf60(0x1a4)][_0x5fdf60(0x2be)],Game_Action[_0x5fdf60(0x1a4)][_0x5fdf60(0x2be)]=function(){const _0x94c301=_0x5fdf60;return BattleManager[_0x94c301(0x1d1)]()?VisuMZ[_0x94c301(0x112)][_0x94c301(0x103)][_0x94c301(0x1c9)]['AllowRandomSpeed']:VisuMZ['BattleSystemBTB']['Game_Action_allowRandomSpeed'][_0x94c301(0x14d)](this);},VisuMZ['BattleSystemBTB']['Game_Action_setSkill']=Game_Action[_0x5fdf60(0x1a4)]['setSkill'],Game_Action[_0x5fdf60(0x1a4)][_0x5fdf60(0x2bf)]=function(_0x5bbef1){const _0x37feab=_0x5fdf60;VisuMZ['BattleSystemBTB']['Game_Action_setSkill'][_0x37feab(0x14d)](this,_0x5bbef1),BattleManager[_0x37feab(0x256)]();},VisuMZ['BattleSystemBTB'][_0x5fdf60(0x291)]=Game_Action[_0x5fdf60(0x1a4)][_0x5fdf60(0xe2)],Game_Action['prototype']['setItem']=function(_0x38e0f9){const _0x11d471=_0x5fdf60;VisuMZ[_0x11d471(0x112)][_0x11d471(0x291)][_0x11d471(0x14d)](this,_0x38e0f9),BattleManager['sortActionOrdersBTB']();},Game_Action[_0x5fdf60(0x1a4)][_0x5fdf60(0x116)]=function(_0x10997b){this['_actionFusionRecipe']=_0x10997b;},Game_Action[_0x5fdf60(0x1a4)]['getTotalActionFusionRecipes']=function(){const _0x3e6de7=_0x5fdf60;if(this[_0x3e6de7(0x1d2)]===undefined)return 0x0;return this[_0x3e6de7(0x1d2)][_0x3e6de7(0x12f)]('-')[_0x3e6de7(0x26b)]-0x1;},Game_Action[_0x5fdf60(0x1a4)][_0x5fdf60(0x24c)]=function(){const _0xa1e000=_0x5fdf60;if(this[_0xa1e000(0x1d2)]===undefined)return[];return this[_0xa1e000(0x1d2)][_0xa1e000(0x12f)]('-')[_0xa1e000(0x114)](_0x29bbcb=>$dataSkills[Number(_0x29bbcb)]);},Game_Action[_0x5fdf60(0x1a4)][_0x5fdf60(0x172)]=function(){const _0xb60345=_0x5fdf60;if(this[_0xb60345(0x1d2)]===undefined)return[];return this['_actionFusionRecipe'][_0xb60345(0x12f)]('-')[_0xb60345(0x114)](_0x3ae013=>$dataItems[Number(_0x3ae013)]);},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x2e2)]=function(){const _0x415fbd=_0x5fdf60;return this[_0x415fbd(0x20b)]||0x0;},Game_BattlerBase[_0x5fdf60(0x2b4)]=VisuMZ['BattleSystemBTB'][_0x5fdf60(0x103)]['Mechanics'][_0x5fdf60(0x278)],Game_BattlerBase[_0x5fdf60(0x218)]=VisuMZ['BattleSystemBTB'][_0x5fdf60(0x103)][_0x5fdf60(0x1c9)][_0x5fdf60(0x180)],Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x168)]=function(){const _0x54f286=_0x5fdf60;if(this[_0x54f286(0x1fb)]())return 0x1;if(this[_0x54f286(0x27a)]())return 0x1;const _0x3c43b6=VisuMZ[_0x54f286(0x112)][_0x54f286(0x253)],_0x31ab04=_0x3c43b6['MaxActions'];let _0x291ab5=Game_BattlerBase[_0x54f286(0x2b4)];const _0x2fe1d8=this[_0x54f286(0x127)]();for(const _0x4cc10b of _0x2fe1d8){if(!_0x4cc10b)continue;const _0x4a22a7=_0x4cc10b[_0x54f286(0x1e0)];_0x4a22a7[_0x54f286(0x18e)](_0x31ab04)&&(_0x291ab5+=Number(RegExp['$1']));}return _0x291ab5['clamp'](0x1,Game_BattlerBase[_0x54f286(0x218)]);},Game_BattlerBase[_0x5fdf60(0x2d9)]=VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x103)][_0x5fdf60(0x1c9)][_0x5fdf60(0x214)],Game_BattlerBase[_0x5fdf60(0x1f9)]=VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x103)][_0x5fdf60(0x1c9)]['MinBravePointsDefault'],Game_BattlerBase[_0x5fdf60(0x19f)]=VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x103)][_0x5fdf60(0x1c9)]['MaxBravePointsHardCap'],Game_BattlerBase[_0x5fdf60(0x159)]=VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x103)][_0x5fdf60(0x1c9)]['MinBravePointsHardCap'],Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x221)]=function(){const _0x28530e=_0x5fdf60,_0x2e6e69=VisuMZ[_0x28530e(0x112)][_0x28530e(0x253)],_0x3561d0=_0x2e6e69[_0x28530e(0x281)];let _0xc39a16=Game_BattlerBase['BTB_MAX_BRAVEPOINTS_DEFAULT'];const _0x592cdc=this['traitObjects']();for(const _0x11238a of _0x592cdc){if(!_0x11238a)continue;const _0x2d6649=_0x11238a['note'];_0x2d6649[_0x28530e(0x18e)](_0x3561d0)&&(_0xc39a16+=Number(RegExp['$1']));}return Math['min'](_0xc39a16,Game_BattlerBase['BTB_MAX_BRAVEPOINTS_HARD_CAP']);},Game_BattlerBase[_0x5fdf60(0x1a4)]['minBravePoints']=function(){const _0x269f9d=_0x5fdf60,_0x4413ca=VisuMZ[_0x269f9d(0x112)][_0x269f9d(0x253)],_0xc5acab=_0x4413ca[_0x269f9d(0x16b)];let _0x31de1f=Game_BattlerBase['BTB_MIN_BRAVEPOINTS_DEFAULT'];const _0x47be88=this[_0x269f9d(0x127)]();for(const _0x2377cd of _0x47be88){if(!_0x2377cd)continue;const _0xfbe72d=_0x2377cd[_0x269f9d(0x1e0)];_0xfbe72d[_0x269f9d(0x18e)](_0xc5acab)&&(_0x31de1f+=Number(RegExp['$1']));}return Math['max'](_0x31de1f,Game_BattlerBase[_0x269f9d(0x159)]);},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x1b6)]=function(_0x345f46){const _0x3b34a7=_0x5fdf60;this[_0x3b34a7(0x20b)]=Math[_0x3b34a7(0x165)](_0x345f46,this[_0x3b34a7(0x221)]()),this[_0x3b34a7(0x146)]();},Game_BattlerBase['prototype']['gainBravePoints']=function(_0x364316){const _0x298744=_0x5fdf60;_0x364316+=this[_0x298744(0x20b)]||0x0,this[_0x298744(0x1b6)](_0x364316);},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x29d)]=function(_0x34b3d3){const _0x2b15b6=_0x5fdf60;this[_0x2b15b6(0x260)](-_0x34b3d3);},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x2b3)]=function(_0x52d04a){const _0x3fe645=_0x5fdf60,_0x2c5f43=VisuMZ[_0x3fe645(0x112)][_0x3fe645(0x103)][_0x3fe645(0x1c9)];if(!_0x52d04a)return _0x2c5f43[_0x3fe645(0x27b)];if(DataManager[_0x3fe645(0x18f)](_0x52d04a)){if(_0x52d04a['id']===this[_0x3fe645(0x194)]())return 0x0;if(this['currentAction']()&&this[_0x3fe645(0x1fc)]()[_0x3fe645(0x1a3)]()===_0x52d04a&&this[_0x3fe645(0x1fc)]()[_0x3fe645(0x2c2)])return 0x0;}const _0x3b76e4=VisuMZ[_0x3fe645(0x112)][_0x3fe645(0x253)],_0xda8f6=_0x52d04a[_0x3fe645(0x1e0)];if(_0xda8f6[_0x3fe645(0x18e)](_0x3b76e4[_0x3fe645(0xd6)]))return Number(RegExp['$1']);let _0xda2448=0x0;if(DataManager[_0x3fe645(0x18f)](_0x52d04a))_0xda2448=_0x2c5f43[_0x3fe645(0xec)];else DataManager[_0x3fe645(0xce)](_0x52d04a)&&(_0xda2448=_0x2c5f43['BravePointItemCost']);return _0xda2448[_0x3fe645(0x14a)](0x0,Game_BattlerBase[_0x3fe645(0x19f)]);},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x109)]=Game_BattlerBase[_0x5fdf60(0x1a4)]['canUse'],Game_BattlerBase['prototype'][_0x5fdf60(0x2bd)]=function(_0x535990){const _0x2e2c43=_0x5fdf60;if(_0x535990&&SceneManager[_0x2e2c43(0x2f7)]()&&BattleManager[_0x2e2c43(0x1d1)]()){const _0x45049a=this[_0x2e2c43(0x2b3)](_0x535990);if(this[_0x2e2c43(0x2e2)]()-_0x45049a<this['minBravePoints']())return![];}return VisuMZ['BattleSystemBTB'][_0x2e2c43(0x109)][_0x2e2c43(0x14d)](this,_0x535990);},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0xee)]=function(_0x492125){const _0x3efc2e=_0x5fdf60;if(!BattleManager['isBTB']())return;const _0xb55f5d=this[_0x3efc2e(0x2b3)](_0x492125);this[_0x3efc2e(0x29d)](_0xb55f5d);},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0xf5)]=Game_Battler['prototype'][_0x5fdf60(0x316)],Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x316)]=function(_0x5431c2){const _0x486d53=_0x5fdf60;if(this[_0x486d53(0x2e6)](_0x5431c2)){this[_0x486d53(0x262)](_0x5431c2);return;}VisuMZ[_0x486d53(0x112)][_0x486d53(0xf5)][_0x486d53(0x14d)](this,_0x5431c2),this[_0x486d53(0xee)](_0x5431c2);},Game_Battler['prototype']['btbMatchesCurrentFusionAction']=function(_0x3ceddb){const _0x39a5a4=_0x5fdf60;if(!BattleManager[_0x39a5a4(0x1d1)]())return![];if(!SceneManager[_0x39a5a4(0x2f7)]())return![];if(!this[_0x39a5a4(0xdc)]())return![];if(this!==BattleManager[_0x39a5a4(0x2cf)])return![];if(!this[_0x39a5a4(0x1fc)]())return![];if(!this[_0x39a5a4(0x1fc)]()[_0x39a5a4(0x1a3)]())return![];if(this[_0x39a5a4(0x1fc)]()['item']()!==_0x3ceddb)return![];if(this[_0x39a5a4(0x1fc)]()['isSkill']())return this[_0x39a5a4(0x1fc)]()[_0x39a5a4(0x24c)]()[_0x39a5a4(0x26b)]>0x0;else return this[_0x39a5a4(0x1fc)]()[_0x39a5a4(0xce)]()?this['currentAction']()[_0x39a5a4(0x172)]()[_0x39a5a4(0x26b)]>0x0:![];},Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x262)]=function(_0x11bb9c){const _0x1ec10=_0x5fdf60;if(!SceneManager[_0x1ec10(0x2f7)]())return;DataManager[_0x1ec10(0x18f)](_0x11bb9c)?this[_0x1ec10(0x22e)]():this[_0x1ec10(0x16a)]();},Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x22e)]=function(){const _0x58cf37=_0x5fdf60,_0x453534=this[_0x58cf37(0x1fc)]()['getActionFusionRecipeSkills']();if(!_0x453534)return;for(const _0xfca86e of _0x453534){if(!_0xfca86e)continue;if(!this['canUse'](_0xfca86e))return![];VisuMZ[_0x58cf37(0x112)]['Game_Battler_useItem'][_0x58cf37(0x14d)](this,_0xfca86e),this['payBravePointsCost'](_0xfca86e);}return!![];},Game_Battler['prototype'][_0x5fdf60(0x16a)]=function(){const _0x28d8e3=_0x5fdf60,_0x2610b1=this['currentAction']()[_0x28d8e3(0x172)]();if(!_0x2610b1)return;for(const _0x44cc49 of _0x2610b1){if(!_0x44cc49)continue;if(!this[_0x28d8e3(0x2bd)](_0x44cc49))return![];this[_0x28d8e3(0xee)](_0x44cc49);}return!![];},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x301)]=function(){const _0xc94d0a=_0x5fdf60,_0x51662e=this[_0xc94d0a(0x2e2)]()-this[_0xc94d0a(0x279)]()+this[_0xc94d0a(0x102)]();return _0x51662e['clamp'](Game_BattlerBase[_0xc94d0a(0x159)],this[_0xc94d0a(0x221)]());},Game_BattlerBase['prototype'][_0x5fdf60(0x279)]=function(){const _0x188ad6=_0x5fdf60;let _0x10f89a=0x0;for(const _0x36e785 of this[_0x188ad6(0x130)]){if(!_0x36e785)continue;const _0x2ea76b=_0x36e785[_0x188ad6(0x1a3)]();_0x10f89a+=this[_0x188ad6(0x2b3)](_0x2ea76b);}return _0x10f89a;},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0xd5)]=Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x111)],Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x111)]=function(){const _0x206d2f=_0x5fdf60;return BattleManager[_0x206d2f(0x1d1)]()&&this[_0x206d2f(0x2e2)]()<0x0?![]:VisuMZ[_0x206d2f(0x112)][_0x206d2f(0xd5)][_0x206d2f(0x14d)](this);},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x21a)]=Game_BattlerBase['prototype'][_0x5fdf60(0x18d)],Game_BattlerBase[_0x5fdf60(0x1a4)]['canGuard']=function(){const _0x5d20dc=_0x5fdf60;return BattleManager[_0x5d20dc(0x1d1)]()&&this[_0x5d20dc(0x217)]()>0x1?![]:VisuMZ[_0x5d20dc(0x112)][_0x5d20dc(0x21a)][_0x5d20dc(0x14d)](this);},Game_BattlerBase['prototype'][_0x5fdf60(0x286)]=function(){const _0x19d339=_0x5fdf60;if(this[_0x19d339(0x1fb)]())return![];return this['numActions']()<this['maxBraveActions']()&&this[_0x19d339(0x20b)]>this[_0x19d339(0x17c)]();},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x1fb)]=function(){const _0x20ef06=_0x5fdf60,_0x5f51b8=VisuMZ[_0x20ef06(0x112)][_0x20ef06(0x253)],_0x15c69a=_0x5f51b8[_0x20ef06(0x228)];return this[_0x20ef06(0x127)]()[_0x20ef06(0x18c)](_0xec670c=>_0xec670c&&_0xec670c[_0x20ef06(0x1e0)][_0x20ef06(0x18e)](_0x15c69a));},Game_BattlerBase[_0x5fdf60(0x1a4)]['hideBraveTrait']=function(){const _0x12efef=_0x5fdf60,_0x3973b0=VisuMZ['BattleSystemBTB'][_0x12efef(0x253)],_0x4e0612=_0x3973b0['HideBrave'];return this[_0x12efef(0x127)]()['some'](_0x103985=>_0x103985&&_0x103985[_0x12efef(0x1e0)]['match'](_0x4e0612));},Game_BattlerBase[_0x5fdf60(0x1a4)]['clearTurnOrderBTBGraphics']=function(){const _0x533e43=_0x5fdf60;delete this['_btbTurnOrderGraphicType'],delete this[_0x533e43(0x20e)],delete this['_btbTurnOrderFaceIndex'],delete this['_btbTurnOrderIconIndex'];},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x1a8)]=function(){const _0x12e05c=_0x5fdf60;return this[_0x12e05c(0x1f7)]===undefined&&(this[_0x12e05c(0x1f7)]=this[_0x12e05c(0x1c4)]()),this[_0x12e05c(0x1f7)];},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x1c4)]=function(){const _0x452f7d=_0x5fdf60;return Window_BTB_TurnOrder['Settings'][_0x452f7d(0x265)];},Game_BattlerBase['prototype'][_0x5fdf60(0xdb)]=function(){const _0x2d757f=_0x5fdf60;return this[_0x2d757f(0x20e)]===undefined&&(this[_0x2d757f(0x20e)]=this[_0x2d757f(0x115)]()),this[_0x2d757f(0x20e)];},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x115)]=function(){const _0x8bfca8=_0x5fdf60;return Window_BTB_TurnOrder[_0x8bfca8(0x103)][_0x8bfca8(0xcf)];},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0xdf)]=function(){const _0xb99004=_0x5fdf60;return this[_0xb99004(0x197)]===undefined&&(this[_0xb99004(0x197)]=this[_0xb99004(0x300)]()),this[_0xb99004(0x197)];},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x300)]=function(){const _0x180b36=_0x5fdf60;return Window_BTB_TurnOrder['Settings'][_0x180b36(0x2a3)];},Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x319)]=function(){const _0x1db007=_0x5fdf60;return this[_0x1db007(0x1e6)]===undefined&&(this[_0x1db007(0x1e6)]=this['createTurnOrderBTBGraphicIconIndex']()),this[_0x1db007(0x1e6)];},Game_BattlerBase[_0x5fdf60(0x1a4)]['createTurnOrderBTBGraphicIconIndex']=function(){const _0x246725=_0x5fdf60;return Window_BTB_TurnOrder[_0x246725(0x103)][_0x246725(0x1c2)];},Game_BattlerBase['prototype'][_0x5fdf60(0x213)]=function(_0x19532e){const _0x47ae7b=_0x5fdf60;this[_0x47ae7b(0x1e6)]=_0x19532e;},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x277)]=Game_BattlerBase[_0x5fdf60(0x1a4)][_0x5fdf60(0xf8)],Game_BattlerBase[_0x5fdf60(0x1a4)]['hide']=function(){const _0x3df01e=_0x5fdf60;VisuMZ[_0x3df01e(0x112)][_0x3df01e(0x277)][_0x3df01e(0x14d)](this),BattleManager['removeActionBattlersBTB']();},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x1cb)]=Game_BattlerBase['prototype'][_0x5fdf60(0xf9)],Game_BattlerBase['prototype'][_0x5fdf60(0xf9)]=function(){const _0x3534e=_0x5fdf60;VisuMZ['BattleSystemBTB'][_0x3534e(0x1cb)][_0x3534e(0x14d)](this),BattleManager['removeActionBattlersBTB']();},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x285)]=Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x202)],Game_Battler['prototype'][_0x5fdf60(0x202)]=function(){const _0x2e18be=_0x5fdf60;VisuMZ[_0x2e18be(0x112)][_0x2e18be(0x285)][_0x2e18be(0x14d)](this),BattleManager[_0x2e18be(0x23b)]();},VisuMZ[_0x5fdf60(0x112)]['Game_Battler_makeActionTimes']=Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x14f)],Game_Battler['prototype'][_0x5fdf60(0x14f)]=function(){const _0x43ae71=_0x5fdf60;return BattleManager[_0x43ae71(0x1d1)]()?0x1:VisuMZ['BattleSystemBTB']['Game_Battler_makeActionTimes'][_0x43ae71(0x14d)](this);},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x17b)]=Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x1a9)],Game_Battler['prototype'][_0x5fdf60(0x1a9)]=function(_0x34e7b8){const _0x1e2958=_0x5fdf60;VisuMZ['BattleSystemBTB'][_0x1e2958(0x17b)]['call'](this,_0x34e7b8),this[_0x1e2958(0x1e2)](_0x34e7b8);},Game_Battler[_0x5fdf60(0x1a4)]['onBattleStartBTB']=function(_0x28f570){const _0x3e6da4=_0x5fdf60;if(!BattleManager[_0x3e6da4(0x1d1)]())return;const _0x715ae9=VisuMZ[_0x3e6da4(0x112)][_0x3e6da4(0x103)][_0x3e6da4(0x1c9)],_0xccc812=VisuMZ[_0x3e6da4(0x112)][_0x3e6da4(0x253)];let _0xa93474=_0x28f570?_0x715ae9[_0x3e6da4(0x126)]:_0x715ae9[_0x3e6da4(0x16d)];const _0x743b=this[_0x3e6da4(0x127)]();for(const _0x460c18 of _0x743b){if(!_0x460c18)continue;const _0x29aeac=_0x460c18[_0x3e6da4(0x1e0)];_0x29aeac[_0x3e6da4(0x18e)](_0xccc812[_0x3e6da4(0x2e1)])&&(_0xa93474+=Number(RegExp['$1']));}this[_0x3e6da4(0x1b6)](_0xa93474);},Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x224)]=function(){const _0x53f153=_0x5fdf60;this[_0x53f153(0x130)][_0x53f153(0x15f)](new Game_Action(this));const _0x167db0=VisuMZ[_0x53f153(0x112)][_0x53f153(0x103)][_0x53f153(0xfc)];if(_0x167db0[_0x53f153(0x2c4)]){const _0x1e8e03=_0x53f153(0x209),_0x8d93ef=_0x167db0[_0x53f153(0x171)[_0x53f153(0xd4)](_0x1e8e03)],_0xa8423d=_0x167db0['%1Mirror'[_0x53f153(0xd4)](_0x1e8e03)],_0xa8ffb5=_0x167db0[_0x53f153(0x229)[_0x53f153(0xd4)](_0x1e8e03)];$gameTemp[_0x53f153(0x1f0)]([this],_0x8d93ef,_0xa8423d,_0xa8ffb5);}},Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x250)]=function(){const _0x1a53ec=_0x5fdf60;if(this[_0x1a53ec(0x130)]['length']<=0x1)return;this[_0x1a53ec(0x130)][_0x1a53ec(0x216)]();const _0x143322=VisuMZ[_0x1a53ec(0x112)]['Settings'][_0x1a53ec(0xfc)];if(_0x143322[_0x1a53ec(0x1b0)]){const _0x497fdc='Cancel',_0x2a1482=_0x143322[_0x1a53ec(0x171)[_0x1a53ec(0xd4)](_0x497fdc)],_0x2ec91e=_0x143322[_0x1a53ec(0x241)[_0x1a53ec(0xd4)](_0x497fdc)],_0x2eca7f=_0x143322[_0x1a53ec(0x229)[_0x1a53ec(0xd4)](_0x497fdc)];$gameTemp[_0x1a53ec(0x1f0)]([this],_0x2a1482,_0x2ec91e,_0x2eca7f);}},VisuMZ[_0x5fdf60(0x112)]['Game_Battler_onTurnEnd']=Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x17e)],Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x17e)]=function(){const _0x45cc1a=_0x5fdf60;VisuMZ[_0x45cc1a(0x112)][_0x45cc1a(0x245)]['call'](this),this[_0x45cc1a(0x148)]();},Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x148)]=function(){const _0x4ecf41=_0x5fdf60;if(!BattleManager[_0x4ecf41(0x1d1)]())return;if(!$gameParty['inBattle']())return;this[_0x4ecf41(0x186)]();},Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x186)]=function(){const _0x2e1361=_0x5fdf60,_0x2146d4=VisuMZ[_0x2e1361(0x112)]['Settings'][_0x2e1361(0x1c9)],_0x1c7ebd=_0x2146d4['BravePointsRegenAlive'];if(_0x1c7ebd&&!this[_0x2e1361(0x29c)]())return;const _0x189adf=this['calcRegenBravePoints']();this[_0x2e1361(0x260)](_0x189adf);},Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x102)]=function(){const _0x2acc08=_0x5fdf60,_0x3177f3=VisuMZ[_0x2acc08(0x112)]['RegExp'],_0x4b1b7d=VisuMZ[_0x2acc08(0x112)][_0x2acc08(0x103)]['Mechanics'];let _0x1deba2=_0x4b1b7d[_0x2acc08(0x1ff)]||0x0;const _0x1d69fd=this[_0x2acc08(0x127)]();for(const _0x590a86 of _0x1d69fd){if(!_0x590a86)continue;const _0x2e5cf7=_0x590a86[_0x2acc08(0x1e0)];_0x2e5cf7[_0x2acc08(0x18e)](_0x3177f3[_0x2acc08(0x1c8)])&&(_0x1deba2+=Number(RegExp['$1']));}return _0x1deba2;},Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x2d1)]=function(){const _0x572c33=_0x5fdf60;if(!this[_0x572c33(0x2fb)]())return;if(this[_0x572c33(0x217)]()<=0x1)return;if(!this[_0x572c33(0x1fc)]())return;if(!this['currentAction']()[_0x572c33(0x1a3)]())return;const _0x12bb2a=this[_0x572c33(0x252)]();if(_0x12bb2a[_0x572c33(0x26b)]<=0x0)return;let _0x1f534c='',_0xfb8e5d=0x0;const _0x2d5cc2=this[_0x572c33(0x1fc)]()[_0x572c33(0x18f)](),_0x56bacc=_0x2d5cc2?DataManager['_btbSkillFlexFusion']:DataManager[_0x572c33(0x19e)],_0x211d5e=_0x2d5cc2?DataManager[_0x572c33(0x2b0)]:DataManager[_0x572c33(0x11c)];for(const _0x585bb8 of _0x12bb2a){if(!_0x585bb8)continue;_0x56bacc[_0x585bb8]&&_0x56bacc[_0x585bb8]>=_0xfb8e5d&&(this[_0x572c33(0x1c6)](_0x585bb8)&&(_0x1f534c=_0x585bb8,_0xfb8e5d=_0x56bacc[_0x585bb8])),_0x211d5e[_0x585bb8]&&_0x211d5e[_0x585bb8]>=_0xfb8e5d&&(this[_0x572c33(0x1c6)](_0x585bb8)&&(_0x1f534c=_0x585bb8,_0xfb8e5d=_0x56bacc[_0x585bb8]));}if(_0xfb8e5d<=0x0)return;this[_0x572c33(0x273)](_0x1f534c),this[_0x572c33(0x1fc)]()['setActionFusionBTB'](_0x1f534c),_0x2d5cc2?this[_0x572c33(0x1fc)]()['setSkill'](_0xfb8e5d):this[_0x572c33(0x1fc)]()['setItem'](_0xfb8e5d);},Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x2fb)]=function(){const _0x46e27e=_0x5fdf60;if(this[_0x46e27e(0x28d)]())return![];const _0x45489f=VisuMZ['BattleSystemBTB'][_0x46e27e(0x103)][_0x46e27e(0x1c9)];if(this['isActor']()){if(_0x45489f[_0x46e27e(0x235)]===undefined)return!![];return _0x45489f[_0x46e27e(0x235)];}else{if(_0x45489f[_0x46e27e(0x16f)]===undefined)return!![];return _0x45489f[_0x46e27e(0x16f)];}},Game_BattlerBase['prototype'][_0x5fdf60(0x28d)]=function(){const _0x238e36=_0x5fdf60,_0x579092=VisuMZ[_0x238e36(0x112)][_0x238e36(0x253)],_0x3e3779=this[_0x238e36(0x127)]();for(const _0x3a3a8e of _0x3e3779){if(!_0x3a3a8e)continue;const _0x5cb972=_0x3a3a8e['note'];if(_0x5cb972['match'](_0x579092[_0x238e36(0x1c0)]))return!![];if(_0x5cb972[_0x238e36(0x18e)](_0x579092[_0x238e36(0x132)]))return![];}return![];},Game_Battler[_0x5fdf60(0x1a4)]['getActionFusionCombinationsBTB']=function(){const _0x1b8457=_0x5fdf60,_0x37b54c=this[_0x1b8457(0x1fc)](),_0x123ab8=this['_actions'],_0x5b7c3a=_0x123ab8[_0x1b8457(0xfe)](_0x4d419f=>this['canActionFusionWithBTB'](_0x37b54c,_0x4d419f)),_0x28d9e8=_0x5b7c3a['map'](_0x3fa864=>_0x3fa864[_0x1b8457(0x1a3)]()['id']),_0x54ff9e=VisuMZ[_0x1b8457(0x112)][_0x1b8457(0x173)](_0x37b54c[_0x1b8457(0x1a3)]()['id'],_0x28d9e8);let _0x159ca6=String(_0x37b54c[_0x1b8457(0x1a3)]()['id']);for(let _0xbb9915=0x1;_0xbb9915<_0x123ab8[_0x1b8457(0x26b)];_0xbb9915++){const _0xe57f13=_0x123ab8[_0xbb9915];if(this[_0x1b8457(0x131)](_0x37b54c,_0xe57f13))_0x159ca6=_0x1b8457(0x162)['format'](_0x159ca6,_0xe57f13[_0x1b8457(0x1a3)]()['id']),_0x54ff9e[_0x1b8457(0x15f)](_0x159ca6);else break;}return _0x54ff9e[_0x1b8457(0xfe)]((_0x20ab8d,_0x244b30,_0x67d4bf)=>_0x67d4bf[_0x1b8457(0x174)](_0x20ab8d)===_0x244b30);},VisuMZ['BattleSystemBTB'][_0x5fdf60(0x173)]=function(_0x98aa6d,_0x2f6c08){const _0x54d2a2=[],_0x2cbb79=function(_0x5d7523,_0x374246){const _0x22e5a6=_0x1bde;for(var _0x3c3e67=0x0;_0x3c3e67<_0x374246['length'];_0x3c3e67++){_0x54d2a2[_0x22e5a6(0x15f)](_0x5d7523+'-'+_0x374246[_0x3c3e67]),_0x2cbb79(_0x5d7523+'-'+_0x374246[_0x3c3e67],_0x374246[_0x22e5a6(0x30c)](_0x3c3e67+0x1));}};return _0x2cbb79(_0x98aa6d,_0x2f6c08),_0x54d2a2;},Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x131)]=function(_0x41a889,_0x1c8941){const _0x4037d5=_0x5fdf60;if(!_0x41a889||!_0x1c8941)return![];if(_0x41a889===_0x1c8941)return![];if(!_0x41a889[_0x4037d5(0x1a3)]()||!_0x1c8941[_0x4037d5(0x1a3)]())return![];if(_0x41a889[_0x4037d5(0x18f)]()!==_0x1c8941[_0x4037d5(0x18f)]())return![];return!![];},Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x1c6)]=function(_0x53d6e5){const _0x2f992f=_0x5fdf60,_0x2d2631=this['currentAction']()[_0x2f992f(0x18f)](),_0x416d26=JsonEx['makeDeepCopy'](this);_0x416d26['_tempBattler']=!![],_0x416d26[_0x2f992f(0x1fc)]()[_0x2f992f(0x116)](_0x53d6e5);const _0x2532e2=JsonEx[_0x2f992f(0x1f5)]($gameParty[_0x2f992f(0x15c)]),_0x5ba6e8=JsonEx['makeDeepCopy']($gameParty[_0x2f992f(0xda)]),_0x160995=JsonEx[_0x2f992f(0x1f5)]($gameParty[_0x2f992f(0x11a)]);let _0x3cb34c=_0x2d2631?_0x416d26[_0x2f992f(0x22e)]():_0x416d26['btbPayItemFusionCosts']();return $gameParty[_0x2f992f(0x15c)]=_0x2532e2,$gameParty['_weapons']=_0x5ba6e8,$gameParty[_0x2f992f(0x11a)]=_0x160995,_0x3cb34c;},Game_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x273)]=function(_0x42f7e9){const _0x3b7160=_0x5fdf60,_0x1f9505=this[_0x3b7160(0x1fc)](),_0x53f1a6=_0x42f7e9[_0x3b7160(0x12f)]('-')[_0x3b7160(0x114)](_0x17cd4c=>Number(_0x17cd4c));_0x53f1a6[_0x3b7160(0x284)]();const _0x17ca0d=this[_0x3b7160(0x130)],_0x5ee5d6=[];for(const _0x4ce2de of _0x17ca0d){this[_0x3b7160(0x131)](_0x1f9505,_0x4ce2de)&&(_0x53f1a6[_0x3b7160(0xd2)](_0x4ce2de[_0x3b7160(0x1a3)]()['id'])&&(_0x5ee5d6[_0x3b7160(0x15f)](_0x4ce2de),_0x53f1a6[_0x3b7160(0x101)](_0x53f1a6['indexOf'](_0x4ce2de[_0x3b7160(0x1a3)]()['id']),0x1)));}for(const _0x54d3ad of _0x5ee5d6){_0x17ca0d[_0x3b7160(0x1f2)](_0x54d3ad);}},Game_Actor[_0x5fdf60(0x1a4)]['setBravePoints']=function(_0x7360c9){const _0x2b3795=_0x5fdf60;Game_Battler[_0x2b3795(0x1a4)][_0x2b3795(0x1b6)]['call'](this,_0x7360c9);if(!SceneManager['isSceneBattle']())return;if(!BattleManager[_0x2b3795(0xe4)]()[_0x2b3795(0xd2)](this))return;BattleManager[_0x2b3795(0xf2)]();},VisuMZ['BattleSystemBTB'][_0x5fdf60(0x315)]=Game_Actor[_0x5fdf60(0x1a4)][_0x5fdf60(0x219)],Game_Actor[_0x5fdf60(0x1a4)][_0x5fdf60(0x219)]=function(){const _0x5e1876=_0x5fdf60;VisuMZ[_0x5e1876(0x112)][_0x5e1876(0x315)][_0x5e1876(0x14d)](this),BattleManager[_0x5e1876(0x1d1)]()&&this[_0x5e1876(0x2e2)]()<0x0&&this[_0x5e1876(0x2d5)]();},Game_Actor[_0x5fdf60(0x1a4)][_0x5fdf60(0x1c4)]=function(){const _0x4da579=_0x5fdf60,_0xf276a9=this[_0x4da579(0xf4)]()[_0x4da579(0x1e0)];if(_0xf276a9[_0x4da579(0x18e)](/<BTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x4da579(0x142);else{if(_0xf276a9['match'](/<BTB TURN ORDER ICON:[ ](\d+)>/i))return _0x4da579(0x1d8);}return Window_BTB_TurnOrder['Settings'][_0x4da579(0x249)];},Game_Actor[_0x5fdf60(0x1a4)][_0x5fdf60(0x115)]=function(){const _0x10ee73=_0x5fdf60,_0x5624d6=this[_0x10ee73(0xf4)]()[_0x10ee73(0x1e0)];if(_0x5624d6[_0x10ee73(0x18e)](/<BTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return this[_0x10ee73(0x1eb)]();},Game_Actor[_0x5fdf60(0x1a4)]['createTurnOrderBTBGraphicFaceIndex']=function(){const _0x42852c=_0x5fdf60,_0x18b864=this[_0x42852c(0xf4)]()[_0x42852c(0x1e0)];if(_0x18b864['match'](/<BTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this[_0x42852c(0x263)]();},Game_Actor[_0x5fdf60(0x1a4)][_0x5fdf60(0x2f4)]=function(){const _0x2c27ba=_0x5fdf60,_0x151ae4=this[_0x2c27ba(0xf4)]()[_0x2c27ba(0x1e0)];if(_0x151ae4[_0x2c27ba(0x18e)](/<BTB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_BTB_TurnOrder[_0x2c27ba(0x103)][_0x2c27ba(0x2d3)];},Game_Actor['prototype'][_0x5fdf60(0x131)]=function(_0x2b3d49,_0x4a0696){const _0x1a6003=_0x5fdf60;if(!Game_Battler[_0x1a6003(0x1a4)][_0x1a6003(0x131)]['call'](this,_0x2b3d49,_0x4a0696))return![];if(_0x2b3d49['needsSelection']()&&_0x4a0696['needsSelection']()){if(_0x2b3d49[_0x1a6003(0x254)]()!==_0x4a0696[_0x1a6003(0x254)]())return![];if(_0x2b3d49[_0x1a6003(0x28e)]!==_0x4a0696[_0x1a6003(0x28e)])return![];}return!![];},Game_Enemy[_0x5fdf60(0x1a4)]['createTurnOrderBTBGraphicType']=function(){const _0x259e36=_0x5fdf60,_0x3e3e91=this[_0x259e36(0x243)]()['note'];if(_0x3e3e91[_0x259e36(0x18e)](/<BTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x259e36(0x142);else{if(_0x3e3e91['match'](/<BTB TURN ORDER ICON:[ ](\d+)>/i))return _0x259e36(0x1d8);}return Window_BTB_TurnOrder[_0x259e36(0x103)][_0x259e36(0x265)];},Game_Enemy[_0x5fdf60(0x1a4)][_0x5fdf60(0x115)]=function(){const _0x3bbab2=_0x5fdf60,_0x4259e4=this['enemy']()[_0x3bbab2(0x1e0)];if(_0x4259e4[_0x3bbab2(0x18e)](/<BTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return Window_BTB_TurnOrder[_0x3bbab2(0x103)]['EnemyBattlerFaceName'];},Game_Enemy[_0x5fdf60(0x1a4)][_0x5fdf60(0x300)]=function(){const _0x2b80d1=_0x5fdf60,_0x448027=this[_0x2b80d1(0x243)]()[_0x2b80d1(0x1e0)];if(_0x448027['match'](/<BTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Window_BTB_TurnOrder[_0x2b80d1(0x103)][_0x2b80d1(0x2a3)];},Game_Enemy[_0x5fdf60(0x1a4)]['createTurnOrderBTBGraphicIconIndex']=function(){const _0x5615f8=_0x5fdf60,_0x22bc2c=this[_0x5615f8(0x243)]()[_0x5615f8(0x1e0)];if(_0x22bc2c['match'](/<BTB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_BTB_TurnOrder[_0x5615f8(0x103)][_0x5615f8(0x1c2)];},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x21c)]=Game_Enemy['prototype'][_0x5fdf60(0x219)],Game_Enemy[_0x5fdf60(0x1a4)][_0x5fdf60(0x219)]=function(){const _0x21aa95=_0x5fdf60;VisuMZ['BattleSystemBTB'][_0x21aa95(0x21c)][_0x21aa95(0x14d)](this),this[_0x21aa95(0x2d2)](),this[_0x21aa95(0x2dd)]();},Game_Enemy[_0x5fdf60(0x1a4)]['checkActionsBTB']=function(){const _0xd94616=_0x5fdf60;if(!BattleManager[_0xd94616(0x1d1)]())return;if(this['numActions']()<=0x0)return;this[_0xd94616(0x1d0)]=![],this[_0xd94616(0x2e2)]()<0x0&&this[_0xd94616(0x2d5)]();},Game_Enemy['prototype']['makeMultiActionsBTB']=function(){const _0x55ba52=_0x5fdf60;if(!BattleManager['isBTB']())return;if(this[_0x55ba52(0x217)]()<=0x0)return;const _0x37bd1e=this[_0x55ba52(0x130)][0x0];if(!_0x37bd1e)return;const _0x54b2e7=_0x37bd1e[_0x55ba52(0x1a3)]();if(!_0x54b2e7)return;const _0x44e03c=VisuMZ[_0x55ba52(0x112)][_0x55ba52(0x253)],_0x3b178d=_0x54b2e7['note'];let _0x12e4bc=[];if(_0x3b178d['match'](_0x44e03c[_0x55ba52(0x2dc)])){const _0x5333f9=String(RegExp['$1'])[_0x55ba52(0x12f)](',');for(let _0x180383 of _0x5333f9){_0x180383=(String(_0x180383)||'')['trim']();const _0x107a22=/^\d+$/['test'](_0x180383);_0x107a22?_0x12e4bc[_0x55ba52(0x15f)](Number(_0x180383)):_0x12e4bc['push'](DataManager[_0x55ba52(0x2a5)](_0x180383));}}if(_0x12e4bc[_0x55ba52(0x26b)]<=0x0)return;while(_0x12e4bc[_0x55ba52(0x26b)]>this[_0x55ba52(0x168)]()){_0x12e4bc[_0x55ba52(0x216)]();}if(_0x12e4bc[_0x55ba52(0x26b)]<=0x0)return;this[_0x55ba52(0x2d5)]();for(const _0x20b4ec of _0x12e4bc){const _0x57eeea=new Game_Action(this);_0x57eeea[_0x55ba52(0x2bf)](_0x20b4ec),_0x57eeea[_0x55ba52(0x122)]=!![],this[_0x55ba52(0x130)][_0x55ba52(0x15f)](_0x57eeea);}},Game_Enemy[_0x5fdf60(0x1a4)]['braveAnimationTimes']=function(){const _0x4cfcdd=_0x5fdf60;let _0x36e877=this[_0x4cfcdd(0x217)]();for(const _0x2a4991 of this[_0x4cfcdd(0x130)]){if(!_0x2a4991)continue;_0x36e877+=_0x2a4991[_0x4cfcdd(0x119)]();}return _0x36e877-0x1;},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x147)]=Game_Unit[_0x5fdf60(0x1a4)][_0x5fdf60(0x219)],Game_Unit[_0x5fdf60(0x1a4)][_0x5fdf60(0x219)]=function(){const _0x161144=_0x5fdf60;VisuMZ[_0x161144(0x112)][_0x161144(0x147)]['call'](this),BattleManager[_0x161144(0x1d1)]()&&this===$gameTroop&&SceneManager[_0x161144(0x2f7)]()&&BattleManager[_0x161144(0x2ba)]();},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x270)]=Game_Party['prototype'][_0x5fdf60(0xd3)],Game_Party[_0x5fdf60(0x1a4)][_0x5fdf60(0xd3)]=function(_0x4df2df){const _0x24dc70=_0x5fdf60;VisuMZ[_0x24dc70(0x112)][_0x24dc70(0x270)][_0x24dc70(0x14d)](this,_0x4df2df),SceneManager['isSceneBattle']()&&BattleManager['isBTB']()&&BattleManager['_actionBattlers']['remove']($gameActors['actor'](_0x4df2df));},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x2a9)]=Scene_Battle[_0x5fdf60(0x1a4)]['onDisabledPartyCommandSelection'],Scene_Battle[_0x5fdf60(0x1a4)][_0x5fdf60(0x2f9)]=function(){const _0x3cde1a=_0x5fdf60;BattleManager[_0x3cde1a(0x1d1)]()?this[_0x3cde1a(0x203)]():VisuMZ['BattleSystemBTB'][_0x3cde1a(0x2a9)]['call'](this);},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x25e)]=Scene_Battle[_0x5fdf60(0x1a4)][_0x5fdf60(0x1a0)],Scene_Battle[_0x5fdf60(0x1a4)][_0x5fdf60(0x1a0)]=function(){const _0x3398d3=_0x5fdf60;VisuMZ['BattleSystemBTB'][_0x3398d3(0x25e)][_0x3398d3(0x14d)](this),this[_0x3398d3(0x2db)]();},Scene_Battle[_0x5fdf60(0x1a4)][_0x5fdf60(0x2db)]=function(){const _0x2cf9cb=_0x5fdf60;if(!BattleManager[_0x2cf9cb(0x1d1)]())return;const _0x3e0fc3=this[_0x2cf9cb(0xe1)];if(!_0x3e0fc3)return;_0x3e0fc3['setHandler'](_0x2cf9cb(0x1e4),this[_0x2cf9cb(0x1cd)]['bind'](this)),_0x3e0fc3[_0x2cf9cb(0x269)](_0x2cf9cb(0x164),this[_0x2cf9cb(0x10e)][_0x2cf9cb(0x1ad)](this));},Scene_Battle[_0x5fdf60(0x1a4)]['commandBrave']=function(){const _0x4ada3b=_0x5fdf60;this[_0x4ada3b(0x224)]();},Scene_Battle[_0x5fdf60(0x1a4)][_0x5fdf60(0x10e)]=function(){const _0x570235=_0x5fdf60,_0x59e24d=BattleManager['actor']();if(!_0x59e24d)this[_0x570235(0x193)]();else{if(_0x59e24d[_0x570235(0x217)]()<=0x1)this['commandCancel']();else _0x59e24d[_0x570235(0x1ed)]>0x0?this['commandCancel']():this[_0x570235(0x14b)]();}},Scene_Battle[_0x5fdf60(0x1a4)][_0x5fdf60(0x224)]=function(){const _0x19012f=_0x5fdf60,_0x4d0619=BattleManager[_0x19012f(0xf4)]();if(!_0x4d0619)return;_0x4d0619[_0x19012f(0x224)]();const _0x1838f3=this['_actorCommandWindow']['_scrollX'],_0x58b6e7=this[_0x19012f(0xe1)][_0x19012f(0x175)],_0x2c2e9d=this[_0x19012f(0xe1)][_0x19012f(0x255)]();this['_actorCommandWindow'][_0x19012f(0x231)](_0x4d0619),this[_0x19012f(0xe1)]['select'](_0x2c2e9d),this[_0x19012f(0xe1)][_0x19012f(0x2ea)]=_0x1838f3,this[_0x19012f(0xe1)][_0x19012f(0x175)]=_0x58b6e7;},Scene_Battle[_0x5fdf60(0x1a4)][_0x5fdf60(0x14b)]=function(){const _0x42f094=_0x5fdf60,_0x4378df=BattleManager[_0x42f094(0xf4)]();if(!_0x4378df)return;_0x4378df[_0x42f094(0x250)]();const _0x482a80=this[_0x42f094(0xe1)][_0x42f094(0x2ea)],_0x1ab2a8=this[_0x42f094(0xe1)][_0x42f094(0x175)],_0x4d29d1=this[_0x42f094(0xe1)][_0x42f094(0x255)]();this[_0x42f094(0xe1)][_0x42f094(0x231)](_0x4378df),this[_0x42f094(0xe1)]['select'](_0x4d29d1),this[_0x42f094(0xe1)][_0x42f094(0x2ea)]=_0x482a80,this[_0x42f094(0xe1)][_0x42f094(0x175)]=_0x1ab2a8;},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0xc4)]=Scene_Battle[_0x5fdf60(0x1a4)][_0x5fdf60(0x30a)],Scene_Battle[_0x5fdf60(0x1a4)]['createAllWindows']=function(){VisuMZ['BattleSystemBTB']['Scene_Battle_createAllWindows']['call'](this),this['createBTBTurnOrderWindow']();},Scene_Battle[_0x5fdf60(0x1a4)]['createBTBTurnOrderWindow']=function(){const _0x3fbd8a=_0x5fdf60;if(!BattleManager['isBTB']())return;this['_btbTurnOrderWindow']=new Window_BTB_TurnOrder();const _0x11ce90=this[_0x3fbd8a(0x118)](this['_windowLayer']);this[_0x3fbd8a(0x135)](this['_btbTurnOrderWindow'],_0x11ce90),this[_0x3fbd8a(0x323)](),BattleManager[_0x3fbd8a(0x1de)](!![]);},Scene_Battle[_0x5fdf60(0x1a4)]['repositionLogWindowBTB']=function(){const _0x4bdcf0=_0x5fdf60,_0x5ccea1=Window_BTB_TurnOrder[_0x4bdcf0(0x103)];if(_0x5ccea1[_0x4bdcf0(0x160)]!==_0x4bdcf0(0x170))return;if(!_0x5ccea1[_0x4bdcf0(0x2d4)])return;if(!this[_0x4bdcf0(0x1f1)])return;const _0x3cd372=this[_0x4bdcf0(0x233)]['y']-Math[_0x4bdcf0(0x2ee)]((Graphics['height']-Graphics[_0x4bdcf0(0x1a7)])/0x2),_0x3676d0=_0x3cd372+this[_0x4bdcf0(0x233)]['height'];this[_0x4bdcf0(0x1f1)]['y']=_0x3676d0+_0x5ccea1[_0x4bdcf0(0x196)];};function Sprite_BTB_TurnOrder_Battler(){const _0x408cf6=_0x5fdf60;this[_0x408cf6(0x225)](...arguments);}Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)]=Object['create'](Sprite_Clickable[_0x5fdf60(0x1a4)]),Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x2f1)]=Sprite_BTB_TurnOrder_Battler,Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x225)]=function(_0x278053,_0x382cb1){const _0x19b59d=_0x5fdf60;this[_0x19b59d(0x138)](_0x278053,_0x382cb1),Sprite_Clickable[_0x19b59d(0x1a4)][_0x19b59d(0x225)]['call'](this),this[_0x19b59d(0x21d)]=0x0,this['createChildren'](),this['checkOpacity']();},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)]['initMembers']=function(_0x1f845d,_0xcdf643){const _0x3a3287=_0x5fdf60;this['_unit']=_0x1f845d,this[_0x3a3287(0x20d)]=_0xcdf643;const _0x51753f=Window_BTB_TurnOrder[_0x3a3287(0x103)],_0x5d8df9=this[_0x3a3287(0x10c)](),_0x6970f5=this[_0x3a3287(0x290)]();this[_0x3a3287(0x1b7)]=0x0,this[_0x3a3287(0x211)]=_0x5d8df9?_0x51753f[_0x3a3287(0x2a6)]*_0x6970f5:0x0,this[_0x3a3287(0xfa)]=_0x5d8df9?0x0:_0x51753f[_0x3a3287(0x2a6)]*_0x6970f5,this[_0x3a3287(0xf0)]=0x0,this[_0x3a3287(0x257)]=0xff,this['_isAlive']=![],this[_0x3a3287(0x205)]=![],this['_containerWidth']=0x0,this[_0x3a3287(0x1d7)]=0x0;},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x12e)]=function(){const _0x3dcb0a=_0x5fdf60;this[_0x3dcb0a(0x199)](),this[_0x3dcb0a(0x29b)](),this[_0x3dcb0a(0x236)](),this['createBorderSprite'](),this[_0x3dcb0a(0x1af)]();},Sprite_BTB_TurnOrder_Battler['prototype'][_0x5fdf60(0x199)]=function(){const _0x594abd=_0x5fdf60;this['x']=this[_0x594abd(0x211)],this['y']=this['_positionTargetY'];},Sprite_BTB_TurnOrder_Battler['prototype']['isHorz']=function(){const _0x421dfd=_0x5fdf60,_0x23fefb=Window_BTB_TurnOrder['Settings'],_0x19f2e4=[_0x421dfd(0x170),_0x421dfd(0x1d6)][_0x421dfd(0xd2)](_0x23fefb[_0x421dfd(0x160)]);return _0x19f2e4;},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x2a2)]=function(){const _0x417487=_0x5fdf60,_0x4a4b7e=Window_BTB_TurnOrder[_0x417487(0x103)];return this['isHorz']()?_0x4a4b7e[_0x417487(0x2a6)]:_0x4a4b7e[_0x417487(0x232)];},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x2c6)]=function(){const _0x567ef9=_0x5fdf60,_0x2e158e=Window_BTB_TurnOrder[_0x567ef9(0x103)];return this[_0x567ef9(0x10c)]()?_0x2e158e[_0x567ef9(0x232)]:_0x2e158e[_0x567ef9(0x2a6)];},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)]['createTestBitmap']=function(){const _0x46ce5c=_0x5fdf60;this[_0x46ce5c(0xd0)]=new Bitmap(0x48,0x24);const _0x490d68=this['battler']()?this[_0x46ce5c(0x226)]()[_0x46ce5c(0x1b8)]():_0x46ce5c(0x1fe)[_0x46ce5c(0xd4)](this[_0x46ce5c(0x251)],this[_0x46ce5c(0x20d)]);this['bitmap'][_0x46ce5c(0x2a4)](_0x490d68,0x0,0x0,0x48,0x24,_0x46ce5c(0x2a8));},Sprite_BTB_TurnOrder_Battler['prototype'][_0x5fdf60(0x29b)]=function(){const _0x3e0c0f=_0x5fdf60;if(!Window_BTB_TurnOrder[_0x3e0c0f(0x103)][_0x3e0c0f(0x2e0)])return;const _0x3111aa=Window_BTB_TurnOrder['Settings'],_0x38f765=this[_0x3e0c0f(0x251)]===$gameParty?'Actor':_0x3e0c0f(0x2a0),_0x5d1bab='%1SystemBg'[_0x3e0c0f(0xd4)](_0x38f765),_0x40d9a8=new Sprite();_0x40d9a8['anchor']['x']=this['anchor']['x'],_0x40d9a8[_0x3e0c0f(0x31f)]['y']=this['anchor']['y'];if(_0x3111aa[_0x5d1bab])_0x40d9a8['bitmap']=ImageManager[_0x3e0c0f(0x13f)](_0x3111aa[_0x5d1bab]);else{const _0x32bbf4=this['bitmapWidth'](),_0x5e06f7=this[_0x3e0c0f(0x2c6)]();_0x40d9a8[_0x3e0c0f(0xd0)]=new Bitmap(_0x32bbf4,_0x5e06f7);const _0x17d3c7=ColorManager[_0x3e0c0f(0xc8)](_0x3111aa['%1BgColor1'[_0x3e0c0f(0xd4)](_0x38f765)]),_0x33a9a2=ColorManager[_0x3e0c0f(0xc8)](_0x3111aa[_0x3e0c0f(0x237)[_0x3e0c0f(0xd4)](_0x38f765)]);_0x40d9a8[_0x3e0c0f(0xd0)][_0x3e0c0f(0x25f)](0x0,0x0,_0x32bbf4,_0x5e06f7,_0x17d3c7,_0x33a9a2,!![]);}this['_backgroundSprite']=_0x40d9a8,this[_0x3e0c0f(0x2ed)](this['_backgroundSprite']);},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x236)]=function(){const _0x1a5c75=_0x5fdf60,_0xea62a4=new Sprite();_0xea62a4[_0x1a5c75(0x31f)]['x']=this[_0x1a5c75(0x31f)]['x'],_0xea62a4[_0x1a5c75(0x31f)]['y']=this[_0x1a5c75(0x31f)]['y'],this['_graphicSprite']=_0xea62a4,this[_0x1a5c75(0x2ed)](this[_0x1a5c75(0x153)]),this[_0x1a5c75(0x12a)]();},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x242)]=function(){const _0x2c2001=_0x5fdf60;if(!Window_BTB_TurnOrder['Settings']['ShowMarkerBorder'])return;const _0x3ca0eb=Window_BTB_TurnOrder[_0x2c2001(0x103)],_0x3d8dd9=this[_0x2c2001(0x251)]===$gameParty?_0x2c2001(0x2df):_0x2c2001(0x2a0),_0x39b08f=_0x2c2001(0x2e9)['format'](_0x3d8dd9),_0xeeecbe=new Sprite();_0xeeecbe[_0x2c2001(0x31f)]['x']=this[_0x2c2001(0x31f)]['x'],_0xeeecbe[_0x2c2001(0x31f)]['y']=this[_0x2c2001(0x31f)]['y'];if(_0x3ca0eb[_0x39b08f])_0xeeecbe[_0x2c2001(0xd0)]=ImageManager[_0x2c2001(0x13f)](_0x3ca0eb[_0x39b08f]);else{let _0x3c9045=this['bitmapWidth'](),_0x1c4be5=this[_0x2c2001(0x2c6)](),_0x2652db=_0x3ca0eb[_0x2c2001(0x163)];_0xeeecbe[_0x2c2001(0xd0)]=new Bitmap(_0x3c9045,_0x1c4be5);const _0x195b86=_0x2c2001(0x13a),_0x239ba7=ColorManager[_0x2c2001(0xc8)](_0x3ca0eb[_0x2c2001(0x2c3)[_0x2c2001(0xd4)](_0x3d8dd9)]);_0xeeecbe['bitmap']['fillRect'](0x0,0x0,_0x3c9045,_0x1c4be5,_0x195b86),_0x3c9045-=0x2,_0x1c4be5-=0x2,_0xeeecbe[_0x2c2001(0xd0)][_0x2c2001(0xe8)](0x1,0x1,_0x3c9045,_0x1c4be5,_0x239ba7),_0x3c9045-=_0x2652db*0x2,_0x1c4be5-=_0x2652db*0x2,_0xeeecbe[_0x2c2001(0xd0)][_0x2c2001(0xe8)](0x1+_0x2652db,0x1+_0x2652db,_0x3c9045,_0x1c4be5,_0x195b86),_0x3c9045-=0x2,_0x1c4be5-=0x2,_0x2652db+=0x1,_0xeeecbe[_0x2c2001(0xd0)][_0x2c2001(0x304)](0x1+_0x2652db,0x1+_0x2652db,_0x3c9045,_0x1c4be5);}this[_0x2c2001(0x276)]=_0xeeecbe,this[_0x2c2001(0x2ed)](this[_0x2c2001(0x276)]),this['width']=this[_0x2c2001(0x276)]['width'],this[_0x2c2001(0x2d0)]=this[_0x2c2001(0x276)][_0x2c2001(0x2d0)];},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x1af)]=function(){const _0x2df603=_0x5fdf60,_0x21adef=Window_BTB_TurnOrder[_0x2df603(0x103)];if(!_0x21adef[_0x2df603(0x2de)])return;if(this['_unit']===$gameParty)return;const _0x67f65a=this[_0x2df603(0x2a2)](),_0x23ef78=this[_0x2df603(0x2c6)](),_0x3cde90=new Sprite();_0x3cde90[_0x2df603(0x31f)]['x']=this['anchor']['x'],_0x3cde90[_0x2df603(0x31f)]['y']=this[_0x2df603(0x31f)]['y'],_0x3cde90[_0x2df603(0xd0)]=new Bitmap(_0x67f65a,_0x23ef78),this[_0x2df603(0x1e3)]=_0x3cde90,this[_0x2df603(0x2ed)](this[_0x2df603(0x1e3)]);},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x226)]=function(){const _0x1f92a3=_0x5fdf60;return this[_0x1f92a3(0x251)]?this[_0x1f92a3(0x251)][_0x1f92a3(0x1f6)]()[this[_0x1f92a3(0x20d)]]:null;},Sprite_BTB_TurnOrder_Battler['prototype'][_0x5fdf60(0x2e5)]=function(){const _0x203f89=_0x5fdf60;Sprite_Clickable[_0x203f89(0x1a4)][_0x203f89(0x2e5)][_0x203f89(0x14d)](this),this[_0x203f89(0x222)](),this[_0x203f89(0x189)](),this[_0x203f89(0x200)](),this['updateOpacity'](),this[_0x203f89(0x274)](),this[_0x203f89(0x2ca)](),this[_0x203f89(0x31d)](),this[_0x203f89(0x2eb)]();},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x222)]=function(){const _0x4632a2=_0x5fdf60,_0x498341=this[_0x4632a2(0x1b4)]();if(this[_0x4632a2(0x106)]===_0x498341)return;this['_position']=_0x498341;this[_0x4632a2(0x21d)]<0xff&&this[_0x4632a2(0x226)]()&&_0x498341!==this[_0x4632a2(0x290)]()&&this[_0x4632a2(0x1d4)](0xff);if(_0x498341===this['defaultPosition']()&&this[_0x4632a2(0xf0)]<=0x0&&this['opacity']>0x0)this['startFade'](0x0);else this[_0x4632a2(0xf0)]<=0x0&&this[_0x4632a2(0x21d)]<0xff&&this[_0x4632a2(0x200)]();this[_0x4632a2(0x2c0)]();},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x29f)]=function(){const _0x2e5500=_0x5fdf60,_0x1bfe18=this['containerWindow']();if(!_0x1bfe18)return;let _0x35578d=![];if(this[_0x2e5500(0xea)]!==_0x1bfe18[_0x2e5500(0xe7)])_0x35578d=!![];else this['_containerHeight']!==_0x1bfe18[_0x2e5500(0x2d0)]&&(_0x35578d=!![]);_0x35578d&&this['calculateTargetPositions']();},Sprite_BTB_TurnOrder_Battler['prototype'][_0x5fdf60(0x2c0)]=function(){const _0x525e33=_0x5fdf60,_0x3268b7=Window_BTB_TurnOrder[_0x525e33(0x103)],_0x3a6909=this[_0x525e33(0x10c)](),_0x1cbe32=_0x3268b7[_0x525e33(0x15e)],_0x2ae040=_0x3268b7[_0x525e33(0x2c5)],_0x101d1f=SceneManager[_0x525e33(0xcb)]['_btbTurnOrderWindow'];if(!_0x101d1f)return;const _0x27939a=this['containerPosition']();this[_0x525e33(0x1b7)]=_0x3268b7['UpdateFrames'],this[_0x525e33(0x211)]=_0x3a6909?_0x3268b7['SpriteThin']*_0x27939a:0x0,this[_0x525e33(0xfa)]=_0x3a6909?0x0:_0x3268b7[_0x525e33(0x2a6)]*_0x27939a,_0x27939a>0x0&&(this['_positionTargetX']+=_0x3a6909?_0x2ae040:0x0,this['_positionTargetY']+=_0x3a6909?0x0:_0x2ae040),_0x1cbe32?this['_positionTargetX']=_0x3a6909?_0x101d1f[_0x525e33(0xe7)]-this[_0x525e33(0x211)]-_0x3268b7[_0x525e33(0x2a6)]:0x0:this['_positionTargetY']=_0x3a6909?0x0:_0x101d1f['height']-this['_positionTargetY']-_0x3268b7[_0x525e33(0x2a6)];},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x189)]=function(){const _0xf9fecf=_0x5fdf60;if(this[_0xf9fecf(0xf0)]>0x0)return;if(this[_0xf9fecf(0x1b7)]>0x0){const _0x472a9a=this[_0xf9fecf(0x1b7)];this['x']=(this['x']*(_0x472a9a-0x1)+this[_0xf9fecf(0x211)])/_0x472a9a,this['y']=(this['y']*(_0x472a9a-0x1)+this['_positionTargetY'])/_0x472a9a,this[_0xf9fecf(0x1b7)]--;}if(this[_0xf9fecf(0x1b7)]<=0x0){this['x']=this[_0xf9fecf(0x211)],this['y']=this[_0xf9fecf(0xfa)];if(this[_0xf9fecf(0x21d)]<0xff&&!this[_0xf9fecf(0x182)]&&this[_0xf9fecf(0xf0)]<=0x0){const _0x436e90=this[_0xf9fecf(0x226)]();_0x436e90&&(this[_0xf9fecf(0x257)]=_0x436e90[_0xf9fecf(0x29c)]()&&_0x436e90[_0xf9fecf(0x10b)]()?0xff:0x0);}}},Sprite_BTB_TurnOrder_Battler['prototype'][_0x5fdf60(0x290)]=function(){const _0x3cebf2=_0x5fdf60,_0x52c00a=Window_BTB_TurnOrder['Settings'],_0x1900fd=this[_0x3cebf2(0x10c)]()?_0x52c00a[_0x3cebf2(0x30f)]:_0x52c00a[_0x3cebf2(0x27c)];return _0x1900fd+0x1;},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)]['containerWindow']=function(){const _0x27f391=_0x5fdf60;return SceneManager[_0x27f391(0xcb)][_0x27f391(0x233)];},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x1b4)]=function(){const _0x7e89ec=_0x5fdf60,_0x3d9752=this['battler']();if(!_0x3d9752)return this[_0x7e89ec(0x290)]();if(_0x3d9752===BattleManager[_0x7e89ec(0x2cf)])return 0x0;if(BattleManager[_0x7e89ec(0x10a)]['includes'](_0x3d9752)){const _0x3fcc4a=BattleManager[_0x7e89ec(0x10a)][_0x7e89ec(0x174)](_0x3d9752)+0x1;return _0x3fcc4a;}return this[_0x7e89ec(0x290)]();},Sprite_BTB_TurnOrder_Battler['prototype']['startFade']=function(_0x1da6c8){const _0xe23d23=_0x5fdf60,_0xe6ee27=Window_BTB_TurnOrder[_0xe23d23(0x103)];this[_0xe23d23(0xf0)]=_0xe6ee27[_0xe23d23(0x267)],this[_0xe23d23(0x257)]=_0x1da6c8;},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x200)]=function(){const _0x196bb2=_0x5fdf60,_0x522cd0=this[_0x196bb2(0x226)]();if(!_0x522cd0)return;if(this[_0x196bb2(0x100)]===_0x522cd0['isAlive']()&&this[_0x196bb2(0x205)]===_0x522cd0[_0x196bb2(0x10b)]())return;this[_0x196bb2(0x100)]=_0x522cd0[_0x196bb2(0x29c)](),this[_0x196bb2(0x205)]=_0x522cd0[_0x196bb2(0x10b)]();let _0x5ca332=this[_0x196bb2(0x100)]&&this[_0x196bb2(0x205)]?0xff:0x0;this['startFade'](_0x5ca332);},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x1ca)]=function(){const _0x263122=_0x5fdf60;if(this[_0x263122(0xf0)]>0x0){const _0x4a54de=this[_0x263122(0xf0)];this[_0x263122(0x21d)]=(this[_0x263122(0x21d)]*(_0x4a54de-0x1)+this[_0x263122(0x257)])/_0x4a54de,this['_fadeDuration']--,this[_0x263122(0xf0)]<=0x0&&(this[_0x263122(0x222)](),this[_0x263122(0x1b7)]=0x0,this[_0x263122(0x189)](),this[_0x263122(0x21d)]=this['_fadeTarget']);}if(this['_isBattleOver'])return;BattleManager[_0x263122(0x1e8)]===_0x263122(0xd9)&&(this[_0x263122(0x182)]=!![],this[_0x263122(0x1d4)](0x0));},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x274)]=function(){const _0x522623=_0x5fdf60,_0x1fbe71=this[_0x522623(0x226)]();if(!_0x1fbe71)return;const _0x4f7b9b=Window_BTB_TurnOrder[_0x522623(0x103)],_0x16bdc0=this['_unit']===$gameParty?_0x522623(0x2df):_0x522623(0x2a0);let _0x50f638=_0x1fbe71[_0x522623(0x1a8)]();if(_0x1fbe71[_0x522623(0xdc)]()&&_0x50f638===_0x522623(0x243))_0x50f638=_0x522623(0x142);else _0x1fbe71[_0x522623(0x1fd)]()&&_0x50f638==='svactor'&&(_0x50f638=_0x522623(0x243));if(this['_graphicType']!==_0x50f638)return this[_0x522623(0x12a)]();switch(this['_graphicType']){case _0x522623(0x142):if(this[_0x522623(0x11b)]!==_0x1fbe71[_0x522623(0xdb)]())return this[_0x522623(0x12a)]();if(this[_0x522623(0x1ac)]!==_0x1fbe71[_0x522623(0xdf)]())return this['processUpdateGraphic']();break;case'icon':if(this[_0x522623(0x10f)]!==_0x1fbe71[_0x522623(0x319)]())return this[_0x522623(0x12a)]();break;case _0x522623(0x243):if(_0x1fbe71[_0x522623(0x2af)]()){if(this[_0x522623(0x1bb)]!==_0x1fbe71[_0x522623(0x22c)]())return this[_0x522623(0x12a)]();}else{if(this[_0x522623(0x293)]!==_0x1fbe71[_0x522623(0x1fa)]())return this[_0x522623(0x12a)]();}break;case _0x522623(0xc9):if(_0x1fbe71[_0x522623(0xdc)]()){if(this[_0x522623(0x1bb)]!==_0x1fbe71[_0x522623(0x1fa)]())return this[_0x522623(0x12a)]();}else{if(this[_0x522623(0x293)]!==_0x1fbe71['battlerName']())return this['processUpdateGraphic']();}break;}},Sprite_BTB_TurnOrder_Battler['prototype'][_0x5fdf60(0x12a)]=function(){const _0x4c4cfb=_0x5fdf60,_0x4ed325=this[_0x4c4cfb(0x226)]();if(!_0x4ed325)return;this['_graphicType']=_0x4ed325['TurnOrderBTBGraphicType']();if(_0x4ed325[_0x4c4cfb(0xdc)]()&&this[_0x4c4cfb(0x294)]===_0x4c4cfb(0x243))this['_graphicType']=_0x4c4cfb(0x142);else _0x4ed325['isEnemy']()&&this[_0x4c4cfb(0x294)]===_0x4c4cfb(0xc9)&&(this[_0x4c4cfb(0x294)]=_0x4c4cfb(0x243));let _0x4e1853;switch(this[_0x4c4cfb(0x294)]){case _0x4c4cfb(0x142):this['_graphicFaceName']=_0x4ed325[_0x4c4cfb(0xdb)](),this[_0x4c4cfb(0x1ac)]=_0x4ed325['TurnOrderBTBGraphicFaceIndex'](),_0x4e1853=ImageManager['loadFace'](this[_0x4c4cfb(0x11b)]),_0x4e1853[_0x4c4cfb(0x161)](this[_0x4c4cfb(0x1b9)]['bind'](this,_0x4e1853));break;case'icon':this[_0x4c4cfb(0x10f)]=_0x4ed325[_0x4c4cfb(0x2f4)](),_0x4e1853=ImageManager[_0x4c4cfb(0x13f)](_0x4c4cfb(0x1b5)),_0x4e1853[_0x4c4cfb(0x161)](this['changeIconGraphicBitmap']['bind'](this,_0x4e1853));break;case _0x4c4cfb(0x243):if(_0x4ed325[_0x4c4cfb(0x2af)]())this[_0x4c4cfb(0x1bb)]=_0x4ed325['svBattlerName'](),_0x4e1853=ImageManager[_0x4c4cfb(0x30e)](this[_0x4c4cfb(0x1bb)]),_0x4e1853[_0x4c4cfb(0x161)](this[_0x4c4cfb(0x220)][_0x4c4cfb(0x1ad)](this,_0x4e1853));else $gameSystem[_0x4c4cfb(0x2d6)]()?(this[_0x4c4cfb(0x293)]=_0x4ed325[_0x4c4cfb(0x1fa)](),_0x4e1853=ImageManager[_0x4c4cfb(0x2aa)](this[_0x4c4cfb(0x293)]),_0x4e1853[_0x4c4cfb(0x161)](this[_0x4c4cfb(0xca)][_0x4c4cfb(0x1ad)](this,_0x4e1853))):(this[_0x4c4cfb(0x293)]=_0x4ed325[_0x4c4cfb(0x1fa)](),_0x4e1853=ImageManager[_0x4c4cfb(0x201)](this['_graphicEnemy']),_0x4e1853[_0x4c4cfb(0x161)](this[_0x4c4cfb(0xca)]['bind'](this,_0x4e1853)));break;case _0x4c4cfb(0xc9):this[_0x4c4cfb(0x1bb)]=_0x4ed325[_0x4c4cfb(0x1fa)](),_0x4e1853=ImageManager[_0x4c4cfb(0x30e)](this['_graphicSv']),_0x4e1853[_0x4c4cfb(0x161)](this['changeSvActorGraphicBitmap'][_0x4c4cfb(0x1ad)](this,_0x4e1853));break;}},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x1b9)]=function(_0x12ee18){const _0x5a35cb=_0x5fdf60,_0x436a99=this[_0x5a35cb(0x1ac)],_0x2dcf61=this['bitmapWidth'](),_0xbda8c0=this[_0x5a35cb(0x2c6)](),_0x11a5dc=Math[_0x5a35cb(0x128)](_0x2dcf61,_0xbda8c0);this[_0x5a35cb(0x153)]['bitmap']=new Bitmap(_0x2dcf61,_0xbda8c0);const _0x5c4e3b=this[_0x5a35cb(0x153)]['bitmap'],_0x397abd=ImageManager[_0x5a35cb(0x24e)],_0x3c8f8b=ImageManager[_0x5a35cb(0x1b1)],_0x19c25c=_0x11a5dc/Math[_0x5a35cb(0x128)](_0x397abd,_0x3c8f8b),_0x377d03=ImageManager[_0x5a35cb(0x24e)],_0x358e3a=ImageManager[_0x5a35cb(0x1b1)],_0x446fd1=_0x436a99%0x4*_0x397abd+(_0x397abd-_0x377d03)/0x2,_0x2976c1=Math[_0x5a35cb(0x140)](_0x436a99/0x4)*_0x3c8f8b+(_0x3c8f8b-_0x358e3a)/0x2,_0x4a880e=(_0x2dcf61-_0x397abd*_0x19c25c)/0x2,_0x5a8980=(_0xbda8c0-_0x3c8f8b*_0x19c25c)/0x2;_0x5c4e3b[_0x5a35cb(0xfb)](_0x12ee18,_0x446fd1,_0x2976c1,_0x377d03,_0x358e3a,_0x4a880e,_0x5a8980,_0x11a5dc,_0x11a5dc);},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x178)]=function(_0x31a8da){const _0x86c282=_0x5fdf60,_0x27ebec=this[_0x86c282(0x10f)],_0x5dae2e=this[_0x86c282(0x2a2)](),_0x38adc8=this[_0x86c282(0x2c6)]();this['_graphicSprite'][_0x86c282(0xd0)]=new Bitmap(_0x5dae2e,_0x38adc8);const _0x172f24=this[_0x86c282(0x153)][_0x86c282(0xd0)],_0x55fe5b=ImageManager[_0x86c282(0x21f)],_0x1a2e3a=ImageManager[_0x86c282(0x110)],_0x285e78=Math[_0x86c282(0x165)](_0x55fe5b,_0x1a2e3a,_0x5dae2e,_0x38adc8),_0x3af04a=_0x27ebec%0x10*_0x55fe5b,_0x2cc224=Math[_0x86c282(0x140)](_0x27ebec/0x10)*_0x1a2e3a,_0x516dc7=Math[_0x86c282(0x140)](Math['max'](_0x5dae2e-_0x285e78,0x0)/0x2),_0x44da87=Math[_0x86c282(0x140)](Math[_0x86c282(0x128)](_0x38adc8-_0x285e78,0x0)/0x2);_0x172f24[_0x86c282(0xfb)](_0x31a8da,_0x3af04a,_0x2cc224,_0x55fe5b,_0x1a2e3a,_0x516dc7,_0x44da87,_0x285e78,_0x285e78);},Sprite_BTB_TurnOrder_Battler['prototype']['changeSvActorGraphicBitmap']=function(_0x3e1d5e){const _0x372574=_0x5fdf60,_0x9dc84b=this[_0x372574(0x2a2)](),_0x33f698=this[_0x372574(0x2c6)](),_0x5becc8=Math[_0x372574(0x165)](_0x9dc84b,_0x33f698);this['_graphicSprite'][_0x372574(0xd0)]=new Bitmap(_0x9dc84b,_0x33f698);const _0x57937e=this['_graphicSprite'][_0x372574(0xd0)],_0xc08c71=this[_0x372574(0x1bb)][_0x372574(0x18e)](/\$/i),_0x2b5ce8=_0xc08c71?0x1:ImageManager[_0x372574(0x1a2)],_0x237d0e=_0xc08c71?0x1:ImageManager[_0x372574(0x1b2)],_0x1f70a6=_0x3e1d5e[_0x372574(0xe7)]/_0x2b5ce8,_0x1baa97=_0x3e1d5e[_0x372574(0x2d0)]/_0x237d0e,_0x362831=Math[_0x372574(0x165)](0x1,_0x5becc8/_0x1f70a6,_0x5becc8/_0x1baa97),_0x2e69c1=_0x1f70a6*_0x362831,_0x15c4e3=_0x1baa97*_0x362831,_0x51a72e=Math['round']((_0x9dc84b-_0x2e69c1)/0x2),_0x512381=Math['round']((_0x33f698-_0x15c4e3)/0x2);_0x57937e['blt'](_0x3e1d5e,0x0,0x0,_0x1f70a6,_0x1baa97,_0x51a72e,_0x512381,_0x2e69c1,_0x15c4e3);},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0xca)]=function(_0x20d59e){const _0x7b289d=_0x5fdf60,_0x2683c3=Window_BTB_TurnOrder[_0x7b289d(0x103)],_0x17de2b=this[_0x7b289d(0x2a2)](),_0x2293f9=this[_0x7b289d(0x2c6)](),_0x13f708=Math[_0x7b289d(0x165)](_0x17de2b,_0x2293f9);this[_0x7b289d(0x153)][_0x7b289d(0xd0)]=new Bitmap(_0x17de2b,_0x2293f9);const _0x327635=this[_0x7b289d(0x153)][_0x7b289d(0xd0)],_0x39498a=Math['min'](0x1,_0x13f708/_0x20d59e[_0x7b289d(0xe7)],_0x13f708/_0x20d59e[_0x7b289d(0x2d0)]),_0x20c13d=_0x20d59e[_0x7b289d(0xe7)]*_0x39498a,_0x3c8110=_0x20d59e[_0x7b289d(0x2d0)]*_0x39498a,_0x4291f6=Math['round']((_0x17de2b-_0x20c13d)/0x2),_0x47d123=Math[_0x7b289d(0x2ee)]((_0x2293f9-_0x3c8110)/0x2);_0x327635[_0x7b289d(0xfb)](_0x20d59e,0x0,0x0,_0x20d59e[_0x7b289d(0xe7)],_0x20d59e[_0x7b289d(0x2d0)],_0x4291f6,_0x47d123,_0x20c13d,_0x3c8110);},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x2ca)]=function(){const _0x18d216=_0x5fdf60,_0x5a99bf=this[_0x18d216(0x226)]();if(!_0x5a99bf)return;if(!_0x5a99bf[_0x18d216(0x1fd)]())return;if(this['_graphicHue']===_0x5a99bf[_0x18d216(0x1cf)]())return;this['_graphicHue']=_0x5a99bf[_0x18d216(0x1cf)](),this[_0x18d216(0x153)][_0x18d216(0x1ab)](_0x5a99bf[_0x18d216(0x2af)]()?0x0:this[_0x18d216(0x223)]);},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x31d)]=function(){const _0x1368f1=_0x5fdf60;if(!this[_0x1368f1(0x1e3)])return;const _0x40218c=this[_0x1368f1(0x226)]();if(!_0x40218c)return;if(this[_0x1368f1(0x21e)]===_0x40218c[_0x1368f1(0x21e)]&&this[_0x1368f1(0x2b2)]===_0x40218c[_0x1368f1(0x2b2)])return;this[_0x1368f1(0x21e)]=_0x40218c[_0x1368f1(0x21e)],this[_0x1368f1(0x2b2)]=_0x40218c[_0x1368f1(0x2b2)];const _0x3dbbdd=Window_BTB_TurnOrder[_0x1368f1(0x103)],_0x4308ff=this[_0x1368f1(0x10c)](),_0x1c22e7=this['bitmapWidth'](),_0x5206e5=this[_0x1368f1(0x2c6)](),_0x6e519d=this['_letterSprite'][_0x1368f1(0xd0)];_0x6e519d['clear']();if(!this['_plural'])return;_0x6e519d[_0x1368f1(0x2e4)]=_0x3dbbdd[_0x1368f1(0x184)]||$gameSystem[_0x1368f1(0x195)](),_0x6e519d[_0x1368f1(0x150)]=_0x3dbbdd[_0x1368f1(0x308)]||0x10,_0x4308ff?_0x6e519d[_0x1368f1(0x2a4)](this['_letter']['trim'](),0x0,_0x5206e5/0x2,_0x1c22e7,_0x5206e5/0x2,'center'):_0x6e519d[_0x1368f1(0x2a4)](this[_0x1368f1(0x21e)]['trim'](),0x0,0x2,_0x1c22e7-0x8,_0x5206e5-0x4,_0x1368f1(0x188));},Sprite_BTB_TurnOrder_Battler[_0x5fdf60(0x1a4)][_0x5fdf60(0x2eb)]=function(){const _0x5c6315=_0x5fdf60,_0x27f88b=this[_0x5c6315(0x226)]();if(!_0x27f88b)return;const _0x4d7675=_0x27f88b[_0x5c6315(0x226)]();if(!_0x4d7675)return;const _0x3a0da3=_0x4d7675[_0x5c6315(0x190)]();if(!_0x3a0da3)return;this[_0x5c6315(0x16c)](_0x3a0da3[_0x5c6315(0x283)]);},Sprite_BTB_TurnOrder_Battler['prototype'][_0x5fdf60(0x2ef)]=function(){const _0x260fbe=_0x5fdf60;return this[_0x260fbe(0x226)]();},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x1dc)]=Window_Base[_0x5fdf60(0x1a4)][_0x5fdf60(0x2f2)],Window_Base['prototype'][_0x5fdf60(0x2f2)]=function(_0x5db4df,_0x2abe21,_0x5d7108){const _0xd54301=_0x5fdf60;return _0x5d7108=VisuMZ[_0xd54301(0x112)][_0xd54301(0x1dc)]['call'](this,_0x5db4df,_0x2abe21,_0x5d7108),_0x5d7108=this[_0xd54301(0x11d)](_0x5db4df,_0x2abe21,_0x5d7108),_0x5d7108;},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x2b7)]=Window_Base[_0x5fdf60(0x1a4)][_0x5fdf60(0x2bc)],Window_Base[_0x5fdf60(0x1a4)]['drawItemNumber']=function(_0x180e21,_0x58e966,_0x2af928,_0x1670a9){const _0x56925c=_0x5fdf60;BattleManager[_0x56925c(0x1d1)]()&&this[_0x56925c(0x2f1)]===Window_BattleItem?this[_0x56925c(0x120)](_0x180e21,_0x58e966,_0x2af928,_0x1670a9):VisuMZ[_0x56925c(0x112)][_0x56925c(0x2b7)]['call'](this,_0x180e21,_0x58e966,_0x2af928,_0x1670a9),this[_0x56925c(0xf3)]();},Window_Base[_0x5fdf60(0x1a4)][_0x5fdf60(0x120)]=function(_0x54fb08,_0x362622,_0xae4d67,_0x8b55d6){const _0x2be2e9=_0x5fdf60,_0x548fed=VisuMZ[_0x2be2e9(0x112)][_0x2be2e9(0x103)][_0x2be2e9(0x22f)],_0x479e51=BattleManager[_0x2be2e9(0x1c7)]||$gameParty[_0x2be2e9(0x1f6)]()[0x0],_0x441b53=this[_0x2be2e9(0x11d)](_0x479e51,_0x54fb08,''),_0x431e26=this[_0x2be2e9(0x272)](_0x441b53)['width'],_0x77853c=_0x548fed[_0x2be2e9(0x28b)];let _0x505dc1=_0x362622+_0x8b55d6-_0x431e26;if(_0x441b53==='')VisuMZ[_0x2be2e9(0x112)]['Window_Base_drawItemNumber'][_0x2be2e9(0x14d)](this,_0x54fb08,_0x362622,_0xae4d67,_0x8b55d6);else{if(this[_0x2be2e9(0x238)](_0x54fb08)){this[_0x2be2e9(0xf3)]();const _0x547eca=VisuMZ['ItemsEquipsCore'][_0x2be2e9(0x103)]['ItemScene'];this[_0x2be2e9(0x27d)]['fontSize']=_0x547eca['ItemQuantityFontSize'];if(_0x77853c){const _0x19831e=_0x547eca[_0x2be2e9(0x123)],_0x4c4fa0=_0x19831e[_0x2be2e9(0xd4)]($gameParty['numItems'](_0x54fb08)),_0x4a8474=this['textWidth'](_0x4c4fa0+this[_0x2be2e9(0x183)]());_0x505dc1-=_0x4a8474;}else _0x8b55d6-=this[_0x2be2e9(0x28f)](this['skillCostSeparator']())+_0x431e26;VisuMZ[_0x2be2e9(0x112)][_0x2be2e9(0x2b7)]['call'](this,_0x54fb08,_0x362622,_0xae4d67,_0x8b55d6);}}this[_0x2be2e9(0x2ad)](_0x441b53,_0x505dc1,_0xae4d67);},Window_Base[_0x5fdf60(0x1a4)]['makeAdditionalCostTextBTB']=function(_0x48673f,_0x2fcd9c,_0x1ca39b){const _0x377eb0=_0x5fdf60;if(!BattleManager[_0x377eb0(0x1d1)]())return _0x1ca39b;if(!_0x48673f)return _0x1ca39b;if(!_0x2fcd9c)return _0x1ca39b;if(_0x2fcd9c[_0x377eb0(0x1e0)][_0x377eb0(0x18e)](VisuMZ[_0x377eb0(0x112)][_0x377eb0(0x253)]['HideBravePointCost']))return _0x1ca39b;let _0x3024e1=_0x48673f[_0x377eb0(0x2b3)](_0x2fcd9c);const _0x5396b8=VisuMZ[_0x377eb0(0x112)][_0x377eb0(0x103)][_0x377eb0(0x22f)],_0x13b10b=_0x5396b8[_0x377eb0(0x28b)],_0x2cb4f0=_0x5396b8['ShowCostForAttack'],_0x27c8c6=_0x5396b8[_0x377eb0(0x271)],_0x2a0aec=_0x5396b8[_0x377eb0(0x23c)]||0x0,_0x4ba8c4=_0x5396b8[_0x377eb0(0x2f3)],_0x9a22eb=_0x5396b8[_0x377eb0(0x1aa)];if(DataManager[_0x377eb0(0x18f)](_0x2fcd9c)&&this[_0x377eb0(0x2f1)]===Window_ActorCommand){if(!_0x2cb4f0&&_0x2fcd9c['id']===_0x48673f[_0x377eb0(0x1ee)]())return _0x1ca39b;if(!_0x27c8c6&&_0x2fcd9c['id']===_0x48673f[_0x377eb0(0x194)]())return _0x1ca39b;}_0x3024e1-=_0x2a0aec;if(_0x3024e1<0x0)return _0x1ca39b;if(!_0x4ba8c4&&_0x3024e1===0x0)return _0x1ca39b;if(!_0x9a22eb&&_0x3024e1===0x1)return _0x1ca39b;const _0x4c11a5=_0x377eb0(0xc7)[_0x377eb0(0xd4)](ImageManager[_0x377eb0(0x31b)]),_0x67c49b=TextManager['btbBravePointsAbbr'];let _0x4aa8af=TextManager[_0x377eb0(0x258)][_0x377eb0(0xd4)](_0x3024e1,_0x67c49b,_0x4c11a5);if(_0x1ca39b==='')_0x1ca39b+=_0x4aa8af;else _0x13b10b?_0x1ca39b=_0x4aa8af+this['skillCostSeparator']()+_0x1ca39b:_0x1ca39b=_0x1ca39b+this[_0x377eb0(0x183)]()+_0x4aa8af;return _0x1ca39b;},Window_Selectable[_0x5fdf60(0x1a4)][_0x5fdf60(0x306)]=function(){return![];},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x2fa)]=Window_Selectable[_0x5fdf60(0x1a4)][_0x5fdf60(0x166)],Window_Selectable[_0x5fdf60(0x1a4)][_0x5fdf60(0x166)]=function(_0x408b4f){const _0x142623=_0x5fdf60;VisuMZ[_0x142623(0x112)]['Window_Selectable_select']['call'](this,_0x408b4f),this[_0x142623(0x306)]()&&this[_0x142623(0x247)]&&this[_0x142623(0x155)]();},Window_Selectable[_0x5fdf60(0x1a4)][_0x5fdf60(0x155)]=function(){const _0x2cc7c2=_0x5fdf60;BattleManager[_0x2cc7c2(0x256)]();},VisuMZ['BattleSystemBTB']['Window_Help_setItem']=Window_Help['prototype']['setItem'],Window_Help[_0x5fdf60(0x1a4)][_0x5fdf60(0xe2)]=function(_0x24b69c){const _0x1f8edf=_0x5fdf60;BattleManager[_0x1f8edf(0x1d1)]()&&_0x24b69c&&_0x24b69c['note']&&_0x24b69c[_0x1f8edf(0x1e0)][_0x1f8edf(0x18e)](VisuMZ[_0x1f8edf(0x112)][_0x1f8edf(0x253)][_0x1f8edf(0x117)])?this[_0x1f8edf(0x268)](String(RegExp['$1'])):VisuMZ[_0x1f8edf(0x112)][_0x1f8edf(0x23d)][_0x1f8edf(0x14d)](this,_0x24b69c);},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x2e3)]=Window_BattleLog[_0x5fdf60(0x1a4)]['startAction'],Window_BattleLog[_0x5fdf60(0x1a4)][_0x5fdf60(0x25a)]=function(_0x2b6193,_0x263634,_0x20de49){const _0x3ac67c=_0x5fdf60;this[_0x3ac67c(0x2c7)](_0x2b6193)?this['queueBraveAnimationsBTB'](_0x2b6193,_0x263634,_0x20de49):VisuMZ[_0x3ac67c(0x112)][_0x3ac67c(0x2e3)]['call'](this,_0x2b6193,_0x263634,_0x20de49);},Window_BattleLog['prototype']['startActionBTB']=function(_0x618601,_0x1ab5b1,_0x4a474f){const _0x4560c3=_0x5fdf60;VisuMZ['BattleSystemBTB']['Window_BattleLog_startAction'][_0x4560c3(0x14d)](this,_0x618601,_0x1ab5b1,_0x4a474f);},Window_BattleLog[_0x5fdf60(0x1a4)][_0x5fdf60(0x2c7)]=function(_0xc3173c){const _0x2649cc=_0x5fdf60;if(!BattleManager[_0x2649cc(0x1d1)]())return![];if(!_0xc3173c)return![];if(!_0xc3173c[_0x2649cc(0x1fd)]())return![];if(_0xc3173c[_0x2649cc(0x1d0)])return![];const _0x9cad85=VisuMZ[_0x2649cc(0x112)][_0x2649cc(0x103)][_0x2649cc(0xfc)];if(!_0x9cad85[_0x2649cc(0x314)])return![];if(_0x9cad85[_0x2649cc(0x2c4)]<=0x0)return![];return VisuMZ[_0x2649cc(0x112)][_0x2649cc(0x103)]['BraveAnimation']['ShowEnemyBrave'];},Window_BattleLog['prototype'][_0x5fdf60(0x17a)]=function(_0x2ac76c,_0x154218,_0x24ea12){const _0x4c3ad0=_0x5fdf60;_0x2ac76c['_braveStartupAnimation']=!![];let _0x394cc0=_0x2ac76c['braveAnimationTimes']();const _0x3044aa=VisuMZ[_0x4c3ad0(0x112)][_0x4c3ad0(0x103)][_0x4c3ad0(0xfc)],_0x5678c6=_0x3044aa[_0x4c3ad0(0x2c4)],_0x5a77d3=_0x3044aa[_0x4c3ad0(0xf1)];while(_0x394cc0--){this[_0x4c3ad0(0x15f)](_0x4c3ad0(0x25b),[_0x2ac76c],_0x5678c6),_0x394cc0>0x0?this[_0x4c3ad0(0x15f)]('waitCount',_0x5a77d3):this['push'](_0x4c3ad0(0x2b8));}this[_0x4c3ad0(0x15f)](_0x4c3ad0(0x1bc),_0x2ac76c,_0x154218,_0x24ea12);},VisuMZ[_0x5fdf60(0x112)]['Window_ActorCommand_addGuardCommand']=Window_ActorCommand['prototype'][_0x5fdf60(0x11f)],Window_ActorCommand[_0x5fdf60(0x1a4)][_0x5fdf60(0x11f)]=function(){const _0x107711=_0x5fdf60;this[_0x107711(0x25d)](),VisuMZ['BattleSystemBTB'][_0x107711(0x2ab)][_0x107711(0x14d)](this);},Window_ActorCommand[_0x5fdf60(0x1a4)][_0x5fdf60(0x25d)]=function(){const _0x1132b4=_0x5fdf60;if(!this[_0x1132b4(0x10d)]())return;const _0xb8f6ac=this[_0x1132b4(0x24f)](),_0x282454=TextManager[_0x1132b4(0x2c9)],_0x1999dd=ImageManager[_0x1132b4(0x31b)],_0x33257a=_0xb8f6ac===_0x1132b4(0x206)?_0x282454:_0x1132b4(0x22b)[_0x1132b4(0xd4)](_0x1999dd,_0x282454);this[_0x1132b4(0x14e)](_0x33257a,_0x1132b4(0x1e4),this['_actor']['canBrave']()),BattleManager['refreshStatusBTB']();},Window_ActorCommand['prototype']['canAddBraveCommand']=function(){const _0xf7f431=_0x5fdf60;if(!BattleManager[_0xf7f431(0x1d1)]())return![];if(!VisuMZ[_0xf7f431(0x112)][_0xf7f431(0x103)]['Window']['ShowCommand'])return![];if(this[_0xf7f431(0x1c7)]&&this['_actor'][_0xf7f431(0x27a)]())return![];return!![];},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x2fd)]=Window_Selectable[_0x5fdf60(0x1a4)][_0x5fdf60(0x13d)],Window_Selectable['prototype'][_0x5fdf60(0x13d)]=function(){const _0x46e64a=_0x5fdf60;this[_0x46e64a(0x1a5)]()?this[_0x46e64a(0x1c7)]&&!this['_actor'][_0x46e64a(0x27a)]()&&this[_0x46e64a(0x1c7)]['canBrave']()&&SceneManager['_scene']['performBrave']():VisuMZ['BattleSystemBTB']['Window_Selectable_cursorPagedown'][_0x46e64a(0x14d)](this);},VisuMZ[_0x5fdf60(0x112)]['Window_Selectable_cursorPageup']=Window_Selectable[_0x5fdf60(0x1a4)]['cursorPageup'],Window_Selectable[_0x5fdf60(0x1a4)][_0x5fdf60(0xe0)]=function(){const _0x4318a1=_0x5fdf60;this['isUsePageUpDnShortcutBTB']()?this['_actor']&&!this[_0x4318a1(0x1c7)]['hideBraveTrait']()&&this[_0x4318a1(0x1c7)][_0x4318a1(0x217)]()>0x1&&SceneManager[_0x4318a1(0xcb)][_0x4318a1(0x14b)]():VisuMZ[_0x4318a1(0x112)]['Window_Selectable_cursorPageup'][_0x4318a1(0x14d)](this);},Window_Selectable[_0x5fdf60(0x1a4)][_0x5fdf60(0x1a5)]=function(){const _0x5de81e=_0x5fdf60;if(this[_0x5de81e(0x2f1)]!==Window_ActorCommand)return![];if(!SceneManager[_0x5de81e(0x2f7)]())return![];if(!BattleManager['isBTB']())return![];return VisuMZ['BattleSystemBTB'][_0x5de81e(0x103)][_0x5de81e(0x145)][_0x5de81e(0x311)];},VisuMZ[_0x5fdf60(0x112)]['Window_ActorCommand_makeCommandList']=Window_ActorCommand[_0x5fdf60(0x1a4)][_0x5fdf60(0x2b9)],Window_ActorCommand[_0x5fdf60(0x1a4)][_0x5fdf60(0x2b9)]=function(){const _0x2a4ad8=_0x5fdf60;VisuMZ[_0x2a4ad8(0x112)][_0x2a4ad8(0xdd)][_0x2a4ad8(0x14d)](this),this[_0x2a4ad8(0x13e)]();},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x320)]=Window_Base[_0x5fdf60(0x1a4)][_0x5fdf60(0x1be)],Window_Base[_0x5fdf60(0x1a4)]['close']=function(){const _0x2684fd=_0x5fdf60;VisuMZ[_0x2684fd(0x112)][_0x2684fd(0x320)]['call'](this),SceneManager[_0x2684fd(0x2f7)]()&&this[_0x2684fd(0x287)]&&this[_0x2684fd(0x287)]();},Window_ActorCommand[_0x5fdf60(0x1a4)]['destroyBTBActionCounters']=function(){const _0x254a80=_0x5fdf60;if(!this['_btbActionSprite'])return;this[_0x254a80(0x23a)][_0x254a80(0xd0)]&&this[_0x254a80(0x23a)][_0x254a80(0xd0)]['destroy'](),this[_0x254a80(0x21b)](this['_btbActionSprite']),delete this[_0x254a80(0x23a)];},Window_ActorCommand[_0x5fdf60(0x1a4)]['createBTBActionCounters']=function(){const _0x3a1da3=_0x5fdf60;if(!BattleManager[_0x3a1da3(0x1d1)]())return;if(!this['_actor'])return;this[_0x3a1da3(0x287)]();if(this['_actor'][_0x3a1da3(0x27a)]())return;this['_btbActionSprite']=new Sprite(),this[_0x3a1da3(0x2ed)](this['_btbActionSprite']),this[_0x3a1da3(0x31c)]();},Window_ActorCommand[_0x5fdf60(0x1a4)][_0x5fdf60(0x31c)]=function(){const _0x5307c7=_0x5fdf60,_0x37a5d8=VisuMZ[_0x5307c7(0x112)]['Settings'][_0x5307c7(0x145)][_0x5307c7(0x240)];_0x37a5d8?_0x37a5d8['call'](this,this[_0x5307c7(0x23a)],this,this['_actor']):this[_0x5307c7(0x105)]['call'](this,this[_0x5307c7(0x23a)],this,this[_0x5307c7(0x1c7)]);},Window_ActorCommand[_0x5fdf60(0x1a4)][_0x5fdf60(0x105)]=function(){const _0x1009dd=_0x5fdf60,_0x251acf=arguments[0x0],_0x136687=arguments[0x1],_0x483afb=arguments[0x2];_0x251acf['x']=Math[_0x1009dd(0x2ee)](_0x136687[_0x1009dd(0xe7)]/0x2),_0x251acf['y']=0x0,_0x251acf[_0x1009dd(0x31f)]['x']=0.5,_0x251acf[_0x1009dd(0x31f)]['y']=0.5;const _0x45acfe=TextManager[_0x1009dd(0xe5)],_0x2f96bf=TextManager['btbActionCurrent'];let _0xb9e5e6=_0x45acfe['repeat'](_0x483afb[_0x1009dd(0x217)]());const _0x326f4d=_0x483afb[_0x1009dd(0x1ed)];_0xb9e5e6=_0xb9e5e6[_0x1009dd(0x2ae)](0x0,_0x326f4d)+_0x2f96bf+_0xb9e5e6[_0x1009dd(0x2ae)](_0x326f4d+0x1);const _0x5437c2=new Bitmap(_0x136687[_0x1009dd(0xe7)],_0x136687[_0x1009dd(0x275)]());_0x5437c2[_0x1009dd(0x150)]=0x24,_0x5437c2[_0x1009dd(0x2a4)](_0xb9e5e6,0x0,0x0,_0x5437c2['width'],_0x5437c2[_0x1009dd(0x2d0)],_0x1009dd(0x2a8)),_0x251acf[_0x1009dd(0xd0)]=_0x5437c2;},Window_ActorCommand['prototype']['isBattleItemWindowBTB']=function(){const _0x28a935=_0x5fdf60;return BattleManager[_0x28a935(0x1d1)]();},Window_ActorCommand[_0x5fdf60(0x1a4)][_0x5fdf60(0x155)]=function(){const _0x2c4539=_0x5fdf60,_0x4a6301=BattleManager['inputtingAction']();if(_0x4a6301){const _0x3fcb12=this[_0x2c4539(0x2ce)]();switch(_0x3fcb12){case _0x2c4539(0x307):_0x4a6301[_0x2c4539(0x27f)]();break;case'guard':_0x4a6301[_0x2c4539(0x2cb)]();break;case _0x2c4539(0x31a):_0x4a6301[_0x2c4539(0x2bf)](this[_0x2c4539(0x185)]());break;default:_0x4a6301['setSkill'](null);break;}}Window_Command[_0x2c4539(0x1a4)]['applyBattleItemWindowBTB'][_0x2c4539(0x14d)](this);},Window_Base[_0x5fdf60(0x1a4)]['drawActorBravePoints']=function(_0x2d1da5,_0x1e7e49,_0x38f909,_0x1cf49e,_0x5e3deb){const _0x3cd5a3=_0x5fdf60;if(!_0x2d1da5)return;if(!BattleManager[_0x3cd5a3(0x1d1)]())return;const _0x321224=VisuMZ[_0x3cd5a3(0x112)]['Settings'][_0x3cd5a3(0x145)],_0x2ad2b0=BattleManager[_0x3cd5a3(0x321)]()?_0x321224[_0x3cd5a3(0x1da)]:_0x321224[_0x3cd5a3(0x207)],_0x55a235=_0x321224[_0x3cd5a3(0x28c)],_0x4421ae=_0x321224[_0x3cd5a3(0x303)],_0x20a451=_0x321224['NegativeColor'];let _0x14a387=0x0,_0x497c00=0x0;_0x497c00=_0x2d1da5[_0x3cd5a3(0x2e2)]();if(_0x497c00>0x0)_0x14a387=_0x4421ae;if(_0x497c00===0x0)_0x14a387=_0x55a235;if(_0x497c00<0x0)_0x14a387=_0x20a451;const _0x1c0b87=_0x3cd5a3(0x23e)[_0x3cd5a3(0xd4)](_0x14a387,_0x497c00),_0x4d69f8=_0x3cd5a3(0xc7)['format'](ImageManager[_0x3cd5a3(0x31b)]);_0x497c00=_0x2d1da5[_0x3cd5a3(0x301)]();if(_0x497c00>0x0)_0x14a387=_0x4421ae;if(_0x497c00===0x0)_0x14a387=_0x55a235;_0x497c00<0x0&&(_0x14a387=_0x20a451);const _0x1b5f3f=_0x3cd5a3(0x23e)[_0x3cd5a3(0xd4)](_0x14a387,_0x497c00);let _0xc07ca8=_0x2ad2b0[_0x3cd5a3(0xd4)](_0x1c0b87,TextManager[_0x3cd5a3(0x19d)],_0x4d69f8,_0x1b5f3f);const _0xea94a3=this[_0x3cd5a3(0x272)](_0xc07ca8)['width'];if(_0x5e3deb===_0x3cd5a3(0x2a8))_0x1e7e49+=Math[_0x3cd5a3(0x2ee)]((_0x1cf49e-_0xea94a3)/0x2);else _0x5e3deb===_0x3cd5a3(0x188)&&(_0x1e7e49+=Math[_0x3cd5a3(0x2ee)](_0x1cf49e-_0xea94a3));this['drawTextEx'](_0xc07ca8,_0x1e7e49,_0x38f909,_0x1cf49e);},Window_StatusBase[_0x5fdf60(0x1a4)][_0x5fdf60(0x2da)]=function(_0x56fabd){const _0x1eb3a9=_0x5fdf60;if(!_0x56fabd)return![];if(!BattleManager['isBTB']())return![];if(!this[_0x1eb3a9(0x2f5)])return![];if(_0x56fabd[_0x1eb3a9(0x27a)]())return![];const _0x583631=VisuMZ['BattleSystemBTB']['Settings'][_0x1eb3a9(0x145)],_0x4e0b2a=this['battleLayoutStyle']();return _0x583631[_0x1eb3a9(0x26e)[_0x1eb3a9(0xd4)](_0x4e0b2a)];},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x1a1)]=Window_BattleStatus['prototype'][_0x5fdf60(0xcc)],Window_BattleStatus[_0x5fdf60(0x1a4)][_0x5fdf60(0xcc)]=function(_0x39d1ec){const _0xe8111=_0x5fdf60;VisuMZ[_0xe8111(0x112)]['Window_BattleStatus_drawItemStatusListStyle'][_0xe8111(0x14d)](this,_0x39d1ec);const _0x5c3fb9=this['actor'](_0x39d1ec);if(this[_0xe8111(0x2da)](_0x5c3fb9)){const _0x21a791=this[_0xe8111(0x26c)](_0x39d1ec),_0x176a80=$dataSystem[_0xe8111(0x2cc)]?0x4:0x3,_0x20c949=_0x176a80*0x80+(_0x176a80-0x1)*0x8+0x4;let _0x3df876=_0x21a791['x']+this[_0xe8111(0x31e)];VisuMZ[_0xe8111(0x181)][_0xe8111(0x103)][_0xe8111(0x2f8)][_0xe8111(0x29a)]?_0x3df876=_0x21a791['x']+ImageManager[_0xe8111(0x24e)]+0x8:_0x3df876+=ImageManager[_0xe8111(0x21f)];const _0x5164a2=Math[_0xe8111(0x2ee)](Math[_0xe8111(0x165)](_0x21a791['x']+_0x21a791[_0xe8111(0xe7)]-_0x20c949,_0x3df876));let _0x574458=_0x5164a2+0x88,_0xf77ccc=_0x21a791['y'];_0x574458+=0x88*($dataSystem[_0xe8111(0x2cc)]?0x3:0x2),_0x574458+=this['getOffsetX_BTB'](),_0xf77ccc+=this[_0xe8111(0xe6)]();const _0x188c6f=this['getAlignmentBTB']();if(_0x574458>_0x21a791['x']+_0x21a791[_0xe8111(0xe7)])return;this[_0xe8111(0x1dd)](_0x5c3fb9,_0x574458,_0xf77ccc,_0x21a791[_0xe8111(0xe7)],_0x188c6f);}},VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x108)]=Window_BattleStatus[_0x5fdf60(0x1a4)][_0x5fdf60(0x125)],Window_BattleStatus[_0x5fdf60(0x1a4)][_0x5fdf60(0x125)]=function(_0x1f78df){const _0x55b4aa=_0x5fdf60;VisuMZ[_0x55b4aa(0x112)][_0x55b4aa(0x108)]['call'](this,_0x1f78df);const _0x31ebf6=this[_0x55b4aa(0xf4)](_0x1f78df);if(this[_0x55b4aa(0x2da)](_0x31ebf6)){const _0x5e27a9=this[_0x55b4aa(0x1ec)](_0x1f78df);let _0xda1572=_0x5e27a9['x'],_0x109cb3=_0x5e27a9['y'];_0xda1572+=this['getOffsetX_BTB'](),_0x109cb3+=this[_0x55b4aa(0xe6)]();const _0x560bc4=this[_0x55b4aa(0x1f8)]();this[_0x55b4aa(0x1dd)](_0x31ebf6,_0xda1572,_0x109cb3,_0x5e27a9[_0x55b4aa(0xe7)],_0x560bc4);}},Window_BattleStatus['prototype'][_0x5fdf60(0x1ec)]=function(_0x305c83){const _0x1df1e4=_0x5fdf60,_0xe2f804=this[_0x1df1e4(0x1ba)](_0x305c83);if(_0xe2f804[_0x1df1e4(0xe7)]<ImageManager[_0x1df1e4(0x24e)])return _0xe2f804;let _0x3457c6=Math[_0x1df1e4(0x2ee)]((_0xe2f804[_0x1df1e4(0xe7)]-ImageManager[_0x1df1e4(0x24e)])/0x2);return _0xe2f804[_0x1df1e4(0xe7)]=ImageManager['faceWidth'],_0xe2f804['x']+=_0x3457c6,_0xe2f804;},Window_BattleStatus['prototype'][_0x5fdf60(0x1f8)]=function(){const _0xe33e1d=_0x5fdf60,_0x5ed64e=VisuMZ[_0xe33e1d(0x112)][_0xe33e1d(0x103)]['Window'],_0x2c7bf5=this[_0xe33e1d(0x2f5)]();return _0x5ed64e[_0xe33e1d(0x1c3)[_0xe33e1d(0xd4)](_0x2c7bf5)]||0x0;},Window_BattleStatus[_0x5fdf60(0x1a4)]['getOffsetX_BTB']=function(){const _0x465b2c=_0x5fdf60,_0x22cd62=VisuMZ[_0x465b2c(0x112)][_0x465b2c(0x103)][_0x465b2c(0x145)],_0x48b75a=this['battleLayoutStyle']();return _0x22cd62[_0x465b2c(0xcd)[_0x465b2c(0xd4)](_0x48b75a)]||0x0;},Window_BattleStatus[_0x5fdf60(0x1a4)]['getOffsetY_BTB']=function(){const _0x4dcb06=_0x5fdf60,_0x861b00=VisuMZ[_0x4dcb06(0x112)][_0x4dcb06(0x103)][_0x4dcb06(0x145)],_0x51a070=this['battleLayoutStyle']();return _0x861b00['%1_offsetY'[_0x4dcb06(0xd4)](_0x51a070)]||0x0;},Window_BattleSkill[_0x5fdf60(0x1a4)][_0x5fdf60(0x306)]=function(){const _0x2ba857=_0x5fdf60;return BattleManager[_0x2ba857(0x1d1)]();},Window_BattleSkill[_0x5fdf60(0x1a4)][_0x5fdf60(0x155)]=function(){const _0x522505=_0x5fdf60,_0x263777=this[_0x522505(0x1a3)](),_0x52a00f=BattleManager['inputtingAction']();if(_0x52a00f)_0x52a00f[_0x522505(0x2bf)](_0x263777?_0x263777['id']:null);Window_SkillList['prototype'][_0x522505(0x155)][_0x522505(0x14d)](this);},Window_BattleItem[_0x5fdf60(0x1a4)]['isBattleItemWindowBTB']=function(){return BattleManager['isBTB']();},Window_BattleItem[_0x5fdf60(0x1a4)][_0x5fdf60(0x155)]=function(){const _0x1438c8=_0x5fdf60,_0x51633d=this[_0x1438c8(0x1a3)](),_0x53cf33=BattleManager['inputtingAction']();if(_0x53cf33)_0x53cf33[_0x1438c8(0xe2)](_0x51633d?_0x51633d['id']:null);Window_ItemList[_0x1438c8(0x1a4)][_0x1438c8(0x155)][_0x1438c8(0x14d)](this);};function _0x2b7b(){const _0x2446d1=['_actor','BravePointRegen','Mechanics','updateOpacity','Game_BattlerBase_appear','State-%1-%2','commandBrave','_skillIDs','battlerHue','_braveStartupAnimation','isBTB','_actionFusionRecipe','BtbTurnOrderClearEnemyGraphic','startFade','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','bottom','_containerHeight','icon','Game_Action_applyItemUserEffect','StatusPredictFmt','btbRegisterFusions','Window_Base_makeAdditionalSkillCostText','drawActorBravePoints','updateTurnOrderBTB','BattleManager_startInput','note','Actors','onBattleStartBTB','_letterSprite','brave','BtbTurnOrderEnemyIcon','_btbTurnOrderIconIndex','_homeX','_phase','parameters','join','faceName','itemRectPortraitBTB','_actionInputIndex','attackSkillId','VisuMZ_1_BattleCore','requestFauxAnimation','_logWindow','remove','TurnOrder','ParseAllNotetags','makeDeepCopy','members','_btbTurnOrderGraphicType','getAlignmentBTB','BTB_MIN_BRAVEPOINTS_DEFAULT','battlerName','cannotBraveTrait','currentAction','isEnemy','%1\x20%2\x20%3','BravePointRegenBase','checkOpacity','loadEnemy','performCollapse','selectNextCommand','boxWidth','_isAppeared','text','StatusDisplayFmt','sort','Brave','_ogWindowLayerY','_bravePoints','ARRAYNUM','_index','_btbTurnOrderFaceName','_itemIDs','_btbSkillFlexFusion','_positionTargetX','updateSidePosition','setBTBGraphicIconIndex','MaxBravePointsDefault','CalcActionSpeedJS','pop','numActions','BTB_MAX_ACTIONS_HARD_CAP','makeActions','Game_BattlerBase_canGuard','removeChild','Game_Enemy_makeActions','opacity','_letter','iconWidth','changeSvActorGraphicBitmap','maxBravePoints','checkPosition','_graphicHue','performBrave','initialize','battler','Enemies','CannotBrave','%1Mute','15GnadhP','\x5cI[%1]%2','svBattlerName','BravePointCostFmt','btbPaySkillFusionCosts','General','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20value\x20=\x20arguments[2];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20value;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','setup','SpriteLength','_btbTurnOrderWindow','CenterHorz','ActorActionFusions','createGraphicSprite','%1BgColor2','isDrawItemNumber','startInput','_btbActionSprite','removeActionBattlersBTB','ReduceShownBPCost','Window_Help_setItem','\x5cC[%1]%2\x5cC[0]','BattleManager_makeActionOrders','DrawActionCountersJS','%1Mirror','createBorderSprite','enemy','concat','Game_Battler_onTurnEnd','updatePadding','active','requestRefresh','ActorBattlerType','isActiveTpb','_fullHeight','getActionFusionRecipeSkills','BravePointsAbbr','faceWidth','commandStyle','cancelBrave','_unit','getActionFusionCombinationsBTB','RegExp','isForFriend','index','sortActionOrdersBTB','_fadeTarget','btbCostFormat','ActionCurrent','startAction','showNormalAnimation','Game_Action_allowRandomSpeed','addBraveCommand','Scene_Battle_createActorCommandWindow','gradientFillRect','gainBravePoints','initHomePositions','useItemBTB','faceIndex','BattleManager_isActiveTpb','EnemyBattlerType','Class-%1-%2','UpdateFrames','setText','setHandler','process_VisuMZ_BattleSystemBTB_Notetags','length','itemLineRect','ARRAYSTRUCT','%1_display','maxBattleMembers','Game_Party_removeActor','ShowCostForGuard','textSizeEx','removeActionFusionIngredients','updateGraphic','lineHeight','_backgroundSprite','Game_BattlerBase_hide','MaxActionsDefault','predictedBravePointCost','hideBraveTrait','BravePointPredictedCost','MaxVertSprites','contents','96262VjQigp','setAttack','_windowLayer','MaxBravePoints','version','_blendColor','shift','Game_Battler_performCollapse','canBrave','destroyBTBActionCounters','registerCommand','3065NbKvBP','isTpb','CostPosition','NeutralColor','cannotFusionNotetagBTB','_targetIndex','textWidth','defaultPosition','Game_Action_setItem','_homeY','_graphicEnemy','_graphicType','Game_Action_speed','ARRAYEVAL','STR','trim','windowRect','ShowFacesListStyle','createBackgroundSprite','isAlive','loseBravePoints','Enemy-%1-%2','checkTargetPositions','Enemy','updateVisibility','bitmapWidth','EnemyBattlerFaceIndex','drawText','getSkillIdWithName','SpriteThin','JsBravePointsUser','center','Scene_Battle_onDisabledPartyCommandSelection','loadSvEnemy','Window_ActorCommand_addGuardCommand','process_VisuMZ_BattleSystemBTB_JS','drawTextEx','substring','hasSvBattler','_btbSkillStrictFusion','FaceName','_plural','bravePointsCost','BTB_MAX_ACTIONS_DEFAULT','EVAL','process_VisuMZ_BattleSystemBTB','Window_Base_drawItemNumber','waitForAnimation','makeCommandList','makeActionOrders','subject','drawItemNumber','canUse','allowRandomSpeed','setSkill','calculateTargetPositions','RepositionTopHelpX','_guardUnleash','%1BorderColor','BraveAnimationID','SubjectDistance','bitmapHeight','showBraveAnimationBTB','FusionFlex','btbBraveCommand','updateGraphicHue','setGuard','optDisplayTp','parse','currentSymbol','_subject','height','processActionFusionsBTB','checkActionsBTB','ActorBattlerIcon','RepositionLogWindow','clearActions','isSideView','btbActionCurrent','createBattlerRect','BTB_MAX_BRAVEPOINTS_DEFAULT','showBravePoints','createActorCommandWindowBTB','EnemyMultiAction','makeMultiActionsBTB','EnemyBattlerDrawLetter','Actor','ShowMarkerBg','BravePointBattleStart','bravePoints','Window_BattleLog_startAction','fontFace','update','btbMatchesCurrentFusionAction','children','battleSys','%1SystemBorder','_scrollX','updateSelectionEffect','1590410LRJBCq','addChild','round','getStateTooltipBattler','ARRAYJSON','constructor','makeAdditionalSkillCostText','Show_0_BP_Cost','createTurnOrderBTBGraphicIconIndex','battleLayoutStyle','Parse_Notetags_BravePointsUserJS','isSceneBattle','BattleLayout','onDisabledPartyCommandSelection','Window_Selectable_select','canProcessActionFusionsBTB','applyBattleSystemBTBUserEffect','Window_Selectable_cursorPagedown','_turnOrderInnerSprite','ARRAYFUNC','createTurnOrderBTBGraphicFaceIndex','predictedBravePoints','1299620pMnewY','PositiveColor','clearRect','initBattleSystemBTB','isBattleItemWindowBTB','attack','EnemyBattlerFontSize','FUNC','createAllWindows','updateBattleContainerOrder','slice','ceil','loadSvActor','MaxHorzSprites','BattleManager_battleSys','BraveShortcuts','_btbTurnOrderVisible','FaceIndex','ShowEnemyBrave','Game_Actor_makeActions','useItem','left','startTurn','TurnOrderBTBGraphicIconIndex','singleSkill','btbBravePointsIcon','modifyBTBActionCounterSprite','updateLetter','padding','anchor','Window_Base_close','isInputting','CommandName','repositionLogWindowBTB','Scene_Battle_createAllWindows','test','1oLODVO','\x5cI[%1]','getColor','svactor','changeEnemyGraphicBitmap','_scene','drawItemStatusListStyle','%1_offsetX','isItem','EnemyBattlerFaceName','bitmap','btbParseFusionData','includes','removeActor','format','Game_BattlerBase_canInput','BravePointCost','4287712cEQOXp','ConvertParams','battleEnd','_weapons','TurnOrderBTBGraphicFaceName','isActor','Window_ActorCommand_makeCommandList','STRUCT','TurnOrderBTBGraphicFaceIndex','cursorPageup','_actorCommandWindow','setItem','makeSpeed','allBattleMembers','btbActionSlot','getOffsetY_BTB','width','fillRect','applyItemUserEffect','_containerWidth','198ciTFnU','BravePointSkillCost','setBattleSystemBTBTurnOrderVisible','payBravePointsCost','isSkipPartyCommandWindow','_fadeDuration','WaitFrames','refreshStatusBTB','resetFontSettings','actor','Game_Battler_useItem','clearTurnOrderBTBGraphics','BTB','hide','appear','_positionTargetY','blt','BraveAnimation','_turnOrderContainer','filter','ParseItemNotetags','_isAlive','splice','calcRegenBravePoints','Settings','NUM','modifyBTBActionCounterSprite_Fallback','_position','Armor-%1-%2','Window_BattleStatus_drawItemStatusXPStyle','Game_BattlerBase_canUse','_actionBattlers','isAppeared','isHorz','canAddBraveCommand','commandCancelBTB','_graphicIconIndex','iconHeight','canInput','BattleSystemBTB','onDatabaseLoaded','map','createTurnOrderBTBGraphicFaceName','setActionFusionBTB','BTB_Help','getChildIndex','getTotalActionFusionRecipes','_armors','_graphicFaceName','_btbItemStrictFusion','makeAdditionalCostTextBTB','updateTurnOrder','addGuardCommand','drawItemNumberBTB','isBattleSystemBTBTurnOrderVisible','_bypassAiValidCheck','ItemQuantityFmt','DisplayOffsetX','drawItemStatusXPStyle','BravePointStartFavor','traitObjects','max','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','processUpdateGraphic','VisuMZ_0_CoreEngine','9lGhANn','createBattlerSprites','createChildren','split','_actions','canActionFusionWithBTB','EnableFusion','JSON','addInnerChild','addChildAt','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','createKeyJS','initMembers','151716zVPeBW','#000000','BravePointAlterUser','compareBattlerSprites','cursorPagedown','createBTBActionCounters','loadSystem','floor','Weapon-%1-%2','face','BattleManager_isTurnBased','recalculateHome','Window','refresh','Game_Unit_makeActions','onTurnEndBTB','ParseSkillNotetags','clamp','reduceBrave','251992TlECJt','call','addCommand','makeActionTimes','fontSize','BtbTurnOrderActorIcon','applyItemBattleSystemBTBUserEffect','_graphicSprite','exit','applyBattleItemWindowBTB','Game_System_initialize','isTurnBased','BattleManager_startTurn','BTB_MIN_BRAVEPOINTS_HARD_CAP','_fullWidth','description','_items','BattleManager_isTpb','OrderDirection','push','DisplayPosition','addLoadListener','%1-%2','BorderThickness','cancel','min','select','BtbTurnOrderActorFace','maxBraveActions','_targetHomeX','btbPayItemFusionCosts','MinBravePoints','setBlendColor','BravePointStartNeutral','RepositionTopForHelp','EnemyActionFusions','top','%1AnimationID','getActionFusionRecipeItems','formFlexCombo','indexOf','_scrollY','_helpWindow','_targetHomeY','changeIconGraphicBitmap','_homeDuration','queueBraveAnimationsBTB','Game_Battler_onBattleStart','minBravePoints','Actor-%1-%2','onTurnEnd','ARRAYSTR','MaxActionsHardCap','BattleCore','_isBattleOver','skillCostSeparator','EnemyBattlerFontFace','currentExt','regenerateBravePoints','_ogWindowLayerX','right','updatePosition','FusionStrict','IconIndex','some','canGuard','match','isSkill','mainSprite','toUpperCase','updateHomePosition','commandCancel','guardSkillId','mainFontFace','ScreenBuffer','_btbTurnOrderFaceIndex','_statusWindow','createInitialPositions','speed','BtbTurnOrderClearActorGraphic','BattleManager_startAction','btbBravePointsAbbr','_btbItemFlexFusion','BTB_MAX_BRAVEPOINTS_HARD_CAP','createActorCommandWindow','Window_BattleStatus_drawItemStatusListStyle','svActorHorzCells','item','prototype','isUsePageUpDnShortcutBTB','JsBravePointsTarget','boxHeight','TurnOrderBTBGraphicType','onBattleStart','Show_1_BP_Cost','setHue','_graphicFaceIndex','bind','getBattleSystem','createLetterSprite','CancelAnimationID','faceHeight','svActorVertCells','RepositionTopHelpY','containerPosition','IconSet','setBravePoints','_positionDuration','name','changeFaceGraphicBitmap','itemRect','_graphicSv','startActionBTB','Item-%1-%2','close','getItemIdWithName','CannotFusion','Scene_Boot_onDatabaseLoaded','EnemyBattlerIcon','%1_align','createTurnOrderBTBGraphicType','BravePointSetUser','canPayActionFusionCombination'];_0x2b7b=function(){return _0x2446d1;};return _0x2b7b();}function Window_BTB_TurnOrder(){const _0x3a6b2f=_0x5fdf60;this[_0x3a6b2f(0x225)](...arguments);}Window_BTB_TurnOrder[_0x5fdf60(0x1a4)]=Object['create'](Window_Base['prototype']),Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x2f1)]=Window_BTB_TurnOrder,Window_BTB_TurnOrder['Settings']=VisuMZ[_0x5fdf60(0x112)][_0x5fdf60(0x103)]['TurnOrder'],Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x225)]=function(){const _0x5f5123=_0x5fdf60,_0x4d15cf=this[_0x5f5123(0x299)]();this['initHomePositions'](_0x4d15cf),Window_Base[_0x5f5123(0x1a4)]['initialize'][_0x5f5123(0x14d)](this,_0x4d15cf),this[_0x5f5123(0x12d)](),this['updateVisibility'](),this['opacity']=0x0;},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x299)]=function(){const _0x13c735=_0x5fdf60;return this['createBattlerRect']($gameParty[_0x13c735(0x26f)](),0x9,!![]);},Window_BTB_TurnOrder['prototype'][_0x5fdf60(0x261)]=function(_0x21c2a9){const _0x26fa62=_0x5fdf60;this[_0x26fa62(0x169)]=this[_0x26fa62(0x1e7)]=_0x21c2a9['x'],this[_0x26fa62(0x177)]=this[_0x26fa62(0x292)]=_0x21c2a9['y'],this[_0x26fa62(0x15a)]=_0x21c2a9[_0x26fa62(0xe7)],this[_0x26fa62(0x24b)]=_0x21c2a9[_0x26fa62(0x2d0)],this['_homeDuration']=0x0;},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x2d8)]=function(_0x3f69ec,_0x12981e,_0x1ff46f){const _0x8cb795=_0x5fdf60,_0x3d819d=Window_BTB_TurnOrder[_0x8cb795(0x103)],_0x5490cd=this[_0x8cb795(0x10c)]()?_0x3d819d[_0x8cb795(0x30f)]:_0x3d819d[_0x8cb795(0x27c)],_0x5c9859=Math[_0x8cb795(0x165)](_0x5490cd,_0x3f69ec+_0x12981e),_0x4ec547=SceneManager['_scene'][_0x8cb795(0x198)]['height'],_0x135399=SceneManager['_scene'][_0x8cb795(0x176)]['height'],_0x353948=_0x3d819d[_0x8cb795(0x2c5)],_0x3b6cdd=Graphics[_0x8cb795(0x2d0)]-_0x4ec547-_0x135399;let _0x3c069a=0x0,_0x5ed895=0x0,_0x56fb92=0x0,_0xb30e2d=0x0;switch(_0x3d819d[_0x8cb795(0x160)]){case _0x8cb795(0x170):_0x3c069a=_0x3d819d[_0x8cb795(0x2a6)]*_0x5c9859+_0x353948,_0x5ed895=_0x3d819d[_0x8cb795(0x232)],_0x56fb92=Math[_0x8cb795(0x30d)]((Graphics['width']-_0x3c069a)/0x2),_0xb30e2d=_0x3d819d['ScreenBuffer'];break;case _0x8cb795(0x1d6):_0x3c069a=_0x3d819d[_0x8cb795(0x2a6)]*_0x5c9859+_0x353948,_0x5ed895=_0x3d819d[_0x8cb795(0x232)],_0x56fb92=Math[_0x8cb795(0x30d)]((Graphics['width']-_0x3c069a)/0x2),_0xb30e2d=Graphics[_0x8cb795(0x2d0)]-_0x4ec547-_0x5ed895-_0x3d819d[_0x8cb795(0x196)];break;case _0x8cb795(0x317):_0x3c069a=_0x3d819d[_0x8cb795(0x232)],_0x5ed895=_0x3d819d[_0x8cb795(0x2a6)]*_0x5c9859+_0x353948,_0x56fb92=_0x3d819d[_0x8cb795(0x196)],_0xb30e2d=Math[_0x8cb795(0x30d)]((_0x3b6cdd-_0x5ed895)/0x2),_0xb30e2d+=_0x135399;break;case _0x8cb795(0x188):_0x3c069a=_0x3d819d[_0x8cb795(0x232)],_0x5ed895=_0x3d819d[_0x8cb795(0x2a6)]*_0x5c9859+_0x353948,_0x56fb92=Graphics[_0x8cb795(0xe7)]-_0x3c069a-_0x3d819d[_0x8cb795(0x196)],_0xb30e2d=Math[_0x8cb795(0x30d)]((_0x3b6cdd-_0x5ed895)/0x2),_0xb30e2d+=_0x135399;break;}if(!_0x1ff46f){const _0x32f3cf=Window_BTB_TurnOrder[_0x8cb795(0x103)]['OrderDirection'];let _0x577789=Math[_0x8cb795(0x165)](_0x5490cd,Math[_0x8cb795(0x165)]($gameParty[_0x8cb795(0x26f)]()+0x8)-_0x5c9859);switch(_0x3d819d['DisplayPosition']){case _0x8cb795(0x170):case _0x8cb795(0x1d6):_0x32f3cf&&(_0x56fb92-=_0x577789*_0x3d819d[_0x8cb795(0x2a6)]);break;}}return _0x56fb92+=_0x3d819d[_0x8cb795(0x124)],_0xb30e2d+=_0x3d819d['DisplayOffsetY'],new Rectangle(_0x56fb92,_0xb30e2d,_0x3c069a,_0x5ed895);},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x246)]=function(){const _0x4d3f2e=_0x5fdf60;this[_0x4d3f2e(0x31e)]=0x0;},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x10c)]=function(){const _0x3866cf=_0x5fdf60,_0x2d136e=Window_BTB_TurnOrder['Settings'],_0x46c388=[_0x3866cf(0x170),_0x3866cf(0x1d6)][_0x3866cf(0xd2)](_0x2d136e['DisplayPosition']);return _0x46c388;},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)]['createBattlerSprites']=function(){const _0x2bb49a=_0x5fdf60;this[_0x2bb49a(0x2fe)]=new Sprite(),this[_0x2bb49a(0x134)](this[_0x2bb49a(0x2fe)]),this[_0x2bb49a(0xfd)]=[];for(let _0x468105=0x0;_0x468105<$gameParty[_0x2bb49a(0x26f)]();_0x468105++){const _0x3125d2=new Sprite_BTB_TurnOrder_Battler($gameParty,_0x468105);this['_turnOrderInnerSprite'][_0x2bb49a(0x2ed)](_0x3125d2),this[_0x2bb49a(0xfd)]['push'](_0x3125d2);}for(let _0x62ade0=0x0;_0x62ade0<$gameTroop[_0x2bb49a(0x1f6)]()[_0x2bb49a(0x26b)];_0x62ade0++){const _0x187a43=new Sprite_BTB_TurnOrder_Battler($gameTroop,_0x62ade0);this[_0x2bb49a(0x2fe)][_0x2bb49a(0x2ed)](_0x187a43),this[_0x2bb49a(0xfd)][_0x2bb49a(0x15f)](_0x187a43);}},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x2e5)]=function(){const _0x2ed24a=_0x5fdf60;Window_Base['prototype'][_0x2ed24a(0x2e5)][_0x2ed24a(0x14d)](this),this[_0x2ed24a(0x192)](),this[_0x2ed24a(0x189)](),this[_0x2ed24a(0x212)](),this[_0x2ed24a(0x30b)](),this[_0x2ed24a(0x2a1)]();},Window_BTB_TurnOrder['prototype'][_0x5fdf60(0x192)]=function(){const _0x485f04=_0x5fdf60;if(this[_0x485f04(0x179)]>0x0){const _0x488052=this[_0x485f04(0x179)];this[_0x485f04(0x1e7)]=(this[_0x485f04(0x1e7)]*(_0x488052-0x1)+this[_0x485f04(0x169)])/_0x488052,this[_0x485f04(0x292)]=(this[_0x485f04(0x292)]*(_0x488052-0x1)+this[_0x485f04(0x177)])/_0x488052,this['_homeDuration']--,this['_homeDuration']<=0x0&&(this['_homeX']=this[_0x485f04(0x169)],this[_0x485f04(0x292)]=this[_0x485f04(0x177)]);}},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x189)]=function(){const _0x2d339c=_0x5fdf60,_0x3d5cca=Window_BTB_TurnOrder[_0x2d339c(0x103)];if(_0x3d5cca[_0x2d339c(0x160)]!==_0x2d339c(0x170))return;if(!_0x3d5cca[_0x2d339c(0x16e)])return;const _0x23129a=SceneManager[_0x2d339c(0xcb)]['_helpWindow'];if(!_0x23129a)return;_0x23129a['visible']?(this['x']=this[_0x2d339c(0x1e7)]+(_0x3d5cca[_0x2d339c(0x2c1)]||0x0),this['y']=this[_0x2d339c(0x292)]+(_0x3d5cca[_0x2d339c(0x1b3)]||0x0)):(this['x']=this[_0x2d339c(0x1e7)],this['y']=this[_0x2d339c(0x292)]);const _0x22ae47=SceneManager[_0x2d339c(0xcb)]['_windowLayer'];this[_0x2d339c(0x187)]===undefined&&(this[_0x2d339c(0x187)]=Math['round']((Graphics[_0x2d339c(0xe7)]-Math[_0x2d339c(0x165)](Graphics[_0x2d339c(0x204)],_0x22ae47['width']))/0x2),this[_0x2d339c(0x20a)]=Math['round']((Graphics[_0x2d339c(0x2d0)]-Math[_0x2d339c(0x165)](Graphics[_0x2d339c(0x1a7)],_0x22ae47['height']))/0x2)),this['x']+=_0x22ae47['x']-this['_ogWindowLayerX'],this['y']+=_0x22ae47['y']-this[_0x2d339c(0x20a)];},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)]['updateSidePosition']=function(){const _0x52fcc1=_0x5fdf60,_0x5449a5=Window_BTB_TurnOrder[_0x52fcc1(0x103)];if([_0x52fcc1(0x170)][_0x52fcc1(0xd2)](_0x5449a5[_0x52fcc1(0x160)]))return;this['x']=this['_homeX'],this['y']=this[_0x52fcc1(0x292)];const _0x524c6b=SceneManager[_0x52fcc1(0xcb)][_0x52fcc1(0x280)];this['x']+=_0x524c6b['x'],this['y']+=_0x524c6b['y'];},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x30b)]=function(){const _0x2c5976=_0x5fdf60;if(!this[_0x2c5976(0x2fe)])return;const _0x4f7c72=this[_0x2c5976(0x2fe)][_0x2c5976(0x2e7)];if(!_0x4f7c72)return;_0x4f7c72[_0x2c5976(0x208)](this[_0x2c5976(0x13c)][_0x2c5976(0x1ad)](this));},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x13c)]=function(_0x1d9f70,_0x56085c){const _0x322913=_0x5fdf60,_0x5f2e46=this[_0x322913(0x10c)](),_0xd30d53=Window_BTB_TurnOrder[_0x322913(0x103)]['OrderDirection'];if(_0x5f2e46&&!_0xd30d53)return _0x1d9f70['x']-_0x56085c['x'];else{if(_0x5f2e46&&_0xd30d53)return _0x56085c['x']-_0x1d9f70['x'];else{if(!_0x5f2e46&&_0xd30d53)return _0x1d9f70['y']-_0x56085c['y'];else{if(!_0x5f2e46&&!_0xd30d53)return _0x56085c['y']-_0x1d9f70['y'];}}}},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x2a1)]=function(){const _0xf9667c=_0x5fdf60;this['visible']=$gameSystem[_0xf9667c(0x121)]();},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x11e)]=function(_0x31f0cd){const _0xf53c69=_0x5fdf60;this[_0xf53c69(0xfd)][_0xf53c69(0x208)]((_0x19f59c,_0x1719d7)=>{return _0x19f59c['containerPosition']()-_0x1719d7['containerPosition']();}),this[_0xf53c69(0x144)]();if(!_0x31f0cd)return;for(const _0x201f72 of this[_0xf53c69(0xfd)]){if(!_0x201f72)continue;_0x201f72['update'](),_0x201f72[_0xf53c69(0x1b7)]=0x0;}},Window_BTB_TurnOrder[_0x5fdf60(0x1a4)][_0x5fdf60(0x144)]=function(){const _0x2eefe1=_0x5fdf60;if(!this[_0x2eefe1(0x10c)]())return;const _0x1a4097=VisuMZ[_0x2eefe1(0x112)]['Settings'][_0x2eefe1(0x1f3)];if(!_0x1a4097[_0x2eefe1(0x234)])return;const _0x3100d4=$gameParty['members']()[_0x2eefe1(0xfe)](_0x109b9c=>_0x109b9c&&_0x109b9c[_0x2eefe1(0x29c)]()&&_0x109b9c['isAppeared']())[_0x2eefe1(0x26b)],_0x23665c=$gameTroop[_0x2eefe1(0x1f6)]()[_0x2eefe1(0xfe)](_0x328556=>_0x328556&&_0x328556[_0x2eefe1(0x29c)]()&&_0x328556[_0x2eefe1(0x10b)]())[_0x2eefe1(0x26b)],_0x2dd9e4=this[_0x2eefe1(0x2d8)](_0x3100d4,_0x23665c);this[_0x2eefe1(0x169)]=_0x2dd9e4['x'],this['_targetHomeY']=_0x2dd9e4['y'],(this['_targetHomeX']!==this[_0x2eefe1(0x1e7)]||this[_0x2eefe1(0x177)]!==this['_homeY'])&&(this[_0x2eefe1(0x179)]=_0x1a4097['UpdateFrames']);};