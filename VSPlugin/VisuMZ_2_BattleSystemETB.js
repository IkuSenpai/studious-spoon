//=============================================================================
// VisuStella MZ - Battle System - ETB - Energy Turn Battle
// VisuMZ_2_BattleSystemETB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemETB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemETB = VisuMZ.BattleSystemETB || {};
VisuMZ.BattleSystemETB.version = 1.09;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.09] [BattleSystemETB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_ETB_VisuStella_MZ
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
 * Energy Turn Battle (ETB) is a type of battle system made for RPG Maker MZ,
 * where the teams for actors and enemies take turns attacking one another as
 * a whole. Energy is accumulated as turns pass on, allowing each team to
 * perform more actions each turn. Each team can freely perform actions among
 * their teammates as wanted. When the energy count is depleted or if one team
 * ran out of battler's that can act, the other team begins their turn and
 * so forth.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "etb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actor and enemy teams take turns attacking each other as a whole.
 * * As the battle continues, energy is accumulated and more actions can be
 *   performed each turn.
 * * Energy count are given to each team at the start of each turn, and the
 *   amount of actions that can be performed increase progressively.
 * * Actors can be freely switched around to perform actions with.
 * * Alter the mechanics of the Battle System ETB to your liking through the
 *   Plugin Parameters.
 * * An Energy Count Display is shown for each side to relay information to the
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
 * Agility, however, can influence Energy Count through buffs and debuffs if
 * enabled through the Plugin Parameters. Each stack of Agility buffs will
 * raise the Energy Count for a team while each stack of Agility debuffs will
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
 * For enemy teams, enemies will always go in order from left-to-right for the
 * front view or right-to-left for sideview. If there are actions left, the
 * enemy team will cycle back to the first acting enemy.
 * 
 * ---
 * 
 * Energy Ramping
 * 
 * As the battle starts and goes forward, energy is accumulated across the two
 * teams, allowing them to perform more actions each turn that has passed.
 * 
 * The amount of actions that can be performed at base value can be determined
 * inside the Plugin Parameters > Mechanics Settings > Turn Base.
 * 
 * By default, assuming nothing else has changed, each team will have a base
 * energy count of 1 each turn they acquire until they reach 10 actions. This
 * cap will be different if you changed the Plugin Parameters mentioned above.
 * 
 * Once the maximum cap has been reached, that will be the finalized amount for
 * the start of each turn after.
 * 
 * The Energy Count can be altered by AGI buffs and/or debuffs depending on the
 * Plugin Parameter settings.
 * 
 * Further Energy Count can be altered by various notetag effects tied to the
 * trait objects of each battle member.
 * 
 * ---
 * 
 * Free Range Switching
 * 
 * Free Range Switching is always available to the player in the battle system.
 * The player can freely switch between actors in his/her party by pressing the
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
 * === General ETB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <ETB Help>
 *  description
 *  description
 * </ETB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under ETB.
 * - This is primarily used if the skill behaves differently in ETB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to ETB.
 *
 * ---
 * 
 * === Energy Cost-Related Notetags ===
 * 
 * ---
 *
 * <ETB Energy Cost: x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the ETB energy cost of this skill/item to 'x'.
 * - Replace 'x' with a number value representing the energy cost required to
 *   perform the skill.
 *
 * ---
 *
 * <ETB Hide Energy Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the ETB energy cost for this skill/item hidden regardless of Plugin
 *   Parameter settings.
 * 
 * ---
 *
 * <ETB Show Energy Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the ETB energy cost for this skill/item visible regardless of Plugin
 *   Parameter settings.
 *
 * ---
 * 
 * === Mechanics-Related Notetags ===
 * 
 * ---
 *
 * <ETB Pass Turn>
 *
 * - Used for: Skill, Item Notetags
 * - If a battler uses this skill/item, then even if there is energy left for
 *   the team to perform, that battler would no longer be able to input as they
 *   have already passed their turn.
 * - By default, this applies to "Guard". If you don't want it to apply to the
 *   Guard skill, turn it off in the Plugin Parameters for mechanics.
 *
 * ---
 *
 * <ETB Energy: +x>
 * <ETB Energy: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Battlers associated with these trait objects can increase or decrease the
 *   maximum number of actions performed each turn.
 * - Replace 'x' with a number representing the increase or decrease in energy
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
 * System: ETB Energy Count Visibility
 * - Determine the visibility of the ETB Energy Count Display.
 *
 *   Visibility:
 *   - Changes the visibility of the ETB Energy Count Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Determines the general settings of the ETB Battle System. These settings
 * range from determining how the Action Count resources and costs are
 * displayed to the text that appear during team shifting.
 *
 * ---
 *
 * Energy Counts
 * 
 *   Full Name:
 *   - What is the full name of "Energy Counts" in your game?
 * 
 *   Abbreviation:
 *   - What is the abbreviation of "Energy Counts" in your game?
 * 
 *   Cost Format:
 *   - How are Energy Count costs displayed?
 *   - %1 - Cost, %2 - Abbr Text, %3 - Icon
 * 
 * ---
 * 
 * Icons
 * 
 *   Actor Energy Icon:
 *   - What icon is used to represent actor actions?
 * 
 *   Enemy Energy Icon:
 *   - What icon is used to represent enemy actions?
 * 
 *   Empty Energy Icon:
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
 *   - Put the energy cost at the front of skill/item costs?
 * 
 *   Show Cost: Attack:
 *   - Show the energy cost for the Attack command?
 * 
 *   Show Cost: Guard:
 *   - Show the energy cost for the Guard command?
 * 
 *   Show Cost: 0 Energy:
 *   - Show the energy cost when the cost is 0 energy?
 * 
 *   Show Cost: 1 Energy:
 *   - Show the energy cost when the cost is 1 energy?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Determines the mechanics of the ETB Battle System. From here, you can
 * enable or disable core mechanics, determine how to determine turn advantage,
 * and how the various supporting mechanics operate.
 *
 * ---
 *
 * Main Mechanics
 * 
 *   Maintain Same Actor?:
 *   - Maintain the same actor after an action or move onto the next
 *     available actor?
 * 
 *   Current Turn Revival Act?:
 *   - Allow revived actors to act the current turn they're revived?
 * 
 *   Guard > Pass Turn?:
 *   - Does guarding cause a battler to pass turn?
 * 
 *   Gain Differences?:
 *   - If the max Energy Count for a team changes, gain the difference in value
 *     if positive?
 * 
 *   Lose Differences?:
 *   - If the max Energy Count for a team changes, lose the difference in value
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
 * Energy Generation
 * 
 *   Turn Base:
 *   - What is the starting base number of actions that's available at
 *     each turn?
 * 
 *   AGI Buff Influence?:
 *   - Do AGI buffs give +1 for each stack?
 * 
 *   AGI Debuff Influence?:
 *   - Do AGI debuffs give -1 for each stack?
 * 
 *   Maximum Energy:
 *   - What is the absolute maximum number of actions a team can have
 *     each turn?
 * 
 *   Minimum Energy:
 *   - What is the bare minimum number of actions a team can have each turn?
 * 
 *   Allow Overflow?:
 *   - Allow current actions to overflow?
 *   - Or let them cap at the current team max?
 *
 * ---
 *
 * Default Energy Costs
 * 
 *   Skills:
 *   - What is the default energy cost for skills?
 * 
 *   Items:
 *   - What is the default energy cost for items?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Energy Count Display Settings
 * ============================================================================
 *
 * Adjust the settings for the Energy Count Display. They appear in the upper
 * or lower corners of the screen for the player party and the enemy troop.
 *
 * ---
 *
 * Display Settings
 * 
 *   Draw Horizontally?:
 *   - Which direction do you want the Energy Count Display to go?
 * 
 *   Bottom Position?:
 *   - Place the Energy Count Display towards the bottom of the screen?
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
 *   Actor Energy Picture:
 *   Enemy Energy Picture:
 *   Empty Energy Picture:
 *   - Optional. Place an image for an actor, enemy, or empty energy instead of
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
 *   Max Energy Visible:
 *   - How many energy slots max should be drawn for each team?
 * 
 *   Image Size:
 *   - What is the size of the icons or pictures for the energy slots?
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
 *   - Show a number to display the energy remaining?
 * 
 *   Font Size:
 *   - What font size should be used for this number?
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset the remaining energy number X/Y.
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
 * Version 1.09: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > Mechanics > Current Turn Revival Act?:
 * **** Allow revived actors to act the current turn they're revived?
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
 * Version 1.07: April 13, 2023
 * * Bug Fixes!
 * ** Fixed a problem that caused actors to get skipped if they were revived
 *    during the same turn the rest of the party decided to guard. Fix made
 *    by Arisu.
 * 
 * Version 1.06: October 20, 2022
 * * Bug Fixes!
 * ** Fixed problem with the Energy Count Display's Actor Offset Y not working
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
 * Version 1.01: January 13, 2022
 * * Bug Fixes!
 * ** Fixed a redistribution error. Fix made by Olivia.
 * 
 * Version 1.00 Official Release Date: September 6, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemActionCountVisibility
 * @text System: ETB Energy Count Visibility
 * @desc Determine the visibility of the ETB Energy Count Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the ETB Energy Count Display.
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
 * @param BattleSystemETB
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
 * @desc Determines the general settings of the ETB Battle System.
 * @default {"ActionCounts":"","ActionCountFull:str":"Energy Points","ActionCountAbbr:str":"EP","ActionCountCostFmt:str":"\\FS[22]\\C[0]×%1%3\\C[0]","Icons":"","ActorActionsIcon:num":"165","EnemyActionsIcon:num":"162","EmptyActionsIcon:num":"161","TeamShift":"","PartyTeamShiftFmt:str":"%1's Turn!","TroopTeamShiftFmt:str":"Opponent's Turn!","TeamShiftWait:num":"60","DisplayedCosts":"","CostPosition:eval":"false","ShowCostForAttack:eval":"false","ShowCostForGuard:eval":"false","Show_0_Action_Cost:eval":"true","Show_1_Action_Cost:eval":"true"}
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Determines the mechanics of the ETB Battle System.
 * @default {"Main":"","KeepPrevActor:eval":"true","GuardPass:eval":"true","GainDiff:eval":"true","LoseDiff:eval":"false","StateBuffUpdate:eval":"true","TurnAdvantage":"","NeutralAdvantage:str":"average agi","ActionGeneration":"","TurnBase:arraynum":"[\"1\",\"1\",\"2\",\"2\",\"3\",\"3\",\"4\",\"4\",\"5\",\"5\",\"6\",\"6\",\"7\",\"7\",\"8\",\"8\",\"9\",\"9\",\"10\",\"10\"]","AgiBuff:eval":"false","AgiDebuff:eval":"false","MaxActions:num":"99","MinActions:num":"1","AllowOverflow:eval":"false","DefaultCost":"","DefaultCostSkill:num":"1","DefaultCostItem:num":"1"}
 *
 * @param ActionCountDisplay:struct
 * @text Energy Count Display
 * @type struct<ActionCountDisplay>
 * @desc Adjust the settings for the Energy Count Display.
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
 * @text Energy Count
 *
 * @param ActionCountFull:str
 * @text Full Name
 * @parent ActionCounts
 * @desc What is the full name of "Energy Count" in your game?
 * @default Energy Points
 *
 * @param ActionCountAbbr:str
 * @text Abbreviation
 * @parent ActionCounts
 * @desc What is the abbreviation of "Energy Count" in your game?
 * @default EP
 *
 * @param ActionCountCostFmt:str
 * @text Cost Format
 * @parent ActionCounts
 * @desc How are Energy Count costs displayed?
 * %1 - Cost, %2 - Abbr Text, %3 - Icon
 * @default \FS[22]\C[0]×%1%3\C[0]
 *
 * @param Icons
 *
 * @param ActorActionsIcon:num
 * @text Actor Energy Icon
 * @parent Icons
 * @desc What icon is used to represent actor energy?
 * @default 165
 *
 * @param EnemyActionsIcon:num
 * @text Enemy Energy Icon
 * @parent Icons
 * @desc What icon is used to represent enemy energy?
 * @default 162
 *
 * @param EmptyActionsIcon:num
 * @text Empty Energy Icon
 * @parent Icons
 * @desc What icon is used to represent empty energy?
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
 * @desc Put the energy cost at the front of skill/item costs?
 * @default false
 *
 * @param ShowCostForAttack:eval
 * @text Show Cost: Attack
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the energy cost for the Attack command?
 * @default false
 *
 * @param ShowCostForGuard:eval
 * @text Show Cost: Guard
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the energy cost for the Guard command?
 * @default false
 *
 * @param Show_0_Action_Cost:eval
 * @text Show Cost: 0 Energy
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the energy cost when the cost is 0 energy?
 * @default true
 *
 * @param Show_1_Action_Cost:eval
 * @text Show Cost: 1 Energy
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the energy cost when the cost is 1 energy?
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
 * @param KeepPrevActor:eval
 * @text Maintain Same Actor?
 * @parent Main
 * @type boolean
 * @on Maintain
 * @off Next Available
 * @desc Maintain the same actor after an action or move onto
 * the next available actor?
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
 * @desc If the max Energy Count for a team changes,
 * gain the difference in value if positive?
 * @default true
 *
 * @param LoseDiff:eval
 * @text Lose Differences?
 * @parent Main
 * @type boolean
 * @on Lose Differences
 * @off Keep Same
 * @desc If the max Energy Count for a team changes,
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
 * @text Energy Generation
 *
 * @param TurnBase:arraynum
 * @text Turn Base
 * @parent ActionGeneration
 * @type number[]
 * @desc What is the starting base number of actions that's available at each turn?
 * @default ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10"]
 *
 * @param AgiBuff:eval
 * @text AGI Buff Influence?
 * @parent ActionGeneration
 * @type boolean
 * @on Influence
 * @off No Influence
 * @desc Do AGI buffs give +1 for each stack?
 * @default false
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
 * @text Maximum Energy
 * @parent ActionGeneration
 * @type number
 * @desc What is the absolute maximum number of actions a team can have each turn?
 * @default 99
 *
 * @param MinActions:num
 * @text Minimum Energy
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
 * @desc What is the default energy cost for skills?
 * @default 1
 *
 * @param DefaultCostItem:num
 * @text Items
 * @parent DefaultCost
 * @type number
 * @desc What is the default energy cost for items?
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
 * @desc Which direction do you want the Energy Count Display to go?
 * @default true
 *
 * @param BottomPosition:eval
 * @text Bottom Position?
 * @parent Display
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Place the Energy Count Display towards the bottom of the screen?
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
 * @text Actor Energy Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an actor energy instead of an icon?
 * @default 
 *
 * @param EnemyActionPicture:str
 * @text Enemy Energy Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an enemy energy instead of an icon?
 * @default 
 *
 * @param EmptyActionPicture:str
 * @text Empty Energy Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an empty energy instead of an icon?
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
 * @text Max Energy Visible
 * @parent DrawSettings
 * @desc How many energy slots max should be drawn for each team?
 * @default 10
 *
 * @param ImageSize:num
 * @text Image Size
 * @parent DrawSettings
 * @desc What is the size of the icons or pictures for the energy slots?
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
 * @desc Show a number to display the energy remaining?
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
 * @desc Offset the remaining energy number X.
 * @default 0
 *
 * @param ActionsRemainingOffsetY:num
 * @text Offset Y
 * @parent DrawActionsRemaining:eval
 * @desc Offset the remaining energy number Y.
 * @default 0
 *
 */
//=============================================================================

const _0x221610=_0x3aba;function _0x3aba(_0x5a2ff1,_0x4b98ae){const _0x32c3e8=_0x32c3();return _0x3aba=function(_0x3aba6c,_0x574ca4){_0x3aba6c=_0x3aba6c-0x115;let _0x1b877a=_0x32c3e8[_0x3aba6c];return _0x1b877a;},_0x3aba(_0x5a2ff1,_0x4b98ae);}(function(_0x1de753,_0x52fd67){const _0xc8b13c=_0x3aba,_0x39ab31=_0x1de753();while(!![]){try{const _0x227b90=-parseInt(_0xc8b13c(0x21b))/0x1+parseInt(_0xc8b13c(0x1ae))/0x2*(-parseInt(_0xc8b13c(0x1e6))/0x3)+parseInt(_0xc8b13c(0x24a))/0x4+parseInt(_0xc8b13c(0x271))/0x5+parseInt(_0xc8b13c(0x202))/0x6+-parseInt(_0xc8b13c(0x1f9))/0x7*(parseInt(_0xc8b13c(0x13c))/0x8)+-parseInt(_0xc8b13c(0x199))/0x9;if(_0x227b90===_0x52fd67)break;else _0x39ab31['push'](_0x39ab31['shift']());}catch(_0x33d21b){_0x39ab31['push'](_0x39ab31['shift']());}}}(_0x32c3,0xa7f53));function _0x32c3(){const _0x350682=['removeState','drawBigIcon','Window_Selectable_cursorPageup','etbEnemyActionsIcon','ActorActionPicture','members','player','unshift','Scene_Battle_createActorCommandWindow','note','clamp','item','12072375MxRusG','Game_Troop_increaseTurn','AgiDebuff','loadSystem','addState','ETB','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','BattleManager_battleSys','Game_Actor_releaseUnequippableItems','isTpb','commandFight','_statusWindow','_etbTeamOdd','_ETB_ACTION_BASE','contents','etbAliveMembers','_ETB_RESET_INDEX','isSkill','map','makeActionOrders','drawItemNumberETB','434332jcycfQ','initMembers','DefaultCostSkill','forceActionETB','ConvertParams','version','height','agility','startDamagePopup','battler','_forceAction','Scene_Battle_createAllWindows','drawItemNumber','drawText','_action','toUpperCase','makeDeepCopy','ShowCostForGuard','Game_Battler_onTurnEnd','status','Game_Actor_changeEquip','Game_Actor_selectNextCommand','MaxActions','iconWidth','isDead','friendsUnit','aliveMembers','setUnit','ScreenBufferX','RepositionTopForHelp','_actor','_ETB_COST_SHOW_0','ShowCostForAttack','startTurnETB','PictureSmoothing','_ETB_ACTION_FIRST','refresh','setup','Settings','_storedBitmaps','PartyTeamShiftFmt','Game_BattlerBase_canUse','removeBuff','_ETB_STATE_BUFF_TURN_UPDATES_ONLY_ON_OPPONENT_TURNS','Game_Action_applyGlobal','min','format','lowest\x20agi','addDebuff','etbTroopTeamShift','Game_Battler_performCollapse','clearPassTurnETB','DTB','_ETB_BETWEEN_TEAMS_WAIT','startInputETB','opacity','3AyNVuf','discardEquip','checkNeedsUpdate','_ETB_ACTION_SECOND','Game_BattlerBase_appear','createActorCommandWindow','commandCancelETB','applyGlobalETB','Game_Actor_discardEquip','Scene_Battle_commandCancel','Game_Battler_removeBuff','BattleManager_startInput','isSceneBattle','update','length','push','_ETB_ACTION_AGI_BUFF','guardSkillId','textWidth','7ZrPZqR','createActorCommandWindowETB','TurnBase','_etbPartyActionCountWindow','_ETB_KEEP_PREV_ACTOR','parse','_lastTargetIndex','stepBack','_context','2754300kxIusx','\x5cI[%1]','Show_1_Action_Cost','concat','BattleManager_isTurnBased','changeEquipById','_maxActions','Scene_Battle_commandFight','selectNextActor','processTouchETB','startBattleETB','_actions','index','createActionCountWindowsETB','increaseTurn','makeAdditionalSkillCostText','match','StateBuffUpdate','_preemptive','max','releaseUnequippableItems','_ETB_RECALC_SUB_DIFF','getNextSubject','applyGlobal','_turnCountETB','204043ZqYJSc','some','BattleManager_processTurn','makeActionOrdersETB','setItem','endTurn','createActionsETB','attackSkillId','canUse','padding','_currentActions','Game_Actor_forceChangeEquip','updateVisibility','_etbActionsCur','setLastEtbIndex','playCursorSound','isItem','startActorCommandSelection','processTurnETB','reduce','Game_Battler_forceAction','Game_Action_speed','General','ARRAYEVAL','battleSys','_forcedBattlers','loadPicture','_actorCommandWindow','ActionCountCostFmt','Game_Actor_changeEquipById','Window_Selectable_processTouch','ActorOffsetY','forceChangeEquip','ActionsRemainingFontSize','isBattleSystemETBActionCountVisible','BattleManager_selectNextActor','sort','endAllBattlersTurn','keepPrevSubjectETB','_currentActor','_ETB_COST_SHOW_GUARD','JSON','subject','pop','_ETB_NEUTRAL_TURN_ADVANTAGE','endAction','indexOf','5270720MtxNGk','drawTextEx','payActionCostETB','_doubleTouch','performTurnEndETB','BattleManager_finishActorInput','Game_Battler_removeState','changeEquip','Game_Battler_addState','Window_Selectable_cursorRight','etbActorActionsIcon','canActorBeSelectedETB','NUM','round','MaxVisible','isDrawItemNumber','_subject','randomInt','active','createContentsArray','refreshActionCountWindowsETB','updateTurn','forceAction','Enemy','updateStateTurns','_logWindow','AgiBuff','actors','EnemyOffsetY','getActionCostETB','initBattleSystemETB','_unit','EnemyActionPicture','Game_Battler_onBattleStart','BattleSystemETB','_etbTurnAdvantageUnit','processSwitchActors','etbCreateTeamSwitchText','_passedTurnETB','6555190iJekhh','shift','setTarget','isTeamBased','traitObjects','_scene','constructor','ActorOffsetX','fontSize','_bypassStateTurnUpdatesETB','ItemQuantityFontSize','ItemQuantityFmt','isPassingTurnETB','BattleManager_makeActionOrders','_etbTeamEven','createStartingCoordinates','_ETB_ACTION_AGI_DEBUFF','_buffs','Game_Actor_changeClass','EmptyActionPicture','isAlive','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','appear','_ETB_MAX_ACTIONS','ItemsEquipsCore','Game_BattlerBase_updateStateTurns','MinActions','toLowerCase','reduceActionsETB','isTurnBased','BottomPosition','ItemScene','addBuff','_ETB_COST_POSITION','etbCostFormat','makeActions','hide','isActiveTpb','reviveETB','name','select','_etbCurrentUnit','RepositionTopHelpY','useItem','isPartyCommandWindowDisabled','_etbActionCountVisible','etbFreeRangeSwitch','ShowActionPointCost','endActionETB','innerHeight','BattleManager_isActiveTpb','setBackgroundType','LoseDiff','etbTotalAgility','innerWidth','isSideView','ImageGapDistance','Window_Base_makeAdditionalSkillCostText','Game_Battler_useItem','BattleManager_endAllBattlersTurn','blt','Game_BattlerBase_updateBuffTurns','prototype','Game_BattlerBase_hide','drawActionsRemaining','processTouch','startInput','VisuMZ_3_BattleAI\x20needs\x20to\x20be\x20updated\x20','enemies','_surprise','DrawHorz','currentAction','isTriggered','makeAdditionalCostTextETB','battleEnd','BattleManager_isTeamBased','visible','BattleManager_forceAction','screenX','BattleManager_isTpb','endTurnETB','canActETB','getMaxActionsETB','ScreenBufferY','SystemActionCountVisibility','HideActionPointCost','cursorPagedown','resetTurnCountETB','ActionPointTraitPlus','TeamShiftWait','width','call','_etbTroopActionCountWindow','Game_Battler_turnCount','return\x200','waitCount','resetFontSettings','changeClass','average\x20agi','passTurnETB','RevivalAct','addLoadListener','total\x20agi','clear','calculateTotalActionsETB','recalculateActionsETB','drawImage','invokeCounterAttack','etbSwitchActorDirection','create','drawPicture','speed','etbLowestAgility','_actionBattlers','maxCols','ARRAYNUM','updateBuffTurns','BattleManager_startTurn','ActionsRemainingOffsetX','etbHighestAgility','VisuMZ_1_ItemsEquipsCore','TroopTeamShiftFmt','startActorInput','Game_Enemy_transform','_ETB_MIN_ACTIONS','_etbActionsMax','clearStates','Window_Base_drawItemNumber','updatePosition','AllowOverflow','CostPosition','etbActionPointsAbbr','ImageSize','setMaxActionsETB','_partyCommandWindow','addChildAt','canInput','Game_Battler_addBuff','etbActionCount','startTurn','skillCostSeparator','LogWindowTopOffsetY','windowRect','5097832uoDmCw','highest\x20agi','Game_Unit_onBattleStart','_ETB_GUARD_PASS','_inputting','turnCount','hitIndex','performCollapse','finishActorInput','exit','imageSmoothingEnabled','_ETB_FREE_CHANGE','canMove','createAllWindows','initialize','removeActionBattlersETB','_ETB_ACTION_OVERFLOW','ARRAYSTRUCT','Window_Help_setItem','Game_BattlerBase_clearStates','loseCurrentActionsETB','ARRAYSTR','filter','VisuMZ_0_CoreEngine','onBattleStart','isETB','trim','BattleManager_startBattle','agi','ActionCountFull','Visible','isOpen','EnemyActionsIcon','DefaultCostItem','Current','selectNextActorETB','BattleManager_endAction','getCurrentActionsETB','selectNextCommand','%1ActionPicture','updatePadding','initMembersETB','ARRAYFUNC','Window_Selectable_cursorLeft','_ETB_COST_SHOW_1','ActionPointCost','startBattle','includes','_etbLastIndex','repositionLogWindowETB','setBattleSystem','Nothing','Window_Selectable_cursorPagedown','increaseTurnETB','KeepPrevActor','etb%1ActionsIcon','transform','BattleManager_endTurn','setCurrentActionsETB','Mechanics','_inBattle','isActor','RegExp','processTurn','floor','commandCancel','etbPartyTeamShift','_ETB_COST_SHOW_ATTACK','_ETB_ACTION_LAST','parameters','onTurnEnd','battleMembers','cursorLeft','_ETB_RECALC_ADD_DIFF','random','gainCurrentActionsETB','cursorRight','canDrawActionsRemaining','Show_0_Action_Cost','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','allMembers'];_0x32c3=function(){return _0x350682;};return _0x32c3();}var label=_0x221610(0x26c),tier=tier||0x0,dependencies=[_0x221610(0x153),'VisuMZ_1_BattleCore',_0x221610(0x125),'VisuMZ_1_SkillsStatesCore'],pluginData=$plugins[_0x221610(0x152)](function(_0x12d6cd){const _0x3dca73=_0x221610;return _0x12d6cd[_0x3dca73(0x1c1)]&&_0x12d6cd['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x221610(0x1d4)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x221610(0x1b2)]=function(_0x42410b,_0x132e40){const _0x57a5b9=_0x221610;for(const _0x175791 in _0x132e40){if(_0x175791[_0x57a5b9(0x212)](/(.*):(.*)/i)){const _0x27b89a=String(RegExp['$1']),_0x3b0912=String(RegExp['$2'])[_0x57a5b9(0x1bd)]()['trim']();let _0x2c0241,_0x201f90,_0x36c313;switch(_0x3b0912){case _0x57a5b9(0x256):_0x2c0241=_0x132e40[_0x175791]!==''?Number(_0x132e40[_0x175791]):0x0;break;case _0x57a5b9(0x120):_0x201f90=_0x132e40[_0x175791]!==''?JSON[_0x57a5b9(0x1fe)](_0x132e40[_0x175791]):[],_0x2c0241=_0x201f90[_0x57a5b9(0x1ab)](_0x2f547f=>Number(_0x2f547f));break;case'EVAL':_0x2c0241=_0x132e40[_0x175791]!==''?eval(_0x132e40[_0x175791]):null;break;case _0x57a5b9(0x232):_0x201f90=_0x132e40[_0x175791]!==''?JSON[_0x57a5b9(0x1fe)](_0x132e40[_0x175791]):[],_0x2c0241=_0x201f90[_0x57a5b9(0x1ab)](_0x27e3d5=>eval(_0x27e3d5));break;case _0x57a5b9(0x244):_0x2c0241=_0x132e40[_0x175791]!==''?JSON['parse'](_0x132e40[_0x175791]):'';break;case'ARRAYJSON':_0x201f90=_0x132e40[_0x175791]!==''?JSON['parse'](_0x132e40[_0x175791]):[],_0x2c0241=_0x201f90['map'](_0x1d1b79=>JSON['parse'](_0x1d1b79));break;case'FUNC':_0x2c0241=_0x132e40[_0x175791]!==''?new Function(JSON[_0x57a5b9(0x1fe)](_0x132e40[_0x175791])):new Function(_0x57a5b9(0x2cf));break;case _0x57a5b9(0x166):_0x201f90=_0x132e40[_0x175791]!==''?JSON[_0x57a5b9(0x1fe)](_0x132e40[_0x175791]):[],_0x2c0241=_0x201f90[_0x57a5b9(0x1ab)](_0xe5325=>new Function(JSON[_0x57a5b9(0x1fe)](_0xe5325)));break;case'STR':_0x2c0241=_0x132e40[_0x175791]!==''?String(_0x132e40[_0x175791]):'';break;case _0x57a5b9(0x151):_0x201f90=_0x132e40[_0x175791]!==''?JSON[_0x57a5b9(0x1fe)](_0x132e40[_0x175791]):[],_0x2c0241=_0x201f90[_0x57a5b9(0x1ab)](_0x15fab9=>String(_0x15fab9));break;case'STRUCT':_0x36c313=_0x132e40[_0x175791]!==''?JSON[_0x57a5b9(0x1fe)](_0x132e40[_0x175791]):{},_0x2c0241=VisuMZ[_0x57a5b9(0x1b2)]({},_0x36c313);break;case _0x57a5b9(0x14d):_0x201f90=_0x132e40[_0x175791]!==''?JSON[_0x57a5b9(0x1fe)](_0x132e40[_0x175791]):[],_0x2c0241=_0x201f90['map'](_0x592f67=>VisuMZ[_0x57a5b9(0x1b2)]({},JSON['parse'](_0x592f67)));break;default:continue;}_0x42410b[_0x27b89a]=_0x2c0241;}}return _0x42410b;},(_0x45e23e=>{const _0x5acefa=_0x221610,_0x24d3a2=_0x45e23e[_0x5acefa(0x298)];for(const _0x11d100 of dependencies){if(!Imported[_0x11d100]){alert(_0x5acefa(0x18b)[_0x5acefa(0x1dc)](_0x24d3a2,_0x11d100)),SceneManager[_0x5acefa(0x145)]();break;}}const _0x4fef91=_0x45e23e['description'];if(_0x4fef91[_0x5acefa(0x212)](/\[Version[ ](.*?)\]/i)){const _0xd2e22c=Number(RegExp['$1']);_0xd2e22c!==VisuMZ[label]['version']&&(alert(_0x5acefa(0x286)[_0x5acefa(0x1dc)](_0x24d3a2,_0xd2e22c)),SceneManager['exit']());}if(_0x4fef91[_0x5acefa(0x212)](/\[Tier[ ](\d+)\]/i)){const _0x112416=Number(RegExp['$1']);_0x112416<tier?(alert(_0x5acefa(0x19f)[_0x5acefa(0x1dc)](_0x24d3a2,_0x112416,tier)),SceneManager[_0x5acefa(0x145)]()):tier=Math[_0x5acefa(0x215)](_0x112416,tier);}VisuMZ[_0x5acefa(0x1b2)](VisuMZ[label][_0x5acefa(0x1d4)],_0x45e23e[_0x5acefa(0x181)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x221610(0x298)],_0x221610(0x2c5),_0x4af79f=>{const _0x2cf6d7=_0x221610;VisuMZ[_0x2cf6d7(0x1b2)](_0x4af79f,_0x4af79f);const _0x160925=_0x4af79f[_0x2cf6d7(0x15a)];$gameSystem['setBattleSystemETBActionCountVisible'](_0x160925);}),VisuMZ[_0x221610(0x26c)][_0x221610(0x17a)]={'ActionPointCost':/<ETB (?:EP|ACTION|ENERGY) COST:[ ](\d+)>/i,'HideActionPointCost':/<ETB HIDE (?:EP|ACTION|ENERGY) COST>/i,'ShowActionPointCost':/<ETB SHOW (?:EP|ACTION|ENERGY) COST>/i,'PassTurn':/<ETB PASS TURN>/i,'ActionPointTraitPlus':/<ETB (?:EP|ACTION|ACTIONS|ENERGY):[ ]([\+\-]\d+)>/i},DataManager[_0x221610(0x267)]=function(_0x2c40a1){const _0x49ce7b=_0x221610;if(!_0x2c40a1)return 0x0;const _0x886ca5=VisuMZ[_0x49ce7b(0x26c)][_0x49ce7b(0x1d4)][_0x49ce7b(0x177)],_0x40fe3e=VisuMZ['BattleSystemETB'][_0x49ce7b(0x17a)],_0x185bb1=_0x2c40a1[_0x49ce7b(0x196)];if(_0x185bb1[_0x49ce7b(0x212)](_0x40fe3e[_0x49ce7b(0x169)]))return Number(RegExp['$1']);else{if(DataManager['isSkill'](_0x2c40a1))return _0x886ca5[_0x49ce7b(0x1b0)];else return DataManager[_0x49ce7b(0x22b)](_0x2c40a1)?_0x886ca5[_0x49ce7b(0x15d)]:0x0;}},ImageManager[_0x221610(0x254)]=VisuMZ['BattleSystemETB']['Settings']['General']['ActorActionsIcon'],ImageManager[_0x221610(0x190)]=VisuMZ[_0x221610(0x26c)]['Settings'][_0x221610(0x231)][_0x221610(0x15c)],ImageManager['etbEmptyActionsIcon']=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)][_0x221610(0x231)]['EmptyActionsIcon'],TextManager['etbActionPointsFull']=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)][_0x221610(0x231)][_0x221610(0x159)],TextManager[_0x221610(0x130)]=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)]['General']['ActionCountAbbr'],TextManager['etbCostFormat']=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)][_0x221610(0x231)][_0x221610(0x237)],TextManager['etbPartyTeamShift']=VisuMZ['BattleSystemETB'][_0x221610(0x1d4)][_0x221610(0x231)][_0x221610(0x1d6)],TextManager[_0x221610(0x1df)]=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)][_0x221610(0x231)][_0x221610(0x126)],SceneManager[_0x221610(0x1f2)]=function(){const _0x126899=_0x221610;return this[_0x126899(0x276)]&&this[_0x126899(0x276)]['constructor']===Scene_Battle;},BattleManager[_0x221610(0x147)]=!![],BattleManager['_ETB_KEEP_PREV_ACTOR']=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)]['Mechanics'][_0x221610(0x172)],BattleManager[_0x221610(0x1a9)]=![],BattleManager['_ETB_GUARD_PASS']=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)][_0x221610(0x177)]['GuardPass'],BattleManager[_0x221610(0x185)]=VisuMZ[_0x221610(0x26c)]['Settings'][_0x221610(0x177)]['GainDiff'],BattleManager[_0x221610(0x217)]=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)][_0x221610(0x177)][_0x221610(0x2a5)],BattleManager[_0x221610(0x247)]=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)][_0x221610(0x177)]['NeutralAdvantage'],BattleManager[_0x221610(0x1e3)]=VisuMZ['BattleSystemETB']['Settings'][_0x221610(0x231)][_0x221610(0x2ca)],BattleManager[_0x221610(0x1d9)]=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)]['Mechanics'][_0x221610(0x213)],VisuMZ[_0x221610(0x26c)][_0x221610(0x1a0)]=BattleManager[_0x221610(0x233)],BattleManager[_0x221610(0x233)]=function(){const _0x2f3caa=_0x221610;if(this[_0x2f3caa(0x155)]())return'ETB';return VisuMZ[_0x2f3caa(0x26c)][_0x2f3caa(0x1a0)][_0x2f3caa(0x2cc)](this);},BattleManager[_0x221610(0x155)]=function(){const _0xfdd10c=_0x221610;return $gameSystem['getBattleSystem']()===_0xfdd10c(0x19e);},VisuMZ['BattleSystemETB'][_0x221610(0x2c0)]=BattleManager[_0x221610(0x1a2)],BattleManager[_0x221610(0x1a2)]=function(){const _0x194197=_0x221610;if(this[_0x194197(0x155)]())return![];return VisuMZ[_0x194197(0x26c)][_0x194197(0x2c0)][_0x194197(0x2cc)](this);},VisuMZ[_0x221610(0x26c)][_0x221610(0x2a3)]=BattleManager[_0x221610(0x296)],BattleManager['isActiveTpb']=function(){const _0x4bb6de=_0x221610;if(this['isETB']())return![];return VisuMZ[_0x4bb6de(0x26c)]['BattleManager_isActiveTpb']['call'](this);},VisuMZ[_0x221610(0x26c)][_0x221610(0x206)]=BattleManager[_0x221610(0x28e)],BattleManager[_0x221610(0x28e)]=function(){const _0x163695=_0x221610;if(this[_0x163695(0x155)]())return!![];return VisuMZ['BattleSystemETB'][_0x163695(0x206)][_0x163695(0x2cc)](this);},VisuMZ[_0x221610(0x26c)]['BattleManager_isTeamBased']=BattleManager[_0x221610(0x274)],BattleManager['isTeamBased']=function(){const _0x5b153d=_0x221610;if(this[_0x5b153d(0x155)]())return!![];return VisuMZ[_0x5b153d(0x26c)][_0x5b153d(0x2bc)][_0x5b153d(0x2cc)](this);},VisuMZ['BattleSystemETB'][_0x221610(0x1f1)]=BattleManager[_0x221610(0x2b3)],BattleManager[_0x221610(0x2b3)]=function(){const _0x9dde21=_0x221610;if(this['isETB']())this[_0x9dde21(0x2b6)]=![];VisuMZ['BattleSystemETB']['BattleManager_startInput'][_0x9dde21(0x2cc)](this);if(this[_0x9dde21(0x155)]()&&$gameParty[_0x9dde21(0x135)]())this[_0x9dde21(0x1e4)]();},BattleManager['startInputETB']=function(){const _0x5a2530=_0x221610;this[_0x5a2530(0x138)]();},VisuMZ['BattleSystemETB'][_0x221610(0x21d)]=BattleManager['processTurn'],BattleManager[_0x221610(0x17b)]=function(){const _0x48471a=_0x221610;this['isETB']()?this['processTurnETB']():VisuMZ[_0x48471a(0x26c)][_0x48471a(0x21d)][_0x48471a(0x2cc)](this);},BattleManager[_0x221610(0x22d)]=function(){const _0x436d4d=_0x221610,_0x5d5093=this[_0x436d4d(0x25a)];if(_0x5d5093&&!_0x5d5093[_0x436d4d(0x1c7)]()['canActETB']())this[_0x436d4d(0x248)](),this[_0x436d4d(0x25a)]=null,this[_0x436d4d(0x25f)](![]);else{if(_0x5d5093&&_0x5d5093[_0x436d4d(0x179)]()&&_0x5d5093['canInput']()){const _0x3914db=_0x5d5093['currentAction']();if(!_0x3914db)VisuMZ[_0x436d4d(0x26c)][_0x436d4d(0x21d)][_0x436d4d(0x2cc)](this);else _0x3914db[_0x436d4d(0x1b8)]?VisuMZ[_0x436d4d(0x26c)][_0x436d4d(0x21d)][_0x436d4d(0x2cc)](this):(this[_0x436d4d(0x242)]=_0x5d5093,this['startActorInput']());}else VisuMZ[_0x436d4d(0x26c)][_0x436d4d(0x21d)]['call'](this);}},VisuMZ[_0x221610(0x26c)][_0x221610(0x24f)]=BattleManager[_0x221610(0x144)],BattleManager['finishActorInput']=function(){const _0x1deae8=_0x221610;this['isETB']()?VisuMZ[_0x1deae8(0x26c)][_0x1deae8(0x21d)][_0x1deae8(0x2cc)](this):VisuMZ['BattleSystemETB']['BattleManager_finishActorInput'][_0x1deae8(0x2cc)](this);},VisuMZ['BattleSystemETB']['BattleManager_selectNextActor']=BattleManager[_0x221610(0x20a)],BattleManager[_0x221610(0x20a)]=function(){const _0x10254e=_0x221610;this[_0x10254e(0x155)]()?this[_0x10254e(0x15f)]():VisuMZ[_0x10254e(0x26c)][_0x10254e(0x23e)][_0x10254e(0x2cc)](this);},BattleManager['selectNextActorETB']=function(){const _0x552f75=_0x221610;this[_0x552f75(0x242)]=null,this[_0x552f75(0x140)]=![];},VisuMZ[_0x221610(0x26c)]['BattleManager_endAction']=BattleManager[_0x221610(0x248)],BattleManager['endAction']=function(){const _0x273bf1=_0x221610,_0x23dd5c=this[_0x273bf1(0x25a)];VisuMZ[_0x273bf1(0x26c)][_0x273bf1(0x160)][_0x273bf1(0x2cc)](this),this[_0x273bf1(0x2a1)](_0x23dd5c);},BattleManager[_0x221610(0x2a1)]=function(_0x226c99){const _0x439daf=_0x221610;if(!this[_0x439daf(0x155)]())return;if(_0x226c99){const _0x44c156=_0x226c99['_actions'][_0x439daf(0x152)](_0x1742bf=>_0x1742bf[_0x439daf(0x1b8)]);_0x226c99[_0x439daf(0x294)]();if(_0x44c156){let _0x4a835b=_0x44c156[_0x439daf(0x1f4)];while(_0x4a835b--){_0x226c99[_0x439daf(0x20d)][_0x439daf(0x246)]();}_0x226c99[_0x439daf(0x20d)]=_0x44c156[_0x439daf(0x205)](_0x226c99[_0x439daf(0x20d)]);}}if(this[_0x439daf(0x234)][_0x439daf(0x1f4)]>0x0)this[_0x439daf(0x25a)]&&(!this[_0x439daf(0x11e)]['includes'](this[_0x439daf(0x25a)])&&this[_0x439daf(0x11e)][_0x439daf(0x194)](this[_0x439daf(0x25a)])),this[_0x439daf(0x25a)]=this[_0x439daf(0x218)]();else this['keepPrevSubjectETB'](_0x226c99)&&(this[_0x439daf(0x25a)]=_0x226c99);_0x226c99['friendsUnit']()[_0x439daf(0x229)](_0x226c99);},BattleManager[_0x221610(0x241)]=function(_0x3cce03){const _0x56d8a8=_0x221610;if(!_0x3cce03)return![];if(!_0x3cce03[_0x56d8a8(0x179)]())return![];if(!_0x3cce03['canMove']())return![];if(!_0x3cce03[_0x56d8a8(0x135)]())return![];if(_0x3cce03[_0x56d8a8(0x27d)]())return![];return BattleManager[_0x56d8a8(0x147)]&&BattleManager[_0x56d8a8(0x1fd)];},VisuMZ[_0x221610(0x26c)]['BattleManager_startBattle']=BattleManager[_0x221610(0x16a)],BattleManager[_0x221610(0x16a)]=function(){const _0x1f3954=_0x221610;VisuMZ[_0x1f3954(0x26c)][_0x1f3954(0x157)][_0x1f3954(0x2cc)](this),this[_0x1f3954(0x20c)]();},BattleManager[_0x221610(0x20c)]=function(){const _0x49ad54=_0x221610;if(!this[_0x49ad54(0x155)]())return;if(this[_0x49ad54(0x214)])this['_etbTurnAdvantageUnit']=_0x49ad54(0x265);else this[_0x49ad54(0x2b6)]?this['_etbTurnAdvantageUnit']='enemies':this['_etbTurnAdvantageUnit']=BattleManager[_0x49ad54(0x247)];this[_0x49ad54(0x26d)]=this[_0x49ad54(0x26d)]||'random';let _0xba51e6=0x0,_0x173a1e=0x0;switch(this[_0x49ad54(0x26d)][_0x49ad54(0x28c)]()[_0x49ad54(0x156)]()){case _0x49ad54(0x186):let _0x36fed4=[_0x49ad54(0x265),'enemies'];this['_etbTurnAdvantageUnit']=_0x36fed4[Math[_0x49ad54(0x25b)](_0x36fed4[_0x49ad54(0x1f4)])];break;case _0x49ad54(0x193):this[_0x49ad54(0x26d)]=_0x49ad54(0x265);break;case'enemy':this['_etbTurnAdvantageUnit']=_0x49ad54(0x2b5);break;case _0x49ad54(0x1dd):_0xba51e6=$gameParty[_0x49ad54(0x11d)](),_0x173a1e=$gameTroop[_0x49ad54(0x11d)](),this[_0x49ad54(0x26d)]=_0xba51e6>=_0x173a1e?_0x49ad54(0x265):'enemies';break;case _0x49ad54(0x2d3):_0xba51e6=$gameParty[_0x49ad54(0x1b5)](),_0x173a1e=$gameTroop[_0x49ad54(0x1b5)](),this['_etbTurnAdvantageUnit']=_0xba51e6>=_0x173a1e?_0x49ad54(0x265):_0x49ad54(0x2b5);break;case _0x49ad54(0x13d):_0xba51e6=$gameParty[_0x49ad54(0x124)](),_0x173a1e=$gameTroop[_0x49ad54(0x124)](),this[_0x49ad54(0x26d)]=_0xba51e6>=_0x173a1e?_0x49ad54(0x265):'enemies';break;case _0x49ad54(0x2d7):_0xba51e6=$gameParty[_0x49ad54(0x2a6)](),_0x173a1e=$gameTroop['etbTotalAgility'](),this['_etbTurnAdvantageUnit']=_0xba51e6>=_0x173a1e?_0x49ad54(0x265):'enemies';break;}this[_0x49ad54(0x1a5)]=this['_etbTurnAdvantageUnit']===_0x49ad54(0x265)?$gameParty:$gameTroop,this[_0x49ad54(0x27f)]=this[_0x49ad54(0x26d)]===_0x49ad54(0x265)?$gameTroop:$gameParty,this['_etbTeamOdd'][_0x49ad54(0x115)](0x1),this[_0x49ad54(0x27f)]['calculateTotalActionsETB'](0x2),this[_0x49ad54(0x27f)][_0x49ad54(0x176)](this[_0x49ad54(0x27f)][_0x49ad54(0x2c3)]());},VisuMZ[_0x221610(0x26c)][_0x221610(0x27e)]=BattleManager['makeActionOrders'],BattleManager[_0x221610(0x1ac)]=function(){const _0x4f89ae=_0x221610;this[_0x4f89ae(0x155)]()?this[_0x4f89ae(0x21e)]():VisuMZ[_0x4f89ae(0x26c)][_0x4f89ae(0x27e)]['call'](this);},Game_Unit['prototype'][_0x221610(0x21e)]=function(){const _0x4373e3=_0x221610;this[_0x4373e3(0x1e1)](),this[_0x4373e3(0x115)](),this[_0x4373e3(0x1cf)]();},BattleManager['makeActionOrdersETB']=function(){const _0x2a7fd5=_0x221610;let _0x57a9f6=[],_0x279706=[],_0x47fe89=0x0;const _0x683010=$gameTroop['turnCount']();let _0x4301e8=_0x683010%0x2===0x0?this[_0x2a7fd5(0x27f)]:this['_etbTeamOdd'];_0x4301e8[_0x2a7fd5(0x21e)](),this[_0x2a7fd5(0x29a)]=_0x4301e8;const _0x337b28=VisuMZ[_0x2a7fd5(0x26c)][_0x2a7fd5(0x1d4)]['Mechanics'];if(_0x4301e8===$gameParty){const _0x420c54=_0x337b28[_0x2a7fd5(0x2d5)]?$gameParty[_0x2a7fd5(0x183)]():$gameParty['etbAliveMembers']();let _0x222379=_0x420c54[_0x2a7fd5(0x152)](_0x3ddad1=>_0x3ddad1[_0x2a7fd5(0x148)]()&&!_0x3ddad1['canInput']()),_0x1f61bd=_0x420c54[_0x2a7fd5(0x152)](_0x4899b5=>_0x4899b5[_0x2a7fd5(0x148)]()&&_0x4899b5[_0x2a7fd5(0x135)]());_0x57a9f6=_0x57a9f6[_0x2a7fd5(0x205)](_0x222379),_0x47fe89=Game_Unit['_ETB_MAX_ACTIONS'];while(_0x47fe89--){_0x57a9f6=_0x57a9f6['concat'](_0x1f61bd);}_0x47fe89=Game_Unit[_0x2a7fd5(0x288)]-0x1;while(_0x47fe89--){_0x57a9f6=_0x57a9f6[_0x2a7fd5(0x205)](_0x222379);}}if(_0x4301e8===$gameTroop){const _0x563184=_0x337b28[_0x2a7fd5(0x2d5)]?$gameTroop['members']():$gameTroop[_0x2a7fd5(0x1a8)]();let _0x1e1c77=_0x563184[_0x2a7fd5(0x152)](_0x1f1e01=>_0x1f1e01[_0x2a7fd5(0x148)]());$gameSystem[_0x2a7fd5(0x2a8)]()?_0x1e1c77['sort']((_0x1ffee2,_0x21198b)=>_0x21198b['screenX']()-_0x1ffee2[_0x2a7fd5(0x2bf)]()):_0x1e1c77[_0x2a7fd5(0x23f)]((_0x3db2d5,_0x5968ab)=>_0x3db2d5[_0x2a7fd5(0x2bf)]()-_0x5968ab[_0x2a7fd5(0x2bf)]());_0x47fe89=Game_Unit[_0x2a7fd5(0x288)];while(_0x47fe89--){_0x279706=_0x279706[_0x2a7fd5(0x205)](_0x1e1c77);}$gameTroop['makeActions']();}this[_0x2a7fd5(0x11e)]=_0x57a9f6['concat'](_0x279706);},BattleManager[_0x221610(0x14b)]=function(){const _0x257fba=_0x221610;if(!this['isETB']())return;this[_0x257fba(0x11e)]=this['_actionBattlers']||[],this[_0x257fba(0x11e)]=this['_actionBattlers']['filter'](_0x537d8a=>_0x537d8a[_0x257fba(0x148)]()&&!_0x537d8a[_0x257fba(0x27d)]());},VisuMZ['BattleSystemETB']['BattleManager_setup']=BattleManager['setup'],BattleManager[_0x221610(0x1d3)]=function(_0x30d7b2,_0x37d656,_0x50779c){const _0x4ac02a=_0x221610;VisuMZ[_0x4ac02a(0x26c)]['BattleManager_setup'][_0x4ac02a(0x2cc)](this,_0x30d7b2,_0x37d656,_0x50779c),this[_0x4ac02a(0x165)]();},BattleManager[_0x221610(0x165)]=function(){const _0x35e15b=_0x221610;if(!BattleManager[_0x35e15b(0x155)]())return;this[_0x35e15b(0x29a)]=undefined,$gameParty[_0x35e15b(0x1cf)](),$gameTroop[_0x35e15b(0x1cf)]();},VisuMZ[_0x221610(0x26c)][_0x221610(0x122)]=BattleManager[_0x221610(0x138)],BattleManager[_0x221610(0x138)]=function(){const _0x4734b6=_0x221610;this['startTurnETB'](),VisuMZ[_0x4734b6(0x26c)][_0x4734b6(0x122)]['call'](this),this['etbCreateTeamSwitchText']();},BattleManager[_0x221610(0x1cf)]=function(){const _0x236ba2=_0x221610;if(!BattleManager[_0x236ba2(0x155)]())return;$gameParty[_0x236ba2(0x1e1)](),$gameTroop[_0x236ba2(0x1e1)]();const _0xed23d=$gameTroop['turnCount']()+0x1;let _0x569829=_0xed23d%0x2===0x0?this[_0x236ba2(0x27f)]:this[_0x236ba2(0x1a5)],_0x3373af=_0xed23d%0x2===0x0?this[_0x236ba2(0x1a5)]:this[_0x236ba2(0x27f)];_0xed23d>0x1&&_0x3373af[_0x236ba2(0x24e)](),_0x569829['updateStateTurnsETB'](),_0x569829[_0x236ba2(0x1cf)]();},VisuMZ['BattleSystemETB'][_0x221610(0x175)]=BattleManager[_0x221610(0x220)],BattleManager[_0x221610(0x220)]=function(){const _0x3190c8=_0x221610;VisuMZ[_0x3190c8(0x26c)]['BattleManager_endTurn'][_0x3190c8(0x2cc)](this),this[_0x3190c8(0x2c1)]();},BattleManager[_0x221610(0x2c1)]=function(){const _0x26f0ed=_0x221610;if(!BattleManager[_0x26f0ed(0x155)]())return;},VisuMZ[_0x221610(0x26c)][_0x221610(0x2ac)]=BattleManager['endAllBattlersTurn'],BattleManager[_0x221610(0x240)]=function(){const _0x88b11=_0x221610;if(this[_0x88b11(0x155)]())return;VisuMZ['BattleSystemETB'][_0x88b11(0x2ac)]['call'](this);},BattleManager[_0x221610(0x26f)]=function(){const _0x1b755b=_0x221610;if(!BattleManager[_0x1b755b(0x155)]())return;let _0x1cbb1d='';if(this[_0x1b755b(0x29a)]===$gameParty){let _0xf02ca1=$gameParty['name']();_0x1cbb1d=TextManager[_0x1b755b(0x17e)][_0x1b755b(0x1dc)](_0xf02ca1);}else _0x1cbb1d=TextManager['etbTroopTeamShift'];if(_0x1cbb1d!==''){this['_logWindow'][_0x1b755b(0x1f5)]('addText',_0x1cbb1d);const _0x43ceb7=BattleManager[_0x1b755b(0x1e3)];this[_0x1b755b(0x263)]['push'](_0x1b755b(0x2d0),_0x43ceb7),this['_logWindow'][_0x1b755b(0x1f5)](_0x1b755b(0x2d8));}},VisuMZ[_0x221610(0x26c)][_0x221610(0x26b)]=Game_Battler['prototype']['onBattleStart'],Game_Battler[_0x221610(0x2af)]['onBattleStart']=function(_0x6462fb){const _0x40f216=_0x221610;VisuMZ[_0x40f216(0x26c)]['Game_Battler_onBattleStart']['call'](this,_0x6462fb),this[_0x40f216(0x2c8)]();},Game_Battler[_0x221610(0x2af)][_0x221610(0x2c8)]=function(){const _0x1992cd=_0x221610;if(!BattleManager[_0x1992cd(0x155)]())return;this['_turnCountETB']=0x0;},VisuMZ[_0x221610(0x26c)][_0x221610(0x2ce)]=Game_Battler['prototype'][_0x221610(0x141)],Game_Battler[_0x221610(0x2af)][_0x221610(0x141)]=function(){const _0x274771=_0x221610;return BattleManager['isETB']()?this[_0x274771(0x21a)]||0x0:VisuMZ[_0x274771(0x26c)][_0x274771(0x2ce)][_0x274771(0x2cc)](this);},VisuMZ['BattleSystemETB'][_0x221610(0x19a)]=Game_Troop[_0x221610(0x2af)]['increaseTurn'],Game_Troop[_0x221610(0x2af)][_0x221610(0x210)]=function(){const _0x5e008e=_0x221610;VisuMZ['BattleSystemETB'][_0x5e008e(0x19a)][_0x5e008e(0x2cc)](this),this[_0x5e008e(0x171)]();},Game_Troop[_0x221610(0x2af)][_0x221610(0x171)]=function(){const _0x2b072a=_0x221610;if(!BattleManager[_0x2b072a(0x155)]())return;if(Imported['VisuMZ_3_BattleAI']&&VisuMZ['BattleAI'][_0x2b072a(0x1b3)]<1.22){let _0x25eedf='';_0x25eedf+=_0x2b072a(0x2b4),_0x25eedf+='in\x20order\x20for\x20VisuMZ_2_BattleSystemETB\x20to\x20work.',alert(_0x25eedf),SceneManager['exit']();}let _0xd38a96=[];BattleManager['_etbCurrentUnit']===$gameParty?_0xd38a96=$gameParty[_0x2b072a(0x18c)]():_0xd38a96=$gameTroop[_0x2b072a(0x192)]();for(const _0x122a13 of _0xd38a96){_0x122a13['_turnCountETB']=_0x122a13[_0x2b072a(0x21a)]||0x0,_0x122a13[_0x2b072a(0x21a)]++;}},VisuMZ['BattleSystemETB']['BattleManager_invokeCounterAttack']=BattleManager[_0x221610(0x118)],BattleManager[_0x221610(0x118)]=function(_0x4790ab,_0x2e8cce){const _0x3c83fd=_0x221610,_0x49cd47=BattleManager[_0x3c83fd(0x155)]();if(_0x49cd47)$gameSystem['setBattleSystem'](_0x3c83fd(0x1e2));VisuMZ[_0x3c83fd(0x26c)]['BattleManager_invokeCounterAttack'][_0x3c83fd(0x2cc)](this,_0x4790ab,_0x2e8cce);if(_0x49cd47)$gameSystem[_0x3c83fd(0x16e)](_0x3c83fd(0x19e));},VisuMZ['BattleSystemETB']['Game_System_initialize']=Game_System[_0x221610(0x2af)][_0x221610(0x14a)],Game_System[_0x221610(0x2af)][_0x221610(0x14a)]=function(){const _0x36ec00=_0x221610;VisuMZ[_0x36ec00(0x26c)]['Game_System_initialize'][_0x36ec00(0x2cc)](this),this[_0x36ec00(0x268)]();},Game_System[_0x221610(0x2af)]['initBattleSystemETB']=function(){const _0x53f22a=_0x221610;this[_0x53f22a(0x29e)]=!![];},Game_System[_0x221610(0x2af)][_0x221610(0x23d)]=function(){const _0x3f7af3=_0x221610;if(BattleManager['_phase']===_0x3f7af3(0x2bb))return![];return this[_0x3f7af3(0x29e)]===undefined&&this[_0x3f7af3(0x268)](),this[_0x3f7af3(0x29e)];},Game_System[_0x221610(0x2af)]['setBattleSystemETBActionCountVisible']=function(_0x4f62ba){const _0x184012=_0x221610;this[_0x184012(0x29e)]===undefined&&this[_0x184012(0x268)](),this['_etbActionCountVisible']=_0x4f62ba;},VisuMZ[_0x221610(0x26c)]['Game_Action_speed']=Game_Action[_0x221610(0x2af)][_0x221610(0x11c)],Game_Action[_0x221610(0x2af)]['speed']=function(){const _0x2bbec8=_0x221610;return BattleManager[_0x2bbec8(0x155)]()?0x0:VisuMZ[_0x2bbec8(0x26c)][_0x2bbec8(0x230)][_0x2bbec8(0x2cc)](this);},VisuMZ[_0x221610(0x26c)][_0x221610(0x1da)]=Game_Action[_0x221610(0x2af)]['applyGlobal'],Game_Action[_0x221610(0x2af)][_0x221610(0x219)]=function(){const _0x4837ab=_0x221610;VisuMZ[_0x4837ab(0x26c)][_0x4837ab(0x1da)][_0x4837ab(0x2cc)](this),this[_0x4837ab(0x1ed)]();},Game_Action['prototype']['applyGlobalETB']=function(){const _0x5ca4b5=_0x221610;if(!BattleManager[_0x5ca4b5(0x155)]())return;if(!this['subject']())return;if(!this[_0x5ca4b5(0x198)]())return;this[_0x5ca4b5(0x1aa)]()&&this['item']()['id']===this[_0x5ca4b5(0x245)]()['guardSkillId']()&&(BattleManager[_0x5ca4b5(0x13f)]&&this[_0x5ca4b5(0x245)]()[_0x5ca4b5(0x2d4)]());const _0x1c86c4=VisuMZ[_0x5ca4b5(0x26c)]['RegExp'],_0x20289f=this[_0x5ca4b5(0x198)]()['note'];_0x20289f[_0x5ca4b5(0x212)](_0x1c86c4['PassTurn'])&&this[_0x5ca4b5(0x245)]()['passTurnETB']();},VisuMZ['BattleSystemETB'][_0x221610(0x2b0)]=Game_BattlerBase[_0x221610(0x2af)][_0x221610(0x295)],Game_BattlerBase[_0x221610(0x2af)][_0x221610(0x295)]=function(){const _0x5d6b08=_0x221610;VisuMZ[_0x5d6b08(0x26c)][_0x5d6b08(0x2b0)][_0x5d6b08(0x2cc)](this),BattleManager[_0x5d6b08(0x14b)](),this[_0x5d6b08(0x1c7)]()[_0x5d6b08(0x116)]();},VisuMZ[_0x221610(0x26c)]['Game_BattlerBase_appear']=Game_BattlerBase[_0x221610(0x2af)][_0x221610(0x287)],Game_BattlerBase['prototype'][_0x221610(0x287)]=function(){const _0x3d6e57=_0x221610;VisuMZ[_0x3d6e57(0x26c)][_0x3d6e57(0x1ea)][_0x3d6e57(0x2cc)](this),BattleManager[_0x3d6e57(0x14b)](),this[_0x3d6e57(0x1c7)]()[_0x3d6e57(0x116)]();},VisuMZ['BattleSystemETB'][_0x221610(0x1e0)]=Game_Battler[_0x221610(0x2af)][_0x221610(0x143)],Game_Battler['prototype']['performCollapse']=function(){const _0x3cfe92=_0x221610;VisuMZ['BattleSystemETB']['Game_Battler_performCollapse'][_0x3cfe92(0x2cc)](this),BattleManager[_0x3cfe92(0x14b)](),this[_0x3cfe92(0x1c7)]()['recalculateActionsETB']();},Game_BattlerBase['prototype'][_0x221610(0x2d4)]=function(){const _0x2e1a2f=_0x221610;this[_0x2e1a2f(0x270)]=!![],BattleManager[_0x2e1a2f(0x14b)]();},Game_BattlerBase[_0x221610(0x2af)][_0x221610(0x27d)]=function(){const _0x2d1702=_0x221610;return!!this[_0x2d1702(0x270)];},Game_BattlerBase[_0x221610(0x1f6)]=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)][_0x221610(0x177)][_0x221610(0x264)],Game_BattlerBase[_0x221610(0x281)]=VisuMZ[_0x221610(0x26c)]['Settings'][_0x221610(0x177)][_0x221610(0x19b)],Game_BattlerBase[_0x221610(0x2af)]['etbActionCount']=function(){const _0x2a166a=_0x221610;let _0x176e07=0x0;if(this[_0x2a166a(0x282)]===undefined)this['clearBuffs']();const _0x1061b7=this['_buffs'][0x6]||0x0;if(_0x1061b7>0x0&&Game_BattlerBase[_0x2a166a(0x1f6)])_0x176e07+=_0x1061b7;else _0x1061b7<0x0&&Game_BattlerBase[_0x2a166a(0x281)]&&(_0x176e07+=_0x1061b7);const _0x188b62=VisuMZ['BattleSystemETB']['RegExp'],_0x5d6425=this[_0x2a166a(0x275)]();for(const _0x4f1d9c of _0x5d6425){if(!_0x4f1d9c)continue;const _0xe4fbf1=_0x4f1d9c['note'];_0xe4fbf1[_0x2a166a(0x212)](_0x188b62[_0x2a166a(0x2c9)])&&(_0x176e07+=Number(RegExp['$1']));}return Math['max'](0x0,_0x176e07);},VisuMZ[_0x221610(0x26c)][_0x221610(0x14f)]=Game_BattlerBase['prototype'][_0x221610(0x12b)],Game_BattlerBase[_0x221610(0x2af)]['clearStates']=function(){const _0x22ab2c=_0x221610;VisuMZ[_0x22ab2c(0x26c)]['Game_BattlerBase_clearStates'][_0x22ab2c(0x2cc)](this),this[_0x22ab2c(0x1c7)]()['recalculateActionsETB']();},VisuMZ['BattleSystemETB'][_0x221610(0x1d7)]=Game_BattlerBase[_0x221610(0x2af)][_0x221610(0x223)],Game_BattlerBase[_0x221610(0x2af)][_0x221610(0x223)]=function(_0x591027){const _0x2a4b20=_0x221610;if(SceneManager[_0x2a4b20(0x1f2)]()&&BattleManager[_0x2a4b20(0x155)]()){const _0x1b87e4=DataManager[_0x2a4b20(0x267)](_0x591027);if(_0x1b87e4>this[_0x2a4b20(0x1c7)]()[_0x2a4b20(0x161)]())return![];}return VisuMZ[_0x2a4b20(0x26c)][_0x2a4b20(0x1d7)][_0x2a4b20(0x2cc)](this,_0x591027);},VisuMZ[_0x221610(0x26c)][_0x221610(0x2ab)]=Game_Battler[_0x221610(0x2af)][_0x221610(0x29c)],Game_Battler[_0x221610(0x2af)][_0x221610(0x29c)]=function(_0x3f3095){const _0x40f53e=_0x221610;VisuMZ[_0x40f53e(0x26c)]['Game_Battler_useItem'][_0x40f53e(0x2cc)](this,_0x3f3095),this[_0x40f53e(0x24c)](_0x3f3095);},Game_Battler['prototype']['payActionCostETB']=function(_0x300a90){const _0x154142=_0x221610;if(!_0x300a90)return;if(!SceneManager[_0x154142(0x1f2)]())return;if(!BattleManager[_0x154142(0x155)]())return;const _0x372e63=BattleManager[_0x154142(0x1bc)];if(_0x372e63&&_0x372e63['_forceAction'])return;const _0x5d85dc=DataManager[_0x154142(0x267)](_0x300a90);this[_0x154142(0x1c7)]()['reduceActionsETB'](_0x5d85dc);},VisuMZ[_0x221610(0x26c)][_0x221610(0x1c0)]=Game_Battler[_0x221610(0x2af)][_0x221610(0x182)],Game_Battler[_0x221610(0x2af)][_0x221610(0x182)]=function(){const _0x4ad656=_0x221610;this[_0x4ad656(0x27a)]=BattleManager[_0x4ad656(0x155)]()&&BattleManager['_ETB_STATE_BUFF_TURN_UPDATES_ONLY_ON_OPPONENT_TURNS'],VisuMZ['BattleSystemETB'][_0x4ad656(0x1c0)][_0x4ad656(0x2cc)](this),delete this['_bypassStateTurnUpdatesETB'];},VisuMZ[_0x221610(0x26c)][_0x221610(0x28a)]=Game_BattlerBase[_0x221610(0x2af)][_0x221610(0x262)],Game_BattlerBase[_0x221610(0x2af)]['updateStateTurns']=function(){const _0x1229f0=_0x221610;if(this[_0x1229f0(0x27a)])return;VisuMZ[_0x1229f0(0x26c)][_0x1229f0(0x28a)][_0x1229f0(0x2cc)](this);},VisuMZ[_0x221610(0x26c)][_0x221610(0x2ae)]=Game_BattlerBase[_0x221610(0x2af)]['updateBuffTurns'],Game_BattlerBase[_0x221610(0x2af)][_0x221610(0x121)]=function(){const _0x158610=_0x221610;if(this['_bypassStateTurnUpdatesETB'])return;VisuMZ[_0x158610(0x26c)][_0x158610(0x2ae)][_0x158610(0x2cc)](this);},VisuMZ[_0x221610(0x26c)][_0x221610(0x252)]=Game_Battler[_0x221610(0x2af)][_0x221610(0x19d)],Game_Battler['prototype'][_0x221610(0x19d)]=function(_0x2ad7b3){const _0x50708b=_0x221610;VisuMZ[_0x50708b(0x26c)][_0x50708b(0x252)]['call'](this,_0x2ad7b3),this[_0x50708b(0x1c7)]()[_0x50708b(0x116)]();},VisuMZ[_0x221610(0x26c)][_0x221610(0x250)]=Game_Battler[_0x221610(0x2af)][_0x221610(0x18d)],Game_Battler[_0x221610(0x2af)][_0x221610(0x18d)]=function(_0x3cf36f){const _0x2e9ec1=_0x221610,_0x23b131=this[_0x2e9ec1(0x1c6)]();VisuMZ[_0x2e9ec1(0x26c)]['Game_Battler_removeState']['call'](this,_0x3cf36f),BattleManager[_0x2e9ec1(0x155)]()&&_0x23b131&&this['isAlive']()&&this[_0x2e9ec1(0x297)](),this['friendsUnit']()[_0x2e9ec1(0x116)]();},Game_Battler[_0x221610(0x2af)][_0x221610(0x297)]=function(){const _0x1fb29f=_0x221610;if(!this['canMove']())return;if(!this[_0x1fb29f(0x135)]())return;this[_0x1fb29f(0x270)]=![];const _0xf067=$gameTroop[_0x1fb29f(0x141)]();let _0x2b758f=_0xf067%0x2===0x0?BattleManager['_etbTeamEven']:BattleManager['_etbTeamOdd'];if(_0x2b758f===this[_0x1fb29f(0x1c7)]()){const _0x39e0ef=BattleManager[_0x1fb29f(0x11e)];let _0x327b1e=Game_Unit[_0x1fb29f(0x288)];while(_0x327b1e--){_0x39e0ef[_0x1fb29f(0x1f5)](this);}}},VisuMZ['BattleSystemETB'][_0x221610(0x136)]=Game_Battler[_0x221610(0x2af)][_0x221610(0x291)],Game_Battler['prototype']['addBuff']=function(_0x2a573,_0x5dd9b4){const _0x407d97=_0x221610;VisuMZ[_0x407d97(0x26c)]['Game_Battler_addBuff'][_0x407d97(0x2cc)](this,_0x2a573,_0x5dd9b4),this[_0x407d97(0x1c7)]()[_0x407d97(0x116)]();},VisuMZ[_0x221610(0x26c)]['Game_Battler_addDebuff']=Game_Battler[_0x221610(0x2af)]['addDebuff'],Game_Battler['prototype'][_0x221610(0x1de)]=function(_0x4d2353,_0x2e80c0){const _0x3aac07=_0x221610;VisuMZ['BattleSystemETB']['Game_Battler_addDebuff'][_0x3aac07(0x2cc)](this,_0x4d2353,_0x2e80c0),this[_0x3aac07(0x1c7)]()['recalculateActionsETB']();},VisuMZ[_0x221610(0x26c)][_0x221610(0x1f0)]=Game_Battler[_0x221610(0x2af)][_0x221610(0x1d8)],Game_Battler[_0x221610(0x2af)][_0x221610(0x1d8)]=function(_0x41f1bf){const _0x35b966=_0x221610;VisuMZ[_0x35b966(0x26c)][_0x35b966(0x1f0)][_0x35b966(0x2cc)](this,_0x41f1bf),this[_0x35b966(0x1c7)]()['recalculateActionsETB']();},VisuMZ['BattleSystemETB'][_0x221610(0x22f)]=Game_Battler[_0x221610(0x2af)][_0x221610(0x260)],Game_Battler['prototype'][_0x221610(0x260)]=function(_0x56c71b,_0x2ac038){const _0xeb0480=_0x221610;BattleManager[_0xeb0480(0x155)]()?this[_0xeb0480(0x1b1)](_0x56c71b,_0x2ac038):VisuMZ[_0xeb0480(0x26c)]['Game_Battler_forceAction'][_0xeb0480(0x2cc)](this,_0x56c71b,_0x2ac038);},Game_Battler['prototype'][_0x221610(0x1b1)]=function(_0x2815a2,_0x787986){const _0x2cb74b=_0x221610,_0xfe5549=new Game_Action(this,!![]);_0xfe5549['setSkill'](_0x2815a2),_0xfe5549['_forceAction']=!![];if(_0x787986===-0x2)_0xfe5549[_0x2cb74b(0x273)](this[_0x2cb74b(0x1ff)]);else _0x787986===-0x1?_0xfe5549['decideRandomTarget']():_0xfe5549[_0x2cb74b(0x273)](_0x787986);this[_0x2cb74b(0x20d)][_0x2cb74b(0x194)](_0xfe5549);},VisuMZ[_0x221610(0x26c)][_0x221610(0x2be)]=BattleManager[_0x221610(0x260)],BattleManager[_0x221610(0x260)]=function(_0xfb5ba6){const _0x3e53d5=_0x221610;BattleManager[_0x3e53d5(0x155)]()?this[_0x3e53d5(0x1b1)](_0xfb5ba6):VisuMZ[_0x3e53d5(0x26c)][_0x3e53d5(0x2be)][_0x3e53d5(0x2cc)](this,_0xfb5ba6);},BattleManager[_0x221610(0x1b1)]=function(_0x2428a7){const _0x3e0032=_0x221610,_0x1124b6=JsonEx[_0x3e0032(0x1be)](_0x2428a7['currentAction']());this[_0x3e0032(0x234)][_0x3e0032(0x1f5)]([_0x2428a7,_0x1124b6]);},VisuMZ[_0x221610(0x26c)][_0x221610(0x1c3)]=Game_Actor[_0x221610(0x2af)]['selectNextCommand'],Game_Actor['prototype'][_0x221610(0x162)]=function(){const _0x5cb92e=_0x221610;if(BattleManager[_0x5cb92e(0x155)]()){if(this[_0x5cb92e(0x1b7)]())this[_0x5cb92e(0x1b7)]()['stepForward']();return![];}return VisuMZ[_0x5cb92e(0x26c)][_0x5cb92e(0x1c3)][_0x5cb92e(0x2cc)](this);},VisuMZ[_0x221610(0x26c)][_0x221610(0x1c2)]=Game_Actor[_0x221610(0x2af)]['changeEquip'],Game_Actor[_0x221610(0x2af)][_0x221610(0x251)]=function(_0x184c47,_0x15e267){const _0x5552c5=_0x221610;VisuMZ['BattleSystemETB'][_0x5552c5(0x1c2)]['call'](this,_0x184c47,_0x15e267),this['friendsUnit']()[_0x5552c5(0x116)]();},VisuMZ['BattleSystemETB']['Game_Actor_forceChangeEquip']=Game_Actor[_0x221610(0x2af)][_0x221610(0x23b)],Game_Actor[_0x221610(0x2af)]['forceChangeEquip']=function(_0x1fdfc4,_0xf42d38){const _0x4a05be=_0x221610;VisuMZ[_0x4a05be(0x26c)][_0x4a05be(0x226)][_0x4a05be(0x2cc)](this,_0x1fdfc4,_0xf42d38),this[_0x4a05be(0x1c7)]()[_0x4a05be(0x116)]();},VisuMZ[_0x221610(0x26c)][_0x221610(0x238)]=Game_Actor['prototype'][_0x221610(0x207)],Game_Actor[_0x221610(0x2af)][_0x221610(0x207)]=function(_0x2966ad,_0x514d42){const _0x59f194=_0x221610;VisuMZ[_0x59f194(0x26c)][_0x59f194(0x238)][_0x59f194(0x2cc)](this,_0x2966ad,_0x514d42),this['friendsUnit']()['recalculateActionsETB']();},VisuMZ[_0x221610(0x26c)][_0x221610(0x1ee)]=Game_Actor[_0x221610(0x2af)][_0x221610(0x1e7)],Game_Actor[_0x221610(0x2af)][_0x221610(0x1e7)]=function(_0xf0fdb1){const _0x588561=_0x221610;VisuMZ['BattleSystemETB'][_0x588561(0x1ee)][_0x588561(0x2cc)](this,_0xf0fdb1),this[_0x588561(0x1c7)]()[_0x588561(0x116)]();},VisuMZ[_0x221610(0x26c)][_0x221610(0x1a1)]=Game_Actor[_0x221610(0x2af)][_0x221610(0x216)],Game_Actor['prototype']['releaseUnequippableItems']=function(_0x14db5e){const _0x1cdb05=_0x221610;VisuMZ['BattleSystemETB'][_0x1cdb05(0x1a1)]['call'](this,_0x14db5e),this[_0x1cdb05(0x1c7)]()[_0x1cdb05(0x116)]();},VisuMZ[_0x221610(0x26c)][_0x221610(0x283)]=Game_Actor[_0x221610(0x2af)][_0x221610(0x2d2)],Game_Actor[_0x221610(0x2af)][_0x221610(0x2d2)]=function(_0x942f97,_0x28f5b4){const _0x2b4513=_0x221610;VisuMZ[_0x2b4513(0x26c)][_0x2b4513(0x283)][_0x2b4513(0x2cc)](this,_0x942f97,_0x28f5b4),this[_0x2b4513(0x1c7)]()['recalculateActionsETB']();},VisuMZ[_0x221610(0x26c)]['Game_Enemy_transform']=Game_Enemy[_0x221610(0x2af)][_0x221610(0x174)],Game_Enemy[_0x221610(0x2af)]['transform']=function(_0x557937){const _0x22c32b=_0x221610;VisuMZ['BattleSystemETB'][_0x22c32b(0x128)][_0x22c32b(0x2cc)](this,_0x557937),this[_0x22c32b(0x1c7)]()[_0x22c32b(0x116)]();},Game_Unit['_ETB_ACTION_BASE']=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)][_0x221610(0x177)][_0x221610(0x1fb)]||[0x1],Game_Unit['_ETB_ACTION_FIRST']=Game_Unit[_0x221610(0x1a6)][0x0],Game_Unit[_0x221610(0x1e9)]=Game_Unit[_0x221610(0x1a6)][0x1]||Game_Unit[_0x221610(0x1d1)],Game_Unit[_0x221610(0x1a6)]['unshift'](Game_Unit[_0x221610(0x1e9)]),Game_Unit[_0x221610(0x180)]=Game_Unit[_0x221610(0x1a6)][Game_Unit[_0x221610(0x1a6)]['length']-0x1],Game_Unit['_ETB_MAX_ACTIONS']=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)]['Mechanics'][_0x221610(0x1c4)],Game_Unit[_0x221610(0x129)]=VisuMZ['BattleSystemETB'][_0x221610(0x1d4)][_0x221610(0x177)][_0x221610(0x28b)],Game_Unit[_0x221610(0x14c)]=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)][_0x221610(0x177)][_0x221610(0x12e)],Game_Unit[_0x221610(0x2af)]['startTurnETB']=function(){const _0xf9e6a8=_0x221610;this[_0xf9e6a8(0x221)](),this[_0xf9e6a8(0x176)](this[_0xf9e6a8(0x2c3)]());},Game_Unit[_0x221610(0x2af)][_0x221610(0x221)]=function(){const _0x1f647=_0x221610,_0x10804b=$gameTroop[_0x1f647(0x141)]();let _0x25ff45=_0x10804b%0x2===0x0?BattleManager['_etbTeamEven']:BattleManager[_0x1f647(0x1a5)];_0x25ff45===this&&this['calculateTotalActionsETB']();},Game_Unit[_0x221610(0x2af)][_0x221610(0x115)]=function(_0x2749c2){const _0xcf6b0b=_0x221610;this[_0xcf6b0b(0x178)]=!![];let _0x5dfb8e=0x0,_0x23376b=this[_0xcf6b0b(0x1c8)]()[_0xcf6b0b(0x152)](_0x39f0d5=>_0x39f0d5[_0xcf6b0b(0x148)]());_0x2749c2=_0x2749c2||$gameTroop[_0xcf6b0b(0x141)](),_0x5dfb8e=Game_Unit[_0xcf6b0b(0x1a6)][_0x2749c2]??Game_Unit['_ETB_ACTION_LAST'],_0x5dfb8e=_0x23376b[_0xcf6b0b(0x22e)]((_0xcdea6c,_0x5af08c)=>_0xcdea6c+_0x5af08c[_0xcf6b0b(0x137)](),_0x5dfb8e),_0x5dfb8e=_0x5dfb8e['clamp'](Game_Unit[_0xcf6b0b(0x129)],Game_Unit['_ETB_MAX_ACTIONS']),this[_0xcf6b0b(0x12a)]=_0x5dfb8e;},Game_Unit[_0x221610(0x2af)][_0x221610(0x116)]=function(){const _0x4aa9a4=_0x221610;if(!BattleManager[_0x4aa9a4(0x155)]())return;if(!$gameParty['inBattle']())return;const _0x46f3b2=this[_0x4aa9a4(0x2c3)]();this[_0x4aa9a4(0x221)]();let _0x34f151=this['getCurrentActionsETB']();const _0x313615=this[_0x4aa9a4(0x2c3)]()-_0x46f3b2;if(BattleManager[_0x4aa9a4(0x185)]&&_0x313615>0x0)_0x34f151+=_0x313615;if(BattleManager['_ETB_RECALC_SUB_DIFF']&&_0x313615<0x0)_0x34f151+=_0x313615;_0x34f151=Math[_0x4aa9a4(0x1db)](_0x34f151,Game_Unit[_0x4aa9a4(0x288)]),this[_0x4aa9a4(0x176)](_0x34f151);},Game_Unit[_0x221610(0x2af)][_0x221610(0x161)]=function(){return this['_etbActionsCur']||0x0;},Game_Unit[_0x221610(0x2af)][_0x221610(0x176)]=function(_0x2cabd7){const _0x3707e5=_0x221610;this[_0x3707e5(0x228)]=Math[_0x3707e5(0x257)](_0x2cabd7)[_0x3707e5(0x197)](0x0,Game_Unit[_0x3707e5(0x288)]),!Game_Unit['_ETB_ACTION_OVERFLOW']&&(this['_etbActionsCur']=Math['min'](this[_0x3707e5(0x228)],this[_0x3707e5(0x2c3)]()));},Game_Unit[_0x221610(0x2af)][_0x221610(0x187)]=function(_0x2388c3){const _0x5c96aa=_0x221610;this[_0x5c96aa(0x176)](this[_0x5c96aa(0x161)]()+_0x2388c3);},Game_Unit[_0x221610(0x2af)][_0x221610(0x150)]=function(_0x191747){this['gainCurrentActionsETB'](-_0x191747);},Game_Unit['prototype'][_0x221610(0x2c3)]=function(){const _0x3aea9b=_0x221610;return this[_0x3aea9b(0x12a)]||0x0;},Game_Unit['prototype'][_0x221610(0x132)]=function(_0x53a325){const _0x4ee4a7=_0x221610;this['_etbActionsMax']=_0x53a325[_0x4ee4a7(0x197)](Game_Unit[_0x4ee4a7(0x129)],Game_Unit[_0x4ee4a7(0x288)]);},Game_Unit[_0x221610(0x2af)][_0x221610(0x28d)]=function(_0x44066a){const _0x168a32=_0x221610;this[_0x168a32(0x150)](_0x44066a);},Game_Unit[_0x221610(0x2af)][_0x221610(0x2c2)]=function(){const _0x31e51b=_0x221610;if(BattleManager[_0x31e51b(0x25a)]){if(this[_0x31e51b(0x192)]()[_0x31e51b(0x16b)](BattleManager['_subject'])){const _0x77a4b=BattleManager['_subject'][_0x31e51b(0x2b8)]();if(_0x77a4b&&_0x77a4b[_0x31e51b(0x1b8)])return!![];}}return this[_0x31e51b(0x228)]=this[_0x31e51b(0x228)]||0x0,this[_0x31e51b(0x228)]>0x0;},Game_Unit['prototype'][_0x221610(0x24e)]=function(){const _0x308075=_0x221610;for(const _0x17fb6e of this[_0x308075(0x192)]()){if(!_0x17fb6e)continue;const _0x1ffedc=_0x17fb6e[_0x308075(0x285)]();_0x17fb6e[_0x308075(0x182)](),_0x17fb6e[_0x308075(0x1b6)](),_0x1ffedc&&_0x17fb6e[_0x308075(0x1c6)]()&&_0x17fb6e['performCollapse']();}},Game_Unit[_0x221610(0x2af)]['meetEndTurnConditionsETB']=function(){const _0x3cdbb0=_0x221610;if(this[_0x3cdbb0(0x161)]()<=0x0)return!![];if(!this['aliveMembers']()[_0x3cdbb0(0x21c)](_0x515d44=>_0x515d44[_0x3cdbb0(0x148)]()))return!![];return![];},Game_Unit[_0x221610(0x2af)]['updateStateTurnsETB']=function(){const _0x124baa=_0x221610;for(const _0x26efa1 of this[_0x124baa(0x192)]()){if(!_0x26efa1)continue;_0x26efa1[_0x124baa(0x262)](),_0x26efa1['removeStatesAuto'](0x2),_0x26efa1['updateBuffTurns'](),_0x26efa1[_0x124baa(0x1b6)]();}},Game_Unit[_0x221610(0x2af)]['clearPassTurnETB']=function(){for(const _0x3cbc51 of this['members']()){if(!_0x3cbc51)continue;_0x3cbc51['_passedTurnETB']=![];}},Game_Unit[_0x221610(0x2af)]['etbLowestAgility']=function(){const _0x9cba5=_0x221610,_0x27a47a=this[_0x9cba5(0x192)]();return Math[_0x9cba5(0x1db)](..._0x27a47a[_0x9cba5(0x1ab)](_0x14fcee=>_0x14fcee[_0x9cba5(0x158)]));},Game_Unit[_0x221610(0x2af)][_0x221610(0x124)]=function(){const _0x3fa168=_0x221610,_0x1ec864=this['members']();return Math[_0x3fa168(0x215)](..._0x1ec864[_0x3fa168(0x1ab)](_0x4a56cc=>_0x4a56cc[_0x3fa168(0x158)]));},Game_Unit['prototype'][_0x221610(0x2a6)]=function(){const _0x4be419=_0x221610,_0x520235=this[_0x4be419(0x192)]();return _0x520235[_0x4be419(0x22e)]((_0x30260b,_0x53103d)=>_0x30260b+_0x53103d[_0x4be419(0x158)],0x0);},VisuMZ[_0x221610(0x26c)]['Game_Unit_onBattleStart']=Game_Unit[_0x221610(0x2af)][_0x221610(0x154)],Game_Unit['prototype']['onBattleStart']=function(_0x389cd0){const _0x3b17d9=_0x221610;VisuMZ[_0x3b17d9(0x26c)][_0x3b17d9(0x13e)][_0x3b17d9(0x2cc)](this,_0x389cd0),BattleManager[_0x3b17d9(0x155)]()&&(this[_0x3b17d9(0x16c)]=0x0);},Game_Unit[_0x221610(0x2af)][_0x221610(0x1a8)]=function(){const _0x490c34=_0x221610,_0x46aa79=this[_0x490c34(0x1c8)]();if(BattleManager['_ETB_RESET_INDEX'])return _0x46aa79;if(BattleManager[_0x490c34(0x147)])return _0x46aa79;this['_etbLastIndex']=this[_0x490c34(0x16c)]||0x0;while(!_0x46aa79[_0x490c34(0x21c)](_0x370809=>_0x370809['index']()===this[_0x490c34(0x16c)])){const _0x5db3fc=this[_0x490c34(0x192)](),_0x579cc8=_0x5db3fc[this['_etbLastIndex']];let _0xe3047=_0x5db3fc['indexOf'](_0x579cc8)+0x1;if(_0xe3047>=_0x5db3fc['length'])_0xe3047=0x0;this[_0x490c34(0x16c)]=_0xe3047;}for(;;){const _0xe8fdee=_0x46aa79[0x0]['index']();if(_0xe8fdee===this[_0x490c34(0x16c)])break;_0x46aa79['push'](_0x46aa79[_0x490c34(0x272)]());}return _0x46aa79;},Game_Unit[_0x221610(0x2af)][_0x221610(0x229)]=function(_0x443468){const _0x142735=_0x221610;this['_etbLastIndex']=_0x443468?_0x443468[_0x142735(0x20e)]():0x0;},VisuMZ[_0x221610(0x26c)]['Scene_Battle_createActorCommandWindow']=Scene_Battle[_0x221610(0x2af)][_0x221610(0x1eb)],Scene_Battle[_0x221610(0x2af)][_0x221610(0x1eb)]=function(){const _0x534590=_0x221610;VisuMZ[_0x534590(0x26c)][_0x534590(0x195)][_0x534590(0x2cc)](this),BattleManager[_0x534590(0x155)]()&&this[_0x534590(0x1fa)]();},Scene_Battle[_0x221610(0x2af)][_0x221610(0x1fa)]=function(){const _0x4bf243=_0x221610,_0xb2f948=this[_0x4bf243(0x236)];this[_0x4bf243(0x29d)]()&&delete _0xb2f948['_handlers']['cancel'];},VisuMZ['BattleSystemETB'][_0x221610(0x1ef)]=Scene_Battle[_0x221610(0x2af)][_0x221610(0x17d)],Scene_Battle['prototype']['commandCancel']=function(){const _0x108716=_0x221610;BattleManager[_0x108716(0x155)]()?this['commandCancelETB']():VisuMZ['BattleSystemETB'][_0x108716(0x1ef)][_0x108716(0x2cc)](this);},Scene_Battle[_0x221610(0x2af)][_0x221610(0x1ec)]=function(){const _0x2a30ca=_0x221610;this[_0x2a30ca(0x133)]['setup'](),this[_0x2a30ca(0x236)]['close']();},VisuMZ[_0x221610(0x26c)][_0x221610(0x209)]=Scene_Battle[_0x221610(0x2af)][_0x221610(0x1a3)],Scene_Battle[_0x221610(0x2af)]['commandFight']=function(){const _0x1459c8=_0x221610;BattleManager['isETB']()?this[_0x1459c8(0x22c)]():VisuMZ['BattleSystemETB'][_0x1459c8(0x209)]['call'](this);},VisuMZ[_0x221610(0x26c)][_0x221610(0x1b9)]=Scene_Battle[_0x221610(0x2af)][_0x221610(0x149)],Scene_Battle[_0x221610(0x2af)][_0x221610(0x149)]=function(){const _0x49c193=_0x221610;VisuMZ['BattleSystemETB'][_0x49c193(0x1b9)][_0x49c193(0x2cc)](this),this[_0x49c193(0x20f)]();},Scene_Battle[_0x221610(0x2af)][_0x221610(0x20f)]=function(){const _0x7dba22=_0x221610;if(!BattleManager[_0x7dba22(0x155)]())return;const _0x3489c3=this['getChildIndex'](this['_windowLayer']);this[_0x7dba22(0x2cd)]=new Window_ETB_ActionCount(),this[_0x7dba22(0x2cd)]['setUnit']($gameTroop),this['addChildAt'](this[_0x7dba22(0x2cd)],_0x3489c3),this[_0x7dba22(0x1fc)]=new Window_ETB_ActionCount(),this[_0x7dba22(0x1fc)][_0x7dba22(0x1c9)]($gameParty),this[_0x7dba22(0x134)](this[_0x7dba22(0x1fc)],_0x3489c3),this[_0x7dba22(0x16d)]();},Scene_Battle[_0x221610(0x2af)][_0x221610(0x16d)]=function(){const _0x3561f7=_0x221610;if(!BattleManager[_0x3561f7(0x155)]())return;if(!this['_logWindow'])return;const _0xa350d6=Window_ETB_ActionCount[_0x3561f7(0x1d4)];if(_0xa350d6['BottomPosition'])return;this[_0x3561f7(0x263)]['y']+=_0xa350d6[_0x3561f7(0x13a)];},Scene_Battle['prototype'][_0x221610(0x25e)]=function(){const _0x53fed3=_0x221610;this['_etbTroopActionCountWindow']&&this[_0x53fed3(0x2cd)]['refresh'](),this[_0x53fed3(0x1fc)]&&this[_0x53fed3(0x1fc)][_0x53fed3(0x1d2)]();},Window_Base[_0x221610(0x292)]=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)]['General'][_0x221610(0x12f)],Window_Base[_0x221610(0x17f)]=VisuMZ['BattleSystemETB'][_0x221610(0x1d4)][_0x221610(0x231)][_0x221610(0x1ce)],Window_Base[_0x221610(0x243)]=VisuMZ[_0x221610(0x26c)]['Settings']['General'][_0x221610(0x1bf)],Window_Base[_0x221610(0x1cd)]=VisuMZ[_0x221610(0x26c)][_0x221610(0x1d4)]['General'][_0x221610(0x18a)],Window_Base[_0x221610(0x168)]=VisuMZ['BattleSystemETB'][_0x221610(0x1d4)]['General'][_0x221610(0x204)],VisuMZ[_0x221610(0x26c)]['Window_Base_makeAdditionalSkillCostText']=Window_Base[_0x221610(0x2af)][_0x221610(0x211)],Window_Base['prototype'][_0x221610(0x211)]=function(_0x39b134,_0x1aa803,_0x56ba1a){const _0x57422d=_0x221610;return _0x56ba1a=VisuMZ[_0x57422d(0x26c)][_0x57422d(0x2aa)][_0x57422d(0x2cc)](this,_0x39b134,_0x1aa803,_0x56ba1a),_0x56ba1a=this[_0x57422d(0x2ba)](_0x39b134,_0x1aa803,_0x56ba1a),_0x56ba1a;},VisuMZ[_0x221610(0x26c)]['Window_Base_drawItemNumber']=Window_Base[_0x221610(0x2af)][_0x221610(0x1ba)],Window_Base[_0x221610(0x2af)][_0x221610(0x1ba)]=function(_0x53549c,_0x3979f0,_0x5e9adc,_0x14f6a0){const _0x40b3d7=_0x221610;BattleManager[_0x40b3d7(0x155)]()&&this[_0x40b3d7(0x277)]===Window_BattleItem?this['drawItemNumberETB'](_0x53549c,_0x3979f0,_0x5e9adc,_0x14f6a0):VisuMZ['BattleSystemETB'][_0x40b3d7(0x12c)][_0x40b3d7(0x2cc)](this,_0x53549c,_0x3979f0,_0x5e9adc,_0x14f6a0),this[_0x40b3d7(0x2d1)]();},Window_Base[_0x221610(0x2af)][_0x221610(0x1ad)]=function(_0x14cbb0,_0x49ab59,_0x2e326a,_0x166680){const _0x2db7d5=_0x221610,_0x24379e=BattleManager[_0x2db7d5(0x1cc)]||$gameParty[_0x2db7d5(0x192)]()[0x0],_0x3b34a1=this[_0x2db7d5(0x2ba)](_0x24379e,_0x14cbb0,''),_0x33c4ad=this['textSizeEx'](_0x3b34a1)[_0x2db7d5(0x2cb)],_0x3f1799=Window_Base['_ETB_COST_POSITION'];let _0x4f5d12=_0x49ab59+_0x166680-_0x33c4ad;if(_0x3b34a1==='')VisuMZ[_0x2db7d5(0x26c)]['Window_Base_drawItemNumber']['call'](this,_0x14cbb0,_0x49ab59,_0x2e326a,_0x166680);else{if(this[_0x2db7d5(0x259)](_0x14cbb0)){this[_0x2db7d5(0x2d1)]();const _0xeee345=VisuMZ[_0x2db7d5(0x289)][_0x2db7d5(0x1d4)][_0x2db7d5(0x290)];this['contents'][_0x2db7d5(0x279)]=_0xeee345[_0x2db7d5(0x27b)];if(_0x3f1799){const _0x4c34bd=_0xeee345[_0x2db7d5(0x27c)],_0x2b6bc2=_0x4c34bd[_0x2db7d5(0x1dc)]($gameParty['numItems'](_0x14cbb0)),_0x1aed82=this['textWidth'](_0x2b6bc2+this['skillCostSeparator']());_0x4f5d12-=_0x1aed82;}else _0x166680-=this[_0x2db7d5(0x1f8)](this[_0x2db7d5(0x139)]())+_0x33c4ad;VisuMZ[_0x2db7d5(0x26c)][_0x2db7d5(0x12c)]['call'](this,_0x14cbb0,_0x49ab59,_0x2e326a,_0x166680);}}this[_0x2db7d5(0x24b)](_0x3b34a1,_0x4f5d12,_0x2e326a);},Window_Base[_0x221610(0x2af)][_0x221610(0x2ba)]=function(_0x3769fd,_0x814126,_0x4603d2){const _0x12d075=_0x221610;if(!BattleManager['isETB']())return _0x4603d2;if(!_0x3769fd)return _0x4603d2;if(!_0x814126)return _0x4603d2;if(_0x814126[_0x12d075(0x196)][_0x12d075(0x212)](VisuMZ[_0x12d075(0x26c)]['RegExp'][_0x12d075(0x2c6)]))return _0x4603d2;let _0x28bc77=DataManager[_0x12d075(0x267)](_0x814126);const _0x349bd1=Window_Base[_0x12d075(0x292)],_0x56fb7d=Window_Base[_0x12d075(0x17f)],_0x5f253d=Window_Base['_ETB_COST_SHOW_GUARD'],_0x33a207=Window_Base['_ETB_COST_SHOW_0'],_0x371d9c=Window_Base['_ETB_COST_SHOW_1'];if(_0x814126[_0x12d075(0x196)][_0x12d075(0x212)](VisuMZ['BattleSystemETB'][_0x12d075(0x17a)][_0x12d075(0x2a0)])){if(_0x28bc77<0x0)return _0x4603d2;}else{if(DataManager[_0x12d075(0x1aa)](_0x814126)&&this['constructor']===Window_ActorCommand){if(!_0x56fb7d&&_0x814126['id']===_0x3769fd[_0x12d075(0x222)]())return _0x4603d2;if(!_0x5f253d&&_0x814126['id']===_0x3769fd[_0x12d075(0x1f7)]())return _0x4603d2;}if(_0x28bc77<0x0)return _0x4603d2;if(!_0x33a207&&_0x28bc77===0x0)return _0x4603d2;if(!_0x371d9c&&_0x28bc77===0x1)return _0x4603d2;}const _0x25445c=_0x12d075(0x203)[_0x12d075(0x1dc)](ImageManager[_0x12d075(0x254)]),_0x3349db=TextManager[_0x12d075(0x130)];let _0x172c04=TextManager[_0x12d075(0x293)][_0x12d075(0x1dc)](_0x28bc77,_0x3349db,_0x25445c);if(_0x4603d2==='')_0x4603d2+=_0x172c04;else _0x349bd1?_0x4603d2=_0x172c04+this[_0x12d075(0x139)]()+_0x4603d2:_0x4603d2=_0x4603d2+this['skillCostSeparator']()+_0x172c04;return _0x4603d2;},VisuMZ[_0x221610(0x26c)][_0x221610(0x14e)]=Window_Help['prototype'][_0x221610(0x21f)],Window_Help[_0x221610(0x2af)][_0x221610(0x21f)]=function(_0x417ff8){const _0x19b3e7=_0x221610;BattleManager[_0x19b3e7(0x155)]()&&_0x417ff8&&_0x417ff8['note']&&_0x417ff8[_0x19b3e7(0x196)][_0x19b3e7(0x212)](/<(?:ETB) HELP>\s*([\s\S]*)\s*<\/(?:ETB) HELP>/i)?this['setText'](String(RegExp['$1'])):VisuMZ[_0x19b3e7(0x26c)]['Window_Help_setItem'][_0x19b3e7(0x2cc)](this,_0x417ff8);},Window_Selectable[_0x221610(0x2af)][_0x221610(0x29f)]=function(){const _0xb24ed0=_0x221610;return this['constructor']===Window_ActorCommand&&BattleManager[_0xb24ed0(0x155)]()&&BattleManager[_0xb24ed0(0x147)];},VisuMZ[_0x221610(0x26c)]['Window_Selectable_cursorRight']=Window_Selectable[_0x221610(0x2af)][_0x221610(0x188)],Window_Selectable[_0x221610(0x2af)][_0x221610(0x188)]=function(_0x44532b){const _0x18b588=_0x221610;this[_0x18b588(0x29f)]()&&this[_0x18b588(0x11f)]()===0x1?this[_0x18b588(0x119)](!![]):VisuMZ[_0x18b588(0x26c)][_0x18b588(0x253)][_0x18b588(0x2cc)](this,_0x44532b);},VisuMZ[_0x221610(0x26c)][_0x221610(0x167)]=Window_Selectable[_0x221610(0x2af)][_0x221610(0x184)],Window_Selectable[_0x221610(0x2af)]['cursorLeft']=function(_0x516f9a){const _0x3d820a=_0x221610;this[_0x3d820a(0x29f)]()&&this[_0x3d820a(0x11f)]()===0x1?this[_0x3d820a(0x119)](![]):VisuMZ[_0x3d820a(0x26c)]['Window_Selectable_cursorLeft']['call'](this,_0x516f9a);},VisuMZ['BattleSystemETB'][_0x221610(0x170)]=Window_Selectable[_0x221610(0x2af)][_0x221610(0x2c7)],Window_Selectable['prototype'][_0x221610(0x2c7)]=function(){const _0x18bf07=_0x221610;this[_0x18bf07(0x29f)]()?this['etbSwitchActorDirection'](!![]):VisuMZ['BattleSystemETB'][_0x18bf07(0x170)]['call'](this);},VisuMZ['BattleSystemETB'][_0x221610(0x18f)]=Window_Selectable[_0x221610(0x2af)]['cursorPageup'],Window_Selectable[_0x221610(0x2af)]['cursorPageup']=function(){const _0x423814=_0x221610;this[_0x423814(0x29f)]()?this[_0x423814(0x119)](![]):VisuMZ['BattleSystemETB'][_0x423814(0x18f)][_0x423814(0x2cc)](this);},Window_ActorCommand[_0x221610(0x2af)][_0x221610(0x119)]=function(_0xbe189e){const _0x404c7e=_0x221610,_0x70ed11=BattleManager[_0x404c7e(0x242)];let _0x36ae27=$gameParty[_0x404c7e(0x183)]()[_0x404c7e(0x249)](_0x70ed11);const _0xaa573d=$gameParty[_0x404c7e(0x183)]()['length']-0x1;let _0x90ef2f=$gameParty[_0x404c7e(0x183)]()[_0x36ae27];for(;;){_0x36ae27+=_0xbe189e?0x1:-0x1;if(_0x36ae27<0x0)_0x36ae27=_0xaa573d;if(_0x36ae27>_0xaa573d)_0x36ae27=0x0;_0x90ef2f=$gameParty[_0x404c7e(0x183)]()[_0x36ae27];if(_0x90ef2f&&_0x90ef2f[_0x404c7e(0x135)]()&&!_0x90ef2f[_0x404c7e(0x27d)]())break;if(_0x90ef2f===_0x70ed11)break;}this['processSwitchActors'](_0x70ed11,_0x90ef2f);},Window_ActorCommand[_0x221610(0x2af)]['processSwitchActors']=function(_0x3af726,_0x4db276){const _0x45c0d6=_0x221610;if(_0x3af726===_0x4db276)return;if(_0x3af726['battler']())_0x3af726[_0x45c0d6(0x1b7)]()[_0x45c0d6(0x200)]();this[_0x45c0d6(0x22a)](),BattleManager[_0x45c0d6(0x25a)]=_0x4db276,BattleManager['_currentActor']=_0x4db276,BattleManager[_0x45c0d6(0x127)](),SceneManager['_scene'][_0x45c0d6(0x22c)]();},VisuMZ[_0x221610(0x26c)][_0x221610(0x239)]=Window_Selectable[_0x221610(0x2af)][_0x221610(0x2b2)],Window_Selectable[_0x221610(0x2af)][_0x221610(0x2b2)]=function(){const _0x49886b=_0x221610;BattleManager[_0x49886b(0x155)]()&&BattleManager[_0x49886b(0x147)]&&this[_0x49886b(0x277)]===Window_BattleStatus?this['processTouchETB']():VisuMZ[_0x49886b(0x26c)][_0x49886b(0x239)][_0x49886b(0x2cc)](this);},Window_BattleStatus[_0x221610(0x2af)][_0x221610(0x20b)]=function(){const _0x5b20dd=_0x221610;this[_0x5b20dd(0x15b)]()&&(TouchInput[_0x5b20dd(0x2b9)]()&&this['onTouchSelectETB'](!![]));},Window_BattleStatus[_0x221610(0x2af)]['onTouchSelectETB']=function(_0x3ab323){const _0x252248=_0x221610,_0x5b0ad3=SceneManager[_0x252248(0x276)][_0x252248(0x236)];if(!_0x5b0ad3)return;if(!_0x5b0ad3[_0x252248(0x25c)])return;this['_doubleTouch']=![];const _0x555f83=this[_0x252248(0x20e)](),_0x1d9f49=this[_0x252248(0x142)]();if(_0x1d9f49>=0x0){const _0x56ce8b=$gameParty[_0x252248(0x183)]()[_0x555f83],_0x310a15=$gameParty[_0x252248(0x183)]()[_0x1d9f49];this['canActorBeSelectedETB'](_0x310a15)&&(_0x1d9f49===this[_0x252248(0x20e)]()&&(this[_0x252248(0x24d)]=!![]),this[_0x252248(0x299)](_0x1d9f49),_0x5b0ad3[_0x252248(0x26e)](_0x56ce8b,_0x310a15));}},Window_BattleStatus[_0x221610(0x2af)][_0x221610(0x255)]=function(_0x361ef2){const _0x15ae9e=_0x221610;if(!_0x361ef2)return![];if(!_0x361ef2[_0x15ae9e(0x148)]())return![];if(!_0x361ef2[_0x15ae9e(0x135)]())return![];if(_0x361ef2[_0x15ae9e(0x27d)]())return![];return!![];};function Window_ETB_ActionCount(){const _0x48edfa=_0x221610;this[_0x48edfa(0x14a)](...arguments);}Window_ETB_ActionCount[_0x221610(0x2af)]=Object[_0x221610(0x11a)](Window_Base[_0x221610(0x2af)]),Window_ETB_ActionCount['prototype'][_0x221610(0x277)]=Window_ETB_ActionCount,Window_ETB_ActionCount['Settings']=VisuMZ['BattleSystemETB'][_0x221610(0x1d4)]['ActionCountDisplay'],Window_ETB_ActionCount['prototype'][_0x221610(0x14a)]=function(){const _0x4e172d=_0x221610,_0xb6f8ea=this[_0x4e172d(0x13b)]();Window_Base[_0x4e172d(0x2af)]['initialize']['call'](this,_0xb6f8ea),this[_0x4e172d(0x2a4)](0x0),this[_0x4e172d(0x1af)](),this[_0x4e172d(0x1e5)]=0x0;},Window_ETB_ActionCount[_0x221610(0x2af)][_0x221610(0x13b)]=function(){return new Rectangle(0x0,0x0,Graphics['width'],Graphics['height']);},Window_ETB_ActionCount[_0x221610(0x2af)][_0x221610(0x1af)]=function(){const _0x4105bf=_0x221610;this['_unit']=null,this[_0x4105bf(0x225)]=0x0,this[_0x4105bf(0x208)]=0x0;const _0x19c8c0=Window_ETB_ActionCount[_0x4105bf(0x1d4)];this[_0x4105bf(0x1d5)]={'ActorPicture':_0x19c8c0[_0x4105bf(0x191)]?ImageManager[_0x4105bf(0x235)](_0x19c8c0[_0x4105bf(0x191)]):'','EnemyPicture':_0x19c8c0[_0x4105bf(0x26a)]?ImageManager[_0x4105bf(0x235)](_0x19c8c0['EnemyActionPicture']):'','EmptyPicture':_0x19c8c0[_0x4105bf(0x284)]?ImageManager[_0x4105bf(0x235)](_0x19c8c0['EmptyActionPicture']):''};},Window_ETB_ActionCount[_0x221610(0x2af)][_0x221610(0x164)]=function(){const _0x24d7a2=_0x221610;this[_0x24d7a2(0x224)]=0x0;},Window_ETB_ActionCount[_0x221610(0x2af)]['setUnit']=function(_0x401d51){const _0x69de88=_0x221610;this[_0x69de88(0x269)]=_0x401d51,this[_0x69de88(0x1f3)]();},Window_ETB_ActionCount['prototype'][_0x221610(0x1f3)]=function(){const _0x3f505c=_0x221610;Window_Base[_0x3f505c(0x2af)][_0x3f505c(0x1f3)][_0x3f505c(0x2cc)](this),this[_0x3f505c(0x1e8)](),this['updatePosition'](),this[_0x3f505c(0x227)]();},Window_ETB_ActionCount[_0x221610(0x2af)]['checkNeedsUpdate']=function(){const _0x4958ca=_0x221610;if(!this[_0x4958ca(0x269)])return;(this[_0x4958ca(0x225)]!==this[_0x4958ca(0x269)]['getCurrentActionsETB']()||this[_0x4958ca(0x208)]!==this[_0x4958ca(0x269)][_0x4958ca(0x2c3)]())&&(this[_0x4958ca(0x225)]=this[_0x4958ca(0x269)][_0x4958ca(0x161)](),this[_0x4958ca(0x208)]=this[_0x4958ca(0x269)][_0x4958ca(0x2c3)](),this[_0x4958ca(0x1d2)]());},Window_ETB_ActionCount[_0x221610(0x2af)][_0x221610(0x227)]=function(){const _0x4d84d8=_0x221610;this[_0x4d84d8(0x2bd)]=$gameSystem[_0x4d84d8(0x23d)]();},Window_ETB_ActionCount[_0x221610(0x2af)][_0x221610(0x1d2)]=function(){const _0x217122=_0x221610;this[_0x217122(0x1a7)][_0x217122(0x2d8)]();if(!this[_0x217122(0x269)])return;const _0x455757=Window_ETB_ActionCount[_0x217122(0x1d4)];if(!_0x455757)return;const _0x55e9ff=this['createStartingCoordinates'](),_0x23a8ed=this['createContentsArray'](),_0x489e55=_0x455757[_0x217122(0x131)]+_0x455757[_0x217122(0x2a9)],_0x4eb17b=_0x455757['DrawHorz'];let _0x76ace6=_0x55e9ff['x'],_0x159bb7=_0x55e9ff['y'];while(_0x23a8ed[_0x217122(0x1f4)]>_0x455757[_0x217122(0x258)]){_0x23a8ed['shift']();}while(_0x23a8ed[_0x217122(0x1f4)]>0x0){const _0x37fe59=_0x23a8ed[_0x217122(0x272)]();this[_0x217122(0x117)](_0x37fe59,_0x76ace6,_0x159bb7,_0x23a8ed[_0x217122(0x1f4)]),_0x4eb17b?_0x76ace6+=_0x489e55:_0x159bb7+=_0x489e55;}},Window_ETB_ActionCount[_0x221610(0x2af)][_0x221610(0x280)]=function(){const _0x51e2d2=_0x221610,_0x3d7b71=Window_ETB_ActionCount['Settings'],_0x40dea4=this['_unit']===$gameParty,_0x1dd14d=_0x3d7b71[_0x51e2d2(0x131)],_0x39e43d=_0x1dd14d*(_0x3d7b71[_0x51e2d2(0x258)]-0x1)+_0x3d7b71['ImageGapDistance']*(_0x3d7b71['MaxVisible']-0x2),_0x539180=_0x3d7b71[_0x51e2d2(0x2b7)],_0x4e0779=SceneManager[_0x51e2d2(0x276)][_0x51e2d2(0x1a4)][_0x51e2d2(0x1b4)];let _0x3a2a6e=0x0,_0x3159d8=0x0;const _0x10569e=_0x3d7b71['BottomPosition'];if(_0x10569e){_0x3159d8=this[_0x51e2d2(0x2a2)]-_0x4e0779-_0x3d7b71['ScreenBufferY']-_0x1dd14d,_0x3a2a6e=_0x40dea4?this['innerWidth']-_0x3d7b71[_0x51e2d2(0x1ca)]-_0x1dd14d:_0x3d7b71[_0x51e2d2(0x1ca)];if(_0x539180&&_0x40dea4)_0x3a2a6e-=_0x39e43d;else!_0x539180&&(_0x3159d8-=_0x39e43d);}else _0x3159d8=_0x3d7b71[_0x51e2d2(0x2c4)],_0x3a2a6e=_0x40dea4?this[_0x51e2d2(0x2a7)]-_0x3d7b71[_0x51e2d2(0x1ca)]-_0x1dd14d:_0x3d7b71[_0x51e2d2(0x1ca)],_0x539180&&_0x40dea4&&(_0x3a2a6e-=_0x39e43d);return _0x3a2a6e+=_0x40dea4?_0x3d7b71[_0x51e2d2(0x278)]:_0x3d7b71['EnemyOffsetX'],_0x3159d8+=_0x40dea4?_0x3d7b71[_0x51e2d2(0x23a)]:_0x3d7b71[_0x51e2d2(0x266)],new Point(Math[_0x51e2d2(0x257)](_0x3a2a6e),Math[_0x51e2d2(0x257)](_0x3159d8));},Window_ETB_ActionCount['prototype'][_0x221610(0x25d)]=function(){const _0x9e829b=_0x221610,_0x29d2a5=Window_ETB_ActionCount[_0x9e829b(0x1d4)];let _0x545615=!![];if(_0x29d2a5[_0x9e829b(0x2b7)]){if(this['_unit']===$gameParty)_0x545615=!_0x545615;}else _0x545615=!_0x29d2a5['BottomPosition'];let _0xee48e6=this[_0x9e829b(0x269)]['getCurrentActionsETB'](),_0x32257c=Math[_0x9e829b(0x215)](0x0,this['_unit'][_0x9e829b(0x2c3)]()-_0xee48e6);const _0x2b546e=[];while(_0xee48e6--){const _0x2794c2=_0x9e829b(0x15e);_0x2b546e[_0x9e829b(0x1f5)](_0x2794c2);}while(_0x32257c--){const _0x3886a6='Empty';_0x545615?_0x2b546e[_0x9e829b(0x1f5)](_0x3886a6):_0x2b546e['unshift'](_0x3886a6);}while(_0x2b546e[_0x9e829b(0x1f4)]<0xa){const _0x532863='Nothing';_0x545615?_0x2b546e[_0x9e829b(0x1f5)](_0x532863):_0x2b546e[_0x9e829b(0x194)](_0x532863);}return _0x2b546e;},Window_ETB_ActionCount[_0x221610(0x2af)][_0x221610(0x117)]=function(_0x137696,_0xd57e83,_0x48c523,_0x5248ae){const _0x4b532f=_0x221610;if(_0x137696===_0x4b532f(0x16f))return;if(_0x137696===_0x4b532f(0x15e))_0x137696=this[_0x4b532f(0x269)]===$gameParty?'Actor':_0x4b532f(0x261);const _0x4ee2d5=Window_ETB_ActionCount[_0x4b532f(0x1d4)];if(_0x4ee2d5[_0x4b532f(0x163)[_0x4b532f(0x1dc)](_0x137696)]){const _0x174ce0=_0x4ee2d5[_0x4b532f(0x163)[_0x4b532f(0x1dc)](_0x137696)],_0x106df9=ImageManager[_0x4b532f(0x235)](_0x174ce0);_0x106df9[_0x4b532f(0x2d6)](this['drawPicture']['bind'](this,_0x106df9,_0xd57e83,_0x48c523,_0x5248ae));}else{const _0x4abfdf=ImageManager[_0x4b532f(0x173)[_0x4b532f(0x1dc)](_0x137696)];this['drawBigIcon'](_0x4abfdf,_0xd57e83,_0x48c523),this[_0x4b532f(0x189)](_0x5248ae)&&this[_0x4b532f(0x2b1)](_0xd57e83,_0x48c523);}},Window_ETB_ActionCount['prototype'][_0x221610(0x11b)]=function(_0x15b8b2,_0x10e092,_0x1a8f3b,_0x2286bf){const _0x31c482=_0x221610;if(!_0x15b8b2)return;const _0x3aa4f0=Window_ETB_ActionCount['Settings'],_0x453644=_0x3aa4f0['ImageSize'],_0x1d483a=_0x453644/_0x15b8b2[_0x31c482(0x2cb)],_0x426745=_0x453644/_0x15b8b2[_0x31c482(0x1b4)],_0x573859=Math[_0x31c482(0x1db)](_0x1d483a,_0x426745,0x1),_0x8ec104=_0x15b8b2[_0x31c482(0x1b4)],_0x35be02=_0x15b8b2[_0x31c482(0x1b4)],_0x478797=Math[_0x31c482(0x257)](_0x8ec104*_0x573859),_0x526c47=Math[_0x31c482(0x257)](_0x35be02*_0x573859),_0x219aea=Math[_0x31c482(0x257)](_0x10e092+(_0x453644-_0x478797)/0x2),_0x103868=Math[_0x31c482(0x257)](_0x1a8f3b+(_0x453644-_0x526c47)/0x2);this['contents'][_0x31c482(0x201)][_0x31c482(0x146)]=_0x3aa4f0[_0x31c482(0x1d0)],this[_0x31c482(0x1a7)][_0x31c482(0x2ad)](_0x15b8b2,0x0,0x0,_0x8ec104,_0x35be02,_0x219aea,_0x103868,_0x478797,_0x526c47),this['contents'][_0x31c482(0x201)]['imageSmoothingEnabled']=!![],this['canDrawActionsRemaining'](_0x2286bf)&&this[_0x31c482(0x2b1)](_0x10e092,_0x1a8f3b);},Window_ETB_ActionCount['prototype'][_0x221610(0x18e)]=function(_0xe986f3,_0x3f00fb,_0x523cd3){const _0x11cd32=_0x221610,_0x139b71=Window_ETB_ActionCount[_0x11cd32(0x1d4)];let _0x43cf34=_0x139b71['ImageSize'];const _0x20801c=ImageManager[_0x11cd32(0x19c)]('IconSet'),_0x58ff64=ImageManager[_0x11cd32(0x1c5)],_0x17aabd=ImageManager['iconHeight'],_0x1a46d8=_0xe986f3%0x10*_0x58ff64,_0x3f3ef6=Math[_0x11cd32(0x17c)](_0xe986f3/0x10)*_0x17aabd;this[_0x11cd32(0x1a7)][_0x11cd32(0x201)]['imageSmoothingEnabled']=_0x139b71['IconSmoothing'],this[_0x11cd32(0x1a7)][_0x11cd32(0x2ad)](_0x20801c,_0x1a46d8,_0x3f3ef6,_0x58ff64,_0x17aabd,_0x3f00fb,_0x523cd3,_0x43cf34,_0x43cf34),this[_0x11cd32(0x1a7)][_0x11cd32(0x201)][_0x11cd32(0x146)]=!![];},Window_ETB_ActionCount['prototype'][_0x221610(0x12d)]=function(){const _0x13c694=_0x221610,_0x261ce1=Window_ETB_ActionCount[_0x13c694(0x1d4)];if(_0x261ce1['BottomPosition'])return;if(!_0x261ce1[_0x13c694(0x1cb)])return;const _0x139fa4=SceneManager[_0x13c694(0x276)]['_helpWindow'];if(!_0x139fa4)return;_0x139fa4[_0x13c694(0x2bd)]?(this['x']=_0x261ce1['RepositionTopHelpX']||0x0,this['y']=_0x261ce1[_0x13c694(0x29b)]||0x0):(this['x']=0x0,this['y']=0x0);},Window_ETB_ActionCount[_0x221610(0x2af)]['canDrawActionsRemaining']=function(_0x1abfc3){const _0xa3557b=_0x221610,_0x1d9f66=Window_ETB_ActionCount[_0xa3557b(0x1d4)];if(!_0x1d9f66['DrawActionsRemaining'])return![];const _0x9a20c=_0x1d9f66[_0xa3557b(0x28f)],_0x2a263b=_0x1d9f66[_0xa3557b(0x2b7)],_0x42596f=this[_0xa3557b(0x269)]===$gameParty;if(_0x2a263b)return _0x42596f?_0x1abfc3===0x0:_0x1abfc3===_0x1d9f66[_0xa3557b(0x258)]-0x1;else return _0x9a20c?_0x1abfc3===0x0:_0x1abfc3===_0x1d9f66[_0xa3557b(0x258)]-0x1;},Window_ETB_ActionCount[_0x221610(0x2af)][_0x221610(0x2b1)]=function(_0x433fe4,_0x3ed860){const _0x59f372=_0x221610;this[_0x59f372(0x2d1)]();const _0x16e28a=Window_ETB_ActionCount[_0x59f372(0x1d4)],_0x4ea202=new Rectangle(_0x433fe4,_0x3ed860,_0x16e28a[_0x59f372(0x131)],_0x16e28a[_0x59f372(0x131)]);_0x4ea202['x']+=_0x16e28a[_0x59f372(0x123)],_0x4ea202['y']+=_0x16e28a['ActionsRemainingOffsetY'];const _0x394771=this[_0x59f372(0x269)][_0x59f372(0x161)]();this['contents']['fontSize']=_0x16e28a[_0x59f372(0x23c)],this[_0x59f372(0x1a7)][_0x59f372(0x1bb)](_0x394771,_0x4ea202['x'],_0x4ea202['y'],_0x4ea202['width'],_0x4ea202['height'],'center'),this[_0x59f372(0x2d1)]();};