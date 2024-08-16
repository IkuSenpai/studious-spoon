//=============================================================================
// VisuStella MZ - Battle Grid System
// VisuMZ_2_BattleGridSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleGridSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleGridSystem = VisuMZ.BattleGridSystem || {};
VisuMZ.BattleGridSystem.version = 1.06;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.06] [BattleGridSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_Grid_System_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin changes battles to utilize a grid system. The grid will be
 * composed of nodes for each team and battlers can move amongst them. By being
 * on top of specific nodes, different strategies can be employed such as
 * making certain skills available to use while on such nodes or applying
 * unique passive state effects.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Battles are changed to employ a grid system and places nodes across the
 *   battlefield for battlers to position themselves on top of.
 * * Battlers can move between their team's nodes and give themselves a better
 *   position for battle. Battlers cannot move to the opposing team's nodes.
 * * Ranks and Flanks determine each node's position. Depending on the Rank and
 *   Flank a node is on, different properties can be employed.
 * * Certain skills and items can only be used while standing on top of certain
 *   nodes as a new type of usage requirement.
 * * Skills and items can move the user and/or the targets around on the battle
 *   grid in a variety of ways, such as switching or crashing into other
 *   battlers and inflicting crash damage.
 * * Skills and items can have their range restricted to certain Ranks and
 *   Flanks declared by notetags.
 * * Some skills and items can have their range restricted based on the weapon
 *   equipped by the user, allow for melee-only targeting or the whole range of
 *   the battle field grid.
 * * Skills and items can directly select which nodes, Ranks, or Flanks to
 *   target for attacks or healing.
 * * Area of Effect notetags allow players to create skills and items that can
 *   affect more than one target based on positioning.
 * * Nodes can give passive state effects while battlers stand on top of them.
 * * Nodes can house triggers, which are skill actions that will set off once a
 *   battler stands on top of that node. Triggers can be used to deal damage,
 *   heal battlers, apply status ailments, and more.
 * * Skills and items can be used to plant passive states and/or action
 *   triggers on specific Nodes!
 * * Some skills and items can have special effects like teleporting to a
 *   specific Node, pulling all members of unit towards a specific Node, or
 *   even pushing them away. 
 * * The Grid Tactics scene allows players to adjust where they want the party
 *   members to start. Let the player decide which nodes to start individual
 *   party members on.
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
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Grid System Mechanics
 * ============================================================================
 *
 * This section explains the various changes and new mechanics regarding the
 * battle grid system.
 *
 * ---
 * 
 * === Ranks, Flanks, and Nodes ===
 * 
 * ---
 * 
 * Each visually vertical column is called a "Rank". The name is from miliary
 * usage for rows of soldiers standing side by side, also sometimes known as
 * "files" or "lines". The numbering starts at the center of the grid going
 * outward for each team.
 * 
 *            Enemy Team       Ally Team
 *      4    3    2    1       1    2    3    4
 *      4    3    2    1       1    2    3    4
 *      4    3    2    1       1    2    3    4
 * 
 * ---
 * 
 * Each visually horizontal row is called a "Flank". The name is from military
 * usage to referance the sides of a formation, also sometimes known as the
 * "wings" of a formation. The number starts at the top of the grid going to
 * the bottom of the grid.
 * 
 *            Enemy Team       Ally Team
 *      1    1    1    1       1    1    1    1
 *      2    2    2    2       2    2    2    2
 *      3    3    3    3       3    3    3    3
 * 
 * ---
 * 
 * The points at which each Rank and Flank intersects is called a "Node". Every
 * battler will be positioned on a node and only one battler can be on a node
 * at any given time.
 * 
 *            Enemy Team       Ally Team
 *    4,1  3,1  2,1  1,1       1,1  2,1  3,1  4,1
 *    4,2  3,2  2,2  1,2       1,1  2,2  3,2  4,2
 *    4,3  3,3  2,3  1,3       1,3  2,3  3,3  4,3
 * 
 * ---
 * 
 * === Battler Movement ===
 * 
 * ---
 * 
 * Actors
 * 
 * Actors can use the "Move" command to move to any allowed node based on their
 * moveset rulings. By default, this means they can only move to adjacent nodes
 * relative to their current position.
 * 
 * Upon moving via the "Move" command, the command can undergo cooldown where
 * the actor must wait a set amount of turns before being able to "Move" again.
 * The cooldown amount can be adjusted through the Plugin Parameters.
 * 
 * Also upon moving via the "Move" command, the actor can also end their turn
 * immediately. This is an optional command and can be adjusted per actor with
 * notetags or by default through the Plugin Parameters.
 * 
 * Actors that are charmed, berserk, or on Auto-Battle will not use the "Move"
 * command. The move command requires the actor to be able to move, too.
 * 
 * ---
 * 
 * Enemies
 * 
 * Enemies do not have a "Move" command and therefore, do not move by default.
 * Instead, the best way to have enemies move is to create movement Skills and
 * have their battle AI perform them. These skills are best left as enemy-only
 * skills that actors do not have access to.
 * 
 * Their accessibility and frequency of use to move skills have no bearing to
 * and from the nature of movement effects. However, certain effects may stop
 * the movement effects associated with the skills such as the Battle Core
 * notetag <Battler Sprite Cannot Move> for enemies.
 * 
 * ---
 * 
 * Actors and Enemies Stay on Their Sides
 * 
 * Actors and enemies will not move onto the nodes belonging to the opposing
 * unit. This means actors will always be on the rightmost nodes while enemies
 * will be on the leftmost nodes. They CANNOT cross over into each other's
 * territory as this plugin does not support that grid gameplay style. The
 * nodes that belong to each unit's side will stay on those sides. Ownership of
 * a node's team cannot be switched.
 * 
 * ---
 * 
 * === Movement Features ===
 * 
 * ---
 * 
 * Switching
 * 
 * If a battler moves onto a node that already has an allied battler on it,
 * then the two battlers can switch places. The place switching will only occur
 * if done on the acting battler's own intention or by another ally battler.
 * Switching can be disabled by Plugin Parameters.
 * 
 * Certain notetags can also prevent a battler from being able to switch such
 * as the <Battler Sprite Cannot Move> enemy-only notetag available from the
 * VisuMZ Battle Core.
 * 
 * However! If a battler is dead, regardless of all other notetag properties,
 * the corpse becomes node-switchable. The reason for this is because it helps
 * prevent a soft-lock state in which either the player or enemy side cannot
 * perform actions due to their current node location (think of melee battlers
 * being stuck behind a wall of corpses loaded on the front row). By being able
 * to move and switch nodes with corpses, soft lock scenarios can be solved.
 * This setting can also be adjusted as a Plugin Parameter for those who feel
 * confident in their ability to design their battles where soft locks are
 * impossible to happen with.
 * 
 * If the Plugin Parameter is changed to disallow switching with corpses, this
 * will only apply to corpses that remain visible. Corpses that fade away with
 * collapse effects will not apply and can still be switched (even though
 * invisible after).
 * 
 * ---
 * 
 * Collision
 * 
 * If a battler uses a skill that moves an opposing battler onto a node with
 * another opposing battler, then collision occurs. The target opposing battler
 * that should be knocked back will return to their original position while
 * both colliding battlers take knockback damage.
 * 
 * ---
 * 
 * === Battle Grid Tactics ===
 * 
 * ---
 * 
 * This is an optional feature.
 * 
 * You can turn on "Battle Grid Tactics" to allow for players to set up the
 * starting positions of where the individual members of the party will go when
 * a battle starts.
 * 
 * This adds a new command to the Main Menu, which takes the player to a scene
 * where they can customize their battle grid tactics layout.
 * 
 * If this feature is not used, then the starting positions of individual party
 * members will depend on the notetags used to determine their battle starting
 * ranks and flanks.
 * 
 * ---
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
 * Sideview Only
 * 
 * If your game is NOT using sideview and you are using the Battle Grid System,
 * then the plugin will automatically enforce the sideview property. The reason
 * behind this is because the grid system is specifically made for sideview
 * visuals and controls. Therefore, it will not work without it.
 * 
 * As such, some visual properties are also changed with this. Battlers will no
 * longer step forward or backward when it's their turn to actively input a
 * command. The reason behind this is because it causes a visual discrepancy
 * with the grid node they're supposed to be standing at. And depending on the
 * size of the grid node, it may cause confusion as to where the battler is
 * actually standing. Therefore, the plugin will keep the battlers at their
 * node location while inputting or performing the start of their actions.
 *
 * ---
 * 
 * Max Battle Members
 * 
 * There is a limit to how many battle members you can bring into battle based
 * off the number of available nodes (Ranks x Flanks). If you have too few,
 * then the plugin will warn you and then halt the game.
 * 
 * If you are using Battle Grid Tactics, the optional feature to let players
 * determine where they want the party members to start at, then a maximum of
 * 20 party members can be used in order to match the Plugin Parameter limits.
 * If the max number becomes more than 20 members, it will be automatically
 * capped to 20 members.
 * 
 * ---
 * 
 * Temporary Tactical Formations
 * 
 * Temporary formations are very specific formations that will overwrite what
 * settings the player has made. These involve specific rank/flank positions
 * per party member (though some can be automatic). With temporary formations
 * in play, the player cannot change them outside of battle. However, once in
 * battle, the positions can be changed through the movement command and/or
 * action effects.
 * 
 * When a temporary formation is present, menu and battle commands involving
 * changing party members will be disabled.
 * 
 * Once a temporary formation is disbanded, the player's self-made formation
 * settings will be returned and the player can readjust tactical formations
 * once more.
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
 * When using the <Battle Commands> class notetag, you can manually position
 * the "Move" command by inserting "Grid Move" in between <Battle Commands> and
 * </Battle Commands>.
 * 
 * ---
 *
 * VisuMZ_2_AggroControlSystem
 *
 * Certain features of the Battle Grid System are changed to behave slightly
 * different when there is the presence of a provoker or taunter. These changes
 * will be explained in the help file.
 *
 * ---
 * 
 * VisuMZ_2_BattleSystemATB
 * VisuMZ_2_BattleSystemBTB
 * VisuMZ_2_BattleSystemCTB
 * VisuMZ_2_BattleSystemETB
 * VisuMZ_2_BattleSystemFTB
 * VisuMZ_2_BattleSystemOTB
 * VisuMZ_2_BattleSystemPTB
 * VisuMZ_2_BattleSystemSTB
 * 
 * All custom battle systems made by VisuStella MZ are compatible with the
 * battle grid system and can be used together. However, there are some
 * restrictions put into play with specific battle systems. More information
 * will be mentioned in detail in the "VisuStella MZ Compatibility" section
 * found below.
 * 
 * ---
 * 
 * VisuMZ_2_PartySystem
 * 
 * When the Party System is used together with the optional Battle Grid Tactics
 * feature, players can create empty spaces in their party to allow for the
 * positions of party members to go to specific nodes.
 * 
 * For example, if a party has members in slots 1, 2, and 4 while 3 is empty,
 * then those party members will go to tactical nodes 1, 2, and 4, instead of
 * moving 4 up to 3.
 * 
 * This only applies in-game and not through battle test if there are empty
 * slots in the battle test setup.
 * 
 * ---
 *
 * VisuMZ_3_BattleAI
 *
 * Certain AI behaviors will change depending on the limitations of what an
 * action is capable of affecting. The changes all involve factoring only what
 * is within the range of an action.
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
 * VisuMZ_2_AggroControlSystem
 * 
 * In battle, if there are Provoke or Taunt targets on the field and an action
 * that needs target selection is attempted to be used, the Provoke or Taunt
 * targets must be within valid affected Ranks/Flanks that can be targeted by
 * the action or else the action can't be used.
 * 
 * Skills that do NOT need to select a target (usually skills with a "Random"
 * scope or "All" scope) can bypass this as they would normally without the
 * Battle Grid System.
 * 
 * As such, be careful about designing your skills with restrictive Rank/Flank
 * targeting that potential softlocks may occur if there are ever any Taunt or
 * Provoke targets on the field.
 * 
 * In regards to skills that target the highest aggro member, these will target
 * the highest aggro member within the required Ranks/Flanks made by the skill
 * as to not further restrict this skill's targeting ability.
 * 
 * ---
 * 
 * VisuMZ_2_BattleSystemATB
 * 
 * If the ATB Battle System is currently being used with the active setting,
 * selecting the "Move" command during another battler's turn will queue up the
 * system, waiting for the current battler's turn to end before allowing the
 * inputting actor to move.
 * 
 * ---
 * 
 * VisuMZ_2_BattleSystemBTB
 * 
 * If the BTB Battle System is currently being used and the movement command
 * will pass turn, then the move command will be disabled if the actor is under
 * the effect of "Brave" as it becomes the same case scenario as "Guard".
 * 
 * On that note, during the command input phase, actors under the effect of
 * "Brave" can select skills and items outside of their required ranks/flanks.
 * If you wish to disable this, adjust the "Bypass Require Node?" setting in
 * the "Compatibility Settings" Plugin Parameters.
 * 
 * When the queued actions occur and the required rank/flank node positions
 * are NOT met, then the actions will be skipped.
 * 
 * ---
 * 
 * VisuMZ_2_BattleSystemETB
 * VisuMZ_2_BattleSystemFTB
 * VisuMZ_2_BattleSystemPTB
 * 
 * If the ETB, FTB, or PTB Battle Systems are being used and the move command
 * will pass turn, and if no other actors can input for that turn, any
 * remaining actions will be forfeited for that turn.
 * 
 * ---
 * 
 * VisuMZ_2_BattleSystemOTB
 * 
 * If the OTB Battle System is being used and the movement command will pass
 * turn, the turn passing will only apply to the current action. Any follow up
 * actions on the same turn from that actor can be utilized.
 * 
 * ---
 * 
 * VisuMZ_2_PartySystem
 * 
 * In battle, the player cannot change entire parties at once from the Party
 * Command Window. The feature will be unaccessible while Battle Grid System is
 * in play. However, the player can still change party members through the
 * Actor Command Window by having actors replace other actors. Party changing
 * is also available through battle events, Common Events, and script calls.
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
 * === Setup Nodes-Related Notetags ===
 * 
 * ---
 *
 * <Start Rank: x>
 * <Start Ranks: x, x, x>
 *
 * <Start Flank: x>
 * <Start Flanks: x, x, x>
 *
 * - Used for: Actor and Enemy Notetags
 * - If "Battle Grid Tactics" is enabled, ignore this for actors. The grid
 *   tactics menu will determine where actors will start in battle.
 * - Determines the preferred starting Rank/Flank 'x' node for this battler.
 * - If another allied battler is already on that node, then this battler will
 *   pick the next available 'x' Rank/Flank.
 * - If none of the preferred Ranks/Flanks are available, then the battler will
 *   start at the next suitable location without getting in another battler's
 *   way.
 * - Replace 'x' with a number representing the ideal starting Ranks/Flanks for
 *   this battler with higher priority given to the numbers at the start.
 * - This notetag can be used together with each otherfor more precise starting
 *   node locations.
 *
 * ---
 * 
 * <Grid Size: r X f>
 * 
 * - Used for: Enemy Notetags
 * - Changes the space occupied by this enemy to be 'r' Ranks and 'f' Flanks.
 * - This turns the enemy into a "Large Enemy" and "Large Enemies" have the
 *   special properties listed below:
 *   - Large enemies will occupy multiple nodes at the same time and will take
 *     on any of the effects applied all of the occupied nodes.
 *   - Large enemies cannot move or be moved to different nodes.
 *   - Large enemies will bypass the usage requirements for the notetag:
 *     <rule Move User Node direction: x>
 *   - If a small enemy transforms into a large enemy, the enemy will adjust
 *     its node position in order to accomodate fitting in the grid. It may or
 *     may not overlap other enemies and will do little to change that in order
 *     to avoid conflicts. Be wary of transforming enemies from smaller sizes
 *     to larger sizes as this can look very janky.
 * - If there is not enough space on the grid to fit all enemies listed in the
 *   troop, the plugin will ask you to redesign that troop.
 * 
 *   Examples:
 * 
 *   <Grid Size: 1 X 3>
 *   <Grid Size: 2 X 2>
 *   <Grid Size: 3 X 2>
 *   <Grid Size: 4 X 3>
 * 
 * ---
 * 
 * === Movement Range-Related Notetags ===
 * 
 * ---
 *
 * <Move Base: type>
 *
 * - Used for: Class Notetags
 * - Sets the movement base to 'type'.
 * - Replace 'type' with a type from the "Movement Range Types" section below.
 * - Insert multiples of this notetag to combine the movement base.
 * - If this notetag or its variant is not used, then the movement base range
 *   will be determined by the Plugin Parameters.
 *
 * ---
 *
 * <Move Base>
 *  type
 *  type
 *  type
 * </Move Base>
 *
 * - Used for: Class Notetags
 * - Sets the movement base to 'type'.
 * - Replace 'type' with a type from the "Movement Range Types" section below.
 * - Insert as many types as you want to combine the movement base.
 * - If this notetag or its variant is not used, then the movement base range
 *   will be determined by the Plugin Parameters.
 *
 * ---
 *
 * <Move Range: type>
 *
 * - Used for: Actor, Weapon, Armor, State Notetags
 * - Expands the movement range with 'type'.
 * - Replace 'type' with a type from the "Movement Range Types" section below.
 * - Insert multiples of this notetag to expand the movement range.
 *
 * ---
 *
 * <Move Range>
 *  type
 *  type
 *  type
 * </Move Range>
 *
 * - Used for: Actor, Weapon, Armor, State Notetags
 * - Expands the movement range with 'type'.
 * - Replace 'type' with a type from the "Movement Range Types" section below.
 * - Insert as many types as you want to expand the movement range.
 *
 * ---
 * 
 * <No Grid Movement>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Once applied to the affected battler, the battler cannot change grid node
 *   positions as if completely bound to the grid node.
 * - This will also disable an actor's ability to use the Move command.
 * - This will also disable a battler's ability to use skills/items that have
 *   the <rule Move User Node direction: x> notetag.
 * - When the battler is targeted with a <rule Move Target Node direction: x>
 *   notetag, the battler will NOT move.
 * 
 * ---
 * 
 * <Seal Grid Movement>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Once applied to the affected battler, the battler cannot change grid node
 *   positions willingly as the user but can be moved as the target.
 * - This will also disable an actor's ability to use the Move command.
 * - This will also disable a battler's ability to use skills/items that have
 *   the <rule Move User Node direction: x> notetag.
 * - When the battler is targeted with a <rule Move Target Node direction: x>
 *   notetag, the battler can be moved.
 * 
 * ---
 * 
 * ==== Movement Types ====
 * 
 * These are used with the <Movement Base> and <Movement Range> notetags and
 * are the values you'd insert in place of the 'type' parameter.
 * 
 * ---
 * 
 *   All
 *   - Expands the movement range to the whole grid.
 *   - Takes priority over the rest of the types.
 * 
 *   None
 *   - Removes all movement range options.
 *   - Takes priority over the rest of the types except for "All".
 * 
 * ---
 * 
 *   Square x
 *   - Base: Sets a square-shaped range around the user.
 *   - Range: Expands area to a square-shaped range around the user.
 *     - Boosts additively with other "Square x" types.
 *   - x refers to the distance from the center to the side of a square.
 * 
 *   Radius x
 *   - Base: Sets a diamond-shaped range around the user.
 *   - Range: Expands area to a diamond-shaped range around the user.
 *     - Boosts additively with other "Radius x" types.
 *     - Boosts additively with "Square x" type.
 *   - x refers to the distance from the center to the edge of the radius.
 * 
 *   Full Rank
 *   - Expands movement range to the nodes with the same rank as the user.
 * 
 *   Rank x
 *   - Base: Sets the ranks to the side of the user.
 *   - Range: Expands movement range to side nodes the same rank as the user.
 *     - Boosts additively with other "Rank x" types.
 *     - Boosts additively with "Square x" and "Radius x" types.
 *   - x refers to the Rank's ID starting from 1.
 * 
 *   Full Flank
 *   - Expands movement range to the nodes with the same flank as the user.
 * 
 *   Flank x
 *   - Base: Sets the flank to the front and back of the user.
 *   - Range: Expands movement range to front and back nodes the same flank as
 *     the user.
 *     - Boosts additively with other "Flank x" types.
 *     - Boosts additively with "Square x" and "Radius x" types.
 *   - x refers to the Flank's ID starting from 1.
 * 
 *   Full All Diagonal
 *   - Expands movement range to all nodes diagonal from user.
 * 
 *   All Diagonal x
 *   - Base: Sets the movement range to diagonals from user.
 *   - Range: Expands movement range to diagonals from user.
 *     - Boosts additively with other "All Diagonal x" types.
 *     - Boosts additively with "Square x" and half of "Radius x" types.
 *   - x refers to the diagonal distance from the user.
 * 
 *   Full Diagonal Forward
 *   - Expands movement range to all front diagonal nodes from user.
 * 
 *   Diagonal Forward x
 *   - Base: Sets the movement range to front diagonal nodes from user.
 *   - Range: Expands movement range to front diagonal nodes from user.
 *     - Boosts additively with other "Diagonal Forward x" types.
 *     - Boosts additively with "Square x" and half of "Radius x" types.
 *   - x refers to the diagonal distance from the user.
 * 
 *   Full Diagonal Backward
 *   - Expands movement range to all behind diagonal nodes from user.
 * 
 *   Diagonal Backward x
 *   - Base: Sets the movement range to behind diagonal nodes from user.
 *   - Range: Expands movement range to behind diagonal nodes from user.
 *     - Boosts additively with other "Diagonal Backward x" types.
 *     - Boosts additively with "Square x" and half of "Radius x" types.
 *   - x refers to the diagonal distance from the user.
 * 
 *   Full Forward
 *   - Expands movement range to all nodes directly in front of user.
 * 
 *   Forward x
 *   - Base: Sets movement range to nodes directly in front of user.
 *   - Range: Expands movement range to nodes directly in front of user.
 *     - Boosts additively with other "Forward x" types.
 *     - Boosts additively with other "Flank x" types.
 *     - Boosts additively with "Square x" and "Radius x" types.
 *   - x refers to the node distance from the user.
 * 
 *   Full Backward
 *   - Expands movement range to all nodes directly behind user.
 * 
 *   Backward x
 *   - Base: Sets movement range to nodes directly behind user.
 *   - Range: Expands movement range to nodes directly behind user.
 *     - Boosts additively with other "Backward x" types.
 *     - Boosts additively with other "Flank x" types.
 *     - Boosts additively with "Square x" and "Radius x" types.
 *   - x refers to the node distance from the user.
 * 
 *   Full Upward
 *   - Expands movement range to all nodes to the flank above user.
 * 
 *   Upward x
 *   - Base: Sets movement range to nodes to the flank above user.
 *   - Range: Expands movement range to nodes to the flank above user.
 *     - Boosts additively with other "Upward x" types.
 *     - Boosts additively with other "Rank x" types.
 *     - Boosts additively with "Square x" and "Radius x" types.
 *   - x refers to the node distance from the user.
 * 
 *   Full Downward
 *   - Expands movement range to all nodes to the flank below user.
 * 
 *   Downward x
 *   - Base: Sets movement range to nodes to the flank below user.
 *   - Range: Expands movement range to nodes to the flank below user.
 *     - Boosts additively with other "Downward x" types.
 *     - Boosts additively with other "Rank x" types.
 *     - Boosts additively with "Square x" and "Radius x" types.
 *   - x refers to the node distance from the user.
 * 
 * ---
 * 
 *   Not Square x
 *   - Restricts nodes in a square-shaped area around the user.
 *     - Takes largest of the "Not Square x" types.
 *   - x refers to the distance from the center to the side of a square.
 * 
 *   Not Radius x
 *   - Restricts nodes in a diamond-shaped area around the user.
 *     - Takes largest of the "Not Radius x" types.
 *   - x refers to the distance from the center to the edge of the radius.
 * 
 *   Not Full Rank
 *   - Restricts all of the nodes with the same rank as the user.
 * 
 *   Not Rank x
 *   - Restricts movement from the side nodes the same rank as the user.
 *     - Takes largest of the "Not Rank x" types.
 *   - x refers to the Rank's ID starting from 1.
 * 
 *   Not Full Flank
 *   - Restricts all of the nodes with the same flank as the user.
 * 
 *   Not Flank x
 *   - Restricts movement from the front/back nodes the same flank as the user.
 *     - Takes largest of the "Not Flank x" types.
 *   - x refers to the Flank's ID starting from 1.
 * 
 *   Not Full All Diagonal
 *   - Restricts movement from all nodes diagonal from user.
 * 
 *   Not All Diagonal x
 *   - Restricts movement range from diagonals from user.
 *     - Takes largest of the "Not All Diagonal x" types.
 *   - x refers to the diagonal distance from the user.
 * 
 *   Not Full Diagonal Forward
 *   - Restricts movement from all front diagonal nodes from user.
 * 
 *   Not Diagonal Forward x
 *   - Restricts movement from front diagonal nodes from user.
 *     - Takes largest of the "Not Diagonal Forward x" types.
 *   - x refers to the diagonal distance from the user.
 * 
 *   Not Full Diagonal Backward
 *   - Restricts movement from all behind diagonal nodes from user.
 * 
 *   Not Diagonal Backward x
 *   - Restricts movement from behind diagonal nodes from user.
 *     - Takes largest of the "Not Diagonal Backward x" types.
 *   - x refers to the diagonal distance from the user.
 * 
 *   Not Full Forward
 *   - Restricts movement from all nodes directly in front of user.
 * 
 *   Not Forward x
 *   - Restricts movement from nodes directly in front of user.
 *     - Takes largest of the "Not Forward x" types.
 *   - x refers to the node distance from the user.
 * 
 *   Not Full Backward
 *   - Restricts movement from all nodes directly behind user.
 * 
 *   Not Backward x
 *   - Restricts movement from nodes directly behind user.
 *     - Takes largest of the "Not Backward x" types.
 *   - x refers to the node distance from the user.
 * 
 *   Not Full Upward
 *   - Restricts movement from nodes to the flank above user.
 * 
 *   Not Upward x
 *   - Restricts movement from nodes to the flank above user.
 *     - Takes largest of the "Not Upward x" types.
 *   - x refers to the node distance from the user.
 * 
 *   Not Full Downward
 *   - Restricts movement from nodes to the flank below user.
 * 
 *   Not Downward x
 *   - Restricts movement from nodes to the flank below user.
 *     - Takes largest of the "Not Downward x" types.
 *   - x refers to the node distance from the user.
 * 
 * ---
 * 
 *   King
 *   - Sets the movement range to the range of a Chess board's King piece.
 *   - This is essentially the same as "Square 1" type.
 * 
 *   Queen
 *   - Sets the movement range to the range of a Chess board's Queen piece.
 *   - This is essentially a combination of "Full Rank", "Full Flank", and
 *     "Full All Diagonals" types.
 * 
 *   Rook
 *   - Sets the movement range to the range of a Chess board's Rook piece.
 *   - This is essentially a combination of "Full Rank" and "Full Flank" types.
 * 
 *   Bishop
 *   - Sets the movement range to the range of a Chess board's Rook piece.
 *   - This is essentially a combination of "Full All Diagonals" types.
 * 
 *   Knight
 *   - Sets the movement range to the range of a Chess board's Knight piece.
 *   - This is essentially a combination of "Square 2", "Not All Diagonal 2",
 *     "Not Rank 2", "Not Flank 2" types.
 * 
 *   Pawn
 *   - Sets the movement range to the range of a Chess board's Pawn piece.
 *   - This is essentially the same as "Forward 1" type.
 * 
 * ---
 * 
 * === User Action Movement-Related Notetags ===
 * 
 * ---
 *
 * <rule Move User Node direction: x>
 *
 * - Used for: Skill, Item Notetags
 * - Upon using this skill/item, the user will move 'x' nodes in the specified
 *   'direction' while following the movement 'rule' needed.
 *   - This effect will occur before applying damage or other effects.
 *   - This effect will occur regardless of missing or evasion.
 *   - This effect will occur only once during the action and will not trigger
 *     multiple times with a multi-hit or multi-target skill/item.
 *   - This effect will NOT occur when used by Triggers.
 * - Replace 'rule' with any of the following text to for movement ruling:
 *   - Must, Mid, Must Mid, Switch, Switch Mid, Must Switch, Must Switch Mid
 * 
 *     - Must - User MUST be able to land on target node or else the user
 *       cannot move and the skill/item will be rendered unusable. If there are
 *       any obstacles or allies on that node, the user cannot move and cannot
 *       use the skill/item.
 * 
 *     - Mid - User aims to land on target node, but will stop mid-way if any
 *       allies or obstacles are in the way. User will stop at earliest node.
 *       If the user cannot move past the initial node, the skill/item will be
 *       used as if there's no need to move.
 * 
 *     - Must Mid - Same as the above except if the user cannot move past the
 *       initial node, the skill/item cannot be used.
 * 
 *     - Switch - Moves to target node. If there is an ally on target node that
 *       can switch, the user will switch positions with that ally and then the
 *       skill/item can be used. If the user cannot move to target node, then
 *       the skill/item will be used as if there's no need to move.
 * 
 *     - Switch Mid - User will try to move to target node. If there is an ally
 *       on the way towards the target node that can switch, then the user will
 *       switch with the ally even if the ally is not at the target node. The
 *       user will stop halfway for any other obstacles. If the user cannot
 *       move past the initial node, the skill/item will be used as if there's
 *       no need to move.
 * 
 *     - Must Switch - User must move to target node where there is an ally
 *       that can switch positions. If not, the skill/item cannot be used.
 * 
 *     - Must Switch Mid - User will try to move towards target node. If there
 *       are any allies on the way that can switch, then the user will switch
 *       with that ally even if the ally is not at the target node and then the
 *       skill/item can be used. Otherwise, the skill/item cannot be used even
 *       if there is a clear path to the target node.
 * 
 * - Replace 'direction' with any of the following text for direction:
 *   - Forward, Backward, Upward, Downward, Leftward, Rightward
 *   - Up-Forward, Up-Backward, Up-Leftward, Up-Rightward
 *   - Down-Forward, Down-Backward, Down-Leftward, Down-Rightward
 * - Replace 'x' with a number representing the number of nodes to move in the
 *   specified direction.
 * 
 *   Examples:
 * 
 *   <Must Move User Node Upward: 1>
 *   <Switch Move User Node Downward: 1>
 *   <Mid Move User Node Forward: 2>
 *   <Mid Move User Node Backward: 2>
 *   <Switch Move User Node Up-Forward: 1>
 *   <Must Switch Mid Move User Node Forward: 3>
 *
 * ---
 * 
 * <Silent Move User Node>
 * <Visual Move User Node>
 * 
 * - Used for: Skill, Item Notetags
 * - Used together with <rule Move User Node direction: x> notetag.
 * - Determines if the change to the user's node location will be silent and
 *   discreet or visual and noticeable.
 *   - Use one notetag or the other.
 * - If neither notetag is used, then the effect will default to the setting
 *   found in the Plugin Parameters.
 * 
 * ---
 * 
 * <Move User Node Duration: x>
 * 
 * - Used for: Skill, Item Notetags
 * - Used together with <rule Move User Node direction: x> notetag.
 *   - Also requires the movement to be visual and noticeable.
 *   - Do this with either the <Visual Move User Node> notetag or the related
 *     Plugin Parameter.
 * - Determines how many frames the movement node change will take.
 * - Replace 'x' with a number representing the frame duration of the node
 *   change animation.
 * - If this notetag is not used, then the duration will default to the setting
 *   found in the Plugin Parameters.
 * 
 * ---
 * 
 * === Target Action Movement-Related Notetags ===
 * 
 * ---
 *
 * <rule Move Target Node direction: x>
 *
 * - Used for: Skill, Item Notetags
 * - Upon using this skill/item, the target will move 'x' nodes in the
 *   specified 'direction' while following the movement 'rule' needed.
 *   - This effect will occur after applying damage or other effects.
 *   - This effect will occur only if the action effect connects.
 *   - This effect will occur only once during the action and will not trigger
 *     multiple times with a multi-hit or multi-target skill/item.
 *   - This effect will not affect the user if the user performed a self
 *     movement effect with the <rule Move User Node direction: x> notetag.
 *   - This effect will NOT occur when used by Triggers.
 * - Replace 'rule' with any of the following text to for movement ruling:
 *   - Exact, Mid, Switch, Switch Mid, Crash, Crash Mid
 * 
 *     - Exact - Aims to move target to target node and will take no other
 *       nodes except for that exact target node. If target cannot be moved to
 *       target node due to it being out of bounds or there being any battlers
 *       on that node, then no movements will be made.
 * 
 *     - Mid - Aims to move target to target node, but will stop mid-way if any
 *       battlers or obstacles are in the way. Target will stop at earliest
 *       node. However, if the target cannot move past the initial node, then
 *       no movements will be made.
 * 
 *     - Switch - Target a specific node and moves the target there. If there
 *       is a battler on target node, the target will switch positions with
 *       that battler if the battler can switch. If the other battler cannot
 *       switch, then the target will not move.
 * 
 *     - Switch Mid - Same as the above except the target will stop at the
 *       earliest available node. If there is a battler on the way, the target
 *       will switch places with that battler if the battler can switch nodes.
 *       If there are no available nodes, then the battler will not move.
 * 
 *     - Crash - Aims to move target to target node, but if there is another
 *       battler on that node, then crashing will occur and both the target and
 *       the battler will take crash damage. The battler will remain in place
 *       while the target moves back to its original node.
 * 
 *     - Crash Mid - Aims to move target to target node, but will stop at the
 *       earliest node. If there's a battler in the way, then crashing will
 *       occur and both the target and battler will take crash damage. The
 *       battler will remain in place while the target stops at the last
 *       availabe node before the crash.
 * 
 * - Replace 'direction' with any of the following text for direction:
 *   - Forward, Backward, Upward, Downward, Leftward, Rightward
 *   - Up-Forward, Up-Backward, Up-Leftward, Up-Rightward
 *   - Down-Forward, Down-Backward, Down-Leftward, Down-Rightward
 * - Replace 'x' with a number representing the number of nodes to move in the
 *   specified direction.
 * 
 *   Examples:
 * 
 *   <Mid Move Target Node Forward: 1>
 *   <Switch Move Target Node Forward: 1>
 *   <Switch Mid Move Target Node Backward: 2>
 *   <Crash Move Target Node Forward: 1>
 *   <Crash Mid Move Target Node Backward: 2>
 *
 * ---
 * 
 * <Silent Move Target Node>
 * <Visual Move Target Node>
 * 
 * - Used for: Skill, Item Notetags
 * - Used together with <rule Move Target Node direction: x> notetag.
 * - Determines if the change to the target's node location will be silent and
 *   discreet or visual and noticeable.
 *   - Use one notetag or the other.
 * - If neither notetag is used, then the effect will default to the setting
 *   found in the Plugin Parameters.
 * 
 * ---
 * 
 * <Move Target Node Duration: x>
 * 
 * - Used for: Skill, Item Notetags
 * - Used together with <rule Move Target Node direction: x> notetag.
 *   - Also requires the movement to be visual and noticeable.
 *   - Do this with either the <Visual Move Target Node> notetag or the related
 *     Plugin Parameter.
 * - Determines how many frames the movement node change will take.
 * - Replace 'x' with a number representing the frame duration of the node
 *   change animation.
 * - If this notetag is not used, then the duration will default to the setting
 *   found in the Plugin Parameters.
 * 
 * ---
 * 
 * <Grid Distance Damage Per Node: x% param>
 * 
 * - Used for: Skill, Item Notetags
 * - Used together with one of the target movement notetags.
 * - Deals 'x%' of user's 'param' as damage based on target's distance moved.
 * - Replace 'x' with a number representing a percentage of the user's
 *   parameter to deal as damage.
 * - Replace 'param' with text representing the parameter to reference for
 *   damage: 
 *   - 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', or 'LUK'
 *   - 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT', 'HRG', 'MRG', 'TRG'
 *   - 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR', 'MDR', 'FDR', 'EXR'
 *   - Keep in mind if you use values like 'HIT', they will be often be rates
 *     (numbers between 0 and 1 as rates) so adjust your 'x%' accordingly.
 * 
 * ---
 * 
 * <Hide Grid Range>
 * 
 * - Used for: Skill, Item Notetags
 * - This skill/item will not display its grid target and usability ranges.
 * - These refer to the required rank/flank and node targeting notetags.
 * 
 * ---
 * 
 * <Crash Self Damage Rate: x%>
 * <Crash Target Damage Rate: x%>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the crash damage received by a percentile rate.
 *   - Self refers to the moved enemy.
 *   - Target refers to the enemy crashed into.
 * - Replace 'x' with a number representing a percentile rate that will alter
 *   the base damage by.
 * - This can be stacked multiplicatively with other trait objects.
 * - This will be calculated before the flat bonus damage.
 * - Example Usage: Rubber enemies have lower crash self damage.
 * - Example Usage: Fluffy enemies have lower crash target damage.
 * 
 * ---
 * 
 * <Crash Self Damage Bonus: +x>
 * <Crash Self Damage Bonus: -x>
 * 
 * <Crash Target Damage Bonus: +x>
 * <Crash Target Damage Bonus: -x>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the crash damage received by a flat bonus amount.
 *   - Self refers to the moved enemy.
 *   - Target refers to the enemy crashed into.
 * - Replace 'x' with a number representing a flat bonus amount of damage.
 * - This can be stacked additively with other trait objects.
 * - This will be calculated before the percentile damage rate.
 * - Example Usage: Brittle enemies have higher flat bonus target crash damage.
 * - Example Usage: Thorny enemies have higher flat bonus target crash damage.
 * 
 * ---
 * 
 * === Action-User Requirements-Related Notetags ===
 * 
 * ---
 *
 * <Require Rank: x>
 * <Require Ranks: x, x, x>
 *
 * <Require Flank: x>
 * <Require Flanks: x, x, x>
 *
 * - Used for: Skill, Item Notetags
 * - Requires the user of the skill/item to be standing on a Rank/Flank 'x'
 *   node in order to be usable in battle.
 *   - Ignore this requirement when used outside of battle.
 * - Replace 'x' with a number representing the node Rank/Flank required for
 *   the user to stand on in order to use this skill/item.
 *   - Insert multiple 'x' values to allow for a larger spread of Ranks/Flanks.
 * - If the user is moved to a different node that does not meet the Rank/Flank
 *   requirements to use this skill/item, the user will not use it.
 *
 * ---
 *
 * <Require Not Rank: x>
 * <Require Not Ranks: x, x, x>
 *
 * <Require Not Flank: x>
 * <Require Not Flanks: x, x, x>
 *
 * - Used for: Skill, Item Notetags
 * - Requires the user of the skill/item to NOT be standing on a Rank/Flank 'x'
 *   node in order to be usable in battle.
 *   - Ignore this requirement when used outside of battle.
 * - Replace 'x' with a number representing the node Rank/Flank required for
 *   the user to NOT stand on in order to use this skill/item.
 *   - Insert multiple 'x' values to allow for a larger spread of Ranks/Flanks.
 * - If the user is moved to a different node that does not meet the Rank/Flank
 *   requirements to use this skill/item, the user will not use it.
 *
 * ---
 *
 * <Require Front Rank>
 * <Require Back Rank>
 * 
 * <Require Top Flank>
 * <Require Bottom Flank>
 *
 * - Used for: Skill, Item Notetags
 * - Requires the user of the skill/item to be standing on the a certain
 *   Rank/Flank node.
 *   - A team's "Front Rank" is its first Rank occupied by living members.
 *   - A team's "Back Rank" is its last Rank occupied by living members.
 *   - A team's "Top Flank" is its first Flank occupied by living members.
 *   - A team's "Bottom Flank" is its last Flank occupied by living members.
 *   - Ignore this requirement when used outside of battle.
 * - If the user is moved to a different node that does not meet the Rank/Flank
 *   requirements to use this skill/item, the user will not use it.
 *
 * ---
 * 
 * === Action-Target Requirements-Related Notetags ===
 * 
 * ---
 * 
 * <Target Only Rank: x>
 * <Target Only Ranks: x, x, x>
 * 
 * <Target Only Flank: x>
 * <Target Only Flanks: x, x, x>
 * 
 * - Used for: Skill, Item Notetags
 * - The skill/item will only affect the targets found in Rank/Flank 'x' and
 *   will require there to be a target found in that Rank/Flank in order to be
 *   used.
 *   - This will be applied on top of whatever targeting scope is used.
 *   - This applies both ways for actors and enemies.
 *   - If there are no valid targets found in the Rank/Flank, then the
 *     skill/item will be disabled and cannot be used.
 *   - If there are Provoke or Taunt targets on the field and this is an action
 *     that needs target selection, they must be within valid Ranks/Flanks that
 *     can be targeted by this action or else this action can't be used.
 *   - Can be used together with other "Target Only" notetags.
 *   - Ignore this requirement when used outside of battle.
 *   - This does not work with <Target: x Node, Rank, Flank> notetags.
 * - Replace 'x' with a number representing the Rank/Flank to restrict the
 *   scope of the skill/item action to.
 * 
 * ---
 * 
 * <Target Only Same Rank>
 * <Target Only Same Flank>
 * 
 * - Used for: Skill, Item Notetags
 * - The skill/item will only affect targets found in the same Rank/Flank as
 *   the action's user.
 *   - This will be applied on top of whatever targeting scope is used.
 *   - This applies both ways for actors and enemies.
 *   - If there are no valid targets found in the Rank/Flank, then the
 *     skill/item will be disabled and cannot be used.
 *   - If there are Provoke or Taunt targets on the field and this is an action
 *     that needs target selection, they must be within valid Ranks/Flanks that
 *     can be targeted by this action or else this action can't be used.
 *   - Can be used together with other "Target Only" notetags.
 *   - Ignore this requirement when used outside of battle.
 *   - This does not work with <Target: x Node, Rank, Flank> notetags.
 * 
 * ---
 * 
 * <Target Only Front Rank>
 * <Target Only Back Rank>
 * 
 * <Target Only Top Flank>
 * <Target Only Bottom Flank>
 * 
 * - Used for: Skill, Item Notetags
 * - The skill/item will only affect targets found in certain Rank/Flank node.
 *   - A team's "Front Rank" is its first Rank occupied by living members.
 *   - A team's "Back Rank" is its last Rank occupied by living members.
 *   - A team's "Top Flank" is its first Flank occupied by living members.
 *   - A team's "Bottom Flank" is its last Flank occupied by living members.
 *   - This will be applied on top of whatever targeting scope is used.
 *   - This applies both ways for actors and enemies.
 *   - If there are Provoke or Taunt targets on the field and this is an action
 *     that needs target selection, they must be within valid Ranks/Flanks that
 *     can be targeted by this action or else this action can't be used.
 *   - Can be used together with other "Target Only" notetags.
 *   - Ignore this requirement when used outside of battle.
 *   - This does not work with <Target: x Node, Rank, Flank> notetags.
 * 
 * ---
 * 
 * === Weapon Range-Target Requirements-Related Notetags ===
 * 
 * ---
 * 
 * <Target In Weapon Range>
 * <Use Weapon Range>
 * 
 * - Used for: Skill, Item Notetags
 * - The skill/item will utilize the battler's weapon range instead of the
 *   action's weapon range.
 * - This will completely bypass the "Target Only" notetags in favor of the
 *   "Weapon Range" notetags.
 * - Actors will use the weapon range of their first weapon if they are using
 *   multiple weapons.
 * - If an actor is not using any weapon, it will use the default melee range.
 *   - Depending on the settings found in the Plugin Parameters, the default
 *     melee range may only target the Front Rank.
 * - Enemies will use the weapon range found in their own notetags. If there
 *   aren't any "Weapon Range" notetags found in the enemy's note box, then it
 *   will use the default melee range. 
 *   - Depending on the settings found in the Plugin Parameters, the default
 *     melee range may only target the Front Rank.
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
 * - This does not work with <Target: x Node, Rank, Flank> notetags.
 * 
 * ---
 * 
 * <Weapon Range Melee>
 * <Weapon Range All>
 * 
 * - Used for: Weapon, Enemy Notetags
 * - These are quick shortcuts to mark specific range types.
 *   - Melee - Targets only the front rank. Same as <Weapon Range Front Rank>.
 *   - All - Targets the whole battlefield. When using this, everything becomes
 *     a valid target. This is mostly used as a shortcut to bypass the default
 *     Plugin Parameter weapon range settings.
 * - These notetags will follow the rules of others:
 *   - This will be applied on top of whatever targeting scope is used.
 *   - This applies both ways for actors and enemies.
 *   - If there are no valid targets found in the Rank/Flank, then the
 *     dependent action will be disabled and cannot be used.
 *   - If there are Provoke or Taunt targets on the field and this is an action
 *     that needs target selection, they must be within valid Ranks/Flanks that
 *     can be targeted by this action or else this action can't be used.
 *   - Can be used together with other "Weapon Range" notetags.
 *   - Ignore this requirement when used outside of battle.
 * 
 * ---
 * 
 * <Weapon Range Rank: x>
 * <Weapon Range Ranks: x, x, x>
 * 
 * <Weapon Range Flank: x>
 * <Weapon Range Flanks: x, x, x>
 * 
 * - Used for: Weapon, Enemy Notetags
 * - The weapon range will only affect the targets found in Rank/Flank 'x' and
 *   will require there to be a target found in that Rank/Flank in order to be
 *   used.
 *   - This will be applied on top of whatever targeting scope is used.
 *   - This applies both ways for actors and enemies.
 *   - If there are no valid targets found in the Rank/Flank, then the
 *     dependent action will be disabled and cannot be used.
 *   - If there are Provoke or Taunt targets on the field and this is an action
 *     that needs target selection, they must be within valid Ranks/Flanks that
 *     can be targeted by this action or else this action can't be used.
 *   - Can be used together with other "Weapon Range" notetags.
 *   - Ignore this requirement when used outside of battle.
 * - Replace 'x' with a number representing the Rank/Flank to restrict the
 *   scope of the weapon range to.
 * 
 * ---
 * 
 * <Weapon Range Same Rank>
 * <Weapon Range Same Flank>
 * 
 * - Used for: Weapon, Enemy Notetags
 * - The weapon range will only affect targets found in the same Rank/Flank as
 *   the action's user.
 *   - This will be applied on top of whatever targeting scope is used.
 *   - This applies both ways for actors and enemies.
 *   - If there are no valid targets found in the Rank/Flank, then the
 *     dependent action will be disabled and cannot be used.
 *   - If there are Provoke or Taunt targets on the field and this is an action
 *     that needs target selection, they must be within valid Ranks/Flanks that
 *     can be targeted by this action or else this action can't be used.
 *   - Can be used together with other "Weapon Range" notetags.
 *   - Ignore this requirement when used outside of battle.
 * 
 * ---
 * 
 * <Weapon Range Front Rank>
 * <Weapon Range Back Rank>
 * 
 * <Weapon Range Top Flank>
 * <Weapon Range Bottom Flank>
 * 
 * - Used for: Weapon, Enemy Notetags
 * - The weapon range will only affect targets found in set Rank/Flank node.
 *   - A team's "Front Rank" is its first Rank occupied by living members.
 *   - A team's "Back Rank" is its last Rank occupied by living members.
 *   - A team's "Top Flank" is its first Flank occupied by living members.
 *   - A team's "Bottom Flank" is its last Flank occupied by living members.
 *   - This will be applied on top of whatever targeting scope is used.
 *   - This applies both ways for actors and enemies.
 *   - If there are Provoke or Taunt targets on the field and this is an action
 *     that needs target selection, they must be within valid Ranks/Flanks that
 *     can be targeted by this action or else this action can't be used.
 *   - Can be used together with other "Weapon Range" notetags.
 *   - Ignore this requirement when used outside of battle.
 * 
 * ---
 * 
 * === Action-Target Specific Ranks, Flanks, Nodes-Related Notetags ===
 * 
 * ---
 * 
 * <Target: Enemy Grid Node>
 * <Target: Enemy or Ally Grid Node>
 * 
 * <Target: Ally Grid Node>
 * <Target: Ally or Enemy Grid Node>
 * 
 * - Used for: Skill, Item Notetags
 * - Allows the player to select a specific node to target on either the enemy
 *   or ally grid side (or both).
 *   - Using the "Enemy or Ally" or "Ally or Enemy" variants will allow players
 *     to select from either side. "Enemy or Ally" will default to enemy side
 *     first while "Ally or Enemy" will default to ally side first.
 *   - This can be used together with the <Area of Effect> notetags.
 *   - This will suppress the <Target Only> and <Weapon Range> notetag effects.
 * - The player must select a tile that contains a battler on it.
 *   - If used together with <Area of Effect> notetags, the nodes within the
 *     Area of Effect must contain at least one battler in it.
 * - If the enemy team has provoked the user or if there are taunt targets,
 *   the selectable nodes become limited only the provoker or taunt targets.
 *   - Although selecting the enemy provoker or taunter is required, they are
 *     not required to be present when the skill/item launches. If they changed
 *     nodes, the target will still be the selected node.
 * 
 * ---
 * 
 * <Target: Empty Enemy Grid Node>
 * <Target: Empty Enemy or Ally Grid Node>
 * <Target: Empty Ally Grid Node>
 * <Target: Empty Ally or Enemy Grid Node>
 * 
 * <Target: Any Enemy Grid Node>
 * <Target: Any Enemy or Ally Grid Node>
 * <Target: Any Ally Grid Node>
 * <Target: Any Ally or Enemy Grid Node>
 * 
 * - Used for: Skill, Item Notetags
 * - Similar to <Target: x Grid Node> targeting types except that these require
 *   the player to select a specific type of node.
 * - "Empty" will require the player to select a node without any alive
 *   battlers standing on top of it.
 *   - Enemy AI and Auto-Battle AI will select a random empty node. If not, it
 *     will select a random node regardless of empty-state.
 * - "Any" will allow the player to select any node.
 *   - Enemy AI and Auto-Battle AI will select a random node.
 * - This will NOT select any battlers as targets. Instead, it will utilize the
 *   selected node to perform actions through either Action Sequences or
 *   special notetags found in the "Special Target Node Effects" section.
 * 
 * ---
 * 
 * <Target: Enemy Grid Rank>
 * <Target: Enemy or Ally Grid Rank>
 * 
 * <Target: Ally Grid Rank>
 * <Target: Ally or Enemy Grid Rank>
 * 
 * - Used for: Skill, Item Notetags
 * - Allows the player to select a specific Rank to target on either the enemy
 *   or ally grid side (or both).
 *   - Using the "Enemy or Ally" or "Ally or Enemy" variants will allow players
 *     to select from either side. "Enemy or Ally" will default to enemy side
 *     first while "Ally or Enemy" will default to ally side first.
 *   - This ignores any <Area of Effect> notetags.
 *   - This will suppress the <Target Only> and <Weapon Range> notetag effects.
 * - The player must select a Rank that contains a battler on it.
 * - If the enemy team has provoked the user or if there are taunt targets,
 *   the selectable Ranks become limited only the provoker or taunt targets.
 *   - Although selecting the enemy provoker or taunter is required, they are
 *     not required to be present when the skill/item launches. If they changed
 *     Ranks, the target will still be the selected Rank.
 * 
 * ---
 * 
 * <Target: Enemy Grid Flank>
 * <Target: Enemy or Ally Grid Flank>
 * 
 * <Target: Ally Grid Flank>
 * <Target: Ally or Enemy Grid Flank>
 * 
 * - Used for: Skill, Item Notetags
 * - Allows the player to select a specific Flank to target on either the enemy
 *   or ally grid side (or both).
 *   - Using the "Enemy or Ally" or "Ally or Enemy" variants will allow players
 *     to select from either side. "Enemy or Ally" will default to enemy side
 *     first while "Ally or Enemy" will default to ally side first.
 *   - This ignores any <Area of Effect> notetags.
 *   - This will suppress the <Target Only> and <Weapon Range> notetag effects.
 * - The player must select a Flank that contains a battler on it.
 * - If the enemy team has provoked the user or if there are taunt targets,
 *   the selectable Flanks become limited only the provoker or taunt targets.
 *   - Although selecting the enemy provoker or taunter is required, they are
 *     not required to be present when the skill/item launches. If they changed
 *     Flanks, the target will still be the selected Flank.
 * 
 * ---
 * 
 * === Area of Effect-Related Notetags ===
 * 
 * ---
 *
 * <Area of Effect: type>
 *
 * - Used for: Skill, Item Notetags
 * - Adds an area of effect to this skill/item.
 *   - Can only be used with skills/items that have selection properties such
 *     as single target skills/items or the ability to target specific nodes.
 *   - This does not work with non-selection skills like All targets, Random
 *     Targets, or User only.
 *   - This does not work with specific Rank and Flank selection.
 * - Replace 'type' with a type from the "Area of Effect Types" section below.
 * - Insert multiples of this notetag to expand the Area of Effect range.
 *
 * ---
 *
 * <Area of Effect>
 *  type
 *  type
 *  type
 * </Area of Effect>
 *
 * - Used for: Skill, Item Notetags
 * - Adds an area of effect to this skill/item.
 *   - Can only be used with skills/items that have selection properties such
 *     as single target skills/items or the ability to target specific nodes.
 *   - This does not work with non-selection skills like All targets, Random
 *     Targets, or User only.
 *   - This does not work with specific Rank and Flank selection.
 * - Replace 'type' with a type from the "Area of Effect Types" section below.
 * - Insert as many types as you want to expand the Area of Effect range.
 *
 * ---
 * 
 * ==== Area of Effect Types ====
 * 
 * These are used with the <Area of Effect> notetags and are the values you'd
 * insert in place of the 'type' parameter.
 * 
 * ---
 * 
 *   All
 *   - Expands the Area of Effect range to the whole grid.
 *   - Takes priority over the rest of the types.
 * 
 *   None
 *   - Removes all Area of Effect range options.
 *   - Takes priority over the rest of the types except for "All".
 * 
 * ---
 * 
 *   Square x
 *   - Expands area to a square-shaped range around the user.
 *     - Boosts additively with other "Square x" types.
 *   - x refers to the distance from the center to the side of a square.
 * 
 *   Radius x
 *   - Expands area to a diamond-shaped range around the user.
 *     - Boosts additively with other "Radius x" types.
 *     - Boosts additively with "Square x" type.
 *   - x refers to the distance from the center to the edge of the radius.
 * 
 *   Full Rank
 *   - Expands Area of Effect range to the nodes with the same rank as
 *     the user.
 * 
 *   Rank x
 *   - Expands Area of Effect range to side nodes the same rank as the user.
 *     - Boosts additively with other "Rank x" types.
 *     - Boosts additively with "Square x" and "Radius x" types.
 *   - x refers to the Rank's ID starting from 1.
 * 
 *   Full Flank
 *   - Expands Area of Effect range to the nodes with the same flank as
 *     the user.
 * 
 *   Flank x
 *   - Expands Area of Effect range to front and back nodes the same flank as
 *     the user.
 *     - Boosts additively with other "Flank x" types.
 *     - Boosts additively with "Square x" and "Radius x" types.
 *   - x refers to the Flank's ID starting from 1.
 * 
 *   Full All Diagonal
 *   - Expands Area of Effect range to all nodes diagonal from user.
 * 
 *   All Diagonal x
 *   - Expands Area of Effect range to diagonals from user.
 *     - Boosts additively with other "All Diagonal x" types.
 *     - Boosts additively with "Square x" and half of "Radius x" types.
 *   - x refers to the diagonal distance from the user.
 * 
 *   Full Diagonal Forward
 *   - Expands Area of Effect range to all front diagonal nodes from user.
 * 
 *   Diagonal Forward x
 *   - Expands Area of Effect range to front diagonal nodes from user.
 *     - Boosts additively with other "Diagonal Forward x" types.
 *     - Boosts additively with "Square x" and half of "Radius x" types.
 *   - x refers to the diagonal distance from the user.
 * 
 *   Full Diagonal Backward
 *   - Expands Area of Effect range to all behind diagonal nodes from user.
 * 
 *   Diagonal Backward x
 *   - Expands Area of Effect range to behind diagonal nodes from user.
 *     - Boosts additively with other "Diagonal Backward x" types.
 *     - Boosts additively with "Square x" and half of "Radius x" types.
 *   - x refers to the diagonal distance from the user.
 * 
 *   Full Forward
 *   - Expands Area of Effect range to all nodes directly in front of user.
 * 
 *   Forward x
 *   - Expands Area of Effect range to nodes directly in front of user.
 *     - Boosts additively with other "Forward x" types.
 *     - Boosts additively with other "Flank x" types.
 *     - Boosts additively with "Square x" and "Radius x" types.
 *   - x refers to the node distance from the user.
 * 
 *   Full Backward
 *   - Expands Area of Effect range to all nodes directly behind user.
 * 
 *   Backward x
 *   - Expands Area of Effect range to nodes directly behind user.
 *     - Boosts additively with other "Backward x" types.
 *     - Boosts additively with other "Flank x" types.
 *     - Boosts additively with "Square x" and "Radius x" types.
 *   - x refers to the node distance from the user.
 * 
 *   Full Upward
 *   - Expands Area of Effect range to all nodes to the flank above user.
 * 
 *   Upward x
 *   - Expands Area of Effect range to nodes to the flank above user.
 *     - Boosts additively with other "Upward x" types.
 *     - Boosts additively with other "Rank x" types.
 *     - Boosts additively with "Square x" and "Radius x" types.
 *   - x refers to the node distance from the user.
 * 
 *   Full Downward
 *   - Expands Area of Effect range to all nodes to the flank below user.
 * 
 *   Downward x
 *   - Expands Area of Effect range to nodes to the flank below user.
 *     - Boosts additively with other "Downward x" types.
 *     - Boosts additively with other "Rank x" types.
 *     - Boosts additively with "Square x" and "Radius x" types.
 *   - x refers to the node distance from the user.
 * 
 * ---
 * 
 * === Temporary Troop Grid-Related Name Tags ===
 * 
 * ---
 *
 * <Grid>
 * <Battle Grid>
 * 
 * <No Grid>
 * <No Battle Grid>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Requires VisuMZ_2_BattleGridSystem!
 * - Changes the battle system to utilize the Battle Grid System or not.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * - If none of these notetags or comment tags are found, refer to the default
 *   settings found in the Plugin Parameters.
 *
 * ---
 * 
 * === Node Passive States-Related Notetags ===
 * 
 * ---
 *
 * <Actor Node x, y Passive State: id>
 * <Actor Node x, y Passive States: id, id, id>
 *
 * <Actor Node x, y Passive State: name>
 * <Actor Node x, y Passive States: name, name, name>
 *
 * <Enemy Node x, y Passive State: id>
 * <Enemy Node x, y Passive States: id, id, id>
 *
 * <Enemy Node x, y Passive State: name>
 * <Enemy Node x, y Passive States: name, name, name>
 *
 * - Used for: Troop Comment Tags
 * - Adds a passive state(s) to the Actor/Enemy Node at 'x', 'y' so that when a
 *   battler stands on that Node, that battler will gain the passive state(s).
 * - Pick 'Actor' or 'Enemy' to determine which side of the screen to place
 *   the passive state(s) on.
 * - Replace 'x' with a number representing the Node Rank.
 * - Replace 'y' with a number representing the Node Flank.
 * - For 'id' variant, replace 'id' with a number representing the ID of the
 *   state you wish to add as a passive state effect.
 *   - Insert multiple 'id' values to add multiple passive states.
 * - For 'name' variant, replace 'name' with the name of the state that you
 *   wish to add as a passive state effect.
 *   - Insert multiple 'name' values to add multiple passive states.
 * - Insert multiple copies of this comment tag to add Passive State Nodes
 *   at different grid locations.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 *   Examples:
 * 
 *   <Actor Node 1, 2 Passive State: 15>
 *   <Actor Node 4, 3 Passive States: 15, 16>
 * 
 *   <Enemy Node 1, 2 Passive State: HP Regeneration>
 *   <Enemy Node 4, 3 Passive States: HP Regeneration, MP Regeneration>
 *
 * ---
 * 
 * === Node Trigger-Related Notetags ===
 * 
 * ---
 *
 * <Actor Node x, y Trigger: id>
 * <Actor Node x, y Trigger: name>
 *
 * <Enemy Node x, y Trigger: id>
 * <Enemy Node x, y Trigger: name>
 *
 * - Used for: Troop Comment Tags
 * - Adds a trigger to the Actor/Enemy Node at 'x', 'y' so that when a battler
 *   stands on that Node, that battler will activate the trigger and skill 'id'
 *   will affect the battler.
 * - Pick 'Actor' or 'Enemy' to determine which side of the screen to place
 *   the passive state(s) on.
 * - Replace 'x' with a number representing the Node Rank.
 * - Replace 'y' with a number representing the Node Flank.
 * - For 'id' variant, replace 'id' with a number representing the ID of the
 *   skill you wish to set as a trigger effect.
 * - For 'name' variant, replace 'name' with the name of the skill that you
 *   wish to set as a trigger effect.
 * - Insert multiple copies of this comment tag to add Trigger Nodes at
 *   different grid locations.
 *   - Each node can only contain ONE trigger!
 *   - Otherwise, newly placed triggers will overwrite the old ones.
 * - When actors and enemies spawn in upon setup, if they happen to start the
 *   battle on a node with a trigger, the trigger will be erased.
 * - Triggers added by these notetags will have no innate user. Instead, the
 *   user will become the battler that triggers it.
 *   - Triggers will only affect the battler that triggered it regardless base
 *     skill's scope.
 *   - The trigger skill's damage formula, effects, animation, and repeat times
 *     will be used to determine the type of effect that occurs on the battler.
 *     - Common Event effects will not occur.
 *   - If the trigger skill has notetags that would move the user or target,
 *     they will NOT occur and the related notetag effects are suppressed.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 *   Examples:
 * 
 *   <Actor Node 1, 2 Trigger: 52>
 *   <Actor Node 4, 3 Trigger: Heal I>
 * 
 *   <Enemy Node 1, 2 Trigger: 99>
 *   <Enemy Node 4, 3 Trigger: Fire I>
 * 
 * ---
 * 
 * <Trigger Name: text>
 * 
 * - Used for: Skill Notetags
 * - When this skill is used as a trigger, the popup text that appears will
 *   show 'text' instead of the skill's name.
 * - Replace 'text' with text you want to display as the Trigger Skill's popup
 *   text when a battler activates it.
 * 
 * ---
 * 
 * <Trigger Icon: x>
 * 
 * - Used for: Skill Notetags
 * - When this skill is used as a trigger, the popup text that appears will
 *   show 'x' icon instead of the skill's icon.
 * - Replace 'x' with a number representing the icon index you want to display
 *   as the Trigger Skill's popup text when a battler activates it.
 * 
 * ---
 * 
 * <Trigger Animation: x>
 * 
 * - Used for: Skill Notetags
 * - When this skill is used as a trigger, the animation that is played will
 *   show 'x' animation instead of the skill's animation.
 * - Replace 'x' with a number representing the ID of the animation you want to
 *   play as the Trigger Skill's animation when a battler activates it.
 * 
 * ---
 * 
 * === Special Target Node Effects-Related Notetags ===
 * 
 * ---
 *
 * <Clear Passive States From Target Node>
 *
 * - Used for: Skill, Item Notetags
 * - Clears all Passive States from target selected node.
 * - Used with <Target: Empty x Grid Node> or <Target: Any x Grid Node>
 *   targeting notetags.
 * - Does NOT work with regular battler targeting scopes.
 *
 * ---
 *
 * <Add Passive State To Target Node: id>
 * <Add Passive States To Target Node: id, id, id>
 *
 * <Add Passive State To Target Node: name>
 * <Add Passive States To Target Node: name, name, name>
 *
 * - Used for: Skill, Item Notetags
 * - Adds specific Passive State(s) to target selected node.
 * - Used with <Target: Empty x Grid Node> or <Target: Any x Grid Node>
 *   targeting notetags.
 * - Does NOT work with regular battler targeting scopes.
 * - For 'id' variant, replace 'id' with a number representing the ID of the
 *   state you wish to add as a passive state effect.
 *   - Insert multiple 'id' values to add multiple passive states.
 * - For 'name' variant, replace 'name' with the name of the state that you
 *   wish to add as a passive state effect.
 *   - Insert multiple 'name' values to add multiple passive states.
 *
 * ---
 *
 * <Remove Passive State From Target Node: id>
 * <Remove Passive States From Target Node: id, id, id>
 *
 * <Remove Passive State From Target Node: name>
 * <Remove Passive States From Target Node: name, name, name>
 *
 * - Used for: Skill, Item Notetags
 * - Removes specific Passive State(s) from target selected node.
 * - Used with <Target: Empty x Grid Node> or <Target: Any x Grid Node>
 *   targeting notetags.
 * - Does NOT work with regular battler targeting scopes.
 * - For 'id' variant, replace 'id' with a number representing the ID of the
 *   state you wish to remove as a passive state effect.
 *   - Insert multiple 'id' values to remove multiple passive states.
 * - For 'name' variant, replace 'name' with the name of the state that you
 *   wish to remove as a passive state effect.
 *   - Insert multiple 'name' values to remove multiple passive states.
 *
 * ---
 *
 * <Add Trigger to Target Node>
 *
 * - Used for: Skill Notetags
 * - Plants this skill as a Trigger on target selected node.
 * - Used with <Target: Empty x Grid Node> targeting notetag.
 * - Does NOT work with regular battler targeting scopes.
 * - Does NOT affect nodes with any battlers on it and only works on
 *   empty nodes as per the <Target: Empty x Grid Node> notetag.
 *
 * ---
 *
 * <Remove Trigger From Target Node>
 *
 * - Used for: Skill, Item Notetags
 * - Removes any Trigger effects from target selected node.
 * - Used with <Target: Empty x Grid Node> or <Target: Any x Grid Node>
 *   targeting notetags.
 * - Does NOT work with regular battler targeting scopes.
 *
 * ---
 * 
 * <Teleport to Target Node>
 * 
 * - Used for: Skill, Item Notetags
 * - Moves user (if selected on the user's side of the grid) or a random
 *   opposing battler (if selected on the opponent's side of the grid) to
 *   target selected node instantaneously.
 * - Used with <Target: Empty x Grid Node> or <Target: Any x Grid Node>
 *   targeting notetags.
 *   - When used with <Target: Any x Grid Node>, if there is another battler on
 *     target node and that battler can switch, switch both members.
 *   - Otherwise, ignore the teleport effect.
 * - Does NOT work with regular battler targeting scopes.
 * - This cannot be used with <Traverse to Target Node: x Frames>.
 * 
 * ---
 * 
 * <Traverse to Target Node: x Frames>
 * 
 * - Used for: Skill, Item Notetags
 * - Moves user (if selected on the user's side of the grid) or a random
 *   opposing battler (if selected on the opponent's side of the grid) to
 *   target selected node with a duration of 'x' frames.
 * - Replace 'x' with a number representing the frame duration in the movement
 *   time needed to traverse to target selected node.
 * - Used with <Target: Empty x Grid Node> or <Target: Any x Grid Node>
 *   targeting notetags.
 *   - When used with <Target: Any x Grid Node>, if there is another battler on
 *     target node and that battler can switch, switch both members.
 *   - Otherwise, ignore the traverse effect.
 * - Does NOT work with regular battler targeting scopes.
 * - This cannot be used with <Teleport to Target Node>.
 * 
 * ---
 * 
 * <Level x Push From Target Node: y Frames>
 * <Level x Pull To Target Node: y Frames>
 * 
 * - Used for: Skill, Item Notetags
 * - 'Push' variant pushes all movable members on the targeted side of the grid
 *   away from target Node with 'x' strength and a duration of 'y' frames.
 * - 'Pull' variant pulls all movable members on the targeted side of the grid
 *   towards target Node with 'x' strength and a duration of 'y' frames.
 * - Replace 'x' with a number representing the maximum times a member can move
 *   from this effect.
 * - Replace 'y' with a number representing the frame duration in the movement
 *   time caused by this effect.
 * - These notetags are mutually exclusive and cannot be used together.
 * 
 * ---
 *
 * ============================================================================
 * Action Sequence - Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that become usable with this plugin.
 * They can be accessed through the Plugin Command event command and selecting
 * the VisuMZ_1_BattleCore plugin where they are stored.
 *
 * ---
 * 
 * === Action Sequences - Grid ===
 * 
 * These Action Sequences are Battle Grid System-related.
 * 
 * ---
 * 
 * GRID: Action Animation at Node
 * - Plays action animation at target node.
 * - Requires VisuMZ_2_BattleGridSystem!
 * 
 *   Action-Selected Node?:
 *   - Use Action-Selected Node Coordinates if possible?
 *   - Requires "Empty" or "Any" for <Target: x Grid Node>
 *   - If the no action is in effect or the action doesn't use that target
 *     structure, use the node coordinates below:
 * 
 *     Unit:
 *     - Which unit's Node do you want to play an animation on?
 * 
 *     Rank:
 *     - Input the number representing the Rank of the Node you want to play an
 *       animation on.
 * 
 *     Flank:
 *     - Input the number representing the Flank of the Node you want to play
 *       an animation on.
 * 
 *   Offset X:
 *   - Offsets the animation x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the animation y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 *
 * GRID: Add Passive State(s) to Node
 * - Adds Passive State(s) at target node.
 * - Requires VisuMZ_2_BattleGridSystem!
 *
 *   State ID(s):
 *   - Select which State ID(s) to add as a Passive State.
 * 
 *   Action-Selected Node?:
 *   - Use Action-Selected Node Coordinates if possible?
 *   - Requires "Empty" or "Any" for <Target: x Grid Node>
 *   - If the no action is in effect or the action doesn't use that target
 *     structure, use the node coordinates below:
 *
 *     Unit:
 *     - Which unit do you want to add the Passive State Node effect for?
 *
 *     Rank:
 *     - Input the number representing the Rank of the Node you want to add a
 *       Passive State(s) to.
 *
 *     Flank:
 *     - Input the number representing the Flank of the Node you want to add a
 *       Passive State(s) to.
 *
 * ---
 * 
 * GRID: Add Trigger to Node
 * - Adds Trigger to target node.
 * - Target node cannot have battler.
 * - Each node can only contain ONE trigger! 
 * - Otherwise, newly placed triggers will overwrite the old ones.
 * - Requires VisuMZ_2_BattleGridSystem!
 * 
 *   Skill ID:
 *   - Select which Skill ID(s) to add as the trigger.
 * 
 *   Action-Selected Node?:
 *   - Use Action-Selected Node Coordinates if possible?
 *   - Requires "Empty" or "Any" for <Target: x Grid Node>
 *   - If the no action is in effect or the action doesn't use that target
 *     structure, use the node coordinates below:
 * 
 *     Unit:
 *     - Which unit do you want to add the Trigger Node effect for?
 * 
 *     Rank:
 *     - Input the number representing the Rank of the Node you want to add a
 *       Trigger to.
 * 
 *     Flank:
 *     - Input the number representing the Flank of the Node you want to add a
 *       Trigger to.
 * 
 * ---
 * 
 * GRID: Animation ID at Node
 * - Plays specific animation ID at target node.
 * 
 *   Animation ID:
 *   - Play this animation at target node.
 * 
 *     Mirror?:
 *     - Mirror this animation?
 * 
 *     Mute?:
 *     - Mute this animation?
 * 
 *   Action-Selected Node?:
 *   - Use Action-Selected Node Coordinates if possible?
 *   - Requires "Empty" or "Any" for <Target: x Grid Node>
 *   - If the no action is in effect or the action doesn't use that target
 *     structure, use the node coordinates below:
 * 
 *     Unit:
 *     - Which unit's Node do you want to play an animation on?
 * 
 *     Rank:
 *     - Input the number representing the Rank of the Node you want to play an
 *       animation on.
 * 
 *     Flank:
 *     - Input the number representing the Flank of the Node you want to play
 *       an animation on.
 * 
 *   Offset X:
 *   - Offsets the animation x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the animation y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * GRID: Animation JS at Node
 * - Uses JS to calculate which animation to play at target node.
 * 
 *   JS: Animation ID:
 *   - Calculate which animation to play on unit(s).
 *   - Uses JavaScript to determine animation ID.
 * 
 *     Mirror?:
 *     - Mirror this animation?
 * 
 *     Mute?:
 *     - Mute this animation?
 * 
 *   Action-Selected Node?:
 *   - Use Action-Selected Node Coordinates if possible?
 *   - Requires "Empty" or "Any" for <Target: x Grid Node>
 *   - If the no action is in effect or the action doesn't use that target
 *     structure, use the node coordinates below:
 * 
 *     Unit:
 *     - Which unit's Node do you want to play an animation on?
 * 
 *     Rank:
 *     - Input the number representing the Rank of the Node you want to play an
 *       animation on.
 * 
 *     Flank:
 *     - Input the number representing the Flank of the Node you want to play
 *       an animation on.
 * 
 *   Offset X:
 *   - Offsets the animation x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the animation y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * GRID: Animation Type at Node
 * - Plays certain animation type at target node.
 * - Requires VisuMZ_2_BattleGridSystem!
 * 
 *   Type:
 *   - What is the animation type you would like to play?
 *     - Attack
 *     - Guard
 *     - Item
 *     - Skill
 * 
 *     Slot (Attack Type):
 *     - Which weapon slot to get this data from?
 *     - Main-hand weapon is weapon slot 1.
 * 
 *     Item ID (Item Type):
 *     - Which item ID will the animation come from?
 * 
 *     Skill ID (Skill Type):
 *     - Which skill ID will the animation come from?
 * 
 *   Action-Selected Node?:
 *   - Use Action-Selected Node Coordinates if possible?
 *   - Requires "Empty" or "Any" for <Target: x Grid Node>
 *   - If the no action is in effect or the action doesn't use that target
 *     structure, use the node coordinates below:
 * 
 *     Unit:
 *     - Which unit's Node do you want to play an animation on?
 * 
 *     Rank:
 *     - Input the number representing the Rank of the Node you want to play an
 *       animation on.
 * 
 *     Flank:
 *     - Input the number representing the Flank of the Node you want to play
 *       an animation on.
 * 
 *   Offset X:
 *   - Offsets the animation x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the animation y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * GRID: Move Target(s) In Direction
 * - Moves target(s) in a specific direction to other Nodes.
 * - Requires VisuMZ_2_BattleGridSystem!
 * - This will bypass the "once per action" condition used for both the
 *   <rule Move User Node direction: x> & <rule Move Target Node direction: x>
 *   notetags as this is not a notetag effect.
 * 
 *   Targets:
 *   - Select unit(s) to move.
 * 
 *   Movement Type:
 *   - Select the Movement type rulings.
 *   - See VisuMZ_2_BattleGridSystem help file for details.
 * 
 *     Direction:
 *     - Select the movement direction.
 * 
 *     Distance:
 *     - The number of nodes to be moved.
 *     - You may use JavaScript code.
 * 
 *   Duration:
 *   - Input the number representing the frames used to move.
 * 
 *   Silent Change?:
 *   - Silent: Discreet changes shown. More apparent later.
 *   - Visual: Instant changes shown.
 * 
 * ---
 * 
 * GRID: Pull To Target Node
 * - Pulls battlers towards target node.
 * - Requires VisuMZ_2_BattleGridSystem!
 * 
 *   Action-Selected Node?:
 *   - Use Action-Selected Node Coordinates if possible?
 *   - Requires "Empty" or "Any" for <Target: x Grid Node>
 *
 *     Unit:
 *     - Which unit do you want to pull on?
 *
 *     Rank:
 *     - Input the number representing the Rank of the Node you want to
 *       pull to.
 *
 *     Flank:
 *     - Input the number representing the Flank of the Node you want to
 *       pull to.
 * 
 *   Strength:
 *   - Input the strength level of the pull.
 * 
 *   Duration:
 *   - Input the number representing the frames used to move.
 * 
 * ---
 * 
 * GRID: Push From Target Node
 * - Pushes battlers away from target node.
 * - Requires VisuMZ_2_BattleGridSystem!
 * 
 *   Action-Selected Node?:
 *   - Use Action-Selected Node Coordinates if possible?
 *   - Requires "Empty" or "Any" for <Target: x Grid Node>
 *
 *     Unit:
 *     - Which unit do you want to push from?
 *
 *     Rank:
 *     - Input the number representing the Rank of the Node you want to
 *       push from.
 *
 *     Flank:
 *     - Input the number representing the Flank of the Node you want to
 *       push from.
 * 
 *   Strength:
 *   - Input the strength level of the push.
 * 
 *   Duration:
 *   - Input the number representing the frames used to move.
 * 
 * ---
 *
 * GRID: Remove All Passive States from Node
 * - Removes all Passive State effects at target node.
 * - Requires VisuMZ_2_BattleGridSystem!
 * 
 *   Action-Selected Node?:
 *   - Use Action-Selected Node Coordinates if possible?
 *   - Requires "Empty" or "Any" for <Target: x Grid Node>
 *   - If the no action is in effect or the action doesn't use that target
 *     structure, use the node coordinates below:
 *
 *     Unit:
 *     - Which unit do you want to clear the Node for?
 *
 *     Rank:
 *     - Input the number representing the Rank of the Node you want to clear
 *       Passive States from.
 *
 *     Flank:
 *     - Input the number representing the Flank of the Node you want to clear
 *       Passive States from.
 *
 * ---
 *
 * GRID: Remove Passive State(s) from Node
 * - Remove Passive State(s) at target node.
 * - Requires VisuMZ_2_BattleGridSystem!
 *
 *   State ID(s):
 *   - Select which State ID(s) to remove as a Passive State.
 * 
 *   Action-Selected Node?:
 *   - Use Action-Selected Node Coordinates if possible?
 *   - Requires "Empty" or "Any" for <Target: x Grid Node>
 *   - If the no action is in effect or the action doesn't use that target
 *     structure, use the node coordinates below:
 *
 *     Unit:
 *     - Which unit do you want to remove the Passive State Node effect for?
 *
 *     Rank:
 *     - Input the number representing the Rank of the Node you want to remove
 *       a Passive State(s) from.
 *
 *     Flank:
 *     - Input the number representing the Flank of the Node you want to remove
 *       a Passive State(s) from.
 *
 * ---
 * 
 * GRID: Remove Trigger from Node
 * - Removes Trigger at target node.
 * - Requires VisuMZ_2_BattleGridSystem!
 * 
 *   Action-Selected Node?:
 *   - Use Action-Selected Node Coordinates if possible?
 *   - Requires "Empty" or "Any" for <Target: x Grid Node>
 *   - If the no action is in effect or the action doesn't use that target
 *     structure, use the node coordinates below:
 * 
 *     Unit:
 *     - Which unit do you want to clear Triggers for?
 * 
 *     Rank:
 *     - Input the number representing the Rank of the Node you want to clear
 *       Triggers from.
 * 
 *     Flank:
 *     - Input the number representing the Flank of the Node you want to clear
 *       Triggers from.
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
 * === Scene Plugin Commands ===
 * 
 * ---
 *
 * Scene: Open Grid Tactics Scene
 * - Opens the Grid Tactics menu.
 * - Cannot be used in battle.
 * - Requires Grid Tactics usage.
 * 
 * ---
 * 
 * === System Plugin Commands ===
 *
 * ---
 *
 * System: Enable Grid Tactics in Menu?
 * - Enables/disables Grid Tactics menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables Grid Tactics menu inside the main menu.
 *
 * ---
 *
 * System: Show Grid Tactics in Menu?
 * - Shows/hides Grid Tactics menu inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Grid Tactics menu inside the main menu.
 *
 * ---
 * 
 * === Temporary Tactical Formations Plugin Commands ===
 * 
 * Temporary formations are very specific formations that will overwrite what
 * settings the player has made. These involve specific rank/flank positions
 * per party member (though some can be automatic). With temporary formations
 * in play, the player cannot change them outside of battle. However, once in
 * battle, the positions can be changed through the movement command and/or
 * action effects.
 * 
 * When a temporary formation is present, menu and battle commands involving
 * changing party members will be disabled.
 * 
 * Once a temporary formation is disbanded, the player's self-made formation
 * settings will be returned and the player can readjust tactical formations
 * once more.
 * 
 * ---
 * 
 * Temp: Create Temporary Tactics (Normal)
 * - Creates a temporary tactical formation.
 * - Can't be used in battle.
 * 
 *   Temporary Tactics:
 *   - Adjust the tactical formation to be used temporarily.
 *   - 0 value = automatic placement.
 * 
 *   Starting Positions:
 * 
 *     Party Leader:
 *     2nd - 20th Member:
 * 
 *       Rank:
 *       - What is the starting rank for this party member?
 *       - Use 0 to let plugin determine starting position.
 * 
 *       Flank:
 *       - What is the starting flank for this party member?
 *       - Use 0 to let plugin determine starting position.
 * 
 * ---
 * 
 * Temp: Create Temporary Tactics (JS)
 * - Creates a temporary tactical formation with JavaScript.
 * - Can't be used in battle.
 * 
 *   JS: Tactics:
 *   - Use JavaScript to determine tactical formation is used.
 *   - 0 value = automatic placement.
 * 
 * ---
 * 
 * Temp: Disband Temporary Tactics
 * - Clears temporary tactical formations.
 * - Can't be used in battle.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for this plugin including some mechanics.
 *
 * ---
 *
 * Defaults
 * 
 *   Default Grid?:
 *   - Are battles grid-battles by default?
 *   - Use <Grid> and <No Grid> in troop names otherwise.
 * 
 *   Movement Duration:
 *   - Default number of frames for movement duration.
 * 
 *     User Silent Move?:
 *     - Default setting for silent movement versus visual.
 *     - Applies only to user movement notetag.
 * 
 *     Target Silent Move?:
 *     - Default setting for silent movement versus visual.
 *     - Applies only to target movement notetag.
 * 
 *   Weapon Range Melee?:
 *   - Make weapon ranges melee by default?
 *   - Only affects actions with <Use Weapon Range> notetag.
 *
 * ---
 *
 * Crashing
 * 
 *   Allow Crash Death?:
 *   - Can battlers die from crashing into one another?
 * 
 *   Damage Move Target?:
 *   - Cause damage to the target that's being moved?
 * 
 *     Animation ID:
 *     - Play this animation when the effect activates.
 *     - Use 0 to not play an animation.
 * 
 *   Damage Crash Target?:
 *   - Cause damage to the target that's moved into?
 * 
 *     Animation ID:
 *     - Play this animation when the effect activates.
 *     - Use 0 to not play an animation.
 * 
 *   JS: Crash DMG Formula:
 *   - Formula used for calculating Crash Damage.
 *
 * ---
 *
 * Switching Nodes
 * 
 *   Can Dead Switch?:
 *   - Can battlers switch Node positions with dead units?
 * 
 * ---
 * 
 * Triggers
 * 
 *   Show Popup?:
 *   - Show popups when a battler activates a Trigger?
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
 * Plugin Parameters: Grid Field Settings
 * ============================================================================
 *
 * Settings used for the overall grid field.
 *
 * ---
 *
 * Size
 * 
 *   Max Ranks:
 *   - How many ranks are used for each team?
 *   - Max: 10.
 *   - Ranks are formation rows or columns visually.
 * 
 *   Max Flanks:
 *   - How many flanks are used for each team?
 *   - Max: 10.
 *   - Ranks are formation sides/wings or rows visually.
 * 
 * ---
 * 
 * Field Appearance
 * 
 *   Max Horz Distance:
 *   - What is the maximum horizontal distance that the grid field spans across
 *     the screen?
 *   - Auto-shrinks if too big.
 * 
 *   Top/Bottom Delta:
 *   - What is the horizontal size difference from top to bottom of the field.
 *   - This adds perspective.
 * 
 *   Vertical Distance:
 *   - What is the vertical distance that the grid field spans across the
 *     screen from top to bottom?
 * 
 *   Perspective Modifier:
 *   - What is the perspective modifier? This is so that upper point distances
 *     shrink and lower point distances expand.
 * 
 *   Space Between:
 *   - How many nodes between each unit's front rank?
 *   - The space gives more room for movement animations.
 * 
 * ---
 * 
 * Effects
 * 
 *   Blink Input User?:
 *   - Blink the input user for more clarity?
 * 
 *   Blink Color:
 *   - Adjust the blinking input color.
 *   - Format: [red, green, blue, alpha]
 * 
 * ---
 * 
 * Offsets
 * 
 *   Grid Node Offsets:
 * 
 *     Offset X:
 *     - Offsets the node x position.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offsets the node y position.
 *     - Negative: up. Positive: down.
 * 
 *   Actor Sprite Offset:
 * 
 *     Offset X:
 *     - Offsets the actor x position.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offsets the actor y position.
 *     - Negative: up. Positive: down.
 * 
 *   Enemy Sprite Offset:
 * 
 *     Offset X:
 *     - Offsets the enemy x position.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offsets the enemy y position.
 *     - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Outline Filter
 * 
 *   Show Outline Filter?:
 *   - Show outline filter for nodes?
 *   - Requires Pixi JS Filters.
 * 
 *   Inner Color:
 *   - System hex code color for inner color.
 *   - Format: 0xRRGGBB
 *   - Requires Pixi JS Filters.
 * 
 *   Inner Thickness:
 *   - What thickness do you want for inner outline?
 *   - Requires Pixi JS Filters.
 * 
 *   Outer Color:
 *   - System hex code color for outer color.
 *   - Format: 0xRRGGBB
 *   - Requires Pixi JS Filters.
 * 
 *   Outer Thickness:
 *   - What thickness do you want for outer outline?
 *   - Requires Pixi JS Filters.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Grid Node Settings
 * ============================================================================
 *
 * Settings used for specific grid Nodes.
 *
 * ---
 *
 * Actor Nodes
 * 
 *   Filename:
 *   - Filename used for the actor Node image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Generated Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *     Generated Opacity:
 *     - What is the opacity level of the generated actor node?
 * 
 *   Differ Blend Color:
 *   - Blend color used when differentiating nodes.
 *   - Format: [red, green, blue, alpha]
 *
 * ---
 *
 * Enemy Nodes
 * 
 *   Filename:
 *   - Filename used for the enemy Node image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Generated Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *     Generated Opacity:
 *     - What is the opacity level of the generated enemy node?
 * 
 *   Differ Blend Color:
 *   - Blend color used when differentiating nodes.
 *   - Format: [red, green, blue, alpha]
 * 
 * ---
 * 
 * Opacity
 * 
 *   Opacity Speed:
 *   - Speed at which the opacity changes.
 * 
 *   Disabled Opacity:
 *   - Opacity level for disabled nodes.
 * 
 * ---
 * 
 * Scale
 * 
 *   Scale X:
 *   - Scale X value for the node.
 * 
 *   Scale Y:
 *   - Scale Y value for the node.
 * 
 * ---
 * 
 * Visibility
 * 
 *   Active Blend Color:
 *   - Blend color used by active battler.
 *   - Format: [red, green, blue, alpha]
 * 
 *   Global:
 * 
 *     Always Visible?:
 *     - Always make all grid Nodes visible?
 * 
 *     Any Input?:
 *     - Make all grid Nodes during input phase?
 * 
 *     Targeting?:
 *     - Make all grid Nodes during targeting?
 * 
 *   Specific:
 * 
 *     Inputting Actor?:
 *     - Make inputting actor's grid Node visible?
 * 
 *     Selected Target?:
 *     - Make selected target's grid Node visible?
 * 
 *     Active Battler?:
 *     - Make active battler/subject's grid Node visible?
 * 
 *     Action Target?:
 *     - Make action target's grid Node visible?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Passive State Settings
 * ============================================================================
 *
 * Settings used for Passive State Nodes.
 *
 * ---
 *
 * Properties
 * 
 *   Show Passive Icons?:
 *   - Show the icons of the passive states attached to a Node?
 * 
 *   Cycle Duration:
 *   - How many frames should each icon cycle take?
 * 
 *   Blend Mode:
 *   - The blend mode used for these icons.
 * 
 * ---
 * 
 * Opacity
 * 
 *   Opacity Speed:
 *   - Speed at which the opacity changes.
 * 
 *   Fluctuation Maximum:
 *   - Maximum opacity value for fluctuation effect.
 * 
 *   Fluctuation Range:
 *   - Fluctuation range of the opacity effect.
 * 
 *   Fluctuation Rate:
 *   - Fluctuation rate of the opacity effect.
 *
 * ---
 * 
 * Position
 * 
 *   Offset X:
 *   - Offsets the passive icon's x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the passive icon's y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Scale
 * 
 *   Scale X:
 *   - Scale X value for the icon.
 * 
 *   Scale Y:
 *   - Scale Y value for the icon.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Trigger Settings
 * ============================================================================
 *
 * Settings used for Trigger Nodes.
 *
 * ---
 *
 * Properties
 * 
 *   Show Trigger Icons?:
 *   - Show the icons of the trigger actions attached to a Node?
 * 
 *   Blend Mode:
 *   - The blend mode used for these icons.
 * 
 * ---
 * 
 * Opacity
 * 
 *   Opacity Speed:
 *   - Speed at which the opacity changes.
 * 
 *   Fluctuation Maximum:
 *   - Maximum opacity value for fluctuation effect.
 * 
 *   Fluctuation Range:
 *   - Fluctuation range of the opacity effect.
 * 
 *   Fluctuation Rate:
 *   - Fluctuation rate of the opacity effect.
 *
 * ---
 * 
 * Position
 * 
 *   Offset X:
 *   - Offsets the trigger icon's x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the trigger icon's y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Scale
 * 
 *   Scale X:
 *   - Scale X value for the icon.
 * 
 *   Scale Y:
 *   - Scale Y value for the icon.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Compatibility Settings
 * ============================================================================
 *
 * Settings used for the Move Command found in Window_ActorCommand. This has
 * both aesthetic and mechanical settings.
 *
 * ---
 * 
 * Items & Equips Core
 * 
 *   Shop Status Window:
 *   - Show grid node target and casting data in Shop Status Window?
 * 
 *   Range: Target Node:
 *   - Text used to label target nodes.
 * 
 *   Range: Cast Node:
 *   - Text used to label cast nodes.
 * 
 *   Scope: Any Node:
 *   Scope: Empty Node:
 *   Scope: Actor Node:
 *   Scope: Enemy Node:
 *   - Text used to label node scopes.
 * 
 * ---
 * 
 * Battle System - BTB
 * 
 *   Bypass Require Node?:
 *   - During input and under "Brave" effect, ignore rank/flank node
 *     requirements for skills/items?
 * 
 * ---
 * 
 * Party System
 * 
 *   Removal Shortcut?:
 *   - Add member removal shortcut for Extended Tactics scene?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Move Command Settings
 * ============================================================================
 *
 * Settings used for the Move Command found in Window_ActorCommand. This has
 * both aesthetic and mechanical settings.
 *
 * ---
 *
 * General
 * 
 *   Auto Add "Move"?:
 *   - Automatically add the "Move" command to the actor command window list?
 * 
 *   Show "Move" Command?:
 *   - Show the "Move" command in the actor command window list?
 * 
 *     Command Icon:
 *     - Icon used for the "Move" command.
 * 
 *     Command Name:
 *     - Text used for the "Move" command.
 * 
 *     Queue Text:
 *     - Used with Active ATB/TPB to display movement queue.
 * 
 *     Command Queue:
 *     - How many turns must the actor wait before moving again?
 *     - If cooldown is 0, move range becomes global.
 * 
 *     Grid Switch on Move?:
 *     - Can actors switch Nodes when using the Move Command?
 * 
 *     Pass Turn on Move?:
 *     - Makes the actor pass the current turn if the Move Command is used?
 * 
 *   Battler Opacity Rate:
 *   - What opacity rate should battlers be adjusted by when the player has to
 *     select a Grid Node
 *
 * ---
 *
 * Cursor
 * 
 *   Enabled:
 * 
 *     Blend Mode:
 *     - The blend mode used for an enabled cursor.
 * 
 *     Tone Color:
 *     - Adjust the tone color of an enabled cursor.
 *     - Format: [red, green, blue, gray]
 * 
 *     Opacity:
 *     - What opacity level should the enabled cursor use?
 * 
 *   Disabled:
 * 
 *     Blend Mode:
 *     - The blend mode used for an disabled cursor.
 * 
 *     Tone Color:
 *     - Adjust the tone color of an disabled cursor.
 *     - Format: [red, green, blue, gray]
 * 
 *     Opacity:
 *     - What opacity level should the disabled cursor use?
 * 
 * ---
 * 
 * Default Move Range
 * 
 *   Global Range?:
 *   - Give actors a global movement range by default?
 * 
 *   Disable Range?:
 *   - Disable actor movement ranges by default?
 * 
 *   Allowed:
 * 
 *     Square:
 *     Radius:
 *     Rank:
 *     Flank:
 *     Diagonal Forward:
 *     Diagonal Backward:
 *     Forward:
 *     Backward:
 *     Upward:
 *     Downward:
 *     - What setting distance is allowed by default?
 * 
 *   Not Allowed:
 * 
 *     Square:
 *     Radius:
 *     Rank:
 *     Flank:
 *     Diagonal Forward:
 *     Diagonal Backward:
 *     Forward:
 *     Backward:
 *     Upward:
 *     Downward:
 *     - What setting distance is disallowed by default?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * These settings let you adjust the sound effects used for this plugin.
 *
 * ---
 *
 * Move Command
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
 * Plugin Parameters: Tactics Scene Settings
 * ============================================================================
 *
 * These settings adjust the Battle Grid Tactics Scene. This is an entirely
 * optional feature that does not need to be a part of your game. If you want
 * it, make sure the "Use Tactics System?" parameter is set to "true". If not,
 * set it to "false".
 * 
 * The Extended Tactics scene option allows you to extend the functionality
 * of the tactics scene beyond just repositioning actors on the grid. If the
 * Extended Tactics option is enabled, the plugin then allows players to manage
 * their skills, equipment, and view their status, amongst many other functions
 * within the Tactics scene itself. Also depending on which plugins are
 * installed, the Extended Tactics scene will also allow changing classes,
 * adding and removing party members, and overall quicker access to individual
 * character submenus.
 *
 * ---
 *
 * Mechanics Settings
 * 
 *   Use Tactics System?:
 *   - Use the battle tactics system?
 *   - If not, actor positions are determined by notetags and algorithms.
 * 
 *   Extended System?:
 *   - Use extended scene? Extended scene allows for more actor management
 *     instead of just positioning actors pre-battle.
 * 
 * ---
 * 
 * Main Menu
 * 
 *   Command Name:
 *   - Name of the 'Battle Tactics' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'Battle Tactics' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'Battle Tactics' option to the Main Menu by default?
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
 * Starting Positions
 * 
 *   1st through 20th Member:
 *   - Adjust the settings individually for each party member.
 * 
 *     Rank:
 *     - What is the starting rank for this party member?
 *     - Use 0 to let plugin determine starting position.
 * 
 *     Flank:
 *     - What is the starting flank for this party member?
 *     - Use 0 to let plugin determine starting position.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * These settings let you adjust the window settings for this plugin.
 *
 * ---
 *
 * Action Display
 * 
 *   Adjust Pixel Radius:
 *   - Adjust the pixel size of each node radius by this much.
 * 
 *   Draw Usable Nodes?:
 *   - Draws the nodes that the user can perform an action on.
 *   - This is for general windows.
 * 
 *     Usable Color:
 *     Not Usable Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   Draw Target Nodes?:
 *   - Draws the nodes that the user can target with the action.
 *   - This is for general windows.
 * 
 *     Ally Color:
 *     Enemy Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 *
 * ---
 * 
 * Window_SkillList
 * 
 * Window_ItemList
 * 
 * Window_ActorCommand
 * 
 *   Draw Usable Nodes?:
 *   - Draws the nodes that the user can perform an action on.
 *   - This is for those windows.
 * 
 *   Draw Target Nodes?:
 *   - Draws the nodes that the user can target with the action.
 *   - This is for those windows.
 * 
 * ---
 * 
 * Tactics Help Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Help: Select Actor:
 *   - Help description to tell player to select an actor.
 * 
 *   Help: Select Node:
 *   - Help description to tell player to select a node.
 * 
 *   Help: Select Node Ext:
 *   - Extended help description to tell player to select a node.
 * 
 *   Help: Required Actor:
 *   - Extended help saying which actor is required in party.
 *   - %1 - Party Member's Name
 * 
 * ---
 * 
 * Tactics Grid Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Graphic Type:
 *   - Choose how the actor graphics appear in tactics menu.
 *     - None
 *     - Face
 *     - Map Sprite
 *     - Sideview Battler
 * 
 *   Switching:
 * 
 *     Switching BG Color 1:
 *     Switching BG Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Switching Text Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   Party Leader:
 *   - Text used for the tactics banner for the party leader.
 *   - Do not use Text Codes.
 * 
 *     Leader Text Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   Party Member:
 *   - Text used for the tactics banner for party member.
 *   - %1 - Party Member Slot ID.
 *   - Do not use Text Codes.
 * 
 *     Member Text Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   Empty Node:
 *   - Text used for the tactics banner for empty node.
 *   - Do not use Text Codes.
 * 
 *     Empty Text Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   JS: X, Y, W, H: 
 *   - Code used to determine the dimensions for this window.
 * 
 *   JS: Draw Empty Node:
 *   - Code used to draw the contents of an empty node.
 * 
 *   JS: Draw Actor Node:
 *   - Code used to draw the contents of a node with an actor.
 * 
 * ---
 * 
 * Tactics Command Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Window Width:
 *   - Width of the Tactics Command Window.
 * 
 *   Command Order:
 *   - The order in which tactics commands appear.
 * 
 *   Command Settings:
 * 
 *     Move:
 *     Party Leader:
 *     Skill:
 *     Equips:
 *     Status:
 *     Class Change:
 *     Swap Member:
 *     Add Member:
 *     Remove Member:
 * 
 *       Command Name:
 *       - Determines how this command appears in-game.
 *       - You may use text codes.
 * 
 *       Help Description:
 *       - Help description used when this command is selected.
 * 
 *       Show Command?:
 *       - Show this command in the Tactics Command Window?
 *       - Some commands may require other plugins.
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
 * Version 1.06: August 29, 2024
 * * Bug Fixes!
 * ** Fixed a bug where for FTB, ETB, and PTB, movement would always count as
 *    passing a turn regardless of Plugin Parameter settings.
 * ** Fixed a bug where adding a battler mid-battle would cause a crash.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** New section added to "Major Changes":
 * *** Temporary formations are very specific formations that will overwrite
 *     what settings the player has made. These involve specific rank/flank
 *     positions per party member (though some can be automatic). With
 *     temporary formations in play, the player cannot change them outside of
 *     battle. However, once in battle, the positions can be changed through
 *     the movement command and/or action effects.
 * *** When a temporary formation is present, menu and battle commands
 *     involving changing party members will be disabled.
 * *** Once a temporary formation is disbanded, the player's self-made
 *     formation settings will be returned and the player can readjust tactical
 *     formations once more.
 * * New Features!
 * ** New Plugin Commands added by Olivia:
 * *** Temp: Create Temporary Tactics (Normal)
 * **** Creates a temporary tactical formation.
 * *** Temp: Create Temporary Tactics (JS)
 * **** Creates a temporary tactical formation with JavaScript.
 * *** Temp: Disband Temporary Tactics
 * **** Clears temporary tactical formations.
 * 
 * Version 1.05: July 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where actors sharing the same name would cause clashes in how
 *    they select same rank/flank targets. Fix made by Olivia.
 * ** Fixed a bug where weapon ranges for same rank/flank would cause crashes
 *    at the start of battle. Fix made by Olivia.
 * ** Fixed bugs with AOE targeting for 'Upward', 'Downward', 'Forward',
 *    'Backward', 'Diagonal Forward', and 'Diagonal Backward' being inverted.
 *    Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Fixed a documentation bug where there is a 'Can' effect for self movement
 *    examples that actually doesn't exist.
 * * New Features!
 * ** New notetags added by Olivia:
 * *** <Crash Self Damage Rate: x%>
 * *** <Crash Target Damage Rate: x%>
 * **** Alters the crash damage received by a percentile rate. Self refers to
 *      the moved enemy. Target refers to the enemy crashed into.
 * **** Example Usage: Rubber enemies have lower crash self damage.
 * **** Example Usage: Fluffy enemies have lower crash target damage.
 * *** <Crash Self Damage Bonus: +x>
 * *** <Crash Self Damage Bonus: -x>
 * *** <Crash Target Damage Bonus: +x>
 * *** <Crash Target Damage Bonus: -x>
 * **** Alters the crash damage received by a flat bonus amount. Self refers to
 *      the moved enemy. Target refers to the enemy crashed into.
 * **** Example Usage: Brittle enemies have higher flat bonus target damage.
 * **** Example Usage: Thorny enemies have higher flat bonus target damage.
 * 
 * Version 1.04: June 13, 2024
 * * Bug Fixes!
 * ** Crash targets can no longer crash into themselves. Fix made by Olivia.
 * ** Fixed a bug where AoE ranges did not accept the target located in the
 *    "center" of an AoE spread. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia:
 * *** Parameters > Passive State Settings > Position > Offset X/Y:
 * **** Adjusts passive icon's X/Y position.
 * *** Parameters > Trigger Settings > Position > Offset X/Y:
 * **** Adjusts trigger icon's X/Y position.
 * ** Extended Tactics Scene:
 * *** The Extended Tactics scene option allows you to extend the functionality
 *     of the tactics scene beyond just repositioning actors on the grid. If
 *     the Extended Tactics option is enabled, the plugin then allows players
 *     to manage their skills, equipment, and view their status, amongst many
 *     other functions within the Tactics scene itself. Also depending on which
 *     plugins are installed, the Extended Tactics scene will also allow
 *     changing classes, adding and removing party members, and overall quicker
 *     access to individual character submenus.
 * *** With this extended scene comes a lot more new plugin parameters:
 * **** Parameters > Tactics Scene Settings > Extended System?
 * **** Parameters > Compatibility Settings > Party System > Removal Shortcut
 * **** Parameters > Window Settings > Help Window > Help: Select Node Ext
 * **** Parameters > Window Settings > Help Window > Help: Required Actor
 * **** Parameters > Window Settings > Tactics Command Window > Many Settings
 * ***** Refer to the help file for more information.
 * 
 * Version 1.03: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where <Area of Effect> notetags stopped working with regular
 *    selection skills.
 * ** Fixed an incompatibility bug with Core Engine's screen repositioning
 *    messing up the grid positioning of enemies. This effect will now be
 *    disabled when using the battle grid system. Fix made by Irina.
 * ** Fixed a bug where an enemy moving to a node that is previously occupied
 *    by a dead enemy could no longer by mouse-clicked on. Fix made by Olivia.
 * ** Fixed a bug where distance between resolution UI and resolution size
 *    did not visually match for moving mode. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Action Sequences that target specific nodes for animations can now work
 *    with skills and items that target ranks and flanks. Update by Olivia.
 * ** Added gap reduction for skills without visible grids. Update by Irina.
 * ** Better enemy selection control with keyboard. Update by Olivia.
 * ** Items and skills with the "Never" occassion won't show the target/range
 *    information in the Window_ShopStatus window anymore. Passives won't show
 *    target/range information either. Update by Irina.
 * ** Help Window remains open when selecting a node, rank, or flank in order
 *    to remain consistent with selecting enemies and allies. Update by Olivia.
 * ** In Battle Test mode, tactics positions are not used and instead, will use
 *    any starting rank/flank settings.
 * ** When node triggers occur at the end of an action, the battle system will
 *    now wait for any node trigger animations to complete before continuing.
 * * New Features!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > Compatibility > Items & Equips Core
 * **** Shop Status Window
 * ***** Show scope, grid node target and casting data in Shop Status Window?
 * **** Scope: Actor Node
 * **** Scope: Enemy Node
 * ***** Vocabulary text used for these new Plugin Parameters.
 * 
 * Version 1.02: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where nodes without triggers would have a faint line around
 *    them. Fix made by Olivia.
 * ** Fixed a bug where displaying healing skills outside the battle scene
 *    would cause the game to freeze up. Fix made by Olivia.
 * ** Fixed a bug where starting rank/flanks would not register properly. Fix
 *    made by Olivia.
 * ** Fixed a bug where certain weapon range notetags would cause some enemies
 *    to not act properly. Fix made by Olivia.
 * ** Fixed a bug where "Damage Crash Target?" was not working properly. Fix
 *    made by Olivia.
 * ** Fixed a bug where area of effect notetags did not work properly. Fix made
 *    by Olivia.
 * ** Fixed a bug where a crash would occur if a passive state was applied to
 *    an enemy node. Fix made by Olivia.
 * ** Fixed a bug where the "Move" command name cannot be changed.
 * ** Fixed a bug where <JS Targets> notetag causes a crash. Fix by Olivia.
 * ** Fixed a bug where self movement would suddenly stop visually animating.
 *    Fix made by Olivia.
 * ** Fixed a bug where enemies using grid rank and flank targeting would hit
 *    their own allies instead. Fix made by Olivia.
 * * Compatibility Update!
 * ** Fixed a compatibility update with ETB and PTB causing movement to not
 *    work properly. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Fixed some example notetags that weren't working.
 * ** Added extra note to <Add Trigger to Target Node> that it does not affect
 *    nodes with any battlers on it and only works on empty nodes.
 * * Feature Update!
 * ** Items and skills with the "Never" usability occassion type will not show
 *    any grid ranges.
 * ** Items and skills with target any or empty nodes are now able to be
 *    affected by area of effects.
 * * New Features!
 * ** New Notetag added by Irina:
 * *** <Hide Grid Range>
 * **** Hides the grid target and usability ranges for this item/skill.
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > Compatibility > Items & Equips Core
 * **** Shop Status Window
 * ***** Show scope, grid node target and casting data in Shop Status Window?
 * **** Range: Target Node
 * **** Range: Cast Node
 * **** Scope: Any Node
 * **** Scope: Empty Node
 * ***** Vocabulary text used for these new Plugin Parameters.
 * 
 * Version 1.01: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug that required the State Tooltips plugin and if it wasn't
 *    present, would cause a crash upon using mouse controls. Fix by Irina.
 * ** Fixed a bug where the add trigger to node action sequence did not work
 *    properly. Fix made by Olivia.
 * * Feature Update!
 * ** Movement actor sprite now reflects the actor's offset X and Y settings
 *    found in the Battle Core. Update made by Irina.
 *
 * Version 1.00 Official Release Date: March 29, 2024
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Scene
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SceneOpenGridTacticsScene
 * @text Scene: Open Grid Tactics Scene
 * @desc Opens the Grid Tactics menu.
 * Cannot be used in battle. Requires Grid Tactics usage.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableGridTacticsMenu
 * @text System: Enable Grid Tactics in Menu?
 * @desc Enables/disables Grid Tactics menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables Grid Tactics menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowGridTacticsMenu
 * @text System: Show Grid Tactics in Menu?
 * @desc Shows/hides Grid Tactics menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Grid Tactics menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Temp
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TempCreateTacticsNormal
 * @text Temp: Create Temporary Tactics (Normal)
 * @desc Creates a temporary tactical formation.
 * Can't be used in battle.
 *
 * @arg Tactics:struct
 * @text Temporary Tactics
 * @type struct<TempTactics>
 * @desc Adjust the tactical formation to be used temporarily.
 * 0 value = automatic placement.
 * @default {"Positions":"","PartyIndex0":"","PartyIndex0_Rank:num":"0","PartyIndex0_Flank:num":"0","PartyIndex1":"","PartyIndex1_Rank:num":"0","PartyIndex1_Flank:num":"0","PartyIndex2":"","PartyIndex2_Rank:num":"0","PartyIndex2_Flank:num":"0","PartyIndex3":"","PartyIndex3_Rank:num":"0","PartyIndex3_Flank:num":"0","PartyIndex4":"","PartyIndex4_Rank:num":"0","PartyIndex4_Flank:num":"0","PartyIndex5":"","PartyIndex5_Rank:num":"0","PartyIndex5_Flank:num":"0","PartyIndex6":"","PartyIndex6_Rank:num":"0","PartyIndex6_Flank:num":"0","PartyIndex7":"","PartyIndex7_Rank:num":"0","PartyIndex7_Flank:num":"0","PartyIndex8":"","PartyIndex8_Rank:num":"0","PartyIndex8_Flank:num":"0","PartyIndex9":"","PartyIndex9_Rank:num":"0","PartyIndex9_Flank:num":"0","PartyIndex10":"","PartyIndex10_Rank:num":"0","PartyIndex10_Flank:num":"0","PartyIndex11":"","PartyIndex11_Rank:num":"0","PartyIndex11_Flank:num":"0","PartyIndex12":"","PartyIndex12_Rank:num":"0","PartyIndex12_Flank:num":"0","PartyIndex13":"","PartyIndex13_Rank:num":"0","PartyIndex13_Flank:num":"0","PartyIndex14":"","PartyIndex14_Rank:num":"0","PartyIndex14_Flank:num":"0","PartyIndex15":"","PartyIndex15_Rank:num":"0","PartyIndex15_Flank:num":"0","PartyIndex16":"","PartyIndex16_Rank:num":"0","PartyIndex16_Flank:num":"0","PartyIndex17":"","PartyIndex17_Rank:num":"0","PartyIndex17_Flank:num":"0","PartyIndex18":"","PartyIndex18_Rank:num":"0","PartyIndex18_Flank:num":"0","PartyIndex19":"","PartyIndex19_Rank:num":"0","PartyIndex19_Flank:num":"0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TempCreateTacticsJS
 * @text Temp: Create Temporary Tactics (JS)
 * @desc Creates a temporary tactical formation with JavaScript.
 * Can't be used in battle.
 *
 * @arg TacticsJS:func
 * @text JS: Tactics
 * @type note
 * @desc Use JavaScript to determine tactical formation is used.
 * 0 value = automatic placement.
 * @default "// Declare Constants\nconst tactics = [];\n\n// Add Formations\ntactics[0] = {\n    rank: 0,\n    flank: 0,\n};\ntactics[1] = {\n    rank: 0,\n    flank: 0,\n};\ntactics[2] = {\n    rank: 0,\n    flank: 0,\n};\ntactics[3] = {\n    rank: 0,\n    flank: 0,\n};\n\n// Return Tactics\nreturn tactics;"
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TempDisbandTactics
 * @text Temp: Disband Temporary Tactics
 * @desc Clears temporary tactical formations.
 * Can't be used in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
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
 * @param BattleGridSystem
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
 * @desc General settings for this plugin including some mechanics.
 * @default {"Defaults":"","DefaultGrid:eval":"true","moveDuration:num":"12","userSilentMove:eval":"true","targetSilentMove:eval":"false","defaultWpnRangeMelee:eval":"true","Crashing":"","crashAllowDeath:eval":"true","actionTargetCrashDamage:eval":"true","actionTargetAnimation:num":"0","crashTargetCrashDamage:eval":"true","crashTargetAnimation:num":"2","crashDamageFormulaJS:func":"\"// Declare Constants\\nconst user = arguments[0];\\nconst target = arguments[1];\\nconst crasher = target;\\nconst a = this;\\nconst b = target;\\n\\n// Calculate Base Damage\\nlet damage = (crasher.def * 0.50);\\ndamage -= (user.def * 0.25);\\n\\n// Calculate Variance\\nconst variance = 20;\\nconst amp = Math.floor(Math.max((Math.abs(damage) * variance) / 100, 0));\\nconst v = Math.randomInt(amp + 1) + Math.randomInt(amp + 1) - amp;\\n\\n// Return Damage\\nreturn damage >= 0 ? damage + v : damage - v;\"","Switching":"","canDeadGridSwitch:eval":"true","Triggers":"","triggerPopupShowText:eval":"true","triggerPopupTextColor:str":"0","triggerPopupFlashColor:eval":"[255, 0, 0, 160]","triggerPopupFlashDuration:num":"120"}
 *
 * @param GridField:struct
 * @text Grid Field Settings
 * @type struct<GridField>
 * @desc Settings used for the overall grid field.
 * @default {"Size":"","Ranks:num":"4","Flanks:num":"3","Appearance":"","maxDistanceX:num":"1024","differenceX:num":"192","distanceY:num":"160","weightMod:num":"1.20","spaceBetween:num":"1","Effects":"","blinkInputUser:eval":"true","blinkInputColor:eval":"[16, 255, 255, 64]","Offsets":"","nodeOffsets":"","nodeOffsetX:num":"+0","nodeOffsetY:num":"+24","ActorOffsets":"","actorOffsetX:num":"+0","actorOffsetY:num":"+2","EnemyOffsets":"","enemyOffsetX:num":"+0","enemyOffsetY:num":"+4","OutlineFilter":"","showOutlineFilter:eval":"true","outlineInnerColor:eval":"0x000000","outlineInnerThick:num":"1.5","outlineOuterColor:eval":"0xffffff","outlineOuterThick:num":"1.5"}
 *
 * @param Node:struct
 * @text Grid Node Settings
 * @parent GridField:struct
 * @type struct<Node>
 * @desc Settings used for specific grid Nodes.
 * @default {"ActorNode":"","actorNodeFilename:str":"","actorTextColor:str":"#0088ff","actorOpacity:num":"192","actorDifferBlendColor:eval":"[160, 255, 160, 192]","EnemyNode":"","enemyNodeFilename:str":"","enemyTextColor:str":"#ff0000","enemyOpacity:num":"192","enemyDifferBlendColor:eval":"[255, 255, 0, 192]","Opacity":"","opacitySpeed:num":"16","disabledOpacity:num":"160","Scale":"","scaleX:num":"0.60","scaleY:num":"0.20","Visibility":"","selectedBlendColor:eval":"[255, 255, 255, 160]","Global":"","visibleAlways:eval":"false","visibleAnyInput:eval":"false","visibleTargeting:eval":"false","Specific":"","visibleActorInput:eval":"true","visibleSelected:eval":"true","visibleActive:eval":"false","visibleTargeted:eval":"true"}
 *
 * @param PassiveState:struct
 * @text Passive State Settings
 * @parent GridField:struct
 * @type struct<PassiveState>
 * @desc Settings used for Passive State Nodes.
 * @default {"Properties":"","showNodeIcons:eval":"true","aniFrameCount:num":"40","blendMode:num":"1","Opacity":"","opacitySpeed:num":"16","opacityFlucMax:num":"192","opacityFlucRange:num":"128","opacityFlucRate:num":"0.05","Scale":"","scaleX:num":"1.00","scaleY:num":"0.50"}
 *
 * @param Trigger:struct
 * @text Trigger Settings
 * @parent GridField:struct
 * @type struct<Trigger>
 * @desc Settings used for Trigger Nodes.
 * @default {"Properties":"","showNodeIcons:eval":"true","blendMode:num":"1","Opacity":"","opacitySpeed:num":"16","opacityFlucMax:num":"192","opacityFlucRange:num":"128","opacityFlucRate:num":"0.05","Scale":"","scaleX:num":"2.00","scaleY:num":"0.75"}
 *
 * @param Compatibility:struct
 * @text Compatibility Settings
 * @type struct<Compatibility>
 * @desc Settings used to compatibility rulings when used with other battle systems.
 * @default {"VisuMZ_1_ItemsEquipsCore":"","shopStatusShowData:eval":"true","TargetNodeVocab:str":"Range","CastNodeVocab:str":"From","ScopeAnyNodeVocab:str":"Any Node","ScopeEmptyNodeVocab:str":"Empty Node","ScopeActorNodeVocab:str":"Actor Node","ScopeEnemyNodeVocab:str":"Enemy Node","VisuMZ_2_BattleSystemBTB":"","btbBraveBypassRankFlank:eval":"true","VisuMZ_2_PartySystem":"","partySystemRemoveShortcut:eval":"true"}
 *
 * @param MoveCommand:struct
 * @text Move Command Settings
 * @type struct<MoveCommand>
 * @desc Settings used for the Move Command found in Window_ActorCommand.
 * @default {"General":"","autoAddMoveCmd:eval":"true","showMoveCommand:eval":"true","MoveCmdIcon:num":"82","MoveCommandName:str":"Move","MoveHelpText:json":"\"Moves user to a different node.\"","MoveQueueText:str":"Move command is queued after action is complete.","moveCommandCooldown:num":"1","canGridSwitchOnMove:eval":"true","moveCommandPassTurn:eval":"false","activeWindowBattlerOpacityRate:num":"0.40","Cursor":"","CursorEnabled":"","CursorEnabledBlendMode:num":"0","CursorEnabledToneColor:eval":"[16, 255, 16, 0]","CursorEnabledOpacity:num":"192","CursorDisabled":"","CursorDisabledBlendMode:num":"0","CursorDisabledToneColor:eval":"[255, 16, 16, 0]","CursorDisabledOpacity:num":"192","MoveRange":"","defaultAllRange:eval":"false","defaultNoneRange:eval":"false","Allowed":"","allowSquare:num":"1","allowRadius:num":"0","allowRank:num":"0","allowFlank:num":"0","allowDiaForward:num":"0","allowDiaBackward:num":"0","allowForward:num":"0","allowBackward:num":"0","allowUpward:num":"0","allowDownward:num":"0","Not":"","notSquare:num":"0","notRadius:num":"0","notRank:num":"0","notFlank:num":"0","notDiaForward:num":"0","notDiaBackward:num":"0","notForward:num":"0","notBackward:num":"0","notUpward:num":"0","notDownward:num":"0"}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @type struct<Sound>
 * @desc These settings let you adjust the sound effects used for this plugin.
 * @default {"MoveCommand":"","moveCommand_name:str":"Move10","moveCommand_volume:num":"90","moveCommand_pitch:num":"150","moveCommand_pan:num":"0"}
 *
 * @param Tactics:struct
 * @text Tactics Scene Settings
 * @type struct<Tactics>
 * @desc Adjust the settings used for the Battle Grid Tactics scene here.
 * @default {"Mechanics":"","UseTactics:eval":"true","Extended:eval":"true","MainMenu":"","MenuName:str":"Tactics","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true","Background":"","SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":"","Positions":"","PartyIndex0":"","PartyIndex0_Rank:num":"0","PartyIndex0_Flank:num":"0","PartyIndex1":"","PartyIndex1_Rank:num":"0","PartyIndex1_Flank:num":"0","PartyIndex2":"","PartyIndex2_Rank:num":"0","PartyIndex2_Flank:num":"0","PartyIndex3":"","PartyIndex3_Rank:num":"0","PartyIndex3_Flank:num":"0","PartyIndex4":"","PartyIndex4_Rank:num":"0","PartyIndex4_Flank:num":"0","PartyIndex5":"","PartyIndex5_Rank:num":"0","PartyIndex5_Flank:num":"0","PartyIndex6":"","PartyIndex6_Rank:num":"0","PartyIndex6_Flank:num":"0","PartyIndex7":"","PartyIndex7_Rank:num":"0","PartyIndex7_Flank:num":"0","PartyIndex8":"","PartyIndex8_Rank:num":"0","PartyIndex8_Flank:num":"0","PartyIndex9":"","PartyIndex9_Rank:num":"0","PartyIndex9_Flank:num":"0","PartyIndex10":"","PartyIndex10_Rank:num":"0","PartyIndex10_Flank:num":"0","PartyIndex11":"","PartyIndex11_Rank:num":"0","PartyIndex11_Flank:num":"0","PartyIndex12":"","PartyIndex12_Rank:num":"0","PartyIndex12_Flank:num":"0","PartyIndex13":"","PartyIndex13_Rank:num":"0","PartyIndex13_Flank:num":"0","PartyIndex14":"","PartyIndex14_Rank:num":"0","PartyIndex14_Flank:num":"0","PartyIndex15":"","PartyIndex15_Rank:num":"0","PartyIndex15_Flank:num":"0","PartyIndex16":"","PartyIndex16_Rank:num":"0","PartyIndex16_Flank:num":"0","PartyIndex17":"","PartyIndex17_Rank:num":"0","PartyIndex17_Flank:num":"0","PartyIndex18":"","PartyIndex18_Rank:num":"0","PartyIndex18_Flank:num":"0","PartyIndex19":"","PartyIndex19_Rank:num":"0","PartyIndex19_Flank:num":"0"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you adjust the window settings for this plugin.
 * @default {"ActionDisplay":"","radiusReduce:num":"0.5","drawUsableNodes:eval":"true","okayColor:str":"0","notColor:str":"7","drawTargetNodes:eval":"true","allyColor:str":"23","enemyColor:str":"2","Window_SkillList":"","skillListDrawUsableNodes:eval":"true","skillListDrawTargetNodes:eval":"true","Window_ItemList":"","itemListDrawUsableNodes:eval":"true","itemListDrawTargetNodes:eval":"true","Window_ActorCommand":"","actorCmdDrawUsableNodes:eval":"false","actorCmdDrawTargetNodes:eval":"false","Window_BattleGridHelp":"","Window_BattleGridHelp_BgType:num":"0","HelpPickActor:json":"\"Select a party member to change the starting position for.\"","HelpPickNode:json":"\"Please select a node to place party member.\"","HelpExtPickNode:json":"\"Please select a node to modify.\"","HelpExtRequiredChara:json":"\"Make sure \\\\C[5]%1\\\\C[0] is in your party!\"","Window_BattleGridTactics":"","Window_BattleGridTactics_BgType:num":"0","Window_BattleGridTactics_graphicType:str":"face","Switching":"","Window_BattleGridTactics_pendingBgColor1:str":"28","Window_BattleGridTactics_pendingBgColor2:str":"29","Window_BattleGridTactics_titlePendingColor:str":"24","PartyLeaderVocab:str":"Party Leader","Window_BattleGridTactics_titleLeaderColor:str":"17","PartyMemberVocab:str":"Member #%1","Window_BattleGridTactics_titleMemberColor:str":"5","EmptyNodeVocab:str":"- Empty -","Window_BattleGridTactics_titleEmptyColor:str":"7","WindowTactics_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.mainAreaHeight();\\nconst wx = 0;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","WindowTactics_DrawEmptyJS:func":"\"// Declare Constants\\nconst index = arguments[0];\\nconst rect = this.itemRect(index);\\nrect.x += 2;\\nrect.width -= 4;\\nconst half = rect.width / 2;\\nconst height = this.lineHeight();\\n\\n// Reset Font Settings\\nthis.resetFontSettings();\\nthis.changePaintOpacity(true);\\n\\n// Draw Banner Background\\nconst color1 = ColorManager.dimColor1();\\nconst color2 = ColorManager.dimColor2();\\nthis.contents.gradientFillRect(rect.x, rect.y, half, height, color2, color1);\\nthis.contents.gradientFillRect(rect.x + half, rect.y, half, height, color1, color2);\\n\\n// Draw Banner Text\\nconst text = this.getActorTitle();\\nthis.changeTextColor(this.getTitleColor());\\nthis.changePaintOpacity(false);\\nthis.drawText(text, rect.x, rect.y, rect.width, 'center');\"","WindowTactics_DrawActorJS:func":"\"// Declare Constants\\nconst index = arguments[0];\\nconst partyIndex = arguments[1];\\nconst actor = $gameParty.battleMembers()[partyIndex];\\nconst rect = this.itemRect(index);\\nrect.x += 2;\\nrect.width -= 4;\\nconst half = rect.width / 2;\\nconst height = this.lineHeight();\\n\\n// Reset Font Settings\\nthis.resetFontSettings();\\nthis.changePaintOpacity(true);\\n\\n// Draw Actor Graphic\\nif (partyIndex >= 0 && actor) {\\n    if (rect.width > 300) {\\n        this.drawActorGraphic(actor, rect.x, rect.y + height, ImageManager.faceWidth, rect.height - height - 2);\\n        if (rect.height >= height * 2) {\\n            this.drawActorLevel(actor, rect.x + 8, rect.y + rect.height - height - 2);\\n        }\\n        if (Imported.VisuMZ_4_BreakShields && rect.height >= (height * 3) && this.drawActorBreakShields) {\\n            this.drawActorBreakShields(actor, rect.x + 8, rect.y + rect.height - (height * 2) - 2);\\n        }\\n    } else {\\n        this.drawActorGraphic(actor, rect.x, rect.y, rect.width, rect.height);\\n    }\\n}\\n\\n// Draw Banner Background\\nconst color1 = ColorManager.dimColor1();\\nconst color2 = ColorManager.dimColor2();\\nthis.contents.gradientFillRect(rect.x, rect.y, half, height, color2, color1);\\nthis.contents.gradientFillRect(rect.x + half, rect.y, half, height, color1, color2);\\n\\n// Draw Banner Text\\nconst text = this.getActorTitle(partyIndex);\\nthis.changeTextColor(this.getTitleColor(index, partyIndex));\\nthis.drawText(text, rect.x, rect.y, rect.width, 'center');\\n\\n// Reset Font Settings\\nthis.resetFontSettings();\\n\\n// Draw Name\\nif (partyIndex >= 0 && actor) {\\n    if (rect.width <= 300 && rect.height >= height * 2) {\\n        const dataY = rect.y + rect.height - height;\\n        this.contents.gradientFillRect(rect.x, dataY, half, height, color2, color1);\\n        this.contents.gradientFillRect(rect.x + half, dataY, half, height, color1, color2);\\n        this.drawText(actor.name(), rect.x, dataY, rect.width, 'center');\\n    }\\n\\n    // Draw Data\\n    if (rect.width > 300) {\\n        const extraWidth = rect.width - ImageManager.faceWidth - 8;\\n        const dataX = rect.x + ImageManager.faceWidth + 4;\\n        const dataY = rect.y + height;\\n        const gaugeX = Math.floor((extraWidth - 128) / 2) + dataX;\\n        const gaugeY = dataY + height + 2;\\n        const gaugeHeight = this.gaugeLineHeight();\\n        this.drawText(actor.name(), dataX, dataY, extraWidth, 'center');\\n        this.placeGauge(actor, 'hp', gaugeX, gaugeY + gaugeHeight * 0);\\n        this.placeGauge(actor, 'mp', gaugeX, gaugeY + gaugeHeight * 1);\\n        const roomForTp = (gaugeY + gaugeHeight * 3) <= (rect.y + rect.height);\\n        if ($dataSystem.optDisplayTp && roomForTp) {\\n            this.placeGauge(actor, 'tp', gaugeX, gaugeY + gaugeHeight * 2);\\n        }\\n    }\\n}\"","Window_BattleGridTacticsCommand":"","Window_BattleGridTacticsCommand_BgType:num":"0","TacticsCommandWidth:num":"300","TacticsCommandOrder:arraystr":"[\"addMember\",\"move\",\"partyLeader\",\"swapMember\",\"removeMember\",\"classChange\",\"skills\",\"equips\",\"status\"]","Window_BattleGridTacticsCommands":"","Window_BattleGridTacticsCommand_Move":"","CommandName_Move:str":"\\I[78]Move Position","HelpDesc_Move:json":"\"Moves character to a different grid node position.\"","Window_BattleGridTacticsCommand_PartyLeader":"","CommandName_PartyLeader:str":"\\I[87]Make Leader","HelpDesc_PartyLeader:json":"\"Makes character the party leader.\"","ShowCommand_PartyLeader:eval":"true","Window_BattleGridTacticsCommand_Skill":"","CommandName_Skill:str":"\\I[101]View Skills","HelpDesc_Skill:json":"\"View this character's skills.\"","ShowCommand_Skill:eval":"true","Window_BattleGridTacticsCommand_Equips":"","CommandName_Equips:str":"\\I[137]View Equipment","HelpDesc_Equips:json":"\"View this character's equipment.\"","ShowCommand_Equips:eval":"true","Window_BattleGridTacticsCommand_Status":"","CommandName_Status:str":"\\I[82]View Status","HelpDesc_Status:json":"\"View this character's status.\"","ShowCommand_Status:eval":"true","Window_BattleGridTacticsCommand_Class":"","CommandName_Class:str":"\\I[133]Change Class","HelpDesc_Class:json":"\"Change this character's class.\"","ShowCommand_Class:eval":"true","Window_BattleGridTacticsCommand_SwapMember":"","CommandName_SwapMember:str":"\\I[75]Swap Character","HelpDesc_SwapMember:json":"\"Switches character for a different party member\"","ShowCommand_SwapMember:eval":"true","Window_BattleGridTacticsCommand_AddMember":"","CommandName_AddMember:str":"\\I[73]Add Character","HelpDesc_AddMember:json":"\"Adds selected character to current party.\"","ShowCommand_AddMember:eval":"true","Window_BattleGridTacticsCommand_RemoveMember":"","CommandName_RemoveMember:str":"\\I[74]Move to Reserve","HelpDesc_RemoveMember:json":"\"Removes character from current party.\"","ShowCommand_RemoveMember:eval":"true"}
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
 * @param Defaults
 * 
 * @param DefaultGrid:eval
 * @text Default Grid?
 * @parent Defaults
 * @type boolean
 * @on Grid-Battles
 * @off Normal Battles
 * @desc Are battles grid-battles by default?
 * Use <Grid> and <No Grid> in troop names otherwise.
 * @default true
 * 
 * @param moveDuration:num
 * @text Movement Duration
 * @parent Defaults
 * @type number
 * @min 1
 * @desc Default number of frames for movement duration.
 * @default 12
 * 
 * @param userSilentMove:eval
 * @text User Silent Move?
 * @parent moveDuration:num
 * @type boolean
 * @on Silent
 * @off Visual
 * @desc Default setting for silent movement versus visual.
 * Applies only to user movement notetag.
 * @default true
 * 
 * @param targetSilentMove:eval
 * @text Target Silent Move?
 * @parent moveDuration:num
 * @type boolean
 * @on Silent
 * @off Visual
 * @desc Default setting for silent movement versus visual.
 * Applies only to target movement notetag.
 * @default false
 * 
 * @param defaultWpnRangeMelee:eval
 * @text Weapon Range Melee?
 * @parent Defaults
 * @type boolean
 * @on Melee Range
 * @off Global Range
 * @desc Make weapon ranges melee by default?
 * Only affects actions with <Use Weapon Range> notetag.
 * @default true
 * 
 * @param Crashing
 * 
 * @param crashAllowDeath:eval
 * @text Allow Crash Death?
 * @parent Crashing
 * @type boolean
 * @on Allow Death
 * @off Leave with 1 HP
 * @desc Can battlers die from crashing into one another?
 * @default true
 * 
 * @param actionTargetCrashDamage:eval
 * @text Damage Move Target?
 * @parent Crashing
 * @type boolean
 * @on Crash Damage
 * @off No Damage
 * @desc Cause damage to the target that's being moved?
 * @default true
 *
 * @param actionTargetAnimation:num
 * @text Animation ID
 * @parent actionTargetCrashDamage:eval
 * @type animation
 * @desc Play this animation when the effect activates.
 * Use 0 to not play an animation.
 * @default 0
 * 
 * @param crashTargetCrashDamage:eval
 * @text Damage Crash Target?
 * @parent Crashing
 * @type boolean
 * @on Crash Damage
 * @off No Damage
 * @desc Cause damage to the target that's moved into?
 * @default true
 *
 * @param crashTargetAnimation:num
 * @text Animation ID
 * @parent crashTargetCrashDamage:eval
 * @type animation
 * @desc Play this animation when the effect activates.
 * Use 0 to not play an animation.
 * @default 2
 *
 * @param crashDamageFormulaJS:func
 * @text JS: Crash DMG Formula
 * @parent Crashing
 * @type note
 * @desc Formula used for calculating Crash Damage.
 * @default "// Declare Constants\nconst user = arguments[0];\nconst target = arguments[1];\nconst crasher = target;\nconst a = this;\nconst b = target;\n\n// Calculate Base Damage\nlet damage = (crasher.def * 0.50);\ndamage -= (user.def * 0.25);\n\n// Calculate Variance\nconst variance = 20;\nconst amp = Math.floor(Math.max((Math.abs(damage) * variance) / 100, 0));\nconst v = Math.randomInt(amp + 1) + Math.randomInt(amp + 1) - amp;\n\n// Return Damage\nreturn damage >= 0 ? damage + v : damage - v;"
 * 
 * @param Switching
 * @text Switching Nodes
 * 
 * @param canDeadGridSwitch:eval
 * @text Can Dead Switch?
 * @parent Switching
 * @type boolean
 * @on Allow Switching
 * @off Disallow Switching
 * @desc Can battlers switch Node positions with dead units?
 * @default true
 * 
 * @param Triggers
 * 
 * @param triggerPopupShowText:eval
 * @text Show Popup?
 * @parent Triggers
 * @type boolean
 * @on Show Popup
 * @off Don't Show
 * @desc Show popups when a battler activates a Trigger?
 * @default true
 *
 * @param triggerPopupTextColor:str
 * @text Text Color
 * @parent Triggers
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param triggerPopupFlashColor:eval
 * @text Flash Color
 * @parent Triggers
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @param triggerPopupFlashDuration:num
 * @text Flash Duration
 * @parent Triggers
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 120
 *
 */
/* ----------------------------------------------------------------------------
 * Grid Field Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GridField:
 *
 * @param Size
 *
 * @param Ranks:num
 * @text Max Ranks
 * @parent Size
 * @type number
 * @min 1
 * @max 10
 * @desc How many ranks are used for each team? Max: 10.
 * Ranks are formation rows or columns visually.
 * @default 4
 *
 * @param Flanks:num
 * @text Max Flanks
 * @parent Size
 * @type number
 * @min 1
 * @max 10
 * @desc How many flanks are used for each team? Max: 10.
 * Ranks are formation sides/wings or rows visually.
 * @default 3
 *
 * @param Appearance
 * @text Field Appearance
 *
 * @param maxDistanceX:num
 * @text Max Horz Distance
 * @parent Appearance
 * @type number
 * @min 1
 * @desc What is the maximum horizontal distance that the grid
 * field spans across the screen? Auto-shrinks if too big.
 * @default 1024
 *
 * @param differenceX:num
 * @text Top/Bottom Delta
 * @parent maxDistanceX:num
 * @type number
 * @min 1
 * @desc What is the horizontal size difference from top to
 * bottom of the field. This adds perspective.
 * @default 192
 *
 * @param distanceY:num
 * @text Vertical Distance
 * @parent Appearance
 * @type number
 * @min 1
 * @desc What is the vertical distance that the grid field spans
 * across the screen from top to bottom?
 * @default 160
 *
 * @param weightMod:num
 * @text Perspective Modifier
 * @parent distanceY:num
 * @desc What is the perspective modifier? This is so that upper
 * point distances shrink and lower point distances expand.
 * @default 1.20
 *
 * @param spaceBetween:num
 * @text Space Between
 * @parent Appearance
 * @type number
 * @desc How many nodes between each unit's front rank?
 * The space gives more room for movement animations.
 * @default 1
 *
 * @param Effects
 * 
 * @param blinkInputUser:eval
 * @text Blink Input User?
 * @parent Effects
 * @type boolean
 * @on Blink
 * @off Don't Blink
 * @desc Blink the input user for more clarity?
 * @default true
 *
 * @param blinkInputColor:eval
 * @text Blink Color
 * @parent Effects
 * @desc Adjust the blinking input color.
 * Format: [red, green, blue, alpha]
 * @default [16, 255, 255, 64]
 *
 * @param Offsets
 *
 * @param nodeOffsets
 * @text Grid Node Offsets
 * @parent Offsets
 *
 * @param nodeOffsetX:num
 * @text Offset X
 * @parent nodeOffsets
 * @desc Offsets the node x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param nodeOffsetY:num
 * @text Offset Y
 * @parent nodeOffsets
 * @desc Offsets the node y position.
 * Negative: up. Positive: down.
 * @default +24
 *
 * @param ActorOffsets
 * @text Actor Sprite Offsets
 * @parent Offsets
 *
 * @param actorOffsetX:num
 * @text Offset X
 * @parent ActorOffsets
 * @desc Offsets the actor x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param actorOffsetY:num
 * @text Offset Y
 * @parent ActorOffsets
 * @desc Offsets the actor y position.
 * Negative: up. Positive: down.
 * @default +2
 *
 * @param EnemyOffsets
 * @text Enemy Sprite Offsets
 * @parent Offsets
 *
 * @param enemyOffsetX:num
 * @text Offset X
 * @parent EnemyOffsets
 * @desc Offsets the enemy x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param enemyOffsetY:num
 * @text Offset Y
 * @parent EnemyOffsets
 * @desc Offsets the enemy y position.
 * Negative: up. Positive: down.
 * @default +4
 *
 * @param OutlineFilter
 * @text Outline Filter
 * 
 * @param showOutlineFilter:eval
 * @text Show Outline Filter?
 * @parent OutlineFilter
 * @type boolean
 * @on Show Outline
 * @off Don't Show
 * @desc Show outline filter for nodes?
 * Requires Pixi JS Filters.
 * @default true
 *
 * @param outlineInnerColor:eval
 * @text Inner Color
 * @parent OutlineFilter
 * @desc System hex code color for inner color.
 * Format: 0xRRGGBB   Requires Pixi JS Filters.
 * @default 0x000000
 *
 * @param outlineInnerThick:num
 * @text Inner Thickness
 * @parent OutlineFilter
 * @desc What thickness do you want for inner outline?
 * Requires Pixi JS Filters.
 * @default 1.5
 *
 * @param outlineOuterColor:eval
 * @text Outer Color
 * @parent OutlineFilter
 * @desc System hex code color for outer color.
 * Format: 0xRRGGBB   Requires Pixi JS Filters.
 * @default 0xffffff
 *
 * @param outlineOuterThick:num
 * @text Outer Thickness
 * @parent OutlineFilter
 * @desc What thickness do you want for outer outline?
 * Requires Pixi JS Filters.
 * @default 1.5
 *
 */
/* ----------------------------------------------------------------------------
 * Grid Node Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Node:
 *
 * @param ActorNode
 * @text Actor Nodes
 *
 * @param actorNodeFilename:str
 * @text Filename
 * @parent ActorNode
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename used for the actor Node image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param actorTextColor:str
 * @text Generated Color
 * @parent ActorNode
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #0088ff
 * 
 * @param actorOpacity:num
 * @text Generated Opacity
 * @parent actorTextColor:str
 * @type number
 * @max 255
 * @desc What is the opacity level of the generated actor node?
 * @default 192
 *
 * @param actorDifferBlendColor:eval
 * @text Differ Blend Color
 * @parent ActorNode
 * @desc Blend color used when differentiating nodes.
 * Format: [red, green, blue, alpha]
 * @default [160, 255, 160, 192]
 *
 * @param EnemyNode
 * @text Enemy Nodes
 *
 * @param enemyNodeFilename:str
 * @text Filename
 * @parent EnemyNode
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename used for the enemy Node image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param enemyTextColor:str
 * @text Generated Color
 * @parent EnemyNode
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ff0000
 * 
 * @param enemyOpacity:num
 * @text Generated Opacity
 * @parent enemyTextColor:str
 * @type number
 * @max 255
 * @desc What is the opacity level of the generated enemy node?
 * @default 192
 *
 * @param enemyDifferBlendColor:eval
 * @text Differ Blend Color
 * @parent EnemyNode
 * @desc Blend color used when differentiating nodes.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 0, 192]
 * 
 * @param Opacity
 * 
 * @param opacitySpeed:num
 * @text Opacity Speed
 * @parent Opacity
 * @type number
 * @max 255
 * @desc Speed at which the opacity changes.
 * @default 16
 * 
 * @param disabledOpacity:num
 * @text Disabled Opacity
 * @parent Opacity
 * @type number
 * @min 1
 * @max 255
 * @desc Opacity level for disabled nodes.
 * @default 160
 * 
 * @param Scale
 *
 * @param scaleX:num
 * @text Scale X
 * @parent Scale
 * @desc Scale X value for the node.
 * @default 0.60
 *
 * @param scaleY:num
 * @text Scale Y
 * @parent Scale
 * @desc Scale Y value for the node.
 * @default 0.20
 * 
 * @param Visibility
 *
 * @param selectedBlendColor:eval
 * @text Active Blend Color
 * @parent Visibility
 * @desc Blend color used by active battler.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 255, 160]
 * 
 * @param Global
 * @parent Visibility
 *
 * @param visibleAlways:eval
 * @text Always Visible?
 * @parent Global
 * @type boolean
 * @on Visible
 * @off Conditonal
 * @desc Always make all grid Nodes visible?
 * @default false
 *
 * @param visibleAnyInput:eval
 * @text Any Input?
 * @parent Global
 * @type boolean
 * @on Visible
 * @off Conditonal
 * @desc Make all grid Nodes during input phase?
 * @default false
 *
 * @param visibleTargeting:eval
 * @text Targeting?
 * @parent Global
 * @type boolean
 * @on Visible
 * @off Conditonal
 * @desc Make all grid Nodes during targeting?
 * @default false
 * 
 * @param Specific
 * @parent Visibility
 *
 * @param visibleActorInput:eval
 * @text Inputting Actor?
 * @parent Specific
 * @type boolean
 * @on Visible
 * @off Conditonal
 * @desc Make inputting actor's grid Node visible?
 * @default true
 *
 * @param visibleSelected:eval
 * @text Selected Target?
 * @parent Specific
 * @type boolean
 * @on Visible
 * @off Conditonal
 * @desc Make selected target's grid Node visible?
 * @default true
 *
 * @param visibleActive:eval
 * @text Active Battler?
 * @parent Specific
 * @type boolean
 * @on Visible
 * @off Conditonal
 * @desc Make active battler/subject's grid Node visible?
 * @default false
 *
 * @param visibleTargeted:eval
 * @text Action Target?
 * @parent Specific
 * @type boolean
 * @on Visible
 * @off Conditonal
 * @desc Make action target's grid Node visible?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Passive State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PassiveState:
 *
 * @param Properties
 *
 * @param showNodeIcons:eval
 * @text Show Passive Icons?
 * @parent Properties
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the icons of the passive states attached to a Node?
 * @default true
 *
 * @param aniFrameCount:num
 * @text Cycle Duration
 * @parent Properties
 * @desc How many frames should each icon cycle take?
 * @default 40
 *
 * @param blendMode:num
 * @text Blend Mode
 * @parent Properties
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for these icons.
 * @default 1
 * 
 * @param Opacity
 *
 * @param opacitySpeed:num
 * @text Opacity Speed
 * @parent Opacity
 * @type number
 * @min 1
 * @max 255
 * @desc Speed at which the opacity changes.
 * @default 16
 *
 * @param opacityFlucMax:num
 * @text Fluctuation Maximum
 * @parent Opacity
 * @type number
 * @min 1
 * @max 255
 * @desc Maximum opacity value for fluctuation effect.
 * @default 192
 *
 * @param opacityFlucRange:num
 * @text Fluctuation Range
 * @parent Opacity
 * @type number
 * @min 1
 * @max 255
 * @desc Fluctuation range of the opacity effect.
 * @default 128
 *
 * @param opacityFlucRate:num
 * @text Fluctuation Rate
 * @parent Opacity
 * @desc Fluctuation rate of the opacity effect.
 * @default 0.05
 * 
 * @param Position
 *
 * @param PositionOffsetX:num
 * @text Offset X
 * @parent Position
 * @desc Offsets the passive icon's x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param PositionOffsetY:num
 * @text Offset Y
 * @parent Position
 * @desc Offsets the passive icon's y position.
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param Scale
 *
 * @param scaleX:num
 * @text Scale X
 * @parent Scale
 * @desc Scale X value for the icon.
 * @default 1.00
 *
 * @param scaleY:num
 * @text Scale Y
 * @parent Scale
 * @desc Scale Y value for the icon.
 * @default 0.50
 *
 */
/* ----------------------------------------------------------------------------
 * Trigger Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Trigger:
 *
 * @param Properties
 *
 * @param showNodeIcons:eval
 * @text Show Trigger Icons?
 * @parent Properties
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the icons of the trigger actions attached to a Node?
 * @default true
 *
 * @param blendMode:num
 * @text Blend Mode
 * @parent Properties
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for these icons.
 * @default 1
 * 
 * @param Opacity
 *
 * @param opacitySpeed:num
 * @text Opacity Speed
 * @parent Opacity
 * @type number
 * @min 1
 * @max 255
 * @desc Speed at which the opacity changes.
 * @default 16
 *
 * @param opacityFlucMax:num
 * @text Fluctuation Maximum
 * @parent Opacity
 * @type number
 * @min 1
 * @max 255
 * @desc Maximum opacity value for fluctuation effect.
 * @default 192
 *
 * @param opacityFlucRange:num
 * @text Fluctuation Range
 * @parent Opacity
 * @type number
 * @min 1
 * @max 255
 * @desc Fluctuation range of the opacity effect.
 * @default 128
 *
 * @param opacityFlucRate:num
 * @text Fluctuation Rate
 * @parent Opacity
 * @desc Fluctuation rate of the opacity effect.
 * @default 0.05
 * 
 * @param Position
 *
 * @param PositionOffsetX:num
 * @text Offset X
 * @parent Position
 * @desc Offsets the trigger icon's x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param PositionOffsetY:num
 * @text Offset Y
 * @parent Position
 * @desc Offsets the trigger icon's y position.
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param Scale
 *
 * @param scaleX:num
 * @text Scale X
 * @parent Scale
 * @desc Scale X value for the icon.
 * @default 2.00
 *
 * @param scaleY:num
 * @text Scale Y
 * @parent Scale
 * @desc Scale Y value for the icon.
 * @default 0.75
 *
 */
/* ----------------------------------------------------------------------------
 * Compatibility Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Compatibility:
 *
 * @param VisuMZ_1_ItemsEquipsCore
 * @text Items & Equips Core
 *
 * @param shopStatusShowData:eval
 * @text Shop Status Window
 * @parent VisuMZ_1_ItemsEquipsCore
 * @type boolean
 * @on Bypass
 * @off Don't Bypass
 * @desc Show grid node target and casting data in Shop Status Window?
 * @default true
 *
 * @param TargetNodeVocab:str
 * @text Range: Target Node
 * @parent VisuMZ_1_ItemsEquipsCore
 * @desc Text used to label target nodes.
 * @default Range
 *
 * @param CastNodeVocab:str
 * @text Range: Cast Node
 * @parent VisuMZ_1_ItemsEquipsCore
 * @desc Text used to label cast nodes.
 * @default From
 *
 * @param ScopeAnyNodeVocab:str
 * @text Scope: Any Node
 * @parent VisuMZ_1_ItemsEquipsCore
 * @desc Text used to label node scopes.
 * @default Any Node
 *
 * @param ScopeEmptyNodeVocab:str
 * @text Scope: Empty Node
 * @parent VisuMZ_1_ItemsEquipsCore
 * @desc Text used to label node scopes.
 * @default Empty Node
 *
 * @param ScopeActorNodeVocab:str
 * @text Scope: Actor Node
 * @parent VisuMZ_1_ItemsEquipsCore
 * @desc Text used to label node scopes.
 * @default Actor Node
 *
 * @param ScopeEnemyNodeVocab:str
 * @text Scope: Enemy Node
 * @parent VisuMZ_1_ItemsEquipsCore
 * @desc Text used to label node scopes.
 * @default Enemy Node
 *
 * @param VisuMZ_2_BattleSystemBTB
 * @text Battle System - BTB
 *
 * @param btbBraveBypassRankFlank:eval
 * @text Bypass Require Node?
 * @parent VisuMZ_2_BattleSystemBTB
 * @type boolean
 * @on Bypass
 * @off Don't Bypass
 * @desc During input and under "Brave" effect, ignore rank/flank
 * node requirements for skills/items?
 * @default true
 *
 * @param VisuMZ_2_PartySystem
 * @text Party System
 *
 * @param partySystemRemoveShortcut:eval
 * @text Removal Shortcut?
 * @parent VisuMZ_2_PartySystem
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Add member removal shortcut for Extended Tactics scene?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Move Command Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MoveCommand:
 *
 * @param General
 * 
 * @param autoAddMoveCmd:eval
 * @text Auto Add "Move"?
 * @parent General
 * @type boolean
 * @on Auto Add
 * @off Don't Auto Add
 * @desc Automatically add the "Move" command to the actor command window list?
 * @default true
 * 
 * @param showMoveCommand:eval
 * @text Show "Move" Command?
 * @parent General
 * @type boolean
 * @on Show "Move"
 * @off Don't Show
 * @desc Show the "Move" command in the actor command window list?
 * @default true
 *
 * @param MoveCmdIcon:num
 * @text Command Icon
 * @parent showMoveCommand:eval
 * @desc Icon used for the "Move" command.
 * @default 82
 *
 * @param MoveCommandName:str
 * @text Command Name
 * @parent showMoveCommand:eval
 * @desc Text used for the "Move" command.
 * @default Move
 *
 * @param MoveHelpText:json
 * @text Help Description
 * @parent showMoveCommand:eval
 * @type note
 * @desc Text displayed in the help window when the Move command is selected.
 * @default "Moves user to a different node."
 *
 * @param MoveQueueText:str
 * @text Queue Text
 * @parent showMoveCommand:eval
 * @desc Used with Active ATB/TPB to display movement queue.
 * @default Move command is queued after action is complete.
 *
 * @param moveCommandCooldown:num
 * @text Command Cooldown
 * @parent showMoveCommand:eval
 * @type number
 * @desc How many turns must the actor wait before moving again?
 * If cooldown is 0, move range becomes global.
 * @default 1
 * 
 * @param canGridSwitchOnMove:eval
 * @text Grid Switch on Move?
 * @parent showMoveCommand:eval
 * @type boolean
 * @on Allow Switch
 * @off Don't Switch
 * @desc Can actors switch Nodes when using the Move Command?
 * @default true
 * 
 * @param moveCommandPassTurn:eval
 * @text Pass Turn on Move?
 * @parent showMoveCommand:eval
 * @type boolean
 * @on Pass Turn
 * @off Keep Turn
 * @desc Makes the actor pass the current turn if the Move Command is used?
 * @default false
 *
 * @param activeWindowBattlerOpacityRate:num
 * @text Battler Opacity Rate
 * @parent General
 * @desc What opacity rate should battlers be adjusted by
 * when the player has to select a Grid Node
 * @default 0.40
 * 
 * @param Cursor
 * 
 * @param CursorEnabled
 * @text Enabled
 * @parent Cursor
 *
 * @param CursorEnabledBlendMode:num
 * @text Blend Mode
 * @parent CursorEnabled
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for an enabled cursor.
 * @default 0
 *
 * @param CursorEnabledToneColor:eval
 * @text Tone Color
 * @parent CursorEnabled
 * @desc Adjust the tone color of an enabled cursor.
 * Format: [red, green, blue, gray]
 * @default [16, 255, 16, 0]
 *
 * @param CursorEnabledOpacity:num
 * @text Opacity
 * @parent CursorEnabled
 * @type number
 * @max 255
 * @desc What opacity level should the enabled cursor use?
 * @default 192
 * 
 * @param CursorDisabled
 * @text Disabled
 * @parent Cursor
 *
 * @param CursorDisabledBlendMode:num
 * @text Blend Mode
 * @parent CursorDisabled
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for an disabled cursor.
 * @default 0
 *
 * @param CursorDisabledToneColor:eval
 * @text Tone Color
 * @parent CursorDisabled
 * @desc Adjust the tone color of an disabled cursor.
 * Format: [red, green, blue, gray]
 * @default [255, 16, 16, 0]
 *
 * @param CursorDisabledOpacity:num
 * @text Opacity
 * @parent CursorDisabled
 * @type number
 * @max 255
 * @desc What opacity level should the disabled cursor use?
 * @default 192
 * 
 * @param MoveRange
 * @text Default Move Range
 * 
 * @param defaultAllRange:eval
 * @text Global Range?
 * @parent MoveRange
 * @type boolean
 * @on Global
 * @off Ignore
 * @desc Give actors a global movement range by default?
 * @default false
 * 
 * @param defaultNoneRange:eval
 * @text Disable Range?
 * @parent MoveRange
 * @type boolean
 * @on Global
 * @off Ignore
 * @desc Disable actor movement ranges by default?
 * @default false
 * 
 * @param Allowed
 * @parent MoveRange
 *
 * @param allowSquare:num
 * @text Square
 * @parent Allowed
 * @type number
 * @desc What square distance is allowed by default?
 * @default 1
 *
 * @param allowRadius:num
 * @text Radius
 * @parent Allowed
 * @type number
 * @desc What radius distance is allowed by default?
 * @default 0
 *
 * @param allowRank:num
 * @text Rank
 * @parent Allowed
 * @type number
 * @desc What same Rank distance is allowed by default?
 * @default 0
 *
 * @param allowFlank:num
 * @text Flank
 * @parent Allowed
 * @type number
 * @desc What same Flank distance is allowed by default?
 * @default 0
 *
 * @param allowDiaForward:num
 * @text Diagonal Forward
 * @parent Allowed
 * @type number
 * @desc What diagonal forward distance is allowed by default?
 * @default 0
 *
 * @param allowDiaBackward:num
 * @text Diagonal Backward
 * @parent Allowed
 * @type number
 * @desc What diagonal backward distance is allowed by default?
 * @default 0
 *
 * @param allowForward:num
 * @text Forward
 * @parent Allowed
 * @type number
 * @desc What forward distance is allowed by default?
 * @default 0
 *
 * @param allowBackward:num
 * @text Backward
 * @parent Allowed
 * @type number
 * @desc What backward distance is allowed by default?
 * @default 0
 *
 * @param allowUpward:num
 * @text Upward
 * @parent Allowed
 * @type number
 * @desc What upward distance is allowed by default?
 * @default 0
 *
 * @param allowDownward:num
 * @text Downward
 * @parent Allowed
 * @type number
 * @desc What downward distance is allowed by default?
 * @default 0
 * 
 * @param Not
 * @text Not Allowed
 * @parent MoveRange
 *
 * @param notSquare:num
 * @text Square
 * @parent Not
 * @type number
 * @desc What square distance is disallowed by default?
 * @default 0
 *
 * @param notRadius:num
 * @text Radius
 * @parent Not
 * @type number
 * @desc What radius distance is disallowed by default?
 * @default 0
 *
 * @param notRank:num
 * @text Rank
 * @parent Not
 * @type number
 * @desc What same Rank distance is disallowed by default?
 * @default 0
 *
 * @param notFlank:num
 * @text Flank
 * @parent Not
 * @type number
 * @desc What same Flank distance is disallowed by default?
 * @default 0
 *
 * @param notDiaForward:num
 * @text Diagonal Forward
 * @parent Not
 * @type number
 * @desc What diagonal forward distance is disallowed by default?
 * @default 0
 *
 * @param notDiaBackward:num
 * @text Diagonal Backward
 * @parent Not
 * @type number
 * @desc What diagonal backward distance is disallowed by default?
 * @default 0
 *
 * @param notForward:num
 * @text Forward
 * @parent Not
 * @type number
 * @desc What forward distance is disallowed by default?
 * @default 0
 *
 * @param notBackward:num
 * @text Backward
 * @parent Not
 * @type number
 * @desc What backward distance is disallowed by default?
 * @default 0
 *
 * @param notUpward:num
 * @text Upward
 * @parent Not
 * @type number
 * @desc What upward distance is disallowed by default?
 * @default 0
 *
 * @param notDownward:num
 * @text Downward
 * @parent Not
 * @type number
 * @desc What downward distance is disallowed by default?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param MoveCommand
 * @text Move Command
 *
 * @param moveCommand_name:str
 * @text Filename
 * @parent MoveCommand
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Move10
 *
 * @param moveCommand_volume:num
 * @text Volume
 * @parent MoveCommand
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param moveCommand_pitch:num
 * @text Pitch
 * @parent MoveCommand
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 150
 *
 * @param moveCommand_pan:num
 * @text Pan
 * @parent MoveCommand
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Tactics Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Tactics:
 *
 * @param Mechanics
 * @text Mechanics Settings
 *
 * @param UseTactics:eval
 * @text Use Tactics System?
 * @parent Mechanics
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the battle tactics system? If not, actor positions are
 * determined by notetags and algorithms.
 * @default true
 *
 * @param Extended:eval
 * @text Extended System?
 * @parent Mechanics
 * @type boolean
 * @on Extended
 * @off Simple
 * @desc Use extended scene? Extended scene allows for more actor
 * management instead of just positioning actors pre-battle.
 * @default true
 *
 * @param MainMenu
 * @text Main Menu
 *
 * @param MenuName:str
 * @text Command Name
 * @parent MainMenu
 * @desc Name of the 'Battle Tactics' option in the Main Menu.
 * @default Tactics
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @parent MainMenu
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Battle Tactics' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @parent MainMenu
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Battle Tactics' option to the Main Menu by default?
 * @default true
 * 
 * @param Background
 * @text Background Settings
 * 
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @parent Background
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @parent Background
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @parent Background
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 * 
 * @param Positions
 * @text Starting Positions
 * 
 * @param PartyIndex0
 * @text Party Leader
 * @parent Positions
 * 
 * @param PartyIndex0_Rank:num
 * @text Rank
 * @parent PartyIndex0
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex0_Flank:num
 * @text Flank
 * @parent PartyIndex0
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex1
 * @text 2nd Member
 * @parent Positions
 * 
 * @param PartyIndex1_Rank:num
 * @text Rank
 * @parent PartyIndex1
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex1_Flank:num
 * @text Flank
 * @parent PartyIndex1
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex2
 * @text 3rd Member
 * @parent Positions
 * 
 * @param PartyIndex2_Rank:num
 * @text Rank
 * @parent PartyIndex2
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex2_Flank:num
 * @text Flank
 * @parent PartyIndex2
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex3
 * @text 4th Member
 * @parent Positions
 * 
 * @param PartyIndex3_Rank:num
 * @text Rank
 * @parent PartyIndex3
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex3_Flank:num
 * @text Flank
 * @parent PartyIndex3
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex4
 * @text 5th Member
 * @parent Positions
 * 
 * @param PartyIndex4_Rank:num
 * @text Rank
 * @parent PartyIndex4
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex4_Flank:num
 * @text Flank
 * @parent PartyIndex4
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex5
 * @text 6th Member
 * @parent Positions
 * 
 * @param PartyIndex5_Rank:num
 * @text Rank
 * @parent PartyIndex5
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex5_Flank:num
 * @text Flank
 * @parent PartyIndex5
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex6
 * @text 7th Member
 * @parent Positions
 * 
 * @param PartyIndex6_Rank:num
 * @text Rank
 * @parent PartyIndex6
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex6_Flank:num
 * @text Flank
 * @parent PartyIndex6
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex7
 * @text 8th Member
 * @parent Positions
 * 
 * @param PartyIndex7_Rank:num
 * @text Rank
 * @parent PartyIndex7
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex7_Flank:num
 * @text Flank
 * @parent PartyIndex7
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex8
 * @text 9th Member
 * @parent Positions
 * 
 * @param PartyIndex8_Rank:num
 * @text Rank
 * @parent PartyIndex8
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex8_Flank:num
 * @text Flank
 * @parent PartyIndex8
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex9
 * @text 10th Member
 * @parent Positions
 * 
 * @param PartyIndex9_Rank:num
 * @text Rank
 * @parent PartyIndex9
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex9_Flank:num
 * @text Flank
 * @parent PartyIndex9
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex10
 * @text 11th Member
 * @parent Positions
 * 
 * @param PartyIndex10_Rank:num
 * @text Rank
 * @parent PartyIndex10
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex10_Flank:num
 * @text Flank
 * @parent PartyIndex10
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex11
 * @text 12th Member
 * @parent Positions
 * 
 * @param PartyIndex11_Rank:num
 * @text Rank
 * @parent PartyIndex11
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex11_Flank:num
 * @text Flank
 * @parent PartyIndex11
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex12
 * @text 13th Member
 * @parent Positions
 * 
 * @param PartyIndex12_Rank:num
 * @text Rank
 * @parent PartyIndex12
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex12_Flank:num
 * @text Flank
 * @parent PartyIndex12
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex13
 * @text 14th Member
 * @parent Positions
 * 
 * @param PartyIndex13_Rank:num
 * @text Rank
 * @parent PartyIndex13
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex13_Flank:num
 * @text Flank
 * @parent PartyIndex13
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex14
 * @text 15th Member
 * @parent Positions
 * 
 * @param PartyIndex14_Rank:num
 * @text Rank
 * @parent PartyIndex14
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex14_Flank:num
 * @text Flank
 * @parent PartyIndex14
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex15
 * @text 16th Member
 * @parent Positions
 * 
 * @param PartyIndex15_Rank:num
 * @text Rank
 * @parent PartyIndex15
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex15_Flank:num
 * @text Flank
 * @parent PartyIndex15
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex16
 * @text 17th Member
 * @parent Positions
 * 
 * @param PartyIndex16_Rank:num
 * @text Rank
 * @parent PartyIndex16
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex16_Flank:num
 * @text Flank
 * @parent PartyIndex16
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex17
 * @text 18th Member
 * @parent Positions
 * 
 * @param PartyIndex17_Rank:num
 * @text Rank
 * @parent PartyIndex17
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex17_Flank:num
 * @text Flank
 * @parent PartyIndex17
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex18
 * @text 19th Member
 * @parent Positions
 * 
 * @param PartyIndex18_Rank:num
 * @text Rank
 * @parent PartyIndex18
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex18_Flank:num
 * @text Flank
 * @parent PartyIndex18
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex19
 * @text 20th Member
 * @parent Positions
 * 
 * @param PartyIndex19_Rank:num
 * @text Rank
 * @parent PartyIndex19
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex19_Flank:num
 * @text Flank
 * @parent PartyIndex19
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Temp Tactics
 * ----------------------------------------------------------------------------
 */
/*~struct~TempTactics:
 *
 * @param Positions
 * @text Starting Positions
 * 
 * @param PartyIndex0
 * @text Party Leader
 * @parent Positions
 * 
 * @param PartyIndex0_Rank:num
 * @text Rank
 * @parent PartyIndex0
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex0_Flank:num
 * @text Flank
 * @parent PartyIndex0
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex1
 * @text 2nd Member
 * @parent Positions
 * 
 * @param PartyIndex1_Rank:num
 * @text Rank
 * @parent PartyIndex1
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex1_Flank:num
 * @text Flank
 * @parent PartyIndex1
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex2
 * @text 3rd Member
 * @parent Positions
 * 
 * @param PartyIndex2_Rank:num
 * @text Rank
 * @parent PartyIndex2
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex2_Flank:num
 * @text Flank
 * @parent PartyIndex2
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex3
 * @text 4th Member
 * @parent Positions
 * 
 * @param PartyIndex3_Rank:num
 * @text Rank
 * @parent PartyIndex3
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex3_Flank:num
 * @text Flank
 * @parent PartyIndex3
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex4
 * @text 5th Member
 * @parent Positions
 * 
 * @param PartyIndex4_Rank:num
 * @text Rank
 * @parent PartyIndex4
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex4_Flank:num
 * @text Flank
 * @parent PartyIndex4
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex5
 * @text 6th Member
 * @parent Positions
 * 
 * @param PartyIndex5_Rank:num
 * @text Rank
 * @parent PartyIndex5
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex5_Flank:num
 * @text Flank
 * @parent PartyIndex5
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex6
 * @text 7th Member
 * @parent Positions
 * 
 * @param PartyIndex6_Rank:num
 * @text Rank
 * @parent PartyIndex6
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex6_Flank:num
 * @text Flank
 * @parent PartyIndex6
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex7
 * @text 8th Member
 * @parent Positions
 * 
 * @param PartyIndex7_Rank:num
 * @text Rank
 * @parent PartyIndex7
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex7_Flank:num
 * @text Flank
 * @parent PartyIndex7
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex8
 * @text 9th Member
 * @parent Positions
 * 
 * @param PartyIndex8_Rank:num
 * @text Rank
 * @parent PartyIndex8
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex8_Flank:num
 * @text Flank
 * @parent PartyIndex8
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex9
 * @text 10th Member
 * @parent Positions
 * 
 * @param PartyIndex9_Rank:num
 * @text Rank
 * @parent PartyIndex9
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex9_Flank:num
 * @text Flank
 * @parent PartyIndex9
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex10
 * @text 11th Member
 * @parent Positions
 * 
 * @param PartyIndex10_Rank:num
 * @text Rank
 * @parent PartyIndex10
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex10_Flank:num
 * @text Flank
 * @parent PartyIndex10
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex11
 * @text 12th Member
 * @parent Positions
 * 
 * @param PartyIndex11_Rank:num
 * @text Rank
 * @parent PartyIndex11
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex11_Flank:num
 * @text Flank
 * @parent PartyIndex11
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex12
 * @text 13th Member
 * @parent Positions
 * 
 * @param PartyIndex12_Rank:num
 * @text Rank
 * @parent PartyIndex12
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex12_Flank:num
 * @text Flank
 * @parent PartyIndex12
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex13
 * @text 14th Member
 * @parent Positions
 * 
 * @param PartyIndex13_Rank:num
 * @text Rank
 * @parent PartyIndex13
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex13_Flank:num
 * @text Flank
 * @parent PartyIndex13
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex14
 * @text 15th Member
 * @parent Positions
 * 
 * @param PartyIndex14_Rank:num
 * @text Rank
 * @parent PartyIndex14
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex14_Flank:num
 * @text Flank
 * @parent PartyIndex14
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex15
 * @text 16th Member
 * @parent Positions
 * 
 * @param PartyIndex15_Rank:num
 * @text Rank
 * @parent PartyIndex15
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex15_Flank:num
 * @text Flank
 * @parent PartyIndex15
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex16
 * @text 17th Member
 * @parent Positions
 * 
 * @param PartyIndex16_Rank:num
 * @text Rank
 * @parent PartyIndex16
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex16_Flank:num
 * @text Flank
 * @parent PartyIndex16
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex17
 * @text 18th Member
 * @parent Positions
 * 
 * @param PartyIndex17_Rank:num
 * @text Rank
 * @parent PartyIndex17
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex17_Flank:num
 * @text Flank
 * @parent PartyIndex17
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex18
 * @text 19th Member
 * @parent Positions
 * 
 * @param PartyIndex18_Rank:num
 * @text Rank
 * @parent PartyIndex18
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex18_Flank:num
 * @text Flank
 * @parent PartyIndex18
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex19
 * @text 20th Member
 * @parent Positions
 * 
 * @param PartyIndex19_Rank:num
 * @text Rank
 * @parent PartyIndex19
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting rank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 * 
 * @param PartyIndex19_Flank:num
 * @text Flank
 * @parent PartyIndex19
 * @type number
 * @min 0
 * @max 10
 * @desc What is the starting flank for this party member?
 * Use 0 to let plugin determine starting position.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param ActionDisplay
 * @text Action Display
 *
 * @param radiusReduce:num
 * @text Adjust Pixel Radius
 * @parent ActionDisplay
 * @desc Adjust the pixel size of each node radius by this much.
 * @default 0.5
 * 
 * @param drawUsableNodes:eval
 * @text Draw Usable Nodes?
 * @parent ActionDisplay
 * @type boolean
 * @on Draw
 * @off Hide
 * @desc Draws the nodes that the user can perform an action on.
 * This is for general windows.
 * @default true
 *
 * @param okayColor:str
 * @text Usable Color
 * @parent drawUsableNodes:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param notColor:str
 * @text Not Usable Color
 * @parent drawUsableNodes:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 * 
 * @param drawTargetNodes:eval
 * @text Draw Target Nodes?
 * @parent ActionDisplay
 * @type boolean
 * @on Draw
 * @off Hide
 * @desc Draws the nodes that the user can target with the action.
 * This is for general windows.
 * @default true
 *
 * @param allyColor:str
 * @text Ally Color
 * @parent drawTargetNodes:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param enemyColor:str
 * @text Enemy Color
 * @parent drawTargetNodes:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param Window_SkillList
 * 
 * @param skillListDrawUsableNodes:eval
 * @text Draw Usable Nodes?
 * @parent Window_SkillList
 * @type boolean
 * @on Draw
 * @off Hide
 * @desc Draws the nodes that the user can perform an action on.
 * This is for Window_SkillList.
 * @default true
 * 
 * @param skillListDrawTargetNodes:eval
 * @text Draw Target Nodes?
 * @parent Window_SkillList
 * @type boolean
 * @on Draw
 * @off Hide
 * @desc Draws the nodes that the user can target with the action.
 * This is for Window_SkillList.
 * @default true
 *
 * @param Window_ItemList
 * 
 * @param itemListDrawUsableNodes:eval
 * @text Draw Usable Nodes?
 * @parent Window_ItemList
 * @type boolean
 * @on Draw
 * @off Hide
 * @desc Draws the nodes that the user can perform an action on.
 * This is for Window_ItemList.
 * @default true
 * 
 * @param itemListDrawTargetNodes:eval
 * @text Draw Target Nodes?
 * @parent Window_ItemList
 * @type boolean
 * @on Draw
 * @off Hide
 * @desc Draws the nodes that the user can target with the action.
 * This is for Window_ItemList.
 * @default true
 *
 * @param Window_ActorCommand
 * 
 * @param actorCmdDrawUsableNodes:eval
 * @text Draw Usable Nodes?
 * @parent Window_ActorCommand
 * @type boolean
 * @on Draw
 * @off Hide
 * @desc Draws the nodes that the user can perform an action on.
 * This is for Window_ActorCommand.
 * @default false
 * 
 * @param actorCmdDrawTargetNodes:eval
 * @text Draw Target Nodes?
 * @parent Window_ActorCommand
 * @type boolean
 * @on Draw
 * @off Hide
 * @desc Draws the nodes that the user can target with the action.
 * This is for Window_ActorCommand.
 * @default false
 * 
 * @param Window_BattleGridHelp
 * @text Tactics Help Window
 *
 * @param Window_BattleGridHelp_BgType:num
 * @text Background Type
 * @parent Window_BattleGridHelp
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
 * @param HelpPickActor:json
 * @text Help: Select Actor
 * @parent Window_BattleGridHelp
 * @type note
 * @desc Help description to tell player to select an actor.
 * @default "Select a party member to change the starting position for."
 *
 * @param HelpPickNode:json
 * @text Help: Select Node
 * @parent Window_BattleGridHelp
 * @type note
 * @desc Help description to tell player to select a node.
 * @default "Please select a node to place party member."
 *
 * @param HelpExtPickNode:json
 * @text Help: Select Node Ext
 * @parent Window_BattleGridHelp
 * @type note
 * @desc Extended help description to tell player to select a node.
 * @default "Please select a node to modify."
 *
 * @param HelpExtRequiredChara:json
 * @text Help: Required Actor
 * @parent Window_BattleGridHelp
 * @type note
 * @desc Extended help saying which actor is required in party.
 * %1 - Party Member's Name
 * @default "Make sure \\C[5]%1\\C[0] is in your party!"
 * 
 * @param Window_BattleGridTactics
 * @text Tactics Grid Window
 *
 * @param Window_BattleGridTactics_BgType:num
 * @text Background Type
 * @parent Window_BattleGridTactics
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
 * @param Window_BattleGridTactics_graphicType:str
 * @text Graphic Type
 * @parent Window_BattleGridTactics
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler
 * @value svbattler
 * @desc Choose how the actor graphics appear in tactics menu.
 * @default face
 * 
 * @param Switching
 * @text Switching
 * @parent Window_BattleGridTactics
 *
 * @param Window_BattleGridTactics_pendingBgColor1:str
 * @text Switching BG Color 1
 * @parent Switching
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 * @param Window_BattleGridTactics_pendingBgColor2:str
 * @text Switching BG Color 2
 * @parent Switching
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param Window_BattleGridTactics_titlePendingColor:str
 * @text Switching Text Color
 * @parent Switching
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param PartyLeaderVocab:str
 * @text Party Leader Text
 * @parent Window_BattleGridTactics
 * @desc Text used for the tactics banner for the party leader.
 * Do not use Text Codes.
 * @default Party Leader
 *
 * @param Window_BattleGridTactics_titleLeaderColor:str
 * @text Leader Text Color
 * @parent PartyLeaderVocab:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param PartyMemberVocab:str
 * @text Party Member
 * @parent Window_BattleGridTactics
 * @desc Text used for the tactics banner for party member.
 * %1 - Party Member Slot ID. Do not use Text Codes.
 * @default Member #%1
 *
 * @param Window_BattleGridTactics_titleMemberColor:str
 * @text Member Text Color
 * @parent PartyMemberVocab:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 5
 *
 * @param EmptyNodeVocab:str
 * @text Empty Node
 * @parent Window_BattleGridTactics
 * @desc Text used for the tactics banner for empty node.
 * Do not use Text Codes.
 * @default - Empty -
 *
 * @param Window_BattleGridTactics_titleEmptyColor:str
 * @text Empty Text Color
 * @parent EmptyNodeVocab:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param WindowTactics_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window_BattleGridTactics
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.mainAreaHeight();\nconst wx = 0;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param WindowTactics_DrawEmptyJS:func
 * @text JS: Draw Empty Node
 * @parent Window_BattleGridTactics
 * @type note
 * @desc Code used to draw the contents of an empty node.
 * @default "// Declare Constants\nconst index = arguments[0];\nconst rect = this.itemRect(index);\nrect.x += 2;\nrect.width -= 4;\nconst half = rect.width / 2;\nconst height = this.lineHeight();\n\n// Reset Font Settings\nthis.resetFontSettings();\nthis.changePaintOpacity(true);\n\n// Draw Banner Background\nconst color1 = ColorManager.dimColor1();\nconst color2 = ColorManager.dimColor2();\nthis.contents.gradientFillRect(rect.x, rect.y, half, height, color2, color1);\nthis.contents.gradientFillRect(rect.x + half, rect.y, half, height, color1, color2);\n\n// Draw Banner Text\nconst text = this.getActorTitle();\nthis.changeTextColor(this.getTitleColor());\nthis.changePaintOpacity(false);\nthis.drawText(text, rect.x, rect.y, rect.width, 'center');"
 *
 * @param WindowTactics_DrawActorJS:func
 * @text JS: Draw Actor Node
 * @parent Window_BattleGridTactics
 * @type note
 * @desc Code used to draw the contents of a node with an actor.
 * @default "// Declare Constants\nconst index = arguments[0];\nconst partyIndex = arguments[1];\nconst actor = $gameParty.battleMembers()[partyIndex];\nconst rect = this.itemRect(index);\nrect.x += 2;\nrect.width -= 4;\nconst half = rect.width / 2;\nconst height = this.lineHeight();\n\n// Reset Font Settings\nthis.resetFontSettings();\nthis.changePaintOpacity(true);\n\n// Draw Actor Graphic\nif (partyIndex >= 0 && actor) {\n    if (rect.width > 300) {\n        this.drawActorGraphic(actor, rect.x, rect.y + height, ImageManager.faceWidth, rect.height - height - 2);\n        if (rect.height >= height * 2) {\n            this.drawActorLevel(actor, rect.x + 8, rect.y + rect.height - height - 2);\n        }\n        if (Imported.VisuMZ_4_BreakShields && rect.height >= (height * 3) && this.drawActorBreakShields) {\n            this.drawActorBreakShields(actor, rect.x + 8, rect.y + rect.height - (height * 2) - 2);\n        }\n    } else {\n        this.drawActorGraphic(actor, rect.x, rect.y, rect.width, rect.height);\n    }\n}\n\n// Draw Banner Background\nconst color1 = ColorManager.dimColor1();\nconst color2 = ColorManager.dimColor2();\nthis.contents.gradientFillRect(rect.x, rect.y, half, height, color2, color1);\nthis.contents.gradientFillRect(rect.x + half, rect.y, half, height, color1, color2);\n\n// Draw Banner Text\nconst text = this.getActorTitle(partyIndex);\nthis.changeTextColor(this.getTitleColor(index, partyIndex));\nthis.drawText(text, rect.x, rect.y, rect.width, 'center');\n\n// Reset Font Settings\nthis.resetFontSettings();\n\n// Draw Name\nif (partyIndex >= 0 && actor) {\n    if (rect.width <= 300 && rect.height >= height * 2) {\n        const dataY = rect.y + rect.height - height;\n        this.contents.gradientFillRect(rect.x, dataY, half, height, color2, color1);\n        this.contents.gradientFillRect(rect.x + half, dataY, half, height, color1, color2);\n        this.drawText(actor.name(), rect.x, dataY, rect.width, 'center');\n    }\n\n    // Draw Data\n    if (rect.width > 300) {\n        const extraWidth = rect.width - ImageManager.faceWidth - 8;\n        const dataX = rect.x + ImageManager.faceWidth + 4;\n        const dataY = rect.y + height;\n        const gaugeX = Math.floor((extraWidth - 128) / 2) + dataX;\n        const gaugeY = dataY + height + 2;\n        const gaugeHeight = this.gaugeLineHeight();\n        this.drawText(actor.name(), dataX, dataY, extraWidth, 'center');\n        this.placeGauge(actor, 'hp', gaugeX, gaugeY + gaugeHeight * 0);\n        this.placeGauge(actor, 'mp', gaugeX, gaugeY + gaugeHeight * 1);\n        const roomForTp = (gaugeY + gaugeHeight * 3) <= (rect.y + rect.height);\n        if ($dataSystem.optDisplayTp && roomForTp) {\n            this.placeGauge(actor, 'tp', gaugeX, gaugeY + gaugeHeight * 2);\n        }\n    }\n}"
 * 
 * @param Window_BattleGridTacticsCommand
 * @text Tactics Command Window
 *
 * @param Window_BattleGridTacticsCommand_BgType:num
 * @text Background Type
 * @parent Window_BattleGridTacticsCommand
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
 * @param TacticsCommandWidth:num
 * @text Window Width
 * @parent Window_BattleGridTacticsCommand
 * @type number
 * @min 1
 * @desc Width of the Tactics Command Window.
 * @default 300
 *
 * @param TacticsCommandOrder:arraystr
 * @text Command Order
 * @parent Window_BattleGridTacticsCommand
 * @type select[]
 * @option Move Actor
 * @value move
 * @option Set Party Leader
 * @value partyLeader
 * @option View Actor Skills
 * @value skills
 * @option View Actor Equips
 * @value equips
 * @option View Actor Status
 * @value status
 * @option Change Actor Class - Requires VisuMZ_2_ClassChangeSystem
 * @value classChange
 * @option Swap Party Member
 * @value swapMember
 * @option Add Party Member - Requires VisuMZ_2_PartySystem
 * @value addMember
 * @option Remove Party Member - Requires VisuMZ_2_PartySystem
 * @value removeMember
 * @desc The order in which tactics commands appear.
 * @default ["addMember","move","partyLeader","swapMember","removeMember","classChange","skills","equips","status"]
 * 
 * @param Window_BattleGridTacticsCommands
 * @text Command Settings
 * @parent Window_BattleGridTacticsCommand
 * 
 * @param Window_BattleGridTacticsCommand_Move
 * @text Move
 * @parent Window_BattleGridTacticsCommands
 *
 * @param CommandName_Move:str
 * @text Command Name
 * @parent Window_BattleGridTacticsCommand_Move
 * @desc Determines how this command appears in-game.
 * You may use text codes.
 * @default \I[78]Move Position
 *
 * @param HelpDesc_Move:json
 * @text Help Description
 * @parent Window_BattleGridTacticsCommand_Move
 * @type note
 * @desc Help description used when this command is selected.
 * @default "Moves character to a different grid node position."
 * 
 * @param Window_BattleGridTacticsCommand_PartyLeader
 * @text Party Leader
 * @parent Window_BattleGridTacticsCommands
 *
 * @param CommandName_PartyLeader:str
 * @text Command Name
 * @parent Window_BattleGridTacticsCommand_PartyLeader
 * @desc Determines how this command appears in-game.
 * You may use text codes.
 * @default \I[87]Make Leader
 *
 * @param HelpDesc_PartyLeader:json
 * @text Help Description
 * @parent Window_BattleGridTacticsCommand_PartyLeader
 * @type note
 * @desc Help description used when this command is selected.
 * @default "Makes character the party leader."
 *
 * @param ShowCommand_PartyLeader:eval
 * @text Show Command?
 * @parent Window_BattleGridTacticsCommand_PartyLeader
 * @type boolean
 * @on Show Command
 * @off Hide Command
 * @desc Show this command in the Tactics Command Window?
 * @default true
 * 
 * @param Window_BattleGridTacticsCommand_Skill
 * @text Skill
 * @parent Window_BattleGridTacticsCommands
 *
 * @param CommandName_Skill:str
 * @text Command Name
 * @parent Window_BattleGridTacticsCommand_Skill
 * @desc Determines how this command appears in-game.
 * You may use text codes.
 * @default \I[101]View Skills
 *
 * @param HelpDesc_Skill:json
 * @text Help Description
 * @parent Window_BattleGridTacticsCommand_Skill
 * @type note
 * @desc Help description used when this command is selected.
 * @default "View this character's skills."
 *
 * @param ShowCommand_Skill:eval
 * @text Show Command?
 * @parent Window_BattleGridTacticsCommand_Skill
 * @type boolean
 * @on Show Command
 * @off Hide Command
 * @desc Show this command in the Tactics Command Window?
 * @default true
 * 
 * @param Window_BattleGridTacticsCommand_Equips
 * @text Equips
 * @parent Window_BattleGridTacticsCommands
 *
 * @param CommandName_Equips:str
 * @text Command Name
 * @parent Window_BattleGridTacticsCommand_Equips
 * @desc Determines how this command appears in-game.
 * You may use text codes.
 * @default \I[137]View Equipment
 *
 * @param HelpDesc_Equips:json
 * @text Help Description
 * @parent Window_BattleGridTacticsCommand_Equips
 * @type note
 * @desc Help description used when this command is selected.
 * @default "View this character's equipment."
 *
 * @param ShowCommand_Equips:eval
 * @text Show Command?
 * @parent Window_BattleGridTacticsCommand_Equips
 * @type boolean
 * @on Show Command
 * @off Hide Command
 * @desc Show this command in the Tactics Command Window?
 * @default true
 * 
 * @param Window_BattleGridTacticsCommand_Status
 * @text Status
 * @parent Window_BattleGridTacticsCommands
 *
 * @param CommandName_Status:str
 * @text Command Name
 * @parent Window_BattleGridTacticsCommand_Status
 * @desc Determines how this command appears in-game.
 * You may use text codes.
 * @default \I[82]View Status
 *
 * @param HelpDesc_Status:json
 * @text Help Description
 * @parent Window_BattleGridTacticsCommand_Status
 * @type note
 * @desc Help description used when this command is selected.
 * @default "View this character's status."
 *
 * @param ShowCommand_Status:eval
 * @text Show Command?
 * @parent Window_BattleGridTacticsCommand_Status
 * @type boolean
 * @on Show Command
 * @off Hide Command
 * @desc Show this command in the Tactics Command Window?
 * @default true
 * 
 * @param Window_BattleGridTacticsCommand_Class
 * @text Class Change
 * @parent Window_BattleGridTacticsCommands
 *
 * @param CommandName_Class:str
 * @text Command Name
 * @parent Window_BattleGridTacticsCommand_Class
 * @desc Determines how this command appears in-game.
 * You may use text codes.
 * @default \I[133]Change Class
 *
 * @param HelpDesc_Class:json
 * @text Help Description
 * @parent Window_BattleGridTacticsCommand_Class
 * @type note
 * @desc Help description used when this command is selected.
 * Requires VisuMZ_2_ClassChangeSystem!
 * @default "Change this character's class."
 *
 * @param ShowCommand_Class:eval
 * @text Show Command?
 * @parent Window_BattleGridTacticsCommand_Class
 * @type boolean
 * @on Show Command
 * @off Hide Command
 * @desc Show this command in the Tactics Command Window?
 * Requires VisuMZ_2_ClassChangeSystem!
 * @default true
 * 
 * @param Window_BattleGridTacticsCommand_SwapMember
 * @text Swap Member
 * @parent Window_BattleGridTacticsCommands
 *
 * @param CommandName_SwapMember:str
 * @text Command Name
 * @parent Window_BattleGridTacticsCommand_SwapMember
 * @desc Determines how this command appears in-game.
 * You may use text codes.
 * @default \I[75]Swap Character
 *
 * @param HelpDesc_SwapMember:json
 * @text Help Description
 * @parent Window_BattleGridTacticsCommand_SwapMember
 * @type note
 * @desc Help description used when this command is selected.
 * @default "Switches character for a different party member"
 *
 * @param ShowCommand_SwapMember:eval
 * @text Show Command?
 * @parent Window_BattleGridTacticsCommand_SwapMember
 * @type boolean
 * @on Show Command
 * @off Hide Command
 * @desc Show this command in the Tactics Command Window?
 * @default true
 * 
 * @param Window_BattleGridTacticsCommand_AddMember
 * @text Add Member
 * @parent Window_BattleGridTacticsCommands
 *
 * @param CommandName_AddMember:str
 * @text Command Name
 * @parent Window_BattleGridTacticsCommand_AddMember
 * @desc Determines how this command appears in-game.
 * You may use text codes.
 * @default \I[73]Add Character
 *
 * @param HelpDesc_AddMember:json
 * @text Help Description
 * @parent Window_BattleGridTacticsCommand_AddMember
 * @type note
 * @desc Help description used when this command is selected.
 * Requires VisuMZ_2_PartySystem!
 * @default "Adds selected character to current party."
 *
 * @param ShowCommand_AddMember:eval
 * @text Show Command?
 * @parent Window_BattleGridTacticsCommand_AddMember
 * @type boolean
 * @on Show Command
 * @off Hide Command
 * @desc Show this command in the Tactics Command Window?
 * Requires VisuMZ_2_PartySystem!
 * @default true
 * 
 * @param Window_BattleGridTacticsCommand_RemoveMember
 * @text Remove Member
 * @parent Window_BattleGridTacticsCommands
 *
 * @param CommandName_RemoveMember:str
 * @text Command Name
 * @parent Window_BattleGridTacticsCommand_RemoveMember
 * @desc Determines how this command appears in-game.
 * You may use text codes.
 * @default \I[74]Move to Reserve
 *
 * @param HelpDesc_RemoveMember:json
 * @text Help Description
 * @parent Window_BattleGridTacticsCommand_RemoveMember
 * @type note
 * @desc Help description used when this command is selected.
 * Requires VisuMZ_2_PartySystem!
 * @default "Removes character from current party."
 *
 * @param ShowCommand_RemoveMember:eval
 * @text Show Command?
 * @parent Window_BattleGridTacticsCommand_RemoveMember
 * @type boolean
 * @on Show Command
 * @off Hide Command
 * @desc Show this command in the Tactics Command Window?
 * Requires VisuMZ_2_PartySystem!
 * @default true
 *
 */
//=============================================================================

const _0x4e2d80=_0x2433;(function(_0xe20af0,_0xb2dc5e){const _0x378b9a=_0x2433,_0x4f8529=_0xe20af0();while(!![]){try{const _0x2f92a1=parseInt(_0x378b9a(0x222))/0x1*(parseInt(_0x378b9a(0x6f5))/0x2)+parseInt(_0x378b9a(0x2bd))/0x3*(-parseInt(_0x378b9a(0x694))/0x4)+-parseInt(_0x378b9a(0x6b6))/0x5*(-parseInt(_0x378b9a(0x363))/0x6)+-parseInt(_0x378b9a(0x17d))/0x7+parseInt(_0x378b9a(0x370))/0x8*(parseInt(_0x378b9a(0x1f3))/0x9)+-parseInt(_0x378b9a(0x61b))/0xa*(-parseInt(_0x378b9a(0x6e5))/0xb)+-parseInt(_0x378b9a(0x53b))/0xc*(parseInt(_0x378b9a(0x569))/0xd);if(_0x2f92a1===_0xb2dc5e)break;else _0x4f8529['push'](_0x4f8529['shift']());}catch(_0x5cce40){_0x4f8529['push'](_0x4f8529['shift']());}}}(_0xef79,0x6d075));var label=_0x4e2d80(0x398),tier=tier||0x0,dependencies=[_0x4e2d80(0x49e),_0x4e2d80(0x5a6),_0x4e2d80(0x591)],pluginData=$plugins[_0x4e2d80(0x28a)](function(_0x24ca7b){const _0x571557=_0x4e2d80;return _0x24ca7b[_0x571557(0x604)]&&_0x24ca7b[_0x571557(0x2c7)][_0x571557(0x314)]('['+label+']');})[0x0];VisuMZ[label][_0x4e2d80(0x531)]=VisuMZ[label][_0x4e2d80(0x531)]||{},VisuMZ[_0x4e2d80(0x56a)]=function(_0x2e2a0a,_0xaab101){const _0x1a1771=_0x4e2d80;for(const _0x2e4609 in _0xaab101){if(_0x2e4609[_0x1a1771(0x240)](/(.*):(.*)/i)){const _0x150986=String(RegExp['$1']),_0x5f546f=String(RegExp['$2'])[_0x1a1771(0x53a)]()[_0x1a1771(0x373)]();let _0x1911d0,_0x569f47,_0x2f2b30;switch(_0x5f546f){case _0x1a1771(0x5aa):_0x1911d0=_0xaab101[_0x2e4609]!==''?Number(_0xaab101[_0x2e4609]):0x0;break;case _0x1a1771(0x5f3):_0x569f47=_0xaab101[_0x2e4609]!==''?JSON[_0x1a1771(0x5ca)](_0xaab101[_0x2e4609]):[],_0x1911d0=_0x569f47[_0x1a1771(0x335)](_0x518de7=>Number(_0x518de7));break;case _0x1a1771(0x409):_0x1911d0=_0xaab101[_0x2e4609]!==''?eval(_0xaab101[_0x2e4609]):null;break;case _0x1a1771(0x6d3):_0x569f47=_0xaab101[_0x2e4609]!==''?JSON[_0x1a1771(0x5ca)](_0xaab101[_0x2e4609]):[],_0x1911d0=_0x569f47['map'](_0x786018=>eval(_0x786018));break;case'JSON':_0x1911d0=_0xaab101[_0x2e4609]!==''?JSON[_0x1a1771(0x5ca)](_0xaab101[_0x2e4609]):'';break;case _0x1a1771(0x1fb):_0x569f47=_0xaab101[_0x2e4609]!==''?JSON[_0x1a1771(0x5ca)](_0xaab101[_0x2e4609]):[],_0x1911d0=_0x569f47[_0x1a1771(0x335)](_0x16e45c=>JSON['parse'](_0x16e45c));break;case _0x1a1771(0x2a5):_0x1911d0=_0xaab101[_0x2e4609]!==''?new Function(JSON[_0x1a1771(0x5ca)](_0xaab101[_0x2e4609])):new Function('return\x200');break;case _0x1a1771(0x6a7):_0x569f47=_0xaab101[_0x2e4609]!==''?JSON['parse'](_0xaab101[_0x2e4609]):[],_0x1911d0=_0x569f47[_0x1a1771(0x335)](_0x17da60=>new Function(JSON['parse'](_0x17da60)));break;case _0x1a1771(0x459):_0x1911d0=_0xaab101[_0x2e4609]!==''?String(_0xaab101[_0x2e4609]):'';break;case'ARRAYSTR':_0x569f47=_0xaab101[_0x2e4609]!==''?JSON[_0x1a1771(0x5ca)](_0xaab101[_0x2e4609]):[],_0x1911d0=_0x569f47[_0x1a1771(0x335)](_0x2e5ffe=>String(_0x2e5ffe));break;case _0x1a1771(0x375):_0x2f2b30=_0xaab101[_0x2e4609]!==''?JSON[_0x1a1771(0x5ca)](_0xaab101[_0x2e4609]):{},_0x1911d0=VisuMZ[_0x1a1771(0x56a)]({},_0x2f2b30);break;case _0x1a1771(0x499):_0x569f47=_0xaab101[_0x2e4609]!==''?JSON[_0x1a1771(0x5ca)](_0xaab101[_0x2e4609]):[],_0x1911d0=_0x569f47[_0x1a1771(0x335)](_0x35523b=>VisuMZ[_0x1a1771(0x56a)]({},JSON[_0x1a1771(0x5ca)](_0x35523b)));break;default:continue;}_0x2e2a0a[_0x150986]=_0x1911d0;}}return _0x2e2a0a;},(_0x49d20d=>{const _0x17387a=_0x4e2d80,_0x1be98b=_0x49d20d[_0x17387a(0x427)];for(const _0x26f0fc of dependencies){if(!Imported[_0x26f0fc]){alert(_0x17387a(0x342)[_0x17387a(0x3bb)](_0x1be98b,_0x26f0fc)),SceneManager[_0x17387a(0x5f1)]();break;}}const _0x339336=_0x49d20d[_0x17387a(0x2c7)];if(_0x339336[_0x17387a(0x240)](/\[Version[ ](.*?)\]/i)){const _0x754824=Number(RegExp['$1']);_0x754824!==VisuMZ[label][_0x17387a(0x555)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x1be98b,_0x754824)),SceneManager[_0x17387a(0x5f1)]());}if(_0x339336['match'](/\[Tier[ ](\d+)\]/i)){const _0x1e4ed1=Number(RegExp['$1']);_0x1e4ed1<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x1be98b,_0x1e4ed1,tier)),SceneManager[_0x17387a(0x5f1)]()):tier=Math[_0x17387a(0x23c)](_0x1e4ed1,tier);}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x49d20d['parameters']);})(pluginData),VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x2df)]=function(_0x624e68){const _0xe41993=_0x4e2d80;_0x624e68=_0x624e68['toUpperCase']()[_0xe41993(0x373)]();if(_0x624e68===_0xe41993(0x408))return!![];else{if(_0x624e68===_0xe41993(0x708))return![];else{if(_0x624e68===_0xe41993(0x355))return BattleManager[_0xe41993(0x37f)]&&BattleManager[_0xe41993(0x37f)]['isActor']();else{if(_0x624e68==='OPPONENT')return BattleManager[_0xe41993(0x37f)]&&BattleManager[_0xe41993(0x37f)]['isEnemy']();}}}return![];},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x228)]=function(_0x192fd2,_0x542a24){const _0x28ffaf=_0x4e2d80,_0x40a5b5=BattleManager[_0x28ffaf(0x37f)]&&BattleManager[_0x28ffaf(0x43a)]&&BattleManager['_action'][_0x28ffaf(0x706)](),_0x4d26fd=BattleManager[_0x28ffaf(0x37f)]&&BattleManager['_action']&&BattleManager[_0x28ffaf(0x43a)][_0x28ffaf(0x16c)](),_0x475488=BattleManager['_subject']&&BattleManager[_0x28ffaf(0x43a)]&&BattleManager[_0x28ffaf(0x43a)]['isForBattleGridFlank']();if(_0x192fd2['UseActionSelectNode']&&_0x40a5b5)return BattleManager[_0x28ffaf(0x43a)]['getSelectedBattleGridNode']();else{if(_0x542a24&&_0x192fd2[_0x28ffaf(0x1ac)]&&_0x4d26fd)return BattleManager['_action'][_0x28ffaf(0x549)]();else{if(_0x542a24&&_0x192fd2['UseActionSelectNode']&&_0x475488)return BattleManager[_0x28ffaf(0x43a)][_0x28ffaf(0x1e3)]();else return _0x192fd2[_0x28ffaf(0x1ac)]&&!_0x40a5b5?BattleManager[_0x28ffaf(0x43a)][_0x28ffaf(0x4d2)]():{'forActor':VisuMZ[_0x28ffaf(0x398)][_0x28ffaf(0x2df)](_0x192fd2[_0x28ffaf(0x33b)]),'rank':_0x192fd2['Rank'][_0x28ffaf(0x62d)](0x1,BattleManager[_0x28ffaf(0x646)]()),'flank':_0x192fd2['Flank'][_0x28ffaf(0x62d)](0x1,BattleManager[_0x28ffaf(0x21f)]())};}}},PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],_0x4e2d80(0x2d5),_0x5e774f=>{const _0x3fa84b=_0x4e2d80;VisuMZ[_0x3fa84b(0x398)][_0x3fa84b(0x2d5)](_0x5e774f);}),VisuMZ[_0x4e2d80(0x398)]['ActSeq_Grid_ActionAnimationAtNode']=function(_0x48b258){const _0x383a2c=_0x4e2d80;if(!$gameParty[_0x383a2c(0x315)]())return;if(!BattleManager['isUsingGridSystem']())return;VisuMZ['ConvertParams'](_0x48b258,_0x48b258);const _0x34627a=BattleManager['_action'],_0xcda4de=BattleManager[_0x383a2c(0x37f)];if(!_0x34627a||!_0xcda4de)return;if(!_0x34627a[_0x383a2c(0x633)]())return;const _0x47cd54=_0x34627a[_0x383a2c(0x633)]()[_0x383a2c(0x24a)],_0x3c793c=![],_0xac5c1e=![],_0x51802d=VisuMZ['BattleGridSystem']['ParseTargetNodeData'](_0x48b258,!![]),_0x5ddf2e=_0x51802d[_0x383a2c(0x5d3)],_0x51fc3c=_0x51802d[_0x383a2c(0x352)],_0x38e64f=_0x51802d[_0x383a2c(0x62f)],_0x168db8=_0x48b258[_0x383a2c(0x4c5)]||0x0,_0x4ec865=_0x48b258[_0x383a2c(0x1bc)]||0x0;$gameTemp[_0x383a2c(0x1e2)](_0x5ddf2e,_0x51fc3c,_0x38e64f,_0x168db8,_0x4ec865,_0x47cd54,_0x3c793c,_0xac5c1e);},PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],'ActSeq_Grid_AnimationTypeAtNode',_0x1670be=>{const _0x235448=_0x4e2d80;VisuMZ[_0x235448(0x398)][_0x235448(0x6fd)](_0x1670be);}),VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x6fd)]=function(_0x409420){const _0x5eafc6=_0x4e2d80;if(!$gameParty[_0x5eafc6(0x315)]())return;if(!BattleManager[_0x5eafc6(0x2ae)]())return;VisuMZ[_0x5eafc6(0x56a)](_0x409420,_0x409420);const _0x4cccde=BattleManager[_0x5eafc6(0x37f)];if(!_0x4cccde)return;let _0x40f3a3=0x1;const _0x5db64b=_0x409420[_0x5eafc6(0x3e1)];switch(_0x5db64b['toLowerCase']()){case _0x5eafc6(0x73e):_0x40f3a3=_0x4cccde[_0x5eafc6(0x327)](_0x409420[_0x5eafc6(0x71e)]);break;case'guard':const _0x52a57b=$dataSkills[_0x4cccde[_0x5eafc6(0x43d)]()];_0x40f3a3=_0x52a57b?_0x52a57b['animationId']:0x0;break;case _0x5eafc6(0x633):const _0x4c905b=$dataItems[_0x409420[_0x5eafc6(0x464)]];_0x40f3a3=_0x4c905b?_0x4c905b[_0x5eafc6(0x24a)]:0x0;break;case _0x5eafc6(0x29f):const _0x4824af=$dataSkills[_0x409420[_0x5eafc6(0x1f8)]];_0x40f3a3=_0x4824af?_0x4824af[_0x5eafc6(0x24a)]:0x0;break;}const _0x19c36b=![],_0x522520=![],_0x1f05c3=VisuMZ['BattleGridSystem'][_0x5eafc6(0x228)](_0x409420,!![]),_0x64bfc6=_0x1f05c3[_0x5eafc6(0x5d3)],_0x3d02e2=_0x1f05c3[_0x5eafc6(0x352)],_0xe40084=_0x1f05c3[_0x5eafc6(0x62f)],_0x32933e=_0x409420['OffsetX']||0x0,_0x4d4b20=_0x409420[_0x5eafc6(0x1bc)]||0x0;$gameTemp[_0x5eafc6(0x1e2)](_0x64bfc6,_0x3d02e2,_0xe40084,_0x32933e,_0x4d4b20,_0x40f3a3,_0x19c36b,_0x522520);},PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],_0x4e2d80(0x622),_0x5f0402=>{const _0x532d39=_0x4e2d80;VisuMZ['BattleGridSystem'][_0x532d39(0x622)](_0x5f0402);}),VisuMZ[_0x4e2d80(0x398)]['ActSeq_Grid_AnimationIDAtNode']=function(_0x20174c){const _0x48c222=_0x4e2d80;if(!$gameParty[_0x48c222(0x315)]())return;if(!BattleManager[_0x48c222(0x2ae)]())return;VisuMZ[_0x48c222(0x56a)](_0x20174c,_0x20174c);const _0x5b036d=_0x20174c[_0x48c222(0x734)]||0x1,_0xf6d2c3=_0x20174c['Mirror'],_0x149c40=_0x20174c[_0x48c222(0x3ff)],_0x166603=VisuMZ[_0x48c222(0x398)][_0x48c222(0x228)](_0x20174c,!![]),_0x2d558e=_0x166603['forActor'],_0x1efe44=_0x166603[_0x48c222(0x352)],_0x3b6083=_0x166603[_0x48c222(0x62f)],_0x61a6a1=_0x20174c[_0x48c222(0x4c5)]||0x0,_0x2c3507=_0x20174c['OffsetY']||0x0;$gameTemp[_0x48c222(0x1e2)](_0x2d558e,_0x1efe44,_0x3b6083,_0x61a6a1,_0x2c3507,_0x5b036d,_0xf6d2c3,_0x149c40);},PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],_0x4e2d80(0x517),_0x26b11c=>{const _0x366904=_0x4e2d80;VisuMZ[_0x366904(0x398)][_0x366904(0x517)](_0x26b11c);}),VisuMZ['BattleGridSystem'][_0x4e2d80(0x517)]=function(_0xbf4078){const _0x365ae1=_0x4e2d80;if(!$gameParty[_0x365ae1(0x315)]())return;if(!BattleManager['isUsingGridSystem']())return;VisuMZ[_0x365ae1(0x56a)](_0xbf4078,_0xbf4078);const _0x55bd13=Number(_0xbf4078[_0x365ae1(0x734)])||0x1,_0x3267c6=_0xbf4078[_0x365ae1(0x65b)],_0x5bcfc4=_0xbf4078[_0x365ae1(0x3ff)],_0x31562b=VisuMZ[_0x365ae1(0x398)][_0x365ae1(0x228)](_0xbf4078,!![]),_0x490e70=_0x31562b[_0x365ae1(0x5d3)],_0x45b74e=_0x31562b[_0x365ae1(0x352)],_0x2beb27=_0x31562b[_0x365ae1(0x62f)],_0x1c3c2f=_0xbf4078[_0x365ae1(0x4c5)]||0x0,_0x42015d=_0xbf4078[_0x365ae1(0x1bc)]||0x0;$gameTemp['requestAnimationAtNode'](_0x490e70,_0x45b74e,_0x2beb27,_0x1c3c2f,_0x42015d,_0x55bd13,_0x3267c6,_0x5bcfc4);},PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],'ActSeq_Grid_AddPassiveStatesToNode',_0x30c356=>{VisuMZ['BattleGridSystem']['ActSeq_Grid_AddPassiveStatesToNode'](_0x30c356);}),VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x285)]=function(_0x24126b){const _0x5c3e2c=_0x4e2d80;if(!$gameParty[_0x5c3e2c(0x315)]())return;if(!BattleManager[_0x5c3e2c(0x2ae)]())return;VisuMZ[_0x5c3e2c(0x56a)](_0x24126b,_0x24126b);const _0x1b51b2=_0x24126b[_0x5c3e2c(0x2c2)]||[],_0x24311f=VisuMZ[_0x5c3e2c(0x398)][_0x5c3e2c(0x228)](_0x24126b),_0xfe3c65=BattleManager[_0x5c3e2c(0x43a)];if(!_0xfe3c65)return;const _0xf8fa14=_0xfe3c65[_0x5c3e2c(0x424)](_0x24311f);for(const _0x19f11d of _0x1b51b2){for(const _0x110038 of _0xf8fa14){$gameTroop[_0x5c3e2c(0x1e5)](_0x110038[_0x5c3e2c(0x5d3)],_0x110038[_0x5c3e2c(0x352)],_0x110038[_0x5c3e2c(0x62f)],_0x19f11d);}}},PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],_0x4e2d80(0x6bd),_0x8d73e3=>{const _0x21b4dc=_0x4e2d80;VisuMZ[_0x21b4dc(0x398)][_0x21b4dc(0x6bd)](_0x8d73e3);}),VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x6bd)]=function(_0x3caac1){const _0x104879=_0x4e2d80;if(!$gameParty[_0x104879(0x315)]())return;if(!BattleManager[_0x104879(0x2ae)]())return;VisuMZ[_0x104879(0x56a)](_0x3caac1,_0x3caac1);const _0xac9bb5=_0x3caac1['SkillID']||0x1,_0x4eae18=VisuMZ[_0x104879(0x398)]['ParseTargetNodeData'](_0x3caac1),_0x24f179=BattleManager[_0x104879(0x43a)];if(!_0x24f179)return;const _0x543bd6=_0x24f179[_0x104879(0x424)](_0x4eae18);for(const _0x4d0fdf of _0x543bd6){const _0x299585=_0x4d0fdf[_0x104879(0x5d3)]?$gameParty:$gameTroop;if(_0x299585['anyAliveMembersAtGridNode'](_0x4d0fdf[_0x104879(0x352)],_0x4d0fdf[_0x104879(0x62f)]))return;$gameTroop[_0x104879(0x6b5)](_0x4d0fdf[_0x104879(0x5d3)],_0x4d0fdf['rank'],_0x4d0fdf[_0x104879(0x62f)],_0xac9bb5,BattleManager['_subject']);}},PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],'ActSeq_Grid_ClearPassiveStatesFromNode',_0x1e78f1=>{const _0x2440fe=_0x4e2d80;VisuMZ[_0x2440fe(0x398)][_0x2440fe(0x44f)](_0x1e78f1);}),VisuMZ[_0x4e2d80(0x398)]['ActSeq_Grid_ClearPassiveStatesFromNode']=function(_0x1b421f){const _0xf9cba0=_0x4e2d80;if(!$gameParty[_0xf9cba0(0x315)]())return;if(!BattleManager[_0xf9cba0(0x2ae)]())return;VisuMZ[_0xf9cba0(0x56a)](_0x1b421f,_0x1b421f);const _0x74d54e=VisuMZ[_0xf9cba0(0x398)]['ParseTargetNodeData'](_0x1b421f),_0x72e80e=BattleManager[_0xf9cba0(0x43a)];if(!_0x72e80e)return;const _0xb960a6=_0x72e80e['getAreaOfEffectNodes'](_0x74d54e);for(const _0x5524a3 of _0xb960a6){$gameTroop[_0xf9cba0(0x1e9)](_0x5524a3[_0xf9cba0(0x5d3)],_0x5524a3[_0xf9cba0(0x352)],_0x5524a3[_0xf9cba0(0x62f)]);}},PluginManager[_0x4e2d80(0x5d6)](pluginData['name'],_0x4e2d80(0x552),_0x53bf31=>{const _0x8d51bb=_0x4e2d80;VisuMZ[_0x8d51bb(0x398)][_0x8d51bb(0x552)](_0x53bf31);}),VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x552)]=function(_0xb71661){const _0xf65d5c=_0x4e2d80;if(!$gameParty[_0xf65d5c(0x315)]())return;if(!BattleManager[_0xf65d5c(0x2ae)]())return;VisuMZ[_0xf65d5c(0x56a)](_0xb71661,_0xb71661);const _0x97e9ed=VisuMZ[_0xf65d5c(0x200)](_0xb71661[_0xf65d5c(0x736)]),_0xdc4a98=_0xb71661[_0xf65d5c(0x71f)][_0xf65d5c(0x53a)]()['trim'](),_0x228bb5=_0xb71661['Direction'][_0xf65d5c(0x53a)]()[_0xf65d5c(0x373)](),_0x3a366b=Math[_0xf65d5c(0x23c)](_0xb71661[_0xf65d5c(0x4e5)]||0x1,0x1),_0x46b8d6=Math[_0xf65d5c(0x23c)](_0xb71661['Duration']||0x1,0x1),_0xe83db9=_0xb71661[_0xf65d5c(0x635)];VisuMZ[_0xf65d5c(0x398)][_0xf65d5c(0x391)](_0x97e9ed,_0x228bb5);for(const _0x6cffdb of _0x97e9ed){const _0x4f0c83=_0x6cffdb[_0xf65d5c(0x6a1)](),_0x12fb3c=_0x6cffdb['gridRank'](),_0x5ad274=_0x6cffdb['gridFlank'](),_0x34b8a8=VisuMZ[_0xf65d5c(0x398)][_0xf65d5c(0x619)](_0xdc4a98,_0x228bb5,_0x3a366b,_0x6cffdb,_0x4f0c83,_0x12fb3c,_0x5ad274);if(!_0x34b8a8['canMove']){if(_0x34b8a8['crashed'])VisuMZ[_0xf65d5c(0x398)][_0xf65d5c(0x445)](_0x6cffdb,_0x34b8a8[_0xf65d5c(0x699)],0x0);else{}continue;}_0x34b8a8[_0xf65d5c(0x46c)]&&_0x34b8a8[_0xf65d5c(0x46c)][_0xf65d5c(0x620)](_0x34b8a8[_0xf65d5c(0x5cf)],_0x34b8a8['switchFlank'],_0x46b8d6,![]);const _0x46d544=_0x6cffdb[_0xf65d5c(0x4ba)](),_0x3c774b=_0x6cffdb['gridFlank']();_0x6cffdb[_0xf65d5c(0x620)](_0x34b8a8[_0xf65d5c(0x179)],_0x34b8a8[_0xf65d5c(0x395)],_0x46b8d6,_0xe83db9);const _0x248000=_0x6cffdb[_0xf65d5c(0x4ba)](),_0x17b0e7=_0x6cffdb[_0xf65d5c(0x454)](),_0x2eec26=Math[_0xf65d5c(0x6af)](_0x46d544-_0x248000)+Math[_0xf65d5c(0x6af)](_0x3c774b-_0x17b0e7);if(_0x34b8a8[_0xf65d5c(0x3cd)]){let _0x6a410e=0x3e8/0x3c*_0x46b8d6;if(_0x34b8a8['crashTarget'])VisuMZ['BattleGridSystem'][_0xf65d5c(0x445)](_0x6cffdb,_0x34b8a8[_0xf65d5c(0x699)],_0x6a410e);else{}}}},PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],'ActSeq_Grid_PullToTargetNode',_0x2016a4=>{const _0x4df416=_0x4e2d80;VisuMZ[_0x4df416(0x398)][_0x4df416(0x18f)](_0x2016a4);}),VisuMZ[_0x4e2d80(0x398)]['ActSeq_Grid_PullToTargetNode']=function(_0x1789f2){const _0x357286=_0x4e2d80;if(!$gameParty[_0x357286(0x315)]())return;if(!BattleManager[_0x357286(0x2ae)]())return;VisuMZ[_0x357286(0x56a)](_0x1789f2,_0x1789f2);const _0xb7d2f6=VisuMZ[_0x357286(0x398)]['ParseTargetNodeData'](_0x1789f2),_0x1b5773=_0xb7d2f6[_0x357286(0x5d3)],_0x90e7d5=_0xb7d2f6[_0x357286(0x352)],_0x1a16fe=_0xb7d2f6[_0x357286(0x62f)],_0x349108=Math[_0x357286(0x23c)](_0x1789f2[_0x357286(0x295)]||0x1,0x1),_0x2327cf=Math['max'](_0x1789f2[_0x357286(0x34f)]||0x1,0x1);VisuMZ['BattleGridSystem']['processBattleGridPullToNodeEffect'](_0x1b5773,_0x90e7d5,_0x1a16fe,_0x349108,_0x2327cf);},PluginManager['registerCommand'](pluginData[_0x4e2d80(0x427)],'ActSeq_Grid_PushFromTargetNode',_0x567c02=>{const _0x18c03c=_0x4e2d80;VisuMZ[_0x18c03c(0x398)][_0x18c03c(0x5d9)](_0x567c02);}),VisuMZ['BattleGridSystem'][_0x4e2d80(0x5d9)]=function(_0x2dac76){const _0x54fb65=_0x4e2d80;if(!$gameParty[_0x54fb65(0x315)]())return;if(!BattleManager[_0x54fb65(0x2ae)]())return;VisuMZ[_0x54fb65(0x56a)](_0x2dac76,_0x2dac76);const _0x2c229c=VisuMZ['BattleGridSystem'][_0x54fb65(0x228)](_0x2dac76),_0x3e9d18=_0x2c229c[_0x54fb65(0x5d3)],_0x3533d7=_0x2c229c[_0x54fb65(0x352)],_0x36b79d=_0x2c229c['flank'],_0x397b84=Math[_0x54fb65(0x23c)](_0x2dac76[_0x54fb65(0x295)]||0x1,0x1),_0x3b0ed7=Math[_0x54fb65(0x23c)](_0x2dac76[_0x54fb65(0x34f)]||0x1,0x1);VisuMZ[_0x54fb65(0x398)]['processBattleGridPushFromNodeEffect'](_0x3e9d18,_0x3533d7,_0x36b79d,_0x397b84,_0x3b0ed7);},PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],'ActSeq_Grid_RemovePassiveStatesFromNode',_0x56009f=>{const _0x6de03e=_0x4e2d80;VisuMZ['BattleGridSystem'][_0x6de03e(0x2b5)](_0x56009f);}),VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x2b5)]=function(_0x14cae6){const _0x25a56d=_0x4e2d80;if(!$gameParty[_0x25a56d(0x315)]())return;if(!BattleManager[_0x25a56d(0x2ae)]())return;VisuMZ[_0x25a56d(0x56a)](_0x14cae6,_0x14cae6);const _0x339dd1=_0x14cae6['StateIDs']||[],_0x3dd051=VisuMZ[_0x25a56d(0x398)]['ParseTargetNodeData'](_0x14cae6),_0x2ff0b7=BattleManager[_0x25a56d(0x43a)];if(!_0x2ff0b7)return;const _0x2ee49a=_0x2ff0b7[_0x25a56d(0x424)](_0x3dd051);for(const _0x3d4b12 of _0x339dd1){for(const _0x1bd0a4 of _0x2ee49a){$gameTroop[_0x25a56d(0x1cd)](_0x1bd0a4['forActor'],_0x1bd0a4['rank'],_0x1bd0a4[_0x25a56d(0x62f)],_0x3d4b12);}}},PluginManager['registerCommand'](pluginData[_0x4e2d80(0x427)],_0x4e2d80(0x311),_0xe6e036=>{const _0x504e3f=_0x4e2d80;VisuMZ[_0x504e3f(0x398)][_0x504e3f(0x311)](_0xe6e036);}),VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x311)]=function(_0x516452){const _0x28bd69=_0x4e2d80;if(!$gameParty[_0x28bd69(0x315)]())return;if(!BattleManager[_0x28bd69(0x2ae)]())return;VisuMZ[_0x28bd69(0x56a)](_0x516452,_0x516452);const _0x49e739=VisuMZ[_0x28bd69(0x398)][_0x28bd69(0x228)](_0x516452),_0x2accef=BattleManager[_0x28bd69(0x43a)];if(!_0x2accef)return;const _0x445adc=_0x2accef[_0x28bd69(0x424)](_0x49e739);for(const _0x3fac8e of _0x445adc){$gameTroop['clearBattleGridNodeTrigger'](_0x3fac8e[_0x28bd69(0x5d3)],_0x3fac8e['rank'],_0x3fac8e['flank']);}},PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],_0x4e2d80(0x67c),_0x39e179=>{const _0x2c4258=_0x4e2d80;VisuMZ['BattleGridSystem'][_0x2c4258(0x67c)](_0x39e179);}),VisuMZ[_0x4e2d80(0x398)]['ActSeq_Grid_TeleportToNode']=function(_0x52bdeb){const _0x33f2be=_0x4e2d80;if(!$gameParty['inBattle']())return;if(!BattleManager[_0x33f2be(0x2ae)]())return;if(!BattleManager[_0x33f2be(0x37f)])return;if(!BattleManager[_0x33f2be(0x43a)])return;VisuMZ[_0x33f2be(0x56a)](_0x52bdeb,_0x52bdeb);const _0x2be4b6=VisuMZ[_0x33f2be(0x398)][_0x33f2be(0x228)](_0x52bdeb),_0x11de43=_0x2be4b6[_0x33f2be(0x5d3)],_0x29e393=_0x2be4b6[_0x33f2be(0x352)],_0x1beff0=_0x2be4b6[_0x33f2be(0x62f)];BattleManager[_0x33f2be(0x43a)][_0x33f2be(0x69c)](_0x11de43,_0x29e393,_0x1beff0,0x1);},PluginManager['registerCommand'](pluginData['name'],'ActSeq_Grid_TraverseToNode',_0x2482b7=>{const _0x5b3647=_0x4e2d80;VisuMZ[_0x5b3647(0x398)]['ActSeq_Grid_TraverseToNode'](_0x2482b7);}),VisuMZ[_0x4e2d80(0x398)]['ActSeq_Grid_TraverseToNode']=function(_0x187aea){const _0x5d325e=_0x4e2d80;if(!$gameParty['inBattle']())return;if(!BattleManager[_0x5d325e(0x2ae)]())return;if(!BattleManager['_subject'])return;if(!BattleManager['_action'])return;VisuMZ['ConvertParams'](_0x187aea,_0x187aea);const _0x59708b=VisuMZ[_0x5d325e(0x398)][_0x5d325e(0x228)](_0x187aea),_0x337ed4=_0x59708b[_0x5d325e(0x5d3)],_0x39010e=_0x59708b[_0x5d325e(0x352)],_0x5349f9=_0x59708b[_0x5d325e(0x62f)],_0x5d14a6=Math[_0x5d325e(0x23c)](_0x187aea[_0x5d325e(0x34f)]||0x1,0x1);BattleManager[_0x5d325e(0x43a)]['processBattleGridTransferNodeEffect'](_0x337ed4,_0x39010e,_0x5349f9,_0x5d14a6);},PluginManager[_0x4e2d80(0x5d6)](pluginData['name'],_0x4e2d80(0x37b),_0x2e18ac=>{const _0x56c384=_0x4e2d80;if(SceneManager[_0x56c384(0x2cb)]())return;if($gameParty['inBattle']())return;if(!BattleManager[_0x56c384(0x38e)]())return;VisuMZ[_0x56c384(0x56a)](_0x2e18ac,_0x2e18ac),SceneManager['push'](Scene_BattleGridTactics),Window_BattleGridTactics[_0x56c384(0x6a9)]['loadFaceImages']();}),PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],_0x4e2d80(0x404),_0x3501bf=>{const _0x4d10ab=_0x4e2d80;VisuMZ[_0x4d10ab(0x56a)](_0x3501bf,_0x3501bf),$gameSystem[_0x4d10ab(0x720)](_0x3501bf[_0x4d10ab(0x4b4)]);}),PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],'SystemShowGridTacticsMenu',_0x3aac39=>{const _0x3ba9f4=_0x4e2d80;VisuMZ[_0x3ba9f4(0x56a)](_0x3aac39,_0x3aac39),$gameSystem['setMainMenuBattleGridTacticsVisible'](_0x3aac39['Show']);}),PluginManager[_0x4e2d80(0x5d6)](pluginData['name'],_0x4e2d80(0x39e),_0x81572e=>{const _0x321cfc=_0x4e2d80;if($gameParty[_0x321cfc(0x315)]())return;VisuMZ[_0x321cfc(0x56a)](_0x81572e,_0x81572e);const _0x20d750=_0x81572e['Tactics']||{};$gameParty[_0x321cfc(0x70e)](_0x20d750);}),PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],_0x4e2d80(0x2fb),_0x35fb5e=>{const _0x30dc19=_0x4e2d80;if($gameParty['inBattle']())return;VisuMZ[_0x30dc19(0x56a)](_0x35fb5e,_0x35fb5e);let _0x58cf1e={};try{_0x58cf1e=_0x35fb5e[_0x30dc19(0x191)]()||{};}catch(_0x54f665){console[_0x30dc19(0x4d0)](_0x30dc19(0x558)),console[_0x30dc19(0x4d0)](_0x54f665);return;}const _0xaccadd={};for(let _0x31ee90=0x0;_0x31ee90<0x14;_0x31ee90++){const _0xf431f=(_0x58cf1e[_0x31ee90]?_0x58cf1e[_0x31ee90][_0x30dc19(0x352)]:0x0)||0x0,_0x2b536e=(_0x58cf1e[_0x31ee90]?_0x58cf1e[_0x31ee90][_0x30dc19(0x62f)]:0x0)||0x0;_0xaccadd[_0x30dc19(0x437)['format'](_0x31ee90)]=_0xf431f[_0x30dc19(0x62d)](0x0,0xa),_0xaccadd['PartyIndex%1_Flank'[_0x30dc19(0x3bb)](_0x31ee90)]=_0x2b536e[_0x30dc19(0x62d)](0x0,0xa);}$gameParty['createForcedBattleGridTactics'](_0xaccadd);}),PluginManager[_0x4e2d80(0x5d6)](pluginData[_0x4e2d80(0x427)],_0x4e2d80(0x24c),_0x67938b=>{const _0x4d573e=_0x4e2d80;if($gameParty[_0x4d573e(0x315)]())return;$gameParty[_0x4d573e(0x462)]();}),VisuMZ['BattleGridSystem'][_0x4e2d80(0x329)]={'EnableGrid':/<(?:|BATTLE )GRID>/i,'DisableGrid':/<NO (?:|BATTLE )GRID>/i,'NodePassiveStates':/<(ACTOR|ENEMY|PARTY|TROOP) NODE (\d+),[ ]*(\d+) PASSIVE STATE(?:S|):[ ](.*)>/gi,'NodeTrigger':/<(ACTOR|ENEMY|PARTY|TROOP) NODE (\d+),[ ]*(\d+) (?:TRIGGER|TRAP|REACT):[ ](.*)>/gi,'StartRanks':/<START(?:|ING) (?:GRID |)RANK(?:|S):[ ](.*)>/i,'StartFlanks':/<START(?:|ING) (?:GRID |)FLANK(?:|S):[ ](.*)>/i,'GridSize':/<(?:GRID |)SIZE:[ ](\d+)[ ]*X[ ]*(\d+)>/i,'MoveRangeLine':/<(?:GRID |)MOVE(?:MENT|) (?:RANGE|BASE):[ ](.*)>/gi,'MoveRangeBatch':/<(?:GRID |)MOVE(?:MENT|) (?:RANGE|BASE)>\s*([\s\S]*)\s*<\/(?:GRID |)MOVE(?:MENT|) (?:RANGE|BASE)>/i,'NoGridMove':/<NO GRID MOVE(?:MENT|)>/i,'SealGridMove':/<SEAL GRID MOVE(?:MENT|)>/i,'CrashSelfDmgRate':/<CRASH SELF (?:DMG|DAMAGE) RATE:[ ](\d+)([%％])>/i,'CrashSelfDmgFlat':/<CRASH SELF (?:DMG|DAMAGE) (?:FLAT|BONUS):[ ]([\+\-]\d+)>/i,'CrashTargetDmgRate':/<CRASH TARGET (?:DMG|DAMAGE) RATE:[ ](\d+)([%％])>/i,'CrashTargetDmgFlat':/<CRASH TARGET (?:DMG|DAMAGE) (?:FLAT|BONUS):[ ]([\+\-]\d+)>/i,'RequireRank':/<REQUIRE RANK(?:S|):[ ](.*)>/i,'RequireFlank':/<REQUIRE FLANK(?:S|):[ ](.*)>/i,'RequireNotRank':/<REQUIRE NOT RANK(?:S|):[ ](.*)>/i,'RequireNotFlank':/<REQUIRE NOT FLANK(?:S|):[ ](.*)>/i,'RequireFrontRank':/<REQUIRE FRONT RANK>/i,'RequireBackRank':/<REQUIRE BACK RANK>/i,'RequireTopFlank':/<REQUIRE TOP FLANK>/i,'RequireBottomFlank':/<REQUIRE BOTTOM FLANK>/i,'UserMoveNode':/<(.*)[ ]MOVE USER NODE (.*):[ ](\d+)>/i,'UserMoveSilent':/<SILENT MOVE USER NODE>/i,'UserMoveVisual':/<VISUAL MOVE USER NODE>/i,'UserMoveDuration':/<MOVE USER NODE DURATION:[ ](\d+)>/i,'TargetMoveNode':/<(.*)[ ]MOVE TARGET(?:S|) NODE (.*):[ ](\d+)>/i,'TargetMoveSilent':/<SILENT MOVE TARGET(?:S|) NODE>/i,'TargetMoveVisual':/<VISUAL MOVE TARGET(?:S|) NODE>/i,'TargetMoveDuration':/<MOVE TARGET(?:S|) NODE DURATION:[ ](\d+)>/i,'GridDistDamage':/<GRID DISTANCE DAMAGE PER NODE:[ ](\d+)([%％])[ ](.*)>/i,'AllowedRanks':/<TARGET ONLY RANK(?:S|):[ ](.*)>/i,'AllowedFlanks':/<TARGET ONLY FLANKS(?:S|):[ ](.*)>/i,'AllowedSameRank':/<TARGET (?:ONLY |)SAME RANK(?: ONLY|)>/i,'AllowedSameFlank':/<TARGET (?:ONLY |)SAME FLANK(?: ONLY|)>/i,'AllowedFrontRank':/<TARGET (?:ONLY |)FRONT RANK(?: ONLY|)>/i,'AllowedBackRank':/<TARGET (?:ONLY |)BACK RANK(?: ONLY|)>/i,'AllowedTopFlank':/<TARGET (?:ONLY |)TOP FLANK(?: ONLY|)>/i,'AllowedBottomFlank':/<TARGET (?:ONLY |)BOTTOM FLANK(?: ONLY|)>/i,'ReqWeaponRange':/<(?:TARGET IN |USE |)WEAPON RANGE>/i,'WpnRangeGlobal':/<WEAPON RANGE[ ]*(.*)>/i,'WpnRangeRanks':/<WEAPON RANGE RANK(?:S|):[ ](.*)>/i,'WpnRangeFlanks':/<WEAPON RANGE FLANKS(?:S|):[ ](.*)>/i,'WpnRangeMelee':/<WEAPON RANGE MELEE>/i,'WpnRangeAll':/<WEAPON RANGE ALL>/i,'WpnRangeSameRank':/<WEAPON RANGE SAME RANK>/i,'WpnRangeSameFlank':/<WEAPON RANGE SAME FLANK>/i,'WpnRangeFrontRank':/<WEAPON RANGE FRONT RANK>/i,'WpnRangeBackRank':/<WEAPON RANGE BACK RANK>/i,'WpnRangeTopFlank':/<WEAPON RANGE TOP FLANK>/i,'WpnRangeBottomFlank':/<WEAPON RANGE BOTTOM FLANK>/i,'HideGridRange':/<HIDE GRID RANGE>/i,'AoeLine':/<(?:AREA OF EFFECT|AOE):[ ](.*)>/gi,'AoeBatch':/<(?:AREA OF EFFECT|AOE)>\s*([\s\S]*)\s*<\/(?:AREA OF EFFECT|AOE)>/i,'TriggerName':/<(?:TRIGGER|TRAP|REACT) NAME:[ ](.*)>/i,'TriggerIcon':/<(?:TRIGGER|TRAP|REACT) ICON:[ ](\d+)>/i,'TriggerAnimation':/<(?:TRIGGER|TRAP|REACT) (?:ANIMATION|ANI):[ ](\d+)>/i,'ClearPassivesFromNode':/<CLEAR PASSIVE STATE(?:S|) FROM TARGET NODE>/i,'AddPassiveToNode':/<ADD PASSIVE STATE(?:S|) TO TARGET NODE:[ ](.*)>/i,'RemovePassiveFromNode':/<REMOVE PASSIVE STATE(?:S|) FROM TARGET NODE:[ ](.*)>/i,'AddTriggerToNode':/<ADD TRIGGER TO TARGET NODE>/i,'ClearTriggerFromNode':/<(?:REMOVE|CLEAR) TRIGGER FROM TARGET NODE>/i,'TeleportToNode':/<TELEPORT TO TARGET NODE>/i,'TransferToNode':/<(?:TRANSFER|TRAVERSE|TRAVEL) TO TARGET NODE:[ ](\d+)[ ]FRAMES>/i,'PushFromNode':/<(?:LEVEL|LV|LVL)[ ](\d+)[ ]PUSH FROM TARGET NODE:[ ](\d+)[ ]FRAMES>/i,'PullToNode':/<(?:LEVEL|LV|LVL)[ ](\d+)[ ]PULL TO TARGET NODE:[ ](\d+)[ ]FRAMES>/i},VisuMZ[_0x4e2d80(0x398)]['Scene_Boot_onDatabaseLoaded']=Scene_Boot[_0x4e2d80(0x6a9)][_0x4e2d80(0x20b)],Scene_Boot['prototype'][_0x4e2d80(0x20b)]=function(){const _0xd580ee=_0x4e2d80;VisuMZ['BattleGridSystem'][_0xd580ee(0x215)]['call'](this);if(VisuMZ[_0xd580ee(0x1d1)][_0xd580ee(0x555)]<1.81){let _0x2ec031='';_0x2ec031+=_0xd580ee(0x25f),_0x2ec031+=_0xd580ee(0x6d2),alert(_0x2ec031),SceneManager['exit']();}if(VisuMZ[_0xd580ee(0x2ea)]['version']<1.81){let _0x404c5c='';_0x404c5c+=_0xd580ee(0x220),_0x404c5c+=_0xd580ee(0x6d2),alert(_0x404c5c),SceneManager[_0xd580ee(0x5f1)]();}if(VisuMZ[_0xd580ee(0x539)][_0xd580ee(0x555)]<1.44){let _0x521b06='';_0x521b06+=_0xd580ee(0x2a7),_0x521b06+='in\x20order\x20for\x20VisuMZ_2_BattleGridSystem\x20to\x20work.',alert(_0x521b06),SceneManager[_0xd580ee(0x5f1)]();}if(Imported[_0xd580ee(0x2d6)]&&VisuMZ[_0xd580ee(0x5e4)]['version']<1.18){let _0x3385b1='';_0x3385b1+=_0xd580ee(0x43c),_0x3385b1+=_0xd580ee(0x6d2),alert(_0x3385b1),SceneManager['exit']();}if(Imported[_0xd580ee(0x53d)]&&VisuMZ[_0xd580ee(0x4d9)][_0xd580ee(0x555)]<1.28){let _0x1d2007='';_0x1d2007+=_0xd580ee(0x4fe),_0x1d2007+=_0xd580ee(0x6d2),alert(_0x1d2007),SceneManager['exit']();}if(Imported[_0xd580ee(0x630)]&&VisuMZ[_0xd580ee(0x403)][_0xd580ee(0x555)]<1.21){let _0x1c2235='';_0x1c2235+='VisuMZ_3_BattleAI\x20needs\x20to\x20be\x20updated\x20',_0x1c2235+=_0xd580ee(0x6d2),alert(_0x1c2235),SceneManager['exit']();}},DataManager[_0x4e2d80(0x60e)]=function(_0x2df21c,_0x3ac1f9,_0x4a1948,_0x3a4250,_0x18ed11){const _0xee4fe6=_0x4e2d80,_0x1e796d=VisuMZ[_0xee4fe6(0x398)][_0xee4fe6(0x329)],_0x127aa7=_0x2df21c[_0xee4fe6(0x5e2)]||'';if(_0x127aa7[_0xee4fe6(0x240)](_0x1e796d[_0xee4fe6(0x267)])){const _0x5a34e9=RegExp['$1'][_0xee4fe6(0x18a)](',')['map'](_0x20dedc=>Math[_0xee4fe6(0x23c)](Number(_0x20dedc),0x1));if(!_0x5a34e9[_0xee4fe6(0x314)](_0x3a4250))return![];}if(_0x127aa7[_0xee4fe6(0x240)](_0x1e796d[_0xee4fe6(0x59e)])){const _0x7aa084=RegExp['$1']['split'](',')[_0xee4fe6(0x335)](_0x277289=>Math[_0xee4fe6(0x23c)](Number(_0x277289),0x1));if(_0x7aa084[_0xee4fe6(0x314)](_0x3a4250))return![];}if(_0x127aa7[_0xee4fe6(0x240)](_0x1e796d[_0xee4fe6(0x317)])){if(_0x3a4250!==_0x4a1948[_0xee4fe6(0x22e)]())return![];}if(_0x127aa7[_0xee4fe6(0x240)](_0x1e796d[_0xee4fe6(0x386)])){if(_0x3a4250!==_0x4a1948[_0xee4fe6(0x59a)]())return![];}if(_0x127aa7['match'](_0x1e796d[_0xee4fe6(0x29e)])){const _0xa9a0b2=RegExp['$1'][_0xee4fe6(0x18a)](',')[_0xee4fe6(0x335)](_0x328dea=>Math[_0xee4fe6(0x23c)](Number(_0x328dea),0x1));if(!_0xa9a0b2[_0xee4fe6(0x314)](_0x18ed11))return![];}if(_0x127aa7['match'](_0x1e796d[_0xee4fe6(0x380)])){const _0x3452e6=RegExp['$1'][_0xee4fe6(0x18a)](',')[_0xee4fe6(0x335)](_0x2a3dd7=>Math[_0xee4fe6(0x23c)](Number(_0x2a3dd7),0x1));if(_0x3452e6[_0xee4fe6(0x314)](_0x18ed11))return![];}if(_0x127aa7[_0xee4fe6(0x240)](_0x1e796d[_0xee4fe6(0x34a)])){if(_0x18ed11!==_0x4a1948[_0xee4fe6(0x4f1)]())return![];}if(_0x127aa7[_0xee4fe6(0x240)](_0x1e796d[_0xee4fe6(0x524)])){if(_0x18ed11!==_0x4a1948[_0xee4fe6(0x193)]())return![];}if(_0x127aa7[_0xee4fe6(0x240)](_0x1e796d[_0xee4fe6(0x4d1)])){$gameTemp['setBypassGridBattlers']([_0x3ac1f9]);const _0x54c492=this[_0xee4fe6(0x372)](_0x2df21c,_0x3ac1f9,_0x4a1948,_0x3a4250,_0x18ed11);$gameTemp[_0xee4fe6(0x560)]();if(!_0x54c492['canUse'])return![];}return!![];},DataManager['isItemGridHidden']=function(_0x31b092){const _0x2ffd86=_0x4e2d80;if(!_0x31b092)return!![];if(!this[_0x2ffd86(0x64d)](_0x31b092)&&!this[_0x2ffd86(0x214)](_0x31b092))return!![];const _0x4059b9=VisuMZ[_0x2ffd86(0x398)][_0x2ffd86(0x329)];if(_0x31b092[_0x2ffd86(0x5e2)][_0x2ffd86(0x240)](_0x4059b9[_0x2ffd86(0x33d)]))return!![];if(_0x31b092['occasion']===0x3)return!![];return![];},DataManager[_0x4e2d80(0x5f4)]=function(_0x167c39){const _0x484115=_0x4e2d80;if(!_0x167c39)return[];const _0x2d695b=VisuMZ[_0x484115(0x398)]['RegExp'],_0x56cd24=_0x167c39[_0x484115(0x5e2)]||'',_0x3e18c3=[];if(_0x56cd24['match'](_0x2d695b[_0x484115(0x68f)])){const _0x49388a=String(RegExp['$1'])[_0x484115(0x18a)](/[\r\n]+/);while(_0x49388a[_0x484115(0x2f8)])_0x3e18c3[_0x484115(0x482)](_0x49388a[_0x484115(0x69f)]());}const _0x1ec6b7=_0x56cd24[_0x484115(0x240)](_0x2d695b['MoveRangeLine']);if(_0x1ec6b7)for(const _0x493692 of _0x1ec6b7){_0x493692[_0x484115(0x240)](_0x2d695b['MoveRangeLine']),_0x3e18c3[_0x484115(0x482)](String(RegExp['$1']));}return _0x3e18c3;},DataManager['parseBattleGridMoveRangeData']=function(_0xfdf8db,_0x138261){const _0x25a0d1=_0x4e2d80;_0x138261=_0x138261[_0x25a0d1(0x335)](_0x4aad42=>_0x4aad42[_0x25a0d1(0x53a)]()['trim']()),_0xfdf8db[_0x25a0d1(0x6d0)]=_0xfdf8db[_0x25a0d1(0x6d0)]||{},_0xfdf8db[_0x25a0d1(0x67b)]=_0xfdf8db[_0x25a0d1(0x67b)]||{};for(const _0x3b3aa9 of _0x138261){if(_0x3b3aa9===_0x25a0d1(0x5cb))return _0xfdf8db['all']=!![],_0xfdf8db;if(_0x3b3aa9==='NONE')return _0xfdf8db[_0x25a0d1(0x392)]=!![],_0xfdf8db;if(_0x3b3aa9===_0x25a0d1(0x48f)){_0xfdf8db[_0x25a0d1(0x6d0)][_0x25a0d1(0x249)]=Math[_0x25a0d1(0x23c)](0x1,_0xfdf8db[_0x25a0d1(0x6d0)]['square']||0x0);continue;}if(_0x3b3aa9===_0x25a0d1(0x1ec)){_0xfdf8db[_0x25a0d1(0x6d0)][_0x25a0d1(0x352)]=0x14,_0xfdf8db['allow'][_0x25a0d1(0x62f)]=0x14,_0xfdf8db[_0x25a0d1(0x6d0)][_0x25a0d1(0x3bd)]=0x14,_0xfdf8db[_0x25a0d1(0x6d0)][_0x25a0d1(0x4aa)]=0x14;continue;}if(_0x3b3aa9===_0x25a0d1(0x70b)){_0xfdf8db[_0x25a0d1(0x6d0)]['rank']=0x14,_0xfdf8db[_0x25a0d1(0x6d0)][_0x25a0d1(0x62f)]=0x14;continue;}if(_0x3b3aa9==='BISHOP'){_0xfdf8db[_0x25a0d1(0x6d0)][_0x25a0d1(0x3bd)]=0x14,_0xfdf8db[_0x25a0d1(0x6d0)][_0x25a0d1(0x4aa)]=0x14;continue;}if(_0x3b3aa9===_0x25a0d1(0x42a)){_0xfdf8db[_0x25a0d1(0x6d0)]['square']=Math[_0x25a0d1(0x23c)](0x2,_0xfdf8db['allow'][_0x25a0d1(0x249)]||0x0),_0xfdf8db['not'][_0x25a0d1(0x352)]=0x2,_0xfdf8db[_0x25a0d1(0x67b)][_0x25a0d1(0x62f)]=0x2,_0xfdf8db[_0x25a0d1(0x67b)]['diaForward']=0x2,_0xfdf8db[_0x25a0d1(0x67b)][_0x25a0d1(0x4aa)]=0x2;continue;}if(_0x3b3aa9===_0x25a0d1(0x6f6)){_0xfdf8db[_0x25a0d1(0x6d0)][_0x25a0d1(0x239)]=Math[_0x25a0d1(0x23c)](0x1,_0xfdf8db[_0x25a0d1(0x6d0)][_0x25a0d1(0x239)]||0x0);continue;}const _0x262077=_0x3b3aa9[_0x25a0d1(0x6fe)]('NOT'),_0x5989c2=_0x262077?_0x25a0d1(0x67b):_0x25a0d1(0x6d0);if(_0x3b3aa9[_0x25a0d1(0x240)](/SQUARE (\d+)/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x249)]=_0xfdf8db[_0x5989c2][_0x25a0d1(0x249)]||0x0;const _0x58a526=Number(RegExp['$1']);if(_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x249)]=Math[_0x25a0d1(0x23c)](_0x58a526,_0xfdf8db[_0x5989c2][_0x25a0d1(0x249)]);if(!_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x249)]=_0x58a526+_0xfdf8db[_0x5989c2]['square'];continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/RADIUS (\d+)/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x6de)]=_0xfdf8db[_0x5989c2]['radius']||0x0;const _0x10224b=Number(RegExp['$1']);if(_0x262077)_0xfdf8db[_0x5989c2]['radius']=Math[_0x25a0d1(0x23c)](_0x10224b,_0xfdf8db[_0x5989c2][_0x25a0d1(0x6de)]);if(!_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x6de)]=_0x10224b+_0xfdf8db[_0x5989c2][_0x25a0d1(0x6de)];continue;}if(_0x3b3aa9['match'](/FULL RANK/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x352)]=0x14;continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/RANK (\d+)/i)){_0xfdf8db[_0x5989c2]['rank']=_0xfdf8db[_0x5989c2]['rank']||0x0;const _0x1d19dd=Number(RegExp['$1']);if(_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x352)]=Math[_0x25a0d1(0x23c)](_0x1d19dd,_0xfdf8db[_0x5989c2][_0x25a0d1(0x352)]);if(!_0x262077)_0xfdf8db[_0x5989c2]['rank']=_0x1d19dd+_0xfdf8db[_0x5989c2][_0x25a0d1(0x352)];continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/FULL FLANK/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x62f)]=0x14;continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/FLANK (\d+)/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x62f)]=_0xfdf8db[_0x5989c2][_0x25a0d1(0x62f)]||0x0;const _0x5e128a=Number(RegExp['$1']);if(_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x62f)]=Math[_0x25a0d1(0x23c)](_0x5e128a,_0xfdf8db[_0x5989c2][_0x25a0d1(0x62f)]);if(!_0x262077)_0xfdf8db[_0x5989c2]['flank']=_0x5e128a+_0xfdf8db[_0x5989c2][_0x25a0d1(0x62f)];continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/FULL ALL DIAGONAL/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x3bd)]=0x14,_0xfdf8db[_0x5989c2][_0x25a0d1(0x4aa)]=0x14;continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/ALL DIAGONAL (\d+)/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x3bd)]=_0xfdf8db[_0x5989c2][_0x25a0d1(0x3bd)]||0x0,_0xfdf8db[_0x5989c2]['diaBackward']=_0xfdf8db[_0x5989c2][_0x25a0d1(0x4aa)]||0x0;const _0x5ae148=Number(RegExp['$1']);if(_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x3bd)]=Math[_0x25a0d1(0x23c)](_0x5ae148,_0xfdf8db[_0x5989c2]['diaForward']);if(!_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x3bd)]=_0xfdf8db[_0x5989c2][_0x25a0d1(0x3bd)]+_0x5ae148;if(_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x4aa)]=Math[_0x25a0d1(0x23c)](_0x5ae148,_0xfdf8db[_0x5989c2]['diaBackward']);if(!_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x4aa)]=_0x5ae148+_0xfdf8db[_0x5989c2][_0x25a0d1(0x4aa)];continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/FULL DIAGONAL FORWARD/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x3bd)]=0x14;continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/DIAGONAL FORWARD (\d+)/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x3bd)]=_0xfdf8db[_0x5989c2][_0x25a0d1(0x3bd)]||0x0;const _0x313222=Number(RegExp['$1']);if(_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x3bd)]=Math[_0x25a0d1(0x23c)](_0x313222,_0xfdf8db[_0x5989c2]['diaForward']);if(!_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x3bd)]=_0x313222+_0xfdf8db[_0x5989c2][_0x25a0d1(0x3bd)];continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/FULL DIAGONAL BACKWARD/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x4aa)]=0x14;continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/DIAGONAL BACKWARD (\d+)/i)){_0xfdf8db[_0x5989c2]['diaBackward']=_0xfdf8db[_0x5989c2][_0x25a0d1(0x4aa)]||0x0;const _0x35912f=Number(RegExp['$1']);if(_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x4aa)]=Math[_0x25a0d1(0x23c)](_0x35912f,_0xfdf8db[_0x5989c2]['diaForward']);if(!_0x262077)_0xfdf8db[_0x5989c2]['diaBackward']=_0x35912f+_0xfdf8db[_0x5989c2][_0x25a0d1(0x4aa)];continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/FULL FORWARD/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x239)]=0x14;continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/FORWARD (\d+)/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x239)]=_0xfdf8db[_0x5989c2][_0x25a0d1(0x239)]||0x0;const _0x49588c=Number(RegExp['$1']);if(_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x239)]=Math[_0x25a0d1(0x23c)](_0x49588c,_0xfdf8db[_0x5989c2]['forward']);if(!_0x262077)_0xfdf8db[_0x5989c2]['forward']=_0x49588c+_0xfdf8db[_0x5989c2][_0x25a0d1(0x239)];continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/BACKWARD (\d+)/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x4cd)]=_0xfdf8db[_0x5989c2]['backward']||0x0;const _0x192cdd=Number(RegExp['$1']);if(_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x4cd)]=Math[_0x25a0d1(0x23c)](_0x192cdd,_0xfdf8db[_0x5989c2][_0x25a0d1(0x4cd)]);if(!_0x262077)_0xfdf8db[_0x5989c2]['backward']=_0x192cdd+_0xfdf8db[_0x5989c2][_0x25a0d1(0x4cd)];continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/FULL BACKWARD/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x4cd)]=0x14;continue;}if(_0x3b3aa9['match'](/FULL UPWARD/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x5bf)]=0x14;continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/UPWARD (\d+)/i)){_0xfdf8db[_0x5989c2]['upward']=_0xfdf8db[_0x5989c2][_0x25a0d1(0x5bf)]||0x0;const _0x446e92=Number(RegExp['$1']);if(_0x262077)_0xfdf8db[_0x5989c2]['upward']=Math['max'](_0x446e92,_0xfdf8db[_0x5989c2][_0x25a0d1(0x5bf)]);if(!_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x5bf)]=_0x446e92+_0xfdf8db[_0x5989c2][_0x25a0d1(0x5bf)];continue;}if(_0x3b3aa9['match'](/FULL DOWNWARD/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x3ed)]=0x14;continue;}if(_0x3b3aa9[_0x25a0d1(0x240)](/DOWNWARD (\d+)/i)){_0xfdf8db[_0x5989c2][_0x25a0d1(0x3ed)]=_0xfdf8db[_0x5989c2]['downward']||0x0;const _0x55ca3b=Number(RegExp['$1']);if(_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x3ed)]=Math[_0x25a0d1(0x23c)](_0x55ca3b,_0xfdf8db[_0x5989c2][_0x25a0d1(0x3ed)]);if(!_0x262077)_0xfdf8db[_0x5989c2][_0x25a0d1(0x3ed)]=_0x55ca3b+_0xfdf8db[_0x5989c2][_0x25a0d1(0x3ed)];continue;}}return _0xfdf8db;},DataManager['parseBattleGridSelfMoveRegExp']=function(_0x4be8cd,_0x4472f6,_0x1c042c,_0x3abb4e,_0x1fa436){const _0x1a719e=_0x4e2d80,_0x11e74b=VisuMZ[_0x1a719e(0x398)][_0x1a719e(0x329)],_0x52e9c2=_0x4be8cd[_0x1a719e(0x5e2)]||'';let _0x1b4002=0x0,_0x2bf180=0x0;_0x52e9c2[_0x1a719e(0x240)](_0x11e74b[_0x1a719e(0x4d1)]);const _0x2c3e8f=RegExp['$1'][_0x1a719e(0x53a)]()[_0x1a719e(0x373)](),_0x59c567=RegExp['$2'][_0x1a719e(0x53a)]()[_0x1a719e(0x373)](),_0x4ad1f9=Math[_0x1a719e(0x23c)](Number(RegExp['$3']),0x1),_0xcafeef={'moveType':_0x2c3e8f,'canMove':!![],'canUse':!![],'rankDelta':0x0,'flankDelta':0x0,'targetRank':_0x3abb4e,'targetFlank':_0x1fa436,'switchTarget':null,'switchRank':_0x3abb4e,'switchFlank':_0x1fa436};if(!['MUST',_0x1a719e(0x33a),_0x1a719e(0x252),_0x1a719e(0x70f),_0x1a719e(0x2fa),'MUST\x20SWITCH',_0x1a719e(0x51f)][_0x1a719e(0x314)](_0x2c3e8f))return _0xcafeef[_0x1a719e(0x45c)]=![],_0xcafeef['canUse']=![],_0xcafeef;if(!_0x4472f6[_0x1a719e(0x6ec)]()||_0x4472f6[_0x1a719e(0x5ef)]())return _0xcafeef[_0x1a719e(0x45c)]=![],_0xcafeef[_0x1a719e(0x331)]=![],_0xcafeef;switch(_0x59c567){case'FORWARD':case _0x1a719e(0x612):case'DOWN-FORWARD':_0xcafeef[_0x1a719e(0x213)]=-_0x4ad1f9,_0x1b4002=-0x1;break;case _0x1a719e(0x326):case _0x1a719e(0x58b):case'DOWN-BACKWARD':_0xcafeef[_0x1a719e(0x213)]=_0x4ad1f9,_0x1b4002=0x1;break;case _0x1a719e(0x4ae):case _0x1a719e(0x67a):case _0x1a719e(0x21e):_0x1b4002=_0x4472f6['isActor']()?-0x1:0x1,_0xcafeef[_0x1a719e(0x213)]=_0x4ad1f9*_0x1b4002;break;case _0x1a719e(0x65e):case _0x1a719e(0x246):case _0x1a719e(0x5fd):_0x1b4002=_0x4472f6[_0x1a719e(0x444)]()?0x1:-0x1,_0xcafeef['rankDelta']=_0x4ad1f9*_0x1b4002;break;}switch(_0x59c567){case _0x1a719e(0x2bc):case'UP-FORWARD':case _0x1a719e(0x58b):case'UP-LEFTWARD':case _0x1a719e(0x246):_0xcafeef[_0x1a719e(0x15e)]=-_0x4ad1f9,_0x2bf180=-0x1;break;case _0x1a719e(0x279):case _0x1a719e(0x5e1):case _0x1a719e(0x3f9):case'DOWN-LEFTWARD':case _0x1a719e(0x5fd):_0xcafeef[_0x1a719e(0x15e)]=_0x4ad1f9,_0x2bf180=0x1;break;}if(_0x1b4002===0x0&&_0x2bf180===0x0)return _0xcafeef['canMove']=![],_0xcafeef['canUse']=![],_0xcafeef;_0xcafeef['targetRank']+=_0xcafeef[_0x1a719e(0x213)],_0xcafeef['targetFlank']+=_0xcafeef[_0x1a719e(0x15e)];const _0x3627a4=_0x2c3e8f['match'](/MUST/i),_0x245e08=!_0x3627a4;if(_0x2c3e8f[_0x1a719e(0x240)](/MID/i)){let _0x105188=_0x3abb4e,_0x14b83f=_0x1fa436,_0x2dd153=_0x4ad1f9;while(_0x2dd153--){const _0x5945b1=_0x105188+_0x1b4002,_0x3e13e0=_0x14b83f+_0x2bf180;if(_0x5945b1<=0x0)break;if(_0x5945b1>BattleManager[_0x1a719e(0x646)]())break;if(_0x3e13e0<=0x0)break;if(_0x3e13e0>BattleManager['maxFlanks']())break;if(_0x1c042c['anyMembersAtGridNode'](_0x5945b1,_0x3e13e0)){if(_0x2c3e8f[_0x1a719e(0x240)](/SWITCH/i)){const _0xefb516=_0x1c042c[_0x1a719e(0x170)](_0x5945b1,_0x3e13e0);_0xefb516[_0x1a719e(0x6c0)]()?(_0xcafeef[_0x1a719e(0x46c)]=_0xefb516,_0xcafeef[_0x1a719e(0x5cf)]=_0x105188,_0xcafeef[_0x1a719e(0x20f)]=_0x14b83f,_0x105188+=_0x1b4002,_0x14b83f+=_0x2bf180):(_0xcafeef[_0x1a719e(0x5cf)]=_0x105188,_0xcafeef[_0x1a719e(0x20f)]=_0x14b83f,_0x105188+=_0x1b4002,_0x14b83f+=_0x2bf180);break;}}if(_0x1c042c[_0x1a719e(0x147)](_0x5945b1,_0x3e13e0))break;_0x105188+=_0x1b4002,_0x14b83f+=_0x2bf180;}_0xcafeef[_0x1a719e(0x179)]=_0x105188,_0xcafeef[_0x1a719e(0x395)]=_0x14b83f;if(_0xcafeef[_0x1a719e(0x179)]===_0x3abb4e&&_0xcafeef[_0x1a719e(0x395)]===_0x1fa436)return _0xcafeef['canMove']=![],_0xcafeef[_0x1a719e(0x331)]=_0x245e08,_0xcafeef;}else{if(_0xcafeef[_0x1a719e(0x179)]<=0x0||_0xcafeef[_0x1a719e(0x179)]>BattleManager['maxRanks']())return _0xcafeef[_0x1a719e(0x45c)]=![],_0xcafeef[_0x1a719e(0x331)]=_0x245e08,_0xcafeef;else{if(_0xcafeef[_0x1a719e(0x395)]<=0x0||_0xcafeef[_0x1a719e(0x395)]>BattleManager[_0x1a719e(0x21f)]())return _0xcafeef['canMove']=![],_0xcafeef[_0x1a719e(0x331)]=_0x245e08,_0xcafeef;}}if(_0x2c3e8f[_0x1a719e(0x240)](/SWITCH/i)){const _0x4e4135=_0x1c042c[_0x1a719e(0x170)](_0xcafeef['targetRank'],_0xcafeef[_0x1a719e(0x395)]);if(_0x4e4135)return _0x4e4135[_0x1a719e(0x6c0)]()?(_0xcafeef[_0x1a719e(0x46c)]=_0x4e4135,_0xcafeef[_0x1a719e(0x45c)]=!![],_0xcafeef['canUse']=!![],_0xcafeef):(_0xcafeef[_0x1a719e(0x45c)]=![],_0xcafeef['canUse']=_0x245e08,_0xcafeef);else{if(_0x2c3e8f[_0x1a719e(0x240)](/MUST/i))return _0xcafeef[_0x1a719e(0x45c)]=![],_0xcafeef[_0x1a719e(0x331)]=![],_0xcafeef;}}if(_0x2c3e8f[_0x1a719e(0x240)](/MUST/i)){if(_0x1c042c[_0x1a719e(0x147)](_0xcafeef['targetRank'],_0xcafeef[_0x1a719e(0x395)]))return _0xcafeef['canMove']=![],_0xcafeef['canUse']=![],_0xcafeef;}return _0xcafeef;},DataManager[_0x4e2d80(0x162)]=function(_0x9bf259,_0x422ed4,_0x41effd,_0x3647a1,_0x4dafe2){const _0x2268db=_0x4e2d80,_0x38d430=VisuMZ[_0x2268db(0x398)]['RegExp'],_0x518bf2=_0x9bf259[_0x2268db(0x5e2)]||'';_0x518bf2[_0x2268db(0x240)](_0x38d430['TargetMoveNode']);const _0x1de0fa=RegExp['$1'][_0x2268db(0x53a)]()[_0x2268db(0x373)](),_0x4004cd=RegExp['$2']['toUpperCase']()[_0x2268db(0x373)](),_0x408340=Math[_0x2268db(0x23c)](Number(RegExp['$3']),0x1);return VisuMZ[_0x2268db(0x398)][_0x2268db(0x619)](_0x1de0fa,_0x4004cd,_0x408340,_0x422ed4,_0x41effd,_0x3647a1,_0x4dafe2);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x619)]=function(_0x148616,_0x5d5bc3,_0x2e27e8,_0x2515ef,_0x1586d0,_0x5ce432,_0x148228){const _0x3c5c49=_0x4e2d80;let _0x7c0c51=0x0,_0x127261=0x0;const _0x3620f9={'moveType':_0x148616,'canMove':!![],'rankDelta':0x0,'flankDelta':0x0,'targetRank':_0x5ce432,'targetFlank':_0x148228,'switchTarget':null,'switchRank':_0x5ce432,'switchFlank':_0x148228,'crashTarget':null,'crashed':![]};if(![_0x3c5c49(0x4e1),_0x3c5c49(0x33a),_0x3c5c49(0x70f),_0x3c5c49(0x2fa),_0x3c5c49(0x572),'CRASH',_0x3c5c49(0x621),_0x3c5c49(0x51d)][_0x3c5c49(0x314)](_0x148616))return _0x3620f9[_0x3c5c49(0x45c)]=![],_0x3620f9;switch(_0x5d5bc3){case _0x3c5c49(0x492):case'UP-FORWARD':case _0x3c5c49(0x5e1):_0x3620f9[_0x3c5c49(0x213)]=-_0x2e27e8,_0x7c0c51=-0x1;break;case'BACKWARD':case _0x3c5c49(0x58b):case _0x3c5c49(0x3f9):_0x3620f9[_0x3c5c49(0x213)]=_0x2e27e8,_0x7c0c51=0x1;break;case _0x3c5c49(0x4ae):case'UP-LEFTWARD':case _0x3c5c49(0x21e):_0x7c0c51=_0x2515ef[_0x3c5c49(0x444)]()?-0x1:0x1,_0x3620f9[_0x3c5c49(0x213)]=_0x2e27e8*_0x7c0c51;break;case'RIGHTWARD':case _0x3c5c49(0x246):case _0x3c5c49(0x5fd):_0x7c0c51=_0x2515ef[_0x3c5c49(0x444)]()?0x1:-0x1,_0x3620f9[_0x3c5c49(0x213)]=_0x2e27e8*_0x7c0c51;break;}switch(_0x5d5bc3){case _0x3c5c49(0x2bc):case _0x3c5c49(0x612):case _0x3c5c49(0x58b):case _0x3c5c49(0x67a):case _0x3c5c49(0x246):_0x3620f9['flankDelta']=-_0x2e27e8,_0x127261=-0x1;break;case'DOWNWARD':case _0x3c5c49(0x5e1):case _0x3c5c49(0x3f9):case _0x3c5c49(0x21e):case'DOWN-RIGHTWARD':_0x3620f9[_0x3c5c49(0x15e)]=_0x2e27e8,_0x127261=0x1;break;}if(_0x7c0c51===0x0&&_0x127261===0x0)return _0x3620f9['canMove']=![],_0x3620f9;_0x3620f9[_0x3c5c49(0x179)]+=_0x3620f9[_0x3c5c49(0x213)],_0x3620f9[_0x3c5c49(0x395)]+=_0x3620f9[_0x3c5c49(0x15e)];if(_0x148616[_0x3c5c49(0x240)](/MID/i)){let _0x1d856b=_0x5ce432,_0x196179=_0x148228,_0x1dacd8=_0x2e27e8;while(_0x1dacd8--){const _0xc2a377=_0x1d856b+_0x7c0c51,_0x217f6c=_0x196179+_0x127261;if(_0xc2a377<=0x0)break;if(_0xc2a377>BattleManager[_0x3c5c49(0x646)]())break;if(_0x217f6c<=0x0)break;if(_0x217f6c>BattleManager[_0x3c5c49(0x21f)]())break;if(_0x1586d0['anyMembersAtGridNode'](_0xc2a377,_0x217f6c)){if(_0x148616[_0x3c5c49(0x240)](/CRASH/i)){const _0x47aefd=_0x1586d0[_0x3c5c49(0x170)](_0xc2a377,_0x217f6c);_0x3620f9[_0x3c5c49(0x699)]=_0x47aefd,_0x3620f9['crashed']=!![];break;}if(_0x148616[_0x3c5c49(0x240)](/SWITCH/i)){const _0x4279d2=_0x1586d0['getMemberAtGridNode'](_0xc2a377,_0x217f6c);_0x3620f9[_0x3c5c49(0x46c)]=_0x4279d2,_0x3620f9[_0x3c5c49(0x5cf)]=_0x1d856b,_0x3620f9[_0x3c5c49(0x20f)]=_0x196179,_0x1d856b+=_0x7c0c51,_0x196179+=_0x127261;break;}}if(_0x1586d0[_0x3c5c49(0x147)](_0xc2a377,_0x217f6c)){_0x148616[_0x3c5c49(0x240)](/CRASH/i)&&(_0x3620f9[_0x3c5c49(0x3cd)]=!![]);break;}_0x1d856b+=_0x7c0c51,_0x196179+=_0x127261;}_0x3620f9['targetRank']=_0x1d856b,_0x3620f9[_0x3c5c49(0x395)]=_0x196179;if(_0x3620f9[_0x3c5c49(0x179)]===_0x5ce432&&_0x3620f9[_0x3c5c49(0x395)]===_0x148228)return _0x3620f9[_0x3c5c49(0x45c)]=![],_0x3620f9;}else{if(_0x3620f9['targetRank']<=0x0||_0x3620f9[_0x3c5c49(0x179)]>BattleManager[_0x3c5c49(0x646)]())return _0x3620f9[_0x3c5c49(0x45c)]=![],_0x3620f9;else{if(_0x3620f9[_0x3c5c49(0x395)]<=0x0||_0x3620f9[_0x3c5c49(0x395)]>BattleManager[_0x3c5c49(0x21f)]())return _0x3620f9[_0x3c5c49(0x45c)]=![],_0x3620f9;}}if(['EXACT'][_0x3c5c49(0x314)](_0x148616)){if(_0x1586d0[_0x3c5c49(0x147)](_0x3620f9[_0x3c5c49(0x179)],_0x3620f9[_0x3c5c49(0x395)]))return _0x3620f9[_0x3c5c49(0x45c)]=![],_0x3620f9;}if([_0x3c5c49(0x70f)][_0x3c5c49(0x314)](_0x148616)){const _0xe440ff=_0x1586d0['getMemberAtGridNode'](_0x3620f9['targetRank'],_0x3620f9[_0x3c5c49(0x395)]);if(_0xe440ff){if(_0xe440ff[_0x3c5c49(0x6c0)]())_0x3620f9['switchTarget']=_0xe440ff;else return _0x3620f9[_0x3c5c49(0x45c)]=![],_0x3620f9;}}if(['CRASH'][_0x3c5c49(0x314)](_0x148616)){if(_0x1586d0[_0x3c5c49(0x147)](_0x3620f9[_0x3c5c49(0x179)],_0x3620f9['targetFlank'])){const _0x54a049=_0x1586d0['getMemberAtGridNode'](_0x3620f9['targetRank'],_0x3620f9[_0x3c5c49(0x395)]);if(_0x54a049)_0x3620f9['crashTarget']=_0x54a049;return _0x3620f9[_0x3c5c49(0x45c)]=![],_0x3620f9['crashed']=!![],_0x3620f9;}}return _0x3620f9;},DataManager[_0x4e2d80(0x511)]=function(_0x30229e){const _0x457d77=_0x4e2d80;if(!_0x30229e)return'';const _0x27de1c=VisuMZ['createKeyJS'](_0x30229e,_0x457d77(0x4fa));this[_0x457d77(0x731)]=this[_0x457d77(0x731)]||{};if(this[_0x457d77(0x731)][_0x27de1c]!==undefined)return this[_0x457d77(0x731)][_0x27de1c];this[_0x457d77(0x731)][_0x27de1c]=_0x30229e[_0x457d77(0x427)];const _0x430d6c=VisuMZ['BattleGridSystem']['RegExp'],_0x96cb81=_0x30229e[_0x457d77(0x5e2)]||'';return _0x96cb81[_0x457d77(0x240)](_0x430d6c[_0x457d77(0x557)])&&(this[_0x457d77(0x731)][_0x27de1c]=RegExp['$1'][_0x457d77(0x373)]()),this[_0x457d77(0x731)][_0x27de1c];},DataManager['getActionTriggerIcon']=function(_0x1f7570){const _0x16e806=_0x4e2d80;if(!_0x1f7570)return 0x0;const _0x497d84=VisuMZ[_0x16e806(0x441)](_0x1f7570,_0x16e806(0x5b2));this['_getActionTriggerIcon']=this[_0x16e806(0x362)]||{};if(this['_getActionTriggerIcon'][_0x497d84]!==undefined)return this['_getActionTriggerIcon'][_0x497d84];this['_getActionTriggerIcon'][_0x497d84]=_0x1f7570[_0x16e806(0x366)];const _0x35549f=VisuMZ[_0x16e806(0x398)]['RegExp'],_0x293d8c=_0x1f7570[_0x16e806(0x5e2)]||'';return _0x293d8c[_0x16e806(0x240)](_0x35549f[_0x16e806(0x4c6)])&&(this[_0x16e806(0x362)][_0x497d84]=Number(RegExp['$1'])),this[_0x16e806(0x362)][_0x497d84];},DataManager['getActionTriggerAnimation']=function(_0x4baab1){const _0x5a3ae1=_0x4e2d80;if(!_0x4baab1)return 0x0;const _0x5d0547=VisuMZ[_0x5a3ae1(0x441)](_0x4baab1,'actionTriggerAnimation');this['_getActionTriggerAnimation']=this['_getActionTriggerAnimation']||{};if(this[_0x5a3ae1(0x2b8)][_0x5d0547]!==undefined)return this[_0x5a3ae1(0x2b8)][_0x5d0547];this[_0x5a3ae1(0x2b8)][_0x5d0547]=_0x4baab1[_0x5a3ae1(0x24a)];const _0xa437a8=VisuMZ['BattleGridSystem'][_0x5a3ae1(0x329)],_0x1de2a6=_0x4baab1[_0x5a3ae1(0x5e2)]||'';return _0x1de2a6[_0x5a3ae1(0x240)](_0xa437a8[_0x5a3ae1(0x617)])&&(this[_0x5a3ae1(0x2b8)][_0x5d0547]=Number(RegExp['$1'])),this['_getActionTriggerAnimation'][_0x5d0547];},ImageManager[_0x4e2d80(0x50c)]=function(_0x557d44){const _0x3d4f79=_0x4e2d80;return _0x557d44?this[_0x3d4f79(0x140)]():this['getBattleGridEnemyNodeBitmap']();},ImageManager[_0x4e2d80(0x140)]=function(){const _0x42bc6e=_0x4e2d80,_0x153b6d=Sprite_BattleGridNode[_0x42bc6e(0x36f)][_0x42bc6e(0x70c)];if(_0x153b6d[_0x42bc6e(0x1eb)]!=='')return this[_0x42bc6e(0x397)](_0x153b6d[_0x42bc6e(0x1eb)]);if(this['_cached_BattleGridSystem_ActorNode'])return this[_0x42bc6e(0x236)];const _0x29a2fe=this[_0x42bc6e(0x626)](_0x153b6d);return this[_0x42bc6e(0x236)]=_0x29a2fe,this[_0x42bc6e(0x236)];},ImageManager['getBattleGridEnemyNodeBitmap']=function(){const _0x56aa2d=_0x4e2d80,_0x303925=Sprite_BattleGridNode[_0x56aa2d(0x36f)]['enemy'];if(_0x303925[_0x56aa2d(0x1eb)]!=='')return this['loadSystem'](_0x303925[_0x56aa2d(0x1eb)]);if(this[_0x56aa2d(0x341)])return this[_0x56aa2d(0x341)];const _0x517ce0=this[_0x56aa2d(0x626)](_0x303925);return this[_0x56aa2d(0x341)]=_0x517ce0,this[_0x56aa2d(0x341)];},ImageManager['createBattleGridNodeBitmap']=function(_0x5528f1){const _0x484752=_0x4e2d80,_0x3b02f7=new Bitmap(0x64,0x64),_0x552037=_0x5528f1['color']??'#ffffff';return _0x3b02f7[_0x484752(0x390)]=_0x5528f1[_0x484752(0x1e7)],_0x3b02f7[_0x484752(0x5ce)](0x32,0x32,0x32,_0x552037),_0x3b02f7['smooth']=!![],_0x3b02f7[_0x484752(0x402)]=![],_0x3b02f7;},ImageManager[_0x4e2d80(0x5d4)]=function(){const _0x2a9ea3=_0x4e2d80;if(this[_0x2a9ea3(0x48a)])return this[_0x2a9ea3(0x48a)];const _0x3dc049=ImageManager[_0x2a9ea3(0x397)]('IconSet');if(_0x3dc049[_0x2a9ea3(0x610)]<=0x0)return _0x3dc049;const _0x44ed8f=new Bitmap(_0x3dc049[_0x2a9ea3(0x610)],_0x3dc049[_0x2a9ea3(0x298)]);return _0x44ed8f[_0x2a9ea3(0x1e8)](_0x3dc049,0x0,0x0,_0x3dc049[_0x2a9ea3(0x610)],_0x3dc049['height'],0x0,0x0),_0x44ed8f[_0x2a9ea3(0x2a4)]=!![],_0x44ed8f['_customModified']=![],this[_0x2a9ea3(0x48a)]=_0x44ed8f,this[_0x2a9ea3(0x48a)];},SoundManager['playBattleGridMoveCommand']=function(){const _0x3bc961=_0x4e2d80,_0x56c4ec=VisuMZ[_0x3bc961(0x398)]['Settings'][_0x3bc961(0x22c)],_0x7bda28={'name':_0x56c4ec[_0x3bc961(0x654)],'volume':_0x56c4ec[_0x3bc961(0x262)],'pitch':_0x56c4ec['moveCommand_pitch'],'pan':_0x56c4ec['moveCommand_pan']};AudioManager[_0x3bc961(0x203)](_0x7bda28);},TextManager['BattleGridMoveCommand']=VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x19d)]??_0x4e2d80(0x6e6),TextManager[_0x4e2d80(0x463)]=VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)]['MoveCommand'][_0x4e2d80(0x4b6)]??_0x4e2d80(0x221),TextManager['BattleGridTacticsMenuCommand']=VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Tactics']['MenuName']??'Tactics',TextManager[_0x4e2d80(0x1b6)]=VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Window'][_0x4e2d80(0x52e)]??_0x4e2d80(0x3ad),TextManager[_0x4e2d80(0x63d)]=VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)]['PartyMemberVocab']??_0x4e2d80(0x31e),TextManager[_0x4e2d80(0x618)]=VisuMZ[_0x4e2d80(0x398)]['Settings']['Window'][_0x4e2d80(0x579)]??_0x4e2d80(0x3fe),TextManager['BattleGridTacticsHelpActor']=VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x69d)]??_0x4e2d80(0x26f),TextManager[_0x4e2d80(0x474)]=VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Window'][_0x4e2d80(0x337)]??_0x4e2d80(0x1cc),TextManager[_0x4e2d80(0x1b5)]=VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x364)][_0x4e2d80(0x5c7)]??'Range',TextManager[_0x4e2d80(0x451)]=VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x364)][_0x4e2d80(0x2d4)]??_0x4e2d80(0x44b),TextManager[_0x4e2d80(0x287)]=VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x364)][_0x4e2d80(0x540)]??_0x4e2d80(0x284),TextManager[_0x4e2d80(0x169)]=VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x364)][_0x4e2d80(0x4f5)]??'Empty\x20Node',TextManager[_0x4e2d80(0x56e)]=VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x364)][_0x4e2d80(0x662)]??_0x4e2d80(0x41b),TextManager[_0x4e2d80(0x55f)]=VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x364)][_0x4e2d80(0x1e6)]??_0x4e2d80(0x6d4),TextManager[_0x4e2d80(0x661)]=VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)][_0x4e2d80(0x371)]??'Please\x20select\x20a\x20node\x20to\x20modify.',TextManager[_0x4e2d80(0x283)]=VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x17c)]['HelpExtRequiredChara']??'Make\x20sure\x20\x5cC[5]%1\x5cC[0]\x20is\x20in\x20your\x20party!',SceneManager['isSceneGridTactics']=function(){const _0x194fce=_0x4e2d80;return this[_0x194fce(0x671)]&&this[_0x194fce(0x671)][_0x194fce(0x387)]===Scene_BattleGridTactics;},BattleManager[_0x4e2d80(0x6d5)]={'defaultEnable':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)]['General'][_0x4e2d80(0x2b4)]??![],'maxRanks':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x548)]['Ranks']??0x4,'maxFlanks':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['GridField']['Flanks']??0x3},BattleManager[_0x4e2d80(0x2ae)]=function(){const _0x2c9cdd=_0x4e2d80;return $gameParty[_0x2c9cdd(0x315)]()||DataManager[_0x2c9cdd(0x62b)]()?$gameTroop['isUsingGridSystem']():BattleManager[_0x2c9cdd(0x6d5)][_0x2c9cdd(0x406)];},BattleManager[_0x4e2d80(0x38e)]=function(){const _0x5dc0c0=_0x4e2d80;if(DataManager[_0x5dc0c0(0x62b)]())return![];return Scene_BattleGridTactics[_0x5dc0c0(0x36f)][_0x5dc0c0(0x6b7)];},BattleManager['isUsingExtendedBattleGridTactics']=function(){const _0xcb765d=_0x4e2d80;return Scene_BattleGridTactics[_0xcb765d(0x36f)]['extended'];},BattleManager[_0x4e2d80(0x646)]=function(){const _0x191e1f=_0x4e2d80;return BattleManager[_0x191e1f(0x6d5)][_0x191e1f(0x646)];},BattleManager[_0x4e2d80(0x21f)]=function(){const _0x29215e=_0x4e2d80;return BattleManager['BATTLE_GRID_SYSTEM'][_0x29215e(0x21f)];},VisuMZ[_0x4e2d80(0x398)]['BattleManager_endAction']=BattleManager[_0x4e2d80(0x550)],BattleManager[_0x4e2d80(0x550)]=function(){const _0x58f2c8=_0x4e2d80;VisuMZ[_0x58f2c8(0x398)][_0x58f2c8(0x70a)][_0x58f2c8(0x25d)](this),!this['_subject']&&(this['_targets']=[]);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x3fa)]=BattleManager[_0x4e2d80(0x510)],BattleManager[_0x4e2d80(0x510)]=function(_0x1143e0,_0x221fbd,_0x5d6fab){const _0x5b802f=_0x4e2d80;VisuMZ[_0x5b802f(0x398)][_0x5b802f(0x3fa)][_0x5b802f(0x25d)](this,_0x1143e0,_0x221fbd,_0x5d6fab),this['isUsingGridSystem']()&&(this[_0x5b802f(0x3ab)](),$gameParty[_0x5b802f(0x56f)](),$gameParty['moveToStartingGridNode'](),$gameTroop['resetGridNode'](),$gameTroop[_0x5b802f(0x2f4)]());},BattleManager[_0x4e2d80(0x3ab)]=function(){const _0x7c8f11=_0x4e2d80,_0xe73c43=this[_0x7c8f11(0x646)]()*this['maxFlanks']();if($gameParty['maxBattleMembers']()>_0xe73c43){let _0x2a743f='There\x20are\x20not\x20enough\x20grid\x20nodes'+'\x0a';_0x2a743f+=_0x7c8f11(0x59c),alert(_0x2a743f),SceneManager[_0x7c8f11(0x5f1)]();}if($gameTroop[_0x7c8f11(0x23b)]()[_0x7c8f11(0x2f8)]>_0xe73c43){let _0x351c14=_0x7c8f11(0x154)+'\x0a';_0x351c14+=_0x7c8f11(0x608),alert(_0x351c14),SceneManager[_0x7c8f11(0x5f1)]();}},BattleManager[_0x4e2d80(0x659)]=function(){const _0x2364c4=_0x4e2d80;this[_0x2364c4(0x3b7)]={};},BattleManager[_0x4e2d80(0x60d)]=function(_0x12404c){const _0x2ad3c8=_0x4e2d80;if(this['_battleGridCache']===undefined)this['clearBattleGridCache']();return this[_0x2ad3c8(0x3b7)][_0x12404c];},BattleManager[_0x4e2d80(0x589)]=function(_0x110003,_0x3f5bb3){const _0x14cfb3=_0x4e2d80;if(this['_battleGridCache']===undefined)this[_0x14cfb3(0x659)]();this[_0x14cfb3(0x3b7)][_0x110003]=_0x3f5bb3;},VisuMZ['BattleGridSystem']['BattleManager_getBattlerFromKey']=BattleManager[_0x4e2d80(0x17f)],BattleManager[_0x4e2d80(0x17f)]=function(_0x4d66b5){const _0x27532f=_0x4e2d80;if(_0x4d66b5===_0x27532f(0x575))return $gameTemp[_0x27532f(0x3eb)]();return VisuMZ[_0x27532f(0x398)][_0x27532f(0x628)][_0x27532f(0x25d)](this,_0x4d66b5);},Game_Temp[_0x4e2d80(0x6a9)][_0x4e2d80(0x1e2)]=function(_0x487c08,_0x17fafb,_0x503661,_0x427084,_0x45821b,_0x4ccb5f,_0x2d4192,_0x1d2ba3){const _0x22b023=_0x4e2d80;if(!$dataAnimations[_0x4ccb5f])return;const _0x24a9f3=VisuMZ[_0x22b023(0x398)][_0x22b023(0x258)](_0x487c08,_0x17fafb,_0x503661),_0x5424e6=_0x24a9f3['x']+_0x427084,_0x2bbc76=_0x24a9f3['y']+_0x45821b;this[_0x22b023(0x61e)](_0x5424e6,_0x2bbc76,_0x4ccb5f,_0x2d4192,_0x1d2ba3);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x258)]=function(_0x33ea2c,_0x4d48aa,_0x69200c){const _0x4fadfe=_0x4e2d80,_0x2d0355=VisuMZ[_0x4fadfe(0x398)][_0x4fadfe(0x254)](_0x33ea2c,_0x4d48aa,_0x69200c),_0x1c3ab2=_0x2d0355['x']+Graphics['width']/0x2-0x2,_0x32b0d7=_0x2d0355['y']+Graphics[_0x4fadfe(0x298)]/0x2-0x2-$spriteset[_0x4fadfe(0x416)]();return new Point(_0x1c3ab2,_0x32b0d7);},Game_Temp['prototype']['createNodeTriggerAnimationQueue']=function(){const _0x4739c1=_0x4e2d80;this[_0x4739c1(0x3e7)]=[];},Game_Temp[_0x4e2d80(0x6a9)]['requestNodeTriggerAnimation']=function(_0x258f6d,_0x33116f,_0x4d1e8b,_0x38a79b){const _0x27638c=_0x4e2d80;if(!this[_0x27638c(0x687)]())return;_0x4d1e8b=_0x4d1e8b||![],_0x38a79b=_0x38a79b||![];if($dataAnimations[_0x33116f]){const _0xc34187={'targets':_0x258f6d,'animationId':_0x33116f,'mirror':_0x4d1e8b,'mute':_0x38a79b};this[_0x27638c(0x3e7)][_0x27638c(0x482)](_0xc34187);for(const _0x119217 of _0x258f6d){_0x119217[_0x27638c(0x4cb)]&&_0x119217[_0x27638c(0x4cb)]();}}},Game_Temp[_0x4e2d80(0x6a9)][_0x4e2d80(0x687)]=function(){return!![];},Game_Temp[_0x4e2d80(0x6a9)][_0x4e2d80(0x16d)]=function(){const _0xdeb791=_0x4e2d80;return this[_0xdeb791(0x3e7)]=this['_nodeTriggerAnimationQueue']||[],this[_0xdeb791(0x3e7)][_0xdeb791(0x69f)]();},Game_Temp[_0x4e2d80(0x6a9)][_0x4e2d80(0x260)]=function(_0x5e1a9d){const _0xabff70=_0x4e2d80;this[_0xabff70(0x15b)]=_0x5e1a9d,BattleManager[_0xabff70(0x659)]();},Game_Temp[_0x4e2d80(0x6a9)][_0x4e2d80(0x498)]=function(){const _0xb8613c=_0x4e2d80;return this[_0xb8613c(0x15b)]||[];},Game_Temp[_0x4e2d80(0x6a9)]['clearBypassGridBattlers']=function(){const _0xd2bd47=_0x4e2d80;delete this[_0xd2bd47(0x15b)],BattleManager['clearBattleGridCache']();},Game_Temp[_0x4e2d80(0x6a9)]['setGridFilter']=function(_0x593679){const _0x495a44=_0x4e2d80;if(!BattleManager['isUsingGridSystem']())return;if(!$gameParty[_0x495a44(0x315)]())return;this['_allowedGridData']=JSON[_0x495a44(0x5ca)](JSON[_0x495a44(0x1be)](_0x593679[_0x495a44(0x3b5)]()));},Game_Temp['prototype'][_0x4e2d80(0x727)]=function(){const _0xa1165e=_0x4e2d80;delete this[_0xa1165e(0x3a5)];},Game_Temp['prototype'][_0x4e2d80(0x593)]=function(){const _0x2069b0=_0x4e2d80;if(!BattleManager[_0x2069b0(0x2ae)]())return undefined;if(!$gameParty['inBattle']())return undefined;if(this['_suppressAllowedGridData'])return undefined;return this[_0x2069b0(0x3a5)];},Game_Temp[_0x4e2d80(0x6a9)][_0x4e2d80(0x652)]=function(_0x2b4d05){const _0x1bb16d=_0x4e2d80;this[_0x1bb16d(0x224)]=_0x2b4d05;},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x55c)]=VisuMZ['ConvertActionSequenceTarget'],VisuMZ['ConvertActionSequenceTarget']=function(_0x274ba3){const _0x2e1264=_0x4e2d80,_0x42e7f3=BattleManager[_0x2e1264(0x37f)]?BattleManager[_0x2e1264(0x43a)]:null;_0x42e7f3&&$gameTemp['setGridFilter'](_0x42e7f3);let _0x56248b=VisuMZ[_0x2e1264(0x398)][_0x2e1264(0x55c)][_0x2e1264(0x25d)](this,_0x274ba3);return _0x42e7f3&&$gameTemp['clearGridFilter'](),_0x56248b;},Game_Temp[_0x4e2d80(0x6a9)][_0x4e2d80(0x3eb)]=function(){const _0x330cc9=_0x4e2d80;if(this[_0x330cc9(0x2b0)])return this[_0x330cc9(0x2b0)];const _0xc577b4=$dataEnemies[_0x330cc9(0x5ba)](_0x3ef092=>_0x3ef092&&_0x3ef092[_0x330cc9(0x504)]!=='')['id'];return this[_0x330cc9(0x2b0)]=new Game_Enemy(_0xc577b4,0x0,0x0),this['_battleGridDummyBattler']['hide'](),this[_0x330cc9(0x2b0)];},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x4c2)]=Game_System[_0x4e2d80(0x6a9)]['initialize'],Game_System[_0x4e2d80(0x6a9)]['initialize']=function(){const _0x3f5d95=_0x4e2d80;VisuMZ['BattleGridSystem'][_0x3f5d95(0x4c2)][_0x3f5d95(0x25d)](this),this[_0x3f5d95(0x208)]();},Game_System['prototype']['initBattleGridTacticsMenu']=function(){const _0x4cc872=_0x4e2d80;this[_0x4cc872(0x27f)]={'shown':VisuMZ[_0x4cc872(0x398)][_0x4cc872(0x531)][_0x4cc872(0x340)][_0x4cc872(0x5dc)],'enabled':VisuMZ['BattleGridSystem']['Settings'][_0x4cc872(0x340)][_0x4cc872(0x500)]};},Game_System['prototype'][_0x4e2d80(0x38d)]=function(){const _0x450437=_0x4e2d80;if(this['_battleGrid_MainMenu']===undefined)this['initBattleGridTacticsMenu']();return this['_battleGrid_MainMenu'][_0x450437(0x3d6)];},Game_System[_0x4e2d80(0x6a9)][_0x4e2d80(0x339)]=function(_0x50472e){const _0x2ac4ff=_0x4e2d80;if(this[_0x2ac4ff(0x27f)]===undefined)this[_0x2ac4ff(0x208)]();this[_0x2ac4ff(0x27f)][_0x2ac4ff(0x3d6)]=_0x50472e;},Game_System['prototype']['isMainMenuBattleGridTacticsEnabled']=function(){const _0x41e819=_0x4e2d80;if(this[_0x41e819(0x27f)]===undefined)this[_0x41e819(0x208)]();return this['_battleGrid_MainMenu'][_0x41e819(0x543)];},Game_System[_0x4e2d80(0x6a9)][_0x4e2d80(0x720)]=function(_0x593e04){const _0x3ce6b2=_0x4e2d80;if(this['_battleGrid_MainMenu']===undefined)this['initBattleGridTacticsMenu']();this['_battleGrid_MainMenu'][_0x3ce6b2(0x543)]=_0x593e04;},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x1fa)]=Game_System[_0x4e2d80(0x6a9)][_0x4e2d80(0x4a8)],Game_System['prototype']['isSideView']=function(){const _0x42116e=_0x4e2d80;if(BattleManager[_0x42116e(0x2ae)]())return!![];return VisuMZ['BattleGridSystem']['Game_System_isSideView'][_0x42116e(0x25d)](this);},VisuMZ['BattleGridSystem'][_0x4e2d80(0x3c5)]=Game_Action['prototype'][_0x4e2d80(0x29a)],Game_Action['prototype'][_0x4e2d80(0x29a)]=function(){const _0x5672b8=_0x4e2d80;VisuMZ['BattleGridSystem'][_0x5672b8(0x3c5)][_0x5672b8(0x25d)](this),this[_0x5672b8(0x4df)]();},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x4df)]=function(){const _0x2248d4=_0x4e2d80;this[_0x2248d4(0x212)]=undefined,this[_0x2248d4(0x187)]=undefined,this[_0x2248d4(0x1fd)]=undefined;},VisuMZ['BattleGridSystem'][_0x4e2d80(0x3c7)]=Game_Action['prototype'][_0x4e2d80(0x5e7)],Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x5e7)]=function(_0x30c24f){const _0x30fa0b=_0x4e2d80;this[_0x30fa0b(0x506)](_0x30c24f),VisuMZ[_0x30fa0b(0x398)][_0x30fa0b(0x3c7)]['call'](this,_0x30c24f);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x6ba)]=Game_Action['prototype'][_0x4e2d80(0x5e0)],Game_Action[_0x4e2d80(0x6a9)]['applyItemUserEffect']=function(_0x12336e){const _0x597c22=_0x4e2d80;this[_0x597c22(0x4b1)](_0x12336e),VisuMZ[_0x597c22(0x398)][_0x597c22(0x6ba)][_0x597c22(0x25d)](this,_0x12336e);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x2e2)]=Game_Action[_0x4e2d80(0x6a9)]['makeTargets'],Game_Action['prototype'][_0x4e2d80(0x686)]=function(){const _0x229658=_0x4e2d80;$gameTemp[_0x229658(0x307)](this);let _0x61bbd8=VisuMZ[_0x229658(0x398)]['Game_Action_makeTargets']['call'](this);return this[_0x229658(0x705)]()&&(_0x61bbd8=this[_0x229658(0x590)](_0x61bbd8)),VisuMZ[_0x229658(0x398)][_0x229658(0x614)](_0x61bbd8,this[_0x229658(0x633)]()),$gameTemp[_0x229658(0x727)](),_0x61bbd8;},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x506)]=function(_0x44f5c6){const _0x573873=_0x4e2d80;if(!$gameParty[_0x573873(0x315)]())return;if(!BattleManager['isUsingGridSystem']())return;if(!this[_0x573873(0x633)]())return;if(!this['subject']())return;if(this[_0x573873(0x61d)]())return;const _0x556aa1=VisuMZ[_0x573873(0x398)][_0x573873(0x329)],_0x9e3911=this[_0x573873(0x633)]()[_0x573873(0x5e2)]||'';_0x9e3911['match'](_0x556aa1[_0x573873(0x4d1)])&&this['applyBattleGridSystemUserMovement'](_0x44f5c6);},Game_Action[_0x4e2d80(0x6a9)]['applyBattleGridSystemUserMovement']=function(_0x429263){const _0x378400=_0x4e2d80;if(this[_0x378400(0x5be)])return;this[_0x378400(0x5be)]=!![];const _0x262f69=this[_0x378400(0x6a6)]();if(!_0x262f69[_0x378400(0x6ec)]())return;const _0x163679=_0x262f69[_0x378400(0x6a1)](),_0xd76acb=_0x262f69['gridRank'](),_0x284605=_0x262f69['gridFlank']();$gameTemp[_0x378400(0x260)]([_0x262f69]);const _0x58dadd=DataManager['parseBattleGridSelfMoveRegExp'](this['item'](),_0x262f69,_0x163679,_0xd76acb,_0x284605);$gameTemp[_0x378400(0x560)]();if(!_0x58dadd[_0x378400(0x45c)])return;let _0x1e7d82=Game_Battler[_0x378400(0x6d5)][_0x378400(0x3f0)]||0x1,_0x2fea15=Game_Battler['BATTLE_GRID_SYSTEM'][_0x378400(0x3da)];const _0x3a3b6e=VisuMZ[_0x378400(0x398)]['RegExp'],_0x20d684=this[_0x378400(0x633)]()[_0x378400(0x5e2)]||'';_0x20d684[_0x378400(0x240)](_0x3a3b6e[_0x378400(0x68d)])&&(_0x1e7d82=Number(RegExp['$1'])||0x1);if(_0x20d684[_0x378400(0x240)](_0x3a3b6e[_0x378400(0x6e7)]))_0x2fea15=!![];else _0x20d684[_0x378400(0x240)](_0x3a3b6e[_0x378400(0x22f)])&&(_0x2fea15=![]);_0x58dadd[_0x378400(0x46c)]&&_0x58dadd[_0x378400(0x46c)]['gridMoveTo'](_0x58dadd[_0x378400(0x5cf)],_0x58dadd['switchFlank'],_0x1e7d82,_0x2fea15),_0x262f69['gridMoveTo'](_0x58dadd[_0x378400(0x179)],_0x58dadd[_0x378400(0x395)],_0x1e7d82,_0x2fea15);},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x4b1)]=function(_0x4156e0){const _0x53d06e=_0x4e2d80;if(!$gameParty[_0x53d06e(0x315)]())return;if(!BattleManager[_0x53d06e(0x2ae)]())return;if(!this[_0x53d06e(0x633)]())return;if(!_0x4156e0)return;if(this[_0x53d06e(0x61d)]())return;const _0x347dcc=VisuMZ[_0x53d06e(0x398)][_0x53d06e(0x329)],_0x119e49=this[_0x53d06e(0x633)]()[_0x53d06e(0x5e2)]||'';_0x119e49[_0x53d06e(0x240)](_0x347dcc[_0x53d06e(0x3dc)])&&this[_0x53d06e(0x6cb)](_0x4156e0);},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x6cb)]=function(_0x5723b5){const _0x5c74c3=_0x4e2d80;if(_0x5723b5===this[_0x5c74c3(0x6a6)]()){if(this[_0x5c74c3(0x5be)])return;}if(!_0x5723b5['canGridMove']())return;const _0x47bf23=_0x5723b5[_0x5c74c3(0x20c)]();this[_0x5c74c3(0x2d2)]=this['_battleGridMovedTargets']||{};if(this[_0x5c74c3(0x2d2)][_0x47bf23])return;const _0x430f26=_0x5723b5[_0x5c74c3(0x6a1)](),_0xe622cf=_0x5723b5['gridRank'](),_0x111469=_0x5723b5[_0x5c74c3(0x454)](),_0xee2bcc=DataManager[_0x5c74c3(0x162)](this['item'](),_0x5723b5,_0x430f26,_0xe622cf,_0x111469);if(!_0xee2bcc['canMove']){if(_0xee2bcc[_0x5c74c3(0x3cd)]){if(_0xee2bcc[_0x5c74c3(0x699)])VisuMZ[_0x5c74c3(0x398)][_0x5c74c3(0x445)](_0x5723b5,_0xee2bcc['crashTarget'],0x0);else{}}return;}this['_battleGridMovedTargets'][_0x47bf23]=!![];let _0x530cb6=Game_Battler[_0x5c74c3(0x6d5)][_0x5c74c3(0x3f0)]||0x1,_0x217555=Game_Battler[_0x5c74c3(0x6d5)][_0x5c74c3(0x4c8)];const _0x3fb24e=VisuMZ[_0x5c74c3(0x398)][_0x5c74c3(0x329)],_0x5634c8=this['item']()[_0x5c74c3(0x5e2)]||'';_0x5634c8[_0x5c74c3(0x240)](_0x3fb24e[_0x5c74c3(0x493)])&&(_0x530cb6=Number(RegExp['$1'])||0x1);if(_0x5634c8['match'](_0x3fb24e['TargetMoveSilent']))_0x217555=!![];else _0x5634c8[_0x5c74c3(0x240)](_0x3fb24e[_0x5c74c3(0x5b1)])&&(_0x217555=![]);if(_0xee2bcc[_0x5c74c3(0x46c)]){const _0x411981=_0x5c74c3(0x6d1)[_0x5c74c3(0x3bb)](_0xee2bcc[_0x5c74c3(0x46c)]['isActor']()?_0x5c74c3(0x70c):_0x5c74c3(0x456),_0xee2bcc['switchTarget'][_0x5c74c3(0x427)]());!this[_0x5c74c3(0x2d2)][_0x411981]&&(this[_0x5c74c3(0x2d2)][_0x411981]=!![],_0xee2bcc[_0x5c74c3(0x46c)][_0x5c74c3(0x620)](_0xee2bcc[_0x5c74c3(0x5cf)],_0xee2bcc[_0x5c74c3(0x20f)],_0x530cb6,![]));}const _0x163ce4=_0x5723b5['gridRank'](),_0x47513a=_0x5723b5[_0x5c74c3(0x454)]();_0x5723b5['gridMoveTo'](_0xee2bcc[_0x5c74c3(0x179)],_0xee2bcc[_0x5c74c3(0x395)],_0x530cb6,_0x217555);const _0x2c4519=_0x5723b5[_0x5c74c3(0x4ba)](),_0x7a774=_0x5723b5[_0x5c74c3(0x454)](),_0x9fb13b=Math[_0x5c74c3(0x6af)](_0x163ce4-_0x2c4519)+Math['abs'](_0x47513a-_0x7a774);if(_0xee2bcc['crashed']){let _0x5adf41=0x3e8/0x3c*_0x530cb6;if(_0xee2bcc[_0x5c74c3(0x699)])VisuMZ['BattleGridSystem']['performGridCrashDamage'](_0x5723b5,_0xee2bcc[_0x5c74c3(0x699)],_0x5adf41);else{}}if(_0x9fb13b>0x0){let _0x45f3d7=0x3e8/0x3c*_0x530cb6;if(_0x5634c8[_0x5c74c3(0x240)](_0x3fb24e[_0x5c74c3(0x3a1)])){const _0x179758=Number(RegExp['$1'])*0.01;let _0x2d1a98=String(RegExp['$3'])[_0x5c74c3(0x1c0)]()['trim']();if(_0x2d1a98===_0x5c74c3(0x1bf))_0x2d1a98=_0x5c74c3(0x6f4);if(_0x2d1a98===_0x5c74c3(0x161))_0x2d1a98=_0x5c74c3(0x457);setTimeout(_0x5723b5['performGridDistanceDamage'][_0x5c74c3(0x27a)](_0x5723b5,this[_0x5c74c3(0x6a6)](),_0x2d1a98,_0x179758,_0x9fb13b),_0x45f3d7);}}},VisuMZ[_0x4e2d80(0x398)]['performGridCrashDamage']=function(_0xd23137,_0x5822bd,_0x407865){const _0x2bbe19=_0x4e2d80;if(_0xd23137===_0x5822bd)return;const _0x1a4942=Game_Battler[_0x2bbe19(0x6d5)];if(_0x1a4942[_0x2bbe19(0x2fd)]){const _0x41a44a=_0x1a4942[_0x2bbe19(0x47f)]||0x0;_0x5822bd['receiveBattleGridCrashDamage'](_0xd23137,_0x41a44a,_0x407865);}if(_0x1a4942[_0x2bbe19(0x468)]){const _0x4a5f4e=_0x1a4942['actionTargetAnimation']||0x0;_0xd23137[_0x2bbe19(0x271)](_0x5822bd,_0x4a5f4e,_0x407865);}},VisuMZ[_0x4e2d80(0x398)]['sortTargets']=function(_0x337c18,_0x54aad8){const _0x41c29c=_0x4e2d80;if(!BattleManager[_0x41c29c(0x2ae)]())return;_0x337c18[_0x41c29c(0x3c8)](null)[_0x41c29c(0x3c8)](undefined);const _0x3a707c=VisuMZ[_0x41c29c(0x398)][_0x41c29c(0x329)],_0x5dc31f=_0x54aad8[_0x41c29c(0x5e2)]||'';if(_0x5dc31f['match'](_0x3a707c[_0x41c29c(0x3dc)])){const _0x53e3da=RegExp['$2'][_0x41c29c(0x53a)]()[_0x41c29c(0x373)]();VisuMZ[_0x41c29c(0x398)][_0x41c29c(0x391)](_0x337c18,_0x53e3da);}},VisuMZ['BattleGridSystem'][_0x4e2d80(0x391)]=function(_0x1408e8,_0x13de1d){const _0x135357=_0x4e2d80;_0x1408e8[_0x135357(0x320)]((_0x151803,_0x3e6105)=>{const _0x1a9cfd=_0x135357,_0x478ce2=_0x151803[_0x1a9cfd(0x4ba)](),_0xdc409f=_0x151803[_0x1a9cfd(0x454)](),_0x44e0ca=_0x3e6105[_0x1a9cfd(0x4ba)](),_0x1ac61c=_0x3e6105[_0x1a9cfd(0x454)]();if(_0x13de1d[_0x1a9cfd(0x314)]('UP')){if(_0xdc409f!==_0x1ac61c)return _0xdc409f-_0x1ac61c;}if(_0x13de1d['includes'](_0x1a9cfd(0x541))){if(_0xdc409f!==_0x1ac61c)return _0x1ac61c-_0xdc409f;}if(_0x13de1d[_0x1a9cfd(0x314)](_0x1a9cfd(0x492)))return _0x478ce2-_0x44e0ca;if(_0x13de1d['includes'](_0x1a9cfd(0x326)))return _0x44e0ca-_0x478ce2;if(_0x13de1d['includes'](_0x1a9cfd(0x4ae)))return _0x151803[_0x1a9cfd(0x444)]()?_0x478ce2-_0x44e0ca:_0x44e0ca-_0x478ce2;if(_0x13de1d[_0x1a9cfd(0x314)](_0x1a9cfd(0x65e)))return _0x151803[_0x1a9cfd(0x660)]()?_0x478ce2-_0x44e0ca:_0x44e0ca-_0x478ce2;return _0x478ce2-_0x44e0ca;});},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x3b5)]=function(){const _0xef34a=_0x4e2d80;if(this[_0xef34a(0x6ff)]())return{'ranks':Array[_0xef34a(0x66f)](Array(BattleManager[_0xef34a(0x646)]())[_0xef34a(0x40d)]())[_0xef34a(0x335)](_0x325377=>++_0x325377),'flanks':Array['from'](Array(BattleManager[_0xef34a(0x21f)]())[_0xef34a(0x40d)]())[_0xef34a(0x335)](_0x182756=>++_0x182756)};else return this[_0xef34a(0x62c)]()?this[_0xef34a(0x5fa)]():this[_0xef34a(0x2f2)]();},Game_Action['prototype']['restrictedGridData']=function(){const _0x422255=_0x4e2d80;if(this['_restrictedGridData']!==undefined)return this[_0x422255(0x212)];const _0x2066bc={'ranks':Array[_0x422255(0x66f)](Array(BattleManager['maxRanks']())['keys']())[_0x422255(0x335)](_0xfd03ac=>++_0xfd03ac),'flanks':Array['from'](Array(BattleManager[_0x422255(0x21f)]())[_0x422255(0x40d)]())[_0x422255(0x335)](_0x4ee731=>++_0x4ee731)},_0x4bbad9=VisuMZ[_0x422255(0x398)][_0x422255(0x329)],_0x5328a=this[_0x422255(0x633)]()?this['item']()['note']||'':'';return _0x5328a[_0x422255(0x240)](_0x4bbad9[_0x422255(0x175)])&&(_0x2066bc[_0x422255(0x36c)]=RegExp['$1'][_0x422255(0x18a)](',')['map'](_0x4cdd29=>Number(_0x4cdd29)[_0x422255(0x62d)](0x1,BattleManager[_0x422255(0x646)]()))),_0x5328a[_0x422255(0x240)](_0x4bbad9[_0x422255(0x571)])&&(_0x2066bc[_0x422255(0x50e)]=RegExp['$1'][_0x422255(0x18a)](',')['map'](_0x1583d9=>Number(_0x1583d9)[_0x422255(0x62d)](0x1,BattleManager[_0x422255(0x21f)]()))),_0x5328a[_0x422255(0x240)](_0x4bbad9[_0x422255(0x33e)])&&(_0x2066bc['sameRank']=!![],_0x2066bc[_0x422255(0x664)]=this[_0x422255(0x6a6)]()[_0x422255(0x20c)]()),_0x5328a[_0x422255(0x240)](_0x4bbad9[_0x422255(0x4ac)])&&(_0x2066bc['sameFlank']=!![],_0x2066bc[_0x422255(0x664)]=this[_0x422255(0x6a6)]()[_0x422255(0x20c)]()),_0x5328a['match'](_0x4bbad9['AllowedFrontRank'])&&(_0x2066bc[_0x422255(0x27d)]=!![]),_0x5328a['match'](_0x4bbad9['AllowedBackRank'])&&(_0x2066bc['backRank']=!![]),_0x5328a['match'](_0x4bbad9['AllowedTopFlank'])&&(_0x2066bc['topFlank']=!![]),_0x5328a[_0x422255(0x240)](_0x4bbad9[_0x422255(0x1c5)])&&(_0x2066bc[_0x422255(0x5ea)]=!![]),this['_restrictedGridData']=_0x2066bc,this[_0x422255(0x212)];},VisuMZ['BattleGridSystem'][_0x4e2d80(0x44c)]=function(_0x390a04,_0x46d0d8,_0x278f79,_0x506dfa){const _0x4069b2=_0x4e2d80;!_0x390a04&&(_0x390a04={'ranks':Array[_0x4069b2(0x66f)](Array(BattleManager['maxRanks']())[_0x4069b2(0x40d)]())[_0x4069b2(0x335)](_0x274c6b=>++_0x274c6b),'flanks':Array[_0x4069b2(0x66f)](Array(BattleManager[_0x4069b2(0x21f)]())[_0x4069b2(0x40d)]())[_0x4069b2(0x335)](_0x39d53c=>++_0x39d53c)});if(_0x390a04[_0x4069b2(0x565)]){const _0x3ebeab=BattleManager[_0x4069b2(0x17f)](_0x390a04[_0x4069b2(0x664)]);if(_0x3ebeab&&!_0x3ebeab[_0x4069b2(0x1af)](_0x278f79))return![];}if(_0x390a04['sameFlank']){const _0xd88c26=BattleManager['getBattlerFromKey'](_0x390a04[_0x4069b2(0x664)]);if(_0xd88c26&&!_0xd88c26[_0x4069b2(0x4da)](_0x506dfa))return![];}if(_0x390a04[_0x4069b2(0x27d)]){if(_0x46d0d8['getGridFrontRank']()!==_0x278f79)return![];}if(_0x390a04[_0x4069b2(0x56d)]){if(_0x46d0d8['getGridBackRank']()!==_0x278f79)return![];}if(_0x390a04['topFlank']){if(_0x46d0d8[_0x4069b2(0x4f1)]()!==_0x506dfa)return![];}if(_0x390a04['bottomFlank']){if(_0x46d0d8['getGridBottomFlank']()!==_0x506dfa)return![];}return _0x278f79=_0x278f79[_0x4069b2(0x62d)](0x1,BattleManager[_0x4069b2(0x646)]()),_0x506dfa=_0x506dfa[_0x4069b2(0x62d)](0x1,BattleManager[_0x4069b2(0x21f)]()),_0x390a04[_0x4069b2(0x36c)][_0x4069b2(0x314)](_0x278f79)&&_0x390a04[_0x4069b2(0x50e)]['includes'](_0x506dfa);},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x62c)]=function(){const _0x1425ca=_0x4e2d80;if(!this['item']())return![];const _0x1c25cc=VisuMZ[_0x1425ca(0x398)][_0x1425ca(0x329)],_0x5ae9b6=this[_0x1425ca(0x633)]()['note']||'';return _0x5ae9b6['match'](_0x1c25cc[_0x1425ca(0x674)]);},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x5fa)]=function(){const _0x37cc64=_0x4e2d80;return this[_0x37cc64(0x6a6)]()[_0x37cc64(0x5fa)](this);},Game_BattlerBase[_0x4e2d80(0x6a9)]['weaponRangeGridData']=function(){const _0x9b8505=_0x4e2d80;if(this[_0x9b8505(0x374)]!==undefined)return this[_0x9b8505(0x374)];const _0x3a3f1f={'ranks':Array[_0x9b8505(0x66f)](Array(BattleManager['maxRanks']())['keys']())[_0x9b8505(0x335)](_0x1ce973=>++_0x1ce973),'flanks':Array['from'](Array(BattleManager[_0x9b8505(0x21f)]())[_0x9b8505(0x40d)]())[_0x9b8505(0x335)](_0x467633=>++_0x467633)};return Game_Battler[_0x9b8505(0x6d5)]['defaultWpnRangeMelee']&&(_0x3a3f1f[_0x9b8505(0x27d)]=!![]),this[_0x9b8505(0x374)]=_0x3a3f1f,this[_0x9b8505(0x374)];},Game_Actor['prototype']['weaponRangeGridData']=function(_0x7ffdb2){const _0x1a3c80=_0x4e2d80,_0x2ede89=this[_0x1a3c80(0x14c)]()[_0x1a3c80(0x3c8)](undefined)['remove'](null);if(_0x2ede89[_0x1a3c80(0x2f8)]>0x0)return DataManager[_0x1a3c80(0x5fa)](_0x2ede89[0x0],_0x7ffdb2);return Game_Battler[_0x1a3c80(0x6a9)][_0x1a3c80(0x5fa)][_0x1a3c80(0x25d)](this);},Game_Enemy[_0x4e2d80(0x6a9)]['weaponRangeGridData']=function(_0x241898){const _0x667781=_0x4e2d80;return DataManager['weaponRangeGridData'](this[_0x667781(0x456)](),_0x241898);},DataManager['weaponRangeGridData']=function(_0x55a690,_0x5e34b0){const _0x37b9e7=_0x4e2d80,_0x3900cf=VisuMZ[_0x37b9e7(0x441)](_0x55a690,'weaponRangeData');this['_weaponRangeGridData']=this[_0x37b9e7(0x374)]||{};if(this[_0x37b9e7(0x374)][_0x3900cf]!==undefined)return this['_weaponRangeGridData'][_0x3900cf];const _0x419946={'ranks':Array['from'](Array(BattleManager[_0x37b9e7(0x646)]())[_0x37b9e7(0x40d)]())['map'](_0x3e045c=>++_0x3e045c),'flanks':Array['from'](Array(BattleManager[_0x37b9e7(0x21f)]())[_0x37b9e7(0x40d)]())[_0x37b9e7(0x335)](_0x10c795=>++_0x10c795)},_0x23e1c8=VisuMZ['BattleGridSystem']['RegExp'],_0x207a4b=_0x55a690[_0x37b9e7(0x5e2)]||'';!_0x5e34b0&&(_0x5e34b0=BattleManager[_0x37b9e7(0x6e0)]()?BattleManager['inputtingAction']():BattleManager[_0x37b9e7(0x43a)]);!_0x207a4b[_0x37b9e7(0x240)](_0x23e1c8[_0x37b9e7(0x3b3)])&&(Game_Battler['BATTLE_GRID_SYSTEM']['defaultWpnRangeMelee']&&(_0x419946[_0x37b9e7(0x27d)]=!![]));if(_0x207a4b[_0x37b9e7(0x240)](_0x23e1c8[_0x37b9e7(0x514)]))return this[_0x37b9e7(0x374)][_0x3900cf]=_0x419946,this[_0x37b9e7(0x374)][_0x3900cf];return _0x207a4b[_0x37b9e7(0x240)](_0x23e1c8[_0x37b9e7(0x702)])&&(_0x419946['ranks']=RegExp['$1'][_0x37b9e7(0x18a)](',')['map'](_0x256ab4=>Number(_0x256ab4)[_0x37b9e7(0x62d)](0x1,BattleManager[_0x37b9e7(0x646)]()))),_0x207a4b[_0x37b9e7(0x240)](_0x23e1c8['WpnRangeFlanks'])&&(_0x419946['flanks']=RegExp['$1'][_0x37b9e7(0x18a)](',')[_0x37b9e7(0x335)](_0x256dcd=>Number(_0x256dcd)[_0x37b9e7(0x62d)](0x1,BattleManager['maxFlanks']()))),_0x5e34b0&&_0x207a4b[_0x37b9e7(0x240)](_0x23e1c8['WpnRangeSameRank'])&&(_0x419946[_0x37b9e7(0x565)]=!![],_0x419946[_0x37b9e7(0x664)]=_0x5e34b0[_0x37b9e7(0x6a6)]()['battlerKey']()),_0x5e34b0&&_0x207a4b[_0x37b9e7(0x240)](_0x23e1c8[_0x37b9e7(0x272)])&&(_0x419946[_0x37b9e7(0x345)]=!![],_0x419946['userKey']=_0x5e34b0[_0x37b9e7(0x6a6)]()[_0x37b9e7(0x20c)]()),_0x207a4b[_0x37b9e7(0x240)](_0x23e1c8['WpnRangeFrontRank'])&&(_0x419946[_0x37b9e7(0x27d)]=!![]),_0x207a4b['match'](_0x23e1c8['WpnRangeBackRank'])&&(_0x419946['backRank']=!![]),_0x207a4b[_0x37b9e7(0x240)](_0x23e1c8[_0x37b9e7(0x3d3)])&&(_0x419946[_0x37b9e7(0x251)]=!![]),_0x207a4b[_0x37b9e7(0x240)](_0x23e1c8['WpnRangeBottomFlank'])&&(_0x419946[_0x37b9e7(0x5ea)]=!![]),_0x207a4b[_0x37b9e7(0x240)](_0x23e1c8[_0x37b9e7(0x523)])&&(_0x419946[_0x37b9e7(0x27d)]=!![]),this[_0x37b9e7(0x374)][_0x3900cf]=_0x419946,this[_0x37b9e7(0x374)][_0x3900cf];},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x705)]=function(){const _0xd53c1e=_0x4e2d80;if(!BattleManager[_0xd53c1e(0x2ae)]())return![];if(this['_targetBattlerKey']===_0xd53c1e(0x173))return![];if(this[_0xd53c1e(0x4bb)]==='all\x20enemies')return![];if(this[_0xd53c1e(0x45f)]())return![];if(this[_0xd53c1e(0x6f1)]())return![];if(this[_0xd53c1e(0x28c)]())return![];return DataManager[_0xd53c1e(0x13b)](this[_0xd53c1e(0x633)]());},DataManager[_0x4e2d80(0x13b)]=function(_0x357c3c){const _0x43760e=_0x4e2d80;return!!this[_0x43760e(0x156)](_0x357c3c);},DataManager['getAreaOfEffectData']=function(_0x554fb7){const _0xe4e0b4=_0x4e2d80;if(!_0x554fb7)return null;const _0x1d3c30=VisuMZ[_0xe4e0b4(0x441)](_0x554fb7,_0xe4e0b4(0x3ef));this[_0xe4e0b4(0x4dd)]=this[_0xe4e0b4(0x4dd)]||{};if(this[_0xe4e0b4(0x4dd)][_0x1d3c30]!==undefined)return this[_0xe4e0b4(0x4dd)][_0x1d3c30];this[_0xe4e0b4(0x4dd)][_0x1d3c30]=null;const _0x45776a=VisuMZ[_0xe4e0b4(0x398)][_0xe4e0b4(0x329)],_0x3aea8b=_0x554fb7[_0xe4e0b4(0x5e2)]||'',_0x545396=[];if(_0x3aea8b[_0xe4e0b4(0x240)](_0x45776a[_0xe4e0b4(0x263)])){const _0x2210c6=String(RegExp['$1'])[_0xe4e0b4(0x18a)](/[\r\n]+/);while(_0x2210c6[_0xe4e0b4(0x2f8)])_0x545396[_0xe4e0b4(0x482)](_0x2210c6[_0xe4e0b4(0x69f)]());}const _0x1b76b3=_0x3aea8b[_0xe4e0b4(0x240)](_0x45776a[_0xe4e0b4(0x3cc)]);if(_0x1b76b3)for(const _0x3c98e9 of _0x1b76b3){_0x3c98e9[_0xe4e0b4(0x240)](_0x45776a[_0xe4e0b4(0x3cc)]),_0x545396[_0xe4e0b4(0x482)](String(RegExp['$1']));}if(_0x545396[_0xe4e0b4(0x2f8)]>0x0)this[_0xe4e0b4(0x4dd)][_0x1d3c30]=this[_0xe4e0b4(0x5a9)]({},_0x545396);return this[_0xe4e0b4(0x4dd)][_0x1d3c30];},Game_Action['prototype']['addAreaOfEffectTargets']=function(_0x1fff0e){const _0x11212f=_0x4e2d80;if(!BattleManager[_0x11212f(0x2ae)]())return _0x1fff0e;if(this[_0x11212f(0x6ff)]())return _0x1fff0e;const _0x5380d9=DataManager['getAreaOfEffectData'](this[_0x11212f(0x633)]());if(!_0x5380d9)return _0x1fff0e;const _0x11e777=_0x1fff0e[0x0];this['_aoeMainTargetKey']=_0x11e777[_0x11212f(0x20c)](),this[_0x11212f(0x1fd)]={'rank':_0x11e777[_0x11212f(0x1d3)](),'flank':_0x11e777['centerGridFlank']()};let _0x52b8f3=this['getAreaOfEffectTargets'](_0x1fff0e,_0x11e777['friendsUnit'](),this[_0x11212f(0x1fd)][_0x11212f(0x352)],this[_0x11212f(0x1fd)][_0x11212f(0x62f)]);return _0x52b8f3=this[_0x11212f(0x166)](_0x52b8f3),_0x1fff0e[_0x11212f(0x2a6)](_0x52b8f3);},Game_Action['prototype']['getAreaOfEffectTargets']=function(_0x574773,_0x5b6202,_0x4b5d8a,_0x1e245c){const _0x14fcb2=_0x4e2d80;$gameTemp[_0x14fcb2(0x652)](!![]);const _0x442c93=_0x5b6202[_0x14fcb2(0x3d1)]();$gameTemp[_0x14fcb2(0x652)](![]);const _0x47968f=DataManager['getAreaOfEffectData'](this['item']());let _0x740595=[];for(const _0xb4af37 of _0x442c93){if(_0xb4af37===main)continue;if(_0x574773[_0x14fcb2(0x314)](_0xb4af37))continue;if(_0x740595['includes'](_0xb4af37))continue;_0xb4af37['isInGridRange'](_0x47968f,_0x4b5d8a,_0x1e245c)&&_0x740595[_0x14fcb2(0x482)](_0xb4af37);}return _0x740595;},Game_Action['prototype'][_0x4e2d80(0x648)]=function(){const _0x1ad9ff=_0x4e2d80;if(!this[_0x1ad9ff(0x187)])return null;return BattleManager[_0x1ad9ff(0x17f)](this[_0x1ad9ff(0x187)]);},VisuMZ['BattleGridSystem'][_0x4e2d80(0x420)]=VisuMZ['GetActionSequenceSpecialTarget'],VisuMZ[_0x4e2d80(0x13f)]=function(){const _0x499c98=_0x4e2d80;if(BattleManager[_0x499c98(0x2ae)]()){const _0x2e8ed8=BattleManager[_0x499c98(0x43a)];if(_0x2e8ed8&&_0x2e8ed8['isAreaOfEffect']())return _0x2e8ed8[_0x499c98(0x648)]();}return VisuMZ[_0x499c98(0x398)][_0x499c98(0x420)][_0x499c98(0x25d)](this);},Game_Action['prototype'][_0x4e2d80(0x6ff)]=function(){const _0x5461cb=_0x4e2d80;if(!BattleManager[_0x5461cb(0x2ae)]())return![];if(!this[_0x5461cb(0x656)]())return![];const _0x5b46f4=String(this[_0x5461cb(0x633)]()['scope']);return _0x5b46f4['match'](/GRID (?:RANK|FLANK|NODE)/i);},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x673)]=function(){const _0x33f7c1=_0x4e2d80;if(!BattleManager[_0x33f7c1(0x2ae)]())return![];if(!this[_0x33f7c1(0x656)]())return![];const _0x4ebcc5=String(this[_0x33f7c1(0x633)]()['scope']);return _0x4ebcc5['match'](/GRID NODE/i);},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x16c)]=function(){const _0x25dbf7=_0x4e2d80;if(!BattleManager[_0x25dbf7(0x2ae)]())return![];if(!this['isBattleCoreTargetScope']())return![];const _0x4b72ae=String(this[_0x25dbf7(0x633)]()[_0x25dbf7(0x209)]);return _0x4b72ae[_0x25dbf7(0x240)](/GRID RANK/i);},Game_Action['prototype'][_0x4e2d80(0x2ee)]=function(){const _0x3a9c8c=_0x4e2d80;if(!BattleManager['isUsingGridSystem']())return![];if(!this[_0x3a9c8c(0x656)]())return![];const _0x21bd95=String(this[_0x3a9c8c(0x633)]()[_0x3a9c8c(0x209)]);return _0x21bd95[_0x3a9c8c(0x240)](/GRID FLANK/i);},Game_Action[_0x4e2d80(0x6a9)]['isForEmptyBattleGridNode']=function(){const _0x313041=_0x4e2d80;if(!BattleManager[_0x313041(0x2ae)]())return![];if(!this['isForBattleGridNode']())return![];const _0x1b95b7=String(this[_0x313041(0x633)]()['scope']);return _0x1b95b7[_0x313041(0x240)](/EMPTY/i);},Game_Action['prototype'][_0x4e2d80(0x3aa)]=function(){const _0x596715=_0x4e2d80;if(!BattleManager['isUsingGridSystem']())return![];if(!this[_0x596715(0x673)]())return![];const _0x4bb821=String(this[_0x596715(0x633)]()[_0x596715(0x209)]);return _0x4bb821[_0x596715(0x240)](/ANY/i);},Game_Action['prototype'][_0x4e2d80(0x706)]=function(){const _0x1a69e2=_0x4e2d80;if(!BattleManager[_0x1a69e2(0x2ae)]())return![];if(this[_0x1a69e2(0x4ab)]())return!![];if(this[_0x1a69e2(0x3aa)]())return!![];return![];},Game_Action[_0x4e2d80(0x6a9)]['getSelectedBattleGridNode']=function(){const _0x43c9e3=_0x4e2d80;if(this[_0x43c9e3(0x554)]!==undefined)return this[_0x43c9e3(0x554)];const _0x3ba0fd=this['_targetBattlerKey'],_0x48aebd=_0x3ba0fd['split'](',')[_0x43c9e3(0x335)](_0x2c1b50=>_0x2c1b50[_0x43c9e3(0x1c0)]()[_0x43c9e3(0x373)]()),_0xdb7650=_0x48aebd[0x0]===_0x43c9e3(0x70c)?!![]:![];let _0x3ac72c=Number(_0x48aebd[0x1])[_0x43c9e3(0x62d)](0x1,BattleManager['maxRanks']()),_0x3789d0=Number(_0x48aebd[0x2])['clamp'](0x1,BattleManager['maxFlanks']());return this[_0x43c9e3(0x554)]={'forActor':_0xdb7650,'rank':_0x3ac72c,'flank':_0x3789d0},this[_0x43c9e3(0x554)];},Game_Action[_0x4e2d80(0x6a9)]['getSelectedBattleGridRank']=function(){const _0x350e20=_0x4e2d80;if(this[_0x350e20(0x554)]!==undefined)return this[_0x350e20(0x554)];const _0x1d57a8=this[_0x350e20(0x4bb)],_0x254c4e=_0x1d57a8[_0x350e20(0x18a)](',')[_0x350e20(0x335)](_0x49ad42=>_0x49ad42['toLowerCase']()[_0x350e20(0x373)]()),_0x1a7e62=_0x254c4e[0x0]===_0x350e20(0x70c)?!![]:![];let _0x19e7cf=Number(_0x254c4e[0x1])[_0x350e20(0x62d)](0x1,BattleManager[_0x350e20(0x646)]()),_0x304942=(BattleManager[_0x350e20(0x21f)]()+0x1)/0x2;return this['_selectedBattleGridNode']={'forActor':_0x1a7e62,'rank':_0x19e7cf,'flank':_0x304942},this[_0x350e20(0x554)];},Game_Action[_0x4e2d80(0x6a9)]['getSelectedBattleGridFlank']=function(){const _0x278d52=_0x4e2d80;if(this[_0x278d52(0x554)]!==undefined)return this['_selectedBattleGridNode'];const _0x222937=this[_0x278d52(0x4bb)],_0x1d3afc=_0x222937[_0x278d52(0x18a)](',')['map'](_0x52f8a4=>_0x52f8a4[_0x278d52(0x1c0)]()[_0x278d52(0x373)]()),_0x4df90a=_0x1d3afc[0x0]===_0x278d52(0x70c)?!![]:![];let _0x40cf13=(BattleManager[_0x278d52(0x646)]()+0x1)/0x2,_0x2dc457=Number(_0x1d3afc[0x1])[_0x278d52(0x62d)](0x1,BattleManager[_0x278d52(0x21f)]());return this[_0x278d52(0x554)]={'forActor':_0x4df90a,'rank':_0x40cf13,'flank':_0x2dc457},this[_0x278d52(0x554)];},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x6bb)]=Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x697)],Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x697)]=function(){const _0x5e0fa1=_0x4e2d80;if(this[_0x5e0fa1(0x4ab)]())return(this[_0x5e0fa1(0x6a6)]()['isEnemy']()||this[_0x5e0fa1(0x6a6)]()[_0x5e0fa1(0x418)]())&&this['selectRandomEmptyGridNode'](),this[_0x5e0fa1(0x20d)](),[];else{if(this[_0x5e0fa1(0x3aa)]())return(this['subject']()[_0x5e0fa1(0x660)]()||this[_0x5e0fa1(0x6a6)]()[_0x5e0fa1(0x418)]())&&this[_0x5e0fa1(0x4f6)](),this[_0x5e0fa1(0x20d)](),[];else{if(this[_0x5e0fa1(0x673)]())return this[_0x5e0fa1(0x6a6)]()[_0x5e0fa1(0x660)]()||this[_0x5e0fa1(0x6a6)]()[_0x5e0fa1(0x418)]()?this[_0x5e0fa1(0x18b)]():this[_0x5e0fa1(0x655)]();else{if(this[_0x5e0fa1(0x16c)]())return this[_0x5e0fa1(0x6a6)]()['isEnemy']()||this[_0x5e0fa1(0x6a6)]()['isAutoBattle']()?this['makeTargetsBattleGridRankAI']():this[_0x5e0fa1(0x704)]();else{if(this[_0x5e0fa1(0x2ee)]())return this['subject']()[_0x5e0fa1(0x660)]()||this[_0x5e0fa1(0x6a6)]()['isAutoBattle']()?this[_0x5e0fa1(0x3ea)]():this['makeTargetsBattleGridFlankDirect']();}}}}return VisuMZ[_0x5e0fa1(0x398)][_0x5e0fa1(0x6bb)][_0x5e0fa1(0x25d)](this);},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x6c7)]=function(){const _0xbe59e3=_0x4e2d80;if(this[_0xbe59e3(0x554)]!==undefined)return;let _0x1ac107=![];if(this['isForAnyone']()&&this[_0xbe59e3(0x2af)]())_0x1ac107=!![];else!this[_0xbe59e3(0x15d)]()&&this['isForFriend']()&&(_0x1ac107=!![]);const _0x3e4145=_0x1ac107?this[_0xbe59e3(0x6a1)]():this[_0xbe59e3(0x31b)]();let _0xc0b8ce=[];const _0x5bf5b8=BattleManager[_0xbe59e3(0x646)](),_0x26fa4d=BattleManager['maxFlanks']();for(let _0x1466ef=0x1;_0x1466ef<=_0x26fa4d;_0x1466ef++){for(let _0x3f39e2=0x1;_0x3f39e2<=_0x5bf5b8;_0x3f39e2++){if(_0x3e4145[_0xbe59e3(0x61c)](_0x3f39e2,_0x1466ef))continue;_0xc0b8ce['push']([_0x3f39e2,_0x1466ef]);}}if(_0xc0b8ce['length']>0x0){const _0x4f51d6=_0xc0b8ce[Math[_0xbe59e3(0x300)](_0xc0b8ce[_0xbe59e3(0x2f8)])];this[_0xbe59e3(0x554)]={'forActor':_0x3e4145===$gameParty,'rank':_0x4f51d6[0x0],'flank':_0x4f51d6[0x1]};}else this[_0xbe59e3(0x4f6)]();},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x4f6)]=function(){const _0x5c95dc=_0x4e2d80;let _0x4848fb=![];if(this[_0x5c95dc(0x15d)]()&&this[_0x5c95dc(0x2af)]())_0x4848fb=!![];else!this['isForAnyone']()&&this[_0x5c95dc(0x1f9)]()&&(_0x4848fb=!![]);const _0x1025ef=_0x4848fb?this[_0x5c95dc(0x6a1)]():this[_0x5c95dc(0x31b)](),_0x67bef9=BattleManager[_0x5c95dc(0x646)](),_0x25297f=BattleManager['maxFlanks']();this[_0x5c95dc(0x554)]={'forActor':_0x1025ef===$gameParty,'rank':Math['randomInt'](_0x67bef9)+0x1,'flank':Math[_0x5c95dc(0x300)](_0x25297f)+0x1};},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x18b)]=function(){const _0x175281=_0x4e2d80;let _0x5c4229=[],_0x28c733=![];if(this[_0x175281(0x15d)]()&&this[_0x175281(0x2af)]())_0x28c733=!![];else!this[_0x175281(0x15d)]()&&this[_0x175281(0x1f9)]()&&(_0x28c733=!![]);if(_0x28c733)_0x5c4229['push'](this[_0x175281(0x6a1)]()[_0x175281(0x6df)]());else{if(Imported[_0x175281(0x2d6)]&&this[_0x175281(0x55a)]())_0x5c4229[_0x175281(0x482)](this['subject']()[_0x175281(0x24d)]());else{if(Imported['VisuMZ_2_AggroControlSystem']&&this[_0x175281(0x248)]()){const _0xf9718f=this[_0x175281(0x633)]()[_0x175281(0x39c)],_0x27d770=this[_0x175281(0x31b)]()['getTauntMembers'](_0xf9718f);_0x5c4229[_0x175281(0x482)](_0x27d770[Math[_0x175281(0x300)](_0x27d770['length'])]);}else _0x5c4229[_0x175281(0x482)](this['opponentsUnit']()['randomTarget']());}}const _0x9e62de=_0x5c4229[0x0];if(this[_0x175281(0x705)]()){this[_0x175281(0x187)]=_0x9e62de[_0x175281(0x20c)](),this['_aoeCenter']={'rank':_0x9e62de[_0x175281(0x1d3)](),'flank':_0x9e62de[_0x175281(0x242)]()};const _0x90b435=_0x9e62de[_0x175281(0x6a1)]();let _0x4a083f=this[_0x175281(0x3b0)](_0x5c4229,_0x90b435,this[_0x175281(0x1fd)][_0x175281(0x352)],this['_aoeCenter'][_0x175281(0x62f)]);_0x5c4229=_0x5c4229[_0x175281(0x2a6)](_0x4a083f);}return this[_0x175281(0x166)](_0x5c4229);},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x655)]=function(){const _0x498d3e=_0x4e2d80,_0x316159=this[_0x498d3e(0x4bb)],_0x5b81ad=_0x316159[_0x498d3e(0x18a)](',')[_0x498d3e(0x335)](_0x374d1e=>_0x374d1e[_0x498d3e(0x1c0)]()[_0x498d3e(0x373)]()),_0x45b921=_0x5b81ad[0x0]===_0x498d3e(0x70c),_0x25cd86=_0x45b921?$gameParty:$gameTroop,_0x20d53e=Number(_0x5b81ad[0x1])[_0x498d3e(0x62d)](0x1,BattleManager['maxRanks']()),_0x5e4991=Number(_0x5b81ad[0x2])[_0x498d3e(0x62d)](0x1,BattleManager[_0x498d3e(0x21f)]());let _0x101331=[];const _0x341876=_0x25cd86['getMemberAtGridNode'](_0x20d53e,_0x5e4991);if(_0x341876)_0x101331['push'](_0x341876);if(this[_0x498d3e(0x705)]()){this[_0x498d3e(0x187)]=_0x341876?_0x341876[_0x498d3e(0x20c)]():_0x498d3e(0x575),this[_0x498d3e(0x1fd)]={'rank':_0x20d53e,'flank':_0x5e4991};let _0x48ed11=this['getAreaOfEffectTargets'](_0x101331,_0x25cd86,_0x20d53e,_0x5e4991);_0x101331=_0x101331[_0x498d3e(0x2a6)](_0x48ed11);if(this['_aoeMainTargetKey']===_0x498d3e(0x575)){const _0x157157=$gameTemp[_0x498d3e(0x3eb)]();_0x157157[_0x498d3e(0x2de)](_0x45b921,_0x20d53e,_0x5e4991,0x1);}}return this['repeatTargets'](_0x101331);},Game_Action[_0x4e2d80(0x6a9)]['makeTargetsBattleGridRankAI']=function(){const _0xc8d4ea=_0x4e2d80;let _0x45dc9f=[],_0x451dc4=![];if(this[_0xc8d4ea(0x15d)]()&&this[_0xc8d4ea(0x2af)]())_0x451dc4=!![];else!this[_0xc8d4ea(0x15d)]()&&this[_0xc8d4ea(0x1f9)]()&&(_0x451dc4=!![]);if(_0x451dc4){const _0x48f240=this[_0xc8d4ea(0x6a1)]()[_0xc8d4ea(0x6df)]()[_0xc8d4ea(0x1d3)]();_0x45dc9f=this[_0xc8d4ea(0x6a1)]()[_0xc8d4ea(0x24f)](_0x48f240);}else{if(Imported[_0xc8d4ea(0x2d6)]&&this[_0xc8d4ea(0x55a)]()){const _0x385542=this[_0xc8d4ea(0x6a6)]()[_0xc8d4ea(0x24d)]()['centerGridRank']();_0x45dc9f=this[_0xc8d4ea(0x31b)]()[_0xc8d4ea(0x24f)](_0x385542);}else{if(Imported[_0xc8d4ea(0x2d6)]&&this[_0xc8d4ea(0x248)]()){const _0x4fd0be=this[_0xc8d4ea(0x633)]()[_0xc8d4ea(0x39c)],_0xe3763f=this[_0xc8d4ea(0x31b)]()[_0xc8d4ea(0x4bc)](_0x4fd0be),_0x42d31f=_0xe3763f[Math[_0xc8d4ea(0x300)](_0xe3763f[_0xc8d4ea(0x2f8)])][_0xc8d4ea(0x1d3)]();_0x45dc9f=this['opponentsUnit']()[_0xc8d4ea(0x24f)](_0x42d31f);}else{const _0x5b0803=this[_0xc8d4ea(0x31b)]()[_0xc8d4ea(0x6df)]()[_0xc8d4ea(0x1d3)]();_0x45dc9f=this[_0xc8d4ea(0x31b)]()['getAliveMembersAtGridRank'](_0x5b0803);}}}return this[_0xc8d4ea(0x166)](_0x45dc9f);},Game_Action[_0x4e2d80(0x6a9)]['makeTargetsBattleGridRankDirect']=function(){const _0x75a243=_0x4e2d80,_0x34a9a9=this[_0x75a243(0x4bb)],_0x17ca93=_0x34a9a9[_0x75a243(0x18a)](',')[_0x75a243(0x335)](_0xda97bf=>_0xda97bf[_0x75a243(0x1c0)]()[_0x75a243(0x373)]()),_0xc88062=_0x17ca93[0x0]===_0x75a243(0x70c)?$gameParty:$gameTroop,_0x55d5f0=Number(_0x17ca93[0x1])[_0x75a243(0x62d)](0x1,BattleManager[_0x75a243(0x646)]());let _0x1bbd20=[];return _0x1bbd20=_0xc88062['getAliveMembersAtGridRank'](_0x55d5f0),this[_0x75a243(0x166)](_0x1bbd20);},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x3ea)]=function(){const _0x29a715=_0x4e2d80;let _0x2251e1=[],_0x38cdda=![];if(this[_0x29a715(0x15d)]()&&this[_0x29a715(0x2af)]())_0x38cdda=!![];else!this[_0x29a715(0x15d)]()&&this[_0x29a715(0x1f9)]()&&(_0x38cdda=!![]);if(_0x38cdda){const _0x5714bd=this['friendsUnit']()[_0x29a715(0x6df)]()[_0x29a715(0x242)]();_0x2251e1=this['friendsUnit']()[_0x29a715(0x3c3)](_0x5714bd);}else{if(Imported['VisuMZ_2_AggroControlSystem']&&this['isProvokeAffected']()){const _0x56ab2a=this[_0x29a715(0x6a6)]()['provoker']()['centerGridFlank']();_0x2251e1=this[_0x29a715(0x31b)]()[_0x29a715(0x3c3)](_0x56ab2a);}else{if(Imported['VisuMZ_2_AggroControlSystem']&&this[_0x29a715(0x248)]()){const _0x5db7f4=this[_0x29a715(0x633)]()[_0x29a715(0x39c)],_0x22679f=this['opponentsUnit']()[_0x29a715(0x4bc)](_0x5db7f4),_0x60f8d9=_0x22679f[Math[_0x29a715(0x300)](_0x22679f['length'])][_0x29a715(0x242)]();_0x2251e1=this[_0x29a715(0x31b)]()[_0x29a715(0x3c3)](_0x60f8d9);}else{const _0x3b68dc=this[_0x29a715(0x31b)]()[_0x29a715(0x6df)]()['centerGridFlank']();_0x2251e1=this[_0x29a715(0x6a1)]()['getAliveMembersAtGridFlank'](_0x3b68dc);}}}return this[_0x29a715(0x166)](_0x2251e1);},Game_Action['prototype']['makeTargetsBattleGridFlankDirect']=function(){const _0x1e4f44=_0x4e2d80,_0x129228=this[_0x1e4f44(0x4bb)],_0x5914f2=_0x129228['split'](',')['map'](_0x720c7e=>_0x720c7e['toLowerCase']()[_0x1e4f44(0x373)]()),_0x431058=_0x5914f2[0x0]===_0x1e4f44(0x70c)?$gameParty:$gameTroop,_0x46375b=Number(_0x5914f2[0x1])['clamp'](0x1,BattleManager[_0x1e4f44(0x21f)]());let _0x1e4aa3=[];return _0x1e4aa3=_0x431058[_0x1e4f44(0x3c3)](_0x46375b),this['repeatTargets'](_0x1e4aa3);},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x20d)]=function(){const _0x1fa0ea=_0x4e2d80,_0x4fc93a=this[_0x1fa0ea(0x4d2)](),_0x30153c=_0x4fc93a[_0x1fa0ea(0x5d3)],_0x233b69=_0x4fc93a[_0x1fa0ea(0x352)],_0x5d57db=_0x4fc93a[_0x1fa0ea(0x62f)],_0x1cde20=$gameTemp[_0x1fa0ea(0x3eb)]();_0x1cde20[_0x1fa0ea(0x2de)](_0x30153c,_0x233b69,_0x5d57db,0x1);},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x3e0)]=function(){const _0x502008=_0x4e2d80;if(!BattleManager[_0x502008(0x2ae)]())return;const _0x25ce14=this[_0x502008(0x4d2)](),_0xc9ae0a=this[_0x502008(0x424)](_0x25ce14);for(const _0x520cad of _0xc9ae0a){this['processBattleGridNodeEffects'](_0x520cad['forActor'],_0x520cad['rank'],_0x520cad[_0x502008(0x62f)]);}},Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x424)]=function(_0x55f405){const _0x2c7c26=_0x4e2d80,_0x1d0c79=[];_0x1d0c79['push']({'forActor':_0x55f405[_0x2c7c26(0x5d3)],'rank':_0x55f405[_0x2c7c26(0x352)],'flank':_0x55f405['flank']});if(this[_0x2c7c26(0x705)]()){const _0x117b9b=DataManager[_0x2c7c26(0x156)](this['item']());for(let _0x488bd5=0x1;_0x488bd5<=BattleManager[_0x2c7c26(0x646)]();_0x488bd5++){for(let _0x2aa8be=0x1;_0x2aa8be<=BattleManager[_0x2c7c26(0x21f)]();_0x2aa8be++){VisuMZ[_0x2c7c26(0x398)][_0x2c7c26(0x4e0)](_0x117b9b,_0x55f405[_0x2c7c26(0x352)],_0x55f405[_0x2c7c26(0x62f)],_0x488bd5,_0x2aa8be)&&_0x1d0c79[_0x2c7c26(0x482)]({'forActor':_0x55f405['forActor'],'rank':_0x488bd5,'flank':_0x2aa8be});}}}return _0x1d0c79;},Game_Action['prototype']['processBattleGridNodeEffects']=function(_0x43669d,_0x17e5bc,_0xe1aefe){const _0x1493b6=_0x4e2d80,_0x457ba2=VisuMZ['BattleGridSystem'][_0x1493b6(0x329)],_0x34a13b=this[_0x1493b6(0x633)]()[_0x1493b6(0x5e2)]||'';if(_0x34a13b[_0x1493b6(0x240)](_0x457ba2[_0x1493b6(0x433)]))this[_0x1493b6(0x69c)](_0x43669d,_0x17e5bc,_0xe1aefe,0x1);else{if(_0x34a13b[_0x1493b6(0x240)](_0x457ba2[_0x1493b6(0x324)])){const _0x193ab3=Math[_0x1493b6(0x23c)](Number(RegExp['$1'])||0x1,0x1);this[_0x1493b6(0x69c)](_0x43669d,_0x17e5bc,_0xe1aefe,_0x193ab3);}}_0x34a13b['match'](_0x457ba2[_0x1493b6(0x146)])&&$gameTroop[_0x1493b6(0x230)](_0x43669d,_0x17e5bc,_0xe1aefe);if(this[_0x1493b6(0x214)]()&&_0x34a13b[_0x1493b6(0x240)](_0x457ba2[_0x1493b6(0x419)])){const _0x280df5=_0x43669d?$gameParty:$gameTroop;if(!_0x280df5[_0x1493b6(0x61c)](_0x17e5bc,_0xe1aefe)){const _0x429315=this[_0x1493b6(0x633)]()['id'];$gameTroop['setBattleGridNodeTrigger'](_0x43669d,_0x17e5bc,_0xe1aefe,_0x429315,this[_0x1493b6(0x6a6)]());}}_0x34a13b[_0x1493b6(0x240)](_0x457ba2['ClearPassivesFromNode'])&&$gameTroop[_0x1493b6(0x1e9)](_0x43669d,_0x17e5bc,_0xe1aefe);if(_0x34a13b[_0x1493b6(0x240)](_0x457ba2['AddPassiveToNode'])){const _0x4eda4f=String(RegExp['$1'])['split'](',')[_0x1493b6(0x335)](_0x323341=>_0x323341[_0x1493b6(0x373)]()),_0x3e3a13=$gameTroop[_0x1493b6(0x501)](_0x43669d,_0x17e5bc,_0xe1aefe)||[];for(const _0x2570ed of _0x4eda4f){const _0x32e13b=/^\d+$/[_0x1493b6(0x190)](_0x2570ed);let _0x2e7d35=0x0;_0x32e13b?_0x2e7d35=Number(_0x2570ed):_0x2e7d35=DataManager[_0x1493b6(0x33f)](_0x2570ed),_0x2e7d35&&_0x3e3a13[_0x1493b6(0x482)](_0x2e7d35);}$gameTroop[_0x1493b6(0x631)](_0x43669d,_0x17e5bc,_0xe1aefe,_0x3e3a13);}if(_0x34a13b[_0x1493b6(0x240)](_0x457ba2[_0x1493b6(0x5a2)])){const _0xcc7bb0=String(RegExp['$1'])[_0x1493b6(0x18a)](',')['map'](_0x2dc9cf=>_0x2dc9cf[_0x1493b6(0x373)]()),_0x256263=[];for(const _0x3f7ced of _0xcc7bb0){const _0x7235ff=/^\d+$/['test'](_0x3f7ced);let _0x56302c=0x0;_0x7235ff?_0x56302c=Number(_0x3f7ced):_0x56302c=DataManager[_0x1493b6(0x33f)](_0x3f7ced),_0x56302c&&_0x256263[_0x1493b6(0x482)](_0x56302c);}for(const _0x463991 of _0x256263){$gameTroop[_0x1493b6(0x1cd)](_0x43669d,_0x17e5bc,_0xe1aefe,_0x463991);}}if(_0x34a13b['match'](_0x457ba2[_0x1493b6(0x45e)])){const _0x3c494b=Number(RegExp['$1']),_0x412031=Math[_0x1493b6(0x23c)](Number(RegExp['$2'])||0x1,0x1);VisuMZ['BattleGridSystem']['processBattleGridPushFromNodeEffect'](_0x43669d,_0x17e5bc,_0xe1aefe,_0x3c494b,_0x412031);}else{if(_0x34a13b['match'](_0x457ba2[_0x1493b6(0x54b)])){const _0xe7faf5=Number(RegExp['$1']),_0x53f2db=Math['max'](Number(RegExp['$2'])||0x1,0x1);VisuMZ['BattleGridSystem']['processBattleGridPullToNodeEffect'](_0x43669d,_0x17e5bc,_0xe1aefe,_0xe7faf5,_0x53f2db);}}},Game_Action['prototype'][_0x4e2d80(0x69c)]=function(_0x2e11a2,_0x330360,_0x7cc5d1,_0x4a9142){const _0x52503a=_0x4e2d80;let _0x13e229=this['subject']();if(_0x2e11a2!==this['subject']()[_0x52503a(0x444)]()){const _0x47a01e=this[_0x52503a(0x31b)](),_0x128833=_0x47a01e[_0x52503a(0x3b4)]()['filter'](_0x3fc478=>_0x3fc478['isAlive']()&&_0x3fc478[_0x52503a(0x6e1)]()&&_0x3fc478[_0x52503a(0x6ec)]());if(_0x128833['length']<=0x0)return;_0x13e229=_0x128833[Math[_0x52503a(0x300)](_0x128833['length'])];}if(_0x13e229['friendsUnit']()[_0x52503a(0x3e6)](_0x330360,_0x7cc5d1)){const _0x5c54fb=_0x13e229[_0x52503a(0x6a1)]()[_0x52503a(0x170)](_0x330360,_0x7cc5d1);if(!_0x5c54fb[_0x52503a(0x6c0)]())return;_0x5c54fb[_0x52503a(0x620)](_0x13e229['gridRank'](),_0x13e229[_0x52503a(0x454)](),_0x4a9142,![]);}_0x13e229[_0x52503a(0x620)](_0x330360,_0x7cc5d1,_0x4a9142,![]);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x232)]=function(_0xd4117e,_0x1df389,_0x20b853,_0x9c87fa,_0x27e609){const _0xc4fbc0=_0x4e2d80,_0x2863ee=_0xd4117e?$gameParty:$gameTroop,_0x30e2e4=_0x2863ee[_0xc4fbc0(0x23b)]()[_0xc4fbc0(0x28a)](_0x22dd20=>_0x22dd20['isAppeared']()&&_0x22dd20['canGridMove']()),_0x301ccb='MID';_0x30e2e4[_0xc4fbc0(0x320)]((_0x8bd78e,_0xa8954e)=>{const _0x7f0cd9=_0xc4fbc0,_0x4be076=Math[_0x7f0cd9(0x6af)](_0x8bd78e['gridRank']()-_0x1df389)+Math[_0x7f0cd9(0x6af)](_0x8bd78e[_0x7f0cd9(0x454)]()-_0x20b853),_0x30a984=Math[_0x7f0cd9(0x6af)](_0xa8954e[_0x7f0cd9(0x4ba)]()-_0x1df389)+Math[_0x7f0cd9(0x6af)](_0xa8954e['gridFlank']()-_0x20b853);return _0x30a984-_0x4be076;});while(_0x9c87fa--){for(const _0x34fde5 of _0x30e2e4){const _0x30426a=VisuMZ['BattleGridSystem'][_0xc4fbc0(0x1dd)](_0x1df389,_0x34fde5[_0xc4fbc0(0x4ba)](),_0x20b853,_0x34fde5[_0xc4fbc0(0x454)]());if(_0x30426a[_0xc4fbc0(0x2f8)]<=0x0){const _0x4e0304=[_0xc4fbc0(0x492),'BACKWARD','UPWARD','DOWNWARD',_0xc4fbc0(0x612),_0xc4fbc0(0x58b),_0xc4fbc0(0x5e1),_0xc4fbc0(0x3f9)];while(_0x4e0304[_0xc4fbc0(0x2f8)]){const _0x50490c=_0x4e0304[Math['randomInt'](_0x4e0304['length'])];_0x4e0304[_0xc4fbc0(0x3c8)](_0x50490c),_0x30426a[_0xc4fbc0(0x482)](_0x50490c);}}for(const _0x2aa47d of _0x30426a){const _0x1b3afc=VisuMZ[_0xc4fbc0(0x398)][_0xc4fbc0(0x619)](_0x301ccb,_0x2aa47d,0x1,_0x34fde5,_0x2863ee,_0x34fde5[_0xc4fbc0(0x4ba)](),_0x34fde5[_0xc4fbc0(0x454)]());if(_0x1b3afc['canMove']){_0x34fde5[_0xc4fbc0(0x620)](_0x1b3afc[_0xc4fbc0(0x179)],_0x1b3afc[_0xc4fbc0(0x395)],_0x27e609);break;}}}}},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x3e9)]=function(_0x3d8b48,_0x257f0d,_0x4f71c3,_0x10cd67,_0x1fca62){const _0x41b53f=_0x4e2d80,_0x152c14=_0x3d8b48?$gameParty:$gameTroop,_0x35c359=_0x152c14['members']()[_0x41b53f(0x28a)](_0x173186=>_0x173186[_0x41b53f(0x6e1)]()&&_0x173186[_0x41b53f(0x6ec)]()),_0x3a2750=_0x41b53f(0x33a);_0x35c359['sort']((_0x33bbdb,_0xc07c4f)=>{const _0x24ee89=_0x41b53f,_0x2f2755=Math['abs'](_0x33bbdb[_0x24ee89(0x4ba)]()-_0x257f0d)+Math[_0x24ee89(0x6af)](_0x33bbdb[_0x24ee89(0x454)]()-_0x4f71c3),_0x1c7434=Math[_0x24ee89(0x6af)](_0xc07c4f[_0x24ee89(0x4ba)]()-_0x257f0d)+Math['abs'](_0xc07c4f[_0x24ee89(0x454)]()-_0x4f71c3);return _0x2f2755-_0x1c7434;});while(_0x10cd67--){for(const _0x230632 of _0x35c359){const _0x483c2f=VisuMZ[_0x41b53f(0x398)]['GetMultiDirectionsFrom'](_0x230632[_0x41b53f(0x4ba)](),_0x257f0d,_0x230632[_0x41b53f(0x454)](),_0x4f71c3);for(const _0x324e56 of _0x483c2f){const _0x374358=VisuMZ[_0x41b53f(0x398)][_0x41b53f(0x619)](_0x3a2750,_0x324e56,0x1,_0x230632,_0x152c14,_0x230632[_0x41b53f(0x4ba)](),_0x230632['gridFlank']());if(_0x374358['canMove']){_0x230632[_0x41b53f(0x620)](_0x374358['targetRank'],_0x374358['targetFlank'],_0x1fca62);break;}}}}},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x1dd)]=function(_0x4875fc,_0x1f7d8f,_0x90d3ae,_0xde9801){const _0x1e7549=_0x4e2d80;if(_0x4875fc>_0x1f7d8f){if(_0x90d3ae>_0xde9801)return['UP-FORWARD',_0x1e7549(0x492),_0x1e7549(0x2bc),'FORWARD',_0x1e7549(0x2bc)];else return _0x90d3ae<_0xde9801?[_0x1e7549(0x5e1),_0x1e7549(0x492),_0x1e7549(0x279),'FORWARD',_0x1e7549(0x279)]:[_0x1e7549(0x492),_0x1e7549(0x5e1),_0x1e7549(0x612),_0x1e7549(0x5e1),_0x1e7549(0x612)];}else{if(_0x4875fc<_0x1f7d8f){if(_0x90d3ae>_0xde9801)return[_0x1e7549(0x58b),_0x1e7549(0x326),_0x1e7549(0x2bc),'BACKWARD',_0x1e7549(0x2bc)];else return _0x90d3ae<_0xde9801?[_0x1e7549(0x3f9),_0x1e7549(0x326),_0x1e7549(0x279),'BACKWARD',_0x1e7549(0x279)]:['BACKWARD',_0x1e7549(0x3f9),'UP-BACKWARD',_0x1e7549(0x3f9),_0x1e7549(0x58b)];}else{if(_0x90d3ae>_0xde9801)return[_0x1e7549(0x2bc),_0x1e7549(0x612),_0x1e7549(0x58b),_0x1e7549(0x612),_0x1e7549(0x58b)];else return _0x90d3ae<_0xde9801?[_0x1e7549(0x279),_0x1e7549(0x5e1),_0x1e7549(0x3f9),_0x1e7549(0x5e1),_0x1e7549(0x3f9)]:[];}}},Game_Action[_0x4e2d80(0x6a9)]['setGridNodeTrigger']=function(_0x172c51){const _0x1f53b3=_0x4e2d80;this[_0x1f53b3(0x389)]=_0x172c51;},Game_Action[_0x4e2d80(0x6a9)]['isGridNodeTrigger']=function(){const _0xcb17e2=_0x4e2d80;return this[_0xcb17e2(0x389)];},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x20c)]=function(){const _0x4d11e0=_0x4e2d80;return'%1-%2'['format'](this[_0x4d11e0(0x444)]()?_0x4d11e0(0x70c):'enemy',this[_0x4d11e0(0x427)]()+'-'+(this[_0x4d11e0(0x444)]()?this[_0x4d11e0(0x5da)]():this[_0x4d11e0(0x6bf)]()));},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x1b4)]=function(){const _0x502e72=_0x4e2d80;if(this['_gridLocation']===undefined)this['resetGridNode']();return this[_0x502e72(0x47a)];},Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x1b4)]=function(){const _0x4273c9=_0x4e2d80;if(!$gameParty[_0x4273c9(0x315)]()&&BattleManager[_0x4273c9(0x38e)]())return $gameParty[_0x4273c9(0x41e)](this[_0x4273c9(0x6bf)]());return Game_Battler['prototype'][_0x4273c9(0x1b4)][_0x4273c9(0x25d)](this);},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x4ba)]=function(){const _0x167861=_0x4e2d80;return this[_0x167861(0x1b4)]()[_0x167861(0x352)];},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x454)]=function(){const _0x4a8fa0=_0x4e2d80;return this[_0x4a8fa0(0x1b4)]()[_0x4a8fa0(0x62f)];},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x443)]=function(){return 0x1;},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x3bc)]=function(){return 0x1;},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x62e)]=function(){const _0x7ece81=_0x4e2d80;return this[_0x7ece81(0x443)]()!==0x1||this[_0x7ece81(0x3bc)]()!==0x1;},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x1d3)]=function(){const _0x46b5ed=_0x4e2d80;return this['gridRank']()+Math[_0x46b5ed(0x4f9)](this['gridRankSize']()/0x2);},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x242)]=function(){const _0x191912=_0x4e2d80;return this['gridFlank']()+Math[_0x191912(0x4f9)](this[_0x191912(0x3bc)]()/0x2);},Game_BattlerBase['prototype']['setGridNode']=function(_0x124b18,_0x5e6d08){const _0x183da1=_0x4e2d80;this['_gridLocation']={'rank':_0x124b18,'flank':_0x5e6d08},BattleManager[_0x183da1(0x659)](),this['isAppeared']()&&$gameTroop[_0x183da1(0x230)](this[_0x183da1(0x444)](),_0x124b18,_0x5e6d08);},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x56f)]=function(){const _0x561aea=_0x4e2d80;this[_0x561aea(0x47a)]={'rank':0x0,'flank':0x0};},Game_BattlerBase['prototype'][_0x4e2d80(0x68e)]=function(){const _0x2545f0=_0x4e2d80;return this[_0x2545f0(0x4ba)]()===0x0||this[_0x2545f0(0x454)]()===0x0;},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x51e)]=function(){const _0x2907a5=_0x4e2d80;return[[this[_0x2907a5(0x4ba)](),this[_0x2907a5(0x454)]()]];},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x28b)]=function(_0xa98982,_0x23da6d){const _0x2d323a=_0x4e2d80,_0xf7cbbe=this[_0x2d323a(0x51e)]();return _0xf7cbbe[_0x2d323a(0x738)](_0x165f33=>_0x165f33[0x0]===_0xa98982&&_0x165f33[0x1]===_0x23da6d);},Game_BattlerBase['prototype'][_0x4e2d80(0x1db)]=function(){return this['gridNodesOccupied']()['map'](_0x599801=>_0x599801[0x0]);},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x1af)]=function(_0x401160){const _0x43cd7c=_0x4e2d80;return this[_0x43cd7c(0x1db)](_0x401160)[_0x43cd7c(0x314)](_0x401160);},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x3a2)]=function(){const _0x424d34=_0x4e2d80;return this['gridNodesOccupied']()[_0x424d34(0x335)](_0x476ba9=>_0x476ba9[0x1]);},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x4da)]=function(_0x261ae8){const _0x35906f=_0x4e2d80;return this['gridFlanksOccupied'](_0x261ae8)[_0x35906f(0x314)](_0x261ae8);},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x515)]=function(_0x60183c,_0x1dd9ea){const _0x4e2671=_0x4e2d80,_0x3f791a=this[_0x4e2671(0x4ba)](),_0x3c1838=this[_0x4e2671(0x454)]();return Math[_0x4e2671(0x6af)](_0x60183c-_0x3f791a)+Math['abs'](_0x1dd9ea-_0x3c1838);},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x4e0)]=function(_0x479a7c,_0x52168c,_0x5ccf71){const _0x31166b=_0x4e2d80,_0x1a45a8=this[_0x31166b(0x51e)]();return _0x1a45a8[_0x31166b(0x738)](_0x2d524b=>VisuMZ[_0x31166b(0x398)][_0x31166b(0x4e0)](_0x479a7c,_0x52168c,_0x5ccf71,_0x2d524b[0x0],_0x2d524b[0x1]));},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x4e0)]=function(_0x463417,_0x5de823,_0x562434,_0x2dc1d1,_0x4bc710){const _0x1c0bcc=_0x4e2d80;_0x5de823=_0x5de823[_0x1c0bcc(0x62d)](0x1,BattleManager[_0x1c0bcc(0x646)]()),_0x562434=_0x562434[_0x1c0bcc(0x62d)](0x1,BattleManager[_0x1c0bcc(0x21f)]());if(_0x463417[_0x1c0bcc(0x66d)])return!![];if(_0x463417[_0x1c0bcc(0x392)])return![];if(_0x5de823===_0x2dc1d1&&_0x562434===_0x4bc710)return!![];const _0x1fb67d=[_0x1c0bcc(0x67b),_0x1c0bcc(0x6d0)];for(const _0x100d45 of _0x1fb67d){const _0xbfbca1=_0x100d45===_0x1c0bcc(0x6d0),_0x2d80cc=_0xbfbca1?!![]:![];if(_0x463417[_0x100d45][_0x1c0bcc(0x249)]){let _0x4562a3=_0x463417[_0x100d45][_0x1c0bcc(0x249)];if(Math[_0x1c0bcc(0x6af)](_0x2dc1d1-_0x5de823)<=_0x4562a3&&Math['abs'](_0x4bc710-_0x562434)<=_0x4562a3)return _0x2d80cc;}if(_0x463417[_0x100d45][_0x1c0bcc(0x6de)]){let _0x182ba1=_0x463417[_0x100d45][_0x1c0bcc(0x6de)];_0xbfbca1&&(_0x182ba1+=_0x463417[_0x100d45][_0x1c0bcc(0x249)]||0x0);if(Math[_0x1c0bcc(0x6af)](_0x2dc1d1-_0x5de823)+Math['abs'](_0x4bc710-_0x562434)<=_0x182ba1)return _0x2d80cc;}if(_0x463417[_0x100d45][_0x1c0bcc(0x352)]&&_0x2dc1d1===_0x5de823){let _0x4397a3=_0x463417[_0x100d45][_0x1c0bcc(0x352)];_0xbfbca1&&(_0x4397a3+=_0x463417[_0x100d45][_0x1c0bcc(0x249)]||0x0,_0x4397a3+=_0x463417[_0x100d45][_0x1c0bcc(0x6de)]||0x0);if(Math[_0x1c0bcc(0x6af)](_0x4bc710-_0x562434)<=_0x4397a3)return _0x2d80cc;}if(_0x463417[_0x100d45][_0x1c0bcc(0x62f)]&&_0x4bc710===_0x562434){let _0xb89c8b=_0x463417[_0x100d45][_0x1c0bcc(0x62f)];_0xbfbca1&&(_0xb89c8b+=_0x463417[_0x100d45][_0x1c0bcc(0x249)]||0x0,_0xb89c8b+=_0x463417[_0x100d45]['radius']||0x0);if(Math[_0x1c0bcc(0x6af)](_0x2dc1d1-_0x5de823)<=_0xb89c8b)return _0x2d80cc;}if(_0x463417[_0x100d45][_0x1c0bcc(0x3bd)]&&_0x2dc1d1<_0x5de823){let _0x279977=_0x463417[_0x100d45][_0x1c0bcc(0x3bd)];_0xbfbca1&&(_0x279977+=_0x463417[_0x100d45][_0x1c0bcc(0x249)]||0x0,_0x279977+=(_0x463417[_0x100d45][_0x1c0bcc(0x6de)]||0x0)/0x2);if(Math['abs'](_0x4bc710-_0x562434)===Math['abs'](_0x2dc1d1-_0x5de823)&&Math[_0x1c0bcc(0x6af)](_0x4bc710-_0x562434)<=_0x279977)return _0x2d80cc;}if(_0x463417[_0x100d45][_0x1c0bcc(0x4aa)]&&_0x2dc1d1>_0x5de823){let _0x10ab50=_0x463417[_0x100d45][_0x1c0bcc(0x4aa)];_0xbfbca1&&(_0x10ab50+=_0x463417[_0x100d45][_0x1c0bcc(0x249)]||0x0,_0x10ab50+=(_0x463417[_0x100d45][_0x1c0bcc(0x6de)]||0x0)/0x2);if(Math[_0x1c0bcc(0x6af)](_0x4bc710-_0x562434)===Math[_0x1c0bcc(0x6af)](_0x2dc1d1-_0x5de823)&&Math[_0x1c0bcc(0x6af)](_0x4bc710-_0x562434)<=_0x10ab50)return _0x2d80cc;}if(_0x463417[_0x100d45][_0x1c0bcc(0x239)]&&_0x2dc1d1<_0x5de823&&_0x4bc710===_0x562434){let _0x3900a2=_0x463417[_0x100d45]['forward'];_0xbfbca1&&(_0x3900a2+=_0x463417[_0x100d45][_0x1c0bcc(0x249)]||0x0,_0x3900a2+=_0x463417[_0x100d45][_0x1c0bcc(0x6de)]||0x0,_0x3900a2+=_0x463417[_0x100d45][_0x1c0bcc(0x62f)]||0x0);if(Math['abs'](_0x2dc1d1-_0x5de823)<=_0x3900a2)return _0x2d80cc;}if(_0x463417[_0x100d45]['backward']&&_0x2dc1d1>_0x5de823&&_0x4bc710===_0x562434){let _0x476a96=_0x463417[_0x100d45][_0x1c0bcc(0x4cd)];_0xbfbca1&&(_0x476a96+=_0x463417[_0x100d45][_0x1c0bcc(0x249)]||0x0,_0x476a96+=_0x463417[_0x100d45]['radius']||0x0,_0x476a96+=_0x463417[_0x100d45][_0x1c0bcc(0x62f)]||0x0);if(Math[_0x1c0bcc(0x6af)](_0x2dc1d1-_0x5de823)<=_0x476a96)return _0x2d80cc;}if(_0x463417[_0x100d45]['upward']&&_0x4bc710<_0x562434&&_0x2dc1d1===_0x5de823){let _0x1ac198=_0x463417[_0x100d45][_0x1c0bcc(0x5bf)];_0xbfbca1&&(_0x1ac198+=_0x463417[_0x100d45]['square']||0x0,_0x1ac198+=_0x463417[_0x100d45]['radius']||0x0,_0x1ac198+=_0x463417[_0x100d45][_0x1c0bcc(0x352)]||0x0);if(Math[_0x1c0bcc(0x6af)](_0x4bc710-_0x562434)<=_0x1ac198)return _0x2d80cc;}if(_0x463417[_0x100d45][_0x1c0bcc(0x3ed)]&&_0x4bc710>_0x562434&&_0x2dc1d1===_0x5de823){let _0x507489=_0x463417[_0x100d45][_0x1c0bcc(0x3ed)];_0xbfbca1&&(_0x507489+=_0x463417[_0x100d45][_0x1c0bcc(0x249)]||0x0,_0x507489+=_0x463417[_0x100d45][_0x1c0bcc(0x6de)]||0x0,_0x507489+=_0x463417[_0x100d45][_0x1c0bcc(0x352)]||0x0);if(Math[_0x1c0bcc(0x6af)](_0x4bc710-_0x562434)<=_0x507489)return _0x2d80cc;}}return![];},VisuMZ[_0x4e2d80(0x398)]['Game_BattlerBase_canUse']=Game_BattlerBase['prototype'][_0x4e2d80(0x331)],Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x331)]=function(_0x34b53e){const _0x16fa44=_0x4e2d80;if(_0x34b53e&&$gameParty[_0x16fa44(0x315)]()&&BattleManager[_0x16fa44(0x2ae)]()){if(!this['canUseForBattleGrid'](_0x34b53e))return![];}return VisuMZ[_0x16fa44(0x398)][_0x16fa44(0x40a)][_0x16fa44(0x25d)](this,_0x34b53e);},Game_BattlerBase['prototype'][_0x4e2d80(0x507)]=function(_0x16249c){if(!this['meetsGridNodeConditions'](_0x16249c))return![];if(!this['meetsGridTargetProvokeTauntConditions'](_0x16249c))return![];if(!this['meetsGridTargetConditions'](_0x16249c))return![];return!![];},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x2e6)]=function(_0x5048e7){const _0x2d86d6=_0x4e2d80;if(!$gameParty[_0x2d86d6(0x315)]())return!![];const _0x3fa9e9=VisuMZ[_0x2d86d6(0x398)][_0x2d86d6(0x531)]['Compatibility'];if(Imported[_0x2d86d6(0x2dd)]&&BattleManager[_0x2d86d6(0x31d)]()){if(this[_0x2d86d6(0x6e0)]()&&this[_0x2d86d6(0x71c)]['length']>0x1&&this!==BattleManager[_0x2d86d6(0x37f)]){if(_0x3fa9e9[_0x2d86d6(0x294)])return!![];}}const _0x505598=this[_0x2d86d6(0x6a1)](),_0x12fdec=this['gridNodesOccupied']();if(!_0x12fdec[_0x2d86d6(0x738)](_0x2f3b75=>DataManager['meetsGridNodeUsableConditions'](_0x5048e7,this,_0x505598,_0x2f3b75[0x0],_0x2f3b75[0x1])))return![];return!![];},Game_BattlerBase[_0x4e2d80(0x6a9)]['meetsGridTargetConditions']=function(_0x4f5ab6){const _0x297c16=_0x4e2d80;if(!$gameParty[_0x297c16(0x315)]())return!![];$gameTemp[_0x297c16(0x368)]=$gameTemp[_0x297c16(0x368)]||new Game_Action(this);const _0x112d03=$gameTemp[_0x297c16(0x368)];_0x112d03[_0x297c16(0x23a)](),_0x112d03[_0x297c16(0x223)](this);if(DataManager[_0x297c16(0x64d)](_0x4f5ab6))_0x112d03['setItem'](_0x4f5ab6['id']);if(DataManager[_0x297c16(0x214)](_0x4f5ab6))_0x112d03[_0x297c16(0x6c1)](_0x4f5ab6['id']);let _0x42b694=[];$gameTemp[_0x297c16(0x307)](_0x112d03);if(_0x112d03['subject']()){if(_0x112d03[_0x297c16(0x52b)]())_0x42b694=_0x112d03[_0x297c16(0x31b)]()[_0x297c16(0x3d1)]();else _0x112d03[_0x297c16(0x732)]()?_0x42b694=_0x112d03[_0x297c16(0x6a1)]()[_0x297c16(0x5ec)]():_0x42b694=_0x112d03[_0x297c16(0x6a1)]()['aliveMembers']();}return $gameTemp[_0x297c16(0x727)](),_0x42b694[_0x297c16(0x2f8)]>0x0;},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x6e2)]=Game_Action[_0x4e2d80(0x6a9)]['subject'],Game_Action[_0x4e2d80(0x6a9)][_0x4e2d80(0x6a6)]=function(){const _0x4dc0da=_0x4e2d80;if(this[_0x4dc0da(0x538)]<=0x0&&BattleManager['isUsingGridSystem']())return $gameTroop['rawUnalteredGridMembers']()[this[_0x4dc0da(0x305)]];return VisuMZ[_0x4dc0da(0x398)][_0x4dc0da(0x6e2)][_0x4dc0da(0x25d)](this);},Game_BattlerBase['prototype'][_0x4e2d80(0x632)]=function(_0x248ba0){const _0x5b58ec=_0x4e2d80;if(!Imported[_0x5b58ec(0x2d6)])return!![];if(!$gameParty[_0x5b58ec(0x315)]())return!![];$gameTemp[_0x5b58ec(0x368)]=$gameTemp[_0x5b58ec(0x368)]||new Game_Action(this);const _0x1dab66=$gameTemp[_0x5b58ec(0x368)];_0x1dab66[_0x5b58ec(0x23a)](),_0x1dab66[_0x5b58ec(0x223)](this);if(DataManager['isItem'](_0x248ba0))_0x1dab66[_0x5b58ec(0x41a)](_0x248ba0['id']);if(DataManager[_0x5b58ec(0x214)](_0x248ba0))_0x1dab66[_0x5b58ec(0x6c1)](_0x248ba0['id']);const _0x4b3801=_0x1dab66[_0x5b58ec(0x3b5)]();if(_0x1dab66[_0x5b58ec(0x6a6)]()){if(_0x1dab66[_0x5b58ec(0x55a)]()){const _0x56744=this[_0x5b58ec(0x24d)]();return _0x56744['isValidGridBattleTarget'](_0x4b3801);}else{if(_0x1dab66['isTauntAffected']()){const _0x9adc67=this['opponentsUnit']()[_0x5b58ec(0x4bc)](_0x248ba0[_0x5b58ec(0x39c)]);if(!_0x9adc67[_0x5b58ec(0x738)](_0x16e4c4=>_0x16e4c4[_0x5b58ec(0x5c1)](_0x4b3801)))return![];}}}return!![];},Game_Battler['BATTLE_GRID_SYSTEM']={'canDeadGridSwitch':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x358)]['canDeadGridSwitch']??!![],'moveDuration':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)]['General'][_0x4e2d80(0x3f0)]??0xc,'userSilentMove':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x358)][_0x4e2d80(0x3da)]??!![],'targetSilentMove':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x358)][_0x4e2d80(0x4c8)]??![],'actionTargetCrashDamage':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x358)][_0x4e2d80(0x468)]??!![],'actionTargetAnimation':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x358)][_0x4e2d80(0x69e)]??0x0,'crashTargetCrashDamage':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x358)][_0x4e2d80(0x2fd)]??!![],'crashTargetAnimation':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x358)][_0x4e2d80(0x47f)]??0x2,'crashDamageFormulaJS':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['General'][_0x4e2d80(0x3c1)]??null,'crashAllowDeath':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)]['General'][_0x4e2d80(0x3ca)]??!![],'defaultWpnRangeMelee':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x358)][_0x4e2d80(0x158)]??!![],'triggerPopup':{'ShowText':VisuMZ['BattleGridSystem']['Settings']['General'][_0x4e2d80(0x41c)]??!![],'TextColor':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x358)][_0x4e2d80(0x480)]??0x0,'FlashColor':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x358)][_0x4e2d80(0x582)]??[0xff,0x0,0x0,0xa0],'FlashDuration':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x358)]['triggerPopupFlashDuration']??0x78}},VisuMZ['BattleGridSystem'][_0x4e2d80(0x50a)]=Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x512)],Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x512)]=function(_0x51f7f3){const _0x316a9a=_0x4e2d80;VisuMZ['BattleGridSystem']['Game_Battler_onBattleStart'][_0x316a9a(0x25d)](this,_0x51f7f3),this['clearGridNodeTriggers']();},Game_Battler[_0x4e2d80(0x6a9)]['moveToStartingGridNode']=function(){this['moveToAutoStartGridNode']();},Game_Actor['prototype'][_0x4e2d80(0x2f4)]=function(){const _0x1e3ee3=_0x4e2d80;BattleManager[_0x1e3ee3(0x38e)]()?this[_0x1e3ee3(0x61a)]():Game_Battler[_0x1e3ee3(0x6a9)]['moveToStartingGridNode'][_0x1e3ee3(0x25d)](this);},Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x61a)]=function(){const _0x3d8b26=_0x4e2d80;let _0x504bdf=Imported[_0x3d8b26(0x53d)]?$gameParty[_0x3d8b26(0x6f8)](!![])[_0x3d8b26(0x379)](this):this[_0x3d8b26(0x6bf)]();const _0x2260d9=$gameParty[_0x3d8b26(0x41e)](_0x504bdf);this[_0x3d8b26(0x2f7)](_0x2260d9['rank'],_0x2260d9[_0x3d8b26(0x62f)]);},Game_Battler[_0x4e2d80(0x6a9)]['moveToAutoStartGridNode']=function(){const _0x47daf7=_0x4e2d80;this[_0x47daf7(0x5f7)]();this['hasNoGridNode']()&&this[_0x47daf7(0x227)]();this[_0x47daf7(0x68e)]()&&this[_0x47daf7(0x56b)]();if(this[_0x47daf7(0x68e)]()&&$gameTemp[_0x47daf7(0x64c)]()){let _0x2a4adc='';_0x2a4adc+=_0x47daf7(0x1f2),_0x2a4adc+=_0x47daf7(0x189),alert(_0x2a4adc),SceneManager['exit']();}},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x5f7)]=function(){const _0x1b7b92=_0x4e2d80,_0xb2d7fd=this[_0x1b7b92(0x160)](),_0x5c2085=this[_0x1b7b92(0x233)](),_0x2eadb3=BattleManager[_0x1b7b92(0x646)]()-(this[_0x1b7b92(0x443)]()-0x1),_0x21ef32=BattleManager[_0x1b7b92(0x21f)]()-(this[_0x1b7b92(0x3bc)]()-0x1);for(const _0x4414a8 of _0xb2d7fd){for(const _0x4708c8 of _0x5c2085){if(this[_0x1b7b92(0x6a1)]()[_0x1b7b92(0x147)](_0x4414a8,_0x4708c8))continue;this['setGridNode'](_0x4414a8,_0x4708c8);return;}}const _0x52939f=Array['from'](Array(_0x21ef32)['keys']())[_0x1b7b92(0x335)](_0x4e1ff5=>++_0x4e1ff5),_0x54afec=Math[_0x1b7b92(0x72b)](_0x21ef32/0x2)+(_0x21ef32%0x2===0x0?0.5:0x0);_0x52939f[_0x1b7b92(0x320)]((_0x1247bc,_0x4cb482)=>{const _0x4afdcb=_0x1b7b92,_0x27fa46=Math[_0x4afdcb(0x6af)](_0x1247bc-_0x54afec),_0xa18607=Math[_0x4afdcb(0x6af)](_0x4cb482-_0x54afec);return _0x27fa46===_0xa18607?_0x1247bc-_0x4cb482:_0x27fa46-_0xa18607;});for(const _0x40ce8e of _0xb2d7fd){for(const _0x2de429 of _0x52939f){if(this[_0x1b7b92(0x6a1)]()[_0x1b7b92(0x147)](_0x40ce8e,_0x2de429))continue;this[_0x1b7b92(0x2f7)](_0x40ce8e,_0x2de429);return;}}const _0x27fc66=Array['from'](Array(_0x2eadb3)['keys']())['map'](_0x341170=>++_0x341170),_0x1a894d=Math[_0x1b7b92(0x72b)](_0x2eadb3/0x2)+(_0x2eadb3%0x2===0x0?0.5:0x0);_0x27fc66[_0x1b7b92(0x320)]((_0x1f645c,_0x25e03c)=>{const _0x1ccfe6=_0x1b7b92,_0x32e4fb=Math[_0x1ccfe6(0x6af)](_0x1f645c-_0x1a894d),_0x4a0ff9=Math['abs'](_0x25e03c-_0x1a894d);return _0x32e4fb===_0x4a0ff9?_0x1f645c-_0x25e03c:_0x32e4fb-_0x4a0ff9;});for(const _0x789519 of _0x27fc66){for(const _0x326b3a of _0x5c2085){if(this['friendsUnit']()[_0x1b7b92(0x147)](_0x789519,_0x326b3a))continue;this[_0x1b7b92(0x2f7)](_0x789519,_0x326b3a);return;}}},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x227)]=function(){const _0x14241e=_0x4e2d80;if(BattleManager[_0x14241e(0x6d5)]['testCenter'])return;const _0x7d506b=BattleManager[_0x14241e(0x646)]()-(this['gridRankSize']()-0x1),_0x18d84d=BattleManager[_0x14241e(0x21f)]()-(this[_0x14241e(0x3bc)]()-0x1),_0x1882eb=Array['from'](Array(_0x18d84d)[_0x14241e(0x40d)]())[_0x14241e(0x335)](_0xc4e286=>++_0xc4e286),_0x3eaaea=Math['ceil'](_0x18d84d/0x2)+(_0x18d84d%0x2===0x0?0.5:0x0);_0x1882eb['sort']((_0x237643,_0x47b517)=>{const _0x45c057=_0x14241e,_0x24a9a8=Math[_0x45c057(0x6af)](_0x237643-_0x3eaaea),_0x52f336=Math['abs'](_0x47b517-_0x3eaaea);return _0x24a9a8===_0x52f336?_0x237643-_0x47b517:_0x24a9a8-_0x52f336;});let _0x54887c=this[_0x14241e(0x6bf)](),_0x179acc=this[_0x14241e(0x6a1)]()['members']()['length'];while(_0x179acc--){const _0x2af9d3=_0x54887c%_0x7d506b+0x1,_0x6c3063=_0x1882eb[_0x54887c%_0x18d84d];if(this[_0x14241e(0x6a1)]()[_0x14241e(0x147)](_0x2af9d3,_0x6c3063)){_0x54887c++;continue;}this['setGridNode'](_0x2af9d3,_0x6c3063);break;}},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x56b)]=function(){const _0x113d4f=_0x4e2d80,_0x56b4fe=BattleManager['maxRanks']()-(this[_0x113d4f(0x443)]()-0x1),_0x1f5e07=BattleManager[_0x113d4f(0x21f)]()-(this[_0x113d4f(0x3bc)]()-0x1),_0x43002f=this[_0x113d4f(0x6a1)](),_0x1e6f60=VisuMZ[_0x113d4f(0x398)][_0x113d4f(0x72a)](_0x56b4fe,_0x1f5e07);for(const _0x2eadf6 of _0x1e6f60){const _0x5d01c6=_0x2eadf6[0x0],_0x2c0840=_0x2eadf6[0x1];if(_0x43002f[_0x113d4f(0x147)](_0x5d01c6,_0x2c0840))continue;this[_0x113d4f(0x2f7)](_0x5d01c6,_0x2c0840);return;}},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x72a)]=function(_0x4cb23f,_0x56c108){const _0x59e83b=_0x4e2d80,_0x47ef5c=_0x59e83b(0x440)[_0x59e83b(0x3bb)](_0x4cb23f,_0x56c108);this['_cacheCreateRemainingGridNodes']=this[_0x59e83b(0x2f6)]||{};if(this[_0x59e83b(0x2f6)][_0x47ef5c])return this['_cacheCreateRemainingGridNodes'][_0x47ef5c];const _0x450ee1=[];for(let _0x166864=0x1;_0x166864<=_0x56c108;_0x166864++){for(let _0x473317=0x1;_0x473317<=_0x4cb23f;_0x473317++){_0x450ee1[_0x59e83b(0x482)]([_0x473317,_0x166864]);}}const _0x409fb7=Math[_0x59e83b(0x72b)](_0x4cb23f/0x2)+(_0x4cb23f%0x2===0x0?0.5:0x0),_0x427d2e=Math['ceil'](_0x56c108/0x2)+(_0x56c108%0x2===0x0?0.5:0x0);return _0x450ee1[_0x59e83b(0x320)]((_0x5a2c67,_0x56e9bb)=>{const _0x10f89d=_0x59e83b,_0x577663=Math['abs'](_0x5a2c67[0x0]-_0x409fb7),_0x46c827=Math[_0x10f89d(0x6af)](_0x5a2c67[0x1]-_0x427d2e),_0x506824=_0x577663+_0x46c827,_0x497a23=Math[_0x10f89d(0x6af)](_0x56e9bb[0x0]-_0x409fb7),_0x4a96f2=Math[_0x10f89d(0x6af)](_0x56e9bb[0x1]-_0x427d2e),_0x41717e=_0x497a23+_0x4a96f2;if(_0x506824!==_0x41717e)return _0x506824-_0x41717e;return _0x4cb23f>_0x56c108?_0x46c827!==_0x4a96f2?_0x46c827-_0x4a96f2:_0x577663-_0x497a23:_0x577663!==_0x497a23?_0x577663-_0x497a23:_0x46c827-_0x4a96f2;}),this[_0x59e83b(0x2f6)][_0x47ef5c]=_0x450ee1,this['_cacheCreateRemainingGridNodes'][_0x47ef5c];},Game_Battler[_0x4e2d80(0x6a9)]['getStartGridRanks']=function(){const _0x238073=_0x4e2d80,_0x58ae98=VisuMZ[_0x238073(0x398)][_0x238073(0x329)],_0x203d6a=(this['isActor']()?this[_0x238073(0x70c)]()['note']:this[_0x238073(0x456)]()['note'])||'';let _0x192a6c=[];if(_0x203d6a['match'](_0x58ae98[_0x238073(0x21c)])){const _0x3ce7f9=String(RegExp['$1']),_0x341128=BattleManager[_0x238073(0x646)]()-(this['gridRankSize']()-0x1);_0x192a6c=_0x3ce7f9[_0x238073(0x18a)](',')[_0x238073(0x335)](_0x499ada=>Number(_0x499ada)[_0x238073(0x62d)](0x1,_0x341128));}return _0x192a6c['remove'](null)['remove'](undefined),_0x192a6c;},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x233)]=function(){const _0x3b91cb=_0x4e2d80,_0x2395cc=VisuMZ[_0x3b91cb(0x398)]['RegExp'],_0x1fb854=(this['isActor']()?this[_0x3b91cb(0x70c)]()[_0x3b91cb(0x5e2)]:this[_0x3b91cb(0x456)]()['note'])||'';let _0x5e4963=[];if(_0x1fb854[_0x3b91cb(0x240)](_0x2395cc[_0x3b91cb(0x57a)])){const _0x4d2f6b=String(RegExp['$1']),_0x159b11=BattleManager[_0x3b91cb(0x21f)]()-(this['gridFlankSize']()-0x1);_0x5e4963=_0x4d2f6b['split'](',')[_0x3b91cb(0x335)](_0x428ab3=>Number(_0x428ab3)[_0x3b91cb(0x62d)](0x1,_0x159b11));}return _0x5e4963['remove'](null)[_0x3b91cb(0x3c8)](undefined),_0x5e4963;},Game_Battler[_0x4e2d80(0x6a9)]['canGridMove']=function(){const _0x1a9bd5=_0x4e2d80;if(this[_0x1a9bd5(0x62e)]())return![];if(this[_0x1a9bd5(0x6f3)]())return![];return!![];},Game_Battler['prototype'][_0x4e2d80(0x6f3)]=function(){const _0x2df965=_0x4e2d80;let _0x5e2fc2=_0x2df965(0x259);if(this[_0x2df965(0x72c)](_0x5e2fc2))return this[_0x2df965(0x21d)][_0x5e2fc2];return this[_0x2df965(0x21d)][_0x5e2fc2]=this[_0x2df965(0x6b2)](),this['_cache'][_0x5e2fc2];},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x6b2)]=function(){const _0xe9e5d2=_0x4e2d80,_0xc45c16=VisuMZ[_0xe9e5d2(0x398)][_0xe9e5d2(0x329)];return this[_0xe9e5d2(0x3a8)]()[_0xe9e5d2(0x738)](_0x328f96=>_0x328f96&&_0x328f96[_0xe9e5d2(0x5e2)][_0xe9e5d2(0x240)](_0xc45c16[_0xe9e5d2(0x47d)]));},Game_Battler['prototype']['isSealedGridMove']=function(){const _0x3c5cb6=_0x4e2d80;let _0x3711ab='sealGridMove';if(this[_0x3c5cb6(0x72c)](_0x3711ab))return this[_0x3c5cb6(0x21d)][_0x3711ab];return this['_cache'][_0x3711ab]=this[_0x3c5cb6(0x1fc)](),this[_0x3c5cb6(0x21d)][_0x3711ab];},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x1fc)]=function(){const _0xd199bc=_0x4e2d80,_0x2af454=VisuMZ[_0xd199bc(0x398)]['RegExp'];return this[_0xd199bc(0x3a8)]()['some'](_0xfe5dfb=>_0xfe5dfb&&_0xfe5dfb[_0xd199bc(0x5e2)][_0xd199bc(0x240)](_0x2af454[_0xd199bc(0x3f7)]));},Game_Enemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x6ec)]=function(){const _0x51799a=_0x4e2d80;if(!this[_0x51799a(0x1a8)]())return![];return Game_Battler['prototype']['canGridMove'][_0x51799a(0x25d)](this);},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x423)]=function(){const _0x3d73c9=_0x4e2d80;if(this[_0x3d73c9(0x21b)]())return this[_0x3d73c9(0x542)]();if(!this[_0x3d73c9(0x6ec)]())return![];return!![];},Game_Actor[_0x4e2d80(0x6a9)]['canGridSwitchOnMove']=function(){const _0x387af5=_0x4e2d80;if(!Game_Actor[_0x387af5(0x6d5)][_0x387af5(0x423)])return![];return Game_Battler[_0x387af5(0x6a9)]['canGridSwitchOnMove'][_0x387af5(0x25d)](this);},Game_Battler['prototype'][_0x4e2d80(0x6c0)]=function(){const _0x2e25eb=_0x4e2d80;if(!this[_0x2e25eb(0x6ec)]())return![];if(this['isDead']())return this[_0x2e25eb(0x542)]();return!![];},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x542)]=function(){const _0x5c57a8=_0x4e2d80;if(!this['hasVisibleCorpse']())return!![];return Game_Battler['BATTLE_GRID_SYSTEM'][_0x5c57a8(0x1c2)];},Game_Battler[_0x4e2d80(0x6a9)]['hasVisibleCorpse']=function(){return![];},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x4c9)]=function(_0x2294c6,_0x52d924){const _0x3fe464=_0x4e2d80;_0x2294c6=_0x2294c6[_0x3fe464(0x62d)](0x1,BattleManager[_0x3fe464(0x646)]()),_0x52d924=_0x52d924[_0x3fe464(0x62d)](0x1,BattleManager[_0x3fe464(0x21f)]());if(_0x2294c6===this['gridRank']()&&_0x52d924===this[_0x3fe464(0x454)]())return![];if(this[_0x3fe464(0x6a1)]()[_0x3fe464(0x3e6)](_0x2294c6,_0x52d924)){const _0x20cc78=this[_0x3fe464(0x6a1)]()[_0x3fe464(0x170)](_0x2294c6,_0x52d924);if(!_0x20cc78[_0x3fe464(0x6ec)]())return![];if(!_0x20cc78[_0x3fe464(0x423)]())return![];}return!![];},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x620)]=function(_0x240f55,_0x36c97f,_0x1eabeb,_0x530fe4){const _0x320ed7=_0x4e2d80;_0x240f55=_0x240f55[_0x320ed7(0x62d)](0x1,BattleManager[_0x320ed7(0x646)]()),_0x36c97f=_0x36c97f[_0x320ed7(0x62d)](0x1,BattleManager[_0x320ed7(0x21f)]()),this[_0x320ed7(0x1b4)]()[_0x320ed7(0x352)]=_0x240f55,this[_0x320ed7(0x1b4)]()[_0x320ed7(0x62f)]=_0x36c97f,BattleManager[_0x320ed7(0x659)](),this[_0x320ed7(0x1ca)](_0x1eabeb,_0x530fe4),this[_0x320ed7(0x4e9)](),this[_0x320ed7(0x247)]();},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x4e9)]=function(){const _0x5eace7=_0x4e2d80;if(this===$gameTemp[_0x5eace7(0x3eb)]())return;this[_0x5eace7(0x2ca)]();},Game_Battler[_0x4e2d80(0x6a9)]['performGridMoveTo']=function(_0x466489,_0x5a0371,_0x132898){const _0x13938a=_0x4e2d80;_0x466489=_0x466489[_0x13938a(0x62d)](0x1,BattleManager[_0x13938a(0x646)]()),_0x5a0371=_0x5a0371[_0x13938a(0x62d)](0x1,BattleManager[_0x13938a(0x21f)]()),_0x132898=_0x132898||'';if(_0x132898==='switch'){if(this[_0x13938a(0x6a1)]()[_0x13938a(0x3e6)](_0x466489,_0x5a0371)){const _0x11399c=this['friendsUnit']()[_0x13938a(0x170)](_0x466489,_0x5a0371);_0x11399c[_0x13938a(0x620)](this[_0x13938a(0x4ba)](),this[_0x13938a(0x454)]());}}this[_0x13938a(0x620)](_0x466489,_0x5a0371);},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x1ca)]=function(_0x5d1c74,_0x58f5b7){},Game_Actor[_0x4e2d80(0x6a9)]['gridMoveBattlerToNewHome']=function(_0x329939,_0x8a278b){const _0x5c93c9=_0x4e2d80,_0x563d0e=this['battler']();if(!_0x563d0e)return;const _0x1139d5=Spriteset_Battle[_0x5c93c9(0x6d5)];_0x329939=_0x329939||Math['max'](Game_Battler[_0x5c93c9(0x6d5)]['moveDuration'],0x1);const _0x3e2b80=this['gridRank'](),_0x22acd4=this['gridFlank'](),_0xe9c708=VisuMZ[_0x5c93c9(0x398)]['getGridPositionPoint'](!![],_0x3e2b80,_0x22acd4),_0x327cab=_0xe9c708['x']+Graphics['boxWidth']/0x2+_0x1139d5['actorOffsetX'],_0x12b042=_0xe9c708['y']+Graphics[_0x5c93c9(0x475)]/0x2+_0x1139d5[_0x5c93c9(0x3d7)];_0x8a278b?_0x563d0e[_0x5c93c9(0x407)](_0x327cab,_0x12b042):_0x563d0e[_0x5c93c9(0x27e)](_0x327cab,_0x12b042,_0x329939,'Linear');},Game_Enemy[_0x4e2d80(0x6a9)]['gridMoveBattlerToNewHome']=function(_0x12018d,_0x5bab38){const _0x28c391=_0x4e2d80;this[_0x28c391(0x70d)]();const _0x387768=this['battler']();if(!_0x387768)return;const _0x518d5d=this[_0x28c391(0x707)],_0x44a953=this[_0x28c391(0x5b5)];_0x12018d=_0x12018d||Math[_0x28c391(0x23c)](Game_Battler[_0x28c391(0x6d5)][_0x28c391(0x3f0)],0x1),_0x5bab38?_0x387768['silentHomeMove'](_0x518d5d,_0x44a953):_0x387768[_0x28c391(0x27e)](_0x518d5d,_0x44a953,_0x12018d,'Linear');},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x477)]=function(_0x3b10ce,_0x2ab993,_0x1cb3c6,_0x195bea){const _0x53cb43=_0x4e2d80;if(!_0x3b10ce)return;if(!_0x2ab993)return;if(_0x1cb3c6<=0x0)return;if(_0x195bea<=0x0)return;const _0x4e3740=_0x3b10ce[_0x2ab993]||0x0,_0x286b0c=Math[_0x53cb43(0x23c)](Math[_0x53cb43(0x72b)](_0x4e3740*_0x1cb3c6*_0x195bea),0x1),_0x28acc6=JsonEx[_0x53cb43(0x47c)](this[_0x53cb43(0x5a3)]);this[_0x53cb43(0x503)](-_0x286b0c),this[_0x53cb43(0x5ae)](),this['performDamage'](),this[_0x53cb43(0x5a3)]=_0x28acc6,this[_0x53cb43(0x21b)]()&&this['performCollapse']();},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x2de)]=function(_0x2910ef,_0x28778e,_0x429859,_0xee7a85){const _0x1906ab=_0x4e2d80;_0x28778e=_0x28778e[_0x1906ab(0x62d)](0x1,BattleManager[_0x1906ab(0x646)]()),_0x429859=_0x429859[_0x1906ab(0x62d)](0x1,BattleManager[_0x1906ab(0x21f)]()),this[_0x1906ab(0x1b4)]()[_0x1906ab(0x352)]=_0x28778e,this[_0x1906ab(0x1b4)]()[_0x1906ab(0x62f)]=_0x429859,BattleManager[_0x1906ab(0x659)]();const _0x34ca45=Spriteset_Battle[_0x1906ab(0x6d5)],_0x4fdfb3=VisuMZ[_0x1906ab(0x398)][_0x1906ab(0x254)](_0x2910ef,_0x28778e,_0x429859);if(Graphics['boxWidth']===0x0)SceneManager[_0x1906ab(0x671)][_0x1906ab(0x658)]();this[_0x1906ab(0x707)]=_0x4fdfb3['x']+Graphics['boxWidth']/0x2+_0x34ca45[_0x1906ab(0x4f8)],this[_0x1906ab(0x5b5)]=_0x4fdfb3['y']+Graphics[_0x1906ab(0x475)]/0x2+_0x34ca45[_0x1906ab(0x2b9)];const _0x11a8f7=this[_0x1906ab(0x645)]();if(_0x11a8f7){const _0x12c547=this[_0x1906ab(0x707)],_0xa98614=this['_screenY'];_0xee7a85=_0xee7a85||Math['max'](Game_Battler[_0x1906ab(0x6d5)][_0x1906ab(0x3f0)],0x1),_0x11a8f7[_0x1906ab(0x27e)](_0x12c547,_0xa98614,_0xee7a85,_0x1906ab(0x43f));}this[_0x1906ab(0x247)]();},Game_Battler[_0x4e2d80(0x6a9)]['receiveBattleGridCrashDamage']=function(_0xde9d4a,_0xe4c613,_0x5c7675){const _0x101373=_0x4e2d80;let _0xf62f38=0x0;try{_0xf62f38=VisuMZ[_0x101373(0x398)][_0x101373(0x448)](this,_0xde9d4a),_0xf62f38*=this['getCrashDamageRate'](!![]),_0xf62f38*=_0xde9d4a['getCrashDamageRate'](![]),_0xf62f38+=this[_0x101373(0x2cc)](!![]),_0xf62f38+=_0xde9d4a['getCrashDamageFlat'](![]),_0xf62f38=Math[_0x101373(0x72b)](_0xf62f38);}catch(_0x43d515){if($gameTemp['isPlaytest']())console[_0x101373(0x4d0)](_0x43d515);}if(_0xf62f38<=0x0)return;_0x5c7675>0x0?setTimeout(this[_0x101373(0x3ec)][_0x101373(0x27a)](this,_0xf62f38,_0xe4c613),_0x5c7675):this[_0x101373(0x3ec)](_0xf62f38,_0xe4c613);},VisuMZ['BattleGridSystem']['PerformCrashDamage']=function(){const _0x30d13f=_0x4e2d80;if(Game_Battler[_0x30d13f(0x6d5)][_0x30d13f(0x3c1)])return Game_Battler['BATTLE_GRID_SYSTEM'][_0x30d13f(0x3c1)]['call'](this,arguments[0x0],arguments[0x1]);const _0x88c499=arguments[0x0],_0x51ea1=arguments[0x1],_0x11e47a=_0x51ea1,_0x1754e9=this,_0x2a634a=_0x51ea1;let _0x4be495=_0x11e47a[_0x30d13f(0x5eb)]*0.5;_0x4be495-=_0x88c499[_0x30d13f(0x5eb)]*0.25;const _0x10047d=0x14,_0x3302d1=Math[_0x30d13f(0x4f9)](Math[_0x30d13f(0x23c)](Math[_0x30d13f(0x6af)](_0x4be495)*_0x10047d/0x64,0x0)),_0x925dc6=Math[_0x30d13f(0x300)](_0x3302d1+0x1)+Math[_0x30d13f(0x300)](_0x3302d1+0x1)-_0x3302d1;return _0x4be495>=0x0?_0x4be495+_0x925dc6:_0x4be495-_0x925dc6;},Game_Battler[_0x4e2d80(0x6a9)]['getCrashDamageRate']=function(_0x3403c0){const _0x328797=_0x4e2d80,_0x2af8ce=VisuMZ[_0x328797(0x398)][_0x328797(0x329)];let _0xe10494=0x1;for(const _0x1acee3 of this[_0x328797(0x3a8)]()){if(!_0x1acee3)continue;const _0x245a41=_0x1acee3['note']||'';_0x3403c0?_0x245a41[_0x328797(0x240)](_0x2af8ce[_0x328797(0x37e)])&&(_0xe10494*=Number(RegExp['$1'])*0.01):_0x245a41[_0x328797(0x240)](_0x2af8ce[_0x328797(0x5f9)])&&(_0xe10494*=Number(RegExp['$1'])*0.01);}return _0xe10494;},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x2cc)]=function(_0xc408d9){const _0x59b1c5=_0x4e2d80,_0x4ebff9=VisuMZ[_0x59b1c5(0x398)][_0x59b1c5(0x329)];let _0x31c626=0x0;for(const _0x2e6ba4 of this[_0x59b1c5(0x3a8)]()){if(!_0x2e6ba4)continue;const _0xb922f6=_0x2e6ba4[_0x59b1c5(0x5e2)]||'';_0xc408d9?_0xb922f6[_0x59b1c5(0x240)](_0x4ebff9[_0x59b1c5(0x5b6)])&&(_0x31c626+=Number(RegExp['$1'])):_0xb922f6['match'](_0x4ebff9[_0x59b1c5(0x3ce)])&&(_0x31c626+=Number(RegExp['$1']));}return _0x31c626;},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x3ec)]=function(_0x5c46af,_0x441eab){const _0x3c3e20=_0x4e2d80;if(!this[_0x3c3e20(0x217)]())return;if(!this[_0x3c3e20(0x6e1)]())return;!Game_Battler['BATTLE_GRID_SYSTEM'][_0x3c3e20(0x3ca)]&&(_0x5c46af=Math[_0x3c3e20(0x485)](this['hp']-0x1,_0x5c46af));const _0x53c2f3=JsonEx[_0x3c3e20(0x47c)](this[_0x3c3e20(0x5a3)]);_0x441eab&&$gameTemp[_0x3c3e20(0x67f)]([this],_0x441eab),this['gainHp'](-_0x5c46af),this[_0x3c3e20(0x5ae)](),this[_0x3c3e20(0x5d7)](),this[_0x3c3e20(0x5a3)]=_0x53c2f3,this[_0x3c3e20(0x21b)]()&&this['performCollapse']();},Game_Battler['prototype']['clearGridNodeTriggers']=function(){const _0x4f13bb=_0x4e2d80;this[_0x4f13bb(0x309)]=[],this['_gridNodeTriggerCountdown']=0x0;},Game_Battler[_0x4e2d80(0x6a9)]['checkTriggersAtCurrentNodes']=function(){const _0x1b2b81=_0x4e2d80,_0x523eff=this[_0x1b2b81(0x51e)]();for(const _0xe3ee5f of _0x523eff){const _0x35f345=_0xe3ee5f[0x0],_0x2a5ab0=_0xe3ee5f[0x1],_0x16c062=$gameTroop[_0x1b2b81(0x455)](this['isActor'](),_0x35f345,_0x2a5ab0);_0x16c062&&($gameTroop[_0x1b2b81(0x230)](this['isActor'](),_0x35f345,_0x2a5ab0),this[_0x1b2b81(0x304)](_0x16c062));}},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x304)]=function(_0x4cb711){const _0x3e598a=_0x4e2d80;if(!_0x4cb711)return;_0x4cb711['subject']()===$gameTemp['battleGridDummyBattler']()&&_0x4cb711[_0x3e598a(0x223)](this),this[_0x3e598a(0x309)]=this['_queuedGridNodeTriggers']||[],this[_0x3e598a(0x309)][_0x3e598a(0x482)](_0x4cb711),this[_0x3e598a(0x1f7)]=Math['max'](this[_0x3e598a(0x1f7)],0x4);},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x14a)]=function(){const _0x228445=_0x4e2d80;return this[_0x228445(0x309)]=this[_0x228445(0x309)]||[],this[_0x228445(0x309)][_0x228445(0x2f8)]>0x0;},Game_Battler[_0x4e2d80(0x6a9)]['processAllGridNodeTriggers']=function(){const _0x4f9a01=_0x4e2d80;if(!this['_queuedGridNodeTriggers'])return;const _0x3c382b=JsonEx[_0x4f9a01(0x47c)](this['_result']);for(const _0x23beeb of this[_0x4f9a01(0x309)]){if(!_0x23beeb[_0x4f9a01(0x633)]())continue;this[_0x4f9a01(0x1fe)](_0x23beeb);}this[_0x4f9a01(0x309)]=[],this[_0x4f9a01(0x5a3)]=_0x3c382b,this['clearGridNodeTriggers']();},Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x1fe)]=function(_0x4cfaa8){const _0x55c19e=_0x4e2d80;(!_0x4cfaa8[_0x55c19e(0x6a6)]()||_0x4cfaa8[_0x55c19e(0x6a6)]()===$gameTemp[_0x55c19e(0x3eb)]())&&_0x4cfaa8[_0x55c19e(0x223)](this);let _0x2e4e52=DataManager['getActionTriggerAnimation'](_0x4cfaa8['item']());if(_0x2e4e52<0x0)_0x2e4e52=_0x4cfaa8['subject']()[_0x55c19e(0x3e3)]();_0x2e4e52>0x0&&($gameTemp[_0x55c19e(0x483)]([this],_0x2e4e52),$gameTemp['_nodeTriggerActive']=!![]);const _0x46c4d5=Game_Battler[_0x55c19e(0x6d5)][_0x55c19e(0x53f)];if(_0x46c4d5[_0x55c19e(0x2c6)]){const _0xd5925d=DataManager[_0x55c19e(0x5d1)](_0x4cfaa8['item']()),_0x56a3dc=DataManager[_0x55c19e(0x511)](_0x4cfaa8[_0x55c19e(0x633)]()),_0x532e98={'textColor':_0x46c4d5[_0x55c19e(0x602)],'flashColor':_0x46c4d5['FlashColor'],'flashDuration':_0x46c4d5[_0x55c19e(0x65c)]};this[_0x55c19e(0x38f)](_0xd5925d,_0x56a3dc,_0x532e98);}let _0x410ae7=_0x4cfaa8[_0x55c19e(0x633)]()[_0x55c19e(0x183)];while(_0x410ae7--){this[_0x55c19e(0x57f)](),_0x4cfaa8['apply'](this),this[_0x55c19e(0x5a3)][_0x55c19e(0x270)]&&this[_0x55c19e(0x5a3)]['hpDamage']!==0x0&&(this[_0x55c19e(0x5a3)]['hpDamage']>0x0?this[_0x55c19e(0x444)]()?SoundManager[_0x55c19e(0x559)]():SoundManager['playEnemyDamage']():SoundManager['playRecovery']()),this[_0x55c19e(0x5ae)]();}this[_0x55c19e(0x57f)]();this[_0x55c19e(0x21b)]()&&this['performCollapse']();if(this===BattleManager['actor']()&&BattleManager[_0x55c19e(0x6e0)]()&&!this['canInput']()){const _0x989786=SceneManager[_0x55c19e(0x671)];_0x989786[_0x55c19e(0x330)]();}},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x547)]=Window_BattleLog[_0x4e2d80(0x6a9)][_0x4e2d80(0x550)],Window_BattleLog[_0x4e2d80(0x6a9)][_0x4e2d80(0x550)]=function(_0x6ca5ee){const _0x3b8f8d=_0x4e2d80;VisuMZ['BattleGridSystem']['Window_BattleLog_endAction']['call'](this,_0x6ca5ee);if($gameTemp['_nodeTriggerActive']){const _0x313427=SceneManager['_scene'][_0x3b8f8d(0x4f2)];_0x313427&&_0x313427['_nodetriggerAnimationSprites']&&_0x313427['_nodetriggerAnimationSprites'][_0x3b8f8d(0x2f8)]>0x0&&this[_0x3b8f8d(0x482)]('waitForNodeTriggerAnimations');}$gameTemp[_0x3b8f8d(0x1ce)]=![];},Window_BattleLog[_0x4e2d80(0x6a9)][_0x4e2d80(0x434)]=function(){const _0x230fa8=_0x4e2d80;this[_0x230fa8(0x226)](_0x230fa8(0x3c2));},VisuMZ[_0x4e2d80(0x398)]['Window_BattleLog_updateWaitMode']=Window_BattleLog[_0x4e2d80(0x6a9)][_0x4e2d80(0x730)],Window_BattleLog[_0x4e2d80(0x6a9)][_0x4e2d80(0x730)]=function(){const _0x38f96a=_0x4e2d80;if(this[_0x38f96a(0x460)]===_0x38f96a(0x3c2)){if(this[_0x38f96a(0x4f2)][_0x38f96a(0x31a)][_0x38f96a(0x2f8)]>0x0)return!![];this[_0x38f96a(0x460)]='';}return VisuMZ[_0x38f96a(0x398)][_0x38f96a(0x50d)][_0x38f96a(0x25d)](this);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x1cb)]=Game_BattlerBase['prototype'][_0x4e2d80(0x4a0)],Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x4a0)]=function(){const _0x58ed37=_0x4e2d80;this[_0x58ed37(0x660)]()&&this[_0x58ed37(0x695)]()&&this[_0x58ed37(0x184)]&&this[_0x58ed37(0x19c)]();VisuMZ[_0x58ed37(0x398)]['Game_BattlerBase_appear'][_0x58ed37(0x25d)](this);if(BattleManager[_0x58ed37(0x2ae)]()&&$gameParty[_0x58ed37(0x315)]()){if(this[_0x58ed37(0x217)]())this[_0x58ed37(0x2ca)](),this['isEnemy']()&&this[_0x58ed37(0x645)]()[_0x58ed37(0x3d5)]();else{const _0x503695=this['gridRank'](),_0x56332a=this[_0x58ed37(0x454)]();$gameTroop['clearBattleGridNodeTrigger'](this[_0x58ed37(0x444)](),_0x503695,_0x56332a);}}},Game_Enemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x695)]=function(){const _0x4bed15=_0x4e2d80,_0x4a651f=this[_0x4bed15(0x6a1)](),_0x305808=this[_0x4bed15(0x4ba)](),_0x589a77=this[_0x4bed15(0x454)]();return _0x4a651f[_0x4bed15(0x3e6)](_0x305808,_0x589a77);},Game_Enemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x19c)]=function(){const _0x587093=_0x4e2d80;this[_0x587093(0x56b)](),this[_0x587093(0x1ca)](0x1,![]);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x196)]=Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x490)],Game_BattlerBase['prototype']['revive']=function(){const _0xceea6a=_0x4e2d80,_0x557f9b=this[_0xceea6a(0x637)]===0x0;this['isEnemy']()&&this[_0xceea6a(0x637)]===0x0&&this[_0xceea6a(0x21b)]()&&(!this['hasVisibleCorpse']()&&this[_0xceea6a(0x695)]()&&this['moveToUnoccupiedNode']()),VisuMZ[_0xceea6a(0x398)]['Game_BattlerBase_revive'][_0xceea6a(0x25d)](this),_0x557f9b&&BattleManager[_0xceea6a(0x2ae)]()&&$gameParty[_0xceea6a(0x315)]()&&(this[_0xceea6a(0x2ca)](),this[_0xceea6a(0x660)]()&&this[_0xceea6a(0x645)]()['setupEffect']());},Game_Actor['BATTLE_GRID_SYSTEM']={'canGridSwitchOnMove':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['MoveCommand']['canGridSwitchOnMove']??!![],'moveCommandCooldown':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x195)]??0x1,'moveCommandPassTurn':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)]['moveCommandPassTurn']??![],'moveRangeData':{'all':VisuMZ[_0x4e2d80(0x398)]['Settings']['MoveCommand'][_0x4e2d80(0x138)]??![],'none':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x31c)][_0x4e2d80(0x3e2)]??![],'allow':{'square':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)]['MoveCommand'][_0x4e2d80(0x584)]??0x1,'radius':VisuMZ[_0x4e2d80(0x398)]['Settings']['MoveCommand'][_0x4e2d80(0x586)]??0x0,'rank':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x31c)]['allowRank']??0x0,'flank':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)]['allowFlank']??0x0,'diaForward':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x678)]??0x0,'diaBackward':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x31c)]['allowDiaBackward']??0x0,'forward':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x546)]??0x0,'backward':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x2c4)]??0x0,'upward':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x2fe)]??0x0,'downward':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x31c)][_0x4e2d80(0x4e4)]??0x0},'not':{'square':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x6c4)]??0x0,'radius':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x66e)]??0x0,'rank':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['MoveCommand'][_0x4e2d80(0x20e)]??0x0,'flank':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['MoveCommand'][_0x4e2d80(0x508)]??0x0,'diaForward':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)]['notDiaForward']??0x0,'diaBackward':VisuMZ[_0x4e2d80(0x398)]['Settings']['MoveCommand']['notDiaBackward']??0x0,'forward':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x700)]??0x0,'backward':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x496)]??0x0,'upward':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)]['notUpward']??0x0,'downward':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)]['notDownward']??0x0}}},VisuMZ[_0x4e2d80(0x398)]['Game_Actor_setup']=Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x510)],Game_Actor[_0x4e2d80(0x6a9)]['setup']=function(_0x777f2a){const _0x225569=_0x4e2d80;VisuMZ[_0x225569(0x398)][_0x225569(0x6a0)]['call'](this,_0x777f2a),this['clearBattleGridMoveCommandCooldown'](),this[_0x225569(0x489)]();},Game_Actor['prototype']['hasVisibleCorpse']=function(){return!![];},Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x3d9)]=function(){const _0x119097=_0x4e2d80;if(!this[_0x119097(0x6ec)]())return![];if(this[_0x119097(0x5ef)]())return![];if(Imported[_0x119097(0x2dd)]&&BattleManager[_0x119097(0x31d)]()){if(Game_Actor[_0x119097(0x6d5)]['moveCommandPassTurn']&&this[_0x119097(0x71c)][_0x119097(0x2f8)]>0x1)return![];}return this[_0x119097(0x425)]()<=0x0;},Game_Actor['prototype']['canGridMoveTo']=function(_0x1d83e6,_0xaa8746){const _0x4ff3a0=_0x4e2d80,_0x45ed04=Game_Battler[_0x4ff3a0(0x6a9)][_0x4ff3a0(0x4c9)]['call'](this,_0x1d83e6,_0xaa8746);if(!_0x45ed04)return![];return this[_0x4ff3a0(0x2d1)](_0x1d83e6,_0xaa8746);},Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x2d1)]=function(_0x31a94e,_0x453566){const _0x596302=_0x4e2d80,_0x1bcc0b=this['gridMoveRangeData']();return this[_0x596302(0x4e0)](_0x1bcc0b,_0x31a94e,_0x453566);},Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x1cf)]=function(){const _0x5d1c7a=_0x4e2d80;let _0x547589='gridMoveRangeData';if(this[_0x5d1c7a(0x72c)](_0x547589))return this['_cache'][_0x547589];return this['_cache'][_0x547589]=this[_0x5d1c7a(0x2da)](),this[_0x5d1c7a(0x21d)][_0x547589];},Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x2da)]=function(){const _0x294c44=_0x4e2d80;let _0x536336=this['baseGridMoveRangeData']();const _0x1bb993=[],_0x41eeca=this[_0x294c44(0x3a8)]()[_0x294c44(0x3c8)](this[_0x294c44(0x6f0)]());for(const _0x560a33 of _0x41eeca){if(!_0x560a33)continue;const _0x121715=DataManager['getBattleGridMoveRangeData'](_0x560a33);while(_0x121715[_0x294c44(0x2f8)])_0x1bb993[_0x294c44(0x482)](_0x121715[_0x294c44(0x69f)]());}return _0x536336=DataManager[_0x294c44(0x5a9)](_0x536336,_0x1bb993),_0x536336;},Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x587)]=function(){const _0x2e3d9a=_0x4e2d80,_0x4754cd=DataManager[_0x2e3d9a(0x5f4)](this[_0x2e3d9a(0x6f0)]());if(_0x4754cd[_0x2e3d9a(0x2f8)]>0x0)return DataManager['parseBattleGridMoveRangeData']({},_0x4754cd);else{const _0x5db85c=Game_Actor['BATTLE_GRID_SYSTEM']['moveRangeData'];return JSON[_0x2e3d9a(0x5ca)](JSON[_0x2e3d9a(0x1be)](_0x5db85c));}},Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x35f)]=function(){this['_battleGridMoveCommandCooldown']=0x0;},Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x425)]=function(){const _0x2c2529=_0x4e2d80;return this[_0x2c2529(0x6b9)]===undefined&&this[_0x2c2529(0x35f)](),Math[_0x2c2529(0x23c)](0x0,this['_battleGridMoveCommandCooldown']);},Game_Actor['prototype']['setBattleGridMoveCommandCooldown']=function(_0x17cc0e){const _0x368ffc=_0x4e2d80;this[_0x368ffc(0x6b9)]===undefined&&this[_0x368ffc(0x35f)](),this[_0x368ffc(0x6b9)]=_0x17cc0e;},Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x34e)]=function(){const _0x2816bf=_0x4e2d80,_0x1751d1=this[_0x2816bf(0x5bd)]();this[_0x2816bf(0x5c4)](_0x1751d1);},Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x5bd)]=function(){const _0x3c218f=_0x4e2d80;let _0x34e381=Game_Actor['BATTLE_GRID_SYSTEM'][_0x3c218f(0x195)]??0x0;return this[_0x3c218f(0x5fc)]()&&(_0x34e381+=0x1),_0x34e381;},Game_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x679)]=function(){const _0x2d44df=_0x4e2d80;this[_0x2d44df(0x6b9)]===undefined&&this['clearBattleGridMoveCommandCooldown'](),this[_0x2d44df(0x6b9)]--;},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x491)]=Game_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x585)],Game_Battler[_0x4e2d80(0x6a9)]['regenerateAll']=function(){const _0x216617=_0x4e2d80;VisuMZ[_0x216617(0x398)][_0x216617(0x491)][_0x216617(0x25d)](this),this[_0x216617(0x444)]()&&(this[_0x216617(0x679)](),this[_0x216617(0x489)]());},Game_Actor['prototype']['clearBattleGridMoveCommandPassTurn']=function(){const _0x13c274=_0x4e2d80;this[_0x13c274(0x6ae)]=![];},Game_Actor[_0x4e2d80(0x6a9)]['isBattleGridMoveCommandPassingTurn']=function(){const _0x7ec9b4=_0x4e2d80;return!!this[_0x7ec9b4(0x6ae)];},Game_Actor['prototype'][_0x4e2d80(0x685)]=function(_0x2214a1){const _0x40c66c=_0x4e2d80;this[_0x40c66c(0x6ae)]=_0x2214a1,this[_0x40c66c(0x247)](),_0x2214a1&&(Imported['VisuMZ_2_BattleSystemETB']&&BattleManager[_0x40c66c(0x729)]()&&this[_0x40c66c(0x2e5)](),Imported[_0x40c66c(0x6a3)]&&BattleManager[_0x40c66c(0x33c)]()&&this[_0x40c66c(0x2f9)](),Imported[_0x40c66c(0x297)]&&BattleManager[_0x40c66c(0x231)]()&&this[_0x40c66c(0x3f3)]());},Game_Actor[_0x4e2d80(0x6a9)]['applyBattleGridMoveCommandPassTurn']=function(){const _0x14a719=this['passTurnAfterMoveCommand']();this['setBattleGridMoveCommandPassTurn'](_0x14a719);},Game_Actor[_0x4e2d80(0x6a9)]['passTurnAfterMoveCommand']=function(){const _0x4c6134=_0x4e2d80;return Game_Actor[_0x4c6134(0x6d5)][_0x4c6134(0x563)];},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x4cf)]=Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x532)],Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x532)]=function(){const _0x78008b=_0x4e2d80;if(this[_0x78008b(0x444)]()&&this[_0x78008b(0x651)]())return![];return VisuMZ[_0x78008b(0x398)][_0x78008b(0x4cf)][_0x78008b(0x25d)](this);},Game_Enemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x70d)]=function(){const _0x2c0992=_0x4e2d80,_0x2dbe2c=Spriteset_Battle['BATTLE_GRID_SYSTEM'],_0x2d792a=VisuMZ[_0x2c0992(0x398)][_0x2c0992(0x4d6)](this);if(Graphics[_0x2c0992(0x2db)]===0x0)SceneManager[_0x2c0992(0x671)]['adjustBoxSize']();this['_screenX']=_0x2d792a['x']+Graphics['boxWidth']/0x2+_0x2dbe2c[_0x2c0992(0x4f8)],this[_0x2c0992(0x5b5)]=_0x2d792a['y']+Graphics['boxHeight']/0x2+_0x2dbe2c[_0x2c0992(0x2b9)];},Game_Enemy['prototype'][_0x4e2d80(0x4bd)]=function(){const _0xc2d0ab=_0x4e2d80;if(this[_0xc2d0ab(0x51b)]()===0x3)return!![];if(this[_0xc2d0ab(0x29c)]()&&!this[_0xc2d0ab(0x257)]())return!![];return![];},Game_Enemy['prototype']['gridSize']=function(){const _0x819660=_0x4e2d80;if(this[_0x819660(0x2ec)]!==undefined)return this[_0x819660(0x2ec)];this[_0x819660(0x2ec)]={'rank':0x1,'flank':0x1};if(this===$gameTemp[_0x819660(0x3eb)]())return this[_0x819660(0x2ec)];const _0x4963e5=VisuMZ[_0x819660(0x398)][_0x819660(0x329)],_0xa47131=this[_0x819660(0x456)]()?this[_0x819660(0x456)]()[_0x819660(0x5e2)]||'':'';return _0xa47131['match'](_0x4963e5[_0x819660(0x42e)])&&(this[_0x819660(0x2ec)][_0x819660(0x352)]=Number(RegExp['$1'])[_0x819660(0x62d)](0x1,BattleManager[_0x819660(0x646)]()),this['_gridSize'][_0x819660(0x62f)]=Number(RegExp['$2'])[_0x819660(0x62d)](0x1,BattleManager[_0x819660(0x21f)]())),this['_gridSize'];},VisuMZ['BattleGridSystem'][_0x4e2d80(0x38c)]=Game_Enemy[_0x4e2d80(0x6a9)]['transform'],Game_Enemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x4be)]=function(_0x534e64){const _0xcc2d16=_0x4e2d80;if(BattleManager[_0xcc2d16(0x2ae)]())delete this[_0xcc2d16(0x2ec)];VisuMZ[_0xcc2d16(0x398)][_0xcc2d16(0x38c)]['call'](this,_0x534e64),BattleManager[_0xcc2d16(0x2ae)]()&&(this[_0xcc2d16(0x360)](),this[_0xcc2d16(0x2ca)]());},Game_Enemy['prototype'][_0x4e2d80(0x360)]=function(){const _0x209ef0=_0x4e2d80;this['gridNode']()['rank']=Math['min'](this[_0x209ef0(0x1b4)]()['rank'],BattleManager['maxRanks']()-(this['gridRankSize']()-0x1)),this['gridNode']()[_0x209ef0(0x62f)]=Math[_0x209ef0(0x485)](this[_0x209ef0(0x1b4)]()['flank'],BattleManager[_0x209ef0(0x21f)]()-(this[_0x209ef0(0x3bc)]()-0x1));},Game_Enemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x443)]=function(){const _0x2328bd=_0x4e2d80;return this[_0x2328bd(0x650)]()[_0x2328bd(0x352)];},Game_Enemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x3bc)]=function(){return this['gridSize']()['flank'];},Game_Enemy['prototype'][_0x4e2d80(0x51e)]=function(){const _0x35ec7f=_0x4e2d80,_0x21f646=[],_0x29c9c7=this['gridRank'](),_0x520244=this[_0x35ec7f(0x454)]();if(_0x29c9c7===0x0||_0x520244===0x0)return[[0x0,0x0]];for(let _0x1e0d24=0x0;_0x1e0d24<this[_0x35ec7f(0x3bc)]();_0x1e0d24++){for(let _0x496f95=0x0;_0x496f95<this[_0x35ec7f(0x443)]();_0x496f95++){_0x21f646[_0x35ec7f(0x482)]([_0x29c9c7+_0x496f95,_0x520244+_0x1e0d24]);}}return _0x21f646;},Game_Unit['prototype'][_0x4e2d80(0x56f)]=function(){const _0x2aaefb=_0x4e2d80;for(const _0x227522 of this[_0x2aaefb(0x23b)]()){_0x227522[_0x2aaefb(0x56f)]();}},Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x2f4)]=function(){const _0x22e9b8=_0x4e2d80;this['_inBattle']=!![];for(const _0x4fb712 of this[_0x22e9b8(0x23b)]()){_0x4fb712[_0x22e9b8(0x2f4)]();}},Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x356)]=function(){const _0x442fd7=_0x4e2d80,_0x5b7d6c=$gameTemp[_0x442fd7(0x498)]();return this[_0x442fd7(0x23b)]()[_0x442fd7(0x28a)](_0x664d4a=>!_0x5b7d6c['includes'](_0x664d4a));},Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x3b4)]=function(){const _0x5816ad=_0x4e2d80;return this[_0x5816ad(0x23b)]();},Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x3b4)]=function(){const _0x131d4b=_0x4e2d80;return this[_0x131d4b(0x32c)]();},Game_Unit['prototype'][_0x4e2d80(0x5f6)]=function(_0x469821,_0x5c156d){const _0x18ea98=_0x4e2d80;if(!$gameParty[_0x18ea98(0x315)]())return null;return this[_0x18ea98(0x356)]()['filter'](_0x291979=>_0x291979[_0x18ea98(0x28b)](_0x469821,_0x5c156d));},Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x170)]=function(_0x3ec136,_0x60697b){const _0x46dee2=_0x4e2d80;if(!$gameParty[_0x46dee2(0x315)]())return null;const _0x1fe103=['memberNode',this===$gameParty,_0x3ec136,_0x60697b];if(BattleManager[_0x46dee2(0x60d)](_0x1fe103))return BattleManager[_0x46dee2(0x60d)](_0x1fe103);const _0x5cc555=this[_0x46dee2(0x356)]()[_0x46dee2(0x5ba)](_0x2d87f9=>_0x2d87f9['isOnGridNode'](_0x3ec136,_0x60697b));return BattleManager[_0x46dee2(0x589)](_0x1fe103,_0x5cc555),BattleManager[_0x46dee2(0x60d)](_0x1fe103);},Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x3e6)]=function(_0x3fa349,_0x1af035){const _0x5a107c=_0x4e2d80;if(!$gameParty[_0x5a107c(0x315)]())return![];const _0x35ba6d=this[_0x5a107c(0x5f6)](_0x3fa349,_0x1af035);if(_0x35ba6d)for(const _0x49e5ab of _0x35ba6d){if(_0x49e5ab['isHidden']())continue;if(_0x49e5ab[_0x5a107c(0x21b)]()&&!_0x49e5ab[_0x5a107c(0x4bd)]())continue;return!![];}return![];},Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x147)]=function(_0x3e5a65,_0x4a1d13){const _0x5cd54d=_0x4e2d80;if(!$gameParty[_0x5cd54d(0x315)]())return![];return this[_0x5cd54d(0x3e6)](_0x3e5a65,_0x4a1d13);},Game_Unit['prototype']['anyAliveMembersAtGridNode']=function(_0x46f8b5,_0x35c1ee){const _0x1478fa=_0x4e2d80;if(!$gameParty[_0x1478fa(0x315)]())return![];const _0x545efd=this[_0x1478fa(0x170)](_0x46f8b5,_0x35c1ee);if(!_0x545efd)return![];if(!_0x545efd[_0x1478fa(0x217)]())return![];if(!_0x545efd[_0x1478fa(0x6e1)]())return![];return!![];},Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x665)]=function(_0x2f974d){const _0x8407ad=_0x4e2d80;if(!$gameParty[_0x8407ad(0x315)]())return![];return this[_0x8407ad(0x24f)](_0x2f974d)[_0x8407ad(0x2f8)]>0x0;},Game_Unit[_0x4e2d80(0x6a9)]['getAliveMembersAtGridRank']=function(_0x44a8f3){const _0x156672=_0x4e2d80;if(!$gameParty['inBattle']())return[];return this['validGridMembers']()[_0x156672(0x28a)](_0x2a8c37=>_0x2a8c37[_0x156672(0x217)]()&&_0x2a8c37[_0x156672(0x6e1)]()&&_0x2a8c37['isOnGridRank'](_0x44a8f3));},Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x26c)]=function(_0x17da0f){const _0x5d6ec0=_0x4e2d80;if(!$gameParty[_0x5d6ec0(0x315)]())return![];return this[_0x5d6ec0(0x3c3)](_0x17da0f)['length']>0x0;},Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x3c3)]=function(_0x8511a0){const _0xc6729a=_0x4e2d80;if(!$gameParty[_0xc6729a(0x315)]())return[];return this[_0xc6729a(0x356)]()[_0xc6729a(0x28a)](_0x570d23=>_0x570d23['isAlive']()&&_0x570d23[_0xc6729a(0x6e1)]()&&_0x570d23[_0xc6729a(0x4da)](_0x8511a0));},Game_Unit[_0x4e2d80(0x6a9)]['refreshMemberAtGridNode']=function(_0x2434ef,_0x301733){const _0x5aa9a6=_0x4e2d80,_0x2a5fe9=this[_0x5aa9a6(0x170)](_0x2434ef,_0x301733);if(_0x2a5fe9)_0x2a5fe9[_0x5aa9a6(0x247)]();},Game_Unit[_0x4e2d80(0x6a9)]['getGridFrontRank']=function(){const _0x388b5e=_0x4e2d80;if(!$gameParty['inBattle']())return 0x1;$gameTemp[_0x388b5e(0x652)](!![]);const _0x35ab28=Math[_0x388b5e(0x485)](...this['aliveMembers']()['map'](_0x4033e6=>Math[_0x388b5e(0x485)](..._0x4033e6[_0x388b5e(0x1db)]())))[_0x388b5e(0x62d)](0x1,BattleManager['maxRanks']());return $gameTemp[_0x388b5e(0x652)](![]),_0x35ab28;},Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x59a)]=function(){const _0x34f598=_0x4e2d80;if(!$gameParty['inBattle']())return BattleManager['maxRanks']();$gameTemp['suppressGridFilterData'](!![]);const _0x2b5b2f=Math[_0x34f598(0x23c)](...this[_0x34f598(0x3d1)]()[_0x34f598(0x335)](_0x32a340=>Math[_0x34f598(0x23c)](..._0x32a340[_0x34f598(0x1db)]())))[_0x34f598(0x62d)](0x1,BattleManager[_0x34f598(0x646)]());return $gameTemp[_0x34f598(0x652)](![]),_0x2b5b2f;},Game_Unit[_0x4e2d80(0x6a9)]['getGridTopFlank']=function(){const _0x345388=_0x4e2d80;if(!$gameParty[_0x345388(0x315)]())return 0x1;$gameTemp[_0x345388(0x652)](!![]);const _0x4e653d=Math[_0x345388(0x485)](...this['aliveMembers']()[_0x345388(0x335)](_0x2faef9=>Math[_0x345388(0x485)](..._0x2faef9['gridFlanksOccupied']())))[_0x345388(0x62d)](0x1,BattleManager['maxFlanks']());return $gameTemp[_0x345388(0x652)](![]),_0x4e653d;},Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x193)]=function(){const _0x1c9d65=_0x4e2d80;if(!$gameParty[_0x1c9d65(0x315)]())return BattleManager['maxFlanks']();$gameTemp[_0x1c9d65(0x652)](!![]);const _0x3e6cf8=Math[_0x1c9d65(0x23c)](...this['aliveMembers']()['map'](_0x405857=>Math[_0x1c9d65(0x23c)](..._0x405857[_0x1c9d65(0x3a2)]())))[_0x1c9d65(0x62d)](0x1,BattleManager[_0x1c9d65(0x21f)]());return $gameTemp[_0x1c9d65(0x652)](![]),_0x3e6cf8;},Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x27c)]=function(_0x280f42,_0x2aee93){const _0x3aaf51=_0x4e2d80;if(!$gameParty[_0x3aaf51(0x315)]())return _0x280f42;if(!BattleManager[_0x3aaf51(0x2ae)]())return _0x280f42;_0x2aee93=_0x2aee93||$gameTemp[_0x3aaf51(0x593)]();if(!_0x2aee93)return _0x280f42;return _0x280f42=_0x280f42[_0x3aaf51(0x28a)](_0x2b12c7=>_0x2b12c7['isValidGridBattleTarget'](_0x2aee93)),_0x280f42;},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x5c1)]=function(_0x105999){const _0x28c97a=_0x4e2d80;if(!_0x105999)return![];const _0x4a4b27=this['gridNodesOccupied']();for(const _0xc33ed of _0x4a4b27){if(VisuMZ['BattleGridSystem'][_0x28c97a(0x44c)](_0x105999,this[_0x28c97a(0x6a1)](),_0xc33ed[0x0],_0xc33ed[0x1]))return!![];}return![];},VisuMZ['BattleGridSystem'][_0x4e2d80(0x6eb)]=Game_Party[_0x4e2d80(0x6a9)]['members'],Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x23b)]=function(){const _0x242280=_0x4e2d80;let _0x622430=VisuMZ[_0x242280(0x398)]['Game_Party_members']['call'](this);return _0x622430=this[_0x242280(0x27c)](_0x622430),_0x622430;},VisuMZ['BattleGridSystem'][_0x4e2d80(0x616)]=Game_Troop['prototype'][_0x4e2d80(0x23b)],Game_Troop['prototype'][_0x4e2d80(0x23b)]=function(){const _0x12370d=_0x4e2d80;let _0x1c46a7=VisuMZ['BattleGridSystem'][_0x12370d(0x616)]['call'](this);return _0x1c46a7=this[_0x12370d(0x27c)](_0x1c46a7),_0x1c46a7;},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x6c3)]=function(){const _0x21e76d=_0x4e2d80;return VisuMZ[_0x21e76d(0x398)]['Game_Troop_members'][_0x21e76d(0x25d)](this);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x38b)]=Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x551)],Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x551)]=function(_0x4b108f){const _0x5e9ef3=_0x4e2d80;$gameTemp[_0x5e9ef3(0x652)](!![]);let _0x510b98=VisuMZ[_0x5e9ef3(0x398)][_0x5e9ef3(0x38b)]['call'](this,_0x4b108f);$gameTemp[_0x5e9ef3(0x652)](![]);if(this[_0x5e9ef3(0x23b)]()['includes'](_0x510b98))return _0x510b98;const _0x807ad2=this[_0x5e9ef3(0x3d1)]();return _0x807ad2[Math[_0x5e9ef3(0x300)](_0x807ad2[_0x5e9ef3(0x2f8)])];},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x159)]=Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x4ce)],Game_Unit[_0x4e2d80(0x6a9)][_0x4e2d80(0x4ce)]=function(_0x3ccfca){const _0x27f93f=_0x4e2d80;$gameTemp[_0x27f93f(0x652)](!![]);let _0x4a76de=VisuMZ[_0x27f93f(0x398)]['Game_Unit_smoothDeadTarget'][_0x27f93f(0x25d)](this,_0x3ccfca);$gameTemp['suppressGridFilterData'](![]);if(this[_0x27f93f(0x5ec)]()['includes'](_0x4a76de))return _0x4a76de;return this[_0x27f93f(0x5ec)]()[0x0];},VisuMZ['BattleGridSystem'][_0x4e2d80(0x1f1)]=Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x55e)],Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x55e)]=function(){const _0xa5be46=_0x4e2d80;VisuMZ['BattleGridSystem']['Game_Party_initialize'][_0xa5be46(0x25d)](this),this[_0xa5be46(0x69b)]();},Game_Party[_0x4e2d80(0x6a9)]['initBattleGridTactics']=function(){const _0x45fbcc=_0x4e2d80;if(!BattleManager[_0x45fbcc(0x38e)]())return;const _0x1e7766=BattleManager[_0x45fbcc(0x646)]()*BattleManager[_0x45fbcc(0x21f)]();if(this['maxBattleMembers']()>_0x1e7766){let _0x3a83c3=_0x45fbcc(0x154)+'\x0a';_0x3a83c3+='for\x20the\x20maximum\x20party\x20slots.',alert(_0x3a83c3),SceneManager[_0x45fbcc(0x5f1)]();}const _0x996cc1=VisuMZ[_0x45fbcc(0x398)][_0x45fbcc(0x531)]['Tactics'];this['_battleGridTacticsPositions']={};const _0xb8847=this[_0x45fbcc(0x256)];for(let _0x24f698=0x0;_0x24f698<0x14;_0x24f698++){if(_0x24f698+0x1>_0x1e7766)break;this['setupBattleGridTacticsPosition'](_0x996cc1,_0xb8847,_0x24f698);}},Game_Party['prototype'][_0x4e2d80(0x509)]=function(_0x9e2b6a,_0x524bc2,_0x44171f){const _0x16845b=_0x4e2d80;_0x44171f<0x0&&fnord();const _0x2d970b={'rank':_0x9e2b6a[_0x16845b(0x437)[_0x16845b(0x3bb)](_0x44171f)]||0x0,'flank':_0x9e2b6a[_0x16845b(0x30c)['format'](_0x44171f)]||0x0};_0x2d970b[_0x16845b(0x352)]=_0x2d970b[_0x16845b(0x352)][_0x16845b(0x62d)](0x0,BattleManager[_0x16845b(0x646)]()),_0x2d970b[_0x16845b(0x62f)]=_0x2d970b['flank']['clamp'](0x0,BattleManager[_0x16845b(0x21f)]());_0x2d970b['rank']===0x0&&(_0x2d970b[_0x16845b(0x352)]=VisuMZ['BattleGridSystem'][_0x16845b(0x609)](_0x44171f));_0x2d970b['flank']===0x0&&(_0x2d970b['flank']=VisuMZ[_0x16845b(0x398)][_0x16845b(0x2ef)](_0x44171f));for(;;){if(this[_0x16845b(0x6cd)](_0x2d970b[_0x16845b(0x352)],_0x2d970b['flank'],_0x44171f,_0x524bc2))_0x2d970b[_0x16845b(0x62f)]+=0x1,_0x2d970b[_0x16845b(0x62f)]>BattleManager[_0x16845b(0x21f)]()&&(_0x2d970b[_0x16845b(0x62f)]=0x1,_0x2d970b[_0x16845b(0x352)]+=0x1),_0x2d970b['rank']>BattleManager[_0x16845b(0x646)]()&&(_0x2d970b[_0x16845b(0x352)]=0x1),_0x2d970b[_0x16845b(0x352)]=_0x2d970b['rank'][_0x16845b(0x62d)](0x1,BattleManager['maxRanks']()),_0x2d970b[_0x16845b(0x62f)]=_0x2d970b[_0x16845b(0x62f)][_0x16845b(0x62d)](0x1,BattleManager[_0x16845b(0x21f)]());else break;}_0x524bc2[_0x44171f]=_0x2d970b;},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x609)]=function(_0x2b7202){const _0x41952d=_0x4e2d80,_0x144b49=BattleManager[_0x41952d(0x646)](),_0x172620=_0x2b7202%_0x144b49+0x1;return _0x172620;},VisuMZ['BattleGridSystem']['calcAutoStartingGridFlank']=function(_0x3a1cc1){const _0x4e06e9=_0x4e2d80,_0x1494aa=BattleManager['maxFlanks'](),_0x443ed6=Array['from'](Array(_0x1494aa)[_0x4e06e9(0x40d)]())['map'](_0xc72868=>++_0xc72868),_0x56a323=Math[_0x4e06e9(0x72b)](_0x1494aa/0x2)+(_0x1494aa%0x2===0x0?0.5:0x0);_0x443ed6['sort']((_0x2d9516,_0x110c1d)=>{const _0x1448c6=_0x4e06e9,_0x35e48a=Math[_0x1448c6(0x6af)](_0x2d9516-_0x56a323),_0x545e1f=Math[_0x1448c6(0x6af)](_0x110c1d-_0x56a323);return _0x35e48a===_0x545e1f?_0x2d9516-_0x110c1d:_0x35e48a-_0x545e1f;});const _0x4ffcbc=_0x443ed6[_0x3a1cc1%_0x1494aa];;return _0x4ffcbc;},Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x4f4)]=function(){this['_battleGridTacticsPositions']===undefined&&this['initBattleGridTactics']();},Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x41e)]=function(_0x192165){const _0x544e2a=_0x4e2d80;this['checkInitBattleGridTacticsPositions']();const _0x1ace85=this[_0x544e2a(0x68b)]||this[_0x544e2a(0x256)];if(_0x1ace85[_0x192165]===undefined){const _0x3fb042=VisuMZ[_0x544e2a(0x398)]['Settings'][_0x544e2a(0x340)];this[_0x544e2a(0x509)](_0x3fb042,_0x1ace85,_0x192165);}return _0x1ace85[_0x192165];},Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x35e)]=function(_0x9a84f2,_0x2f6e60,_0x139263){const _0x15d63c=_0x4e2d80;if(this[_0x15d63c(0x68b)]!==undefined)return;this[_0x15d63c(0x4f4)]();const _0x1dfb91=this[_0x15d63c(0x256)];_0x1dfb91[_0x9a84f2]={'rank':_0x2f6e60,'flank':_0x139263};},Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x6cd)]=function(_0x2a6ed3,_0x27836e,_0x201e89,_0x37cb95){const _0x426c92=_0x4e2d80;_0x37cb95=_0x37cb95||this['_forcedBattleGridTactics']||this[_0x426c92(0x256)];for(let _0xb7283e in _0x37cb95){if(Number(_0xb7283e)===_0x201e89)continue;if(_0x201e89===undefined&&Number(_0xb7283e)+0x1>this[_0x426c92(0x534)]())break;const _0x2893de=_0x37cb95[_0xb7283e];if(_0x2893de['rank']===_0x2a6ed3&&_0x2893de[_0x426c92(0x62f)]===_0x27836e)return!![];}return![];},Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x1ef)]=function(_0x3916eb,_0x5083fb){const _0x4aeace=_0x4e2d80;this[_0x4aeace(0x4f4)]();const _0xe0024d=this[_0x4aeace(0x68b)]||this['_battleGridTacticsPositions'];for(let _0x242022 in _0xe0024d){const _0x2f3243=_0xe0024d[_0x242022];if(_0x2f3243[_0x4aeace(0x352)]===_0x3916eb&&_0x2f3243['flank']===_0x5083fb)return Number(_0x242022);}return-0x1;},Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x6cf)]=function(_0x176c6a,_0x4f2dd4){const _0x215044=_0x4e2d80,_0x44f6a9=this[_0x215044(0x1ef)](_0x176c6a,_0x4f2dd4);if(_0x44f6a9>=0x0)return $gameParty['battleMembers']()[_0x44f6a9]||null;return null;},Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x2e9)]=function(_0x17c2da,_0x5fed27){const _0xa4cd23=_0x4e2d80,_0x2a0b24=this[_0xa4cd23(0x6cf)](_0x17c2da,_0x5fed27);return _0x2a0b24?_0x2a0b24[_0xa4cd23(0x6bf)]():-0x1;},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x667)]=Game_Party['prototype'][_0x4e2d80(0x534)],Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x534)]=function(){const _0xaa9128=_0x4e2d80;let _0x5e0a8b=VisuMZ[_0xaa9128(0x398)]['Game_Party_maxBattleMembers'][_0xaa9128(0x25d)](this);return BattleManager['isUsingBattleGridTactics']()&&(_0x5e0a8b=_0x5e0a8b['clamp'](0x1,0x14)),_0x5e0a8b;},VisuMZ['BattleGridSystem'][_0x4e2d80(0x725)]=Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x629)],Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x629)]=function(_0x466f85){const _0x4f8fac=_0x4e2d80;VisuMZ[_0x4f8fac(0x398)]['Game_Party_addActor']['call'](this,_0x466f85),this[_0x4f8fac(0x3b9)](_0x466f85);},Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x3b9)]=function(_0x2d7190){const _0x36413a=_0x4e2d80;if(!this[_0x36413a(0x315)]())return;if(!BattleManager['isUsingGridSystem']())return;const _0xa687fb=$gameActors['actor'](_0x2d7190);if(!_0xa687fb)return;Imported['VisuMZ_2_PartySystem']&&this[_0x36413a(0x344)](_0x2d7190),_0xa687fb[_0x36413a(0x2f4)]();},VisuMZ[_0x4e2d80(0x398)]['Game_Party_battleMembers']=Game_Party[_0x4e2d80(0x6a9)]['battleMembers'],Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x32c)]=function(){const _0x568493=_0x4e2d80;return Imported[_0x568493(0x53d)]&&SceneManager['isSceneGridTactics']()?this[_0x568493(0x6f8)](!![]):VisuMZ['BattleGridSystem'][_0x568493(0x5ed)][_0x568493(0x25d)](this);},Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x70e)]=function(_0x25336c){const _0x430ded=_0x4e2d80;if(this[_0x430ded(0x315)]())return;this[_0x430ded(0x68b)]={};const _0xcd10bc=this['_forcedBattleGridTactics'],_0x135368=BattleManager[_0x430ded(0x646)]()*BattleManager[_0x430ded(0x21f)]();for(let _0x24737a=0x0;_0x24737a<0x14;_0x24737a++){if(_0x24737a+0x1>_0x135368)break;this[_0x430ded(0x509)](_0x25336c,_0xcd10bc,_0x24737a);}},Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x462)]=function(){const _0x355e9f=_0x4e2d80;if(this['inBattle']())return;this[_0x355e9f(0x68b)]=undefined;},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x47b)]=Game_System[_0x4e2d80(0x6a9)]['isFormationEnabled'],Game_System[_0x4e2d80(0x6a9)]['isFormationEnabled']=function(){const _0x3b0167=_0x4e2d80;if($gameParty['_forcedBattleGridTactics']!==undefined)return![];return VisuMZ[_0x3b0167(0x398)][_0x3b0167(0x47b)][_0x3b0167(0x25d)](this);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x40f)]=Game_Troop[_0x4e2d80(0x6a9)]['setup'],Game_Troop[_0x4e2d80(0x6a9)]['setup']=function(_0x7c99af){const _0x213855=_0x4e2d80;this['clear'](),this['_troopId']=_0x7c99af,this[_0x213855(0x636)](),this[_0x213855(0x583)](),this[_0x213855(0x48c)](),this[_0x213855(0x44a)](),this[_0x213855(0x5a5)]=![],VisuMZ[_0x213855(0x398)][_0x213855(0x40f)][_0x213855(0x25d)](this,_0x7c99af);},Game_Troop[_0x4e2d80(0x6a9)]['clearBattleGridData']=function(){const _0x1eaeec=_0x4e2d80;this[_0x1eaeec(0x64a)](),this[_0x1eaeec(0x714)]();},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x583)]=function(){},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x2ae)]=function(){const _0x487c42=_0x4e2d80;if($gameTemp[_0x487c42(0x598)]!==undefined)return $gameTemp['_forcedBattleGridSystem'];return BattleManager['BATTLE_GRID_SYSTEM']['defaultEnable'];},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x6e4)]=function(){const _0xbce493=_0x4e2d80;if(this[_0xbce493(0x5a5)])return;this[_0xbce493(0x5a5)]=!![];for(const _0x471bc4 of this[_0xbce493(0x23b)]()){if(!_0x471bc4)continue;_0x471bc4[_0xbce493(0x70d)]();}},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x61f)]=function(_0xd17856,_0x5b2e4e,_0x4d8a3a){const _0x3cae98=_0x4e2d80,_0x2d5825=_0xd17856?$gameParty:this;_0x2d5825[_0x3cae98(0x5b9)](_0x5b2e4e,_0x4d8a3a);},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x64a)]=function(){const _0x700d00=_0x4e2d80;this[_0x700d00(0x6ed)]={'party':{},'troop':{}};},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x5df)]=function(){const _0x532fe5=_0x4e2d80;return this[_0x532fe5(0x6ed)]===undefined&&this[_0x532fe5(0x64a)](),this[_0x532fe5(0x6ed)];},Game_Troop['prototype'][_0x4e2d80(0x377)]=function(_0x489558){const _0x4c8f13=_0x4e2d80,_0x29e60b=_0x489558?_0x4c8f13(0x680):_0x4c8f13(0x13e);return this['getBattleGridNodePassiveStateData']()[_0x29e60b];},Game_Troop[_0x4e2d80(0x6a9)]['getBattleGridNodePassiveStateIDs']=function(_0xc357b8,_0x1da153,_0x4e2970){const _0x2e4613=_0x4e2d80,_0x5f45dc=this[_0x2e4613(0x377)](_0xc357b8),_0x2b3fc1='%1,%2'['format'](_0x1da153,_0x4e2970);return _0x5f45dc[_0x2b3fc1];},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x1e9)]=function(_0xdd323a,_0x960fb6,_0x5a06b3){const _0x422602=_0x4e2d80,_0x2706ee=this['getBattleGridUnitNodePassiveStateData'](_0xdd323a),_0x2abdb2=_0x422602(0x4bf)[_0x422602(0x3bb)](_0x960fb6,_0x5a06b3);delete _0x2706ee[_0x2abdb2],this[_0x422602(0x61f)](_0xdd323a,_0x960fb6,_0x5a06b3);},Game_Troop[_0x4e2d80(0x6a9)]['setBattleGridNodePassiveStateIDs']=function(_0x25b02d,_0x1b4239,_0x22aa8a,_0x151e9a){const _0x1ab077=_0x4e2d80,_0x54d3db=this['getBattleGridUnitNodePassiveStateData'](_0x25b02d),_0x56a27f=_0x1ab077(0x4bf)[_0x1ab077(0x3bb)](_0x1b4239,_0x22aa8a);_0x54d3db[_0x56a27f]=_0x151e9a||[],this[_0x1ab077(0x61f)](_0x25b02d,_0x1b4239,_0x22aa8a);},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x1e5)]=function(_0x235fc9,_0x2e3674,_0x11db20,_0x42ff32){const _0x30aa8d=_0x4e2d80,_0x162120=this[_0x30aa8d(0x377)](_0x235fc9),_0x1b5be0=_0x30aa8d(0x4bf)[_0x30aa8d(0x3bb)](_0x2e3674,_0x11db20);_0x162120[_0x1b5be0]=_0x162120[_0x1b5be0]||[],_0x162120[_0x1b5be0][_0x30aa8d(0x482)](_0x42ff32),this[_0x30aa8d(0x61f)](_0x235fc9,_0x2e3674,_0x11db20);},Game_Troop[_0x4e2d80(0x6a9)]['removeBattleGridNodePassiveStateID']=function(_0x4aee2c,_0x4d2f28,_0x9c52c2,_0x6239f0){const _0x57143f=_0x4e2d80,_0x55654a=this['getBattleGridUnitNodePassiveStateData'](_0x4aee2c),_0x151c1e=_0x57143f(0x4bf)['format'](_0x4d2f28,_0x9c52c2);if(!_0x55654a[_0x151c1e])return;_0x55654a[_0x151c1e][_0x57143f(0x3c8)](_0x6239f0);if(_0x55654a[_0x151c1e][_0x57143f(0x2f8)]<=0x0)delete _0x55654a[_0x151c1e];this['refreshBattlersOnGridNode'](_0x4aee2c,_0x4d2f28,_0x9c52c2);},Game_Troop[_0x4e2d80(0x6a9)]['setupBattleGridPassiveStateNodes']=function(){const _0x4e19eb=_0x4e2d80;if(!BattleManager['isUsingGridSystem']())return;const _0x27f7fb=VisuMZ[_0x4e19eb(0x398)]['RegExp'],_0x4cb52d=DataManager[_0x4e19eb(0x205)](this[_0x4e19eb(0x13e)]()['id']),_0x13ed6e=_0x4cb52d[_0x4e19eb(0x240)](_0x27f7fb[_0x4e19eb(0x343)]);if(_0x13ed6e)for(const _0x52663a of _0x13ed6e){_0x52663a[_0x4e19eb(0x240)](_0x27f7fb[_0x4e19eb(0x343)]),VisuMZ[_0x4e19eb(0x398)][_0x4e19eb(0x467)]();}},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x467)]=function(){const _0x354750=_0x4e2d80,_0x204ac1=String(RegExp['$1'])[_0x354750(0x53a)]()['trim'](),_0x4ad49a=[_0x354750(0x408),_0x354750(0x354)]['includes'](_0x204ac1)?!![]:![],_0x1c0302=Number(RegExp['$2'])[_0x354750(0x62d)](0x1,BattleManager[_0x354750(0x646)]()),_0x3258b7=Number(RegExp['$3'])['clamp'](0x1,BattleManager['maxFlanks']()),_0x1067b0=String(RegExp['$4'])[_0x354750(0x18a)](',')[_0x354750(0x335)](_0x30cf06=>_0x30cf06['trim']()),_0x3a8375=$gameTroop[_0x354750(0x501)](_0x4ad49a,_0x1c0302,_0x3258b7)||[];for(const _0x3224c6 of _0x1067b0){const _0x3732d3=/^\d+$/[_0x354750(0x190)](_0x3224c6);let _0x19c5ca=0x0;_0x3732d3?_0x19c5ca=Number(_0x3224c6):_0x19c5ca=DataManager[_0x354750(0x33f)](_0x3224c6),_0x19c5ca&&_0x3a8375['push'](_0x19c5ca);}$gameTroop[_0x354750(0x631)](_0x4ad49a,_0x1c0302,_0x3258b7,_0x3a8375);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x5fe)]=Game_BattlerBase['prototype']['addPassiveStatesFromOtherPlugins'],Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x487)]=function(){const _0x45c33e=_0x4e2d80;VisuMZ['BattleGridSystem'][_0x45c33e(0x5fe)]['call'](this),$gameParty[_0x45c33e(0x315)]()&&BattleManager[_0x45c33e(0x2ae)]()&&this['addPassiveStatesFromBattleGridNodes']();},Game_BattlerBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x62a)]=function(){const _0x856476=_0x4e2d80,_0x560b86=this[_0x856476(0x444)](),_0x22abef=this[_0x856476(0x51e)](),_0xfd1d41=this[_0x856476(0x21d)]['passiveStates'];for(const _0x4daa6f of _0x22abef){const _0x9cae9f=_0x4daa6f[0x0],_0x291d3f=_0x4daa6f[0x1],_0xd87b3a=$gameTroop[_0x856476(0x501)](_0x560b86,_0x9cae9f,_0x291d3f);if(!_0xd87b3a)continue;for(const _0x57ab2c of _0xd87b3a){_0xfd1d41[_0x856476(0x482)](_0x57ab2c);}}},Game_Troop['prototype'][_0x4e2d80(0x714)]=function(){const _0x3c1df9=_0x4e2d80;this[_0x3c1df9(0x72d)]={'party':{},'troop':{}};},Game_Troop[_0x4e2d80(0x6a9)]['getBattleGridNodeTriggerData']=function(){const _0x2ad56e=_0x4e2d80;return this['_gridNodeTriggers']===undefined&&this[_0x2ad56e(0x714)](),this[_0x2ad56e(0x72d)];},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x66b)]=function(_0x41be86){const _0x2656c8=_0x4e2d80,_0x4be5b1=_0x41be86?'party':_0x2656c8(0x13e);return this['getBattleGridNodeTriggerData']()[_0x4be5b1];},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x455)]=function(_0x401c30,_0x3af30e,_0x348dc6){const _0x47b931=_0x4e2d80,_0x5a67c1=this[_0x47b931(0x66b)](_0x401c30),_0x53851a=_0x47b931(0x4bf)['format'](_0x3af30e,_0x348dc6);return _0x5a67c1[_0x53851a]||null;},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x230)]=function(_0x3aca10,_0x4512b9,_0x1639ad){const _0x4585cd=_0x4e2d80,_0x4b1afc=this[_0x4585cd(0x66b)](_0x3aca10),_0x2fc492=_0x4585cd(0x4bf)[_0x4585cd(0x3bb)](_0x4512b9,_0x1639ad);delete _0x4b1afc[_0x2fc492];},Game_Troop[_0x4e2d80(0x6a9)][_0x4e2d80(0x6b5)]=function(_0xa765c6,_0x4bc43c,_0x4c9c21,_0x5f492a,_0x2f7b54){const _0x37ec70=_0x4e2d80;if(_0x5f492a<=0x0)return;const _0x1abbf9=this['getBattleGridUnitNodeTriggerData'](_0xa765c6),_0x344969='%1,%2'[_0x37ec70(0x3bb)](_0x4bc43c,_0x4c9c21),_0x3503fc=new Game_Action(_0x2f7b54||$gameTemp['battleGridDummyBattler']());_0x3503fc['setSkill'](_0x5f492a),_0x3503fc[_0x37ec70(0x691)](!![]),_0x1abbf9[_0x344969]=_0x3503fc;},Game_Troop[_0x4e2d80(0x6a9)]['setupBattleGridTriggerNodes']=function(){const _0x4fd7f8=_0x4e2d80;if(!BattleManager['isUsingGridSystem']())return;const _0x3252e9=VisuMZ[_0x4fd7f8(0x398)][_0x4fd7f8(0x329)],_0xf2a677=DataManager[_0x4fd7f8(0x205)](this['troop']()['id']),_0x5050c0=_0xf2a677[_0x4fd7f8(0x240)](_0x3252e9[_0x4fd7f8(0x562)]);if(_0x5050c0)for(const _0x4f9284 of _0x5050c0){_0x4f9284[_0x4fd7f8(0x240)](_0x3252e9['NodeTrigger']),VisuMZ['BattleGridSystem'][_0x4fd7f8(0x21a)]();}},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x21a)]=function(){const _0x4edbc4=_0x4e2d80,_0x1bc40a=String(RegExp['$1'])[_0x4edbc4(0x53a)]()[_0x4edbc4(0x373)](),_0x67f21f=[_0x4edbc4(0x408),_0x4edbc4(0x354)]['includes'](_0x1bc40a)?!![]:![],_0x17e7b5=Number(RegExp['$2'])[_0x4edbc4(0x62d)](0x1,BattleManager[_0x4edbc4(0x646)]()),_0x53807c=Number(RegExp['$3'])[_0x4edbc4(0x62d)](0x1,BattleManager['maxFlanks']()),_0x1e29c6=String(RegExp['$4']),_0x48b26b=/^\d+$/['test'](_0x1e29c6);let _0x1c25c1=0x0;_0x48b26b?_0x1c25c1=Number(_0x1e29c6):_0x1c25c1=DataManager[_0x4edbc4(0x177)](_0x1e29c6),$gameTroop[_0x4edbc4(0x6b5)](_0x67f21f,_0x17e7b5,_0x53807c,_0x1c25c1);},VisuMZ['BattleGridSystem']['Scene_Menu_createCommandWindow']=Scene_Menu[_0x4e2d80(0x6a9)]['createCommandWindow'],Scene_Menu[_0x4e2d80(0x6a9)]['createCommandWindow']=function(){const _0x5f241a=_0x4e2d80;VisuMZ['BattleGridSystem'][_0x5f241a(0x1a9)][_0x5f241a(0x25d)](this);const _0x4e5d73=this[_0x5f241a(0x3e8)];_0x4e5d73[_0x5f241a(0x564)](_0x5f241a(0x4c0),this[_0x5f241a(0x53c)]['bind'](this));},Scene_Menu[_0x4e2d80(0x6a9)][_0x4e2d80(0x53c)]=function(){const _0x324a8f=_0x4e2d80;SceneManager[_0x324a8f(0x482)](Scene_BattleGridTactics);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x14b)]=Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x574)],Scene_Battle[_0x4e2d80(0x6a9)]['createActorCommandWindow']=function(){const _0x5e4b8d=_0x4e2d80;VisuMZ[_0x5e4b8d(0x398)]['Scene_Battle_createActorCommandWindow'][_0x5e4b8d(0x25d)](this);const _0x5559fd=this[_0x5e4b8d(0x529)];_0x5559fd['setHandler'](_0x5e4b8d(0x2b6),this[_0x5e4b8d(0x346)][_0x5e4b8d(0x27a)](this)),this[_0x5e4b8d(0x600)]();},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x526)]=Scene_Battle[_0x4e2d80(0x6a9)]['needsInputWindowChange'],Scene_Battle['prototype'][_0x4e2d80(0x718)]=function(){const _0x2629ca=_0x4e2d80;if(this[_0x2629ca(0x168)]()||this[_0x2629ca(0x597)])return![];return VisuMZ[_0x2629ca(0x398)][_0x2629ca(0x526)][_0x2629ca(0x25d)](this);},VisuMZ['BattleGridSystem'][_0x4e2d80(0x6a8)]=Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x32e)],Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x32e)]=function(){const _0x532a46=_0x4e2d80;if(this[_0x532a46(0x597)])return;VisuMZ[_0x532a46(0x398)][_0x532a46(0x6a8)][_0x532a46(0x25d)](this);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x3af)]=Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x5f2)],Scene_Battle['prototype'][_0x4e2d80(0x5f2)]=function(){const _0x76386d=_0x4e2d80;if(this[_0x76386d(0x692)])return this[_0x76386d(0x692)]--,!![];if(this[_0x76386d(0x5af)])return!![];if(this['isAnyGridWindowActive']())return!![];return VisuMZ[_0x76386d(0x398)][_0x76386d(0x3af)][_0x76386d(0x25d)](this);},VisuMZ['BattleGridSystem'][_0x4e2d80(0x29d)]=Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x2be)],Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x2be)]=function(){const _0x2949d3=_0x4e2d80,_0x3b5330=BattleManager[_0x2949d3(0x566)]();if(_0x3b5330&&_0x3b5330[_0x2949d3(0x673)]())this[_0x2949d3(0x192)]();else{if(_0x3b5330&&_0x3b5330[_0x2949d3(0x16c)]())this[_0x2949d3(0x4fb)]();else _0x3b5330&&_0x3b5330[_0x2949d3(0x2ee)]()?this[_0x2949d3(0x5ad)]():VisuMZ[_0x2949d3(0x398)][_0x2949d3(0x29d)]['call'](this);}},Scene_Battle[_0x4e2d80(0x6a9)]['onGridWindowCancel']=function(){const _0x3f8e43=_0x4e2d80;this['_actorCommandWindow'][_0x3f8e43(0x351)](),this[_0x3f8e43(0x529)][_0x3f8e43(0x247)]();if(this['isNonSubmenuCancel']())this[_0x3f8e43(0x6e9)][_0x3f8e43(0x1f6)](),this[_0x3f8e43(0x47e)][_0x3f8e43(0x681)](),this[_0x3f8e43(0x529)]['activate']();else switch(this[_0x3f8e43(0x529)][_0x3f8e43(0x4fd)]()){case'skill':this[_0x3f8e43(0x15f)][_0x3f8e43(0x1f6)](),this[_0x3f8e43(0x15f)][_0x3f8e43(0x19a)]();break;case _0x3f8e43(0x633):this[_0x3f8e43(0x641)][_0x3f8e43(0x1f6)](),this['_itemWindow'][_0x3f8e43(0x19a)]();break;}this[_0x3f8e43(0x16e)]();},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x385)]=Scene_Battle[_0x4e2d80(0x6a9)]['hideSubInputWindows'],Scene_Battle['prototype']['hideSubInputWindows']=function(){const _0x30ad89=_0x4e2d80;VisuMZ[_0x30ad89(0x398)]['Scene_Battle_hideSubInputWindows'][_0x30ad89(0x25d)](this);if(this[_0x30ad89(0x2bb)])this[_0x30ad89(0x2bb)][_0x30ad89(0x461)]();if(this[_0x30ad89(0x322)])this[_0x30ad89(0x322)][_0x30ad89(0x461)]();if(this[_0x30ad89(0x22d)])this[_0x30ad89(0x22d)][_0x30ad89(0x461)]();if(this[_0x30ad89(0x40b)])this[_0x30ad89(0x40b)]['deactivate']();},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x600)]=function(){const _0x2fa394=_0x4e2d80;this[_0x2fa394(0x6be)](),this[_0x2fa394(0x22a)](),this[_0x2fa394(0x36d)](),this[_0x2fa394(0x568)]();},Scene_Battle[_0x4e2d80(0x6a9)]['isAnyGridWindowActive']=function(){const _0x4fee0b=_0x4e2d80;if(this['_gridMoveWindow']&&this[_0x4fee0b(0x2bb)][_0x4fee0b(0x45b)])return!![];if(this[_0x4fee0b(0x322)]&&this[_0x4fee0b(0x322)][_0x4fee0b(0x45b)])return!![];if(this[_0x4fee0b(0x22d)]&&this[_0x4fee0b(0x22d)][_0x4fee0b(0x45b)])return!![];if(this[_0x4fee0b(0x40b)]&&this[_0x4fee0b(0x40b)][_0x4fee0b(0x45b)])return!![];return![];},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x6be)]=function(){const _0x33d54b=_0x4e2d80,_0x10d1a5=new Rectangle(0x0,Graphics['height']*0xa,this[_0x33d54b(0x6c5)](BattleManager[_0x33d54b(0x646)](),!![]),this['calcWindowHeight'](BattleManager[_0x33d54b(0x21f)](),!![]));this[_0x33d54b(0x2bb)]=new Window_BattleGridMove(_0x10d1a5),this[_0x33d54b(0x1d7)](this[_0x33d54b(0x2bb)]),this[_0x33d54b(0x2bb)][_0x33d54b(0x564)](_0x33d54b(0x575),this['onGridMoveNodeOk'][_0x33d54b(0x27a)](this)),this[_0x33d54b(0x2bb)][_0x33d54b(0x564)](_0x33d54b(0x6e3),this[_0x33d54b(0x60b)][_0x33d54b(0x27a)](this));},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x22a)]=function(){const _0x40c6e1=_0x4e2d80,_0x52cdd0=new Rectangle(0x0,Graphics[_0x40c6e1(0x298)]*0xa,this[_0x40c6e1(0x6c5)](BattleManager[_0x40c6e1(0x646)]()*0x4,!![]),this[_0x40c6e1(0x6c5)](BattleManager[_0x40c6e1(0x21f)](),!![]));this['_gridSelectNodeWindow']=new Window_BattleGridSelectNode(_0x52cdd0),this[_0x40c6e1(0x1d7)](this[_0x40c6e1(0x322)]),this[_0x40c6e1(0x322)][_0x40c6e1(0x564)](_0x40c6e1(0x575),this['onGridSelectNodeOk'][_0x40c6e1(0x27a)](this)),this[_0x40c6e1(0x322)]['setHandler']('cancel',this[_0x40c6e1(0x51c)]['bind'](this));},Scene_Battle[_0x4e2d80(0x6a9)]['createGridSelectRankWindow']=function(){const _0x475828=_0x4e2d80,_0x3b9e55=new Rectangle(0x0,Graphics[_0x475828(0x298)]*0xa,this[_0x475828(0x6c5)](BattleManager[_0x475828(0x646)]()*0x4,!![]),this['calcWindowHeight'](0x1,!![]));this[_0x475828(0x22d)]=new Window_BattleGridSelectRank(_0x3b9e55),this['addChild'](this[_0x475828(0x22d)]),this[_0x475828(0x22d)][_0x475828(0x564)](_0x475828(0x352),this[_0x475828(0x581)][_0x475828(0x27a)](this)),this[_0x475828(0x22d)][_0x475828(0x564)](_0x475828(0x6e3),this[_0x475828(0x23f)][_0x475828(0x27a)](this));},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x568)]=function(){const _0x4e7068=_0x4e2d80,_0x237108=new Rectangle(0x0,Graphics[_0x4e7068(0x298)]*0xa,this[_0x4e7068(0x6c5)](BattleManager[_0x4e7068(0x646)]()*0x4,!![]),this['calcWindowHeight'](BattleManager[_0x4e7068(0x21f)](),!![]));this[_0x4e7068(0x40b)]=new Window_BattleGridSelectFlank(_0x237108),this[_0x4e7068(0x1d7)](this[_0x4e7068(0x40b)]),this['_gridSelectFlankWindow'][_0x4e7068(0x564)](_0x4e7068(0x62f),this['onGridSelectFlankOk']['bind'](this)),this['_gridSelectFlankWindow'][_0x4e7068(0x564)](_0x4e7068(0x6e3),this[_0x4e7068(0x2e4)][_0x4e7068(0x27a)](this));},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x2a9)]=function(){const _0xf11774=_0x4e2d80,_0x44dfc4=this[_0xf11774(0x2f1)](),_0xb441a4=['xp','portrait',_0xf11774(0x576),_0xf11774(0x1de),_0xf11774(0x38a)];_0xb441a4[_0xf11774(0x314)](_0x44dfc4)&&(this['_actorCommandWindow'][_0xf11774(0x148)](),this[_0xf11774(0x15f)]['hide'](),this[_0xf11774(0x641)][_0xf11774(0x681)]());},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x346)]=function(){const _0x50249e=_0x4e2d80;this[_0x50249e(0x3a6)]()?(this[_0x50249e(0x597)]=!![],this[_0x50249e(0x530)][_0x50249e(0x73a)](TextManager[_0x50249e(0x463)])):this[_0x50249e(0x1d9)]();},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x3a6)]=function(){const _0x2b6cb0=_0x4e2d80;return BattleManager[_0x2b6cb0(0x14e)]();},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x1d9)]=function(){const _0x239be0=_0x4e2d80;this[_0x239be0(0x597)]=![],this['_logWindow'][_0x239be0(0x23a)](),this[_0x239be0(0x2bb)]['setActor'](BattleManager[_0x239be0(0x70c)]()),this['closeCommandWindowsForGridNodes']();},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x46e)]=Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x243)],Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x243)]=function(){const _0x85d224=_0x4e2d80;if(this[_0x85d224(0x2bb)]&&this[_0x85d224(0x2bb)][_0x85d224(0x45b)])return;VisuMZ[_0x85d224(0x398)][_0x85d224(0x46e)][_0x85d224(0x25d)](this),this['_queueGridMove']&&!BattleManager[_0x85d224(0x37f)]&&this[_0x85d224(0x1d9)]();},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x338)]=function(){const _0x5894a7=_0x4e2d80,_0x1aab44=BattleManager[_0x5894a7(0x70c)](),_0x42a6ef=this['_gridMoveWindow'][_0x5894a7(0x733)]();_0x1aab44['performGridMoveTo'](_0x42a6ef[_0x5894a7(0x352)],_0x42a6ef['flank'],_0x5894a7(0x465)),_0x1aab44[_0x5894a7(0x34e)](),_0x1aab44[_0x5894a7(0x2e3)](),this[_0x5894a7(0x60b)]();},Scene_Battle['prototype'][_0x4e2d80(0x60b)]=function(){const _0x4eddea=_0x4e2d80;this['_gridMoveWindow'][_0x4eddea(0x461)](),!BattleManager['actor']()[_0x4eddea(0x532)]()?(this[_0x4eddea(0x529)][_0x4eddea(0x461)](),Imported[_0x4eddea(0x5a7)]&&BattleManager[_0x4eddea(0x4c3)]()&&BattleManager[_0x4eddea(0x70c)]()['clearBattleGridMoveCommandPassTurn'](),this[_0x4eddea(0x330)](),this['_battleGridPassDuration']=0xc):(this[_0x4eddea(0x529)][_0x4eddea(0x351)](),this[_0x4eddea(0x529)][_0x4eddea(0x19a)](),this['_actorCommandWindow'][_0x4eddea(0x247)]());},Scene_Battle[_0x4e2d80(0x6a9)]['startGridSelectNode']=function(){const _0x5d752f=_0x4e2d80;this[_0x5d752f(0x322)]['setAction'](BattleManager[_0x5d752f(0x566)]()),this['_gridSelectNodeWindow'][_0x5d752f(0x19a)](),this['closeCommandWindowsForGridNodes'](),this[_0x5d752f(0x4a3)][_0x5d752f(0x1f6)]();},Scene_Battle['prototype'][_0x4e2d80(0x513)]=function(){const _0x246722=_0x4e2d80;this[_0x246722(0x322)]['deactivate']();},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x5cc)]=function(){const _0x360a08=_0x4e2d80,_0x56d279=this[_0x360a08(0x322)][_0x360a08(0x733)](),_0x9e2394=_0x360a08(0x689)['format'](_0x56d279['forActor']?_0x360a08(0x70c):_0x360a08(0x456),_0x56d279[_0x360a08(0x352)],_0x56d279[_0x360a08(0x62f)]),_0x47bcca=BattleManager[_0x360a08(0x566)]();_0x47bcca['setTargetBattlerKey'](_0x9e2394),this[_0x360a08(0x513)](),this[_0x360a08(0x4c7)](),this['selectNextCommand']();},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x51c)]=function(){const _0x2b0ea5=_0x4e2d80;this[_0x2b0ea5(0x513)](),this[_0x2b0ea5(0x55b)]();},Scene_Battle['prototype'][_0x4e2d80(0x4fb)]=function(){const _0x5f0292=_0x4e2d80;this[_0x5f0292(0x22d)][_0x5f0292(0x399)](BattleManager[_0x5f0292(0x566)]()),this[_0x5f0292(0x22d)][_0x5f0292(0x19a)](),this[_0x5f0292(0x2a9)](),this[_0x5f0292(0x4a3)][_0x5f0292(0x1f6)]();},Scene_Battle['prototype'][_0x4e2d80(0x2a8)]=function(){const _0x494a30=_0x4e2d80;this[_0x494a30(0x22d)]['deactivate']();},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x581)]=function(){const _0x4b51cd=_0x4e2d80,_0x1bf1b1=this['_gridSelectRankWindow'][_0x4b51cd(0x733)](),_0x4e7271='%1,\x20%2'[_0x4b51cd(0x3bb)](_0x1bf1b1[_0x4b51cd(0x5d3)]?_0x4b51cd(0x70c):_0x4b51cd(0x456),_0x1bf1b1[_0x4b51cd(0x352)]),_0x15247d=BattleManager[_0x4b51cd(0x566)]();_0x15247d[_0x4b51cd(0x6a5)](_0x4e7271),this['endGridSelectNode'](),this[_0x4b51cd(0x4c7)](),this['selectNextCommand']();},Scene_Battle['prototype'][_0x4e2d80(0x23f)]=function(){const _0xfc712b=_0x4e2d80;this[_0xfc712b(0x513)](),this[_0xfc712b(0x55b)]();},Scene_Battle[_0x4e2d80(0x6a9)]['startGridSelectFlank']=function(){const _0x2d5102=_0x4e2d80;this[_0x2d5102(0x40b)][_0x2d5102(0x399)](BattleManager['inputtingAction']()),this[_0x2d5102(0x40b)][_0x2d5102(0x19a)](),this[_0x2d5102(0x2a9)](),this[_0x2d5102(0x4a3)]['show']();},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x255)]=function(){const _0x5138ba=_0x4e2d80;this['_gridSelectFlankWindow'][_0x5138ba(0x461)]();},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x32f)]=function(){const _0x267542=_0x4e2d80,_0x506833=this[_0x267542(0x40b)]['currentExt'](),_0x1e52af=_0x267542(0x245)[_0x267542(0x3bb)](_0x506833['forActor']?_0x267542(0x70c):_0x267542(0x456),_0x506833['flank']),_0x3dd680=BattleManager[_0x267542(0x566)]();_0x3dd680[_0x267542(0x6a5)](_0x1e52af),this[_0x267542(0x513)](),this[_0x267542(0x4c7)](),this[_0x267542(0x330)]();},Scene_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x2e4)]=function(){const _0x22fa0d=_0x4e2d80;this[_0x22fa0d(0x513)](),this[_0x22fa0d(0x55b)]();};function Scene_BattleGridTactics(){const _0x45bb99=_0x4e2d80;this[_0x45bb99(0x55e)](...arguments);}Scene_BattleGridTactics[_0x4e2d80(0x6a9)]=Object[_0x4e2d80(0x286)](Scene_MenuBase['prototype']),Scene_BattleGridTactics['prototype']['constructor']=Scene_BattleGridTactics,Scene_BattleGridTactics['SETTINGS']={'useTactics':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x340)][_0x4e2d80(0x325)]??![],'helpBgType':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)][_0x4e2d80(0x1bb)]??0x0,'extended':VisuMZ[_0x4e2d80(0x398)]['Settings']['Tactics']['Extended']??!![],'shiftRemoveShortcut':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Compatibility'][_0x4e2d80(0x6dc)]??!![]},Scene_BattleGridTactics[_0x4e2d80(0x6a9)]['initialize']=function(){const _0x1f7761=_0x4e2d80;Scene_MenuBase[_0x1f7761(0x6a9)][_0x1f7761(0x55e)][_0x1f7761(0x25d)](this),this[_0x1f7761(0x3ab)]();},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x3ab)]=function(){const _0x889ea6=_0x4e2d80,_0x509734=BattleManager['maxRanks']()*BattleManager[_0x889ea6(0x21f)]();if($gameParty[_0x889ea6(0x534)]()>_0x509734){let _0x9b9117=_0x889ea6(0x154)+'\x0a';_0x9b9117+=_0x889ea6(0x59c),alert(_0x9b9117),SceneManager['exit']();}},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x735)]=function(){return!![];},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x64b)]=function(){const _0x2f8df9=_0x4e2d80;Scene_MenuBase[_0x2f8df9(0x6a9)][_0x2f8df9(0x64b)][_0x2f8df9(0x25d)](this),this[_0x2f8df9(0x36e)](this[_0x2f8df9(0x6ef)]()),this[_0x2f8df9(0x412)]();},Scene_BattleGridTactics['prototype'][_0x4e2d80(0x6ef)]=function(){const _0x538e84=_0x4e2d80;return VisuMZ['BattleGridSystem'][_0x538e84(0x531)]['Tactics']['SnapshotOpacity'];},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x412)]=function(){const _0x5132ec=_0x4e2d80,_0x5c84de=VisuMZ[_0x5132ec(0x398)]['Settings'][_0x5132ec(0x340)];_0x5c84de&&(_0x5c84de[_0x5132ec(0x615)]!==''||_0x5c84de[_0x5132ec(0x698)]!=='')&&(this[_0x5132ec(0x3a7)]=new Sprite(ImageManager['loadTitle1'](_0x5c84de[_0x5132ec(0x615)])),this[_0x5132ec(0x537)]=new Sprite(ImageManager[_0x5132ec(0x613)](_0x5c84de[_0x5132ec(0x698)])),this[_0x5132ec(0x1d7)](this['_backSprite1']),this[_0x5132ec(0x1d7)](this[_0x5132ec(0x537)]),this[_0x5132ec(0x3a7)][_0x5132ec(0x18e)][_0x5132ec(0x30e)](this[_0x5132ec(0x65d)][_0x5132ec(0x27a)](this,this['_backSprite1'])),this[_0x5132ec(0x537)]['bitmap'][_0x5132ec(0x30e)](this[_0x5132ec(0x65d)][_0x5132ec(0x27a)](this,this[_0x5132ec(0x537)])));},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x65d)]=function(_0x403510){const _0x5c5870=_0x4e2d80;this[_0x5c5870(0x26b)](_0x403510),this['centerSprite'](_0x403510);},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x3a4)]=function(){const _0x2d725c=_0x4e2d80;if(BattleManager[_0x2d725c(0x2c3)]()&&Scene_BattleGridTactics[_0x2d725c(0x36f)]['shiftRemoveShortcut']){if(Imported['VisuMZ_2_PartySystem']&&this[_0x2d725c(0x4c1)]&&this[_0x2d725c(0x4c1)][_0x2d725c(0x45b)]){if(this['_gridNodeWindow']['actor']()&&this['_gridNodeWindow']['_mode']===_0x2d725c(0x152))return TextManager[_0x2d725c(0x6cc)]('shift');}}return Scene_MenuBase[_0x2d725c(0x6a9)][_0x2d725c(0x3a4)][_0x2d725c(0x25d)](this);},Scene_BattleGridTactics[_0x4e2d80(0x6a9)]['buttonAssistText3']=function(){const _0x30e57f=_0x4e2d80;if(BattleManager[_0x30e57f(0x2c3)]()&&Scene_BattleGridTactics['SETTINGS'][_0x30e57f(0x58a)]){if(Imported[_0x30e57f(0x53d)]&&this[_0x30e57f(0x4c1)]&&this[_0x30e57f(0x4c1)][_0x30e57f(0x45b)]){if(this[_0x30e57f(0x4c1)][_0x30e57f(0x70c)]()&&this[_0x30e57f(0x4c1)][_0x30e57f(0x5b3)]===_0x30e57f(0x152))return TextManager[_0x30e57f(0x1e1)];}}return Scene_MenuBase[_0x30e57f(0x6a9)][_0x30e57f(0x436)][_0x30e57f(0x25d)](this);},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x286)]=function(){const _0x25b26a=_0x4e2d80;Scene_MenuBase[_0x25b26a(0x6a9)][_0x25b26a(0x286)][_0x25b26a(0x25d)](this),this[_0x25b26a(0x471)](),this[_0x25b26a(0x292)](),BattleManager[_0x25b26a(0x2c3)]()&&(this[_0x25b26a(0x71a)](),this['createActorWindow']());},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x471)]=function(){const _0x4708c3=_0x4e2d80;Scene_MenuBase[_0x4708c3(0x6a9)][_0x4708c3(0x471)][_0x4708c3(0x25d)](this),this[_0x4708c3(0x4a3)]['setBackgroundType'](Scene_BattleGridTactics[_0x4708c3(0x36f)][_0x4708c3(0x595)]);},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x292)]=function(){const _0x30b670=_0x4e2d80,_0x547380=this[_0x30b670(0x199)](),_0x351ae5=new Window_BattleGridTactics(_0x547380);_0x351ae5[_0x30b670(0x274)](this[_0x30b670(0x4a3)]),_0x351ae5[_0x30b670(0x564)]('node',this[_0x30b670(0x56c)][_0x30b670(0x27a)](this)),_0x351ae5[_0x30b670(0x564)](_0x30b670(0x6e3),this[_0x30b670(0x721)]['bind'](this)),this[_0x30b670(0x2ce)](_0x351ae5),this['_gridNodeWindow']=_0x351ae5,_0x351ae5[_0x30b670(0x328)](Window_BattleGridTactics[_0x30b670(0x36f)][_0x30b670(0x1ab)]);},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x199)]=function(){const _0x47e597=_0x4e2d80;if(VisuMZ[_0x47e597(0x398)][_0x47e597(0x531)][_0x47e597(0x17c)][_0x47e597(0x5c8)])return VisuMZ['BattleGridSystem'][_0x47e597(0x531)][_0x47e597(0x17c)][_0x47e597(0x5c8)][_0x47e597(0x25d)](this);const _0x3b738d=Graphics[_0x47e597(0x2db)],_0x449b21=this[_0x47e597(0x204)](),_0x12eadd=0x0,_0x596521=this[_0x47e597(0x1ff)]();return new Rectangle(_0x12eadd,_0x596521,_0x3b738d,_0x449b21);},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x71a)]=function(){const _0x4e7f28=_0x4e2d80;if(!BattleManager[_0x4e7f28(0x2c3)]())return;const _0x40ad3c=this[_0x4e7f28(0x607)](),_0x2a0721=new Window_BattleGridTacticsCommand(_0x40ad3c);_0x2a0721[_0x4e7f28(0x274)](this[_0x4e7f28(0x4a3)]),_0x2a0721['setHandler'](_0x4e7f28(0x6e3),this[_0x4e7f28(0x669)][_0x4e7f28(0x27a)](this)),_0x2a0721[_0x4e7f28(0x564)](_0x4e7f28(0x323),this[_0x4e7f28(0x5fb)][_0x4e7f28(0x27a)](this)),_0x2a0721[_0x4e7f28(0x564)](_0x4e7f28(0x50f),this[_0x4e7f28(0x428)]['bind'](this)),_0x2a0721[_0x4e7f28(0x564)](_0x4e7f28(0x1d8),this['onTacticsCommandSwapMember']['bind'](this)),_0x2a0721[_0x4e7f28(0x564)]('skills',this['onTacticsCommandSceneChange'][_0x4e7f28(0x27a)](this,Scene_Skill)),_0x2a0721[_0x4e7f28(0x564)](_0x4e7f28(0x639),this['onTacticsCommandSceneChange'][_0x4e7f28(0x27a)](this,Scene_Equip)),_0x2a0721[_0x4e7f28(0x564)](_0x4e7f28(0x604),this[_0x4e7f28(0x275)]['bind'](this,Scene_Status)),Imported[_0x4e7f28(0x53d)]&&(_0x2a0721['setHandler']('addMember',this['onTacticsCommandSwapMember']['bind'](this)),_0x2a0721['setHandler']('removeMember',this[_0x4e7f28(0x178)][_0x4e7f28(0x27a)](this))),Imported[_0x4e7f28(0x4a6)]&&_0x2a0721[_0x4e7f28(0x564)](_0x4e7f28(0x4dc),this[_0x4e7f28(0x275)][_0x4e7f28(0x27a)](this,Scene_ClassChange)),this[_0x4e7f28(0x2ce)](_0x2a0721),this[_0x4e7f28(0x5e6)]=_0x2a0721,_0x2a0721[_0x4e7f28(0x328)](Window_BattleGridTacticsCommand['SETTINGS']['bgType']||0x0);},Scene_BattleGridTactics['prototype']['tacticsCommandWindowRect']=function(){const _0x475840=_0x4e2d80,_0x97fc40=0x0,_0x33ca85=0x0,_0x5d54a1=Window_BattleGridTacticsCommand[_0x475840(0x36f)][_0x475840(0x610)]??0x168,_0x4a1fe6=this[_0x475840(0x6c5)](0x1,!![]);return new Rectangle(_0x97fc40,_0x33ca85,_0x5d54a1,_0x4a1fe6);},Scene_BattleGridTactics['prototype']['createActorWindow']=function(){const _0x5afe04=_0x4e2d80;if(!BattleManager[_0x5afe04(0x2c3)]())return;const _0x32fa8e=this[_0x5afe04(0x393)]();this['_actorWindow']=new Window_MenuActor(_0x32fa8e),this['_actorWindow'][_0x5afe04(0x564)]('ok',this['onActorOk'][_0x5afe04(0x27a)](this)),this[_0x5afe04(0x47e)]['setHandler'](_0x5afe04(0x6e3),this[_0x5afe04(0x4a1)][_0x5afe04(0x27a)](this)),this[_0x5afe04(0x2ce)](this[_0x5afe04(0x47e)]);},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x393)]=function(){const _0x194545=_0x4e2d80;if(VisuMZ[_0x194545(0x398)][_0x194545(0x531)][_0x194545(0x17c)][_0x194545(0x728)])return VisuMZ[_0x194545(0x398)][_0x194545(0x531)]['Window'][_0x194545(0x728)][_0x194545(0x25d)](this);const _0x373278=0x0,_0x42c736=Math[_0x194545(0x485)](this[_0x194545(0x1ff)](),this[_0x194545(0x4ca)]()),_0x154add=Graphics['boxWidth']-this[_0x194545(0x2c5)](),_0x14629e=this[_0x194545(0x204)]()+this[_0x194545(0x378)]();return new Rectangle(_0x373278,_0x42c736,_0x154add,_0x14629e);},Scene_BattleGridTactics['prototype'][_0x4e2d80(0x56c)]=function(){const _0x14108b=_0x4e2d80,_0x39adbb=this[_0x14108b(0x4c1)];if(_0x39adbb[_0x14108b(0x26a)]()===_0x14108b(0x66a))this['onTacticsChangePosition']();else BattleManager[_0x14108b(0x2c3)]()?this['openTacticsCommandWindow']():this[_0x14108b(0x6b4)]();},Scene_BattleGridTactics[_0x4e2d80(0x6a9)]['onTacticsChangePosition']=function(){const _0x452901=_0x4e2d80,_0x3e77b5=this[_0x452901(0x4c1)];_0x3e77b5[_0x452901(0x26a)]()===_0x452901(0x152)?_0x3e77b5[_0x452901(0x17b)]():_0x3e77b5[_0x452901(0x5b8)]();},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x721)]=function(){const _0x428a21=_0x4e2d80,_0x368f6b=this[_0x428a21(0x4c1)];_0x368f6b[_0x428a21(0x26a)]()===_0x428a21(0x152)?this[_0x428a21(0x505)]():_0x368f6b[_0x428a21(0x478)]();},Scene_BattleGridTactics[_0x4e2d80(0x6a9)]['isCursorLeft']=function(){const _0x5d5073=_0x4e2d80,_0x2f64de=this[_0x5d5073(0x4c1)],_0xe41201=_0x2f64de[_0x5d5073(0x642)](),_0x25241c=_0x2f64de[_0x5d5073(0x6bf)]()%_0xe41201;return _0x25241c<=_0xe41201/0x2;},Scene_BattleGridTactics[_0x4e2d80(0x6a9)]['showActorWindow']=function(){const _0x5afdcf=_0x4e2d80;this[_0x5afdcf(0x5b7)]()?this['_actorWindow']['x']=Graphics[_0x5afdcf(0x2db)]-this[_0x5afdcf(0x47e)]['width']:this['_actorWindow']['x']=0x0,this['_actorWindow']['show'](),this[_0x5afdcf(0x47e)]['activate']();},Scene_BattleGridTactics['prototype'][_0x4e2d80(0x49b)]=function(){const _0x7c69b8=_0x4e2d80;this[_0x7c69b8(0x47e)][_0x7c69b8(0x681)](),this[_0x7c69b8(0x47e)]['deactivate']();},Scene_BattleGridTactics[_0x4e2d80(0x6a9)]['onActorOk']=function(){const _0x431a46=_0x4e2d80;SoundManager[_0x431a46(0x4ff)]();const _0x2910ed=this['_gridNodeWindow'],_0x8bba8f=this[_0x431a46(0x47e)],_0x1229b0=_0x2910ed[_0x431a46(0x70c)]();if(_0x1229b0){const _0x2bf639=_0x2910ed[_0x431a46(0x40e)](),_0x2c7824=_0x8bba8f['index']();$gameParty['swapOrder'](_0x2bf639,_0x2c7824);}else{if(Imported['VisuMZ_2_PartySystem']){if(!_0x2910ed[_0x431a46(0x70c)]()){const _0x517691=_0x2910ed[_0x431a46(0x2e7)](_0x2910ed[_0x431a46(0x6bf)]()),_0x161dae=_0x2910ed[_0x431a46(0x6e8)](_0x2910ed[_0x431a46(0x6bf)]()),_0x23d11a=$gameParty['_battleMembers'][_0x431a46(0x379)](0x0);$gameParty['setBattleGridTacticsPosition'](_0x23d11a,_0x517691,_0x161dae);}const _0x58ba21=_0x8bba8f[_0x431a46(0x70c)](_0x8bba8f[_0x431a46(0x6bf)]()),_0x53b384=_0x58ba21[_0x431a46(0x5da)](),_0x5e51bf=_0x2910ed[_0x431a46(0x3db)]();!$gameParty[_0x431a46(0x25c)][_0x431a46(0x314)](_0x53b384)&&($gameParty[_0x431a46(0x25c)][_0x5e51bf]=_0x53b384),$gameParty[_0x431a46(0x1a6)]();}}this[_0x431a46(0x49b)](),_0x8bba8f[_0x431a46(0x247)](),_0x2910ed[_0x431a46(0x247)](),_0x2910ed['activate']();},Scene_BattleGridTactics['prototype'][_0x4e2d80(0x4a1)]=function(){const _0x31a821=_0x4e2d80;this['hideActorWindow'](),this['openTacticsCommandWindow'](),this[_0x31a821(0x5e6)][_0x31a821(0x186)]('swapMember');},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x37c)]=Window_MenuActor[_0x4e2d80(0x6a9)]['processOk'],Window_MenuActor[_0x4e2d80(0x6a9)]['processOk']=function(){const _0x331774=_0x4e2d80;SceneManager[_0x331774(0x28f)]()?Window_MenuStatus['prototype'][_0x331774(0x2d7)][_0x331774(0x25d)](this):VisuMZ['BattleGridSystem']['Window_MenuActor_processOk'][_0x331774(0x25d)](this);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x394)]=Window_MenuStatus[_0x4e2d80(0x6a9)][_0x4e2d80(0x54a)],Window_MenuStatus[_0x4e2d80(0x6a9)]['isCurrentItemEnabled']=function(){const _0x291026=_0x4e2d80;if(!this[_0x291026(0x376)]())return![];return VisuMZ[_0x291026(0x398)]['Window_MenuStatus_isCurrentItemEnabled'][_0x291026(0x25d)](this);},Window_MenuStatus[_0x4e2d80(0x6a9)][_0x4e2d80(0x376)]=function(){const _0x2c4869=_0x4e2d80;if(!SceneManager['isSceneGridTactics']())return!![];if(!Imported[_0x2c4869(0x53d)])return!![];const _0x1ef808=this[_0x2c4869(0x70c)](this['index']());if(!_0x1ef808[_0x2c4869(0x144)]())return![];const _0x3563df=SceneManager['_scene'][_0x2c4869(0x4c1)];if(!_0x3563df[_0x2c4869(0x70c)]()){const _0x2384d5=_0x1ef808[_0x2c4869(0x5da)]();if($gameParty[_0x2c4869(0x25c)][_0x2c4869(0x314)](_0x2384d5))return![];}return!![];},VisuMZ['BattleGridSystem'][_0x4e2d80(0x150)]=Window_MenuStatus['prototype'][_0x4e2d80(0x3fc)],Window_MenuStatus[_0x4e2d80(0x6a9)]['drawActorGraphic']=function(_0x413e1d,_0x182d97,_0x3e227e,_0x4eff94,_0x358c2e){const _0x16ae0e=_0x4e2d80;VisuMZ['BattleGridSystem']['Window_MenuStatus_drawActorGraphic'][_0x16ae0e(0x25d)](this,_0x413e1d,_0x182d97,_0x3e227e,_0x4eff94,_0x358c2e);if(BattleManager[_0x16ae0e(0x2c3)]()){if(Imported[_0x16ae0e(0x53d)]&&_0x413e1d){!_0x413e1d['isFormationChangeOk']()&&this[_0x16ae0e(0x1b1)](ImageManager[_0x16ae0e(0x59b)],_0x182d97,_0x3e227e);if(_0x413e1d[_0x16ae0e(0x3fd)]()){if(!_0x413e1d['isFormationChangeOk']())_0x182d97+=ImageManager[_0x16ae0e(0x71d)]+0x4;this[_0x16ae0e(0x1b1)](ImageManager['requiredPartyMemberIcon'],_0x182d97,_0x3e227e);}}}},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x438)]=Window_StatusBase['prototype'][_0x4e2d80(0x66c)],Window_StatusBase['prototype'][_0x4e2d80(0x66c)]=function(_0x5da221,_0x44c212,_0x1c1c61,_0x1bbb77,_0x1e1ba6){const _0x5566a8=_0x4e2d80;VisuMZ['BattleGridSystem'][_0x5566a8(0x438)][_0x5566a8(0x25d)](this,_0x5da221,_0x44c212,_0x1c1c61,_0x1bbb77,_0x1e1ba6);if(BattleManager[_0x5566a8(0x2c3)]()){if(Imported['VisuMZ_2_PartySystem']&&_0x5da221){!_0x5da221[_0x5566a8(0x144)]()&&this[_0x5566a8(0x1b1)](ImageManager[_0x5566a8(0x59b)],_0x44c212,_0x1c1c61);if(_0x5da221['isRequiredInParty']()){if(!_0x5da221['isFormationChangeOk']())_0x44c212+=ImageManager[_0x5566a8(0x71d)]+0x4;this[_0x5566a8(0x1b1)](ImageManager[_0x5566a8(0x3f4)],_0x44c212,_0x1c1c61);}}}},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x669)]=function(){const _0x48de1b=_0x4e2d80;this['_tacticsCommandWindow'][_0x48de1b(0x148)](),this[_0x48de1b(0x4c1)][_0x48de1b(0x19a)]();},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x1b0)]=function(){const _0x1f2b46=_0x4e2d80;this['updateTacticsCommandWindowPosition'](),this[_0x1f2b46(0x5e6)][_0x1f2b46(0x19a)]();},Scene_BattleGridTactics['prototype'][_0x4e2d80(0x2f0)]=function(){const _0x4f2a0f=_0x4e2d80,_0x2117fe=this[_0x4f2a0f(0x4c1)],_0x158256=this[_0x4f2a0f(0x5e6)]['width'];this[_0x4f2a0f(0x5e6)][_0x4f2a0f(0x247)]();const _0x501f83=this[_0x4f2a0f(0x6c5)](this[_0x4f2a0f(0x5e6)][_0x4f2a0f(0x3b1)][_0x4f2a0f(0x2f8)],!![]);let _0x500a1c=0x0,_0x595d0c=0x0;const _0x36b21b=_0x2117fe['itemRect'](_0x2117fe[_0x4f2a0f(0x6bf)]());_0x500a1c=_0x36b21b['x']+_0x2117fe['x']+_0x2117fe[_0x4f2a0f(0x5d8)]+_0x36b21b[_0x4f2a0f(0x610)],_0x595d0c=_0x36b21b['y']+_0x2117fe['y']+_0x2117fe[_0x4f2a0f(0x5d8)],_0x500a1c+_0x158256>Graphics[_0x4f2a0f(0x2db)]&&(_0x500a1c=_0x36b21b['x']+_0x2117fe['x']+_0x2117fe[_0x4f2a0f(0x5d8)]-_0x158256),this[_0x4f2a0f(0x5e6)]['x']=_0x500a1c[_0x4f2a0f(0x62d)](0x0,Graphics[_0x4f2a0f(0x2db)]-_0x158256),this[_0x4f2a0f(0x5e6)]['y']=_0x595d0c[_0x4f2a0f(0x62d)](this[_0x4f2a0f(0x1ff)](),this[_0x4f2a0f(0x5ac)]()-_0x501f83),this['_tacticsCommandWindow'][_0x4f2a0f(0x298)]=_0x501f83;},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x5fb)]=function(){const _0x4961d0=_0x4e2d80;this['_tacticsCommandWindow'][_0x4961d0(0x148)](),this[_0x4961d0(0x6b4)]();},Scene_BattleGridTactics[_0x4e2d80(0x6a9)]['onTacticsCommandPartyLeader']=function(){const _0x2d62e1=_0x4e2d80;SoundManager[_0x2d62e1(0x4ff)](),this[_0x2d62e1(0x5e6)][_0x2d62e1(0x148)]();const _0x4c6431=this[_0x2d62e1(0x4c1)][_0x2d62e1(0x40e)](),_0x141c7c=$gameParty[_0x2d62e1(0x256)],_0x17a6c8=_0x141c7c[_0x4c6431],_0x1ca957=_0x141c7c[0x0];_0x141c7c[_0x4c6431]=_0x1ca957,_0x141c7c[0x0]=_0x17a6c8,$gameParty['swapOrder'](_0x4c6431,0x0),this[_0x2d62e1(0x4c1)][_0x2d62e1(0x247)](),this[_0x2d62e1(0x4c1)][_0x2d62e1(0x19a)]();},Scene_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x59d)]=function(){const _0x1236c0=_0x4e2d80;this[_0x1236c0(0x5e6)][_0x1236c0(0x148)](),this['showActorWindow']();const _0x23cd3b=this[_0x1236c0(0x4c1)][_0x1236c0(0x70c)](),_0x2db43f=_0x23cd3b?_0x23cd3b[_0x1236c0(0x6bf)]():$gameParty[_0x1236c0(0x32c)]()['remove'](null)[_0x1236c0(0x3c8)](undefined)[_0x1236c0(0x2f8)];this[_0x1236c0(0x47e)][_0x1236c0(0x3c4)](_0x2db43f),this[_0x1236c0(0x47e)][_0x1236c0(0x5ab)]();const _0x5dc756=Math[_0x1236c0(0x23c)](Math[_0x1236c0(0x4f9)](this[_0x1236c0(0x47e)][_0x1236c0(0x49d)]()/0x2)-0x1,0x1);this[_0x1236c0(0x47e)]['setTopRow'](Math[_0x1236c0(0x23c)](_0x2db43f-_0x5dc756,0x0));},Scene_BattleGridTactics['prototype'][_0x4e2d80(0x178)]=function(){const _0x16b573=_0x4e2d80;SoundManager[_0x16b573(0x4ff)]();const _0x40df75=this[_0x16b573(0x4c1)]['actor']();$gameParty[_0x16b573(0x347)](_0x40df75['actorId']()),this[_0x16b573(0x5e6)]['close'](),this[_0x16b573(0x4c1)][_0x16b573(0x247)](),this['_gridNodeWindow'][_0x16b573(0x19a)]();},Scene_BattleGridTactics['prototype']['onTacticsCommandSceneChange']=function(_0x152daf){const _0xce02b2=_0x4e2d80,_0x36eda2=this['_gridNodeWindow'][_0xce02b2(0x70c)]();if(!_0x36eda2){this[_0xce02b2(0x4c1)][_0xce02b2(0x19a)]();return;}$gameTemp[_0xce02b2(0x5db)]=!![],$gameParty[_0xce02b2(0x3d8)](_0x36eda2),SceneManager[_0xce02b2(0x482)](_0x152daf);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x6c8)]=Game_Party[_0x4e2d80(0x6a9)][_0x4e2d80(0x23b)],Game_Party['prototype'][_0x4e2d80(0x23b)]=function(){const _0x38156c=_0x4e2d80;if($gameTemp['_fromTacticsMenu'])return this[_0x38156c(0x32c)]();return VisuMZ[_0x38156c(0x398)][_0x38156c(0x6c8)][_0x38156c(0x25d)](this);},VisuMZ['BattleGridSystem']['Sprite_Battler_isClickEnabled']=Sprite_Battler['prototype'][_0x4e2d80(0x703)],Sprite_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x703)]=function(){const _0x58d85f=_0x4e2d80;if(this[_0x58d85f(0x599)]())return![];return VisuMZ['BattleGridSystem']['Sprite_Battler_isClickEnabled'][_0x58d85f(0x25d)](this);},Sprite_Battler['prototype'][_0x4e2d80(0x599)]=function(){const _0x30fc06=_0x4e2d80;if(!BattleManager[_0x30fc06(0x2ae)]())return![];if(!this[_0x30fc06(0x4de)])return![];if(this[_0x30fc06(0x4de)][_0x30fc06(0x444)]())return![];if(this['_battler']['isDead']())return!![];return![];},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x5d2)]=Sprite_Battler[_0x4e2d80(0x6a9)]['updateSelectionEffect'],Sprite_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x32a)]=function(){const _0x4e9dac=_0x4e2d80;VisuMZ[_0x4e9dac(0x398)][_0x4e9dac(0x5d2)]['call'](this),this[_0x4e9dac(0x264)]();},Sprite_Battler['prototype']['updateGridInputtingEffect']=function(){const _0x30bd52=_0x4e2d80;if(!BattleManager[_0x30bd52(0x2ae)]())return;if(!Spriteset_Battle[_0x30bd52(0x6d5)]['blinkInputUser'])return;if(!this['_battler'])return;const _0x4fe1fd=this[_0x30bd52(0x350)]();if(this['_battler'][_0x30bd52(0x6e0)]()&&this[_0x30bd52(0x4de)]===BattleManager[_0x30bd52(0x70c)]()){const _0x1bea44=Spriteset_Battle[_0x30bd52(0x6d5)]['blinkInputColor'];if(this[_0x30bd52(0x4de)]['isSelected']())Graphics[_0x30bd52(0x13a)]%0x1e<0xf?_0x4fe1fd[_0x30bd52(0x400)](_0x1bea44):_0x4fe1fd['setBlendColor']([0xff,0xff,0xff,0x40]);else Graphics[_0x30bd52(0x13a)]%0x1e<0xf?_0x4fe1fd[_0x30bd52(0x400)](_0x1bea44):_0x4fe1fd[_0x30bd52(0x400)]([0xff,0xff,0xff,0x0]);}},Sprite_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x711)]=function(){const _0x13ebb2=_0x4e2d80;if(!BattleManager['isUsingGridSystem']())return;if(!Spriteset_Battle[_0x13ebb2(0x6d5)][_0x13ebb2(0x299)])return;if(!this['_battler'])return;const _0x53aa54=this[_0x13ebb2(0x350)](),_0x123bf2=Spriteset_Battle[_0x13ebb2(0x6d5)]['blinkInputColor'];_0x53aa54&&_0x53aa54[_0x13ebb2(0x710)]&&(_0x53aa54[_0x13ebb2(0x710)]['equals'](_0x123bf2)&&_0x53aa54[_0x13ebb2(0x400)]([0x0,0x0,0x0,0x0]));},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x1df)]=Scene_Battle['prototype']['selectNextCommand'],Scene_Battle['prototype']['selectNextCommand']=function(){const _0x598c5b=_0x4e2d80,_0x5cadea=BattleManager['actor']();VisuMZ[_0x598c5b(0x398)][_0x598c5b(0x1df)][_0x598c5b(0x25d)](this);if(_0x5cadea){const _0x484eb4=_0x5cadea[_0x598c5b(0x645)]();if(_0x484eb4)_0x484eb4[_0x598c5b(0x711)]();}},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x4ef)]=Sprite_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x1b7)],Sprite_Battler[_0x4e2d80(0x6a9)]['updatePosition']=function(){const _0x453655=_0x4e2d80;VisuMZ[_0x453655(0x398)][_0x453655(0x4ef)][_0x453655(0x25d)](this),BattleManager['isUsingGridSystem']()&&this[_0x453655(0x4de)]&&this[_0x453655(0x181)]();},Sprite_Battler[_0x4e2d80(0x6a9)][_0x4e2d80(0x181)]=function(){const _0x36299e=_0x4e2d80;this[_0x36299e(0x1ba)]()&&this[_0x36299e(0x4de)][_0x36299e(0x382)]();},Sprite_Battler['prototype']['isGridNodeTriggerReady']=function(){const _0x1b309a=_0x4e2d80;if(this[_0x1b309a(0x387)]===Sprite_SvEnemy)return;if(!this[_0x1b309a(0x4de)])return![];if(!this[_0x1b309a(0x4de)]['isGridNodeTriggerQueued']())return![];if(this[_0x1b309a(0x4de)][_0x1b309a(0x1f7)]-->0x0)return![];if(this[_0x1b309a(0x1a7)]!==this[_0x1b309a(0x296)])return![];if(this[_0x1b309a(0x39f)]!==this['_homeY'])return![];if(this[_0x1b309a(0x32b)])return![];if(!isNaN(this[_0x1b309a(0x42d)])&&this[_0x1b309a(0x42d)]!==this[_0x1b309a(0x3cb)])return![];if(!isNaN(this[_0x1b309a(0x273)])&&this[_0x1b309a(0x273)]!==this[_0x1b309a(0x413)])return![];if(this[_0x1b309a(0x417)])return![];if(this[_0x1b309a(0x41d)])return![];return this[_0x1b309a(0x3cb)]===0x0&&this[_0x1b309a(0x413)]===0x0;},Sprite_Battler[_0x4e2d80(0x6a9)]['startHomeMove']=function(_0x123a66,_0x46cc01,_0x152c2f,_0x330ca){const _0x2ff802=_0x4e2d80,_0x5337fd=VisuMZ[_0x2ff802(0x2ea)][_0x2ff802(0x531)];if(this[_0x2ff802(0x387)]===Sprite_Actor)_0x123a66+=_0x5337fd[_0x2ff802(0x414)][_0x2ff802(0x4c5)]||0x0,_0x46cc01+=_0x5337fd[_0x2ff802(0x414)][_0x2ff802(0x1bc)]||0x0;else this[_0x2ff802(0x387)]===Sprite_Enemy&&(_0x123a66+=_0x5337fd[_0x2ff802(0x2c0)][_0x2ff802(0x4c5)]||0x0,_0x46cc01+=_0x5337fd[_0x2ff802(0x2c0)][_0x2ff802(0x1bc)]||0x0);this[_0x2ff802(0x1a7)]=_0x123a66,this[_0x2ff802(0x39f)]=_0x46cc01,this[_0x2ff802(0x32b)]=_0x152c2f,this['_homeWholeDuration']=_0x152c2f,this[_0x2ff802(0x533)]=_0x330ca,_0x152c2f<=0x0&&this[_0x2ff802(0x6f9)]();},VisuMZ[_0x4e2d80(0x398)]['Sprite_Actor_setActorHome']=Sprite_Actor['prototype'][_0x4e2d80(0x42f)],Sprite_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x42f)]=function(_0x25bef1){const _0x3e4947=_0x4e2d80;BattleManager[_0x3e4947(0x2ae)]()?this['setActorHomeGrid']():VisuMZ[_0x3e4947(0x398)]['Sprite_Actor_setActorHome'][_0x3e4947(0x25d)](this,_0x25bef1);},Sprite_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x649)]=function(){const _0x1fbbfe=_0x4e2d80,_0xfbe332=Spriteset_Battle['BATTLE_GRID_SYSTEM'],_0x48086b=this[_0x1fbbfe(0x4de)][_0x1fbbfe(0x4ba)](),_0xb62dba=this[_0x1fbbfe(0x4de)][_0x1fbbfe(0x454)](),_0x2a32ec=VisuMZ[_0x1fbbfe(0x398)][_0x1fbbfe(0x254)](!![],_0x48086b,_0xb62dba);if(Graphics[_0x1fbbfe(0x2db)]===0x0)SceneManager['_scene'][_0x1fbbfe(0x658)]();const _0xbf32c5=_0x2a32ec['x']+Graphics[_0x1fbbfe(0x2db)]/0x2+_0xfbe332[_0x1fbbfe(0x68a)],_0x49582c=_0x2a32ec['y']+Graphics[_0x1fbbfe(0x475)]/0x2+_0xfbe332[_0x1fbbfe(0x3d7)];this[_0x1fbbfe(0x3ee)](_0xbf32c5,_0x49582c);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x39b)]=Sprite_Actor[_0x4e2d80(0x6a9)]['shouldStepForward'],Sprite_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x6ee)]=function(){const _0x300a25=_0x4e2d80;if(BattleManager['isUsingGridSystem']())return![];return VisuMZ[_0x300a25(0x398)]['Sprite_Actor_shouldStepForward'][_0x300a25(0x25d)](this);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x739)]=Sprite_Actor[_0x4e2d80(0x6a9)][_0x4e2d80(0x1e0)],Sprite_Actor['prototype'][_0x4e2d80(0x1e0)]=function(){const _0x10851a=_0x4e2d80;if(BattleManager[_0x10851a(0x2ae)]())return;VisuMZ[_0x10851a(0x398)][_0x10851a(0x739)]['call'](this);},VisuMZ['BattleGridSystem'][_0x4e2d80(0x3d4)]=Sprite_Enemy[_0x4e2d80(0x6a9)]['stepForward'],Sprite_Enemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x1e0)]=function(){const _0x2005fd=_0x4e2d80;if(BattleManager['isUsingGridSystem']())return;VisuMZ['BattleGridSystem'][_0x2005fd(0x3d4)]['call'](this);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x683)]=Sprite_Enemy['prototype']['loadBitmap'],Sprite_Enemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x430)]=function(_0x177111){const _0x30f158=_0x4e2d80;if(this[_0x30f158(0x4de)]===$gameTemp['battleGridDummyBattler']()){this[_0x30f158(0x18e)]=new Bitmap(0x60,0x60);return;}VisuMZ['BattleGridSystem']['Sprite_Enemy_loadBitmap'][_0x30f158(0x25d)](this,_0x177111);};function Sprite_BattleGridNode(){this['initialize'](...arguments);}Sprite_BattleGridNode[_0x4e2d80(0x6a9)]=Object[_0x4e2d80(0x286)](Sprite_Clickable['prototype']),Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x387)]=Sprite_BattleGridNode,Sprite_BattleGridNode[_0x4e2d80(0x36f)]={'actor':{'nodeFilename':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Node'][_0x4e2d80(0x688)]??'','color':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x308)][_0x4e2d80(0x553)]??'#0088ff','opacity':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x308)][_0x4e2d80(0x1d6)]??0xc0,'differBlendColor':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x308)]['actorDifferBlendColor']??[0xa0,0xff,0xa0,0xc0]},'enemy':{'nodeFilename':VisuMZ[_0x4e2d80(0x398)]['Settings']['Node'][_0x4e2d80(0x1a3)]??'','color':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x308)]['enemyTextColor']??_0x4e2d80(0x359),'opacity':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x308)][_0x4e2d80(0x57b)]??0xc0,'differBlendColor':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Node']['enemyDifferBlendColor']??[0xff,0xff,0x0,0xc0]},'scaleX':VisuMZ['BattleGridSystem']['Settings'][_0x4e2d80(0x308)][_0x4e2d80(0x238)]??0.6,'scaleY':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Node']['scaleY']??0.2,'opacitySpeed':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x308)][_0x4e2d80(0x316)]??0x10,'disabledOpacity':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)]['Node'][_0x4e2d80(0x31f)]??0xa0,'visible':{'always':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x308)]['visibleAlways']??![],'anyInput':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x308)][_0x4e2d80(0x319)]??![],'targeting':VisuMZ['BattleGridSystem']['Settings']['Node'][_0x4e2d80(0x3a0)]??![],'actorInput':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x308)]['visibleActorInput']??!![],'selected':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x308)][_0x4e2d80(0x561)]??!![],'active':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Node'][_0x4e2d80(0x4e2)]??![],'targeted':VisuMZ['BattleGridSystem']['Settings']['Node']['visibleTargeted']??!![]},'selectedBlendColor':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x308)][_0x4e2d80(0x237)]??[0xff,0xff,0xff,0xa0]},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x55e)]=function(_0x3a4c20,_0x32e220,_0x5aeccc){const _0x35bb04=_0x4e2d80;this[_0x35bb04(0x39a)]=_0x3a4c20,this[_0x35bb04(0x55d)]=_0x32e220,this[_0x35bb04(0x6d6)]=_0x5aeccc,Sprite_Clickable[_0x35bb04(0x6a9)][_0x35bb04(0x55e)]['call'](this),this[_0x35bb04(0x2d0)](),this['createBitmap'](),this[_0x35bb04(0x41f)](!![]);},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x2d0)]=function(){const _0xedcc6=_0x4e2d80;this[_0xedcc6(0x2d9)]['x']=0.5,this['anchor']['y']=0.5,this[_0xedcc6(0x516)]['x']=Sprite_BattleGridNode['SETTINGS'][_0xedcc6(0x238)]??0.6,this[_0xedcc6(0x516)]['y']=Sprite_BattleGridNode[_0xedcc6(0x36f)]['scaleY']??0.2,this['opacity']=0x0;const _0x166f19=VisuMZ[_0xedcc6(0x398)][_0xedcc6(0x254)](this[_0xedcc6(0x5d3)](),this[_0xedcc6(0x352)](),this[_0xedcc6(0x62f)]());this['x']=_0x166f19['x'],this['y']=_0x166f19['y'];},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x472)]=function(){const _0x4a23df=_0x4e2d80;this[_0x4a23df(0x18e)]=ImageManager[_0x4a23df(0x50c)](this[_0x4a23df(0x5d3)]());},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x5d3)]=function(){const _0x340e36=_0x4e2d80;return this[_0x340e36(0x39a)];},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x352)]=function(){return this['_rank'];},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x62f)]=function(){const _0x1e9835=_0x4e2d80;return this[_0x1e9835(0x6d6)];},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x197)]=function(){const _0x5349a9=_0x4e2d80,_0x1a9ec2=this[_0x5349a9(0x5d3)]()?_0x5349a9(0x70c):_0x5349a9(0x456);return Sprite_BattleGridNode['SETTINGS'][_0x1a9ec2];},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x72f)]=function(){const _0x19e390=_0x4e2d80;return this[_0x19e390(0x5d3)]()?$gameParty:$gameTroop;},Sprite_BattleGridNode['prototype'][_0x4e2d80(0x645)]=function(){const _0x57be1a=_0x4e2d80;return this[_0x57be1a(0x72f)]()[_0x57be1a(0x170)](this[_0x57be1a(0x352)](),this['flank']());},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x27b)]=function(){const _0x407d80=_0x4e2d80;Sprite_Clickable[_0x407d80(0x6a9)]['update'][_0x407d80(0x25d)](this),this[_0x407d80(0x3b8)](),this[_0x407d80(0x266)](),this[_0x407d80(0x41f)]();},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x3b8)]=function(){const _0x525aa4=_0x4e2d80;this[_0x525aa4(0x675)]!==this[_0x525aa4(0x4a2)]()&&(this['_lastSelectedAoeTarget']=this[_0x525aa4(0x4a2)](),this['_isInAoeRange']=undefined),this[_0x525aa4(0x1a0)]!==this[_0x525aa4(0x34c)]()&&(this['_lastSelectedWindowNode']=this[_0x525aa4(0x34c)](),this[_0x525aa4(0x25b)]=undefined),this[_0x525aa4(0x216)]!==this[_0x525aa4(0x318)]()&&(this['_lastSelectedAoeSkill']=this[_0x525aa4(0x318)](),this[_0x525aa4(0x25b)]=undefined);},Sprite_BattleGridNode[_0x4e2d80(0x6a9)]['getSelectedAoeTarget']=function(){const _0x58d373=_0x4e2d80,_0x3fe350=SceneManager['_scene'];if(!_0x3fe350)return null;if(_0x3fe350[_0x58d373(0x1e4)]&&_0x3fe350['_enemyWindow'][_0x58d373(0x45b)])return _0x3fe350[_0x58d373(0x1e4)][_0x58d373(0x456)]();else{if(_0x3fe350[_0x58d373(0x47e)]&&_0x3fe350['_actorWindow'][_0x58d373(0x45b)])return _0x3fe350[_0x58d373(0x47e)][_0x58d373(0x70c)](_0x3fe350['_actorWindow'][_0x58d373(0x6bf)]());}return null;},Sprite_BattleGridNode[_0x4e2d80(0x6a9)]['getSelectedWindowNode']=function(){const _0x545450=_0x4e2d80,_0xf234ee=SceneManager[_0x545450(0x671)];if(!_0xf234ee)return null;if(_0xf234ee[_0x545450(0x322)]&&_0xf234ee['_gridSelectNodeWindow'][_0x545450(0x45b)])return _0xf234ee[_0x545450(0x322)]['currentExt']();return null;},Sprite_BattleGridNode['prototype'][_0x4e2d80(0x318)]=function(){const _0x27f9d7=_0x4e2d80,_0x2088c4=BattleManager['inputtingAction']();if(!_0x2088c4)return null;if(!_0x2088c4['item']())return null;if(!_0x2088c4[_0x27f9d7(0x705)]())return null;return _0x2088c4[_0x27f9d7(0x633)]();},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x141)]=function(){const _0x1a8314=_0x4e2d80;if(!this['_lastSelectedAoeTarget']&&!this['_lastSelectedWindowNode'])return![];const _0x1e7796=BattleManager['inputtingAction']();if(!_0x1e7796)return![];if(!_0x1e7796[_0x1a8314(0x633)]())return![];if(!_0x1e7796[_0x1a8314(0x705)]())return![];if(this[_0x1a8314(0x25b)]!==undefined)return this['_isInAoeRange'];this[_0x1a8314(0x25b)]=![];if(this[_0x1a8314(0x1a0)]){const _0x1c1f46=this[_0x1a8314(0x1a0)];if(_0x1c1f46[_0x1a8314(0x5d3)]===this[_0x1a8314(0x5d3)]()){const _0x6dc5a6=DataManager[_0x1a8314(0x156)](_0x1e7796[_0x1a8314(0x633)]()),_0x310abe=this[_0x1a8314(0x352)](),_0x3daa7f=this[_0x1a8314(0x62f)](),_0x2d356a=_0x1c1f46[_0x1a8314(0x352)],_0x40f18d=_0x1c1f46[_0x1a8314(0x62f)];if(VisuMZ[_0x1a8314(0x398)][_0x1a8314(0x4e0)](_0x6dc5a6,_0x2d356a,_0x40f18d,_0x310abe,_0x3daa7f))return this[_0x1a8314(0x25b)]=!![],!![];}}if(this[_0x1a8314(0x675)]){const _0x12f156=this[_0x1a8314(0x675)];if(_0x12f156[_0x1a8314(0x6a1)]()===this[_0x1a8314(0x72f)]()){const _0x2bbd25=DataManager[_0x1a8314(0x156)](_0x1e7796[_0x1a8314(0x633)]()),_0x26a310=this[_0x1a8314(0x352)](),_0x514f14=this[_0x1a8314(0x62f)](),_0x590564=_0x12f156['centerGridRank'](),_0x5821ae=_0x12f156['centerGridFlank']();if(VisuMZ['BattleGridSystem'][_0x1a8314(0x4e0)](_0x2bbd25,_0x590564,_0x5821ae,_0x26a310,_0x514f14))return this[_0x1a8314(0x25b)]=!![],this[_0x1a8314(0x25b)];}}return this[_0x1a8314(0x25b)];},Sprite_BattleGridNode['prototype'][_0x4e2d80(0x41f)]=function(_0x4754e0){const _0x1b9150=_0x4e2d80,_0x1c8ab8=_0x4754e0?0xff:Sprite_BattleGridNode[_0x1b9150(0x36f)][_0x1b9150(0x316)],_0x10c967=this['visibilityState']();this[_0x1b9150(0x1e7)]+=_0x1c8ab8*(_0x10c967?0x1:-0x1),this[_0x1b9150(0x1e7)]=this[_0x1b9150(0x1e7)][_0x1b9150(0x62d)](0x0,this[_0x1b9150(0x201)]());},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x201)]=function(){const _0x55a631=_0x4e2d80,_0x2586a2=Sprite_BattleGridNode[_0x55a631(0x36f)][_0x55a631(0x31f)];if(this[_0x55a631(0x3e5)]())return _0x2586a2;if(this[_0x55a631(0x1ad)]())return _0x2586a2;return 0xff;},Sprite_BattleGridNode['prototype'][_0x4e2d80(0x2e8)]=function(){const _0x4d5201=_0x4e2d80;if($scene[_0x4d5201(0x367)]){if($scene[_0x4d5201(0x367)]['x']>=Graphics[_0x4d5201(0x610)]*0x2)return![];if($scene[_0x4d5201(0x367)]['y']>=Graphics[_0x4d5201(0x298)]*0x2)return![];}const _0x5a88f4=Sprite_BattleGridNode[_0x4d5201(0x36f)][_0x4d5201(0x165)];if(_0x5a88f4[_0x4d5201(0x2fc)])return!![];if(_0x5a88f4['anyInput']&&BattleManager['isInputting']())return!![];if(_0x5a88f4['targeting']&&this[_0x4d5201(0x535)]())return!![];const _0x19cdd4=this[_0x4d5201(0x645)]();if(_0x19cdd4){if(_0x5a88f4[_0x4d5201(0x1b3)]&&_0x19cdd4===BattleManager['actor']())return!![];if(_0x5a88f4[_0x4d5201(0x250)]&&_0x19cdd4[_0x4d5201(0x5bc)]())return!![];if(_0x5a88f4[_0x4d5201(0x45b)]&&_0x19cdd4===BattleManager[_0x4d5201(0x37f)])return!![];if(_0x5a88f4['targeted']&&BattleManager['_targets'][_0x4d5201(0x314)](_0x19cdd4))return!![];}if(this[_0x4d5201(0x43e)]())return!![];if(this[_0x4d5201(0x5a0)]())return!![];if(this[_0x4d5201(0x141)]())return!![];return![];},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x43e)]=function(){const _0x1c27db=_0x4e2d80;if(!this['_forActor'])return![];const _0x17fdfa=SceneManager[_0x1c27db(0x671)]['_gridMoveWindow'];return _0x17fdfa&&_0x17fdfa[_0x1c27db(0x45b)];},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x5a0)]=function(){const _0x492b00=_0x4e2d80,_0x2dbc3e=SceneManager[_0x492b00(0x671)];if(_0x2dbc3e){if(_0x2dbc3e[_0x492b00(0x322)]&&_0x2dbc3e[_0x492b00(0x322)][_0x492b00(0x45b)])return!![];if(_0x2dbc3e['_gridSelectRankWindow']&&_0x2dbc3e['_gridSelectRankWindow']['active'])return!![];if(_0x2dbc3e[_0x492b00(0x40b)]&&_0x2dbc3e['_gridSelectFlankWindow'][_0x492b00(0x45b)])return!![];}return![];},Sprite_BattleGridNode['prototype'][_0x4e2d80(0x1ad)]=function(){const _0x30f6d9=_0x4e2d80;if(!this['isNodeSelectWindowActive']())return![];const _0x2916cb=BattleManager['inputtingAction']();if(!_0x2916cb)return![];if(_0x2916cb[_0x30f6d9(0x15d)]())return![];if(_0x2916cb[_0x30f6d9(0x52b)]()&&this[_0x30f6d9(0x5d3)]())return!![];if(_0x2916cb[_0x30f6d9(0x1f9)]()&&!this[_0x30f6d9(0x5d3)]())return!![];return![];},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x535)]=function(){const _0x5a147d=_0x4e2d80,_0xc083eb=SceneManager[_0x5a147d(0x671)];if(!_0xc083eb)return![];const _0xf503bd=BattleManager[_0x5a147d(0x566)]();if(!_0xf503bd)return![];if(_0xc083eb[_0x5a147d(0x1e4)]&&_0xc083eb[_0x5a147d(0x1e4)]['active']){if(_0xf503bd[_0x5a147d(0x15d)]())return!![];return!this[_0x5a147d(0x5d3)]();}else{if(_0xc083eb[_0x5a147d(0x47e)]&&_0xc083eb[_0x5a147d(0x47e)][_0x5a147d(0x45b)]){if(_0xf503bd[_0x5a147d(0x15d)]())return!![];return this[_0x5a147d(0x5d3)]();}}return![];},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x266)]=function(){const _0xd47763=_0x4e2d80;if(this[_0xd47763(0x410)]()){const _0x1d895e=this['forActor']()?_0xd47763(0x70c):_0xd47763(0x456),_0x47f6e4=Sprite_BattleGridNode[_0xd47763(0x36f)][_0x1d895e][_0xd47763(0x470)];this['setBlendColor'](_0x47f6e4);}else this[_0xd47763(0x288)]()?this['setBlendColor'](Sprite_BattleGridNode[_0xd47763(0x36f)][_0xd47763(0x237)]):this[_0xd47763(0x400)]([0x0,0x0,0x0,0x0]);},Sprite_BattleGridNode[_0x4e2d80(0x6a9)]['isNodeSelected']=function(){const _0x1dfdec=_0x4e2d80;if(this[_0x1dfdec(0x43e)]()){const _0x52d8af=SceneManager[_0x1dfdec(0x671)][_0x1dfdec(0x2bb)],_0x2a055f=_0x52d8af[_0x1dfdec(0x733)]();return this[_0x1dfdec(0x352)]()===_0x2a055f[_0x1dfdec(0x352)]&&this[_0x1dfdec(0x62f)]()===_0x2a055f[_0x1dfdec(0x62f)];}else{if(this[_0x1dfdec(0x218)]()){const _0x2259c2=Sprite_BattleGridNode[_0x1dfdec(0x36f)];return _0x2259c2[_0x1dfdec(0x165)][_0x1dfdec(0x1b3)]&&this[_0x1dfdec(0x645)]()===BattleManager[_0x1dfdec(0x70c)]()&&!this['battler']()[_0x1dfdec(0x5bc)]();}}return![];},Sprite_BattleGridNode[_0x4e2d80(0x6a9)]['isNodeDistinctHighlighted']=function(){const _0x2be4eb=_0x4e2d80;if(this['isDistinctAndInAoeRange']())return!![];if(this[_0x2be4eb(0x426)]())return!![];if(this['needsNodeSelectDistinction']())return!![];return![];},Sprite_BattleGridNode[_0x4e2d80(0x6a9)]['isNodeDisabled']=function(){const _0x12654c=_0x4e2d80;if(this[_0x12654c(0x141)]())return![];if(this[_0x12654c(0x645)]()&&this[_0x12654c(0x645)]()['isSelected']())return![];if(this['isMoveWindowActive']()){const _0x46d552=SceneManager['_scene'][_0x12654c(0x2bb)];let _0x570ece=(this[_0x12654c(0x62f)]()-0x1)*BattleManager['maxRanks']();return _0x570ece+=this['rank']()-0x1,!_0x46d552[_0x12654c(0x353)](_0x570ece);}if(!this[_0x12654c(0x218)]()){const _0x351ee7=Sprite_BattleGridNode[_0x12654c(0x36f)],_0xd9efdf=SceneManager['_scene'],_0xeae3b8=_0x351ee7[_0x12654c(0x165)][_0x12654c(0x1b3)]&&this[_0x12654c(0x645)]()===BattleManager[_0x12654c(0x70c)]();if(_0xeae3b8){if(_0xd9efdf['_enemyWindow']&&_0xd9efdf['_enemyWindow']['active'])return!![];if(_0xd9efdf[_0x12654c(0x47e)]&&_0xd9efdf['_actorWindow'][_0x12654c(0x45b)])return!![];}}return![];},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x218)]=function(){const _0x503deb=_0x4e2d80,_0x5ec1ef=Sprite_BattleGridNode[_0x503deb(0x36f)]['visible'];return _0x5ec1ef[_0x503deb(0x2fc)]||_0x5ec1ef[_0x503deb(0x46a)]||_0x5ec1ef[_0x503deb(0x19e)];},Sprite_BattleGridNode['prototype'][_0x4e2d80(0x432)]=function(){if(!this['needsColorDistinction']())return![];return this['isInAoeRange']();},Sprite_BattleGridNode['prototype'][_0x4e2d80(0x426)]=function(){const _0x5f395d=_0x4e2d80;if(!this[_0x5f395d(0x218)]())return![];return this[_0x5f395d(0x645)]()&&this['battler']()[_0x5f395d(0x5bc)]();},Sprite_BattleGridNode[_0x4e2d80(0x6a9)]['needsNodeSelectDistinction']=function(){const _0x2951fe=_0x4e2d80;if(this[_0x2951fe(0x5a0)]()){if(this['isInAoeRange']())return!![];const _0x119aae=BattleManager[_0x2951fe(0x566)]();if(_0x119aae[_0x2951fe(0x673)]()){const _0x34b115=SceneManager[_0x2951fe(0x671)][_0x2951fe(0x322)][_0x2951fe(0x733)]();if(_0x34b115['forActor']===this[_0x2951fe(0x5d3)]()&&_0x34b115['rank']===this[_0x2951fe(0x352)]()&&_0x34b115[_0x2951fe(0x62f)]===this[_0x2951fe(0x62f)]())return!![];}if(_0x119aae[_0x2951fe(0x16c)]()){const _0x55d8c0=SceneManager[_0x2951fe(0x671)][_0x2951fe(0x22d)]['currentExt']();if(_0x55d8c0[_0x2951fe(0x5d3)]===this[_0x2951fe(0x5d3)]()&&_0x55d8c0[_0x2951fe(0x352)]===this['rank']())return!![];}if(_0x119aae[_0x2951fe(0x2ee)]()){const _0x377233=SceneManager['_scene'][_0x2951fe(0x40b)][_0x2951fe(0x733)]();if(_0x377233[_0x2951fe(0x5d3)]===this[_0x2951fe(0x5d3)]()&&_0x377233[_0x2951fe(0x62f)]===this[_0x2951fe(0x62f)]())return!![];}}return![];},Sprite_BattleGridNode['prototype'][_0x4e2d80(0x29b)]=function(){const _0x593572=_0x4e2d80;Sprite_Clickable['prototype'][_0x593572(0x29b)][_0x593572(0x25d)](this);if(this[_0x593572(0x43e)]())this[_0x593572(0x2d3)]();if(this[_0x593572(0x5a0)]()){const _0x1ea497=SceneManager[_0x593572(0x671)];if(_0x1ea497[_0x593572(0x322)][_0x593572(0x45b)])return this[_0x593572(0x4d3)]();if(_0x1ea497[_0x593572(0x22d)][_0x593572(0x45b)])return this[_0x593572(0x6c6)]();if(_0x1ea497[_0x593572(0x40b)][_0x593572(0x45b)])return this[_0x593572(0x15c)]();}},Sprite_BattleGridNode[_0x4e2d80(0x6a9)]['onMouseEnterMoveWindow']=function(){const _0x483d4d=_0x4e2d80;let _0x1d37a9=(this['flank']()-0x1)*BattleManager[_0x483d4d(0x646)]();_0x1d37a9+=this['rank']()-0x1;const _0x23c139=SceneManager[_0x483d4d(0x671)]['_gridMoveWindow'],_0x39c97f=_0x23c139[_0x483d4d(0x6bf)]();_0x23c139[_0x483d4d(0x73b)](_0x1d37a9),_0x39c97f!==_0x23c139['index']()&&_0x23c139['playCursorSound']();},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x4d3)]=function(){const _0x3c2d29=_0x4e2d80,_0x5e5f22=SceneManager['_scene'][_0x3c2d29(0x322)],_0x40c115=_0x5e5f22[_0x3c2d29(0x3b1)],_0x2cd5b2=_0x40c115[_0x3c2d29(0x715)](_0xc4301b=>_0xc4301b['ext'][_0x3c2d29(0x5d3)]===this[_0x3c2d29(0x5d3)]()&&_0xc4301b[_0x3c2d29(0x545)][_0x3c2d29(0x352)]===this[_0x3c2d29(0x352)]()&&_0xc4301b[_0x3c2d29(0x545)]['flank']===this[_0x3c2d29(0x62f)]()),_0x3c6feb=_0x5e5f22[_0x3c2d29(0x6bf)]();_0x5e5f22[_0x3c2d29(0x73b)](_0x2cd5b2),_0x3c6feb!==_0x5e5f22['index']()&&_0x5e5f22[_0x3c2d29(0x37d)]();},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x6c6)]=function(){const _0x4ca2bc=_0x4e2d80,_0x23612f=SceneManager[_0x4ca2bc(0x671)][_0x4ca2bc(0x22d)],_0x588851=_0x23612f[_0x4ca2bc(0x3b1)],_0x338c80=_0x588851[_0x4ca2bc(0x715)](_0x45baf8=>_0x45baf8['ext'][_0x4ca2bc(0x5d3)]===this[_0x4ca2bc(0x5d3)]()&&_0x45baf8[_0x4ca2bc(0x545)]['rank']===this[_0x4ca2bc(0x352)]()),_0x3cb955=_0x23612f[_0x4ca2bc(0x6bf)]();_0x23612f[_0x4ca2bc(0x73b)](_0x338c80),_0x3cb955!==_0x23612f[_0x4ca2bc(0x6bf)]()&&_0x23612f[_0x4ca2bc(0x37d)]();},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x15c)]=function(){const _0x5e16a6=_0x4e2d80,_0x46510f=SceneManager[_0x5e16a6(0x671)]['_gridSelectFlankWindow'],_0x68c58b=_0x46510f[_0x5e16a6(0x3b1)],_0x5e0244=_0x68c58b[_0x5e16a6(0x715)](_0x2f3c92=>_0x2f3c92[_0x5e16a6(0x545)][_0x5e16a6(0x5d3)]===this['forActor']()&&_0x2f3c92[_0x5e16a6(0x545)][_0x5e16a6(0x62f)]===this[_0x5e16a6(0x62f)]()),_0x150647=_0x46510f[_0x5e16a6(0x6bf)]();_0x46510f['select'](_0x5e0244),_0x150647!==_0x46510f[_0x5e16a6(0x6bf)]()&&_0x46510f[_0x5e16a6(0x37d)]();},Sprite_BattleGridNode[_0x4e2d80(0x6a9)]['onClick']=function(){const _0x3a3ae0=_0x4e2d80;Sprite_Clickable[_0x3a3ae0(0x6a9)][_0x3a3ae0(0x5ee)]['call'](this);if(this['isMoveWindowActive']())this[_0x3a3ae0(0x44e)]();if(this[_0x3a3ae0(0x5a0)]()){const _0x3671ff=SceneManager[_0x3a3ae0(0x671)];if(_0x3671ff[_0x3a3ae0(0x322)]['active'])return this[_0x3a3ae0(0x502)]();if(_0x3671ff['_gridSelectRankWindow']['active'])return this[_0x3a3ae0(0x36b)]();if(_0x3671ff[_0x3a3ae0(0x40b)][_0x3a3ae0(0x45b)])return this['onClickSelectFlankWindow']();}},Sprite_BattleGridNode[_0x4e2d80(0x6a9)]['onClickMoveWindow']=function(){const _0x13c537=_0x4e2d80;let _0x35b216=(this[_0x13c537(0x62f)]()-0x1)*BattleManager[_0x13c537(0x646)]();_0x35b216+=this[_0x13c537(0x352)]()-0x1;const _0x114a9e=SceneManager[_0x13c537(0x671)]['_gridMoveWindow'];_0x35b216!==_0x114a9e[_0x13c537(0x6bf)]()?(_0x114a9e[_0x13c537(0x73b)](_0x35b216),_0x114a9e['playCursorSound']()):Input[_0x13c537(0x1da)]('ok');},Sprite_BattleGridNode[_0x4e2d80(0x6a9)]['onClickSelectNodeWindow']=function(){const _0x24ffa7=_0x4e2d80,_0x45e285=SceneManager[_0x24ffa7(0x671)][_0x24ffa7(0x322)],_0x190077=_0x45e285[_0x24ffa7(0x3b1)],_0x3f1c55=_0x190077[_0x24ffa7(0x715)](_0x5f3cb1=>_0x5f3cb1['ext'][_0x24ffa7(0x5d3)]===this[_0x24ffa7(0x5d3)]()&&_0x5f3cb1[_0x24ffa7(0x545)]['rank']===this[_0x24ffa7(0x352)]()&&_0x5f3cb1[_0x24ffa7(0x545)][_0x24ffa7(0x62f)]===this['flank']());_0x45e285[_0x24ffa7(0x73b)](_0x3f1c55),_0x3f1c55!==_0x45e285['index']()?(_0x45e285[_0x24ffa7(0x73b)](_0x3f1c55),_0x45e285[_0x24ffa7(0x37d)]()):Input[_0x24ffa7(0x1da)]('ok');},Sprite_BattleGridNode[_0x4e2d80(0x6a9)]['onClickSelectRankWindow']=function(){const _0x51b9ba=_0x4e2d80,_0x485208=SceneManager[_0x51b9ba(0x671)][_0x51b9ba(0x22d)],_0x47c0b6=_0x485208[_0x51b9ba(0x3b1)],_0x376e62=_0x47c0b6[_0x51b9ba(0x715)](_0x31ceff=>_0x31ceff['ext'][_0x51b9ba(0x5d3)]===this[_0x51b9ba(0x5d3)]()&&_0x31ceff[_0x51b9ba(0x545)][_0x51b9ba(0x352)]===this[_0x51b9ba(0x352)]());_0x485208[_0x51b9ba(0x73b)](_0x376e62),_0x376e62!==_0x485208['index']()?(_0x485208[_0x51b9ba(0x73b)](_0x376e62),_0x485208[_0x51b9ba(0x37d)]()):Input[_0x51b9ba(0x1da)]('ok');},Sprite_BattleGridNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x45d)]=function(){const _0x36b603=_0x4e2d80,_0x5323eb=SceneManager[_0x36b603(0x671)]['_gridSelectFlankWindow'],_0x2b55d1=_0x5323eb['_list'],_0x214643=_0x2b55d1[_0x36b603(0x715)](_0x139ccb=>_0x139ccb[_0x36b603(0x545)][_0x36b603(0x5d3)]===this[_0x36b603(0x5d3)]()&&_0x139ccb['ext'][_0x36b603(0x62f)]===this['flank']());_0x5323eb[_0x36b603(0x73b)](_0x214643),_0x214643!==_0x5323eb['index']()?(_0x5323eb['select'](_0x214643),_0x5323eb[_0x36b603(0x37d)]()):Input[_0x36b603(0x1da)]('ok');};function Sprite_BattleGridPassives(){const _0x2e02a1=_0x4e2d80;this[_0x2e02a1(0x55e)](...arguments);}Sprite_BattleGridPassives[_0x4e2d80(0x6a9)]=Object['create'](Sprite_Clickable[_0x4e2d80(0x6a9)]),Sprite_BattleGridPassives[_0x4e2d80(0x6a9)][_0x4e2d80(0x387)]=Sprite_BattleGridPassives,Sprite_BattleGridPassives[_0x4e2d80(0x36f)]={'showNodeIcons':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x58e)]['showNodeIcons']??!![],'aniFrameCount':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x58e)][_0x4e2d80(0x28d)]??0x28,'blendMode':VisuMZ[_0x4e2d80(0x398)]['Settings']['PassiveState'][_0x4e2d80(0x672)]??0x1,'opacitySpeed':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x58e)]['opacitySpeed']??0x10,'opacityFlucRate':VisuMZ[_0x4e2d80(0x398)]['Settings']['PassiveState']['opacityFlucRate']??0.05,'opacityFlucRange':VisuMZ['BattleGridSystem']['Settings'][_0x4e2d80(0x58e)][_0x4e2d80(0x573)]??0x80,'opacityFlucMax':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)]['PassiveState'][_0x4e2d80(0x4d8)]??0xc0,'scaleX':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x58e)][_0x4e2d80(0x238)]??0x1,'scaleY':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x58e)][_0x4e2d80(0x1ea)]??0.5,'offsetX':VisuMZ['BattleGridSystem']['Settings'][_0x4e2d80(0x58e)][_0x4e2d80(0x3a9)]??0x0,'offsetY':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['PassiveState'][_0x4e2d80(0x601)]??0x0},Sprite_BattleGridPassives['prototype'][_0x4e2d80(0x55e)]=function(_0x3afd85,_0x223a27,_0x50389f){const _0x10ca77=_0x4e2d80;this[_0x10ca77(0x39a)]=_0x3afd85,this[_0x10ca77(0x55d)]=_0x223a27,this[_0x10ca77(0x6d6)]=_0x50389f,Sprite_Clickable[_0x10ca77(0x6a9)][_0x10ca77(0x55e)][_0x10ca77(0x25d)](this),this['initMembers'](),this[_0x10ca77(0x430)](),this[_0x10ca77(0x4a5)](!![]);},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)]['initMembers']=function(){const _0xd67ee1=_0x4e2d80,_0x216c39=Sprite_BattleGridPassives['SETTINGS'];this[_0xd67ee1(0x2d9)]['x']=0.5,this[_0xd67ee1(0x2d9)]['y']=0.5,this['_stateIndex']=0x0,this[_0xd67ee1(0x2b7)]=0x0,this['blendMode']=_0x216c39[_0xd67ee1(0x672)],this[_0xd67ee1(0x516)]['x']=_0x216c39['scaleX'],this[_0xd67ee1(0x516)]['y']=_0x216c39[_0xd67ee1(0x1ea)];const _0x2a0dd0=VisuMZ[_0xd67ee1(0x398)][_0xd67ee1(0x254)](this[_0xd67ee1(0x5d3)](),this['rank'](),this['flank']());this['x']=_0x2a0dd0['x']+_0x216c39[_0xd67ee1(0x51a)],this['y']=_0x2a0dd0['y']+_0x216c39[_0xd67ee1(0x4af)];},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)]['forActor']=function(){return this['_forActor'];},Sprite_BattleGridPassives['prototype'][_0x4e2d80(0x352)]=function(){const _0x16053c=_0x4e2d80;return this[_0x16053c(0x55d)];},Sprite_BattleGridPassives['prototype'][_0x4e2d80(0x62f)]=function(){const _0x1d5f2f=_0x4e2d80;return this[_0x1d5f2f(0x6d6)];},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)]['loadBitmap']=function(){const _0xa42936=_0x4e2d80;this[_0xa42936(0x18e)]=new Bitmap(ImageManager[_0xa42936(0x71d)],ImageManager[_0xa42936(0x16a)]),this['_srcBitmap']=ImageManager['getBattleGridIconSet']();},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)][_0x4e2d80(0x27b)]=function(){const _0xee28df=_0x4e2d80;Sprite_Clickable['prototype']['update'][_0xee28df(0x25d)](this),this[_0xee28df(0x4a5)](),this[_0xee28df(0x41f)]();},Sprite_BattleGridPassives['prototype'][_0x4e2d80(0x4a5)]=function(_0x155ced){const _0x914687=_0x4e2d80;if(_0x155ced)this[_0x914687(0x1e7)]=Sprite_BattleGridPassives['SETTINGS'][_0x914687(0x4d8)];else{const _0x4cb5d4=Sprite_BattleGridPassives['SETTINGS'][_0x914687(0x28d)];if(Graphics[_0x914687(0x13a)]%_0x4cb5d4!==0x0)return;}this['updateStateIndex'](),this[_0x914687(0x35d)]();},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)][_0x4e2d80(0x717)]=function(){const _0x358c6d=_0x4e2d80;return $gameTroop[_0x358c6d(0x501)](this[_0x358c6d(0x5d3)](),this[_0x358c6d(0x352)](),this[_0x358c6d(0x62f)]());},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)][_0x4e2d80(0x5bb)]=function(){const _0x5999f4=_0x4e2d80,_0x1fcdf0=this[_0x5999f4(0x717)]();if(_0x1fcdf0){const _0x367932=_0x1fcdf0[_0x5999f4(0x335)](_0x44c753=>$dataStates[_0x44c753])['remove'](null)['remove'](undefined)['map'](_0xb31f43=>_0xb31f43[_0x5999f4(0x366)])[_0x5999f4(0x28a)](_0x1673b4=>_0x1673b4>0x0);if(_0x367932[_0x5999f4(0x2f8)]>0x0){this['_stateIndex']++;if(this['_stateIndex']>=_0x367932[_0x5999f4(0x2f8)])this['_stateIndex']=0x0;this['_iconIndex']=_0x367932[this[_0x5999f4(0x46f)]];return;}}this[_0x5999f4(0x46f)]=0x0,this[_0x5999f4(0x2b7)]=0x0;},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)][_0x4e2d80(0x35d)]=function(){const _0x4193fb=_0x4e2d80;if(this[_0x4193fb(0x310)]===this[_0x4193fb(0x2b7)])return;this['_lastIconIndex']=this[_0x4193fb(0x2b7)];const _0x505878=ImageManager[_0x4193fb(0x71d)],_0x4f05dc=ImageManager[_0x4193fb(0x16a)],_0x1ddabf=this[_0x4193fb(0x2b7)]%0x10*_0x505878,_0x3e622c=Math[_0x4193fb(0x4f9)](this['_iconIndex']/0x10)*_0x4f05dc,_0x5ba327=this[_0x4193fb(0x415)],_0x8599db=this[_0x4193fb(0x18e)];_0x8599db['clear'](),_0x8599db[_0x4193fb(0x1e8)](_0x5ba327,_0x1ddabf,_0x3e622c,_0x505878,_0x4f05dc,0x0,0x0,_0x8599db[_0x4193fb(0x610)],_0x8599db[_0x4193fb(0x298)]);},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)][_0x4e2d80(0x41f)]=function(){const _0x45cb08=_0x4e2d80,_0x35ed23=this[_0x45cb08(0x2e8)]();_0x35ed23?this['updateOpacityFluc']():this[_0x45cb08(0x1e7)]-=Sprite_BattleGridNode['SETTINGS']['opacitySpeed'];},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)][_0x4e2d80(0x2e8)]=function(){const _0x53858f=_0x4e2d80,_0x36ed54=this[_0x53858f(0x5d3)]()?$gameParty:$gameTroop;if(_0x36ed54[_0x53858f(0x3e6)](this['rank'](),this[_0x53858f(0x62f)]()))return![];if($scene[_0x53858f(0x367)]){if($scene[_0x53858f(0x367)]['x']>=Graphics[_0x53858f(0x610)]*0x2)return![];if($scene[_0x53858f(0x367)]['y']>=Graphics[_0x53858f(0x298)]*0x2)return![];}return!![];},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)][_0x4e2d80(0x34b)]=function(){const _0x9e5c0=_0x4e2d80,_0x32113a=Sprite_BattleGridPassives[_0x9e5c0(0x36f)],_0x288b9a=Graphics[_0x9e5c0(0x13a)]*_0x32113a[_0x9e5c0(0x42b)],_0x26b15e=_0x32113a['opacityFlucRange']/0x2,_0x1cf2cd=_0x32113a[_0x9e5c0(0x4d8)]-_0x32113a[_0x9e5c0(0x573)]/0x2,_0x2f170f=_0x32113a[_0x9e5c0(0x316)],_0x434f94=Math[_0x9e5c0(0x13d)](_0x288b9a)*_0x26b15e+_0x1cf2cd;if(this[_0x9e5c0(0x1e7)]>_0x434f94)this[_0x9e5c0(0x1e7)]=Math[_0x9e5c0(0x23c)](this['opacity']-_0x2f170f,_0x434f94);else this[_0x9e5c0(0x1e7)]<_0x434f94&&(this[_0x9e5c0(0x1e7)]=Math[_0x9e5c0(0x485)](this['opacity']+_0x2f170f,_0x434f94));},Sprite_BattleGridPassives['prototype'][_0x4e2d80(0x29b)]=function(){const _0x5bb393=_0x4e2d80;Sprite_Clickable[_0x5bb393(0x6a9)][_0x5bb393(0x29b)]['call'](this);if(!Imported[_0x5bb393(0x466)])return;if(this[_0x5bb393(0x2e8)]())this[_0x5bb393(0x3c6)]();},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)][_0x4e2d80(0x638)]=function(){return this;},Sprite_BattleGridPassives['prototype'][_0x4e2d80(0x4b2)]=function(){const _0x4b5d02=_0x4e2d80,_0x200136=this[_0x4b5d02(0x717)]();return _0x200136?_0x200136['map'](_0x48b0d4=>$dataStates[_0x48b0d4])[_0x4b5d02(0x3c8)](null)[_0x4b5d02(0x3c8)](undefined):[];},Sprite_BattleGridPassives['prototype'][_0x4e2d80(0x2b2)]=function(_0x4249dd){return'';},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)][_0x4e2d80(0x14d)]=function(){const _0x4ea19e=_0x4e2d80;return this[_0x4ea19e(0x4b2)]();},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)][_0x4e2d80(0x59f)]=function(_0x57f912){return![];},Sprite_BattleGridPassives[_0x4e2d80(0x6a9)][_0x4e2d80(0x6e1)]=function(){return this['visibilityState']();},Sprite_BattleGridPassives['prototype'][_0x4e2d80(0x21b)]=function(){const _0x27a604=_0x4e2d80;return!this[_0x27a604(0x2e8)]();};function Sprite_BattleGridTrigger(){const _0x31ad69=_0x4e2d80;this[_0x31ad69(0x55e)](...arguments);}Sprite_BattleGridTrigger[_0x4e2d80(0x6a9)]=Object[_0x4e2d80(0x286)](Sprite_Clickable[_0x4e2d80(0x6a9)]),Sprite_BattleGridTrigger['prototype'][_0x4e2d80(0x387)]=Sprite_BattleGridTrigger,Sprite_BattleGridTrigger[_0x4e2d80(0x36f)]={'showNodeIcons':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x261)]['showNodeIcons']??!![],'blendMode':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x261)][_0x4e2d80(0x672)]??0x1,'opacitySpeed':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)]['Trigger'][_0x4e2d80(0x316)]??0x10,'opacityFlucRate':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x261)][_0x4e2d80(0x42b)]??0.05,'opacityFlucRange':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x261)][_0x4e2d80(0x573)]??0x80,'opacityFlucMax':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x261)][_0x4e2d80(0x4d8)]??0xc0,'scaleX':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x261)]['scaleX']??0x2,'scaleY':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x261)]['scaleY']??0.75,'offsetX':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x261)][_0x4e2d80(0x3a9)]??0x0,'offsetY':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x261)][_0x4e2d80(0x601)]??0x0},Sprite_BattleGridTrigger[_0x4e2d80(0x6a9)]['initialize']=function(_0x179a0f,_0x1be1c3,_0x5b56f4){const _0x5866fc=_0x4e2d80;this[_0x5866fc(0x39a)]=_0x179a0f,this[_0x5866fc(0x55d)]=_0x1be1c3,this[_0x5866fc(0x6d6)]=_0x5b56f4,Sprite_Clickable[_0x5866fc(0x6a9)][_0x5866fc(0x55e)][_0x5866fc(0x25d)](this),this[_0x5866fc(0x2d0)](),this[_0x5866fc(0x430)]();},Sprite_BattleGridTrigger[_0x4e2d80(0x6a9)][_0x4e2d80(0x2d0)]=function(){const _0x1020ea=_0x4e2d80,_0x1ad19e=Sprite_BattleGridTrigger[_0x1020ea(0x36f)];this[_0x1020ea(0x2d9)]['x']=0.5,this[_0x1020ea(0x2d9)]['y']=0.5,this[_0x1020ea(0x2b7)]=0x0,this[_0x1020ea(0x672)]=_0x1ad19e[_0x1020ea(0x672)],this[_0x1020ea(0x516)]['x']=_0x1ad19e[_0x1020ea(0x238)],this['scale']['y']=_0x1ad19e[_0x1020ea(0x1ea)];const _0x45d53c=VisuMZ[_0x1020ea(0x398)]['getGridPositionPoint'](this[_0x1020ea(0x5d3)](),this[_0x1020ea(0x352)](),this['flank']());this['x']=_0x45d53c['x']+_0x1ad19e['offsetX'],this['y']=_0x45d53c['y']+_0x1ad19e[_0x1020ea(0x4af)];},Sprite_BattleGridTrigger[_0x4e2d80(0x6a9)][_0x4e2d80(0x5d3)]=function(){const _0x34130d=_0x4e2d80;return this[_0x34130d(0x39a)];},Sprite_BattleGridTrigger[_0x4e2d80(0x6a9)][_0x4e2d80(0x352)]=function(){const _0x510377=_0x4e2d80;return this[_0x510377(0x55d)];},Sprite_BattleGridTrigger['prototype']['flank']=function(){return this['_flank'];},Sprite_BattleGridTrigger[_0x4e2d80(0x6a9)][_0x4e2d80(0x430)]=function(){const _0x5efa2e=_0x4e2d80;this[_0x5efa2e(0x18e)]=new Bitmap(ImageManager['iconWidth'],ImageManager['iconHeight']),this[_0x5efa2e(0x415)]=ImageManager[_0x5efa2e(0x5d4)]();},Sprite_BattleGridTrigger['prototype'][_0x4e2d80(0x27b)]=function(){const _0x2d30e7=_0x4e2d80;Sprite_Clickable[_0x2d30e7(0x6a9)][_0x2d30e7(0x27b)][_0x2d30e7(0x25d)](this),this[_0x2d30e7(0x5c2)](),this[_0x2d30e7(0x35d)](),this[_0x2d30e7(0x41f)]();},Sprite_BattleGridTrigger[_0x4e2d80(0x6a9)][_0x4e2d80(0x5c2)]=function(){const _0x40514a=_0x4e2d80,_0x4eef07=$gameTroop[_0x40514a(0x455)](this[_0x40514a(0x5d3)](),this[_0x40514a(0x352)](),this[_0x40514a(0x62f)]());_0x4eef07?this['_iconIndex']=DataManager[_0x40514a(0x5d1)](_0x4eef07['item']()):this[_0x40514a(0x2b7)]=0x0;},Sprite_BattleGridTrigger[_0x4e2d80(0x6a9)]['updateIconFrame']=function(){const _0x57dfad=_0x4e2d80;if(this[_0x57dfad(0x310)]===this['_iconIndex'])return;this[_0x57dfad(0x310)]=this['_iconIndex'];const _0x4e828f=ImageManager[_0x57dfad(0x71d)],_0x468913=ImageManager[_0x57dfad(0x16a)],_0x5f25f5=this[_0x57dfad(0x2b7)]%0x10*_0x4e828f,_0x424e8d=Math[_0x57dfad(0x4f9)](this[_0x57dfad(0x2b7)]/0x10)*_0x468913,_0x3056b8=this[_0x57dfad(0x415)],_0x48b03f=this[_0x57dfad(0x18e)];_0x48b03f['clear'](),_0x48b03f['blt'](_0x3056b8,_0x5f25f5,_0x424e8d,_0x4e828f,_0x468913,0x0,0x0,_0x48b03f[_0x57dfad(0x610)],_0x48b03f[_0x57dfad(0x298)]);},Sprite_BattleGridTrigger['prototype']['updateOpacity']=function(){const _0x2ea531=_0x4e2d80,_0x4eab75=this[_0x2ea531(0x2e8)]();_0x4eab75?this[_0x2ea531(0x34b)]():this[_0x2ea531(0x1e7)]-=Sprite_BattleGridNode[_0x2ea531(0x36f)][_0x2ea531(0x316)];},Sprite_BattleGridTrigger[_0x4e2d80(0x6a9)][_0x4e2d80(0x2e8)]=function(){const _0x372252=_0x4e2d80;if(!this['_iconIndex'])return![];if($scene['_windowLayer']){if($scene[_0x372252(0x367)]['x']>=Graphics['width']*0x2)return![];if($scene['_windowLayer']['y']>=Graphics[_0x372252(0x298)]*0x2)return![];}return!![];},Sprite_BattleGridTrigger[_0x4e2d80(0x6a9)][_0x4e2d80(0x34b)]=function(){const _0x273e49=_0x4e2d80,_0x3e2eb8=Sprite_BattleGridTrigger['SETTINGS'],_0x20eb02=Graphics['frameCount']*_0x3e2eb8[_0x273e49(0x42b)],_0x4caa61=_0x3e2eb8[_0x273e49(0x573)]/0x2,_0x15425f=_0x3e2eb8[_0x273e49(0x4d8)]-_0x3e2eb8[_0x273e49(0x573)]/0x2,_0x39548d=_0x3e2eb8[_0x273e49(0x316)],_0x543432=Math[_0x273e49(0x13d)](_0x20eb02)*_0x4caa61+_0x15425f;if(this[_0x273e49(0x1e7)]>_0x543432)this[_0x273e49(0x1e7)]=Math['max'](this[_0x273e49(0x1e7)]-_0x39548d,_0x543432);else this[_0x273e49(0x1e7)]<_0x543432&&(this['opacity']=Math[_0x273e49(0x485)](this[_0x273e49(0x1e7)]+_0x39548d,_0x543432));};function _0xef79(){const _0x1c4170=['formation','exit','isAnyInputWindowActive','ARRAYNUM','getBattleGridMoveRangeData','drawItemDebug','getAllMembersAtGridNode','moveToPreferredStartGridLocation','dragonbonesData','CrashTargetDmgRate','weaponRangeGridData','onTacticsCommandMove','passTurnAfterMoveCommand','DOWN-RIGHTWARD','Game_BattlerBase_addPassiveStatesFromOtherPlugins','innerHeight','createBattleGridWindows','PositionOffsetY','TextColor','Window_BattleStatus_isBorderPortraitSpriteVisible','status','setMute','isSceneItemCrafting','tacticsCommandWindowRect','for\x20the\x20troop\x27s\x20member\x20slots.','calcAutoStartingGridRank','drawBattleGridItemData','onGridMoveCancel','_enemies','getBattleGridCache','meetsGridNodeUsableConditions','Window_BattleEnemy_initialize','width','drawItemEmpty','UP-FORWARD','loadTitle2','sortTargets','BgFilename1','Game_Troop_members','TriggerAnimation','BattleGridTacticsEmpty','DetermineMoveData','moveToStartingGridTacticsNode','120310ZBZTXi','anyAliveMembersAtGridNode','isGridNodeTrigger','requestPointAnimation','refreshBattlersOnGridNode','gridMoveTo','CRASH\x20MID','ActSeq_Grid_AnimationIDAtNode','ignoreGridNodes','numberWidth','CursorDisabledBlendMode','createBattleGridNodeBitmap','drawUsableGridNodes','BattleManager_getBattlerFromKey','addActor','addPassiveStatesFromBattleGridNodes','isBattleTest','isUsingWeaponRange','clamp','isGridLargeSize','flank','VisuMZ_3_BattleAI','setBattleGridNodePassiveStateIDs','meetsGridTargetProvokeTauntConditions','item','actorCmdDrawTargetNodes','SilentMove','clearBattleGridData','_hp','getStateTooltipBattler','equips','weightMod','changeDragonbonesSprite','outlineOuterThick','BattleGridTacticsMemberFmt','ShowCommand_Class','Window_BattleGridTactics_titleMemberColor','createInnerSprite','_itemWindow','maxCols','waitForMovement','updateHelp','battler','maxRanks','expRate','getAreaOfEffectOriginTarget','setActorHomeGrid','clearBattleGridNodePassiveStateData','createBackground','isPlaytest','isItem','commands','isPhysical','gridSize','isBattleGridMoveCommandPassingTurn','suppressGridFilterData','spaceBetween','moveCommand_name','makeTargetsBattleGridNodeDirect','isBattleCoreTargetScope','menuActor','adjustBoxSize','clearBattleGridCache','View\x20this\x20character\x27s\x20skills.','Mirror','FlashDuration','adjustSprite','RIGHTWARD','playOkSound','isEnemy','BattleGridTacticsHelpExtendedNode','ScopeActorNodeVocab','drawActorFace','userKey','anyAliveMembersAtGridRank','anyRequiredPartyMembersInReserve','Game_Party_maxBattleMembers','graphicType','onTacticsCommandWindowCancel','change','getBattleGridUnitNodeTriggerData','drawItemActorMenuImage','all','notRadius','from','playBuzzer','_scene','blendMode','isForBattleGridNode','ReqWeaponRange','_lastSelectedAoeTarget','canDrawUsableGridNodes','addMember','allowDiaForward','updateBattleGridMoveCommandCooldownTurns','UP-LEFTWARD','not','ActSeq_Grid_TeleportToNode','VisuMZ_2_ItemCraftingSys','loadFace','requestFauxAnimation','party','hide','commandStyle','Sprite_Enemy_loadBitmap','isExpGaugeDrawn','setBattleGridMoveCommandPassTurn','makeTargets','showNodeTriggerAnimations','actorNodeFilename','%1,\x20%2,\x20%3','actorOffsetX','_forcedBattleGridTactics','changeTextColor','UserMoveDuration','hasNoGridNode','MoveRangeBatch','nodeOffsetX','setGridNodeTrigger','_battleGridPassDuration','_additionalSprites','92ThDxNd','isCurrentNodeOccupiedByOthers','placeGauge','makeTargetsBattleCore','BgFilename2','crashTarget','changePaintOpacity','initBattleGridTactics','processBattleGridTransferNodeEffect','HelpPickActor','actionTargetAnimation','shift','Game_Actor_setup','friendsUnit','CursorDisabledOpacity','VisuMZ_2_BattleSystemFTB','targetWindow','setTargetBattlerKey','subject','ARRAYFUNC','Scene_Battle_updateStatusWindowPosition','prototype','itemPadding','_actor','animationShouldMirror','addEscapeCommand','_battleGridMoveCommandPassTurn','abs','isItemGridHidden','drawItemActor','checkNoGridMove','Window_SkillList_costWidth','onTacticsChangePosition','setBattleGridNodeTrigger','5jczfaI','useTactics','endAnimation','_battleGridMoveCommandCooldown','Game_Action_applyItemUserEffect','Game_Action_makeTargetsBattleCore','_forcedPartyActors','ActSeq_Grid_AddTriggerToNode','createGridMoveWindow','index','canGridSwitchOnAction','setSkill','filterBattleGridEnemies','rawUnalteredGridMembers','notSquare','calcWindowHeight','onMouseEnterSelectRankWindow','selectRandomEmptyGridNode','Game_Party_membersTactics','CommandName_PartyLeader','resetFontSettings','applyBattleGridSystemTargetMovement','getInputButtonString','anyMembersAtGridTacticsNode','\x5cI[%1]%2','getMemberAtGridTacticsNode','allow','%1-%2','in\x20order\x20for\x20VisuMZ_2_BattleGridSystem\x20to\x20work.','ARRAYEVAL','Enemy\x20Node','BATTLE_GRID_SYSTEM','_flank','createBattleGridLayout','contents','dimColor2','playOk','allyColor','partySystemRemoveShortcut','dimColor1','radius','randomTarget','isInputting','isAppeared','Game_Action_subject','cancel','setupMembersForBattleGrid','22aovEmZ','Move','UserMoveSilent','getFlankAt','_statusWindow','Window_BattleGridTactics_pendingBgColor2','Game_Party_members','canGridMove','_gridNodePassiveStates','shouldStepForward','getBackgroundOpacity','currentClass','isForAll','contentsHeight','isNoGridMove','mhp','94ToTVYG','PAWN','drawItemKeyData','rawBattleMembers','onHomeMoveEnd','%1-R%2','findSymbol','_pendingIndex','ActSeq_Grid_AnimationTypeAtNode','startsWith','isForBattleGrid','notForward','smoothSelect','WpnRangeRanks','isClickEnabled','makeTargetsBattleGridRankDirect','isAreaOfEffect','isForNonTargetGridNode','_screenX','ENEMY','itemListDrawTargetNodes','BattleManager_endAction','ROOK','actor','setupForBattleGrid','createForcedBattleGridTactics','SWITCH','_blendColor','clearGridInputBlendColor','center','addItemCommand','clearBattleGridNodeTriggerData','findIndex','drawBackgroundRect','stateIDs','needsInputWindowChange','Window_ActorCommand_drawSkillCost','createTacticsCommandWindow','characterIndex','_actions','iconWidth','Slot','MoveType','setMainMenuBattleGridTacticsEnabled','onTacticsCancel','attackTimesAdd','isMainMenuBattleGridTacticsEnabled','fillAll','Game_Party_addActor','notColor','clearGridFilter','ActorWindow_RectJS','isETB','CreateRemainingGridNodes','ceil','checkCacheKey','_gridNodeTriggers','\x5cI[75]Swap\x20Character','unit','updateWaitMode','_getActionTriggerName','isForDeadFriend','currentExt','AnimationID','allowEarlySwapOrderBreak','Targets','isFlankEnabled','some','Sprite_Actor_stepForward','addText','select','SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_X','skills','attack','defaultAllRange','lastAnimationName','frameCount','hasAreaOfEffect','autoMeleeAreaOfEffectActionSet','cos','troop','GetActionSequenceSpecialTarget','getBattleGridActorNodeBitmap','isInAoeRange','updateNodeTriggerAnimations','getAttackMotion','isFormationChangeOk','loadFaceImages','ClearTriggerFromNode','anyObjectsAtGridNode','close','makeCommandList','isGridNodeTriggerQueued','Scene_Battle_createActorCommandWindow','weapons','passiveStates','isActiveTpb','createLowerLayer','Window_MenuStatus_drawActorGraphic','HelpDesc_Status','normal','HelpDesc_Skill','There\x20are\x20not\x20enough\x20grid\x20nodes','skillListDrawTargetNodes','getAreaOfEffectData','reduceWidthForNodeData','defaultWpnRangeMelee','Game_Unit_smoothDeadTarget','faceHeight','_bypassGridBattlers','onMouseEnterSelectFlankWindow','isForAnyone','flankDelta','_skillWindow','getStartGridRanks','maxmp','parseBattleGridTargetMoveRegExp','Moves\x20character\x20to\x20a\x20different\x20grid\x20node\x20position.','View\x20this\x20character\x27s\x20equipment.','visible','repeatTargets','ShowCommand_SwapMember','isAnyGridWindowActive','BattleGridShopStatusScopeEmptyNode','iconHeight','drawItemNumber','isForBattleGridRank','retrieveNodeTriggerAnimation','cancelTargetSelectionVisibility','outlineInnerThick','getMemberAtGridNode','autoSelect','battleGridCursor','all\x20actors','animationBaseDelay','AllowedRanks','%1-F%2','getSkillIdWithName','onTacticsCommandRemoveMember','targetRank','actionEffect','setChangeMode','Window','2556057TAwYed','isActionSelectionValid','getBattlerFromKey','titleEmptyColor','updateBattleGridSystemPosition','createBattleGridNodeIconSprites','repeats','_hidden','HelpDesc_SwapMember','selectSymbol','_aoeMainTargetKey','drawActorLevel','Please\x20redesign\x20this\x20battle.','split','makeTargetsBattleGridNodeAI','isForAnyoneFocusOpponents','removeAllNodeTriggerAnimations','bitmap','ActSeq_Grid_PullToTargetNode','test','TacticsJS','startGridSelectNode','getGridBottomFlank','TacticsCommandOrder','moveCommandCooldown','Game_BattlerBase_revive','settings','_item','gridNodeWindowRect','activate','View\x20this\x20character\x27s\x20status.','moveToUnoccupiedNode','MoveCommandName','targeting','showMoveCommand','_lastSelectedWindowNode','_index','LvExpGauge','enemyNodeFilename','commandOrder','cursorLeft','partyChangeRefresh','_targetHomeX','canBattlerMove','Scene_Menu_createCommandWindow','setText','bgType','UseActionSelectNode','isSelectNodeDisabled','_battleGridCursorContainer','isOnGridRank','openTacticsCommandWindow','drawIcon','\x5cI[82]View\x20Status','actorInput','gridNode','BattleGridShopStatusRange','BattleGridTacticsLeader','updatePosition','drawTargetNodes','Window_BattleEnemy_sortEnemies','isGridNodeTriggerReady','Window_BattleGridHelp_BgType','OffsetY','isTriggered','stringify','maxhp','toLowerCase','disabled','canDeadGridSwitch','isAttack','WindowTactics_DrawActorJS','AllowedBottomFlank','showAnimation','Window_ActorCommand_addGuardCommand','VisuMZ_4_BreakShields','addBattleGridTacticsCommandAutomatically','gridMoveBattlerToNewHome','Game_BattlerBase_appear','Please\x20select\x20a\x20node\x20to\x20place\x20party\x20member.','removeBattleGridNodePassiveStateID','_nodeTriggerActive','gridMoveRangeData','itemRect','CoreEngine','getActorTitle','centerGridRank','nodeOffsetY','drawActorBreakShields','actorOpacity','addChild','swapMember','startGridMove','virtualClick','gridRanksOccupied','_lastHaveDragonbonesBattler','GetMultiDirectionsFrom','frontview_ui','Scene_Battle_selectNextCommand','stepForward','assistRemovePartyMember','requestAnimationAtNode','getSelectedBattleGridFlank','_enemyWindow','addBattleGridNodePassiveStateID','ScopeEnemyNodeVocab','opacity','blt','clearBattleGridNodePassiveStateIDs','scaleY','nodeFilename','QUEEN','okayColor','outlineFilter','getPartyIndexAtGridTacticsNode','selectActorPosition','Game_Party_initialize','There\x20is\x20no\x20grid\x20space\x20for\x20your\x20troops.\x0a','4524129ktlNlx','addBattleGridMoveCommand','drawSkillCost','show','_gridNodeTriggerCountdown','SkillID','isForFriend','Game_System_isSideView','ARRAYJSON','checkSealedGridMove','_aoeCenter','processGridNodeTrigger','mainAreaTop','CreateActionSequenceTargets','maxOpacity','\x5cI[137]View\x20Equipment','playSe','mainAreaHeight','createTroopNote','innerColor','applyImmortal','initBattleGridTacticsMenu','scope','setObject','onDatabaseLoaded','battlerKey','moveDummySpriteToSelectedGridNode','notRank','switchFlank','createBattleGridMoveCursor','getTitleColor','_restrictedGridData','rankDelta','isSkill','Scene_Boot_onDatabaseLoaded','_lastSelectedAoeSkill','isAlive','needsColorDistinction','removeAnimationFromContainer','ParseTriggerNodeData','isDead','StartRanks','_cache','DOWN-LEFTWARD','maxFlanks','VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20','Move\x20command\x20is\x20queued\x20after\x20action\x20is\x20complete.','8819AXrHdo','setSubject','_suppressAllowedGridData','Window_ShopStatus_drawItemCustomEntries','setWaitMode','moveToCalcStartGridLocation','ParseTargetNodeData','HelpDesc_RemoveMember','createGridSelectNodeWindow','optDisplayTp','Sound','_gridSelectRankWindow','getGridFrontRank','UserMoveVisual','clearBattleGridNodeTrigger','isPTB','processBattleGridPushFromNodeEffect','getStartGridFlanks','isCancelTriggered','CommandName_Status','_cached_BattleGridSystem_ActorNode','selectedBlendColor','scaleX','forward','clear','members','max','waitCount','isUseModernControls','onGridSelectRankCancel','match','autoBattleGrideNodeActionSet','centerGridFlank','updateBattleProcess','selectFirstActor','%1,\x20%2','UP-RIGHTWARD','refresh','isTauntAffected','square','animationId','addInnerChild','TempDisbandTactics','provoker','canDrawTargetGridNodes','getAliveMembersAtGridRank','selected','topFlank','MUST\x20MID','isNodeEnabled','getGridPositionPoint','endGridSelectFlank','_battleGridTacticsPositions','allowCollapse','ConvertNodeToScreenPoint','noGridMove','setActiveWeaponSet','_isInAoeRange','_battleMembers','call','mirror','VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20','setBypassGridBattlers','Trigger','moveCommand_volume','AoeBatch','updateGridInputtingEffect','activeWindowBattlerOpacityRate','updateBlendMode','RequireRank','processCursorMove','isAnimationForEach','mode','scaleSprite','anyAliveMembersAtGridFlank','_battleGridContainerOuterOutline','createBattleGridContainer','Please\x20select\x20a\x20party\x20member.','hpAffected','receiveBattleGridCrashDamage','WpnRangeSameFlank','_targetOffsetY','setHelpWindow','onTacticsCommandSceneChange','autoAreaOfEffectActionSet','isOpenAndActive','left','DOWNWARD','bind','update','applyGridMemberFilter','frontRank','startHomeMove','_battleGrid_MainMenu','createBattleGridCursors','removeAllAnimations','costWidth','BattleGridTacticsHelpRequiredChara','Any\x20Node','ActSeq_Grid_AddPassiveStatesToNode','create','BattleGridShopStatusScopeAnyNode','isNodeSelected','CommandName_SwapMember','filter','isOnGridNode','isForRandom','aniFrameCount','\x5cI[133]Change\x20Class','isSceneGridTactics','_frame','_battlerSprite','createGridNodeWindow','drawGridNodes','btbBraveBypassRankFlank','Strength','_homeX','VisuMZ_2_BattleSystemPTB','height','blinkInputUser','clearTargetBattlerKey','onMouseEnter','hasSvBattler','Scene_Battle_onSelectAction','RequireFlank','skill','autoAddMoveCmd','_itemConcoctSkill','VisuMZ_1_MainMenuCore','getItemScopeText','smooth','FUNC','concat','VisuMZ_1_SkillsStatesCore\x20needs\x20to\x20be\x20updated\x20','endGridSelectRank','closeCommandWindowsForGridNodes','differenceX','showNodeIcons','timeScale','maxItems','isUsingGridSystem','isForAnyoneFocusFriends','_battleGridDummyBattler','drawAllItems','getStateDisplay','isKeyEnabled','DefaultGrid','ActSeq_Grid_RemovePassiveStatesFromNode','gridMove','_iconIndex','_getActionTriggerAnimation','enemyOffsetY','Window_BattleEnemy_cursorDown','_gridMoveWindow','UPWARD','30969TPQKWU','onSelectAction','ShowCommand_RemoveMember','Enemy','enemyColor','StateIDs','isUsingExtendedBattleGridTactics','allowBackward','mainCommandWidth','ShowText','description','itemHeight','BattleGridTacticsMenuCommand','checkTriggersAtCurrentNodes','isSceneBattle','getCrashDamageFlat','radiusReduce','addWindow','sortEnemies','initMembers','isInGridMoveRange','_battleGridMovedTargets','onMouseEnterMoveWindow','CastNodeVocab','ActSeq_Grid_ActionAnimationAtNode','VisuMZ_2_AggroControlSystem','processOk','Change\x20this\x20character\x27s\x20class.','anchor','createGridMoveRangeData','boxWidth','svActorVertCells','VisuMZ_2_BattleSystemBTB','gridMoveToUnit','ParseUnit','CursorEnabledToneColor','CommandName_Equips','Game_Action_makeTargets','applyBattleGridMoveCommandPassTurn','onGridSelectFlankCancel','passTurnETB','meetsGridNodeConditions','getRankAt','visibilityState','getMemberIndexAtGridTacticsNode','BattleCore','createBattleField','_gridSize','_gridCursorLocation','isForBattleGridFlank','calcAutoStartingGridFlank','updateTacticsCommandWindowPosition','battleLayoutStyle','restrictedGridData','Spriteset_Battle_removeAllAnimations','moveToStartingGridNode','HelpDesc_Equips','_cacheCreateRemainingGridNodes','setGridNode','length','passTurnFTB','SWITCH\x20MID','TempCreateTacticsJS','always','crashTargetCrashDamage','allowUpward','Window_BattleEnemy_cursorRight','randomInt','isFormationEnabled','help','isMVAnimation','registerGridNodeTrigger','_subjectEnemyIndex','updateBattlerSprite','setGridFilter','Node','_queuedGridNodeTriggers','updateAnimations','updateDragonbonesSprite','PartyIndex%1_Flank','openness','addLoadListener','updateVisibility','_lastIconIndex','ActSeq_Grid_RemoveTriggerFromNode','isCancelEnabled','Window_SkillList_drawSkillCost','includes','inBattle','opacitySpeed','RequireFrontRank','getSelectedAoeSkill','visibleAnyInput','_nodetriggerAnimationSprites','opponentsUnit','MoveCommand','isBTB','Member\x20#%1','disabledOpacity','sort','Spriteset_Battle_createBattleField','_gridSelectNodeWindow','move','TransferToNode','UseTactics','BACKWARD','attackAnimationIdSlot','setBackgroundType','RegExp','updateSelectionEffect','_homeDuration','battleMembers','checkDragonbonesSprite','updateStatusWindowPosition','onGridSelectFlankOk','selectNextCommand','canUse','targetObjects','isMainMenuClassChangeSystemEnabled','titleLeaderColor','map','\x5cI[78]Move\x20Position','HelpPickNode','onGridMoveNodeOk','setMainMenuBattleGridTacticsVisible','MID','Unit','isFTB','HideGridRange','AllowedSameRank','getStateIdWithName','Tactics','_cached_BattleGridSystem_EnemyNode','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','NodePassiveStates','addActorToBattleMembers','sameFlank','commandGridMove','removeActorFromBattleMembers','play','setFrame','RequireTopFlank','updateOpacityFluc','getSelectedWindowNode','lineHeight','applyBattleGridMoveCommandCooldown','Duration','mainSprite','open','rank','isCommandEnabled','PARTY','FRIEND','validGridMembers','_battleGridContainerInnerOutline','General','#ff0000','createBattlerSprite','HelpDesc_AddMember','isPlaying','updateIconFrame','setBattleGridTacticsPosition','clearBattleGridMoveCommandCooldown','repositionForGridAfterTransform','pendingBgColor2','_getActionTriggerIcon','3382206tEBFJg','Compatibility','Window_ItemList_drawItemNumber','iconIndex','_windowLayer','_gridAction','Spriteset_Battle_coreEngineRepositionEnemies','performAction','onClickSelectRankWindow','ranks','createGridSelectRankWindow','setBackgroundOpacity','SETTINGS','8LEBdBK','HelpExtPickNode','parseBattleGridSelfMoveRegExp','trim','_weaponRangeGridData','STRUCT','isBattleGridTacticsEnabled','getBattleGridUnitNodePassiveStateData','helpAreaHeight','indexOf','isRankEnabled','SceneOpenGridTacticsScene','Window_MenuActor_processOk','playCursorSound','CrashSelfDmgRate','_subject','RequireNotFlank','drawItemCustomEntries','processAllGridNodeTriggers','svbattler','_throwSkill','Scene_Battle_hideSubInputWindows','RequireBackRank','constructor','expGaugeColor2','_isGridNodeTrigger','sideview_ui','Game_Unit_smoothTarget','Game_Enemy_transform','isMainMenuBattleGridTacticsVisible','isUsingBattleGridTactics','setupIconTextPopup','paintOpacity','SortMoveTargets','none','actorWindowRect','Window_MenuStatus_isCurrentItemEnabled','targetFlank','%1-R%2-F%3','loadSystem','BattleGridSystem','setAction','_forActor','Sprite_Actor_shouldStepForward','hitType','addBattleGridTacticsCommand','TempCreateTacticsNormal','_targetHomeY','visibleTargeting','GridDistDamage','gridFlanksOccupied','_customItemInfo','buttonAssistKey3','_allowedGridData','isQueueGridMove','_backSprite1','traitObjects','PositionOffsetX','isForAnyBattleGridNode','checkAvailableGridSlots','outlineColor','Party\x20Leader','createEffectActionSet','Scene_Battle_isAnyInputWindowActive','getAreaOfEffectTargets','_list','drawItemActorSvBattler','WpnRangeGlobal','gridMembers','allowedGridData','deselect','_battleGridCache','checkInAoeRange','prepareActorForBattleGrid','distanceY','format','gridFlankSize','diaForward','drawText','isMeleeAreaOfEffectAction','Party\x20Index\x20%1','crashDamageFormulaJS','nodeTriggers','getAliveMembersAtGridFlank','forceSelect','Game_Action_clearTargetBattlerKey','setStateTooltipBattler','Game_Action_apply','remove','createBattleGridSprites','crashAllowDeath','_offsetX','AoeLine','crashed','CrashTargetDmgFlat','cursorRight','white','aliveMembers','coreEngineRepositionEnemies','WpnRangeTopFlank','Sprite_Enemy_stepForward','setupEffect','shown','actorOffsetY','setMenuActor','canUseGridMoveCommand','userSilentMove','partyIndex','TargetMoveNode','isBattleGridTacticsCommandEnabled','innerWidth','drawItemActorSprite','applyBattleGridNodeEffect','Type','defaultNoneRange','attackAnimationId1','requestMotion','isNodeDisabled','anyMembersAtGridNode','_nodeTriggerAnimationQueue','_commandWindow','processBattleGridPullToNodeEffect','makeTargetsBattleGridFlankAI','battleGridDummyBattler','performBattleGridCrashDamage','downward','setHome','aoeData','moveDuration','characterName','Adds\x20selected\x20character\x20to\x20current\x20party.','passTurnPTB','requiredPartyMemberIcon','isBigCharacter','_battlerContainer','SealGridMove','Window_ItemList_numberWidth','DOWN-BACKWARD','BattleManager_setup','currentTime','drawActorGraphic','isRequiredInParty','Empty','Mute','setBlendColor','_amplifySkill','_customModified','BattleAI','SystemEnableGridTacticsMenu','VisuMZ_3_SideviewBattleUI','defaultEnable','silentHomeMove','ACTOR','EVAL','Game_BattlerBase_canUse','_gridSelectFlankWindow','_battleGridContainer','keys','actorIndex','Game_Troop_setup','isNodeDistinctHighlighted','Window_BattleGridTactics_titlePendingColor','createCustomBackgroundImages','_offsetY','Actor','_srcBitmap','battleFieldOffsetY','_movementDuration','isAutoBattle','AddTriggerToNode','setItem','Actor\x20Node','triggerPopupShowText','_effectDuration','getBattleGridTacticsPosition','updateOpacity','VisuMZ_GetActionSequenceSpecialTarget','createArmature','drawItemDarkRect','canGridSwitchOnMove','getAreaOfEffectNodes','getBattleGridMoveCommandCooldown','isDistinctBattlerSelected','name','onTacticsCommandPartyLeader','drawItemBackground','KNIGHT','opacityFlucRate','createContents','_targetOffsetX','GridSize','setActorHome','loadBitmap','addCommand','isDistinctAndInAoeRange','TeleportToNode','waitForNodeTriggerAnimations','destroy','buttonAssistText3','PartyIndex%1_Rank','Window_StatusBase_drawItemActorMenuImage','_dragonbones','_action','face','VisuMZ_2_AggroControlSystem\x20needs\x20to\x20be\x20updated\x20','guardSkillId','isMoveWindowActive','Linear','%1x%2','createKeyJS','addGuardCommand','gridRankSize','isActor','performGridCrashDamage','CommandName_RemoveMember','Spriteset_Battle_updateAnimations','PerformCrashDamage','_battleGridMoveCursor','setupBattleGridTriggerNodes','From','MeetsAllowedGrids','CommandName_Skill','onClickMoveWindow','ActSeq_Grid_ClearPassiveStatesFromNode','_animationSprites','BattleGridShopStatusFrom','type','ShowCommand_AddMember','gridFlank','getBattleGridNodeTrigger','enemy','mmp','titlePendingColor','STR','ShowCommand_Skill','active','canMove','onClickSelectFlankWindow','PushFromNode','isForEveryone','_waitMode','deactivate','clearForcedBattleGridTactics','BattleGridMoveQueue','ItemID','switch','VisuMZ_3_StateTooltips','ParsePassiveStateNodeData','actionTargetCrashDamage','actorCmdDrawUsableNodes','anyInput','BattleGridMoveCommand','switchTarget','strokeRect','Scene_Battle_updateBattleProcess','_stateIndex','differBlendColor','createHelpWindow','createBitmap','isBorderPortraitSpriteVisible','BattleGridTacticsHelpNode','boxHeight','removeBattleGridMoveCommand','performGridDistanceDamage','cancelChangeMode','isAreaOfEffectAction','_gridLocation','Game_System_isFormationEnabled_FT','makeDeepCopy','NoGridMove','_actorWindow','crashTargetAnimation','triggerPopupTextColor','createNodeTriggerAnimation','push','requestNodeTriggerAnimation','faceName','min','innerThick','addPassiveStatesFromOtherPlugins','Window_BattleEnemy_cursorLeft','clearBattleGridMoveCommandPassTurn','_cached_BattleGridSystem_IconSet','faceWidth','setupBattleGridPassiveStateNodes','colSpacing','createBattleGridCursorContainer','KING','revive','Game_Battler_regenerateAll','FORWARD','TargetMoveDuration','convertGaugeTypeSkillsStatesCore','selectBattlerPosition','notBackward','createBattleGridIconContainer','getBypassGridBattlers','ARRAYSTRUCT','HelpDesc_Move','hideActorWindow','blinkInputColor','maxVisibleItems','VisuMZ_0_CoreEngine','removeMember','appear','onActorCancel','getSelectedAoeTarget','_helpWindow','hideAdditionalSprites','updateCounter','VisuMZ_2_ClassChangeSystem','MoveCmdIcon','isSideView','makeTargetSprites','diaBackward','isForEmptyBattleGridNode','AllowedSameFlank','isForBattleGridNodeOnly','LEFTWARD','offsetY','Window_ActorCommand_updateHelp','applyBattleGridSystemTargetEffect','states','findPartyIndex','Enable','createNodeTriggerAnimationSprite','MoveQueueText','playBattleGridMoveCommand','textColor','cursorUp','gridRank','_targetBattlerKey','getTauntMembers','hasVisibleCorpse','transform','%1,%2','battleGridTactics','_gridNodeWindow','Game_System_initialize','isOTB','isCurrentTacticsItemEnabled','OffsetX','TriggerIcon','hideSubInputWindows','targetSilentMove','canGridMoveTo','helpAreaTop','startAnimation','Window_ActorCommand_makeCommandList','backward','smoothDeadTarget','Game_BattlerBase_canInput','log','UserMoveNode','getSelectedBattleGridNode','onMouseEnterSelectNodeWindow','_motionSpeed','outerThick','createGridPositionPoint','actor%1-gauge-%2','opacityFlucMax','PartySystem','isOnGridFlank','isKeyIncluded','classChange','_areaOfEffectData','_battler','clearBattleGridSystemData','isInGridRange','EXACT','visibleActive','ShowCommand_Equips','allowDownward','Distance','OutlineFilter','_battleGridIconContainer','Spriteset_Battle_createLowerLayer','onGridMoveTo','Window_BattleActor_isActionSelectionValid','waitForAnimation','drawTextEx','Window_ActorCommand_addItemCommand','outerColor','Sprite_Battler_updatePosition','processNodeTriggerAnimationRequests','getGridTopFlank','_spriteset','WindowTactics_DrawEmptyJS','checkInitBattleGridTacticsPositions','ScopeEmptyNodeVocab','selectAnyRandomGridNode','itemLineRect','enemyOffsetX','floor','actionTriggerName','startGridSelectRank','contentsBack','currentSymbol','VisuMZ_2_PartySystem\x20needs\x20to\x20be\x20updated\x20','playEquip','EnableMainMenu','getBattleGridNodePassiveStateIDs','onClickSelectNodeWindow','gainHp','battlerName','popScene','applyBattleGridSystemUserEffect','canUseForBattleGrid','notFlank','setupBattleGridTacticsPosition','Game_Battler_onBattleStart','svActorHorzCells','getBattleGridNodeBitmap','Window_BattleLog_updateWaitMode','flanks','partyLeader','setup','getActionTriggerName','onBattleStart','endGridSelectNode','WpnRangeAll','distanceFromNode','scale','ActSeq_Grid_AnimationJsAtNode','Window_BattleGridTacticsCommand_BgType','pendingBgColor1','offsetX','collapseType','onGridSelectNodeCancel','CRASH-MID','gridNodesOccupied','MUST\x20SWITCH\x20MID','resetTextColor','drawTargetGridNodes','color','WpnRangeMelee','RequireBottomFlank','getColor','Scene_Battle_needsInputWindowChange','Window_BattleLog_createEffectActionSet','outlineInnerColor','_actorCommandWindow','CursorEnabledOpacity','isForOpponent','isNodeTriggerAnimationPlaying','canAutoAddBattleGridMoveCommand','PartyLeaderVocab','Window_BattleEnemy_cursorUp','_logWindow','Settings','canInput','_homeEasing','maxBattleMembers','anyTargetingWindowsActive','_enemySprites','_backSprite2','_subjectActorId','SkillsStatesCore','toUpperCase','1367328RTWPCF','commandBattleGridTactics','VisuMZ_2_PartySystem','isBattleGridTacticsCommandVisible','triggerPopup','ScopeAnyNodeVocab','DOWN','canGridSwitchWhileDead','enabled','createBattleGridNodeIcons','ext','allowForward','Window_BattleLog_endAction','GridField','getSelectedBattleGridRank','isCurrentItemEnabled','PullToNode','createEnemies','drawPendingItemBackground','Spriteset_Battle_createEnemies','Spriteset_Battle_initialize','endAction','smoothTarget','ActSeq_Grid_MoveTargetsInDirection','actorTextColor','_selectedBattleGridNode','version','createBattleGridDummySprite','TriggerName','Temp:\x20Create\x20Temporary\x20Tactics\x20(JS)\x20Error','playActorDamage','isProvokeAffected','onGridWindowCancel','ConvertActionSequenceTarget','_rank','initialize','BattleGridShopStatusScopeEnemyNode','clearBypassGridBattlers','visibleSelected','NodeTrigger','moveCommandPassTurn','setHandler','sameRank','inputtingAction','_baseSprite','createGridSelectFlankWindow','52VkBiEG','ConvertParams','moveToRemainingStartGridLocation','onTacticsOk','backRank','BattleGridShopStatusScopeActorNode','resetGridNode','Spriteset_Battle_targetBattlerContainerOpacity','AllowedFlanks','SWITCH-MID','opacityFlucRange','createActorCommandWindow','node','border','setActor','Window_BattleEnemy_autoSelect','EmptyNodeVocab','StartFlanks','enemyOpacity','VisuMZ_2_DragonbonesUnion','Window_ActorCommand_addEscapeCommand','thickness','clearResult','showOutlineFilter','onGridSelectRankOk','triggerPopupFlashColor','checkBattleGridUsage','allowSquare','regenerateAll','allowRadius','baseGridMoveRangeData','drawGauge','setBattleGridCache','shiftRemoveShortcut','UP-BACKWARD','drawUsableNodes','itemWidth','PassiveState','walk','addAreaOfEffectTargets','VisuMZ_1_SkillsStatesCore','mute','getGridFilterData','addOriginalCommands','helpBgType','loadSvActor','_queueGridMove','_forcedBattleGridSystem','isBattleGridBypassClickEnabled','getGridBackRank','lockPartyMemberIcon','for\x20the\x20maximum\x20party\x20slots.','onTacticsCommandSwapMember','RequireNotRank','isBuffOrDebuffAffected','isNodeSelectWindowActive','loadCharacter','RemovePassiveFromNode','_result','getDualWieldTimes','_setupMembersForBattleGrid','VisuMZ_1_BattleCore','VisuMZ_2_BattleSystemOTB','reserveMembers','parseBattleGridMoveRangeData','NUM','ensureCursorVisible','mainAreaBottom','startGridSelectFlank','startDamagePopup','_callPartyMemberSwitch','removeNodeTriggerAnimation','TargetMoveVisual','actionTriggerIcon','_mode','animation','_screenY','CrashSelfDmgFlat','isCursorLeft','processChange','refreshMemberAtGridNode','find','updateStateIndex','isSelected','getBattleGridMoveCommandCooldownTurns','_performed_applyBattleGridSystemUserMovement','upward','maxDistanceX','isValidGridBattleTarget','checkIconFrame','drawActorExpGauge','setBattleGridMoveCommandCooldown','MoveHelpText','ShowCommand_PartyLeader','TargetNodeVocab','WindowTactics_RectJS','targets','parse','ALL','onGridSelectNodeOk','expGaugeColor1','drawCircle','switchRank','cursorDown','getActionTriggerIcon','Sprite_Battler_updateSelectionEffect','forActor','getBattleGridIconSet','commandName','registerCommand','performDamage','padding','ActSeq_Grid_PushFromTargetNode','actorId','_fromTacticsMenu','ShowMainMenu','processAddCommand','Window_ShopStatus_getItemScopeText','getBattleGridNodePassiveStateData','applyItemUserEffect','DOWN-FORWARD','note','checkShiftRemoveShortcut','AggroControlSystem','CursorDisabledToneColor','_tacticsCommandWindow','apply','gradientFillRect','filters','bottomFlank','def','deadMembers','Game_Party_battleMembers','onClick','isSealedGridMove'];_0xef79=function(){return _0x1c4170;};return _0xef79();}function Sprite_BattleGridMoveCursor(){const _0x1b8a3b=_0x4e2d80;this[_0x1b8a3b(0x55e)](...arguments);}Sprite_BattleGridMoveCursor[_0x4e2d80(0x6a9)]=Object['create'](Sprite['prototype']),Sprite_BattleGridMoveCursor[_0x4e2d80(0x6a9)][_0x4e2d80(0x387)]=Sprite_BattleGridMoveCursor,Sprite_BattleGridMoveCursor[_0x4e2d80(0x36f)]={'enabled':{'blendMode':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)]['CursorEnabledBlendMode']??0x0,'toneColor':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x2e0)]??[0x10,0xff,0x10,0x0],'opacity':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x52a)]??0xc0},'disabled':{'blendMode':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x625)]??0x0,'toneColor':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x5e5)]??[0xff,0x10,0x10,0x0],'opacity':VisuMZ[_0x4e2d80(0x398)]['Settings']['MoveCommand'][_0x4e2d80(0x6a2)]??0xc0}},Sprite_BattleGridMoveCursor[_0x4e2d80(0x6a9)][_0x4e2d80(0x55e)]=function(){const _0x3adb6a=_0x4e2d80;Sprite[_0x3adb6a(0x6a9)][_0x3adb6a(0x55e)][_0x3adb6a(0x25d)](this),this[_0x3adb6a(0x2d0)](),this['createBattlerSprite']();},Sprite_BattleGridMoveCursor[_0x4e2d80(0x6a9)][_0x4e2d80(0x2d0)]=function(){const _0x1f89e0=_0x4e2d80;this[_0x1f89e0(0x165)]=![];},Sprite_BattleGridMoveCursor[_0x4e2d80(0x6a9)][_0x4e2d80(0x35a)]=function(){const _0x12b98f=_0x4e2d80;this[_0x12b98f(0x291)]=new Sprite(),this['addChild'](this['_battlerSprite']),this[_0x12b98f(0x291)]['bitmap']=new Bitmap(0x64,0x64),this['_battlerSprite'][_0x12b98f(0x18e)][_0x12b98f(0x724)](_0x12b98f(0x3d0));},Sprite_BattleGridMoveCursor['prototype']['update']=function(){const _0x4ecdda=_0x4e2d80;Sprite['prototype']['update']['call'](this),this[_0x4ecdda(0x30f)]();if(!this[_0x4ecdda(0x165)])return;this[_0x4ecdda(0x306)](),this[_0x4ecdda(0x32d)](),this[_0x4ecdda(0x30b)](),this['updatePosition'](),this[_0x4ecdda(0x266)]();},Sprite_BattleGridMoveCursor[_0x4e2d80(0x6a9)][_0x4e2d80(0x30f)]=function(){const _0x815ee9=_0x4e2d80;this[_0x815ee9(0x165)]=this[_0x815ee9(0x2e8)]();},Sprite_BattleGridMoveCursor['prototype'][_0x4e2d80(0x6a4)]=function(){const _0x13e9d8=_0x4e2d80;return SceneManager['_scene'][_0x13e9d8(0x2bb)];},Sprite_BattleGridMoveCursor[_0x4e2d80(0x6a9)][_0x4e2d80(0x2e8)]=function(){const _0x2b2392=_0x4e2d80;return this[_0x2b2392(0x6a4)]()&&this['targetWindow']()[_0x2b2392(0x45b)];},Sprite_BattleGridMoveCursor[_0x4e2d80(0x6a9)][_0x4e2d80(0x306)]=function(){const _0x47bd71=_0x4e2d80,_0x2e714e=BattleManager[_0x47bd71(0x70c)]();if(!_0x2e714e)return;const _0x56c7e6=_0x2e714e[_0x47bd71(0x645)]();if(!_0x56c7e6)return;if(this['_dragonbones']){this['_battlerSprite']['setFrame'](0x0,0x0,0x0,0x0);return;}const _0x378f46=_0x56c7e6['_mainSprite'];this[_0x47bd71(0x291)][_0x47bd71(0x18e)]=_0x378f46['bitmap'],this[_0x47bd71(0x291)][_0x47bd71(0x2d9)]['x']=_0x56c7e6[_0x47bd71(0x2d9)]['x'],this[_0x47bd71(0x291)]['anchor']['y']=_0x56c7e6['anchor']['y'],this[_0x47bd71(0x291)][_0x47bd71(0x516)]['x']=_0x378f46[_0x47bd71(0x516)]['x'],this[_0x47bd71(0x291)]['scale']['y']=_0x378f46[_0x47bd71(0x516)]['y'];const _0x25f805=_0x378f46[_0x47bd71(0x290)];this[_0x47bd71(0x291)][_0x47bd71(0x349)](_0x25f805['x'],_0x25f805['y'],_0x25f805[_0x47bd71(0x610)],_0x25f805[_0x47bd71(0x298)]);},Sprite_BattleGridMoveCursor[_0x4e2d80(0x6a9)][_0x4e2d80(0x32d)]=function(){const _0x5ebc4b=_0x4e2d80;if(!Imported[_0x5ebc4b(0x57c)])return;const _0xf67ab5=BattleManager['actor']();if(!_0xf67ab5)return;if(this['_lastHaveDragonbonesBattler']!==_0xf67ab5['hasDragonbonesBattler']())this[_0x5ebc4b(0x63b)]();else this['_lastDragonbonesBattlerName']!==(_0xf67ab5['dragonbonesData']()[_0x5ebc4b(0x645)]||'')&&this['changeDragonbonesSprite']();},Sprite_BattleGridMoveCursor[_0x4e2d80(0x6a9)][_0x4e2d80(0x63b)]=function(){const _0x5b7bc0=_0x4e2d80;if(!Imported['VisuMZ_2_DragonbonesUnion'])return;const _0x2191fc=BattleManager[_0x5b7bc0(0x70c)]();if(!_0x2191fc)return;this[_0x5b7bc0(0x439)]&&(this['removeChild'](this[_0x5b7bc0(0x439)]),this['_dragonbones']['dispose'](),delete this['_dragonbones']);const _0x17a95f=_0x2191fc[_0x5b7bc0(0x5f8)]();this['_lastHaveDragonbonesBattler']=_0x2191fc['hasDragonbonesBattler'](),this['_lastDragonbonesBattlerName']=_0x17a95f[_0x5b7bc0(0x645)]||'';if(!this[_0x5b7bc0(0x1dc)])return;this[_0x5b7bc0(0x439)]=DragonbonesManager[_0x5b7bc0(0x421)](_0x17a95f['battler']),this['addChild'](this[_0x5b7bc0(0x439)]);},Sprite_BattleGridMoveCursor['prototype'][_0x4e2d80(0x30b)]=function(){const _0x5b9275=_0x4e2d80;if(!Imported['VisuMZ_2_DragonbonesUnion'])return;const _0x4ab3a1=BattleManager[_0x5b9275(0x70c)]();if(!_0x4ab3a1)return;if(!this[_0x5b9275(0x439)])return;const _0x291223=_0x4ab3a1[_0x5b9275(0x645)]();if(!_0x291223)return;const _0x28b6a8=_0x291223[_0x5b9275(0x439)];if(!_0x28b6a8)return;this[_0x5b9275(0x439)]['x']=_0x28b6a8['x'],this['_dragonbones']['y']=_0x28b6a8['y'],this[_0x5b9275(0x439)][_0x5b9275(0x516)]['x']=_0x28b6a8[_0x5b9275(0x516)]['x'],this[_0x5b9275(0x439)][_0x5b9275(0x516)]['y']=_0x28b6a8[_0x5b9275(0x516)]['y'],this[_0x5b9275(0x439)][_0x5b9275(0x5b4)][_0x5b9275(0x348)](_0x28b6a8[_0x5b9275(0x5b4)][_0x5b9275(0x139)]),this[_0x5b9275(0x439)][_0x5b9275(0x5b4)]['lastAnimationState'][_0x5b9275(0x3fb)]=_0x28b6a8[_0x5b9275(0x5b4)]['lastAnimationState'][_0x5b9275(0x3fb)],this[_0x5b9275(0x439)][_0x5b9275(0x2ac)]=0x0;},Sprite_BattleGridMoveCursor[_0x4e2d80(0x6a9)][_0x4e2d80(0x1b7)]=function(){const _0x1ff5fb=_0x4e2d80,_0x51cd4b=BattleManager[_0x1ff5fb(0x70c)]();if(!_0x51cd4b)return;if(!this[_0x1ff5fb(0x6a4)]())return;const _0x551cbf=Spriteset_Battle[_0x1ff5fb(0x6d5)],_0x42d248=this[_0x1ff5fb(0x6a4)]()[_0x1ff5fb(0x6bf)](),_0x13291d=_0x42d248%BattleManager[_0x1ff5fb(0x646)]()+0x1,_0x1690b8=Math['floor'](_0x42d248/BattleManager['maxRanks']())+0x1,_0x3baa70=VisuMZ[_0x1ff5fb(0x398)][_0x1ff5fb(0x254)](!![],_0x13291d,_0x1690b8);this['x']=_0x3baa70['x']+_0x551cbf[_0x1ff5fb(0x68a)],this['y']=_0x3baa70['y']+_0x551cbf[_0x1ff5fb(0x3d7)];const _0x57a89f=VisuMZ[_0x1ff5fb(0x2ea)][_0x1ff5fb(0x531)];this['x']+=_0x57a89f[_0x1ff5fb(0x414)]['OffsetX']||0x0,this['y']+=_0x57a89f['Actor'][_0x1ff5fb(0x1bc)]||0x0;},Sprite_BattleGridMoveCursor[_0x4e2d80(0x6a9)][_0x4e2d80(0x266)]=function(){const _0x405e87=_0x4e2d80;if(!this[_0x405e87(0x6a4)]())return;const _0xe83a17=this['targetWindow']()[_0x405e87(0x54a)]()?_0x405e87(0x543):_0x405e87(0x1c1),_0x3297b7=Sprite_BattleGridMoveCursor[_0x405e87(0x36f)][_0xe83a17];this[_0x405e87(0x672)]=_0x3297b7[_0x405e87(0x672)]??0x1,this['setColorTone'](_0x3297b7['toneColor']),this[_0x405e87(0x1e7)]=_0x3297b7[_0x405e87(0x1e7)];},Spriteset_Battle[_0x4e2d80(0x6d5)]={'maxDistanceX':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x548)][_0x4e2d80(0x5c0)]??0x400,'differenceX':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['GridField']['differenceX']??0xc0,'distanceY':VisuMZ[_0x4e2d80(0x398)]['Settings']['GridField']['distanceY']??0xa0,'weightMod':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x548)][_0x4e2d80(0x63a)]??1.2,'spaceBetween':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x548)][_0x4e2d80(0x653)]??0x1,'nodeOffsetX':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x548)][_0x4e2d80(0x690)]??0x0,'nodeOffsetY':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x548)][_0x4e2d80(0x1d4)]??0x18,'actorOffsetX':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x548)]['actorOffsetX']??0x0,'actorOffsetY':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x548)][_0x4e2d80(0x3d7)]??+0x2,'enemyOffsetX':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x548)][_0x4e2d80(0x4f8)]??0x0,'enemyOffsetY':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x548)][_0x4e2d80(0x2b9)]??0x4,'blinkInputUser':VisuMZ['BattleGridSystem']['Settings']['GridField'][_0x4e2d80(0x299)]??!![],'blinkInputColor':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['GridField'][_0x4e2d80(0x49c)]??[0x10,0xff,0xff,0x40],'outlineFilter':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x548)][_0x4e2d80(0x580)]??!![],'innerColor':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x548)][_0x4e2d80(0x528)]??0x0,'innerThick':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x548)][_0x4e2d80(0x16f)]??1.5,'outerColor':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x548)]['outlineOuterColor']??0xffffff,'outerThick':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x548)][_0x4e2d80(0x63c)]??1.5,'activeWindowBattlerOpacityRate':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)]['activeWindowBattlerOpacityRate']??0.4},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x4e8)]=Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x14f)],Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x14f)]=function(){const _0x14cf2c=_0x4e2d80;VisuMZ[_0x14cf2c(0x398)][_0x14cf2c(0x4e8)][_0x14cf2c(0x25d)](this),BattleManager[_0x14cf2c(0x2ae)]()&&this[_0x14cf2c(0x280)]();},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x321)]=Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x2eb)],Spriteset_Battle['prototype'][_0x4e2d80(0x2eb)]=function(){const _0x5b7c24=_0x4e2d80;BattleManager['isUsingGridSystem']()&&(this[_0x5b7c24(0x6d7)](),this[_0x5b7c24(0x544)]()),VisuMZ[_0x5b7c24(0x398)][_0x5b7c24(0x321)][_0x5b7c24(0x25d)](this);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x570)]=Spriteset_Battle['prototype']['targetBattlerContainerOpacity'],Spriteset_Battle[_0x4e2d80(0x6a9)]['targetBattlerContainerOpacity']=function(){const _0x5c6183=_0x4e2d80;let _0x26d152=VisuMZ[_0x5c6183(0x398)][_0x5c6183(0x570)]['call'](this);if(BattleManager[_0x5c6183(0x2ae)]()){const _0x55ab52=SceneManager['_scene'];_0x55ab52&&_0x55ab52[_0x5c6183(0x168)]&&_0x55ab52['isAnyGridWindowActive']()&&(_0x26d152*=Spriteset_Battle[_0x5c6183(0x6d5)][_0x5c6183(0x265)]);}return Math[_0x5c6183(0x72b)](_0x26d152);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x369)]=Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x3d2)],Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x3d2)]=function(){const _0x1fba54=_0x4e2d80;if(BattleManager[_0x1fba54(0x2ae)]())return![];return VisuMZ['BattleGridSystem'][_0x1fba54(0x369)][_0x1fba54(0x25d)](this);},Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x6d7)]=function(){const _0x3cb353=_0x4e2d80;this[_0x3cb353(0x26e)](),this['createBattleGridContainerFilter'](),this[_0x3cb353(0x3c9)]();},Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x26e)]=function(){const _0x32ef2c=_0x4e2d80;this[_0x32ef2c(0x40c)]=new Sprite(),this[_0x32ef2c(0x40c)]['x']=Graphics[_0x32ef2c(0x2db)]/0x2,this['_battleGridContainer']['x']+=(Graphics[_0x32ef2c(0x610)]-Graphics[_0x32ef2c(0x2db)])/0x2,this[_0x32ef2c(0x40c)]['y']=Graphics[_0x32ef2c(0x475)]/0x2,this[_0x32ef2c(0x40c)]['y']+=(Graphics[_0x32ef2c(0x298)]-Graphics[_0x32ef2c(0x475)])/0x2,this[_0x32ef2c(0x40c)]['y']-=this['battleFieldOffsetY'](),this[_0x32ef2c(0x40c)]['bitmap']=new Bitmap(Graphics[_0x32ef2c(0x2db)],Graphics['boxHeight']),this['_battleGridContainer']['anchor']['x']=0.5,this[_0x32ef2c(0x40c)]['anchor']['y']=0.5,this['_baseSprite'][_0x32ef2c(0x1d7)](this[_0x32ef2c(0x40c)]);},Spriteset_Battle[_0x4e2d80(0x6a9)]['createBattleGridContainerFilter']=function(){const _0x844a45=_0x4e2d80;if(!PIXI['filters'][_0x844a45(0x4e6)])return;if(!Spriteset_Battle[_0x844a45(0x6d5)][_0x844a45(0x1ee)])return;const _0x19c59c=this['_battleGridContainer'];_0x19c59c[_0x844a45(0x5e9)]=_0x19c59c[_0x844a45(0x5e9)]||[];const _0x55d2af=Spriteset_Battle[_0x844a45(0x6d5)];this['_battleGridContainerInnerOutline']=new PIXI['filters'][(_0x844a45(0x4e6))](),_0x19c59c[_0x844a45(0x5e9)][_0x844a45(0x482)](this[_0x844a45(0x357)]),this['_battleGridContainerInnerOutline'][_0x844a45(0x57e)]=_0x55d2af[_0x844a45(0x486)],this['_battleGridContainerInnerOutline'][_0x844a45(0x522)]=_0x55d2af[_0x844a45(0x206)],this[_0x844a45(0x26d)]=new PIXI['filters'][(_0x844a45(0x4e6))](),_0x19c59c[_0x844a45(0x5e9)][_0x844a45(0x482)](this['_battleGridContainerOuterOutline']),this[_0x844a45(0x26d)][_0x844a45(0x57e)]=_0x55d2af[_0x844a45(0x4d5)],this[_0x844a45(0x26d)][_0x844a45(0x522)]=_0x55d2af[_0x844a45(0x4ee)];},Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x3c9)]=function(){const _0x47c5a6=_0x4e2d80,_0x535d03=BattleManager[_0x47c5a6(0x21f)](),_0x147124=BattleManager['maxRanks']();for(let _0x3ca058=0x1;_0x3ca058<=_0x147124;_0x3ca058++){for(let _0xe4b90=0x1;_0xe4b90<=_0x535d03;_0xe4b90++){for(let _0x401229=0x0;_0x401229<0x2;_0x401229++){const _0x2ce3dd=_0x401229===0x0,_0x54bc9b=new Sprite_BattleGridNode(_0x2ce3dd,_0x3ca058,_0xe4b90);this[_0x47c5a6(0x40c)]['addChild'](_0x54bc9b);}}}},VisuMZ['BattleGridSystem'][_0x4e2d80(0x4d6)]=function(_0x55bb7b){const _0x52ecca=_0x4e2d80,_0x100a25=_0x55bb7b['isActor'](),_0x5d58e8=_0x55bb7b[_0x52ecca(0x51e)](),_0x2d6caf=_0x5d58e8['map'](_0x3eff9d=>_0x3eff9d[0x0]),_0x25621a=(Math[_0x52ecca(0x23c)](..._0x2d6caf)+Math[_0x52ecca(0x485)](..._0x2d6caf))/0x2,_0x9d3bbc=_0x5d58e8[_0x52ecca(0x335)](_0x1886f4=>_0x1886f4[0x1]),_0x26e345=Math[_0x52ecca(0x23c)](..._0x9d3bbc);return this[_0x52ecca(0x254)](_0x100a25,_0x25621a,_0x26e345);},VisuMZ['BattleGridSystem']['getGridPositionPoint']=function(_0x49f2f5,_0x3e7b1a,_0x2d7bdb){const _0x88497c=_0x4e2d80,_0x598b99=Spriteset_Battle[_0x88497c(0x6d5)],_0xd8c58c=_0x598b99[_0x88497c(0x653)],_0x2d0a6a=BattleManager[_0x88497c(0x21f)](),_0x4a8533=BattleManager[_0x88497c(0x646)]()*0x2+_0xd8c58c,_0x2f5514=_0x2d7bdb-0x1,_0x26adb3=_0x49f2f5?_0x3e7b1a-0x1+_0xd8c58c+BattleManager[_0x88497c(0x646)]():BattleManager[_0x88497c(0x646)]()-_0x3e7b1a,_0x1d1d47=_0x2d0a6a===0x1?0x1:(_0x2f5514/(_0x2d0a6a-0x1))**_0x598b99[_0x88497c(0x63a)],_0x32e2ec=_0x598b99[_0x88497c(0x2aa)],_0x3a352f=_0x598b99[_0x88497c(0x5c0)]-_0x32e2ec,_0x13fc1c=(_0x32e2ec*_0x1d1d47+_0x3a352f)/-0x2,_0x11eade=(_0x32e2ec*_0x1d1d47+_0x3a352f)/0x2,_0x5177eb=_0x26adb3/(_0x4a8533-0x1);let _0x1b60a4=(0x1-_0x5177eb)*_0x13fc1c+_0x5177eb*_0x11eade+_0x598b99[_0x88497c(0x690)];const _0x4c4672=_0x598b99[_0x88497c(0x3ba)],_0x53a044=_0x2d0a6a>0x1?_0x4c4672/-0x2:0x0,_0x590b44=_0x2d0a6a>0x1?_0x4c4672/0x2:0x0;let _0x5abcd0=(0x1-_0x1d1d47)*_0x53a044+_0x1d1d47*_0x590b44+_0x598b99['nodeOffsetY'];return Imported[_0x88497c(0x405)]&&BattleManager['isUsingSideviewUiLayout']()&&(_0x1b60a4+=Sprite_Battler[_0x88497c(0x73c)],_0x5abcd0+=Sprite_Battler['SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_Y']),{'x':Math[_0x88497c(0x72b)](_0x1b60a4),'y':Math['ceil'](_0x5abcd0)};},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x54e)]=Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x54c)],Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x54c)]=function(){const _0x27af4f=_0x4e2d80;if(BattleManager['isUsingGridSystem']())$gameTroop[_0x27af4f(0x6e4)]();VisuMZ[_0x27af4f(0x398)][_0x27af4f(0x54e)][_0x27af4f(0x25d)](this);if(BattleManager['isUsingGridSystem']())this[_0x27af4f(0x556)]();},Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x556)]=function(){const _0x41eff4=_0x4e2d80,_0x597208=$gameTemp[_0x41eff4(0x3eb)](),_0x3d9081=new Sprite_Enemy(_0x597208);this[_0x41eff4(0x3f6)][_0x41eff4(0x1d7)](_0x3d9081),this[_0x41eff4(0x536)][_0x41eff4(0x482)](_0x3d9081);},Spriteset_Battle[_0x4e2d80(0x6a9)]['createBattleGridNodeIcons']=function(){const _0x58dd05=_0x4e2d80;this['createBattleGridIconContainer'](),this[_0x58dd05(0x182)]();},Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x497)]=function(){const _0x2f0e0e=_0x4e2d80;this[_0x2f0e0e(0x4e7)]=new Sprite(),this[_0x2f0e0e(0x567)]['addChild'](this[_0x2f0e0e(0x4e7)]),this[_0x2f0e0e(0x4e7)]['x']=this[_0x2f0e0e(0x40c)]['x'],this[_0x2f0e0e(0x4e7)]['y']=this[_0x2f0e0e(0x40c)]['y'],this['_battleGridIconContainer'][_0x2f0e0e(0x2d9)]['x']=this[_0x2f0e0e(0x4e7)][_0x2f0e0e(0x2d9)]['x'],this[_0x2f0e0e(0x4e7)][_0x2f0e0e(0x2d9)]['y']=this[_0x2f0e0e(0x4e7)][_0x2f0e0e(0x2d9)]['y'];},Spriteset_Battle[_0x4e2d80(0x6a9)]['createBattleGridNodeIconSprites']=function(){const _0x59bd3b=_0x4e2d80,_0x2d425c=BattleManager[_0x59bd3b(0x21f)](),_0x592f54=BattleManager[_0x59bd3b(0x646)]();for(let _0x54c92d=0x1;_0x54c92d<=_0x592f54;_0x54c92d++){for(let _0x45430e=0x1;_0x45430e<=_0x2d425c;_0x45430e++){for(let _0x502b0f=0x0;_0x502b0f<0x2;_0x502b0f++){const _0x58ad34=_0x502b0f===0x0;{const _0x27e495=new Sprite_BattleGridPassives(_0x58ad34,_0x54c92d,_0x45430e);this['_battleGridIconContainer'][_0x59bd3b(0x1d7)](_0x27e495);}{const _0x14bc36=new Sprite_BattleGridTrigger(_0x58ad34,_0x54c92d,_0x45430e);this[_0x59bd3b(0x4e7)][_0x59bd3b(0x1d7)](_0x14bc36);}}}}},Spriteset_Battle[_0x4e2d80(0x6a9)]['createBattleGridCursors']=function(){const _0x1e047b=_0x4e2d80;if(!Sprite_BattleGridPassives[_0x1e047b(0x36f)][_0x1e047b(0x2ab)])return;this[_0x1e047b(0x48e)](),this['createBattleGridMoveCursor']();},Spriteset_Battle[_0x4e2d80(0x6a9)]['createBattleGridCursorContainer']=function(){const _0x478f15=_0x4e2d80;this[_0x478f15(0x1ae)]=new Sprite(),this['_baseSprite'][_0x478f15(0x1d7)](this[_0x478f15(0x1ae)]),this[_0x478f15(0x1ae)]['x']=this[_0x478f15(0x40c)]['x'],this['_battleGridCursorContainer']['y']=this['_battleGridContainer']['y'],this['_battleGridCursorContainer'][_0x478f15(0x2d9)]['x']=this[_0x478f15(0x40c)][_0x478f15(0x2d9)]['x'],this[_0x478f15(0x1ae)][_0x478f15(0x2d9)]['y']=this[_0x478f15(0x40c)][_0x478f15(0x2d9)]['y'];},Spriteset_Battle['prototype'][_0x4e2d80(0x210)]=function(){const _0x424c5f=_0x4e2d80;this['_battleGridMoveCursor']=new Sprite_BattleGridMoveCursor(),this[_0x424c5f(0x1ae)]['addChild'](this[_0x424c5f(0x449)]);},VisuMZ[_0x4e2d80(0x398)]['Spriteset_Battle_initialize']=Spriteset_Battle[_0x4e2d80(0x6a9)]['initialize'],Spriteset_Battle['prototype'][_0x4e2d80(0x55e)]=function(){const _0x1caed7=_0x4e2d80;VisuMZ['BattleGridSystem'][_0x1caed7(0x54f)]['call'](this),this[_0x1caed7(0x31a)]=[];},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x2f3)]=Spriteset_Battle[_0x4e2d80(0x6a9)]['removeAllAnimations'],Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x281)]=function(){const _0xc06bff=_0x4e2d80;VisuMZ['BattleGridSystem'][_0xc06bff(0x2f3)]['call'](this);if(this[_0xc06bff(0x31a)])for(const _0x4ed1e1 of this[_0xc06bff(0x31a)]){this['removeNodeTriggerAnimation'](_0x4ed1e1);}},VisuMZ['BattleGridSystem'][_0x4e2d80(0x447)]=Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x30a)],Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x30a)]=function(){const _0x197742=_0x4e2d80;VisuMZ[_0x197742(0x398)]['Spriteset_Battle_updateAnimations'][_0x197742(0x25d)](this),this[_0x197742(0x142)]();},Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x142)]=function(){const _0x279d15=_0x4e2d80;for(const _0x2070f1 of this[_0x279d15(0x31a)]){!_0x2070f1[_0x279d15(0x35c)]()&&this[_0x279d15(0x5b0)](_0x2070f1);}this[_0x279d15(0x4f0)]();},Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x142)]=function(){const _0x53fabe=_0x4e2d80;for(const _0x35e369 of this['_nodetriggerAnimationSprites']){!_0x35e369[_0x53fabe(0x35c)]()&&this[_0x53fabe(0x5b0)](_0x35e369);}this[_0x53fabe(0x4f0)]();},Spriteset_Battle['prototype'][_0x4e2d80(0x4f0)]=function(){const _0x2dcd90=_0x4e2d80;for(;;){const _0x149b00=$gameTemp[_0x2dcd90(0x16d)]();if(_0x149b00)this[_0x2dcd90(0x481)](_0x149b00);else break;}},Spriteset_Battle[_0x4e2d80(0x6a9)]['createNodeTriggerAnimation']=function(_0x320f50){const _0xcc2625=_0x4e2d80,_0xb130b4=$dataAnimations[_0x320f50[_0xcc2625(0x24a)]],_0x8df758=_0x320f50[_0xcc2625(0x5c9)],_0x39355a=_0x320f50[_0xcc2625(0x25e)],_0x47d9d2=_0x320f50[_0xcc2625(0x592)];let _0x41d4bd=this[_0xcc2625(0x174)]();const _0x21a2f4=this['animationNextDelay']();if(this[_0xcc2625(0x269)](_0xb130b4))for(const _0x1ea368 of _0x8df758){this[_0xcc2625(0x4b5)]([_0x1ea368],_0xb130b4,_0x39355a,_0x41d4bd,_0x47d9d2),_0x41d4bd+=_0x21a2f4;}else this[_0xcc2625(0x4b5)](_0x8df758,_0xb130b4,_0x39355a,_0x41d4bd,_0x47d9d2);},Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x4b5)]=function(_0x551477,_0x31154,_0x892823,_0x1ad015,_0x33ec27){const _0xe53194=_0x4e2d80,_0x54f1ab=this[_0xe53194(0x303)](_0x31154),_0x17ef5a=new(_0x54f1ab?Sprite_AnimationMV:Sprite_Animation)(),_0x5ee130=this[_0xe53194(0x4a9)](_0x551477);this[_0xe53194(0x6ac)](_0x551477[0x0])&&(_0x892823=!_0x892823);_0x17ef5a[_0xe53194(0x332)]=_0x551477,_0x17ef5a[_0xe53194(0x510)](_0x5ee130,_0x31154,_0x892823,_0x1ad015),_0x17ef5a[_0xe53194(0x605)](_0x33ec27),this['addAnimationSpriteToContainer'](_0x17ef5a);if(this[_0xe53194(0x450)])this[_0xe53194(0x450)][_0xe53194(0x3c8)](_0x17ef5a);this[_0xe53194(0x31a)][_0xe53194(0x482)](_0x17ef5a);},Spriteset_Battle[_0x4e2d80(0x6a9)]['removeNodeTriggerAnimation']=function(_0x24539c){const _0x1407ff=_0x4e2d80;this[_0x1407ff(0x31a)]['remove'](_0x24539c),this[_0x1407ff(0x219)](_0x24539c);for(const _0x9a52dd of _0x24539c[_0x1407ff(0x332)]){_0x9a52dd[_0x1407ff(0x6b8)]&&_0x9a52dd['endAnimation']();}_0x24539c[_0x1407ff(0x435)]();},Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x18d)]=function(){const _0x581e98=_0x4e2d80;for(const _0x1a48ad of this[_0x581e98(0x31a)]){this[_0x581e98(0x5b0)](_0x1a48ad);}},Spriteset_Battle[_0x4e2d80(0x6a9)][_0x4e2d80(0x52c)]=function(){const _0x1e1f90=_0x4e2d80;return this[_0x1e1f90(0x31a)]['length']>0x0;},Window_Base[_0x4e2d80(0x6d5)]={'drawUsableNodes':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Window']['drawUsableNodes']??!![],'drawTargetNodes':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)]['drawTargetNodes']??!![],'radiusReduce':Math[_0x4e2d80(0x6af)](VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x2cd)]??0.5),'okayColor':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)][_0x4e2d80(0x1ed)]??0x0,'notColor':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x726)]??0x7,'allyColor':VisuMZ['BattleGridSystem']['Settings']['Window'][_0x4e2d80(0x6db)]??0x17,'enemyColor':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x2c1)]??0x2},Window_Base[_0x4e2d80(0x6a9)][_0x4e2d80(0x676)]=function(){const _0x5d1ed9=_0x4e2d80;return Window_Base[_0x5d1ed9(0x6d5)][_0x5d1ed9(0x58c)];},Window_Base[_0x4e2d80(0x6a9)][_0x4e2d80(0x24e)]=function(){const _0x14c33d=_0x4e2d80;return Window_Base[_0x14c33d(0x6d5)][_0x14c33d(0x1b8)];},Window_Base[_0x4e2d80(0x6a9)][_0x4e2d80(0x293)]=function(_0x5008dc,_0x3fb409,_0x37791b,_0x50835b,_0x5c3a61){const _0x408ebc=_0x4e2d80;if(!_0x3fb409)return;if(DataManager[_0x408ebc(0x6b0)](_0x3fb409))return;if($gameParty[_0x408ebc(0x315)]()&&!BattleManager[_0x408ebc(0x2ae)]())return;if(!_0x5008dc)_0x5008dc=$gameParty[_0x408ebc(0x315)]()?BattleManager[_0x408ebc(0x70c)]():$gameParty[_0x408ebc(0x23b)]()[0x0];_0x37791b+=_0x5c3a61,this[_0x408ebc(0x676)]()&&(_0x37791b-=this[_0x408ebc(0x34d)](),this[_0x408ebc(0x627)](_0x5008dc,_0x3fb409,_0x37791b,_0x50835b),_0x37791b-=this[_0x408ebc(0x6aa)]()),this['canDrawTargetGridNodes']()&&(_0x37791b-=this[_0x408ebc(0x34d)](),this[_0x408ebc(0x521)](_0x5008dc,_0x3fb409,_0x37791b,_0x50835b),_0x37791b-=this[_0x408ebc(0x6aa)]());},Window_Base[_0x4e2d80(0x6a9)][_0x4e2d80(0x157)]=function(){const _0x2dcff7=_0x4e2d80;if(!BattleManager[_0x2dcff7(0x2ae)]())return 0x0;const _0x29f55a=this['lineHeight']()+this[_0x2dcff7(0x6aa)]();let _0x5b0dde=0x0;return this[_0x2dcff7(0x676)]()&&(_0x5b0dde+=_0x29f55a),this[_0x2dcff7(0x24e)]()&&(_0x5b0dde+=_0x29f55a),_0x5b0dde;},Window_Base[_0x4e2d80(0x6a9)]['drawUsableGridNodes']=function(_0x51fbe7,_0x3149a4,_0x3f330f,_0xc692c9){const _0x4c50c3=_0x4e2d80;if(!_0x51fbe7)return;const _0x1bcb4b=Window_Base[_0x4c50c3(0x6d5)],_0x22d255=_0x51fbe7[_0x4c50c3(0x6a1)](),_0x219204=BattleManager[_0x4c50c3(0x646)](),_0x4c29e3=BattleManager[_0x4c50c3(0x21f)](),_0x42bc7d=Math[_0x4c50c3(0x23c)](_0x219204,_0x4c29e3),_0x2d5793=Math[_0x4c50c3(0x4f9)](this[_0x4c50c3(0x34d)]()/_0x42bc7d),_0x32f3c0=_0x2d5793/0x2,_0x16101a=_0x32f3c0-_0x1bcb4b[_0x4c50c3(0x2cd)],_0xdfa842=_0x4c29e3*_0x2d5793;_0xc692c9+=Math['floor']((this[_0x4c50c3(0x34d)]()-_0xdfa842)/0x2);const _0x3a6354=ColorManager[_0x4c50c3(0x525)](_0x1bcb4b[_0x4c50c3(0x1ed)]),_0x50681=ColorManager[_0x4c50c3(0x525)](_0x1bcb4b[_0x4c50c3(0x726)]);let _0x263abf=_0xc692c9,_0x2db865=_0x3f330f;for(let _0x2c3625=0x1;_0x2c3625<=_0x4c29e3;_0x2c3625++){_0x2db865=_0x3f330f;for(let _0x18251f=0x1;_0x18251f<=_0x219204;_0x18251f++){const _0x55d4a0=DataManager['meetsGridNodeUsableConditions'](_0x3149a4,_0x51fbe7,_0x22d255,_0x18251f,_0x2c3625);this[_0x4c50c3(0x6d8)][_0x4c50c3(0x5ce)](_0x2db865+_0x32f3c0,_0x263abf+_0x32f3c0,_0x32f3c0,ColorManager['outlineColor']());const _0x52c459=_0x55d4a0?_0x3a6354:_0x50681;this[_0x4c50c3(0x6d8)][_0x4c50c3(0x5ce)](_0x2db865+_0x32f3c0,_0x263abf+_0x32f3c0,_0x16101a,_0x52c459),_0x2db865+=_0x2d5793;}_0x263abf+=_0x2d5793;}},Window_Base[_0x4e2d80(0x6a9)][_0x4e2d80(0x521)]=function(_0x413474,_0x562d25,_0x16ff02,_0x53f749){const _0x1854df=_0x4e2d80;if(!_0x413474)return;const _0x48583f=Window_Base[_0x1854df(0x6d5)],_0x519332=BattleManager[_0x1854df(0x646)](),_0x2cb701=BattleManager[_0x1854df(0x21f)](),_0x336a6a=Math[_0x1854df(0x23c)](_0x519332,_0x2cb701),_0x409ec3=Math['floor'](this[_0x1854df(0x34d)]()/_0x336a6a),_0x28d99e=_0x409ec3/0x2,_0x49b121=_0x28d99e-_0x48583f['radiusReduce'],_0x4df41e=_0x2cb701*_0x409ec3;_0x53f749+=Math['floor']((this['lineHeight']()-_0x4df41e)/0x2);const _0x13373b=BattleManager['actor']()||SceneManager['_scene'][_0x1854df(0x6ab)]||$gameParty[_0x1854df(0x23b)]()[0x0];if(SceneManager[_0x1854df(0x2cb)]()){if(_0x13373b[_0x1854df(0x68e)]())_0x13373b['moveToStartingGridNode']();}$gameTemp[_0x1854df(0x368)]=$gameTemp[_0x1854df(0x368)]||new Game_Action(_0x13373b);const _0x237cd1=$gameTemp[_0x1854df(0x368)];_0x237cd1[_0x1854df(0x23a)](),_0x237cd1[_0x1854df(0x223)](_0x413474);if(DataManager[_0x1854df(0x64d)](_0x562d25))_0x237cd1[_0x1854df(0x41a)](_0x562d25['id']);if(DataManager[_0x1854df(0x214)](_0x562d25))_0x237cd1[_0x1854df(0x6c1)](_0x562d25['id']);const _0x2a2728=_0x237cd1[_0x1854df(0x3b5)]();let _0x42b85c=_0x237cd1['isForFriend']();_0x237cd1[_0x1854df(0x15d)]()&&(_0x237cd1['item']()[_0x1854df(0x209)]['match'](/(?:ENEMY|FOE) OR (?:ALLY|FRIEND)/i)&&(_0x42b85c=![]));const _0x41f0e4=_0x42b85c?$gameParty:$gameTroop,_0x403a07=ColorManager[_0x1854df(0x525)](_0x42b85c?_0x48583f[_0x1854df(0x6db)]:_0x48583f[_0x1854df(0x2c1)]),_0x3530f4=ColorManager[_0x1854df(0x525)](_0x48583f[_0x1854df(0x726)]);let _0x2704ce=_0x53f749,_0x4e3703=_0x42b85c?_0x16ff02:_0x16ff02+(_0x519332-0x1)*_0x409ec3;for(let _0x16ff8f=0x1;_0x16ff8f<=_0x2cb701;_0x16ff8f++){_0x4e3703=_0x42b85c?_0x16ff02:_0x16ff02+(_0x519332-0x1)*_0x409ec3;for(let _0x4604e7=0x1;_0x4604e7<=_0x519332;_0x4604e7++){const _0x299226=VisuMZ[_0x1854df(0x398)][_0x1854df(0x44c)](_0x2a2728,_0x41f0e4,_0x4604e7,_0x16ff8f);this['contents'][_0x1854df(0x5ce)](_0x4e3703+_0x28d99e,_0x2704ce+_0x28d99e,_0x28d99e,ColorManager[_0x1854df(0x3ac)]());const _0x4e1b96=_0x299226?_0x403a07:_0x3530f4;this[_0x1854df(0x6d8)][_0x1854df(0x5ce)](_0x4e3703+_0x28d99e,_0x2704ce+_0x28d99e,_0x49b121,_0x4e1b96),_0x4e3703+=_0x28d99e*0x2*(_0x42b85c?0x1:-0x1);}_0x2704ce+=_0x28d99e*0x2;}},VisuMZ[_0x4e2d80(0x398)]['Window_MenuCommand_addOriginalCommands']=Window_MenuCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x594)],Window_MenuCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x594)]=function(){const _0x3eb770=_0x4e2d80;VisuMZ[_0x3eb770(0x398)]['Window_MenuCommand_addOriginalCommands'][_0x3eb770(0x25d)](this),this[_0x3eb770(0x39d)]();},Window_MenuCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x39d)]=function(){const _0x579177=_0x4e2d80;if(!this['addBattleGridTacticsCommandAutomatically']())return;if(!this[_0x579177(0x53e)]())return;const _0x3c6cc8=TextManager[_0x579177(0x2c9)],_0x3d5c7f=this[_0x579177(0x3dd)]();this[_0x579177(0x431)](_0x3c6cc8,_0x579177(0x4c0),_0x3d5c7f);},Window_MenuCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x1c9)]=function(){const _0x1053b3=_0x4e2d80;return Imported[_0x1053b3(0x2a2)]?![]:!![];},Window_MenuCommand['prototype']['isBattleGridTacticsCommandVisible']=function(){const _0xddfe11=_0x4e2d80;if(!BattleManager[_0xddfe11(0x2ae)]())return![];if(!BattleManager[_0xddfe11(0x38e)]())return![];return $gameSystem[_0xddfe11(0x38d)]();},Window_MenuCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x3dd)]=function(){const _0xd0c812=_0x4e2d80;if($gameParty[_0xd0c812(0x6bc)]!==undefined){if(!BattleManager[_0xd0c812(0x2c3)]())return![];}if($gameParty[_0xd0c812(0x68b)]!==undefined){if(!BattleManager[_0xd0c812(0x2c3)]())return![];}return $gameSystem[_0xd0c812(0x723)]();},Window_SkillList[_0x4e2d80(0x6d5)]={'drawUsableNodes':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)]['skillListDrawUsableNodes']??!![],'drawTargetNodes':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x155)]??!![]},Window_SkillList['prototype'][_0x4e2d80(0x676)]=function(){const _0x430212=_0x4e2d80;return Window_SkillList['BATTLE_GRID_SYSTEM'][_0x430212(0x58c)];},Window_SkillList[_0x4e2d80(0x6a9)][_0x4e2d80(0x24e)]=function(){const _0x323668=_0x4e2d80;return Window_SkillList[_0x323668(0x6d5)][_0x323668(0x1b8)];},VisuMZ['BattleGridSystem'][_0x4e2d80(0x6b3)]=Window_SkillList[_0x4e2d80(0x6a9)][_0x4e2d80(0x282)],Window_SkillList[_0x4e2d80(0x6a9)][_0x4e2d80(0x282)]=function(){const _0x4fa213=_0x4e2d80;return VisuMZ[_0x4fa213(0x398)][_0x4fa213(0x6b3)][_0x4fa213(0x25d)](this)+this['reduceWidthForNodeData']();},VisuMZ['BattleGridSystem'][_0x4e2d80(0x313)]=Window_SkillList[_0x4e2d80(0x6a9)][_0x4e2d80(0x1f5)],Window_SkillList[_0x4e2d80(0x6a9)][_0x4e2d80(0x1f5)]=function(_0x2efbe7,_0x40edfd,_0x4a5d76,_0x409c6c){const _0x5d8d33=_0x4e2d80,_0x5710d5=_0x409c6c;!DataManager[_0x5d8d33(0x6b0)](_0x2efbe7)&&(_0x409c6c-=this['reduceWidthForNodeData']()),VisuMZ['BattleGridSystem'][_0x5d8d33(0x313)][_0x5d8d33(0x25d)](this,_0x2efbe7,_0x40edfd,_0x4a5d76,_0x409c6c),this['drawGridNodes'](this[_0x5d8d33(0x6ab)],_0x2efbe7,_0x40edfd,_0x4a5d76,_0x5710d5);},Window_ItemList[_0x4e2d80(0x6d5)]={'drawUsableNodes':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)]['itemListDrawUsableNodes']??!![],'drawTargetNodes':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x709)]??!![]},Window_ItemList['prototype'][_0x4e2d80(0x676)]=function(){const _0x55b1cd=_0x4e2d80;if(this[_0x55b1cd(0x623)]())return![];return Window_ItemList[_0x55b1cd(0x6d5)]['drawUsableNodes'];},Window_ItemList[_0x4e2d80(0x6a9)][_0x4e2d80(0x24e)]=function(){const _0x260166=_0x4e2d80;if(this['ignoreGridNodes']())return![];return Window_ItemList[_0x260166(0x6d5)][_0x260166(0x1b8)];},Window_ItemList[_0x4e2d80(0x6a9)][_0x4e2d80(0x623)]=function(){const _0x57623d=_0x4e2d80;if(this[_0x57623d(0x401)])return!![];if(this[_0x57623d(0x2a1)])return!![];if(this[_0x57623d(0x384)])return!![];if(Imported[_0x57623d(0x67d)]){if(SceneManager[_0x57623d(0x606)]())return!![];}return![];},Window_ShopSell[_0x4e2d80(0x6a9)][_0x4e2d80(0x623)]=function(){return!![];},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x3f8)]=Window_ItemList[_0x4e2d80(0x6a9)][_0x4e2d80(0x624)],Window_ItemList[_0x4e2d80(0x6a9)][_0x4e2d80(0x624)]=function(){const _0x432a81=_0x4e2d80;return VisuMZ[_0x432a81(0x398)][_0x432a81(0x3f8)][_0x432a81(0x25d)](this)+this[_0x432a81(0x157)]();},VisuMZ[_0x4e2d80(0x398)]['Window_ItemList_drawItemNumber']=Window_ItemList[_0x4e2d80(0x6a9)][_0x4e2d80(0x16b)],Window_ItemList[_0x4e2d80(0x6a9)][_0x4e2d80(0x16b)]=function(_0x51c54e,_0x180c52,_0x1e795f,_0xcfd6d6){const _0x1a5594=_0x4e2d80,_0x2639bf=_0xcfd6d6;DataManager[_0x1a5594(0x64d)](_0x51c54e)&&!DataManager[_0x1a5594(0x6b0)](_0x51c54e)&&(_0xcfd6d6-=this[_0x1a5594(0x157)]()),VisuMZ['BattleGridSystem'][_0x1a5594(0x365)][_0x1a5594(0x25d)](this,_0x51c54e,_0x180c52,_0x1e795f,_0xcfd6d6),DataManager[_0x1a5594(0x64d)](_0x51c54e)&&!DataManager[_0x1a5594(0x6b0)](_0x51c54e)&&this[_0x1a5594(0x293)](this[_0x1a5594(0x6ab)],_0x51c54e,_0x180c52,_0x1e795f,_0x2639bf);},Window_ShopStatus['SHOW_BATTLE_GRID_DATA']=VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x364)]['shopStatusShowData']??!![],VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x5de)]=Window_ShopStatus[_0x4e2d80(0x6a9)][_0x4e2d80(0x2a3)],Window_ShopStatus[_0x4e2d80(0x6a9)]['getItemScopeText']=function(){const _0x334f24=_0x4e2d80,_0x488e87='SCOPE';if(this[_0x334f24(0x3a3)][_0x488e87])return this[_0x334f24(0x3a3)][_0x488e87];const _0x4108e2=new Game_Action($gameActors[_0x334f24(0x70c)](0x1));_0x4108e2['_item'][_0x334f24(0x20a)](this[_0x334f24(0x198)]);if(_0x4108e2[_0x334f24(0x3aa)]())return TextManager[_0x334f24(0x287)];else{if(_0x4108e2['isForEmptyBattleGridNode']())return TextManager[_0x334f24(0x169)];else{if(_0x4108e2[_0x334f24(0x673)]()&&_0x4108e2[_0x334f24(0x1f9)]())return TextManager[_0x334f24(0x56e)];else{if(_0x4108e2['isForBattleGridNode']()&&_0x4108e2[_0x334f24(0x52b)]())return TextManager[_0x334f24(0x55f)];}}}return VisuMZ[_0x334f24(0x398)][_0x334f24(0x5de)]['call'](this);},VisuMZ[_0x4e2d80(0x398)]['Window_ShopStatus_drawItemCustomEntries']=Window_ShopStatus[_0x4e2d80(0x6a9)][_0x4e2d80(0x381)],Window_ShopStatus[_0x4e2d80(0x6a9)][_0x4e2d80(0x381)]=function(_0x40d2fd,_0x38d35c,_0x4289fa){const _0x5f54ac=_0x4e2d80;return _0x38d35c=this[_0x5f54ac(0x60a)](_0x40d2fd,_0x38d35c,_0x4289fa),_0x38d35c=VisuMZ[_0x5f54ac(0x398)][_0x5f54ac(0x225)][_0x5f54ac(0x25d)](this,_0x40d2fd,_0x38d35c,_0x4289fa),_0x38d35c;},Window_ShopStatus['prototype']['drawBattleGridItemData']=function(_0x52782f,_0x36149c,_0x1edfdf){const _0x14201f=_0x4e2d80;if(!BattleManager['isUsingGridSystem']())return _0x36149c;if(!Window_ShopStatus['SHOW_BATTLE_GRID_DATA'])return _0x36149c;if(!this[_0x14201f(0x24e)]()&&!this[_0x14201f(0x676)]())return _0x36149c;if(DataManager['isItemGridHidden'](this[_0x14201f(0x198)]))return _0x36149c;const _0x2fac8d=Math['floor'](_0x1edfdf/0x2);let _0x37e079=$gameActors[_0x14201f(0x70c)](0x1);$gameParty[_0x14201f(0x315)]()?_0x37e079=BattleManager['actor']()||_0x37e079:_0x37e079=SceneManager['_scene'][_0x14201f(0x6ab)]||_0x37e079;const _0x150b77=this[_0x14201f(0x34d)]()+this[_0x14201f(0x6aa)]();if(this[_0x14201f(0x24e)]()){const _0x5461ab=TextManager[_0x14201f(0x1b5)];let _0x46b140=_0x52782f,_0x3ead1e=_0x1edfdf;this[_0x14201f(0x676)]()&&(_0x3ead1e=_0x2fac8d),this[_0x14201f(0x6f7)](_0x5461ab,_0x46b140,_0x36149c,_0x3ead1e,!![],_0x14201f(0x278)),this['drawItemDarkRect'](_0x46b140,_0x36149c,_0x3ead1e),this['drawTargetGridNodes'](_0x37e079,this[_0x14201f(0x198)],_0x46b140+_0x3ead1e-_0x150b77,_0x36149c);}if(this[_0x14201f(0x676)]()){const _0x905528=TextManager[_0x14201f(0x451)];let _0x5d22de=_0x52782f,_0x1e2fb8=_0x1edfdf;this[_0x14201f(0x24e)]()&&(_0x5d22de=_0x52782f+_0x1edfdf-_0x2fac8d,_0x1e2fb8=_0x2fac8d),this[_0x14201f(0x6f7)](_0x905528,_0x5d22de,_0x36149c,_0x1e2fb8,!![],_0x14201f(0x278)),this[_0x14201f(0x422)](_0x5d22de,_0x36149c,_0x1e2fb8),this['drawUsableGridNodes'](_0x37e079,this[_0x14201f(0x198)],_0x5d22de+_0x1e2fb8-_0x150b77,_0x36149c);}return _0x36149c+=this[_0x14201f(0x34d)](),_0x36149c;},Window_ActorCommand[_0x4e2d80(0x6d5)]={'autoAddMoveCmd':VisuMZ['BattleGridSystem']['Settings'][_0x4e2d80(0x31c)][_0x4e2d80(0x2a0)]??!![],'showMoveCommand':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['MoveCommand'][_0x4e2d80(0x19f)]??!![],'moveIcon':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x31c)][_0x4e2d80(0x4a7)]??0x52,'drawUsableNodes':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x469)]??!![],'drawTargetNodes':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)][_0x4e2d80(0x634)]??!![]},Window_ActorCommand['prototype'][_0x4e2d80(0x676)]=function(){return Window_ActorCommand['BATTLE_GRID_SYSTEM']['drawUsableNodes'];},Window_ActorCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x24e)]=function(){const _0x289f0e=_0x4e2d80;return Window_ActorCommand[_0x289f0e(0x6d5)][_0x289f0e(0x1b8)];},VisuMZ[_0x4e2d80(0x398)]['Window_ActorCommand_drawSkillCost']=Window_ActorCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x1f5)],Window_ActorCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x1f5)]=function(_0x8a6cd2,_0x4b3370,_0xe52c61,_0x215a5d,_0x36d227){const _0x306624=_0x4e2d80;if(!_0x4b3370)return;const _0x204f38=_0x36d227;!DataManager['isItemGridHidden'](_0x4b3370)&&(_0x36d227-=this[_0x306624(0x157)]()),VisuMZ[_0x306624(0x398)][_0x306624(0x719)][_0x306624(0x25d)](this,_0x8a6cd2,_0x4b3370,_0xe52c61,_0x215a5d,_0x36d227),this[_0x306624(0x293)](this[_0x306624(0x6ab)],_0x4b3370,_0xe52c61,_0x215a5d,_0x204f38);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x4cc)]=Window_ActorCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x149)],Window_ActorCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x149)]=function(){const _0x515534=_0x4e2d80;VisuMZ[_0x515534(0x398)][_0x515534(0x4cc)][_0x515534(0x25d)](this),this[_0x515534(0x52d)]()&&this['addBattleGridMoveCommand']();},Window_ActorCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x52d)]=function(){const _0x5e648f=_0x4e2d80;if(!BattleManager[_0x5e648f(0x2ae)]())return![];if(!Window_ActorCommand[_0x5e648f(0x6d5)][_0x5e648f(0x2a0)])return![];if(!Window_ActorCommand[_0x5e648f(0x6d5)][_0x5e648f(0x19f)])return![];return this['findSymbol'](_0x5e648f(0x2b6))<0x0;},Window_ActorCommand[_0x4e2d80(0x6a9)]['removeBattleGridMoveCommand']=function(){const _0x5b28fc=_0x4e2d80;while(this[_0x5b28fc(0x6fb)](_0x5b28fc(0x2b6))>=0x0){const _0x4c5ee2=this[_0x5b28fc(0x6fb)](_0x5b28fc(0x5f0));this[_0x5b28fc(0x3b1)]['splice'](_0x4c5ee2,0x1);}},Window_ActorCommand[_0x4e2d80(0x6a9)]['addBattleGridMoveCommand']=function(){const _0x1b3fb7=_0x4e2d80;if(!BattleManager['isUsingGridSystem']())return;if(!Window_ActorCommand['BATTLE_GRID_SYSTEM'][_0x1b3fb7(0x19f)])return;this[_0x1b3fb7(0x6fb)](_0x1b3fb7(0x2b6))>=0x0&&this[_0x1b3fb7(0x476)]();const _0x40a058=this[_0x1b3fb7(0x682)](),_0x29f09b=TextManager[_0x1b3fb7(0x46b)],_0x59206c=Window_ActorCommand['BATTLE_GRID_SYSTEM']['moveIcon'],_0x144f68=_0x40a058==='text'?_0x29f09b:_0x1b3fb7(0x6ce)[_0x1b3fb7(0x3bb)](_0x59206c,_0x29f09b),_0x240a4f=this[_0x1b3fb7(0x6ab)]&&this[_0x1b3fb7(0x6ab)][_0x1b3fb7(0x3d9)]();this[_0x1b3fb7(0x431)](_0x144f68,_0x1b3fb7(0x2b6),_0x240a4f);},VisuMZ[_0x4e2d80(0x398)]['Window_ActorCommand_addGuardCommand']=Window_ActorCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x442)],Window_ActorCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x442)]=function(){const _0xcec0b6=_0x4e2d80;VisuMZ[_0xcec0b6(0x398)][_0xcec0b6(0x1c7)][_0xcec0b6(0x25d)](this),this['canAutoAddBattleGridMoveCommand']()&&this[_0xcec0b6(0x1f4)]();},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x4ed)]=Window_ActorCommand['prototype'][_0x4e2d80(0x713)],Window_ActorCommand['prototype']['addItemCommand']=function(){const _0x41d95c=_0x4e2d80;this['canAutoAddBattleGridMoveCommand']()&&this[_0x41d95c(0x1f4)](),VisuMZ[_0x41d95c(0x398)][_0x41d95c(0x4ed)][_0x41d95c(0x25d)](this);},VisuMZ['BattleGridSystem'][_0x4e2d80(0x57d)]=Window_ActorCommand[_0x4e2d80(0x6a9)]['addEscapeCommand'],Window_ActorCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x6ad)]=function(){const _0x34b28d=_0x4e2d80;this[_0x34b28d(0x52d)]()&&this[_0x34b28d(0x1f4)](),VisuMZ['BattleGridSystem'][_0x34b28d(0x57d)][_0x34b28d(0x25d)](this);},VisuMZ[_0x4e2d80(0x398)]['Window_ActorCommand_updateHelp']=Window_ActorCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x644)],Window_ActorCommand['prototype'][_0x4e2d80(0x644)]=function(){const _0xe56b93=_0x4e2d80,_0x298e9c=this[_0xe56b93(0x4fd)]();if(_0x298e9c==='gridMove'){const _0x4966cc=VisuMZ[_0xe56b93(0x398)]['Settings'][_0xe56b93(0x31c)][_0xe56b93(0x5c5)]||'';this['_helpWindow'][_0xe56b93(0x1aa)](_0x4966cc);}else VisuMZ['BattleGridSystem'][_0xe56b93(0x4b0)][_0xe56b93(0x25d)](this);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x527)]=Window_BattleLog[_0x4e2d80(0x6a9)]['createEffectActionSet'],Window_BattleLog[_0x4e2d80(0x6a9)][_0x4e2d80(0x3ae)]=function(_0x201fc3,_0x46c238,_0x18f3d2){const _0x448b6e=_0x4e2d80;if(this[_0x448b6e(0x4ad)](_0x46c238))this[_0x448b6e(0x241)](_0x201fc3,_0x46c238,_0x18f3d2);else{if(this[_0x448b6e(0x3bf)](_0x46c238))this[_0x448b6e(0x13c)](_0x201fc3,_0x46c238,_0x18f3d2);else this[_0x448b6e(0x479)](_0x46c238)?this[_0x448b6e(0x276)](_0x201fc3,_0x46c238,_0x18f3d2):VisuMZ[_0x448b6e(0x398)][_0x448b6e(0x527)][_0x448b6e(0x25d)](this,_0x201fc3,_0x46c238,_0x18f3d2);}},Window_BattleLog[_0x4e2d80(0x6a9)][_0x4e2d80(0x4ad)]=function(_0x4efe81){const _0x34ff8a=_0x4e2d80;if(!BattleManager['isUsingGridSystem']())return![];return _0x4efe81[_0x34ff8a(0x706)]();},Window_BattleLog[_0x4e2d80(0x6a9)][_0x4e2d80(0x3bf)]=function(_0x379d6b){const _0x66cc7c=_0x4e2d80;if(!BattleManager[_0x66cc7c(0x2ae)]())return![];if(!_0x379d6b[_0x66cc7c(0x64f)]())return![];if(!_0x379d6b[_0x66cc7c(0x52b)]())return![];return this[_0x66cc7c(0x479)](_0x379d6b);},Window_BattleLog['prototype'][_0x4e2d80(0x479)]=function(_0x5dd610){const _0x3a970c=_0x4e2d80;if(!BattleManager[_0x3a970c(0x2ae)]())return![];return _0x5dd610[_0x3a970c(0x705)]();},Window_BattleLog[_0x4e2d80(0x6a9)][_0x4e2d80(0x241)]=function(_0x2dbcd5,_0x4f03f8,_0x3c78fe){const _0x546918=_0x4e2d80,_0x1d579c=_0x4f03f8[_0x546918(0x633)](),_0x13f363=[$gameTemp[_0x546918(0x3eb)]()];this['push'](_0x546918(0x36a),_0x2dbcd5,_0x4f03f8),this[_0x546918(0x482)](_0x546918(0x23d),Sprite_Battler['_motionSpeed']),this['push']('showAnimation',_0x2dbcd5,_0x13f363,_0x1d579c[_0x546918(0x24a)]),this[_0x546918(0x482)](_0x546918(0x4eb)),this[_0x546918(0x482)](_0x546918(0x3e0),_0x4f03f8);},Window_BattleLog[_0x4e2d80(0x6a9)][_0x4e2d80(0x13c)]=function(_0x1a7d72,_0x58f39f,_0x3bbcae){const _0x4c9199=_0x4e2d80,_0x49e99f=_0x1a7d72[_0x4c9199(0x143)]()[_0x4c9199(0x452)]<0x2,_0x933205=0x14,_0x1aaad8=0x30,_0x427af7=[_0x58f39f[_0x4c9199(0x648)]()];_0x49e99f&&_0x1a7d72[_0x4c9199(0x444)]()!==_0x3bbcae[0x0][_0x4c9199(0x444)]()&&(this[_0x4c9199(0x482)]('performJump',[_0x1a7d72],_0x1aaad8,_0x933205),this[_0x4c9199(0x482)]('performMoveToTargets',_0x1a7d72,_0x3bbcae,'front\x20center',_0x933205,!![],_0x4c9199(0x43f),!![]),this[_0x4c9199(0x482)](_0x4c9199(0x3e4),[_0x1a7d72],_0x4c9199(0x58f)),this[_0x4c9199(0x482)](_0x4c9199(0x643)));let _0x35d6c6=_0x58f39f['isAttack']()?this[_0x4c9199(0x5a4)](_0x1a7d72):0x1;for(let _0xb58c68=0x0;_0xb58c68<_0x35d6c6;_0xb58c68++){_0x58f39f['isAttack']()&&_0x1a7d72[_0x4c9199(0x444)]()&&this[_0x4c9199(0x482)](_0x4c9199(0x25a),_0x1a7d72,_0xb58c68);let _0x3fbac9=_0x58f39f[_0x4c9199(0x1c3)]()?0x1+_0x1a7d72[_0x4c9199(0x722)]():0x1;while(_0x3fbac9--){this[_0x4c9199(0x482)](_0x4c9199(0x36a),_0x1a7d72,_0x58f39f),this[_0x4c9199(0x482)](_0x4c9199(0x23d),Sprite_Battler[_0x4c9199(0x4d4)]),this[_0x4c9199(0x482)](_0x4c9199(0x1c6),_0x1a7d72,_0x427af7,_0x58f39f[_0x4c9199(0x633)]()[_0x4c9199(0x24a)]),this[_0x4c9199(0x482)](_0x4c9199(0x4eb));}for(const _0x4caa4a of _0x3bbcae){if(!_0x4caa4a)continue;this['push'](_0x4c9199(0x17a),_0x1a7d72,_0x4caa4a);}}_0x58f39f[_0x4c9199(0x1c3)]()&&_0x1a7d72[_0x4c9199(0x444)]()&&this[_0x4c9199(0x482)]('clearActiveWeaponSet',_0x1a7d72),this[_0x4c9199(0x482)](_0x4c9199(0x207),_0x1a7d72,_0x3bbcae,![]),this['addMeleeReturnActionSet'](_0x1a7d72,_0x49e99f,_0x1aaad8,_0x933205);},Window_BattleLog[_0x4e2d80(0x6a9)][_0x4e2d80(0x276)]=function(_0x515ad8,_0x5b52fd,_0x95c2d5){const _0x1bddf3=_0x4e2d80,_0x1a7ebf=_0x5b52fd[_0x1bddf3(0x633)](),_0x2d92ab=[_0x5b52fd[_0x1bddf3(0x648)]()];this[_0x1bddf3(0x482)]('performAction',_0x515ad8,_0x5b52fd),this[_0x1bddf3(0x482)](_0x1bddf3(0x23d),Sprite_Battler['_motionSpeed']),this[_0x1bddf3(0x482)]('showAnimation',_0x515ad8,_0x2d92ab,_0x1a7ebf[_0x1bddf3(0x24a)]),this[_0x1bddf3(0x482)](_0x1bddf3(0x4eb));for(const _0x1fd6a3 of _0x95c2d5){if(!_0x1fd6a3)continue;this['push']('actionEffect',_0x515ad8,_0x1fd6a3);}},Window_BattleLog['prototype'][_0x4e2d80(0x3e0)]=function(_0x377215){const _0x10ccfe=_0x4e2d80;if(!BattleManager[_0x10ccfe(0x2ae)]())return;if(!_0x377215)return;_0x377215[_0x10ccfe(0x3e0)]();},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x603)]=Window_BattleStatus[_0x4e2d80(0x6a9)][_0x4e2d80(0x473)],Window_BattleStatus[_0x4e2d80(0x6a9)][_0x4e2d80(0x473)]=function(){const _0x41c6df=_0x4e2d80;if(SceneManager[_0x41c6df(0x671)][_0x41c6df(0x168)]())return![];return VisuMZ[_0x41c6df(0x398)][_0x41c6df(0x603)][_0x41c6df(0x25d)](this);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x4ea)]=Window_BattleActor[_0x4e2d80(0x6a9)][_0x4e2d80(0x17e)],Window_BattleActor[_0x4e2d80(0x6a9)][_0x4e2d80(0x17e)]=function(){const _0x4dced6=_0x4e2d80;if(BattleManager[_0x4dced6(0x2ae)]()){const _0xf2d34a=this[_0x4dced6(0x70c)](this[_0x4dced6(0x6bf)]());$gameTemp[_0x4dced6(0x307)](BattleManager[_0x4dced6(0x566)]());const _0x2cc0d5=$gameParty[_0x4dced6(0x23b)]();$gameTemp['clearGridFilter']();if(!_0x2cc0d5[_0x4dced6(0x314)](_0xf2d34a))return![];}return VisuMZ[_0x4dced6(0x398)]['Window_BattleActor_isActionSelectionValid'][_0x4dced6(0x25d)](this);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x60f)]=Window_BattleEnemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x55e)],Window_BattleEnemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x55e)]=function(_0x23efd1){const _0x4c5cb2=_0x4e2d80;this[_0x4c5cb2(0x2ed)]={'forActor':![],'rank':0x1,'flank':0x1},VisuMZ[_0x4c5cb2(0x398)][_0x4c5cb2(0x60f)][_0x4c5cb2(0x25d)](this,_0x23efd1);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x1b9)]=Window_BattleEnemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x2cf)],Window_BattleEnemy[_0x4e2d80(0x6a9)]['sortEnemies']=function(){const _0x5c66a9=_0x4e2d80;this[_0x5c66a9(0x6c2)](),VisuMZ[_0x5c66a9(0x398)]['Window_BattleEnemy_sortEnemies'][_0x5c66a9(0x25d)](this);},Window_BattleEnemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x6c2)]=function(){const _0x163e7f=_0x4e2d80;if(!BattleManager['isUsingGridSystem']())return;const _0xb09cd6=BattleManager[_0x163e7f(0x566)]();if(!_0xb09cd6)return;this[_0x163e7f(0x60c)]=$gameTroop[_0x163e7f(0x27c)](this[_0x163e7f(0x60c)],_0xb09cd6[_0x163e7f(0x3b5)]());},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x578)]=Window_BattleEnemy['prototype'][_0x4e2d80(0x171)],Window_BattleEnemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x171)]=function(){const _0x9a8031=_0x4e2d80;VisuMZ['BattleGridSystem'][_0x9a8031(0x578)][_0x9a8031(0x25d)](this);if(BattleManager[_0x9a8031(0x2ae)]()){const _0x1beca5=this[_0x9a8031(0x2ed)],_0x2a6cc7=this[_0x9a8031(0x456)]();_0x1beca5[_0x9a8031(0x5d3)]=_0x2a6cc7['isActor'](),_0x1beca5[_0x9a8031(0x352)]=_0x2a6cc7[_0x9a8031(0x4ba)](),_0x1beca5['flank']=_0x2a6cc7[_0x9a8031(0x454)]();}},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x2ba)]=Window_BattleEnemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x5d0)],Window_BattleEnemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x5d0)]=function(_0x1bfe79){const _0x259220=_0x4e2d80;BattleManager[_0x259220(0x2ae)]()?this['battleGridCursor'](0x2):VisuMZ[_0x259220(0x398)][_0x259220(0x2ba)]['call'](this,_0x1bfe79);},VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x52f)]=Window_BattleEnemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x4b9)],Window_BattleEnemy['prototype']['cursorUp']=function(_0xea052){const _0xf8d906=_0x4e2d80;BattleManager['isUsingGridSystem']()?this[_0xf8d906(0x172)](0x8):VisuMZ[_0xf8d906(0x398)][_0xf8d906(0x52f)][_0xf8d906(0x25d)](this,_0xea052);},VisuMZ['BattleGridSystem']['Window_BattleEnemy_cursorRight']=Window_BattleEnemy['prototype']['cursorRight'],Window_BattleEnemy[_0x4e2d80(0x6a9)]['cursorRight']=function(_0x4940da){const _0x3ea135=_0x4e2d80;BattleManager[_0x3ea135(0x2ae)]()?this['battleGridCursor'](0x6):VisuMZ[_0x3ea135(0x398)][_0x3ea135(0x2ff)][_0x3ea135(0x25d)](this,_0x4940da);},VisuMZ['BattleGridSystem'][_0x4e2d80(0x488)]=Window_BattleEnemy[_0x4e2d80(0x6a9)]['cursorLeft'],Window_BattleEnemy['prototype'][_0x4e2d80(0x1a5)]=function(_0x366e3f){const _0x2435a5=_0x4e2d80;BattleManager[_0x2435a5(0x2ae)]()?this[_0x2435a5(0x172)](0x4):VisuMZ[_0x2435a5(0x398)]['Window_BattleEnemy_cursorLeft'][_0x2435a5(0x25d)](this,_0x366e3f);},Window_BattleEnemy[_0x4e2d80(0x6a9)][_0x4e2d80(0x172)]=function(_0x1b287d){const _0x58fbbd=_0x4e2d80,_0x45e79e=BattleManager[_0x58fbbd(0x566)](),_0x2f47f1=this[_0x58fbbd(0x2ed)],_0x41e6d1=JsonEx['makeDeepCopy'](this[_0x58fbbd(0x2ed)]);let _0x4f947a=_0x1b287d===0x4?-0x1:_0x1b287d===0x6?0x1:0x0,_0x79065=_0x1b287d===0x8?-0x1:_0x1b287d===0x2?0x1:0x0;_0x2f47f1[_0x58fbbd(0x352)]+=(_0x2f47f1[_0x58fbbd(0x5d3)]?0x1:-0x1)*_0x4f947a,_0x2f47f1[_0x58fbbd(0x62f)]+=_0x79065;_0x2f47f1['rank']<=0x0&&(_0x45e79e['isForAnyoneFocusOpponents']()&&(_0x2f47f1['forActor']=!_0x2f47f1[_0x58fbbd(0x5d3)]),_0x2f47f1[_0x58fbbd(0x352)]=0x1);_0x2f47f1['rank']=_0x2f47f1['rank'][_0x58fbbd(0x62d)](0x1,BattleManager[_0x58fbbd(0x646)]()),_0x2f47f1[_0x58fbbd(0x62f)]=_0x2f47f1[_0x58fbbd(0x62f)][_0x58fbbd(0x62d)](0x1,BattleManager[_0x58fbbd(0x21f)]());let _0x3bca2a=_0x2f47f1[_0x58fbbd(0x5d3)]?$gameParty:$gameTroop,_0x5cf448=_0x3bca2a[_0x58fbbd(0x170)](_0x2f47f1['rank'],_0x2f47f1[_0x58fbbd(0x62f)]);if(_0x5cf448&&this[_0x58fbbd(0x60c)][_0x58fbbd(0x314)](_0x5cf448)){const _0x23642e=this[_0x58fbbd(0x60c)]['indexOf'](_0x5cf448);this[_0x58fbbd(0x701)](_0x23642e);return;}_0x5cf448=null;if(_0x4f947a!==0x0)for(;;){const _0x2636f9=_0x3bca2a[_0x58fbbd(0x24f)](_0x2f47f1[_0x58fbbd(0x352)])[_0x58fbbd(0x28a)](_0x1a38cd=>this[_0x58fbbd(0x60c)][_0x58fbbd(0x314)](_0x1a38cd))['sort']((_0x520917,_0x1e523c)=>_0x520917[_0x58fbbd(0x515)](_0x2f47f1[_0x58fbbd(0x352)],_0x2f47f1['flank'])-_0x1e523c[_0x58fbbd(0x515)](_0x2f47f1['rank'],_0x2f47f1['flank']));if(_0x2636f9[_0x58fbbd(0x2f8)]>0x0){_0x5cf448=_0x2636f9[0x0];break;}else{_0x2f47f1[_0x58fbbd(0x352)]+=(_0x2f47f1[_0x58fbbd(0x5d3)]?0x1:-0x1)*_0x4f947a;if(_0x2f47f1[_0x58fbbd(0x352)]<=0x0&&_0x45e79e[_0x58fbbd(0x18c)]()){_0x2f47f1[_0x58fbbd(0x5d3)]=!_0x2f47f1[_0x58fbbd(0x5d3)],_0x2f47f1['rank']=0x1,_0x3bca2a=_0x2f47f1['forActor']?$gameParty:$gameTroop;continue;}if(_0x2f47f1[_0x58fbbd(0x352)]<=0x0||_0x2f47f1[_0x58fbbd(0x352)]>BattleManager[_0x58fbbd(0x646)]()){_0x2f47f1[_0x58fbbd(0x352)]=_0x2f47f1[_0x58fbbd(0x352)][_0x58fbbd(0x62d)](0x1,BattleManager[_0x58fbbd(0x646)]());break;}}}if(_0x79065!==0x0)for(;;){const _0x4be638=_0x3bca2a[_0x58fbbd(0x3c3)](_0x2f47f1[_0x58fbbd(0x62f)])['filter'](_0x1a06a2=>this[_0x58fbbd(0x60c)][_0x58fbbd(0x314)](_0x1a06a2))[_0x58fbbd(0x320)]((_0x1143e8,_0x5c9803)=>_0x1143e8[_0x58fbbd(0x515)](_0x2f47f1['rank'],_0x2f47f1[_0x58fbbd(0x62f)])-_0x5c9803[_0x58fbbd(0x515)](_0x2f47f1[_0x58fbbd(0x352)],_0x2f47f1[_0x58fbbd(0x62f)]));if(_0x4be638[_0x58fbbd(0x2f8)]>0x0){_0x5cf448=_0x4be638[0x0];break;}else{_0x2f47f1[_0x58fbbd(0x62f)]+=_0x79065;if(_0x2f47f1[_0x58fbbd(0x62f)]<=0x0||_0x2f47f1[_0x58fbbd(0x62f)]>BattleManager[_0x58fbbd(0x21f)]()){_0x2f47f1[_0x58fbbd(0x62f)]=_0x2f47f1[_0x58fbbd(0x62f)][_0x58fbbd(0x62d)](0x1,BattleManager['maxFlanks']());break;}}}if(_0x5cf448){const _0x4a7c97=this[_0x58fbbd(0x60c)][_0x58fbbd(0x379)](_0x5cf448);if(_0x4a7c97>=0x0){this['smoothSelect'](_0x4a7c97),_0x2f47f1[_0x58fbbd(0x352)]=_0x5cf448[_0x58fbbd(0x4ba)](),_0x2f47f1['flank']=_0x5cf448[_0x58fbbd(0x454)]();return;}}this[_0x58fbbd(0x2ed)]=_0x41e6d1;};function Window_BattleGridBase(){const _0x2652b8=_0x4e2d80;this[_0x2652b8(0x55e)](...arguments);}Window_BattleGridBase[_0x4e2d80(0x6a9)]=Object[_0x4e2d80(0x286)](Window_Command[_0x4e2d80(0x6a9)]),Window_BattleGridBase['prototype'][_0x4e2d80(0x387)]=Window_BattleGridBase,Window_BattleGridBase['prototype'][_0x4e2d80(0x55e)]=function(_0x5513b5){const _0x16d10b=_0x4e2d80;Window_Command[_0x16d10b(0x6a9)]['initialize'][_0x16d10b(0x25d)](this,_0x5513b5),this[_0x16d10b(0x461)]();},Window_BattleGridBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x23e)]=function(){return![];},Window_BattleGridBase[_0x4e2d80(0x6a9)][_0x4e2d80(0x5d0)]=function(_0x494895){const _0x14cad=_0x4e2d80;Window_Command[_0x14cad(0x6a9)][_0x14cad(0x5d0)][_0x14cad(0x25d)](this,![]),this[_0x14cad(0x73b)](this[_0x14cad(0x1a1)]);},Window_BattleGridBase['prototype'][_0x4e2d80(0x4b9)]=function(_0x926266){const _0xfebc35=_0x4e2d80;Window_Command['prototype']['cursorUp'][_0xfebc35(0x25d)](this,![]),this['select'](this[_0xfebc35(0x1a1)]);},Window_BattleGridBase['prototype'][_0x4e2d80(0x3cf)]=function(_0x1b85ba){const _0x10548f=_0x4e2d80;this[_0x10548f(0x1a1)]%this[_0x10548f(0x642)]()<this['maxCols']()-0x1&&(this[_0x10548f(0x1a1)]++,this[_0x10548f(0x73b)](this[_0x10548f(0x1a1)]));},Window_BattleGridBase['prototype'][_0x4e2d80(0x1a5)]=function(_0x2ef85d){const _0x5a9e5c=_0x4e2d80;this[_0x5a9e5c(0x1a1)]%this['maxCols']()>0x0&&(this[_0x5a9e5c(0x1a1)]--,this['select'](this[_0x5a9e5c(0x1a1)]));};function Window_BattleGridMove(){const _0x881a0f=_0x4e2d80;this[_0x881a0f(0x55e)](...arguments);}Window_BattleGridMove[_0x4e2d80(0x6a9)]=Object[_0x4e2d80(0x286)](Window_BattleGridBase[_0x4e2d80(0x6a9)]),Window_BattleGridMove[_0x4e2d80(0x6a9)]['constructor']=Window_BattleGridMove,Window_BattleGridMove['prototype'][_0x4e2d80(0x55e)]=function(_0x2b8e11){const _0x3aa3a2=_0x4e2d80;Window_BattleGridBase[_0x3aa3a2(0x6a9)]['initialize'][_0x3aa3a2(0x25d)](this,_0x2b8e11),this[_0x3aa3a2(0x461)]();},Window_BattleGridMove['prototype']['maxCols']=function(){const _0xea8548=_0x4e2d80;return BattleManager[_0xea8548(0x646)]();},Window_BattleGridMove['prototype'][_0x4e2d80(0x577)]=function(_0x48df97){const _0x46acf6=_0x4e2d80;this[_0x46acf6(0x6ab)]=_0x48df97,this[_0x46acf6(0x247)](),this[_0x46acf6(0x19a)](),this[_0x46acf6(0x1f0)]();},Window_BattleGridMove[_0x4e2d80(0x6a9)]['makeCommandList']=function(){const _0x58636e=_0x4e2d80;for(let _0x1da8cf=0x1;_0x1da8cf<=BattleManager[_0x58636e(0x21f)]();_0x1da8cf++){for(let _0x219634=0x1;_0x219634<=BattleManager[_0x58636e(0x646)]();_0x219634++){const _0x11eeca=this[_0x58636e(0x6ab)]?this['_actor'][_0x58636e(0x4c9)](_0x219634,_0x1da8cf):![];this[_0x58636e(0x431)]('',_0x58636e(0x575),_0x11eeca,{'rank':_0x219634,'flank':_0x1da8cf});}}},Window_BattleGridMove[_0x4e2d80(0x6a9)][_0x4e2d80(0x1f0)]=function(){const _0x51785e=_0x4e2d80;if(!this[_0x51785e(0x6ab)])return;const _0x36ccf8=this[_0x51785e(0x6ab)][_0x51785e(0x4ba)](),_0x493228=this[_0x51785e(0x6ab)][_0x51785e(0x454)](),_0x5a7ced=this[_0x51785e(0x3b1)][_0x51785e(0x715)](_0x98621d=>_0x98621d[_0x51785e(0x545)][_0x51785e(0x352)]===_0x36ccf8&&_0x98621d[_0x51785e(0x545)]['flank']===_0x493228);this[_0x51785e(0x3c4)](Math[_0x51785e(0x23c)](_0x5a7ced,0x0));},Window_BattleGridMove[_0x4e2d80(0x6a9)][_0x4e2d80(0x65f)]=function(){const _0x464d84=_0x4e2d80;SoundManager[_0x464d84(0x4b7)]();};function Window_BattleGridSelectNode(){const _0x8cd011=_0x4e2d80;this[_0x8cd011(0x55e)](...arguments);}Window_BattleGridSelectNode['prototype']=Object[_0x4e2d80(0x286)](Window_BattleGridBase[_0x4e2d80(0x6a9)]),Window_BattleGridSelectNode[_0x4e2d80(0x6a9)]['constructor']=Window_BattleGridSelectNode,Window_BattleGridSelectNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x55e)]=function(_0x1c1b43){const _0x174b94=_0x4e2d80;Window_BattleGridBase[_0x174b94(0x6a9)][_0x174b94(0x55e)]['call'](this,_0x1c1b43),this[_0x174b94(0x43a)]=null;},Window_BattleGridSelectNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x642)]=function(){const _0x11cd51=_0x4e2d80;return BattleManager[_0x11cd51(0x646)]()*0x2;},Window_BattleGridSelectNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x399)]=function(_0x2745c4){const _0x1e1846=_0x4e2d80;this[_0x1e1846(0x43a)]=_0x2745c4,this['refresh'](),this['selectBattlerPosition']();},Window_BattleGridSelectNode['prototype']['makeCommandList']=function(){const _0x2e70b7=_0x4e2d80;for(let _0x3072cc=0x1;_0x3072cc<=BattleManager[_0x2e70b7(0x21f)]();_0x3072cc++){for(let _0xa66462=0x0;_0xa66462<0x2;_0xa66462++){const _0x43bb09=_0xa66462===0x1;let _0x43c972=BattleManager[_0x2e70b7(0x646)]();while(_0x43c972--){const _0x8c8c5=_0x43bb09?BattleManager['maxRanks']()-_0x43c972:_0x43c972+0x1,_0x3098da=_0x2e70b7(0x396)[_0x2e70b7(0x3bb)](_0x43bb09?'A':'E',_0x8c8c5,_0x3072cc),_0x3dcd65={'forActor':_0x43bb09,'rank':_0x8c8c5,'flank':_0x3072cc},_0x3af2d1=this[_0x2e70b7(0x253)](_0x43bb09,_0x8c8c5,_0x3072cc);this[_0x2e70b7(0x431)](_0x3098da,_0x2e70b7(0x575),_0x3af2d1,_0x3dcd65);}}}},Window_BattleGridSelectNode[_0x4e2d80(0x6a9)]['isNodeEnabled']=function(_0x594808,_0x2793c8,_0x2002b2){const _0x5360e3=_0x4e2d80;if(!this[_0x5360e3(0x43a)])return![];if(this[_0x5360e3(0x43a)][_0x5360e3(0x52b)]()&&_0x594808&&!this[_0x5360e3(0x43a)][_0x5360e3(0x15d)]())return![];if(this[_0x5360e3(0x43a)][_0x5360e3(0x1f9)]()&&!_0x594808&&!this['_action'][_0x5360e3(0x15d)]())return![];if(this[_0x5360e3(0x43a)][_0x5360e3(0x3aa)]())return!![];if(this['_action'][_0x5360e3(0x52b)]()){if(_0x594808&&!this[_0x5360e3(0x43a)][_0x5360e3(0x15d)]())return![];if(this[_0x5360e3(0x43a)][_0x5360e3(0x705)]()){const _0x5d96c8=DataManager['getAreaOfEffectData'](this['_action']['item']()),_0x379af6=$gameTroop[_0x5360e3(0x3d1)]();if(!_0x594808&&!_0x379af6[_0x5360e3(0x738)](_0x12dfee=>_0x12dfee[_0x5360e3(0x4e0)](_0x5d96c8,_0x2793c8,_0x2002b2)))return![];}else{if(this[_0x5360e3(0x43a)][_0x5360e3(0x4ab)]())return!_0x594808&&!$gameTroop[_0x5360e3(0x61c)](_0x2793c8,_0x2002b2);else{if(!_0x594808&&!$gameTroop[_0x5360e3(0x61c)](_0x2793c8,_0x2002b2))return![];}}if(!_0x594808&&Imported[_0x5360e3(0x2d6)]){if(this[_0x5360e3(0x43a)][_0x5360e3(0x55a)]()){const _0x58f024=this['_action'][_0x5360e3(0x6a6)]()[_0x5360e3(0x24d)](),_0x45f30d=$gameTroop[_0x5360e3(0x170)](_0x2793c8,_0x2002b2);if(_0x58f024!==_0x45f30d)return![];}else{if(this[_0x5360e3(0x43a)][_0x5360e3(0x248)]()){const _0x2b4e29=this['_action']['item']()['hitType'],_0xfe5dd4=$gameTroop['getTauntMembers'](_0x2b4e29),_0x436579=$gameTroop['getMemberAtGridNode'](_0x2793c8,_0x2002b2);if(!_0xfe5dd4[_0x5360e3(0x314)](_0x436579))return![];}}}}if(this[_0x5360e3(0x43a)][_0x5360e3(0x1f9)]()){if(!_0x594808&&!this['_action'][_0x5360e3(0x15d)]())return![];if(this[_0x5360e3(0x43a)][_0x5360e3(0x705)]()){const _0xef079=DataManager[_0x5360e3(0x156)](this[_0x5360e3(0x43a)][_0x5360e3(0x633)]()),_0x21eb52=$gameParty[_0x5360e3(0x3d1)]();if(_0x594808&&!_0x21eb52[_0x5360e3(0x738)](_0x32bc34=>_0x32bc34[_0x5360e3(0x4e0)](_0xef079,_0x2793c8,_0x2002b2)))return![];}else{if(this[_0x5360e3(0x43a)][_0x5360e3(0x4ab)]())return _0x594808&&!$gameParty[_0x5360e3(0x61c)](_0x2793c8,_0x2002b2);else{if(_0x594808&&!$gameParty['anyAliveMembersAtGridNode'](_0x2793c8,_0x2002b2))return![];}}}return!![];},Window_BattleGridSelectNode[_0x4e2d80(0x6a9)][_0x4e2d80(0x495)]=function(){const _0x59e2c3=_0x4e2d80;let _0x122e59=null;if(this[_0x59e2c3(0x43a)][_0x59e2c3(0x18c)]())_0x122e59=$gameTroop[_0x59e2c3(0x3d1)]()[0x0];else{if(this[_0x59e2c3(0x43a)][_0x59e2c3(0x2af)]())_0x122e59=$gameParty[_0x59e2c3(0x3d1)]()[0x0];else{if(this[_0x59e2c3(0x43a)][_0x59e2c3(0x52b)]())_0x122e59=$gameTroop[_0x59e2c3(0x3d1)]()[0x0];else{if(this[_0x59e2c3(0x43a)][_0x59e2c3(0x1f9)]())_0x122e59=$gameParty[_0x59e2c3(0x3d1)]()[0x0];else{this['select'](0x0);return;}}}}const _0x32886b=_0x122e59['isActor'](),_0x1af68b=_0x122e59[_0x59e2c3(0x1d3)](),_0x4f2174=_0x122e59[_0x59e2c3(0x242)](),_0x57ab69=this[_0x59e2c3(0x3b1)][_0x59e2c3(0x715)](_0x4e4e02=>_0x4e4e02[_0x59e2c3(0x545)][_0x59e2c3(0x5d3)]===_0x32886b&&_0x4e4e02[_0x59e2c3(0x545)][_0x59e2c3(0x352)]===_0x1af68b&&_0x4e4e02[_0x59e2c3(0x545)]['flank']===_0x4f2174);if(_0x57ab69<0x0){if(_0x32886b)return this[_0x59e2c3(0x73b)](BattleManager['maxRanks']());if(!_0x32886b)return this[_0x59e2c3(0x73b)](BattleManager['maxRanks']()-0x1);}this['select'](_0x57ab69);};function _0x2433(_0x4e227e,_0x2a140d){const _0xef79ef=_0xef79();return _0x2433=function(_0x243337,_0x52c8a5){_0x243337=_0x243337-0x138;let _0x11a3ef=_0xef79ef[_0x243337];return _0x11a3ef;},_0x2433(_0x4e227e,_0x2a140d);}function Window_BattleGridSelectRank(){const _0x52c610=_0x4e2d80;this[_0x52c610(0x55e)](...arguments);}Window_BattleGridSelectRank[_0x4e2d80(0x6a9)]=Object[_0x4e2d80(0x286)](Window_BattleGridBase[_0x4e2d80(0x6a9)]),Window_BattleGridSelectRank['prototype'][_0x4e2d80(0x387)]=Window_BattleGridSelectRank,Window_BattleGridSelectRank[_0x4e2d80(0x6a9)][_0x4e2d80(0x55e)]=function(_0x2f4863){const _0x2aa25f=_0x4e2d80;Window_BattleGridBase[_0x2aa25f(0x6a9)][_0x2aa25f(0x55e)][_0x2aa25f(0x25d)](this,_0x2f4863),this[_0x2aa25f(0x43a)]=null;},Window_BattleGridSelectRank[_0x4e2d80(0x6a9)][_0x4e2d80(0x642)]=function(){const _0x34ad8f=_0x4e2d80;return BattleManager[_0x34ad8f(0x646)]()*0x2;},Window_BattleGridSelectRank[_0x4e2d80(0x6a9)][_0x4e2d80(0x399)]=function(_0x29a410){this['_action']=_0x29a410,this['refresh'](),this['selectBattlerPosition']();},Window_BattleGridSelectRank[_0x4e2d80(0x6a9)][_0x4e2d80(0x149)]=function(){const _0xc6c8d3=_0x4e2d80;for(let _0x5c70a9=0x0;_0x5c70a9<0x2;_0x5c70a9++){const _0x4ac915=_0x5c70a9===0x1;let _0x3534c0=BattleManager[_0xc6c8d3(0x646)]();while(_0x3534c0--){const _0x4699f6=_0x4ac915?BattleManager[_0xc6c8d3(0x646)]()-_0x3534c0:_0x3534c0+0x1,_0x55cc5f=_0xc6c8d3(0x6fa)['format'](_0x4ac915?'A':'E',_0x4699f6),_0x38ea82={'forActor':_0x4ac915,'rank':_0x4699f6},_0x125db9=this['isRankEnabled'](_0x38ea82);this['addCommand'](_0x55cc5f,_0xc6c8d3(0x352),_0x125db9,_0x38ea82);}}},Window_BattleGridSelectRank[_0x4e2d80(0x6a9)][_0x4e2d80(0x37a)]=function(_0x782dcd){const _0x5544a4=_0x4e2d80;if(!this[_0x5544a4(0x43a)])return![];const _0x599ab4=_0x782dcd[_0x5544a4(0x352)]||0x0;if(this[_0x5544a4(0x43a)][_0x5544a4(0x52b)]()){if(_0x782dcd[_0x5544a4(0x5d3)]&&!this[_0x5544a4(0x43a)]['isForAnyone']())return![];if(!_0x782dcd[_0x5544a4(0x5d3)]&&!$gameTroop[_0x5544a4(0x665)](_0x599ab4))return![];if(!_0x782dcd[_0x5544a4(0x5d3)]&&Imported['VisuMZ_2_AggroControlSystem']){if(this[_0x5544a4(0x43a)]['isProvokeAffected']()){const _0x1a836c=this[_0x5544a4(0x43a)][_0x5544a4(0x6a6)]()[_0x5544a4(0x24d)](),_0x596238=$gameTroop[_0x5544a4(0x24f)](_0x599ab4);if(!_0x596238['includes'](_0x1a836c))return![];}else{if(this[_0x5544a4(0x43a)][_0x5544a4(0x248)]()){const _0x4e93a2=this[_0x5544a4(0x43a)]['item']()[_0x5544a4(0x39c)],_0x52a3e8=$gameTroop[_0x5544a4(0x4bc)](_0x4e93a2),_0x1995c8=$gameTroop[_0x5544a4(0x24f)](_0x599ab4);if(!_0x52a3e8[_0x5544a4(0x738)](_0x1fe406=>_0x1995c8[_0x5544a4(0x314)](_0x1fe406)))return![];}}}}if(this[_0x5544a4(0x43a)][_0x5544a4(0x1f9)]()){if(!_0x782dcd['forActor']&&!this[_0x5544a4(0x43a)][_0x5544a4(0x15d)]())return![];if(_0x782dcd[_0x5544a4(0x5d3)]&&!$gameParty['anyAliveMembersAtGridRank'](_0x599ab4))return![];}return!![];},Window_BattleGridSelectRank['prototype']['selectBattlerPosition']=function(){const _0x1fc7f0=_0x4e2d80;let _0x2033a6=null;if(this[_0x1fc7f0(0x43a)][_0x1fc7f0(0x18c)]())_0x2033a6=$gameTroop[_0x1fc7f0(0x3d1)]()[0x0];else{if(this['_action']['isForAnyoneFocusFriends']())_0x2033a6=$gameParty[_0x1fc7f0(0x3d1)]()[0x0];else{if(this[_0x1fc7f0(0x43a)][_0x1fc7f0(0x52b)]())_0x2033a6=$gameTroop['aliveMembers']()[0x0];else{if(this[_0x1fc7f0(0x43a)][_0x1fc7f0(0x1f9)]())_0x2033a6=$gameParty['aliveMembers']()[0x0];else{this['select'](0x0);return;}}}}const _0x430744=_0x2033a6['isActor'](),_0x4c1823=_0x2033a6[_0x1fc7f0(0x1d3)](),_0x5160e6=this[_0x1fc7f0(0x3b1)]['findIndex'](_0x42001f=>_0x42001f[_0x1fc7f0(0x545)]['forActor']===_0x430744&&_0x42001f[_0x1fc7f0(0x545)][_0x1fc7f0(0x352)]===_0x4c1823);if(_0x5160e6<0x0){if(_0x430744)return this['select'](BattleManager[_0x1fc7f0(0x646)]());if(!_0x430744)return this['select'](BattleManager[_0x1fc7f0(0x646)]()-0x1);}this[_0x1fc7f0(0x73b)](_0x5160e6);};function Window_BattleGridSelectFlank(){this['initialize'](...arguments);}Window_BattleGridSelectFlank['prototype']=Object[_0x4e2d80(0x286)](Window_BattleGridBase[_0x4e2d80(0x6a9)]),Window_BattleGridSelectFlank[_0x4e2d80(0x6a9)][_0x4e2d80(0x387)]=Window_BattleGridSelectFlank,Window_BattleGridSelectFlank['prototype'][_0x4e2d80(0x55e)]=function(_0x99d149){const _0xd89ceb=_0x4e2d80;Window_BattleGridBase['prototype']['initialize'][_0xd89ceb(0x25d)](this,_0x99d149),this[_0xd89ceb(0x43a)]=null;},Window_BattleGridSelectFlank['prototype'][_0x4e2d80(0x642)]=function(){return 0x2;},Window_BattleGridSelectFlank[_0x4e2d80(0x6a9)][_0x4e2d80(0x399)]=function(_0x56d639){const _0x92366=_0x4e2d80;this[_0x92366(0x43a)]=_0x56d639,this['refresh'](),this[_0x92366(0x495)]();},Window_BattleGridSelectFlank[_0x4e2d80(0x6a9)][_0x4e2d80(0x149)]=function(){const _0x64d255=_0x4e2d80;for(let _0x774e=0x1;_0x774e<=BattleManager[_0x64d255(0x21f)]();_0x774e++){for(let _0x341e1d=0x0;_0x341e1d<0x2;_0x341e1d++){const _0x19322c=_0x341e1d===0x1,_0x146872=_0x64d255(0x176)[_0x64d255(0x3bb)](_0x19322c?'A':'E',_0x774e),_0x11571a={'forActor':_0x19322c,'flank':_0x774e},_0x1faa0a=this[_0x64d255(0x737)](_0x11571a);this[_0x64d255(0x431)](_0x146872,_0x64d255(0x62f),_0x1faa0a,_0x11571a);}}},Window_BattleGridSelectFlank[_0x4e2d80(0x6a9)][_0x4e2d80(0x737)]=function(_0x34dac2){const _0x5d15cf=_0x4e2d80;if(!this['_action'])return![];const _0x332292=_0x34dac2[_0x5d15cf(0x62f)]||0x0;if(this[_0x5d15cf(0x43a)][_0x5d15cf(0x52b)]()){if(_0x34dac2[_0x5d15cf(0x5d3)]&&!this[_0x5d15cf(0x43a)][_0x5d15cf(0x15d)]())return![];if(!_0x34dac2[_0x5d15cf(0x5d3)]&&!$gameTroop[_0x5d15cf(0x26c)](_0x332292))return![];if(!_0x34dac2[_0x5d15cf(0x5d3)]&&Imported['VisuMZ_2_AggroControlSystem']){if(this['_action'][_0x5d15cf(0x55a)]()){const _0x248b56=this[_0x5d15cf(0x43a)][_0x5d15cf(0x6a6)]()[_0x5d15cf(0x24d)](),_0x3ad320=$gameTroop['getAliveMembersAtGridFlank'](_0x332292);if(!_0x3ad320['includes'](_0x248b56))return![];}else{if(this[_0x5d15cf(0x43a)][_0x5d15cf(0x248)]()){const _0x45eca6=this[_0x5d15cf(0x43a)][_0x5d15cf(0x633)]()[_0x5d15cf(0x39c)],_0x463031=$gameTroop[_0x5d15cf(0x4bc)](_0x45eca6),_0xa60e3f=$gameTroop[_0x5d15cf(0x3c3)](_0x332292);if(!_0x463031[_0x5d15cf(0x738)](_0xd78990=>_0xa60e3f[_0x5d15cf(0x314)](_0xd78990)))return![];}}}}if(this[_0x5d15cf(0x43a)][_0x5d15cf(0x1f9)]()){if(!_0x34dac2[_0x5d15cf(0x5d3)]&&!this[_0x5d15cf(0x43a)][_0x5d15cf(0x15d)]())return![];if(_0x34dac2[_0x5d15cf(0x5d3)]&&!$gameParty[_0x5d15cf(0x26c)](_0x332292))return![];}return!![];},Window_BattleGridSelectFlank[_0x4e2d80(0x6a9)][_0x4e2d80(0x495)]=function(){const _0x4bfa70=_0x4e2d80;let _0x171f01=null;if(this[_0x4bfa70(0x43a)]['isForAnyoneFocusOpponents']())_0x171f01=$gameTroop[_0x4bfa70(0x3d1)]()[0x0];else{if(this[_0x4bfa70(0x43a)][_0x4bfa70(0x2af)]())_0x171f01=$gameParty[_0x4bfa70(0x3d1)]()[0x0];else{if(this[_0x4bfa70(0x43a)]['isForOpponent']())_0x171f01=$gameTroop[_0x4bfa70(0x3d1)]()[0x0];else{if(this[_0x4bfa70(0x43a)][_0x4bfa70(0x1f9)]())_0x171f01=$gameParty['aliveMembers']()[0x0];else{this[_0x4bfa70(0x73b)](0x0);return;}}}}const _0x3c4af2=_0x171f01[_0x4bfa70(0x444)](),_0x360a5b=_0x171f01[_0x4bfa70(0x242)](),_0x13c2e2=this[_0x4bfa70(0x3b1)][_0x4bfa70(0x715)](_0x2b59ee=>_0x2b59ee[_0x4bfa70(0x545)][_0x4bfa70(0x5d3)]===_0x3c4af2&&_0x2b59ee['ext'][_0x4bfa70(0x62f)]===_0x360a5b);if(_0x13c2e2<0x0)return this['select'](0x0);this[_0x4bfa70(0x73b)](_0x13c2e2);};function Window_BattleGridTactics(){const _0x347ac9=_0x4e2d80;this[_0x347ac9(0x55e)](...arguments);}Window_BattleGridTactics['prototype']=Object['create'](Window_BattleGridBase['prototype']),Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x387)]=Window_BattleGridTactics,Window_BattleGridTactics[_0x4e2d80(0x36f)]={'bgType':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)]['Window_BattleGridTactics_BgType']??0x0,'graphicType':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)]['Window_BattleGridTactics_graphicType']??_0x4e2d80(0x43b),'pendingBgColor1':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)]['Window_BattleGridTactics_pendingBgColor1']??0x1c,'pendingBgColor2':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Window'][_0x4e2d80(0x6ea)]??0x1d,'titleLeaderColor':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)]['Window_BattleGridTactics_titleLeaderColor']??0x11,'titleMemberColor':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)][_0x4e2d80(0x63f)]??0x5,'titlePendingColor':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)][_0x4e2d80(0x411)]??0x18,'titleEmptyColor':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)]['Window_BattleGridTactics_titleEmptyColor']??0x7},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x55e)]=function(_0x1f5cd3){const _0x40ffab=_0x4e2d80;this['_mode']=_0x40ffab(0x152),this[_0x40ffab(0x6fc)]=-0x1,this[_0x40ffab(0x693)]={},Window_BattleGridBase['prototype'][_0x40ffab(0x55e)][_0x40ffab(0x25d)](this,_0x1f5cd3),this[_0x40ffab(0x145)](),this[_0x40ffab(0x247)](),this[_0x40ffab(0x244)](),this[_0x40ffab(0x19a)]();},Window_BattleGridTactics[_0x4e2d80(0x6a9)]['mode']=function(){const _0x1d427e=_0x4e2d80;return this[_0x1d427e(0x5b3)];},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x70c)]=function(){const _0x39ff6d=_0x4e2d80,_0x3be60f=this[_0x39ff6d(0x2e7)](this[_0x39ff6d(0x6bf)]()),_0x433e13=this[_0x39ff6d(0x6e8)](this[_0x39ff6d(0x6bf)]());return $gameParty[_0x39ff6d(0x6cf)](_0x3be60f,_0x433e13)||null;},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x40e)]=function(){const _0x57ae01=_0x4e2d80,_0x1bbfad=this[_0x57ae01(0x2e7)](this[_0x57ae01(0x6bf)]()),_0x4b7893=this['getFlankAt'](this[_0x57ae01(0x6bf)]());return $gameParty[_0x57ae01(0x2e9)](_0x1bbfad,_0x4b7893);},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x3db)]=function(){const _0x45c4d6=_0x4e2d80,_0x517359=this[_0x45c4d6(0x2e7)](this['index']()),_0x533172=this['getFlankAt'](this[_0x45c4d6(0x6bf)]());return $gameParty['getPartyIndexAtGridTacticsNode'](_0x517359,_0x533172);},Window_BattleGridTactics['prototype'][_0x4e2d80(0x642)]=function(){const _0x4dcbdb=_0x4e2d80;return BattleManager[_0x4dcbdb(0x646)]();},Window_BattleGridTactics['prototype'][_0x4e2d80(0x2ad)]=function(){const _0x5dc0fe=_0x4e2d80;return BattleManager[_0x5dc0fe(0x646)]()*BattleManager[_0x5dc0fe(0x21f)]();},Window_BattleGridTactics['prototype'][_0x4e2d80(0x48d)]=function(){return 0x0;},Window_BattleGridTactics[_0x4e2d80(0x6a9)]['rowSpacing']=function(){return 0x0;},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x58d)]=function(){const _0xaab483=_0x4e2d80;return Math['floor'](this[_0xaab483(0x3de)]/BattleManager[_0xaab483(0x646)]());},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x2c8)]=function(){const _0xcf42f3=_0x4e2d80;return Math[_0xcf42f3(0x4f9)](this[_0xcf42f3(0x5ff)]/BattleManager[_0xcf42f3(0x21f)]());},Window_BattleGridTactics[_0x4e2d80(0x6a9)]['gaugeLineHeight']=function(){return 0x18;},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x6f2)]=function(){const _0x336203=_0x4e2d80;return this[_0x336203(0x5ff)];},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x145)]=function(){const _0x59ca43=_0x4e2d80;for(const _0x1aade4 of $gameParty['battleMembers']()){if(!_0x1aade4)continue;_0x1aade4['characterName']()&&ImageManager[_0x59ca43(0x5a1)](_0x1aade4[_0x59ca43(0x3f1)]()),_0x1aade4[_0x59ca43(0x504)]()&&ImageManager['loadSvActor'](_0x1aade4[_0x59ca43(0x504)]()),_0x1aade4[_0x59ca43(0x484)]()&&ImageManager[_0x59ca43(0x67e)](_0x1aade4[_0x59ca43(0x484)]());}},Window_BattleGridTactics['prototype'][_0x4e2d80(0x429)]=function(_0x3d3c2b){const _0xc3202e=_0x4e2d80,_0x54ac8c=this['itemRect'](_0x3d3c2b);this['_pendingIndex']===_0x3d3c2b?this[_0xc3202e(0x54d)](_0x3d3c2b):this[_0xc3202e(0x716)](_0x54ac8c);},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x54d)]=function(_0x54f0c1){const _0x5c8d15=_0x4e2d80,_0x1aca25=Window_BattleGridTactics['SETTINGS'],_0x861f8b=this[_0x5c8d15(0x1d0)](_0x54f0c1),_0x2d3271=ColorManager[_0x5c8d15(0x525)](_0x1aca25[_0x5c8d15(0x519)]),_0x549ce2=ColorManager[_0x5c8d15(0x525)](_0x1aca25[_0x5c8d15(0x361)]),_0x2dacfb=_0x861f8b['x'],_0x44705d=_0x861f8b['y'],_0x3a480b=_0x861f8b[_0x5c8d15(0x610)],_0x36837d=_0x861f8b[_0x5c8d15(0x298)];this[_0x5c8d15(0x4fc)]['gradientFillRect'](_0x2dacfb,_0x44705d,_0x3a480b,_0x36837d,_0x2d3271,_0x549ce2,!![]),this[_0x5c8d15(0x4fc)][_0x5c8d15(0x46d)](_0x2dacfb,_0x44705d,_0x3a480b,_0x36837d,_0x2d3271);},ImageManager[_0x4e2d80(0x50b)]=ImageManager['svActorHorzCells']||0x9,ImageManager[_0x4e2d80(0x2dc)]=ImageManager[_0x4e2d80(0x2dc)]||0x6,Window_BattleGridTactics[_0x4e2d80(0x6a9)]['refresh']=function(){const _0x2ea49d=_0x4e2d80;this[_0x2ea49d(0x4a4)](),Window_BattleGridBase['prototype']['refresh']['call'](this);},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x4a4)]=function(){const _0x5be4f2=_0x4e2d80;for(const _0x589ba2 of Object['values'](this[_0x5be4f2(0x693)])){_0x589ba2[_0x5be4f2(0x681)]();}},Window_BattleGridTactics['prototype']['createInnerSprite']=function(_0x477f54,_0x5f6b0b){const _0x4aeac4=_0x4e2d80,_0x3e0d97=this[_0x4aeac4(0x693)];if(_0x3e0d97[_0x477f54])return _0x3e0d97[_0x477f54];else{const _0x1b4540=new _0x5f6b0b();return _0x3e0d97[_0x477f54]=_0x1b4540,this[_0x4aeac4(0x24b)](_0x1b4540),_0x1b4540;}},Window_BattleGridTactics['prototype']['selectFirstActor']=function(){const _0x5cca6d=_0x4e2d80;let _0xe06261=$gameParty[_0x5cca6d(0x32c)]()[0x0];if(!_0xe06261)this[_0x5cca6d(0x73b)](0x0);else{$gameTemp['_fromTacticsMenu']&&($gameTemp[_0x5cca6d(0x5db)]=undefined,_0xe06261=$gameParty[_0x5cca6d(0x657)]());let _0x772ffd=_0xe06261[_0x5cca6d(0x6bf)]();if(Imported[_0x5cca6d(0x53d)]&&_0x772ffd>0x0&&_0xe06261)_0x772ffd=$gameParty['_battleMembers']['indexOf'](_0xe06261[_0x5cca6d(0x5da)]());else _0x772ffd<0x0&&(_0xe06261=$gameParty[_0x5cca6d(0x32c)]()[0x0],_0x772ffd=_0xe06261?_0xe06261['index']():0x0);_0x772ffd<0x0&&(_0x772ffd=0x0),this[_0x5cca6d(0x73b)](this['findPartyIndex'](_0x772ffd));}},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x4b3)]=function(_0x5f29c7){const _0x1a411a=_0x4e2d80,_0x1bd977=$gameParty['getBattleGridTacticsPosition'](_0x5f29c7),_0x2c31b5=this[_0x1a411a(0x3b1)]['findIndex'](_0x381398=>_0x381398[_0x1a411a(0x545)]&&_0x381398[_0x1a411a(0x545)]['rank']===_0x1bd977['rank']&&_0x381398[_0x1a411a(0x545)][_0x1a411a(0x62f)]===_0x1bd977['flank']);return _0x2c31b5;},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x149)]=function(){const _0x255924=_0x4e2d80;for(let _0x3c0d15=0x1;_0x3c0d15<=BattleManager[_0x255924(0x21f)]();_0x3c0d15++){for(let _0x3ba69f=0x1;_0x3ba69f<=BattleManager[_0x255924(0x646)]();_0x3ba69f++){const _0x4fbec4={'rank':_0x3ba69f,'flank':_0x3c0d15};this[_0x255924(0x431)]('',_0x255924(0x575),!![],_0x4fbec4);};}},Window_BattleGridTactics['prototype']['processOk']=function(){const _0x5d3f88=_0x4e2d80;if(this[_0x5d3f88(0x5b3)]===_0x5d3f88(0x152)){if(!this['isCurrentTacticsItemEnabled']())return;}Window_BattleGridBase[_0x5d3f88(0x6a9)]['processOk'][_0x5d3f88(0x25d)](this);},Window_BattleGridTactics['prototype'][_0x4e2d80(0x4c4)]=function(){const _0x2bc668=_0x4e2d80,_0x3502e2=this[_0x2bc668(0x2e7)](this[_0x2bc668(0x6bf)]()),_0x32397b=this[_0x2bc668(0x6e8)](this[_0x2bc668(0x6bf)]());if(BattleManager[_0x2bc668(0x2c3)]()&&Imported[_0x2bc668(0x53d)]){if(!this['actor']()&&$gameParty[_0x2bc668(0x32c)]()[_0x2bc668(0x314)](null))return $gameParty[_0x2bc668(0x5a8)]()['length']>0x0;}if(!$gameParty[_0x2bc668(0x6cd)](_0x3502e2,_0x32397b))return![];if($gameParty['getMemberAtGridTacticsNode'](_0x3502e2,_0x32397b)===null)return![];return!![];},Window_BattleGridTactics['prototype'][_0x4e2d80(0x312)]=function(){const _0xc6762=_0x4e2d80;if(BattleManager[_0xc6762(0x2c3)]()){if(Imported[_0xc6762(0x53d)]&&$gameParty[_0xc6762(0x666)]()){if(this[_0xc6762(0x277)]()&&this[_0xc6762(0x234)]()){const _0x48d17a=TextManager[_0xc6762(0x283)],_0x5ec64f=$gameParty[_0xc6762(0x5a8)]()[_0xc6762(0x5ba)](_0x212324=>_0x212324['isRequiredInParty']()),_0x23569f=_0x48d17a[_0xc6762(0x3bb)](_0x5ec64f['name']());this[_0xc6762(0x4a3)][_0xc6762(0x1aa)](_0x23569f),SoundManager[_0xc6762(0x670)]();}return![];}}return Window_Command['prototype'][_0xc6762(0x312)][_0xc6762(0x25d)](this);},Window_BattleGridTactics[_0x4e2d80(0x6a9)]['drawItem']=function(_0x1a7c5e){const _0x22c5c4=_0x4e2d80,_0x364602=this[_0x22c5c4(0x2e7)](_0x1a7c5e),_0x1ada41=this['getFlankAt'](_0x1a7c5e);if($gameParty[_0x22c5c4(0x6cd)](_0x364602,_0x1ada41)){const _0x497672=$gameParty[_0x22c5c4(0x6cf)](_0x364602,_0x1ada41),_0x4186a8=$gameParty[_0x22c5c4(0x1ef)](_0x364602,_0x1ada41);this[_0x22c5c4(0x6b1)](_0x1a7c5e,_0x4186a8);}else this['drawItemEmpty'](_0x1a7c5e);},Window_BattleGridTactics[_0x4e2d80(0x6a9)]['getRankAt']=function(_0x15e351){const _0x427606=_0x4e2d80;if(!this[_0x427606(0x3b1)][_0x15e351])return 0x0;return this[_0x427606(0x3b1)][_0x15e351][_0x427606(0x545)]['rank'];},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x6e8)]=function(_0x23e67b){const _0x10cf3d=_0x4e2d80;if(!this[_0x10cf3d(0x3b1)][_0x23e67b])return 0x0;return this[_0x10cf3d(0x3b1)][_0x23e67b]['ext'][_0x10cf3d(0x62f)];},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x5f5)]=function(_0x426d7c){const _0x5a100d=_0x4e2d80,_0x4ee595=this[_0x5a100d(0x1d0)](_0x426d7c),_0x4a1a08=this[_0x5a100d(0x2e7)](_0x426d7c),_0x224358=this[_0x5a100d(0x6e8)](_0x426d7c);this['resetFontSettings']();{const _0x5e7780=_0x5a100d(0x4bf)[_0x5a100d(0x3bb)](_0x4a1a08,_0x224358),_0x40afea=_0x4ee595['x']+this[_0x5a100d(0x6aa)](),_0x1b4147=_0x4ee595['y']+_0x4ee595[_0x5a100d(0x298)]-this['lineHeight']()-0x4,_0xc9091f=_0x4ee595['width']-this[_0x5a100d(0x6aa)]()*0x2;this['makeFontSmaller'](),this[_0x5a100d(0x3be)](_0x5e7780,_0x40afea,_0x1b4147,_0xc9091f,'right');}if($gameParty[_0x5a100d(0x6cd)](_0x4a1a08,_0x224358)){this['resetFontSettings']();const _0x207f57=$gameParty['getMemberAtGridTacticsNode'](_0x4a1a08,_0x224358);let _0x5c4470=Math['floor'](_0x4ee595['y']+(_0x4ee595['height']-this[_0x5a100d(0x34d)]()*0x2)/0x2);this[_0x5a100d(0x68c)](ColorManager[_0x5a100d(0x4b8)](0x6)),this[_0x5a100d(0x3be)](_0x207f57[_0x5a100d(0x427)](),_0x4ee595['x'],_0x5c4470,_0x4ee595[_0x5a100d(0x610)],_0x5a100d(0x712));const _0x454b19=_0x5a100d(0x3c0)['format'](_0x207f57['index']());this['changeTextColor'](ColorManager[_0x5a100d(0x4b8)](0x5)),_0x5c4470+=this['lineHeight'](),this[_0x5a100d(0x3be)](_0x454b19,_0x4ee595['x'],_0x5c4470,_0x4ee595['width'],_0x5a100d(0x712));}},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x611)]=function(){const _0x436d2f=_0x4e2d80;VisuMZ['BattleGridSystem'][_0x436d2f(0x531)]['Window']['WindowTactics_DrawEmptyJS']&&VisuMZ[_0x436d2f(0x398)][_0x436d2f(0x531)]['Window'][_0x436d2f(0x4f3)][_0x436d2f(0x25d)](this,arguments[0x0]);const _0x33585a=arguments[0x0],_0x54c0eb=this[_0x436d2f(0x1d0)](_0x33585a);_0x54c0eb['x']+=0x2,_0x54c0eb['width']-=0x4;const _0x12a738=_0x54c0eb[_0x436d2f(0x610)]/0x2,_0x4c99ca=this['lineHeight']();this[_0x436d2f(0x6ca)](),this[_0x436d2f(0x69a)](!![]);const _0x3cc75f=ColorManager['dimColor1'](),_0x8b0ed2=ColorManager['dimColor2']();this[_0x436d2f(0x6d8)]['gradientFillRect'](_0x54c0eb['x'],_0x54c0eb['y'],_0x12a738,_0x4c99ca,_0x8b0ed2,_0x3cc75f),this[_0x436d2f(0x6d8)][_0x436d2f(0x5e8)](_0x54c0eb['x']+_0x12a738,_0x54c0eb['y'],_0x12a738,_0x4c99ca,_0x3cc75f,_0x8b0ed2);const _0x2ead87=this['getActorTitle']();this['changeTextColor'](this[_0x436d2f(0x211)]()),this['changePaintOpacity'](![]),this[_0x436d2f(0x3be)](_0x2ead87,_0x54c0eb['x'],_0x54c0eb['y'],_0x54c0eb[_0x436d2f(0x610)],_0x436d2f(0x712));},Window_BattleGridTactics[_0x4e2d80(0x6a9)]['drawItemActor']=function(){const _0x49c1c8=_0x4e2d80;if(VisuMZ[_0x49c1c8(0x398)][_0x49c1c8(0x531)]['Window'][_0x49c1c8(0x1c4)])return VisuMZ[_0x49c1c8(0x398)][_0x49c1c8(0x531)][_0x49c1c8(0x17c)]['WindowTactics_DrawActorJS'][_0x49c1c8(0x25d)](this,arguments[0x0],arguments[0x1]);const _0x2efe5c=arguments[0x0],_0xb7bf2b=arguments[0x1],_0x173733=$gameParty['battleMembers']()[_0xb7bf2b],_0x5caf08=this['itemRect'](_0x2efe5c);_0x5caf08['x']+=0x2,_0x5caf08['width']-=0x4;const _0x57ef6e=_0x5caf08[_0x49c1c8(0x610)]/0x2,_0x137340=this['lineHeight']();this[_0x49c1c8(0x6ca)](),this['changePaintOpacity'](!![]);_0xb7bf2b>=0x0&&_0x173733&&(_0x5caf08[_0x49c1c8(0x610)]>0x12c?(this['drawActorGraphic'](_0x173733,_0x5caf08['x'],_0x5caf08['y']+_0x137340,ImageManager[_0x49c1c8(0x48b)],_0x5caf08[_0x49c1c8(0x298)]-_0x137340-0x2),_0x5caf08['height']>=_0x137340*0x2&&this[_0x49c1c8(0x188)](_0x173733,_0x5caf08['x']+0x8,_0x5caf08['y']+_0x5caf08[_0x49c1c8(0x298)]-_0x137340-0x2),Imported[_0x49c1c8(0x1c8)]&&_0x5caf08[_0x49c1c8(0x298)]>=_0x137340*0x3&&this[_0x49c1c8(0x1d5)]&&this[_0x49c1c8(0x1d5)](_0x173733,_0x5caf08['x']+0x8,_0x5caf08['y']+_0x5caf08[_0x49c1c8(0x298)]-_0x137340*0x2-0x2)):this[_0x49c1c8(0x3fc)](_0x173733,_0x5caf08['x'],_0x5caf08['y'],_0x5caf08['width'],_0x5caf08['height']));const _0x29770b=ColorManager[_0x49c1c8(0x6dd)](),_0x138360=ColorManager[_0x49c1c8(0x6d9)]();this['contents'][_0x49c1c8(0x5e8)](_0x5caf08['x'],_0x5caf08['y'],_0x57ef6e,_0x137340,_0x138360,_0x29770b),this['contents']['gradientFillRect'](_0x5caf08['x']+_0x57ef6e,_0x5caf08['y'],_0x57ef6e,_0x137340,_0x29770b,_0x138360);const _0x2ab875=this['getActorTitle'](_0xb7bf2b);this['changeTextColor'](this[_0x49c1c8(0x211)](_0x2efe5c,_0xb7bf2b)),this[_0x49c1c8(0x3be)](_0x2ab875,_0x5caf08['x'],_0x5caf08['y'],_0x5caf08[_0x49c1c8(0x610)],_0x49c1c8(0x712)),this[_0x49c1c8(0x6ca)]();if(_0xb7bf2b>=0x0&&_0x173733){if(_0x5caf08['width']<=0x12c&&_0x5caf08[_0x49c1c8(0x298)]>=_0x137340*0x2){const _0x4642d6=_0x5caf08['y']+_0x5caf08[_0x49c1c8(0x298)]-_0x137340;this[_0x49c1c8(0x6d8)][_0x49c1c8(0x5e8)](_0x5caf08['x'],_0x4642d6,_0x57ef6e,_0x137340,_0x138360,_0x29770b),this[_0x49c1c8(0x6d8)]['gradientFillRect'](_0x5caf08['x']+_0x57ef6e,_0x4642d6,_0x57ef6e,_0x137340,_0x29770b,_0x138360),this[_0x49c1c8(0x3be)](_0x173733[_0x49c1c8(0x427)](),_0x5caf08['x'],_0x4642d6,_0x5caf08['width'],'center');}if(_0x5caf08['width']>0x12c){const _0x4642de=_0x5caf08[_0x49c1c8(0x610)]-ImageManager['faceWidth']-0x8,_0x5bc020=_0x5caf08['x']+ImageManager['faceWidth']+0x4,_0x48807c=_0x5caf08['y']+_0x137340,_0x3f883e=Math['floor']((_0x4642de-0x80)/0x2)+_0x5bc020,_0x121590=_0x48807c+_0x137340+0x2,_0x21c41f=this['gaugeLineHeight']();this[_0x49c1c8(0x3be)](_0x173733[_0x49c1c8(0x427)](),_0x5bc020,_0x48807c,_0x4642de,_0x49c1c8(0x712)),this[_0x49c1c8(0x696)](_0x173733,'hp',_0x3f883e,_0x121590+_0x21c41f*0x0),this[_0x49c1c8(0x696)](_0x173733,'mp',_0x3f883e,_0x121590+_0x21c41f*0x1);const _0x328885=_0x121590+_0x21c41f*0x3<=_0x5caf08['y']+_0x5caf08[_0x49c1c8(0x298)];$dataSystem[_0x49c1c8(0x22b)]&&_0x328885&&this[_0x49c1c8(0x696)](_0x173733,'tp',_0x3f883e,_0x121590+_0x21c41f*0x2);}}},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x3fc)]=function(_0x3cf94a,_0x2ca627,_0x529690,_0x103771,_0x216235){const _0xcd059f=_0x4e2d80;switch(this[_0xcd059f(0x668)]()){case _0xcd059f(0x392):break;case'sprite':this['drawItemActorSprite'](_0x3cf94a,_0x2ca627,_0x529690,_0x103771,_0x216235);break;case _0xcd059f(0x383):this[_0xcd059f(0x3b2)](_0x3cf94a,_0x2ca627,_0x529690,_0x103771,_0x216235);break;default:Window_StatusBase[_0xcd059f(0x6a9)][_0xcd059f(0x663)][_0xcd059f(0x25d)](this,_0x3cf94a,_0x2ca627,_0x529690,_0x103771,_0x216235);break;}if(BattleManager['isUsingExtendedBattleGridTactics']()){if(Imported[_0xcd059f(0x53d)]&&_0x3cf94a){!_0x3cf94a[_0xcd059f(0x144)]()&&this[_0xcd059f(0x1b1)](ImageManager[_0xcd059f(0x59b)],_0x2ca627,_0x529690);if(_0x3cf94a['isRequiredInParty']()){if(!_0x3cf94a[_0xcd059f(0x144)]())_0x2ca627+=ImageManager[_0xcd059f(0x71d)]+0x4;this['drawIcon'](ImageManager['requiredPartyMemberIcon'],_0x2ca627,_0x529690);}}}},Window_BattleGridTactics[_0x4e2d80(0x6a9)]['graphicType']=function(){const _0xfdb1ea=_0x4e2d80;return Window_BattleGridTactics[_0xfdb1ea(0x36f)][_0xfdb1ea(0x668)];},Window_BattleGridTactics['prototype'][_0x4e2d80(0x3df)]=function(_0x503b03,_0x5729fd,_0x4a7558,_0x147c38,_0x2c239c){const _0x4f39ad=_0x4e2d80;_0x147c38=_0x147c38||ImageManager[_0x4f39ad(0x48b)],_0x2c239c=_0x2c239c||ImageManager[_0x4f39ad(0x15a)];const _0x1a5f89=_0x503b03['characterName'](),_0x14d478=_0x503b03[_0x4f39ad(0x71b)](),_0x53ae37=ImageManager[_0x4f39ad(0x5a1)](_0x1a5f89),_0x278c34=ImageManager[_0x4f39ad(0x3f5)](_0x1a5f89),_0x5b88f6=_0x53ae37['width']/(_0x278c34?0x3:0xc),_0x941e54=_0x53ae37[_0x4f39ad(0x298)]/(_0x278c34?0x4:0x8),_0x197437=_0x147c38,_0x49f5f0=_0x2c239c-0x2,_0x3e3f1f=_0x5729fd+Math[_0x4f39ad(0x4f9)](_0x197437/0x2),_0x5272d6=_0x4a7558+Math[_0x4f39ad(0x72b)]((_0x2c239c+_0x941e54)/0x2),_0x4ef2db=Math[_0x4f39ad(0x485)](_0x147c38,_0x5b88f6),_0x2b604c=Math[_0x4f39ad(0x485)](_0x2c239c,_0x941e54),_0x4e968b=Math['floor'](_0x5729fd+Math[_0x4f39ad(0x23c)](_0x147c38-_0x5b88f6,0x0)/0x2),_0x33aefd=Math['floor'](_0x4a7558+Math['max'](_0x2c239c-_0x941e54,0x0)/0x2),_0x4a954a=_0x278c34?0x0:_0x14d478,_0x35842e=(_0x4a954a%0x4*0x3+0x1)*_0x5b88f6,_0x5e941b=Math[_0x4f39ad(0x4f9)](_0x4a954a/0x4)*0x4*_0x941e54;this[_0x4f39ad(0x6d8)][_0x4f39ad(0x1e8)](_0x53ae37,_0x35842e,_0x5e941b,_0x4ef2db,_0x2b604c,_0x4e968b,_0x33aefd),this[_0x4f39ad(0x69a)](!![]);},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x3b2)]=function(_0x9b3699,_0x4acc47,_0x5df867,_0x2fbb94,_0x3dd4e6){const _0x242c0b=_0x4e2d80;_0x2fbb94=_0x2fbb94||ImageManager[_0x242c0b(0x48b)],_0x3dd4e6=_0x3dd4e6||ImageManager[_0x242c0b(0x15a)];const _0x54f535=ImageManager[_0x242c0b(0x596)](_0x9b3699[_0x242c0b(0x504)]()),_0x55c82a=_0x54f535[_0x242c0b(0x610)]/ImageManager[_0x242c0b(0x50b)],_0x14cedc=_0x54f535['height']/ImageManager[_0x242c0b(0x2dc)],_0x251478=_0x2fbb94,_0x21a3af=_0x3dd4e6-0x2,_0x51ef40=_0x4acc47+Math['floor'](_0x251478/0x2),_0x54283e=_0x5df867+Math[_0x242c0b(0x72b)]((_0x3dd4e6+_0x14cedc)/0x2),_0x1d5bd2=_0x9b3699['hasStaticSvBattler']&&_0x9b3699['hasStaticSvBattler'](),_0x59cf28=0x0,_0x3f6057=0x0,_0x5b181b=_0x1d5bd2?_0x54f535['width']:_0x55c82a,_0x501719=_0x1d5bd2?_0x54f535['height']:_0x14cedc,_0x3dd334=Math['min'](0x1,_0x2fbb94/_0x5b181b,_0x3dd4e6/_0x501719),_0x3e03b5=_0x3dd334*_0x5b181b,_0x5c387e=_0x3dd334*_0x501719,_0x1e610a=Math[_0x242c0b(0x4f9)](_0x4acc47+Math['max'](_0x2fbb94-_0x3e03b5,0x0)/0x2),_0x52b6e3=Math['floor'](_0x5df867+Math[_0x242c0b(0x23c)](_0x3dd4e6-_0x5c387e,0x0)/0x2);this[_0x242c0b(0x6d8)][_0x242c0b(0x1e8)](_0x54f535,_0x59cf28,_0x3f6057,_0x5b181b,_0x501719,_0x1e610a,_0x52b6e3,_0x3e03b5,_0x5c387e),this[_0x242c0b(0x69a)](!![]);},Window_BattleGridTactics['prototype'][_0x4e2d80(0x1d2)]=function(_0x963e94){const _0x3bdda1=_0x4e2d80;if(BattleManager[_0x3bdda1(0x2c3)]()&&Imported[_0x3bdda1(0x53d)]){const _0x44a3c2=$gameParty[_0x3bdda1(0x32c)]()[_0x963e94];if(!_0x44a3c2)return TextManager[_0x3bdda1(0x618)];}if(_0x963e94===undefined||_0x963e94<0x0)return TextManager['BattleGridTacticsEmpty'];else return _0x963e94===0x0?TextManager[_0x3bdda1(0x1b6)]:TextManager['BattleGridTacticsMemberFmt'][_0x3bdda1(0x3bb)](_0x963e94+0x1);},Window_BattleGridTactics['prototype'][_0x4e2d80(0x211)]=function(_0x4b05b8,_0x2a1eef){const _0x51238d=_0x4e2d80,_0x535186=Window_BattleGridTactics[_0x51238d(0x36f)];if(BattleManager['isUsingExtendedBattleGridTactics']()&&Imported[_0x51238d(0x53d)]){const _0x22b4bf=$gameParty['battleMembers']()[_0x2a1eef];if(!_0x22b4bf)return ColorManager[_0x51238d(0x525)](_0x535186['titleEmptyColor']);}if(_0x2a1eef===undefined)return ColorManager[_0x51238d(0x525)](_0x535186[_0x51238d(0x180)]);if(this['_pendingIndex']===_0x4b05b8)return ColorManager[_0x51238d(0x525)](_0x535186[_0x51238d(0x458)]);else{if(_0x2a1eef===0x0)return ColorManager[_0x51238d(0x525)](_0x535186[_0x51238d(0x334)]);else return _0x2a1eef>0x0?ColorManager[_0x51238d(0x525)](_0x535186['titleMemberColor']):ColorManager['normalColor']();}},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x188)]=function(_0x4c9ec2,_0x339faa,_0x545073){const _0x3fcf1a=_0x4e2d80;Window_StatusBase['prototype'][_0x3fcf1a(0x188)][_0x3fcf1a(0x25d)](this,_0x4c9ec2,_0x339faa,_0x545073);},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x684)]=function(){const _0x512008=_0x4e2d80;return VisuMZ['CoreEngine'][_0x512008(0x531)]['UI'][_0x512008(0x1a2)];},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x5c3)]=function(_0x33757c,_0x11e109,_0xacd574){const _0x1aae26=_0x4e2d80;if(!_0x33757c)return;if(!_0x33757c[_0x1aae26(0x444)]())return;const _0x38f41c=0x80,_0x1d4978=_0x33757c[_0x1aae26(0x647)]();let _0x33f0e1=ColorManager[_0x1aae26(0x5cd)](),_0x1a0eb9=ColorManager[_0x1aae26(0x388)]();_0x1d4978>=0x1&&(_0x33f0e1=ColorManager['maxLvGaugeColor1'](),_0x1a0eb9=ColorManager['maxLvGaugeColor2']()),this[_0x1aae26(0x588)](_0x11e109,_0xacd574,_0x38f41c,_0x1d4978,_0x33f0e1,_0x1a0eb9);},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x696)]=function(_0x57c9b3,_0x5ac802,_0x39697c,_0x1ae5d2){const _0x3d4cb5=_0x4e2d80;_0x5ac802=Window_StatusBase['prototype'][_0x3d4cb5(0x494)]['call'](this,_0x57c9b3,_0x5ac802);const _0x5a281b=_0x3d4cb5(0x4d7)[_0x3d4cb5(0x3bb)](_0x57c9b3[_0x3d4cb5(0x5da)](),_0x5ac802),_0x4100ca=this[_0x3d4cb5(0x640)](_0x5a281b,Sprite_Gauge);_0x4100ca[_0x3d4cb5(0x510)](_0x57c9b3,_0x5ac802),_0x4100ca['move'](_0x39697c,_0x1ae5d2),_0x4100ca['show']();},Window_BattleGridTactics[_0x4e2d80(0x6a9)]['playOkSound']=function(){const _0x387561=_0x4e2d80;this['_mode']===_0x387561(0x152)?SoundManager[_0x387561(0x6da)]():SoundManager['playEquip']();},Window_BattleGridTactics['prototype'][_0x4e2d80(0x17b)]=function(){const _0x2a1641=_0x4e2d80;this[_0x2a1641(0x5b3)]='change',this['_pendingIndex']=this['index'](),this[_0x2a1641(0x19a)](),this[_0x2a1641(0x247)]();},Window_BattleGridTactics[_0x4e2d80(0x6a9)]['processChange']=function(){const _0x42f904=_0x4e2d80,_0x4bb9e5=this[_0x42f904(0x2e7)](this[_0x42f904(0x6fc)]),_0x4f148a=this[_0x42f904(0x6e8)](this[_0x42f904(0x6fc)]),_0x2664c1=this[_0x42f904(0x2e7)](this[_0x42f904(0x6bf)]()),_0x4cf795=this[_0x42f904(0x6e8)](this[_0x42f904(0x6bf)]()),_0x5db0e2=$gameParty[_0x42f904(0x1ef)](_0x4bb9e5,_0x4f148a),_0x1d8efa=$gameParty[_0x42f904(0x1ef)](_0x2664c1,_0x4cf795);_0x5db0e2>=0x0&&$gameParty[_0x42f904(0x35e)](_0x5db0e2,_0x2664c1,_0x4cf795),_0x1d8efa>=0x0&&$gameParty[_0x42f904(0x35e)](_0x1d8efa,_0x4bb9e5,_0x4f148a),this['cancelChangeMode']();},Window_BattleGridTactics[_0x4e2d80(0x6a9)]['cancelChangeMode']=function(){const _0x2385e7=_0x4e2d80;this[_0x2385e7(0x5b3)]=_0x2385e7(0x152),this[_0x2385e7(0x6fc)]=-0x1,this[_0x2385e7(0x19a)](),this[_0x2385e7(0x247)]();},Window_BattleGridTactics['prototype']['updateHelp']=function(){const _0x3a5fce=_0x4e2d80;if(this[_0x3a5fce(0x5b3)]==='normal')BattleManager['isUsingExtendedBattleGridTactics']()?this['_helpWindow'][_0x3a5fce(0x1aa)](TextManager[_0x3a5fce(0x661)]):this[_0x3a5fce(0x4a3)][_0x3a5fce(0x1aa)](TextManager['BattleGridTacticsHelpActor']);else this['_mode']==='change'?this[_0x3a5fce(0x4a3)][_0x3a5fce(0x1aa)](TextManager[_0x3a5fce(0x474)]):this[_0x3a5fce(0x4a3)]['clear']();},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x268)]=function(){const _0x19ff6e=_0x4e2d80;Window_BattleGridBase['prototype'][_0x19ff6e(0x268)][_0x19ff6e(0x25d)](this),this[_0x19ff6e(0x5e3)]();},Window_BattleGridTactics[_0x4e2d80(0x6a9)][_0x4e2d80(0x5e3)]=function(){const _0x5bec86=_0x4e2d80;if(!BattleManager[_0x5bec86(0x2c3)]())return;if(!Scene_BattleGridTactics[_0x5bec86(0x36f)]['shiftRemoveShortcut'])return;if(!Imported[_0x5bec86(0x53d)])return;if(!this[_0x5bec86(0x45b)])return;if(!this[_0x5bec86(0x70c)]())return;if(this['_mode']!=='normal')return;Input[_0x5bec86(0x1bd)](_0x5bec86(0x69f))&&(this[_0x5bec86(0x70c)]()===$gameParty['battleMembers']()[0x0]||!this[_0x5bec86(0x70c)]()['isFormationChangeOk']()?SoundManager[_0x5bec86(0x670)]():SceneManager[_0x5bec86(0x671)][_0x5bec86(0x178)]());};function Window_BattleGridTacticsCommand(){const _0x2cb8f5=_0x4e2d80;this[_0x2cb8f5(0x55e)](...arguments);}Window_BattleGridTacticsCommand['prototype']=Object[_0x4e2d80(0x286)](Window_Command['prototype']),Window_BattleGridTacticsCommand['prototype'][_0x4e2d80(0x387)]=Window_BattleGridTacticsCommand,Window_BattleGridTacticsCommand[_0x4e2d80(0x36f)]={'bgType':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x518)]??0x0,'width':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)]['TacticsCommandWidth']??0x12c,'commandOrder':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)][_0x4e2d80(0x194)]??[_0x4e2d80(0x677),'move','partyLeader',_0x4e2d80(0x1d8),'removeMember','classChange',_0x4e2d80(0x73d),_0x4e2d80(0x639),'status'],'commands':{'move':{'name':VisuMZ['BattleGridSystem']['Settings'][_0x4e2d80(0x17c)]['CommandName_Move']??_0x4e2d80(0x336),'help':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)][_0x4e2d80(0x49a)]??_0x4e2d80(0x163),'show':!![]},'partyLeader':{'name':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Window'][_0x4e2d80(0x6c9)]??'\x5cI[87]Make\x20Leader','help':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)]['HelpDesc_PartyLeader']??'Makes\x20character\x20the\x20party\x20leader.','show':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x5c6)]??!![]},'swapMember':{'name':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)]['Window'][_0x4e2d80(0x289)]??_0x4e2d80(0x72e),'help':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x185)]??'Switches\x20character\x20for\x20a\x20different\x20party\x20member.','show':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)][_0x4e2d80(0x167)]??!![]},'addMember':{'name':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x17c)]['CommandName_AddMember']??'\x5cI[73]Add\x20Character','help':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Window'][_0x4e2d80(0x35b)]??_0x4e2d80(0x3f2),'show':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x453)]??!![]},'removeMember':{'name':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x446)]??'\x5cI[74]Move\x20to\x20Reserve','help':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Window'][_0x4e2d80(0x229)]??'Removes\x20character\x20from\x20current\x20party.','show':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x2bf)]??!![]},'classChange':{'name':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Window']['CommandName_Class']??_0x4e2d80(0x28e),'help':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)]['HelpDesc_Class']??_0x4e2d80(0x2d8),'show':VisuMZ[_0x4e2d80(0x398)]['Settings']['Window'][_0x4e2d80(0x63e)]??!![]},'skills':{'name':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x44d)]??'\x5cI[101]View\x20Skills','help':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x153)]??_0x4e2d80(0x65a),'show':VisuMZ['BattleGridSystem']['Settings'][_0x4e2d80(0x17c)][_0x4e2d80(0x45a)]??!![]},'equips':{'name':VisuMZ[_0x4e2d80(0x398)]['Settings'][_0x4e2d80(0x17c)][_0x4e2d80(0x2e1)]??_0x4e2d80(0x202),'help':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Window'][_0x4e2d80(0x2f5)]??_0x4e2d80(0x164),'show':VisuMZ['BattleGridSystem']['Settings']['Window'][_0x4e2d80(0x4e3)]??!![]},'status':{'name':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x235)]??_0x4e2d80(0x1b2),'help':VisuMZ['BattleGridSystem'][_0x4e2d80(0x531)][_0x4e2d80(0x17c)][_0x4e2d80(0x151)]??_0x4e2d80(0x19b),'show':VisuMZ[_0x4e2d80(0x398)][_0x4e2d80(0x531)]['Window']['ShowCommand_Status']??!![]}}},Window_BattleGridTacticsCommand[_0x4e2d80(0x6a9)]['initialize']=function(_0x4fa29a){const _0x18d062=_0x4e2d80;Window_Command['prototype'][_0x18d062(0x55e)][_0x18d062(0x25d)](this,_0x4fa29a),this[_0x18d062(0x461)](),this[_0x18d062(0x3b6)](),this[_0x18d062(0x30d)]=0x0;},Window_BattleGridTacticsCommand['prototype'][_0x4e2d80(0x19a)]=function(){const _0x3bc0e7=_0x4e2d80;Window_Command[_0x3bc0e7(0x6a9)][_0x3bc0e7(0x19a)][_0x3bc0e7(0x25d)](this),this[_0x3bc0e7(0x351)](),this[_0x3bc0e7(0x42c)](),this[_0x3bc0e7(0x247)](),this[_0x3bc0e7(0x701)](0x0);},Window_BattleGridTacticsCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x149)]=function(){const _0xa8dd12=_0x4e2d80,_0x59903c=Window_BattleGridTacticsCommand[_0xa8dd12(0x36f)][_0xa8dd12(0x1a4)],_0x17c956=[];for(const _0x3ed38e of _0x59903c){if(!this[_0xa8dd12(0x4db)](_0x3ed38e))continue;_0x17c956[_0xa8dd12(0x482)](_0x3ed38e),this[_0xa8dd12(0x5dd)](_0x3ed38e);}},Window_BattleGridTacticsCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x4db)]=function(_0x5e3095){const _0x20c7c3=_0x4e2d80,_0x1ad7a7=Window_BattleGridTacticsCommand['SETTINGS'][_0x20c7c3(0x64e)],_0x35a713=_0x1ad7a7[_0x5e3095],_0x349c94=SceneManager[_0x20c7c3(0x671)][_0x20c7c3(0x4c1)],_0xc0fb4a=_0x349c94?_0x349c94['actor']():null;if(!_0x35a713)return![];if(!_0x35a713['show'])return![];if([_0x20c7c3(0x4dc),'skills',_0x20c7c3(0x639),_0x20c7c3(0x604)][_0x20c7c3(0x314)](_0x5e3095)){if(!_0xc0fb4a)return![];}if(_0x5e3095===_0x20c7c3(0x50f)){if(!_0xc0fb4a)return![];if($gameParty[_0x20c7c3(0x6bc)]!==undefined)return![];if($gameParty[_0x20c7c3(0x68b)]!==undefined)return![];if($gameParty[_0x20c7c3(0x23b)]()['length']<=0x1)return![];}if(_0x5e3095==='classChange'){if(!_0xc0fb4a)return![];if(!Imported[_0x20c7c3(0x4a6)])return![];if(!$gameSystem['isMainMenuClassChangeSystemVisible']())return![];}if(_0x5e3095===_0x20c7c3(0x323)){if(!_0xc0fb4a&&Imported[_0x20c7c3(0x53d)])return![];if($gameParty[_0x20c7c3(0x6bc)]!==undefined)return![];if($gameParty[_0x20c7c3(0x68b)]!==undefined)return![];}if(_0x5e3095==='swapMember'){if(!_0xc0fb4a)return![];if($gameParty[_0x20c7c3(0x6bc)]!==undefined)return![];if($gameParty[_0x20c7c3(0x68b)]!==undefined)return![];if($gameParty[_0x20c7c3(0x23b)]()[_0x20c7c3(0x2f8)]<=0x1)return![];}if(_0x5e3095==='addMember'){if(!Imported['VisuMZ_2_PartySystem'])return![];if(_0xc0fb4a)return![];if($gameParty[_0x20c7c3(0x6bc)]!==undefined)return![];if($gameParty[_0x20c7c3(0x68b)]!==undefined)return![];}if(_0x5e3095===_0x20c7c3(0x49f)){if(!Imported['VisuMZ_2_PartySystem'])return![];if(!_0xc0fb4a)return![];if($gameParty[_0x20c7c3(0x6bc)]!==undefined)return![];if($gameParty[_0x20c7c3(0x68b)]!==undefined)return![];}return!![];},Window_BattleGridTacticsCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x5dd)]=function(_0x553f36){const _0x2d7779=_0x4e2d80,_0x5eb7e8=Window_BattleGridTacticsCommand[_0x2d7779(0x36f)]['commands'],_0x2e356e=_0x5eb7e8[_0x553f36],_0x3f8e31=_0x2e356e[_0x2d7779(0x427)];this[_0x2d7779(0x431)](_0x3f8e31,_0x553f36,this[_0x2d7779(0x2b3)](_0x553f36));},Window_BattleGridTacticsCommand[_0x4e2d80(0x6a9)][_0x4e2d80(0x2b3)]=function(_0x468207){const _0x416325=_0x4e2d80,_0x14ed38=SceneManager[_0x416325(0x671)][_0x416325(0x4c1)];if(!_0x14ed38)return![];const _0x5e5947=_0x14ed38[_0x416325(0x70c)]();if(_0x468207===_0x416325(0x50f)){if(_0x5e5947===null)return![];if(_0x5e5947===$gameParty[_0x416325(0x32c)]()[0x0])return![];}if(['skills',_0x416325(0x639),_0x416325(0x604)]['includes'](_0x468207)){if(_0x5e5947===null)return![];}if(_0x468207===_0x416325(0x4dc)){if(_0x5e5947===null)return![];if(!$gameSystem[_0x416325(0x333)]())return![];}if(_0x468207===_0x416325(0x1d8)){if(!$gameSystem[_0x416325(0x301)]())return![];if(!_0x5e5947)return![];if(!_0x5e5947[_0x416325(0x144)]())return![];}if(_0x468207===_0x416325(0x677)){if(_0x5e5947!==null)return![];}if(_0x468207===_0x416325(0x49f)){if(_0x5e5947===null)return![];if(_0x5e5947===$gameParty[_0x416325(0x32c)]()[0x0])return![];if(!_0x5e5947[_0x416325(0x144)]())return![];}return!![];},Window_BattleGridTacticsCommand['prototype'][_0x4e2d80(0x2b1)]=function(){const _0x57817a=_0x4e2d80;this[_0x57817a(0x42c)](),Window_Command[_0x57817a(0x6a9)][_0x57817a(0x2b1)][_0x57817a(0x25d)](this);},Window_BattleGridTacticsCommand['prototype']['drawItem']=function(_0x24cfed){const _0x24e937=_0x4e2d80,_0x8d6217=this[_0x24e937(0x4f7)](_0x24cfed);this[_0x24e937(0x520)](),this[_0x24e937(0x69a)](this[_0x24e937(0x353)](_0x24cfed)),this[_0x24e937(0x4ec)](this[_0x24e937(0x5d5)](_0x24cfed),_0x8d6217['x'],_0x8d6217['y']);},Window_BattleGridTacticsCommand[_0x4e2d80(0x6a9)]['updateHelp']=function(){const _0x91940f=_0x4e2d80,_0x4481b0=this[_0x91940f(0x4fd)]();if(_0x4481b0){const _0x22e150=Window_BattleGridTacticsCommand['SETTINGS'][_0x91940f(0x64e)];this['_helpWindow'][_0x91940f(0x1aa)](_0x22e150[_0x4481b0]?_0x22e150[_0x4481b0][_0x91940f(0x302)]:'');}else this[_0x91940f(0x4a3)][_0x91940f(0x23a)]();};