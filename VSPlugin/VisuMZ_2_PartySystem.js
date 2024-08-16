//=============================================================================
// VisuStella MZ - Party System
// VisuMZ_2_PartySystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_PartySystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.PartySystem = VisuMZ.PartySystem || {};
VisuMZ.PartySystem.version = 1.30;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.30] [PartySystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Party_System_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ only gives game projects the ability to switch party members
 * within the main menu and nothing more. There's no inherent functionality to
 * lock party members, make party members required, and/or give players the
 * ability to switch party members mid-battle.
 *
 * This plugin will add in all of those functions as well as a dedicated scene
 * for switching party members. Party switching will allow party members to be
 * removed, swapped, and sorted. Through the usage of Plugin Commands, party
 * members can also be locked and/or required for party presence.
 *
 * Those using the VisuStella MZ Battle Core will also have access to features
 * in this plugin that aren't available otherwise. These features give players
 * the functionality to switch out the whole party lineup mid-battle and/or
 * individual party member switching.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Custom scene dedicated to party management.
 * * Change the maximum number of party members that can participate in battle.
 * * Plugin Commands to lock party members.
 * * Plugin Commands to make certain party members required.
 * * Added functionality with Battle Core to switch party members mid-battle.
 * * This comes in the form of changing either the whole party at once.
 * * Or switching individual members out one at a time.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
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
 * Main Menu Formation Command
 *
 * - This command is now changed to send the player to Scene_Party for the
 * player to have a dedicated scene for changing the party.
 *
 * ---
 *
 * Battle Members Array
 *
 * - Previously, the battle members are decided by which actors are lined up
 * first in the party roster. This has been changed to give players the freedom
 * to have a party size less than the maximum. This change is made by changing
 * the way the battle members are determined by using a new array. However, any
 * and all functions utilize the $gameParty.battleMembers() function will still
 * behave as normal.
 *
 * ---
 *
 * Formation Change OK Function
 *
 * - RPG Maker MZ did not do anything with the Game_Actor.isFormationChangeOk
 * function so this plugin overwrote it completely to allow for the new
 * lock and require features to work.
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
 * VisuMZ_1_BattleCore
 *
 * - If the VisuStella MZ Battle Core plugin is present, players are able to 
 * access party switching functionality mid-battle at will. This can be in the
 * form of switching out the entire active party roster at once or individually
 * for each actor.
 *
 * - Switching Entire Rosters: This can be done by going into this plugin's
 * Plugin Parameters => General => Party Command Window => Add Party Command.
 * If the Party Command Window is accessible, the player will be able to see
 * the option between 'Auto Battle' and 'Options'.
 *
 * - Individual Member Switching: This requires going to VisuMZ_1_BattleCore's
 * Plugin Parameters => Actor Command Window => Battle Commands => Command List
 * and add in the "party" option. The "party" option can also be added to the
 * <Battle Commands> notetag.
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
 * VisuMZ_2_BattleSystemOTB
 * 
 * With Battle System - OTB, the player cannot change entire parties at once
 * from the Party Command Window. The feature will be unaccessible while
 * Order Turn Battle is in play. However, the player can still change party
 * members through the Actor Command Window by having actors replace other
 * actors. Party changing is also available through battle events, Common
 * Events, and script calls.
 * 
 * ---
 * 
 * VisuMZ_2_BattleSystemSTB
 * 
 * With Battle System - STB, the player cannot change entire parties at once
 * from the Party Command Window. The feature will be unaccessible while
 * Standard Turn Battle is in play. However, the player can still change party
 * members through the Actor Command Window by having actors replace other
 * actors. Party changing is also available through battle events, Common
 * Events, and script calls.
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
 * === Party Plugin Commands ===
 * 
 * ---
 *
 * Party: Call Party Scene
 * - Calls the party changing scene.
 *
 * ---
 *
 * Party: Change Max Battle Members
 * - Changes the number of max battle members possible.
 * - Cannot be use mid-battle.
 *
 *   Max Members:
 *   - Changes the number of max battle members possible.
 *   - Use 0 for the game's default number.
 *
 * ---
 *
 * Party: Lock/Unlock Member(s)
 * - Allows you to lock/unlock a party member.
 * - Locked actors cannot change their party position.
 *
 *   Actor ID(s):
 *   - Select which actor(s) to lock/unlock.
 *   - Locked actors cannot change their party position.
 *
 *   Lock?:
 *   - Lock the selected actor(s)?
 *
 * ---
 * 
 * Party: Move Actor(s) to Active
 * - Map Only.
 * - Moves an actor to the active party if there is room.
 * - The actor needs to have joined the party.
 * 
 *   Actor ID(s):
 *   - Select which actor(s) to move to the active party if there is room.
 * 
 * ---
 * 
 * Party: Move Actor(s) to Reserve
 * - Map Only.
 * - Moves an actor to the reserve party.
 * - Must be 1 actor left.
 * - The actor needs to have joined the party.
 * 
 *   Actor ID(s):
 *   - Select which actor(s) to move to the reserve party.
 * 
 * ---
 * 
 * Party: Move Party Index to Reserve
 * - Map only.
 * - Moves an actor in a specific party index to reserve.
 * - Must be 1 actor left.
 * 
 *   Index:
 *   - Type in which index to move.
 *   - Index values start at 0.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * Party: Move Random Reserve to Active
 * - Map only.
 * - Moves a random actor from the reserve party to active.
 * - Must be enough space in active party.
 * 
 * ---
 *
 * Party: Require Member(s)
 * - Allows you to require/free a party member.
 * - Required actors must be in the party to exit the scene.
 *
 *   Actor ID(s):
 *   - Select which actor(s) to require/free.
 *   - Required actors must be in the party to exit the scene.
 *
 *   Require?:
 *   - Make the selected actor(s) required?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These Plugin Parameters control the overall behaviors pertaining to the
 * Party System added with this plugin. These behaviors range from the maximum
 * number of members that can participate in battle to the availability of the
 * party switching mechanics.
 *
 * ---
 *
 * General
 * 
 *   Max Battle Members:
 *   - Maximum number of battle members.
 *
 * ---
 *
 * Party Scene
 * 
 *   Add Remove Command:
 *   - Add the 'Remove' command to the party scene?
 * 
 *   Locked Member Icon:
 *   - Icon used for a locked party member.
 * 
 *   Required Member Icon:
 *   - Icon used for a required party member.
 *
 * ---
 *
 * Party Command Window
 * - These require VisuMZ_1_BattleCore!
 * 
 *   Add Party Command:
 *   - Add the 'Party' command to the Party Command Window?
 * 
 *   Command Cooldown:
 *   - Cooldown (in turns) for this command to be available again.
 *
 * ---
 *
 * Actor Command Window
 * - These require VisuMZ_1_BattleCore!
 * 
 *   Add Switch Command:
 *   - Add the 'Switch' command to the Actor Command Window?
 * 
 *   Command Cooldown:
 *   - Cooldown (in turns) for this command to be available again.
 * 
 *   Switch Out Animation?:
 *   - Show the sprites switching out when using individual party
 *     member switching?
 * 
 *   TPB: Immediate Action:
 *   - Allow actors to immediate act upon switching in for TPB battle systems?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These Plugin Parameters control the text that you see in-game related to the
 * Party System plugin.
 *
 * ---
 *
 * General
 * 
 *   Active Party:
 *   - Vocabulary used to represent the Active Party.
 * 
 *   Reserve Party:
 *   - Vocabulary used to represent the Reserve Party.
 * 
 *   Status:
 *   - Vocabulary used to represent the Status Window.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Party Scene > Windows
 * 
 *   Empty:
 *   - For the party and status windows when no actor is selected.
 * 
 *   Remove:
 *   - For the remove option.
 *
 * ---
 *
 * Party Scene > Button Assist
 * 
 *   Swap Positions:
 *   - Button assist text for the page up/down commands.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Remove:
 *   - Button assist text for the removal command.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Sort:
 *   - Button assist text for the sort command.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Swap In:
 *   - Button assist text for swapping in actors.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Swap Out:
 *   - Button assist text for swapping out actors.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Battle Scene
 * 
 *   Party Command:
 *   - Command text for entering Party Scene.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Help: Formation:
 *   - Help text for Formation command.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Queue Message:
 *   - Message to say the Party Scene is queued.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Switch Command:
 *   - Command text for switching out members.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Help: Switch:
 *   - Help text for Switch command.
 *   - Requires VisuMZ_1_BattleCore!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_Party.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * If you don't like the locations of the windows in Scene_Party, change them
 * up with these Plugin Parameters, provided that you have an understanding of
 * JavaScript code.
 *
 * ---
 *
 * Active Party Label
 * Active Party Window
 * Reserve Party Label
 * Reserve Party Window
 * Status Label
 * Status Window
 * Battle Switch Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Columns:
 *   - Available only for the Reserve Party Window.
 *   - How many columns do you want there to be for the window?
 * 
 *   Actor Graphic:
 *   - Available only for Active Party Window and Reserve Party Window.
 *   - Choose how the actor graphics appear in the specific windows.
 *     - Face
 *     - Map Sprite
 *     - Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * 
 *     Map Sprite:
 *     Sideview Battler:
 * 
 *       Offset X:
 *       Offset Y:
 *       - If showing map sprites, offset the x or y coordinates.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
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
 * Version 1.30: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where party changes with FTB, ETB, and PTB did not replace
 *    the newely added party member on the turn order timeline. Fix by Olivia.
 * 
 * Version 1.29: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where party changes with PTB did not register correctly.
 *    Fix made by Olivia.
 * 
 * Version 1.28: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: February 16, 2023
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * Feature Update!
 * ** When holding the "up" keyboard button with the reserve window active, the
 *    return to the active party window will no longer happen unless the "up"
 *    key is released and then pressed again. Update made by Olivia.
 * 
 * Version 1.26: January 20, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.25: July 28, 2022
 * * Bug Fixes!
 * ** Changing party members via actor command with a less than max battle size
 *    after removing a middle member midway through battle will no longer cause
 *    weird results when switching. Fix made by Arisu.
 * ** Party members that were switched out during battle animations with active
 *    TPB/ATB will no longer cause damage popup crashes when switched back in a
 *    follow up battle. Fix made by Arisu.
 * 
 * Version 1.24: March 24, 2022
 * * Compatibility Update!
 * ** Compatibility update with Skills & States Core Passive Conditions
 *    involving the party leader. Update made by Arisu.
 * 
 * Version 1.23: January 13, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: July 16, 2021
 * * Feature Update!
 * ** Added a fail safe that prevents on-battle start events from triggering
 *    when adding party members outside of battle under evented circumstances
 *    that function as a bridge between event and battle. Fix by Irina.
 * 
 * Version 1.21: July 9, 2021
 * * Bug Fixes!
 * ** When using TPB-based battle systems, adding actors to the main party
 *    would not enable them to move. This should be fixed. Fix made by Irina.
 * 
 * Version 1.20: July 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.19: June 18, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.18: April 16, 2021
 * * Documentation Update!
 * ** Fixed typo. Fix made by Arisu.
 * 
 * Version 1.17: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_2_BattleSystemOTB plugin.
 * 
 * Version 1.16: March 19, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.15: March 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Gneral > Battle Scene > Battle Party Icon
 * **** For some reason, we never had a setting that lets you change the party
 *      icon. Well, now there is!
 * 
 * Version 1.14: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Party: Move Party Index to Reserve
 * **** Moves an actor in a specific party index to reserve.
 *      Map only. Must be 1 actor left. You may use code.
 * *** Party: Move Random Reserve to Active
 * **** Moves a random actor from the reserve party to active.
 *      Map only. Must be enough space in active party.
 * 
 * Version 1.13: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Party: Move Actor(s) to Active
 * **** Map only. Moves an actor to the active party if there is room.
 * *** Party: Move Actor(s) to Reserve
 * **** Map only. Moves an actor to the reserve party.
 * 
 * Version 1.12: January 15, 2021
 * * Bug Fixes!
 * ** For battle testing, if the number of battle test members exceeds the
 *    maximum battle member slots, trim them until they match. Fix by Olivia.
 * 
 * Version 1.11: January 1, 2021
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.10: December 25, 2020
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.09: December 18, 2020
 * * Bug Fixes!
 * ** Removing party members in the active party by event command will now be
 *    properly removed from the party. Fix made by Yanfly.
 * 
 * Version 1.08: December 4, 2020
 * * Bug Fixes!
 * ** With TPB battle systems, after switching out party members, the battle
 *    system will no longer carry over any previous active battle members in
 *    the command window. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: November 22, 2020
 * * Bug Fixes!
 * ** With Active TPB, switching out a party member mid-action is no longer
 *    possible to prevent bugs. Intead, there party switching action will be
 *    queued and take effect after the action has been completed. Fix made by
 *    Yanfly.
 * * Compatibility Update!
 * ** Game_Party.swapOrder function now works with this plugin. However, keep
 *    in mind that due to how this party system plugin allows you have empty
 *    slots in the active battle party, this function will fill in the empty
 *    slots upon usage. Update made by Yanfly.
 *
 * Version 1.06: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.05: October 25, 2020
 * * Bug Fixes!
 * ** Plugin Command "Party: Change Max Battle Members" now works again.
 *    Fix made by Arisu.
 *
 * Version 1.04: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.03: October 11, 2020
 * * Bug Fixes!
 * ** Adding party members during battle through the party window command will
 *    no longer cause crashes after they input an action. Fix made by Yanfly.
 * 
 * Version 1.02: October 4, 2020
 * * Bug Fixes!
 * ** Adding party members during test play should now work again.
 *    Fix made by Irina.
 * ** Changing party members mid-battle through the actor command should now
 *    refresh the party followers afterwards. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Arisu!
 * *** General > Party Command Window > TPB: Immediate Action
 * **** Allow actors to immediate act upon switching in for TPB battle systems?
 * 
 * Version 1.01: September 27, 2020
 * * Bug Fixes!
 * ** When switching actors with states, buffs, and/or debuffs already applied,
 *    the state icons found in the status window will now switch over properly,
 *    too. Fix made by Arisu.
 *
 * Version 1.00: September 7, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallPartyScene
 * @text Party: Call Party Scene
 * @desc Calls the party changing scene.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeMaxBattleMembers
 * @text Party: Change Max Battle Members
 * @desc Changes the number of max battle members possible.
 * Cannot be use mid-battle.
 *
 * @arg Value:eval
 * @text Max Members
 * @desc Changes the number of max battle members possible.
 * Use 0 for the game's default number.
 * @default 4
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LockPartyMembers
 * @text Party: Lock/Unlock Member(s)
 * @desc Allows you to lock/unlock a party member.
 * Locked actors cannot change their party position.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to lock/unlock.
 * Locked actors cannot change their party position.
 * @default ["1"]
 * 
 * @arg Lock:eval
 * @text Lock?
 * @type boolean
 * @on Lock
 * @off Unlock
 * @desc Lock the selected actor(s)?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveActorsToActive
 * @text Party: Move Actor(s) to Active
 * @desc Moves an actor to the active party if there is room.
 * Map only. The actor needs to have joined the party.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to move to the active party if there is room.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveActorsToReserve
 * @text Party: Move Actor(s) to Reserve
 * @desc Moves an actor to the reserve party. Must be 1 actor left.
 * Map only. The actor needs to have joined the party.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to move to the reserve party.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MovePartyIndexToReserve
 * @text Party: Move Party Index to Reserve
 * @desc Moves an actor in a specific party index to reserve.
 * Map only. Must be 1 actor left.
 *
 * @arg Index:eval
 * @text Party Index
 * @desc Type in which index to move. Index values start at 0.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveRandomToActive
 * @text Party: Move Random Reserve to Active
 * @desc Moves a random actor from the reserve party to active.
 * Map only. Must be enough space in active party.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RequirePartyMembers
 * @text Party: Require Member(s)
 * @desc Allows you to require/free a party member.
 * Required actors must be in the party to exit the scene.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to require/free.
 * Required actors must be in the party to exit the scene.
 * @default ["1"]
 * 
 * @arg Require:eval
 * @text Require?
 * @type boolean
 * @on Require
 * @off Don't Require
 * @desc Make the selected actor(s) required?
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
 * @param PartySystem
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
 * @desc General settings pertaining to Party-related mechanics.
 * @default {"General":"","MaxBattleMembers:num":"4","PartyScene":"","AddRemoveCmd:eval":"true","LockIcon:num":"195","RequireIcon:num":"87","DrawBackRect:eval":"true","BackRectColor:str":"19","PartyCmdWin":"","PartyCmdWinAddParty:eval":"false","PartyCmdCooldown:num":"1","tpbImmediateAction:eval":"true","ActorCmdWin":"","ActorCmdWinAddParty:eval":"true","ActorCmdCooldown:num":"1","SwitchOutAnimation:eval":"true"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"General":"","ActiveParty:str":"Active Party","ReserveParty:str":"Reserve Party","Status:str":"Status","PartyScene":"","Windows":"","Empty:str":"- Empty -","Remove:str":"Remove","ButtonAssist":"","AssistSwapPosition:str":"Quick Swap","AssistRemove:str":"Remove","AssistSort:str":"Sort","AssistSwapIn:str":"Swap In","AssistSwapOut:str":"Swap Out","BattleScene":"","BattlePartyCmd:str":"Party","BattleHelpFormation:json":"\"Change up your party formation.\"","QueuePartyScene:str":"%1 Menu queued after action is complete.","BattleSwitchOut:str":"Switch","BattleHelpSwitch:json":"\"Switch out this party member with another.\""}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_Party.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you control how the windows appear in Scene_Party.
 * @default {"ActivePartyLabel":"","ActivePartyLabelBgType:num":"0","ActivePartyLabelRect:func":"\"const wx = 0;\\nconst wy = this.mainAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","ActivePartyWindow":"","ActivePartyWindowBgType:num":"0","ActivePartyGraphic:str":"face","ActivePartyMapSprite":"","ActiveSpriteOffsetX:num":"0","ActiveSpriteOffsetY:num":"4","ActivePartySvBattler":"","ActiveBattlerOffsetX:num":"0","ActiveBattlerOffsetY:num":"4","ActivePartyWindowRect:func":"\"const wx = 0;\\nconst wy = this._activePartyLabel.y + this._activePartyLabel.height;\\nconst ww = Graphics.boxWidth;\\nconst wh = ImageManager.faceHeight + $gameSystem.windowPadding() * 2 + 2;\\nreturn new Rectangle(wx, wy, ww, wh);\"","ReservePartyLabel":"","ReservePartyLabelBgType:num":"0","ReservePartyLabelRect:func":"\"const ww = Math.max(240, Math.min(Graphics.boxWidth - 576, Math.round(Graphics.boxWidth / 2)));\\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","ReservePartyWindow":"","ReservePartyWindowBgType:num":"0","ReserveItemThickness:num":"2","ReservePartyGraphic:str":"face","ReservePartyMapSprite":"","ReserveSpriteOffsetX:num":"24","ReserveSpriteOffsetY:num":"4","ReservePartySvBattler":"","ReserveBattlerOffsetX:num":"48","ReserveBattlerOffsetY:num":"4","ReservePartyWindowRect:func":"\"const ww = this._reservePartyLabel.width;\\nconst wx = this._reservePartyLabel.x;\\nconst wy = this._reservePartyLabel.y + this._reservePartyLabel.height;\\nconst wh = this.mainAreaHeight() - this._reservePartyLabel.height - this._activePartyWindow.height - this._activePartyLabel.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","StatusLabel":"","StatusLabelBgType:num":"0","StatusLabelRect:func":"\"const ww = Graphics.boxWidth - this._reservePartyLabel.width;\\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","StatusWindow":"","StatusWindowBgType:num":"0","StatusWindowDraw:func":"\"// Draw Empty\\nif (!this._actor) {\\n    this.drawItemDarkRect(0, 0, this.innerWidth, this.innerHeight);\\n    const y = Math.round((this.innerHeight - this.lineHeight()) / 2);\\n    this.changeTextColor(ColorManager.systemColor());\\n    this.drawText(TextManager.emptyPartyMember, 0, y, this.innerWidth, 'center');\\n    return;\\n}\\n\\n// Draw Face and Simple Status\\nthis.drawActorFace(this._actor, 1, 0, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorSimpleStatus(this._actor, ImageManager.faceWidth + 36, 0);\\n\\n// Declare Constants\\nconst lineHeight = this.lineHeight();\\nconst params = this.actorParams();\\nconst paramWidth = Math.round(this.innerWidth / 2);\\nconst paramHeight = Math.ceil(params.length / 2) * lineHeight;\\nconst baseX = 0;\\nlet x = 0;\\nlet y = ImageManager.faceHeight + lineHeight / 2;\\n\\n// Draw Parameters\\nfor (const param of params) {\\n    this.drawItemDarkRect(x, y, paramWidth, lineHeight);\\n    this.drawParamName(param, x, y, paramWidth);\\n    this.drawParamValue(param, x, y, paramWidth);\\n\\n    if (x === baseX) {\\n        x += paramWidth;\\n    } else {\\n        x = baseX;\\n        y += lineHeight;\\n    }\\n}\"","StatusWindowRect:func":"\"const ww = this._statusPartyLabel.width;\\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\\nconst wy = this._reservePartyWindow.y;\\nconst wh = this._reservePartyWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","BattleSwitchWindow":"","BattleSwitchWindowBgType:num":"0","BattleSwitchWindowRect:func":"\"const padding = $gameSystem.windowPadding() * 2;\\nlet ww = 516 + padding;\\nlet wh = Window_PartyBattleSwitch.prototype.itemHeight() * 4 + padding;\\nlet wx = Math.round(Graphics.boxWidth - ww) / 2;\\nlet wy = Math.round(Graphics.boxHeight - wh - this._statusWindow.height) / 2;\\nwy = wy.clamp(0, Graphics.boxHeight - wh - this._statusWindow.height);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * @param General
 *
 * @param MaxBattleMembers:num
 * @text Max Battle Members
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of battle members.
 * @default 4
 *
 * @param BattleScene
 * @text Battle Scene
 *
 * @param BattlePartyIcon:num
 * @text Battle Party Icon
 * @parent BattleScene
 * @desc Icon used for changing party members.
 * @default 75
 *
 * @param PartyScene
 * @text Party Scene
 *
 * @param AddRemoveCmd:eval
 * @text Add Remove Command
 * @parent PartyScene
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Remove' command to the party scene?
 * @default true
 *
 * @param LockIcon:num
 * @text Locked Member Icon
 * @parent PartyScene
 * @desc Icon used for a locked party member.
 * @default 195
 *
 * @param RequireIcon:num
 * @text Required Member Icon
 * @parent PartyScene
 * @desc Icon used for a required party member.
 * @default 87
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent PartyScene
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param PartyCmdWin
 * @text Party Command Window
 *
 * @param PartyCmdWinAddParty:eval
 * @text Add Party Command
 * @parent PartyCmdWin
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Party' command to the Party Command Window?
 * @default false
 *
 * @param PartyCmdCooldown:num
 * @text Command Cooldown
 * @parent PartyCmdWin
 * @desc Cooldown (in turns) for this command to be available again.
 * @default 1
 *
 * @param ActorCmdWin
 * @text Actor Command Window
 *
 * @param ActorCmdWinAddParty:eval
 * @text Add Switch Command
 * @parent ActorCmdWin
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Switch' command to the Actor Command Window?
 * @default true
 *
 * @param ActorCmdCooldown:num
 * @text Command Cooldown
 * @parent ActorCmdWin
 * @desc Cooldown (in turns) for this command to be available again.
 * @default 1
 *
 * @param SwitchOutAnimation:eval
 * @text Switch Out Animation?
 * @parent ActorCmdWin
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Show the sprites switching out when using individual party member switching?
 * @default true
 *
 * @param tpbImmediateAction:eval
 * @text TPB: Immediate Action
 * @parent ActorCmdWin
 * @type boolean
 * @on Immediate Action
 * @off Empty Gauge
 * @desc Allow actors to immediate act upon switching in for TPB battle systems?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param General
 *
 * @param ActiveParty:str
 * @text Active Party
 * @parent General
 * @desc Vocabulary used to represent the Active Party.
 * @default Active Party
 *
 * @param ReserveParty:str
 * @text Reserve Party
 * @parent General
 * @desc Vocabulary used to represent the Reserve Party.
 * @default Reserve Party
 *
 * @param Status:str
 * @text Status
 * @parent General
 * @desc Vocabulary used to represent the Status Window.
 * @default Status
 *
 * @param PartyScene
 * @text Party Scene
 *
 * @param Windows
 * @parent PartyScene
 *
 * @param Empty:str
 * @text Empty
 * @parent Windows
 * @desc For the party and status windows when no actor is selected.
 * @default - Empty -
 *
 * @param Remove:str
 * @text Remove
 * @parent Windows
 * @desc For the remove option.
 * @default Remove
 *
 * @param ButtonAssist
 * @text Button Assist
 * @parent PartyScene
 *
 * @param AssistSwapPosition:str
 * @text Swap Positions
 * @parent ButtonAssist
 * @desc Button assist text for the page up/down commands.
 * Requires VisuMZ_0_CoreEngine!
 * @default Quick Swap
 *
 * @param AssistRemove:str
 * @text Remove
 * @parent ButtonAssist
 * @desc Button assist text for the removal command.
 * Requires VisuMZ_0_CoreEngine!
 * @default Remove
 *
 * @param AssistSort:str
 * @text Sort
 * @parent ButtonAssist
 * @desc Button assist text for the sort command.
 * Requires VisuMZ_0_CoreEngine!
 * @default Sort
 *
 * @param AssistSwapIn:str
 * @text Swap In
 * @parent ButtonAssist
 * @desc Button assist text for swapping in actors.
 * Requires VisuMZ_0_CoreEngine!
 * @default Swap In
 *
 * @param AssistSwapOut:str
 * @text Swap Out
 * @parent ButtonAssist
 * @desc Button assist text for swapping out actors.
 * Requires VisuMZ_0_CoreEngine!
 * @default Swap Out
 *
 * @param BattleScene
 * @text Battle Scene
 *
 * @param BattlePartyCmd:str
 * @text Party Command
 * @parent BattleScene
 * @desc Command text for entering Party Scene.
 * Requires VisuMZ_1_BattleCore!
 * @default Party
 *
 * @param BattleHelpFormation:json
 * @text Help: Formation
 * @parent BattlePartyCmd:str
 * @type note
 * @desc Help text for Formation command.
 * Requires VisuMZ_1_BattleCore!
 * @default "Change up your party formation."
 *
 * @param QueuePartyScene:str
 * @text Queue Message
 * @parent BattlePartyCmd:str
 * @desc Message to say the Party Scene is queued.
 * Requires VisuMZ_1_BattleCore!
 * @default %1 Menu queued after action is complete.
 *
 * @param BattleSwitchOut:str
 * @text Switch Command
 * @parent BattleScene
 * @desc Command text for switching out members.
 * Requires VisuMZ_1_BattleCore!
 * @default Switch
 *
 * @param BattleHelpSwitch:json
 * @text Help: Switch
 * @parent BattleSwitchOut:str
 * @type note
 * @desc Help text for Switch command.
 * Requires VisuMZ_1_BattleCore!
 * @default "Switch out this party member with another."
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param ActivePartyLabel
 * @text Active Party Label
 *
 * @param ActivePartyLabelBgType:num
 * @text Background Type
 * @parent ActivePartyLabel
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
 * @param ActivePartyLabelRect:func
 * @text JS: X, Y, W, H
 * @parent ActivePartyLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.mainAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ActivePartyWindow
 * @text Active Party Window
 *
 * @param ActivePartyWindowBgType:num
 * @text Background Type
 * @parent ActivePartyWindow
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
 * @param ActivePartyGraphic:str
 * @text Actor Graphic
 * @parent ActivePartyWindow
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * @value svbattler
 * @desc Choose how the actor graphics appear in the active party menu.
 * @default face
 *
 * @param ActivePartyMapSprite
 * @text Map Sprite
 * @parent ActivePartyGraphic:str
 *
 * @param ActiveSpriteOffsetX:num
 * @text Offset X
 * @parent ActivePartyMapSprite
 * @desc If showing map sprites, offset the x coordinate here from center.
 * @default 0
 *
 * @param ActiveSpriteOffsetY:num
 * @text Offset Y
 * @parent ActivePartyMapSprite
 * @desc If showing map sprites, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ActivePartySvBattler
 * @text Sideview Battler
 * @parent ActivePartyGraphic:str
 *
 * @param ActiveBattlerOffsetX:num
 * @text Offset X
 * @parent ActivePartySvBattler
 * @desc If showing sideview battlers, offset the x coordinate here from center.
 * @default 0
 *
 * @param ActiveBattlerOffsetY:num
 * @text Offset Y
 * @parent ActivePartySvBattler
 * @desc If showing sideview battlers, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ActivePartyWindowRect:func
 * @text JS: X, Y, W, H
 * @parent ActivePartyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this._activePartyLabel.y + this._activePartyLabel.height;\nconst ww = Graphics.boxWidth;\nconst wh = ImageManager.faceHeight + $gameSystem.windowPadding() * 2 + 2;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ReservePartyLabel
 * @text Reserve Party Label
 *
 * @param ReservePartyLabelBgType:num
 * @text Background Type
 * @parent ReservePartyLabel
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
 * @param ReservePartyLabelRect:func
 * @text JS: X, Y, W, H
 * @parent ReservePartyLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(240, Math.min(Graphics.boxWidth - 576, Math.round(Graphics.boxWidth / 2)));\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ReservePartyWindow
 * @text Reserve Party Window
 *
 * @param ReservePartyWindowBgType:num
 * @text Background Type
 * @parent ReservePartyWindow
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
 * @param ReserveCol:num
 * @text Columns
 * @parent ReservePartyWindow
 * @type number
 * @min 1
 * @desc How many columns do you want there to be for the window?
 * @default 1
 *
 * @param ReserveItemThickness:num
 * @text Row Thickness
 * @parent ReservePartyWindow
 * @type number
 * @min 1
 * @desc How many rows thick do you want selectable items to be?
 * @default 2
 *
 * @param ReservePartyGraphic:str
 * @text Actor Graphic
 * @parent ReservePartyWindow
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * @value svbattler
 * @desc Choose how the actor graphics appear in the reserve party menu.
 * @default face
 *
 * @param ReservePartyMapSprite
 * @text Map Sprite
 * @parent ReservePartyGraphic:str
 *
 * @param ReserveSpriteOffsetX:num
 * @text Offset X
 * @parent ReservePartyMapSprite
 * @desc If showing map sprites, offset the x coordinate here from left.
 * @default 24
 *
 * @param ReserveSpriteOffsetY:num
 * @text Offset Y
 * @parent ReservePartyMapSprite
 * @desc If showing map sprites, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ReservePartySvBattler
 * @text Sideview Battler
 * @parent ReservePartyGraphic:str
 *
 * @param ReserveBattlerOffsetX:num
 * @text Offset X
 * @parent ReservePartySvBattler
 * @desc If showing sideview battlers, offset the x coordinate here from left.
 * @default 48
 *
 * @param ReserveBattlerOffsetY:num
 * @text Offset Y
 * @parent ReservePartySvBattler
 * @desc If showing sideview battlers, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ReservePartyWindowRect:func
 * @text JS: X, Y, W, H
 * @parent ReservePartyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this._reservePartyLabel.width;\nconst wx = this._reservePartyLabel.x;\nconst wy = this._reservePartyLabel.y + this._reservePartyLabel.height;\nconst wh = this.mainAreaHeight() - this._reservePartyLabel.height - this._activePartyWindow.height - this._activePartyLabel.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param StatusLabel
 * @text Status Label
 *
 * @param StatusLabelBgType:num
 * @text Background Type
 * @parent StatusLabel
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
 * @param StatusLabelRect:func
 * @text JS: X, Y, W, H
 * @parent StatusLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - this._reservePartyLabel.width;\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusWindowBgType:num
 * @text Background Type
 * @parent StatusWindow
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
 * @param StatusWindowDraw:func
 * @text JS: Draw Data
 * @parent StatusWindow
 * @type note
 * @desc Code used to draw the display data in the Status Window.
 * @default "// Draw Empty\nif (!this._actor) {\n    this.drawItemDarkRect(0, 0, this.innerWidth, this.innerHeight);\n    const y = Math.round((this.innerHeight - this.lineHeight()) / 2);\n    this.changeTextColor(ColorManager.systemColor());\n    this.drawText(TextManager.emptyPartyMember, 0, y, this.innerWidth, 'center');\n    return;\n}\n\n// Draw Face and Simple Status\nthis.drawActorFace(this._actor, 1, 0, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorSimpleStatus(this._actor, ImageManager.faceWidth + 36, 0);\n\n// Declare Constants\nconst lineHeight = this.lineHeight();\nconst params = this.actorParams();\nconst paramWidth = Math.round(this.innerWidth / 2);\nconst paramHeight = Math.ceil(params.length / 2) * lineHeight;\nconst baseX = 0;\nlet x = 0;\nlet y = ImageManager.faceHeight + lineHeight / 2;\n\n// Draw Parameters\nfor (const param of params) {\n    this.drawItemDarkRect(x, y, paramWidth, lineHeight);\n    this.drawParamName(param, x, y, paramWidth);\n    this.drawParamValue(param, x, y, paramWidth);\n\n    if (x === baseX) {\n        x += paramWidth;\n    } else {\n        x = baseX;\n        y += lineHeight;\n    }\n}"
 *
 * @param StatusWindowRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this._statusPartyLabel.width;\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\nconst wy = this._reservePartyWindow.y;\nconst wh = this._reservePartyWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param BattleSwitchWindow
 * @text Battle Switch Window
 *
 * @param BattleSwitchWindowBgType:num
 * @text Background Type
 * @parent BattleSwitchWindow
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
 * @param BattleSwitchWindowRect:func
 * @text JS: X, Y, W, H
 * @parent BattleSwitchWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * Does not apply to Border Battle Layout style.
 * @default "const padding = $gameSystem.windowPadding() * 2;\nlet ww = 516 + padding;\nlet wh = Window_PartyBattleSwitch.prototype.itemHeight() * 4 + padding;\nlet wx = Math.round(Graphics.boxWidth - ww) / 2;\nlet wy = Math.round(Graphics.boxHeight - wh - this._statusWindow.height) / 2;\nwy = wy.clamp(0, Graphics.boxHeight - wh - this._statusWindow.height);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

const _0x2c4815=_0x15ba;(function(_0x5c8d07,_0x3dfe1d){const _0x45650f=_0x15ba,_0x2c4f=_0x5c8d07();while(!![]){try{const _0x202109=-parseInt(_0x45650f(0x363))/0x1*(parseInt(_0x45650f(0x2f0))/0x2)+-parseInt(_0x45650f(0x2dc))/0x3*(parseInt(_0x45650f(0x2e6))/0x4)+parseInt(_0x45650f(0x241))/0x5*(parseInt(_0x45650f(0x22f))/0x6)+-parseInt(_0x45650f(0x1d5))/0x7+-parseInt(_0x45650f(0x193))/0x8+parseInt(_0x45650f(0x20e))/0x9+-parseInt(_0x45650f(0x371))/0xa*(parseInt(_0x45650f(0x320))/0xb);if(_0x202109===_0x3dfe1d)break;else _0x2c4f['push'](_0x2c4f['shift']());}catch(_0x322510){_0x2c4f['push'](_0x2c4f['shift']());}}}(_0x43a2,0xe87a5));var label='PartySystem',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2c4815(0x350)](function(_0x1ae3a4){const _0x508c84=_0x2c4815;return _0x1ae3a4[_0x508c84(0x1be)]&&_0x1ae3a4[_0x508c84(0x1eb)][_0x508c84(0x1b4)]('['+label+']');})[0x0];VisuMZ[label][_0x2c4815(0x274)]=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0x1df253,_0x9f6755){const _0x127850=_0x2c4815;for(const _0x5bbee1 in _0x9f6755){if(_0x5bbee1[_0x127850(0x394)](/(.*):(.*)/i)){const _0x215f00=String(RegExp['$1']),_0x1c0434=String(RegExp['$2'])[_0x127850(0x202)]()[_0x127850(0x281)]();let _0x837e66,_0x23eb44,_0x1e71c0;switch(_0x1c0434){case _0x127850(0x2b7):_0x837e66=_0x9f6755[_0x5bbee1]!==''?Number(_0x9f6755[_0x5bbee1]):0x0;break;case _0x127850(0x1dc):_0x23eb44=_0x9f6755[_0x5bbee1]!==''?JSON[_0x127850(0x38d)](_0x9f6755[_0x5bbee1]):[],_0x837e66=_0x23eb44['map'](_0x442585=>Number(_0x442585));break;case'EVAL':_0x837e66=_0x9f6755[_0x5bbee1]!==''?eval(_0x9f6755[_0x5bbee1]):null;break;case _0x127850(0x1c4):_0x23eb44=_0x9f6755[_0x5bbee1]!==''?JSON[_0x127850(0x38d)](_0x9f6755[_0x5bbee1]):[],_0x837e66=_0x23eb44[_0x127850(0x24c)](_0x3948ff=>eval(_0x3948ff));break;case'JSON':_0x837e66=_0x9f6755[_0x5bbee1]!==''?JSON[_0x127850(0x38d)](_0x9f6755[_0x5bbee1]):'';break;case'ARRAYJSON':_0x23eb44=_0x9f6755[_0x5bbee1]!==''?JSON['parse'](_0x9f6755[_0x5bbee1]):[],_0x837e66=_0x23eb44[_0x127850(0x24c)](_0x10dfb4=>JSON[_0x127850(0x38d)](_0x10dfb4));break;case _0x127850(0x333):_0x837e66=_0x9f6755[_0x5bbee1]!==''?new Function(JSON[_0x127850(0x38d)](_0x9f6755[_0x5bbee1])):new Function(_0x127850(0x38b));break;case'ARRAYFUNC':_0x23eb44=_0x9f6755[_0x5bbee1]!==''?JSON['parse'](_0x9f6755[_0x5bbee1]):[],_0x837e66=_0x23eb44[_0x127850(0x24c)](_0xd2fa6c=>new Function(JSON[_0x127850(0x38d)](_0xd2fa6c)));break;case _0x127850(0x31a):_0x837e66=_0x9f6755[_0x5bbee1]!==''?String(_0x9f6755[_0x5bbee1]):'';break;case _0x127850(0x2c0):_0x23eb44=_0x9f6755[_0x5bbee1]!==''?JSON[_0x127850(0x38d)](_0x9f6755[_0x5bbee1]):[],_0x837e66=_0x23eb44[_0x127850(0x24c)](_0x1309cb=>String(_0x1309cb));break;case _0x127850(0x311):_0x1e71c0=_0x9f6755[_0x5bbee1]!==''?JSON[_0x127850(0x38d)](_0x9f6755[_0x5bbee1]):{},_0x837e66=VisuMZ[_0x127850(0x289)]({},_0x1e71c0);break;case _0x127850(0x250):_0x23eb44=_0x9f6755[_0x5bbee1]!==''?JSON[_0x127850(0x38d)](_0x9f6755[_0x5bbee1]):[],_0x837e66=_0x23eb44[_0x127850(0x24c)](_0x107270=>VisuMZ[_0x127850(0x289)]({},JSON[_0x127850(0x38d)](_0x107270)));break;default:continue;}_0x1df253[_0x215f00]=_0x837e66;}}return _0x1df253;},(_0x467f31=>{const _0x57d119=_0x2c4815,_0x51f811=_0x467f31[_0x57d119(0x35d)];for(const _0x361337 of dependencies){if(!Imported[_0x361337]){alert(_0x57d119(0x218)['format'](_0x51f811,_0x361337)),SceneManager[_0x57d119(0x252)]();break;}}const _0x4d8bdd=_0x467f31[_0x57d119(0x1eb)];if(_0x4d8bdd[_0x57d119(0x394)](/\[Version[ ](.*?)\]/i)){const _0x53f4c5=Number(RegExp['$1']);_0x53f4c5!==VisuMZ[label][_0x57d119(0x277)]&&(alert(_0x57d119(0x18c)['format'](_0x51f811,_0x53f4c5)),SceneManager[_0x57d119(0x252)]());}if(_0x4d8bdd[_0x57d119(0x394)](/\[Tier[ ](\d+)\]/i)){const _0x22b3d1=Number(RegExp['$1']);_0x22b3d1<tier?(alert(_0x57d119(0x1cd)[_0x57d119(0x372)](_0x51f811,_0x22b3d1,tier)),SceneManager[_0x57d119(0x252)]()):tier=Math['max'](_0x22b3d1,tier);}VisuMZ[_0x57d119(0x289)](VisuMZ[label][_0x57d119(0x274)],_0x467f31[_0x57d119(0x312)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x2c4815(0x35d)],'CallPartyScene',_0x13087e=>{SceneManager['push'](Scene_Party);}),PluginManager[_0x2c4815(0x302)](pluginData['name'],_0x2c4815(0x348),_0xdaf992=>{const _0x3a97a7=_0x2c4815;if($gameParty[_0x3a97a7(0x361)]())return;VisuMZ[_0x3a97a7(0x289)](_0xdaf992,_0xdaf992);const _0x13e702=_0xdaf992[_0x3a97a7(0x1d8)];$gameParty['changeMaxBattleMembers'](_0x13e702);}),PluginManager[_0x2c4815(0x302)](pluginData['name'],'MoveActorsToActive',_0x6cab7c=>{const _0x3e6ace=_0x2c4815;if(!SceneManager[_0x3e6ace(0x233)]())return;VisuMZ[_0x3e6ace(0x289)](_0x6cab7c,_0x6cab7c);const _0x34436f=_0x6cab7c['Actors'];for(const _0x1bd091 of _0x34436f){$gameParty[_0x3e6ace(0x1ec)](_0x1bd091);}$gamePlayer[_0x3e6ace(0x217)]();}),PluginManager['registerCommand'](pluginData[_0x2c4815(0x35d)],'MoveActorsToReserve',_0x463569=>{const _0x18c0d4=_0x2c4815;if(!SceneManager[_0x18c0d4(0x233)]())return;VisuMZ['ConvertParams'](_0x463569,_0x463569);const _0x3ff3e6=_0x463569['Actors'];for(const _0xbc7d82 of _0x3ff3e6){if($gameParty['battleMembers']()[_0x18c0d4(0x295)]<=0x1)break;$gameParty[_0x18c0d4(0x1ee)](_0xbc7d82);}$gamePlayer[_0x18c0d4(0x217)]();}),PluginManager[_0x2c4815(0x302)](pluginData[_0x2c4815(0x35d)],_0x2c4815(0x2fe),_0x253e93=>{const _0xae9ab2=_0x2c4815;if(!SceneManager[_0xae9ab2(0x233)]())return;if($gameParty[_0xae9ab2(0x325)]()[_0xae9ab2(0x295)]<=0x1)return;if(!$gameParty[_0xae9ab2(0x2c3)])return;if($gameParty[_0xae9ab2(0x2c3)][_0xae9ab2(0x295)]<=0x0)return;VisuMZ[_0xae9ab2(0x289)](_0x253e93,_0x253e93);const _0x10a4d2=_0x253e93['Index'],_0x10a481=$gameParty[_0xae9ab2(0x2c3)][_0x10a4d2];$gameParty[_0xae9ab2(0x1ee)](_0x10a481),$gamePlayer[_0xae9ab2(0x217)]();}),PluginManager[_0x2c4815(0x302)](pluginData[_0x2c4815(0x35d)],_0x2c4815(0x2d6),_0x19262c=>{const _0x1da2c3=_0x2c4815;if(!SceneManager[_0x1da2c3(0x233)]())return;if($gameParty['battleMembers']()[_0x1da2c3(0x295)]>=$gameParty['maxBattleMembers']())return;if($gameParty[_0x1da2c3(0x298)]()[_0x1da2c3(0x295)]<=0x0)return;const _0xc543af=$gameParty['reserveMembers'](),_0x33eeca=_0xc543af[Math[_0x1da2c3(0x219)](Math[_0x1da2c3(0x27c)]()*_0xc543af[_0x1da2c3(0x295)])],_0x22a45e=_0x33eeca[_0x1da2c3(0x248)]();$gameParty[_0x1da2c3(0x1ec)](_0x22a45e),$gamePlayer['refresh']();}),PluginManager['registerCommand'](pluginData[_0x2c4815(0x35d)],'LockPartyMembers',_0x3d5334=>{const _0x564743=_0x2c4815;VisuMZ[_0x564743(0x289)](_0x3d5334,_0x3d5334);const _0x44fcde=_0x3d5334[_0x564743(0x2b2)][_0x564743(0x24c)](_0x2f4b1c=>$gameActors[_0x564743(0x2ad)](_0x2f4b1c))[_0x564743(0x2a4)](null),_0x430d65=_0x3d5334[_0x564743(0x19e)];for(const _0x35bf79 of _0x44fcde){if(!_0x35bf79)continue;_0x35bf79['setPartyLock'](_0x430d65);}}),PluginManager['registerCommand'](pluginData[_0x2c4815(0x35d)],_0x2c4815(0x315),_0x8d8d7b=>{const _0x4ee34b=_0x2c4815;VisuMZ['ConvertParams'](_0x8d8d7b,_0x8d8d7b);const _0x5e08ab=_0x8d8d7b[_0x4ee34b(0x2b2)][_0x4ee34b(0x24c)](_0x57f6a3=>$gameActors['actor'](_0x57f6a3))[_0x4ee34b(0x2a4)](null),_0x3af687=_0x8d8d7b[_0x4ee34b(0x256)];for(const _0x52e057 of _0x5e08ab){if(!_0x52e057)continue;_0x52e057[_0x4ee34b(0x360)](_0x3af687);}}),ImageManager[_0x2c4815(0x2b6)]=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)]['General'][_0x2c4815(0x2b3)],ImageManager['requiredPartyMemberIcon']=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x18e)][_0x2c4815(0x29f)],TextManager['activeParty']=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x2bb)]['ActiveParty'],TextManager[_0x2c4815(0x1e3)]=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x2bb)][_0x2c4815(0x2e5)],TextManager['statusParty']=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x2bb)][_0x2c4815(0x1fa)],TextManager[_0x2c4815(0x332)]=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)]['Vocab'][_0x2c4815(0x1d7)],TextManager['removePartyMember']=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x2bb)][_0x2c4815(0x2fb)],TextManager[_0x2c4815(0x215)]=VisuMZ['PartySystem'][_0x2c4815(0x274)][_0x2c4815(0x2bb)][_0x2c4815(0x2be)],TextManager['assistRemovePartyMember']=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x2bb)][_0x2c4815(0x329)],TextManager[_0x2c4815(0x383)]=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)]['Vocab'][_0x2c4815(0x1e7)],TextManager[_0x2c4815(0x249)]=VisuMZ[_0x2c4815(0x35a)]['Settings'][_0x2c4815(0x2bb)][_0x2c4815(0x261)],TextManager[_0x2c4815(0x28f)]=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x2bb)][_0x2c4815(0x321)],ColorManager[_0x2c4815(0x245)]=function(_0x18b8e6){const _0x512e15=_0x2c4815;return _0x18b8e6=String(_0x18b8e6),_0x18b8e6['match'](/#(.*)/i)?'#%1'[_0x512e15(0x372)](String(RegExp['$1'])):this[_0x512e15(0x343)](Number(_0x18b8e6));},SceneManager[_0x2c4815(0x280)]=function(){const _0x7093b8=_0x2c4815;return this[_0x7093b8(0x212)]&&this[_0x7093b8(0x212)][_0x7093b8(0x381)]===Scene_Party;},SceneManager[_0x2c4815(0x233)]=function(){const _0x4d12a6=_0x2c4815;return this[_0x4d12a6(0x212)]&&this['_scene']['constructor']===Scene_Map;},VisuMZ[_0x2c4815(0x35a)]['BattleManager_setup']=BattleManager[_0x2c4815(0x316)],BattleManager['setup']=function(_0x5e4998,_0x3ca420,_0x2e47ef){const _0xb640b2=_0x2c4815;VisuMZ[_0xb640b2(0x35a)]['BattleManager_setup'][_0xb640b2(0x30d)](this,_0x5e4998,_0x3ca420,_0x2e47ef),$gameParty[_0xb640b2(0x379)]();},BattleManager[_0x2c4815(0x207)]=function(_0x30c6df,_0x360011){const _0xb65cfc=_0x2c4815;if(_0x30c6df===_0x360011)return;if(!_0x30c6df)return;if(!_0x360011)return;if(this['_target']===_0x30c6df)this[_0xb65cfc(0x191)]=_0x360011;while(this[_0xb65cfc(0x220)]['includes'](_0x30c6df)){const _0x23d840=this[_0xb65cfc(0x220)][_0xb65cfc(0x22e)](_0x30c6df);this['_targets'][_0x23d840]=_0x360011;}},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x2c1)]=Game_Battler[_0x2c4815(0x286)]['onBattleStart'],Game_Battler[_0x2c4815(0x286)][_0x2c4815(0x266)]=function(_0x2f8f68){const _0x30f89c=_0x2c4815;VisuMZ['PartySystem']['Game_Battler_onBattleStart'][_0x30f89c(0x30d)](this,_0x2f8f68);if(this['isActor']())this[_0x30f89c(0x19d)]();this[_0x30f89c(0x284)]();},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x263)]=Game_Battler[_0x2c4815(0x286)][_0x2c4815(0x1ea)],Game_Battler[_0x2c4815(0x286)]['regenerateAll']=function(){const _0x34691b=_0x2c4815;VisuMZ[_0x34691b(0x35a)][_0x34691b(0x263)][_0x34691b(0x30d)](this);if(this['isActor']()&&$gameParty['inBattle']())this[_0x34691b(0x1ca)]();},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x28c)]=Game_Actor[_0x2c4815(0x286)][_0x2c4815(0x316)],Game_Actor[_0x2c4815(0x286)][_0x2c4815(0x316)]=function(_0x1a6ff2){const _0x38ef7e=_0x2c4815;VisuMZ['PartySystem'][_0x38ef7e(0x28c)]['call'](this,_0x1a6ff2),this[_0x38ef7e(0x1e0)](),this[_0x38ef7e(0x19d)]();},Game_Actor[_0x2c4815(0x286)][_0x2c4815(0x1e0)]=function(){const _0xb2c987=_0x2c4815;this[_0xb2c987(0x23b)]=![],this[_0xb2c987(0x1cf)]=![];},Game_Actor['prototype'][_0x2c4815(0x231)]=function(){const _0x580a6a=_0x2c4815;if(this[_0x580a6a(0x23b)]===undefined)this[_0x580a6a(0x1e0)]();return!this[_0x580a6a(0x23b)];},Game_Actor[_0x2c4815(0x286)][_0x2c4815(0x1a6)]=function(_0x128297){const _0x505a9a=_0x2c4815;if(this[_0x505a9a(0x23b)]===undefined)this[_0x505a9a(0x1e0)]();this[_0x505a9a(0x23b)]=_0x128297;},Game_Actor[_0x2c4815(0x286)][_0x2c4815(0x338)]=function(){const _0x2d1da6=_0x2c4815;if(this[_0x2d1da6(0x1cf)]===undefined)this[_0x2d1da6(0x1e0)]();return this[_0x2d1da6(0x1cf)];},Game_Actor[_0x2c4815(0x286)]['setPartyRequirement']=function(_0x5c6af1){const _0x304074=_0x2c4815;if(this[_0x304074(0x1cf)]===undefined)this[_0x304074(0x1e0)]();this[_0x304074(0x1cf)]=_0x5c6af1;},Game_Actor[_0x2c4815(0x286)]['clearPartySwitchCommandCooldown']=function(){const _0x38a07f=_0x2c4815;this[_0x38a07f(0x2c7)]=0x0;},Game_Actor['prototype'][_0x2c4815(0x37b)]=function(){const _0x493c1c=_0x2c4815;if(this[_0x493c1c(0x2c7)]===undefined)this[_0x493c1c(0x19d)]();if(!this[_0x493c1c(0x231)]())return![];if(this[_0x493c1c(0x338)]())return![];return this[_0x493c1c(0x2c7)]<=0x0;},Game_Actor['prototype'][_0x2c4815(0x1fc)]=function(){const _0x2a3f7e=_0x2c4815;if(this[_0x2a3f7e(0x2c7)]===undefined)this[_0x2a3f7e(0x19d)]();return this[_0x2a3f7e(0x2c7)];},Game_Actor[_0x2c4815(0x286)][_0x2c4815(0x2f2)]=function(_0x4c54cf){const _0x66aa92=_0x2c4815;if(this[_0x66aa92(0x2c7)]===undefined)this[_0x66aa92(0x19d)]();this[_0x66aa92(0x2c7)]=_0x4c54cf||0x0;},Game_Actor[_0x2c4815(0x286)][_0x2c4815(0x36b)]=function(){const _0x310afa=_0x2c4815;if(this[_0x310afa(0x2c7)]===undefined)this[_0x310afa(0x19d)]();const _0x3ff8bc=VisuMZ[_0x310afa(0x35a)][_0x310afa(0x274)]['General'][_0x310afa(0x2ee)];this[_0x310afa(0x2f2)](_0x3ff8bc);},Game_Actor[_0x2c4815(0x286)][_0x2c4815(0x1ca)]=function(){const _0x45b269=_0x2c4815;if(this['_partySwitchBattleCommandCooldown']===undefined)this[_0x45b269(0x19d)]();this[_0x45b269(0x2c7)]--;},Game_Actor['prototype'][_0x2c4815(0x2b1)]=function(_0x59fefd){const _0x20ec5f=_0x2c4815;Imported[_0x20ec5f(0x235)]&&BattleManager[_0x20ec5f(0x378)]()&&BattleManager[_0x20ec5f(0x30f)]();Imported[_0x20ec5f(0x32f)]&&BattleManager['isSTB']()&&(BattleManager[_0x20ec5f(0x24b)](),BattleManager[_0x20ec5f(0x2da)]=this,BattleManager[_0x20ec5f(0x19b)]=this);if(Imported[_0x20ec5f(0x22a)]&&BattleManager[_0x20ec5f(0x2ec)]()){BattleManager['_subject']=undefined,BattleManager[_0x20ec5f(0x19b)]=this;const _0x4560d8=BattleManager[_0x20ec5f(0x365)][_0x20ec5f(0x22e)](_0x59fefd);BattleManager[_0x20ec5f(0x365)][_0x4560d8]=this,BattleManager[_0x20ec5f(0x1fb)]();}Imported[_0x20ec5f(0x1ab)]&&BattleManager['isFTB']()&&(BattleManager[_0x20ec5f(0x2da)]=this,BattleManager['_currentActor']=this,BattleManager['replaceActionBattlersPartySwitch'](_0x59fefd,this));Imported[_0x20ec5f(0x301)]&&BattleManager[_0x20ec5f(0x1bf)]()&&(BattleManager[_0x20ec5f(0x2da)]=this,BattleManager[_0x20ec5f(0x19b)]=this,BattleManager['replaceActionBattlersPartySwitch'](_0x59fefd,this));Imported[_0x20ec5f(0x260)]&&BattleManager[_0x20ec5f(0x357)]()&&(BattleManager[_0x20ec5f(0x2da)]=this,BattleManager[_0x20ec5f(0x19b)]=this,BattleManager[_0x20ec5f(0x1d9)](_0x59fefd,this));if(Imported[_0x20ec5f(0x195)]&&BattleManager[_0x20ec5f(0x1b1)]()){BattleManager[_0x20ec5f(0x2da)]=this,BattleManager[_0x20ec5f(0x19b)]=this;for(let _0x361428=0x0;_0x361428<BattleManager[_0x20ec5f(0x365)][_0x20ec5f(0x295)];_0x361428++){const _0x402192=BattleManager[_0x20ec5f(0x365)][_0x361428];_0x402192===_0x59fefd&&(BattleManager[_0x20ec5f(0x365)][_0x361428]=this);}for(let _0x450970=0x0;_0x450970<BattleManager[_0x20ec5f(0x2b0)][_0x20ec5f(0x295)];_0x450970++){const _0x2fca98=BattleManager['_otb_actionBattlersNext'][_0x450970];_0x2fca98===_0x59fefd&&(BattleManager[_0x20ec5f(0x2b0)][_0x450970]=this);}}if(Imported[_0x20ec5f(0x1b9)]&&BattleManager['isUsingGridSystem']()){const _0x74b479=_0x59fefd[_0x20ec5f(0x1ae)](),_0x3c8f20=_0x59fefd[_0x20ec5f(0x28b)]();this[_0x20ec5f(0x1b0)](_0x74b479,_0x3c8f20);}},BattleManager[_0x2c4815(0x1d9)]=function(_0x18ce07,_0x24a75e){const _0x55cbf8=_0x2c4815;this[_0x55cbf8(0x365)]=this['_actionBattlers']['map'](_0xa065e2=>_0xa065e2===_0x18ce07?_0x24a75e:_0xa065e2);},VisuMZ['PartySystem'][_0x2c4815(0x368)]=Game_Unit[_0x2c4815(0x286)][_0x2c4815(0x361)],Game_Unit[_0x2c4815(0x286)][_0x2c4815(0x361)]=function(){const _0x38eaa9=_0x2c4815;if(SceneManager[_0x38eaa9(0x280)]())return![];return VisuMZ[_0x38eaa9(0x35a)][_0x38eaa9(0x368)][_0x38eaa9(0x30d)](this);},Game_Party['defaultMaxBattleMembers']=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x18e)][_0x2c4815(0x335)],VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x2f9)]=Game_Party['prototype'][_0x2c4815(0x38f)],Game_Party[_0x2c4815(0x286)][_0x2c4815(0x38f)]=function(){const _0xfe9046=_0x2c4815;VisuMZ[_0xfe9046(0x35a)][_0xfe9046(0x2f9)]['call'](this),this[_0xfe9046(0x379)](),this[_0xfe9046(0x224)](),this[_0xfe9046(0x1db)]();},Game_Party[_0x2c4815(0x286)]['clearPartyBattleCommandCooldown']=function(){const _0x5acd68=_0x2c4815;this[_0x5acd68(0x259)]=0x0;},Game_Party[_0x2c4815(0x286)][_0x2c4815(0x37b)]=function(){const _0x574caf=_0x2c4815;if(this['_partySystemBattleCommandCooldown']===undefined)this[_0x574caf(0x379)]();return this['_partySystemBattleCommandCooldown']<=0x0;},Game_Party['prototype'][_0x2c4815(0x1fc)]=function(){const _0x4662f0=_0x2c4815;if(this[_0x4662f0(0x259)]===undefined)this[_0x4662f0(0x379)]();return this[_0x4662f0(0x259)];},Game_Party[_0x2c4815(0x286)]['setBattlePartySwitchCooldown']=function(_0x458c82){const _0x3dcdc0=_0x2c4815;if(this[_0x3dcdc0(0x259)]===undefined)this[_0x3dcdc0(0x379)]();this[_0x3dcdc0(0x259)]=_0x458c82;},Game_Party[_0x2c4815(0x286)][_0x2c4815(0x36b)]=function(){const _0x142060=_0x2c4815;if(this[_0x142060(0x259)]===undefined)this['clearPartyBattleCommandCooldown']();this[_0x142060(0x259)]=VisuMZ['PartySystem'][_0x142060(0x274)]['General'][_0x142060(0x2a2)]||0x0;},Game_Party[_0x2c4815(0x286)][_0x2c4815(0x1ca)]=function(){const _0x3fe9f8=_0x2c4815;if(this[_0x3fe9f8(0x259)]===undefined)this['clearPartyBattleCommandCooldown']();this['_partySystemBattleCommandCooldown']--;},Game_Party[_0x2c4815(0x286)]['initMaxBattleMembers']=function(){const _0x7d7e2c=_0x2c4815;this[_0x7d7e2c(0x30a)]=0x0;},Game_Party['prototype'][_0x2c4815(0x318)]=function(_0x5510ff){const _0x323027=_0x2c4815;this['_battleMaxSize']=_0x5510ff,this['initBattleMembers'](!![]),$gamePlayer&&$gamePlayer[_0x323027(0x1fe)]()&&$gamePlayer['followers']()['changeMaxBattleMembers']();},Game_Followers[_0x2c4815(0x286)]['changeMaxBattleMembers']=function(){const _0x4556b1=_0x2c4815;if(!SceneManager[_0x4556b1(0x233)]())return;this[_0x4556b1(0x316)]();const _0x861892=$gameMap['mapId'](),_0x25472e=$gamePlayer['x'],_0x492b2e=$gamePlayer['y'],_0x34ddec=$gamePlayer[_0x4556b1(0x246)]();$gameTemp[_0x4556b1(0x1ba)]=!![],$gamePlayer[_0x4556b1(0x290)](_0x861892,_0x25472e,_0x492b2e,_0x34ddec,0x2),setTimeout(this[_0x4556b1(0x227)]['bind'](this),0x7d0);},Game_Followers[_0x2c4815(0x286)][_0x2c4815(0x227)]=function(){const _0x29e2c1=_0x2c4815;$gameTemp[_0x29e2c1(0x1ba)]=![];},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x29e)]=Scene_Base['prototype']['isAutosaveEnabled'],Scene_Base[_0x2c4815(0x286)]['isAutosaveEnabled']=function(){const _0x2497b4=_0x2c4815;if($gameTemp[_0x2497b4(0x1ba)])return![];return VisuMZ[_0x2497b4(0x35a)][_0x2497b4(0x29e)][_0x2497b4(0x30d)](this);},Game_Party[_0x2c4815(0x286)]['maxBattleMembers']=function(){const _0x22e11b=_0x2c4815;if(this[_0x22e11b(0x30a)]===undefined)this[_0x22e11b(0x1db)]();let _0x11b2ad=this['_battleMaxSize']||Game_Party[_0x22e11b(0x1c2)];return Imported[_0x22e11b(0x1b9)]&&BattleManager[_0x22e11b(0x19c)]()&&(_0x11b2ad=_0x11b2ad[_0x22e11b(0x1a1)](0x1,0x14)),_0x11b2ad;},Game_Party['prototype'][_0x2c4815(0x34f)]=function(){const _0x44b332=_0x2c4815;if(this[_0x44b332(0x30a)]===undefined)this[_0x44b332(0x1db)]();if(!this[_0x44b332(0x2c3)])this[_0x44b332(0x1db)]();while(this[_0x44b332(0x2c3)][_0x44b332(0x295)]<this['_battleMaxSize']){this[_0x44b332(0x2c3)][_0x44b332(0x1b5)](0x0);}},Game_Party[_0x2c4815(0x286)][_0x2c4815(0x1db)]=function(_0x5ede56){const _0x271713=_0x2c4815;!_0x5ede56&&(this[_0x271713(0x30a)]=Game_Party[_0x271713(0x1c2)]);this['_battleMembers']=this[_0x271713(0x2aa)][_0x271713(0x288)](0x0,this[_0x271713(0x30a)]);while(this[_0x271713(0x2c3)][_0x271713(0x295)]<this[_0x271713(0x30a)]){this[_0x271713(0x2c3)][_0x271713(0x1b5)](0x0);}if($gamePlayer)$gamePlayer[_0x271713(0x217)]();},Game_Party['prototype'][_0x2c4815(0x325)]=function(){const _0x273059=_0x2c4815;if(Imported[_0x273059(0x1b9)]&&SceneManager[_0x273059(0x391)]())return this['rawBattleMembers'](!![]);return this[_0x273059(0x247)]()[_0x273059(0x350)](_0x358e40=>!!_0x358e40);},Game_Party[_0x2c4815(0x286)][_0x2c4815(0x247)]=function(_0x1731ef){const _0x4f9725=_0x2c4815;this[_0x4f9725(0x34f)]();const _0x34f6a7=this[_0x4f9725(0x2c3)][_0x4f9725(0x24c)](_0x8fd858=>$gameActors['actor'](_0x8fd858));if(_0x1731ef)return _0x34f6a7;return SceneManager[_0x4f9725(0x280)]()?_0x34f6a7:_0x34f6a7[_0x4f9725(0x350)](_0x5b44d4=>_0x5b44d4&&_0x5b44d4[_0x4f9725(0x2ba)]());},Game_Party['prototype'][_0x2c4815(0x298)]=function(){const _0x300d26=_0x2c4815,_0x8a42eb=this[_0x300d26(0x325)]();return this[_0x300d26(0x228)]()[_0x300d26(0x350)](_0x1e945a=>!_0x8a42eb['includes'](_0x1e945a));},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x1b7)]=Game_Party[_0x2c4815(0x286)][_0x2c4815(0x26b)],Game_Party['prototype'][_0x2c4815(0x26b)]=function(){const _0x10b09d=_0x2c4815;VisuMZ[_0x10b09d(0x35a)][_0x10b09d(0x1b7)][_0x10b09d(0x30d)](this),this[_0x10b09d(0x1db)]();},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x304)]=Game_Party[_0x2c4815(0x286)][_0x2c4815(0x375)],Game_Party['prototype']['setupBattleTest']=function(){VisuMZ['PartySystem']['Game_Party_setupBattleTest']['call'](this),this['addNonBattleTestMembers']();},Game_Party['prototype']['setupBattleTestMembers']=function(){const _0x279f6a=_0x2c4815;this[_0x279f6a(0x30a)]=Game_Party['defaultMaxBattleMembers'],this[_0x279f6a(0x2c3)]=[],this[_0x279f6a(0x2aa)]=[];for(const _0xea4a68 of $dataSystem[_0x279f6a(0x285)]){const _0x4ac382=$gameActors[_0x279f6a(0x2ad)](_0xea4a68[_0x279f6a(0x248)]);if(!_0x4ac382)continue;_0x4ac382[_0x279f6a(0x2ea)](_0xea4a68[_0x279f6a(0x23c)],![]),_0x4ac382[_0x279f6a(0x33e)](_0xea4a68[_0x279f6a(0x2ce)]),_0x4ac382['recoverAll'](),this[_0x279f6a(0x2c3)]['push'](_0xea4a68[_0x279f6a(0x248)]),this[_0x279f6a(0x2aa)][_0x279f6a(0x1b5)](_0xea4a68[_0x279f6a(0x248)]);}this[_0x279f6a(0x2c3)][_0x279f6a(0x2a4)](0x0);while(this[_0x279f6a(0x2c3)]['length']<this['_battleMaxSize']){this['_battleMembers'][_0x279f6a(0x1b5)](0x0);}while(this[_0x279f6a(0x2c3)]['length']>this['maxBattleMembers']()){this[_0x279f6a(0x2c3)]['pop']();}if($gamePlayer)$gamePlayer['refresh']();},Game_Party['prototype'][_0x2c4815(0x2ca)]=function(){const _0x231ec2=_0x2c4815,_0x37dc93=this[_0x231ec2(0x325)]();for(let _0x155925=0x1;_0x155925<$dataActors['length'];_0x155925++){const _0x55f309=$gameActors[_0x231ec2(0x2ad)](_0x155925);if(!_0x55f309)continue;if(_0x55f309['name']()['length']<=0x0)continue;if(_0x55f309[_0x231ec2(0x35d)]()[_0x231ec2(0x394)](/-----/i))continue;if(_0x37dc93[_0x231ec2(0x1b4)](_0x55f309))continue;this[_0x231ec2(0x2aa)][_0x231ec2(0x1b5)](_0x55f309[_0x231ec2(0x248)]());}},VisuMZ[_0x2c4815(0x35a)]['Game_Party_addActor']=Game_Party[_0x2c4815(0x286)][_0x2c4815(0x287)],Game_Party[_0x2c4815(0x286)]['addActor']=function(_0x17d57d){const _0x277b7e=_0x2c4815;VisuMZ[_0x277b7e(0x35a)][_0x277b7e(0x37c)][_0x277b7e(0x30d)](this,_0x17d57d),this[_0x277b7e(0x1ec)](_0x17d57d),SceneManager[_0x277b7e(0x24a)]()&&(Imported[_0x277b7e(0x195)]&&BattleManager[_0x277b7e(0x1b1)]()&&(BattleManager[_0x277b7e(0x265)](),BattleManager[_0x277b7e(0x1c1)]($gameActors[_0x277b7e(0x2ad)](_0x17d57d))));},Game_Party[_0x2c4815(0x286)][_0x2c4815(0x1ec)]=function(_0x101edd){const _0x34e97c=_0x2c4815;this[_0x34e97c(0x34f)]();if(this[_0x34e97c(0x2c3)][_0x34e97c(0x1b4)](_0x101edd))return;if(!this[_0x34e97c(0x2aa)][_0x34e97c(0x1b4)](_0x101edd))return;if(!this['_battleMembers'][_0x34e97c(0x1b4)](0x0))return;const _0xc1910b=$gameActors[_0x34e97c(0x2ad)](_0x101edd);if(!_0xc1910b)return;const _0x4606c1=this['_battleMembers'][_0x34e97c(0x22e)](0x0);if(_0x4606c1<0x0)return;this[_0x34e97c(0x2c3)][_0x4606c1]=_0x101edd,SceneManager[_0x34e97c(0x24a)]()&&(_0xc1910b['onBattleStart'](),_0xc1910b[_0x34e97c(0x237)]()),this[_0x34e97c(0x33a)]();},Game_Party['prototype']['addActorToBattleMembersAtIndex']=function(_0x2c80b3,_0x434071){const _0x40adee=_0x2c4815;this[_0x40adee(0x34f)]();if(this[_0x40adee(0x2c3)][_0x40adee(0x1b4)](_0x2c80b3))return;if(!this[_0x40adee(0x2c3)][_0x40adee(0x1b4)](0x0))return;const _0x9aaee3=$gameActors['actor'](_0x2c80b3);if(!_0x9aaee3)return;this[_0x40adee(0x2c3)][_0x434071]=_0x2c80b3,_0x9aaee3[_0x40adee(0x237)](),this[_0x40adee(0x33a)]();},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x205)]=Game_Party[_0x2c4815(0x286)][_0x2c4815(0x2af)],Game_Party[_0x2c4815(0x286)]['removeActor']=function(_0x2c9288){const _0x19dc4c=_0x2c4815;this[_0x19dc4c(0x1ee)](_0x2c9288),VisuMZ[_0x19dc4c(0x35a)][_0x19dc4c(0x205)][_0x19dc4c(0x30d)](this,_0x2c9288);},Game_Party['prototype'][_0x2c4815(0x1ee)]=function(_0x3518cc){const _0x3f6792=_0x2c4815;this[_0x3f6792(0x34f)]();if(!this[_0x3f6792(0x2c3)][_0x3f6792(0x1b4)](_0x3518cc))return;if(_0x3518cc<=0x0)return;const _0x2032ac=this[_0x3f6792(0x2c3)]['indexOf'](_0x3518cc);this[_0x3f6792(0x2c3)][_0x2032ac]=0x0,this['_actors'][_0x3f6792(0x2a4)](_0x3518cc),this[_0x3f6792(0x2aa)][_0x3f6792(0x1b5)](_0x3518cc),this[_0x3f6792(0x33a)]();},Game_Party[_0x2c4815(0x286)][_0x2c4815(0x33a)]=function(){const _0x374fd7=_0x2c4815;this[_0x374fd7(0x25a)](),$gamePlayer[_0x374fd7(0x217)](),$gameMap[_0x374fd7(0x225)]();},Game_Party[_0x2c4815(0x286)][_0x2c4815(0x25a)]=function(){const _0x4bbb34=_0x2c4815;this['checkInitBattleMembers']();const _0x159ec0=this[_0x4bbb34(0x325)]()[_0x4bbb34(0x278)](this[_0x4bbb34(0x298)]());this[_0x4bbb34(0x2aa)]=_0x159ec0[_0x4bbb34(0x24c)](_0x4bba72=>_0x4bba72?_0x4bba72[_0x4bbb34(0x248)]():0x0)[_0x4bbb34(0x2a4)](0x0);},Game_Party[_0x2c4815(0x286)][_0x2c4815(0x35f)]=function(){const _0x8314e0=_0x2c4815;this['_actors'][_0x8314e0(0x24e)]((_0x56ee7c,_0x6f10ec)=>_0x56ee7c-_0x6f10ec),this[_0x8314e0(0x25a)](),this[_0x8314e0(0x33a)]();},Game_Party['prototype']['anyRequiredPartyMembersInReserve']=function(){for(const _0x2276ec of this['reserveMembers']()){if(!_0x2276ec)continue;if(_0x2276ec['isRequiredInParty']())return!![];}return![];},VisuMZ['PartySystem']['Game_Party_swapOrder']=Game_Party[_0x2c4815(0x286)][_0x2c4815(0x190)],Game_Party[_0x2c4815(0x286)]['swapOrder']=function(_0x29ba73,_0x516fb3){const _0x4236b0=_0x2c4815,_0x9e4b3=this['battleMembers']()[_0x4236b0(0x2a4)](null)['remove'](undefined)[_0x4236b0(0x295)];VisuMZ[_0x4236b0(0x35a)][_0x4236b0(0x2d8)][_0x4236b0(0x30d)](this,_0x29ba73,_0x516fb3),this['swapOrderPartySystemPlugin'](_0x29ba73,_0x516fb3,_0x9e4b3);},Game_Party[_0x2c4815(0x286)][_0x2c4815(0x364)]=function(_0xbb9cf6,_0x3d49f0,_0x419637){const _0x219b34=_0x2c4815;this[_0x219b34(0x2c3)]=[];for(let _0x438931=0x0;_0x438931<this[_0x219b34(0x2aa)][_0x219b34(0x295)];_0x438931++){if(this[_0x219b34(0x2c3)]['length']>=this[_0x219b34(0x1e8)]())break;if(SceneManager['_scene'][_0x219b34(0x381)][_0x219b34(0x35d)]===_0x219b34(0x230)){if(this[_0x219b34(0x2c3)]['length']>=_0x419637)break;}this[_0x219b34(0x2c3)][_0x438931]=this[_0x219b34(0x2aa)][_0x438931];}$gamePlayer[_0x219b34(0x217)]();},VisuMZ[_0x2c4815(0x35a)]['Game_Troop_increaseTurn']=Game_Troop[_0x2c4815(0x286)][_0x2c4815(0x296)],Game_Troop[_0x2c4815(0x286)][_0x2c4815(0x296)]=function(){const _0x15f4b2=_0x2c4815;VisuMZ['PartySystem'][_0x15f4b2(0x1c6)]['call'](this),$gameParty[_0x15f4b2(0x1ca)]();},Scene_Menu[_0x2c4815(0x286)]['commandFormation']=function(){SceneManager['push'](Scene_Party);};function Scene_Party(){const _0x71428c=_0x2c4815;this[_0x71428c(0x38f)](...arguments);}Scene_Party['prototype']=Object[_0x2c4815(0x270)](Scene_MenuBase['prototype']),Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x381)]=Scene_Party,Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x38f)]=function(){const _0x3e153e=_0x2c4815;this['loadPartyImages'](),Scene_MenuBase[_0x3e153e(0x286)]['initialize']['call'](this);},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x2ff)]=function(){const _0x1e3708=_0x2c4815;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x1e3708(0x21c)]!==undefined)return ConfigManager[_0x1e3708(0x21c)];else return ConfigManager[_0x1e3708(0x253)]===![]?![]:Scene_MenuBase['prototype']['isRightInputMode'][_0x1e3708(0x30d)](this);},Scene_Party['prototype']['helpAreaHeight']=function(){return 0x0;},Scene_Party[_0x2c4815(0x286)]['needsPageButtons']=function(){return!![];},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x2a3)]=function(){const _0x19f625=_0x2c4815;Scene_MenuBase[_0x19f625(0x286)][_0x19f625(0x2a3)]['call'](this),this[_0x19f625(0x2d0)][_0x19f625(0x1c3)]=undefined,this[_0x19f625(0x24d)][_0x19f625(0x1c3)]=undefined;},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x2b4)]=function(){const _0xace538=_0x2c4815;for(const _0x37440 of $gameParty[_0xace538(0x1aa)]()){ImageManager[_0xace538(0x2d9)](_0x37440[_0xace538(0x1bc)]()),ImageManager['loadCharacter'](_0x37440[_0xace538(0x2ae)]()),ImageManager[_0xace538(0x232)](_0x37440[_0xace538(0x1f3)]());}},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x270)]=function(){const _0x19a2dd=_0x2c4815;Scene_MenuBase[_0x19a2dd(0x286)][_0x19a2dd(0x270)][_0x19a2dd(0x30d)](this),this[_0x19a2dd(0x244)](),this[_0x19a2dd(0x1e4)](),this[_0x19a2dd(0x1cc)](),this['createReservePartyWindow'](),this['createStatusLabel'](),this[_0x19a2dd(0x2f1)]();},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x244)]=function(){const _0x5ba0a3=_0x2c4815,_0x4c4bd3=this[_0x5ba0a3(0x2d5)]();this[_0x5ba0a3(0x35b)]=new Window_PartyLabel(_0x4c4bd3,TextManager[_0x5ba0a3(0x1b8)]),this[_0x5ba0a3(0x35b)][_0x5ba0a3(0x352)](VisuMZ[_0x5ba0a3(0x35a)]['Settings'][_0x5ba0a3(0x37d)]['ActivePartyLabelBgType']),this[_0x5ba0a3(0x294)](this[_0x5ba0a3(0x35b)]);},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x2d5)]=function(){const _0x3c7d79=_0x2c4815;return VisuMZ[_0x3c7d79(0x35a)][_0x3c7d79(0x274)][_0x3c7d79(0x37d)][_0x3c7d79(0x20b)][_0x3c7d79(0x30d)](this);},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x1e4)]=function(){const _0x291bca=_0x2c4815,_0x5dc65c=this[_0x291bca(0x31c)]();this[_0x291bca(0x354)]=new Window_PartyActive(_0x5dc65c),this[_0x291bca(0x354)]['setBackgroundType'](VisuMZ[_0x291bca(0x35a)][_0x291bca(0x274)][_0x291bca(0x37d)][_0x291bca(0x362)]),this[_0x291bca(0x354)][_0x291bca(0x1e6)]('ok',this[_0x291bca(0x35c)][_0x291bca(0x34a)](this)),this[_0x291bca(0x354)]['setHandler'](_0x291bca(0x37e),this['popScene'][_0x291bca(0x34a)](this)),this['addWindow'](this[_0x291bca(0x354)]);},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x31c)]=function(){const _0x4358ab=_0x2c4815;return VisuMZ[_0x4358ab(0x35a)][_0x4358ab(0x274)]['Window'][_0x4358ab(0x2fd)]['call'](this);},Scene_Party[_0x2c4815(0x286)]['onActiveOk']=function(){const _0x2305bd=_0x2c4815;this['_reservePartyWindow'][_0x2305bd(0x292)](),this[_0x2305bd(0x255)][_0x2305bd(0x30b)]();},Scene_Party[_0x2c4815(0x286)]['createReservePartyLabel']=function(){const _0x8f1406=_0x2c4815,_0x53918e=this[_0x8f1406(0x279)]();this[_0x8f1406(0x346)]=new Window_PartyLabel(_0x53918e,TextManager[_0x8f1406(0x1e3)]),this[_0x8f1406(0x346)][_0x8f1406(0x352)](VisuMZ['PartySystem'][_0x8f1406(0x274)]['Window'][_0x8f1406(0x1af)]),this[_0x8f1406(0x294)](this[_0x8f1406(0x346)]);},Scene_Party['prototype'][_0x2c4815(0x279)]=function(){const _0x52678b=_0x2c4815;return VisuMZ[_0x52678b(0x35a)][_0x52678b(0x274)]['Window'][_0x52678b(0x23d)][_0x52678b(0x30d)](this);},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x24f)]=function(){const _0x5aff9f=_0x2c4815,_0x3de4f4=this[_0x5aff9f(0x355)]();this['_reservePartyWindow']=new Window_PartyReserve(_0x3de4f4),this[_0x5aff9f(0x255)][_0x5aff9f(0x352)](VisuMZ[_0x5aff9f(0x35a)][_0x5aff9f(0x274)][_0x5aff9f(0x37d)][_0x5aff9f(0x344)]),this['_reservePartyWindow'][_0x5aff9f(0x1e6)]('ok',this[_0x5aff9f(0x2de)]['bind'](this)),this[_0x5aff9f(0x255)][_0x5aff9f(0x1e6)](_0x5aff9f(0x37e),this[_0x5aff9f(0x2ed)][_0x5aff9f(0x34a)](this)),this[_0x5aff9f(0x294)](this['_reservePartyWindow']);},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x355)]=function(){const _0x296fcc=_0x2c4815;return VisuMZ[_0x296fcc(0x35a)][_0x296fcc(0x274)][_0x296fcc(0x37d)][_0x296fcc(0x29d)][_0x296fcc(0x30d)](this);},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x2de)]=function(){const _0xb0438e=_0x2c4815,_0x1fd03d=this[_0xb0438e(0x255)][_0xb0438e(0x200)](),_0x12852c=this[_0xb0438e(0x354)][_0xb0438e(0x28a)]();if(_0x1fd03d<0x0){if(_0x12852c)$gameParty[_0xb0438e(0x1ee)](_0x12852c['actorId']());}else{const _0x113ad3=this['_reservePartyWindow']['currentActor']()[_0xb0438e(0x248)](),_0x2ba9ae=this[_0xb0438e(0x354)]['index']();if(_0x12852c)$gameParty[_0xb0438e(0x1ee)](_0x12852c[_0xb0438e(0x248)]());$gameParty['addActorToBattleMembersAtIndex'](_0x113ad3,_0x2ba9ae);}this[_0xb0438e(0x268)](),this['onReserveCancel']();},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x268)]=function(){const _0x11df1a=_0x2c4815;this[_0x11df1a(0x354)]['refresh'](),this[_0x11df1a(0x255)]['refresh']();},Scene_Party[_0x2c4815(0x286)]['onReserveCancel']=function(){const _0x51dfbd=_0x2c4815;this[_0x51dfbd(0x255)]['deactivate'](),this[_0x51dfbd(0x255)]['deselect'](),this[_0x51dfbd(0x354)][_0x51dfbd(0x292)]();},Scene_Party[_0x2c4815(0x286)]['createStatusLabel']=function(){const _0x4d7d0e=_0x2c4815,_0x2bafd6=this[_0x4d7d0e(0x2e7)]();this['_statusPartyLabel']=new Window_PartyLabel(_0x2bafd6,TextManager['statusParty']),this[_0x4d7d0e(0x31f)][_0x4d7d0e(0x352)](VisuMZ[_0x4d7d0e(0x35a)][_0x4d7d0e(0x274)][_0x4d7d0e(0x37d)][_0x4d7d0e(0x1e2)]),this[_0x4d7d0e(0x294)](this[_0x4d7d0e(0x31f)]);},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x2e7)]=function(){const _0x2ead6=_0x2c4815;return VisuMZ[_0x2ead6(0x35a)][_0x2ead6(0x274)][_0x2ead6(0x37d)][_0x2ead6(0x38a)]['call'](this);},Scene_Party['prototype'][_0x2c4815(0x2f1)]=function(){const _0x2ead04=_0x2c4815,_0x4da6a7=this['statusWindowRect']();this[_0x2ead04(0x276)]=new Window_PartyStatus(_0x4da6a7),this[_0x2ead04(0x276)][_0x2ead04(0x352)](VisuMZ['PartySystem'][_0x2ead04(0x274)][_0x2ead04(0x37d)][_0x2ead04(0x1ef)]),this[_0x2ead04(0x294)](this[_0x2ead04(0x276)]),this['_reservePartyWindow'][_0x2ead04(0x1b2)](this[_0x2ead04(0x276)]),this[_0x2ead04(0x354)][_0x2ead04(0x1b2)](this[_0x2ead04(0x276)]);},Scene_Party['prototype'][_0x2c4815(0x240)]=function(){const _0x4883ff=_0x2c4815;return VisuMZ['PartySystem'][_0x4883ff(0x274)]['Window'][_0x4883ff(0x2e4)][_0x4883ff(0x30d)](this);},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x2a5)]=function(){return TextManager['getInputButtonString']('shift');},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x2bd)]=function(){const _0x54417c=_0x2c4815;return TextManager[_0x54417c(0x215)];},Scene_Party['prototype'][_0x2c4815(0x2eb)]=function(){const _0x11e4b5=_0x2c4815,_0x4d8fe4=this[_0x11e4b5(0x354)],_0x2a3f1c=this[_0x11e4b5(0x255)];if(_0x4d8fe4&&_0x4d8fe4[_0x11e4b5(0x1a0)]&&_0x4d8fe4[_0x11e4b5(0x28a)]()&&_0x4d8fe4[_0x11e4b5(0x1b3)]())return TextManager['assistRemovePartyMember'];else return _0x2a3f1c&&_0x2a3f1c[_0x11e4b5(0x1a0)]&&$gameParty[_0x11e4b5(0x298)]()[_0x11e4b5(0x295)]>0x0?TextManager[_0x11e4b5(0x383)]:'';},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x358)]=function(){const _0x4208e6=_0x2c4815;if(this['_activePartyWindow']&&this['_activePartyWindow'][_0x4208e6(0x1a0)])return TextManager[_0x4208e6(0x28f)];else return this[_0x4208e6(0x255)]&&this[_0x4208e6(0x255)][_0x4208e6(0x1a0)]?TextManager[_0x4208e6(0x249)]:Scene_MenuBase[_0x4208e6(0x286)][_0x4208e6(0x358)][_0x4208e6(0x30d)](this);},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x19f)]=function(){const _0x5490e7=_0x2c4815;Scene_MenuBase['prototype']['createBackground'][_0x5490e7(0x30d)](this),this[_0x5490e7(0x309)](this[_0x5490e7(0x2f8)]()),this[_0x5490e7(0x393)]();},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x2f8)]=function(){const _0x1a7a9d=_0x2c4815;return VisuMZ['PartySystem'][_0x1a7a9d(0x274)][_0x1a7a9d(0x194)][_0x1a7a9d(0x1f8)];},Scene_Party[_0x2c4815(0x286)]['createCustomBackgroundImages']=function(){const _0x2f34ad=_0x2c4815,_0x32439c={'BgFilename1':VisuMZ[_0x2f34ad(0x35a)][_0x2f34ad(0x274)][_0x2f34ad(0x194)]['BgFilename1'],'BgFilename2':VisuMZ[_0x2f34ad(0x35a)][_0x2f34ad(0x274)][_0x2f34ad(0x194)]['BgFilename2']};_0x32439c&&(_0x32439c['BgFilename1']!==''||_0x32439c[_0x2f34ad(0x29a)]!=='')&&(this[_0x2f34ad(0x197)]=new Sprite(ImageManager['loadTitle1'](_0x32439c[_0x2f34ad(0x36d)])),this[_0x2f34ad(0x21e)]=new Sprite(ImageManager['loadTitle2'](_0x32439c[_0x2f34ad(0x29a)])),this[_0x2f34ad(0x323)](this[_0x2f34ad(0x197)]),this[_0x2f34ad(0x323)](this[_0x2f34ad(0x21e)]),this[_0x2f34ad(0x197)][_0x2f34ad(0x353)][_0x2f34ad(0x239)](this['adjustSprite']['bind'](this,this['_backSprite1'])),this[_0x2f34ad(0x21e)][_0x2f34ad(0x353)][_0x2f34ad(0x239)](this['adjustSprite'][_0x2f34ad(0x34a)](this,this[_0x2f34ad(0x21e)])));},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x34b)]=function(_0x3f35e6){const _0x4d2c07=_0x2c4815;this[_0x4d2c07(0x1fd)](_0x3f35e6),this[_0x4d2c07(0x32b)](_0x3f35e6);},Scene_Party[_0x2c4815(0x286)][_0x2c4815(0x21d)]=function(){const _0x139e2a=_0x2c4815;Scene_MenuBase['prototype'][_0x139e2a(0x21d)][_0x139e2a(0x30d)](this),$gameParty[_0x139e2a(0x33a)]();},Window_StatusBase['prototype'][_0x2c4815(0x297)]=function(_0x1714a9,_0x406d0d,_0x1ba372,_0x5d0bce){const _0x45479a=_0x2c4815;if(!_0x1714a9)return;_0x5d0bce?this[_0x45479a(0x2dd)](_0x1714a9,_0x406d0d,_0x1ba372):this['drawActorPartyIconsHorz'](_0x1714a9,_0x406d0d,_0x1ba372);},Window_StatusBase[_0x2c4815(0x286)][_0x2c4815(0x226)]=function(_0x12834c,_0x3e692b,_0x495f02){const _0x3552c0=_0x2c4815;_0x495f02+=Math[_0x3552c0(0x392)]((this['lineHeight']()-ImageManager[_0x3552c0(0x33c)])/0x2),!_0x12834c['isFormationChangeOk']()&&(this[_0x3552c0(0x1d3)](ImageManager['lockPartyMemberIcon'],_0x3e692b,_0x495f02),_0x3e692b+=ImageManager[_0x3552c0(0x1de)]+0x4),_0x12834c[_0x3552c0(0x338)]()&&(this['drawIcon'](ImageManager[_0x3552c0(0x380)],_0x3e692b,_0x495f02),_0x3e692b+=ImageManager[_0x3552c0(0x1de)]+0x4);},Window_StatusBase[_0x2c4815(0x286)][_0x2c4815(0x2dd)]=function(_0x10a7db,_0x59551d,_0x4401e0){const _0x1aaa8e=_0x2c4815;let _0x395535=0x0;if(!_0x10a7db[_0x1aaa8e(0x231)]())_0x395535+=0x1;if(_0x10a7db[_0x1aaa8e(0x338)]())_0x395535+=0x1;if(_0x395535<=0x1)return this[_0x1aaa8e(0x226)](_0x10a7db,_0x59551d,_0x4401e0);_0x4401e0+=Math[_0x1aaa8e(0x392)]((this['lineHeight']()-ImageManager['iconHeight'])/0x2),_0x4401e0-=Math[_0x1aaa8e(0x392)](this[_0x1aaa8e(0x214)]()/0x2),this['drawIcon'](ImageManager[_0x1aaa8e(0x2b6)],_0x59551d,_0x4401e0),_0x4401e0+=this[_0x1aaa8e(0x214)](),this['drawIcon'](ImageManager['requiredPartyMemberIcon'],_0x59551d,_0x4401e0);};function Window_PartyLabel(){this['initialize'](...arguments);}Window_PartyLabel[_0x2c4815(0x286)]=Object[_0x2c4815(0x270)](Window_Base[_0x2c4815(0x286)]),Window_PartyLabel[_0x2c4815(0x286)][_0x2c4815(0x381)]=Window_PartyLabel,Window_PartyLabel[_0x2c4815(0x286)][_0x2c4815(0x38f)]=function(_0x4a3a3f,_0x334425){const _0x1cec9e=_0x2c4815;Window_Base['prototype']['initialize'][_0x1cec9e(0x30d)](this,_0x4a3a3f),this['setText'](_0x334425);},Window_PartyLabel['prototype'][_0x2c4815(0x1c8)]=function(){const _0x46b325=_0x2c4815;this[_0x46b325(0x27b)]=0x0;},Window_PartyLabel[_0x2c4815(0x286)][_0x2c4815(0x2a8)]=function(_0x543b35){const _0x329c22=_0x2c4815;this[_0x329c22(0x2cc)][_0x329c22(0x1a7)](),this[_0x329c22(0x25e)](_0x543b35,0x0,0x0,this[_0x329c22(0x356)],'center');};function Window_PartyActive(){const _0x35f735=_0x2c4815;this[_0x35f735(0x38f)](...arguments);}Window_PartyActive[_0x2c4815(0x286)]=Object[_0x2c4815(0x270)](Window_StatusBase[_0x2c4815(0x286)]),Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x381)]=Window_PartyActive,Window_PartyActive[_0x2c4815(0x1e1)]=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x37d)][_0x2c4815(0x373)],Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x38f)]=function(_0x246c02){const _0x149773=_0x2c4815;Window_StatusBase[_0x149773(0x286)][_0x149773(0x38f)]['call'](this,_0x246c02),this['refresh'](),this[_0x149773(0x292)](),this[_0x149773(0x36c)](0x0);},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x27f)]=function(){const _0x27954f=_0x2c4815;return VisuMZ[_0x27954f(0x35a)]['Settings'][_0x27954f(0x18e)][_0x27954f(0x254)];},Window_PartyActive['prototype'][_0x2c4815(0x2f3)]=function(){return $gameParty['maxBattleMembers']();},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x1cb)]=function(){return $gameParty['maxBattleMembers']();},Window_PartyActive[_0x2c4815(0x286)]['itemHeight']=function(){return this['innerHeight'];},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x2ad)]=function(_0x53eb76){const _0x536cde=_0x2c4815;return $gameParty[_0x536cde(0x247)]()[_0x53eb76];},Window_PartyActive[_0x2c4815(0x286)]['currentActor']=function(){const _0x4f9fe3=_0x2c4815;return this[_0x4f9fe3(0x2ad)](this[_0x4f9fe3(0x31e)]());},Window_PartyActive[_0x2c4815(0x286)]['isCurrentItemEnabled']=function(){const _0x1e135d=_0x2c4815,_0x4a3caf=this[_0x1e135d(0x2ad)](this[_0x1e135d(0x31e)]());return _0x4a3caf?_0x4a3caf[_0x1e135d(0x231)]():!![];},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x21b)]=function(){const _0x5b57f0=_0x2c4815;if($gameParty['members']()[_0x5b57f0(0x295)]<=0x0)return!![];if($gameParty[_0x5b57f0(0x308)]())return![];return $gameParty[_0x5b57f0(0x325)]()[_0x5b57f0(0x295)]>0x0;},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x257)]=function(){const _0x21bcb6=_0x2c4815;Window_StatusBase[_0x21bcb6(0x286)][_0x21bcb6(0x257)][_0x21bcb6(0x30d)](this),this[_0x21bcb6(0x204)]();},Window_PartyActive['prototype'][_0x2c4815(0x347)]=function(_0x4dce49){const _0x5b0217=_0x2c4815;this[_0x5b0217(0x1d2)]()&&this[_0x5b0217(0x300)]();},Window_PartyActive['prototype'][_0x2c4815(0x341)]=function(){const _0x6bd7c1=_0x2c4815,_0x439d16=this[_0x6bd7c1(0x31e)](),_0x27eecb=_0x439d16+0x1>=this[_0x6bd7c1(0x2f3)]()?0x0:_0x439d16+0x1;this[_0x6bd7c1(0x2e1)](_0x439d16,_0x27eecb);},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x2c6)]=function(){const _0x4c158a=_0x2c4815,_0x47bde5=this[_0x4c158a(0x31e)](),_0x90995e=_0x47bde5-0x1<0x0?this[_0x4c158a(0x2f3)]()-0x1:_0x47bde5-0x1;this[_0x4c158a(0x2e1)](_0x47bde5,_0x90995e);},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x2e1)]=function(_0x87df88,_0x26eff7){const _0xbb5395=_0x2c4815,_0x47d8b7=this[_0xbb5395(0x2ad)](_0x87df88),_0x35a3de=this['actor'](_0x26eff7);if(_0x47d8b7&&!_0x47d8b7[_0xbb5395(0x231)]())return;if(_0x35a3de&&!_0x35a3de[_0xbb5395(0x231)]())return;const _0x59318d=$gameParty[_0xbb5395(0x2c3)];_0x59318d[_0x87df88]=_0x35a3de?_0x35a3de[_0xbb5395(0x248)]():0x0,_0x59318d[_0x26eff7]=_0x47d8b7?_0x47d8b7[_0xbb5395(0x248)]():0x0,this[_0xbb5395(0x217)](),this[_0xbb5395(0x21f)](),this[_0xbb5395(0x36c)](_0x26eff7);},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x204)]=function(){const _0x17670c=_0x2c4815;if(!this[_0x17670c(0x1b3)]())return;if(Input[_0x17670c(0x370)](_0x17670c(0x31b))){const _0x2288f3=this['currentActor']();this[_0x17670c(0x1f9)]();}},Window_PartyActive['prototype']['processShiftRemoveShortcut']=function(){const _0x46ea9e=_0x2c4815;SoundManager[_0x46ea9e(0x238)]();const _0x40cb85=this[_0x46ea9e(0x28a)]();$gameParty['removeActorFromBattleMembers'](_0x40cb85[_0x46ea9e(0x248)]()),this[_0x46ea9e(0x33b)](),SceneManager['_scene'][_0x46ea9e(0x268)]();},Window_PartyActive['prototype'][_0x2c4815(0x1b3)]=function(){const _0x4e8f8e=_0x2c4815;if(!this[_0x4e8f8e(0x27f)]())return![];const _0x9b0341=this['currentActor']();return this[_0x4e8f8e(0x1a0)]&&_0x9b0341&&_0x9b0341[_0x4e8f8e(0x231)]();},Window_PartyActive[_0x2c4815(0x286)]['drawItem']=function(_0x58343d){const _0x20e17b=_0x2c4815,_0x28c975=this[_0x20e17b(0x2ad)](_0x58343d);if(!_0x28c975)return this[_0x20e17b(0x203)](_0x58343d);this[_0x20e17b(0x2ef)]();const _0x54ea1d=this['itemRect'](_0x58343d);this[_0x20e17b(0x275)](_0x58343d);const _0x3d9888=_0x54ea1d['y']+_0x54ea1d['height']-this['lineHeight']();this[_0x20e17b(0x30e)](_0x54ea1d['x'],_0x3d9888,_0x54ea1d[_0x20e17b(0x20f)],0x2),this[_0x20e17b(0x297)](_0x28c975,_0x54ea1d['x']+0x2,_0x54ea1d['y']),this['drawActorName'](_0x28c975,_0x54ea1d['x'],_0x3d9888,_0x54ea1d[_0x20e17b(0x20f)]);},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x203)]=function(_0x19b40d){const _0x33eecc=_0x2c4815;this[_0x33eecc(0x2ef)]();const _0x4032c6=this[_0x33eecc(0x30c)](_0x19b40d);this[_0x33eecc(0x336)](_0x4032c6['x'],_0x4032c6['y'],_0x4032c6[_0x33eecc(0x20f)],_0x4032c6[_0x33eecc(0x1bb)]);const _0x1762bf=_0x4032c6['y']+Math[_0x33eecc(0x392)]((_0x4032c6['height']-this['lineHeight']())/0x2);this[_0x33eecc(0x2df)](ColorManager['systemColor']()),this['drawText'](TextManager[_0x33eecc(0x332)],_0x4032c6['x'],_0x1762bf,_0x4032c6['width'],_0x33eecc(0x234));},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x336)]=function(_0x32c9ea,_0x22a349,_0x2fe634,_0x1913a9,_0x3c2240){const _0x38a040=_0x2c4815;_0x3c2240=Math[_0x38a040(0x1f7)](_0x3c2240||0x1,0x1);while(_0x3c2240--){_0x1913a9=_0x1913a9||this[_0x38a040(0x214)](),this[_0x38a040(0x2cc)][_0x38a040(0x1ed)]=0xa0;const _0x261881=ColorManager[_0x38a040(0x1f0)]();this[_0x38a040(0x2cc)]['fillRect'](_0x32c9ea+0x1,_0x22a349+0x1,_0x2fe634-0x2,_0x1913a9-0x2,_0x261881),this[_0x38a040(0x2cc)][_0x38a040(0x1ed)]=0xff;}},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x275)]=function(_0x575dd7){const _0x59700e=_0x2c4815;switch(Window_PartyActive[_0x59700e(0x1e1)][_0x59700e(0x2d2)]()[_0x59700e(0x281)]()){case _0x59700e(0x25d):this[_0x59700e(0x2a6)](_0x575dd7);break;case _0x59700e(0x37a):this['drawItemImageSprite'](_0x575dd7);break;case'svbattler':Imported[_0x59700e(0x27e)]&&this[_0x59700e(0x327)](_0x575dd7);break;};},Window_PartyActive[_0x2c4815(0x286)]['drawItemImageFace']=function(_0x26e39e){const _0x167135=_0x2c4815,_0x112df8=this[_0x167135(0x2ad)](_0x26e39e),_0x3934dc=this[_0x167135(0x30c)](_0x26e39e),_0xc8b743=Math['min'](ImageManager[_0x167135(0x305)],_0x3934dc[_0x167135(0x20f)]-0x2),_0x506cd1=_0x3934dc[_0x167135(0x1bb)]-0x2;this[_0x167135(0x389)](_0x112df8[_0x167135(0x231)]());const _0x2874f8=Math[_0x167135(0x392)](_0x3934dc['x']+(_0x3934dc['width']-_0xc8b743)/0x2);this[_0x167135(0x2b9)](_0x112df8,_0x2874f8,_0x3934dc['y']+0x1,_0xc8b743,_0x506cd1),this[_0x167135(0x389)](!![]);},Window_PartyActive[_0x2c4815(0x286)]['drawItemImageSprite']=function(_0x3efb74){const _0x9559c4=_0x2c4815,_0x5a6602=this[_0x9559c4(0x2ad)](_0x3efb74),_0x4fe637=this[_0x9559c4(0x30c)](_0x3efb74),_0x10dc69=VisuMZ['PartySystem'][_0x9559c4(0x274)]['Window'],_0x4f8eb9=_0x4fe637['x']+Math['round'](_0x4fe637[_0x9559c4(0x20f)]/0x2)+_0x10dc69[_0x9559c4(0x376)],_0x410848=_0x4fe637['y']+_0x4fe637[_0x9559c4(0x1bb)]-this[_0x9559c4(0x214)]()-_0x10dc69[_0x9559c4(0x34c)];this[_0x9559c4(0x2d4)](_0x5a6602,_0x4f8eb9,_0x410848);},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x327)]=function(_0x352b1b){const _0x1e5e3e=_0x2c4815,_0x358a57=this[_0x1e5e3e(0x2ad)](_0x352b1b),_0x111812=_0x358a57['battlerName'](),_0x17fe32=this[_0x1e5e3e(0x30c)](_0x352b1b),_0x242d4f=VisuMZ['PartySystem'][_0x1e5e3e(0x274)][_0x1e5e3e(0x37d)],_0x791f66=_0x17fe32['x']+Math[_0x1e5e3e(0x392)](_0x17fe32['width']/0x2)+_0x242d4f[_0x1e5e3e(0x262)],_0xbc62ba=_0x17fe32['y']+_0x17fe32['height']-this[_0x1e5e3e(0x214)]()-_0x242d4f['ActiveBattlerOffsetY'];this[_0x1e5e3e(0x1e5)](_0x111812,_0x791f66,_0xbc62ba);},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x30e)]=function(_0x32834a,_0xa5f5a3,_0x28302b,_0xb7c409){const _0x30ed3b=_0x2c4815,_0x2c7e17=ColorManager[_0x30ed3b(0x27d)](),_0x4af68b=ColorManager[_0x30ed3b(0x2c5)](),_0x49a5a7=_0x28302b/0x2,_0x3ec780=this['lineHeight']();while(_0xb7c409--){this[_0x30ed3b(0x2cc)][_0x30ed3b(0x21a)](_0x32834a,_0xa5f5a3,_0x49a5a7,_0x3ec780,_0x4af68b,_0x2c7e17),this[_0x30ed3b(0x2cc)][_0x30ed3b(0x21a)](_0x32834a+_0x49a5a7,_0xa5f5a3,_0x49a5a7,_0x3ec780,_0x2c7e17,_0x4af68b);}},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x209)]=function(_0x40557b,_0x2f331e,_0x4a8bb1,_0x4e7027){const _0x43141e=_0x2c4815;_0x4e7027=_0x4e7027||0xa8,this[_0x43141e(0x2df)](ColorManager[_0x43141e(0x1da)](_0x40557b)),this['drawText'](_0x40557b[_0x43141e(0x35d)](),_0x2f331e,_0x4a8bb1,_0x4e7027,_0x43141e(0x234));},Window_PartyActive['prototype'][_0x2c4815(0x1b2)]=function(_0x3eb537){const _0x32851d=_0x2c4815;this['_statusWindow']=_0x3eb537,this[_0x32851d(0x33b)]();},Window_PartyActive[_0x2c4815(0x286)][_0x2c4815(0x33b)]=function(){const _0x39ed23=_0x2c4815;if(this[_0x39ed23(0x2db)])this[_0x39ed23(0x2db)]['setActor'](this[_0x39ed23(0x2ad)](this['index']()));};function Window_PartyReserve(){const _0x53e3a1=_0x2c4815;this[_0x53e3a1(0x38f)](...arguments);}Window_PartyReserve['prototype']=Object[_0x2c4815(0x270)](Window_StatusBase[_0x2c4815(0x286)]),Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x381)]=Window_PartyReserve,Window_PartyReserve[_0x2c4815(0x1e1)]=VisuMZ[_0x2c4815(0x35a)]['Settings'][_0x2c4815(0x37d)]['ReservePartyGraphic'],Window_PartyReserve['_rowThickness']=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x37d)][_0x2c4815(0x2a0)],Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x38f)]=function(_0x488147){const _0x3f9271=_0x2c4815;Window_StatusBase[_0x3f9271(0x286)]['initialize']['call'](this,_0x488147),this['_lastIndex']=0x0,this['refresh']();},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x1cb)]=function(){const _0x24f2ca=_0x2c4815;return VisuMZ[_0x24f2ca(0x35a)]['Settings'][_0x24f2ca(0x37d)][_0x24f2ca(0x34e)]||0x1;},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x26d)]=function(){const _0x4f6933=_0x2c4815;return this[_0x4f6933(0x214)]()*Window_PartyReserve['_rowThickness']+0x6;},Window_PartyReserve[_0x2c4815(0x286)]['addRemoveCommand']=function(){const _0x418a41=_0x2c4815;return VisuMZ['PartySystem'][_0x418a41(0x274)]['General'][_0x418a41(0x254)];},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x2f3)]=function(){const _0xab9d21=_0x2c4815;let _0x399a05=$gameParty['reserveMembers']()[_0xab9d21(0x295)];if(this['addRemoveCommand']())_0x399a05++;return _0x399a05;},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x2ad)]=function(_0x24748b){return $gameParty['reserveMembers']()[_0x24748b];},Window_PartyReserve['prototype'][_0x2c4815(0x28a)]=function(){const _0xb72b09=_0x2c4815;return this[_0xb72b09(0x2ad)](this[_0xb72b09(0x31e)]());},Window_PartyReserve[_0x2c4815(0x286)]['playOkSound']=function(){const _0xc33da=_0x2c4815;SoundManager[_0xc33da(0x238)]();},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x1a2)]=function(){const _0x2886a2=_0x2c4815,_0x30c3e4=this['actor'](this[_0x2886a2(0x31e)]());return _0x30c3e4?_0x30c3e4[_0x2886a2(0x231)]():!![];},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x257)]=function(){const _0x23585c=_0x2c4815;Window_StatusBase[_0x23585c(0x286)][_0x23585c(0x257)]['call'](this),this[_0x23585c(0x25f)]();},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x366)]=function(_0x1886a7){const _0x5da458=_0x2c4815;this[_0x5da458(0x31e)]()<=0x0&&Input['isTriggered']('up')?this[_0x5da458(0x26e)]():Window_StatusBase[_0x5da458(0x286)][_0x5da458(0x366)]['call'](this,_0x1886a7);},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x341)]=function(){const _0x3e5328=_0x2c4815,_0x2c22aa=this[_0x3e5328(0x31e)](),_0x24e2cf=_0x2c22aa+0x1>=this['maxItems']()-0x1?0x0:_0x2c22aa+0x1;this['quickSwap'](_0x2c22aa,_0x24e2cf);},Window_PartyReserve[_0x2c4815(0x286)]['cursorPageup']=function(){const _0x12fe44=_0x2c4815,_0x5e7cd7=this[_0x12fe44(0x31e)](),_0x1f2421=_0x5e7cd7-0x1<0x0?this[_0x12fe44(0x2f3)]()-0x2:_0x5e7cd7-0x1;this[_0x12fe44(0x2e1)](_0x5e7cd7,_0x1f2421);},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x2e1)]=function(_0xbaec68,_0x260f49){const _0x11e354=_0x2c4815,_0x496a9=this[_0x11e354(0x2ad)](_0xbaec68),_0x41db79=this['actor'](_0x260f49);if(!_0x496a9?.['isFormationChangeOk']()||!_0x41db79?.[_0x11e354(0x231)]())return;else{if(!_0x496a9||!_0x41db79)return;}const _0x1b2713=$gameParty[_0x11e354(0x2aa)],_0x2a1374=_0x1b2713[_0x11e354(0x22e)](_0x496a9[_0x11e354(0x248)]()),_0x2d2c38=_0x1b2713[_0x11e354(0x22e)](_0x41db79[_0x11e354(0x248)]());_0x1b2713[_0x2a1374]=_0x41db79?_0x41db79['actorId']():0x0,_0x1b2713[_0x2d2c38]=_0x496a9?_0x496a9[_0x11e354(0x248)]():0x0,this[_0x11e354(0x217)](),this['playCursorSound'](),this[_0x11e354(0x36c)](_0x260f49);},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x25f)]=function(){const _0xe7e688=_0x2c4815;if(!this[_0xe7e688(0x359)]())return;Input['isTriggered']('shift')&&this[_0xe7e688(0x258)]();},Window_PartyReserve['prototype'][_0x2c4815(0x258)]=function(){const _0x37f83b=_0x2c4815;SoundManager[_0x37f83b(0x238)](),$gameParty[_0x37f83b(0x35f)](),this[_0x37f83b(0x36c)](0x0),SceneManager[_0x37f83b(0x212)][_0x37f83b(0x268)]();},Window_PartyReserve[_0x2c4815(0x286)]['isShiftShortcutEnabled']=function(){const _0x426bf1=_0x2c4815;return this[_0x426bf1(0x1a0)];},Window_PartyReserve['prototype'][_0x2c4815(0x200)]=function(){const _0x3bd65d=_0x2c4815,_0x4e5f1c=this[_0x3bd65d(0x28a)]();return _0x4e5f1c?_0x4e5f1c[_0x3bd65d(0x31e)]():-0x1;},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x23f)]=function(_0x449c0e){const _0x291911=_0x2c4815;Window_StatusBase[_0x291911(0x286)][_0x291911(0x23f)]['call'](this,_0x449c0e);if(_0x449c0e>=0x0)this[_0x291911(0x210)]=_0x449c0e;},Window_PartyReserve[_0x2c4815(0x286)]['reselect']=function(){const _0x1b5abf=_0x2c4815;this[_0x1b5abf(0x210)]=Math['min'](this['_lastIndex'],this['maxItems']()-0x1),this[_0x1b5abf(0x36c)](this[_0x1b5abf(0x210)]),this[_0x1b5abf(0x374)](!![]),this[_0x1b5abf(0x339)]=!![];},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x340)]=function(_0x3e8e93){const _0x19417a=_0x2c4815,_0x4aa6a8=this['actor'](_0x3e8e93);if(!_0x4aa6a8)return this[_0x19417a(0x213)](_0x3e8e93);const _0x251d87=this[_0x19417a(0x342)](_0x3e8e93);this[_0x19417a(0x275)](_0x3e8e93);const _0x5b5286=0xa8,_0x53aff0=Window_PartyReserve[_0x19417a(0x2c8)]===0x1,_0x4f5d72=ImageManager[_0x19417a(0x1de)]*(_0x53aff0?0x2:0x1),_0xa992b=this[_0x19417a(0x334)]()+this[_0x19417a(0x1ac)](),_0x5d8bdb=_0x251d87[_0x19417a(0x20f)]-_0x5b5286,_0x42639b=_0x251d87['x']+_0x4f5d72+Math['min'](_0xa992b,_0x5d8bdb),_0x14770b=_0x53aff0?![]:!![];this[_0x19417a(0x389)](_0x4aa6a8[_0x19417a(0x231)]()),this['drawActorPartyIcons'](_0x4aa6a8,_0x251d87['x'],_0x251d87['y'],_0x14770b),this['drawActorName'](_0x4aa6a8,_0x42639b,_0x251d87['y'],_0x5b5286),this['changePaintOpacity'](!![]);},Window_PartyReserve['prototype'][_0x2c4815(0x334)]=function(){const _0x13c5ac=_0x2c4815,_0x201e83=VisuMZ[_0x13c5ac(0x35a)][_0x13c5ac(0x274)]['Window'];switch(Window_PartyReserve[_0x13c5ac(0x1e1)]['toLowerCase']()[_0x13c5ac(0x281)]()){case'face':return ImageManager[_0x13c5ac(0x305)];case _0x13c5ac(0x37a):return _0x201e83[_0x13c5ac(0x22c)]*0x2;case'svbattler':return _0x201e83[_0x13c5ac(0x2ab)]*0x2;};},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x213)]=function(_0xaf7cc8){const _0x2c6837=_0x2c4815,_0x174938=this[_0x2c6837(0x342)](_0xaf7cc8);this[_0x2c6837(0x389)](!![]);const _0x40bc14=TextManager[_0x2c6837(0x387)];this[_0x2c6837(0x25e)](_0x40bc14,_0x174938['x'],_0x174938['y'],_0x174938[_0x2c6837(0x20f)],_0x2c6837(0x234));},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x275)]=function(_0x2827e5){const _0x20d7a2=_0x2c4815;switch(Window_PartyReserve['_actorGraphic'][_0x20d7a2(0x2d2)]()[_0x20d7a2(0x281)]()){case _0x20d7a2(0x25d):this[_0x20d7a2(0x2a6)](_0x2827e5);break;case _0x20d7a2(0x37a):this['drawItemImageSprite'](_0x2827e5);break;case _0x20d7a2(0x206):Imported[_0x20d7a2(0x27e)]&&this[_0x20d7a2(0x327)](_0x2827e5);break;};},Window_PartyReserve['prototype'][_0x2c4815(0x2a6)]=function(_0x4dcd96){const _0x3dc0be=_0x2c4815,_0x484e4a=this['actor'](_0x4dcd96),_0x1377be=this[_0x3dc0be(0x30c)](_0x4dcd96),_0x103c4b=Window_PartyReserve[_0x3dc0be(0x2c8)]===0x1;_0x1377be['x']+=ImageManager['iconWidth']*(_0x103c4b?0x2:0x1);const _0x4efa44=ImageManager['faceWidth'],_0x2fecbe=_0x1377be['height']-0x2;this['changePaintOpacity'](_0x484e4a[_0x3dc0be(0x231)]()),this[_0x3dc0be(0x2b9)](_0x484e4a,_0x1377be['x']+0x1,_0x1377be['y']+0x1,_0x4efa44,_0x2fecbe),this[_0x3dc0be(0x389)](!![]);},Window_PartyReserve[_0x2c4815(0x286)][_0x2c4815(0x1bd)]=function(_0x4954a5){const _0x2d2139=_0x2c4815,_0x85da9=this[_0x2d2139(0x2ad)](_0x4954a5),_0x3d2c51=this['itemRect'](_0x4954a5),_0x2deb4d=Window_PartyReserve[_0x2d2139(0x2c8)]===0x1;_0x3d2c51['x']+=ImageManager[_0x2d2139(0x1de)]*(_0x2deb4d?0x2:0x1);const _0x561fd8=VisuMZ[_0x2d2139(0x35a)][_0x2d2139(0x274)][_0x2d2139(0x37d)],_0x28a144=_0x3d2c51['x']+_0x561fd8['ReserveSpriteOffsetX']+this[_0x2d2139(0x1ac)](),_0x44c610=_0x3d2c51['y']+_0x3d2c51[_0x2d2139(0x1bb)]-_0x561fd8['ReserveSpriteOffsetY'];this['drawActorCharacter'](_0x85da9,_0x28a144,_0x44c610);},Window_PartyReserve[_0x2c4815(0x286)]['drawItemImageSvActor']=function(_0x1d580c){const _0x36e9f2=_0x2c4815,_0x4d8edb=this['actor'](_0x1d580c),_0x30f010=_0x4d8edb[_0x36e9f2(0x1f3)](),_0x46d330=this[_0x36e9f2(0x30c)](_0x1d580c),_0x21ec4b=Window_PartyReserve[_0x36e9f2(0x2c8)]===0x1;_0x46d330['x']+=ImageManager[_0x36e9f2(0x1de)]*(_0x21ec4b?0x2:0x1);const _0x448923=VisuMZ[_0x36e9f2(0x35a)][_0x36e9f2(0x274)]['Window'],_0x524fef=_0x46d330['x']+_0x448923[_0x36e9f2(0x2ab)]+this['itemPadding'](),_0x184b31=_0x46d330['y']+_0x46d330[_0x36e9f2(0x1bb)]-_0x448923['ReserveBattlerOffsetY'];this[_0x36e9f2(0x1e5)](_0x30f010,_0x524fef,_0x184b31);},Window_PartyReserve['prototype'][_0x2c4815(0x1b2)]=function(_0x44cebb){const _0x4cf5b0=_0x2c4815;this[_0x4cf5b0(0x2db)]=_0x44cebb,this[_0x4cf5b0(0x33b)]();},Window_PartyReserve[_0x2c4815(0x286)]['callUpdateHelp']=function(){const _0x127e66=_0x2c4815;this['_statusWindow']&&this[_0x127e66(0x2db)]['setActor'](this[_0x127e66(0x2ad)](this[_0x127e66(0x31e)]()));};function Window_PartyStatus(){const _0x550c07=_0x2c4815;this[_0x550c07(0x38f)](...arguments);}Window_PartyStatus[_0x2c4815(0x286)]=Object['create'](Window_StatusBase[_0x2c4815(0x286)]),Window_PartyStatus[_0x2c4815(0x286)][_0x2c4815(0x381)]=Window_PartyStatus,Window_PartyStatus['prototype']['initialize']=function(_0x1d6db6){const _0x4596e7=_0x2c4815;this[_0x4596e7(0x1d4)]=null,Window_StatusBase[_0x4596e7(0x286)][_0x4596e7(0x38f)]['call'](this,_0x1d6db6);},Window_PartyStatus[_0x2c4815(0x286)][_0x2c4815(0x336)]=function(_0x38e503,_0x4e870a,_0xd2f02b,_0x5f40a0,_0xd8c968){const _0x3a558f=_0x2c4815;if(VisuMZ[_0x3a558f(0x35a)][_0x3a558f(0x274)][_0x3a558f(0x18e)][_0x3a558f(0x32c)]===![])return;_0xd8c968=Math['max'](_0xd8c968||0x1,0x1);while(_0xd8c968--){_0x5f40a0=_0x5f40a0||this[_0x3a558f(0x214)](),this[_0x3a558f(0x2cc)][_0x3a558f(0x1ed)]=0xa0;const _0x22ca5e=ColorManager[_0x3a558f(0x319)]();this[_0x3a558f(0x2cc)][_0x3a558f(0x337)](_0x38e503+0x1,_0x4e870a+0x1,_0xd2f02b-0x2,_0x5f40a0-0x2,_0x22ca5e),this[_0x3a558f(0x2cc)][_0x3a558f(0x1ed)]=0xff;}},ColorManager[_0x2c4815(0x319)]=function(){const _0x56e54a=_0x2c4815,_0x23e671=VisuMZ[_0x56e54a(0x35a)][_0x56e54a(0x274)][_0x56e54a(0x18e)];let _0x587a5c=_0x23e671[_0x56e54a(0x2c4)]!==undefined?_0x23e671[_0x56e54a(0x2c4)]:0x13;return ColorManager[_0x56e54a(0x245)](_0x587a5c);},Window_PartyStatus[_0x2c4815(0x286)][_0x2c4815(0x388)]=function(_0x32d585){const _0x454804=_0x2c4815;if(this[_0x454804(0x1d4)]===_0x32d585)return;this[_0x454804(0x1d4)]=_0x32d585;if(_0x32d585){const _0x4846ff=ImageManager[_0x454804(0x2d9)](_0x32d585[_0x454804(0x1bc)]());_0x4846ff['addLoadListener'](this['refresh']['bind'](this));}else this[_0x454804(0x217)]();},Window_PartyStatus['prototype'][_0x2c4815(0x217)]=function(){const _0x58bb2e=_0x2c4815;Window_StatusBase[_0x58bb2e(0x286)][_0x58bb2e(0x217)][_0x58bb2e(0x30d)](this),this[_0x58bb2e(0x2cc)]['clear'](),this[_0x58bb2e(0x2ef)](),VisuMZ[_0x58bb2e(0x35a)][_0x58bb2e(0x274)][_0x58bb2e(0x37d)]['StatusWindowDraw'][_0x58bb2e(0x30d)](this);},Window_PartyStatus[_0x2c4815(0x286)][_0x2c4815(0x19a)]=function(){const _0x5f1bd7=_0x2c4815;if(!this[_0x5f1bd7(0x1d4)]){this['drawItemDarkRect'](0x0,0x0,this[_0x5f1bd7(0x356)],this[_0x5f1bd7(0x27a)]);const _0x50d4e1=Math[_0x5f1bd7(0x392)]((this[_0x5f1bd7(0x27a)]-this['lineHeight']())/0x2);this[_0x5f1bd7(0x2df)](ColorManager[_0x5f1bd7(0x221)]()),this[_0x5f1bd7(0x25e)](TextManager['emptyPartyMember'],0x0,_0x50d4e1,this[_0x5f1bd7(0x356)],'center');return;}this[_0x5f1bd7(0x2b9)](this[_0x5f1bd7(0x1d4)],0x1,0x0,ImageManager['faceWidth'],ImageManager[_0x5f1bd7(0x199)]),this[_0x5f1bd7(0x1ce)](this[_0x5f1bd7(0x1d4)],ImageManager[_0x5f1bd7(0x305)]+0x24,0x0);const _0x1546b6=this['lineHeight'](),_0x3552c6=this['actorParams'](),_0x5908c5=Math['round'](this[_0x5f1bd7(0x356)]/0x2),_0x29c6c6=Math['ceil'](_0x3552c6[_0x5f1bd7(0x295)]/0x2)*_0x1546b6,_0x54ea47=0x0;let _0x357a62=0x0,_0x3237fc=ImageManager[_0x5f1bd7(0x199)]+_0x1546b6/0x2;for(const _0x4a928a of _0x3552c6){this[_0x5f1bd7(0x336)](_0x357a62,_0x3237fc,_0x5908c5,_0x1546b6),this['drawParamName'](_0x4a928a,_0x357a62,_0x3237fc,_0x5908c5),this[_0x5f1bd7(0x317)](_0x4a928a,_0x357a62,_0x3237fc,_0x5908c5),_0x357a62===_0x54ea47?_0x357a62+=_0x5908c5:(_0x357a62=_0x54ea47,_0x3237fc+=_0x1546b6);}},Window_PartyStatus[_0x2c4815(0x286)][_0x2c4815(0x28e)]=function(){const _0x7afdae=_0x2c4815;return Imported['VisuMZ_0_CoreEngine']?VisuMZ[_0x7afdae(0x20c)][_0x7afdae(0x274)][_0x7afdae(0x1f5)][_0x7afdae(0x1ad)]:[0x2,0x3,0x4,0x5,0x6,0x7];},Window_PartyStatus['prototype'][_0x2c4815(0x2f4)]=function(_0x41af93,_0xc1700a,_0x26cf40,_0x152e23){const _0x58e03e=_0x2c4815,_0x238e96=this['itemPadding']();_0x152e23-=_0x238e96*0x2;if(Imported[_0x58e03e(0x201)])this[_0x58e03e(0x2d3)](_0xc1700a+_0x238e96,_0x26cf40,_0x152e23,_0x41af93,![]);else{const _0x5a33a9=TextManager[_0x58e03e(0x29b)](_0x41af93);this[_0x58e03e(0x2df)](ColorManager[_0x58e03e(0x221)]()),this[_0x58e03e(0x25e)](_0x5a33a9,_0xc1700a+_0x238e96,_0x26cf40,_0x152e23);}},Window_PartyStatus['prototype'][_0x2c4815(0x317)]=function(_0x4230e4,_0x555205,_0x48e8ea,_0x118513){const _0x469d6a=_0x2c4815;this[_0x469d6a(0x2ef)]();const _0x659859=this['itemPadding'](),_0x1c1db1=this['getParamValue'](_0x4230e4);this[_0x469d6a(0x25e)](_0x1c1db1,_0x555205+_0x659859,_0x48e8ea,_0x118513-_0x659859*0x2,_0x469d6a(0x243));},Window_PartyStatus[_0x2c4815(0x286)][_0x2c4815(0x26f)]=function(_0x476f74){const _0x383312=_0x2c4815,_0x21d97e=this['_actor'];return Imported[_0x383312(0x201)]?_0x21d97e[_0x383312(0x1b6)](_0x476f74,!![]):_0x21d97e[_0x383312(0x29b)](_0x476f74);};function _0x15ba(_0x2c7c27,_0x2f5498){const _0x43a2a3=_0x43a2();return _0x15ba=function(_0x15ba82,_0x3dfc79){_0x15ba82=_0x15ba82-0x18c;let _0x459149=_0x43a2a3[_0x15ba82];return _0x459149;},_0x15ba(_0x2c7c27,_0x2f5498);}function Window_PartyBattleSwitch(){const _0x43ffa6=_0x2c4815;this[_0x43ffa6(0x38f)](...arguments);}function _0x43a2(){const _0x4470a9=['AssistRemove','isImmediateTpb','centerSprite','DrawBackRect','partySwitchWindowRectStandard','_battleSystemIncompatibilityError','VisuMZ_2_BattleSystemSTB','commandFormation','visible','emptyPartyMember','FUNC','nameStartPosition','MaxBattleMembers','drawItemDarkRect','fillRect','isRequiredInParty','cursorVisible','partyChangeRefresh','callUpdateHelp','iconHeight','teamBasedFirstAvailableMember','initEquips','battlePartyChangeIcon','drawItem','cursorPagedown','itemLineRect','textColor','ReservePartyWindowBgType','Window_ActorCommand_updateHelp','_reservePartyLabel','cursorDown','ChangeMaxBattleMembers','startSwitchOutAnimation','bind','adjustSprite','ActiveSpriteOffsetY','_debug','ReserveCol','checkInitBattleMembers','filter','_partyCommandWindow','setBackgroundType','bitmap','_activePartyWindow','reservePartyWindowRect','innerWidth','isPTB','buttonAssistText4','isShiftShortcutEnabled','PartySystem','_activePartyLabel','onActiveOk','name','isSTB','sortActors','setPartyRequirement','inBattle','ActivePartyWindowBgType','3kLdkOg','swapOrderPartySystemPlugin','_actionBattlers','cursorUp','windowPadding','Game_Unit_inBattle','Scene_Battle_isTimeActive','BattleHelpSwitch','applyBattlePartySwitchCooldown','smoothSelect','BgFilename1','isPlaytest','\x5cI[%1]%2','isTriggered','60pfvBpq','format','ActivePartyGraphic','ensureCursorVisible','setupBattleTest','ActiveSpriteOffsetX','BattlePartyIcon','isCTB','clearPartyBattleCommandCooldown','sprite','canSwitchPartyInBattle','Game_Party_addActor','Window','cancel','commandStyle','requiredPartyMemberIcon','constructor','currentSymbol','assistSortPartyMembers','formation','isEnabled','addCustomCommands','removePartyMember','setActor','changePaintOpacity','StatusLabelRect','return\x200','makeActionOrders','parse','isPartyCommandEnabled','initialize','battleLayoutStyle','isSceneGridTactics','round','createCustomBackgroundImages','match','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','battlePartyChangeCmd','General','processPartySwitchMember','swapOrder','_target','Scene_Battle_updateBattleProcess','417856xatBml','BgSettings','VisuMZ_2_BattleSystemOTB','findSymbol','_backSprite1','postPartySwitchMenuTpb','faceHeight','refreshOG','_currentActor','isUsingBattleGridTactics','clearPartySwitchCommandCooldown','Lock','createBackground','active','clamp','isCurrentItemEnabled','isAnyInputWindowActive','Sprite_Actor_update','callFormation','setPartyLock','clear','selectActor','addCommand','members','VisuMZ_2_BattleSystemFTB','itemPadding','DisplayedParams','gridRank','ReservePartyLabelBgType','gridMoveTo','isOTB','setStatusWindow','isShiftRemoveShortcutEnabled','includes','push','paramValueByName','Game_Party_setupStartingMembers','activeParty','VisuMZ_2_BattleGridSystem','_bypassAutoSavePartySystem','height','faceName','drawItemImageSprite','status','isETB','partySwitchWindowRect','otbReturnBattlerToTurnOrders','defaultMaxBattleMembers','_clickHandler','ARRAYEVAL','open','Game_Troop_increaseTurn','_actorCommandWindow','updatePadding','partySwitchWindowRectBorder','updateBattlePartySwitchCooldown','maxCols','createReservePartyLabel','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','drawActorSimpleStatus','_partyRequired','tpbImmediateAction','callPartyMemberSwitch','isOkEnabled','drawIcon','_actor','799617bZsGad','close','Empty','Value','replaceActionBattlersPartySwitch','hpColor','initBattleMembers','ARRAYNUM','isFormationCommandEnabled','iconWidth','battlePartySwitchCmd','initPartySystem','_actorGraphic','StatusLabelBgType','reserveParty','createActivePartyWindow','drawSvActor','setHandler','AssistSort','maxBattleMembers','_partySystemSwitchOut','regenerateAll','description','addActorToBattleMembers','paintOpacity','removeActorFromBattleMembers','StatusWindowBgType','gaugeBackColor','text','_helpWindow','battlerName','_list','Param','charged','max','SnapshotOpacity','processShiftRemoveShortcut','Status','sortActionOrdersBTB','battlePartySwitchCooldown','scaleSprite','followers','Window_PartyCommand_updateHelp','pendingIndex','VisuMZ_0_CoreEngine','toUpperCase','drawItemEmpty','checkShiftRemoveShortcut','Game_Party_removeActor','svbattler','updateTargetsForPartySwitch','isShowPartySwitchOutAnimation','drawActorName','ActiveTpbFormationMessage','ActivePartyLabelRect','CoreEngine','update','16556517PfIfla','width','_lastIndex','BattlePartyCmd','_scene','drawRemoveCommand','lineHeight','assistSwapPositions','processDrawItem','refresh','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','floor','gradientFillRect','isCancelEnabled','uiInputPosition','terminate','_backSprite2','playCursorSound','_targets','systemColor','isNextScene','startSwitchInAnimation','initMaxBattleMembers','requestRefresh','drawActorPartyIconsHorz','clearBypassAutoSave','allMembers','isFormationCommandAdded','VisuMZ_2_BattleSystemBTB','createPartyCommandWindowBattleCore','ReserveSpriteOffsetX','removePartyCommand','indexOf','282426BPqjQh','Scene_BattleGridTactics','isFormationChangeOk','loadSvActor','isSceneMap','center','VisuMZ_2_BattleSystemCTB','isTpb','makeActions','playEquip','addLoadListener','setBattler','_partyLocked','level','ReservePartyLabelRect','isFormationEnabled','select','statusWindowRect','185NPJKYT','commandPartyMemberSwitch','right','createActivePartyLabel','getColor','direction','rawBattleMembers','actorId','assistSwapInPartyMember','isSceneBattle','updateTurnOrderSTB','map','_pagedownButton','sort','createReservePartyWindow','ARRAYSTRUCT','SceneManager_isNextSceneBattleTransitionable','exit','uiMenuStyle','AddRemoveCmd','_reservePartyWindow','Require','processCursorMove','processShiftSortShortcut','_partySystemBattleCommandCooldown','rearrangePartyActors','_windowLayer','onPartySwitchCancel','face','drawText','checkShiftSortShortcut','VisuMZ_2_BattleSystemPTB','AssistSwapIn','ActiveBattlerOffsetX','Game_Battler_regenerateAll','_callSceneParty','removeActionBattlersOTB','onBattleStart','isActiveTpb','refreshAllWindows','isTimeActive','_inputting','setupStartingMembers','placeBasicGauges','itemHeight','processCancel','getParamValue','create','createPartySwitchWindow','isPreviousScene','isPreviousSceneBattleTransitionable','Settings','drawItemImage','_statusPartyWindow','version','concat','reservePartyLabelRect','innerHeight','padding','random','dimColor1','VisuMZ_1_MainMenuCore','addRemoveCommand','isSceneParty','trim','addText','hasBattleSystemIncompatibilities','clearDamagePopup','testBattlers','prototype','addActor','slice','ConvertParams','currentActor','gridFlank','Game_Actor_setup','startOpacity','actorParams','assistSwapOutPartyMember','reserveTransfer','addFormationCommand','activate','_tpbSceneChangeCacheActor','addWindow','length','increaseTurn','drawActorPartyIcons','reserveMembers','Scene_Battle_createPartyCommandWindowBattleCore','BgFilename2','param','splice','ReservePartyWindowRect','Scene_Base_isAutosaveEnabled','RequireIcon','ReserveItemThickness','_partySwitchTargetActor','PartyCmdCooldown','createPageButtons','remove','buttonAssistKey3','drawItemImageFace','Scene_Battle_createActorCommandWindow','setText','drawItemStatus','_actors','ReserveBattlerOffsetX','itemRectWithPadding','actor','characterName','removeActor','_otb_actionBattlersNext','onBattlePartySwitch','Actors','LockIcon','loadPartyImages','startMove','lockPartyMemberIcon','NUM','BattleSwitchOut','drawActorFace','isAppeared','Vocab','preparePartySwitchMember','buttonAssistText1','AssistSwapPosition','BattleHelpFormation','ARRAYSTR','Game_Battler_onBattleStart','onPartySwitchOk','_battleMembers','BackRectColor','dimColor2','cursorPageup','_partySwitchBattleCommandCooldown','_rowThickness','updatePartySwitch','addNonBattleTestMembers','isPartyCommandAdded','contents','QueuePartyScene','equips','drawActorClass','_pageupButton','border','toLowerCase','drawParamText','drawActorCharacter','activePartyLabelRect','MoveRandomToActive','postPartySwitchMenuTurnBased','Game_Party_swapOrder','loadFace','_subject','_statusWindow','3OLJZBx','drawActorPartyIconsVert','onReserveOk','changeTextColor','_logWindow','quickSwap','_tpbChargeTime','createAllWindows','StatusWindowRect','ReserveParty','2112148yCzHuq','statusLabelRect','updateHelp','_partySwitchDuration','changeLevel','buttonAssistText3','isBTB','onReserveCancel','ActorCmdCooldown','resetFontSettings','708098ufIoEY','createStatusWindow','setBattlePartySwitchCooldown','maxItems','drawParamName','deactivate','Scene_Battle_isAnyInputWindowActive','createActorCommandWindow','getBackgroundOpacity','Game_Party_initialize','ActorCmdWinAddParty','Remove','Scene_Battle_createAllWindows','ActivePartyWindowRect','MovePartyIndexToReserve','isRightInputMode','processOk','VisuMZ_2_BattleSystemETB','registerCommand','isQueueFormationMenu','Game_Party_setupBattleTest','faceWidth','createInnerSprite','SwitchOutAnimation','anyRequiredPartyMembersInReserve','setBackgroundOpacity','_battleMaxSize','reselect','itemRect','call','drawDarkRect','updateTurnOrderCTB','actor%1-stateIcon','STRUCT','parameters','_tpbState','isNextSceneBattleTransitionable','RequirePartyMembers','setup','drawParamValue','changeMaxBattleMembers','getPartySystemBackColor','STR','shift','activePartyWindowRect','SceneManager_isPreviousSceneBattleTransitionable','index','_statusPartyLabel','1599334mSqXIq','AssistSwapOut','addPartyCommand','addChild','_callPartyMemberSwitch','battleMembers','battler','drawItemImageSvActor','_partyMemberSwitchWindow'];_0x43a2=function(){return _0x4470a9;};return _0x43a2();}Window_PartyBattleSwitch[_0x2c4815(0x286)]=Object[_0x2c4815(0x270)](Window_StatusBase[_0x2c4815(0x286)]),Window_PartyBattleSwitch[_0x2c4815(0x286)]['constructor']=Window_PartyBattleSwitch,Window_PartyBattleSwitch[_0x2c4815(0x286)][_0x2c4815(0x38f)]=function(_0x469b7e){const _0x1f1c88=_0x2c4815;Window_StatusBase[_0x1f1c88(0x286)][_0x1f1c88(0x38f)][_0x1f1c88(0x30d)](this,_0x469b7e),this[_0x1f1c88(0x352)](VisuMZ[_0x1f1c88(0x35a)][_0x1f1c88(0x274)][_0x1f1c88(0x37d)]['BattleSwitchWindowBgType']),this['openness']=0x0;},Window_PartyBattleSwitch[_0x2c4815(0x286)]['loadFaceImages']=function(){const _0xecd4df=_0x2c4815;for(const _0x4b05d2 of $gameParty['allMembers']()){ImageManager[_0xecd4df(0x2d9)](_0x4b05d2[_0xecd4df(0x1bc)]());}},Window_PartyBattleSwitch['prototype'][_0x2c4815(0x1cb)]=function(){return 0x1;},Window_PartyBattleSwitch[_0x2c4815(0x286)][_0x2c4815(0x2ad)]=function(_0xfb9bd4){return $gameParty['reserveMembers']()[_0xfb9bd4];},Window_PartyBattleSwitch[_0x2c4815(0x286)][_0x2c4815(0x28a)]=function(){const _0x5bed81=_0x2c4815;return this[_0x5bed81(0x2ad)](this[_0x5bed81(0x31e)]());},Window_PartyBattleSwitch[_0x2c4815(0x286)]['itemHeight']=function(){return this['lineHeight']()*0x2+0x8;},Window_PartyBattleSwitch[_0x2c4815(0x286)]['maxItems']=function(){return $gameParty['reserveMembers']()['length'];},Window_PartyBattleSwitch[_0x2c4815(0x286)]['activate']=function(){const _0x5aa8c6=_0x2c4815;Window_StatusBase['prototype']['activate'][_0x5aa8c6(0x30d)](this),this[_0x5aa8c6(0x1c5)](),this[_0x5aa8c6(0x217)](),this['smoothSelect'](0x0);},Window_PartyBattleSwitch[_0x2c4815(0x286)][_0x2c4815(0x2f5)]=function(){const _0x2ac683=_0x2c4815;Window_StatusBase[_0x2ac683(0x286)][_0x2ac683(0x2f5)]['call'](this),this['close']();},Window_PartyBattleSwitch[_0x2c4815(0x286)][_0x2c4815(0x1a2)]=function(){const _0x1ff011=_0x2c4815;return this[_0x1ff011(0x385)](this['currentActor']());},Window_PartyBattleSwitch[_0x2c4815(0x286)][_0x2c4815(0x385)]=function(_0x96c101){const _0x40549c=_0x2c4815;if(!_0x96c101)return![];return _0x96c101[_0x40549c(0x231)]()&&_0x96c101['isAlive']();},Window_PartyBattleSwitch[_0x2c4815(0x286)][_0x2c4815(0x340)]=function(_0xdbd467){const _0x5c3fa0=_0x2c4815,_0x5d2bc6=this[_0x5c3fa0(0x2ad)](_0xdbd467);if(!_0x5d2bc6)return;const _0x504cb1=ImageManager[_0x5c3fa0(0x2d9)](_0x5d2bc6['faceName']());_0x504cb1['addLoadListener'](this[_0x5c3fa0(0x216)][_0x5c3fa0(0x34a)](this,_0xdbd467));},Window_PartyBattleSwitch[_0x2c4815(0x286)]['processDrawItem']=function(_0x4a5af5){const _0x15c725=_0x2c4815;this[_0x15c725(0x275)](_0x4a5af5),this[_0x15c725(0x2a9)](_0x4a5af5);},Window_PartyBattleSwitch['prototype'][_0x2c4815(0x275)]=function(_0x7c38d2){const _0x2d108d=_0x2c4815,_0x42fbcd=this[_0x2d108d(0x2ad)](_0x7c38d2),_0xf2f91c=this[_0x2d108d(0x30c)](_0x7c38d2);this[_0x2d108d(0x389)](this[_0x2d108d(0x385)](_0x42fbcd)),this[_0x2d108d(0x2b9)](_0x42fbcd,_0xf2f91c['x']+0x1,_0xf2f91c['y']+0x1,ImageManager[_0x2d108d(0x305)],_0xf2f91c['height']-0x2),this[_0x2d108d(0x389)](!![]);},Window_PartyBattleSwitch['prototype']['drawItemStatus']=function(_0x3a3b79){const _0x3905bc=_0x2c4815,_0x43d545=this[_0x3905bc(0x2ad)](_0x3a3b79),_0x445f5e=this[_0x3905bc(0x2ac)](_0x3a3b79),_0x12fbcd=_0x445f5e['x']+ImageManager[_0x3905bc(0x305)]+0x24,_0x211f40=_0x12fbcd+0xb4;this[_0x3905bc(0x389)](this[_0x3905bc(0x385)](_0x43d545)),this[_0x3905bc(0x209)](_0x43d545,_0x12fbcd,_0x445f5e['y']),this[_0x3905bc(0x2cf)](_0x43d545,_0x12fbcd,_0x445f5e['y']+this['lineHeight']()),this[_0x3905bc(0x26c)](_0x43d545,_0x211f40,_0x445f5e['y']),this[_0x3905bc(0x389)](!![]);};Imported['VisuMZ_1_BattleCore']&&(ImageManager[_0x2c4815(0x33f)]=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x18e)][_0x2c4815(0x377)]??0x4b,TextManager[_0x2c4815(0x18d)]=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x2bb)][_0x2c4815(0x211)],TextManager['battlePartyChangeCmdHelp']=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x2bb)][_0x2c4815(0x2bf)],TextManager[_0x2c4815(0x1df)]=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x2bb)][_0x2c4815(0x2b8)],TextManager['battlePartySwitchCmdHelp']=VisuMZ['PartySystem'][_0x2c4815(0x274)]['Vocab'][_0x2c4815(0x36a)],TextManager[_0x2c4815(0x20a)]=VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x2bb)][_0x2c4815(0x2cd)],VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x31d)]=SceneManager[_0x2c4815(0x273)],SceneManager[_0x2c4815(0x273)]=function(){const _0x3b151e=_0x2c4815;if(SceneManager['isPreviousScene'](Scene_Party))return!![];return VisuMZ[_0x3b151e(0x35a)][_0x3b151e(0x31d)][_0x3b151e(0x30d)](this);},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x251)]=SceneManager[_0x2c4815(0x314)],SceneManager[_0x2c4815(0x314)]=function(){const _0x15b8e9=_0x2c4815;if(SceneManager[_0x15b8e9(0x222)](Scene_Party))return!![];return VisuMZ['PartySystem'][_0x15b8e9(0x251)]['call'](this);},SceneManager[_0x2c4815(0x233)]=function(){const _0x577f5f=_0x2c4815;return this[_0x577f5f(0x212)]&&this['_scene']['constructor']===Scene_Map;},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x2fc)]=Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x2e3)],Scene_Battle['prototype'][_0x2c4815(0x2e3)]=function(){const _0x4671c0=_0x2c4815;VisuMZ[_0x4671c0(0x35a)][_0x4671c0(0x2fc)][_0x4671c0(0x30d)](this),this['createPartySwitchWindow'](),this['postPartySwitchMenuTpb'](),this[_0x4671c0(0x2d7)]();},Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x271)]=function(){const _0x33842b=_0x2c4815,_0x186cec=this['partySwitchWindowRect']();this[_0x33842b(0x328)]=new Window_PartyBattleSwitch(_0x186cec),this['addWindow'](this[_0x33842b(0x328)]),this[_0x33842b(0x328)][_0x33842b(0x1e6)]('ok',this[_0x33842b(0x2c2)]['bind'](this)),this[_0x33842b(0x328)][_0x33842b(0x1e6)]('cancel',this[_0x33842b(0x25c)][_0x33842b(0x34a)](this));},Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x1c0)]=function(){const _0x3c1dfd=_0x2c4815,_0x26b13d=this[_0x3c1dfd(0x390)]();return _0x26b13d===_0x3c1dfd(0x2d1)?this['partySwitchWindowRectBorder']():this[_0x3c1dfd(0x32d)]();},Scene_Battle[_0x2c4815(0x286)]['partySwitchWindowRectStandard']=function(){const _0x1501d5=_0x2c4815;return VisuMZ[_0x1501d5(0x35a)][_0x1501d5(0x274)][_0x1501d5(0x37d)]['BattleSwitchWindowRect']['call'](this);},Scene_Battle['prototype'][_0x2c4815(0x1c9)]=function(){const _0xb23d17=_0x2c4815,_0x2ef8d3=this['skillItemWindowRectBorderStyle'](),_0x5a74d8=$gameSystem[_0xb23d17(0x367)]()*0x2;return _0x2ef8d3[_0xb23d17(0x20f)]=0x204+_0x5a74d8,_0x2ef8d3;},VisuMZ['PartySystem'][_0x2c4815(0x2f6)]=Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x1a3)],Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x1a3)]=function(){const _0x2f2049=_0x2c4815;if(this[_0x2f2049(0x328)]&&this[_0x2f2049(0x328)][_0x2f2049(0x1a0)])return!![];if(this['_partySystemSwitchOut'])return!![];if(this['_callPartyMemberSwitch'])return!![];if(this[_0x2f2049(0x264)])return!![];return VisuMZ[_0x2f2049(0x35a)][_0x2f2049(0x2f6)]['call'](this);},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x299)]=Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x22b)],Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x22b)]=function(){const _0x217c31=_0x2c4815;VisuMZ[_0x217c31(0x35a)][_0x217c31(0x299)][_0x217c31(0x30d)](this),this[_0x217c31(0x351)][_0x217c31(0x1e6)](_0x217c31(0x384),this[_0x217c31(0x330)][_0x217c31(0x34a)](this));},Scene_Battle['prototype'][_0x2c4815(0x330)]=function(){const _0x55b36e=_0x2c4815;this[_0x55b36e(0x303)]()?(this['_callSceneParty']=!![],this['_logWindow'][_0x55b36e(0x282)](TextManager[_0x55b36e(0x20a)][_0x55b36e(0x372)](TextManager[_0x55b36e(0x384)]))):this[_0x55b36e(0x1a5)]();},Scene_Battle['prototype'][_0x2c4815(0x303)]=function(){const _0x13765a=_0x2c4815;return BattleManager[_0x13765a(0x267)]();},Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x1a5)]=function(){const _0x28c4a9=_0x2c4815;this[_0x28c4a9(0x264)]=![],this['_spriteset'][_0x28c4a9(0x20d)](),this[_0x28c4a9(0x25b)][_0x28c4a9(0x331)]=![],SceneManager['snapForBackground'](),SceneManager[_0x28c4a9(0x1b5)](Scene_Party),$gameParty[_0x28c4a9(0x36b)](),BattleManager[_0x28c4a9(0x236)]()&&(BattleManager[_0x28c4a9(0x293)]=BattleManager[_0x28c4a9(0x2ad)]());},VisuMZ[_0x2c4815(0x35a)]['Scene_Battle_updateBattleProcess']=Scene_Battle['prototype']['updateBattleProcess'],Scene_Battle[_0x2c4815(0x286)]['updateBattleProcess']=function(){const _0xa10060=_0x2c4815;VisuMZ['PartySystem'][_0xa10060(0x192)][_0xa10060(0x30d)](this),this[_0xa10060(0x264)]&&!BattleManager[_0xa10060(0x2da)]&&this[_0xa10060(0x1a5)](),this[_0xa10060(0x324)]&&!BattleManager['_subject']&&this['callPartyMemberSwitch']();},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x369)]=Scene_Battle[_0x2c4815(0x286)]['isTimeActive'],Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x269)]=function(){const _0x36514f=_0x2c4815;if(BattleManager[_0x36514f(0x267)]()){if(this[_0x36514f(0x328)]&&this[_0x36514f(0x328)]['active'])return![];}return VisuMZ[_0x36514f(0x35a)]['Scene_Battle_isTimeActive'][_0x36514f(0x30d)](this);},VisuMZ['PartySystem']['Scene_Battle_createActorCommandWindow']=Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x2f7)],Scene_Battle[_0x2c4815(0x286)]['createActorCommandWindow']=function(){const _0x5906b9=_0x2c4815;VisuMZ[_0x5906b9(0x35a)][_0x5906b9(0x2a7)]['call'](this),this[_0x5906b9(0x1c7)][_0x5906b9(0x1e6)](_0x5906b9(0x384),this[_0x5906b9(0x242)][_0x5906b9(0x34a)](this));},Scene_Battle[_0x2c4815(0x286)]['commandPartyMemberSwitch']=function(){const _0x5f3479=_0x2c4815;this[_0x5f3479(0x303)]()?(this[_0x5f3479(0x324)]=!![],this[_0x5f3479(0x2e0)][_0x5f3479(0x282)](TextManager[_0x5f3479(0x20a)][_0x5f3479(0x372)](TextManager[_0x5f3479(0x384)]))):this[_0x5f3479(0x1d1)]();},Scene_Battle[_0x2c4815(0x286)]['callPartyMemberSwitch']=function(){const _0x55e1db=_0x2c4815;this[_0x55e1db(0x324)]=![],this['_logWindow'][_0x55e1db(0x1a7)](),BattleManager[_0x55e1db(0x2ad)]()&&this['_partyMemberSwitchWindow'][_0x55e1db(0x292)]();},Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x2c2)]=function(){const _0x2189c2=_0x2c4815,_0x3736cc=this[_0x2189c2(0x328)][_0x2189c2(0x28a)]();_0x3736cc?this[_0x2189c2(0x2bc)](_0x3736cc):(this[_0x2189c2(0x328)][_0x2189c2(0x2f5)](),this[_0x2189c2(0x1c7)][_0x2189c2(0x292)]());},Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x2bc)]=function(_0x30e687){const _0x450826=_0x2c4815,_0x222b41=BattleManager[_0x450826(0x2ad)](),_0x310a2b=_0x222b41[_0x450826(0x326)]();this[_0x450826(0x328)]['deactivate'](),this[_0x450826(0x208)]()&&_0x310a2b?(this[_0x450826(0x1e9)]=!![],_0x310a2b[_0x450826(0x349)](_0x30e687)):this[_0x450826(0x18f)](_0x30e687);},Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x208)]=function(){const _0x4e92f3=_0x2c4815;return VisuMZ[_0x4e92f3(0x35a)]['Settings'][_0x4e92f3(0x18e)][_0x4e92f3(0x307)];},Scene_Battle['prototype'][_0x2c4815(0x18f)]=function(_0x4e4672){const _0x312165=_0x2c4815;this[_0x312165(0x1e9)]=![];const _0x58fd0c=BattleManager[_0x312165(0x2ad)](),_0x40fb6d=_0x58fd0c['battler'](),_0x31c48f=$gameParty[_0x312165(0x2c3)][_0x312165(0x22e)](_0x58fd0c[_0x312165(0x248)]());$gameParty[_0x312165(0x2c3)][_0x31c48f]=_0x4e4672['actorId'](),$gameParty[_0x312165(0x33a)]();if(this[_0x312165(0x32a)]())_0x4e4672[_0x312165(0x2e2)]=_0x58fd0c['_tpbChargeTime'],_0x4e4672[_0x312165(0x313)]=_0x312165(0x1f6);else BattleManager[_0x312165(0x236)]()&&_0x4e4672['clearTpbChargeTime']();BattleManager['_currentActor']=_0x4e4672,BattleManager[_0x312165(0x207)](_0x58fd0c,_0x4e4672),_0x4e4672[_0x312165(0x36b)](),_0x4e4672[_0x312165(0x237)](),_0x4e4672[_0x312165(0x2b1)](_0x58fd0c),_0x40fb6d&&_0x40fb6d[_0x312165(0x23a)](_0x4e4672),this[_0x312165(0x2db)]['switchStateIconActor'](_0x58fd0c,_0x4e4672),this[_0x312165(0x2db)][_0x312165(0x217)](),this['_actorCommandWindow'][_0x312165(0x316)](_0x4e4672),this[_0x312165(0x1c7)][_0x312165(0x36c)](0x0),this['_actorCommandWindow'][_0x312165(0x292)](),this[_0x312165(0x1c7)][_0x312165(0x34d)]=!![];},Scene_Battle['prototype']['isImmediateTpb']=function(){const _0x513003=_0x2c4815;if(!BattleManager[_0x513003(0x236)]())return![];const _0x81f983=VisuMZ[_0x513003(0x35a)][_0x513003(0x274)][_0x513003(0x18e)];return _0x81f983[_0x513003(0x1d0)]===undefined&&(_0x81f983['tpbImmediateAction']=!![]),_0x81f983[_0x513003(0x1d0)];},Window_StatusBase['prototype']['switchStateIconActor']=function(_0x134176,_0x41e5dd){const _0x584c8b=_0x2c4815,_0x40de0c=_0x584c8b(0x310)[_0x584c8b(0x372)](_0x134176[_0x584c8b(0x248)]()),_0x375449=this[_0x584c8b(0x306)](_0x40de0c,Sprite_StateIcon);_0x375449[_0x584c8b(0x316)](_0x41e5dd);},Scene_Battle['prototype'][_0x2c4815(0x25c)]=function(){const _0x396700=_0x2c4815;this[_0x396700(0x328)][_0x396700(0x2f5)](),this[_0x396700(0x1c7)][_0x396700(0x292)](),this['_actorCommandWindow']['refresh']();},Scene_Battle[_0x2c4815(0x286)][_0x2c4815(0x198)]=function(){const _0x4759ea=_0x2c4815;if(!BattleManager[_0x4759ea(0x236)]())return;if(!SceneManager[_0x4759ea(0x272)](Scene_Party))return;this[_0x4759ea(0x351)][_0x4759ea(0x2f5)](),this[_0x4759ea(0x351)]['close'](),this['_actorCommandWindow'][_0x4759ea(0x2f5)](),this[_0x4759ea(0x1c7)][_0x4759ea(0x1d6)](),BattleManager[_0x4759ea(0x19b)]=null,BattleManager['_inputting']=![];},Scene_Battle['prototype']['postPartySwitchMenuTurnBased']=function(){const _0x5a5204=_0x2c4815;if(BattleManager[_0x5a5204(0x236)]())return;if(!SceneManager[_0x5a5204(0x272)](Scene_Party))return;Imported[_0x5a5204(0x22a)]&&BattleManager[_0x5a5204(0x2ec)]()&&BattleManager[_0x5a5204(0x38c)](),Imported[_0x5a5204(0x1ab)]&&BattleManager['isFTB']()&&(BattleManager[_0x5a5204(0x38c)](),BattleManager[_0x5a5204(0x19b)]=$gameParty[_0x5a5204(0x33d)](),BattleManager[_0x5a5204(0x2da)]=BattleManager['actor'](),BattleManager['_inputting']=!![],this['_actorCommandWindow'][_0x5a5204(0x316)](BattleManager['actor']()),this['_statusWindow'][_0x5a5204(0x1a8)](BattleManager[_0x5a5204(0x2ad)]())),Imported[_0x5a5204(0x301)]&&BattleManager[_0x5a5204(0x1bf)]()&&(BattleManager[_0x5a5204(0x38c)](),BattleManager[_0x5a5204(0x19b)]=$gameParty[_0x5a5204(0x33d)](),BattleManager['_subject']=BattleManager[_0x5a5204(0x2ad)](),BattleManager[_0x5a5204(0x26a)]=!![],this['_actorCommandWindow'][_0x5a5204(0x316)](BattleManager[_0x5a5204(0x2ad)]()),this[_0x5a5204(0x2db)]['selectActor'](BattleManager[_0x5a5204(0x2ad)]())),Imported['VisuMZ_2_BattleSystemPTB']&&BattleManager[_0x5a5204(0x357)]()&&(BattleManager[_0x5a5204(0x38c)](),BattleManager[_0x5a5204(0x19b)]=$gameParty[_0x5a5204(0x33d)](),BattleManager[_0x5a5204(0x2da)]=BattleManager['actor'](),BattleManager[_0x5a5204(0x26a)]=!![],this[_0x5a5204(0x1c7)]['setup'](BattleManager[_0x5a5204(0x2ad)]()),this['_statusWindow'][_0x5a5204(0x1a8)](BattleManager[_0x5a5204(0x2ad)]()));},Game_Party[_0x2c4815(0x286)]['teamBasedFirstAvailableMember']=function(){const _0x2c16f6=_0x2c4815;let _0x46a766=this[_0x2c16f6(0x325)]();return _0x46a766[0x0];},Sprite_Actor[_0x2c4815(0x2e9)]=0xc,Sprite_Actor[_0x2c4815(0x286)][_0x2c4815(0x349)]=function(_0x170561){const _0x4c5f94=_0x2c4815;this['_partySwitchTargetActor']=_0x170561;const _0x4bc495=Sprite_Actor[_0x4c5f94(0x2e9)];this[_0x4c5f94(0x2b5)](0x12c,0x0,_0x4bc495),this[_0x4c5f94(0x28d)](0x0,_0x4bc495),this['_partySwitchDuration']=_0x4bc495;},Sprite_Actor['prototype'][_0x2c4815(0x223)]=function(_0x29e4a2){const _0x1f9a34=_0x2c4815;if(SceneManager['isSceneBattle']()){SceneManager[_0x1f9a34(0x212)][_0x1f9a34(0x18f)](_0x29e4a2);const _0x4e9f55=Sprite_Actor['_partySwitchDuration'];this['stepForward'](),this[_0x1f9a34(0x28d)](0xff,_0x4e9f55);}this[_0x1f9a34(0x2a1)]=null;},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x1a4)]=Sprite_Actor[_0x2c4815(0x286)][_0x2c4815(0x20d)],Sprite_Actor[_0x2c4815(0x286)]['update']=function(){const _0x4139b3=_0x2c4815;VisuMZ[_0x4139b3(0x35a)][_0x4139b3(0x1a4)][_0x4139b3(0x30d)](this);if(this[_0x4139b3(0x2e9)])this[_0x4139b3(0x2c9)]();},Sprite_Actor[_0x2c4815(0x286)]['updatePartySwitch']=function(){const _0x18359f=_0x2c4815;this[_0x18359f(0x2e9)]=this['_partySwitchDuration']||0x0,this[_0x18359f(0x2e9)]--,this[_0x18359f(0x2e9)]<=0x0&&this[_0x18359f(0x223)](this[_0x18359f(0x2a1)]);},Window_PartyCommand[_0x2c4815(0x286)][_0x2c4815(0x386)]=function(){const _0x130256=_0x2c4815;this[_0x130256(0x291)]();},Window_PartyCommand[_0x2c4815(0x286)]['addFormationCommand']=function(){const _0x14e675=_0x2c4815;if(!this['isFormationCommandAdded']())return;if(this[_0x14e675(0x283)]()){$gameTemp[_0x14e675(0x36e)]()&&!BattleManager[_0x14e675(0x32e)]&&(console['log']('WARNING:\x20Party\x20Change\x20command\x20is\x20unavailable\x20for\x20Window_PartyCommand\x20for\x20this\x20Battle\x20System'),BattleManager['_battleSystemIncompatibilityError']=!![]);return;}const _0x272cbb=this[_0x14e675(0x37f)](),_0x42743e=ImageManager[_0x14e675(0x33f)],_0x3efd38=_0x272cbb==='text'?TextManager[_0x14e675(0x18d)]:_0x14e675(0x36f)['format'](_0x42743e,TextManager[_0x14e675(0x18d)]),_0x569789=this[_0x14e675(0x1dd)]();this[_0x14e675(0x1a9)](_0x3efd38,_0x14e675(0x384),_0x569789);},Window_PartyCommand[_0x2c4815(0x286)][_0x2c4815(0x229)]=function(){const _0x45b924=_0x2c4815;if(Imported[_0x45b924(0x195)]&&BattleManager['isOTB']())return![];if(Imported[_0x45b924(0x32f)]&&BattleManager[_0x45b924(0x35e)]())return![];if(Imported[_0x45b924(0x1b9)]&&BattleManager['isUsingGridSystem']())return![];return VisuMZ[_0x45b924(0x35a)][_0x45b924(0x274)][_0x45b924(0x18e)]['PartyCmdWinAddParty'];},Window_PartyCommand['prototype'][_0x2c4815(0x283)]=function(){return![];},Window_PartyCommand[_0x2c4815(0x286)][_0x2c4815(0x1dd)]=function(){const _0x151511=_0x2c4815;if($gameParty['allMembers']()[_0x151511(0x295)]<=0x1)return![];if(!$gameParty[_0x151511(0x37b)]())return![];return $gameSystem[_0x151511(0x23e)]();},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x1ff)]=Window_PartyCommand[_0x2c4815(0x286)][_0x2c4815(0x2e8)],Window_PartyCommand['prototype'][_0x2c4815(0x2e8)]=function(){const _0x1aca70=_0x2c4815,_0x45ef03=this[_0x1aca70(0x382)]();switch(_0x45ef03){case _0x1aca70(0x384):this[_0x1aca70(0x1f2)]['setText'](TextManager['battlePartyChangeCmdHelp']);break;default:VisuMZ[_0x1aca70(0x35a)]['Settings'][_0x1aca70(0x1ff)][_0x1aca70(0x30d)](this);break;}},Window_ActorCommand['prototype'][_0x2c4815(0x322)]=function(){const _0x2cf9a8=_0x2c4815;if(!this[_0x2cf9a8(0x2cb)]())return;this[_0x2cf9a8(0x196)](_0x2cf9a8(0x384))>=0x0&&this['removePartyCommand']();const _0x138d4a=this[_0x2cf9a8(0x37f)](),_0x14b22b=ImageManager[_0x2cf9a8(0x33f)],_0x180a40=_0x138d4a===_0x2cf9a8(0x1f1)?TextManager['battlePartySwitchCmd']:_0x2cf9a8(0x36f)[_0x2cf9a8(0x372)](_0x14b22b,TextManager[_0x2cf9a8(0x18d)]),_0x254f51=this[_0x2cf9a8(0x38e)]();this[_0x2cf9a8(0x1a9)](_0x180a40,_0x2cf9a8(0x384),_0x254f51);},Window_ActorCommand[_0x2c4815(0x286)]['isPartyCommandAdded']=function(){const _0x4b3eb8=_0x2c4815;if(!this[_0x4b3eb8(0x1d4)])return![];return VisuMZ['PartySystem'][_0x4b3eb8(0x274)][_0x4b3eb8(0x18e)][_0x4b3eb8(0x2fa)];},Window_ActorCommand['prototype']['isPartyCommandEnabled']=function(){const _0x4fbe0e=_0x2c4815;if($gameParty[_0x4fbe0e(0x228)]()[_0x4fbe0e(0x295)]<=0x1)return![];if(!this['_actor'])return![];if(!this[_0x4fbe0e(0x1d4)]['canSwitchPartyInBattle']())return![];return this[_0x4fbe0e(0x1d4)][_0x4fbe0e(0x231)]();},VisuMZ[_0x2c4815(0x35a)][_0x2c4815(0x274)][_0x2c4815(0x345)]=Window_ActorCommand['prototype'][_0x2c4815(0x2e8)],Window_ActorCommand[_0x2c4815(0x286)][_0x2c4815(0x2e8)]=function(){const _0x180431=_0x2c4815,_0x216267=this[_0x180431(0x382)]();if(!_0x216267)return;switch(_0x216267['toLowerCase']()){case _0x180431(0x384):this[_0x180431(0x1f2)][_0x180431(0x2a8)](TextManager['battlePartySwitchCmdHelp']);break;default:VisuMZ[_0x180431(0x35a)]['Settings']['Window_ActorCommand_updateHelp'][_0x180431(0x30d)](this);break;}},Window_ActorCommand[_0x2c4815(0x286)][_0x2c4815(0x22d)]=function(){const _0xf359e0=_0x2c4815;while(this[_0xf359e0(0x196)](_0xf359e0(0x384))>=0x0){const _0x2b6a52=this[_0xf359e0(0x196)](_0xf359e0(0x384));this[_0xf359e0(0x1f4)][_0xf359e0(0x29c)](_0x2b6a52,0x1);}});;