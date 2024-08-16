//=============================================================================
// VisuStella MZ - Equip Battle Skills
// VisuMZ_2_EquipBattleSkills.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_EquipBattleSkills = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EquipBattleSkills = VisuMZ.EquipBattleSkills || {};
VisuMZ.EquipBattleSkills.version = 1.07;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.07] [EquipBattleSkills]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Equip_Battle_Skills_VisuStella_MZ
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
 * This plugin creates a new gameplay mechanic where players have to choose
 * which skills to bring into battle. They can select what skills to bring from
 * the skill menu. In addition to being able to do that, equipped skills can
 * also add bonuses such as stats and/or passive states. This plugin can also
 * impose a limit upon actors to limit what skills can be equipped based on
 * skill tiers.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Limit the amount of skills actors can bring into battle. They can choose
 *   which to equip and which they cannot equip.
 * * Skill tiers can be used to further limit the strength of the skills they
 *   can bring into battle.
 * * Add and/or customize the skill tiers to your liking. Choose their name,
 *   their appearance, the associated skill name color, and the number of slots
 *   that actors can utilize.
 * * Equipped skills can bestow stat bonuses or passive states when equipped.
 * * Plugin Commands can increase or decrease the maximum amount of battle
 *   skill slots an actor can have.
 * * Plugin Commands can also increase or decrease the skill tier limitations
 *   regarding equipped battle skills.
 * * Trait objects such as weapons and armors can also have an influence on the
 *   maximum number of equipped battle skills and the skill tier limitations.
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
 * Battle Command > Skill Types Substitute
 * 
 * If an actor uses equipped battle skills, skill types added by the Battle
 * Command 'skills' will be substituted for a single category, 'battle skills'.
 * Here, only the equipped skills for battle will be listed.
 * 
 * However, any uses of 'SType: x' or 'SType: name' will still enable those
 * specific skill types to be fully usable. This is also how to imitate Yanfly
 * Engine Plugins' version of "Allowed Types" for Equip Battle Skills.
 * 
 * This does NOT mean that if you use 'SType: x' that only the equipped skills
 * will appear in there and the non-equipped skills will be unavailable. This
 * means that for 'SType: x' skill access, ALL of the skills for that skill
 * type linked to the actor will become available regardless of what is
 * equipped for the battle skills or not.
 *
 * ---
 *
 * Battle Command > All Skills Substitute
 * 
 * If an actor uses equipped battle skills, the Battle Command 'all skills'
 * will only list the skills currently equipped for battle. Empty slots will be
 * bypassed in favor of keeping the Battle Command Window condensed.
 * 
 * You can still use 'Skill: x' or 'Skill: name' to manually add specific
 * single skills to the Battle Command Window.
 * 
 * ---
 * 
 * Skills with Multiple Skill Types
 *
 * If you are using the Skills and States Core and add multiple skill types to
 * a skill, if one of them belongs to a 'SType: x' battle command, that skill
 * will appear in the skill type while also appearing in the equipped battle
 * skills listing.
 *
 * ---
 * 
 * Battle Test
 * 
 * For the sake of better play testing, battle tests will have this equipped
 * battle skills disabled. This is because there's no way to properly prepare a
 * skill loadout through RPG Maker MZ's battle test preparation window.
 * 
 * ---
 *
 * Skill Name Colors
 * 
 * If equip skill tiers are enabled, then skill name colors will be based on
 * their equip skill tier settings.
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
 * VisuMZ_1_ItemsEquipsCore
 *
 * When equipping battle skills have that parameter changes that affect MaxHP
 * or MaxMP, the changes will be affected by the "Equip-Adjust HP/MP" plugin
 * parameter where the game will adjust HP/MP differences after equipping any
 * skills with MaxHP/MaxMP values.
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
 * === Max Slots-Related Notetags ===
 * 
 * ---
 *
 * <Equip Skill Base Slots: x>
 *
 * - Used for: Actor, Class Notetags
 * - Determines the base equip battle skill slots an actor can have.
 * - Priority will be given to the actor notetag over the class notetag if both
 *   notetags are present.
 * - Replace 'x' with a number representing the base slots amount.
 * - If this notetag is not used, use the Plugin Parameters default value.
 *
 * ---
 *
 * <Equip Skill Slots: +x>
 * <Equip Skill Slots: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Alters the maximum amount of equip battle skill slots an actor can have on
 *   top of the base value.
 * - Replace 'x' with a number representing the increase or decrease in maximum
 *   equip battle skill slots.
 *
 * ---
 * 
 * === Skill Tier-Related Notetags ===
 * 
 * ---
 * 
 * <Skill Tier: key>
 * 
 * - Used for: Skill Notetags
 * - Determines the skill tier the skill belongs to.
 * - Replace 'key' with the 'Tier ID Key' of the tier. You can find this data
 *   in the 'Skill Tiers' Plugin Parameters.
 * 
 * ---
 *
 * <Skill Tier key Base Slots: x>
 *
 * - Used for: Actor, Class Notetags
 * - Determines the base skill slots associated with the 'key' skill tier that
 *   an actor can have.
 * - Priority will be given to the actor notetag over the class notetag if both
 *   notetags are present.
 * - Replace 'key' with the 'Tier ID Key' of the tier. You can find this data
 *   in the 'Skill Tiers' Plugin Parameters.
 * - Replace 'x' with a number representing the base slots amount.
 * - Insert multiple copies of this notetag to provide different base amounts
 *   for different skill tiers.
 *
 * ---
 *
 * <Skill Tier key Slots: +x>
 * <Skill Tier key Slots: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Alters the maximum amount of skill slots associated with the 'key' skill
 *   tier that an actor can have.
 * - Replace 'key' with the 'Tier ID Key' of the tier. You can find this data
 *   in the 'Skill Tiers' Plugin Parameters.
 * - Replace 'x' with a number representing the increase or decrease in maximum
 *   equip battle skill slots.
 * - Insert multiple copies of this notetag to provide different bonus amounts
 *   for different skill tiers.
 *
 * ---
 * 
 * === Equip Bonuses-Related Notetags ===
 * 
 * ---
 * 
 * <Equip param: +x>
 * <Equip param: -x>
 * 
 * - Used for: Skill Notetags
 * - If this skill is equipped as a battle skill, it will also provide a flat
 *   stat increase/decrease to 'param' by 'x' amount.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to alter.
 * - Replace 'x' with an integer to determine the flat increase or decrease to
 *   the designated parameter.
 * - Insert multiple copies of this notetag to provide different bonus amounts
 *   for different parameters.
 * 
 * ---
 * 
 * <Equip State: id>
 * <Equip States: id, id, id>
 * <Equip State: name>
 * <Equip States: name, name, name>
 * 
 * - Used for: Skill Notetags
 * - If this skill is equipped as a battle skill, it will also provide the
 *   designated state(s) as passive state(s) as long as the skill is equipped.
 * - Replace 'id' with a number representing the ID of the state to add as a
 *   passive state that is only active while this equipped as a battle skill.
 * - Replace 'name' with the name of the state to add as a passive state that
 *   is only active while this equipped as a battle skill.
 *   - Separate multiple names with commas. Case is not sensitive.
 * - This differs from <Passive State: x> in how <Passive State: x> will always
 *   be providing the passive state regardless if the skill is equipped or not.
 *   This notetag requires the skill to be equipped in order to work.
 * 
 * ---
 * 
 * === Actor Restriction-Related Notetags ===
 * 
 * ---
 *
 * <Can Equip Battle Skills>
 * <Cannot Equip Battle Skills>
 *
 * - Used for: Class Notetags
 * - Determines if certain classes can equip battle skills or not.
 * - If a class can equip battle skills, then the actor can utilize the equip
 *   battle skill mechanics.
 * - If a class cannot, then they will behave as normally.
 *
 * ---
 * 
 * === Skill Restriction-Related Notetags ===
 * 
 * ---
 *
 * <Cannot Equip>
 *
 * - Used for: Skill Notetags
 * - This skill cannot be equipped as a battle skill.
 *
 * ---
 * 
 * <Hide Equippable>
 * - Used for: Skill Notetags
 * - This skill cannot be equipped as a battle skill and will also be hidden
 *   from the equip skill list.
 * 
 * ---
 *
 * <Access Equippable>
 * <Access Only Equippable>
 *
 * - Used for: Skill Notetags
 * - This skill can only be equipped as a battle skill if the actor would
 *   normally have access to its skill type(s).
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
 *
 * ---
 *
 * <Always Equippable>
 * <All Access Equippable>
 *
 * - Used for: Skill Notetags
 * - This skill can always be equipped as a battle skill regardless if the
 *   actor would normally have access to its skill type(s).
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
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
 * Actor: Change Max Skill Slots
 * - Changes maximum skill slots for target actor(s).
 * - Cannot be used in battle.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Change Amount:
 *   - Changes the maximum skill slots by this amount.
 *   - Max slots cannot go below 1 or above hard cap.
 *
 * ---
 *
 * Actor: Change Skill Tier Slots
 * - Changes skill tier slots for target actor(s).
 * - Cannot be used in battle.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Tiers(s):
 *   - Enter in the Tier ID Key to alter the skill slots for.
 *
 *   Change Amount:
 *   - Changes the maximum skill slots by this amount.
 *   - Max slots cannot go below 1 or above hard cap.
 *
 * ---
 * 
 * === Party Plugin Commands ===
 * 
 * ---
 *
 * Party: Change Max Skill Slots
 * - Changes maximum skill slots for target party member(s).
 * - Cannot be used in battle.
 *
 *   Party Index(es):
 *   - Select which party member(s) to affect.
 *   - Index values start at 0.
 *
 *   Change Amount:
 *   - Changes the maximum skill slots by this amount.
 *   - Max slots cannot go below 1 or above hard cap.
 *
 * ---
 *
 * Party: Change Skill Tier Slots
 * - Changes skill tier slots for target party member(s).
 * - Cannot be used in battle.
 *
 *   Party Index(es):
 *   - Select which party member(s) to affect.
 *   - Index values start at 0.
 *
 *   Tiers(s):
 *   - Enter in the Tier ID Key to alter the skill slots for.
 *
 *   Change Amount:
 *   - Changes the maximum skill slots by this amount.
 *   - Max slots cannot go below 1 or above hard cap.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for Equip Battle Skills.
 *
 * ---
 *
 * General
 * 
 *   Default Enable?:
 *   - Enable Equip Battle Skills for all actors by default?
 *   - Bypassed by <Can Equip Battle Skills> and
 *     <Cannot Equip Battle Skills> notetags.
 * 
 *   All Type Access?:
 *   - Can actors equip skills from all skill types or just the skill types
 *     they have access to?
 * 
 * ---
 * 
 * Skill Slots
 * 
 *   Default Base Slots:
 *   - What is the default amount of equip battle skill slots available for
 *     each actor?
 * 
 *   Maximum Slots:
 *   - What is the maximum number of equip battle skill slots that an actor can
 *     achieve?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Skill Tier Settings
 * ============================================================================
 *
 * A list of the skill tiers available in this game and the various settings
 * used for it. Add more skill tiers or edit the available tiers to your needs.
 *
 * ---
 *
 * Plugin Parameters
 * 
 *   Enable Tier System?:
 *   - Enable the Equip Tier System for Equip Battle Skills?
 *
 * ---
 *
 * Skill Tier Entries
 * 
 *   Tier ID Key:
 *   - What is this skill tier's ID key?
 *
 * ---
 *
 * Skill Tier Entries > Display
 * 
 *   Display Name:
 *   - What is the text used to display this skill tier in the
 *     Skill Status Window?
 * 
 *   Display Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Display Icon:
 *   - Select an icon to display for this skill tier.
 *   - This icon will be used in the Skill Status Window.
 * 
 *   Marker Abbreviation:
 *   - What is the text used to display this skill tier as an abbreviation
 *     marker in the equip skill list?
 *
 * ---
 *
 * Skill Tier Entries > Tier Slots
 * 
 *   Base Slots:
 *   - What is the default amount of skill tier slots available for this
 *     skill tier type?
 * 
 *   Maximum Slots:
 *   - What is the maximum number of skill tier slots that can be achieved?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed for this plugin.
 *
 * ---
 *
 * Command Windows
 * 
 *   Battle Command:
 *   - Command name used for the Battle Command Window.
 * 
 *   Skill Type Command:
 *   - Command name used for the Skill Type Window.
 *
 * ---
 *
 * Equip Window
 * 
 *   Marker Format:
 *   - Format used when showing skills in equip list.
 *   - %1 - Skill Name, %2 - Equip Marker, %3 - Tier Marker
 * 
 *   Equipped:
 *   - Text used when displaying skill is currently equipped.
 * 
 *   Tier Format:
 *   - Format used when displaying tier name.
 *   - %1 - Tier Name
 * 
 *   Available Format:
 *   - Format used to display available slots.
 *   - %1 - Current Used, %2 - Max Slots
 *
 * ---
 *
 * Help Window
 * 
 *   Empty List:
 *   - Description used for picking a slot to equip.
 *   - Text codes allowed.
 * 
 *   Empty Equip:
 *   - Description used for picking a skill to equip.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Button Assist Window
 * 
 *   Unequip Text:
 *   - Text used for unequip skill shortcut.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * These settings let you adjust the windows displayed for this plugin.
 *
 * ---
 *
 * Empty Slot
 * 
 *   Empty Icon:
 *   - Icon used for empty slots.
 * 
 *   Empty Slot Name:
 *   - Text used for an empty slot.
 * 
 *   Empty Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 * ---
 * 
 * Skill Type Window
 * 
 *   Above Skill Types:
 *   - Do you want the "Equip" command above skill types or below them in the
 *     skill type command window?
 * 
 *   Battle Skills Icon:
 *   - Icon used for "Equip" command and "Battle Skills" in the battle
 *     command window.
 * 
 * ---
 * 
 * Equip Skill Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 * ---
 * 
 * Skill Status Window
 * 
 *   Show Skill Tiers?:
 *   - Show skill tiers in the Skill Status Window?
 *   - There needs to be enough space for this to work.
 * 
 *   Normal Slots Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Full Slots Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Slots Font Size:
 *   - Font size used for skill tier slots available.
 * 
 *   JS: Draw Status:
 *   - JavaScript code used to draw in Window_SkillStatus to display Equip
 *     Battle Skill Tiers.
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
 * Version 1.07: July 16, 2024
 * * Compatibility Update!
 * ** Compatibility with Option Core's Auto-Battle + Attack Only should now
 *    work together with this plugin. Update made by Olivia.
 * 
 * Version 1.06: May 16, 2024
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.05: April 18, 2024
 * * Bug Fixes!
 * ** Auto battle now limits the skill pool to the equipped battle skills list
 *    rather than giving access to unequipped skills. Fix made by Irina.
 * ** Plugin now works better with Command Remember. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Irina:
 * *** <Hide Equippable>
 * **** This skill cannot be equipped as a battle skill and will also be hidden
 *      from the equip skill list.
 * 
 * Version 1.04: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a problem where no skills would show at all. Fixed made by Olivia.
 * 
 * Version 1.03: December 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where <Hide in Battle> did not apply to equipped battle
 *    skills during battle. Fix made by Olivia.
 * 
 * Version 1.02: August 17, 2023
 * * Documentation Update!
 * ** Explanation for Battle Command > Skill Types Substitute updated.
 * *** If an actor uses equipped battle skills, skill types added by the Battle
 *     Command 'skills' will be substituted for a single category, 'battle
 *     skills'. Here, only the equipped skills for battle will be listed.
 * *** However, any uses of 'SType: x' or 'SType: name' will still enable those
 *     specific skill types to be fully usable. This is also how to imitate
 *     Yanfly Engine Plugins' version of "Allowed Types" for Equip Battle
 *     Skills.
 * *** This does NOT mean that if you use 'SType: x' that only the equipped
 *     skills will appear in there and the non-equipped skills will be
 *     unavailable. This means that for 'SType: x' skill access, ALL of the
 *     skills for that skill type linked to the actor will become available
 *     regardless of what is equipped for the battle skills or not.
 * 
 * Version 1.01: June 15, 2023
 * * Documentation Update!
 * ** Added a section to "Major Changes"
 * *** Skills with Multiple Skill Types
 * **** If you are using the Skills and States Core and add multiple skill
 *      types to a skill, if one of them belongs to a 'SType: x' battle
 *      command, that skill will appear in the skill type while also appearing
 *      in the equipped battle skills listing.
 * * Feature Update!
 * ** If equipped battle skills are hidden by <Hide in Battle> notetags, they
 *    will become disabled and unusable for those who want to use them as
 *    equippable passives. Update made by Irina.
 * 
 * Version 1.00 Official Release Date: June 26, 2023
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
 * @command ActorChangeMaxSkillSlots
 * @text Actor: Change Max Skill Slots
 * @desc Changes maximum skill slots for target actor(s).
 * Cannot be used in battle.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Change:eval
 * @text Change Amount
 * @desc Changes the maximum skill slots by this amount.
 * Max slots cannot go below 1 or above hard cap.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeSkillTierSlots
 * @text Actor: Change Skill Tier Slots
 * @desc Changes skill tier slots for target actor(s).
 * Cannot be used in battle.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Tiers:arraystr
 * @text Tiers(s)
 * @type string[]
 * @desc Enter in the Tier ID Key to alter the skill slots for.
 * @default ["Untitled"]
 *
 * @arg Change:eval
 * @text Change Amount
 * @desc Changes the skill tier slots by this amount.
 * Skill slots cannot go below 1 or above hard cap.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Party
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PartyChangeMaxSkillSlots
 * @text Party: Change Max Skill Slots
 * @desc Changes maximum skill slots for target party member(s).
 * Cannot be used in battle.
 *
 * @arg PartyIndex:arraynum
 * @text Party Index(es)
 * @type actor[]
 * @desc Select which party member(s) to affect.
 * Index values start at 0.
 * @default ["0"]
 *
 * @arg Change:eval
 * @text Change Amount
 * @desc Changes the maximum skill slots by this amount.
 * Max slots cannot go below 1 or above hard cap.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PartyChangeSkillTierSlots
 * @text Party: Change Skill Tier Slots
 * @desc Changes skill tier slots for target party member(s).
 * Cannot be used in battle.
 *
 * @arg PartyIndex:arraynum
 * @text Party Index(es)
 * @type actor[]
 * @desc Select which party member(s) to affect.
 * Index values start at 0.
 * @default ["0"]
 *
 * @arg Tiers:arraystr
 * @text Tiers(s)
 * @type string[]
 * @desc Enter in the Tier ID Key to alter the skill slots for.
 * @default ["Untitled"]
 *
 * @arg Change:eval
 * @text Change Amount
 * @desc Changes the skill tier slots by this amount.
 * Skill slots cannot go below 1 or above hard cap.
 * @default +1
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
 * @param EquipBattleSkills
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
 * @desc General settings for Equip Battle Skills.
 * @default {"General":"","defaultEnable:eval":"true","accessAllTypes:eval":"false","Slots":"","defaultBase:num":"8","absoluteMax:num":"16"}
 *
 * @param enableTierSys:eval
 * @text Enable Tier System?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the Equip Tier System for Equip Battle Skills?
 * @default true
 *
 * @param Tiers:arraystruct
 * @text Skill Tiers
 * @parent enableTierSys:eval
 * @type struct<SkillTier>[]
 * @desc A list of the skill tiers available in this game and the
 * various settings used for it.
 * @default ["{\"tierKey:str\":\"Uncommon\",\"Display\":\"\",\"displayName:str\":\"Uncommon\",\"displayColor:str\":\"6\",\"displayIcon:num\":\"310\",\"markerAbbr:str\":\"U\",\"Slots\":\"\",\"defaultBase:num\":\"4\",\"absoluteMax:num\":\"8\"}","{\"tierKey:str\":\"Rare\",\"Display\":\"\",\"displayName:str\":\"Rare\",\"displayColor:str\":\"5\",\"displayIcon:num\":\"308\",\"markerAbbr:str\":\"R\",\"Slots\":\"\",\"defaultBase:num\":\"2\",\"absoluteMax:num\":\"5\"}","{\"tierKey:str\":\"Legendary\",\"Display\":\"\",\"displayName:str\":\"Legendary\",\"displayColor:str\":\"24\",\"displayIcon:num\":\"311\",\"markerAbbr:str\":\"L\",\"Slots\":\"\",\"defaultBase:num\":\"1\",\"absoluteMax:num\":\"3\"}"]
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"CommandWindows":"","battleCommandName:str":"Skills","skillCommandName:str":"Battle","EquipWindow":"","markerFmt:str":"%2%1%3","equipMarker:str":"【E】","tierFmt:str":"《%1》","slotsAvailableFmt:str":"%1/%2","HelpWindow":"","emptyListDesc:json":"\"No skill is currently equipped in this battle skill slot.\"","emptyEquipDesc:json":"\"Choose to equip no skill.\"","ButtonAssist":"","unequipAssist:str":"Remove"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"EmptySlot":"","emptyIcon:num":"307","emptyName:str":"Empty","emptyColor:str":"7","Window_SkillType":"","topEquipCommand:eval":"true","commandIcon:num":"312","Window_EquipBattleSkillList":"","Window_EquipBattleSkillList_BgType:num":"0","Window_SkillStatus":"","statusDrawTiers:eval":"true","tierNormalColor:str":"0","tierFullColor:str":"17","tierFontSize:str":"20","StatusWindowDrawJS:func":"\"// Draw Face\\nconst fx = this.colSpacing() / 2;\\nconst fh = this.innerHeight;\\nconst fy = fh / 2 - this.lineHeight() * 1.5;\\nthis.drawActorFace(this._actor, fx + 1, 0, 144, fh);\\nthis.drawActorSimpleStatus(this._actor, fx + 180, fy);\\n\\n// Return if Window Size is Too Small\\nlet sx = (this.colSpacing() / 2) + 180 + 180 + 180;\\nlet sw = this.innerWidth - sx - 2;\\nif (sw < 300) return;\\n\\n// Draw Skill Tier Types\\nconst tiers = DataManager.getEquipSkillTiers();\\nconst maxEntries = Math.floor(this.innerHeight / this.lineHeight());\\nconst maxCol = Math.ceil(tiers.length / maxEntries);\\nlet cx = sx;\\nlet cy = Math.max(Math.round((this.innerHeight - (this.lineHeight() * Math.ceil(tiers.length / maxCol))) / 2), 0);\\nconst by = cy;\\nlet cw = (this.innerWidth - cx - (this.itemPadding() * 2 * maxCol)) / maxCol;\\nif (maxCol === 1) {\\n    cw = Math.min(ImageManager.faceWidth * 2, cw);\\n    cx += Math.round((this.innerWidth - cx - (this.itemPadding() * 2) - cw) / 2);\\n}\\nfor (const tier of tiers) {\\n    this.drawEquipBattleSkillTierData(this._actor, tier, cx, cy, cw);\\n    cy += this.lineHeight();\\n    if (cy + this.lineHeight() > this.innerHeight) {\\n        cy = by;\\n        cx += cw + (this.itemPadding() * 2);\\n    }\\n}\""}
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
 * @param defaultEnable:eval
 * @text Default Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Equip Battle Skills for all actors by default?
 * Bypassed by <Can/Cannot Equip Battle Skills> notetag.
 * @default true
 *
 * @param accessAllTypes:eval
 * @text All Type Access?
 * @parent General
 * @type boolean
 * @on All Skill Types
 * @off Available Types
 * @desc Can actors equip skills from all skill types or just the
 * skill types they have access to?
 * @default false
 *
 * @param Slots
 * @text Skill Slots
 * 
 * @param defaultBase:num
 * @text Default Base Slots
 * @parent Slots
 * @type number
 * @min 1
 * @desc What is the default amount of equip battle skill slots
 * available for each actor?
 * @default 8
 * 
 * @param absoluteMax:num
 * @text Maximum Slots
 * @parent Slots
 * @type number
 * @min 1
 * @desc What is the maximum number of equip battle skill slots
 * that an actor can achieve?
 * @default 16
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Tier Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillTier:
 *
 * @param tierKey:str
 * @text Tier ID Key
 * @desc What is this skill tier's ID key?
 * @default Untitled
 * 
 * @param Display
 *
 * @param displayName:str
 * @text Display Name
 * @parent Display
 * @desc What is the text used to display this skill tier in
 * the Skill Status Window?
 * @default Untitled
 *
 * @param displayColor:str
 * @text Display Color
 * @parent Display
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param displayIcon:num
 * @text Display Icon
 * @parent Display
 * @desc Select an icon to display for this skill tier.
 * This icon will be used in the Skill Status Window.
 * @default 0
 *
 * @param markerAbbr:str
 * @text Marker Abbreviation
 * @parent Display
 * @desc What is the text used to display this skill tier as
 * an abbreviation marker in the equip skill list?
 * @default ???
 *
 * @param Slots
 * @text Tier Slots
 * 
 * @param defaultBase:num
 * @text Base Slots
 * @parent Slots
 * @type number
 * @min 1
 * @desc What is the default amount of skill tier slots
 * available for this skill tier type?
 * @default 1
 * 
 * @param absoluteMax:num
 * @text Maximum Slots
 * @parent Slots
 * @type number
 * @min 1
 * @desc What is the maximum number of skill tier slots
 * that can be achieved?
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param CommandWindows
 * @text Command Windows
 *
 * @param battleCommandName:str
 * @text Battle Command
 * @parent CommandWindows
 * @desc Command name used for the Battle Command Window.
 * @default Skills
 *
 * @param skillCommandName:str
 * @text Skill Type Command
 * @parent CommandWindows
 * @desc Command name used for the Skill Type Window.
 * @default Battle
 *
 * @param EquipWindow
 * @text Equip Window
 *
 * @param markerFmt:str
 * @text Marker Format
 * @parent EquipWindow
 * @desc Format used when showing skills in equip list.
 * %1 - Skill Name, %2 - Equip Marker, %3 - Tier Marker
 * @default %2%1%3
 *
 * @param equipMarker:str
 * @text Equipped
 * @parent EquipWindow
 * @desc Text used when displaying skill is currently equipped.
 * @default 【E】
 *
 * @param tierFmt:str
 * @text Tier Format
 * @parent EquipWindow
 * @desc Format used when displaying tier name.
 * %1 - Tier Name
 * @default 《%1》
 *
 * @param slotsAvailableFmt:str
 * @text Available Format
 * @parent EquipWindow
 * @desc Format used to display available slots.
 * %1 - Current Used, %2 - Max Slots
 * @default %1/%2
 * 
 * @param HelpWindow
 * @text Help Window
 *
 * @param emptyListDesc:json
 * @text Empty List
 * @parent HelpWindow
 * @type note
 * @desc Description used for picking a slot to equip.
 * Text codes allowed.
 * @default "No skill is currently equipped in this battle skill slot."
 *
 * @param emptyEquipDesc:json
 * @text Empty Equip
 * @parent HelpWindow
 * @type note
 * @desc Description used for picking a skill to equip.
 * Text codes allowed.
 * @default "Choose to equip no skill."
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param unequipAssist:str
 * @text Unequip Text
 * @parent ButtonAssist
 * @desc Text used for unequip skill shortcut.
 * @default Remove
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param EmptySlot
 * @text Empty Slot
 *
 * @param emptyIcon:num
 * @text Empty Icon
 * @parent EmptySlot
 * @desc Icon used for empty slots.
 * @default 307
 *
 * @param emptyName:str
 * @text Empty Slot Name
 * @parent EmptySlot
 * @desc Text used for an empty slot.
 * @default Empty
 *
 * @param emptyColor:str
 * @text Empty Color
 * @parent EmptySlot
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param Window_SkillType
 * @text Skill Type Window
 *
 * @param topEquipCommand:eval
 * @text Above Skill Types
 * @parent Window_SkillType
 * @type boolean
 * @on Above Skill Types
 * @off Below Skill Types
 * @desc Do you want the "Equip" command above skill types or below
 * them in the skill type command window?
 * @default true
 *
 * @param commandIcon:num
 * @text Battle Skills Icon
 * @parent Window_SkillType
 * @desc Icon used for "Equip" command and "Battle Skills" in the
 * battle command window.
 * @default 312
 *
 * @param Window_EquipBattleSkillList
 * @text Equip Skill Window
 *
 * @param Window_EquipBattleSkillList_BgType:num
 * @text Background Type
 * @parent Window_EquipBattleSkillList
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
 * @param Window_SkillStatus
 * @text Skill Status Window
 *
 * @param statusDrawTiers:eval
 * @text Show Skill Tiers?
 * @parent Window_SkillStatus
 * @type boolean
 * @on Show Skill Tiers
 * @off Show Default
 * @desc Show skill tiers in the Skill Status Window?
 * There needs to be enough space for this to work.
 * @default true
 *
 * @param tierNormalColor:str
 * @text Normal Slots Color
 * @parent Window_SkillStatus
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param tierFullColor:str
 * @text Full Slots Color
 * @parent Window_SkillStatus
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param tierFontSize:str
 * @text Slots Font Size
 * @parent Window_SkillStatus
 * @desc Font size used for skill tier slots available.
 * @default 20
 *
 * @param StatusWindowDrawJS:func
 * @text JS: Draw Status
 * @parent Window_SkillStatus
 * @type note
 * @desc JavaScript code used to draw in Window_SkillStatus
 * to display Equip Battle Skill Tiers.
 * @default "// Draw Face\nconst fx = this.colSpacing() / 2;\nconst fh = this.innerHeight;\nconst fy = fh / 2 - this.lineHeight() * 1.5;\nthis.drawActorFace(this._actor, fx + 1, 0, 144, fh);\nthis.drawActorSimpleStatus(this._actor, fx + 180, fy);\n\n// Return if Window Size is Too Small\nlet sx = (this.colSpacing() / 2) + 180 + 180 + 180;\nlet sw = this.innerWidth - sx - 2;\nif (sw < 300) return;\n\n// Draw Skill Tier Types\nconst tiers = DataManager.getEquipSkillTiers();\nconst maxEntries = Math.floor(this.innerHeight / this.lineHeight());\nconst maxCol = Math.ceil(tiers.length / maxEntries);\nlet cx = sx;\nlet cy = Math.max(Math.round((this.innerHeight - (this.lineHeight() * Math.ceil(tiers.length / maxCol))) / 2), 0);\nconst by = cy;\nlet cw = (this.innerWidth - cx - (this.itemPadding() * 2 * maxCol)) / maxCol;\nif (maxCol === 1) {\n    cw = Math.min(ImageManager.faceWidth * 2, cw);\n    cx += Math.round((this.innerWidth - cx - (this.itemPadding() * 2) - cw) / 2);\n}\nfor (const tier of tiers) {\n    this.drawEquipBattleSkillTierData(this._actor, tier, cx, cy, cw);\n    cy += this.lineHeight();\n    if (cy + this.lineHeight() > this.innerHeight) {\n        cy = by;\n        cx += cw + (this.itemPadding() * 2);\n    }\n}"
 *
 */
