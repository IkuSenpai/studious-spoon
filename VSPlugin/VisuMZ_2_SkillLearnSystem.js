//=============================================================================
// VisuStella MZ - Skill Learn System
// VisuMZ_2_SkillLearnSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_SkillLearnSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillLearnSystem = VisuMZ.SkillLearnSystem || {};
VisuMZ.SkillLearnSystem.version = 1.15;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.15] [SkillLearnSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skill_Learn_System_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin lets your game's actors have an alternative way of learning
 * skills aside from leveling up. Instead, they can learn skills through the
 * in-game skill menu, where they can trade gold, items, or the brand new
 * resources made available by this plugin: Ability Points and/or Skill Points.
 * 
 * Ability Points and Skill Points are new resources provided by this plugin
 * that can be acquired in a variety of ways, of which, you can set through its
 * mechanical settings in the Plugin Parameters. These can be through leveling
 * up, performing actions, and/or defeating enemies.
 * 
 * When learning skills through this plugin's in-game system, skills can have
 * a variety of costs and requirements. These requirements can come in the form
 * of needing to be at a certain level, having specific skills learned, and/or
 * having certain switches on.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actors can now learn new skills from the in-game skill menu under the
 *   new "Learn" command.
 * * In this new menu, actors can spend various resources to learn new skills.
 * * These resources can be Ability Points, Skill Points, items, and more.
 * * Ability Points and Skill Points are brand new resources added through this
 *   plugin which can be acquired through a variety a means ranging from
 *   participating in battle, defeating enemies, and/or leveling up.
 * * Learnable skills may have requirements that need to be first met even if
 *   the actor has the available resources.
 * * Skill learning requirements can include levels, having other skills
 *   learned, and/or enabled switches.
 * * Play animations upon learning a new skill inside the menu.
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * Battle Test
 *
 * When doing a battle test through the database, all of an actor's learnable
 * skills through the Skill Learn System's notetags will become available for
 * the test battle to reduce the need to manually add them.
 *
 * ---
 *
 * VisuMZ_3_VictoryAftermath
 *
 * If VisuStella MZ's Victory Aftermath plugin is installed, the amount of
 * Skill Points and Ability Points earned can be visibly shown in the rewards
 * window.
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
 * === Ability Points-Related Notetags ===
 * 
 * ---
 *
 * <Starting AP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Ability Points the actor starts with in his/her
 *   starting class.
 * - Replace 'x' with a numeric value representing the amount of Ability Points
 *   to start out with.
 *
 * ---
 *
 * <Class id Starting AP: x>
 * <Class name Starting AP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Ability Points the actor starts with in a
 *   specific class if Ability Points aren't shared across all classes.
 * - Replace 'x' with a numeric value representing the amount of Ability Points
 *   to start out with.
 * - Replace 'id' with the ID of the class to set starting Ability Points for.
 * - Replace 'name' with the name of the class to set starting Ability
 *   Points for.
 *
 * ---
 *
 * <AP Gain: x>
 * <User AP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the user will acquire 'x' amount
 *   of Ability Points.
 * - Replace 'x' with a number representing the amount of Ability Points for
 *   the user to earn upon usage.
 * - This effect will trigger each time per "hit".
 * - This effect will take over the "Per Action Hit" Ability Points gain from
 *   the Plugin Parameters.
 *
 * ---
 *
 * <Target AP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the target will acquire 'x' amount
 *   of Ability Points.
 * - Replace 'x' with a number representing the amount of Ability Points for
 *   the target to earn upon usage.
 * - This effect will trigger each time per "hit".
 *
 * ---
 *
 * <AP: x>
 *
 * - Used for: Enemy Notetags
 * - Determines the amount of Ability Points the enemy will give the player's
 *   party upon being defeated.
 * - Replace 'x' with a number representing the amount of Ability Points to
 *   grant the player's party each.
 * - This effect will take over the "Per Enemy" Ability Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <AP Rate: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Increases the amount of Ability Points the affected battler will gain by a
 *   percentile value.
 * - Replace 'x' with a percentage number representing the amount of Ability
 *   Points that will be acquired.
 * - This stacks multiplicatively with each other.
 * - This does not apply when Ability Points are directly added, lost, or set.
 *
 * ---
 * 
 * === Skill Points-Related Notetags ===
 * 
 * ---
 *
 * <Starting SP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Skill Points the actor starts with in his/her
 *   starting class.
 * - Replace 'x' with a numeric value representing the amount of Skill Points
 *   to start out with.
 *
 * ---
 *
 * <Class id Starting SP: x>
 * <Class name Starting SP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Skill Points the actor starts with in a specific
 *   class if Skill Points aren't shared across all classes.
 * - Replace 'x' with a numeric value representing the amount of Skill Points
 *   to start out with.
 * - Replace 'id' with the ID of the class to set starting Skill Points for.
 * - Replace 'name' with the name of the class to set starting Skill
 *   Points for.
 *
 * ---
 *
 * <SP Gain: x>
 * <User SP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the user will acquire 'x' amount
 *   of Skill Points.
 * - Replace 'x' with a number representing the amount of Skill Points for the
 *   user to earn upon usage.
 * - This effect will trigger each time per "hit".
 * - This effect will take over the "Per Action Hit" Skill Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Target SP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the target will acquire 'x' amount
 *   of Skill Points.
 * - Replace 'x' with a number representing the amount of Skill Points for the
 *   target to earn upon usage.
 * - This effect will trigger each time per "hit".
 *
 * ---
 *
 * <SP: x>
 *
 * - Used for: Enemy Notetags
 * - Determines the amount of Skill Points the enemy will give the player's
 *   party upon being defeated.
 * - Replace 'x' with a number representing the amount of Skill Points to grant
 *   the player's party each.
 * - This effect will take over the "Per Enemy" Skill Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <SP Rate: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Increases the amount of Skill Points the affected battler will gain by a
 *   percentile value.
 * - Replace 'x' with a percentage number representing the amount of Skill
 *   Points that will be acquired.
 * - This stacks multiplicatively with each other.
 * - This does not apply when Skill Points are directly added, lost, or set.
 *
 * ---
 * 
 * === Learnable Skills-Related Notetags ===
 * 
 * ---
 *
 * <Learn Skill: id>
 * <Learn Skills: id, id, id>
 * 
 * <Learn Skill: name>
 * <Learn Skills: name, name, name>
 *
 * - Used for: Class Notetags
 * - Determines what skills the class can learn through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the skill that can be
 *   learned through the Skill Learn System menu.
 * - Replace 'name' with the name of the skill that can be learned through the
 *   Skill Learn System menu.
 * - Multiple entries are permited.
 *
 * ---
 *
 * <Learn Skills>
 *  id
 *  id
 *  id
 *  name
 *  name
 *  name
 * </Learn Skills>
 *
 * - Used for: Class
 * - Determines what skills the class can learn through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the skill that can be
 *   learned through the Skill Learn System menu.
 * - Replace 'name' with the name of the skill that can be learned through the
 *   Skill Learn System menu.
 * - Multiple middle entries are permited.
 *
 * ---
 * 
 * === Skill Learn Cost-Related Notetags ===
 * 
 * ---
 *
 * <Learn AP Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the Ability Point cost needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Ability Points needed
 *   to learn this skill.
 * - If this notetag is not used, then the Ability Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn CP Cost: x>
 *
 * - Used for: Skill Notetags
 * - Requires VisuMZ_2_ClassChangeSystem
 * - Determines the Class Point cost needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Skill Points needed
 *   to learn this skill.
 * - If this notetag is not used, then the Skill Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn JP Cost: x>
 *
 * - Used for: Skill Notetags
 * - Requires VisuMZ_2_ClassChangeSystem
 * - Determines the Job Point cost needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Skill Points needed
 *   to learn this skill.
 * - If this notetag is not used, then the Skill Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn SP Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the Skill Point cost needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Skill Points needed
 *   to learn this skill.
 * - If this notetag is not used, then the Skill Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn Item id Cost: x>
 * <Learn Item name Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the items needed to be consumed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the item needed to be 
 *   consumed.
 * - Replace 'name' with the name of the item needed to be consumed.
 * - Replace 'x' with a number representing the amount of the item needed
 *   to learn this skill.
 * - You may insert multiple copies of this notetag.
 *
 * ---
 *
 * <Learn Weapon id Cost: x>
 * <Learn Weapon name Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the weapons needed to be consumed for an actor to learn the
 *   skill through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the weapon needed to be 
 *   consumed.
 * - Replace 'name' with the name of the weapon needed to be consumed.
 * - Replace 'x' with a number representing the amount of the weapon needed
 *   to learn this skill.
 * - You may insert multiple copies of this notetag.
 *
 * ---
 *
 * <Learn Armor id Cost: x>
 * <Learn Armor name Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the armors needed to be consumed for an actor to learn the
 *   skill through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the armor needed to be 
 *   consumed.
 * - Replace 'name' with the name of the armor needed to be consumed.
 * - Replace 'x' with a number representing the amount of the armor needed
 *   to learn this skill.
 * - You may insert multiple copies of this notetag.
 *
 * ---
 *
 * <Learn Gold Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the gold cost needed for an actor to learn the skill through
 *   the Skill Learn System.
 * - Replace 'x' with a number representing the amount of gold needed to learn
 *   this skill.
 * - If this notetag is not used, then the gold cost will default to the value
 *   found in the settings.
 *
 * ---
 *
 * <Learn Skill Costs>
 *  AP: x
 * 
 *  SP: x
 * 
 *  Item id: x
 *  Item name: x
 * 
 *  Weapon id: x
 *  Weapon name: x
 * 
 *  Armor id: x
 *  Armor name: x
 *  
 *  Gold: x
 * </Learn Skill Costs>
 *
 * - Used for: Skill Notetags
 * - Determines a group of resources needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'id' with the ID's of items, weapons, armors to be consumed.
 * - Replace 'name' with the names of items, weapons, armors to be consumed.
 * - Replace 'x' with the quantities of the designated resource to be consumed.
 * - Insert multiple entries of items, weapons, and armors inside the notetags
 *   to add more resource entries.
 *
 * ---
 * 
 * === JavaScript Notetags: Skill Costs ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * create dynamic Ability Point and Skill Point costs.
 * 
 * ---
 *
 * <JS Learn AP Cost>
 *  code
 *  code
 *  cost = code;
 * </JS Learn AP Cost>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create dynamically calculated cost
 *   for the required Ability Points in order to learn this skill.
 * - The 'cost' variable will be returned to determine the finalized Ability
 *   Points cost to learn this skill.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - If the <Learn AP Cost: x> is present, this notetag will be ignored.
 *
 * ---
 *
 * <JS Learn CP Cost>
 *  code
 *  code
 *  cost = code;
 * </JS Learn CP Cost>
 *
 * - Used for: Skill Notetags
 * - Requires VisuMZ_2_ClassChangeSystem
 * - Replace 'code' with JavaScript code to create dynamically calculated cost
 *   for the required Class Points in order to learn this skill.
 * - The 'cost' variable will be returned to determine the finalized Skill
 *   Points cost to learn this skill.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - If the <Learn CP Cost: x> is present, this notetag will be ignored.
 *
 * ---
 *
 * <JS Learn JP Cost>
 *  code
 *  code
 *  cost = code;
 * </JS Learn JP Cost>
 *
 * - Used for: Skill Notetags
 * - Requires VisuMZ_2_ClassChangeSystem
 * - Replace 'code' with JavaScript code to create dynamically calculated cost
 *   for the required Job Points in order to learn this skill.
 * - The 'cost' variable will be returned to determine the finalized Skill
 *   Points cost to learn this skill.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - If the <Learn JP Cost: x> is present, this notetag will be ignored.
 *
 * ---
 *
 * <JS Learn SP Cost>
 *  code
 *  code
 *  cost = code;
 * </JS Learn SP Cost>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create dynamically calculated cost
 *   for the required Skill Points in order to learn this skill.
 * - The 'cost' variable will be returned to determine the finalized Skill
 *   Points cost to learn this skill.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - If the <Learn SP Cost: x> is present, this notetag will be ignored.
 *
 * ---
 * 
 * === Show Condition-Related Notetags ===
 * 
 * ---
 *
 * <Learn Show Level: x>
 *
 * - Used for: Skill Notetags
 * - Actors must be at least the required level in order for the skill to even
 *   appear visibly in the Skill Learn System menu.
 * - Replace 'x' with a number representing the required level for the actor
 *   in order for the skill to visibly appear.
 *
 * ---
 *
 * <Learn Show Skill: id>
 * <Learn Show Skill: name>
 * 
 * <Learn Show All Skills: id, id, id>
 * <Learn Show All Skills: name, name, name>
 * 
 * <Learn Show Any Skills: id, id, id>
 * <Learn Show Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - The actor must have already learned the above skills in order for the
 *   learnable skill to appear visibly in the Skill Learn System menu.
 * - Replace 'id' with a number representing the ID of the skill required to be
 *   known by the actor in order to appear visibly in the menu.
 * - Replace 'name' with the name of the skill required to be known by the
 *   actor in order to appear visibly in the menu.
 * - The 'All' notetag variant requires all of the listed skills to be known
 *   before the learnable skill will appear visibly in the menu.
 * - The 'Any' notetag variant requires any of the listed skills to be known
 *   before the learnable skill will appear visibly in the menu.
 *
 * ---
 *
 * <Learn Show Switch: x>
 * 
 * <Learn Show All Switches: x, x, x>
 * 
 * <Learn Show Any Switches: x, x, x>
 *
 * - Used for: Skill Notetags
 * - The switches must be in the ON position in order for the learnable skill
 *   to appear visibly in the Skill Learn System menu.
 * - Replace 'x' with a number representing the ID of the switch required to be
 *   in the ON position in order to appear visibly in the menu.
 * - The 'All' notetag variant requires all of the switches to be in the ON
 *   position before the learnable skill will appear visibly in the menu.
 * - The 'Any' notetag variant requires any of the switches to be in the ON
 *   position before the learnable skill will appear visibly in the menu.
 *
 * ---
 * 
 * === JavaScript Notetags: Show Conditions ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * create dynamic determined show conditions.
 * 
 * ---
 *
 * <JS Learn Show>
 *  code
 *  code
 *  visible = code;
 * </JS Learn Show>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to determine if the skill will be
 *   visibly shown in the Skill Learn System menu.
 * - The 'visible' variable must result in a 'true' or 'false' value to
 *   determine if the skill will be visible.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - Any other show conditions must be met, too.
 *
 * ---
 *
 * <JS Learn Show List Text>
 *  code
 *  code
 *  text = code;
 * </JS Learn Show List Text>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create custom text that will be
 *   displayed when the skill is shown in the Skill Learn System skill list.
 * - The 'text' variable will determine the text to be shown if it is a string.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 *
 * ---
 *
 * <JS Learn Show Detail Text>
 *  code
 *  code
 *  text = code;
 * </JS Learn Show Detail Text>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create custom text that will be
 *   displayed when the skill is selected and the Detailed Skill Learn System
 *   resource cost window is opened.
 * - The 'text' variable will determine the text to be shown if it is a string.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 *
 * ---
 * 
 * === Require Condition-Related Notetags ===
 * 
 * ---
 *
 * <Learn Require Level: x>
 *
 * - Used for: Skill Notetags
 * - Actors must be at least the required level in order for the skill to be
 *   enabled in the Skill Learn System menu.
 * - Replace 'x' with a number representing the required level for the actor
 *   in order for the skill to visibly appear.
 *
 * ---
 *
 * <Learn Require Skill: id>
 * <Learn Require Skill: name>
 * 
 * <Learn Require All Skills: id, id, id>
 * <Learn Require All Skills: name, name, name>
 * 
 * <Learn Require Any Skills: id, id, id>
 * <Learn Require Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - The actor must have already learned the above skills in order for the
 *   learnable skill to be enabled in the Skill Learn System menu.
 * - Replace 'id' with a number representing the ID of the skill required to be
 *   known by the actor in order to be enabled in the menu.
 * - Replace 'name' with the name of the skill required to be known by the
 *   actor in order to be enabled in the menu.
 * - The 'All' notetag variant requires all of the listed skills to be known
 *   before the learnable skill will be enabled in the menu.
 * - The 'Any' notetag variant requires any of the listed skills to be known
 *   before the learnable skill will be enabled in the menu.
 *
 * ---
 *
 * <Learn Require Switch: x>
 * 
 * <Learn Require All Switches: x, x, x>
 * 
 * <Learn Require Any Switches: x, x, x>
 *
 * - Used for: Skill Notetags
 * - The switches must be in the ON position in order for the learnable skill
 *   to be enabled in the Skill Learn System menu.
 * - Replace 'x' with a number representing the ID of the switch required to be
 *   in the ON position in order to be enabled in the menu.
 * - The 'All' notetag variant requires all of the switches to be in the ON
 *   position before the learnable skill will be enabled in the menu.
 * - The 'Any' notetag variant requires any of the switches to be in the ON
 *   position before the learnable skill will be enabled in the menu.
 *
 * ---
 * 
 * === JavaScript Notetags: Requirement Conditions ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * create dynamic determined learning requirement conditions.
 * 
 * ---
 *
 * <JS Learn Requirements>
 *  code
 *  code
 *  enabled = code;
 * </JS Learn Requirements>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to determine if the skill will be
 *   enabled for learning in the Skill Learn System menu.
 * - The 'enabled' variable must result in a 'true' or 'false' value to
 *   determine if the skill will be enabled.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - Any other requirement conditions must be met, too.
 *
 * ---
 *
 * <JS Learn Requirements List Text>
 *  code
 *  code
 *  text = code;
 * </JS Learn Requirements List Text>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create custom text that will be
 *   displayed when the skill is shown in the Skill Learn System skill list
 *   as long as the requirements have to be met.
 * - The 'text' variable will determine the text to be shown if it is a string.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 *
 * ---
 *
 * <JS Learn Requirements Detail Text>
 *  code
 *  code
 *  text = code;
 * </JS Learn Requirements Detail Text>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create custom text that will be
 *   displayed when the skill is selected and the Detailed Skill Learn System
 *   resource cost window is opened as long as the requirements have to be met.
 * - The 'text' variable will determine the text to be shown if it is a string.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 *
 * ---
 * 
 * === Animation-Related Notetags ===
 * 
 * ---
 *
 * <Learn Skill Animation: id>
 * <Learn Skill Animation: id, id, id>
 * 
 * - Used for: Skill Notetags
 * - Plays the animation(s) when this skill is learned through the Skill Learn
 *   System's menu.
 * - This will override the default animation settings found in the plugin
 *   parameters and use the unique one set through notetags instead.
 * - Replace 'id' with the ID of the animation you wish to play.
 * - If multiple ID's are found, then each animation will play one by one in
 *   the order they are listed.
 *
 * ---
 * 
 * <Learn Skill Fade Speed: x>
 * 
 * - Used for: Skill Notetags
 * - This determines the speed at which the skill's icon fades in during the
 *   skill learning animation.
 * - Replace 'x' with a number value to determine how fast the icon fades in.
 * - Use lower numbers for slower fade speeds and higher numbers for faster
 *   fade speeds.
 * 
 * ---
 * 
 * <Learn Skill Picture: filename>
 * <Picture: filename>
 * 
 * - Used for: Skill Notetags
 * - Uses a picture from your project's /img/pictures/ folder instead of the
 *   skill's icon during learning instead.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Scaling will not apply to the picture.
 * - Use the <Picture: filename> version for any other plugins that may be
 *   using this as an image outside of learning skills, too.
 * - The size used for the image will vary based on your game's resolution.
 * 
 * ---
 * 
 * === JavaScript Notetags: On Learning Conditions ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * produce special effects when the skill is learned.
 * 
 * ---
 *
 * <JS On Learn Skill>
 *  code
 *  code
 *  code
 * </JS On Learn Skill>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to perform the desired actions when
 *   the skill is learned.
 * - This will apply to any time the skill is learned by an actor, even if it
 *   is through natural leveling or through the Skill Learn System menu.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
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
 * === Ability Points Plugin Commands ===
 * 
 * ---
 *
 * Ability Points: Gain
 * - The target actor(s) gains Ability Points.
 * - Gained amounts are affected by Ability Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to gain Ability Points for.
 *   - Use "0" for the current class.
 *
 *   Ability Points:
 *   - Determine how many Ability Points will be gained.
 *   - You may use code.
 *
 * ---
 *
 * Ability Points: Add
 * - The target actor(s) receives Ability Points.
 * - Received amounts are NOT affected by Ability Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to receive Ability Points for.
 *   - Use "0" for the current class.
 *
 *   Ability Points:
 *   - Determine how many Ability Points will be added.
 *   - You may use code.
 *
 * ---
 *
 * Ability Points: Lose
 * - The target actor(s) loses Ability Points.
 * - Lost amounts are NOT affected by Ability Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to lose Ability Points for.
 *   - Use "0" for the current class.
 *
 *   Ability Points:
 *   - Determine how many Ability Points will be lost.
 *   - You may use code.
 *
 * ---
 *
 * Ability Points: Set
 * - Changes the exact Ability Points for the target actor(s).
 * - Changed amounts are NOT affected by Ability Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to change Ability Points for.
 *   - Use "0" for the current class.
 *
 *   Ability Points:
 *   - Determine how many Ability Points will be set exactly to.
 *   - You may use code.
 *
 * ---
 * 
 * === Skill Points Plugin Commands ===
 * 
 * ---
 *
 * Skill Points: Gain
 * - The target actor(s) gains Skill Points.
 * - Gained amounts are affected by Skill Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to gain Skill Points for.
 *   - Use "0" for the current class.
 *
 *   Skill Points:
 *   - Determine how many Skill Points will be gained.
 *   - You may use code.
 *
 * ---
 *
 * Skill Points: Add
 * - The target actor(s) receives Skill Points.
 * - Received amounts are NOT affected by Skill Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to receive Skill Points for.
 *   - Use "0" for the current class.
 *
 *   Skill Points:
 *   - Determine how many Skill Points will be added.
 *   - You may use code.
 *
 * ---
 *
 * Skill Points: Lose
 * - The target actor(s) loses Skill Points.
 * - Lost amounts are NOT affected by Skill Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to lose Skill Points for.
 *   - Use "0" for the current class.
 *
 *   Skill Points:
 *   - Determine how many Skill Points will be lost.
 *   - You may use code.
 *
 * ---
 *
 * Skill Points: Set
 * - Changes the exact Skill Points for the target actor(s).
 * - Changed amounts are NOT affected by Skill Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to change Skill Points for.
 *   - Use "0" for the current class.
 *
 *   Skill Points:
 *   - Determine how many Skill Points will be set exactly to.
 *   - You may use code.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Show Skill Learn in Skill Menu?
 * - Shows/hides Skill Learn inside the skill menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Skill Learn inside the skill menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for the Skill Learn System. These determine the settings
 * that are used for the Skill Learn System menu's main screen.
 *
 * ---
 *
 * Visual
 * 
 *   Displayed Costs:
 *   - Select which cost types to display in the skill entry.
 *   - This also determines the order they are displayed.
 *     - AP - Ability Points
 *     - SP - Skill Points
 *     - Item - Item Costs
 *     - Weapon - Weapon Costs
 *     - Armor - Armor Costs
 *     - Gold - Gold Costs
 * 
 *   Separate Skill Type?:
 *   - Separate learnable skills by skill type?
 * 
 *   Hide Learned Skills
 *   - Hide skills after they are learned?
 * 
 *   JS: Draw Status:
 *   - JavaScript code used to draw in Window_SkillStatus when the Skill Learn
 *     System is active.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Learned Text:
 *   - This is the text that appears if the skill has been learned.
 *   - You may use text codes.
 * 
 *   Requirements
 * 
 *     Requirement Header:
 *     - Header for requirements.
 *     - %1 - Requirements (all of them)
 * 
 *     Separation Format:
 *     - This determines how the requirements are separated.
 *     - %1 - Previous Requirement, %2 - Second Requirement
 * 
 *     Level Format:
 *     - This how level is displayed.
 *     - %1 - Level, %2 - Full Level Term, %3 - Abbr Level Term
 * 
 *     Skill Format:
 *     - This how required skills are displayed.
 *     - %1 - Icon, %2 - Skill Name
 * 
 *     Switch Format:
 *     - This how required switches are displayed.
 *     - %1 - Switch Name
 * 
 *   Costs
 * 
 *     Separation Format:
 *     - This determines how the costs are separated from one another.
 *     - %1 - Previous Cost, %2 - Second Cost
 * 
 *     Item Format:
 *     - Determine how items are displayed as a cost.
 *     - %1 - Quantity, %2 - Icon, %3 - Item Name
 * 
 *     Weapon Format:
 *     - Determine how weapons are displayed as a cost.
 *     - %1 - Quantity, %2 - Icon, %3 - Weapon Name
 * 
 *     Armor Format:
 *     - Determine how armors are displayed as a cost.
 *     - %1 - Quantity, %2 - Icon, %3 - Armor Name
 * 
 *     Gold Format:
 *     - Determine how gold is displayed as a cost.
 *     - %1 - Quantity, %2 - Icon, %3 - Currency Vocabulary
 * 
 *   Separation:
 * 
 *     Indent Skills:
 *     - When separated, indent skills by this many pixels.
 * 
 *     Category Format:
 *     - Skill type category name format
 *     - %1 - Name
 * 
 *     Collapse Format:
 *     - Format for command to collapse skill type.
 *     - %1 - Name
 * 
 *     Expand Format:
 *     - Format for command to expand skill type.
 *     - %1 - Name
 * 
 *     Font Color:
 *     - When separated, indent skills by this many pixels.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Access Settings
 * ============================================================================
 *
 * Menu Access settings for Skill Learn System. The Skill Learn System is
 * accessible normally through the in-game Skill menu.
 *
 * ---
 *
 * Main Access Settings
 * 
 *   Command Name:
 *   - Name of the 'Skill Learn' option in the Menu.
 * 
 *   Icon:
 *   - What is the icon you want to use to represent Skill Learn?
 * 
 *   Show in Menu?:
 *   - Add the 'Skill Learn' option to the Menu by default?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Animation Settings
 * ============================================================================
 *
 * Animation settings for the Skill Learn System. By default, an animation will
 * be played upon learning a skill through the Skill Learn System's menu in
 * order to provide player feedback about learning the said skill.
 *
 * ---
 *
 * General
 * 
 *   Show Animations?:
 *   - Show animations when learning a skill?
 * 
 *   Show Windows?:
 *   - Show windows during a skill learn animation?
 * 
 *   Default Animations:
 *   - Default animation(s) do you want to play when learning.
 *
 * ---
 *
 * Skill Sprite
 * 
 *   Scale:
 *   - How big do you want the skill sprite to be on screen?
 * 
 *   Fade Speed:
 *   - How fast do you want the icon to fade in?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * Settings for the sound effect played when learning a new skill through the
 * Skill Learn System.
 *
 * ---
 *
 * Settings
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
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Window settings for the Skill Learn System. There are two new windows added
 * into the Skill menu through this plugin: the Detail Window and the Confirm
 * Window.
 * 
 * The Detail Window will list the required costs of learning a skill in detail
 * in case the icons provided are not clear enough to show what's needed.
 * 
 * The Confirm Window is a window that appears towards the bottom to let the
 * player make a confirmation before deciding to learn the skill.
 *
 * ---
 *
 * Detail Window
 * 
 *   Requirements
 * 
 *     Requirement Title:
 *     - Text used when drawing the learning requirements.
 *     - %1 - Skill Icon, %2 - Skill Name
 * 
 *     Requirement Met:
 *     - This how met requirements look.
 *     - %1 - Requirement Text
 * 
 *     Requirement Not Met:
 *     - This how met requirements look.
 *     - %1 - Requirement Text
 * 
 *     Requirement Level:
 *     - This how level is displayed.
 *     - %1 - Level, %2 - Full Level Term, %3 - Abbr Level Term
 * 
 *     Requirement Skill:
 *     - This how required skills are displayed.
 *     - %1 - Icon, %2 - Skill Name
 * 
 *     Requirement Switch:
 *     - This how required switches are displayed.
 *     - %1 - Switch Name
 * 
 *   Costs
 * 
 *     Cost Title:
 *     - Text used when drawing the learning costs.
 *     - %1 - Skill Icon, %2 - Skill Name
 * 
 *     Cost Name:
 *     - Text used to label the resource being consumed.
 * 
 *     Cost Quantity:
 *     - Text used to label the cost of the resource.
 * 
 *     Cost of Owned:
 *     - Text used to label the amount of the resource in possession.
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Confirm Window
 * 
 *   Confirm Text:
 *   - Text used for the Confirm command.
 *   - Text codes can be used.
 * 
 *   Cancel Text:
 *   - Text used for the Cancel command.
 *   - Text codes can be used.
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Ability Points Settings
 * ============================================================================
 *
 * Ability Points are an actor-only resource used as a currency for this
 * plugin. You can determine how they appear in-game, how they're earned, and
 * what kind of mechanics are involved with them. Ability Points can also be 
 * used in other VisuStella plugins.
 *
 * ---
 *
 * Mechanics
 * 
 *   Shared Ability Points:
 *   - Do you want Ability Points to be shared across all classes?
 *   - Or do you want all classes to have their own?
 * 
 *   Maximum:
 *   - What's the maximum amount of Ability Points an actor can have?
 *   - Use 0 for unlimited Ability Points.
 *
 * ---
 *
 * Visual
 * 
 *   Show In Menus?:
 *   - Do you wish to show Ability Points in menus that allow them?
 * 
 *   Icon:
 *   - What is the icon you want to use to represent Ability Points?
 *
 * ---
 *
 * Vocabulary
 * 
 *   Full Text:
 *   - The full text of how Ability Points appears in-game.
 * 
 *   Abbreviated Text:
 *   - The abbreviation of how Ability Points appears in-game.
 * 
 *   Menu Text Format:
 *   - What is the text format for it to be displayed in windows.
 *   - %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 *
 * ---
 *
 * Gain
 * 
 *   Per Action Hit:
 *   - How many Ability Points should an actor gain per action?
 *   - You may use code.
 * 
 *   Per Level Up:
 *   - How many Ability Points should an actor gain per level up?
 *   - You may use code.
 * 
 *   Per Enemy Defeated:
 *   - How many Ability Points should an actor gain per enemy?
 *   - You may use code.
 * 
 *     Alive Actors?:
 *     - Do actors have to be alive to receive Ability Points from
 *       defeated enemies?
 *
 * ---
 *
 * Victory
 * 
 *   Show During Victory?:
 *   - Show how much AP an actor has earned in battle during the victory phase?
 * 
 *   Victory Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * 
 *   Aftermath Display?:
 *   - Requires VisuMZ_3_VictoryAftermath. 
 *   - Show Ability Points as the main acquired resource in the actor windows?
 * 
 *   Aftermath Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Earned, %2 - Abbr, %3 - Full Text
 *
 * ---
 * 
 * For those who wish to display how many Ability Points an actor has for a
 * specific class, you can use the following JavaScript code inside of a
 * window object.
 * 
 *   this.drawAbilityPoints(value, x, y, width, align);
 *   - The 'value' variable refers to the number you wish to display.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
 * 
 *   this.drawActorAbilityPoints(actor, classID, x, y, width, align);
 *   - The 'actor' variable references the actor to get data from.
 *   - The 'classID' variable is the class to get data from.
 *     - Use 0 if Ability Points aren't shared or if you want the Ability
 *       Points from the actor's current class.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Skill Points Settings
 * ============================================================================
 *
 * Skill Points are an actor-only resource used as a currency for this plugin.
 * You can determine how they appear in-game, how they're earned, and what kind
 * of mechanics are involved with them. Skill Points can also be used in other
 * VisuStella plugins.
 *
 * ---
 *
 * Mechanics
 * 
 *   Shared Skill Points:
 *   - Do you want Skill Points to be shared across all classes?
 *   - Or do you want all classes to have their own?
 * 
 *   Maximum:
 *   - What's the maximum amount of Skill Points an actor can have?
 *   - Use 0 for unlimited Skill Points.
 *
 * ---
 *
 * Visual
 * 
 *   Show In Menus?:
 *   - Do you wish to show Skill Points in menus that allow them?
 * 
 *   Icon:
 *   - What is the icon you want to use to represent Skill Points?
 *
 * ---
 *
 * Vocabulary
 * 
 *   Full Text:
 *   - The full text of how Skill Points appears in-game.
 * 
 *   Abbreviated Text:
 *   - The abbreviation of how Skill Points appears in-game.
 * 
 *   Menu Text Format:
 *   - What is the text format for it to be displayed in windows.
 *   - %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 *
 * ---
 *
 * Gain
 * 
 *   Per Action Hit:
 *   - How many Skill Points should an actor gain per action?
 *   - You may use code.
 * 
 *   Per Level Up:
 *   - How many Skill Points should an actor gain per level up?
 *   - You may use code.
 * 
 *   Per Enemy Defeated:
 *   - How many Skill Points should an actor gain per enemy?
 *   - You may use code.
 * 
 *     Alive Actors?:
 *     - Do actors have to be alive to receive Skill Points from
 *       defeated enemies?
 *
 * ---
 *
 * Victory
 * 
 *   Show During Victory?:
 *   - Show how much SP an actor has earned in battle during the victory phase?
 * 
 *   Victory Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * 
 *   Aftermath Display?:
 *   - Requires VisuMZ_3_VictoryAftermath. 
 *   - Show Skill Points as the main acquired resource in the actor windows?
 * 
 *   Aftermath Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Earned, %2 - Abbr, %3 - Full Text
 *
 * ---
 * 
 * For those who wish to display how many Skill Points an actor has for a
 * specific class, you can use the following JavaScript code inside of a
 * window object.
 * 
 *   this.drawSkillPoints(value, x, y, width, align);
 *   - The 'value' variable refers to the number you wish to display.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
 * 
 *   this.drawActorSkillPoints(actor, classID, x, y, width, align);
 *   - The 'actor' variable references the actor to get data from.
 *   - The 'classID' variable is the class to get data from.
 *     - Use 0 if Skill Points aren't shared or if you want the Skill
 *       Points from the actor's current class.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
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
 * Version 1.15: July 18, 2024
 * * Compatibility Update!
 * ** Added compatibility with new Skills and States Core features!
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** Added new Plugin Parameter by Irina:
 * *** Parameters > General Settings > Hide Learned Skills
 * **** Hide skills after they are learned?
 * 
 * Version 1.14: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where skill ID's could clash with state ID's from Equip
 *    Passive System and preventing states from being learned. Fixed by Irina.
 * 
 * Version 1.13: March 14, 2024
 * * Compatibility Update!
 * ** Fixed a problem where the learn passive notetags from the Equip Passive
 *    System plugin could be blocked by other plugins. Fix made by Irina.
 * 
 * Version 1.12: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.11: May 18, 2023
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: December 15, 2022
 * * Bug Fixes!
 * ** Fixed a visual listing bug effect when 'CP' and 'JP' are listed under
 *    costs but the VisuMZ Class Change System plugin isn't present. Fix made
 *    by Olivia.
 * 
 * Version 1.09: June 9, 2022
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: March 24, 2022
 * * Documentation Update!
 * ** Fixed a typo for missing a "/" in the <Learn Skills> group notetag.
 * 
 * Version 1.07: February 10, 2022
 * * Bug Fixes!
 * ** Costs for CP and JP will have better fail safes to not automatically
 *    reduce to 0 under specific conditions when learning skills. Fix by Arisu.
 * 
 * Version 1.06: July 9, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Yanfly.
 * *** <Learn Skill Picture: filename> and <Picture: filename>
 * **** Uses a picture from your project's /img/pictures/ folder instead of the
 *      skill's icon during learning instead.
 * 
 * Version 1.04: December 18, 2020
 * * Bug Fixes!
 * ** Notetags that utilize multiple numeric ID's instead of skill names should
 *    now be working properly. Fix made by Yanfly.
 * 
 * Version 1.03: December 11, 2020
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** The Plugin Parameter for "Displayed Costs" have been updated to contain
 *    compatibility for a future plugin.
 * ** The Plugin Parameter for "JS: Draw Status" has been updated to contain
 *    compatibility for a future plugin.
 * *** To quickly acquire the new changes for the above Plugin Parameters,
 *     delete the "General" settings from the main Plugin Parameters page, then
 *     open them up again. These settings will be defaulted to the new
 *     additions added for the plugin. Warning! Old settings will be lost.
 * * New Features!
 * ** Added <Learn CP Cost: x>, <Learn JP Cost: x>, <JS Learn CP Cost>,
 *    <JS Learn JP Cost> notetags. Added by Arisu.
 * 
 * Version 1.02: November 29, 2020
 * * Bug Fixes!
 * ** The plugin should no longer be dependent on Skills & States Core. Fix
 *    made by Arisu.
 * 
 * Version 1.01: November 22, 2020
 * * Bug Fixes!
 * ** Game no longer crashes when displaying AP/SP rewards for those without
 *    the Victory Aftermath plugin. Fix made by Yanfly.
 *
 * Version 1.00: November 30, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AbilityPointsGain
 * @text Ability Points: Gain
 * @desc The target actor(s) gains Ability Points.
 * Gained amounts are affected by Ability Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to gain Ability Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Ability Points
 * @desc Determine how many Ability Points will be gained.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AbilityPointsAdd
 * @text Ability Points: Add
 * @desc The target actor(s) receives Ability Points.
 * Received amounts are NOT affected by Ability Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to receive Ability Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Ability Points
 * @desc Determine how many Ability Points will be added.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AbilityPointsLose
 * @text Ability Points: Lose
 * @desc The target actor(s) loses Ability Points.
 * Lost amounts are NOT affected by Ability Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to lose Ability Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Ability Points
 * @desc Determine how many Ability Points will be lost.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AbilityPointsSet
 * @text Ability Points: Set
 * @desc Changes the exact Ability Points for the target actor(s).
 * Changed amounts are NOT affected by Ability Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to change Ability Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Ability Points
 * @desc Determine how many Ability Points will be set exactly to.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillPointsGain
 * @text Skill Points: Gain
 * @desc The target actor(s) gains Skill Points.
 * Gained amounts are affected by Skill Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to gain Skill Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Skill Points
 * @desc Determine how many Skill Points will be gained.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillPointsAdd
 * @text Skill Points: Add
 * @desc The target actor(s) receives Skill Points.
 * Received amounts are NOT affected by Skill Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to receive Skill Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Skill Points
 * @desc Determine how many Skill Points will be added.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillPointsLose
 * @text Skill Points: Lose
 * @desc The target actor(s) loses Skill Points.
 * Lost amounts are NOT affected by Skill Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to lose Skill Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Skill Points
 * @desc Determine how many Skill Points will be lost.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillPointsSet
 * @text Skill Points: Set
 * @desc Changes the exact Skill Points for the target actor(s).
 * Changed amounts are NOT affected by Skill Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to change Skill Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Skill Points
 * @desc Determine how many Skill Points will be set exactly to.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowSkillLearnSystemMenu
 * @text System: Show Skill Learn in Skill Menu?
 * @desc Shows/hides Skill Learn inside the skill menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Skill Learn inside the skill menu.
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
 * @param SkillLearnSystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Scene_SkillLearn
 *
 * @param General:struct
 * @text General Settings
 * @parent Scene_SkillLearn
 * @type struct<General>
 * @desc General settings for the Skill Learn System.
 * @default {"Visual":"","DisplayedCosts:arraystr":"[\"AP\",\"SP\",\"Item\",\"Weapon\",\"Armor\",\"Gold\"]","StatusWindowDrawJS:func":"\"// Draw Face\\nconst fx = this.colSpacing() / 2;\\nconst fh = this.innerHeight;\\nconst fy = fh / 2 - this.lineHeight() * 1.5;\\nthis.drawActorFace(this._actor, fx + 1, 0, 144, fh);\\nthis.drawActorSimpleStatus(this._actor, fx + 180, fy);\\n\\n// Return if Window Size is Too Small\\nlet sx = (this.colSpacing() / 2) + 180 + 180 + 180;\\nlet sw = this.innerWidth - sx - 2;\\nif (sw < 300) return;\\n\\n// Draw Costs\\n// Compatibility Target\\nconst costs = this.getSkillLearnDisplayedCosts();\\nconst maxEntries = Math.floor(this.innerHeight / this.lineHeight());\\nconst maxCol = Math.ceil(costs.length / maxEntries);\\nlet cx = sx;\\nlet cy = Math.max(Math.round((this.innerHeight - (this.lineHeight() * Math.ceil(costs.length / maxCol))) / 2), 0);\\nconst by = cy;\\nlet cw = (this.innerWidth - cx - (this.itemPadding() * 2 * maxCol)) / maxCol;\\nif (maxCol === 1) {\\n    cw = Math.min(ImageManager.faceWidth, cw);\\n    cx += Math.round((this.innerWidth - cx - (this.itemPadding() * 2) - cw) / 2);\\n}\\nfor (const cost of costs) {\\n    switch (cost) {\\n\\n        case 'AP':\\n            this.drawActorAbilityPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\\n            break;\\n\\n        case 'CP':\\n            if (Imported.VisuMZ_2_ClassChangeSystem) {\\n                this.drawActorClassPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\\n            }\\n            break;\\n\\n        case 'JP':\\n            if (Imported.VisuMZ_2_ClassChangeSystem) {\\n                this.drawActorJobPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\\n            }\\n            break;\\n\\n        case 'SP':\\n            this.drawActorSkillPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\\n            break;\\n\\n        case 'Gold':\\n            this.drawCurrencyValue($gameParty.gold(), TextManager.currencyUnit, cx, cy, cw);\\n            break;\\n\\n        default:\\n            continue;\\n    }\\n    cy += this.lineHeight();\\n    if (cy + this.lineHeight() > this.innerHeight) {\\n        cy = by;\\n        cx += cw + (this.itemPadding() * 2);\\n    }\\n}\"","Vocabulary":"","Learned:str":"Learned","Requirements":"","RequireFmt:str":"Requires %1","ReqSeparateFmt:str":"%1, %2","ReqLevelFmt:str":"\\C[16]%3\\C[0]%1","ReqSkillFmt:str":"%1\\C[16]%2\\C[0]","ReqSwitchFmt:str":"\\C[16]%1\\C[0]","Costs":"","SeparationFmt:str":"%1  %2","ItemFmt:str":"×%1%2","WeaponFmt:str":"×%1%2","ArmorFmt:str":"×%1%2","GoldFmt:str":"×%1%2"}
 *
 * @param MenuAccess:struct
 * @text Menu Access Settings
 * @parent Scene_SkillLearn
 * @type struct<MenuAccess>
 * @desc Menu Access settings for Skill Learn System.
 * @default {"Name:str":"Learn","Icon:num":"87","ShowMenu:eval":"true"}
 *
 * @param Animation:struct
 * @text Animation Settings
 * @parent Scene_SkillLearn
 * @type struct<Animation>
 * @desc Animation settings for the Skill Learn System.
 * @default {"General":"","ShowAnimations:eval":"true","ShowWindows:eval":"true","Animations:arraynum":"[\"40\",\"48\"]","Sprite":"","Scale:num":"8.0","FadeSpeed:num":"4"}
 *
 * @param Sound:struct
 * @text Learn Sound Effect
 * @parent Scene_SkillLearn
 * @type struct<Sound>
 * @desc Settings for the sound effect played when learning a new skill through the Skill Learn System.
 * @default {"name:str":"Skill3","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @param Window:struct
 * @text Window Settings
 * @parent Scene_SkillLearn
 * @type struct<Window>
 * @desc Window settings for the Skill Learn System.
 * @default {"DetailWindow":"","Requirements":"","RequirementTitle:str":"\\C[16]%1%2 Requirements\\C[0]","ReqMetFmt:str":"\\C[24]✔ %1\\C[0]","ReqNotMetFmt:str":"\\C[0]✘ %1\\C[0]","ReqLevelFmt:str":"\\I[87]%2 %1 Reached","ReqSkillFmt:str":"%1%2 Learned","ReqSwitchFmt:str":"\\I[160]%1","Costs":"","LearningTitle:str":"\\C[16]Learning\\C[0] %1%2","IngredientName:str":"\\C[16]Resource\\C[0]","IngredientCost:str":"\\C[16]Cost\\C[0]","IngredientOwned:str":"\\C[16]Owned\\C[0]","DetailWindow_BgType:num":"0","DetailWindow_RectJS:func":"\"const skillWindowRect = this.itemWindowRect();\\nconst wx = skillWindowRect.x;\\nconst wy = skillWindowRect.y;\\nconst ww = skillWindowRect.width;\\nconst wh = skillWindowRect.height - this.calcWindowHeight(2, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","ConfirmWindow":"","ConfirmCmd:str":"\\I[164]Learn","CancelCmd:str":"\\I[168]Cancel","ConfirmWindow_BgType:num":"0","ConfirmWindow_RectJS:func":"\"const skillWindowRect = this.itemWindowRect();\\nconst ww = skillWindowRect.width;\\nconst wh = this.calcWindowHeight(2, false);\\nconst wx = skillWindowRect.x;\\nconst wy = skillWindowRect.y + skillWindowRect.height - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 * 
 * @param Resources
 *
 * @param AbilityPoints:struct
 * @text Ability Points Settings
 * @parent Resources
 * @type struct<AbilityPoints>
 * @desc Settings for Ability Points and how they work in-game.
 * @default {"Mechanics":"","SharedResource:eval":"true","DefaultCost:num":"0","MaxResource:num":"0","Visual":"","ShowInMenus:eval":"true","Icon:num":"78","Vocabulary":"","FullText:str":"Ability Points","AbbrText:str":"AP","TextFmt:str":"%1 \\c[5]%2\\c[0]%3","Gain":"","PerAction:str":"10 + Math.randomInt(5)","PerLevelUp:str":"0","PerEnemy:str":"50 + Math.randomInt(10)","AliveActors:eval":"true","Victory":"","ShowVictory:eval":"true","VictoryText:str":"%1 gains %2 %3!","AftermathActorDisplay:eval":"true","AftermathText:str":"+%1 %2"}
 *
 * @param SkillPoints:struct
 * @text Skill Points Settings
 * @parent Resources
 * @type struct<SkillPoints>
 * @desc Settings for Skill Points and how they work in-game.
 * @default {"Mechanics":"","SharedResource:eval":"false","DefaultCost:num":"1","MaxResource:num":"0","Visual":"","ShowInMenus:eval":"true","Icon:num":"79","Vocabulary":"","FullText:str":"Skill Points","AbbrText:str":"SP","TextFmt:str":"%1 \\c[5]%2\\c[0]%3","Gain":"","PerAction:str":"0","PerLevelUp:str":"100","PerEnemy:str":"0","AliveActors:eval":"true","Victory":"","ShowVictory:eval":"false","VictoryText:str":"%1 gains %2 %3!","AftermathActorDisplay:eval":"false","AftermathText:str":"+%1 %2"}
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
 * @param Visual
 * 
 * @param DisplayedCosts:arraystr
 * @text Displayed Costs
 * @parent Visual
 * @type select[]
 * @option AP - Ability Points
 * @value AP
 * @option CP - Class Points (Requires VisuMZ_2_ClassChangeSystem)
 * @value CP
 * @option JP - Job Points (Requires VisuMZ_2_ClassChangeSystem)
 * @value JP
 * @option SP - Skill Points
 * @value SP
 * @option Item - Item Costs
 * @value Item
 * @option Weapon - Weapon Costs
 * @value Weapon
 * @option Armor - Armor Costs
 * @value Armor
 * @option Gold - Gold Costs
 * @value Gold
 * @desc Select which cost types to display in the skill entry.
 * This also determines the order they are displayed.
 * @default ["AP","SP","Item","Weapon","Armor","Gold"]
 *
 * @param SeparateByStypeID:eval
 * @text Separate Skill Type?
 * @parent Visual
 * @type boolean
 * @on Separate
 * @off Don't
 * @desc Separate learnable skills by skill type?
 * @default false
 *
 * @param HideLearned:eval
 * @text Hide Learned Skills
 * @parent Visual
 * @type boolean
 * @on Hide
 * @off Show
 * @desc Hide skills after they are learned?
 * @default false
 *
 * @param StatusWindowDrawJS:func
 * @text JS: Draw Status
 * @parent Visual
 * @type note
 * @desc JavaScript code used to draw in Window_SkillStatus when the Skill Learn System is active.
 * @default "// Draw Face\nconst fx = this.colSpacing() / 2;\nconst fh = this.innerHeight;\nconst fy = fh / 2 - this.lineHeight() * 1.5;\nthis.drawActorFace(this._actor, fx + 1, 0, 144, fh);\nthis.drawActorSimpleStatus(this._actor, fx + 180, fy);\n\n// Return if Window Size is Too Small\nlet sx = (this.colSpacing() / 2) + 180 + 180 + 180;\nlet sw = this.innerWidth - sx - 2;\nif (sw < 300) return;\n\n// Draw Costs\n// Compatibility Target\nconst costs = this.getSkillLearnDisplayedCosts();\nconst maxEntries = Math.floor(this.innerHeight / this.lineHeight());\nconst maxCol = Math.ceil(costs.length / maxEntries);\nlet cx = sx;\nlet cy = Math.max(Math.round((this.innerHeight - (this.lineHeight() * Math.ceil(costs.length / maxCol))) / 2), 0);\nconst by = cy;\nlet cw = (this.innerWidth - cx - (this.itemPadding() * 2 * maxCol)) / maxCol;\nif (maxCol === 1) {\n    cw = Math.min(ImageManager.faceWidth, cw);\n    cx += Math.round((this.innerWidth - cx - (this.itemPadding() * 2) - cw) / 2);\n}\nfor (const cost of costs) {\n    switch (cost) {\n\n        case 'AP':\n            this.drawActorAbilityPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\n            break;\n\n        case 'CP':\n            if (Imported.VisuMZ_2_ClassChangeSystem) {\n                this.drawActorClassPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\n            }\n            break;\n\n        case 'JP':\n            if (Imported.VisuMZ_2_ClassChangeSystem) {\n                this.drawActorJobPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\n            }\n            break;\n\n        case 'SP':\n            this.drawActorSkillPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\n            break;\n\n        case 'Gold':\n            this.drawCurrencyValue($gameParty.gold(), TextManager.currencyUnit, cx, cy, cw);\n            break;\n\n        default:\n            continue;\n    }\n    cy += this.lineHeight();\n    if (cy + this.lineHeight() > this.innerHeight) {\n        cy = by;\n        cx += cw + (this.itemPadding() * 2);\n    }\n}"
 *
 * @param Vocabulary
 *
 * @param Learned:str
 * @text Learned Text
 * @parent Vocabulary
 * @desc This is the text that appears if the skill has been
 * learned. You may use text codes.
 * @default Learned
 *
 * @param Requirements
 * @parent Vocabulary
 *
 * @param RequireFmt:str
 * @text Requirement Header
 * @parent Requirements
 * @desc Header for requirements.
 * %1 - Requirements (all of them)
 * @default Requires %1
 *
 * @param ReqSeparateFmt:str
 * @text Separation Format
 * @parent Requirements
 * @desc This determines how the requirements are separated.
 * %1 - Previous Requirement, %2 - Second Requirement
 * @default %1, %2
 *
 * @param ReqLevelFmt:str
 * @text Level Format
 * @parent Requirements
 * @desc This how level is displayed.
 * %1 - Level, %2 - Full Level Term, %3 - Abbr Level Term
 * @default \C[16]%3\C[0]%1
 *
 * @param ReqSkillFmt:str
 * @text Skill Format
 * @parent Requirements
 * @desc This how required skills are displayed.
 * %1 - Icon, %2 - Skill Name
 * @default %1\C[16]%2\C[0]
 *
 * @param ReqSwitchFmt:str
 * @text Switch Format
 * @parent Requirements
 * @desc This how required switches are displayed.
 * %1 - Switch Name
 * @default \C[16]%1\C[0]
 *
 * @param Costs
 * @parent Vocabulary
 *
 * @param SeparationFmt:str
 * @text Separation Format
 * @parent Costs
 * @desc This determines how the costs are separated from one another.
 * %1 - Previous Cost, %2 - Second Cost
 * @default %1  %2
 *
 * @param ItemFmt:str
 * @text Item Format
 * @parent Costs
 * @desc Determine how items are displayed as a cost.
 * %1 - Quantity, %2 - Icon, %3 - Item Name
 * @default ×%1%2
 *
 * @param WeaponFmt:str
 * @text Weapon Format
 * @parent Costs
 * @desc Determine how weapons are displayed as a cost.
 * %1 - Quantity, %2 - Icon, %3 - Weapon Name
 * @default ×%1%2
 *
 * @param ArmorFmt:str
 * @text Armor Format
 * @parent Costs
 * @desc Determine how armors are displayed as a cost.
 * %1 - Quantity, %2 - Icon, %3 - Armor Name
 * @default ×%1%2
 *
 * @param GoldFmt:str
 * @text Gold Format
 * @parent Costs
 * @desc Determine how gold is displayed as a cost.
 * %1 - Quantity, %2 - Icon, %3 - Currency Vocabulary
 * @default ×%1%2
 *
 * @param Separation
 * @parent Vocabulary
 *
 * @param SeparateIndent:num
 * @text Indent Skills
 * @parent Separation
 * @desc When separated, indent skills by this many pixels.
 * @default 16
 *
 * @param SeparateCategoryFmt:str
 * @text Category Format
 * @parent Separation
 * @desc Skill type category name format
 * %1 - Name
 * @default %1
 *
 * @param SeparateCollapseFmt:str
 * @text Collapse Format
 * @parent Separation
 * @desc Format for command to collapse skill type.
 * %1 - Name
 * @default %1 [-]
 *
 * @param SeparateExpandFmt:str
 * @text Expand Format
 * @parent Separation
 * @desc Format for command to expand skill type.
 * %1 - Name
 * @default %1 [+]
 *
 * @param StypeCategoryColor:str
 * @text Font Color
 * @parent Separation
 * @desc Text Color used to display this cost.
 * For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * @default 16
 *
 */
/* ----------------------------------------------------------------------------
 * MenuAccess Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuAccess:
 *
 * @param Name:str
 * @text Command Name
 * @desc Name of the 'Skill Learn' option in the Menu.
 * @default Learn
 *
 * @param Icon:num
 * @text Icon
 * @desc What is the icon you want to use to represent Skill Learn?
 * @default 87
 *
 * @param ShowMenu:eval
 * @text Show in Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Skill Learn' option to the Menu by default?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Animation Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Animation:
 *
 * @param General
 *
 * @param ShowAnimations:eval
 * @text Show Animations?
 * @parent General
 * @type boolean
 * @on Show
 * @off Skip
 * @desc Show animations when learning a skill?
 * @default true
 *
 * @param ShowWindows:eval
 * @text Show Windows?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show windows during a skill learn animation?
 * @default false
 *
 * @param Animations:arraynum
 * @text Default Animations
 * @parent General
 * @type animation[]
 * @desc Default animation(s) do you want to play when learning.
 * @default ["40","48"]
 *
 * @param Sprite
 * @text Skill Sprite
 *
 * @param Scale:num
 * @text Scale
 * @parent Sprite
 * @desc How big do you want the skill sprite to be on screen?
 * @default 8.0
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent Sprite
 * @type number
 * @min 1
 * @desc How fast do you want the icon to fade in?
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param name:str
 * @text Filename
 * @type file
 * @dir audio/se/
 * @desc Filename of the sound effect played.
 * @default Skill3
 *
 * @param volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param DetailWindow
 * @text Detail Window
 * 
 * @param Requirements
 * @parent DetailWindow
 *
 * @param RequirementTitle:str
 * @text Requirement Title
 * @parent Requirements
 * @desc Text used when drawing the learning requirements.
 * %1 - Skill Icon, %2 - Skill Name
 * @default \C[16]%1%2 Requirements\C[0]
 *
 * @param ReqMetFmt:str
 * @text Requirement Met
 * @parent Requirements
 * @desc This how met requirements look.
 * %1 - Requirement Text
 * @default \C[24]✔ %1\C[0]
 *
 * @param ReqNotMetFmt:str
 * @text Requirement Not Met
 * @parent Requirements
 * @desc This how met requirements look.
 * %1 - Requirement Text
 * @default \C[0]✘ %1\C[0]
 *
 * @param ReqLevelFmt:str
 * @text Requirement Level
 * @parent Requirements
 * @desc This how level is displayed.
 * %1 - Level, %2 - Full Level Term, %3 - Abbr Level Term
 * @default \I[87]%2 %1 Reached
 *
 * @param ReqSkillFmt:str
 * @text Requirement Skill
 * @parent Requirements
 * @desc This how required skills are displayed.
 * %1 - Icon, %2 - Skill Name
 * @default %1%2 Learned
 *
 * @param ReqSwitchFmt:str
 * @text Requirement Switch
 * @parent Requirements
 * @desc This how required switches are displayed.
 * %1 - Switch Name
 * @default \I[160]%1
 * 
 * @param Costs
 * @parent DetailWindow
 *
 * @param LearningTitle:str
 * @text Cost Title
 * @parent Costs
 * @desc Text used when drawing the learning costs.
 * %1 - Skill Icon, %2 - Skill Name
 * @default \C[16]Learning\C[0] %1%2
 *
 * @param IngredientName:str
 * @text Cost Name
 * @parent Costs
 * @desc Text used to label the resource being consumed.
 * @default \C[16]Resource\C[0]
 *
 * @param IngredientCost:str
 * @text Cost Quantity
 * @parent Costs
 * @desc Text used to label the cost of the resource.
 * @default \C[16]Cost\C[0]
 *
 * @param IngredientOwned:str
 * @text Cost of Owned
 * @parent Costs
 * @desc Text used to label the amount of the resource in possession.
 * @default \C[16]Owned\C[0]
 *
 * @param DetailWindow_BgType:num
 * @text Background Type
 * @parent DetailWindow
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
 * @param DetailWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent DetailWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const skillWindowRect = this.itemWindowRect();\nconst wx = skillWindowRect.x;\nconst wy = skillWindowRect.y;\nconst ww = skillWindowRect.width;\nconst wh = skillWindowRect.height - this.calcWindowHeight(2, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ConfirmWindow
 * @text Confirm Window
 *
 * @param ConfirmCmd:str
 * @text Confirm Text
 * @parent ConfirmWindow
 * @desc Text used for the Confirm command.
 * Text codes can be used.
 * @default \I[164]Learn
 *
 * @param CancelCmd:str
 * @text Cancel Text
 * @parent ConfirmWindow
 * @desc Text used for the Cancel command.
 * Text codes can be used.
 * @default \I[168]Cancel
 *
 * @param ConfirmWindow_BgType:num
 * @text Background Type
 * @parent ConfirmWindow
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
 * @param ConfirmWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ConfirmWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const skillWindowRect = this.itemWindowRect();\nconst ww = skillWindowRect.width;\nconst wh = this.calcWindowHeight(2, false);\nconst wx = skillWindowRect.x;\nconst wy = skillWindowRect.y + skillWindowRect.height - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Ability Points Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AbilityPoints:
 *
 * @param Mechanics
 *
 * @param SharedResource:eval
 * @text Shared Ability Points
 * @parent Mechanics
 * @type boolean
 * @on Shared Across Classes
 * @off Classes Separate
 * @desc Do you want Ability Points to be shared across all classes?
 * Or do you want all classes to have their own?
 * @default true
 *
 * @param DefaultCost:num
 * @text Default Cost
 * @parent Mechanics
 * @type number
 * @desc What's the default AP cost of a skill when trying to learn
 * it through the Skill Learn System?
 * @default 0
 *
 * @param MaxResource:num
 * @text Maximum
 * @parent Mechanics
 * @type number
 * @desc What's the maximum amount of Ability Points an actor can have?
 * Use 0 for unlimited Ability Points.
 * @default 0
 *
 * @param Visual
 *
 * @param ShowInMenus:eval
 * @text Show In Menus?
 * @parent Visual
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Do you wish to show Ability Points in menus that allow them?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @parent Visual
 * @desc What is the icon you want to use to represent Ability Points?
 * @default 78
 *
 * @param Vocabulary
 *
 * @param FullText:str
 * @text Full Text
 * @parent Vocabulary
 * @desc The full text of how Ability Points appears in-game.
 * @default Ability Points
 *
 * @param AbbrText:str
 * @text Abbreviated Text
 * @parent Vocabulary
 * @desc The abbreviation of how Ability Points appears in-game.
 * @default AP
 *
 * @param TextFmt:str
 * @text Menu Text Format
 * @parent Vocabulary
 * @desc What is the text format for it to be displayed in windows.
 * %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 * @default %1 \c[5]%2\c[0]%3
 *
 * @param Gain
 *
 * @param PerAction:str
 * @text Per Action Hit
 * @parent Gain
 * @desc How many Ability Points should an actor gain per action?
 * You may use code.
 * @default 10 + Math.randomInt(5)
 *
 * @param PerLevelUp:str
 * @text Per Level Up
 * @parent Gain
 * @desc How many Ability Points should an actor gain per level up?
 * You may use code.
 * @default 0
 *
 * @param PerEnemy:str
 * @text Per Enemy Defeated
 * @parent Gain
 * @desc How many Ability Points should an actor gain per enemy?
 * You may use code.
 * @default 50 + Math.randomInt(10)
 *
 * @param AliveActors:eval
 * @text Alive Actors?
 * @parent PerEnemy:str
 * @type boolean
 * @on Alive Requirement
 * @off No Requirement
 * @desc Do actors have to be alive to receive Ability Points from
 * defeated enemies?
 * @default true
 *
 * @param Victory
 *
 * @param ShowVictory:eval
 * @text Show During Victory?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how much AP an actor has earned in battle during the
 * victory phase?
 * @default true
 *
 * @param VictoryText:str
 * @text Victory Text
 * @parent Victory
 * @desc For no Victory Aftermath, this is the text that appears.
 * %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * @default %1 gains %2 %3!
 *
 * @param AftermathActorDisplay:eval
 * @text Aftermath Display?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Requires VisuMZ_3_VictoryAftermath. Show Ability Points as
 * the main acquired resource in the actor windows?
 * @default true
 *
 * @param AftermathText:str
 * @text Aftermath Text
 * @parent Victory
 * @desc For no Victory Aftermath, this is the text that appears.
 * %1 - Earned, %2 - Abbr, %3 - Full Text
 * @default +%1 %2
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Points Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillPoints:
 *
 * @param Mechanics
 *
 * @param SharedResource:eval
 * @text Shared Skill Points
 * @parent Mechanics
 * @type boolean
 * @on Shared Across Classes
 * @off Classes Separate
 * @desc Do you want Skill Points to be shared across all classes?
 * Or do you want all classes to have their own?
 * @default false
 *
 * @param DefaultCost:num
 * @text Default Cost
 * @parent Mechanics
 * @type number
 * @desc What's the default SP cost of a skill when trying to learn
 * it through the Skill Learn System?
 * @default 1
 *
 * @param MaxResource:num
 * @text Maximum
 * @parent Mechanics
 * @type number
 * @desc What's the maximum amount of Skill Points an actor can have?
 * Use 0 for unlimited Skill Points.
 * @default 0
 *
 * @param Visual
 *
 * @param ShowInMenus:eval
 * @text Show In Menus?
 * @parent Visual
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Do you wish to show Skill Points in menus that allow them?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @parent Visual
 * @desc What is the icon you want to use to represent Skill Points?
 * @default 79
 *
 * @param Vocabulary
 *
 * @param FullText:str
 * @text Full Text
 * @parent Vocabulary
 * @desc The full text of how Skill Points appears in-game.
 * @default Skill Points
 *
 * @param AbbrText:str
 * @text Abbreviated Text
 * @parent Vocabulary
 * @desc The abbreviation of how Skill Points appears in-game.
 * @default SP
 *
 * @param TextFmt:str
 * @text Menu Text Format
 * @parent Vocabulary
 * @desc What is the text format for it to be displayed in windows.
 * %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 * @default %1 \c[4]%2\c[0]%3
 *
 * @param Gain
 *
 * @param PerAction:str
 * @text Per Action Hit
 * @parent Gain
 * @desc How many Skill Points should an actor gain per action?
 * You may use code.
 * @default 0
 *
 * @param PerLevelUp:str
 * @text Per Level Up
 * @parent Gain
 * @desc How many Skill Points should an actor gain per level up?
 * You may use code.
 * @default 100
 *
 * @param PerEnemy:str
 * @text Per Enemy Defeated
 * @parent Gain
 * @desc How many Skill Points should an actor gain per enemy?
 * You may use code.
 * @default 0
 *
 * @param AliveActors:eval
 * @text Alive Actors?
 * @parent PerEnemy:str
 * @type boolean
 * @on Alive Requirement
 * @off No Requirement
 * @desc Do actors have to be alive to receive Skill Points from
 * defeated enemies?
 * @default true
 *
 * @param Victory
 *
 * @param ShowVictory:eval
 * @text Show During Victory?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how much SP an actor has earned in battle during the
 * victory phase?
 * @default false
 *
 * @param VictoryText:str
 * @text Victory Text
 * @parent Victory
 * @desc For no Victory Aftermath, this is the text that appears.
 * %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * @default %1 gains %2 %3!
 *
 * @param AftermathActorDisplay:eval
 * @text Aftermath Display?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Requires VisuMZ_3_VictoryAftermath. Show Skill Points as
 * the main acquired resource in the actor windows?
 * @default false
 *
 * @param AftermathText:str
 * @text Aftermath Text
 * @parent Victory
 * @desc For no Victory Aftermath, this is the text that appears.
 * %1 - Earned, %2 - Abbr, %3 - Full Text
 * @default +%1 %2
 *
 */
//=============================================================================

const _0x414e2e=_0x4e09;(function(_0x136c62,_0x2a882c){const _0x159c56=_0x4e09,_0x251637=_0x136c62();while(!![]){try{const _0x104f07=-parseInt(_0x159c56(0x265))/0x1+-parseInt(_0x159c56(0x250))/0x2*(parseInt(_0x159c56(0x1f1))/0x3)+parseInt(_0x159c56(0xdf))/0x4+parseInt(_0x159c56(0x107))/0x5+parseInt(_0x159c56(0x18c))/0x6+parseInt(_0x159c56(0x225))/0x7*(parseInt(_0x159c56(0x1a2))/0x8)+-parseInt(_0x159c56(0x23f))/0x9*(parseInt(_0x159c56(0x9f))/0xa);if(_0x104f07===_0x2a882c)break;else _0x251637['push'](_0x251637['shift']());}catch(_0x2828bb){_0x251637['push'](_0x251637['shift']());}}}(_0x3ab3,0x7064c));var label='SkillLearnSystem',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x414e2e(0x1cf)](function(_0x239e96){const _0x5a1354=_0x414e2e;return _0x239e96[_0x5a1354(0x10c)]&&_0x239e96['description'][_0x5a1354(0x182)]('['+label+']');})[0x0];VisuMZ[label][_0x414e2e(0x14a)]=VisuMZ[label][_0x414e2e(0x14a)]||{},VisuMZ[_0x414e2e(0x1ec)]=function(_0x31a843,_0x4ed0d5){const _0x575e4d=_0x414e2e;for(const _0x40cb89 in _0x4ed0d5){if(_0x40cb89[_0x575e4d(0x19a)](/(.*):(.*)/i)){const _0x439d12=String(RegExp['$1']),_0x5d07c2=String(RegExp['$2'])[_0x575e4d(0x259)]()[_0x575e4d(0xcb)]();let _0x236cc8,_0x59c7d1,_0x227a88;switch(_0x5d07c2){case _0x575e4d(0x1b4):_0x236cc8=_0x4ed0d5[_0x40cb89]!==''?Number(_0x4ed0d5[_0x40cb89]):0x0;break;case'ARRAYNUM':_0x59c7d1=_0x4ed0d5[_0x40cb89]!==''?JSON[_0x575e4d(0x1d5)](_0x4ed0d5[_0x40cb89]):[],_0x236cc8=_0x59c7d1[_0x575e4d(0x184)](_0x241c3c=>Number(_0x241c3c));break;case _0x575e4d(0x26d):_0x236cc8=_0x4ed0d5[_0x40cb89]!==''?eval(_0x4ed0d5[_0x40cb89]):null;break;case _0x575e4d(0x109):_0x59c7d1=_0x4ed0d5[_0x40cb89]!==''?JSON[_0x575e4d(0x1d5)](_0x4ed0d5[_0x40cb89]):[],_0x236cc8=_0x59c7d1[_0x575e4d(0x184)](_0x2074a2=>eval(_0x2074a2));break;case'JSON':_0x236cc8=_0x4ed0d5[_0x40cb89]!==''?JSON[_0x575e4d(0x1d5)](_0x4ed0d5[_0x40cb89]):'';break;case _0x575e4d(0x2d1):_0x59c7d1=_0x4ed0d5[_0x40cb89]!==''?JSON['parse'](_0x4ed0d5[_0x40cb89]):[],_0x236cc8=_0x59c7d1[_0x575e4d(0x184)](_0x3f8136=>JSON[_0x575e4d(0x1d5)](_0x3f8136));break;case _0x575e4d(0x113):_0x236cc8=_0x4ed0d5[_0x40cb89]!==''?new Function(JSON[_0x575e4d(0x1d5)](_0x4ed0d5[_0x40cb89])):new Function(_0x575e4d(0x15e));break;case _0x575e4d(0x20a):_0x59c7d1=_0x4ed0d5[_0x40cb89]!==''?JSON[_0x575e4d(0x1d5)](_0x4ed0d5[_0x40cb89]):[],_0x236cc8=_0x59c7d1[_0x575e4d(0x184)](_0x5933cb=>new Function(JSON[_0x575e4d(0x1d5)](_0x5933cb)));break;case _0x575e4d(0x102):_0x236cc8=_0x4ed0d5[_0x40cb89]!==''?String(_0x4ed0d5[_0x40cb89]):'';break;case'ARRAYSTR':_0x59c7d1=_0x4ed0d5[_0x40cb89]!==''?JSON[_0x575e4d(0x1d5)](_0x4ed0d5[_0x40cb89]):[],_0x236cc8=_0x59c7d1[_0x575e4d(0x184)](_0x550b0d=>String(_0x550b0d));break;case _0x575e4d(0xe7):_0x227a88=_0x4ed0d5[_0x40cb89]!==''?JSON[_0x575e4d(0x1d5)](_0x4ed0d5[_0x40cb89]):{},_0x236cc8=VisuMZ['ConvertParams']({},_0x227a88);break;case _0x575e4d(0x2d5):_0x59c7d1=_0x4ed0d5[_0x40cb89]!==''?JSON['parse'](_0x4ed0d5[_0x40cb89]):[],_0x236cc8=_0x59c7d1[_0x575e4d(0x184)](_0x2458ce=>VisuMZ[_0x575e4d(0x1ec)]({},JSON['parse'](_0x2458ce)));break;default:continue;}_0x31a843[_0x439d12]=_0x236cc8;}}return _0x31a843;},(_0xa4fe16=>{const _0x196a97=_0x414e2e,_0x5d1beb=_0xa4fe16[_0x196a97(0x1f5)];for(const _0x359471 of dependencies){if(!Imported[_0x359471]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x196a97(0x25f)](_0x5d1beb,_0x359471)),SceneManager[_0x196a97(0x1a8)]();break;}}const _0x4b6a61=_0xa4fe16['description'];if(_0x4b6a61[_0x196a97(0x19a)](/\[Version[ ](.*?)\]/i)){const _0x538a38=Number(RegExp['$1']);_0x538a38!==VisuMZ[label][_0x196a97(0x249)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x5d1beb,_0x538a38)),SceneManager['exit']());}if(_0x4b6a61[_0x196a97(0x19a)](/\[Tier[ ](\d+)\]/i)){const _0x466388=Number(RegExp['$1']);_0x466388<tier?(alert(_0x196a97(0x2d4)[_0x196a97(0x25f)](_0x5d1beb,_0x466388,tier)),SceneManager['exit']()):tier=Math['max'](_0x466388,tier);}VisuMZ[_0x196a97(0x1ec)](VisuMZ[label][_0x196a97(0x14a)],_0xa4fe16[_0x196a97(0x166)]);})(pluginData),PluginManager[_0x414e2e(0x298)](pluginData[_0x414e2e(0x1f5)],'AbilityPointsGain',_0x5aec82=>{const _0x3aeb3a=_0x414e2e;VisuMZ[_0x3aeb3a(0x1ec)](_0x5aec82,_0x5aec82);const _0x59b492=_0x5aec82[_0x3aeb3a(0x2b6)][_0x3aeb3a(0x184)](_0x207574=>$gameActors[_0x3aeb3a(0x278)](_0x207574)),_0x13fe7c=_0x5aec82['Classes'],_0x5af2fd=_0x5aec82[_0x3aeb3a(0x1af)];for(const _0x1c4284 of _0x59b492){if(!_0x1c4284)continue;for(const _0x1dfddd of _0x13fe7c){_0x1c4284[_0x3aeb3a(0xd6)](_0x5af2fd,_0x1dfddd);}}}),PluginManager[_0x414e2e(0x298)](pluginData['name'],_0x414e2e(0xac),_0x5ba667=>{const _0x2dec3f=_0x414e2e;VisuMZ[_0x2dec3f(0x1ec)](_0x5ba667,_0x5ba667);const _0xea9ae5=_0x5ba667[_0x2dec3f(0x2b6)][_0x2dec3f(0x184)](_0x20685e=>$gameActors[_0x2dec3f(0x278)](_0x20685e)),_0xcb0005=_0x5ba667[_0x2dec3f(0x214)],_0xc0956a=_0x5ba667[_0x2dec3f(0x1af)];for(const _0x4c3a7f of _0xea9ae5){if(!_0x4c3a7f)continue;for(const _0x489fc1 of _0xcb0005){_0x4c3a7f['addAbilityPoints'](_0xc0956a,_0x489fc1);}}}),PluginManager[_0x414e2e(0x298)](pluginData[_0x414e2e(0x1f5)],_0x414e2e(0x1b9),_0x34826d=>{const _0x32cfe5=_0x414e2e;VisuMZ[_0x32cfe5(0x1ec)](_0x34826d,_0x34826d);const _0x37e111=_0x34826d['Actors']['map'](_0x39d8e2=>$gameActors[_0x32cfe5(0x278)](_0x39d8e2)),_0x493ce1=_0x34826d['Classes'],_0x527ff3=_0x34826d[_0x32cfe5(0x1af)];for(const _0x211f10 of _0x37e111){if(!_0x211f10)continue;for(const _0x1320ba of _0x493ce1){_0x211f10[_0x32cfe5(0x183)](_0x527ff3,_0x1320ba);}}}),PluginManager[_0x414e2e(0x298)](pluginData[_0x414e2e(0x1f5)],_0x414e2e(0x258),_0x15188e=>{const _0x1bd550=_0x414e2e;VisuMZ['ConvertParams'](_0x15188e,_0x15188e);const _0x3b66ad=_0x15188e[_0x1bd550(0x2b6)][_0x1bd550(0x184)](_0x431c7d=>$gameActors[_0x1bd550(0x278)](_0x431c7d)),_0x48a924=_0x15188e['Classes'],_0x5958a9=_0x15188e[_0x1bd550(0x1af)];for(const _0x19a1e2 of _0x3b66ad){if(!_0x19a1e2)continue;for(const _0x5279e5 of _0x48a924){_0x19a1e2[_0x1bd550(0x22d)](_0x5958a9,_0x5279e5);}}}),PluginManager[_0x414e2e(0x298)](pluginData[_0x414e2e(0x1f5)],_0x414e2e(0x2d2),_0x51c2d0=>{const _0x2a2d97=_0x414e2e;VisuMZ['ConvertParams'](_0x51c2d0,_0x51c2d0);const _0xd95de6=_0x51c2d0['Actors'][_0x2a2d97(0x184)](_0x51860a=>$gameActors[_0x2a2d97(0x278)](_0x51860a)),_0x1d4ba4=_0x51c2d0[_0x2a2d97(0x214)],_0x3470c8=_0x51c2d0['Points'];for(const _0x19a13e of _0xd95de6){if(!_0x19a13e)continue;for(const _0x19a477 of _0x1d4ba4){_0x19a13e[_0x2a2d97(0x20f)](_0x3470c8,_0x19a477);}}}),PluginManager[_0x414e2e(0x298)](pluginData['name'],_0x414e2e(0x130),_0x55051b=>{const _0x205302=_0x414e2e;VisuMZ[_0x205302(0x1ec)](_0x55051b,_0x55051b);const _0x20714c=_0x55051b[_0x205302(0x2b6)]['map'](_0x26e83b=>$gameActors[_0x205302(0x278)](_0x26e83b)),_0x4e9566=_0x55051b['Classes'],_0x7e72db=_0x55051b[_0x205302(0x1af)];for(const _0x420b0a of _0x20714c){if(!_0x420b0a)continue;for(const _0x1941aa of _0x4e9566){_0x420b0a[_0x205302(0x261)](_0x7e72db,_0x1941aa);}}}),PluginManager[_0x414e2e(0x298)](pluginData['name'],_0x414e2e(0xb8),_0x236932=>{const _0x5bbbd8=_0x414e2e;VisuMZ['ConvertParams'](_0x236932,_0x236932);const _0x45aa5b=_0x236932[_0x5bbbd8(0x2b6)][_0x5bbbd8(0x184)](_0x45b4a2=>$gameActors[_0x5bbbd8(0x278)](_0x45b4a2)),_0xb96b06=_0x236932[_0x5bbbd8(0x214)],_0x9a7e0c=_0x236932[_0x5bbbd8(0x1af)];for(const _0x5875f2 of _0x45aa5b){if(!_0x5875f2)continue;for(const _0xb8ccab of _0xb96b06){_0x5875f2[_0x5bbbd8(0x15d)](_0x9a7e0c,_0xb8ccab);}}}),PluginManager[_0x414e2e(0x298)](pluginData[_0x414e2e(0x1f5)],'SkillPointsSet',_0x5a83d6=>{const _0x2cbfab=_0x414e2e;VisuMZ['ConvertParams'](_0x5a83d6,_0x5a83d6);const _0xe9bd89=_0x5a83d6['Actors'][_0x2cbfab(0x184)](_0x3f853c=>$gameActors[_0x2cbfab(0x278)](_0x3f853c)),_0x422999=_0x5a83d6[_0x2cbfab(0x214)],_0x404b42=_0x5a83d6[_0x2cbfab(0x1af)];for(const _0x29608b of _0xe9bd89){if(!_0x29608b)continue;for(const _0x4be52b of _0x422999){_0x29608b[_0x2cbfab(0x2c0)](_0x404b42,_0x4be52b);}}}),PluginManager[_0x414e2e(0x298)](pluginData['name'],_0x414e2e(0x12b),_0x2dfb02=>{const _0x48a536=_0x414e2e;VisuMZ['ConvertParams'](_0x2dfb02,_0x2dfb02),$gameSystem['setSkillLearnSystemMenuAccess'](_0x2dfb02[_0x48a536(0xc5)]);}),VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x1c6)]={'StartingAbilityPoints':/<STARTING (?:ABILITY POINTS|AP):[ ](.*)>/i,'StartClassAbilityPoints':/<CLASS (.*) STARTING (?:ABILITY POINTS|AP):[ ](.*)>/gi,'UserGainAbilityPoints':/<(?:ABILITY POINTS|AP|USER ABILITY POINTS|USER AP) GAIN:[ ](.*)>/i,'TargetGainAbilityPoints':/<TARGET (?:ABILITY POINTS|AP) GAIN:[ ](.*)>/i,'EnemyAbilityPoints':/<(?:ABILITY POINTS|AP):[ ](.*)>/i,'AbilityPointsRate':/<(?:ABILITY POINTS|AP) RATE:[ ](\d+)([%％])>/i,'StartingSkillPoints':/<STARTING (?:SKILL POINTS|SP):[ ](.*)>/i,'StartClassSkillPoints':/<CLASS (.*) STARTING (?:SKILL POINTS|SP):[ ](.*)>/gi,'UserGainSkillPoints':/<(?:SKILL POINTS|SP|USER SKILL POINTS|USER SP) GAIN:[ ](.*)>/i,'TargetGainSkillPoints':/<TARGET (?:SKILL POINTS|SP) GAIN:[ ](.*)>/i,'EnemySkillPoints':/<(?:SKILL POINTS|SP):[ ](.*)>/i,'SkillPointsRate':/<(?:SKILL POINTS|SP) RATE:[ ](\d+)([%％])>/i,'LearnSkillA':/<LEARN SKILL(?:|S):[ ](.*)>/gi,'LearnSkillB':/<LEARN SKILL(?:|S)>\s*([\s\S]*)\s*<\/LEARN SKILL(?:|S)>/i,'LearnSkillPassiveA':/<LEARN (?:SKILL |)PASSIVE(?:|S):[ ](.*)>/gi,'LearnSkillPassiveB':/<LEARN (?:SKILL |)PASSIVE(?:|S)>\s*([\s\S]*)\s*<\/LEARN (?:SKILL |)PASSIVE(?:|S)>/i,'LearnApCost':/<LEARN (?:ABILITY POINTS|AP) COST:[ ](\d+)>/i,'LearnCpCost':/<LEARN (?:CLASS POINTS|CP) COST:[ ](\d+)>/i,'LearnJpCost':/<LEARN (?:JOB POINTS|JP) COST:[ ](\d+)>/i,'LearnSpCost':/<LEARN (?:SKILL POINTS|SP) COST:[ ](\d+)>/i,'LearnItemCost':/<LEARN ITEM (.*) COST:[ ](\d+)>/gi,'LearnWeaponCost':/<LEARN WEAPON (.*) COST:[ ](\d+)>/gi,'LearnArmorCost':/<LEARN ARMOR (.*) COST:[ ](\d+)>/gi,'LearnGoldCost':/<LEARN GOLD COST:[ ](\d+)>/i,'LearnCostBatch':/<LEARN SKILL (?:COST|COSTS)>\s*([\s\S]*)\s*<\/LEARN SKILL (?:COST|COSTS)>/i,'LearnShowLevel':/<LEARN SHOW LEVEL:[ ](\d+)>/i,'LearnShowSkillsAll':/<LEARN SHOW (?:SKILL|SKILLS|ALL SKILL|ALL SKILLS):[ ](.*)>/i,'LearnShowSkillsAny':/<LEARN SHOW ANY (?:SKILL|SKILLS):[ ](.*)>/i,'LearnShowSwitchesAll':/<LEARN SHOW (?:SWITCH|SWITCHES|ALL SWITCH|ALL SWITCHES):[ ](.*)>/i,'LearnShowSwitchesAny':/<LEARN SHOW ANY (?:SWITCH|SWITCHES):[ ](.*)>/i,'LearnReqLevel':/<LEARN REQUIRE LEVEL:[ ](\d+)>/i,'LearnReqSkillsAll':/<LEARN REQUIRE (?:SKILL|SKILLS|ALL SKILL|ALL SKILLS):[ ](.*)>/i,'LearnReqSkillsAny':/<LEARN REQUIRE ANY (?:SKILL|SKILLS):[ ](.*)>/i,'LearnReqSwitchesAll':/<LEARN REQUIRE (?:SWITCH|SWITCHES|ALL SWITCH|ALL SWITCHES):[ ](.*)>/i,'LearnReqSwitchesAny':/<LEARN REQUIRE ANY (?:SWITCH|SWITCHES):[ ](.*)>/i,'animationIDs':/<LEARN SKILL (?:ANIMATION|ANIMATIONS|ANI):[ ](.*)>/i,'opacitySpeed':/<LEARN SKILL FADE SPEED:[ ](\d+)>/i,'learnPicture':/<LEARN SKILL (?:PICTURE|FILENAME):[ ](.*)>/i,'bigPicture':/<PICTURE:[ ](.*)>/i,'jsLearnApCost':/<JS LEARN (?:ABILITY POINTS|AP) COST>\s*([\s\S]*)\s*<\/JS LEARN (?:ABILITY POINTS|AP) COST>/i,'jsLearnCpCost':/<JS LEARN (?:CLASS POINTS|CP) COST>\s*([\s\S]*)\s*<\/JS LEARN (?:CLASS POINTS|CP) COST>/i,'jsLearnJpCost':/<JS LEARN (?:JOB POINTS|JP) COST>\s*([\s\S]*)\s*<\/JS LEARN (?:JOB POINTS|JP) COST>/i,'jsLearnSpCost':/<JS LEARN (?:SKILL POINTS|SP) COST>\s*([\s\S]*)\s*<\/JS LEARN (?:SKILL POINTS|SP) COST>/i,'jsLearnShow':/<JS LEARN (?:SHOW|VISIBLE)>\s*([\s\S]*)\s*<\/JS LEARN (?:SHOW|VISIBLE)>/i,'jsLearnShowListTxt':/<JS LEARN (?:SHOW|VISIBLE) LIST TEXT>\s*([\s\S]*)\s*<\/JS LEARN (?:SHOW|VISIBLE) LIST TEXT>/i,'jsLearnShowDetailTxt':/<JS LEARN (?:SHOW|VISIBLE) DETAIL TEXT>\s*([\s\S]*)\s*<\/JS LEARN (?:SHOW|VISIBLE) DETAIL TEXT>/i,'jsLearnReq':/<JS LEARN (?:REQUIREMENT|REQUIREMENTS)>\s*([\s\S]*)\s*<\/JS LEARN (?:REQUIREMENT|REQUIREMENTS)>/i,'jsLearnReqListTxt':/<JS LEARN (?:REQUIREMENT|REQUIREMENTS) LIST TEXT>\s*([\s\S]*)\s*<\/JS LEARN (?:REQUIREMENT|REQUIREMENTS) LIST TEXT>/i,'jsLearnReqDetailTxt':/<JS LEARN (?:REQUIREMENT|REQUIREMENTS) DETAIL TEXT>\s*([\s\S]*)\s*<\/JS LEARN (?:REQUIREMENT|REQUIREMENTS) DETAIL TEXT>/i,'jsOnLearn':/<JS ON LEARN SKILL>\s*([\s\S]*)\s*<\/JS ON LEARN SKILL>/i},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x2a4)]=Scene_Boot[_0x414e2e(0x219)][_0x414e2e(0x206)],Scene_Boot[_0x414e2e(0x219)]['onDatabaseLoaded']=function(){const _0x225daa=_0x414e2e;VisuMZ[_0x225daa(0x2ad)][_0x225daa(0x2a4)][_0x225daa(0x1ad)](this),this['process_VisuMZ_SkillLearnSystem_Notetags']();},Scene_Boot[_0x414e2e(0x219)][_0x414e2e(0x2ac)]=function(){const _0x114879=_0x414e2e;if(VisuMZ[_0x114879(0x291)])return;this['process_VisuMZ_SkillLearnSystem_JS']();},VisuMZ[_0x414e2e(0x2ad)]['JS']={},Scene_Boot[_0x414e2e(0x219)]['process_VisuMZ_SkillLearnSystem_JS']=function(){const _0x53cff2=_0x414e2e,_0x1ced3b=$dataActors['concat']($dataSkills);for(const _0x450c92 of _0x1ced3b){if(!_0x450c92)continue;VisuMZ[_0x53cff2(0x2ad)][_0x53cff2(0x103)](_0x450c92);}},VisuMZ[_0x414e2e(0x2ad)]['ParseSkillNotetags']=VisuMZ[_0x414e2e(0x143)],VisuMZ[_0x414e2e(0x143)]=function(_0x28553d){const _0x140dcd=_0x414e2e;VisuMZ[_0x140dcd(0x2ad)]['ParseSkillNotetags'][_0x140dcd(0x1ad)](this,_0x28553d),VisuMZ[_0x140dcd(0x2ad)][_0x140dcd(0x103)](_0x28553d);},VisuMZ['SkillLearnSystem'][_0x414e2e(0x103)]=function(_0x417395){const _0x14c0a9=_0x414e2e,_0x4b067f=VisuMZ[_0x14c0a9(0x2ad)][_0x14c0a9(0x1c6)];VisuMZ[_0x14c0a9(0x2ad)]['createCostJS'](_0x417395,_0x14c0a9(0x129),_0x4b067f[_0x14c0a9(0x129)]),VisuMZ[_0x14c0a9(0x2ad)][_0x14c0a9(0x114)](_0x417395,_0x14c0a9(0xd8),_0x4b067f['jsLearnCpCost']),VisuMZ[_0x14c0a9(0x2ad)]['createCostJS'](_0x417395,'jsLearnJpCost',_0x4b067f[_0x14c0a9(0xcf)]),VisuMZ['SkillLearnSystem'][_0x14c0a9(0x114)](_0x417395,_0x14c0a9(0x2cd),_0x4b067f['jsLearnSpCost']),VisuMZ[_0x14c0a9(0x2ad)][_0x14c0a9(0x251)](_0x417395,'jsLearnShow',_0x4b067f[_0x14c0a9(0x27d)]),VisuMZ['SkillLearnSystem'][_0x14c0a9(0x193)](_0x417395,'jsLearnReq',_0x4b067f[_0x14c0a9(0x17b)]),VisuMZ[_0x14c0a9(0x2ad)][_0x14c0a9(0x1da)](_0x417395,'jsLearnShowListTxt',_0x4b067f[_0x14c0a9(0x19b)]),VisuMZ[_0x14c0a9(0x2ad)][_0x14c0a9(0x1da)](_0x417395,'jsLearnShowDetailTxt',_0x4b067f[_0x14c0a9(0xe8)]),VisuMZ['SkillLearnSystem'][_0x14c0a9(0x1da)](_0x417395,_0x14c0a9(0xf6),_0x4b067f['jsLearnReqListTxt']),VisuMZ['SkillLearnSystem'][_0x14c0a9(0x1da)](_0x417395,_0x14c0a9(0x211),_0x4b067f[_0x14c0a9(0x211)]),VisuMZ[_0x14c0a9(0x2ad)]['createActionJS'](_0x417395,_0x14c0a9(0x15a),_0x4b067f[_0x14c0a9(0x15a)]);},VisuMZ[_0x414e2e(0x2ad)]['createCostJS']=function(_0x232217,_0x21d511,_0x399fd0){const _0xa8571c=_0x414e2e,_0xa61c18=_0x232217['note'];if(_0xa61c18['match'](_0x399fd0)){const _0x13b20e=String(RegExp['$1']),_0x5b57b7=_0xa8571c(0x1e8)[_0xa8571c(0x25f)](_0x13b20e),_0x1b94c9=VisuMZ[_0xa8571c(0x2ad)][_0xa8571c(0x2c7)](_0x232217,_0x21d511);VisuMZ[_0xa8571c(0x2ad)]['JS'][_0x1b94c9]=new Function(_0x5b57b7);}},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x251)]=function(_0x179ff4,_0x366f02,_0x4afe8c){const _0x5211c7=_0x414e2e,_0x1cda2b=_0x179ff4[_0x5211c7(0x158)];if(_0x1cda2b[_0x5211c7(0x19a)](_0x4afe8c)){const _0x492e7b=String(RegExp['$1']),_0x587612=_0x5211c7(0x2a1)[_0x5211c7(0x25f)](_0x492e7b),_0x195aac=VisuMZ[_0x5211c7(0x2ad)][_0x5211c7(0x2c7)](_0x179ff4,_0x366f02);VisuMZ[_0x5211c7(0x2ad)]['JS'][_0x195aac]=new Function(_0x587612);}},VisuMZ['SkillLearnSystem'][_0x414e2e(0x193)]=function(_0x1a998a,_0x13fc98,_0x1acff7){const _0x5471b8=_0x414e2e,_0x448769=_0x1a998a['note'];if(_0x448769[_0x5471b8(0x19a)](_0x1acff7)){const _0x3297a6=String(RegExp['$1']),_0x1cfea3=_0x5471b8(0x23c)[_0x5471b8(0x25f)](_0x3297a6),_0x4f2fbb=VisuMZ[_0x5471b8(0x2ad)][_0x5471b8(0x2c7)](_0x1a998a,_0x13fc98);VisuMZ[_0x5471b8(0x2ad)]['JS'][_0x4f2fbb]=new Function(_0x1cfea3);}},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x1da)]=function(_0x4fbde8,_0xa7a82e,_0x41c9f4){const _0x7c1cf7=_0x414e2e,_0x545982=_0x4fbde8['note'];if(_0x545982['match'](_0x41c9f4)){const _0x44a4d6=String(RegExp['$1']),_0x32e035=_0x7c1cf7(0x1dc)[_0x7c1cf7(0x25f)](_0x44a4d6),_0x1b2773=VisuMZ[_0x7c1cf7(0x2ad)][_0x7c1cf7(0x2c7)](_0x4fbde8,_0xa7a82e);VisuMZ[_0x7c1cf7(0x2ad)]['JS'][_0x1b2773]=new Function(_0x32e035);}},VisuMZ['SkillLearnSystem'][_0x414e2e(0x20e)]=function(_0x142f80,_0x487594,_0x376604){const _0x98fc2a=_0x414e2e,_0x44cac=_0x142f80[_0x98fc2a(0x158)];if(_0x44cac[_0x98fc2a(0x19a)](_0x376604)){const _0x39459a=String(RegExp['$1']),_0x5a81ed=_0x98fc2a(0x185)[_0x98fc2a(0x25f)](_0x39459a),_0x1dbbb0=VisuMZ[_0x98fc2a(0x2ad)]['createKeyJS'](_0x142f80,_0x487594);VisuMZ[_0x98fc2a(0x2ad)]['JS'][_0x1dbbb0]=new Function(_0x5a81ed);}},VisuMZ[_0x414e2e(0x2ad)]['createKeyJS']=function(_0x2ef3f5,_0xa7a80c){const _0xba07e8=_0x414e2e;if(VisuMZ[_0xba07e8(0x2c7)])return VisuMZ[_0xba07e8(0x2c7)](_0x2ef3f5,_0xa7a80c);let _0x393726='';if($dataActors[_0xba07e8(0x182)](_0x2ef3f5))_0x393726=_0xba07e8(0x237)[_0xba07e8(0x25f)](_0x2ef3f5['id'],_0xa7a80c);if($dataClasses[_0xba07e8(0x182)](_0x2ef3f5))_0x393726=_0xba07e8(0x1e1)[_0xba07e8(0x25f)](_0x2ef3f5['id'],_0xa7a80c);if($dataSkills[_0xba07e8(0x182)](_0x2ef3f5))_0x393726='Skill-%1-%2'[_0xba07e8(0x25f)](_0x2ef3f5['id'],_0xa7a80c);if($dataItems[_0xba07e8(0x182)](_0x2ef3f5))_0x393726=_0xba07e8(0x223)[_0xba07e8(0x25f)](_0x2ef3f5['id'],_0xa7a80c);if($dataWeapons[_0xba07e8(0x182)](_0x2ef3f5))_0x393726=_0xba07e8(0xd3)[_0xba07e8(0x25f)](_0x2ef3f5['id'],_0xa7a80c);if($dataArmors[_0xba07e8(0x182)](_0x2ef3f5))_0x393726='Armor-%1-%2'['format'](_0x2ef3f5['id'],_0xa7a80c);if($dataEnemies[_0xba07e8(0x182)](_0x2ef3f5))_0x393726='Enemy-%1-%2'[_0xba07e8(0x25f)](_0x2ef3f5['id'],_0xa7a80c);if($dataStates[_0xba07e8(0x182)](_0x2ef3f5))_0x393726='State-%1-%2'[_0xba07e8(0x25f)](_0x2ef3f5['id'],_0xa7a80c);return _0x393726;},DataManager['isState']=function(_0x5ed516){const _0x385eeb=_0x414e2e;if(!_0x5ed516)return![];return _0x5ed516[_0x385eeb(0x132)]!==undefined&&_0x5ed516[_0x385eeb(0x199)]!==undefined;},DataManager[_0x414e2e(0x1ed)]=function(_0x937a01){const _0xde7147=_0x414e2e;_0x937a01=_0x937a01[_0xde7147(0x259)]()['trim'](),this[_0xde7147(0x1f2)]=this['_classIDs']||{};if(this[_0xde7147(0x1f2)][_0x937a01])return this[_0xde7147(0x1f2)][_0x937a01];for(const _0x25bc97 of $dataClasses){if(!_0x25bc97)continue;let _0xb3bacf=_0x25bc97[_0xde7147(0x1f5)];_0xb3bacf=_0xb3bacf[_0xde7147(0x18e)](/\x1I\[(\d+)\]/gi,''),_0xb3bacf=_0xb3bacf[_0xde7147(0x18e)](/\\I\[(\d+)\]/gi,''),this[_0xde7147(0x1f2)][_0xb3bacf[_0xde7147(0x259)]()[_0xde7147(0xcb)]()]=_0x25bc97['id'];}return this['_classIDs'][_0x937a01]||0x0;},DataManager[_0x414e2e(0xf4)]=function(_0x2cd867){const _0x1187c6=_0x414e2e;_0x2cd867=_0x2cd867[_0x1187c6(0x259)]()[_0x1187c6(0xcb)](),this['_skillIDs']=this[_0x1187c6(0xb4)]||{};if(this['_skillIDs'][_0x2cd867])return this[_0x1187c6(0xb4)][_0x2cd867];for(const _0x3ada76 of $dataSkills){if(!_0x3ada76)continue;this[_0x1187c6(0xb4)][_0x3ada76[_0x1187c6(0x1f5)][_0x1187c6(0x259)]()[_0x1187c6(0xcb)]()]=_0x3ada76['id'];}return this[_0x1187c6(0xb4)][_0x2cd867]||0x0;},DataManager['getItemIdWithName']=function(_0x452704){const _0x419093=_0x414e2e;_0x452704=_0x452704['toUpperCase']()[_0x419093(0xcb)](),this[_0x419093(0x108)]=this[_0x419093(0x108)]||{};if(this[_0x419093(0x108)][_0x452704])return this[_0x419093(0x108)][_0x452704];for(const _0x444b9e of $dataItems){if(!_0x444b9e)continue;this['_itemIDs'][_0x444b9e['name']['toUpperCase']()['trim']()]=_0x444b9e['id'];}return this[_0x419093(0x108)][_0x452704]||0x0;},DataManager[_0x414e2e(0xc7)]=function(_0x338fe3){const _0x9dbcd5=_0x414e2e;_0x338fe3=_0x338fe3[_0x9dbcd5(0x259)]()['trim'](),this[_0x9dbcd5(0x24c)]=this[_0x9dbcd5(0x24c)]||{};if(this['_weaponIDs'][_0x338fe3])return this['_weaponIDs'][_0x338fe3];for(const _0x342dbe of $dataWeapons){if(!_0x342dbe)continue;this[_0x9dbcd5(0x24c)][_0x342dbe[_0x9dbcd5(0x1f5)][_0x9dbcd5(0x259)]()[_0x9dbcd5(0xcb)]()]=_0x342dbe['id'];}return this[_0x9dbcd5(0x24c)][_0x338fe3]||0x0;},DataManager[_0x414e2e(0xc2)]=function(_0x255f93){const _0x32f784=_0x414e2e;_0x255f93=_0x255f93[_0x32f784(0x259)]()[_0x32f784(0xcb)](),this[_0x32f784(0x224)]=this[_0x32f784(0x224)]||{};if(this['_armorIDs'][_0x255f93])return this[_0x32f784(0x224)][_0x255f93];for(const _0x4ab96a of $dataArmors){if(!_0x4ab96a)continue;this[_0x32f784(0x224)][_0x4ab96a[_0x32f784(0x1f5)]['toUpperCase']()[_0x32f784(0xcb)]()]=_0x4ab96a['id'];}return this[_0x32f784(0x224)][_0x255f93]||0x0;},DataManager['getSkillLearnSkillsFromClass']=function(_0xb40792){const _0x319216=_0x414e2e;if(!$dataClasses[_0xb40792])return[];const _0x2ae34c=[],_0x4790b0=$dataClasses[_0xb40792][_0x319216(0x158)],_0x2ad6b5=VisuMZ['SkillLearnSystem'][_0x319216(0x1c6)],_0xb0e197=_0x4790b0['match'](_0x2ad6b5['LearnSkillA']);if(_0xb0e197)for(const _0x4f47b4 of _0xb0e197){if(!_0x4f47b4)continue;_0x4f47b4['match'](_0x2ad6b5['LearnSkillA']);const _0x5ec60f=String(RegExp['$1'])[_0x319216(0x1d2)](',')['map'](_0x546ef1=>_0x546ef1['trim']());;for(let _0x1f983e of _0x5ec60f){_0x1f983e=(String(_0x1f983e)||'')[_0x319216(0xcb)]();if(_0x1f983e[_0x319216(0x19a)](/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)){const _0x42a3d0=Math[_0x319216(0x111)](Number(RegExp['$1']),Number(RegExp['$2'])),_0x5d179c=Math['max'](Number(RegExp['$1']),Number(RegExp['$2']));for(let _0x2ea4dd=_0x42a3d0;_0x2ea4dd<=_0x5d179c;_0x2ea4dd++)_0x2ae34c[_0x319216(0x2b4)](_0x2ea4dd);continue;}_0x1f983e=(String(_0x1f983e)||'')[_0x319216(0xcb)]();const _0x2f3a4a=/^\d+$/[_0x319216(0xda)](_0x1f983e);_0x2f3a4a?_0x2ae34c[_0x319216(0x2b4)](Number(_0x1f983e)):_0x2ae34c[_0x319216(0x2b4)](DataManager[_0x319216(0xf4)](_0x1f983e));}}const _0x432d31=_0x4790b0['match'](_0x2ad6b5['LearnSkillB']);if(_0x432d31)for(const _0x49c1da of _0x432d31){if(!_0x49c1da)continue;_0x49c1da[_0x319216(0x19a)](_0x2ad6b5[_0x319216(0x174)]);const _0x3965e0=String(RegExp['$1'])[_0x319216(0x1d2)](/[\r\n]+/);for(let _0x4f4d03 of _0x3965e0){_0x4f4d03=(String(_0x4f4d03)||'')['trim']();if(_0x4f4d03[_0x319216(0x19a)](/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)){const _0x266d67=Math['min'](Number(RegExp['$1']),Number(RegExp['$2'])),_0x3796aa=Math[_0x319216(0x28c)](Number(RegExp['$1']),Number(RegExp['$2']));for(let _0x5316d7=_0x266d67;_0x5316d7<=_0x3796aa;_0x5316d7++)_0x2ae34c[_0x319216(0x2b4)](_0x5316d7);continue;}const _0x56b921=/^\d+$/['test'](_0x4f4d03);_0x56b921?_0x2ae34c[_0x319216(0x2b4)](Number(_0x4f4d03)):_0x2ae34c[_0x319216(0x2b4)](DataManager[_0x319216(0xf4)](_0x4f4d03));}}return _0x2ae34c[_0x319216(0x254)]((_0x140f7e,_0x3682f7)=>_0x140f7e-_0x3682f7),VisuMZ[_0x319216(0x1b3)][_0x319216(0x173)]&&VisuMZ['SkillsStatesCore'][_0x319216(0x173)](_0x2ae34c),_0x2ae34c[_0x319216(0x1cf)](_0x211ef3=>$dataSkills[_0x211ef3]&&$dataSkills[_0x211ef3][_0x319216(0x1f5)]['trim']()!=='')[_0x319216(0x1cf)]((_0x49bfe1,_0x4075a9,_0x2239f0)=>_0x2239f0[_0x319216(0x1bc)](_0x49bfe1)===_0x4075a9);},DataManager[_0x414e2e(0xbf)]=function(_0x558150){const _0x2418be=_0x414e2e;if(!_0x558150)return 0x0;if(!DataManager[_0x2418be(0x14d)](_0x558150)&&!DataManager['isState'](_0x558150))return 0x0;const _0x266f1d=VisuMZ[_0x2418be(0x2ad)][_0x2418be(0x1c6)],_0x4cea1e=_0x558150[_0x2418be(0x158)];if(_0x4cea1e[_0x2418be(0x19a)](_0x266f1d[_0x2418be(0x230)]))return Number(RegExp['$1']);if(_0x4cea1e[_0x2418be(0x19a)](_0x266f1d['LearnCostBatch'])){const _0xef88fe=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x563c16 of _0xef88fe){if(_0x563c16['match'](/(?:ABILITY POINTS|AP):[ ](\d+)/gi))return Number(RegExp['$1']);}}const _0x36892f=VisuMZ[_0x2418be(0x2ad)][_0x2418be(0x2c7)](_0x558150,_0x2418be(0x129));if(VisuMZ[_0x2418be(0x2ad)]['JS'][_0x36892f]){const _0x917945=SceneManager['_scene']['user']();return VisuMZ['SkillLearnSystem']['JS'][_0x36892f][_0x2418be(0x1ad)](this,_0x917945,_0x558150);}return VisuMZ[_0x2418be(0x2ad)][_0x2418be(0x14a)][_0x2418be(0x124)][_0x2418be(0xd5)]||0x0;},DataManager['getSkillLearnClassPointCost']=function(_0x44c272){const _0x5df44b=_0x414e2e;if(!_0x44c272)return 0x0;if(!DataManager['isSkill'](_0x44c272)&&!DataManager[_0x5df44b(0xa1)](_0x44c272))return 0x0;const _0x512f5a=VisuMZ['SkillLearnSystem'][_0x5df44b(0x1c6)],_0x3dc787=_0x44c272['note'];if(_0x3dc787[_0x5df44b(0x19a)](_0x512f5a[_0x5df44b(0x2ba)]))return Number(RegExp['$1']);if(_0x3dc787[_0x5df44b(0x19a)](_0x512f5a['LearnCostBatch'])){const _0x2c6f23=String(RegExp['$1'])[_0x5df44b(0x1d2)](/[\r\n]+/);for(const _0x38d612 of _0x2c6f23){if(_0x38d612[_0x5df44b(0x19a)](/(?:CLASS POINTS|CP):[ ](\d+)/gi))return Number(RegExp['$1']);}}const _0x318384=VisuMZ[_0x5df44b(0x2ad)]['createKeyJS'](_0x44c272,_0x5df44b(0xd8));if(VisuMZ[_0x5df44b(0x2ad)]['JS'][_0x318384]){const _0x8dcbe1=SceneManager[_0x5df44b(0x267)]['user']();return VisuMZ[_0x5df44b(0x2ad)]['JS'][_0x318384][_0x5df44b(0x1ad)](this,_0x8dcbe1,_0x44c272)||0x0;}return VisuMZ['ClassChangeSystem']['Settings'][_0x5df44b(0x14c)][_0x5df44b(0xd5)]||0x0;},DataManager[_0x414e2e(0x198)]=function(_0x3034ba){const _0x4b24b7=_0x414e2e;if(!_0x3034ba)return 0x0;if(!DataManager['isSkill'](_0x3034ba)&&!DataManager[_0x4b24b7(0xa1)](_0x3034ba))return 0x0;const _0x4e8024=VisuMZ['SkillLearnSystem'][_0x4b24b7(0x1c6)],_0x170f51=_0x3034ba[_0x4b24b7(0x158)];if(_0x170f51[_0x4b24b7(0x19a)](_0x4e8024[_0x4b24b7(0x16d)]))return Number(RegExp['$1']);if(_0x170f51[_0x4b24b7(0x19a)](_0x4e8024[_0x4b24b7(0x121)])){const _0x5bbcfe=String(RegExp['$1'])[_0x4b24b7(0x1d2)](/[\r\n]+/);for(const _0x44e4b7 of _0x5bbcfe){if(_0x44e4b7[_0x4b24b7(0x19a)](/(?:JOB POINTS|JP):[ ](\d+)/gi))return Number(RegExp['$1']);}}const _0x491c8b=VisuMZ[_0x4b24b7(0x2ad)]['createKeyJS'](_0x3034ba,_0x4b24b7(0xcf));if(VisuMZ[_0x4b24b7(0x2ad)]['JS'][_0x491c8b]){const _0x169f31=SceneManager[_0x4b24b7(0x267)][_0x4b24b7(0x15f)]();return VisuMZ[_0x4b24b7(0x2ad)]['JS'][_0x491c8b]['call'](this,_0x169f31,_0x3034ba);}return VisuMZ[_0x4b24b7(0x1b0)][_0x4b24b7(0x14a)][_0x4b24b7(0xdc)][_0x4b24b7(0xd5)]||0x0;},DataManager[_0x414e2e(0x11e)]=function(_0x358da3){const _0x778f2d=_0x414e2e;if(!_0x358da3)return 0x0;if(!DataManager[_0x778f2d(0x14d)](_0x358da3)&&!DataManager['isState'](_0x358da3))return 0x0;const _0x36a634=VisuMZ[_0x778f2d(0x2ad)][_0x778f2d(0x1c6)],_0x5a1a10=_0x358da3[_0x778f2d(0x158)];if(_0x5a1a10['match'](_0x36a634[_0x778f2d(0x29e)]))return Number(RegExp['$1']);if(_0x5a1a10['match'](_0x36a634['LearnCostBatch'])){const _0x2b1bcd=String(RegExp['$1'])[_0x778f2d(0x1d2)](/[\r\n]+/);for(const _0x14b09c of _0x2b1bcd){if(_0x14b09c[_0x778f2d(0x19a)](/(?:SKILL POINTS|SP):[ ](\d+)/gi))return Number(RegExp['$1']);}}const _0x11028e=VisuMZ[_0x778f2d(0x2ad)][_0x778f2d(0x2c7)](_0x358da3,_0x778f2d(0x2cd));if(VisuMZ['SkillLearnSystem']['JS'][_0x11028e]){const _0x417018=SceneManager[_0x778f2d(0x267)][_0x778f2d(0x15f)]();return VisuMZ[_0x778f2d(0x2ad)]['JS'][_0x11028e][_0x778f2d(0x1ad)](this,_0x417018,_0x358da3);}return VisuMZ[_0x778f2d(0x2ad)][_0x778f2d(0x14a)][_0x778f2d(0xe1)]['DefaultCost']||0x0;},DataManager[_0x414e2e(0x2a8)]=function(_0x59f881){const _0x220a37=_0x414e2e;if(!_0x59f881)return[];if(!DataManager[_0x220a37(0x14d)](_0x59f881)&&!DataManager[_0x220a37(0xa1)](_0x59f881))return[];const _0x3b23df=VisuMZ[_0x220a37(0x2ad)][_0x220a37(0x1c6)],_0x2653df=_0x59f881['note'],_0x5b47b7=[],_0x409a75=_0x2653df[_0x220a37(0x19a)](_0x3b23df[_0x220a37(0xce)]);if(_0x409a75)for(const _0x164d6c of _0x409a75){if(!_0x164d6c)continue;_0x164d6c['match'](_0x3b23df[_0x220a37(0xce)]);const _0x50c074=String(RegExp['$1']),_0xefa30a={'id':0x0,'quantity':Number(RegExp['$2'])},_0x2e959c=/^\d+$/[_0x220a37(0xda)](_0x50c074);_0x2e959c?_0xefa30a['id']=Number(_0x50c074):_0xefa30a['id']=DataManager[_0x220a37(0x27a)](_0x50c074),_0xefa30a['id']>0x0&&_0x5b47b7[_0x220a37(0x2b4)](_0xefa30a);}if(_0x2653df[_0x220a37(0x19a)](_0x3b23df[_0x220a37(0x121)])){const _0x108bde=String(RegExp['$1'])[_0x220a37(0x1d2)](/[\r\n]+/);for(const _0x130c2f of _0x108bde){if(_0x130c2f[_0x220a37(0x19a)](/ITEM[ ](.*):[ ](\d+)/gi)){const _0x3e0491=String(RegExp['$1']),_0xca0730={'id':0x0,'quantity':Number(RegExp['$2'])},_0x23d041=/^\d+$/[_0x220a37(0xda)](_0x3e0491);_0x23d041?_0xca0730['id']=Number(_0x3e0491):_0xca0730['id']=DataManager[_0x220a37(0x27a)](_0x3e0491),_0xca0730['id']>0x0&&_0x5b47b7[_0x220a37(0x2b4)](_0xca0730);}}}return _0x5b47b7;},DataManager[_0x414e2e(0x202)]=function(_0x501ab0){const _0x31f5d6=_0x414e2e;if(!_0x501ab0)return[];if(!DataManager[_0x31f5d6(0x14d)](_0x501ab0)&&!DataManager[_0x31f5d6(0xa1)](_0x501ab0))return[];const _0x568d46=VisuMZ['SkillLearnSystem'][_0x31f5d6(0x1c6)],_0x4a489c=_0x501ab0[_0x31f5d6(0x158)],_0x1deeb2=[],_0x57b93d=_0x4a489c[_0x31f5d6(0x19a)](_0x568d46[_0x31f5d6(0x12c)]);if(_0x57b93d)for(const _0x4ac4ba of _0x57b93d){if(!_0x4ac4ba)continue;_0x4ac4ba[_0x31f5d6(0x19a)](_0x568d46['LearnWeaponCost']);const _0x213f1f=String(RegExp['$1']),_0x44267f={'id':0x0,'quantity':Number(RegExp['$2'])},_0x1f31af=/^\d+$/[_0x31f5d6(0xda)](_0x213f1f);_0x1f31af?_0x44267f['id']=Number(_0x213f1f):_0x44267f['id']=DataManager[_0x31f5d6(0xc7)](_0x213f1f),_0x44267f['id']>0x0&&_0x1deeb2[_0x31f5d6(0x2b4)](_0x44267f);}if(_0x4a489c[_0x31f5d6(0x19a)](_0x568d46[_0x31f5d6(0x121)])){const _0x284579=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x170f5e of _0x284579){if(_0x170f5e[_0x31f5d6(0x19a)](/WEAPON[ ](.*):[ ](\d+)/gi)){const _0x56a627=String(RegExp['$1']),_0x193bcf={'id':0x0,'quantity':Number(RegExp['$2'])},_0x23e4b7=/^\d+$/[_0x31f5d6(0xda)](_0x56a627);_0x23e4b7?_0x193bcf['id']=Number(_0x56a627):_0x193bcf['id']=DataManager['getWeaponIdWithName'](_0x56a627),_0x193bcf['id']>0x0&&_0x1deeb2[_0x31f5d6(0x2b4)](_0x193bcf);}}}return _0x1deeb2;},DataManager[_0x414e2e(0x288)]=function(_0xb3f394){const _0x5f1ce6=_0x414e2e;if(!_0xb3f394)return[];if(!DataManager[_0x5f1ce6(0x14d)](_0xb3f394)&&!DataManager[_0x5f1ce6(0xa1)](_0xb3f394))return[];const _0x19716f=VisuMZ['SkillLearnSystem'][_0x5f1ce6(0x1c6)],_0x546016=_0xb3f394['note'],_0x45b87c=[],_0x47105d=_0x546016[_0x5f1ce6(0x19a)](_0x19716f['LearnArmorCost']);if(_0x47105d)for(const _0x573571 of _0x47105d){if(!_0x573571)continue;_0x573571[_0x5f1ce6(0x19a)](_0x19716f[_0x5f1ce6(0x181)]);const _0x1a2b88=String(RegExp['$1']),_0x490e7d={'id':0x0,'quantity':Number(RegExp['$2'])},_0xb4684=/^\d+$/[_0x5f1ce6(0xda)](_0x1a2b88);_0xb4684?_0x490e7d['id']=Number(_0x1a2b88):_0x490e7d['id']=DataManager[_0x5f1ce6(0xc2)](_0x1a2b88),_0x490e7d['id']>0x0&&_0x45b87c[_0x5f1ce6(0x2b4)](_0x490e7d);}if(_0x546016['match'](_0x19716f[_0x5f1ce6(0x121)])){const _0x206924=String(RegExp['$1'])[_0x5f1ce6(0x1d2)](/[\r\n]+/);for(const _0x1e431d of _0x206924){if(_0x1e431d['match'](/ARMOR[ ](.*):[ ](\d+)/gi)){const _0x390637=String(RegExp['$1']),_0xa9bf7b={'id':0x0,'quantity':Number(RegExp['$2'])},_0x3d09a5=/^\d+$/[_0x5f1ce6(0xda)](_0x390637);_0x3d09a5?_0xa9bf7b['id']=Number(_0x390637):_0xa9bf7b['id']=DataManager['getArmorIdWithName'](_0x390637),_0xa9bf7b['id']>0x0&&_0x45b87c['push'](_0xa9bf7b);}}}return _0x45b87c;},DataManager[_0x414e2e(0xb2)]=function(_0x48bcd3){const _0x5b11d7=_0x414e2e;if(!_0x48bcd3)return 0x0;if(!DataManager['isSkill'](_0x48bcd3)&&!DataManager[_0x5b11d7(0xa1)](_0x48bcd3))return 0x0;const _0x5d75de=VisuMZ['SkillLearnSystem'][_0x5b11d7(0x1c6)],_0x1ac1ff=_0x48bcd3[_0x5b11d7(0x158)];if(_0x1ac1ff[_0x5b11d7(0x19a)](_0x5d75de[_0x5b11d7(0x1be)]))return Number(RegExp['$1']);if(_0x1ac1ff['match'](_0x5d75de[_0x5b11d7(0x121)])){const _0x4d6f7d=String(RegExp['$1'])[_0x5b11d7(0x1d2)](/[\r\n]+/);for(const _0x582dac of _0x4d6f7d){if(_0x582dac[_0x5b11d7(0x19a)](/GOLD:[ ](\d+)/gi))return Number(RegExp['$1']);}}return 0x0;},TextManager[_0x414e2e(0xad)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0x284)][_0x414e2e(0x240)],ImageManager[_0x414e2e(0xed)]=VisuMZ[_0x414e2e(0x2ad)]['Settings'][_0x414e2e(0x124)][_0x414e2e(0x240)],ImageManager[_0x414e2e(0x20c)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0xe1)][_0x414e2e(0x240)],SoundManager[_0x414e2e(0xba)]=function(){const _0x3b14aa=_0x414e2e;AudioManager[_0x3b14aa(0x236)](VisuMZ['SkillLearnSystem'][_0x3b14aa(0x14a)][_0x3b14aa(0x2ae)]);},TextManager[_0x414e2e(0x275)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0x171)]['Learned'],TextManager[_0x414e2e(0x1c9)]=VisuMZ[_0x414e2e(0x2ad)]['Settings'][_0x414e2e(0x171)][_0x414e2e(0x167)],TextManager[_0x414e2e(0x28f)]=VisuMZ[_0x414e2e(0x2ad)]['Settings'][_0x414e2e(0x171)][_0x414e2e(0x276)],TextManager[_0x414e2e(0x231)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0x171)][_0x414e2e(0x116)],TextManager['skillLearnReqSkillFmt']=VisuMZ[_0x414e2e(0x2ad)]['Settings'][_0x414e2e(0x171)]['ReqSkillFmt'],TextManager[_0x414e2e(0x9e)]=VisuMZ[_0x414e2e(0x2ad)]['Settings'][_0x414e2e(0x171)][_0x414e2e(0xc3)],TextManager[_0x414e2e(0x271)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0x171)][_0x414e2e(0x21d)],TextManager[_0x414e2e(0xe6)]=VisuMZ[_0x414e2e(0x2ad)]['Settings'][_0x414e2e(0x171)]['ItemFmt'],TextManager[_0x414e2e(0x1f8)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0x171)][_0x414e2e(0x142)],TextManager[_0x414e2e(0x256)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0x171)][_0x414e2e(0xaa)],TextManager[_0x414e2e(0xf8)]=VisuMZ['SkillLearnSystem'][_0x414e2e(0x14a)]['General']['GoldFmt'],TextManager[_0x414e2e(0x1e3)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)]['MenuAccess']['Name'],TextManager[_0x414e2e(0x233)]=VisuMZ['SkillLearnSystem'][_0x414e2e(0x14a)][_0x414e2e(0x1ca)][_0x414e2e(0xb5)],TextManager[_0x414e2e(0x294)]=VisuMZ['SkillLearnSystem'][_0x414e2e(0x14a)][_0x414e2e(0x1ca)][_0x414e2e(0x16c)],TextManager[_0x414e2e(0xcd)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0x1ca)][_0x414e2e(0x21f)],TextManager['skillLearnReqListLevel']=VisuMZ['SkillLearnSystem'][_0x414e2e(0x14a)]['Window'][_0x414e2e(0x116)],TextManager[_0x414e2e(0xe9)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)]['Window'][_0x414e2e(0x22e)],TextManager['skillLearnReqListSwitch']=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0x1ca)][_0x414e2e(0xc3)],TextManager[_0x414e2e(0x101)]=VisuMZ[_0x414e2e(0x2ad)]['Settings'][_0x414e2e(0x1ca)][_0x414e2e(0x17f)],TextManager[_0x414e2e(0xe3)]=VisuMZ['SkillLearnSystem'][_0x414e2e(0x14a)]['Window'][_0x414e2e(0x23a)],TextManager[_0x414e2e(0x188)]=VisuMZ['SkillLearnSystem'][_0x414e2e(0x14a)][_0x414e2e(0x1ca)][_0x414e2e(0x262)],TextManager['skillLearningOwned']=VisuMZ['SkillLearnSystem'][_0x414e2e(0x14a)]['Window'][_0x414e2e(0x19d)],TextManager[_0x414e2e(0x247)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)]['Window'][_0x414e2e(0x21a)],TextManager[_0x414e2e(0x299)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)]['Window'][_0x414e2e(0x195)],TextManager[_0x414e2e(0x106)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0x124)][_0x414e2e(0x2b8)],TextManager['abilityPointsAbbr']=VisuMZ['SkillLearnSystem'][_0x414e2e(0x14a)][_0x414e2e(0x124)][_0x414e2e(0x123)],TextManager[_0x414e2e(0x2a7)]=VisuMZ[_0x414e2e(0x2ad)]['Settings'][_0x414e2e(0x124)][_0x414e2e(0x13b)],TextManager[_0x414e2e(0x2a3)]=VisuMZ['SkillLearnSystem'][_0x414e2e(0x14a)]['SkillPoints'][_0x414e2e(0x2b8)],TextManager[_0x414e2e(0x149)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0xe1)][_0x414e2e(0x123)],TextManager[_0x414e2e(0x1aa)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0xe1)]['TextFmt'],TextManager[_0x414e2e(0x1cc)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0xe1)][_0x414e2e(0xc9)]??'%1',TextManager[_0x414e2e(0x2a5)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)][_0x414e2e(0xe1)]['SeparateCollapseFmt']??_0x414e2e(0x257),TextManager[_0x414e2e(0xec)]=VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x14a)]['SkillPoints'][_0x414e2e(0x2a2)]??_0x414e2e(0x11c),TextManager[_0x414e2e(0x244)]=VisuMZ['SkillLearnSystem'][_0x414e2e(0x14a)][_0x414e2e(0xe1)][_0x414e2e(0x26b)]??'16',VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x1a6)]=BattleManager[_0x414e2e(0x205)],BattleManager['makeRewards']=function(){const _0x45da5c=_0x414e2e;VisuMZ[_0x45da5c(0x2ad)][_0x45da5c(0x1a6)]['call'](this),this['makeRewardsAbilityPoints'](),this[_0x45da5c(0x131)](),this[_0x45da5c(0x252)](),this[_0x45da5c(0x126)]();},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x208)]=BattleManager[_0x414e2e(0x28a)],BattleManager['displayRewards']=function(){const _0x5a9001=_0x414e2e;VisuMZ[_0x5a9001(0x2ad)][_0x5a9001(0x208)][_0x5a9001(0x1ad)](this),this[_0x5a9001(0x1c0)](),this[_0x5a9001(0x191)]();},BattleManager[_0x414e2e(0xe5)]=function(){const _0x4d3dc6=_0x414e2e;this[_0x4d3dc6(0x1ee)][_0x4d3dc6(0x168)]=$gameTroop['abilityPointsTotal']();},BattleManager[_0x414e2e(0x1c0)]=function(){const _0x213899=_0x414e2e;if(!this[_0x213899(0x1ae)]())return;$gameMessage[_0x213899(0xa9)]();const _0x2927a3=$gameParty[_0x213899(0x151)](),_0x1d1e04=VisuMZ[_0x213899(0x2ad)][_0x213899(0x14a)]['AbilityPoints'],_0x1dc4cb=_0x1d1e04[_0x213899(0x18f)];for(const _0x1ffc68 of _0x2927a3){if(!_0x1ffc68)continue;const _0x16af02=_0x1dc4cb[_0x213899(0x25f)](_0x1ffc68['name'](),_0x1ffc68['earnedAbilityPoints'](),TextManager['abilityPointsAbbr'],TextManager['abilityPointsFmt']);$gameMessage['add']('\x5c.'+_0x16af02);}},BattleManager[_0x414e2e(0x131)]=function(){const _0x34194b=_0x414e2e;this[_0x34194b(0x1ee)]['abilityPoints']=this[_0x34194b(0x1ee)][_0x34194b(0x168)]||0x0;let _0x1e0a15=$gameParty[_0x34194b(0x1c8)]();VisuMZ[_0x34194b(0x2ad)][_0x34194b(0x14a)][_0x34194b(0x124)][_0x34194b(0x1f9)]&&(_0x1e0a15=_0x1e0a15[_0x34194b(0x1cf)](_0x58c3fb=>_0x58c3fb[_0x34194b(0x227)]()));for(const _0x50f441 of _0x1e0a15){if(!_0x50f441)continue;if(!$dataSystem[_0x34194b(0xa5)]&&!_0x50f441['isBattleMember']())continue;_0x50f441[_0x34194b(0xd6)](this[_0x34194b(0x1ee)]['abilityPoints']),_0x50f441[_0x34194b(0x22c)](this[_0x34194b(0x1ee)][_0x34194b(0x168)]);}},BattleManager[_0x414e2e(0x1ae)]=function(){const _0x53ef17=_0x414e2e;return VisuMZ['SkillLearnSystem'][_0x53ef17(0x14a)][_0x53ef17(0x124)]['ShowVictory'];},BattleManager[_0x414e2e(0x252)]=function(){const _0x336347=_0x414e2e;this[_0x336347(0x1ee)]['skillPoints']=$gameTroop[_0x336347(0x1f7)]();},BattleManager['displayRewardsSkillPoints']=function(){const _0x584a24=_0x414e2e;if(!this['skillPointsVisible']())return;$gameMessage[_0x584a24(0xa9)]();const _0x38e822=$gameParty['members'](),_0xd05272=VisuMZ[_0x584a24(0x2ad)]['Settings'][_0x584a24(0xe1)],_0x5c5bc6=_0xd05272[_0x584a24(0x18f)];for(const _0x5003ce of _0x38e822){if(!_0x5003ce)continue;const _0xcf0df0=_0x5c5bc6[_0x584a24(0x25f)](_0x5003ce['name'](),_0x5003ce[_0x584a24(0x2c1)](),TextManager[_0x584a24(0x149)],TextManager[_0x584a24(0x1aa)]);$gameMessage[_0x584a24(0xfc)]('\x5c.'+_0xcf0df0);}},BattleManager['gainRewardsSkillPoints']=function(){const _0x4e6339=_0x414e2e;this[_0x4e6339(0x1ee)][_0x4e6339(0x27e)]=this[_0x4e6339(0x1ee)][_0x4e6339(0x27e)]||0x0;let _0x25b80a=$gameParty[_0x4e6339(0x1c8)]();VisuMZ[_0x4e6339(0x2ad)]['Settings']['SkillPoints']['AliveActors']&&(_0x25b80a=_0x25b80a['filter'](_0x2a8d60=>_0x2a8d60[_0x4e6339(0x227)]()));for(const _0x2ae7fa of _0x25b80a){if(!_0x2ae7fa)continue;if(!$dataSystem[_0x4e6339(0xa5)]&&!_0x2ae7fa[_0x4e6339(0x1fb)]())continue;_0x2ae7fa[_0x4e6339(0x20f)](this['_rewards'][_0x4e6339(0x27e)]),_0x2ae7fa[_0x4e6339(0x273)](this[_0x4e6339(0x1ee)]['skillPoints']);}},BattleManager[_0x414e2e(0x160)]=function(){const _0x29b818=_0x414e2e;return VisuMZ[_0x29b818(0x2ad)]['Settings'][_0x29b818(0xe1)][_0x29b818(0xf2)];},VisuMZ['SkillLearnSystem'][_0x414e2e(0x192)]=Game_System[_0x414e2e(0x219)][_0x414e2e(0x125)],Game_System[_0x414e2e(0x219)][_0x414e2e(0x125)]=function(){const _0x8b01b3=_0x414e2e;VisuMZ[_0x8b01b3(0x2ad)][_0x8b01b3(0x192)][_0x8b01b3(0x1ad)](this),this[_0x8b01b3(0x248)]();},Game_System[_0x414e2e(0x219)]['initSkillLearnSystemMenuAccess']=function(){const _0x3e7445=_0x414e2e;this[_0x3e7445(0x105)]=VisuMZ[_0x3e7445(0x2ad)][_0x3e7445(0x14a)]['MenuAccess']['ShowMenu'];},Game_System[_0x414e2e(0x219)][_0x414e2e(0x135)]=function(){const _0x4e5ca4=_0x414e2e;return this['_SkillLearnSystem_MenuAccess']===undefined&&this[_0x4e5ca4(0x248)](),this[_0x4e5ca4(0x105)];},Game_System[_0x414e2e(0x219)]['setSkillLearnSystemMenuAccess']=function(_0x5efd1b){const _0x15de45=_0x414e2e;this['_SkillLearnSystem_MenuAccess']===undefined&&this[_0x15de45(0x248)](),this['_SkillLearnSystem_MenuAccess']=_0x5efd1b;},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x1fd)]=Game_Action[_0x414e2e(0x219)][_0x414e2e(0x1df)],Game_Action[_0x414e2e(0x219)]['applyItemUserEffect']=function(_0x290157){const _0x5a2a93=_0x414e2e;VisuMZ[_0x5a2a93(0x2ad)][_0x5a2a93(0x1fd)][_0x5a2a93(0x1ad)](this,_0x290157),this[_0x5a2a93(0xab)](_0x290157);},Game_Action['prototype'][_0x414e2e(0xab)]=function(_0x16bc2b){const _0xfad167=_0x414e2e;if(this[_0xfad167(0x12d)]())this[_0xfad167(0x2cc)](_0x16bc2b);},Game_Action['prototype'][_0x414e2e(0x2cc)]=function(_0x48166f){const _0x11021c=_0x414e2e,_0x7b2060=VisuMZ[_0x11021c(0x2ad)][_0x11021c(0x1c6)],_0x2cedbc=this[_0x11021c(0x12d)]()[_0x11021c(0x158)];if($gameParty[_0x11021c(0x1f4)]()){if(this[_0x11021c(0x1ce)]()['isActor']()&&_0x2cedbc[_0x11021c(0x19a)](_0x7b2060[_0x11021c(0x119)])){const _0x4c57d0=eval(RegExp['$1']);this[_0x11021c(0x1ce)]()['gainAbilityPoints'](_0x4c57d0);}else this['applyAbilityPoints']();if(_0x48166f[_0x11021c(0x10e)]()&&_0x2cedbc[_0x11021c(0x19a)](_0x7b2060[_0x11021c(0x1b5)])){const _0x5df49a=eval(RegExp['$1']);_0x48166f[_0x11021c(0xd6)](_0x5df49a);}}if($gameParty[_0x11021c(0x1f4)]()){if(this[_0x11021c(0x1ce)]()['isActor']()&&_0x2cedbc['match'](_0x7b2060[_0x11021c(0x1f6)])){const _0x4d3581=eval(RegExp['$1']);this['subject']()[_0x11021c(0x20f)](_0x4d3581);}else this['applySkillPoints']();if(_0x48166f[_0x11021c(0x10e)]()&&_0x2cedbc[_0x11021c(0x19a)](_0x7b2060[_0x11021c(0x200)])){const _0x3693da=eval(RegExp['$1']);_0x48166f[_0x11021c(0x20f)](_0x3693da);}}if(_0x2cedbc[_0x11021c(0x19a)](/<NOTETAG>/i)){}},Game_Action['prototype'][_0x414e2e(0x28e)]=function(){const _0x26e125=_0x414e2e;if(!$gameParty[_0x26e125(0x1f4)]())return;if(!this['subject']()['isActor']())return;const _0x356a7a=VisuMZ[_0x26e125(0x2ad)][_0x26e125(0x14a)]['AbilityPoints'];let _0x557daa=0x0;try{_0x557daa=eval(_0x356a7a[_0x26e125(0x196)]);}catch(_0x5ee8ab){if($gameTemp[_0x26e125(0x1c5)]())console[_0x26e125(0x2a6)](_0x5ee8ab);}this[_0x26e125(0x1ce)]()['gainAbilityPoints'](_0x557daa);},Game_Action[_0x414e2e(0x219)][_0x414e2e(0x11d)]=function(){const _0x14d136=_0x414e2e;if(!$gameParty[_0x14d136(0x1f4)]())return;if(!this['subject']()[_0x14d136(0x10e)]())return;const _0x147193=VisuMZ['SkillLearnSystem']['Settings'][_0x14d136(0xe1)];let _0x5eaeba=0x0;try{_0x5eaeba=eval(_0x147193['PerAction']);}catch(_0x1174fe){if($gameTemp[_0x14d136(0x1c5)]())console[_0x14d136(0x2a6)](_0x1174fe);}this[_0x14d136(0x1ce)]()['gainSkillPoints'](_0x5eaeba);},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x1ac)]=Game_Battler[_0x414e2e(0x219)][_0x414e2e(0x194)],Game_Battler[_0x414e2e(0x219)][_0x414e2e(0x194)]=function(_0x51aefb){const _0x5eab2f=_0x414e2e;VisuMZ[_0x5eab2f(0x2ad)][_0x5eab2f(0x1ac)][_0x5eab2f(0x1ad)](this,_0x51aefb),this['isActor']()&&(this[_0x5eab2f(0xb6)]=this[_0x5eab2f(0xa3)](),this[_0x5eab2f(0x226)]=this[_0x5eab2f(0x290)]());},VisuMZ[_0x414e2e(0x2ad)]['Game_Actor_setup']=Game_Actor[_0x414e2e(0x219)]['setup'],Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x11b)]=function(_0x47be10){const _0x48a320=_0x414e2e;VisuMZ['SkillLearnSystem'][_0x48a320(0x1ba)][_0x48a320(0x1ad)](this,_0x47be10),this[_0x48a320(0x282)](),this['gainStartingAbilityPoints'](),this[_0x48a320(0x2cb)](),this[_0x48a320(0x241)]();},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0xef)]=Game_Actor[_0x414e2e(0x219)][_0x414e2e(0xc6)],Game_Actor[_0x414e2e(0x219)][_0x414e2e(0xc6)]=function(_0x393faa,_0x444dfc){const _0x5a62f7=_0x414e2e;this[_0x5a62f7(0x17d)]=!![],VisuMZ[_0x5a62f7(0x2ad)][_0x5a62f7(0xef)]['call'](this,_0x393faa,_0x444dfc),this[_0x5a62f7(0x17d)]=undefined;},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x1c4)]=Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x14b)],Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x14b)]=function(){const _0x5b333e=_0x414e2e;VisuMZ[_0x5b333e(0x2ad)][_0x5b333e(0x1c4)][_0x5b333e(0x1ad)](this),this[_0x5b333e(0x162)](this[_0x5b333e(0xbd)]()['id']),this[_0x5b333e(0x24f)](this['currentClass']()['id']);},Game_Actor[_0x414e2e(0x219)]['initAbilityPoints']=function(){const _0x185cb2=_0x414e2e;this[_0x185cb2(0x13f)]={};},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0xa6)]=function(){const _0x5ee337=_0x414e2e,_0x126fd6=VisuMZ[_0x5ee337(0x2ad)][_0x5ee337(0x1c6)],_0x457067=this['actor']()[_0x5ee337(0x158)];if(_0x457067['match'](_0x126fd6[_0x5ee337(0x25c)])){const _0x29fa3b=eval(RegExp['$1']);this[_0x5ee337(0xd6)](_0x29fa3b);}const _0x3d855b=VisuMZ['SkillLearnSystem']['Settings'][_0x5ee337(0x124)];if(!_0x3d855b['SharedResource'])return;const _0x208306=_0x457067[_0x5ee337(0x19a)](_0x126fd6['StartClassAbilityPoints']);if(_0x208306)for(const _0x5495e5 of _0x208306){if(!_0x5495e5)continue;_0x5495e5['match'](_0x126fd6[_0x5ee337(0x285)]);const _0x390d93=String(RegExp['$1']),_0x4d5135=eval(RegExp['$2']),_0x52f418=/^\d+$/[_0x5ee337(0xda)](_0x390d93);let _0x26e7b8=0x0;_0x52f418?_0x26e7b8=Number(_0x390d93):_0x26e7b8=DataManager[_0x5ee337(0x1ed)](_0x390d93),this[_0x5ee337(0xd6)](_0x4d5135,_0x26e7b8);}},Game_Actor['prototype'][_0x414e2e(0xa3)]=function(_0x26ad70){const _0x3b1d29=_0x414e2e;this[_0x3b1d29(0x13f)]===undefined&&this[_0x3b1d29(0x282)]();const _0x5267dd=VisuMZ[_0x3b1d29(0x2ad)][_0x3b1d29(0x14a)][_0x3b1d29(0x124)];return _0x5267dd[_0x3b1d29(0x29b)]?_0x26ad70=0x0:_0x26ad70=_0x26ad70||this[_0x3b1d29(0xbd)]()['id'],this[_0x3b1d29(0x13f)][_0x26ad70]=this[_0x3b1d29(0x13f)][_0x26ad70]||0x0,Math[_0x3b1d29(0xf1)](this['_abilityPoints'][_0x26ad70]);},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x22d)]=function(_0xcb5f1,_0x180123){const _0x2121ba=_0x414e2e;this['_abilityPoints']===undefined&&this[_0x2121ba(0x282)]();const _0xb81b3a=VisuMZ[_0x2121ba(0x2ad)][_0x2121ba(0x14a)][_0x2121ba(0x124)];_0xb81b3a['SharedResource']?_0x180123=0x0:_0x180123=_0x180123||this['currentClass']()['id'];this['_abilityPoints'][_0x180123]=this[_0x2121ba(0x13f)][_0x180123]||0x0,this['_abilityPoints'][_0x180123]=Math[_0x2121ba(0xf1)](_0xcb5f1||0x0);const _0x1c16cb=_0xb81b3a[_0x2121ba(0x1e2)]||Number['MAX_SAFE_INTEGER'];this['_abilityPoints'][_0x180123]=this[_0x2121ba(0x13f)][_0x180123][_0x2121ba(0x24e)](0x0,_0x1c16cb);},Game_Actor[_0x414e2e(0x219)]['gainAbilityPoints']=function(_0x4e9e92,_0x5a1231){const _0x1144ce=_0x414e2e;_0x4e9e92>0x0&&(_0x4e9e92*=this[_0x1144ce(0x128)]()),this[_0x1144ce(0x13c)](_0x4e9e92,_0x5a1231);},Game_Actor[_0x414e2e(0x219)]['gainAbilityPointsForMulticlasses']=function(_0x5bcc89){const _0x419fb2=_0x414e2e;if(!Imported[_0x419fb2(0x255)])return;_0x5bcc89>0x0&&(_0x5bcc89*=this[_0x419fb2(0x128)]()),this[_0x419fb2(0xf9)](_0x5bcc89,_0x419fb2(0x2c8));},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x13c)]=function(_0x43c95b,_0x179642){const _0x38d50f=_0x414e2e,_0x9af1a5=VisuMZ[_0x38d50f(0x2ad)]['Settings']['AbilityPoints'];_0x9af1a5[_0x38d50f(0x29b)]?_0x179642=0x0:_0x179642=_0x179642||this[_0x38d50f(0xbd)]()['id'],_0x43c95b+=this['getAbilityPoints'](_0x179642),this[_0x38d50f(0x22d)](_0x43c95b,_0x179642);},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x183)]=function(_0x4100f9,_0x312a8a){const _0x32191f=_0x414e2e;this[_0x32191f(0x13c)](-_0x4100f9,_0x312a8a);},Game_Actor['prototype'][_0x414e2e(0x128)]=function(){const _0x511082=_0x414e2e;return this[_0x511082(0x1e9)]()[_0x511082(0x280)]((_0x3ec137,_0x39f741)=>{const _0x56495d=_0x511082;return _0x39f741&&_0x39f741[_0x56495d(0x158)]['match'](VisuMZ[_0x56495d(0x2ad)][_0x56495d(0x1c6)][_0x56495d(0x19f)])?_0x3ec137*(Number(RegExp['$1'])*0.01):_0x3ec137;},0x1);},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x162)]=function(_0x4b523f){const _0x3f62ae=_0x414e2e;if(this[_0x3f62ae(0x17d)])return;const _0x180c9a=VisuMZ['SkillLearnSystem']['Settings'][_0x3f62ae(0x124)];let _0x379b27=0x0;try{_0x379b27=eval(_0x180c9a[_0x3f62ae(0x2bf)]);}catch(_0x3d11fb){if($gameTemp[_0x3f62ae(0x1c5)]())console[_0x3f62ae(0x2a6)](_0x3d11fb);}this['gainAbilityPoints'](_0x379b27,_0x4b523f);},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x243)]=function(){const _0x4e7e88=_0x414e2e;return this['_earnedAbilityPoints']=this[_0x4e7e88(0xb6)]||0x0,this['getAbilityPoints']()-this['_earnedAbilityPoints'];},Game_Actor[_0x414e2e(0x219)]['initSkillPoints']=function(){const _0x162a5c=_0x414e2e;this[_0x162a5c(0x110)]={};},Game_Actor[_0x414e2e(0x219)]['gainStartingSkillPoints']=function(){const _0x1f685c=_0x414e2e,_0xe90bdb=VisuMZ['SkillLearnSystem'][_0x1f685c(0x1c6)],_0x19fb69=this[_0x1f685c(0x278)]()['note'];if(_0x19fb69[_0x1f685c(0x19a)](_0xe90bdb[_0x1f685c(0x16b)])){const _0x5dad12=eval(RegExp['$1']);this[_0x1f685c(0x20f)](_0x5dad12);}const _0x47ed57=VisuMZ[_0x1f685c(0x2ad)][_0x1f685c(0x14a)][_0x1f685c(0xe1)];if(!_0x47ed57[_0x1f685c(0x29b)])return;const _0x5caff4=_0x19fb69[_0x1f685c(0x19a)](_0xe90bdb[_0x1f685c(0x170)]);if(_0x5caff4)for(const _0x5cb29b of _0x5caff4){if(!_0x5cb29b)continue;_0x5cb29b[_0x1f685c(0x19a)](_0xe90bdb[_0x1f685c(0x170)]);const _0x42fb63=String(RegExp['$1']),_0x18f5b5=eval(RegExp['$2']),_0x57288a=/^\d+$/['test'](_0x42fb63);let _0x5eb9a1=0x0;_0x57288a?_0x5eb9a1=Number(_0x42fb63):_0x5eb9a1=DataManager[_0x1f685c(0x1ed)](_0x42fb63),this[_0x1f685c(0x20f)](_0x18f5b5,_0x5eb9a1);}},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x290)]=function(_0x3fe786){const _0xe96393=_0x414e2e;this[_0xe96393(0x110)]===undefined&&this[_0xe96393(0x2cb)]();const _0xe8122f=VisuMZ[_0xe96393(0x2ad)][_0xe96393(0x14a)][_0xe96393(0xe1)];return _0xe8122f[_0xe96393(0x29b)]?_0x3fe786=0x0:_0x3fe786=_0x3fe786||this[_0xe96393(0xbd)]()['id'],this[_0xe96393(0x110)][_0x3fe786]=this[_0xe96393(0x110)][_0x3fe786]||0x0,Math['round'](this['_skillPoints'][_0x3fe786]);},Game_Actor['prototype'][_0x414e2e(0x2c0)]=function(_0x183298,_0x90967){const _0x122daa=_0x414e2e;this[_0x122daa(0x110)]===undefined&&this['initSkillPoints']();const _0x2f73f3=VisuMZ[_0x122daa(0x2ad)]['Settings'][_0x122daa(0xe1)];_0x2f73f3[_0x122daa(0x29b)]?_0x90967=0x0:_0x90967=_0x90967||this['currentClass']()['id'];this[_0x122daa(0x110)][_0x90967]=this[_0x122daa(0x110)][_0x90967]||0x0,this[_0x122daa(0x110)][_0x90967]=Math[_0x122daa(0xf1)](_0x183298||0x0);const _0x4cc9f6=_0x2f73f3[_0x122daa(0x1e2)]||Number['MAX_SAFE_INTEGER'];this[_0x122daa(0x110)][_0x90967]=this[_0x122daa(0x110)][_0x90967]['clamp'](0x0,_0x4cc9f6);},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x20f)]=function(_0x30eb9e,_0x10078f){const _0x146cf2=_0x414e2e;_0x30eb9e>0x0&&(_0x30eb9e*=this[_0x146cf2(0x263)]()),this[_0x146cf2(0x261)](_0x30eb9e,_0x10078f);},Game_Actor['prototype'][_0x414e2e(0x273)]=function(_0x80bf94){const _0x4f94d5=_0x414e2e;if(!Imported['VisuMZ_2_ClassChangeSystem'])return;_0x80bf94>0x0&&(_0x80bf94*=this[_0x4f94d5(0x263)]()),this[_0x4f94d5(0xf9)](_0x80bf94,_0x4f94d5(0x26c));},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x261)]=function(_0x5b55a0,_0x3106ca){const _0x49fdac=_0x414e2e,_0x199597=VisuMZ['SkillLearnSystem'][_0x49fdac(0x14a)][_0x49fdac(0xe1)];_0x199597[_0x49fdac(0x29b)]?_0x3106ca=0x0:_0x3106ca=_0x3106ca||this[_0x49fdac(0xbd)]()['id'],_0x5b55a0+=this[_0x49fdac(0x290)](_0x3106ca),this['setSkillPoints'](_0x5b55a0,_0x3106ca);},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x15d)]=function(_0xb41290,_0x2a18c6){const _0x256589=_0x414e2e;this[_0x256589(0x261)](-_0xb41290,_0x2a18c6);},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x263)]=function(){const _0x4c967c=_0x414e2e;return this[_0x4c967c(0x1e9)]()[_0x4c967c(0x280)]((_0x40be59,_0x374506)=>{const _0x2304c6=_0x4c967c;return _0x374506&&_0x374506[_0x2304c6(0x158)]['match'](VisuMZ['SkillLearnSystem'][_0x2304c6(0x1c6)][_0x2304c6(0xa2)])?_0x40be59*(Number(RegExp['$1'])*0.01):_0x40be59;},0x1);},Game_Actor[_0x414e2e(0x219)]['levelUpGainSkillPoints']=function(_0x1b0439){const _0x4385fd=_0x414e2e;if(this[_0x4385fd(0x17d)])return;const _0x15b118=VisuMZ[_0x4385fd(0x2ad)]['Settings']['SkillPoints'];let _0x510a51=0x0;try{_0x510a51=eval(_0x15b118[_0x4385fd(0x2bf)]);}catch(_0xcd30b5){if($gameTemp[_0x4385fd(0x1c5)]())console['log'](_0xcd30b5);}this[_0x4385fd(0x20f)](_0x510a51,_0x1b0439);},Game_Actor['prototype'][_0x414e2e(0x2c1)]=function(){const _0x1b007b=_0x414e2e;return this[_0x1b007b(0x226)]=this['_earnedSkillPoints']||0x0,this[_0x1b007b(0x290)]()-this['_earnedSkillPoints'];},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0xcc)]=function(_0x2888cc){const _0xa97c35=_0x414e2e;if(!_0x2888cc)return![];const _0x1910a6=VisuMZ[_0xa97c35(0x2ad)]['createKeyJS'](_0x2888cc,_0xa97c35(0x17b));if(VisuMZ['SkillLearnSystem']['JS'][_0x1910a6]){if(!VisuMZ['SkillLearnSystem']['JS'][_0x1910a6][_0xa97c35(0x1ad)](this,this,_0x2888cc))return![];}const _0x31c290=VisuMZ[_0xa97c35(0x2ad)][_0xa97c35(0x1c6)],_0x50fe1a=_0x2888cc[_0xa97c35(0x158)];if(_0x50fe1a['match'](_0x31c290['LearnReqLevel'])){const _0x4e6128=Number(RegExp['$1']);if(_0x4e6128>this[_0xa97c35(0x165)])return![];}if(_0x50fe1a[_0xa97c35(0x19a)](_0x31c290[_0xa97c35(0x207)])){const _0x5887fc=String(RegExp['$1'])[_0xa97c35(0x1d2)](',')[_0xa97c35(0x184)](_0xec50f6=>_0xec50f6[_0xa97c35(0xcb)]());for(const _0x205bea of _0x5887fc){let _0x299a94=0x0;const _0x4e2efd=/^\d+$/[_0xa97c35(0xda)](_0x205bea);_0x4e2efd?_0x299a94=Number(_0x205bea):_0x299a94=DataManager[_0xa97c35(0xf4)](_0x205bea);if(!this[_0xa97c35(0xd0)](_0x299a94))return![];}}if(_0x50fe1a['match'](_0x31c290[_0xa97c35(0x1e4)])){const _0x20a17b=String(RegExp['$1'])[_0xa97c35(0x1d2)](',')['map'](_0x249e14=>_0x249e14['trim']());let _0x4dd12c=![];for(const _0xcb0eb6 of _0x20a17b){let _0x1abf19=0x0;const _0x213c64=/^\d+$/[_0xa97c35(0xda)](_0xcb0eb6);_0x213c64?_0x1abf19=Number(_0xcb0eb6):_0x1abf19=DataManager['getSkillIdWithName'](_0xcb0eb6);if(this[_0xa97c35(0xd0)](_0x1abf19)){_0x4dd12c=!![];break;}}if(!_0x4dd12c)return![];}if(_0x50fe1a[_0xa97c35(0x19a)](_0x31c290[_0xa97c35(0x11a)])){const _0x32f065=String(RegExp['$1'])[_0xa97c35(0x1d2)](',')[_0xa97c35(0x184)](_0x65ffdc=>Number(_0x65ffdc));for(const _0x3380ae of _0x32f065){if(!$gameSwitches[_0xa97c35(0x2bd)](_0x3380ae))return![];}}if(_0x50fe1a[_0xa97c35(0x19a)](_0x31c290['LearnReqSwitchesAny'])){const _0x177c2e=String(RegExp['$1'])[_0xa97c35(0x1d2)](',')[_0xa97c35(0x184)](_0x153711=>Number(_0x153711));let _0x505dfa=![];for(const _0x3816c of _0x177c2e){if($gameSwitches[_0xa97c35(0x2bd)](_0x3816c)){_0x505dfa=!![];break;}}if(!_0x505dfa)return![];}return!![];},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0xee)]=function(_0x2fbdd4){const _0x543005=_0x414e2e;if(!_0x2fbdd4)return![];const _0x20446a=DataManager[_0x543005(0xbf)](_0x2fbdd4);if(_0x20446a>this[_0x543005(0xa3)]())return![];const _0x412749=DataManager[_0x543005(0x11e)](_0x2fbdd4);if(_0x412749>this[_0x543005(0x290)]())return![];const _0x51c320=DataManager['getSkillLearnGoldCost'](_0x2fbdd4);if(_0x51c320>$gameParty[_0x543005(0x274)]())return![];if(Imported['VisuMZ_2_ClassChangeSystem']){const _0x38e4f5=DataManager['getSkillLearnClassPointCost'](_0x2fbdd4);if(_0x38e4f5>this[_0x543005(0x1a0)]())return![];const _0x5272a5=DataManager[_0x543005(0x198)](_0x2fbdd4);if(_0x5272a5>this[_0x543005(0x220)]())return![];}const _0x3dfdf3=DataManager['getSkillLearnItemCost'](_0x2fbdd4);for(const _0x483345 of _0x3dfdf3){if(!_0x483345)continue;const _0x3784a2=$dataItems[_0x483345['id']];if(_0x3784a2&&_0x483345['quantity']>$gameParty[_0x543005(0x293)](_0x3784a2))return![];}const _0x2e2472=DataManager[_0x543005(0x202)](_0x2fbdd4);for(const _0x3d8b88 of _0x2e2472){if(!_0x3d8b88)continue;const _0x3d8d0e=$dataWeapons[_0x3d8b88['id']];if(_0x3d8d0e&&_0x3d8b88[_0x543005(0xb0)]>$gameParty[_0x543005(0x293)](_0x3d8d0e))return![];}const _0x5c69ea=DataManager[_0x543005(0x288)](_0x2fbdd4);for(const _0x5e54b5 of _0x5c69ea){if(!_0x5e54b5)continue;const _0x5b05f0=$dataArmors[_0x5e54b5['id']];if(_0x5b05f0&&_0x5e54b5[_0x543005(0xb0)]>$gameParty[_0x543005(0x293)](_0x5b05f0))return![];}return!![];},Game_Actor[_0x414e2e(0x219)][_0x414e2e(0x1d0)]=function(_0x4f85da){const _0x8c135b=_0x414e2e;if(!_0x4f85da)return;const _0x139f12=DataManager[_0x8c135b(0xbf)](_0x4f85da);this[_0x8c135b(0x183)](_0x139f12);const _0x5e35d4=DataManager[_0x8c135b(0x11e)](_0x4f85da);this['loseSkillPoints'](_0x5e35d4);const _0x2863d0=DataManager[_0x8c135b(0xb2)](_0x4f85da);$gameParty[_0x8c135b(0x21e)](_0x2863d0);if(Imported[_0x8c135b(0x255)]){const _0x35339e=DataManager[_0x8c135b(0x22b)](_0x4f85da);this[_0x8c135b(0x10f)](_0x35339e);const _0x497430=DataManager['getSkillLearnJobPointCost'](_0x4f85da);this[_0x8c135b(0xf0)](_0x497430);}const _0xee1781=DataManager[_0x8c135b(0x2a8)](_0x4f85da);for(const _0x517850 of _0xee1781){if(!_0x517850)continue;const _0xaee22a=$dataItems[_0x517850['id']],_0x2e3549=_0x517850['quantity'];$gameParty[_0x8c135b(0x215)](_0xaee22a,_0x2e3549);}const _0x4ea788=DataManager[_0x8c135b(0x202)](_0x4f85da);for(const _0x2cbdb5 of _0x4ea788){if(!_0x2cbdb5)continue;const _0x38506c=$dataWeapons[_0x2cbdb5['id']],_0x46dc20=_0x2cbdb5[_0x8c135b(0xb0)];$gameParty[_0x8c135b(0x215)](_0x38506c,_0x46dc20);}const _0x957907=DataManager['getSkillLearnArmorCost'](_0x4f85da);for(const _0x29f8c0 of _0x957907){if(!_0x29f8c0)continue;const _0x521a8b=$dataArmors[_0x29f8c0['id']],_0x3fd014=_0x29f8c0[_0x8c135b(0xb0)];$gameParty['loseItem'](_0x521a8b,_0x3fd014);}if(DataManager[_0x8c135b(0x14d)](_0x4f85da))this[_0x8c135b(0x127)](_0x4f85da['id']);else DataManager[_0x8c135b(0xa1)](_0x4f85da)&&Imported[_0x8c135b(0xca)]&&this[_0x8c135b(0x176)](_0x4f85da,!![]);this[_0x8c135b(0xc0)]();},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x17e)]=Game_Actor['prototype'][_0x414e2e(0x127)],Game_Actor['prototype'][_0x414e2e(0x127)]=function(_0x10d585){const _0x3d6362=_0x414e2e,_0x1977b4=!this[_0x3d6362(0xd0)](_0x10d585);VisuMZ[_0x3d6362(0x2ad)][_0x3d6362(0x17e)]['call'](this,_0x10d585);if(_0x1977b4&&this['isLearnedSkill'](_0x10d585)){const _0x46ecb6=$dataSkills[_0x10d585],_0x11caf5=VisuMZ[_0x3d6362(0x2ad)]['createKeyJS'](_0x46ecb6,'jsOnLearn');VisuMZ[_0x3d6362(0x2ad)]['JS'][_0x11caf5]&&VisuMZ['SkillLearnSystem']['JS'][_0x11caf5][_0x3d6362(0x1ad)](this,this,_0x46ecb6);}},Game_Actor[_0x414e2e(0x219)]['onLoadBattleTestSkillLearnSystem']=function(){const _0x1607e1=_0x414e2e,_0x214201=DataManager[_0x1607e1(0x175)](this[_0x1607e1(0xbd)]()['id']);for(const _0x386c74 of _0x214201){const _0x48c04f=$dataSkills[_0x386c74];if(!_0x48c04f)continue;if(_0x48c04f[_0x1607e1(0x1f5)][_0x1607e1(0xcb)]()==='')continue;if(_0x48c04f[_0x1607e1(0x1f5)][_0x1607e1(0x19a)](/-----/i))continue;this[_0x1607e1(0x127)](_0x386c74);}},Game_Enemy[_0x414e2e(0x219)][_0x414e2e(0x168)]=function(){const _0x496bba=_0x414e2e,_0x1d095e=VisuMZ['SkillLearnSystem'][_0x496bba(0x14a)]['AbilityPoints'],_0x4dca01=VisuMZ[_0x496bba(0x2ad)][_0x496bba(0x1c6)],_0x5259b4=this[_0x496bba(0x16e)]()[_0x496bba(0x158)];if(_0x5259b4['match'](_0x4dca01[_0x496bba(0x141)]))try{return eval(RegExp['$1']);}catch(_0x3ce806){if($gameTemp[_0x496bba(0x1c5)]())console[_0x496bba(0x2a6)](_0x3ce806);return 0x0;}try{return eval(_0x1d095e[_0x496bba(0x264)]);}catch(_0x3ff989){if($gameTemp[_0x496bba(0x1c5)]())console[_0x496bba(0x2a6)](_0x3ff989);return 0x0;}},Game_Enemy[_0x414e2e(0x219)]['skillPoints']=function(){const _0x5e8196=_0x414e2e,_0x17bed5=VisuMZ[_0x5e8196(0x2ad)][_0x5e8196(0x14a)]['SkillPoints'],_0x2b1ffb=VisuMZ[_0x5e8196(0x2ad)]['RegExp'],_0x16743c=this[_0x5e8196(0x16e)]()['note'];if(_0x16743c[_0x5e8196(0x19a)](_0x2b1ffb['EnemySkillPoints']))try{return eval(RegExp['$1']);}catch(_0x26b01b){if($gameTemp[_0x5e8196(0x1c5)]())console[_0x5e8196(0x2a6)](_0x26b01b);return 0x0;}try{return eval(_0x17bed5[_0x5e8196(0x264)]);}catch(_0x6d82ae){if($gameTemp[_0x5e8196(0x1c5)]())console[_0x5e8196(0x2a6)](_0x6d82ae);return 0x0;}},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x2ab)]=Game_Party['prototype']['setupBattleTestMembers'],Game_Party[_0x414e2e(0x219)][_0x414e2e(0x1db)]=function(){const _0x35e074=_0x414e2e;VisuMZ[_0x35e074(0x2ad)][_0x35e074(0x2ab)]['call'](this),this[_0x35e074(0xe4)]();},Game_Party['prototype'][_0x414e2e(0xe4)]=function(){const _0x4230ea=_0x414e2e;for(const _0xeee61c of this[_0x4230ea(0x1c8)]()){if(!_0xeee61c)continue;_0xeee61c[_0x4230ea(0xa0)]();}},Game_Troop[_0x414e2e(0x219)][_0x414e2e(0xfb)]=function(){const _0x1698d2=_0x414e2e;return this[_0x1698d2(0x1a4)]()[_0x1698d2(0x280)]((_0x27448f,_0x59113b)=>_0x27448f+_0x59113b['abilityPoints'](),0x0);},Game_Troop[_0x414e2e(0x219)]['skillPointsTotal']=function(){const _0x484322=_0x414e2e;return this[_0x484322(0x1a4)]()[_0x484322(0x280)]((_0x2a3c2c,_0x3c45a1)=>_0x2a3c2c+_0x3c45a1[_0x484322(0x27e)](),0x0);},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x187)]=Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x190)],Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x190)]=function(){const _0x4857a4=_0x414e2e;VisuMZ[_0x4857a4(0x2ad)][_0x4857a4(0x187)][_0x4857a4(0x1ad)](this),this[_0x4857a4(0x260)]();},Scene_Skill['prototype'][_0x414e2e(0x260)]=function(){const _0x4b83ea=_0x414e2e;this[_0x4b83ea(0x2b5)](),this[_0x4b83ea(0x26f)]();},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x2b5)]=function(){const _0x44ec62=_0x414e2e,_0x436265=this['skillLearnIngredientsWindowRect']();this[_0x44ec62(0x1f3)]=new Window_SkillLearnIngredients(_0x436265),this['addWindow'](this[_0x44ec62(0x1f3)]),this['_skillLearnIngredientsWindow']['hide']();const _0x45d541=VisuMZ['SkillLearnSystem'][_0x44ec62(0x14a)][_0x44ec62(0x1ca)][_0x44ec62(0xaf)];this['_skillLearnIngredientsWindow'][_0x44ec62(0x12e)](_0x45d541);},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x2b2)]=function(){const _0x184e39=_0x414e2e;if(VisuMZ[_0x184e39(0x2ad)][_0x184e39(0x14a)]['Window'][_0x184e39(0x1cd)])return VisuMZ[_0x184e39(0x2ad)][_0x184e39(0x14a)][_0x184e39(0x1ca)][_0x184e39(0x1cd)][_0x184e39(0x1ad)](this);const _0x49993c=this[_0x184e39(0xea)](),_0x56e468=_0x49993c['x'],_0x249790=_0x49993c['y'],_0x5810e3=_0x49993c['width'],_0x4f72d1=_0x49993c['height']-this['calcWindowHeight'](0x2,![]);return new Rectangle(_0x56e468,_0x249790,_0x5810e3,_0x4f72d1);},Scene_Skill['prototype'][_0x414e2e(0x26f)]=function(){const _0x6fb354=_0x414e2e,_0x22c87f=this[_0x6fb354(0x1f0)]();this['_skillLearnConfirmWindow']=new Window_SkillLearnConfirm(_0x22c87f),this[_0x6fb354(0x118)](this[_0x6fb354(0x20d)]),this[_0x6fb354(0x20d)]['setHandler']('ok',this[_0x6fb354(0x204)][_0x6fb354(0x2b0)](this)),this[_0x6fb354(0x20d)][_0x6fb354(0x153)]('cancel',this[_0x6fb354(0x234)]['bind'](this)),this[_0x6fb354(0x20d)]['hide']();const _0x5465a8=VisuMZ['SkillLearnSystem']['Settings']['Window'][_0x6fb354(0x25e)];this[_0x6fb354(0x20d)][_0x6fb354(0x12e)](_0x5465a8);},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x1f0)]=function(){const _0x3de9e3=_0x414e2e;if(VisuMZ[_0x3de9e3(0x2ad)][_0x3de9e3(0x14a)][_0x3de9e3(0x1ca)][_0x3de9e3(0x112)])return VisuMZ[_0x3de9e3(0x2ad)][_0x3de9e3(0x14a)][_0x3de9e3(0x1ca)][_0x3de9e3(0x112)][_0x3de9e3(0x1ad)](this);const _0x47e71d=this[_0x3de9e3(0xea)](),_0x499f09=_0x47e71d['width'],_0x23a2dc=this[_0x3de9e3(0x1d9)](0x2,![]),_0xd73e37=_0x47e71d['x'],_0xb1e11d=_0x47e71d['y']+_0x47e71d[_0x3de9e3(0x1e7)]-_0x23a2dc;return new Rectangle(_0xd73e37,_0xb1e11d,_0x499f09,_0x23a2dc);},VisuMZ['SkillLearnSystem'][_0x414e2e(0xfe)]=Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x1d8)],Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x1d8)]=function(){const _0x4f8dc9=_0x414e2e;this['_itemWindow'][_0x4f8dc9(0x26a)]()?this[_0x4f8dc9(0x279)][_0x4f8dc9(0x12d)]()&&this[_0x4f8dc9(0x279)][_0x4f8dc9(0x12d)]()[_0x4f8dc9(0x228)]?this['onSkillLearnCollapseStypeID']():this[_0x4f8dc9(0xb3)]():VisuMZ[_0x4f8dc9(0x2ad)][_0x4f8dc9(0xfe)][_0x4f8dc9(0x1ad)](this);},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x295)]=function(){const _0x104cda=_0x414e2e;this[_0x104cda(0x279)][_0x104cda(0x213)](),this[_0x104cda(0x279)][_0x104cda(0x138)]();},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0xb3)]=function(){const _0xc3ad69=_0x414e2e;this[_0xc3ad69(0x279)][_0xc3ad69(0xa8)](),this['_skillLearnIngredientsWindow'][_0xc3ad69(0x23b)](),this[_0xc3ad69(0x1f3)]['refresh'](),this[_0xc3ad69(0x20d)][_0xc3ad69(0x23b)](),this[_0xc3ad69(0x20d)][_0xc3ad69(0xc0)](),this[_0xc3ad69(0x20d)][_0xc3ad69(0x138)](),this[_0xc3ad69(0x20d)][_0xc3ad69(0x1ea)](0x0);},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x204)]=function(){const _0x1c8495=_0x414e2e;VisuMZ[_0x1c8495(0x2ad)]['Settings'][_0x1c8495(0x12f)]['ShowAnimations']?this[_0x1c8495(0x13a)]():this[_0x1c8495(0x10d)]();},Scene_Skill['prototype'][_0x414e2e(0x234)]=function(){const _0x44302c=_0x414e2e;this[_0x44302c(0x279)][_0x44302c(0x23b)](),this[_0x44302c(0x279)][_0x44302c(0x138)](),this[_0x44302c(0x1f3)][_0x44302c(0xa8)](),this[_0x44302c(0x20d)]['hide']();},Scene_Skill['prototype']['finishSkillLearnAnimation']=function(){const _0x37cf36=_0x414e2e;this[_0x37cf36(0x24d)][_0x37cf36(0x150)]=!![],this[_0x37cf36(0x27f)]=![],SoundManager[_0x37cf36(0xba)](),this[_0x37cf36(0x15f)]()[_0x37cf36(0x1d0)](this['item']()),this[_0x37cf36(0x234)](),this[_0x37cf36(0x279)][_0x37cf36(0xc0)](),this[_0x37cf36(0x172)]['refresh']();for(;;){if(this[_0x37cf36(0x279)][_0x37cf36(0x1e6)]()<=0x0)break;if(this[_0x37cf36(0x279)][_0x37cf36(0x12d)]())break;this[_0x37cf36(0x279)][_0x37cf36(0x2bc)](Math[_0x37cf36(0x28c)](this[_0x37cf36(0x279)]['index']()-0x1,0x0));}},VisuMZ['SkillLearnSystem']['Scene_Skill_update']=Scene_Skill['prototype'][_0x414e2e(0xd4)],Scene_Skill['prototype'][_0x414e2e(0xd4)]=function(){const _0x4745ac=_0x414e2e;VisuMZ[_0x4745ac(0x2ad)][_0x4745ac(0x235)]['call'](this),this[_0x4745ac(0x229)]();},Scene_Skill['prototype'][_0x414e2e(0x13a)]=function(){const _0x21866e=_0x414e2e;this['_skillLearnAnimationPlaying']=!![],this[_0x21866e(0x21c)]=0x14,this['_windowLayer'][_0x21866e(0x150)]=VisuMZ[_0x21866e(0x2ad)][_0x21866e(0x14a)][_0x21866e(0x12f)][_0x21866e(0x136)]||![],this['createSkillLearnSkillSprite']();},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x26e)]=function(){const _0x3d4cc7=_0x414e2e;this[_0x3d4cc7(0x2af)]=new Sprite(),this[_0x3d4cc7(0x2cf)](this['_skillLearnIconSprite']),this[_0x3d4cc7(0x2d3)](),this[_0x3d4cc7(0x2b1)](),this[_0x3d4cc7(0xae)](),this[_0x3d4cc7(0x186)](),this[_0x3d4cc7(0x104)](),this[_0x3d4cc7(0x169)](this['_skillLearnAnimationIDs'][_0x3d4cc7(0x238)]());},Scene_Skill['prototype'][_0x414e2e(0x2d3)]=function(){const _0x439857=_0x414e2e,_0x288fe6=VisuMZ[_0x439857(0x2ad)][_0x439857(0x1c6)],_0x52bd75=this[_0x439857(0x12d)]()[_0x439857(0x158)];this[_0x439857(0x140)]='';if(_0x52bd75[_0x439857(0x19a)](_0x288fe6[_0x439857(0xf3)]))this[_0x439857(0x140)]=String(RegExp['$1']);else _0x52bd75[_0x439857(0x19a)](_0x288fe6[_0x439857(0x2ca)])&&(this[_0x439857(0x140)]=String(RegExp['$1']));this[_0x439857(0x23d)]=new Sprite();this[_0x439857(0x140)]?this['_skillLearnBitmapSprite'][_0x439857(0x272)]=ImageManager[_0x439857(0x161)](this[_0x439857(0x140)]):(this[_0x439857(0x23d)][_0x439857(0x272)]=ImageManager['loadSystem'](_0x439857(0x1bb)),this[_0x439857(0x23d)]['bitmap'][_0x439857(0x1a7)]=![]);this[_0x439857(0x23d)][_0x439857(0x22a)]['x']=0.5,this[_0x439857(0x23d)][_0x439857(0x22a)]['y']=0.5;if(!this[_0x439857(0x140)]){const _0x121fa1=VisuMZ['SkillLearnSystem'][_0x439857(0x14a)][_0x439857(0x12f)]['Scale']||0x8;this[_0x439857(0x23d)][_0x439857(0x2c3)]['x']=_0x121fa1,this[_0x439857(0x23d)][_0x439857(0x2c3)]['y']=_0x121fa1;}this[_0x439857(0x2af)][_0x439857(0x2cf)](this[_0x439857(0x23d)]);},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x2b1)]=function(){const _0x3d6ff4=_0x414e2e;if(this[_0x3d6ff4(0x140)])return;const _0x9b973b=this['item'](),_0xa99b7=_0x9b973b[_0x3d6ff4(0x115)],_0x1d5fbf=ImageManager[_0x3d6ff4(0x19c)],_0x403f67=ImageManager['iconHeight'],_0x1ed5b4=_0xa99b7%0x10*_0x1d5fbf,_0x42676b=Math[_0x3d6ff4(0x159)](_0xa99b7/0x10)*_0x403f67;this[_0x3d6ff4(0x23d)][_0x3d6ff4(0x2a9)](_0x1ed5b4,_0x42676b,_0x1d5fbf,_0x403f67);},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0xae)]=function(){const _0x2bfc23=_0x414e2e;this['_skillLearnIconSprite']['x']=Math['round'](Graphics[_0x2bfc23(0x22f)]/0x2);const _0x319a98=Math[_0x2bfc23(0xf1)](ImageManager[_0x2bfc23(0x13d)]*this[_0x2bfc23(0x2af)][_0x2bfc23(0x2c3)]['y']);this[_0x2bfc23(0x2af)]['y']=Math[_0x2bfc23(0xf1)]((Graphics[_0x2bfc23(0x1e7)]+_0x319a98)/0x2);},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x186)]=function(){const _0xb3836a=_0x414e2e;this[_0xb3836a(0x9d)]=VisuMZ[_0xb3836a(0x2ad)][_0xb3836a(0x14a)][_0xb3836a(0x12f)][_0xb3836a(0x1d1)]||0x1,this[_0xb3836a(0x12d)]()[_0xb3836a(0x158)]['match'](VisuMZ[_0xb3836a(0x2ad)]['RegExp'][_0xb3836a(0x147)])&&(this[_0xb3836a(0x9d)]=Math['max'](Number(RegExp['$1']),0x1)),this[_0xb3836a(0x2af)][_0xb3836a(0x19e)]=0x0;},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x104)]=function(){const _0x25634d=_0x414e2e;this[_0x25634d(0x10b)]=[],this[_0x25634d(0x12d)]()['note'][_0x25634d(0x19a)](VisuMZ[_0x25634d(0x2ad)][_0x25634d(0x1c6)]['animationIDs'])?this[_0x25634d(0x10b)]=RegExp['$1']['split'](',')[_0x25634d(0x184)](_0x304156=>Number(_0x304156)):this[_0x25634d(0x10b)]=this[_0x25634d(0x10b)][_0x25634d(0x15b)](VisuMZ[_0x25634d(0x2ad)]['Settings'][_0x25634d(0x12f)][_0x25634d(0x1ab)]);},Scene_Skill[_0x414e2e(0x219)]['createSkillLearnAnimation']=function(_0x5e2eff){const _0x4de7a8=_0x414e2e,_0x163b83=$dataAnimations[_0x5e2eff];if(!_0x163b83)return;const _0x238032=this[_0x4de7a8(0x144)](_0x163b83);this['_skillLearnAnimationSprite']=new(_0x238032?Sprite_AnimationMV:Sprite_Animation)();const _0x11ce31=[this['_skillLearnIconSprite']],_0x13abec=0x0;this[_0x4de7a8(0x134)][_0x4de7a8(0x11b)](_0x11ce31,_0x163b83,![],_0x13abec,null),this[_0x4de7a8(0x2cf)](this['_skillLearnAnimationSprite']);},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x144)]=function(_0x369091){const _0x3c55a4=_0x414e2e;return!!_0x369091[_0x3c55a4(0xd1)];},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x229)]=function(){const _0x509959=_0x414e2e;if(!this[_0x509959(0x27f)])return;this[_0x509959(0x154)](),this[_0x509959(0x120)](),this['isFinishedSkillLearnAnimating']()&&this[_0x509959(0x239)]();},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x154)]=function(){const _0xd5bb25=_0x414e2e;this[_0xd5bb25(0x2af)][_0xd5bb25(0x19e)]+=this['_skillLearnIconSpriteOpacitySpeed'];},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x120)]=function(){const _0x4251a0=_0x414e2e;if(!this[_0x4251a0(0x134)])return;if(this[_0x4251a0(0x134)][_0x4251a0(0x28b)]())return;this[_0x4251a0(0x18d)](),this[_0x4251a0(0x169)](this[_0x4251a0(0x10b)][_0x4251a0(0x238)]());},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x18d)]=function(){const _0x1e34b7=_0x414e2e;if(!this[_0x1e34b7(0x134)])return;this[_0x1e34b7(0x1d6)](this[_0x1e34b7(0x134)]),this[_0x1e34b7(0x134)][_0x1e34b7(0x1b2)](),this['_skillLearnAnimationSprite']=undefined;},Scene_Skill['prototype'][_0x414e2e(0x2b7)]=function(){const _0x28918b=_0x414e2e;if(!this['_skillLearnIconSprite'])return;this[_0x28918b(0x1d6)](this[_0x28918b(0x2af)]),this[_0x28918b(0x2af)][_0x28918b(0x1b2)](),this[_0x28918b(0x2af)]=undefined;},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x178)]=function(){const _0x40bd09=_0x414e2e;if(TouchInput['isReleased']())return!![];if(Input[_0x40bd09(0x11f)]('ok'))return!![];if(Input[_0x40bd09(0x11f)]('cancel'))return!![];if(this[_0x40bd09(0x2af)][_0x40bd09(0x19e)]<0xff)return![];if(this[_0x40bd09(0x134)])return![];return this[_0x40bd09(0x21c)]--<=0x0;},Scene_Skill[_0x414e2e(0x219)][_0x414e2e(0x239)]=function(){const _0x2bd2d7=_0x414e2e;this[_0x2bd2d7(0x18d)](),this[_0x2bd2d7(0x2b7)](),this[_0x2bd2d7(0x10d)](),TouchInput['clear'](),Input[_0x2bd2d7(0x1e5)]();},Window_Base['prototype'][_0x414e2e(0xff)]=function(_0x5dc0f7,_0x537e29,_0xc648d0,_0x518be7,_0x59d80e){const _0x505a09=_0x414e2e;_0x59d80e=_0x59d80e||'left';const _0x36f702='\x5cI[%1]'['format'](ImageManager[_0x505a09(0xed)]),_0x51223a=TextManager[_0x505a09(0x2a7)],_0x23524c=_0x51223a['format'](_0x5dc0f7,TextManager['abilityPointsAbbr'],_0x36f702,TextManager[_0x505a09(0x106)]),_0x3da606=this[_0x505a09(0x281)](_0x23524c)['width'];if(_0x59d80e===_0x505a09(0x157))_0x537e29+=0x0;else _0x59d80e===_0x505a09(0x1bd)?_0x537e29+=Math[_0x505a09(0xf1)]((_0x518be7-_0x3da606)/0x2):_0x537e29+=_0x518be7-_0x3da606;this[_0x505a09(0xc8)](_0x23524c,_0x537e29,_0xc648d0);},Window_Base[_0x414e2e(0x219)][_0x414e2e(0x164)]=function(_0x2b784e,_0x5786e4,_0x4aeeca,_0x290264,_0x5872d0,_0x2acbd5){const _0x1fe7fd=_0x414e2e,_0x800ef3=_0x2b784e['getAbilityPoints'](_0x5786e4);this[_0x1fe7fd(0xff)](_0x800ef3,_0x4aeeca,_0x290264,_0x5872d0,_0x2acbd5);},Window_Base['prototype']['drawSkillPoints']=function(_0x5a7302,_0x5db664,_0x5f5dcd,_0x1ff806,_0xc8184c){const _0x33b7e1=_0x414e2e;_0xc8184c=_0xc8184c||_0x33b7e1(0x157);const _0x3a9c70='\x5cI[%1]'[_0x33b7e1(0x25f)](ImageManager[_0x33b7e1(0x20c)]),_0x2d2339=TextManager[_0x33b7e1(0x1aa)],_0x3653ef=_0x2d2339['format'](_0x5a7302,TextManager[_0x33b7e1(0x149)],_0x3a9c70,TextManager[_0x33b7e1(0x2a3)]),_0x4a46da=this[_0x33b7e1(0x281)](_0x3653ef)[_0x33b7e1(0x22f)];if(_0xc8184c===_0x33b7e1(0x157))_0x5db664+=0x0;else _0xc8184c===_0x33b7e1(0x1bd)?_0x5db664+=Math[_0x33b7e1(0xf1)]((_0x1ff806-_0x4a46da)/0x2):_0x5db664+=_0x1ff806-_0x4a46da;this[_0x33b7e1(0xc8)](_0x3653ef,_0x5db664,_0x5f5dcd);},Window_Base[_0x414e2e(0x219)][_0x414e2e(0x268)]=function(_0x225872,_0x4c76fe,_0x6b9e3c,_0x17527c,_0x4b8137,_0x5a90cf){const _0xfa581d=_0x414e2e,_0xd8aac5=_0x225872[_0xfa581d(0x290)](_0x4c76fe);this[_0xfa581d(0x1d4)](_0xd8aac5,_0x6b9e3c,_0x17527c,_0x4b8137,_0x5a90cf);},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x222)]=Window_SkillType['prototype']['makeCommandList'],Window_SkillType[_0x414e2e(0x219)][_0x414e2e(0x1b1)]=function(){const _0x408bce=_0x414e2e;VisuMZ[_0x408bce(0x2ad)]['Window_SkillType_makeCommandList']['call'](this),this[_0x408bce(0x152)]();},Window_SkillType[_0x414e2e(0x219)][_0x414e2e(0x152)]=function(){const _0x3b7057=_0x414e2e;if(!$gameSystem[_0x3b7057(0x135)]())return;if(!this[_0x3b7057(0xa4)])return;let _0x28e801=this[_0x3b7057(0x148)]();const _0x1f06ba=this[_0x3b7057(0xa4)][_0x3b7057(0x1a3)]()[0x0];this[_0x3b7057(0x1b6)](_0x28e801,'skill',!![],_0x3b7057(0x292));},Window_SkillType[_0x414e2e(0x219)]['skillLearnSystemCommandName']=function(){const _0x19e7a1=_0x414e2e;let _0x1577e4=TextManager[_0x19e7a1(0x1e3)];if(_0x1577e4[_0x19e7a1(0x19a)](/\\I\[(\d+)\]/i))return _0x1577e4;if(!Imported['VisuMZ_1_SkillsStatesCore'])return _0x1577e4;if(this[_0x19e7a1(0x286)]()==='text')return _0x1577e4;const _0x1f1332=TextManager[_0x19e7a1(0xad)];return'\x5cI[%1]%2'['format'](_0x1f1332,_0x1577e4);},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x212)]=Window_SkillStatus[_0x414e2e(0x219)][_0x414e2e(0xc0)],Window_SkillStatus[_0x414e2e(0x219)][_0x414e2e(0xc0)]=function(){const _0x52be48=_0x414e2e;this[_0x52be48(0x221)](),this[_0x52be48(0x26a)]()?this[_0x52be48(0x15c)]():VisuMZ['SkillLearnSystem'][_0x52be48(0x212)][_0x52be48(0x1ad)](this);},Window_SkillStatus[_0x414e2e(0x219)][_0x414e2e(0x26a)]=function(){const _0x3c3945=_0x414e2e,_0x4774af=SceneManager[_0x3c3945(0x267)];if(!_0x4774af)return![];const _0x576c30=_0x4774af['_itemWindow'];if(!_0x576c30)return![];return _0x576c30[_0x3c3945(0x26a)]&&_0x576c30[_0x3c3945(0x26a)]();},Window_SkillStatus[_0x414e2e(0x219)][_0x414e2e(0x15c)]=function(){const _0x5d26b5=_0x414e2e;if(!this[_0x5d26b5(0xa4)])return;Window_StatusBase[_0x5d26b5(0x219)]['refresh']['call'](this);if(VisuMZ[_0x5d26b5(0x2ad)][_0x5d26b5(0x14a)][_0x5d26b5(0x171)]['StatusWindowDrawJS']){VisuMZ['SkillLearnSystem'][_0x5d26b5(0x14a)]['General']['StatusWindowDrawJS'][_0x5d26b5(0x1ad)](this);return;}const _0x479d2d=this[_0x5d26b5(0x163)]()/0x2,_0x2a775b=this[_0x5d26b5(0x2c9)],_0x2bda4a=_0x2a775b/0x2-this[_0x5d26b5(0xc4)]()*1.5;this[_0x5d26b5(0xdd)](this[_0x5d26b5(0xa4)],_0x479d2d+0x1,0x0,0x90,_0x2a775b),this[_0x5d26b5(0x145)](this['_actor'],_0x479d2d+0xb4,_0x2bda4a);let _0x1dcd2b=this[_0x5d26b5(0x163)]()/0x2+0xb4+0xb4+0xb4,_0x1d501b=this[_0x5d26b5(0xfd)]-_0x1dcd2b-0x2;if(_0x1d501b<0x12c)return;const _0x20209d=this[_0x5d26b5(0x210)](),_0x5c39e7=Math[_0x5d26b5(0x159)](this[_0x5d26b5(0x2c9)]/this['lineHeight']()),_0x2451d5=Math[_0x5d26b5(0x2c6)](_0x20209d[_0x5d26b5(0x14e)]/_0x5c39e7);let _0x37c0bc=_0x1dcd2b,_0x95281b=Math[_0x5d26b5(0x28c)](Math[_0x5d26b5(0xf1)]((this[_0x5d26b5(0x2c9)]-this[_0x5d26b5(0xc4)]()*Math[_0x5d26b5(0x2c6)](_0x20209d[_0x5d26b5(0x14e)]/_0x2451d5))/0x2),0x0);const _0x3aac28=_0x95281b;let _0x36416e=(this['innerWidth']-_0x37c0bc-this[_0x5d26b5(0x24b)]()*0x2*_0x2451d5)/_0x2451d5;_0x2451d5===0x1&&(_0x36416e=Math[_0x5d26b5(0x111)](ImageManager[_0x5d26b5(0x203)],_0x36416e),_0x37c0bc+=Math[_0x5d26b5(0xf1)]((this[_0x5d26b5(0xfd)]-_0x37c0bc-this['itemPadding']()*0x2-_0x36416e)/0x2));for(const _0x11355f of _0x20209d){switch(_0x11355f){case'AP':this[_0x5d26b5(0x164)](this['_actor'],this['_actor'][_0x5d26b5(0xbd)]()['id'],_0x37c0bc,_0x95281b,_0x36416e,_0x5d26b5(0xbc));break;case'CP':Imported[_0x5d26b5(0x255)]&&this[_0x5d26b5(0x1c3)](this['_actor'],this['_actor'][_0x5d26b5(0xbd)]()['id'],_0x37c0bc,_0x95281b,_0x36416e,_0x5d26b5(0xbc));break;case'JP':Imported[_0x5d26b5(0x255)]&&this[_0x5d26b5(0x137)](this[_0x5d26b5(0xa4)],this[_0x5d26b5(0xa4)]['currentClass']()['id'],_0x37c0bc,_0x95281b,_0x36416e,'right');break;case'SP':this['drawActorSkillPoints'](this[_0x5d26b5(0xa4)],this[_0x5d26b5(0xa4)][_0x5d26b5(0xbd)]()['id'],_0x37c0bc,_0x95281b,_0x36416e,'right');break;case _0x5d26b5(0xe2):this[_0x5d26b5(0xeb)]($gameParty[_0x5d26b5(0x274)](),TextManager[_0x5d26b5(0xb9)],_0x37c0bc,_0x95281b,_0x36416e);break;default:continue;}_0x95281b+=this[_0x5d26b5(0xc4)](),_0x95281b+this[_0x5d26b5(0xc4)]()>this['innerHeight']&&(_0x95281b=_0x3aac28,_0x37c0bc+=_0x36416e+this['itemPadding']()*0x2);}},Window_SkillStatus[_0x414e2e(0x219)][_0x414e2e(0x210)]=function(){const _0x14d1d4=_0x414e2e,_0x446f4c=JsonEx[_0x14d1d4(0x100)](VisuMZ[_0x14d1d4(0x2ad)]['Settings'][_0x14d1d4(0x171)][_0x14d1d4(0x117)]);return!Imported[_0x14d1d4(0x255)]&&(_0x446f4c[_0x14d1d4(0x297)]('CP'),_0x446f4c[_0x14d1d4(0x297)]('JP')),_0x446f4c['remove'](_0x14d1d4(0x27b))[_0x14d1d4(0x297)](_0x14d1d4(0xde))['remove'](_0x14d1d4(0x217));},VisuMZ[_0x414e2e(0x2ad)]['Window_SkillList_initialize']=Window_SkillList['prototype']['initialize'],Window_SkillList['prototype'][_0x414e2e(0x125)]=function(_0x5b0621){const _0x31993c=_0x414e2e;this['_collapsedStypeIDs']=[],VisuMZ[_0x31993c(0x2ad)][_0x31993c(0x155)][_0x31993c(0x1ad)](this,_0x5b0621);},Window_SkillList[_0x414e2e(0x219)]['isSkillLearnMode']=function(){return this['_stypeId']==='skillLearn';},Window_SkillList['prototype'][_0x414e2e(0x29f)]=function(){const _0x38fd58=_0x414e2e;return VisuMZ[_0x38fd58(0x2ad)][_0x38fd58(0x14a)][_0x38fd58(0x171)][_0x38fd58(0x122)]??![];},Window_SkillList['prototype']['separateSkillLearnStypeIndent']=function(){const _0xc67942=_0x414e2e;return VisuMZ[_0xc67942(0x2ad)][_0xc67942(0x14a)][_0xc67942(0x171)]['SeparateIndent']??0x10;},VisuMZ['SkillLearnSystem'][_0x414e2e(0x1c7)]=Window_SkillList[_0x414e2e(0x219)]['setActor'],Window_SkillList['prototype'][_0x414e2e(0x1fc)]=function(_0x3cc0e1){const _0x87c499=_0x414e2e;this[_0x87c499(0xa4)]!==_0x3cc0e1&&(this[_0x87c499(0x1d3)]=[]),VisuMZ[_0x87c499(0x2ad)][_0x87c499(0x1c7)][_0x87c499(0x1ad)](this,_0x3cc0e1);},VisuMZ['SkillLearnSystem'][_0x414e2e(0x2d0)]=Window_SkillList[_0x414e2e(0x219)]['setStypeId'],Window_SkillList['prototype']['setStypeId']=function(_0x11e67a){const _0x2334ae=_0x414e2e,_0x18f4ab=this[_0x2334ae(0x26a)]();VisuMZ[_0x2334ae(0x2ad)][_0x2334ae(0x2d0)]['call'](this,_0x11e67a);if(_0x18f4ab!==this['isSkillLearnMode']()){const _0x2c7ca9=SceneManager[_0x2334ae(0x267)];if(!_0x2c7ca9)return;const _0x360cf7=_0x2c7ca9[_0x2334ae(0x172)];if(_0x360cf7)_0x360cf7[_0x2334ae(0xc0)]();}},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x1cb)]=Window_SkillList['prototype'][_0x414e2e(0x1eb)],Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x1eb)]=function(){const _0x5f3054=_0x414e2e;return this[_0x5f3054(0x26a)]()?0x1:VisuMZ[_0x5f3054(0x2ad)][_0x5f3054(0x1cb)]['call'](this);},VisuMZ[_0x414e2e(0x2ad)]['Window_SkillList_makeItemList']=Window_SkillList[_0x414e2e(0x219)]['makeItemList'],Window_SkillList[_0x414e2e(0x219)]['makeItemList']=function(){const _0x25cd1c=_0x414e2e;this[_0x25cd1c(0xa4)]&&this[_0x25cd1c(0x26a)]()?this[_0x25cd1c(0x209)]():VisuMZ[_0x25cd1c(0x2ad)][_0x25cd1c(0x18b)][_0x25cd1c(0x1ad)](this);},Window_SkillList[_0x414e2e(0x219)]['makeSkillLearnList']=function(){const _0x2b3357=_0x414e2e,_0xbb5596=this[_0x2b3357(0x29f)](),_0x20120b=DataManager['getSkillLearnSkillsFromClass'](this[_0x2b3357(0xa4)][_0x2b3357(0xbd)]()['id']);_0xbb5596?this[_0x2b3357(0x1fa)](_0x20120b):this[_0x2b3357(0x2c2)]=_0x20120b[_0x2b3357(0x184)](_0x1e9529=>$dataSkills[_0x1e9529])[_0x2b3357(0x1cf)](_0x1ec03a=>this[_0x2b3357(0x182)](_0x1ec03a));if(Imported[_0x2b3357(0xca)]){let _0x3a8f57=!![];if(this['separateSkillLearnByStypeID']()){this[_0x2b3357(0x2aa)](_0x2b3357(0x289));if(this[_0x2b3357(0x1d3)][_0x2b3357(0x182)](_0x2b3357(0x289)))_0x3a8f57=![];}const _0x5d0f02=DataManager[_0x2b3357(0x18a)](this['_actor']['currentClass']()['id']),_0x5dcaec=_0x5d0f02['map'](_0x3531b0=>$dataStates[_0x3531b0])['filter'](_0x4836ad=>this['includes'](_0x4836ad));if(_0x5dcaec['length']>0x0&&_0x3a8f57)this[_0x2b3357(0xc1)]();else _0x5dcaec[_0x2b3357(0x14e)]<=0x0&&this['_data']['pop']();}},Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x1fa)]=function(_0xf5792){const _0x51e625=_0x414e2e;this['_data']=[];const _0x41ab47=_0xf5792[_0x51e625(0x184)](_0x33e100=>$dataSkills[_0x33e100]?$dataSkills[_0x33e100][_0x51e625(0x2b3)]:0x0)['remove'](0x0)[_0x51e625(0x1cf)]((_0x11e0d7,_0x9e1722,_0x1e9cb1)=>_0x1e9cb1[_0x51e625(0x1bc)](_0x11e0d7)===_0x9e1722)[_0x51e625(0x254)]((_0x3040ba,_0x313f0d)=>_0x3040ba-_0x313f0d);for(const _0x56d457 of _0x41ab47){this['makeSkillLearnStypeCategory'](_0x56d457);const _0x480f69=_0xf5792[_0x51e625(0x184)](_0x5be7dc=>$dataSkills[_0x5be7dc])[_0x51e625(0x1cf)](_0x45cbf4=>this[_0x51e625(0x182)](_0x45cbf4)&&_0x45cbf4[_0x51e625(0x2b3)]===_0x56d457);_0x480f69['length']<=0x0&&this[_0x51e625(0x2c2)][_0x51e625(0x180)]();if(this[_0x51e625(0x1d3)]['includes'](_0x56d457))continue;this[_0x51e625(0x2c2)]=this[_0x51e625(0x2c2)][_0x51e625(0x15b)](_0x480f69);}},Window_SkillList[_0x414e2e(0x219)]['makeSkillLearnStypeCategory']=function(_0x23317d){const _0x541614=_0x414e2e,_0x27d9d3=VisuMZ['SkillsStatesCore'][_0x541614(0x14a)]['Skills'],_0x1b36a9=$dataSystem[_0x541614(0x218)][_0x541614(0x182)](_0x23317d);let _0x5e198b=_0x1b36a9?_0x27d9d3['IconStypeMagic']:_0x27d9d3[_0x541614(0x1d7)];_0x23317d===_0x541614(0x289)&&(_0x5e198b=ImageManager[_0x541614(0x216)]['icon']);let _0x332229=$dataSystem[_0x541614(0x1a3)][_0x23317d];_0x23317d===_0x541614(0x289)&&(_0x332229=TextManager[_0x541614(0x216)]['command']),_0x332229[_0x541614(0x19a)](/\\I\[(\d+)\]/i)&&(_0x5e198b=Number(RegExp['$1']),_0x332229=_0x332229[_0x541614(0x18e)](/\\I\[(\d+)\]/gi,'')[_0x541614(0xcb)]()),_0x23317d!==_0x541614(0x289)&&(_0x332229=TextManager[_0x541614(0x1cc)][_0x541614(0x25f)](_0x332229)),this[_0x541614(0x2c2)][_0x541614(0x2b4)]({'id':-0x1,'name':_0x332229,'iconIndex':_0x5e198b,'description':'','disabled':!![],'stypeCategory':!![],'stypeId':_0x23317d,'note':_0x541614(0x296)[_0x541614(0x25f)](TextManager['skillLearnStypeColor'])});},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x242)]=Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x139)],Window_SkillList[_0x414e2e(0x219)]['alterSkillName']=function(_0x421ca0){const _0x54c3f5=_0x414e2e;VisuMZ[_0x54c3f5(0x2ad)][_0x54c3f5(0x242)][_0x54c3f5(0x1ad)](this,_0x421ca0);if(!_0x421ca0)return;if(!_0x421ca0[_0x54c3f5(0x228)])return;let _0x5964b9=_0x421ca0[_0x54c3f5(0x1f5)];const _0x29c73d=this[_0x54c3f5(0x1d3)]['includes'](_0x421ca0[_0x54c3f5(0x2b3)]);_0x29c73d?_0x5964b9=TextManager[_0x54c3f5(0xec)][_0x54c3f5(0x25f)](_0x5964b9):_0x5964b9=TextManager['skillLearnStypeCategoryCollapse'][_0x54c3f5(0x25f)](_0x5964b9),_0x421ca0['name']=_0x5964b9;},Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x213)]=function(){const _0x7d7aea=_0x414e2e,_0x366477=this['item'](),_0xb69d2=_0x366477[_0x7d7aea(0x2b3)];this[_0x7d7aea(0x1d3)][_0x7d7aea(0x182)](_0xb69d2)?this[_0x7d7aea(0x1d3)][_0x7d7aea(0x297)](_0xb69d2):this[_0x7d7aea(0x1d3)][_0x7d7aea(0x2b4)](_0xb69d2),this[_0x7d7aea(0xc0)]();},VisuMZ[_0x414e2e(0x2ad)]['Window_SkillList_includes']=Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x182)],Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x182)]=function(_0x5e9fb7){const _0x390aea=_0x414e2e;return this[_0x390aea(0x26a)]()?this[_0x390aea(0x1ff)](_0x5e9fb7):VisuMZ[_0x390aea(0x2ad)][_0x390aea(0xbb)][_0x390aea(0x1ad)](this,_0x5e9fb7);},Window_SkillList[_0x414e2e(0x219)]['skillLearnIncludes']=function(_0x2b2f4a){const _0x216449=_0x414e2e;if(!_0x2b2f4a)return![];if(_0x2b2f4a[_0x216449(0x1f5)][_0x216449(0x14e)]<=0x0)return![];if(_0x2b2f4a[_0x216449(0x1f5)][_0x216449(0x19a)](/-----/i))return![];if(VisuMZ[_0x216449(0x2ad)]['Settings'][_0x216449(0x171)][_0x216449(0x283)]){if(DataManager[_0x216449(0x14d)](_0x2b2f4a)){if(this[_0x216449(0xa4)][_0x216449(0xd0)](_0x2b2f4a['id']))return![];}if(_0x2b2f4a&&_0x2b2f4a[_0x216449(0x132)]!==undefined&&Imported[_0x216449(0xca)]){if(this[_0x216449(0xa4)]['isLearnedEquippedPassive'](_0x2b2f4a))return![];}}const _0xea3bed=VisuMZ['SkillLearnSystem'][_0x216449(0x2c7)](_0x2b2f4a,_0x216449(0x27d));if(VisuMZ[_0x216449(0x2ad)]['JS'][_0xea3bed]){if(!VisuMZ['SkillLearnSystem']['JS'][_0xea3bed][_0x216449(0x1ad)](this,this[_0x216449(0xa4)],_0x2b2f4a))return![];}const _0x8a5490=VisuMZ['SkillLearnSystem'][_0x216449(0x1c6)],_0x5c63aa=_0x2b2f4a[_0x216449(0x158)];if(_0x5c63aa[_0x216449(0x19a)](_0x8a5490[_0x216449(0x16a)])){const _0x31af03=Number(RegExp['$1']);if(_0x31af03>this[_0x216449(0xa4)][_0x216449(0x165)])return![];}if(_0x5c63aa['match'](_0x8a5490['LearnShowSkillsAll'])){const _0x70bf99=String(RegExp['$1'])[_0x216449(0x1d2)](',')['map'](_0x13e51d=>_0x13e51d[_0x216449(0xcb)]());;for(const _0x29df5d of _0x70bf99){let _0x1d46bf=0x0;const _0xd4dc1e=/^\d+$/[_0x216449(0xda)](_0x29df5d);_0xd4dc1e?_0x1d46bf=Number(_0x29df5d):_0x1d46bf=DataManager[_0x216449(0xf4)](_0x29df5d);if(!this[_0x216449(0xa4)][_0x216449(0xd0)](_0x1d46bf))return![];}}if(_0x5c63aa[_0x216449(0x19a)](_0x8a5490[_0x216449(0x1b8)])){const _0x56b108=String(RegExp['$1'])[_0x216449(0x1d2)](',')[_0x216449(0x184)](_0x272b04=>_0x272b04['trim']());;let _0x284c2e=![];for(const _0x5067c5 of _0x56b108){let _0x309f66=0x0;const _0x2f01e9=/^\d+$/[_0x216449(0xda)](_0x5067c5);_0x2f01e9?_0x309f66=Number(_0x5067c5):_0x309f66=DataManager[_0x216449(0xf4)](_0x5067c5);if(this['_actor']['isLearnedSkill'](_0x309f66)){_0x284c2e=!![];break;}}if(!_0x284c2e)return![];}if(_0x5c63aa[_0x216449(0x19a)](_0x8a5490['LearnShowSwitchesAll'])){const _0x261e83=String(RegExp['$1'])[_0x216449(0x1d2)](',')[_0x216449(0x184)](_0x3a05a4=>Number(_0x3a05a4));for(const _0x5433aa of _0x261e83){if(!$gameSwitches[_0x216449(0x2bd)](_0x5433aa))return![];}}if(_0x5c63aa[_0x216449(0x19a)](_0x8a5490[_0x216449(0x20b)])){const _0x2122cd=String(RegExp['$1'])[_0x216449(0x1d2)](',')['map'](_0x3491b7=>Number(_0x3491b7));let _0x1ffb00=![];for(const _0x52aac5 of _0x2122cd){if($gameSwitches[_0x216449(0x2bd)](_0x52aac5)){_0x1ffb00=!![];break;}}if(!_0x1ffb00)return![];}return _0x2b2f4a;},VisuMZ['SkillLearnSystem']['Window_SkillList_isEnabled']=Window_SkillList[_0x414e2e(0x219)]['isEnabled'],Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x232)]=function(_0x4f0c22){const _0x11286b=_0x414e2e;return this[_0x11286b(0xa4)]&&this[_0x11286b(0x26a)]()?this[_0x11286b(0x2bb)](_0x4f0c22):VisuMZ[_0x11286b(0x2ad)][_0x11286b(0xd9)][_0x11286b(0x1ad)](this,_0x4f0c22);},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0xdb)]=Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x1c2)],Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x1c2)]=function(_0x4dd844){const _0x2c2c7e=_0x414e2e;this['_skillLearnSystem_drawItemMode']=this[_0x2c2c7e(0x26a)]();if(this[_0x2c2c7e(0x26a)]()&&this[_0x2c2c7e(0x29f)]()){const _0x2bc47a=this[_0x2c2c7e(0x2c2)][_0x4dd844];this[_0x2c2c7e(0x1fe)]=!_0x2bc47a['stypeCategory'];}VisuMZ[_0x2c2c7e(0x2ad)][_0x2c2c7e(0xdb)][_0x2c2c7e(0x1ad)](this,_0x4dd844),this[_0x2c2c7e(0x23e)]=![],this[_0x2c2c7e(0x26a)]()&&this[_0x2c2c7e(0x29f)]()&&(this[_0x2c2c7e(0x1fe)]=undefined);},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x29a)]=Window_SkillList['prototype'][_0x414e2e(0x1de)],Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x1de)]=function(_0x57e5ba){const _0x11a288=_0x414e2e,_0xd3ce58=VisuMZ[_0x11a288(0x2ad)][_0x11a288(0x29a)][_0x11a288(0x1ad)](this,_0x57e5ba);if(this[_0x11a288(0x1fe)]){const _0x936d9a=this[_0x11a288(0x25b)]();_0xd3ce58['x']+=_0x936d9a,_0xd3ce58[_0x11a288(0x22f)]-=_0x936d9a;}return _0xd3ce58;},Window_SkillList[_0x414e2e(0x219)]['isSkillLearnEnabled']=function(_0x18cdb3){const _0xc7dd34=_0x414e2e;if(!_0x18cdb3)return![];if(_0x18cdb3['name'][_0xc7dd34(0x14e)]<=0x0)return![];if(_0x18cdb3[_0xc7dd34(0x1f5)][_0xc7dd34(0x19a)](/-----/i))return![];if(DataManager['isSkill'](_0x18cdb3)){if(this[_0xc7dd34(0xa4)][_0xc7dd34(0xd0)](_0x18cdb3['id']))return![];}if(Imported[_0xc7dd34(0xca)]&&DataManager[_0xc7dd34(0xa1)](_0x18cdb3)){if(this[_0xc7dd34(0xa4)][_0xc7dd34(0xb1)](_0x18cdb3))return![];}if(this['_skillLearnSystem_drawItemMode']){if(!this[_0xc7dd34(0xa4)]['meetRequirementsForSkillLearnSystem'](_0x18cdb3))return![];return this[_0xc7dd34(0xa4)][_0xc7dd34(0xee)](_0x18cdb3);}return!![];},VisuMZ[_0x414e2e(0x2ad)][_0x414e2e(0x16f)]=Window_SkillList['prototype']['drawSkillCost'],Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x12a)]=function(_0x1fc8ed,_0x1beef9,_0x29dd3c,_0x425a25){const _0x1a5cf5=_0x414e2e;this[_0x1a5cf5(0x26a)]()?this[_0x1a5cf5(0x1dd)](_0x1fc8ed)?this['drawSkillLearnRequirements'](_0x1fc8ed,_0x1beef9,_0x29dd3c,_0x425a25):this[_0x1a5cf5(0x1a9)](_0x1fc8ed,_0x1beef9,_0x29dd3c,_0x425a25):VisuMZ[_0x1a5cf5(0x2ad)][_0x1a5cf5(0x16f)][_0x1a5cf5(0x1ad)](this,_0x1fc8ed,_0x1beef9,_0x29dd3c,_0x425a25);},Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x1dd)]=function(_0xa5ad88){const _0x2ac04a=_0x414e2e;return this[_0x2ac04a(0xa4)]&&!this[_0x2ac04a(0xa4)][_0x2ac04a(0xcc)](_0xa5ad88);},Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x2ce)]=function(_0x11e25f,_0x6bec12,_0x5da6d0,_0x56286f){const _0x1f7f09=_0x414e2e,_0x1d5a47=this[_0x1f7f09(0xe0)](_0x11e25f),_0x5e385a=this[_0x1f7f09(0x281)](_0x1d5a47)['width'];_0x6bec12+=_0x56286f-_0x5e385a,this['drawTextEx'](_0x1d5a47,_0x6bec12,_0x5da6d0);},Window_SkillList['prototype'][_0x414e2e(0xe0)]=function(_0x43112e){const _0x2f7a21=_0x414e2e,_0x2bb872=VisuMZ[_0x2f7a21(0x2ad)][_0x2f7a21(0x14a)]['General'],_0x1534ff=TextManager[_0x2f7a21(0x28f)],_0x2c0114=VisuMZ[_0x2f7a21(0x2ad)][_0x2f7a21(0x1c6)],_0x528c76=_0x43112e['note'];let _0x29bc11='',_0x282825='';const _0x3dcff2=[_0x2f7a21(0x189),_0x2f7a21(0x27c),'SWITCHES',_0x2f7a21(0x17c)];for(const _0x5d1bca of _0x3dcff2){switch(_0x5d1bca){case _0x2f7a21(0x189):if(_0x528c76[_0x2f7a21(0x19a)](_0x2c0114[_0x2f7a21(0x29d)])){const _0x38fee2=Number(RegExp['$1']);_0x282825=TextManager[_0x2f7a21(0x231)]['format'](_0x38fee2,TextManager[_0x2f7a21(0x165)],TextManager[_0x2f7a21(0x253)]),_0x282825[_0x2f7a21(0x14e)]>0x0&&(_0x29bc11!==''?_0x29bc11=_0x1534ff[_0x2f7a21(0x25f)](_0x29bc11,_0x282825):_0x29bc11=_0x282825);}break;case _0x2f7a21(0x27c):if(_0x528c76[_0x2f7a21(0x19a)](_0x2c0114[_0x2f7a21(0x207)])){const _0x1ff269=String(RegExp['$1'])[_0x2f7a21(0x1d2)](',')[_0x2f7a21(0x184)](_0x19a267=>_0x19a267[_0x2f7a21(0xcb)]());;for(const _0x13b866 of _0x1ff269){let _0x1cf7a1=0x0;const _0x5d76f3=/^\d+$/[_0x2f7a21(0xda)](_0x13b866);_0x5d76f3?_0x1cf7a1=Number(_0x13b866):_0x1cf7a1=DataManager[_0x2f7a21(0xf4)](_0x13b866);if($dataSkills[_0x1cf7a1]){const _0xf544c=$dataSkills[_0x1cf7a1];_0x282825=TextManager[_0x2f7a21(0x269)][_0x2f7a21(0x25f)](_0x2f7a21(0x133)['format'](_0xf544c[_0x2f7a21(0x115)]),_0xf544c[_0x2f7a21(0x1f5)]),_0x282825['length']>0x0&&(_0x29bc11!==''?_0x29bc11=_0x1534ff['format'](_0x29bc11,_0x282825):_0x29bc11=_0x282825);}}}if(_0x528c76[_0x2f7a21(0x19a)](_0x2c0114[_0x2f7a21(0x1e4)])){const _0xf402f8=String(RegExp['$1'])[_0x2f7a21(0x1d2)](',')['map'](_0x18b3ca=>_0x18b3ca[_0x2f7a21(0xcb)]());;for(const _0x99ef39 of _0xf402f8){let _0x378b52=0x0;const _0x3248c3=/^\d+$/[_0x2f7a21(0xda)](_0x99ef39);_0x3248c3?_0x378b52=Number(_0x99ef39):_0x378b52=DataManager[_0x2f7a21(0xf4)](_0x99ef39);if($dataSkills[_0x378b52]){const _0xf9ccd2=$dataSkills[_0x378b52];_0x282825=TextManager[_0x2f7a21(0x269)][_0x2f7a21(0x25f)]('\x5cI[%1]'[_0x2f7a21(0x25f)](_0xf9ccd2[_0x2f7a21(0x115)]),_0xf9ccd2[_0x2f7a21(0x1f5)]),_0x282825[_0x2f7a21(0x14e)]>0x0&&(_0x29bc11!==''?_0x29bc11=_0x1534ff[_0x2f7a21(0x25f)](_0x29bc11,_0x282825):_0x29bc11=_0x282825);}}}break;case'SWITCHES':if(_0x528c76[_0x2f7a21(0x19a)](_0x2c0114[_0x2f7a21(0x11a)])){const _0x42ab37=String(RegExp['$1'])[_0x2f7a21(0x1d2)](',')[_0x2f7a21(0x184)](_0x428a95=>_0x428a95['trim']());;for(const _0x1a2f62 of _0x42ab37){$dataSystem[_0x2f7a21(0x25d)][_0x1a2f62]&&(_0x282825=TextManager[_0x2f7a21(0x9e)][_0x2f7a21(0x25f)]($dataSystem[_0x2f7a21(0x25d)][_0x1a2f62]||''),_0x282825[_0x2f7a21(0x14e)]>0x0&&(_0x29bc11!==''?_0x29bc11=_0x1534ff['format'](_0x29bc11,_0x282825):_0x29bc11=_0x282825));}}if(_0x528c76[_0x2f7a21(0x19a)](_0x2c0114['LearnReqSwitchesAny'])){const _0x4017bf=String(RegExp['$1'])[_0x2f7a21(0x1d2)](',')[_0x2f7a21(0x184)](_0x3ae4d7=>_0x3ae4d7[_0x2f7a21(0xcb)]());;for(const _0x287ec6 of _0x4017bf){$dataSystem[_0x2f7a21(0x25d)][_0x287ec6]&&(_0x282825=TextManager['skillLearnReqSwitchFmt']['format']($dataSystem[_0x2f7a21(0x25d)][_0x287ec6]||''),_0x282825[_0x2f7a21(0x14e)]>0x0&&(_0x29bc11!==''?_0x29bc11=_0x1534ff[_0x2f7a21(0x25f)](_0x29bc11,_0x282825):_0x29bc11=_0x282825));}}break;case'CUSTOM':const _0x4884bd=VisuMZ[_0x2f7a21(0x2ad)]['createKeyJS'](_0x43112e,_0x2f7a21(0xf6));VisuMZ[_0x2f7a21(0x2ad)]['JS'][_0x4884bd]&&(_0x282825=VisuMZ[_0x2f7a21(0x2ad)]['JS'][_0x4884bd][_0x2f7a21(0x1ad)](this,this[_0x2f7a21(0xa4)],_0x43112e),_0x282825[_0x2f7a21(0x14e)]>0x0&&(_0x29bc11!==''?_0x29bc11=_0x1534ff[_0x2f7a21(0x25f)](_0x29bc11,_0x282825):_0x29bc11=_0x282825));break;}}return _0x29bc11=TextManager['skillLearnReqHeaderFmt'][_0x2f7a21(0x25f)](_0x29bc11),_0x29bc11['trim']();},Window_SkillList[_0x414e2e(0x219)]['drawSkillLearnCost']=function(_0x35ad70,_0x4dc229,_0x224a0b,_0x212d01){const _0x209726=_0x414e2e,_0x16ff8e=this['getSkillLearnCostText'](_0x35ad70),_0x1ee692=this[_0x209726(0x281)](_0x16ff8e)['width'];_0x4dc229+=_0x212d01-_0x1ee692,this[_0x209726(0xc8)](_0x16ff8e,_0x4dc229,_0x224a0b);},Window_SkillList['prototype'][_0x414e2e(0x1e0)]=function(_0x638a51){const _0x322467=_0x414e2e;if(this['_actor']){if(DataManager[_0x322467(0x14d)](_0x638a51)&&this['_actor']['isLearnedSkill'](_0x638a51['id']))return TextManager[_0x322467(0x275)];if(DataManager[_0x322467(0xa1)](_0x638a51)&&this[_0x322467(0xa4)][_0x322467(0xb1)](_0x638a51))return TextManager[_0x322467(0x275)];}const _0x1c37d2=VisuMZ[_0x322467(0x2ad)][_0x322467(0x14a)][_0x322467(0x171)],_0x2fdbcf=TextManager[_0x322467(0x271)];let _0x3036f4='';const _0x2d1658=JsonEx[_0x322467(0x100)](_0x1c37d2[_0x322467(0x117)]);_0x2d1658[_0x322467(0x2b4)](_0x322467(0xb7));for(const _0x430697 of _0x2d1658){if(!_0x430697)continue;const _0x1fc6f1=this['createSkillLearnCostText'](_0x638a51,_0x430697)['trim']();_0x1fc6f1[_0x322467(0x14e)]>0x0&&(_0x3036f4!==''?_0x3036f4=_0x2fdbcf[_0x322467(0x25f)](_0x3036f4,_0x1fc6f1):_0x3036f4=_0x1fc6f1);}return _0x3036f4[_0x322467(0xcb)]();},Window_SkillList[_0x414e2e(0x219)][_0x414e2e(0x245)]=function(_0x397138,_0x44943f){const _0x52f3ef=_0x414e2e;let _0x121371=0x0,_0x41b5f5='',_0x4466c9='';switch(_0x44943f[_0x52f3ef(0x259)]()[_0x52f3ef(0xcb)]()){case'AP':_0x121371=DataManager['getSkillLearnAbilityPointCost'](_0x397138);if(_0x121371>0x0)return _0x41b5f5=TextManager[_0x52f3ef(0x2a7)],_0x41b5f5[_0x52f3ef(0x25f)](_0x121371,TextManager[_0x52f3ef(0x270)],_0x52f3ef(0x133)[_0x52f3ef(0x25f)](ImageManager[_0x52f3ef(0xed)]),TextManager['abilityPointsFull']);break;case'SP':_0x121371=DataManager[_0x52f3ef(0x11e)](_0x397138);if(_0x121371>0x0)return _0x41b5f5=TextManager[_0x52f3ef(0x1aa)],_0x41b5f5[_0x52f3ef(0x25f)](_0x121371,TextManager[_0x52f3ef(0x149)],_0x52f3ef(0x133)[_0x52f3ef(0x25f)](ImageManager['skillPointsIcon']),TextManager[_0x52f3ef(0x2a3)]);break;case'ITEM':_0x121371=DataManager[_0x52f3ef(0x2a8)](_0x397138),_0x41b5f5=TextManager[_0x52f3ef(0xe6)];for(const _0x1cdb27 of _0x121371){if(!_0x1cdb27)continue;const _0x29f29e=$dataItems[_0x1cdb27['id']];if(!_0x29f29e)continue;const _0x584c22=_0x41b5f5['format'](_0x1cdb27[_0x52f3ef(0xb0)],'\x5cI[%1]'[_0x52f3ef(0x25f)](_0x29f29e[_0x52f3ef(0x115)]),_0x29f29e[_0x52f3ef(0x1f5)]);_0x4466c9!==''?_0x4466c9=TextManager[_0x52f3ef(0x271)]['format'](_0x4466c9,_0x584c22):_0x4466c9=_0x584c22;}return _0x4466c9;case'WEAPON':_0x121371=DataManager[_0x52f3ef(0x202)](_0x397138),_0x41b5f5=TextManager[_0x52f3ef(0x1f8)];for(const _0x3e97cb of _0x121371){if(!_0x3e97cb)continue;const _0x30f724=$dataWeapons[_0x3e97cb['id']];if(!_0x30f724)continue;const _0x4172a3=_0x41b5f5[_0x52f3ef(0x25f)](_0x3e97cb[_0x52f3ef(0xb0)],_0x52f3ef(0x133)[_0x52f3ef(0x25f)](_0x30f724[_0x52f3ef(0x115)]),_0x30f724[_0x52f3ef(0x1f5)]);_0x4466c9!==''?_0x4466c9=TextManager['skillLearnSeparationFmt'][_0x52f3ef(0x25f)](_0x4466c9,_0x4172a3):_0x4466c9=_0x4172a3;}return _0x4466c9;case _0x52f3ef(0x2b9):_0x121371=DataManager[_0x52f3ef(0x288)](_0x397138),_0x41b5f5=TextManager[_0x52f3ef(0x256)];for(const _0xf8c0d4 of _0x121371){if(!_0xf8c0d4)continue;const _0x4a36da=$dataArmors[_0xf8c0d4['id']];if(!_0x4a36da)continue;const _0x480ddb=_0x41b5f5['format'](_0xf8c0d4[_0x52f3ef(0xb0)],_0x52f3ef(0x133)[_0x52f3ef(0x25f)](_0x4a36da[_0x52f3ef(0x115)]),_0x4a36da[_0x52f3ef(0x1f5)]);_0x4466c9!==''?_0x4466c9=TextManager[_0x52f3ef(0x271)][_0x52f3ef(0x25f)](_0x4466c9,_0x480ddb):_0x4466c9=_0x480ddb;}return _0x4466c9;case _0x52f3ef(0x146):_0x121371=DataManager[_0x52f3ef(0xb2)](_0x397138);if(_0x121371>0x0)return _0x41b5f5=TextManager['skillLearnGoldFmt'],_0x41b5f5[_0x52f3ef(0x25f)](_0x121371,Imported[_0x52f3ef(0x14f)]?_0x52f3ef(0x133)[_0x52f3ef(0x25f)](VisuMZ[_0x52f3ef(0x177)]['Settings'][_0x52f3ef(0xe2)][_0x52f3ef(0x1c1)]):TextManager[_0x52f3ef(0xb9)],TextManager[_0x52f3ef(0xb9)]);break;case _0x52f3ef(0x17c):const _0x4547b2=VisuMZ[_0x52f3ef(0x2ad)][_0x52f3ef(0x2c7)](_0x397138,_0x52f3ef(0x19b));if(VisuMZ['SkillLearnSystem']['JS'][_0x4547b2])return VisuMZ[_0x52f3ef(0x2ad)]['JS'][_0x4547b2]['call'](this,this[_0x52f3ef(0xa4)],_0x397138);break;case'CP':if(Imported[_0x52f3ef(0x255)]){_0x121371=DataManager[_0x52f3ef(0x22b)](_0x397138);if(_0x121371>0x0)return _0x41b5f5=TextManager[_0x52f3ef(0x1bf)],_0x41b5f5[_0x52f3ef(0x25f)](_0x121371,TextManager[_0x52f3ef(0xfa)],'\x5cI[%1]'[_0x52f3ef(0x25f)](ImageManager[_0x52f3ef(0x2a0)]),TextManager[_0x52f3ef(0xbe)]);break;}case'JP':if(Imported[_0x52f3ef(0x255)]){_0x121371=DataManager[_0x52f3ef(0x198)](_0x397138);if(_0x121371>0x0)return _0x41b5f5=TextManager[_0x52f3ef(0x1b7)],_0x41b5f5[_0x52f3ef(0x25f)](_0x121371,TextManager['jobPointsAbbr'],'\x5cI[%1]'['format'](ImageManager[_0x52f3ef(0x1a5)]),TextManager[_0x52f3ef(0xd2)]);break;}}return'';},Window_ActorCommand[_0x414e2e(0x219)]['isSkillLearnMode']=function(){return![];};function _0x4e09(_0x1b1b3b,_0x15856d){const _0x3ab342=_0x3ab3();return _0x4e09=function(_0x4e09ea,_0x3a73a5){_0x4e09ea=_0x4e09ea-0x9d;let _0x5b32dc=_0x3ab342[_0x4e09ea];return _0x5b32dc;},_0x4e09(_0x1b1b3b,_0x15856d);}function _0x3ab3(){const _0x1e3239=['drawSkillLearnCost','skillPointsFmt','Animations','Game_Battler_onBattleStart','call','abilityPointsVisible','Points','ClassChangeSystem','makeCommandList','destroy','SkillsStatesCore','NUM','TargetGainAbilityPoints','addCommand','jobPointsFmt','LearnShowSkillsAny','AbilityPointsLose','Game_Actor_setup','IconSet','indexOf','center','LearnGoldCost','classPointsFmt','displayRewardsAbilityPoints','GoldIcon','drawItem','drawActorClassPoints','Game_Actor_levelUp','isPlaytest','RegExp','Window_SkillList_setActor','allMembers','skillLearnReqHeaderFmt','Window','Window_SkillList_maxCols','skillLearnStypeCategory','DetailWindow_RectJS','subject','filter','processPayForSkillLearnSystem','FadeSpeed','split','_collapsedStypeIDs','drawSkillPoints','parse','removeChild','IconStypeNorm','onItemOk','calcWindowHeight','createTextJS','setupBattleTestMembers','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20text\x20=\x20\x27\x27;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Text\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20text;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','shouldDrawSkillLearnRequirements','itemLineRect','applyItemUserEffect','getSkillLearnCostText','Class-%1-%2','MaxResource','skillLearnCmd','LearnReqSkillsAny','clear','index','height','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20cost\x20=\x200;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Cost\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20cost;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','traitObjects','select','maxCols','ConvertParams','getClassIdWithName','_rewards','drawIngredients','skillLearnConfirmWindow','258564yVwOYr','_classIDs','_skillLearnIngredientsWindow','inBattle','name','UserGainSkillPoints','skillPointsTotal','skillLearnWeaponFmt','AliveActors','makeSeparatedSkillLearnList','isBattleMember','setActor','Game_Action_applyItemUserEffect','_indentSkillLearnRect','skillLearnIncludes','TargetGainSkillPoints','resetTextColor','getSkillLearnWeaponCost','faceWidth','onSkillLearnConfirmOk','makeRewards','onDatabaseLoaded','LearnReqSkillsAll','BattleManager_displayRewards','makeSkillLearnList','ARRAYFUNC','LearnShowSwitchesAny','skillPointsIcon','_skillLearnConfirmWindow','createActionJS','gainSkillPoints','getSkillLearnDisplayedCosts','jsLearnReqDetailTxt','Window_SkillStatus_refresh','toggleSkillLearnStypeCollapse','Classes','loseItem','EQUIP_PASSIVE_SYS','Armor','magicSkills','prototype','ConfirmCmd','drawJobPoints','_skillLearnAnimationWait','SeparationFmt','loseGold','ReqNotMetFmt','getJobPoints','resetFontSettings','Window_SkillType_makeCommandList','Item-%1-%2','_armorIDs','609PcCUFA','_earnedSkillPoints','isAlive','stypeCategory','updateSkillLearnAnimation','anchor','getSkillLearnClassPointCost','gainAbilityPointsForMulticlasses','setAbilityPoints','ReqSkillFmt','width','LearnApCost','skillLearnReqLevelFmt','isEnabled','skillLearnReqTitle','onSkillLearnConfirmCancel','Scene_Skill_update','playStaticSe','Actor-%1-%2','shift','processFinishSkillLearnAnimation','IngredientName','show','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Condition\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','_skillLearnBitmapSprite','_skillLearnSystem_drawItemMode','9lFdEEG','Icon','gainStartingSkillPoints','Window_SkillList_alterSkillName','earnedAbilityPoints','skillLearnStypeColor','createSkillLearnCostText','itemHeight','skillLearnConfirmCmd','initSkillLearnSystemMenuAccess','version','ITEM','itemPadding','_weaponIDs','_windowLayer','clamp','levelUpGainSkillPoints','14lhnxWQ','createVisibleJS','makeRewardsSkillPoints','levelA','sort','VisuMZ_2_ClassChangeSystem','skillLearnArmorFmt','%1\x20[-]','AbilityPointsSet','toUpperCase','shouldDrawRequirements','separateSkillLearnStypeIndent','StartingAbilityPoints','switches','ConfirmWindow_BgType','format','createSkillLearnSystemWindows','addSkillPoints','IngredientCost','skillPointsRate','PerEnemy','642922wfrboa','drawRequirements','_scene','drawActorSkillPoints','skillLearnReqSkillFmt','isSkillLearnMode','StypeCategoryColor','Skill','EVAL','createSkillLearnSkillSprite','createSkillLearnConfirmWindow','abilityPointsAbbr','skillLearnSeparationFmt','bitmap','gainSkillPointsForMulticlasses','gold','skillLearnAlreadyLearned','ReqSeparateFmt','commandName','actor','_itemWindow','getItemIdWithName','Item','SKILLS','jsLearnShow','skillPoints','_skillLearnAnimationPlaying','reduce','textSizeEx','initAbilityPoints','HideLearned','MenuAccess','StartClassAbilityPoints','commandStyle','drawTextExCenterAlign','getSkillLearnArmorCost','passives','displayRewards','isPlaying','max','drawItemName','applyAbilityPoints','skillLearnReqSeparatorFmt','getSkillPoints','ParseAllNotetags','skillLearn','numItems','skillLearnReqMet','onSkillLearnCollapseStypeID','<Color:\x20%1>','remove','registerCommand','skillLearnCancelCmd','Window_SkillList_itemLineRect','SharedResource','LearnReqSwitchesAny','LearnReqLevel','LearnSpCost','separateSkillLearnByStypeID','classPointsIcon','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20visible\x20=\x20true;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Visible\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','SeparateExpandFmt','skillPointsFull','Scene_Boot_onDatabaseLoaded','skillLearnStypeCategoryCollapse','log','abilityPointsFmt','getSkillLearnItemCost','setFrame','makeSkillLearnStypeCategory','Game_Party_setupBattleTestMembers','process_VisuMZ_SkillLearnSystem_Notetags','SkillLearnSystem','Sound','_skillLearnIconSprite','bind','setSkillLearnSkillSpriteFrame','skillLearnIngredientsWindowRect','stypeId','push','createSkillLearnIngredientsWindow','Actors','destroySkillLearnSprite','FullText','ARMOR','LearnCpCost','isSkillLearnEnabled','smoothSelect','value','changePaintOpacity','PerLevelUp','setSkillPoints','earnedSkillPoints','_data','scale','cancel','%1%2','ceil','createKeyJS','Ability','innerHeight','bigPicture','initSkillPoints','applyItemSkillLearnSystemUserEffect','jsLearnSpCost','drawSkillLearnRequirements','addChild','Window_SkillList_setStypeId','ARRAYJSON','SkillPointsGain','setSkillLearnSkillSpriteBitmap','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','ARRAYSTRUCT','_skillLearnIconSpriteOpacitySpeed','skillLearnReqSwitchFmt','631880jDRfqz','onLoadBattleTestSkillLearnSystem','isState','SkillPointsRate','getAbilityPoints','_actor','optExtraExp','gainStartingAbilityPoints','contents','hide','newPage','ArmorFmt','applySkillLearnSystemUserEffect','AbilityPointsAdd','skillLearnIcon','setSkillLearnSkillSpritePosition','DetailWindow_BgType','quantity','isLearnedEquippedPassive','getSkillLearnGoldCost','onSkillLearnItemOk','_skillIDs','RequirementTitle','_earnedAbilityPoints','Custom','SkillPointsLose','currencyUnit','playSkillLearn','Window_SkillList_includes','right','currentClass','classPointsFull','getSkillLearnAbilityPointCost','refresh','makeSkillLearnPassivesList','getArmorIdWithName','ReqSwitchFmt','lineHeight','Show','changeClass','getWeaponIdWithName','drawTextEx','SeparateCategoryFmt','VisuMZ_2_EquipPassiveSys','trim','meetRequirementsForSkillLearnSystem','skillLearnReqNotMet','LearnItemCost','jsLearnJpCost','isLearnedSkill','frames','jobPointsFull','Weapon-%1-%2','update','DefaultCost','gainAbilityPoints','getEquipPassiveName','jsLearnCpCost','Window_SkillList_isEnabled','test','Window_SkillList_drawItem','JobPoints','drawActorFace','Weapon','2018140GBtEqP','getSkillLearnRequirementText','SkillPoints','Gold','skillLearningName','setupBattleTestMembersSkillLearnSystem','makeRewardsAbilityPoints','skillLearnItemFmt','STRUCT','jsLearnShowDetailTxt','skillLearnReqListSkill','itemWindowRect','drawCurrencyValue','skillLearnStypeCategoryExpand','abilityPointsIcon','canPayForSkillLearnSystem','Game_Actor_changeClass','loseJobPoints','round','ShowVictory','learnPicture','getSkillIdWithName','currentSymbol','jsLearnReqListTxt','drawTextExRightAlign','skillLearnGoldFmt','gainMulticlassRewardPoints','classPointsAbbr','abilityPointsTotal','add','innerWidth','Scene_Skill_onItemOk','drawAbilityPoints','makeDeepCopy','skillLearningTitle','STR','Parse_Notetags_CreateJS','createSkillLearnAnimationIDs','_SkillLearnSystem_MenuAccess','abilityPointsFull','2367925dpgOfL','_itemIDs','ARRAYEVAL','getEquipPassiveIcon','_skillLearnAnimationIDs','status','finishSkillLearnAnimation','isActor','loseClassPoints','_skillPoints','min','ConfirmWindow_RectJS','FUNC','createCostJS','iconIndex','ReqLevelFmt','DisplayedCosts','addWindow','UserGainAbilityPoints','LearnReqSwitchesAll','setup','%1\x20[+]','applySkillPoints','getSkillLearnSkillPointCost','isTriggered','updateSkillLearnAnimationSprite','LearnCostBatch','SeparateByStypeID','AbbrText','AbilityPoints','initialize','gainRewardsSkillPoints','learnSkill','abilityPointsRate','jsLearnApCost','drawSkillCost','SystemShowSkillLearnSystemMenu','LearnWeaponCost','item','setBackgroundType','Animation','SkillPointsAdd','gainRewardsAbilityPoints','autoRemovalTiming','\x5cI[%1]','_skillLearnAnimationSprite','isSkillLearnSystemMenuAccess','ShowWindows','drawActorJobPoints','activate','alterSkillName','startSkillLearnAnimation','TextFmt','addAbilityPoints','iconHeight','isConfirmEnabled','_abilityPoints','_learnPicture','EnemyAbilityPoints','WeaponFmt','ParseSkillNotetags','isMVAnimation','drawActorSimpleStatus','GOLD','opacitySpeed','skillLearnSystemCommandName','skillPointsAbbr','Settings','levelUp','ClassPoints','isSkill','length','VisuMZ_0_CoreEngine','visible','members','addSkillLearnSystemCommand','setHandler','updateSkillLearnSpriteOpacity','Window_SkillList_initialize','\x5cI[%1]%2','left','note','floor','jsOnLearn','concat','refreshSkillLearnSystem','loseSkillPoints','return\x200','user','skillPointsVisible','loadPicture','levelUpGainAbilityPoints','colSpacing','drawActorAbilityPoints','level','parameters','RequireFmt','abilityPoints','createSkillLearnAnimation','LearnShowLevel','StartingSkillPoints','ReqMetFmt','LearnJpCost','enemy','Window_SkillList_drawSkillCost','StartClassSkillPoints','General','_statusWindow','SortByIDandPriorityUsingIDs','LearnSkillB','getSkillLearnSkillsFromClass','learnEquippedPassive','CoreEngine','isFinishedSkillLearnAnimating','playOkSound','skillLearnReqListLevel','jsLearnReq','CUSTOM','_SkillLearnSystem_preventLevelUpGain','Game_Actor_learnSkill','LearningTitle','pop','LearnArmorCost','includes','loseAbilityPoints','map','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20','setSkillLearnSkillSpriteOpacity','Scene_Skill_create','skillLearningCost','LEVEL','getSkillLearnPassiveSkillsFromClass','Window_SkillList_makeItemList','280134jLZagH','destroySkillLearnAnimationSprite','replace','VictoryText','create','displayRewardsSkillPoints','Game_System_initialize','createConditionJS','onBattleStart','CancelCmd','PerAction','constructor','getSkillLearnJobPointCost','maxTurns','match','jsLearnShowListTxt','iconWidth','IngredientOwned','opacity','AbilityPointsRate','getClassPoints','isCommandEnabled','68504vOsJGj','skillTypes','deadMembers','jobPointsIcon','BattleManager_makeRewards','smooth','exit'];_0x3ab3=function(){return _0x1e3239;};return _0x3ab3();}function Window_SkillLearnIngredients(){const _0x37f756=_0x414e2e;this[_0x37f756(0x125)](...arguments);}Window_SkillLearnIngredients[_0x414e2e(0x219)]=Object[_0x414e2e(0x190)](Window_Base['prototype']),Window_SkillLearnIngredients['prototype'][_0x414e2e(0x197)]=Window_SkillLearnIngredients,Window_SkillLearnIngredients[_0x414e2e(0x219)][_0x414e2e(0x125)]=function(_0x5ac2b1){const _0x582ac9=_0x414e2e;Window_Base[_0x582ac9(0x219)][_0x582ac9(0x125)][_0x582ac9(0x1ad)](this,_0x5ac2b1);},Window_SkillLearnIngredients['prototype'][_0x414e2e(0xc0)]=function(){const _0x187f3e=_0x414e2e;this[_0x187f3e(0xa7)][_0x187f3e(0x1e5)](),this[_0x187f3e(0x221)](),this[_0x187f3e(0x25a)]()?this[_0x187f3e(0x266)]():this[_0x187f3e(0x1ef)]();},Window_SkillLearnIngredients['prototype'][_0x414e2e(0x287)]=function(_0x561422,_0x38da48,_0x131bb8,_0x302a1d){const _0x2a10a7=_0x414e2e,_0x438019=this[_0x2a10a7(0x281)](_0x561422)[_0x2a10a7(0x22f)],_0x2d508f=_0x38da48+Math[_0x2a10a7(0xf1)]((_0x302a1d-_0x438019)/0x2);this[_0x2a10a7(0xc8)](_0x561422,_0x2d508f,_0x131bb8);},Window_SkillLearnIngredients[_0x414e2e(0x219)][_0x414e2e(0xf7)]=function(_0x413433,_0x1a4ad5,_0x3abe46,_0x38e441){const _0x23d2e=_0x414e2e,_0x586c84=this[_0x23d2e(0x281)](_0x413433)[_0x23d2e(0x22f)],_0x24c9b6=_0x1a4ad5+Math[_0x23d2e(0xf1)](_0x38e441-_0x586c84);this['drawTextEx'](_0x413433,_0x24c9b6,_0x3abe46);},Window_SkillLearnIngredients[_0x414e2e(0x219)][_0x414e2e(0x25a)]=function(){const _0x16b098=_0x414e2e,_0x10495e=SceneManager[_0x16b098(0x267)][_0x16b098(0x12d)](),_0x3ef293=SceneManager['_scene'][_0x16b098(0x15f)]();return _0x3ef293&&!_0x3ef293[_0x16b098(0xcc)](_0x10495e);},Window_SkillLearnIngredients[_0x414e2e(0x219)][_0x414e2e(0x266)]=function(){const _0x5e4bcd=_0x414e2e,_0x568dac=SceneManager[_0x5e4bcd(0x267)][_0x5e4bcd(0x12d)](),_0x20c537=VisuMZ['SkillLearnSystem']['RegExp'],_0x3f5c56=_0x568dac[_0x5e4bcd(0x158)],_0x2e9b82=SceneManager['_scene'][_0x5e4bcd(0x15f)](),_0x467706=this[_0x5e4bcd(0xc4)](),_0x417d8d=TextManager[_0x5e4bcd(0x294)],_0x5063a2=TextManager[_0x5e4bcd(0xcd)];let _0x5aaaa8=0x0,_0x168019=0x0;const _0x3262c0=_0x5e4bcd(0x133)['format'](_0x568dac[_0x5e4bcd(0x115)]),_0x4526d8=TextManager['skillLearnReqTitle'][_0x5e4bcd(0x25f)](_0x3262c0,_0x568dac[_0x5e4bcd(0x1f5)]);this[_0x5e4bcd(0x287)](_0x4526d8,_0x5aaaa8,_0x168019,this[_0x5e4bcd(0xfd)]),_0x168019+=Math[_0x5e4bcd(0xf1)](_0x467706*1.5);let _0x17bd97='';if(_0x3f5c56[_0x5e4bcd(0x19a)](_0x20c537[_0x5e4bcd(0x29d)])){const _0x49fbd8=Number(RegExp['$1']),_0x48d778=TextManager[_0x5e4bcd(0x17a)][_0x5e4bcd(0x25f)](_0x49fbd8,TextManager[_0x5e4bcd(0x165)],TextManager['levelA']),_0x2c9872=_0x2e9b82['level']>=_0x49fbd8?_0x417d8d:_0x5063a2;_0x17bd97+=_0x2c9872[_0x5e4bcd(0x25f)](_0x48d778)+'\x0a';}if(_0x3f5c56[_0x5e4bcd(0x19a)](_0x20c537['LearnReqSkillsAll'])){const _0x13f3e2=String(RegExp['$1'])['split'](',')[_0x5e4bcd(0x184)](_0x455ff2=>_0x455ff2[_0x5e4bcd(0xcb)]());;for(const _0x261e7c of _0x13f3e2){let _0x2634e4=0x0;const _0x1c4d4f=/^\d+$/['test'](_0x261e7c);_0x1c4d4f?_0x2634e4=Number(_0x261e7c):_0x2634e4=DataManager[_0x5e4bcd(0xf4)](_0x261e7c);const _0x2075cc=$dataSkills[_0x2634e4];if(_0x2075cc){const _0x3e572e=TextManager['skillLearnReqListSkill'][_0x5e4bcd(0x25f)](_0x5e4bcd(0x133)[_0x5e4bcd(0x25f)](_0x2075cc['iconIndex']),_0x2075cc[_0x5e4bcd(0x1f5)]),_0x18de79=_0x2e9b82['isLearnedSkill'](_0x2634e4)?_0x417d8d:_0x5063a2;_0x17bd97+=_0x18de79[_0x5e4bcd(0x25f)](_0x3e572e)+'\x0a';}}}if(_0x3f5c56[_0x5e4bcd(0x19a)](_0x20c537[_0x5e4bcd(0x1e4)])){const _0x3eb060=String(RegExp['$1'])[_0x5e4bcd(0x1d2)](',')[_0x5e4bcd(0x184)](_0x1c525c=>_0x1c525c['trim']());;for(const _0x3fa643 of _0x3eb060){let _0xcf2df7=0x0;const _0x4cb7be=/^\d+$/[_0x5e4bcd(0xda)](_0x3fa643);_0x4cb7be?_0xcf2df7=Number(_0x3fa643):_0xcf2df7=DataManager[_0x5e4bcd(0xf4)](_0x3fa643);const _0x36bd17=$dataSkills[_0xcf2df7];if(_0x36bd17){const _0x467c12=TextManager[_0x5e4bcd(0xe9)][_0x5e4bcd(0x25f)](_0x5e4bcd(0x133)['format'](_0x36bd17[_0x5e4bcd(0x115)]),_0x36bd17[_0x5e4bcd(0x1f5)]),_0x456d4c=_0x2e9b82[_0x5e4bcd(0xd0)](_0xcf2df7)?_0x417d8d:_0x5063a2;_0x17bd97+=_0x456d4c[_0x5e4bcd(0x25f)](_0x467c12)+'\x0a';}}}if(_0x3f5c56[_0x5e4bcd(0x19a)](_0x20c537[_0x5e4bcd(0x11a)])){const _0x24483f=String(RegExp['$1'])['split'](',')[_0x5e4bcd(0x184)](_0x2280c8=>Number(_0x2280c8));for(const _0x49f6a5 of _0x24483f){const _0x3aee1b=$dataSystem[_0x5e4bcd(0x25d)][_0x49f6a5],_0x1d10b4=$gameSwitches[_0x5e4bcd(0x2bd)](_0x49f6a5)?_0x417d8d:_0x5063a2;_0x17bd97+=_0x1d10b4[_0x5e4bcd(0x25f)](_0x3aee1b)+'\x0a';}}if(_0x3f5c56[_0x5e4bcd(0x19a)](_0x20c537[_0x5e4bcd(0x29c)])){const _0xab28f5=String(RegExp['$1'])[_0x5e4bcd(0x1d2)](',')['map'](_0x32a896=>Number(_0x32a896));for(const _0x1d1dbd of _0xab28f5){const _0x5dc607=$dataSystem[_0x5e4bcd(0x25d)][_0x1d1dbd],_0x140b27=$gameSwitches[_0x5e4bcd(0x2bd)](_0x1d1dbd)?_0x417d8d:_0x5063a2;_0x17bd97+=_0x140b27['format'](_0x5dc607)+'\x0a';}}const _0x46ff08=VisuMZ[_0x5e4bcd(0x2ad)][_0x5e4bcd(0x2c7)](_0x568dac,'jsLearnReqDetailTxt');if(VisuMZ[_0x5e4bcd(0x2ad)]['JS'][_0x46ff08]){const _0x3cdcd9=VisuMZ[_0x5e4bcd(0x2ad)]['JS'][_0x46ff08][_0x5e4bcd(0x1ad)](this,_0x2e9b82,_0x568dac);_0x17bd97+=_0x3cdcd9+'\x0a';}this[_0x5e4bcd(0x287)](_0x17bd97,_0x5aaaa8,_0x168019,this['innerWidth']);},Window_SkillLearnIngredients[_0x414e2e(0x219)][_0x414e2e(0x1ef)]=function(){const _0x34c435=_0x414e2e,_0x219763=SceneManager[_0x34c435(0x267)][_0x34c435(0x12d)](),_0x40b286=SceneManager[_0x34c435(0x267)]['user'](),_0x1009a2=this[_0x34c435(0x210)]();let _0xb195f5=0x0,_0x34a8d3=0x0;const _0x16af7e=this[_0x34c435(0xc4)](),_0x1670ad=Math[_0x34c435(0xf1)](this[_0x34c435(0xfd)]/0x2),_0x4cec0f=Math['round'](this[_0x34c435(0xfd)]/0x4),_0x1c8fd8=0x0,_0x36ca01=_0x1670ad,_0x5dabac=_0x1670ad+_0x4cec0f;let _0x313aad=_0x34c435(0x133)['format'](_0x219763[_0x34c435(0x115)]),_0x4183d1=_0x219763[_0x34c435(0x1f5)];Imported[_0x34c435(0xca)]&&DataManager[_0x34c435(0xa1)](_0x219763)&&(_0x313aad=_0x34c435(0x133)['format'](DataManager[_0x34c435(0x10a)](_0x219763)),_0x4183d1=DataManager[_0x34c435(0xd7)](_0x219763));let _0x55e1a9=TextManager[_0x34c435(0x101)][_0x34c435(0x25f)](_0x313aad,_0x4183d1);this[_0x34c435(0x287)](_0x55e1a9,_0xb195f5,_0x34a8d3,this[_0x34c435(0xfd)]),_0x34a8d3+=_0x16af7e,this[_0x34c435(0x287)](TextManager[_0x34c435(0xe3)],_0x1c8fd8,_0x34a8d3,_0x1670ad),this['drawTextExCenterAlign'](TextManager['skillLearningCost'],_0x36ca01,_0x34a8d3,_0x4cec0f),this['drawTextExCenterAlign'](TextManager['skillLearningOwned'],_0x5dabac,_0x34a8d3,_0x4cec0f),_0x34a8d3+=_0x16af7e;const _0x1b87e7=_0x1c8fd8+this['itemPadding']();for(const _0x550c25 of _0x1009a2){this['resetFontSettings']();let _0xe1a1e1='',_0x27f10e=0x0,_0x3af934=0x0,_0x3c350f='';switch(_0x550c25[_0x34c435(0x259)]()['trim']()){case'AP':_0x27f10e=DataManager['getSkillLearnAbilityPointCost'](_0x219763);if(_0x27f10e<=0x0)continue;this['drawAbilityPoints'](_0x27f10e,_0x36ca01,_0x34a8d3,_0x4cec0f,_0x34c435(0xbc)),_0xe1a1e1=_0x34c435(0x156)['format'](ImageManager[_0x34c435(0xed)],TextManager['abilityPointsFull']),this[_0x34c435(0xc8)](_0xe1a1e1,_0x1b87e7,_0x34a8d3),_0x3af934=_0x40b286[_0x34c435(0xa3)](),this['drawAbilityPoints'](_0x3af934,_0x5dabac,_0x34a8d3,_0x4cec0f-this['itemPadding'](),_0x34c435(0xbc));break;case'SP':_0x27f10e=DataManager[_0x34c435(0x11e)](_0x219763);if(_0x27f10e<=0x0)continue;this['drawSkillPoints'](_0x27f10e,_0x36ca01,_0x34a8d3,_0x4cec0f,_0x34c435(0xbc)),_0xe1a1e1=_0x34c435(0x156)[_0x34c435(0x25f)](ImageManager[_0x34c435(0x20c)],TextManager[_0x34c435(0x2a3)]),this[_0x34c435(0xc8)](_0xe1a1e1,_0x1b87e7,_0x34a8d3),_0x3af934=_0x40b286[_0x34c435(0x290)](),this[_0x34c435(0x1d4)](_0x3af934,_0x5dabac,_0x34a8d3,_0x4cec0f-this[_0x34c435(0x24b)](),'right');break;case _0x34c435(0x146):_0x27f10e=DataManager[_0x34c435(0xb2)](_0x219763);if(_0x27f10e<=0x0)continue;this[_0x34c435(0xeb)](_0x27f10e,TextManager[_0x34c435(0xb9)],_0x36ca01,_0x34a8d3,_0x4cec0f);const _0x585f78=Imported[_0x34c435(0x14f)]?_0x34c435(0x133)[_0x34c435(0x25f)](VisuMZ[_0x34c435(0x177)][_0x34c435(0x14a)][_0x34c435(0xe2)]['GoldIcon']):TextManager['currencyUnit'];_0xe1a1e1=_0x34c435(0x2c5)[_0x34c435(0x25f)](_0x585f78,TextManager[_0x34c435(0xb9)]),this[_0x34c435(0xc8)](_0xe1a1e1,_0x1b87e7,_0x34a8d3),_0x3af934=$gameParty[_0x34c435(0x274)](),this['drawCurrencyValue'](_0x3af934,TextManager[_0x34c435(0xb9)],_0x5dabac,_0x34a8d3,_0x4cec0f-this[_0x34c435(0x24b)]());break;case _0x34c435(0x24a):const _0x4ce4dd=DataManager['getSkillLearnItemCost'](_0x219763);if(_0x4ce4dd[_0x34c435(0x14e)]<=0x0)continue;for(const _0x336941 of _0x4ce4dd){if(!_0x336941)continue;const _0x5d7eac=$dataItems[_0x336941['id']];_0x3c350f=TextManager[_0x34c435(0xe6)],this[_0x34c435(0x28d)](_0x5d7eac,_0x1b87e7,_0x34a8d3,_0x1670ad-_0x1b87e7),_0xe1a1e1=_0x3c350f['format'](_0x336941[_0x34c435(0xb0)],_0x34c435(0x133)['format'](_0x5d7eac[_0x34c435(0x115)]),_0x5d7eac[_0x34c435(0x1f5)]),this[_0x34c435(0xf7)](_0xe1a1e1,_0x36ca01,_0x34a8d3,_0x4cec0f),_0xe1a1e1=_0x3c350f['format']($gameParty['numItems'](_0x5d7eac),'\x5cI[%1]'[_0x34c435(0x25f)](_0x5d7eac[_0x34c435(0x115)]),_0x5d7eac[_0x34c435(0x1f5)]),this[_0x34c435(0xf7)](_0xe1a1e1,_0x5dabac,_0x34a8d3,_0x4cec0f-this[_0x34c435(0x24b)]()),_0x34a8d3+=_0x16af7e;if(_0x34a8d3+_0x16af7e>this[_0x34c435(0x2c9)])return;}continue;break;case'WEAPON':const _0x26122e=DataManager['getSkillLearnWeaponCost'](_0x219763);if(_0x26122e[_0x34c435(0x14e)]<=0x0)continue;for(const _0x136d80 of _0x26122e){if(!_0x136d80)continue;const _0xdfc295=$dataWeapons[_0x136d80['id']];_0x3c350f=TextManager[_0x34c435(0x1f8)],this[_0x34c435(0x28d)](_0xdfc295,_0x1b87e7,_0x34a8d3,_0x1670ad-_0x1b87e7),_0xe1a1e1=_0x3c350f[_0x34c435(0x25f)](_0x136d80[_0x34c435(0xb0)],_0x34c435(0x133)[_0x34c435(0x25f)](_0xdfc295[_0x34c435(0x115)]),_0xdfc295['name']),this['drawTextExRightAlign'](_0xe1a1e1,_0x36ca01,_0x34a8d3,_0x4cec0f),_0xe1a1e1=_0x3c350f[_0x34c435(0x25f)]($gameParty['numItems'](_0xdfc295),_0x34c435(0x133)[_0x34c435(0x25f)](_0xdfc295[_0x34c435(0x115)]),_0xdfc295[_0x34c435(0x1f5)]),this[_0x34c435(0xf7)](_0xe1a1e1,_0x5dabac,_0x34a8d3,_0x4cec0f-this[_0x34c435(0x24b)]()),_0x34a8d3+=_0x16af7e;if(_0x34a8d3+_0x16af7e>this[_0x34c435(0x2c9)])return;}continue;break;case'ARMOR':const _0x1ea4fe=DataManager[_0x34c435(0x288)](_0x219763);if(_0x1ea4fe['length']<=0x0)continue;for(const _0xb7099 of _0x1ea4fe){if(!_0xb7099)continue;const _0x4dc48c=$dataArmors[_0xb7099['id']];_0x3c350f=TextManager['skillLearnArmorFmt'],this[_0x34c435(0x28d)](_0x4dc48c,_0x1b87e7,_0x34a8d3,_0x1670ad-_0x1b87e7),_0xe1a1e1=_0x3c350f['format'](_0xb7099['quantity'],_0x34c435(0x133)[_0x34c435(0x25f)](_0x4dc48c[_0x34c435(0x115)]),_0x4dc48c[_0x34c435(0x1f5)]),this[_0x34c435(0xf7)](_0xe1a1e1,_0x36ca01,_0x34a8d3,_0x4cec0f),_0xe1a1e1=_0x3c350f['format']($gameParty[_0x34c435(0x293)](_0x4dc48c),_0x34c435(0x133)[_0x34c435(0x25f)](_0x4dc48c[_0x34c435(0x115)]),_0x4dc48c[_0x34c435(0x1f5)]),this[_0x34c435(0xf7)](_0xe1a1e1,_0x5dabac,_0x34a8d3,_0x4cec0f-this[_0x34c435(0x24b)]()),_0x34a8d3+=_0x16af7e;if(_0x34a8d3+_0x16af7e>this[_0x34c435(0x2c9)])return;}continue;break;case _0x34c435(0x17c):const _0x5ec717=VisuMZ[_0x34c435(0x2ad)]['createKeyJS'](_0x219763,'jsLearnShowDetailTxt');if(VisuMZ[_0x34c435(0x2ad)]['JS'][_0x5ec717])_0xe1a1e1=VisuMZ[_0x34c435(0x2ad)]['JS'][_0x5ec717][_0x34c435(0x1ad)](this,_0x40b286,_0x219763),this['drawTextEx'](_0xe1a1e1,_0x1b87e7,_0x34a8d3);else continue;break;case'CP':if(Imported['VisuMZ_2_ClassChangeSystem']){_0x27f10e=DataManager[_0x34c435(0x22b)](_0x219763)||0x0;if(_0x27f10e<=0x0)continue;this['drawClassPoints'](_0x27f10e,_0x36ca01,_0x34a8d3,_0x4cec0f,_0x34c435(0xbc)),_0xe1a1e1=_0x34c435(0x156)[_0x34c435(0x25f)](ImageManager['classPointsIcon'],TextManager[_0x34c435(0xbe)]),this[_0x34c435(0xc8)](_0xe1a1e1,_0x1b87e7,_0x34a8d3),_0x3af934=_0x40b286[_0x34c435(0x1a0)](),this['drawClassPoints'](_0x3af934,_0x5dabac,_0x34a8d3,_0x4cec0f-this['itemPadding'](),_0x34c435(0xbc));}else continue;break;case'JP':if(Imported[_0x34c435(0x255)]){_0x27f10e=DataManager[_0x34c435(0x198)](_0x219763)||0x0;if(_0x27f10e<=0x0)continue;this[_0x34c435(0x21b)](_0x27f10e,_0x36ca01,_0x34a8d3,_0x4cec0f,_0x34c435(0xbc)),_0xe1a1e1=_0x34c435(0x156)[_0x34c435(0x25f)](ImageManager[_0x34c435(0x1a5)],TextManager[_0x34c435(0xd2)]),this[_0x34c435(0xc8)](_0xe1a1e1,_0x1b87e7,_0x34a8d3),_0x3af934=_0x40b286['getJobPoints'](),this[_0x34c435(0x21b)](_0x3af934,_0x5dabac,_0x34a8d3,_0x4cec0f-this[_0x34c435(0x24b)](),_0x34c435(0xbc));}else continue;break;default:continue;}_0x34a8d3+=_0x16af7e;if(_0x34a8d3+_0x16af7e>this[_0x34c435(0x2c9)])return;}},Window_SkillLearnIngredients[_0x414e2e(0x219)]['getSkillLearnDisplayedCosts']=function(){const _0x4fa678=_0x414e2e,_0x567333=JsonEx[_0x4fa678(0x100)](VisuMZ[_0x4fa678(0x2ad)][_0x4fa678(0x14a)][_0x4fa678(0x171)][_0x4fa678(0x117)]);return _0x567333[_0x4fa678(0x2b4)](_0x4fa678(0xb7)),_0x567333;},Window_SkillLearnIngredients['prototype']['showVisualGoldDisplay']=function(){return![];};function Window_SkillLearnConfirm(){this['initialize'](...arguments);}Window_SkillLearnConfirm['prototype']=Object[_0x414e2e(0x190)](Window_HorzCommand[_0x414e2e(0x219)]),Window_SkillLearnConfirm[_0x414e2e(0x219)][_0x414e2e(0x197)]=Window_SkillLearnConfirm,Window_SkillLearnConfirm['prototype'][_0x414e2e(0x125)]=function(_0x18ff3d){const _0x1ee723=_0x414e2e;Window_HorzCommand[_0x1ee723(0x219)][_0x1ee723(0x125)]['call'](this,_0x18ff3d);},Window_SkillLearnConfirm[_0x414e2e(0x219)][_0x414e2e(0x1eb)]=function(){return 0x2;},Window_SkillLearnConfirm[_0x414e2e(0x219)][_0x414e2e(0x246)]=function(){const _0x2e127d=_0x414e2e;return this[_0x2e127d(0x2c9)];},Window_SkillLearnConfirm[_0x414e2e(0x219)][_0x414e2e(0x1b1)]=function(){const _0x859da1=_0x414e2e;this[_0x859da1(0x1b6)](TextManager['skillLearnConfirmCmd'],'ok',this[_0x859da1(0x13e)]()),this['addCommand'](TextManager['skillLearnCancelCmd'],_0x859da1(0x2c4));},Window_SkillLearnConfirm[_0x414e2e(0x219)]['isConfirmEnabled']=function(){const _0x3f6199=_0x414e2e,_0x55dfc2=SceneManager['_scene'];if(!_0x55dfc2)return![];const _0x123e1e=_0x55dfc2[_0x3f6199(0x15f)]();if(!_0x123e1e)return![];const _0xbb7c09=_0x55dfc2[_0x3f6199(0x12d)]();if(!_0xbb7c09)return![];if(!_0x123e1e['meetRequirementsForSkillLearnSystem'](_0xbb7c09))return![];return _0x123e1e[_0x3f6199(0xee)](_0xbb7c09);},Window_SkillLearnConfirm[_0x414e2e(0x219)][_0x414e2e(0x1c2)]=function(_0x5b760b){const _0x19cc18=_0x414e2e,_0x53a7fa=this[_0x19cc18(0x1de)](_0x5b760b);this[_0x19cc18(0x201)](),this[_0x19cc18(0x2be)](this[_0x19cc18(0x1a1)](_0x5b760b));const _0x3da0f3=this[_0x19cc18(0x277)](_0x5b760b),_0x5c3ec7=this[_0x19cc18(0x281)](_0x3da0f3)[_0x19cc18(0x22f)];_0x53a7fa['x']+=Math[_0x19cc18(0xf1)]((_0x53a7fa[_0x19cc18(0x22f)]-_0x5c3ec7)/0x2),this['drawTextEx'](_0x3da0f3,_0x53a7fa['x'],_0x53a7fa['y'],_0x5c3ec7);},Window_SkillLearnConfirm[_0x414e2e(0x219)][_0x414e2e(0x179)]=function(){const _0x1d594c=_0x414e2e;if(this[_0x1d594c(0xf5)]()==='ok'){}else Window_HorzCommand[_0x1d594c(0x219)]['playOkSound']['call'](this);};