//=============================================================================
// VisuStella MZ - Battle Voices
// VisuMZ_3_BattleVoices.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_BattleVoices = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleVoices = VisuMZ.BattleVoices || {};
VisuMZ.BattleVoices.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.05] [BattleVoices]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_Voices_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you to create battle voice sets and apply them to actors
 * and enemies in your game. There are voice lines for various occassions in
 * battle ranging from simple conditions like saying something at the start of
 * battle to using specific hit types for skills and even going as far as
 * having lines to say upon the adding and removing of states.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Create battle voice sets that you can apply to actors and enemies alike.
 * * Voice sets are created in the Plugin Parameters and then, those voice sets
 *   are then bound to various battlers to help reduce the clutter found in the
 *   noteboxes of actors and enemies.
 * * Enemies with different trait variations can have different voice sets.
 * * Voice sets offer lines for a variety of situations such as the start of
 *   battle, victory, escaping, failing to escape, and starting action input.
 * * Each situation can have multiple voice lines, which will be randomly
 *   picked upon meeting the situation. This helps reduce the monotony of each
 *   battle sounding the same.
 * * Different types of actions can have different voice lines. These range
 *   from using basic attacks, basic guarding, to using skills that target
 *   allies and enemies for different hit types, or even using items.
 * * Upon performing actions and attack motions, different sounds can be played
 *   in addition to extra sounds being played for landing a critical hit,
 *   defeating an enemy, or missing an attack.
 * * Voice lines can differ upon receiving damage or healing, depending on the
 *   amount of damage or healing received, and/or whether or not the receiving
 *   battler is guarding.
 * * Buffs, debuffs, and states all have voice lines for their applying and
 *   removal scenarios.
 * * Unique voice lines can be played and called upon via Plugin Commands.
 * * An option can be toggled to hear battle voices or not.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * VisuMZ_2_VoiceActControl
 *
 * If the VisuMZ Voice Acting Control plugin is installed in the same project,
 * then any of the voice clips found in a voice set is played through the voice
 * audio channel instead of the sound effect audio channel.
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
 * VisuMZ_1_ElementStatusCore
 * 
 * Enemies can have different voice sets, voice volumes, voice pitches, and
 * voice panning depending on their trait sets. This way, you can do things
 * like separate different voice sets for the same enemy species but of
 * different gender traits, different element traits, different blessings, etc.
 * 
 * ---
 * 
 * VisuMZ_1_SkillsStatesCore
 * 
 * States will play battle voice lines when applied or removed. The VisuMZ
 * Skills and States Core plugin allows states to be differentiated between
 * positive and negative states using the <Positive State> and <Negative State>
 * notetags. Different battle voice lines can be played depending on the type
 * of state being added in addition to neutral states.
 * 
 * ---
 *
 * VisuMZ_3_VictoryAftermath
 *
 * An extra battle voice line can be played for if the Victory Aftermath is
 * installed. It is a voice line that will appear for an actor upon level up.
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
 * === Voice Set-Related Notetags ===
 * 
 * ---
 *
 * <Voice Set: name>
 *
 * - Used for: Actor, Enemy Notetags
 * - Declares a battle voice set for the target actor/enemy to use.
 * - Replace 'name' with the name of the battle voice set used in the Plugin
 *   Parameters to declare the contents of that battle voice set to be played.
 *   - If you are unsure which, it's the Plugin Parameter that says "Name" and
 *     in its decription will show "<Voice Set: name>".
 * - If nothing is declared, the actor/enemy will not use battle voice lines.
 * - This can be changed for actors via Plugin Commands.
 * 
 * ---
 * 
 * <Language lang Voice Set: name>
 * 
 * - Used for: Actor, Enemy Notetags
 * - Requires VisuMZ_2_VoiceActControl and Voice Language Switching enabled.
 * - Declares a battle voice set for the target actor/enemy to use when using
 *   a certain voice language.
 * - Replace 'lang' with the language name this voice set is used for.
 *   - Bengali, Chinese, Czech, Danish, Dutch, English, Finnish, French,
 *     German, Greek, Hindi, Hungarian, Indonesian, Italian, Japanese, Korean,
 *     Norwegian, Polish, Portuguese, Romanian, Russian, Slovak, Spanish,
 *     Swedish, Tamil, Thai, Turkish
 * - Replace 'name' with the name of the battle voice set used in the Plugin
 *   Parameters to declare the contents of that battle voice set to be played.
 *   - If you are unsure which, it's the Plugin Parameter that says "Name" and
 *     in its decription will show "<Voice Set: name>".
 * - Insert multiple of these notetags to have different voice sets for
 *   different voiced languages.
 * - This can be changed for actors via Plugin Commands.
 *
 * ---
 *
 * <Voice Set Volume: x>
 * <Voice Set Pitch: x>
 * <Voice Set Pan: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Adjusts the battle voice set's volume, pitch, and panning.
 * - Replace 'x' with number values representing the setting you want used.
 *   - For volume, use a number between 0 and 100. 100 is full volume.
 *   - For pitch, use a number between 50 and 150. 100 is neutral.
 *   - For pan, use a number between -100 and 100. 0 is neutral.
 * - If these notetags are not used, the actor/enemy will use the settings
 *   found in the default Plugin Parameters instead.
 *
 * ---
 *
 * <Trait Voice Sets>
 *  type Set: name
 *  type Volume: value
 *  type Pitch: value
 *  type Pan: value
 * 
 *  type Set: name
 *  type Volume: value
 *  type Pitch: value
 *  type Pan: value
 * 
 *  type Set: name
 *  type Volume: value
 *  type Pitch: value
 *  type Pan: value
 * </Trait Voice Sets>
 *
 * - Used for: Enemy Notetags
 * - Requires VisuMZ_1_ElementStatusCore!
 * - Allows enemies that have different trait variants to have different battle
 *   voice sets, such as different voices for Male and Female, or different
 *   elements, blessings, etc.
 * - Replace 'type' with the name of an associated Trait Set type found in the
 *   Plugin Parameters. This can be for any Trait Set except 'SubElement'.
 * - Replace 'name' with the name of the battle voice set used in the Plugin
 *   Parameters to declare the contents of that battle voice set to be played.
 *   - If you are unsure which, it's the Plugin Parameter that says "Name" and
 *     in its decription will show "<Voice Set: name>".
 * - Replace 'value' with number values representing the setting you want used.
 *   - For volume, use a number between 0 and 100. 100 is full volume.
 *   - For pitch, use a number between 50 and 150. 100 is neutral.
 *   - For pan, use a number between -100 and 100. 0 is neutral.
 * - If none of these are used, then the enemy will not have any battle voices.
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
 * === Actor Plugin Command ===
 * 
 * ---
 *
 * Actor: Change Battle Voice Set (Normal)
 * - Changes battle voice set data for target actor.
 *
 *   Actor ID:
 *   - Select which Actor ID(s) to alter the voice data for.
 *
 *   Voice Set Name:
 *   - What is the name of the voice set?
 *
 *     Voice Set Volume:
 *     - Change the volume of the voice set sound effects played.
 *
 *     Voice Set Pitch:
 *     - Change the pitch of the voice set sound effects played.
 *
 *     Voice Set Pan:
 *     - Change the pan of the voice set sound effects played.
 *
 * ---
 *
 * Actor: Change Battle Voice Set (Language)
 * - Changes battle voice set data for different languages to target actor.
 * - Requires VisuMZ_2_VoiceActControl and audio switching enabled!
 *
 *   Actor ID:
 *   - Select which Actor ID(s) to alter the voice data for.
 * 
 *   Language Sets:
 *   - Determine which line is used based on which voice language the player
 *     has selected.
 *
 *   Default Set Name:
 *   - What is the name of the default voice set?
 *
 *   Voice Set Volume:
 *   - Change the volume of the voice set sound effects played.
 *
 *   Voice Set Pitch:
 *   - Change the pitch of the voice set sound effects played.
 *
 *   Voice Set Pan:
 *   - Change the pan of the voice set sound effects played.
 *
 * ---
 * 
 * === Mute Plugin Commands ===
 * 
 * ---
 * 
 * Mute: All Voices
 * - Mutes/unmutes all battle voices.
 * - For those times you don't want battle voices interrupt important moments.
 * 
 *   Mute/Unmute?:
 *   - Mutes/unmutes all battle voices.
 * 
 * ---
 * 
 * === Action Sequences - Voice ===
 * 
 * ---
 *
 * VOICE: Common Line
 * - Plays a common voice line from target battler(s).
 * - Requires VisuMZ_3_BattleVoices!
 *
 *   Speaker Target(s):
 *   - Select unit(s) to play voice lines from.
 *
 *   Voice Line:
 *   - What voice line do you wish to play?
 *
 * ---
 *
 * VOICE: Play Special Line
 * - Plays a special voice line from target battler(s).
 * - Requires VisuMZ_3_BattleVoices!
 *
 *   Speaker Target(s):
 *   - Select unit(s) to play voice lines from.
 *
 *   Voice Line Type:
 *   - What voice line type do you wish to play?
 *     - Action Name
 *     - Chant Line
 *     - Item Name
 *     - Skill Name
 *     - Spell Name
 *     - Unique Lines
 *
 *   Name / Letter:
 *   - What voice letter/name do you want to play?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings for the Battle Voices Plugin Parameters.
 *
 * ---
 *
 * For <Voice Set: name>
 * 
 *   Voice Sets:
 *   - A list of voice sets to choose from and apply to battlers with the
 *     <Voice Set: name> notetag.
 *   - For more information, look under the 'Voice Set Settings' section.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 * 
 * ---
 * 
 * Voice Line Batches
 * 
 *   Action Name Sets:
 *   - A list of voice lines that are played when using skills with the
 *     <Voice Action Name: x> notetag.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 * 
 *   Chant Lines Sets:
 *   - A list of voice lines that are played when using skills with the
 *     <Voice Chant Line: x> notetag.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 * 
 *   Item Name Sets:
 *   - A list of voice lines that are played when using skills with the
 *     <Voice Item Name: x> notetag.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 * 
 *   Skill Name Sets:
 *   - A list of voice lines that are played when using skills with the
 *     <Voice Skill Name: x> notetag.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 * 
 *   Spell Name Sets:
 *   - A list of voice lines that are played when using skills with the
 *     <Voice Spell Name: x> notetag.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 * 
 *   Unique Line Sets:
 *   - A list of voice lines that are played when using Plugin Commands
 *     that call them.
 *   - Using an already existing "Name" will link all these lines to that named
 *     battle voice set.
 *
 * ---
 *
 * Default Sound Settings
 * 
 *   Volume:
 *   - Default volume of the voice set sound effects played.
 * 
 *   Pitch:
 *   - Default pitch of the voice set sound effects played.
 * 
 *   Pan:
 *   - Default pan of the voice set sound effects played.
 *
 * ---
 *
 * Options Settings
 * 
 *   Add Option?:
 *   - Add the 'Battle Voices' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 * 
 *   Allow Self Response?:
 *   - Allow active battler to play response voice lines to his/her own
 *     actions?
 * 
 *   Delay Victory MS:
 *   - Delay victory phrases by how many milliseconds?
 *   - 1000 milliseconds = 1 second.
 * 
 *   Override Last Sound:
 *   - Stops last clip made by battler to play a new one?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Voice Set Settings
 * ============================================================================
 *
 * You can declare multiple battle voice sets here and what voice lines will be
 * played under specific conditions and/or scenarios. If there are multiple
 * filenames listed, then a random voice line will be picked from the batch.
 * The volume, pitch, and pan will be the default value used or whatever
 * specialized setting you made using notetags.
 * 
 * If a battle voice set has a "Name" that is later used in the "Voice Line
 * Batches" lists, then those voice line batches will be added to this voice
 * set to extend it.
 *
 * ---
 *
 * MOST IMPORTANT
 * 
 *   Name:
 *   - Name of this Voice Set. The name will be used as the name for the
 *     <Voice Set: name> notetag.
 * 
 * ---
 * 
 * Battle Phases
 * 
 *   On Battle Start:
 *   - Filename of the voice sound file for a random party member speaking at
 *     the start of battle.
 * 
 *   On Battle Input:
 *   - Filename of the voice sound file for a party member that is ready to
 *     input actions.
 * 
 *   On Battle Victory:
 *   - Filename of the voice sound file for a random party member speaking upon
 *     battle victory.
 * 
 *   Victory => Level Up:
 *   - Filename of the voice sound file for party members that level up in
 *     battle. Requires VisuMZ_3_VictoryAftermath!
 * 
 *   Escape => Success:
 *   - Filename of the voice sound file for a random party member speaking upon
 *     successfully escaping battle.
 * 
 *   Escape => Failure:
 *   - Filename of the voice sound file for a random party member speaking upon
 *     failing to escaping battle.
 *
 * ---
 *
 * On Action Start
 * 
 *   Basic Action:
 * 
 *     Regular Attack:
 *     - Filename of the voice sound file for performing the start of a basic
 *       regular attack.
 * 
 *     Regular Guard:
 *     - Filename of the voice sound file for performing the start of a basic
 *       regular guard.
 * 
 *   Skill Usage > For Allies
 * 
 *     Certain Hit:
 *     - Filename of the voice sound file for performing the start of a skill-
 *       based certain hit action for allies.
 * 
 *     Physical:
 *     - Filename of the voice sound file for performing the start of a skill-
 *       based physical hit action for allies.
 * 
 *     Magical:
 *     - Filename of the voice sound file for performing the start of a skill-
 *       based magical hit action for allies.
 * 
 *   Skill Usage > For Enemies:
 * 
 *     Certain Hit:
 *     - Filename of the voice sound file for performing the start of a skill-
 *       based certain hit action for enemies.
 * 
 *     Physical:
 *     - Filename of the voice sound file for performing the start of a skill-
 *       based physical hit action for enemies.
 * 
 *     Magical:
 *     - Filename of the voice sound file for performing the start of a skill-
 *       based magical hit action for enemies.
 * 
 *   Item Usage:
 * 
 *     For Allies:
 *     - Filename of the voice sound file for performing the start of an item-
 *       based action for allies.
 * 
 *     For Enemies:
 *     - Filename of the voice sound file for performing the start of an item-
 *       based action for enemies.
 * 
 * ---
 * 
 * Perform Action:
 * 
 *   Basic Action:
 * 
 *     Attack Motion:
 *     - Filename of the voice sound file for performing an attack's action.
 * 
 *     Critical Action:
 *     - Filename of the voice sound file for performing an action and landing
 *       a critical hit.
 * 
 *     Defeat Opponent:
 *     - Filename of the voice sound file for performing an action and
 *       defeating an opponent.
 * 
 *     Missed Action:
 *     - Filename of the voice sound file for performing an action but missing.
 * 
 *   Skill Usage:
 * 
 *     Certain Hit:
 *     - Filename of the voice sound file for performing the action of a
 *       Certain Hit type skill.
 * 
 *     Physical:
 *     - Filename of the voice sound file for performing the action of a
 *       physical hit type skill.
 * 
 *     Magical:
 *     - Filename of the voice sound file for performing the action of a
 *       magical hit type skill.
 * 
 * ---
 * 
 * On HP Change:
 * 
 *   Life State:
 * 
 *     On Death:
 *     - Filename of the voice sound file when the battler receives enough
 *       damage to be fatal.
 * 
 *     On Revive:
 *     - Filename of the voice sound file when the battler receives healing and
 *       revives.
 * 
 *   No Change:
 * 
 *     Damage <= 0%:
 *     - Filename of the voice sound file when the battler receives no damage
 *       whatsoever.
 * 
 *   On Damage:
 * 
 *     Damage < 25%:
 *     - Filename of the voice sound file when the battler receives damage less
 *       than 25% of MaxHP.
 * 
 *     Damage < 50%:
 *     - Filename of the voice sound file when the battler receives damage less
 *       than 50% of MaxHP.
 * 
 *     Damage >= 50%:
 *     - Filename of the voice sound file when the battler receives damage more
 *       than 50% of MaxHP.
 * 
 *     Guarding Damage:
 *     - Filename of the voice sound file when the battler receives damage
 *       while guarding.
 * 
 *   On Recovery:
 * 
 *     Recovery < 25%:
 *     - Filename of the voice sound file when the battler receives healing
 *       more than 25% of MaxHP.
 * 
 *     Recovery < 50%:
 *     - Filename of the voice sound file when the battler receives healing
 *       more than 25% of MaxHP.
 * 
 *     Recovery >= 50%:
 *     - Filename of the voice sound file when the battler receives healing
 *       more than 25% of MaxHP.
 * 
 *   On Action Result:
 * 
 *     On Miss/Evasion:
 *     - Filename of the voice sound file when the battler evades a physical or
 *       certain hit action.
 * 
 *     On Magic Evasion:
 *     - Filename of the voice sound file when the battler evades a magical
 *       action.
 * 
 *     On Counter:
 *     - Filename of the voice sound file when the battler counters an action.
 * 
 *     On Reflection:
 *     - Filename of the voice sound file when the battler reflects an action.
 * 
 *     On Substitute:
 *     - Filename of the voice sound file when the battler substitutes for an
 *       action.
 * 
 * ---
 * 
 * Buff/Debuff Related:
 * 
 *   On Buff Apply:
 *   - Filename of the voice sound file when the battler receives a buff or
 *     stacks a buff to a higher degree.
 * 
 *   On Buff Remove:
 *   - Filename of the voice sound file when the battler has a buff removed.
 * 
 *   On Debuff Apply:
 *   - Filename of the voice sound file when the battler receives a debuff or
 *     stacks a debuff to a higher degree.
 * 
 *   On Debuff Remove:
 *   - Filename of the voice sound file when the battler has a debuff
 *     removed.
 * 
 * ---
 * 
 * State Related
 * 
 *   Positive States:
 * 
 *     On State Apply:
 *     - Filename of the voice sound file when the battler receives a positive
 *       state.
 *     - Requires VisuMZ_1_SkillsStatesCore!
 * 
 *     On State Remove:
 *     - Filename of the voice sound file when the battler loses a positive
 *       state.
 *     - Requires VisuMZ_1_SkillsStatesCore!
 * 
 *   Negative States:
 * 
 *     On State Apply:
 *     - Filename of the voice sound file when the battler receives a negative
 *       state.
 *     - Requires VisuMZ_1_SkillsStatesCore!
 * 
 *     On State Remove:
 *     - Filename of the voice sound file when the battler loses a negative
 *       state.
 *     - Requires VisuMZ_1_SkillsStatesCore!
 * 
 *   Neutral States:
 *   
 *     On State Apply:
 *     - Filename of the voice sound file when the battler receives a neutral
 *       state.
 * 
 *     On State Remove:
 *     - Filename of the voice sound file when the battler loses a neutral
 *       state.
 * 
 * ---
 * 
 * Plugin Compatibility > VisuMZ_2_CharaCreationSys:
 * 
 *   Selectable?:
 *   - Is voice set selectable in the Character Creation System?
 *   - Requires VisuMZ_2_CharaCreationSys!
 * 
 *   Voice Preview:
 *   - Filename of the voice sound file to preview.
 *   - Requires VisuMZ_2_CharaCreationSys!
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
 * * Arisu
 * * Irina
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.05: May 16, 2024
 * * Feature Update!
 * ** "No Damage" voice will no longer play when recovering HP at 100%. Voices
 *    will instead play the "recover < 25%" sound bit. Update made by Arisu.
 * 
 * Version 1.04: April 18, 2024
 * * Compatibility Update!
 * ** Added compatibility with certain battle systems like ATB and CTB so that
 *    the input lines won't go through if any enemies are left alive.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Automated battle voices will no longer be registered as replay voices.
 *    Update made by Irina.
 * ** Changed "Damage <= 0%" category to "No Change" in order to not draw
 *    confusion in case users may put hurt sounds in the <= 0% category.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Option Settings > Delay Victory MS:
 * **** Delay victory phrases by how many milliseconds?
 * 
 * Version 1.03: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where player-created characters lacking a voice set would no
 *    longer crash battles. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Olivia:
 * *** Mute: All Voices
 * **** Mutes/unmutes all battle voices.
 * **** For those times you don't want battle voices interrupt important
 *      moments.
 * 
 * Version 1.02: January 18, 2024
 * * Compatibility Update!
 * ** Compatibility added for Voice Acting Control's new Voice Language Switch
 *    features. Updated by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Irina:
 * *** <Language lang Voice Set: name>
 * **** Declares a battle voice set for the target actor/enemy to use when
 *      using a certain voice language.
 * ** New Plugin Command added by Irina:
 * *** Actor: Change Battle Voice Set (Language)
 * **** Changes battle voice set data for different languages to target actor.
 * **** Requires VisuMZ_2_VoiceActControl and audio switching enabled!
 * 
 * Version 1.01: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a problem where certain conditions wouldn't play voice lines.
 *    Fix made by Arisu.
 *
 * Version 1.00 Official Release Date: August 30, 2023
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
 * @command ActorChangeBattleVoiceSet
 * @text Actor: Change Battle Voice Set (Normal)
 * @desc Changes battle voice set data for target actor.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID(s) to alter the voice data for.
 * @default 1
 * 
 * @arg VoiceSet:str
 * @text Voice Set Name
 * @desc What is the name of the voice set?
 * @default Untitled
 *
 * @arg volume:num
 * @text Voice Set Volume
 * @parent VoiceSet:str
 * @type number
 * @max 100
 * @desc Change the volume of the voice set sound effects played.
 * @default 100
 *
 * @arg pitch:num
 * @text Voice Set Pitch
 * @parent VoiceSet:str
 * @type number
 * @desc Change the pitch of the voice set sound effects played.
 * @default 100
 *
 * @arg pan:num
 * @text Voice Set Pan
 * @parent VoiceSet:str
 * @desc Change the pan of the voice set sound effects played.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeBattleVoiceSetLang
 * @text Actor: Change Battle Voice Set (Language)
 * @desc Changes battle voice set data for different languages.
 * Requires VisuMZ_2_VoiceActControl and audio switching enabled!
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID(s) to alter the voice data for.
 * @default 1
 *
 * @arg Language:struct
 * @text Language Sets
 * @parent General
 * @type struct<VoiceLang>
 * @desc Determine which line is used based on which voice language
 * the player has selected.
 * @default {"Bengali:str":"","Chinese:str":"","Czech:str":"","Danish:str":"","Dutch:str":"","English:str":"","Finnish:str":"","French:str":"","German:str":"","Greek:str":"","Hindi:str":"","Hungarian:str":"","Indonesian:str":"","Italian:str":"","Japanese:str":"","Korean:str":"","Norwegian:str":"","Polish:str":"","Portuguese:str":"","Romanian:str":"","Russian:str":"","Slovak:str":"","Spanish:str":"","Swedish:str":"","Tamil:str":"","Thai:str":"","Turkish:str":""}
 * 
 * @arg VoiceSet:str
 * @text Default Set Name
 * @desc What is the name of the default voice set?
 * @default Untitled
 *
 * @arg volume:num
 * @text Voice Set Volume
 * @type number
 * @max 100
 * @desc Change the volume of the voice set sound effects played.
 * @default 100
 *
 * @arg pitch:num
 * @text Voice Set Pitch
 * @type number
 * @desc Change the pitch of the voice set sound effects played.
 * @default 100
 *
 * @arg pan:num
 * @text Voice Set Pan
 * @desc Change the pan of the voice set sound effects played.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Mute
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MuteAllVoices
 * @text Mute: All Voices
 * @desc Mutes/unmutes all battle voices. For those times you don't
 * want battle voices interrupt important moments.
 *
 * @arg Mute:eval
 * @text Mute/Unmute?
 * @type boolean
 * @on Mute
 * @off Unmute
 * @desc Mutes/unmutes all battle voices.
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
 * @param BattleVoices
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param VoiceSetCategory
 * @text For <Voice Set: name>
 *
 * @param VoiceSets:arraystruct
 * @text Voice Sets
 * @parent VoiceSetCategory
 * @type struct<VoiceSet>[]
 * @desc A list of voice sets to choose from and apply to battlers
 * with the <Voice Set: name> notetag.
 * @default []
 * 
 * @param LineBatches
 * @text Voice Line Batches
 *
 * @param ActionNames:arraystruct
 * @text Action Name Sets
 * @parent LineBatches
 * @type struct<ActionName>[]
 * @desc A list of voice lines that are played when using skills
 * with the <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ChantLines:arraystruct
 * @text Chant Lines Sets
 * @parent LineBatches
 * @type struct<ChantLine>[]
 * @desc A list of voice lines that are played when using skills
 * with the <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ItemNames:arraystruct
 * @text Item Name Sets
 * @parent LineBatches
 * @type struct<ItemName>[]
 * @desc A list of voice lines that are played when using skills
 * with the <Voice Item Name: x> notetag.
 * @default []
 *
 * @param SkillNames:arraystruct
 * @text Skill Name Sets
 * @parent LineBatches
 * @type struct<SkillName>[]
 * @desc A list of voice lines that are played when using skills
 * with the <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SpellNames:arraystruct
 * @text Spell Name Sets
 * @parent LineBatches
 * @type struct<SpellName>[]
 * @desc A list of voice lines that are played when using skills
 * with the <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param UniqueLines:arraystruct
 * @text Unique Line Sets
 * @parent LineBatches
 * @type struct<UniqueLine>[]
 * @desc A list of voice lines that are played when using
 * Plugin Commands that call them.
 * @default []
 * 
 * @param DefaultSound
 * @text Default Sound Settings
 *
 * @param volume:num
 * @text Volume
 * @parent DefaultSound
 * @type number
 * @max 100
 * @desc Default volume of the voice set sound effects played.
 * @default 100
 *
 * @param pitch:num
 * @text Pitch
 * @parent DefaultSound
 * @type number
 * @desc Default pitch of the voice set sound effects played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @parent DefaultSound
 * @desc Default pan of the voice set sound effects played.
 * @default 0
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options settings for this plugin.
 * @default {"Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Battle Voices"}
 *
 * @param AllowSelfResponse:eval
 * @text Allow Self Response?
 * @parent Options:struct
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow active battler to play response voice lines to
 * his/her own actions?
 * @default false
 *
 * @param DelayVictoryMS:num
 * @text Delay Victory MS
 * @parent DefaultSound
 * @type number
 * @desc Delay victory phrases by how many milliseconds?
 * 1000 milliseconds = 1 second.
 * @default 1500
 *
 * @param Override:eval
 * @text Override Last Sound
 * @parent Options:struct
 * @type boolean
 * @on Override
 * @off Leave Alone
 * @desc Stops last clip made by battler to play a new one?
 * @default true
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
 * Voice Set Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VoiceSet:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param BattlePhases
 * @text Battle Phases
 *
 * @param BattleStart:arraystr
 * @text On Battle Start
 * @parent BattlePhases
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for a random party member
 * speaking at the start of battle.
 * @default []
 *
 * @param BattleInput:arraystr
 * @text On Battle Input
 * @parent BattlePhases
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for a party member that
 * is ready to input actions.
 * @default []
 *
 * @param BattleVictory:arraystr
 * @text On Battle Victory
 * @parent BattlePhases
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for a random party member
 * speaking upon battle victory.
 * @default []
 *
 * @param BattleVictoryLevelUp:arraystr
 * @text Victory => Level Up
 * @parent BattlePhases
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for party members that
 * level up in battle. Requires VisuMZ_3_VictoryAftermath!
 * @default []
 *
 * @param BattleEscapeSuccess:arraystr
 * @text Escape => Success
 * @parent BattlePhases
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for a random party member
 * speaking upon successfully escaping battle.
 * @default []
 *
 * @param BattleEscapeFailure:arraystr
 * @text Escape => Failure
 * @parent BattlePhases
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for a random party member
 * speaking upon failing to escaping battle.
 * @default []
 * 
 * @param ActionStart
 * @text On Action Start
 * 
 * @param ActionStartBasic
 * @text Basic Action
 * @parent ActionStart
 *
 * @param ActionStartBasicAttack:arraystr
 * @text Regular Attack
 * @parent ActionStartBasic
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a basic regular attack.
 * @default []
 *
 * @param ActionStartBasicGuard:arraystr
 * @text Regular Guard
 * @parent ActionStartBasic
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a basic regular guard.
 * @default []
 * 
 * @param ActionStartSkill
 * @text Skill Usage
 * @parent ActionStart
 * 
 * @param ActionStartSkillAlly
 * @text For Allies
 * @parent ActionStartSkill
 *
 * @param ActionStartSkillAllyCertainHit:arraystr
 * @text Certain Hit
 * @parent ActionStartSkillAlly
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a skill-based certain hit action for allies.
 * @default []
 *
 * @param ActionStartSkillAllyPhysical:arraystr
 * @text Physical
 * @parent ActionStartSkillAlly
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a skill-based physical hit action for allies.
 * @default []
 *
 * @param ActionStartSkillAllyMagical:arraystr
 * @text Magical
 * @parent ActionStartSkillAlly
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a skill-based magical hit action for allies.
 * @default []
 * 
 * @param ActionStartSkillEnemy
 * @text For Enemies
 * @parent ActionStartSkill
 *
 * @param ActionStartSkillEnemyCertainHit:arraystr
 * @text Certain Hit
 * @parent ActionStartSkillEnemy
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a skill-based certain hit action for enemies.
 * @default []
 *
 * @param ActionStartSkillEnemyPhysical:arraystr
 * @text Physical
 * @parent ActionStartSkillEnemy
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a skill-based physical hit action for enemies.
 * @default []
 *
 * @param ActionStartSkillEnemyMagical:arraystr
 * @text Magical
 * @parent ActionStartSkillEnemy
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of a skill-based magical hit action for enemies.
 * @default []
 * 
 * @param ActionStartItem
 * @text Item Usage
 * @parent ActionStart
 *
 * @param ActionStartItemAlly:arraystr
 * @text For Allies
 * @parent ActionStartItem
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of an item-based action for allies.
 * @default []
 *
 * @param ActionStartItemEnemy:arraystr
 * @text For Enemies
 * @parent ActionStartItem
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the start
 * of an item-based action for enemies.
 * @default []
 * 
 * @param PerformAction
 * @text Perform Action
 * 
 * @param PerformActionBasic
 * @text Basic Action
 * @parent PerformAction
 *
 * @param PerformActionBasicAttack:arraystr
 * @text Attack Motion
 * @parent PerformActionBasic
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing an
 * attack's action.
 * @default []
 *
 * @param PerformActionCritical:arraystr
 * @text Critical Action
 * @parent PerformActionBasic
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing an
 * action and landing a critical hit.
 * @default []
 *
 * @param PerformActionDefeatFoe:arraystr
 * @text Defeat Opponent
 * @parent PerformActionBasic
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing an
 * action and defeating an opponent.
 * @default []
 *
 * @param PerformActionMiss:arraystr
 * @text Missed Action
 * @parent PerformActionBasic
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing an
 * action but missing.
 * @default []
 * 
 * @param PerformActionSkill
 * @text Skill Usage
 * @parent PerformAction
 *
 * @param PerformActionSkillCertainHit:arraystr
 * @text Certain Hit
 * @parent PerformActionSkill
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the action
 * of a Certain Hit type skill.
 * @default []
 *
 * @param PerformActionSkillPhysical:arraystr
 * @text Physical
 * @parent PerformActionSkill
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the action
 * of a physical hit type skill.
 * @default []
 *
 * @param PerformActionSkillMagical:arraystr
 * @text Magical
 * @parent PerformActionSkill
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file for performing the action
 * of a magical hit type skill.
 * @default []
 * 
 * @param HpChange
 * @text On HP Change
 * 
 * @param HpChangeLifeState
 * @text Life State
 * @parent HpChange
 *
 * @param HpChangeDeath:arraystr
 * @text On Death
 * @parent HpChangeLifeState
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * enough damage to be fatal.
 * @default []
 *
 * @param HpChangeRevive:arraystr
 * @text On Revive
 * @parent HpChangeLifeState
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * healing and revives.
 * @default []
 * 
 * @param HpChangeNoChange
 * @text No Change
 * @parent HpChange
 *
 * @param HpChangeDamageNone:arraystr
 * @text Damage <= 0%
 * @parent HpChangeDamage
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * no damage whatsoever.
 * @default []
 * 
 * @param HpChangeDamage
 * @text On Damage
 * @parent HpChange
 *
 * @param HpChangeDamageLight:arraystr
 * @text Damage < 25%
 * @parent HpChangeDamage
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * damage less than 25% of MaxHP.
 * @default []
 *
 * @param HpChangeDamageMedium:arraystr
 * @text Damage < 50%
 * @parent HpChangeDamage
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * damage less than 50% of MaxHP.
 * @default []
 *
 * @param HpChangeDamageHeavy:arraystr
 * @text Damage >= 50%
 * @parent HpChangeDamage
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * damage more than 50% of MaxHP.
 * @default []
 *
 * @param HpChangeDamageGuard:arraystr
 * @text Guarding Damage
 * @parent HpChangeDamage
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * damage while guarding.
 * @default []
 * 
 * @param HpChangeRecover
 * @text On Recovery
 * @parent HpChange
 *
 * @param HpChangeRecoverLight:arraystr
 * @text Recovery < 25%
 * @parent HpChangeRecover
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * healing more than 25% of MaxHP.
 * @default []
 *
 * @param HpChangeRecoverMedium:arraystr
 * @text Recovery < 50%
 * @parent HpChangeRecover
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * healing more than 25% of MaxHP.
 * @default []
 *
 * @param HpChangeRecoverHeavy:arraystr
 * @text Recovery >= 50%
 * @parent HpChangeRecover
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * healing more than 25% of MaxHP.
 * @default []
 * 
 * @param ActionResult
 * @text On Action Result
 *
 * @param ActionResultEvasion:arraystr
 * @text On Miss/Evasion
 * @parent ActionResult
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler evades
 * a physical or certain hit action.
 * @default []
 *
 * @param ActionResultMagicEvasion:arraystr
 * @text On Magic Evasion
 * @parent ActionResult
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler evades
 * a magical action.
 * @default []
 *
 * @param ActionResultCounter:arraystr
 * @text On Counter
 * @parent ActionResult
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler counters
 * an action.
 * @default []
 *
 * @param ActionResultReflection:arraystr
 * @text On Reflection
 * @parent ActionResult
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler reflects
 * an action.
 * @default []
 *
 * @param ActionResultSubstitute:arraystr
 * @text On Substitute
 * @parent ActionResult
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler
 * substitutes for an action.
 * @default []
 * 
 * @param BuffRelated
 * @text Buff/Debuff Related
 *
 * @param BuffAdd:arraystr
 * @text On Buff Apply
 * @parent BuffRelated
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * a buff or stacks a buff to a higher degree.
 * @default []
 *
 * @param BuffRemove:arraystr
 * @text On Buff Remove
 * @parent BuffRelated
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler has
 * a buff removed.
 * @default []
 *
 * @param DebuffAdd:arraystr
 * @text On Debuff Apply
 * @parent BuffRelated
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * a debuff or stacks a debuff to a higher degree.
 * @default []
 *
 * @param DebuffRemove:arraystr
 * @text On Debuff Remove
 * @parent BuffRelated
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler has
 * a debuff removed.
 * @default []
 * 
 * @param StateRelated
 * @text State Related
 * 
 * @param StatePositive
 * @text Positive States
 * @parent StateRelated
 *
 * @param StatePositiveAdd:arraystr
 * @text On State Apply
 * @parent StatePositive
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * a positive state. Requires VisuMZ_1_SkillsStatesCore!
 * @default []
 *
 * @param StatePositiveRemove:arraystr
 * @text On State Remove
 * @parent StatePositive
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler loses a
 * positive state. Requires VisuMZ_1_SkillsStatesCore!
 * @default []
 * 
 * @param StateNegative
 * @text Negative States
 * @parent StateRelated
 *
 * @param StateNegativeAdd:arraystr
 * @text On State Apply
 * @parent StateNegative
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * a negative state. Requires VisuMZ_1_SkillsStatesCore!
 * @default []
 *
 * @param StateNegativeRemove:arraystr
 * @text On State Remove
 * @parent StateNegative
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler loses a
 * negative state. Requires VisuMZ_1_SkillsStatesCore!
 * @default []
 * 
 * @param StateNeutral
 * @text Neutral States
 * @parent StateRelated
 *
 * @param StateNeutralAdd:arraystr
 * @text On State Apply
 * @parent StateNeutral
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler receives
 * a neutral state.
 * @default []
 *
 * @param StateNeutralRemove:arraystr
 * @text On State Remove
 * @parent StateNeutral
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file when the battler loses a
 * neutral state.
 * @default []
 * 
 * @param Compatibility
 * @text Plugin Compatibility
 * 
 * @param CharaCreate
 * @text Character Create
 * @parent Compatibility
 * @default VisuMZ_2_CharaCreationSys
 *
 * @param CharaCreateDisplayName:str
 * @text Display Name
 * @parent CharaCreate
 * @desc How does this voice set appear?
 * Requires VisuMZ_2_CharaCreationSys!
 * @default Untitled
 *
 * @param CharaCreateSelect:eval
 * @text Selectable?
 * @parent CharaCreate
 * @type boolean
 * @on Selectable
 * @off Non-Selectable
 * @desc Is voice set selectable in the Character Creation System?
 * Requires VisuMZ_2_CharaCreationSys!
 * @default true
 *
 * @param CharaCreatePreview:arraystr
 * @text Voice Preview
 * @parent CharaCreate
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to preview.
 * Requires VisuMZ_2_CharaCreationSys!
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Action Name Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ActionName:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param ActionName
 * @text Action Names
 *
 * @param ActionNameA:arraystr
 * @text Action Name A
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameB:arraystr
 * @text Action Name B
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameC:arraystr
 * @text Action Name C
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameD:arraystr
 * @text Action Name D
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameE:arraystr
 * @text Action Name E
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameF:arraystr
 * @text Action Name F
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameG:arraystr
 * @text Action Name G
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameH:arraystr
 * @text Action Name H
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameI:arraystr
 * @text Action Name I
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameJ:arraystr
 * @text Action Name J
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameK:arraystr
 * @text Action Name K
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameL:arraystr
 * @text Action Name L
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameM:arraystr
 * @text Action Name M
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameN:arraystr
 * @text Action Name N
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameO:arraystr
 * @text Action Name O
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameP:arraystr
 * @text Action Name P
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameQ:arraystr
 * @text Action Name Q
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameR:arraystr
 * @text Action Name R
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameS:arraystr
 * @text Action Name S
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameT:arraystr
 * @text Action Name T
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameU:arraystr
 * @text Action Name U
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameV:arraystr
 * @text Action Name V
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameW:arraystr
 * @text Action Name W
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameX:arraystr
 * @text Action Name X
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameY:arraystr
 * @text Action Name Y
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 * @param ActionNameZ:arraystr
 * @text Action Name Z
 * @parent ActionName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Action Name: x> notetag.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Chant Line Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ChantLine:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param ChantLine
 * @text Chant Lines
 *
 * @param ChantLineA:arraystr
 * @text Chant Line A
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineB:arraystr
 * @text Chant Line B
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineC:arraystr
 * @text Chant Line C
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineD:arraystr
 * @text Chant Line D
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineE:arraystr
 * @text Chant Line E
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineF:arraystr
 * @text Chant Line F
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineG:arraystr
 * @text Chant Line G
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineH:arraystr
 * @text Chant Line H
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineI:arraystr
 * @text Chant Line I
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineJ:arraystr
 * @text Chant Line J
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineK:arraystr
 * @text Chant Line K
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineL:arraystr
 * @text Chant Line L
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineM:arraystr
 * @text Chant Line M
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineN:arraystr
 * @text Chant Line N
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineO:arraystr
 * @text Chant Line O
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineP:arraystr
 * @text Chant Line P
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineQ:arraystr
 * @text Chant Line Q
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineR:arraystr
 * @text Chant Line R
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineS:arraystr
 * @text Chant Line S
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineT:arraystr
 * @text Chant Line T
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineU:arraystr
 * @text Chant Line U
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineV:arraystr
 * @text Chant Line V
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineW:arraystr
 * @text Chant Line W
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineX:arraystr
 * @text Chant Line X
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineY:arraystr
 * @text Chant Line Y
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 * @param ChantLineZ:arraystr
 * @text Chant Line Z
 * @parent ChantLine
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Chant Line: x> notetag.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Item Name Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemName:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param ItemName
 * @text Item Names
 *
 * @param ItemNameA:arraystr
 * @text Item Name A
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameB:arraystr
 * @text Item Name B
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameC:arraystr
 * @text Item Name C
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameD:arraystr
 * @text Item Name D
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameE:arraystr
 * @text Item Name E
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameF:arraystr
 * @text Item Name F
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameG:arraystr
 * @text Item Name G
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameH:arraystr
 * @text Item Name H
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameI:arraystr
 * @text Item Name I
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameJ:arraystr
 * @text Item Name J
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameK:arraystr
 * @text Item Name K
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameL:arraystr
 * @text Item Name L
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameM:arraystr
 * @text Item Name M
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameN:arraystr
 * @text Item Name N
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameO:arraystr
 * @text Item Name O
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameP:arraystr
 * @text Item Name P
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameQ:arraystr
 * @text Item Name Q
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameR:arraystr
 * @text Item Name R
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameS:arraystr
 * @text Item Name S
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameT:arraystr
 * @text Item Name T
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameU:arraystr
 * @text Item Name U
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameV:arraystr
 * @text Item Name V
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameW:arraystr
 * @text Item Name W
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameX:arraystr
 * @text Item Name X
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameY:arraystr
 * @text Item Name Y
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 * @param ItemNameZ:arraystr
 * @text Item Name Z
 * @parent ItemName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Item Name: x> notetag.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Name Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillName:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param SkillName
 * @text Skill Names
 *
 * @param SkillNameA:arraystr
 * @text Skill Name A
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameB:arraystr
 * @text Skill Name B
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameC:arraystr
 * @text Skill Name C
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameD:arraystr
 * @text Skill Name D
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameE:arraystr
 * @text Skill Name E
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameF:arraystr
 * @text Skill Name F
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameG:arraystr
 * @text Skill Name G
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameH:arraystr
 * @text Skill Name H
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameI:arraystr
 * @text Skill Name I
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameJ:arraystr
 * @text Skill Name J
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameK:arraystr
 * @text Skill Name K
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameL:arraystr
 * @text Skill Name L
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameM:arraystr
 * @text Skill Name M
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameN:arraystr
 * @text Skill Name N
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameO:arraystr
 * @text Skill Name O
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameP:arraystr
 * @text Skill Name P
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameQ:arraystr
 * @text Skill Name Q
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameR:arraystr
 * @text Skill Name R
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameS:arraystr
 * @text Skill Name S
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameT:arraystr
 * @text Skill Name T
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameU:arraystr
 * @text Skill Name U
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameV:arraystr
 * @text Skill Name V
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameW:arraystr
 * @text Skill Name W
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameX:arraystr
 * @text Skill Name X
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameY:arraystr
 * @text Skill Name Y
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 * @param SkillNameZ:arraystr
 * @text Skill Name Z
 * @parent SkillName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Skill Name: x> notetag.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Spell Name Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SpellName:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param SpellName
 * @text Spell Names
 *
 * @param SpellNameA:arraystr
 * @text Spell Name A
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameB:arraystr
 * @text Spell Name B
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameC:arraystr
 * @text Spell Name C
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameD:arraystr
 * @text Spell Name D
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameE:arraystr
 * @text Spell Name E
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameF:arraystr
 * @text Spell Name F
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameG:arraystr
 * @text Spell Name G
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameH:arraystr
 * @text Spell Name H
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameI:arraystr
 * @text Spell Name I
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameJ:arraystr
 * @text Spell Name J
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameK:arraystr
 * @text Spell Name K
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameL:arraystr
 * @text Spell Name L
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameM:arraystr
 * @text Spell Name M
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameN:arraystr
 * @text Spell Name N
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameO:arraystr
 * @text Spell Name O
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameP:arraystr
 * @text Spell Name P
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameQ:arraystr
 * @text Spell Name Q
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameR:arraystr
 * @text Spell Name R
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameS:arraystr
 * @text Spell Name S
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameT:arraystr
 * @text Spell Name T
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameU:arraystr
 * @text Spell Name U
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameV:arraystr
 * @text Spell Name V
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameW:arraystr
 * @text Spell Name W
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameX:arraystr
 * @text Spell Name X
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameY:arraystr
 * @text Spell Name Y
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 * @param SpellNameZ:arraystr
 * @text Spell Name Z
 * @parent SpellName
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for <Voice Spell Name: x> notetag.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Unique Line Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UniqueLine:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Voice Set. The name will be used as the name
 * for the <Voice Set: name> notetag.
 * @default Untitled
 * 
 * @param Unique
 * @text Unique Lines
 *
 * @param UniqueLineA:arraystr
 * @text Unique Line A
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineB:arraystr
 * @text Unique Line B
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineC:arraystr
 * @text Unique Line C
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineD:arraystr
 * @text Unique Line D
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineE:arraystr
 * @text Unique Line E
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineF:arraystr
 * @text Unique Line F
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineG:arraystr
 * @text Unique Line G
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineH:arraystr
 * @text Unique Line H
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineI:arraystr
 * @text Unique Line I
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineJ:arraystr
 * @text Unique Line J
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineK:arraystr
 * @text Unique Line K
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineL:arraystr
 * @text Unique Line L
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineM:arraystr
 * @text Unique Line M
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineN:arraystr
 * @text Unique Line N
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineO:arraystr
 * @text Unique Line O
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineP:arraystr
 * @text Unique Line P
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineQ:arraystr
 * @text Unique Line Q
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineR:arraystr
 * @text Unique Line R
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineS:arraystr
 * @text Unique Line S
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineT:arraystr
 * @text Unique Line T
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineU:arraystr
 * @text Unique Line U
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineV:arraystr
 * @text Unique Line V
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineW:arraystr
 * @text Unique Line W
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineX:arraystr
 * @text Unique Line X
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineY:arraystr
 * @text Unique Line Y
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 * @param UniqueLineZ:arraystr
 * @text Unique Line Z
 * @parent Unique
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice sound file to speak.
 * Used for Plugin Commands.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Battle Voices' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Battle Voices
 *
 */
