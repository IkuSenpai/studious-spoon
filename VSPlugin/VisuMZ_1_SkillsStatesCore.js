//=============================================================================
// VisuStella MZ - Skills & States Core
// VisuMZ_1_SkillsStatesCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_SkillsStatesCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillsStatesCore = VisuMZ.SkillsStatesCore || {};
VisuMZ.SkillsStatesCore.version = 1.46;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.46] [SkillsStatesCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skills_and_States_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Skills & States Core plugin extends and builds upon the functionality of
 * RPG Maker MZ's inherent skill, state, and buff functionalities and allows
 * game devs to customize its various aspects.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assigning multiple Skill Types to Skills.
 * * Making custom Skill Cost Types (such as HP, Gold, and Items).
 * * Allowing Skill Costs to become percentile-based or dynamic either directly
 *   through the Skills themselves or through trait-like notetags.
 * * Replacing gauges for different classes to display different types of
 *   Skill Cost Type resources.
 * * Hiding/Showing and enabling/disabling skills based on switches, learned
 *   skills, and code.
 * * Setting rulings for states, including if they're cleared upon death, how
 *   reapplying the state affects their turn count, and more.
 * * Allowing states to be categorized and affected by categories, too.
 * * Displaying turn counts on states drawn in the window or on sprites.
 * * Manipulation of state, buff, and debuff turns through skill and item
 *   effect notetags.
 * * Create custom damage over time state calculations through notetags.
 * * Allow database objects to apply passive states to its user.
 * * Passive states can have conditions before they become active as well.
 * * Updated Skill Menu Scene layout to fit more modern appearances.
 * * Added bonus if Items & Equips Core is installed to utilize the Shop Status
 *   Window to display skill data inside the Skill Menu.
 * * Control over various aspects of the Skill Menu Scene.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
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
 * Action End Removal for States
 * 
 * - If your Plugin Parameter settings for "Action End Update" are enabled,
 * then "Action End" has been updated so that it actually applies per action
 * used instead of just being at the start of a battler's action set.
 * 
 * - However, there are side effects to this: if a state has the "Cannot Move"
 * restriction along with the "Action End" removal timing, then unsurprisingly,
 * the state will never wear off because it's now based on actual actions
 * ending. To offset this and remove confusion, "Action End" auto-removal
 * timings for states with "Cannot Move" restrictions will be turned into
 * "Turn End" auto-removal timings while the "Action End Update" is enabled.
 * 
 * - This automatic change won't make it behave like an "Action End" removal
 * timing would, but it's better than completely softlocking a battler.
 * 
 * ---
 *
 * Buff & Debuff Level Management
 *
 * - In RPG Maker MZ, buffs and debuffs when applied to one another will shift
 * the buff modifier level up or down. This plugin will add an extra change to
 * the mechanic by making it so that once the buff modifier level reaches a
 * neutral point, the buff or debuff is removed altogether and resets the buff
 * and debuff turn counter for better accuracy.
 *
 * ---
 *
 * Skill Costs
 *
 * - In RPG Maker MZ, skill costs used to be hard-coded. Now, all Skill Cost
 * Types are now moved to the Plugin Parameters, including MP and TP. This
 * means that from payment to checking for them, it's all done through the
 * options available.
 *
 * - By default in RPG Maker MZ, displayed skill costs would only display only
 * one type: TP if available, then MP. If a skill costs both TP and MP, then
 * only TP was displayed. This plugin changes that aspect by displaying all the
 * cost types available in order of the Plugin Parameter Skill Cost Types.
 *
 * - By default in RPG Maker MZ, displayed skill costs were only color-coded.
 * This plugin changes that aspect by displaying the Skill Cost Type's name
 * alongside the cost. This is to help color-blind players distinguish what
 * costs a skill has.
 *
 * ---
 *
 * Sprite Gauges
 *
 * - Sprite Gauges in RPG Maker MZ by default are hard-coded and only work for
 * HP, MP, TP, and Time (used for ATB). This plugin makes it possible for them
 * to be customized through the use of Plugin Parameters under the Skill Cost
 * Types and their related-JavaScript entries.
 *
 * ---
 * 
 * State Displays
 * 
 * - To put values onto states and display them separately from the state turns
 * you can use the following script calls.
 * 
 *   battler.getStateDisplay(stateId)
 *   - This returns whatever value is stored for the specified battler under
 *     that specific state value.
 *   - If there is no value to be returned it will return an empty string.
 * 
 *   battler.setStateDisplay(stateId, value)
 *   - This sets the display for the battler's specific state to whatever you
 *     declared as the value.
 *   - The value is best used as a number or a string.
 * 
 *   battler.clearStateDisplay(stateId)
 *   - This clears the display for the battler's specific state.
 *   - In short, this sets the stored display value to an empty string.
 * 
 * ---
 *
 * Window Functions Moved
 *
 * - Some functions found in RPG Maker MZ's default code for Window_StatusBase
 * and Window_SkillList are now moved to Window_Base to make the functions
 * available throughout all windows for usage.
 *
 * ---
 *
 * ============================================================================
 * Slip Damage Popup Clarification
 * ============================================================================
 * 
 * Slip Damage popups only show one popup for HP, MP, and TP each and it is the
 * grand total of all the states and effects combined regardless of the number
 * of states and effects on a battler. This is how it is in vanilla RPG Maker
 * MZ and this is how we intend for it to be with the VisuStella MZ library.
 * 
 * This is NOT a bug!
 * 
 * The reason we are not changing this is because it does not properly relay
 * information to the player accurately. When multiple popups appear, players
 * only have roughly a second and a half to calculate it all for any form of
 * information takeaway. We feel it is better suited for the player's overall
 * convenience to show a cummulative change and steer the experience towards a
 * more positive one.
 *
 * ============================================================================
 * Passive State Clarification
 * ============================================================================
 * 
 * This section will explain various misconceptions regarding passive states.
 * No, passive states do not work the same way as states code-wise. Yes, they
 * use the same effects as states mechanically, but there are differences.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
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
 * === General Skill Notetags ===
 *
 * The following are general notetags that are skill-related.
 *
 * ---
 *
 * <Skill Type: x>
 * <Skill Types: x,x,x>
 *
 * <Skill Type: name>
 * <Skill Types: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Marks the skill to have multiple Skill Types, meaning they would appear
 *   under different skill types without needing to create duplicate skills.
 * - Replace 'x' with a number value representing the Skill Type's ID.
 * - If using 'name' notetag variant, replace 'name' with the Skill Type(s)
 *   name desired to be added.
 *
 * ---
 * 
 * <List Name: name>
 * 
 * - Used for: Skill Notetags
 * - Makes the name of the skill appear different when show in the skill list.
 * - Using \V[x] as a part of the name will display that variable.
 * 
 * ---
 * 
 * <ID Sort Priority: x>
 * 
 * - Used for: Skill Notetags
 * - Used for Scene_Skill.
 * - Changes sorting priority by ID for skills to 'x'. 
 *   - Default priority level is '50'.
 * - Skills with higher priority values will be sorted higher up on the list
 *   while lower values will be lower on the list.
 * 
 * ---
 *
 * === Skill Cost Notetags ===
 *
 * The following are notetags that can be used to adjust skill costs. Some of
 * these notetags are added through the Plugin Parameter: Skill Cost Types and
 * can be altered there. This also means that some of these notetags can have
 * their functionality altered and/or removed.
 *
 * ---
 *
 * <type Cost: x>
 * <type Cost: x%>
 *
 * - Used for: Skill Notetags
 * - These notetags are used to designate costs of custom or already existing
 *   types that cannot be made by the Database Editor.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'x' with a number value to determine the exact type cost value.
 *   This lets you bypass the Database Editor's limit of 9,999 MP and 100 TP.
 * - The 'x%' version is replaced with a percentile value to determine a cost
 *   equal to a % of the type's maximum quantity limit.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost: 500>
 *   <MP Cost: 25%>
 *   <Gold Cost: 3000>
 *   <Potion Cost: 5>
 *
 * ---
 *
 * <type Cost Max: x>
 * <type Cost Min: x>
 *
 * - Used for: Skill Notetags
 * - These notetags are used to ensure conditional and % costs don't become too
 *   large or too small.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'x' with a number value to determine the maximum or minimum values
 *   that the cost can be.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost Max: 1500>
 *   <MP Cost Min: 5>
 *   <Gold Cost Max: 10000>
 *   <Potion Cost Min: 3>
 *
 * ---
 *
 * <type Cost: +x>
 * <type Cost: -x>
 *
 * <type Cost: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The related actor will raise/lower the cost of any skill that uses the
 *   'type' cost by a specified amount.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - For % notetag variant: Replace 'x' with a number value to determine the
 *   rate to adjust the Skill Cost Type by as a rate value. This is applied
 *   before <type Cost: +x> and <type Cost: -x> notetags.
 * - For + and - notetag variants: Replace 'x' with a number value to determine
 *   how much to adjust the Skill Cost Type by as a flat value. This is applied
 *   after <type Cost: x%> notetags.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost: +20>
 *   <MP Cost: -10>
 *   <Gold Cost: 50%>
 *   <Potion Cost: 200%>
 *
 * ---
 *
 * <Custom Cost Text>
 *  text
 * </Custom Cost Text>
 *
 * - Used for: Skill Notetags
 * - Allows you to insert custom text into the skill's cost area towards the
 *   end of the costs.
 * - Replace 'text' with the text you wish to display.
 * - Text codes may be used.
 *
 * ---
 *
 * === JavaScript Notetags: Skill Costs ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine any dynamic Skill Cost Types used for particular skills.
 *
 * ---
 *
 * <JS type Cost>
 *  code
 *  code
 *  cost = code;
 * </JS type Cost>
 *
 * - Used for: Skill Notetags
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'code' to determine the type 'cost' of the skill.
 * - Insert the final type cost into the 'cost' variable.
 * - The 'user' variable refers to the user about to perform the skill.
 * - The 'skill' variable refers to the skill being used.
 * - Functionality for the notetag can be altered in the Plugin Parameters.
 *
 * ---
 *
 * === Gauge Replacement Notetags ===
 *
 * Certain classes can have their gauges swapped out for other Skill Cost
 * Types. This is especially helpful for the classes that don't utilize those
 * Skill Cost Types. You can mix and match them however you want.
 *
 * ---
 *
 * <Replace HP Gauge: type>
 * <Replace MP Gauge: type>
 * <Replace TP Gauge: type>
 *
 * - Used for: Class Notetags
 * - Replaces the HP (1st), MP (2nd), or TP (3rd) gauge with a different Skill
 *   Cost Type.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 *   - Does not work with 'Item Cost', 'Weapon Cost', or 'Armor Cost'.
 * - Replace 'type' with 'none' to not display any gauges there.
 * - The <Replace TP Gauge: type> will require 'Display TP in Window' setting
 *   to be on in the Database > System 1 tab.
 * - Functionality for the notetags can be altered by changes made to the
 *   Skill & States Core Plugin Parameters.
 *
 * ---
 * 
 * === Item Cost-Related Notetags ===
 * 
 * ---
 * 
 * <Item Cost: x name>
 * <Weapon Cost: x name>
 * <Armor Cost: x name>
 * 
 * - Used for: Skill Notetags
 * - The skill will consume items, weapons, and/or armors in order to be used.
 *   - Even non-consumable items will be consumed.
 * - Replace 'x' with a number representing the respective item cost.
 * - Replace 'name' with text representing the respective item, weapon, or
 *   armor to be consumed.
 * - Insert multiples of this notetag to consume multiple items, weapons,
 *   and/or armors.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 * 
 * Examples:
 * 
 *   <Item Cost: 5 Magic Water>
 *   <Item Cost: 2 Antidote>
 *   <Weapon Cost: 1 Short Sword>
 *   <Armor Cost: 3 Cloth Armor>
 * 
 * ---
 *
 * <Item Cost Max: x name>
 * <Item Cost Min: x name>
 *
 * <Weapon Cost Max: x name>
 * <Weapon Cost Min: x name>
 *
 * <Armor Cost Max: x name>
 * <Armor Cost Min: x name>
 * 
 * - Used for: Skill Notetags
 * - Sets up a maximum/minimum cost for the item, weapon, armor type costs.
 * - Replace 'x' with a number representing the maximum or minimum cost.
 * - Replace 'name' with text representing the respective item, weapon, or
 *   armor to be consumed.
 * 
 * Examples:
 * 
 *   <Item Cost Max: 10 Magic Water>
 *   <Item Cost Min: 2 Antidote>
 *   <Weapon Cost Max: 3 Short Sword>
 *   <Armor Cost Min: 1 Cloth Armor>
 * 
 * ---
 *
 * <Item Cost: +x name>
 * <Item Cost: -x name>
 *
 * <Weapon Cost: +x name>
 * <Weapon Cost: -x name>
 *
 * <Armor Cost: +x name>
 * <Armor Cost: -x name>
 * 
 * <Item Cost: x% name>
 * <Weapon Cost: x% name>
 * <Armor Cost: x% name>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The related actor will raise/lower the item, weapon, and/or armor costs of
 *   any skill that costs those items, weapons, and/or armors by x%.
 * - For % notetag variant: Replace 'x' with a number value to determine the
 *   rate to adjust the Skill Cost Type by as a rate value. This is applied
 *   before <type Cost: +x> and <type Cost: -x> notetags.
 * - For + and - notetag variants: Replace 'x' with a number value to determine
 *   how much to adjust the Skill Cost Type by as a flat value. This is applied
 *   after <type Cost: x%> notetags.
 * - Replace 'name' with text representing the respective item, weapon, or
 *   armor to be consumed.
 * - Insert multiples of this notetag to consume multiple items, weapons,
 *   and/or armors.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 * 
 * Examples:
 * 
 *   <Item Cost: +1 Magic Water>
 *   <Item Cost: -2 Antidote>
 *   <Weapon Cost: 50% Short Sword>
 *   <Armor Cost: 200% Cloth Armor>
 * 
 * ---
 * 
 * <Replace Item name1 Cost: name2>
 * <Replace Weapon name1 Cost: name2>
 * <Replace Armor name1 Cost: name2>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The related actor will not consume 'name1' items, weapons, or armors.
 *   Instead, the cost will be redirected to 'name2' items, weapons, or armors.
 *   - Even non-consumable items will be consumed.
 * - Replace 'name1' with text representing the respective item, weapon, or
 *   armor that is the original cost type.
 * - Replace 'name2' with text representing the respective item, weapon, or
 *   armor that will be consumed instead.
 * 
 * Examples:
 * 
 *   <Replace Item Magic Water Cost: Potion>
 *   <Replace Item Antidote Cost: Dispel Herb>
 *   <Replace Weapon Short Sword Cost: Falchion>
 *   <Replace Armor Cloth Armor Cost: Leather Armor>
 * 
 * ---
 *
 * === Skill Accessibility Notetags ===
 *
 * Sometimes, you don't want all skills to be visible whether it be to hide
 * menu-only skills during battle, until certain switches are turned ON/OFF, or
 * until certain skills have been learned.
 *
 * ---
 *
 * <Hide in Battle>
 * <Hide outside Battle>
 *
 * - Used for: Skill Notetags
 * - Makes the specific skill visible or hidden depending on whether or not the
 *   player is currently in battle.
 *
 * ---
 *
 * <Show Switch: x>
 *
 * <Show All Switches: x,x,x>
 * <Show Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 * - If 'All' notetag variant is used, skill will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Switch: x>
 *
 * <Hide All Switches: x,x,x>
 * <Hide Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 * - If 'All' notetag variant is used, skill will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Show if learned Skill: x>
 *
 * <Show if learned All Skills: x,x,x>
 * <Show if learned Any Skills: x,x,x>
 *
 * <Show if learned Skill: name>
 *
 * <Show if learned All Skills: name, name, name>
 * <Show if learned Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills learned.
 * - This does not apply to skills added by traits on actors, classes, any
 *   equipment, or states. These are not considered learned skills. They are
 *   considered temporary skills.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be hidden until all skills
 *   are learned. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the skills
 *   are learned. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide if learned Skill: x>
 *
 * <Hide if learned All Skills: x,x,x>
 * <Hide if learned Any Skills: x,x,x>
 *
 * <Hide if learned Skill: name>
 *
 * <Hide if learned All Skills: name, name, name>
 * <Hide if learned Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills learned.
 * - This does not apply to skills added by traits on actors, classes, any
 *   equipment, or states. These are not considered learned skills. They are
 *   considered temporary skills.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be shown until all skills
 *   are learned. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   skills are learned. Otherwise, it would be shown.
 *
 * ---
 *
 * <Show if has Skill: x>
 *
 * <Show if have All Skills: x,x,x>
 * <Show if have Any Skills: x,x,x>
 *
 * <Show if has Skill: name>
 *
 * <Show if have All Skills: name, name, name>
 * <Show if have Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills available.
 * - This applies to both skills that have been learned and/or temporarily
 *   added through traits on actors, classes, equipment, or states.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be hidden until all skills
 *   are learned. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the skills
 *   are learned. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide if has Skill: x>
 *
 * <Hide if have All Skills: x,x,x>
 * <Hide if have Any Skills: x,x,x>
 *
 * <Hide if has Skill: name>
 *
 * <Hide if have All Skills: name, name, name>
 * <Hide if have Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills available.
 * - This applies to both skills that have been learned and/or temporarily
 *   added through traits on actors, classes, equipment, or states.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be shown until all skills
 *   are learned. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   skills are learned. Otherwise, it would be shown.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 * - If 'All' notetag variant is used, skill will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, skill will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 * - If 'All' notetag variant is used, skill will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, skill will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Skill Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if a skill can be accessible visibly or through usage.
 *
 * ---
 *
 * <JS Skill Visible>
 *  code
 *  code
 *  visible = code;
 * </JS Skill Visible>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on JavaScript code.
 * - Replace 'code' to determine the type visibility of the skill.
 * - The 'visible' variable returns a boolean (true/false) to determine if the
 *   skill will be visible or not.
 * - The 'user' variable refers to the user with the skill.
 * - The 'skill' variable refers to the skill being checked.
 * - All other visibility conditions must be met for this code to count.
 *
 * ---
 *
 * <JS Skill Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Skill Enable>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on JavaScript code.
 * - Replace 'code' to determine the type enabled status of the skill.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   skill will be enabled or not.
 * - The 'user' variable refers to the user with the skill.
 * - The 'skill' variable refers to the skill being checked.
 * - All other skill conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === General State-Related Notetags ===
 *
 * The following notetags are centered around states, such as how their turn
 * counts are displayed, items and skills that affect state turns, if the state
 * can avoid removal by death state, etc.
 *
 * ---
 *
 * <No Death Clear>
 *
 * - Used for: State Notetags
 * - Prevents this state from being cleared upon death.
 * - This allows this state to be added to an already dead battler, too.
 *
 * ---
 *
 * <No Recover All Clear>
 *
 * - Used for: State Notetags
 * - Prevents this state from being cleared upon using the Recover All command.
 *
 * ---
 *
 * <Group Defeat>
 *
 * - Used for: State Notetags
 * - If an entire party is affected by states with the <Group Defeat> notetag,
 *   they are considered defeated.
 * - Usage for this includes party-wide petrification, frozen, etc.
 *
 * ---
 *
 * <Reapply Rules: Ignore>
 * <Reapply Rules: Reset>
 * <Reapply Rules: Greater>
 * <Reapply Rules: Add>
 *
 * - Used for: State Notetags
 * - Choose what kind of rules this state follows if the state is being applied
 *   to a target that already has the state. This affects turns specifically.
 * - 'Ignore' will bypass any turn changes.
 * - 'Reset' will recalculate the state's turns.
 * - 'Greater' will choose to either keep the current turn count if it's higher
 *   than the reset amount or reset it if the current turn count is lower.
 * - 'Add' will add the state's turn count to the applied amount.
 * - If this notetag isn't used, it will use the rules set in the States >
 *   Plugin Parameters.
 *
 * ---
 *
 * <Positive State>
 * <Negative State>
 *
 * - Used for: State Notetags
 * - Marks the state as a positive state or negative state, also altering the
 *   state's turn count color to match the Plugin Parameter settings.
 * - This also puts the state into either the 'Positive' category or
 *   'Negative' category.
 *
 * ---
 *
 * <Category: name>
 * <Category: name, name, name>
 *
 * - Used for: State Notetags
 * - Arranges states into certain/multiple categories.
 * - Replace 'name' with a category name to mark this state as.
 * - Insert multiples of this to mark the state with  multiple categories.
 *
 * ---
 *
 * <Categories>
 *  name
 *  name
 * </Categories>
 *
 * - Used for: State Notetags
 * - Arranges states into certain/multiple categories.
 * - Replace each 'name' with a category name to mark this state as.
 *
 * ---
 * 
 * <Resist State Category: name>
 * <Resist State Categories: name, name, name>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected battler resist the listed categories.
 * - Replace each 'name' with a category name to resist.
 *   - Insert multiple 'name' entries to add more categories.
 * - This works exactly like how state resistances work in-game. If a battler
 *   who was originally NOT resistant to "Poison" before gaining a
 *   poison-resistant trait, the "Poison" state will remain because it was
 *   applied before poison-resistance as enabled.
 * 
 * ---
 * 
 * <Resist State Categories>
 *  name
 *  name
 *  name
 * </Resist State Categories>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected battler resist the listed categories.
 * - Replace each 'name' with a category name to resist.
 *   - Insert multiple 'name' entries to add more categories.
 * - This works exactly like how state resistances work in-game. If a battler
 *   who was originally NOT resistant to "Poison" before gaining a
 *   poison-resistant trait, the "Poison" state will remain because it was
 *   applied before poison-resistance as enabled.
 * 
 * ---
 *
 * <State x Category Remove: y>
 * 
 * <State x Category Remove: All>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to remove 'y' states from specific category 'x'.
 * - Replace 'x' with a category name to remove from.
 * - Replace 'y' with the number of times to remove from that category.
 * - Use the 'All' variant to remove all of the states of that category.
 * - Insert multiples of this to remove different types of categories.
 *
 * ---
 * 
 * <Remove Other x States>
 * 
 * - Used for: State Notetags
 * - When the state with this notetag is added, remove other 'x' category
 *   states from the battler (except for the state being added).
 * - Replace 'x' with a category name to remove from.
 * - Insert multiples of this to remove different types of categories.
 * - Useful for thing state types like stances and forms that there is usually
 *   only one active at a time.
 * 
 * ---
 *
 * <Hide State Turns>
 *
 * - Used for: State Notetags
 * - Hides the state turns from being shown at all.
 * - This will by pass any Plugin Parameter settings.
 *
 * ---
 *
 * <Turn Color: x>
 * <Turn Color: #rrggbb>
 *
 * - Used for: State Notetags
 * - Hides the state turns from being shown at all.
 * - Determines the color of the state's turn count.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 * 
 * <Max Turns: x>
 * 
 * - Used for: State Notetags
 * - Determines the upper limit on the maximum number of turns for this state.
 * - Replace 'x' with a number representing the maximum number of turns used
 *   for this state.
 * - If no notetag is used, refer to the default setting found in the Plugin
 *   Parameters under "State Settings".
 * 
 * ---
 *
 * <State id Turns: +x>
 * <State id Turns: -x>
 *
 * <Set State id Turns: x>
 *
 * <State name Turns: +x>
 * <State name Turns: -x>
 *
 * <Set State name Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by state 'id' or state 'name', change the state
 *   turn duration for target.
 * - For 'id' variant, replace 'id' with the ID of the state to modify.
 * - For 'name' variant, replace 'name' with the name of the state to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple states at once.
 *
 * ---
 *
 * <param Buff Turns: +x>
 * <param Buff Turns: -x>
 *
 * <Set param Buff Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by a 'param' buff, change that buff's turn
 *   duration for target.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter buff to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple parameters at once.
 *
 * ---
 *
 * <param Debuff Turns: +x>
 * <param Debuff Turns: -x>
 *
 * <Set param Debuff Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by a 'param' debuff, change that debuff's turn
 *   duration for target.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter debuff to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple parameters at once.
 *
 * ---
 *
 * === JavaScript Notetags: On Add/Erase/Expire ===
 *
 * Using JavaScript code, you can use create custom effects that occur when a
 * state has bee added, erased, or expired.
 * 
 * ---
 *
 * <JS On Add State>
 *  code
 *  code
 * </JS On Add State>
 *
 * - Used for: State Notetags
 * - When a state is added, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * <JS On Erase State>
 *  code
 *  code
 * </JS On Erase State>
 *
 * - Used for: State Notetags
 * - When a state is erased, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * <JS On Expire State>
 *  code
 *  code
 * </JS On Expire State>
 *
 * - Used for: State Notetags
 * - When a state has expired, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * === JavaScript Notetags: Slip Damage/Healing ===
 *
 * Slip Damage, in RPG Maker vocabulary, refers to damage over time. The
 * following notetags allow you to perform custom slip damage/healing.
 *
 * ---
 *
 * <JS type Slip Damage>
 *  code
 *  code
 *  damage = code;
 * </JS type Slip Damage>
 *
 * - Used for: State Notetags
 * - Code used to determine how much slip damage is dealt to the affected unit
 *   during each regeneration phase.
 * - Replace 'type' with 'HP', 'MP', or 'TP'.
 * - Replace 'code' with the calculations on what to determine slip damage.
 * - The 'user' variable refers to the origin of the state.
 * - The 'target' variable refers to the affected unit receiving the damage.
 * - The 'state' variable refers to the current state being affected.
 * - The 'damage' variable is the finalized slip damage to be dealt.
 * - When these states are applied via action effects, the slip calculations
 *   are one time calculations made upon applying and the damage is cached to
 *   be used for future on regeneration calculations.
 * - For that reason, do not include game mechanics here such as adding states,
 *   buffs, debuffs, etc. as this notetag is meant for calculations only. Use
 *   the VisuStella Battle Core's <JS Pre-Regenerate> and <JS Post-Regenerate>
 *   notetags for game mechanics instead.
 * - Passive states and states with the <JS Slip Refresh> notetag are exempt
 *   from the one time calculation and recalculated each regeneration phase.
 *
 * ---
 *
 * <JS type Slip Heal>
 *  code
 *  code
 *  heal = code;
 * </JS type Slip Heal>
 *
 * - Used for: State Notetags
 * - Code used to determine how much slip healing is dealt to the affected unit
 *   during each regeneration phase.
 * - Replace 'type' with 'HP', 'MP', or 'TP'.
 * - Replace 'code' with the calculations on what to determine slip healing.
 * - The 'user' variable refers to the origin of the state.
 * - The 'target' variable refers to the affected unit receiving the healing.
 * - The 'state' variable refers to the current state being affected.
 * - The 'heal' variable is the finalized slip healing to be recovered.
 * - When these states are applied via action effects, the slip calculations
 *   are one time calculations made upon applying and the damage is cached to
 *   be used for future on regeneration calculations.
 * - For that reason, do not include game mechanics here such as adding states,
 *   buffs, debuffs, etc. as this notetag is meant for calculations only. Use
 *   the VisuStella Battle Core's <JS Pre-Regenerate> and <JS Post-Regenerate>
 *   notetags for game mechanics instead.
 * - Passive states and states with the <JS Slip Refresh> notetag are exempt
 *   from the one time calculation and recalculated each regeneration phase.
 *
 * ---
 * 
 * <JS Slip Refresh>
 * 
 * - Used for: State Notetags
 * - Refreshes the calculations made for the JS Slip Damage/Heal amounts at the
 *   start of each regeneration phase to allow for dynamic damage ranges.
 * 
 * ---
 *
 * === Passive State Notetags ===
 *
 * Passive States are states that are always applied to actors and enemies
 * provided that their conditions have been met. These can be granted through
 * database objects or through the Passive States Plugin Parameters.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * <Passive State: x>
 * <Passive States: x,x,x>
 *
 * <Passive State: name>
 * <Passive States: name, name, name>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy Notetags
 * - Adds passive state(s) x to trait object, applying it to related actor or
 *   enemy unit(s).
 * - Replace 'x' with a number to determine which state to add as a passive.
 * - If using 'name' notetag variant, replace 'name' with the name of the
 *   state(s) to add as a passive.
 * - Note: If you plan on applying a passive state through a skill, it must be
 *   through a skill that has been learned by the target and not a skill that
 *   is given through a trait.
 *
 * ---
 *
 * <Passive Stackable>
 *
 * - Used for: State Notetags
 * - Makes it possible for this passive state to be added multiple times.
 * - Otherwise, only one instance of the passive state can be available.
 *
 * ---
 *
 * <Passive Condition Class: id>
 * <Passive Condition Classes: id, id, id>
 *
 * <Passive Condition Class: name>
 * <Passive Condition Classes: name, name, name>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on the actor's
 *   current class. As long as the actor's current class matches one of the
 *   data entries, the passive condition is considered passed.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 *
 * <Passive Condition Multiclass: id>
 * <Passive Condition Multiclass: id, id, id>
 *
 * <Passive Condition Multiclass: name>
 * <Passive Condition Multiclass: name, name, name>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_ClassChangeSystem!
 * - Determines the passive condition of the passive state based on the actor's
 *   multiclasses. As long as the actor has any of the matching classes
 *   assigned as a multiclass, the passive condition is considered passed.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 *
 * <Passive Condition Switch ON: x>
 *
 * <Passive Condition All Switches ON: x,x,x>
 * <Passive Condition Any Switch ON: x,x,x>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on switches.
 * - Replace 'x' with the switch ID to determine the state's passive condition.
 * - If 'All' notetag variant is used, conditions will not be met until all
 *   switches are ON. Then, it would be met.
 * - If 'Any' notetag variant is used, conditions will be met if any of the
 *   switches are ON. Otherwise, it would not be met.
 *
 * ---
 *
 * <Passive Condition Switch OFF: x>
 *
 * <Passive Condition All Switches OFF: x,x,x>
 * <Passive Condition Any Switch OFF: x,x,x>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on switches.
 * - Replace 'x' with the switch ID to determine the state's passive condition.
 * - If 'All' notetag variant is used, conditions will not be met until all
 *   switches are OFF. Then, it would be met.
 * - If 'Any' notetag variant is used, conditions will be met if any of the
 *   switches are OFF. Otherwise, it would not be met.
 *
 * ---
 *
 * === JavaScript Notetags: Passive State ===
 *
 * The following is a notetag made for users with JavaScript knowledge to
 * determine if a passive state's condition can be met.
 *
 * ---
 *
 * <JS Passive Condition>
 *  code
 *  code
 *  condition = code;
 * </JS Passive Condition>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the state based on JavaScript code.
 * - Replace 'code' to determine if a passive state's condition has been met.
 * - The 'condition' variable returns a boolean (true/false) to determine if
 *   the passive state's condition is met or not.
 * - The 'user' variable refers to the user affected by the passive state.
 * - The 'state' variable refers to the passive state being checked.
 * - All other passive conditions must be met for this code to count.
 * 
 * **NOTE** Not everything can be used as a custom JS Passive Condition due to
 * limitations of the code. There are failsafe checks to prevent infinite loops
 * and some passive conditions will not register for this reason and the
 * conditional checks will behave as if the passive states have NOT been
 * applied for this reason. Such examples include the following:
 * 
 * - A passive state that requires another passive state
 * - A passive state that requires a trait effect from another state
 * - A passive state that requires a parameter value altered by another state
 * - A passive state that requires equipment to be worn but its equipment type
 *   access is provided by another state.
 * - Anything else that is similar in style.
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
 * === Skill Cost Plugin Commands ===
 * 
 * ---
 * 
 * Skill Cost: Emulate Actor Pay
 * - Target actor(s) emulates paying for skill cost.
 * - 
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) will pay skill cost.
 * 
 *   Skill ID:
 *   - What is the ID of the skill to emulate paying the skill cost for?
 * 
 * ---
 * 
 * Skill Cost: Emulate Enemy Pay
 * - Target enemy(s) emulates paying for skill cost.
 * - 
 * 
 *   Enemy Index(es):
 *   - Select which enemy index(es) will pay skill cost.
 * 
 *   Skill ID:
 *   - What is the ID of the skill to emulate paying the skill cost for?
 * 
 * ---
 * 
 * === State Turns Plugin Commands ===
 * 
 * ---
 * 
 * State Turns: Actor State Turns Change By
 * - Changes actor(s) state turns by an amount.
 * - Only works on states that can have turns.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   State ID:
 *   - What is the ID of the state you wish to change turns for?
 *   - Only works on states that can have turns.
 * 
 *   Change Turns By:
 *   - How many turns should the state be changed to?
 *   - You may use JavaScript code.
 * 
 *   Auto-Add State?:
 *   - Automatically adds state if actor(s) does not have it applied?
 * 
 * ---
 * 
 * State Turns: Actor State Turns Change To
 * - Changes actor(s) state turns to a specific value.
 * - Only works on states that can have turns.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   State ID:
 *   - What is the ID of the state you wish to change turns for?
 *   - Only works on states that can have turns.
 * 
 *   Change Turns To:
 *   - How many turns should the state be changed to?
 *   - You may use JavaScript code.
 * 
 *   Auto-Add State?:
 *   - Automatically adds state if actor(s) does not have it applied?
 * 
 * ---
 * 
 * State Turns: Enemy State Turns Change By
 * - Changes enemy(s) state turns by an amount.
 * - Only works on states that can have turns.
 * 
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 * 
 *   State ID:
 *   - What is the ID of the state you wish to change turns for?
 *   - Only works on states that can have turns.
 * 
 *   Change Turns By:
 *   - How many turns should the state be changed to?
 *   - You may use JavaScript code.
 * 
 *   Auto-Add State?:
 *   - Automatically adds state if actor(s) does not have it applied?
 * 
 * ---
 * 
 * State Turns: Enemy State Turns Change To
 * - Changes enemy(s) state turns to a specific value.
 * - Only works on states that can have turns.
 * 
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 * 
 *   State ID:
 *   - What is the ID of the state you wish to change turns for?
 *   - Only works on states that can have turns.
 * 
 *   Change Turns To:
 *   - How many turns should the state be changed to?
 *   - You may use JavaScript code.
 * 
 *   Auto-Add State?:
 *   - Automatically adds state if actor(s) does not have it applied?
 * 
 * ---
 * 
 *
 * ============================================================================
 * Plugin Parameters: General Skill Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust various aspects of the game regarding skills
 * from the custom Skill Menu Layout to global custom effects made in code.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Skill Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * Skill Type Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Skill Type Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Skill Type Window.
 * 
 *   Window Width:
 *   - What is the desired pixel width of this window?
 *   - Default: 240
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Skill Menu?:
 *   - Show the Shop Status Window in the Skill Menu?
 *   - This is enabled if the Updated Layout is on.
 * 
 *   Adjust List Window?:
 *   - Automatically adjust the Skill List Window in the Skill Menu if using
 *     the Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Shop Status Window in the
 *     Skill Menu.
 *
 * ---
 *
 * Skill Types
 * 
 *   Hidden Skill Types:
 *   - Insert the ID's of the Skill Types you want hidden from view ingame.
 * 
 *   Hidden During Battle:
 *   - Insert the ID's of the Skill Types you want hidden during battle only.
 * 
 *   Icon: Normal Type:
 *   - Icon used for normal skill types that aren't assigned any icons.
 *   - To assign icons to skill types, simply insert \I[x] into the
 *     skill type's name in the Database > Types tab.
 * 
 *   Icon: Magic Type:
 *   - Icon used for magic skill types that aren't assigned any icons.
 *   - To assign icons to skill types, simply insert \I[x] into the
 *     skill type's name in the Database > Types tab.
 * 
 *   Sort: Alphabetical:
 *   - Insert the ID's of Skill Types you want sorted alphabetically.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Skill Conditions:
 *   - JavaScript code for a global-wide skill condition check.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Skill Cost Types
 * ============================================================================
 *
 * Skill Cost Types are the resources that are used for your skills. These can
 * range from the default MP and TP resources to the newly added HP, Gold, and
 * Potion resources.
 *
 * ---
 *
 * Settings
 * 
 *   Name:
 *   - A name for this Skill Cost Type.
 * 
 *   Icon:
 *   - Icon used for this Skill Cost Type.
 *   - Use 0 for no icon.
 * 
 *   Font Color:
 *   - Text Color used to display this cost.
 *   - For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * 
 *   Font Size:
 *   - Font size used to display this cost.
 *
 * ---
 *
 * Cost Processing
 * 
 *   JS: Cost Calculation:
 *   - Code on how to calculate this resource cost for the skill.
 * 
 *   JS: Can Pay Cost?:
 *   - Code on calculating whether or not the user is able to pay the cost.
 * 
 *   JS: Paying Cost:
 *   - Code for if met, this is the actual process of paying of the cost.
 *
 * ---
 *
 * Window Display
 * 
 *   JS: Show Cost?:
 *   - Code for determining if the cost is shown or not.
 * 
 *   JS: Cost Text:
 *   - Code to determine the text (with Text Code support) used for the
 *     displayed cost.
 *
 * ---
 *
 * Gauge Display
 * 
 *   JS: Maximum Value:
 *   - Code to determine the maximum value used for this Skill Cost resource
 *     for gauges.
 * 
 *   JS: Current Value:
 *   - Code to determine the current value used for this Skill Cost resource
 *     for gauges.
 * 
 *   JS: Draw Gauge:
 *   - Code to determine how to draw the Skill Cost resource for this 
 *     gauge type.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gauge Settings
 * ============================================================================
 *
 * Settings in regards to how skill cost gauges function and appear.
 *
 * ---
 *
 * Labels
 * 
 *   Font Type:
 *   - Which font type should be used for labels?
 * 
 *   Match Label Color:
 *   - Match the label color to the Gauge Color being used?
 * 
 *     Match: Gauge # ?:
 *     - Which Gauge Color should be matched?
 * 
 *     Preset: Gauge Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   Solid Outline:
 *   - Make the label outline a solid black color?
 * 
 *   Outline Width:
 *   - What width do you wish to use for your outline?
 *   - Use 0 to not use an outline.
 *
 * ---
 *
 * Values
 * 
 *   Font Type:
 *   - Which font type should be used for values?
 * 
 *   Solid Outline:
 *   - Make the value outline a solid black color?
 * 
 *   Outline Width:
 *   - What width do you wish to use for your outline?
 *   - Use 0 to not use an outline.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General State Settings
 * ============================================================================
 *
 * These are general settings regarding RPG Maker MZ's state-related aspects
 * from how turns are reapplied to custom code that's ran whenever states are
 * added, erased, or expired.
 *
 * ---
 *
 * General
 * 
 *   Reapply Rules:
 *   - These are the rules when reapplying states.
 *   - Ignore: State doesn't get added.
 *   - Reset: Turns get reset.
 *   - Greater: Turns take greater value (current vs reset).
 *   - Add: Turns add upon existing turns.
 * 
 *   Maximum Turns:
 *   - Maximum number of turns to let states go up to.
 *   - This can be changed with the <Max Turns: x> notetag.
 * 
 *   Action End Update:
 *   - States with "Action End" auto-removal will also update turns at the end
 *     of each action instead of all actions.
 * 
 *   Turn End on Map:
 *   - Update any state and buff turns on the map after this many steps.
 *   - Use 0 to disable.
 *
 * ---
 *
 * Turn Display
 * 
 *   Show Turns?:
 *   - Display state turns on top of window icons and sprites?
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Offset X:
 *   - Offset the X position of the turn display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the turn display.
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Turn Color: Neutral:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Positive:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Negative:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Data Display
 * 
 *   Show Data?:
 *   - Display state data on top of window icons and sprites?
 * 
 *   Data Font Size:
 *   - Font size used for displaying state data.
 * 
 *   Offset X:
 *   - Offset the X position of the state data display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the state data display.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: On Add State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     is added.
 * 
 *   JS: On Erase State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     is erased.
 * 
 *   JS: On Expire State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     has expired.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Buff/Debuff Settings
 * ============================================================================
 *
 * Buffs and debuffs don't count as states by RPG Maker MZ's mechanics, but
 * they do function close enough for them to be added to this plugin for
 * adjusting. Change these settings to make buffs and debuffs work to your
 * game's needs.
 *
 * ---
 *
 * General
 * 
 *   Reapply Rules:
 *   - These are the rules when reapplying buffs/debuffs.
 *   - Ignore: Buff/Debuff doesn't get added.
 *   - Reset: Turns get reset.
 *   - Greater: Turns take greater value (current vs reset).
 *   - Add: Turns add upon existing turns.
 * 
 *   Maximum Turns:
 *   - Maximum number of turns to let buffs and debuffs go up to.
 *
 * ---
 *
 * Stacking
 * 
 *   Max Stacks: Buff:
 *   - Maximum number of stacks for buffs.
 * 
 *   Max Stacks: Debuff:
 *   - Maximum number of stacks for debuffs.
 * 
 *   JS: Buff/Debuff Rate:
 *   - Code to determine how much buffs and debuffs affect parameters.
 *
 * ---
 *
 * Turn Display
 * 
 *   Show Turns?:
 *   - Display buff and debuff turns on top of window icons and sprites?
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Offset X:
 *   - Offset the X position of the turn display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the turn display.
 * 
 *   Turn Color: Buffs:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Debuffs:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Rate Display
 * 
 *   Show Rate?:
 *   - Display buff and debuff rate on top of window icons and sprites?
 * 
 *   Rate Font Size:
 *   - Font size used for displaying rate.
 * 
 *   Offset X:
 *   - Offset the X position of the rate display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the rate display.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: On Add Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Add Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 * 
 *   JS: On Erase Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Erase Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 * 
 *   JS: On Expire Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Expire Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Passive State Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust passive states that can affect all actors and
 * enemies as well as have global conditions.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * List
 * 
 *   Global Passives:
 *   - A list of passive states to affect actors and enemies.
 * 
 *   Actor-Only Passives:
 *   - A list of passive states to affect actors only.
 * 
 *   Enemy Passives:
 *   - A list of passive states to affect enemies only.
 *
 * ---
 * 
 * Cache
 * 
 *   Switch Refresh?:
 *   - Refresh all battle members when switches are changed in battle?
 *   - This is primarily used for passive state conditions involve parameters
 *     that do not update due to cached data until a refresh occurs.
 *   - If this is on, do not spam Switch changes during battle in order to
 *     prevent lag spikes.
 * 
 *   Variable Refresh?:
 *   - Refresh all battle members when variables are changed in battle?
 *   - This is primarily used for passive state conditions involve parameters
 *     that do not update due to cached data until a refresh occurs.
 *   - If this is on, do not spam Variable changes during battle in order to
 *     prevent lag spikes.
 * 
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Condition Check:
 *   - JavaScript code for a global-wide passive condition check.
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
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.46: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Skill Settings > Skill Types > Sort: Alphabetical
 * **** Insert the ID's of Skill Types you want sorted alphabetically.
 * ** New notetags added by Irina:
 * *** <ID Sort Priority: x>
 * **** Used for Scene_Skill.
 * **** Changes sorting priority by ID for skill to 'x'. 
 * **** Default priority level is '50'.
 * **** Skills with higher priority values will be sorted higher up on the list
 *      while lower values will be lower on the list.
 * 
 * Version 1.45: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a problem with passive state conditional notetags not working
 *    properly. Fix made by Irina.
 * 
 * Version 1.44: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where passive states would not appear. Fix made by Olivia.
 * ** Fixed a bug where a crash would occur if certain plugins cleared the
 *    passive state cache midway through trying to register it. Fix by Olivia.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * ** States with lots and lots of text data within their notes will no longer
 *    cause FPS drops.
 * 
 * Version 1.43: January 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Skill Cost: Emulate Actor Pay
 * *** Skill Cost: Emulate Enemy Pay
 * **** Target actor(s)/enemy(s) emulates paying for skill cost.
 * *** State Turns: Actor State Turns Change By
 * *** State Turns: Actor State Turns Change To
 * *** State Turns: Enemy State Turns Change By
 * *** State Turns: Enemy State Turns Change To
 * **** Changes actor(s)/enemy(s) state turns to a specific value/by an amount.
 * **** Only works on states that can have turns.
 * 
 * Version 1.42: November 16, 2023
 * * Bug Fixes!
 * ** 'origin' variable was not working properly for <JS On Expire State>
 *    JavaScript notetag. Should now be working properly. Fix made by Irina.
 * 
 * Version 1.41: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented <Max Turns: x> for states from working due to
 *    one of the recent updates. Fix made by Arisu.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Apparently, we never put <Max Turns: x> in the help notetag section.
 *    Woops... It's there now.
 * 
 * Version 1.40: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug involving the "Item Cost" skill cost type found in the Plugin
 *    Parameters when involving consumable items.
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_SkillsStatesCore.js in the Plugin Manager
 *      list and install the newest version.
 * **** Or create a new project, install VisuMZ_1_SkillsStatesCore.js there,
 *      then copy over the "Item Cost" plugin parameters found in the "Skill
 *      Cost Types" plugin parameter settings to your current project.
 * 
 * Version 1.39: July 13, 2023
 * * Feature Update!
 * ** Updated the "Item Cost" skill cost type found in the Plugin Parameters to
 *    no longer consume items that are key items or nonconsumable.
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_SkillsStatesCore.js in the Plugin Manager
 *      list and install the newest version.
 * **** Or create a new project, install VisuMZ_1_SkillsStatesCore.js there,
 *      then copy over the "Item Cost" plugin parameters found in the "Skill
 *      Cost Types" plugin parameter settings to your current project.
 * 
 * Version 1.38: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added segment to <Replace x Gauge: type> in documentation:
 * *** Does not work with 'Item Cost', 'Weapon Cost', or 'Armor Cost'.
 * * New Features!
 * ** New "Skill Cost Type" and notetags added by Arisu and sponsored by FAQ.
 * *** <Item Cost: x name>
 * *** <Weapon Cost: x name>
 * *** <Armor Cost: x name>
 * **** The skill will consume items, weapons, and/or armors in order to be
 *      used. Even non-consumable items will be consumed.
 * *** <Item Cost Max/Min: x name>
 * *** <Weapon Cost Max/Min: x name>
 * *** <Armor Cost Max/Min: x name>
 * **** Sets up a maximum/minimum cost for the item, weapon, armor type costs.
 * *** <Item Cost: x% name>
 * *** <Weapon Cost: x% name>
 * *** <Armor Cost: x% name>
 * **** Alters cost rate of skills that would consume item, weapon, or armor.
 * *** <Item Cost: +/-x name>
 * *** <Weapon Cost: +/-x name>
 * *** <Armor Cost: +/-x name>
 * **** Alters flat costs of skills that would consume item, weapon, or armor.
 * *** <Replace Item name1 Cost: name2>
 * *** <Replace Weapon name1 Cost: name2>
 * *** <Replace Armor name1 Cost: name2>
 * **** Replaces item, weapon, or armor to be consumed for another type.
 * *** Projects with the Skills and States Core already installed will not have
 *     this update, but you can copy over the settings from a new project with
 *     the following steps:
 * **** Create a new project. Install Skills and States Core. Open up the new
 *      project's 'Skill Cost Types'.
 * **** Right click the 'Item Cost' option(s) and click copy.
 * **** Go to the target project's Skills and States Core's 'Skill Cost Types'
 *      plugin parameter. Paste the command where you want it to go.
 * **** Only 'Item Cost' is needed as it encompasses all three types for item,
 *      weapon, and armor costs.
 * 
 * Version 1.38: February 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.37: January 20, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused equipment to unequip if the needed equipment
 *    traits came from passive states upon learning new skills. Fix by Irina.
 * 
 * Version 1.36: December 15, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** When enemies are defeated with their entire party having a state with the
 *    <Group Defeat> notetag, then the party will gain EXP, Gold, and Drops
 *    before when they wouldn't. Update made by Irina.
 * * New Features!
 * ** New Plugin Parameter added by Irina!
 * *** Plugin Parameters > Skill Settings > Skill Type Window > Window Width
 * **** What is the desired pixel width of this window? Default: 240
 * 
 * Verison 1.35: October 13, 2022
 * * Feature Update!
 * ** Default values for Passive States > Cache > Switch Refresh? and Variable
 *    Refresh? are now set to "false" in order to prevent sudden lag spikes for
 *    those who are unfamiliar with how this setting works.
 * ** Update made by Irina.
 * 
 * Version 1.34: September 29, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Gauge Settings
 * **** These settings allow you to make minor tweaks to how the gauges look
 *      ranging from the color used for the labels to the outline types used
 *      for the values.
 * 
 * Version 1.33: August 11, 2022
 * * Bug Fixes!
 * ** Fixed a crash that occurs when performing a custom action sequence
 *    without a skill attached to it. Fix made by Olivia.
 * 
 * Version 1.32: June 16, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Passive State Settings > Cache > Switch Refresh?
 * *** Plugin Parameters > Passive State Settings > Cache > Variable Refresh?
 * **** Refresh all battle members when switches/variables are changed in
 *      battle?
 * **** This is primarily used for passive state conditions involve parameters
 *      that do not update due to cached data until a refresh occurs.
 * **** If this is on, do not spam Switch/Variable changes during battle in
 *      order to prevent lag spikes.
 * 
 * Version 1.31: April 28, 2022
 * * Bug Fixes!
 * ** Custom Slip Damage JS is now totalled correctly into regular slip damage
 *    totals for damage popups. Fix made by Olivia.
 * 
 * Version 1.30: April 14, 2022
 * * Feature Update!
 * ** Changed the state data removal timing to be after JS notetag effects
 *    take place in order for data such as origin data to remain intact. Update
 *    made by Irina.
 * 
 * Version 1.29: March 31, 2022
 * * Bug Fixes!
 * ** Fixed an error with <State x Category Remove: y> not countaing correctly
 *    unless the state count matched the exact amount. The notetag effect
 *    should work properly now. Fix made by Olivia.
 * 
 * Version 1.28: March 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** <State x Category Remove: All> updated to allow multiple cases in a
 *    single notebox. Updated by Arisu.
 * * New Features!
 * ** New Notetag added by Arisu and sponsored by Archeia!
 * *** <Remove Other x States>
 * **** When the state with this notetag is added, remove other 'x' category
 *      states from the battler (except for the state being added).
 * **** Useful for thing state types like stances and forms that there is
 *      usually only one active at a time.
 * 
 * Version 1.27: January 27, 2022
 * * Bug Fixes!
 * ** Custom JS Slip Damage/Healing values should now be recalculated on
 *    demand. Fix made by Olivia.
 * 
 * Version 1.26: January 20, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Conditional Passive Bypass check is now stronger to prevent even more
 *    infinite loops from happening. Update made by Olivia.
 * * New Features!
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > State Settings > General > Turn End on Map
 * **** Update any state and buff turns on the map after this many steps.
 * **** Use 0 to disable.
 * 
 * Version 1.25: November 11, 2021
 * * Bug Fixes!
 * ** Hidden skill notetags should no longer crash upon not detecting actors
 *    for learned skills. Fix made by Olivia.
 * 
 * Version 1.24: November 4, 2021
 * * Documentation Update!
 * ** Added section: "Slip Damage Popup Clarification"
 * *** Slip Damage popups only show one popup for HP, MP, and TP each and it is
 *     the grand total of all the states and effects combined regardless of the
 *     number of states and effects on a battler. This is how it is in vanilla
 *     RPG Maker MZ and this is how we intend for it to be with the VisuStella
 *     MZ library.
 * *** This is NOT a bug!
 * *** The reason we are not changing this is because it does not properly
 *     relay information to the player accurately. When multiple popups appear,
 *     players only have roughly a second and a half to calculate it all for
 *     any form of information takeaway. We feel it is better suited for the
 *     player's overall convenience to show a cummulative change and steer the
 *     experience towards a more positive one.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.23: September 17, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * *** Skill Cost Types Plugin Parameters need to be updated for those who want
 *     the updated gauges. This can be done easily with the following steps:
 * **** Step 1: Create a new project.
 * **** Step 2: Install Skills and States Core version 1.23 into it.
 * **** Step 3: Copy the Plugin Parameter Settings for "Skill Cost Types".
 * **** Step 4: Return back to your original project.
 * **** Step 5: Paste Plugin Parameter Settings on top of "Skill Cost Types".
 * 
 * Version 1.22: August 6, 2021
 * * Documentation Update!
 * ** "Action End Removal for States" under Major Updates is changed to:
 * *** If your Plugin Parameter settings for "Action End Update" are enabled,
 *     then "Action End" has been updated so that it actually applies per
 *     action used instead of just being at the start of a battler's action
 *     set.
 * *** However, there are side effects to this: if a state has the "Cannot
 *     Move" restriction along with the "Action End" removal timing, then
 *     unsurprisingly, the state will never wear off because it's now based on
 *     actual actions ending. To offset this and remove confusion, "Action End"
 *     auto-removal timings for states with "Cannot Move" restrictions will be
 *     turned into "Turn End" auto-removal timings while the "Action End
 *     Update" is enabled.
 * *** This automatic change won't make it behave like an "Action End" removal
 *     timing would, but it's better than completely softlocking a battler.
 * * Feature Update!
 * ** Those using "Cannot Move" states with "Action End" auto-removal will now
 *    have be automatically converted into "Turn End" auto-removal if the
 *    plugin parameter "Action End Update" is set to true. Update by Irina.
 * 
 * Version 1.21: July 30, 2021
 * * Documentation Update!
 * ** Expanded "Action End Removal for States" section in Major Changes.
 * *** These changes have been in effect since Version 1.07 but have not been
 *     explained in excess detail in the documentation since.
 * **** Action End has been updated so that it actually applies per action used
 *      instead of just being at the start of a battler's action set. However,
 *      there are side effects to this: if a state has the "Cannot Move"
 *      restriction along with the "Action End" removal timing, then
 *      unsurprisingly, the state will never wear off because it's now based on
 *      actual actions ending. There are two solutions to this:
 * **** Don't make "Cannot Move" restriction states with "Action End". This is
 *      not a workaround. This is how the state removal is intended to work
 *      under the new change.
 * **** Go to the Skills & States Core Plugin Parameters, go to State
 *      Setttings, look for "Action End Update", and set it to false. You now
 *      reverted the removal timing system back to how it originally was in RPG
 *      Maker MZ's default battle system where it only updates based on an
 *      action set rather than per actual action ending.
 * 
 * Version 1.20: June 18, 2021
 * * Feature Update!
 * ** Updated automatic caching for conditional passive states to update more
 *    efficiently. Update made by Arisu.
 * 
 * Version 1.19: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.18: May 21, 2021
 * * Documentation Update
 * ** Added "Passive State Clarification" section.
 * *** As there is a lot of confusion regarding how passive states work and how
 *     people still miss the explanations found in the "Passive State Notetags"
 *     section AND the "Plugin Parameters: Passive State Settings", we are
 *     adding a third section to explain how they work.
 * *** All three sections will contain the full detailed explanation of how
 *     passive states work to clear common misconceptions about them.
 * 
 * Version 1.17: May 7, 2021
 * * Bug Fixes
 * ** State category removal is now usable outside of battle. Fix by Irina.
 * 
 * Version 1.16: April 30, 2021
 * * Bug Fixes!
 * ** When states with step removal have the <No Recover All Clear> or
 *    <No Death Clear> notetags, their step counter is no longer reset either.
 *    Fix made by Irina.
 * * New Features!
 * ** New notetag added by Arisu!
 * *** <List Name: name>
 * **** Makes the name of the skill appear different when show in the skill
 *      list. Using \V[x] as a part of the name will display that variable.
 * 
 * Version 1.15: March 19, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.14: March 12, 2021
 * * Bug Fixes!
 * ** Max HP Buff/Debuff should now display its turn counter. Fix by Yanfly.
 * * Documentation Update!
 * ** For the <JS Passive Condition>, we've added documentation on the
 *    limitations of passive conditions since they have been reported as bug
 *    reports, when in reality, they are failsafes to prevent infinite loops.
 *    Such limitations include the following:
 * *** A passive state that requires another passive state
 * *** A passive state that requires a trait effect from another state
 * *** A passive state that requires a parameter value altered by another state
 * *** A passive state that requires equipment to be worn but its equipment
 *     type access is provided by another state.
 * *** Anything else that is similar in style.
 * 
 * Version 1.13: February 26, 2021
 * * Documentation Update!
 * ** For <JS type Slip Damage> and <JS type Slip Heal> notetags, added the
 *    following notes:
 * *** When these states are applied via action effects, the slip calculations
 *     are one time calculations made upon applying and the damage is cached to
 *     be used for future on regeneration calculations.
 * *** For that reason, do not include game mechanics here such as adding
 *     states, buffs, debuffs, etc. as this notetag is meant for calculations
 *     only. Use the VisuStella Battle Core's <JS Pre-Regenerate> and
 *     <JS Post-Regenerate> notetags for game mechanics instead.
 * *** Passive states and states with the <JS Slip Refresh> notetag are exempt
 *     from the one time calculation and recalculated each regeneration phase.
 * * Feature Update!
 * ** Changed slip refresh requirements to entail <JS Slip Refresh> notetag for
 *    extra clarity. Update made by Olivia.
 * 
 * Version 1.12: February 19, 2021
 * * Feature Update
 * ** Changed the way passive state infinite stacking as a blanket coverage.
 *    Update made by Olivia.
 * 
 * Version 1.11: February 12, 2021
 * * Bug Fixes!
 * ** Added a check to prevent passive states from infinitely stacking. Fix
 *    made by Olivia.
 * 
 * Version 1.10: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Skill Settings > Background Type
 * 
 * Version 1.09: January 1, 2021
 * * Bug Fixes!
 * ** Custom JS TP slip damage and healing should now work properly.
 *    Fix made by Yanfly.
 * 
 * Version 1.08: December 25, 2020
 * * Bug Fixes!
 * ** <JS On Add State> should no longer trigger multiple times for the death
 *    state. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for updated feature(s)!
 * * Feature Update!
 * ** <No Death Clear> can now allow the affected state to be added to an
 *    already dead battler. Update made by Yanfly.
 * 
 * Version 1.07: December 18, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New notetags added by Yanfly:
 * *** <Passive Condition Multiclass: id>
 * *** <Passive Condition Multiclass: id, id, id>
 * *** <Passive Condition Multiclass: name>
 * *** <Passive Condition Multiclass: name, name, name>
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > States > General > Action End Update
 * **** States with "Action End" auto-removal will also update turns at the end
 *      of each action instead of all actions.
 * ***** Turn this off if you wish for state turn updates to function like they
 *       do by default for "Action End".
 * 
 * Version 1.06: December 4, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.05: November 15, 2020
 * * Bug Fixes!
 * ** The alignment of the Skill Type Window is now fixed and will reflect upon
 *    the default settings. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** <State x Category Remove: All> notetag added by Yanfly.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.04: September 27, 2020
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.03: September 13, 2020
 * * Bug Fixes!
 * ** <JS type Slip Damage> custom notetags now work for passive states. Fix
 *    made by Olivia.
 * ** Setting the Command Window style to "Text Only" will no longer add in
 *    the icon text codes. Bug fixed by Yanfly.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** The JS Notetags for Add, Erase, and Expire states are now fixed. Fix made
 *    by Yanfly.
 * * Documentation Update!
 * ** <Show if learned Skill: x> and <Hide if learned Skill: x> notetags have
 *    the following added to their descriptions:
 * *** This does not apply to skills added by traits on actors, classes, any
 *     equipment, or states. These are not considered learned skills. They are
 *     considered temporary skills.
 * * New Features!
 * ** Notetags added by Yanfly:
 * *** <Show if has Skill: x>
 * *** <Show if have All Skills: x,x,x>
 * *** <Show if have Any Skills: x,x,x>
 * *** <Show if has Skill: name>
 * *** <Show if have All Skills: name, name, name>
 * *** <Show if have Any Skills: name, name, name>
 * *** <Hide if has Skill: x>
 * *** <Hide if have All Skills: x,x,x>
 * *** <Hide if have Any Skills: x,x,x>
 * *** <Hide if has Skill: name>
 * *** <Hide if have All Skills: name, name, name>
 * *** <Hide if have Any Skills: name, name, name>
 * *** These have been added to remove the confusion regarding learned skills
 *     as skills added through trait effects are not considered learned skills
 *     by RPG Maker MZ.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Passive states from Elements & Status Menu Core are now functional.
 *    Fix made by Olivia.
 * * Compatibility Update
 * ** Extended functions to allow for better compatibility.
 * * Updated documentation
 * ** Explains that passive states are not directly applied and are therefore
 *    not affected by code such as "a.isStateAffected(10)".
 * ** Instead, use "a.states().includes($dataStates[10])"
 * ** "Use #rrggbb for a hex color." lines now replaced with
 *    "For a hex color, use #rrggbb with VisuMZ_1_MessageCore"
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillActorPaySkillCost
 * @text Skill Cost: Emulate Actor Pay
 * @desc Target actor(s) emulates paying for skill cost.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) will pay skill cost.
 * @default ["1"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to emulate paying the skill cost for?
 * @default 99
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillEnemyPaySkillCost
 * @text Skill Cost: Emulate Enemy Pay
 * @desc Target enemy(s) emulates paying for skill cost.
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actr[]
 * @desc Select which enemy index(es) will pay skill cost.
 * @default ["1"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to emulate paying the skill cost for?
 * @default 99
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_StateTurns
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StateTurnsActorChangeBy
 * @text State Turns: Actor State Turns Change By
 * @desc Changes actor(s) state turns by an amount.
 * Only works on states that can have turns.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg StateID:num
 * @text State ID
 * @type state
 * @desc What is the ID of the state you wish to change turns for?
 * Only works on states that can have turns.
 * @default 5
 *
 * @arg Turns:eval
 * @text Change Turns By
 * @desc How many turns should the state be changed to?
 * You may use JavaScript code.
 * @default +1
 *
 * @arg AutoAddState:eval
 * @text Auto-Add State?
 * @type boolean
 * @on Auto-Add
 * @off Don't Add
 * @desc Automatically adds state if actor(s) does not have it applied?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StateTurnsActorChangeTo
 * @text State Turns: Actor State Turns Change To
 * @desc Changes actor(s) state turns to a specific value.
 * Only works on states that can have turns.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg StateID:num
 * @text State ID
 * @type state
 * @desc What is the ID of the state you wish to change turns for?
 * Only works on states that can have turns.
 * @default 5
 *
 * @arg Turns:eval
 * @text Change Turns To
 * @desc How many turns should the state be changed to?
 * You may use JavaScript code.
 * @default 10
 *
 * @arg AutoAddState:eval
 * @text Auto-Add State?
 * @type boolean
 * @on Auto-Add
 * @off Don't Add
 * @desc Automatically adds state if actor(s) does not have it applied?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StateTurnsEnemyChangeBy
 * @text State Turns: Enemy State Turns Change By
 * @desc Changes enemy(s) state turns by an amount.
 * Only works on states that can have turns.
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actr[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg StateID:num
 * @text State ID
 * @type state
 * @desc What is the ID of the state you wish to change turns for?
 * Only works on states that can have turns.
 * @default 5
 *
 * @arg Turns:eval
 * @text Change Turns By
 * @desc How many turns should the state be changed to?
 * You may use JavaScript code.
 * @default +1
 *
 * @arg AutoAddState:eval
 * @text Auto-Add State?
 * @type boolean
 * @on Auto-Add
 * @off Don't Add
 * @desc Automatically adds state if enemy(s) does not have it applied?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StateTurnsEnemyChangeTo
 * @text State Turns: Enemy State Turns Change To
 * @desc Changes enemy(s) state turns to a specific value.
 * Only works on states that can have turns.
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actr[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg StateID:num
 * @text State ID
 * @type state
 * @desc What is the ID of the state you wish to change turns for?
 * Only works on states that can have turns.
 * @default 5
 *
 * @arg Turns:eval
 * @text Change Turns To
 * @desc How many turns should the state be changed to?
 * You may use JavaScript code.
 * @default 10
 *
 * @arg AutoAddState:eval
 * @text Auto-Add State?
 * @type boolean
 * @on Auto-Add
 * @off Don't Add
 * @desc Automatically adds state if enemy(s) does not have it applied?
 * @default true
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
 * @param SkillsStatesCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Skills:struct
 * @text Skill Settings
 * @type struct<Skills>
 * @desc Adjust general skill settings here.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","SkillTypeWindow":"","CmdStyle:str":"auto","CmdTextAlign:str":"left","ListWindow":"","ListWindowCols:num":"1","ShopStatusWindow":"","ShowShopStatus:eval":"true","SkillSceneAdjustSkillList:eval":"true","SkillMenuStatusRect:func":"\"const ww = this.shopStatusWidth();\\nconst wh = this._itemWindow.height;\\nconst wx = Graphics.boxWidth - this.shopStatusWidth();\\nconst wy = this._itemWindow.y;\\nreturn new Rectangle(wx, wy, ww, wh);\"","SkillTypes":"","HiddenSkillTypes:arraynum":"[]","BattleHiddenSkillTypes:arraynum":"[]","IconStypeNorm:num":"78","IconStypeMagic:num":"79","CustomJS":"","SkillConditionJS:func":"\"// Declare Variables\\nconst skill = arguments[0];\\nconst user = this;\\nconst target = this;\\nconst a = this;\\nconst b = this;\\nlet enabled = true;\\n\\n// Perform Checks\\n\\n\\n// Return boolean\\nreturn enabled;\""}
 *
 * @param Costs:arraystruct
 * @text Skill Cost Types
 * @parent Skills:struct
 * @type struct<Cost>[]
 * @desc A list of all the skill cost types added by this plugin
 * and the code that controls them in-game.
 * @default ["{\"Name:str\":\"HP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"20\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<HP COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<HP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.mhp / 100);\\\\n}\\\\nif (note.match(/<JS HP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS HP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<HP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<HP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<HP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<HP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nif (cost <= 0) {\\\\n    return true;\\\\n} else {\\\\n    return user._hp > cost;\\\\n}\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._hp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.hp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mhp;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.hp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.hpGaugeColor1();\\\\nconst color2 = ColorManager.hpGaugeColor2();\\\\nconst label = TextManager.hpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.hpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"MP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"23\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = Math.floor(skill.mpCost * user.mcr);\\\\nif (note.match(/<MP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.mmp / 100);\\\\n}\\\\nif (note.match(/<JS MP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS MP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<MP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<MP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<MP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<MP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn user._mp >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._mp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.mp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mmp;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.mpGaugeColor1();\\\\nconst color2 = ColorManager.mpGaugeColor2();\\\\nconst label = TextManager.mpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.mpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"TP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"29\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = skill.tpCost;\\\\nif (note.match(/<TP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.maxTp() / 100);\\\\n}\\\\nif (note.match(/<JS TP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS TP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<TP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<TP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<TP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<TP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn user._tp >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._tp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.tp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.maxTp();\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.tp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.tpGaugeColor1();\\\\nconst color2 = ColorManager.tpGaugeColor2();\\\\nconst label = TextManager.tpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.tpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Gold\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"17\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<GOLD COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<GOLD COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * $gameParty.gold() / 100);\\\\n}\\\\nif (note.match(/<JS GOLD COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS GOLD COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<GOLD COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<GOLD COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<GOLD COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<GOLD COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn $gameParty.gold() >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\n$gameParty.loseGold(cost);\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.currencyUnit;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn $gameParty.maxGold();\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn $gameParty.gold();\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\n\\\\n// Draw Label\\\\nconst label = TextManager.currencyUnit;\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = sprite.bitmapWidth();\\\\nconst lh = sprite.bitmapHeight();\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = sprite.bitmapWidth() - 2;\\\\nconst vh = sprite.bitmapHeight();\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.normalColor();\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Potion\",\"Settings\":\"\",\"Icon:num\":\"176\",\"FontColor:str\":\"0\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<POTION COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<JS POTION COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS POTION COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<POTION COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<POTION COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<POTION COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<POTION COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return Boolean\\\\nif (user.isActor() && cost > 0) {\\\\n    return $gameParty.numItems(item) >= cost;\\\\n} else {\\\\n    return true;\\\\n}\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst item = $dataItems[7];\\\\n\\\\n// Process Payment\\\\nif (user.isActor()) {\\\\n    $gameParty.loseItem(item, cost);\\\\n}\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = settings.Name;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '×%1'.format(cost);\\\\n\\\\n// Text: Add Icon\\\\ntext += '\\\\\\\\\\\\\\\\I[%1]'.format(item.iconIndex);\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return value\\\\nreturn $gameParty.maxItems(item);\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return value\\\\nreturn $gameParty.numItems(item);\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.textColor(30);\\\\nconst color2 = ColorManager.textColor(31);\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst item = $dataItems[7];\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Icon\\\\nconst iconIndex = item.iconIndex;\\\\nconst iconBitmap = ImageManager.loadSystem(\\\\\\\"IconSet\\\\\\\");\\\\nconst pw = ImageManager.iconWidth;\\\\nconst ph = ImageManager.iconHeight;\\\\nconst sx = (iconIndex % 16) * pw;\\\\nconst sy = Math.floor(iconIndex / 16) * ph;\\\\nbitmap.blt(iconBitmap, sx, sy, pw, ph, 0, 0, 24, 24);\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.normalColor();\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Item Cost\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"0\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = {\\\\n    items: {},\\\\n    weapons: {},\\\\n    armors: {},\\\\n};\\\\n\\\\n// Gather Cost Notetags\\\\n{ // Item Costs\\\\n    const notetag = /<ITEM COST:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n    const matches = note.match(notetag);\\\\n    if (matches) {\\\\n        for (const currentMatch of matches) {\\\\n            currentMatch.match(notetag);\\\\n            const amount = Number(RegExp.$1);\\\\n            const name = String(RegExp.$2).toUpperCase().trim();\\\\n            const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n            if (entry) {\\\\n                cost.items[entry.id] = amount;\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Weapon Costs\\\\n    const notetag = /<WEAPON COST:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n    const matches = note.match(notetag);\\\\n    if (matches) {\\\\n        for (const currentMatch of matches) {\\\\n            currentMatch.match(notetag);\\\\n            const amount = Number(RegExp.$1);\\\\n            const name = String(RegExp.$2).toUpperCase().trim();\\\\n            const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n            if (entry) {\\\\n                cost.weapons[entry.id] = amount;\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Armor Costs\\\\n    const notetag = /<ARMOR COST:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n    const matches = note.match(notetag);\\\\n    if (matches) {\\\\n        for (const currentMatch of matches) {\\\\n            currentMatch.match(notetag);\\\\n            const amount = Number(RegExp.$1);\\\\n            const name = String(RegExp.$2).toUpperCase().trim();\\\\n            const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n            if (entry) {\\\\n                cost.armors[entry.id] = amount;\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Declare Trait Objects\\\\nconst traitObjects = user.traitObjects();\\\\n\\\\n// Apply Cost Rate Modifiers\\\\nfor (const traitObject of traitObjects) {\\\\n    if (!traitObject) continue;\\\\n    const objNote = traitObject.note || '';\\\\n    { // Item Cost Rate Modifiers\\\\n        const notetag = /<ITEM COST:[ ](\\\\\\\\d+)([%％])[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const rate = Number(RegExp.$1) * 0.01;\\\\n                const name = String(RegExp.$3).toUpperCase().trim();\\\\n                const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.items[entry.id]) {\\\\n                    cost.items[entry.id] = Math.ceil(cost.items[entry.id] * rate);\\\\n                    if (cost.items[entry.id] <= 0) cost.items[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Weapon Cost Rate Modifiers\\\\n        const notetag = /<WEAPON COST:[ ](\\\\\\\\d+)([%％])[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const rate = Number(RegExp.$1) * 0.01;\\\\n                const name = String(RegExp.$3).toUpperCase().trim();\\\\n                const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.weapons[entry.id]) {\\\\n                    cost.weapons[entry.id] = Math.ceil(cost.weapons[entry.id] * rate);\\\\n                    if (cost.weapons[entry.id] <= 0) cost.weapons[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Armor Cost Rate Modifiers\\\\n        const notetag = /<ARMOR COST:[ ](\\\\\\\\d+)([%％])[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const rate = Number(RegExp.$1) * 0.01;\\\\n                const name = String(RegExp.$3).toUpperCase().trim();\\\\n                const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.armors[entry.id]) {\\\\n                    cost.armors[entry.id] = Math.ceil(cost.armors[entry.id] * rate);\\\\n                    if (cost.armors[entry.id] <= 0) cost.armors[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Apply Flat Cost Modifiers\\\\nfor (const traitObject of traitObjects) {\\\\n    if (!traitObject) continue;\\\\n    const objNote = traitObject.note || '';\\\\n    { // Item Flat Cost Modifiers\\\\n        const notetag = /<ITEM COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const flat = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.items[entry.id]) {\\\\n                    cost.items[entry.id] += flat;\\\\n                    if (cost.items[entry.id] <= 0) cost.items[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Weapon Flat Cost Modifiers\\\\n        const notetag = /<WEAPON COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const flat = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.weapons[entry.id]) {\\\\n                    cost.weapons[entry.id] += flat;\\\\n                    if (cost.weapons[entry.id] <= 0) cost.weapons[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Armor Flat Cost Modifiers\\\\n        const notetag = /<ARMOR COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const flat = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.armors[entry.id]) {\\\\n                    cost.armors[entry.id] += flat;\\\\n                    if (cost.armors[entry.id] <= 0) cost.armors[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Set Cost Limits\\\\n{ // Item Cost Limits\\\\n    { // Maximum Cost\\\\n        const notetag = /<ITEM COST MAX:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const max = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.items[entry.id] !== undefined) {\\\\n                    cost.items[entry.id] = Math.min(max, cost.items[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Minimum Cost\\\\n        const notetag = /<ITEM COST MIN:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const min = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.items[entry.id] !== undefined) {\\\\n                    cost.items[entry.id] = Math.max(min, cost.items[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Weapon Cost Limits\\\\n    { // Maximum Cost\\\\n        const notetag = /<WEAPON COST MAX:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const max = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.weapons[entry.id] !== undefined) {\\\\n                    cost.weapons[entry.id] = Math.min(max, cost.weapons[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Minimum Cost\\\\n        const notetag = /<WEAPON COST MIN:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const min = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.weapons[entry.id] !== undefined) {\\\\n                    cost.weapons[entry.id] = Math.max(min, cost.weapons[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Armor Cost Limits\\\\n    { // Maximum Cost\\\\n        const notetag = /<ARMOR COST MAX:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const max = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.armors[entry.id] !== undefined) {\\\\n                    cost.armors[entry.id] = Math.min(max, cost.armors[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Minimum Cost\\\\n        const notetag = /<ARMOR COST MIN:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const min = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.armors[entry.id] !== undefined) {\\\\n                    cost.armors[entry.id] = Math.max(min, cost.armors[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Apply Replacement Costs\\\\nfor (const traitObject of traitObjects) {\\\\n    if (!traitObject) continue;\\\\n    const objNote = traitObject.note || '';\\\\n    { // Item Replacement Costs\\\\n        const notetag = /<REPLACE ITEM (.*) COST:[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const name1 = String(RegExp.$1).toUpperCase().trim();\\\\n                const name2 = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry1 = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name1);\\\\n                const entry2 = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name2);\\\\n                if (entry1 && entry2 && cost.items[entry1.id]) {\\\\n                    cost.items[entry2.id] = cost.items[entry1.id];\\\\n                    delete cost.items[entry1.id];\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Weapon Replacement Costs\\\\n        const notetag = /<REPLACE WEAPON (.*) COST:[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const name1 = String(RegExp.$1).toUpperCase().trim();\\\\n                const name2 = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry1 = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name1);\\\\n                const entry2 = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name2);\\\\n                if (entry1 && entry2 && cost.weapons[entry1.id]) {\\\\n                    cost.weapons[entry2.id] = cost.weapons[entry1.id];\\\\n                    delete cost.items[entry1.id];\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Armor Replacement Costs\\\\n        const notetag = /<REPLACE ARMOR (.*) COST:[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const name1 = String(RegExp.$1).toUpperCase().trim();\\\\n                const name2 = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry1 = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name1);\\\\n                const entry2 = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name2);\\\\n                if (entry1 && entry2 && cost.armors[entry1.id]) {\\\\n                    cost.armors[entry2.id] = cost.armors[entry1.id];\\\\n                    delete cost.items[entry1.id];\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Return cost data\\\\nreturn cost;\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Check Individual Costs\\\\n{ // Check Item Costs\\\\n    for (let id in cost.items) {\\\\n        const obj = $dataItems[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.items[id];\\\\n            const ownedAmount = $gameParty.numItems(obj);\\\\n            if (costAmount > ownedAmount) return false;\\\\n        }\\\\n    }\\\\n}\\\\n{ // Check Weapon Costs\\\\n    for (let id in cost.weapons) {\\\\n        const obj = $dataWeapons[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.weapons[id];\\\\n            const ownedAmount = $gameParty.numItems(obj);\\\\n            if (costAmount > ownedAmount) return false;\\\\n        }\\\\n    }\\\\n}\\\\n{ // Check Armor Costs\\\\n    for (let id in cost.armors) {\\\\n        const obj = $dataArmors[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.armors[id];\\\\n            const ownedAmount = $gameParty.numItems(obj);\\\\n            if (costAmount > ownedAmount) return false;\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Return True\\\\nreturn true;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\n{ // Check Item Costs\\\\n    for (let id in cost.items) {\\\\n        const obj = $dataItems[id];\\\\n        if (obj && obj.consumable) {\\\\n            if (obj.itypeId !== 2) {\\\\n                const costAmount = cost.items[id];\\\\n                $gameParty.loseItem(obj, costAmount);\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Check Weapon Costs\\\\n    for (let id in cost.weapons) {\\\\n        const obj = $dataWeapons[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.weapons[id];\\\\n            $gameParty.loseItem(obj, costAmount);\\\\n        }\\\\n    }\\\\n}\\\\n{ // Check Armor Costs\\\\n    for (let id in cost.armors) {\\\\n        const obj = $dataArmors[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.armors[id];\\\\n            $gameParty.loseItem(obj, costAmount);\\\\n        }\\\\n    }\\\\n}\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Check Keys\\\\nconst keys = ['items', 'weapons', 'armors'];\\\\n\\\\n// Return False\\\\nreturn keys.some(key => Object.keys(cost[key]).length > 0);\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = settings.Name;\\\\nconst icon = settings.Icon;\\\\nconst keys = ['items', 'weapons', 'armors'];\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\nfor (const key of keys) {\\\\n    const database = [$dataItems, $dataWeapons, $dataArmors][keys.indexOf(key)];\\\\n    const costData = cost[key];\\\\n    const idList = Object.keys(costData).sort((a, b) => a - b);\\\\n    for (const id of idList) {\\\\n        const obj = database[id];\\\\n        const iconIndex = obj.iconIndex;\\\\n        const costAmount = costData[id];\\\\n        text += '\\\\\\\\\\\\\\\\I[%1]×%2 '.format(iconIndex, costAmount);\\\\n    }\\\\n}\\\\n\\\\n// Return text\\\\nreturn text.trim();\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn 0;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn 0;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Don't Draw Anything\\\\n// This does not work as a gauge.\\\"\"}"]
 *
 * @param Gauge:struct
 * @text Gauge Settings
 * @parent Skills:struct
 * @type struct<Gauge>
 * @desc Settings in regards to how skill cost gauges function and appear.
 * @default {"Labels":"","LabelFontMainType:str":"main","MatchLabelColor:eval":"true","MatchLabelGaugeColor:num":"2","PresetLabelGaugeColor:num":"16","LabelOutlineSolid:eval":"true","LabelOutlineWidth:num":"3","Values":"","ValueFontMainType:str":"number","ValueOutlineSolid:eval":"true","ValueOutlineWidth:num":"3"}
 *
 * @param BreakSkills
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param States:struct
 * @text State Settings
 * @type struct<States>
 * @desc Adjust general state settings here.
 * @default {"General":"","ReapplyRules:str":"greater","MaxTurns:num":"99","ActionEndUpdate:eval":"true","Turns":"","ShowTurns:eval":"true","TurnFontSize:num":"16","TurnOffsetX:num":"-4","TurnOffsetY:num":"-6","ColorNeutral:str":"0","ColorPositive:str":"24","ColorNegative:str":"27","Data":"","ShowData:eval":"true","DataFontSize:num":"12","DataOffsetX:num":"0","DataOffsetY:num":"8","CustomJS":"","onAddStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\"","onEraseStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param Buffs:struct
 * @text Buff/Debuff Settings
 * @parent States:struct
 * @type struct<Buffs>
 * @desc Adjust general buff/debuff settings here.
 * @default {"General":"","ReapplyRules:str":"greater","MaxTurns:num":"99","Stacking":"","StackBuffMax:num":"2","StackDebuffMax:num":"2","MultiplierJS:func":"\"// Declare Variables\\nconst user = this;\\nconst paramId = arguments[0];\\nconst buffLevel = arguments[1];\\nlet rate = 1;\\n\\n// Perform Calculations\\nrate += buffLevel * 0.25;\\n\\n// Return Rate\\nreturn Math.max(0, rate);\"","Turns":"","ShowTurns:eval":"true","TurnFontSize:num":"16","TurnOffsetX:num":"-4","TurnOffsetY:num":"-6","ColorBuff:str":"24","ColorDebuff:str":"27","Data":"","ShowData:eval":"false","DataFontSize:num":"12","DataOffsetX:num":"0","DataOffsetY:num":"8","CustomJS":"","onAddBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onAddDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onEraseBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onEraseDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param PassiveStates:struct
 * @text Passive States
 * @parent States:struct
 * @type struct<PassiveStates>
 * @desc Adjust passive state settings here.
 * @default {"List":"","Global:arraynum":"[]","Actor:arraynum":"[]","Enemy:arraynum":"[]","CustomJS":"","PassiveConditionJS:func":"\"// Declare Variables\\nconst state = arguments[0];\\nconst stateId = state.id;\\nconst user = this;\\nconst target = this;\\nconst a = this;\\nconst b = this;\\nlet condition = true;\\n\\n// Perform Checks\\n\\n\\n// Return boolean\\nreturn condition;\""}
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
 * General Skill Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Skills:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Skill Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent SkillTypeWindow
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Skill Type Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent SkillTypeWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Skill Type Window.
 * @default left
 * 
 * @param CmdWidth:num
 * @text Window Width
 * @parent SkillTypeWindow
 * @type number
 * @min 1
 * @desc What is the desired pixel width of this window?
 * Default: 240
 * @default 240
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Skill Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Skill Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param SkillSceneAdjustSkillList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Skill List Window in the Skill Menu if using the Shop Status Window?
 * @default true
 *
 * @param SkillSceneStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
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
 * @param SkillMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Shop Status Window in the Skill Menu.
 * @default "const ww = this.shopStatusWidth();\nconst wh = this._itemWindow.height;\nconst wx = Graphics.boxWidth - this.shopStatusWidth();\nconst wy = this._itemWindow.y;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param SkillTypes
 * @text Skill Types
 *
 * @param HiddenSkillTypes:arraynum
 * @text Hidden Skill Types
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of the Skill Types you want hidden from view ingame.
 * @default []
 *
 * @param BattleHiddenSkillTypes:arraynum
 * @text Hidden During Battle
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of the Skill Types you want hidden during battle only.
 * @default []
 *
 * @param IconStypeNorm:num
 * @text Icon: Normal Type
 * @parent SkillTypes
 * @desc Icon used for normal skill types that aren't assigned any icons.
 * @default 78
 *
 * @param IconStypeMagic:num
 * @text Icon: Magic Type
 * @parent SkillTypes
 * @desc Icon used for magic skill types that aren't assigned any icons.
 * @default 79
 *
 * @param SortSkillTypesAbc:arraynum
 * @text Sort: Alphabetical
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of Skill Types you want sorted alphabetically.
 * @default []
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param SkillConditionJS:func
 * @text JS: Skill Conditions
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide skill condition check.
 * @default "// Declare Variables\nconst skill = arguments[0];\nconst user = this;\nconst target = this;\nconst a = this;\nconst b = this;\nlet enabled = true;\n\n// Perform Checks\n\n\n// Return boolean\nreturn enabled;"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Cost Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Cost:
 *
 * @param Name:str
 * @text Name
 * @desc A name for this Skill Cost Type.
 * @default Untitled
 *
 * @param Settings
 *
 * @param Icon:num
 * @text Icon
 * @parent Settings
 * @desc Icon used for this Skill Cost Type.
 * Use 0 for no icon.
 * @default 0
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Settings
 * @desc Text Color used to display this cost.
 * For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @parent Settings
 * @type number
 * @min 1
 * @desc Font size used to display this cost.
 * @default 22
 *
 * @param Cost
 * @text Cost Processing
 *
 * @param CalcJS:func
 * @text JS: Cost Calculation
 * @parent Cost
 * @type note
 * @desc Code on how to calculate this resource cost for the skill.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nlet cost = 0;\n\n// Return cost value\nreturn Math.round(Math.max(0, cost));"
 *
 * @param CanPayJS:func
 * @text JS: Can Pay Cost?
 * @parent Cost
 * @type note
 * @desc Code on calculating whether or not the user is able to pay the cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Return Boolean\nreturn true;"
 *
 * @param PayJS:func
 * @text JS: Paying Cost
 * @parent Cost
 * @type note
 * @desc Code for if met, this is the actual process of paying of the cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Process Payment\n"
 *
 * @param Windows
 * @text Window Display
 *
 * @param ShowJS:func
 * @text JS: Show Cost?
 * @parent  Windows
 * @type note
 * @desc Code for determining if the cost is shown or not.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Return Boolean\nreturn cost > 0;"
 *
 * @param TextJS:func
 * @text JS: Cost Text
 * @parent  Windows
 * @type note
 * @desc Code to determine the text (with Text Code support) used for the displayed cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\nconst settings = arguments[2];\nconst fontSize = settings.FontSize;\nconst color = settings.FontColor;\nconst name = settings.Name;\nconst icon = settings.Icon;\nlet text = '';\n\n// Text: Change Font Size\ntext += '\\\\FS[%1]'.format(fontSize);\n\n// Text: Add Color\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\n    text += '\\\\HexColor<#%1>'.format(String(RegExp.$1));\n} else {\n    text += '\\\\C[%1]'.format(color);\n}\n\n// Text: Add Cost\ntext += '%1 %2'.format(cost, name);\n\n// Text: Add Icon\nif (icon  > 0) {\n    text += '\\\\I[%1]'.format(icon);\n}\n\n// Return text\nreturn text;"
 *
 * @param Gauges
 * @text Gauge Display
 *
 * @param GaugeMaxJS:func
 * @text JS: Maximum Value
 * @parent  Gauges
 * @type note
 * @desc Code to determine the maximum value used for this Skill Cost resource for gauges.
 * @default "// Declare Variables\nconst user = this;\n\n// Return value\nreturn 0;"
 *
 * @param GaugeCurrentJS:func
 * @text JS: Current Value
 * @parent  Gauges
 * @type note
 * @desc Code to determine the current value used for this Skill Cost resource for gauges.
 * @default "// Declare Variables\nconst user = this;\n\n// Return value\nreturn 0;"
 *
 * @param GaugeDrawJS:func
 * @text JS: Draw Gauge
 * @parent  Gauges
 * @type note
 * @desc Code to determine how to draw the Skill Cost resource for this gauge type.
 * @default "// Declare Variables\nconst sprite = this;\nconst settings = sprite._costSettings;\nconst bitmap = sprite.bitmap;\nconst user = sprite._battler;\nconst currentValue = sprite.currentDisplayedValue();\n\n// Draw Gauge\nconst color1 = ColorManager.textColor(30);\nconst color2 = ColorManager.textColor(31);\nconst gx = 0;\nconst gy = sprite.bitmapHeight() - sprite.gaugeHeight();\nconst gw = sprite.bitmapWidth() - gx;\nconst gh = sprite.gaugeHeight();\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\n\n// Draw Label\nconst label = settings.Name;\nconst lx = 4;\nconst ly = 0;\nconst lw = sprite.bitmapWidth();\nconst lh = sprite.bitmapHeight();\nsprite.setupLabelFont();\nbitmap.paintOpacity = 255;\nbitmap.drawText(label, lx, ly, lw, lh, \"left\");\n\n// Draw Value\nconst vw = sprite.bitmapWidth() - 2;\nconst vh = sprite.bitmapHeight();\nsprite.setupValueFont();\nbitmap.textColor = ColorManager.normalColor();\nbitmap.drawText(currentValue, 0, 0, vw, vh, \"right\");"
 *
 */
/* ----------------------------------------------------------------------------
 * Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gauge:
 *
 * @param Labels
 *
 * @param LabelFontMainType:str
 * @text Font Type
 * @parent Labels
 * @type select
 * @option main
 * @option number
 * @desc Which font type should be used for labels?
 * @default main
 *
 * @param MatchLabelColor:eval
 * @text Match Label Color
 * @parent Labels
 * @type boolean
 * @on Match
 * @off Preset
 * @desc Match the label color to the Gauge Color being used?
 * @default true
 *
 * @param MatchLabelGaugeColor:num
 * @text Match: Gauge # ?
 * @parent MatchLabelColor:eval
 * @type number
 * @min 1
 * @max 2
 * @desc Which Gauge Color should be matched?
 * @default 2
 *
 * @param PresetLabelGaugeColor:num
 * @text Preset: Gauge Color
 * @parent MatchLabelColor:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param LabelOutlineSolid:eval
 * @text Solid Outline
 * @parent Labels
 * @type boolean
 * @on Solid
 * @off Semi-Transparent
 * @desc Make the label outline a solid black color?
 * @default true
 *
 * @param LabelOutlineWidth:num
 * @text Outline Width
 * @parent Labels
 * @type number
 * @min 0
 * @desc What width do you wish to use for your outline?
 * Use 0 to not use an outline.
 * @default 3
 *
 * @param Values
 *
 * @param ValueFontMainType:str
 * @text Font Type
 * @parent Values
 * @type select
 * @option main
 * @option number
 * @desc Which font type should be used for values?
 * @default number
 *
 * @param ValueOutlineSolid:eval
 * @text Solid Outline
 * @parent Values
 * @type boolean
 * @on Solid
 * @off Semi-Transparent
 * @desc Make the value outline a solid black color?
 * @default true
 *
 * @param ValueOutlineWidth:num
 * @text Outline Width
 * @parent Values
 * @type number
 * @min 0
 * @desc What width do you wish to use for your outline?
 * Use 0 to not use an outline.
 * @default 3
 *
 */
/* ----------------------------------------------------------------------------
 * General State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~States:
 *
 * @param General
 *
 * @param ReapplyRules:str
 * @text Reapply Rules
 * @parent General
 * @type select
 * @option Ignore: State doesn't get added.
 * @value ignore
 * @option Reset: Turns get reset.
 * @value reset
 * @option Greater: Turns take greater value (current vs reset).
 * @value greater
 * @option Add: Turns add upon existing turns.
 * @value add
 * @desc These are the rules when reapplying states.
 * @default greater
 *
 * @param MaxTurns:num
 * @text Maximum Turns
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of turns to let states go up to.
 * This can be changed with the <Max Turns: x> notetag.
 * @default 9999
 *
 * @param ActionEndUpdate:eval
 * @text Action End Update
 * @parent General
 * @type boolean
 * @on Update Each Action
 * @off Don't Change
 * @desc States with "Action End" auto-removal will also update
 * turns at the end of each action instead of all actions.
 * @default true
 *
 * @param TurnEndOnMap:num
 * @text Turn End on Map
 * @parent General
 * @type number
 * @desc Update any state and buff turns on the map after
 * this many steps. Use 0 to disable.
 * @default 20
 *
 * @param Turns
 * @text Turn Display
 *
 * @param ShowTurns:eval
 * @text Show Turns?
 * @parent Turns
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display state turns on top of window icons and sprites?
 * @default true
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @type number
 * @min 1
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param TurnOffsetX:num
 * @text Offset X
 * @parent Turns
 * @desc Offset the X position of the turn display.
 * @default -4
 *
 * @param TurnOffsetY:num
 * @text Offset Y
 * @parent Turns
 * @desc Offset the Y position of the turn display.
 * @default -6
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param ColorNeutral:str
 * @text Turn Color: Neutral
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorPositive:str
 * @text Turn Color: Positive
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorNegative:str
 * @text Turn Color: Negative
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param Data
 * @text Data Display
 *
 * @param ShowData:eval
 * @text Show Data?
 * @parent Data
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display state data on top of window icons and sprites?
 * @default true
 *
 * @param DataFontSize:num
 * @text Data Font Size
 * @parent Data
 * @type number
 * @min 1
 * @desc Font size used for displaying state data.
 * @default 12
 *
 * @param DataOffsetX:num
 * @text Offset X
 * @parent Data
 * @desc Offset the X position of the state data display.
 * @default 0
 *
 * @param DataOffsetY:num
 * @text Offset Y
 * @parent Data
 * @desc Offset the Y position of the state data display.
 * @default 8
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param onAddStateJS:func
 * @text JS: On Add State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state is added.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseStateJS:func
 * @text JS: On Erase State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state is erased.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireStateJS:func
 * @text JS: On Expire State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state has expired.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * General Buff/Debuff Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Buffs:
 *
 * @param General
 *
 * @param ReapplyRules:str
 * @text Reapply Rules
 * @parent General
 * @type select
 * @option Ignore: Buff/Debuff doesn't get added.
 * @value ignore
 * @option Reset: Turns get reset.
 * @value reset
 * @option Greater: Turns take greater value (current vs reset).
 * @value greater
 * @option Add: Turns add upon existing turns.
 * @value add
 * @desc These are the rules when reapplying buffs/debuffs.
 * @default greater
 *
 * @param MaxTurns:num
 * @text Maximum Turns
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of turns to let buffs and debuffs go up to.
 * @default 9999
 *
 * @param Stacking
 *
 * @param StackBuffMax:num
 * @text Max Stacks: Buff
 * @parent Stacking
 * @type number
 * @min 1
 * @desc Maximum number of stacks for buffs.
 * @default 2
 *
 * @param StackDebuffMax:num
 * @text Max Stacks: Debuff
 * @parent Stacking
 * @type number
 * @min 1
 * @desc Maximum number of stacks for debuffs.
 * @default 2
 *
 * @param MultiplierJS:func
 * @text JS: Buff/Debuff Rate
 * @parent Stacking
 * @type note
 * @desc Code to determine how much buffs and debuffs affect parameters.
 * @default "// Declare Variables\nconst user = this;\nconst paramId = arguments[0];\nconst buffLevel = arguments[1];\nlet rate = 1;\n\n// Perform Calculations\nrate += buffLevel * 0.25;\n\n// Return Rate\nreturn Math.max(0, rate);"
 *
 * @param Turns
 * @text Turns Display
 *
 * @param ShowTurns:eval
 * @text Show Turns?
 * @parent Turns
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display buff and debuff turns on top of window icons and sprites?
 * @default true
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @type number
 * @min 1
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param TurnOffsetX:num
 * @text Offset X
 * @parent Turns
 * @desc Offset the X position of the turn display.
 * @default -4
 *
 * @param TurnOffsetY:num
 * @text Offset Y
 * @parent Turns
 * @desc Offset the Y position of the turn display.
 * @default -6
 *
 * @param ColorBuff:str
 * @text Turn Color: Buffs
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorDebuff:str
 * @text Turn Color: Debuffs
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param Data
 * @text Rate Display
 *
 * @param ShowData:eval
 * @text Show Rate?
 * @parent Data
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display buff and debuff rate on top of window icons and sprites?
 * @default false
 *
 * @param DataFontSize:num
 * @text Rate Font Size
 * @parent Data
 * @type number
 * @min 1
 * @desc Font size used for displaying rate.
 * @default 12
 *
 * @param DataOffsetX:num
 * @text Offset X
 * @parent Data
 * @desc Offset the X position of the rate display.
 * @default 0
 *
 * @param DataOffsetY:num
 * @text Offset Y
 * @parent Data
 * @desc Offset the Y position of the rate display.
 * @default 8
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param onAddBuffJS:func
 * @text JS: On Add Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff is added.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onAddDebuffJS:func
 * @text JS: On Add Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff is added.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseBuffJS:func
 * @text JS: On Erase Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff is erased.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseDebuffJS:func
 * @text JS: On Erase Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff is erased.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireBuffJS:func
 * @text JS: On Expire Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff has expired.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireDebuffJS:func
 * @text JS: On Expire Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff has expired.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Passive State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PassiveStates:
 *
 * @param List
 *
 * @param Global:arraynum
 * @text Global Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect actors and enemies.
 * @default []
 *
 * @param Actor:arraynum
 * @text Actor-Only Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect actors only.
 * @default []
 *
 * @param Enemy:arraynum
 * @text Enemy Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect enemies only.
 * @default []
 *
 * @param Cache
 *
 * @param RefreshCacheSwitch:eval
 * @text Switch Refresh?
 * @parent Cache
 * @type boolean
 * @on Refresh
 * @off No Changes
 * @desc Refresh all battle members when switches are changed in battle?
 * @default false
 *
 * @param RefreshCacheVar:eval
 * @text Variable Refresh?
 * @parent Cache
 * @type boolean
 * @on Refresh
 * @off No Changes
 * @desc Refresh all battle members when variables are changed in battle?
 * @default false
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param PassiveConditionJS:func
 * @text JS: Condition Check
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide passive condition check.
 * @default "// Declare Variables\nconst state = arguments[0];\nconst stateId = state.id;\nconst user = this;\nconst target = this;\nconst a = this;\nconst b = this;\nlet condition = true;\n\n// Perform Checks\n\n\n// Return boolean\nreturn condition;"
 *
 */
//=============================================================================

const _0x263190=_0x9fca;(function(_0x5010d8,_0x5e9720){const _0x2ed9d0=_0x9fca,_0x203fba=_0x5010d8();while(!![]){try{const _0x308841=parseInt(_0x2ed9d0(0x259))/0x1*(-parseInt(_0x2ed9d0(0x112))/0x2)+parseInt(_0x2ed9d0(0x1c5))/0x3*(parseInt(_0x2ed9d0(0x2ed))/0x4)+-parseInt(_0x2ed9d0(0x38d))/0x5*(-parseInt(_0x2ed9d0(0x262))/0x6)+parseInt(_0x2ed9d0(0x273))/0x7+-parseInt(_0x2ed9d0(0x17e))/0x8+-parseInt(_0x2ed9d0(0x31f))/0x9+parseInt(_0x2ed9d0(0x139))/0xa;if(_0x308841===_0x5e9720)break;else _0x203fba['push'](_0x203fba['shift']());}catch(_0x291712){_0x203fba['push'](_0x203fba['shift']());}}}(_0x4f8e,0x3ba05));function _0x4f8e(){const _0x24ba8c=['gaugeRate','Game_Battler_isStateAddable','getSkillIdWithName','convertGaugeTypeSkillsStatesCore','updateVisibility','labelFontSize','Param','applyStateCategoryRemovalEffects','success','isUseSkillsStatesCoreUpdatedLayout','clearStateDisplay','updateCommandNameWindow','Window_StatusBase_drawActorIcons','Settings','canSortSkillTypeList','maxCols','Game_Battler_onBattleEnd','Game_Battler_addBuff','callUpdateHelp','DataOffsetY','registerCommand','AutoAddState','enemyId','stateEraseJS','Game_BattlerBase_traitsSet','stateMpSlipHealJS','onAddDebuff','keys','Actor','refresh','_buffTurns','Window_SkillStatus_refresh','ActionEndUpdate','concat','StackDebuffMax','_cache_getPassiveStateConditionSwitchData','onBattleEnd','isStateCategoryAffected','split','Parse_Notetags_State_ApplyRemoveLeaveJS','setup','_scene','itemWindowRectSkillsStatesCore','Game_Actor_forgetSkill','drawSkillCost','process_VisuMZ_SkillsStatesCore_Notetags','itemTextAlign','addCommand','addDebuff','isUseModernControls','getCurrentStateActiveUser','Game_Variables_onChange','_statusWindow','replace','VisuMZ_0_CoreEngine','helpWindowRect','active','Window_SkillList_maxCols','buff','Game_Action_applyItemUserEffect','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_stateTurns','bypassRemoveStatesByDamage','applySkillsStatesCoreEffects','recoverAll','_stateOrigin','CheckVisibleBattleNotetags','ceil','clearStateOrigin','MDF','Scene_Skill_createItemWindow','EnableLayout','passiveStates','multiclasses','createPassiveStatesCache','drawActorBuffTurns','applyItemUserEffect','SkillMenuStatusRect','constructor','_skillChangesFromState','TurnFontSize','onRemoveState','canUse','text','debuffTurns','toLowerCase','untitled','getStateIdWithName','LayoutStyle','stateExpireJS','indexOf','_cache','isStateAffected','Skill-%1-%2','stateMaximumTurns','onAddStateMakeCustomSlipValues','stateMpSlipDamageJS','isDebuffAffected','drawActorStateTurns','ATK','toUpperCase','drawItem','isStateResist','actor','SortByIDandPriority','fontFace','removeStatesByCategoryAll','passiveStateObjects','onExpireStateGlobalJS','gradientFillRect','map','width','107071mxfcCC','fillRect','redraw','ParseStateNotetags','statusWindowRect','isActor','updateFrame','currentDisplayedValue','SkillID','3558TwWHnO','onRegenerateCustomStateDamageOverTime','setStateData','addState','Scene_Skill_itemWindowRect','MatchLabelColor','addBuff','rgba(0,\x200,\x200,\x200)','length','Game_Actor_learnSkill','MAXHP','equipBattleSkills','actorId','RefreshCacheSwitch','skill','commandStyleCheck','DataFontSize','386855orPPDn','createSkillCostText','ParseSkillChangessIntoData','calcWindowHeight','setItem','buttonAssistText1','windowPadding','mainAreaTop','skillVisibleJS','currentValueSkillsStatesCore','Sprite_Gauge_currentValue','Game_Troop_setup','getColorDataFromPluginParameters','Armor-%1-%2','paramBuffRate','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','resetStateCounts','debuffColor','changePaintOpacity','anySwitchOff','number','overwriteBuffTurns','setStateRetainType','process_VisuMZ_SkillsStatesCore_Skill_Notetags','clearStates','isRightInputMode','canClearState','prepareResetStateCounts','buffColor','ARRAYJSON','%1\x20%2\x20%3','CheckVisibleSwitchNotetags','_stored_state-%1-color','Window_SkillList_updateHelp','inBattle','changeTextColor','skillMpCost','hasStateCategory','CalcJS','allowCreateShopStatusWindow','Sprite_Gauge_currentMaxValue','RefreshCacheVar','isSkillCostShown','Window_SkillList_makeItemList','TurnOffsetX','meetsStateCondition','ParseClassIDs','equips','buffTurns','_stateData','_checkingPassiveStates','PassiveConditionJS','ColorBuff','menuActor','VisuMZ_1_ItemsEquipsCore','stateColor','Enemy-%1-%2','floor','mainFontFace','Sprite_Gauge_redraw','textColor','_checkingVisuMzPassiveStateObjects','MultiplierJS','_commandNameWindow','round','Scene_Skill_statusWindowRect','Global','chanceByDamage','version','process_VisuMZ_SkillsStatesCore_State_Notetags','DEF','totalStateCategory','isStateCategoryResisted','buttonAssistSwitch','onEraseBuff','Parse_Notetags_Skill_Sorting','onExpireBuffJS','removeOtherStatesOfSameCategory','GroupDigits','Actor-%1-%2','LabelFontMainType','resetFontSettings','_cache_getPassiveStatesFromObj','format','commandStyle','createItemWindow','DataOffsetX','clearStateRetainType','lineHeight','note','placeGauge','TextJS','Sprite_Gauge_setup','initMembersSkillsStatesCore','Skills','isCommandEnabled','status','setStateTurns','AGI','_stateIDs','getSkillTypes','onAddDebuffJS','ParseAllNotetags','paySkillCost','<troop-%1>','Game_BattlerBase_buffIconIndex','right','Enemy','innerWidth','Window_StatusBase_placeGauge','Parse_Notetags_State_Category','getStateRetainType','_currentTroopUniqueID','isLearnedSkill','Sprite_Gauge_initMembers','#%1','_cache_getPassiveStateConditionClassesData','StateTurnsEnemyChangeTo','Weapon-%1-%2','_tempActor','Parse_Notetags_Skill_Cost','_stypeId','4Utxsoy','drawText','updateStateTurns','hasState','Game_BattlerBase_states','drawExtendedSkillsStatesCoreStatus','HiddenSkillTypes','applyDebuffTurnManipulationEffects','randomInt','StateTurnsActorChangeBy','clear','Game_Switches_onChange','onExpireDebuffJS','Scene_Skill_helpWindowRect','localeCompare','Gauge','addPassiveStatesTraitSets','updatedLayoutStyle','PresetLabelGaugeColor','isStateExpired','onEraseStateGlobalJS','Parse_Notetags_State_PassiveJS','onExpireBuff','buffLength','onEraseStateJS','removeByDamage','makeSuccess','testApply','addWindow','onEraseDebuff','parse','removeState','applyBuffTurnManipulationEffects','traitObjects','ValueFontMainType','currentMaxValue','auto','createTurnDisplaySprite','makeCurrentTroopUniqueID','getSkillChangesFromState','statusWidth','stypeId','_subject','onDatabaseLoaded','setupSkillsStatesCore','stateAddJS','onAddStateCustomJS','_skills','getPassiveStatesFromObj','slipHp','3257037mxtoLd','isBottomHelpMode','labelOutlineColor','redrawSkillsStatesCore','POSITIVE','onExpireState','addStateTurns','createCommandNameWindow','drawItemStyleIcon','TurnOffsetY','labelColor','Window_SkillList_drawItem','_stateRetainType','States','onExpireStateJS','prototype','stateTurns','isGroupDefeatStateAffected','LabelOutlineSolid','adjustSkillCost','maxItems','meetsPassiveStateConditionJS','increaseBuff','makeCommandName','itemLineRect','call','damage','checkShowHideNotetags','onAddState','mpCost','categories','JSON','\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20origin\x20=\x20this.getStateOrigin(stateId);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20state\x20=\x20$dataStates[stateId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this.getCurrentStateActiveUser();\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','NEGATIVE','_skillIDs','drawParamText','priority','updateStatesActionEnd','getStateData','testSkillStatesCoreNotetags','SkillActorPaySkillCost','Class-%1-%2','Sprite_Gauge_gaugeRate','FUNC','_costSettings','getStateOriginByKey','SortSkillTypesAbc','boxWidth','endAction','tpCost','heal','_stored_debuffColor','ignore','mainCommandWidth','Parse_Notetags_State_SlipEffectJS','uiMenuStyle','onExpireDebuff','_lastStatesActionEndFrameCount','checkShowHideJS','commandNameWindowDrawText','statePassiveConditionJS','adjustItemWidthByShopStatus','_itemWindow','SkillSceneAdjustSkillList','gainHp','Scene_Boot_onDatabaseLoaded','CmdTextAlign','stateCategoriesResisted','setStatusWindow','drawActorBuffRates','initialize','clearStateData','skillTpCost','StackBuffMax','convertPassiveStates','makeResistedStateCategories','removeStatesAuto','isAllDead','value','iconWidth','onChange','<member-%1>','Game_BattlerBase_refresh','ColorPositive','uiInputPosition','height','isBuffExpired','_checkingTraitsSetSkillsStatesCore','aliveMembers','ShowShopStatus','setActor','meetsSkillConditionsGlobalJS','trim','LUK','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20visible\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','drawTextEx','addPassiveStatesByNotetag','_battler','onExpireBuffGlobalJS','includes','isPassiveStateStackable','user','hpDamage','State-%1-%2','Window_SkillList_setActor','STR','shopStatusWidth','Game_Battler_addState','%1%','ShowTurns','3750kzRPmF','removeBuffsAuto','drawActorStateData','MatchLabelGaugeColor','onExpireStateCustomJS','groupDefeat','icon','sort','stepsForTurn','checkSkillTypeMatch','Game_Unit_isAllDead','commandNameWindowDrawBackground','GaugeCurrentJS','meetsPassiveStateConditionSwitches','_categoryWindow','death','_result','restriction','ColorNegative','Game_BattlerBase_initMembers','changeSkillsThroughStateEffects','includesSkillsStatesCore','Game_BattlerBase_isStateResist','canChangeSkillsThroughStateEffects','getStypeIdWithName','onAddDebuffGlobalJS','createShopStatusWindow','Sprite_StateIcon_loadBitmap','getCurrentTroopUniqueID','onAddStateGlobalJS','hide','checkCacheKey','changeOutlineColor','outlineColor','enemy','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20condition\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20condition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','recover\x20all','_skillTypeWindow','fontSize','useDigitGrouping','ANY','Game_BattlerBase_eraseState','MAXMP','BattleHiddenSkillTypes','CmdStyle','setBackgroundType','ShowJS','_tempBattler','Game_BattlerBase_increaseBuff','_buffs','resetTextColor','_actor','removeBuff','_animationIndex','stateTpSlipDamageJS','eraseState','skillCostSeparator','isPartyAllAffectedByGroupDefeatStates','bitmap','multiClass','regenerateAll','CanPayJS','retrieveStateColor','Window_SkillList_includes','slipTp','setStateDisplay','members','removeStatesByCategory','alterSkillName','onExpireDebuffGlobalJS','clearStatesWithStateRetain','valueFontFace','CmdWidth','autoRemovalTiming','fontBold','slice','currentClass','PassiveStates','_stypeIDs','Parse_Notetags_Skill_JS','statusWindowRectSkillsStatesCore','Scene_Skill_skillTypeWindowRect','Game_BattlerBase_clearStates','drawExtendedParameter','getPassiveStateConditionClassesData','2NGgpuT','stateTpSlipHealJS','gaugeLineHeight','CoreEngine','_stored_buffColor','allSwitchOn','colSpacing','meetsSkillConditionsEnableJS','_stateMaxTurns','CheckIncompatibleStates','getPassiveStateConditionSwitchData','_turnDisplaySprite','isMaxDebuffAffected','none','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','StateTurnsActorChangeTo','eraseBuff','makeItemList','contents','Game_BattlerBase_eraseBuff','push','drawIcon','updateHelp','Game_BattlerBase_resetStateCounts','setStateOrigin','ListWindowCols','StateTurnsEnemyChangeBy','drawActorIcons','skillTypeWindowRectSkillsStatesCore','makeAdditionalSkillCostText','states','scrollTo','totalStateCategoryAffected','mainAreaHeight','addPassiveStates','IconStypeMagic','initMembers','onEraseBuffJS','equipPassives','1673810ShUdYJ','Game_BattlerBase_die','isSceneBattle','isBuffAffected','updateTurnDisplaySprite','VisuMZ_2_ClassChangeSystem','Game_BattlerBase_recoverAll','SortByIDandPriorityUsingIDs','getClassIdWithName','_currentActor','Sprite_StateIcon_updateFrame','stateHpSlipDamageJS','log','itemAt','textSizeEx','_colorCache','Name','valueOutlineWidth','addChild','Buffs','Game_Battler_regenerateAll','setPassiveStateSlipDamageJS','anchor','clamp','isMaxBuffAffected','clearAllStateOrigins','isSkillHidden','shopStatusWindowRectSkillsStatesCore','setBuffTurns','MaxTurns','anySwitchOn','addDebuffTurns','helpAreaTop','filter','meetsPassiveStateConditions','currentValue','shopStatusWindowRect','skillId','_stateSteps','ActorIDs','addPassiveStatesFromOtherPlugins','TurnEndOnMap','ParseSkillNotetags','_classIDs','Game_Action_testApply','currentMaxValueSkillsStatesCore','makeCommandList','setDebuffTurns','slipMp','stateId','canPaySkillCost','traitsSet','ValueOutlineSolid','drawFullGauge','_passiveStateResults','IconStypeNorm','onEraseDebuffGlobalJS','gainSilentTp','ReapplyRules','applyStateTurnManipulationEffects','labelOutlineWidth','buffIconIndex','mainFontSize','onAddBuff','isSkillUsableForAutoBattle','max','ARRAYSTRUCT','helpAreaHeight','labelFontFace','2982896ZrEERO','Game_BattlerBase_skillMpCost','passiveStateIDs','statesByCategory','shift','reset','SkillSceneStatusBgType','onEraseBuffGlobalJS','normalColor','numberFontFace','remove','_stateDisplay','isStateAddable','rgba(0,\x200,\x200,\x201)','add','Game_BattlerBase_overwriteBuffTurns','isStateRestrict','iconHeight','EnemyIndex','exit','helpWindowRectSkillsStatesCore','checkSkillConditionsNotetags','CheckVisibleSkillNotetags','getStateReapplyRulings','sortPriority','_data','decreaseBuff','BattleManager_endAction','regenerateAllSkillsStatesCore','iconIndex','skillEnableJS','Game_Actor_skillTypes','createKeyJS','SkillEnemyPaySkillCost','LabelOutlineWidth','match','actions','item','meetsPassiveStateGlobalConditionJS','isPlaytest','onEraseStateCustomJS','test','GaugeMaxJS','frameCount','createAllSkillCostText','hasSkill','getStateOrigin','skills','name','itemWindowRect','VisuMZ_1_MainMenuCore','learnSkill','_states','Item-%1-%2','isSkillTypeMatchForUse','Turns','die','sortSkillList','deadMembers','Game_BattlerBase_meetsSkillConditions','recalculateSlipDamageJS','addBuffTurns','maxSlipDamage','<actor-%1>','convertTargetToStateOriginKey','addPassiveStatesByPluginParameters','ShowData','Game_Unit_deadMembers','Game_Battler_addDebuff','ARRAYSTR','StateID','1255977myidHh','meetsPassiveStateConditionClasses','index','forgetSkill','getStateDisplay','Costs','commandName','valueOutlineColor','Game_BattlerBase_skillTpCost','getCurrentStateOriginKey','onEraseDebuffJS','_endingBattle','ColorDebuff','placeExactGauge','meetsSkillConditions','SkillsStatesCore','skillTypes','description','uiHelpPosition','skillTypeWindowRect','SkillConditionJS','ConvertParams','_shopStatusWindow','<enemy-%1>','iconText','ALL','MAT','allSwitchOff','gaugeBackColor','Game_BattlerBase_decreaseBuff','magicSkills','action','gaugeColor1','getColor','stateData','center'];_0x4f8e=function(){return _0x24ba8c;};return _0x4f8e();}var label=_0x263190(0x1d4),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x263190(0x15a)](function(_0x44e9e6){const _0x3b6952=_0x263190;return _0x44e9e6[_0x3b6952(0x2d3)]&&_0x44e9e6[_0x3b6952(0x1d6)][_0x3b6952(0x382)]('['+label+']');})[0x0];function _0x9fca(_0x47c42b,_0x547e91){const _0x4f8e13=_0x4f8e();return _0x9fca=function(_0x9fca19,_0xd03087){_0x9fca19=_0x9fca19-0xcd;let _0x2e7abf=_0x4f8e13[_0x9fca19];return _0x2e7abf;},_0x9fca(_0x47c42b,_0x547e91);}VisuMZ[label]['Settings']=VisuMZ[label][_0x263190(0x1f6)]||{},VisuMZ[_0x263190(0x1da)]=function(_0x7584b8,_0x2dd3c8){const _0xcf5a1b=_0x263190;for(const _0x2ce7ae in _0x2dd3c8){if(_0x2ce7ae[_0xcf5a1b(0x1a1)](/(.*):(.*)/i)){const _0x3aa6e7=String(RegExp['$1']),_0x449eae=String(RegExp['$2'])['toUpperCase']()[_0xcf5a1b(0x37b)]();let _0x5f01b7,_0x1d8bba,_0x45c636;switch(_0x449eae){case'NUM':_0x5f01b7=_0x2dd3c8[_0x2ce7ae]!==''?Number(_0x2dd3c8[_0x2ce7ae]):0x0;break;case'ARRAYNUM':_0x1d8bba=_0x2dd3c8[_0x2ce7ae]!==''?JSON['parse'](_0x2dd3c8[_0x2ce7ae]):[],_0x5f01b7=_0x1d8bba[_0xcf5a1b(0x257)](_0x2deeda=>Number(_0x2deeda));break;case'EVAL':_0x5f01b7=_0x2dd3c8[_0x2ce7ae]!==''?eval(_0x2dd3c8[_0x2ce7ae]):null;break;case'ARRAYEVAL':_0x1d8bba=_0x2dd3c8[_0x2ce7ae]!==''?JSON['parse'](_0x2dd3c8[_0x2ce7ae]):[],_0x5f01b7=_0x1d8bba[_0xcf5a1b(0x257)](_0x43188b=>eval(_0x43188b));break;case _0xcf5a1b(0x33e):_0x5f01b7=_0x2dd3c8[_0x2ce7ae]!==''?JSON[_0xcf5a1b(0x30b)](_0x2dd3c8[_0x2ce7ae]):'';break;case _0xcf5a1b(0x290):_0x1d8bba=_0x2dd3c8[_0x2ce7ae]!==''?JSON[_0xcf5a1b(0x30b)](_0x2dd3c8[_0x2ce7ae]):[],_0x5f01b7=_0x1d8bba[_0xcf5a1b(0x257)](_0x31385d=>JSON['parse'](_0x31385d));break;case _0xcf5a1b(0x34a):_0x5f01b7=_0x2dd3c8[_0x2ce7ae]!==''?new Function(JSON[_0xcf5a1b(0x30b)](_0x2dd3c8[_0x2ce7ae])):new Function('return\x200');break;case'ARRAYFUNC':_0x1d8bba=_0x2dd3c8[_0x2ce7ae]!==''?JSON[_0xcf5a1b(0x30b)](_0x2dd3c8[_0x2ce7ae]):[],_0x5f01b7=_0x1d8bba[_0xcf5a1b(0x257)](_0x474cbf=>new Function(JSON[_0xcf5a1b(0x30b)](_0x474cbf)));break;case _0xcf5a1b(0x388):_0x5f01b7=_0x2dd3c8[_0x2ce7ae]!==''?String(_0x2dd3c8[_0x2ce7ae]):'';break;case _0xcf5a1b(0x1c3):_0x1d8bba=_0x2dd3c8[_0x2ce7ae]!==''?JSON[_0xcf5a1b(0x30b)](_0x2dd3c8[_0x2ce7ae]):[],_0x5f01b7=_0x1d8bba[_0xcf5a1b(0x257)](_0x4f3f16=>String(_0x4f3f16));break;case'STRUCT':_0x45c636=_0x2dd3c8[_0x2ce7ae]!==''?JSON[_0xcf5a1b(0x30b)](_0x2dd3c8[_0x2ce7ae]):{},_0x7584b8[_0x3aa6e7]={},VisuMZ[_0xcf5a1b(0x1da)](_0x7584b8[_0x3aa6e7],_0x45c636);continue;case _0xcf5a1b(0x17b):_0x1d8bba=_0x2dd3c8[_0x2ce7ae]!==''?JSON['parse'](_0x2dd3c8[_0x2ce7ae]):[],_0x5f01b7=_0x1d8bba[_0xcf5a1b(0x257)](_0x3a1560=>VisuMZ['ConvertParams']({},JSON[_0xcf5a1b(0x30b)](_0x3a1560)));break;default:continue;}_0x7584b8[_0x3aa6e7]=_0x5f01b7;}}return _0x7584b8;},(_0x48f928=>{const _0x5d621d=_0x263190,_0x57dac0=_0x48f928[_0x5d621d(0x1ae)];for(const _0x44abe0 of dependencies){if(!Imported[_0x44abe0]){alert(_0x5d621d(0x282)[_0x5d621d(0x2c6)](_0x57dac0,_0x44abe0)),SceneManager[_0x5d621d(0x191)]();break;}}const _0x1bdd51=_0x48f928[_0x5d621d(0x1d6)];if(_0x1bdd51['match'](/\[Version[ ](.*?)\]/i)){const _0x5e91f9=Number(RegExp['$1']);_0x5e91f9!==VisuMZ[label][_0x5d621d(0x2b7)]&&(alert(_0x5d621d(0x120)[_0x5d621d(0x2c6)](_0x57dac0,_0x5e91f9)),SceneManager['exit']());}if(_0x1bdd51['match'](/\[Tier[ ](\d+)\]/i)){const _0xae50e4=Number(RegExp['$1']);_0xae50e4<tier?(alert(_0x5d621d(0x225)[_0x5d621d(0x2c6)](_0x57dac0,_0xae50e4,tier)),SceneManager[_0x5d621d(0x191)]()):tier=Math[_0x5d621d(0x17a)](_0xae50e4,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x5d621d(0x1f6)],_0x48f928['parameters']);})(pluginData),PluginManager['registerCommand'](pluginData['name'],_0x263190(0x347),_0x3671d5=>{const _0xdde605=_0x263190;VisuMZ[_0xdde605(0x1da)](_0x3671d5,_0x3671d5);const _0x498521=_0x3671d5[_0xdde605(0x160)]||[],_0x49757e=Number(_0x3671d5[_0xdde605(0x261)]),_0x4cca90=$dataSkills[_0x49757e];if(!_0x4cca90)return;for(const _0x1bbb13 of _0x498521){const _0x18c758=$gameActors[_0xdde605(0x250)](_0x1bbb13);if(!_0x18c758)continue;_0x18c758[_0xdde605(0x2da)](_0x4cca90);}}),PluginManager[_0x263190(0x1fd)](pluginData[_0x263190(0x1ae)],_0x263190(0x19f),_0x2197fd=>{const _0x2c4759=_0x263190;VisuMZ[_0x2c4759(0x1da)](_0x2197fd,_0x2197fd);const _0x3937b0=_0x2197fd[_0x2c4759(0x190)]||[],_0x24d8de=Number(_0x2197fd[_0x2c4759(0x261)]),_0x1bb815=$dataSkills[_0x24d8de];if(!_0x1bb815)return;for(const _0x4ee970 of _0x3937b0){const _0x29480f=$gameTroop[_0x2c4759(0xff)]()[_0x4ee970];if(!_0x29480f)continue;_0x29480f[_0x2c4759(0x2da)](_0x1bb815);}}),PluginManager['registerCommand'](pluginData[_0x263190(0x1ae)],_0x263190(0x2f6),_0x7403a9=>{const _0x2e6f01=_0x263190;VisuMZ[_0x2e6f01(0x1da)](_0x7403a9,_0x7403a9);const _0xba463=_0x7403a9[_0x2e6f01(0x160)]||[],_0x5b5070=Number(_0x7403a9[_0x2e6f01(0x1c4)]),_0x2e67be=Number(_0x7403a9['Turns']),_0x7edb19=_0x7403a9['AutoAddState'];for(const _0x21f928 of _0xba463){const _0x2ce378=$gameActors[_0x2e6f01(0x250)](_0x21f928);if(!_0x2ce378)continue;_0x7edb19&&!_0x2ce378[_0x2e6f01(0x245)](_0x5b5070)?(_0x2ce378['addState'](_0x5b5070),_0x2ce378['setStateTurns'](_0x5b5070,_0x2e67be)):_0x2ce378[_0x2e6f01(0x325)](_0x5b5070,_0x2e67be);}}),PluginManager[_0x263190(0x1fd)](pluginData[_0x263190(0x1ae)],_0x263190(0x121),_0x474335=>{const _0xc8d900=_0x263190;VisuMZ['ConvertParams'](_0x474335,_0x474335);const _0x58102e=_0x474335[_0xc8d900(0x160)]||[],_0x163159=Number(_0x474335[_0xc8d900(0x1c4)]),_0x10f39d=Math[_0xc8d900(0x17a)](Number(_0x474335['Turns']),0x0),_0x2cf71c=_0x474335[_0xc8d900(0x1fe)];for(const _0x31f172 of _0x58102e){const _0x55ad9e=$gameActors[_0xc8d900(0x250)](_0x31f172);if(!_0x55ad9e)continue;_0x2cf71c&&!_0x55ad9e[_0xc8d900(0x245)](_0x163159)&&_0x55ad9e[_0xc8d900(0x265)](_0x163159),_0x55ad9e[_0xc8d900(0x2d4)](_0x163159,_0x10f39d);}}),PluginManager[_0x263190(0x1fd)](pluginData[_0x263190(0x1ae)],_0x263190(0x12c),_0x5b5c1b=>{const _0x427160=_0x263190;if(!$gameParty[_0x427160(0x295)]())return;VisuMZ[_0x427160(0x1da)](_0x5b5c1b,_0x5b5c1b);const _0x23953c=_0x5b5c1b[_0x427160(0x190)]||[],_0xc907c=Number(_0x5b5c1b[_0x427160(0x1c4)]),_0x486e30=Number(_0x5b5c1b['Turns']),_0x387cec=_0x5b5c1b[_0x427160(0x1fe)];for(const _0x410f21 of _0x23953c){const _0x5c9784=$gameTroop[_0x427160(0xff)]()[_0x410f21];if(!_0x5c9784)continue;_0x387cec&&!_0x5c9784[_0x427160(0x245)](_0xc907c)?(_0x5c9784[_0x427160(0x265)](_0xc907c),_0x5c9784[_0x427160(0x2d4)](_0xc907c,_0x486e30)):_0x5c9784[_0x427160(0x325)](_0xc907c,_0x486e30);}}),PluginManager['registerCommand'](pluginData[_0x263190(0x1ae)],_0x263190(0x2e8),_0x4a7f99=>{const _0x44a710=_0x263190;if(!$gameParty['inBattle']())return;VisuMZ[_0x44a710(0x1da)](_0x4a7f99,_0x4a7f99);const _0x4f11ab=_0x4a7f99[_0x44a710(0x190)]||[],_0x5cb460=Number(_0x4a7f99[_0x44a710(0x1c4)]),_0x114070=Math[_0x44a710(0x17a)](Number(_0x4a7f99[_0x44a710(0x1b5)]),0x0),_0x4b1591=_0x4a7f99['AutoAddState'];for(const _0x28fd14 of _0x4f11ab){const _0x1d9ce5=$gameTroop[_0x44a710(0xff)]()[_0x28fd14];if(!_0x1d9ce5)continue;_0x4b1591&&!_0x1d9ce5[_0x44a710(0x245)](_0x5cb460)&&_0x1d9ce5[_0x44a710(0x265)](_0x5cb460),_0x1d9ce5[_0x44a710(0x2d4)](_0x5cb460,_0x114070);}}),VisuMZ['SkillsStatesCore'][_0x263190(0x360)]=Scene_Boot[_0x263190(0x32e)]['onDatabaseLoaded'],Scene_Boot['prototype'][_0x263190(0x318)]=function(){const _0x2f17cb=_0x263190;VisuMZ['SkillsStatesCore'][_0x2f17cb(0x360)][_0x2f17cb(0x338)](this),this['process_VisuMZ_SkillsStatesCore_Notetags'](),VisuMZ['SkillsStatesCore']['CheckIncompatibleStates']();},Scene_Boot[_0x263190(0x32e)][_0x263190(0x216)]=function(){const _0x27194c=_0x263190;if(VisuMZ[_0x27194c(0x2d9)])return;this[_0x27194c(0x28a)](),this[_0x27194c(0x2b8)]();},Scene_Boot[_0x263190(0x32e)][_0x263190(0x28a)]=function(){const _0xc40943=_0x263190;for(const _0x18e9e9 of $dataSkills){if(!_0x18e9e9)continue;VisuMZ[_0xc40943(0x1d4)]['Parse_Notetags_Skill_Cost'](_0x18e9e9),VisuMZ[_0xc40943(0x1d4)][_0xc40943(0x2be)](_0x18e9e9),VisuMZ['SkillsStatesCore'][_0xc40943(0x10c)](_0x18e9e9);}},Scene_Boot['prototype'][_0x263190(0x2b8)]=function(){const _0x1b93f0=_0x263190;for(const _0x150f68 of $dataStates){if(!_0x150f68)continue;VisuMZ['SkillsStatesCore'][_0x1b93f0(0x2e1)](_0x150f68),VisuMZ['SkillsStatesCore'][_0x1b93f0(0x302)](_0x150f68),VisuMZ[_0x1b93f0(0x1d4)][_0x1b93f0(0x355)](_0x150f68),VisuMZ[_0x1b93f0(0x1d4)][_0x1b93f0(0x210)](_0x150f68);}},VisuMZ[_0x263190(0x1d4)]['ParseSkillNotetags']=VisuMZ['ParseSkillNotetags'],VisuMZ[_0x263190(0x163)]=function(_0x1ffa7b){const _0x9f4faa=_0x263190;VisuMZ[_0x9f4faa(0x1d4)][_0x9f4faa(0x163)][_0x9f4faa(0x338)](this,_0x1ffa7b),VisuMZ[_0x9f4faa(0x1d4)][_0x9f4faa(0x2eb)](_0x1ffa7b),VisuMZ[_0x9f4faa(0x1d4)][_0x9f4faa(0x2be)](_0x1ffa7b),VisuMZ[_0x9f4faa(0x1d4)]['Parse_Notetags_Skill_JS'](_0x1ffa7b);},VisuMZ[_0x263190(0x1d4)][_0x263190(0x25c)]=VisuMZ['ParseStateNotetags'],VisuMZ[_0x263190(0x25c)]=function(_0x5c48e9){const _0x3972b2=_0x263190;VisuMZ[_0x3972b2(0x1d4)]['ParseStateNotetags']['call'](this,_0x5c48e9),VisuMZ[_0x3972b2(0x1d4)][_0x3972b2(0x2e1)](_0x5c48e9),VisuMZ['SkillsStatesCore'][_0x3972b2(0x302)](_0x5c48e9),VisuMZ[_0x3972b2(0x1d4)][_0x3972b2(0x355)](_0x5c48e9),VisuMZ[_0x3972b2(0x1d4)][_0x3972b2(0x210)](_0x5c48e9);},VisuMZ[_0x263190(0x1d4)]['Parse_Notetags_Skill_Cost']=function(_0x4ed9f0){const _0x1197d7=_0x263190,_0x549343=_0x4ed9f0[_0x1197d7(0x2cc)];_0x549343['match'](/<MP COST:[ ](\d+)>/i)&&(_0x4ed9f0[_0x1197d7(0x33c)]=Number(RegExp['$1'])),_0x549343['match'](/<TP COST:[ ](\d+)>/i)&&(_0x4ed9f0[_0x1197d7(0x350)]=Number(RegExp['$1']));},VisuMZ[_0x263190(0x1d4)]['Parse_Notetags_Skill_Sorting']=function(_0x56db87){const _0x5f6b9d=_0x263190;if(!_0x56db87)return;_0x56db87['sortPriority']=0x32;const _0x255080=_0x56db87['note']||'';_0x255080[_0x5f6b9d(0x1a1)](/<(?:|ID )SORT(?:|ING)[ ]PRIORITY:[ ](\d+)>/i)&&(_0x56db87['sortPriority']=Number(RegExp['$1']));},VisuMZ['SkillsStatesCore'][_0x263190(0x19c)]={},VisuMZ[_0x263190(0x1d4)]['skillVisibleJS']={},VisuMZ['SkillsStatesCore'][_0x263190(0x10c)]=function(_0x3d4e08){const _0x2946d7=_0x263190,_0x12d73a=_0x3d4e08[_0x2946d7(0x2cc)];if(_0x12d73a[_0x2946d7(0x1a1)](/<JS SKILL ENABLE>\s*([\s\S]*)\s*<\/JS SKILL ENABLE>/i)){const _0x2046e9=String(RegExp['$1']),_0x1510c2='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x2946d7(0x2c6)](_0x2046e9);VisuMZ['SkillsStatesCore'][_0x2946d7(0x19c)][_0x3d4e08['id']]=new Function(_0x2946d7(0x270),_0x1510c2);}if(_0x12d73a[_0x2946d7(0x1a1)](/<JS SKILL VISIBLE>\s*([\s\S]*)\s*<\/JS SKILL VISIBLE>/i)){const _0xd22fc2=String(RegExp['$1']),_0xcb211=_0x2946d7(0x37d)[_0x2946d7(0x2c6)](_0xd22fc2);VisuMZ[_0x2946d7(0x1d4)][_0x2946d7(0x27b)][_0x3d4e08['id']]=new Function(_0x2946d7(0x270),_0xcb211);}},VisuMZ[_0x263190(0x1d4)][_0x263190(0x2e1)]=function(_0x5572dc){const _0x34a459=_0x263190;_0x5572dc['categories']=[_0x34a459(0x1de),_0x34a459(0xe5)];const _0x21c9a6=_0x5572dc[_0x34a459(0x2cc)],_0x4caded=_0x21c9a6[_0x34a459(0x1a1)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x4caded)for(const _0x56db03 of _0x4caded){_0x56db03[_0x34a459(0x1a1)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x1ae972=String(RegExp['$1'])[_0x34a459(0x24d)]()['trim']()[_0x34a459(0x20f)](',');for(const _0x4db9d1 of _0x1ae972){_0x5572dc[_0x34a459(0x33d)][_0x34a459(0x126)](_0x4db9d1['trim']());}}if(_0x21c9a6[_0x34a459(0x1a1)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x3a5f2d=RegExp['$1'][_0x34a459(0x20f)](/[\r\n]+/);for(const _0x57c24c of _0x3a5f2d){_0x5572dc[_0x34a459(0x33d)][_0x34a459(0x126)](_0x57c24c[_0x34a459(0x24d)]()[_0x34a459(0x37b)]());}}_0x21c9a6[_0x34a459(0x1a1)](/<POSITIVE STATE>/i)&&_0x5572dc[_0x34a459(0x33d)][_0x34a459(0x126)](_0x34a459(0x323)),_0x21c9a6[_0x34a459(0x1a1)](/<NEGATIVE STATE>/i)&&_0x5572dc['categories']['push'](_0x34a459(0x340));},VisuMZ[_0x263190(0x1d4)][_0x263190(0x35b)]={},VisuMZ['SkillsStatesCore'][_0x263190(0x302)]=function(_0x446785){const _0x113937=_0x263190,_0x1d6c94=_0x446785['note'];if(_0x1d6c94['match'](/<JS PASSIVE CONDITION>\s*([\s\S]*)\s*<\/JS PASSIVE CONDITION>/i)){const _0x92313f=String(RegExp['$1']),_0x2143e9=_0x113937(0xe0)[_0x113937(0x2c6)](_0x92313f);VisuMZ[_0x113937(0x1d4)][_0x113937(0x35b)][_0x446785['id']]=new Function('state',_0x2143e9);}},VisuMZ[_0x263190(0x1d4)][_0x263190(0x144)]={},VisuMZ['SkillsStatesCore']['stateHpSlipHealJS']={},VisuMZ['SkillsStatesCore'][_0x263190(0x249)]={},VisuMZ[_0x263190(0x1d4)][_0x263190(0x202)]={},VisuMZ[_0x263190(0x1d4)][_0x263190(0xf3)]={},VisuMZ[_0x263190(0x1d4)][_0x263190(0x113)]={},VisuMZ[_0x263190(0x1d4)]['Parse_Notetags_State_SlipEffectJS']=function(_0x5959cc){const _0x6fe422=_0x263190,_0x2c4eb6=_0x5959cc[_0x6fe422(0x2cc)],_0x3855e0='\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20%2\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20origin\x20=\x20this.getStateOrigin(stateId);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20state\x20=\x20$dataStates[stateId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20%2\x20=\x20Math.round(Math.max(0,\x20%2)\x20*\x20%3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20this.setStateData(stateId,\x20\x27%4\x27,\x20%2);\x0a\x20\x20\x20\x20';if(_0x2c4eb6['match'](/<JS HP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS HP SLIP DAMAGE>/i)){const _0x489d6b=String(RegExp['$1']),_0x145336=_0x3855e0[_0x6fe422(0x2c6)](_0x489d6b,_0x6fe422(0x339),-0x1,'slipHp');VisuMZ[_0x6fe422(0x1d4)][_0x6fe422(0x144)][_0x5959cc['id']]=new Function(_0x6fe422(0x16a),_0x145336);}else{if(_0x2c4eb6[_0x6fe422(0x1a1)](/<JS HP SLIP HEAL>\s*([\s\S]*)\s*<\/JS HP SLIP HEAL>/i)){const _0x526b25=String(RegExp['$1']),_0x4b063f=_0x3855e0[_0x6fe422(0x2c6)](_0x526b25,_0x6fe422(0x351),0x1,_0x6fe422(0x31e));VisuMZ['SkillsStatesCore']['stateHpSlipHealJS'][_0x5959cc['id']]=new Function(_0x6fe422(0x16a),_0x4b063f);}}if(_0x2c4eb6['match'](/<JS MP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS MP SLIP DAMAGE>/i)){const _0x4a48b0=String(RegExp['$1']),_0x2aa643=_0x3855e0[_0x6fe422(0x2c6)](_0x4a48b0,_0x6fe422(0x339),-0x1,'slipMp');VisuMZ[_0x6fe422(0x1d4)]['stateMpSlipDamageJS'][_0x5959cc['id']]=new Function('stateId',_0x2aa643);}else{if(_0x2c4eb6[_0x6fe422(0x1a1)](/<JS MP SLIP HEAL>\s*([\s\S]*)\s*<\/JS MP SLIP HEAL>/i)){const _0x39535b=String(RegExp['$1']),_0x40c372=_0x3855e0['format'](_0x39535b,_0x6fe422(0x351),0x1,'slipMp');VisuMZ['SkillsStatesCore'][_0x6fe422(0x202)][_0x5959cc['id']]=new Function(_0x6fe422(0x16a),_0x40c372);}}if(_0x2c4eb6[_0x6fe422(0x1a1)](/<JS TP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS TP SLIP DAMAGE>/i)){const _0xfdaa3f=String(RegExp['$1']),_0x296338=_0x3855e0[_0x6fe422(0x2c6)](_0xfdaa3f,_0x6fe422(0x339),-0x1,'slipTp');VisuMZ[_0x6fe422(0x1d4)][_0x6fe422(0xf3)][_0x5959cc['id']]=new Function(_0x6fe422(0x16a),_0x296338);}else{if(_0x2c4eb6[_0x6fe422(0x1a1)](/<JS TP SLIP HEAL>\s*([\s\S]*)\s*<\/JS TP SLIP HEAL>/i)){const _0x20d8b3=String(RegExp['$1']),_0x1e7da3=_0x3855e0[_0x6fe422(0x2c6)](_0x20d8b3,_0x6fe422(0x351),0x1,_0x6fe422(0xfd));VisuMZ[_0x6fe422(0x1d4)][_0x6fe422(0x113)][_0x5959cc['id']]=new Function(_0x6fe422(0x16a),_0x1e7da3);}}},VisuMZ['SkillsStatesCore'][_0x263190(0x31a)]={},VisuMZ['SkillsStatesCore'][_0x263190(0x200)]={},VisuMZ[_0x263190(0x1d4)][_0x263190(0x242)]={},VisuMZ[_0x263190(0x1d4)]['Parse_Notetags_State_ApplyRemoveLeaveJS']=function(_0x1ea288){const _0x45d8d4=_0x263190,_0x137162=_0x1ea288[_0x45d8d4(0x2cc)],_0x35d44b=_0x45d8d4(0x33f);if(_0x137162[_0x45d8d4(0x1a1)](/<JS ON ADD STATE>\s*([\s\S]*)\s*<\/JS ON ADD STATE>/i)){const _0x236676=String(RegExp['$1']),_0x44ca02=_0x35d44b[_0x45d8d4(0x2c6)](_0x236676);VisuMZ[_0x45d8d4(0x1d4)]['stateAddJS'][_0x1ea288['id']]=new Function(_0x45d8d4(0x16a),_0x44ca02);}if(_0x137162['match'](/<JS ON ERASE STATE>\s*([\s\S]*)\s*<\/JS ON ERASE STATE>/i)){const _0x2fabc9=String(RegExp['$1']),_0x27169a=_0x35d44b[_0x45d8d4(0x2c6)](_0x2fabc9);VisuMZ[_0x45d8d4(0x1d4)][_0x45d8d4(0x200)][_0x1ea288['id']]=new Function(_0x45d8d4(0x16a),_0x27169a);}if(_0x137162[_0x45d8d4(0x1a1)](/<JS ON EXPIRE STATE>\s*([\s\S]*)\s*<\/JS ON EXPIRE STATE>/i)){const _0x1037d9=String(RegExp['$1']),_0x4e3778=_0x35d44b[_0x45d8d4(0x2c6)](_0x1037d9);VisuMZ[_0x45d8d4(0x1d4)][_0x45d8d4(0x242)][_0x1ea288['id']]=new Function(_0x45d8d4(0x16a),_0x4e3778);}},VisuMZ[_0x263190(0x1d4)][_0x263190(0x11b)]=function(){const _0xb4e73d=_0x263190;if(!VisuMZ[_0xb4e73d(0x1d4)][_0xb4e73d(0x1f6)][_0xb4e73d(0x32c)]['ActionEndUpdate'])return;for(const _0x679c87 of $dataStates){if(!_0x679c87)continue;_0x679c87[_0xb4e73d(0xce)]===0x4&&_0x679c87[_0xb4e73d(0x106)]===0x1&&(_0x679c87[_0xb4e73d(0x106)]=0x2);}},VisuMZ[_0x263190(0x1d4)]['createKeyJS']=function(_0x53b03c,_0x203033){const _0x2ee538=_0x263190;if(VisuMZ[_0x2ee538(0x19e)])return VisuMZ['createKeyJS'](_0x53b03c,_0x203033);let _0x5042f7='';if($dataActors[_0x2ee538(0x382)](_0x53b03c))_0x5042f7=_0x2ee538(0x2c2)['format'](_0x53b03c['id'],_0x203033);if($dataClasses[_0x2ee538(0x382)](_0x53b03c))_0x5042f7=_0x2ee538(0x348)[_0x2ee538(0x2c6)](_0x53b03c['id'],_0x203033);if($dataSkills[_0x2ee538(0x382)](_0x53b03c))_0x5042f7=_0x2ee538(0x246)[_0x2ee538(0x2c6)](_0x53b03c['id'],_0x203033);if($dataItems[_0x2ee538(0x382)](_0x53b03c))_0x5042f7=_0x2ee538(0x1b3)['format'](_0x53b03c['id'],_0x203033);if($dataWeapons['includes'](_0x53b03c))_0x5042f7=_0x2ee538(0x2e9)[_0x2ee538(0x2c6)](_0x53b03c['id'],_0x203033);if($dataArmors[_0x2ee538(0x382)](_0x53b03c))_0x5042f7=_0x2ee538(0x280)[_0x2ee538(0x2c6)](_0x53b03c['id'],_0x203033);if($dataEnemies[_0x2ee538(0x382)](_0x53b03c))_0x5042f7=_0x2ee538(0x2ab)['format'](_0x53b03c['id'],_0x203033);if($dataStates[_0x2ee538(0x382)](_0x53b03c))_0x5042f7=_0x2ee538(0x386)['format'](_0x53b03c['id'],_0x203033);return _0x5042f7;},DataManager[_0x263190(0x141)]=function(_0x305e8f){const _0xc73243=_0x263190;_0x305e8f=_0x305e8f[_0xc73243(0x24d)]()[_0xc73243(0x37b)](),this[_0xc73243(0x164)]=this['_classIDs']||{};if(this[_0xc73243(0x164)][_0x305e8f])return this[_0xc73243(0x164)][_0x305e8f];for(const _0x36fef4 of $dataClasses){if(!_0x36fef4)continue;let _0x1a18f2=_0x36fef4[_0xc73243(0x1ae)];_0x1a18f2=_0x1a18f2['replace'](/\x1I\[(\d+)\]/gi,''),_0x1a18f2=_0x1a18f2[_0xc73243(0x21e)](/\\I\[(\d+)\]/gi,''),this['_classIDs'][_0x1a18f2[_0xc73243(0x24d)]()['trim']()]=_0x36fef4['id'];}return this[_0xc73243(0x164)][_0x305e8f]||0x0;},DataManager[_0x263190(0x2d7)]=function(_0x5b09cf){const _0x48b805=_0x263190;this[_0x48b805(0x10b)]=this[_0x48b805(0x10b)]||{};if(this[_0x48b805(0x10b)][_0x5b09cf['id']])return this[_0x48b805(0x10b)][_0x5b09cf['id']];this[_0x48b805(0x10b)][_0x5b09cf['id']]=[_0x5b09cf[_0x48b805(0x316)]];if(_0x5b09cf['note'][_0x48b805(0x1a1)](/<SKILL[ ](?:TYPE|TYPES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5dbcd5=JSON[_0x48b805(0x30b)]('['+RegExp['$1'][_0x48b805(0x1a1)](/\d+/g)+']');this[_0x48b805(0x10b)][_0x5b09cf['id']]=this[_0x48b805(0x10b)][_0x5b09cf['id']]['concat'](_0x5dbcd5);}else{if(_0x5b09cf[_0x48b805(0x2cc)][_0x48b805(0x1a1)](/<SKILL[ ](?:TYPE|TYPES):[ ](.*)>/i)){const _0x30ae6f=RegExp['$1'][_0x48b805(0x20f)](',');for(const _0x330d81 of _0x30ae6f){const _0x598f00=DataManager[_0x48b805(0xd5)](_0x330d81);if(_0x598f00)this[_0x48b805(0x10b)][_0x5b09cf['id']][_0x48b805(0x126)](_0x598f00);}}}return this[_0x48b805(0x10b)][_0x5b09cf['id']];},DataManager[_0x263190(0xd5)]=function(_0x6cba1){const _0x4fd5a9=_0x263190;_0x6cba1=_0x6cba1[_0x4fd5a9(0x24d)]()[_0x4fd5a9(0x37b)](),this['_stypeIDs']=this[_0x4fd5a9(0x10b)]||{};if(this[_0x4fd5a9(0x10b)][_0x6cba1])return this[_0x4fd5a9(0x10b)][_0x6cba1];for(let _0x4ffa58=0x1;_0x4ffa58<0x64;_0x4ffa58++){if(!$dataSystem[_0x4fd5a9(0x1d5)][_0x4ffa58])continue;let _0x434e4f=$dataSystem[_0x4fd5a9(0x1d5)][_0x4ffa58][_0x4fd5a9(0x24d)]()[_0x4fd5a9(0x37b)]();_0x434e4f=_0x434e4f['replace'](/\x1I\[(\d+)\]/gi,''),_0x434e4f=_0x434e4f['replace'](/\\I\[(\d+)\]/gi,''),this['_stypeIDs'][_0x434e4f]=_0x4ffa58;}return this['_stypeIDs'][_0x6cba1]||0x0;},DataManager[_0x263190(0x1eb)]=function(_0x9d02b9){const _0x504ff5=_0x263190;_0x9d02b9=_0x9d02b9[_0x504ff5(0x24d)]()[_0x504ff5(0x37b)](),this[_0x504ff5(0x341)]=this[_0x504ff5(0x341)]||{};if(this[_0x504ff5(0x341)][_0x9d02b9])return this[_0x504ff5(0x341)][_0x9d02b9];for(const _0x2c7945 of $dataSkills){if(!_0x2c7945)continue;this[_0x504ff5(0x341)][_0x2c7945[_0x504ff5(0x1ae)][_0x504ff5(0x24d)]()['trim']()]=_0x2c7945['id'];}return this[_0x504ff5(0x341)][_0x9d02b9]||0x0;},DataManager[_0x263190(0x240)]=function(_0x42a63f){const _0x4d5d5c=_0x263190;_0x42a63f=_0x42a63f[_0x4d5d5c(0x24d)]()[_0x4d5d5c(0x37b)](),this[_0x4d5d5c(0x2d6)]=this[_0x4d5d5c(0x2d6)]||{};if(this[_0x4d5d5c(0x2d6)][_0x42a63f])return this[_0x4d5d5c(0x2d6)][_0x42a63f];for(const _0x4c11d8 of $dataStates){if(!_0x4c11d8)continue;this[_0x4d5d5c(0x2d6)][_0x4c11d8[_0x4d5d5c(0x1ae)][_0x4d5d5c(0x24d)]()[_0x4d5d5c(0x37b)]()]=_0x4c11d8['id'];}return this['_stateIDs'][_0x42a63f]||0x0;},DataManager[_0x263190(0x247)]=function(_0x35034e){const _0x53a40d=_0x263190;this['_stateMaxTurns']=this[_0x53a40d(0x11a)]||{};if(this[_0x53a40d(0x11a)][_0x35034e])return this[_0x53a40d(0x11a)][_0x35034e];return $dataStates[_0x35034e][_0x53a40d(0x2cc)][_0x53a40d(0x1a1)](/<MAX TURNS:[ ](\d+)>/i)?this[_0x53a40d(0x11a)][_0x35034e]=Number(RegExp['$1']):this[_0x53a40d(0x11a)][_0x35034e]=VisuMZ[_0x53a40d(0x1d4)]['Settings']['States']['MaxTurns'],this[_0x53a40d(0x11a)][_0x35034e];},DataManager[_0x263190(0x314)]=function(_0x3ce230){const _0x278569=_0x263190;if(!_0x3ce230)return{};this['_skillChangesFromState']=this[_0x278569(0x238)]||{};if(this['_skillChangesFromState'][_0x3ce230['id']]!==undefined)return this[_0x278569(0x238)][_0x3ce230['id']];const _0x531b94=_0x3ce230[_0x278569(0x2cc)]||'',_0x243f2c={};{const _0x48eeed=_0x531b94['match'](/<SKILL CHANGE(?:|S):[ ](.*)[ ]>>>[ ](.*)>/gi);if(_0x48eeed)for(const _0x565f84 of _0x48eeed){_0x565f84[_0x278569(0x1a1)](/<SKILL CHANGE(?:|S):[ ](.*)[ ]>>>[ ](.*)>/gi);let _0x5248bb=String(RegExp['$1']),_0xc51db2=String(RegExp['$2']);VisuMZ[_0x278569(0x1d4)][_0x278569(0x275)](_0x243f2c,_0x5248bb,_0xc51db2);}}if(_0x531b94[_0x278569(0x1a1)](/<SKILL CHANGE(?:|S)>\s*([\s\S]*)\s*<\/SKILL CHANGE(?:|S)>/i)){const _0x11e9b8=String(RegExp['$1'])[_0x278569(0x20f)](/[\r\n]+/)[_0x278569(0x188)]('');for(const _0x2eae62 of _0x11e9b8){if(_0x2eae62['match'](/(.*)[ ]>>>[ ](.*)/i)){let _0x1abfc2=String(RegExp['$1']),_0x148292=String(RegExp['$2']);VisuMZ[_0x278569(0x1d4)][_0x278569(0x275)](_0x243f2c,_0x1abfc2,_0x148292);}}}return this['_skillChangesFromState'][_0x3ce230['id']]=_0x243f2c,this[_0x278569(0x238)][_0x3ce230['id']];},VisuMZ[_0x263190(0x1d4)][_0x263190(0x275)]=function(_0xf2c509,_0x409b7c,_0x190a2b){const _0x21d6c4=_0x263190;/^\d+$/[_0x21d6c4(0x1a7)](_0x409b7c)?_0x409b7c=Number(_0x409b7c):_0x409b7c=DataManager['getSkillIdWithName'](_0x409b7c),/^\d+$/[_0x21d6c4(0x1a7)](_0x190a2b)?_0x190a2b=Number(_0x190a2b):_0x190a2b=DataManager[_0x21d6c4(0x1eb)](_0x190a2b),_0xf2c509[_0x409b7c]=_0x190a2b;},ColorManager[_0x263190(0x27f)]=function(_0x1bcd3d,_0x99b068){const _0x3a515a=_0x263190;return _0x99b068=String(_0x99b068),this[_0x3a515a(0x148)]=this[_0x3a515a(0x148)]||{},_0x99b068[_0x3a515a(0x1a1)](/#(.*)/i)?this[_0x3a515a(0x148)][_0x1bcd3d]=_0x3a515a(0x2e6)[_0x3a515a(0x2c6)](String(RegExp['$1'])):this[_0x3a515a(0x148)][_0x1bcd3d]=this['textColor'](Number(_0x99b068)),this[_0x3a515a(0x148)][_0x1bcd3d];},ColorManager[_0x263190(0x1e6)]=function(_0x238a30){const _0x767c12=_0x263190;return _0x238a30=String(_0x238a30),_0x238a30[_0x767c12(0x1a1)](/#(.*)/i)?'#%1'[_0x767c12(0x2c6)](String(RegExp['$1'])):this[_0x767c12(0x2af)](Number(_0x238a30));},ColorManager[_0x263190(0x2aa)]=function(_0x3b84ef){const _0x2bb591=_0x263190;if(typeof _0x3b84ef===_0x2bb591(0x287))_0x3b84ef=$dataStates[_0x3b84ef];const _0x4883a5=_0x2bb591(0x293)['format'](_0x3b84ef['id']);this[_0x2bb591(0x148)]=this[_0x2bb591(0x148)]||{};if(this[_0x2bb591(0x148)][_0x4883a5])return this['_colorCache'][_0x4883a5];const _0x22db9a=this[_0x2bb591(0xfb)](_0x3b84ef);return this[_0x2bb591(0x27f)](_0x4883a5,_0x22db9a);},ColorManager[_0x263190(0xfb)]=function(_0x54efa3){const _0x37af8c=_0x263190,_0x4f440c=_0x54efa3[_0x37af8c(0x2cc)];if(_0x4f440c[_0x37af8c(0x1a1)](/<TURN COLOR:[ ](.*)>/i))return String(RegExp['$1']);else{if(_0x4f440c[_0x37af8c(0x1a1)](/<POSITIVE STATE>/i))return VisuMZ[_0x37af8c(0x1d4)]['Settings'][_0x37af8c(0x32c)][_0x37af8c(0x372)];else return _0x4f440c[_0x37af8c(0x1a1)](/<NEGATIVE STATE>/i)?VisuMZ[_0x37af8c(0x1d4)][_0x37af8c(0x1f6)][_0x37af8c(0x32c)][_0x37af8c(0xcf)]:VisuMZ[_0x37af8c(0x1d4)][_0x37af8c(0x1f6)]['States']['ColorNeutral'];}},ColorManager[_0x263190(0x28f)]=function(){const _0x5ec56a=_0x263190,_0xfa834c=_0x5ec56a(0x116);this['_colorCache']=this[_0x5ec56a(0x148)]||{};if(this[_0x5ec56a(0x148)][_0xfa834c])return this['_colorCache'][_0xfa834c];const _0x284440=VisuMZ[_0x5ec56a(0x1d4)][_0x5ec56a(0x1f6)][_0x5ec56a(0x14c)][_0x5ec56a(0x2a7)];return this[_0x5ec56a(0x27f)](_0xfa834c,_0x284440);},ColorManager[_0x263190(0x284)]=function(){const _0xa2969c=_0x263190,_0x21cbd9=_0xa2969c(0x352);this[_0xa2969c(0x148)]=this[_0xa2969c(0x148)]||{};if(this['_colorCache'][_0x21cbd9])return this[_0xa2969c(0x148)][_0x21cbd9];const _0x978813=VisuMZ[_0xa2969c(0x1d4)][_0xa2969c(0x1f6)][_0xa2969c(0x14c)][_0xa2969c(0x1d1)];return this[_0xa2969c(0x27f)](_0x21cbd9,_0x978813);},SceneManager[_0x263190(0x13b)]=function(){const _0x1c471f=_0x263190;return this[_0x1c471f(0x212)]&&this[_0x1c471f(0x212)][_0x1c471f(0x237)]===Scene_Battle;},VisuMZ[_0x263190(0x1d4)]['BattleManager_endAction']=BattleManager[_0x263190(0x34f)],BattleManager[_0x263190(0x34f)]=function(){const _0x469ccc=_0x263190;this[_0x469ccc(0x344)](),VisuMZ[_0x469ccc(0x1d4)][_0x469ccc(0x199)]['call'](this);},BattleManager[_0x263190(0x344)]=function(){const _0x436005=_0x263190,_0x356928=VisuMZ[_0x436005(0x1d4)]['Settings'][_0x436005(0x32c)];if(!_0x356928)return;if(_0x356928[_0x436005(0x209)]===![])return;if(!this[_0x436005(0x317)])return;this[_0x436005(0x317)]['updateStatesActionEnd']();},Game_Battler[_0x263190(0x32e)][_0x263190(0x344)]=function(){const _0x520f14=_0x263190;if(BattleManager['_phase']!==_0x520f14(0x1e4))return;if(this[_0x520f14(0x358)]===Graphics[_0x520f14(0x1a9)])return;this[_0x520f14(0x358)]=Graphics['frameCount'];for(const _0x24daef of this['_states']){const _0x3bc7c0=$dataStates[_0x24daef];if(!_0x3bc7c0)continue;if(_0x3bc7c0[_0x520f14(0x106)]!==0x1)continue;this[_0x520f14(0x226)][_0x24daef]>0x0&&this[_0x520f14(0x226)][_0x24daef]--;}this[_0x520f14(0x36b)](0x1);},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x2ef)]=function(){const _0xafdff7=_0x263190,_0x1cc28d=VisuMZ[_0xafdff7(0x1d4)]['Settings'][_0xafdff7(0x32c)];for(const _0x1a9fbd of this[_0xafdff7(0x1b2)]){const _0x29d921=$dataStates[_0x1a9fbd];if(_0x1cc28d&&_0x1cc28d[_0xafdff7(0x209)]!==![]){if(_0x29d921&&_0x29d921['autoRemovalTiming']===0x1)continue;}this[_0xafdff7(0x226)][_0x1a9fbd]>0x0&&this[_0xafdff7(0x226)][_0x1a9fbd]--;}},VisuMZ[_0x263190(0x1d4)][_0x263190(0x2f8)]=Game_Switches[_0x263190(0x32e)][_0x263190(0x36f)],Game_Switches[_0x263190(0x32e)]['onChange']=function(){const _0x2e1782=_0x263190;VisuMZ[_0x2e1782(0x1d4)][_0x2e1782(0x2f8)][_0x2e1782(0x338)](this);const _0x18d7ab=VisuMZ[_0x2e1782(0x1d4)]['Settings'][_0x2e1782(0x10a)][_0x2e1782(0x26f)]??!![];if(!_0x18d7ab)return;if(SceneManager['isSceneBattle']())for(const _0x611cab of BattleManager['allBattleMembers']()){if(_0x611cab)_0x611cab[_0x2e1782(0x206)]();}},VisuMZ['SkillsStatesCore'][_0x263190(0x21c)]=Game_Variables['prototype'][_0x263190(0x36f)],Game_Variables[_0x263190(0x32e)][_0x263190(0x36f)]=function(){const _0x598c11=_0x263190;VisuMZ[_0x598c11(0x1d4)][_0x598c11(0x21c)][_0x598c11(0x338)](this);const _0x35a359=VisuMZ[_0x598c11(0x1d4)]['Settings'][_0x598c11(0x10a)][_0x598c11(0x29c)]??!![];if(!_0x35a359)return;if(SceneManager[_0x598c11(0x13b)]())for(const _0x365c43 of BattleManager['allBattleMembers']()){if(_0x365c43)_0x365c43[_0x598c11(0x206)]();}},VisuMZ['SkillsStatesCore'][_0x263190(0x224)]=Game_Action[_0x263190(0x32e)][_0x263190(0x235)],Game_Action[_0x263190(0x32e)][_0x263190(0x235)]=function(_0x591091){const _0x1fb00d=_0x263190;VisuMZ['SkillsStatesCore'][_0x1fb00d(0x224)][_0x1fb00d(0x338)](this,_0x591091),this[_0x1fb00d(0x228)](_0x591091);},Game_Action[_0x263190(0x32e)][_0x263190(0x228)]=function(_0x10d13b){const _0xacf395=_0x263190;this['applyStateCategoryRemovalEffects'](_0x10d13b),this[_0xacf395(0x174)](_0x10d13b),this[_0xacf395(0x30d)](_0x10d13b),this[_0xacf395(0x2f4)](_0x10d13b);},VisuMZ[_0x263190(0x1d4)]['Game_Action_testApply']=Game_Action[_0x263190(0x32e)]['testApply'],Game_Action['prototype'][_0x263190(0x308)]=function(_0x1c8941){const _0x1d2948=_0x263190;if(this[_0x1d2948(0x346)](_0x1c8941))return!![];return VisuMZ[_0x1d2948(0x1d4)][_0x1d2948(0x165)][_0x1d2948(0x338)](this,_0x1c8941);},Game_Action['prototype'][_0x263190(0x346)]=function(_0x6728d7){const _0xe26599=_0x263190;if(!this[_0xe26599(0x1a3)]())return;const _0x12629e=this[_0xe26599(0x1a3)]()[_0xe26599(0x2cc)];if(_0x12629e[_0xe26599(0x1a1)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](.*)>/i)){const _0x6a1fa4=String(RegExp['$1']);if(_0x6728d7['isStateCategoryAffected'](_0x6a1fa4))return!![];}if(_0x12629e[_0xe26599(0x1a1)](/<SET STATE[ ](\d+)[ ]TURNS:[ ](.*)>/i)){const _0x5cbf6b=Number(RegExp['$1']);if(_0x6728d7[_0xe26599(0x245)](_0x5cbf6b))return!![];}else{if(_0x12629e[_0xe26599(0x1a1)](/<SET STATE[ ](.*)[ ]TURNS:[ ](.*)>/i)){const _0xf6fef3=DataManager[_0xe26599(0x240)](RegExp['$1']);if(_0x6728d7[_0xe26599(0x245)](_0xf6fef3))return!![];}}return![];},Game_Action[_0x263190(0x32e)][_0x263190(0x1f0)]=function(_0x250415){const _0x5d8cb0=_0x263190;if(_0x250415[_0x5d8cb0(0x130)]()[_0x5d8cb0(0x26a)]<=0x0)return;const _0xe4c09c=this[_0x5d8cb0(0x1a3)]()[_0x5d8cb0(0x2cc)];{const _0x703f59=_0xe4c09c[_0x5d8cb0(0x1a1)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ]ALL>/gi);if(_0x703f59)for(const _0x273254 of _0x703f59){_0x273254[_0x5d8cb0(0x1a1)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ]ALL>/i);const _0x52116c=String(RegExp['$1']);_0x250415[_0x5d8cb0(0x253)](_0x52116c);}}{const _0x445925=_0xe4c09c['match'](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](\d+)>/gi);if(_0x445925)for(const _0x24fd66 of _0x445925){_0x24fd66['match'](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](\d+)>/i);const _0x4c4858=String(RegExp['$1']),_0x25fe30=Number(RegExp['$2']);_0x250415[_0x5d8cb0(0x100)](_0x4c4858,_0x25fe30);}}},Game_Action[_0x263190(0x32e)][_0x263190(0x174)]=function(_0x4189a6){const _0x472d8f=_0x263190,_0x487a4f=this['item']()[_0x472d8f(0x2cc)],_0x2dc0a7=_0x487a4f[_0x472d8f(0x1a1)](/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/gi);if(_0x2dc0a7)for(const _0x2fe869 of _0x2dc0a7){let _0x21abc0=0x0,_0x4470a7=0x0;if(_0x2fe869[_0x472d8f(0x1a1)](/<SET STATE[ ](\d+)[ ]TURNS:[ ](\d+)>/i))_0x21abc0=Number(RegExp['$1']),_0x4470a7=Number(RegExp['$2']);else _0x2fe869[_0x472d8f(0x1a1)](/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/i)&&(_0x21abc0=DataManager['getStateIdWithName'](RegExp['$1']),_0x4470a7=Number(RegExp['$2']));_0x4189a6[_0x472d8f(0x2d4)](_0x21abc0,_0x4470a7),this['makeSuccess'](_0x4189a6);}const _0x538e48=_0x487a4f[_0x472d8f(0x1a1)](/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/gi);if(_0x538e48)for(const _0x5c6e5d of _0x538e48){let _0x1730ff=0x0,_0x58d789=0x0;if(_0x5c6e5d[_0x472d8f(0x1a1)](/<STATE[ ](\d+)[ ]TURNS:[ ]([\+\-]\d+)>/i))_0x1730ff=Number(RegExp['$1']),_0x58d789=Number(RegExp['$2']);else _0x5c6e5d[_0x472d8f(0x1a1)](/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/i)&&(_0x1730ff=DataManager[_0x472d8f(0x240)](RegExp['$1']),_0x58d789=Number(RegExp['$2']));_0x4189a6[_0x472d8f(0x325)](_0x1730ff,_0x58d789),this[_0x472d8f(0x307)](_0x4189a6);}},Game_Action[_0x263190(0x32e)][_0x263190(0x30d)]=function(_0x375bef){const _0x4bc670=_0x263190,_0x594e2b=[_0x4bc670(0x26c),_0x4bc670(0xe7),_0x4bc670(0x24c),_0x4bc670(0x2b9),_0x4bc670(0x1df),_0x4bc670(0x22e),'AGI','LUK'],_0x87e646=this[_0x4bc670(0x1a3)]()['note'],_0x398a64=_0x87e646[_0x4bc670(0x1a1)](/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/gi);if(_0x398a64)for(const _0x54309d of _0x398a64){_0x54309d[_0x4bc670(0x1a1)](/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/i);const _0x1cf9bd=_0x594e2b[_0x4bc670(0x243)](String(RegExp['$1'])[_0x4bc670(0x24d)]()),_0x492179=Number(RegExp['$2']);_0x1cf9bd>=0x0&&(_0x375bef[_0x4bc670(0x155)](_0x1cf9bd,_0x492179),this[_0x4bc670(0x307)](_0x375bef));}const _0x4c21c4=_0x87e646[_0x4bc670(0x1a1)](/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/gi);if(_0x4c21c4)for(const _0x39745b of _0x398a64){_0x39745b['match'](/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/i);const _0x28bec2=_0x594e2b[_0x4bc670(0x243)](String(RegExp['$1'])[_0x4bc670(0x24d)]()),_0xa5c0a1=Number(RegExp['$2']);_0x28bec2>=0x0&&(_0x375bef[_0x4bc670(0x1bb)](_0x28bec2,_0xa5c0a1),this[_0x4bc670(0x307)](_0x375bef));}},Game_Action[_0x263190(0x32e)][_0x263190(0x2f4)]=function(_0xb21b63){const _0x4a262d=_0x263190,_0x457668=[_0x4a262d(0x26c),'MAXMP','ATK','DEF',_0x4a262d(0x1df),'MDF',_0x4a262d(0x2d5),_0x4a262d(0x37c)],_0x46605a=this['item']()[_0x4a262d(0x2cc)],_0xf856e3=_0x46605a[_0x4a262d(0x1a1)](/<SET[ ](.*)[ ]DEBUFF TURNS:[ ](\d+)>/gi);if(_0xf856e3)for(const _0x59ccba of _0xf856e3){_0x59ccba[_0x4a262d(0x1a1)](/<SET[ ](.*)[ ]DEBUFF TURNS:[ ](\d+)>/i);const _0x411d80=_0x457668['indexOf'](String(RegExp['$1'])[_0x4a262d(0x24d)]()),_0x50aade=Number(RegExp['$2']);_0x411d80>=0x0&&(_0xb21b63[_0x4a262d(0x168)](_0x411d80,_0x50aade),this[_0x4a262d(0x307)](_0xb21b63));}const _0x5c6963=_0x46605a[_0x4a262d(0x1a1)](/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/gi);if(_0x5c6963)for(const _0x14ba28 of _0xf856e3){_0x14ba28[_0x4a262d(0x1a1)](/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/i);const _0x3ecf06=_0x457668[_0x4a262d(0x243)](String(RegExp['$1'])[_0x4a262d(0x24d)]()),_0x240d5f=Number(RegExp['$2']);_0x3ecf06>=0x0&&(_0xb21b63[_0x4a262d(0x158)](_0x3ecf06,_0x240d5f),this[_0x4a262d(0x307)](_0xb21b63));}},VisuMZ[_0x263190(0x1d4)][_0x263190(0xd0)]=Game_BattlerBase['prototype'][_0x263190(0x136)],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x136)]=function(){const _0x401ea0=_0x263190;this[_0x401ea0(0x244)]={},this[_0x401ea0(0x2d0)](),VisuMZ['SkillsStatesCore'][_0x401ea0(0xd0)][_0x401ea0(0x338)](this);},Game_BattlerBase['prototype'][_0x263190(0x2d0)]=function(){const _0x301d11=_0x263190;this[_0x301d11(0x32b)]='',this[_0x301d11(0x2a4)]={},this[_0x301d11(0x189)]={},this[_0x301d11(0x22a)]={};},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0xdc)]=function(_0x111299){const _0x6f8dfa=_0x263190;return this[_0x6f8dfa(0x244)]=this['_cache']||{},this[_0x6f8dfa(0x244)][_0x111299]!==undefined;},VisuMZ[_0x263190(0x1d4)][_0x263190(0x371)]=Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x206)],Game_BattlerBase[_0x263190(0x32e)]['refresh']=function(){const _0x2ca011=_0x263190;this[_0x2ca011(0x244)]={},VisuMZ[_0x2ca011(0x1d4)][_0x2ca011(0x371)][_0x2ca011(0x338)](this);},VisuMZ[_0x263190(0x1d4)]['Game_BattlerBase_eraseState']=Game_BattlerBase['prototype']['eraseState'],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0xf4)]=function(_0x2ddeae){const _0x13093a=_0x263190;let _0x406f54=this[_0x13093a(0x245)](_0x2ddeae);VisuMZ[_0x13093a(0x1d4)][_0x13093a(0xe6)][_0x13093a(0x338)](this,_0x2ddeae);if(_0x406f54&&!this['isStateAffected'](_0x2ddeae))this[_0x13093a(0x23a)](_0x2ddeae);},Game_BattlerBase['prototype']['onRemoveState']=function(_0x1a0c7b){const _0x104833=_0x263190;this[_0x104833(0x366)](_0x1a0c7b),this[_0x104833(0x1f3)](_0x1a0c7b);},VisuMZ['SkillsStatesCore'][_0x263190(0x1f9)]=Game_Battler[_0x263190(0x32e)][_0x263190(0x20d)],Game_Battler[_0x263190(0x32e)][_0x263190(0x20d)]=function(){const _0x276f14=_0x263190;VisuMZ['SkillsStatesCore'][_0x276f14(0x1f9)][_0x276f14(0x338)](this),this[_0x276f14(0x152)]();},VisuMZ[_0x263190(0x1d4)][_0x263190(0x129)]=Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x283)],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x283)]=function(_0x21b511){const _0x8c72ca=_0x263190,_0x5c2dad=$dataStates[_0x21b511],_0x401d0f=this[_0x8c72ca(0x32f)](_0x21b511),_0x22cd5f=this['getStateReapplyRulings'](_0x5c2dad)[_0x8c72ca(0x23e)]()['trim']();switch(_0x22cd5f){case _0x8c72ca(0x353):if(_0x401d0f<=0x0)this[_0x8c72ca(0x28e)](_0x21b511);break;case _0x8c72ca(0x183):this[_0x8c72ca(0x28e)](_0x21b511);break;case'greater':this[_0x8c72ca(0x28e)](_0x21b511),this[_0x8c72ca(0x226)][_0x21b511]=Math['max'](this[_0x8c72ca(0x226)][_0x21b511],_0x401d0f);break;case'add':this[_0x8c72ca(0x28e)](_0x21b511),this[_0x8c72ca(0x226)][_0x21b511]+=_0x401d0f;break;default:this[_0x8c72ca(0x28e)](_0x21b511);break;}if(this[_0x8c72ca(0x245)](_0x21b511)){const _0x3237dc=DataManager[_0x8c72ca(0x247)](_0x21b511);this[_0x8c72ca(0x226)][_0x21b511]=this['_stateTurns'][_0x21b511][_0x8c72ca(0x150)](0x0,_0x3237dc);}},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x28e)]=function(_0xe91f10){const _0x118776=_0x263190;VisuMZ[_0x118776(0x1d4)][_0x118776(0x129)][_0x118776(0x338)](this,_0xe91f10);},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x195)]=function(_0x33cbf3){const _0x528db8=_0x263190,_0x39eb60=_0x33cbf3['note'];return _0x39eb60[_0x528db8(0x1a1)](/<REAPPLY RULES:[ ](.*)>/i)?String(RegExp['$1']):VisuMZ['SkillsStatesCore'][_0x528db8(0x1f6)]['States'][_0x528db8(0x173)];},VisuMZ[_0x263190(0x1d4)][_0x263190(0x18d)]=Game_BattlerBase[_0x263190(0x32e)]['overwriteBuffTurns'],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x288)]=function(_0x2547b,_0x3c7134){const _0x3fe2bc=_0x263190,_0x3ca66b=VisuMZ[_0x3fe2bc(0x1d4)]['Settings'][_0x3fe2bc(0x14c)][_0x3fe2bc(0x173)],_0x3ec8b4=this[_0x3fe2bc(0x2a3)](_0x2547b);switch(_0x3ca66b){case _0x3fe2bc(0x353):if(_0x3ec8b4<=0x0)this[_0x3fe2bc(0x207)][_0x2547b]=_0x3c7134;break;case _0x3fe2bc(0x183):this[_0x3fe2bc(0x207)][_0x2547b]=_0x3c7134;break;case'greater':this[_0x3fe2bc(0x207)][_0x2547b]=Math[_0x3fe2bc(0x17a)](_0x3ec8b4,_0x3c7134);break;case _0x3fe2bc(0x18c):this[_0x3fe2bc(0x207)][_0x2547b]+=_0x3c7134;break;default:VisuMZ[_0x3fe2bc(0x1d4)]['Game_BattlerBase_overwriteBuffTurns'][_0x3fe2bc(0x338)](this,_0x2547b,_0x3c7134);break;}const _0x382b06=VisuMZ[_0x3fe2bc(0x1d4)][_0x3fe2bc(0x1f6)][_0x3fe2bc(0x14c)][_0x3fe2bc(0x156)];this[_0x3fe2bc(0x207)][_0x2547b]=this['_buffTurns'][_0x2547b]['clamp'](0x0,_0x382b06);},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x330)]=function(){const _0x3443c6=_0x263190;if(this['_cache'][_0x3443c6(0x392)]!==undefined)return this[_0x3443c6(0x244)][_0x3443c6(0x392)];this['_cache'][_0x3443c6(0x392)]=![];const _0x23791d=this[_0x3443c6(0x130)]();for(const _0x29c1a4 of _0x23791d){if(!_0x29c1a4)continue;if(_0x29c1a4[_0x3443c6(0x2cc)][_0x3443c6(0x1a1)](/<GROUP DEFEAT>/i)){this[_0x3443c6(0x244)][_0x3443c6(0x392)]=!![];break;}}return this['_cache'][_0x3443c6(0x392)];},VisuMZ[_0x263190(0x1d4)][_0x263190(0x1c1)]=Game_Unit['prototype'][_0x263190(0x1b8)],Game_Unit[_0x263190(0x32e)][_0x263190(0x1b8)]=function(){const _0x119037=_0x263190;let _0x59c488=VisuMZ[_0x119037(0x1d4)][_0x119037(0x1c1)][_0x119037(0x338)](this);return BattleManager[_0x119037(0x1d0)]&&(_0x59c488=_0x59c488[_0x119037(0x20a)](this['members']()[_0x119037(0x15a)](_0x12acd7=>_0x12acd7['isGroupDefeatStateAffected']()))),_0x59c488;},VisuMZ[_0x263190(0x1d4)]['Game_BattlerBase_clearStates']=Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x28b)],Game_BattlerBase[_0x263190(0x32e)]['clearStates']=function(){const _0x1fc77d=_0x263190;this[_0x1fc77d(0x2e2)]()!==''?this[_0x1fc77d(0x103)]():(VisuMZ['SkillsStatesCore'][_0x1fc77d(0x10f)][_0x1fc77d(0x338)](this),this[_0x1fc77d(0x2d0)]());},Game_Actor[_0x263190(0x32e)][_0x263190(0x28b)]=function(){const _0x2b2a80=_0x263190;this[_0x2b2a80(0x15f)]=this[_0x2b2a80(0x15f)]||{},Game_Battler[_0x2b2a80(0x32e)][_0x2b2a80(0x28b)]['call'](this);},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x103)]=function(){const _0x47da61=_0x263190,_0x1269eb=this['states']();for(const _0x36f712 of _0x1269eb){if(_0x36f712&&this[_0x47da61(0x28d)](_0x36f712))this['eraseState'](_0x36f712['id']);}this['_cache']={};},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x28d)]=function(_0x39fc15){const _0x558f27=_0x263190,_0x4b5d60=this[_0x558f27(0x2e2)]();if(_0x4b5d60!==''){const _0x5d7a89=_0x39fc15[_0x558f27(0x2cc)];if(_0x4b5d60===_0x558f27(0x39c)&&_0x5d7a89[_0x558f27(0x1a1)](/<NO DEATH CLEAR>/i))return![];if(_0x4b5d60===_0x558f27(0xe1)&&_0x5d7a89[_0x558f27(0x1a1)](/<NO RECOVER ALL CLEAR>/i))return![];}return this['isStateAffected'](_0x39fc15['id']);},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x2e2)]=function(){const _0x5d09e8=_0x263190;return this[_0x5d09e8(0x32b)];},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x289)]=function(_0x480afa){const _0xaccbf0=_0x263190;this[_0xaccbf0(0x32b)]=_0x480afa;},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x2ca)]=function(){const _0x4992a2=_0x263190;this[_0x4992a2(0x32b)]='';},VisuMZ['SkillsStatesCore'][_0x263190(0x13a)]=Game_BattlerBase['prototype'][_0x263190(0x1b6)],Game_BattlerBase['prototype']['die']=function(){const _0x266b72=_0x263190;this[_0x266b72(0x289)](_0x266b72(0x39c)),VisuMZ[_0x266b72(0x1d4)][_0x266b72(0x13a)][_0x266b72(0x338)](this),this[_0x266b72(0x2ca)]();},VisuMZ[_0x263190(0x1d4)]['Game_BattlerBase_recoverAll']=Game_BattlerBase[_0x263190(0x32e)]['recoverAll'],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x229)]=function(){const _0x280179=_0x263190;this[_0x280179(0x289)](_0x280179(0xe1)),VisuMZ['SkillsStatesCore'][_0x280179(0x13f)]['call'](this),this[_0x280179(0x2ca)]();},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x332)]=function(_0x5b7200,_0x5b7a0c,_0x239645){return _0x5b7a0c;},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x16b)]=function(_0x1b3f09){const _0x2fe450=_0x263190;for(settings of VisuMZ['SkillsStatesCore'][_0x2fe450(0x1f6)][_0x2fe450(0x1ca)]){let _0x968042=settings[_0x2fe450(0x299)][_0x2fe450(0x338)](this,_0x1b3f09);_0x968042=this[_0x2fe450(0x332)](_0x1b3f09,_0x968042,settings);if(!settings[_0x2fe450(0xfa)][_0x2fe450(0x338)](this,_0x1b3f09,_0x968042))return![];}return!![];},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x2da)]=function(_0x2f409b){const _0x51bf9e=_0x263190;for(settings of VisuMZ['SkillsStatesCore'][_0x51bf9e(0x1f6)][_0x51bf9e(0x1ca)]){let _0x350890=settings[_0x51bf9e(0x299)][_0x51bf9e(0x338)](this,_0x2f409b);_0x350890=this['adjustSkillCost'](_0x2f409b,_0x350890,settings),settings['PayJS']['call'](this,_0x2f409b,_0x350890);}},VisuMZ[_0x263190(0x1d4)][_0x263190(0x1b9)]=Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x1d3)],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x1d3)]=function(_0x29170f){const _0x2ec528=_0x263190;if(!_0x29170f)return![];if(!VisuMZ[_0x2ec528(0x1d4)][_0x2ec528(0x1b9)]['call'](this,_0x29170f))return![];if(!this[_0x2ec528(0x193)](_0x29170f))return![];if(!this[_0x2ec528(0x119)](_0x29170f))return![];if(!this[_0x2ec528(0x37a)](_0x29170f))return![];return!![];},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x193)]=function(_0x577c54){if(!this['checkSkillConditionsSwitchNotetags'](_0x577c54))return![];return!![];},Game_BattlerBase[_0x263190(0x32e)]['checkSkillConditionsSwitchNotetags']=function(_0x189b83){const _0xade171=_0x263190,_0x4dae33=_0x189b83[_0xade171(0x2cc)];if(_0x4dae33[_0xade171(0x1a1)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3075d7=JSON[_0xade171(0x30b)]('['+RegExp['$1'][_0xade171(0x1a1)](/\d+/g)+']');for(const _0x562cfc of _0x3075d7){if(!$gameSwitches[_0xade171(0x36d)](_0x562cfc))return![];}return!![];}if(_0x4dae33[_0xade171(0x1a1)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x13f62a=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x42c36a of _0x13f62a){if(!$gameSwitches[_0xade171(0x36d)](_0x42c36a))return![];}return!![];}if(_0x4dae33[_0xade171(0x1a1)](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x34a315=JSON[_0xade171(0x30b)]('['+RegExp['$1'][_0xade171(0x1a1)](/\d+/g)+']');for(const _0x20053b of _0x34a315){if($gameSwitches[_0xade171(0x36d)](_0x20053b))return!![];}return![];}if(_0x4dae33[_0xade171(0x1a1)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xc7baea=JSON[_0xade171(0x30b)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x16d25e of _0xc7baea){if(!$gameSwitches[_0xade171(0x36d)](_0x16d25e))return!![];}return![];}if(_0x4dae33[_0xade171(0x1a1)](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x57811b=JSON[_0xade171(0x30b)]('['+RegExp['$1'][_0xade171(0x1a1)](/\d+/g)+']');for(const _0x375e36 of _0x57811b){if(!$gameSwitches[_0xade171(0x36d)](_0x375e36))return!![];}return![];}if(_0x4dae33[_0xade171(0x1a1)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4c3fca=JSON['parse']('['+RegExp['$1'][_0xade171(0x1a1)](/\d+/g)+']');for(const _0x121489 of _0x4c3fca){if($gameSwitches['value'](_0x121489))return![];}return!![];}return!![];},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x119)]=function(_0x15033b){const _0x1e8ec8=_0x263190,_0x50acc=_0x15033b['note'],_0xaedd6=VisuMZ['SkillsStatesCore'][_0x1e8ec8(0x19c)];return _0xaedd6[_0x15033b['id']]?_0xaedd6[_0x15033b['id']][_0x1e8ec8(0x338)](this,_0x15033b):!![];},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x37a)]=function(_0x260c94){const _0x45193e=_0x263190;return VisuMZ[_0x45193e(0x1d4)][_0x45193e(0x1f6)][_0x45193e(0x2d1)][_0x45193e(0x1d9)]['call'](this,_0x260c94);},VisuMZ['SkillsStatesCore'][_0x263190(0x17f)]=Game_BattlerBase['prototype'][_0x263190(0x297)],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x297)]=function(_0x5ea2d7){const _0x5deae0=_0x263190;for(settings of VisuMZ[_0x5deae0(0x1d4)][_0x5deae0(0x1f6)][_0x5deae0(0x1ca)]){if(settings['Name'][_0x5deae0(0x24d)]()==='MP'){let _0x542c82=settings[_0x5deae0(0x299)][_0x5deae0(0x338)](this,_0x5ea2d7);return _0x542c82=this[_0x5deae0(0x332)](_0x5ea2d7,_0x542c82,settings),_0x542c82;}}return VisuMZ['SkillsStatesCore'][_0x5deae0(0x17f)][_0x5deae0(0x338)](this,_0x5ea2d7);},VisuMZ[_0x263190(0x1d4)][_0x263190(0x1cd)]=Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x367)],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x367)]=function(_0x5aa1c5){const _0x39f35e=_0x263190;for(settings of VisuMZ['SkillsStatesCore']['Settings'][_0x39f35e(0x1ca)]){if(settings['Name'][_0x39f35e(0x24d)]()==='TP'){let _0x4a29b9=settings[_0x39f35e(0x299)][_0x39f35e(0x338)](this,_0x5aa1c5);return _0x4a29b9=this[_0x39f35e(0x332)](_0x5aa1c5,_0x4a29b9,settings),_0x4a29b9;}}return VisuMZ[_0x39f35e(0x1d4)][_0x39f35e(0x1cd)][_0x39f35e(0x338)](this,_0x5aa1c5);},Game_BattlerBase['prototype'][_0x263190(0x2f0)]=function(_0x5f559d){const _0x2d5a1a=_0x263190;if(typeof _0x5f559d===_0x2d5a1a(0x287))_0x5f559d=$dataStates[_0x5f559d];return this[_0x2d5a1a(0x130)]()[_0x2d5a1a(0x382)](_0x5f559d);},VisuMZ[_0x263190(0x1d4)][_0x263190(0x2f1)]=Game_BattlerBase[_0x263190(0x32e)]['states'],Game_BattlerBase[_0x263190(0x32e)]['states']=function(){const _0x1801d3=_0x263190;let _0x5dafd4=VisuMZ[_0x1801d3(0x1d4)][_0x1801d3(0x2f1)]['call'](this);if($gameTemp[_0x1801d3(0x2a5)])return _0x5dafd4;return $gameTemp[_0x1801d3(0x2a5)]=!![],this[_0x1801d3(0x134)](_0x5dafd4),$gameTemp[_0x1801d3(0x2a5)]=undefined,_0x5dafd4;},Game_BattlerBase['prototype'][_0x263190(0x134)]=function(_0x239323){const _0x2177c3=_0x263190,_0xb51fdb=this[_0x2177c3(0x231)]();for(state of _0xb51fdb){if(!state)continue;if(!this['isPassiveStateStackable'](state)&&_0x239323['includes'](state))continue;_0x239323['push'](state);}_0xb51fdb['length']>0x0&&_0x239323[_0x2177c3(0x394)]((_0x56f291,_0x59355e)=>{const _0x189ee6=_0x2177c3,_0x492d62=_0x56f291[_0x189ee6(0x343)],_0x44a870=_0x59355e[_0x189ee6(0x343)];if(_0x492d62!==_0x44a870)return _0x44a870-_0x492d62;return _0x56f291-_0x59355e;});},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x383)]=function(_0x5f13db){const _0x635531=_0x263190;return _0x5f13db[_0x635531(0x2cc)]['match'](/<PASSIVE STACKABLE>/i);},VisuMZ[_0x263190(0x1d4)]['Game_BattlerBase_traitsSet']=Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x16c)],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x16c)]=function(_0x9fc93e){const _0x53c718=_0x263190;this[_0x53c718(0x376)]=!![];let _0x232315=VisuMZ[_0x53c718(0x1d4)][_0x53c718(0x201)][_0x53c718(0x338)](this,_0x9fc93e);return this[_0x53c718(0x376)]=undefined,_0x232315;},Game_BattlerBase[_0x263190(0x32e)]['convertPassiveStates']=function(){const _0xc8541e=_0x263190;let _0x2b11e0=[];this['_passiveStateResults']=this[_0xc8541e(0x16f)]||{};for(;;){_0x2b11e0=[];let _0x21a354=!![];for(const _0x254e70 of this[_0xc8541e(0x244)]['passiveStates']){const _0x325f73=$dataStates[_0x254e70];if(!_0x325f73)continue;let _0x32909e=this['meetsPassiveStateConditions'](_0x325f73);this[_0xc8541e(0x16f)][_0x254e70]!==_0x32909e&&(_0x21a354=![],this['_passiveStateResults'][_0x254e70]=_0x32909e);if(!_0x32909e)continue;_0x2b11e0[_0xc8541e(0x126)](_0x325f73);}if(_0x21a354)break;else{if(!this[_0xc8541e(0x376)])this[_0xc8541e(0x206)]();this[_0xc8541e(0x233)]();}}return _0x2b11e0;},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x15b)]=function(_0x32fd79){const _0x3650aa=_0x263190;if(!this[_0x3650aa(0x1c6)](_0x32fd79))return![];if(!this['meetsPassiveStateConditionSwitches'](_0x32fd79))return![];if(!this[_0x3650aa(0x334)](_0x32fd79))return![];if(!this[_0x3650aa(0x1a4)](_0x32fd79))return![];return!![];},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x1c6)]=function(_0x21e454){return!![];},Game_Actor['prototype'][_0x263190(0x1c6)]=function(_0x2d8496){const _0x503f54=_0x263190,_0x11adc2=DataManager[_0x503f54(0x111)](_0x2d8496);if(_0x11adc2[_0x503f54(0x109)][_0x503f54(0x26a)]>0x0){const _0x53fea6=_0x11adc2['currentClass'];if(!_0x53fea6['includes'](this[_0x503f54(0x109)]()))return![];}if(_0x11adc2[_0x503f54(0xf8)][_0x503f54(0x26a)]>0x0){const _0x197904=_0x11adc2['multiClass'];let _0x2dd54c=[this[_0x503f54(0x109)]()];Imported[_0x503f54(0x13e)]&&this[_0x503f54(0x232)]&&(_0x2dd54c=this[_0x503f54(0x232)]());if(_0x197904[_0x503f54(0x15a)](_0x43d4c8=>_0x2dd54c[_0x503f54(0x382)](_0x43d4c8))[_0x503f54(0x26a)]<=0x0)return![];}return Game_BattlerBase[_0x503f54(0x32e)][_0x503f54(0x1c6)][_0x503f54(0x338)](this,_0x2d8496);},DataManager[_0x263190(0x111)]=function(_0x3e39bc){const _0x18dcc2=_0x263190,_0x4a0101={'currentClass':[],'multiClass':[]};if(!_0x3e39bc)return _0x4a0101;this[_0x18dcc2(0x2e7)]=this[_0x18dcc2(0x2e7)]||{};if(this[_0x18dcc2(0x2e7)][_0x3e39bc['id']]!==undefined)return this[_0x18dcc2(0x2e7)][_0x3e39bc['id']];const _0x4b1c16=_0x3e39bc[_0x18dcc2(0x2cc)]||'';if(_0x4b1c16[_0x18dcc2(0x1a1)](/<PASSIVE CONDITION[ ](?:CLASS|CLASSES):[ ](.*)>/i)){const _0x443cef=String(RegExp['$1'])['split'](',')[_0x18dcc2(0x257)](_0x4708c4=>_0x4708c4[_0x18dcc2(0x37b)]());_0x4a0101[_0x18dcc2(0x109)]=VisuMZ[_0x18dcc2(0x1d4)]['ParseClassIDs'](_0x443cef);}if(_0x4b1c16[_0x18dcc2(0x1a1)](/<PASSIVE CONDITION[ ](?:MULTICLASS|MULTICLASSES):[ ](.*)>/i)){const _0xc24a48=String(RegExp['$1'])[_0x18dcc2(0x20f)](',')[_0x18dcc2(0x257)](_0x5b96a8=>_0x5b96a8[_0x18dcc2(0x37b)]());_0x4a0101['multiClass']=VisuMZ[_0x18dcc2(0x1d4)][_0x18dcc2(0x2a1)](_0xc24a48);}return this['_cache_getPassiveStateConditionClassesData'][_0x3e39bc['id']]=_0x4a0101,this[_0x18dcc2(0x2e7)][_0x3e39bc['id']];},VisuMZ[_0x263190(0x1d4)][_0x263190(0x2a1)]=function(_0x4a0102){const _0xe69b88=_0x263190,_0xf6aa52=[];for(let _0x1c2dc2 of _0x4a0102){_0x1c2dc2=(String(_0x1c2dc2)||'')[_0xe69b88(0x37b)]();const _0x5c9b32=/^\d+$/[_0xe69b88(0x1a7)](_0x1c2dc2);_0x5c9b32?_0xf6aa52['push'](Number(_0x1c2dc2)):_0xf6aa52[_0xe69b88(0x126)](DataManager['getClassIdWithName'](_0x1c2dc2));}return _0xf6aa52['map'](_0x2af336=>$dataClasses[Number(_0x2af336)])['remove'](null);},Game_BattlerBase['prototype'][_0x263190(0x39a)]=function(_0xbc97dd){const _0x41a4ef=_0x263190,_0x546a4c=DataManager[_0x41a4ef(0x11c)](_0xbc97dd);if(_0x546a4c[_0x41a4ef(0x117)]&&_0x546a4c[_0x41a4ef(0x117)][_0x41a4ef(0x26a)]>0x0){const _0x2d8706=_0x546a4c['allSwitchOn'];for(const _0x12e295 of _0x2d8706){if(!$gameSwitches[_0x41a4ef(0x36d)](_0x12e295))return![];}}if(_0x546a4c[_0x41a4ef(0x157)]&&_0x546a4c[_0x41a4ef(0x157)][_0x41a4ef(0x26a)]>0x0){const _0x51e410=_0x546a4c[_0x41a4ef(0x157)];let _0x3168ef=!![];for(const _0x391dfc of _0x51e410){if($gameSwitches[_0x41a4ef(0x36d)](_0x391dfc)){_0x3168ef=![];break;}}if(_0x3168ef)return![];}if(_0x546a4c['allSwitchOff']&&_0x546a4c[_0x41a4ef(0x1e0)][_0x41a4ef(0x26a)]>0x0){const _0x4c3f48=_0x546a4c[_0x41a4ef(0x1e0)];for(const _0x506d01 of _0x4c3f48){if($gameSwitches[_0x41a4ef(0x36d)](_0x506d01))return![];}}if(_0x546a4c[_0x41a4ef(0x286)]&&_0x546a4c[_0x41a4ef(0x286)][_0x41a4ef(0x26a)]>0x0){const _0x54a8b1=_0x546a4c[_0x41a4ef(0x286)];let _0xb2193c=!![];for(const _0x28bfba of _0x54a8b1){if(!$gameSwitches[_0x41a4ef(0x36d)](_0x28bfba)){_0xb2193c=![];break;}}if(_0xb2193c)return![];}return!![];},DataManager[_0x263190(0x11c)]=function(_0x3ce47e){const _0x3074fb=_0x263190;let _0x59a53a={'allSwitchOn':[],'anySwitchOn':[],'allSwitchOff':[],'anySwitchOff':[]};if(!_0x3ce47e)return _0x59a53a;const _0x2813f2=_0x3ce47e['id'];this['_cache_getPassiveStateConditionSwitchData']=this['_cache_getPassiveStateConditionSwitchData']||{};if(this[_0x3074fb(0x20c)][_0x2813f2]!==undefined)return this[_0x3074fb(0x20c)][_0x2813f2];const _0x5c3d80=_0x3ce47e[_0x3074fb(0x2cc)]||'';return _0x5c3d80[_0x3074fb(0x1a1)](/PASSIVE CONDITION(?:| ALL)[ ](?:SWITCH|SWITCHES)[ ]ON:[ ](.*)>/i)&&(_0x59a53a[_0x3074fb(0x117)]=String(RegExp['$1'])[_0x3074fb(0x20f)](',')[_0x3074fb(0x257)](_0x2fd453=>Number(_0x2fd453))),_0x5c3d80['match'](/PASSIVE CONDITION ANY[ ](?:SWITCH|SWITCHES)[ ]ON:[ ](.*)>/i)&&(_0x59a53a[_0x3074fb(0x157)]=String(RegExp['$1'])['split'](',')[_0x3074fb(0x257)](_0x25d798=>Number(_0x25d798))),_0x5c3d80['match'](/PASSIVE CONDITION(?:| ALL)[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ](.*)>/i)&&(_0x59a53a['allSwitchOff']=String(RegExp['$1'])[_0x3074fb(0x20f)](',')[_0x3074fb(0x257)](_0x213227=>Number(_0x213227))),_0x5c3d80[_0x3074fb(0x1a1)](/PASSIVE CONDITION ANY[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ](.*)>/i)&&(_0x59a53a[_0x3074fb(0x286)]=String(RegExp['$1'])[_0x3074fb(0x20f)](',')[_0x3074fb(0x257)](_0x5cfbb9=>Number(_0x5cfbb9))),this['_cache_getPassiveStateConditionSwitchData'][_0x2813f2]=_0x59a53a,this['_cache_getPassiveStateConditionSwitchData'][_0x2813f2];},Game_BattlerBase[_0x263190(0x32e)]['meetsPassiveStateConditionJS']=function(_0x4ead28){const _0x5189d7=_0x263190,_0xe1b149=VisuMZ['SkillsStatesCore'][_0x5189d7(0x35b)];if(_0xe1b149[_0x4ead28['id']]&&!_0xe1b149[_0x4ead28['id']][_0x5189d7(0x338)](this,_0x4ead28))return![];return!![];},Game_BattlerBase['prototype'][_0x263190(0x1a4)]=function(_0x5427da){const _0x3ae398=_0x263190;return VisuMZ[_0x3ae398(0x1d4)][_0x3ae398(0x1f6)][_0x3ae398(0x10a)][_0x3ae398(0x2a6)][_0x3ae398(0x338)](this,_0x5427da);},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x231)]=function(){const _0xfdc1e8=_0x263190;if(this[_0xfdc1e8(0xdc)](_0xfdc1e8(0x231)))return this[_0xfdc1e8(0x369)]();if(this[_0xfdc1e8(0x2b0)])return[];return this[_0xfdc1e8(0x2b0)]=!![],this[_0xfdc1e8(0x233)](),this['_checkingVisuMzPassiveStateObjects']=undefined,this['convertPassiveStates']();},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x233)]=function(){const _0x71c183=_0x263190;this[_0x71c183(0x2b0)]=!![],this['_cache'][_0x71c183(0x231)]=[],this['addPassiveStatesFromOtherPlugins'](),this[_0x71c183(0x37f)](),this['addPassiveStatesByPluginParameters'](),this['_cache'][_0x71c183(0x231)]=this['_cache'][_0x71c183(0x231)][_0x71c183(0x394)]((_0x264f88,_0x49f1ed)=>_0x264f88-_0x49f1ed),this[_0x71c183(0x2b0)]=undefined;},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x161)]=function(){const _0x5e30ab=_0x263190;if(Imported['VisuMZ_1_ElementStatusCore'])this[_0x5e30ab(0x2fd)]();},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x254)]=function(){return[];},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x37f)]=function(){const _0x439434=_0x263190,_0x228253=this[_0x439434(0x244)][_0x439434(0x231)]||[],_0x59c77b=this[_0x439434(0x254)]();this[_0x439434(0x244)][_0x439434(0x231)]=_0x228253||[];for(const _0x3c1017 of _0x59c77b){if(!_0x3c1017)continue;const _0x423828=DataManager[_0x439434(0x31d)](_0x3c1017);for(const _0x2c7d96 of _0x423828){this[_0x439434(0x244)]['passiveStates'][_0x439434(0x126)](_0x2c7d96);}}},DataManager[_0x263190(0x31d)]=function(_0x57dd81){const _0x402398=_0x263190;if(!_0x57dd81)return[];const _0x4c4114=VisuMZ[_0x402398(0x1d4)][_0x402398(0x19e)](_0x57dd81,_0x402398(0x180));this[_0x402398(0x2c5)]=this['_cache_getPassiveStatesFromObj']||{};if(this[_0x402398(0x2c5)][_0x4c4114]!==undefined)return this[_0x402398(0x2c5)][_0x4c4114];const _0x4f32c6=[],_0x327d0e=_0x57dd81['note']||'',_0x27bf20=/<PASSIVE (?:STATE|STATES):[ ](.*)>/gi,_0x52c883=_0x327d0e[_0x402398(0x1a1)](_0x27bf20);if(_0x52c883)for(const _0x4e5f9c of _0x52c883){_0x4e5f9c['match'](_0x27bf20);const _0x39c134=String(RegExp['$1'])[_0x402398(0x20f)](',')[_0x402398(0x257)](_0x1a5960=>_0x1a5960[_0x402398(0x37b)]());for(const _0x38ba20 of _0x39c134){const _0x3cf343=/^\d+$/[_0x402398(0x1a7)](_0x38ba20);let _0x3359b1=0x0;_0x3cf343?_0x3359b1=Number(_0x38ba20):_0x3359b1=DataManager[_0x402398(0x240)](_0x38ba20),_0x3359b1&&_0x4f32c6[_0x402398(0x126)](_0x3359b1);}}return this['_cache_getPassiveStatesFromObj'][_0x4c4114]=_0x4f32c6,this['_cache_getPassiveStatesFromObj'][_0x4c4114];},Game_BattlerBase[_0x263190(0x32e)]['addPassiveStatesByPluginParameters']=function(){const _0x1f59ca=_0x263190,_0x2b76bc=VisuMZ[_0x1f59ca(0x1d4)][_0x1f59ca(0x1f6)]['PassiveStates'][_0x1f59ca(0x2b5)];this['_cache']['passiveStates']=this[_0x1f59ca(0x244)]['passiveStates']['concat'](_0x2b76bc);},Game_BattlerBase['prototype']['stateTurns']=function(_0x420bf3){const _0x180d91=_0x263190;if(typeof _0x420bf3!==_0x180d91(0x287))_0x420bf3=_0x420bf3['id'];return this[_0x180d91(0x226)][_0x420bf3]||0x0;},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x2d4)]=function(_0x290a0d,_0x25bc0e){const _0x56124c=_0x263190;if(typeof _0x290a0d!==_0x56124c(0x287))_0x290a0d=_0x290a0d['id'];if(this[_0x56124c(0x245)](_0x290a0d)){const _0x5b0a46=DataManager['stateMaximumTurns'](_0x290a0d);this[_0x56124c(0x226)][_0x290a0d]=_0x25bc0e['clamp'](0x0,_0x5b0a46);if(this[_0x56124c(0x226)][_0x290a0d]<=0x0)this[_0x56124c(0x30c)](_0x290a0d);}},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x325)]=function(_0x376c56,_0xe2a36f){const _0x4636c7=_0x263190;if(typeof _0x376c56!==_0x4636c7(0x287))_0x376c56=_0x376c56['id'];this['isStateAffected'](_0x376c56)&&(_0xe2a36f+=this[_0x4636c7(0x32f)](_0x376c56),this[_0x4636c7(0x2d4)](_0x376c56,_0xe2a36f));},VisuMZ[_0x263190(0x1d4)][_0x263190(0x125)]=Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x122)],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x122)]=function(_0x42fdc7){const _0xce40e4=_0x263190,_0xde527e=this[_0xce40e4(0xee)][_0x42fdc7];VisuMZ['SkillsStatesCore'][_0xce40e4(0x125)][_0xce40e4(0x338)](this,_0x42fdc7);if(_0xde527e>0x0)this[_0xce40e4(0x2bd)](_0x42fdc7);if(_0xde527e<0x0)this[_0xce40e4(0x30a)](_0x42fdc7);},VisuMZ[_0x263190(0x1d4)][_0x263190(0xed)]=Game_BattlerBase[_0x263190(0x32e)]['increaseBuff'],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x335)]=function(_0x304f35){const _0x410d72=_0x263190;VisuMZ[_0x410d72(0x1d4)][_0x410d72(0xed)]['call'](this,_0x304f35);if(!this['isBuffOrDebuffAffected'](_0x304f35))this[_0x410d72(0x122)](_0x304f35);},VisuMZ[_0x263190(0x1d4)][_0x263190(0x1e2)]=Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x198)],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x198)]=function(_0x689c5f){const _0x3ea30a=_0x263190;VisuMZ[_0x3ea30a(0x1d4)][_0x3ea30a(0x1e2)][_0x3ea30a(0x338)](this,_0x689c5f);if(!this['isBuffOrDebuffAffected'](_0x689c5f))this[_0x3ea30a(0x122)](_0x689c5f);},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x2bd)]=function(_0x31411f){},Game_BattlerBase[_0x263190(0x32e)]['onEraseDebuff']=function(_0x5315ca){},Game_BattlerBase['prototype'][_0x263190(0x151)]=function(_0xb4730){const _0x2536e6=_0x263190;return this[_0x2536e6(0xee)][_0xb4730]===VisuMZ['SkillsStatesCore'][_0x2536e6(0x1f6)][_0x2536e6(0x14c)][_0x2536e6(0x368)];},Game_BattlerBase['prototype'][_0x263190(0x11e)]=function(_0x251e57){const _0x348226=_0x263190;return this[_0x348226(0xee)][_0x251e57]===-VisuMZ[_0x348226(0x1d4)][_0x348226(0x1f6)][_0x348226(0x14c)][_0x348226(0x20b)];},VisuMZ['SkillsStatesCore'][_0x263190(0x2dc)]=Game_BattlerBase[_0x263190(0x32e)]['buffIconIndex'],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x176)]=function(_0x3cc8b8,_0x2e72f1){const _0x32aa0c=_0x263190;return _0x3cc8b8=_0x3cc8b8[_0x32aa0c(0x150)](-0x2,0x2),VisuMZ[_0x32aa0c(0x1d4)][_0x32aa0c(0x2dc)]['call'](this,_0x3cc8b8,_0x2e72f1);},Game_BattlerBase['prototype'][_0x263190(0x281)]=function(_0x44d533){const _0x358f74=_0x263190,_0x49f6fa=this['_buffs'][_0x44d533];return VisuMZ[_0x358f74(0x1d4)]['Settings']['Buffs'][_0x358f74(0x2b1)][_0x358f74(0x338)](this,_0x44d533,_0x49f6fa);},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x2a3)]=function(_0x37ee61){const _0x4b71b1=_0x263190;return this[_0x4b71b1(0x207)][_0x37ee61]||0x0;},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x23d)]=function(_0x28529a){const _0x5aed2e=_0x263190;return this[_0x5aed2e(0x2a3)](_0x28529a);},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x155)]=function(_0x48e965,_0x257d95){const _0x3aa18d=_0x263190;if(this['isBuffAffected'](_0x48e965)){const _0x2ad474=VisuMZ[_0x3aa18d(0x1d4)][_0x3aa18d(0x1f6)][_0x3aa18d(0x14c)][_0x3aa18d(0x156)];this[_0x3aa18d(0x207)][_0x48e965]=_0x257d95['clamp'](0x0,_0x2ad474);}},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x1bb)]=function(_0x14624e,_0xd8b59b){const _0x339bf0=_0x263190;this[_0x339bf0(0x13c)](_0x14624e)&&(_0xd8b59b+=this['buffTurns'](stateId),this[_0x339bf0(0x155)](_0x14624e,_0xd8b59b));},Game_BattlerBase['prototype'][_0x263190(0x168)]=function(_0xe572b2,_0xc5c47f){const _0x25f970=_0x263190;if(this['isDebuffAffected'](_0xe572b2)){const _0x1da820=VisuMZ['SkillsStatesCore']['Settings'][_0x25f970(0x14c)]['MaxTurns'];this[_0x25f970(0x207)][_0xe572b2]=_0xc5c47f[_0x25f970(0x150)](0x0,_0x1da820);}},Game_BattlerBase['prototype'][_0x263190(0x158)]=function(_0x13b996,_0xaed2ca){const _0x438f85=_0x263190;this[_0x438f85(0x24a)](_0x13b996)&&(_0xaed2ca+=this['buffTurns'](stateId),this[_0x438f85(0x168)](_0x13b996,_0xaed2ca));},Game_BattlerBase[_0x263190(0x32e)]['stateData']=function(_0x297ea7){const _0xe63241=_0x263190;if(typeof _0x297ea7!==_0xe63241(0x287))_0x297ea7=_0x297ea7['id'];return this[_0xe63241(0x2a4)]=this[_0xe63241(0x2a4)]||{},this[_0xe63241(0x2a4)][_0x297ea7]=this[_0xe63241(0x2a4)][_0x297ea7]||{},this[_0xe63241(0x2a4)][_0x297ea7];},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x345)]=function(_0x53f03c,_0x4e2464){const _0x30c728=_0x263190;if(typeof _0x53f03c!=='number')_0x53f03c=_0x53f03c['id'];const _0x3e667a=this[_0x30c728(0x1e7)](_0x53f03c);return _0x3e667a[_0x4e2464];},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x264)]=function(_0x1ff5d1,_0x5e08c6,_0x5df664){const _0x299388=_0x263190;if(typeof _0x1ff5d1!==_0x299388(0x287))_0x1ff5d1=_0x1ff5d1['id'];const _0x45b632=this[_0x299388(0x1e7)](_0x1ff5d1);_0x45b632[_0x5e08c6]=_0x5df664;},Game_BattlerBase['prototype']['clearStateData']=function(_0x2e2670){const _0x38c899=_0x263190;if(typeof _0x2e2670!==_0x38c899(0x287))_0x2e2670=_0x2e2670['id'];this[_0x38c899(0x2a4)]=this[_0x38c899(0x2a4)]||{},this[_0x38c899(0x2a4)][_0x2e2670]={};},Game_BattlerBase['prototype'][_0x263190(0x1c9)]=function(_0x55af83){const _0x44c080=_0x263190;if(typeof _0x55af83!=='number')_0x55af83=_0x55af83['id'];return this[_0x44c080(0x189)]=this[_0x44c080(0x189)]||{},this[_0x44c080(0x189)][_0x55af83]===undefined&&(this[_0x44c080(0x189)][_0x55af83]=''),this[_0x44c080(0x189)][_0x55af83];},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0xfe)]=function(_0x56015a,_0x517b06){const _0x3a9904=_0x263190;if(typeof _0x56015a!=='number')_0x56015a=_0x56015a['id'];this[_0x3a9904(0x189)]=this['_stateDisplay']||{},this[_0x3a9904(0x189)][_0x56015a]=_0x517b06;},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x1f3)]=function(_0x5a44d8){const _0x55ce5b=_0x263190;if(typeof _0x5a44d8!==_0x55ce5b(0x287))_0x5a44d8=_0x5a44d8['id'];this[_0x55ce5b(0x189)]=this[_0x55ce5b(0x189)]||{},this[_0x55ce5b(0x189)][_0x5a44d8]='';},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x1ac)]=function(_0x3c0ff8){const _0x214f31=_0x263190;if(typeof _0x3c0ff8!==_0x214f31(0x287))_0x3c0ff8=_0x3c0ff8['id'];this[_0x214f31(0x22a)]=this[_0x214f31(0x22a)]||{},this['_stateOrigin'][_0x3c0ff8]=this[_0x214f31(0x22a)][_0x3c0ff8]||_0x214f31(0x384);const _0x359317=this[_0x214f31(0x22a)][_0x3c0ff8];return this[_0x214f31(0x34c)](_0x359317);},Game_BattlerBase[_0x263190(0x32e)]['setStateOrigin']=function(_0x2ae2f7,_0xd33739){const _0x1a18e4=_0x263190;this[_0x1a18e4(0x22a)]=this[_0x1a18e4(0x22a)]||{};const _0x1ed581=_0xd33739?this[_0x1a18e4(0x1be)](_0xd33739):this[_0x1a18e4(0x1ce)]();this[_0x1a18e4(0x22a)][_0x2ae2f7]=_0x1ed581;},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x22d)]=function(_0x5dee34){const _0x3f727e=_0x263190;this[_0x3f727e(0x22a)]=this['_stateOrigin']||{},delete this['_stateOrigin'][_0x5dee34];},Game_BattlerBase[_0x263190(0x32e)]['clearAllStateOrigins']=function(){const _0x2acf45=_0x263190;this[_0x2acf45(0x22a)]={};},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x1ce)]=function(){const _0x160860=_0x263190,_0x15cb5d=this['getCurrentStateActiveUser']();return this[_0x160860(0x1be)](_0x15cb5d);},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x21b)]=function(){const _0x32d777=_0x263190;if($gameParty[_0x32d777(0x295)]()){if(BattleManager[_0x32d777(0x317)])return BattleManager[_0x32d777(0x317)];else{if(BattleManager[_0x32d777(0x142)])return BattleManager[_0x32d777(0x142)];}}else{const _0x3d7266=SceneManager['_scene'];if(![Scene_Map,Scene_Item][_0x32d777(0x382)](_0x3d7266['constructor']))return $gameParty[_0x32d777(0x2a8)]();}return this;},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x1be)]=function(_0x4f9118){const _0x1c4b04=_0x263190;if(!_0x4f9118)return _0x1c4b04(0x384);if(_0x4f9118[_0x1c4b04(0x25e)]())return _0x1c4b04(0x1bd)['format'](_0x4f9118[_0x1c4b04(0x26e)]());else{const _0x3b5b3c=_0x1c4b04(0x1dc)[_0x1c4b04(0x2c6)](_0x4f9118[_0x1c4b04(0x1ff)]()),_0x1ea797=_0x1c4b04(0x370)[_0x1c4b04(0x2c6)](_0x4f9118[_0x1c4b04(0x1c7)]()),_0x383faa=_0x1c4b04(0x2db)[_0x1c4b04(0x2c6)]($gameTroop[_0x1c4b04(0xd9)]());return _0x1c4b04(0x291)[_0x1c4b04(0x2c6)](_0x3b5b3c,_0x1ea797,_0x383faa);}return'user';},Game_BattlerBase['prototype'][_0x263190(0x34c)]=function(_0x459852){const _0xa7de1a=_0x263190;if(_0x459852===_0xa7de1a(0x384))return this;else{if(_0x459852[_0xa7de1a(0x1a1)](/<actor-(\d+)>/i))return $gameActors[_0xa7de1a(0x250)](Number(RegExp['$1']));else{if($gameParty[_0xa7de1a(0x295)]()&&_0x459852[_0xa7de1a(0x1a1)](/<troop-(\d+)>/i)){const _0x16cce6=Number(RegExp['$1']);if(_0x16cce6===$gameTroop[_0xa7de1a(0xd9)]()){if(_0x459852[_0xa7de1a(0x1a1)](/<member-(\d+)>/i))return $gameTroop['members']()[Number(RegExp['$1'])];}}if(_0x459852[_0xa7de1a(0x1a1)](/<enemy-(\d+)>/i))return new Game_Enemy(Number(RegExp['$1']),-0x1f4,-0x1f4);}}return this;},VisuMZ[_0x263190(0x1d4)][_0x263190(0x38a)]=Game_Battler[_0x263190(0x32e)][_0x263190(0x265)],Game_Battler['prototype'][_0x263190(0x265)]=function(_0x4ebd2e){const _0x588b14=_0x263190,_0x4859c1=this[_0x588b14(0x18a)](_0x4ebd2e);VisuMZ['SkillsStatesCore'][_0x588b14(0x38a)][_0x588b14(0x338)](this,_0x4ebd2e);if(_0x4859c1&&this['hasState']($dataStates[_0x4ebd2e])){this['onAddState'](_0x4ebd2e);;}},VisuMZ[_0x263190(0x1d4)][_0x263190(0x1ea)]=Game_Battler[_0x263190(0x32e)][_0x263190(0x18a)],Game_Battler[_0x263190(0x32e)][_0x263190(0x18a)]=function(_0x3997f2){const _0x3c4f3e=_0x263190,_0x28b08d=$dataStates[_0x3997f2];if(_0x28b08d&&_0x28b08d['note'][_0x3c4f3e(0x1a1)](/<NO DEATH CLEAR>/i))return!this[_0x3c4f3e(0x24f)](_0x3997f2)&&!this[_0x3c4f3e(0x18e)](_0x3997f2)&&!this[_0x3c4f3e(0xcd)]['isStateRemoved'](_0x3997f2);return VisuMZ[_0x3c4f3e(0x1d4)]['Game_Battler_isStateAddable']['call'](this,_0x3997f2);},Game_Battler[_0x263190(0x32e)][_0x263190(0x33b)]=function(_0x3f2f1c){const _0x2cb71d=_0x263190;this[_0x2cb71d(0x12a)](_0x3f2f1c),this['removeOtherStatesOfSameCategory'](_0x3f2f1c),this[_0x2cb71d(0x248)](_0x3f2f1c),this[_0x2cb71d(0x31b)](_0x3f2f1c),this['onAddStateGlobalJS'](_0x3f2f1c);},Game_Battler[_0x263190(0x32e)]['onRemoveState']=function(_0x341af2){const _0x479aac=_0x263190;this[_0x479aac(0x1a6)](_0x341af2),this['onEraseStateGlobalJS'](_0x341af2),Game_BattlerBase[_0x479aac(0x32e)][_0x479aac(0x23a)][_0x479aac(0x338)](this,_0x341af2);},Game_Battler[_0x263190(0x32e)]['removeStatesAuto']=function(_0x5278ce){const _0xc15ec6=_0x263190;for(const _0x42fbad of this[_0xc15ec6(0x130)]()){this[_0xc15ec6(0x300)](_0x42fbad['id'])&&_0x42fbad[_0xc15ec6(0x106)]===_0x5278ce&&(this[_0xc15ec6(0x30c)](_0x42fbad['id']),this['onExpireState'](_0x42fbad['id']),this[_0xc15ec6(0x255)](_0x42fbad['id']));}},Game_Battler[_0x263190(0x32e)][_0x263190(0x324)]=function(_0x2bb0b0){const _0x1f8c18=_0x263190;this[_0x1f8c18(0x391)](_0x2bb0b0);},Game_Battler[_0x263190(0x32e)]['onAddStateCustomJS']=function(_0xb5da23){const _0x35cb62=_0x263190;if(this[_0x35cb62(0x2ea)]||this[_0x35cb62(0xec)])return;const _0x3ba684=VisuMZ['SkillsStatesCore']['stateAddJS'];if(_0x3ba684[_0xb5da23])_0x3ba684[_0xb5da23]['call'](this,_0xb5da23);},Game_Battler[_0x263190(0x32e)][_0x263190(0x1a6)]=function(_0x2a0bc9){const _0x3d9377=_0x263190;if(this[_0x3d9377(0x2ea)]||this[_0x3d9377(0xec)])return;const _0x4f63ab=VisuMZ[_0x3d9377(0x1d4)]['stateEraseJS'];if(_0x4f63ab[_0x2a0bc9])_0x4f63ab[_0x2a0bc9][_0x3d9377(0x338)](this,_0x2a0bc9);},Game_Battler[_0x263190(0x32e)][_0x263190(0x391)]=function(_0x23d706){const _0x2d0ce5=_0x263190;if(this[_0x2d0ce5(0x2ea)]||this[_0x2d0ce5(0xec)])return;const _0x81dbc0=VisuMZ[_0x2d0ce5(0x1d4)]['stateExpireJS'];if(_0x81dbc0[_0x23d706])_0x81dbc0[_0x23d706][_0x2d0ce5(0x338)](this,_0x23d706);},Game_Battler['prototype'][_0x263190(0xda)]=function(_0x3fb10c){const _0x2d0bc7=_0x263190;if(this[_0x2d0bc7(0x2ea)]||this[_0x2d0bc7(0xec)])return;try{VisuMZ[_0x2d0bc7(0x1d4)][_0x2d0bc7(0x1f6)][_0x2d0bc7(0x32c)]['onAddStateJS'][_0x2d0bc7(0x338)](this,_0x3fb10c);}catch(_0x579253){if($gameTemp[_0x2d0bc7(0x1a5)]())console[_0x2d0bc7(0x145)](_0x579253);}},Game_Battler['prototype'][_0x263190(0x301)]=function(_0x4eaf68){const _0x59f3bc=_0x263190;if(this['_tempActor']||this[_0x59f3bc(0xec)])return;try{VisuMZ[_0x59f3bc(0x1d4)][_0x59f3bc(0x1f6)]['States'][_0x59f3bc(0x305)][_0x59f3bc(0x338)](this,_0x4eaf68);}catch(_0x4dbeb1){if($gameTemp[_0x59f3bc(0x1a5)]())console[_0x59f3bc(0x145)](_0x4dbeb1);}},Game_Battler[_0x263190(0x32e)]['onExpireStateGlobalJS']=function(_0x260601){const _0x258f40=_0x263190;if(this[_0x258f40(0x2ea)]||this[_0x258f40(0xec)])return;try{VisuMZ[_0x258f40(0x1d4)]['Settings'][_0x258f40(0x32c)][_0x258f40(0x32d)]['call'](this,_0x260601);}catch(_0x1914c0){if($gameTemp['isPlaytest']())console[_0x258f40(0x145)](_0x1914c0);}},Game_Battler[_0x263190(0x32e)][_0x263190(0x181)]=function(_0x2f9f8b){const _0x48a003=_0x263190;return _0x2f9f8b=_0x2f9f8b[_0x48a003(0x24d)]()[_0x48a003(0x37b)](),this[_0x48a003(0x130)]()[_0x48a003(0x15a)](_0x4d8fd2=>_0x4d8fd2[_0x48a003(0x33d)][_0x48a003(0x382)](_0x2f9f8b));},Game_Battler[_0x263190(0x32e)]['removeStatesByCategory']=function(_0x589c75,_0x4305f6){const _0x94ec19=_0x263190;_0x589c75=_0x589c75[_0x94ec19(0x24d)]()[_0x94ec19(0x37b)](),_0x4305f6=_0x4305f6||0x0;const _0xc2dda3=this[_0x94ec19(0x181)](_0x589c75),_0x392fbe=[];for(const _0x1746d5 of _0xc2dda3){if(!_0x1746d5)continue;if(_0x4305f6<=0x0)break;_0x392fbe[_0x94ec19(0x126)](_0x1746d5['id']),this[_0x94ec19(0xcd)][_0x94ec19(0x1f1)]=!![],_0x4305f6--;}while(_0x392fbe['length']>0x0){this[_0x94ec19(0x30c)](_0x392fbe['shift']());}},Game_Battler[_0x263190(0x32e)][_0x263190(0x253)]=function(_0x56823e,_0xc9a9cb){const _0x1444cd=_0x263190;_0x56823e=_0x56823e[_0x1444cd(0x24d)]()[_0x1444cd(0x37b)](),_0xc9a9cb=_0xc9a9cb||[];const _0x1ebc81=this[_0x1444cd(0x181)](_0x56823e),_0x56bf08=[];for(const _0x3dd314 of _0x1ebc81){if(!_0x3dd314)continue;if(_0xc9a9cb[_0x1444cd(0x382)](_0x3dd314))continue;_0x56bf08[_0x1444cd(0x126)](_0x3dd314['id']),this[_0x1444cd(0xcd)]['success']=!![];}while(_0x56bf08[_0x1444cd(0x26a)]>0x0){this[_0x1444cd(0x30c)](_0x56bf08[_0x1444cd(0x182)]());}},Game_Battler[_0x263190(0x32e)][_0x263190(0x20e)]=function(_0x37ae2d){const _0x19e352=_0x263190;return this[_0x19e352(0x132)](_0x37ae2d)>0x0;},Game_Battler['prototype'][_0x263190(0x298)]=function(_0x3da8f5){const _0x546532=_0x263190;return this[_0x546532(0x2ba)](_0x3da8f5)>0x0;},Game_Battler[_0x263190(0x32e)][_0x263190(0x132)]=function(_0x25f75d){const _0x2722ff=_0x263190,_0x527322=this[_0x2722ff(0x181)](_0x25f75d)[_0x2722ff(0x15a)](_0x57a3d3=>this[_0x2722ff(0x245)](_0x57a3d3['id']));return _0x527322[_0x2722ff(0x26a)];},Game_Battler['prototype'][_0x263190(0x2ba)]=function(_0x19528c){const _0x4d595a=_0x263190,_0x466ce2=this[_0x4d595a(0x181)](_0x19528c);return _0x466ce2['length'];},VisuMZ[_0x263190(0x1d4)][_0x263190(0xd3)]=Game_BattlerBase['prototype']['isStateResist'],Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x24f)]=function(_0x44ae0f){const _0x1397a6=_0x263190,_0x29b21a=$dataStates[_0x44ae0f];if(_0x29b21a&&_0x29b21a['categories'][_0x1397a6(0x26a)]>0x0)for(const _0x918ce7 of _0x29b21a[_0x1397a6(0x33d)]){if(this[_0x1397a6(0x2bb)](_0x918ce7))return!![];}return VisuMZ[_0x1397a6(0x1d4)][_0x1397a6(0xd3)][_0x1397a6(0x338)](this,_0x44ae0f);},Game_BattlerBase['prototype'][_0x263190(0x2bb)]=function(_0x34c1b1){const _0x82d1e8=_0x263190;let _0x52c55f=_0x82d1e8(0x362);if(this[_0x82d1e8(0xdc)](_0x52c55f))return this[_0x82d1e8(0x244)][_0x52c55f][_0x82d1e8(0x382)](_0x34c1b1);return this[_0x82d1e8(0x244)][_0x52c55f]=this['makeResistedStateCategories'](),this[_0x82d1e8(0x244)][_0x52c55f][_0x82d1e8(0x382)](_0x34c1b1);},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x36a)]=function(){const _0x220420=_0x263190,_0x49b719=/<RESIST STATE (?:CATEGORY|CATEGORIES):[ ](.*)>/gi,_0x17a965=/<RESIST STATE (?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/RESIST STATE (?:CATEGORY|CATEGORIES)>/i;let _0x544adf=[];for(const _0x3f0649 of this[_0x220420(0x30e)]()){if(!_0x3f0649)continue;const _0x346994=_0x3f0649['note'],_0x246f73=_0x346994[_0x220420(0x1a1)](_0x49b719);if(_0x246f73)for(const _0x52a285 of _0x246f73){_0x52a285[_0x220420(0x1a1)](_0x49b719);const _0x4db6ee=String(RegExp['$1'])[_0x220420(0x20f)](',')[_0x220420(0x257)](_0x5c3a16=>String(_0x5c3a16)[_0x220420(0x24d)]()[_0x220420(0x37b)]());_0x544adf=_0x544adf[_0x220420(0x20a)](_0x4db6ee);}if(_0x346994[_0x220420(0x1a1)](_0x17a965)){const _0x30aa56=String(RegExp['$1'])[_0x220420(0x20f)](/[\r\n]+/)[_0x220420(0x257)](_0x953e49=>String(_0x953e49)[_0x220420(0x24d)]()[_0x220420(0x37b)]());_0x544adf=_0x544adf[_0x220420(0x20a)](_0x30aa56);}}return _0x544adf;},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x2c0)]=function(_0x3a8569){const _0x118d94=_0x263190,_0x69a3ed=$dataStates[_0x3a8569];if(!_0x69a3ed)return;const _0x21b78f=_0x69a3ed['note']||'',_0x57b2f7=_0x21b78f[_0x118d94(0x1a1)](/<REMOVE OTHER (.*) STATES>/gi);if(_0x57b2f7){const _0x5a276c=[_0x69a3ed];for(const _0x364ecd of _0x57b2f7){_0x364ecd['match'](/<REMOVE OTHER (.*) STATES>/i);const _0x280ebb=String(RegExp['$1']);this['removeStatesByCategoryAll'](_0x280ebb,_0x5a276c);}}},Game_Battler['prototype']['removeStatesByDamage']=function(){const _0x6bce31=_0x263190;for(const _0x12ffa2 of this[_0x6bce31(0x130)]()){if(!_0x12ffa2[_0x6bce31(0x306)])continue;if(this[_0x6bce31(0x227)](_0x12ffa2))continue;Math[_0x6bce31(0x2f5)](0x64)<_0x12ffa2[_0x6bce31(0x2b6)]&&this['removeState'](_0x12ffa2['id']);}},Game_Battler[_0x263190(0x32e)][_0x263190(0x227)]=function(_0x492eca){return![];},VisuMZ['SkillsStatesCore'][_0x263190(0x1fa)]=Game_Battler['prototype'][_0x263190(0x268)],Game_Battler['prototype'][_0x263190(0x268)]=function(_0x3c8fbc,_0x289c4e){const _0x861b99=_0x263190;VisuMZ[_0x861b99(0x1d4)][_0x861b99(0x1fa)][_0x861b99(0x338)](this,_0x3c8fbc,_0x289c4e),this['isBuffAffected'](_0x3c8fbc)&&this[_0x861b99(0x178)](_0x3c8fbc,_0x289c4e);},Game_Battler['prototype']['isBuffPrevented']=function(_0x19957a){},VisuMZ[_0x263190(0x1d4)][_0x263190(0x1c2)]=Game_Battler[_0x263190(0x32e)][_0x263190(0x219)],Game_Battler[_0x263190(0x32e)][_0x263190(0x219)]=function(_0x5b2c96,_0x120726){const _0x5ebf87=_0x263190;VisuMZ['SkillsStatesCore'][_0x5ebf87(0x1c2)][_0x5ebf87(0x338)](this,_0x5b2c96,_0x120726),this['isDebuffAffected'](_0x5b2c96)&&this[_0x5ebf87(0x203)](_0x5b2c96,_0x120726);},Game_Battler[_0x263190(0x32e)][_0x263190(0x38e)]=function(){const _0x180351=_0x263190;for(let _0x303812=0x0;_0x303812<this[_0x180351(0x304)]();_0x303812++){if(this[_0x180351(0x375)](_0x303812)){const _0x370c42=this[_0x180351(0xee)][_0x303812];this[_0x180351(0xf1)](_0x303812);if(_0x370c42>0x0)this[_0x180351(0x303)](_0x303812);if(_0x370c42<0x0)this[_0x180351(0x357)](_0x303812);}}},Game_Battler['prototype']['onAddBuff']=function(_0x4d11f5,_0x485025){this['onAddBuffGlobalJS'](_0x4d11f5,_0x485025);},Game_Battler[_0x263190(0x32e)][_0x263190(0x203)]=function(_0x270fae,_0xd54e1a){const _0x187ea8=_0x263190;this[_0x187ea8(0xd6)](_0x270fae,_0xd54e1a);},Game_Battler[_0x263190(0x32e)][_0x263190(0x2bd)]=function(_0x35de2c){const _0x5e5c58=_0x263190;Game_BattlerBase['prototype'][_0x5e5c58(0x2bd)]['call'](this,_0x35de2c),this[_0x5e5c58(0x185)](_0x35de2c);},Game_Battler['prototype'][_0x263190(0x30a)]=function(_0x5bc554){const _0x5d3889=_0x263190;Game_BattlerBase[_0x5d3889(0x32e)][_0x5d3889(0x30a)][_0x5d3889(0x338)](this,_0x5bc554),this[_0x5d3889(0x171)](_0x5bc554);},Game_Battler[_0x263190(0x32e)][_0x263190(0x303)]=function(_0x2e68a2){const _0x828bfa=_0x263190;this[_0x828bfa(0x381)](_0x2e68a2);},Game_Battler[_0x263190(0x32e)][_0x263190(0x357)]=function(_0x2f96f7){const _0x54cb59=_0x263190;this[_0x54cb59(0x102)](_0x2f96f7);},Game_Battler[_0x263190(0x32e)]['onAddBuffGlobalJS']=function(_0x329057,_0x2450d1){const _0xf84133=_0x263190;VisuMZ[_0xf84133(0x1d4)][_0xf84133(0x1f6)]['Buffs']['onAddBuffJS'][_0xf84133(0x338)](this,_0x329057,_0x2450d1);},Game_Battler[_0x263190(0x32e)][_0x263190(0xd6)]=function(_0x4bf2de,_0x33318b){const _0x8df75f=_0x263190;VisuMZ[_0x8df75f(0x1d4)]['Settings'][_0x8df75f(0x14c)][_0x8df75f(0x2d8)][_0x8df75f(0x338)](this,_0x4bf2de,_0x33318b);},Game_BattlerBase[_0x263190(0x32e)][_0x263190(0x185)]=function(_0x116b1a){const _0x5aedd7=_0x263190;VisuMZ[_0x5aedd7(0x1d4)][_0x5aedd7(0x1f6)][_0x5aedd7(0x14c)][_0x5aedd7(0x137)][_0x5aedd7(0x338)](this,_0x116b1a);},Game_BattlerBase['prototype'][_0x263190(0x171)]=function(_0x34c3bf){const _0x45f3cd=_0x263190;VisuMZ[_0x45f3cd(0x1d4)]['Settings'][_0x45f3cd(0x14c)][_0x45f3cd(0x1cf)][_0x45f3cd(0x338)](this,_0x34c3bf);},Game_Battler['prototype'][_0x263190(0x381)]=function(_0x3c4727){const _0x4d3da5=_0x263190;VisuMZ[_0x4d3da5(0x1d4)]['Settings'][_0x4d3da5(0x14c)][_0x4d3da5(0x2bf)][_0x4d3da5(0x338)](this,_0x3c4727);},Game_Battler['prototype'][_0x263190(0x102)]=function(_0x5f304e){const _0x74d51b=_0x263190;VisuMZ[_0x74d51b(0x1d4)][_0x74d51b(0x1f6)][_0x74d51b(0x14c)][_0x74d51b(0x2f9)][_0x74d51b(0x338)](this,_0x5f304e);},Game_Battler[_0x263190(0x32e)][_0x263190(0x248)]=function(_0x191e4f){const _0x3599bb=_0x263190,_0x79b76b=VisuMZ[_0x3599bb(0x1d4)],_0x489902=[_0x3599bb(0x144),'stateHpSlipHealJS',_0x3599bb(0x249),_0x3599bb(0x202),_0x3599bb(0xf3),_0x3599bb(0x113)];for(const _0x2293fc of _0x489902){_0x79b76b[_0x2293fc][_0x191e4f]&&_0x79b76b[_0x2293fc][_0x191e4f][_0x3599bb(0x338)](this,_0x191e4f);}},VisuMZ[_0x263190(0x1d4)][_0x263190(0x14d)]=Game_Battler['prototype']['regenerateAll'],Game_Battler[_0x263190(0x32e)][_0x263190(0xf9)]=function(){const _0xafe906=_0x263190;this['recalculateSlipDamageJS'](),VisuMZ[_0xafe906(0x1d4)][_0xafe906(0x14d)][_0xafe906(0x338)](this),this[_0xafe906(0x14e)](),this[_0xafe906(0x19a)]();},Game_Battler[_0x263190(0x32e)]['setPassiveStateSlipDamageJS']=function(){const _0x388a4b=_0x263190;for(const _0x4e1f91 of this['passiveStates']()){if(!_0x4e1f91)continue;this[_0x388a4b(0x248)](_0x4e1f91['id']);}},Game_Battler[_0x263190(0x32e)][_0x263190(0x1ba)]=function(){const _0x2abac4=_0x263190;for(const _0x20327e of this[_0x2abac4(0x130)]()){if(!_0x20327e)continue;_0x20327e[_0x2abac4(0x2cc)][_0x2abac4(0x1a1)](/<JS SLIP REFRESH>/i)&&this[_0x2abac4(0x248)](_0x20327e['id']);}},Game_Battler[_0x263190(0x32e)][_0x263190(0x19a)]=function(){const _0x1e02ec=_0x263190;if(!this['isAlive']())return;const _0x184259=this[_0x1e02ec(0x130)]();for(const _0x5f42e3 of _0x184259){if(!_0x5f42e3)continue;this[_0x1e02ec(0x263)](_0x5f42e3);}},Game_Battler[_0x263190(0x32e)]['onRegenerateCustomStateDamageOverTime']=function(_0x328927){const _0x248cb4=_0x263190,_0x6a3dec=this[_0x248cb4(0x345)](_0x328927['id'],_0x248cb4(0x31e))||0x0,_0x21b0f3=-this[_0x248cb4(0x1bc)](),_0xa3e24c=Math[_0x248cb4(0x17a)](_0x6a3dec,_0x21b0f3);if(_0xa3e24c!==0x0){const _0x554701=this[_0x248cb4(0xcd)][_0x248cb4(0x385)]||0x0;this[_0x248cb4(0x35f)](_0xa3e24c),this[_0x248cb4(0xcd)][_0x248cb4(0x385)]+=_0x554701;}const _0x773236=this['getStateData'](_0x328927['id'],_0x248cb4(0x169))||0x0;if(_0x773236!==0x0){const _0x597a23=this[_0x248cb4(0xcd)]['mpDamage']||0x0;this['gainMp'](_0x773236),this[_0x248cb4(0xcd)]['mpDamage']+=_0x597a23;}const _0x399073=this['getStateData'](_0x328927['id'],'slipTp')||0x0;_0x399073!==0x0&&this[_0x248cb4(0x172)](_0x399073);},VisuMZ[_0x263190(0x1d4)][_0x263190(0x19d)]=Game_Actor[_0x263190(0x32e)][_0x263190(0x1d5)],Game_Actor[_0x263190(0x32e)][_0x263190(0x1d5)]=function(){const _0x27bc4b=_0x263190,_0x40488b=VisuMZ[_0x27bc4b(0x1d4)][_0x27bc4b(0x19d)][_0x27bc4b(0x338)](this),_0x50f13e=VisuMZ[_0x27bc4b(0x1d4)][_0x27bc4b(0x1f6)]['Skills'];let _0x15c658=_0x50f13e[_0x27bc4b(0x2f3)];return $gameParty[_0x27bc4b(0x295)]()&&(_0x15c658=_0x15c658['concat'](_0x50f13e[_0x27bc4b(0xe8)])),_0x40488b[_0x27bc4b(0x15a)](_0x58e439=>!_0x15c658[_0x27bc4b(0x382)](_0x58e439));},Game_Actor[_0x263190(0x32e)]['usableSkills']=function(){const _0x5c09a0=_0x263190;return this[_0x5c09a0(0x1ad)]()['filter'](_0x56e0f5=>this[_0x5c09a0(0x179)](_0x56e0f5));},Game_Actor[_0x263190(0x32e)][_0x263190(0x179)]=function(_0x16d3b4){const _0x293d9f=_0x263190;if(!this[_0x293d9f(0x23b)](_0x16d3b4))return![];if(!_0x16d3b4)return![];if(!this[_0x293d9f(0x1b4)](_0x16d3b4))return![];if(this['isSkillHidden'](_0x16d3b4))return![];return!![];},Game_Actor[_0x263190(0x32e)]['isSkillTypeMatchForUse']=function(_0x1d54d0){const _0x20d333=_0x263190,_0x585e4c=this[_0x20d333(0x1d5)](),_0x5ab91d=DataManager[_0x20d333(0x2d7)](_0x1d54d0),_0x5c188a=_0x585e4c[_0x20d333(0x15a)](_0x139041=>_0x5ab91d[_0x20d333(0x382)](_0x139041));return _0x5c188a[_0x20d333(0x26a)]>0x0;},Game_Actor[_0x263190(0x32e)][_0x263190(0x153)]=function(_0x3b85cc){const _0x456f70=_0x263190;if(!VisuMZ[_0x456f70(0x1d4)][_0x456f70(0x22b)](this,_0x3b85cc))return!![];if(!VisuMZ[_0x456f70(0x1d4)][_0x456f70(0x292)](this,_0x3b85cc))return!![];if(!VisuMZ[_0x456f70(0x1d4)][_0x456f70(0x194)](this,_0x3b85cc))return!![];return![];},Game_Actor[_0x263190(0x32e)][_0x263190(0x254)]=function(){const _0x3208de=_0x263190;let _0x21cf5c=[this['actor'](),this[_0x3208de(0x109)]()];_0x21cf5c=_0x21cf5c[_0x3208de(0x20a)](this[_0x3208de(0x2a2)]()['filter'](_0x40130a=>_0x40130a));for(const _0x13d368 of this[_0x3208de(0x31c)]){const _0x15d715=$dataSkills[_0x13d368];if(_0x15d715)_0x21cf5c[_0x3208de(0x126)](_0x15d715);}return _0x21cf5c;},Game_Actor['prototype'][_0x263190(0x1bf)]=function(){const _0x3ceff2=_0x263190;Game_Battler[_0x3ceff2(0x32e)][_0x3ceff2(0x1bf)]['call'](this);const _0x57155f=VisuMZ['SkillsStatesCore']['Settings']['PassiveStates'][_0x3ceff2(0x205)];this['_cache']['passiveStates']=this[_0x3ceff2(0x244)][_0x3ceff2(0x231)][_0x3ceff2(0x20a)](_0x57155f);},VisuMZ[_0x263190(0x1d4)]['Game_Actor_learnSkill']=Game_Actor['prototype'][_0x263190(0x1b1)],Game_Actor[_0x263190(0x32e)][_0x263190(0x1b1)]=function(_0x3256de){const _0x2aa6e5=_0x263190;VisuMZ['SkillsStatesCore'][_0x2aa6e5(0x26b)][_0x2aa6e5(0x338)](this,_0x3256de),this[_0x2aa6e5(0x244)]={},this[_0x2aa6e5(0x231)]();},VisuMZ[_0x263190(0x1d4)][_0x263190(0x214)]=Game_Actor[_0x263190(0x32e)][_0x263190(0x1c8)],Game_Actor['prototype']['forgetSkill']=function(_0x532d4f){const _0x3f8f7f=_0x263190;VisuMZ[_0x3f8f7f(0x1d4)][_0x3f8f7f(0x214)][_0x3f8f7f(0x338)](this,_0x532d4f),this['_cache']={},this[_0x3f8f7f(0x231)]();},Game_Actor[_0x263190(0x32e)][_0x263190(0x395)]=function(){const _0x1736d2=_0x263190;return VisuMZ[_0x1736d2(0x1d4)]['Settings'][_0x1736d2(0x32c)][_0x1736d2(0x162)]??0x14;},Game_Enemy[_0x263190(0x32e)]['passiveStateObjects']=function(){const _0xc098ec=_0x263190;let _0x481fde=[this[_0xc098ec(0xdf)]()];return _0x481fde[_0xc098ec(0x20a)](this[_0xc098ec(0x1ad)]());},Game_Enemy['prototype'][_0x263190(0x1bf)]=function(){const _0x553af1=_0x263190;Game_Battler[_0x553af1(0x32e)][_0x553af1(0x1bf)][_0x553af1(0x338)](this);const _0x30ea0b=VisuMZ[_0x553af1(0x1d4)][_0x553af1(0x1f6)][_0x553af1(0x10a)][_0x553af1(0x2de)];this[_0x553af1(0x244)][_0x553af1(0x231)]=this[_0x553af1(0x244)][_0x553af1(0x231)][_0x553af1(0x20a)](_0x30ea0b);},Game_Enemy[_0x263190(0x32e)][_0x263190(0x1ad)]=function(){const _0xe44b21=_0x263190,_0x59ca44=[];for(const _0x35adb5 of this[_0xe44b21(0xdf)]()[_0xe44b21(0x1a2)]){const _0x2970dc=$dataSkills[_0x35adb5[_0xe44b21(0x15e)]];if(_0x2970dc&&!_0x59ca44[_0xe44b21(0x382)](_0x2970dc))_0x59ca44[_0xe44b21(0x126)](_0x2970dc);}return _0x59ca44;},Game_Enemy[_0x263190(0x32e)][_0x263190(0x2a0)]=function(_0x37ebff){const _0x59dbb6=_0x263190;return this[_0x59dbb6(0x2f0)]($dataStates[_0x37ebff]);},VisuMZ['SkillsStatesCore'][_0x263190(0x397)]=Game_Unit['prototype'][_0x263190(0x36c)],Game_Unit['prototype']['isAllDead']=function(){const _0x1a475f=_0x263190;if(this['isPartyAllAffectedByGroupDefeatStates']())return!![];return VisuMZ[_0x1a475f(0x1d4)][_0x1a475f(0x397)][_0x1a475f(0x338)](this);},Game_Unit[_0x263190(0x32e)][_0x263190(0xf6)]=function(){const _0x236e29=_0x263190,_0x4cf6ff=this[_0x236e29(0x377)]();for(const _0x390745 of _0x4cf6ff){if(!_0x390745[_0x236e29(0x330)]())return![];}return!![];},VisuMZ['SkillsStatesCore']['Game_Troop_setup']=Game_Troop['prototype'][_0x263190(0x211)],Game_Troop[_0x263190(0x32e)][_0x263190(0x211)]=function(_0x258759){const _0x2fbae2=_0x263190;VisuMZ['SkillsStatesCore'][_0x2fbae2(0x27e)][_0x2fbae2(0x338)](this,_0x258759),this[_0x2fbae2(0x313)]();},Game_Troop[_0x263190(0x32e)][_0x263190(0x313)]=function(){const _0x26e011=_0x263190;this[_0x26e011(0x2e3)]=Graphics[_0x26e011(0x1a9)];},Game_Troop[_0x263190(0x32e)][_0x263190(0xd9)]=function(){const _0x460456=_0x263190;return this[_0x460456(0x2e3)]=this[_0x460456(0x2e3)]||Graphics[_0x460456(0x1a9)],this['_currentTroopUniqueID'];},Scene_Skill['prototype'][_0x263190(0x320)]=function(){const _0x594015=_0x263190;if(ConfigManager[_0x594015(0x356)]&&ConfigManager[_0x594015(0x1d7)]!==undefined)return ConfigManager[_0x594015(0x1d7)];else{if(this[_0x594015(0x1f2)]())return this[_0x594015(0x2fe)]()['match'](/LOWER/i);else Scene_ItemBase[_0x594015(0x32e)][_0x594015(0x28c)][_0x594015(0x338)](this);}},Scene_Skill[_0x263190(0x32e)][_0x263190(0x28c)]=function(){const _0x288024=_0x263190;if(ConfigManager[_0x288024(0x356)]&&ConfigManager[_0x288024(0x373)]!==undefined)return ConfigManager['uiInputPosition'];else return this[_0x288024(0x1f2)]()?this[_0x288024(0x2fe)]()[_0x288024(0x1a1)](/RIGHT/i):Scene_ItemBase[_0x288024(0x32e)][_0x288024(0x28c)][_0x288024(0x338)](this);},Scene_Skill['prototype'][_0x263190(0x2fe)]=function(){const _0x3b6561=_0x263190;return VisuMZ[_0x3b6561(0x1d4)][_0x3b6561(0x1f6)][_0x3b6561(0x2d1)][_0x3b6561(0x241)];},Scene_Skill[_0x263190(0x32e)]['isUseModernControls']=function(){const _0x1fc8e7=_0x263190;return this[_0x1fc8e7(0x39b)]&&this[_0x1fc8e7(0x39b)][_0x1fc8e7(0x21a)]();},Scene_Skill[_0x263190(0x32e)][_0x263190(0x1f2)]=function(){const _0x1ab70b=_0x263190;return VisuMZ[_0x1ab70b(0x1d4)][_0x1ab70b(0x1f6)]['Skills'][_0x1ab70b(0x230)];},VisuMZ[_0x263190(0x1d4)][_0x263190(0x2fa)]=Scene_Skill[_0x263190(0x32e)][_0x263190(0x220)],Scene_Skill[_0x263190(0x32e)][_0x263190(0x220)]=function(){const _0xd3f0c1=_0x263190;return this['isUseSkillsStatesCoreUpdatedLayout']()?this[_0xd3f0c1(0x192)]():VisuMZ['SkillsStatesCore'][_0xd3f0c1(0x2fa)][_0xd3f0c1(0x338)](this);},Scene_Skill[_0x263190(0x32e)][_0x263190(0x192)]=function(){const _0x5e25a5=_0x263190,_0x4912be=0x0,_0x2cad5c=this[_0x5e25a5(0x159)](),_0x2d1be9=Graphics[_0x5e25a5(0x34e)],_0x5906c8=this[_0x5e25a5(0x17c)]();return new Rectangle(_0x4912be,_0x2cad5c,_0x2d1be9,_0x5906c8);},VisuMZ[_0x263190(0x1d4)][_0x263190(0x10e)]=Scene_Skill['prototype']['skillTypeWindowRect'],Scene_Skill[_0x263190(0x32e)][_0x263190(0x1d8)]=function(){const _0x1e2a55=_0x263190;return this['isUseSkillsStatesCoreUpdatedLayout']()?this[_0x1e2a55(0x12e)]():VisuMZ[_0x1e2a55(0x1d4)][_0x1e2a55(0x10e)]['call'](this);},Scene_Skill[_0x263190(0x32e)][_0x263190(0x354)]=function(){const _0x5f36bf=_0x263190;return VisuMZ[_0x5f36bf(0x1d4)][_0x5f36bf(0x1f6)][_0x5f36bf(0x2d1)][_0x5f36bf(0x105)]??Scene_MenuBase['prototype']['mainCommandWidth'][_0x5f36bf(0x338)](this);},Scene_Skill['prototype'][_0x263190(0x12e)]=function(){const _0x206145=_0x263190,_0x477171=this[_0x206145(0x354)](),_0x46d8d4=this[_0x206145(0x276)](0x3,!![]),_0x5b4458=this[_0x206145(0x28c)]()?Graphics[_0x206145(0x34e)]-_0x477171:0x0,_0x33b639=this[_0x206145(0x27a)]();return new Rectangle(_0x5b4458,_0x33b639,_0x477171,_0x46d8d4);},VisuMZ[_0x263190(0x1d4)][_0x263190(0x2b4)]=Scene_Skill[_0x263190(0x32e)][_0x263190(0x25d)],Scene_Skill['prototype'][_0x263190(0x25d)]=function(){const _0x346f93=_0x263190;return this[_0x346f93(0x1f2)]()?this[_0x346f93(0x10d)]():VisuMZ['SkillsStatesCore'][_0x346f93(0x2b4)][_0x346f93(0x338)](this);},Scene_Skill[_0x263190(0x32e)][_0x263190(0x10d)]=function(){const _0x1e6ec0=_0x263190,_0x2d3c7f=Graphics['boxWidth']-this['mainCommandWidth'](),_0x536d35=this['_skillTypeWindow']['height'],_0x5937ab=this['isRightInputMode']()?0x0:Graphics[_0x1e6ec0(0x34e)]-_0x2d3c7f,_0x57330d=this[_0x1e6ec0(0x27a)]();return new Rectangle(_0x5937ab,_0x57330d,_0x2d3c7f,_0x536d35);},VisuMZ['SkillsStatesCore'][_0x263190(0x22f)]=Scene_Skill['prototype'][_0x263190(0x2c8)],Scene_Skill[_0x263190(0x32e)][_0x263190(0x2c8)]=function(){const _0x416cc5=_0x263190;VisuMZ[_0x416cc5(0x1d4)][_0x416cc5(0x22f)]['call'](this),this[_0x416cc5(0x29a)]()&&this[_0x416cc5(0xd7)]();},VisuMZ['SkillsStatesCore'][_0x263190(0x266)]=Scene_Skill[_0x263190(0x32e)][_0x263190(0x1af)],Scene_Skill['prototype'][_0x263190(0x1af)]=function(){const _0x1b9be3=_0x263190;if(this[_0x1b9be3(0x1f2)]())return this[_0x1b9be3(0x213)]();else{const _0x1faeb4=VisuMZ[_0x1b9be3(0x1d4)]['Scene_Skill_itemWindowRect'][_0x1b9be3(0x338)](this);return this['allowCreateShopStatusWindow']()&&this[_0x1b9be3(0x35c)]()&&(_0x1faeb4[_0x1b9be3(0x258)]-=this[_0x1b9be3(0x389)]()),_0x1faeb4;}},Scene_Skill[_0x263190(0x32e)][_0x263190(0x213)]=function(){const _0x3b9821=_0x263190,_0x8992ed=Graphics[_0x3b9821(0x34e)]-this[_0x3b9821(0x389)](),_0x1d3de7=this[_0x3b9821(0x133)]()-this[_0x3b9821(0x21d)][_0x3b9821(0x374)],_0x8857a2=this[_0x3b9821(0x28c)]()?Graphics['boxWidth']-_0x8992ed:0x0,_0x26c0d1=this[_0x3b9821(0x21d)]['y']+this[_0x3b9821(0x21d)][_0x3b9821(0x374)];return new Rectangle(_0x8857a2,_0x26c0d1,_0x8992ed,_0x1d3de7);},Scene_Skill['prototype']['allowCreateShopStatusWindow']=function(){const _0x45d50b=_0x263190;if(!Imported['VisuMZ_1_ItemsEquipsCore'])return![];else return this[_0x45d50b(0x1f2)]()?!![]:VisuMZ[_0x45d50b(0x1d4)][_0x45d50b(0x1f6)][_0x45d50b(0x2d1)][_0x45d50b(0x378)];},Scene_Skill[_0x263190(0x32e)]['adjustItemWidthByShopStatus']=function(){const _0x38daf1=_0x263190;return VisuMZ[_0x38daf1(0x1d4)][_0x38daf1(0x1f6)]['Skills'][_0x38daf1(0x35e)];},Scene_Skill[_0x263190(0x32e)][_0x263190(0xd7)]=function(){const _0x26fa9f=_0x263190,_0x5627d7=this[_0x26fa9f(0x15d)]();this[_0x26fa9f(0x1db)]=new Window_ShopStatus(_0x5627d7),this[_0x26fa9f(0x309)](this[_0x26fa9f(0x1db)]),this[_0x26fa9f(0x35d)][_0x26fa9f(0x363)](this[_0x26fa9f(0x1db)]);const _0x16833b=VisuMZ['SkillsStatesCore'][_0x26fa9f(0x1f6)][_0x26fa9f(0x2d1)][_0x26fa9f(0x184)];this['_shopStatusWindow'][_0x26fa9f(0xea)](_0x16833b||0x0);},Scene_Skill[_0x263190(0x32e)][_0x263190(0x15d)]=function(){const _0x38d75b=_0x263190;return this[_0x38d75b(0x1f2)]()?this[_0x38d75b(0x154)]():VisuMZ[_0x38d75b(0x1d4)][_0x38d75b(0x1f6)][_0x38d75b(0x2d1)][_0x38d75b(0x236)][_0x38d75b(0x338)](this);},Scene_Skill[_0x263190(0x32e)][_0x263190(0x154)]=function(){const _0x26398f=_0x263190,_0x2332cf=this['shopStatusWidth'](),_0x364e75=this['_itemWindow']['height'],_0x434cb8=this[_0x26398f(0x28c)]()?0x0:Graphics[_0x26398f(0x34e)]-this[_0x26398f(0x389)](),_0x135554=this[_0x26398f(0x35d)]['y'];return new Rectangle(_0x434cb8,_0x135554,_0x2332cf,_0x364e75);},Scene_Skill['prototype']['shopStatusWidth']=function(){const _0x401742=_0x263190;return Imported[_0x401742(0x2a9)]?Scene_Shop['prototype'][_0x401742(0x315)]():0x0;},Scene_Skill[_0x263190(0x32e)][_0x263190(0x278)]=function(){const _0x332feb=_0x263190;return this[_0x332feb(0xe2)]&&this['_skillTypeWindow'][_0x332feb(0x221)]?TextManager[_0x332feb(0x2bc)]:'';},VisuMZ[_0x263190(0x1d4)][_0x263190(0x2e5)]=Sprite_Gauge[_0x263190(0x32e)]['initMembers'],Sprite_Gauge['prototype'][_0x263190(0x136)]=function(){const _0x1553c0=_0x263190;VisuMZ[_0x1553c0(0x1d4)]['Sprite_Gauge_initMembers'][_0x1553c0(0x338)](this),this[_0x1553c0(0x34b)]=null;},VisuMZ['SkillsStatesCore']['Sprite_Gauge_setup']=Sprite_Gauge[_0x263190(0x32e)]['setup'],Sprite_Gauge[_0x263190(0x32e)]['setup']=function(_0x4547cb,_0x4e0b9a){const _0x5302dc=_0x263190;this[_0x5302dc(0x319)](_0x4547cb,_0x4e0b9a),_0x4e0b9a=_0x4e0b9a[_0x5302dc(0x23e)](),VisuMZ[_0x5302dc(0x1d4)][_0x5302dc(0x2cf)][_0x5302dc(0x338)](this,_0x4547cb,_0x4e0b9a);},Sprite_Gauge[_0x263190(0x32e)]['setupSkillsStatesCore']=function(_0xc426f0,_0x25c316){const _0x286eae=_0x263190,_0x5856cb=VisuMZ[_0x286eae(0x1d4)][_0x286eae(0x1f6)][_0x286eae(0x1ca)][_0x286eae(0x15a)](_0x59b742=>_0x59b742[_0x286eae(0x149)][_0x286eae(0x24d)]()===_0x25c316[_0x286eae(0x24d)]());_0x5856cb[_0x286eae(0x26a)]>=0x1?this[_0x286eae(0x34b)]=_0x5856cb[0x0]:this[_0x286eae(0x34b)]=null;},VisuMZ[_0x263190(0x1d4)][_0x263190(0x27d)]=Sprite_Gauge['prototype']['currentValue'],Sprite_Gauge['prototype'][_0x263190(0x15c)]=function(){const _0x2a36f6=_0x263190;return this['_battler']&&this[_0x2a36f6(0x34b)]?this[_0x2a36f6(0x27c)]():VisuMZ[_0x2a36f6(0x1d4)]['Sprite_Gauge_currentValue'][_0x2a36f6(0x338)](this);},Sprite_Gauge[_0x263190(0x32e)][_0x263190(0x27c)]=function(){const _0x2f98c6=_0x263190;return this['_costSettings'][_0x2f98c6(0x399)][_0x2f98c6(0x338)](this[_0x2f98c6(0x380)]);},VisuMZ[_0x263190(0x1d4)][_0x263190(0x29b)]=Sprite_Gauge[_0x263190(0x32e)][_0x263190(0x310)],Sprite_Gauge['prototype']['currentMaxValue']=function(){const _0x31755f=_0x263190;return this[_0x31755f(0x380)]&&this[_0x31755f(0x34b)]?this[_0x31755f(0x166)]():VisuMZ[_0x31755f(0x1d4)][_0x31755f(0x29b)][_0x31755f(0x338)](this);},Sprite_Gauge['prototype'][_0x263190(0x166)]=function(){const _0x16d7cb=_0x263190;return this[_0x16d7cb(0x34b)][_0x16d7cb(0x1a8)][_0x16d7cb(0x338)](this['_battler']);},VisuMZ[_0x263190(0x1d4)][_0x263190(0x349)]=Sprite_Gauge['prototype'][_0x263190(0x1e9)],Sprite_Gauge['prototype'][_0x263190(0x1e9)]=function(){const _0x1d5100=_0x263190,_0x347bb4=VisuMZ[_0x1d5100(0x1d4)][_0x1d5100(0x349)][_0x1d5100(0x338)](this);return _0x347bb4[_0x1d5100(0x150)](0x0,0x1);},VisuMZ[_0x263190(0x1d4)][_0x263190(0x2ae)]=Sprite_Gauge[_0x263190(0x32e)][_0x263190(0x25b)],Sprite_Gauge[_0x263190(0x32e)][_0x263190(0x25b)]=function(){const _0x9f190e=_0x263190;this[_0x9f190e(0x380)]&&this[_0x9f190e(0x34b)]?(this['bitmap']['clear'](),this['redrawSkillsStatesCore']()):VisuMZ[_0x9f190e(0x1d4)][_0x9f190e(0x2ae)][_0x9f190e(0x338)](this);},Sprite_Gauge[_0x263190(0x32e)][_0x263190(0x260)]=function(){const _0x1253e9=_0x263190;let _0x1ea2e3=this[_0x1253e9(0x15c)]();return Imported['VisuMZ_0_CoreEngine']&&this[_0x1253e9(0xe4)]()&&(_0x1ea2e3=VisuMZ[_0x1253e9(0x2c1)](_0x1ea2e3)),_0x1ea2e3;},Sprite_Gauge[_0x263190(0x32e)][_0x263190(0x322)]=function(){const _0x18de41=_0x263190;this['bitmap']['clear'](),this['_costSettings']['GaugeDrawJS'][_0x18de41(0x338)](this);},Sprite_Gauge['prototype'][_0x263190(0x16e)]=function(_0x1b843a,_0x632c75,_0x1d81a5,_0x79323b,_0x26cc57,_0x210565){const _0x3daad4=_0x263190,_0x5a5479=this[_0x3daad4(0x1e9)](),_0x4260f6=Math[_0x3daad4(0x2ac)]((_0x26cc57-0x2)*_0x5a5479),_0x2200cf=_0x210565-0x2,_0x156fa9=this[_0x3daad4(0x1e1)]();this[_0x3daad4(0xf7)][_0x3daad4(0x25a)](_0x1d81a5,_0x79323b,_0x26cc57,_0x210565,_0x156fa9),this[_0x3daad4(0xf7)][_0x3daad4(0x256)](_0x1d81a5+0x1,_0x79323b+0x1,_0x4260f6,_0x2200cf,_0x1b843a,_0x632c75);},Sprite_Gauge['prototype'][_0x263190(0x17d)]=function(){const _0x27d030=_0x263190,_0x5b9494=VisuMZ['SkillsStatesCore']['Settings'][_0x27d030(0x2fc)];return _0x5b9494[_0x27d030(0x2c3)]==='number'?$gameSystem[_0x27d030(0x187)]():$gameSystem[_0x27d030(0x2ad)]();},Sprite_Gauge['prototype'][_0x263190(0x1ee)]=function(){const _0x2c2083=_0x263190,_0x29242c=VisuMZ[_0x2c2083(0x1d4)][_0x2c2083(0x1f6)][_0x2c2083(0x2fc)];return _0x29242c[_0x2c2083(0x2c3)]==='number'?$gameSystem[_0x2c2083(0x177)]()-0x6:$gameSystem['mainFontSize']()-0x2;},Sprite_Gauge[_0x263190(0x32e)][_0x263190(0x104)]=function(){const _0x386d4a=_0x263190,_0x4bdb50=VisuMZ['SkillsStatesCore'][_0x386d4a(0x1f6)][_0x386d4a(0x2fc)];return _0x4bdb50[_0x386d4a(0x30f)]===_0x386d4a(0x287)?$gameSystem[_0x386d4a(0x187)]():$gameSystem[_0x386d4a(0x2ad)]();},Sprite_Gauge[_0x263190(0x32e)]['valueFontSize']=function(){const _0x2c67bb=_0x263190,_0x47e3aa=VisuMZ['SkillsStatesCore'][_0x2c67bb(0x1f6)][_0x2c67bb(0x2fc)];return _0x47e3aa[_0x2c67bb(0x30f)]===_0x2c67bb(0x287)?$gameSystem[_0x2c67bb(0x177)]()-0x6:$gameSystem[_0x2c67bb(0x177)]()-0x2;},Sprite_Gauge[_0x263190(0x32e)][_0x263190(0x329)]=function(){const _0x2eff73=_0x263190,_0x50d502=VisuMZ['SkillsStatesCore'][_0x2eff73(0x1f6)]['Gauge'];if(_0x50d502[_0x2eff73(0x267)]){if(_0x50d502[_0x2eff73(0x390)]===0x1)return this[_0x2eff73(0x1e5)]();else{if(_0x50d502[_0x2eff73(0x390)]===0x2)return this['gaugeColor2']();}}const _0x3ea493=_0x50d502[_0x2eff73(0x2ff)];return ColorManager[_0x2eff73(0x1e6)](_0x3ea493);},Sprite_Gauge[_0x263190(0x32e)][_0x263190(0x321)]=function(){const _0x3bb135=_0x263190,_0x32da1f=VisuMZ[_0x3bb135(0x1d4)][_0x3bb135(0x1f6)][_0x3bb135(0x2fc)];if(this[_0x3bb135(0x175)]()<=0x0)return'rgba(0,\x200,\x200,\x200)';else return _0x32da1f[_0x3bb135(0x331)]?'rgba(0,\x200,\x200,\x201)':ColorManager[_0x3bb135(0xde)]();},Sprite_Gauge['prototype'][_0x263190(0x175)]=function(){const _0x38177e=_0x263190;return VisuMZ[_0x38177e(0x1d4)]['Settings'][_0x38177e(0x2fc)][_0x38177e(0x1a0)]||0x0;},Sprite_Gauge['prototype'][_0x263190(0x1cc)]=function(){const _0x290d8c=_0x263190,_0x3f3ddd=VisuMZ[_0x290d8c(0x1d4)]['Settings']['Gauge'];if(this[_0x290d8c(0x14a)]()<=0x0)return _0x290d8c(0x269);else return _0x3f3ddd[_0x290d8c(0x16d)]?_0x290d8c(0x18b):ColorManager[_0x290d8c(0xde)]();},Sprite_Gauge['prototype'][_0x263190(0x14a)]=function(){const _0x333280=_0x263190;return VisuMZ[_0x333280(0x1d4)][_0x333280(0x1f6)][_0x333280(0x2fc)]['ValueOutlineWidth']||0x0;},VisuMZ[_0x263190(0x1d4)][_0x263190(0xd8)]=Sprite_StateIcon[_0x263190(0x32e)]['loadBitmap'],Sprite_StateIcon[_0x263190(0x32e)]['loadBitmap']=function(){const _0x47a412=_0x263190;VisuMZ['SkillsStatesCore'][_0x47a412(0xd8)][_0x47a412(0x338)](this),this[_0x47a412(0x312)]();},Sprite_StateIcon['prototype'][_0x263190(0x312)]=function(){const _0x3d00be=_0x263190,_0x1b6d15=Window_Base[_0x3d00be(0x32e)][_0x3d00be(0x2cb)]();this[_0x3d00be(0x11d)]=new Sprite(),this[_0x3d00be(0x11d)]['bitmap']=new Bitmap(ImageManager[_0x3d00be(0x36e)],_0x1b6d15),this[_0x3d00be(0x11d)][_0x3d00be(0x14f)]['x']=this[_0x3d00be(0x14f)]['x'],this['_turnDisplaySprite'][_0x3d00be(0x14f)]['y']=this['anchor']['y'],this[_0x3d00be(0x14b)](this['_turnDisplaySprite']),this[_0x3d00be(0x124)]=this[_0x3d00be(0x11d)][_0x3d00be(0xf7)];},VisuMZ[_0x263190(0x1d4)][_0x263190(0x143)]=Sprite_StateIcon[_0x263190(0x32e)]['updateFrame'],Sprite_StateIcon[_0x263190(0x32e)][_0x263190(0x25f)]=function(){const _0x170867=_0x263190;VisuMZ['SkillsStatesCore']['Sprite_StateIcon_updateFrame'][_0x170867(0x338)](this),this['updateTurnDisplaySprite']();},Sprite_StateIcon[_0x263190(0x32e)][_0x263190(0x2ee)]=function(_0x3eca87,_0x32cdef,_0x2c2387,_0x3259c6,_0x3f81c4){const _0x3f3a23=_0x263190;this['contents'][_0x3f3a23(0x2ee)](_0x3eca87,_0x32cdef,_0x2c2387,_0x3259c6,this['contents']['height'],_0x3f81c4);},Sprite_StateIcon[_0x263190(0x32e)][_0x263190(0x13d)]=function(){const _0x257101=_0x263190;this[_0x257101(0x2c4)](),this[_0x257101(0x124)][_0x257101(0x2f7)]();const _0x203c76=this[_0x257101(0x380)];if(!_0x203c76)return;const _0x2998ee=_0x203c76[_0x257101(0x130)]()[_0x257101(0x15a)](_0x240195=>_0x240195[_0x257101(0x19b)]>0x0),_0x3eb4fd=[...Array(0x8)[_0x257101(0x204)]()]['filter'](_0x327767=>_0x203c76[_0x257101(0x223)](_0x327767)!==0x0),_0x41eae3=this[_0x257101(0xf2)],_0x11cf0a=_0x2998ee[_0x41eae3];if(_0x11cf0a)Window_Base[_0x257101(0x32e)][_0x257101(0x24b)]['call'](this,_0x203c76,_0x11cf0a,0x0,0x0),Window_Base[_0x257101(0x32e)][_0x257101(0x38f)]['call'](this,_0x203c76,_0x11cf0a,0x0,0x0);else{const _0x89295d=_0x3eb4fd[_0x41eae3-_0x2998ee['length']];if(_0x89295d===undefined)return;Window_Base[_0x257101(0x32e)][_0x257101(0x234)][_0x257101(0x338)](this,_0x203c76,_0x89295d,0x0,0x0),Window_Base[_0x257101(0x32e)][_0x257101(0x364)][_0x257101(0x338)](this,_0x203c76,_0x89295d,0x0,0x0);}},Sprite_StateIcon[_0x263190(0x32e)][_0x263190(0x2c4)]=function(){const _0x3aa82a=_0x263190;this[_0x3aa82a(0x124)][_0x3aa82a(0x252)]=$gameSystem[_0x3aa82a(0x2ad)](),this[_0x3aa82a(0x124)][_0x3aa82a(0xe3)]=$gameSystem[_0x3aa82a(0x177)](),this[_0x3aa82a(0xef)]();},Sprite_StateIcon['prototype'][_0x263190(0xef)]=function(){const _0xa0f94c=_0x263190;this['changeTextColor'](ColorManager[_0xa0f94c(0x186)]()),this['changeOutlineColor'](ColorManager[_0xa0f94c(0xde)]());},Sprite_StateIcon['prototype'][_0x263190(0x296)]=function(_0x32a5cd){const _0x4da5d2=_0x263190;this[_0x4da5d2(0x124)][_0x4da5d2(0x2af)]=_0x32a5cd;},Sprite_StateIcon[_0x263190(0x32e)][_0x263190(0xdd)]=function(_0x25b740){const _0x3ce249=_0x263190;this['contents'][_0x3ce249(0xde)]=_0x25b740;},Sprite_StateIcon['prototype'][_0x263190(0xdb)]=function(){const _0x10fac6=_0x263190;this['_hidden']=!![],this[_0x10fac6(0x1ed)]();},Window_Base[_0x263190(0x32e)]['drawSkillCost']=function(_0x235db3,_0x28a369,_0x58e0eb,_0x57e0be,_0x50b622){const _0x50bd72=_0x263190,_0x5df292=this[_0x50bd72(0x1aa)](_0x235db3,_0x28a369),_0x3522f0=this['textSizeEx'](_0x5df292,_0x58e0eb,_0x57e0be,_0x50b622),_0x1193c7=_0x58e0eb+_0x50b622-_0x3522f0[_0x50bd72(0x258)];this[_0x50bd72(0x37e)](_0x5df292,_0x1193c7,_0x57e0be,_0x50b622),this[_0x50bd72(0x2c4)]();},Window_Base[_0x263190(0x32e)]['createAllSkillCostText']=function(_0x14abff,_0x681da3){const _0x5e60e3=_0x263190;let _0x50fc91='';for(settings of VisuMZ[_0x5e60e3(0x1d4)][_0x5e60e3(0x1f6)][_0x5e60e3(0x1ca)]){if(!this[_0x5e60e3(0x29d)](_0x14abff,_0x681da3,settings))continue;if(_0x50fc91[_0x5e60e3(0x26a)]>0x0)_0x50fc91+=this[_0x5e60e3(0xf5)]();_0x50fc91+=this[_0x5e60e3(0x274)](_0x14abff,_0x681da3,settings);}_0x50fc91=this[_0x5e60e3(0x12f)](_0x14abff,_0x681da3,_0x50fc91);if(_0x681da3[_0x5e60e3(0x2cc)]['match'](/<CUSTOM COST TEXT>\s*([\s\S]*)\s*<\/CUSTOM COST TEXT>/i)){if(_0x50fc91[_0x5e60e3(0x26a)]>0x0)_0x50fc91+=this['skillCostSeparator']();_0x50fc91+=String(RegExp['$1']);}return _0x50fc91;},Window_Base[_0x263190(0x32e)]['makeAdditionalSkillCostText']=function(_0x141982,_0x10d523,_0x5cd407){return _0x5cd407;},Window_Base[_0x263190(0x32e)][_0x263190(0x29d)]=function(_0x229fd5,_0x293f12,_0x326001){const _0x3f8631=_0x263190;let _0x42af66=_0x326001[_0x3f8631(0x299)][_0x3f8631(0x338)](_0x229fd5,_0x293f12);return _0x42af66=_0x229fd5['adjustSkillCost'](_0x293f12,_0x42af66,_0x326001),_0x326001[_0x3f8631(0xeb)][_0x3f8631(0x338)](_0x229fd5,_0x293f12,_0x42af66,_0x326001);},Window_Base[_0x263190(0x32e)]['createSkillCostText']=function(_0x3227d1,_0x1d01ef,_0x48015d){const _0x4bdfcb=_0x263190;let _0x604b3f=_0x48015d[_0x4bdfcb(0x299)][_0x4bdfcb(0x338)](_0x3227d1,_0x1d01ef);return _0x604b3f=_0x3227d1[_0x4bdfcb(0x332)](_0x1d01ef,_0x604b3f,_0x48015d),_0x48015d[_0x4bdfcb(0x2ce)][_0x4bdfcb(0x338)](_0x3227d1,_0x1d01ef,_0x604b3f,_0x48015d);},Window_Base[_0x263190(0x32e)][_0x263190(0xf5)]=function(){return'\x20';},Window_Base['prototype'][_0x263190(0x12d)]=function(_0x24fcff,_0x565562,_0x6ac461,_0x106b3e){const _0x2f1bea=_0x263190;if(!_0x24fcff)return;VisuMZ[_0x2f1bea(0x1d4)]['Window_StatusBase_drawActorIcons'][_0x2f1bea(0x338)](this,_0x24fcff,_0x565562,_0x6ac461,_0x106b3e),this['drawActorIconsAllTurnCounters'](_0x24fcff,_0x565562,_0x6ac461,_0x106b3e);},Window_Base[_0x263190(0x32e)]['drawActorIconsAllTurnCounters']=function(_0x5b0fcc,_0xaa5d3a,_0x508227,_0x4608e5){const _0x1770ca=_0x263190;_0x4608e5=_0x4608e5||0x90;const _0x48fd80=ImageManager[_0x1770ca(0x36e)],_0x2946fe=_0x5b0fcc['allIcons']()[_0x1770ca(0x108)](0x0,Math[_0x1770ca(0x2ac)](_0x4608e5/_0x48fd80)),_0x4d86b6=_0x5b0fcc[_0x1770ca(0x130)]()[_0x1770ca(0x15a)](_0x446eaf=>_0x446eaf[_0x1770ca(0x19b)]>0x0),_0x21e03b=[...Array(0x8)[_0x1770ca(0x204)]()][_0x1770ca(0x15a)](_0xf3bbb9=>_0x5b0fcc[_0x1770ca(0x223)](_0xf3bbb9)!==0x0),_0x2540bd=[];let _0x1a8131=_0xaa5d3a;for(let _0x56eb88=0x0;_0x56eb88<_0x2946fe[_0x1770ca(0x26a)];_0x56eb88++){this[_0x1770ca(0x2c4)]();const _0x3c3f0f=_0x4d86b6[_0x56eb88];if(_0x3c3f0f)!_0x2540bd[_0x1770ca(0x382)](_0x3c3f0f)&&this[_0x1770ca(0x24b)](_0x5b0fcc,_0x3c3f0f,_0x1a8131,_0x508227),this[_0x1770ca(0x38f)](_0x5b0fcc,_0x3c3f0f,_0x1a8131,_0x508227),_0x2540bd[_0x1770ca(0x126)](_0x3c3f0f);else{const _0x3c4cbb=_0x21e03b[_0x56eb88-_0x4d86b6[_0x1770ca(0x26a)]];this[_0x1770ca(0x234)](_0x5b0fcc,_0x3c4cbb,_0x1a8131,_0x508227),this['drawActorBuffRates'](_0x5b0fcc,_0x3c4cbb,_0x1a8131,_0x508227);}_0x1a8131+=_0x48fd80;}},Window_Base[_0x263190(0x32e)][_0x263190(0x24b)]=function(_0x1700fb,_0x98af3f,_0x61a29a,_0x31f979){const _0x3b10b8=_0x263190;if(!VisuMZ['SkillsStatesCore']['Settings'][_0x3b10b8(0x32c)][_0x3b10b8(0x38c)])return;if(!_0x1700fb[_0x3b10b8(0x245)](_0x98af3f['id']))return;if(_0x98af3f[_0x3b10b8(0x106)]===0x0)return;if(_0x98af3f[_0x3b10b8(0x2cc)]['match'](/<HIDE STATE TURNS>/i))return;const _0x31d891=_0x1700fb[_0x3b10b8(0x32f)](_0x98af3f['id']),_0x5ca1aa=ImageManager[_0x3b10b8(0x36e)],_0x171d7e=ColorManager[_0x3b10b8(0x2aa)](_0x98af3f);this[_0x3b10b8(0x296)](_0x171d7e),this['changeOutlineColor'](_0x3b10b8(0x18b)),this[_0x3b10b8(0x124)][_0x3b10b8(0x107)]=!![],this[_0x3b10b8(0x124)][_0x3b10b8(0xe3)]=VisuMZ[_0x3b10b8(0x1d4)][_0x3b10b8(0x1f6)][_0x3b10b8(0x32c)][_0x3b10b8(0x239)],_0x61a29a+=VisuMZ['SkillsStatesCore'][_0x3b10b8(0x1f6)][_0x3b10b8(0x32c)]['TurnOffsetX'],_0x31f979+=VisuMZ[_0x3b10b8(0x1d4)][_0x3b10b8(0x1f6)][_0x3b10b8(0x32c)][_0x3b10b8(0x328)],this[_0x3b10b8(0x2ee)](_0x31d891,_0x61a29a,_0x31f979,_0x5ca1aa,_0x3b10b8(0x2dd)),this[_0x3b10b8(0x124)][_0x3b10b8(0x107)]=![],this[_0x3b10b8(0x2c4)]();},Window_Base[_0x263190(0x32e)]['drawActorStateData']=function(_0x2d7e6c,_0x25e48d,_0x35b767,_0x5ce75e){const _0x3d9284=_0x263190;if(!VisuMZ[_0x3d9284(0x1d4)][_0x3d9284(0x1f6)]['States'][_0x3d9284(0x1c0)])return;const _0x53d3dd=ImageManager[_0x3d9284(0x36e)],_0x1e1aa6=ImageManager[_0x3d9284(0x18f)]/0x2,_0x3681f4=ColorManager[_0x3d9284(0x186)]();this[_0x3d9284(0x296)](_0x3681f4),this[_0x3d9284(0xdd)]('rgba(0,\x200,\x200,\x201)'),this[_0x3d9284(0x124)]['fontBold']=!![],this[_0x3d9284(0x124)][_0x3d9284(0xe3)]=VisuMZ['SkillsStatesCore'][_0x3d9284(0x1f6)]['States']['DataFontSize'],_0x35b767+=VisuMZ[_0x3d9284(0x1d4)][_0x3d9284(0x1f6)][_0x3d9284(0x32c)][_0x3d9284(0x2c9)],_0x5ce75e+=VisuMZ[_0x3d9284(0x1d4)]['Settings']['States']['DataOffsetY'];const _0x3ccd25=String(_0x2d7e6c[_0x3d9284(0x1c9)](_0x25e48d['id']));this['drawText'](_0x3ccd25,_0x35b767,_0x5ce75e,_0x53d3dd,'center'),this[_0x3d9284(0x124)]['fontBold']=![],this[_0x3d9284(0x2c4)]();},Window_Base[_0x263190(0x32e)][_0x263190(0x234)]=function(_0x38959c,_0x1bc71c,_0x356da7,_0x405cd7){const _0x59abf1=_0x263190;if(!VisuMZ[_0x59abf1(0x1d4)][_0x59abf1(0x1f6)][_0x59abf1(0x14c)][_0x59abf1(0x38c)])return;const _0x17e2b2=_0x38959c[_0x59abf1(0x223)](_0x1bc71c);if(_0x17e2b2===0x0)return;const _0x43fc0b=_0x38959c[_0x59abf1(0x2a3)](_0x1bc71c),_0x4213ec=ImageManager[_0x59abf1(0x36e)],_0x5d2950=_0x17e2b2>0x0?ColorManager['buffColor']():ColorManager[_0x59abf1(0x284)]();this[_0x59abf1(0x296)](_0x5d2950),this['changeOutlineColor'](_0x59abf1(0x18b)),this[_0x59abf1(0x124)][_0x59abf1(0x107)]=!![],this[_0x59abf1(0x124)][_0x59abf1(0xe3)]=VisuMZ[_0x59abf1(0x1d4)][_0x59abf1(0x1f6)][_0x59abf1(0x14c)][_0x59abf1(0x239)],_0x356da7+=VisuMZ[_0x59abf1(0x1d4)]['Settings'][_0x59abf1(0x14c)][_0x59abf1(0x29f)],_0x405cd7+=VisuMZ['SkillsStatesCore'][_0x59abf1(0x1f6)][_0x59abf1(0x14c)][_0x59abf1(0x328)],this['drawText'](_0x43fc0b,_0x356da7,_0x405cd7,_0x4213ec,_0x59abf1(0x2dd)),this[_0x59abf1(0x124)][_0x59abf1(0x107)]=![],this['resetFontSettings']();},Window_Base['prototype'][_0x263190(0x364)]=function(_0x3f6331,_0x3cf73c,_0x134084,_0x40bcd7){const _0x1aed67=_0x263190;if(!VisuMZ[_0x1aed67(0x1d4)][_0x1aed67(0x1f6)][_0x1aed67(0x14c)][_0x1aed67(0x1c0)])return;const _0x67a076=_0x3f6331[_0x1aed67(0x281)](_0x3cf73c),_0x2e382a=_0x3f6331[_0x1aed67(0x223)](_0x3cf73c),_0x3f2184=ImageManager['iconWidth'],_0x41044a=ImageManager['iconHeight']/0x2,_0x235db9=_0x2e382a>0x0?ColorManager[_0x1aed67(0x28f)]():ColorManager['debuffColor']();this[_0x1aed67(0x296)](_0x235db9),this[_0x1aed67(0xdd)](_0x1aed67(0x18b)),this[_0x1aed67(0x124)]['fontBold']=!![],this['contents'][_0x1aed67(0xe3)]=VisuMZ[_0x1aed67(0x1d4)][_0x1aed67(0x1f6)]['Buffs'][_0x1aed67(0x272)],_0x134084+=VisuMZ[_0x1aed67(0x1d4)][_0x1aed67(0x1f6)]['Buffs'][_0x1aed67(0x2c9)],_0x40bcd7+=VisuMZ[_0x1aed67(0x1d4)][_0x1aed67(0x1f6)][_0x1aed67(0x14c)][_0x1aed67(0x1fc)];const _0x5dac81=_0x1aed67(0x38b)['format'](Math[_0x1aed67(0x2b3)](_0x67a076*0x64));this['drawText'](_0x5dac81,_0x134084,_0x40bcd7,_0x3f2184,'center'),this[_0x1aed67(0x124)][_0x1aed67(0x107)]=![],this[_0x1aed67(0x2c4)]();},VisuMZ['SkillsStatesCore'][_0x263190(0x2e0)]=Window_StatusBase[_0x263190(0x32e)][_0x263190(0x2cd)],Window_StatusBase[_0x263190(0x32e)][_0x263190(0x2cd)]=function(_0x436ca3,_0x107f69,_0x59b603,_0x20f0fa){const _0x1c807e=_0x263190;if(_0x436ca3[_0x1c807e(0x25e)]())_0x107f69=this['convertGaugeTypeSkillsStatesCore'](_0x436ca3,_0x107f69);this['placeExactGauge'](_0x436ca3,_0x107f69,_0x59b603,_0x20f0fa);},Window_StatusBase['prototype'][_0x263190(0x1d2)]=function(_0x2da175,_0x400f39,_0x33bd4f,_0x35e55e){const _0x16bebd=_0x263190;if([_0x16bebd(0x11f),_0x16bebd(0x23f)]['includes'](_0x400f39['toLowerCase']()))return;VisuMZ[_0x16bebd(0x1d4)][_0x16bebd(0x2e0)][_0x16bebd(0x338)](this,_0x2da175,_0x400f39,_0x33bd4f,_0x35e55e);},Window_StatusBase['prototype'][_0x263190(0x1ec)]=function(_0x2566d2,_0x512e96){const _0x4c3830=_0x263190,_0x1c0dd9=_0x2566d2['currentClass']()['note'];if(_0x512e96==='hp'&&_0x1c0dd9[_0x4c3830(0x1a1)](/<REPLACE HP GAUGE:[ ](.*)>/i))return String(RegExp['$1']);else{if(_0x512e96==='mp'&&_0x1c0dd9['match'](/<REPLACE MP GAUGE:[ ](.*)>/i))return String(RegExp['$1']);else return _0x512e96==='tp'&&_0x1c0dd9['match'](/<REPLACE TP GAUGE:[ ](.*)>/i)?String(RegExp['$1']):_0x512e96;}},VisuMZ['SkillsStatesCore'][_0x263190(0x1f5)]=Window_StatusBase[_0x263190(0x32e)][_0x263190(0x12d)],Window_StatusBase['prototype']['drawActorIcons']=function(_0x181088,_0x381566,_0x19e0e9,_0x586713){const _0x36d17f=_0x263190;if(!_0x181088)return;Window_Base[_0x36d17f(0x32e)]['drawActorIcons'][_0x36d17f(0x338)](this,_0x181088,_0x381566,_0x19e0e9,_0x586713);},VisuMZ[_0x263190(0x1d4)]['Window_SkillType_initialize']=Window_SkillType['prototype'][_0x263190(0x365)],Window_SkillType[_0x263190(0x32e)][_0x263190(0x365)]=function(_0x1053f3){const _0x2b5621=_0x263190;VisuMZ[_0x2b5621(0x1d4)]['Window_SkillType_initialize'][_0x2b5621(0x338)](this,_0x1053f3),this[_0x2b5621(0x326)](_0x1053f3);},Window_SkillType['prototype'][_0x263190(0x326)]=function(_0xb08725){const _0x25b0c2=_0x263190,_0x37bebc=new Rectangle(0x0,0x0,_0xb08725['width'],_0xb08725[_0x25b0c2(0x374)]);this['_commandNameWindow']=new Window_Base(_0x37bebc),this['_commandNameWindow']['opacity']=0x0,this['addChild'](this[_0x25b0c2(0x2b2)]),this['updateCommandNameWindow']();},Window_SkillType['prototype']['callUpdateHelp']=function(){const _0x527505=_0x263190;Window_Command[_0x527505(0x32e)][_0x527505(0x1fb)]['call'](this);if(this['_commandNameWindow'])this['updateCommandNameWindow']();},Window_SkillType[_0x263190(0x32e)][_0x263190(0x1f4)]=function(){const _0x47637d=_0x263190,_0x158405=this[_0x47637d(0x2b2)];_0x158405[_0x47637d(0x124)][_0x47637d(0x2f7)]();const _0x2b37ca=this[_0x47637d(0x271)](this[_0x47637d(0x1c7)]());if(_0x2b37ca===_0x47637d(0x393)&&this['maxItems']()>0x0){const _0x1f2546=this[_0x47637d(0x337)](this[_0x47637d(0x1c7)]());let _0x37f00e=this['commandName'](this[_0x47637d(0x1c7)]());_0x37f00e=_0x37f00e[_0x47637d(0x21e)](/\\I\[(\d+)\]/gi,''),_0x158405[_0x47637d(0x2c4)](),this[_0x47637d(0x398)](_0x37f00e,_0x1f2546),this['commandNameWindowDrawText'](_0x37f00e,_0x1f2546),this['commandNameWindowCenter'](_0x37f00e,_0x1f2546);}},Window_SkillType[_0x263190(0x32e)][_0x263190(0x398)]=function(_0x2429c9,_0x3e6847){},Window_SkillType[_0x263190(0x32e)][_0x263190(0x35a)]=function(_0x214dbc,_0x1f5fe1){const _0x3258c5=_0x263190,_0x292fb8=this[_0x3258c5(0x2b2)];_0x292fb8[_0x3258c5(0x2ee)](_0x214dbc,0x0,_0x1f5fe1['y'],_0x292fb8[_0x3258c5(0x2df)],'center');},Window_SkillType['prototype']['commandNameWindowCenter']=function(_0xc5056f,_0x3450fe){const _0x319102=_0x263190,_0x2b4d52=this[_0x319102(0x2b2)],_0xc74c9b=$gameSystem[_0x319102(0x279)](),_0x3b4a27=_0x3450fe['x']+Math[_0x319102(0x2ac)](_0x3450fe['width']/0x2)+_0xc74c9b;_0x2b4d52['x']=_0x2b4d52['width']/-0x2+_0x3b4a27,_0x2b4d52['y']=Math[_0x319102(0x2ac)](_0x3450fe[_0x319102(0x374)]/0x2);},Window_SkillType[_0x263190(0x32e)][_0x263190(0x21a)]=function(){const _0x3b110d=_0x263190;return Imported[_0x3b110d(0x21f)]&&Window_Command[_0x3b110d(0x32e)][_0x3b110d(0x21a)]['call'](this);},Window_SkillType[_0x263190(0x32e)][_0x263190(0x167)]=function(){const _0x348d52=_0x263190;if(!this[_0x348d52(0xf0)])return;const _0x3c8e8d=this[_0x348d52(0xf0)][_0x348d52(0x1d5)]();for(const _0x24be09 of _0x3c8e8d){const _0xc2d208=this[_0x348d52(0x336)](_0x24be09);this[_0x348d52(0x218)](_0xc2d208,'skill',!![],_0x24be09);}},Window_SkillType[_0x263190(0x32e)][_0x263190(0x336)]=function(_0x188a6c){const _0x192412=_0x263190;let _0x19bfc1=$dataSystem[_0x192412(0x1d5)][_0x188a6c];if(_0x19bfc1[_0x192412(0x1a1)](/\\I\[(\d+)\]/i))return _0x19bfc1;if(this[_0x192412(0x2c7)]()===_0x192412(0x23c))return _0x19bfc1;const _0x784015=VisuMZ[_0x192412(0x1d4)]['Settings'][_0x192412(0x2d1)],_0x2843f1=$dataSystem[_0x192412(0x1e3)][_0x192412(0x382)](_0x188a6c),_0x180894=_0x2843f1?_0x784015[_0x192412(0x135)]:_0x784015[_0x192412(0x170)];return'\x5cI[%1]%2'['format'](_0x180894,_0x19bfc1);},Window_SkillType['prototype'][_0x263190(0x217)]=function(){const _0x57476d=_0x263190;return VisuMZ[_0x57476d(0x1d4)][_0x57476d(0x1f6)][_0x57476d(0x2d1)][_0x57476d(0x361)];},Window_SkillType[_0x263190(0x32e)][_0x263190(0x24e)]=function(_0x136ddb){const _0x4ac815=_0x263190,_0x49f629=this[_0x4ac815(0x271)](_0x136ddb);if(_0x49f629===_0x4ac815(0x1dd))this['drawItemStyleIconText'](_0x136ddb);else _0x49f629===_0x4ac815(0x393)?this[_0x4ac815(0x327)](_0x136ddb):Window_Command[_0x4ac815(0x32e)][_0x4ac815(0x24e)][_0x4ac815(0x338)](this,_0x136ddb);},Window_SkillType[_0x263190(0x32e)][_0x263190(0x2c7)]=function(){const _0x4df9c5=_0x263190;return VisuMZ[_0x4df9c5(0x1d4)][_0x4df9c5(0x1f6)][_0x4df9c5(0x2d1)][_0x4df9c5(0xe9)];},Window_SkillType['prototype']['commandStyleCheck']=function(_0x8e03a){const _0x21c048=_0x263190;if(_0x8e03a<0x0)return'text';const _0x299e71=this[_0x21c048(0x2c7)]();if(_0x299e71!==_0x21c048(0x311))return _0x299e71;else{if(this[_0x21c048(0x333)]()>0x0){const _0x19ed2c=this['commandName'](_0x8e03a);if(_0x19ed2c[_0x21c048(0x1a1)](/\\I\[(\d+)\]/i)){const _0x81f941=this[_0x21c048(0x337)](_0x8e03a),_0x4f453d=this[_0x21c048(0x147)](_0x19ed2c)[_0x21c048(0x258)];return _0x4f453d<=_0x81f941[_0x21c048(0x258)]?'iconText':_0x21c048(0x393);}}}return _0x21c048(0x23c);},Window_SkillType[_0x263190(0x32e)]['drawItemStyleIconText']=function(_0x234d0d){const _0x50df13=_0x263190,_0x205fda=this[_0x50df13(0x337)](_0x234d0d),_0x1af7c9=this['commandName'](_0x234d0d),_0x44b49f=this[_0x50df13(0x147)](_0x1af7c9)[_0x50df13(0x258)];this[_0x50df13(0x285)](this[_0x50df13(0x2d2)](_0x234d0d));const _0x1ee893=this[_0x50df13(0x217)]();if(_0x1ee893===_0x50df13(0x2dd))this[_0x50df13(0x37e)](_0x1af7c9,_0x205fda['x']+_0x205fda[_0x50df13(0x258)]-_0x44b49f,_0x205fda['y'],_0x44b49f);else{if(_0x1ee893===_0x50df13(0x1e8)){const _0x36caec=_0x205fda['x']+Math[_0x50df13(0x2ac)]((_0x205fda[_0x50df13(0x258)]-_0x44b49f)/0x2);this[_0x50df13(0x37e)](_0x1af7c9,_0x36caec,_0x205fda['y'],_0x44b49f);}else this[_0x50df13(0x37e)](_0x1af7c9,_0x205fda['x'],_0x205fda['y'],_0x44b49f);}},Window_SkillType['prototype']['drawItemStyleIcon']=function(_0x219702){const _0x55c1c3=_0x263190;this[_0x55c1c3(0x1cb)](_0x219702)[_0x55c1c3(0x1a1)](/\\I\[(\d+)\]/i);const _0x3c7d49=Number(RegExp['$1'])||0x0,_0x4e8620=this['itemLineRect'](_0x219702),_0x484c69=_0x4e8620['x']+Math['floor']((_0x4e8620[_0x55c1c3(0x258)]-ImageManager[_0x55c1c3(0x36e)])/0x2),_0x1fd11e=_0x4e8620['y']+(_0x4e8620['height']-ImageManager['iconHeight'])/0x2;this[_0x55c1c3(0x127)](_0x3c7d49,_0x484c69,_0x1fd11e);},VisuMZ[_0x263190(0x1d4)][_0x263190(0x208)]=Window_SkillStatus[_0x263190(0x32e)]['refresh'],Window_SkillStatus['prototype'][_0x263190(0x206)]=function(){const _0x2b5ec8=_0x263190;VisuMZ[_0x2b5ec8(0x1d4)]['Window_SkillStatus_refresh'][_0x2b5ec8(0x338)](this);if(this['_actor'])this[_0x2b5ec8(0x2f2)]();},Window_SkillStatus[_0x263190(0x32e)][_0x263190(0x2f2)]=function(){const _0x4cd647=_0x263190;if(!Imported[_0x4cd647(0x21f)])return;if(!Imported[_0x4cd647(0x1b0)])return;const _0x4f2b2d=this['gaugeLineHeight']();let _0x2bf155=this[_0x4cd647(0x118)]()/0x2+0xb4+0xb4+0xb4,_0x14edff=this[_0x4cd647(0x2df)]-_0x2bf155-0x2;if(_0x14edff>=0x12c){const _0x229371=VisuMZ[_0x4cd647(0x115)][_0x4cd647(0x1f6)][_0x4cd647(0x1ef)]['DisplayedParams'],_0x5eab91=Math[_0x4cd647(0x2ac)](_0x14edff/0x2)-0x18;let _0x4574d6=_0x2bf155,_0x30bb46=Math[_0x4cd647(0x2ac)]((this['innerHeight']-Math[_0x4cd647(0x22c)](_0x229371[_0x4cd647(0x26a)]/0x2)*_0x4f2b2d)/0x2),_0xa18e09=0x0;for(const _0x945eb5 of _0x229371){this[_0x4cd647(0x110)](_0x4574d6,_0x30bb46,_0x5eab91,_0x945eb5),_0xa18e09++,_0xa18e09%0x2===0x0?(_0x4574d6=_0x2bf155,_0x30bb46+=_0x4f2b2d):_0x4574d6+=_0x5eab91+0x18;}}this[_0x4cd647(0x2c4)]();},Window_SkillStatus[_0x263190(0x32e)][_0x263190(0x110)]=function(_0x642328,_0x35e467,_0x40d4d3,_0x11f496){const _0x87926f=_0x263190,_0xe744c=this[_0x87926f(0x114)]();this[_0x87926f(0x2c4)](),this[_0x87926f(0x342)](_0x642328,_0x35e467,_0x40d4d3,_0x11f496,!![]),this[_0x87926f(0xef)](),this[_0x87926f(0x124)][_0x87926f(0xe3)]-=0x8;const _0x278c9d=this[_0x87926f(0xf0)]['paramValueByName'](_0x11f496,!![]);this[_0x87926f(0x124)]['drawText'](_0x278c9d,_0x642328,_0x35e467,_0x40d4d3,_0xe744c,'right');},VisuMZ['SkillsStatesCore'][_0x263190(0xfc)]=Window_SkillList[_0x263190(0x32e)][_0x263190(0x382)],Window_SkillList[_0x263190(0x32e)]['includes']=function(_0x27aff6){const _0x54f924=_0x263190;return this[_0x54f924(0xd2)](_0x27aff6);},VisuMZ['SkillsStatesCore'][_0x263190(0x222)]=Window_SkillList[_0x263190(0x32e)][_0x263190(0x1f8)],Window_SkillList[_0x263190(0x32e)][_0x263190(0x1f8)]=function(){const _0xe801c3=_0x263190;return SceneManager[_0xe801c3(0x212)][_0xe801c3(0x237)]===Scene_Battle?VisuMZ[_0xe801c3(0x1d4)][_0xe801c3(0x222)][_0xe801c3(0x338)](this):VisuMZ[_0xe801c3(0x1d4)][_0xe801c3(0x1f6)][_0xe801c3(0x2d1)][_0xe801c3(0x12b)];},VisuMZ[_0x263190(0x1d4)][_0x263190(0x387)]=Window_SkillList[_0x263190(0x32e)][_0x263190(0x379)],Window_SkillList[_0x263190(0x32e)]['setActor']=function(_0x4d0bde){const _0x5bd469=_0x263190,_0x2f97fc=this[_0x5bd469(0xf0)]!==_0x4d0bde;VisuMZ[_0x5bd469(0x1d4)][_0x5bd469(0x387)][_0x5bd469(0x338)](this,_0x4d0bde),_0x2f97fc&&(this['_statusWindow']&&this[_0x5bd469(0x21d)][_0x5bd469(0x237)]===Window_ShopStatus&&this[_0x5bd469(0x21d)][_0x5bd469(0x277)](this[_0x5bd469(0x146)](0x0)));},Window_SkillList[_0x263190(0x32e)]['setStypeId']=function(_0x463908){const _0x7cd7ca=_0x263190;if(this[_0x7cd7ca(0x2ec)]===_0x463908)return;this[_0x7cd7ca(0x2ec)]=_0x463908,this[_0x7cd7ca(0x206)](),this[_0x7cd7ca(0x131)](0x0,0x0),this[_0x7cd7ca(0x21d)]&&this['_statusWindow']['constructor']===Window_ShopStatus&&this[_0x7cd7ca(0x21d)][_0x7cd7ca(0x277)](this[_0x7cd7ca(0x146)](0x0));},Window_SkillList['prototype']['includesSkillsStatesCore']=function(_0x3f75e2){const _0x5ee611=_0x263190;if(!_0x3f75e2)return VisuMZ[_0x5ee611(0x1d4)]['Window_SkillList_includes'][_0x5ee611(0x338)](this,_0x3f75e2);if(!this[_0x5ee611(0x396)](_0x3f75e2))return![];if(!this[_0x5ee611(0x33a)](_0x3f75e2))return![];if(!this[_0x5ee611(0x359)](_0x3f75e2))return![];return!![];},Window_SkillList['prototype'][_0x263190(0x396)]=function(_0x5a178b){const _0x2fbce7=_0x263190;return DataManager['getSkillTypes'](_0x5a178b)[_0x2fbce7(0x382)](this['_stypeId']);},Window_SkillList['prototype'][_0x263190(0x33a)]=function(_0x197194){const _0x51fa80=_0x263190;if(!VisuMZ[_0x51fa80(0x1d4)][_0x51fa80(0x22b)](this[_0x51fa80(0xf0)],_0x197194))return![];if(!VisuMZ[_0x51fa80(0x1d4)][_0x51fa80(0x292)](this[_0x51fa80(0xf0)],_0x197194))return![];if(!VisuMZ[_0x51fa80(0x1d4)][_0x51fa80(0x194)](this[_0x51fa80(0xf0)],_0x197194))return![];return!![];},VisuMZ[_0x263190(0x1d4)][_0x263190(0x22b)]=function(_0x12ef58,_0x26d6e6){const _0x144008=_0x263190,_0x30cafb=_0x26d6e6[_0x144008(0x2cc)];if(_0x30cafb['match'](/<HIDE IN BATTLE>/i)&&$gameParty[_0x144008(0x295)]())return![];else return _0x30cafb['match'](/<HIDE OUTSIDE BATTLE>/i)&&!$gameParty[_0x144008(0x295)]()?![]:!![];},VisuMZ[_0x263190(0x1d4)][_0x263190(0x292)]=function(_0x2a614a,_0x568469){const _0x4c0957=_0x263190,_0x21832f=_0x568469[_0x4c0957(0x2cc)];if(_0x21832f[_0x4c0957(0x1a1)](/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5ad70c=JSON[_0x4c0957(0x30b)]('['+RegExp['$1'][_0x4c0957(0x1a1)](/\d+/g)+']');for(const _0x30a71a of _0x5ad70c){if(!$gameSwitches[_0x4c0957(0x36d)](_0x30a71a))return![];}return!![];}if(_0x21832f[_0x4c0957(0x1a1)](/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xadac79=JSON[_0x4c0957(0x30b)]('['+RegExp['$1'][_0x4c0957(0x1a1)](/\d+/g)+']');for(const _0x1bb331 of _0xadac79){if(!$gameSwitches[_0x4c0957(0x36d)](_0x1bb331))return![];}return!![];}if(_0x21832f[_0x4c0957(0x1a1)](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x32b77f=JSON[_0x4c0957(0x30b)]('['+RegExp['$1'][_0x4c0957(0x1a1)](/\d+/g)+']');for(const _0x1d0ba4 of _0x32b77f){if($gameSwitches[_0x4c0957(0x36d)](_0x1d0ba4))return!![];}return![];}if(_0x21832f[_0x4c0957(0x1a1)](/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1c0810=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x1887f5 of _0x1c0810){if(!$gameSwitches[_0x4c0957(0x36d)](_0x1887f5))return!![];}return![];}if(_0x21832f[_0x4c0957(0x1a1)](/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xc3c992=JSON[_0x4c0957(0x30b)]('['+RegExp['$1'][_0x4c0957(0x1a1)](/\d+/g)+']');for(const _0x2018c1 of _0xc3c992){if(!$gameSwitches[_0x4c0957(0x36d)](_0x2018c1))return!![];}return![];}if(_0x21832f[_0x4c0957(0x1a1)](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5a0076=JSON['parse']('['+RegExp['$1'][_0x4c0957(0x1a1)](/\d+/g)+']');for(const _0xee8990 of _0x5a0076){if($gameSwitches[_0x4c0957(0x36d)](_0xee8990))return![];}return!![];}return!![];},VisuMZ[_0x263190(0x1d4)]['CheckVisibleSkillNotetags']=function(_0xced588,_0x2890f7){const _0x45c3fd=_0x263190,_0x5124bf=_0x2890f7[_0x45c3fd(0x2cc)];if(_0x5124bf[_0x45c3fd(0x1a1)](/<SHOW IF LEARNED[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x281d4f=JSON[_0x45c3fd(0x30b)]('['+RegExp['$1'][_0x45c3fd(0x1a1)](/\d+/g)+']');for(const _0x37df31 of _0x281d4f){if(!_0xced588[_0x45c3fd(0x2e4)](_0x37df31))return![];}return!![];}else{if(_0x5124bf['match'](/<SHOW IF LEARNED[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x2ea87f=RegExp['$1'][_0x45c3fd(0x20f)](',');for(const _0x5c1aec of _0x2ea87f){const _0x4373a2=DataManager[_0x45c3fd(0x1eb)](_0x5c1aec);if(!_0x4373a2)continue;if(!_0xced588[_0x45c3fd(0x2e4)](_0x4373a2))return![];}return!![];}}if(_0x5124bf[_0x45c3fd(0x1a1)](/<SHOW IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x55d1b6=JSON[_0x45c3fd(0x30b)]('['+RegExp['$1'][_0x45c3fd(0x1a1)](/\d+/g)+']');for(const _0x139d10 of _0x55d1b6){if(!_0xced588[_0x45c3fd(0x2e4)](_0x139d10))return![];}return!![];}else{if(_0x5124bf[_0x45c3fd(0x1a1)](/<SHOW IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x45bbc0=RegExp['$1'][_0x45c3fd(0x20f)](',');for(const _0x6a0bcc of _0x45bbc0){const _0x3e4953=DataManager[_0x45c3fd(0x1eb)](_0x6a0bcc);if(!_0x3e4953)continue;if(!_0xced588[_0x45c3fd(0x2e4)](_0x3e4953))return![];}return!![];}}if(_0x5124bf[_0x45c3fd(0x1a1)](/<SHOW IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x477937=JSON[_0x45c3fd(0x30b)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x580e7e of _0x477937){if(_0xced588[_0x45c3fd(0x2e4)](_0x580e7e))return!![];}return![];}else{if(_0x5124bf[_0x45c3fd(0x1a1)](/<SHOW IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x13afc4=RegExp['$1'][_0x45c3fd(0x20f)](',');for(const _0x1e0503 of _0x13afc4){const _0xf2ab0f=DataManager[_0x45c3fd(0x1eb)](_0x1e0503);if(!_0xf2ab0f)continue;if(_0xced588[_0x45c3fd(0x2e4)](_0xf2ab0f))return!![];}return![];}}if(_0x5124bf['match'](/<HIDE IF LEARNED[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x577cdf=JSON[_0x45c3fd(0x30b)]('['+RegExp['$1'][_0x45c3fd(0x1a1)](/\d+/g)+']');for(const _0x200dc9 of _0x577cdf){if(!_0xced588[_0x45c3fd(0x2e4)](_0x200dc9))return!![];}return![];}else{if(_0x5124bf[_0x45c3fd(0x1a1)](/<HIDE IF LEARNED[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x206c4d=RegExp['$1'][_0x45c3fd(0x20f)](',');for(const _0x2a425c of _0x206c4d){const _0x5c0732=DataManager[_0x45c3fd(0x1eb)](_0x2a425c);if(!_0x5c0732)continue;if(!_0xced588[_0x45c3fd(0x2e4)](_0x5c0732))return!![];}return![];}}if(_0x5124bf[_0x45c3fd(0x1a1)](/<HIDE IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5a5389=JSON['parse']('['+RegExp['$1'][_0x45c3fd(0x1a1)](/\d+/g)+']');for(const _0x5c0ab5 of _0x5a5389){if(!_0xced588[_0x45c3fd(0x2e4)](_0x5c0ab5))return!![];}return![];}else{if(_0x5124bf['match'](/<HIDE IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x1ebc9b=RegExp['$1'][_0x45c3fd(0x20f)](',');for(const _0x3d5991 of _0x1ebc9b){const _0x1241d8=DataManager['getSkillIdWithName'](_0x3d5991);if(!_0x1241d8)continue;if(!_0xced588['isLearnedSkill'](_0x1241d8))return!![];}return![];}}if(_0x5124bf[_0x45c3fd(0x1a1)](/<HIDE IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3a1b1d=JSON[_0x45c3fd(0x30b)]('['+RegExp['$1'][_0x45c3fd(0x1a1)](/\d+/g)+']');for(const _0x1eb04f of _0x3a1b1d){if(_0xced588[_0x45c3fd(0x2e4)](_0x1eb04f))return![];}return!![];}else{if(_0x5124bf['match'](/<HIDE IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0xc0711f=RegExp['$1'][_0x45c3fd(0x20f)](',');for(const _0x429318 of _0xc0711f){const _0x537a4c=DataManager[_0x45c3fd(0x1eb)](_0x429318);if(!_0x537a4c)continue;if(_0xced588['isLearnedSkill'](_0x537a4c))return![];}return!![];}}if(_0x5124bf[_0x45c3fd(0x1a1)](/<SHOW IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3c560f=JSON[_0x45c3fd(0x30b)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x140e71 of _0x3c560f){if(!_0xced588[_0x45c3fd(0x1ab)](_0x140e71))return![];}return!![];}else{if(_0x5124bf[_0x45c3fd(0x1a1)](/<SHOW IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x4d2f2f=RegExp['$1']['split'](',');for(const _0x11c7b4 of _0x4d2f2f){const _0x1e7e81=DataManager[_0x45c3fd(0x1eb)](_0x11c7b4);if(!_0x1e7e81)continue;if(!_0xced588[_0x45c3fd(0x1ab)](_0x1e7e81))return![];}return!![];}}if(_0x5124bf[_0x45c3fd(0x1a1)](/<SHOW IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xa76adc=JSON[_0x45c3fd(0x30b)]('['+RegExp['$1'][_0x45c3fd(0x1a1)](/\d+/g)+']');for(const _0x15feaf of _0xa76adc){if(!_0xced588[_0x45c3fd(0x1ab)](_0x15feaf))return![];}return!![];}else{if(_0x5124bf[_0x45c3fd(0x1a1)](/<SHOW IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x45e33d=RegExp['$1'][_0x45c3fd(0x20f)](',');for(const _0x179cec of _0x45e33d){const _0x93f5c0=DataManager[_0x45c3fd(0x1eb)](_0x179cec);if(!_0x93f5c0)continue;if(!_0xced588[_0x45c3fd(0x1ab)](_0x93f5c0))return![];}return!![];}}if(_0x5124bf[_0x45c3fd(0x1a1)](/<SHOW IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4e524e=JSON[_0x45c3fd(0x30b)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0xe55bb1 of _0x4e524e){if(_0xced588[_0x45c3fd(0x1ab)](_0xe55bb1))return!![];}return![];}else{if(_0x5124bf[_0x45c3fd(0x1a1)](/<SHOW IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x1415ad=RegExp['$1'][_0x45c3fd(0x20f)](',');for(const _0x22bf76 of _0x1415ad){const _0x564e1b=DataManager[_0x45c3fd(0x1eb)](_0x22bf76);if(!_0x564e1b)continue;if(_0xced588[_0x45c3fd(0x1ab)](_0x564e1b))return!![];}return![];}}if(_0x5124bf[_0x45c3fd(0x1a1)](/<HIDE IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x262489=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x298576 of _0x262489){if(!_0xced588[_0x45c3fd(0x1ab)](_0x298576))return!![];}return![];}else{if(_0x5124bf[_0x45c3fd(0x1a1)](/<HIDE IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x1203ab=RegExp['$1'][_0x45c3fd(0x20f)](',');for(const _0x565fee of _0x1203ab){const _0x4b947f=DataManager[_0x45c3fd(0x1eb)](_0x565fee);if(!_0x4b947f)continue;if(!_0xced588['hasSkill'](_0x4b947f))return!![];}return![];}}if(_0x5124bf[_0x45c3fd(0x1a1)](/<HIDE IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x79ebdd=JSON[_0x45c3fd(0x30b)]('['+RegExp['$1'][_0x45c3fd(0x1a1)](/\d+/g)+']');for(const _0x5da503 of _0x79ebdd){if(!_0xced588[_0x45c3fd(0x1ab)](_0x5da503))return!![];}return![];}else{if(_0x5124bf[_0x45c3fd(0x1a1)](/<HIDE IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x58cb5b=RegExp['$1']['split'](',');for(const _0x8fef49 of _0x58cb5b){const _0x34cc85=DataManager['getSkillIdWithName'](_0x8fef49);if(!_0x34cc85)continue;if(!_0xced588[_0x45c3fd(0x1ab)](_0x34cc85))return!![];}return![];}}if(_0x5124bf[_0x45c3fd(0x1a1)](/<HIDE IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3a7d22=JSON['parse']('['+RegExp['$1'][_0x45c3fd(0x1a1)](/\d+/g)+']');for(const _0x3c498e of _0x3a7d22){if(_0xced588[_0x45c3fd(0x1ab)](_0x3c498e))return![];}return!![];}else{if(_0x5124bf['match'](/<HIDE IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x3ece05=RegExp['$1'][_0x45c3fd(0x20f)](',');for(const _0x4c23e6 of _0x3ece05){const _0xe2acfb=DataManager['getSkillIdWithName'](_0x4c23e6);if(!_0xe2acfb)continue;if(_0xced588[_0x45c3fd(0x1ab)](_0xe2acfb))return![];}return!![];}}return!![];},Window_SkillList[_0x263190(0x32e)]['checkShowHideJS']=function(_0x5a1a7f){const _0x4892c6=_0x263190,_0x311acf=_0x5a1a7f[_0x4892c6(0x2cc)],_0x462610=VisuMZ[_0x4892c6(0x1d4)][_0x4892c6(0x27b)];return _0x462610[_0x5a1a7f['id']]?_0x462610[_0x5a1a7f['id']][_0x4892c6(0x338)](this,_0x5a1a7f):!![];},VisuMZ[_0x263190(0x1d4)][_0x263190(0x29e)]=Window_SkillList['prototype'][_0x263190(0x123)],Window_SkillList['prototype'][_0x263190(0x123)]=function(){const _0x5807c1=_0x263190;VisuMZ[_0x5807c1(0x1d4)][_0x5807c1(0x29e)][_0x5807c1(0x338)](this),this[_0x5807c1(0x1f7)]()&&this[_0x5807c1(0x1b7)](),this[_0x5807c1(0xd4)]()&&this[_0x5807c1(0xd1)]();},Window_SkillList['prototype'][_0x263190(0x1f7)]=function(){return!![];},Window_SkillList[_0x263190(0x32e)][_0x263190(0x1b7)]=function(){const _0x151b48=_0x263190,_0x466e8b=VisuMZ[_0x151b48(0x1d4)]['Settings']['Skills'][_0x151b48(0x34d)]||[];return _0x466e8b&&_0x466e8b[_0x151b48(0x382)](this[_0x151b48(0x2ec)])?this[_0x151b48(0x197)][_0x151b48(0x394)]((_0x5250a6,_0x3fbda9)=>{const _0x3b4560=_0x151b48;if(!!_0x5250a6&&!!_0x3fbda9)return _0x5250a6[_0x3b4560(0x1ae)][_0x3b4560(0x2fb)](_0x3fbda9[_0x3b4560(0x1ae)]);return 0x0;}):VisuMZ[_0x151b48(0x1d4)][_0x151b48(0x251)](this[_0x151b48(0x197)]),this[_0x151b48(0x197)];},VisuMZ[_0x263190(0x1d4)]['SortByIDandPriority']=function(_0x12f28c){const _0xeda73b=_0x263190;return _0x12f28c[_0xeda73b(0x394)]((_0x13b0cc,_0xd078db)=>{const _0x56f76f=_0xeda73b;if(!!_0x13b0cc&&!!_0xd078db){if(_0x13b0cc[_0x56f76f(0x196)]===undefined)VisuMZ[_0x56f76f(0x1d4)]['Parse_Notetags_Skill_Sorting'](_0x13b0cc);if(_0xd078db[_0x56f76f(0x196)]===undefined)VisuMZ[_0x56f76f(0x1d4)][_0x56f76f(0x2be)](_0xd078db);const _0x346db9=_0x13b0cc[_0x56f76f(0x196)],_0x2cc72f=_0xd078db['sortPriority'];if(_0x346db9!==_0x2cc72f)return _0x2cc72f-_0x346db9;return _0x13b0cc['id']-_0xd078db['id'];}return 0x0;}),_0x12f28c;},VisuMZ[_0x263190(0x1d4)][_0x263190(0x140)]=function(_0x22f4b1){const _0x558739=_0x263190;return _0x22f4b1[_0x558739(0x394)]((_0x4ddf12,_0x2220c0)=>{const _0x2f5083=_0x558739,_0x2f565d=$dataSkills[_0x4ddf12],_0x86a743=$dataSkills[_0x2220c0];if(!!_0x2f565d&&!!_0x86a743){if(_0x2f565d[_0x2f5083(0x196)]===undefined)VisuMZ['SkillsStatesCore'][_0x2f5083(0x2be)](_0x2f565d);if(_0x86a743[_0x2f5083(0x196)]===undefined)VisuMZ[_0x2f5083(0x1d4)]['Parse_Notetags_Skill_Sorting'](_0x86a743);const _0x21180c=_0x2f565d[_0x2f5083(0x196)],_0x539ce8=_0x86a743['sortPriority'];if(_0x21180c!==_0x539ce8)return _0x539ce8-_0x21180c;return _0x4ddf12-_0x2220c0;}return 0x0;}),_0x22f4b1;},Window_SkillList[_0x263190(0x32e)][_0x263190(0xd4)]=function(){const _0xb8de08=_0x263190;if(!this[_0xb8de08(0xf0)])return![];if(['skillLearn',_0xb8de08(0x26d),_0xb8de08(0x138)][_0xb8de08(0x382)](this[_0xb8de08(0x2ec)]))return![];return!![];},Window_SkillList[_0x263190(0x32e)][_0x263190(0xd1)]=function(){const _0x14cce5=_0x263190,_0x493f66=this[_0x14cce5(0xf0)][_0x14cce5(0x130)]();for(const _0x335471 of _0x493f66){const _0xe43147=DataManager['getSkillChangesFromState'](_0x335471);for(const _0x55fec1 in _0xe43147){const _0x2989fe=$dataSkills[Number(_0x55fec1)]||null,_0x287fc3=$dataSkills[Number(_0xe43147[_0x55fec1])]||null;while(this[_0x14cce5(0x197)][_0x14cce5(0x382)](_0x2989fe)){const _0x1d4118=this[_0x14cce5(0x197)][_0x14cce5(0x243)](_0x2989fe);this[_0x14cce5(0x197)][_0x1d4118]=_0x287fc3;}}}},VisuMZ['SkillsStatesCore'][_0x263190(0x32a)]=Window_SkillList[_0x263190(0x32e)][_0x263190(0x24e)],Window_SkillList[_0x263190(0x32e)][_0x263190(0x24e)]=function(_0x3f991c){const _0x579285=_0x263190,_0x59f770=this['itemAt'](_0x3f991c),_0x4f75fb=_0x59f770?_0x59f770[_0x579285(0x1ae)]:'';if(_0x59f770)this[_0x579285(0x101)](_0x59f770);VisuMZ['SkillsStatesCore'][_0x579285(0x32a)][_0x579285(0x338)](this,_0x3f991c);if(_0x59f770)_0x59f770[_0x579285(0x1ae)]=_0x4f75fb;},Window_SkillList[_0x263190(0x32e)][_0x263190(0x101)]=function(_0x30465a){const _0x1d7c06=_0x263190;if(_0x30465a&&_0x30465a[_0x1d7c06(0x2cc)]['match'](/<LIST NAME:[ ](.*)>/i)){_0x30465a[_0x1d7c06(0x1ae)]=String(RegExp['$1'])['trim']();for(;;){if(_0x30465a['name'][_0x1d7c06(0x1a1)](/\\V\[(\d+)\]/gi))_0x30465a[_0x1d7c06(0x1ae)]=_0x30465a[_0x1d7c06(0x1ae)][_0x1d7c06(0x21e)](/\\V\[(\d+)\]/gi,(_0x4621a5,_0x44d275)=>$gameVariables[_0x1d7c06(0x36d)](parseInt(_0x44d275)));else break;}}},Window_SkillList[_0x263190(0x32e)]['drawSkillCost']=function(_0x37814b,_0x49fafc,_0x2d390c,_0x5e56a2){const _0x54b619=_0x263190;Window_Base[_0x54b619(0x32e)][_0x54b619(0x215)]['call'](this,this[_0x54b619(0xf0)],_0x37814b,_0x49fafc,_0x2d390c,_0x5e56a2);},Window_SkillList[_0x263190(0x32e)][_0x263190(0x363)]=function(_0x481a0b){const _0x3c4beb=_0x263190;this[_0x3c4beb(0x21d)]=_0x481a0b,this['callUpdateHelp']();},VisuMZ[_0x263190(0x1d4)][_0x263190(0x294)]=Window_SkillList[_0x263190(0x32e)][_0x263190(0x128)],Window_SkillList[_0x263190(0x32e)][_0x263190(0x128)]=function(){const _0x54bbd8=_0x263190;VisuMZ[_0x54bbd8(0x1d4)][_0x54bbd8(0x294)]['call'](this),this[_0x54bbd8(0x21d)]&&this['_statusWindow'][_0x54bbd8(0x237)]===Window_ShopStatus&&this['_statusWindow'][_0x54bbd8(0x277)](this[_0x54bbd8(0x1a3)]());};