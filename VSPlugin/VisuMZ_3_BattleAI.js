//=============================================================================
// VisuStella MZ - Battle A.I.
// VisuMZ_3_BattleAI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_BattleAI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleAI = VisuMZ.BattleAI || {};
VisuMZ.BattleAI.version = 1.25;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.25] [BattleAI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_AI_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This Battle A.I. plugin changes up how enemies and any Auto Battle actors
 * behave by implementing many new key components to their decision making
 * process in battle. These new compotents are: A.I. Styles, A.I. Levels, 
 * Rating Variance, A.I. Conditions, and Influencing TGR Weight.
 *
 * With these new key components put together, you can transform RPG Maker MZ's
 * highly primitive A.I. into something more intelligent. Auto Battle actors
 * can also base their A.I. patterns off an enemy's A.I. in order to behave in
 * more desirable ways during battle as well.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Different A.I. Styles to allow for various ways to setup enemy A.I.
 * * Set A.I. Levels for enemies and Auto Battle actors.
 * * A.I. Levels can be set on a global scale or individual scale.
 * * Set rating variance levels to prioritize actions or randomize them.
 * * These include notetags to change them on a per individual basis.
 * * Create action conditions to make certain skills usable by the A.I. under
 *   specific circumstances.
 * * Action conditions are split between 'ALL' and 'ANY' types which require
 *   either all conditions to be met or at least one condition to be met.
 * * A large selection of condition notetags to use to help customize the best
 *   case situations on when to use a skill and which target to pick.
 * * Default condition settings can be made in the Plugin Parameters to make an
 *   entire database of skills become conditional for A.I. usage.
 * * Influence TGR weight to make certain targets more desirable for specific
 *   types of actions.
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
 * - VisuMZ_1_BattleCore
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Auto Battle A.I. for Actors
 *
 * - With this plugin, there is an option to let certain classes reference
 * specific enemy A.I. patterns to decide which skills to use during battle.
 * If the reference option is not used, the actor will use default Auto Battle
 * evaluations to determine which skills to use instead.
 *
 * ---
 * 
 * A.I. Styles
 * 
 * - There are currently four different A.I. Styles. Actors and enemies can
 * default to a different one globally, or changed individually using notetags.
 * Read more about them in the A.I. Styles section.
 * 
 * ---
 *
 * A.I. Levels
 *
 * - Enemies and actors can be given different A.I. Levels. The higher one's
 * A.I. Level, the more they are to follow conditions. With Level 100 A.I.
 * Level, an A.I. will never disobey a condition. On the other hand, lower
 * A.I. Levels may possibly ignore certain conditions and act as if they are
 * fulfilled.
 *
 * ---
 *
 * A.I. Rating Variance
 *
 * - In the RPG Maker database editor, when deciding an enemy's Action Patterns
 * you can decide on the action's "rating". The rating is a value from 1 to 9
 * where 9 gets the highest priority and 1 gets the lowest. RPG Maker, by
 * default, will sometimes dip the rating a few levels lower to allow lower
 * ratings and bypass the priority system.
 *
 * - This plugin allows you to set the variance level through Plugin Parameters
 * on a global scale or notetags on an individual basis to allow for larger,
 * smaller, or no variance on ratings at all.
 *
 * ---
 *
 * A.I. Conditions for Skill Usage
 *
 * - Enemies and any actors that use Auto Battle A.I. with a reference can only
 * use certain skills as long as specific conditions have been met. These
 * conditions are split between 'ALL' condition sets and 'ANY' condition sets.
 *
 * - 'ALL' condition sets require all of the set's conditions to be met in
 * order for the skill to be used by the A.I.
 *
 * - 'ANY' condition sets require at least one of the set's conditions to be
 * met in order for the skill to be used by the A.I.
 *
 * - A variety of conditions can be inserted into each condition set to make
 * for some very specific usage conditions. These will also help filter out
 * which targets to pick from, too.
 *
 * ---
 *
 * TGR Weight on A.I. Target Selection
 *
 * - TGR is a special parameter in RPG Maker MZ that represents "Target Rate".
 * The higher one's TGR, the more likely they are to become the target of an
 * attack. This plugin allows various things to influence the TGR weight to
 * make certain targets more likely to be targets for attack.
 *
 * - Elemental influence rates on the TGR weight mean that if a target receives
 * more damage from an elemental attack, the TGR weight becomes higher for that
 * skill when determining a target. The higher the elemental damage received,
 * the more the TGR weight shifts upward.
 *
 * - Evasion and Magic Evasion rates do the opposite. The higher a potential
 * target's evasion and magic evasion rate is (for physical and magical skills)
 * the lower the TGR weight becomes for that potential target.
 *
 * - By default Plugin Parameter settings, TGR weight shifting requires the
 * enemy troop to have "knowledge" on the party's element rates, evasion, and
 * magic evasion properties. Enemy troops would have to hit actors with element
 * based attacks to learn the actor's resistance levels, physical attacks to
 * learn the actor's evasion, and magical attacks to learn the actor's magic
 * evasion levels.
 *
 * ---
 *
 * ============================================================================
 * A.I. Styles
 * ============================================================================
 * 
 * There are currently four different A.I. Styles. These determine how the
 * A.I. acts and behaves. You can change the A.I. Style used globally through
 * the Plugin Parameters or individually for classes and enemies through the
 * usage of notetags.
 * 
 * Read below to understand each style and its rules:
 * 
 * ---
 * 
 * Classic Style
 * 
 * "Classic" style is the traditional and default RPG Maker MZ A.I. style.
 * It puts emphasis on the Rating system, where skills with higher ratings are
 * given more priority than skills with lower ratings within variance.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - Priority is given towards actions with higher Ratings.
 * - Rating variance will be determined by Plugin Parameters and/or notetags.
 * - A.I. Level can affect whether or not A.I. Conditions would be ignored.
 * - After applying Ratings, Rating Variances, and A.I. Conditions, if there
 *   are still multiple actions to choose from, pick from the remaining actions
 *   randomly.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Gambit Style
 * 
 * - "Gambit" style is the style from Yanfly Engine Plugin's Battle A.I. Core.
 * It goes down the list of skills and uses them in order as long as they meet
 * the Action Pattern conditions and A.I. conditions. Ratings will be ignored.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - Priority is given towards actions located higher on the list.
 * - Actions towards the bottom of the list will have lower priority.
 * - Ratings and Rating Variance has no bearing on whether or not an action
 *   will be picked.
 * - A.I. Level can affect whether or not A.I. Conditions would be ignored.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Casual Style
 * 
 * - "Casual" style takes a lighter approach to A.I. It ignores the Ratings
 * system and doesn't care about the order of actions either. Instead, the
 * only thing this A.I. Style cares about are the A.I. Conditions. All valid
 * actions after that are randomly picked from.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - There is no priority system for Ratings or Order.
 * - A.I. Level does not matter here.
 * - A random action will be selected from a group of remaining valid actions.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Random Style
 * 
 * - "Random" style simply does not care about ratings or order. It only cares
 * if the skill's can be used (can pay for the cost) and Action Pattern
 * conditions. It does not care about A.I. Conditions, Ratings, or Order.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions are ignored.
 * - There is no priority system for Ratings or Order.
 * - A.I. Level does not matter here.
 * - A random action will be selected from a group of remaining valid actions.
 * - If no actions are valid, then do nothing.
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
 * === General A.I. Settings Notetags ===
 *
 * These notetags set the general A.I. related settings for enemies and any
 * actors that use A.I. (requires Auto Battle and has a reference A.I.).
 *
 * ---
 * 
 * <AI Style: x>
 * 
 * - Used for: Class, Enemy Notetags
 * - Replace 'x' with 'Classic', 'Gambit', 'Casual', or 'Random' without the
 *   quotes. Example: <AI Style: Gambit>
 * - Determines the A.I. style used. Refer to the A.I. Styles section on the
 *   various types of styles.
 * - For actors, place this inside the associated class's notebox instead.
 * - For actors, this does not apply if there is no referenced enemy A.I. list.
 * - Setup the reference enemy through either the Plugin Parameters or by using
 *   the <Reference AI: Enemy id> notetag found below.
 * 
 * ---
 *
 * <AI Level: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Designates the unit's A.I. level if A.I. is to be used.
 * - Replace 'x' with a number from 0 to 100.
 * - Units with higher A.I. Levels will be more strict about conditions.
 * - Units with lower A.I. Levels will be more lax about conditions.
 *
 * ---
 *
 * <AI Rating Variance: x>
 * 
 * - Used for: Actor, Enemy Notetags
 * - Sets the variance amount when determining A.I. actions by rating.
 * - Replace 'x' with a number between 0 and 9.
 * - 0 for no variance.
 * - Lower numbers for less variance.
 * - Higher numbers for more variance.
 *
 * ---
 *
 * <Reference AI: Enemy id>
 * <Reference AI: name>
 *
 * - Used for: Class Notetags
 * - Causes any actor using this class that has the Auto Battle trait to use
 *   a specific enemy's attack pattern (ratings, conditions, etc.) to determine
 *   which skill to use in battle.
 * - Replace 'id' with a number representing the enemy's ID to reference.
 * - Replace 'name' with the name the enemy to reference.
 * - Actors are only able to use skills they would normally have access to.
 *   - Actors need to have LEARNED the skill.
 *   - Actors need to be able to access the skill's SKILL TYPE.
 *   - Actors need to have the RESOURCES to pay for the skill.
 * - If you cannot figure out why an auto battle actor cannot use a specific
 *   skill, turn OFF auto battle and see if you can use the skill normally.
 *
 * ---
 *
 * <No Reference AI>
 *
 * - Used for: Class Notetags
 * - Prevents the class from using any enemies as their reference A.I. pattern
 *   (including the one set in the Plugin Parameters).
 *
 * ---
 *
 * === Skill A.I. Condition Notetags ===
 *
 * Insert these notetags into the noteboxes of skills that you'd like to give
 * custom A.I. conditions for. The 'All' version of the notetags require every
 * condition to be met while the 'Any' version of the notetags require only one
 * of the conditions to be met. 
 *
 * If both are used together, then the 'All' conditions must be completely
 * fulfilled while the 'Any' conditions need only one to be fulfilled.
 *
 * ---
 *
 * <All AI Conditions>
 *  condition
 *  condition
 *  condition
 * </All AI Conditions>
 * 
 * - Used for: Skill
 * - Add/remove as many conditions as needed for the skill.
 * - All conditions must be met in order for this to become a valid skill for
 *   the AI to use.
 * - This can be used together with <Any AI Conditions>. If either of these
 *   notetags exist, do not use the Plugin Parameter defaul conditions.
 * - This will not inherit default 'All' conditions in the Plugin Parameters.
 * - Replace 'condition' with any of the following Condition List below.
 *
 * ---
 *
 * <Any AI Conditions>
 *  condition
 *  condition
 *  condition
 * </Any AI Conditions>
 * 
 * - Used for: Skill
 * - Add/remove as many conditions as needed for the skill.
 * - As long as one condition is met, this becomes a valid skill for the AI
 *   to use. If none of them are met, this skill becomes invalid for AI use.
 * - This can be used together with <All AI Conditions>. If either of these
 *   notetags exist, do not use the Plugin Parameter defaul conditions.
 * - This will not inherit default 'Any' conditions in the Plugin Parameters.
 * - Replace 'condition' with any of the following Condition List below.
 *
 * ---
 *
 * <No AI Conditions>
 * 
 * - Used for: Skill
 * - Removes any default 'All' and 'Any' conditions for this skill.
 * 
 * ---
 *
 * -=-=- Condition List -=-=-
 *
 * Replace 'condition' in the notetags in the above section with any of the
 * following to make conditions. These conditions are also used in the Plugin
 * Parameters for the default conditions, too.
 *
 * ---
 *
 * x >= y
 * x > y
 * x === y
 * x !== y
 * x < y
 * x <= y
 *
 * - Replace 'x' and 'y' with any of the following:
 *
 * - A numeric value representing a hard number.
 * - '50%' or any other percentile number to represent a rate.
 * - '0.5' or any other float number to represent a rate.
 *
 * - 'Variable x' (replace 'x' with a number) for variable x's current value.
 *
 * - 'HP%', 'MP%', 'TP%' for HP, MP, and TP rates respectively.
 * - 'MaxHP', 'MaxMP', 'MaxTP' for the potential target's respective values.
 * - 'Level' for the potential target's level. Requires VisuMZ_0_CoreEngine for
 *   this to affect enemies.
 * - 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK' for the potential target's total
 *   parameter value.
 *
 * - 'param Buff Stacks' for the potential target's current Buff stacks.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 * - 'param Debuff Stacks' for the potential target's current Debuff stacks.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * - 'param Buff Turns' for potential target's current buff turn duration.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *   - Returns 0 if the potential target is not affected by that buff.
 * - 'param Debuff Turns' for potential target's current debuff turn duration.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *   - Returns 0 if the potential target is not affected by that debuff.
 *
 * - 'State id Turns' or 'State name Turns' for potential target's current turn
 *   duration on that particular state.
 *   - Replace 'id' with a number representing the ID of the state.
 *   - Replace 'name' with the state's name.
 *   - Returns 0 if the potential target is not affected by that state.
 *   - Returns the max safe number value if the potential target is has that
 *     state as a passive state.
 *
 * - 'Element id Rate', 'Element name Rate', 'name Element Rate'
 *   - Returns a (float) value of the potential target's element's rate.
 *   - Replace 'id' with the ID of the element whose rate is to be checked.
 *   - Replace 'name' with the name of the element whose rate is to be checked.
 *     - Ignore any text codes in the element name.
 *
 * - 'Team Alive Members'
 *   - Returns a number value indicating how many alive members there are on
 *     the potential target's team.
 *
 * - 'Team Dead Members'
 *   - Returns a number value indicating how many dead members there are on
 *     the potential target's team.
 * 
 * - When no keyword matches are found, the comparison value will be
 *   interpreted as JavaScript code. If the JavaScript code fails, it will
 *   default to a 0 value.
 * 
 *   *NOTE* JavaScript cannot be used without comparison operators to reduce
 *   error. This means if you want to check if a switch is on or not, don't
 *   simply use "$gameSwitches.value(42)" as it does not have any comparison
 *   operators. Instead, use "$gameSwitches.value(42) === true" to check.
 *
 *   *NOTE* To make any of these conditions base off of the user instead, add
 *   the word 'user' before the condition as such:
 *
 *   user hp% >= 0.50
 *   user atk buff stacks === 2
 *   user team alive members < 3
 *
 * ---
 *
 * Always
 *
 * - Going to be valid no matter what.
 *
 * ---
 *
 * x% Chance
 * 
 * - Replace 'x' with a number value representing the percent chance this skill
 *   would pass as valid.
 *
 * ---
 *
 * Switch x On
 * Switch x Off
 *
 * - Replace 'x' with the ID of the switch to check as ON/OFF.
 *
 * ---
 *
 * User is Actor
 * User is Enemy
 * Target is Actor
 * Target is Enemy
 *
 * - Requires the user or potential target to be an actor/enemy.
 *
 * ---
 *
 * User Has State id
 * User Has State name
 * Target Has State id
 * Target Has State name
 *
 * - Replace 'id' with the ID of the state the user or potential target needs
 *   to have.
 * - Replace 'name' with the name of the state the target needs to have.
 *
 * ---
 *
 * User Not State id
 * User Not State name
 * Target Not State id
 * Target Not State name
 *
 * - Replace 'id' with the ID of the state the user or potential target
 *   cannot have.
 * - Replace 'name' with the name of the state the target cannot have.
 *
 * ---
 *
 * User Has param Buff 
 * User Has param Debuff 
 * Target Has param Buff 
 * Target Has param Debuff 
 *
 * - Requires user or potential target to have the associated parameter 
 *   buff/debuff at any stack level.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Has param Max Buff 
 * User Has param Max Debuff
 * Target Has param Max Buff 
 * Target Has param Max Debuff
 *
 * - Requires potential user or target to have the associated parameter 
 *   buff/debuff at maxed out stacks.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Not param Buff 
 * User Not param Debuff 
 * Target Not param Buff 
 * Target Not param Debuff 
 *
 * - Requires user or potential target to not have the associated parameter 
 *   buff/debuff at any stack level.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Not param Max Buff 
 * User Not param Max Debuff 
 * Target Not param Max Buff 
 * Target Not param Max Debuff 
 *
 * - Requires user or potential target to not have the associated parameter 
 *   buff/debuff at maxed out stacks.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * === A.I. => TGR Weight Notetags ===
 *
 * You can set how much influence on TGR weights actors and enemies will place
 * when determining valid targets for their actions.
 *
 * ---
 *
 * <AI Element Rate Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the element rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI Element Rate Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in element rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI EVA Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the EVA rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI EVA Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in EVA rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI MEV Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the MEV rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI MEV Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in MEV rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 * 
 * === Specific A.I. Targeting Notetags ===
 * 
 * Specific A.I. targeting means the user will ignore any TGR influences when
 * it comes to pick out of a group of valid candidates to come down to one
 * target. This only affects skills where the user must select a specific
 * target, meaning it will ignore the effects of random and AoE scopes.
 * 
 * ---
 *
 * <AI Target: type>
 *
 * - Used for: Skill Notetags
 * - Bypasses TGR influence in favor of picking a specific target out of a
 *   group of valid targets (does not pick from outside the valid target group)
 *   for a skill target.
 * - Replace 'type' with any of the following:
 * 
 *   ----------------------------   -------------------------------------------
 *   Type                           Description
 *   ----------------------------   -------------------------------------------
 *   User                           Always picks the user if available
 *   First                          Always picks the first valid candidate
 *   Last                           Always picks the last valid candidate
 *   ----------------------------   -------------------------------------------
 *   Highest Level                  Picks candidate with highest level
 *   ----------------------------   -------------------------------------------
 *   Highest MaxHP                  Picks candidate with highest MaxHP
 *   Highest HP                     Picks candidate with highest current HP
 *   Highest HP%                    Picks candidate with highest HP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest MaxMP                  Picks candidate with highest MaxMP
 *   Highest MP                     Picks candidate with highest current MP
 *   Highest MP%                    Picks candidate with highest MP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest MaxTP                  Picks candidate with highest MaxTP
 *   Highest TP                     Picks candidate with highest current TP
 *   Highest TP%                    Picks candidate with highest TP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest ATK                    Picks candidate with highest ATK parameter
 *   Highest DEF                    Picks candidate with highest DEF parameter
 *   Highest MAT                    Picks candidate with highest MAT parameter
 *   Highest MDF                    Picks candidate with highest MDF parameter
 *   Highest AGI                    Picks candidate with highest AGI parameter
 *   Highest LUK                    Picks candidate with highest LUK parameter
 *   ----------------------------   -------------------------------------------
 *   Highest HIT                    Picks candidate with highest HIT parameter
 *   Highest EVA                    Picks candidate with highest EVA parameter
 *   Highest CRI                    Picks candidate with highest CRI parameter
 *   Highest CEV                    Picks candidate with highest CEV parameter
 *   Highest MEV                    Picks candidate with highest MEV parameter
 *   Highest MRF                    Picks candidate with highest MRF parameter
 *   Highest CNT                    Picks candidate with highest CNT parameter
 *   Highest HRG                    Picks candidate with highest HRG parameter
 *   Highest MRG                    Picks candidate with highest MRG parameter
 *   Highest TRG                    Picks candidate with highest TRG parameter
 *   ----------------------------   -------------------------------------------
 *   Highest TGR                    Picks candidate with highest TGR parameter
 *   Highest GRD                    Picks candidate with highest GRD parameter
 *   Highest REC                    Picks candidate with highest REC parameter
 *   Highest PHA                    Picks candidate with highest PHA parameter
 *   Highest MCR                    Picks candidate with highest MCR parameter
 *   Highest TCR                    Picks candidate with highest TCR parameter
 *   Highest PDR                    Picks candidate with highest PDR parameter
 *   Highest MDR                    Picks candidate with highest MDR parameter
 *   Highest FDR                    Picks candidate with highest FDR parameter
 *   Highest EXR                    Picks candidate with highest EXR parameter
 *   ----------------------------   -------------------------------------------
 *   Highest State Count            Picks candidate with most states (any)
 *   Highest Positive State Count   Picks candidate with most positive states
 *   Highest Negative State Count   Picks candidate with most negative states
 *   *Note: These require VisuMZ_1_SkillsStatesCore
 *   ----------------------------   -------------------------------------------
 *   Lowest Level                   Picks candidate with lowest level
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxHP                   Picks candidate with lowest MaxHP
 *   Lowest HP                      Picks candidate with lowest current HP
 *   Lowest HP%                     Picks candidate with lowest HP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxMP                   Picks candidate with lowest MaxMP
 *   Lowest MP                      Picks candidate with lowest current MP
 *   Lowest MP%                     Picks candidate with lowest MP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxTP                   Picks candidate with lowest MaxTP
 *   Lowest TP                      Picks candidate with lowest current TP
 *   Lowest TP%                     Picks candidate with lowest TP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest ATK                     Picks candidate with lowest ATK parameter
 *   Lowest DEF                     Picks candidate with lowest DEF parameter
 *   Lowest MAT                     Picks candidate with lowest MAT parameter
 *   Lowest MDF                     Picks candidate with lowest MDF parameter
 *   Lowest AGI                     Picks candidate with lowest AGI parameter
 *   Lowest LUK                     Picks candidate with lowest LUK parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest HIT                     Picks candidate with lowest HIT parameter
 *   Lowest EVA                     Picks candidate with lowest EVA parameter
 *   Lowest CRI                     Picks candidate with lowest CRI parameter
 *   Lowest CEV                     Picks candidate with lowest CEV parameter
 *   Lowest MEV                     Picks candidate with lowest MEV parameter
 *   Lowest MRF                     Picks candidate with lowest MRF parameter
 *   Lowest CNT                     Picks candidate with lowest CNT parameter
 *   Lowest HRG                     Picks candidate with lowest HRG parameter
 *   Lowest MRG                     Picks candidate with lowest MRG parameter
 *   Lowest TRG                     Picks candidate with lowest TRG parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest TGR                     Picks candidate with lowest TGR parameter
 *   Lowest GRD                     Picks candidate with lowest GRD parameter
 *   Lowest REC                     Picks candidate with lowest REC parameter
 *   Lowest PHA                     Picks candidate with lowest PHA parameter
 *   Lowest MCR                     Picks candidate with lowest MCR parameter
 *   Lowest TCR                     Picks candidate with lowest TCR parameter
 *   Lowest PDR                     Picks candidate with lowest PDR parameter
 *   Lowest MDR                     Picks candidate with lowest MDR parameter
 *   Lowest FDR                     Picks candidate with lowest FDR parameter
 *   Lowest EXR                     Picks candidate with lowest EXR parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest State Count             Picks candidate with least states (any)
 *   Lowest Positive State Count    Picks candidate with least positive states
 *   Lowest Negative State Count    Picks candidate with least negative states
 *   *Note: These require VisuMZ_1_SkillsStatesCore
 *   ----------------------------   -------------------------------------------
 * 
 * ---
 *
 * ============================================================================
 * Regarding $gameTroop.turnCount() for A.I. Conditions
 * ============================================================================
 * 
 * ---
 * 
 * Short Answer:
 *
 * Battle A.I. conditions do NOT support the conditions $gameTroop.turnCount()
 * or user.turnCount() or target.turnCount() for A.I. Conditions.
 * 
 * Instead, use RPG Maker MZ's built-in action editor's turn requirement to
 * make do with the same effect.
 *
 * ---
 * 
 * Long Answer:
 * 
 * The turnCount() functions are not valid for A.I. Conditions and disabled due
 * to all the problems they cause. The reason being is because actions are
 * determined before the turn count increases. This is how RPG Maker MZ handles
 * it by default.
 * 
 * The reason why this does not work is due to the following code found in
 * RPG Maker MZ's core scripts:
 * 
 *   Game_Battler.prototype.turnCount = function() {
 *       if (BattleManager.isTpb()) {
 *           return this._tpbTurnCount;
 *       } else {
 *           return $gameTroop.turnCount() + 1;
 *       }
 *   };
 * 
 * What that means the turn count will always be off by 1. So upon determining
 * the action initially, the match would come off as correct. However, as the
 * turn actually starts and reaches the enemy or actor's turn, the turn count
 * check would read differently and return incorrect information, causing the
 * battler to forfeit their actions.
 * 
 * This facet of RPG Maker MZ can be updated and changed, but it is better that
 * it doesn't in order to maintain compatibility with the rest of the plugins
 * available that utilize the turn counter.
 * 
 * The work around to this problem is, instead, to use the enemy database tab's
 * action editor and apply a Turn Condition to match the required turn instead.
 * You know, the thing with Skill and Rating, where you select which skill for
 * the enemy to use instead.
 * 
 * HOWEVER!
 * 
 * If you are willing to use an "Experimental" feature, aka one that is not
 * heavily tested and may potentially result in unintended side effects, go to:
 * 
 *  Plugin Parameters > A.I. General Settings > Experimental > On-The-Spot A.I.
 * 
 * And set that to "true" without the quotes. This will forcefully remove the
 * +1 towards the count and forcefully make enemies re-evaluate actions upon
 * the start of the string of their actions. This comes with some side effects
 * that will potentially give A.I. advantages or disadvantages depending on the
 * battle system type. Action Speed becomes something that can be abused as it
 * is normally something that is determined based on the queued actions. A.I.
 * can pick a high speed weak action and then switch it for a slow speed strong
 * action. There is no proper fix to this due to how on-the-spot A.I. works as
 * it is ill-fitted for speed-relative battle systems. You have been warned.
 * 
 * In the event that this Plugin Parameter IS enabled, then using the turnCount
 * JavaScript code should work again due to the normalization of how the turn
 * property is calculated.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. General Settings
 * ============================================================================
 *
 * These settings determine the global settings for general Battle A.I. usage.
 *
 * ---
 * 
 * A.I. Style
 * 
 *   Actor Style:
 *   - Which A.I. style do you want for referenced actors to use?
 *   - This does not apply to non-referenced actors.
 * 
 *   Enemy Style:
 *   - Which A.I. style do you want for enemies to use?
 * 
 *   Refer to the A.I. Styles list for a list of valid styles.
 * 
 * ---
 *
 * A.I. Level
 * 
 *   Actor A.I. Level:
 *   - Default A.I. level used for actor A.I.
 *   - Levels: 0-100. Higher is stricter.
 * 
 *   Enemy A.I. Level:
 *   - Default A.I. level used for enemy A.I.
 *   - Levels: 0-100. Higher is stricter.
 *
 * ---
 *
 * A.I. Ratings
 * 
 *   Actor Rating Variance:
 *   - How much to allow variance from the A.I. rating by?
 *   - 0 for no variance. Higher numbers for more variance.
 * 
 *   Enemy Rating Variance:
 *   - How much to allow variance from the A.I. rating by?
 *   - 0 for no variance. Higher numbers for more variance.
 *
 * ---
 *
 * Reference
 * 
 *   Actor => AI Reference:
 *   - Which enemy A.I. should the actor reference by default?
 *   - Use 0 for no references.
 *
 * ---
 *
 * Knowledge
 * 
 *   Learn Knowledge:
 *   - Requires enemies/actors to test the knowledge of the opponents before
 *     using specific conditions.
 * 
 *   Unknown Element Rate:
 *   - What should A.I. treat unknown element rates as?
 *
 * ---
 * 
 * Experimental
 * 
 *   On-The-Spot A.I.:
 *   - A.I. enemies/actors determine actions on the spot when it's their turn.
 * 
 *     No Idle Chant:
 *     - Requires On-The-Spot A.I. enabled.
 *     - For A.I. Battlers, disables idle chant motions due to inconsistency.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. Default Conditions
 * ============================================================================
 *
 * You can set certain conditions to be used as defaults for all skills that
 * lack the <All AI Conditions> and <Any AI Conditions>. If either of those
 * notetags exist, none of these defaults will be used for those skills. These
 * settings will allow you to set both 'All' and 'Any' conditions for defaults.
 *
 * ---
 *
 * Enable?
 * 
 *   All Conditions:
 *   - Create default 'ALL' conditions for all skills without any AI notetags?
 * 
 *   Any Conditions:
 *   - Create default 'ANY' conditions for all skills without any AI notetags?
 *
 * ---
 *
 * HP Damage
 * MP Damage
 * HP Recover
 * MP Recover
 * HP Drain
 * MP Drain
 * 
 *   All Conditions:
 *   - Default 'ALL' conditions used for related skills.
 * 
 *   Any Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *
 * ---
 *
 * Add State
 * Remove State
 * 
 *   All Conditions:
 *   - Default 'ALL' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 * 
 *   Any Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 *
 * ---
 *
 * Add Buff
 * Remove Buff
 * Add Debuff
 * Remove Debuff
 * 
 *   All Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *   - %1 - Dynamic values (ie param's).
 * 
 *   Any Conditions:
 *   - Default 'ALL' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. => TGR Weight Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you to set whether or not you'd like for 
 * weight influence when deciding targets for actions and how much to influence
 * the TGR weight by.
 *
 * ---
 *
 * Weight
 * 
 *   Element Rate => TGR:
 *   - Makes all A.I. consider elemental rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence elemental rates have on
 *       TGR weight.
 * 
 *   EVA Rate => TGR:
 *   - Makes all A.I. consider EVA rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence EVA rates have on
 *       TGR weight.
 * 
 *   MEV Rate => TGR:
 *   - Makes all A.I. consider MEV rates when considering TGR weight
 *     by default?
 * 
 *   Influence Rate:
 *   - This determines the default level of influence MEV rates have on
 *     TGR weight.
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
 * Version 1.25: June 13, 2024
 * * Feature Updates!
 * ** Reduced AI thinking times. Update made by Olivia.
 * 
 * Version 1.24: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause an infinite loop with certain battle systems
 *    under on the spot AI setting. Fix made by Olivia.
 * 
 * Version 1.23: January 18, 2024
 * * Compatibility Update!
 * ** Updated better compatibility with Battle System - STB and Auto Skill
 *    Triggers to prevent infinite loops. Update made by Olivia.
 * 
 * Version 1.22: December 14, 2023
 * * Compatibility Update!
 * ** Updated better compatibility for the new Battle System FTB, ETB, and PTB
 *    updates. Update made by Olivia.
 * 
 * Version 1.21: April 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented enemies from using skills that had the
 *    <Target: x Random Any> notetag. Fix made by Irina.
 * 
 * Version 1.20: February 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.74
 *    new features.
 * 
 * Version 1.19: January 20, 2023
 * * Bug Fixes!
 * ** On-The-Spot A.I. no longer overwrites Forced Actions. Fix made by Arisu.
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.73
 *    new features.
 * 
 * Version 1.18: May 19, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** General Settings > Experimental > On-The-Spot A.I. > No Idle Chant
 * **** Requires On-The-Spot A.I. enabled.
 * **** For A.I. Battlers, disables idle chant motions due to inconsistency.
 * 
 * Version 1.17: May 12, 2022
 * * Feature Update!
 * ** Better RNG calculation when using the x% Chance conditional. Update made
 *    by Arisu.
 * 
 * Version 1.16: February 24, 2022
 * * Feature Update!
 * ** Randomization between zero variance A.I. is now better.
 * ** A.I. will no longer keep unusable skills in a skill queue and replace
 *    them with new ones.
 * 
 * Version 1.15: December 2, 2021
 * * Compatibility Update!
 * ** AI for skills and items should now work if their scope is
 *    <Target: All Allies But User>. Update made by Irina.
 * 
 * Version 1.14: October 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Notetag section "Condition List" updated with the following:
 * *** *NOTE* JavaScript cannot be used without comparison operators to reduce
 *     error. This means if you want to check if a switch is on or not, don't
 *     simply use "$gameSwitches.value(42)" as it does not have any comparison
 *     operators. Instead, use "$gameSwitches.value(42) === true" to check.
 * ** Updated section "Regarding $gameTroop.turnCount() for A.I. Conditions"
 * * New Experimental Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** A.I. General Settings > Experimental > On-The-Spot A.I.
 * **** A.I. enemies/actors determine actions on the spot when it's their turn.
 * **** Functions akin to YEP's Battle A.I. Core where enemies determine new
 *      actions on the spot. Doing so will forcefully change the way the Turn
 *      Count is handled for Game_Battler to not utilize the +1.
 * **** This will forcefully remove the +1 towards the count and forcefully
 *      make enemies re-evaluate actions upon the start of the string of their
 *      actions. This comes with some side effects that will potentially give
 *      A.I. advantages or disadvantages depending on the battle system type.
 *      Action Speed becomes something that can be abused as it is normally
 *      something that is determined based on the queued actions. A.I. can pick
 *      a high speed weak action and then switch it for a slow speed strong
 *      action. There is no proper fix to this due to how on-the-spot A.I.
 *      works as it is ill-fitted for speed-relative battle systems. You have
 *      been warned.
 * **** In the event that this Plugin Parameter IS enabled, then using the
 *      turnCount JavaScript code should work again due to the normalization of
 *      how the turn property is calculated.
 * * Optimization Update!
 * ** Updated last version's newest change to be more optimized and occur upon
 *    each iteration of a new subject being determined to account for better
 *    check timing. Update made by Yanfly.
 * 
 * Version 1.13: October 13, 2021
 * * Feature Update!
 * ** A.I. Battlers with no currently determined actions, upon the start of the
 *    time frame for what would be their action, will have one more chance of
 *    determining a new action to use as to not waste their turns.
 * ** This does NOT mean that the A.I. Battlers will adjust their actions for
 *    one with a higher rating. The readjustment will only occur if there are
 *    no actions determined for that instance and only a one time window upon
 *    the start of the time frame for what would be their action.
 * ** Update made by Arisu.
 * 
 * Version 1.12: October 7, 2021
 * * Documentation Update!
 * ** Added section "Regarding $gameTroop.turnCount() for A.I. Conditions".
 * * Feature Update!
 * ** Any A.I. Conditions found with "turnCount()" will be automatically
 *    disabled in order to reduce confusion. This is due to how turnCount()
 *    functions do not accurately depict the current Turn Count depending on
 *    when the function runs. Update made by Olivia.
 * 
 * Version 1.11: September 30, 2021
 * * Bug Fixes!
 * ** Patched up a rare occurance of predetermined actions still having
 *    priority despite having no valid targets. Fix made by Olivia.
 * 
 * Version 1.10: September 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that caused "highest" and "lowest" target schemes to be
 *    inverted. Fix made by Olivia.
 * 
 * Version 1.09: July 9, 2021
 * * Bug Fixes!
 * ** Fixed a bug that caused "highest" and "lowest" target schemes to be
 *    inverted. Fix made by Arisu.
 * 
 * Version 1.08: April 16, 2021
 * * Feature Update!
 * ** Cached randomization seeds should no longer conflict with certain scope
 *    types. Update made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: January 22, 2021
 * * Bug Fixes!
 * ** <AI Target: x> notetags should no longer crashes. Fix made by Irina.
 * 
 * Version 1.06: January 8, 2021
 * * Feature Update!
 * ** For those using classic mode with a variance level of 0, action lists
 *    will be better shuffled to provide more variation between selected
 *    skills. Update made by Irina.
 * 
 * Version 1.05: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Yanfly!
 * *** <AI Target: type>
 * **** Bypasses TGR influence in favor of picking a specific target out of a
 *      group of valid targets (does not pick from outside the valid target
 *      group) for a skill target. Read documentation to see targeting types.
 * 
 * Version 1.04: December 18, 2020
 * * Documentation Update!
 * ** Added documentation for notetag <Reference AI: Enemy id>
 * *** - Actors are only able to use skills they would normally have access to.
 *       - Actors need to have LEARNED the skill.
 *       - Actors need to be able to access the skill's SKILL TYPE.
 *       - Actors need to have the RESOURCES to pay for the skill.
 *     - If you cannot figure out why an auto battle actor cannot use a
 *       specific skill, turn OFF auto battle and see if you can use the skill
 *       normally.
 * 
 * Version 1.03: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.02: November 1, 2020
 * * Bug Fixes!
 * ** Charmed battlers will no longer vanish when attack one another. Fix made
 *    by Yanfly.
 * 
 * Version 1.01: October 18, 2020
 * * Bug Fixes!
 * ** <All AI Conditiosn> and <Any AI Conditions> notetags are now fixed and
 *    should work properly. Fix made by Yanfly.
 *
 * Version 1.00: September 30, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param BattleAI
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
 * @text A.I. General Settings
 * @type struct<General>
 * @desc General settings pertaining to A.I.
 * @default {"AIStyle":"","ActorStyleAI:str":"classic","EnemyStyleAI:str":"classic","AILevel":"","ActorAILevel:num":"100","EnemyAILevel:num":"100","AIRating":"","ActorRatingVariance:num":"1","EnemyRatingVariance:num":"3","Reference":"","ActorAIReference:num":"0","Knowledge":"","LearnKnowledge:eval":"true","UnknownElementRate:num":"1.00"}
 *
 * @param Default:struct
 * @text A.I. Default Conditions
 * @type struct<Default>
 * @desc Give certain types of skills default conditions.
 * @default {"Enable?":"","EnableAllCon:eval":"true","EnableAnyCon:eval":"true","HpDamage":"","HpDamageAll:json":"\"\"","HpDamageAny:json":"\"Always\"","MpDamage":"","MpDamageAll:json":"\"Target MP > 0\"","MpDamageAny:json":"\"\"","HpRecover":"","HpRecoverAll:json":"\"\"","HpRecoverAny:json":"\"Target HP < Target MaxHP\"","MpRecover":"","MpRecoverAll:json":"\"\"","MpRecoverAny:json":"\"Target MP < Target MaxMP\"","HpDrain":"","HpDrainAll:json":"\"\"","HpDrainAny:json":"\"User HP < User MaxHP\"","MpDrain":"","MpDrainAll:json":"\"Target MP > 0\"","MpDrainAny:json":"\"\"","AddState":"","AddStateAll:json":"\"\"","AddStateAny:json":"\"Target Not State %1\\nTarget State %1 Turns <= 1\"","RemoveState":"","RemoveStateAll:json":"\"\"","RemoveStateAny:json":"\"Target Has State %1\"","AddBuff":"","AddBuffAll:json":"\"\"","AddBuffAny:json":"\"Target Not %1 Max Buff\\nTarget %1 Buff Turns <= 1\"","RemoveBuff":"","RemoveBuffAll:json":"\"\"","RemoveBuffAny:json":"\"Target Has %1 Buff\"","AddDebuff":"","AddDebuffAll:json":"\"\"","AddDebuffAny:json":"\"Target Not %1 Max Debuff\\nTarget %1 Debuff Turns <= 1\"","RemoveDebuff":"","RemoveDebuffAll:json":"\"\"","RemoveDebuffAny:json":"\"Target Has %1 Debuff\""}
 *
 * @param Weight:struct
 * @text A.I. => TGR Weight
 * @type struct<Weight>
 * @desc How do certain properties translate to TGR weight?
 * @default {"ElementTgr:eval":"true","ElementTgrRate:num":"1.25","EvaTgr:eval":"true","EvaTgrRate:num":"1.50","MevTgr:eval":"true","MevTgrRate:num":"2.00"}
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
 * A.I. General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param AIStyle
 * @text A.I. Style
 *
 * @param ActorStyleAI:str
 * @text Actor Style
 * @parent AIStyle
 * @type select
 * @option Classic (Rating-Based with Rating Variance)
 * @value classic
 * @option Gambit (Order-Based, Ignores Rating System)
 * @value gambit
 * @option Casual (Random but follows A.I. Conditions)
 * @value casual
 * @option Random (Pure Random, ignores A.I. Conditions)
 * @value random
 * @desc Which A.I. style do you want for referenced actors to use?
 * This does not apply to non-referenced actors.
 * @default classic
 *
 * @param EnemyStyleAI:str
 * @text Enemy Style
 * @parent AIStyle
 * @type select
 * @option Classic (Rating-Based with Rating Variance)
 * @value classic
 * @option Gambit (Order-Based, Ignores Rating System)
 * @value gambit
 * @option Casual (Random but follows A.I. Conditions)
 * @value casual
 * @option Random (Pure Random, ignores A.I. Conditions)
 * @value random
 * @desc Which A.I. style do you want for enemies to use?
 * @default classic
 *
 * @param AILevel
 * @text A.I. Level
 *
 * @param ActorAILevel:num
 * @text Actor A.I. Level
 * @parent AILevel
 * @type number
 * @min 0
 * @max 100
 * @desc Default A.I. level used for actor A.I.
 * Levels: 0-100. Higher is stricter.
 * @default 100
 *
 * @param EnemyAILevel:num
 * @text Enemy A.I. Level
 * @parent AILevel
 * @type number
 * @min 0
 * @max 100
 * @desc Default A.I. level used for enemy A.I.
 * Levels: 0-100. Higher is stricter.
 * @default 100
 *
 * @param AIRating
 * @text A.I. Ratings
 *
 * @param ActorRatingVariance:num
 * @text Actor Rating Variance
 * @parent AIRating
 * @type number
 * @min 0
 * @max 9
 * @desc How much to allow variance from the A.I. rating by?
 * 0 for no variance. Higher numbers for more variance.
 * @default 1
 *
 * @param EnemyRatingVariance:num
 * @text Enemy Rating Variance
 * @parent AIRating
 * @type number
 * @min 0
 * @max 9
 * @desc How much to allow variance from the A.I. rating by?
 * 0 for no variance. Higher numbers for more variance.
 * @default 3
 *
 * @param Reference
 *
 * @param ActorAIReference:num
 * @text Actor => AI Reference
 * @parent Reference
 * @type enemy
 * @desc Which enemy A.I. should the actor reference by default?
 * Use 0 for no references.
 * @default 0
 *
 * @param Knowledge
 *
 * @param LearnKnowledge:eval
 * @text Learn Knowledge
 * @parent Knowledge
 * @type boolean
 * @on Require
 * @off Don't Require
 * @desc Requires enemies/actors to test the knowledge of
 * the opponents before using specific conditions.
 * @default true
 *
 * @param UnknownElementRate:num
 * @text Unknown Element Rate
 * @parent LearnKnowledge:eval
 * @desc What should A.I. treat unknown element rates as?
 * @default 1.00
 * 
 * @param Experimental
 * 
 * @param OnSpotAI:eval
 * @text On-The-Spot A.I.
 * @parent Experimental
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc A.I. enemies/actors determine actions on the
 * spot when it's their turn.
 * @default false
 * 
 * @param SpotRemoveMotions:eval
 * @text No Idle Chant
 * @parent OnSpotAI:eval
 * @type boolean
 * @on Remove Idle Chanting
 * @off Allow Idle Chanting
 * @desc Requires On-The-Spot A.I. enabled. For A.I. Battlers,
 * disables idle chant motions due to inconsistency.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * A.I. Default Conditions
 * ----------------------------------------------------------------------------
 */
/*~struct~Default:
 *
 * @param Enable?
 *
 * @param EnableAllCon:eval
 * @text All Conditions
 * @parent Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Create default 'ALL' conditions for all skills
 * without any AI notetags?
 * @default true
 *
 * @param EnableAnyCon:eval
 * @text Any Conditions
 * @parent Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Create default 'ANY' conditions for all skills
 * without any AI notetags?
 * @default true
 *
 * @param HpDamage
 * @text HP Damage
 * 
 * @param HpDamageAll:json
 * @text All Conditions
 * @parent HpDamage
 * @type note
 * @desc Default 'ALL' conditions used for HP damage skills.
 * @default ""
 * 
 * @param HpDamageAny:json
 * @text Any Conditions
 * @parent HpDamage
 * @type note
 * @desc Default 'ANY' conditions used for HP damage skills.
 * @default "Always"
 *
 * @param MpDamage
 * @text MP Damage
 * 
 * @param MpDamageAll:json
 * @text All Conditions
 * @parent MpDamage
 * @type note
 * @desc Default 'ALL' conditions used for MP damage skills.
 * @default "Target MP > 0"
 *
 * @param MpDamageAny:json
 * @text Any Conditions
 * @parent MpDamage
 * @type note
 * @desc Default 'ANY' conditions used for MP damage skills.
 * @default ""
 *
 * @param HpRecover
 * @text HP Recover
 * 
 * @param HpRecoverAll:json
 * @text All Conditions
 * @parent HpRecover
 * @type note
 * @desc Default 'ALL' conditions used for HP recovery skills.
 * @default ""
 *
 * @param HpRecoverAny:json
 * @text Any Conditions
 * @parent HpRecover
 * @type note
 * @desc Default 'ANY' conditions used for HP recovery skills.
 * @default "Target HP < Target MaxHP"
 *
 * @param MpRecover
 * @text MP Recover
 * 
 * @param MpRecoverAll:json
 * @text All Conditions
 * @parent MpRecover
 * @type note
 * @desc Default 'ALL' conditions used for MP recovery skills.
 * @default ""
 *
 * @param MpRecoverAny:json
 * @text Any Conditions
 * @parent MpRecover
 * @type note
 * @desc Default 'ANY' conditions used for MP recovery skills.
 * @default "Target MP < Target MaxMP"
 *
 * @param HpDrain
 * @text HP Drain
 * 
 * @param HpDrainAll:json
 * @text All Conditions
 * @parent HpDrain
 * @type note
 * @desc Default 'ALL' conditions used for HP drain skills.
 * @default ""
 *
 * @param HpDrainAny:json
 * @text Any Conditions
 * @parent HpDrain
 * @type note
 * @desc Default 'ANY' conditions used for HP drain skills.
 * @default "User HP < User MaxHP"
 *
 * @param MpDrain
 * @text MP Drain
 * 
 * @param MpDrainAll:json
 * @text All Conditions
 * @parent MpDrain
 * @type note
 * @desc Default 'ALL' conditions used for MP drain skills.
 * @default "Target MP > 0"
 *
 * @param MpDrainAny:json
 * @text Any Conditions
 * @parent MpDrain
 * @type note
 * @desc Default 'ANY' conditions used for MP drain skills.
 * @default ""
 *
 * @param AddState
 * @text Add State
 * 
 * @param AddStateAll:json
 * @text All Conditions
 * @parent AddState
 * @type note
 * @desc Default 'ALL' conditions used for adding states.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param AddStateAny:json
 * @text Any Conditions
 * @parent AddState
 * @type note
 * @desc Default 'ANY' conditions used for adding states.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Not State %1\nTarget State %1 Turns <= 1"
 *
 * @param RemoveState
 * @text Remove State
 * 
 * @param RemoveStateAll:json
 * @text All Conditions
 * @parent RemoveState
 * @type note
 * @desc Default 'ALL' conditions used for removing states.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveStateAny:json
 * @text Any Conditions
 * @parent RemoveState
 * @type note
 * @desc Default 'ANY' conditions used for removing states.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has State %1"
 *
 * @param AddBuff
 * @text Add Buff
 * 
 * @param AddBuffAll:json
 * @text All Conditions
 * @parent AddBuff
 * @type note
 * @desc Default 'ALL' conditions used for adding buffs.
 * %1 - Dynamic values (ie param names).
 * @default ""
 *
 * @param AddBuffAny:json
 * @text Any Conditions
 * @parent AddBuff
 * @type note
 * @desc Default 'ANY' conditions used for adding buffs.
 * %1 - Dynamic values (ie param's).
 * @default "Target Not %1 Max Buff\nTarget %1 Buff Turns <= 1"
 *
 * @param RemoveBuff
 * @text Remove Buff
 * 
 * @param RemoveBuffAll:json
 * @text All Conditions
 * @parent RemoveBuff
 * @type note
 * @desc Default 'ALL' conditions used for removing buffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveBuffAny:json
 * @text Any Conditions
 * @parent RemoveBuff
 * @type note
 * @desc Default 'ANY' conditions used for removing buffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has %1 Buff"
 *
 * @param AddDebuff
 * @text Add Debuff
 * 
 * @param AddDebuffAll:json
 * @text All Conditions
 * @parent AddDebuff
 * @type note
 * @desc Default 'ALL' conditions used for adding debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param AddDebuffAny:json
 * @text Any Conditions
 * @parent AddDebuff
 * @type note
 * @desc Default 'ANY' conditions used for adding debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Not %1 Max Debuff\nTarget %1 Debuff Turns <= 1"
 *
 * @param RemoveDebuff
 * @text Remove Debuff
 * 
 * @param RemoveDebuffAll:json
 * @text All Conditions
 * @parent RemoveDebuff
 * @type note
 * @desc Default 'ALL' conditions used for removing debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveDebuffAny:json
 * @text Any Conditions
 * @parent RemoveDebuff
 * @type note
 * @desc Default 'ANY' conditions used for removing debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has %1 Debuff"
 *
 */
/* ----------------------------------------------------------------------------
 * A.I. => TGR Weight Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Weight:
 *
 * @param ElementTgr:eval
 * @text Element Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider elemental rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param ElementTgrRate:num
 * @text Influence Rate
 * @parent ElementTgr:eval
 * @desc This determines the default level of influence elemental
 * rates have on TGR weight.
 * @default 1.25
 *
 * @param EvaTgr:eval
 * @text EVA Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider EVA rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param EvaTgrRate:num
 * @text Influence Rate
 * @parent EvaTgr:eval
 * @desc This determines the default level of influence EVA
 * rates have on TGR weight.
 * @default 1.50
 *
 * @param MevTgr:eval
 * @text MEV Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider MEV rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param MevTgrRate:num
 * @text Influence Rate
 * @parent MevTgr:eval
 * @desc This determines the default level of influence MEV
 * rates have on TGR weight.
 * @default 2.00
 *
 */
//=============================================================================

function _0x1bd3(){const _0x299f5a=['orted\x20by\x20B','WpTHu','TgrInfluen','canUse','CoWxN','NLfba','ents','hkUfI','dition','nents','canGuard','reorder\x20th','ElementTgr','KyWuQ','pbfYS','XFRNB','addXParamA','KjxxM','LxtbS','er_onAllAc','OeDBZ','OuwgN','subject','ARRAYEVAL','ALWAYS','ion','tionsEnd','type','onBattleSt','hasXParamA','ctionByAIi','ARRAYSTR','RemoveDebu','sic','General','replace','VtUXl','MEV','jlisc','call','OVER_MP','KZSsa','getAnyCond','FOiBm','riend','bMEFD','prototype','determineT','_bypassAiV','HpDrain%1','NUM','makeDefaul','AddState%1','lnKzj','eBhpD','luence','zRCXk','nfluenceRa','value1','onentBattl','Member','_aiTgrInfl','ActorAILev','enemy','RlRhi','jAawX','guardSkill','attleSyste','debuff','oInfy','The\x20follow','anyConditi','numActions','PHA','llValid','WHgrg','enemyId','mSTB','erBase_rev','SpotRemove','_buffTurns','Filters','dataId','alid','sQTDa','oenhd','cULFo','MeetCondit','user','HBlsN','value','actions','hiDaC','evaInfluen','All','kpPvl','XAJJK','level','tSubject','ger_getNex','ADEhU','GGasE','muXhy','Weight','eeLak','rrectly\x20pl','mXmBB','makeAction','mentalTgrI','isForAnyon','doesAIAppl','swIsR','fCPdr','djlxe','nsEnd','EXR','gVariance','bypassMevT','isActor','isChanting','yaUub','zuXmX','PDR','tjgyk','filter','isSTB','canAttack','tsHqd','ConvertPar','lementStat','BattleMana','yEvaTgrInf','mvxAz','wwCUf','edTargetin','nformation','xcNRj','vel','nlBok','isFTB','FxDYJ','eCore','sWithEnemy','revive','n_itemTarg','imWSs','uxccW','passesAILe','uKuQK','cdJkJ','initialize','aiApplyEle','_isActionV','OVE_BUFF','lid','remove','This\x20is\x20a\x20','untAI','makeDeepCo','push','mPTB\x20needs','_alertTurn','onaPg','ier\x20number','crohg','slice','ist.\x0aIt\x20is','map','n_apply','1669087gzxerU','er_makeAct','isfhf','Game_Troop',':\x0a\x0a','\x20to\x20be\x20upd','isForDeadF','setEnemyAc','ence','clamp','needsSelec','ngNJA','NcPrF','487772OKveiB','_BUFF','currentCla','parse','ing','actorId','elementIds','_subject','hlKEm','471384raExbI','endAction','randomInt','LearnKnowl','tQYVP','Candidates','KVRzr','MDF','FDsmU','eStart','SNdkc','is%1Affect','DJSPP','KnfZD','clearForce','mETB','hWgTi','NOYqc','param','hCondition','iMBdP','USER','ore','dAwep','MDR','elements','determineL','amwfi','value2','etCandidat','HpDamage%1','\x20this\x20valu','concat','sparam','EFFECT_REM','setAiTgrIn','ARRAYSTRUC','sfXIa','ired\x20plugi','mETB\x20needs','rGrSu','EFFECT_ADD','LqkcG','isConditio','BZSiM','TkkAm','TATE\x20COUNT','exit','isDebuffAf','applyBattl','ent','MpDamage%1','bnbqg','usCore','fected','ction.\x0a','NIftZ','%1\x20is\x20inco','emFTB','ZBJds','MAXMP','er_onBattl','zfPnQ','aced\x20over\x20','_forceActi','_regexp','VisuMZ_1_S','sTNtN','AGI','alidCheck','determineN','aiApplyEva','isTpb','yMevTgrInf','length','faepx','uZNEM','Default','Condition','actor','LUK','ram','hpRate','aced\x20on\x20th','addElement','random','getEnemyId','ctionsGamb','IKnowledge','LEVEL','tZMXB','MCR','HYVvr','\x20condition','lTGCz','_aiKnowled','FIRST','match','CRI','EvaTgr','eAiTgrInfl','setSkill','ssfJW','gambit','BTYsA','setup','aiMevTgr','log','IdWithName','cQyLj','thdJm','Targets','sdQAY','code','\x20into\x20the\x20','Influence','TcRYN','e:\x20%1','name','ected','\x20plugin\x20pl','JIJIp','split','VeBal','format','\x20the\x20turnC','charAt','DkZJz','sStillVali','rating','HP%','IsWxT','ovdHK','trim','Count','OVER_HP','pPQeM','PRljy','MeetAllCon','ated\x20','fgnDy','isSkill','xparam','EvaTgrRate','er_isChant','JLFVN','autoRemova','EVA','EWRBQ','Plugin\x20Man','currentAct','For\x20more\x20i','GRD','aQTsR','GuDLB','isMax%1Aff','19715HBIJZx','KZmiO','AnyConditi','KveQj','attle\x20A.I.','nemyForAI','Rate','SiuDy','\x20largest\x20t','getElement','meetsTurnC','aiRatingVa','ARRAYNUM','art','static\x20cla','ActorRatin','aXTgY','e\x20Plugin\x20M','\x20%3\x20plugin','meetsState','note','VCUzb','forceValid','entBattleC','nByAIisSti','emETB','isActionVa','WhbgX','filterForc','Game_Actor','thWcW','ESzPU','ive','uences','LTvYg','sWejv','Any','aiStyle','ZMnZZ','wRUwE','MAT','_setup','checkTeamB','ondition','indexOf','isPhysical','HRG','attackElem','tion','clearAiTgr','states','on\x20does\x20no','_DEBUFF','yvocZ','rGIds','determineA','damage','\x20cannot\x20be','eActionsDe','isDetermin','pTMSE','n_isForOpp','vPBfV','oieDF','turnCount','Ekkyg','xGTUc','NOjRq','isMagical','terminedBy','MAX_SAFE_I','aeqcB','_stateTurn','udmZF','ctionsClas','eva','ions','isForFrien','UsoJG','NaZDU','EVAL','SyUha','e\x20plugin\x20l','CVUeN','initBattle','ets','ikWKy','ing\x20line\x20i','ager.','toUpperCas','apply','mallest\x20to','NkOsU','n.\x0aPlease\x20','QOEOs','116KxGnGF','ger_endAct','erBase_spa','HetJQ','_onSpotMad','makeAutoBa','Motions','noConditio','makeTarget','MeetAICond','4447989hTmjti','\x20met:\x20%1','item','Game_Battl','ctions','ing\x20a\x20requ','KiivJ','RemoveBuff','XTEZf','mPTB','e%1','YxqZZ','cted','Settings','isForOppon','aiLevel','%1\x20is\x20miss','checkSkill','isEnemy','eEnd','ctionsRand','yBdVb','ineValue','AI\x20Manager','NqEyn','mFTB','wledge','STATE\x20COUN','opponentsU','cMCFv','ZOPrz','itions','hGjbM','forcedTarg','ZTuTc','LevelCondi','luenceRate','MeetAnyCon','XauXF','dTargets','AddDebuff%','YXkej','lTiming','WithName','itemTarget','erBase_die','s\x20not\x20supp','isForNotUs','_forceVali','ETJaT','mev','elementRat','OnSpotAI','AIKnowledg','sCore','killsState','ZvmMC','nit','VisuMZ_4_A','meetsCondi','Naoef','ams','%1\x20%2\x20%3','getNextSub','statesByCa','vuRfJ','tBcbz','CEV','elementKno','EnemyAILev','VisuMZ_1_E','attleActio','_rngChance','1239004ncmHax','MRF','tegory','IjeZr','getAllCond','toLowerCas','AZzzO','YJvQs','aliveMembe','uLyfR','fOqDp','LuSJn','elementInf','isStateAff','dzuIk','TGR','ATK','AYFNV','classic','fluences','uence','aiKnowledg','rcedTarget','VFMfD','TzLAT','GALyU','argetActio','RemoveStat','highestTgr','czFJX','yElemental','FGzSK','erTarget','selectAllA','KhUAu','eFocusOppo','mGhpN','UnknownEle','ShuffleArr','dZcTM','LmSsa','STR','friendsUni','ction','evaRates','ditions','kvksk','AddBuff%1','LAST','SLfcu','The\x20reason','FlAfS','clearActio','mhp','argets','MpDrain%1','qMTuM','version','HDWgO','addAIKnowl','xdvmX','MAXHP','1440387FiGviQ','ewValidAIA','Game_Enemy','mpRate','HIT','descriptio','ject','MRG','isiio','maxTp','attackSkil','eActionByA','Game_Temp_','aiApplyMev','ggroContro','aiEvaTgr','18WjGJyP','ttleAction','EnemyRatin','jUNNP','meetsHpCon','YnAbk','isConfused','\x20a\x20Tier\x20%2','eAI','edge','HIGHEST','makeValidT','EnableAnyC','hasElement','MQDVK','wledgeRate','clearAIKno','TP%','oQJlu','FUNC','createFilt','die','GvwHr','NZRuj','isAggroAff','action','CXPOe','tCondition','BattleSyst','axfoU','rgets','ons','aiElementT','attleCore','_applyAIFo','gjhVI',',\x20view\x20the','oZQUc','elementId','sZaHN','ActorAIRef','asedTurnCo','one','onAllActio','jFEjn','RwIOz','ClowB','hasForcedT','JSON','includes','BattleAI','AboWq','NTEGER','TRG','isPlaytest','referenceE','PBklB','mevInfluen','_stateIDs','mevRates','uqcWa','ger_startA','randomTarg','Game_Unit_','etmJC','scope','lSystem','getStateId','_makeAutoB','onBattleEn','Game_Actio','OVE_DEBUFF','fEekZ','AllConditi','selectActi','or\x20VisuMZ_','PRyqd','aiTgrInflu','KKBpp','oQFRQ','rVSqG','VisuMZ_2_B','YwTrk','\x20could\x20not','pCeuD','EFFECT_REC','riance','lmheG','er_turnCou','hasValidTa','getDefault','skillId','nalAI','SXMlV','tpRate','sipAJ','ceRate','meetsSwitc','_elementID','VisuMZ_2_A','emPTB','startActio','eGCmC','doesTarget','anager.','allConditi','GZhlA','kFzTL','DhRmc','dLVdm','max','lId','pwEQO','DEF'];_0x1bd3=function(){return _0x299f5a;};return _0x1bd3();}const _0x179114=_0x1f67;(function(_0x117d37,_0x14f71c){const _0x4cefc0=_0x1f67,_0x4513cd=_0x117d37();while(!![]){try{const _0x235076=parseInt(_0x4cefc0(0x332))/(0x241d+-0xc46*-0x3+-0x2*0x2477)+parseInt(_0x4cefc0(0x1bc))/(-0x236d+0xa1*-0x9+0x2918)+-parseInt(_0x4cefc0(0x1fa))/(0x19d6+0x17a+-0x1b4d)+parseInt(_0x4cefc0(0x436))/(0x17b4+0x1*0x207+-0x1*0x19b7)*(parseInt(_0x4cefc0(0x3d7))/(0x905+-0x1424+0x4*0x2c9))+-parseInt(_0x4cefc0(0x20a))/(-0x37f+-0x434+0x7b9)*(parseInt(_0x4cefc0(0x325))/(-0x4*-0xef+-0xe40+0xa8b))+-parseInt(_0x4cefc0(0x33b))/(0x15d*0x7+0xbf*-0x16+0x1f*0x39)+parseInt(_0x4cefc0(0x173))/(0x1*-0x14c8+-0x17d2+0x2ca3);if(_0x235076===_0x14f71c)break;else _0x4513cd['push'](_0x4513cd['shift']());}catch(_0x298ca9){_0x4513cd['push'](_0x4513cd['shift']());}}}(_0x1bd3,-0x37e45+0x9599e+-0x97a1*-0x2));var label=_0x179114(0x23c),tier=tier||0x1*-0x10af+0xa*-0x147+0x1d75,dependencies=['VisuMZ_1_B'+_0x179114(0x22b)],pluginData=$plugins[_0x179114(0x2f8)](function(_0x3571db){const _0xaa5b9=_0x179114,_0xe01738={'NZRuj':function(_0x1271da,_0xba683a){return _0x1271da+_0xba683a;},'ovdHK':function(_0x5749a5,_0x50cb3b){return _0x5749a5+_0x50cb3b;}};return _0x3571db['status']&&_0x3571db[_0xaa5b9(0x1ff)+'n'][_0xaa5b9(0x23b)](_0xe01738[_0xaa5b9(0x221)](_0xe01738[_0xaa5b9(0x3bf)]('[',label),']'));})[0x1*-0x4f5+0xd*0x251+-0x1928];VisuMZ[label][_0x179114(0x180)]=VisuMZ[label][_0x179114(0x180)]||{},VisuMZ[_0x179114(0x2fc)+_0x179114(0x1b0)]=function(_0x4e5896,_0x45d8b9){const _0x12d26c=_0x179114,_0x3356df={'wwCUf':function(_0x50391c,_0x454a82){return _0x50391c(_0x454a82);},'Vqkdg':function(_0x1fec13,_0x500a8d){return _0x1fec13(_0x500a8d);},'sfXIa':_0x12d26c(0x2ae),'SyUha':function(_0x3346ac,_0x59054b){return _0x3346ac!==_0x59054b;},'DkZJz':function(_0xf253fc,_0xa16f37){return _0xf253fc(_0xa16f37);},'oQFRQ':_0x12d26c(0x3e3),'dDpvP':_0x12d26c(0x427),'vPBfV':function(_0x349aab,_0x3de8a2){return _0x349aab(_0x3de8a2);},'Naoef':_0x12d26c(0x293),'ZgqIa':function(_0x38d950,_0x3e4e1e){return _0x38d950!==_0x3e4e1e;},'sTNtN':_0x12d26c(0x23a),'XTEZf':'ARRAYJSON','rHamm':function(_0x23fa1a,_0x241d6d){return _0x23fa1a!==_0x241d6d;},'zuXmX':_0x12d26c(0x21d),'FxDYJ':function(_0x5ba26c,_0x3d55da){return _0x5ba26c!==_0x3d55da;},'pbfYS':'return\x200','KVRzr':'ARRAYFUNC','BZSiM':_0x12d26c(0x1e5),'KhUAu':_0x12d26c(0x29b),'fgnDy':function(_0x8393af,_0x2b7f91){return _0x8393af!==_0x2b7f91;},'PBklB':'STRUCT','vuRfJ':_0x12d26c(0x35f)+'T'};for(const _0x4b1f93 in _0x45d8b9){if(_0x4b1f93['match'](/(.*):(.*)/i)){const _0x4fe128=_0x3356df[_0x12d26c(0x301)](String,RegExp['$1']),_0x16b707=_0x3356df['Vqkdg'](String,RegExp['$2'])[_0x12d26c(0x430)+'e']()[_0x12d26c(0x3c0)]();let _0x40eacb,_0x2296f3,_0x10a666;switch(_0x16b707){case _0x3356df[_0x12d26c(0x360)]:_0x40eacb=_0x3356df[_0x12d26c(0x428)](_0x45d8b9[_0x4b1f93],'')?_0x3356df[_0x12d26c(0x3ba)](Number,_0x45d8b9[_0x4b1f93]):-0x35*-0x89+-0x1dce+-0x9*-0x29;break;case _0x3356df[_0x12d26c(0x259)]:_0x2296f3=_0x3356df['SyUha'](_0x45d8b9[_0x4b1f93],'')?JSON['parse'](_0x45d8b9[_0x4b1f93]):[],_0x40eacb=_0x2296f3[_0x12d26c(0x323)](_0x4e16d1=>Number(_0x4e16d1));break;case _0x3356df['dDpvP']:_0x40eacb=_0x3356df[_0x12d26c(0x428)](_0x45d8b9[_0x4b1f93],'')?_0x3356df[_0x12d26c(0x415)](eval,_0x45d8b9[_0x4b1f93]):null;break;case _0x3356df[_0x12d26c(0x1af)]:_0x2296f3=_0x3356df['ZgqIa'](_0x45d8b9[_0x4b1f93],'')?JSON['parse'](_0x45d8b9[_0x4b1f93]):[],_0x40eacb=_0x2296f3[_0x12d26c(0x323)](_0x3a3527=>eval(_0x3a3527));break;case _0x3356df[_0x12d26c(0x37e)]:_0x40eacb=_0x3356df['SyUha'](_0x45d8b9[_0x4b1f93],'')?JSON[_0x12d26c(0x335)](_0x45d8b9[_0x4b1f93]):'';break;case _0x3356df[_0x12d26c(0x17b)]:_0x2296f3=_0x3356df['rHamm'](_0x45d8b9[_0x4b1f93],'')?JSON[_0x12d26c(0x335)](_0x45d8b9[_0x4b1f93]):[],_0x40eacb=_0x2296f3[_0x12d26c(0x323)](_0x26aa53=>JSON['parse'](_0x26aa53));break;case _0x3356df[_0x12d26c(0x2f5)]:_0x40eacb=_0x3356df[_0x12d26c(0x308)](_0x45d8b9[_0x4b1f93],'')?new Function(JSON['parse'](_0x45d8b9[_0x4b1f93])):new Function(_0x3356df[_0x12d26c(0x28a)]);break;case _0x3356df[_0x12d26c(0x341)]:_0x2296f3=_0x3356df['rHamm'](_0x45d8b9[_0x4b1f93],'')?JSON[_0x12d26c(0x335)](_0x45d8b9[_0x4b1f93]):[],_0x40eacb=_0x2296f3[_0x12d26c(0x323)](_0x4bb8c6=>new Function(JSON[_0x12d26c(0x335)](_0x4bb8c6)));break;case _0x3356df[_0x12d26c(0x367)]:_0x40eacb=_0x3356df[_0x12d26c(0x428)](_0x45d8b9[_0x4b1f93],'')?_0x3356df[_0x12d26c(0x415)](String,_0x45d8b9[_0x4b1f93]):'';break;case _0x3356df[_0x12d26c(0x1de)]:_0x2296f3=_0x3356df['fgnDy'](_0x45d8b9[_0x4b1f93],'')?JSON[_0x12d26c(0x335)](_0x45d8b9[_0x4b1f93]):[],_0x40eacb=_0x2296f3[_0x12d26c(0x323)](_0x47bcf7=>String(_0x47bcf7));break;case _0x3356df[_0x12d26c(0x242)]:_0x10a666=_0x3356df[_0x12d26c(0x3c7)](_0x45d8b9[_0x4b1f93],'')?JSON['parse'](_0x45d8b9[_0x4b1f93]):{},_0x40eacb=VisuMZ[_0x12d26c(0x2fc)+'ams']({},_0x10a666);break;case _0x3356df[_0x12d26c(0x1b4)]:_0x2296f3=_0x3356df[_0x12d26c(0x428)](_0x45d8b9[_0x4b1f93],'')?JSON[_0x12d26c(0x335)](_0x45d8b9[_0x4b1f93]):[],_0x40eacb=_0x2296f3[_0x12d26c(0x323)](_0x42d113=>VisuMZ[_0x12d26c(0x2fc)+'ams']({},JSON[_0x12d26c(0x335)](_0x42d113)));break;default:continue;}_0x4e5896[_0x4fe128]=_0x40eacb;}}return _0x4e5896;},(_0x20741c=>{const _0x518227=_0x179114,_0x4c00e9={'sWejv':function(_0x88fac3,_0x4b8f42){return _0x88fac3(_0x4b8f42);},'JLFVN':_0x518227(0x183)+_0x518227(0x178)+_0x518227(0x361)+_0x518227(0x434)+'install\x20%2'+_0x518227(0x3ad)+_0x518227(0x3d0)+_0x518227(0x42f),'eBhpD':function(_0x258b90,_0xf18ee1){return _0x258b90(_0xf18ee1);},'SNdkc':function(_0x2a8655,_0x1e0892){return _0x2a8655!==_0x1e0892;},'AOXmr':function(_0x2d9001,_0x4679bd){return _0x2d9001(_0x4679bd);},'qMTuM':'%1\x27s\x20versi'+_0x518227(0x40a)+'t\x20match\x20pl'+'ugin\x27s.\x20Pl'+'ease\x20updat'+'e\x20it\x20in\x20th'+_0x518227(0x3e8)+_0x518227(0x272),'SiuDy':function(_0x558112,_0x69ef41){return _0x558112<_0x69ef41;},'TcRYN':_0x518227(0x374)+_0x518227(0x2e5)+_0x518227(0x38e)+_0x518227(0x429)+_0x518227(0x322)+_0x518227(0x211)+_0x518227(0x3b3)+_0x518227(0x37a)+'other\x20Tier'+_0x518227(0x3e9)+'s.\x0aPlease\x20'+_0x518227(0x287)+'e\x20plugin\x20l'+'ist\x20from\x20s'+_0x518227(0x432)+_0x518227(0x3df)+_0x518227(0x31f)+'s.'},_0x5bb951=_0x20741c[_0x518227(0x3b1)];for(const _0x2c3870 of dependencies){if(!Imported[_0x2c3870]){_0x4c00e9[_0x518227(0x3fa)](alert,_0x4c00e9[_0x518227(0x3cc)][_0x518227(0x3b7)](_0x5bb951,_0x2c3870)),SceneManager[_0x518227(0x36a)]();break;}}const _0x345b8e=_0x20741c[_0x518227(0x1ff)+'n'];if(_0x345b8e[_0x518227(0x39c)](/\[Version[ ](.*?)\]/i)){const _0x51018f=_0x4c00e9[_0x518227(0x2b2)](Number,RegExp['$1']);_0x4c00e9[_0x518227(0x345)](_0x51018f,VisuMZ[label]['version'])&&(_0x4c00e9['AOXmr'](alert,_0x4c00e9[_0x518227(0x1f4)][_0x518227(0x3b7)](_0x5bb951,_0x51018f)),SceneManager['exit']());}if(_0x345b8e[_0x518227(0x39c)](/\[Tier[ ](\d+)\]/i)){const _0x52542c=_0x4c00e9['eBhpD'](Number,RegExp['$1']);_0x4c00e9[_0x518227(0x3de)](_0x52542c,tier)?(_0x4c00e9[_0x518227(0x3fa)](alert,_0x4c00e9[_0x518227(0x3af)][_0x518227(0x3b7)](_0x5bb951,_0x52542c,tier)),SceneManager['exit']()):tier=Math[_0x518227(0x278)](_0x52542c,tier);}VisuMZ[_0x518227(0x2fc)+_0x518227(0x1b0)](VisuMZ[label]['Settings'],_0x20741c['parameters']);})(pluginData);function AIManager(){const _0x4387a8=_0x179114,_0x35fcc5={'mGhpN':_0x4387a8(0x318)+_0x4387a8(0x3e5)+'ss'};throw new Error(_0x35fcc5[_0x4387a8(0x1e0)]);}function _0x1f67(_0x3f2a22,_0x357ae5){const _0x253095=_0x1bd3();return _0x1f67=function(_0x4eef17,_0x185faa){_0x4eef17=_0x4eef17-(-0x1fba+-0x1e4c+0x3f70);let _0x444bc2=_0x253095[_0x4eef17];return _0x444bc2;},_0x1f67(_0x3f2a22,_0x357ae5);}AIManager[_0x179114(0x37c)]={'noCondition':/<NO AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'allCondition':/<ALL AI (?:TARGETS|CONDITION|CONDITIONS)>\s*([\s\S]*)\s*<\/ALL AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'anyCondition':/<ANY AI (?:TARGETS|CONDITION|CONDITIONS)>\s*([\s\S]*)\s*<\/ANY AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'bypassElementTgr':/<(?:NO|BYPASS) AI (?:ELEMENT|ELEMENTAL|ELEMENT RATE) INFLUENCE>/i,'bypassEvaTgr':/<(?:NO|BYPASS) AI (?:EVA|EVASION) INFLUENCE>/i,'bypassMevTgr':/<(?:NO|BYPASS) AI (?:MEV|MAGIC EVASION) INFLUENCE>/i,'aiElementTgr':/<AI (?:ELEMENT|ELEMENTAL|ELEMENT RATE) INFLUENCE: (.*)>/i,'aiEvaTgr':/<AI (?:EVA|EVASION) INFLUENCE: (.*)>/i,'aiMevTgr':/<AI (?:MEV|MAGIC EVASION) INFLUENCE: (.*)>/i,'aiLevel':/<AI LEVEL: (\d+)>/i,'aiRatingVariance':/<AI RATING VARIANCE: (\d+)>/i,'aiTarget':/<AI (?:TARGET|TARGETS):[ ](.*)>/i,'aiStyle':/<AI STYLE:[ ](.*)>/i},AIManager[_0x179114(0x366)+_0x179114(0x266)]=function(_0x582839){const _0x5d8777=_0x179114,_0x34e1af={'XauXF':function(_0x4d0ab0,_0x24ecce){return _0x4d0ab0>_0x24ecce;}};if(!_0x582839)return![];return _0x34e1af[_0x5d8777(0x199)](this[_0x5d8777(0x1c0)+_0x5d8777(0x192)](_0x582839)[_0x5d8777(0x385)],-0x2*-0x3eb+0x1607*0x1+-0x37*0x8b)||_0x34e1af[_0x5d8777(0x199)](this['getAnyCond'+_0x5d8777(0x192)](_0x582839)[_0x5d8777(0x385)],-0x1*0x1c16+-0x1eb6+0x3acc);},AIManager[_0x179114(0x1c0)+_0x179114(0x192)]=function(_0xd58661){const _0x365cac=_0x179114,_0xf959e9={'wRUwE':function(_0x34e636,_0x3fb87f){return _0x34e636(_0x3fb87f);}};if(_0xd58661['note'][_0x365cac(0x39c)](AIManager[_0x365cac(0x37c)][_0x365cac(0x170)+'n']))return[];else return _0xd58661[_0x365cac(0x3eb)]['match'](AIManager[_0x365cac(0x37c)][_0x365cac(0x273)+'on'])?_0xf959e9[_0x365cac(0x3fe)](String,RegExp['$1'])[_0x365cac(0x3b5)](/[\r\n]+/)['remove'](''):this[_0x365cac(0x264)+_0x365cac(0x253)+'ons'](_0xd58661);},AIManager['getAnyCond'+'itions']=function(_0x30482c){const _0x3e3279=_0x179114,_0x3842c3={'aQTsR':function(_0x5d1a0c,_0x244d67){return _0x5d1a0c(_0x244d67);}};if(_0x30482c['note'][_0x3e3279(0x39c)](AIManager['_regexp'][_0x3e3279(0x170)+'n']))return[];else return _0x30482c[_0x3e3279(0x3eb)][_0x3e3279(0x39c)](AIManager[_0x3e3279(0x37c)][_0x3e3279(0x2c3)+'on'])?_0x3842c3[_0x3e3279(0x3d4)](String,RegExp['$1'])['split'](/[\r\n]+/)[_0x3e3279(0x317)](''):this[_0x3e3279(0x264)+_0x3e3279(0x3d9)+_0x3e3279(0x229)](_0x30482c);},AIManager[_0x179114(0x264)+'AllConditi'+_0x179114(0x229)]=function(_0x2e58c8){const _0x1eabd7=_0x179114,_0x399530={'NcPrF':_0x1eabd7(0x2da)};if(!VisuMZ['BattleAI'][_0x1eabd7(0x180)][_0x1eabd7(0x388)]['EnableAllC'+'on'])return[];if(_0x2e58c8['note'][_0x1eabd7(0x39c)](AIManager['_regexp'][_0x1eabd7(0x2c3)+'on']))return[];return this[_0x1eabd7(0x2af)+_0x1eabd7(0x225)+'s'](_0x2e58c8,_0x399530[_0x1eabd7(0x331)]);},AIManager[_0x179114(0x264)+_0x179114(0x3d9)+'ons']=function(_0x54da14){const _0xf80536=_0x179114,_0x5c39d6={'onaPg':_0xf80536(0x3fb)};if(!VisuMZ['BattleAI'][_0xf80536(0x180)]['Default'][_0xf80536(0x216)+'on'])return[];if(_0x54da14[_0xf80536(0x3eb)][_0xf80536(0x39c)](AIManager[_0xf80536(0x37c)]['allConditi'+'on']))return[];return this[_0xf80536(0x2af)+_0xf80536(0x225)+'s'](_0x54da14,_0x5c39d6[_0xf80536(0x31e)]);},AIManager[_0x179114(0x2af)+_0x179114(0x225)+'s']=function(_0x3a112b,_0x5c3edf){const _0x30e281=_0x179114,_0x3653f8={'AZzzO':_0x30e281(0x1f9),'KJKAW':'MAXMP','voXRL':_0x30e281(0x1cc),'uKuQK':_0x30e281(0x27b),'hTLUg':_0x30e281(0x3ff),'cdJkJ':_0x30e281(0x342),'fEekZ':_0x30e281(0x37f),'TzLAT':_0x30e281(0x38b),'dDLqi':_0x30e281(0x359),'MQDVK':_0x30e281(0x36e),'swIsR':'HpRecover%'+'1','NkOsU':'MpRecover%'+'1','HetJQ':_0x30e281(0x2ad),'axfoU':_0x30e281(0x1f3),'jAawX':function(_0x34ea1b,_0x516417){return _0x34ea1b>_0x516417;},'yFFtB':function(_0x2a19fb,_0x78d7f7){return _0x2a19fb<_0x78d7f7;},'GALyU':function(_0x5b20ea,_0x55e5c7){return _0x5b20ea>_0x55e5c7;},'XJkch':function(_0x4c33b2,_0x3c8aa6){return _0x4c33b2<_0x3c8aa6;},'amwfi':function(_0x1827e2,_0x30cc8f){return _0x1827e2===_0x30cc8f;},'rGrSu':_0x30e281(0x2b0),'kdBcA':_0x30e281(0x1d7)+_0x30e281(0x17d),'gjhVI':_0x30e281(0x1eb),'NqEyn':_0x30e281(0x19b)+'1','ClowB':_0x30e281(0x17a)+'%1','YJvQs':_0x30e281(0x29c)+'ff%1'};if(!_0x3a112b)return[];const _0x4a7f23=VisuMZ[_0x30e281(0x23c)][_0x30e281(0x180)]['Default'],_0x36b9a0=[_0x3653f8[_0x30e281(0x1c2)],_0x3653f8['KJKAW'],_0x3653f8['voXRL'],_0x3653f8[_0x30e281(0x310)],_0x3653f8['hTLUg'],_0x3653f8[_0x30e281(0x311)],_0x3653f8[_0x30e281(0x252)],_0x3653f8[_0x30e281(0x1d4)]],_0x5efcef=_0x3a112b[_0x30e281(0x40f)][_0x30e281(0x297)],_0x1d2e86=_0x3a112b['effects'];let _0x19fe02=[],_0x38fd8d='',_0x3763cb='';switch(_0x5efcef){case 0x17*0x73+0x664+-0x10b8:_0x38fd8d=_0x3653f8['dDLqi'][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d],_0x19fe02=_0x19fe02[_0x30e281(0x35b)](_0x3763cb[_0x30e281(0x3b5)](/[\r\n]+/)['remove'](''));break;case-0x18eb*0x1+0x48*-0x14+0x1e8d:_0x38fd8d=_0x3653f8[_0x30e281(0x218)][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d],_0x19fe02=_0x19fe02[_0x30e281(0x35b)](_0x3763cb[_0x30e281(0x3b5)](/[\r\n]+/)['remove'](''));break;case-0x1275+-0xc5f*-0x1+-0x7*-0xdf:_0x38fd8d=_0x3653f8[_0x30e281(0x2eb)][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d],_0x19fe02=_0x19fe02[_0x30e281(0x35b)](_0x3763cb['split'](/[\r\n]+/)[_0x30e281(0x317)](''));break;case 0xd1*0x13+-0x6e2+-0x89d:_0x38fd8d=_0x3653f8['NkOsU'][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d],_0x19fe02=_0x19fe02[_0x30e281(0x35b)](_0x3763cb[_0x30e281(0x3b5)](/[\r\n]+/)[_0x30e281(0x317)](''));break;case-0x115*-0x15+-0x143d+-0x277*0x1:_0x38fd8d=_0x3653f8[_0x30e281(0x16c)][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d],_0x19fe02=_0x19fe02['concat'](_0x3763cb[_0x30e281(0x3b5)](/[\r\n]+/)[_0x30e281(0x317)](''));break;case 0x1*0x1a02+0x47*-0x47+-0x64b:_0x38fd8d=_0x3653f8[_0x30e281(0x227)][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d],_0x19fe02=_0x19fe02['concat'](_0x3763cb[_0x30e281(0x3b5)](/[\r\n]+/)[_0x30e281(0x317)](''));break;}for(const _0x4212bd of _0x1d2e86){if(!_0x4212bd)continue;switch(_0x4212bd[_0x30e281(0x3ac)]){case Game_Action[_0x30e281(0x25f)+_0x30e281(0x3c2)]:if(_0x3653f8[_0x30e281(0x2bd)](_0x4212bd['value1'],0xc83*-0x2+0x6d*-0xe+0x1efc)||_0x3653f8[_0x30e281(0x2bd)](_0x4212bd[_0x30e281(0x357)],0x6*0x2a1+-0xc47+0x5*-0xb3))_0x38fd8d=_0x3653f8['swIsR'][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d],_0x19fe02=_0x19fe02[_0x30e281(0x35b)](_0x3763cb[_0x30e281(0x3b5)](/[\r\n]+/)[_0x30e281(0x317)](''));else(_0x3653f8['yFFtB'](_0x4212bd[_0x30e281(0x2b6)],0x15a0+-0x3*0xaf1+0xb33*0x1)||_0x3653f8['yFFtB'](_0x4212bd[_0x30e281(0x357)],-0xa3b+0x1d*-0xb6+-0x95*-0x35))&&(_0x38fd8d=_0x3653f8['dDLqi']['format'](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d],_0x19fe02=_0x19fe02[_0x30e281(0x35b)](_0x3763cb[_0x30e281(0x3b5)](/[\r\n]+/)['remove']('')));break;case Game_Action['EFFECT_REC'+_0x30e281(0x2a4)]:if(_0x3653f8[_0x30e281(0x1d5)](_0x4212bd['value1'],0x2*-0x71f+-0x5bf+0x13fd)||_0x3653f8[_0x30e281(0x2bd)](_0x4212bd[_0x30e281(0x357)],0x1*-0x2239+0xecf+0x136a))_0x38fd8d=_0x3653f8[_0x30e281(0x433)][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d],_0x19fe02=_0x19fe02[_0x30e281(0x35b)](_0x3763cb[_0x30e281(0x3b5)](/[\r\n]+/)[_0x30e281(0x317)](''));else(_0x3653f8['XJkch'](_0x4212bd[_0x30e281(0x2b6)],0x1*-0x4ed+0x1d38+0x184b*-0x1)||_0x3653f8['yFFtB'](_0x4212bd[_0x30e281(0x357)],-0xfbf+-0x375+0x2*0x99a))&&(_0x38fd8d=_0x3653f8[_0x30e281(0x218)]['format'](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d],_0x19fe02=_0x19fe02[_0x30e281(0x35b)](_0x3763cb[_0x30e281(0x3b5)](/[\r\n]+/)['remove']('')));break;case Game_Action[_0x30e281(0x364)+'_STATE']:if(_0x3653f8[_0x30e281(0x356)](_0x4212bd[_0x30e281(0x2ce)],-0x1075*-0x2+-0xd46*-0x2+-0x3b76))continue;_0x38fd8d=_0x3653f8[_0x30e281(0x363)][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d][_0x30e281(0x3b7)](_0x4212bd[_0x30e281(0x2ce)]),_0x19fe02=_0x19fe02['concat'](_0x3763cb[_0x30e281(0x3b5)](/[\r\n]+/)[_0x30e281(0x317)](''));break;case Game_Action['EFFECT_REM'+'OVE_STATE']:_0x38fd8d=_0x3653f8['kdBcA'][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d][_0x30e281(0x3b7)](_0x4212bd['dataId']),_0x19fe02=_0x19fe02[_0x30e281(0x35b)](_0x3763cb['split'](/[\r\n]+/)['remove'](''));break;case Game_Action[_0x30e281(0x364)+_0x30e281(0x333)]:_0x38fd8d=_0x3653f8[_0x30e281(0x22d)][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d][_0x30e281(0x3b7)](_0x36b9a0[_0x4212bd[_0x30e281(0x2ce)]]),_0x19fe02=_0x19fe02['concat'](_0x3763cb[_0x30e281(0x3b5)](/[\r\n]+/)[_0x30e281(0x317)](''));break;case Game_Action[_0x30e281(0x364)+_0x30e281(0x40b)]:_0x38fd8d=_0x3653f8[_0x30e281(0x18b)][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d][_0x30e281(0x3b7)](_0x36b9a0[_0x4212bd['dataId']]),_0x19fe02=_0x19fe02[_0x30e281(0x35b)](_0x3763cb['split'](/[\r\n]+/)['remove'](''));break;case Game_Action[_0x30e281(0x35d)+_0x30e281(0x315)]:_0x38fd8d=_0x3653f8[_0x30e281(0x238)]['format'](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d][_0x30e281(0x3b7)](_0x36b9a0[_0x4212bd['dataId']]),_0x19fe02=_0x19fe02[_0x30e281(0x35b)](_0x3763cb[_0x30e281(0x3b5)](/[\r\n]+/)[_0x30e281(0x317)](''));break;case Game_Action[_0x30e281(0x35d)+_0x30e281(0x251)]:_0x38fd8d=_0x3653f8[_0x30e281(0x1c3)][_0x30e281(0x3b7)](_0x5c3edf),_0x3763cb=_0x4a7f23[_0x38fd8d][_0x30e281(0x3b7)](_0x36b9a0[_0x4212bd[_0x30e281(0x2ce)]]),_0x19fe02=_0x19fe02[_0x30e281(0x35b)](_0x3763cb['split'](/[\r\n]+/)['remove'](''));break;}}return _0x19fe02;},AIManager[_0x179114(0x3ed)+_0x179114(0x3aa)]=function(_0x44e284,_0x5e977c){const _0x53bd49=_0x179114;this['_forceVali'+_0x53bd49(0x19a)]=this['makeValidT'+_0x53bd49(0x1f2)](_0x44e284,_0x5e977c);},AIManager[_0x179114(0x349)+_0x179114(0x19a)]=function(){const _0x13e498=_0x179114;this[_0x13e498(0x1a3)+_0x13e498(0x19a)]=[];},AIManager[_0x179114(0x194)+'ets']=function(){const _0x4f3613=_0x179114;return this[_0x4f3613(0x1a3)+_0x4f3613(0x19a)]=this[_0x4f3613(0x1a3)+_0x4f3613(0x19a)]||[],this[_0x4f3613(0x1a3)+_0x4f3613(0x19a)];},AIManager[_0x179114(0x239)+_0x179114(0x1f2)]=function(){const _0x318d72=_0x179114,_0x4e09db={'oZQUc':function(_0x56b005,_0x3b5b53){return _0x56b005>_0x3b5b53;}};return _0x4e09db[_0x318d72(0x22f)](this[_0x318d72(0x194)+'ets']()[_0x318d72(0x385)],-0x1*-0x824+0x1a07+-0x1*0x222b);},AIManager[_0x179114(0x263)+_0x179114(0x228)]=function(_0x3e1910,_0x1dd811){const _0x19cceb=_0x179114,_0x2e346f={'Ekkyg':function(_0x372866,_0x495037){return _0x372866>=_0x495037;}};if(!_0x3e1910)return![];if(!_0x1dd811)return![];if(!DataManager[_0x19cceb(0x3c8)](_0x1dd811))return;return this['isConditio'+_0x19cceb(0x266)](_0x1dd811)?_0x2e346f[_0x19cceb(0x418)](this[_0x19cceb(0x215)+_0x19cceb(0x1f2)](_0x3e1910,_0x1dd811)[_0x19cceb(0x385)],-0x1*0x18c5+0x1*0x1c73+-0x3ad):!![];},AIManager[_0x179114(0x215)+_0x179114(0x1f2)]=function(_0x588d2b,_0x3f6227){const _0x22cb4b=_0x179114;let _0x5ab77f=[];if(this['isConditio'+'nalAI'](_0x3f6227)){const _0x161295=this[_0x22cb4b(0x1c0)+'itions'](_0x3f6227),_0x16bd02=this[_0x22cb4b(0x2a6)+_0x22cb4b(0x192)](_0x3f6227),_0x50e5bb=new Game_Action(_0x588d2b);_0x50e5bb[_0x22cb4b(0x3a0)](_0x3f6227['id']);let _0x5d7bb6=AIManager['checkSkill'+'Targets'](_0x588d2b,_0x50e5bb);this[_0x22cb4b(0x1bb)]=Math[_0x22cb4b(0x390)](),_0x5ab77f=_0x5d7bb6[_0x22cb4b(0x2f8)](_0x796df5=>this[_0x22cb4b(0x271)+_0x22cb4b(0x172)+_0x22cb4b(0x192)](_0x588d2b,_0x796df5,_0x3f6227,_0x161295,_0x16bd02));}return _0x5ab77f;},AIManager[_0x179114(0x184)+_0x179114(0x3aa)]=function(_0x39e101,_0x3716ca){const _0x154232=_0x179114;let _0x3d4c30=[];if(Imported[_0x154232(0x26d)+_0x154232(0x208)+_0x154232(0x24c)]&&_0x3716ca[_0x154232(0x222)+_0x154232(0x3b2)]()){const _0x46ffd2=_0x3716ca[_0x154232(0x181)+'ent']()?_0x39e101['opponentsU'+_0x154232(0x1ac)]():_0x39e101[_0x154232(0x1e6)+'t']();_0x3d4c30=[_0x46ffd2[_0x154232(0x1d8)+_0x154232(0x2b8)]()];}else{if(_0x3716ca['isForEvery'+_0x154232(0x234)]())_0x3d4c30=$gameParty[_0x154232(0x1c4)+'rs']()[_0x154232(0x35b)]($gameTroop[_0x154232(0x1c4)+'rs']());else{if(_0x3716ca[_0x154232(0x2e9)+'e']&&_0x3716ca[_0x154232(0x2e9)+'e']()){const _0x23fd8c=_0x3716ca[_0x154232(0x175)]()[_0x154232(0x24b)];if(_0x3716ca[_0x154232(0x2e9)+_0x154232(0x1df)+_0x154232(0x285)]())_0x3d4c30=_0x39e101[_0x154232(0x18f)+_0x154232(0x1ac)]()['aliveMembe'+'rs']();else _0x3716ca[_0x154232(0x2e9)+'eFocusFrie'+'nds']()&&(_0x3d4c30=_0x39e101[_0x154232(0x1e6)+'t']()['aliveMembe'+'rs']());}else{if(_0x3716ca[_0x154232(0x181)+_0x154232(0x36d)]())_0x3d4c30=_0x39e101['opponentsU'+'nit']()['aliveMembe'+'rs']();else{if(_0x3716ca[_0x154232(0x32b)+_0x154232(0x2a8)]())_0x3d4c30=_0x39e101[_0x154232(0x1e6)+'t']()['deadMember'+'s']();else _0x3716ca[_0x154232(0x424)+'d']()&&!_0x3716ca[_0x154232(0x32b)+_0x154232(0x2a8)]()&&(_0x3d4c30=_0x39e101['friendsUni'+'t']()[_0x154232(0x1c4)+'rs']());}}}}return _0x3716ca['isForNotUs'+'er']&&_0x3716ca[_0x154232(0x1a2)+'er']()&&_0x3d4c30[_0x154232(0x317)](_0x39e101),_0x3d4c30;},AIManager['doesTarget'+_0x179114(0x172)+_0x179114(0x192)]=function(_0x2c07ca,_0x44c320,_0xfd2ead,_0x367d62,_0x3e5e16){const _0x2b63d5=_0x179114;return this[_0x2b63d5(0x271)+_0x2b63d5(0x3c5)+_0x2b63d5(0x1e9)](_0x2c07ca,_0x44c320,_0xfd2ead,_0x367d62)&&this[_0x2b63d5(0x271)+'MeetAnyCon'+_0x2b63d5(0x1e9)](_0x2c07ca,_0x44c320,_0xfd2ead,_0x3e5e16);},AIManager[_0x179114(0x271)+_0x179114(0x3c5)+_0x179114(0x1e9)]=function(_0x4bcc42,_0x32628d,_0x43f3d4,_0x3118c7){const _0x3dabb8=_0x179114,_0x2b43f5={'GuDLB':function(_0x260409,_0x183300){return _0x260409<=_0x183300;},'sZaHN':function(_0x2fe232,_0x2ef97f){return _0x2fe232<=_0x2ef97f;}};if(_0x2b43f5[_0x3dabb8(0x3d5)](_0x3118c7[_0x3dabb8(0x385)],-0x1b70+-0x2*-0xaca+-0x3c*-0x19))return!![];for(const _0x567b22 of _0x3118c7){if(!_0x567b22)continue;if(_0x2b43f5[_0x3dabb8(0x231)](_0x567b22[_0x3dabb8(0x385)],0xc*-0xc7+-0x2583+0x2ed7))continue;if(!this[_0x3dabb8(0x30f)+_0x3dabb8(0x305)](_0x4bcc42))return!![];if(!this[_0x3dabb8(0x271)+'MeetCondit'+_0x3dabb8(0x295)](_0x4bcc42,_0x32628d,_0x43f3d4,_0x567b22))return![];}return!![];},AIManager[_0x179114(0x271)+_0x179114(0x198)+_0x179114(0x1e9)]=function(_0x187268,_0xd2876e,_0x10f8b7,_0x4e116a){const _0x76f11f=_0x179114,_0x49e5bc={'hWgTi':function(_0x22eb35,_0x3ce58a){return _0x22eb35<=_0x3ce58a;},'ZvmMC':function(_0x499a5f,_0x143d6c){return _0x499a5f<=_0x143d6c;}};if(_0x49e5bc[_0x76f11f(0x34b)](_0x4e116a[_0x76f11f(0x385)],-0x9d9*-0x2+-0xa9b+-0xd*0xb3))return!![];for(const _0x22539f of _0x4e116a){if(!_0x22539f)continue;if(_0x49e5bc[_0x76f11f(0x1ab)](_0x22539f[_0x76f11f(0x385)],0x2*-0x1b3+0xf49+-0xbe3*0x1))continue;if(!this[_0x76f11f(0x30f)+_0x76f11f(0x305)](_0x187268))return!![];if(this[_0x76f11f(0x271)+_0x76f11f(0x2d3)+_0x76f11f(0x295)](_0x187268,_0xd2876e,_0x10f8b7,_0x22539f))return!![];}return![];},AIManager[_0x179114(0x30f)+_0x179114(0x305)]=function(_0x298f2a){const _0xca239b=_0x179114,_0x21a945={'NaZDU':function(_0x1ab36a,_0x3784c7){return _0x1ab36a<_0x3784c7;}},_0x115e37=_0x298f2a[_0xca239b(0x182)]();return _0x21a945[_0xca239b(0x426)](Math[_0xca239b(0x33d)](0x1652+-0x14b6+-0x3*0x68),_0x115e37);},AIManager[_0x179114(0x271)+_0x179114(0x2d3)+_0x179114(0x295)]=function(_0x3cc12b,_0x304f8d,_0x4b1be8,_0x4c0457){const _0xd0c64e=_0x179114,_0x21cd83={'XAJJK':_0xd0c64e(0x1f9),'GGasE':_0xd0c64e(0x377),'uxccW':_0xd0c64e(0x1cc),'lmheG':'DEF','xGTUc':'MAT','tlzOV':'MDF','tchkG':'AGI','CVUeN':_0xd0c64e(0x38b),'fCPdr':function(_0x1711a3,_0x4e97d7){return _0x1711a3===_0x4e97d7;},'lFmeP':_0xd0c64e(0x294),'KnfZD':_0xd0c64e(0x2c2)+_0xd0c64e(0x42e)+_0xd0c64e(0x1a1)+_0xd0c64e(0x27c)+_0xd0c64e(0x3db)+_0xd0c64e(0x329),'ZMnZZ':function(_0x1c4a10,_0x3f7b54){return _0x1c4a10+_0x3f7b54;},'zUXmU':_0xd0c64e(0x1ee)+'\x20is\x20due\x20to'+_0xd0c64e(0x3b8)+'ount()\x20fun'+_0xd0c64e(0x372),'LTvYg':_0xd0c64e(0x3d2)+_0xd0c64e(0x303)+_0xd0c64e(0x22e)+'\x20help\x20file'+'.','kFzTL':function(_0x5440a3,_0x3d38b9){return _0x5440a3(_0x3d38b9);},'QOEOs':function(_0x24f48f,_0x2bad07){return _0x24f48f(_0x2bad07);},'yBdVb':function(_0xa862b,_0x278388){return _0xa862b(_0x278388);},'udmZF':_0xd0c64e(0x2d4),'KyWuQ':_0xd0c64e(0x1b1),'BTYsA':_0xd0c64e(0x18a)+_0xd0c64e(0x398)+_0xd0c64e(0x410)+_0xd0c64e(0x174),'FDsmU':function(_0x5eff5b,_0x1a961a){return _0x5eff5b*_0x1a961a;},'lnKzj':function(_0x54865a,_0x3d781d){return _0x54865a<_0x3d781d;},'SLfcu':function(_0x5990a2,_0x53fb1b){return _0x5990a2===_0x53fb1b;},'tjgyk':function(_0x4e4789,_0x43ef2b){return _0x4e4789(_0x43ef2b);},'pTMSE':function(_0xd2c6d,_0x265334){return _0xd2c6d(_0x265334);},'JIJIp':function(_0x43b0a7,_0x95ded){return _0x43b0a7(_0x95ded);},'mvxAz':function(_0x16516c,_0x1c5cb8){return _0x16516c(_0x1c5cb8);},'KjxxM':_0xd0c64e(0x346)+'ed','MFYDV':function(_0x52ceb7,_0x467554){return _0x52ceb7+_0x467554;},'SlHwX':function(_0xe75424,_0x43ecd2){return _0xe75424(_0x43ecd2);},'OcGeS':function(_0xd96005,_0x4ac7f3){return _0xd96005(_0x4ac7f3);},'bMEFD':_0xd0c64e(0x3d6)+_0xd0c64e(0x3b2),'HDWgO':function(_0xc7e4ff,_0x3141a9){return _0xc7e4ff(_0x3141a9);},'jUNNP':function(_0x6564ab,_0x24e575){return _0x6564ab(_0x24e575);},'RwIOz':function(_0x11df08,_0x39302b){return _0x11df08+_0x39302b;},'GvwHr':function(_0x250232,_0x4e1584){return _0x250232(_0x4e1584);},'sipAJ':function(_0x50e71b,_0xb107c2){return _0x50e71b(_0xb107c2);}},_0x1039f7=[_0x21cd83[_0xd0c64e(0x2dc)],_0x21cd83[_0xd0c64e(0x2e1)],_0x21cd83[_0xd0c64e(0x30e)],_0x21cd83[_0xd0c64e(0x261)],_0x21cd83[_0xd0c64e(0x419)],_0x21cd83['tlzOV'],_0x21cd83['tchkG'],_0x21cd83[_0xd0c64e(0x42a)]];if(_0x21cd83[_0xd0c64e(0x2ec)](_0x4c0457[_0xd0c64e(0x430)+'e']()[_0xd0c64e(0x3c0)](),_0x21cd83['lFmeP']))return!![];const _0x435e92=_0x3cc12b;if(!VisuMZ[_0xd0c64e(0x23c)]['Settings'][_0xd0c64e(0x29e)][_0xd0c64e(0x1a7)]){if(_0x4c0457[_0xd0c64e(0x39c)](/turnCount\(\)/i)){if($gameTemp[_0xd0c64e(0x240)]()&&!this[_0xd0c64e(0x31d)+_0xd0c64e(0x3c1)]){let _0x196ffb=_0x21cd83[_0xd0c64e(0x348)];_0x196ffb+=_0x21cd83[_0xd0c64e(0x3fd)](_0x4c0457,'\x0a\x0a'),_0x196ffb+=_0x21cd83['zUXmU'],_0x196ffb+=_0x21cd83[_0xd0c64e(0x3f9)],_0x21cd83[_0xd0c64e(0x275)](alert,_0x196ffb),this[_0xd0c64e(0x31d)+_0xd0c64e(0x3c1)]=!![];}return![];}}if(_0x4c0457[_0xd0c64e(0x39c)](/(.*) (\>=|\>|===|!==|\<|\<=) (.*)/i)){const _0x5186ca=[_0x21cd83[_0xd0c64e(0x275)](String,RegExp['$1']),_0x21cd83[_0xd0c64e(0x435)](String,RegExp['$2']),_0x21cd83[_0xd0c64e(0x188)](String,RegExp['$3'])],_0x5065d7=this[_0xd0c64e(0x355)+_0xd0c64e(0x189)](_0x3cc12b,_0x304f8d,_0x4b1be8,_0x5186ca[0x808+0x1427+0x6f*-0x41]),_0x1b3b42=_0x5186ca[-0x255d*0x1+-0x238+-0x699*-0x6],_0x231aba=this[_0xd0c64e(0x355)+_0xd0c64e(0x189)](_0x3cc12b,_0x304f8d,_0x4b1be8,_0x5186ca[-0xcba+-0x1b5a+0x2816*0x1]);window[_0x21cd83[_0xd0c64e(0x420)]]=window['a']=window['b']=undefined;const _0x649370=_0x21cd83[_0xd0c64e(0x289)][_0xd0c64e(0x3b7)](_0x5065d7,_0x1b3b42,_0x231aba);try{return _0x21cd83[_0xd0c64e(0x188)](eval,_0x649370);}catch(_0x4a0667){return $gameTemp[_0xd0c64e(0x240)]()&&(console['log'](_0x21cd83[_0xd0c64e(0x3a3)][_0xd0c64e(0x3b7)](_0x4c0457)),console['log'](_0x4a0667)),!![];}}else{if(_0x4c0457[_0xd0c64e(0x39c)](/(\d+\.?\d*)([%％]) CHANCE/i)){const _0x457dfa=_0x21cd83[_0xd0c64e(0x343)](_0x21cd83[_0xd0c64e(0x435)](Number,RegExp['$1']),0x269c*0x1+-0x5f5+0x20a7*-0x1+0.01);return _0x21cd83[_0xd0c64e(0x2b1)](this['_rngChance'],_0x457dfa);}else{if(_0x4c0457[_0xd0c64e(0x39c)](/SWITCH (\d+) (ON|OFF|TRUE|FALSE)/i)){const _0x1e3b3f=_0x21cd83[_0xd0c64e(0x275)](Number,RegExp['$1']),_0x4f8034=_0x21cd83[_0xd0c64e(0x188)](String,RegExp['$2'])[_0xd0c64e(0x1c1)+'e'](),_0x52500f=_0x4f8034[_0xd0c64e(0x39c)](/ON|TRUE/i);return _0x21cd83[_0xd0c64e(0x1ed)]($gameSwitches[_0xd0c64e(0x2d6)](_0x1e3b3f),_0x52500f);}else{if(_0x4c0457['match'](/(.*) IS ACTOR/i)){const _0x4d9bf9=_0x21cd83[_0xd0c64e(0x2f7)](String,RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x435e92:_0x304f8d;return _0x4d9bf9[_0xd0c64e(0x2f2)]();}else{if(_0x4c0457[_0xd0c64e(0x39c)](/(.*) IS ENEMY/i)){const _0x5013cb=_0x21cd83[_0xd0c64e(0x275)](String,RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x435e92:_0x304f8d;return _0x5013cb[_0xd0c64e(0x185)]();}else{if(_0x4c0457[_0xd0c64e(0x39c)](/(.*) HAS STATE (\d+)/i)){const _0x4e3a54=$dataStates[_0x21cd83[_0xd0c64e(0x413)](Number,RegExp['$2'])],_0x95c6cc=_0x21cd83[_0xd0c64e(0x413)](String,RegExp['$1'])[_0xd0c64e(0x39c)](/(?:USER|SUBJECT)/i)?_0x435e92:_0x304f8d;return _0x95c6cc[_0xd0c64e(0x409)]()[_0xd0c64e(0x23b)](_0x4e3a54);}else{if(_0x4c0457['match'](/(.*) HAS STATE (.*)/i)){const _0x430d8b=$dataStates[DataManager[_0xd0c64e(0x24d)+_0xd0c64e(0x19e)](RegExp['$2'])],_0x3580ea=_0x21cd83[_0xd0c64e(0x413)](String,RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x435e92:_0x304f8d;return _0x3580ea[_0xd0c64e(0x409)]()[_0xd0c64e(0x23b)](_0x430d8b);}else{if(_0x4c0457[_0xd0c64e(0x39c)](/(.*) NOT STATE (\d+)/i)){const _0x1192a5=$dataStates[_0x21cd83[_0xd0c64e(0x3b4)](Number,RegExp['$2'])],_0x2d577f=_0x21cd83[_0xd0c64e(0x435)](String,RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x435e92:_0x304f8d;return!_0x2d577f[_0xd0c64e(0x409)]()[_0xd0c64e(0x23b)](_0x1192a5);}else{if(_0x4c0457[_0xd0c64e(0x39c)](/(.*) NOT STATE (.*)/i)){const _0x51918d=$dataStates[DataManager[_0xd0c64e(0x24d)+_0xd0c64e(0x19e)](RegExp['$2'])],_0x2f19db=_0x21cd83['tjgyk'](String,RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x435e92:_0x304f8d;return!_0x2f19db[_0xd0c64e(0x409)]()[_0xd0c64e(0x23b)](_0x51918d);}else{if(_0x4c0457['match'](/(.*) HAS (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF)/i)){const _0x1b215d=_0x1039f7[_0xd0c64e(0x403)](_0x21cd83[_0xd0c64e(0x275)](String,RegExp['$2'])[_0xd0c64e(0x430)+'e']()[_0xd0c64e(0x3c0)]()),_0x4d43c7=_0x21cd83['mvxAz'](String,RegExp['$3'])[_0xd0c64e(0x1c1)+'e']()[_0xd0c64e(0x3c0)](),_0x47e757=_0x21cd83[_0xd0c64e(0x2f7)](String,RegExp['$1'])[_0xd0c64e(0x39c)](/(?:USER|SUBJECT)/i)?_0x435e92:_0x304f8d,_0x6d4a58=_0x21cd83[_0xd0c64e(0x28d)]['format'](_0x21cd83['MFYDV'](_0x4d43c7[_0xd0c64e(0x3b9)](-0x1e51*-0x1+0x14b*0x1a+-0x1*0x3fef)[_0xd0c64e(0x430)+'e'](),_0x4d43c7[_0xd0c64e(0x321)](0x204d*-0x1+0x1c5d+0x3f1)));return _0x47e757[_0x6d4a58](_0x1b215d);}else{if(_0x4c0457['match'](/(.*) HAS (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) MAX (BUFF|DEBUFF)/i)){const _0x4b35b2=_0x1039f7[_0xd0c64e(0x403)](_0x21cd83[_0xd0c64e(0x300)](String,RegExp['$2'])[_0xd0c64e(0x430)+'e']()[_0xd0c64e(0x3c0)]()),_0x1ed182=_0x21cd83['SlHwX'](String,RegExp['$3'])[_0xd0c64e(0x1c1)+'e']()[_0xd0c64e(0x3c0)](),_0x42440c=_0x21cd83['OcGeS'](String,RegExp['$1'])[_0xd0c64e(0x39c)](/(?:USER|SUBJECT)/i)?_0x435e92:_0x304f8d,_0x51e63d=_0x21cd83[_0xd0c64e(0x2a9)][_0xd0c64e(0x3b7)](_0x21cd83[_0xd0c64e(0x3fd)](_0x1ed182[_0xd0c64e(0x3b9)](-0xe26+-0x237e+0xc69*0x4)[_0xd0c64e(0x430)+'e'](),_0x1ed182[_0xd0c64e(0x321)](-0x1449+-0x2556+0x1cd*0x20)));return _0x42440c[_0x51e63d](_0x4b35b2);}else{if(_0x4c0457['match'](/(.*) NOT (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF)/i)){const _0x12144f=_0x1039f7[_0xd0c64e(0x403)](_0x21cd83[_0xd0c64e(0x413)](String,RegExp['$2'])[_0xd0c64e(0x430)+'e']()['trim']()),_0x2ee29f=_0x21cd83[_0xd0c64e(0x1f6)](String,RegExp['$3'])[_0xd0c64e(0x1c1)+'e']()[_0xd0c64e(0x3c0)](),_0x5c0421=_0x21cd83[_0xd0c64e(0x20d)](String,RegExp['$1'])[_0xd0c64e(0x39c)](/(?:USER|SUBJECT)/i)?_0x435e92:_0x304f8d,_0xc75afb=_0x21cd83[_0xd0c64e(0x28d)][_0xd0c64e(0x3b7)](_0x21cd83['RwIOz'](_0x2ee29f[_0xd0c64e(0x3b9)](0x1*-0x7d1+-0x2173+0x2944)['toUpperCas'+'e'](),_0x2ee29f[_0xd0c64e(0x321)](0x1a3e+0x11fb+-0x2c38)));return!_0x5c0421[_0xc75afb](_0x12144f);}else{if(_0x4c0457[_0xd0c64e(0x39c)](/(.*) NOT (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) MAX (BUFF|DEBUFF)/i)){const _0x2ee011=_0x1039f7['indexOf'](_0x21cd83[_0xd0c64e(0x1f6)](String,RegExp['$2'])[_0xd0c64e(0x430)+'e']()[_0xd0c64e(0x3c0)]()),_0x24379a=_0x21cd83[_0xd0c64e(0x220)](String,RegExp['$3'])[_0xd0c64e(0x1c1)+'e']()['trim'](),_0x3b7ba6=_0x21cd83[_0xd0c64e(0x269)](String,RegExp['$1'])[_0xd0c64e(0x39c)](/(?:USER|SUBJECT)/i)?_0x435e92:_0x304f8d,_0x147899=_0x21cd83['bMEFD'][_0xd0c64e(0x3b7)](_0x21cd83[_0xd0c64e(0x237)](_0x24379a['charAt'](-0x2*-0x326+0x1851+-0x1e9d)[_0xd0c64e(0x430)+'e'](),_0x24379a['slice'](0x684+-0x11ed*-0x1+-0x110*0x17)));return!_0x3b7ba6[_0x147899](_0x2ee011);}}}}}}}}}}}}}return!![];},AIManager[_0x179114(0x355)+_0x179114(0x189)]=function(_0x49ff67,_0x380a30,_0x4a4468,_0x10ea26){const _0x40eb86=_0x179114,_0x139bc5={'FOiBm':'MAXHP','hkUfI':'MAXMP','eeLak':'ATK','fOqDp':_0x40eb86(0x27b),'iTXoD':_0x40eb86(0x3ff),'sdQAY':_0x40eb86(0x342),'NIftZ':_0x40eb86(0x37f),'jlisc':_0x40eb86(0x38b),'bTKqB':_0x40eb86(0x2d4),'ESzPU':function(_0x1adaaf,_0x38c6db){return _0x1adaaf(_0x38c6db);},'thWcW':function(_0x26c43a,_0xcd3b7e){return _0x26c43a(_0xcd3b7e);},'xcNRj':function(_0x162d3f,_0x7e7a28){return _0x162d3f(_0x7e7a28);},'RlRhi':function(_0x3fcbb8,_0x175370){return _0x3fcbb8(_0x175370);},'yYrax':function(_0x17d7a7,_0x424445){return _0x17d7a7*_0x424445;},'VeBal':function(_0x1e4d14,_0x3c8f5e){return _0x1e4d14===_0x3c8f5e;},'oenhd':'buff','uqcWa':function(_0x2608d6,_0x4febc9){return _0x2608d6===_0x4febc9;},'oInfy':_0x40eb86(0x2c0),'Xvyel':function(_0x4f794a,_0x109c51){return _0x4f794a(_0x109c51);},'wuMTx':'AI\x20Manager'+_0x40eb86(0x25d)+'\x20determine'+_0x40eb86(0x35a)+_0x40eb86(0x3b0)},_0x2fa4b3=[_0x139bc5[_0x40eb86(0x2a7)],_0x139bc5[_0x40eb86(0x283)],_0x139bc5[_0x40eb86(0x2e4)],_0x139bc5[_0x40eb86(0x1c6)],_0x139bc5['iTXoD'],_0x139bc5[_0x40eb86(0x3ab)],_0x139bc5[_0x40eb86(0x373)],_0x139bc5[_0x40eb86(0x2a2)]];window[_0x139bc5['bTKqB']]=_0x49ff67,window['a']=user,window['b']=_0x380a30;const _0x267ba0=_0x10ea26,_0x89fcc8=user[_0x40eb86(0x18f)+_0x40eb86(0x1ac)]();let _0x161268=_0x10ea26['match'](/(?:USER|SUBJECT)/i)?user:_0x380a30;_0x10ea26=_0x10ea26[_0x40eb86(0x29f)](/\b(\d+)([%％])/gi,(_0xa47d7d,_0x4dfc3d)=>Number(_0x4dfc3d)*(-0xdaa+-0x3e4+0x118e+0.01));if(_0x10ea26[_0x40eb86(0x39c)](/(?:VAR|VARIABLE) (\d+)/i))return $gameVariables[_0x40eb86(0x2d6)](_0x139bc5[_0x40eb86(0x3f6)](Number,RegExp['$1']));if(_0x10ea26[_0x40eb86(0x39c)](/TEAM ALIVE MEMBERS/i))return _0x161268[_0x40eb86(0x1e6)+'t']()[_0x40eb86(0x1c4)+'rs']()[_0x40eb86(0x385)];if(_0x10ea26[_0x40eb86(0x39c)](/TEAM DEAD MEMBERS/i))return _0x161268[_0x40eb86(0x1e6)+'t']()['deadMember'+'s']()[_0x40eb86(0x385)];if(_0x10ea26[_0x40eb86(0x39c)](/ELEMENT (\d+) RATE/i)){const _0x4f503e=_0x139bc5['thWcW'](Number,RegExp['$1']);return this['elementKno'+_0x40eb86(0x219)](_0x49ff67,_0x380a30,_0x161268,_0x4f503e);}else{if(_0x10ea26['match'](/ELEMENT (.*) RATE/i)){const _0x1fbf81=DataManager[_0x40eb86(0x3e0)+_0x40eb86(0x3a7)](_0x139bc5[_0x40eb86(0x304)](String,RegExp['$1']));return this[_0x40eb86(0x1b7)+_0x40eb86(0x219)](_0x49ff67,_0x380a30,_0x161268,_0x1fbf81);}else{if(_0x10ea26[_0x40eb86(0x39c)](/(.*) ELEMENT RATE/i)){const _0x438807=DataManager[_0x40eb86(0x3e0)+'IdWithName'](_0x139bc5[_0x40eb86(0x3f5)](String,RegExp['$1']));return this[_0x40eb86(0x1b7)+_0x40eb86(0x219)](_0x49ff67,_0x380a30,_0x161268,_0x438807);}}}if(_0x10ea26[_0x40eb86(0x39c)](/(MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF) (?:LEVEL|STACK|STACKS)/i)){const _0x166321=_0x2fa4b3[_0x40eb86(0x403)](_0x139bc5['RlRhi'](String,RegExp['$1'])['toUpperCas'+'e']()[_0x40eb86(0x3c0)]()),_0x5e16b6=_0x139bc5[_0x40eb86(0x2bc)](String,RegExp['$2'])['toLowerCas'+'e']()[_0x40eb86(0x3c0)]();return _0x139bc5['yYrax'](_0x161268['buff'](_0x166321),_0x139bc5[_0x40eb86(0x3b6)](_0x5e16b6,_0x139bc5[_0x40eb86(0x2d1)])?0x1a67+-0x7*0x1a5+-0xee3:-(-0x344+-0x1cc6+-0x1*-0x200b));}if(_0x10ea26[_0x40eb86(0x39c)](/(MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF) (?:TURN|TURNS)/i)){const _0x87508e=_0x2fa4b3[_0x40eb86(0x403)](_0x139bc5['ESzPU'](String,RegExp['$1'])['toUpperCas'+'e']()[_0x40eb86(0x3c0)]()),_0x19d834=_0x139bc5[_0x40eb86(0x304)](String,RegExp['$2'])[_0x40eb86(0x1c1)+'e']()[_0x40eb86(0x3c0)]();if(_0x139bc5['VeBal'](_0x19d834,_0x139bc5[_0x40eb86(0x2d1)])&&_0x161268['isBuffAffe'+_0x40eb86(0x17f)](_0x87508e))return _0x161268[_0x40eb86(0x2cc)][_0x87508e];else{if(_0x139bc5['uqcWa'](_0x19d834,_0x139bc5[_0x40eb86(0x2c1)])&&_0x161268[_0x40eb86(0x36b)+_0x40eb86(0x371)](_0x87508e))return _0x161268[_0x40eb86(0x2cc)][_0x87508e];}return 0x2*0x2d7+0x1*-0x455+-0x159;}if(_0x10ea26['match'](/STATE (\d+) (?:TURN|TURNS)/i)){const _0x4f6050=_0x139bc5[_0x40eb86(0x2bc)](Number,RegExp['$1']);if(_0x161268[_0x40eb86(0x1c9)+'ected'](_0x4f6050)){const _0x34c5f2=$dataStates[_0x4f6050];return _0x34c5f2&&_0x139bc5[_0x40eb86(0x246)](_0x34c5f2[_0x40eb86(0x3cd)+'lTiming'],-0x478+-0x1e4f+0x22c7)?Number[_0x40eb86(0x41d)+_0x40eb86(0x23e)]:_0x161268['_stateTurn'+'s'][_0x4f6050]||0x475+-0x845+0x3d0;}else return _0x161268[_0x40eb86(0x409)]()[_0x40eb86(0x23b)]($dataStates[_0x4f6050])?Number[_0x40eb86(0x41d)+_0x40eb86(0x23e)]:0x14b9+-0x208f+0x2*0x5eb;}else{if(_0x10ea26[_0x40eb86(0x39c)](/STATE (.*) (?:TURN|TURNS)/i)){const _0x2f3135=DataManager[_0x40eb86(0x24d)+'WithName'](RegExp['$1']);if(_0x161268['isStateAff'+_0x40eb86(0x3b2)](_0x2f3135)){const _0x19d110=$dataStates[_0x2f3135];return _0x19d110&&_0x139bc5[_0x40eb86(0x3b6)](_0x19d110[_0x40eb86(0x3cd)+_0x40eb86(0x19d)],0xf39*0x1+-0x1725+0x4e*0x1a)?Number['MAX_SAFE_I'+_0x40eb86(0x23e)]:_0x161268[_0x40eb86(0x41f)+'s'][_0x2f3135]||-0x3*0xaef+-0x111b*0x2+0x4303;}else return _0x161268['states']()[_0x40eb86(0x23b)]($dataStates[_0x2f3135])?Number[_0x40eb86(0x41d)+_0x40eb86(0x23e)]:-0x475*-0x4+0x16ef+-0x28c3;}}if(_0x10ea26['match'](/\bHP([%％])/i))return _0x161268[_0x40eb86(0x38d)]();else{if(_0x10ea26[_0x40eb86(0x39c)](/\bMP([%％])/i))return _0x161268['mpRate']();else{if(_0x10ea26[_0x40eb86(0x39c)](/\bTP([%％])/i))return _0x161268[_0x40eb86(0x268)]();else{if(_0x10ea26[_0x40eb86(0x39c)](/\b(?:MAXHP|MAX HP|MHP)\b/i))return _0x161268[_0x40eb86(0x1f1)];else{if(_0x10ea26[_0x40eb86(0x39c)](/\b(?:MAXMP|MAX MP|MMP)\b/i))return _0x161268['mmp'];else{if(_0x10ea26['match'](/\b(?:MAXTP|MAX TP|MTP)\b/i))return _0x161268[_0x40eb86(0x203)]();}}}}}if(_0x10ea26[_0x40eb86(0x39c)](/\b(LEVEL|HP|MP|TP|ATK|DEF|MAT|MDF|AGI|LUK)\b/i))return _0x161268[_0x139bc5[_0x40eb86(0x3f5)](String,RegExp['$1'])[_0x40eb86(0x1c1)+'e']()[_0x40eb86(0x3c0)]()];try{return _0x139bc5['Xvyel'](eval,_0x10ea26);}catch(_0x30abd6){return $gameTemp['isPlaytest']()&&(console[_0x40eb86(0x3a6)](_0x139bc5['wuMTx']['format'](_0x267ba0)),console[_0x40eb86(0x3a6)](_0x30abd6)),-0x7*-0x4b2+0x1dfa+-0x4*0xfb6;}},AIManager[_0x179114(0x1b7)+_0x179114(0x219)]=function(_0x2df5cb,_0x251bf6,_0x5abb0c,_0x5871c6){const _0xdda2c0=_0x179114,_0x295c2e={'hiDaC':function(_0x15721d,_0x13737c){return _0x15721d===_0x13737c;}};if(_0x295c2e[_0xdda2c0(0x2d8)](_0x2df5cb[_0xdda2c0(0x2f2)](),_0x5abb0c['isActor']()))return _0x5abb0c[_0xdda2c0(0x1a6)+'e'](_0x5871c6);else return _0x5abb0c[_0xdda2c0(0x18f)+_0xdda2c0(0x1ac)]()[_0xdda2c0(0x217)+'AIKnowledg'+'e'](_0x5871c6,_0x5abb0c)?_0x5abb0c[_0xdda2c0(0x1a6)+'e'](_0x5871c6):VisuMZ[_0xdda2c0(0x23c)][_0xdda2c0(0x180)][_0xdda2c0(0x29e)][_0xdda2c0(0x1e1)+'mentRate'];},AIManager[_0x179114(0x3f3)+'edTargetin'+'g']=function(_0x5d3b70,_0x386eb9){const _0x2e526e=_0x179114,_0x4d088c={'jFEjn':function(_0x1b5d6e,_0x2de474){return _0x1b5d6e(_0x2de474);}};if(!_0x386eb9)return;if(!_0x386eb9['note'][_0x2e526e(0x39c)](AIManager['_regexp']['aiTarget']))return;const _0x572900=_0x4d088c[_0x2e526e(0x236)](String,RegExp['$1'])[_0x2e526e(0x430)+'e']()[_0x2e526e(0x3c0)]();let _0xab59b7=this[_0x2e526e(0x21e)+_0x2e526e(0x1dc)](_0x5d3b70,_0x572900);_0xab59b7&&(this[_0x2e526e(0x1a3)+'dTargets']=[_0xab59b7]);},AIManager['createFilt'+'erTarget']=function(_0x50d595,_0x42c1a0){const _0x11a13c=_0x179114,_0x11f52c={'yaUub':'MAXHP','DEXCB':_0x11a13c(0x377),'aXTgY':_0x11a13c(0x1cc),'kvOrG':_0x11a13c(0x27b),'IsWxT':_0x11a13c(0x3ff),'mXmBB':'MDF','lEHWJ':_0x11a13c(0x37f),'VFMfD':'LUK','gwcqW':_0x11a13c(0x1fe),'czFJX':_0x11a13c(0x3ce),'FlAfS':_0x11a13c(0x39d),'pPQeM':_0x11a13c(0x1b6),'VCUzb':_0x11a13c(0x2a1),'lHlzc':_0x11a13c(0x1bd),'GmGKv':'CNT','lTGCz':_0x11a13c(0x405),'rZcNE':_0x11a13c(0x201),'kwQAL':_0x11a13c(0x23f),'LxtbS':_0x11a13c(0x1cb),'NOYqc':_0x11a13c(0x3d3),'CoWxN':'REC','etmJC':_0x11a13c(0x2c5),'ikWKy':_0x11a13c(0x396),'uvCOb':'TCR','PRljy':_0x11a13c(0x2f6),'KveQj':_0x11a13c(0x353),'WpTHu':'FDR','fPXLf':_0x11a13c(0x2ef),'WhbgX':function(_0x4cda71,_0x183927){return _0x4cda71===_0x183927;},'iMBdP':_0x11a13c(0x350),'uLyfR':_0x11a13c(0x39b),'ZBJds':_0x11a13c(0x1ec),'KKBpp':function(_0x3fb9e3,_0x50a491){return _0x3fb9e3-_0x50a491;},'AboWq':function(_0x22ed20,_0x3c4652){return _0x22ed20(_0x3c4652);},'LmSsa':_0x11a13c(0x214),'hlKEm':function(_0x37ee8e,_0x224ba0){return _0x37ee8e>_0x224ba0;},'YwTrk':function(_0x2e07b1,_0x5d1b0e){return _0x2e07b1<_0x5d1b0e;},'thdJm':function(_0x1d2dcf,_0x3be3c6){return _0x1d2dcf<_0x3be3c6;},'DhRmc':function(_0x1525e5,_0x214d52){return _0x1525e5<_0x214d52;},'pwEQO':function(_0x34c1d1,_0x35a369){return _0x34c1d1===_0x35a369;},'eGCmC':_0x11a13c(0x3bd),'tZMXB':function(_0x1364fe,_0x2fdc1b){return _0x1364fe<_0x2fdc1b;},'sQTDa':function(_0x3fa08c,_0x217412){return _0x3fa08c===_0x217412;},'SXMlV':function(_0x1b329d,_0x40a788){return _0x1b329d>_0x40a788;},'LuSJn':function(_0x26050c,_0x5cbad1){return _0x26050c<_0x5cbad1;},'LqkcG':'MP%','rGIds':function(_0x4cf836,_0x5bc056){return _0x4cf836===_0x5bc056;},'faepx':function(_0x1e942b,_0x2ef8ca){return _0x1e942b<_0x2ef8ca;},'TkkAm':_0x11a13c(0x21b),'dAwep':function(_0x3a5a39,_0x4802e3){return _0x3a5a39>_0x4802e3;},'KZmiO':'MAXTP','hGjbM':function(_0x33a0ad,_0x42f258){return _0x33a0ad===_0x42f258;},'CXPOe':_0x11a13c(0x394),'gTXld':function(_0xc690eb,_0x2e2e7e){return _0xc690eb<_0x2e2e7e;},'tBcbz':_0x11a13c(0x18e)+'T','zRCXk':function(_0x7ad1b6,_0xd11a80){return _0x7ad1b6>_0xd11a80;},'ZOPrz':function(_0x46c9bd,_0x350d7a){return _0x46c9bd===_0x350d7a;},'pCeuD':'POSITIVE\x20S'+_0x11a13c(0x369),'UsoJG':'POSITIVE','ssfJW':function(_0x2c5990,_0x431c49){return _0x2c5990>_0x431c49;},'ngNJA':function(_0x19333d,_0x542ab4){return _0x19333d<_0x542ab4;},'EMABi':function(_0x458e2,_0x58d7c2){return _0x458e2===_0x58d7c2;},'cVSOS':'NEGATIVE\x20S'+_0x11a13c(0x369),'muXhy':'NEGATIVE','PRyqd':function(_0xeb50b8,_0x1c1e55){return _0xeb50b8>_0x1c1e55;},'ETJaT':function(_0x4a6681,_0x25653f){return _0x4a6681<_0x25653f;}},_0x354ae8=[_0x11f52c[_0x11a13c(0x2f4)],_0x11f52c['DEXCB'],_0x11f52c[_0x11a13c(0x3e7)],_0x11f52c['kvOrG'],_0x11f52c[_0x11a13c(0x3be)],_0x11f52c[_0x11a13c(0x2e6)],_0x11f52c['lEHWJ'],_0x11f52c[_0x11a13c(0x1d3)]],_0x18f366=[_0x11f52c['gwcqW'],_0x11f52c[_0x11a13c(0x1d9)],_0x11f52c[_0x11a13c(0x1ef)],_0x11f52c[_0x11a13c(0x3c3)],_0x11f52c[_0x11a13c(0x3ec)],_0x11f52c['lHlzc'],_0x11f52c['GmGKv'],_0x11f52c[_0x11a13c(0x399)],_0x11f52c['rZcNE'],_0x11f52c['kwQAL']],_0x4b6a0a=[_0x11f52c[_0x11a13c(0x28e)],_0x11f52c[_0x11a13c(0x34c)],_0x11f52c[_0x11a13c(0x280)],_0x11f52c[_0x11a13c(0x24a)],_0x11f52c[_0x11a13c(0x42d)],_0x11f52c['uvCOb'],_0x11f52c[_0x11a13c(0x3c4)],_0x11f52c[_0x11a13c(0x3da)],_0x11f52c[_0x11a13c(0x27d)],_0x11f52c['fPXLf']];let _0x2728af=null;if(_0x11f52c[_0x11a13c(0x3f2)](_0x42c1a0,_0x11f52c[_0x11a13c(0x34f)])){if(this['_forceVali'+_0x11a13c(0x19a)][_0x11a13c(0x23b)](_0x50d595))return _0x50d595;}else{if(_0x11f52c['WhbgX'](_0x42c1a0,_0x11f52c[_0x11a13c(0x1c5)]))return this['_forceVali'+'dTargets'][0x7d3*0x4+0x3*0x49d+0x5*-0x907];else{if(_0x11f52c[_0x11a13c(0x3f2)](_0x42c1a0,_0x11f52c[_0x11a13c(0x376)]))return this['_forceVali'+_0x11a13c(0x19a)][_0x11f52c[_0x11a13c(0x258)](this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)]['length'],-0xbd*-0x33+0x1f99+-0x453f)];else{if(_0x42c1a0[_0x11a13c(0x39c)](/(HIGHEST|LOWEST)[ ](.*)/i)){const _0x5af66e=_0x11f52c['WhbgX'](_0x11f52c['AboWq'](String,RegExp['$1'])['toUpperCas'+'e']()[_0x11a13c(0x3c0)](),_0x11f52c[_0x11a13c(0x1e4)]),_0x1f7346=!_0x5af66e,_0x38b44d=_0x11f52c[_0x11a13c(0x23d)](String,RegExp['$2'])[_0x11a13c(0x430)+'e']()['trim']();if(_0x354ae8[_0x11a13c(0x23b)](_0x38b44d)){const _0x44350f=_0x354ae8['indexOf'](_0x38b44d);_0x2728af=this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)][0xfa2+0x5d9*-0x3+0x1e9];for(const _0x209e1e of this[_0x11a13c(0x1a3)+'dTargets']){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x33a)](_0x209e1e[_0x11a13c(0x34d)](_0x44350f),_0x2728af[_0x11a13c(0x34d)](_0x44350f)))_0x2728af=_0x209e1e;if(_0x1f7346&&_0x11f52c[_0x11a13c(0x25c)](_0x209e1e[_0x11a13c(0x34d)](_0x44350f),_0x2728af[_0x11a13c(0x34d)](_0x44350f)))_0x2728af=_0x209e1e;}return _0x2728af;}if(_0x18f366['includes'](_0x38b44d)){const _0x153091=_0x18f366['indexOf'](_0x38b44d);_0x2728af=this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)][-0x76e+-0xbd4+-0x3da*-0x5];for(const _0x50ea81 of this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)]){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x33a)](_0x50ea81['xparam'](_0x153091),_0x2728af['xparam'](_0x153091)))_0x2728af=_0x50ea81;if(_0x1f7346&&_0x11f52c[_0x11a13c(0x3a9)](_0x50ea81[_0x11a13c(0x3c9)](_0x153091),_0x2728af[_0x11a13c(0x3c9)](_0x153091)))_0x2728af=_0x50ea81;}return _0x2728af;}if(_0x4b6a0a[_0x11a13c(0x23b)](_0x38b44d)){const _0xfe32d4=_0x4b6a0a[_0x11a13c(0x403)](_0x38b44d);_0x2728af=this['_forceVali'+_0x11a13c(0x19a)][-0x1847+-0x4dc*-0x3+0x9b3];for(const _0x400546 of this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)]){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x33a)](_0x400546[_0x11a13c(0x35c)](_0xfe32d4),_0x2728af[_0x11a13c(0x35c)](_0xfe32d4)))_0x2728af=_0x400546;if(_0x1f7346&&_0x11f52c[_0x11a13c(0x276)](_0x400546[_0x11a13c(0x35c)](_0xfe32d4),_0x2728af['sparam'](_0xfe32d4)))_0x2728af=_0x400546;}return _0x2728af;}if(_0x11f52c['WhbgX'](_0x38b44d,'HP')){_0x2728af=this[_0x11a13c(0x1a3)+'dTargets'][0x76+0x46b*-0x1+0x1*0x3f5];for(const _0x798829 of this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)]){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x33a)](_0x798829['hp'],_0x2728af['hp']))_0x2728af=_0x798829;if(_0x1f7346&&_0x11f52c['YwTrk'](_0x798829['hp'],_0x2728af['hp']))_0x2728af=_0x798829;}return _0x2728af;}if(_0x11f52c[_0x11a13c(0x27a)](_0x38b44d,_0x11f52c[_0x11a13c(0x270)])){_0x2728af=this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)][0x1f25+-0x1e2f*-0x1+0x2*-0x1eaa];for(const _0x5e5fcc of this[_0x11a13c(0x1a3)+'dTargets']){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x33a)](_0x5e5fcc['hpRate'](),_0x2728af[_0x11a13c(0x38d)]()))_0x2728af=_0x5e5fcc;if(_0x1f7346&&_0x11f52c[_0x11a13c(0x395)](_0x5e5fcc[_0x11a13c(0x38d)](),_0x2728af['hpRate']()))_0x2728af=_0x5e5fcc;}return _0x2728af;}if(_0x11f52c[_0x11a13c(0x2d0)](_0x38b44d,'MP')){_0x2728af=this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)][0x1*0x23ef+-0x784+0x61*-0x4b];for(const _0x2f89b2 of this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)]){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x267)](_0x2f89b2['mp'],_0x2728af['mp']))_0x2728af=_0x2f89b2;if(_0x1f7346&&_0x11f52c[_0x11a13c(0x1c7)](_0x2f89b2['mp'],_0x2728af['mp']))_0x2728af=_0x2f89b2;}return _0x2728af;}if(_0x11f52c['pwEQO'](_0x38b44d,_0x11f52c[_0x11a13c(0x365)])){_0x2728af=this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)][-0x24b4+-0x207*-0x6+0x188a];for(const _0x4f5fb1 of this['_forceVali'+_0x11a13c(0x19a)]){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x267)](_0x4f5fb1[_0x11a13c(0x1fd)](),_0x2728af[_0x11a13c(0x1fd)]()))_0x2728af=_0x4f5fb1;if(_0x1f7346&&_0x11f52c[_0x11a13c(0x3a9)](_0x4f5fb1[_0x11a13c(0x1fd)](),_0x2728af[_0x11a13c(0x1fd)]()))_0x2728af=_0x4f5fb1;}return _0x2728af;}if(_0x11f52c[_0x11a13c(0x40d)](_0x38b44d,'TP')){_0x2728af=this['_forceVali'+_0x11a13c(0x19a)][0x1ba0+0x2344+0x1*-0x3ee4];for(const _0x1fbd18 of this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)]){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x267)](_0x1fbd18['tp'],_0x2728af['tp']))_0x2728af=_0x1fbd18;if(_0x1f7346&&_0x11f52c[_0x11a13c(0x386)](_0x1fbd18['tp'],_0x2728af['tp']))_0x2728af=_0x1fbd18;}return _0x2728af;}if(_0x11f52c['WhbgX'](_0x38b44d,_0x11f52c[_0x11a13c(0x368)])){_0x2728af=this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)][0x98b*0x1+-0xb*0xd+-0x1cc*0x5];for(const _0x622411 of this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)]){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x352)](_0x622411['tpRate'](),_0x2728af['tpRate']()))_0x2728af=_0x622411;if(_0x1f7346&&_0x11f52c[_0x11a13c(0x276)](_0x622411[_0x11a13c(0x268)](),_0x2728af['tpRate']()))_0x2728af=_0x622411;}return _0x2728af;}if(_0x11f52c[_0x11a13c(0x27a)](_0x38b44d,_0x11f52c[_0x11a13c(0x3d8)])){_0x2728af=this[_0x11a13c(0x1a3)+'dTargets'][0x472+-0x1*-0x156a+0x5*-0x52c];for(const _0x334d66 of this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)]){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x267)](_0x334d66[_0x11a13c(0x203)](),_0x2728af['maxTp']()))_0x2728af=_0x334d66;if(_0x1f7346&&_0x11f52c['DhRmc'](_0x334d66['maxTp'](),_0x2728af[_0x11a13c(0x203)]()))_0x2728af=_0x334d66;}return _0x2728af;}if(_0x11f52c[_0x11a13c(0x193)](_0x38b44d,_0x11f52c[_0x11a13c(0x224)])){_0x2728af=this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)][-0x1947+-0x112d*0x1+0x16*0x1ee];for(const _0x362b68 of this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)]){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x352)](_0x362b68[_0x11a13c(0x2dd)]||-0x2*-0xcf5+0x15a2+0x22*-0x166,_0x2728af[_0x11a13c(0x2dd)]||-0xae2+0x21aa+0x144*-0x12))_0x2728af=_0x362b68;if(_0x1f7346&&_0x11f52c['gTXld'](_0x362b68[_0x11a13c(0x2dd)]||-0x17a3+0x1eff+-0x75c,_0x2728af[_0x11a13c(0x2dd)]||-0x186f*-0x1+-0x1398+-0x4d7))_0x2728af=_0x362b68;}return _0x2728af;}if(_0x11f52c[_0x11a13c(0x27a)](_0x38b44d,_0x11f52c[_0x11a13c(0x1b5)])&&Imported['VisuMZ_1_S'+'killsState'+'sCore']){_0x2728af=this[_0x11a13c(0x1a3)+'dTargets'][0x71d+-0xc4+-0x659];for(const _0x4cfbac of this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)]){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x2b4)](_0x4cfbac[_0x11a13c(0x409)]()[_0x11a13c(0x385)],_0x2728af[_0x11a13c(0x409)]()[_0x11a13c(0x385)]))_0x2728af=_0x4cfbac;if(_0x1f7346&&_0x11f52c[_0x11a13c(0x1c7)](_0x4cfbac[_0x11a13c(0x409)]()[_0x11a13c(0x385)],_0x2728af[_0x11a13c(0x409)]()['length']))_0x2728af=_0x4cfbac;}return _0x2728af;}if(_0x11f52c[_0x11a13c(0x191)](_0x38b44d,_0x11f52c[_0x11a13c(0x25e)])&&Imported[_0x11a13c(0x37d)+_0x11a13c(0x1aa)+_0x11a13c(0x1a9)]){_0x2728af=this[_0x11a13c(0x1a3)+'dTargets'][-0x67a*0x1+0x1063*0x1+-0x9e9];const _0x3b79dd=_0x11f52c[_0x11a13c(0x425)];for(const _0x28827b of this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)]){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x3a1)](_0x28827b[_0x11a13c(0x1b3)+_0x11a13c(0x1be)](_0x3b79dd)[_0x11a13c(0x385)],_0x2728af[_0x11a13c(0x1b3)+_0x11a13c(0x1be)](_0x3b79dd)[_0x11a13c(0x385)]))_0x2728af=_0x28827b;if(_0x1f7346&&_0x11f52c[_0x11a13c(0x330)](_0x28827b['statesByCa'+_0x11a13c(0x1be)](_0x3b79dd)[_0x11a13c(0x385)],_0x2728af[_0x11a13c(0x1b3)+_0x11a13c(0x1be)](_0x3b79dd)[_0x11a13c(0x385)]))_0x2728af=_0x28827b;}return _0x2728af;}if(_0x11f52c['EMABi'](_0x38b44d,_0x11f52c['cVSOS'])&&Imported['VisuMZ_1_S'+_0x11a13c(0x1aa)+_0x11a13c(0x1a9)]){_0x2728af=this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)][0x26af+0x8dd*0x1+-0xbe3*0x4];const _0x5e265a=_0x11f52c[_0x11a13c(0x2e2)];for(const _0x2664dc of this[_0x11a13c(0x1a3)+_0x11a13c(0x19a)]){if(_0x5af66e&&_0x11f52c[_0x11a13c(0x256)](_0x2664dc[_0x11a13c(0x1b3)+'tegory'](_0x5e265a)[_0x11a13c(0x385)],_0x2728af[_0x11a13c(0x1b3)+_0x11a13c(0x1be)](_0x5e265a)[_0x11a13c(0x385)]))_0x2728af=_0x2664dc;if(_0x1f7346&&_0x11f52c[_0x11a13c(0x1a4)](_0x2664dc[_0x11a13c(0x1b3)+'tegory'](_0x5e265a)[_0x11a13c(0x385)],_0x2728af['statesByCa'+_0x11a13c(0x1be)](_0x5e265a)[_0x11a13c(0x385)]))_0x2728af=_0x2664dc;}return _0x2728af;}}}}}return null;},DataManager[_0x179114(0x3e0)+_0x179114(0x3a7)]=function(_0x16ca33){const _0x1ca222=_0x179114;_0x16ca33=_0x16ca33[_0x1ca222(0x430)+'e']()['trim'](),this[_0x1ca222(0x26c)+'s']=this[_0x1ca222(0x26c)+'s']||{};if(this['_elementID'+'s'][_0x16ca33])return this[_0x1ca222(0x26c)+'s'][_0x16ca33];let _0x492171=0x829*0x3+-0x116*0x2+-0xa*0x23b;for(const _0x31fa3e of $dataSystem[_0x1ca222(0x354)]){if(!_0x31fa3e)continue;let _0x4af498=_0x31fa3e[_0x1ca222(0x430)+'e']();_0x4af498=_0x4af498[_0x1ca222(0x29f)](/\x1I\[(\d+)\]/gi,''),_0x4af498=_0x4af498['replace'](/\\I\[(\d+)\]/gi,''),this[_0x1ca222(0x26c)+'s'][_0x4af498]=_0x492171,_0x492171++;}return this[_0x1ca222(0x26c)+'s'][_0x16ca33]||0xba7+-0x4*-0x4f7+-0x1f83;},DataManager[_0x179114(0x24d)+_0x179114(0x19e)]=function(_0x49aaa4){const _0x3792c1=_0x179114;_0x49aaa4=_0x49aaa4['toUpperCas'+'e']()['trim'](),this[_0x3792c1(0x244)]=this['_stateIDs']||{};if(this[_0x3792c1(0x244)][_0x49aaa4])return this['_stateIDs'][_0x49aaa4];for(const _0x5861cd of $dataStates){if(!_0x5861cd)continue;this['_stateIDs'][_0x5861cd[_0x3792c1(0x3b1)][_0x3792c1(0x430)+'e']()['trim']()]=_0x5861cd['id'];}return this[_0x3792c1(0x244)][_0x49aaa4]||-0x6*0x43+-0x731+-0x8c3*-0x1;},VisuMZ['BattleAI']['BattleMana'+_0x179114(0x2df)+_0x179114(0x2de)]=BattleManager[_0x179114(0x1b2)+_0x179114(0x200)],BattleManager[_0x179114(0x1b2)+_0x179114(0x200)]=function(){const _0x5f06d0=_0x179114,_0x11e954=VisuMZ[_0x5f06d0(0x23c)][_0x5f06d0(0x2fe)+_0x5f06d0(0x2df)+_0x5f06d0(0x2de)][_0x5f06d0(0x2a3)](this);if(_0x11e954&&_0x11e954[_0x5f06d0(0x412)+_0x5f06d0(0x205)+'I']()){const _0x25392a=_0x11e954[_0x5f06d0(0x3d1)+_0x5f06d0(0x295)]();if(!_0x25392a||_0x25392a&&!_0x25392a[_0x5f06d0(0x175)]())_0x11e954['makeAction'+'s']();else{if(VisuMZ[_0x5f06d0(0x23c)]['Settings'][_0x5f06d0(0x29e)][_0x5f06d0(0x1a7)]){if(_0x25392a&&_0x25392a[_0x5f06d0(0x37b)+'on'])return _0x11e954;_0x11e954['makeAction'+'s'](),Imported[_0x5f06d0(0x25b)+_0x5f06d0(0x2bf)+_0x5f06d0(0x2c9)]&&this[_0x5f06d0(0x2f9)]()&&(_0x11e954[_0x5f06d0(0x16d)+_0x5f06d0(0x411)+_0x5f06d0(0x41c)+'AI']=!![]);}}}return _0x11e954;},VisuMZ['BattleAI'][_0x179114(0x2fe)+_0x179114(0x247)+_0x179114(0x1e7)]=BattleManager[_0x179114(0x26f)+'n'],BattleManager[_0x179114(0x26f)+'n']=function(){const _0x464019=_0x179114;this[_0x464019(0x40e)+_0x464019(0x29a)+_0x464019(0x3bb)+'d'](),this[_0x464019(0x339)][_0x464019(0x3d1)+'ion']()?VisuMZ[_0x464019(0x23c)][_0x464019(0x2fe)+_0x464019(0x247)+_0x464019(0x1e7)][_0x464019(0x2a3)](this):this[_0x464019(0x33c)]();},VisuMZ[_0x179114(0x23c)][_0x179114(0x2fe)+_0x179114(0x16a)+'ion']=BattleManager['endAction'],BattleManager[_0x179114(0x33c)]=function(){const _0x11e828=_0x179114;this[_0x11e828(0x40e)+'ctionByAIi'+'sStillVali'+'d'](),VisuMZ['BattleAI'][_0x11e828(0x2fe)+_0x11e828(0x16a)+_0x11e828(0x295)][_0x11e828(0x2a3)](this);},BattleManager[_0x179114(0x40e)+_0x179114(0x29a)+_0x179114(0x3bb)+'d']=function(){const _0x45c20f=_0x179114;this['determineT'+_0x45c20f(0x1d6)+_0x45c20f(0x3ef)+_0x45c20f(0x2c6)](this['_subject']);},BattleManager[_0x179114(0x2ab)+_0x179114(0x1d6)+'nByAIisSti'+_0x179114(0x2c6)]=function(_0x3ddf5d){const _0x4e712d=_0x179114,_0x3cc37c={'ZTuTc':function(_0x14fdcb,_0x35b007){return _0x14fdcb===_0x35b007;},'cMCFv':_0x4e712d(0x390)};if(!_0x3ddf5d)return;if(_0x3cc37c[_0x4e712d(0x195)](_0x3ddf5d[_0x4e712d(0x3fc)](),_0x3cc37c[_0x4e712d(0x190)]))return;if(!_0x3ddf5d[_0x4e712d(0x412)+_0x4e712d(0x205)+'I']())return;const _0x353aeb=_0x3ddf5d['currentAct'+_0x4e712d(0x295)]();if(!_0x353aeb)return;if(_0x353aeb[_0x4e712d(0x37b)+'on'])return;const _0x129076=_0x353aeb['item']();if(_0x3ddf5d[_0x4e712d(0x2ac)+_0x4e712d(0x380)])return;if(AIManager[_0x4e712d(0x263)+_0x4e712d(0x228)](_0x3ddf5d,_0x129076)&&_0x3ddf5d[_0x4e712d(0x27f)](_0x129076))return;_0x3ddf5d[_0x4e712d(0x381)+'ewValidAIA'+_0x4e712d(0x1e7)]();},VisuMZ[_0x179114(0x23c)][_0x179114(0x206)+_0x179114(0x312)]=Game_Temp[_0x179114(0x2aa)]['initialize'],Game_Temp[_0x179114(0x2aa)][_0x179114(0x312)]=function(){const _0x2bd5c7=_0x179114;VisuMZ[_0x2bd5c7(0x23c)][_0x2bd5c7(0x206)+_0x2bd5c7(0x312)][_0x2bd5c7(0x2a3)](this),this[_0x2bd5c7(0x408)+_0x2bd5c7(0x3ae)]();},Game_Temp[_0x179114(0x2aa)][_0x179114(0x408)+'Influence']=function(){const _0x3ede99=_0x179114;this[_0x3ede99(0x2b9)+_0x3ede99(0x1d0)]={'action':null,'elementInfluence':![],'elementInfluenceRate':0x0,'elementIds':[],'evaInfluenceRate':0x0,'mevInfluenceRate':0x0};},Game_Temp[_0x179114(0x2aa)][_0x179114(0x257)+_0x179114(0x32d)]=function(){const _0x4e192d=_0x179114,_0x4183cd={'FGzSK':function(_0xf5f501,_0xd30a57){return _0xf5f501===_0xd30a57;}};if(_0x4183cd[_0x4e192d(0x1db)](this['_aiTgrInfl'+_0x4e192d(0x1d0)],undefined))this[_0x4e192d(0x408)+'Influence']();return this[_0x4e192d(0x2b9)+_0x4e192d(0x1d0)];},Game_Temp[_0x179114(0x2aa)][_0x179114(0x35e)+_0x179114(0x1cf)]=function(_0x48d316,_0x44bc28){const _0x144135=_0x179114,_0x5dc6aa={'kvksk':function(_0x400028,_0x49e306){return _0x400028<_0x49e306;}};this['clearAiTgr'+_0x144135(0x3ae)]();const _0x54a94d=this[_0x144135(0x257)+_0x144135(0x32d)]();_0x54a94d[_0x144135(0x223)]=_0x44bc28;if(_0x48d316[_0x144135(0x2ea)+_0x144135(0x1da)+_0x144135(0x27e)+'ce']()){_0x54a94d['elementInf'+_0x144135(0x2b3)]=!![],_0x54a94d[_0x144135(0x1c8)+_0x144135(0x197)]=_0x48d316[_0x144135(0x313)+_0x144135(0x2e8)+_0x144135(0x2b5)+'te'](),_0x54a94d[_0x144135(0x338)]=[];if(Imported['VisuMZ_1_E'+_0x144135(0x2fd)+_0x144135(0x370)])_0x54a94d[_0x144135(0x338)]=_0x54a94d[_0x144135(0x338)][_0x144135(0x35b)](_0x44bc28[_0x144135(0x354)]());else _0x5dc6aa[_0x144135(0x1ea)](_0x44bc28['item']()['damage']['elementId'],0x25c*0xc+-0x2d7*0x4+-0x10f4)?_0x54a94d['elementIds']=_0x54a94d[_0x144135(0x338)]['concat'](_0x48d316['attackElem'+_0x144135(0x282)]()):_0x54a94d[_0x144135(0x338)]['push'](_0x44bc28[_0x144135(0x175)]()[_0x144135(0x40f)][_0x144135(0x230)]);}_0x44bc28[_0x144135(0x404)]()&&_0x48d316[_0x144135(0x2ea)+_0x144135(0x2ff)+_0x144135(0x2b3)]()&&(_0x54a94d['evaInfluen'+'ceRate']=_0x48d316[_0x144135(0x382)+_0x144135(0x27e)+_0x144135(0x26a)]()),_0x44bc28[_0x144135(0x41b)]()&&_0x48d316[_0x144135(0x2ea)+'yMevTgrInf'+_0x144135(0x2b3)]()&&(_0x54a94d[_0x144135(0x243)+_0x144135(0x26a)]=_0x48d316[_0x144135(0x207)+'TgrInfluen'+_0x144135(0x26a)]());},VisuMZ[_0x179114(0x23c)][_0x179114(0x250)+'n_makeTarg'+_0x179114(0x42c)]=Game_Action['prototype'][_0x179114(0x171)+'s'],Game_Action[_0x179114(0x2aa)][_0x179114(0x171)+'s']=function(){const _0xd7749b=_0x179114;this[_0xd7749b(0x3c8)]()&&this[_0xd7749b(0x292)]()[_0xd7749b(0x412)+_0xd7749b(0x205)+'I']()&&(AIManager[_0xd7749b(0x3ed)+_0xd7749b(0x3aa)](this[_0xd7749b(0x292)](),this[_0xd7749b(0x175)]()),this[_0xd7749b(0x32f)+'tion']()&&AIManager[_0xd7749b(0x3f3)+_0xd7749b(0x302)+'g'](this[_0xd7749b(0x292)](),this[_0xd7749b(0x175)]()));$gameTemp['setAiTgrIn'+_0xd7749b(0x1cf)](this[_0xd7749b(0x292)](),this);const _0x54fec4=VisuMZ[_0xd7749b(0x23c)][_0xd7749b(0x250)+'n_makeTarg'+_0xd7749b(0x42c)][_0xd7749b(0x2a3)](this);return $gameTemp['clearAiTgr'+'Influence'](),AIManager[_0xd7749b(0x349)+'dTargets'](),_0x54fec4;},VisuMZ[_0x179114(0x23c)]['Game_Actio'+'n_itemTarg'+_0x179114(0x358)+'es']=Game_Action['prototype']['itemTarget'+_0x179114(0x340)],Game_Action[_0x179114(0x2aa)][_0x179114(0x19f)+_0x179114(0x340)]=function(){const _0xc022fc=_0x179114,_0x2ba61e=this['subject'](),_0xbc122=this[_0xc022fc(0x175)]();let _0x2638de=VisuMZ[_0xc022fc(0x23c)][_0xc022fc(0x250)+_0xc022fc(0x30c)+_0xc022fc(0x358)+'es'][_0xc022fc(0x2a3)](this);if(_0x2ba61e[_0xc022fc(0x412)+'eActionByA'+'I']()&&AIManager[_0xc022fc(0x263)+_0xc022fc(0x228)](_0x2ba61e,_0xbc122)){let _0x2e68bd=AIManager[_0xc022fc(0x215)+_0xc022fc(0x1f2)](_0x2ba61e,_0xbc122);_0x2638de=_0x2638de['filter'](_0x5c7f05=>_0x2e68bd[_0xc022fc(0x23b)](_0x5c7f05));}return _0x2638de;},VisuMZ[_0x179114(0x23c)]['Game_Actio'+_0x179114(0x324)]=Game_Action[_0x179114(0x2aa)][_0x179114(0x431)],Game_Action['prototype'][_0x179114(0x431)]=function(_0x304d00){const _0x4cb2eb=_0x179114;VisuMZ['BattleAI'][_0x4cb2eb(0x250)+'n_apply'][_0x4cb2eb(0x2a3)](this,_0x304d00),this[_0x4cb2eb(0x36c)+_0x4cb2eb(0x212)](_0x304d00);},Game_Action['prototype'][_0x179114(0x36c)+_0x179114(0x212)]=function(_0x3f7575){const _0x11bcdd=_0x179114,_0x6c370a={'rVSqG':function(_0x3ba438,_0x3ed035){return _0x3ba438===_0x3ed035;},'oQJlu':function(_0x1ba26c,_0x26d214){return _0x1ba26c<_0x26d214;}};if(!_0x3f7575)return;if(_0x6c370a[_0x11bcdd(0x25a)](this[_0x11bcdd(0x292)]()['isActor'](),_0x3f7575[_0x11bcdd(0x2f2)]()))return;let _0x29438d=[];if(Imported[_0x11bcdd(0x1b9)+_0x11bcdd(0x2fd)+_0x11bcdd(0x370)])_0x29438d=this[_0x11bcdd(0x354)]();else _0x6c370a[_0x11bcdd(0x21c)](this[_0x11bcdd(0x175)]()[_0x11bcdd(0x40f)][_0x11bcdd(0x230)],-0x6c4*0x3+-0x1b03+0x2f4f)?_0x29438d=this[_0x11bcdd(0x292)]()[_0x11bcdd(0x406)+_0x11bcdd(0x282)]():_0x29438d=[this[_0x11bcdd(0x175)]()[_0x11bcdd(0x40f)][_0x11bcdd(0x230)]];_0x3f7575[_0x11bcdd(0x1f7)+'edge'](_0x29438d,this[_0x11bcdd(0x404)](),this[_0x11bcdd(0x41b)]());},VisuMZ[_0x179114(0x23c)][_0x179114(0x250)+_0x179114(0x414)+_0x179114(0x2b7)+_0x179114(0x309)]=Game_Action[_0x179114(0x2aa)][_0x179114(0x181)+_0x179114(0x3ee)+_0x179114(0x351)],Game_Action[_0x179114(0x2aa)][_0x179114(0x181)+_0x179114(0x3ee)+_0x179114(0x351)]=function(){const _0x55161c=_0x179114,_0xa9baa9=this[_0x55161c(0x175)]()[_0x55161c(0x24b)];if(_0xa9baa9[_0x55161c(0x39c)](/ANY/i))return!![];return VisuMZ['BattleAI'][_0x55161c(0x250)+'n_isForOpp'+_0x55161c(0x2b7)+_0x55161c(0x309)][_0x55161c(0x2a3)](this);},VisuMZ[_0x179114(0x23c)][_0x179114(0x176)+_0x179114(0x16b)+'ram']=Game_BattlerBase[_0x179114(0x2aa)][_0x179114(0x35c)],Game_BattlerBase[_0x179114(0x2aa)][_0x179114(0x35c)]=function(_0x21bb9a){const _0x5e46c5=_0x179114,_0x1736e4={'suNnj':function(_0x313a10,_0x166f57){return _0x313a10===_0x166f57;}};let _0x6e3337=VisuMZ[_0x5e46c5(0x23c)]['Game_Battl'+'erBase_spa'+_0x5e46c5(0x38c)]['call'](this,_0x21bb9a);return _0x1736e4['suNnj'](_0x21bb9a,-0x25e6+-0x97*-0x31+-0x2f*-0x31)&&(_0x6e3337*=this[_0x5e46c5(0x36c)+_0x5e46c5(0x39f)+_0x5e46c5(0x3f8)]()),_0x6e3337;},Game_BattlerBase['prototype'][_0x179114(0x36c)+_0x179114(0x39f)+'uences']=function(){const _0x9342af=_0x179114,_0x1813bd={'dzuIk':function(_0x70e700,_0x335819){return _0x70e700*_0x335819;},'yFRRR':_0x9342af(0x422),'SFVgk':function(_0x390e2d,_0x914ede){return _0x390e2d-_0x914ede;},'OFOAZ':_0x9342af(0x1a5)},_0x2769d5=$gameTemp[_0x9342af(0x257)+_0x9342af(0x32d)](),_0x108e81=this[_0x9342af(0x18f)+_0x9342af(0x1ac)]();if(Imported[_0x9342af(0x1ad)+_0x9342af(0x208)+'l']){if(_0x2769d5['action']&&_0x2769d5[_0x9342af(0x223)][_0x9342af(0x222)+_0x9342af(0x3b2)]())return 0x1*0x1571+0x2258+0x14*-0x2ca;}let _0x32d691=0x1814*-0x1+0x167*0xd+0x5da;if(_0x2769d5[_0x9342af(0x1c8)+_0x9342af(0x2b3)])for(const _0x58a93d of _0x2769d5[_0x9342af(0x338)]){_0x108e81[_0x9342af(0x217)+_0x9342af(0x1a8)+'e'](_0x58a93d,this)&&(_0x32d691*=_0x1813bd[_0x9342af(0x1ca)](this[_0x9342af(0x1a6)+'e'](_0x58a93d),_0x2769d5[_0x9342af(0x1c8)+_0x9342af(0x197)]));}return _0x108e81[_0x9342af(0x299)+_0x9342af(0x393)](_0x1813bd['yFRRR'],this)&&(_0x32d691*=_0x1813bd['SFVgk'](0x3*-0x4b3+0x4*0x694+-0xc36,_0x1813bd['dzuIk'](this[_0x9342af(0x422)],_0x2769d5[_0x9342af(0x2d9)+_0x9342af(0x26a)]))),_0x108e81['hasXParamA'+_0x9342af(0x393)](_0x1813bd['OFOAZ'],this)&&(_0x32d691*=_0x1813bd['SFVgk'](0x2692+0x2*0x167+-0x295f,_0x1813bd['dzuIk'](this['mev'],_0x2769d5[_0x9342af(0x243)+_0x9342af(0x26a)]))),_0x32d691[_0x9342af(0x32e)](-0x5d5*0x1+0xc6d+-0x698+0.001,-0x315+0xecd+0xfa*-0x8);},Game_BattlerBase['prototype'][_0x179114(0x3fc)]=function(){const _0x48c5c5=_0x179114,_0x228b97={'OeDBZ':_0x48c5c5(0x1ce)};return _0x228b97[_0x48c5c5(0x290)];},VisuMZ[_0x179114(0x23c)]['Game_Battl'+'erBase_die']=Game_BattlerBase['prototype'][_0x179114(0x21f)],Game_BattlerBase[_0x179114(0x2aa)][_0x179114(0x21f)]=function(){const _0x36a104=_0x179114;this[_0x36a104(0x16d)+_0x36a104(0x411)+_0x36a104(0x41c)+'AI']=![],VisuMZ[_0x36a104(0x23c)]['Game_Battl'+_0x36a104(0x1a0)]['call'](this);},VisuMZ['BattleAI']['Game_Battl'+_0x179114(0x2ca)+_0x179114(0x3f7)]=Game_BattlerBase[_0x179114(0x2aa)][_0x179114(0x30b)],Game_BattlerBase[_0x179114(0x2aa)][_0x179114(0x30b)]=function(){const _0x2d589d=_0x179114;this[_0x2d589d(0x16d)+_0x2d589d(0x411)+_0x2d589d(0x41c)+'AI']=![],VisuMZ['BattleAI'][_0x2d589d(0x176)+_0x2d589d(0x2ca)+_0x2d589d(0x3f7)][_0x2d589d(0x2a3)](this);},VisuMZ[_0x179114(0x23c)]['Game_Battl'+_0x179114(0x378)+_0x179114(0x344)]=Game_Battler[_0x179114(0x2aa)][_0x179114(0x298)+_0x179114(0x3e4)],Game_Battler['prototype'][_0x179114(0x298)+_0x179114(0x3e4)]=function(_0x349899){const _0x2c9a1f=_0x179114;this[_0x2c9a1f(0x16d)+_0x2c9a1f(0x411)+'terminedBy'+'AI']=![],VisuMZ['BattleAI'][_0x2c9a1f(0x176)+_0x2c9a1f(0x378)+_0x2c9a1f(0x344)]['call'](this,_0x349899);},VisuMZ[_0x179114(0x23c)][_0x179114(0x176)+'er_onBattl'+_0x179114(0x186)]=Game_Battler[_0x179114(0x2aa)][_0x179114(0x24f)+'d'],Game_Battler[_0x179114(0x2aa)][_0x179114(0x24f)+'d']=function(){const _0x569d5d=_0x179114;this['_onSpotMad'+'eActionsDe'+_0x569d5d(0x41c)+'AI']=![],VisuMZ[_0x569d5d(0x23c)][_0x569d5d(0x176)+_0x569d5d(0x378)+_0x569d5d(0x186)][_0x569d5d(0x2a3)](this);},VisuMZ[_0x179114(0x23c)][_0x179114(0x176)+'er_onAllAc'+_0x179114(0x296)]=Game_Battler['prototype'][_0x179114(0x235)+_0x179114(0x2ee)],Game_Battler[_0x179114(0x2aa)][_0x179114(0x235)+_0x179114(0x2ee)]=function(){const _0x38f7d6=_0x179114;this[_0x38f7d6(0x16d)+'eActionsDe'+_0x38f7d6(0x41c)+'AI']=![],VisuMZ[_0x38f7d6(0x23c)][_0x38f7d6(0x176)+_0x38f7d6(0x28f)+_0x38f7d6(0x296)]['call'](this);},VisuMZ[_0x179114(0x23c)][_0x179114(0x176)+_0x179114(0x326)+_0x179114(0x423)]=Game_Battler[_0x179114(0x2aa)][_0x179114(0x2e7)+'s'],Game_Battler['prototype'][_0x179114(0x2e7)+'s']=function(){const _0xa3b724=_0x179114;if(this['_onSpotMad'+'eActionsDe'+_0xa3b724(0x41c)+'AI'])return;VisuMZ[_0xa3b724(0x23c)][_0xa3b724(0x176)+_0xa3b724(0x326)+_0xa3b724(0x423)][_0xa3b724(0x2a3)](this);},VisuMZ[_0x179114(0x23c)][_0x179114(0x176)+_0x179114(0x3cb)+_0x179114(0x336)]=Game_Battler[_0x179114(0x2aa)][_0x179114(0x2f3)],Game_Battler['prototype'][_0x179114(0x2f3)]=function(){const _0xeed809=_0x179114;if(this[_0xeed809(0x412)+'eActionByA'+'I']()){const _0x4a2d1a=VisuMZ[_0xeed809(0x23c)][_0xeed809(0x180)][_0xeed809(0x29e)];if(_0x4a2d1a['OnSpotAI']&&_0x4a2d1a[_0xeed809(0x2cb)+_0xeed809(0x16f)])return![];}return VisuMZ[_0xeed809(0x23c)][_0xeed809(0x176)+'er_isChant'+_0xeed809(0x336)][_0xeed809(0x2a3)](this);},Game_Battler[_0x179114(0x2aa)][_0x179114(0x412)+'eActionByA'+'I']=function(){if(this['isConfused']())return![];return!![];},Game_Battler[_0x179114(0x2aa)][_0x179114(0x381)+_0x179114(0x1fb)+'ction']=function(){},Game_Battler[_0x179114(0x2aa)][_0x179114(0x2ea)+_0x179114(0x1da)+'TgrInfluen'+'ce']=function(){const _0x4450b6=_0x179114,_0x10a2be={'PAfrB':function(_0x25fb68,_0x34ba56){return _0x25fb68>_0x34ba56;}};if(this['isActor']()||this[_0x4450b6(0x185)]()){const _0x2ae621=this[_0x4450b6(0x2f2)]()?this[_0x4450b6(0x38a)]()[_0x4450b6(0x3eb)]:this['enemy']()[_0x4450b6(0x3eb)];if(_0x2ae621[_0x4450b6(0x39c)](AIManager[_0x4450b6(0x37c)]['bypassElem'+'entTgr']))return![];else{if(_0x2ae621['match'](AIManager['_regexp']['aiElementT'+'gr']))return _0x10a2be['PAfrB'](this['aiApplyEle'+'mentalTgrI'+_0x4450b6(0x2b5)+'te'](),-0x18cf+-0x1b3+0x1a82);}}return VisuMZ[_0x4450b6(0x23c)]['Settings'][_0x4450b6(0x2e3)]['ElementTgr'];},Game_Battler[_0x179114(0x2aa)][_0x179114(0x313)+'mentalTgrI'+_0x179114(0x2b5)+'te']=function(){const _0x3d95b8=_0x179114,_0x30a889={'KiivJ':function(_0x55a65b,_0x4f2009){return _0x55a65b(_0x4f2009);}};if(this[_0x3d95b8(0x2f2)]()||this['isEnemy']()){const _0x27a709=this[_0x3d95b8(0x2f2)]()?this[_0x3d95b8(0x38a)]()[_0x3d95b8(0x3eb)]:this[_0x3d95b8(0x2bb)]()[_0x3d95b8(0x3eb)];if(_0x27a709[_0x3d95b8(0x39c)](AIManager[_0x3d95b8(0x37c)][_0x3d95b8(0x22a)+'gr']))return _0x30a889[_0x3d95b8(0x179)](eval,RegExp['$1']);}return VisuMZ[_0x3d95b8(0x23c)]['Settings'][_0x3d95b8(0x2e3)][_0x3d95b8(0x288)+_0x3d95b8(0x3dd)];},Game_Battler[_0x179114(0x2aa)][_0x179114(0x2ea)+_0x179114(0x2ff)+'luence']=function(){const _0x53a6aa=_0x179114,_0x158a30={'uZNEM':function(_0x3081ee,_0x55d2d7){return _0x3081ee>_0x55d2d7;}};if(this['isActor']()||this['isEnemy']()){const _0x370d71=this[_0x53a6aa(0x2f2)]()?this['actor']()[_0x53a6aa(0x3eb)]:this['enemy']()['note'];if(_0x370d71[_0x53a6aa(0x39c)](AIManager[_0x53a6aa(0x37c)]['bypassEvaT'+'gr']))return![];else{if(_0x370d71[_0x53a6aa(0x39c)](AIManager[_0x53a6aa(0x37c)][_0x53a6aa(0x209)]))return _0x158a30[_0x53a6aa(0x387)](this[_0x53a6aa(0x382)+'TgrInfluen'+_0x53a6aa(0x26a)](),0x18db+0x247d*0x1+-0x3d58);}}return VisuMZ[_0x53a6aa(0x23c)][_0x53a6aa(0x180)][_0x53a6aa(0x2e3)][_0x53a6aa(0x39e)];},Game_Battler[_0x179114(0x2aa)][_0x179114(0x382)+_0x179114(0x27e)+_0x179114(0x26a)]=function(){const _0x1fecd2=_0x179114,_0x2309d6={'kpPvl':function(_0x23512a,_0x1484d4){return _0x23512a(_0x1484d4);}};if(this[_0x1fecd2(0x2f2)]()||this['isEnemy']()){const _0x4719b2=this[_0x1fecd2(0x2f2)]()?this['actor']()[_0x1fecd2(0x3eb)]:this['enemy']()['note'];if(_0x4719b2[_0x1fecd2(0x39c)](AIManager[_0x1fecd2(0x37c)]['aiEvaTgr']))return _0x2309d6[_0x1fecd2(0x2db)](eval,RegExp['$1']);}return VisuMZ[_0x1fecd2(0x23c)][_0x1fecd2(0x180)][_0x1fecd2(0x2e3)]['EvaTgrRate'];},Game_Battler['prototype'][_0x179114(0x2ea)+_0x179114(0x384)+_0x179114(0x2b3)]=function(){const _0x569dfe=_0x179114,_0x2d3286={'imWSs':function(_0x1a739b,_0x41d8d4){return _0x1a739b>_0x41d8d4;}};if(this[_0x569dfe(0x2f2)]()||this[_0x569dfe(0x185)]()){const _0xe8f2a2=this['isActor']()?this[_0x569dfe(0x38a)]()['note']:this[_0x569dfe(0x2bb)]()[_0x569dfe(0x3eb)];if(_0xe8f2a2[_0x569dfe(0x39c)](AIManager['_regexp'][_0x569dfe(0x2f1)+'gr']))return![];else{if(_0xe8f2a2['match'](AIManager[_0x569dfe(0x37c)][_0x569dfe(0x3a5)]))return _0x2d3286[_0x569dfe(0x30d)](this['aiApplyMev'+_0x569dfe(0x27e)+_0x569dfe(0x26a)](),0x2ca*0x6+0x302*0x5+0x48a*-0x7);}}return VisuMZ[_0x569dfe(0x23c)][_0x569dfe(0x180)][_0x569dfe(0x2e3)][_0x569dfe(0x39e)];},Game_Battler[_0x179114(0x2aa)][_0x179114(0x207)+_0x179114(0x27e)+_0x179114(0x26a)]=function(){const _0x3720b4=_0x179114,_0x4de556={'kaWiw':function(_0xf185fa,_0x3c7a5b){return _0xf185fa(_0x3c7a5b);}};if(this[_0x3720b4(0x2f2)]()||this[_0x3720b4(0x185)]()){const _0x5859b9=this['isActor']()?this['actor']()[_0x3720b4(0x3eb)]:this[_0x3720b4(0x2bb)]()[_0x3720b4(0x3eb)];if(_0x5859b9[_0x3720b4(0x39c)](AIManager['_regexp']['aiMevTgr']))return _0x4de556['kaWiw'](eval,RegExp['$1']);}return VisuMZ[_0x3720b4(0x23c)]['Settings'][_0x3720b4(0x2e3)][_0x3720b4(0x3ca)];},Game_Battler['prototype'][_0x179114(0x182)]=function(){const _0x46b2dc=_0x179114,_0x34022d={'YXkej':function(_0x12014f,_0x505bf3){return _0x12014f(_0x505bf3);}},_0x5135bf=VisuMZ[_0x46b2dc(0x23c)]['Settings'][_0x46b2dc(0x29e)];if(this[_0x46b2dc(0x2f2)]()||this['isEnemy']()){const _0x2ce354=this[_0x46b2dc(0x2f2)]()?this[_0x46b2dc(0x38a)]()[_0x46b2dc(0x3eb)]:this[_0x46b2dc(0x2bb)]()[_0x46b2dc(0x3eb)];if(_0x2ce354[_0x46b2dc(0x39c)](AIManager[_0x46b2dc(0x37c)][_0x46b2dc(0x182)]))return _0x34022d[_0x46b2dc(0x19c)](Number,RegExp['$1'])[_0x46b2dc(0x32e)](-0x11d4+0x1f81+-0xdad,-0x17a4+0x2042+-0x83a);else{if(this['isActor']())return _0x5135bf[_0x46b2dc(0x2ba)+'el'];else{if(this[_0x46b2dc(0x185)]())return _0x5135bf['EnemyAILev'+'el'];}}}return _0x5135bf[_0x46b2dc(0x1b8)+'el'];},Game_Battler[_0x179114(0x2aa)][_0x179114(0x1f7)+_0x179114(0x213)]=function(_0x53f4c0,_0x30d81d,_0x4ad553){const _0xb520d5=_0x179114,_0x95e21a={'cnCHH':function(_0x4493ca,_0x341ad3){return _0x4493ca>_0x341ad3;},'oieDF':_0xb520d5(0x1e8),'kmhhC':_0xb520d5(0x245)},_0x583b63=this[_0xb520d5(0x18f)+'nit']();if(_0x53f4c0&&_0x95e21a['cnCHH'](_0x53f4c0[_0xb520d5(0x385)],-0x1*0x82c+-0x1*0x1874+-0x2*-0x1050))for(const _0x10acee of _0x53f4c0){_0x583b63[_0xb520d5(0x38f)+_0xb520d5(0x1a8)+'e'](_0x10acee,this);}_0x30d81d&&_0x583b63[_0xb520d5(0x28c)+_0xb520d5(0x393)](_0x95e21a[_0xb520d5(0x416)],this),_0x4ad553&&_0x583b63[_0xb520d5(0x28c)+'IKnowledge'](_0x95e21a['kmhhC'],this);},Game_Battler['prototype'][_0x179114(0x299)+_0x179114(0x393)]=function(_0xeab637){const _0x4a9cde=_0x179114,_0x5264ee=this[_0x4a9cde(0x18f)+_0x4a9cde(0x1ac)]();return _0x5264ee[_0x4a9cde(0x299)+_0x4a9cde(0x393)](_0xeab637,this);},Game_Battler[_0x179114(0x2aa)][_0x179114(0x3e2)+_0x179114(0x260)]=function(){const _0x3ffb81=_0x179114,_0x3d50d5={'AYFNV':function(_0x23374e,_0x31514a){return _0x23374e(_0x31514a);}},_0x4c2931=VisuMZ[_0x3ffb81(0x23c)]['Settings']['General'];if(this['isActor']()||this[_0x3ffb81(0x185)]()){const _0xa4f2df=this[_0x3ffb81(0x2f2)]()?this[_0x3ffb81(0x38a)]()['note']:this['enemy']()[_0x3ffb81(0x3eb)];if(_0xa4f2df[_0x3ffb81(0x39c)](AIManager['_regexp'][_0x3ffb81(0x3e2)+_0x3ffb81(0x260)]))return _0x3d50d5[_0x3ffb81(0x1cd)](Number,RegExp['$1'])[_0x3ffb81(0x32e)](-0x209*-0x13+0x270d+0x4*-0x136e,0x139b+-0x19cc+0x63a);else{if(this[_0x3ffb81(0x2f2)]())return _0x4c2931[_0x3ffb81(0x3e6)+_0x3ffb81(0x2f0)]['clamp'](0x122f+0x1939+0x2*-0x15b4,-0x5*0x414+-0x2523+0x3990);else{if(this[_0x3ffb81(0x185)]())return _0x4c2931[_0x3ffb81(0x20c)+_0x3ffb81(0x2f0)][_0x3ffb81(0x32e)](-0x15f3+0x20da*-0x1+0x36cd*0x1,-0x2037+0x1be1+-0x1*-0x45f);}}}return _0x4c2931['EnemyRatin'+_0x3ffb81(0x2f0)][_0x3ffb81(0x32e)](-0xfb*-0x3+-0xd53+0xa62,0x1af5+0x5a4*0x4+-0x317c);},VisuMZ[_0x179114(0x23c)]['Game_Battl'+_0x179114(0x262)+'nt']=Game_Battler[_0x179114(0x2aa)]['turnCount'],Game_Battler['prototype'][_0x179114(0x417)]=function(){const _0x171b82=_0x179114;if(BattleManager[_0x171b82(0x383)]())return VisuMZ[_0x171b82(0x23c)][_0x171b82(0x176)+'er_turnCou'+'nt'][_0x171b82(0x2a3)](this);if(VisuMZ['BattleAI'][_0x171b82(0x180)][_0x171b82(0x29e)][_0x171b82(0x1a7)]){if(this[_0x171b82(0x401)+_0x171b82(0x233)+'untAI']())return VisuMZ[_0x171b82(0x23c)][_0x171b82(0x176)+_0x171b82(0x262)+'nt'][_0x171b82(0x2a3)](this);return $gameTroop[_0x171b82(0x417)]();}else return VisuMZ[_0x171b82(0x23c)][_0x171b82(0x176)+_0x171b82(0x262)+'nt'][_0x171b82(0x2a3)](this);},Game_Battler[_0x179114(0x2aa)][_0x179114(0x401)+_0x179114(0x233)+_0x179114(0x319)]=function(){const _0x1d9cd3=_0x179114,_0x3ce2e3={'KZSsa':function(_0x130d2a,_0xa64751){return _0x130d2a<_0xa64751;},'xdvmX':'VisuMZ_2_B'+_0x1d9cd3(0x2bf)+'mFTB\x20needs'+'\x20to\x20be\x20upd'+_0x1d9cd3(0x3c6),'HYVvr':'in\x20order\x20f'+_0x1d9cd3(0x255)+'3_BattleAI'+'\x20to\x20work.','WHgrg':function(_0xd4d47d,_0x109257){return _0xd4d47d(_0x109257);},'crohg':function(_0x3f84d0,_0x1bdf0f){return _0x3f84d0<_0x1bdf0f;},'cULFo':'VisuMZ_2_B'+_0x1d9cd3(0x2bf)+_0x1d9cd3(0x362)+_0x1d9cd3(0x32a)+_0x1d9cd3(0x3c6),'IjeZr':_0x1d9cd3(0x25b)+_0x1d9cd3(0x2bf)+_0x1d9cd3(0x31c)+_0x1d9cd3(0x32a)+_0x1d9cd3(0x3c6)};if(Imported[_0x1d9cd3(0x25b)+_0x1d9cd3(0x2bf)+_0x1d9cd3(0x18c)]&&BattleManager[_0x1d9cd3(0x307)]()){if(_0x3ce2e3[_0x1d9cd3(0x2a5)](VisuMZ['BattleSyst'+_0x1d9cd3(0x375)][_0x1d9cd3(0x1f5)],0xaea*0x3+0x91c+-0x29d9+0.1100000000000001)){let _0x45fa04='';_0x45fa04+=_0x3ce2e3[_0x1d9cd3(0x1f8)],_0x45fa04+=_0x3ce2e3[_0x1d9cd3(0x397)],_0x3ce2e3[_0x1d9cd3(0x2c7)](alert,_0x45fa04),SceneManager[_0x1d9cd3(0x36a)]();}return!![];}else{if(Imported['VisuMZ_2_B'+_0x1d9cd3(0x2bf)+_0x1d9cd3(0x34a)]&&BattleManager[_0x1d9cd3(0x307)]()){if(_0x3ce2e3[_0x1d9cd3(0x320)](VisuMZ[_0x1d9cd3(0x226)+_0x1d9cd3(0x3f0)]['version'],0x16c0+0x7*-0x351+0xf*0x8+0.08000000000000007)){let _0x4db681='';_0x4db681+=_0x3ce2e3[_0x1d9cd3(0x2d2)],_0x4db681+=_0x3ce2e3[_0x1d9cd3(0x397)],_0x3ce2e3[_0x1d9cd3(0x2c7)](alert,_0x4db681),SceneManager[_0x1d9cd3(0x36a)]();}return!![];}else{if(Imported[_0x1d9cd3(0x25b)+_0x1d9cd3(0x2bf)+_0x1d9cd3(0x17c)]&&BattleManager[_0x1d9cd3(0x307)]()){if(_0x3ce2e3[_0x1d9cd3(0x320)](VisuMZ[_0x1d9cd3(0x226)+_0x1d9cd3(0x26e)]['version'],0x3*0xc64+-0x22c1*-0x1+0x1*-0x47ec+0.08000000000000007)){let _0x295614='';_0x295614+=_0x3ce2e3[_0x1d9cd3(0x1bf)],_0x295614+=_0x3ce2e3[_0x1d9cd3(0x397)],_0x3ce2e3[_0x1d9cd3(0x2c7)](alert,_0x295614),SceneManager[_0x1d9cd3(0x36a)]();}return!![];}}}return![];},Game_Actor[_0x179114(0x2aa)][_0x179114(0x412)+_0x179114(0x205)+'I']=function(){const _0xe01164=_0x179114;if(this[_0xe01164(0x210)]())return![];return this['isAutoBatt'+'le']()&&this[_0xe01164(0x241)+_0xe01164(0x3dc)]();},Game_Actor[_0x179114(0x2aa)][_0x179114(0x241)+_0x179114(0x3dc)]=function(){const _0x850a8d=_0x179114,_0x5849b7={'HBlsN':function(_0x488491,_0x5375a7){return _0x488491(_0x5375a7);}},_0x5d8989=this[_0x850a8d(0x334)+'ss']()[_0x850a8d(0x3eb)];if(_0x5d8989[_0x850a8d(0x39c)](/<NO REFERENCE AI>/i))return null;else{if(_0x5d8989[_0x850a8d(0x39c)](/<REFERENCE AI: ENEMY (\d+)>/i))return $dataEnemies[_0x5849b7[_0x850a8d(0x2d5)](Number,RegExp['$1'])];else{if(_0x5d8989[_0x850a8d(0x39c)](/<REFERENCE AI: (.*)>/i))return $dataEnemies[DataManager[_0x850a8d(0x391)+_0x850a8d(0x19e)](_0x5849b7[_0x850a8d(0x2d5)](String,RegExp['$1']))];}}return $dataEnemies[VisuMZ[_0x850a8d(0x23c)][_0x850a8d(0x180)][_0x850a8d(0x29e)][_0x850a8d(0x232)+'erence']];},Game_Actor[_0x179114(0x2aa)][_0x179114(0x3fc)]=function(){const _0x5376ad=_0x179114,_0x503c66={'cQyLj':function(_0xa9dcfe,_0x192992){return _0xa9dcfe(_0x192992);}},_0x441474=this['currentCla'+'ss']()[_0x5376ad(0x3eb)];if(_0x441474[_0x5376ad(0x39c)](AIManager[_0x5376ad(0x37c)][_0x5376ad(0x3fc)]))return _0x503c66[_0x5376ad(0x3a8)](String,RegExp['$1'])[_0x5376ad(0x1c1)+'e']()[_0x5376ad(0x3c0)]();return VisuMZ[_0x5376ad(0x23c)][_0x5376ad(0x180)][_0x5376ad(0x29e)]['ActorStyle'+'AI'];},Game_Actor['prototype'][_0x179114(0x381)+_0x179114(0x1fb)+'ction']=function(){const _0x2ecb9e=_0x179114;Game_Battler[_0x2ecb9e(0x2aa)][_0x2ecb9e(0x381)+_0x2ecb9e(0x1fb)+_0x2ecb9e(0x1e7)]['call'](this),this[_0x2ecb9e(0x16e)+_0x2ecb9e(0x20b)+'s']();},VisuMZ['BattleAI'][_0x179114(0x3f4)+'_makeAutoB'+'attleActio'+'ns']=Game_Actor['prototype'][_0x179114(0x16e)+'ttleAction'+'s'],Game_Actor[_0x179114(0x2aa)][_0x179114(0x16e)+_0x179114(0x20b)+'s']=function(){const _0x405a51=_0x179114;this[_0x405a51(0x412)+_0x405a51(0x205)+'I']()?this['makeAutoBa'+'ttleAction'+_0x405a51(0x30a)+'AI']():VisuMZ['BattleAI'][_0x405a51(0x3f4)+_0x405a51(0x24e)+_0x405a51(0x1ba)+'ns']['call'](this);},Game_Actor[_0x179114(0x2aa)][_0x179114(0x16e)+'ttleAction'+_0x179114(0x30a)+'AI']=function(){const _0x31320d=_0x179114,_0x426b1b={'NOjRq':function(_0x385050,_0x17e1c1){return _0x385050>_0x17e1c1;},'yvocZ':function(_0x4ddf55,_0x1934b0){return _0x4ddf55===_0x1934b0;},'DJSPP':function(_0x4f85a1,_0x1ccc26){return _0x4f85a1===_0x1ccc26;},'qYeII':function(_0x5e0d86,_0x39aa33){return _0x5e0d86>_0x39aa33;}};if(_0x426b1b[_0x31320d(0x41a)](this[_0x31320d(0x2c4)](),0xb1c+-0xfa3+0x487)){const _0x2637e6=this['usableSkil'+'ls']();if(this[_0x31320d(0x2fa)]())_0x2637e6[_0x31320d(0x31b)]($dataSkills[this[_0x31320d(0x204)+_0x31320d(0x279)]()]);if(this[_0x31320d(0x286)]())_0x2637e6[_0x31320d(0x31b)]($dataSkills[this[_0x31320d(0x2be)+'Id']()]);const _0x8ff765=this['referenceE'+_0x31320d(0x3dc)](),_0x5712cc=JsonEx[_0x31320d(0x31a)+'py'](_0x8ff765[_0x31320d(0x2d7)]);for(const _0x5afd54 of _0x5712cc){if(_0x426b1b[_0x31320d(0x40c)](_0x5afd54[_0x31320d(0x265)],0x6b0*0x2+-0x574+-0x7eb))_0x5afd54[_0x31320d(0x265)]=this[_0x31320d(0x204)+'lId']();if(_0x426b1b[_0x31320d(0x347)](_0x5afd54['skillId'],-0x11c*-0x2+0x1*0x1ea1+-0x20d7))_0x5afd54[_0x31320d(0x265)]=this[_0x31320d(0x2be)+'Id']();}const _0x5e764f=_0x5712cc['filter'](_0x1ce178=>this[_0x31320d(0x3f1)+_0x31320d(0x316)](_0x1ce178)&&_0x2637e6[_0x31320d(0x23b)]($dataSkills[_0x1ce178[_0x31320d(0x265)]]));if(_0x426b1b['qYeII'](_0x5e764f[_0x31320d(0x385)],0x1d93*0x1+-0x3*-0x6de+-0x72b*0x7)){this[_0x31320d(0x1dd)+_0x31320d(0x177)](_0x5e764f);return;}}VisuMZ[_0x31320d(0x23c)][_0x31320d(0x3f4)+_0x31320d(0x24e)+_0x31320d(0x1ba)+'ns'][_0x31320d(0x2a3)](this);},Game_Actor[_0x179114(0x2aa)]['meetsCondi'+_0x179114(0x407)]=function(_0x4780a0){const _0x3f4f37=_0x179114;return Game_Enemy['prototype'][_0x3f4f37(0x1ae)+_0x3f4f37(0x407)][_0x3f4f37(0x2a3)](this,_0x4780a0);},Game_Actor[_0x179114(0x2aa)]['meetsTurnC'+_0x179114(0x402)]=function(_0x2030db,_0x45297c){const _0x4a42fa=_0x179114;return Game_Enemy[_0x4a42fa(0x2aa)][_0x4a42fa(0x3e1)+_0x4a42fa(0x402)][_0x4a42fa(0x2a3)](this,_0x2030db,_0x45297c);},Game_Actor[_0x179114(0x2aa)][_0x179114(0x20e)+_0x179114(0x284)]=function(_0x38c3e5,_0x5da976){const _0x4e8dcc=_0x179114;return Game_Enemy[_0x4e8dcc(0x2aa)]['meetsHpCon'+_0x4e8dcc(0x284)]['call'](this,_0x38c3e5,_0x5da976);},Game_Actor['prototype']['meetsMpCon'+_0x179114(0x284)]=function(_0x4deeda,_0x40898c){const _0x30672=_0x179114;return Game_Enemy['prototype']['meetsMpCon'+_0x30672(0x284)]['call'](this,_0x4deeda,_0x40898c);},Game_Actor[_0x179114(0x2aa)][_0x179114(0x3ea)+'Condition']=function(_0x4b2e0d){const _0x215f85=_0x179114;return Game_Enemy['prototype'][_0x215f85(0x3ea)+_0x215f85(0x389)]['call'](this,_0x4b2e0d);},Game_Actor[_0x179114(0x2aa)]['meetsParty'+_0x179114(0x196)+_0x179114(0x407)]=function(_0x4f6850){const _0x41d9fc=_0x179114;return Game_Enemy[_0x41d9fc(0x2aa)]['meetsParty'+'LevelCondi'+_0x41d9fc(0x407)][_0x41d9fc(0x2a3)](this,_0x4f6850);},Game_Actor[_0x179114(0x2aa)][_0x179114(0x26b)+_0x179114(0x34e)]=function(_0x10da9b){const _0x3bd30d=_0x179114;return Game_Enemy[_0x3bd30d(0x2aa)][_0x3bd30d(0x26b)+_0x3bd30d(0x34e)]['call'](this,_0x10da9b);},Game_Enemy[_0x179114(0x2aa)][_0x179114(0x3fc)]=function(){const _0x5b976d=_0x179114,_0x434977={'umwTv':function(_0x576e27,_0x1ff8b1){return _0x576e27(_0x1ff8b1);}},_0x2f89c8=this[_0x5b976d(0x2bb)]()['note'];if(_0x2f89c8[_0x5b976d(0x39c)](AIManager[_0x5b976d(0x37c)]['aiStyle']))return _0x434977['umwTv'](String,RegExp['$1'])[_0x5b976d(0x1c1)+'e']()[_0x5b976d(0x3c0)]();return VisuMZ['BattleAI'][_0x5b976d(0x180)][_0x5b976d(0x29e)]['EnemyStyle'+'AI'];},VisuMZ[_0x179114(0x23c)][_0x179114(0x1fc)+_0x179114(0x314)+_0x179114(0x2cf)]=Game_Enemy[_0x179114(0x2aa)][_0x179114(0x3f1)+_0x179114(0x316)],Game_Enemy['prototype'][_0x179114(0x3f1)+_0x179114(0x316)]=function(_0x4e7a78){const _0x3d5bb4=_0x179114,_0x3b0d94={'YnAbk':function(_0x1298cc,_0x25cd33){return _0x1298cc===_0x25cd33;},'tsHqd':'random'};if(!VisuMZ['BattleAI'][_0x3d5bb4(0x1fc)+_0x3d5bb4(0x314)+_0x3d5bb4(0x2cf)][_0x3d5bb4(0x2a3)](this,_0x4e7a78))return![];if(_0x3b0d94[_0x3d5bb4(0x20f)](this[_0x3d5bb4(0x3fc)](),_0x3b0d94[_0x3d5bb4(0x2fb)]))return!![];return AIManager['hasValidTa'+_0x3d5bb4(0x228)](this,$dataSkills[_0x4e7a78['skillId']]);},Game_Actor[_0x179114(0x2aa)][_0x179114(0x3f1)+_0x179114(0x316)]=function(_0x1dd0f0){const _0x276d42=_0x179114;return Game_Enemy[_0x276d42(0x2aa)][_0x276d42(0x3f1)+'lid'][_0x276d42(0x2a3)](this,_0x1dd0f0);},Game_Enemy['prototype'][_0x179114(0x254)+'on']=function(_0x338a92,_0x5c26d4){const _0x4b45fb=_0x179114,_0x205000={'aeqcB':function(_0x1e0109,_0x555f47){return _0x1e0109>=_0x555f47;},'isiio':function(_0x3a3e6d,_0x356e99){return _0x3a3e6d-_0x356e99;},'hgCXD':function(_0x4bb456,_0x383649){return _0x4bb456<=_0x383649;}},_0x3f19c4=_0x338a92['reduce']((_0x111618,_0x35e196)=>_0x111618+_0x35e196[_0x4b45fb(0x3bc)]-_0x5c26d4,-0x15db+-0x19e4+0x2fbf);if(_0x205000[_0x4b45fb(0x41e)](_0x3f19c4,0xacc+0x2005*0x1+-0x71*0x61)){let _0x42dd78=Math[_0x4b45fb(0x33d)](_0x3f19c4);for(const _0x33bca5 of _0x338a92){_0x42dd78-=_0x205000[_0x4b45fb(0x202)](_0x33bca5[_0x4b45fb(0x3bc)],_0x5c26d4);if(_0x205000['hgCXD'](_0x42dd78,0x18f1+-0x1234+-0x6bd))return _0x33bca5;}}else return null;},Game_Actor[_0x179114(0x2aa)][_0x179114(0x254)+'on']=function(_0x5818ee,_0x443ce1){const _0x4944d9=_0x179114;return Game_Enemy[_0x4944d9(0x2aa)][_0x4944d9(0x254)+'on'][_0x4944d9(0x2a3)](this,_0x5818ee,_0x443ce1);},Game_Enemy[_0x179114(0x2aa)]['selectAllA'+_0x179114(0x177)]=function(_0x54f402){const _0x3b1aec=_0x179114,_0x1a73b4={'OuwgN':function(_0x4351d4,_0x3cbcfb){return _0x4351d4(_0x3cbcfb);},'nlBok':_0x3b1aec(0x390),'bnbqg':'casual','njTzv':function(_0x11ba5e,_0x5ab3a9){return _0x11ba5e===_0x5ab3a9;},'GZhlA':_0x3b1aec(0x3a2)},_0x4e22cf=_0x1a73b4[_0x3b1aec(0x291)](String,this[_0x3b1aec(0x3fc)]())[_0x3b1aec(0x1c1)+'e']()[_0x3b1aec(0x3c0)]();if([_0x1a73b4[_0x3b1aec(0x306)],_0x1a73b4[_0x3b1aec(0x36f)]][_0x3b1aec(0x23b)](_0x4e22cf))this['selectAllA'+_0x3b1aec(0x187)+'om'](_0x54f402);else _0x1a73b4['njTzv'](_0x4e22cf,_0x1a73b4[_0x3b1aec(0x274)])?this[_0x3b1aec(0x1dd)+'ctionsGamb'+'it'](_0x54f402):this[_0x3b1aec(0x1dd)+'ctionsClas'+_0x3b1aec(0x29d)](_0x54f402);},Game_Actor[_0x179114(0x2aa)][_0x179114(0x1dd)+_0x179114(0x177)]=function(_0x4b9aa9){const _0xa2072f=_0x179114;Game_Enemy[_0xa2072f(0x2aa)]['selectAllA'+_0xa2072f(0x177)]['call'](this,_0x4b9aa9);},Game_Battler[_0x179114(0x2aa)][_0x179114(0x1dd)+_0x179114(0x421)+_0x179114(0x29d)]=function(_0x4c502e){const _0xd623d1=_0x179114,_0x2f51c6={'dLVdm':function(_0x220729,_0x2777f5){return _0x220729-_0x2777f5;},'YxqZZ':function(_0x1244c6,_0x62e570){return _0x1244c6<_0x62e570;}},_0x40eaed=Math[_0xd623d1(0x278)](..._0x4c502e[_0xd623d1(0x323)](_0x3edfc6=>_0x3edfc6[_0xd623d1(0x3bc)])),_0xc63044=_0x2f51c6[_0xd623d1(0x277)](_0x40eaed,this[_0xd623d1(0x3e2)+_0xd623d1(0x260)]()),_0x3420b0=this[_0xd623d1(0x2c4)]();_0x4c502e=_0x4c502e[_0xd623d1(0x2f8)](_0x12e5dd=>_0x12e5dd[_0xd623d1(0x3bc)]>=_0xc63044);for(let _0x3be1fb=-0x3e5*-0x4+-0x1075+0x2d*0x5;_0x2f51c6[_0xd623d1(0x17e)](_0x3be1fb,_0x3420b0);_0x3be1fb++){_0x4c502e=VisuMZ[_0xd623d1(0x23c)][_0xd623d1(0x1e2)+'ay'](_0x4c502e);const _0x5e26c7=this[_0xd623d1(0x254)+'on'](_0x4c502e,_0xc63044);this['action'](_0x3be1fb)[_0xd623d1(0x32c)+'tion'](_0x5e26c7);}},VisuMZ[_0x179114(0x23c)][_0x179114(0x1e2)+'ay']=function(_0x1c7cbe){const _0x2b57c1=_0x179114,_0x18516b={'ADEhU':function(_0x5245ab,_0x4a4a53){return _0x5245ab-_0x4a4a53;},'isfhf':function(_0x14b840,_0x348c8e){return _0x14b840>_0x348c8e;},'EWRBQ':function(_0x201784,_0x571111){return _0x201784*_0x571111;},'zGyYG':function(_0x4ee623,_0xa746b5){return _0x4ee623+_0xa746b5;}};var _0x5574cc,_0x473f14,_0x535979;for(_0x535979=_0x18516b[_0x2b57c1(0x2e0)](_0x1c7cbe[_0x2b57c1(0x385)],0x5d6+-0x1ab9*0x1+0x14e4);_0x18516b[_0x2b57c1(0x327)](_0x535979,-0x1685*-0x1+-0x33b*-0x9+-0x1*0x3398);_0x535979--){_0x5574cc=Math['floor'](_0x18516b[_0x2b57c1(0x3cf)](Math['random'](),_0x18516b['zGyYG'](_0x535979,-0xdc9*0x1+0x67+0xd63))),_0x473f14=_0x1c7cbe[_0x535979],_0x1c7cbe[_0x535979]=_0x1c7cbe[_0x5574cc],_0x1c7cbe[_0x5574cc]=_0x473f14;}return _0x1c7cbe;},Game_Battler[_0x179114(0x2aa)][_0x179114(0x1dd)+_0x179114(0x392)+'it']=function(_0x51254a){const _0x1ddaa9=_0x179114,_0x4260d6={'VtUXl':function(_0x1423fa,_0x54b477){return _0x1423fa<_0x54b477;}};for(let _0x469b79=0x1ad5*-0x1+-0x14b*0xb+-0x5*-0x836;_0x4260d6[_0x1ddaa9(0x2a0)](_0x469b79,this[_0x1ddaa9(0x2c4)]());_0x469b79++){const _0x16bce9=_0x51254a[-0x106c+0xf11+-0x1*-0x15b];this[_0x1ddaa9(0x223)](_0x469b79)[_0x1ddaa9(0x32c)+'tion'](_0x16bce9);}},Game_Battler[_0x179114(0x2aa)][_0x179114(0x1dd)+'ctionsRand'+'om']=function(_0x27ed15){const _0x2ba85a=_0x179114,_0x35b8f7={'NLfba':function(_0x4dbf8a,_0x5a271c){return _0x4dbf8a<_0x5a271c;}};for(let _0x21a3ca=-0x228a+-0x1015+-0x329f*-0x1;_0x35b8f7[_0x2ba85a(0x281)](_0x21a3ca,this[_0x2ba85a(0x2c4)]());_0x21a3ca++){const _0x1d4b5a=_0x27ed15[Math[_0x2ba85a(0x33d)](_0x27ed15['length'])];this[_0x2ba85a(0x223)](_0x21a3ca)['setEnemyAc'+_0x2ba85a(0x407)](_0x1d4b5a);}},Game_Enemy[_0x179114(0x2aa)]['determineN'+'ewValidAIA'+_0x179114(0x1e7)]=function(){const _0x1a555c=_0x179114,_0x28b74a={'XFRNB':function(_0x503a67,_0x1f69b0){return _0x503a67>_0x1f69b0;},'zfPnQ':function(_0x1ebb90,_0x58764f){return _0x1ebb90>_0x58764f;}};Game_Battler[_0x1a555c(0x2aa)][_0x1a555c(0x381)+'ewValidAIA'+_0x1a555c(0x1e7)]['call'](this);if(_0x28b74a[_0x1a555c(0x28b)](this['numActions'](),0x1*0x254d+-0xa0d+-0x1*0x1b40)){const _0x276cfb=this['enemy']()[_0x1a555c(0x2d7)][_0x1a555c(0x2f8)](_0x3852bd=>this[_0x1a555c(0x3f1)+_0x1a555c(0x316)](_0x3852bd));_0x28b74a[_0x1a555c(0x379)](_0x276cfb[_0x1a555c(0x385)],0x11*-0x6d+0x1*-0x2496+0xd*0x35f)?this[_0x1a555c(0x1dd)+_0x1a555c(0x177)](_0x276cfb):this[_0x1a555c(0x1f0)+'ns']();}},VisuMZ['BattleAI'][_0x179114(0x249)+'initialize']=Game_Unit[_0x179114(0x2aa)][_0x179114(0x312)],Game_Unit[_0x179114(0x2aa)][_0x179114(0x312)]=function(){const _0x4e20a2=_0x179114;VisuMZ[_0x4e20a2(0x23c)][_0x4e20a2(0x249)+_0x4e20a2(0x312)][_0x4e20a2(0x2a3)](this),this[_0x4e20a2(0x42b)+'AI']();},Game_Unit[_0x179114(0x2aa)]['initBattle'+'AI']=function(){const _0x9ce306=_0x179114;this['_applyAIFo'+_0x9ce306(0x1d2)+_0x9ce306(0x2cd)]=![],this[_0x9ce306(0x21a)+'wledge']();},VisuMZ[_0x179114(0x23c)]['Game_Unit_'+_0x179114(0x1c4)+'rs']=Game_Unit[_0x179114(0x2aa)][_0x179114(0x1c4)+'rs'],Game_Unit[_0x179114(0x2aa)][_0x179114(0x1c4)+'rs']=function(){const _0x44307c=_0x179114;let _0x5ea53c=VisuMZ['BattleAI'][_0x44307c(0x249)+'aliveMembe'+'rs'][_0x44307c(0x2a3)](this);if(this[_0x44307c(0x22c)+_0x44307c(0x1d2)+_0x44307c(0x2cd)]){const _0x5e7c33=AIManager['forcedTarg'+_0x44307c(0x42c)]();_0x5ea53c=_0x5ea53c['filter'](_0x413e9e=>_0x5e7c33[_0x44307c(0x23b)](_0x413e9e));}return _0x5ea53c;},VisuMZ[_0x179114(0x23c)]['Game_Unit_'+'randomTarg'+'et']=Game_Unit[_0x179114(0x2aa)][_0x179114(0x248)+'et'],Game_Unit[_0x179114(0x2aa)]['randomTarg'+'et']=function(){const _0x20b683=_0x179114;AIManager[_0x20b683(0x239)+'argets']()&&(this[_0x20b683(0x22c)+_0x20b683(0x1d2)+_0x20b683(0x2cd)]=!![]);const _0x80c4f=VisuMZ[_0x20b683(0x23c)][_0x20b683(0x249)+_0x20b683(0x248)+'et'][_0x20b683(0x2a3)](this);return this['_applyAIFo'+_0x20b683(0x1d2)+_0x20b683(0x2cd)]=![],_0x80c4f;},Game_Unit['prototype']['clearAIKno'+_0x179114(0x18d)]=function(){this['_aiKnowled'+'ge']={'evaRates':[],'mevRates':[],'elementRates':{}};},Game_Unit[_0x179114(0x2aa)]['aiKnowledg'+'e']=function(){const _0x3808da=_0x179114,_0x1a7e2e={'djlxe':function(_0x187550,_0x2f0326){return _0x187550===_0x2f0326;}};if(_0x1a7e2e[_0x3808da(0x2ed)](this[_0x3808da(0x39a)+'ge'],undefined))this[_0x3808da(0x21a)+_0x3808da(0x18d)]();return this[_0x3808da(0x39a)+'ge'];},Game_Unit[_0x179114(0x2aa)][_0x179114(0x28c)+_0x179114(0x393)]=function(_0x3977a8,_0x4030a5){const _0x5cae16=_0x179114;this['aiKnowledg'+'e']()[_0x3977a8]=this[_0x5cae16(0x1d1)+'e']()[_0x3977a8]||[];const _0x4a1c4c=_0x4030a5['isActor']()?_0x4030a5[_0x5cae16(0x337)]():_0x4030a5[_0x5cae16(0x2c8)]();!this['aiKnowledg'+'e']()[_0x3977a8][_0x5cae16(0x23b)](_0x4a1c4c)&&this[_0x5cae16(0x1d1)+'e']()[_0x3977a8][_0x5cae16(0x31b)](_0x4a1c4c);},Game_Unit[_0x179114(0x2aa)][_0x179114(0x299)+_0x179114(0x393)]=function(_0x207abb,_0x26fefe){const _0x5b6047=_0x179114,_0x535d3c={'dZcTM':_0x5b6047(0x1e8),'tQYVP':_0x5b6047(0x245)};if(!VisuMZ[_0x5b6047(0x23c)][_0x5b6047(0x180)][_0x5b6047(0x29e)][_0x5b6047(0x33e)+_0x5b6047(0x213)])return!![];const _0x6fd682=_0x207abb[_0x5b6047(0x39c)](/EVA/i)?_0x535d3c[_0x5b6047(0x1e3)]:_0x535d3c[_0x5b6047(0x33f)];this['aiKnowledg'+'e']()[_0x6fd682]=this[_0x5b6047(0x1d1)+'e']()[_0x6fd682]||[];const _0x322686=_0x26fefe[_0x5b6047(0x2f2)]()?_0x26fefe[_0x5b6047(0x337)]():_0x26fefe[_0x5b6047(0x2c8)]();return this[_0x5b6047(0x1d1)+'e']()[_0x6fd682][_0x5b6047(0x23b)](_0x322686);},Game_Unit[_0x179114(0x2aa)][_0x179114(0x38f)+'AIKnowledg'+'e']=function(_0x158e91,_0x18ee01){const _0x15fe6e=_0x179114;this['aiKnowledg'+'e']()['elementRat'+'es']=this[_0x15fe6e(0x1d1)+'e']()[_0x15fe6e(0x1a6)+'es']||{};const _0x17cabb=this[_0x15fe6e(0x1d1)+'e']()[_0x15fe6e(0x1a6)+'es'];_0x17cabb[_0x158e91]=_0x17cabb[_0x158e91]||[];const _0x4eb1b8=_0x18ee01[_0x15fe6e(0x2f2)]()?_0x18ee01['actorId']():_0x18ee01[_0x15fe6e(0x2c8)]();!_0x17cabb[_0x158e91][_0x15fe6e(0x23b)](_0x4eb1b8)&&_0x17cabb[_0x158e91][_0x15fe6e(0x31b)](_0x4eb1b8);},Game_Unit[_0x179114(0x2aa)]['hasElement'+'AIKnowledg'+'e']=function(_0x4e0655,_0x56b4d7){const _0x4bbe89=_0x179114;if(!VisuMZ[_0x4bbe89(0x23c)][_0x4bbe89(0x180)]['General'][_0x4bbe89(0x33e)+_0x4bbe89(0x213)])return!![];this[_0x4bbe89(0x1d1)+'e']()['elementRat'+'es']=this[_0x4bbe89(0x1d1)+'e']()[_0x4bbe89(0x1a6)+'es']||{};const _0x24401b=this['aiKnowledg'+'e']()['elementRat'+'es'];_0x24401b[_0x4e0655]=_0x24401b[_0x4e0655]||[];const _0xeedf98=_0x56b4d7[_0x4bbe89(0x2f2)]()?_0x56b4d7['actorId']():_0x56b4d7['enemyId']();return _0x24401b[_0x4e0655][_0x4bbe89(0x23b)](_0xeedf98);},VisuMZ[_0x179114(0x23c)][_0x179114(0x328)+_0x179114(0x400)]=Game_Troop[_0x179114(0x2aa)][_0x179114(0x3a4)],Game_Troop[_0x179114(0x2aa)][_0x179114(0x3a4)]=function(_0x1e780a){const _0xc11052=_0x179114;VisuMZ[_0xc11052(0x23c)][_0xc11052(0x328)+_0xc11052(0x400)][_0xc11052(0x2a3)](this,_0x1e780a),this[_0xc11052(0x21a)+'wledge']();};