/* ----------------------------------------------------------------------------
 * Voice Language Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VoiceLang:
 *
 * @param Bengali:str
 * @text Bengali
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Chinese:str
 * @text Chinese
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Czech:str
 * @text Czech
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Danish:str
 * @text Danish
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Dutch:str
 * @text Dutch
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param English:str
 * @text English
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Finnish:str
 * @text Finnish
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param French:str
 * @text French
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param German:str
 * @text German
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Greek:str
 * @text Greek
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Hindi:str
 * @text Hindi
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Italian:str
 * @text Italian
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Japanese:str
 * @text Japanese
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Korean:str
 * @text Korean
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Polish:str
 * @text Polish
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Romanian:str
 * @text Romanian
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Russian:str
 * @text Russian
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Slovak:str
 * @text Slovak
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Spanish:str
 * @text Spanish
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Swedish:str
 * @text Swedish
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Tamil:str
 * @text Tamil
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Thai:str
 * @text Thai
 * @desc What voice set is played with this voice language?
 * @default
 * 
 * @param Turkish:str
 * @text Turkish
 * @desc What voice set is played with this voice language?
 * @default
 *
 */
//=============================================================================

const _0x846649=_0x39bc;(function(_0x1701ed,_0x48e935){const _0x23529e=_0x39bc,_0x36b3f9=_0x1701ed();while(!![]){try{const _0x2a0678=parseInt(_0x23529e(0x249))/0x1+parseInt(_0x23529e(0x1f0))/0x2*(-parseInt(_0x23529e(0x1a0))/0x3)+parseInt(_0x23529e(0x171))/0x4+-parseInt(_0x23529e(0x1f1))/0x5*(-parseInt(_0x23529e(0x179))/0x6)+-parseInt(_0x23529e(0x23b))/0x7+-parseInt(_0x23529e(0x266))/0x8+parseInt(_0x23529e(0x1c0))/0x9*(parseInt(_0x23529e(0x215))/0xa);if(_0x2a0678===_0x48e935)break;else _0x36b3f9['push'](_0x36b3f9['shift']());}catch(_0x2dceb0){_0x36b3f9['push'](_0x36b3f9['shift']());}}}(_0x4293,0xae8ec));var label=_0x846649(0x1d5),tier=tier||0x0,dependencies=[_0x846649(0x187),'VisuMZ_1_BattleCore'],pluginData=$plugins[_0x846649(0x1ce)](function(_0x4ad497){const _0x30c90a=_0x846649;return _0x4ad497[_0x30c90a(0x1b8)]&&_0x4ad497['description'][_0x30c90a(0x210)]('['+label+']');})[0x0];VisuMZ[label][_0x846649(0x15c)]=VisuMZ[label][_0x846649(0x15c)]||{},VisuMZ['ConvertParams']=function(_0x4f8355,_0x3f7b46){const _0x35d079=_0x846649;for(const _0x4a0f36 in _0x3f7b46){if(_0x35d079(0x207)===_0x35d079(0x207)){if(_0x4a0f36[_0x35d079(0x1b7)](/(.*):(.*)/i)){if(_0x35d079(0x231)===_0x35d079(0x231)){const _0x57f8e0=String(RegExp['$1']),_0x2e7bc5=String(RegExp['$2'])[_0x35d079(0x27e)]()[_0x35d079(0x172)]();let _0x5834c9,_0x5ab54e,_0x4b203b;switch(_0x2e7bc5){case'NUM':_0x5834c9=_0x3f7b46[_0x4a0f36]!==''?Number(_0x3f7b46[_0x4a0f36]):0x0;break;case'ARRAYNUM':_0x5ab54e=_0x3f7b46[_0x4a0f36]!==''?JSON['parse'](_0x3f7b46[_0x4a0f36]):[],_0x5834c9=_0x5ab54e[_0x35d079(0x279)](_0x16e566=>Number(_0x16e566));break;case _0x35d079(0x248):_0x5834c9=_0x3f7b46[_0x4a0f36]!==''?eval(_0x3f7b46[_0x4a0f36]):null;break;case _0x35d079(0x1ad):_0x5ab54e=_0x3f7b46[_0x4a0f36]!==''?JSON[_0x35d079(0x253)](_0x3f7b46[_0x4a0f36]):[],_0x5834c9=_0x5ab54e[_0x35d079(0x279)](_0x3fbb2d=>eval(_0x3fbb2d));break;case'JSON':_0x5834c9=_0x3f7b46[_0x4a0f36]!==''?JSON[_0x35d079(0x253)](_0x3f7b46[_0x4a0f36]):'';break;case _0x35d079(0x21f):_0x5ab54e=_0x3f7b46[_0x4a0f36]!==''?JSON[_0x35d079(0x253)](_0x3f7b46[_0x4a0f36]):[],_0x5834c9=_0x5ab54e['map'](_0x1c43d7=>JSON['parse'](_0x1c43d7));break;case'FUNC':_0x5834c9=_0x3f7b46[_0x4a0f36]!==''?new Function(JSON[_0x35d079(0x253)](_0x3f7b46[_0x4a0f36])):new Function(_0x35d079(0x147));break;case _0x35d079(0x22a):_0x5ab54e=_0x3f7b46[_0x4a0f36]!==''?JSON[_0x35d079(0x253)](_0x3f7b46[_0x4a0f36]):[],_0x5834c9=_0x5ab54e[_0x35d079(0x279)](_0x51e154=>new Function(JSON[_0x35d079(0x253)](_0x51e154)));break;case _0x35d079(0x1b4):_0x5834c9=_0x3f7b46[_0x4a0f36]!==''?String(_0x3f7b46[_0x4a0f36]):'';break;case _0x35d079(0x17b):_0x5ab54e=_0x3f7b46[_0x4a0f36]!==''?JSON[_0x35d079(0x253)](_0x3f7b46[_0x4a0f36]):[],_0x5834c9=_0x5ab54e[_0x35d079(0x279)](_0x219987=>String(_0x219987));break;case _0x35d079(0x163):_0x4b203b=_0x3f7b46[_0x4a0f36]!==''?JSON[_0x35d079(0x253)](_0x3f7b46[_0x4a0f36]):{},_0x5834c9=VisuMZ['ConvertParams']({},_0x4b203b);break;case'ARRAYSTRUCT':_0x5ab54e=_0x3f7b46[_0x4a0f36]!==''?JSON[_0x35d079(0x253)](_0x3f7b46[_0x4a0f36]):[],_0x5834c9=_0x5ab54e[_0x35d079(0x279)](_0x4456d7=>VisuMZ[_0x35d079(0x1c1)]({},JSON[_0x35d079(0x253)](_0x4456d7)));break;default:continue;}_0x4f8355[_0x57f8e0]=_0x5834c9;}else{if(!_0x31f233)return;const _0x1c24d5=_0x2a6dae[_0x35d079(0x1b1)]?this[_0x35d079(0x143)]:this['_seBuffers'],_0x1c358d=_0x1c24d5[_0x35d079(0x20d)](_0x5a8408=>_0x5a8408[_0x35d079(0x213)]===_0x568de8[_0x35d079(0x213)]&&_0x5a8408[_0x35d079(0x25c)]===_0x4f5fa0[_0x35d079(0x25c)]);if(!_0x1c358d)return;_0x1c358d[_0x35d079(0x276)]=_0x2cd454['battlerKey']();}}}else this[_0x35d079(0x258)]=![];}return _0x4f8355;},(_0x1cde44=>{const _0x295aed=_0x846649,_0x2401da=_0x1cde44[_0x295aed(0x213)];for(const _0x5bae1e of dependencies){if(!Imported[_0x5bae1e]){alert(_0x295aed(0x159)[_0x295aed(0x23d)](_0x2401da,_0x5bae1e)),SceneManager['exit']();break;}}const _0x4b9a4a=_0x1cde44[_0x295aed(0x22d)];if(_0x4b9a4a[_0x295aed(0x1b7)](/\[Version[ ](.*?)\]/i)){const _0x59c308=Number(RegExp['$1']);_0x59c308!==VisuMZ[label][_0x295aed(0x1b5)]&&(alert(_0x295aed(0x290)['format'](_0x2401da,_0x59c308)),SceneManager[_0x295aed(0x228)]());}if(_0x4b9a4a[_0x295aed(0x1b7)](/\[Tier[ ](\d+)\]/i)){const _0x4ce6b7=Number(RegExp['$1']);_0x4ce6b7<tier?(alert(_0x295aed(0x1c3)[_0x295aed(0x23d)](_0x2401da,_0x4ce6b7,tier)),SceneManager[_0x295aed(0x228)]()):tier=Math[_0x295aed(0x246)](_0x4ce6b7,tier);}VisuMZ[_0x295aed(0x1c1)](VisuMZ[label][_0x295aed(0x15c)],_0x1cde44[_0x295aed(0x200)]);})(pluginData);function _0x4293(){const _0x31be2c=['_expireStatesAuto','BattleCore','Override','Window_ActorCommand_setup','getTraitVoiceSets','ActionResultReflection','Game_Battler_addDebuff','ActionResultSubstitute','Skill','Guard','apply','Game_Actor_setup','addGeneralOptions','519tpkOyt','bJcwU','setup','BattleInput','setupBattleVoice','ActionResultMagicEvasion','doesSkillHaveVoiceItemName','_currentActor','processVictory','doesSkillHaveVoiceActionName','AKGQy','performMiss','isPlaying','ARRAYEVAL','WlPBa','PerformActionMiss','remove','VisuMZ_2_VoiceActControl','Scene_Boot_onDatabaseLoaded','isPhysical','STR','version','SrHsV','match','status','BattleVictory','VoiceSets','_expireBuffsAuto','State','Negative','Qyhux','registerCommand','3595167CZDNwD','ConvertParams','Game_Battler_performSubstitute','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','getSkillHaveVoiceChantLine','VUDXt','_getTraitVoiceSets','Game_Battler_performMiss','SpellNames','ActionResultEvasion','ChantLine','destroy','SkillName','qtCux','filter','removeState','isActor','Game_Battler_performEvasion','performReflection','performHpChangeVoice','BattleStart','BattleVoices','updateVoiceParameters','ActionStart','voiceLocale','doesSkillHaveVoiceChantLine','BATTLE_VOICE_DEBUG','removeStatesAuto','ActionResultCounter','performActionStartBaseVoice','removeBuffsAuto','onEscapeSuccess','Battle\x20Voices','ActionNames','fxRwP','XADxM','DebuffRemove','BattleManager_processVictory','Game_Battler_performReflection','_getSkillHaveVoiceItemName','SpellName','Positive','BattleManager_startBattle','LZMbR','clearBattleVoice','ActionName','Medium','getSkillHaveVoiceActionName','9562jErJeE','285130DMaVSr','Game_Battler_removeBuff','Add','VoiceSet','_getSkillHaveVoiceSkillName','action','lBxpO','performCounter','Item','UniqueLines','applyGameActionVoice','initBattleVoicesMute','addStateVoice','lBlNc','qsqeX','parameters','playSe','isCertainHit','PerformActionBasicAttack','BuffRemove','NxbdY','ukzLp','iAbFU','randomInt','czMIO','in\x20order\x20for\x20VisuMZ_3_BattleVoices\x20to\x20work.','Window_Message_registerLastPlayedVoiceSound','SubElement','find','performSubstitute','length','includes','Game_BattlerBase_setHp','RegExp','name','makeData','50wPUvvp','languages','performEvasion','bZLyH','ItemName','performActionStart','Game_Battler_removeBuffsAuto','HlDRJ','isVisuMzLocalizationEnabled','getSkillHaveVoiceSkillName','ARRAYJSON','custom','sRMtr','VoiceVolume','call','isMagical','FcZUj','LangVoiceSet','getSkillHaveVoiceItemName','exit','Name','ARRAYFUNC','getSkillHaveVoiceSpellName','bRPyK','description','setupBattleVoiceForTraits','Magical','_getSkillHaveVoiceSpellName','KuPnY','BasicGuard','applyLatestBufferBattlerKey','_getSkillHaveVoiceChantLine','Ally','qFzez','removeBuff','vmNFc','changeBattleVoicePitch','_subject','8032640Uhsphz','isDebuffAffected','format','missed','AudioManager_updateVoiceParameters','_battleVoiceFrameCount','isStateAffected','BattleEscapeSuccess','playBattleVoice','osjQA','addDebuff','max','hasBattleVoiceKey','EVAL','253337QUaLqr','getVoiceSet','isBuffAffected','pJpTD','HmlBu','battleVoice','AllowSelfResponse','areBattleVoicesMute','ZPwYY','Game_Battler_performAction','parse','BidPD','aliveMembers','Options','Game_Battler_removeStatesAuto','_muteBattleVoices','addBuff','nGhiS','FyozY','frameCount','DelayVictoryMS','process_VisuMZ_BattleVoices','isItem','Damage','performAttack','PerformActionDefeatFoe','VisuMZ_3_VictoryAftermath','Pan','note','4301320VvsnyT','isAttack','registerLastPlayedVoiceSound','performActionVoice','PerformAction','Game_Enemy_performAttack','CertainHit','Scene_Options_maxCommands','bind','uMLrw','subject','Game_Battler_addBuff','OFkuk','onEscapeFailure','setHp','Game_Actor_performAttack','battlerKey','prototype','_phase','map','set','Physical','xIOXi','_seBuffers','toUpperCase','changeBattleVoicePan','isInputting','performAction','Window_Options_addGeneralOptions','changeBattleVoiceVolume','performActionStartVoice','volume','VisuMZ_1_ElementStatusCore','traitSet','VoicePitch','MuteAllVoices','AddOption','mhp','pan','ItemNames','lWswJ','asNCK','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','readFlag','VonNO','Language','ConfigManager_makeData','AdjustRect','VjrZj','_voiceBuffers','SsorH','startBattle','allowSelfResponseVoice','return\x200','item','DebuffAdd','log','doesSkillHaveVoiceSpellName','IBPHF','_hp','BuffAdd','changeBattleVoiceLangSet','maxCommands','Game_Battler_addState','vAOni','performMagicEvasion','PvFja','ITWxd','ActorChangeBattleVoiceSet','Light','Death','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','isForFriend','BattleManager_onEscapeFailure','Settings','initialize','clamp','getBattleVoiceData','VisuMZ_1_SkillsStatesCore','isGuard','addState','STRUCT','changeBattleVoiceSet','applyData','ConfigManager_applyData','isForEveryone','Enemy','onDatabaseLoaded','lcpsC','RRqcd','Game_System_initialize','VoicePan','Mute','Revive','_defeatedTargetsVoiced','3450328mFyHeD','trim','XqjIQ','removeStateVoice','_battleVoice','actor','_getSkillHaveVoiceActionName','SkillNames','12okGSTX','addBattleVoicesCommand','ARRAYSTR','BattleEscapeFailure','isSceneBattle','Game_Action_apply','KJbWt','doesSkillHaveVoiceSkillName','BattleManager_onEscapeSuccess','split','VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20','XhgIG','Game_Battler_performCounter','Battler:\x20%1\x0aKey:\x20%2\x0aFilename:\x20%3','VisuMZ_0_CoreEngine','addCommand','Remove','playVoiceLine','Game_Battler_performActionStart','RTYot','GapLQ','ChantLines','canPlayDifferentLanguageBattleVoices','pitch','DamageNone','battleVoices'];_0x4293=function(){return _0x31be2c;};return _0x4293();}function _0x39bc(_0x540268,_0x228499){const _0x42931e=_0x4293();return _0x39bc=function(_0x39bc7d,_0xad003a){_0x39bc7d=_0x39bc7d-0x142;let _0x3e0cb8=_0x42931e[_0x39bc7d];return _0x3e0cb8;},_0x39bc(_0x540268,_0x228499);}if(VisuMZ[_0x846649(0x194)]['version']<1.77){let text='';text+=_0x846649(0x183),text+=_0x846649(0x20a),alert(text),SceneManager['exit']();}PluginManager[_0x846649(0x1bf)](pluginData['name'],_0x846649(0x156),_0x52cac8=>{const _0x31db3d=_0x846649;VisuMZ[_0x31db3d(0x1c1)](_0x52cac8,_0x52cac8);const _0x33b27c=_0x52cac8['ActorID']||0x1,_0x57acf1=_0x52cac8['VoiceSet']||'',_0x5835b5=Number(_0x52cac8[_0x31db3d(0x285)]||0x0)[_0x31db3d(0x15e)](0x0,0x64),_0x469951=Math[_0x31db3d(0x246)](Number(_0x52cac8[_0x31db3d(0x190)]||0x0),0x0),_0x2bb535=Number(_0x52cac8[_0x31db3d(0x264)]),_0x22f723=$gameActors[_0x31db3d(0x176)](_0x33b27c);_0x22f723&&(_0x22f723[_0x31db3d(0x164)](_0x57acf1),_0x22f723[_0x31db3d(0x283)](_0x5835b5),_0x22f723[_0x31db3d(0x239)](_0x469951),_0x22f723['changeBattleVoicePan'](_0x2bb535));}),PluginManager[_0x846649(0x1bf)](pluginData[_0x846649(0x213)],'ActorChangeBattleVoiceSetLang',_0x5b1ef7=>{const _0x1a7c2e=_0x846649;VisuMZ[_0x1a7c2e(0x1c1)](_0x5b1ef7,_0x5b1ef7);const _0x5ef940=_0x5b1ef7['ActorID']||0x1,_0x308375=_0x5b1ef7[_0x1a7c2e(0x1f4)]||'',_0x13dffb=Number(_0x5b1ef7[_0x1a7c2e(0x285)]||0x0)[_0x1a7c2e(0x15e)](0x0,0x64),_0x41cbc9=Math['max'](Number(_0x5b1ef7[_0x1a7c2e(0x190)]||0x0),0x0),_0x13f191=Number(_0x5b1ef7['Pan']),_0xc4fb62={},_0x2f8862=_0x5b1ef7[_0x1a7c2e(0x293)]||{};for(const _0x40d37e in _0x2f8862){_0x1a7c2e(0x244)===_0x1a7c2e(0x244)?_0xc4fb62[_0x40d37e]=_0x2f8862[_0x40d37e]:_0x4f73f9[_0x1a7c2e(0x1ec)](_0x5c858a);}const _0x27e5b2=$gameActors['actor'](_0x5ef940);_0x27e5b2&&(_0x27e5b2[_0x1a7c2e(0x164)](_0x308375),_0x27e5b2[_0x1a7c2e(0x283)](_0x13dffb),_0x27e5b2[_0x1a7c2e(0x239)](_0x41cbc9),_0x27e5b2['changeBattleVoicePan'](_0x13f191),_0x27e5b2[_0x1a7c2e(0x14f)](_0xc4fb62));}),PluginManager[_0x846649(0x1bf)](pluginData['name'],_0x846649(0x289),_0x3f4d42=>{const _0x4eebe2=_0x846649;VisuMZ[_0x4eebe2(0x1c1)](_0x3f4d42,_0x3f4d42);const _0x56f62a=_0x3f4d42[_0x4eebe2(0x16e)];$gameSystem['setBattleVoicesMute'](_0x56f62a);}),VisuMZ[_0x846649(0x1d5)][_0x846649(0x212)]={'VoiceSet':/<VOICE(?:|SET| SET):[ ](.*?)>/i,'LangVoiceSet':/<(?:LANG|LANGUAGE)[ ](.*?)[ ]VOICE(?:|SET| SET):[ ](.*?)>/gi,'VoiceVolume':/<VOICE(?:|SET| SET) VOLUME:[ ](\d+)>/i,'VoicePitch':/<VOICE(?:|SET| SET) PITCH:[ ](\d+)>/i,'VoicePan':/<VOICE(?:|SET| SET) PAN:[ ](.*?)>/i,'ActionName':/<VOICE ACTION(?:|NAME| NAME):[ ](.*?)>/i,'ChantLine':/<VOICE CHANT(?:|LINE| LINE):[ ](.*?)>/i,'ItemName':/<VOICE ITEM(?:|NAME| NAME):[ ](.*?)>/i,'SkillName':/<VOICE SKILL(?:|NAME| NAME):[ ](.*?)>/i,'SpellName':/<VOICE SPELL(?:|NAME| NAME):[ ](.*?)>/i,'TraitVoiceSet':/<TRAIT VOICE(?:|SET| SET)(?:|S)>\s*([\s\S]*?)\s*<\/TRAIT VOICE(?:|SET| SET)(?:|S)>/i},VisuMZ['BattleVoices'][_0x846649(0x1b2)]=Scene_Boot['prototype'][_0x846649(0x169)],Scene_Boot['prototype']['onDatabaseLoaded']=function(){const _0x29a244=_0x846649;VisuMZ['BattleVoices'][_0x29a244(0x1b2)][_0x29a244(0x223)](this),this[_0x29a244(0x25e)]();},VisuMZ[_0x846649(0x1d5)][_0x846649(0x1f4)]={},Scene_Boot[_0x846649(0x277)]['process_VisuMZ_BattleVoices']=function(){const _0x447be6=_0x846649,_0x320535=VisuMZ[_0x447be6(0x1d5)][_0x447be6(0x15c)],_0x273116=[_0x447be6(0x1ba),_0x447be6(0x1e1),_0x447be6(0x18e),_0x447be6(0x28d),_0x447be6(0x178),_0x447be6(0x1c8),_0x447be6(0x1fa)];for(const _0x350e73 of _0x273116){for(const _0x5d76dd of _0x320535[_0x350e73]){const _0x36d023=(_0x5d76dd['Name']||'')[_0x447be6(0x27e)]()['trim']();if(_0x36d023[_0x447be6(0x20f)]<=0x0)continue;if(_0x36d023==='UNTITLED')continue;VisuMZ[_0x447be6(0x1d5)][_0x447be6(0x1f4)][_0x36d023]=VisuMZ[_0x447be6(0x1d5)][_0x447be6(0x1f4)][_0x36d023]||{};for(const _0x979680 in _0x5d76dd){if(_0x447be6(0x154)==='PvFja'){if(_0x979680===_0x447be6(0x229))continue;VisuMZ[_0x447be6(0x1d5)][_0x447be6(0x1f4)][_0x36d023][_0x979680]=_0x5d76dd[_0x979680];}else _0x50cdd4+=_0x447be6(0x1ee);}}}},DataManager['getSkillHaveVoiceActionName']=function(_0x2bbe88){const _0x300e53=_0x846649;if(!_0x2bbe88)return'';const _0x16855a=_0x2bbe88['id'];this['_getSkillHaveVoiceActionName']=this[_0x300e53(0x177)]||{};if(this[_0x300e53(0x177)][_0x16855a]!==undefined)return this['_getSkillHaveVoiceActionName'][_0x16855a];let _0x467853='';const _0x53b73e=VisuMZ[_0x300e53(0x1d5)][_0x300e53(0x212)],_0x3adb3f=_0x2bbe88[_0x300e53(0x265)]||'';return _0x3adb3f[_0x300e53(0x1b7)](_0x53b73e[_0x300e53(0x1ed)])&&('WlPBa'!==_0x300e53(0x1ae)?(_0x82e6e4[_0x300e53(0x1d5)][_0x300e53(0x1b2)][_0x300e53(0x223)](this),this[_0x300e53(0x25e)]()):_0x467853=_0x300e53(0x1ed)+String(RegExp['$1'])[_0x300e53(0x172)]()),this[_0x300e53(0x177)][_0x16855a]=_0x467853,this[_0x300e53(0x177)][_0x16855a];},DataManager[_0x846649(0x1a9)]=function(_0x12faa3){const _0xedbc65=_0x846649,_0x5dfc5d=this[_0xedbc65(0x1ef)](_0x12faa3);return _0x5dfc5d[_0xedbc65(0x20f)]>0x0;},DataManager['getSkillHaveVoiceChantLine']=function(_0x253484){const _0x501aa6=_0x846649;if(!_0x253484)return'';const _0x30e109=_0x253484['id'];this['_getSkillHaveVoiceChantLine']=this[_0x501aa6(0x234)]||{};if(this['_getSkillHaveVoiceChantLine'][_0x30e109]!==undefined)return this['_getSkillHaveVoiceChantLine'][_0x30e109];let _0x274ef1='';const _0x2c3f6c=VisuMZ[_0x501aa6(0x1d5)][_0x501aa6(0x212)],_0x454aa4=_0x253484[_0x501aa6(0x265)]||'';return _0x454aa4[_0x501aa6(0x1b7)](_0x2c3f6c[_0x501aa6(0x1ca)])&&(_0x274ef1=_0x501aa6(0x1ca)+String(RegExp['$1'])['trim']()),this['_getSkillHaveVoiceChantLine'][_0x30e109]=_0x274ef1,this['_getSkillHaveVoiceChantLine'][_0x30e109];},DataManager['doesSkillHaveVoiceChantLine']=function(_0x29c89f){const _0x3d1142=_0x846649,_0x498d42=this[_0x3d1142(0x1c4)](_0x29c89f);return _0x498d42[_0x3d1142(0x20f)]>0x0;},DataManager['getSkillHaveVoiceItemName']=function(_0x2e5e72){const _0x5611c7=_0x846649;if(!_0x2e5e72)return'';const _0x186f07=_0x2e5e72['id'];this[_0x5611c7(0x1e7)]=this[_0x5611c7(0x1e7)]||{};if(this['_getSkillHaveVoiceItemName'][_0x186f07]!==undefined)return this['_getSkillHaveVoiceItemName'][_0x186f07];let _0x51fea2='';const _0x395c31=VisuMZ[_0x5611c7(0x1d5)][_0x5611c7(0x212)],_0x1af3c7=_0x2e5e72[_0x5611c7(0x265)]||'';return _0x1af3c7[_0x5611c7(0x1b7)](_0x395c31[_0x5611c7(0x219)])&&(_0x5611c7(0x205)===_0x5611c7(0x205)?_0x51fea2=_0x5611c7(0x219)+String(RegExp['$1'])[_0x5611c7(0x172)]():(_0x35b384[_0x5611c7(0x1d5)][_0x5611c7(0x1ea)][_0x5611c7(0x223)](this),_0x9df36f[_0x5611c7(0x243)]('BattleStart'))),this[_0x5611c7(0x1e7)][_0x186f07]=_0x51fea2,this[_0x5611c7(0x1e7)][_0x186f07];},DataManager['doesSkillHaveVoiceItemName']=function(_0x3fafd8){const _0x274499=_0x846649,_0x25ee7f=this[_0x274499(0x227)](_0x3fafd8);return _0x25ee7f[_0x274499(0x20f)]>0x0;},DataManager[_0x846649(0x21e)]=function(_0x46c62c){const _0x5be6e3=_0x846649;if(!_0x46c62c)return'';const _0x9a89da=_0x46c62c['id'];this['_getSkillHaveVoiceSkillName']=this[_0x5be6e3(0x1f5)]||{};if(this['_getSkillHaveVoiceSkillName'][_0x9a89da]!==undefined){if(_0x5be6e3(0x1b6)===_0x5be6e3(0x1b6))return this[_0x5be6e3(0x1f5)][_0x9a89da];else{if(!_0x8716d9)return'';const _0x39303a=_0x48505f['id'];this['_getSkillHaveVoiceActionName']=this[_0x5be6e3(0x177)]||{};if(this[_0x5be6e3(0x177)][_0x39303a]!==_0x3bb5f0)return this['_getSkillHaveVoiceActionName'][_0x39303a];let _0x4cfc16='';const _0x3735f1=_0x412ebd['BattleVoices'][_0x5be6e3(0x212)],_0x24df41=_0x2b713c[_0x5be6e3(0x265)]||'';return _0x24df41[_0x5be6e3(0x1b7)](_0x3735f1[_0x5be6e3(0x1ed)])&&(_0x4cfc16=_0x5be6e3(0x1ed)+_0x357869(_0x7024b0['$1'])[_0x5be6e3(0x172)]()),this[_0x5be6e3(0x177)][_0x39303a]=_0x4cfc16,this[_0x5be6e3(0x177)][_0x39303a];}}let _0x51db6a='';const _0x34cdbc=VisuMZ[_0x5be6e3(0x1d5)][_0x5be6e3(0x212)],_0x19af2c=_0x46c62c[_0x5be6e3(0x265)]||'';return _0x19af2c[_0x5be6e3(0x1b7)](_0x34cdbc['SkillName'])&&(_0x51db6a=_0x5be6e3(0x1cc)+String(RegExp['$1'])[_0x5be6e3(0x172)]()),this[_0x5be6e3(0x1f5)][_0x9a89da]=_0x51db6a,this[_0x5be6e3(0x1f5)][_0x9a89da];},DataManager['doesSkillHaveVoiceSkillName']=function(_0x50811f){const _0xa72adc=_0x846649,_0x8c0646=this[_0xa72adc(0x21e)](_0x50811f);return _0x8c0646['length']>0x0;},DataManager[_0x846649(0x22b)]=function(_0x553d52){const _0x59f3f7=_0x846649;if(!_0x553d52)return'';const _0x4efa19=_0x553d52['id'];this[_0x59f3f7(0x230)]=this[_0x59f3f7(0x230)]||{};if(this[_0x59f3f7(0x230)][_0x4efa19]!==undefined)return this[_0x59f3f7(0x230)][_0x4efa19];let _0x15303f='';const _0x3c86d4=VisuMZ[_0x59f3f7(0x1d5)]['RegExp'],_0x24a9ed=_0x553d52[_0x59f3f7(0x265)]||'';if(_0x24a9ed[_0x59f3f7(0x1b7)](_0x3c86d4[_0x59f3f7(0x1e8)])){if(_0x59f3f7(0x155)!==_0x59f3f7(0x18c))_0x15303f=_0x59f3f7(0x1e8)+String(RegExp['$1'])[_0x59f3f7(0x172)]();else{_0x397ec5[_0x59f3f7(0x1b7)](_0x3b0daa['LangVoiceSet']);const _0x3cf826=_0xf38176(_0x325add['$1'])[_0x59f3f7(0x172)](),_0x4a1498=_0x5322a0(_0x56027a['$2'])[_0x59f3f7(0x172)]();this['_battleVoice'][_0x59f3f7(0x216)][_0x3cf826]=_0x4a1498;}}return this[_0x59f3f7(0x230)][_0x4efa19]=_0x15303f,this['_getSkillHaveVoiceSpellName'][_0x4efa19];},DataManager['doesSkillHaveVoiceSpellName']=function(_0x57f5ba){const _0x4231cf=_0x846649,_0x1d3812=this[_0x4231cf(0x22b)](_0x57f5ba);return _0x1d3812[_0x4231cf(0x20f)]>0x0;},DataManager[_0x846649(0x197)]=function(_0x24c093){const _0x38cb99=_0x846649;if(!_0x24c093)return{};const _0x5f5bd6=_0x24c093['id'];this['_getTraitVoiceSets']=this['_getTraitVoiceSets']||{};if(this[_0x38cb99(0x1c6)][_0x5f5bd6]!==undefined){if(_0x38cb99(0x16b)!==_0x38cb99(0x14c))return this[_0x38cb99(0x1c6)][_0x5f5bd6];else{this[_0x38cb99(0x243)](_0x3b0cf9);return;}}const _0x2a567d={},_0x45bc85=VisuMZ['BattleVoices']['RegExp'],_0x4c8800=_0x24c093[_0x38cb99(0x265)]||'';if(_0x4c8800[_0x38cb99(0x1b7)](_0x45bc85['TraitVoiceSet'])){const _0x2e8029=String(RegExp['$1'])[_0x38cb99(0x182)](/[\r\n]+/);for(const _0x47d647 of _0x2e8029){if(_0x47d647[_0x38cb99(0x1b7)](/(.*)[ ]SET:[ ](.*)/i)){if(_0x38cb99(0x292)==='VonNO'){const _0x45b313=String(RegExp['$1'])[_0x38cb99(0x27e)]()[_0x38cb99(0x172)](),_0x346dca=String(RegExp['$2']);_0x2a567d[_0x45b313]=_0x2a567d[_0x45b313]||{},_0x2a567d[_0x45b313]['set']=_0x346dca;}else{const _0x414f69=_0x22713c(_0x2cc53b['$1'])[_0x38cb99(0x27e)]()[_0x38cb99(0x172)](),_0x1ca737=_0x118a5f(_0x461f0f['$2']||0x0)['clamp'](0x0,0x64);_0xb77b61[_0x414f69]=_0x278e13[_0x414f69]||{},_0x4bc5ff[_0x414f69][_0x38cb99(0x285)]=_0x1ca737;}}if(_0x47d647[_0x38cb99(0x1b7)](/(.*)[ ]VOLUME:[ ](.*)/i)){const _0x5aa255=String(RegExp['$1'])[_0x38cb99(0x27e)]()[_0x38cb99(0x172)](),_0x42db4a=Number(RegExp['$2']||0x0)[_0x38cb99(0x15e)](0x0,0x64);_0x2a567d[_0x5aa255]=_0x2a567d[_0x5aa255]||{},_0x2a567d[_0x5aa255]['volume']=_0x42db4a;}if(_0x47d647[_0x38cb99(0x1b7)](/(.*)[ ]PITCH:[ ](.*)/i)){if(_0x38cb99(0x17f)!==_0x38cb99(0x144)){const _0x2aa57e=String(RegExp['$1'])[_0x38cb99(0x27e)]()[_0x38cb99(0x172)](),_0x1d4446=Math[_0x38cb99(0x246)](Number(RegExp['$2']||0x0),0x0);_0x2a567d[_0x2aa57e]=_0x2a567d[_0x2aa57e]||{},_0x2a567d[_0x2aa57e][_0x38cb99(0x190)]=_0x1d4446;}else{if(!_0x30f5a3[_0x38cb99(0x192)])return;if(!_0x26a511)return;if(!_0x4ca25f)return;if(_0x4571ac[_0x38cb99(0x250)]())return;this[_0x38cb99(0x240)]=this[_0x38cb99(0x240)]||{};const _0x1bf62e=_0xd42071[_0x38cb99(0x276)]();if(this[_0x38cb99(0x240)][_0x1bf62e]===_0x290118[_0x38cb99(0x25c)])return;this[_0x38cb99(0x240)][_0x1bf62e]=_0x28f535[_0x38cb99(0x25c)],_0x56fc8d['BattleVoices']['Settings']['Override']&&_0x200b0b['clearBattleVoice'](_0x530893),_0x3965fe[_0x38cb99(0x1b1)]?(_0xd4bc80[_0x38cb99(0x24e)]=!![],this[_0x38cb99(0x18a)](_0x22737e)):this['playSe'](_0x269be3),this[_0x38cb99(0x233)](_0x1550cf,_0x9babb6);}}if(_0x47d647[_0x38cb99(0x1b7)](/(.*)[ ]PAN:[ ](.*)/i)){if(_0x38cb99(0x28e)==='lWswJ'){const _0x5cafd1=String(RegExp['$1'])['toUpperCase']()['trim'](),_0x7abbca=Number(RegExp['$2']||0x0);_0x2a567d[_0x5cafd1]=_0x2a567d[_0x5cafd1]||{},_0x2a567d[_0x5cafd1]['pan']=_0x7abbca;}else{_0x18171f['BattleVoices'][_0x38cb99(0x151)][_0x38cb99(0x223)](this,_0x344a53);if(!_0x1451bd[_0x38cb99(0x17d)]())return;if(!_0x4e465c['_subject'])return;if(!this[_0x38cb99(0x146)]())return;if(!this['isStateAffected'](_0x1109c6))return;this[_0x38cb99(0x1fd)](_0x2aca70);}}}}return this[_0x38cb99(0x1c6)][_0x5f5bd6]=_0x2a567d,this[_0x38cb99(0x1c6)][_0x5f5bd6];},ConfigManager['battleVoices']=!![],VisuMZ['BattleVoices']['ConfigManager_makeData']=ConfigManager[_0x846649(0x214)],ConfigManager[_0x846649(0x214)]=function(){const _0x28858c=_0x846649,_0x487a06=VisuMZ[_0x28858c(0x1d5)][_0x28858c(0x294)][_0x28858c(0x223)](this);return _0x487a06[_0x28858c(0x192)]=this['battleVoices'],_0x487a06;},VisuMZ[_0x846649(0x1d5)][_0x846649(0x166)]=ConfigManager[_0x846649(0x165)],ConfigManager[_0x846649(0x165)]=function(_0x1a899d){const _0x4c09cf=_0x846649;VisuMZ[_0x4c09cf(0x1d5)][_0x4c09cf(0x166)]['call'](this,_0x1a899d),this[_0x4c09cf(0x291)](_0x1a899d,_0x4c09cf(0x192),!![]);if(_0x4c09cf(0x192)in _0x1a899d){if(_0x4c09cf(0x142)===_0x4c09cf(0x25a)){if(!_0x55f893[_0x4c09cf(0x1d5)][_0x4c09cf(0x15c)][_0x4c09cf(0x256)][_0x4c09cf(0x28a)])return;const _0x1bcf07=_0x49ba22[_0x4c09cf(0x192)],_0x2ad245='battleVoices';this[_0x4c09cf(0x188)](_0x1bcf07,_0x2ad245);}else this[_0x4c09cf(0x192)]=_0x1a899d[_0x4c09cf(0x192)];}else{if(_0x4c09cf(0x218)!==_0x4c09cf(0x218)){const _0x32bde9=_0x29076e[_0x4c09cf(0x1d5)][_0x4c09cf(0x294)][_0x4c09cf(0x223)](this);return _0x32bde9[_0x4c09cf(0x192)]=this[_0x4c09cf(0x192)],_0x32bde9;}else this['battleVoices']=!![];}},TextManager[_0x846649(0x192)]=VisuMZ[_0x846649(0x1d5)][_0x846649(0x15c)]['Options'][_0x846649(0x229)]??_0x846649(0x1e0),AudioManager[_0x846649(0x24a)]=function(_0x2f1b82){const _0x4f2361=_0x846649;if(!_0x2f1b82)return{};return VisuMZ[_0x4f2361(0x1d5)][_0x4f2361(0x1f4)][_0x2f1b82[_0x4f2361(0x27e)]()[_0x4f2361(0x172)]()];},AudioManager[_0x846649(0x1ec)]=function(_0x2fc68b){const _0x1a8feb=_0x846649;if(!_0x2fc68b)return;const _0x32cd86=Imported[_0x1a8feb(0x1b1)]?this[_0x1a8feb(0x143)]:this['_seBuffers'],_0x4aaefb=_0x32cd86[_0x1a8feb(0x1ce)](_0x14fc9d=>_0x14fc9d[_0x1a8feb(0x276)]===_0x2fc68b[_0x1a8feb(0x276)]());for(const _0x20998c of _0x4aaefb){if(_0x1a8feb(0x21c)===_0x1a8feb(0x1fe)){if(this[_0x1a8feb(0x175)]===_0x587237)this['setupBattleVoice']();this[_0x1a8feb(0x175)][_0x1a8feb(0x285)]=_0x3ea74b[_0x1a8feb(0x15e)](0x0,0x64);}else _0x20998c[_0x1a8feb(0x1cb)](),_0x32cd86[_0x1a8feb(0x1b0)](_0x20998c);}},AudioManager[_0x846649(0x243)]=function(_0x1d139b,_0xe2d43b){const _0x31e849=_0x846649;if(!ConfigManager['battleVoices'])return;if(!_0x1d139b)return;if(!_0xe2d43b)return;if($gameSystem[_0x31e849(0x250)]())return;this[_0x31e849(0x240)]=this[_0x31e849(0x240)]||{};const _0x571c99=_0xe2d43b[_0x31e849(0x276)]();if(this[_0x31e849(0x240)][_0x571c99]===Graphics[_0x31e849(0x25c)])return;this[_0x31e849(0x240)][_0x571c99]=Graphics[_0x31e849(0x25c)],VisuMZ[_0x31e849(0x1d5)][_0x31e849(0x15c)][_0x31e849(0x195)]&&AudioManager['clearBattleVoice'](_0xe2d43b),Imported[_0x31e849(0x1b1)]?(_0x1d139b[_0x31e849(0x24e)]=!![],this[_0x31e849(0x18a)](_0x1d139b)):this[_0x31e849(0x201)](_0x1d139b),this[_0x31e849(0x233)](_0x1d139b,_0xe2d43b);},VisuMZ[_0x846649(0x1d5)]['AudioManager_updateVoiceParameters']=AudioManager[_0x846649(0x1d6)],AudioManager[_0x846649(0x1d6)]=function(_0x531a90,_0x4fb7aa){const _0x222adc=_0x846649;VisuMZ[_0x222adc(0x1d5)]['AudioManager_updateVoiceParameters'][_0x222adc(0x223)](this,_0x531a90,_0x4fb7aa),_0x4fb7aa&&_0x4fb7aa[_0x222adc(0x24e)]&&('XhgIG'!==_0x222adc(0x184)?_0x30ef48=_0x222adc(0x1ca)+_0x489e2f(_0x1aac84['$1'])['trim']():_0x531a90[_0x222adc(0x175)]=!![]);},AudioManager[_0x846649(0x233)]=function(_0x463648,_0x53f69d){const _0x1b2163=_0x846649;if(!_0x53f69d)return;const _0x44bb5e=Imported[_0x1b2163(0x1b1)]?this[_0x1b2163(0x143)]:this[_0x1b2163(0x27d)],_0x5c9665=_0x44bb5e[_0x1b2163(0x20d)](_0x3b10bf=>_0x3b10bf[_0x1b2163(0x213)]===_0x463648['name']&&_0x3b10bf[_0x1b2163(0x25c)]===Graphics[_0x1b2163(0x25c)]);if(!_0x5c9665)return;_0x5c9665[_0x1b2163(0x276)]=_0x53f69d[_0x1b2163(0x276)]();},VisuMZ[_0x846649(0x1d5)][_0x846649(0x1ea)]=BattleManager[_0x846649(0x145)],BattleManager[_0x846649(0x145)]=function(){const _0x1df273=_0x846649;VisuMZ[_0x1df273(0x1d5)][_0x1df273(0x1ea)][_0x1df273(0x223)](this),$gameParty[_0x1df273(0x243)](_0x1df273(0x1d4));},VisuMZ[_0x846649(0x1d5)][_0x846649(0x1e5)]=BattleManager[_0x846649(0x1a8)],BattleManager[_0x846649(0x1a8)]=function(){const _0x4fe436=_0x846649;VisuMZ[_0x4fe436(0x1d5)]['BattleManager_processVictory'][_0x4fe436(0x223)](this);if(Imported[_0x4fe436(0x263)])return;$gameParty[_0x4fe436(0x243)]('BattleVictory');},VisuMZ[_0x846649(0x1d5)][_0x846649(0x181)]=BattleManager[_0x846649(0x1df)],BattleManager[_0x846649(0x1df)]=function(){const _0x496e39=_0x846649;VisuMZ['BattleVoices'][_0x496e39(0x181)]['call'](this);if(this[_0x496e39(0x1a7)])this[_0x496e39(0x1a7)][_0x496e39(0x243)]('BattleEscapeSuccess');else{if(_0x496e39(0x206)===_0x496e39(0x206))$gameParty['playBattleVoice'](_0x496e39(0x242));else{_0xb06d14[_0x496e39(0x1c1)](_0x5cc15d,_0x2dafbb);const _0x493d94=_0x536bf3['ActorID']||0x1,_0x1f5841=_0x21053d[_0x496e39(0x1f4)]||'',_0x5b9109=_0x3c85(_0xd4ddd1[_0x496e39(0x285)]||0x0)[_0x496e39(0x15e)](0x0,0x64),_0xeac659=_0x1c79ff[_0x496e39(0x246)](_0x2a92fc(_0x200a2[_0x496e39(0x190)]||0x0),0x0),_0x203be4=_0xe03a55(_0x1efd41[_0x496e39(0x264)]),_0xae14={},_0x5ec430=_0x1949f0[_0x496e39(0x293)]||{};for(const _0x1ec3bc in _0x5ec430){_0xae14[_0x1ec3bc]=_0x5ec430[_0x1ec3bc];}const _0x146b68=_0x440058[_0x496e39(0x176)](_0x493d94);_0x146b68&&(_0x146b68['changeBattleVoiceSet'](_0x1f5841),_0x146b68[_0x496e39(0x283)](_0x5b9109),_0x146b68[_0x496e39(0x239)](_0xeac659),_0x146b68['changeBattleVoicePan'](_0x203be4),_0x146b68[_0x496e39(0x14f)](_0xae14));}}},VisuMZ['BattleVoices'][_0x846649(0x15b)]=BattleManager[_0x846649(0x273)],BattleManager['onEscapeFailure']=function(){const _0x19425b=_0x846649;VisuMZ[_0x19425b(0x1d5)][_0x19425b(0x15b)]['call'](this),this[_0x19425b(0x1a7)]?_0x19425b(0x221)!==_0x19425b(0x173)?this[_0x19425b(0x1a7)][_0x19425b(0x243)]('BattleEscapeFailure'):_0x2013e5['playBattleVoice'](_0x19425b(0x242)):$gameParty[_0x19425b(0x243)](_0x19425b(0x17c));},VisuMZ[_0x846649(0x1d5)][_0x846649(0x196)]=Window_ActorCommand[_0x846649(0x277)][_0x846649(0x1a2)],Window_ActorCommand[_0x846649(0x277)]['setup']=function(_0x18f736){const _0x2f05e7=_0x846649;VisuMZ[_0x2f05e7(0x1d5)][_0x2f05e7(0x196)]['call'](this,_0x18f736);if($gameTroop['aliveMembers']()[_0x2f05e7(0x20f)]<=0x0)return;if(_0x18f736&&_0x18f736===BattleManager[_0x2f05e7(0x1a7)]&&_0x18f736[_0x2f05e7(0x280)]()){if(_0x2f05e7(0x152)!==_0x2f05e7(0x209))_0x18f736['playBattleVoice'](_0x2f05e7(0x1a3));else{const _0x26349b=_0x53ea8c[_0x1ce0b3];if(!_0x26349b)return;let _0x9b2bdb=_0x2f05e7(0x1bc);if(_0x1523de[_0x2f05e7(0x160)]&&_0x26349b[_0x2f05e7(0x265)][_0x2f05e7(0x1b7)](/<POSITIVE STATE>/i))_0x9b2bdb+=_0x2f05e7(0x1e9);else _0x1bb1ea['VisuMZ_1_SkillsStatesCore']&&_0x26349b[_0x2f05e7(0x265)]['match'](/<NEGATIVE STATE>/i)?_0x9b2bdb+=_0x2f05e7(0x1bd):_0x9b2bdb+='Neutral';_0x9b2bdb+=_0x2f05e7(0x1f3),this[_0x2f05e7(0x243)](_0x9b2bdb);}}},VisuMZ[_0x846649(0x1d5)][_0x846649(0x16c)]=Game_System['prototype'][_0x846649(0x15d)],Game_System[_0x846649(0x277)]['initialize']=function(){const _0x485acd=_0x846649;VisuMZ[_0x485acd(0x1d5)]['Game_System_initialize'][_0x485acd(0x223)](this),this[_0x485acd(0x1fc)]();},Game_System['prototype'][_0x846649(0x1fc)]=function(){const _0x56d5d3=_0x846649;this[_0x56d5d3(0x258)]=![];},Game_System['prototype']['setBattleVoicesMute']=function(_0x27a2b2){const _0x42bf0b=_0x846649;if(this[_0x42bf0b(0x258)]===undefined)this[_0x42bf0b(0x1fc)]();this[_0x42bf0b(0x258)]=_0x27a2b2;},Game_System[_0x846649(0x277)]['areBattleVoicesMute']=function(){const _0x31fda1=_0x846649;if(this[_0x31fda1(0x258)]===undefined)this[_0x31fda1(0x1fc)]();return this[_0x31fda1(0x258)];},VisuMZ[_0x846649(0x1d5)][_0x846649(0x17e)]=Game_Action[_0x846649(0x277)]['apply'],Game_Action[_0x846649(0x277)][_0x846649(0x19d)]=function(_0x263f4a){const _0x22dd02=_0x846649;VisuMZ['BattleVoices'][_0x22dd02(0x17e)][_0x22dd02(0x223)](this,_0x263f4a);if(!SceneManager[_0x22dd02(0x17d)]())return;if(!BattleManager[_0x22dd02(0x23a)])return;if(!_0x263f4a)return;this[_0x22dd02(0x270)]()[_0x22dd02(0x1fb)](this,_0x263f4a);},Game_BattlerBase[_0x846649(0x277)][_0x846649(0x1a4)]=function(){const _0xdd75f5=_0x846649,_0x47c149=VisuMZ[_0xdd75f5(0x1d5)][_0xdd75f5(0x15c)],_0x921fd6=VisuMZ[_0xdd75f5(0x1d5)][_0xdd75f5(0x212)],_0x199676=this[_0xdd75f5(0x1d0)]()?this[_0xdd75f5(0x176)]():this['enemy'](),_0x2f7c59=_0x199676[_0xdd75f5(0x265)]||'';this['_battleVoice']={'set':'','volume':_0x47c149[_0xdd75f5(0x285)]??0x64,'pitch':_0x47c149[_0xdd75f5(0x190)]??0x64,'pan':_0x47c149[_0xdd75f5(0x28c)]??0x0};_0x2f7c59[_0xdd75f5(0x1b7)](_0x921fd6['VoiceSet'])&&(this[_0xdd75f5(0x175)]['set']=String(RegExp['$1'])[_0xdd75f5(0x172)]());_0x2f7c59[_0xdd75f5(0x1b7)](_0x921fd6[_0xdd75f5(0x222)])&&(this['_battleVoice']['volume']=(Number(RegExp['$1'])||0x0)[_0xdd75f5(0x15e)](0x0,0x64));_0x2f7c59[_0xdd75f5(0x1b7)](_0x921fd6[_0xdd75f5(0x288)])&&(this[_0xdd75f5(0x175)]['pitch']=Math[_0xdd75f5(0x246)](Number(RegExp['$1'])||0x0,0x0));_0x2f7c59[_0xdd75f5(0x1b7)](_0x921fd6[_0xdd75f5(0x16d)])&&(this['_battleVoice']['pan']=Number(RegExp['$1'])||0x0);const _0xd4f376=_0x2f7c59[_0xdd75f5(0x1b7)](_0x921fd6[_0xdd75f5(0x226)]);if(_0xd4f376){this[_0xdd75f5(0x175)][_0xdd75f5(0x216)]={};for(const _0xed7994 of _0xd4f376){_0xed7994['match'](_0x921fd6[_0xdd75f5(0x226)]);const _0x381d9a=String(RegExp['$1'])[_0xdd75f5(0x172)](),_0x8dcde8=String(RegExp['$2'])[_0xdd75f5(0x172)]();this['_battleVoice'][_0xdd75f5(0x216)][_0x381d9a]=_0x8dcde8;}}},VisuMZ[_0x846649(0x1d5)][_0x846649(0x19e)]=Game_Actor['prototype'][_0x846649(0x1a2)],Game_Actor[_0x846649(0x277)][_0x846649(0x1a2)]=function(_0x21873a){const _0x55260c=_0x846649;VisuMZ['BattleVoices']['Game_Actor_setup'][_0x55260c(0x223)](this,_0x21873a),this[_0x55260c(0x1a4)]();},Game_BattlerBase['prototype'][_0x846649(0x15f)]=function(){const _0x476c54=_0x846649;if(this[_0x476c54(0x175)]===undefined)this[_0x476c54(0x1a4)]();return this[_0x476c54(0x175)];},Game_BattlerBase[_0x846649(0x277)][_0x846649(0x146)]=function(){const _0x1493e7=_0x846649;if(BattleManager[_0x1493e7(0x23a)]===this){if(_0x1493e7(0x238)===_0x1493e7(0x238)){if(VisuMZ[_0x1493e7(0x1d5)][_0x1493e7(0x15c)][_0x1493e7(0x24f)])return![];}else return this[_0x1493e7(0x1f5)][_0x45217f];}return!![];},Game_Enemy[_0x846649(0x277)][_0x846649(0x1a4)]=function(){const _0x14e22f=_0x846649;Game_Battler['prototype'][_0x14e22f(0x1a4)][_0x14e22f(0x223)](this),Imported[_0x14e22f(0x286)]&&this['setupBattleVoiceForTraits']();},Game_Enemy[_0x846649(0x277)][_0x846649(0x22e)]=function(){const _0x420cca=_0x846649,_0x5f293e=this['getTraitSetKeys']()['remove'](_0x420cca(0x20c)),_0x13aeb4=DataManager[_0x420cca(0x197)](this['enemy']());for(const _0x2038dd of _0x5f293e){const _0x29c5ae=this[_0x420cca(0x287)](_0x2038dd)[_0x420cca(0x229)][_0x420cca(0x27e)]()['trim']();traitData=_0x13aeb4[_0x29c5ae];if(traitData){if(traitData[_0x420cca(0x27a)])this[_0x420cca(0x175)][_0x420cca(0x27a)]=traitData[_0x420cca(0x27a)][_0x420cca(0x27e)]()[_0x420cca(0x172)]();if(traitData[_0x420cca(0x285)])this['_battleVoice'][_0x420cca(0x27a)]=traitData['volume'];if(traitData[_0x420cca(0x190)])this[_0x420cca(0x175)][_0x420cca(0x27a)]=traitData[_0x420cca(0x190)];if(traitData[_0x420cca(0x28c)])this[_0x420cca(0x175)][_0x420cca(0x27a)]=traitData[_0x420cca(0x28c)];}}},Game_BattlerBase[_0x846649(0x277)][_0x846649(0x164)]=function(_0x3eeeb1){const _0x2a7ae0=_0x846649;if(this[_0x2a7ae0(0x175)]===undefined)this[_0x2a7ae0(0x1a4)]();this[_0x2a7ae0(0x175)][_0x2a7ae0(0x27a)]=_0x3eeeb1;},Game_BattlerBase[_0x846649(0x277)][_0x846649(0x283)]=function(_0x1258ae){const _0x175a1b=_0x846649;if(this[_0x175a1b(0x175)]===undefined)this[_0x175a1b(0x1a4)]();this[_0x175a1b(0x175)][_0x175a1b(0x285)]=_0x1258ae[_0x175a1b(0x15e)](0x0,0x64);},Game_BattlerBase[_0x846649(0x277)]['changeBattleVoicePitch']=function(_0x1dc218){const _0x1e5093=_0x846649;if(this[_0x1e5093(0x175)]===undefined)this['setupBattleVoice']();this['_battleVoice'][_0x1e5093(0x190)]=Math['max'](_0x1dc218,0x0);},Game_BattlerBase[_0x846649(0x277)][_0x846649(0x27f)]=function(_0x4a0344){const _0x1b4465=_0x846649;if(this[_0x1b4465(0x175)]===undefined)this[_0x1b4465(0x1a4)]();this[_0x1b4465(0x175)][_0x1b4465(0x28c)]=_0x4a0344;},Game_BattlerBase['prototype'][_0x846649(0x14f)]=function(_0x52b655){const _0x33d865=_0x846649;if(this['_battleVoice']===undefined)this[_0x33d865(0x1a4)]();this[_0x33d865(0x175)][_0x33d865(0x216)]=_0x52b655;},VisuMZ[_0x846649(0x1d5)][_0x846649(0x211)]=Game_BattlerBase[_0x846649(0x277)][_0x846649(0x274)],Game_BattlerBase['prototype'][_0x846649(0x274)]=function(_0x2b6952){const _0x10d249=_0x846649,_0x5375b7=this[_0x10d249(0x14d)];VisuMZ[_0x10d249(0x1d5)][_0x10d249(0x211)]['call'](this,_0x2b6952);const _0x365203=this['_hp'];this[_0x10d249(0x1d3)](_0x5375b7,_0x365203);},AudioManager[_0x846649(0x1da)]=![],AudioManager[_0x846649(0x18f)]=function(){const _0x9bab54=_0x846649;if(!Imported[_0x9bab54(0x1b1)])return![];if(!AudioManager[_0x9bab54(0x21d)])return![];if(!AudioManager[_0x9bab54(0x21d)]())return![];return!![];},Game_BattlerBase[_0x846649(0x277)]['playBattleVoice']=function(_0x44d5ea){const _0x20b54a=_0x846649;if(!ConfigManager['battleVoices'])return;const _0x4051ae=this['getBattleVoiceData']();let _0x2d9e43=_0x4051ae['set'];if(AudioManager[_0x20b54a(0x18f)]()){if(_0x4051ae['languages']){const _0x5c4573=ConfigManager[_0x20b54a(0x1d8)],_0x1facb9=_0x4051ae[_0x20b54a(0x216)][_0x5c4573];if(_0x1facb9)_0x2d9e43=_0x1facb9;}}if(!_0x2d9e43)return;const _0x216452=AudioManager['getVoiceSet'](_0x2d9e43);if(!_0x216452)return;const _0x361ec0=_0x216452[_0x44d5ea];if(!_0x361ec0)return;if(_0x361ec0[_0x20b54a(0x20f)]<=0x0)return;const _0xdb03a6=_0x361ec0[Math['randomInt'](_0x361ec0['length'])],_0x564bdd={'name':_0xdb03a6,'volume':_0x4051ae['volume'],'pitch':_0x4051ae[_0x20b54a(0x190)],'pan':_0x4051ae['pan']};let _0x23d11b=0x0;if([_0x20b54a(0x1b9)][_0x20b54a(0x210)](_0x44d5ea)){if(_0x20b54a(0x28f)!==_0x20b54a(0x28f)){const _0x313f59=_0x3fa0c7[_0x20b54a(0x227)](_0x4f8a24[_0x20b54a(0x148)]());if(this[_0x20b54a(0x247)](_0x313f59)){this[_0x20b54a(0x243)](_0x313f59);return;}}else _0x23d11b=VisuMZ[_0x20b54a(0x1d5)][_0x20b54a(0x15c)][_0x20b54a(0x25d)]??0x5dc;}setTimeout(AudioManager[_0x20b54a(0x243)][_0x20b54a(0x26e)](AudioManager,_0x564bdd,this),_0x23d11b),AudioManager[_0x20b54a(0x1da)]&&console[_0x20b54a(0x14a)](_0x20b54a(0x186)[_0x20b54a(0x23d)](this['name'](),_0x44d5ea,_0x564bdd[_0x20b54a(0x213)]));},Game_BattlerBase['prototype'][_0x846649(0x247)]=function(_0x3c1998){const _0x535ad4=_0x846649;if(!ConfigManager[_0x535ad4(0x192)])return![];const _0x44cde1=this[_0x535ad4(0x15f)]();let _0x55715e=_0x44cde1[_0x535ad4(0x27a)];if(AudioManager[_0x535ad4(0x18f)]()){if(_0x44cde1['languages']){const _0x355623=ConfigManager[_0x535ad4(0x1d8)],_0xbf27e6=_0x44cde1[_0x535ad4(0x216)][_0x355623];if(_0xbf27e6)_0x55715e=_0xbf27e6;}}if(!_0x55715e)return![];const _0x5a84de=AudioManager['getVoiceSet'](_0x55715e);if(!_0x5a84de)return![];const _0x3cfe53=_0x5a84de[_0x3c1998];return _0x3cfe53&&_0x3cfe53[_0x535ad4(0x20f)]>0x0;},VisuMZ['BattleVoices'][_0x846649(0x18b)]=Game_Battler[_0x846649(0x277)][_0x846649(0x21a)],Game_Battler[_0x846649(0x277)]['performActionStart']=function(_0x4dc23b){const _0x2c7899=_0x846649;VisuMZ['BattleVoices'][_0x2c7899(0x18b)][_0x2c7899(0x223)](this,_0x4dc23b);if(!SceneManager[_0x2c7899(0x17d)]())return;if(!_0x4dc23b)return;this[_0x2c7899(0x284)](_0x4dc23b);},Game_Battler['prototype'][_0x846649(0x284)]=function(_0xfa57){const _0x50250d=_0x846649;if(DataManager[_0x50250d(0x1a9)](_0xfa57[_0x50250d(0x148)]())){if(_0x50250d(0x1c5)!==_0x50250d(0x27c)){const _0x513f37=DataManager[_0x50250d(0x1ef)](_0xfa57[_0x50250d(0x148)]());if(this['hasBattleVoiceKey'](_0x513f37)){this[_0x50250d(0x243)](_0x513f37);return;}}else _0x399a18[_0x50250d(0x243)](_0x50250d(0x1a3));}if(DataManager[_0x50250d(0x1d9)](_0xfa57[_0x50250d(0x148)]())){if(_0x50250d(0x1e3)!==_0x50250d(0x1be)){const _0x4716b6=DataManager[_0x50250d(0x1c4)](_0xfa57[_0x50250d(0x148)]());if(this[_0x50250d(0x247)](_0x4716b6)){if(_0x50250d(0x1e2)===_0x50250d(0x236))_0x420bcc+=_0x50250d(0x16f);else{this[_0x50250d(0x243)](_0x4716b6);return;}}}else _0x433b45+=_0x50250d(0x232);}if(DataManager[_0x50250d(0x1a6)](_0xfa57['item']())){if(_0x50250d(0x1cd)===_0x50250d(0x16a)){_0x32b205['BattleVoices'][_0x50250d(0x196)]['call'](this,_0x4167df);if(_0xe4250e['aliveMembers']()[_0x50250d(0x20f)]<=0x0)return;_0x3e3c84&&_0x1c66d5===_0x2cfb2c['_currentActor']&&_0x5debc8[_0x50250d(0x280)]()&&_0x8a86b7['playBattleVoice'](_0x50250d(0x1a3));}else{const _0x56168f=DataManager[_0x50250d(0x227)](_0xfa57[_0x50250d(0x148)]());if(this['hasBattleVoiceKey'](_0x56168f)){this[_0x50250d(0x243)](_0x56168f);return;}}}if(DataManager[_0x50250d(0x180)](_0xfa57['item']())){if(_0x50250d(0x26f)!==_0x50250d(0x25b)){const _0x1af264=DataManager[_0x50250d(0x21e)](_0xfa57[_0x50250d(0x148)]());if(this[_0x50250d(0x247)](_0x1af264)){if(_0x50250d(0x251)!==_0x50250d(0x24d)){this[_0x50250d(0x243)](_0x1af264);return;}else _0x3f1be8['destroy'](),_0x46765f[_0x50250d(0x1b0)](_0x322aa5);}}else _0x68039b[_0x50250d(0x1d5)][_0x50250d(0x181)]['call'](this),this[_0x50250d(0x1a7)]?this['_currentActor'][_0x50250d(0x243)]('BattleEscapeSuccess'):_0x318aaa['playBattleVoice'](_0x50250d(0x242));}if(DataManager[_0x50250d(0x14b)](_0xfa57[_0x50250d(0x148)]())){const _0x52518e=DataManager[_0x50250d(0x22b)](_0xfa57[_0x50250d(0x148)]());if(this['hasBattleVoiceKey'](_0x52518e)){this[_0x50250d(0x243)](_0x52518e);return;}}this[_0x50250d(0x1dd)](_0xfa57);},Game_Battler[_0x846649(0x277)]['performActionStartBaseVoice']=function(_0x767f74){const _0x5d0e26=_0x846649;let _0x3a83d5=_0x5d0e26(0x1d7);if(_0x767f74[_0x5d0e26(0x267)]())_0x3a83d5+='BasicAttack';else{if(_0x767f74[_0x5d0e26(0x161)]()){if(_0x5d0e26(0x22c)===_0x5d0e26(0x1f7)){_0x2ba1ab[_0x5d0e26(0x1d5)][_0x5d0e26(0x199)]['call'](this,_0x15f17e,_0x507b0b);if(!_0x3a40ba[_0x5d0e26(0x17d)]())return;if(!_0x5a6399[_0x5d0e26(0x23a)])return;if(!this['allowSelfResponseVoice']())return;this['playBattleVoice'](_0x5d0e26(0x149));}else _0x3a83d5+='BasicGuard';}else{if(_0x767f74['isSkill']()){if(_0x5d0e26(0x1eb)===_0x5d0e26(0x254))_0x2cd415[_0x5d0e26(0x1d5)][_0x5d0e26(0x23f)]['call'](this,_0x9d833d,_0x3162b0),_0x2a9acf&&_0x2e8450['battleVoice']&&(_0x143cb7[_0x5d0e26(0x175)]=!![]);else{_0x3a83d5+=_0x5d0e26(0x19b),_0x3a83d5+=_0x767f74[_0x5d0e26(0x15a)]()&&!_0x767f74[_0x5d0e26(0x167)]()?_0x5d0e26(0x235):_0x5d0e26(0x168);if(_0x767f74[_0x5d0e26(0x202)]())_0x3a83d5+=_0x5d0e26(0x26c);if(_0x767f74[_0x5d0e26(0x1b3)]())_0x3a83d5+='Physical';if(_0x767f74[_0x5d0e26(0x224)]())_0x3a83d5+=_0x5d0e26(0x22f);}}else _0x767f74['isItem']()&&(_0x3a83d5+=_0x5d0e26(0x1f9),_0x3a83d5+=_0x767f74[_0x5d0e26(0x15a)]()&&!_0x767f74[_0x5d0e26(0x167)]()?_0x5d0e26(0x235):_0x5d0e26(0x168));}}this[_0x5d0e26(0x243)](_0x3a83d5);},VisuMZ['BattleVoices'][_0x846649(0x252)]=Game_Battler[_0x846649(0x277)][_0x846649(0x281)],Game_Battler['prototype'][_0x846649(0x281)]=function(_0xd68b63){const _0x46a463=_0x846649;VisuMZ[_0x46a463(0x1d5)][_0x46a463(0x252)]['call'](this,_0xd68b63);if(!SceneManager[_0x46a463(0x17d)]())return;if(!_0xd68b63)return;this[_0x46a463(0x269)](_0xd68b63);},Game_Battler[_0x846649(0x277)]['performActionVoice']=function(_0x342766){const _0x159d83=_0x846649;let _0x36d2c3=_0x159d83(0x26a);if(_0x342766[_0x159d83(0x267)]()||_0x342766[_0x159d83(0x161)]()||_0x342766[_0x159d83(0x25f)]())return;else{if(_0x342766['isSkill']()){_0x36d2c3+='Skill';if(_0x342766['isCertainHit']())_0x36d2c3+=_0x159d83(0x26c);if(_0x342766[_0x159d83(0x1b3)]())_0x36d2c3+=_0x159d83(0x27b);if(_0x342766[_0x159d83(0x224)]())_0x36d2c3+=_0x159d83(0x22f);}}this[_0x159d83(0x243)](_0x36d2c3);},VisuMZ[_0x846649(0x1d5)][_0x846649(0x275)]=Game_Actor[_0x846649(0x277)][_0x846649(0x261)],Game_Actor[_0x846649(0x277)][_0x846649(0x261)]=function(){const _0x2fe758=_0x846649;VisuMZ['BattleVoices'][_0x2fe758(0x275)]['call'](this);if(!SceneManager['isSceneBattle']())return;this[_0x2fe758(0x243)](_0x2fe758(0x203));},VisuMZ['BattleVoices'][_0x846649(0x26b)]=Game_Enemy[_0x846649(0x277)][_0x846649(0x261)],Game_Enemy[_0x846649(0x277)][_0x846649(0x261)]=function(){const _0xf04864=_0x846649;VisuMZ[_0xf04864(0x1d5)][_0xf04864(0x26b)]['call'](this);if(!SceneManager[_0xf04864(0x17d)]())return;this[_0xf04864(0x243)]('PerformActionBasicAttack');},Game_Battler[_0x846649(0x277)]['applyGameActionVoice']=function(_0x14a3f,_0x4657ec){const _0x27a614=_0x846649;if(!_0x14a3f)return;if(!_0x4657ec)return;if(_0x4657ec[_0x27a614(0x14d)]<=0x0){_0x14a3f[_0x27a614(0x170)]=_0x14a3f[_0x27a614(0x170)]||{};const _0x2326b1=_0x4657ec[_0x27a614(0x276)]();if(_0x14a3f[_0x27a614(0x170)][_0x2326b1])return;_0x14a3f['_defeatedTargetsVoiced'][_0x2326b1]=!![],this['playBattleVoice'](_0x27a614(0x262));return;}const _0x45c403=_0x4657ec['result']();if(!_0x45c403)return;if(_0x45c403['critical']){this[_0x27a614(0x243)]('PerformActionCritical');return;}if(_0x45c403[_0x27a614(0x23e)]||_0x45c403['evaded']){this[_0x27a614(0x243)](_0x27a614(0x1af));return;}},Game_Battler[_0x846649(0x277)][_0x846649(0x1d3)]=function(_0x7e74b2,_0x288ebb){const _0x417df0=_0x846649;if(!SceneManager['isSceneBattle']())return;if(![_0x417df0(0x1f6),_0x417df0(0x220)][_0x417df0(0x210)](BattleManager[_0x417df0(0x278)]))return;if(!BattleManager['_subject'])return;if(!this[_0x417df0(0x146)]())return;let _0x49a831='HpChange';const _0x329f5b=BattleManager['_subject']&&BattleManager[_0x417df0(0x23a)][_0x417df0(0x1d0)]()===this[_0x417df0(0x1d0)]();if(_0x7e74b2>0x0&&_0x288ebb<=0x0){if('pJpTD'!==_0x417df0(0x24c)){if(this[_0x417df0(0x175)]===_0x7401b)this['setupBattleVoice']();this[_0x417df0(0x175)][_0x417df0(0x28c)]=_0x59fdbf;}else _0x49a831+=_0x417df0(0x158);}else{if(_0x7e74b2<=0x0&&_0x288ebb>0x1){if(_0x417df0(0x1aa)!=='VEDnC')_0x49a831+=_0x417df0(0x16f);else{_0x6f0c80[_0x417df0(0x170)]=_0x53561a[_0x417df0(0x170)]||{};const _0x24e519=_0x580ef2[_0x417df0(0x276)]();if(_0x59d138[_0x417df0(0x170)][_0x24e519])return;_0x408425['_defeatedTargetsVoiced'][_0x24e519]=!![],this[_0x417df0(0x243)]('PerformActionDefeatFoe');return;}}else{if(_0x7e74b2>_0x288ebb){if(_0x417df0(0x272)===_0x417df0(0x272)){const _0x2ff47b=_0x7e74b2-_0x288ebb,_0x5d47aa=_0x2ff47b/this[_0x417df0(0x28b)];_0x49a831+=_0x417df0(0x260);if(this[_0x417df0(0x161)]())_0x49a831+=_0x417df0(0x19c);else{if(_0x5d47aa>=0.5)_0x49a831+='Heavy';else{if(_0x5d47aa>=0.25){if(_0x417df0(0x225)!=='FcZUj')return this[_0x417df0(0x1e7)][_0x38cddf];else _0x49a831+=_0x417df0(0x1ee);}else _0x49a831+=_0x417df0(0x157);}}}else _0x4a188d+='Positive';}else{if(_0x329f5b){const _0x3923e9=_0x288ebb-_0x7e74b2,_0x45d27e=_0x3923e9/this[_0x417df0(0x28b)];_0x49a831+='Recover';if(_0x45d27e>=0.5)_0x49a831+='Heavy';else _0x45d27e>=0.25?_0x49a831+=_0x417df0(0x1ee):_0x417df0(0x18d)!==_0x417df0(0x18d)?_0x4ef33a['playBattleVoice']('BattleEscapeFailure'):_0x49a831+='Light';}else{if(_0x7e74b2===_0x288ebb&&!_0x329f5b)_0x49a831+=_0x417df0(0x191);else{if(_0x417df0(0x1ff)==='cCEuP')_0x520320(_0x417df0(0x1c3)[_0x417df0(0x23d)](_0x20229d,_0x26d442,_0x48f70c)),_0x1e13bf[_0x417df0(0x228)]();else return;}}}}}this['playBattleVoice'](_0x49a831);},VisuMZ[_0x846649(0x1d5)][_0x846649(0x1c7)]=Game_Battler[_0x846649(0x277)][_0x846649(0x1ab)],Game_Battler[_0x846649(0x277)]['performMiss']=function(){const _0x6269ab=_0x846649;VisuMZ[_0x6269ab(0x1d5)][_0x6269ab(0x1c7)][_0x6269ab(0x223)](this);if(!SceneManager[_0x6269ab(0x17d)]())return;if(!this[_0x6269ab(0x146)]())return;this[_0x6269ab(0x243)](_0x6269ab(0x1c9));},VisuMZ[_0x846649(0x1d5)][_0x846649(0x1d1)]=Game_Battler['prototype'][_0x846649(0x217)],Game_Battler[_0x846649(0x277)]['performEvasion']=function(){const _0x19af11=_0x846649;VisuMZ[_0x19af11(0x1d5)][_0x19af11(0x1d1)][_0x19af11(0x223)](this);if(!SceneManager['isSceneBattle']())return;if(!this[_0x19af11(0x146)]())return;this[_0x19af11(0x243)]('ActionResultEvasion');},VisuMZ[_0x846649(0x1d5)]['Game_Battler_performMagicEvasion']=Game_Battler[_0x846649(0x277)][_0x846649(0x153)],Game_Battler[_0x846649(0x277)][_0x846649(0x153)]=function(){const _0x15f9ee=_0x846649;VisuMZ[_0x15f9ee(0x1d5)]['Game_Battler_performMagicEvasion'][_0x15f9ee(0x223)](this);if(!SceneManager[_0x15f9ee(0x17d)]())return;if(!this['allowSelfResponseVoice']())return;this[_0x15f9ee(0x243)](_0x15f9ee(0x1a5));},VisuMZ[_0x846649(0x1d5)][_0x846649(0x185)]=Game_Battler[_0x846649(0x277)][_0x846649(0x1f8)],Game_Battler['prototype'][_0x846649(0x1f8)]=function(){const _0x23fc68=_0x846649;VisuMZ['BattleVoices'][_0x23fc68(0x185)][_0x23fc68(0x223)](this);if(!SceneManager['isSceneBattle']())return;if(!this[_0x23fc68(0x146)]())return;this[_0x23fc68(0x243)](_0x23fc68(0x1dc));},VisuMZ['BattleVoices'][_0x846649(0x1e6)]=Game_Battler[_0x846649(0x277)]['performReflection'],Game_Battler[_0x846649(0x277)][_0x846649(0x1d2)]=function(){const _0x3a013a=_0x846649;VisuMZ['BattleVoices'][_0x3a013a(0x1e6)]['call'](this);if(!SceneManager[_0x3a013a(0x17d)]())return;if(!this[_0x3a013a(0x146)]())return;this[_0x3a013a(0x243)](_0x3a013a(0x198));},VisuMZ['BattleVoices'][_0x846649(0x1c2)]=Game_Battler[_0x846649(0x277)][_0x846649(0x20e)],Game_Battler['prototype'][_0x846649(0x20e)]=function(_0x939068){const _0xbce160=_0x846649;VisuMZ[_0xbce160(0x1d5)]['Game_Battler_performSubstitute'][_0xbce160(0x223)](this,_0x939068);if(!SceneManager[_0xbce160(0x17d)]())return;if(!this['allowSelfResponseVoice']())return;this[_0xbce160(0x243)](_0xbce160(0x19a));},VisuMZ['BattleVoices']['Game_Battler_addBuff']=Game_Battler[_0x846649(0x277)]['addBuff'],Game_Battler['prototype'][_0x846649(0x259)]=function(_0x551876,_0x156223){const _0x1c8d8c=_0x846649;VisuMZ['BattleVoices'][_0x1c8d8c(0x271)]['call'](this,_0x551876,_0x156223);if(!SceneManager[_0x1c8d8c(0x17d)]())return;if(!BattleManager[_0x1c8d8c(0x23a)])return;if(!this[_0x1c8d8c(0x146)]())return;this['playBattleVoice'](_0x1c8d8c(0x14e));},VisuMZ[_0x846649(0x1d5)][_0x846649(0x21b)]=Game_Battler[_0x846649(0x277)]['removeBuffsAuto'],Game_Battler[_0x846649(0x277)][_0x846649(0x1de)]=function(){const _0x197c43=_0x846649;this[_0x197c43(0x1bb)]=!![],VisuMZ[_0x197c43(0x1d5)][_0x197c43(0x21b)]['call'](this),this[_0x197c43(0x1bb)]=undefined;},VisuMZ[_0x846649(0x1d5)][_0x846649(0x199)]=Game_Battler['prototype'][_0x846649(0x245)],Game_Battler[_0x846649(0x277)]['addDebuff']=function(_0x3419d3,_0x2bf84e){const _0x4446d0=_0x846649;VisuMZ[_0x4446d0(0x1d5)][_0x4446d0(0x199)][_0x4446d0(0x223)](this,_0x3419d3,_0x2bf84e);if(!SceneManager[_0x4446d0(0x17d)]())return;if(!BattleManager[_0x4446d0(0x23a)])return;if(!this[_0x4446d0(0x146)]())return;this[_0x4446d0(0x243)](_0x4446d0(0x149));},VisuMZ[_0x846649(0x1d5)][_0x846649(0x1f2)]=Game_Battler[_0x846649(0x277)][_0x846649(0x237)],Game_Battler[_0x846649(0x277)][_0x846649(0x237)]=function(_0x41735c){const _0x25fcef=_0x846649,_0x5472f0=this[_0x25fcef(0x24b)](_0x41735c),_0xe0b740=this[_0x25fcef(0x23c)](_0x41735c);VisuMZ[_0x25fcef(0x1d5)][_0x25fcef(0x1f2)][_0x25fcef(0x223)](this,_0x41735c);if(!SceneManager[_0x25fcef(0x17d)]())return;if(!BattleManager['_subject'])return;if(this[_0x25fcef(0x1bb)])return;if(!this[_0x25fcef(0x146)]())return;if(_0x5472f0)this[_0x25fcef(0x243)](_0x25fcef(0x204));if(_0xe0b740)this[_0x25fcef(0x243)](_0x25fcef(0x1e4));},VisuMZ[_0x846649(0x1d5)][_0x846649(0x151)]=Game_Battler[_0x846649(0x277)][_0x846649(0x162)],Game_Battler[_0x846649(0x277)][_0x846649(0x162)]=function(_0x1f220d){const _0x44fe40=_0x846649;VisuMZ[_0x44fe40(0x1d5)][_0x44fe40(0x151)]['call'](this,_0x1f220d);if(!SceneManager[_0x44fe40(0x17d)]())return;if(!BattleManager[_0x44fe40(0x23a)])return;if(!this[_0x44fe40(0x146)]())return;if(!this[_0x44fe40(0x241)](_0x1f220d))return;this[_0x44fe40(0x1fd)](_0x1f220d);},Game_Battler['prototype'][_0x846649(0x1fd)]=function(_0x4b0ce8){const _0x32a6f0=_0x846649,_0x3a0ff9=$dataStates[_0x4b0ce8];if(!_0x3a0ff9)return;let _0x4d2904=_0x32a6f0(0x1bc);if(Imported[_0x32a6f0(0x160)]&&_0x3a0ff9[_0x32a6f0(0x265)][_0x32a6f0(0x1b7)](/<POSITIVE STATE>/i))_0x4d2904+=_0x32a6f0(0x1e9);else Imported['VisuMZ_1_SkillsStatesCore']&&_0x3a0ff9[_0x32a6f0(0x265)][_0x32a6f0(0x1b7)](/<NEGATIVE STATE>/i)?_0x32a6f0(0x1a1)===_0x32a6f0(0x1a1)?_0x4d2904+=_0x32a6f0(0x1bd):_0x2ac860=_0x32a6f0(0x1e8)+_0x55ce3f(_0x1ac4af['$1'])[_0x32a6f0(0x172)]():_0x4d2904+='Neutral';_0x4d2904+=_0x32a6f0(0x1f3),this[_0x32a6f0(0x243)](_0x4d2904);},VisuMZ[_0x846649(0x1d5)][_0x846649(0x257)]=Game_Battler[_0x846649(0x277)][_0x846649(0x1db)],Game_Battler['prototype'][_0x846649(0x1db)]=function(_0x2c259b){const _0x38fa59=_0x846649;this[_0x38fa59(0x193)]=!![],VisuMZ[_0x38fa59(0x1d5)][_0x38fa59(0x257)]['call'](this,_0x2c259b),this['_expireStatesAuto']=undefined;},VisuMZ['BattleVoices']['Game_Battler_removeState']=Game_Battler[_0x846649(0x277)][_0x846649(0x1cf)],Game_Battler[_0x846649(0x277)][_0x846649(0x1cf)]=function(_0xdb3bc){const _0x1b19c5=_0x846649,_0x36f0e8=this[_0x1b19c5(0x241)](_0xdb3bc);VisuMZ[_0x1b19c5(0x1d5)]['Game_Battler_removeState'][_0x1b19c5(0x223)](this,_0xdb3bc);if(!SceneManager[_0x1b19c5(0x17d)]())return;if(!BattleManager[_0x1b19c5(0x23a)])return;if(this[_0x1b19c5(0x193)])return;if(!this[_0x1b19c5(0x146)]())return;if(!_0x36f0e8)return;this[_0x1b19c5(0x174)](_0xdb3bc);},Game_Battler[_0x846649(0x277)][_0x846649(0x174)]=function(_0x4efded){const _0x514345=_0x846649,_0x4e09dc=$dataStates[_0x4efded];if(!_0x4e09dc)return;let _0xcc06c5=_0x514345(0x1bc);if(Imported[_0x514345(0x160)]&&_0x4e09dc[_0x514345(0x265)][_0x514345(0x1b7)](/<POSITIVE STATE>/i))_0xcc06c5+=_0x514345(0x1e9);else Imported[_0x514345(0x160)]&&_0x4e09dc[_0x514345(0x265)][_0x514345(0x1b7)](/<NEGATIVE STATE>/i)?_0xcc06c5+=_0x514345(0x1bd):_0xcc06c5+='Neutral';_0xcc06c5+=_0x514345(0x189),this[_0x514345(0x243)](_0xcc06c5);},Game_Party[_0x846649(0x277)][_0x846649(0x243)]=function(_0x147f22){const _0x3ede8c=_0x846649,_0x57ec9c=[];for(const _0x9897fb of this[_0x3ede8c(0x255)]()){const _0x53abdb=_0x9897fb['getBattleVoiceData']();if(!_0x53abdb)continue;const _0x81068a=AudioManager[_0x3ede8c(0x24a)](_0x53abdb['set']);if(!_0x81068a)continue;const _0xda0908=_0x81068a[_0x147f22];if(!_0xda0908)continue;if(_0xda0908['length']<=0x0)return;_0x57ec9c['push'](_0x9897fb);}const _0x51836d=_0x57ec9c[Math[_0x3ede8c(0x208)](_0x57ec9c[_0x3ede8c(0x20f)])];_0x51836d&&_0x51836d[_0x3ede8c(0x243)](_0x147f22);},VisuMZ['BattleVoices'][_0x846649(0x26d)]=Scene_Options[_0x846649(0x277)][_0x846649(0x150)],Scene_Options[_0x846649(0x277)]['maxCommands']=function(){const _0x19a178=_0x846649;let _0x24ca0d=VisuMZ['BattleVoices'][_0x19a178(0x26d)]['call'](this);const _0x1c6a60=VisuMZ[_0x19a178(0x1d5)][_0x19a178(0x15c)];if(_0x1c6a60[_0x19a178(0x256)][_0x19a178(0x28a)]&&_0x1c6a60[_0x19a178(0x256)][_0x19a178(0x295)])_0x24ca0d++;return _0x24ca0d;},VisuMZ[_0x846649(0x1d5)][_0x846649(0x20b)]=Window_Message['prototype'][_0x846649(0x268)],Window_Message[_0x846649(0x277)][_0x846649(0x268)]=function(){const _0x3bbe2b=_0x846649,_0x281a9b=AudioManager[_0x3bbe2b(0x143)];if(_0x281a9b[_0x3bbe2b(0x20f)]<=0x0)return;const _0x24c716=_0x281a9b[_0x281a9b[_0x3bbe2b(0x20f)]-0x1];if(!_0x24c716[_0x3bbe2b(0x1ac)]())return;if(_0x24c716[_0x3bbe2b(0x175)])return;VisuMZ[_0x3bbe2b(0x1d5)]['Window_Message_registerLastPlayedVoiceSound']['call'](this);},VisuMZ[_0x846649(0x1d5)]['Window_Options_addGeneralOptions']=Window_Options[_0x846649(0x277)]['addGeneralOptions'],Window_Options['prototype'][_0x846649(0x19f)]=function(){const _0x233b3f=_0x846649;VisuMZ['BattleVoices'][_0x233b3f(0x282)][_0x233b3f(0x223)](this),this[_0x233b3f(0x17a)]();},Window_Options[_0x846649(0x277)][_0x846649(0x17a)]=function(){const _0x3da388=_0x846649;if(!VisuMZ[_0x3da388(0x1d5)][_0x3da388(0x15c)][_0x3da388(0x256)][_0x3da388(0x28a)])return;const _0x3456e1=TextManager[_0x3da388(0x192)],_0x4c115f=_0x3da388(0x192);this[_0x3da388(0x188)](_0x3456e1,_0x4c115f);};