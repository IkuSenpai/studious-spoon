//=============================================================================
// VisuStella MZ - Chain Battles
// VisuMZ_3_ChainBattles.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ChainBattles = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ChainBattles = VisuMZ.ChainBattles || {};
VisuMZ.ChainBattles.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.04] [ChainBattles]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Chain_Battles_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Ever wanted to have a continuous stream of battles without the victory
 * sequence appearing until the very end? The Chain Battles plugin will allow
 * RPG Maker MZ to do just that. As the player's party progresses forward, they
 * maintain their states, buffs, and debuffs. The such effects will keep their
 * stacks and turns. Chain Battles will make creating a marathon of battles
 * a possibility.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Queue up battles to be chained one after the other. This can be done in or
 *   out of battle. An unlimited amount of battles can be chained.
 * * Chained battles can be randomized across a pool of Troop ID's, based off
 *   the random encounter pool, or calculated through JavaScript.
 * * Battlebacks can be changed as chain battles continue to give a scenary
 *   change and a sense of progression.
 * * Any states, buffs, and/or debuffs that are applied to battlers as they
 *   transition from one battle to another will be carried over with their
 *   turn durations intact.
 * * Battle rewards such as EXP, Gold, and Drop Rates can be affected by the
 *   total number of chain battles, increasing the overall multiplier (or
 *   decreasing it if you so wish).
 * * Queue up Common Events to run upon the next victory condition! These
 *   Common Events will run each time the victory conditions are achieved and
 *   before the next battle is chained.
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
 * Chain Battle Carry Over
 * ============================================================================
 *
 * The following section will explain what happens whenever chain battles
 * occur and describe exactly what is carried over.
 *
 * ---
 *
 * HP, MP, and TP
 * 
 * HP and MP, by default, are static across battles and will not reset
 * themselves at the start of each chained battle.
 * 
 * TP, however, will depend. If TP is preserved, then the TP values will be
 * maintained as chain battles progress. If TP is not preserved, then, by
 * default, the battler will gain a random amount of TP at the start of each
 * chained battle.
 *
 * ---
 * 
 * Turn Count
 * 
 * When chaining into the next battle, the turn count will be preserved and
 * then increased by 1. This means if you end the first battle at Turn 10, then
 * you will start the second battle at Turn 11. This applies to TPB battle
 * systems as well.
 * 
 * ---
 * 
 * Troop Event Page Span
 * 
 * If a troop event page's span is set to "battle", it will be reset at the
 * start of each chain battle. This means even if you are utilizing the same
 * conditions as before for the same page, the same page's span will be reset.
 * 
 * ---
 * 
 * Next Victory
 * 
 * You can setup certain Common Events to run upon achieving Victory but before
 * the battle ends or moves onto the next chain. These are achieved through the
 * new Plugin Commands added through this plugin. If multiple Common Events are
 * queued, then all of them will run before the next victory phase.
 * 
 * If enemies revive in the middle of the Common Event queue, the queue is
 * paused and resumed after the enemies are defeated once again.
 * 
 * For example:
 * 
 * 1. Common Events A, B, C, D, E are queued.
 * 2. Enemies are set to revive on Common Event B.
 * 3. When the player achieves battle victory, Common Events A and B run.
 * 4. The enemies will revive.
 * 5. The player has to defeat the enemies again.
 * 6. Once the enemies are defeated, Common Events C, D, and E then run.
 * 7. Afterwards, any chain battles will occur.
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
 * VisuMZ_2_ClassChangeSystem
 * 
 * This plugin offers bonus reward multipliers for the Class Change System's
 * CP and JP resource points earned from battle.
 * 
 * ---
 * 
 * VisuMZ_2_SkillLearnSystem
 * 
 * This plugin offers bonus reward multipliers for the Skill Learn System's
 * AP and SP resource points earned from battle.
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
 * VisuMZ_4_ExtraEnemyDrops
 * 
 * Extra Rewards will be carried over into subsequently chained battles instead
 * of being cleared. However, Forced Rewards will still overwrite everything.
 * Keep this in mind as you use these Extra Enemy Drops Plugin Commands.
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
 * === Chain Battle Plugin Commands ===
 * 
 * ---
 *
 * Chain Battle: Queue Troop ID(s)
 * - Setup the next Troop ID as a part of a chain battle.
 * - If there are multiple, one will be randomly picked.
 *
 *   Troop ID(s):
 *   - Select which Troop ID(s) to register as the next potential battle.
 *
 *   Change Battleback?:
 *   - Change the battlebacks for this queued battle?
 *
 *     Battleback 1:
 *     Battleback 2:
 *     - Filename used for the battleback image.
 *     - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * Chain Battle: Queue Encounter Pool
 * - Setup the next battle from the random encounter pool.
 * - If there are multiple, one will be randomly picked.
 *
 *   Change Battleback?:
 *   - Change the battlebacks for this queued battle?
 *
 *     Battleback 1:
 *     Battleback 2:
 *     - Filename used for the battleback image.
 *     - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * Chain Battle: Queue JavaScript ID
 * - Use JavaScript to determine which Troop ID to queue up for a chain battle.
 *
 *   JS: Troop ID:
 *   - Use JavaScript code to determine what Troop ID to queue up for a
 *     chain battle.
 *
 *   Change Battleback?:
 *   - Change the battlebacks for this queued battle?
 *
 *     Battleback 1:
 *     Battleback 2:
 *     - Filename used for the battleback image.
 *     - Leave empty if you don't wish to use one.
 *
 * ---
 * 
 * Chain Battle: Clear Chains
 * - Clears any stored Chain Battles, allowing the battle to end after
 * the current one.
 * 
 * ---
 * 
 * === Next Victory Plugin Commands ===
 * 
 * ---
 * 
 * Next Victory: Queue Common Event
 * - Queue a Common Event(s) to run next victory.
 * - If multiple, Common Events run in queued order.
 * - The Common Events will run before the next queued chain battle.
 * 
 *   Common Event ID(s):
 *   - Select which Common Event(s) to run upon the next victory.
 *   - If multiple, Common Events run in queued order.
 * 
 *   - The "Next Victory: Queue Common Event" Plugin Command will always refer
 *     to the immediate next victory sequence.
 *     - Even if you put it after a "Chain Battle: Queue Troop ID(s)", it does
 *       not mean it will occur for that next queued troop's victory.
 *     - Instead, the common event will run for the immediate next victory
 *       sequence regardless.
 *     - If you would like for the queued troop ID's to have a "Next Victory"
 *       effect, run this Plugin Command AFTER the queued troop ID has been
 *       initiated in battle first.
 * 
 *   - If enemies revive in the middle of the Common Event queue, the queue is
 *     paused and resumed after the enemies are defeated once again.
 *     - For example:
 *     - Common Events A, B, C, D, E are queued.
 *     - Enemies are set to revive on Common Event B.
 *     - When the player achieves battle victory, Common Events A and B run.
 *     - The enemies will revive.
 *     - The player has to defeat the enemies again.
 *     - Once the enemies are defeated, Common Events C, D, and E then run.
 *     - Afterwards, any chain battles will occur.
 * 
 * ---
 * 
 * Next Victory: Clear Common Event Queue
 * - Clear queued Common Event(s) for next victory.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings related to Chain Battles.
 *
 * ---
 * 
 * Animation
 * 
 *   Chain Walk Forward?:
 *   - Does player party perform walk up animation for chain battles?
 * 
 * ---
 *
 * Delay
 * 
 *   Frames:
 *   - How many frames should be delayed on average?
 * 
 *   Allow Fast Forward?:
 *   - Allow fast forwarding the delay by holding down the OK or Cancel
 *     buttons?
 *
 * ---
 *
 * Tracking
 * 
 *   Variable: Chains:
 *   - Automatically tracks total chained battles.
 *   - Insert Variable ID '0' to not use.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Reward Multipliers
 * ============================================================================
 *
 * Reward multipliers based on the number of Chain Battles in total.
 *
 * ---
 *
 * Settings
 * 
 *   Enable Multipliers?:
 *   - Enable victory reward multipliers?
 *
 * ---
 *
 * General
 * 
 *   EXP Rates:
 *   Gold Rates:
 *   Drop Rates:
 *   - What rates do you want per total chain battles?
 *   - 1.0 = 100%, 1.5 = 150%
 *
 * ---
 *
 * Compatibility > Class Change System
 * 
 *   CP Rates:
 *   JP Rates:
 *   - What rates do you want per total chain battles?
 *   - 1.0 = 100%, 1.5 = 150%
 *
 * ---
 *
 * Compatibility > Skill Learn System
 * 
 *   AP Rates:
 *   SP Rates:
 *   - What rates do you want per total chain battles?
 *   - 1.0 = 100%, 1.5 = 150%
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
 * Version 1.04: July 13, 2023
 * * Documentation Update!
 * ** Added extra clarity for "Next Victory: Queue Common Event" Plugin Command
 *    in the help file:
 * *** The "Next Victory: Queue Common Event" Plugin Command will always refer
 *     to the immediate next victory sequence.
 * *** Even if you put it after a "Chain Battle: Queue Troop ID(s)", it does
 *     not mean it will occur for that next queued troop's victory.
 * *** Instead, the common event will run for the immediate next victory
 *     sequence regardless.
 * *** If you would like for the queued troop ID's to have a "Next Victory"
 *     effect, run this Plugin Command AFTER the queued troop ID has been
 *     initiated in battle first.
 * 
 * Version 1.03: May 18, 2023
 * * Compatibility Update!
 * ** Added better compatibility with Boost Action and Skill Cooldowns.
 *    Update made by Olivia.
 * 
 * Version 1.02: February 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated features list in Introduction.
 * ** Added "Next Victory" segment to "Chain Battle Carry Over" section.
 * *** Next Victory
 * *** You can setup certain Common Events to run upon achieving Victory but
 *     before the battle ends or moves onto the next chain. These are achieved
 *     through the new Plugin Commands added through this plugin. If multiple
 *     Common Events are queued, then all of them will run before the next
 *     victory phase.
 * *** If enemies revive in the middle of the Common Event queue, the queue is
 *     paused and resumed after the enemies are defeated once again.
 * **** Example provided inside segment.
 * * New Features!
 * ** New Plugin Commands added by Olivia and sponsored by AndyL:
 * *** Next Victory: Queue Common Event
 * **** Queue a Common Event(s) to run next victory. If multiple, Common Events
 *      run in queued order. The Common Events will run before the next queued
 *      chain battle.
 * *** Next Victory: Clear Common Event Queue
 * **** Clear queued Common Event(s) for next victory.
 * 
 * Version 1.01: October 21, 2021
 * * Bug Fixes!
 * ** Battle win/lose branches should now carry over. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > General > Animation > Chain Walk Forward?
 * **** Does player party perform walk up animation for chain battles?
 * 
 * Version 1.00 Official Release Date: September 8, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChainBattleQueueTroop
 * @text Chain Battle: Queue Troop ID(s)
 * @desc Setup the next Troop ID as a part of a chain battle.
 * If there are multiple, one will be randomly picked.
 *
 * @arg TroopIDs:arraynum
 * @text Troop ID(s)
 * @parent Step1
 * @type troop[]
 * @desc Select which Troop ID(s) to register as the next potential battle.
 * @default ["1"]
 *
 * @arg ChangeBattleback:eval
 * @text Change Battleback?
 * @type boolean
 * @on Change
 * @off Don't Change
 * @desc Change the battlebacks for this queued battle?
 * @default false
 *
 * @arg Filename1:str
 * @text Battleback 1
 * @parent ChangeBattleback:eval
 * @type file
 * @dir img/battlebacks1/
 * @require 1
 * @desc Filename used for the battleback 1 image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @arg Filename2:str
 * @text Battleback 2
 * @parent ChangeBattleback:eval
 * @type file
 * @dir img/battlebacks2/
 * @require 1
 * @desc Filename used for the battleback 2 image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChainBattleQueueEncounter
 * @text Chain Battle: Queue Encounter Pool
 * @desc Setup the next battle from the random encounter pool.
 * If there are multiple, one will be randomly picked.
 *
 * @arg ChangeBattleback:eval
 * @text Change Battleback?
 * @type boolean
 * @on Change
 * @off Don't Change
 * @desc Change the battlebacks for this queued battle?
 * @default false
 *
 * @arg Filename1:str
 * @text Battleback 1
 * @parent ChangeBattleback:eval
 * @type file
 * @dir img/battlebacks1/
 * @require 1
 * @desc Filename used for the battleback 1 image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @arg Filename2:str
 * @text Battleback 2
 * @parent ChangeBattleback:eval
 * @type file
 * @dir img/battlebacks2/
 * @require 1
 * @desc Filename used for the battleback 2 image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChainBattleQueueJavaScript
 * @text Chain Battle: Queue JavaScript ID
 * @desc Use JavaScript to determine which Troop ID to queue
 * up for a chain battle.
 *
 * @arg calcTroopID:func
 * @text JS: Troop ID
 * @parent Step1
 * @type note
 * @desc Use JavaScript code to determine what Troop ID to queue up for a chain battle.
 * @default "// Declare Troop ID\nlet troopID = 1;\n\n// Calculations\n\n// Return Troop ID\nreturn troopID;"
 *
 * @arg ChangeBattleback:eval
 * @text Change Battleback?
 * @type boolean
 * @on Change
 * @off Don't Change
 * @desc Change the battlebacks for this queued battle?
 * @default false
 *
 * @arg Filename1:str
 * @text Battleback 1
 * @parent ChangeBattleback:eval
 * @type file
 * @dir img/battlebacks1/
 * @require 1
 * @desc Filename used for the battleback 1 image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @arg Filename2:str
 * @text Battleback 2
 * @parent ChangeBattleback:eval
 * @type file
 * @dir img/battlebacks2/
 * @require 1
 * @desc Filename used for the battleback 2 image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChainBattleClear
 * @text Chain Battle: Clear Chains
 * @desc Clears any stored Chain Battles, allowing the battle
 * to end after the current one.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command NextVictoryQueueCommonEvent
 * @text Next Victory: Queue Common Event
 * @desc Queue a Common Event(s) to run next victory.
 * If multiple, Common Events run in queued order.
 *
 * @arg CommonEventIDs:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Select which Common Event(s) to run upon the next victory.
 * If multiple, Common Events run in queued order.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command NextVictoryClearCommonEventQueue
 * @text Next Victory: Clear Common Event Queue
 * @desc Clear queued Common Event(s) for next victory.
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
 * @param ChainBattles
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
 * @desc General settings related to Chain Battles.
 * @default {"Delay":"","DelayFrames:num":"120","AllowFastFwd:eval":"true","Tracking":"","TrackTotalChainVariable:num":"0"}
 *
 * @param Multipliers:struct
 * @text Reward Multipliers
 * @type struct<Multipliers>
 * @desc Reward multipliers based on the number of Chain Battles in total.
 * @default {"Enable:eval":"true","General":"","ExpRates:arraynum":"[\"1.0\",\"1.1\",\"1.3\",\"1.6\",\"2.0\",\"3.0\"]","GoldRates:arraynum":"[\"1.0\",\"1.1\",\"1.3\",\"1.6\",\"2.0\",\"3.0\"]","DropRates:arraynum":"[\"1.0\",\"1.1\",\"1.3\",\"1.6\",\"2.0\",\"3.0\"]","Compatibility":"","ClassChange":"VisuMZ_2_ClassChangeSystem","CpRates:arraynum":"[\"1.0\",\"1.1\",\"1.3\",\"1.6\",\"2.0\",\"3.0\"]","JpRates:arraynum":"[\"1.0\",\"1.1\",\"1.3\",\"1.6\",\"2.0\",\"3.0\"]","SkillLearn":"VisuMZ_2_SkillLearnSystem","ApRates:arraynum":"[\"1.0\",\"1.1\",\"1.3\",\"1.6\",\"2.0\",\"3.0\"]","SpRates:arraynum":"[\"1.0\",\"1.1\",\"1.3\",\"1.6\",\"2.0\",\"3.0\"]"}
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
 * @param Animation
 *
 * @param WalkForward:eval
 * @text Chain Walk Forward?
 * @parent Animation
 * @type boolean
 * @on Walk Forward
 * @off Don't Walk
 * @desc Does player party perform walk up animation for chain battles?
 * @default true
 *
 * @param Delay
 *
 * @param DelayFrames:num
 * @text Frames
 * @parent Delay
 * @desc How many frames should be delayed on average?
 * @default 120
 *
 * @param AllowFastFwd:eval
 * @text Allow Fast Forward?
 * @parent Delay
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow fast forwarding the delay by holding down the OK or Cancel buttons?
 * @default true
 *
 * @param Tracking
 *
 * @param TrackTotalChainVariable:num
 * @text Variable: Chains
 * @parent Tracking
 * @type variable
 * @desc Automatically tracks total chained battles.
 * Insert Variable ID '0' to not use.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Multipliers Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Multipliers:
 *
 * @param Enable:eval
 * @text Enable Multipliers?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable victory reward multipliers?
 * @default true
 * 
 * @param General
 *
 * @param ExpRates:arraynum
 * @text EXP Rates
 * @parent General
 * @type string[]
 * @desc What EXP rates do you want per total chain battles?
 * 1.0 = 100%, 1.5 = 150%
 * @default ["1.0","1.1","1.3","1.6","2.0","3.0"]
 *
 * @param GoldRates:arraynum
 * @text Gold Rates
 * @parent General
 * @type string[]
 * @desc What gold rates do you want per total chain battles?
 * 1.0 = 100%, 1.5 = 150%
 * @default ["1.0","1.1","1.3","1.6","2.0","3.0"]
 *
 * @param DropRates:arraynum
 * @text Drop Rates
 * @parent General
 * @type string[]
 * @desc What drop rates do you want per total chain battles?
 * 1.0 = 100%, 1.5 = 150%
 * @default ["1.0","1.1","1.3","1.6","2.0","3.0"]
 * 
 * @param Compatibility
 * 
 * @param ClassChange
 * @text Class Change System
 * @parent Compatibility
 * @default VisuMZ_2_ClassChangeSystem
 *
 * @param CpRates:arraynum
 * @text CP Rates
 * @parent ClassChange
 * @type string[]
 * @desc What CP rates do you want per total chain battles?
 * 1.0 = 100%, 1.5 = 150%
 * @default ["1.0","1.1","1.3","1.6","2.0","3.0"]
 *
 * @param JpRates:arraynum
 * @text JP Rates
 * @parent ClassChange
 * @type string[]
 * @desc What JP rates do you want per total chain battles?
 * 1.0 = 100%, 1.5 = 150%
 * @default ["1.0","1.1","1.3","1.6","2.0","3.0"]
 * 
 * @param SkillLearn
 * @text Skill Learn System
 * @parent Compatibility
 * @default VisuMZ_2_SkillLearnSystem
 *
 * @param ApRates:arraynum
 * @text AP Rates
 * @parent SkillLearn
 * @type string[]
 * @desc What AP rates do you want per total chain battles?
 * 1.0 = 100%, 1.5 = 150%
 * @default ["1.0","1.1","1.3","1.6","2.0","3.0"]
 *
 * @param SpRates:arraynum
 * @text SP Rates
 * @parent SkillLearn
 * @type string[]
 * @desc What SP rates do you want per total chain battles?
 * 1.0 = 100%, 1.5 = 150%
 * @default ["1.0","1.1","1.3","1.6","2.0","3.0"]
 *
 */
