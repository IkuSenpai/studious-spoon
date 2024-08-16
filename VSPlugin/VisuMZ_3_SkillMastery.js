//=============================================================================
// VisuStella MZ - Skill Mastery
// VisuMZ_3_SkillMastery.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_SkillMastery = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillMastery = VisuMZ.SkillMastery || {};
VisuMZ.SkillMastery.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.01] [SkillMastery]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skill_Mastery_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * With this plugin, a Skill Mastery mechanic is put into play where when an
 * actor or enemy uses a skill enough times, it can gain mastery levels. With
 * increased mastery levels, damage/healing can increase, costs can be changed,
 * cooldown turns, state turns, buff turns, and debuff turns can also be
 * adjusted based on mastery levels.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actors and enemies that use skills enough times can raise their mastery
 *   levels to become more powerful.
 * * Mastery effects include damage/healing amplification, cost reduction or
 *   increases, changes to cooldown turns, changes to buff/debuff turns, and/or
 *   changes to state turns.
 * * Customize these changes individually per skill through notetags.
 * * Adjust the amount of Skill Mastery EXP needed through a formula in the
 *   Plugin Parameters.
 * * Setup a variable to automatically record the skill mastery level of the
 *   last used skill in battle or in the skill menu.
 * * Plugin Commands allow you to manually adjust the gain of levels and skill
 *   mastery EXP.
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
 * * VisuMZ_1_SkillsStatesCore
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_3_VisualGaugeStyles
 *
 * If VisuStella MZ's Visual Gauge Styles is also installed, you can change the
 * way the Skill Mastery EXP gauge appears.
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
 * === Mastery-Related Notetags ===
 * 
 * ---
 *
 * <Max Skill Mastery Level: x>
 *
 * - Used for: Skill Notetags
 * - Sets the maximum skill mastery level for this skill to 'x'.
 * - Replace 'x' with a number representing the max skill mastery level.
 * - If this notetag is not used, refer to the default max level found in the
 *   Plugin Parameters.
 *
 * ---
 *
 * <JS Skill Mastery EXP>
 *  code
 *  code
 *  exp = code;
 * </JS Skill Mastery EXP>
 *
 * - Used for: Skill Notetags
 * - Create a custom skill mastery EXP formula for this skill.
 * - The variable 'user' refers to user of the skill.
 * - The variable 'targetLevel' refers to the target level whose EXP is being
 *   calculated for.
 * - The variable 'exp' is returned and determines how much EXP is needed to
 *   achieve the target level.
 *
 * ---
 *
 * <Starting Skill Masteries>
 *  Skill id: level
 *  Skill id: level, exp
 *  name: level
 *  name: level, exp
 * </Starting Skill Masteries>
 *
 * - Used for: Actor, Enemy Notetags
 * - Allows you to adjust the starting skill mastery levels for actors and
 *   enemies. Initialized actors will also reset their mastery levels to these
 *   values.
 * - Replace 'id' with a number presenting the ID of the skill to set the
 *   mastery level for.
 * - Replace 'name' with the name of the skill to set the mastery level for.
 * - Replace 'level' with a number representing the starting mastery level.
 * - Replace 'exp' with a number representing the current mastery level EXP.
 *
 * ---
 * 
 * === Mastery Effect-Related Notetags ===
 * 
 * ---
 *
 * <Mastery Effect: +x HP Cost Per Level>
 * <Mastery Effect: -x HP Cost Per Level>
 *
 * <Mastery Effect: +x% HP Cost Per Level>
 * <Mastery Effect: -x% HP Cost Per Level>
 *
 * <Mastery Effect: +x MP Cost Per Level>
 * <Mastery Effect: -x MP Cost Per Level>
 *
 * <Mastery Effect: +x% MP Cost Per Level>
 * <Mastery Effect: -x% MP Cost Per Level>
 *
 * <Mastery Effect: +x TP Cost Per Level>
 * <Mastery Effect: -x TP Cost Per Level>
 *
 * <Mastery Effect: +x% TP Cost Per Level>
 * <Mastery Effect: -x% TP Cost Per Level>
 *
 * - Used for: Skill Notetags
 * - Alters the HP, MP, and/or TP costs of the skill per mastery level.
 * - Replace 'x' with a number representing either a flat change or percentile
 *   change in skill cost.
 * - Skill costs cannot be altered unless the base cost is at least above 0.
 * - Depending on the Plugin Parameter settings, skill costs cannot reach 0.
 * - If these notetags are not used, refer to the default settings found in
 *   the Plugin Parameters.
 *
 * ---
 *
 * <Mastery Effect: +x Damage Per Level>
 * <Mastery Effect: -x Damage Per Level>
 * 
 * <Mastery Effect: +x% Damage Per Level>
 * <Mastery Effect: -x% Damage Per Level>
 *
 * <Mastery Effect: +x Healing Per Level>
 * <Mastery Effect: -x Healing Per Level>
 * 
 * <Mastery Effect: +x% Healing Per Level>
 * <Mastery Effect: -x% Healing Per Level>
 *
 * - Used for: Skill Notetags
 * - Alters the damage/healing of the skill per mastery level.
 * - Replace 'x' with a number representing either a flat change or percentile
 *   change in damage/healing.
 * - If these notetags are not used, refer to the default settings found in
 *   the Plugin Parameters.
 *
 * ---
 *
 * <Mastery Effect: +x Cooldown Turns Per Level>
 * <Mastery Effect: -x Cooldown Turns Per Level>
 *
 * <Mastery Effect: +x Buff Turns Per Level>
 * <Mastery Effect: -x Buff Turns Per Level>
 *
 * <Mastery Effect: +x Debuff Turns Per Level>
 * <Mastery Effect: -x Debuff Turns Per Level>
 *
 * <Mastery Effect: +x State Turns Per Level>
 * <Mastery Effect: -x State Turns Per Level>
 *
 * - Used for: Skill Notetags
 * - Alters the cooldown, buff, debuff, or state turns of the skill per
 *   mastery level.
 * - Replace 'x' with a number representing either the turn change.
 * - Depending on the Plugin Parameters, cooldowns may or may not be able
 *   to reach zero due to this effect.
 * - Buffs, debuffs, and state turns are able to reach zero values because they
 *   can still hold an effect at zero turns.
 * - If these notetags are not used, refer to the default settings found in
 *   the Plugin Parameters.
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
 * Actor: Gain Skill Mastery / EXP
 * - Target actor(s) gain Skill Mastery and/or EXP.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Skill ID:
 *   - What is the ID of the skill to adjust?
 *
 *     Level:
 *     - Gains this many mastery levels for the skill.
 *
 *     EXP:
 *     - Gains this much exp of the mastery level.
 *
 * ---
 *
 * Actor: Set Skill Mastery / EXP
 * - Sets the Skill Mastery level and EXP for target actor(s).
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Skill ID:
 *   - What is the ID of the skill to adjust?
 *
 *     Level:
 *     - Sets the mastery level of the skill.
 *
 *     EXP:
 *     - Sets the exp of the current mastery level.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Gain Skill Mastery / EXP
 * - Target enemy(ies) gain Skill Mastery and/or EXP.
 *
 *   Enemy Index(es):
 *   - Select which Enemy Index(es) to affect.
 *   - Index values start at 0.
 *
 *   Skill ID:
 *   - What is the ID of the skill to adjust?
 *
 *     Level:
 *     - Gains this many mastery levels for the skill.
 *
 *     EXP:
 *     - Gains this much exp of the mastery level.
 *
 * ---
 *
 * Enemy: Set Skill Mastery / EXP
 * - Sets the Skill Mastery level and EXP for target enemy(ies).
 *
 *   Enemy Index(es):
 *   - Select which Enemy Index(es) to affect.
 *   - Index values start at 0.
 *
 *   Skill ID:
 *   - What is the ID of the skill to adjust?
 *
 *     Level:
 *     - Sets the mastery level of the skill.
 *
 *     EXP:
 *     - Sets the exp of the current mastery level.
 *
 * ---
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * The following are Script Calls that can be used with this plugin. These are
 * made for JavaScript proficient users. We are not responsible if you use them
 * incorrectly or for unintended usage.
 *
 * ---
 * 
 * === Data Retrieval-Related Script Calls ===
 * 
 * ---
 *
 * $actorSkillMasteryLevel(actorID, skillID)
 * $actorSkillMasteryExp(actorID, skillID)
 * 
 * - These will return a numeric value detailing the level/exp of the actor
 *   being specified.
 * - Replace 'actorID' with a number representing the ID of the actor to look
 *   up the skill mastery level or exp of.
 * - Replace 'skillID' with a number representing the ID of the skill to look
 *   up the skill mastery level or exp of.
 * - This will return a number value.
 * 
 *   Examples:
 * 
 *   $actorSkillMasteryLevel(6, 99)
 *   $actorSkillMasteryExp(7, 52)
 *
 * ---
 *
 * $enemySkillMasteryLevel(enemyIndex, skillID)
 * $enemySkillMasteryExp(enemyIndex, skillID)
 * 
 * - These will return a numeric value detailing the level/exp of the enemy
 *   being specified.
 * - Replace 'enemyIndex' with a number representing the index position of the
 *   enemy to look up the skill mastery level or exp of.
 *   - Index values for enemy troops typically range from 0 to 7, with 0 being
 *     the first enemy inserted into a troop.
 * - Replace 'skillID' with a number representing the ID of the skill to look
 *   up the skill mastery level or exp of.
 * - This will return a number value.
 * 
 *   Examples:
 * 
 *   $enemySkillMasteryLevel(0, 99)
 *   $enemySkillMasteryLevel(2, 52)
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Adjust the general settings involving this plugin including mechanics and
 * default mastery effect values.
 *
 * ---
 *
 * Auto
 * 
 *   Variable: Skill Level:
 *   - Select a variable ID to automatically record the last used skill's
 *     mastery level.
 *   - 0 to not use.
 * 
 * ---
 * 
 * Defaults
 * 
 *   EXP Formula:
 *   - Default formula used to calculate needed EXP.
 *   - Return: exp.
 *   - Variables: user, skill, targetLevel.
 * 
 *   Max Level:
 *   - Default max level for skill masteries.
 * 
 * ---
 * 
 * Defaults > Effects Per Level
 * 
 *   HP Cost:
 *   HP% Cost:
 *   MP Cost:
 *   MP% Cost:
 *   TP Cost:
 *   TP% Cost:
 *   Damage/Heal:
 *   Damage/Heal%:
 *   Cooldown Turns:
 *   Buff Turns:
 *   Debuff Turns:
 *   State Turns:
 *   - Default mastery effect bonus per level.
 *
 * ---
 *
 * Prevent EXP Gain
 * 
 *   Basic Attack?:
 *   - Prevent EXP gain for basic attacks?
 * 
 *   Basic Guard?:
 *   - Prevent EXP gain for basic guarding?
 *
 * ---
 *
 * Prevent Effects
 * 
 *   Costs to Zero?:
 *   - Prevent costs from reaching zero?
 * 
 *   Cooldowns to Zero?:
 *   - Prevent cooldowns from reaching zero?
 * 
 * ---
 * 
 * Display
 * 
 *   Name Format:
 *   - Change how skill names appear with mastery levels.
 *   - %1 - Skill Name, %2 - Mastery Level.
 * 
 *   Max Gauge Width:
 *   - Gauge widths adjust to the window size but there is a maximum gauge
 *     width amount.
 * 
 *   Gauge Color 1:
 *   Gauge Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Gauge Style:
 *   - Select the gauge style to use for skill mastery EXP.
 *   - Requires VisuMZ_3_VisualGaugeStyles!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Level Up Effect Settings
 * ============================================================================
 *
 * These settings let you adjust the in-battle mastery level up effects used
 * for this plugin.
 *
 * ---
 *
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *
 * ---
 *
 * Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
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
 * Plugin Parameters: Level Up Sound Settings
 * ============================================================================
 *
 * These settings let you adjust the sound effects used for this plugin.
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
 * Version 1.01: July 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New script calls added by Arisu:
 * *** $actorSkillMasteryLevel(actorID, skillID)
 * *** $actorSkillMasteryExp(actorID, skillID)
 * *** $enemySkillMasteryLevel(enemyIndex, skillID)
 * *** $enemySkillMasteryExp(enemyIndex, skillID)
 * **** Please refer to the help file on how to use these script calls.
 * 
 * Version 1.00 Official Release Date: June 28, 2023
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
 * @command ActorGainSkillMasteryExp
 * @text Actor: Gain Skill Mastery / EXP
 * @desc Target actor(s) gain Skill Mastery and/or EXP.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to adjust?
 * @default 0
 *
 * @arg Level:eval
 * @text Level
 * @parent SkillID:num
 * @type number
 * @desc Gains this many mastery levels for the skill.
 * @default 0
 *
 * @arg Exp:eval
 * @text EXP
 * @parent SkillID:num
 * @type number
 * @desc Gains this much exp of the mastery level.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorSetSkillMasteryExp
 * @text Actor: Set Skill Mastery / EXP
 * @desc Sets the Skill Mastery level and EXP for target actor(s).
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to adjust?
 * @default 0
 *
 * @arg Level:eval
 * @text Level
 * @parent SkillID:num
 * @type number
 * @desc Sets the mastery level of the skill.
 * @default 0
 *
 * @arg Exp:eval
 * @text EXP
 * @parent SkillID:num
 * @type number
 * @desc Sets the exp of the current mastery level.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Enemy
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyGainSkillMasteryExp
 * @text Enemy: Gain Skill Mastery / EXP
 * @desc Target enemy(ies) gain Skill Mastery and/or EXP.
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actor[]
 * @desc Select which Enemy Index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to adjust?
 * @default 0
 *
 * @arg Level:eval
 * @text Level
 * @parent SkillID:num
 * @type number
 * @desc Gains this many mastery levels for the skill.
 * @default 0
 *
 * @arg Exp:eval
 * @text EXP
 * @parent SkillID:num
 * @type number
 * @desc Gains this much exp of the mastery level.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemySetSkillMasteryExp
 * @text Enemy: Set Skill Mastery / EXP
 * @desc Sets the Skill Mastery level and EXP for target enemy(ies).
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actor[]
 * @desc Select which Enemy Index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to adjust?
 * @default 0
 *
 * @arg Level:eval
 * @text Level
 * @parent SkillID:num
 * @type number
 * @desc Sets the mastery level of the skill.
 * @default 0
 *
 * @arg Exp:eval
 * @text EXP
 * @parent SkillID:num
 * @type number
 * @desc Sets the exp of the current mastery level.
 * @default 0
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
 * @param SkillMastery
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
 * @desc Adjust the general settings involving this plugin including mechanics and default values.
 * @default {"Auto":"","AutoVariableID:num":"0","Defaults":"","DefaultExpFormula:json":"\"exp = targetLevel * 3\"","DefaultMaxLevel:num":"99","DefaultEffects":"","hpCostFlat:num":"-0","hpCostRate:num":"-0.10","mpCostFlat:num":"-0","mpCostRate:num":"-0.10","tpCostFlat:num":"-0","tpCostRate:num":"-0.10","dmgFlat:num":"+0","dmgRate:num":"+0.20","cooldown:num":"-1","buffTurn:num":"+1","debuffTurn:num":"+1","stateTurn:num":"+1","PreventExp":"","preventExpForAttack:eval":"true","preventExpForGuard:eval":"true","PreventEffect":"","preventCostModToZero:eval":"true","preventCooldownModToZero:eval":"true","Display":"","masteryFmt:str":"Lv%2 %1","maxGaugeWidth:num":"384","gaugeColor1:str":"12","gaugeColor2:str":"4","gaugeStyle:str":"Growth"}
 *
 * @param Effect:struct
 * @text Level Up Effect Settings
 * @type struct<Effect>
 * @desc These settings let you adjust the in-battle mastery level up effects used for this plugin.
 * @default {"Animation":"","AnimationID:num":"45","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"SKILL MASTERY UP!","TextColor:str":"6","FlashColor:eval":"[255, 255, 0, 160]","FlashDuration:num":"600"}
 *
 * @param Sound:struct
 * @text Level Up Sound Settings
 * @type struct<Sound>
 * @desc These settings let you adjust the sound effects used for this plugin.
 * @default {"name:str":"Barrier","volume:num":"90","pitch:num":"120","pan:num":"0"}
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
 * @param Auto
 *
 * @param AutoVariableID:num
 * @text Variable: Skill Level
 * @parent Auto
 * @type variable
 * @desc Select a variable ID to automatically record the last
 * used skill's mastery level. 0 to not use.
 * @default 0
 * 
 * @param Defaults
 * 
 * @param DefaultExpFormula:json
 * @text EXP Formula
 * @type note
 * @parent Defaults
 * @desc Default formula used to calculate needed EXP.
 * Return: exp. Variables: user, skill, targetLevel.
 * @default "exp = targetLevel * 3"
 *
 * @param DefaultMaxLevel:num
 * @text Max Level
 * @parent Defaults
 * @desc Default max level for skill masteries.
 * @default 99
 * 
 * @param DefaultEffects
 * @text Effects Per Level
 * @parent Defaults
 *
 * @param hpCostFlat:num
 * @text HP Cost
 * @parent DefaultEffects
 * @desc Default flat HP Cost bonus per level.
 * @default -0
 *
 * @param hpCostRate:num
 * @text HP% Cost
 * @parent DefaultEffects
 * @desc Default HP Cost rate bonus per level.
 * @default -0.10
 *
 * @param mpCostFlat:num
 * @text MP Cost
 * @parent DefaultEffects
 * @desc Default flat MP Cost bonus per level.
 * @default -0
 *
 * @param mpCostRate:num
 * @text MP% Cost
 * @parent DefaultEffects
 * @desc Default MP Cost rate bonus per level.
 * @default -0.10
 *
 * @param tpCostFlat:num
 * @text TP Cost
 * @parent DefaultEffects
 * @desc Default flat TP Cost bonus per level.
 * @default -0
 *
 * @param tpCostRate:num
 * @text TP% Cost
 * @parent DefaultEffects
 * @desc Default TP Cost rate bonus per level.
 * @default -0.10
 *
 * @param dmgFlat:num
 * @text Damage/Heal
 * @parent DefaultEffects
 * @desc Default flat damage/heal bonus per level.
 * @default +0
 *
 * @param dmgRate:num
 * @text Damage/Heal%
 * @parent DefaultEffects
 * @desc Default damage/heal rate bonus per level.
 * @default +0.20
 *
 * @param cooldown:num
 * @text Cooldown Turns
 * @parent DefaultEffects
 * @desc Default cooldown turn bonus per level.
 * @default -1
 *
 * @param buffTurn:num
 * @text Buff Turns
 * @parent DefaultEffects
 * @desc Default buff turn bonus per level.
 * @default +1
 *
 * @param debuffTurn:num
 * @text Debuff Turns
 * @parent DefaultEffects
 * @desc Default debuff turn bonus per level.
 * @default +1
 *
 * @param stateTurn:num
 * @text State Turns
 * @parent DefaultEffects
 * @desc Default state turn bonus per level.
 * @default +1
 *
 * @param PreventExp
 * @text Prevent EXP Gain
 *
 * @param preventExpForAttack:eval
 * @text Basic Attack?
 * @parent PreventExp
 * @type boolean
 * @on Prevent
 * @off Allow
 * @desc Prevent EXP gain for basic attacks?
 * @default true
 *
 * @param preventExpForGuard:eval
 * @text Basic Guard?
 * @parent PreventExp
 * @type boolean
 * @on Prevent
 * @off Allow
 * @desc Prevent EXP gain for basic guarding?
 * @default true
 * 
 * @param PreventEffect
 * @text Prevent Effects
 *
 * @param preventCostModToZero:eval
 * @text Costs to Zero?
 * @parent PreventEffect
 * @type boolean
 * @on Prevent
 * @off Allow
 * @desc Prevent costs from reaching zero?
 * @default true
 *
 * @param preventCooldownModToZero:eval
 * @text Cooldowns to Zero?
 * @parent PreventEffect
 * @type boolean
 * @on Prevent
 * @off Allow
 * @desc Prevent cooldowns from reaching zero?
 * @default true
 * 
 * @param Display
 * @text Visual Display
 *
 * @param masteryFmt:str
 * @text Name Format
 * @parent Display
 * @desc Change how skill names appear with mastery levels.
 * %1 - Skill Name, %2 - Mastery Level.
 * @default Lv%2 %1
 *
 * @param maxGaugeWidth:num
 * @text Max Gauge Width
 * @parent Display
 * @desc Gauge widths adjust to the window size but there is
 * a maximum gauge width amount.
 * @default 384
 *
 * @param gaugeColor1:str
 * @text Gauge Color 1
 * @parent Display
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 12
 *
 * @param gaugeColor2:str
 * @text Gauge Color 2
 * @parent Display
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 4
 * 
 * @param gaugeStyle:str
 * @text Gauge Style
 * @parent Display
 * @type select
 * @option -
 * @option Normal
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for skill mastery EXP.
 * Requires VisuMZ_3_VisualGaugeStyles!
 * @default Growth
 *
 */
/* ----------------------------------------------------------------------------
 * Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Effect:
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * @default 45
 *
 * @param Mirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * @default false
 *
 * @param Mute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * @default false
 *
 * @param Popups
 *
 * @param PopupText:str
 * @text Text
 * @parent Popups
 * @desc Text displayed upon the effect activating.
 * @default SKILL MASTERY UP!
 *
 * @param TextColor:str
 * @text Text Color
 * @parent Popups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 0, 160]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent Popups
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 600
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
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Barrier
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
 * @default 120
 *
 * @param pan:num
 * @text Pan
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
//=============================================================================

function _0x4124(_0x523721,_0x2cd239){const _0x3ffbaf=_0x3ffb();return _0x4124=function(_0x4124ff,_0x39f6be){_0x4124ff=_0x4124ff-0x86;let _0xd966bd=_0x3ffbaf[_0x4124ff];return _0xd966bd;},_0x4124(_0x523721,_0x2cd239);}const _0x476ca3=_0x4124;function _0x3ffb(){const _0x41ad9a=['BattleManager_startAction','Game_Action_applyVariance','_skillMasteryLevelEffectData','subject','PKEnv','xkEPs','AnimationID','Buffs','VisuMZ_0_CoreEngine','oMIWl','ARRAYNUM','BattleManager_endAction','add','xrRzX','getStateReapplyRulings','registerCommand','VisuMZ_3_VisualGaugeStyles','bznFS','gaugeStyle','setValue','bcALo','uLvpH','General','264XnLJLU','RegExp','fhZoK','Game_BattlerBase_overwriteBuffTurns','exit','drawSkillMastery','PZGgO','skillMasteryLevelEffectData','20620jVYpsn','costChangePerLevelFlat','item','targetVariableID','resetStateCounts','DefaultFormula','push','toUpperCase','PJkoj','ActorGainSkillMasteryExp','ARRAYSTRUCT','_buffTurns','bswHf','VisuMZ_1_SkillsStatesCore','startAction','WbqWq','\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Arguments\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20targetLevel\x20=\x20arguments[2];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20user;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20user;\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20exp\x20=\x201000000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Exp\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20exp;\x0a\x20\x20\x20\x20','maxTurns','hpCostRate','yvURy','AbKhC','gainSkillMasteryExp','Lv%2\x20%1','EnemyIndex','dmgFlat','clamp','mpCostFlat','lineHeight','checkSkillMasteryLevelUp','map','reset','JSON','_skillMasteryLevels','FUNC','Window_Base_drawItemName','minTurns','ChangeSkillName','ReapplyRules','debuffTurn','guardSkillId','playSkillMasteryLevelUp','EVAL','greater','_masterySubject','ARRAYFUNC','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Settings','VisualGaugeStyles','addEquipBattleSkillsMarkers','isPlaytest','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','in\x20order\x20for\x20VisuMZ_3_SkillMastery\x20to\x20work.','toLowerCase','gaugeColor2','useItem','return\x200','buffTurn','preventExpForAttack','bmwrI','attackSkillId','setup','9fYPxyX','_skillMasteryExp','preventCostModToZero','initMembers','oTtgQ','exp\x20=\x20targetLevel\x20*\x203','version','1GuTFPX','_maxValueSegment','gvTGP','description','expFormula','drawVisualStyleGauge','skillMasteryMaxLevel','PopupText','45eapHNn','parse','Game_BattlerBase_resetStateCounts','actor','constructor','call','ActorSetSkillMasteryExp','skillMasteryLevelFormula','setSkillMasteryExp','custom','log','TextColor','hpCostFlat','SkillsStatesCore','skillMasteryExp','gaugeColor1','Window_Base_drawEquipBattleSkillName','vompE','_actor','members','_skillMasteryLevelFormula','GetGaugeHeight','cooldown','linza','VoLhv','ySWzc','setupStartingSkillMasteries','eIMOl','Level','displaySkillMasteryLevelUpEffect','OwIYJ','status','AutoVariableID','1606955jnyvOe','NUM','prototype','FlashDuration','DefaultMaxLevel','dceSg','dmgChangePerLevelFlat','_action','PXQYf','Window_EquipBattleSkillList_addEquipBattleSkillsMarkers','stateTurn','tpCostFlat','isBuffAffected','playSe','skillMasteryLevel','isActor','maxLevel','_scene','11OyDNvI','split','getColor','lkkyW','tpCostRate','BattleManager_setup','Mirror','max','drawItemName','296468uxryyy','volume','Exp','currentAction','ConvertParams','EnemySetSkillMasteryExp','updateSkillMasteryVariable','endActionSkillMastery','kwkIV','ARRAYJSON','MaxTurns','setupTextPopup','SKILL_MASTERY','_skillMasteryMaxLevel','Game_BattlerBase_initMembers','canApplySkillMasteryEffect','Game_BattlerBase_adjustSkillCost','dmgRate','randomInt','iconWidth','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','inBattle','_originalNamePreMastery','Qvugw','costChangePerLevelRate','startActionSkillMastery','preventExpForGuard','583460moWUfH','SkillMastery','getSkillIdWithName','VisuMZ_1_BattleCore','endAction','remove','mpCostRate','isDebuffAffected','drawEquipBattleSkillName','FjjsH','costRate','format','costFlat','ActorIDs','gMgiZ','ARRAYSTR','skillMasteryExpNeeded','trim','debuffTurnChangePerLevel','match','masteryFmt','STR','Game_Battler_useItem','ttoXd','isSceneBattle','maxGaugeWidth','gOSFK','pitch','Effect','Game_Actor_setup','29215CfRjTu','adjustSkillCost','KkMVK','SkillID','action','pWHuX','Sound','gaugeBackColor','isSkill','initSkillMasteries','cooldownChangePerLevel','IpDGz','includes','note','enemy','buffTurnChangePerLevel','Game_Enemy_setup','_masterySkill','name','276852EpLGVR','_subject','FtHup','143224akvtxp','setSkillMasteryLevel','applyMasteryEffectCooldownTurns','_stateTurns','applyVariance','GMMpO','startMasteries','mpsJH','dmgChangePerLevelRate'];_0x3ffb=function(){return _0x41ad9a;};return _0x3ffb();}(function(_0x66b946,_0x16b544){const _0x316b83=_0x4124,_0x89a2f1=_0x66b946();while(!![]){try{const _0x147e84=-parseInt(_0x316b83(0x158))/0x1*(parseInt(_0x316b83(0x114))/0x2)+parseInt(_0x316b83(0x151))/0x3*(-parseInt(_0x316b83(0x9d))/0x4)+-parseInt(_0x316b83(0xd6))/0x5*(-parseInt(_0x316b83(0x10c))/0x6)+parseInt(_0x316b83(0x181))/0x7+parseInt(_0x316b83(0xec))/0x8*(-parseInt(_0x316b83(0x160))/0x9)+-parseInt(_0x316b83(0xb8))/0xa+parseInt(_0x316b83(0x94))/0xb*(parseInt(_0x316b83(0xe9))/0xc);if(_0x147e84===_0x16b544)break;else _0x89a2f1['push'](_0x89a2f1['shift']());}catch(_0x449b82){_0x89a2f1['push'](_0x89a2f1['shift']());}}}(_0x3ffb,0x1f8b6));var label=_0x476ca3(0xb9),tier=tier||0x0,dependencies=[_0x476ca3(0xfd),_0x476ca3(0x121)],pluginData=$plugins['filter'](function(_0x274fbc){const _0x1da466=_0x476ca3;return _0x274fbc[_0x1da466(0x17f)]&&_0x274fbc[_0x1da466(0x15b)][_0x1da466(0xe2)]('['+label+']');})[0x0];VisuMZ[label][_0x476ca3(0x142)]=VisuMZ[label][_0x476ca3(0x142)]||{},VisuMZ[_0x476ca3(0xa1)]=function(_0x22382e,_0x3288ba){const _0x1cceb0=_0x476ca3;for(const _0x59eb3e in _0x3288ba){if(_0x59eb3e[_0x1cceb0(0xcb)](/(.*):(.*)/i)){if(_0x1cceb0(0x112)===_0x1cceb0(0x10e)){const _0x399a5e=_0x12d904[_0x1cceb0(0xa9)]['allowCostModToZero']?0x0:0x1;_0x577c29=_0x1ebb8b[_0x1cceb0(0x9b)](_0x4571af['floor'](_0x33b258),_0x399a5e);}else{const _0x153a82=String(RegExp['$1']),_0x118808=String(RegExp['$2'])['toUpperCase']()[_0x1cceb0(0xc9)]();let _0x3acff8,_0x178df2,_0x25fc45;switch(_0x118808){case _0x1cceb0(0x182):_0x3acff8=_0x3288ba[_0x59eb3e]!==''?Number(_0x3288ba[_0x59eb3e]):0x0;break;case _0x1cceb0(0xff):_0x178df2=_0x3288ba[_0x59eb3e]!==''?JSON[_0x1cceb0(0x161)](_0x3288ba[_0x59eb3e]):[],_0x3acff8=_0x178df2['map'](_0x491596=>Number(_0x491596));break;case _0x1cceb0(0x13d):_0x3acff8=_0x3288ba[_0x59eb3e]!==''?eval(_0x3288ba[_0x59eb3e]):null;break;case'ARRAYEVAL':_0x178df2=_0x3288ba[_0x59eb3e]!==''?JSON['parse'](_0x3288ba[_0x59eb3e]):[],_0x3acff8=_0x178df2[_0x1cceb0(0x131)](_0x2ea4e9=>eval(_0x2ea4e9));break;case _0x1cceb0(0x133):_0x3acff8=_0x3288ba[_0x59eb3e]!==''?JSON[_0x1cceb0(0x161)](_0x3288ba[_0x59eb3e]):'';break;case _0x1cceb0(0xa6):_0x178df2=_0x3288ba[_0x59eb3e]!==''?JSON[_0x1cceb0(0x161)](_0x3288ba[_0x59eb3e]):[],_0x3acff8=_0x178df2[_0x1cceb0(0x131)](_0x1b456c=>JSON[_0x1cceb0(0x161)](_0x1b456c));break;case _0x1cceb0(0x135):_0x3acff8=_0x3288ba[_0x59eb3e]!==''?new Function(JSON[_0x1cceb0(0x161)](_0x3288ba[_0x59eb3e])):new Function(_0x1cceb0(0x14b));break;case _0x1cceb0(0x140):_0x178df2=_0x3288ba[_0x59eb3e]!==''?JSON[_0x1cceb0(0x161)](_0x3288ba[_0x59eb3e]):[],_0x3acff8=_0x178df2['map'](_0x46a756=>new Function(JSON['parse'](_0x46a756)));break;case _0x1cceb0(0xcd):_0x3acff8=_0x3288ba[_0x59eb3e]!==''?String(_0x3288ba[_0x59eb3e]):'';break;case _0x1cceb0(0xc7):_0x178df2=_0x3288ba[_0x59eb3e]!==''?JSON[_0x1cceb0(0x161)](_0x3288ba[_0x59eb3e]):[],_0x3acff8=_0x178df2[_0x1cceb0(0x131)](_0x2bd88b=>String(_0x2bd88b));break;case'STRUCT':_0x25fc45=_0x3288ba[_0x59eb3e]!==''?JSON['parse'](_0x3288ba[_0x59eb3e]):{},_0x3acff8=VisuMZ[_0x1cceb0(0xa1)]({},_0x25fc45);break;case _0x1cceb0(0x11e):_0x178df2=_0x3288ba[_0x59eb3e]!==''?JSON[_0x1cceb0(0x161)](_0x3288ba[_0x59eb3e]):[],_0x3acff8=_0x178df2[_0x1cceb0(0x131)](_0x1c6287=>VisuMZ[_0x1cceb0(0xa1)]({},JSON[_0x1cceb0(0x161)](_0x1c6287)));break;default:continue;}_0x22382e[_0x153a82]=_0x3acff8;}}}return _0x22382e;},(_0x35e92d=>{const _0x580488=_0x476ca3,_0x1c91b1=_0x35e92d[_0x580488(0xe8)];for(const _0x461d6f of dependencies){if(!Imported[_0x461d6f]){if(_0x580488(0xf9)===_0x580488(0xf9)){alert(_0x580488(0x141)[_0x580488(0xc3)](_0x1c91b1,_0x461d6f)),SceneManager[_0x580488(0x110)]();break;}else{_0x22cce2[_0x580488(0xcb)](_0xf964a5[_0x580488(0xf4)]);const _0x126adc=_0x3bb198(_0x151e22['$1'])*0.01;this[_0x580488(0xf7)][_0x5ee38e][_0x580488(0xae)]=_0x126adc;}}}const _0x1c7462=_0x35e92d[_0x580488(0x15b)];if(_0x1c7462[_0x580488(0xcb)](/\[Version[ ](.*?)\]/i)){const _0x1c34ab=Number(RegExp['$1']);_0x1c34ab!==VisuMZ[label][_0x580488(0x157)]&&(alert(_0x580488(0xb1)[_0x580488(0xc3)](_0x1c91b1,_0x1c34ab)),SceneManager['exit']());}if(_0x1c7462[_0x580488(0xcb)](/\[Tier[ ](\d+)\]/i)){const _0x4279cc=Number(RegExp['$1']);_0x4279cc<tier?_0x580488(0xfe)!==_0x580488(0x97)?(alert(_0x580488(0x146)[_0x580488(0xc3)](_0x1c91b1,_0x4279cc,tier)),SceneManager[_0x580488(0x110)]()):(_0x1a780f[_0x580488(0xed)](_0x214662,_0x3d054b),_0x458318[_0x580488(0x168)](_0x3ea970,_0x5e8c2c,!![])):tier=Math[_0x580488(0x9b)](_0x4279cc,tier);}VisuMZ[_0x580488(0xa1)](VisuMZ[label][_0x580488(0x142)],_0x35e92d['parameters']);})(pluginData);if(VisuMZ['SkillsStatesCore'][_0x476ca3(0x157)]<1.38){let text='';text+='VisuMZ_1_SkillsStatesCore\x20needs\x20to\x20be\x20updated\x20',text+=_0x476ca3(0x147),alert(text),SceneManager['exit']();}PluginManager['registerCommand'](pluginData[_0x476ca3(0xe8)],_0x476ca3(0x11d),_0x23b6a0=>{const _0x53078c=_0x476ca3;VisuMZ[_0x53078c(0xa1)](_0x23b6a0,_0x23b6a0);const _0x2c6dfd=_0x23b6a0[_0x53078c(0xc5)][_0x53078c(0x131)](_0x191b10=>$gameActors[_0x53078c(0x163)](_0x191b10))[_0x53078c(0xbd)](null)[_0x53078c(0xbd)](undefined),_0x457f52=_0x23b6a0[_0x53078c(0xd9)]||0x0,_0x1b052a=_0x23b6a0[_0x53078c(0x17c)]||0x0,_0x390192=_0x23b6a0[_0x53078c(0x9f)]||0x0;for(const _0x391b96 of _0x2c6dfd){const _0x3ce160=_0x391b96[_0x53078c(0x90)](_0x457f52);_0x391b96[_0x53078c(0xed)](_0x457f52,_0x3ce160+_0x1b052a);const _0x4f048f=_0x391b96[_0x53078c(0x16e)](_0x457f52);_0x391b96[_0x53078c(0x168)](_0x457f52,_0x4f048f+_0x390192,!![]);}}),PluginManager[_0x476ca3(0x104)](pluginData[_0x476ca3(0xe8)],_0x476ca3(0x166),_0x376c70=>{const _0x45e553=_0x476ca3;VisuMZ[_0x45e553(0xa1)](_0x376c70,_0x376c70);const _0x49c952=_0x376c70[_0x45e553(0xc5)][_0x45e553(0x131)](_0x11b38d=>$gameActors[_0x45e553(0x163)](_0x11b38d))[_0x45e553(0xbd)](null)[_0x45e553(0xbd)](undefined),_0xb16c3c=_0x376c70['SkillID']||0x0,_0x2c2155=_0x376c70[_0x45e553(0x17c)]||0x0,_0x2178ec=_0x376c70[_0x45e553(0x9f)]||0x0;for(const _0x353900 of _0x49c952){if(_0x45e553(0x8a)===_0x45e553(0xcf)){const _0x26c5ea=_0x3707d3['SkillMastery'][_0x45e553(0x142)][_0x45e553(0xdc)],_0x4c4002={'name':_0x26c5ea[_0x45e553(0xe8)],'volume':_0x26c5ea[_0x45e553(0x9e)],'pitch':_0x26c5ea[_0x45e553(0xd3)],'pan':_0x26c5ea['pan']};_0xa7e820[_0x45e553(0x8f)](_0x4c4002);}else _0x353900[_0x45e553(0xed)](_0xb16c3c,_0x2c2155),_0x353900[_0x45e553(0x168)](_0xb16c3c,_0x2178ec,!![]);}}),PluginManager[_0x476ca3(0x104)](pluginData[_0x476ca3(0xe8)],'EnemyGainSkillMasteryExp',_0x4f4e99=>{const _0x49e112=_0x476ca3;VisuMZ[_0x49e112(0xa1)](_0x4f4e99,_0x4f4e99);const _0x402bd8=_0x4f4e99[_0x49e112(0x12b)][_0x49e112(0x131)](_0x25323f=>$gameTroop[_0x49e112(0x173)]()[_0x25323f])[_0x49e112(0xbd)](null)[_0x49e112(0xbd)](undefined),_0x7496ec=_0x4f4e99['SkillID']||0x0,_0x1808f0=_0x4f4e99[_0x49e112(0x17c)]||0x0,_0x250fbf=_0x4f4e99['Exp']||0x0;for(const _0x260578 of _0x402bd8){if(_0x49e112(0x109)==='bcALo'){const _0x16fadb=_0x260578['skillMasteryLevel'](_0x7496ec);_0x260578['setSkillMasteryLevel'](_0x7496ec,_0x16fadb+_0x1808f0);const _0x2426bf=_0x260578[_0x49e112(0x16e)](_0x7496ec);_0x260578[_0x49e112(0x168)](_0x7496ec,_0x2426bf+_0x250fbf,!![]);}else _0x575170[_0x49e112(0xb9)][_0x49e112(0xd5)][_0x49e112(0x165)](this,_0xfd12cf),this[_0x49e112(0x17a)]();}}),PluginManager[_0x476ca3(0x104)](pluginData[_0x476ca3(0xe8)],_0x476ca3(0xa2),_0xd613ae=>{const _0x287fca=_0x476ca3;VisuMZ[_0x287fca(0xa1)](_0xd613ae,_0xd613ae);const _0x47f84d=_0xd613ae[_0x287fca(0x12b)][_0x287fca(0x131)](_0x38ff4a=>$gameTroop['members']()[_0x38ff4a])[_0x287fca(0xbd)](null)[_0x287fca(0xbd)](undefined),_0x59f94f=_0xd613ae['SkillID']||0x0,_0x477b13=_0xd613ae[_0x287fca(0x17c)]||0x0,_0x4074b1=_0xd613ae[_0x287fca(0x9f)]||0x0;for(const _0x1abda3 of _0x47f84d){if(_0x287fca(0x17e)==='OwIYJ')_0x1abda3[_0x287fca(0xed)](_0x59f94f,_0x477b13),_0x1abda3[_0x287fca(0x168)](_0x59f94f,_0x4074b1,!![]);else{const _0x5d05a1=_0x363955[_0x287fca(0x167)](_0x5b4810);return _0x5d05a1['call'](this,this,_0x4a290d[_0x29e91a],_0x14ff3c);}}}),VisuMZ['SkillMastery'][_0x476ca3(0x10d)]={'expFormula':/<JS SKILL MASTERY EXP>\s*([\s\S]*?)\s*<\/JS SKILL MASTERY EXP>/i,'maxLevel':/<MAX SKILL MASTERY LEVEL:[ ](\d+)>/i,'costChangePerLevelFlat':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+) (.*) COST(?:| PER LEVEL)>/gi,'costChangePerLevelRate':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+)([%％]) (.*) COST(?:| PER LEVEL)>/gi,'dmgChangePerLevelFlat':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+) (?:DMG|DAMAGE|HEAL|HEALING)(?:| PER LEVEL)>/gi,'dmgChangePerLevelRate':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+)([%％]) (?:DMG|DAMAGE|HEAL|HEALING)(?:| PER LEVEL)>/gi,'cooldownChangePerLevel':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+) COOLDOWN(?:| TURN| TURNS)(?:| PER LEVEL)>/i,'buffTurnChangePerLevel':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+) BUFF(?:| TURN| TURNS)(?:| PER LEVEL)>/i,'debuffTurnChangePerLevel':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+) DEBUFF(?:| TURN| TURNS)(?:| PER LEVEL)>/i,'stateTurnChangePerLevel':/<MASTERY EFFECT(?:| PER LEVEL): ([\+\-]\d+) STATE(?:| TURN| TURNS)(?:| PER LEVEL)>/i,'startMasteries':/<STARTING SKILL MASTERIES>\s*([\s\S]*?)\s*<\/STARTING SKILL MASTERIES>/i},DataManager['skillMasteryLevelFormula']=function(_0x116a17){const _0x1a544d=_0x476ca3,_0x2ebbde=$dataSkills[_0x116a17];if(!_0x2ebbde)return VisuMZ[_0x1a544d(0xb9)][_0x1a544d(0x119)];this[_0x1a544d(0x174)]=this[_0x1a544d(0x174)]||{};if(this[_0x1a544d(0x174)][_0x116a17]!==undefined){if(_0x1a544d(0xc1)===_0x1a544d(0xf3)){const _0xcbbbfc=(_0x5a253c[_0x1a544d(0x143)][_0x1a544d(0x175)](_0x3d1448)??0xc)[_0x1a544d(0x12d)](0x1,0x20),_0xab0832=_0x3daa30+this[_0x1a544d(0x12f)]()-_0xcbbbfc-0x2,_0x4e5770=_0x3b1cf6[_0x1a544d(0xdd)]();_0x289160[_0x1a544d(0x143)]['_maxValueSegment']=this[_0x1a544d(0x172)][_0x1a544d(0xc8)](_0x3da36c['id'],_0x2d4e5d+0x1),this['contents'][_0x1a544d(0x15d)](_0xce2d3d,_0x559db4,_0xab0832,_0x46471e,_0xcbbbfc,_0x26370a,_0x4e5770,_0x2a1be2,_0x4d4531);}else return this[_0x1a544d(0x174)][_0x116a17];}let _0x3c533a=Game_BattlerBase[_0x1a544d(0xa9)]['expFormula'];const _0x5ea550=VisuMZ['SkillMastery'][_0x1a544d(0x10d)],_0x137dce=_0x2ebbde[_0x1a544d(0xe3)]||'';_0x137dce[_0x1a544d(0xcb)](_0x5ea550[_0x1a544d(0x15c)])&&(_0x3c533a=String(RegExp['$1']));const _0x51c2b1='\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Arguments\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20targetLevel\x20=\x20arguments[2];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20user;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20user;\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20exp\x20=\x201000000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Exp\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20exp;\x0a\x20\x20\x20\x20'['format'](_0x3c533a);return this[_0x1a544d(0x174)][_0x116a17]=new Function(_0x51c2b1),this[_0x1a544d(0x174)][_0x116a17];},VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x119)]=function(){const _0x1ed7d0=_0x476ca3,_0x46afd4=arguments[0x0],_0x300ea9=arguments[0x1],_0x30b690=arguments[0x2],_0x5b77c7=_0x46afd4,_0x466aee=_0x46afd4;let _0x20e5de=0xf4240;try{'xrRzX'===_0x1ed7d0(0x102)?_0x20e5de=_0x30b690*0x3:(this[_0x1ed7d0(0xf7)][_0x13e14f][_0x1ed7d0(0xc4)]['TP']=_0x281a71[_0x1ed7d0(0x8d)]??0x0,this[_0x1ed7d0(0xf7)][_0x442c56][_0x1ed7d0(0xc2)]['TP']=_0x3659fc[_0x1ed7d0(0x98)]??-0.1);}catch(_0x4dac23){if($gameTemp[_0x1ed7d0(0x145)]())console[_0x1ed7d0(0x16a)](_0x4dac23);}return _0x20e5de;},DataManager[_0x476ca3(0x15e)]=function(_0x3f72b7){const _0x47bc92=_0x476ca3,_0x40ba5d=$dataSkills[_0x3f72b7];if(!_0x40ba5d)return VisuMZ[_0x47bc92(0xb9)][_0x47bc92(0x119)];this[_0x47bc92(0xaa)]=this[_0x47bc92(0xaa)]||{};if(this['_skillMasteryMaxLevel'][_0x3f72b7]!==undefined)return this[_0x47bc92(0xaa)][_0x3f72b7];this['_skillMasteryMaxLevel'][_0x3f72b7]=Game_BattlerBase[_0x47bc92(0xa9)]['maxLevel'];const _0x980918=VisuMZ['SkillMastery'][_0x47bc92(0x10d)],_0x364b64=_0x40ba5d[_0x47bc92(0xe3)]||'';return _0x364b64[_0x47bc92(0xcb)](_0x980918[_0x47bc92(0x92)])&&(this['_skillMasteryMaxLevel'][_0x3f72b7]=Math[_0x47bc92(0x9b)](Number(RegExp['$1']),0x0)),this['_skillMasteryMaxLevel'][_0x3f72b7];},DataManager[_0x476ca3(0x113)]=function(_0xe88db6){const _0x31e2e5=_0x476ca3,_0x434e50=$dataSkills[_0xe88db6];if(!_0x434e50)return VisuMZ[_0x31e2e5(0xb9)][_0x31e2e5(0x119)];this[_0x31e2e5(0xf7)]=this['_skillMasteryLevelEffectData']||{};if(this[_0x31e2e5(0xf7)][_0xe88db6]!==undefined)return this[_0x31e2e5(0xf7)][_0xe88db6];const _0x53dc85=VisuMZ[_0x31e2e5(0xb9)][_0x31e2e5(0x142)]['General'];this[_0x31e2e5(0xf7)][_0xe88db6]={'costFlat':{},'costRate':{},'dmgFlat':_0x53dc85['dmgFlat']??0x0,'dmgRate':_0x53dc85[_0x31e2e5(0xae)]??0.2,'cooldown':_0x53dc85[_0x31e2e5(0x176)]??-0x1,'buffTurn':_0x53dc85[_0x31e2e5(0x14c)]??0x1,'debuffTurn':_0x53dc85['debuffTurn']??0x1,'stateTurn':_0x53dc85[_0x31e2e5(0x8c)]??0x1};const _0x44fb12=[],_0x5bdd2a=VisuMZ['SkillMastery'][_0x31e2e5(0x10d)],_0xe4804d=_0x434e50[_0x31e2e5(0xe3)]||'',_0x2561b9=_0xe4804d[_0x31e2e5(0xcb)](_0x5bdd2a[_0x31e2e5(0x115)]);if(_0x2561b9)for(const _0xb992d8 of _0x2561b9){_0xb992d8[_0x31e2e5(0xcb)](_0x5bdd2a['costChangePerLevelFlat']);const _0x494aeb=Number(RegExp['$1']),_0x563afb=String(RegExp['$2'])[_0x31e2e5(0x11b)]()[_0x31e2e5(0xc9)]();this[_0x31e2e5(0xf7)][_0xe88db6][_0x31e2e5(0xc4)][_0x563afb]=_0x494aeb,_0x44fb12[_0x31e2e5(0x11a)](_0x563afb);}const _0x36b825=_0xe4804d[_0x31e2e5(0xcb)](_0x5bdd2a[_0x31e2e5(0xb5)]);if(_0x36b825)for(const _0xdca005 of _0x36b825){_0xdca005['match'](_0x5bdd2a[_0x31e2e5(0xb5)]);const _0x4eabe6=Number(RegExp['$1'])*0.01,_0x104c6b=String(RegExp['$3'])[_0x31e2e5(0x11b)]()['trim']();this['_skillMasteryLevelEffectData'][_0xe88db6][_0x31e2e5(0xc2)][_0x104c6b]=_0x4eabe6,_0x44fb12[_0x31e2e5(0x11a)](_0x104c6b);}!_0x44fb12[_0x31e2e5(0xe2)]('HP')&&(_0x31e2e5(0xfa)===_0x31e2e5(0xfa)?(this[_0x31e2e5(0xf7)][_0xe88db6]['costFlat']['HP']=_0x53dc85[_0x31e2e5(0x16c)]??0x0,this[_0x31e2e5(0xf7)][_0xe88db6]['costRate']['HP']=_0x53dc85[_0x31e2e5(0x126)]??-0.1):(this[_0x31e2e5(0x134)]={},this[_0x31e2e5(0x152)]={}));if(!_0x44fb12['includes']('MP')){if(_0x31e2e5(0x87)!==_0x31e2e5(0x87)){const _0x279338=this[_0x31e2e5(0x13f)],_0x29c43f=this[_0x31e2e5(0xe7)];_0x279338[_0x31e2e5(0x129)](_0x29c43f['id']);}else this['_skillMasteryLevelEffectData'][_0xe88db6]['costFlat']['MP']=_0x53dc85[_0x31e2e5(0x12e)]??0x0,this[_0x31e2e5(0xf7)][_0xe88db6][_0x31e2e5(0xc2)]['MP']=_0x53dc85[_0x31e2e5(0xbe)]??-0.1;}!_0x44fb12[_0x31e2e5(0xe2)]('TP')&&(this['_skillMasteryLevelEffectData'][_0xe88db6][_0x31e2e5(0xc4)]['TP']=_0x53dc85['tpCostFlat']??0x0,this[_0x31e2e5(0xf7)][_0xe88db6][_0x31e2e5(0xc2)]['TP']=_0x53dc85[_0x31e2e5(0x98)]??-0.1);const _0x57e45d=_0xe4804d['match'](_0x5bdd2a[_0x31e2e5(0x88)]);if(_0x57e45d)for(const _0x28be78 of _0x57e45d){_0x28be78[_0x31e2e5(0xcb)](_0x5bdd2a[_0x31e2e5(0x88)]);const _0x4fbf02=Number(RegExp['$1']);this[_0x31e2e5(0xf7)][_0xe88db6][_0x31e2e5(0x12c)]=_0x4fbf02;}const _0xbfa329=_0xe4804d[_0x31e2e5(0xcb)](_0x5bdd2a['dmgChangePerLevelRate']);if(_0xbfa329)for(const _0x5be760 of _0xbfa329){if(_0x31e2e5(0xeb)!==_0x31e2e5(0x177)){_0x5be760[_0x31e2e5(0xcb)](_0x5bdd2a[_0x31e2e5(0xf4)]);const _0xca4234=Number(RegExp['$1'])*0.01;this[_0x31e2e5(0xf7)][_0xe88db6]['dmgRate']=_0xca4234;}else _0x404fcf+=_0x525572*_0x3cd8f2['costFlat'][_0x1ce377],_0x440ace=!![];}const _0x5743e5=[[_0x31e2e5(0xe0),_0x31e2e5(0x176)],[_0x31e2e5(0xe5),'buffTurn'],[_0x31e2e5(0xca),_0x31e2e5(0x13a)],['stateTurnChangePerLevel',_0x31e2e5(0x8c)]];for(const _0x3f52c9 of _0x5743e5){if('mhzpi'==='JGdaa')_0x3e00bd=_0x14dfb8(_0x26efd6['$1']);else{const _0x565346=_0x3f52c9[0x0],_0x2b1279=_0x3f52c9[0x1];if(_0xe4804d[_0x31e2e5(0xcb)](_0x5bdd2a[_0x565346])){if(_0x31e2e5(0x17b)===_0x31e2e5(0x17b)){const _0x34bcaa=Number(RegExp['$1']);this[_0x31e2e5(0xf7)][_0xe88db6][_0x2b1279]=_0x34bcaa;}else{_0x234146['SkillMastery']['Game_BattlerBase_resetStateCounts']['call'](this,_0x2a8659);if(!this['canApplySkillMasteryEffect']())return;const _0x48ced6=_0x189d73[_0x5e6efe],_0x64546e=this[_0x31e2e5(0x103)](_0x48ced6)[_0x31e2e5(0x148)]()[_0x31e2e5(0xc9)]();if(![_0x31e2e5(0x132),_0x31e2e5(0x101),_0x31e2e5(0x13e)][_0x31e2e5(0xe2)](_0x64546e))return;const _0x514989=_0x2f9113[_0x31e2e5(0xd0)]()?_0x4e45d4['_subject']:_0x2cb95a[_0x31e2e5(0x93)][_0x31e2e5(0x163)](),_0x4373d0=_0x36778b[_0x31e2e5(0xd0)]()?_0x1801b6[_0x31e2e5(0x89)]['item']():_0x45f5c5[_0x31e2e5(0x93)][_0x31e2e5(0x116)](),_0x2c3cba=_0x514989[_0x31e2e5(0x90)](_0x4373d0['id']);if(_0x2c3cba<=0x0)return;const _0x54737f=_0x1d2ea5[_0x31e2e5(0x113)](_0x4373d0['id']);if(_0x54737f[_0x31e2e5(0x8c)]!==0x0){if(_0x64546e===_0x31e2e5(0x13e)){const _0x514387=_0x57246a[_0x31ead1],_0x16176e=0x1+_0x107d77[_0x31e2e5(0x9b)](_0x514387['maxTurns']-_0x514387['minTurns'],0x0),_0x38b4e9=_0x514387[_0x31e2e5(0x137)]+_0xa5ea0a[_0x31e2e5(0xaf)](_0x16176e)+_0x54737f[_0x31e2e5(0x8c)]*_0x2c3cba;this[_0x31e2e5(0xef)][_0x4d5d34]=_0x334411[_0x31e2e5(0x9b)](this[_0x31e2e5(0xef)][_0x511b5a],_0x38b4e9);}else this[_0x31e2e5(0xef)][_0x4a499d]+=_0x54737f[_0x31e2e5(0x8c)]*_0x2c3cba;this[_0x31e2e5(0xef)][_0x732019]=_0x4f2475['max'](this['_stateTurns'][_0x7dfd3a],0x0);}}}}}return this[_0x31e2e5(0xf7)][_0xe88db6];},SoundManager[_0x476ca3(0x13c)]=function(){const _0x1b2a68=_0x476ca3,_0x449d23=VisuMZ[_0x1b2a68(0xb9)][_0x1b2a68(0x142)]['Sound'],_0x3a5a8d={'name':_0x449d23[_0x1b2a68(0xe8)],'volume':_0x449d23[_0x1b2a68(0x9e)],'pitch':_0x449d23[_0x1b2a68(0xd3)],'pan':_0x449d23['pan']};AudioManager[_0x1b2a68(0x8f)](_0x3a5a8d);},SceneManager[_0x476ca3(0xd0)]=function(){const _0x3b18e1=_0x476ca3;return this['_scene']&&this[_0x3b18e1(0x93)]['constructor']===Scene_Battle;},VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x99)]=BattleManager[_0x476ca3(0x150)],BattleManager[_0x476ca3(0x150)]=function(_0x166c16,_0x4dd285,_0x2b3a35){const _0x4359cb=_0x476ca3;VisuMZ['SkillMastery'][_0x4359cb(0x99)][_0x4359cb(0x165)](this,_0x166c16,_0x4dd285,_0x2b3a35),this[_0x4359cb(0x13f)]=undefined,this[_0x4359cb(0xe7)]=undefined;},VisuMZ[_0x476ca3(0xb9)]['BattleManager_startAction']=BattleManager[_0x476ca3(0x122)],BattleManager[_0x476ca3(0x122)]=function(){const _0x1fc155=_0x476ca3;this['startActionSkillMastery'](),VisuMZ[_0x1fc155(0xb9)][_0x1fc155(0xf5)][_0x1fc155(0x165)](this);},BattleManager[_0x476ca3(0xb6)]=function(){const _0xda3386=_0x476ca3,_0x2a44f8=this[_0xda3386(0xea)],_0x10ae10=_0x2a44f8[_0xda3386(0xa0)]();if(_0x2a44f8&&_0x10ae10&&_0x10ae10[_0xda3386(0x116)]()&&_0x10ae10[_0xda3386(0xde)]()){if('JSzIH'===_0xda3386(0x155))return this[_0xda3386(0xf7)][_0x4908a8];else this[_0xda3386(0x13f)]=this[_0xda3386(0xea)],this[_0xda3386(0xe7)]=_0x10ae10[_0xda3386(0x116)](),$gameVariables[_0xda3386(0xa3)](_0x2a44f8,_0x10ae10['item']());}},VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x100)]=BattleManager['endAction'],BattleManager[_0x476ca3(0xbc)]=function(){const _0x46960e=_0x476ca3;this[_0x46960e(0xa4)](),VisuMZ[_0x46960e(0xb9)][_0x46960e(0x100)][_0x46960e(0x165)](this);},BattleManager[_0x476ca3(0xa4)]=function(){const _0x110afd=_0x476ca3;if(this['_masterySubject']&&this[_0x110afd(0xe7)]){if(_0x110afd(0xdb)===_0x110afd(0x10a))_0x5e95b4[_0x110afd(0xb9)][_0x110afd(0x138)](this[_0x110afd(0x172)],_0x10f3c7),_0x4505e8['SkillMastery'][_0x110afd(0x8b)][_0x110afd(0x165)](this,_0x49557a);else{const _0x567e8f=this[_0x110afd(0x13f)],_0x50d499=this[_0x110afd(0xe7)];_0x567e8f[_0x110afd(0x129)](_0x50d499['id']);}}this[_0x110afd(0x13f)]=undefined,this[_0x110afd(0xe7)]=undefined;},Game_Variables[_0x476ca3(0xa9)]={'targetVariableID':VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x142)][_0x476ca3(0x180)]??0x0},Game_Variables[_0x476ca3(0x183)][_0x476ca3(0xa3)]=function(_0x3a6c43,_0xcfa42a){const _0x33fe6d=_0x476ca3,_0x2b25f8=Game_Variables[_0x33fe6d(0xa9)][_0x33fe6d(0x117)];if(_0x2b25f8<=0x0)return;if(!_0x3a6c43)return;if(!_0xcfa42a)return;const _0x196eee=_0x3a6c43[_0x33fe6d(0x90)](_0xcfa42a['id']);this[_0x33fe6d(0x108)](_0x2b25f8,_0x196eee);},VisuMZ[_0x476ca3(0xb9)]['Game_Action_applyVariance']=Game_Action['prototype'][_0x476ca3(0xf0)],Game_Action[_0x476ca3(0x183)][_0x476ca3(0xf0)]=function(_0x432a3c,_0x5bb68a){const _0x115189=_0x476ca3;_0x432a3c=VisuMZ[_0x115189(0xb9)][_0x115189(0xf6)][_0x115189(0x165)](this,_0x432a3c,_0x5bb68a);if(!this[_0x115189(0xde)]())return _0x432a3c;const _0x5516e2=this[_0x115189(0xf8)]()[_0x115189(0x90)](this[_0x115189(0x116)]()['id']);if(_0x5516e2<=0x0)return _0x432a3c;const _0xca360a=DataManager['skillMasteryLevelEffectData'](this[_0x115189(0x116)]()['id']);if(_0xca360a[_0x115189(0xae)]!==0x0){const _0x1190a6=0x1+_0x5516e2*_0xca360a[_0x115189(0xae)];_0x432a3c*=_0x1190a6;}if(_0xca360a[_0x115189(0x12c)]!==0x0){if(_0x432a3c>0x0)_0x432a3c+=_0x5516e2*_0xca360a[_0x115189(0x12c)];else _0x432a3c<0x0&&(_0x432a3c-=_0x5516e2*_0xca360a[_0x115189(0x12c)]);}return _0x432a3c;},Game_BattlerBase[_0x476ca3(0xa9)]={'expFormula':VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x142)][_0x476ca3(0x10b)]['DefaultExpFormula']??_0x476ca3(0x156),'maxLevel':VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x142)]['General'][_0x476ca3(0x86)]??0x63,'preventExpForAttack':VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x142)][_0x476ca3(0x10b)][_0x476ca3(0x14d)]??!![],'preventExpForGuard':VisuMZ[_0x476ca3(0xb9)]['Settings'][_0x476ca3(0x10b)][_0x476ca3(0xb7)]??!![],'allowCostModToZero':!VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x142)][_0x476ca3(0x10b)][_0x476ca3(0x153)]??![],'allowCooldownModToZero':!VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x142)][_0x476ca3(0x10b)]['preventCooldownModToZero']??![]},VisuMZ['SkillMastery'][_0x476ca3(0xab)]=Game_BattlerBase['prototype'][_0x476ca3(0x154)],Game_BattlerBase['prototype'][_0x476ca3(0x154)]=function(){const _0x34ed60=_0x476ca3;VisuMZ[_0x34ed60(0xb9)][_0x34ed60(0xab)][_0x34ed60(0x165)](this),this[_0x34ed60(0xdf)]();},Game_BattlerBase[_0x476ca3(0x183)][_0x476ca3(0xdf)]=function(){const _0x3c07eb=_0x476ca3;this['_skillMasteryLevels']={},this[_0x3c07eb(0x152)]={};},Game_BattlerBase[_0x476ca3(0x183)][_0x476ca3(0x90)]=function(_0x19e3b0){const _0x3da35c=_0x476ca3;if(Game_BattlerBase[_0x3da35c(0xa9)][_0x3da35c(0x14d)]&&_0x19e3b0===this['attackSkillId']())return 0x0;if(Game_BattlerBase[_0x3da35c(0xa9)][_0x3da35c(0xb7)]&&_0x19e3b0===this[_0x3da35c(0x13b)]())return 0x0;if(this[_0x3da35c(0x134)]===undefined)this[_0x3da35c(0xdf)]();return this[_0x3da35c(0x134)][_0x19e3b0]||0x0;},Game_BattlerBase[_0x476ca3(0x183)][_0x476ca3(0xed)]=function(_0x10df6b,_0x1746e2){const _0x13dd57=_0x476ca3;if(Game_BattlerBase[_0x13dd57(0xa9)][_0x13dd57(0x14d)]&&_0x10df6b===this[_0x13dd57(0x14f)]())return;if(Game_BattlerBase['SKILL_MASTERY'][_0x13dd57(0xb7)]&&_0x10df6b===this[_0x13dd57(0x13b)]())return;if(this[_0x13dd57(0x134)]===undefined)this['initSkillMasteries']();if(this[_0x13dd57(0x152)]===undefined)this[_0x13dd57(0xdf)]();if(this['_skillMasteryLevels'][_0x10df6b]!==_0x1746e2){if(_0x13dd57(0x179)!==_0x13dd57(0x179)){if(!_0x4d867c[_0x13dd57(0xb2)]())return 0x0;const _0x212443=_0x42cba0[_0x13dd57(0x173)]()[_0x604094];if(!_0x212443)return 0x0;return _0x212443['skillMasteryExp'](_0x3a8b55);}else this['_skillMasteryLevels'][_0x10df6b]=_0x1746e2[_0x13dd57(0x12d)](0x0,DataManager[_0x13dd57(0x15e)](_0x10df6b)),this['_skillMasteryExp'][_0x10df6b]=0x0;}},Game_BattlerBase[_0x476ca3(0x183)][_0x476ca3(0x16e)]=function(_0x201851){const _0x198d6b=_0x476ca3;if(Game_BattlerBase['SKILL_MASTERY']['preventExpForAttack']&&_0x201851===this[_0x198d6b(0x14f)]())return 0x0;if(Game_BattlerBase['SKILL_MASTERY'][_0x198d6b(0xb7)]&&_0x201851===this[_0x198d6b(0x13b)]())return 0x0;if(this[_0x198d6b(0x152)]===undefined)this[_0x198d6b(0xdf)]();return this[_0x198d6b(0x152)][_0x201851]||0x0;},Game_BattlerBase['prototype']['setSkillMasteryExp']=function(_0x4092af,_0x484c91,_0x472971,_0x4f4f3e){const _0x5ca059=_0x476ca3;if(Game_BattlerBase[_0x5ca059(0xa9)][_0x5ca059(0x14d)]&&_0x4092af===this[_0x5ca059(0x14f)]())return;if(Game_BattlerBase['SKILL_MASTERY'][_0x5ca059(0xb7)]&&_0x4092af===this[_0x5ca059(0x13b)]())return;if(this['_skillMasteryExp']===undefined)this[_0x5ca059(0xdf)]();this['_skillMasteryExp'][_0x4092af]=Math[_0x5ca059(0x9b)](_0x484c91,0x0);if(_0x4f4f3e)return;this['checkSkillMasteryLevelUp'](_0x4092af,_0x472971);},Game_BattlerBase[_0x476ca3(0x183)]['gainSkillMasteryExp']=function(_0x221cc8,_0x463dd3,_0x26c76f){const _0x91387f=_0x476ca3;if(Game_BattlerBase[_0x91387f(0xa9)][_0x91387f(0x14d)]&&_0x221cc8===this[_0x91387f(0x14f)]())return;if(Game_BattlerBase[_0x91387f(0xa9)][_0x91387f(0xb7)]&&_0x221cc8===this[_0x91387f(0x13b)]())return;if(this['_skillMasteryExp']===undefined)this[_0x91387f(0xdf)]();_0x463dd3=_0x463dd3||0x1,this[_0x91387f(0x152)][_0x221cc8]=this[_0x91387f(0x152)][_0x221cc8]||0x0,this[_0x91387f(0x152)][_0x221cc8]+=_0x463dd3,this[_0x91387f(0x152)][_0x221cc8]=Math[_0x91387f(0x9b)](this[_0x91387f(0x152)][_0x221cc8],0x0);if(_0x26c76f)return;this[_0x91387f(0x130)](_0x221cc8);},VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0xce)]=Game_Battler[_0x476ca3(0x183)][_0x476ca3(0x14a)],Game_Battler['prototype'][_0x476ca3(0x14a)]=function(_0x4dd70b){const _0x30f1b7=_0x476ca3;VisuMZ[_0x30f1b7(0xb9)][_0x30f1b7(0xce)][_0x30f1b7(0x165)](this,_0x4dd70b),DataManager[_0x30f1b7(0xde)](_0x4dd70b)&&!SceneManager[_0x30f1b7(0xd0)]()&&(this['gainSkillMasteryExp'](_0x4dd70b['id']),$gameVariables['updateSkillMasteryVariable'](this,_0x4dd70b));},Game_BattlerBase[_0x476ca3(0x183)][_0x476ca3(0x17a)]=function(){const _0x483644=_0x476ca3;this['initSkillMasteries']();const _0x550468=VisuMZ[_0x483644(0xb9)]['RegExp'],_0x537eec=(this[_0x483644(0x91)]()?this[_0x483644(0x163)]()[_0x483644(0xe3)]:this[_0x483644(0xe4)]()[_0x483644(0xe3)])||'';if(_0x537eec['match'](_0x550468[_0x483644(0xf2)])){if(_0x483644(0x127)==='rARJz'){const _0x314da6=_0x388a99[_0x483644(0x93)];return _0x314da6&&_0x314da6[_0x483644(0x172)]&&_0x314da6[_0x483644(0x116)]&&_0x314da6[_0x483644(0x116)]()&&_0x343cf6[_0x483644(0xde)](_0x314da6[_0x483644(0x116)]());}else{const _0x54ea64=String(RegExp['$1'])[_0x483644(0x95)](/[\r\n]+/);for(const _0x345d8c of _0x54ea64){if(_0x345d8c[_0x483644(0xcb)](/(.*):[ ](.*)/i)){if('VWlSH'===_0x483644(0xa5)){if(_0x451e84===_0x483644(0x13e)){const _0xd5176d=_0x29e04b+_0x1ca494[_0x483644(0x13a)]*_0x149c22;this[_0x483644(0x11f)][_0x4250e5]=_0x310506['max'](this[_0x483644(0x11f)][_0x1fe7c7],_0xd5176d);}else this[_0x483644(0x11f)][_0x171b34]+=_0x5aa315['debuffTurn']*_0x34afbf;}else{const _0x4ded41=String(RegExp['$1']),_0x44731d=RegExp['$2'][_0x483644(0x95)](',')['map'](_0x7552f1=>Number(_0x7552f1));let _0x257f9a=0x0;if(_0x4ded41[_0x483644(0xcb)](/SKILL[ ](\d+)/i))_0x257f9a=Number(RegExp['$1']);else{if(_0x483644(0xd2)!==_0x483644(0x128))_0x257f9a=DataManager[_0x483644(0xba)](_0x4ded41);else return _0x25cac4[_0x483644(0xea)]&&_0x41cbf1[_0x483644(0x89)]&&_0x4f9002['_action'][_0x483644(0xde)]()&&[_0x483644(0xda),_0x483644(0x169)][_0x483644(0xe2)](_0xc6be6d['_phase']);}if(_0x257f9a>0x0){const _0x43a7bc=_0x44731d[0x0]||0x0,_0x5c48f7=_0x44731d[0x1]||0x0;this[_0x483644(0xed)](_0x257f9a,_0x43a7bc),this[_0x483644(0x168)](_0x257f9a,_0x5c48f7,!![]);}}}}}}},Game_BattlerBase[_0x476ca3(0x183)][_0x476ca3(0x130)]=function(_0x48c713,_0x72748c){const _0x4caf2c=_0x476ca3;let _0x350eb3=![];for(;;){const _0x5452e2=this[_0x4caf2c(0x90)](_0x48c713);if(_0x5452e2>=DataManager['skillMasteryMaxLevel'](_0x48c713))break;const _0x499e53=this[_0x4caf2c(0x16e)](_0x48c713),_0x46faef=this['skillMasteryExpNeeded'](_0x48c713,_0x5452e2+0x1);if(_0x499e53>=_0x46faef)_0x350eb3=!![],this[_0x4caf2c(0xed)](_0x48c713,_0x5452e2+0x1),this[_0x4caf2c(0x168)](_0x48c713,_0x499e53-_0x46faef,_0x72748c,!![]);else break;}if(_0x350eb3){!_0x72748c&&SoundManager[_0x4caf2c(0x13c)]();if(SceneManager['isSceneBattle']()&&Imported[_0x4caf2c(0xbb)]){if(_0x4caf2c(0x178)!==_0x4caf2c(0xf1))this[_0x4caf2c(0x17d)](_0x48c713);else{const _0x3e0bbd=_0x40fdec[_0x21773e];if(!_0x3e0bbd)return _0x1cea8d[_0x4caf2c(0xb9)][_0x4caf2c(0x119)];this['_skillMasteryLevelFormula']=this['_skillMasteryLevelFormula']||{};if(this['_skillMasteryLevelFormula'][_0x14e297]!==_0x1ff284)return this[_0x4caf2c(0x174)][_0x26ef8f];let _0x3716fe=_0x47d306['SKILL_MASTERY'][_0x4caf2c(0x15c)];const _0x4e2b06=_0x56fc78[_0x4caf2c(0xb9)]['RegExp'],_0x1d4a8b=_0x3e0bbd[_0x4caf2c(0xe3)]||'';_0x1d4a8b[_0x4caf2c(0xcb)](_0x4e2b06[_0x4caf2c(0x15c)])&&(_0x3716fe=_0x91e57(_0x59fae8['$1']));const _0x2f485b=_0x4caf2c(0x124)['format'](_0x3716fe);return this[_0x4caf2c(0x174)][_0x1d296a]=new _0x2137d7(_0x2f485b),this[_0x4caf2c(0x174)][_0x4b6e53];}}}},Game_BattlerBase[_0x476ca3(0x183)]['skillMasteryExpNeeded']=function(_0x124729,_0x38ba85){const _0x2ebabb=_0x476ca3,_0x58c7d0=DataManager[_0x2ebabb(0x167)](_0x124729);return _0x58c7d0[_0x2ebabb(0x165)](this,this,$dataSkills[_0x124729],_0x38ba85);},Game_Battler[_0x476ca3(0x183)]['displaySkillMasteryLevelUpEffect']=function(_0x578fcc){const _0x8cb0b8=_0x476ca3;if(!SceneManager['isSceneBattle']())return![];const _0x17c5d0=VisuMZ['SkillMastery']['Settings'][_0x8cb0b8(0xd4)];if(!_0x17c5d0)return;if(_0x17c5d0['AnimationID']>0x0){if('IpDGz'!==_0x8cb0b8(0xe1)){_0x1680f4['match'](_0x2f5a10[_0x8cb0b8(0xb5)]);const _0x398169=_0x4ed380(_0x42b90e['$1'])*0.01,_0x758c5c=_0x2c7764(_0x55d5b3['$3'])[_0x8cb0b8(0x11b)]()[_0x8cb0b8(0xc9)]();this['_skillMasteryLevelEffectData'][_0xe4e171][_0x8cb0b8(0xc2)][_0x758c5c]=_0x398169,_0x6241a[_0x8cb0b8(0x11a)](_0x758c5c);}else{const _0x329426=[this],_0x558d93=_0x17c5d0[_0x8cb0b8(0xfb)],_0x462f2f=_0x17c5d0[_0x8cb0b8(0x9a)],_0x2774c1=_0x17c5d0['Mute'];$gameTemp['requestFauxAnimation'](_0x329426,_0x558d93,_0x462f2f,_0x2774c1);}}if(_0x17c5d0[_0x8cb0b8(0x15f)]!==''){const _0x3f2895=_0x17c5d0['PopupText'],_0x12d21e={'textColor':_0x17c5d0[_0x8cb0b8(0x16b)],'flashColor':_0x17c5d0['FlashColor'],'flashDuration':_0x17c5d0[_0x8cb0b8(0x184)]};this[_0x8cb0b8(0xa8)](_0x3f2895,_0x12d21e);}},VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0xad)]=Game_BattlerBase[_0x476ca3(0x183)][_0x476ca3(0xd7)],Game_BattlerBase[_0x476ca3(0x183)]['adjustSkillCost']=function(_0x5a5666,_0x1ebc94,_0x206020){const _0x57716d=_0x476ca3;_0x1ebc94=VisuMZ['SkillMastery']['Game_BattlerBase_adjustSkillCost']['call'](this,_0x5a5666,_0x1ebc94,_0x206020);if(_0x1ebc94<=0x0)return _0x1ebc94;const _0x16c2f4=this[_0x57716d(0x90)](_0x5a5666['id']);if(_0x16c2f4<=0x0)return _0x1ebc94;let _0x433960=![];const _0x205a3a=DataManager['skillMasteryLevelEffectData'](_0x5a5666['id']),_0x290d16=_0x206020['Name'][_0x57716d(0x11b)]();if(_0x205a3a['costRate'][_0x290d16]!==undefined){if(_0x57716d(0x106)!==_0x57716d(0x106)){_0x24dde9[_0x57716d(0xa1)](_0xcaa0e5,_0x33c554);const _0x5dffde=_0x70b792[_0x57716d(0x12b)][_0x57716d(0x131)](_0xbd3ac8=>_0x134729[_0x57716d(0x173)]()[_0xbd3ac8])[_0x57716d(0xbd)](null)['remove'](_0x5d6440),_0x5f6173=_0x1b2133['SkillID']||0x0,_0x31c5e7=_0x2aaa22[_0x57716d(0x17c)]||0x0,_0x3e8207=_0x2d1347[_0x57716d(0x9f)]||0x0;for(const _0x2895ea of _0x5dffde){const _0x7ea8b3=_0x2895ea[_0x57716d(0x90)](_0x5f6173);_0x2895ea[_0x57716d(0xed)](_0x5f6173,_0x7ea8b3+_0x31c5e7);const _0x578c8c=_0x2895ea[_0x57716d(0x16e)](_0x5f6173);_0x2895ea[_0x57716d(0x168)](_0x5f6173,_0x578c8c+_0x3e8207,!![]);}}else{const _0x1a8e45=0x1+_0x16c2f4*_0x205a3a[_0x57716d(0xc2)][_0x290d16];_0x1ebc94*=_0x1a8e45,_0x433960=!![];}}_0x205a3a[_0x57716d(0xc4)][_0x290d16]!==undefined&&(_0x1ebc94+=_0x16c2f4*_0x205a3a[_0x57716d(0xc4)][_0x290d16],_0x433960=!![]);if(_0x433960){const _0x5834a5=Game_BattlerBase[_0x57716d(0xa9)]['allowCostModToZero']?0x0:0x1;_0x1ebc94=Math[_0x57716d(0x9b)](Math['floor'](_0x1ebc94),_0x5834a5);}return _0x1ebc94;},Game_BattlerBase[_0x476ca3(0x183)][_0x476ca3(0xac)]=function(){const _0x573188=_0x476ca3;if(SceneManager[_0x573188(0xd0)]()){if(_0x573188(0x120)!==_0x573188(0x120)){if(_0x116efb===_0x573188(0x13e)){const _0x54b3f0=_0x4298e0+_0x3f8779[_0x573188(0x14c)]*_0x538ad4;this['_buffTurns'][_0x58c59b]=_0x3ac080[_0x573188(0x9b)](this[_0x573188(0x11f)][_0x5bbfeb],_0x54b3f0);}else this[_0x573188(0x11f)][_0xf65bc8]+=_0x415044['buffTurn']*_0x204d45;}else return BattleManager[_0x573188(0xea)]&&BattleManager['_action']&&BattleManager[_0x573188(0x89)][_0x573188(0xde)]()&&[_0x573188(0xda),_0x573188(0x169)][_0x573188(0xe2)](BattleManager['_phase']);}else{if(_0x573188(0x15a)===_0x573188(0xb4)){const _0x5b5df2=_0x164030(_0x568e8d['$1']);_0x5b5df2<_0x435782?(_0xe98d2d(_0x573188(0x146)[_0x573188(0xc3)](_0x310e7d,_0x5b5df2,_0x12f2ec)),_0x3dc833[_0x573188(0x110)]()):_0x40dd26=_0x21164a[_0x573188(0x9b)](_0x5b5df2,_0x4dbc17);}else{const _0x417271=SceneManager[_0x573188(0x93)];return _0x417271&&_0x417271[_0x573188(0x172)]&&_0x417271[_0x573188(0x116)]&&_0x417271[_0x573188(0x116)]()&&DataManager[_0x573188(0xde)](_0x417271['item']());}}},VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x162)]=Game_BattlerBase[_0x476ca3(0x183)][_0x476ca3(0x118)],Game_BattlerBase[_0x476ca3(0x183)][_0x476ca3(0x118)]=function(_0x157060){const _0x5753d7=_0x476ca3;VisuMZ[_0x5753d7(0xb9)][_0x5753d7(0x162)][_0x5753d7(0x165)](this,_0x157060);if(!this[_0x5753d7(0xac)]())return;const _0x1f40f6=$dataStates[_0x157060],_0x436e23=this['getStateReapplyRulings'](_0x1f40f6)['toLowerCase']()['trim']();if(![_0x5753d7(0x132),_0x5753d7(0x101),_0x5753d7(0x13e)][_0x5753d7(0xe2)](_0x436e23))return;const _0x4eeb6b=SceneManager[_0x5753d7(0xd0)]()?BattleManager[_0x5753d7(0xea)]:SceneManager[_0x5753d7(0x93)][_0x5753d7(0x163)](),_0x44450e=SceneManager[_0x5753d7(0xd0)]()?BattleManager[_0x5753d7(0x89)]['item']():SceneManager[_0x5753d7(0x93)]['item'](),_0x17dbd0=_0x4eeb6b[_0x5753d7(0x90)](_0x44450e['id']);if(_0x17dbd0<=0x0)return;const _0x3d3975=DataManager[_0x5753d7(0x113)](_0x44450e['id']);if(_0x3d3975[_0x5753d7(0x8c)]!==0x0){if('lrsJB'!=='VOWCG'){if(_0x436e23===_0x5753d7(0x13e)){if('EAMxf'===_0x5753d7(0xd8)){const _0x93a45c=_0x305c4e(_0x37aa43['$1']);this[_0x5753d7(0xf7)][_0x3f1f4e][_0x579e6d]=_0x93a45c;}else{const _0x16d137=$dataStates[_0x157060],_0x24429b=0x1+Math['max'](_0x16d137['maxTurns']-_0x16d137['minTurns'],0x0),_0x593128=_0x16d137[_0x5753d7(0x137)]+Math[_0x5753d7(0xaf)](_0x24429b)+_0x3d3975[_0x5753d7(0x8c)]*_0x17dbd0;this['_stateTurns'][_0x157060]=Math['max'](this[_0x5753d7(0xef)][_0x157060],_0x593128);}}else _0x5753d7(0x171)===_0x5753d7(0x171)?this[_0x5753d7(0xef)][_0x157060]+=_0x3d3975[_0x5753d7(0x8c)]*_0x17dbd0:_0x25eddb=0x1;this[_0x5753d7(0xef)][_0x157060]=Math[_0x5753d7(0x9b)](this['_stateTurns'][_0x157060],0x0);}else{const _0x2547ab=_0xe0cd0d[_0x5753d7(0x90)](_0x3800c2);_0x388276['setSkillMasteryLevel'](_0x9415e4,_0x2547ab+_0xb2411d);const _0x117cad=_0xfebcb4[_0x5753d7(0x16e)](_0x2b0bbe);_0x559b86[_0x5753d7(0x168)](_0x4f866e,_0x117cad+_0x3b51cf,!![]);}}},VisuMZ['SkillMastery'][_0x476ca3(0x10f)]=Game_BattlerBase['prototype']['overwriteBuffTurns'],Game_BattlerBase[_0x476ca3(0x183)]['overwriteBuffTurns']=function(_0x4b7d07,_0x169147){const _0x393335=_0x476ca3;VisuMZ[_0x393335(0xb9)][_0x393335(0x10f)][_0x393335(0x165)](this,_0x4b7d07,_0x169147);if(!this[_0x393335(0xac)]())return;const _0xdeb9fc=VisuMZ['SkillsStatesCore']['Settings'][_0x393335(0xfc)][_0x393335(0x139)];if(![_0x393335(0x132),'add',_0x393335(0x13e)][_0x393335(0xe2)](_0xdeb9fc))return;const _0x329923=SceneManager['isSceneBattle']()?BattleManager[_0x393335(0xea)]:SceneManager[_0x393335(0x93)][_0x393335(0x163)](),_0x34cd0e=SceneManager['isSceneBattle']()?BattleManager[_0x393335(0x89)]['item']():SceneManager[_0x393335(0x93)]['item'](),_0x2a51f7=_0x329923['skillMasteryLevel'](_0x34cd0e['id']);if(_0x2a51f7<=0x0)return;const _0x249e12=DataManager[_0x393335(0x113)](_0x34cd0e['id']);if(this[_0x393335(0x8e)](_0x4b7d07)&&_0x249e12[_0x393335(0x14c)]!==0x0){if(_0xdeb9fc==='greater'){const _0x17e643=_0x169147+_0x249e12[_0x393335(0x14c)]*_0x2a51f7;this[_0x393335(0x11f)][_0x4b7d07]=Math[_0x393335(0x9b)](this[_0x393335(0x11f)][_0x4b7d07],_0x17e643);}else _0x393335(0xc6)===_0x393335(0x123)?(_0x3291af[_0x393335(0xed)](_0x447358,_0x169b8f),_0x3b5ab1[_0x393335(0x168)](_0x32ce3d,_0x2b10ba,!![])):this[_0x393335(0x11f)][_0x4b7d07]+=_0x249e12[_0x393335(0x14c)]*_0x2a51f7;}if(this[_0x393335(0xbf)](_0x4b7d07)&&_0x249e12[_0x393335(0x13a)]!==0x0){if(_0xdeb9fc===_0x393335(0x13e)){const _0xb72ee3=_0x169147+_0x249e12['debuffTurn']*_0x2a51f7;this[_0x393335(0x11f)][_0x4b7d07]=Math['max'](this['_buffTurns'][_0x4b7d07],_0xb72ee3);}else this['_buffTurns'][_0x4b7d07]+=_0x249e12[_0x393335(0x13a)]*_0x2a51f7;}const _0x3e966a=VisuMZ[_0x393335(0x16d)][_0x393335(0x142)][_0x393335(0xfc)][_0x393335(0xa7)];this[_0x393335(0x11f)][_0x4b7d07]=this[_0x393335(0x11f)][_0x4b7d07][_0x393335(0x12d)](0x0,_0x3e966a);},Game_BattlerBase[_0x476ca3(0x183)][_0x476ca3(0xee)]=function(_0x502eac,_0x29bd3c){const _0x2bc2a2=_0x476ca3;if(_0x29bd3c<=0x0)return _0x29bd3c;const _0x12452e=this[_0x2bc2a2(0x90)](_0x502eac['id']);if(_0x12452e<=0x0)return _0x29bd3c;const _0x4eaae1=DataManager[_0x2bc2a2(0x113)](_0x502eac['id']);_0x4eaae1[_0x2bc2a2(0x176)]!==0x0&&(_0x29bd3c+=_0x12452e*_0x4eaae1[_0x2bc2a2(0x176)]);const _0x5a0ab1=Game_BattlerBase[_0x2bc2a2(0xa9)]['allowCooldownModToZero']?0x0:0x1;return Math[_0x2bc2a2(0x9b)](_0x29bd3c,_0x5a0ab1);};var $actorSkillMasteryLevel=function(_0x3f6218,_0x365ab0){const _0x533a47=_0x476ca3,_0x453707=$gameActors[_0x533a47(0x163)](_0x3f6218);if(!_0x453707)return 0x0;return _0x453707[_0x533a47(0x90)](_0x365ab0);},$actorSkillMasteryExp=function(_0x121cde,_0xae6be3){const _0x5508f6=_0x476ca3,_0x2400bd=$gameActors[_0x5508f6(0x163)](_0x121cde);if(!_0x2400bd)return 0x0;return _0x2400bd[_0x5508f6(0x16e)](_0xae6be3);},$enemySkillMasteryLevel=function(_0x58d910,_0x23b6cf){const _0x494c38=_0x476ca3;if(!$gameParty[_0x494c38(0xb2)]())return 0x0;const _0x43d1b7=$gameTroop[_0x494c38(0x173)]()[_0x58d910];if(!_0x43d1b7)return 0x0;return _0x43d1b7[_0x494c38(0x90)](_0x23b6cf);},$enemySkillMasteryExp=function(_0x446b10,_0x1054b5){const _0x45f59d=_0x476ca3;if(!$gameParty[_0x45f59d(0xb2)]())return 0x0;const _0x1f280a=$gameTroop[_0x45f59d(0x173)]()[enemyIndex];if(!_0x1f280a)return 0x0;return _0x1f280a[_0x45f59d(0x16e)](_0x1054b5);};VisuMZ[_0x476ca3(0xb9)]['Game_Actor_setup']=Game_Actor[_0x476ca3(0x183)][_0x476ca3(0x150)],Game_Actor[_0x476ca3(0x183)]['setup']=function(_0x3f3051){const _0x426b03=_0x476ca3;VisuMZ[_0x426b03(0xb9)][_0x426b03(0xd5)][_0x426b03(0x165)](this,_0x3f3051),this[_0x426b03(0x17a)]();},VisuMZ[_0x476ca3(0xb9)]['Game_Enemy_setup']=Game_Enemy[_0x476ca3(0x183)][_0x476ca3(0x150)],Game_Enemy[_0x476ca3(0x183)][_0x476ca3(0x150)]=function(_0x52b780,_0x59a26b,_0x2580cc){const _0x3e99c2=_0x476ca3;VisuMZ[_0x3e99c2(0xb9)][_0x3e99c2(0xe6)][_0x3e99c2(0x165)](this,_0x52b780,_0x59a26b,_0x2580cc),this['setupStartingSkillMasteries']();},Window_Base[_0x476ca3(0xa9)]={'masteryFmt':VisuMZ[_0x476ca3(0xb9)]['Settings'][_0x476ca3(0x10b)][_0x476ca3(0xcc)]??_0x476ca3(0x12a),'maxGaugeWidth':VisuMZ[_0x476ca3(0xb9)]['Settings'][_0x476ca3(0x10b)][_0x476ca3(0xd1)]??0x180,'gaugeColor1':VisuMZ['SkillMastery'][_0x476ca3(0x142)][_0x476ca3(0x10b)][_0x476ca3(0x16f)]??0xc,'gaugeColor2':VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x142)][_0x476ca3(0x10b)][_0x476ca3(0x149)]??0x4,'gaugeStyle':VisuMZ[_0x476ca3(0xb9)]['Settings'][_0x476ca3(0x10b)][_0x476ca3(0x107)]??'growth'},VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x136)]=Window_Base[_0x476ca3(0x183)][_0x476ca3(0x9c)],Window_Base[_0x476ca3(0x183)][_0x476ca3(0x9c)]=function(_0x1ad8f7,_0x454f56,_0x43467b,_0x47a16e){const _0x434c96=_0x476ca3;this[_0x434c96(0x172)]&&DataManager['isSkill'](_0x1ad8f7)&&(this[_0x434c96(0xb3)]=VisuMZ[_0x434c96(0xb9)][_0x434c96(0x138)](this['_actor'],_0x1ad8f7),this['drawSkillMastery'](_0x1ad8f7,_0x454f56,_0x43467b,_0x47a16e)),VisuMZ[_0x434c96(0xb9)]['Window_Base_drawItemName'][_0x434c96(0x165)](this,_0x1ad8f7,_0x454f56,_0x43467b,_0x47a16e),this[_0x434c96(0xb3)]!==undefined&&(_0x1ad8f7[_0x434c96(0xe8)]=this[_0x434c96(0xb3)],this[_0x434c96(0xb3)]=undefined);},VisuMZ[_0x476ca3(0xb9)][_0x476ca3(0x138)]=function(_0x354f37,_0x5ae89f){const _0x4ee8e0=_0x476ca3,_0x46f073=_0x5ae89f[_0x4ee8e0(0xe8)],_0x226107=_0x354f37['skillMasteryLevel'](_0x5ae89f['id']);if(_0x226107>0x0){if(_0x4ee8e0(0x14e)===_0x4ee8e0(0x14e)){const _0x4a92f3=Window_Base[_0x4ee8e0(0xa9)][_0x4ee8e0(0xcc)];_0x5ae89f[_0x4ee8e0(0xe8)]=_0x4a92f3[_0x4ee8e0(0xc3)](_0x46f073,_0x226107);}else{_0x465774[_0x4ee8e0(0xcb)](_0x1e46a8[_0x4ee8e0(0x115)]);const _0x15833a=_0x18614f(_0x2edb5d['$1']),_0x1a9784=_0x54ab96(_0x3c61b4['$2'])[_0x4ee8e0(0x11b)]()[_0x4ee8e0(0xc9)]();this[_0x4ee8e0(0xf7)][_0x1139f8][_0x4ee8e0(0xc4)][_0x1a9784]=_0x15833a,_0x2e57a7[_0x4ee8e0(0x11a)](_0x1a9784);}}return _0x46f073;},Window_Base[_0x476ca3(0x183)][_0x476ca3(0x111)]=function(_0x20553f,_0x4a687c,_0x5aa295,_0x1b4f96){const _0x5ca164=_0x476ca3;if(!this[_0x5ca164(0x172)])return;if(!_0x20553f)return;const _0x45cffc=Window_Base[_0x5ca164(0xa9)];_0x1b4f96=_0x1b4f96||0xa8,_0x4a687c+=ImageManager[_0x5ca164(0xb0)]+0x4,_0x1b4f96-=ImageManager[_0x5ca164(0xb0)]+0x4,_0x1b4f96=Math['min'](_0x1b4f96,_0x45cffc[_0x5ca164(0xd1)]);const _0x2fe523=ColorManager[_0x5ca164(0x96)](_0x45cffc[_0x5ca164(0x16f)]),_0x328c5d=ColorManager[_0x5ca164(0x96)](_0x45cffc[_0x5ca164(0x149)]),_0x46bd7a=_0x45cffc[_0x5ca164(0x107)],_0x3eeeda=this[_0x5ca164(0x172)][_0x5ca164(0x90)](_0x20553f['id']);let _0x41e25d=0x0;if(_0x3eeeda>=DataManager[_0x5ca164(0x15e)](_0x20553f['id']))_0x41e25d=0x1;else{const _0x3d7481=this[_0x5ca164(0x172)][_0x5ca164(0x16e)](_0x20553f['id']),_0x2f1d82=this[_0x5ca164(0x172)][_0x5ca164(0xc8)](_0x20553f['id'],_0x3eeeda+0x1);_0x41e25d=_0x3d7481/_0x2f1d82;}if(Imported[_0x5ca164(0x105)]){const _0x3a9421=(VisuMZ[_0x5ca164(0x143)][_0x5ca164(0x175)](_0x46bd7a)??0xc)[_0x5ca164(0x12d)](0x1,0x20),_0x37ed9b=_0x5aa295+this[_0x5ca164(0x12f)]()-_0x3a9421-0x2,_0x351f3a=ColorManager['gaugeBackColor']();VisuMZ[_0x5ca164(0x143)][_0x5ca164(0x159)]=this['_actor'][_0x5ca164(0xc8)](_0x20553f['id'],_0x3eeeda+0x1),this['contents'][_0x5ca164(0x15d)](_0x46bd7a,_0x4a687c,_0x37ed9b,_0x1b4f96,_0x3a9421,_0x41e25d,_0x351f3a,_0x2fe523,_0x328c5d);}else this['drawGauge'](_0x4a687c,_0x5aa295,_0x1b4f96,_0x41e25d,_0x2fe523,_0x328c5d);},VisuMZ['SkillMastery'][_0x476ca3(0x170)]=Window_Base[_0x476ca3(0x183)]['drawEquipBattleSkillName'],Window_Base['prototype'][_0x476ca3(0xc0)]=function(_0x416f4d,_0x56add9,_0x62ff4b,_0x2d0efc){const _0x4b95d3=_0x476ca3;if(this[_0x4b95d3(0x172)]&&DataManager[_0x4b95d3(0xde)](_0x416f4d)){if(this[_0x4b95d3(0x164)]!==Window_EquipBattleSkillList)this[_0x4b95d3(0xb3)]=VisuMZ[_0x4b95d3(0xb9)][_0x4b95d3(0x138)](this[_0x4b95d3(0x172)],_0x416f4d);else{if('PJkoj'!==_0x4b95d3(0x11c)){if(_0x23865a===_0x4b95d3(0x13e)){const _0x3b13f7=_0xe10e5c[_0x24dcba],_0x2d02a7=0x1+_0x265a69[_0x4b95d3(0x9b)](_0x3b13f7[_0x4b95d3(0x125)]-_0x3b13f7['minTurns'],0x0),_0x9c640f=_0x3b13f7[_0x4b95d3(0x137)]+_0x351817[_0x4b95d3(0xaf)](_0x2d02a7)+_0x5adef4[_0x4b95d3(0x8c)]*_0x306881;this[_0x4b95d3(0xef)][_0x36fedf]=_0x590a8a[_0x4b95d3(0x9b)](this['_stateTurns'][_0xe0b94d],_0x9c640f);}else this['_stateTurns'][_0x35152c]+=_0x5ab265[_0x4b95d3(0x8c)]*_0x3e314e;this[_0x4b95d3(0xef)][_0x394a36]=_0x6d105b['max'](this[_0x4b95d3(0xef)][_0x236d65],0x0);}else this[_0x4b95d3(0xb3)]=_0x416f4d[_0x4b95d3(0xe8)];}this['drawSkillMastery'](_0x416f4d,_0x56add9,_0x62ff4b,_0x2d0efc);}VisuMZ[_0x4b95d3(0xb9)][_0x4b95d3(0x170)][_0x4b95d3(0x165)](this,_0x416f4d,_0x56add9,_0x62ff4b,_0x2d0efc),this[_0x4b95d3(0xb3)]!==undefined&&(_0x416f4d[_0x4b95d3(0xe8)]=this['_originalNamePreMastery'],this[_0x4b95d3(0xb3)]=undefined);};Imported['VisuMZ_2_EquipBattleSkills']&&(VisuMZ['SkillMastery']['Window_EquipBattleSkillList_addEquipBattleSkillsMarkers']=Window_EquipBattleSkillList[_0x476ca3(0x183)][_0x476ca3(0x144)],Window_EquipBattleSkillList[_0x476ca3(0x183)][_0x476ca3(0x144)]=function(_0x20be89){const _0x40e809=_0x476ca3;VisuMZ[_0x40e809(0xb9)]['ChangeSkillName'](this[_0x40e809(0x172)],_0x20be89),VisuMZ['SkillMastery'][_0x40e809(0x8b)]['call'](this,_0x20be89);});;