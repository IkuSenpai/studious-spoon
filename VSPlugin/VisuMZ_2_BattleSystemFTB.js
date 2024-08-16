//=============================================================================
// VisuStella MZ - Battle System - FTB - Free Turn Battle
// VisuMZ_2_BattleSystemFTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemFTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemFTB = VisuMZ.BattleSystemFTB || {};
VisuMZ.BattleSystemFTB.version = 1.12;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.12] [BattleSystemFTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_FTB_VisuStella_MZ
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
 * Free Turn Battle (FTB) is a type of battle system made for RPG Maker MZ,
 * where the teams for actors and enemies take turns attacking one another as
 * a whole. During each team's turns, an action count is given to them and they
 * can freely perform actions among their teammates as wanted (or if turned off
 * by the Plugin Parameters, in a cycle). When the action count is depleted or
 * if one team ran out of battler's that can act, the other team begins their
 * turn and so forth.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "ftb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actor and enemy teams take turns attacking each other as a whole.
 * * Action counts are given to each team at the start of each turn to utilize
 *   actions for.
 * * If enabled, actors can be freely switched around to perform actions with.
 * * Alter the mechanics of the Battle System FTB to your liking through the
 *   Plugin Parameters.
 * * An Action Count Display is shown for each side to relay information to the
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
 * However, because of the nature of team-based battle systems, agility and
 * speed have no impact on action speeds as action speeds are now instantly
 * performed.
 * 
 * Agility, however, can influence Action Counts through buffs and debuffs if
 * enabled through the Plugin Parameters. Each stack of Agility buffs will
 * raise the Action Count for a team while each stack of Agility debuffs will
 * decrease them for subsequent turns.
 * 
 * ---
 * 
 * Action Count
 * 
 * Each team will have an allotted number of actions available for usage. This
 * amount is determined by the number of alive members they have available by
 * default multiplied by their action count base.
 * 
 * The amount of actions that can be performed at base value can be determined
 * inside the Plugin Parameters > Mechanics Settings > Base.
 * 
 * The action count can be altered by AGI buffs and/or debuffs depending on the
 * Plugin Parameter settings.
 * 
 * Further action counts can be altered by various notetag effects tied to the
 * trait objects of each battle member.
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
 * For enemy teams, enemies will always go in order from left-to-right for the
 * front view or right-to-left for sideview. If there are actions left, the
 * enemy team will cycle back to the first acting enemy.
 * 
 * ---
 * 
 * Free Range Switching
 * 
 * If this is enabled (it's an optional feature) and it's the player's turn,
 * the player can freely switch between actors in his/her party by pressing the
 * left/right buttons or the page up/page down buttons. The Actor Command
 * Window will automatically update to the newly selected actor. This gives the
 * player complete control and freedom over the party and the party's actions.
 * 
 * For touch controls, instead of pressing left/right or page up/page down on
 * the keyboard, click on the Battle Status Window for the target actor to be
 * selected to perform an action. The Actor Command Window will automatically
 * update to the newly selected actor.
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
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === General FTB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <FTB Help>
 *  description
 *  description
 * </FTB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under FTB.
 * - This is primarily used if the skill behaves differently in FTB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to FTB.
 *
 * ---
 * 
 * === Action Cost-Related Notetags ===
 * 
 * ---
 *
 * <FTB Action Cost: x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the FTB action cost of this skill/item to 'x'.
 * - Replace 'x' with a number value representing the action cost required to
 *   perform the skill.
 *
 * ---
 *
 * <FTB Hide Action Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the FTB action cost for this skill/item hidden regardless of Plugin
 *   Parameter settings.
 *
 * ---
 *
 * <FTB Show Action Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the FTB action cost for this skill/item visible regardless of Plugin
 *   Parameter settings.
 *
 * ---
 * 
 * === Mechanics-Related Notetags ===
 * 
 * ---
 *
 * <FTB Pass Turn>
 *
 * - Used for: Skill, Item Notetags
 * - If a battler uses this skill/item, then even if there are actions left for
 *   the team to perform, that battler would no longer be able to input as they
 *   have already passed their turn.
 * - By default, this applies to "Guard". If you don't want it to apply to the
 *   Guard skill, turn it off in the Plugin Parameters for mechanics.
 *
 * ---
 *
 * <FTB Actions: +x>
 * <FTB Actions: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Battlers associated with these trait objects can increase or decrease the
 *   maximum number of actions performed each turn.
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
 * System: FTB Action Count Visibility
 * - Determine the visibility of the FTB Action Count Display.
 *
 *   Visibility:
 *   - Changes the visibility of the FTB Action Count Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Determines the general settings of the FTB Battle System. These settings
 * range from determining how the Action Count resources and costs are
 * displayed to the text that appear during team shifting.
 *
 * ---
 *
 * Action Counts
 * 
 *   Full Name:
 *   - What is the full name of "Action Counts" in your game?
 * 
 *   Abbreviation:
 *   - What is the abbreviation of "Action Counts" in your game?
 * 
 *   Cost Format:
 *   - How are Action Count costs displayed?
 *   - %1 - Cost, %2 - Abbr Text, %3 - Icon
 * 
 * ---
 * 
 * Icons
 * 
 *   Actor Action Icon:
 *   - What icon is used to represent actor actions?
 * 
 *   Enemy Action Icon:
 *   - What icon is used to represent enemy actions?
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
 * Determines the mechanics of the FTB Battle System. From here, you can
 * enable or disable core mechanics, determine how to determine turn advantage,
 * and how the various supporting mechanics operate.
 *
 * ---
 *
 * Main Mechanics
 * 
 *   Enable Free Switch?:
 *   - Enable free range switching between actors?
 * 
 *     Maintain Same Actor?:
 *     - Requires Free Switching.
 *     - Maintain the same actor after an action or move onto the next
 *       available actor?
 * 
 *   Reset Index New Turns:
 *   - Resets the selected actor whenever a new turn starts?
 *   - Needs "Free Switching" to be off.
 * 
 *   Current Turn Revival Act?:
 *   - Allow revived actors to act the current turn they're revived?
 * 
 *   Guard > Pass Turn?:
 *   - Does guarding cause a battler to pass turn?
 * 
 *   Gain Differences?:
 *   - If the max Action Count for a team changes, gain the difference in value
 *     if positive?
 * 
 *   Lose Differences?:
 *   - If the max Action Count for a team changes, lose the difference in value
 *     if negative?
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
 * Default Action Costs
 * 
 *   Skills:
 *   - What is the default action cost for skills?
 * 
 *   Items:
 *   - What is the default action cost for items?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Action Count Display Settings
 * ============================================================================
 *
 * Adjust the settings for the Action Count Display. They appear in the upper
 * or lower corners of the screen for the player party and the enemy troop.
 *
 * ---
 *
 * Display Settings
 * 
 *   Draw Horizontally?:
 *   - Which direction do you want the Action Count Display to go?
 * 
 *   Bottom Position?:
 *   - Place the Action Count Display towards the bottom of the screen?
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
 *   Actor Action Picture:
 *   Enemy Action Picture:
 *   Empty Action Picture:
 *   - Optional. Place an image for an actor, enemy, or empty action instead of
 *     an icon?
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
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.12: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > Mechanics > Current Turn Revival Act?:
 * **** Allow revived actors to act the current turn they're revived?
 * 
 * Version 1.11: December 14, 2023
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
 * Version 1.10: October 20, 2022
 * * Bug Fixes!
 * ** Fixed problem with the Action Count Display's Actor Offset Y not working
 *    properly. Fix made by Arisu.
 * 
 * Version 1.09: June 2, 2022
 * * Bug Fixes!
 * ** Fixed a bug where Force Actions do not work when there's only one action
 *    left for the turn. Fix made by Olivia.
 * 
 * Version 1.08: April 21, 2022
 * * Bug Fixes!
 * ** Fixed a bug that prevents the battle system from shifting back to the
 *    default battle system after an enemy counter attack. Fix made by Olivia.
 * 
 * Version 1.07: April 14, 2022
 * * Compatibility Update!
 * ** Now works more compatible with counters. Update made by Olivia.
 * 
 * Verison 1.06: March 17, 2022
 * * Bug Fixes!
 * ** Death by slip damage will now perform the proper death animation.
 *    Fix made by Olivia.
 * 
 * Version 1.05: August 13, 2021
 * * Bug Fixes!
 * ** Fixed some Plugin Parameters that did not work properly when
 *    showing/hiding action costs. Fix made by Irina.
 * 
 * Version 1.04: June 18, 2021
 * * Documentation Update!
 * ** Added "Action Count" section to Major Changes for extra clarity on how
 *    action counts are determined.
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Olivia:
 * *** <FTB Show Action Cost>
 * **** Makes the FTB action cost for this skill/item visible regardless of
 *      Plugin Parameter settings.
 * 
 * Version 1.03: May 28, 2021
 * * Documentation Update!
 * ** Updated the text for Plugin Parameter "Maintain Same Actor?"
 * *** Requires Free Switching. Maintain the same actor after an action or move
 *     onto the next available actor?
 * * Feature Update!
 * ** When there are more actions available than the number of actions that can
 *    be shown at a time, the visible icons displayed will be trimmed to fit
 *    the number of maximum visible icons displayed. Update by Olivia.
 * 
 * Version 1.02: April 2, 2021
 * * Bug Fixes!
 * ** Action costs for FTP will now only take effect if inside battle only.
 *    Fix made by Olivia.
 * 
 * Version 1.01: March 19, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.00 Official Release Date: February 22, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemActionCountVisibility
 * @text System: FTB Action Count Visibility
 * @desc Determine the visibility of the FTB Action Count Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the FTB Action Count Display.
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
 * @param BattleSystemFTB
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
 * @desc Determines the general settings of the FTB Battle System.
 * @default {"ActionCounts":"","ActionCountFull:str":"Fight Points","ActionCountAbbr:str":"FP","ActionCountCostFmt:str":"\\FS[22]\\C[0]×%1%3\\C[0]","Icons":"","ActorActionsIcon:num":"165","EnemyActionsIcon:num":"162","EmptyActionsIcon:num":"161","TeamShift":"","PartyTeamShiftFmt:str":"%1's Turn!","TroopTeamShiftFmt:str":"Opponent's Turn!","TeamShiftWait:num":"60","DisplayedCosts":"","CostPosition:eval":"false","ShowCostForAttack:eval":"false","ShowCostForGuard:eval":"false","Show_0_Action_Cost:eval":"true","Show_1_Action_Cost:eval":"true"}
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Determines the mechanics of the FTB Battle System.
 * @default {"Main":"","FreeChange:eval":"true","KeepPrevActor:eval":"true","GuardPass:eval":"true","GainDiff:eval":"true","LoseDiff:eval":"false","StateBuffUpdate:eval":"true","TurnAdvantage":"","NeutralAdvantage:str":"average agi","ActionGeneration":"","GenerateBase:num":"1","AgiBuff:eval":"true","AgiDebuff:eval":"false","MaxActions:num":"99","MinActions:num":"1","AllowOverflow:eval":"false","DefaultCost":"","DefaultCostSkill:num":"1","DefaultCostItem:num":"1"}
 *
 * @param ActionCountDisplay:struct
 * @text Action Count Display
 * @type struct<ActionCountDisplay>
 * @desc Adjust the settings for the Action Count Display.
 * @default {"Display":"","DrawHorz:eval":"true","BottomPosition:eval":"true","LogWindowTopOffsetY:num":"40","RepositionTopForHelp:eval":"true","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"160","Pictures":"","ActorActionPicture:str":"","EnemyActionPicture:str":"","EmptyActionPicture:str":"","Coordinates":"","ScreenBufferX:num":"16","ScreenBufferY:num":"16","ActorOffsetX:num":"0","ActorOffsetY:num":"0","EnemyOffsetX:num":"0","EnemyOffsetY:num":"0","DrawSettings":"","MaxVisible:num":"10","ImageSize:num":"32","ImageGapDistance:num":"2","IconSmoothing:eval":"false","PictureSmoothing:eval":"true","TurnsRemaining":"","DrawActionsRemaining:eval":"true","ActionsRemainingFontSize:num":"26","ActionsRemainingOffsetX:num":"0","ActionsRemainingOffsetY:num":"0"}
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
 * @text Action Counts
 *
 * @param ActionCountFull:str
 * @text Full Name
 * @parent ActionCounts
 * @desc What is the full name of "Action Counts" in your game?
 * @default Fight Points
 *
 * @param ActionCountAbbr:str
 * @text Abbreviation
 * @parent ActionCounts
 * @desc What is the abbreviation of "Action Counts" in your game?
 * @default FP
 *
 * @param ActionCountCostFmt:str
 * @text Cost Format
 * @parent ActionCounts
 * @desc How are Action Count costs displayed?
 * %1 - Cost, %2 - Abbr Text, %3 - Icon
 * @default \FS[22]\C[0]×%1%3\C[0]
 *
 * @param Icons
 *
 * @param ActorActionsIcon:num
 * @text Actor Action Icon
 * @parent Icons
 * @desc What icon is used to represent actor actions?
 * @default 165
 *
 * @param EnemyActionsIcon:num
 * @text Enemy Action Icon
 * @parent Icons
 * @desc What icon is used to represent enemy actions?
 * @default 162
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
 * @param FreeChange:eval
 * @text Enable Free Switch?
 * @parent Main
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable free range switching between actors?
 * @default true
 *
 * @param KeepPrevActor:eval
 * @text Maintain Same Actor?
 * @parent FreeChange:eval
 * @type boolean
 * @on Maintain
 * @off Next Available
 * @desc Requires Free Switching. Maintain the same actor after
 * an action or move onto the next available actor?
 * @default true
 *
 * @param NewTurnResetIndex:eval
 * @text Reset Index New Turns
 * @parent Main
 * @type boolean
 * @on Reset
 * @off Keep
 * @desc Resets the selected actor whenever a new turn starts?
 * Needs "Free Switching" to be off.
 * @default false
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
 * @default false
 *
 * @param DefaultCost
 * @text Default Action Costs
 *
 * @param DefaultCostSkill:num
 * @text Skills
 * @parent DefaultCost
 * @type number
 * @desc What is the default action cost for skills?
 * @default 1
 *
 * @param DefaultCostItem:num
 * @text Items
 * @parent DefaultCost
 * @type number
 * @desc What is the default action cost for items?
 * @default 1
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
 * @desc Which direction do you want the Action Count Display to go?
 * @default true
 *
 * @param BottomPosition:eval
 * @text Bottom Position?
 * @parent Display
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Place the Action Count Display towards the bottom of the screen?
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
 * @param ActorActionPicture:str
 * @text Actor Action Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an actor action instead of an icon?
 * @default 
 *
 * @param EnemyActionPicture:str
 * @text Enemy Action Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an enemy action instead of an icon?
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

function _0x41ea(){const _0x936b08=['cursorPagedown','_actions','109455HXtgua','setBattleSystem','clearStates','_FTB_ACTION_OVERFLOW','resetFontSettings','isSceneBattle','ConvertParams','lowest\x20agi','ftbActionPointsAbbr','GuardPass','VisuMZ_1_ItemsEquipsCore','makeActions','screenX','isAlive','registerCommand','makeActionOrdersFTB','StateBuffUpdate','_FTB_ACTION_AGI_DEBUFF','setText','21zeSynb','invokeCounterAttack','DrawActionsRemaining','updatePadding','_FTB_MAX_ACTIONS','loseCurrentActionsFTB','canDrawActionsRemaining','BattleManager_startInput','length','_FTB_STATE_BUFF_TURN_UPDATES_ONLY_ON_OPPONENT_TURNS','Game_Action_applyGlobal','_ftbTeamEven','ftbPartyTeamShift','RegExp','ItemQuantityFmt','round','BottomPosition','ftbHighestAgility','EnemyOffsetX','_ftbActionCountVisible','Game_Battler_useItem','PartyTeamShiftFmt','loadPicture','_actionBattlers','ActionCountFull','Game_Battler_removeBuff','EnemyOffsetY','toLowerCase','cancel','addChildAt','createActionsFTB','stepForward','innerWidth','prototype','includes','ActorOffsetX','processTouch','innerHeight','LogWindowTopOffsetY','VisuMZ_0_CoreEngine','isPassingTurnFTB','average\x20agi','indexOf','filter','discardEquip','NUM','ftbLowestAgility','Game_Battler_forceAction','reduce','JSON','ftbSwitchActorDirection','Window_Selectable_cursorPagedown','_forceAction','BattleManager_startBattle','isItem','RevivalAct','_unit','parse','Scene_Battle_createAllWindows','BattleAI','canUse','repositionLogWindowFTB','%1ActionPicture','actors','ActorActionPicture','Game_BattlerBase_hide','addBuff','canInput','_FTB_RECALC_ADD_DIFF','startDamagePopup','ItemQuantityFontSize','General','visible','constructor','EVAL','ActionsRemainingOffsetY','ftbFreeRangeSwitch','drawImage','DrawHorz','Empty','clamp','guardSkillId','DefaultCostSkill','_FTB_GUARD_PASS','push','224049CQjCnj','concat','windowRect','endTurn','EnemyActionPicture','updatePosition','min','selectNextActorFTB','15790RCFBgz','ActionPointCost','iconWidth','Game_Battler_onBattleStart','drawActionsRemaining','Mechanics','makeAdditionalCostTextFTB','total\x20agi','setMaxActionsFTB','isFTB','Game_Actor_changeEquipById','iconHeight','ScreenBufferY','ftbEnemyActionsIcon','ftbTroopTeamShift','BattleManager_battleSys','version','battler','startInputFTB','shift','createContentsArray','highest\x20agi','BattleManager_isTeamBased','_FTB_COST_SHOW_1','selectNextCommand','Scene_Battle_commandCancel','finishActorInput','Game_Actor_changeEquip','BattleManager_isTurnBased','BattleManager_invokeCounterAttack','KeepPrevActor','getMaxActionsFTB','initMembers','agility','isSkill','_surprise','drawPicture','useItem','BattleManager_processTurn','RepositionTopHelpY','ftbActionCount','setLastFtbIndex','131354FFIdvo','Game_Battler_removeState','unshift','removeActionBattlersFTB','meetEndTurnConditionsFTB','startInput','Current','_FTB_RECALC_SUB_DIFF','decideRandomTarget','_ftbTeamOdd','ARRAYFUNC','IconSmoothing','processTouchFTB','isOpen','ActionsRemainingOffsetX','item','22775FEduVF','Game_Actor_releaseUnequippableItems','getNextSubject','drawBigIcon','active','ftbCreateTeamSwitchText','EmptyActionPicture','Game_Enemy_transform','addLoadListener','turnCount','VisuMZ_3_BattleAI','BattleManager_finishActorInput','width','ImageSize','1820480Qtjvch','Game_Actor_selectNextCommand','index','pop','_passedTurnFTB','initBattleSystemFTB','updateBuffTurns','ActorOffsetY','Game_Battler_turnCount','_FTB_ACTION_AGI_BUFF','RepositionTopHelpX','ScreenBufferX','Window_Selectable_cursorPageup','_ftbPartyActionCountWindow','Game_Unit_onBattleStart','random','setCurrentActionsFTB','Window_Selectable_processTouch','contents','Scene_Battle_createActorCommandWindow','setUnit','refresh','battleEnd','Game_Actor_forceChangeEquip','updateStateTurnsFTB','_ftbTroopActionCountWindow','ftbEmptyActionsIcon','exit','note','increaseTurnFTB','subject','height','releaseUnequippableItems','Window_Base_drawItemNumber','_FTB_COST_POSITION','startBattle','updateStateTurns','canActFTB','enemies','_forcedBattlers','onBattleStart','processSwitchActors','onTurnEnd','FTB','commandCancel','BattleManager_forceAction','getCurrentActionsFTB','in\x20order\x20for\x20VisuMZ_2_BattleSystemFTB\x20to\x20work.','ARRAYSTRUCT','_ftbCurrentUnit','status','ARRAYNUM','ftbAliveMembers','_bypassStateTurnUpdatesFTB','battleMembers','floor','BattleManager_startTurn','agi','_helpWindow','_ftbTurnAdvantageUnit','ftbCostFormat','_maxActions','changeClass','traitObjects','onTouchSelectFTB','_FTB_MIN_ACTIONS','isSideView','endAction','isActiveTpb','getActionCostFTB','Game_BattlerBase_updateBuffTurns','STR','inBattle','MinActions','drawItemNumberFTB','createAllWindows','applyGlobal','MaxVisible','_FTB_FREE_CHANGE','_statusWindow','clearPassTurnFTB','applyGlobalFTB','_FTB_RESET_INDEX','sort','passTurnFTB','RepositionTopForHelp','close','ActionCountDisplay','BattleManager_makeActionOrders','_context','_doubleTouch','startBattleFTB','_FTB_NEUTRAL_TURN_ADVANTAGE','ActorActionsIcon','100oyqbMK','BattleManager_endAllBattlersTurn','max','call','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_ftbLastIndex','makeActionOrders','Game_Troop_increaseTurn','endActionFTB','cursorLeft','_storedBitmaps','loadSystem','Game_Battler_onTurnEnd','createStartingCoordinates','getChildIndex','setBattleSystemFTBActionCountVisible','_ftbActionsMax','496518LDZCip','clearBuffs','BattleSystemFTB','startActorInput','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','getBattleSystem','some','enemy','ActionsRemainingFontSize','GenerateBase','createActionCountWindowsFTB','TroopTeamShiftFmt','setSkill','initialize','DefaultCostItem','drawItemNumber','performTurnEndFTB','performCollapse','commandCancelFTB','BattleManager_endTurn','ARRAYSTR','_scene','update','ActionCountCostFmt','startTurn','addDebuff','_actor','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','hitIndex','startTurnFTB','Show_1_Action_Cost','isBattleSystemFTBActionCountVisible','payActionCostFTB','members','canActorBeSelectedFTB','Game_Battler_addBuff','Game_Action_speed','commandFight','changeEquipById','CostPosition','_FTB_ACTION_BASE','Game_Battler_addState','startActorCommandSelection','ActionPointTraitPlus','ARRAYEVAL','SystemActionCountVisibility','Actor','changeEquip','aliveMembers','map','processTurnFTB','_FTB_COST_SHOW_ATTACK','imageSmoothingEnabled','_inputting','Game_Actor_changeClass','setTarget','recalculateActionsFTB','description','FUNC','ftbActionPointsFull','processTurn','match','forceActionFTB','Game_BattlerBase_canUse','clear','appear','_ftbActionsCur','randomInt','Game_Battler_performCollapse','BattleManager_isActiveTpb','TeamShiftWait','createActorCommandWindowFTB','padding','_FTB_COST_SHOW_0','skillCostSeparator','Game_System_initialize','speed','maxCols','ItemsEquipsCore','isTpb','GainDiff','VisuMZ_1_BattleCore','name','endTurnFTB','removeState','format','canMove','textWidth','increaseTurn','Visible','isTriggered','friendsUnit','addState','ActionCountAbbr','PictureSmoothing','updateVisibility','setBackgroundType','693tEnDFp','allMembers','STRUCT','_inBattle','_FTB_COST_SHOW_GUARD','BattleManager_isTpb','createActorCommandWindow','_currentActions','VisuMZ_1_SkillsStatesCore','isTeamBased','cursorPageup','parameters','cursorRight','removeStatesAuto','Game_BattlerBase_appear','BattleManager_setup','selectNextActor','BattleManager_endAction','removeBuff','ImageGapDistance','_action','ftbActorActionsIcon','AgiBuff','attackSkillId','_turnCountFTB','waitCount','setup','NewTurnResetIndex','checkNeedsUpdate','Settings','forceChangeEquip','player','forceAction','stepBack','keepPrevSubjectFTB','hide','toUpperCase','_FTB_KEEP_PREV_ACTOR','Window_Selectable_cursorRight','Scene_Battle_commandFight','resetTurnCountFTB','initMembersFTB','isActor','_partyCommandWindow','center','trim','endAllBattlersTurn','makeAdditionalSkillCostText','addText','_subject','transform','_logWindow','reduceActionsFTB','select','EmptyActionsIcon','battleSys','LoseDiff','_currentActor'];_0x41ea=function(){return _0x936b08;};return _0x41ea();}const _0x34fcf0=_0x1617;(function(_0x504fed,_0x1fa0f4){const _0x4b099f=_0x1617,_0x538b06=_0x504fed();while(!![]){try{const _0x1666bd=parseInt(_0x4b099f(0x189))/0x1+parseInt(_0x4b099f(0x223))/0x2+parseInt(_0x4b099f(0x1f1))/0x3+parseInt(_0x4b099f(0x29f))/0x4*(-parseInt(_0x4b099f(0x233))/0x5)+-parseInt(_0x4b099f(0x2b0))/0x6*(parseInt(_0x4b099f(0x19c))/0x7)+parseInt(_0x4b099f(0x241))/0x8+parseInt(_0x4b099f(0x14d))/0x9*(parseInt(_0x4b099f(0x1f9))/0xa);if(_0x1666bd===_0x1fa0f4)break;else _0x538b06['push'](_0x538b06['shift']());}catch(_0xc9dd86){_0x538b06['push'](_0x538b06['shift']());}}}(_0x41ea,0x39d18));var label='BattleSystemFTB',tier=tier||0x0,dependencies=[_0x34fcf0(0x1c3),_0x34fcf0(0x13d),_0x34fcf0(0x193),_0x34fcf0(0x155)],pluginData=$plugins['filter'](function(_0x41f924){const _0x1d2f7b=_0x34fcf0;return _0x41f924[_0x1d2f7b(0x273)]&&_0x41f924[_0x1d2f7b(0x125)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x34fcf0(0x16a)]=VisuMZ[label][_0x34fcf0(0x16a)]||{},VisuMZ['ConvertParams']=function(_0x4ab900,_0xb6342d){const _0x4016ce=_0x34fcf0;for(const _0x2027a5 in _0xb6342d){if(_0x2027a5[_0x4016ce(0x129)](/(.*):(.*)/i)){const _0x385458=String(RegExp['$1']),_0x590928=String(RegExp['$2'])[_0x4016ce(0x171)]()[_0x4016ce(0x17a)]();let _0x25f33e,_0x4bea25,_0xf70e07;switch(_0x590928){case _0x4016ce(0x1c9):_0x25f33e=_0xb6342d[_0x2027a5]!==''?Number(_0xb6342d[_0x2027a5]):0x0;break;case _0x4016ce(0x274):_0x4bea25=_0xb6342d[_0x2027a5]!==''?JSON[_0x4016ce(0x1d5)](_0xb6342d[_0x2027a5]):[],_0x25f33e=_0x4bea25['map'](_0x135855=>Number(_0x135855));break;case _0x4016ce(0x1e6):_0x25f33e=_0xb6342d[_0x2027a5]!==''?eval(_0xb6342d[_0x2027a5]):null;break;case _0x4016ce(0x2dc):_0x4bea25=_0xb6342d[_0x2027a5]!==''?JSON[_0x4016ce(0x1d5)](_0xb6342d[_0x2027a5]):[],_0x25f33e=_0x4bea25[_0x4016ce(0x11d)](_0x1554f0=>eval(_0x1554f0));break;case _0x4016ce(0x1cd):_0x25f33e=_0xb6342d[_0x2027a5]!==''?JSON[_0x4016ce(0x1d5)](_0xb6342d[_0x2027a5]):'';break;case'ARRAYJSON':_0x4bea25=_0xb6342d[_0x2027a5]!==''?JSON[_0x4016ce(0x1d5)](_0xb6342d[_0x2027a5]):[],_0x25f33e=_0x4bea25[_0x4016ce(0x11d)](_0x38e416=>JSON['parse'](_0x38e416));break;case _0x4016ce(0x126):_0x25f33e=_0xb6342d[_0x2027a5]!==''?new Function(JSON[_0x4016ce(0x1d5)](_0xb6342d[_0x2027a5])):new Function('return\x200');break;case _0x4016ce(0x22d):_0x4bea25=_0xb6342d[_0x2027a5]!==''?JSON['parse'](_0xb6342d[_0x2027a5]):[],_0x25f33e=_0x4bea25[_0x4016ce(0x11d)](_0x2b6446=>new Function(JSON['parse'](_0x2b6446)));break;case _0x4016ce(0x288):_0x25f33e=_0xb6342d[_0x2027a5]!==''?String(_0xb6342d[_0x2027a5]):'';break;case _0x4016ce(0x2c4):_0x4bea25=_0xb6342d[_0x2027a5]!==''?JSON[_0x4016ce(0x1d5)](_0xb6342d[_0x2027a5]):[],_0x25f33e=_0x4bea25['map'](_0x3f4c01=>String(_0x3f4c01));break;case _0x4016ce(0x14f):_0xf70e07=_0xb6342d[_0x2027a5]!==''?JSON[_0x4016ce(0x1d5)](_0xb6342d[_0x2027a5]):{},_0x25f33e=VisuMZ['ConvertParams']({},_0xf70e07);break;case _0x4016ce(0x271):_0x4bea25=_0xb6342d[_0x2027a5]!==''?JSON[_0x4016ce(0x1d5)](_0xb6342d[_0x2027a5]):[],_0x25f33e=_0x4bea25[_0x4016ce(0x11d)](_0x20ae2f=>VisuMZ['ConvertParams']({},JSON['parse'](_0x20ae2f)));break;default:continue;}_0x4ab900[_0x385458]=_0x25f33e;}}return _0x4ab900;},(_0x238f27=>{const _0x66d877=_0x34fcf0,_0x12f087=_0x238f27[_0x66d877(0x13e)];for(const _0x12f6e5 of dependencies){if(!Imported[_0x12f6e5]){alert(_0x66d877(0x2b4)['format'](_0x12f087,_0x12f6e5)),SceneManager[_0x66d877(0x25c)]();break;}}const _0x4d8cad=_0x238f27['description'];if(_0x4d8cad[_0x66d877(0x129)](/\[Version[ ](.*?)\]/i)){const _0x57792f=Number(RegExp['$1']);_0x57792f!==VisuMZ[label][_0x66d877(0x209)]&&(alert(_0x66d877(0x2cb)[_0x66d877(0x141)](_0x12f087,_0x57792f)),SceneManager[_0x66d877(0x25c)]());}if(_0x4d8cad['match'](/\[Tier[ ](\d+)\]/i)){const _0x5dd9ad=Number(RegExp['$1']);_0x5dd9ad<tier?(alert(_0x66d877(0x2a3)[_0x66d877(0x141)](_0x12f087,_0x5dd9ad,tier)),SceneManager[_0x66d877(0x25c)]()):tier=Math[_0x66d877(0x2a1)](_0x5dd9ad,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x66d877(0x16a)],_0x238f27[_0x66d877(0x158)]);})(pluginData),PluginManager[_0x34fcf0(0x197)](pluginData[_0x34fcf0(0x13e)],_0x34fcf0(0x119),_0x196760=>{const _0x5e40cc=_0x34fcf0;VisuMZ[_0x5e40cc(0x18f)](_0x196760,_0x196760);const _0x5a5c40=_0x196760[_0x5e40cc(0x145)];$gameSystem['setBattleSystemFTBActionCountVisible'](_0x5a5c40);}),VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x1a9)]={'ActionPointCost':/<FTB (?:FP|ACTION) COST:[ ](\d+)>/i,'HideActionPointCost':/<FTB HIDE (?:FP|ACTION) COST>/i,'ShowActionPointCost':/<FTB SHOW (?:FP|ACTION) COST>/i,'PassTurn':/<FTB PASS TURN>/i,'ActionPointTraitPlus':/<FTB (?:FP|ACTION|ACTIONS):[ ]([\+\-]\d+)>/i},DataManager[_0x34fcf0(0x286)]=function(_0x560e9b){const _0x4a2922=_0x34fcf0;if(!_0x560e9b)return 0x0;const _0x42c18f=VisuMZ['BattleSystemFTB'][_0x4a2922(0x16a)][_0x4a2922(0x1fe)],_0x20c042=VisuMZ[_0x4a2922(0x2b2)][_0x4a2922(0x1a9)],_0x35f131=_0x560e9b[_0x4a2922(0x25d)];if(_0x35f131[_0x4a2922(0x129)](_0x20c042[_0x4a2922(0x1fa)]))return Number(RegExp['$1']);else{if(DataManager[_0x4a2922(0x21b)](_0x560e9b))return _0x42c18f[_0x4a2922(0x1ee)];else return DataManager[_0x4a2922(0x1d2)](_0x560e9b)?_0x42c18f[_0x4a2922(0x2be)]:0x0;}},ImageManager[_0x34fcf0(0x162)]=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x1e3)][_0x34fcf0(0x29e)],ImageManager[_0x34fcf0(0x206)]=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)]['General']['EnemyActionsIcon'],ImageManager[_0x34fcf0(0x25b)]=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)]['General'][_0x34fcf0(0x183)],TextManager[_0x34fcf0(0x127)]=VisuMZ[_0x34fcf0(0x2b2)]['Settings'][_0x34fcf0(0x1e3)][_0x34fcf0(0x1b4)],TextManager[_0x34fcf0(0x191)]=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x1e3)][_0x34fcf0(0x149)],TextManager[_0x34fcf0(0x27d)]=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)]['General'][_0x34fcf0(0x2c7)],TextManager[_0x34fcf0(0x1a8)]=VisuMZ[_0x34fcf0(0x2b2)]['Settings'][_0x34fcf0(0x1e3)][_0x34fcf0(0x1b1)],TextManager[_0x34fcf0(0x207)]=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x1e3)][_0x34fcf0(0x2bb)],SceneManager['isSceneBattle']=function(){const _0x169618=_0x34fcf0;return this['_scene']&&this[_0x169618(0x2c5)]['constructor']===Scene_Battle;},BattleManager[_0x34fcf0(0x28f)]=VisuMZ[_0x34fcf0(0x2b2)]['Settings'][_0x34fcf0(0x1fe)]['FreeChange'],BattleManager[_0x34fcf0(0x172)]=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x1fe)][_0x34fcf0(0x217)],BattleManager['_FTB_RESET_INDEX']=VisuMZ['BattleSystemFTB'][_0x34fcf0(0x16a)][_0x34fcf0(0x1fe)][_0x34fcf0(0x168)]??![],BattleManager[_0x34fcf0(0x1ef)]=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x1fe)][_0x34fcf0(0x192)],BattleManager[_0x34fcf0(0x1e0)]=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x1fe)][_0x34fcf0(0x13c)],BattleManager['_FTB_RECALC_SUB_DIFF']=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x1fe)][_0x34fcf0(0x185)],BattleManager[_0x34fcf0(0x29d)]=VisuMZ[_0x34fcf0(0x2b2)]['Settings']['Mechanics']['NeutralAdvantage'],BattleManager['_FTB_BETWEEN_TEAMS_WAIT']=VisuMZ['BattleSystemFTB'][_0x34fcf0(0x16a)][_0x34fcf0(0x1e3)][_0x34fcf0(0x132)],BattleManager[_0x34fcf0(0x1a5)]=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x1fe)][_0x34fcf0(0x199)],VisuMZ['BattleSystemFTB'][_0x34fcf0(0x208)]=BattleManager[_0x34fcf0(0x184)],BattleManager[_0x34fcf0(0x184)]=function(){const _0x5d3891=_0x34fcf0;if(this['isFTB']())return _0x5d3891(0x26c);return VisuMZ[_0x5d3891(0x2b2)][_0x5d3891(0x208)][_0x5d3891(0x2a2)](this);},BattleManager[_0x34fcf0(0x202)]=function(){const _0x6b0a64=_0x34fcf0;return $gameSystem[_0x6b0a64(0x2b5)]()==='FTB';},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x152)]=BattleManager[_0x34fcf0(0x13b)],BattleManager[_0x34fcf0(0x13b)]=function(){const _0x3527e4=_0x34fcf0;if(this[_0x3527e4(0x202)]())return![];return VisuMZ[_0x3527e4(0x2b2)][_0x3527e4(0x152)][_0x3527e4(0x2a2)](this);},VisuMZ[_0x34fcf0(0x2b2)]['BattleManager_isActiveTpb']=BattleManager[_0x34fcf0(0x285)],BattleManager[_0x34fcf0(0x285)]=function(){const _0x4ef784=_0x34fcf0;if(this[_0x4ef784(0x202)]())return![];return VisuMZ[_0x4ef784(0x2b2)][_0x4ef784(0x131)][_0x4ef784(0x2a2)](this);},VisuMZ['BattleSystemFTB'][_0x34fcf0(0x215)]=BattleManager['isTurnBased'],BattleManager['isTurnBased']=function(){const _0x3866d4=_0x34fcf0;if(this[_0x3866d4(0x202)]())return!![];return VisuMZ[_0x3866d4(0x2b2)][_0x3866d4(0x215)][_0x3866d4(0x2a2)](this);},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x20f)]=BattleManager['isTeamBased'],BattleManager[_0x34fcf0(0x156)]=function(){const _0x409cc5=_0x34fcf0;if(this['isFTB']())return!![];return VisuMZ[_0x409cc5(0x2b2)][_0x409cc5(0x20f)][_0x409cc5(0x2a2)](this);},VisuMZ['BattleSystemFTB'][_0x34fcf0(0x1a3)]=BattleManager[_0x34fcf0(0x228)],BattleManager[_0x34fcf0(0x228)]=function(){const _0x98b755=_0x34fcf0;if(this['isFTB']())this['_surprise']=![];VisuMZ[_0x98b755(0x2b2)]['BattleManager_startInput'][_0x98b755(0x2a2)](this);if(this[_0x98b755(0x202)]()&&$gameParty[_0x98b755(0x1df)]())this['startInputFTB']();},BattleManager[_0x34fcf0(0x20b)]=function(){const _0x524984=_0x34fcf0;this[_0x524984(0x2c8)]();},VisuMZ['BattleSystemFTB'][_0x34fcf0(0x21f)]=BattleManager[_0x34fcf0(0x128)],BattleManager[_0x34fcf0(0x128)]=function(){const _0x3c9d3d=_0x34fcf0;this[_0x3c9d3d(0x202)]()?this['processTurnFTB']():VisuMZ['BattleSystemFTB'][_0x3c9d3d(0x21f)][_0x3c9d3d(0x2a2)](this);},BattleManager[_0x34fcf0(0x11e)]=function(){const _0x4a37ff=_0x34fcf0,_0x2e1e40=this[_0x4a37ff(0x17e)];if(_0x2e1e40&&!_0x2e1e40[_0x4a37ff(0x147)]()[_0x4a37ff(0x266)]())this['endAction'](),this[_0x4a37ff(0x17e)]=null,this['updateTurn'](![]);else{if(_0x2e1e40&&_0x2e1e40[_0x4a37ff(0x177)]()&&_0x2e1e40['canInput']()){const _0x1da4b9=_0x2e1e40['currentAction']();if(!_0x1da4b9)VisuMZ[_0x4a37ff(0x2b2)][_0x4a37ff(0x21f)][_0x4a37ff(0x2a2)](this);else _0x1da4b9[_0x4a37ff(0x1d0)]?VisuMZ['BattleSystemFTB'][_0x4a37ff(0x21f)][_0x4a37ff(0x2a2)](this):(this['_currentActor']=_0x2e1e40,this[_0x4a37ff(0x2b3)]());}else VisuMZ[_0x4a37ff(0x2b2)][_0x4a37ff(0x21f)][_0x4a37ff(0x2a2)](this);}},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x23e)]=BattleManager[_0x34fcf0(0x213)],BattleManager['finishActorInput']=function(){const _0x336d88=_0x34fcf0;this[_0x336d88(0x202)]()?VisuMZ[_0x336d88(0x2b2)]['BattleManager_processTurn'][_0x336d88(0x2a2)](this):VisuMZ[_0x336d88(0x2b2)][_0x336d88(0x23e)][_0x336d88(0x2a2)](this);},VisuMZ['BattleSystemFTB']['BattleManager_selectNextActor']=BattleManager[_0x34fcf0(0x15d)],BattleManager['selectNextActor']=function(){const _0x3cfc06=_0x34fcf0;this[_0x3cfc06(0x202)]()?this[_0x3cfc06(0x1f8)]():VisuMZ[_0x3cfc06(0x2b2)]['BattleManager_selectNextActor'][_0x3cfc06(0x2a2)](this);},BattleManager['selectNextActorFTB']=function(){const _0x3eb1f3=_0x34fcf0;this[_0x3eb1f3(0x186)]=null,this[_0x3eb1f3(0x121)]=![];},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x15e)]=BattleManager[_0x34fcf0(0x284)],BattleManager['endAction']=function(){const _0x5b92b1=_0x34fcf0,_0x2a3f4d=this['_subject'];VisuMZ[_0x5b92b1(0x2b2)][_0x5b92b1(0x15e)][_0x5b92b1(0x2a2)](this),this['endActionFTB'](_0x2a3f4d);},BattleManager[_0x34fcf0(0x2a7)]=function(_0x144d7a){const _0x136e84=_0x34fcf0;if(!this[_0x136e84(0x202)]())return;if(_0x144d7a){const _0x4a6021=_0x144d7a[_0x136e84(0x188)][_0x136e84(0x1c7)](_0x522f3f=>_0x522f3f[_0x136e84(0x1d0)]);_0x144d7a[_0x136e84(0x194)]();if(_0x4a6021){let _0x5bf507=_0x4a6021[_0x136e84(0x1a4)];while(_0x5bf507--){_0x144d7a['_actions'][_0x136e84(0x244)]();}_0x144d7a[_0x136e84(0x188)]=_0x4a6021['concat'](_0x144d7a['_actions']);}}if(this[_0x136e84(0x268)]['length']>0x0)this[_0x136e84(0x17e)]&&(!this[_0x136e84(0x1b3)]['includes'](this[_0x136e84(0x17e)])&&this[_0x136e84(0x1b3)][_0x136e84(0x225)](this['_subject'])),this[_0x136e84(0x17e)]=this[_0x136e84(0x235)]();else this[_0x136e84(0x16f)](_0x144d7a)&&(this[_0x136e84(0x17e)]=_0x144d7a);_0x144d7a[_0x136e84(0x147)]()[_0x136e84(0x222)](_0x144d7a);},BattleManager[_0x34fcf0(0x16f)]=function(_0x549ff5){const _0x22048f=_0x34fcf0;if(!_0x549ff5)return![];if(!_0x549ff5[_0x22048f(0x177)]())return![];if(!_0x549ff5[_0x22048f(0x142)]())return![];if(!_0x549ff5[_0x22048f(0x1df)]())return![];if(_0x549ff5[_0x22048f(0x1c4)]())return![];return BattleManager[_0x22048f(0x28f)]&&BattleManager[_0x22048f(0x172)];},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x1d1)]=BattleManager[_0x34fcf0(0x264)],BattleManager[_0x34fcf0(0x264)]=function(){const _0x16fe1d=_0x34fcf0;VisuMZ['BattleSystemFTB'][_0x16fe1d(0x1d1)][_0x16fe1d(0x2a2)](this),this[_0x16fe1d(0x29c)]();},BattleManager[_0x34fcf0(0x29c)]=function(){const _0x9d87cc=_0x34fcf0;if(!this['isFTB']())return;if(this['_preemptive'])this[_0x9d87cc(0x27c)]=_0x9d87cc(0x1db);else this[_0x9d87cc(0x21c)]?this['_ftbTurnAdvantageUnit']=_0x9d87cc(0x267):this[_0x9d87cc(0x27c)]=BattleManager[_0x9d87cc(0x29d)];this[_0x9d87cc(0x27c)]=this['_ftbTurnAdvantageUnit']||_0x9d87cc(0x250);let _0x436f19=0x0,_0xbff6a8=0x0;switch(this[_0x9d87cc(0x27c)][_0x9d87cc(0x1b7)]()[_0x9d87cc(0x17a)]()){case _0x9d87cc(0x250):let _0x185ed4=[_0x9d87cc(0x1db),_0x9d87cc(0x267)];this[_0x9d87cc(0x27c)]=_0x185ed4[Math[_0x9d87cc(0x12f)](_0x185ed4[_0x9d87cc(0x1a4)])];break;case _0x9d87cc(0x16c):this[_0x9d87cc(0x27c)]=_0x9d87cc(0x1db);break;case _0x9d87cc(0x2b7):this['_ftbTurnAdvantageUnit']=_0x9d87cc(0x267);break;case _0x9d87cc(0x190):_0x436f19=$gameParty[_0x9d87cc(0x1ca)](),_0xbff6a8=$gameTroop['ftbLowestAgility'](),this[_0x9d87cc(0x27c)]=_0x436f19>=_0xbff6a8?_0x9d87cc(0x1db):_0x9d87cc(0x267);break;case _0x9d87cc(0x1c5):_0x436f19=$gameParty[_0x9d87cc(0x21a)](),_0xbff6a8=$gameTroop[_0x9d87cc(0x21a)](),this['_ftbTurnAdvantageUnit']=_0x436f19>=_0xbff6a8?'actors':_0x9d87cc(0x267);break;case _0x9d87cc(0x20e):_0x436f19=$gameParty['ftbHighestAgility'](),_0xbff6a8=$gameTroop[_0x9d87cc(0x1ad)](),this[_0x9d87cc(0x27c)]=_0x436f19>=_0xbff6a8?_0x9d87cc(0x1db):'enemies';break;case _0x9d87cc(0x200):_0x436f19=$gameParty['ftbTotalAgility'](),_0xbff6a8=$gameTroop['ftbTotalAgility'](),this[_0x9d87cc(0x27c)]=_0x436f19>=_0xbff6a8?'actors':_0x9d87cc(0x267);break;}this['_ftbTeamOdd']=this[_0x9d87cc(0x27c)]==='actors'?$gameParty:$gameTroop,this['_ftbTeamEven']=this[_0x9d87cc(0x27c)]===_0x9d87cc(0x1db)?$gameTroop:$gameParty;},VisuMZ['BattleSystemFTB']['BattleManager_makeActionOrders']=BattleManager[_0x34fcf0(0x2a5)],BattleManager[_0x34fcf0(0x2a5)]=function(){const _0x439292=_0x34fcf0;this['isFTB']()?this[_0x439292(0x198)]():VisuMZ['BattleSystemFTB'][_0x439292(0x299)]['call'](this);},BattleManager['makeActionOrdersFTB']=function(){const _0x3ce5cf=_0x34fcf0;let _0xb96ca8=[],_0xc03706=[],_0xde40b=0x0;const _0x4b97d0=$gameTroop[_0x3ce5cf(0x23c)]();let _0x4598e8=_0x4b97d0%0x2===0x0?this[_0x3ce5cf(0x1a7)]:this[_0x3ce5cf(0x22c)];this['_ftbCurrentUnit']=_0x4598e8;const _0x5c27f5=VisuMZ[_0x3ce5cf(0x2b2)][_0x3ce5cf(0x16a)][_0x3ce5cf(0x1fe)];if(_0x4598e8===$gameParty){const _0x306a98=_0x5c27f5[_0x3ce5cf(0x1d3)]?$gameParty[_0x3ce5cf(0x277)]():$gameParty[_0x3ce5cf(0x275)]();let _0x25d4b9=_0x306a98[_0x3ce5cf(0x1c7)](_0x164248=>_0x164248[_0x3ce5cf(0x142)]()&&!_0x164248['canInput']()),_0x5ab815=_0x306a98['filter'](_0x35629e=>_0x35629e['canMove']()&&_0x35629e[_0x3ce5cf(0x1df)]());_0xb96ca8=_0xb96ca8[_0x3ce5cf(0x1f2)](_0x25d4b9),_0xde40b=Game_Unit[_0x3ce5cf(0x1a0)];while(_0xde40b--){_0xb96ca8=_0xb96ca8[_0x3ce5cf(0x1f2)](_0x5ab815);}_0xde40b=Game_Unit[_0x3ce5cf(0x1a0)]-0x1;while(_0xde40b--){_0xb96ca8=_0xb96ca8[_0x3ce5cf(0x1f2)](_0x25d4b9);}}if(_0x4598e8===$gameTroop){const _0x3a9fa2=_0x5c27f5[_0x3ce5cf(0x1d3)]?$gameTroop[_0x3ce5cf(0x2d1)]():$gameTroop[_0x3ce5cf(0x275)]();let _0x57083c=_0x3a9fa2[_0x3ce5cf(0x1c7)](_0xec8ac8=>_0xec8ac8[_0x3ce5cf(0x142)]());$gameSystem[_0x3ce5cf(0x283)]()?_0x57083c[_0x3ce5cf(0x294)]((_0x29e0b8,_0xdfbc63)=>_0xdfbc63[_0x3ce5cf(0x195)]()-_0x29e0b8[_0x3ce5cf(0x195)]()):_0x57083c[_0x3ce5cf(0x294)]((_0x2a1906,_0x24acb5)=>_0x2a1906[_0x3ce5cf(0x195)]()-_0x24acb5[_0x3ce5cf(0x195)]());_0xde40b=Game_Unit['_FTB_MAX_ACTIONS'];while(_0xde40b--){_0xc03706=_0xc03706['concat'](_0x57083c);}$gameTroop[_0x3ce5cf(0x194)]();}this[_0x3ce5cf(0x1b3)]=_0xb96ca8[_0x3ce5cf(0x1f2)](_0xc03706);},BattleManager[_0x34fcf0(0x226)]=function(){const _0x27d425=_0x34fcf0;if(!this[_0x27d425(0x202)]())return;this[_0x27d425(0x1b3)]=this[_0x27d425(0x1b3)]||[],this[_0x27d425(0x1b3)]=this[_0x27d425(0x1b3)]['filter'](_0x138f44=>_0x138f44['canMove']()&&!_0x138f44[_0x27d425(0x1c4)]());},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x15c)]=BattleManager[_0x34fcf0(0x167)],BattleManager[_0x34fcf0(0x167)]=function(_0x5152b1,_0xca71a9,_0x5a5956){const _0x1ea5dc=_0x34fcf0;VisuMZ[_0x1ea5dc(0x2b2)][_0x1ea5dc(0x15c)]['call'](this,_0x5152b1,_0xca71a9,_0x5a5956),this[_0x1ea5dc(0x176)]();},BattleManager[_0x34fcf0(0x176)]=function(){const _0x51504a=_0x34fcf0;if(!BattleManager['isFTB']())return;this[_0x51504a(0x272)]=undefined,$gameParty[_0x51504a(0x2cd)](),$gameTroop[_0x51504a(0x2cd)]();},VisuMZ['BattleSystemFTB'][_0x34fcf0(0x279)]=BattleManager[_0x34fcf0(0x2c8)],BattleManager[_0x34fcf0(0x2c8)]=function(){const _0x584a5d=_0x34fcf0;this[_0x584a5d(0x2cd)](),VisuMZ[_0x584a5d(0x2b2)][_0x584a5d(0x279)][_0x584a5d(0x2a2)](this),this[_0x584a5d(0x238)]();},BattleManager[_0x34fcf0(0x2cd)]=function(){const _0x339817=_0x34fcf0;if(!BattleManager['isFTB']())return;$gameParty[_0x339817(0x291)](),$gameTroop[_0x339817(0x291)]();const _0xa4f719=$gameTroop['turnCount']()+0x1;let _0x54ac47=_0xa4f719%0x2===0x0?this[_0x339817(0x1a7)]:this[_0x339817(0x22c)],_0x1d03fc=_0xa4f719%0x2===0x0?this[_0x339817(0x22c)]:this['_ftbTeamEven'];_0xa4f719>0x1&&_0x1d03fc[_0x339817(0x2c0)](),_0x54ac47[_0x339817(0x259)](),_0x54ac47[_0x339817(0x2cd)]();},VisuMZ['BattleSystemFTB'][_0x34fcf0(0x2c3)]=BattleManager[_0x34fcf0(0x1f4)],BattleManager['endTurn']=function(){const _0x5da774=_0x34fcf0;VisuMZ['BattleSystemFTB'][_0x5da774(0x2c3)][_0x5da774(0x2a2)](this),this[_0x5da774(0x13f)]();},BattleManager[_0x34fcf0(0x13f)]=function(){const _0x21e3a7=_0x34fcf0;if(!BattleManager[_0x21e3a7(0x202)]())return;},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x2a0)]=BattleManager[_0x34fcf0(0x17b)],BattleManager[_0x34fcf0(0x17b)]=function(){const _0x433d9b=_0x34fcf0;if(this[_0x433d9b(0x202)]())return;VisuMZ['BattleSystemFTB']['BattleManager_endAllBattlersTurn'][_0x433d9b(0x2a2)](this);},BattleManager[_0x34fcf0(0x238)]=function(){const _0x2bfd14=_0x34fcf0;if(!BattleManager[_0x2bfd14(0x202)]())return;let _0x85408='';if(this[_0x2bfd14(0x272)]===$gameParty){let _0x86b78d=$gameParty[_0x2bfd14(0x13e)]();_0x85408=TextManager[_0x2bfd14(0x1a8)]['format'](_0x86b78d);}else _0x85408=TextManager[_0x2bfd14(0x207)];if(_0x85408!==''){this[_0x2bfd14(0x180)][_0x2bfd14(0x1f0)](_0x2bfd14(0x17d),_0x85408);const _0xb3dfe0=BattleManager['_FTB_BETWEEN_TEAMS_WAIT'];this['_logWindow'][_0x2bfd14(0x1f0)](_0x2bfd14(0x166),_0xb3dfe0),this['_logWindow'][_0x2bfd14(0x1f0)](_0x2bfd14(0x12c));}},VisuMZ['BattleSystemFTB'][_0x34fcf0(0x1fc)]=Game_Battler['prototype'][_0x34fcf0(0x269)],Game_Battler[_0x34fcf0(0x1bd)][_0x34fcf0(0x269)]=function(_0xe7f560){const _0x45dba0=_0x34fcf0;VisuMZ['BattleSystemFTB'][_0x45dba0(0x1fc)]['call'](this,_0xe7f560),this[_0x45dba0(0x175)]();},Game_Battler[_0x34fcf0(0x1bd)][_0x34fcf0(0x175)]=function(){const _0x2faaec=_0x34fcf0;if(!BattleManager[_0x2faaec(0x202)]())return;this[_0x2faaec(0x165)]=0x0;},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x249)]=Game_Battler[_0x34fcf0(0x1bd)][_0x34fcf0(0x23c)],Game_Battler['prototype']['turnCount']=function(){const _0x54286c=_0x34fcf0;return BattleManager[_0x54286c(0x202)]()?this['_turnCountFTB']||0x0:VisuMZ[_0x54286c(0x2b2)][_0x54286c(0x249)][_0x54286c(0x2a2)](this);},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x2a6)]=Game_Troop[_0x34fcf0(0x1bd)][_0x34fcf0(0x144)],Game_Troop[_0x34fcf0(0x1bd)]['increaseTurn']=function(){const _0xddbbe2=_0x34fcf0;VisuMZ[_0xddbbe2(0x2b2)][_0xddbbe2(0x2a6)][_0xddbbe2(0x2a2)](this),this[_0xddbbe2(0x25e)]();},Game_Troop['prototype']['increaseTurnFTB']=function(){const _0x532217=_0x34fcf0;if(!BattleManager[_0x532217(0x202)]())return;if(Imported[_0x532217(0x23d)]&&VisuMZ[_0x532217(0x1d7)][_0x532217(0x209)]<1.22){let _0xa68017='';_0xa68017+='VisuMZ_3_BattleAI\x20needs\x20to\x20be\x20updated\x20',_0xa68017+=_0x532217(0x270),alert(_0xa68017),SceneManager[_0x532217(0x25c)]();}let _0x520f62=[];BattleManager[_0x532217(0x272)]===$gameParty?_0x520f62=$gameParty[_0x532217(0x14e)]():_0x520f62=$gameTroop[_0x532217(0x2d1)]();for(const _0xec3cda of _0x520f62){_0xec3cda[_0x532217(0x165)]=_0xec3cda[_0x532217(0x165)]||0x0,_0xec3cda[_0x532217(0x165)]++;}},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x216)]=BattleManager[_0x34fcf0(0x19d)],BattleManager[_0x34fcf0(0x19d)]=function(_0x2c6a70,_0x447560){const _0x1ccad0=_0x34fcf0,_0x1e20a8=BattleManager['isFTB']();if(_0x1e20a8)$gameSystem[_0x1ccad0(0x18a)]('DTB');VisuMZ['BattleSystemFTB'][_0x1ccad0(0x216)][_0x1ccad0(0x2a2)](this,_0x2c6a70,_0x447560);if(_0x1e20a8)$gameSystem['setBattleSystem'](_0x1ccad0(0x26c));},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x137)]=Game_System[_0x34fcf0(0x1bd)][_0x34fcf0(0x2bd)],Game_System['prototype'][_0x34fcf0(0x2bd)]=function(){const _0xd0580e=_0x34fcf0;VisuMZ[_0xd0580e(0x2b2)][_0xd0580e(0x137)][_0xd0580e(0x2a2)](this),this['initBattleSystemFTB']();},Game_System[_0x34fcf0(0x1bd)]['initBattleSystemFTB']=function(){const _0x2767ff=_0x34fcf0;this[_0x2767ff(0x1af)]=!![];},Game_System[_0x34fcf0(0x1bd)][_0x34fcf0(0x2cf)]=function(){const _0x26b9c6=_0x34fcf0;if(BattleManager['_phase']===_0x26b9c6(0x257))return![];return this[_0x26b9c6(0x1af)]===undefined&&this[_0x26b9c6(0x246)](),this[_0x26b9c6(0x1af)];},Game_System[_0x34fcf0(0x1bd)][_0x34fcf0(0x2ae)]=function(_0x384f9c){const _0xef8ec8=_0x34fcf0;this[_0xef8ec8(0x1af)]===undefined&&this['initBattleSystemFTB'](),this[_0xef8ec8(0x1af)]=_0x384f9c;},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x2d4)]=Game_Action['prototype'][_0x34fcf0(0x138)],Game_Action[_0x34fcf0(0x1bd)][_0x34fcf0(0x138)]=function(){const _0x39768e=_0x34fcf0;return BattleManager['isFTB']()?0x0:VisuMZ[_0x39768e(0x2b2)][_0x39768e(0x2d4)][_0x39768e(0x2a2)](this);},VisuMZ['BattleSystemFTB']['Game_Action_applyGlobal']=Game_Action[_0x34fcf0(0x1bd)][_0x34fcf0(0x28d)],Game_Action[_0x34fcf0(0x1bd)][_0x34fcf0(0x28d)]=function(){const _0x118cb9=_0x34fcf0;VisuMZ['BattleSystemFTB'][_0x118cb9(0x1a6)][_0x118cb9(0x2a2)](this),this[_0x118cb9(0x292)]();},Game_Action['prototype'][_0x34fcf0(0x292)]=function(){const _0x415793=_0x34fcf0;if(!BattleManager[_0x415793(0x202)]())return;if(!this[_0x415793(0x25f)]())return;if(!this[_0x415793(0x232)]())return;this['isSkill']()&&this[_0x415793(0x232)]()['id']===this['subject']()[_0x415793(0x1ed)]()&&(BattleManager[_0x415793(0x1ef)]&&this[_0x415793(0x25f)]()[_0x415793(0x295)]());const _0x23aa50=VisuMZ[_0x415793(0x2b2)][_0x415793(0x1a9)],_0x1575ed=this[_0x415793(0x232)]()[_0x415793(0x25d)];_0x1575ed['match'](_0x23aa50['PassTurn'])&&this[_0x415793(0x25f)]()['passTurnFTB']();},VisuMZ[_0x34fcf0(0x2b2)]['Game_BattlerBase_hide']=Game_BattlerBase[_0x34fcf0(0x1bd)]['hide'],Game_BattlerBase[_0x34fcf0(0x1bd)][_0x34fcf0(0x170)]=function(){const _0x4412d0=_0x34fcf0;VisuMZ[_0x4412d0(0x2b2)][_0x4412d0(0x1dd)]['call'](this),BattleManager[_0x4412d0(0x226)](),this[_0x4412d0(0x147)]()['recalculateActionsFTB']();},VisuMZ['BattleSystemFTB'][_0x34fcf0(0x15b)]=Game_BattlerBase[_0x34fcf0(0x1bd)][_0x34fcf0(0x12d)],Game_BattlerBase['prototype'][_0x34fcf0(0x12d)]=function(){const _0x43cd59=_0x34fcf0;VisuMZ['BattleSystemFTB'][_0x43cd59(0x15b)]['call'](this),BattleManager[_0x43cd59(0x226)](),this[_0x43cd59(0x147)]()['recalculateActionsFTB']();},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x130)]=Game_Battler[_0x34fcf0(0x1bd)]['performCollapse'],Game_Battler[_0x34fcf0(0x1bd)]['performCollapse']=function(){const _0x11adb4=_0x34fcf0;VisuMZ[_0x11adb4(0x2b2)][_0x11adb4(0x130)]['call'](this),BattleManager['removeActionBattlersFTB'](),this['friendsUnit']()[_0x11adb4(0x124)]();},Game_BattlerBase['prototype'][_0x34fcf0(0x295)]=function(){const _0x32c7ef=_0x34fcf0;this[_0x32c7ef(0x245)]=!![],BattleManager['removeActionBattlersFTB']();},Game_BattlerBase[_0x34fcf0(0x1bd)][_0x34fcf0(0x1c4)]=function(){return!!this['_passedTurnFTB'];},Game_BattlerBase['_FTB_ACTION_BASE']=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x1fe)][_0x34fcf0(0x2b9)],Game_BattlerBase['_FTB_ACTION_AGI_BUFF']=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x1fe)][_0x34fcf0(0x163)],Game_BattlerBase['_FTB_ACTION_AGI_DEBUFF']=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x1fe)]['AgiDebuff'],Game_BattlerBase[_0x34fcf0(0x1bd)][_0x34fcf0(0x221)]=function(){const _0x25ace8=_0x34fcf0;let _0x253129=Game_BattlerBase[_0x25ace8(0x2d8)];if(this['_buffs']===undefined)this[_0x25ace8(0x2b1)]();const _0x1926bd=this['_buffs'][0x6]||0x0;if(_0x1926bd>0x0&&Game_BattlerBase[_0x25ace8(0x24a)])_0x253129+=_0x1926bd;else _0x1926bd<0x0&&Game_BattlerBase[_0x25ace8(0x19a)]&&(_0x253129+=_0x1926bd);const _0x59c4a2=VisuMZ['BattleSystemFTB'][_0x25ace8(0x1a9)],_0x371436=this[_0x25ace8(0x280)]();for(const _0x2b5117 of _0x371436){if(!_0x2b5117)continue;const _0x1b40fd=_0x2b5117['note'];_0x1b40fd[_0x25ace8(0x129)](_0x59c4a2[_0x25ace8(0x2db)])&&(_0x253129+=Number(RegExp['$1']));}return Math['max'](0x0,_0x253129);},VisuMZ['BattleSystemFTB']['Game_BattlerBase_clearStates']=Game_BattlerBase['prototype'][_0x34fcf0(0x18b)],Game_BattlerBase['prototype'][_0x34fcf0(0x18b)]=function(){const _0x3135e1=_0x34fcf0;VisuMZ['BattleSystemFTB']['Game_BattlerBase_clearStates'][_0x3135e1(0x2a2)](this),this[_0x3135e1(0x147)]()['recalculateActionsFTB']();},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x12b)]=Game_BattlerBase[_0x34fcf0(0x1bd)][_0x34fcf0(0x1d8)],Game_BattlerBase[_0x34fcf0(0x1bd)][_0x34fcf0(0x1d8)]=function(_0x1a5419){const _0x57bfd6=_0x34fcf0;if(SceneManager['isSceneBattle']()&&BattleManager[_0x57bfd6(0x202)]()){const _0x11be87=DataManager[_0x57bfd6(0x286)](_0x1a5419);if(_0x11be87>this[_0x57bfd6(0x147)]()[_0x57bfd6(0x26f)]())return![];}return VisuMZ[_0x57bfd6(0x2b2)][_0x57bfd6(0x12b)]['call'](this,_0x1a5419);},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x1b0)]=Game_Battler['prototype'][_0x34fcf0(0x21e)],Game_Battler['prototype'][_0x34fcf0(0x21e)]=function(_0x4caa40){const _0x36c227=_0x34fcf0;VisuMZ[_0x36c227(0x2b2)]['Game_Battler_useItem'][_0x36c227(0x2a2)](this,_0x4caa40),this['payActionCostFTB'](_0x4caa40);},Game_Battler[_0x34fcf0(0x1bd)][_0x34fcf0(0x2d0)]=function(_0x4ecf55){const _0x340362=_0x34fcf0;if(!_0x4ecf55)return;if(!SceneManager[_0x340362(0x18e)]())return;if(!BattleManager[_0x340362(0x202)]())return;const _0x521d3d=BattleManager[_0x340362(0x161)];if(_0x521d3d&&_0x521d3d[_0x340362(0x1d0)])return;const _0x2134a4=DataManager['getActionCostFTB'](_0x4ecf55);this[_0x340362(0x147)]()[_0x340362(0x181)](_0x2134a4);},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x2ab)]=Game_Battler[_0x34fcf0(0x1bd)]['onTurnEnd'],Game_Battler['prototype'][_0x34fcf0(0x26b)]=function(){const _0x630ebb=_0x34fcf0;this[_0x630ebb(0x276)]=BattleManager[_0x630ebb(0x202)]()&&BattleManager[_0x630ebb(0x1a5)],VisuMZ[_0x630ebb(0x2b2)]['Game_Battler_onTurnEnd'][_0x630ebb(0x2a2)](this),delete this[_0x630ebb(0x276)];},VisuMZ[_0x34fcf0(0x2b2)]['Game_BattlerBase_updateStateTurns']=Game_BattlerBase[_0x34fcf0(0x1bd)][_0x34fcf0(0x265)],Game_BattlerBase[_0x34fcf0(0x1bd)][_0x34fcf0(0x265)]=function(){const _0x47bb0f=_0x34fcf0;if(this[_0x47bb0f(0x276)])return;VisuMZ[_0x47bb0f(0x2b2)]['Game_BattlerBase_updateStateTurns'][_0x47bb0f(0x2a2)](this);},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x287)]=Game_BattlerBase['prototype'][_0x34fcf0(0x247)],Game_BattlerBase['prototype']['updateBuffTurns']=function(){const _0x4e7f6a=_0x34fcf0;if(this[_0x4e7f6a(0x276)])return;VisuMZ[_0x4e7f6a(0x2b2)][_0x4e7f6a(0x287)][_0x4e7f6a(0x2a2)](this);},VisuMZ['BattleSystemFTB'][_0x34fcf0(0x2d9)]=Game_Battler['prototype'][_0x34fcf0(0x148)],Game_Battler[_0x34fcf0(0x1bd)][_0x34fcf0(0x148)]=function(_0x503c02){const _0x4d7742=_0x34fcf0;VisuMZ[_0x4d7742(0x2b2)]['Game_Battler_addState'][_0x4d7742(0x2a2)](this,_0x503c02),this['friendsUnit']()[_0x4d7742(0x124)]();},VisuMZ[_0x34fcf0(0x2b2)]['Game_Battler_removeState']=Game_Battler[_0x34fcf0(0x1bd)]['removeState'],Game_Battler[_0x34fcf0(0x1bd)][_0x34fcf0(0x140)]=function(_0x57088c){const _0x2295d7=_0x34fcf0;VisuMZ['BattleSystemFTB'][_0x2295d7(0x224)][_0x2295d7(0x2a2)](this,_0x57088c),this[_0x2295d7(0x147)]()['recalculateActionsFTB']();},VisuMZ['BattleSystemFTB']['Game_Battler_addBuff']=Game_Battler[_0x34fcf0(0x1bd)][_0x34fcf0(0x1de)],Game_Battler[_0x34fcf0(0x1bd)][_0x34fcf0(0x1de)]=function(_0x3ea565,_0x5d08b3){const _0x13039=_0x34fcf0;VisuMZ[_0x13039(0x2b2)][_0x13039(0x2d3)][_0x13039(0x2a2)](this,_0x3ea565,_0x5d08b3),this['friendsUnit']()[_0x13039(0x124)]();},VisuMZ['BattleSystemFTB']['Game_Battler_addDebuff']=Game_Battler[_0x34fcf0(0x1bd)][_0x34fcf0(0x2c9)],Game_Battler[_0x34fcf0(0x1bd)][_0x34fcf0(0x2c9)]=function(_0x70de1f,_0xc310c5){const _0x483497=_0x34fcf0;VisuMZ['BattleSystemFTB']['Game_Battler_addDebuff'][_0x483497(0x2a2)](this,_0x70de1f,_0xc310c5),this['friendsUnit']()[_0x483497(0x124)]();},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x1b5)]=Game_Battler[_0x34fcf0(0x1bd)]['removeBuff'],Game_Battler[_0x34fcf0(0x1bd)][_0x34fcf0(0x15f)]=function(_0x496769){const _0x1e3978=_0x34fcf0;VisuMZ['BattleSystemFTB'][_0x1e3978(0x1b5)][_0x1e3978(0x2a2)](this,_0x496769),this['friendsUnit']()['recalculateActionsFTB']();},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x1cb)]=Game_Battler['prototype'][_0x34fcf0(0x16d)],Game_Battler[_0x34fcf0(0x1bd)][_0x34fcf0(0x16d)]=function(_0x2aa1cf,_0x502152){const _0xe0342a=_0x34fcf0;BattleManager[_0xe0342a(0x202)]()?this[_0xe0342a(0x12a)](_0x2aa1cf,_0x502152):VisuMZ[_0xe0342a(0x2b2)]['Game_Battler_forceAction'][_0xe0342a(0x2a2)](this,_0x2aa1cf,_0x502152);},Game_Battler[_0x34fcf0(0x1bd)]['forceActionFTB']=function(_0x2ff46f,_0x1fa63b){const _0x59f052=_0x34fcf0,_0x2df0ed=new Game_Action(this,!![]);_0x2df0ed[_0x59f052(0x2bc)](_0x2ff46f),_0x2df0ed['_forceAction']=!![];if(_0x1fa63b===-0x2)_0x2df0ed['setTarget'](this['_lastTargetIndex']);else _0x1fa63b===-0x1?_0x2df0ed[_0x59f052(0x22b)]():_0x2df0ed[_0x59f052(0x123)](_0x1fa63b);this[_0x59f052(0x188)][_0x59f052(0x225)](_0x2df0ed);},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x26e)]=BattleManager['forceAction'],BattleManager[_0x34fcf0(0x16d)]=function(_0x1cec48){const _0x53e7f4=_0x34fcf0;BattleManager[_0x53e7f4(0x202)]()?this['forceActionFTB'](_0x1cec48):VisuMZ[_0x53e7f4(0x2b2)][_0x53e7f4(0x26e)][_0x53e7f4(0x2a2)](this,_0x1cec48);},BattleManager[_0x34fcf0(0x12a)]=function(_0x2cb410){const _0x81cf3f=JsonEx['makeDeepCopy'](_0x2cb410['currentAction']());this['_forcedBattlers']['push']([_0x2cb410,_0x81cf3f]);},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x242)]=Game_Actor[_0x34fcf0(0x1bd)][_0x34fcf0(0x211)],Game_Actor[_0x34fcf0(0x1bd)][_0x34fcf0(0x211)]=function(){const _0x1e94f8=_0x34fcf0;if(BattleManager[_0x1e94f8(0x202)]()){if(this[_0x1e94f8(0x20a)]())this[_0x1e94f8(0x20a)]()[_0x1e94f8(0x1bb)]();return![];}return VisuMZ[_0x1e94f8(0x2b2)][_0x1e94f8(0x242)]['call'](this);},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x214)]=Game_Actor[_0x34fcf0(0x1bd)][_0x34fcf0(0x11b)],Game_Actor[_0x34fcf0(0x1bd)][_0x34fcf0(0x11b)]=function(_0x42f36e,_0x57cfaf){const _0x33fb67=_0x34fcf0;VisuMZ[_0x33fb67(0x2b2)]['Game_Actor_changeEquip'][_0x33fb67(0x2a2)](this,_0x42f36e,_0x57cfaf),this[_0x33fb67(0x147)]()[_0x33fb67(0x124)]();},VisuMZ['BattleSystemFTB'][_0x34fcf0(0x258)]=Game_Actor[_0x34fcf0(0x1bd)]['forceChangeEquip'],Game_Actor[_0x34fcf0(0x1bd)][_0x34fcf0(0x16b)]=function(_0x47a4b7,_0x16bf30){const _0x43e949=_0x34fcf0;VisuMZ['BattleSystemFTB'][_0x43e949(0x258)][_0x43e949(0x2a2)](this,_0x47a4b7,_0x16bf30),this['friendsUnit']()[_0x43e949(0x124)]();},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x203)]=Game_Actor[_0x34fcf0(0x1bd)][_0x34fcf0(0x2d6)],Game_Actor['prototype'][_0x34fcf0(0x2d6)]=function(_0x5166b3,_0x436511){const _0x47a809=_0x34fcf0;VisuMZ[_0x47a809(0x2b2)]['Game_Actor_changeEquipById'][_0x47a809(0x2a2)](this,_0x5166b3,_0x436511),this['friendsUnit']()[_0x47a809(0x124)]();},VisuMZ[_0x34fcf0(0x2b2)]['Game_Actor_discardEquip']=Game_Actor[_0x34fcf0(0x1bd)][_0x34fcf0(0x1c8)],Game_Actor[_0x34fcf0(0x1bd)]['discardEquip']=function(_0x5c2e95){const _0x4fdb53=_0x34fcf0;VisuMZ[_0x4fdb53(0x2b2)]['Game_Actor_discardEquip'][_0x4fdb53(0x2a2)](this,_0x5c2e95),this[_0x4fdb53(0x147)]()[_0x4fdb53(0x124)]();},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x234)]=Game_Actor[_0x34fcf0(0x1bd)][_0x34fcf0(0x261)],Game_Actor[_0x34fcf0(0x1bd)][_0x34fcf0(0x261)]=function(_0x20bf67){const _0x508926=_0x34fcf0;VisuMZ[_0x508926(0x2b2)][_0x508926(0x234)][_0x508926(0x2a2)](this,_0x20bf67),this['friendsUnit']()[_0x508926(0x124)]();},VisuMZ['BattleSystemFTB']['Game_Actor_changeClass']=Game_Actor[_0x34fcf0(0x1bd)]['changeClass'],Game_Actor[_0x34fcf0(0x1bd)][_0x34fcf0(0x27f)]=function(_0x35b300,_0x480e01){const _0x3388fc=_0x34fcf0;VisuMZ[_0x3388fc(0x2b2)][_0x3388fc(0x122)][_0x3388fc(0x2a2)](this,_0x35b300,_0x480e01),this[_0x3388fc(0x147)]()[_0x3388fc(0x124)]();},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x23a)]=Game_Enemy[_0x34fcf0(0x1bd)][_0x34fcf0(0x17f)],Game_Enemy[_0x34fcf0(0x1bd)][_0x34fcf0(0x17f)]=function(_0x2b3c1f){const _0x50b7ba=_0x34fcf0;VisuMZ[_0x50b7ba(0x2b2)]['Game_Enemy_transform'][_0x50b7ba(0x2a2)](this,_0x2b3c1f),this[_0x50b7ba(0x147)]()[_0x50b7ba(0x124)]();},Game_Unit['_FTB_MAX_ACTIONS']=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)]['Mechanics']['MaxActions'],Game_Unit['_FTB_MIN_ACTIONS']=VisuMZ['BattleSystemFTB'][_0x34fcf0(0x16a)][_0x34fcf0(0x1fe)][_0x34fcf0(0x28a)],Game_Unit['_FTB_ACTION_OVERFLOW']=VisuMZ[_0x34fcf0(0x2b2)]['Settings']['Mechanics']['AllowOverflow'],Game_Unit['prototype'][_0x34fcf0(0x2cd)]=function(){const _0x5806db=_0x34fcf0;this[_0x5806db(0x1ba)](),this[_0x5806db(0x251)](this[_0x5806db(0x218)]());},Game_Unit[_0x34fcf0(0x1bd)][_0x34fcf0(0x1ba)]=function(){const _0x4abf8f=_0x34fcf0;this[_0x4abf8f(0x150)]=!![];let _0x2d694c=0x0,_0x1e46c3=this[_0x4abf8f(0x11c)]()[_0x4abf8f(0x1c7)](_0x140d33=>_0x140d33[_0x4abf8f(0x142)]());_0x2d694c=_0x1e46c3[_0x4abf8f(0x1cc)]((_0x4b279c,_0x11b4c2)=>_0x4b279c+_0x11b4c2[_0x4abf8f(0x221)](),_0x2d694c),_0x2d694c=_0x2d694c[_0x4abf8f(0x1ec)](Game_Unit['_FTB_MIN_ACTIONS'],Game_Unit[_0x4abf8f(0x1a0)]),this[_0x4abf8f(0x2af)]=_0x2d694c;},Game_Unit[_0x34fcf0(0x1bd)][_0x34fcf0(0x124)]=function(){const _0xc52fe3=_0x34fcf0;if(!BattleManager[_0xc52fe3(0x202)]())return;if(!$gameParty[_0xc52fe3(0x289)]())return;const _0x1a48c0=this[_0xc52fe3(0x218)]();this[_0xc52fe3(0x1ba)]();let _0x857416=this[_0xc52fe3(0x26f)]();const _0x2daed1=this[_0xc52fe3(0x218)]()-_0x1a48c0;if(BattleManager['_FTB_RECALC_ADD_DIFF']&&_0x2daed1>0x0)_0x857416+=_0x2daed1;if(BattleManager[_0xc52fe3(0x22a)]&&_0x2daed1<0x0)_0x857416+=_0x2daed1;_0x857416=Math[_0xc52fe3(0x1f7)](_0x857416,Game_Unit[_0xc52fe3(0x1a0)]),this[_0xc52fe3(0x251)](_0x857416);},Game_Unit[_0x34fcf0(0x1bd)]['getCurrentActionsFTB']=function(){return this['_ftbActionsCur']||0x0;},Game_Unit['prototype'][_0x34fcf0(0x251)]=function(_0x4900cf){const _0x2f405a=_0x34fcf0;this['_ftbActionsCur']=Math[_0x2f405a(0x1ab)](_0x4900cf)[_0x2f405a(0x1ec)](0x0,Game_Unit[_0x2f405a(0x1a0)]),!Game_Unit[_0x2f405a(0x18c)]&&(this[_0x2f405a(0x12e)]=Math[_0x2f405a(0x1f7)](this['_ftbActionsCur'],this['getMaxActionsFTB']()));},Game_Unit[_0x34fcf0(0x1bd)]['gainCurrentActionsFTB']=function(_0x416bd4){const _0x79ab23=_0x34fcf0;this[_0x79ab23(0x251)](this[_0x79ab23(0x26f)]()+_0x416bd4);},Game_Unit[_0x34fcf0(0x1bd)][_0x34fcf0(0x1a1)]=function(_0x2ecbcf){this['gainCurrentActionsFTB'](-_0x2ecbcf);},Game_Unit[_0x34fcf0(0x1bd)]['getMaxActionsFTB']=function(){const _0x57a046=_0x34fcf0;return this[_0x57a046(0x2af)]||0x0;},Game_Unit[_0x34fcf0(0x1bd)][_0x34fcf0(0x201)]=function(_0x9fb1b7){const _0x31f2ec=_0x34fcf0;this[_0x31f2ec(0x2af)]=_0x9fb1b7[_0x31f2ec(0x1ec)](Game_Unit[_0x31f2ec(0x282)],Game_Unit[_0x31f2ec(0x1a0)]);},Game_Unit[_0x34fcf0(0x1bd)]['reduceActionsFTB']=function(_0xd7707c){const _0x1f348a=_0x34fcf0;this[_0x1f348a(0x1a1)](_0xd7707c);},Game_Unit['prototype'][_0x34fcf0(0x266)]=function(){const _0x11da4f=_0x34fcf0;if(BattleManager['_subject']){if(this[_0x11da4f(0x2d1)]()[_0x11da4f(0x1be)](BattleManager[_0x11da4f(0x17e)])){const _0x29f276=BattleManager[_0x11da4f(0x17e)]['currentAction']();if(_0x29f276&&_0x29f276['_forceAction'])return!![];}}return this[_0x11da4f(0x12e)]=this[_0x11da4f(0x12e)]||0x0,this['_ftbActionsCur']>0x0;},Game_Unit[_0x34fcf0(0x1bd)]['performTurnEndFTB']=function(){const _0x280bc2=_0x34fcf0;for(const _0x471db0 of this[_0x280bc2(0x2d1)]()){if(!_0x471db0)continue;const _0x45fb20=_0x471db0[_0x280bc2(0x196)]();_0x471db0[_0x280bc2(0x26b)](),_0x471db0[_0x280bc2(0x1e1)](),_0x45fb20&&_0x471db0['isDead']()&&_0x471db0[_0x280bc2(0x2c1)]();}},Game_Unit['prototype'][_0x34fcf0(0x227)]=function(){const _0x1ca3f6=_0x34fcf0;if(this['getCurrentActionsFTB']()<=0x0)return!![];if(!this[_0x1ca3f6(0x11c)]()[_0x1ca3f6(0x2b6)](_0x57bdee=>_0x57bdee[_0x1ca3f6(0x142)]()))return!![];return![];},Game_Unit[_0x34fcf0(0x1bd)][_0x34fcf0(0x259)]=function(){const _0x5bdcfe=_0x34fcf0;for(const _0x1dfa05 of this[_0x5bdcfe(0x2d1)]()){if(!_0x1dfa05)continue;_0x1dfa05[_0x5bdcfe(0x265)](),_0x1dfa05[_0x5bdcfe(0x15a)](0x2),_0x1dfa05[_0x5bdcfe(0x247)](),_0x1dfa05[_0x5bdcfe(0x1e1)]();}},Game_Unit[_0x34fcf0(0x1bd)][_0x34fcf0(0x291)]=function(){for(const _0x3c9df0 of this['members']()){if(!_0x3c9df0)continue;_0x3c9df0['_passedTurnFTB']=![];}},Game_Unit[_0x34fcf0(0x1bd)][_0x34fcf0(0x1ca)]=function(){const _0xd4f5b5=_0x34fcf0,_0x2ba992=this[_0xd4f5b5(0x2d1)]();return Math['min'](..._0x2ba992[_0xd4f5b5(0x11d)](_0x5d3621=>_0x5d3621[_0xd4f5b5(0x27a)]));},Game_Unit[_0x34fcf0(0x1bd)][_0x34fcf0(0x1ad)]=function(){const _0x20cb60=_0x34fcf0,_0x575c0a=this[_0x20cb60(0x2d1)]();return Math[_0x20cb60(0x2a1)](..._0x575c0a['map'](_0x5e7bc7=>_0x5e7bc7[_0x20cb60(0x27a)]));},Game_Unit['prototype']['ftbTotalAgility']=function(){const _0xec732a=_0x34fcf0,_0x9426ed=this['members']();return _0x9426ed[_0xec732a(0x1cc)]((_0x34ce02,_0x43a335)=>_0x34ce02+_0x43a335['agi'],0x0);},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x24f)]=Game_Unit['prototype'][_0x34fcf0(0x269)],Game_Unit[_0x34fcf0(0x1bd)][_0x34fcf0(0x269)]=function(_0x5dd995){const _0x1675a0=_0x34fcf0;VisuMZ[_0x1675a0(0x2b2)]['Game_Unit_onBattleStart']['call'](this,_0x5dd995),BattleManager[_0x1675a0(0x202)]()&&(this['_ftbLastIndex']=0x0);},Game_Unit[_0x34fcf0(0x1bd)][_0x34fcf0(0x275)]=function(){const _0x42f75e=_0x34fcf0,_0x1da119=this['aliveMembers']();if(BattleManager[_0x42f75e(0x293)])return _0x1da119;if(BattleManager[_0x42f75e(0x28f)])return _0x1da119;this[_0x42f75e(0x2a4)]=this[_0x42f75e(0x2a4)]||0x0;while(!_0x1da119['some'](_0xb5b52=>_0xb5b52['index']()===this[_0x42f75e(0x2a4)])){const _0x81c3ff=this['members'](),_0x2bc70b=_0x81c3ff[this[_0x42f75e(0x2a4)]];let _0x404949=_0x81c3ff[_0x42f75e(0x1c6)](_0x2bc70b)+0x1;if(_0x404949>=_0x81c3ff[_0x42f75e(0x1a4)])_0x404949=0x0;this['_ftbLastIndex']=_0x404949;}for(;;){const _0xe78803=_0x1da119[0x0][_0x42f75e(0x243)]();if(_0xe78803===this[_0x42f75e(0x2a4)])break;_0x1da119[_0x42f75e(0x1f0)](_0x1da119['shift']());}return _0x1da119;},Game_Unit[_0x34fcf0(0x1bd)][_0x34fcf0(0x222)]=function(_0x50c1ca){const _0x1977c7=_0x34fcf0;this['_ftbLastIndex']=_0x50c1ca?_0x50c1ca[_0x1977c7(0x243)]():0x0,this[_0x1977c7(0x2a4)]++;},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x254)]=Scene_Battle[_0x34fcf0(0x1bd)][_0x34fcf0(0x153)],Scene_Battle[_0x34fcf0(0x1bd)][_0x34fcf0(0x153)]=function(){const _0x2e0346=_0x34fcf0;VisuMZ[_0x2e0346(0x2b2)][_0x2e0346(0x254)][_0x2e0346(0x2a2)](this),BattleManager[_0x2e0346(0x202)]()&&this[_0x2e0346(0x133)]();},Scene_Battle[_0x34fcf0(0x1bd)]['createActorCommandWindowFTB']=function(){const _0x49ec1c=_0x34fcf0,_0x58cc00=this['_actorCommandWindow'];this['isPartyCommandWindowDisabled']()&&delete _0x58cc00['_handlers'][_0x49ec1c(0x1b8)];},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x212)]=Scene_Battle[_0x34fcf0(0x1bd)]['commandCancel'],Scene_Battle[_0x34fcf0(0x1bd)][_0x34fcf0(0x26d)]=function(){const _0xba8eaf=_0x34fcf0;BattleManager[_0xba8eaf(0x202)]()?this[_0xba8eaf(0x2c2)]():VisuMZ[_0xba8eaf(0x2b2)]['Scene_Battle_commandCancel'][_0xba8eaf(0x2a2)](this);},Scene_Battle[_0x34fcf0(0x1bd)][_0x34fcf0(0x2c2)]=function(){const _0xd9fb49=_0x34fcf0;this[_0xd9fb49(0x178)][_0xd9fb49(0x167)](),this['_actorCommandWindow'][_0xd9fb49(0x297)]();},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x174)]=Scene_Battle['prototype'][_0x34fcf0(0x2d5)],Scene_Battle['prototype']['commandFight']=function(){const _0x4dcbde=_0x34fcf0;BattleManager['isFTB']()?this['startActorCommandSelection']():VisuMZ['BattleSystemFTB'][_0x4dcbde(0x174)]['call'](this);},VisuMZ[_0x34fcf0(0x2b2)]['Scene_Battle_createAllWindows']=Scene_Battle[_0x34fcf0(0x1bd)][_0x34fcf0(0x28c)],Scene_Battle['prototype']['createAllWindows']=function(){const _0x8fc41c=_0x34fcf0;VisuMZ[_0x8fc41c(0x2b2)][_0x8fc41c(0x1d6)]['call'](this),this[_0x8fc41c(0x2ba)]();},Scene_Battle['prototype'][_0x34fcf0(0x2ba)]=function(){const _0x3677ac=_0x34fcf0;if(!BattleManager[_0x3677ac(0x202)]())return;const _0x4e0e50=this[_0x3677ac(0x2ad)](this['_windowLayer']);this[_0x3677ac(0x25a)]=new Window_FTB_ActionCount(),this[_0x3677ac(0x25a)][_0x3677ac(0x255)]($gameTroop),this['addChildAt'](this[_0x3677ac(0x25a)],_0x4e0e50),this[_0x3677ac(0x24e)]=new Window_FTB_ActionCount(),this[_0x3677ac(0x24e)][_0x3677ac(0x255)]($gameParty),this[_0x3677ac(0x1b9)](this[_0x3677ac(0x24e)],_0x4e0e50),this[_0x3677ac(0x1d9)]();},Scene_Battle[_0x34fcf0(0x1bd)]['repositionLogWindowFTB']=function(){const _0x17a930=_0x34fcf0;if(!BattleManager['isFTB']())return;if(!this[_0x17a930(0x180)])return;const _0x488407=Window_FTB_ActionCount[_0x17a930(0x16a)];if(_0x488407['BottomPosition'])return;this['_logWindow']['y']+=_0x488407[_0x17a930(0x1c2)];},Window_Base[_0x34fcf0(0x263)]=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x1e3)][_0x34fcf0(0x2d7)],Window_Base[_0x34fcf0(0x11f)]=VisuMZ[_0x34fcf0(0x2b2)]['Settings'][_0x34fcf0(0x1e3)]['ShowCostForAttack'],Window_Base[_0x34fcf0(0x151)]=VisuMZ[_0x34fcf0(0x2b2)]['Settings'][_0x34fcf0(0x1e3)]['ShowCostForGuard'],Window_Base['_FTB_COST_SHOW_0']=VisuMZ['BattleSystemFTB'][_0x34fcf0(0x16a)][_0x34fcf0(0x1e3)]['Show_0_Action_Cost'],Window_Base['_FTB_COST_SHOW_1']=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)]['General'][_0x34fcf0(0x2ce)],VisuMZ['BattleSystemFTB']['Window_Base_makeAdditionalSkillCostText']=Window_Base[_0x34fcf0(0x1bd)][_0x34fcf0(0x17c)],Window_Base[_0x34fcf0(0x1bd)][_0x34fcf0(0x17c)]=function(_0x56f9bf,_0x15a52c,_0x3c62a8){const _0x513889=_0x34fcf0;return _0x3c62a8=VisuMZ[_0x513889(0x2b2)]['Window_Base_makeAdditionalSkillCostText'][_0x513889(0x2a2)](this,_0x56f9bf,_0x15a52c,_0x3c62a8),_0x3c62a8=this[_0x513889(0x1ff)](_0x56f9bf,_0x15a52c,_0x3c62a8),_0x3c62a8;},VisuMZ['BattleSystemFTB'][_0x34fcf0(0x262)]=Window_Base[_0x34fcf0(0x1bd)][_0x34fcf0(0x2bf)],Window_Base['prototype']['drawItemNumber']=function(_0x39def8,_0x7794bf,_0x4fe865,_0x36e922){const _0x50ba5e=_0x34fcf0;BattleManager[_0x50ba5e(0x202)]()&&this[_0x50ba5e(0x1e5)]===Window_BattleItem?this[_0x50ba5e(0x28b)](_0x39def8,_0x7794bf,_0x4fe865,_0x36e922):VisuMZ[_0x50ba5e(0x2b2)][_0x50ba5e(0x262)][_0x50ba5e(0x2a2)](this,_0x39def8,_0x7794bf,_0x4fe865,_0x36e922),this[_0x50ba5e(0x18d)]();},Window_Base['prototype']['drawItemNumberFTB']=function(_0x62c116,_0x3aa511,_0x398537,_0x470435){const _0x178917=_0x34fcf0,_0x546eab=BattleManager[_0x178917(0x2ca)]||$gameParty[_0x178917(0x2d1)]()[0x0],_0x469a22=this[_0x178917(0x1ff)](_0x546eab,_0x62c116,''),_0x9c5228=this['textSizeEx'](_0x469a22)[_0x178917(0x23f)],_0x5c73d0=Window_Base[_0x178917(0x263)];let _0x17a148=_0x3aa511+_0x470435-_0x9c5228;if(_0x469a22==='')VisuMZ[_0x178917(0x2b2)][_0x178917(0x262)][_0x178917(0x2a2)](this,_0x62c116,_0x3aa511,_0x398537,_0x470435);else{if(this['isDrawItemNumber'](_0x62c116)){this['resetFontSettings']();const _0x44c60e=VisuMZ[_0x178917(0x13a)]['Settings']['ItemScene'];this['contents']['fontSize']=_0x44c60e[_0x178917(0x1e2)];if(_0x5c73d0){const _0x2d0541=_0x44c60e[_0x178917(0x1aa)],_0x37acd3=_0x2d0541['format']($gameParty['numItems'](_0x62c116)),_0xf24069=this['textWidth'](_0x37acd3+this[_0x178917(0x136)]());_0x17a148-=_0xf24069;}else _0x470435-=this[_0x178917(0x143)](this['skillCostSeparator']())+_0x9c5228;VisuMZ[_0x178917(0x2b2)]['Window_Base_drawItemNumber'][_0x178917(0x2a2)](this,_0x62c116,_0x3aa511,_0x398537,_0x470435);}}this['drawTextEx'](_0x469a22,_0x17a148,_0x398537);},Window_Base[_0x34fcf0(0x1bd)][_0x34fcf0(0x1ff)]=function(_0x587e31,_0x29f7cd,_0x5a79b6){const _0x4c6930=_0x34fcf0;if(!BattleManager[_0x4c6930(0x202)]())return _0x5a79b6;if(!_0x587e31)return _0x5a79b6;if(!_0x29f7cd)return _0x5a79b6;if(_0x29f7cd[_0x4c6930(0x25d)][_0x4c6930(0x129)](VisuMZ[_0x4c6930(0x2b2)]['RegExp']['HideActionPointCost']))return _0x5a79b6;let _0xbea5ce=DataManager[_0x4c6930(0x286)](_0x29f7cd);const _0x57bd20=Window_Base['_FTB_COST_POSITION'],_0x1414c5=Window_Base['_FTB_COST_SHOW_ATTACK'],_0x26e969=Window_Base[_0x4c6930(0x151)],_0x13ba26=Window_Base[_0x4c6930(0x135)],_0x4e3777=Window_Base[_0x4c6930(0x210)];if(_0x29f7cd[_0x4c6930(0x25d)][_0x4c6930(0x129)](VisuMZ[_0x4c6930(0x2b2)][_0x4c6930(0x1a9)]['ShowActionPointCost'])){if(_0xbea5ce<0x0)return _0x5a79b6;}else{if(DataManager[_0x4c6930(0x21b)](_0x29f7cd)&&this[_0x4c6930(0x1e5)]===Window_ActorCommand){if(!_0x1414c5&&_0x29f7cd['id']===_0x587e31[_0x4c6930(0x164)]())return _0x5a79b6;if(!_0x26e969&&_0x29f7cd['id']===_0x587e31[_0x4c6930(0x1ed)]())return _0x5a79b6;}if(_0xbea5ce<0x0)return _0x5a79b6;if(!_0x13ba26&&_0xbea5ce===0x0)return _0x5a79b6;if(!_0x4e3777&&_0xbea5ce===0x1)return _0x5a79b6;}const _0x4d1bca='\x5cI[%1]'['format'](ImageManager[_0x4c6930(0x162)]),_0x35f8ef=TextManager[_0x4c6930(0x191)];let _0x28934b=TextManager['ftbCostFormat']['format'](_0xbea5ce,_0x35f8ef,_0x4d1bca);if(_0x5a79b6==='')_0x5a79b6+=_0x28934b;else _0x57bd20?_0x5a79b6=_0x28934b+this[_0x4c6930(0x136)]()+_0x5a79b6:_0x5a79b6=_0x5a79b6+this['skillCostSeparator']()+_0x28934b;return _0x5a79b6;},VisuMZ[_0x34fcf0(0x2b2)]['Window_Help_setItem']=Window_Help[_0x34fcf0(0x1bd)]['setItem'],Window_Help[_0x34fcf0(0x1bd)]['setItem']=function(_0x1bb8d6){const _0x5a3f67=_0x34fcf0;BattleManager[_0x5a3f67(0x202)]()&&_0x1bb8d6&&_0x1bb8d6[_0x5a3f67(0x25d)]&&_0x1bb8d6['note']['match'](/<(?:FTB) HELP>\s*([\s\S]*)\s*<\/(?:FTB) HELP>/i)?this[_0x5a3f67(0x19b)](String(RegExp['$1'])):VisuMZ['BattleSystemFTB']['Window_Help_setItem']['call'](this,_0x1bb8d6);},Window_Selectable[_0x34fcf0(0x1bd)][_0x34fcf0(0x1e8)]=function(){const _0x4fa2b9=_0x34fcf0;return this[_0x4fa2b9(0x1e5)]===Window_ActorCommand&&BattleManager[_0x4fa2b9(0x202)]()&&BattleManager[_0x4fa2b9(0x28f)];},VisuMZ['BattleSystemFTB'][_0x34fcf0(0x173)]=Window_Selectable[_0x34fcf0(0x1bd)][_0x34fcf0(0x159)],Window_Selectable[_0x34fcf0(0x1bd)]['cursorRight']=function(_0x17d846){const _0x50da66=_0x34fcf0;this[_0x50da66(0x1e8)]()&&this[_0x50da66(0x139)]()===0x1?this[_0x50da66(0x1ce)](!![]):VisuMZ[_0x50da66(0x2b2)]['Window_Selectable_cursorRight'][_0x50da66(0x2a2)](this,_0x17d846);},VisuMZ[_0x34fcf0(0x2b2)]['Window_Selectable_cursorLeft']=Window_Selectable[_0x34fcf0(0x1bd)][_0x34fcf0(0x2a8)],Window_Selectable[_0x34fcf0(0x1bd)]['cursorLeft']=function(_0x491df1){const _0x4ceff3=_0x34fcf0;this[_0x4ceff3(0x1e8)]()&&this[_0x4ceff3(0x139)]()===0x1?this[_0x4ceff3(0x1ce)](![]):VisuMZ[_0x4ceff3(0x2b2)]['Window_Selectable_cursorLeft'][_0x4ceff3(0x2a2)](this,_0x491df1);},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x1cf)]=Window_Selectable[_0x34fcf0(0x1bd)][_0x34fcf0(0x187)],Window_Selectable[_0x34fcf0(0x1bd)][_0x34fcf0(0x187)]=function(){const _0x28befa=_0x34fcf0;this[_0x28befa(0x1e8)]()?this[_0x28befa(0x1ce)](!![]):VisuMZ[_0x28befa(0x2b2)]['Window_Selectable_cursorPagedown'][_0x28befa(0x2a2)](this);},VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x24d)]=Window_Selectable['prototype'][_0x34fcf0(0x157)],Window_Selectable['prototype'][_0x34fcf0(0x157)]=function(){const _0xde9113=_0x34fcf0;this[_0xde9113(0x1e8)]()?this['ftbSwitchActorDirection'](![]):VisuMZ['BattleSystemFTB'][_0xde9113(0x24d)][_0xde9113(0x2a2)](this);},Window_ActorCommand['prototype'][_0x34fcf0(0x1ce)]=function(_0x2fe06b){const _0x1d0d95=_0x34fcf0,_0x1fc6b6=BattleManager['_currentActor'];let _0x3b37e8=$gameParty[_0x1d0d95(0x277)]()[_0x1d0d95(0x1c6)](_0x1fc6b6);const _0x3a384a=$gameParty[_0x1d0d95(0x277)]()[_0x1d0d95(0x1a4)]-0x1;let _0x432f1c=$gameParty[_0x1d0d95(0x277)]()[_0x3b37e8];for(;;){_0x3b37e8+=_0x2fe06b?0x1:-0x1;if(_0x3b37e8<0x0)_0x3b37e8=_0x3a384a;if(_0x3b37e8>_0x3a384a)_0x3b37e8=0x0;_0x432f1c=$gameParty[_0x1d0d95(0x277)]()[_0x3b37e8];if(_0x432f1c&&_0x432f1c[_0x1d0d95(0x1df)]()&&!_0x432f1c[_0x1d0d95(0x1c4)]())break;if(_0x432f1c===_0x1fc6b6)break;}this[_0x1d0d95(0x26a)](_0x1fc6b6,_0x432f1c);},Window_ActorCommand[_0x34fcf0(0x1bd)][_0x34fcf0(0x26a)]=function(_0x245423,_0x1c370a){const _0x5c5005=_0x34fcf0;if(_0x245423===_0x1c370a)return;if(_0x245423['battler']())_0x245423[_0x5c5005(0x20a)]()[_0x5c5005(0x16e)]();this['playCursorSound'](),BattleManager['_subject']=_0x1c370a,BattleManager['_currentActor']=_0x1c370a,BattleManager[_0x5c5005(0x2b3)](),SceneManager['_scene'][_0x5c5005(0x2da)]();},VisuMZ['BattleSystemFTB']['Window_Selectable_processTouch']=Window_Selectable[_0x34fcf0(0x1bd)][_0x34fcf0(0x1c0)],Window_Selectable['prototype']['processTouch']=function(){const _0x2522ea=_0x34fcf0;BattleManager[_0x2522ea(0x202)]()&&BattleManager[_0x2522ea(0x28f)]&&this[_0x2522ea(0x1e5)]===Window_BattleStatus?this[_0x2522ea(0x22f)]():VisuMZ[_0x2522ea(0x2b2)][_0x2522ea(0x252)][_0x2522ea(0x2a2)](this);},Window_BattleStatus[_0x34fcf0(0x1bd)][_0x34fcf0(0x22f)]=function(){const _0x2e045a=_0x34fcf0;this[_0x2e045a(0x230)]()&&(TouchInput[_0x2e045a(0x146)]()&&this[_0x2e045a(0x281)](!![]));},Window_BattleStatus[_0x34fcf0(0x1bd)][_0x34fcf0(0x281)]=function(_0x2f94cf){const _0x21b97e=_0x34fcf0,_0x5edd94=SceneManager[_0x21b97e(0x2c5)]['_actorCommandWindow'];if(!_0x5edd94)return;if(!_0x5edd94[_0x21b97e(0x237)])return;this[_0x21b97e(0x29b)]=![];const _0x5225dc=this['index'](),_0x1f974e=this[_0x21b97e(0x2cc)]();if(_0x1f974e>=0x0){const _0x461f82=$gameParty[_0x21b97e(0x277)]()[_0x5225dc],_0x5a7614=$gameParty[_0x21b97e(0x277)]()[_0x1f974e];this[_0x21b97e(0x2d2)](_0x5a7614)&&(_0x1f974e===this[_0x21b97e(0x243)]()&&(this[_0x21b97e(0x29b)]=!![]),this[_0x21b97e(0x182)](_0x1f974e),_0x5edd94[_0x21b97e(0x26a)](_0x461f82,_0x5a7614));}},Window_BattleStatus[_0x34fcf0(0x1bd)][_0x34fcf0(0x2d2)]=function(_0x441b1a){const _0x1b094c=_0x34fcf0;if(!_0x441b1a)return![];if(!_0x441b1a[_0x1b094c(0x142)]())return![];if(!_0x441b1a[_0x1b094c(0x1df)]())return![];if(_0x441b1a[_0x1b094c(0x1c4)]())return![];return!![];};function _0x1617(_0x55c495,_0x415d9b){const _0x41ea44=_0x41ea();return _0x1617=function(_0x1617c5,_0x2bc985){_0x1617c5=_0x1617c5-0x119;let _0x1c6376=_0x41ea44[_0x1617c5];return _0x1c6376;},_0x1617(_0x55c495,_0x415d9b);}function Window_FTB_ActionCount(){const _0x458df1=_0x34fcf0;this[_0x458df1(0x2bd)](...arguments);}Window_FTB_ActionCount[_0x34fcf0(0x1bd)]=Object['create'](Window_Base[_0x34fcf0(0x1bd)]),Window_FTB_ActionCount[_0x34fcf0(0x1bd)][_0x34fcf0(0x1e5)]=Window_FTB_ActionCount,Window_FTB_ActionCount[_0x34fcf0(0x16a)]=VisuMZ[_0x34fcf0(0x2b2)][_0x34fcf0(0x16a)][_0x34fcf0(0x298)],Window_FTB_ActionCount[_0x34fcf0(0x1bd)][_0x34fcf0(0x2bd)]=function(){const _0x29abca=_0x34fcf0,_0x144571=this['windowRect']();Window_Base['prototype'][_0x29abca(0x2bd)]['call'](this,_0x144571),this[_0x29abca(0x14c)](0x0),this['initMembers'](),this['opacity']=0x0;},Window_FTB_ActionCount['prototype'][_0x34fcf0(0x1f3)]=function(){const _0x34db36=_0x34fcf0;return new Rectangle(0x0,0x0,Graphics[_0x34db36(0x23f)],Graphics[_0x34db36(0x260)]);},Window_FTB_ActionCount[_0x34fcf0(0x1bd)][_0x34fcf0(0x219)]=function(){const _0x14b84a=_0x34fcf0;this[_0x14b84a(0x1d4)]=null,this[_0x14b84a(0x154)]=0x0,this[_0x14b84a(0x27e)]=0x0;const _0x40242c=Window_FTB_ActionCount[_0x14b84a(0x16a)];this[_0x14b84a(0x2a9)]={'ActorPicture':_0x40242c[_0x14b84a(0x1dc)]?ImageManager['loadPicture'](_0x40242c['ActorActionPicture']):'','EnemyPicture':_0x40242c[_0x14b84a(0x1f5)]?ImageManager[_0x14b84a(0x1b2)](_0x40242c[_0x14b84a(0x1f5)]):'','EmptyPicture':_0x40242c[_0x14b84a(0x239)]?ImageManager['loadPicture'](_0x40242c['EmptyActionPicture']):''};},Window_FTB_ActionCount[_0x34fcf0(0x1bd)][_0x34fcf0(0x19f)]=function(){const _0x364989=_0x34fcf0;this[_0x364989(0x134)]=0x0;},Window_FTB_ActionCount[_0x34fcf0(0x1bd)]['setUnit']=function(_0xebf316){const _0x84cba4=_0x34fcf0;this[_0x84cba4(0x1d4)]=_0xebf316,this[_0x84cba4(0x2c6)]();},Window_FTB_ActionCount[_0x34fcf0(0x1bd)][_0x34fcf0(0x2c6)]=function(){const _0x32066d=_0x34fcf0;Window_Base[_0x32066d(0x1bd)][_0x32066d(0x2c6)]['call'](this),this['checkNeedsUpdate'](),this['updatePosition'](),this[_0x32066d(0x14b)]();},Window_FTB_ActionCount[_0x34fcf0(0x1bd)][_0x34fcf0(0x169)]=function(){const _0x521852=_0x34fcf0;if(!this[_0x521852(0x1d4)])return;(this[_0x521852(0x154)]!==this[_0x521852(0x1d4)][_0x521852(0x26f)]()||this['_maxActions']!==this[_0x521852(0x1d4)][_0x521852(0x218)]())&&(this[_0x521852(0x154)]=this[_0x521852(0x1d4)][_0x521852(0x26f)](),this[_0x521852(0x27e)]=this[_0x521852(0x1d4)]['getMaxActionsFTB'](),this[_0x521852(0x256)]());},Window_FTB_ActionCount['prototype'][_0x34fcf0(0x14b)]=function(){const _0x35a8c0=_0x34fcf0;this[_0x35a8c0(0x1e4)]=$gameSystem[_0x35a8c0(0x2cf)]();},Window_FTB_ActionCount['prototype'][_0x34fcf0(0x256)]=function(){const _0x3fe93c=_0x34fcf0;this[_0x3fe93c(0x253)][_0x3fe93c(0x12c)]();if(!this[_0x3fe93c(0x1d4)])return;const _0x2ac2f6=Window_FTB_ActionCount[_0x3fe93c(0x16a)];if(!_0x2ac2f6)return;const _0xa191f6=this['createStartingCoordinates'](),_0x77b526=this[_0x3fe93c(0x20d)](),_0x2c8721=_0x2ac2f6[_0x3fe93c(0x240)]+_0x2ac2f6[_0x3fe93c(0x160)],_0xdb9fd=_0x2ac2f6[_0x3fe93c(0x1ea)];let _0x53a783=_0xa191f6['x'],_0x2d3359=_0xa191f6['y'];while(_0x77b526[_0x3fe93c(0x1a4)]>_0x2ac2f6[_0x3fe93c(0x28e)]){_0x77b526[_0x3fe93c(0x20c)]();}while(_0x77b526[_0x3fe93c(0x1a4)]>0x0){const _0x527af5=_0x77b526['shift']();this[_0x3fe93c(0x1e9)](_0x527af5,_0x53a783,_0x2d3359,_0x77b526[_0x3fe93c(0x1a4)]),_0xdb9fd?_0x53a783+=_0x2c8721:_0x2d3359+=_0x2c8721;}},Window_FTB_ActionCount['prototype'][_0x34fcf0(0x2ac)]=function(){const _0xbf1ff3=_0x34fcf0,_0x6134d6=Window_FTB_ActionCount[_0xbf1ff3(0x16a)],_0x135dee=this[_0xbf1ff3(0x1d4)]===$gameParty,_0x489689=_0x6134d6[_0xbf1ff3(0x240)],_0x2a66fa=_0x489689*(_0x6134d6['MaxVisible']-0x1)+_0x6134d6['ImageGapDistance']*(_0x6134d6[_0xbf1ff3(0x28e)]-0x2),_0x15b0e8=_0x6134d6[_0xbf1ff3(0x1ea)],_0x3fc9e9=SceneManager[_0xbf1ff3(0x2c5)][_0xbf1ff3(0x290)][_0xbf1ff3(0x260)];let _0x40a568=0x0,_0x2cb85b=0x0;const _0x5a5cb2=_0x6134d6[_0xbf1ff3(0x1ac)];if(_0x5a5cb2){_0x2cb85b=this[_0xbf1ff3(0x1c1)]-_0x3fc9e9-_0x6134d6[_0xbf1ff3(0x205)]-_0x489689,_0x40a568=_0x135dee?this[_0xbf1ff3(0x1bc)]-_0x6134d6[_0xbf1ff3(0x24c)]-_0x489689:_0x6134d6[_0xbf1ff3(0x24c)];if(_0x15b0e8&&_0x135dee)_0x40a568-=_0x2a66fa;else!_0x15b0e8&&(_0x2cb85b-=_0x2a66fa);}else _0x2cb85b=_0x6134d6[_0xbf1ff3(0x205)],_0x40a568=_0x135dee?this['innerWidth']-_0x6134d6[_0xbf1ff3(0x24c)]-_0x489689:_0x6134d6[_0xbf1ff3(0x24c)],_0x15b0e8&&_0x135dee&&(_0x40a568-=_0x2a66fa);return _0x40a568+=_0x135dee?_0x6134d6[_0xbf1ff3(0x1bf)]:_0x6134d6[_0xbf1ff3(0x1ae)],_0x2cb85b+=_0x135dee?_0x6134d6[_0xbf1ff3(0x248)]:_0x6134d6[_0xbf1ff3(0x1b6)],new Point(Math[_0xbf1ff3(0x1ab)](_0x40a568),Math['round'](_0x2cb85b));},Window_FTB_ActionCount['prototype'][_0x34fcf0(0x20d)]=function(){const _0x49ce31=_0x34fcf0,_0x15a785=Window_FTB_ActionCount[_0x49ce31(0x16a)];let _0x3c30c0=!![];if(_0x15a785[_0x49ce31(0x1ea)]){if(this[_0x49ce31(0x1d4)]===$gameParty)_0x3c30c0=!_0x3c30c0;}else _0x3c30c0=!_0x15a785[_0x49ce31(0x1ac)];let _0x5a5022=this[_0x49ce31(0x1d4)][_0x49ce31(0x26f)](),_0x1afc83=Math[_0x49ce31(0x2a1)](0x0,this['_unit'][_0x49ce31(0x218)]()-_0x5a5022);const _0x3737b5=[];while(_0x5a5022--){const _0x5bcfdd='Current';_0x3737b5['push'](_0x5bcfdd);}while(_0x1afc83--){const _0x1323c1=_0x49ce31(0x1eb);_0x3c30c0?_0x3737b5[_0x49ce31(0x1f0)](_0x1323c1):_0x3737b5['unshift'](_0x1323c1);}while(_0x3737b5[_0x49ce31(0x1a4)]<0xa){const _0x2b929c='Nothing';_0x3c30c0?_0x3737b5[_0x49ce31(0x1f0)](_0x2b929c):_0x3737b5['unshift'](_0x2b929c);}return _0x3737b5;},Window_FTB_ActionCount[_0x34fcf0(0x1bd)][_0x34fcf0(0x1e9)]=function(_0x462c09,_0x5b0a29,_0x50db90,_0x393048){const _0x104efb=_0x34fcf0;if(_0x462c09==='Nothing')return;if(_0x462c09===_0x104efb(0x229))_0x462c09=this[_0x104efb(0x1d4)]===$gameParty?_0x104efb(0x11a):'Enemy';const _0x338c14=Window_FTB_ActionCount[_0x104efb(0x16a)];if(_0x338c14[_0x104efb(0x1da)['format'](_0x462c09)]){const _0x49ba49=_0x338c14[_0x104efb(0x1da)['format'](_0x462c09)],_0x296a05=ImageManager['loadPicture'](_0x49ba49);_0x296a05[_0x104efb(0x23b)](this[_0x104efb(0x21d)]['bind'](this,_0x296a05,_0x5b0a29,_0x50db90,_0x393048));}else{const _0x47537d=ImageManager['ftb%1ActionsIcon'[_0x104efb(0x141)](_0x462c09)];this[_0x104efb(0x236)](_0x47537d,_0x5b0a29,_0x50db90),this[_0x104efb(0x1a2)](_0x393048)&&this[_0x104efb(0x1fd)](_0x5b0a29,_0x50db90);}},Window_FTB_ActionCount[_0x34fcf0(0x1bd)][_0x34fcf0(0x21d)]=function(_0x1e1eec,_0x223fd2,_0x2a8554,_0x414b32){const _0x47ed91=_0x34fcf0;if(!_0x1e1eec)return;const _0x1d921a=Window_FTB_ActionCount[_0x47ed91(0x16a)],_0xfab44c=_0x1d921a[_0x47ed91(0x240)],_0x4f2f2f=_0xfab44c/_0x1e1eec[_0x47ed91(0x23f)],_0x3f6636=_0xfab44c/_0x1e1eec[_0x47ed91(0x260)],_0x145b6f=Math[_0x47ed91(0x1f7)](_0x4f2f2f,_0x3f6636,0x1),_0x56e1ea=_0x1e1eec[_0x47ed91(0x260)],_0x14c436=_0x1e1eec['height'],_0x5bb017=Math[_0x47ed91(0x1ab)](_0x56e1ea*_0x145b6f),_0x4c3901=Math['round'](_0x14c436*_0x145b6f),_0x460090=Math[_0x47ed91(0x1ab)](_0x223fd2+(_0xfab44c-_0x5bb017)/0x2),_0x2f590f=Math[_0x47ed91(0x1ab)](_0x2a8554+(_0xfab44c-_0x4c3901)/0x2);this[_0x47ed91(0x253)][_0x47ed91(0x29a)][_0x47ed91(0x120)]=_0x1d921a[_0x47ed91(0x14a)],this['contents']['blt'](_0x1e1eec,0x0,0x0,_0x56e1ea,_0x14c436,_0x460090,_0x2f590f,_0x5bb017,_0x4c3901),this[_0x47ed91(0x253)][_0x47ed91(0x29a)][_0x47ed91(0x120)]=!![],this[_0x47ed91(0x1a2)](_0x414b32)&&this[_0x47ed91(0x1fd)](_0x223fd2,_0x2a8554);},Window_FTB_ActionCount['prototype'][_0x34fcf0(0x236)]=function(_0x330b97,_0x478128,_0x4943d9){const _0x3e8c4c=_0x34fcf0,_0x21d914=Window_FTB_ActionCount[_0x3e8c4c(0x16a)];let _0x4641a2=_0x21d914[_0x3e8c4c(0x240)];const _0x1f04e0=ImageManager[_0x3e8c4c(0x2aa)]('IconSet'),_0x825724=ImageManager[_0x3e8c4c(0x1fb)],_0x201cad=ImageManager[_0x3e8c4c(0x204)],_0x260c25=_0x330b97%0x10*_0x825724,_0x38c055=Math[_0x3e8c4c(0x278)](_0x330b97/0x10)*_0x201cad;this[_0x3e8c4c(0x253)][_0x3e8c4c(0x29a)][_0x3e8c4c(0x120)]=_0x21d914[_0x3e8c4c(0x22e)],this[_0x3e8c4c(0x253)]['blt'](_0x1f04e0,_0x260c25,_0x38c055,_0x825724,_0x201cad,_0x478128,_0x4943d9,_0x4641a2,_0x4641a2),this['contents']['_context'][_0x3e8c4c(0x120)]=!![];},Window_FTB_ActionCount[_0x34fcf0(0x1bd)][_0x34fcf0(0x1f6)]=function(){const _0x333bc5=_0x34fcf0,_0x5d3200=Window_FTB_ActionCount[_0x333bc5(0x16a)];if(_0x5d3200[_0x333bc5(0x1ac)])return;if(!_0x5d3200[_0x333bc5(0x296)])return;const _0x441f21=SceneManager['_scene'][_0x333bc5(0x27b)];if(!_0x441f21)return;_0x441f21[_0x333bc5(0x1e4)]?(this['x']=_0x5d3200[_0x333bc5(0x24b)]||0x0,this['y']=_0x5d3200[_0x333bc5(0x220)]||0x0):(this['x']=0x0,this['y']=0x0);},Window_FTB_ActionCount[_0x34fcf0(0x1bd)][_0x34fcf0(0x1a2)]=function(_0x2697d7){const _0x1be993=_0x34fcf0,_0x115f3a=Window_FTB_ActionCount[_0x1be993(0x16a)];if(!_0x115f3a[_0x1be993(0x19e)])return![];const _0x3c532c=_0x115f3a['BottomPosition'],_0x400b0b=_0x115f3a[_0x1be993(0x1ea)],_0x41eef9=this[_0x1be993(0x1d4)]===$gameParty;if(_0x400b0b)return _0x41eef9?_0x2697d7===0x0:_0x2697d7===_0x115f3a[_0x1be993(0x28e)]-0x1;else return _0x3c532c?_0x2697d7===0x0:_0x2697d7===_0x115f3a[_0x1be993(0x28e)]-0x1;},Window_FTB_ActionCount[_0x34fcf0(0x1bd)]['drawActionsRemaining']=function(_0x52c4e3,_0x1860b8){const _0x41236a=_0x34fcf0;this['resetFontSettings']();const _0x518e5c=Window_FTB_ActionCount[_0x41236a(0x16a)],_0x522210=new Rectangle(_0x52c4e3,_0x1860b8,_0x518e5c[_0x41236a(0x240)],_0x518e5c[_0x41236a(0x240)]);_0x522210['x']+=_0x518e5c[_0x41236a(0x231)],_0x522210['y']+=_0x518e5c[_0x41236a(0x1e7)];const _0x5e5ab0=this[_0x41236a(0x1d4)][_0x41236a(0x26f)]();this['contents']['fontSize']=_0x518e5c[_0x41236a(0x2b8)],this['contents']['drawText'](_0x5e5ab0,_0x522210['x'],_0x522210['y'],_0x522210[_0x41236a(0x23f)],_0x522210[_0x41236a(0x260)],_0x41236a(0x179)),this[_0x41236a(0x18d)]();};