//=============================================================================

const _0x2e7bc8=_0x83ce;(function(_0x5d0024,_0x23bdb8){const _0x1ae46c=_0x83ce,_0x16db1e=_0x5d0024();while(!![]){try{const _0x6a006b=parseInt(_0x1ae46c(0x1f1))/0x1*(parseInt(_0x1ae46c(0x1cf))/0x2)+-parseInt(_0x1ae46c(0x1fc))/0x3*(parseInt(_0x1ae46c(0x172))/0x4)+-parseInt(_0x1ae46c(0x16a))/0x5*(-parseInt(_0x1ae46c(0x1b5))/0x6)+parseInt(_0x1ae46c(0x1f4))/0x7*(-parseInt(_0x1ae46c(0x156))/0x8)+parseInt(_0x1ae46c(0x11f))/0x9*(parseInt(_0x1ae46c(0x209))/0xa)+parseInt(_0x1ae46c(0x1ea))/0xb*(-parseInt(_0x1ae46c(0x1cb))/0xc)+parseInt(_0x1ae46c(0x1ca))/0xd*(-parseInt(_0x1ae46c(0x19a))/0xe);if(_0x6a006b===_0x23bdb8)break;else _0x16db1e['push'](_0x16db1e['shift']());}catch(_0x3c067f){_0x16db1e['push'](_0x16db1e['shift']());}}}(_0x429c,0x90d7e));var label=_0x2e7bc8(0x1eb),tier=tier||0x0,dependencies=[_0x2e7bc8(0x1fb),_0x2e7bc8(0x149)],pluginData=$plugins[_0x2e7bc8(0x200)](function(_0x32094e){const _0x3668a3=_0x2e7bc8;return _0x32094e[_0x3668a3(0x207)]&&_0x32094e[_0x3668a3(0x12d)]['includes']('['+label+']');})[0x0];function _0x83ce(_0x585be5,_0x39b42d){const _0x429c75=_0x429c();return _0x83ce=function(_0x83ce63,_0x43970e){_0x83ce63=_0x83ce63-0x11b;let _0x238021=_0x429c75[_0x83ce63];return _0x238021;},_0x83ce(_0x585be5,_0x39b42d);}VisuMZ[label][_0x2e7bc8(0x189)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x2e7bc8(0x1a8)]=function(_0x27befb,_0x2b9976){const _0x493d01=_0x2e7bc8;for(const _0x1d772f in _0x2b9976){if(_0x493d01(0x1f2)!==_0x493d01(0x1f2)){let _0xe92eaf=_0x19463d[_0x493d01(0x1a3)];while(_0xe92eaf--){this[_0x493d01(0x12e)]();}}else{if(_0x1d772f[_0x493d01(0x1d3)](/(.*):(.*)/i)){if(_0x493d01(0x185)!==_0x493d01(0x185))return _0x552285['_chainBattlebackUse']?_0x48fbcb[_0x493d01(0x142)]:_0x50fe23[_0x493d01(0x1eb)][_0x493d01(0x1b9)]['call'](this);else{const _0x399037=String(RegExp['$1']),_0x103923=String(RegExp['$2'])['toUpperCase']()[_0x493d01(0x1aa)]();let _0x1e7d31,_0x295658,_0x3f80c4;switch(_0x103923){case _0x493d01(0x1f8):_0x1e7d31=_0x2b9976[_0x1d772f]!==''?Number(_0x2b9976[_0x1d772f]):0x0;break;case _0x493d01(0x186):_0x295658=_0x2b9976[_0x1d772f]!==''?JSON[_0x493d01(0x131)](_0x2b9976[_0x1d772f]):[],_0x1e7d31=_0x295658[_0x493d01(0x1cd)](_0x14c00b=>Number(_0x14c00b));break;case'EVAL':_0x1e7d31=_0x2b9976[_0x1d772f]!==''?eval(_0x2b9976[_0x1d772f]):null;break;case'ARRAYEVAL':_0x295658=_0x2b9976[_0x1d772f]!==''?JSON['parse'](_0x2b9976[_0x1d772f]):[],_0x1e7d31=_0x295658['map'](_0x3b4411=>eval(_0x3b4411));break;case _0x493d01(0x1a0):_0x1e7d31=_0x2b9976[_0x1d772f]!==''?JSON[_0x493d01(0x131)](_0x2b9976[_0x1d772f]):'';break;case'ARRAYJSON':_0x295658=_0x2b9976[_0x1d772f]!==''?JSON[_0x493d01(0x131)](_0x2b9976[_0x1d772f]):[],_0x1e7d31=_0x295658['map'](_0x3d86e7=>JSON['parse'](_0x3d86e7));break;case _0x493d01(0x16f):_0x1e7d31=_0x2b9976[_0x1d772f]!==''?new Function(JSON['parse'](_0x2b9976[_0x1d772f])):new Function(_0x493d01(0x1d6));break;case _0x493d01(0x1a7):_0x295658=_0x2b9976[_0x1d772f]!==''?JSON[_0x493d01(0x131)](_0x2b9976[_0x1d772f]):[],_0x1e7d31=_0x295658['map'](_0x1b514a=>new Function(JSON[_0x493d01(0x131)](_0x1b514a)));break;case _0x493d01(0x1dc):_0x1e7d31=_0x2b9976[_0x1d772f]!==''?String(_0x2b9976[_0x1d772f]):'';break;case'ARRAYSTR':_0x295658=_0x2b9976[_0x1d772f]!==''?JSON[_0x493d01(0x131)](_0x2b9976[_0x1d772f]):[],_0x1e7d31=_0x295658[_0x493d01(0x1cd)](_0x1f8209=>String(_0x1f8209));break;case _0x493d01(0x1f5):_0x3f80c4=_0x2b9976[_0x1d772f]!==''?JSON[_0x493d01(0x131)](_0x2b9976[_0x1d772f]):{},_0x1e7d31=VisuMZ[_0x493d01(0x1a8)]({},_0x3f80c4);break;case _0x493d01(0x19b):_0x295658=_0x2b9976[_0x1d772f]!==''?JSON[_0x493d01(0x131)](_0x2b9976[_0x1d772f]):[],_0x1e7d31=_0x295658[_0x493d01(0x1cd)](_0x4ffbf1=>VisuMZ[_0x493d01(0x1a8)]({},JSON['parse'](_0x4ffbf1)));break;default:continue;}_0x27befb[_0x399037]=_0x1e7d31;}}}}return _0x27befb;},(_0x21debc=>{const _0x11c695=_0x2e7bc8,_0x2ad36b=_0x21debc[_0x11c695(0x12b)];for(const _0x4916a1 of dependencies){if(!Imported[_0x4916a1]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x2ad36b,_0x4916a1)),SceneManager['exit']();break;}}const _0x180dd8=_0x21debc[_0x11c695(0x12d)];if(_0x180dd8[_0x11c695(0x1d3)](/\[Version[ ](.*?)\]/i)){const _0x5e9a66=Number(RegExp['$1']);_0x5e9a66!==VisuMZ[label][_0x11c695(0x1af)]&&(alert(_0x11c695(0x11b)[_0x11c695(0x139)](_0x2ad36b,_0x5e9a66)),SceneManager[_0x11c695(0x1fa)]());}if(_0x180dd8['match'](/\[Tier[ ](\d+)\]/i)){const _0x15e2f1=Number(RegExp['$1']);if(_0x15e2f1<tier)alert(_0x11c695(0x120)[_0x11c695(0x139)](_0x2ad36b,_0x15e2f1,tier)),SceneManager[_0x11c695(0x1fa)]();else{if(_0x11c695(0x178)===_0x11c695(0x178))tier=Math[_0x11c695(0x15a)](_0x15e2f1,tier);else{const _0x3b607d=_0x439c97(_0x5a2e09['$1']);_0x3b607d<_0x53b06e?(_0x3edb2a(_0x11c695(0x120)['format'](_0x4208f8,_0x3b607d,_0x9b671)),_0x13cb53[_0x11c695(0x1fa)]()):_0x50ed24=_0x1dd1a0[_0x11c695(0x15a)](_0x3b607d,_0x3bfc2e);}}}VisuMZ['ConvertParams'](VisuMZ[label][_0x11c695(0x189)],_0x21debc[_0x11c695(0x140)]);})(pluginData),VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x18b)]=function(_0x4cd2d1,_0x5ba39b){const _0xfdf732=_0x2e7bc8,_0x3d15d={'troopId':_0x4cd2d1,'changeBattleback':_0x5ba39b[_0xfdf732(0x122)],'battleback1':_0x5ba39b['Filename1'],'battleback2':_0x5ba39b[_0xfdf732(0x1d9)]};$gameTemp['setupChainBattleSettings'](_0x3d15d);},PluginManager['registerCommand'](pluginData[_0x2e7bc8(0x12b)],_0x2e7bc8(0x1da),_0x48ca7f=>{const _0x3a1c0f=_0x2e7bc8;VisuMZ[_0x3a1c0f(0x1a8)](_0x48ca7f,_0x48ca7f);const _0x3d43cb=_0x48ca7f[_0x3a1c0f(0x141)],_0x5d8aab=_0x3d43cb[Math[_0x3a1c0f(0x1c8)](_0x3d43cb[_0x3a1c0f(0x18f)])];_0x5d8aab>0x0&&VisuMZ[_0x3a1c0f(0x1eb)][_0x3a1c0f(0x18b)](_0x5d8aab,_0x48ca7f);}),PluginManager[_0x2e7bc8(0x14e)](pluginData[_0x2e7bc8(0x12b)],_0x2e7bc8(0x123),_0x4ab684=>{const _0x42c400=_0x2e7bc8;VisuMZ[_0x42c400(0x1a8)](_0x4ab684,_0x4ab684);let _0x106276=0x0;BattleManager['isBattleTest']()?_0x106276=$gameTroop[_0x42c400(0x1ae)]:'tpgWk'!=='EjQii'?_0x106276=$gamePlayer[_0x42c400(0x1a5)]():_0x47895e=_0x116034[_0x42c400(0x15a)](_0x29acac,_0x1a2470),_0x106276>0x0&&VisuMZ['ChainBattles'][_0x42c400(0x18b)](_0x106276,_0x4ab684);}),PluginManager['registerCommand'](pluginData[_0x2e7bc8(0x12b)],_0x2e7bc8(0x187),_0x1f3433=>{const _0x29b1ee=_0x2e7bc8;VisuMZ[_0x29b1ee(0x1a8)](_0x1f3433,_0x1f3433);const _0x3e5d9a=_0x1f3433[_0x29b1ee(0x199)]();_0x3e5d9a>0x0&&VisuMZ[_0x29b1ee(0x1eb)][_0x29b1ee(0x18b)](_0x3e5d9a,_0x1f3433);}),PluginManager[_0x2e7bc8(0x14e)](pluginData[_0x2e7bc8(0x12b)],_0x2e7bc8(0x177),_0x538f5f=>{const _0x468c79=_0x2e7bc8;$gameTemp[_0x468c79(0x205)]();}),PluginManager[_0x2e7bc8(0x14e)](pluginData[_0x2e7bc8(0x12b)],'NextVictoryQueueCommonEvent',_0x5d52bc=>{const _0x26f3df=_0x2e7bc8;VisuMZ[_0x26f3df(0x1a8)](_0x5d52bc,_0x5d52bc);const _0x14c68e=_0x5d52bc['CommonEventIDs'];for(const _0x596405 of _0x14c68e){$gameTemp[_0x26f3df(0x12f)](_0x596405);}}),PluginManager['registerCommand'](pluginData['name'],_0x2e7bc8(0x192),_0x21788e=>{$gameTemp['clearChainBattleVictoryCommonEvents']();}),BattleManager['CHAIN_BATTLE_DELAY_FAST_FWD']=VisuMZ[_0x2e7bc8(0x1eb)]['Settings'][_0x2e7bc8(0x203)][_0x2e7bc8(0x1bf)],BattleManager[_0x2e7bc8(0x14d)]=VisuMZ['ChainBattles'][_0x2e7bc8(0x189)][_0x2e7bc8(0x203)][_0x2e7bc8(0x13e)],BattleManager[_0x2e7bc8(0x1a3)]=0x1,VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x1cc)]=BattleManager['initMembers'],BattleManager['initMembers']=function(){const _0x282343=_0x2e7bc8;VisuMZ[_0x282343(0x1eb)][_0x282343(0x1cc)][_0x282343(0x146)](this),this[_0x282343(0x1ab)]=![],this[_0x282343(0x1c4)]=0x0,this[_0x282343(0x161)]=![];},VisuMZ['ChainBattles'][_0x2e7bc8(0x1f7)]=BattleManager[_0x2e7bc8(0x173)],BattleManager['endBattle']=function(_0x179f11){const _0xed9b13=_0x2e7bc8;$gameTemp[_0xed9b13(0x205)](),$gameTroop[_0xed9b13(0x18d)](),VisuMZ[_0xed9b13(0x1eb)][_0xed9b13(0x1f7)]['call'](this,_0x179f11),$gameTroop[_0xed9b13(0x206)]();},VisuMZ[_0x2e7bc8(0x1eb)]['BattleManager_checkBattleEnd']=BattleManager[_0x2e7bc8(0x1c0)],BattleManager['checkBattleEnd']=function(){const _0x117c83=_0x2e7bc8;if(!this[_0x117c83(0x1ac)])return![];if(!this[_0x117c83(0x151)]()&&!$gameParty[_0x117c83(0x15d)]()&&$gameTroop[_0x117c83(0x15d)]()){if('qmgkq'===_0x117c83(0x165))_0x3b1b18[_0x117c83(0x16c)]();else{if($gameTemp['getChainBattleVictoryCommonEvents']()[_0x117c83(0x18f)]>0x0)return this[_0x117c83(0x174)](),![];const _0x4d8d8a=$gameTemp[_0x117c83(0x1a9)]();if(_0x4d8d8a)return this[_0x117c83(0x176)](),![];}}return VisuMZ[_0x117c83(0x1eb)][_0x117c83(0x170)][_0x117c83(0x146)](this);},BattleManager['setupQueuedVictoryCommonEvents']=function(){const _0x3ac8ed=_0x2e7bc8,_0x1bc624=$gameTemp[_0x3ac8ed(0x144)]();$gameTemp[_0x3ac8ed(0x13f)](_0x1bc624);},BattleManager[_0x2e7bc8(0x176)]=function(){const _0x3a6422=_0x2e7bc8;if(this['isTurnBased']()){if(_0x3a6422(0x1bb)!==_0x3a6422(0x1bb)){if(_0x2bd8fd[_0x3a6422(0x208)]()[_0x3a6422(0x18f)]>0x0)return this[_0x3a6422(0x174)](),![];const _0x51fe80=_0x3a0fcc['getChainBattleSettings']();if(_0x51fe80)return this[_0x3a6422(0x176)](),![];}else{let _0x4692e1=BattleManager[_0x3a6422(0x1a3)];while(_0x4692e1--){this['endTurn']();}}}SceneManager[_0x3a6422(0x128)][_0x3a6422(0x1e3)]();;this[_0x3a6422(0x1dd)](),this[_0x3a6422(0x1ab)]=!![],this[_0x3a6422(0x1c4)]=BattleManager[_0x3a6422(0x14d)],this[_0x3a6422(0x1c4)]<=0x0&&this['gotoChainBattle']();},BattleManager['preparePartyMembersForChainBattleTransition']=function(){const _0x2dce34=_0x2e7bc8;for(const _0x3f95e3 of $gameParty[_0x2dce34(0x12a)]()){if(!_0x3f95e3)continue;Imported[_0x2dce34(0x1c9)]&&(_0x3f95e3['_previousBattleChainBoostActions']=!![]);if(Imported[_0x2dce34(0x1e5)]){if(_0x2dce34(0x17d)!==_0x2dce34(0x17d)){if(this[_0x2dce34(0x1ab)])return;_0x59a3a3[_0x2dce34(0x1eb)][_0x2dce34(0x1b6)][_0x2dce34(0x146)](this);}else _0x3f95e3[_0x2dce34(0x1e2)]=!![];}}},VisuMZ[_0x2e7bc8(0x1eb)]['BattleManager_update']=BattleManager[_0x2e7bc8(0x1ed)],BattleManager[_0x2e7bc8(0x1ed)]=function(_0x4b980f){const _0x3897c1=_0x2e7bc8;if(this[_0x3897c1(0x1ab)]){this[_0x3897c1(0x167)]();return;}VisuMZ['ChainBattles']['BattleManager_update'][_0x3897c1(0x146)](this,_0x4b980f);},VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x19d)]=BattleManager[_0x2e7bc8(0x1d1)],BattleManager['updateTurn']=function(_0x36c9aa){const _0x2eab3f=_0x2e7bc8;if(this[_0x2eab3f(0x1ab)])return;VisuMZ[_0x2eab3f(0x1eb)][_0x2eab3f(0x19d)][_0x2eab3f(0x146)](this,_0x36c9aa);},BattleManager['updateChainBattleTransition']=function(){const _0x50dc24=_0x2e7bc8;if(BattleManager[_0x50dc24(0x1b0)]){if(_0x50dc24(0x17e)!==_0x50dc24(0x159)){if(Input[_0x50dc24(0x191)]('ok')||Input[_0x50dc24(0x191)]('cancel')||TouchInput['isPressed']()){if(_0x50dc24(0x1fd)===_0x50dc24(0x1fd))this['_chainBattleDelayDuration']-=0x3;else return this['_chainBattleQueue']?this[_0x50dc24(0x152)][0x0]:null;}}else{let _0x2147e4=_0x4472df[_0x50dc24(0x1eb)][_0x50dc24(0x164)][_0x50dc24(0x146)](this);if(_0xd83100[_0x50dc24(0x14a)]()){let _0xc3c0d4=_0x4ef807[_0x50dc24(0x1f6)](),_0x17497a=_0x3f5df7['CHAIN_BATTLE_BONUS_CP'],_0x4c778c=_0x17497a[_0xc3c0d4]??_0x17497a[_0x17497a[_0x50dc24(0x18f)]-0x1];_0x2147e4*=_0x4c778c;}return _0x3c8220['ceil'](_0x2147e4);}}this['_chainBattleDelayDuration']--<=0x0&&(_0x50dc24(0x201)!==_0x50dc24(0x179)?this[_0x50dc24(0x180)]():(_0x375c0f[_0x50dc24(0x1b0)]&&((_0x2737d7[_0x50dc24(0x191)]('ok')||_0x407486[_0x50dc24(0x191)](_0x50dc24(0x1e9))||_0x13a40e[_0x50dc24(0x191)]())&&(this[_0x50dc24(0x1c4)]-=0x3)),this[_0x50dc24(0x1c4)]--<=0x0&&this[_0x50dc24(0x180)]()));},BattleManager[_0x2e7bc8(0x180)]=function(){const _0x4e7ab6=_0x2e7bc8;SceneManager[_0x4e7ab6(0x18e)](Scene_ChainBattleTransition);},VisuMZ['ChainBattles'][_0x2e7bc8(0x134)]=BattleManager[_0x2e7bc8(0x15c)],BattleManager[_0x2e7bc8(0x15c)]=function(){const _0x4461a3=_0x2e7bc8;$gameTroop[_0x4461a3(0x132)](),VisuMZ[_0x4461a3(0x1eb)][_0x4461a3(0x134)]['call'](this);},Game_Temp[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x182)]=function(_0x2fe941){const _0x4fd37e=_0x2e7bc8;this[_0x4fd37e(0x152)]=this[_0x4fd37e(0x152)]||[],this[_0x4fd37e(0x152)][_0x4fd37e(0x1ba)](JsonEx[_0x4fd37e(0x17a)](_0x2fe941));},Game_Temp[_0x2e7bc8(0x1b3)]['clearChainBattleSettings']=function(){const _0xf25df7=_0x2e7bc8;this[_0xf25df7(0x152)]=undefined;},Game_Temp[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x1d5)]=function(){const _0x1495c1=_0x2e7bc8;this[_0x1495c1(0x152)]=this['_chainBattleQueue']||[],this[_0x1495c1(0x152)][_0x1495c1(0x202)]();},Game_Temp[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x1a9)]=function(){const _0x5a1642=_0x2e7bc8;return this['_chainBattleQueue']?this[_0x5a1642(0x152)][0x0]:null;},VisuMZ['ChainBattles'][_0x2e7bc8(0x1b6)]=Game_Temp[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x12c)],Game_Temp[_0x2e7bc8(0x1b3)]['clearForcedGameTroopSettingsCoreEngine']=function(){const _0x495bdc=_0x2e7bc8;if(this[_0x495bdc(0x1ab)])return;VisuMZ['ChainBattles'][_0x495bdc(0x1b6)]['call'](this);},VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x1e7)]=Game_Temp['prototype'][_0x2e7bc8(0x175)],Game_Temp[_0x2e7bc8(0x1b3)]['applyForcedGameTroopSettingsCoreEngine']=function(_0xa528a8){const _0x4feb88=_0x2e7bc8;if(this[_0x4feb88(0x1ab)])return;VisuMZ['ChainBattles'][_0x4feb88(0x1e7)][_0x4feb88(0x146)](this,_0xa528a8);},Game_Temp[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x12f)]=function(_0x48ddcf){const _0x175395=_0x2e7bc8;this['_chainBattleVictoryCommonEvent']=this[_0x175395(0x1a4)]||[],this[_0x175395(0x1a4)]['push'](_0x48ddcf);},Game_Temp[_0x2e7bc8(0x1b3)]['getChainBattleVictoryCommonEvents']=function(){const _0x943630=_0x2e7bc8;return this[_0x943630(0x1a4)]=this[_0x943630(0x1a4)]||[],this[_0x943630(0x1a4)];},Game_Temp[_0x2e7bc8(0x1b3)]['shiftChainBattleVictoryCommonEvents']=function(){const _0x320f64=_0x2e7bc8;return this[_0x320f64(0x1a4)]=this[_0x320f64(0x1a4)]||[],this['_chainBattleVictoryCommonEvent']['shift']()||0x0;},Game_Temp[_0x2e7bc8(0x1b3)]['clearChainBattleVictoryCommonEvents']=function(){const _0x1bd315=_0x2e7bc8;this[_0x1bd315(0x1a4)]=[];},Game_System['CHAIN_BATTLE_BONUS_ENABLE']=VisuMZ[_0x2e7bc8(0x1eb)]['Settings']['Multipliers'][_0x2e7bc8(0x1e0)],Game_System['CHAIN_BATTLE_TOTAL_VARIABLE']=VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x189)][_0x2e7bc8(0x203)]['TrackTotalChainVariable'],Game_System['prototype'][_0x2e7bc8(0x14a)]=function(){const _0x4a6752=_0x2e7bc8;return SceneManager[_0x4a6752(0x1fe)]()&&Game_System[_0x4a6752(0x13c)];},Game_System[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x127)]=function(){const _0xb40911=_0x2e7bc8;if(Game_System[_0xb40911(0x204)]<=0x0)return;if(!$gameTroop)return;const _0x4256fb=Game_System[_0xb40911(0x204)],_0x55b07d=$gameTroop['getTotalChainBattles']();$gameVariables['setValue'](_0x4256fb,_0x55b07d);},VisuMZ[_0x2e7bc8(0x1eb)]['Game_Battler_onBattleEnd']=Game_Battler[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x1bd)],Game_Battler[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x1bd)]=function(){const _0x40106c=_0x2e7bc8,_0x4d36af=$gameTemp[_0x40106c(0x1a9)]();if(_0x4d36af)return;VisuMZ['ChainBattles']['Game_Battler_onBattleEnd'][_0x40106c(0x146)](this);},VisuMZ[_0x2e7bc8(0x1eb)]['Game_Enemy_dropItemRate']=Game_Enemy[_0x2e7bc8(0x1b3)]['dropItemRate'],Game_Enemy['prototype'][_0x2e7bc8(0x19f)]=function(){const _0x55efa0=_0x2e7bc8;let _0x2f44ef=VisuMZ['ChainBattles']['Game_Enemy_dropItemRate']['call'](this);if($gameSystem['isChainBonusEnabled']()){let _0xc1128f=$gameTroop[_0x55efa0(0x1f6)](),_0x10a463=Game_Troop[_0x55efa0(0x1d4)],_0x39a59e=_0x10a463[_0xc1128f]??_0x10a463[_0x10a463[_0x55efa0(0x18f)]-0x1];_0x2f44ef*=_0x39a59e;}return _0x2f44ef;},Game_Unit[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x132)]=function(){const _0x218473=_0x2e7bc8;this[_0x218473(0x194)]=!![];},Game_Unit[_0x2e7bc8(0x1b3)]['clearCarryOverChainBattleDeadMembers']=function(){this['_carryDeadMembersFlag']=![];},VisuMZ[_0x2e7bc8(0x1eb)]['Game_Unit_deadMembers']=Game_Unit[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x138)],Game_Unit[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x138)]=function(){const _0xba82dd=_0x2e7bc8;let _0x9dc6c7=VisuMZ[_0xba82dd(0x1eb)][_0xba82dd(0x15e)][_0xba82dd(0x146)](this);if(this['constructor']===Game_Troop&&this['_carryDeadMembersFlag']){if(_0xba82dd(0x130)==='xNsuB')this[_0xba82dd(0x181)]=this['_carryOverDeadMembers']||[],_0x9dc6c7=this[_0xba82dd(0x181)][_0xba82dd(0x1ce)](_0x9dc6c7);else return this[_0xba82dd(0x1a4)]=this[_0xba82dd(0x1a4)]||[],this[_0xba82dd(0x1a4)];}return _0x9dc6c7;},Game_Troop['CHAIN_BATTLE_BONUS_EXP']=VisuMZ['ChainBattles'][_0x2e7bc8(0x189)][_0x2e7bc8(0x13b)][_0x2e7bc8(0x17f)],Game_Troop[_0x2e7bc8(0x153)]=VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x189)][_0x2e7bc8(0x13b)][_0x2e7bc8(0x1a2)],Game_Troop['CHAIN_BATTLE_BONUS_DROP_RATE']=VisuMZ['ChainBattles'][_0x2e7bc8(0x189)][_0x2e7bc8(0x13b)][_0x2e7bc8(0x1e4)],Game_Troop['CHAIN_BATTLE_BONUS_EXP'][_0x2e7bc8(0x190)](0x1),Game_Troop[_0x2e7bc8(0x153)][_0x2e7bc8(0x190)](0x1),Game_Troop[_0x2e7bc8(0x1d4)][_0x2e7bc8(0x190)](0x1),Game_Troop['CHAIN_BATTLE_BONUS_AP']=VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x189)][_0x2e7bc8(0x13b)][_0x2e7bc8(0x136)],Game_Troop[_0x2e7bc8(0x1d2)]=VisuMZ['ChainBattles']['Settings'][_0x2e7bc8(0x13b)][_0x2e7bc8(0x11d)],Game_Troop[_0x2e7bc8(0x1e6)][_0x2e7bc8(0x190)](0x1),Game_Troop['CHAIN_BATTLE_BONUS_SP'][_0x2e7bc8(0x190)](0x1),Game_Troop[_0x2e7bc8(0x1ff)]=VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x189)][_0x2e7bc8(0x13b)][_0x2e7bc8(0x1e1)],Game_Troop['CHAIN_BATTLE_BONUS_JP']=VisuMZ['ChainBattles']['Settings']['Multipliers'][_0x2e7bc8(0x184)],Game_Troop[_0x2e7bc8(0x1ff)]['unshift'](0x1),Game_Troop['CHAIN_BATTLE_BONUS_JP'][_0x2e7bc8(0x190)](0x1),VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x155)]=Game_Troop['prototype'][_0x2e7bc8(0x19c)],Game_Troop['prototype']['clear']=function(){const _0x794b25=_0x2e7bc8;VisuMZ[_0x794b25(0x1eb)][_0x794b25(0x155)][_0x794b25(0x146)](this),this[_0x794b25(0x206)]();},Game_Troop[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x206)]=function(){const _0x30a7c0=_0x2e7bc8;this[_0x30a7c0(0x181)]=[],this['_carryDeadMembersFlag']=![],this[_0x30a7c0(0x13a)]=0x0,$gameSystem[_0x30a7c0(0x127)](),this[_0x30a7c0(0x1ec)]=![],this[_0x30a7c0(0x1b1)]='',this[_0x30a7c0(0x142)]='';},Game_Troop[_0x2e7bc8(0x1b3)]['addChainBattleData']=function(_0x23b2fc){const _0x2e7d48=_0x2e7bc8;_0x23b2fc[_0x2e7d48(0x1f3)]=this[_0x2e7d48(0x1f3)]();if(BattleManager[_0x2e7d48(0x1ef)]())_0x23b2fc['turnCount']+=0x1;this[_0x2e7d48(0x181)]=this[_0x2e7d48(0x181)]||[],_0x23b2fc['deadMembers']=_0x23b2fc[_0x2e7d48(0x138)]||[],_0x23b2fc[_0x2e7d48(0x138)]=this['_carryOverDeadMembers'][_0x2e7d48(0x1ce)](_0x23b2fc[_0x2e7d48(0x138)]),_0x23b2fc['deadMembers']=_0x23b2fc[_0x2e7d48(0x138)][_0x2e7d48(0x1ce)]($gameTroop[_0x2e7d48(0x138)]()),this[_0x2e7d48(0x13a)]=this[_0x2e7d48(0x13a)]||0x1,this[_0x2e7d48(0x13a)]+=0x1,_0x23b2fc[_0x2e7d48(0x1a6)]=this[_0x2e7d48(0x13a)],$gameSystem['updateTotalChainBattlesVariable'](),_0x23b2fc[_0x2e7d48(0x188)]=this[_0x2e7d48(0x11e)],_0x23b2fc[_0x2e7d48(0x16d)]=this['_bonusRewards'];},Game_Troop[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x1f6)]=function(){const _0x18b35d=_0x2e7bc8;return this[_0x18b35d(0x13a)]=this['_chainBattleTotal']||0x1,this[_0x18b35d(0x13a)];},Game_Troop[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x1c5)]=function(_0x3e4b44){const _0x2d30dd=_0x2e7bc8;this[_0x2d30dd(0x1f0)]=_0x3e4b44[_0x2d30dd(0x1f3)],this[_0x2d30dd(0x181)]=_0x3e4b44['deadMembers'],this[_0x2d30dd(0x13a)]=_0x3e4b44[_0x2d30dd(0x1a6)]||0x1,$gameSystem['updateTotalChainBattlesVariable'](),this[_0x2d30dd(0x11e)]=_0x3e4b44['forcedRewards'],this['_bonusRewards']=_0x3e4b44['bonusRewards'],this[_0x2d30dd(0x1ec)]=_0x3e4b44[_0x2d30dd(0x14b)],this[_0x2d30dd(0x1b1)]=_0x3e4b44['battleback1'],this[_0x2d30dd(0x142)]=_0x3e4b44[_0x2d30dd(0x158)];if(BattleManager['isTpb']()){if(_0x2d30dd(0x198)===_0x2d30dd(0x157))_0x25d092[_0x2d30dd(0x18e)](_0x5dda54);else for(const _0x428669 of this['members']()){if(_0x2d30dd(0x14f)!==_0x2d30dd(0x15b)){if(!_0x428669)continue;_0x428669['_tpbTurnCount']=this[_0x2d30dd(0x1f0)];}else return _0x7fc98f[_0x2d30dd(0x1b1)];}}},Game_Troop[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x1be)]=function(){const _0x55658e=_0x2e7bc8;$gameTemp[_0x55658e(0x1de)]()&&console[_0x55658e(0x171)](this[_0x55658e(0x138)]()[_0x55658e(0x1cd)](_0x171ddb=>_0x171ddb[_0x55658e(0x12b)]()));},VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x1ad)]=Game_Troop[_0x2e7bc8(0x1b3)]['expRate'],Game_Troop[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x197)]=function(){const _0x344ab7=_0x2e7bc8;let _0x24e351=VisuMZ[_0x344ab7(0x1eb)][_0x344ab7(0x1ad)][_0x344ab7(0x146)](this);if($gameSystem[_0x344ab7(0x14a)]()){if('pRYsa'===_0x344ab7(0x124)){_0x31b771[_0x344ab7(0x1a8)](_0x4262e5,_0x315f9f);const _0x50e27a=_0x1e0a8d[_0x344ab7(0x1bc)];for(const _0x5e4b08 of _0x50e27a){_0x37e9a0['queueChainBattleVictoryCommonEvent'](_0x5e4b08);}}else{let _0x53e3dd=$gameTroop['getTotalChainBattles'](),_0x1144eb=Game_Troop[_0x344ab7(0x129)],_0x5aa942=_0x1144eb[_0x53e3dd]??_0x1144eb[_0x1144eb[_0x344ab7(0x18f)]-0x1];_0x24e351*=_0x5aa942;}}return Math[_0x344ab7(0x125)](_0x24e351);},VisuMZ[_0x2e7bc8(0x1eb)]['Game_Troop_goldRate']=Game_Troop[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x1e8)],Game_Troop[_0x2e7bc8(0x1b3)]['goldRate']=function(){const _0x157b29=_0x2e7bc8;let _0x520b73=VisuMZ[_0x157b29(0x1eb)][_0x157b29(0x193)][_0x157b29(0x146)](this);if($gameSystem[_0x157b29(0x14a)]()){if(_0x157b29(0x133)!=='vNvjP'){let _0x502d04=$gameTroop[_0x157b29(0x1f6)](),_0x26d018=Game_Troop[_0x157b29(0x153)],_0x26b2e3=_0x26d018[_0x502d04]??_0x26d018[_0x26d018[_0x157b29(0x18f)]-0x1];_0x520b73*=_0x26b2e3;}else{let _0xce2b51=_0x1db89f[_0x157b29(0x1eb)][_0x157b29(0x16b)][_0x157b29(0x146)](this);if(_0x20724d[_0x157b29(0x14a)]()){let _0x2e1043=_0x548113[_0x157b29(0x1f6)](),_0x49f7c6=_0x1d2589[_0x157b29(0x1d4)],_0x1ca984=_0x49f7c6[_0x2e1043]??_0x49f7c6[_0x49f7c6['length']-0x1];_0xce2b51*=_0x1ca984;}return _0xce2b51;}}return _0x520b73;},VisuMZ['ChainBattles'][_0x2e7bc8(0x18c)]=Game_Troop[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x17c)],Game_Troop[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x17c)]=function(){const _0xa0c5d1=_0x2e7bc8;let _0x1f00d9=VisuMZ['ChainBattles'][_0xa0c5d1(0x18c)]['call'](this);if($gameSystem[_0xa0c5d1(0x14a)]()){let _0x4a100c=$gameTroop[_0xa0c5d1(0x1f6)](),_0x2012cc=Game_Troop[_0xa0c5d1(0x1e6)],_0x2a6457=_0x2012cc[_0x4a100c]??_0x2012cc[_0x2012cc[_0xa0c5d1(0x18f)]-0x1];_0x1f00d9*=_0x2a6457;}return Math['ceil'](_0x1f00d9);},VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x1a1)]=Game_Troop[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x147)],Game_Troop[_0x2e7bc8(0x1b3)]['skillPointsTotal']=function(){const _0x249660=_0x2e7bc8;let _0x297137=VisuMZ['ChainBattles']['Game_Troop_skillPointsTotal']['call'](this);if($gameSystem['isChainBonusEnabled']()){let _0x148641=$gameTroop[_0x249660(0x1f6)](),_0x1fb319=Game_Troop[_0x249660(0x1d2)],_0x4d335c=_0x1fb319[_0x148641]??_0x1fb319[_0x1fb319['length']-0x1];_0x297137*=_0x4d335c;}return Math[_0x249660(0x125)](_0x297137);},VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x164)]=Game_Troop[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x11c)],Game_Troop[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x11c)]=function(){const _0x10e214=_0x2e7bc8;let _0x40e4ee=VisuMZ[_0x10e214(0x1eb)][_0x10e214(0x164)][_0x10e214(0x146)](this);if($gameSystem['isChainBonusEnabled']()){let _0x23ec44=$gameTroop[_0x10e214(0x1f6)](),_0x32b0af=Game_Troop[_0x10e214(0x1ff)],_0xdcb052=_0x32b0af[_0x23ec44]??_0x32b0af[_0x32b0af[_0x10e214(0x18f)]-0x1];_0x40e4ee*=_0xdcb052;}return Math[_0x10e214(0x125)](_0x40e4ee);},VisuMZ['ChainBattles'][_0x2e7bc8(0x1df)]=Game_Troop['prototype']['jobPointsTotal'],Game_Troop['prototype'][_0x2e7bc8(0x137)]=function(){const _0xad0bb9=_0x2e7bc8;let _0x536a8b=VisuMZ['ChainBattles'][_0xad0bb9(0x1df)][_0xad0bb9(0x146)](this);if($gameSystem[_0xad0bb9(0x14a)]()){let _0x23290e=$gameTroop[_0xad0bb9(0x1f6)](),_0x24b9b3=Game_Troop[_0xad0bb9(0x16e)],_0x3ef929=_0x24b9b3[_0x23290e]??_0x24b9b3[_0x24b9b3[_0xad0bb9(0x18f)]-0x1];_0x536a8b*=_0x3ef929;}return Math[_0xad0bb9(0x125)](_0x536a8b);},VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x1c7)]=Scene_Battle[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x1b2)],Scene_Battle['prototype'][_0x2e7bc8(0x1b2)]=function(){const _0x12403a=_0x2e7bc8;if(BattleManager[_0x12403a(0x1ab)])return!![];return VisuMZ['ChainBattles'][_0x12403a(0x1c7)][_0x12403a(0x146)](this);},Scene_Battle[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x1e3)]=function(){const _0x4c990e=_0x2e7bc8,_0x4fa011=[this['_partyCommandWindow'],this[_0x4c990e(0x145)],this[_0x4c990e(0x163)],this[_0x4c990e(0x126)],this[_0x4c990e(0x196)],this['_enemyWindow']];for(const _0x5acf12 of _0x4fa011){if('hyJRq'==='hyJRq')_0x5acf12['active']&&(_0x5acf12[_0x4c990e(0x14c)](),_0x5acf12[_0x4c990e(0x166)]());else return _0x523b84['ChainBattles'][_0x4c990e(0x1b9)]['call'](this);}};function Scene_ChainBattleTransition(){const _0x9ac32b=_0x2e7bc8;this[_0x9ac32b(0x143)](...arguments);}function _0x429c(){const _0x3e2f45=['_scene','CHAIN_BATTLE_BONUS_EXP','allMembers','name','clearForcedGameTroopSettingsCoreEngine','description','endTurn','queueChainBattleVictoryCommonEvent','xNsuB','parse','addCarryOverChainBattleDeadMembers','xxRGv','BattleManager_makeRewards','aJNyA','ApRates','jobPointsTotal','deadMembers','format','_chainBattleTotal','Multipliers','CHAIN_BATTLE_BONUS_ENABLE','battleback2Name','DelayFrames','reserveCommonEvent','parameters','TroopIDs','_chainBattleback2','initialize','shiftChainBattleVictoryCommonEvents','_actorCommandWindow','call','skillPointsTotal','setEventCallback','VisuMZ_1_BattleCore','isChainBonusEnabled','changeBattleback','deactivate','CHAIN_BATTLE_DELAY_FRAMES','registerCommand','RVcqo','battleback1Name','checkAbort','_chainBattleQueue','CHAIN_BATTLE_BONUS_GOLD','goToBattleScene','Game_Troop_clear','4458472jJyobC','LPVDi','battleback2','DRkTY','max','bfJiu','makeRewards','isAllDead','Game_Unit_deadMembers','troopId','setup','_chainBattleFlag','_canLose','_skillWindow','Game_Troop_classPointsTotal','lxBHs','close','updateChainBattleTransition','BattleCore','start','5305JfPfGU','Game_Enemy_dropItemRate','clearChainBattleVictoryCommonEvents','bonusRewards','CHAIN_BATTLE_BONUS_JP','FUNC','BattleManager_checkBattleEnd','log','12Krpmll','endBattle','setupQueuedVictoryCommonEvents','applyForcedGameTroopSettingsCoreEngine','setupChainBattle','ChainBattleClear','lGzYT','YLcHf','makeDeepCopy','getBattleSystem','abilityPointsTotal','xBhLP','WvmsL','ExpRates','gotoChainBattle','_carryOverDeadMembers','setupChainBattleSettings','WalkForward','JpRates','EEdIK','ARRAYNUM','ChainBattleQueueJavaScript','forcedRewards','Settings','setupNextChainBattle','SetupChainBattles','Game_Troop_abilityPointsTotal','clearCarryOverChainBattleDeadMembers','goto','length','unshift','isPressed','NextVictoryClearCommonEventQueue','Game_Troop_goldRate','_carryDeadMembersFlag','battleLayout','_actorWindow','expRate','MIxpH','calcTroopID','279454qEdRBf','ARRAYSTRUCT','clear','BattleManager_updateTurn','battleSys','dropItemRate','JSON','Game_Troop_skillPointsTotal','GoldRates','CHAIN_BATTLE_TURN_COUNT_ADVANCE','_chainBattleVictoryCommonEvent','makeEncounterTroopId','chainBattleTotal','ARRAYFUNC','ConvertParams','getChainBattleSettings','trim','_chainBattleTransition','_phase','Game_Troop_expRate','_troopId','version','CHAIN_BATTLE_DELAY_FAST_FWD','_chainBattleback1','isAnyInputWindowActive','prototype','isBattleTest','5718SDtcTF','Game_Temp_clearForcedGameTroopSettingsCoreEngine','_eventCallback','create','Sprite_Battleback_battleback2Name','push','gjiKN','CommonEventIDs','onBattleEnd','debugChainBattleDeadMemberList','AllowFastFwd','checkBattleEnd','constructor','setBattleTest','zswpZ','_chainBattleDelayDuration','carryOverChainBattleData','moveToStartPositionBattleCore','Scene_Battle_isAnyInputWindowActive','randomInt','VisuMZ_3_BoostAction','91ObIXpT','12DCtJOu','BattleManager_initMembers','map','concat','1446wtPRwZ','Style','updateTurn','CHAIN_BATTLE_BONUS_SP','match','CHAIN_BATTLE_BONUS_DROP_RATE','shiftChainBattleQueue','return\x200','Sprite_Battleback_battleback1Name','_forcedBattleSys','Filename2','ChainBattleQueueTroop','lakvr','STR','preparePartyMembersForChainBattleTransition','isPlaytest','Game_Troop_jobPointsTotal','Enable','CpRates','_previousBattleChain','closeChainBattleWindows','DropRates','VisuMZ_3_SkillCooldowns','CHAIN_BATTLE_BONUS_AP','Game_Temp_applyForcedGameTroopSettingsCoreEngine','goldRate','cancel','5897881eMJXKK','ChainBattles','_chainBattlebackUse','update','_canEscape','isTpb','_turnCount','1623CERZRI','qxZYt','turnCount','7fQJLWT','STRUCT','getTotalChainBattles','BattleManager_endBattle','NUM','Sprite_Actor_moveToStartPositionBattleCore','exit','VisuMZ_0_CoreEngine','689184eiOcrJ','FwQxc','isSceneBattle','CHAIN_BATTLE_BONUS_CP','filter','hOqhb','shift','General','CHAIN_BATTLE_TOTAL_VARIABLE','clearChainBattleSettings','clearChainBattleData','status','getChainBattleVictoryCommonEvents','1103690UQeOSR','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','classPointsTotal','SpRates','_forcedRewards','27ZTDahz','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','addChainBattleData','ChangeBattleback','ChainBattleQueueEncounter','wLBVq','ceil','_itemWindow','updateTotalChainBattlesVariable'];_0x429c=function(){return _0x3e2f45;};return _0x429c();}Scene_ChainBattleTransition['prototype']=Object[_0x2e7bc8(0x1b8)](Scene_Base['prototype']),Scene_ChainBattleTransition[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x1c1)]=Scene_ChainBattleTransition,Scene_ChainBattleTransition[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x143)]=function(){const _0x2d9f3e=_0x2e7bc8;Scene_Base[_0x2d9f3e(0x1b3)]['initialize'][_0x2d9f3e(0x146)](this);},Scene_ChainBattleTransition[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x169)]=function(){const _0x351c3e=_0x2e7bc8;Scene_Base[_0x351c3e(0x1b3)][_0x351c3e(0x169)][_0x351c3e(0x146)](this),this[_0x351c3e(0x121)](),this['setupNextChainBattle'](),this[_0x351c3e(0x1c5)](),this[_0x351c3e(0x154)]();},Scene_ChainBattleTransition[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x121)]=function(){const _0xf0aea1=_0x2e7bc8,_0x32443a=$gameTemp['getChainBattleSettings']();$gameTroop[_0xf0aea1(0x121)](_0x32443a),_0x32443a[_0xf0aea1(0x19e)]=$gameSystem[_0xf0aea1(0x17b)](),_0x32443a[_0xf0aea1(0x195)]=$gameTemp['_forcedBattleLayout']||VisuMZ[_0xf0aea1(0x168)][_0xf0aea1(0x189)]['BattleLayout'][_0xf0aea1(0x1d0)]['toLowerCase']()[_0xf0aea1(0x1aa)](),$gameTemp[_0xf0aea1(0x1ab)]=!![];},Scene_ChainBattleTransition['prototype'][_0x2e7bc8(0x18a)]=function(){const _0x3a04b3=_0x2e7bc8,_0x24d504=$gameTemp[_0x3a04b3(0x1a9)](),_0x199587=_0x24d504[_0x3a04b3(0x15f)],_0x566ff7=BattleManager[_0x3a04b3(0x1ee)],_0x32ef2e=BattleManager[_0x3a04b3(0x162)],_0x250c5d=BattleManager[_0x3a04b3(0x1b4)](),_0x5ab557=BattleManager[_0x3a04b3(0x1b7)];BattleManager[_0x3a04b3(0x160)](_0x199587,_0x566ff7,_0x32ef2e),BattleManager[_0x3a04b3(0x1c2)](_0x250c5d),BattleManager[_0x3a04b3(0x148)](_0x5ab557),BattleManager[_0x3a04b3(0x161)]=!![];},Scene_ChainBattleTransition['prototype'][_0x2e7bc8(0x1c5)]=function(){const _0x2c1387=_0x2e7bc8,_0x35a4c4=$gameTemp[_0x2c1387(0x1a9)]();$gameTroop[_0x2c1387(0x1c5)](_0x35a4c4),$gameTemp[_0x2c1387(0x1d8)]=_0x35a4c4[_0x2c1387(0x19e)],$gameTemp['_forcedBattleLayout']=_0x35a4c4[_0x2c1387(0x195)];},Scene_ChainBattleTransition[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x154)]=function(){const _0x3c5dfe=_0x2e7bc8;$gameTemp['shiftChainBattleQueue'](),SceneManager[_0x3c5dfe(0x18e)](Scene_Battle),$gameTemp[_0x3c5dfe(0x1ab)]=![];},VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x1f9)]=Sprite_Actor[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x1c6)],Sprite_Actor['prototype'][_0x2e7bc8(0x1c6)]=function(_0x2e56ed){const _0x1d9e50=_0x2e7bc8;if(BattleManager['_chainBattleFlag']){if(_0x1d9e50(0x135)===_0x1d9e50(0x1db))_0x1d0bce[_0x1d9e50(0x1de)]()&&_0x2294dc[_0x1d9e50(0x171)](this[_0x1d9e50(0x138)]()[_0x1d9e50(0x1cd)](_0x31bb3c=>_0x31bb3c[_0x1d9e50(0x12b)]()));else{const _0x2fc7aa=VisuMZ[_0x1d9e50(0x1eb)]['Settings']['General'][_0x1d9e50(0x183)]??!![];if(!_0x2fc7aa)return;}}VisuMZ['ChainBattles'][_0x1d9e50(0x1f9)]['call'](this,_0x2e56ed);},VisuMZ[_0x2e7bc8(0x1eb)]['Sprite_Battleback_battleback1Name']=Sprite_Battleback[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x150)],Sprite_Battleback[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x150)]=function(){const _0x31c752=_0x2e7bc8;if($gameTroop[_0x31c752(0x1ec)])return $gameTroop[_0x31c752(0x1b1)];else{if('zswpZ'===_0x31c752(0x1c3))return VisuMZ[_0x31c752(0x1eb)][_0x31c752(0x1d7)]['call'](this);else{if(this['_chainBattleTransition'])return;_0x14fe78[_0x31c752(0x1eb)][_0x31c752(0x19d)][_0x31c752(0x146)](this,_0x305c42);}}},VisuMZ[_0x2e7bc8(0x1eb)][_0x2e7bc8(0x1b9)]=Sprite_Battleback[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x13d)],Sprite_Battleback[_0x2e7bc8(0x1b3)][_0x2e7bc8(0x13d)]=function(){const _0x2132d4=_0x2e7bc8;return $gameTroop[_0x2132d4(0x1ec)]?$gameTroop['_chainBattleback2']:VisuMZ['ChainBattles']['Sprite_Battleback_battleback2Name']['call'](this);};