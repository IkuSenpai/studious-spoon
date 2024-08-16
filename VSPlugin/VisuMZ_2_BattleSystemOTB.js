//=============================================================================
// VisuStella MZ - Battle System - OTB - Order Turn Battle
// VisuMZ_2_BattleSystemOTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemOTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemOTB = VisuMZ.BattleSystemOTB || {};
VisuMZ.BattleSystemOTB.version = 1.15;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.15] [BattleSystemOTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_OTB_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin changes the RPG Maker MZ battle system to "Order Turn Battle",
 * a turn-based battle system where actions are executed immediately and the
 * orders for both the current and next turn are not only visible, but also
 * malleable. New mechanics are introduced where the player can manipulate the
 * turn order of an action's user or action's target in various ways they want.
 * 
 * The two Turn Orders are displayed at the top of the top of the screen to
 * give the player a clear understanding of who's turn it will be when it
 * becomes time to act, making it easier and viable for the player to formulate
 * strategies and adapt to the situation in battle.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "otb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Utilizes the balanced AGI nature of the Default Turn Battle system.
 * * Allows for actions to execute immediately upon selection.
 * * Two Turn Order Displays appear at the top of the screen, giving the player
 *   an idea of who's turn it will be and when, for both the current turn and
 *   the next turn.
 * * Skills and Items can have an "Instant Use" effect, which allows them to
 *   perform an action immediately without using up a turn.
 * * Skills and Items can manipulate the turn order of the action's user or the
 *   action's target(s). This can apply to either the current turn or the next
 *   turn, depending on the notetags and/or action effects used.
 * * The Turn Order Display will give a preview on how turn orders will change
 *   upon specific skills and/or items being used.
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
 * Turn Order Displays
 * 
 * The Two Turn Order Displays will capture the battle's current and next turn
 * orders determined by the BattleManager. This feature does not overwrite any
 * functions, but the Turn Order Displays may or may not conflict with any
 * existing HUD elements that are already positioned on the screen. If so, you
 * can choose to offset the Turn Order Display or move it to a different part
 * of the screen through the plugin parameters.
 * 
 * ---
 * 
 * Agility
 * 
 * Agility behaves slightly different from normal when it comes to the Order
 * Turn Battle system. Aside from the first turn in battle, agility will always
 * calculate the turn order for the "Next Turn" when conducted. This means that
 * any changes to agility values will not have any effect on the next turn's
 * already established turn order.
 * 
 * However, this can be remedied by utilizing the notetags provided by this
 * plugin to alter the Next Turn orders for specific targets. In fact, for
 * skill and item "effects" that add AGI Buffs and/or Debuffs, the target's
 * turn position on the Turn Order Display will be manipulated in accordance.
 * This auto-conversion feature can be disabled in the Plugin Parameters.
 * 
 * ---
 * 
 * Action Speed
 * 
 * Because the Order Turn Battle system already calculates agility speeds
 * before selecting an action to perform, the effects of the actioon speed will
 * not work the same way it did with the default battle system. Instead, the
 * Action Speed will be sent through a formula to determine its effect on the
 * following turn, either pushing the user ahead in next turn's turn order
 * (with a positive speed value) or back (with a negative speed value).
 * 
 * This option can have its formula altered or straight up disabled in the
 * Plugin Parameters.
 * 
 * ---
 * 
 * Infinity Speed and Clamping
 * 
 * Since Action Speeds are decided in such a way, enemies that will survive a
 * stun state past two turns will have "Infinity" speed on the recovery turn,
 * allowing them to act first relative to the rest of the battle participants
 * in order to balance out the turns they've lost.
 * 
 * Enemies with "Infinity" speed cannot be overtaken through turn order
 * manipulation while they are on the "Next Turn" order. If anything, battlers
 * who shift their turn order faster will be just trailing behind them, thus
 * the "clamping" effect. However if this occurs during the "Current Turn"
 * order, all is fair game and any battler can overtake them. Plan out your
 * battle system effects carefully with these rules in mind.
 * 
 * If you do not like the idea of Infinity Speed and/or Clamping, you can turn
 * them off in the Plugin Parameters.
 * 
 * This effect does not affect stun states that last only one turn. The effect
 * will only occur with stun states that last 2 turns or more.
 * 
 * ---
 * 
 * Instant Use
 * 
 * Skills and Items can have an "Instant Use" property which allows them to be
 * used immediately without consuming a turn. This can be used for actions that
 * otherwise do not warrant a whole turn. These can be used for minor buffs,
 * debuffs, toggles, etc.
 * 
 * ---
 * 
 * Force Actions
 * 
 * Due to how OTB behaves, Force Actions have be adjusted to fit the battle
 * system. With other battle systems, force actions are added into a hidden
 * queue that would act upon after the current battler finishes his/her current
 * action. The new changes made with force actions is that they now appear on
 * the queue visibly.
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
 * VisuMZ_2_PartySystem
 * 
 * In battle, the player cannot change entire parties at once from the Party
 * Command Window. The feature will be unaccessible while Order Turn Battle is
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
 * === General OTB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <OTB Help>
 *  description
 *  description
 * </OTB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under OTB.
 * - This is primarily used if the skill behaves differently in OTB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to OTB.
 *
 * ---
 * 
 * === OTB Turn Order Display-Related Notetags ===
 * 
 * These notetags affect the OTB Turn Order Display
 * 
 * ---
 *
 * <OTB Turn Order Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <OTB Turn Order Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <OTB Turn Order Face: Monster, 1>
 * 
 * ---
 * 
 * === Instant Use-Related Notetags ===
 * 
 * ---
 *
 * <OTB Instant>
 * <OTB Instant Use>
 * <OTB Instant Cast>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to be used immediately without consuming a turn.
 *
 * ---
 * 
 * === Added Action Notetags ===
 * 
 * ---
 * 
 * <OTB User Add Current Turn Actions: x>
 * <OTB User Add Next Turn Actions: x>
 * 
 * - Used for: Skill, Item Notetags
 * - Adds extra actions for the user to perform during the current/next turn.
 *   - Added actions will go towards the back of the action list.
 *   - Multi-hit skills/items will trigger this effect multiple times.
 * - Replace 'x' with a number representing the amount of actions to add.
 * 
 * ---
 * 
 * <OTB Target Add Current Turn Actions: x>
 * <OTB Target Add Next Turn Actions: x>
 * 
 * - Used for: Skill, Item Notetags
 * - Adds extra actions for the target to perform during the current/next turn.
 *   - Added actions will go towards the back of the action list.
 *   - Multi-hit skills/items will trigger this effect multiple times.
 * - Replace 'x' with a number representing the amount of actions to add.
 * 
 * ---
 * 
 * === Turn Order Manipulation-Related Notetags ===
 * 
 * ---
 *
 * <OTB User Current Turn: +x>
 * <OTB User Next Turn: +x>
 * <OTB User Follow Turn: +x>
 *
 * <OTB User Current Turn: -x>
 * <OTB User Next Turn: -x>
 * <OTB User Follow Turn: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the user's position in the turn order for the current turn, next
 *   turn, or whichever turn is following.
 * - If using the "Follow" variant, if the user has actions left for the
 *   current turn, it will affect the current turn. If not, it affects the
 *   next turn instead.
 * - Replace 'x' with a number representing the number of slots to change.
 *   - Negative numbers move the user closer to the front.
 *   - Positive numbers move the user towards the back.
 * - This effect only occurs once per skill/item use and at the start of the
 *   action when initializing the skill/item.
 *
 * ---
 *
 * <OTB Target Current Turn: +x>
 * <OTB Target Next Turn: +x>
 * <OTB Target Follow Turn: +x>
 *
 * <OTB Target Current Turn: -x>
 * <OTB Target Next Turn: -x>
 * <OTB Target Follow Turn: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the target's position in the turn order for the current turn, next
 *   turn, or whichever turn is following.
 * - If using the "Follow" variant, if the target has actions left for the
 *   current turn, it will affect the current turn. If not, it affects the
 *   next turn instead.
 * - Replace 'x' with a number representing the number of slots to change.
 *   - Negative numbers move the target closer to the front.
 *   - Positive numbers move the target towards the back.
 * - This effect will occur as many times as there are successfully connected
 *   hits for each target, meaning a target can have its turn order shifted
 *   multiple times.
 * - These are best used with single target skills/items as multi-target skills
 *   may shift multiple targets back and forth with each other if they are
 *   adjacent to one another.
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
 * Actor: Change OTB Turn Order Icon
 * - Changes the icons used for the specific actor(s) on the OTB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Actor: Change OTB Turn Order Face
 * - Changes the faces used for the specific actor(s) on the OTB Turn Order.
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
 * Actor: Clear OTB Turn Order Graphic
 * - Clears the OTB Turn Order graphics for the actor(s).
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
 * Enemy: Change OTB Turn Order Icon
 * - Changes the icons used for the specific enemy(ies) on the OTB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change OTB Turn Order Face
 * - Changes the faces used for the specific enemy(ies) on the OTB Turn Order.
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
 * Enemy: Clear OTB Turn Order Graphic
 * - Clears the OTB Turn Order graphics for the enemy(ies).
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
 * System: OTB Turn Order Visibility
 * - Determine the visibility of the OTB Turn Order Display.
 *
 *   Visibility:
 *   - Changes the visibility of the OTB Turn Order Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Conversion Settings
 * ============================================================================
 *
 * Automatically converts specific mechanics to fit OTB.
 *
 * ---
 *
 * Buffs
 * 
 *   AGI Buff => Current:
 *   - Auto-convert AGI Buff effects for Items/Skills to speed up target's
 *     current Turn Order?
 * 
 *   AGI Buff => Next:
 *   - Auto-convert AGI Buff effects for Items/Skills to speed up target's
 *     next Turn Order?
 *
 * ---
 *
 * Debuffs
 * 
 *   AGI Debuff => Current:
 *   - Auto-convert AGI Debuff effects for Items/Skills to speed up target's
 *     current Turn Order?
 * 
 *   AGI Debuff => Next:
 *   - Auto-convert AGI Debuff effects for Items/Skills to speed up target's
 *     next Turn Order?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Determines the mechanics of Battle System OTB. These range from how Action
 * Times are handled to speed.
 *
 * ---
 *
 * Action Times+
 * 
 *   Enable Action Times?:
 *   - Enable Action Times+ to have an effect on OTB?
 * 
 *     Randomize Order?:
 *     - If enabled, randomize the action order for added actions?
 *
 * ---
 *
 * Speed
 * 
 *   Allow Random Speed?:
 *   - Allow speed to be randomized base off the user's AGI?
 * 
 *   Post-Stun Infinity?:
 *   - After a 2+ turn stun states, battlers have infinity speed for their
 *     recovery turn.
 *   - Once again, this only applies to stun states that last 2+ turns.
 * 
 *     Infinity Clamp?:
 *     - Prevents turn order manipulation from going faster than infinity
 *       speed battlers.
 * 
 *   JS: Initial Speed:
 *   - Code used to calculate initial speed at the start of battle.
 * 
 *   JS: Speed => Order:
 *   - Code used to calculate how action speeds alter next turn's order.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Turn Order Display
 * ============================================================================
 *
 * Turn Order Display settings used for Battle System OTB. These adjust how the
 * two visible turn orders appears in-game.
 *
 * ---
 *
 * General
 * 
 *   Display Position:
 *   - Select where the Turn Order will appear on the screen.
 *     - Top
 *     - Bottom
 * 
 *     Offset X:
 *     - How much to offset the X coordinate by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset the Y coordinate by.
 *     - Negative: up. Positive: down.
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the display when the
 *     help window is open?
 * 
 *     Offset X:
 *     - Reposition the display's X coordinates by this much when the Help
 *       Window is visible.
 * 
 *     Offset Y:
 *     - Reposition the display's Y coordinates by this much when the Help
 *       Window is visible.
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Turn Order.
 *     - Left to Right
 *     - Right to Left
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
 * UI Background
 * 
 *   Background Style:
 *   - Select the style you want for the background.
 *     - fill
 *     - gradient
 *     - image
 *     - transparent
 * 
 *   Image Filename:
 *   - When using the "image" style, select an image from /img/system/ as the
 *     background image.
 * 
 *     Offset X:
 *     - How much do you want to offset the Background Image's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the Background Image's Y position?
 * 
 * ---
 * 
 * UI Text
 * 
 *   Font Size:
 *   - The font size used for parameter values.
 * 
 *   Active Battler Text:
 *   - Text used to display the active battler.
 *   - This text will always be center aligned.
 * 
 *     Offset X:
 *     - How much do you want to offset the text's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the text's Y position?
 * 
 *   Current Turn Text:
 *   - Text used to display the current turn.
 * 
 *     Offset X:
 *     - How much do you want to offset the text's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the text's Y position?
 * 
 *   Next Turn Text:
 *   - Text used to display the next turn.
 * 
 *     Offset X:
 *     - How much do you want to offset the text's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the text's Y position?
 * 
 *   Text Align:
 *   - Text alignment for the Current and Next Turn texts?
 *     - auto
 *     - left
 *     - center
 *     - right
 * 
 * ---
 * 
 * Slots
 * 
 *   Width:
 *   - How many pixels wide should the slots be on the Turn Order display?
 * 
 *   Height:
 *   - How many pixels tall should the slots be on the Turn Order display?
 * 
 *   Preview Scale:
 *   - How much do you want to scale the preview sprites by?
 *   - Use a number between 0 and 1 for the best results.
 * 
 *     Offset X:
 *     - How much do you want to offset the Preview Sprites' X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the Preview Sprites' Y position?
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
 *       Preview Version:
 *       - A different setting is used for the preview version.
 * 
 *     Border Skin:
 *     - Optional. Place a skin on the actor/enemy borders instead of
 *       rendering them?
 * 
 *       Preview Version:
 *       - A different setting is used for the preview version.
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
 *       Preview Version:
 *       - A different setting is used for the preview version.
 * 
 *     Background Skin:
 *     - Optional. Use a skin for the actor background instead of
 *       rendering them?
 * 
 *       Preview Version:
 *       - A different setting is used for the preview version.
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
 * Version 1.15: May 16, 2024
 * * Feature Update!
 * ** Direct removal of stun states will restore actions for battlers for
 *    current turns and follow up turns. Update made by Olivia.
 * 
 * Version 1.14: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused turn order glitches with Action Times+ that
 *    aren't at 100% value. Fix made by Olivia.
 * ** Fixed a bug that caused added Action Times+ to not trigger on actors that
 *    have already exhausted their current turns if raised due to a state.
 *    Fix made by Olivia.
 * 
 * Version 1.13: January 20, 2023
 * * Bug Fixes!
 * ** Fixed a bug where the Forced Action of a battler is not used properly.
 *    Fix made by Arisu.
 * 
 * Version 1.12: December 15, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the OTB Turn Order faces and icons to not change
 *    properly for actors and enemies.
 * 
 * Version 1.10: July 7, 2022
 * * Feature Update!
 * ** When the "Recover All" event command revives a dead unit, that revived
 *    unit can gain actions back if all other conditions are met. Update made
 *    by Olivia.
 * 
 * Version 1.09: June 2, 2022
 * * Documentation Update!
 * ** Added "Force Actions" to "Major Updates" section.
 * *** Due to how OTB behaves, Force Actions have be adjusted to fit the battle
 *     system. With other battle systems, force actions are added into a hidden
 *     queue that would act upon after the current battler finishes his/her
 *     current action. The new changes made with force actions is that they now
 *     appear on the queue visibly.
 * * Bug Fixes!
 * ** Fixed a bug that caused Forced Actions to not work properly while in OTB.
 *    Changes made to Forced Actions will now insert new actions at the front
 *    of the current action queue. Fix made by Olivia.
 * 
 * Version 1.08: March 10, 2022
 * * Feature Update!
 * ** OTB Instant Actions should now appear in the turn order in a more
 *    sensible fashion. Update made by Olivia.
 * 
 * Version 1.07: February 24, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Olivia:
 * *** <OTB User Add Current Turn Actions: x>
 * *** <OTB User Add Next Turn Actions: x>
 * *** <OTB Target Add Current Turn Actions: x>
 * *** <OTB Target Add Next Turn Actions: x>
 * **** Adds extra actions for the user/target to perform during the
 *      current/next turn.
 * **** Added actions will go towards the back of the action list.
 * **** Multi-hit skills/items will trigger this effect multiple times.
 * 
 * Version 1.05: October 28, 2021
 * * Bug Fixes!
 * ** Turn Order display will no longer appear at differing X and Y positions
 *    when using specific battle layouts. Update made by Olivia.
 * 
 * Version 1.04: August 6, 2021
 * * Bug Fixes!
 * ** Enemies with multiple actions will no longer step forward when it's not
 *    their turn. Fix made by Olivia.
 * 
 * Version 1.03: June 25, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: April 16, 2021
 * * Bug Fixes!
 * ** Post-stun infinity clamping should now be adjusted properly for
 *    previewing turn order changes.
 * 
 * Version 1.01: April 9, 2021
 * * Bug Fixes!
 * ** Subsequent battles will properly reset the turn order. Fix by Olivia.
 * 
 * Version 1.00 Official Release Date: April 26, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderActorIcon
 * @text Actor: Change OTB Turn Order Icon
 * @desc Changes the icons used for the specific actor(s) on the OTB Turn Order.
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
 * @command OtbTurnOrderActorFace
 * @text Actor: Change OTB Turn Order Face
 * @desc Changes the faces used for the specific actor(s) on the OTB Turn Order.
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
 * @command OtbTurnOrderClearActorGraphic
 * @text Actor: Clear OTB Turn Order Graphic
 * @desc Clears the OTB Turn Order graphics for the actor(s).
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
 * @command OtbTurnOrderEnemyIcon
 * @text Enemy: Change OTB Turn Order Icon
 * @desc Changes the icons used for the specific enemy(ies) on the OTB Turn Order.
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
 * @command OtbTurnOrderEnemyFace
 * @text Enemy: Change OTB Turn Order Face
 * @desc Changes the faces used for the specific enemy(ies) on the OTB Turn Order.
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
 * @command OtbTurnOrderClearEnemyGraphic
 * @text Enemy: Clear OTB Turn Order Graphic
 * @desc Clears the OTB Turn Order graphics for the enemy(ies).
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
 * @text System: OTB Turn Order Visibility
 * @desc Determine the visibility of the OTB Turn Order Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the OTB Turn Order Display.
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
 * @param BattleSystemOTB
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Conversion:struct
 * @text Conversion Settings
 * @type struct<Conversion>
 * @desc Automatically converts specific mechanics to fit OTB.
 * @default {"Buffs":"","ConvertAgiBuffCurrent:eval":"true","ConvertAgiBuffNext:eval":"true","Debuffs":"","ConvertAgiDebuffCurrent:eval":"true","ConvertAgiDebuffNext:eval":"true"}
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Determines the mechanics of Battle System OTB.
 * @default {"Actions":"","EnableActionTimes:eval":"true","RandomizeActionTimesOrder:eval":"true","Speed":"","AllowRandomSpeed:eval":"false","PostStunInfinitySpeed:eval":"true","InfinityClamp:eval":"true","InitialSpeedJS:func":"\"// Declare Constants\\nconst agi = this.subject().agi;\\n\\n// Create Speed\\nlet speed = agi;\\nif (this.allowRandomSpeed()) {\\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\\n}\\n\\n// Return Speed\\nreturn speed;\"","ConvertSpeedJS:func":"\"// Declare Constants\\nconst item = this.item();\\nconst modifier = 50;\\n\\n// Calculate Order Slots Changed\\nlet change = item.speed / (-modifier);\\nchange = (change >= 0) ? Math.ceil(change) : Math.floor(change);\\n\\n// Return Change\\nreturn change || 0;\""}
 *
 * @param TurnOrder:struct
 * @text Turn Order Display
 * @type struct<TurnOrder>
 * @desc Turn Order Display settings used for Battle System OTB.
 * @default {"General":"","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","RepositionTopForHelp:eval":"true","RepositionTopHelpX:num":"+0","RepositionTopHelpY:num":"+96","RepositionLogWindow:eval":"true","LogWindowOffsetY:num":"+0","OrderDirection:eval":"false","SubjectDistance:num":"16","ScreenBuffer:num":"36","UiBackground":"","BgDimStyle:str":"gradient","BgImageFilename:str":"","BgImageOffsetX:num":"+0","BgImageOffsetY:num":"+0","UiText":"","UiFontSize:num":"16","UiSubjectText:str":"★","UiSubjectOffsetX:num":"+0","UiSubjectOffsetY:num":"-6","UiCurrentText:str":"✦CURRENT TURN✦","UiCurrentOffsetX:num":"+6","UiCurrentOffsetY:num":"-6","UiNextText:str":"✧NEXT TURN✧","UiNextOffsetX:num":"+6","UiNextOffsetY:num":"-6","UiAlignment:str":"auto","Slots":"","SpriteThin:num":"72","SpriteLength:num":"72","PreviewScale:num":"0.5","PreviewOffsetX:num":"+0","PreviewOffsetY:num":"+0","UpdateFrames:num":"24","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","PreviewActorBorderColor:str":"0","ActorSystemBorder:str":"","PreviewActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","PreviewEnemyBorderColor:str":"0","EnemySystemBorder:str":"","PreviewEnemySystemBorder:str":"","BorderThickness:num":"2","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"19","PreviewActorBgColor1:str":"19","ActorBgColor2:str":"9","PreviewActorBgColor2:str":"0","ActorSystemBg:str":"","PreviewActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"19","PreviewEnemyBgColor1:str":"19","EnemyBgColor2:str":"18","PreviewEnemyBgColor2:str":"0","EnemySystemBg:str":"","PreviewEnemySystemBg:str":""}
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
 * Conversion Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Conversion:
 * 
 * @param Buffs
 *
 * @param ConvertAgiBuffCurrent:eval
 * @text AGI Buff => Current
 * @parent Buffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Buff effects for Items/Skills to speed up target's current Turn Order?
 * @default true
 *
 * @param ConvertAgiBuffNext:eval
 * @text AGI Buff => Next
 * @parent Buffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Buff effects for Items/Skills to speed up target's next Turn Order?
 * @default true
 * 
 * @param Debuffs
 *
 * @param ConvertAgiDebuffCurrent:eval
 * @text AGI Debuff => Current
 * @parent Debuffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Debuff effects for Items/Skills to speed up target's current Turn Order?
 * @default true
 *
 * @param ConvertAgiDebuffNext:eval
 * @text AGI Debuff => Next
 * @parent Debuffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Debuff effects for Items/Skills to speed up target's next Turn Order?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param Actions
 * @text Action Times+
 *
 * @param EnableActionTimes:eval
 * @text Enable Action Times?
 * @parent Actions
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Action Times+ to have an effect on OTB?
 * @default true
 *
 * @param RandomizeActionTimesOrder:eval
 * @text Randomize Order?
 * @parent EnableActionTimes:eval
 * @type boolean
 * @on Randomize
 * @off Clumped
 * @desc If enabled, randomize the action order for added actions?
 * @default true
 * 
 * @param Speed
 *
 * @param AllowRandomSpeed:eval
 * @text Allow Random Speed?
 * @parent Speed
 * @type boolean
 * @on Allow
 * @off Disable
 * @desc Allow speed to be randomized base off the user's AGI?
 * @default false
 *
 * @param PostStunInfinitySpeed:eval
 * @text Post-Stun Infinity?
 * @parent Speed
 * @type boolean
 * @on Infinity
 * @off Normal
 * @desc After a 2+ turn stun states, battlers have infinity speed for their recovery turn.
 * @default true
 *
 * @param InfinityClamp:eval
 * @text Infinity Clamp?
 * @parent PostStunInfinitySpeed:eval
 * @type boolean
 * @on Enable Clamp
 * @off Disable Clamp
 * @desc Prevents turn order manipulation from going faster than infinity speed battlers.
 * @default true
 *
 * @param InitialSpeedJS:func
 * @text JS: Initial Speed
 * @parent Speed
 * @type note
 * @desc Code used to calculate initial speed at the start of battle.
 * @default "// Declare Constants\nconst agi = this.subject().agi;\n\n// Create Speed\nlet speed = agi;\nif (this.allowRandomSpeed()) {\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\n}\n\n// Return Speed\nreturn speed;"
 *
 * @param ConvertSpeedJS:func
 * @text JS: Speed => Order
 * @parent Speed
 * @type note
 * @desc Code used to calculate how action speeds alter next turn's order.
 * @default "// Declare Constants\nconst item = this.item();\nconst modifier = 50;\n\n// Calculate Order Slots Changed\nlet change = item.speed / (-modifier);\nchange = (change >= 0) ? Math.ceil(change) : Math.floor(change);\n\n// Return Change\nreturn change || 0;"
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
 * @param RepositionTopHelpX:num
 * @text Offset X
 * @parent RepositionTopForHelp:eval
 * @desc Reposition the display's X coordinates by this much when
 * the Help Window is visible.
 * @default +0
 *
 * @param RepositionTopHelpY:num
 * @text Offset Y
 * @parent RepositionTopForHelp:eval
 * @desc Reposition the display's Y coordinates by this much when
 * the Help Window is visible.
 * @default +96
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
 * @param LogWindowOffsetY:num
 * @text Offset Y
 * @parent RepositionLogWindow:eval
 * @desc How much do you want to offset the Log Window's Y position?
 * @default +0
 *
 * @param OrderDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right
 * @off Right to Left
 * @desc Decide on the direction of the Turn Order.
 * @default false
 *
 * @param SubjectDistance:num
 * @text Subject Distance
 * @parent General
 * @type number
 * @desc How far do you want the currently active battler to
 * distance itself from the rest of the Turn Order?
 * @default 16
 *
 * @param ScreenBuffer:num
 * @text Screen Buffer
 * @parent General
 * @type number
 * @desc What distance do you want the display to be away
 * from the edge of the screen by?
 * @default 36
 *
 * @param UiBackground
 * @text UI Background
 *
 * @param BgDimStyle:str
 * @text Background Style
 * @parent UiBackground
 * @type select
 * @option fill
 * @option gradient
 * @option image
 * @option transparent
 * @desc Select the style you want for the background.
 * @default gradient
 *
 * @param BgImageFilename:str
 * @text Image Filename
 * @parent UiBackground
 * @type file
 * @dir img/system/
 * @desc When using the "image" style, select an image from /img/system/ as the background image.
 * @default 
 *
 * @param BgImageOffsetX:num
 * @text Offset X
 * @parent BgImageFilename:str
 * @desc How much do you want to offset the Background Image's X position?
 * @default +0
 *
 * @param BgImageOffsetY:num
 * @text Offset Y
 * @parent BgImageFilename:str
 * @desc How much do you want to offset the Background Image's Y position?
 * @default +0
 *
 * @param UiText
 * @text UI Text
 *
 * @param UiFontSize:num
 * @text Font Size
 * @parent UiText
 * @desc The font size used for parameter values.
 * @default 16
 *
 * @param UiSubjectText:str
 * @text Active Battler Text
 * @parent UiText
 * @desc Text used to display the active battler.
 * This text will always be center aligned.
 * @default ★
 *
 * @param UiSubjectOffsetX:num
 * @text Offset X
 * @parent UiSubjectText:str
 * @desc How much do you want to offset the text's X position?
 * @default +0
 *
 * @param UiSubjectOffsetY:num
 * @text Offset Y
 * @parent UiSubjectText:str
 * @desc How much do you want to offset the text's Y position?
 * @default -6
 *
 * @param UiCurrentText:str
 * @text Current Turn Text
 * @parent UiText
 * @desc Text used to display the current turn.
 * @default ✦CURRENT TURN✦
 *
 * @param UiCurrentOffsetX:num
 * @text Offset X
 * @parent UiCurrentText:str
 * @desc How much do you want to offset the text's X position?
 * @default +6
 *
 * @param UiCurrentOffsetY:num
 * @text Offset Y
 * @parent UiCurrentText:str
 * @desc How much do you want to offset the text's Y position?
 * @default -6
 *
 * @param UiNextText:str
 * @text Next Turn Text
 * @parent UiText
 * @desc Text used to display the next turn.
 * @default ✧NEXT TURN✧
 *
 * @param UiNextOffsetX:num
 * @text Offset X
 * @parent UiNextText:str
 * @desc How much do you want to offset the text's X position?
 * @default +6
 *
 * @param UiNextOffsetY:num
 * @text Offset Y
 * @parent UiNextText:str
 * @desc How much do you want to offset the text's Y position?
 * @default -6
 *
 * @param UiAlignment:str
 * @text Text Align
 * @parent UiText
 * @type combo
 * @option auto
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Current and Next Turn texts?
 * @default auto
 * 
 * @param Slots
 *
 * @param SpriteThin:num
 * @text Width
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels wide should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param SpriteLength:num
 * @text Height
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels tall should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param PreviewScale:num
 * @text Preview Scale
 * @parent Slots
 * @desc How much do you want to scale the preview sprites by?
 * Use a number between 0 and 1 for the best results.
 * @default 0.5
 *
 * @param PreviewOffsetX:num
 * @text Offset X
 * @parent PreviewScale:num
 * @desc How much do you want to offset the Preview Sprites' X position?
 * @default +0
 *
 * @param PreviewOffsetY:num
 * @text Offset Y
 * @parent PreviewScale:num
 * @desc How much do you want to offset the Preview Sprites' Y position?
 * @default +0
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
 * @param PreviewActorBorderColor:str
 * @text Preview Version
 * @parent ActorBorderColor:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ActorSystemBorder:str
 * @text Border Skin
 * @parent BorderActor
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param PreviewActorSystemBorder:str
 * @text Preview Version
 * @parent ActorSystemBorder:str
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
 * @param PreviewEnemyBorderColor:str
 * @text Preview Version
 * @parent EnemyBorderColor:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param EnemySystemBorder:str
 * @text Border Skin
 * @parent BorderEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param PreviewEnemySystemBorder:str
 * @text Preview Version
 * @parent EnemySystemBorder:str
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
 * @param PreviewActorBgColor1:str
 * @text Preview Version
 * @parent ActorBgColor1:str
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
 * @param PreviewActorBgColor2:str
 * @text Preview Version
 * @parent ActorBgColor2:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ActorSystemBg:str
 * @text Background Skin
 * @parent BackgroundActor
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param PreviewActorSystemBg:str
 * @text Preview Version
 * @parent ActorSystemBg:str
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
 * @param PreviewEnemyBgColor1:str
 * @text Preview Version
 * @parent EnemyBgColor1:str
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
 * @param PreviewEnemyBgColor2:str
 * @text Preview Version
 * @parent EnemyBgColor2:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param EnemySystemBg:str
 * @text Background Skin
 * @parent BackgroundEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 * @param PreviewEnemySystemBg:str
 * @text Preview Version
 * @parent EnemySystemBg:str
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 */
//=============================================================================

const _0xd87de4=_0x3c41;(function(_0x437d72,_0x2825c2){const _0x40fadc=_0x3c41,_0x29396e=_0x437d72();while(!![]){try{const _0x13f80e=parseInt(_0x40fadc(0x2e7))/0x1*(parseInt(_0x40fadc(0x3be))/0x2)+-parseInt(_0x40fadc(0x3d2))/0x3*(parseInt(_0x40fadc(0x39d))/0x4)+-parseInt(_0x40fadc(0x3a4))/0x5*(parseInt(_0x40fadc(0x3d7))/0x6)+-parseInt(_0x40fadc(0x3e4))/0x7*(parseInt(_0x40fadc(0x2dc))/0x8)+-parseInt(_0x40fadc(0x2f2))/0x9+-parseInt(_0x40fadc(0x215))/0xa*(-parseInt(_0x40fadc(0x1dc))/0xb)+parseInt(_0x40fadc(0x318))/0xc;if(_0x13f80e===_0x2825c2)break;else _0x29396e['push'](_0x29396e['shift']());}catch(_0x2237d5){_0x29396e['push'](_0x29396e['shift']());}}}(_0x201d,0x3f351));var label=_0xd87de4(0x1fa),tier=tier||0x0,dependencies=[_0xd87de4(0x2ca),_0xd87de4(0x359)],pluginData=$plugins[_0xd87de4(0x265)](function(_0x104c5b){const _0x9e5620=_0xd87de4;return _0x104c5b[_0x9e5620(0x375)]&&_0x104c5b['description'][_0x9e5620(0x1e4)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0xd87de4(0x2ee)]=function(_0x5721eb,_0x332229){const _0x4a4195=_0xd87de4;for(const _0x87ce2 in _0x332229){if(_0x87ce2[_0x4a4195(0x1f4)](/(.*):(.*)/i)){const _0x2cb40c=String(RegExp['$1']),_0x224143=String(RegExp['$2'])[_0x4a4195(0x3c1)]()[_0x4a4195(0x317)]();let _0x334985,_0xe9829e,_0x159212;switch(_0x224143){case'NUM':_0x334985=_0x332229[_0x87ce2]!==''?Number(_0x332229[_0x87ce2]):0x0;break;case _0x4a4195(0x322):_0xe9829e=_0x332229[_0x87ce2]!==''?JSON['parse'](_0x332229[_0x87ce2]):[],_0x334985=_0xe9829e[_0x4a4195(0x296)](_0x1580c8=>Number(_0x1580c8));break;case _0x4a4195(0x3b2):_0x334985=_0x332229[_0x87ce2]!==''?eval(_0x332229[_0x87ce2]):null;break;case _0x4a4195(0x2ef):_0xe9829e=_0x332229[_0x87ce2]!==''?JSON[_0x4a4195(0x273)](_0x332229[_0x87ce2]):[],_0x334985=_0xe9829e[_0x4a4195(0x296)](_0x2672ce=>eval(_0x2672ce));break;case _0x4a4195(0x32c):_0x334985=_0x332229[_0x87ce2]!==''?JSON[_0x4a4195(0x273)](_0x332229[_0x87ce2]):'';break;case _0x4a4195(0x363):_0xe9829e=_0x332229[_0x87ce2]!==''?JSON[_0x4a4195(0x273)](_0x332229[_0x87ce2]):[],_0x334985=_0xe9829e[_0x4a4195(0x296)](_0x1ec6a5=>JSON['parse'](_0x1ec6a5));break;case'FUNC':_0x334985=_0x332229[_0x87ce2]!==''?new Function(JSON[_0x4a4195(0x273)](_0x332229[_0x87ce2])):new Function(_0x4a4195(0x29d));break;case _0x4a4195(0x2eb):_0xe9829e=_0x332229[_0x87ce2]!==''?JSON[_0x4a4195(0x273)](_0x332229[_0x87ce2]):[],_0x334985=_0xe9829e[_0x4a4195(0x296)](_0x241118=>new Function(JSON['parse'](_0x241118)));break;case'STR':_0x334985=_0x332229[_0x87ce2]!==''?String(_0x332229[_0x87ce2]):'';break;case _0x4a4195(0x2c6):_0xe9829e=_0x332229[_0x87ce2]!==''?JSON[_0x4a4195(0x273)](_0x332229[_0x87ce2]):[],_0x334985=_0xe9829e[_0x4a4195(0x296)](_0x3274c6=>String(_0x3274c6));break;case'STRUCT':_0x159212=_0x332229[_0x87ce2]!==''?JSON['parse'](_0x332229[_0x87ce2]):{},_0x334985=VisuMZ[_0x4a4195(0x2ee)]({},_0x159212);break;case'ARRAYSTRUCT':_0xe9829e=_0x332229[_0x87ce2]!==''?JSON['parse'](_0x332229[_0x87ce2]):[],_0x334985=_0xe9829e[_0x4a4195(0x296)](_0x4cfaf6=>VisuMZ[_0x4a4195(0x2ee)]({},JSON[_0x4a4195(0x273)](_0x4cfaf6)));break;default:continue;}_0x5721eb[_0x2cb40c]=_0x334985;}}return _0x5721eb;},(_0xaeec0d=>{const _0x5744d5=_0xd87de4,_0x1ffcc8=_0xaeec0d[_0x5744d5(0x23a)];for(const _0x293a79 of dependencies){if(!Imported[_0x293a79]){alert(_0x5744d5(0x30f)[_0x5744d5(0x2aa)](_0x1ffcc8,_0x293a79)),SceneManager[_0x5744d5(0x35b)]();break;}}const _0x2d1df5=_0xaeec0d[_0x5744d5(0x280)];if(_0x2d1df5[_0x5744d5(0x1f4)](/\[Version[ ](.*?)\]/i)){const _0x300e9f=Number(RegExp['$1']);_0x300e9f!==VisuMZ[label][_0x5744d5(0x24b)]&&(alert(_0x5744d5(0x264)[_0x5744d5(0x2aa)](_0x1ffcc8,_0x300e9f)),SceneManager[_0x5744d5(0x35b)]());}if(_0x2d1df5[_0x5744d5(0x1f4)](/\[Tier[ ](\d+)\]/i)){const _0x9743fd=Number(RegExp['$1']);_0x9743fd<tier?(alert(_0x5744d5(0x1e9)[_0x5744d5(0x2aa)](_0x1ffcc8,_0x9743fd,tier)),SceneManager[_0x5744d5(0x35b)]()):tier=Math[_0x5744d5(0x3b5)](_0x9743fd,tier);}VisuMZ[_0x5744d5(0x2ee)](VisuMZ[label][_0x5744d5(0x2a7)],_0xaeec0d['parameters']);})(pluginData),PluginManager[_0xd87de4(0x2f7)](pluginData['name'],_0xd87de4(0x1f6),_0x375a83=>{const _0x5f2bec=_0xd87de4;VisuMZ[_0x5f2bec(0x2ee)](_0x375a83,_0x375a83);const _0x590b14=_0x375a83['Actors'],_0x395af4=_0x375a83[_0x5f2bec(0x1ea)];for(const _0x5e7a72 of _0x590b14){const _0x5f2839=$gameActors[_0x5f2bec(0x201)](_0x5e7a72);if(!_0x5f2839)continue;_0x5f2839[_0x5f2bec(0x24a)]=_0x5f2bec(0x331),_0x5f2839[_0x5f2bec(0x2c8)]=_0x395af4;}}),PluginManager[_0xd87de4(0x2f7)](pluginData[_0xd87de4(0x23a)],'OtbTurnOrderActorFace',_0x18ab2d=>{const _0x408334=_0xd87de4;VisuMZ[_0x408334(0x2ee)](_0x18ab2d,_0x18ab2d);const _0x2027ec=_0x18ab2d[_0x408334(0x2ba)],_0x507ce1=_0x18ab2d[_0x408334(0x1c5)],_0x5a94f9=_0x18ab2d['FaceIndex'];for(const _0x56b65c of _0x2027ec){const _0x589e8d=$gameActors[_0x408334(0x201)](_0x56b65c);if(!_0x589e8d)continue;_0x589e8d[_0x408334(0x24a)]=_0x408334(0x3e0),_0x589e8d[_0x408334(0x334)]=_0x507ce1,_0x589e8d['_otbTurnOrderFaceIndex']=_0x5a94f9;}}),PluginManager[_0xd87de4(0x2f7)](pluginData[_0xd87de4(0x23a)],'OtbTurnOrderClearActorGraphic',_0x55d5cf=>{const _0x233a53=_0xd87de4;VisuMZ[_0x233a53(0x2ee)](_0x55d5cf,_0x55d5cf);const _0x1b27da=_0x55d5cf['Actors'];for(const _0x1cebfb of _0x1b27da){const _0x2c3cba=$gameActors[_0x233a53(0x201)](_0x1cebfb);if(!_0x2c3cba)continue;_0x2c3cba['clearTurnOrderOTBGraphics']();}}),PluginManager[_0xd87de4(0x2f7)](pluginData[_0xd87de4(0x23a)],_0xd87de4(0x1e1),_0xb6f399=>{const _0x3e3d5d=_0xd87de4;VisuMZ['ConvertParams'](_0xb6f399,_0xb6f399);const _0x2d438e=_0xb6f399[_0x3e3d5d(0x2fd)],_0x3ed8bb=_0xb6f399[_0x3e3d5d(0x1ea)];for(const _0x252f6a of _0x2d438e){const _0x586b4a=$gameTroop[_0x3e3d5d(0x384)]()[_0x252f6a];if(!_0x586b4a)continue;_0x586b4a[_0x3e3d5d(0x24a)]=_0x3e3d5d(0x331),_0x586b4a[_0x3e3d5d(0x2c8)]=_0x3ed8bb;}}),PluginManager['registerCommand'](pluginData[_0xd87de4(0x23a)],_0xd87de4(0x27a),_0x46fffa=>{const _0x304796=_0xd87de4;VisuMZ[_0x304796(0x2ee)](_0x46fffa,_0x46fffa);const _0x4017a9=_0x46fffa[_0x304796(0x2fd)],_0x6964cc=_0x46fffa[_0x304796(0x1c5)],_0x326e78=_0x46fffa[_0x304796(0x25e)];for(const _0x318c17 of _0x4017a9){const _0x4662f1=$gameTroop['members']()[_0x318c17];if(!_0x4662f1)continue;_0x4662f1[_0x304796(0x24a)]=_0x304796(0x3e0),_0x4662f1[_0x304796(0x334)]=_0x6964cc,_0x4662f1[_0x304796(0x1cc)]=_0x326e78;}}),PluginManager[_0xd87de4(0x2f7)](pluginData[_0xd87de4(0x23a)],_0xd87de4(0x3cb),_0x193809=>{const _0x590ba2=_0xd87de4;VisuMZ['ConvertParams'](_0x193809,_0x193809);const _0x3b7881=_0x193809[_0x590ba2(0x2fd)];for(const _0x560d13 of _0x3b7881){const _0x43e8eb=$gameTroop[_0x590ba2(0x384)]()[_0x560d13];if(!_0x43e8eb)continue;_0x43e8eb['clearTurnOrderOTBGraphics']();}}),PluginManager[_0xd87de4(0x2f7)](pluginData[_0xd87de4(0x23a)],'SystemTurnOrderVisibility',_0x5e24e8=>{const _0x59ec9f=_0xd87de4;VisuMZ[_0x59ec9f(0x2ee)](_0x5e24e8,_0x5e24e8);const _0x4b6b3d=_0x5e24e8['Visible'];$gameSystem['setBattleSystemOTBTurnOrderVisible'](_0x4b6b3d);}),VisuMZ[_0xd87de4(0x1fa)]['RegExp']={'Instant':/<OTB (?:INSTANT|INSTANT CAST|INSTANT USE)>/i,'UserFollOrder':/<OTB USER FOLLOW TURN: ([\+\-]\d+)>/i,'UserCurrOrder':/<OTB USER CURRENT TURN: ([\+\-]\d+)>/i,'UserNextOrder':/<OTB USER NEXT TURN: ([\+\-]\d+)>/i,'TargetFollOrder':/<OTB TARGET FOLLOW TURN: ([\+\-]\d+)>/i,'TargetCurrOrder':/<OTB TARGET CURRENT TURN: ([\+\-]\d+)>/i,'TargetNextOrder':/<OTB TARGET NEXT TURN: ([\+\-]\d+)>/i,'UserAddActionCurrent':/<OTB USER ADD CURRENT TURN (?:ACTION|ACTIONS): (\d+)>/i,'UserAddActionNext':/<OTB USER ADD NEXT TURN (?:ACTION|ACTIONS): (\d+)>/i,'TargetAddActionCurrent':/<OTB TARGET ADD CURRENT TURN (?:ACTION|ACTIONS): (\d+)>/i,'TargetAddActionNext':/<OTB TARGET ADD NEXT TURN (?:ACTION|ACTIONS): (\d+)>/i},DataManager[_0xd87de4(0x3cf)]=function(_0x1b9fc5){const _0x5a952a=_0xd87de4;_0x1b9fc5=_0x1b9fc5[_0x5a952a(0x3c1)]()['trim'](),this[_0x5a952a(0x1f8)]=this['_stateIDs']||{};if(this[_0x5a952a(0x1f8)][_0x1b9fc5])return this['_stateIDs'][_0x1b9fc5];for(const _0x2af740 of $dataStates){if(!_0x2af740)continue;this['_stateIDs'][_0x2af740[_0x5a952a(0x23a)][_0x5a952a(0x3c1)]()['trim']()]=_0x2af740['id'];}return this['_stateIDs'][_0x1b9fc5]||0x0;},ImageManager['svActorHorzCells']=ImageManager[_0xd87de4(0x1ce)]||0x9,ImageManager[_0xd87de4(0x358)]=ImageManager['svActorVertCells']||0x6,SceneManager[_0xd87de4(0x255)]=function(){const _0x170567=_0xd87de4;return this[_0x170567(0x1d6)]&&this[_0x170567(0x1d6)][_0x170567(0x2e1)]===Scene_Battle;},VisuMZ['BattleSystemOTB'][_0xd87de4(0x39c)]=BattleManager['setup'],BattleManager[_0xd87de4(0x1c9)]=function(_0x4bc781,_0x1ae22b,_0x2a0fa6){const _0x3c2895=_0xd87de4;VisuMZ[_0x3c2895(0x1fa)][_0x3c2895(0x39c)][_0x3c2895(0x3af)](this,_0x4bc781,_0x1ae22b,_0x2a0fa6),this[_0x3c2895(0x2c2)]();},BattleManager[_0xd87de4(0x2c2)]=function(){const _0x48e957=_0xd87de4;if(!this['isOTB']())return;this[_0x48e957(0x311)]=[],this['_otb_createdFirstTurnOrders']=![];},VisuMZ[_0xd87de4(0x1fa)]['BattleManager_battleSys']=BattleManager['battleSys'],BattleManager[_0xd87de4(0x261)]=function(){const _0x5bba3f=_0xd87de4;if(this[_0x5bba3f(0x2c7)]())return _0x5bba3f(0x349);return VisuMZ[_0x5bba3f(0x1fa)][_0x5bba3f(0x220)][_0x5bba3f(0x3af)](this);},BattleManager[_0xd87de4(0x2c7)]=function(){const _0x767718=_0xd87de4;return $gameSystem[_0x767718(0x26a)]()===_0x767718(0x349);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x32f)]=BattleManager[_0xd87de4(0x31d)],BattleManager[_0xd87de4(0x31d)]=function(){const _0x55d95d=_0xd87de4;if(this[_0x55d95d(0x2c7)]())return![];return VisuMZ[_0x55d95d(0x1fa)][_0x55d95d(0x32f)][_0x55d95d(0x3af)](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x2a9)]=BattleManager[_0xd87de4(0x2cb)],BattleManager[_0xd87de4(0x2cb)]=function(){const _0x1823a7=_0xd87de4;if(this[_0x1823a7(0x2c7)]())return![];return VisuMZ[_0x1823a7(0x1fa)][_0x1823a7(0x2a9)]['call'](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x2ce)]=BattleManager['isTurnBased'],BattleManager['isTurnBased']=function(){const _0x32842d=_0xd87de4;if(this[_0x32842d(0x2c7)]())return!![];return VisuMZ[_0x32842d(0x1fa)][_0x32842d(0x2ce)]['call'](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x260)]=BattleManager[_0xd87de4(0x37b)],BattleManager[_0xd87de4(0x37b)]=function(){const _0x26289f=_0xd87de4;VisuMZ[_0x26289f(0x1fa)][_0x26289f(0x260)]['call'](this),this[_0x26289f(0x2c7)]()&&$gameParty[_0x26289f(0x3a0)]()&&!this['_surprise']&&this[_0x26289f(0x24f)]();},BattleManager['startInputOTB']=function(){const _0x5bd445=_0xd87de4;this[_0x5bd445(0x211)]();},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x1f9)]=BattleManager[_0xd87de4(0x20a)],BattleManager['processTurn']=function(){const _0x197eb2=_0xd87de4;this[_0x197eb2(0x2c7)]()?this[_0x197eb2(0x294)]():VisuMZ[_0x197eb2(0x1fa)][_0x197eb2(0x1f9)][_0x197eb2(0x3af)](this);},BattleManager[_0xd87de4(0x294)]=function(){const _0x3da120=_0xd87de4,_0x4ce596=this[_0x3da120(0x28a)];if(_0x4ce596['isActor']()&&_0x4ce596[_0x3da120(0x3a0)]()){const _0x2ad10f=_0x4ce596['currentAction']();if(!_0x2ad10f)VisuMZ[_0x3da120(0x1fa)][_0x3da120(0x1f9)]['call'](this);else _0x2ad10f[_0x3da120(0x1d8)]?VisuMZ[_0x3da120(0x1fa)]['BattleManager_processTurn'][_0x3da120(0x3af)](this):(this['_currentActor']=_0x4ce596,this[_0x3da120(0x229)]());}else VisuMZ[_0x3da120(0x1fa)]['BattleManager_processTurn'][_0x3da120(0x3af)](this);},VisuMZ[_0xd87de4(0x1fa)]['BattleManager_finishActorInput']=BattleManager[_0xd87de4(0x248)],BattleManager[_0xd87de4(0x248)]=function(){const _0x23832e=_0xd87de4;this['isOTB']()?VisuMZ[_0x23832e(0x1fa)][_0x23832e(0x1f9)]['call'](this):VisuMZ[_0x23832e(0x1fa)]['BattleManager_finishActorInput'][_0x23832e(0x3af)](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x22c)]=BattleManager[_0xd87de4(0x1cb)],BattleManager[_0xd87de4(0x1cb)]=function(){const _0x1ae6f7=_0xd87de4;this['isOTB']()?this[_0x1ae6f7(0x2bc)]():VisuMZ['BattleSystemOTB'][_0x1ae6f7(0x22c)][_0x1ae6f7(0x3af)](this);},BattleManager[_0xd87de4(0x2bc)]=function(){const _0x26f40e=_0xd87de4;this[_0x26f40e(0x2c4)]=null,this[_0x26f40e(0x32d)]=![];},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x3d6)]=BattleManager[_0xd87de4(0x3b7)],BattleManager[_0xd87de4(0x3b7)]=function(){const _0x26ae18=_0xd87de4;this[_0x26ae18(0x25f)](),VisuMZ[_0x26ae18(0x1fa)]['BattleManager_endAction'][_0x26ae18(0x3af)](this),this[_0x26ae18(0x286)]();},BattleManager[_0xd87de4(0x25f)]=function(){const _0x4404dc=_0xd87de4;if(!this[_0x4404dc(0x2c7)]())return;this['removeActionBattlersOTB']();this[_0x4404dc(0x28a)]&&this['_subject'][_0x4404dc(0x397)]();if(this[_0x4404dc(0x28a)]&&this[_0x4404dc(0x28a)]['canMove']()&&this[_0x4404dc(0x285)]['includes'](this[_0x4404dc(0x28a)])){const _0x292667=this[_0x4404dc(0x28a)][_0x4404dc(0x1e8)][_0x4404dc(0x265)](_0x439752=>_0x439752[_0x4404dc(0x1d8)]);this['_subject'][_0x4404dc(0x330)]();if(_0x292667){let _0x352cad=_0x292667['length'];while(_0x352cad--){this['_subject'][_0x4404dc(0x1e8)][_0x4404dc(0x205)]();}this[_0x4404dc(0x28a)][_0x4404dc(0x1e8)]=_0x292667[_0x4404dc(0x2ad)](this[_0x4404dc(0x28a)][_0x4404dc(0x1e8)]);}}},BattleManager[_0xd87de4(0x286)]=function(){const _0x158b4a=_0xd87de4;if(!this[_0x158b4a(0x2c7)]())return;this[_0x158b4a(0x32b)]();this[_0x158b4a(0x28a)]&&(this[_0x158b4a(0x278)](this['_subject']),this[_0x158b4a(0x28a)]=null);this[_0x158b4a(0x347)]['length']>0x0&&(this[_0x158b4a(0x28a)]=this['getNextSubject']());;},BattleManager['OTB_ADDED_ACTION_TIMES']=VisuMZ['BattleSystemOTB']['Settings']['Mechanics'][_0xd87de4(0x230)],BattleManager['OTB_ADDED_RANDOMIZE_ADDED_ACTION_ORDER']=VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x2a7)][_0xd87de4(0x2c3)][_0xd87de4(0x291)],BattleManager[_0xd87de4(0x2b1)]=VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x2a7)]['Mechanics'][_0xd87de4(0x26d)],VisuMZ['BattleSystemOTB'][_0xd87de4(0x1b6)]=BattleManager[_0xd87de4(0x277)],BattleManager[_0xd87de4(0x277)]=function(){const _0x45ef30=_0xd87de4;this[_0x45ef30(0x2c7)]()?this[_0x45ef30(0x30a)]():VisuMZ[_0x45ef30(0x1fa)]['BattleManager_makeActionOrders']['call'](this);},BattleManager['makeActionOrdersOTB']=function(){const _0x38f139=_0xd87de4;let _0x29fc36=this[_0x38f139(0x2c5)]?0x1:0x2;while(_0x29fc36--){this['makeNextActionOrdersOTB']();}const _0x1469fb=!this[_0x38f139(0x2c5)];this[_0x38f139(0x2c5)]=!![];},BattleManager[_0xd87de4(0x2c0)]=function(){const _0x41d03b=_0xd87de4;this[_0x41d03b(0x285)]=this[_0x41d03b(0x311)],this['otbShiftNextTurnSpritesToCurrentTurn']();const _0x44ed51=[];_0x44ed51['push'](...$gameParty[_0x41d03b(0x37c)]()),_0x44ed51['push'](...$gameTroop[_0x41d03b(0x384)]());for(const _0x555d0d of _0x44ed51){_0x555d0d[_0x41d03b(0x1e3)]();}_0x44ed51[_0x41d03b(0x3df)]((_0x44890,_0x46d526)=>_0x46d526[_0x41d03b(0x2ec)]()-_0x44890[_0x41d03b(0x2ec)]()),this[_0x41d03b(0x311)]=_0x44ed51,this['otbApplyActionTimes'](),this[_0x41d03b(0x32b)](),this[_0x41d03b(0x2d0)]();},BattleManager[_0xd87de4(0x34d)]=function(){const _0x29766c=_0xd87de4;if(!BattleManager[_0x29766c(0x268)])return;const _0x4f65ed=this[_0x29766c(0x311)],_0x37ffcf=this[_0x29766c(0x3a6)]();for(const _0x3ead75 of _0x37ffcf){if(!_0x3ead75)continue;if(!_0x3ead75['isAppeared']())continue;if(!_0x3ead75[_0x29766c(0x1be)]())continue;if(!_0x4f65ed[_0x29766c(0x1e4)](_0x3ead75))continue;const _0x6d9fe8=_0x4f65ed[_0x29766c(0x3ac)](_0x3ead75);let _0x41992c=_0x3ead75['makeActionTimes']()-0x1;while(_0x41992c--){let _0x590f74=_0x6d9fe8;BattleManager['OTB_ADDED_RANDOMIZE_ADDED_ACTION_ORDER']&&(_0x590f74=Math[_0x29766c(0x2e5)](_0x4f65ed['length']-_0x6d9fe8)+_0x6d9fe8),_0x4f65ed[_0x29766c(0x25d)](_0x590f74,0x0,_0x3ead75);}}},BattleManager[_0xd87de4(0x32b)]=function(){const _0x2fb739=_0xd87de4;if(!this[_0x2fb739(0x2c7)]())return;this[_0x2fb739(0x285)]=this[_0x2fb739(0x285)]||[],this['_actionBattlers']['remove'](null),this[_0x2fb739(0x285)]['remove'](undefined),this['_actionBattlers']=this[_0x2fb739(0x285)]['filter'](_0x194f04=>_0x194f04[_0x2fb739(0x21a)]()),this[_0x2fb739(0x285)]=this[_0x2fb739(0x285)]['filter'](_0x5257b9=>VisuMZ[_0x2fb739(0x1fa)][_0x2fb739(0x342)](_0x5257b9)),this[_0x2fb739(0x27c)]&&(this[_0x2fb739(0x285)]=this['_actionBattlers'][_0x2fb739(0x265)](_0x10f414=>!_0x10f414[_0x2fb739(0x243)]())),this[_0x2fb739(0x2da)]&&(this['_actionBattlers']=this['_actionBattlers'][_0x2fb739(0x265)](_0x15b116=>!_0x15b116[_0x2fb739(0x1d2)]())),this[_0x2fb739(0x311)]=this['_otb_actionBattlersNext']||[],this[_0x2fb739(0x311)][_0x2fb739(0x370)](null),this[_0x2fb739(0x311)][_0x2fb739(0x370)](undefined),this['_otb_actionBattlersNext']=this['_otb_actionBattlersNext'][_0x2fb739(0x265)](_0x180a69=>_0x180a69[_0x2fb739(0x21a)]()),this[_0x2fb739(0x311)]=this[_0x2fb739(0x311)][_0x2fb739(0x265)](_0x29c9f5=>VisuMZ['BattleSystemOTB'][_0x2fb739(0x34f)](_0x29c9f5)),this[_0x2fb739(0x393)](),this['refreshTurnOrder']();},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x342)]=function(_0x3063e0){const _0x2589c9=_0xd87de4;if(!_0x3063e0)return![];if(!_0x3063e0[_0x2589c9(0x1be)]())return![];if(!_0x3063e0['isAppeared']())return![];return _0x3063e0[_0x2589c9(0x30e)]();},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x34f)]=function(_0xb744af){const _0x34edd4=_0xd87de4;if(!_0xb744af)return![];const _0x8f82d7=JsonEx['makeDeepCopy'](_0xb744af);return _0x8f82d7[_0x34edd4(0x3d4)]=!![],_0x8f82d7[_0x34edd4(0x22b)]=!![],_0x8f82d7['updateStateTurns'](),_0x8f82d7[_0x34edd4(0x223)](0x1),_0x8f82d7[_0x34edd4(0x223)](0x2),_0x8f82d7[_0x34edd4(0x310)](),VisuMZ[_0x34edd4(0x1fa)][_0x34edd4(0x342)](_0x8f82d7);},BattleManager['turnOrderChangeOTB']=function(_0x5c7598,_0x18cbd4,_0x59e6ef){const _0x1e5168=_0xd87de4;if(!_0x18cbd4)return;const _0x3dc068=_0x59e6ef?this[_0x1e5168(0x311)]:this[_0x1e5168(0x285)];if(!_0x3dc068)return;if(!_0x3dc068[_0x1e5168(0x1e4)](_0x5c7598))return;const _0x4be99e=VisuMZ[_0x1e5168(0x1fa)][_0x1e5168(0x23d)](_0x5c7598,_0x3dc068),_0x2cf02f=_0x59e6ef?VisuMZ[_0x1e5168(0x1fa)][_0x1e5168(0x1da)](_0x3dc068):0x0,_0x317c50=_0x4be99e['length']-0x1;for(let _0x4e6eca=_0x317c50;_0x4e6eca>=0x0;_0x4e6eca--){_0x3dc068[_0x1e5168(0x25d)](_0x4be99e[_0x4e6eca],0x1);}for(var _0x5057f4=0x0;_0x5057f4<_0x4be99e[_0x1e5168(0x383)];_0x5057f4++){var _0x5a1420=(_0x4be99e[_0x5057f4]-_0x18cbd4)['clamp'](_0x2cf02f,_0x3dc068[_0x1e5168(0x383)]);_0x3dc068['splice'](_0x5a1420,0x0,_0x5c7598);}this['removeActionBattlersOTB'](),this[_0x1e5168(0x390)]();},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x23d)]=function(_0x5b39e8,_0x19baf1){const _0x56698f=_0xd87de4,_0x5c6267=[],_0x3355a5=_0x19baf1[_0x56698f(0x383)];for(let _0x361d59=0x0;_0x361d59<_0x3355a5;_0x361d59++){if(_0x19baf1[_0x361d59]===_0x5b39e8)_0x5c6267[_0x56698f(0x3ea)](_0x361d59);}return _0x5c6267;},VisuMZ['BattleSystemOTB'][_0xd87de4(0x1da)]=function(_0x421bf2){const _0xc6ccfa=_0xd87de4;if(!BattleManager['OTB_STUN_INFINITY_CLAMP'])return 0x0;if(!_0x421bf2)return 0x0;let _0x498fc6=0x0;const _0x1744b9=_0x421bf2[_0xc6ccfa(0x383)];for(let _0x1422e0=0x0;_0x1422e0<_0x1744b9;_0x1422e0++){const _0x44973a=_0x421bf2[_0x1422e0];if(!_0x44973a)continue;if(_0x44973a['speed']()!==Infinity)return _0x1422e0;else _0x498fc6++;}return _0x498fc6;},BattleManager[_0xd87de4(0x309)]=function(){const _0x20f23e=_0xd87de4;if(!this[_0x20f23e(0x2c7)]())return;const _0x853ceb=SceneManager[_0x20f23e(0x1d6)][_0x20f23e(0x314)];if(!_0x853ceb)return;_0x853ceb[_0x20f23e(0x3dc)]();},BattleManager[_0xd87de4(0x2d0)]=function(){const _0xa3e9a7=_0xd87de4;if(!this['isOTB']())return;const _0x30f697=SceneManager[_0xa3e9a7(0x1d6)][_0xa3e9a7(0x314)];if(!_0x30f697)return;_0x30f697[_0xa3e9a7(0x275)]();},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x284)]=BattleManager[_0xd87de4(0x2af)],BattleManager['getNextSubject']=function(){const _0x4ed5e9=_0xd87de4;return this[_0x4ed5e9(0x28a)]=VisuMZ[_0x4ed5e9(0x1fa)][_0x4ed5e9(0x284)][_0x4ed5e9(0x3af)](this),this[_0x4ed5e9(0x2c7)]()&&this['_subject']&&this[_0x4ed5e9(0x2d8)](this[_0x4ed5e9(0x28a)]),this[_0x4ed5e9(0x28a)];},BattleManager[_0xd87de4(0x2d8)]=function(_0x3346da){const _0x6271e8=_0xd87de4;if(!this[_0x6271e8(0x2c7)]())return;const _0x1f51ce=SceneManager[_0x6271e8(0x1d6)][_0x6271e8(0x314)];if(!_0x1f51ce)return;if(!_0x3346da)return;_0x1f51ce[_0x6271e8(0x1d4)](_0x3346da);},BattleManager[_0xd87de4(0x390)]=function(){const _0x43e191=_0xd87de4;if(!this[_0x43e191(0x2c7)]())return;const _0x2af1eb=SceneManager[_0x43e191(0x1d6)][_0x43e191(0x314)];if(!_0x2af1eb)return;_0x2af1eb[_0x43e191(0x22a)]();},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x1bb)]=BattleManager[_0xd87de4(0x3a2)],BattleManager[_0xd87de4(0x3a2)]=function(){const _0x4e49e0=_0xd87de4;VisuMZ['BattleSystemOTB'][_0x4e49e0(0x1bb)][_0x4e49e0(0x3af)](this),this[_0x4e49e0(0x2c7)]()&&(this[_0x4e49e0(0x3cc)](),$gameParty[_0x4e49e0(0x27e)](),$gameTroop[_0x4e49e0(0x27e)]());},BattleManager[_0xd87de4(0x3cc)]=function(){const _0x1400dd=_0xd87de4;if(!this['isOTB']())return;const _0x29337a=SceneManager[_0x1400dd(0x1d6)][_0x1400dd(0x314)];if(!_0x29337a)return;_0x29337a[_0x1400dd(0x22f)]();},BattleManager[_0xd87de4(0x393)]=function(){const _0x5187c3=_0xd87de4;if(!this['isOTB']())return;const _0xa9cb88=SceneManager[_0x5187c3(0x1d6)]['_otbTurnOrderWindow'];if(!_0xa9cb88)return;_0xa9cb88['removeUnableTurnOrderSprites']();},BattleManager[_0xd87de4(0x348)]=function(_0x48e5bc){const _0x1a7dc3=_0xd87de4;if(!_0x48e5bc)return;const _0x8bf8e1=_0x48e5bc[_0x1a7dc3(0x3e2)]();_0x48e5bc[_0x1a7dc3(0x330)]();if(!this[_0x1a7dc3(0x285)][_0x1a7dc3(0x1e4)](_0x48e5bc)){const _0x2fd82c=Math['max'](0x0,_0x8bf8e1-(_0x48e5bc[_0x1a7dc3(0x34e)]||0x0));this[_0x1a7dc3(0x20c)](_0x48e5bc,_0x2fd82c,this[_0x1a7dc3(0x285)]);}if(!this[_0x1a7dc3(0x311)][_0x1a7dc3(0x1e4)](_0x48e5bc)){const _0x3efbd3=_0x8bf8e1;this[_0x1a7dc3(0x20c)](_0x48e5bc,_0x3efbd3,this[_0x1a7dc3(0x311)]);}},BattleManager[_0xd87de4(0x20c)]=function(_0xccf6a,_0xf1db99,_0x48998a){const _0x4b5804=_0xd87de4;if(!this[_0x4b5804(0x2c7)]())return;const _0x139ea2=SceneManager['_scene'][_0x4b5804(0x314)];_0xccf6a[_0x4b5804(0x330)]();while(_0xf1db99--){_0x48998a[_0x4b5804(0x3ea)](_0xccf6a),_0x139ea2&&_0x139ea2[_0x4b5804(0x305)](_0xccf6a,_0x48998a);}},BattleManager['otbUnshiftBattlerToTurnOrders']=function(_0xb80f68){const _0x849b49=_0xd87de4;if(!_0xb80f68)return;const _0x333cb6=_0xb80f68['makeActionTimes']();_0xb80f68[_0x849b49(0x330)]();if(!this[_0x849b49(0x285)][_0x849b49(0x1e4)](_0xb80f68)){const _0x2e13f0=Math[_0x849b49(0x3b5)](0x0,_0x333cb6-(_0xb80f68[_0x849b49(0x34e)]||0x0));this[_0x849b49(0x2bb)](_0xb80f68,_0x2e13f0,this['_actionBattlers']);}if(!this[_0x849b49(0x311)][_0x849b49(0x1e4)](_0xb80f68)){const _0x279b56=_0x333cb6;this[_0x849b49(0x2bb)](_0xb80f68,_0x279b56,this[_0x849b49(0x311)]);}},BattleManager['otbAddBattlerToTurnOrderAtStart']=function(_0x1c0c01,_0x17be99,_0x502dc0){const _0x2e901f=_0xd87de4;if(!this[_0x2e901f(0x2c7)]())return;const _0x3f88dd=SceneManager[_0x2e901f(0x1d6)][_0x2e901f(0x314)];while(_0x17be99--){_0x502dc0[_0x2e901f(0x259)](_0x1c0c01),_0x3f88dd&&_0x3f88dd[_0x2e901f(0x2bb)](_0x1c0c01,_0x502dc0);}},BattleManager[_0xd87de4(0x306)]=function(_0x5d042e){const _0xc5a677=_0xd87de4;if(!this['isOTB']())return;const _0x16ac49=this[_0xc5a677(0x285)],_0x8c59a8=_0x5d042e===this[_0xc5a677(0x28a)]?0x0:0x1;let _0x3ee993=0x0;for(let _0x93ac6c=0x0;_0x93ac6c<_0x16ac49[_0xc5a677(0x383)];_0x93ac6c++){const _0x1beecc=_0x16ac49[_0x93ac6c];if(!_0x1beecc)continue;if(!_0x1beecc[_0xc5a677(0x1e8)])continue;if(!_0x1beecc[_0xc5a677(0x1e8)][_0x8c59a8])continue;if(!_0x1beecc[_0xc5a677(0x1e8)][_0x8c59a8][_0xc5a677(0x1d8)])continue;_0x3ee993=_0x93ac6c;}this[_0xc5a677(0x285)][_0xc5a677(0x25d)](_0x3ee993,0x0,_0x5d042e);const _0x328ec1=SceneManager[_0xc5a677(0x1d6)][_0xc5a677(0x314)];_0x328ec1&&_0x328ec1[_0xc5a677(0x3d3)](_0x5d042e,_0x3ee993);},BattleManager[_0xd87de4(0x27d)]=function(){const _0x5e6ce1=_0xd87de4;if(!this[_0x5e6ce1(0x2c7)]())return;const _0x67137b=SceneManager[_0x5e6ce1(0x1d6)]['_otbTurnOrderWindow'];if(!_0x67137b)return;_0x67137b[_0x5e6ce1(0x2a4)](null);},BattleManager[_0xd87de4(0x1b0)]=function(){const _0x19ae8d=_0xd87de4;if(!this[_0x19ae8d(0x2c7)]())return;const _0x7e8fb0=SceneManager[_0x19ae8d(0x1d6)]['_otbTurnOrderWindow'];if(!_0x7e8fb0)return;_0x7e8fb0[_0x19ae8d(0x2a4)](this[_0x19ae8d(0x2d5)]());},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x27f)]=Game_System[_0xd87de4(0x1ca)][_0xd87de4(0x2ab)],Game_System[_0xd87de4(0x1ca)][_0xd87de4(0x2ab)]=function(){const _0xdf049a=_0xd87de4;VisuMZ['BattleSystemOTB'][_0xdf049a(0x27f)][_0xdf049a(0x3af)](this),this[_0xdf049a(0x2d1)]();},Game_System['prototype'][_0xd87de4(0x2d1)]=function(){const _0x29179c=_0xd87de4;this[_0x29179c(0x258)]=!![];},Game_System[_0xd87de4(0x1ca)][_0xd87de4(0x2e3)]=function(){const _0xdd84fb=_0xd87de4;return this[_0xdd84fb(0x258)]===undefined&&this['initBattleSystemOTB'](),this['_otbTurnOrderVisible'];},Game_System['prototype'][_0xd87de4(0x320)]=function(_0x576667){const _0x4cb8c1=_0xd87de4;this[_0x4cb8c1(0x258)]===undefined&&this[_0x4cb8c1(0x2d1)](),this[_0x4cb8c1(0x258)]=_0x576667;},Game_Action['OTB_CONVERT_AGI_BUFF_CURRENT_TURN']=VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x2a7)][_0xd87de4(0x367)][_0xd87de4(0x33d)],Game_Action[_0xd87de4(0x1b2)]=VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x2a7)][_0xd87de4(0x367)][_0xd87de4(0x333)],Game_Action[_0xd87de4(0x298)]=VisuMZ['BattleSystemOTB'][_0xd87de4(0x2a7)]['Conversion'][_0xd87de4(0x2f1)],Game_Action[_0xd87de4(0x2d2)]=VisuMZ[_0xd87de4(0x1fa)]['Settings'][_0xd87de4(0x367)][_0xd87de4(0x38d)],VisuMZ[_0xd87de4(0x1fa)]['Game_Action_speed']=Game_Action[_0xd87de4(0x1ca)][_0xd87de4(0x2ec)],Game_Action['prototype'][_0xd87de4(0x2ec)]=function(){const _0x5c1561=_0xd87de4;return BattleManager['isOTB']()?0x0:VisuMZ['BattleSystemOTB'][_0x5c1561(0x202)][_0x5c1561(0x3af)](this);},VisuMZ[_0xd87de4(0x1fa)]['Game_Action_applyGlobal']=Game_Action[_0xd87de4(0x1ca)][_0xd87de4(0x3c5)],Game_Action['prototype'][_0xd87de4(0x3c5)]=function(){const _0xd13d42=_0xd87de4;VisuMZ[_0xd13d42(0x1fa)]['Game_Action_applyGlobal'][_0xd13d42(0x3af)](this),this[_0xd13d42(0x3e6)]();},Game_Action[_0xd87de4(0x1ca)]['applyGlobalBattleSystemOTB']=function(){const _0x4c859c=_0xd87de4;if(!SceneManager[_0x4c859c(0x255)]())return;if(!BattleManager[_0x4c859c(0x2c7)]())return;if(!this[_0x4c859c(0x38e)]())return;if(!this[_0x4c859c(0x23b)]())return;const _0x2d9d05=VisuMZ['BattleSystemOTB'][_0x4c859c(0x231)],_0x925975=this['item']()[_0x4c859c(0x281)];_0x925975[_0x4c859c(0x1f4)](_0x2d9d05[_0x4c859c(0x236)])&&this[_0x4c859c(0x23b)]()[_0x4c859c(0x2a2)](0x1);let _0x498470=this[_0x4c859c(0x204)](),_0x30937f=this['otbCalcUserNextOrderChange']();_0x498470!==0x0&&BattleManager[_0x4c859c(0x3d9)](this[_0x4c859c(0x23b)](),-_0x498470,![]),_0x30937f!==0x0&&BattleManager[_0x4c859c(0x3d9)](this['subject'](),-_0x30937f,!![]);},Game_Action['prototype'][_0xd87de4(0x204)]=function(){const _0x439d42=_0xd87de4;if(!SceneManager[_0x439d42(0x255)]())return 0x0;if(!BattleManager[_0x439d42(0x2c7)]())return 0x0;if(!this[_0x439d42(0x38e)]())return 0x0;if(!this[_0x439d42(0x23b)]())return 0x0;if(!this[_0x439d42(0x23b)]()[_0x439d42(0x1dd)]())return 0x0;const _0xf92353=VisuMZ[_0x439d42(0x1fa)][_0x439d42(0x231)],_0x451b10=this[_0x439d42(0x38e)]()[_0x439d42(0x281)],_0x52387b=BattleManager[_0x439d42(0x285)]||[];let _0x4639aa=0x0;return _0x451b10[_0x439d42(0x1f4)](_0xf92353['UserFollOrder'])&&(_0x52387b[_0x439d42(0x1e4)](this[_0x439d42(0x23b)]())&&(_0x4639aa+=Number(RegExp['$1']))),_0x451b10['match'](_0xf92353[_0x439d42(0x303)])&&(_0x4639aa+=Number(RegExp['$1'])),_0x4639aa;},Game_Action[_0xd87de4(0x1ca)][_0xd87de4(0x262)]=function(){const _0x2745ea=_0xd87de4;if(!SceneManager[_0x2745ea(0x255)]())return 0x0;if(!BattleManager[_0x2745ea(0x2c7)]())return 0x0;if(!this['item']())return 0x0;if(!this[_0x2745ea(0x23b)]())return 0x0;if(!this[_0x2745ea(0x23b)]()[_0x2745ea(0x1dd)]())return 0x0;const _0x15d978=VisuMZ[_0x2745ea(0x1fa)]['Settings'][_0x2745ea(0x2c3)],_0x57fb6a=VisuMZ[_0x2745ea(0x1fa)]['RegExp'],_0x68d41e=this[_0x2745ea(0x38e)]()[_0x2745ea(0x281)],_0x307acc=BattleManager[_0x2745ea(0x311)]||[];let _0x24d5c2=0x0;return _0x15d978[_0x2745ea(0x352)]&&(_0x24d5c2+=_0x15d978[_0x2745ea(0x352)][_0x2745ea(0x3af)](this)),_0x68d41e[_0x2745ea(0x1f4)](_0x57fb6a[_0x2745ea(0x23c)])&&(_0x307acc['includes'](this[_0x2745ea(0x23b)]())&&(_0x24d5c2+=Number(RegExp['$1']))),_0x68d41e[_0x2745ea(0x1f4)](_0x57fb6a[_0x2745ea(0x301)])&&(_0x24d5c2+=Number(RegExp['$1'])),_0x24d5c2;},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x324)]=Game_Action[_0xd87de4(0x1ca)][_0xd87de4(0x2b2)],Game_Action[_0xd87de4(0x1ca)]['applyItemUserEffect']=function(_0x8d03){const _0x11bf4d=_0xd87de4;VisuMZ[_0x11bf4d(0x1fa)][_0x11bf4d(0x324)][_0x11bf4d(0x3af)](this,_0x8d03),this[_0x11bf4d(0x345)](_0x8d03),this[_0x11bf4d(0x3aa)](_0x8d03);},Game_Action['prototype']['applyItemAddedActionOTB']=function(_0x5158a6){const _0x584d53=_0xd87de4;if(!SceneManager[_0x584d53(0x255)]())return;if(!BattleManager[_0x584d53(0x2c7)]())return;if(!this['item']())return;if(!_0x5158a6)return;const _0x415b02=VisuMZ[_0x584d53(0x1fa)]['RegExp'],_0x5b5cc1=this[_0x584d53(0x38e)]()['note'];if(_0x5b5cc1['match'](_0x415b02[_0x584d53(0x32e)])){const _0x2bf26b=!![],_0xe0428a=Number(RegExp['$1'])||0x0;this[_0x584d53(0x23b)]()['otbAddActions'](_0xe0428a,_0x2bf26b);}if(_0x5b5cc1[_0x584d53(0x1f4)](_0x415b02[_0x584d53(0x279)])){const _0x2ab2be=![],_0x282dc9=Number(RegExp['$1'])||0x0;this[_0x584d53(0x23b)]()[_0x584d53(0x396)](_0x282dc9,_0x2ab2be);}if(_0x5b5cc1[_0x584d53(0x1f4)](_0x415b02[_0x584d53(0x1b3)])){const _0x233fed=!![],_0x2947c7=Number(RegExp['$1'])||0x0;_0x5158a6[_0x584d53(0x396)](_0x2947c7,_0x233fed);}if(_0x5b5cc1[_0x584d53(0x1f4)](_0x415b02[_0x584d53(0x271)])){const _0x6cafd6=![],_0x425568=Number(RegExp['$1'])||0x0;_0x5158a6['otbAddActions'](_0x425568,_0x6cafd6);}},Game_Action[_0xd87de4(0x1ca)][_0xd87de4(0x3aa)]=function(_0x382448){const _0x14c496=_0xd87de4;if(!SceneManager['isSceneBattle']())return;if(!BattleManager[_0x14c496(0x2c7)]())return;if(!this[_0x14c496(0x38e)]())return;if(!_0x382448)return;if(!_0x382448[_0x14c496(0x1dd)]())return 0x0;let _0x14c6bd=this['otbCalcTargetCurrentOrderChange'](_0x382448),_0x199ab9=this[_0x14c496(0x2a3)](_0x382448);_0x14c6bd!==0x0&&BattleManager[_0x14c496(0x3d9)](_0x382448,-_0x14c6bd,![]),_0x199ab9!==0x0&&BattleManager[_0x14c496(0x3d9)](_0x382448,-_0x199ab9,!![]);},Game_Action['prototype'][_0xd87de4(0x3c0)]=function(_0x363852){const _0x32edfe=_0xd87de4;if(!SceneManager[_0x32edfe(0x255)]())return 0x0;if(!BattleManager[_0x32edfe(0x2c7)]())return 0x0;if(!this[_0x32edfe(0x38e)]())return 0x0;if(!_0x363852)return 0x0;if(!_0x363852[_0x32edfe(0x1dd)]())return 0x0;const _0x28fbfa=VisuMZ[_0x32edfe(0x1fa)][_0x32edfe(0x231)],_0x47bf18=this[_0x32edfe(0x38e)]()[_0x32edfe(0x281)],_0x14ab5a=BattleManager['_actionBattlers']||[];let _0x4eac9f=0x0;_0x47bf18['match'](_0x28fbfa[_0x32edfe(0x2a6)])&&(_0x14ab5a[_0x32edfe(0x1e4)](_0x363852)&&(_0x4eac9f+=Number(RegExp['$1'])));_0x47bf18[_0x32edfe(0x1f4)](_0x28fbfa[_0x32edfe(0x2b5)])&&(_0x4eac9f+=Number(RegExp['$1']));const _0x36b499=this[_0x32edfe(0x38e)]()['effects'];for(const _0x244f10 of _0x36b499){if(!_0x244f10)continue;if(_0x244f10['code']===Game_Action[_0x32edfe(0x385)]&&_0x244f10[_0x32edfe(0x307)]===0x6){if(Game_Action[_0x32edfe(0x241)])_0x4eac9f-=0x1;}if(_0x244f10[_0x32edfe(0x28c)]===Game_Action[_0x32edfe(0x227)]&&_0x244f10[_0x32edfe(0x307)]===0x6){if(Game_Action['OTB_CONVERT_AGI_DEBUFF_CURRENT_TURN'])_0x4eac9f+=0x1;}}return _0x4eac9f;},Game_Action['prototype'][_0xd87de4(0x2a3)]=function(_0x30c8e9){const _0x4fc7a6=_0xd87de4;if(!SceneManager[_0x4fc7a6(0x255)]())return 0x0;if(!BattleManager[_0x4fc7a6(0x2c7)]())return 0x0;if(!this[_0x4fc7a6(0x38e)]())return 0x0;if(!_0x30c8e9)return 0x0;if(!_0x30c8e9[_0x4fc7a6(0x1dd)]())return 0x0;const _0x7e6d06=VisuMZ[_0x4fc7a6(0x1fa)][_0x4fc7a6(0x231)],_0x3ad24b=this[_0x4fc7a6(0x38e)]()['note'],_0x531acc=BattleManager[_0x4fc7a6(0x311)]||[];let _0x285d3b=0x0;_0x3ad24b[_0x4fc7a6(0x1f4)](_0x7e6d06[_0x4fc7a6(0x2a6)])&&(_0x531acc[_0x4fc7a6(0x1e4)](_0x30c8e9)&&(_0x285d3b+=Number(RegExp['$1'])));_0x3ad24b['match'](_0x7e6d06[_0x4fc7a6(0x1e0)])&&(_0x285d3b+=Number(RegExp['$1']));const _0xfaefa8=this[_0x4fc7a6(0x38e)]()[_0x4fc7a6(0x2be)];for(const _0x1ed2ba of _0xfaefa8){if(!_0x1ed2ba)continue;if(_0x1ed2ba[_0x4fc7a6(0x28c)]===Game_Action[_0x4fc7a6(0x385)]&&_0x1ed2ba[_0x4fc7a6(0x307)]===0x6){if(Game_Action[_0x4fc7a6(0x298)])_0x285d3b-=0x1;}if(_0x1ed2ba[_0x4fc7a6(0x28c)]===Game_Action[_0x4fc7a6(0x227)]&&_0x1ed2ba['dataId']===0x6){if(Game_Action[_0x4fc7a6(0x2d2)])_0x285d3b+=0x1;}}return _0x285d3b;},Game_BattlerBase['prototype'][_0xd87de4(0x35d)]=function(){const _0x2496fe=_0xd87de4;delete this[_0x2496fe(0x24a)],delete this['_otbTurnOrderFaceName'],delete this[_0x2496fe(0x1cc)],delete this[_0x2496fe(0x2c8)];},Game_BattlerBase[_0xd87de4(0x1ca)][_0xd87de4(0x26c)]=function(){const _0x3e367f=_0xd87de4;return this[_0x3e367f(0x24a)]===undefined&&(this['_otbTurnOrderGraphicType']=this[_0x3e367f(0x369)]()),this[_0x3e367f(0x24a)];},Game_BattlerBase[_0xd87de4(0x1ca)][_0xd87de4(0x369)]=function(){const _0x120399=_0xd87de4;return Window_OTB_TurnOrder[_0x120399(0x2a7)][_0x120399(0x1c4)];},Game_BattlerBase[_0xd87de4(0x1ca)]['TurnOrderOTBGraphicFaceName']=function(){const _0x301cd6=_0xd87de4;return this[_0x301cd6(0x334)]===undefined&&(this[_0x301cd6(0x334)]=this['createTurnOrderOTBGraphicFaceName']()),this[_0x301cd6(0x334)];},Game_BattlerBase['prototype'][_0xd87de4(0x274)]=function(){const _0x5ea596=_0xd87de4;return Window_OTB_TurnOrder[_0x5ea596(0x2a7)][_0x5ea596(0x1fe)];},Game_BattlerBase[_0xd87de4(0x1ca)][_0xd87de4(0x1f0)]=function(){const _0x300480=_0xd87de4;return this[_0x300480(0x1cc)]===undefined&&(this[_0x300480(0x1cc)]=this[_0x300480(0x1d0)]()),this[_0x300480(0x1cc)];},Game_BattlerBase[_0xd87de4(0x1ca)]['createTurnOrderOTBGraphicFaceIndex']=function(){const _0x408e21=_0xd87de4;return Window_OTB_TurnOrder[_0x408e21(0x2a7)][_0x408e21(0x3ce)];},Game_BattlerBase[_0xd87de4(0x1ca)][_0xd87de4(0x313)]=function(){const _0x81affd=_0xd87de4;return this[_0x81affd(0x2c8)]===undefined&&(this[_0x81affd(0x2c8)]=this[_0x81affd(0x389)]()),this[_0x81affd(0x2c8)];},Game_BattlerBase[_0xd87de4(0x1ca)]['createTurnOrderOTBGraphicIconIndex']=function(){return Window_OTB_TurnOrder['Settings']['EnemyBattlerIcon'];},Game_BattlerBase[_0xd87de4(0x1ca)]['setOTBGraphicIconIndex']=function(_0x191678){const _0x388664=_0xd87de4;this[_0x388664(0x2c8)]=_0x191678;},VisuMZ['BattleSystemOTB'][_0xd87de4(0x3ab)]=Game_BattlerBase[_0xd87de4(0x1ca)][_0xd87de4(0x257)],Game_BattlerBase['prototype'][_0xd87de4(0x257)]=function(){const _0x10d331=_0xd87de4;VisuMZ['BattleSystemOTB'][_0x10d331(0x3ab)][_0x10d331(0x3af)](this),BattleManager['removeActionBattlersOTB']();},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x34c)]=Game_BattlerBase[_0xd87de4(0x1ca)][_0xd87de4(0x282)],Game_BattlerBase[_0xd87de4(0x1ca)][_0xd87de4(0x282)]=function(){const _0x127492=_0xd87de4,_0x46979a=this[_0x127492(0x36c)];VisuMZ[_0x127492(0x1fa)][_0x127492(0x34c)]['call'](this),BattleManager[_0x127492(0x2c7)]()&&SceneManager['isSceneBattle']()&&_0x46979a&&!this[_0x127492(0x36c)]&&BattleManager['otbReturnBattlerToTurnOrders'](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x1f2)]=Game_Battler[_0xd87de4(0x1ca)]['performCollapse'],Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x335)]=function(){const _0x2be518=_0xd87de4;VisuMZ[_0x2be518(0x1fa)][_0x2be518(0x1f2)][_0x2be518(0x3af)](this),BattleManager[_0x2be518(0x32b)]();},Game_Battler[_0xd87de4(0x338)]=VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x2a7)][_0xd87de4(0x2c3)][_0xd87de4(0x360)],VisuMZ['BattleSystemOTB']['Game_Battler_onBattleStart']=Game_Battler['prototype'][_0xd87de4(0x288)],Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x288)]=function(_0x3a4e41){const _0x1ee873=_0xd87de4;VisuMZ[_0x1ee873(0x1fa)][_0x1ee873(0x29e)][_0x1ee873(0x3af)](this,_0x3a4e41),this[_0x1ee873(0x254)](_0x3a4e41);},Game_Battler['prototype'][_0xd87de4(0x254)]=function(_0x35a9b1){const _0xc3873d=_0xd87de4;if(!BattleManager[_0xc3873d(0x2c7)]())return;this['_otbTimesActedThisTurn']=0x0,this[_0xc3873d(0x1e2)]=undefined;},VisuMZ[_0xd87de4(0x1fa)]['Game_Battler_onBattleEnd']=Game_Battler['prototype']['onBattleEnd'],Game_Battler['prototype'][_0xd87de4(0x3a8)]=function(){const _0x26b45=_0xd87de4;VisuMZ[_0x26b45(0x1fa)]['Game_Battler_onBattleEnd'][_0x26b45(0x3af)](this),this['onBattleEndOTB']();},Game_Battler['prototype'][_0xd87de4(0x228)]=function(){const _0x42f437=_0xd87de4;if(!BattleManager[_0x42f437(0x2c7)]())return;this[_0x42f437(0x34e)]=0x0;},Game_Battler['prototype']['performActionEndOTB']=function(){const _0x3a94d3=_0xd87de4;if(!BattleManager[_0x3a94d3(0x2c7)]())return;this[_0x3a94d3(0x34e)]=this[_0x3a94d3(0x34e)]||0x0,this[_0x3a94d3(0x34e)]++;if(this['numActions']()>0x0&&this===BattleManager[_0x3a94d3(0x28a)]){const _0x40bd88=BattleManager[_0x3a94d3(0x347)];if(_0x40bd88[_0x3a94d3(0x383)]>0x0&&_0x40bd88[0x0]!==this)return;const _0x522665=this[_0x3a94d3(0x1f7)]();if(_0x522665&&BattleManager[_0x3a94d3(0x216)](this))_0x522665[_0x3a94d3(0x1b8)]();}},BattleManager['isNextOtbSubject']=function(_0x1815d7){const _0x4046b1=_0xd87de4;if(!_0x1815d7)return![];return this[_0x4046b1(0x285)][0x0]===_0x1815d7;},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x26b)]=Game_Battler[_0xd87de4(0x1ca)]['onTurnEnd'],Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x3e1)]=function(){const _0xce9878=_0xd87de4;VisuMZ[_0xce9878(0x1fa)][_0xce9878(0x26b)][_0xce9878(0x3af)](this),this[_0xce9878(0x2fc)]();},Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x2fc)]=function(){const _0x30d1e8=_0xd87de4;if(!BattleManager[_0x30d1e8(0x2c7)]())return;this['_otbTimesActedThisTurn']=0x0;},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x244)]=Game_Battler['prototype']['makeSpeed'],Game_Battler['prototype'][_0xd87de4(0x1e3)]=function(){const _0x4f8834=_0xd87de4;BattleManager[_0x4f8834(0x2c7)]()?this[_0x4f8834(0x38f)]():VisuMZ[_0x4f8834(0x1fa)][_0x4f8834(0x244)][_0x4f8834(0x3af)](this);},Game_Battler['prototype'][_0xd87de4(0x38f)]=function(){const _0x109b54=_0xd87de4;if(this[_0x109b54(0x28b)]())this[_0x109b54(0x39e)]=Infinity;else{const _0x548637=this['currentAction']()||new Game_Action(this);this[_0x109b54(0x39e)]=VisuMZ[_0x109b54(0x1fa)][_0x109b54(0x2a7)][_0x109b54(0x2c3)][_0x109b54(0x3ca)][_0x109b54(0x3af)](_0x548637);}},Game_Battler['prototype'][_0xd87de4(0x28b)]=function(){const _0x3d0b66=_0xd87de4;if(!Game_Battler['OTB_STUN_INFINITY_SPEED'])return![];if(!this['isAlive']())return![];if(!this['isAppeared']())return![];if(this['canMove']())return![];const _0x2f950d=JsonEx[_0x3d0b66(0x213)](this);return _0x2f950d['_tempActor']=!![],_0x2f950d['_tempBattler']=!![],_0x2f950d[_0x3d0b66(0x2cd)](),_0x2f950d[_0x3d0b66(0x223)](0x1),_0x2f950d['removeStatesAuto'](0x2),_0x2f950d[_0x3d0b66(0x310)](),_0x2f950d[_0x3d0b66(0x30e)]();},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x209)]=Game_Action[_0xd87de4(0x1ca)][_0xd87de4(0x340)],Game_Action[_0xd87de4(0x1ca)][_0xd87de4(0x340)]=function(){const _0x53c717=_0xd87de4;return BattleManager['isOTB']()?VisuMZ[_0x53c717(0x1fa)]['Settings']['Mechanics'][_0x53c717(0x3bf)]:VisuMZ[_0x53c717(0x1fa)][_0x53c717(0x209)][_0x53c717(0x3af)](this);},Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x2a2)]=function(_0x2dabd3){const _0x47569b=_0xd87de4;if(!this[_0x47569b(0x30e)]())return;this[_0x47569b(0x34e)]=this[_0x47569b(0x34e)]||0x0,this[_0x47569b(0x34e)]--,BattleManager[_0x47569b(0x1cf)](this,_0x2dabd3,BattleManager[_0x47569b(0x285)]);},Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x396)]=function(_0x5b7a0a,_0x25b1b4){const _0x3ab6bf=_0xd87de4;if(!this[_0x3ab6bf(0x30e)]())return;_0x25b1b4?BattleManager['otbAddBattlerToTurnOrderAtEnd'](this,_0x5b7a0a,BattleManager['_actionBattlers']):BattleManager[_0x3ab6bf(0x20c)](this,_0x5b7a0a,BattleManager['_otb_actionBattlersNext']);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x225)]=Game_Battler['prototype'][_0xd87de4(0x3e2)],Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x3e2)]=function(){const _0x1ea73b=_0xd87de4;return BattleManager['isOTB']()?this[_0x1ea73b(0x3dd)]():VisuMZ[_0x1ea73b(0x1fa)]['Game_Battler_makeActionTimes'][_0x1ea73b(0x3af)](this);},Game_Battler['prototype'][_0xd87de4(0x3dd)]=function(){const _0x3813ad=_0xd87de4;if(this['_cache_makeActionTimesOTB']!==undefined)return this[_0x3813ad(0x1e2)];this[_0x3813ad(0x31e)]=this[_0x3813ad(0x26e)]()[_0x3813ad(0x383)];const _0x14dff3=this[_0x3813ad(0x26e)](),_0x141392=_0x14dff3[_0x3813ad(0x287)]((_0x45f2f8,_0x4d3160)=>Math[_0x3813ad(0x238)]()<_0x4d3160?_0x45f2f8+0x1:_0x45f2f8,0x1);return this[_0x3813ad(0x1e2)]=_0x141392,this[_0x3813ad(0x1e2)];},Game_Unit[_0xd87de4(0x1ca)][_0xd87de4(0x27e)]=function(){const _0x1d15e6=_0xd87de4;for(const _0x2a60fe of this[_0x1d15e6(0x384)]()){_0x2a60fe&&(_0x2a60fe[_0x1d15e6(0x1e2)]=undefined);}},Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x1dd)]=function(){const _0x3246c4=_0xd87de4;if(this[_0x3246c4(0x2ec)]()===Infinity)return![];return!![];},Game_Battler['prototype'][_0xd87de4(0x2df)]=function(_0x564f82,_0x5383ae){const _0x18f862=_0xd87de4;if(this[_0x18f862(0x22b)]||this[_0x18f862(0x3d4)])return;if(!SceneManager[_0x18f862(0x255)]())return;if(!BattleManager[_0x18f862(0x2c7)]())return;if(this[_0x18f862(0x31e)]!==this[_0x18f862(0x26e)]()[_0x18f862(0x383)])this['_last_otb_actionPlusSetLength']=this[_0x18f862(0x26e)]()[_0x18f862(0x383)],this[_0x18f862(0x1e2)]=undefined;else return;if(_0x564f82&&!this[_0x18f862(0x30e)]())BattleManager[_0x18f862(0x32b)]();else!_0x564f82&&this[_0x18f862(0x30e)]()&&BattleManager[_0x18f862(0x348)](this);if(this['canMove']()){const _0x362062=this[_0x18f862(0x3e2)]()-_0x5383ae;_0x362062>0x0&&(BattleManager[_0x18f862(0x20c)](this,_0x362062,BattleManager['_actionBattlers']),BattleManager[_0x18f862(0x20c)](this,_0x362062,BattleManager['_otb_actionBattlersNext']));}},VisuMZ[_0xd87de4(0x1fa)]['Game_Battler_addState']=Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x3c9)],Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x3c9)]=function(_0x200b16){const _0x136682=_0xd87de4,_0x53eef6=this[_0x136682(0x30e)](),_0x39a0ab=this[_0x136682(0x3e2)]();VisuMZ[_0x136682(0x1fa)][_0x136682(0x263)][_0x136682(0x3af)](this,_0x200b16),this['_last_otb_actionPlusSetLength']=undefined,this[_0x136682(0x2df)](_0x53eef6,_0x39a0ab);},VisuMZ['BattleSystemOTB'][_0xd87de4(0x341)]=Game_Battler['prototype'][_0xd87de4(0x246)],Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x246)]=function(_0x3637d8){const _0x474bac=_0xd87de4,_0x882b67=this[_0x474bac(0x30e)](),_0x3c7c57=this[_0x474bac(0x3e2)]();VisuMZ['BattleSystemOTB']['Game_Battler_removeState'][_0x474bac(0x3af)](this,_0x3637d8),this[_0x474bac(0x31e)]=undefined,this['otbProcessActionCheck'](_0x882b67,_0x3c7c57);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x208)]=Game_BattlerBase['prototype']['recoverAll'],Game_BattlerBase[_0xd87de4(0x1ca)][_0xd87de4(0x2ac)]=function(){const _0x464b88=_0xd87de4;if(BattleManager[_0x464b88(0x2c7)]())this[_0x464b88(0x246)](this[_0x464b88(0x2f6)]());VisuMZ[_0x464b88(0x1fa)][_0x464b88(0x208)][_0x464b88(0x3af)](this);if(BattleManager['isOTB']())this[_0x464b88(0x310)]();},VisuMZ[_0xd87de4(0x1fa)]['Game_Battler_forceAction']=Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x289)],Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x289)]=function(_0xc63019,_0x1c9d18){const _0x2f1270=_0xd87de4;BattleManager[_0x2f1270(0x2c7)]()?this[_0x2f1270(0x1bd)](_0xc63019,_0x1c9d18):VisuMZ[_0x2f1270(0x1fa)][_0x2f1270(0x297)]['call'](this,_0xc63019,_0x1c9d18);},Game_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x1bd)]=function(_0x37020d,_0x1aa117){const _0x2f2aa0=_0xd87de4,_0x313057=new Game_Action(this,!![]);_0x313057[_0x2f2aa0(0x3e9)](_0x37020d),_0x313057[_0x2f2aa0(0x1d8)]=!![];if(_0x1aa117===-0x2)_0x313057['setTarget'](this[_0x2f2aa0(0x266)]);else _0x1aa117===-0x1?_0x313057[_0x2f2aa0(0x1ed)]():_0x313057[_0x2f2aa0(0x235)](_0x1aa117);const _0x4d1e68=this[_0x2f2aa0(0x1e8)][_0x2f2aa0(0x224)](_0x55deca=>_0x55deca[_0x2f2aa0(0x1d8)])+0x1;this['_actions'][_0x2f2aa0(0x25d)](_0x4d1e68,0x0,_0x313057);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x354)]=BattleManager[_0xd87de4(0x289)],BattleManager[_0xd87de4(0x289)]=function(_0x4f7913){const _0x5a50ef=_0xd87de4;BattleManager[_0x5a50ef(0x2c7)]()?this[_0x5a50ef(0x1bd)](_0x4f7913):VisuMZ[_0x5a50ef(0x1fa)]['BattleManager_forceAction']['call'](this,_0x4f7913);},BattleManager['forceActionOTB']=function(_0x81353b){const _0x4a7c69=_0xd87de4;BattleManager[_0x4a7c69(0x306)](_0x81353b);},VisuMZ[_0xd87de4(0x1fa)]['Game_Actor_selectNextCommand']=Game_Actor['prototype'][_0xd87de4(0x3e5)],Game_Actor[_0xd87de4(0x1ca)][_0xd87de4(0x3e5)]=function(){const _0x5dc6ec=_0xd87de4;if(BattleManager[_0x5dc6ec(0x2c7)]()){if(this[_0x5dc6ec(0x1f7)]())this[_0x5dc6ec(0x1f7)]()[_0x5dc6ec(0x1b8)]();return![];}return VisuMZ[_0x5dc6ec(0x1fa)]['Game_Actor_selectNextCommand'][_0x5dc6ec(0x3af)](this);},Game_Actor['prototype']['createTurnOrderOTBGraphicType']=function(){const _0x28cd28=_0xd87de4,_0x1e0a90=this[_0x28cd28(0x201)]()[_0x28cd28(0x281)];if(_0x1e0a90[_0x28cd28(0x1f4)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x28cd28(0x3e0);else{if(_0x1e0a90[_0x28cd28(0x1f4)](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return'icon';}return Window_OTB_TurnOrder[_0x28cd28(0x2a7)][_0x28cd28(0x1b4)];},Game_Actor[_0xd87de4(0x1ca)][_0xd87de4(0x274)]=function(){const _0xea6b0c=_0xd87de4,_0x4127de=this[_0xea6b0c(0x201)]()[_0xea6b0c(0x281)];if(_0x4127de[_0xea6b0c(0x1f4)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return this[_0xea6b0c(0x232)]();},Game_Actor[_0xd87de4(0x1ca)][_0xd87de4(0x1d0)]=function(){const _0x5b046e=_0xd87de4,_0xf9b29=this[_0x5b046e(0x201)]()[_0x5b046e(0x281)];if(_0xf9b29['match'](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this[_0x5b046e(0x270)]();},Game_Actor['prototype'][_0xd87de4(0x389)]=function(){const _0x5710e4=_0xd87de4,_0x51aff6=this[_0x5710e4(0x201)]()['note'];if(_0x51aff6['match'](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_OTB_TurnOrder[_0x5710e4(0x2a7)][_0x5710e4(0x37a)];},Game_Enemy[_0xd87de4(0x1ca)][_0xd87de4(0x369)]=function(){const _0x14e0d9=_0xd87de4,_0x1adb88=this['enemy']()[_0x14e0d9(0x281)];if(_0x1adb88[_0x14e0d9(0x1f4)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return _0x14e0d9(0x3e0);else{if(_0x1adb88[_0x14e0d9(0x1f4)](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return _0x14e0d9(0x331);}return Window_OTB_TurnOrder[_0x14e0d9(0x2a7)][_0x14e0d9(0x1c4)];},Game_Enemy['prototype']['createTurnOrderOTBGraphicFaceName']=function(){const _0x41454a=_0xd87de4,_0x362fec=this[_0x41454a(0x2a0)]()[_0x41454a(0x281)];if(_0x362fec[_0x41454a(0x1f4)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return Window_OTB_TurnOrder[_0x41454a(0x2a7)][_0x41454a(0x1fe)];},Game_Enemy[_0xd87de4(0x1ca)][_0xd87de4(0x1d0)]=function(){const _0x248245=_0xd87de4,_0x1cb054=this[_0x248245(0x2a0)]()['note'];if(_0x1cb054[_0x248245(0x1f4)](/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Window_OTB_TurnOrder[_0x248245(0x2a7)]['EnemyBattlerFaceIndex'];},Game_Enemy[_0xd87de4(0x1ca)]['createTurnOrderOTBGraphicIconIndex']=function(){const _0x2cc394=_0xd87de4,_0x104067=this[_0x2cc394(0x2a0)]()[_0x2cc394(0x281)];if(_0x104067[_0x2cc394(0x1f4)](/<OTB TURN ORDER ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Window_OTB_TurnOrder[_0x2cc394(0x2a7)][_0x2cc394(0x1d5)];},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x200)]=Game_Party[_0xd87de4(0x1ca)][_0xd87de4(0x356)],Game_Party[_0xd87de4(0x1ca)][_0xd87de4(0x356)]=function(_0x3d096a){const _0x5e8845=_0xd87de4;VisuMZ['BattleSystemOTB']['Game_Party_addActor'][_0x5e8845(0x3af)](this,_0x3d096a);if(Imported[_0x5e8845(0x1c3)])return;SceneManager[_0x5e8845(0x255)]()&&BattleManager[_0x5e8845(0x2c7)]()&&(BattleManager[_0x5e8845(0x32b)](),BattleManager[_0x5e8845(0x348)]($gameActors[_0x5e8845(0x201)](_0x3d096a)));},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x36e)]=Game_Party[_0xd87de4(0x1ca)][_0xd87de4(0x27b)],Game_Party[_0xd87de4(0x1ca)][_0xd87de4(0x27b)]=function(_0x50f9c8){const _0x6007c1=_0xd87de4;VisuMZ['BattleSystemOTB'][_0x6007c1(0x36e)]['call'](this,_0x50f9c8),SceneManager[_0x6007c1(0x255)]()&&BattleManager[_0x6007c1(0x2c7)]()&&BattleManager[_0x6007c1(0x32b)]();},VisuMZ['BattleSystemOTB']['Scene_Battle_createActorCommandWindow']=Scene_Battle[_0xd87de4(0x1ca)]['createActorCommandWindow'],Scene_Battle[_0xd87de4(0x1ca)]['createActorCommandWindow']=function(){const _0x3e2e27=_0xd87de4;VisuMZ[_0x3e2e27(0x1fa)][_0x3e2e27(0x30c)][_0x3e2e27(0x3af)](this),BattleManager[_0x3e2e27(0x2c7)]()&&this['createActorCommandWindowOTB']();},Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x3bb)]=function(){const _0x281d7c=_0xd87de4,_0x5ec931=this[_0x281d7c(0x3cd)];this[_0x281d7c(0x34b)]()&&delete _0x5ec931['_handlers'][_0x281d7c(0x38c)];},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x398)]=Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x3de)],Scene_Battle['prototype'][_0xd87de4(0x3de)]=function(){const _0x24ec90=_0xd87de4;BattleManager['isOTB']()?this[_0x24ec90(0x37d)]():VisuMZ[_0x24ec90(0x1fa)][_0x24ec90(0x398)]['call'](this);},Scene_Battle[_0xd87de4(0x1ca)]['commandCancelOTB']=function(){const _0x10913c=_0xd87de4;BattleManager[_0x10913c(0x27d)](),this[_0x10913c(0x3ad)][_0x10913c(0x1c9)](),this['_actorCommandWindow'][_0x10913c(0x3c2)]();},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x2c1)]=Scene_Battle['prototype']['commandFight'],Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x31c)]=function(){const _0x2c006c=_0xd87de4;BattleManager[_0x2c006c(0x2c7)]()?this[_0x2c006c(0x3d5)]():VisuMZ[_0x2c006c(0x1fa)][_0x2c006c(0x2c1)]['call'](this);},VisuMZ['BattleSystemOTB'][_0xd87de4(0x373)]=Scene_Battle['prototype'][_0xd87de4(0x391)],Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x391)]=function(){const _0x4c6b27=_0xd87de4;VisuMZ['BattleSystemOTB'][_0x4c6b27(0x373)]['call'](this),this['createOTBTurnOrderWindow']();},Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x22d)]=function(){const _0x520611=_0xd87de4;if(!BattleManager[_0x520611(0x2c7)]())return;this['_otbTurnOrderWindow']=new Window_OTB_TurnOrder();const _0xec64f1=this[_0x520611(0x344)](this['_windowLayer']);this[_0x520611(0x247)](this[_0x520611(0x314)],_0xec64f1),this[_0x520611(0x3b8)](),SceneManager['isPreviousSceneBattleTransitionable']()&&this[_0x520611(0x314)][_0x520611(0x31a)]();},Scene_Battle[_0xd87de4(0x1ca)]['repositionLogWindowOTB']=function(){const _0x22490a=_0xd87de4,_0x18069e=Window_OTB_TurnOrder[_0x22490a(0x2a7)];if(_0x18069e[_0x22490a(0x357)]!==_0x22490a(0x25c))return;if(!_0x18069e['RepositionLogWindow'])return;if(!this[_0x22490a(0x28e)])return;const _0x384618=this[_0x22490a(0x314)]['y']-Math[_0x22490a(0x326)]((Graphics[_0x22490a(0x3a3)]-Graphics[_0x22490a(0x214)])/0x2),_0x19c4df=_0x384618+this[_0x22490a(0x314)][_0x22490a(0x3a3)];this['_logWindow']['y']=_0x19c4df+(_0x18069e[_0x22490a(0x222)]||0x0);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x2f0)]=Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x2cf)],Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x2cf)]=function(){const _0x49ec66=_0xd87de4;BattleManager['otbPreviewOrderClear'](),VisuMZ[_0x49ec66(0x1fa)]['Scene_Battle_commandAttack'][_0x49ec66(0x3af)](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x34a)]=Scene_Battle[_0xd87de4(0x1ca)]['commandGuard'],Scene_Battle['prototype'][_0xd87de4(0x36b)]=function(){const _0x11cd5c=_0xd87de4;BattleManager[_0x11cd5c(0x27d)](),VisuMZ[_0x11cd5c(0x1fa)][_0x11cd5c(0x34a)][_0x11cd5c(0x3af)](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x293)]=Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x3b3)],Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x3b3)]=function(){const _0x4081cf=_0xd87de4;BattleManager[_0x4081cf(0x27d)](),VisuMZ['BattleSystemOTB']['Scene_Battle_onActorOk'][_0x4081cf(0x3af)](this);},VisuMZ['BattleSystemOTB']['Scene_Battle_onActorCancel']=Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x23e)],Scene_Battle['prototype']['onActorCancel']=function(){const _0x2e1fde=_0xd87de4;BattleManager['otbPreviewOrderClear'](),VisuMZ[_0x2e1fde(0x1fa)][_0x2e1fde(0x2b0)][_0x2e1fde(0x3af)](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x321)]=Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x3da)],Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x3da)]=function(){const _0x3947b6=_0xd87de4;BattleManager[_0x3947b6(0x27d)](),VisuMZ['BattleSystemOTB'][_0x3947b6(0x321)][_0x3947b6(0x3af)](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x2fe)]=Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x343)],Scene_Battle['prototype']['onEnemyCancel']=function(){const _0x12a34d=_0xd87de4;BattleManager[_0x12a34d(0x27d)](),VisuMZ[_0x12a34d(0x1fa)][_0x12a34d(0x2fe)][_0x12a34d(0x3af)](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x381)]=Scene_Battle['prototype']['onSkillOk'],Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x2b6)]=function(){const _0xb5d7c4=_0xd87de4;BattleManager[_0xb5d7c4(0x27d)](),VisuMZ[_0xb5d7c4(0x1fa)][_0xb5d7c4(0x381)][_0xb5d7c4(0x3af)](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x1c2)]=Scene_Battle['prototype'][_0xd87de4(0x387)],Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x387)]=function(){const _0x5578d3=_0xd87de4;BattleManager[_0x5578d3(0x27d)](),VisuMZ[_0x5578d3(0x1fa)][_0x5578d3(0x1c2)]['call'](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x3a7)]=Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x2b4)],Scene_Battle['prototype'][_0xd87de4(0x2b4)]=function(){const _0x352a0f=_0xd87de4;BattleManager[_0x352a0f(0x27d)](),VisuMZ[_0x352a0f(0x1fa)][_0x352a0f(0x3a7)][_0x352a0f(0x3af)](this);},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x3a5)]=Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x1c1)],Scene_Battle['prototype'][_0xd87de4(0x1c1)]=function(){const _0x2ddad0=_0xd87de4;BattleManager[_0x2ddad0(0x27d)](),VisuMZ['BattleSystemOTB'][_0x2ddad0(0x3a5)]['call'](this);},VisuMZ[_0xd87de4(0x1fa)]['Scene_Battle_actorCommandSingleSkill']=Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x3bd)],Scene_Battle[_0xd87de4(0x1ca)][_0xd87de4(0x3bd)]=function(){const _0x146b51=_0xd87de4;BattleManager[_0x146b51(0x27d)](),VisuMZ[_0x146b51(0x1fa)][_0x146b51(0x1df)][_0x146b51(0x3af)](this);};function Sprite_OTB_TurnOrder_Battler(){const _0x4092b7=_0xd87de4;this[_0x4092b7(0x2ab)](...arguments);}Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)]=Object[_0xd87de4(0x3ae)](Sprite_Clickable[_0xd87de4(0x1ca)]),Sprite_OTB_TurnOrder_Battler['prototype'][_0xd87de4(0x2e1)]=Sprite_OTB_TurnOrder_Battler,Sprite_OTB_TurnOrder_Battler['prototype']['initialize']=function(_0x310f11,_0x307c5c,_0x48ce70){const _0x4023ea=_0xd87de4;this['initMembers'](_0x310f11,_0x307c5c,_0x48ce70),Sprite_Clickable[_0x4023ea(0x1ca)][_0x4023ea(0x2ab)][_0x4023ea(0x3af)](this),this[_0x4023ea(0x2dd)]=0x0,this['createChildren'](),this[_0x4023ea(0x1db)]();},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)]['initMembers']=function(_0x4b3c2e,_0x5a584e,_0x123396){const _0x2d6b80=_0xd87de4;this['_unit']=_0x4b3c2e[_0x2d6b80(0x243)]()?$gameParty:$gameTroop,this['_index']=_0x4b3c2e[_0x2d6b80(0x1b5)](),this[_0x2d6b80(0x302)]=_0x5a584e,this['_sourceArray']=_0x123396;const _0x16b84f=Window_OTB_TurnOrder[_0x2d6b80(0x2a7)],_0x90cacc=this[_0x2d6b80(0x33c)]();this[_0x2d6b80(0x29f)]=0x0,this['_positionTargetX']=_0x16b84f[_0x2d6b80(0x2b3)]?-_0x16b84f['SpriteThin']:this[_0x2d6b80(0x31b)]()[_0x2d6b80(0x3b0)],this[_0x2d6b80(0x35a)]=0x0,this[_0x2d6b80(0x2f3)]=0x0,this[_0x2d6b80(0x1d9)]=0xff,this[_0x2d6b80(0x368)]=![],this['_isAppeared']=![],this[_0x2d6b80(0x2a1)]=0x0,this[_0x2d6b80(0x2f5)]=0x0;},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x267)]=function(){const _0x10d8f8=_0xd87de4;this[_0x10d8f8(0x386)](),this[_0x10d8f8(0x38b)](),this[_0x10d8f8(0x33b)](),this['createBorderSprite'](),this['createLetterSprite']();},Sprite_OTB_TurnOrder_Battler['prototype']['createInitialPositions']=function(){const _0x22b383=_0xd87de4;this['x']=this[_0x22b383(0x327)],this['y']=this['_positionTargetY'];},Sprite_OTB_TurnOrder_Battler['prototype'][_0xd87de4(0x33c)]=function(){return!![];},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x346)]=function(){const _0x132a67=_0xd87de4,_0x19d69e=Window_OTB_TurnOrder[_0x132a67(0x2a7)];return _0x19d69e[_0x132a67(0x2e4)];},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x20f)]=function(){const _0x56ce6e=Window_OTB_TurnOrder['Settings'];return _0x56ce6e['SpriteLength'];},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x388)]=function(){const _0x5ebeef=_0xd87de4;return this[_0x5ebeef(0x36f)]===$gameParty?_0x5ebeef(0x25b):_0x5ebeef(0x29a);},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)]['createBackgroundSprite']=function(){const _0x22d774=_0xd87de4;if(!Window_OTB_TurnOrder[_0x22d774(0x2a7)]['ShowMarkerBg'])return;const _0x24ce46=Window_OTB_TurnOrder[_0x22d774(0x2a7)],_0x246a91=this[_0x22d774(0x388)](),_0x5861dc=_0x22d774(0x24d)[_0x22d774(0x2aa)](_0x246a91),_0x48eb0e=new Sprite();_0x48eb0e[_0x22d774(0x1e6)]['x']=this['anchor']['x'],_0x48eb0e[_0x22d774(0x1e6)]['y']=this[_0x22d774(0x1e6)]['y'];if(_0x24ce46[_0x5861dc])_0x48eb0e[_0x22d774(0x2e9)]=ImageManager[_0x22d774(0x2ae)](_0x24ce46[_0x5861dc]);else{const _0x1ac229=this['bitmapWidth'](),_0x473442=this[_0x22d774(0x20f)]();_0x48eb0e[_0x22d774(0x2e9)]=new Bitmap(_0x1ac229,_0x473442);const _0x417c41=ColorManager['getColor'](_0x24ce46['%1BgColor1'[_0x22d774(0x2aa)](_0x246a91)]),_0x6b9fdb=ColorManager[_0x22d774(0x2d9)](_0x24ce46[_0x22d774(0x1c7)['format'](_0x246a91)]);_0x48eb0e['bitmap'][_0x22d774(0x3ba)](0x0,0x0,_0x1ac229,_0x473442,_0x417c41,_0x6b9fdb,!![]);}this[_0x22d774(0x3db)]=_0x48eb0e,this['addChild'](this['_backgroundSprite']),this[_0x22d774(0x3b0)]=this['_backgroundSprite'][_0x22d774(0x3b0)],this['height']=this['_backgroundSprite'][_0x22d774(0x3a3)];},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x33b)]=function(){const _0x352048=_0xd87de4,_0x449f3c=new Sprite();_0x449f3c[_0x352048(0x1e6)]['x']=this[_0x352048(0x1e6)]['x'],_0x449f3c['anchor']['y']=this[_0x352048(0x1e6)]['y'],this[_0x352048(0x240)]=_0x449f3c,this[_0x352048(0x1fd)](this[_0x352048(0x240)]),this['processUpdateGraphic']();},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x3b9)]=function(){const _0x472edc=_0xd87de4;if(!Window_OTB_TurnOrder[_0x472edc(0x2a7)][_0x472edc(0x2a8)])return;const _0x3382e1=Window_OTB_TurnOrder[_0x472edc(0x2a7)],_0x4978c7=this['getUnitSideSide'](),_0x4d10b1=_0x472edc(0x3eb)[_0x472edc(0x2aa)](_0x4978c7),_0x422e28=new Sprite();_0x422e28[_0x472edc(0x1e6)]['x']=this[_0x472edc(0x1e6)]['x'],_0x422e28['anchor']['y']=this[_0x472edc(0x1e6)]['y'];if(_0x3382e1[_0x4d10b1])_0x422e28[_0x472edc(0x2e9)]=ImageManager[_0x472edc(0x2ae)](_0x3382e1[_0x4d10b1]);else{let _0x79ce09=this[_0x472edc(0x346)](),_0x4e86d6=this[_0x472edc(0x20f)](),_0x4667e8=this[_0x472edc(0x2d6)]();_0x422e28[_0x472edc(0x2e9)]=new Bitmap(_0x79ce09,_0x4e86d6);const _0x57122c='#000000',_0x1f1199=ColorManager[_0x472edc(0x2d9)](_0x3382e1[_0x472edc(0x332)[_0x472edc(0x2aa)](_0x4978c7)]);_0x422e28['bitmap'][_0x472edc(0x351)](0x0,0x0,_0x79ce09,_0x4e86d6,_0x57122c),_0x79ce09-=0x2,_0x4e86d6-=0x2,_0x422e28[_0x472edc(0x2e9)][_0x472edc(0x351)](0x1,0x1,_0x79ce09,_0x4e86d6,_0x1f1199),_0x79ce09-=_0x4667e8*0x2,_0x4e86d6-=_0x4667e8*0x2,_0x422e28['bitmap']['fillRect'](0x1+_0x4667e8,0x1+_0x4667e8,_0x79ce09,_0x4e86d6,_0x57122c),_0x79ce09-=0x2,_0x4e86d6-=0x2,_0x4667e8+=0x1,_0x422e28[_0x472edc(0x2e9)][_0x472edc(0x3b4)](0x1+_0x4667e8,0x1+_0x4667e8,_0x79ce09,_0x4e86d6);}this[_0x472edc(0x3db)]=_0x422e28,this[_0x472edc(0x1fd)](this[_0x472edc(0x3db)]);},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x2d6)]=function(){const _0x17a384=_0xd87de4,_0x5b32bd=Window_OTB_TurnOrder[_0x17a384(0x2a7)];return _0x5b32bd['BorderThickness'];},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)]['createLetterSprite']=function(){const _0x1bb57a=_0xd87de4,_0x3d18ae=Window_OTB_TurnOrder['Settings'];if(!_0x3d18ae[_0x1bb57a(0x312)])return;if(this[_0x1bb57a(0x36f)]===$gameParty)return;const _0xc4a3ad=this[_0x1bb57a(0x346)](),_0x411ae5=this['bitmapHeight'](),_0x573ca5=new Sprite();_0x573ca5[_0x1bb57a(0x1e6)]['x']=this[_0x1bb57a(0x1e6)]['x'],_0x573ca5[_0x1bb57a(0x1e6)]['y']=this[_0x1bb57a(0x1e6)]['y'],_0x573ca5['bitmap']=new Bitmap(_0xc4a3ad,_0x411ae5),this[_0x1bb57a(0x37f)]=_0x573ca5,this[_0x1bb57a(0x1fd)](this['_letterSprite']);},Sprite_OTB_TurnOrder_Battler['prototype'][_0xd87de4(0x1f7)]=function(){const _0x54bed9=_0xd87de4;return this[_0x54bed9(0x36f)]?this[_0x54bed9(0x36f)][_0x54bed9(0x384)]()[this['_index']]:null;},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)]['update']=function(){const _0x3ebd05=_0xd87de4;Sprite_Clickable[_0x3ebd05(0x1ca)][_0x3ebd05(0x245)][_0x3ebd05(0x3af)](this),this['updatePosition'](),this['checkOpacity'](),this[_0x3ebd05(0x39f)](),this[_0x3ebd05(0x3b6)](),this[_0x3ebd05(0x3e8)](),this['updateLetter'](),this[_0x3ebd05(0x2f4)]();},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x1e7)]=function(_0x2d387e,_0x5b3d01){const _0x53986d=_0xd87de4,_0x4e320a=Window_OTB_TurnOrder[_0x53986d(0x2a7)];this[_0x53986d(0x29f)]=_0x4e320a[_0x53986d(0x276)],this[_0x53986d(0x327)]=_0x2d387e,this[_0x53986d(0x35a)]=_0x5b3d01;},Sprite_OTB_TurnOrder_Battler['prototype']['updatePosition']=function(){const _0x46bc40=_0xd87de4;if(this[_0x46bc40(0x29f)]>0x0){const _0x17e225=this[_0x46bc40(0x29f)];this['x']=(this['x']*(_0x17e225-0x1)+this[_0x46bc40(0x327)])/_0x17e225,this['y']=(this['y']*(_0x17e225-0x1)+this[_0x46bc40(0x35a)])/_0x17e225,this[_0x46bc40(0x29f)]--;}if(this['_positionDuration']<=0x0){this['x']=this[_0x46bc40(0x327)],this['y']=this[_0x46bc40(0x35a)];if(this['opacity']<0xff&&!this[_0x46bc40(0x221)]&&this[_0x46bc40(0x2f3)]<=0x0){const _0x2bb92e=this[_0x46bc40(0x1f7)]();_0x2bb92e&&(this[_0x46bc40(0x1d9)]=_0x2bb92e[_0x46bc40(0x1be)]()&&_0x2bb92e[_0x46bc40(0x28f)]()?0xff:0x0);}}},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x1ee)]=function(){return 0x1;},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)]['containerWindow']=function(){const _0x4df185=_0xd87de4;return SceneManager[_0x4df185(0x1d6)]['_otbTurnOrderWindow'];},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x234)]=function(){const _0x97329f=_0xd87de4,_0xa6ebf8=this['battler']();if(!_0xa6ebf8)return this['defaultPosition']();if(_0xa6ebf8===BattleManager['_subject'])return 0x0;if(BattleManager[_0x97329f(0x285)][_0x97329f(0x1e4)](_0xa6ebf8)){const _0x30a037=BattleManager[_0x97329f(0x285)][_0x97329f(0x3ac)](_0xa6ebf8)+0x1;return _0x30a037;}return this[_0x97329f(0x1ee)]();},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x30d)]=function(_0x257f75){const _0x2a4a62=_0xd87de4,_0x3a8ed8=Window_OTB_TurnOrder[_0x2a4a62(0x2a7)];this[_0x2a4a62(0x2f3)]=_0x3a8ed8[_0x2a4a62(0x276)],this[_0x2a4a62(0x1d9)]=_0x257f75;},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x1db)]=function(){const _0x302541=_0xd87de4,_0x2e056c=this[_0x302541(0x1f7)]();if(!_0x2e056c)return;if(this[_0x302541(0x368)]===_0x2e056c[_0x302541(0x1be)]()&&this[_0x302541(0x1b7)]===_0x2e056c[_0x302541(0x28f)]())return;this[_0x302541(0x368)]=_0x2e056c['isAlive'](),this[_0x302541(0x1b7)]=_0x2e056c['isAppeared']();let _0x29661d=this['_isAlive']&&this[_0x302541(0x1b7)]?0xff:0x0;this[_0x302541(0x30d)](_0x29661d);},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)]['updateOpacity']=function(){const _0x1a09bf=_0xd87de4;if(this[_0x1a09bf(0x2f3)]>0x0){const _0xbff37b=this[_0x1a09bf(0x2f3)];this['opacity']=(this[_0x1a09bf(0x2dd)]*(_0xbff37b-0x1)+this['_fadeTarget'])/_0xbff37b,this[_0x1a09bf(0x2f3)]--,this[_0x1a09bf(0x2f3)]<=0x0&&(this[_0x1a09bf(0x2dd)]=this['_fadeTarget']);}if(this[_0x1a09bf(0x221)])return;BattleManager[_0x1a09bf(0x376)]==='battleEnd'&&(this[_0x1a09bf(0x221)]=!![],this['startFade'](0x0));},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)]['updateGraphic']=function(){const _0x43f2fb=_0xd87de4,_0x1a60f4=this['battler']();if(!_0x1a60f4)return;const _0x31e5b6=Window_OTB_TurnOrder[_0x43f2fb(0x2a7)],_0xa323db=this['_unit']===$gameParty?_0x43f2fb(0x25b):_0x43f2fb(0x29a);let _0x48576e=_0x1a60f4[_0x43f2fb(0x26c)]();if(_0x1a60f4[_0x43f2fb(0x243)]()&&_0x48576e===_0x43f2fb(0x2a0))_0x48576e=_0x43f2fb(0x3e0);else _0x1a60f4[_0x43f2fb(0x1d2)]()&&_0x48576e===_0x43f2fb(0x35c)&&(_0x48576e=_0x43f2fb(0x2a0));if(this[_0x43f2fb(0x2cc)]!==_0x48576e)return this[_0x43f2fb(0x3e3)]();switch(this[_0x43f2fb(0x2cc)]){case _0x43f2fb(0x3e0):if(this[_0x43f2fb(0x252)]!==_0x1a60f4[_0x43f2fb(0x2e6)]())return this[_0x43f2fb(0x3e3)]();if(this[_0x43f2fb(0x203)]!==_0x1a60f4[_0x43f2fb(0x1f0)]())return this[_0x43f2fb(0x3e3)]();break;case _0x43f2fb(0x331):if(this[_0x43f2fb(0x378)]!==_0x1a60f4[_0x43f2fb(0x313)]())return this[_0x43f2fb(0x3e3)]();break;case'enemy':if(_0x1a60f4[_0x43f2fb(0x1c0)]()){if(this['_graphicSv']!==_0x1a60f4[_0x43f2fb(0x308)]())return this[_0x43f2fb(0x3e3)]();}else{if(this[_0x43f2fb(0x33e)]!==_0x1a60f4[_0x43f2fb(0x3b1)]())return this[_0x43f2fb(0x3e3)]();}break;case _0x43f2fb(0x35c):if(_0x1a60f4[_0x43f2fb(0x243)]()){if(this[_0x43f2fb(0x1cd)]!==_0x1a60f4['battlerName']())return this['processUpdateGraphic']();}else{if(this[_0x43f2fb(0x33e)]!==_0x1a60f4[_0x43f2fb(0x3b1)]())return this['processUpdateGraphic']();}break;}},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x3e3)]=function(){const _0x5c7e92=_0xd87de4,_0x1cdbb6=this['battler']();if(!_0x1cdbb6)return;this[_0x5c7e92(0x2cc)]=_0x1cdbb6[_0x5c7e92(0x26c)]();if(_0x1cdbb6['isActor']()&&this[_0x5c7e92(0x2cc)]==='enemy')this['_graphicType']=_0x5c7e92(0x3e0);else _0x1cdbb6['isEnemy']()&&this[_0x5c7e92(0x2cc)]===_0x5c7e92(0x35c)&&(this['_graphicType']='enemy');let _0x5fad00;switch(this[_0x5c7e92(0x2cc)]){case _0x5c7e92(0x3e0):this[_0x5c7e92(0x252)]=_0x1cdbb6['TurnOrderOTBGraphicFaceName'](),this['_graphicFaceIndex']=_0x1cdbb6['TurnOrderOTBGraphicFaceIndex'](),_0x5fad00=ImageManager[_0x5c7e92(0x316)](this['_graphicFaceName']),_0x5fad00[_0x5c7e92(0x1c8)](this[_0x5c7e92(0x239)][_0x5c7e92(0x1e5)](this,_0x5fad00));break;case'icon':this['_graphicIconIndex']=_0x1cdbb6[_0x5c7e92(0x389)](),_0x5fad00=ImageManager[_0x5c7e92(0x2ae)](_0x5c7e92(0x395)),_0x5fad00[_0x5c7e92(0x1c8)](this[_0x5c7e92(0x1d1)][_0x5c7e92(0x1e5)](this,_0x5fad00));break;case'enemy':if(_0x1cdbb6[_0x5c7e92(0x1c0)]())this[_0x5c7e92(0x1cd)]=_0x1cdbb6[_0x5c7e92(0x308)](),_0x5fad00=ImageManager['loadSvActor'](this['_graphicSv']),_0x5fad00[_0x5c7e92(0x1c8)](this['changeSvActorGraphicBitmap'][_0x5c7e92(0x1e5)](this,_0x5fad00));else $gameSystem['isSideView']()?(this['_graphicEnemy']=_0x1cdbb6[_0x5c7e92(0x3b1)](),_0x5fad00=ImageManager[_0x5c7e92(0x2fb)](this[_0x5c7e92(0x33e)]),_0x5fad00[_0x5c7e92(0x1c8)](this[_0x5c7e92(0x251)][_0x5c7e92(0x1e5)](this,_0x5fad00))):(this['_graphicEnemy']=_0x1cdbb6['battlerName'](),_0x5fad00=ImageManager['loadEnemy'](this[_0x5c7e92(0x33e)]),_0x5fad00['addLoadListener'](this[_0x5c7e92(0x251)]['bind'](this,_0x5fad00)));break;case'svactor':this[_0x5c7e92(0x1cd)]=_0x1cdbb6[_0x5c7e92(0x3b1)](),_0x5fad00=ImageManager[_0x5c7e92(0x249)](this[_0x5c7e92(0x1cd)]),_0x5fad00[_0x5c7e92(0x1c8)](this['changeSvActorGraphicBitmap'][_0x5c7e92(0x1e5)](this,_0x5fad00));break;}},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x239)]=function(_0xd0fe03){const _0x485fff=_0xd87de4,_0xa63a1b=this['_graphicFaceIndex'],_0x54aa80=this['bitmapWidth'](),_0x90d848=this[_0x485fff(0x20f)](),_0x5c8784=Math[_0x485fff(0x3b5)](_0x54aa80,_0x90d848);this[_0x485fff(0x240)][_0x485fff(0x2e9)]=new Bitmap(_0x54aa80,_0x90d848);const _0x3dbfa7=this[_0x485fff(0x240)][_0x485fff(0x2e9)],_0x1d5568=ImageManager[_0x485fff(0x1ba)],_0x21ef05=ImageManager[_0x485fff(0x24e)],_0x5bc6bc=_0x5c8784/Math[_0x485fff(0x3b5)](_0x1d5568,_0x21ef05),_0x46b260=ImageManager[_0x485fff(0x1ba)],_0x18907e=ImageManager['faceHeight'],_0x34cb47=_0xa63a1b%0x4*_0x1d5568+(_0x1d5568-_0x46b260)/0x2,_0x36ced0=Math[_0x485fff(0x29b)](_0xa63a1b/0x4)*_0x21ef05+(_0x21ef05-_0x18907e)/0x2,_0x8dd769=(_0x54aa80-_0x1d5568*_0x5bc6bc)/0x2,_0x4f258e=(_0x90d848-_0x21ef05*_0x5bc6bc)/0x2;_0x3dbfa7[_0x485fff(0x399)](_0xd0fe03,_0x34cb47,_0x36ced0,_0x46b260,_0x18907e,_0x8dd769,_0x4f258e,_0x5c8784,_0x5c8784);},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)]['changeIconGraphicBitmap']=function(_0x535c4b){const _0x5a876a=_0xd87de4,_0xe98328=this['_graphicIconIndex'],_0x15b145=this[_0x5a876a(0x346)](),_0x4d6d48=this[_0x5a876a(0x20f)]();this[_0x5a876a(0x240)][_0x5a876a(0x2e9)]=new Bitmap(_0x15b145,_0x4d6d48);const _0xa0a325=this[_0x5a876a(0x240)][_0x5a876a(0x2e9)],_0x421da9=ImageManager[_0x5a876a(0x365)],_0x12035a=ImageManager[_0x5a876a(0x1ec)],_0x485da5=Math[_0x5a876a(0x29c)](_0x421da9,_0x12035a,_0x15b145,_0x4d6d48),_0x39137b=_0xe98328%0x10*_0x421da9,_0x2402e7=Math[_0x5a876a(0x29b)](_0xe98328/0x10)*_0x12035a,_0xe88a73=Math[_0x5a876a(0x29b)](Math[_0x5a876a(0x3b5)](_0x15b145-_0x485da5,0x0)/0x2),_0x279a6d=Math[_0x5a876a(0x29b)](Math[_0x5a876a(0x3b5)](_0x4d6d48-_0x485da5,0x0)/0x2);_0xa0a325['blt'](_0x535c4b,_0x39137b,_0x2402e7,_0x421da9,_0x12035a,_0xe88a73,_0x279a6d,_0x485da5,_0x485da5);},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x1b1)]=function(_0xbcdd01){const _0x4e06c1=_0xd87de4,_0x2e1751=this['bitmapWidth'](),_0x237a27=this['bitmapHeight'](),_0x44e921=Math[_0x4e06c1(0x29c)](_0x2e1751,_0x237a27);this[_0x4e06c1(0x240)]['bitmap']=new Bitmap(_0x2e1751,_0x237a27);const _0x3226a9=this[_0x4e06c1(0x240)][_0x4e06c1(0x2e9)],_0x314a8c=this[_0x4e06c1(0x1cd)]['match'](/\$/i),_0x132aca=_0x314a8c?0x1:ImageManager[_0x4e06c1(0x1ce)],_0x2aaa2a=_0x314a8c?0x1:ImageManager[_0x4e06c1(0x358)],_0xc180bc=_0xbcdd01['width']/_0x132aca,_0x275506=_0xbcdd01[_0x4e06c1(0x3a3)]/_0x2aaa2a,_0x3d402b=Math[_0x4e06c1(0x29c)](0x1,_0x44e921/_0xc180bc,_0x44e921/_0x275506),_0x58673b=_0xc180bc*_0x3d402b,_0x4fe339=_0x275506*_0x3d402b,_0x121caa=Math[_0x4e06c1(0x326)]((_0x2e1751-_0x58673b)/0x2),_0x1ce5bd=Math[_0x4e06c1(0x326)]((_0x237a27-_0x4fe339)/0x2);_0x3226a9[_0x4e06c1(0x399)](_0xbcdd01,0x0,0x0,_0xc180bc,_0x275506,_0x121caa,_0x1ce5bd,_0x58673b,_0x4fe339);},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x251)]=function(_0x37b3bd){const _0x51bdfd=_0xd87de4,_0x586382=Window_OTB_TurnOrder[_0x51bdfd(0x2a7)],_0x5a8d3b=this[_0x51bdfd(0x346)](),_0x50bd86=this[_0x51bdfd(0x20f)](),_0x317f21=Math[_0x51bdfd(0x29c)](_0x5a8d3b,_0x50bd86);this[_0x51bdfd(0x240)]['bitmap']=new Bitmap(_0x5a8d3b,_0x50bd86);const _0x7e9dbb=this[_0x51bdfd(0x240)][_0x51bdfd(0x2e9)],_0x385544=Math[_0x51bdfd(0x29c)](0x1,_0x317f21/_0x37b3bd['width'],_0x317f21/_0x37b3bd[_0x51bdfd(0x3a3)]),_0x8a0a1f=_0x37b3bd['width']*_0x385544,_0x28acff=_0x37b3bd[_0x51bdfd(0x3a3)]*_0x385544,_0x4e38c9=Math['round']((_0x5a8d3b-_0x8a0a1f)/0x2),_0x1ced95=Math['round']((_0x50bd86-_0x28acff)/0x2);_0x7e9dbb[_0x51bdfd(0x399)](_0x37b3bd,0x0,0x0,_0x37b3bd[_0x51bdfd(0x3b0)],_0x37b3bd[_0x51bdfd(0x3a3)],_0x4e38c9,_0x1ced95,_0x8a0a1f,_0x28acff);},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)]['updateGraphicHue']=function(){const _0x43112f=_0xd87de4,_0x2aa08a=this[_0x43112f(0x1f7)]();if(!_0x2aa08a)return;if(!_0x2aa08a[_0x43112f(0x1d2)]())return;if(this[_0x43112f(0x26f)]===_0x2aa08a['battlerHue']())return;this[_0x43112f(0x26f)]=_0x2aa08a[_0x43112f(0x2c9)](),this[_0x43112f(0x240)][_0x43112f(0x1d3)](_0x2aa08a[_0x43112f(0x1c0)]()?0x0:this[_0x43112f(0x26f)]);},Sprite_OTB_TurnOrder_Battler['prototype'][_0xd87de4(0x250)]=function(){const _0x2ee72f=_0xd87de4;if(!this[_0x2ee72f(0x37f)])return;const _0x173a9a=this[_0x2ee72f(0x1f7)]();if(!_0x173a9a)return;if(this[_0x2ee72f(0x217)]===_0x173a9a[_0x2ee72f(0x217)]&&this[_0x2ee72f(0x20e)]===_0x173a9a[_0x2ee72f(0x20e)])return;this[_0x2ee72f(0x217)]=_0x173a9a[_0x2ee72f(0x217)],this[_0x2ee72f(0x20e)]=_0x173a9a[_0x2ee72f(0x20e)];const _0x2272ba=Window_OTB_TurnOrder[_0x2ee72f(0x2a7)],_0x2674e8=this['bitmapWidth'](),_0x390012=this['bitmapHeight'](),_0x525af5=this[_0x2ee72f(0x37f)][_0x2ee72f(0x2e9)];_0x525af5[_0x2ee72f(0x219)]();if(!this[_0x2ee72f(0x20e)])return;_0x525af5[_0x2ee72f(0x210)]=_0x2272ba[_0x2ee72f(0x21e)]||$gameSystem[_0x2ee72f(0x304)](),_0x525af5[_0x2ee72f(0x323)]=_0x2272ba['EnemyBattlerFontSize']||0x10,_0x2272ba['OrderDirection']?_0x525af5['drawText'](this['_letter'][_0x2ee72f(0x317)](),_0x2674e8*0x1/0x8,_0x390012/0x2,_0x2674e8,_0x390012/0x2,'left'):_0x525af5[_0x2ee72f(0x2f8)](this[_0x2ee72f(0x217)][_0x2ee72f(0x317)](),0x0,_0x390012/0x2,_0x2674e8*0x7/0x8,_0x390012/0x2,_0x2ee72f(0x33f));},Sprite_OTB_TurnOrder_Battler['prototype'][_0xd87de4(0x2f4)]=function(){const _0x56f32e=_0xd87de4,_0x4af5bf=this['battler']();if(!_0x4af5bf)return;const _0x1f810e=_0x4af5bf[_0x56f32e(0x1f7)]();if(!_0x1f810e)return;const _0x21623f=_0x1f810e[_0x56f32e(0x272)]();if(!_0x21623f)return;this[_0x56f32e(0x329)](_0x21623f[_0x56f32e(0x2bf)]);},Sprite_OTB_TurnOrder_Battler['prototype'][_0xd87de4(0x36a)]=function(){return null;},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)]['changeSourceArray']=function(_0x2ff606){const _0x5deb72=_0xd87de4;this[_0x5deb72(0x207)]=_0x2ff606,this[_0x5deb72(0x2e8)](),this[_0x5deb72(0x207)]===null&&(this[_0x5deb72(0x302)]=-0x1);},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x2e8)]=function(){const _0x5cea6d=_0xd87de4,_0x49d022=this['containerWindow']();if(!_0x49d022)return;const _0x40b82e=Window_OTB_TurnOrder[_0x5cea6d(0x2a7)],_0x2c2847=_0x40b82e[_0x5cea6d(0x2b3)],_0x4f5adf=this[_0x5cea6d(0x207)]===_0x49d022[_0x5cea6d(0x39a)]?!![]:![],_0x1a758b=this[_0x5cea6d(0x302)]===-0x1&&BattleManager['_subject']===this[_0x5cea6d(0x1f7)](),_0x29b02a=_0x49d022[_0x5cea6d(0x212)]-_0x40b82e[_0x5cea6d(0x2e4)];let _0x288bd6=Math[_0x5cea6d(0x1eb)](_0x29b02a/(this[_0x5cea6d(0x207)][_0x5cea6d(0x383)]-0x1||0x1));_0x288bd6=Math[_0x5cea6d(0x29c)](_0x40b82e[_0x5cea6d(0x2e4)],_0x288bd6);let _0x60c562=0x0,_0x4c495b=0x0,_0x229acc=_0x1a758b?-0x1:this[_0x5cea6d(0x207)][_0x5cea6d(0x3ac)](this);!_0x1a758b&&(_0x229acc=this['calculateTargetIndex']());if(_0x1a758b)_0x60c562=_0x49d022[_0x5cea6d(0x3c8)];else _0x2c2847?(_0x60c562=(_0x4f5adf?_0x49d022['_nextX']:_0x49d022[_0x5cea6d(0x3ec)])+_0x29b02a,_0x60c562-=_0x229acc*_0x288bd6):(_0x60c562=_0x4f5adf?_0x49d022[_0x5cea6d(0x28d)]:_0x49d022[_0x5cea6d(0x3ec)],_0x60c562+=_0x229acc*_0x288bd6);_0x60c562+=this[_0x5cea6d(0x35f)](_0x229acc,_0x40b82e[_0x5cea6d(0x2e4)]-_0x288bd6),!_0x1a758b&&_0x229acc<0x0&&(_0x60c562=this['x'],_0x4c495b=this['y'],this[_0x5cea6d(0x30d)](0x0)),this[_0x5cea6d(0x1e7)](_0x60c562,_0x4c495b);},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x35f)]=function(_0x4081f1,_0x4d341b){return 0x0;},Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)][_0xd87de4(0x3c6)]=function(){const _0x71f9f7=_0xd87de4,_0x34bfdc=this['containerWindow']();if(!_0x34bfdc)return 0x0;const _0xdbaece=this[_0x71f9f7(0x207)]===_0x34bfdc[_0x71f9f7(0x39a)]?!![]:![],_0xd883ee=_0xdbaece?BattleManager['_otb_actionBattlersNext']:BattleManager[_0x71f9f7(0x285)],_0x66a6f0=this[_0x71f9f7(0x1f7)](),_0x3683c1=VisuMZ[_0x71f9f7(0x1fa)]['GetAllIndicies'](_0x66a6f0,_0xd883ee);return _0x3683c1[this[_0x71f9f7(0x302)]]??_0x3683c1[_0x3683c1[_0x71f9f7(0x383)]-0x1]??-0x1;};function Sprite_OTB_TurnOrder_Preview(){const _0x350838=_0xd87de4;this[_0x350838(0x2ab)](...arguments);}Sprite_OTB_TurnOrder_Preview[_0xd87de4(0x1ca)]=Object[_0xd87de4(0x3ae)](Sprite_OTB_TurnOrder_Battler[_0xd87de4(0x1ca)]),Sprite_OTB_TurnOrder_Preview[_0xd87de4(0x1ca)][_0xd87de4(0x2e1)]=Sprite_OTB_TurnOrder_Preview,Sprite_OTB_TurnOrder_Preview[_0xd87de4(0x1ca)][_0xd87de4(0x2ab)]=function(_0x1d3dad,_0x1e6524,_0x1b7619,_0x2c3806){const _0x4ad69d=_0xd87de4;this[_0x4ad69d(0x2d3)]=_0x2c3806,Sprite_OTB_TurnOrder_Battler[_0x4ad69d(0x1ca)]['initialize'][_0x4ad69d(0x3af)](this,_0x1d3dad,_0x1e6524,_0x1b7619),this[_0x4ad69d(0x3bc)]();},Sprite_OTB_TurnOrder_Preview[_0xd87de4(0x1ca)][_0xd87de4(0x3bc)]=function(){const _0x551fbd=_0xd87de4,_0x509103=Window_OTB_TurnOrder[_0x551fbd(0x2a7)];this[_0x551fbd(0x21f)]['x']=this[_0x551fbd(0x21f)]['y']=_0x509103[_0x551fbd(0x20b)];},Sprite_OTB_TurnOrder_Preview['prototype']['getUnitSideSide']=function(){const _0x1958cf=_0xd87de4;return this[_0x1958cf(0x36f)]===$gameParty?_0x1958cf(0x355):'PreviewEnemy';},Sprite_OTB_TurnOrder_Preview[_0xd87de4(0x1ca)][_0xd87de4(0x2d6)]=function(){const _0x5a5eed=_0xd87de4,_0x28c090=Window_OTB_TurnOrder[_0x5a5eed(0x2a7)];return Math['ceil'](_0x28c090['BorderThickness']/(_0x28c090['PreviewScale']||0.01));},Sprite_OTB_TurnOrder_Preview[_0xd87de4(0x1ca)][_0xd87de4(0x1e7)]=function(_0x54382c,_0x5c9a50){const _0x4923fe=_0xd87de4;Sprite_OTB_TurnOrder_Battler['prototype'][_0x4923fe(0x1e7)][_0x4923fe(0x3af)](this,_0x54382c,_0x5c9a50),this['x']=this[_0x4923fe(0x327)],this['y']=this[_0x4923fe(0x35a)];},Sprite_OTB_TurnOrder_Preview[_0xd87de4(0x1ca)][_0xd87de4(0x30d)]=function(_0x533b4d){const _0x795bd1=_0xd87de4;Sprite_OTB_TurnOrder_Battler[_0x795bd1(0x1ca)][_0x795bd1(0x30d)]['call'](this,_0x533b4d),_0x533b4d>0x0?this[_0x795bd1(0x2f3)]=0x1:(this[_0x795bd1(0x2f3)]/=0x2,this['_fadeDuration']=Math[_0x795bd1(0x29b)](this[_0x795bd1(0x2f3)]));},Sprite_OTB_TurnOrder_Preview[_0xd87de4(0x1ca)]['additionalTargetXAdjustments']=function(_0x26ffa6,_0x105d52){const _0x1f2dce=_0xd87de4,_0x192971=Window_OTB_TurnOrder[_0x1f2dce(0x2a7)];if(_0x26ffa6>0x0){if(this['_offset']>0x0)return _0x192971['OrderDirection']?-_0x192971['SpriteThin']:_0x192971[_0x1f2dce(0x2e4)];else{if(this[_0x1f2dce(0x2d3)]<0x0)return _0x192971[_0x1f2dce(0x2b3)]?-_0x105d52:_0x105d52;}}return 0x0;},Sprite_OTB_TurnOrder_Preview['prototype'][_0xd87de4(0x3c6)]=function(){const _0x1cd38b=_0xd87de4,_0x17b4f2=this[_0x1cd38b(0x31b)](),_0x2faa7b=this['_sourceArray']===_0x17b4f2['_nextTurn']?!![]:![],_0x1edeac=_0x2faa7b?BattleManager[_0x1cd38b(0x311)]:BattleManager[_0x1cd38b(0x285)];let _0x30e75d=0x0,_0x235d8d=_0x1edeac['length']-0x1;_0x2faa7b&&(_0x30e75d=Math[_0x1cd38b(0x3b5)](0x0,VisuMZ[_0x1cd38b(0x1fa)][_0x1cd38b(0x1da)](_0x1edeac)));let _0x380a17=Sprite_OTB_TurnOrder_Battler[_0x1cd38b(0x1ca)][_0x1cd38b(0x3c6)][_0x1cd38b(0x3af)](this);return _0x380a17+=this[_0x1cd38b(0x2d3)],_0x380a17[_0x1cd38b(0x328)](_0x30e75d,_0x235d8d);},Sprite_OTB_TurnOrder_Preview[_0xd87de4(0x1ca)]['updateSelectionEffect']=function(){},Window_Selectable[_0xd87de4(0x1ca)][_0xd87de4(0x269)]=function(){return![];},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x371)]=Window_Selectable[_0xd87de4(0x1ca)][_0xd87de4(0x3a9)],Window_Selectable['prototype']['select']=function(_0x44534c){const _0x147e0c=_0xd87de4;VisuMZ[_0x147e0c(0x1fa)][_0x147e0c(0x371)][_0x147e0c(0x3af)](this,_0x44534c),this[_0x147e0c(0x269)]()&&this[_0x147e0c(0x339)]&&this[_0x147e0c(0x31f)]();},Window_Selectable[_0xd87de4(0x1ca)]['applyBattleItemWindowOTB']=function(){const _0x337954=_0xd87de4;BattleManager[_0x337954(0x1b0)]();},VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x299)]=Window_Help[_0xd87de4(0x1ca)][_0xd87de4(0x1fc)],Window_Help[_0xd87de4(0x1ca)][_0xd87de4(0x1fc)]=function(_0x2f8925){const _0x4a72dd=_0xd87de4;BattleManager[_0x4a72dd(0x2c7)]()&&_0x2f8925&&_0x2f8925[_0x4a72dd(0x281)]&&_0x2f8925[_0x4a72dd(0x281)][_0x4a72dd(0x1f4)](/<(?:OTB) HELP>\s*([\s\S]*)\s*<\/(?:OTB) HELP>/i)?this['setText'](String(RegExp['$1'])):VisuMZ[_0x4a72dd(0x1fa)]['Window_Help_setItem'][_0x4a72dd(0x3af)](this,_0x2f8925);},Window_ActorCommand[_0xd87de4(0x1ca)][_0xd87de4(0x269)]=function(){return BattleManager['isOTB']();},Window_ActorCommand[_0xd87de4(0x1ca)][_0xd87de4(0x31f)]=function(){const _0x404e3a=_0xd87de4,_0x5302e8=BattleManager['inputtingAction']();if(_0x5302e8){const _0x164935=this[_0x404e3a(0x1bf)]();switch(_0x164935){case'attack':_0x5302e8[_0x404e3a(0x2a5)]();break;case'guard':_0x5302e8[_0x404e3a(0x361)]();break;case _0x404e3a(0x37e):_0x5302e8['setSkill'](this[_0x404e3a(0x3c3)]());break;default:_0x5302e8['setSkill'](null);break;}}Window_Command['prototype'][_0x404e3a(0x31f)][_0x404e3a(0x3af)](this);},Window_BattleSkill[_0xd87de4(0x1ca)][_0xd87de4(0x269)]=function(){const _0xbc4078=_0xd87de4;return BattleManager[_0xbc4078(0x2c7)]();},Window_BattleSkill[_0xd87de4(0x1ca)]['applyBattleItemWindowOTB']=function(){const _0x5bdb1f=_0xd87de4,_0x4f4d0f=this['item'](),_0x499773=BattleManager['inputtingAction']();if(_0x499773)_0x499773['setSkill'](_0x4f4d0f?_0x4f4d0f['id']:null);Window_SkillList[_0x5bdb1f(0x1ca)][_0x5bdb1f(0x31f)]['call'](this);},Window_BattleItem['prototype'][_0xd87de4(0x269)]=function(){const _0x23a77d=_0xd87de4;return BattleManager[_0x23a77d(0x2c7)]();},Window_BattleItem[_0xd87de4(0x1ca)][_0xd87de4(0x31f)]=function(){const _0x4025ab=_0xd87de4,_0x5ad04f=this[_0x4025ab(0x38e)](),_0x4d760a=BattleManager['inputtingAction']();if(_0x4d760a)_0x4d760a['setItem'](_0x5ad04f?_0x5ad04f['id']:null);Window_ItemList[_0x4025ab(0x1ca)]['applyBattleItemWindowOTB']['call'](this);},Window_BattleActor[_0xd87de4(0x1ca)][_0xd87de4(0x269)]=function(){const _0x53cdee=_0xd87de4;return BattleManager[_0x53cdee(0x2c7)]();},Window_BattleEnemy[_0xd87de4(0x1ca)][_0xd87de4(0x269)]=function(){const _0x58b728=_0xd87de4;return BattleManager[_0x58b728(0x2c7)]();};function _0x3c41(_0x4d1631,_0x2687d6){const _0x201df2=_0x201d();return _0x3c41=function(_0x3c412d,_0x2caf0a){_0x3c412d=_0x3c412d-0x1b0;let _0x19fbd3=_0x201df2[_0x3c412d];return _0x19fbd3;},_0x3c41(_0x4d1631,_0x2687d6);}function _0x201d(){const _0x14a1e5=['BgImageFilename','Game_Party_addActor','actor','Game_Action_speed','_graphicFaceIndex','otbCalcUserCurrentOrderChange','pop','_previewCurrent','_sourceArray','Game_BattlerBase_recoverAll','Game_Action_allowRandomSpeed','processTurn','PreviewScale','otbAddBattlerToTurnOrderAtEnd','_statusWindow','_plural','bitmapHeight','fontFace','startTurn','_spriteGroupWidth','makeDeepCopy','boxHeight','30DGslPf','isNextOtbSubject','_letter','_ogWindowLayerY','clear','isBattleMember','clearOrderPreview','%1-%2','shift','EnemyBattlerFontFace','scale','BattleManager_battleSys','_isBattleOver','LogWindowOffsetY','removeStatesAuto','findIndex','Game_Battler_makeActionTimes','removeChild','EFFECT_ADD_DEBUFF','onBattleEndOTB','startActorInput','requestUpdateTurnOrders','_tempBattler','BattleManager_selectNextActor','createOTBTurnOrderWindow','UiSubjectText','removeCurrentSubject','EnableActionTimes','RegExp','faceName','_homeDuration','containerPosition','setTarget','Instant','drawBgImage','random','changeFaceGraphicBitmap','name','subject','UserFollOrder','GetAllIndicies','onActorCancel','needsSelection','_graphicSprite','OTB_CONVERT_AGI_BUFF_CURRENT_TURN','_bgImageSprite','isActor','Game_Battler_makeSpeed','update','removeState','addChildAt','finishActorInput','loadSvActor','_otbTurnOrderGraphicType','version','left','%1SystemBg','faceHeight','startInputOTB','updateLetter','changeEnemyGraphicBitmap','_graphicFaceName','SpriteLength','onBattleStartOTB','isSceneBattle','battleEnd','hide','_otbTurnOrderVisible','unshift','PreviewOffsetY','Actor','top','splice','FaceIndex','preEndActionOTB','BattleManager_startInput','battleSys','otbCalcUserNextOrderChange','Game_Battler_addState','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','filter','_lastTargetIndex','createChildren','OTB_ADDED_ACTION_TIMES','isBattleItemWindowOTB','getBattleSystem','Game_Battler_onTurnEnd','TurnOrderOTBGraphicType','InfinityClamp','actionPlusSet','_graphicHue','faceIndex','TargetAddActionNext','mainSprite','parse','createTurnOrderOTBGraphicFaceName','createNewTurnOrderSprites','UpdateFrames','makeActionOrders','endBattlerActions','UserAddActionNext','OtbTurnOrderEnemyFace','removeActor','_surprise','otbPreviewOrderClear','clearMakeActionTimesCacheOTB','Game_System_initialize','description','note','appear','createOrderPreviewSprite','BattleManager_getNextSubject','_actionBattlers','postEndActionOTB','reduce','onBattleStart','forceAction','_subject','isInfinitySpeedOTB','code','_nextX','_logWindow','isAppeared','_homeY','RandomizeActionTimesOrder','UiNextText','Scene_Battle_onActorOk','processTurnOTB','_spriteContainer','map','Game_Battler_forceAction','OTB_CONVERT_AGI_BUFF_NEXT_TURN','Window_Help_setItem','Enemy','floor','min','return\x200','Game_Battler_onBattleStart','_positionDuration','enemy','_containerWidth','otbGainInstant','otbCalcTargetNextOrderChange','previewOrderByAction','setAttack','TargetFollOrder','Settings','ShowMarkerBorder','BattleManager_isActiveTpb','format','initialize','recoverAll','concat','loadSystem','getNextSubject','Scene_Battle_onActorCancel','OTB_STUN_INFINITY_CLAMP','applyItemUserEffect','OrderDirection','onItemOk','TargetCurrOrder','onSkillOk','UiFontSize','_targetHomeX','DisplayOffsetX','Actors','addBattlerToTurnOrderAtStart','selectNextActorOTB','boxWidth','effects','_blendColor','makeNextActionOrdersOTB','Scene_Battle_commandFight','initMembersOTB','Mechanics','_currentActor','_otb_createdFirstTurnOrders','ARRAYSTR','isOTB','_otbTurnOrderIconIndex','battlerHue','VisuMZ_0_CoreEngine','isActiveTpb','_graphicType','updateStateTurns','BattleManager_isTurnBased','commandAttack','otbCreateNewTurnOrderSprites','initBattleSystemOTB','OTB_CONVERT_AGI_DEBUFF_NEXT_TURN','_offset','UiNextOffsetY','inputtingAction','getBorderThickness','resetFontSettings','otbShiftTurnOrderForSubject','getColor','_preemptive','UiNextOffsetX','333192wYJiUb','opacity','SubjectDistance','otbProcessActionCheck','updatePadding','constructor','DisplayOffsetY','isBattleSystemOTBTurnOrderVisible','SpriteThin','randomInt','TurnOrderOTBGraphicFaceName','482407prTRgP','calculateTargetPositions','bitmap','_windowLayer','ARRAYFUNC','speed','_ogWindowLayerX','ConvertParams','ARRAYEVAL','Scene_Battle_commandAttack','ConvertAgiBuffNext','2512413cWJEQp','_fadeDuration','updateSelectionEffect','_containerHeight','deathStateId','registerCommand','drawText','createSpriteContainers','UiCurrentOffsetX','loadSvEnemy','onTurnEndOTB','Enemies','Scene_Battle_onEnemyCancel','_homeX','_currentTurn','UserNextOrder','_instance','UserCurrOrder','mainFontFace','addBattlerToTurnOrderAtEnd','otbAddForceActionBattler','dataId','svBattlerName','otbShiftNextTurnSpritesToCurrentTurn','makeActionOrdersOTB','UiCurrentOffsetY','Scene_Battle_createActorCommandWindow','startFade','canMove','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','refresh','_otb_actionBattlersNext','EnemyBattlerDrawLetter','TurnOrderOTBGraphicIconIndex','_otbTurnOrderWindow','updateVisibility','loadFace','trim','12110628BnBbPN','StatusWindow','resumeTurnOrderSprites','containerWindow','commandFight','isTpb','_last_otb_actionPlusSetLength','applyBattleItemWindowOTB','setBattleSystemOTBTurnOrderVisible','Scene_Battle_onEnemyOk','ARRAYNUM','fontSize','Game_Action_applyItemUserEffect','updateTurnOrders','round','_positionTargetX','clamp','setBlendColor','updatePosition','removeActionBattlersOTB','JSON','_inputting','UserAddActionCurrent','BattleManager_isTpb','makeActions','icon','%1BorderColor','ConvertAgiDebuffCurrent','_otbTurnOrderFaceName','performCollapse','ScreenBuffer','RepositionTopHelpX','OTB_STUN_INFINITY_SPEED','active','drawUiText','createGraphicSprite','isHorz','ConvertAgiBuffCurrent','_graphicEnemy','right','allowRandomSpeed','Game_Battler_removeState','ActionBattlersFilter','onEnemyCancel','getChildIndex','applyItemAddedActionOTB','bitmapWidth','_forcedBattlers','otbReturnBattlerToTurnOrders','OTB','Scene_Battle_commandGuard','isPartyCommandWindowDisabled','Game_BattlerBase_appear','otbApplyActionTimes','_otbTimesActedThisTurn','ActionBattlersNextFilter','RepositionTopForHelp','fillRect','ConvertSpeedJS','UiAlignment','BattleManager_forceAction','PreviewActor','addActor','DisplayPosition','svActorVertCells','VisuMZ_1_BattleCore','_positionTargetY','exit','svactor','clearTurnOrderOTBGraphics','contentsOpacity','additionalTargetXAdjustments','PostStunInfinitySpeed','setGuard','visible','ARRAYJSON','_targetHomeY','iconWidth','UiSubjectOffsetX','Conversion','_isAlive','createTurnOrderOTBGraphicType','getStateTooltipBattler','commandGuard','_hidden','initHomePositions','Game_Party_removeActor','_unit','remove','Window_Selectable_select','_fadeSpeed','Scene_Battle_createAllWindows','BgDimStyle','status','_phase','processSpriteRemoval','_graphicIconIndex','transparent','ActorBattlerIcon','startInput','battleMembers','commandCancelOTB','singleSkill','_letterSprite','_helpWindow','Scene_Battle_onSkillOk','contentsBack','length','members','EFFECT_ADD_BUFF','createInitialPositions','onSkillCancel','getUnitSideSide','createTurnOrderOTBGraphicIconIndex','windowRect','createBackgroundSprite','cancel','ConvertAgiDebuffNext','item','makeOTBSpeed','refreshTurnOrder','createAllWindows','PreviewOffsetX','otbRemoveUnableTurnOrderSprites','UiCurrentText','IconSet','otbAddActions','performActionEndOTB','Scene_Battle_commandCancel','blt','_nextTurn','bottom','BattleManager_setup','22808RYkxjJ','_speed','updateOpacity','canInput','removeSprite','endTurn','height','340735KEhMbV','Scene_Battle_onItemCancel','allBattleMembers','Scene_Battle_onItemOk','onBattleEnd','select','applyItemTargetEffectOTB','Game_BattlerBase_hide','indexOf','_partyCommandWindow','create','call','width','battlerName','EVAL','onActorOk','clearRect','max','updateGraphic','endAction','repositionLogWindowOTB','createBorderSprite','gradientFillRect','createActorCommandWindowOTB','adjustForPreview','actorCommandSingleSkill','2rtlBKM','AllowRandomSpeed','otbCalcTargetCurrentOrderChange','toUpperCase','close','currentExt','changeSourceArray','applyGlobal','calculateTargetIndex','BgImageOffsetY','_subjectX','addState','InitialSpeedJS','OtbTurnOrderClearEnemyGraphic','otbRemoveCurrentSubject','_actorCommandWindow','EnemyBattlerFaceIndex','getStateIdWithName','gradient','_previewNext','261LdFKJj','addForceActionBattler','_tempActor','startActorCommandSelection','BattleManager_endAction','30LwONoM','children','turnOrderChangeOTB','onEnemyOk','_backgroundSprite','shiftNextTurnSpritesToCurrentTurn','makeActionTimesOTB','commandCancel','sort','face','onTurnEnd','makeActionTimes','processUpdateGraphic','56ZzjTwl','selectNextCommand','applyGlobalBattleSystemOTB','createOrderPreview','updateGraphicHue','setSkill','push','%1SystemBorder','_currentX','otbPreviewOrderChange','changeSvActorGraphicBitmap','OTB_CONVERT_AGI_DEBUFF_CURRENT_TURN','TargetAddActionCurrent','ActorBattlerType','index','BattleManager_makeActionOrders','_isAppeared','stepForward','_previewContainer','faceWidth','BattleManager_endTurn','_requestTurnOrderUpdate','forceActionOTB','isAlive','currentSymbol','hasSvBattler','onItemCancel','Scene_Battle_onSkillCancel','VisuMZ_2_PartySystem','EnemyBattlerType','FaceName','BgImageOffsetX','%1BgColor2','addLoadListener','setup','prototype','selectNextActor','_otbTurnOrderFaceIndex','_graphicSv','svActorHorzCells','otbAddBattlerToTurnOrderAtStart','createTurnOrderOTBGraphicFaceIndex','changeIconGraphicBitmap','isEnemy','setHue','shiftTurnOrderForSubject','EnemyBattlerIcon','_scene','dimColor2','_forceAction','_fadeTarget','getInfinityClamp','checkOpacity','793573iqBpsm','canChangeOtbTurnOrder','lineHeight','Scene_Battle_actorCommandSingleSkill','TargetNextOrder','OtbTurnOrderEnemyIcon','_cache_makeActionTimesOTB','makeSpeed','includes','bind','anchor','moveToPosition','_actions','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','IconIndex','ceil','iconHeight','decideRandomTarget','defaultPosition','image','TurnOrderOTBGraphicFaceIndex','WidthBase','Game_Battler_performCollapse','contents','match','sortContainer','OtbTurnOrderActorIcon','battler','_stateIDs','BattleManager_processTurn','BattleSystemOTB','createTurnOrderSprites','setItem','addChild','EnemyBattlerFaceName'];_0x201d=function(){return _0x14a1e5;};return _0x201d();}function Window_OTB_TurnOrder(){this['initialize'](...arguments);}Window_OTB_TurnOrder['prototype']=Object[_0xd87de4(0x3ae)](Window_Base[_0xd87de4(0x1ca)]),Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x2e1)]=Window_OTB_TurnOrder,Window_OTB_TurnOrder['Settings']=VisuMZ[_0xd87de4(0x1fa)][_0xd87de4(0x2a7)]['TurnOrder'],Window_OTB_TurnOrder[_0xd87de4(0x1ca)]['initialize']=function(){const _0x35fe0c=_0xd87de4,_0x2b4cc6=this['windowRect']();this[_0x35fe0c(0x36d)](_0x2b4cc6),Window_Base['prototype']['initialize'][_0x35fe0c(0x3af)](this,_0x2b4cc6),this[_0x35fe0c(0x2dd)]=0x0,this['drawDimmedArea'](),this['drawUiText'](),this['createSpriteContainers'](),this[_0x35fe0c(0x315)]();},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x38a)]=function(){const _0x50478a=_0xd87de4,_0x149b77=Window_OTB_TurnOrder['Settings'],_0x4c906b=SceneManager[_0x50478a(0x1d6)][_0x50478a(0x20d)]['height'];let _0x5b2c1e=Graphics[_0x50478a(0x3b0)]-_0x149b77['ScreenBuffer']*0x2,_0x49e3cd=_0x149b77[_0x50478a(0x253)]+this[_0x50478a(0x1de)](),_0x32f1ac=_0x149b77[_0x50478a(0x336)],_0x3746d1=0x0;switch(_0x149b77[_0x50478a(0x357)]){case _0x50478a(0x39b):_0x3746d1=Graphics[_0x50478a(0x3a3)]-_0x4c906b-_0x149b77[_0x50478a(0x336)]-_0x49e3cd;break;default:_0x3746d1=_0x149b77[_0x50478a(0x336)];break;}if(Imported['VisuMZ_3_SideviewBattleUI']&&BattleManager['isUsingSideviewUiLayout']()){const _0x378b94=VisuMZ['SideviewBattleUI'][_0x50478a(0x2a7)][_0x50478a(0x319)];_0x5b2c1e-=_0x378b94[_0x50478a(0x1f1)]+_0x378b94['MoveDistance'],_0x5b2c1e-=_0x149b77[_0x50478a(0x336)];}return _0x32f1ac+=_0x149b77[_0x50478a(0x2b9)]||0x0,_0x3746d1+=_0x149b77[_0x50478a(0x2e2)]||0x0,new Rectangle(_0x32f1ac,_0x3746d1,_0x5b2c1e,_0x49e3cd);},Window_OTB_TurnOrder[_0xd87de4(0x1ca)]['initHomePositions']=function(_0x31f61a){const _0x5b9e5a=_0xd87de4;this[_0x5b9e5a(0x2b8)]=this[_0x5b9e5a(0x2ff)]=_0x31f61a['x'],this[_0x5b9e5a(0x364)]=this[_0x5b9e5a(0x290)]=_0x31f61a['y'],this[_0x5b9e5a(0x233)]=0x0;const _0xacfcc4=Window_OTB_TurnOrder[_0x5b9e5a(0x2a7)];this[_0x5b9e5a(0x212)]=Math[_0x5b9e5a(0x1eb)]((_0x31f61a[_0x5b9e5a(0x3b0)]-_0xacfcc4[_0x5b9e5a(0x2e4)]-_0xacfcc4[_0x5b9e5a(0x2de)]*0x2)/0x2),_0xacfcc4[_0x5b9e5a(0x2b3)]?(this[_0x5b9e5a(0x3c8)]=_0x31f61a[_0x5b9e5a(0x3b0)]-_0xacfcc4['SpriteThin'],this['_currentX']=this[_0x5b9e5a(0x212)]+_0xacfcc4[_0x5b9e5a(0x2de)],this['_nextX']=0x0):(this[_0x5b9e5a(0x3c8)]=0x0,this[_0x5b9e5a(0x3ec)]=_0xacfcc4[_0x5b9e5a(0x2e4)]+_0xacfcc4[_0x5b9e5a(0x2de)],this[_0x5b9e5a(0x28d)]=this[_0x5b9e5a(0x3ec)]+_0xacfcc4[_0x5b9e5a(0x2de)]+this['_spriteGroupWidth']);},Window_OTB_TurnOrder['prototype'][_0xd87de4(0x2e0)]=function(){this['padding']=0x0;},Window_OTB_TurnOrder['prototype']['drawDimmedArea']=function(){const _0xbc76b7=_0xd87de4,_0x2c27e3=Window_OTB_TurnOrder[_0xbc76b7(0x2a7)];if(_0x2c27e3[_0xbc76b7(0x374)]===_0xbc76b7(0x379))return;if(_0x2c27e3[_0xbc76b7(0x374)]===_0xbc76b7(0x1ef)&&_0x2c27e3[_0xbc76b7(0x1ff)]!==''){const _0x4aa187=ImageManager[_0xbc76b7(0x2ae)](_0x2c27e3[_0xbc76b7(0x1ff)]);_0x4aa187[_0xbc76b7(0x1c8)](this['drawBgImage'][_0xbc76b7(0x1e5)](this,_0x4aa187));return;};const _0x1c1c54=this[_0xbc76b7(0x382)],_0x29873d=ColorManager['dimColor1'](),_0x3d26b1=ColorManager[_0xbc76b7(0x1d7)](),_0x3a92f6=this[_0xbc76b7(0x3c8)],_0x2d3b94=_0x2c27e3['SpriteThin'],_0x38f96f=0x0,_0x4370af=_0x2c27e3[_0xbc76b7(0x253)],_0xa01970=this[_0xbc76b7(0x3ec)],_0x4b8360=this['_nextX'],_0x6de6ca=this[_0xbc76b7(0x212)];switch(_0x2c27e3[_0xbc76b7(0x374)]){case _0xbc76b7(0x3d0):_0x2c27e3[_0xbc76b7(0x2b3)]?(_0x1c1c54['gradientFillRect'](_0x3a92f6,_0x38f96f,_0x2d3b94/0x2,_0x4370af,_0x3d26b1,_0x29873d,![]),_0x1c1c54[_0xbc76b7(0x351)](_0x3a92f6+_0x2d3b94/0x2,_0x38f96f,_0x2d3b94/0x2,_0x4370af,_0x29873d),_0x1c1c54['gradientFillRect'](_0xa01970,_0x38f96f,_0x6de6ca/0x2,_0x4370af,_0x3d26b1,_0x29873d,![]),_0x1c1c54[_0xbc76b7(0x351)](_0xa01970+_0x6de6ca/0x2,_0x38f96f,_0x6de6ca/0x2,_0x4370af,_0x29873d),_0x1c1c54[_0xbc76b7(0x3ba)](_0x4b8360,_0x38f96f,_0x6de6ca/0x2,_0x4370af,_0x3d26b1,_0x29873d,![]),_0x1c1c54[_0xbc76b7(0x351)](_0x4b8360+_0x6de6ca/0x2,_0x38f96f,_0x6de6ca/0x2,_0x4370af,_0x29873d)):(_0x1c1c54[_0xbc76b7(0x351)](_0x3a92f6,_0x38f96f,_0x2d3b94/0x2,_0x4370af,_0x29873d),_0x1c1c54[_0xbc76b7(0x3ba)](_0x3a92f6+_0x2d3b94/0x2,_0x38f96f,_0x2d3b94/0x2,_0x4370af,_0x29873d,_0x3d26b1,![]),_0x1c1c54[_0xbc76b7(0x351)](_0xa01970,_0x38f96f,_0x6de6ca/0x2,_0x4370af,_0x29873d),_0x1c1c54[_0xbc76b7(0x3ba)](_0xa01970+_0x6de6ca/0x2,_0x38f96f,_0x6de6ca/0x2,_0x4370af,_0x29873d,_0x3d26b1,![]),_0x1c1c54[_0xbc76b7(0x351)](_0x4b8360,_0x38f96f,_0x6de6ca/0x2,_0x4370af,_0x29873d),_0x1c1c54[_0xbc76b7(0x3ba)](_0x4b8360+_0x6de6ca/0x2,_0x38f96f,_0x6de6ca/0x2,_0x4370af,_0x29873d,_0x3d26b1,![]));break;default:_0x1c1c54['fillRect'](_0x3a92f6,_0x38f96f,_0x2d3b94,_0x4370af,_0x29873d),_0x1c1c54[_0xbc76b7(0x351)](_0xa01970,_0x38f96f,_0x6de6ca,_0x4370af,_0x29873d),_0x1c1c54[_0xbc76b7(0x351)](_0x4b8360,_0x38f96f,_0x6de6ca,_0x4370af,_0x29873d);break;}},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x237)]=function(_0x445015){const _0x3d4772=_0xd87de4;this[_0x3d4772(0x242)]=new Sprite(),this['_bgImageSprite'][_0x3d4772(0x2e9)]=_0x445015,this['addChildToBack'](this[_0x3d4772(0x242)]);const _0x5f0018=Window_OTB_TurnOrder['Settings'];this[_0x3d4772(0x242)]['x']=_0x5f0018[_0x3d4772(0x1c6)],this['_bgImageSprite']['y']=_0x5f0018[_0x3d4772(0x3c7)];},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x33a)]=function(){const _0x15a7d6=_0xd87de4;this[_0x15a7d6(0x1f3)]['clear'](),this[_0x15a7d6(0x2d7)]();const _0x29f49f=Window_OTB_TurnOrder[_0x15a7d6(0x2a7)];this['contents'][_0x15a7d6(0x323)]=_0x29f49f[_0x15a7d6(0x2b7)];let _0x1997e5=_0x29f49f[_0x15a7d6(0x353)];_0x1997e5==='auto'&&(_0x1997e5=_0x29f49f['OrderDirection']?'right':_0x15a7d6(0x24c));let _0xf2e45d=_0x29f49f[_0x15a7d6(0x253)];if(_0x29f49f[_0x15a7d6(0x22e)]!==''){const _0x8dc1bd=this[_0x15a7d6(0x3c8)]+_0x29f49f[_0x15a7d6(0x366)],_0x2d0c37=_0xf2e45d+_0x29f49f['UiSubjectOffsetY'],_0x59fea2=_0x29f49f[_0x15a7d6(0x2e4)];this[_0x15a7d6(0x2f8)](_0x29f49f[_0x15a7d6(0x22e)],_0x8dc1bd,_0x2d0c37,_0x59fea2,'center');}if(_0x29f49f[_0x15a7d6(0x394)]!==''){const _0xd5dbaa=this[_0x15a7d6(0x3ec)]+_0x29f49f[_0x15a7d6(0x2fa)],_0x231d96=_0xf2e45d+_0x29f49f[_0x15a7d6(0x30b)],_0x3c5ff0=this['_spriteGroupWidth'];this[_0x15a7d6(0x2f8)](_0x29f49f[_0x15a7d6(0x394)],_0xd5dbaa,_0x231d96,_0x3c5ff0,_0x1997e5);}if(_0x29f49f[_0x15a7d6(0x292)]!==''){const _0x8eb3e4=this['_nextX']+_0x29f49f[_0x15a7d6(0x2db)],_0x54ed06=_0xf2e45d+_0x29f49f[_0x15a7d6(0x2d4)],_0x4f74fa=this['_spriteGroupWidth'];this[_0x15a7d6(0x2f8)](_0x29f49f[_0x15a7d6(0x292)],_0x8eb3e4,_0x54ed06,_0x4f74fa,_0x1997e5);}},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x2f9)]=function(){const _0x3c3d64=_0xd87de4,_0x487d4c=Window_OTB_TurnOrder[_0x3c3d64(0x2a7)];this[_0x3c3d64(0x295)]=new Sprite(),this[_0x3c3d64(0x1fd)](this[_0x3c3d64(0x295)]),this['_subject']=null,this[_0x3c3d64(0x300)]=[],this[_0x3c3d64(0x39a)]=[],this['_previewContainer']=new Sprite(),this['_previewContainer']['x']=_0x487d4c[_0x3c3d64(0x392)],this[_0x3c3d64(0x1b9)]['y']=_0x487d4c[_0x3c3d64(0x25a)],this['_previewContainer']['x']-=Math[_0x3c3d64(0x1eb)](_0x487d4c[_0x3c3d64(0x2e4)]*0.5*_0x487d4c[_0x3c3d64(0x20b)]),_0x487d4c['OrderDirection']&&(this[_0x3c3d64(0x1b9)]['x']+=_0x487d4c['SpriteThin']),this[_0x3c3d64(0x1b9)]['y']-=Math[_0x3c3d64(0x1eb)](_0x487d4c['SpriteLength']*0.5*_0x487d4c[_0x3c3d64(0x20b)]),this[_0x3c3d64(0x1fd)](this[_0x3c3d64(0x1b9)]),this[_0x3c3d64(0x206)]=[],this['_previewNext']=[];},Window_OTB_TurnOrder['prototype'][_0xd87de4(0x245)]=function(){const _0x6ff3a5=_0xd87de4;Window_Base['prototype']['update'][_0x6ff3a5(0x3af)](this),this[_0x6ff3a5(0x325)](),this['updatePosition'](),this['updateVisibility'](),this[_0x6ff3a5(0x1f5)]();},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x22a)]=function(){this['_requestTurnOrderUpdate']=!![];},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x325)]=function(){const _0x2e0c14=_0xd87de4;if(!this['_requestTurnOrderUpdate'])return;this[_0x2e0c14(0x1bc)]=![];for(const _0x5af46b of this[_0x2e0c14(0x300)]){if(!_0x5af46b)continue;_0x5af46b[_0x2e0c14(0x2e8)]();}for(const _0x29f062 of this[_0x2e0c14(0x39a)]){if(!_0x29f062)continue;_0x29f062[_0x2e0c14(0x2e8)]();}},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x32a)]=function(){const _0x590213=_0xd87de4,_0x414c4b=Window_OTB_TurnOrder[_0x590213(0x2a7)];if(_0x414c4b[_0x590213(0x357)]!==_0x590213(0x25c))return;if(!_0x414c4b[_0x590213(0x350)])return;const _0x4c57a7=SceneManager[_0x590213(0x1d6)][_0x590213(0x380)];if(!_0x4c57a7)return;_0x4c57a7['visible']?(this['x']=this[_0x590213(0x2ff)]+(_0x414c4b[_0x590213(0x337)]||0x0),this['y']=this[_0x590213(0x290)]+(_0x414c4b['RepositionTopHelpY']||0x0)):(this['x']=this[_0x590213(0x2ff)],this['y']=this[_0x590213(0x290)]);const _0x1b7f5b=SceneManager[_0x590213(0x1d6)][_0x590213(0x2ea)];Window_OTB_TurnOrder[_0x590213(0x2ed)]===undefined&&(Window_OTB_TurnOrder[_0x590213(0x2ed)]=Math[_0x590213(0x326)]((Graphics['width']-Math['min'](Graphics[_0x590213(0x2bd)],_0x1b7f5b[_0x590213(0x3b0)]))/0x2));Window_OTB_TurnOrder[_0x590213(0x218)]===undefined&&(Window_OTB_TurnOrder[_0x590213(0x218)]=Math['round']((Graphics[_0x590213(0x3a3)]-Math[_0x590213(0x29c)](Graphics['boxHeight'],_0x1b7f5b[_0x590213(0x3a3)]))/0x2));;this['x']+=_0x1b7f5b['x']-Window_OTB_TurnOrder['_ogWindowLayerX'],this['y']+=_0x1b7f5b['y']-Window_OTB_TurnOrder[_0x590213(0x218)];},Window_OTB_TurnOrder[_0xd87de4(0x1ca)]['updateVisibility']=function(){const _0x28abf6=_0xd87de4;this[_0x28abf6(0x362)]=$gameSystem[_0x28abf6(0x2e3)]();if(BattleManager[_0x28abf6(0x376)]===_0x28abf6(0x256)){if(!this[_0x28abf6(0x372)]){const _0x1db605=Window_OTB_TurnOrder[_0x28abf6(0x2a7)];this[_0x28abf6(0x372)]=Math[_0x28abf6(0x1eb)](0xff/(_0x1db605['UpdateFrames']||0x1));}this[_0x28abf6(0x2dd)]-=this[_0x28abf6(0x372)],this[_0x28abf6(0x35e)]-=this[_0x28abf6(0x372)],this['_contentsBackSprite']['opacity']-=this[_0x28abf6(0x372)];}},Window_OTB_TurnOrder[_0xd87de4(0x1ca)]['sortContainer']=function(){const _0x4bb0f4=_0xd87de4;if(!this['_spriteContainer'])return;const _0x1dee11=Window_OTB_TurnOrder[_0x4bb0f4(0x2a7)],_0x1b7b0b=_0x1dee11['OrderDirection'];_0x1b7b0b?this[_0x4bb0f4(0x295)][_0x4bb0f4(0x3d8)][_0x4bb0f4(0x3df)]((_0x1bd6f2,_0x5dfbeb)=>_0x1bd6f2['x']-_0x5dfbeb['x']):this[_0x4bb0f4(0x295)][_0x4bb0f4(0x3d8)]['sort']((_0x5361db,_0xd6fc23)=>_0xd6fc23['x']-_0x5361db['x']);},Window_OTB_TurnOrder[_0xd87de4(0x1ca)]['removeSprite']=function(_0x343e4e){const _0x36b1f6=_0xd87de4;if(!_0x343e4e)return;_0x343e4e['_sourceArray']&&_0x343e4e[_0x36b1f6(0x207)][_0x36b1f6(0x370)](_0x343e4e);const _0x2456e1=Window_OTB_TurnOrder[_0x36b1f6(0x2a7)],_0x27d171=0x3e8/0x3c*_0x2456e1[_0x36b1f6(0x276)]+0x1f4;_0x343e4e[_0x36b1f6(0x30d)](0x0),setTimeout(this[_0x36b1f6(0x377)][_0x36b1f6(0x1e5)](this,_0x343e4e),_0x27d171);},Window_OTB_TurnOrder[_0xd87de4(0x1ca)]['processSpriteRemoval']=function(_0x328606){const _0xc19cf7=_0xd87de4;_0x328606[_0xc19cf7(0x207)]&&_0x328606[_0xc19cf7(0x207)][_0xc19cf7(0x370)](_0x328606),this[_0xc19cf7(0x295)][_0xc19cf7(0x226)](_0x328606),this[_0xc19cf7(0x1b9)][_0xc19cf7(0x226)](_0x328606);},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x22f)]=function(){const _0x24d067=_0xd87de4;if(!this['_subject'])return;this[_0x24d067(0x3a1)](this[_0x24d067(0x28a)]);},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x3dc)]=function(){const _0x469260=_0xd87de4;while(this['_currentTurn'][_0x469260(0x383)]){const _0x1c88d8=this['_currentTurn'][_0x469260(0x21d)]();_0x1c88d8[_0x469260(0x30d)](0x0);}while(this[_0x469260(0x39a)][_0x469260(0x383)]){const _0x41316c=this[_0x469260(0x39a)][_0x469260(0x21d)]();if(!_0x41316c)continue;this[_0x469260(0x300)][_0x469260(0x3ea)](_0x41316c);}for(const _0x1da212 of this['_currentTurn']){if(!_0x1da212)continue;_0x1da212[_0x469260(0x3c4)](this[_0x469260(0x300)]);}},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x1fb)]=function(_0x5ecf80,_0x15dbf2){const _0x141fce=_0xd87de4,_0x37eb22=_0x5ecf80===BattleManager['_actionBattlers']?this['_currentTurn']:this[_0x141fce(0x39a)],_0x5430e6={};for(const _0x438d03 of _0x5ecf80){const _0x22729f=_0x141fce(0x21c)['format'](_0x438d03[_0x141fce(0x243)]()?'actor':_0x141fce(0x2a0),_0x438d03['index']());_0x5430e6[_0x22729f]=_0x5430e6[_0x22729f]||0x0;const _0x57ade4=_0x5430e6[_0x22729f]++,_0xf76668=new Sprite_OTB_TurnOrder_Battler(_0x438d03,_0x57ade4,_0x37eb22);this['_spriteContainer'][_0x141fce(0x1fd)](_0xf76668),_0x37eb22[_0x141fce(0x3ea)](_0xf76668);}for(const _0x59cbd8 of _0x37eb22){if(!_0x59cbd8)continue;_0x59cbd8['startFade'](0xff),_0x59cbd8['calculateTargetPositions'](),_0x15dbf2&&(_0x59cbd8['opacity']=0xff,_0x59cbd8['x']=_0x59cbd8['_positionTargetX'],_0x59cbd8[_0x141fce(0x29f)]=0x0);}},Window_OTB_TurnOrder['prototype'][_0xd87de4(0x275)]=function(){const _0x3f08a7=_0xd87de4,_0x5adaca=BattleManager[_0x3f08a7(0x311)];this[_0x3f08a7(0x1fb)](_0x5adaca);},Window_OTB_TurnOrder[_0xd87de4(0x1ca)]['shiftTurnOrderForSubject']=function(_0x4c7874,_0x41760e){const _0x6254d4=_0xd87de4;this['removeCurrentSubject']();for(const _0xe265f2 of this[_0x6254d4(0x300)]){if(!_0xe265f2)continue;_0xe265f2[_0x6254d4(0x1f7)]()===_0x4c7874&&(_0xe265f2[_0x6254d4(0x302)]=_0xe265f2[_0x6254d4(0x302)]||0x0,_0xe265f2['_instance']--);}const _0x5ed57d=this[_0x6254d4(0x300)][_0x6254d4(0x224)](_0x57d424=>_0x57d424[_0x6254d4(0x1f7)]()===_0x4c7874);if(this['_currentTurn'][_0x5ed57d])this[_0x6254d4(0x28a)]=this[_0x6254d4(0x300)][_0x5ed57d],this[_0x6254d4(0x300)][_0x5ed57d]['calculateTargetPositions'](),this['_currentTurn'][_0x6254d4(0x25d)](_0x5ed57d,0x1);else{if(_0x4c7874){const _0x56a584=new Sprite_OTB_TurnOrder_Battler(_0x4c7874,-0x1,null);this[_0x6254d4(0x295)][_0x6254d4(0x1fd)](_0x56a584),this[_0x6254d4(0x28a)]=_0x56a584,_0x56a584[_0x6254d4(0x30d)](0xff),_0x56a584[_0x6254d4(0x29f)]=0x258,_0x56a584['x']=this[_0x6254d4(0x3c8)],_0x56a584[_0x6254d4(0x327)]=this[_0x6254d4(0x3c8)],_0x41760e&&(_0x56a584[_0x6254d4(0x2dd)]=0xff);}}for(const _0x4c5915 of this[_0x6254d4(0x300)]){if(!_0x4c5915)continue;_0x4c5915['calculateTargetPositions']();}},Window_OTB_TurnOrder[_0xd87de4(0x1ca)]['removeUnableTurnOrderSprites']=function(){const _0x1cfbd2=_0xd87de4;for(const _0x4cffa3 of this[_0x1cfbd2(0x300)]){if(!_0x4cffa3)continue;const _0x25190c=_0x4cffa3['battler']();if(BattleManager['_actionBattlers'][_0x1cfbd2(0x1e4)](_0x25190c))continue;this[_0x1cfbd2(0x3a1)](_0x4cffa3);}for(const _0x25c183 of this[_0x1cfbd2(0x39a)]){if(!_0x25c183)continue;const _0x53eefa=_0x25c183[_0x1cfbd2(0x1f7)]();if(BattleManager[_0x1cfbd2(0x311)][_0x1cfbd2(0x1e4)](_0x53eefa))continue;this[_0x1cfbd2(0x3a1)](_0x25c183);}},Window_OTB_TurnOrder['prototype'][_0xd87de4(0x305)]=function(_0x4a62f5,_0x314910){const _0x179b36=_0xd87de4,_0x3b0a0c=_0x314910===BattleManager[_0x179b36(0x285)]?this[_0x179b36(0x300)]:this[_0x179b36(0x39a)];if(!_0x3b0a0c)return;const _0x5747b2=VisuMZ[_0x179b36(0x1fa)][_0x179b36(0x23d)](_0x4a62f5,_0x314910),_0x6591cd=_0x5747b2[_0x179b36(0x383)]-0x1,_0x22a9b5=new Sprite_OTB_TurnOrder_Battler(_0x4a62f5,_0x6591cd,_0x3b0a0c);this[_0x179b36(0x295)][_0x179b36(0x1fd)](_0x22a9b5),_0x3b0a0c[_0x179b36(0x3ea)](_0x22a9b5),_0x22a9b5[_0x179b36(0x30d)](0xff),this[_0x179b36(0x22a)]();},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x2bb)]=function(_0x19d935,_0x5047de){const _0x33375b=_0xd87de4,_0x4ac50c=_0x5047de===BattleManager[_0x33375b(0x285)]?this[_0x33375b(0x300)]:this[_0x33375b(0x39a)];if(!_0x4ac50c)return;for(const _0x58fd5a of _0x4ac50c){if(!_0x58fd5a)continue;_0x58fd5a[_0x33375b(0x1f7)]()===_0x19d935&&(_0x58fd5a[_0x33375b(0x302)]=_0x58fd5a['_instance']||0x0,_0x58fd5a[_0x33375b(0x302)]++);}const _0x40fb05=0x0,_0x13efc2=new Sprite_OTB_TurnOrder_Battler(_0x19d935,_0x40fb05,_0x4ac50c);this[_0x33375b(0x295)][_0x33375b(0x1fd)](_0x13efc2),_0x4ac50c[_0x33375b(0x259)](_0x13efc2),_0x13efc2[_0x33375b(0x30d)](0xff),_0x13efc2[_0x33375b(0x29f)]=0x258,_0x13efc2['x']=this[_0x33375b(0x3c8)],this['requestUpdateTurnOrders']();},Window_OTB_TurnOrder[_0xd87de4(0x1ca)]['addForceActionBattler']=function(_0x1d54d5,_0x530215){const _0xaf85cd=_0xd87de4,_0x14d319=this['_currentTurn'];if(!_0x14d319)return;let _0x250a13=0x0;for(let _0x2aefd7=0x0;_0x2aefd7<_0x530215;_0x2aefd7++){const _0x29eb1a=_0x14d319[_0x2aefd7];if(!_0x29eb1a)continue;if(_0x29eb1a[_0xaf85cd(0x1f7)]()!==_0x1d54d5)continue;_0x250a13=_0x29eb1a[_0xaf85cd(0x302)]+0x1;}for(let _0x199945=_0x530215;_0x199945<_0x14d319[_0xaf85cd(0x383)];_0x199945++){const _0x30c606=_0x14d319[_0x199945];if(!_0x30c606)continue;if(_0x30c606[_0xaf85cd(0x1f7)]()!==_0x1d54d5)continue;_0x30c606[_0xaf85cd(0x302)]=_0x30c606['_instance']||0x0,_0x30c606[_0xaf85cd(0x302)]++;}const _0x1f8f90=new Sprite_OTB_TurnOrder_Battler(_0x1d54d5,_0x250a13,_0x14d319);this[_0xaf85cd(0x295)][_0xaf85cd(0x1fd)](_0x1f8f90),_0x14d319[_0xaf85cd(0x25d)](_0x530215,0x0,_0x1f8f90),_0x1f8f90[_0xaf85cd(0x30d)](0xff),_0x1f8f90[_0xaf85cd(0x29f)]=0x258,_0x1f8f90['x']=this[_0xaf85cd(0x3c8)],this['requestUpdateTurnOrders']();},Window_OTB_TurnOrder['prototype'][_0xd87de4(0x31a)]=function(){const _0x1a2ab1=_0xd87de4;this[_0x1a2ab1(0x1fb)](BattleManager['_actionBattlers'],!![]),this[_0x1a2ab1(0x1fb)](BattleManager['_otb_actionBattlersNext'],!![]),this[_0x1a2ab1(0x1d4)](BattleManager[_0x1a2ab1(0x28a)],!![]),this[_0x1a2ab1(0x1f5)]();},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x2a4)]=function(_0x18b909){const _0x1f16cd=_0xd87de4;this[_0x1f16cd(0x21b)](),_0x18b909&&_0x18b909['item']()!==null&&this[_0x1f16cd(0x3e7)](_0x18b909);},Window_OTB_TurnOrder[_0xd87de4(0x1ca)][_0xd87de4(0x21b)]=function(){const _0x4298d7=_0xd87de4;for(const _0x5d1bc8 of this['_previewContainer'][_0x4298d7(0x3d8)]){if(!_0x5d1bc8)continue;this['removeSprite'](_0x5d1bc8);}},Window_OTB_TurnOrder['prototype'][_0xd87de4(0x3e7)]=function(_0x2b3d97){const _0x5cc27f=_0xd87de4,_0x5dfce2=_0x2b3d97[_0x5cc27f(0x23b)](),_0x49f577=_0x2b3d97[_0x5cc27f(0x204)](),_0x2b4a39=_0x2b3d97[_0x5cc27f(0x262)]();_0x49f577!==0x0&&this[_0x5cc27f(0x283)](_0x5dfce2,![],_0x49f577);_0x2b4a39!==0x0&&this[_0x5cc27f(0x283)](_0x5dfce2,!![],_0x2b4a39);if(!_0x2b3d97[_0x5cc27f(0x23f)]())return;const _0x3ea7fe=SceneManager['_scene']['_actorWindow'],_0x4e9412=SceneManager[_0x5cc27f(0x1d6)]['_enemyWindow'];let _0x1aa898=null;if(_0x3ea7fe&&_0x3ea7fe[_0x5cc27f(0x339)])_0x1aa898=_0x3ea7fe[_0x5cc27f(0x201)](_0x3ea7fe[_0x5cc27f(0x1b5)]());else _0x4e9412&&_0x4e9412[_0x5cc27f(0x339)]&&(_0x1aa898=_0x4e9412[_0x5cc27f(0x2a0)]());if(!_0x1aa898)return;const _0x1e33fc=_0x2b3d97['otbCalcTargetCurrentOrderChange'](_0x1aa898),_0x46f0ea=_0x2b3d97[_0x5cc27f(0x2a3)](_0x1aa898);_0x1e33fc!==0x0&&this['createOrderPreviewSprite'](_0x1aa898,![],_0x1e33fc),_0x46f0ea!==0x0&&this[_0x5cc27f(0x283)](_0x1aa898,!![],_0x46f0ea);},Window_OTB_TurnOrder['prototype'][_0xd87de4(0x283)]=function(_0x393d24,_0x272ac6,_0x58f16f){const _0x4a67c1=_0xd87de4;if(!_0x393d24)return;if(_0x58f16f===0x0)return;const _0x3cca25=_0x272ac6?BattleManager[_0x4a67c1(0x311)]:BattleManager[_0x4a67c1(0x285)],_0x43e9d7=VisuMZ[_0x4a67c1(0x1fa)][_0x4a67c1(0x23d)](_0x393d24,_0x3cca25),_0x522227=_0x272ac6?this[_0x4a67c1(0x39a)]:this[_0x4a67c1(0x300)],_0x35ed21=_0x272ac6?this[_0x4a67c1(0x3d1)]:this['_previewCurrent'];if(_0x43e9d7[_0x4a67c1(0x383)]<=0x0)return;for(let _0x29b6b6=0x0;_0x29b6b6<_0x43e9d7['length'];_0x29b6b6++){const _0x392ce7=new Sprite_OTB_TurnOrder_Preview(_0x393d24,_0x29b6b6,_0x522227,_0x58f16f);this[_0x4a67c1(0x1b9)]['addChild'](_0x392ce7),_0x35ed21[_0x4a67c1(0x3ea)](_0x392ce7),_0x392ce7[_0x4a67c1(0x2e8)](),_0x392ce7[_0x4a67c1(0x30d)](0xff);}};