//=============================================================================

const _0x3c963f=_0x5cea;function _0x5814(){const _0x22067c=['changeTextColor','parse','《%1》','Window_Selectable_processCursorMove','General','normalColor','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','innerWidth','MAT','ColorManager_getItemColor','Window','clearUnequippableBattleSkills','reverse','battleCommandName','addPassiveStatesFromOtherPlugins','match','addEquipBattleSkillsMarkers','onBattleEnd','%1/%2','Scene_Skill_buttonAssistText3','defaultBase','Window_SkillList_includes','tierSystem','MDF','Window_EquipBattleSkillList_BgType','checkSkillTypeMatch','addMaxBattleSkillsPlus','emptyName','【E】','PartyChangeSkillTierSlots','addSkillCommands','displayName','tierFmt','getEquipSkillTiers','LUK','setStypeId','isTriggered','emptyEquip','equipBattleSkillPassiveStates','EquipBattleSkills','_maxBattleSkills','left','enableTierSys','activate','includesSkillsStatesCore','getColor','Game_Actor_learnSkill','makeActionListForEquipBattleSkills','equipped','skillParamPlus','BaseSlots','startEquipBattleSkills','emptyListDesc','makeEquipBattleSkillsList','isSkill','cannotEquip','287HSidfR','skill','tierFontSize','ARRAYSTR','equipBattleSkills','addWindow','map','drawEquipBattleSkillName','_objEquipSkillTierBonusSlots','autoBattleUseSkills','tierKey','maxEquipSkillTierSlotsBonus','maxBattleSkills','FUNC','Window_SkillType_makeCommandList','push','itemAt','makeActionList','resetFontSettings','maxBattleSkillsPlus','isCursorMovable','setMaxBattleSkillsPlus','innerHeight','4118456JZSaTA','27aWODdW','drawEquipBattleSkillsItem','resetTextColor','isBattleTest','process_VisuMZ_EquipBattleSkillTiers','deactivate','addEquipBattleSingleSkillsCommand','onItemOk','canEquipBattleSkills','Window_SkillList_checkSkillTypeMatch','ATK','skillTierType','iconIndex','actorId','refresh','Window_SkillList_makeItemList','processCursorMove','fmt','lastCommandSymbol','bonusSlots','refreshEquipBattleSkills','stopEquipBattleSkills','accessEquip','icon','_equipBattleSkillsWindow','skills','skillTypes','members','maxEquipSkillTierSlots','TypeBaseSlots','iconHeight','unequipBattleSkill','_actorEquipSkillTierBaseSlots','2553330GLETRj','Game_Actor_refresh','addEquipBattleSkillsCommand','length','Window_SkillStatus_refresh','EVAL','_scene','Game_Battler_onBattleEnd','call','includes','_skillTierTypes','BonusSlots','3779960RJtZUE','forgetSkill','updateHelp','performEquipBattleSkill','StatusWindowDrawJS','equipBattleSkill','onDatabaseLoaded','getStateIdWithName','setMaxEquipSkillTierSlotsPlus','addPassiveStatesFromEquippedBattleSkills','setCurrentSelectedSkill','buttonAssistText3','RegExp','battleSkills','classEquipSkillTierBaseSlots','ARRAYFUNC','makeItemList','commandStyle','addMaxEquipSkillTierSlotsPlus','_stypeId','filter','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','CanEquipBattleSkills','ceil','ActorIDs','_currentSelectedSkill','slice','iconWidth','right','displayIcon','Tiers','Armor-%1-%2','EQUIP_BATTLE_SKILLS','CannotEquipBattleSkills','canEquipBattleSkill','Settings','Window_SkillList_updateHelp','3327710SXPIIH','hide','createKeyJS','objEquipSkillTierBonusSlots','untitled','accessAllTypes','pop','_getEquipSkillTiers','toLowerCase','isEquipSkillTierSystemEnabled','trim','max','lastBattleSkill','equipBattleSkillsCommandName','unequip','setBackgroundType','drawActorFace','drawEquipBattleSkillTierData','currentClass','_statusWindow','currentEquipSkillTierSlots','colSpacing','round','isActor','BG_TYPE','processEquipBattleSkillsShiftRemoveShortcut','isSkillUsableForAutoBattle','???','selectExt','format','SkillsStatesCore','addSingleSkillCommands','%2%1%3','Window_SkillList_isEnabled','_tempActor','alwaysEquip','67426ErCMLF','_battleSkill_IDs','usableSkills','_helpWindow','Game_BattlerBase_addPassiveStatesFromOtherPlugins','getItemColor','commandIcon','addCommand','19GSEUGl','ConvertParams','Window_ActorCommand_addSingleSkillCommands','statusDrawTiers','JSON','bind','replace','contents','Vocab','Window_ActorCommand_addSkillCommands','ARRAYNUM','equipBattleSkillsParamPlus','addSingleSkillCommand','markerFmt','changePaintOpacity','_itemWindow','displayColor','isEquipBattleSkillMode','getSkillTypes','inBattle','setHelpWindow','faceWidth','paramPlus','equipBattleSkillParamPlus','PartyChangeMaxSkillSlots','slotsAvailableFmt','\x5cI[%1]%2','getEquipBattleSkillTierColor','Skill-%1-%2','Game_Actor_usableSkills','initialize','181912CyXWSj','min','absoluteMax','text','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','isEnabled','some','MAX_SAFE_INTEGER','tierNormalColor','Window_SkillList_drawItem','State-%1-%2','index','indexOf','lineHeight','toUpperCase','_data','ARRAYEVAL','Change','emptyColor','select','markerAbbr','learnSkill','itemLineRect','drawText','_shopStatusWindow','item','Window_SkillList_setStypeId','ARRAYSTRUCT','MAXMP','STR','VisuMZ_1_BattleCore','Game_Actor_initSkills','createEquipBattleSkillWindow','isSkillHidden','drawEquipBattleSkillsNullItem','skillCommandName','actorEquipSkillTierBaseSlots','clearEquipBattleSkills','defaultEnable','1554753yDDUIQ','Window_ActorCommand_selectLast','playEquip','show','registerCommand','_equipBattleSkillParamPlus','getEquipBattleSkillColor','onEquipBattleSkillsOk','Game_Actor_forgetSkill','constructor','_maxBattleSkillsPlus','maxEquipSkillTierSlotsPlus','active','setText','name','costWidth','itemWindowRect','Game_Actor_paramPlus','Class-%1-%2','top','PartyIndex','isSceneBattle','Scene_Boot_onDatabaseLoaded','drawItem','traitObjects','initSkills','note','width','_classEquipSkillTierBaseSlots','_actor','buttonAssist','create','drawIcon','ActorChangeSkillTierSlots','itemPadding','hideEquip','update','ARRAYJSON','getEquipSkillTierData','fontSize','maxCols','actor','marker','prototype','_maxEquipSkillTierSlotsPlus','DEF','Scene_Skill_onItemOk','Game_Actor_makeActionList','test','getEquipSkillTierType','clamp','emptyList','selectLast','playOkSound','VisuMZ_0_CoreEngine','Equip','_equipBattleSkillPassiveStates','MAXHP'];_0x5814=function(){return _0x22067c;};return _0x5814();}(function(_0x377eba,_0x486213){const _0x4108bc=_0x5cea,_0x5c3803=_0x377eba();while(!![]){try{const _0x3c0a3e=-parseInt(_0x4108bc(0x214))/0x1*(-parseInt(_0x4108bc(0x20c))/0x2)+parseInt(_0x4108bc(0x25a))/0x3+parseInt(_0x4108bc(0x2e3))/0x4+parseInt(_0x4108bc(0x1c3))/0x5+-parseInt(_0x4108bc(0x305))/0x6+-parseInt(_0x4108bc(0x2cc))/0x7*(parseInt(_0x4108bc(0x233))/0x8)+-parseInt(_0x4108bc(0x2e4))/0x9*(parseInt(_0x4108bc(0x1e8))/0xa);if(_0x3c0a3e===_0x486213)break;else _0x5c3803['push'](_0x5c3803['shift']());}catch(_0x52d43c){_0x5c3803['push'](_0x5c3803['shift']());}}}(_0x5814,0x8f9cd));var label=_0x3c963f(0x2bb),tier=tier||0x0,dependencies=[_0x3c963f(0x290),_0x3c963f(0x251),'VisuMZ_1_SkillsStatesCore'],pluginData=$plugins[_0x3c963f(0x1d7)](function(_0x5271ca){return _0x5271ca['status']&&_0x5271ca['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x3c963f(0x1e6)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x3c963f(0x215)]=function(_0x475f2f,_0x2171c4){const _0x53072d=_0x3c963f;for(const _0x34e2a6 in _0x2171c4){if(_0x34e2a6[_0x53072d(0x2a3)](/(.*):(.*)/i)){const _0x508045=String(RegExp['$1']),_0x4554f3=String(RegExp['$2'])[_0x53072d(0x241)]()[_0x53072d(0x1f2)]();let _0x5529b2,_0x5b98a6,_0x556b04;switch(_0x4554f3){case'NUM':_0x5529b2=_0x2171c4[_0x34e2a6]!==''?Number(_0x2171c4[_0x34e2a6]):0x0;break;case _0x53072d(0x21e):_0x5b98a6=_0x2171c4[_0x34e2a6]!==''?JSON['parse'](_0x2171c4[_0x34e2a6]):[],_0x5529b2=_0x5b98a6[_0x53072d(0x2d2)](_0x3741f8=>Number(_0x3741f8));break;case _0x53072d(0x1bc):_0x5529b2=_0x2171c4[_0x34e2a6]!==''?eval(_0x2171c4[_0x34e2a6]):null;break;case _0x53072d(0x243):_0x5b98a6=_0x2171c4[_0x34e2a6]!==''?JSON[_0x53072d(0x295)](_0x2171c4[_0x34e2a6]):[],_0x5529b2=_0x5b98a6[_0x53072d(0x2d2)](_0x5df38e=>eval(_0x5df38e));break;case _0x53072d(0x218):_0x5529b2=_0x2171c4[_0x34e2a6]!==''?JSON['parse'](_0x2171c4[_0x34e2a6]):'';break;case _0x53072d(0x27f):_0x5b98a6=_0x2171c4[_0x34e2a6]!==''?JSON[_0x53072d(0x295)](_0x2171c4[_0x34e2a6]):[],_0x5529b2=_0x5b98a6['map'](_0x3bcc1f=>JSON['parse'](_0x3bcc1f));break;case _0x53072d(0x2d9):_0x5529b2=_0x2171c4[_0x34e2a6]!==''?new Function(JSON[_0x53072d(0x295)](_0x2171c4[_0x34e2a6])):new Function('return\x200');break;case _0x53072d(0x1d2):_0x5b98a6=_0x2171c4[_0x34e2a6]!==''?JSON[_0x53072d(0x295)](_0x2171c4[_0x34e2a6]):[],_0x5529b2=_0x5b98a6['map'](_0x979e95=>new Function(JSON[_0x53072d(0x295)](_0x979e95)));break;case _0x53072d(0x250):_0x5529b2=_0x2171c4[_0x34e2a6]!==''?String(_0x2171c4[_0x34e2a6]):'';break;case _0x53072d(0x2cf):_0x5b98a6=_0x2171c4[_0x34e2a6]!==''?JSON['parse'](_0x2171c4[_0x34e2a6]):[],_0x5529b2=_0x5b98a6[_0x53072d(0x2d2)](_0x44b536=>String(_0x44b536));break;case'STRUCT':_0x556b04=_0x2171c4[_0x34e2a6]!==''?JSON['parse'](_0x2171c4[_0x34e2a6]):{},_0x5529b2=VisuMZ['ConvertParams']({},_0x556b04);break;case _0x53072d(0x24e):_0x5b98a6=_0x2171c4[_0x34e2a6]!==''?JSON[_0x53072d(0x295)](_0x2171c4[_0x34e2a6]):[],_0x5529b2=_0x5b98a6[_0x53072d(0x2d2)](_0x28b014=>VisuMZ[_0x53072d(0x215)]({},JSON['parse'](_0x28b014)));break;default:continue;}_0x475f2f[_0x508045]=_0x5529b2;}}return _0x475f2f;},(_0x2ee758=>{const _0x1fb111=_0x3c963f,_0x29f2bc=_0x2ee758['name'];for(const _0x225d61 of dependencies){if(!Imported[_0x225d61]){alert(_0x1fb111(0x237)[_0x1fb111(0x205)](_0x29f2bc,_0x225d61)),SceneManager['exit']();break;}}const _0x1c1d3c=_0x2ee758['description'];if(_0x1c1d3c[_0x1fb111(0x2a3)](/\[Version[ ](.*?)\]/i)){const _0x9ac1e7=Number(RegExp['$1']);_0x9ac1e7!==VisuMZ[label]['version']&&(alert(_0x1fb111(0x29a)[_0x1fb111(0x205)](_0x29f2bc,_0x9ac1e7)),SceneManager['exit']());}if(_0x1c1d3c['match'](/\[Tier[ ](\d+)\]/i)){const _0x1d7950=Number(RegExp['$1']);_0x1d7950<tier?(alert(_0x1fb111(0x1d8)[_0x1fb111(0x205)](_0x29f2bc,_0x1d7950,tier)),SceneManager['exit']()):tier=Math[_0x1fb111(0x1f3)](_0x1d7950,tier);}VisuMZ[_0x1fb111(0x215)](VisuMZ[label][_0x1fb111(0x1e6)],_0x2ee758['parameters']);})(pluginData),PluginManager[_0x3c963f(0x25e)](pluginData[_0x3c963f(0x268)],'ActorChangeMaxSkillSlots',_0x5dd850=>{const _0xea5511=_0x3c963f;if(SceneManager['isSceneBattle']())return;VisuMZ[_0xea5511(0x215)](_0x5dd850,_0x5dd850);const _0x2fba88=_0x5dd850[_0xea5511(0x1db)][_0xea5511(0x2d2)](_0x374991=>$gameActors[_0xea5511(0x283)](_0x374991)),_0xde8c88=_0x5dd850['Change']||0x0;for(const _0x21d436 of _0x2fba88){if(!_0x21d436)continue;_0x21d436[_0xea5511(0x2ae)](_0xde8c88);}}),PluginManager['registerCommand'](pluginData[_0x3c963f(0x268)],_0x3c963f(0x27b),_0x17ab51=>{const _0x8a9baa=_0x3c963f;if(SceneManager[_0x8a9baa(0x26f)]())return;VisuMZ[_0x8a9baa(0x215)](_0x17ab51,_0x17ab51);const _0xf42105=_0x17ab51[_0x8a9baa(0x1db)]['map'](_0x25c41a=>$gameActors[_0x8a9baa(0x283)](_0x25c41a)),_0x4284e6=_0x17ab51[_0x8a9baa(0x1e1)][_0x8a9baa(0x2d2)](_0xd2b395=>_0xd2b395['toLowerCase']()[_0x8a9baa(0x1f2)]()),_0x37af16=_0x17ab51[_0x8a9baa(0x244)]||0x0;for(const _0x490df1 of _0xf42105){if(!_0x490df1)continue;for(const _0x116f15 of _0x4284e6){if(VisuMZ[_0x8a9baa(0x2bb)][_0x8a9baa(0x1e1)][_0x116f15]===undefined)continue;_0x490df1[_0x8a9baa(0x1d5)](_0x116f15,_0x37af16);}}}),PluginManager['registerCommand'](pluginData[_0x3c963f(0x268)],_0x3c963f(0x22c),_0x57237b=>{const _0x3bb3bd=_0x3c963f;if(SceneManager[_0x3bb3bd(0x26f)]())return;VisuMZ['ConvertParams'](_0x57237b,_0x57237b);const _0x1c5c46=_0x57237b[_0x3bb3bd(0x26e)][_0x3bb3bd(0x2d2)](_0x5cd751=>$gameParty['members']()[_0x5cd751]),_0x3ae3dd=_0x57237b[_0x3bb3bd(0x244)]||0x0;for(const _0x4df2af of _0x1c5c46){if(!_0x4df2af)continue;_0x4df2af[_0x3bb3bd(0x2ae)](_0x3ae3dd);}}),PluginManager['registerCommand'](pluginData[_0x3c963f(0x268)],_0x3c963f(0x2b1),_0x2a60b9=>{const _0x1ea54c=_0x3c963f;if(SceneManager['isSceneBattle']())return;VisuMZ[_0x1ea54c(0x215)](_0x2a60b9,_0x2a60b9);const _0x1098d3=_0x2a60b9[_0x1ea54c(0x26e)][_0x1ea54c(0x2d2)](_0xd3e8a9=>$gameParty[_0x1ea54c(0x2ff)]()[_0xd3e8a9]),_0x4818a7=_0x2a60b9['Tiers'][_0x1ea54c(0x2d2)](_0x837169=>_0x837169[_0x1ea54c(0x1f0)]()[_0x1ea54c(0x1f2)]()),_0x5a148c=_0x2a60b9[_0x1ea54c(0x244)]||0x0;for(const _0x5c1357 of _0x1098d3){if(!_0x5c1357)continue;for(const _0xe0d90a of _0x4818a7){if(VisuMZ[_0x1ea54c(0x2bb)][_0x1ea54c(0x1e1)][_0xe0d90a]===undefined)continue;_0x5c1357[_0x1ea54c(0x1d5)](_0xe0d90a,_0x5a148c);}}}),VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1cf)]={'BaseSlots':/<EQUIP SKILL BASE SLOTS:[ ](\d+)>/i,'TypeBaseSlots':/<(?:EQUIP |)SKILL TIER (.*?) BASE SLOTS:[ ](\d+)>/gi,'CanEquipBattleSkills':/<CAN EQUIP BATTLE SKILLS>/i,'CannotEquipBattleSkills':/<CANNOT EQUIP BATTLE SKILLS>/i,'BonusSlots':/<EQUIP SKILL SLOTS:[ ]([\+\-]\d+)>/i,'tierBonusSlots':/<(?:EQUIP |)SKILL TIER (.*?) SLOTS:[ ]([\+\-]\d+)>/gi,'cannotEquip':/<(?:CANNOT EQUIP|UNEQUIPPABLE)>/i,'hideEquip':/<HIDE (?:EQUIP|EQUIPPABLE)>/i,'accessEquip':/<(?:ACCESS|ACCESS ONLY) EQUIPPABLE>/i,'alwaysEquip':/<(?:ALWAYS|ALL ACCESS) EQUIPPABLE>/i,'skillTierType':/<(?:EQUIP |)SKILL TIER:[ ](.*?)>/i,'skillParamPlus':/<EQUIP (.*?):[ ]([\+\-]\d+)>/gi,'equipPassives':/<EQUIP (?:PASSIVE |)(?:STATE|STATES):[ ](.*?)>/i},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x270)]=Scene_Boot[_0x3c963f(0x285)][_0x3c963f(0x1c9)],Scene_Boot[_0x3c963f(0x285)][_0x3c963f(0x1c9)]=function(){const _0x1e3e7d=_0x3c963f;VisuMZ[_0x1e3e7d(0x2bb)]['Scene_Boot_onDatabaseLoaded']['call'](this),this[_0x1e3e7d(0x2e8)]();},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1e1)]={},Scene_Boot['prototype'][_0x3c963f(0x2e8)]=function(){const _0x3157b1=_0x3c963f;if(!Game_System[_0x3157b1(0x1e3)][_0x3157b1(0x2aa)])return;const _0x2a89cf=VisuMZ['EquipBattleSkills']['Settings'][_0x3157b1(0x1e1)];for(const _0x1246d1 of _0x2a89cf){if(!_0x1246d1)continue;const _0x134294=_0x1246d1[_0x3157b1(0x2d6)]['toLowerCase']()[_0x3157b1(0x1f2)]();if(_0x134294===_0x3157b1(0x1ec))continue;if(_0x1246d1[_0x3157b1(0x2b3)]['toLowerCase']()[_0x3157b1(0x1f2)]()==='untitled')continue;if(_0x1246d1[_0x3157b1(0x247)][_0x3157b1(0x1f0)]()[_0x3157b1(0x1f2)]()==='???')continue;VisuMZ[_0x3157b1(0x2bb)][_0x3157b1(0x1e1)][_0x134294]=_0x1246d1;}},DataManager[_0x3c963f(0x28b)]=function(_0x292d7a){const _0x55066a=_0x3c963f;if(!$gameSystem['isEquipSkillTierSystemEnabled']())return'';if(!this[_0x55066a(0x2ca)](_0x292d7a))return'';this[_0x55066a(0x1c1)]=this[_0x55066a(0x1c1)]||{};if(this[_0x55066a(0x1c1)][_0x292d7a['id']]!==undefined)return this[_0x55066a(0x1c1)][_0x292d7a['id']];this['_skillTierTypes'][_0x292d7a['id']]='';const _0x36dea5=VisuMZ[_0x55066a(0x2bb)][_0x55066a(0x1cf)],_0x1451db=_0x292d7a['note']||'';if(_0x1451db[_0x55066a(0x2a3)](_0x36dea5[_0x55066a(0x2ef)])){const _0x4c0e24=String(RegExp['$1'])['toLowerCase']()[_0x55066a(0x1f2)]();VisuMZ[_0x55066a(0x2bb)][_0x55066a(0x1e1)][_0x4c0e24]!==undefined&&(this[_0x55066a(0x1c1)][_0x292d7a['id']]=_0x4c0e24);}return this[_0x55066a(0x1c1)][_0x292d7a['id']];},DataManager['getEquipSkillTierData']=function(_0x121926){const _0x3568b0=_0x3c963f;if(!$gameSystem[_0x3568b0(0x1f1)]())return{};if(!this[_0x3568b0(0x2ca)](_0x121926))return{};const _0xc457f5=this[_0x3568b0(0x28b)](_0x121926);return VisuMZ['EquipBattleSkills'][_0x3568b0(0x1e1)][_0xc457f5]||{};},DataManager[_0x3c963f(0x257)]=function(_0xe0c870,_0x24c002){const _0x8d158e=_0x3c963f;this[_0x8d158e(0x304)]=this[_0x8d158e(0x304)]||{},this[_0x8d158e(0x304)][_0xe0c870[_0x8d158e(0x2f1)]()]=this[_0x8d158e(0x304)][_0xe0c870[_0x8d158e(0x2f1)]()]||{};if(this[_0x8d158e(0x304)][_0xe0c870[_0x8d158e(0x2f1)]()][_0x24c002]!==undefined)return this[_0x8d158e(0x304)][_0xe0c870['actorId']()][_0x24c002];this[_0x8d158e(0x304)][_0xe0c870[_0x8d158e(0x2f1)]()][_0x24c002]=-0x1;const _0x4c48dc=VisuMZ[_0x8d158e(0x2bb)][_0x8d158e(0x1cf)],_0x5688b5=_0xe0c870['actor']()?_0xe0c870[_0x8d158e(0x283)]()['note']||'':'',_0xec6050=_0x5688b5['match'](_0x4c48dc[_0x8d158e(0x301)]);if(_0xec6050)for(const _0x3007c7 of _0xec6050){_0x3007c7[_0x8d158e(0x2a3)](_0x4c48dc[_0x8d158e(0x301)]);const _0x274dad=String(RegExp['$1'])[_0x8d158e(0x1f0)]()[_0x8d158e(0x1f2)](),_0x2802d4=Number(RegExp['$2'])||0x1;VisuMZ[_0x8d158e(0x2bb)]['Tiers'][_0x274dad]!==undefined&&(this['_actorEquipSkillTierBaseSlots'][_0xe0c870[_0x8d158e(0x2f1)]()][_0x274dad]=_0x2802d4);}return this[_0x8d158e(0x304)][_0xe0c870[_0x8d158e(0x2f1)]()][_0x24c002];},DataManager['actorEquipSkillTierBaseSlots']=function(_0x279f28,_0xa367a7){const _0x12cf23=_0x3c963f;this[_0x12cf23(0x304)]=this['_actorEquipSkillTierBaseSlots']||{},this[_0x12cf23(0x304)][_0x279f28['actorId']()]=this['_actorEquipSkillTierBaseSlots'][_0x279f28['actorId']()]||{};if(this[_0x12cf23(0x304)][_0x279f28['actorId']()][_0xa367a7]!==undefined)return this[_0x12cf23(0x304)][_0x279f28['actorId']()][_0xa367a7];const _0x20d8c8=VisuMZ[_0x12cf23(0x2bb)]['Tiers'][_0xa367a7]['defaultBase'];this[_0x12cf23(0x304)][_0x279f28['actorId']()][_0xa367a7]=_0x20d8c8;const _0x12618e=VisuMZ[_0x12cf23(0x2bb)][_0x12cf23(0x1cf)],_0x269000=_0x279f28[_0x12cf23(0x283)]()?_0x279f28[_0x12cf23(0x283)]()['note']||'':'',_0x2b0770=_0x269000[_0x12cf23(0x2a3)](_0x12618e[_0x12cf23(0x301)]);if(_0x2b0770)for(const _0x131aaf of _0x2b0770){_0x131aaf[_0x12cf23(0x2a3)](_0x12618e[_0x12cf23(0x301)]);const _0x2b8798=String(RegExp['$1'])[_0x12cf23(0x1f0)]()[_0x12cf23(0x1f2)](),_0x27c9ef=Number(RegExp['$2'])||0x1;VisuMZ[_0x12cf23(0x2bb)][_0x12cf23(0x1e1)][_0x2b8798]!==undefined&&(this[_0x12cf23(0x304)][_0x279f28['actorId']()][_0x2b8798]=_0x27c9ef);}return this[_0x12cf23(0x304)][_0x279f28[_0x12cf23(0x2f1)]()][_0xa367a7];},DataManager[_0x3c963f(0x1d1)]=function(_0x197be1,_0x2d229a){const _0x4d1aec=_0x3c963f;this[_0x4d1aec(0x276)]=this[_0x4d1aec(0x276)]||{},this[_0x4d1aec(0x276)][_0x197be1['id']]=this[_0x4d1aec(0x276)][_0x197be1['id']]||{};if(this[_0x4d1aec(0x276)][_0x197be1['id']][_0x2d229a]!==undefined)return this[_0x4d1aec(0x276)][_0x197be1['id']][_0x2d229a];const _0x279e2d=VisuMZ['EquipBattleSkills'][_0x4d1aec(0x1e1)][_0x2d229a]['defaultBase'];this['_classEquipSkillTierBaseSlots'][_0x197be1['id']][_0x2d229a]=_0x279e2d;const _0x33eca0=VisuMZ[_0x4d1aec(0x2bb)][_0x4d1aec(0x1cf)],_0x15e7f1=_0x197be1[_0x4d1aec(0x274)]||'',_0x219ec5=_0x15e7f1[_0x4d1aec(0x2a3)](_0x33eca0['TypeBaseSlots']);if(_0x219ec5)for(const _0x22a8cd of _0x219ec5){_0x22a8cd['match'](_0x33eca0[_0x4d1aec(0x301)]);const _0x142e05=String(RegExp['$1'])['toLowerCase']()[_0x4d1aec(0x1f2)](),_0x1f0b2b=Number(RegExp['$2'])||0x1;VisuMZ['EquipBattleSkills'][_0x4d1aec(0x1e1)][_0x142e05]!==undefined&&(this[_0x4d1aec(0x276)][_0x197be1['id']][_0x142e05]=_0x1f0b2b);}return this[_0x4d1aec(0x276)][_0x197be1['id']][_0x2d229a];},DataManager[_0x3c963f(0x1eb)]=function(_0x2ec487,_0x3cbf16){const _0x360b6f=_0x3c963f,_0x1b273c=VisuMZ[_0x360b6f(0x2bb)][_0x360b6f(0x1ea)](_0x2ec487,_0x360b6f(0x2f7));this[_0x360b6f(0x2d4)]=this[_0x360b6f(0x2d4)]||{},this[_0x360b6f(0x2d4)][_0x1b273c]=this[_0x360b6f(0x2d4)][_0x1b273c]||{};if(this[_0x360b6f(0x2d4)][_0x1b273c][_0x3cbf16]!==undefined)return this[_0x360b6f(0x2d4)][_0x1b273c][_0x3cbf16];this[_0x360b6f(0x2d4)][_0x1b273c][_0x3cbf16]=0x0;const _0x2e7199=VisuMZ[_0x360b6f(0x2bb)][_0x360b6f(0x1cf)],_0x475998=_0x2ec487[_0x360b6f(0x274)]||'',_0x1531cc=_0x475998[_0x360b6f(0x2a3)](_0x2e7199['tierBonusSlots']);if(_0x1531cc)for(const _0x2cd8b6 of _0x1531cc){_0x2cd8b6[_0x360b6f(0x2a3)](_0x2e7199['tierBonusSlots']);const _0x235a83=String(RegExp['$1'])[_0x360b6f(0x1f0)]()[_0x360b6f(0x1f2)](),_0x53c4dc=Number(RegExp['$2'])||0x0;this[_0x360b6f(0x2d4)][_0x1b273c][_0x235a83]=_0x53c4dc;}return this[_0x360b6f(0x2d4)][_0x1b273c][_0x3cbf16];},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1ea)]=function(_0x5bed2b,_0x7df1d){const _0x3d42fb=_0x3c963f;if(VisuMZ[_0x3d42fb(0x1ea)])return VisuMZ['createKeyJS'](_0x5bed2b,_0x7df1d);let _0x253ef9='';if($dataActors[_0x3d42fb(0x1c0)](_0x5bed2b))_0x253ef9='Actor-%1-%2'[_0x3d42fb(0x205)](_0x5bed2b['id'],_0x7df1d);if($dataClasses[_0x3d42fb(0x1c0)](_0x5bed2b))_0x253ef9=_0x3d42fb(0x26c)[_0x3d42fb(0x205)](_0x5bed2b['id'],_0x7df1d);if($dataSkills[_0x3d42fb(0x1c0)](_0x5bed2b))_0x253ef9=_0x3d42fb(0x230)['format'](_0x5bed2b['id'],_0x7df1d);if($dataItems[_0x3d42fb(0x1c0)](_0x5bed2b))_0x253ef9='Item-%1-%2'[_0x3d42fb(0x205)](_0x5bed2b['id'],_0x7df1d);if($dataWeapons[_0x3d42fb(0x1c0)](_0x5bed2b))_0x253ef9='Weapon-%1-%2'['format'](_0x5bed2b['id'],_0x7df1d);if($dataArmors[_0x3d42fb(0x1c0)](_0x5bed2b))_0x253ef9=_0x3d42fb(0x1e2)[_0x3d42fb(0x205)](_0x5bed2b['id'],_0x7df1d);if($dataEnemies['includes'](_0x5bed2b))_0x253ef9='Enemy-%1-%2'[_0x3d42fb(0x205)](_0x5bed2b['id'],_0x7df1d);if($dataStates[_0x3d42fb(0x1c0)](_0x5bed2b))_0x253ef9=_0x3d42fb(0x23d)[_0x3d42fb(0x205)](_0x5bed2b['id'],_0x7df1d);return _0x253ef9;},DataManager['equipBattleSkillParamPlus']=function(_0x1df51b,_0x4bb9b8){const _0x2a96fe=_0x3c963f;if(!_0x1df51b)return 0x0;this[_0x2a96fe(0x25f)]=this[_0x2a96fe(0x25f)]||{},this[_0x2a96fe(0x25f)][_0x1df51b['id']]=this[_0x2a96fe(0x25f)][_0x1df51b['id']]||{};if(this['_equipBattleSkillParamPlus'][_0x1df51b['id']][_0x4bb9b8]!==undefined)return this[_0x2a96fe(0x25f)][_0x1df51b['id']][_0x4bb9b8];this['_equipBattleSkillParamPlus'][_0x1df51b['id']][_0x4bb9b8]=0x0;const _0xff1633=VisuMZ[_0x2a96fe(0x2bb)]['RegExp'],_0x424c3e=_0x1df51b['note']||'',_0x590c57=_0x424c3e[_0x2a96fe(0x2a3)](_0xff1633['skillParamPlus']);if(_0x590c57)for(const _0xdad3f of _0x590c57){_0xdad3f[_0x2a96fe(0x2a3)](_0xff1633[_0x2a96fe(0x2c5)]);const _0x4966b6=String(RegExp['$1'])['toUpperCase']()[_0x2a96fe(0x1f2)](),_0x4c3a2c=Number(RegExp['$2']),_0x542e58=[_0x2a96fe(0x293),_0x2a96fe(0x24f),_0x2a96fe(0x2ee),_0x2a96fe(0x287),_0x2a96fe(0x29c),_0x2a96fe(0x2ab),'AGI',_0x2a96fe(0x2b6)][_0x2a96fe(0x23f)](_0x4966b6);_0x542e58>=0x0&&(this[_0x2a96fe(0x25f)][_0x1df51b['id']][_0x542e58]=_0x4c3a2c);}return this[_0x2a96fe(0x25f)][_0x1df51b['id']][_0x4bb9b8];},DataManager[_0x3c963f(0x2ba)]=function(_0x3d2dc2){const _0x59ea12=_0x3c963f;if(!_0x3d2dc2)return[];this[_0x59ea12(0x292)]=this[_0x59ea12(0x292)]||{};if(this[_0x59ea12(0x292)][_0x3d2dc2['id']]!==undefined)return this['_equipBattleSkillPassiveStates'][_0x3d2dc2['id']];this[_0x59ea12(0x292)][_0x3d2dc2['id']]=[];const _0x5cf562=VisuMZ[_0x59ea12(0x2bb)][_0x59ea12(0x1cf)],_0x38becb=_0x3d2dc2[_0x59ea12(0x274)]||'';if(_0x38becb[_0x59ea12(0x2a3)](_0x5cf562['equipPassives'])){const _0x2ca436=String(RegExp['$1'])['split'](',')[_0x59ea12(0x2d2)](_0x1bc26c=>_0x1bc26c['trim']());for(const _0x121276 of _0x2ca436){const _0x3793b8=/^\d+$/[_0x59ea12(0x28a)](_0x121276);let _0x503a8a=0x0;_0x3793b8?_0x503a8a=Number(_0x121276):_0x503a8a=DataManager[_0x59ea12(0x1ca)](_0x121276),_0x503a8a&&this[_0x59ea12(0x292)][_0x3d2dc2['id']]['push'](_0x503a8a);}}return this[_0x59ea12(0x292)][_0x3d2dc2['id']];},TextManager[_0x3c963f(0x1e3)]={'battleCommandName':VisuMZ[_0x3c963f(0x2bb)]['Settings']['Vocab'][_0x3c963f(0x2a1)]??'Skills','skillCommandName':VisuMZ['EquipBattleSkills'][_0x3c963f(0x1e6)][_0x3c963f(0x21c)][_0x3c963f(0x256)]??_0x3c963f(0x291),'helpWindow':{'emptyList':VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1e6)]['Vocab'][_0x3c963f(0x2c8)]??'','emptyEquip':VisuMZ['EquipBattleSkills'][_0x3c963f(0x1e6)][_0x3c963f(0x21c)]['emptyEquipDesc']??''},'buttonAssist':{'unequip':VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1e6)]['Vocab']['unequipAssist']??''},'marker':{'fmt':VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1e6)][_0x3c963f(0x21c)][_0x3c963f(0x221)]??_0x3c963f(0x208),'equipped':VisuMZ['EquipBattleSkills'][_0x3c963f(0x1e6)]['Vocab']['equipMarker']??_0x3c963f(0x2b0),'tierFmt':VisuMZ[_0x3c963f(0x2bb)]['Settings']['Vocab'][_0x3c963f(0x2b4)]??_0x3c963f(0x296)},'skillTierFmt':VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1e6)][_0x3c963f(0x21c)][_0x3c963f(0x22d)]??_0x3c963f(0x2a6)},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x29d)]=ColorManager['getItemColor'],ColorManager[_0x3c963f(0x211)]=function(_0x2742c5){const _0x1b791e=_0x3c963f;return DataManager[_0x1b791e(0x2ca)](_0x2742c5)&&$gameSystem[_0x1b791e(0x1f1)]()?this[_0x1b791e(0x260)](_0x2742c5):VisuMZ['EquipBattleSkills']['ColorManager_getItemColor']['call'](this,_0x2742c5);},ColorManager[_0x3c963f(0x260)]=function(_0x277567){const _0x20a46e=_0x3c963f;if(!_0x277567)return this[_0x20a46e(0x299)]();return $gameSystem[_0x20a46e(0x1f1)]()?this[_0x20a46e(0x22f)](_0x277567):this[_0x20a46e(0x299)]();},ColorManager['getEquipBattleSkillTierColor']=function(_0x2ebc14){const _0x5b8356=_0x3c963f,_0x5780ab=DataManager['getEquipSkillTierData'](_0x2ebc14);return ColorManager[_0x5b8356(0x2c1)](_0x5780ab[_0x5b8356(0x224)]??0x0);},Game_System['EQUIP_BATTLE_SKILLS']={'tierSystem':VisuMZ[_0x3c963f(0x2bb)]['Settings'][_0x3c963f(0x2be)]??!![]},Game_System[_0x3c963f(0x285)][_0x3c963f(0x1f1)]=function(){const _0x21df21=_0x3c963f;return Game_System[_0x21df21(0x1e3)][_0x21df21(0x2aa)];},Game_Actor['EQUIP_BATTLE_SKILLS']={'defaultEnable':VisuMZ['EquipBattleSkills'][_0x3c963f(0x1e6)][_0x3c963f(0x298)][_0x3c963f(0x259)]??!![],'accessAllTypes':VisuMZ[_0x3c963f(0x2bb)]['Settings'][_0x3c963f(0x298)]['accessAllTypes']??![],'defaultBase':VisuMZ['EquipBattleSkills'][_0x3c963f(0x1e6)]['General']['defaultBase']??0x8,'absoluteMax':VisuMZ['EquipBattleSkills'][_0x3c963f(0x1e6)][_0x3c963f(0x298)][_0x3c963f(0x235)]??0x10},Game_Actor['prototype'][_0x3c963f(0x2ec)]=function(){const _0x1f16ed=_0x3c963f;if(DataManager[_0x1f16ed(0x2e7)]())return![];const _0x2b3995=VisuMZ[_0x1f16ed(0x2bb)][_0x1f16ed(0x1cf)],_0x430c1d=this[_0x1f16ed(0x1fa)]()[_0x1f16ed(0x274)]||'';if(_0x430c1d['match'](_0x2b3995[_0x1f16ed(0x1d9)]))return!![];else{if(_0x430c1d[_0x1f16ed(0x2a3)](_0x2b3995[_0x1f16ed(0x1e4)]))return![];}return Game_Actor[_0x1f16ed(0x1e3)]['defaultEnable'];},Game_Actor[_0x3c963f(0x285)]['maxBattleSkills']=function(){const _0x20ebfe=_0x3c963f;if(this['_maxBattleSkills']!==undefined)return this['_maxBattleSkills'];this['_maxBattleSkills']=Game_Actor['EQUIP_BATTLE_SKILLS'][_0x20ebfe(0x2a8)];const _0x3148a6=VisuMZ[_0x20ebfe(0x2bb)][_0x20ebfe(0x1cf)];if((this[_0x20ebfe(0x283)]()[_0x20ebfe(0x274)]||'')[_0x20ebfe(0x2a3)](_0x3148a6[_0x20ebfe(0x2c6)]))this[_0x20ebfe(0x2bc)]=Number(RegExp['$1']);else(this['currentClass']()['note']||'')[_0x20ebfe(0x2a3)](_0x3148a6[_0x20ebfe(0x2c6)])&&(this[_0x20ebfe(0x2bc)]=Number(RegExp['$1']));for(const _0x342367 of this['traitObjects']()){if(!_0x342367)continue;(_0x342367[_0x20ebfe(0x274)]||'')[_0x20ebfe(0x2a3)](_0x3148a6[_0x20ebfe(0x1c2)])&&(this[_0x20ebfe(0x2bc)]+=Number(RegExp['$1']));}this[_0x20ebfe(0x2bc)]+=this['maxBattleSkillsPlus']();const _0xffab25=Game_Actor[_0x20ebfe(0x1e3)][_0x20ebfe(0x235)];return this[_0x20ebfe(0x2bc)]=this['_maxBattleSkills'][_0x20ebfe(0x28c)](0x1,_0xffab25),this[_0x20ebfe(0x2bc)];},Game_Actor['prototype'][_0x3c963f(0x2df)]=function(){const _0x4ce075=_0x3c963f;return this['_maxBattleSkillsPlus']=this[_0x4ce075(0x264)]||0x0,this[_0x4ce075(0x264)];},Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x2e1)]=function(_0x291520){const _0x9764c5=_0x3c963f;if($gameParty['inBattle']())return;this['_maxBattleSkillsPlus']=this[_0x9764c5(0x264)]||0x0,this['_maxBattleSkillsPlus']=_0x291520,this[_0x9764c5(0x2bc)]=undefined,this['clearUnequippableBattleSkills'](),this[_0x9764c5(0x2f2)]();},Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x2ae)]=function(_0x1179ce){const _0x183ac7=_0x3c963f,_0x12a602=this[_0x183ac7(0x2df)]();this[_0x183ac7(0x2e1)](_0x12a602+_0x1179ce);},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x306)]=Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x2f2)],Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x2f2)]=function(){const _0x35d4f3=_0x3c963f;!$gameParty[_0x35d4f3(0x227)]()&&(this[_0x35d4f3(0x2bc)]=undefined,this[_0x35d4f3(0x29f)]()),VisuMZ[_0x35d4f3(0x2bb)]['Game_Actor_refresh'][_0x35d4f3(0x1bf)](this);},VisuMZ['EquipBattleSkills']['Game_Battler_onBattleEnd']=Game_Battler[_0x3c963f(0x285)][_0x3c963f(0x2a5)],Game_Battler[_0x3c963f(0x285)][_0x3c963f(0x2a5)]=function(){const _0x4a2793=_0x3c963f;VisuMZ[_0x4a2793(0x2bb)][_0x4a2793(0x1be)][_0x4a2793(0x1bf)](this),this[_0x4a2793(0x1ff)]()&&(this[_0x4a2793(0x2bc)]=undefined,this[_0x4a2793(0x29f)]());},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x2c2)]=Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x248)],Game_Actor['prototype'][_0x3c963f(0x248)]=function(_0x447b2b){const _0x5ced2d=_0x3c963f;VisuMZ[_0x5ced2d(0x2bb)][_0x5ced2d(0x2c2)]['call'](this,_0x447b2b);const _0x394f14=$dataSkills[_0x447b2b];this['canEquipBattleSkill'](_0x394f14)&&this['equipBattleSkill'](_0x447b2b,-0x1);},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x262)]=Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x1c4)],Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x1c4)]=function(_0x473483){const _0x2f9fcb=_0x3c963f;VisuMZ['EquipBattleSkills'][_0x2f9fcb(0x262)][_0x2f9fcb(0x1bf)](this,_0x473483),this[_0x2f9fcb(0x303)](_0x473483);},VisuMZ[_0x3c963f(0x2bb)]['Game_Actor_initSkills']=Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x273)],Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x273)]=function(){const _0x3979b1=_0x3c963f;this[_0x3979b1(0x258)](),VisuMZ['EquipBattleSkills'][_0x3979b1(0x252)][_0x3979b1(0x1bf)](this);},Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x258)]=function(){const _0x4dc0f5=_0x3c963f;this[_0x4dc0f5(0x20d)]=[];let _0x4f1878=this[_0x4dc0f5(0x2d8)]();while(_0x4f1878--)this[_0x4dc0f5(0x20d)][_0x4dc0f5(0x2db)](0x0);},Game_Actor[_0x3c963f(0x285)]['battleSkills']=function(){const _0x482380=_0x3c963f;if(DataManager['isBattleTest']())return[];if(!this[_0x482380(0x2ec)]())return[];if(this['_battleSkill_IDs']===undefined)this[_0x482380(0x258)]();while(this['_battleSkill_IDs'][_0x482380(0x1ba)]!==this[_0x482380(0x2d8)]()){this[_0x482380(0x20d)][_0x482380(0x1ba)]>this[_0x482380(0x2d8)]()?this[_0x482380(0x20d)]['pop']():this[_0x482380(0x20d)][_0x482380(0x2db)](0x0);}return this['_battleSkill_IDs'][_0x482380(0x2d2)](_0x3b1ba4=>$dataSkills[_0x3b1ba4]);},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x231)]=Game_Actor['prototype'][_0x3c963f(0x20e)],Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x20e)]=function(){const _0x32e354=_0x3c963f;return $gameParty[_0x32e354(0x227)]()?this['skills']()['filter'](_0x5e25bf=>this[_0x32e354(0x202)](_0x5e25bf)):VisuMZ[_0x32e354(0x2bb)][_0x32e354(0x231)][_0x32e354(0x1bf)](this);},Game_Actor[_0x3c963f(0x285)]['clearUnequippableBattleSkills']=function(){const _0x225751=_0x3c963f;if(this[_0x225751(0x20d)]===undefined)this[_0x225751(0x258)]();while(this[_0x225751(0x2d8)]()<this[_0x225751(0x20d)][_0x225751(0x1ba)]){this[_0x225751(0x20d)][_0x225751(0x1ee)]();}for(const _0xb9ff9d of this[_0x225751(0x20d)][_0x225751(0x1dd)]()[_0x225751(0x2a0)]()){if(_0xb9ff9d<=0x0)continue;const _0x205523=$dataSkills[_0xb9ff9d];if(!this['canEquipBattleSkill'](_0x205523)){const _0xb0113e=this[_0x225751(0x20d)][_0x225751(0x23f)](_0xb9ff9d);this[_0x225751(0x20d)][_0xb0113e]=0x0;}}},Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x1e5)]=function(_0x354479,_0x10ae4e){const _0x33bccf=_0x3c963f;if(!_0x354479)return![];if(!this[_0x33bccf(0x2fd)]()[_0x33bccf(0x1c0)](_0x354479))return![];if(this['isSkillHidden'](_0x354479))return![];const _0x3ca3b2=VisuMZ[_0x33bccf(0x2bb)][_0x33bccf(0x1cf)],_0x1a878f=_0x354479['note']||'';if($gameSystem[_0x33bccf(0x1f1)]()){const _0x2a1a57=DataManager['getEquipSkillTierType'](_0x354479);if(_0x2a1a57!==''){const _0x441113=DataManager['getEquipSkillTierType'](_0x10ae4e);if(!this[_0x33bccf(0x1d0)]()[_0x33bccf(0x1c0)](_0x354479)&&_0x2a1a57!==_0x441113){const _0x598f20=this['currentEquipSkillTierSlots'](_0x2a1a57),_0x2240b7=this[_0x33bccf(0x300)](_0x2a1a57);if(_0x598f20>=_0x2240b7)return![];}}}const _0x338cc5=this[_0x33bccf(0x2fe)](),_0x54742c=DataManager[_0x33bccf(0x226)](_0x354479);if(_0x1a878f['match'](_0x3ca3b2[_0x33bccf(0x2cb)]))return![];else{if(_0x1a878f[_0x33bccf(0x2a3)](_0x3ca3b2[_0x33bccf(0x27d)]))return![];else{if(_0x1a878f[_0x33bccf(0x2a3)](_0x3ca3b2[_0x33bccf(0x20b)]))return!![];else{if(_0x1a878f[_0x33bccf(0x2a3)](_0x3ca3b2[_0x33bccf(0x2fa)]))return _0x338cc5[_0x33bccf(0x239)](_0x143989=>_0x54742c['includes'](_0x143989));}}}if(Game_Actor[_0x33bccf(0x1e3)][_0x33bccf(0x1ed)])return!![];return _0x338cc5[_0x33bccf(0x239)](_0x2b0cd2=>_0x54742c[_0x33bccf(0x1c0)](_0x2b0cd2));},Game_Actor['prototype'][_0x3c963f(0x1c8)]=function(_0x14a15b,_0x1273c9){const _0x416585=_0x3c963f;if(this['_battleSkill_IDs']===undefined)this[_0x416585(0x258)]();_0x1273c9<0x0&&(_0x1273c9=this[_0x416585(0x20d)]['indexOf'](0x0));if(_0x1273c9<0x0)return;if(this[_0x416585(0x20d)]['includes'](_0x14a15b)){const _0x85314c=this['_battleSkill_IDs'][_0x416585(0x23f)](_0x14a15b);this[_0x416585(0x20d)][_0x85314c]=0x0;}this[_0x416585(0x20d)][_0x1273c9]=_0x14a15b;if(!this['_tempActor']&&Imported['VisuMZ_1_ItemsEquipsCore']){const _0x5d1299=JsonEx['makeDeepCopy'](this);_0x5d1299[_0x416585(0x20a)]=!![],this['refresh'](),this['equipAdjustHpMp'](_0x5d1299);}else this['refresh']();},Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x303)]=function(_0x3fbeb4){const _0xf20000=_0x3c963f;if(this[_0xf20000(0x20d)]===undefined)this[_0xf20000(0x258)]();const _0x1107be=this[_0xf20000(0x20d)][_0xf20000(0x23f)](_0x3fbeb4);if(_0x1107be<0x0)return;this[_0xf20000(0x20d)][_0x1107be]=0x0,this[_0xf20000(0x2f2)]();},Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x300)]=function(_0x1cdc14){const _0x43dbc9=_0x3c963f;_0x1cdc14=_0x1cdc14[_0x43dbc9(0x1f0)]()['trim']();if(VisuMZ['EquipBattleSkills'][_0x43dbc9(0x1e1)][_0x1cdc14]===undefined)return Number[_0x43dbc9(0x23a)];const _0x3429a3=VisuMZ[_0x43dbc9(0x2bb)][_0x43dbc9(0x1e1)][_0x1cdc14],_0x117c0a=DataManager[_0x43dbc9(0x257)](this,_0x1cdc14),_0x3effe1=DataManager[_0x43dbc9(0x1d1)](this['currentClass'](),_0x1cdc14),_0x3d0bb5=_0x117c0a>0x0?_0x117c0a:_0x3effe1,_0x2e762f=this[_0x43dbc9(0x2d7)](_0x1cdc14),_0x114b34=this[_0x43dbc9(0x265)](_0x1cdc14);return(_0x3d0bb5+_0x2e762f+_0x114b34)[_0x43dbc9(0x28c)](0x1,_0x3429a3[_0x43dbc9(0x235)]);},Game_Actor['prototype'][_0x3c963f(0x2d7)]=function(_0x3d2c23){const _0x19cf0a=_0x3c963f;let _0x35fa22=0x0;for(const _0x3d5280 of this[_0x19cf0a(0x272)]()){if(!_0x3d5280)continue;_0x35fa22+=DataManager[_0x19cf0a(0x1eb)](_0x3d5280,_0x3d2c23);}return _0x35fa22;},Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x265)]=function(_0x1daa2d){const _0x453237=_0x3c963f;return _0x1daa2d=_0x1daa2d[_0x453237(0x1f0)]()['trim'](),this[_0x453237(0x286)]=this['_maxEquipSkillTierSlotsPlus']||{},this[_0x453237(0x286)][_0x1daa2d]=this['_maxEquipSkillTierSlotsPlus'][_0x1daa2d]||0x0,this[_0x453237(0x286)][_0x1daa2d];},Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x1cb)]=function(_0x1a1b7c,_0x261aff){const _0x5782bf=_0x3c963f;if($gameParty[_0x5782bf(0x227)]())return;_0x1a1b7c=_0x1a1b7c[_0x5782bf(0x1f0)]()['trim'](),this['_maxEquipSkillTierSlotsPlus']=this[_0x5782bf(0x286)]||{},this[_0x5782bf(0x286)][_0x1a1b7c]=_0x261aff,this[_0x5782bf(0x29f)](),this[_0x5782bf(0x2f2)]();},Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x1d5)]=function(_0x2c19fb,_0xe201e6){const _0x5b11c5=_0x3c963f,_0x2e5f7c=this[_0x5b11c5(0x265)](_0x2c19fb);this[_0x5b11c5(0x1cb)](_0x2c19fb,_0x2e5f7c+_0xe201e6);},Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x1fc)]=function(_0x442296){const _0x405479=_0x3c963f;_0x442296=_0x442296[_0x405479(0x1f0)]()[_0x405479(0x1f2)]();if(VisuMZ[_0x405479(0x2bb)][_0x405479(0x1e1)][_0x442296]===undefined)return 0x0;let _0x2a6c29=0x0;for(const _0x4e67f8 of this[_0x405479(0x1d0)]()){if(!_0x4e67f8)continue;if(DataManager['getEquipSkillTierType'](_0x4e67f8)===_0x442296)_0x2a6c29++;}return _0x2a6c29;},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x26b)]=Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x22a)],Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x22a)]=function(_0x82de63){const _0x8328cd=_0x3c963f;let _0x252bc3=VisuMZ[_0x8328cd(0x2bb)][_0x8328cd(0x26b)][_0x8328cd(0x1bf)](this,_0x82de63);return this[_0x8328cd(0x2ec)]()&&(_0x252bc3+=this[_0x8328cd(0x21f)](_0x82de63)),_0x252bc3;},Game_Actor[_0x3c963f(0x285)]['equipBattleSkillsParamPlus']=function(_0x46fda3){const _0x4087e7=_0x3c963f;let _0x99480d=0x0;for(const _0x166c79 of this[_0x4087e7(0x1d0)]()){if(!_0x166c79)continue;_0x99480d+=DataManager[_0x4087e7(0x22b)](_0x166c79,_0x46fda3);}return _0x99480d;},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x210)]=Game_BattlerBase[_0x3c963f(0x285)]['addPassiveStatesFromOtherPlugins'],Game_BattlerBase[_0x3c963f(0x285)][_0x3c963f(0x2a2)]=function(){const _0x56efac=_0x3c963f;VisuMZ[_0x56efac(0x2bb)][_0x56efac(0x210)]['call'](this),this[_0x56efac(0x1cc)]();},Game_BattlerBase[_0x3c963f(0x285)]['addPassiveStatesFromEquippedBattleSkills']=function(){},Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x1cc)]=function(){const _0x4ca188=_0x3c963f;if(!this[_0x4ca188(0x2ec)]())return;const _0x326d45=this['_cache']['passiveStates'];for(const _0x5e268c of this[_0x4ca188(0x1d0)]()){if(!_0x5e268c)continue;const _0x3b215d=DataManager['equipBattleSkillPassiveStates'](_0x5e268c);for(const _0xec1629 of _0x3b215d){_0x326d45['push'](_0xec1629);}}},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x289)]=Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x2dd)],Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x2dd)]=function(){const _0xfc87e=_0x3c963f;if(BattleManager['_autoBattle']&&!ConfigManager[_0xfc87e(0x2d5)])return this['makeActionListAutoAttack']();else return this[_0xfc87e(0x2ec)]()?this['makeActionListForEquipBattleSkills']():VisuMZ[_0xfc87e(0x2bb)][_0xfc87e(0x289)][_0xfc87e(0x1bf)](this);},Game_Actor[_0x3c963f(0x285)][_0x3c963f(0x2c3)]=function(){const _0x472f67=_0x3c963f,_0xaada77=[],_0x10ebe7=new Game_Action(this);_0x10ebe7['setAttack'](),_0xaada77[_0x472f67(0x2db)](_0x10ebe7);let _0x363402=this['battleSkills']();_0x363402=_0x363402[_0x472f67(0x1d7)](_0x1eb349=>this['canUse'](_0x1eb349));for(const _0x232e5f of _0x363402){const _0x570d12=new Game_Action(this);_0x570d12['setSkill'](_0x232e5f['id']),_0xaada77[_0x472f67(0x2db)](_0x570d12);}return _0xaada77;},VisuMZ['EquipBattleSkills']['Scene_Skill_create']=Scene_Skill[_0x3c963f(0x285)][_0x3c963f(0x279)],Scene_Skill[_0x3c963f(0x285)]['create']=function(){const _0x3afb55=_0x3c963f;VisuMZ[_0x3afb55(0x2bb)]['Scene_Skill_create']['call'](this),this[_0x3afb55(0x253)]();},Scene_Skill[_0x3c963f(0x285)][_0x3c963f(0x253)]=function(){const _0x3c795b=_0x3c963f,_0x6b7b17=this[_0x3c795b(0x26a)](),_0x36bbc6=new Window_EquipBattleSkillList(_0x6b7b17);_0x36bbc6[_0x3c795b(0x1e9)](),this[_0x3c795b(0x2d1)](_0x36bbc6),this[_0x3c795b(0x2fc)]=_0x36bbc6,_0x36bbc6['setHandler']('ok',this['onEquipBattleSkillsOk'][_0x3c795b(0x219)](this)),_0x36bbc6['setHandler']('cancel',this['onEquipBattleSkillsCancel'][_0x3c795b(0x219)](this)),_0x36bbc6[_0x3c795b(0x228)](this['_helpWindow']);if(this[_0x3c795b(0x24b)])_0x36bbc6['setStatusWindow'](this['_shopStatusWindow']);_0x36bbc6[_0x3c795b(0x1f7)](Window_EquipBattleSkillList[_0x3c795b(0x200)]);},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x288)]=Scene_Skill[_0x3c963f(0x285)]['onItemOk'],Scene_Skill[_0x3c963f(0x285)][_0x3c963f(0x2eb)]=function(){const _0x44477f=_0x3c963f;this[_0x44477f(0x223)][_0x44477f(0x225)]()?this[_0x44477f(0x2c7)]():VisuMZ[_0x44477f(0x2bb)][_0x44477f(0x288)][_0x44477f(0x1bf)](this);},Scene_Skill[_0x3c963f(0x285)][_0x3c963f(0x2c7)]=function(){const _0x479560=_0x3c963f;this['_itemWindow'][_0x479560(0x1e9)](),this[_0x479560(0x223)]['deactivate'](),this['_equipBattleSkillsWindow']['setActor'](this['actor']()),this[_0x479560(0x2fc)][_0x479560(0x1cd)](this['_itemWindow']['item']()),this[_0x479560(0x2fc)]['refresh'](),this['_equipBattleSkillsWindow'][_0x479560(0x2bf)](),this['_equipBattleSkillsWindow'][_0x479560(0x25d)](),this[_0x479560(0x2fc)][_0x479560(0x28e)]();},Scene_Skill[_0x3c963f(0x285)][_0x3c963f(0x2f9)]=function(){const _0xb34572=_0x3c963f;this[_0xb34572(0x223)]['show'](),this[_0xb34572(0x223)][_0xb34572(0x2bf)](),this[_0xb34572(0x2fc)][_0xb34572(0x2e9)](),this['_equipBattleSkillsWindow']['deselect'](),this[_0xb34572(0x2fc)][_0xb34572(0x1e9)]();},Scene_Skill[_0x3c963f(0x285)][_0x3c963f(0x1c6)]=function(){const _0xd6ff55=_0x3c963f,_0x5066f6=this[_0xd6ff55(0x2fc)][_0xd6ff55(0x24c)](),_0x4e6cf3=this[_0xd6ff55(0x223)][_0xd6ff55(0x23e)]();this[_0xd6ff55(0x277)][_0xd6ff55(0x1c8)](_0x5066f6?_0x5066f6['id']:0x0,_0x4e6cf3),this[_0xd6ff55(0x223)]['refresh'](),this['_statusWindow'][_0xd6ff55(0x2f2)]();},Scene_Skill[_0x3c963f(0x285)][_0x3c963f(0x261)]=function(){const _0x3ddbe6=_0x3c963f;this[_0x3ddbe6(0x1c6)](),this['stopEquipBattleSkills']();},Scene_Skill[_0x3c963f(0x285)]['onEquipBattleSkillsCancel']=function(){const _0x504dc1=_0x3c963f;this[_0x504dc1(0x2f9)]();},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x2a7)]=Scene_Skill['prototype'][_0x3c963f(0x1ce)],Scene_Skill['prototype'][_0x3c963f(0x1ce)]=function(){const _0x6caa1c=_0x3c963f;return this['_itemWindow']&&this[_0x6caa1c(0x223)][_0x6caa1c(0x266)]&&this[_0x6caa1c(0x223)]['isEquipBattleSkillMode']()?TextManager[_0x6caa1c(0x1e3)][_0x6caa1c(0x278)][_0x6caa1c(0x1f6)]:VisuMZ[_0x6caa1c(0x2bb)]['Scene_Skill_buttonAssistText3'][_0x6caa1c(0x1bf)](this);},Window_Base['EQUIP_BATTLE_SKILLS']={'emptyIcon':VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1e6)][_0x3c963f(0x29e)]['emptyIcon']??0x133,'emptyName':VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1e6)]['Window'][_0x3c963f(0x2af)]??'Empty','emptyColor':VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1e6)]['Window'][_0x3c963f(0x245)]??0x7,'tierNormalColor':VisuMZ['EquipBattleSkills'][_0x3c963f(0x1e6)][_0x3c963f(0x29e)]['tierNormalColor']??0x0,'tierFullColor':VisuMZ['EquipBattleSkills'][_0x3c963f(0x1e6)]['Window']['tierFullColor']??0x11,'tierFontSize':VisuMZ[_0x3c963f(0x2bb)]['Settings'][_0x3c963f(0x29e)][_0x3c963f(0x2ce)]??0x14},Window_Base[_0x3c963f(0x285)][_0x3c963f(0x255)]=function(_0x511e50,_0xf77ab4,_0x4877a5){const _0x197b14=_0x3c963f,_0x15f358=_0xf77ab4+(this['lineHeight']()-ImageManager[_0x197b14(0x302)])/0x2,_0x533e85=ImageManager[_0x197b14(0x1de)]+0x4,_0x1d2045=Math[_0x197b14(0x1f3)](0x0,_0x4877a5-_0x533e85),_0x13d931=ColorManager[_0x197b14(0x2c1)](Window_Base[_0x197b14(0x1e3)][_0x197b14(0x245)]);this[_0x197b14(0x294)](_0x13d931);const _0x4eb7c6=Window_Base['EQUIP_BATTLE_SKILLS']['emptyIcon'];this['drawIcon'](_0x4eb7c6,_0x511e50,_0x15f358);const _0x11bcd9=Window_Base['EQUIP_BATTLE_SKILLS']['emptyName'];this[_0x197b14(0x24a)](_0x11bcd9,_0x511e50+_0x533e85,_0xf77ab4,_0x1d2045),this[_0x197b14(0x2e6)]();},Window_Base[_0x3c963f(0x285)][_0x3c963f(0x2d3)]=function(_0x37a18c,_0x343e92,_0x2e852a,_0x57cd60){const _0x1f6f2a=_0x3c963f;if(!_0x37a18c)return;const _0x3327ff=_0x2e852a+(this[_0x1f6f2a(0x240)]()-ImageManager[_0x1f6f2a(0x302)])/0x2,_0x39aea4=ImageManager['iconWidth']+0x4,_0x53561a=Math[_0x1f6f2a(0x1f3)](0x0,_0x57cd60-_0x39aea4);this[_0x1f6f2a(0x294)](ColorManager[_0x1f6f2a(0x260)](_0x37a18c)),this[_0x1f6f2a(0x27a)](_0x37a18c[_0x1f6f2a(0x2f0)],_0x343e92,_0x3327ff),this[_0x1f6f2a(0x24a)](_0x37a18c[_0x1f6f2a(0x268)],_0x343e92+_0x39aea4,_0x2e852a,_0x53561a),this[_0x1f6f2a(0x2e6)]();},Window_Base['prototype'][_0x3c963f(0x1f9)]=function(_0x2ed043,_0x9ed062,_0x1d6eee,_0x4e3612,_0x362255){const _0x1abc31=_0x3c963f,_0x2a8fb0=VisuMZ[_0x1abc31(0x2bb)][_0x1abc31(0x1e1)][_0x9ed062];if(!_0x2a8fb0)return;if(!_0x2ed043)return;this['resetFontSettings']();const _0x31a553=_0x2a8fb0[_0x1abc31(0x1e0)]||0x0;if(_0x31a553>0x0){const _0x186ce7=_0x4e3612+(this[_0x1abc31(0x240)]()-ImageManager[_0x1abc31(0x302)])/0x2,_0x35e5b4=ImageManager['iconWidth']+0x4;this[_0x1abc31(0x27a)](_0x31a553,_0x1d6eee,_0x186ce7),_0x1d6eee+=_0x35e5b4,_0x362255-=_0x35e5b4;}const _0x559506=_0x2a8fb0['displayName'],_0x233d88=ColorManager[_0x1abc31(0x2c1)](_0x2a8fb0[_0x1abc31(0x224)]??0x0);this['changeTextColor'](_0x233d88),this[_0x1abc31(0x24a)](_0x559506,_0x1d6eee,_0x4e3612,_0x362255,_0x1abc31(0x2bd));const _0x33284e=_0x2ed043['currentEquipSkillTierSlots'](_0x9ed062),_0x3ecc7b=_0x2ed043[_0x1abc31(0x300)](_0x9ed062),_0x81863f=TextManager[_0x1abc31(0x1e3)]['skillTierFmt'],_0x328eb4=_0x81863f[_0x1abc31(0x205)](_0x33284e,_0x3ecc7b);if(_0x33284e>=_0x3ecc7b){const _0x2a4621=ColorManager[_0x1abc31(0x2c1)](Window_Base[_0x1abc31(0x1e3)]['tierFullColor']);this[_0x1abc31(0x294)](_0x2a4621);}else{const _0x3fd265=ColorManager[_0x1abc31(0x2c1)](Window_Base[_0x1abc31(0x1e3)][_0x1abc31(0x23b)]);this['changeTextColor'](_0x3fd265);}this[_0x1abc31(0x21b)][_0x1abc31(0x281)]=Window_Base['EQUIP_BATTLE_SKILLS'][_0x1abc31(0x2ce)],this['drawText'](_0x328eb4,_0x1d6eee,_0x4e3612,_0x362255,_0x1abc31(0x1df)),this['resetFontSettings']();},VisuMZ['EquipBattleSkills'][_0x3c963f(0x297)]=Window_Selectable['prototype'][_0x3c963f(0x2f4)],Window_Selectable[_0x3c963f(0x285)][_0x3c963f(0x2f4)]=function(){const _0x1c2ff2=_0x3c963f;if(this[_0x1c2ff2(0x263)]===Window_SkillList&&this[_0x1c2ff2(0x225)]()&&this[_0x1c2ff2(0x2e0)]()){if(Input[_0x1c2ff2(0x2b8)]('shift')){this['processEquipBattleSkillsShiftRemoveShortcut']();return;}}VisuMZ[_0x1c2ff2(0x2bb)][_0x1c2ff2(0x297)]['call'](this);},Window_SkillType[_0x3c963f(0x1e3)]={'top':VisuMZ[_0x3c963f(0x2bb)]['Settings']['Window']['topEquipCommand']??!![],'icon':VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1e6)][_0x3c963f(0x29e)][_0x3c963f(0x212)]??0x138},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x2da)]=Window_SkillType[_0x3c963f(0x285)]['makeCommandList'],Window_SkillType[_0x3c963f(0x285)]['makeCommandList']=function(){const _0xc365c8=_0x3c963f,_0x27c69d=Window_SkillType[_0xc365c8(0x1e3)][_0xc365c8(0x26d)];if(_0x27c69d)this['addEquipBattleSkillsCommand']();VisuMZ[_0xc365c8(0x2bb)][_0xc365c8(0x2da)][_0xc365c8(0x1bf)](this);if(!_0x27c69d)this[_0xc365c8(0x1b9)]();},Window_SkillType[_0x3c963f(0x285)]['addEquipBattleSkillsCommand']=function(){const _0x221612=_0x3c963f;if(!this[_0x221612(0x277)])return;if(!this[_0x221612(0x277)][_0x221612(0x2ec)]())return;const _0xf8e6df=this[_0x221612(0x1f5)]();this[_0x221612(0x213)](_0xf8e6df,'skill',!![],_0x221612(0x2d0));},Window_SkillType[_0x3c963f(0x285)]['equipBattleSkillsCommandName']=function(){const _0x33863a=_0x3c963f;let _0x3018ba=TextManager[_0x33863a(0x1e3)][_0x33863a(0x256)];if(_0x3018ba[_0x33863a(0x2a3)](/\\I\[(\d+)\]/i))return _0x3018ba;if(this['commandStyle']()===_0x33863a(0x236))return _0x3018ba;const _0x89dadb=Window_SkillType[_0x33863a(0x1e3)][_0x33863a(0x2fb)];return _0x33863a(0x22e)[_0x33863a(0x205)](_0x89dadb,_0x3018ba);},Window_SkillStatus[_0x3c963f(0x1e3)]={'drawTiers':VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1e6)]['Window'][_0x3c963f(0x217)]??!![]},VisuMZ['EquipBattleSkills'][_0x3c963f(0x1bb)]=Window_SkillStatus[_0x3c963f(0x285)][_0x3c963f(0x2f2)],Window_SkillStatus[_0x3c963f(0x285)][_0x3c963f(0x2f2)]=function(){const _0x5a1086=_0x3c963f;this[_0x5a1086(0x2de)](),this[_0x5a1086(0x225)]()&&$gameSystem[_0x5a1086(0x1f1)]()?this[_0x5a1086(0x2f8)]():VisuMZ['EquipBattleSkills'][_0x5a1086(0x1bb)][_0x5a1086(0x1bf)](this);},Window_SkillStatus['prototype']['isEquipBattleSkillMode']=function(){const _0x48c5c0=_0x3c963f;if(!Window_SkillStatus[_0x48c5c0(0x1e3)]['drawTiers'])return![];const _0x8298ea=SceneManager[_0x48c5c0(0x1bd)];if(!_0x8298ea)return![];const _0x1a3add=_0x8298ea['_itemWindow'];if(!_0x1a3add)return![];return _0x1a3add['isEquipBattleSkillMode']&&_0x1a3add[_0x48c5c0(0x225)]();},Window_SkillStatus[_0x3c963f(0x285)][_0x3c963f(0x2f8)]=function(){const _0x416c1f=_0x3c963f;if(!this[_0x416c1f(0x277)])return;Window_StatusBase[_0x416c1f(0x285)][_0x416c1f(0x2f2)][_0x416c1f(0x1bf)](this);if(VisuMZ[_0x416c1f(0x2bb)][_0x416c1f(0x1e6)][_0x416c1f(0x29e)][_0x416c1f(0x1c7)])return VisuMZ[_0x416c1f(0x2bb)][_0x416c1f(0x1e6)][_0x416c1f(0x29e)][_0x416c1f(0x1c7)][_0x416c1f(0x1bf)](this);const _0x27df11=this[_0x416c1f(0x1fd)]()/0x2,_0x562730=this['innerHeight'],_0x12c1ad=_0x562730/0x2-this['lineHeight']()*1.5;this[_0x416c1f(0x1f8)](this['_actor'],_0x27df11+0x1,0x0,0x90,_0x562730),this['drawActorSimpleStatus'](this[_0x416c1f(0x277)],_0x27df11+0xb4,_0x12c1ad);let _0x2503ad=this['colSpacing']()/0x2+0xb4+0xb4+0xb4,_0x5a6978=this[_0x416c1f(0x29b)]-_0x2503ad-0x2;if(_0x5a6978<0x12c)return;const _0x4ee53e=DataManager[_0x416c1f(0x2b5)](),_0x481abe=Math['floor'](this['innerHeight']/this[_0x416c1f(0x240)]()),_0x27ade2=Math[_0x416c1f(0x1da)](_0x4ee53e['length']/_0x481abe);let _0x16a029=_0x2503ad,_0x3cbdd2=Math[_0x416c1f(0x1f3)](Math[_0x416c1f(0x1fe)]((this[_0x416c1f(0x2e2)]-this[_0x416c1f(0x240)]()*Math[_0x416c1f(0x1da)](_0x4ee53e[_0x416c1f(0x1ba)]/_0x27ade2))/0x2),0x0);const _0x5a0c15=_0x3cbdd2;let _0xf5d80a=(this[_0x416c1f(0x29b)]-_0x16a029-this[_0x416c1f(0x27c)]()*0x2*_0x27ade2)/_0x27ade2;_0x27ade2===0x1&&(_0xf5d80a=Math[_0x416c1f(0x234)](ImageManager[_0x416c1f(0x229)]*0x2,_0xf5d80a),_0x16a029+=Math[_0x416c1f(0x1fe)]((this[_0x416c1f(0x29b)]-_0x16a029-this['itemPadding']()*0x2-_0xf5d80a)/0x2));for(const _0x720cab of _0x4ee53e){this[_0x416c1f(0x1f9)](this[_0x416c1f(0x277)],_0x720cab,_0x16a029,_0x3cbdd2,_0xf5d80a),_0x3cbdd2+=this[_0x416c1f(0x240)](),_0x3cbdd2+this['lineHeight']()>this[_0x416c1f(0x2e2)]&&(_0x3cbdd2=_0x5a0c15,_0x16a029+=_0xf5d80a+this[_0x416c1f(0x27c)]()*0x2);}},DataManager['getEquipSkillTiers']=function(){const _0x38cdb0=_0x3c963f;if(this[_0x38cdb0(0x1ef)]!==undefined)return this[_0x38cdb0(0x1ef)];this[_0x38cdb0(0x1ef)]=[];const _0x503062=VisuMZ['EquipBattleSkills'][_0x38cdb0(0x1e6)][_0x38cdb0(0x1e1)];for(const _0x40460b of _0x503062){if(!_0x40460b)continue;const _0x4354a7=_0x40460b[_0x38cdb0(0x2d6)]['toLowerCase']()[_0x38cdb0(0x1f2)]();if(_0x4354a7===_0x38cdb0(0x1ec))continue;if(_0x40460b[_0x38cdb0(0x2b3)][_0x38cdb0(0x1f0)]()[_0x38cdb0(0x1f2)]()==='untitled')continue;if(_0x40460b[_0x38cdb0(0x247)]['toLowerCase']()[_0x38cdb0(0x1f2)]()===_0x38cdb0(0x203))continue;this['_getEquipSkillTiers']['push'](_0x4354a7);}return this[_0x38cdb0(0x1ef)];},Window_SkillList[_0x3c963f(0x285)]['isEquipBattleSkillMode']=function(){const _0x49bf97=_0x3c963f;if($gameParty['inBattle']()&&this[_0x49bf97(0x1d6)]===0x0)return!![];return this['_stypeId']===_0x49bf97(0x2d0);},VisuMZ['EquipBattleSkills']['Window_SkillList_setStypeId']=Window_SkillList[_0x3c963f(0x285)][_0x3c963f(0x2b7)],Window_SkillList[_0x3c963f(0x285)][_0x3c963f(0x2b7)]=function(_0x3f3879){const _0x21aa5b=_0x3c963f,_0x6bb8cd=this[_0x21aa5b(0x225)]();VisuMZ[_0x21aa5b(0x2bb)][_0x21aa5b(0x24d)][_0x21aa5b(0x1bf)](this,_0x3f3879);if(_0x6bb8cd!==this['isEquipBattleSkillMode']()){const _0x10ecd8=SceneManager[_0x21aa5b(0x1bd)];if(!_0x10ecd8)return;const _0x5209d1=_0x10ecd8[_0x21aa5b(0x1fb)];if(_0x5209d1)_0x5209d1['refresh']();}},VisuMZ[_0x3c963f(0x2bb)]['Window_SkillList_selectLast']=Window_SkillList['prototype'][_0x3c963f(0x28e)],Window_SkillList['prototype'][_0x3c963f(0x28e)]=function(){const _0x1b2f08=_0x3c963f;if(this[_0x1b2f08(0x225)]()){const _0x57315d=this[_0x1b2f08(0x277)][_0x1b2f08(0x1f4)]();if(_0x57315d&&this[_0x1b2f08(0x277)][_0x1b2f08(0x1d0)]()[_0x1b2f08(0x1c0)](_0x57315d)){const _0x43d4a1=this['_actor']['battleSkills']()[_0x1b2f08(0x23f)](_0x57315d);this['forceSelect'](_0x43d4a1);}else this['forceSelect'](0x0);}else VisuMZ[_0x1b2f08(0x2bb)]['Window_SkillList_selectLast'][_0x1b2f08(0x1bf)](this);},VisuMZ['EquipBattleSkills'][_0x3c963f(0x1e7)]=Window_SkillList[_0x3c963f(0x285)][_0x3c963f(0x1c5)],Window_SkillList[_0x3c963f(0x285)]['updateHelp']=function(){const _0x8c8666=_0x3c963f;VisuMZ[_0x8c8666(0x2bb)]['Window_SkillList_updateHelp'][_0x8c8666(0x1bf)](this);if(this[_0x8c8666(0x225)]()&&this[_0x8c8666(0x24c)]()===null){if(this[_0x8c8666(0x20f)]){const _0x3238f0=TextManager[_0x8c8666(0x1e3)]['helpWindow'][_0x8c8666(0x28d)];this[_0x8c8666(0x20f)][_0x8c8666(0x267)](_0x3238f0);}}},VisuMZ[_0x3c963f(0x2bb)]['Window_SkillList_makeItemList']=Window_SkillList[_0x3c963f(0x285)][_0x3c963f(0x1d3)],Window_SkillList['prototype'][_0x3c963f(0x1d3)]=function(){const _0x5b8a92=_0x3c963f;this[_0x5b8a92(0x277)]&&this[_0x5b8a92(0x225)]()?this[_0x5b8a92(0x2c9)]():VisuMZ[_0x5b8a92(0x2bb)][_0x5b8a92(0x2f3)][_0x5b8a92(0x1bf)](this);},Window_SkillList[_0x3c963f(0x285)][_0x3c963f(0x2c9)]=function(){const _0x431dbb=_0x3c963f;this[_0x431dbb(0x242)]=this[_0x431dbb(0x277)]['battleSkills']()['filter'](_0xdd015b=>this['includes'](_0xdd015b));},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x2a9)]=Window_SkillList[_0x3c963f(0x285)][_0x3c963f(0x1c0)],Window_SkillList['prototype'][_0x3c963f(0x1c0)]=function(_0x8ebb06){const _0x1106ce=_0x3c963f;return this[_0x1106ce(0x225)]()?$gameParty[_0x1106ce(0x227)]()?this[_0x1106ce(0x2c0)](_0x8ebb06):!![]:VisuMZ['EquipBattleSkills'][_0x1106ce(0x2a9)][_0x1106ce(0x1bf)](this,_0x8ebb06);},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x2ed)]=Window_SkillList['prototype'][_0x3c963f(0x2ad)],Window_SkillList[_0x3c963f(0x285)][_0x3c963f(0x2ad)]=function(_0x55ce1b){const _0x5e56c2=_0x3c963f;if(this[_0x5e56c2(0x225)]())return!![];return VisuMZ[_0x5e56c2(0x2bb)][_0x5e56c2(0x2ed)][_0x5e56c2(0x1bf)](this,_0x55ce1b);},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x209)]=Window_SkillList[_0x3c963f(0x285)][_0x3c963f(0x238)],Window_SkillList[_0x3c963f(0x285)]['isEnabled']=function(_0x98f24e){const _0x245ec8=_0x3c963f;if(this[_0x245ec8(0x277)]&&this[_0x245ec8(0x225)]()&&!$gameParty[_0x245ec8(0x227)]())return!![];else return this[_0x245ec8(0x277)]&&$gameParty[_0x245ec8(0x227)]()&&_0x98f24e&&!VisuMZ[_0x245ec8(0x206)]['CheckVisibleBattleNotetags'](this[_0x245ec8(0x277)],_0x98f24e)?![]:VisuMZ[_0x245ec8(0x2bb)][_0x245ec8(0x209)][_0x245ec8(0x1bf)](this,_0x98f24e);},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x23c)]=Window_SkillList[_0x3c963f(0x285)][_0x3c963f(0x271)],Window_SkillList[_0x3c963f(0x285)][_0x3c963f(0x271)]=function(_0x599ea9){const _0x3d7aa8=_0x3c963f;this[_0x3d7aa8(0x277)]&&this[_0x3d7aa8(0x277)]['canEquipBattleSkills']()&&this[_0x3d7aa8(0x225)]()?this['drawEquipBattleSkillsItem'](_0x599ea9):VisuMZ[_0x3d7aa8(0x2bb)]['Window_SkillList_drawItem'][_0x3d7aa8(0x1bf)](this,_0x599ea9);},Window_SkillList[_0x3c963f(0x285)][_0x3c963f(0x2e5)]=function(_0x4a1229){const _0x55452e=_0x3c963f;if(this['isEquipBattleSkillMode']()&&this[_0x55452e(0x2dc)](_0x4a1229)===null){this[_0x55452e(0x255)](_0x4a1229);return;}const _0x26965c=this['itemAt'](_0x4a1229);if(!_0x26965c)return;const _0x3a56f9=_0x26965c?_0x26965c[_0x55452e(0x268)]:'';this['alterSkillName'](_0x26965c);const _0x5a1bd9=this[_0x55452e(0x269)](),_0x459bdb=this[_0x55452e(0x249)](_0x4a1229);this[_0x55452e(0x222)](this[_0x55452e(0x238)](_0x26965c)),this['drawEquipBattleSkillName'](_0x26965c,_0x459bdb['x'],_0x459bdb['y'],_0x459bdb[_0x55452e(0x275)]-_0x5a1bd9),this['drawSkillCost'](_0x26965c,_0x459bdb['x'],_0x459bdb['y'],_0x459bdb[_0x55452e(0x275)]),this[_0x55452e(0x222)](!![]),_0x26965c[_0x55452e(0x268)]=_0x3a56f9;},Window_SkillList['prototype'][_0x3c963f(0x255)]=function(_0x33356b){const _0xd01fd1=_0x3c963f,_0x53dfca=this[_0xd01fd1(0x249)](_0x33356b);this[_0xd01fd1(0x222)](![]),Window_Selectable[_0xd01fd1(0x285)][_0xd01fd1(0x255)][_0xd01fd1(0x1bf)](this,_0x53dfca['x'],_0x53dfca['y'],_0x53dfca[_0xd01fd1(0x275)]),this['changePaintOpacity'](!![]);},Window_SkillList[_0x3c963f(0x285)][_0x3c963f(0x201)]=function(){const _0x12228a=_0x3c963f;if(!this[_0x12228a(0x277)])return;if(!this[_0x12228a(0x2dc)](this[_0x12228a(0x23e)]()))return;this[_0x12228a(0x277)][_0x12228a(0x1c8)](0x0,this[_0x12228a(0x23e)]()),this['refresh'](),this[_0x12228a(0x1c5)]();if(SceneManager[_0x12228a(0x1bd)][_0x12228a(0x1fb)])SceneManager[_0x12228a(0x1bd)][_0x12228a(0x1fb)]['refresh']();SoundManager[_0x12228a(0x25c)]();},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x21d)]=Window_ActorCommand[_0x3c963f(0x285)][_0x3c963f(0x2b2)],Window_ActorCommand['prototype'][_0x3c963f(0x2b2)]=function(){const _0x2c8298=_0x3c963f;this[_0x2c8298(0x277)]&&this[_0x2c8298(0x277)][_0x2c8298(0x2ec)]()?this['addEquipBattleSkillsCommand']():VisuMZ[_0x2c8298(0x2bb)][_0x2c8298(0x21d)][_0x2c8298(0x1bf)](this);},Window_ActorCommand['prototype'][_0x3c963f(0x1b9)]=function(){const _0x5b45b6=_0x3c963f;let _0x49f6a0=TextManager[_0x5b45b6(0x1e3)][_0x5b45b6(0x2a1)];const _0x444fe4=this[_0x5b45b6(0x1d4)]();if(_0x444fe4===_0x5b45b6(0x236))_0x49f6a0=_0x49f6a0['replace'](/\x1I\[(\d+)\]/gi,''),_0x49f6a0=_0x49f6a0[_0x5b45b6(0x21a)](/\\I\[(\d+)\]/gi,'');else{if(!_0x49f6a0[_0x5b45b6(0x2a3)](/\\I\[(\d+)\]/i)){const _0x2cba41=Window_SkillType['EQUIP_BATTLE_SKILLS']['icon'];_0x49f6a0=_0x5b45b6(0x22e)[_0x5b45b6(0x205)](_0x2cba41,_0x49f6a0);}}this['addCommand'](_0x49f6a0,_0x5b45b6(0x2cd),!![],'equipBattleSkills');},VisuMZ[_0x3c963f(0x2bb)]['Window_ActorCommand_addSingleSkillCommands']=Window_ActorCommand[_0x3c963f(0x285)][_0x3c963f(0x207)],Window_ActorCommand[_0x3c963f(0x285)][_0x3c963f(0x207)]=function(){const _0x9d546=_0x3c963f;this[_0x9d546(0x277)]&&this[_0x9d546(0x277)][_0x9d546(0x2ec)]()?this[_0x9d546(0x2ea)]():VisuMZ[_0x9d546(0x2bb)][_0x9d546(0x216)]['call'](this);},Window_ActorCommand[_0x3c963f(0x285)][_0x3c963f(0x2ea)]=function(){const _0x7f33f3=_0x3c963f,_0x346766=this[_0x7f33f3(0x277)][_0x7f33f3(0x1d0)]();for(const _0x30d44e of _0x346766){if(!_0x30d44e)continue;this[_0x7f33f3(0x220)](_0x30d44e);}},VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x25b)]=Window_ActorCommand[_0x3c963f(0x285)][_0x3c963f(0x28e)],Window_ActorCommand['prototype'][_0x3c963f(0x28e)]=function(){const _0x29ace8=_0x3c963f;VisuMZ['EquipBattleSkills'][_0x29ace8(0x25b)][_0x29ace8(0x1bf)](this);if(this['_actor']&&ConfigManager['commandRemember']){const _0x2139f0=this[_0x29ace8(0x277)][_0x29ace8(0x2f6)]();if(_0x2139f0===_0x29ace8(0x2cd)){const _0x25cb1c=this[_0x29ace8(0x277)]['lastBattleSkill']();_0x25cb1c&&this['_actor'][_0x29ace8(0x1d0)]()[_0x29ace8(0x1c0)](_0x25cb1c)&&this[_0x29ace8(0x204)](_0x29ace8(0x2d0));}}if(this[_0x29ace8(0x23e)]()<0x0)this[_0x29ace8(0x246)](0x0);};function _0x5cea(_0x2890f2,_0x501a21){const _0x58144e=_0x5814();return _0x5cea=function(_0x5cea7d,_0x483e2d){_0x5cea7d=_0x5cea7d-0x1b9;let _0x15d016=_0x58144e[_0x5cea7d];return _0x15d016;},_0x5cea(_0x2890f2,_0x501a21);}function Window_EquipBattleSkillList(){const _0x2e918a=_0x3c963f;this[_0x2e918a(0x232)](...arguments);}Window_EquipBattleSkillList['prototype']=Object[_0x3c963f(0x279)](Window_SkillList[_0x3c963f(0x285)]),Window_EquipBattleSkillList[_0x3c963f(0x285)]['constructor']=Window_EquipBattleSkillList,Window_EquipBattleSkillList[_0x3c963f(0x200)]=VisuMZ[_0x3c963f(0x2bb)][_0x3c963f(0x1e6)][_0x3c963f(0x29e)][_0x3c963f(0x2ac)]??0x0,Window_EquipBattleSkillList['prototype'][_0x3c963f(0x232)]=function(_0x38803e){const _0x128077=_0x3c963f;Window_SkillList['prototype'][_0x128077(0x232)][_0x128077(0x1bf)](this,_0x38803e);},Window_EquipBattleSkillList[_0x3c963f(0x285)][_0x3c963f(0x282)]=function(){return 0x1;},Window_EquipBattleSkillList['prototype'][_0x3c963f(0x1cd)]=function(_0x3b58ad){const _0x3b000f=_0x3c963f;this[_0x3b000f(0x1dc)]=_0x3b58ad;},Window_EquipBattleSkillList[_0x3c963f(0x285)]['currentSelectedSkill']=function(){return this['_currentSelectedSkill']||null;},Window_EquipBattleSkillList['prototype']['selectLast']=function(){const _0x3ee622=_0x3c963f;let _0x10aa23=0x0;const _0x42050b=this['currentSelectedSkill']();this[_0x3ee622(0x242)][_0x3ee622(0x1c0)](_0x42050b)&&(_0x10aa23=this[_0x3ee622(0x242)][_0x3ee622(0x23f)](_0x42050b)),this['forceSelect'](Math['max'](0x0,_0x10aa23)),this[_0x3ee622(0x27e)]();},Window_EquipBattleSkillList[_0x3c963f(0x285)][_0x3c963f(0x1c5)]=function(){const _0x119ab8=_0x3c963f;Window_SkillList[_0x119ab8(0x285)][_0x119ab8(0x1c5)][_0x119ab8(0x1bf)](this);if(this[_0x119ab8(0x24c)]()===null){if(this[_0x119ab8(0x20f)]){const _0x3b01ab=TextManager[_0x119ab8(0x1e3)]['helpWindow'][_0x119ab8(0x2b9)];this[_0x119ab8(0x20f)][_0x119ab8(0x267)](_0x3b01ab);}}},Window_EquipBattleSkillList[_0x3c963f(0x285)][_0x3c963f(0x28f)]=function(){const _0x6da713=_0x3c963f;SoundManager[_0x6da713(0x25c)]();},Window_EquipBattleSkillList[_0x3c963f(0x285)][_0x3c963f(0x1d3)]=function(){const _0x3de6b4=_0x3c963f;this['_actor']?(this[_0x3de6b4(0x242)]=this[_0x3de6b4(0x277)][_0x3de6b4(0x2fd)]()[_0x3de6b4(0x1d7)](_0x443187=>this[_0x3de6b4(0x1c0)](_0x443187)),this[_0x3de6b4(0x242)]['unshift'](null),this[_0x3de6b4(0x242)][_0x3de6b4(0x1ba)]>this['maxVisibleItems']()&&this[_0x3de6b4(0x242)][_0x3de6b4(0x2db)](null)):this['_data']=[];},Window_EquipBattleSkillList['prototype'][_0x3c963f(0x1c0)]=function(_0x54bc46){const _0x3aa270=_0x3c963f;if(this[_0x3aa270(0x277)][_0x3aa270(0x254)](_0x54bc46))return![];if(_0x54bc46){const _0x3ab754=VisuMZ[_0x3aa270(0x2bb)][_0x3aa270(0x1cf)];if(_0x54bc46[_0x3aa270(0x274)][_0x3aa270(0x2a3)](_0x3ab754[_0x3aa270(0x27d)]))return![];}return!![];},Window_EquipBattleSkillList['prototype'][_0x3c963f(0x238)]=function(_0xc97142){const _0x35a2f8=_0x3c963f;if(_0xc97142===null)return!![];if(_0xc97142){const _0x57c63a=VisuMZ[_0x35a2f8(0x2bb)][_0x35a2f8(0x1cf)];if(_0xc97142['note']['match'](_0x57c63a['hideEquip']))return![];}return this['_actor'][_0x35a2f8(0x1e5)](_0xc97142,this['currentSelectedSkill']());},Window_EquipBattleSkillList[_0x3c963f(0x285)][_0x3c963f(0x271)]=function(_0x735d91){const _0x29e045=_0x3c963f;this['itemAt'](_0x735d91)===null?this[_0x29e045(0x255)](_0x735d91):Window_SkillList[_0x29e045(0x285)][_0x29e045(0x271)]['call'](this,_0x735d91);},Window_EquipBattleSkillList[_0x3c963f(0x285)][_0x3c963f(0x255)]=function(_0x19f8df){const _0x39edef=_0x3c963f,_0x3a64f5=this[_0x39edef(0x249)](_0x19f8df);Window_Selectable[_0x39edef(0x285)][_0x39edef(0x255)]['call'](this,_0x3a64f5['x'],_0x3a64f5['y'],_0x3a64f5[_0x39edef(0x275)]);},Window_EquipBattleSkillList[_0x3c963f(0x285)]['alterSkillName']=function(_0xb08f2c){const _0x4d6848=_0x3c963f;Window_SkillList[_0x4d6848(0x285)]['alterSkillName']['call'](this,_0xb08f2c);if(!_0xb08f2c)return;this[_0x4d6848(0x2a4)](_0xb08f2c);},Window_EquipBattleSkillList[_0x3c963f(0x285)][_0x3c963f(0x2a4)]=function(_0x5df0df){const _0x21acf2=_0x3c963f,_0x4e028f=TextManager[_0x21acf2(0x1e3)][_0x21acf2(0x284)],_0x5c3874=_0x4e028f[_0x21acf2(0x2f5)],_0x2f21f7=this[_0x21acf2(0x277)][_0x21acf2(0x1d0)]()[_0x21acf2(0x1c0)](_0x5df0df)?_0x4e028f[_0x21acf2(0x2c4)]:'';let _0x408b5f='';const _0xfaa9ce=DataManager[_0x21acf2(0x280)](_0x5df0df);if(_0xfaa9ce[_0x21acf2(0x247)]!==undefined){const _0x3855a7=_0x4e028f[_0x21acf2(0x2b4)];_0x408b5f=_0x3855a7[_0x21acf2(0x205)](_0xfaa9ce[_0x21acf2(0x247)]);}_0x5df0df[_0x21acf2(0x268)]=_0x5c3874['format'](_0x5df0df[_0x21acf2(0x268)],_0x2f21f7,_0x408b5f);};