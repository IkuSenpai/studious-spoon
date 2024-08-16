//=============================================================================
// VisuStella MZ - Battle System - PTB - Press Turn Battle
// VisuMZ_2_BattleSystemPTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemPTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemPTB = VisuMZ.BattleSystemPTB || {};
VisuMZ.BattleSystemPTB.version = 1.13;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.13] [BattleSystemPTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_PTB_VisuStella_MZ
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
 * Press Turn Battle (PTB) is a team-based battle system made for RPG Maker MZ
 * where the teams for actors and enemies take turns attacking one another as
 * a whole, consuming press actions in the process. When press actions have
 * been emptied, the turn switches over to the opposite team and it repeats.
 * Depending on the results of actions, Press Actions may consume a full action
 * or be converted into a half action, allowing for more actions per turn. This
 * is a battle system that rewards skillful play and punishes bad strategies.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "ptb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actor and enemy teams take turns attacking each other as a whole.
 * * Press action counts are given to each team at the start of each turn to
 *   utilize individual actions for.
 * * Good strategies such as hitting weaknesses, guarding, or landing critical
 *   hits will convert a full action into a half action, allowing for more
 *   actions to be used per turn.
 * * Bad strategies such as hitting resistances, missing attacks, or getting an
 *   attack reflected will punish the team by removing press actions available.
 * * A system of scenarios, outcomes, with varying priority levels will allow
 *   you to fine tune the results of an action to your liking.
 * * Alter the mechanics of the Battle System PTB to your liking through the
 *   Plugin Parameters.
 * * A Press Count Display is shown for each side to relay information to the
 *   player about the current state of each turn.
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
 * Surprise Attacks and Preemptive Bonuses
 * 
 * Due to the nature of a team-based battle system, surprise attacks and
 * preemptive bonuses no longer prevent the other team from being able to act
 * for a turn as that gives the initiating team too much advantage. Instead,
 * a surprise attack means the enemy team will always start first for each turn
 * while a preemptive bonus means the actor team will always start first for
 * each turn.
 * 
 * ---
 * 
 * Agility and Speed
 * 
 * When there is no surprise attack or preemptive bonus, aka a neutral battle
 * initiative, then the team that goes first is determined by their Agility
 * value at the start of battle (unless determined otherwise through the Plugin
 * Parameters).
 * 
 * As there is no free-range switching like with other team-based battle
 * systems, the turn order in which the actors can perform actions will be
 * based on their agility values. Battlers with higher AGI will go earlier
 * while those with lower AGI go later. As of the v1.11 update, this can now be
 * turned on/off and have AGI go in order based on party position. This can be
 * altered in the Plugin Parameters' Mechanics section.
 * 
 * Agility, however, can influence Press Counts through buffs and debuffs if
 * enabled through the Plugin Parameters. Each stack of Agility buffs will
 * raise the Press Count for a team while each stack of Agility debuffs will
 * decrease them for subsequent turns.
 * 
 * ---
 * 
 * Action Orders
 * 
 * As team-based battle systems always have teams go between each other, the
 * standard action orders seen for turn-based and tick-based battle systems no
 * longer exist. However, in the event the actor team has berserk, confused, or
 * autobattlers, the actions will be performed in the following order:
 * 
 * 1. Berserk, confused, and auto battlers go first.
 * 2. If any actions are left, inputtable actors go next.
 * 3. If any actions are left, but there are no inputtable actors, berserk,
 *    confused, and auto battlers use up the remaining actions.
 * 4. Switch to the next team.
 * 
 * For enemy teams, enemies will always go in order from highest-to-lowest AGI
 * for both front view or right-to-left for sideview. If there are actions
 * left, the enemy team will cycle back to the first acting enemy.
 * 
 * ---
 *
 * Turn Structure
 * 
 * Each battle turn is dedicated to one team or the other. You need to design
 * your turns with this in mind. When one team finishes its actions, the next
 * turn will have the other team perform theirs.
 * 
 * As a result, both teams will not benefit from their turn end activities such
 * as regeneration at the end of each battle turn. Instead, they will only
 * occur at the end of their own respective turns.
 * 
 * However, for states and buffs, this is slightly different. States and buffs
 * update at the end of the opposing team's turn. This is so that 1 turn states
 * like Guard will last until the opponent's turn is over instead of being over
 * immediately after the player's turn ends (rendering the effect useless).
 * 
 * The state and buff turn updates can be disabled in the Plugin Parameters.
 * However, the durations must be accounted for if disabled (ie. making Guard
 * last two turns instead of 1).
 * 
 * ---
 * 
 * Turn Count for Enemies
 * 
 * Because the turn structure is changed, enemies will now have a different
 * turn count structure. Their turn count only raises when the enemy troops
 * have a turn instead of every battle turn. This means if an enemy skill page
 * has a Turn Count condition of 3, it'll mean when the enemy team has gotten
 * 3 turns, which will usually be around turn 6 for the whole battle.
 * 
 * ---
 * 
 * ============================================================================
 * How Press Mechanics Work
 * ============================================================================
 * 
 * This section will explain how the Press Mechanics work.
 * 
 * ---
 * 
 * === Press Action Counts ===
 * 
 * Each turn, the active team is given a number of actions they can perform.
 * These actions can be divided up into full actions or half actions. Each team
 * member that can act will generate a full action at the start of each turn.
 * 
 * Attacking, defending, skill usage, or item usage will consume actions. If
 * there are half actions available, those will be consumed first. Otherwise,
 * full actions will be consumed.
 * 
 * Once all full and half actions are consumed, the team's turn ends and it
 * becomes the opposing team's turn to attack.
 * 
 * ---
 * 
 * === Scenarios ===
 * 
 * Here are the various scenarios on what will happen. This is assuming that
 * none of the settings in the Plugin Parameters have changed in regards to
 * these scenarios.
 * 
 * If a scenario's outcome becomes permanent, it can no longer be changed from
 * any other scenarios that happen later. Otherwise, the last scenario that
 * happens will take priority.
 * 
 * Scenarios have priority levels. Whenever a scenario outcome with a higher
 * priority occurs, that outcome's effects will take over. Priorities of equal
 * or lower level will not override the current outcome settings.
 * 
 * Below are the scenarios listed from lowest to highest priority level:
 * 
 * ---
 * 
 * Scenario: Performing any action with a "normal" outcome (hit) and dealing
 * damage without hitting any weaknesses, resistances, immunities, absorptions,
 * or reflections.
 * 
 * Outcome: (Consume) If there is a half action, consume the half action.
 * Otherwise, consume one full action if there is no half action.
 * 
 * Priority: 0
 * 
 * ---
 * 
 * Scenario: Performing an action that inflicts a state. This can be tricky.
 * The state effect can miss and still be considered "normal", but if the
 * action itself misses, this scenario is no longer valid.
 * 
 * Outcome: (Consume) If there is a half action, consume the half action.
 * Otherwise, consume one full action if there is no half action.
 * 
 * Priority: 0
 * 
 * ---
 * 
 * Scenario: An action lands a critical hit!
 * 
 * Outcome: (Convert) If there is a full action, convert that full action into
 * a half action. Otherwise, consume the half action if no full action exists.
 * This is a temporary outcome by will override a "normal" outcome.
 * 
 * Priority: 50
 * 
 * ---
 * 
 * Scenario: An action deals elemental damage and hits a weakness!
 * 
 * Outcome: (Convert) If there is a full action, convert that full action into
 * a half action. Otherwise, consume the half action if no full action exists.
 * This is a temporary outcome by will override a "normal" outcome.
 * 
 * Priority: 60
 * 
 * ---
 * 
 * Scenario: An action completely misses. This does not refer to a state effect
 * missing, but instead, the action's own success rate failing the dice roll or
 * an enemy evades it.
 * 
 * Outcome: (Consume) If there are 2 half actions, consume both half actions.
 * If there is a half and full action remaining, consume one of each. Otherwise
 * consume two full actions. This outcome becomes the permanent outcome.
 * 
 * Priority: 80
 * 
 * ---
 * 
 * Scenario: An action deals elemental damage and hits a resistance!
 * 
 * Outcome: (Consume) If there are 2 half actions, consume both half actions.
 * If there is a half and full action remaining, consume one of each. Otherwise
 * consume two full actions. This outcome becomes the permanent outcome.
 * 
 * Priority: 70
 * 
 * ---
 * 
 * Scenario: An action tries to do elemental damage but hits an immunity!
 * 
 * Outcome: (Consume) Consumes all half actions and full actions. This outcome
 * becomes the permanent outcome.
 * 
 * Priority: 90
 * 
 * ---
 * 
 * Scenario: An action tries to do elemental damage but is absorbed!
 * 
 * Outcome: (Consume) Consumes all half actions and full actions. This outcome
 * becomes the permanent outcome.
 * 
 * Priority: 90
 * 
 * ---
 * 
 * Scenario: An action tries to do elemental damage but is reflected!
 * 
 * Outcome: (Consume) Consumes all half actions and full actions. This outcome
 * becomes the permanent outcome.
 * 
 * Priority: 90
 * 
 * ---
 * 
 * Scenario: Using the Guard action.
 * 
 * Outcome: (Compress) If there is a half action, consume the half action.
 * Otherwise, convert one full action into a half action. This outcome becomes
 * the permanent outcome.
 * 
 * Priority: 100
 * 
 * ---
 * 
 * As you can see, the scenario and outcome mechanic will favor punishment over
 * reward, but will also favor reward over normal. The priority system is set
 * up so that certain scenarios will not undo others. For example, a multi-hit
 * attack that lands a critical hit but also a miss will still favor the miss.
 * 
 * These settings can be altered in the Plugin Parameters if they're not to
 * your liking.
 * 
 * ---
 * 
 * === Post-Gains ===
 * 
 * Once changes are made to the full actions and half actions, it's time to end
 * the action. However, not before some post-gains to be made. Some notetag
 * effects allow actions to gain full actions and half actions after the fact.
 * 
 * As scenario outcomes cannot make turns go into the negatives (it always caps
 * at zero), any post-gains made will always prolong a turn.
 * 
 * For example, let's assume there is a skill called "Phoenix Eye". It consumes
 * an action but will grant 3 Half Actions.
 * 
 * In a scenario where a team has only a half action or full action left,
 * "Phoenix Eye" will consume that action and return 3 Half Actions, still
 * allowing the team to continue acting for the remainder of that turn.
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
 * === General PTB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <PTB Help>
 *  description
 *  description
 * </PTB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under PTB.
 * - This is primarily used if the skill behaves differently in PTB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to PTB.
 *
 * ---
 * 
 * === Press Action Cost-Related Notetags ===
 * 
 * ---
 *
 * <PTB Press Consume: x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the PTB press action cost of this skill/item to consume 'x'.
 * - Replace 'x' with a number value representing the press action cost
 *   required to perform the skill.
 * - When consuming press actions, it will consume half actions before full
 *   actions.
 * - The consume/convert type can be altered by the skill results.
 *
 * ---
 *
 * <PTB Press Convert: x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the PTB press action cost of this skill/item to convert 'x'.
 * - Replace 'x' with a number value representing the press action cost
 *   required to perform the skill.
 * - When converting press actions, it will convert full actions into half
 *   actions. If there are no full actions to convert, it will instead consume
 *   half actions.
 * - The consume/convert type can be altered by the skill results.
 *
 * ---
 *
 * <PTB Press Compress: x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the PTB press action cost of this skill/item to compress 'x'.
 * - Replace 'x' with a number value representing the press action cost
 *   required to perform the skill.
 * - When converting press actions, it will consume any half actions. If there
 *   are no half actions, it will convert full actions into half actions.
 * - The consume/convert type can be altered by the skill results.
 *
 * ---
 *
 * <PTB Press Force Consume: x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the PTB press action cost of this skill/item to consume 'x'.
 * - Replace 'x' with a number value representing the press action cost
 *   required to perform the skill.
 * - When consuming press actions, it will consume half actions before full
 *   actions.
 * - The consume/convert type CANNOT be altered by the skill results.
 *
 * ---
 *
 * <PTB Press Force Convert: x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the PTB press action cost of this skill/item to convert 'x'.
 * - Replace 'x' with a number value representing the press action cost
 *   required to perform the skill.
 * - When converting press actions, it will convert full actions into half
 *   actions. If there are no full actions to convert, it will instead consume
 *   half actions.
 * - The consume/convert type CANNOT be altered by the skill results.
 *
 * ---
 *
 * <PTB Press Force Compress: x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the PTB press action cost of this skill/item to compress 'x'.
 * - Replace 'x' with a number value representing the press action cost
 *   required to perform the skill.
 * - When converting press actions, it will consume any half actions. If there
 *   are no half actions, it will convert full actions into half actions.
 * - The consume/convert type CANNOT be altered by the skill results.
 *
 * ---
 *
 * <PTB Hide Press Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the PTB press cost for this skill/item hidden regardless of Plugin
 *   Parameter settings.
 *
 * ---
 *
 * <PTB Show Press Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the PTB press cost for this skill/item visible regardless of Plugin
 *   Parameter settings.
 *
 * ---
 * 
 * === Post Gain-Related Notetags ===
 * 
 * ---
 * 
 * <PTB Post-Gain Full Actions: +x>
 * <PTB Post-Lose Full Actions: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Causes the user's team to gain full actions AFTER paying the action costs.
 * - Replace 'x' with a number representing the amount of full actions to gain
 *   or lose.
 * 
 * ---
 * 
 * <PTB Post-Gain Half Actions: +x>
 * <PTB Post-Lose Half Actions: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Causes the user's team to gain half actions AFTER paying the action costs.
 * - Replace 'x' with a number representing the amount of half actions to gain
 *   or lose.
 * 
 * ---
 * 
 * === Mechanics-Related Notetags ===
 * 
 * ---
 *
 * <PTB Pass Turn>
 *
 * - Used for: Skill, Item Notetags
 * - If a battler uses this skill/item, then even if there are actions left for
 *   the team to perform, that battler would no longer be able to input as they
 *   have already passed their turn.
 *
 * ---
 *
 * <PTB Full Actions: +x>
 * <PTB Full Actions: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Battlers associated with these trait objects can increase or decrease the
 *   maximum number of full actions performed each turn.
 * - Replace 'x' with a number representing the increase or decrease in action
 *   count per turn.
 * - Depending on the Plugin Parameters, altering the max value can result in
 *   gaining or losing remaining actions for the current turn.
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
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: PTB Press Count Visibility
 * - Determine the visibility of the PTB Press Count Display.
 *
 *   Visibility:
 *   - Changes the visibility of the PTB Press Count Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Determines the general settings of the PTB Battle System. These settings
 * range from determining how the Press Count resources and costs are
 * displayed to the text that appear during team shifting.
 *
 * ---
 *
 * Press Counts
 * 
 *   Full Name:
 *   - What is the full name of "Press Counts" in your game?
 * 
 *   Abbreviation:
 *   - What is the abbreviation of "Press Counts" in your game?
 * 
 *   Cost Format:
 *   - How are Press Count costs displayed?
 *   - %1 - Cost, %2 - Abbr Text, %3 - Icon
 *
 * ---
 *
 * Icons
 * 
 *   Cost Icons
 * 
 *     Consume Icon:
 *     - What icon is used to represent consumed costs?
 * 
 *     Convert Icon:
 *     - What icon is used to represent converted costs?
 * 
 *     Compress Icon:
 *     - What icon is used to represent compressed costs?
 * 
 *   Actors
 * 
 *     Full Action Icon:
 *     - What icon is used to represent actor full actions?
 * 
 *     Half Action Icon:
 *     - What icon is used to represent actor half actions?
 * 
 *   Enemies
 * 
 *     Full Action Icon:
 *     - What icon is used to represent actor full actions?
 * 
 *     Half Action Icon:
 *     - What icon is used to represent actor half actions?
 * 
 *   Empty Action Icon:
 *   - What icon is used to represent empty actions?
 *
 * ---
 *
 * Team Shift
 * 
 *   Party's Turn:
 *   - Text that appears when it's the party's turn.
 *   - %1 - Party Name
 * 
 *   Enemy's Turn:
 *   - Text that appears when it's the enemy's turn.
 * 
 *   Wait Frames:
 *   - How many frames to wait in between team changes?
 *
 * ---
 *
 * Displayed Costs
 * 
 *   Cost Position Front?:
 *   - Put the action cost at the front of skill/item costs?
 * 
 *   Show Cost: Attack:
 *   - Show the action cost for the Attack command?
 * 
 *   Show Cost: Guard:
 *   - Show the action cost for the Guard command?
 * 
 *   Show Cost: 0 Action:
 *   - Show the action cost when the cost is 0 action?
 * 
 *   Show Cost: 1 Action:
 *   - Show the action cost when the cost is 1 action?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Determines the mechanics of the PTB Battle System. From here, you can
 * enable or disable core mechanics, determine how to determine turn advantage,
 * and how the various supporting mechanics operate.
 *
 * ---
 *
 * Main Mechanics
 * 
 *   AGI Turn Order?:
 *   - Determine if the battle turn flow will be based off AGI or not.
 * 
 *   Current Turn Revival Act?:
 *   - Allow revived actors to act the current turn they're revived?
 * 
 *   Guard > Pass Turn?:
 *   - Does guarding cause a battler to pass turn?
 * 
 *   Gain Differences?:
 *   - If the max Action Count for a team changes, gain the difference in
 *     value if positive?
 * 
 *   Lose Differences?:
 *   - If the max Action Count for a team changes, lose the difference in
 *     value if negative?
 * 
 *   State/Buff Updates:
 *   - If enabled, update state/buff turns only on opponent turns.
 *   - Otherwise, they occur every turn.
 *
 * ---
 *
 * Turn Advantage
 * 
 *   Neutral Advantage:
 *   - For a neutral advantage battle, what determines which team goes first?
 *     - Random - 50% chance on which team goes first
 *     - Player - Player's team always goes first.
 *     - Lowest AGI - Battler with lowest AGI's team goes first
 *     - Average AGI - Team with the highest average AGI goes first
 *     - Highest AGI - Battler with highest AGI's team goes first
 *     - Total AGI - Team with highest total AGI goes first
 *
 * ---
 *
 * Action Generation
 * 
 *   Base:
 *   - What is the starting base number of actions that are generated per
 *     battler each turn?
 * 
 *   AGI Buff Influence?:
 *   - Do AGI buffs give +1 for each stack?
 * 
 *   AGI Debuff Influence?:
 *   - Do AGI debuffs give -1 for each stack?
 * 
 *   Maximum Actions:
 *   - What is the absolute maximum number of actions a team can have
 *     each turn?
 * 
 *   Minimum Actions:
 *   - What is the bare minimum number of actions a team can have each turn?
 * 
 *   Allow Overflow?:
 *   - Allow current actions to overflow?
 *   - Or let them cap at the current team max?
 *
 * ---
 *
 * Default Press Costs
 * 
 *   Skills:
 * 
 *     Cost Type:
 *     - What is the default press cost type for skills?
 * 
 *     Cost Value:
 *     - What is the default press cost value for skills?
 * 
 *   Items:
 * 
 *     Cost Type:
 *     - What is the default press cost type for items?
 * 
 *     Cost Value:
 *     - What is the default press cost value for items?
 *
 * ============================================================================
 * Plugin Parameters: Press Mechanics
 * ============================================================================
 *
 * More indepth control over how the Press Count mechanics work for various
 * scenarios during battle.
 *
 * ---
 *
 * Guarding
 * 
 *   Alter Changeability:
 *   - Allow the cost type and value to be changeable?
 *     - Unchanged - Cost type is unchanged after this effect
 *     - Permanent - Cost type can no longer be changed after
 *     - Temporary - Cost type can still be changed after
 * 
 *   Alter Cost Type:
 *   - Change the cost type to this scenario.
 *   - Use 'Unchanged' for no changes.
 *     - Unchanged - No changes are made
 *     - Consume - Removes half, otherwise consumes full
 *     - Convert - Converts full => half, otherwise consumes half
 *     -Compress - Consumes half, otherwise converts full => half
 * 
 *   Alter Cost Value:
 *   - What is the default action cost for this scenario?
 * 
 *   Priority:
 *   - What is this scenario's priority? Scenario outcomes with equal or lower
 *     priorities cannot override types and costs.
 *
 * ---
 *
 * Miss an Attack
 * 
 *   Alter Changeability:
 *   - Allow the cost type and value to be changeable?
 *     - Unchanged - Cost type is unchanged after this effect
 *     - Permanent - Cost type can no longer be changed after
 *     - Temporary - Cost type can still be changed after
 * 
 *   Alter Cost Type:
 *   - Change the cost type to this scenario.
 *   - Use 'Unchanged' for no changes.
 *     - Unchanged - No changes are made
 *     - Consume - Removes half, otherwise consumes full
 *     - Convert - Converts full => half, otherwise consumes half
 *     -Compress - Consumes half, otherwise converts full => half
 * 
 *   Alter Cost Value:
 *   - What is the default action cost for this scenario?
 * 
 *   Priority:
 *   - What is this scenario's priority? Scenario outcomes with equal or lower
 *     priorities cannot override types and costs.
 *
 * ---
 *
 * Critical Hit!
 * 
 *   Alter Changeability:
 *   - Allow the cost type and value to be changeable?
 *     - Unchanged - Cost type is unchanged after this effect
 *     - Permanent - Cost type can no longer be changed after
 *     - Temporary - Cost type can still be changed after
 * 
 *   Alter Cost Type:
 *   - Change the cost type to this scenario.
 *   - Use 'Unchanged' for no changes.
 *     - Unchanged - No changes are made
 *     - Consume - Removes half, otherwise consumes full
 *     - Convert - Converts full => half, otherwise consumes half
 *     -Compress - Consumes half, otherwise converts full => half
 * 
 *   Alter Cost Value:
 *   - What is the default action cost for this scenario?
 * 
 *   Priority:
 *   - What is this scenario's priority? Scenario outcomes with equal or lower
 *     priorities cannot override types and costs.
 *
 * ---
 *
 * Elemental Resist!
 * 
 *   Maximum Rate:
 *   - What is the maximum elemental rate for an attack to be considered
 *     a resistance?
 * 
 *   Alter Changeability:
 *   - Allow the cost type and value to be changeable?
 *     - Unchanged - Cost type is unchanged after this effect
 *     - Permanent - Cost type can no longer be changed after
 *     - Temporary - Cost type can still be changed after
 * 
 *   Alter Cost Type:
 *   - Change the cost type to this scenario.
 *   - Use 'Unchanged' for no changes.
 *     - Unchanged - No changes are made
 *     - Consume - Removes half, otherwise consumes full
 *     - Convert - Converts full => half, otherwise consumes half
 *     -Compress - Consumes half, otherwise converts full => half
 * 
 *   Alter Cost Value:
 *   - What is the default action cost for this scenario?
 * 
 *   Priority:
 *   - What is this scenario's priority? Scenario outcomes with equal or lower
 *     priorities cannot override types and costs.
 *
 * ---
 *
 * Elemental Weakness!
 * 
 *   Minimum Rate:
 *   - What is the minimum elemental rate for an attack to be considered
 *     a weakness?
 * 
 *   Alter Changeability:
 *   - Allow the cost type and value to be changeable?
 *     - Unchanged - Cost type is unchanged after this effect
 *     - Permanent - Cost type can no longer be changed after
 *     - Temporary - Cost type can still be changed after
 * 
 *   Alter Cost Type:
 *   - Change the cost type to this scenario.
 *   - Use 'Unchanged' for no changes.
 *     - Unchanged - No changes are made
 *     - Consume - Removes half, otherwise consumes full
 *     - Convert - Converts full => half, otherwise consumes half
 *     -Compress - Consumes half, otherwise converts full => half
 * 
 *   Alter Cost Value:
 *   - What is the default action cost for this scenario?
 * 
 *   Priority:
 *   - What is this scenario's priority? Scenario outcomes with equal or lower
 *     priorities cannot override types and costs.
 *
 * ---
 *
 * Element Immunity!
 * 
 *   Alter Changeability:
 *   - Allow the cost type and value to be changeable?
 *     - Unchanged - Cost type is unchanged after this effect
 *     - Permanent - Cost type can no longer be changed after
 *     - Temporary - Cost type can still be changed after
 * 
 *   Alter Cost Type:
 *   - Change the cost type to this scenario.
 *   - Use 'Unchanged' for no changes.
 *     - Unchanged - No changes are made
 *     - Consume - Removes half, otherwise consumes full
 *     - Convert - Converts full => half, otherwise consumes half
 *     -Compress - Consumes half, otherwise converts full => half
 * 
 *   Alter Cost Value:
 *   - What is the default action cost for this scenario?
 * 
 *   Priority:
 *   - What is this scenario's priority? Scenario outcomes with equal or lower
 *     priorities cannot override types and costs.
 *
 * ---
 *
 * Absorb Element!
 * 
 *   Alter Changeability:
 *   - Allow the cost type and value to be changeable?
 *     - Unchanged - Cost type is unchanged after this effect
 *     - Permanent - Cost type can no longer be changed after
 *     - Temporary - Cost type can still be changed after
 * 
 *   Alter Cost Type:
 *   - Change the cost type to this scenario.
 *   - Use 'Unchanged' for no changes.
 *     - Unchanged - No changes are made
 *     - Consume - Removes half, otherwise consumes full
 *     - Convert - Converts full => half, otherwise consumes half
 *     -Compress - Consumes half, otherwise converts full => half
 * 
 *   Alter Cost Value:
 *   - What is the default action cost for this scenario?
 * 
 *   Priority:
 *   - What is this scenario's priority? Scenario outcomes with equal or lower
 *     priorities cannot override types and costs.
 *
 * ---
 *
 * Reflect Attack!
 * 
 *   Alter Changeability:
 *   - Allow the cost type and value to be changeable?
 *     - Unchanged - Cost type is unchanged after this effect
 *     - Permanent - Cost type can no longer be changed after
 *     - Temporary - Cost type can still be changed after
 * 
 *   Alter Cost Type:
 *   - Change the cost type to this scenario.
 *   - Use 'Unchanged' for no changes.
 *     - Unchanged - No changes are made
 *     - Consume - Removes half, otherwise consumes full
 *     - Convert - Converts full => half, otherwise consumes half
 *     -Compress - Consumes half, otherwise converts full => half
 * 
 *   Alter Cost Value:
 *   - What is the default action cost for this scenario?
 * 
 *   Priority:
 *   - What is this scenario's priority? Scenario outcomes with equal or lower
 *     priorities cannot override types and costs.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Feedback
 * ============================================================================
 *
 * Sound effects for player feedback on in-battle changes to Press Counts.
 * These sound effects are played only when certain results have happened in
 * order to proc the correct sound effect. If multiple things happen at a time,
 * the sound effect priority list will go as follows from top to bottom:
 * 
 * 1. Lose >1 Full Action
 * 2. Lose >1 Half Action
 * 3. Gain Full Action
 * 4. Gain Half Action
 *
 * ---
 *
 * Gain Full Action
 * 
 * Gain Half Action
 *
 * Lose >1 Full Action
 * 
 * Lose >1 Half Action
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
 * Plugin Parameters: Press Count Display Settings
 * ============================================================================
 *
 * Adjust the settings for the Press Count Display. They appear in the upper
 * or lower corners of the screen for the player party and the enemy troop.
 *
 * ---
 *
 * Display Settings
 * 
 *   Draw Horizontally?:
 *   - Which direction do you want the Press Count Display to go?
 * 
 *   Bottom Position?:
 *   - Place the Press Count Display towards the bottom of the screen?
 * 
 *     Offset Top Log Y?:
 *     - If using the top position, offset the log window's Y position.
 * 
 *     Reposition for Help?:
 *     - If using the top position, reposition the display when the help window
 *       is open?
 *
 * ---
 *
 * Reposition For Help
 * 
 *   Repostion X By:
 *   Repostion Y By:
 *   - Reposition the display's X/Y coordinates by this much when the
 *     Help Window is visible.
 *
 * ---
 *
 * Picture Settings
 * 
 *   Actors:
 * 
 *     Full Action Picture:
 *     - Optional. Place an image for an actor full action instead of an icon?
 * 
 *     Half Action Picture:
 *     - Optional. Place an image for an actor half action instead of an icon?
 * 
 *   Enemies:
 * 
 *     Full Action Picture:
 *     - Optional. Place an image for an enemy full action instead of an icon?
 * 
 *     Half Action Picture:
 *     - Optional. Place an image for an enemy half action instead of an icon?
 * 
 *   Empty Action Picture:
 *   - Optional. Place an image for an empty action instead of an icon?
 *
 * ---
 *
 * Coordinates
 * 
 *   Screen Buffer X:
 *   Screen Buffer Y:
 *   - Buffer from the the edge of the screen's X/Y by this much.
 * 
 *   Actor Offset X:
 *   Actor Offset Y:
 *   Enemy Offset X:
 *   Enemy Offset Y:
 *   - Offset the actor/enemy images' X/Y by this much.
 *
 * ---
 *
 * Draw Settings
 * 
 *   Max Actions Visible:
 *   - How many action slots max should be drawn for each team?
 * 
 *   Image Size:
 *   - What is the size of the icons or pictures for the action slots?
 * 
 *   Gap Distance:
 *   - How wide should the gab between each slot be in pixels?
 * 
 *   Icon Smoothing?:
 *   - Smooth the display for icons?
 *   - Or pixelate them?
 * 
 *   Picture Smoothing?:
 *   - Smooth the display for pictures?
 *   - Or pixelate them?
 *
 * ---
 *
 * Turns Remaining
 * 
 *   Show Number?:
 *   - Show a number to display the actions remaining?
 * 
 *   Font Size:
 *   - What font size should be used for this number?
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset the remaining actions number X/Y.
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
 * * Olivia
 * * Arisu
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.13: July 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug that caused custom picture graphics for Full and Half Press
 *    Turns to be swapped. Fix made by Olivia.
 * 
 * Version 1.12: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where a recently revived actor cannot have its turn until the
 *    following turn. Fix made by Olivia.
 * 
 * Version 1.11: April 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated the "Agility and Speed" section of "Major Changes" in help file:
 * *** As of the v1.11 update, this can now be turned on/off and have AGI go in
 *     order based on party position. This can be altered in the Plugin
 *     Parameters' Mechanics section.
 * * New Features!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > Mechanics > AGI Turn Order?
 * **** Determine if the battle turn flow will be based off AGI or not.
 * 
 * Version 1.10: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > Mechanics > Current Turn Revival Act?:
 * **** Allow revived actors to act the current turn they're revived?
 * 
 * Version 1.09: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause elemental resistances to not trigger press
 *    turn effects. Fix made by Olivia.
 * 
 * Version 1.08: December 14, 2023
 * * Bug Fixes!
 * ** Enemy skills with Turn Count conditions will now apply a local turn count
 *    instead of the battle turn count. Fix made by Olivia.
 * * Documentation Update!
 * ** Updated "Major Changes" section:
 * *** Turn Count for Enemies
 * **** Because the turn structure is changed, enemies will now have a
 *      different turn count structure. Their turn count only raises when the
 *      enemy troops have a turn instead of every battle turn. This means if an
 *      enemy skill page has a Turn Count condition of 3, it'll mean when the
 *      enemy team has gotten 3 turns, which will usually be around turn 6 for
 *      the whole battle.
 * 
 * Version 1.07: January 20, 2023
 * * Bug Fixes!
 * ** Custom graphics for press turn icons should now be working properly.
 *    Fix made by Olivia.
 * 
 * Version 1.06: October 20, 2022
 * * Bug Fixes!
 * ** Fixed problem with the Action Count Display's Actor Offset Y not working
 *    properly. Fix made by Arisu.
 * 
 * Version 1.05: June 2, 2022
 * * Bug Fixes!
 * ** Fixed a bug where Force Actions do not work when there's only one action
 *    left for the turn. Fix made by Olivia.
 * 
 * Version 1.04: April 21, 2022
 * * Bug Fixes!
 * ** Fixed a bug that prevents the battle system from shifting back to the
 *    default battle system after an enemy counter attack. Fix made by Olivia.
 * 
 * Version 1.03: April 14, 2022
 * * Compatibility Update!
 * ** Now works more compatible with counters. Update made by Olivia.
 * 
 * Verison 1.02: March 17, 2022
 * * Bug Fixes!
 * ** Death by slip damage will now perform the proper death animation.
 *    Fix made by Olivia.
 * 
 * Version 1.01: October 28, 2021
 * * Feature Update!
 * ** Plugin now more closely fits the original source material.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.00 Official Release Date: November 1, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemActionCountVisibility
 * @text System: PTB Press Count Visibility
 * @desc Determine the visibility of the PTB Press Count Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the PTB Press Count Display.
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
 * @param BattleSystemPTB
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
 * @desc Determines the general settings of the PTB Battle System.
 * @default {"ActionCounts":"","ActionCountFull:str":"Press Count","ActionCountAbbr:str":"PC","ActionCountCostFmt:str":"\\FS[22]\\C[0]×%1%3\\C[0]","Icons":"","CostIcons":"","CostConsumeIcon:num":"165","CostConvertIcon:num":"170","CostCompressIcon:num":"170","ActorIcons":"","ActorActionsIcon:num":"165","ActorHalfActionsIcon:num":"170","EnemyIcons":"","EnemyActionsIcon:num":"162","EnemyHalfActionsIcon:num":"169","EmptyActionsIcon:num":"161","TeamShift":"","PartyTeamShiftFmt:str":"%1's Turn!","TroopTeamShiftFmt:str":"Opponent's Turn!","TeamShiftWait:num":"60","DisplayedCosts":"","CostPosition:eval":"false","ShowCostForAttack:eval":"false","ShowCostForGuard:eval":"false","Show_0_Action_Cost:eval":"true","Show_1_Action_Cost:eval":"true"}
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Determines the mechanics of the PTB Battle System.
 * @default {"Main":"","GuardPass:eval":"true","GainDiff:eval":"true","LoseDiff:eval":"false","StateBuffUpdate:eval":"true","TurnAdvantage":"","NeutralAdvantage:str":"average agi","ActionGeneration":"","GenerateBase:num":"1","AgiBuff:eval":"true","AgiDebuff:eval":"false","MaxActions:num":"99","MinActions:num":"1","AllowOverflow:eval":"true","DefaultCost":"","SkillCosts":"","DefaultCostTypeSkill:str":"consume","DefaultCostSkill:num":"1","ItemCosts":"","DefaultCostTypeItem:str":"consume","DefaultCostItem:num":"1"}
 *
 * @param Press:struct
 * @text Press Mechanics
 * @parent Mechanics:struct
 * @type struct<Press>
 * @desc More indepth control over how the Press Count mechanics work for various scenarios during battle.
 * @default {"Guard":"","guardChange:str":"permanent","guardType:str":"compress","guardCost:num":"+0","guardPriority:num":"100","Miss":"","missChange:str":"temporary","missType:str":"consume","missCost:num":"+1","missPriority:num":"80","Critical":"","criticalChange:str":"temporary","criticalType:str":"convert","criticalCost:num":"+0","criticalPriority:num":"50","Resist":"","resistMaximumRate:num":"0.95","resistChange:str":"permanent","resistType:str":"consume","resistCost:num":"+0","resistPriority:num":"70","Weakness":"","weaknessMinimumRate:num":"1.05","weaknessChange:str":"temporary","weaknessType:str":"convert","weaknessCost:num":"+0","weaknessPriority:num":"60","Immune":"","immuneChange:str":"permanent","immuneType:str":"consume","immuneCost:num":"+200","immunePriority:num":"90","Absorb":"","absorbChange:str":"permanent","absorbType:str":"consume","absorbCost:num":"+200","absorbPriority:num":"90","Reflect":"","reflectChange:str":"permanent","reflectType:str":"consume","reflectCost:num":"+200","reflectPriority:num":"90"}
 *
 * @param Sound:struct
 * @text Sound Feedback
 * @parent Mechanics:struct
 * @type struct<Sound>
 * @desc Sound effects for player feedback on in-battle changes to Press Counts.
 * @default {"GainFull":"","GainFullName:str":"Skill3","GainFullVolume:num":"90","GainFullPitch:num":"100","GainFullPan:num":"0","GainHalf":"","GainHalfName:str":"Skill3","GainHalfVolume:num":"90","GainHalfPitch:num":"120","GainHalfPan:num":"0","LoseFull":"","LoseFullName:str":"Shot3","LoseFullVolume:num":"90","LoseFullPitch:num":"100","LoseFullPan:num":"0","LoseHalf":"","LoseHalfName:str":"Shot3","LoseHalfVolume:num":"90","LoseHalfPitch:num":"120","LoseHalfPan:num":"0"}
 *
 * @param ActionCountDisplay:struct
 * @text Action Count Display
 * @type struct<ActionCountDisplay>
 * @desc Adjust the settings for the Action Count Display.
 * @default {"Display":"","DrawHorz:eval":"true","BottomPosition:eval":"true","LogWindowTopOffsetY:num":"40","RepositionTopForHelp:eval":"true","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"160","Pictures":"","ActorPictures":"","ActorActionFullPicture:str":"","ActorActionHalfPicture:str":"","EnemyPictures":"","EnemyActionFullPicture:str":"","EnemyActionHalfPicture:str":"","EmptyActionPicture:str":"","Coordinates":"","ScreenBufferX:num":"16","ScreenBufferY:num":"16","ActorOffsetX:num":"0","ActorOffsetY:num":"0","EnemyOffsetX:num":"0","EnemyOffsetY:num":"0","DrawSettings":"","MaxVisible:num":"10","ImageSize:num":"32","ImageGapDistance:num":"2","IconSmoothing:eval":"false","PictureSmoothing:eval":"true","TurnsRemaining":"","DrawActionsRemaining:eval":"true","ActionsRemainingFontSize:num":"26","ActionsRemainingOffsetX:num":"0","ActionsRemainingOffsetY:num":"0"}
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
 * @param ActionCounts
 * @text Press Counts
 *
 * @param ActionCountFull:str
 * @text Full Name
 * @parent ActionCounts
 * @desc What is the full name of "Press Counts" in your game?
 * @default Press Count
 *
 * @param ActionCountAbbr:str
 * @text Abbreviation
 * @parent ActionCounts
 * @desc What is the abbreviation of "Press Counts" in your game?
 * @default PC
 *
 * @param ActionCountCostFmt:str
 * @text Cost Format
 * @parent ActionCounts
 * @desc How are Press Count costs displayed?
 * %1 - Cost, %2 - Abbr Text, %3 - Icon
 * @default \FS[22]\C[0]×%1%3\C[0]
 *
 * @param Icons
 * 
 * @param CostIcons
 * @text Cost Icons
 * @parent Icons
 *
 * @param CostConsumeIcon:num
 * @text Consume Icon
 * @parent CostIcons
 * @desc What icon is used to represent consumed costs?
 * @default 165
 *
 * @param CostConvertIcon:num
 * @text Convert Icon
 * @parent CostIcons
 * @desc What icon is used to represent converted costs?
 * @default 170
 *
 * @param CostCompressIcon:num
 * @text Compress Icon
 * @parent CostIcons
 * @desc What icon is used to represent compressed costs?
 * @default 170
 * 
 * @param ActorIcons
 * @text Actors
 * @parent Icons
 *
 * @param ActorActionsIcon:num
 * @text Full Action Icon
 * @parent ActorIcons
 * @desc What icon is used to represent actor full actions?
 * @default 165
 *
 * @param ActorHalfActionsIcon:num
 * @text Half Action Icon
 * @parent ActorIcons
 * @desc What icon is used to represent actor half actions?
 * @default 170
 * 
 * @param EnemyIcons
 * @text Enemies
 * @parent Icons
 *
 * @param EnemyActionsIcon:num
 * @text Full Action Icon
 * @parent EnemyIcons
 * @desc What icon is used to represent enemy full actions?
 * @default 162
 *
 * @param EnemyHalfActionsIcon:num
 * @text Half Action Icon
 * @parent EnemyIcons
 * @desc What icon is used to represent enemy half actions?
 * @default 169
 *
 * @param EmptyActionsIcon:num
 * @text Empty Action Icon
 * @parent Icons
 * @desc What icon is used to represent empty actions?
 * @default 161
 *
 * @param TeamShift
 * @text Team Shift
 *
 * @param PartyTeamShiftFmt:str
 * @text Party's Turn
 * @parent TeamShift
 * @desc Text that appears when it's the party's turn.
 * %1 - Party Name
 * @default %1's Turn!
 *
 * @param TroopTeamShiftFmt:str
 * @text Enemy's Turn
 * @parent TeamShift
 * @desc Text that appears when it's the enemy's turn.
 * @default Opponent's Turn!
 *
 * @param TeamShiftWait:num
 * @text Wait Frames
 * @parent TeamShift
 * @type number
 * @desc How many frames to wait in between team changes?
 * @default 60
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
 * @desc Put the action cost at the front of skill/item costs?
 * @default false
 *
 * @param ShowCostForAttack:eval
 * @text Show Cost: Attack
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the action cost for the Attack command?
 * @default false
 *
 * @param ShowCostForGuard:eval
 * @text Show Cost: Guard
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the action cost for the Guard command?
 * @default false
 *
 * @param Show_0_Action_Cost:eval
 * @text Show Cost: 0 Action
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the action cost when the cost is 0 action?
 * @default true
 *
 * @param Show_1_Action_Cost:eval
 * @text Show Cost: 1 Action
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the action cost when the cost is 1 action?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param Main
 * @text Main Mechanics
 *
 * @param AgiTurnOrder:eval
 * @text AGI Turn Order?
 * @parent Main
 * @type boolean
 * @on Fastest AGI First
 * @off Go In Order
 * @desc Determine if the battle turn flow will be based off AGI or not.
 * @default true
 *
 * @param RevivalAct:eval
 * @text Current Revival Act?
 * @parent Main
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow revived actors to act the current turn they're revived?
 * @default false
 *
 * @param GuardPass:eval
 * @text Guard > Pass Turn?
 * @parent Main
 * @type boolean
 * @on Pass Turn
 * @off Don't Pass
 * @desc Does guarding cause a battler to pass turn?
 * @default true
 *
 * @param GainDiff:eval
 * @text Gain Differences?
 * @parent Main
 * @type boolean
 * @on Gain Differences
 * @off Keep Same
 * @desc If the max Action Count for a team changes,
 * gain the difference in value if positive?
 * @default true
 *
 * @param LoseDiff:eval
 * @text Lose Differences?
 * @parent Main
 * @type boolean
 * @on Lose Differences
 * @off Keep Same
 * @desc If the max Action Count for a team changes,
 * lose the difference in value if negative?
 * @default false
 *
 * @param StateBuffUpdate:eval
 * @text State/Buff Updates
 * @parent Main
 * @type boolean
 * @on Opponent Turns Only
 * @off All Turns
 * @desc If enabled, update state/buff turns only on opponent
 * turns. Otherwise, they occur every turn.
 * @default true
 *
 * @param TurnAdvantage
 * @text Turn Advantage
 *
 * @param NeutralAdvantage:str
 * @text Neutral Advantage
 * @parent TurnAdvantage
 * @type select
 * @option Random - 50% chance on which team goes first
 * @value random
 * @option Player - Player's team always goes first
 * @value player
 * @option Enemy - Enemy's team always goes first
 * @value enemy
 * @option Lowest AGI - Battler with lowest AGI's team goes first
 * @value lowest agi
 * @option Average AGI - Team with the highest average AGI goes first
 * @value average agi
 * @option Highest AGI - Battler with highest AGI's team goes first
 * @value highest agi
 * @option Total AGI - Team with highest total AGI goes first
 * @value total agi
 * @desc For a neutral advantage battle, what determines which team goes first?
 * @default average agi
 *
 * @param ActionGeneration
 * @text Action Generation
 *
 * @param GenerateBase:num
 * @text Base
 * @parent ActionGeneration
 * @type number
 * @desc What is the starting base number of actions that are generated per battler each turn?
 * @default 1
 *
 * @param AgiBuff:eval
 * @text AGI Buff Influence?
 * @parent ActionGeneration
 * @type boolean
 * @on Influence
 * @off No Influence
 * @desc Do AGI buffs give +1 for each stack?
 * @default true
 *
 * @param AgiDebuff:eval
 * @text AGI Debuff Influence?
 * @parent ActionGeneration
 * @type boolean
 * @on Influence
 * @off No Influence
 * @desc Do AGI debuffs give -1 for each stack?
 * @default false
 *
 * @param MaxActions:num
 * @text Maximum Actions
 * @parent ActionGeneration
 * @type number
 * @desc What is the absolute maximum number of actions a team can have each turn?
 * @default 99
 *
 * @param MinActions:num
 * @text Minimum Actions
 * @parent ActionGeneration
 * @type number
 * @desc What is the bare minimum number of actions a team can have each turn?
 * @default 1
 *
 * @param AllowOverflow:eval
 * @text Allow Overflow?
 * @parent ActionGeneration
 * @type boolean
 * @on Allow
 * @off Cap to Max
 * @desc Allow current actions to overflow?
 * Or let them cap at the current team max?
 * @default true
 *
 * @param DefaultCost
 * @text Default Press Costs
 * 
 * @param SkillCosts
 * @text Skills
 * @parent DefaultCost
 *
 * @param DefaultCostTypeSkill:str
 * @text Cost Type
 * @parent SkillCosts
 * @type select
 * @option Consume - Removes half, otherwise consumes full
 * @value consume
 * @option Convert - Converts full => half, otherwise consumes half
 * @value convert
 * @option Compress - Consumes half, otherwise converts full => half
 * @value compress
 * @desc What is the default press cost type for skills?
 * @default consume
 *
 * @param DefaultCostSkill:num
 * @text Cost Value
 * @parent SkillCosts
 * @type number
 * @desc What is the default press cost value for skills?
 * @default 1
 * 
 * @param ItemCosts
 * @text Items
 * @parent DefaultCost
 *
 * @param DefaultCostTypeItem:str
 * @text Cost Type
 * @parent ItemCosts
 * @type select
 * @option Consume - Removes half, otherwise consumes full
 * @value consume
 * @option Convert - Converts full => half, otherwise consumes half
 * @value convert
 * @option Compress - Consumes half, otherwise converts full => half
 * @value compress
 * @desc What is the default press cost type for items?
 * @default consume
 *
 * @param DefaultCostItem:num
 * @text Cost Value
 * @parent ItemCosts
 * @type number
 * @desc What is the default action cost for items?
 * @default 1
 * 
 */
/* ----------------------------------------------------------------------------
 * Press Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Press:
 *
 * @param Guard
 * @text Guarding
 *
 * @param guardChange:str
 * @text Alter Changeability
 * @parent Guard
 * @type select
 * @option Unchanged - Cost type is unchanged after this effect
 * @value unchanged
 * @option Permanent - Cost type can no longer be changed after
 * @value permanent
 * @option Temporary - Cost type can still be changed after
 * @value temporary
 * @desc Allow the cost type and value to be changeable?
 * @default permanent
 *
 * @param guardType:str
 * @text Alter Cost Type
 * @parent Guard
 * @type select
 * @option Unchanged - No changes are made
 * @value unchanged
 * @option Consume - Removes half, otherwise consumes full
 * @value consume
 * @option Convert - Converts full => half, otherwise consumes half
 * @value convert
 * @option Compress - Consumes half, otherwise converts full => half
 * @value compress
 * @desc Change the cost type to this scenario.
 * Use 'Unchanged' for no changes.
 * @default compress
 *
 * @param guardCost:num
 * @text Alter Cost Value
 * @parent Guard
 * @desc What is the default action cost for this scenario?
 * @default +0
 *
 * @param guardPriority:num
 * @text Priority
 * @parent Guard
 * @type number
 * @desc What is this scenario's priority? Scenario outcomes with
 * equal or lower priorities cannot override types and costs.
 * @default 100
 *
 * @param Miss
 * @text Miss an Attack
 *
 * @param missChange:str
 * @text Alter Changeability
 * @parent Miss
 * @type select
 * @option Unchanged - Cost type is unchanged after this effect
 * @value unchanged
 * @option Permanent - Cost type can no longer be changed after
 * @value permanent
 * @option Temporary - Cost type can still be changed after
 * @value temporary
 * @desc Allow the cost type and value to be changeable?
 * @default temporary
 *
 * @param missType:str
 * @text Alter Cost Type
 * @parent Miss
 * @type select
 * @option Unchanged - No changes are made
 * @value unchanged
 * @option Consume - Removes half, otherwise consumes full
 * @value consume
 * @option Convert - Converts full => half, otherwise consumes half
 * @value convert
 * @option Compress - Consumes half, otherwise converts full => half
 * @value compress
 * @desc Change the cost type to this scenario.
 * Use 'Unchanged' for no changes.
 * @default consume
 *
 * @param missCost:num
 * @text Alter Cost Value
 * @parent Miss
 * @desc What is the default action cost for this scenario?
 * @default +1
 *
 * @param missPriority:num
 * @text Priority
 * @parent Miss
 * @type number
 * @desc What is this scenario's priority? Scenario outcomes with
 * equal or lower priorities cannot override types and costs.
 * @default 80
 *
 * @param Critical
 * @text Critical Hit!
 *
 * @param criticalChange:str
 * @text Alter Changeability
 * @parent Critical
 * @type select
 * @option Unchanged - Cost type is unchanged after this effect
 * @value unchanged
 * @option Permanent - Cost type can no longer be changed after
 * @value permanent
 * @option Temporary - Cost type can still be changed after
 * @value temporary
 * @desc Allow the cost type and value to be changeable?
 * @default temporary
 *
 * @param criticalType:str
 * @text Alter Cost Type
 * @parent Critical
 * @type select
 * @option Unchanged - No changes are made
 * @value unchanged
 * @option Consume - Removes half, otherwise consumes full
 * @value consume
 * @option Convert - Converts full => half, otherwise consumes half
 * @value convert
 * @option Compress - Consumes half, otherwise converts full => half
 * @value compress
 * @desc Change the cost type to this scenario.
 * Use 'Unchanged' for no changes.
 * @default convert
 *
 * @param criticalCost:num
 * @text Alter Cost Value
 * @parent Critical
 * @desc What is the default action cost for this scenario?
 * @default +0
 *
 * @param criticalPriority:num
 * @text Priority
 * @parent Critical
 * @type number
 * @desc What is this scenario's priority? Scenario outcomes with
 * equal or lower priorities cannot override types and costs.
 * @default 50
 *
 * @param Resist
 * @text Element Resist!
 *
 * @param resistMaximumRate:num
 * @text Maximum Rate
 * @parent Resist
 * @desc What is the maximum elemental rate for an attack to be considered a resistance?
 * @default 0.95
 *
 * @param resistChange:str
 * @text Alter Changeability
 * @parent Resist
 * @type select
 * @option Unchanged - Cost type is unchanged after this effect
 * @value unchanged
 * @option Permanent - Cost type can no longer be changed after
 * @value permanent
 * @option Temporary - Cost type can still be changed after
 * @value temporary
 * @desc Allow the cost type and value to be changeable?
 * @default permanent
 *
 * @param resistType:str
 * @text Alter Cost Type
 * @parent Resist
 * @type select
 * @option Unchanged - No changes are made
 * @value unchanged
 * @option Consume - Removes half, otherwise consumes full
 * @value consume
 * @option Convert - Converts full => half, otherwise consumes half
 * @value convert
 * @option Compress - Consumes half, otherwise converts full => half
 * @value compress
 * @desc Change the cost type to this scenario.
 * Use 'Unchanged' for no changes.
 * @default consume
 *
 * @param resistCost:num
 * @text Alter Cost Value
 * @parent Resist
 * @desc What is the default action cost for this scenario?
 * @default +0
 *
 * @param resistPriority:num
 * @text Priority
 * @parent Resist
 * @type number
 * @desc What is this scenario's priority? Scenario outcomes with
 * equal or lower priorities cannot override types and costs.
 * @default 70
 *
 * @param Weakness
 * @text Element Weakness!
 *
 * @param weaknessMinimumRate:num
 * @text Minimum Rate
 * @parent Weakness
 * @desc What is the minimum elemental rate for an attack to be considered a weakness?
 * @default 1.05
 *
 * @param weaknessChange:str
 * @text Alter Changeability
 * @parent Weakness
 * @type select
 * @option Unchanged - Cost type is unchanged after this effect
 * @value unchanged
 * @option Permanent - Cost type can no longer be changed after
 * @value permanent
 * @option Temporary - Cost type can still be changed after
 * @value temporary
 * @desc Allow the cost type and value to be changeable?
 * @default temporary
 *
 * @param weaknessType:str
 * @text Alter Cost Type
 * @parent Weakness
 * @type select
 * @option Unchanged - No changes are made
 * @value unchanged
 * @option Consume - Removes half, otherwise consumes full
 * @value consume
 * @option Convert - Converts full => half, otherwise consumes half
 * @value convert
 * @option Compress - Consumes half, otherwise converts full => half
 * @value compress
 * @desc Change the cost type to this scenario.
 * Use 'Unchanged' for no changes.
 * @default convert
 *
 * @param weaknessCost:num
 * @text Alter Cost Value
 * @parent Weakness
 * @desc What is the default action cost for this scenario?
 * @default +0
 *
 * @param weaknessPriority:num
 * @text Priority
 * @parent Weakness
 * @type number
 * @desc What is this scenario's priority? Scenario outcomes with
 * equal or lower priorities cannot override types and costs.
 * @default 60
 *
 * @param Immune
 * @text Element Immunity!
 *
 * @param immuneChange:str
 * @text Alter Changeability
 * @parent Immune
 * @type select
 * @option Unchanged - Cost type is unchanged after this effect
 * @value unchanged
 * @option Permanent - Cost type can no longer be changed after
 * @value permanent
 * @option Temporary - Cost type can still be changed after
 * @value temporary
 * @desc Allow the cost type and value to be changeable?
 * @default permanent
 *
 * @param immuneType:str
 * @text Alter Cost Type
 * @parent Immune
 * @type select
 * @option Unchanged - No changes are made
 * @value unchanged
 * @option Consume - Removes half, otherwise consumes full
 * @value consume
 * @option Convert - Converts full => half, otherwise consumes half
 * @value convert
 * @option Compress - Consumes half, otherwise converts full => half
 * @value compress
 * @desc Change the cost type to this scenario.
 * Use 'Unchanged' for no changes.
 * @default consume
 *
 * @param immuneCost:num
 * @text Alter Cost Value
 * @parent Immune
 * @desc What is the default action cost for this scenario?
 * @default +200
 *
 * @param immunePriority:num
 * @text Priority
 * @parent Immune
 * @type number
 * @desc What is this scenario's priority? Scenario outcomes with
 * equal or lower priorities cannot override types and costs.
 * @default 90
 *
 * @param Absorb
 * @text Absorb Element!
 *
 * @param absorbChange:str
 * @text Alter Changeability
 * @parent Absorb
 * @type select
 * @option Unchanged - Cost type is unchanged after this effect
 * @value unchanged
 * @option Permanent - Cost type can no longer be changed after
 * @value permanent
 * @option Temporary - Cost type can still be changed after
 * @value temporary
 * @desc Allow the cost type and value to be changeable?
 * @default permanent
 *
 * @param absorbType:str
 * @text Alter Cost Type
 * @parent Absorb
 * @type select
 * @option Unchanged - No changes are made
 * @value unchanged
 * @option Consume - Removes half, otherwise consumes full
 * @value consume
 * @option Convert - Converts full => half, otherwise consumes half
 * @value convert
 * @option Compress - Consumes half, otherwise converts full => half
 * @value compress
 * @desc Change the cost type to this scenario.
 * Use 'Unchanged' for no changes.
 * @default consume
 *
 * @param absorbCost:num
 * @text Alter Cost Value
 * @parent Absorb
 * @desc What is the default action cost for this scenario?
 * @default +200
 *
 * @param absorbPriority:num
 * @text Priority
 * @parent Absorb
 * @type number
 * @desc What is this scenario's priority? Scenario outcomes with
 * equal or lower priorities cannot override types and costs.
 * @default 90
 *
 * @param Reflect
 * @text Reflect Attack!
 *
 * @param reflectChange:str
 * @text Alter Changeability
 * @parent Reflect
 * @type select
 * @option Unchanged - Cost type is unchanged after this effect
 * @value unchanged
 * @option Permanent - Cost type can no longer be changed after
 * @value permanent
 * @option Temporary - Cost type can still be changed after
 * @value temporary
 * @desc Allow the cost type and value to be changeable?
 * @default permanent
 *
 * @param reflectType:str
 * @text Alter Cost Type
 * @parent Reflect
 * @type select
 * @option Unchanged - No changes are made
 * @value unchanged
 * @option Consume - Removes half, otherwise consumes full
 * @value consume
 * @option Convert - Converts full => half, otherwise consumes half
 * @value convert
 * @option Compress - Consumes half, otherwise converts full => half
 * @value compress
 * @desc Change the cost type to this scenario.
 * Use 'Unchanged' for no changes.
 * @default consume
 *
 * @param reflectCost:num
 * @text Alter Cost Value
 * @parent Reflect
 * @desc What is the default action cost for this scenario?
 * @default +200
 *
 * @param reflectPriority:num
 * @text Priority
 * @parent Reflect
 * @type number
 * @desc What is this scenario's priority? Scenario outcomes with
 * equal or lower priorities cannot override types and costs.
 * @default 90
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param GainFull
 * @text Gain Full Action
 *
 * @param GainFullName:str
 * @text Filename
 * @parent GainFull
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Skill3
 *
 * @param GainFullVolume:num
 * @text Volume
 * @parent GainFull
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param GainFullPitch:num
 * @text Pitch
 * @parent GainFull
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param GainFullPan:num
 * @text Pan
 * @parent GainFull
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param GainHalf
 * @text Gain Half Action
 *
 * @param GainHalfName:str
 * @text Filename
 * @parent GainHalf
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Skill3
 *
 * @param GainHalfVolume:num
 * @text Volume
 * @parent GainHalf
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param GainHalfPitch:num
 * @text Pitch
 * @parent GainHalf
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param GainHalfPan:num
 * @text Pan
 * @parent GainHalf
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param LoseFull
 * @text Lose >1 Full Action
 *
 * @param LoseFullName:str
 * @text Filename
 * @parent LoseFull
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Shot3
 *
 * @param LoseFullVolume:num
 * @text Volume
 * @parent LoseFull
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param LoseFullPitch:num
 * @text Pitch
 * @parent LoseFull
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param LoseFullPan:num
 * @text Pan
 * @parent LoseFull
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param LoseHalf
 * @text Lose >1 Half Action
 *
 * @param LoseHalfName:str
 * @text Filename
 * @parent LoseHalf
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Shot3
 *
 * @param LoseHalfVolume:num
 * @text Volume
 * @parent LoseHalf
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param LoseHalfPitch:num
 * @text Pitch
 * @parent LoseHalf
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param LoseHalfPan:num
 * @text Pan
 * @parent LoseHalf
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Action Count Display Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ActionCountDisplay:
 *
 * @param Display
 * @text Display Settings
 *
 * @param DrawHorz:eval
 * @text Draw Horizontally?
 * @parent Display
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Which direction do you want the Press Count Display to go?
 * @default true
 *
 * @param BottomPosition:eval
 * @text Bottom Position?
 * @parent Display
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Place the Press Count Display towards the bottom of the screen?
 * @default true
 *
 * @param LogWindowTopOffsetY:num
 * @text Offset Top Log Y?
 * @parent BottomPosition:eval
 * @type number
 * @desc If using the top position, offset the log window's Y position.
 * @default 40
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent BottomPosition:eval
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If using the top position, reposition the display when the help window is open?
 * @default true
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
 * @default 160
 *
 * @param Pictures
 * @text Picture Settings
 * 
 * @param ActorPictures
 * @text Actors
 * @parent Pictures
 *
 * @param ActorActionFullPicture:str
 * @text Full Action Picture
 * @parent ActorPictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an actor full action instead of an icon?
 * @default 
 *
 * @param ActorActionHalfPicture:str
 * @text Half Action Picture
 * @parent ActorPictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an actor half action instead of an icon?
 * @default 
 * 
 * @param EnemyPictures
 * @text Enemies
 * @parent Pictures
 *
 * @param EnemyActionFullPicture:str
 * @text Full Action Picture
 * @parent EnemyPictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an enemy full action instead of an icon?
 * @default 
 *
 * @param EnemyActionHalfPicture:str
 * @text Half Action Picture
 * @parent EnemyPictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an enemy half action instead of an icon?
 * @default 
 *
 * @param EmptyActionPicture:str
 * @text Empty Action Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an empty action instead of an icon?
 * @default 
 *
 * @param Coordinates
 *
 * @param ScreenBufferX:num
 * @text Screen Buffer X
 * @parent Coordinates
 * @desc Buffer from the the edge of the screen's X by this much.
 * @default 16
 *
 * @param ScreenBufferY:num
 * @text Screen Buffer Y
 * @parent Coordinates
 * @desc Buffer from the the edge of the screen's Y by this much.
 * @default 16
 *
 * @param ActorOffsetX:num
 * @text Actor Offset X
 * @parent Coordinates
 * @desc Offset the actor images' X by this much.
 * @default 0
 *
 * @param ActorOffsetY:num
 * @text Actor Offset Y
 * @parent Coordinates
 * @desc Offset the actor images' Y by this much.
 * @default 0
 *
 * @param EnemyOffsetX:num
 * @text Enemy Offset X
 * @parent Coordinates
 * @desc Offset the enemy images' X by this much.
 * @default 0
 *
 * @param EnemyOffsetY:num
 * @text Enemy Offset Y
 * @parent Coordinates
 * @desc Offset the enemy images' Y by this much.
 * @default 0
 *
 * @param DrawSettings
 * @text Draw Settings
 *
 * @param MaxVisible:num
 * @text Max Actions Visible
 * @parent DrawSettings
 * @desc How many action slots max should be drawn for each team?
 * @default 10
 *
 * @param ImageSize:num
 * @text Image Size
 * @parent DrawSettings
 * @desc What is the size of the icons or pictures for the action slots?
 * @default 32
 *
 * @param ImageGapDistance:num
 * @text Gap Distance
 * @parent DrawSettings
 * @desc How wide should the gab between each slot be in pixels?
 * @default 2
 *
 * @param IconSmoothing:eval
 * @text Icon Smoothing?
 * @parent DrawSettings
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc Smooth the display for icons?
 * Or pixelate them?
 * @default false
 *
 * @param PictureSmoothing:eval
 * @text Picture Smoothing?
 * @parent DrawSettings
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc Smooth the display for pictures?
 * Or pixelate them?
 * @default true
 *
 * @param TurnsRemaining
 * @text Turns Remaining
 *
 * @param DrawActionsRemaining:eval
 * @text Show Number?
 * @parent TurnsRemaining
 * @type boolean
 * @on Show Number
 * @off Don't Show
 * @desc Show a number to display the actions remaining?
 * @default true
 *
 * @param ActionsRemainingFontSize:num
 * @text Font Size
 * @parent DrawActionsRemaining:eval
 * @desc What font size should be used for this number?
 * @default 26
 *
 * @param ActionsRemainingOffsetX:num
 * @text Offset X
 * @parent DrawActionsRemaining:eval
 * @desc Offset the remaining actions number X.
 * @default 0
 *
 * @param ActionsRemainingOffsetY:num
 * @text Offset Y
 * @parent DrawActionsRemaining:eval
 * @desc Offset the remaining actions number Y.
 * @default 0
 *
 */
//=============================================================================

const _0x4f53c8=_0x5ac7;function _0x5ac7(_0x984641,_0x560de4){const _0x24a63a=_0x24a6();return _0x5ac7=function(_0x5ac7d4,_0x10833b){_0x5ac7d4=_0x5ac7d4-0x90;let _0x16fbec=_0x24a63a[_0x5ac7d4];return _0x16fbec;},_0x5ac7(_0x984641,_0x560de4);}(function(_0x42a391,_0x404bd0){const _0xdeb9d6=_0x5ac7,_0x3da272=_0x42a391();while(!![]){try{const _0x3f144d=-parseInt(_0xdeb9d6(0x251))/0x1+parseInt(_0xdeb9d6(0x1cb))/0x2*(parseInt(_0xdeb9d6(0x1b8))/0x3)+parseInt(_0xdeb9d6(0x248))/0x4*(parseInt(_0xdeb9d6(0x1a8))/0x5)+-parseInt(_0xdeb9d6(0x1bc))/0x6*(-parseInt(_0xdeb9d6(0x1cc))/0x7)+-parseInt(_0xdeb9d6(0x1a0))/0x8+-parseInt(_0xdeb9d6(0x1e5))/0x9*(-parseInt(_0xdeb9d6(0x10d))/0xa)+-parseInt(_0xdeb9d6(0xb8))/0xb;if(_0x3f144d===_0x404bd0)break;else _0x3da272['push'](_0x3da272['shift']());}catch(_0x486d0b){_0x3da272['push'](_0x3da272['shift']());}}}(_0x24a6,0x299bb));var label=_0x4f53c8(0x101),tier=tier||0x0,dependencies=[_0x4f53c8(0x1a2),'VisuMZ_1_BattleCore',_0x4f53c8(0x1b0),'VisuMZ_1_SkillsStatesCore'],pluginData=$plugins[_0x4f53c8(0x236)](function(_0x2e4985){const _0x56a468=_0x4f53c8;return _0x2e4985[_0x56a468(0x165)]&&_0x2e4985['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x4f53c8(0x14a)]=VisuMZ[label][_0x4f53c8(0x14a)]||{},VisuMZ[_0x4f53c8(0x21f)]=function(_0xec4f63,_0x43ec3d){const _0x53fb6b=_0x4f53c8;for(const _0x2e7a25 in _0x43ec3d){if(_0x2e7a25[_0x53fb6b(0x1ba)](/(.*):(.*)/i)){const _0x5e1665=String(RegExp['$1']),_0x55ef37=String(RegExp['$2'])[_0x53fb6b(0x2ad)]()['trim']();let _0x231d3f,_0x19aa88,_0x47af5e;switch(_0x55ef37){case _0x53fb6b(0x109):_0x231d3f=_0x43ec3d[_0x2e7a25]!==''?Number(_0x43ec3d[_0x2e7a25]):0x0;break;case _0x53fb6b(0x11d):_0x19aa88=_0x43ec3d[_0x2e7a25]!==''?JSON[_0x53fb6b(0xaa)](_0x43ec3d[_0x2e7a25]):[],_0x231d3f=_0x19aa88[_0x53fb6b(0x271)](_0x199363=>Number(_0x199363));break;case _0x53fb6b(0x145):_0x231d3f=_0x43ec3d[_0x2e7a25]!==''?eval(_0x43ec3d[_0x2e7a25]):null;break;case _0x53fb6b(0xd1):_0x19aa88=_0x43ec3d[_0x2e7a25]!==''?JSON[_0x53fb6b(0xaa)](_0x43ec3d[_0x2e7a25]):[],_0x231d3f=_0x19aa88[_0x53fb6b(0x271)](_0x248fd6=>eval(_0x248fd6));break;case _0x53fb6b(0x2b8):_0x231d3f=_0x43ec3d[_0x2e7a25]!==''?JSON[_0x53fb6b(0xaa)](_0x43ec3d[_0x2e7a25]):'';break;case _0x53fb6b(0x2ab):_0x19aa88=_0x43ec3d[_0x2e7a25]!==''?JSON['parse'](_0x43ec3d[_0x2e7a25]):[],_0x231d3f=_0x19aa88['map'](_0x4399a0=>JSON['parse'](_0x4399a0));break;case _0x53fb6b(0x230):_0x231d3f=_0x43ec3d[_0x2e7a25]!==''?new Function(JSON[_0x53fb6b(0xaa)](_0x43ec3d[_0x2e7a25])):new Function(_0x53fb6b(0x18f));break;case _0x53fb6b(0x243):_0x19aa88=_0x43ec3d[_0x2e7a25]!==''?JSON[_0x53fb6b(0xaa)](_0x43ec3d[_0x2e7a25]):[],_0x231d3f=_0x19aa88[_0x53fb6b(0x271)](_0x4293a0=>new Function(JSON['parse'](_0x4293a0)));break;case _0x53fb6b(0x283):_0x231d3f=_0x43ec3d[_0x2e7a25]!==''?String(_0x43ec3d[_0x2e7a25]):'';break;case _0x53fb6b(0x24a):_0x19aa88=_0x43ec3d[_0x2e7a25]!==''?JSON['parse'](_0x43ec3d[_0x2e7a25]):[],_0x231d3f=_0x19aa88[_0x53fb6b(0x271)](_0x40df31=>String(_0x40df31));break;case'STRUCT':_0x47af5e=_0x43ec3d[_0x2e7a25]!==''?JSON[_0x53fb6b(0xaa)](_0x43ec3d[_0x2e7a25]):{},_0x231d3f=VisuMZ['ConvertParams']({},_0x47af5e);break;case'ARRAYSTRUCT':_0x19aa88=_0x43ec3d[_0x2e7a25]!==''?JSON[_0x53fb6b(0xaa)](_0x43ec3d[_0x2e7a25]):[],_0x231d3f=_0x19aa88[_0x53fb6b(0x271)](_0x3312b9=>VisuMZ[_0x53fb6b(0x21f)]({},JSON['parse'](_0x3312b9)));break;default:continue;}_0xec4f63[_0x5e1665]=_0x231d3f;}}return _0xec4f63;},(_0x4334cc=>{const _0x157ba8=_0x4f53c8,_0x582e8e=_0x4334cc[_0x157ba8(0x17d)];for(const _0x3e8c6a of dependencies){if(!Imported[_0x3e8c6a]){alert(_0x157ba8(0x1ea)['format'](_0x582e8e,_0x3e8c6a)),SceneManager['exit']();break;}}const _0x28757e=_0x4334cc['description'];if(_0x28757e[_0x157ba8(0x1ba)](/\[Version[ ](.*?)\]/i)){const _0x232ef4=Number(RegExp['$1']);_0x232ef4!==VisuMZ[label][_0x157ba8(0xbb)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x157ba8(0x1f4)](_0x582e8e,_0x232ef4)),SceneManager[_0x157ba8(0x1ca)]());}if(_0x28757e['match'](/\[Tier[ ](\d+)\]/i)){const _0x5486e9=Number(RegExp['$1']);_0x5486e9<tier?(alert(_0x157ba8(0x11e)[_0x157ba8(0x1f4)](_0x582e8e,_0x5486e9,tier)),SceneManager['exit']()):tier=Math[_0x157ba8(0x176)](_0x5486e9,tier);}VisuMZ[_0x157ba8(0x21f)](VisuMZ[label][_0x157ba8(0x14a)],_0x4334cc[_0x157ba8(0x234)]);})(pluginData),PluginManager[_0x4f53c8(0x15b)](pluginData[_0x4f53c8(0x17d)],_0x4f53c8(0x111),_0x1f088a=>{const _0x2b561f=_0x4f53c8;VisuMZ[_0x2b561f(0x21f)](_0x1f088a,_0x1f088a);const _0x1327a0=_0x1f088a[_0x2b561f(0x1a7)];$gameSystem[_0x2b561f(0x259)](_0x1327a0);}),VisuMZ['BattleSystemPTB']['RegExp']={'ActionPointConsume':/<PTB (?:PC|ACTION|PRESS) CONSUME:[ ](\d+)>/i,'ActionPointConvert':/<PTB (?:PC|ACTION|PRESS) CONVERT:[ ](\d+)>/i,'ActionPointCompress':/<PTB (?:PC|ACTION|PRESS) COMPRESS:[ ](\d+)>/i,'ActionPointForceConsume':/<PTB (?:PC|ACTION|PRESS) FORCE CONSUME:[ ](\d+)>/i,'ActionPointForceConvert':/<PTB (?:PC|ACTION|PRESS) FORCE CONVERT:[ ](\d+)>/i,'ActionPointForceCompress':/<PTB (?:PC|ACTION|PRESS) FORCE COMPRESS:[ ](\d+)>/i,'PostFullActionChange':/<PTB POST-(?:GAIN|LOSE) (?:PC|FULL ACTION|FULL ACTIONS):[ ]([\+\-]\d+)>/i,'PostHalfActionChange':/<PTB POST-(?:GAIN|LOSE) (?:PC|HALF ACTION|HALF ACTIONS):[ ]([\+\-]\d+)>/i,'HideActionPointCost':/<PTB HIDE (?:PC|ACTION|PRESS) COST>/i,'ShowActionPointCost':/<PTB SHOW (?:PC|ACTION|PRESS) COST>/i,'PassTurn':/<PTB PASS TURN>/i,'ActionPointTraitPlus':/<PTB (?:PC|FULL ACTION|FULL ACTIONS|PRESS):[ ]([\+\-]\d+)>/i},DataManager[_0x4f53c8(0x225)]=function(_0x1074ac){const _0x505050=_0x4f53c8;if(!_0x1074ac)return!![];const _0x3f7832=VisuMZ[_0x505050(0x101)][_0x505050(0x25c)],_0x52f9e0=_0x1074ac[_0x505050(0x284)];if(_0x52f9e0[_0x505050(0x1ba)](_0x3f7832[_0x505050(0x194)]))return!![];else{if(_0x52f9e0['match'](_0x3f7832[_0x505050(0x15d)]))return!![];else{if(_0x52f9e0[_0x505050(0x1ba)](_0x3f7832['ActionPointCompress']))return!![];else{if(_0x52f9e0[_0x505050(0x1ba)](_0x3f7832[_0x505050(0x14e)]))return![];else{if(_0x52f9e0[_0x505050(0x1ba)](_0x3f7832[_0x505050(0xa9)]))return![];else return _0x52f9e0[_0x505050(0x1ba)](_0x3f7832[_0x505050(0x1ee)])?![]:!![];}}}}},DataManager[_0x4f53c8(0x150)]=function(_0x608f5b){const _0x5f17cb=_0x4f53c8;if(!_0x608f5b)return'consume';const _0x36c9ba=VisuMZ[_0x5f17cb(0x101)][_0x5f17cb(0x14a)][_0x5f17cb(0x258)],_0x1ded18=VisuMZ[_0x5f17cb(0x101)][_0x5f17cb(0x25c)],_0x174839=_0x608f5b[_0x5f17cb(0x284)];if(_0x174839[_0x5f17cb(0x1ba)](_0x1ded18[_0x5f17cb(0x194)]))return _0x5f17cb(0x168);else{if(_0x174839['match'](_0x1ded18['ActionPointConvert']))return _0x5f17cb(0x293);else{if(_0x174839['match'](_0x1ded18[_0x5f17cb(0x1c0)]))return _0x5f17cb(0x275);else{if(_0x174839[_0x5f17cb(0x1ba)](_0x1ded18['ActionPointForceConsume']))return _0x5f17cb(0x168);else{if(_0x174839[_0x5f17cb(0x1ba)](_0x1ded18['ActionPointForceConvert']))return _0x5f17cb(0x293);else{if(_0x174839[_0x5f17cb(0x1ba)](_0x1ded18[_0x5f17cb(0x1ee)]))return'compress';else{if(DataManager[_0x5f17cb(0xa2)](_0x608f5b))return _0x36c9ba[_0x5f17cb(0x13c)];else return DataManager['isItem'](_0x608f5b)?_0x36c9ba['DefaultCostTypeItem']:_0x5f17cb(0x168);}}}}}}},DataManager['getActionCostValuePTB']=function(_0x28086b){const _0xce52d7=_0x4f53c8;if(!_0x28086b)return 0x0;const _0x4d9f7d=VisuMZ[_0xce52d7(0x101)]['Settings'][_0xce52d7(0x258)],_0xb944d3=VisuMZ[_0xce52d7(0x101)]['RegExp'],_0x407002=_0x28086b[_0xce52d7(0x284)];if(_0x407002[_0xce52d7(0x1ba)](_0xb944d3[_0xce52d7(0x194)]))return Number(RegExp['$1']);else{if(_0x407002[_0xce52d7(0x1ba)](_0xb944d3[_0xce52d7(0x15d)]))return Number(RegExp['$1']);else{if(_0x407002[_0xce52d7(0x1ba)](_0xb944d3[_0xce52d7(0x1c0)]))return Number(RegExp['$1']);else{if(_0x407002[_0xce52d7(0x1ba)](_0xb944d3[_0xce52d7(0x14e)]))return Number(RegExp['$1']);else{if(_0x407002[_0xce52d7(0x1ba)](_0xb944d3['ActionPointForceConvert']))return Number(RegExp['$1']);else{if(_0x407002['match'](_0xb944d3[_0xce52d7(0x1ee)]))return Number(RegExp['$1']);else{if(DataManager[_0xce52d7(0xa2)](_0x28086b))return _0x4d9f7d['DefaultCostSkill'];else return DataManager['isItem'](_0x28086b)?_0x4d9f7d[_0xce52d7(0x206)]:0x0;}}}}}}},ImageManager[_0x4f53c8(0x14b)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x20e)][_0x4f53c8(0x133)],ImageManager[_0x4f53c8(0x263)]=VisuMZ['BattleSystemPTB'][_0x4f53c8(0x14a)][_0x4f53c8(0x20e)]['CostConvertIcon'],ImageManager[_0x4f53c8(0x189)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x20e)]['CostCompressIcon'],ImageManager[_0x4f53c8(0x10f)]=VisuMZ['BattleSystemPTB'][_0x4f53c8(0x14a)][_0x4f53c8(0x20e)][_0x4f53c8(0x180)],ImageManager[_0x4f53c8(0x193)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x20e)][_0x4f53c8(0x12b)],ImageManager[_0x4f53c8(0xc5)]=VisuMZ[_0x4f53c8(0x101)]['Settings'][_0x4f53c8(0x20e)][_0x4f53c8(0xe0)],ImageManager[_0x4f53c8(0x16a)]=VisuMZ['BattleSystemPTB']['Settings'][_0x4f53c8(0x20e)][_0x4f53c8(0x247)],ImageManager[_0x4f53c8(0x2ac)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x20e)][_0x4f53c8(0x130)],SoundManager[_0x4f53c8(0x1fc)]=function(_0x525e04){const _0x33db63=_0x4f53c8;if(!this['_ptb%1Action'[_0x33db63(0x1f4)](_0x525e04)]){const _0x4834e1=VisuMZ[_0x33db63(0x101)][_0x33db63(0x14a)][_0x33db63(0x152)];this['_ptb%1Action'[_0x33db63(0x1f4)](_0x525e04)]={'name':_0x4834e1[_0x33db63(0x27d)[_0x33db63(0x1f4)](_0x525e04)]??'','volume':_0x4834e1[_0x33db63(0x1bd)[_0x33db63(0x1f4)](_0x525e04)]??0x5a,'pitch':_0x4834e1[_0x33db63(0x173)[_0x33db63(0x1f4)](_0x525e04)]??0x64,'pan':_0x4834e1[_0x33db63(0x17a)[_0x33db63(0x1f4)](_0x525e04)]??0x0};}AudioManager[_0x33db63(0x2a7)](this[_0x33db63(0x214)[_0x33db63(0x1f4)](_0x525e04)]);},SoundManager[_0x4f53c8(0x18c)]=function(){const _0x2fe380=_0x4f53c8;this[_0x2fe380(0x1fc)](_0x2fe380(0x23e));},SoundManager[_0x4f53c8(0x1f1)]=function(){this['playPtbSfx']('GainHalf');},SoundManager['playPtbLoseFullAction']=function(){const _0xbc3a36=_0x4f53c8;this[_0xbc3a36(0x1fc)](_0xbc3a36(0x16b));},SoundManager[_0x4f53c8(0x169)]=function(){const _0x19b305=_0x4f53c8;this['playPtbSfx'](_0x19b305(0x227));},TextManager[_0x4f53c8(0x23c)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x20e)][_0x4f53c8(0x256)],TextManager[_0x4f53c8(0x1e2)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x20e)][_0x4f53c8(0x167)],TextManager[_0x4f53c8(0xdb)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)]['General'][_0x4f53c8(0x127)],TextManager[_0x4f53c8(0x95)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x20e)][_0x4f53c8(0x2b1)],TextManager['ptbTroopTeamShift']=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x20e)]['TroopTeamShiftFmt'],SceneManager[_0x4f53c8(0x2a1)]=function(){const _0x348797=_0x4f53c8;return this['_scene']&&this[_0x348797(0x269)][_0x348797(0x113)]===Scene_Battle;},BattleManager[_0x4f53c8(0x27f)]=![],BattleManager['_PTB_KEEP_PREV_ACTOR']=![],BattleManager[_0x4f53c8(0x14f)]=![],BattleManager[_0x4f53c8(0xab)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x258)][_0x4f53c8(0x218)],BattleManager[_0x4f53c8(0x221)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x258)][_0x4f53c8(0x231)],BattleManager[_0x4f53c8(0x2b5)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x258)][_0x4f53c8(0xac)],BattleManager[_0x4f53c8(0x274)]=VisuMZ['BattleSystemPTB']['Settings'][_0x4f53c8(0x258)][_0x4f53c8(0xf8)],BattleManager[_0x4f53c8(0x1e7)]=VisuMZ[_0x4f53c8(0x101)]['Settings'][_0x4f53c8(0x20e)][_0x4f53c8(0xc7)],BattleManager[_0x4f53c8(0x157)]=VisuMZ['BattleSystemPTB']['Settings'][_0x4f53c8(0x258)][_0x4f53c8(0x18d)],VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0xe1)]=BattleManager['battleSys'],BattleManager[_0x4f53c8(0x279)]=function(){const _0x1bb6ba=_0x4f53c8;if(this[_0x1bb6ba(0x96)]())return _0x1bb6ba(0x20b);return VisuMZ[_0x1bb6ba(0x101)][_0x1bb6ba(0xe1)]['call'](this);},BattleManager['isPTB']=function(){return $gameSystem['getBattleSystem']()==='PTB';},VisuMZ[_0x4f53c8(0x101)]['BattleManager_isTpb']=BattleManager[_0x4f53c8(0x11c)],BattleManager[_0x4f53c8(0x11c)]=function(){const _0xb8afaa=_0x4f53c8;if(this[_0xb8afaa(0x96)]())return![];return VisuMZ[_0xb8afaa(0x101)][_0xb8afaa(0x129)][_0xb8afaa(0x235)](this);},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x187)]=BattleManager[_0x4f53c8(0x222)],BattleManager[_0x4f53c8(0x222)]=function(){const _0xb0ef1d=_0x4f53c8;if(this[_0xb0ef1d(0x96)]())return![];return VisuMZ['BattleSystemPTB']['BattleManager_isActiveTpb'][_0xb0ef1d(0x235)](this);},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x22c)]=BattleManager['isTurnBased'],BattleManager['isTurnBased']=function(){const _0x374ba1=_0x4f53c8;if(this['isPTB']())return!![];return VisuMZ[_0x374ba1(0x101)][_0x374ba1(0x22c)][_0x374ba1(0x235)](this);},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x16d)]=BattleManager[_0x4f53c8(0x164)],BattleManager['isTeamBased']=function(){const _0x128c25=_0x4f53c8;if(this[_0x128c25(0x96)]())return!![];return VisuMZ['BattleSystemPTB'][_0x128c25(0x16d)][_0x128c25(0x235)](this);},VisuMZ[_0x4f53c8(0x101)]['BattleManager_startInput']=BattleManager['startInput'],BattleManager[_0x4f53c8(0x25e)]=function(){const _0x4d6d67=_0x4f53c8;if(this[_0x4d6d67(0x96)]())this[_0x4d6d67(0x1cd)]=![];VisuMZ[_0x4d6d67(0x101)]['BattleManager_startInput'][_0x4d6d67(0x235)](this);if(this['isPTB']()&&$gameParty[_0x4d6d67(0x1d1)]())this[_0x4d6d67(0x147)]();},BattleManager[_0x4f53c8(0x147)]=function(){const _0x32a7e5=_0x4f53c8;this[_0x32a7e5(0xd7)]();},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0xbf)]=BattleManager[_0x4f53c8(0x166)],BattleManager[_0x4f53c8(0x166)]=function(){const _0x296848=_0x4f53c8;this[_0x296848(0x96)]()?this[_0x296848(0x20c)]():VisuMZ[_0x296848(0x101)]['BattleManager_processTurn']['call'](this);},BattleManager['processTurnPTB']=function(){const _0x55552d=_0x4f53c8,_0x25f837=this[_0x55552d(0x9a)];if(_0x25f837&&!_0x25f837['friendsUnit']()['canActPTB']())this[_0x55552d(0x219)](),this[_0x55552d(0x9a)]=null,this[_0x55552d(0x9d)](![]);else{if(_0x25f837&&_0x25f837[_0x55552d(0x181)]()&&_0x25f837['canInput']()){const _0x4024ab=_0x25f837[_0x55552d(0xe4)]();if(!_0x4024ab)VisuMZ['BattleSystemPTB'][_0x55552d(0xbf)][_0x55552d(0x235)](this);else _0x4024ab['_forceAction']?VisuMZ[_0x55552d(0x101)][_0x55552d(0xbf)]['call'](this):(this[_0x55552d(0x27c)]=_0x25f837,this[_0x55552d(0x1c1)]());}else VisuMZ[_0x55552d(0x101)][_0x55552d(0xbf)][_0x55552d(0x235)](this);}},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x12e)]=BattleManager[_0x4f53c8(0x1dc)],BattleManager[_0x4f53c8(0x1dc)]=function(){const _0x34f3cf=_0x4f53c8;this[_0x34f3cf(0x96)]()?VisuMZ[_0x34f3cf(0x101)]['BattleManager_processTurn'][_0x34f3cf(0x235)](this):VisuMZ[_0x34f3cf(0x101)][_0x34f3cf(0x12e)][_0x34f3cf(0x235)](this);},VisuMZ[_0x4f53c8(0x101)]['BattleManager_selectNextActor']=BattleManager[_0x4f53c8(0xeb)],BattleManager[_0x4f53c8(0xeb)]=function(){const _0x231945=_0x4f53c8;this[_0x231945(0x96)]()?this[_0x231945(0x161)]():VisuMZ['BattleSystemPTB'][_0x231945(0xaf)][_0x231945(0x235)](this);},BattleManager[_0x4f53c8(0x161)]=function(){const _0x3c2807=_0x4f53c8;this[_0x3c2807(0x27c)]=null,this[_0x3c2807(0x12c)]=![];},VisuMZ['BattleSystemPTB']['BattleManager_endAction']=BattleManager[_0x4f53c8(0x219)],BattleManager['endAction']=function(){const _0x13748e=_0x4f53c8,_0x7d5ee5=this['_subject'];VisuMZ['BattleSystemPTB'][_0x13748e(0x226)][_0x13748e(0x235)](this),this['endActionPTB'](_0x7d5ee5);},BattleManager[_0x4f53c8(0x1a6)]=function(_0x46f852){const _0x2b75a0=_0x4f53c8;if(!this[_0x2b75a0(0x96)]())return;_0x46f852[_0x2b75a0(0x299)]()[_0x2b75a0(0x23d)](),_0x46f852[_0x2b75a0(0x299)]()[_0x2b75a0(0x272)](this['_action']);if(_0x46f852){const _0x102973=_0x46f852[_0x2b75a0(0xc4)][_0x2b75a0(0x236)](_0x28a9e8=>_0x28a9e8[_0x2b75a0(0x1ce)]);_0x46f852[_0x2b75a0(0x191)]();if(_0x102973){let _0x5b16cf=_0x102973['length'];while(_0x5b16cf--){_0x46f852[_0x2b75a0(0xc4)][_0x2b75a0(0xd6)]();}_0x46f852[_0x2b75a0(0xc4)]=_0x102973['concat'](_0x46f852[_0x2b75a0(0xc4)]);}}if(this['_forcedBattlers']['length']>0x0)this[_0x2b75a0(0x9a)]&&(!this['_actionBattlers'][_0x2b75a0(0x120)](this[_0x2b75a0(0x9a)])&&this[_0x2b75a0(0xef)]['unshift'](this[_0x2b75a0(0x9a)])),this[_0x2b75a0(0x9a)]=this[_0x2b75a0(0x276)]();else this[_0x2b75a0(0xe7)](_0x46f852)&&(this['_subject']=_0x46f852);_0x46f852[_0x2b75a0(0x299)]()[_0x2b75a0(0x100)](_0x46f852);},BattleManager[_0x4f53c8(0xe7)]=function(_0x57465){const _0x5d76cc=_0x4f53c8;if(!_0x57465)return![];if(!_0x57465[_0x5d76cc(0x181)]())return![];if(!_0x57465[_0x5d76cc(0x143)]())return![];if(!_0x57465['canInput']())return![];if(_0x57465['isPassingTurnPTB']())return![];return BattleManager[_0x5d76cc(0x27f)]&&BattleManager[_0x5d76cc(0x11a)];},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x174)]=BattleManager[_0x4f53c8(0xf9)],BattleManager['startBattle']=function(){const _0x5a6f9b=_0x4f53c8;VisuMZ['BattleSystemPTB'][_0x5a6f9b(0x174)][_0x5a6f9b(0x235)](this),this[_0x5a6f9b(0x175)]();},BattleManager['startBattlePTB']=function(){const _0x345e41=_0x4f53c8;if(!this[_0x345e41(0x96)]())return;if(this['_preemptive'])this[_0x345e41(0x202)]=_0x345e41(0x156);else this[_0x345e41(0x1cd)]?this[_0x345e41(0x202)]=_0x345e41(0xce):this[_0x345e41(0x202)]=BattleManager[_0x345e41(0x274)];this['_ptbTurnAdvantageUnit']=this[_0x345e41(0x202)]||_0x345e41(0x183);let _0x333481=0x0,_0x4c4673=0x0;switch(this['_ptbTurnAdvantageUnit']['toLowerCase']()['trim']()){case _0x345e41(0x183):let _0x88dcb2=[_0x345e41(0x156),_0x345e41(0xce)];this['_ptbTurnAdvantageUnit']=_0x88dcb2[Math[_0x345e41(0x1a5)](_0x88dcb2[_0x345e41(0x126)])];break;case'player':this[_0x345e41(0x202)]=_0x345e41(0x156);break;case _0x345e41(0x108):this[_0x345e41(0x202)]=_0x345e41(0xce);break;case _0x345e41(0x21a):_0x333481=$gameParty[_0x345e41(0x27b)](),_0x4c4673=$gameTroop['ptbLowestAgility'](),this['_ptbTurnAdvantageUnit']=_0x333481>=_0x4c4673?'actors':_0x345e41(0xce);break;case _0x345e41(0xd8):_0x333481=$gameParty[_0x345e41(0x280)](),_0x4c4673=$gameTroop[_0x345e41(0x280)](),this[_0x345e41(0x202)]=_0x333481>=_0x4c4673?'actors':_0x345e41(0xce);break;case _0x345e41(0x2a3):_0x333481=$gameParty['ptbHighestAgility'](),_0x4c4673=$gameTroop['ptbHighestAgility'](),this['_ptbTurnAdvantageUnit']=_0x333481>=_0x4c4673?'actors':_0x345e41(0xce);break;case'total\x20agi':_0x333481=$gameParty[_0x345e41(0xd4)](),_0x4c4673=$gameTroop[_0x345e41(0xd4)](),this[_0x345e41(0x202)]=_0x333481>=_0x4c4673?_0x345e41(0x156):_0x345e41(0xce);break;}this['_ptbTeamOdd']=this[_0x345e41(0x202)]===_0x345e41(0x156)?$gameParty:$gameTroop,this[_0x345e41(0x1df)]=this[_0x345e41(0x202)]===_0x345e41(0x156)?$gameTroop:$gameParty;},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x9b)]=BattleManager[_0x4f53c8(0x224)],BattleManager[_0x4f53c8(0x224)]=function(){const _0x229ff5=_0x4f53c8;this[_0x229ff5(0x96)]()?this[_0x229ff5(0x1d8)]():VisuMZ[_0x229ff5(0x101)]['BattleManager_makeActionOrders'][_0x229ff5(0x235)](this);},BattleManager[_0x4f53c8(0x1d8)]=function(){const _0x2e5a6f=_0x4f53c8;let _0x416f3f=[],_0x30c08e=[],_0x1591c3=0x0;const _0x4e00b8=$gameTroop[_0x2e5a6f(0x1b4)]();let _0x4062ab=_0x4e00b8%0x2===0x0?this['_ptbTeamEven']:this[_0x2e5a6f(0x13e)];this['_ptbCurrentUnit']=_0x4062ab;const _0x3652a5=VisuMZ[_0x2e5a6f(0x101)][_0x2e5a6f(0x14a)][_0x2e5a6f(0x258)];if(_0x4062ab===$gameParty){const _0x5d37a4=_0x3652a5[_0x2e5a6f(0x110)]?$gameParty[_0x2e5a6f(0x18b)]():$gameParty['ptbAliveMembers']();let _0x10b23e=_0x3652a5['RevivalAct']?$gameParty[_0x2e5a6f(0x18b)]():$gameParty['ptbAliveMembers'](),_0x1f4569=_0x3652a5[_0x2e5a6f(0x110)]?$gameParty[_0x2e5a6f(0x18b)]():$gameParty[_0x2e5a6f(0x282)]();(_0x3652a5[_0x2e5a6f(0x237)]??!![])&&(_0x10b23e[_0x2e5a6f(0x1d0)]((_0xf6a12d,_0x403c08)=>_0x403c08[_0x2e5a6f(0x1da)]-_0xf6a12d['agi']),_0x1f4569[_0x2e5a6f(0x1d0)]((_0x15c51f,_0x3d3600)=>_0x3d3600[_0x2e5a6f(0x1da)]-_0x15c51f[_0x2e5a6f(0x1da)]));_0x416f3f=_0x416f3f[_0x2e5a6f(0x12d)](_0x10b23e),_0x1591c3=Game_Unit[_0x2e5a6f(0x24d)];while(_0x1591c3--){_0x416f3f=_0x416f3f[_0x2e5a6f(0x12d)](_0x1f4569);}_0x1591c3=Game_Unit[_0x2e5a6f(0x24d)]-0x1;while(_0x1591c3--){_0x416f3f=_0x416f3f['concat'](_0x10b23e);}}if(_0x4062ab===$gameTroop){const _0x10ab31=_0x3652a5['RevivalAct']?$gameTroop[_0x2e5a6f(0x119)]():$gameTroop[_0x2e5a6f(0x282)]();let _0x2daf2c=_0x10ab31[_0x2e5a6f(0x236)](_0x4be683=>_0x4be683[_0x2e5a6f(0x143)]());_0x2daf2c[_0x2e5a6f(0x1d0)]((_0x17eec6,_0x41c650)=>_0x41c650[_0x2e5a6f(0x1da)]-_0x17eec6[_0x2e5a6f(0x1da)]),_0x1591c3=Game_Unit[_0x2e5a6f(0x24d)];while(_0x1591c3--){_0x30c08e=_0x30c08e[_0x2e5a6f(0x12d)](_0x2daf2c);}$gameTroop[_0x2e5a6f(0x191)]();}this[_0x2e5a6f(0xef)]=_0x416f3f[_0x2e5a6f(0x12d)](_0x30c08e);},BattleManager[_0x4f53c8(0x201)]=function(){const _0xdf4435=_0x4f53c8;if(!this[_0xdf4435(0x96)]())return;this[_0xdf4435(0xef)]=this[_0xdf4435(0xef)]||[],this[_0xdf4435(0xef)]=this[_0xdf4435(0xef)][_0xdf4435(0x236)](_0x122a8f=>_0x122a8f[_0xdf4435(0x143)]()&&!_0x122a8f[_0xdf4435(0x297)]());},VisuMZ['BattleSystemPTB'][_0x4f53c8(0x287)]=BattleManager['setup'],BattleManager['setup']=function(_0x2a62b0,_0x411ca3,_0x455a36){const _0x595d72=_0x4f53c8;VisuMZ[_0x595d72(0x101)][_0x595d72(0x287)][_0x595d72(0x235)](this,_0x2a62b0,_0x411ca3,_0x455a36),this[_0x595d72(0xf4)]();},BattleManager[_0x4f53c8(0xf4)]=function(){const _0x2f7418=_0x4f53c8;if(!BattleManager[_0x2f7418(0x96)]())return;if(Imported[_0x2f7418(0xd5)]&&VisuMZ[_0x2f7418(0x11f)][_0x2f7418(0xbb)]<1.3){let _0x5a732f='';_0x5a732f+=_0x2f7418(0xfe),_0x5a732f+=_0x2f7418(0x117),alert(_0x5a732f),SceneManager[_0x2f7418(0x1ca)]();}this[_0x2f7418(0x25d)]=undefined,$gameParty[_0x2f7418(0x257)](),$gameTroop['startTurnPTB']();},VisuMZ[_0x4f53c8(0x101)]['BattleManager_startTurn']=BattleManager[_0x4f53c8(0xd7)],BattleManager['startTurn']=function(){const _0x9040f4=_0x4f53c8;this[_0x9040f4(0x257)](),VisuMZ[_0x9040f4(0x101)][_0x9040f4(0x220)][_0x9040f4(0x235)](this),this[_0x9040f4(0x17b)]();},BattleManager[_0x4f53c8(0x257)]=function(){const _0x556f18=_0x4f53c8;if(!BattleManager[_0x556f18(0x96)]())return;$gameParty[_0x556f18(0x92)](),$gameTroop['clearPassTurnPTB']();const _0x1d2e2d=$gameTroop['turnCount']()+0x1;let _0x54b44d=_0x1d2e2d%0x2===0x0?this[_0x556f18(0x1df)]:this[_0x556f18(0x13e)],_0x2ed1b6=_0x1d2e2d%0x2===0x0?this[_0x556f18(0x13e)]:this['_ptbTeamEven'];_0x1d2e2d>0x1&&_0x2ed1b6[_0x556f18(0x1fd)](),_0x54b44d[_0x556f18(0xa8)](),_0x54b44d[_0x556f18(0x257)]();},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x196)]=BattleManager['endTurn'],BattleManager[_0x4f53c8(0x244)]=function(){const _0x18b8a3=_0x4f53c8;VisuMZ[_0x18b8a3(0x101)][_0x18b8a3(0x196)][_0x18b8a3(0x235)](this),this['endTurnPTB']();},BattleManager[_0x4f53c8(0x9f)]=function(){if(!BattleManager['isPTB']())return;},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0xc0)]=BattleManager[_0x4f53c8(0xb4)],BattleManager[_0x4f53c8(0xb4)]=function(){const _0x98b282=_0x4f53c8;if(this['isPTB']())return;VisuMZ[_0x98b282(0x101)][_0x98b282(0xc0)][_0x98b282(0x235)](this);},BattleManager[_0x4f53c8(0x17b)]=function(){const _0x37cd5b=_0x4f53c8;if(!BattleManager[_0x37cd5b(0x96)]())return;let _0x13302c='';if(this['_ptbCurrentUnit']===$gameParty){let _0x1d49b7=$gameParty['name']();_0x13302c=TextManager[_0x37cd5b(0x95)][_0x37cd5b(0x1f4)](_0x1d49b7);}else _0x13302c=TextManager[_0x37cd5b(0x11b)];if(_0x13302c!==''){this[_0x37cd5b(0x1c9)][_0x37cd5b(0x1d6)]('addText',_0x13302c);const _0x468219=BattleManager['_PTB_BETWEEN_TEAMS_WAIT'];this[_0x37cd5b(0x1c9)][_0x37cd5b(0x1d6)](_0x37cd5b(0x211),_0x468219),this[_0x37cd5b(0x1c9)][_0x37cd5b(0x1d6)](_0x37cd5b(0x2aa));}},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0xff)]=Game_Battler['prototype']['onBattleStart'],Game_Battler[_0x4f53c8(0x190)]['onBattleStart']=function(_0x2ee20e){const _0x12e45c=_0x4f53c8;VisuMZ['BattleSystemPTB'][_0x12e45c(0xff)][_0x12e45c(0x235)](this,_0x2ee20e),this['resetTurnCountPTB']();},Game_Battler[_0x4f53c8(0x190)]['resetTurnCountPTB']=function(){const _0x4ceb11=_0x4f53c8;if(!BattleManager[_0x4ceb11(0x96)]())return;this[_0x4ceb11(0x210)]=0x0;},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x26e)]=Game_Battler[_0x4f53c8(0x190)][_0x4f53c8(0x1b4)],Game_Battler[_0x4f53c8(0x190)][_0x4f53c8(0x1b4)]=function(){const _0xe56be5=_0x4f53c8;return BattleManager[_0xe56be5(0x96)]()?this['_turnCountPTB']||0x0:VisuMZ[_0xe56be5(0x101)][_0xe56be5(0x26e)][_0xe56be5(0x235)](this);},VisuMZ['BattleSystemPTB'][_0x4f53c8(0x261)]=Game_Troop[_0x4f53c8(0x190)][_0x4f53c8(0x97)],Game_Troop[_0x4f53c8(0x190)][_0x4f53c8(0x97)]=function(){const _0x29a9df=_0x4f53c8;VisuMZ['BattleSystemPTB'][_0x29a9df(0x261)][_0x29a9df(0x235)](this),this[_0x29a9df(0x249)]();},Game_Troop['prototype'][_0x4f53c8(0x249)]=function(){const _0x335a1b=_0x4f53c8;if(!BattleManager['isPTB']())return;if(Imported['VisuMZ_3_BattleAI']&&VisuMZ[_0x335a1b(0x20d)][_0x335a1b(0xbb)]<1.22){let _0x23ca2a='';_0x23ca2a+=_0x335a1b(0xf0),_0x23ca2a+=_0x335a1b(0x117),alert(_0x23ca2a),SceneManager[_0x335a1b(0x1ca)]();}let _0x80b67a=[];BattleManager[_0x335a1b(0x25d)]===$gameParty?_0x80b67a=$gameParty[_0x335a1b(0x22d)]():_0x80b67a=$gameTroop[_0x335a1b(0x119)]();for(const _0x3d399e of _0x80b67a){_0x3d399e[_0x335a1b(0x210)]=_0x3d399e[_0x335a1b(0x210)]||0x0,_0x3d399e['_turnCountPTB']++;}},VisuMZ['BattleSystemPTB']['BattleManager_invokeCounterAttack']=BattleManager[_0x4f53c8(0x13d)],BattleManager[_0x4f53c8(0x13d)]=function(_0x330b83,_0x1a407c){const _0x54361e=_0x4f53c8,_0x144ca5=BattleManager[_0x54361e(0x96)]();if(_0x144ca5)$gameSystem[_0x54361e(0x140)](_0x54361e(0x22a));VisuMZ[_0x54361e(0x101)][_0x54361e(0xfa)]['call'](this,_0x330b83,_0x1a407c);if(_0x144ca5)$gameSystem['setBattleSystem'](_0x54361e(0x20b));},VisuMZ[_0x4f53c8(0x101)]['Game_System_initialize']=Game_System[_0x4f53c8(0x190)][_0x4f53c8(0x2a5)],Game_System[_0x4f53c8(0x190)][_0x4f53c8(0x2a5)]=function(){const _0x5b0e49=_0x4f53c8;VisuMZ[_0x5b0e49(0x101)][_0x5b0e49(0x19d)][_0x5b0e49(0x235)](this),this[_0x5b0e49(0x186)]();},Game_System[_0x4f53c8(0x190)][_0x4f53c8(0x186)]=function(){const _0x48f9c2=_0x4f53c8;this[_0x48f9c2(0x116)]=!![];},Game_System[_0x4f53c8(0x190)][_0x4f53c8(0x10b)]=function(){const _0x2ce1bc=_0x4f53c8;if(BattleManager[_0x2ce1bc(0x9e)]==='battleEnd')return![];return this['_ptbActionCountVisible']===undefined&&this[_0x2ce1bc(0x186)](),this['_ptbActionCountVisible'];},Game_System[_0x4f53c8(0x190)][_0x4f53c8(0x259)]=function(_0x5caace){const _0x2c6161=_0x4f53c8;this[_0x2c6161(0x116)]===undefined&&this[_0x2c6161(0x186)](),this[_0x2c6161(0x116)]=_0x5caace;},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x292)]=Game_Action[_0x4f53c8(0x190)][_0x4f53c8(0x29b)],Game_Action['prototype'][_0x4f53c8(0x29b)]=function(){const _0x1752d1=_0x4f53c8;return BattleManager[_0x1752d1(0x96)]()?0x0:VisuMZ[_0x1752d1(0x101)][_0x1752d1(0x292)][_0x1752d1(0x235)](this);},VisuMZ['BattleSystemPTB'][_0x4f53c8(0x13f)]=Game_Action['prototype'][_0x4f53c8(0x104)],Game_Action[_0x4f53c8(0x190)][_0x4f53c8(0x104)]=function(){const _0x112c03=_0x4f53c8;VisuMZ[_0x112c03(0x101)][_0x112c03(0x13f)][_0x112c03(0x235)](this),this[_0x112c03(0x1b5)]();},Game_Action[_0x4f53c8(0x190)]['applyGlobalPTB']=function(){const _0x1c88ba=_0x4f53c8;if(!BattleManager[_0x1c88ba(0x96)]())return;if(!this[_0x1c88ba(0xca)]())return;if(!this[_0x1c88ba(0xf3)]())return;this[_0x1c88ba(0xa2)]()&&this[_0x1c88ba(0xf3)]()['id']===this[_0x1c88ba(0xca)]()['guardSkillId']()&&(BattleManager[_0x1c88ba(0xab)]&&this[_0x1c88ba(0xca)]()[_0x1c88ba(0x2b6)](),this[_0x1c88ba(0x299)]()['processPressCountChange'](_0x1c88ba(0x1a1)));const _0x23ff30=VisuMZ[_0x1c88ba(0x101)]['RegExp'],_0x1a025f=this[_0x1c88ba(0xf3)]()['note'];_0x1a025f[_0x1c88ba(0x1ba)](_0x23ff30[_0x1c88ba(0x203)])&&this['subject']()[_0x1c88ba(0x2b6)]();},Game_Action[_0x4f53c8(0x1ec)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x1cf)]['weaknessMinimumRate'],Game_Action[_0x4f53c8(0x1a4)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x1cf)][_0x4f53c8(0xe9)],VisuMZ['BattleSystemPTB']['Game_Action_apply']=Game_Action[_0x4f53c8(0x190)][_0x4f53c8(0x1be)],Game_Action[_0x4f53c8(0x190)][_0x4f53c8(0x1be)]=function(_0x1ceeca){const _0x47a153=_0x4f53c8;VisuMZ['BattleSystemPTB'][_0x47a153(0x2b2)][_0x47a153(0x235)](this,_0x1ceeca),this[_0x47a153(0x172)](_0x1ceeca);},Game_Action[_0x4f53c8(0x190)]['applyResultsPTB']=function(_0x1c30b3){const _0x17af98=_0x4f53c8;if(!BattleManager[_0x17af98(0x96)]())return;if(!_0x1c30b3)return;const _0x4aaf12=_0x1c30b3[_0x17af98(0x134)]();!_0x4aaf12[_0x17af98(0xb6)]()&&this[_0x17af98(0x299)]()['processPressCountChange'](_0x17af98(0x250)),_0x4aaf12[_0x17af98(0x1e1)]&&this[_0x17af98(0x299)]()[_0x17af98(0x1a9)]('critical');},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0xb5)]=Game_Action['prototype'][_0x4f53c8(0x142)],Game_Action[_0x4f53c8(0x190)]['executeDamage']=function(_0x2860d4,_0xc2a54a){const _0x301833=_0x4f53c8;VisuMZ[_0x301833(0x101)][_0x301833(0xb5)]['call'](this,_0x2860d4,_0xc2a54a),this['ptbCheckElementalResults'](_0x2860d4,_0xc2a54a);},Game_Action[_0x4f53c8(0x190)]['ptbCheckElementalResults']=function(_0x1ac184,_0x2cb58e){const _0x603632=_0x4f53c8;if(!BattleManager[_0x603632(0x96)]())return;if(!_0x1ac184)return;const _0x2a0272=this[_0x603632(0x2b0)](_0x1ac184);if(_0x2a0272<0x0)this['friendsUnit']()[_0x603632(0x1a9)]('absorb');else{if(_0x2a0272===0x0)this[_0x603632(0x299)]()['processPressCountChange']('immune');else{if(_0x2a0272<=Game_Action[_0x603632(0x1a4)])this[_0x603632(0x299)]()[_0x603632(0x1a9)](_0x603632(0x29f));else _0x2a0272>=Game_Action[_0x603632(0x1ec)]&&this[_0x603632(0x299)]()[_0x603632(0x1a9)](_0x603632(0xd3));}}},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x260)]=BattleManager[_0x4f53c8(0x19e)],BattleManager[_0x4f53c8(0x19e)]=function(_0x29af20,_0xb63405){const _0x4d8ef1=_0x4f53c8;VisuMZ[_0x4d8ef1(0x101)][_0x4d8ef1(0x260)][_0x4d8ef1(0x235)](this,_0x29af20,_0xb63405),_0x29af20[_0x4d8ef1(0x299)]()['processPressCountChange'](_0x4d8ef1(0x18e));},VisuMZ['BattleSystemPTB'][_0x4f53c8(0x298)]=Game_BattlerBase[_0x4f53c8(0x190)]['hide'],Game_BattlerBase[_0x4f53c8(0x190)][_0x4f53c8(0x184)]=function(){const _0x5820b5=_0x4f53c8;VisuMZ[_0x5820b5(0x101)][_0x5820b5(0x298)][_0x5820b5(0x235)](this),BattleManager[_0x5820b5(0x201)](),this[_0x5820b5(0x299)]()[_0x5820b5(0x1d3)]();},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x254)]=Game_BattlerBase[_0x4f53c8(0x190)][_0x4f53c8(0x179)],Game_BattlerBase[_0x4f53c8(0x190)][_0x4f53c8(0x179)]=function(){const _0x13197a=_0x4f53c8;VisuMZ[_0x13197a(0x101)]['Game_BattlerBase_appear']['call'](this),BattleManager[_0x13197a(0x201)](),this['friendsUnit']()[_0x13197a(0x1d3)]();},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0xe8)]=Game_Battler['prototype'][_0x4f53c8(0x29d)],Game_Battler[_0x4f53c8(0x190)][_0x4f53c8(0x29d)]=function(){const _0x44c774=_0x4f53c8;VisuMZ['BattleSystemPTB']['Game_Battler_performCollapse'][_0x44c774(0x235)](this),BattleManager['removeActionBattlersPTB'](),this[_0x44c774(0x299)]()[_0x44c774(0x1d3)]();},Game_BattlerBase[_0x4f53c8(0x190)][_0x4f53c8(0x2b6)]=function(){const _0x9bc5c3=_0x4f53c8;this['_passedTurnPTB']=!![],BattleManager[_0x9bc5c3(0x201)]();},Game_BattlerBase[_0x4f53c8(0x190)][_0x4f53c8(0x297)]=function(){const _0x182e09=_0x4f53c8;return!!this[_0x182e09(0x163)];},Game_BattlerBase[_0x4f53c8(0xf1)]=VisuMZ[_0x4f53c8(0x101)]['Settings'][_0x4f53c8(0x258)][_0x4f53c8(0x26f)],Game_BattlerBase[_0x4f53c8(0x215)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x258)][_0x4f53c8(0x1e8)],Game_BattlerBase[_0x4f53c8(0xec)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x258)][_0x4f53c8(0x112)],Game_BattlerBase[_0x4f53c8(0x190)][_0x4f53c8(0x15f)]=function(){const _0x19673d=_0x4f53c8;let _0x394888=Game_BattlerBase[_0x19673d(0xf1)];if(this['_buffs']===undefined)this['clearBuffs']();const _0x41043a=this['_buffs'][0x6]||0x0;if(_0x41043a>0x0&&Game_BattlerBase['_PTB_ACTION_AGI_BUFF'])_0x394888+=_0x41043a;else _0x41043a<0x0&&Game_BattlerBase['_PTB_ACTION_AGI_DEBUFF']&&(_0x394888+=_0x41043a);const _0x1bd3c6=VisuMZ[_0x19673d(0x101)]['RegExp'],_0x24f034=this[_0x19673d(0xf2)]();for(const _0x26fc58 of _0x24f034){if(!_0x26fc58)continue;const _0x1e9040=_0x26fc58[_0x19673d(0x284)];_0x1e9040[_0x19673d(0x1ba)](_0x1bd3c6['ActionPointTraitPlus'])&&(_0x394888+=Number(RegExp['$1']));}return Math[_0x19673d(0x176)](0x0,_0x394888);},VisuMZ[_0x4f53c8(0x101)]['Game_BattlerBase_clearStates']=Game_BattlerBase['prototype'][_0x4f53c8(0x170)],Game_BattlerBase['prototype'][_0x4f53c8(0x170)]=function(){const _0x363705=_0x4f53c8;VisuMZ[_0x363705(0x101)][_0x363705(0x2b4)][_0x363705(0x235)](this),this[_0x363705(0x299)]()[_0x363705(0x1d3)]();},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x1ef)]=Game_BattlerBase[_0x4f53c8(0x190)][_0x4f53c8(0x28f)],Game_BattlerBase[_0x4f53c8(0x190)][_0x4f53c8(0x28f)]=function(_0x58c130){const _0x57f3a4=_0x4f53c8;if(SceneManager['isSceneBattle']()&&BattleManager['isPTB']()){if(!this[_0x57f3a4(0x28a)](_0x58c130))return![];}return VisuMZ[_0x57f3a4(0x101)]['Game_BattlerBase_canUse'][_0x57f3a4(0x235)](this,_0x58c130);},Game_BattlerBase[_0x4f53c8(0x190)]['canUsePTB']=function(_0x3c165b){const _0x4b8f44=_0x4f53c8,_0x2fa96b=DataManager[_0x4b8f44(0x150)](_0x3c165b);let _0x2f1a36=DataManager[_0x4b8f44(0x290)](_0x3c165b),_0x9f8a64=this[_0x4b8f44(0x299)]()[_0x4b8f44(0x1d9)]();return _0x9f8a64+=this[_0x4b8f44(0x299)]()[_0x4b8f44(0x1d5)]()*(_0x2fa96b===_0x4b8f44(0x168)?0x1:0x2),_0x9f8a64>=_0x2f1a36;},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x1f6)]=Game_Battler[_0x4f53c8(0x190)][_0x4f53c8(0x17c)],Game_Battler['prototype'][_0x4f53c8(0x17c)]=function(_0x1070ac){const _0x2fbb96=_0x4f53c8;VisuMZ[_0x2fbb96(0x101)][_0x2fbb96(0x1f6)]['call'](this,_0x1070ac),this[_0x2fbb96(0x1f5)](_0x1070ac);},Game_Battler['prototype']['registerActionCostPTB']=function(_0x27310b){const _0xbb4e37=_0x4f53c8;if(!_0x27310b)return;if(!SceneManager[_0xbb4e37(0x2a1)]())return;if(!BattleManager[_0xbb4e37(0x96)]())return;const _0x3e7590=BattleManager[_0xbb4e37(0x1b6)];if(_0x3e7590&&_0x3e7590[_0xbb4e37(0x1ce)])return;const _0x4b93ec=DataManager[_0xbb4e37(0x225)](_0x27310b),_0x279b9e=DataManager['getActionCostTypePTB'](_0x27310b),_0xfc99fa=DataManager[_0xbb4e37(0x290)](_0x27310b);this[_0xbb4e37(0x299)]()['registerActionCostPTB'](_0x4b93ec,_0x279b9e,_0xfc99fa);},VisuMZ[_0x4f53c8(0x101)]['Game_Battler_onTurnEnd']=Game_Battler['prototype'][_0x4f53c8(0xcf)],Game_Battler[_0x4f53c8(0x190)][_0x4f53c8(0xcf)]=function(){const _0x1df990=_0x4f53c8;this['_bypassStateTurnUpdatesPTB']=BattleManager[_0x1df990(0x96)]()&&BattleManager[_0x1df990(0x157)],VisuMZ[_0x1df990(0x101)][_0x1df990(0x1db)][_0x1df990(0x235)](this),delete this[_0x1df990(0xbd)];},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x1de)]=Game_BattlerBase[_0x4f53c8(0x190)]['updateStateTurns'],Game_BattlerBase[_0x4f53c8(0x190)][_0x4f53c8(0x266)]=function(){const _0x463c43=_0x4f53c8;if(this[_0x463c43(0xbd)])return;VisuMZ['BattleSystemPTB'][_0x463c43(0x1de)][_0x463c43(0x235)](this);},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x162)]=Game_BattlerBase[_0x4f53c8(0x190)][_0x4f53c8(0xb9)],Game_BattlerBase[_0x4f53c8(0x190)][_0x4f53c8(0xb9)]=function(){const _0x21ca34=_0x4f53c8;if(this[_0x21ca34(0xbd)])return;VisuMZ[_0x21ca34(0x101)][_0x21ca34(0x162)]['call'](this);},VisuMZ['BattleSystemPTB']['Game_Battler_addState']=Game_Battler[_0x4f53c8(0x190)]['addState'],Game_Battler['prototype'][_0x4f53c8(0xb2)]=function(_0x272dd9){const _0x26dcaf=_0x4f53c8;VisuMZ[_0x26dcaf(0x101)]['Game_Battler_addState'][_0x26dcaf(0x235)](this,_0x272dd9),this['friendsUnit']()[_0x26dcaf(0x1d3)]();},VisuMZ[_0x4f53c8(0x101)]['Game_Battler_removeState']=Game_Battler[_0x4f53c8(0x190)]['removeState'],Game_Battler[_0x4f53c8(0x190)]['removeState']=function(_0x3a28a3){const _0x5c24b8=_0x4f53c8;VisuMZ[_0x5c24b8(0x101)][_0x5c24b8(0x10a)][_0x5c24b8(0x235)](this,_0x3a28a3),this['friendsUnit']()[_0x5c24b8(0x1d3)]();},VisuMZ['BattleSystemPTB'][_0x4f53c8(0xf7)]=Game_Battler[_0x4f53c8(0x190)][_0x4f53c8(0xcb)],Game_Battler['prototype'][_0x4f53c8(0xcb)]=function(_0x2d441b,_0x2f10bb){const _0x67d5f4=_0x4f53c8;VisuMZ['BattleSystemPTB'][_0x67d5f4(0xf7)]['call'](this,_0x2d441b,_0x2f10bb),this[_0x67d5f4(0x299)]()[_0x67d5f4(0x1d3)]();},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x17e)]=Game_Battler[_0x4f53c8(0x190)][_0x4f53c8(0xd2)],Game_Battler[_0x4f53c8(0x190)][_0x4f53c8(0xd2)]=function(_0x10525b,_0x456903){const _0x370ae2=_0x4f53c8;VisuMZ['BattleSystemPTB'][_0x370ae2(0x17e)][_0x370ae2(0x235)](this,_0x10525b,_0x456903),this[_0x370ae2(0x299)]()[_0x370ae2(0x1d3)]();},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x21b)]=Game_Battler['prototype'][_0x4f53c8(0x14d)],Game_Battler[_0x4f53c8(0x190)][_0x4f53c8(0x14d)]=function(_0x3d2ea5){const _0x3e698e=_0x4f53c8;VisuMZ[_0x3e698e(0x101)]['Game_Battler_removeBuff'][_0x3e698e(0x235)](this,_0x3d2ea5),this[_0x3e698e(0x299)]()[_0x3e698e(0x1d3)]();},VisuMZ['BattleSystemPTB']['Game_Battler_forceAction']=Game_Battler['prototype']['forceAction'],Game_Battler[_0x4f53c8(0x190)][_0x4f53c8(0x26c)]=function(_0x5432e9,_0x185f5d){const _0x589f6c=_0x4f53c8;BattleManager[_0x589f6c(0x96)]()?this[_0x589f6c(0x141)](_0x5432e9,_0x185f5d):VisuMZ[_0x589f6c(0x101)][_0x589f6c(0x1ab)][_0x589f6c(0x235)](this,_0x5432e9,_0x185f5d);},Game_Battler[_0x4f53c8(0x190)][_0x4f53c8(0x141)]=function(_0x38d8be,_0x266f5b){const _0x48d67b=_0x4f53c8,_0x2985ce=new Game_Action(this,!![]);_0x2985ce[_0x48d67b(0x1fb)](_0x38d8be),_0x2985ce[_0x48d67b(0x1ce)]=!![];if(_0x266f5b===-0x2)_0x2985ce[_0x48d67b(0xc6)](this[_0x48d67b(0x29c)]);else _0x266f5b===-0x1?_0x2985ce[_0x48d67b(0x15e)]():_0x2985ce[_0x48d67b(0xc6)](_0x266f5b);this[_0x48d67b(0xc4)][_0x48d67b(0x208)](_0x2985ce);},VisuMZ[_0x4f53c8(0x101)]['BattleManager_forceAction']=BattleManager['forceAction'],BattleManager['forceAction']=function(_0x493c97){const _0x49fc0b=_0x4f53c8;BattleManager[_0x49fc0b(0x96)]()?this[_0x49fc0b(0x141)](_0x493c97):VisuMZ['BattleSystemPTB'][_0x49fc0b(0x262)]['call'](this,_0x493c97);},BattleManager[_0x4f53c8(0x141)]=function(_0x2cd6d6){const _0x23c694=_0x4f53c8,_0x5ecc33=JsonEx[_0x23c694(0x23b)](_0x2cd6d6['currentAction']());this[_0x23c694(0x212)][_0x23c694(0x1d6)]([_0x2cd6d6,_0x5ecc33]);},VisuMZ['BattleSystemPTB'][_0x4f53c8(0x115)]=Game_Actor['prototype']['selectNextCommand'],Game_Actor[_0x4f53c8(0x190)][_0x4f53c8(0xdc)]=function(){const _0xf4eb15=_0x4f53c8;if(BattleManager[_0xf4eb15(0x96)]()){if(this['battler']())this[_0xf4eb15(0x21d)]()[_0xf4eb15(0x29e)]();return![];}return VisuMZ['BattleSystemPTB'][_0xf4eb15(0x115)]['call'](this);},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x205)]=Game_Actor[_0x4f53c8(0x190)][_0x4f53c8(0x155)],Game_Actor[_0x4f53c8(0x190)]['changeEquip']=function(_0x3a8939,_0x2ab07a){const _0x1098b2=_0x4f53c8;VisuMZ[_0x1098b2(0x101)][_0x1098b2(0x205)][_0x1098b2(0x235)](this,_0x3a8939,_0x2ab07a),this['friendsUnit']()[_0x1098b2(0x1d3)]();},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0xcc)]=Game_Actor[_0x4f53c8(0x190)][_0x4f53c8(0x281)],Game_Actor[_0x4f53c8(0x190)][_0x4f53c8(0x281)]=function(_0x217022,_0x34998d){const _0x346b0f=_0x4f53c8;VisuMZ[_0x346b0f(0x101)][_0x346b0f(0xcc)]['call'](this,_0x217022,_0x34998d),this[_0x346b0f(0x299)]()[_0x346b0f(0x1d3)]();},VisuMZ['BattleSystemPTB']['Game_Actor_changeEquipById']=Game_Actor[_0x4f53c8(0x190)][_0x4f53c8(0xdf)],Game_Actor['prototype'][_0x4f53c8(0xdf)]=function(_0x4d9ffb,_0x20b656){const _0x15f3ba=_0x4f53c8;VisuMZ[_0x15f3ba(0x101)][_0x15f3ba(0xba)][_0x15f3ba(0x235)](this,_0x4d9ffb,_0x20b656),this[_0x15f3ba(0x299)]()[_0x15f3ba(0x1d3)]();},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x159)]=Game_Actor[_0x4f53c8(0x190)][_0x4f53c8(0x22e)],Game_Actor[_0x4f53c8(0x190)]['discardEquip']=function(_0x35aa2c){const _0x3626b7=_0x4f53c8;VisuMZ[_0x3626b7(0x101)]['Game_Actor_discardEquip'][_0x3626b7(0x235)](this,_0x35aa2c),this[_0x3626b7(0x299)]()[_0x3626b7(0x1d3)]();},VisuMZ['BattleSystemPTB'][_0x4f53c8(0xf6)]=Game_Actor['prototype'][_0x4f53c8(0x121)],Game_Actor[_0x4f53c8(0x190)]['releaseUnequippableItems']=function(_0x3effef){const _0xa59265=_0x4f53c8;VisuMZ[_0xa59265(0x101)]['Game_Actor_releaseUnequippableItems'][_0xa59265(0x235)](this,_0x3effef),this['friendsUnit']()[_0xa59265(0x1d3)]();},VisuMZ['BattleSystemPTB'][_0x4f53c8(0xc8)]=Game_Actor[_0x4f53c8(0x190)]['changeClass'],Game_Actor[_0x4f53c8(0x190)]['changeClass']=function(_0x325120,_0x15dc8e){const _0x57228e=_0x4f53c8;VisuMZ[_0x57228e(0x101)][_0x57228e(0xc8)][_0x57228e(0x235)](this,_0x325120,_0x15dc8e),this[_0x57228e(0x299)]()[_0x57228e(0x1d3)]();},VisuMZ['BattleSystemPTB'][_0x4f53c8(0xfb)]=Game_Enemy[_0x4f53c8(0x190)][_0x4f53c8(0x19a)],Game_Enemy[_0x4f53c8(0x190)][_0x4f53c8(0x19a)]=function(_0x110129){const _0x49fa83=_0x4f53c8;VisuMZ[_0x49fa83(0x101)][_0x49fa83(0xfb)][_0x49fa83(0x235)](this,_0x110129),this[_0x49fa83(0x299)]()[_0x49fa83(0x1d3)]();},Game_Unit[_0x4f53c8(0x24d)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)]['Mechanics'][_0x4f53c8(0x148)],Game_Unit['_PTB_MIN_ACTIONS']=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x258)][_0x4f53c8(0x171)],Game_Unit[_0x4f53c8(0x27e)]=VisuMZ['BattleSystemPTB'][_0x4f53c8(0x14a)][_0x4f53c8(0x258)]['AllowOverflow'],Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x257)]=function(){const _0x388eaf=_0x4f53c8;this[_0x388eaf(0x2ae)](),this['setHalfActionsPTB'](0x0),this[_0x388eaf(0x153)](this['getMaxActionsPTB']());},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x2ae)]=function(){const _0x3cd256=_0x4f53c8;this[_0x3cd256(0x18a)]=!![];let _0x41ccec=0x0,_0x44ec17=this[_0x3cd256(0x1c5)]()[_0x3cd256(0x236)](_0xc3aa6=>_0xc3aa6[_0x3cd256(0x143)]());_0x41ccec=_0x44ec17[_0x3cd256(0x24e)]((_0x2dc0f3,_0x317ae5)=>_0x2dc0f3+_0x317ae5[_0x3cd256(0x15f)](),_0x41ccec),_0x41ccec=_0x41ccec['clamp'](Game_Unit[_0x3cd256(0x204)],Game_Unit[_0x3cd256(0x24d)]),this[_0x3cd256(0x1d7)]=_0x41ccec;},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x1d3)]=function(){const _0x36b5a0=_0x4f53c8;if(!BattleManager['isPTB']())return;if(!$gameParty[_0x36b5a0(0x26d)]())return;const _0x35802b=this[_0x36b5a0(0x232)]();this[_0x36b5a0(0x2ae)]();let _0x577bfb=this[_0x36b5a0(0x1d5)]();const _0x334e0d=this['getMaxActionsPTB']()-_0x35802b;if(BattleManager[_0x36b5a0(0x221)]&&_0x334e0d>0x0)_0x577bfb+=_0x334e0d;if(BattleManager[_0x36b5a0(0x2b5)]&&_0x334e0d<0x0)_0x577bfb+=_0x334e0d;_0x577bfb=Math[_0x36b5a0(0x1c3)](_0x577bfb,Game_Unit[_0x36b5a0(0x24d)]),this['setFullActionsPTB'](_0x577bfb);},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x1d5)]=function(){const _0x44da08=_0x4f53c8;return this[_0x44da08(0xd0)]||0x0;},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x153)]=function(_0x5ad067){const _0x3e1bd2=_0x4f53c8;this[_0x3e1bd2(0xd0)]=Math[_0x3e1bd2(0x138)](_0x5ad067)[_0x3e1bd2(0x1dd)](0x0,Game_Unit['_PTB_MAX_ACTIONS']),!Game_Unit[_0x3e1bd2(0x27e)]&&(this[_0x3e1bd2(0xd0)]=Math[_0x3e1bd2(0x1c3)](this[_0x3e1bd2(0xd0)],this[_0x3e1bd2(0x232)]())),this['_ptbActionsCur']=Math['max'](0x0,this[_0x3e1bd2(0xd0)]);},Game_Unit[_0x4f53c8(0x190)]['gainFullActionsPTB']=function(_0x2392b0){const _0x2a0323=_0x4f53c8;this['setFullActionsPTB'](this[_0x2a0323(0x1d5)]()+_0x2392b0);},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x21c)]=function(_0xeb468c){const _0x25995c=_0x4f53c8;this[_0x25995c(0xdd)](-_0xeb468c);},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x1d9)]=function(){const _0x224a43=_0x4f53c8;return this[_0x224a43(0x24c)]||0x0;},Game_Unit['prototype'][_0x4f53c8(0xc9)]=function(_0x59c15f){const _0x300c3d=_0x4f53c8;this[_0x300c3d(0x24c)]=_0x59c15f,this[_0x300c3d(0x24c)]=Math['max'](0x0,this[_0x300c3d(0x24c)]);},Game_Unit['prototype'][_0x4f53c8(0xad)]=function(_0x14ec3a){const _0x37dfed=_0x4f53c8;this[_0x37dfed(0xc9)](this[_0x37dfed(0x1d9)]()+_0x14ec3a);},Game_Unit[_0x4f53c8(0x190)]['loseHalfActionsPTB']=function(_0x498571){const _0x53d251=_0x4f53c8;this[_0x53d251(0xad)](-_0x498571);},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x232)]=function(){const _0x3b6000=_0x4f53c8;return this[_0x3b6000(0x1d7)]||0x0;},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x15a)]=function(_0x461238){const _0x59e27c=_0x4f53c8;this[_0x59e27c(0x1d7)]=_0x461238[_0x59e27c(0x1dd)](Game_Unit[_0x59e27c(0x204)],Game_Unit[_0x59e27c(0x24d)]);},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0xa3)]=function(_0x22fba4){const _0x353606=_0x4f53c8;this[_0x353606(0x21c)](_0x22fba4);},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x12a)]=function(){const _0x3e9285=_0x4f53c8;if(BattleManager[_0x3e9285(0x9a)]){if(this[_0x3e9285(0x119)]()[_0x3e9285(0x120)](BattleManager[_0x3e9285(0x9a)])){const _0x17b383=BattleManager['_subject']['currentAction']();if(_0x17b383&&_0x17b383[_0x3e9285(0x1ce)])return!![];}}return this[_0x3e9285(0x1d5)]()>0x0||this['getHalfActionsPTB']()>0x0;},Game_Unit['prototype']['registerActionCostPTB']=function(_0x5a1015,_0x532095,_0x3aca27){const _0x2f5f30=_0x4f53c8;this[_0x2f5f30(0x192)]={'changeable':_0x5a1015,'type':_0x532095,'cost':_0x3aca27,'priority':0x0,'sound':''};},Game_Unit['prototype'][_0x4f53c8(0x1a9)]=function(_0x44ffb2){const _0x45cb70=_0x4f53c8;if(!BattleManager['isPTB']())return;if(!_0x44ffb2)return;if(!this[_0x45cb70(0x139)]())return;_0x44ffb2=_0x44ffb2[_0x45cb70(0x252)]()[_0x45cb70(0x16e)]();let _0x4128e5=![];if(_0x4128e5)console[_0x45cb70(0xc1)](_0x45cb70(0x1e4)[_0x45cb70(0x1f4)](_0x44ffb2));const _0x14ee29=VisuMZ[_0x45cb70(0x101)]['Settings'][_0x45cb70(0x1cf)];this['alterActionCostPTB'](_0x14ee29[_0x45cb70(0xa1)[_0x45cb70(0x1f4)](_0x44ffb2)]||_0x45cb70(0x28b),_0x14ee29[_0x45cb70(0x106)['format'](_0x44ffb2)]||_0x45cb70(0x28b),_0x14ee29['%1Cost'[_0x45cb70(0x1f4)](_0x44ffb2)]||0x0,_0x14ee29[_0x45cb70(0x267)['format'](_0x44ffb2)]||0x0,_0x14ee29[_0x45cb70(0x291)[_0x45cb70(0x1f4)](_0x44ffb2)]||'');if(_0x4128e5)console[_0x45cb70(0xc1)](this['_ptbActionCost']);},Game_Unit['prototype'][_0x4f53c8(0x139)]=function(){const _0x16fd61=_0x4f53c8;return this['_ptbActionCost']=this[_0x16fd61(0x192)]||{},this['_ptbActionCost'][_0x16fd61(0x124)]??!![];},Game_Unit['prototype']['alterActionCostPTB']=function(_0x565746,_0x5a267a,_0x574376,_0x554fa0){const _0x499c58=_0x4f53c8;this[_0x499c58(0x192)]=this[_0x499c58(0x192)]||{};if(this[_0x499c58(0x192)]['priority']>=_0x554fa0)return;this['_ptbActionCost']['priority']=_0x554fa0;if(_0x5a267a!==_0x499c58(0x28b)){if(_0x565746===_0x499c58(0x93))_0x565746=![];if(_0x565746==='temporary')_0x565746=!![];this['_ptbActionCost'][_0x499c58(0x124)]=_0x565746;}_0x5a267a!==_0x499c58(0x28b)&&(this[_0x499c58(0x192)]['type']=_0x5a267a),this[_0x499c58(0x192)]['cost']=Math[_0x499c58(0x176)]((this['_ptbActionCost']['cost']||0x0)+_0x574376,0x0);},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x23d)]=function(){const _0x5f5f34=_0x4f53c8;this[_0x5f5f34(0x192)]=this['_ptbActionCost']||{},this['_ptbActionCost'][_0x5f5f34(0x185)]=this[_0x5f5f34(0x192)][_0x5f5f34(0x185)]||_0x5f5f34(0x168),this[_0x5f5f34(0x192)]['cost']=this['_ptbActionCost'][_0x5f5f34(0x1e6)]||0x0;let _0x3bb27a=this['_ptbActionCost']['type'][_0x5f5f34(0x252)]()[_0x5f5f34(0x16e)](),_0x1378a6=Math['max'](this['_ptbActionCost'][_0x5f5f34(0x1e6)],0x0),_0x330dab=this[_0x5f5f34(0x1d5)](),_0x131760=this[_0x5f5f34(0x1d9)]();const _0x5d392f=_0x330dab,_0x1d9403=_0x131760;let _0x49ce3b=![];if(_0x49ce3b)console['log']('----------------\x20begin\x20----------------');while(_0x1378a6--){if(_0x330dab<=0x0&&_0x131760<=0x0)break;if(_0x3bb27a==='consume')_0x131760>0x0?_0x131760--:_0x330dab--;else _0x3bb27a===_0x5f5f34(0x275)?_0x131760>0x0?_0x131760--:(_0x330dab--,_0x131760++):_0x330dab>0x0?(_0x330dab--,_0x131760++):_0x131760--;_0x49ce3b&&console[_0x5f5f34(0xc1)](_0x5f5f34(0x1eb)[_0x5f5f34(0x1f4)](_0x1378a6,this['_ptbActionCost'][_0x5f5f34(0x1e6)]),_0x5f5f34(0x1d4)[_0x5f5f34(0x1f4)](_0x330dab),_0x5f5f34(0x24b)[_0x5f5f34(0x1f4)](_0x131760));}if(_0x49ce3b)console['log'](_0x5f5f34(0x1f3));this[_0x5f5f34(0x153)](_0x330dab),this[_0x5f5f34(0xc9)](_0x131760);if(_0x5d392f-_0x330dab>0x1)SoundManager[_0x5f5f34(0xda)]();else{if(_0x1d9403-_0x131760>0x1)SoundManager[_0x5f5f34(0x169)]();else{if(_0x330dab>_0x5d392f)SoundManager['playPtbGainFullAction']();else _0x131760>_0x1d9403&&SoundManager[_0x5f5f34(0x1f1)]();}}this[_0x5f5f34(0x192)]={};},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x272)]=function(_0x394ea7){const _0xe196e1=_0x4f53c8;if(!_0x394ea7)return;const _0x387964=_0x394ea7[_0xe196e1(0xf3)]();if(!_0x387964)return;const _0x21c8de=VisuMZ[_0xe196e1(0x101)][_0xe196e1(0x25c)],_0x3d2e61=_0x387964[_0xe196e1(0x284)];if(_0x3d2e61[_0xe196e1(0x1ba)](_0x21c8de['PostFullActionChange'])){let _0x1ef8cd=Number(RegExp['$1']);this[_0xe196e1(0xdd)](_0x1ef8cd);}if(_0x3d2e61['match'](_0x21c8de[_0xe196e1(0x2a8)])){let _0x3c6f15=Number(RegExp['$1']);this['gainHalfActionsPTB'](_0x3c6f15);}},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x1fd)]=function(){const _0x21116e=_0x4f53c8;for(const _0x4b589d of this['members']()){if(!_0x4b589d)continue;const _0x30b72b=_0x4b589d['isAlive']();_0x4b589d[_0x21116e(0xcf)](),_0x4b589d['startDamagePopup'](),_0x30b72b&&_0x4b589d['isDead']()&&_0x4b589d['performCollapse']();}},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x240)]=function(){const _0x34c117=_0x4f53c8;if(this[_0x34c117(0x1d5)]()<=0x0&&this[_0x34c117(0x1d9)]()<=0x0)return!![];if(!this[_0x34c117(0x1c5)]()[_0x34c117(0xf5)](_0x3d3472=>_0x3d3472[_0x34c117(0x143)]()))return!![];return![];},Game_Unit['prototype'][_0x4f53c8(0xa8)]=function(){const _0x1dc478=_0x4f53c8;for(const _0x108c38 of this[_0x1dc478(0x119)]()){if(!_0x108c38)continue;_0x108c38[_0x1dc478(0x266)](),_0x108c38[_0x1dc478(0x122)](0x2),_0x108c38[_0x1dc478(0xb9)](),_0x108c38[_0x1dc478(0x19c)]();}},Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x92)]=function(){const _0x457ac7=_0x4f53c8;for(const _0x387728 of this['members']()){if(!_0x387728)continue;_0x387728[_0x457ac7(0x163)]=![];}},Game_Unit['prototype'][_0x4f53c8(0x27b)]=function(){const _0x4a7eeb=_0x4f53c8,_0x2e4a0d=this['members']();return Math[_0x4a7eeb(0x1c3)](..._0x2e4a0d[_0x4a7eeb(0x271)](_0x5ccf50=>_0x5ccf50[_0x4a7eeb(0x1da)]));},Game_Unit[_0x4f53c8(0x190)]['ptbHighestAgility']=function(){const _0x5d75eb=_0x4f53c8,_0x1ab287=this[_0x5d75eb(0x119)]();return Math[_0x5d75eb(0x176)](..._0x1ab287[_0x5d75eb(0x271)](_0x2f3393=>_0x2f3393[_0x5d75eb(0x1da)]));},Game_Unit[_0x4f53c8(0x190)]['ptbTotalAgility']=function(){const _0x327325=_0x4f53c8,_0x26f4cc=this[_0x327325(0x119)]();return _0x26f4cc[_0x327325(0x24e)]((_0x1e3379,_0x3429c4)=>_0x1e3379+_0x3429c4[_0x327325(0x1da)],0x0);},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0xfc)]=Game_Unit['prototype'][_0x4f53c8(0x25b)],Game_Unit[_0x4f53c8(0x190)][_0x4f53c8(0x25b)]=function(_0x190bec){const _0x35725e=_0x4f53c8;VisuMZ[_0x35725e(0x101)][_0x35725e(0xfc)][_0x35725e(0x235)](this,_0x190bec),BattleManager[_0x35725e(0x96)]()&&(this[_0x35725e(0x91)]=0x0);},Game_Unit[_0x4f53c8(0x190)]['ptbAliveMembers']=function(){const _0x19f183=_0x4f53c8,_0x51d236=this[_0x19f183(0x1c5)]();if(BattleManager[_0x19f183(0x14f)])return _0x51d236;if(BattleManager[_0x19f183(0x27f)])return _0x51d236;return _0x51d236[_0x19f183(0x1d0)]((_0x454241,_0x1ab0b7)=>_0x1ab0b7[_0x19f183(0x1da)]-_0x454241['agi']),_0x51d236;},Game_Unit['prototype']['setLastPtbIndex']=function(_0x129047){this['_ptbLastIndex']=_0x129047?_0x129047['index']():0x0,this['_ptbLastIndex']++;},VisuMZ[_0x4f53c8(0x101)]['Scene_Battle_createActorCommandWindow']=Scene_Battle['prototype']['createActorCommandWindow'],Scene_Battle[_0x4f53c8(0x190)][_0x4f53c8(0xed)]=function(){const _0x35cc87=_0x4f53c8;VisuMZ[_0x35cc87(0x101)][_0x35cc87(0x270)][_0x35cc87(0x235)](this),BattleManager[_0x35cc87(0x96)]()&&this[_0x35cc87(0x131)]();},Scene_Battle[_0x4f53c8(0x190)]['createActorCommandWindowPTB']=function(){const _0x590ca6=_0x4f53c8,_0x17bd61=this[_0x590ca6(0x223)];this['isPartyCommandWindowDisabled']()&&delete _0x17bd61[_0x590ca6(0x264)]['cancel'];},VisuMZ['BattleSystemPTB'][_0x4f53c8(0x188)]=Scene_Battle[_0x4f53c8(0x190)][_0x4f53c8(0x273)],Scene_Battle[_0x4f53c8(0x190)][_0x4f53c8(0x273)]=function(){const _0x2c0b60=_0x4f53c8;BattleManager[_0x2c0b60(0x96)]()?this['commandCancelPTB']():VisuMZ[_0x2c0b60(0x101)][_0x2c0b60(0x188)]['call'](this);},Scene_Battle[_0x4f53c8(0x190)]['commandCancelPTB']=function(){const _0x16d3ca=_0x4f53c8;this[_0x16d3ca(0x246)][_0x16d3ca(0x277)](),this[_0x16d3ca(0x223)]['close']();},VisuMZ['BattleSystemPTB'][_0x4f53c8(0x239)]=Scene_Battle[_0x4f53c8(0x190)][_0x4f53c8(0x295)],Scene_Battle['prototype'][_0x4f53c8(0x295)]=function(){const _0x135801=_0x4f53c8;BattleManager[_0x135801(0x96)]()?this[_0x135801(0xa6)]():VisuMZ[_0x135801(0x101)][_0x135801(0x239)][_0x135801(0x235)](this);},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x2a0)]=Scene_Battle[_0x4f53c8(0x190)]['createAllWindows'],Scene_Battle['prototype'][_0x4f53c8(0x102)]=function(){const _0x53365e=_0x4f53c8;VisuMZ[_0x53365e(0x101)][_0x53365e(0x2a0)]['call'](this),this['createActionCountWindowsPTB']();},Scene_Battle[_0x4f53c8(0x190)][_0x4f53c8(0x149)]=function(){const _0x20a5c1=_0x4f53c8;if(!BattleManager['isPTB']())return;const _0x4aae45=this['getChildIndex'](this[_0x20a5c1(0x1fa)]);this[_0x20a5c1(0x1ac)]=new Window_PTB_ActionCount(),this['_ptbTroopActionCountWindow']['setUnit']($gameTroop),this[_0x20a5c1(0x15c)](this[_0x20a5c1(0x1ac)],_0x4aae45),this['_ptbPartyActionCountWindow']=new Window_PTB_ActionCount(),this[_0x20a5c1(0xa7)]['setUnit']($gameParty),this[_0x20a5c1(0x15c)](this[_0x20a5c1(0xa7)],_0x4aae45),this[_0x20a5c1(0x1f9)]();},Scene_Battle['prototype'][_0x4f53c8(0x1f9)]=function(){const _0x267d95=_0x4f53c8;if(!BattleManager['isPTB']())return;if(!this[_0x267d95(0x1c9)])return;const _0x2868c8=Window_PTB_ActionCount[_0x267d95(0x14a)];if(_0x2868c8[_0x267d95(0x28c)])return;this['_logWindow']['y']+=_0x2868c8[_0x267d95(0x26a)];},Window_Base[_0x4f53c8(0xcd)]=VisuMZ[_0x4f53c8(0x101)]['Settings'][_0x4f53c8(0x20e)][_0x4f53c8(0x213)],Window_Base[_0x4f53c8(0x114)]=VisuMZ['BattleSystemPTB']['Settings']['General'][_0x4f53c8(0x27a)],Window_Base[_0x4f53c8(0x14c)]=VisuMZ[_0x4f53c8(0x101)]['Settings'][_0x4f53c8(0x20e)]['ShowCostForGuard'],Window_Base['_PTB_COST_SHOW_0']=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x20e)][_0x4f53c8(0xe2)],Window_Base[_0x4f53c8(0x151)]=VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x14a)][_0x4f53c8(0x20e)]['Show_1_Action_Cost'],VisuMZ[_0x4f53c8(0x101)]['Window_Base_makeAdditionalSkillCostText']=Window_Base[_0x4f53c8(0x190)][_0x4f53c8(0x200)],Window_Base['prototype'][_0x4f53c8(0x200)]=function(_0x267c59,_0x22b8a9,_0x397e8a){const _0x20dc50=_0x4f53c8;return _0x397e8a=VisuMZ['BattleSystemPTB'][_0x20dc50(0xa0)][_0x20dc50(0x235)](this,_0x267c59,_0x22b8a9,_0x397e8a),_0x397e8a=this[_0x20dc50(0x296)](_0x267c59,_0x22b8a9,_0x397e8a),_0x397e8a;},VisuMZ['BattleSystemPTB'][_0x4f53c8(0x1c4)]=Window_Base[_0x4f53c8(0x190)][_0x4f53c8(0x90)],Window_Base['prototype'][_0x4f53c8(0x90)]=function(_0x3169d1,_0x43a7c6,_0x535b02,_0x5ddf8a){const _0x56f8f4=_0x4f53c8;BattleManager['isPTB']()&&this[_0x56f8f4(0x113)]===Window_BattleItem?this[_0x56f8f4(0x178)](_0x3169d1,_0x43a7c6,_0x535b02,_0x5ddf8a):VisuMZ[_0x56f8f4(0x101)][_0x56f8f4(0x1c4)]['call'](this,_0x3169d1,_0x43a7c6,_0x535b02,_0x5ddf8a),this[_0x56f8f4(0xa5)]();},Window_Base[_0x4f53c8(0x190)][_0x4f53c8(0x178)]=function(_0x2a89ea,_0x1075a3,_0x2bff58,_0x22674b){const _0x1332a0=_0x4f53c8,_0x4d3e05=BattleManager[_0x1332a0(0x25a)]||$gameParty[_0x1332a0(0x119)]()[0x0],_0x29c3c2=this[_0x1332a0(0x296)](_0x4d3e05,_0x2a89ea,''),_0xb5e941=this[_0x1332a0(0x2af)](_0x29c3c2)[_0x1332a0(0x118)],_0x41b16b=Window_Base[_0x1332a0(0xcd)];let _0x4bedca=_0x1075a3+_0x22674b-_0xb5e941;if(_0x29c3c2==='')VisuMZ[_0x1332a0(0x101)]['Window_Base_drawItemNumber'][_0x1332a0(0x235)](this,_0x2a89ea,_0x1075a3,_0x2bff58,_0x22674b);else{if(this[_0x1332a0(0x253)](_0x2a89ea)){this[_0x1332a0(0xa5)]();const _0x3706cf=VisuMZ[_0x1332a0(0x285)][_0x1332a0(0x14a)][_0x1332a0(0x98)];this[_0x1332a0(0xb0)][_0x1332a0(0x1d2)]=_0x3706cf[_0x1332a0(0xee)];if(_0x41b16b){const _0x3ac243=_0x3706cf[_0x1332a0(0x22b)],_0x5fbb75=_0x3ac243[_0x1332a0(0x1f4)]($gameParty[_0x1332a0(0x1ff)](_0x2a89ea)),_0x4bddd5=this[_0x1332a0(0x1f0)](_0x5fbb75+this[_0x1332a0(0xfd)]());_0x4bedca-=_0x4bddd5;}else _0x22674b-=this[_0x1332a0(0x1f0)](this['skillCostSeparator']())+_0xb5e941;VisuMZ[_0x1332a0(0x101)][_0x1332a0(0x1c4)]['call'](this,_0x2a89ea,_0x1075a3,_0x2bff58,_0x22674b);}}this[_0x1332a0(0x1ad)](_0x29c3c2,_0x4bedca,_0x2bff58);},Window_Base[_0x4f53c8(0x190)]['makeAdditionalCostTextPTB']=function(_0x28f047,_0x3cac62,_0x527a5b){const _0x2655b6=_0x4f53c8;if(!BattleManager[_0x2655b6(0x96)]())return _0x527a5b;if(!_0x28f047)return _0x527a5b;if(!_0x3cac62)return _0x527a5b;if(_0x3cac62[_0x2655b6(0x284)][_0x2655b6(0x1ba)](VisuMZ[_0x2655b6(0x101)][_0x2655b6(0x25c)][_0x2655b6(0x28e)]))return _0x527a5b;let _0x57435d=DataManager[_0x2655b6(0x290)](_0x3cac62);const _0x463397=Window_Base[_0x2655b6(0xcd)],_0x4ba714=Window_Base[_0x2655b6(0x114)],_0x36ec8b=Window_Base[_0x2655b6(0x14c)],_0x36fb50=Window_Base[_0x2655b6(0x217)],_0x62b06f=Window_Base[_0x2655b6(0x151)];if(_0x3cac62[_0x2655b6(0x284)][_0x2655b6(0x1ba)](VisuMZ[_0x2655b6(0x101)][_0x2655b6(0x25c)][_0x2655b6(0x209)])){if(_0x57435d<0x0)return _0x527a5b;}else{if(DataManager[_0x2655b6(0xa2)](_0x3cac62)&&this[_0x2655b6(0x113)]===Window_ActorCommand){if(!_0x4ba714&&_0x3cac62['id']===_0x28f047[_0x2655b6(0x19f)]())return _0x527a5b;if(!_0x36ec8b&&_0x3cac62['id']===_0x28f047['guardSkillId']())return _0x527a5b;}if(_0x57435d<0x0)return _0x527a5b;if(!_0x36fb50&&_0x57435d===0x0)return _0x527a5b;if(!_0x62b06f&&_0x57435d===0x1)return _0x527a5b;}const _0x13ce63=DataManager['getActionCostTypePTB'](_0x3cac62);let _0x593c36=ImageManager[_0x2655b6(0x14b)];if(_0x13ce63==='convert')_0x593c36=ImageManager[_0x2655b6(0x263)];if(_0x13ce63==='compress')_0x593c36=ImageManager[_0x2655b6(0x189)];const _0x552b81='\x5cI[%1]'[_0x2655b6(0x1f4)](_0x593c36),_0x39daa0=TextManager[_0x2655b6(0x1e2)];let _0x47e68a=TextManager['ptbCostFormat']['format'](_0x57435d,_0x39daa0,_0x552b81);if(_0x527a5b==='')_0x527a5b+=_0x47e68a;else _0x463397?_0x527a5b=_0x47e68a+this[_0x2655b6(0xfd)]()+_0x527a5b:_0x527a5b=_0x527a5b+this[_0x2655b6(0xfd)]()+_0x47e68a;return _0x527a5b;},VisuMZ[_0x4f53c8(0x101)]['Window_Help_setItem']=Window_Help[_0x4f53c8(0x190)][_0x4f53c8(0x1ed)],Window_Help[_0x4f53c8(0x190)][_0x4f53c8(0x1ed)]=function(_0x5d094a){const _0x213b2e=_0x4f53c8;BattleManager[_0x213b2e(0x96)]()&&_0x5d094a&&_0x5d094a[_0x213b2e(0x284)]&&_0x5d094a[_0x213b2e(0x284)][_0x213b2e(0x1ba)](/<(?:PTB) HELP>\s*([\s\S]*)\s*<\/(?:PTB) HELP>/i)?this[_0x213b2e(0x21e)](String(RegExp['$1'])):VisuMZ[_0x213b2e(0x101)][_0x213b2e(0x17f)][_0x213b2e(0x235)](this,_0x5d094a);},Window_Selectable[_0x4f53c8(0x190)]['ptbFreeRangeSwitch']=function(){const _0x586f05=_0x4f53c8;return this[_0x586f05(0x113)]===Window_ActorCommand&&BattleManager['isPTB']()&&BattleManager[_0x586f05(0x27f)];},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x1fe)]=Window_Selectable[_0x4f53c8(0x190)][_0x4f53c8(0x1ae)],Window_Selectable[_0x4f53c8(0x190)]['cursorRight']=function(_0x234b3b){const _0x53f20a=_0x4f53c8;this[_0x53f20a(0x289)]()&&this['maxCols']()===0x1?this['ptbSwitchActorDirection'](!![]):VisuMZ[_0x53f20a(0x101)]['Window_Selectable_cursorRight'][_0x53f20a(0x235)](this,_0x234b3b);},VisuMZ['BattleSystemPTB'][_0x4f53c8(0x229)]=Window_Selectable[_0x4f53c8(0x190)][_0x4f53c8(0x278)],Window_Selectable[_0x4f53c8(0x190)]['cursorLeft']=function(_0x3494ef){const _0x7ce510=_0x4f53c8;this['ptbFreeRangeSwitch']()&&this[_0x7ce510(0x1bb)]()===0x1?this['ptbSwitchActorDirection'](![]):VisuMZ['BattleSystemPTB'][_0x7ce510(0x229)]['call'](this,_0x3494ef);},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x207)]=Window_Selectable[_0x4f53c8(0x190)][_0x4f53c8(0x265)],Window_Selectable[_0x4f53c8(0x190)][_0x4f53c8(0x265)]=function(){const _0xcf48d6=_0x4f53c8;this[_0xcf48d6(0x289)]()?this[_0xcf48d6(0x99)](!![]):VisuMZ[_0xcf48d6(0x101)][_0xcf48d6(0x207)]['call'](this);},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x286)]=Window_Selectable[_0x4f53c8(0x190)][_0x4f53c8(0x233)],Window_Selectable[_0x4f53c8(0x190)][_0x4f53c8(0x233)]=function(){const _0x586464=_0x4f53c8;this[_0x586464(0x289)]()?this[_0x586464(0x99)](![]):VisuMZ[_0x586464(0x101)][_0x586464(0x286)][_0x586464(0x235)](this);},Window_ActorCommand[_0x4f53c8(0x190)][_0x4f53c8(0x99)]=function(_0x36b0fd){const _0x538a2b=_0x4f53c8,_0x57f42c=BattleManager['_currentActor'];let _0x67bc8=$gameParty['battleMembers']()[_0x538a2b(0xb3)](_0x57f42c);const _0x3128eb=$gameParty[_0x538a2b(0x18b)]()[_0x538a2b(0x126)]-0x1;let _0x41379c=$gameParty[_0x538a2b(0x18b)]()[_0x67bc8];for(;;){_0x67bc8+=_0x36b0fd?0x1:-0x1;if(_0x67bc8<0x0)_0x67bc8=_0x3128eb;if(_0x67bc8>_0x3128eb)_0x67bc8=0x0;_0x41379c=$gameParty[_0x538a2b(0x18b)]()[_0x67bc8];if(_0x41379c&&_0x41379c[_0x538a2b(0x1d1)]()&&!_0x41379c[_0x538a2b(0x297)]())break;if(_0x41379c===_0x57f42c)break;}this[_0x538a2b(0xae)](_0x57f42c,_0x41379c);},Window_ActorCommand['prototype'][_0x4f53c8(0xae)]=function(_0x222c45,_0x2c3e89){const _0x453253=_0x4f53c8;if(_0x222c45===_0x2c3e89)return;if(_0x222c45['battler']())_0x222c45['battler']()[_0x453253(0x2a6)]();this[_0x453253(0x1c7)](),BattleManager['_subject']=_0x2c3e89,BattleManager[_0x453253(0x27c)]=_0x2c3e89,BattleManager[_0x453253(0x1c1)](),SceneManager[_0x453253(0x269)][_0x453253(0xa6)]();},VisuMZ[_0x4f53c8(0x101)][_0x4f53c8(0x1e0)]=Window_Selectable['prototype'][_0x4f53c8(0x13a)],Window_Selectable['prototype']['processTouch']=function(){const _0x5962a9=_0x4f53c8;BattleManager[_0x5962a9(0x96)]()&&BattleManager[_0x5962a9(0x27f)]&&this['constructor']===Window_BattleStatus?this[_0x5962a9(0x144)]():VisuMZ['BattleSystemPTB'][_0x5962a9(0x1e0)][_0x5962a9(0x235)](this);},Window_BattleStatus[_0x4f53c8(0x190)][_0x4f53c8(0x144)]=function(){const _0x5a680d=_0x4f53c8;this[_0x5a680d(0xb7)]()&&(TouchInput[_0x5a680d(0x216)]()&&this[_0x5a680d(0x2a4)](!![]));},Window_BattleStatus[_0x4f53c8(0x190)][_0x4f53c8(0x2a4)]=function(_0x519141){const _0x2a6558=_0x4f53c8,_0x4a90d3=SceneManager[_0x2a6558(0x269)][_0x2a6558(0x223)];if(!_0x4a90d3)return;if(!_0x4a90d3[_0x2a6558(0x125)])return;this[_0x2a6558(0x137)]=![];const _0x308e9c=this['index'](),_0x211fb3=this['hitIndex']();if(_0x211fb3>=0x0){const _0x398e4f=$gameParty['battleMembers']()[_0x308e9c],_0x1243c0=$gameParty[_0x2a6558(0x18b)]()[_0x211fb3];this[_0x2a6558(0x10e)](_0x1243c0)&&(_0x211fb3===this[_0x2a6558(0x195)]()&&(this['_doubleTouch']=!![]),this[_0x2a6558(0x1c8)](_0x211fb3),_0x4a90d3['processSwitchActors'](_0x398e4f,_0x1243c0));}},Window_BattleStatus['prototype']['canActorBeSelectedPTB']=function(_0x7d457e){const _0x31322f=_0x4f53c8;if(!_0x7d457e)return![];if(!_0x7d457e[_0x31322f(0x143)]())return![];if(!_0x7d457e[_0x31322f(0x1d1)]())return![];if(_0x7d457e[_0x31322f(0x297)]())return![];return!![];};function Window_PTB_ActionCount(){const _0x21b32e=_0x4f53c8;this[_0x21b32e(0x2a5)](...arguments);}Window_PTB_ActionCount[_0x4f53c8(0x190)]=Object['create'](Window_Base[_0x4f53c8(0x190)]),Window_PTB_ActionCount[_0x4f53c8(0x190)]['constructor']=Window_PTB_ActionCount,Window_PTB_ActionCount[_0x4f53c8(0x14a)]=VisuMZ['BattleSystemPTB'][_0x4f53c8(0x14a)][_0x4f53c8(0x128)],Window_PTB_ActionCount[_0x4f53c8(0x14a)][_0x4f53c8(0x1f2)]=Window_PTB_ActionCount['Settings'][_0x4f53c8(0x107)],Window_PTB_ActionCount['Settings'][_0x4f53c8(0x23f)]=Window_PTB_ActionCount[_0x4f53c8(0x14a)][_0x4f53c8(0x28d)],Window_PTB_ActionCount[_0x4f53c8(0x14a)][_0x4f53c8(0xbe)]=Window_PTB_ActionCount[_0x4f53c8(0x14a)][_0x4f53c8(0x1c2)],Window_PTB_ActionCount[_0x4f53c8(0x14a)]['EnemyFullActionPicture']=Window_PTB_ActionCount[_0x4f53c8(0x14a)][_0x4f53c8(0xb1)],Window_PTB_ActionCount[_0x4f53c8(0x14a)]['EmptyActionPicture']=Window_PTB_ActionCount[_0x4f53c8(0x14a)]['EmptyActionPicture'],Window_PTB_ActionCount[_0x4f53c8(0x190)][_0x4f53c8(0x2a5)]=function(){const _0x311f5c=_0x4f53c8,_0x2c855d=this['windowRect']();Window_Base[_0x311f5c(0x190)][_0x311f5c(0x2a5)][_0x311f5c(0x235)](this,_0x2c855d),this[_0x311f5c(0x255)](0x0),this[_0x311f5c(0x288)](),this['opacity']=0x0;},Window_PTB_ActionCount['prototype'][_0x4f53c8(0x2b7)]=function(){const _0x53ccc8=_0x4f53c8;return new Rectangle(0x0,0x0,Graphics[_0x53ccc8(0x118)],Graphics[_0x53ccc8(0xc2)]);},Window_PTB_ActionCount['prototype'][_0x4f53c8(0x288)]=function(){const _0x4fb281=_0x4f53c8;this[_0x4fb281(0x1e3)]=null,this[_0x4fb281(0x12f)]=0x0,this[_0x4fb281(0x136)]=0x0;const _0x7635f=Window_PTB_ActionCount[_0x4fb281(0x14a)];this[_0x4fb281(0x25f)]={'ActorPicture':_0x7635f[_0x4fb281(0x13b)]?ImageManager['loadPicture'](_0x7635f[_0x4fb281(0x13b)]):'','EnemyPicture':_0x7635f['EnemyActionPicture']?ImageManager[_0x4fb281(0x1e9)](_0x7635f[_0x4fb281(0x1af)]):'','EmptyPicture':_0x7635f[_0x4fb281(0x1a3)]?ImageManager[_0x4fb281(0x1e9)](_0x7635f[_0x4fb281(0x1a3)]):''};},Window_PTB_ActionCount['prototype'][_0x4f53c8(0x1b2)]=function(){this['padding']=0x0;},Window_PTB_ActionCount['prototype']['setUnit']=function(_0x37d806){const _0x261431=_0x4f53c8;this[_0x261431(0x1e3)]=_0x37d806,this[_0x261431(0x197)]();},Window_PTB_ActionCount[_0x4f53c8(0x190)][_0x4f53c8(0x197)]=function(){const _0x1e190f=_0x4f53c8;Window_Base['prototype']['update'][_0x1e190f(0x235)](this),this['checkNeedsUpdate'](),this[_0x1e190f(0xe5)](),this[_0x1e190f(0x19b)]();},Window_PTB_ActionCount[_0x4f53c8(0x190)][_0x4f53c8(0x1b9)]=function(){const _0x82edf=_0x4f53c8;if(!this[_0x82edf(0x1e3)])return;let _0x3fab02=![];if(this[_0x82edf(0x12f)]!==this[_0x82edf(0x1e3)]['getFullActionsPTB']())_0x3fab02=!![];else{if(this[_0x82edf(0x294)]!==this[_0x82edf(0x1e3)]['getHalfActionsPTB']())_0x3fab02=!![];else this[_0x82edf(0x136)]!==this[_0x82edf(0x1e3)][_0x82edf(0x232)]()&&(_0x3fab02=!![]);}_0x3fab02&&(this[_0x82edf(0x12f)]=this[_0x82edf(0x1e3)][_0x82edf(0x1d5)](),this['_halfActions']=this['_unit'][_0x82edf(0x1d9)](),this[_0x82edf(0x136)]=this[_0x82edf(0x1e3)][_0x82edf(0x232)](),this[_0x82edf(0x154)]());},Window_PTB_ActionCount[_0x4f53c8(0x190)]['updateVisibility']=function(){const _0x15333b=_0x4f53c8;this['isUnitTurn']()?this[_0x15333b(0x199)]=$gameSystem[_0x15333b(0x10b)]():this[_0x15333b(0x199)]=![];},Window_PTB_ActionCount[_0x4f53c8(0x190)][_0x4f53c8(0x123)]=function(){const _0x340892=_0x4f53c8;return this[_0x340892(0x1e3)]&&this['_unit']===BattleManager[_0x340892(0x25d)];},Window_PTB_ActionCount[_0x4f53c8(0x190)][_0x4f53c8(0x154)]=function(){const _0xc3be9d=_0x4f53c8;this[_0xc3be9d(0xb0)][_0xc3be9d(0x2aa)]();if(!this[_0xc3be9d(0x1e3)])return;const _0x37a985=Window_PTB_ActionCount[_0xc3be9d(0x14a)];if(!_0x37a985)return;const _0x3832d8=this[_0xc3be9d(0x1aa)](),_0x44d42e=this[_0xc3be9d(0x177)](),_0x3b859d=_0x37a985[_0xc3be9d(0x1c6)]+_0x37a985['ImageGapDistance'],_0x3bf60e=_0x37a985[_0xc3be9d(0x238)];let _0x4fc783=_0x3832d8['x'],_0x115f18=_0x3832d8['y'];while(_0x44d42e[_0xc3be9d(0x126)]>_0x37a985[_0xc3be9d(0x16f)]){_0x44d42e['shift']();}while(_0x44d42e[_0xc3be9d(0x126)]>0x0){const _0x27efab=_0x44d42e[_0xc3be9d(0x1bf)]();this[_0xc3be9d(0x135)](_0x27efab,_0x4fc783,_0x115f18,_0x44d42e['length']),_0x3bf60e?_0x4fc783+=_0x3b859d:_0x115f18+=_0x3b859d;}},Window_PTB_ActionCount[_0x4f53c8(0x190)]['createStartingCoordinates']=function(){const _0x5cd51c=_0x4f53c8,_0x475da1=Window_PTB_ActionCount[_0x5cd51c(0x14a)],_0x44cc2f=this[_0x5cd51c(0x1e3)]===$gameParty,_0x740930=_0x475da1[_0x5cd51c(0x1c6)],_0x577086=_0x740930*(_0x475da1['MaxVisible']-0x1)+_0x475da1[_0x5cd51c(0x241)]*(_0x475da1[_0x5cd51c(0x16f)]-0x2),_0x1f69cd=_0x475da1[_0x5cd51c(0x238)],_0x5c1ab7=SceneManager['_scene'][_0x5cd51c(0x1f8)]['height'];let _0x1ab3cb=0x0,_0x2a2293=0x0;const _0x23685b=_0x475da1[_0x5cd51c(0x28c)];if(_0x23685b){_0x2a2293=this[_0x5cd51c(0x29a)]-_0x5c1ab7-_0x475da1['ScreenBufferY']-_0x740930,_0x1ab3cb=_0x44cc2f?this[_0x5cd51c(0x20a)]-_0x475da1[_0x5cd51c(0x103)]-_0x740930:_0x475da1[_0x5cd51c(0x103)];if(_0x1f69cd&&_0x44cc2f)_0x1ab3cb-=_0x577086;else!_0x1f69cd&&(_0x2a2293-=_0x577086);}else _0x2a2293=_0x475da1[_0x5cd51c(0x132)],_0x1ab3cb=_0x44cc2f?this[_0x5cd51c(0x20a)]-_0x475da1[_0x5cd51c(0x103)]-_0x740930:_0x475da1['ScreenBufferX'],_0x1f69cd&&_0x44cc2f&&(_0x1ab3cb-=_0x577086);return _0x1ab3cb+=_0x44cc2f?_0x475da1[_0x5cd51c(0x1b1)]:_0x475da1[_0x5cd51c(0x245)],_0x2a2293+=_0x44cc2f?_0x475da1[_0x5cd51c(0x26b)]:_0x475da1['EnemyOffsetY'],new Point(Math[_0x5cd51c(0x138)](_0x1ab3cb),Math[_0x5cd51c(0x138)](_0x2a2293));},Window_PTB_ActionCount[_0x4f53c8(0x190)][_0x4f53c8(0x177)]=function(){const _0x464f22=_0x4f53c8,_0x49343b=Window_PTB_ActionCount[_0x464f22(0x14a)];let _0x5cf65c=!![];if(_0x49343b[_0x464f22(0x238)]){if(this['_unit']===$gameParty)_0x5cf65c=!_0x5cf65c;}else _0x5cf65c=!_0x49343b[_0x464f22(0x28c)];let _0x2d9f03=this[_0x464f22(0x1e3)][_0x464f22(0x1d9)](),_0x5d3235=this[_0x464f22(0x1e3)][_0x464f22(0x1d5)](),_0x59df30=Math[_0x464f22(0x176)](0x0,this['_unit'][_0x464f22(0x232)]()-_0x2d9f03-_0x5d3235);const _0x45f3f0=[];while(_0x2d9f03--){const _0x25d58c=_0x464f22(0x1b3);_0x45f3f0['push'](_0x25d58c);}while(_0x5d3235--){const _0x449d82=_0x464f22(0x105);_0x45f3f0[_0x464f22(0x1d6)](_0x449d82);}while(_0x59df30--){const _0x561f88=_0x464f22(0xc3);_0x5cf65c?_0x45f3f0[_0x464f22(0x1d6)](_0x561f88):_0x45f3f0[_0x464f22(0x208)](_0x561f88);}while(_0x45f3f0[_0x464f22(0x126)]<0xa){const _0x7f8cca='Nothing';_0x5cf65c?_0x45f3f0[_0x464f22(0x1d6)](_0x7f8cca):_0x45f3f0[_0x464f22(0x208)](_0x7f8cca);}return _0x45f3f0;},Window_PTB_ActionCount[_0x4f53c8(0x190)]['drawImage']=function(_0x1bb83e,_0x4401e5,_0x39bf4c,_0x4259ff){const _0x3ec3d1=_0x4f53c8;if(_0x1bb83e===_0x3ec3d1(0xea))return;if(_0x1bb83e===_0x3ec3d1(0x1b3))_0x1bb83e=this['_unit']===$gameParty?'ActorHalf':_0x3ec3d1(0x16c);if(_0x1bb83e===_0x3ec3d1(0x105))_0x1bb83e=this[_0x3ec3d1(0x1e3)]===$gameParty?_0x3ec3d1(0x2a9):_0x3ec3d1(0x182);const _0x28a34b=Window_PTB_ActionCount[_0x3ec3d1(0x14a)];if(_0x28a34b[_0x3ec3d1(0xde)[_0x3ec3d1(0x1f4)](_0x1bb83e)]){const _0x5ff14f=_0x28a34b[_0x3ec3d1(0xde)[_0x3ec3d1(0x1f4)](_0x1bb83e)],_0x1df59e=ImageManager['loadPicture'](_0x5ff14f);_0x1df59e[_0x3ec3d1(0x1b7)](this[_0x3ec3d1(0x146)][_0x3ec3d1(0x228)](this,_0x1df59e,_0x4401e5,_0x39bf4c,_0x4259ff));}else{const _0x11b15f=ImageManager[_0x3ec3d1(0xa4)[_0x3ec3d1(0x1f4)](_0x1bb83e)];this[_0x3ec3d1(0xe3)](_0x11b15f,_0x4401e5,_0x39bf4c),this[_0x3ec3d1(0x94)](_0x4259ff)&&this['drawActionsRemaining'](_0x4401e5,_0x39bf4c);}},Window_PTB_ActionCount[_0x4f53c8(0x190)][_0x4f53c8(0x146)]=function(_0x3988d1,_0x293378,_0x52958c,_0x347e29){const _0x4cb1b2=_0x4f53c8;if(!_0x3988d1)return;const _0x386417=Window_PTB_ActionCount[_0x4cb1b2(0x14a)],_0x2beba0=_0x386417[_0x4cb1b2(0x1c6)],_0x41a84a=_0x2beba0/_0x3988d1[_0x4cb1b2(0x118)],_0x258b52=_0x2beba0/_0x3988d1[_0x4cb1b2(0xc2)],_0x5a80ae=Math[_0x4cb1b2(0x1c3)](_0x41a84a,_0x258b52,0x1),_0x342691=_0x3988d1[_0x4cb1b2(0xc2)],_0x46e360=_0x3988d1[_0x4cb1b2(0xc2)],_0xea1149=Math[_0x4cb1b2(0x138)](_0x342691*_0x5a80ae),_0x2c60b8=Math[_0x4cb1b2(0x138)](_0x46e360*_0x5a80ae),_0x573128=Math['round'](_0x293378+(_0x2beba0-_0xea1149)/0x2),_0x5efe91=Math['round'](_0x52958c+(_0x2beba0-_0x2c60b8)/0x2);this['contents'][_0x4cb1b2(0xd9)][_0x4cb1b2(0x2a2)]=_0x386417[_0x4cb1b2(0x160)],this[_0x4cb1b2(0xb0)][_0x4cb1b2(0x1f7)](_0x3988d1,0x0,0x0,_0x342691,_0x46e360,_0x573128,_0x5efe91,_0xea1149,_0x2c60b8),this[_0x4cb1b2(0xb0)][_0x4cb1b2(0xd9)]['imageSmoothingEnabled']=!![],this['canDrawActionsRemaining'](_0x347e29)&&this[_0x4cb1b2(0x24f)](_0x293378,_0x52958c);},Window_PTB_ActionCount[_0x4f53c8(0x190)][_0x4f53c8(0xe3)]=function(_0x545c80,_0x5b5192,_0x54f429){const _0x1b6b8b=_0x4f53c8,_0x3cef00=Window_PTB_ActionCount['Settings'];let _0x471cd0=_0x3cef00[_0x1b6b8b(0x1c6)];const _0x48ba7=ImageManager[_0x1b6b8b(0x158)]('IconSet'),_0x3ee385=ImageManager[_0x1b6b8b(0x242)],_0x487840=ImageManager[_0x1b6b8b(0x9c)],_0x2f80e8=_0x545c80%0x10*_0x3ee385,_0x3188a1=Math[_0x1b6b8b(0x268)](_0x545c80/0x10)*_0x487840;this[_0x1b6b8b(0xb0)][_0x1b6b8b(0xd9)]['imageSmoothingEnabled']=_0x3cef00[_0x1b6b8b(0x20f)],this[_0x1b6b8b(0xb0)]['blt'](_0x48ba7,_0x2f80e8,_0x3188a1,_0x3ee385,_0x487840,_0x5b5192,_0x54f429,_0x471cd0,_0x471cd0),this[_0x1b6b8b(0xb0)][_0x1b6b8b(0xd9)][_0x1b6b8b(0x2a2)]=!![];},Window_PTB_ActionCount[_0x4f53c8(0x190)]['updatePosition']=function(){const _0x393bed=_0x4f53c8,_0x4f1b6d=Window_PTB_ActionCount[_0x393bed(0x14a)];if(_0x4f1b6d[_0x393bed(0x28c)])return;if(!_0x4f1b6d[_0x393bed(0xbc)])return;const _0x17eee0=SceneManager[_0x393bed(0x269)][_0x393bed(0x10c)];if(!_0x17eee0)return;_0x17eee0[_0x393bed(0x199)]?(this['x']=_0x4f1b6d['RepositionTopHelpX']||0x0,this['y']=_0x4f1b6d[_0x393bed(0x22f)]||0x0):(this['x']=0x0,this['y']=0x0);},Window_PTB_ActionCount[_0x4f53c8(0x190)][_0x4f53c8(0x94)]=function(_0x5a65ca){const _0x2594ad=_0x4f53c8,_0xe5d81b=Window_PTB_ActionCount[_0x2594ad(0x14a)];if(!_0xe5d81b[_0x2594ad(0xe6)])return![];const _0x36b57a=_0xe5d81b[_0x2594ad(0x28c)],_0x2535de=_0xe5d81b[_0x2594ad(0x238)],_0x593aae=this[_0x2594ad(0x1e3)]===$gameParty;if(_0x2535de)return _0x593aae?_0x5a65ca===0x0:_0x5a65ca===_0xe5d81b[_0x2594ad(0x16f)]-0x1;else return _0x36b57a?_0x5a65ca===0x0:_0x5a65ca===_0xe5d81b[_0x2594ad(0x16f)]-0x1;},Window_PTB_ActionCount['prototype'][_0x4f53c8(0x24f)]=function(_0x582fa9,_0x464f1e){const _0x348963=_0x4f53c8;this['resetFontSettings']();const _0x55ef06=Window_PTB_ActionCount[_0x348963(0x14a)],_0x493f30=new Rectangle(_0x582fa9,_0x464f1e,_0x55ef06[_0x348963(0x1c6)],_0x55ef06[_0x348963(0x1c6)]);_0x493f30['x']+=_0x55ef06[_0x348963(0x2b3)],_0x493f30['y']+=_0x55ef06[_0x348963(0x198)];const _0x2491ad=this[_0x348963(0x1e3)][_0x348963(0x1d5)]()+this[_0x348963(0x1e3)][_0x348963(0x1d9)]();this['contents'][_0x348963(0x1d2)]=_0x55ef06[_0x348963(0x23a)],this[_0x348963(0xb0)]['drawText'](_0x2491ad,_0x493f30['x'],_0x493f30['y'],_0x493f30[_0x348963(0x118)],_0x493f30[_0x348963(0xc2)],'center'),this[_0x348963(0xa5)]();};function _0x24a6(){const _0x2e62b5=['removeBuff','ActionPointForceConsume','_PTB_RESET_INDEX','getActionCostTypePTB','_PTB_COST_SHOW_1','Sound','setFullActionsPTB','refresh','changeEquip','actors','_PTB_STATE_BUFF_TURN_UPDATES_ONLY_ON_OPPONENT_TURNS','loadSystem','Game_Actor_discardEquip','setMaxActionsPTB','registerCommand','addChildAt','ActionPointConvert','decideRandomTarget','ptbActionCount','PictureSmoothing','selectNextActorPTB','Game_BattlerBase_updateBuffTurns','_passedTurnPTB','isTeamBased','status','processTurn','ActionCountAbbr','consume','playPtbLoseHalfAction','ptbEnemyHalfActionsIcon','LoseFull','EnemyHalf','BattleManager_isTeamBased','trim','MaxVisible','clearStates','MinActions','applyResultsPTB','%1Pitch','BattleManager_startBattle','startBattlePTB','max','createContentsArray','drawItemNumberPTB','appear','%1Pan','ptbCreateTeamSwitchText','useItem','name','Game_Battler_addDebuff','Window_Help_setItem','ActorActionsIcon','isActor','EnemyFull','random','hide','type','initBattleSystemPTB','BattleManager_isActiveTpb','Scene_Battle_commandCancel','ptbCompressCostIcon','_inBattle','battleMembers','playPtbGainFullAction','StateBuffUpdate','reflect','return\x200','prototype','makeActions','_ptbActionCost','ptbActorHalfActionsIcon','ActionPointConsume','index','BattleManager_endTurn','update','ActionsRemainingOffsetY','visible','transform','updateVisibility','startDamagePopup','Game_System_initialize','invokeMagicReflection','attackSkillId','605264OHwUvP','guard','VisuMZ_0_CoreEngine','EmptyActionPicture','PTB_MAX_RESIST_RATE','randomInt','endActionPTB','Visible','945NDkxbd','processPressCountChange','createStartingCoordinates','Game_Battler_forceAction','_ptbTroopActionCountWindow','drawTextEx','cursorRight','EnemyActionPicture','VisuMZ_1_ItemsEquipsCore','ActorOffsetX','updatePadding','Half','turnCount','applyGlobalPTB','_action','addLoadListener','398262KyOekL','checkNeedsUpdate','match','maxCols','30LTVWup','%1Volume','apply','shift','ActionPointCompress','startActorInput','EnemyActionHalfPicture','min','Window_Base_drawItemNumber','aliveMembers','ImageSize','playCursorSound','select','_logWindow','exit','2GsoUHR','5215MWyTaP','_surprise','_forceAction','Press','sort','canInput','fontSize','recalculateActionsPTB','full:%1','getFullActionsPTB','push','_ptbActionsMax','makeActionOrdersPTB','getHalfActionsPTB','agi','Game_Battler_onTurnEnd','finishActorInput','clamp','Game_BattlerBase_updateStateTurns','_ptbTeamEven','Window_Selectable_processTouch','critical','ptbActionPointsAbbr','_unit','Key:\x20%1','9rhShJH','cost','_PTB_BETWEEN_TEAMS_WAIT','AgiBuff','loadPicture','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','times:%1/%2','PTB_MIN_WEAKNESS_RATE','setItem','ActionPointForceCompress','Game_BattlerBase_canUse','textWidth','playPtbGainHalfAction','ActorHalfActionPicture','-----------------\x20end\x20-----------------','format','registerActionCostPTB','Game_Battler_useItem','blt','_statusWindow','repositionLogWindowPTB','_windowLayer','setSkill','playPtbSfx','performTurnEndPTB','Window_Selectable_cursorRight','numItems','makeAdditionalSkillCostText','removeActionBattlersPTB','_ptbTurnAdvantageUnit','PassTurn','_PTB_MIN_ACTIONS','Game_Actor_changeEquip','DefaultCostItem','Window_Selectable_cursorPagedown','unshift','ShowActionPointCost','innerWidth','PTB','processTurnPTB','BattleAI','General','IconSmoothing','_turnCountPTB','waitCount','_forcedBattlers','CostPosition','_ptb%1Action','_PTB_ACTION_AGI_BUFF','isTriggered','_PTB_COST_SHOW_0','GuardPass','endAction','lowest\x20agi','Game_Battler_removeBuff','loseCurrentActionsPTB','battler','setText','ConvertParams','BattleManager_startTurn','_PTB_RECALC_ADD_DIFF','isActiveTpb','_actorCommandWindow','makeActionOrders','getActionTypeChangeablePTB','BattleManager_endAction','LoseHalf','bind','Window_Selectable_cursorLeft','DTB','ItemQuantityFmt','BattleManager_isTurnBased','allMembers','discardEquip','RepositionTopHelpY','FUNC','GainDiff','getMaxActionsPTB','cursorPageup','parameters','call','filter','AgiTurnOrder','DrawHorz','Scene_Battle_commandFight','ActionsRemainingFontSize','makeDeepCopy','ptbActionPointsFull','payActionCostPTB','GainFull','ActorFullActionPicture','meetEndTurnConditionsPTB','ImageGapDistance','iconWidth','ARRAYFUNC','endTurn','EnemyOffsetX','_partyCommandWindow','EnemyHalfActionsIcon','304ycwVyh','increaseTurnPTB','ARRAYSTR','half:%1','_ptbHalfActions','_PTB_MAX_ACTIONS','reduce','drawActionsRemaining','miss','95233PhqBxi','toLowerCase','isDrawItemNumber','Game_BattlerBase_appear','setBackgroundType','ActionCountFull','startTurnPTB','Mechanics','setBattleSystemPTBActionCountVisible','_actor','onBattleStart','RegExp','_ptbCurrentUnit','startInput','_storedBitmaps','BattleManager_invokeMagicReflection','Game_Troop_increaseTurn','BattleManager_forceAction','ptbConvertCostIcon','_handlers','cursorPagedown','updateStateTurns','%1Priority','floor','_scene','LogWindowTopOffsetY','ActorOffsetY','forceAction','inBattle','Game_Battler_turnCount','GenerateBase','Scene_Battle_createActorCommandWindow','map','postGainPTB','commandCancel','_PTB_NEUTRAL_TURN_ADVANTAGE','compress','getNextSubject','setup','cursorLeft','battleSys','ShowCostForAttack','ptbLowestAgility','_currentActor','%1Name','_PTB_ACTION_OVERFLOW','_PTB_FREE_CHANGE','agility','forceChangeEquip','ptbAliveMembers','STR','note','ItemsEquipsCore','Window_Selectable_cursorPageup','BattleManager_setup','initMembers','ptbFreeRangeSwitch','canUsePTB','unchanged','BottomPosition','ActorActionFullPicture','HideActionPointCost','canUse','getActionCostValuePTB','%1Sound','Game_Action_speed','convert','_halfActions','commandFight','makeAdditionalCostTextPTB','isPassingTurnPTB','Game_BattlerBase_hide','friendsUnit','innerHeight','speed','_lastTargetIndex','performCollapse','stepForward','resist','Scene_Battle_createAllWindows','isSceneBattle','imageSmoothingEnabled','highest\x20agi','onTouchSelectPTB','initialize','stepBack','playStaticSe','PostHalfActionChange','ActorFull','clear','ARRAYJSON','ptbEmptyActionsIcon','toUpperCase','createActionsPTB','textSizeEx','calcElementRate','PartyTeamShiftFmt','Game_Action_apply','ActionsRemainingOffsetX','Game_BattlerBase_clearStates','_PTB_RECALC_SUB_DIFF','passTurnPTB','windowRect','JSON','drawItemNumber','_ptbLastIndex','clearPassTurnPTB','permanent','canDrawActionsRemaining','ptbPartyTeamShift','isPTB','increaseTurn','ItemScene','ptbSwitchActorDirection','_subject','BattleManager_makeActionOrders','iconHeight','updateTurn','_phase','endTurnPTB','Window_Base_makeAdditionalSkillCostText','%1Change','isSkill','reduceActionsPTB','ptb%1ActionsIcon','resetFontSettings','startActorCommandSelection','_ptbPartyActionCountWindow','updateStateTurnsPTB','ActionPointForceConvert','parse','_PTB_GUARD_PASS','LoseDiff','gainHalfActionsPTB','processSwitchActors','BattleManager_selectNextActor','contents','EnemyActionFullPicture','addState','indexOf','endAllBattlersTurn','Game_Action_executeDamage','isHit','isOpen','960454wHwpJv','updateBuffTurns','Game_Actor_changeEquipById','version','RepositionTopForHelp','_bypassStateTurnUpdatesPTB','EnemyHalfActionPicture','BattleManager_processTurn','BattleManager_endAllBattlersTurn','log','height','Empty','_actions','ptbEnemyFullActionsIcon','setTarget','TeamShiftWait','Game_Actor_changeClass','setHalfActionsPTB','subject','addBuff','Game_Actor_forceChangeEquip','_PTB_COST_POSITION','enemies','onTurnEnd','_ptbActionsCur','ARRAYEVAL','addDebuff','weakness','ptbTotalAgility','VisuMZ_2_PartySystem','pop','startTurn','average\x20agi','_context','playPtbLoseFullAction','ptbCostFormat','selectNextCommand','gainFullActionsPTB','%1ActionPicture','changeEquipById','EnemyActionsIcon','BattleManager_battleSys','Show_0_Action_Cost','drawBigIcon','currentAction','updatePosition','DrawActionsRemaining','keepPrevSubjectPTB','Game_Battler_performCollapse','resistMaximumRate','Nothing','selectNextActor','_PTB_ACTION_AGI_DEBUFF','createActorCommandWindow','ItemQuantityFontSize','_actionBattlers','VisuMZ_3_BattleAI\x20needs\x20to\x20be\x20updated\x20','_PTB_ACTION_BASE','traitObjects','item','initMembersPTB','some','Game_Actor_releaseUnequippableItems','Game_Battler_addBuff','NeutralAdvantage','startBattle','BattleManager_invokeCounterAttack','Game_Enemy_transform','Game_Unit_onBattleStart','skillCostSeparator','VisuMZ_2_PartySystem\x20needs\x20to\x20be\x20updated\x20','Game_Battler_onBattleStart','setLastPtbIndex','BattleSystemPTB','createAllWindows','ScreenBufferX','applyGlobal','Full','%1Type','ActorActionHalfPicture','enemy','NUM','Game_Battler_removeState','isBattleSystemPTBActionCountVisible','_helpWindow','2777890AgHseu','canActorBeSelectedPTB','ptbActorFullActionsIcon','RevivalAct','SystemActionCountVisibility','AgiDebuff','constructor','_PTB_COST_SHOW_ATTACK','Game_Actor_selectNextCommand','_ptbActionCountVisible','in\x20order\x20for\x20VisuMZ_2_BattleSystemPTB\x20to\x20work.','width','members','_PTB_KEEP_PREV_ACTOR','ptbTroopTeamShift','isTpb','ARRAYNUM','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','PartySystem','includes','releaseUnequippableItems','removeStatesAuto','isUnitTurn','changeable','active','length','ActionCountCostFmt','ActionCountDisplay','BattleManager_isTpb','canActPTB','ActorHalfActionsIcon','_inputting','concat','BattleManager_finishActorInput','_fullActions','EmptyActionsIcon','createActorCommandWindowPTB','ScreenBufferY','CostConsumeIcon','result','drawImage','_maxActions','_doubleTouch','round','canAlterActionCostPTB','processTouch','ActorActionPicture','DefaultCostTypeSkill','invokeCounterAttack','_ptbTeamOdd','Game_Action_applyGlobal','setBattleSystem','forceActionPTB','executeDamage','canMove','processTouchPTB','EVAL','drawPicture','startInputPTB','MaxActions','createActionCountWindowsPTB','Settings','ptbConsumeCostIcon','_PTB_COST_SHOW_GUARD'];_0x24a6=function(){return _0x2e62b5;};return _0x24a6();}