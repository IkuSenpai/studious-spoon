//=============================================================================
// VisuStella MZ - Equip Passive System
// VisuMZ_2_EquipPassiveSys.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_EquipPassiveSys = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EquipPassiveSys = VisuMZ.EquipPassiveSys || {};
VisuMZ.EquipPassiveSys.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.03] [EquipPassiveSys]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Equip_Passive_System_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Actors can now equip passive states to further enhance their battle
 * potential. With how flexible states are, equippable passive states can boost
 * actors in numerous ways. Equippable passive states can be learned in many
 * different ways and add further customization potential to your actors.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Passive states can be accessed and equipped from the skill scene.
 * * Passive states are limited to the passive capacity that an actor has and
 *   the amount of capacity that passive state costs.
 * * As passive are states at the fundamental level, they take on all the
 *   advantages and traits that states have like motions and overlays.
 * * Dictate which passives an actor can learn through notetags.
 * * Some passives can be linked to when skills are learned.
 * * Passives can have a variety of conditions before they are learned.
 * * Branch out passives so that when they're learned, more passives can be
 *   unlocked for that actor.
 * * Some of these conditions include leveling, winning battles, escaping,
 *   being afflicted by states, attacking a certain amount of times, and more!
 * * Globally learn and remove passive states across all actors.
 * * Optionally combines with the Skill Learn System to allow actors to learn
 *   equippable passives using the Skill Learn System's notetags and AP/SP.
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
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * How Equippable Passives Work
 * ============================================================================
 *
 * This section explains how Equippable Passives work in detail.
 *
 * ---
 * 
 * States at the Core
 *
 * Equippable Passives are states that actors can toggle ON/OFF as long as the
 * actors have enough "Passive Capacity" to support the passives. As these are
 * states, they have all of the traits that states have access to in addition
 * to their motion and overlay related aspects.
 *
 * ---
 * 
 * Unlock Conditions
 * 
 * If an actor has unlearned Equippable Passives listed, that actor can attempt
 * to meet the conditions of those passive states and learn them. Actors will
 * not be able to learn passive states that aren't listed, regardless of the
 * actor fulfilling the unlock conditions for the unlisted Equippable Passives.
 * 
 * Unlock conditions can range from things like fighting 5 battles since the
 * time the Equippable Passive has been listed to things like casting 8 magical
 * skills. There is a huge list of unlock conditions that can be used found in
 * the notetags section.
 *
 * ---
 *
 * Skill Learn System
 * 
 * If unlock conditions are not your thing, actors can bypass all of them and
 * just straight up pay for them in the Skill Learn System as long as the
 * Equippable Passives are listed there. Naturally, this will require VisuMZ's
 * Skill Learn System plugin installed for this integration to work out.
 * 
 * Actors can pay for Equippable Passives in the Skill Learn System using AP,
 * CP, JP, SP, items, weapons, armors, just about anything that normal skills
 * can be used to pay with.
 * 
 * Once again, Equippable Passives through the Skill Learn System will not
 * require unlock conditions to be fulfilled in order to be bought and learned.
 * This functions as an alternative way for players to acquire Equippable
 * Passives if they're not a fan of the unlock system.
 * 
 * This does not mean that all Equippable Passives have to be placed through
 * the Skill Learn System while being condition unlockable or vice versa. You
 * can have some passives exclusive to the Skill Learn System while others are
 * exclusive to the unlocking mechanisms at play.
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
 * Certain notetags will become available if the VisuStella MZ Elements and
 * Status Menu Core plugin is installed in addition to this plugin. This
 * notetag is the <Equip Passive Learn Defeat name Trait: x> notetag.
 * 
 * ---
 *
 * VisuMZ_2_SkillLearnSystem
 *
 * If you have the VisuStella MZ Skill Learn System installed in addition to
 * this plugin, you can integrate the passive learning aspect into the skill
 * learn system itself and pay for passives using AP, SP (as well as CP and JP
 * if the VisuStella MZ Class Change System is installed).
 * 
 * Unlock conditions do NOT need to be fulfilled if passives are learned
 * through the Skill Learn System. This is because the normal unlocking passive
 * conditions are made specifically for learning passives organically through
 * playing the game while the Skill Learn System allows for players to
 * carefully choose their options and buy them on the spot.
 * 
 * Passives placed through the Skill Learn System will use a different set of
 * notetags which will be listed in the notetags section of this plugin.
 * 
 * Unlearned passives listed in the Skill Learn System will not necessarily
 * appear in the unlearned passives list of the Passives window unless you
 * have the organic notetags used to list them there.
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
 * === Setup-Related Notetags ===
 * 
 * ---
 *
 * <Equip Passive Cost: x>
 *
 * - Used for: State Notetags
 * - Determines the Passive Capacity cost of the Equippable Passive.
 * - Replace 'x' with a number representing the Passive Capacity cost.
 * - If this notetag is not used, the Passive Capacity cost will default to
 *   the setting found in the Plugin Parameters.
 *
 * ---
 * 
 * <Learnable Equip Passive: id>
 * <Learnable Equip Passives: id, id, id>
 * 
 * <Learnable Equip Passive: name>
 * <Learnable Equip Passives: name, name, name>
 * 
 * <Learnable Equip Passives>
 *  name
 *  name
 *  name
 * </Learnable Equip Passives>
 * 
 * - Used for: Actor, Class Notetags
 * - Determines which Equippable Passives that actors and classes can learn.
 * - Replace 'id' with a number representing the ID of the passive state.
 * - Replace 'name' with the name of the passive state.
 * - This does NOT put the passives in the Skill Learn System. This only adds
 *   them to the Passives command where they are learnable through meeting any
 *   necessary unlock conditions.
 * 
 * ---
 * 
 * <Equip Passive Icon: x>
 * <Equip Passive Name: name>
 * 
 * - Used for: State Notetags
 * - Changes the icon and name of the Equippable Passive to something different
 *   than how it is listed in the database or found in other menus.
 * - This can be used for states that you may want to hide icons for so that
 *   they do not show up in the states list when the passive is equipped.
 * - If these notetags are not used, the passive will refer to the state's
 *   original icon and name.
 * - Replace 'x' with a number representing the icon index you want.
 * - Replace 'name' with the text of the name you want used.
 * 
 * ---
 * 
 * <Learned Equip Passive: id>
 * <Learned Equip Passives: id, id, id>
 * 
 * <Learned Equip Passive: name>
 * <Learned Equip Passives: name, name, name>
 * 
 * - Used for: Actor Notetags
 * - Allows this actor to already have learned this Equippable Passive by
 *   default so that it is available when the actor joins your party.
 * - These Equippable Passives do not have to be listed through the learnable
 *   notetags.
 * - Replace 'id' with a number representing the ID of the passive state.
 * - Replace 'name' with the name of the passive state.
 * 
 * ---
 * 
 * <Already Equip Passive: id>
 * <Already Equip Passives: id, id, id>
 * 
 * <Already Equip Passive: name>
 * <Already Equip Passives: name, name, name>
 * 
 * - Used for: Actor Notetags
 * - Allows this actor to already have learned this Equippable Passive and has
 *   it equipped by default so that it is available when the actor joins your
 *   party.
 * - These Equippable Passives do not have to be listed through the learnable
 *   notetags.
 * - Replace 'id' with a number representing the ID of the passive state.
 * - Replace 'name' with the name of the passive state.
 * 
 * ---
 * 
 * <Branch Learn Equip Passive: id>
 * <Branch Learn Equip Passives: id, id, id>
 * 
 * <Branch Learn Equip Passive: name>
 * <Branch Learn Equip Passives: name, name, name>
 * 
 * - Used for: State Notetags
 * - When this Equippable Passive is learned, also learn target passive(s).
 * - Target passive(s) does not have to be learnable listed.
 * - Replace 'id' with a number representing the ID of the target passive.
 * - Replace 'name' with the name of the target passive.
 * 
 * ---
 * 
 * <Branch Learnable Equip Passive: id>
 * <Branch Learnable Equip Passives: id, id, id>
 * 
 * <Branch Learnable Equip Passive: name>
 * <Branch Learnable Equip Passives: name, name, name>
 * 
 * - Used for: State Notetags
 * - When this Equippable Passive is learned, add target passive(s) to the
 *   actor's learnable passive list.
 * - Replace 'id' with a number representing the ID of the target passive.
 * - Replace 'name' with the name of the target passive.
 * 
 * ---
 * 
 * <Link Learn Equip Passive: id>
 * <Link Learn Equip Passives: id, id, id>
 * 
 * <Link Learn Equip Passive: name>
 * <Link Learn Equip Passives: name, name, name>
 * 
 * - Used for: Skill Notetags
 * - When this skill is learned, also learn target passive(s).
 * - Target passive(s) does not have to be learnable listed.
 * - Replace 'id' with a number representing the ID of the target passive.
 * - Replace 'name' with the name of the target passive.
 * 
 * ---
 * 
 * <Link Learnable Equip Passive: id>
 * <Link Learnable Equip Passives: id, id, id>
 * 
 * <Link Learnable Equip Passive: name>
 * <Link Learnable Equip Passives: name, name, name>
 * 
 * - Used for: Skill Notetags
 * - When this skill is learned, add target passive(s) to the actor's learnable
 *   passive list.
 * - Replace 'id' with a number representing the ID of the target passive.
 * - Replace 'name' with the name of the target passive.
 * 
 * ---
 *
 * <Help Description>
 *  text
 *  text
 * </Help Description>
 *
 * - Used for: State Notetags
 * - Assigns a help description for the passive state.
 * - Replace 'text' with text you want displayed for the help window.
 * - This best works with one line to best fit other plugins.
 *
 * ---
 * 
 * === Hiding-Related Notetags ===
 * 
 * ---
 * 
 * <Hide If Not Learned Equip Passive>
 * 
 * - Used for: State Notetags
 * - Bypasses Passives listing and hides the passive state regardless of the
 *   Plugin Parameter settings.
 * 
 * ---
 * 
 * <Hide If Learned Equip Passive: id>
 * <Hide If Learned Equip Passive: name>
 * 
 * <Hide If Learned All Equip Passives: id, id, id>
 * <Hide If Learned All Equip Passives: name, name, name>
 * 
 * <Hide If Learned Any Equip Passives: id, id, id>
 * <Hide If Learned Any Equip Passives: name, name, name>
 * 
 * - Used for: State Notetags
 * - Hides the passive state from the Passives listing based on whether or not
 *   other passives are learned.
 * - Replace 'id' with a number representing the ID of the passive state.
 * - Replace 'name' with the name of the passive state.
 * - The 'All' notetag variant requires all of the listed passives to be
 *   learned in order for this passive to be hidden.
 * - The 'Any' notetag variant requires only one of the listed passives to be
 *   learned in order for this passive to be hidden.
 * 
 * ---
 * 
 * === Masking-Related Notetags ===
 * 
 * ---
 * 
 * <Mask If Not Learned Equip Passive>
 * <No Mask If Not Learned Equip Passive>
 * 
 * - Used for: State Notetags
 * - Bypasses the masking settings determined in the Plugin Parameters to mask
 *   or not mask the Equippable Passive if the passive is not learned.
 * 
 * ---
 * 
 * <Equip Passive Mask Name: name>
 * 
 * - Used for: State Notetags
 * - Instead of displaying ?'s for the mask name, this allows you to insert
 *   custom mask names instead.
 * - Replace 'name' with the text you want for the mask name.
 * 
 * ---
 * 
 * === Unlock Conditions-Related Notetags ===
 * 
 * ---
 * 
 * <Equip Passive Learn Condition Text>
 *  text
 *  text
 * </Equip Passive Learn Condition Text>
 * 
 * - Used for: State Notetags
 * - Assigns text to the Equip Passives learn unlock conditions.
 * - Replace 'text' with text you want displayed when this passive is selected
 *   and has not yet been learned.
 * - If this notetag is not used, the help description will default be
 *   automatically constructed through the plugin using Plugin Parameters.
 * 
 * ---
 * 
 * <Equip Passive Learn Level: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must reach level 'x'.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'x' with a number representing the level the actor must reach.
 * 
 * ---
 * 
 * <Equip Passive Learn Battles: x>
 * <Equip Passive Learn Victories: x>
 * <Equip Passive Learn Escapes: x>
 * <Equip Passive Learn Defeats: x>
 * 
 * - Used for: State Notetags
 * - Adds a battle result-related unlock condition that the actor must fulfill
 *   in order to learn this Equippable Passive.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'x' with a number representing the number of battle results that
 *   must be fulfilled.
 *   - The number counter will start from the moment Equippable Passive is
 *     listed in the learnable list.
 *   - This does NOT take into account previous battle results before listing.
 * - The 'Battles' notetag variant requires participating in any battles.
 * - The 'Victories' notetag variant requires winning battles.
 * - The 'Escapes' notetag variant requires successfully escaping battles.
 * - The 'Defeats' notetag variant requires losing battles.
 * 
 * ---
 * 
 * <Equip Passive Learn Attack Times: x>
 * <Equip Passive Learn Guard Times: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must attack or guard 'x' times.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'x' with a number representing the number of times the actor must
 *   attack or guard.
 *   - The number counter will start from the moment Equippable Passive is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * 
 * ---
 * 
 * <Equip Passive Learn Use Skills: x>
 * <Equip Passive Learn Use Physical Skills: x>
 * <Equip Passive Learn Use Magical Skills: x>
 * <Equip Passive Learn Use Certain Hit Skills: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must use 'x' skills.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'x' with a number representing the number of times the actor must
 *   use skills.
 *   - The number counter will start from the moment Equippable Passive is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Skills' notetag variant allows any kind of skill usage.
 * - The 'Physical Skills' notetag variant requires physical hit skills.
 * - The 'Magical Skills' notetag variant requires magical hit skills.
 * - The 'Certain Hit Skills' notetag variant requires certain hit skills.
 * 
 * ---
 * 
 * <Equip Passive Learn SType id: x>
 * <Equip Passive Learn SType name: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must use 'x' skills that belong to
 *   a specific skill type.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'id' with a number representing the needed skill type's ID number.
 * - Replace 'name' with text representing the needed skill type's name.
 * - Replace 'x' with a number representing the number of times the actor must
 *   use skills belonging to the needed skill type.
 * 
 * ---
 * 
 * <Equip Passive Learn Use Items: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must use 'x' items.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'x' with a number representing the number of times the actor must
 *   use items.
 *   - The number counter will start from the moment Equippable Passive is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - Any kind of item can be used.
 * 
 * ---
 * 
 * <Equip Passive Learn Inflict Critical Times: x>
 * <Equip Passive Learn Receive Critical Times: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must inflict or receive 'x'
 *   critical hits from actions.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'x' with a number representing the number of times the actor must
 *   inflict or receive critical hits.
 *   - The number counter will start from the moment Equippable Passive is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Inflict' notetag variant requires the critical hit to be caused by
 *   the actor.
 * - The 'Receive' notetag variant requires the critical hit to be caused
 *   against the actor.
 * 
 * ---
 * 
 * <Equip Passive Learn Miss Times: x>
 * <Equip Passive Learn Evade Times: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must miss or evade 'x' actions.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'x' with a number representing the number of times the actor must
 *   miss or evade actions.
 *   - The number counter will start from the moment Equippable Passive is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Miss' notetag variant requires the actor to miss an action.
 * - The 'Evade' notetag variant requires the actor to evade an action.
 * 
 * ---
 * 
 * <Equip Passive Learn Inflict Element id Damage: x>
 * <Equip Passive Learn Inflict Element name Damage: x>
 * 
 * <Equip Passive Learn Receive Element id Damage: x>
 * <Equip Passive Learn Receive Element name Damage: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must inflict or receive damage
 *   from a specific element 'x' times.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'id' with a number representing the element ID number.
 * - Replace 'name' with text representing the element's name.
 * - Replace 'x' with a number representing the number of times the actor must
 *   inflict or receive damage from a specific element.
 *   - The number counter will start from the moment Equippable Passive is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Inflict' notetag variant requires the elemental damage to be caused
 *   by the actor.
 * - The 'Receive' notetag variant requires the elemental damage to be caused
 *   against the actor.
 * 
 * ---
 * 
 * <Equip Passive Learn Inflict State id: x>
 * <Equip Passive Learn Inflict State name: x>
 * 
 * <Equip Passive Learn Receive State id: x>
 * <Equip Passive Learn Receive State name: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must inflict or receive a specific
 *   state 'x' times.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'id' with a number representing the state ID number.
 * - Replace 'name' with text representing the state's name.
 * - Replace 'x' with a number representing the number of times the actor must
 *   inflict or receive a specific state.
 *   - The number counter will start from the moment Equippable Passive is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Inflict' notetag variant requires the target state to be caused
 *   by the actor.
 * - The 'Receive' notetag variant requires the target state to be caused
 *   against the actor.
 * 
 * ---
 * 
 * <Equip Passive Learn Defeat name Trait: x>
 * 
 * - Used for: State Notetags
 * - Requires VisuMZ_1_ElementStatusCore!
 * - Adds an unlock condition that the actor must defeat enemies with specific
 *   trait sets 'x' times.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'name' with text representing the trait set's name.
 * - Replace 'x' with a number representing the number of times the actor must
 *   defeat enemies with the target trait set.
 * 
 * ---
 * 
 * <Equip Passive Learn Inflict Total Damage: x>
 * <Equip Passive Learn Receive Total Damage: x>
 * 
 * <Equip Passive Learn Inflict Total Healing: x>
 * <Equip Passive Learn Receive Total Healing: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must inflict or receive a total
 *   amounts of damage or healing since the time the passive is listed.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'x' with a number representing the total number of damage and
 *   healing the actor must reach.
 *   - The number counter will start from the moment Equippable Passive is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Inflict' notetag variant requires the damage/healing to be caused
 *   by the actor.
 * - The 'Receive' notetag variant requires the damage/healing to be caused
 *   against the actor.
 * 
 * ---
 * 
 * <Equip Passive Learn Kill Count: x>
 * <Equip Passive Learn Death Count: x>
 * <Equip Passive Learn Assist Count: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must fulfill the needed amount of
 *   kills, suffer the amount of deaths, or partake in the number of assists
 *   since the time the passive is listed.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'x' with a number representing the number of kills, deaths, or
 *   assists the actor must reach.
 *   - The number counter will start from the moment Equippable Passive is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Kill' notetag variant refers to the number of enemies directly
 *   defeated by the actor (death via slip damage or events do not count).
 * - The 'Death' notetag variant refers to the number of times the actor must
 *   die (ie reaching 0 HP or receiving the Death state).
 * - The 'Assist' notetag variant refers to the number of times the actor is
 *   present in battle when an enemy is defeated and not directly by the actor.
 * 
 * ---
 * 
 * <Equip Passive Learn Have Gold: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the party must have 'x' gold present at the
 *   moment.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'x' with a number representing the needed amount of gold.
 * 
 * ---
 * 
 * <Equip Passive Learn Have Item id: x>
 * <Equip Passive Learn Have Item name: x>
 * 
 * <Equip Passive Learn Have Weapon id: x>
 * <Equip Passive Learn Have Weapon name: x>
 * 
 * <Equip Passive Learn Have Armor id: x>
 * <Equip Passive Learn Have Armor name: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the party must have 'x' quantities of a
 *   specific item, weapon, or armor present at the moment.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'id' with a number representing the ID of the item, weapon, or
 *   armor needed for the passive.
 * - Replace 'name' with text representing the name of the item, weapon, or
 *   armor needed for the passive.
 * - Replace 'x' with a number representing the needed amount of the item, 
 *   weapon, or armor.
 * 
 * ---
 * 
 * <Equip Passive Learn Reach Param name: x>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must have 'x' value for its base
 *   parameter value at the moment.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'name' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to be referenced.
 * - Replace 'x' with a number representing the needed parameter value.
 * 
 * ---
 * 
 * <Equip Passive Learn Reach XParam name: x%>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must have 'x' value for its
 *   X-parameter value at the moment.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'name' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which parameter to be referenced.
 * - Replace 'x' with a number representing the needed parameter percent value.
 * 
 * ---
 * 
 * <Equip Passive Learn Reach SParam name: x%>
 * 
 * - Used for: State Notetags
 * - Adds an unlock condition that the actor must have 'x' value for its
 *   S-parameter value at the moment.
 * - If this Equippable Passive is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Passive.
 * - Replace 'name' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which parameter to be referenced.
 * - Replace 'x' with a number representing the needed parameter percent value.
 * 
 * ---
 * 
 * === Skill Learn System Integration-Related Notetags ===
 * 
 * ---
 *
 * <Learn Passive: id>
 * <Learn Passives: id, id, id>
 * 
 * <Learn Passive: name>
 * <Learn Passives: name, name, name>
 *
 * - Used for: Class Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Determines what Equippable Passives the class can learn through the
 *   Skill Learn System.
 * - Replace 'id' with a number representing the ID of the passive state that
 *   can be learned through the Skill Learn System menu.
 * - Replace 'name' with the name of the passive state that can be learned
 *   through the Skill Learn System menu.
 * - Multiple entries are permited.
 *
 * ---
 *
 * <Learn Passives>
 *  id
 *  id
 *  id
 *  name
 *  name
 *  name
 * </Learn Passives>
 *
 * - Used for: Class Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Determines what Equippable Passives the class can learn through the
 *   Skill Learn System.
 * - Replace 'id' with a number representing the ID of the passive state that
 *   can be learned through the Skill Learn System menu.
 * - Replace 'name' with the name of the passive state that can be learned
 *   through the Skill Learn System menu.
 * - Multiple middle entries are permited.
 *
 * ---
 *
 * <Learn AP Cost: x>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Determines the Ability Point cost needed for an actor to learn the passive
 *   state through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Ability Points needed
 *   to learn this passive state.
 * - If this notetag is not used, then the Ability Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn CP Cost: x>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Requires VisuMZ_2_ClassChangeSystem!
 * - Determines the Class Point cost needed for an actor to learn the passive
 *   state through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Skill Points needed
 *   to learn this passive state.
 * - If this notetag is not used, then the Skill Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn JP Cost: x>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Requires VisuMZ_2_ClassChangeSystem!
 * - Determines the Job Point cost needed for an actor to learn the passive
 *   state through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Skill Points needed
 *   to learn this passive state.
 * - If this notetag is not used, then the Skill Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn SP Cost: x>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Determines the Skill Point cost needed for an actor to learn the passive
 *   state through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Skill Points needed
 *   to learn this passive state.
 * - If this notetag is not used, then the Skill Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn Item id Cost: x>
 * <Learn Item name Cost: x>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Determines the items needed to be consumed for an actor to learn the
 *   passive state through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the item needed to be 
 *   consumed.
 * - Replace 'name' with the name of the item needed to be consumed.
 * - Replace 'x' with a number representing the amount of the item needed
 *   to learn this passive state.
 * - You may insert multiple copies of this notetag.
 *
 * ---
 *
 * <Learn Weapon id Cost: x>
 * <Learn Weapon name Cost: x>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Determines the weapons needed to be consumed for an actor to learn the
 *   passive state through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the weapon needed to be 
 *   consumed.
 * - Replace 'name' with the name of the weapon needed to be consumed.
 * - Replace 'x' with a number representing the amount of the weapon needed
 *   to learn this passive state.
 * - You may insert multiple copies of this notetag.
 *
 * ---
 *
 * <Learn Armor id Cost: x>
 * <Learn Armor name Cost: x>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Determines the armors needed to be consumed for an actor to learn the
 *   passive state through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the armor needed to be 
 *   consumed.
 * - Replace 'name' with the name of the armor needed to be consumed.
 * - Replace 'x' with a number representing the amount of the armor needed
 *   to learn this passive state.
 * - You may insert multiple copies of this notetag.
 *
 * ---
 *
 * <Learn Gold Cost: x>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Determines the gold cost needed for an actor to learn the passive state
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of gold needed to learn
 *   this passive state.
 * - If this notetag is not used, then the gold cost will default to the value
 *   found in the settings.
 *
 * ---
 *
 * <Learn Show Level: x>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Actors must be at least the required level in order for the passive state
 *   to even appear visibly in the Skill Learn System menu.
 * - Replace 'x' with a number representing the required level for the actor
 *   in order for the passive state to visibly appear.
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
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - The actor must have already learned the above skills in order for the
 *   learnable passive state to appear visibly in the Skill Learn System menu.
 * - Replace 'id' with a number representing the ID of the skill required to be
 *   known by the actor in order to appear visibly in the menu.
 * - Replace 'name' with the name of the skill required to be known by the
 *   actor in order to appear visibly in the menu.
 * - The 'All' notetag variant requires all of the listed skills to be known
 *   before the learnable passive state will appear visibly in the menu.
 * - The 'Any' notetag variant requires any of the listed skills to be known
 *   before the learnable passive state will appear visibly in the menu.
 *
 * ---
 *
 * <Learn Show Switch: x>
 * 
 * <Learn Show All Switches: x, x, x>
 * 
 * <Learn Show Any Switches: x, x, x>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - The switches must be in the ON position in order for the learnable passive
 *   state to appear visibly in the Skill Learn System menu.
 * - Replace 'x' with a number representing the ID of the switch required to be
 *   in the ON position in order to appear visibly in the menu.
 * - The 'All' notetag variant requires all of the switches to be in the ON
 *   position before the learnable passive state will appear visibly in the
 *   menu.
 * - The 'Any' notetag variant requires any of the switches to be in the ON
 *   position before the learnable passive state will appear visibly in the
 *   menu.
 *
 * ---
 *
 * <Learn Require Level: x>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Actors must be at least the required level in order for the passive state
 *   to be enabled in the Skill Learn System menu.
 * - Replace 'x' with a number representing the required level for the actor
 *   in order for the passive state to visibly appear.
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
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - The actor must have already learned the above skills in order for the
 *   learnable passive state to be enabled in the Skill Learn System menu.
 * - Replace 'id' with a number representing the ID of the skill required to be
 *   known by the actor in order to be enabled in the menu.
 * - Replace 'name' with the name of the skill required to be known by the
 *   actor in order to be enabled in the menu.
 * - The 'All' notetag variant requires all of the listed skills to be known
 *   before the learnable passive state will be enabled in the menu.
 * - The 'Any' notetag variant requires any of the listed skills to be known
 *   before the learnable passive state will be enabled in the menu.
 *
 * ---
 *
 * <Learn Require Switch: x>
 * 
 * <Learn Require All Switches: x, x, x>
 * 
 * <Learn Require Any Switches: x, x, x>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - The switches must be in the ON position in order for the learnable passive
 *   state to be enabled in the Skill Learn System menu.
 * - Replace 'x' with a number representing the ID of the switch required to be
 *   in the ON position in order to be enabled in the menu.
 * - The 'All' notetag variant requires all of the switches to be in the ON
 *   position before the learnable passive state will be enabled in the menu.
 * - The 'Any' notetag variant requires any of the switches to be in the ON
 *   position before the learnable passive state will be enabled in the menu.
 *
 * ---
 *
 * <Learn Skill Animation: id>
 * <Learn Skill Animation: id, id, id>
 * 
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Plays the animation(s) when this passive state is learned through the
 *   Skill Learn System's menu.
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
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - This determines the speed at which the passive state's icon fades in
 *   during the skill learning animation.
 * - Replace 'x' with a number value to determine how fast the icon fades in.
 * - Use lower numbers for slower fade speeds and higher numbers for faster
 *   fade speeds.
 * 
 * ---
 * 
 * <Learn Skill Picture: filename>
 * <Picture: filename>
 * 
 * - Used for: State Notetags
 * - Requires VisuMZ_2_SkillLearnSystem!
 * - Uses a picture from your project's /img/pictures/ folder instead of the
 *   passive state's icon during learning instead.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Scaling will not apply to the picture.
 * - Use the <Picture: filename> version for any other plugins that may be
 *   using this as an image outside of learning skills, too.
 * - The size used for the image will vary based on your game's resolution.
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
 * Actor: Learn Equippable Passive
 * - Target actor(s) learns equippable passive state(s).
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Passive State ID(s):
 *   - Select which State ID(s) to add as an equippable passive state.
 * 
 *   Show Text Popup?:
 *   - Shows text popup of actor(s) learning the passive state?
 * 
 * ---
 * 
 * Actor: Forget Equippable Passive
 * - Target actor(s) forgets equippable passive state(s).
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Passive State ID(s):
 *   - Select which State ID(s) to forget as an equippable passive state.
 * 
 * ---
 * 
 * Actor: Add Unlearned Equippable Passive
 * - Gives target actor(s) the ability to learn target passive state(s).
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Passive State ID(s):
 *   - Select which State ID(s) to add as an unlearned equippable passive
 *     state.
 * 
 * ---
 * 
 * Actor: Remove Unlearned Equippable Passive
 * - Removes target actor(s) the ability to learn target passive state(s).
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Passive State ID(s):
 *   - Select which State ID(s) to remove unlearned equippable passive state.
 * 
 * ---
 * 
 * === Global Plugin Commands ===
 * 
 * ---
 * 
 * Global: Learn Equippable Passive
 * - All actors learn equippable passive state(s).
 * 
 *   Passive State ID(s):
 *   - Select which State ID(s) to add as an equippable passive state.
 * 
 *   Show Text Popup?:
 *   - Shows text popup of party learning the passive state?
 * 
 * ---
 * 
 * Global: Forget Equippable Passive
 * - All actors forget equippable passive state(s).
 * 
 *   Passive State ID(s):
 *   - Select which State ID(s) to forget as an equippable passive state.
 * 
 * ---
 * 
 * Global: Add Unlearned Equippable Passive
 * - Gives all actors the ability to learn target passive state(s).
 * 
 *   Passive State ID(s):
 *   - Select which State ID(s) to add as an unlearned equippable passive
 *     state.
 * 
 * ---
 * 
 * Global: Remove Unlearned Equippable Passive
 * - Removes from all actors the ability to learn target passive state(s).
 * 
 *   Passive State ID(s):
 *   - Select which State ID(s) to remove unlearned equippable passive state.
 * 
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 * 
 * System: Show Passives in Skill Scene?
 * - Shows/hides Passives command inside the skill scene.
 * 
 *   Show/Hide?:
 *   - Shows/hides Passives command inside the skill scene.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for the Equip Passive System.
 *
 * ---
 *
 * General Settings:
 * 
 *   Default Show Command:
 *   - Shows Passive Command by default?
 * 
 *   Auto-Equip on Learn:
 *   - Automatically equips newly learned Passives.
 * 
 *   Text Popup on Learn:
 *   - Produce a text popup when a Passive is learned?
 * 
 *     Text Popup Format:
 *     - Text format used for text popup.
 *     - %1 - Actor, %2 - Passive, %3 - Icon
 * 
 * ---
 * 
 * Capacity Settings:
 * 
 *   Capacity Formula:
 *   - What is the formula used to determine current max capacity?
 * 
 *   Default Capacity Cost:
 *   - What is the default capacity cost of equipping a Passive?
 * 
 *   Minimum Capacity Cap:
 *   - What is the minimum capacity value?
 * 
 *   Maximum Capacity Cap:
 *   - What is the maximum capacity value?
 * 
 *   Check Over-Capacity:
 *   - Checks over-capacity when EXP changes.
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
 * Scene_Skill:
 * 
 *   Command Name:
 *   - Text used for the Passives Command.
 * 
 *     Command Icon:
 *     - Icon used for the Passives command and for any passives that are
 *       displayed without any icon.
 * 
 *   Capacity Text:
 *   - Text used for Passives Capacity.
 * 
 *     Capacity Icon:
 *     - Icon used to represent Passives Capacity when displayed as a limited
 *       resource.
 * 
 *     Capacity Format:
 *     - Text format used to representing Capacity.
 *     - %1 - Current, %2 - Max, %3 - Icon
 * 
 *   Cost Format:
 *   - Text format used for Capacity Cost.
 *   - %1 - Cost, %2 - Icon
 * 
 *     Unlearned Text:
 *     - Text displayed instead of cost for unlearned Passives.
 * 
 * ---
 * 
 * Shop Status Window:
 * 
 *   Shop Status Text:
 *   - Text used to representing Passives in shop status.
 *   - Requires VisuMZ_1_ItemsEquipsCore!
 * 
 * ---
 * 
 * Help Window:
 * 
 *   Description Format:
 *   - Text format used to create help descriptions.
 *   - %1 - Unlocking Conditions
 * 
 *   Word Wrap?:
 *   - Apply word wrap to unlock conditions?
 *   - Requires VisuMZ_1_MessageCore!
 * 
 *   Spacing?:
 *   - Add spacing between conditions?
 * 
 *   Spacer:
 *   - Text inserted between conditions.
 * 
 *   Empty Descriptions:
 *   - Text used when no condition text is made.
 * 
 * ---
 * 
 * Unlock Condition Text:
 * 
 *   Condition Met Color:
 *   - Use text colors from the Window Skin only.
 * 
 *   Progress Format:
 *   - Text format used to indicate progress amount.
 *   - %1 - Progress Text
 * 
 *     Fraction Format:
 *     - Text format used for progress fraction.
 *     - %1 - Current, %2 - Goal
 * 
 *     Percent Format:
 *     - Text format used for percentile value.
 *     - %1 - Percent
 * 
 *     Length Limit:
 *     - What is the character limit before a percentage is used instead
 *       fractions for progress text?
 * 
 *     Complete:
 *     - Progress text used when unlock condition is fulfilled.
 * 
 *   Level Format:
 *   - Text format used for level conditions.
 *   - %1 - Level, %2 - Progress
 * 
 *   Battle Format:
 *   - Text format used for fought battles.
 *   * %1 - Needed, %2 - Progress
 * 
 *     Victory Format:
 *     - Text format used for victorious battles.
 *     - %1 - Needed, %2 - Progress
 * 
 *     Escape Format:
 *     - Text format used for escaped battles.
 *     - %1 - Needed, %2 - Progress
 * 
 *     Defeat Format:
 *     - Text format used for lost battles.
 *     - %1 - Needed, %2 - Progress
 * 
 *   Attack Format:
 *   - Text format used for attack times.
 *   - %1 - Needed, %2 - Progress
 * 
 *     Guard Format:
 *     - Text format used for guard times.
 *     - %1 - Needed, %2 - Progress
 * 
 *   Skill Format:
 *   - Text format used for skill times.
 *   - %1 - Needed, %2 - Progress
 * 
 *     Physical Skills:
 *     - Text format used for physical skills.
 *     - %1 - Needed, %2 - Progress
 * 
 *     Magical Skills:
 *     - Text format used for magical skills.
 *     - %1 - Needed, %2 - Progress
 * 
 *     Certain Hit Skills:
 *     - Text format used for certain hit skills.
 *     - %1 - Needed, %2 - Progress
 * 
 *   Item Format:
 *   - Text format used for item uses.
 *   - %1 - Needed, %2 - Progress
 * 
 *   Deal Criticals:
 *   - Text format used for dealing criticals.
 *   - %1 - Needed, %2 - Progress
 * 
 *     Take Criticals:
 *     - Text format used for taking criticals.
 *     - %1 - Needed, %2 - Progress
 * 
 *   Miss Format:
 *   - Text format for missing attacks.
 *   - %1 - Needed, %2 - Progress
 * 
 *     Evade Format:
 *     - Text format for evading attacks.
 *     - %1 - Needed, %2 - Progress
 * 
 *   SType Use:
 *   - Text format for using SType Skills.
 *   - %1 - Needed, %2 - Progress, %3 - Type Text
 * 
 *   Deal Element DMG:
 *   - Text format used for inflicting element damage.
 *   - %1 - Needed, %2 - Progress, %3 - Element
 * 
 *     Take Element DMG:
 *     - Text format used for receiving element damage.
 *     - %1 - Needed, %2 - Progress, %3 - Element
 * 
 *   Deal State:
 *   - Text format used for inflicting states.
 *   - %1 - Needed, %2 - Progress, %3 - State
 * 
 *     Take State:
 *     - Text format used for receiving states.
 *     - %1 - Needed, %2 - Progress, %3 - State
 * 
 *   Trait Slayer:
 *   - Text format for slaying trait types.
 *   - %1 - Needed, %2 - Progress, %3 - Type Text
 * 
 *   Total Damage Dealt:
 *   - Text format for total damage dealt.
 *   - %1 - Needed, %2 - Progress
 * 
 *     Total Damage Taken:
 *     - Text format for total damage received.
 *     - %1 - Needed, %2 - Progress
 * 
 *   Total Healing Dealt:
 *   - Text format for total healing given.
 *   - %1 - Needed, %2 - Progress
 * 
 *     Total Healing Taken:
 *     - Text format for total healing taken.
 *     - %1 - Needed, %2 - Progress
 * 
 *   Kills Format:
 *   - Text format for kills performed.
 *   - %1 - Needed, %2 - Progress
 * 
 *     Deaths Format:
 *     - Text format for deaths in battle.
 *     - %1 - Needed, %2 - Progress
 * 
 *   Assists Format:
 *     - Text format for assists made.
 *     - %1 - Needed, %2 - Progress
 * 
 *   Reach Gold Total:
 *   - Text format for reaching gold quantity.
 *   - %1 - Needed, %2 - Progress, %3 - Gold
 * 
 *     Reach Item Total:
 *     - Text format for reaching item quantity.
 *     - %1 - Needed, %2 - Progress, %3 - Item
 * 
 *     Reach Weapon Total:
 *     - Text format for reaching weapon quantity.
 *     - %1 - Needed, %2 - Progress, %3 - Weapon
 * 
 *     Reach Armor Total:
 *     - Text format for reaching armor quantity.
 *     - %1 - Needed, %2 - Progress, %3 - Armor
 * 
 *   Reach Base Param:
 *   - Text format for reaching base Param amount.
 *   - %1 - Needed, %2 - Progress, %3 - Param Name
 * 
 *     Reach XParam Amount:
 *     - Text format for reaching X Param amount.
 *     - %1 - Needed, %2 - Progress, %3 - XParam Name
 * 
 *     Reach SParam Amount:
 *     - Text format for reaching S Param amount.
 *     - %1 - Needed, %2 - Progress, %3 - SParam Name
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
 * Equip Passive List:
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Equipped Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Show Capacity Costs?:
 *   - Shows capacity costs on Passives?
 * 
 *     Show 0 Costs?:
 *     - Shows capacity costs if they cost 0?
 * 
 *     Show 1 Costs?:
 *     - Shows capacity costs if they only cost 1?
 * 
 *     Show Cost Numbers?:
 *     - Shows capacity cost values?
 *     - If not, displays multiple icons instead.
 * 
 *       Cost Icon Limit:
 *       - If "Show Cost Numbers" is false, this is how many icons can be
 *         displayed max before showing number costs.
 * 
 *   Sort Style:
 *   - How do you wish to sort passives by?
 * 
 *   Show Unlearned?:
 *   - Shows unlearned passives in the list window?
 * 
 *     Separate Unlearned?:
 *     - Separate unlearned passives from learned passives?
 * 
 *     Mask Unlearned?:
 *     - Masks unlearned passives in list window?
 * 
 *       Mask Icon:
 *       - What is the icon used for masked passives?
 * 
 *       Mask Character:
 *       - Text used for masking per individual character.
 * 
 *       Italics?:
 *     - Use italics for masked names?
 * 
 * ---
 * 
 * Passive Status Window:
 * 
 *   Show Window?:
 *   - Shows this window in the scene?
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Max Capacity Color:
 *   - Use text colors from the Window Skin only.
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
 * Version 1.03: June 13, 2024
 * * Bug Fixes!
 * ** Fixed a crash made by having link learned skills available to level 1
 *    skills upon initializing. Fix made by Olivia.
 * * Compatibility Update!
 * ** Added compatibility with new Skills and States Core features!
 * 
 * Version 1.02: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash with the help description of a
 *    passive state not having anything to show. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Irina from other plugins:
 * *** <Help Description>
 * **** Assigns a help description for the passive state.
 * **** This is so you don't need other unrelated plugins to add a help
 *      description for your psasive states.
 * 
 * Version 1.01: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash if the passive state did not have a
 *    help description. Fix made by Arisu.
 * ** Fixed a bug where elemental damage, states, and stypes, taken and dealt
 *    was not making progress for learning new medals. Fix by Arisu.
 * * Feature Update!
 * ** If a passive becomes hidden, it is no longer considered equipped.
 * ** Inflict and Receive State effects no longer require the target to be
 *    unaffilicted by the state before to count.
 * 
 * Version 1.00 Official Release Date: March 25, 2024
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
 * @command ActorLearnPassive
 * @text Actor: Learn Equippable Passive
 * @desc Target actor(s) learns equippable passive state(s).
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg StateIDs:arraynum
 * @text Passive State ID(s)
 * @type state[]
 * @desc Select which State ID(s) to add as an equippable passive state.
 * @default []
 *
 * @arg ShowTextPopup:eval
 * @text Show Text Popup?
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Shows text popup of actor(s) learning the passive state?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorForgetPassive
 * @text Actor: Forget Equippable Passive
 * @desc Target actor(s) forgets equippable passive state(s).
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg StateIDs:arraynum
 * @text Passive State ID(s)
 * @type state[]
 * @desc Select which State ID(s) to forget as an equippable passive state.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorAddUnlearnedPassive
 * @text Actor: Add Unlearned Equippable Passive
 * @desc Gives target actor(s) the ability to learn target passive state(s).
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg StateIDs:arraynum
 * @text Passive State ID(s)
 * @type state[]
 * @desc Select which State ID(s) to add as an unlearned equippable passive state.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorRemoveUnlearnedPassive
 * @text Actor: Remove Unlearned Equippable Passive
 * @desc Removes target actor(s) the ability to learn target passive state(s).
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg StateIDs:arraynum
 * @text Passive State ID(s)
 * @type state[]
 * @desc Select which State ID(s) to remove unlearned equippable passive state.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_G
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GlobalLearnPassive
 * @text Global: Learn Equippable Passive
 * @desc All actors learn equippable passive state(s).
 *
 * @arg StateIDs:arraynum
 * @text Passive State ID(s)
 * @type state[]
 * @desc Select which State ID(s) to add as an equippable passive state.
 * @default []
 *
 * @arg ShowTextPopup:eval
 * @text Show Text Popup?
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Shows text popup of party learning the passive state?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GlobalForgetPassive
 * @text Global: Forget Equippable Passive
 * @desc All actors forget equippable passive state(s).
 *
 * @arg StateIDs:arraynum
 * @text Passive State ID(s)
 * @type state[]
 * @desc Select which State ID(s) to forget as an equippable passive state.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GlobalAddUnlearnedPassive
 * @text Global: Add Unlearned Equippable Passive
 * @desc Gives all actors the ability to learn target passive state(s).
 *
 * @arg StateIDs:arraynum
 * @text Passive State ID(s)
 * @type state[]
 * @desc Select which State ID(s) to add as an unlearned equippable passive state.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GlobalRemoveUnlearnedPassive
 * @text Global: Remove Unlearned Equippable Passive
 * @desc Removes from all actors the ability to learn target passive state(s).
 *
 * @arg StateIDs:arraynum
 * @text Passive State ID(s)
 * @type state[]
 * @desc Select which State ID(s) to remove unlearned equippable passive state.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_S
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowPassiveCommand
 * @text System: Show Passives in Skill Scene?
 * @desc Shows/hides Passives command inside the skill scene.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Passives command inside the skill scene.
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
 * @param EquipPassiveSys
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
 * @desc General settings for the Equip Passive System.
 * @default {"General":"","DefaultShowCommand:eval":"true","LearnAutoEquip:eval":"true","LearnPopup:eval":"true","TextPopupFmt:str":"%1 has learned %3%2!","CheckOverCapacity:eval":"true","Capacity":"","CapacityFormula:str":"Math.ceil(user.level / 5) * 5","DefaultCost:num":"1","MinimumCost:num":"1","MaximumCost:num":"100"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"Scene":"","CommandName:str":"Passives","CommandIcon:num":"309","CapacityText:str":"Passive Capacity","CapacityIcon:num":"309","CapacityFmt:str":"%1/%2%3","CostFmt:str":"%1%2","Unlearned:str":"\\}Unlearned\\{","ShopStatus":"","ShopStatusText:str":"Passive Effect","HelpWindow":"","HelpFmt:str":"\\C[16]Learn Conditions:\\C[0] %1","helpWordWrap:eval":"true","helpSpacing:eval":"true","helpSpacer:str":",","helpNothing:str":"-","ConditionText":"","helpMeetConditionColor:num":"24","progressFmt:str":"(Progress %1)","progressFraction:str":"%1/%2","progressPercent:str":"%1%","progressLengthLimit:num":"7","progressComplete:str":"\\I[87]","level:str":"Reach Level %1 %2","battle:str":"Fight %1 Battles %2","victory:str":"Win %1 Battles %2","escapes:str":"Escape %1 Battles %2","defeat:str":"Lose %1 Battles %2","attackTimes:str":"Attack %1 Times %2","guardTimes:str":"Guard %1 Times %2","skillUse:str":"Use %1 Skills %2","physSkillUse:str":"Use %1 Physical Skills %2","magSkillUse:str":"Use %1 Magical Skills %2","certSkillUse:str":"Use %1 Certain Hit Skills %2","itemUse:str":"Use %1 Items %2","critDeal:str":"Deal %1 Critical Hits %2","critTake:str":"Take %1 Critical Hits %2","miss:str":"Miss %1 Times %2","evade:str":"Evade %1 Times %2","stypeUse:str":"Use %1 %3 Skills %2","elementDeal:str":"Inflict %3 Damage %1 Times %2","elementTake:str":"Receive %3 Damage %1 Times %2","stateDeal:str":"Inflict %3 %1 Times %2","stateTake:str":"Receive %3 %1 Times %2","traitSlayer:str":"Defeat %1 %3 Enemies %2","totalDmgDeal:str":"Inflict %1 Total Battle Damage %2","totalDmgTake:str":"Receive %1 Total Battle Damage %2","totalHealDeal:str":"Perform %1 Total Battle Healing %2","totalHealTake:str":"Receive %1 Total Battle Healing %2","kills:str":"Kill %1 Enemies %2","deaths:str":"Die %1 Times %2","assists:str":"Assist %1 Times %2","haveGold:str":"Possess ×%1%3 %2","haveItem:str":"Possess %3 ×%1 %2","haveWeapon:str":"Possess %3 ×%1 %2","haveArmor:str":"Possess %3 ×%1 %2","haveParam:str":"Reach %1 %3 %2","haveXParam:str":"Reach %1% %3 %2","haveSParam:str":"Reach %1% %3 %2"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"Window_EquipPassiveList":"","EquipPassiveList_BgType:num":"0","EquippedColor:str":"17","ShowCosts:eval":"true","ShowCost0:eval":"false","ShowCost1:eval":"true","ShowCostNumber:eval":"true","costIconLimit:num":"3","SortStyle:str":"id","ShowUnlearned:eval":"true","SeparateUnlearned:eval":"true","MaskUnlearned:eval":"true","MaskIcon:num":"307","MaskLetter:str":"?","MaskItalics:eval":"true","Window_EquipPassiveStatus":"","showStatusWindow:eval":"true","StatusWindow_BgType:num":"0","MaxCapacityColor:num":"17"}
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
 * @text General Settings
 *
 * @param DefaultShowCommand:eval
 * @text Default Show Command
 * @parent General
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Shows Passive Command by default?
 * @default true
 *
 * @param LearnAutoEquip:eval
 * @text Auto-Equip on Learn
 * @parent General
 * @type boolean
 * @on Auto-Equip
 * @off Don't Equip
 * @desc Automatically equips newly learned Passives.
 * @default true
 *
 * @param LearnPopup:eval
 * @text Text Popup on Learn
 * @parent General
 * @type boolean
 * @on Show Popup
 * @off Don't Show
 * @desc Produce a text popup when a Passive is learned?
 * @default true
 *
 * @param TextPopupFmt:str
 * @text Text Popup Format
 * @parent LearnPopup:eval
 * @desc Text format used for text popup.
 * %1 - Actor, %2 - Passive, %3 - Icon
 * @default %1 has learned %3%2!
 *
 * @param Capacity
 * @text Capacity Settings
 *
 * @param CapacityFormula:str
 * @text Capacity Formula
 * @parent Capacity
 * @desc What is the formula used to determine current max capacity?
 * @default Math.ceil(user.level / 5) * 5
 *
 * @param DefaultCost:num
 * @text Default Capacity Cost
 * @parent Capacity
 * @desc What is the default capacity cost of equipping a Passive?
 * @default 1
 *
 * @param MinimumCost:num
 * @text Minimum Capacity Cap
 * @parent Capacity
 * @type number
 * @min 1
 * @desc What is the minimum capacity value?
 * @default 1
 *
 * @param MaximumCost:num
 * @text Maximum Capacity Cap
 * @parent Capacity
 * @type number
 * @min 1
 * @desc What is the maximum capacity value?
 * @default 100
 *
 * @param CheckOverCapacity:eval
 * @text Check Over-Capacity
 * @parent Capacity
 * @type boolean
 * @on Check
 * @off Don't
 * @desc Checks over-capacity when EXP changes.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param Scene
 * @text Scene_Skill
 *
 * @param CommandName:str
 * @text Command Name
 * @parent Scene
 * @desc Text used for the Passives Command.
 * @default Passives
 *
 * @param CommandIcon:num
 * @text Command Icon
 * @parent CommandName:str
 * @desc Icon used for the Passives command and for any
 * passives that are displayed without any icon.
 * @default 309
 *
 * @param CapacityText:str
 * @text Capacity Text
 * @parent Scene
 * @desc Text used for Passives Capacity.
 * @default Passive Capacity
 *
 * @param CapacityIcon:num
 * @text Capacity Icon
 * @parent CapacityText:str
 * @desc Icon used to represent Passives Capacity when
 * displayed as a limited resource.
 * @default 309
 *
 * @param CapacityFmt:str
 * @text Capacity Format
 * @parent CapacityText:str
 * @desc Text format used to representing Capacity.
 * %1 - Current, %2 - Max, %3 - Icon
 * @default %1/%2%3
 *
 * @param CostFmt:str
 * @text Cost Format
 * @parent Scene
 * @desc Text format used for Capacity Cost.
 * %1 - Cost, %2 - Icon
 * @default %1%2
 *
 * @param Unlearned:str
 * @text Unlearned Text
 * @parent CostFmt:str
 * @desc Text displayed instead of cost for unlearned Passives.
 * @default \}Unlearned\{
 *
 * @param ShopStatus
 * @text Shop Status Window
 *
 * @param ShopStatusText:str
 * @text Shop Status Text
 * @parent ShopStatus
 * @desc Text used to representing Passives in shop status.
 * Requires VisuMZ_1_ItemsEquipsCore!
 * @default Passive Effect
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpFmt:str
 * @text Description Format
 * @parent HelpWindow
 * @desc Text format used to create help descriptions.
 * %1 - Unlocking Conditions
 * @default \C[16]Learn Conditions:\C[0] %1
 *
 * @param helpWordWrap:eval
 * @text Word Wrap?
 * @parent HelpWindow
 * @type boolean
 * @on Wordwrap
 * @off Normal
 * @desc Apply word wrap to unlock conditions?
 * Requires VisuMZ_1_MessageCore!
 * @default true
 *
 * @param helpSpacing:eval
 * @text Spacing?
 * @parent HelpWindow
 * @type boolean
 * @on Add Spacing
 * @off Don't Add
 * @desc Add spacing between conditions?
 * @default true
 *
 * @param helpSpacer:str
 * @text Spacer
 * @parent HelpWindow
 * @desc Text inserted between conditions.
 * @default ,
 *
 * @param helpNothing:str
 * @text Empty Descriptions
 * @parent HelpWindow
 * @desc Text used when no condition text is made.
 * @default -
 *
 * @param ConditionText
 * @text Unlock Condition Text
 *
 * @param helpMeetConditionColor:num
 * @text Condition Met Color
 * @parent ConditionText
 * @type number
 * @min 0
 * @desc Use text colors from the Window Skin only.
 * @default 24
 * 
 * @param progressFmt:str
 * @text Progress Format
 * @parent ConditionText
 * @desc Text format used to indicate progress amount.
 * %1 - Progress Text
 * @default (Progress %1)
 * 
 * @param progressFraction:str
 * @text Fraction Format
 * @parent progressFmt:str
 * @desc Text format used for progress fraction.
 * %1 - Current, %2 - Goal
 * @default %1/%2
 * 
 * @param progressPercent:str
 * @text Percent Format
 * @parent progressFmt:str
 * @desc Text format used for percentile value.
 * %1 - Percent
 * @default %1%
 * 
 * @param progressLengthLimit:num
 * @text Length Limit
 * @parent progressFmt:str
 * @type number
 * @min 1
 * @desc What is the character limit before a percentage is
 * used instead fractions for progress text?
 * @default 7
 * 
 * @param progressComplete:str
 * @text Complete
 * @parent progressFmt:str
 * @desc Progress text used when unlock condition is fulfilled.
 * @default \I[87]
 * 
 * @param level:str
 * @text Level Format
 * @parent ConditionText
 * @desc Text format used for level conditions.
 * %1 - Level, %2 - Progress
 * @default Reach Level %1 %2
 * 
 * @param battle:str
 * @text Battle Format
 * @parent ConditionText
 * @desc Text format used for fought battles.
 * %1 - Needed, %2 - Progress
 * @default Fight %1 Battles %2
 * 
 * @param victory:str
 * @text Victory Format
 * @parent battle:str
 * @desc Text format used for victorious battles.
 * %1 - Needed, %2 - Progress
 * @default Win %1 Battles %2
 * 
 * @param escapes:str
 * @text Escape Format
 * @parent battle:str
 * @desc Text format used for escaped battles.
 * %1 - Needed, %2 - Progress
 * @default Escape %1 Battles %2
 * 
 * @param defeat:str
 * @text Defeat Format
 * @parent battle:str
 * @desc Text format used for lost battles.
 * %1 - Needed, %2 - Progress
 * @default Lose %1 Battles %2
 * 
 * @param attackTimes:str
 * @text Attack Format
 * @parent ConditionText
 * @desc Text format used for attack times.
 * %1 - Needed, %2 - Progress
 * @default Attack %1 Times %2
 * 
 * @param guardTimes:str
 * @text Guard Format
 * @parent attackTimes:str
 * @desc Text format used for guard times.
 * %1 - Needed, %2 - Progress
 * @default Guard %1 Times %2
 * 
 * @param skillUse:str
 * @text Skill Format
 * @parent ConditionText
 * @desc Text format used for skill times.
 * %1 - Needed, %2 - Progress
 * @default Use %1 Skills %2
 * 
 * @param physSkillUse:str
 * @text Physical Skills
 * @parent attackTimes:str
 * @desc Text format used for physical skills.
 * %1 - Needed, %2 - Progress
 * @default Use %1 Physical Skills %2
 * 
 * @param magSkillUse:str
 * @text Magical Skills
 * @parent attackTimes:str
 * @desc Text format used for magical skills.
 * %1 - Needed, %2 - Progress
 * @default Use %1 Magical Skills %2
 * 
 * @param certSkillUse:str
 * @text Certain Hit Skills
 * @parent attackTimes:str
 * @desc Text format used for certain hit skills.
 * %1 - Needed, %2 - Progress
 * @default Use %1 Certain Hit Skills %2
 * 
 * @param itemUse:str
 * @text Item Format
 * @parent ConditionText
 * @desc Text format used for item uses.
 * %1 - Needed, %2 - Progress
 * @default Use %1 Items %2
 * 
 * @param critDeal:str
 * @text Deal Criticals
 * @parent ConditionText
 * @desc Text format used for dealing criticals.
 * %1 - Needed, %2 - Progress
 * @default Deal %1 Critical Hits %2
 * 
 * @param critTake:str
 * @text Take Criticals
 * @parent critDeal:str
 * @desc Text format used for taking criticals
 * %1 - Needed, %2 - Progress
 * @default Take %1 Critical Hits %2
 * 
 * @param miss:str
 * @text Miss Format
 * @parent ConditionText
 * @desc Text format for missing attacks.
 * %1 - Needed, %2 - Progress
 * @default Miss %1 Times %2
 * 
 * @param evade:str
 * @text Evade Format
 * @parent miss:str
 * @desc Text format for evading attacks.
 * %1 - Needed, %2 - Progress
 * @default Evade %1 Times %2
 * 
 * @param stypeUse:str
 * @text SType Use
 * @parent ConditionText
 * @desc Text format for using SType Skills.
 * %1 - Needed, %2 - Progress, %3 - Type Text
 * @default Use %1 %3 Skills %2
 * 
 * @param elementDeal:str
 * @text Deal Element DMG
 * @parent ConditionText
 * @desc Text format used for inflicting element damage.
 * %1 - Needed, %2 - Progress, %3 - Element
 * @default Inflict %3 Damage %1 Times %2
 * 
 * @param elementTake:str
 * @text Take Element DMG
 * @parent elementDeal:str
 * @desc Text format used for receiving element damage.
 * %1 - Needed, %2 - Progress, %3 - Element
 * @default Receive %3 Damage %1 Times %2
 * 
 * @param stateDeal:str
 * @text Deal State
 * @parent ConditionText
 * @desc Text format used for inflicting states.
 * %1 - Needed, %2 - Progress, %3 - State
 * @default Inflict %3 %1 Times %2
 * 
 * @param stateTake:str
 * @text Take State
 * @parent stateDeal:str
 * @desc Text format used for receiving states
 * %1 - Needed, %2 - Progress, %3 - State
 * @default Receive %3 %1 Times %2
 * 
 * @param traitSlayer:str
 * @text Trait Slayer
 * @parent ConditionText
 * @desc Text format for slaying trait types.
 * %1 - Needed, %2 - Progress, %3 - Type Text
 * @default Defeat %1 %3 Enemies %2
 * 
 * @param totalDmgDeal:str
 * @text Total Damage Dealt
 * @parent ConditionText
 * @desc Text format for total damage dealt.
 * %1 - Needed, %2 - Progress
 * @default Inflict %1 Total Battle Damage %2
 * 
 * @param totalDmgTake:str
 * @text Total Damage Taken
 * @parent totalDmgDeal:str
 * @desc Text format for total damage received.
 * %1 - Needed, %2 - Progress
 * @default Receive %1 Total Battle Damage %2
 * 
 * @param totalHealDeal:str
 * @text Total Healing Dealt
 * @parent ConditionText
 * @desc Text format for total healing given.
 * %1 - Needed, %2 - Progress
 * @default Perform %1 Total Battle Healing %2
 * 
 * @param totalHealTake:str
 * @text Total Healing Taken
 * @parent totalHealDeal:str
 * @desc Text format for total healing taken.
 * %1 - Needed, %2 - Progress
 * @default Receive %1 Total Battle Healing %2
 * 
 * @param kills:str
 * @text Kills Format
 * @parent ConditionText
 * @desc Text format for kills performed.
 * %1 - Needed, %2 - Progress
 * @default Kill %1 Enemies %2
 * 
 * @param deaths:str
 * @text Deaths Format
 * @parent kills:str
 * @desc Text format for deaths in battle.
 * %1 - Needed, %2 - Progress
 * @default Die %1 Times %2
 * 
 * @param assists:str
 * @text Assists Format
 * @parent kills:str
 * @desc Text format for assists made.
 * %1 - Needed, %2 - Progress
 * @default Assist %1 Times %2
 * 
 * @param haveGold:str
 * @text Reach Gold Total
 * @parent ConditionText
 * @desc Text format for reaching gold quantity.
 * %1 - Needed, %2 - Progress, %3 - Gold
 * @default Possess ×%1%3 %2
 * 
 * @param haveItem:str
 * @text Reach Item Total
 * @parent haveGold:str
 * @desc Text format for reaching item quantity.
 * %1 - Needed, %2 - Progress, %3 - Item
 * @default Possess %3 ×%1 %2
 * 
 * @param haveWeapon:str
 * @text Reach Weapon Total
 * @parent haveGold:str
 * @desc Text format for reaching weapon quantity.
 * %1 - Needed, %2 - Progress, %3 - Weapon
 * @default Possess %3 ×%1 %2
 * 
 * @param haveArmor:str
 * @text Reach Armor Total
 * @parent haveGold:str
 * @desc Text format for reaching armor quantity.
 * %1 - Needed, %2 - Progress, %3 - Armor
 * @default Possess %3 ×%1 %2
 * 
 * @param haveParam:str
 * @text Reach Base Param
 * @parent ConditionText
 * @desc Text format for reaching base Param amount.
 * %1 - Needed, %2 - Progress, %3 - Param Name
 * @default Reach %1 %3 %2
 * 
 * @param haveXParam:str
 * @text Reach XParam Amount
 * @parent haveParam:str
 * @desc Text format for reaching X Param amount.
 * %1 - Needed, %2 - Progress, %3 - XParam Name
 * @default Reach %1% %3 %2
 * 
 * @param haveSParam:str
 * @text Reach SParam Amount
 * @parent haveParam:str
 * @desc Text format for reaching S Param amount.
 * %1 - Needed, %2 - Progress, %3 - SParam Name
 * @default Reach %1% %3 %2
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Window_EquipPassiveList
 * @text Equip Passive List
 *
 * @param EquipPassiveList_BgType:num
 * @text Background Type
 * @parent Window_EquipPassiveList
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
 * @param EquippedColor:str
 * @text Equipped Color
 * @parent Window_EquipPassiveList
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param ShowCosts:eval
 * @text Show Capacity Costs?
 * @parent Window_EquipPassiveList
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Shows capacity costs on Passives?
 * @default true
 *
 * @param ShowCost0:eval
 * @text Show 0 Costs?
 * @parent ShowCosts:eval
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Shows capacity costs if they cost 0?
 * @default false
 *
 * @param ShowCost1:eval
 * @text Show 1 Costs?
 * @parent ShowCosts:eval
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Shows capacity costs if they only cost 1?
 * @default true
 *
 * @param ShowCostNumber:eval
 * @text Show Cost Numbers?
 * @parent ShowCosts:eval
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Shows capacity cost values?
 * If not, displays multiple icons instead.
 * @default true
 *
 * @param costIconLimit:num
 * @text Cost Icon Limit
 * @parent ShowCostNumber:eval
 * @desc If "Show Cost Numbers" is false, this is how many icons
 * can be displayed max before showing number costs.
 * @default 3
 *
 * @param SortStyle:str
 * @text Sort Style
 * @parent Window_EquipPassiveList
 * @type select
 * @option ID - Sort by State ID
 * @value id
 * @option Name - Sort by State Name
 * @value name
 * @option Priority - Sort by State Priority
 * @value priority
 * @desc How do you wish to sort passives by?
 * @default id
 *
 * @param ShowUnlearned:eval
 * @text Show Unlearned?
 * @parent Window_EquipPassiveList
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Shows unlearned passives in the list window?
 * @default true
 *
 * @param SeparateUnlearned:eval
 * @text Separate Unlearned?
 * @parent ShowUnlearned:eval
 * @type boolean
 * @on Separate
 * @off Don't
 * @desc Separate unlearned passives from learned passives?
 * @default true
 *
 * @param MaskUnlearned:eval
 * @text Mask Unlearned?
 * @parent ShowUnlearned:eval
 * @type boolean
 * @on Mask
 * @off Don't
 * @desc Masks unlearned passives in list window?
 * @default true
 *
 * @param MaskIcon:num
 * @text Mask Icon
 * @parent MaskUnlearned:eval
 * @desc What is the icon used for masked passives?
 * @default 307
 *
 * @param MaskLetter:str
 * @text Mask Character
 * @parent MaskUnlearned:eval
 * @desc Text used for masking per individual character.
 * @default ?
 *
 * @param MaskItalics:eval
 * @text Italics?
 * @parent MaskUnlearned:eval
 * @type boolean
 * @on Italics
 * @off Normal
 * @desc Use italics for masked names?
 * @default true
 *
 * @param Window_EquipPassiveStatus
 * @text Passive Status Window
 *
 * @param showStatusWindow:eval
 * @text Show Window?
 * @parent Window_EquipPassiveStatus
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Shows this window in the scene?
 * @default true
 *
 * @param StatusWindow_BgType:num
 * @text Background Type
 * @parent Window_EquipPassiveStatus
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
 * @param MaxCapacityColor:num
 * @text Max Capacity Color
 * @parent Window_EquipPassiveStatus
 * @type number
 * @min 0
 * @desc Use text colors from the Window Skin only.
 * @default 17
 *
 */
//=============================================================================

const _0x864467=_0x5ef6;(function(_0x5947e6,_0x4197e2){const _0x2c4253=_0x5ef6,_0x2480db=_0x5947e6();while(!![]){try{const _0x3a667f=parseInt(_0x2c4253(0x245))/(0x358*-0x6+0x3*-0x9a2+0x1*0x30f7)+-parseInt(_0x2c4253(0x340))/(-0x1efe+0xfcb+0xf35)+parseInt(_0x2c4253(0x4b2))/(0x2f2*-0x2+-0x4*0x2d2+0x112f)+-parseInt(_0x2c4253(0x3f9))/(-0x224*0x4+0x131b*-0x1+0x1baf)*(parseInt(_0x2c4253(0x27c))/(0x3d*0x40+0x2*0x392+-0x165f))+parseInt(_0x2c4253(0x246))/(0x1a61+-0x5f*0x7+0x2*-0xbe1)*(-parseInt(_0x2c4253(0x624))/(0x2254+0x7e+-0x22cb))+-parseInt(_0x2c4253(0x235))/(0xa85*-0x3+0xa82+0x1515)*(parseInt(_0x2c4253(0x3d2))/(0x2*0x52f+0x20*-0x52+-0x1*0x15))+-parseInt(_0x2c4253(0x403))/(-0x18c3+0x85*0x34+-0x3*0xbd)*(parseInt(_0x2c4253(0x303))/(-0x98b*-0x4+-0x1cdf+-0x942));if(_0x3a667f===_0x4197e2)break;else _0x2480db['push'](_0x2480db['shift']());}catch(_0x4cee45){_0x2480db['push'](_0x2480db['shift']());}}}(_0x5696,0x3*-0x33f20+0x1*-0x82263+0x190494));var label=_0x864467(0x1d0)+_0x864467(0x479),tier=tier||-0x198*-0x3+-0x1233+0xd6b,dependencies=[_0x864467(0x2a4)+_0x864467(0x5ed),_0x864467(0x63f)+'killsState'+_0x864467(0x456)],pluginData=$plugins[_0x864467(0x402)](function(_0x14eb43){const _0x471c54=_0x864467,_0x26188b={'moHPo':function(_0x165314,_0x1863b3){return _0x165314+_0x1863b3;}};return _0x14eb43['status']&&_0x14eb43[_0x471c54(0x6b0)+'n'][_0x471c54(0x551)](_0x26188b[_0x471c54(0x2d2)](_0x26188b[_0x471c54(0x2d2)]('[',label),']'));})[-0x422+0x248c+0x206a*-0x1];VisuMZ[label][_0x864467(0x4a8)]=VisuMZ[label][_0x864467(0x4a8)]||{},VisuMZ['ConvertPar'+'ams']=function(_0x4ac5d1,_0x1adc00){const _0x33b0e2=_0x864467,_0xcba960={'zRzby':function(_0x253ad5,_0x4385b7){return _0x253ad5(_0x4385b7);},'SaVUZ':function(_0x2e08a0,_0x3d96b5){return _0x2e08a0(_0x3d96b5);},'hmjMM':_0x33b0e2(0x3a8),'CGCZw':function(_0x394b23,_0x3b0b9c){return _0x394b23!==_0x3b0b9c;},'ZxWul':function(_0x517aa3,_0x3199b8){return _0x517aa3(_0x3199b8);},'DiEsn':'ARRAYNUM','MrnUe':_0x33b0e2(0x31f),'trRAV':function(_0x21bcc4,_0xe77de){return _0x21bcc4(_0xe77de);},'UJWiP':_0x33b0e2(0x5b5),'aGRrU':function(_0x312dc9,_0x523184){return _0x312dc9!==_0x523184;},'BHrSt':_0x33b0e2(0x65a),'uBDjj':_0x33b0e2(0x32e),'jlQNS':'FUNC','TShgB':_0x33b0e2(0x5a6),'znBlf':_0x33b0e2(0x563),'iJJEY':_0x33b0e2(0x504),'vscBW':function(_0x55987e,_0x5ae8bb){return _0x55987e(_0x5ae8bb);},'HJLWU':'ARRAYSTR','KDcml':function(_0x3bad5f,_0xc42b57){return _0x3bad5f!==_0xc42b57;},'EJkEx':_0x33b0e2(0x65c),'AUNts':_0x33b0e2(0x358)+'T','NYmzB':function(_0x36c43e,_0x6e54d9){return _0x36c43e!==_0x6e54d9;}};for(const _0x2e5d94 in _0x1adc00){if(_0x2e5d94['match'](/(.*):(.*)/i)){const _0x1b73f9=_0xcba960['zRzby'](String,RegExp['$1']),_0x9c4e01=_0xcba960['SaVUZ'](String,RegExp['$2'])[_0x33b0e2(0x5c8)+'e']()['trim']();let _0x45e620,_0x338e92,_0x4e381e;switch(_0x9c4e01){case _0xcba960[_0x33b0e2(0x4f2)]:_0x45e620=_0xcba960[_0x33b0e2(0x2ff)](_0x1adc00[_0x2e5d94],'')?_0xcba960[_0x33b0e2(0x324)](Number,_0x1adc00[_0x2e5d94]):0xa*-0x38b+0x3*-0x991+-0x1*-0x4021;break;case _0xcba960[_0x33b0e2(0x658)]:_0x338e92=_0xcba960[_0x33b0e2(0x2ff)](_0x1adc00[_0x2e5d94],'')?JSON[_0x33b0e2(0x5aa)](_0x1adc00[_0x2e5d94]):[],_0x45e620=_0x338e92[_0x33b0e2(0x327)](_0x502561=>Number(_0x502561));break;case _0xcba960[_0x33b0e2(0x47c)]:_0x45e620=_0xcba960[_0x33b0e2(0x2ff)](_0x1adc00[_0x2e5d94],'')?_0xcba960['trRAV'](eval,_0x1adc00[_0x2e5d94]):null;break;case _0xcba960[_0x33b0e2(0x4b8)]:_0x338e92=_0xcba960[_0x33b0e2(0x679)](_0x1adc00[_0x2e5d94],'')?JSON['parse'](_0x1adc00[_0x2e5d94]):[],_0x45e620=_0x338e92[_0x33b0e2(0x327)](_0x2e22f3=>eval(_0x2e22f3));break;case _0xcba960[_0x33b0e2(0x2fa)]:_0x45e620=_0xcba960['aGRrU'](_0x1adc00[_0x2e5d94],'')?JSON[_0x33b0e2(0x5aa)](_0x1adc00[_0x2e5d94]):'';break;case _0xcba960[_0x33b0e2(0x37e)]:_0x338e92=_0xcba960[_0x33b0e2(0x679)](_0x1adc00[_0x2e5d94],'')?JSON['parse'](_0x1adc00[_0x2e5d94]):[],_0x45e620=_0x338e92[_0x33b0e2(0x327)](_0x505a8f=>JSON[_0x33b0e2(0x5aa)](_0x505a8f));break;case _0xcba960[_0x33b0e2(0x4f7)]:_0x45e620=_0xcba960['aGRrU'](_0x1adc00[_0x2e5d94],'')?new Function(JSON['parse'](_0x1adc00[_0x2e5d94])):new Function(_0xcba960[_0x33b0e2(0x593)]);break;case _0xcba960[_0x33b0e2(0x2a1)]:_0x338e92=_0xcba960[_0x33b0e2(0x2ff)](_0x1adc00[_0x2e5d94],'')?JSON[_0x33b0e2(0x5aa)](_0x1adc00[_0x2e5d94]):[],_0x45e620=_0x338e92['map'](_0x328b40=>new Function(JSON[_0x33b0e2(0x5aa)](_0x328b40)));break;case _0xcba960[_0x33b0e2(0x60b)]:_0x45e620=_0xcba960[_0x33b0e2(0x2ff)](_0x1adc00[_0x2e5d94],'')?_0xcba960[_0x33b0e2(0x439)](String,_0x1adc00[_0x2e5d94]):'';break;case _0xcba960['HJLWU']:_0x338e92=_0xcba960['KDcml'](_0x1adc00[_0x2e5d94],'')?JSON['parse'](_0x1adc00[_0x2e5d94]):[],_0x45e620=_0x338e92[_0x33b0e2(0x327)](_0x19c6f9=>String(_0x19c6f9));break;case _0xcba960['EJkEx']:_0x4e381e=_0xcba960[_0x33b0e2(0x443)](_0x1adc00[_0x2e5d94],'')?JSON[_0x33b0e2(0x5aa)](_0x1adc00[_0x2e5d94]):{},_0x45e620=VisuMZ[_0x33b0e2(0x398)+_0x33b0e2(0x4a5)]({},_0x4e381e);break;case _0xcba960[_0x33b0e2(0x363)]:_0x338e92=_0xcba960[_0x33b0e2(0x5fe)](_0x1adc00[_0x2e5d94],'')?JSON[_0x33b0e2(0x5aa)](_0x1adc00[_0x2e5d94]):[],_0x45e620=_0x338e92[_0x33b0e2(0x327)](_0x233d7c=>VisuMZ[_0x33b0e2(0x398)+_0x33b0e2(0x4a5)]({},JSON[_0x33b0e2(0x5aa)](_0x233d7c)));break;default:continue;}_0x4ac5d1[_0x1b73f9]=_0x45e620;}}return _0x4ac5d1;},(_0x4c0cd6=>{const _0x391c75=_0x864467,_0x42d3da={'ceCNk':function(_0x341299,_0x1b13c2){return _0x341299(_0x1b13c2);},'mGKsi':'%1\x20is\x20miss'+_0x391c75(0x452)+_0x391c75(0x322)+'n.\x0aPlease\x20'+'install\x20%2'+_0x391c75(0x556)+_0x391c75(0x502)+_0x391c75(0x30a),'rUpdY':function(_0xf9370,_0x47852b){return _0xf9370(_0x47852b);},'ZHMxH':function(_0x3707ef,_0x416526){return _0x3707ef!==_0x416526;},'IYeWZ':_0x391c75(0x608)+_0x391c75(0x599)+_0x391c75(0x240)+'ugin\x27s.\x20Pl'+_0x391c75(0x576)+_0x391c75(0x588)+_0x391c75(0x2e5)+_0x391c75(0x6b6),'OaBcE':function(_0x506444,_0x59ad7d){return _0x506444<_0x59ad7d;},'jzrYd':_0x391c75(0x2bd)+_0x391c75(0x4bc)+_0x391c75(0x43b)+_0x391c75(0x682)+'ist.\x0aIt\x20is'+_0x391c75(0x1ed)+_0x391c75(0x2d6)+_0x391c75(0x20a)+_0x391c75(0x53f)+_0x391c75(0x1c0)+_0x391c75(0x5e6)+'reorder\x20th'+_0x391c75(0x682)+_0x391c75(0x2fd)+_0x391c75(0x568)+_0x391c75(0x426)+_0x391c75(0x6ab)+'s.'},_0x36ede5=_0x4c0cd6[_0x391c75(0x572)];for(const _0x33222e of dependencies){if(!Imported[_0x33222e]){_0x42d3da[_0x391c75(0x384)](alert,_0x42d3da[_0x391c75(0x571)]['format'](_0x36ede5,_0x33222e)),SceneManager['exit']();break;}}const _0x313bfc=_0x4c0cd6[_0x391c75(0x6b0)+'n'];if(_0x313bfc['match'](/\[Version[ ](.*?)\]/i)){const _0x53d6f0=_0x42d3da[_0x391c75(0x52d)](Number,RegExp['$1']);_0x42d3da[_0x391c75(0x4a0)](_0x53d6f0,VisuMZ[label][_0x391c75(0x610)])&&(_0x42d3da[_0x391c75(0x52d)](alert,_0x42d3da[_0x391c75(0x5e8)][_0x391c75(0x4c1)](_0x36ede5,_0x53d6f0)),SceneManager['exit']());}if(_0x313bfc[_0x391c75(0x231)](/\[Tier[ ](\d+)\]/i)){const _0xd3d389=_0x42d3da[_0x391c75(0x384)](Number,RegExp['$1']);_0x42d3da[_0x391c75(0x416)](_0xd3d389,tier)?(_0x42d3da[_0x391c75(0x384)](alert,_0x42d3da[_0x391c75(0x438)][_0x391c75(0x4c1)](_0x36ede5,_0xd3d389,tier)),SceneManager[_0x391c75(0x555)]()):tier=Math[_0x391c75(0x1f9)](_0xd3d389,tier);}VisuMZ[_0x391c75(0x398)+_0x391c75(0x4a5)](VisuMZ[label][_0x391c75(0x4a8)],_0x4c0cd6['parameters']);})(pluginData);if(VisuMZ['CoreEngine'][_0x864467(0x610)]<-0x1729+-0x1d0d+-0x3437*-0x1+0.79){let text='';text+=_0x864467(0x2a4)+'oreEngine\x20'+_0x864467(0x601)+_0x864467(0x478),text+=_0x864467(0x4d1)+_0x864467(0x292)+_0x864467(0x5fb)+_0x864467(0x219)+_0x864467(0x33f),alert(text),SceneManager[_0x864467(0x555)]();}if(VisuMZ[_0x864467(0x4a3)+_0x864467(0x312)][_0x864467(0x610)]<0x16ff*-0x1+-0x1180+-0xd80*-0x3+0.43999999999999995){let text='';text+=_0x864467(0x63f)+'killsState'+_0x864467(0x531)+'s\x20to\x20be\x20up'+_0x864467(0x48d),text+=_0x864467(0x4d1)+_0x864467(0x292)+_0x864467(0x5fb)+_0x864467(0x219)+'\x20work.',alert(text),SceneManager[_0x864467(0x555)]();}PluginManager[_0x864467(0x20c)+_0x864467(0x249)](pluginData[_0x864467(0x572)],'ActorLearn'+_0x864467(0x341),_0x1658d1=>{const _0x17367b=_0x864467,_0x421ac6={'vedVk':function(_0x30ba5c,_0x449ffd){return _0x30ba5c===_0x449ffd;},'oxYyo':'-----'};VisuMZ[_0x17367b(0x398)+_0x17367b(0x4a5)](_0x1658d1,_0x1658d1);const _0x50e73b=_0x1658d1[_0x17367b(0x2a2)]||[],_0x4b5580=_0x1658d1['StateIDs']||[],_0x2d5832=!_0x1658d1['ShowTextPo'+'pup'];for(const _0x338b91 of _0x50e73b){const _0x5f4cef=$gameActors[_0x17367b(0x45a)](_0x338b91);if(!_0x5f4cef)continue;for(const _0x2a400b of _0x4b5580){const _0x25bf07=$dataStates[_0x2a400b];if(!_0x25bf07)continue;if(_0x421ac6[_0x17367b(0x5a8)](_0x25bf07[_0x17367b(0x572)]['trim'](),''))continue;if(_0x25bf07[_0x17367b(0x572)][_0x17367b(0x551)](_0x421ac6[_0x17367b(0x271)]))continue;_0x5f4cef[_0x17367b(0x3a9)+_0x17367b(0x294)](_0x25bf07,_0x2d5832);}}}),PluginManager[_0x864467(0x20c)+_0x864467(0x249)](pluginData['name'],_0x864467(0x5a4)+'tPassive',_0x5d1faf=>{const _0x54bbfa=_0x864467,_0x51ea28={'WxQOJ':function(_0x45416c,_0x27c067){return _0x45416c===_0x27c067;},'Fotda':_0x54bbfa(0x535)};VisuMZ[_0x54bbfa(0x398)+_0x54bbfa(0x4a5)](_0x5d1faf,_0x5d1faf);const _0x5e1f75=_0x5d1faf['ActorIDs']||[],_0x3784a3=_0x5d1faf[_0x54bbfa(0x233)]||[];for(const _0x1a0fa1 of _0x5e1f75){const _0x4d9d1b=$gameActors['actor'](_0x1a0fa1);if(!_0x4d9d1b)continue;for(const _0x33fa67 of _0x3784a3){const _0x2b8fee=$dataStates[_0x33fa67];if(!_0x2b8fee)continue;if(_0x51ea28[_0x54bbfa(0x58d)](_0x2b8fee[_0x54bbfa(0x572)]['trim'](),''))continue;if(_0x2b8fee[_0x54bbfa(0x572)][_0x54bbfa(0x551)](_0x51ea28[_0x54bbfa(0x57b)]))continue;_0x4d9d1b[_0x54bbfa(0x53d)+_0x54bbfa(0x62b)+'e'](_0x2b8fee);}}}),PluginManager[_0x864467(0x20c)+'mmand'](pluginData[_0x864467(0x572)],'ActorAddUn'+_0x864467(0x357)+'sive',_0x23f118=>{const _0x56ae1a=_0x864467,_0x513ab8={'zOrrv':function(_0x2a284c,_0x1ff9ea){return _0x2a284c===_0x1ff9ea;},'mytnG':_0x56ae1a(0x535)};VisuMZ[_0x56ae1a(0x398)+_0x56ae1a(0x4a5)](_0x23f118,_0x23f118);const _0x4d8849=_0x23f118['ActorIDs']||[],_0x25f497=_0x23f118[_0x56ae1a(0x233)]||[];for(const _0x545036 of _0x4d8849){const _0x59a6a5=$gameActors[_0x56ae1a(0x45a)](_0x545036);if(!_0x59a6a5)continue;for(const _0x11165d of _0x25f497){const _0x35577a=$dataStates[_0x11165d];if(!_0x35577a)continue;if(_0x513ab8[_0x56ae1a(0x447)](_0x35577a[_0x56ae1a(0x572)][_0x56ae1a(0x22f)](),''))continue;if(_0x35577a[_0x56ae1a(0x572)][_0x56ae1a(0x551)](_0x513ab8[_0x56ae1a(0x69e)]))continue;_0x59a6a5[_0x56ae1a(0x33a)+_0x56ae1a(0x528)+'lePassive'](_0x35577a);}}}),PluginManager[_0x864467(0x20c)+_0x864467(0x249)](pluginData[_0x864467(0x572)],_0x864467(0x587)+_0x864467(0x2bf)+_0x864467(0x341),_0xe29d20=>{const _0x51ce59=_0x864467,_0x55e8e4={'zbsrP':function(_0x309d6e,_0x322f7b){return _0x309d6e===_0x322f7b;},'KuNoS':'-----'};VisuMZ[_0x51ce59(0x398)+_0x51ce59(0x4a5)](_0xe29d20,_0xe29d20);const _0x22e727=_0xe29d20[_0x51ce59(0x2a2)]||[],_0x59e796=_0xe29d20['StateIDs']||[];for(const _0x507a3b of _0x22e727){const _0x46ee3c=$gameActors['actor'](_0x507a3b);if(!_0x46ee3c)continue;for(const _0x4f0a7c of _0x59e796){const _0x397614=$dataStates[_0x4f0a7c];if(!_0x397614)continue;if(_0x55e8e4[_0x51ce59(0x4d0)](_0x397614[_0x51ce59(0x572)][_0x51ce59(0x22f)](),''))continue;if(_0x397614[_0x51ce59(0x572)][_0x51ce59(0x551)](_0x55e8e4[_0x51ce59(0x5f1)]))continue;_0x46ee3c[_0x51ce59(0x38c)+_0x51ce59(0x629)+_0x51ce59(0x289)+'ve'](_0x397614);}}}),PluginManager[_0x864467(0x20c)+'mmand'](pluginData[_0x864467(0x572)],'GlobalLear'+_0x864467(0x2d3),_0x2a6f62=>{const _0x19ec3f=_0x864467,_0xc2ac8c={'TboVn':function(_0x574a0e,_0x197c30){return _0x574a0e===_0x197c30;},'iYSZb':_0x19ec3f(0x535)};VisuMZ[_0x19ec3f(0x398)+'ams'](_0x2a6f62,_0x2a6f62);const _0x5f1114=_0x2a6f62[_0x19ec3f(0x233)]||[],_0x4db7ca=!_0x2a6f62[_0x19ec3f(0x52c)+_0x19ec3f(0x521)];for(const _0x5992c5 of _0x5f1114){const _0x3363ac=$dataStates[_0x5992c5];if(!_0x3363ac)continue;if(_0xc2ac8c[_0x19ec3f(0x664)](_0x3363ac[_0x19ec3f(0x572)][_0x19ec3f(0x22f)](),''))continue;if(_0x3363ac[_0x19ec3f(0x572)]['includes'](_0xc2ac8c['iYSZb']))continue;$gameParty['learnEquip'+'pedPassive'](_0x3363ac,_0x4db7ca);}}),PluginManager[_0x864467(0x20c)+_0x864467(0x249)](pluginData[_0x864467(0x572)],_0x864467(0x5f9)+_0x864467(0x5b3),_0x450be4=>{const _0x107fcb=_0x864467,_0x3ee5dc={'ByEQX':function(_0x5095ee,_0x368143){return _0x5095ee===_0x368143;},'rwQwJ':_0x107fcb(0x535)};VisuMZ[_0x107fcb(0x398)+_0x107fcb(0x4a5)](_0x450be4,_0x450be4);const _0x4b1181=_0x450be4[_0x107fcb(0x233)]||[];for(const _0x35cc9c of _0x4b1181){const _0x337b33=$dataStates[_0x35cc9c];if(!_0x337b33)continue;if(_0x3ee5dc[_0x107fcb(0x1c1)](_0x337b33[_0x107fcb(0x572)][_0x107fcb(0x22f)](),''))continue;if(_0x337b33[_0x107fcb(0x572)]['includes'](_0x3ee5dc[_0x107fcb(0x489)]))continue;$gameParty['forgetEqui'+_0x107fcb(0x62b)+'e'](_0x337b33);}}),PluginManager[_0x864467(0x20c)+_0x864467(0x249)](pluginData[_0x864467(0x572)],_0x864467(0x334)+'nlearnedPa'+_0x864467(0x554),_0x242ea8=>{const _0x5adc52=_0x864467,_0x235c6c={'QenMX':function(_0x1f3c76,_0x3a2190){return _0x1f3c76===_0x3a2190;},'cCunI':_0x5adc52(0x535)};VisuMZ['ConvertPar'+'ams'](_0x242ea8,_0x242ea8);const _0x22ee7e=_0x242ea8[_0x5adc52(0x233)]||[];for(const _0x1574d9 of _0x22ee7e){const _0x10d705=$dataStates[_0x1574d9];if(!_0x10d705)continue;if(_0x235c6c['QenMX'](_0x10d705[_0x5adc52(0x572)][_0x5adc52(0x22f)](),''))continue;if(_0x10d705[_0x5adc52(0x572)][_0x5adc52(0x551)](_0x235c6c[_0x5adc52(0x1c5)]))continue;$gameParty[_0x5adc52(0x33a)+_0x5adc52(0x528)+_0x5adc52(0x27d)](_0x10d705);}}),PluginManager[_0x864467(0x20c)+'mmand'](pluginData[_0x864467(0x572)],_0x864467(0x397)+_0x864467(0x323)+'dPassive',_0x5d3336=>{const _0x4498cb=_0x864467,_0x414002={'vObUb':function(_0x358e17,_0x3f1c6d){return _0x358e17===_0x3f1c6d;},'hIWEv':_0x4498cb(0x535)};VisuMZ[_0x4498cb(0x398)+'ams'](_0x5d3336,_0x5d3336);const _0x2c39e0=_0x5d3336[_0x4498cb(0x233)]||[];for(const _0x1ae19c of _0x2c39e0){const _0x308f2f=$dataStates[_0x1ae19c];if(!_0x308f2f)continue;if(_0x414002[_0x4498cb(0x285)](_0x308f2f[_0x4498cb(0x572)]['trim'](),''))continue;if(_0x308f2f[_0x4498cb(0x572)][_0x4498cb(0x551)](_0x414002[_0x4498cb(0x6bb)]))continue;$gameParty[_0x4498cb(0x38c)+_0x4498cb(0x629)+_0x4498cb(0x289)+'ve'](_0x308f2f);}}),PluginManager['registerCo'+_0x864467(0x249)](pluginData[_0x864467(0x572)],'SystemShow'+'PassiveCom'+_0x864467(0x64e),_0x2802ce=>{const _0x5a4b74=_0x864467;VisuMZ[_0x5a4b74(0x398)+_0x5a4b74(0x4a5)](_0x2802ce,_0x2802ce);const _0x47a795=_0x2802ce['Show'];$gameSystem[_0x5a4b74(0x304)+_0x5a4b74(0x348)+_0x5a4b74(0x39e)](_0x47a795);}),VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x503)]={'EquipCost':/<EQUIP PASSIVE (?:COST|SLOTS):[ ](\d+)>/i,'EquipIcon':/<EQUIP PASSIVE ICON:[ ](\d+)>/i,'EquipName':/<EQUIP PASSIVE NAME:[ ](.*)>/i,'HelpDescription':/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i,'HideUnlearned':/<HIDE IF NOT LEARNED EQUIP PASSIVE>/i,'HideLearnedAllID':/<HIDE IF LEARNED (?:|ALL )EQUIP PASSIVE(?:|S):[ ](\d+)>/i,'HideLearnedAnyID':/<HIDE IF LEARNED ANY EQUIP PASSIVE(?:|S):[ ](.*)>/i,'HideLearnedAllName':/<HIDE IF LEARNED (?:|ALL )EQUIP PASSIVE(?:|S):[ ](.*)>/i,'HideLearnedAnyName':/<HIDE IF LEARNED ANY EQUIP PASSIVE(?:|S):[ ](.*)>/i,'MaskUnlearned':/<MASK IF NOT LEARNED EQUIP PASSIVE>/i,'NoMaskUnlearned':/<NO MASK IF NOT LEARNED EQUIP PASSIVE>/i,'MaskName':/<EQUIP PASSIVE MASK NAME: (.*)>/i,'LearnedEquipPassives':/<LEARNED EQUIP(?:|PED) PASSIVE(?:|S):[ ](.*)>/i,'AlreadyEquipPassives':/<ALREADY EQUIP(?:|PED) PASSIVE(?:|S):[ ](.*)>/i,'LearnableEquipPassivesA':/<LEARNABLE EQUIP(?:|PED) PASSIVE(?:|S):[ ](.*)>/i,'LearnableEquipPassivesB':/<LEARNABLE EQUIP(?:|PED) PASSIVE>\s*([\s\S]*)\s*<\/LEARNABLE EQUIP(?:|PED) PASSIVE(?:|S)>/i,'BranchLearn':/<BRANCH LEARN EQUIP PASSIVE(?:|S):[ ](.*)>/i,'BranchLearnable':/<BRANCH LEARNABLE EQUIP PASSIVE(?:|S):[ ](.*)>/i,'SkillLinkLearned':/<LINK LEARN EQUIP PASSIVE(?:|S):[ ](.*)>/i,'SkillLinkLearnable':/<LINK LEARNABLE EQUIP PASSIVE(?:|S):[ ](.*)>/i,'CustomLearnCondText':/<EQUIP(?:|PED) PASSIVE LEARN CONDITION TEXT>\s*([\s\S]*)\s*<\/EQUIP(?:|PED) PASSIVE LEARN CONDITION TEXT>/i,'LearnAny':/<EQUIP PASSIVE LEARN (.*)>/i,'LearnLevel':/<EQUIP PASSIVE LEARN LEVEL:[ ](\d+)>/i,'LearnBattles':/<EQUIP PASSIVE LEARN BATTLES:[ ](\d+)>/i,'LearnVictory':/<EQUIP PASSIVE LEARN VICTORIES:[ ](\d+)>/i,'LearnEscapes':/<EQUIP PASSIVE LEARN ESCAPES:[ ](\d+)>/i,'LearnDefeats':/<EQUIP PASSIVE LEARN DEFEATS:[ ](\d+)>/i,'LearnAttackTimes':/<EQUIP PASSIVE LEARN ATTACK TIMES:[ ](\d+)>/i,'LearnGuardTimes':/<EQUIP PASSIVE LEARN GUARD TIMES:[ ](\d+)>/i,'LearnSkillUsage':/<EQUIP PASSIVE LEARN USE SKILLS:[ ](\d+)>/i,'LearnPhysSkill':/<EQUIP PASSIVE LEARN USE PHYSICAL SKILLS:[ ](\d+)>/i,'LearnMagSkill':/<EQUIP PASSIVE LEARN USE MAGICAL SKILLS:[ ](\d+)>/i,'LearnCertSkill':/<EQUIP PASSIVE LEARN USE CERTAIN HIT SKILLS:[ ](\d+)>/i,'LearnItemUsage':/<EQUIP PASSIVE LEARN USE ITEMS:[ ](\d+)>/i,'LearnDealCritHitTimes':/<EQUIP PASSIVE LEARN (?:DEAL|INFLICT) CRIT(?:|S|ICAL)(?:| HIT) TIMES:[ ](\d+)>/i,'LearnTakeCritHitTimes':/<EQUIP PASSIVE LEARN (?:TAKE|RECEIVE) CRIT(?:|S|ICAL)(?:| HIT) TIMES:[ ](\d+)>/i,'LearnMissTimes':/<EQUIP PASSIVE LEARN (?:MISS|MISSED) TIMES:[ ](\d+)>/i,'LearnEvadeTimes':/<EQUIP PASSIVE LEARN (?:EVADE|EVASION) TIMES:[ ](\d+)>/i,'LearnSTypeUsage':/<EQUIP PASSIVE LEARN USE STYPE (.*):[ ](\d+)>/gi,'LearnElementDeal':/<EQUIP PASSIVE LEARN (?:DEAL|INFLICT) ELEMENT (.*) (?:DMG|DAMAGE):[ ](\d+)>/gi,'LearnElementTake':/<EQUIP PASSIVE LEARN (?:TAKE|RECEIVE) ELEMENT (.*) (?:DMG|DAMAGE):[ ](\d+)>/gi,'LearnStateDeal':/<EQUIP PASSIVE LEARN (?:DEAL|INFLICT) STATE (.*):[ ](\d+)>/gi,'LearnStateTake':/<EQUIP PASSIVE LEARN (?:TAKE|RECEIVE) STATE (.*):[ ](\d+)>/gi,'LearnDefeatTrait':/<EQUIP PASSIVE LEARN DEFEAT (.*) TRAIT:[ ](\d+)>/gi,'LearnTotalDmgDeal':/<EQUIP PASSIVE LEARN (?:DEAL|INFLICT) TOTAL (?:DMG|DAMAGE):[ ](\d+)>/gi,'LearnTotalDmgTake':/<EQUIP PASSIVE LEARN (?:TAKE|RECEIVE) TOTAL (?:DMG|DAMAGE):[ ](\d+)>/gi,'LearnTotalHealDeal':/<EQUIP PASSIVE LEARN (?:DEAL|INFLICT) TOTAL (?:HEAL|HEALING):[ ](\d+)>/gi,'LearnTotalHealTake':/<EQUIP PASSIVE LEARN (?:TAKE|RECEIVE) TOTAL (?:HEAL|HEALING):[ ](\d+)>/gi,'LearnCountKills':/<EQUIP PASSIVE LEARN KILL COUNT:[ ](\d+)>/gi,'LearnCountDeaths':/<EQUIP PASSIVE LEARN DEATH COUNT:[ ](\d+)>/gi,'LearnCountAssists':/<EQUIP PASSIVE LEARN ASSIST COUNT:[ ](\d+)>/gi,'LearnHaveGold':/<EQUIP PASSIVE LEARN (?:HAVE|REACH) GOLD:[ ](\d+)>/i,'LearnHaveItem':/<EQUIP PASSIVE LEARN (?:HAVE|REACH) ITEM (.*):[ ](\d+)>/gi,'LearnHaveWeapon':/<EQUIP PASSIVE LEARN (?:HAVE|REACH) WEAPON (.*):[ ](\d+)>/gi,'LearnHaveArmor':/<EQUIP PASSIVE LEARN (?:HAVE|REACH) ARMOR (.*):[ ](\d+)>/gi,'LearnHaveParam':/<EQUIP PASSIVE LEARN (?:HAVE|REACH) (?:|BASE )PARAM[ ](.*):[ ](\d+)>/gi,'LearnHaveXParam':/<EQUIP PASSIVE LEARN (?:HAVE|REACH) (?:X|X )PARAM[ ](.*):[ ](\d+)([%％])>/gi,'LearnHaveSParam':/<EQUIP PASSIVE LEARN (?:HAVE|REACH) (?:S|S )PARAM[ ](.*):[ ](\d+)([%％])>/gi},VisuMZ['EquipPassi'+_0x864467(0x479)]['Scene_Boot'+_0x864467(0x28a)+_0x864467(0x669)]=Scene_Boot['prototype']['onDatabase'+_0x864467(0x42d)],Scene_Boot['prototype']['onDatabase'+_0x864467(0x42d)]=function(){const _0x43908b=_0x864467;VisuMZ['EquipPassi'+_0x43908b(0x479)][_0x43908b(0x2cc)+_0x43908b(0x28a)+_0x43908b(0x669)][_0x43908b(0x349)](this),VisuMZ['EquipPassi'+_0x43908b(0x479)][_0x43908b(0x406)+'tibility'](),this[_0x43908b(0x651)+_0x43908b(0x332)+_0x43908b(0x305)+'tes']();},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x406)+_0x864467(0x2b7)]=function(){const _0xd3ebef=_0x864467,_0x3c418f={'mOijV':function(_0x2304c2,_0x438b1d){return _0x2304c2<_0x438b1d;},'MGaeM':_0xd3ebef(0x4e3)+_0xd3ebef(0x241)+_0xd3ebef(0x2dd)+_0xd3ebef(0x531)+_0xd3ebef(0x4b9)+_0xd3ebef(0x48d),'BnmLy':'in\x20order\x20f'+_0xd3ebef(0x292)+_0xd3ebef(0x5fb)+_0xd3ebef(0x219)+_0xd3ebef(0x33f),'HiqCI':function(_0x56a9ef,_0x57dce6){return _0x56a9ef(_0x57dce6);},'PdmCE':function(_0xbe91a0,_0x152b87){return _0xbe91a0<_0x152b87;},'CJqqg':_0xd3ebef(0x4e3)+_0xd3ebef(0x2eb)+_0xd3ebef(0x4ef)+_0xd3ebef(0x1fe)+_0xd3ebef(0x1e3)+_0xd3ebef(0x5d9)};if(Imported[_0xd3ebef(0x1fa)+_0xd3ebef(0x428)+_0xd3ebef(0x64b)]&&_0x3c418f[_0xd3ebef(0x21f)](VisuMZ[_0xd3ebef(0x26c)+'tusCore'][_0xd3ebef(0x610)],0x92*-0x1+-0x2e*0x4+-0x14b*-0x1+0.22999999999999998)){let _0xdb0da='';_0xdb0da+=_0x3c418f['MGaeM'],_0xdb0da+=_0x3c418f[_0xd3ebef(0x3dd)],_0x3c418f[_0xd3ebef(0x5df)](alert,_0xdb0da),SceneManager[_0xd3ebef(0x555)]();}if(Imported[_0xd3ebef(0x575)+_0xd3ebef(0x42e)+_0xd3ebef(0x226)]&&_0x3c418f['PdmCE'](VisuMZ[_0xd3ebef(0x394)+_0xd3ebef(0x1e5)]['version'],-0x24c2+-0x2143+0x4606+0.1299999999999999)){let _0x11634d='';_0x11634d+=_0x3c418f[_0xd3ebef(0x215)],_0x11634d+=_0x3c418f[_0xd3ebef(0x3dd)],_0x3c418f[_0xd3ebef(0x5df)](alert,_0x11634d),SceneManager[_0xd3ebef(0x555)]();}},Scene_Boot[_0x864467(0x5d8)][_0x864467(0x651)+_0x864467(0x332)+'PassiveSta'+_0x864467(0x59f)]=function(){const _0x2e9632=_0x864467;this[_0x2e9632(0x651)+_0x2e9632(0x332)+_0x2e9632(0x305)+_0x2e9632(0x3ba)+'gs']();},Scene_Boot[_0x864467(0x5d8)][_0x864467(0x651)+'suMZ_Equip'+'PassiveSta'+'tes_Noteta'+'gs']=function(){const _0x51bce9=_0x864467;if(VisuMZ[_0x51bce9(0x3aa)+_0x51bce9(0x486)])return;for(const _0x21592d of $dataStates){if(!_0x21592d)continue;VisuMZ[_0x51bce9(0x1d0)+'veSys'][_0x51bce9(0x23c)+_0x51bce9(0x31e)+_0x51bce9(0x547)](_0x21592d);}},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x342)+_0x864467(0x65f)]=VisuMZ[_0x864467(0x342)+'Notetags'],VisuMZ[_0x864467(0x342)+'Notetags']=function(_0x3c1750){const _0x436180=_0x864467;VisuMZ['EquipPassi'+_0x436180(0x479)]['ParseState'+_0x436180(0x65f)][_0x436180(0x349)](this,_0x3c1750),VisuMZ[_0x436180(0x1d0)+_0x436180(0x479)][_0x436180(0x23c)+_0x436180(0x31e)+_0x436180(0x547)](_0x3c1750);},VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x23c)+_0x864467(0x31e)+'iption']=function(_0x362fcc){const _0x326a7b=_0x864467,_0x36d9a7={'oAwMV':function(_0x5e51d9,_0x20d1f8){return _0x5e51d9(_0x20d1f8);}};_0x362fcc['descriptio'+'n']=_0x362fcc[_0x326a7b(0x6b0)+'n']||'';const _0x42dce4=VisuMZ[_0x326a7b(0x1d0)+'veSys']['RegExp'],_0x98be0c=_0x362fcc[_0x326a7b(0x379)];_0x98be0c[_0x326a7b(0x231)](_0x42dce4[_0x326a7b(0x51d)+_0x326a7b(0x20f)])&&(_0x362fcc['descriptio'+'n']=_0x36d9a7[_0x326a7b(0x3c6)](String,RegExp['$1'])[_0x326a7b(0x22f)]());},DataManager['getItemIdW'+_0x864467(0x683)]=function(_0x4e4075){const _0x10b75f=_0x864467;_0x4e4075=_0x4e4075[_0x10b75f(0x5c8)+'e']()[_0x10b75f(0x22f)](),this[_0x10b75f(0x514)]=this['_itemIDs']||{};if(this[_0x10b75f(0x514)][_0x4e4075])return this[_0x10b75f(0x514)][_0x4e4075];for(const _0x2bc46e of $dataItems){if(!_0x2bc46e)continue;this['_itemIDs'][_0x2bc46e['name'][_0x10b75f(0x5c8)+'e']()['trim']()]=_0x2bc46e['id'];}return this[_0x10b75f(0x514)][_0x4e4075]||0x1fb7+0x1a8c+-0x311*0x13;},DataManager['getWeaponI'+_0x864467(0x365)]=function(_0x3cfaca){const _0x148010=_0x864467;_0x3cfaca=_0x3cfaca[_0x148010(0x5c8)+'e']()[_0x148010(0x22f)](),this['_weaponIDs']=this[_0x148010(0x2ca)]||{};if(this[_0x148010(0x2ca)][_0x3cfaca])return this[_0x148010(0x2ca)][_0x3cfaca];for(const _0x1189ba of $dataWeapons){if(!_0x1189ba)continue;this[_0x148010(0x2ca)][_0x1189ba[_0x148010(0x572)][_0x148010(0x5c8)+'e']()[_0x148010(0x22f)]()]=_0x1189ba['id'];}return this[_0x148010(0x2ca)][_0x3cfaca]||0x816+0xba3+-0x33*0x63;},DataManager[_0x864467(0x522)+'WithName']=function(_0x21843e){const _0x1d0b82=_0x864467;_0x21843e=_0x21843e[_0x1d0b82(0x5c8)+'e']()[_0x1d0b82(0x22f)](),this[_0x1d0b82(0x43c)]=this[_0x1d0b82(0x43c)]||{};if(this[_0x1d0b82(0x43c)][_0x21843e])return this[_0x1d0b82(0x43c)][_0x21843e];for(const _0xfe1d14 of $dataArmors){if(!_0xfe1d14)continue;this[_0x1d0b82(0x43c)][_0xfe1d14[_0x1d0b82(0x572)][_0x1d0b82(0x5c8)+'e']()[_0x1d0b82(0x22f)]()]=_0xfe1d14['id'];}return this[_0x1d0b82(0x43c)][_0x21843e]||-0xd40+0x2364+0x6d*-0x34;},DataManager[_0x864467(0x1be)]=function(_0x12a2a0){const _0x10bef7=_0x864467,_0x1b789f={'kZRTc':function(_0x37d6a1,_0x4a1908){return _0x37d6a1!==_0x4a1908;},'pRKLp':function(_0x2e4db,_0x2d181b){return _0x2e4db!==_0x2d181b;}};if(!_0x12a2a0)return![];return _0x1b789f[_0x10bef7(0x37c)](_0x12a2a0[_0x10bef7(0x2c1)+'lTiming'],undefined)&&_0x1b789f[_0x10bef7(0x39f)](_0x12a2a0[_0x10bef7(0x372)],undefined);},DataManager[_0x864467(0x567)+_0x864467(0x49f)]=function(_0xf82f23){const _0x1dce43=_0x864467;_0xf82f23=_0xf82f23[_0x1dce43(0x5c8)+'e']()[_0x1dce43(0x22f)](),this[_0x1dce43(0x44c)+'s']=this['_elementID'+'s']||{};if(this[_0x1dce43(0x44c)+'s'][_0xf82f23])return this['_elementID'+'s'][_0xf82f23];let _0x30423b=-0xa4+-0xa20+0xac5;for(const _0x5c3c12 of $dataSystem[_0x1dce43(0x544)]){if(!_0x5c3c12)continue;let _0x5bebd6=_0x5c3c12[_0x1dce43(0x5c8)+'e']();_0x5bebd6=_0x5bebd6[_0x1dce43(0x5d7)](/\x1I\[(\d+)\]/gi,''),_0x5bebd6=_0x5bebd6[_0x1dce43(0x5d7)](/\\I\[(\d+)\]/gi,''),this[_0x1dce43(0x44c)+'s'][_0x5bebd6]=_0x30423b,_0x30423b++;}return this[_0x1dce43(0x44c)+'s'][_0xf82f23]||0x3*0x302+0x2*-0x4ae+0x56;},DataManager[_0x864467(0x23b)+_0x864467(0x38b)]=function(_0x4de04a){const _0x108072=_0x864467,_0xdc9558={'ynlJw':function(_0x2b5d85,_0x49b710){return _0x2b5d85!==_0x49b710;},'Omipg':function(_0x30fa6f,_0xed415){return _0x30fa6f(_0xed415);}};if(!this[_0x108072(0x1be)](_0x4de04a))return 0x853+0x1*-0x244+-0x2f*0x21;this[_0x108072(0x247)+'assiveCost']=this[_0x108072(0x247)+_0x108072(0x6a8)]||{};if(_0xdc9558[_0x108072(0x2e2)](this[_0x108072(0x247)+_0x108072(0x6a8)][_0x4de04a['id']],undefined))return this['_getEquipP'+_0x108072(0x6a8)][_0x4de04a['id']];let _0x3448a8=Game_Actor[_0x108072(0x4a2)+_0x108072(0x497)][_0x108072(0x68a)+'t']||0x1652+-0x1*0x20ab+0xa59;const _0x3d3888=VisuMZ[_0x108072(0x1d0)+'veSys'][_0x108072(0x503)],_0x97fa1e=_0x4de04a[_0x108072(0x379)]||'';return _0x97fa1e[_0x108072(0x231)](_0x3d3888[_0x108072(0x46b)])&&(_0x3448a8=_0xdc9558[_0x108072(0x2e3)](Number,RegExp['$1'])),this['_getEquipP'+_0x108072(0x6a8)][_0x4de04a['id']]=_0x3448a8,this['_getEquipP'+_0x108072(0x6a8)][_0x4de04a['id']];},DataManager[_0x864467(0x23b)+'ssiveIcon']=function(_0x3d43c2){const _0x7f6ac8=_0x864467,_0x4b4b10={'LhwLM':function(_0x1cda74,_0x423f97){return _0x1cda74!==_0x423f97;},'jhpCo':function(_0x569b5b,_0x4d7a0c){return _0x569b5b(_0x4d7a0c);}};if(!this[_0x7f6ac8(0x1be)](_0x3d43c2))return-0x23ca+-0x389*0x8+0x4012;this[_0x7f6ac8(0x247)+_0x7f6ac8(0x6a9)]=this[_0x7f6ac8(0x247)+_0x7f6ac8(0x6a9)]||{};if(_0x4b4b10[_0x7f6ac8(0x5f6)](this[_0x7f6ac8(0x247)+_0x7f6ac8(0x6a9)][_0x3d43c2['id']],undefined))return this[_0x7f6ac8(0x247)+_0x7f6ac8(0x6a9)][_0x3d43c2['id']];let _0x22fff2=_0x3d43c2[_0x7f6ac8(0x5c0)]||ImageManager['EQUIP_PASS'+_0x7f6ac8(0x497)][_0x7f6ac8(0x5ea)];const _0x556cb7=VisuMZ[_0x7f6ac8(0x1d0)+_0x7f6ac8(0x479)][_0x7f6ac8(0x503)],_0x38ba0b=_0x3d43c2[_0x7f6ac8(0x379)]||'';return _0x38ba0b[_0x7f6ac8(0x231)](_0x556cb7['EquipIcon'])&&(_0x22fff2=_0x4b4b10[_0x7f6ac8(0x5c6)](Number,RegExp['$1'])),this[_0x7f6ac8(0x247)+_0x7f6ac8(0x6a9)][_0x3d43c2['id']]=_0x22fff2,this[_0x7f6ac8(0x247)+_0x7f6ac8(0x6a9)][_0x3d43c2['id']];},DataManager['getEquipPa'+_0x864467(0x3cd)]=function(_0x4d31d5){const _0x3aeca4=_0x864467,_0x6e1912={'EbHna':function(_0x391991,_0x21797d){return _0x391991!==_0x21797d;},'FJHhc':function(_0x590da,_0xd191e2){return _0x590da(_0xd191e2);}};if(!this[_0x3aeca4(0x1be)](_0x4d31d5))return 0x1191+-0x21*0x94+0x183;this[_0x3aeca4(0x247)+_0x3aeca4(0x5e0)]=this[_0x3aeca4(0x247)+_0x3aeca4(0x5e0)]||{};if(_0x6e1912[_0x3aeca4(0x5ce)](this[_0x3aeca4(0x247)+_0x3aeca4(0x5e0)][_0x4d31d5['id']],undefined))return this['_getEquipP'+_0x3aeca4(0x5e0)][_0x4d31d5['id']];let _0x3245ff=_0x4d31d5[_0x3aeca4(0x572)]||'';const _0x5a8177=VisuMZ['EquipPassi'+_0x3aeca4(0x479)][_0x3aeca4(0x503)],_0x2fb5ca=_0x4d31d5[_0x3aeca4(0x379)]||'';return _0x2fb5ca[_0x3aeca4(0x231)](_0x5a8177[_0x3aeca4(0x619)])&&(_0x3245ff=_0x6e1912[_0x3aeca4(0x310)](String,RegExp['$1'])[_0x3aeca4(0x22f)]()),this[_0x3aeca4(0x247)+_0x3aeca4(0x5e0)][_0x4d31d5['id']]=_0x3245ff,this['_getEquipP'+_0x3aeca4(0x5e0)][_0x4d31d5['id']];},DataManager[_0x864467(0x4b6)+_0x864467(0x411)+_0x864467(0x5be)+'Ds']=function(_0x398cb4){const _0x2587b6=_0x864467,_0x246815=this[_0x2587b6(0x4b6)+'leEquippab'+_0x2587b6(0x2cb)+_0x2587b6(0x430)](_0x398cb4[_0x2587b6(0x45a)]()),_0x4066f5=this[_0x2587b6(0x4b6)+'leEquippab'+_0x2587b6(0x2cb)+'FromObj'](_0x398cb4[_0x2587b6(0x298)+'ss']());let _0x2c13c5=_0x246815['concat'](_0x4066f5);return _0x2c13c5=_0x2c13c5['filter']((_0x122290,_0x4ac4b5,_0x4b1312)=>_0x4b1312[_0x2587b6(0x3ef)](_0x122290)===_0x4ac4b5),_0x2c13c5;},DataManager[_0x864467(0x4b6)+_0x864467(0x411)+'lePassives'+_0x864467(0x430)]=function(_0x21f5ef){const _0x59d01d=_0x864467,_0x2f2426={'MVlSW':function(_0x3623ce,_0xf067f4){return _0x3623ce!==_0xf067f4;},'AsPug':function(_0x3dffe3,_0x1f8f4c){return _0x3dffe3!==_0x1f8f4c;},'KitPG':function(_0x14e510,_0x52f7bf){return _0x14e510(_0x52f7bf);},'ORbwY':function(_0x279d61,_0x176254){return _0x279d61(_0x176254);},'PEJLg':function(_0xb52370,_0x1bc126){return _0xb52370>_0x1bc126;},'gRMsV':function(_0xed9bfc,_0x3925b9){return _0xed9bfc(_0x3925b9);}};let _0x22db6f=null;this[_0x59d01d(0x595)+'or_getLear'+_0x59d01d(0x49e)+_0x59d01d(0x289)+_0x59d01d(0x5c1)]=this['_cache_act'+_0x59d01d(0x30b)+_0x59d01d(0x49e)+_0x59d01d(0x289)+_0x59d01d(0x5c1)]||{},this[_0x59d01d(0x26a)+_0x59d01d(0x665)+_0x59d01d(0x49e)+_0x59d01d(0x289)+'ves']=this[_0x59d01d(0x26a)+_0x59d01d(0x665)+'nableEquip'+_0x59d01d(0x289)+_0x59d01d(0x5c1)]||{};if(_0x2f2426[_0x59d01d(0x512)](_0x21f5ef['initialLev'+'el'],undefined)&&_0x2f2426[_0x59d01d(0x512)](_0x21f5ef[_0x59d01d(0x631)],undefined))_0x22db6f=this[_0x59d01d(0x595)+'or_getLear'+_0x59d01d(0x49e)+'pablePassi'+_0x59d01d(0x5c1)];else{if(_0x2f2426[_0x59d01d(0x512)](_0x21f5ef[_0x59d01d(0x5f5)],undefined)&&_0x2f2426[_0x59d01d(0x512)](_0x21f5ef[_0x59d01d(0x630)],undefined))_0x22db6f=this[_0x59d01d(0x26a)+'ss_getLear'+_0x59d01d(0x49e)+'pablePassi'+_0x59d01d(0x5c1)];else return[];}if(_0x2f2426[_0x59d01d(0x660)](_0x22db6f[_0x21f5ef['id']],undefined))return _0x22db6f[_0x21f5ef['id']];_0x22db6f[_0x21f5ef['id']]=[];const _0x2f1fa3=VisuMZ[_0x59d01d(0x1d0)+_0x59d01d(0x479)]['RegExp'],_0x2ce2e4=_0x21f5ef[_0x59d01d(0x379)]||'';if(_0x2ce2e4[_0x59d01d(0x231)](_0x2f1fa3[_0x59d01d(0x314)+_0x59d01d(0x2c6)+_0x59d01d(0x457)])){const _0x2d7af7=_0x2f2426[_0x59d01d(0x319)](String,RegExp['$1'])[_0x59d01d(0x3ca)](',')['map'](_0x5c4a0d=>_0x5c4a0d[_0x59d01d(0x22f)]());for(const _0x47b504 of _0x2d7af7){const _0x10b0ec=/^\d+$/[_0x59d01d(0x1d5)](_0x47b504);let _0x3d8f89=-0x2125*0x1+0xa4*-0x13+-0x3*-0xf1b;_0x10b0ec?_0x3d8f89=_0x2f2426[_0x59d01d(0x650)](Number,_0x47b504):_0x3d8f89=DataManager[_0x59d01d(0x1cb)+'WithName'](_0x47b504),_0x2f2426['PEJLg'](_0x3d8f89,-0x16bd*-0x1+-0x12c1+0x1fe*-0x2)&&_0x22db6f[_0x21f5ef['id']][_0x59d01d(0x61c)](_0x3d8f89);}}if(_0x2ce2e4[_0x59d01d(0x231)](_0x2f1fa3[_0x59d01d(0x314)+'quipPassiv'+'esB'])){const _0xdb320=_0x2f2426['gRMsV'](String,RegExp['$1'])['split'](/[\r\n]+/);for(const _0x5cade0 of _0xdb320){const _0x5b5452=/^\d+$/['test'](_0x5cade0);let _0x2813e2=-0x1a9e*-0x1+0x5e*0x51+-0x385c;_0x5b5452?_0x2813e2=_0x2f2426[_0x59d01d(0x2b0)](Number,_0x5cade0):_0x2813e2=DataManager['getStateId'+_0x59d01d(0x20e)](_0x5cade0),_0x2f2426[_0x59d01d(0x281)](_0x2813e2,-0x10a5+-0x1*0x85f+-0x2*-0xc82)&&_0x22db6f[_0x21f5ef['id']][_0x59d01d(0x61c)](_0x2813e2);}}return _0x22db6f[_0x21f5ef['id']];},ImageManager['EQUIP_PASS'+_0x864467(0x497)]={'icon':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)]['CommandIco'+'n']??0x1b9c+-0x1*0x180a+-0x5*0x79,'capacity':VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x4a8)]['Vocab']['CapacityIc'+'on']??0x59*-0x6b+0x200+-0x1*-0x23d5},TextManager[_0x864467(0x4a2)+_0x864467(0x497)]={'command':VisuMZ['EquipPassi'+'veSys'][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x42b)+'e']??_0x864467(0x46e),'capacity':VisuMZ['EquipPassi'+_0x864467(0x479)]['Settings'][_0x864467(0x66d)][_0x864467(0x3f1)+'xt']??_0x864467(0x373)+'pacity','capacityFmt':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x34f)+'t']??_0x864467(0x583),'costFmt':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)]['Vocab'][_0x864467(0x1e4)]??_0x864467(0x3b1),'unlearned':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Settings'][_0x864467(0x66d)][_0x864467(0x37a)]??_0x864467(0x328)+_0x864467(0x434),'skillLearnShopStatus':VisuMZ['EquipPassi'+'veSys']['Settings'][_0x864467(0x66d)]['ShopStatus'+_0x864467(0x6b7)]??_0x864467(0x525)+_0x864467(0x407),'learnShowTextPopup':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x26e)][_0x864467(0x5b0)]??!![],'textPopupFmt':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x26e)][_0x864467(0x56c)+'mt']??_0x864467(0x3f4)+_0x864467(0x495),'helpFmt':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)]['Vocab'][_0x864467(0x4e4)]??'\x5cC[16]Lear'+_0x864467(0x392)+_0x864467(0x381)+'1','helpWordWrap':VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x3e5)+'ap']??!![],'helpSpacing':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)]['helpSpacin'+'g']??!![],'helpSpacer':VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x697)]??',','helpNothing':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)]['Vocab'][_0x864467(0x2d7)+'g']??'-','helpDescFmt':{'progressFmt':VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x23a)+'t']??_0x864467(0x3a7)+'%1)','progressFraction':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x4dc)+'action']??_0x864467(0x518),'progressPercent':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Settings'][_0x864467(0x66d)][_0x864467(0x5c7)+_0x864467(0x699)]??_0x864467(0x1f3),'progressLengthLimit':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Settings'][_0x864467(0x66d)][_0x864467(0x432)+_0x864467(0x493)]??0x2*-0x118e+0xa*0x56+0x1fc7,'progressComplete':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x209)+_0x864467(0x356)]??'\x5cI[87]','level':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x61b)]??_0x864467(0x69a)+_0x864467(0x534),'battle':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)]['battle']??'Fight\x20%1\x20B'+_0x864467(0x278),'victory':VisuMZ['EquipPassi'+_0x864467(0x479)]['Settings'][_0x864467(0x66d)][_0x864467(0x54e)]??'Win\x20%1\x20Bat'+_0x864467(0x399),'escapes':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x4d6)]??_0x864467(0x2fc)+_0x864467(0x2b6),'defeat':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x1e6)]??_0x864467(0x3b5)+_0x864467(0x418),'attackTimes':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x69f)+'s']??_0x864467(0x592)+_0x864467(0x429),'guardTimes':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x283)]??_0x864467(0x6b2)+_0x864467(0x1bb),'skillUse':VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x4a8)][_0x864467(0x66d)]['skillUse']??_0x864467(0x3ce)+_0x864467(0x31c),'physSkillUse':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Settings'][_0x864467(0x66d)]['physSkillU'+'se']??'Use\x20%1\x20Phy'+'sical\x20Skil'+_0x864467(0x3ee),'magSkillUse':VisuMZ['EquipPassi'+_0x864467(0x479)]['Settings'][_0x864467(0x66d)][_0x864467(0x644)+'e']??_0x864467(0x420)+'ical\x20Skill'+_0x864467(0x276),'certSkillUse':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)]['certSkillU'+'se']??'Use\x20%1\x20Cer'+_0x864467(0x359)+'kills\x20%2','itemUse':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x385)]??_0x864467(0x58a)+_0x864467(0x378),'critDeal':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)]['critDeal']??_0x864467(0x2ba)+_0x864467(0x1c6)+_0x864467(0x276),'critTake':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x552)]??'Take\x20%1\x20Cr'+_0x864467(0x1c6)+_0x864467(0x276),'miss':VisuMZ['EquipPassi'+_0x864467(0x479)]['Settings'][_0x864467(0x66d)][_0x864467(0x4ed)]??_0x864467(0x401)+_0x864467(0x268),'evade':VisuMZ['EquipPassi'+'veSys']['Settings'][_0x864467(0x66d)]['evade']??_0x864467(0x300)+_0x864467(0x1bb),'stypeUse':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x654)]??_0x864467(0x250)+_0x864467(0x66f),'elementDeal':VisuMZ[_0x864467(0x1d0)+'veSys']['Settings']['Vocab']['elementDea'+'l']??_0x864467(0x4fe)+_0x864467(0x51f)+_0x864467(0x49a),'elementTake':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Settings'][_0x864467(0x66d)][_0x864467(0x377)+'e']??_0x864467(0x4a6)+'\x20Damage\x20%1'+'\x20Times\x20%2','stateDeal':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)]['Vocab'][_0x864467(0x6b3)]??_0x864467(0x4fe)+_0x864467(0x3ab)+'%2','stateTake':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x56a)]??_0x864467(0x4a6)+_0x864467(0x3ab)+'%2','traitSlayer':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Settings'][_0x864467(0x66d)][_0x864467(0x3e8)+'r']??_0x864467(0x1f8)+_0x864467(0x461)+_0x864467(0x39a),'totalDmgDeal':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x35f)+'al']??'Inflict\x20%1'+_0x864467(0x1d9)+_0x864467(0x221)+'\x20%2','totalDmgTake':VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x4a8)]['Vocab']['totalDmgTa'+'ke']??'Receive\x20%1'+_0x864467(0x1d9)+_0x864467(0x221)+'\x20%2','totalHealDeal':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)]['Vocab'][_0x864467(0x696)+_0x864467(0x22b)]??_0x864467(0x30e)+_0x864467(0x1d9)+_0x864467(0x3bc)+_0x864467(0x31b),'totalHealTake':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)]['totalHealT'+'ake']??_0x864467(0x60a)+_0x864467(0x1d9)+'tle\x20Healin'+_0x864467(0x31b),'kills':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x308)]??_0x864467(0x336)+_0x864467(0x1df),'deaths':VisuMZ['EquipPassi'+_0x864467(0x479)]['Settings'][_0x864467(0x66d)][_0x864467(0x337)]??_0x864467(0x5b1)+_0x864467(0x362),'assists':VisuMZ['EquipPassi'+'veSys'][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x3d0)]??'Assist\x20%1\x20'+_0x864467(0x429),'haveGold':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)]['Vocab'][_0x864467(0x47d)]??_0x864467(0x605)+_0x864467(0x614),'haveItem':VisuMZ['EquipPassi'+_0x864467(0x479)]['Settings'][_0x864467(0x66d)][_0x864467(0x687)]??'Possess\x20%3'+_0x864467(0x263),'haveWeapon':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)]['haveWeapon']??'Possess\x20%3'+'\x20×%1\x20%2','haveArmor':VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x613)]??_0x864467(0x455)+_0x864467(0x263),'haveParam':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x66d)][_0x864467(0x1d1)]??_0x864467(0x5b9)+'3\x20%2','haveXParam':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Settings']['Vocab'][_0x864467(0x395)]??_0x864467(0x296)+_0x864467(0x652),'haveSParam':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Settings'][_0x864467(0x66d)][_0x864467(0x4fb)]??'Reach\x20%1%\x20'+_0x864467(0x652)},'helpMeetConditionColor':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)]['Vocab'][_0x864467(0x681)+_0x864467(0x26d)+'or']??-0xd01+-0x71*0x3e+0x3*0xd7d},ColorManager[_0x864467(0x6b1)+_0x864467(0x52b)]=function(){const _0x1796a2=_0x864467;return this[_0x1796a2(0x5bc)](Window_EquipPassiveList[_0x1796a2(0x25f)][_0x1796a2(0x4d4)]);},VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x41a)+'m_initiali'+'ze']=Game_System[_0x864467(0x5d8)]['initialize'],Game_System[_0x864467(0x5d8)][_0x864467(0x39c)]=function(){const _0x2691ad=_0x864467;VisuMZ[_0x2691ad(0x1d0)+_0x2691ad(0x479)][_0x2691ad(0x41a)+_0x2691ad(0x57f)+'ze'][_0x2691ad(0x349)](this),this[_0x2691ad(0x3d8)+'assiveSyst'+'em']();},Game_System[_0x864467(0x5d8)]['initEquipP'+_0x864467(0x548)+'em']=function(){const _0x55384b=_0x864467;this[_0x55384b(0x28e)+'iveSys_Sce'+_0x55384b(0x265)]=Window_SkillType['EQUIP_PASS'+_0x55384b(0x497)]['defaultSho'+_0x55384b(0x3ad)+_0x55384b(0x579)];},Game_System[_0x864467(0x5d8)][_0x864467(0x2aa)+_0x864467(0x273)+_0x864467(0x483)]=function(){const _0x5a9f3e=_0x864467,_0x32b326={'fGAnj':function(_0x337b65,_0x41b7ad){return _0x337b65===_0x41b7ad;}};return _0x32b326['fGAnj'](this[_0x5a9f3e(0x28e)+'iveSys_Sce'+'neSkill'],undefined)&&this['initEquipP'+_0x5a9f3e(0x548)+'em'](),this['_equipPass'+_0x5a9f3e(0x626)+'neSkill'];},Game_System['prototype']['setEquipPa'+'ssiveComma'+_0x864467(0x39e)]=function(_0x38c0b4){const _0x57058d=_0x864467,_0xe1f6b9={'oqoFQ':function(_0x39cf05,_0xe795a8){return _0x39cf05===_0xe795a8;}};_0xe1f6b9[_0x57058d(0x210)](this['_equipPass'+_0x57058d(0x626)+'neSkill'],undefined)&&this[_0x57058d(0x3d8)+'assiveSyst'+'em'](),this[_0x57058d(0x28e)+_0x57058d(0x626)+_0x57058d(0x265)]=_0x38c0b4;},Game_Actor[_0x864467(0x4a2)+_0x864467(0x497)]={'defaultCost':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)]['General'][_0x864467(0x5db)+'t']??0x5a8+-0x17*0xe1+-0xe90*-0x1,'minCapacity':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x26e)][_0x864467(0x586)+'t']??0x1*0x412+-0x21ee+-0x5*-0x5f9,'maxCapacity':VisuMZ[_0x864467(0x1d0)+'veSys']['Settings']['General'][_0x864467(0x3ae)+'t']??0xe6b+-0x2205+0x13fe,'capacityFormula':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x26e)][_0x864467(0x446)+_0x864467(0x3c9)]??'Math.ceil('+'user.level'+_0x864467(0x68f),'checkOverCapacityExp':VisuMZ['EquipPassi'+'veSys'][_0x864467(0x4a8)][_0x864467(0x26e)][_0x864467(0x494)+_0x864467(0x1cf)]??!![],'learnAutoEquip':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x26e)][_0x864467(0x442)+'quip']??!![]},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x38d)+'_setup']=Game_Actor[_0x864467(0x5d8)][_0x864467(0x437)],Game_Actor[_0x864467(0x5d8)][_0x864467(0x437)]=function(_0x3a02d3){const _0x4f7553=_0x864467;this[_0x4f7553(0x4af)+'PassiveSys'+'temFlag']=!![],VisuMZ[_0x4f7553(0x1d0)+'veSys']['Game_Actor'+_0x4f7553(0x5e1)][_0x4f7553(0x349)](this,_0x3a02d3),this[_0x4f7553(0x3d8)+'assiveSyst'+'em'](),this[_0x4f7553(0x4af)+_0x4f7553(0x229)+'temFlag']=undefined;},Game_Actor[_0x864467(0x5d8)][_0x864467(0x3d8)+'assiveSyst'+'em']=function(){const _0x1385f7=_0x864467,_0x200d3a={'TTlVO':function(_0x4f0a46,_0x530809){return _0x4f0a46<=_0x530809;},'BGSAx':function(_0x25e0f3,_0x1eb29b){return _0x25e0f3===_0x1eb29b;},'SFzaG':'-----'};this[_0x1385f7(0x45d)+'uippablePa'+_0x1385f7(0x5d4)]=[],this[_0x1385f7(0x1f6)+_0x1385f7(0x299)+_0x1385f7(0x46e)]=[],this['_equippedP'+'assives']=[];if(VisuMZ[_0x1385f7(0x1d0)+_0x1385f7(0x479)][_0x1385f7(0x561)])for(let _0x11a8f2=0xed7+-0x102c+0x159;_0x200d3a[_0x1385f7(0x4f0)](_0x11a8f2,0x172*-0x1+0x270f+-0x257e*0x1);_0x11a8f2++){const _0x1ccbaf=$dataStates[_0x11a8f2];if(_0x200d3a[_0x1385f7(0x462)](_0x1ccbaf[_0x1385f7(0x572)],''))continue;if(_0x1ccbaf[_0x1385f7(0x572)][_0x1385f7(0x551)](_0x200d3a['SFzaG']))continue;this['_learnedEq'+_0x1385f7(0x637)+_0x1385f7(0x5d4)][_0x1385f7(0x61c)](_0x11a8f2);}this[_0x1385f7(0x55f)+_0x1385f7(0x1d3)+'quippableP'+'assives'](),this['setupIniti'+_0x1385f7(0x223)+_0x1385f7(0x44a)+_0x1385f7(0x206)](),this['_learnedEq'+_0x1385f7(0x637)+_0x1385f7(0x5d4)][_0x1385f7(0x558)]((_0x4f6135,_0x5cd809)=>_0x4f6135-_0x5cd809);},Game_Actor['prototype'][_0x864467(0x634)+_0x864467(0x5d4)]=function(){const _0xc38a9b=_0x864467,_0x23c89a={'XBdpc':function(_0x339d1a,_0xd324aa){return _0x339d1a===_0xd324aa;}};if(_0x23c89a[_0xc38a9b(0x1e8)](this[_0xc38a9b(0x3fd)+_0xc38a9b(0x43a)],undefined))this[_0xc38a9b(0x3d8)+_0xc38a9b(0x548)+'em']();return this[_0xc38a9b(0x3fd)+'assives'][_0xc38a9b(0x327)](_0x32de19=>$dataStates[_0x32de19])[_0xc38a9b(0x2f3)](null)[_0xc38a9b(0x2f3)](undefined);},Game_Actor['prototype'][_0x864467(0x634)+_0x864467(0x542)+'Ds']=function(){const _0x47023e=_0x864467,_0x158b24={'MlEaq':function(_0x4a2874,_0x102558){return _0x4a2874===_0x102558;}};if(_0x158b24['MlEaq'](this[_0x47023e(0x3fd)+'assives'],undefined))this[_0x47023e(0x3d8)+_0x47023e(0x548)+'em']();return this[_0x47023e(0x3fd)+'assives'];},Game_Actor[_0x864467(0x5d8)][_0x864467(0x6bd)+_0x864467(0x251)+'quipped']=function(_0x5a10d6){const _0x334e31=_0x864467,_0x533745={'FhFYi':function(_0x4f3e92,_0x13dd99){return _0x4f3e92===_0x13dd99;}};if(!DataManager['isState'](_0x5a10d6))return![];if(_0x533745['FhFYi'](this[_0x334e31(0x3fd)+_0x334e31(0x43a)],undefined))this[_0x334e31(0x3d8)+_0x334e31(0x548)+'em']();return this[_0x334e31(0x3fd)+_0x334e31(0x43a)][_0x334e31(0x551)](_0x5a10d6['id']);},Game_Actor[_0x864467(0x5d8)][_0x864467(0x24f)+_0x864467(0x474)]=function(_0x31780f){const _0x196119=_0x864467,_0x2af957={'wdHTO':function(_0x32d63d,_0x1611aa){return _0x32d63d===_0x1611aa;}};if(!DataManager[_0x196119(0x1be)](_0x31780f))return![];if(_0x2af957['wdHTO'](this['_equippedP'+_0x196119(0x43a)],undefined))this['initEquipP'+_0x196119(0x548)+'em']();if(this['_equippedP'+_0x196119(0x43a)][_0x196119(0x551)](_0x31780f['id']))return;let _0x5355fb=null;!this[_0x196119(0x369)]&&Imported[_0x196119(0x641)+_0x196119(0x2f0)+'Core']&&(_0x5355fb=JsonEx['makeDeepCo'+'py'](this),_0x5355fb[_0x196119(0x369)]=!![]),this[_0x196119(0x3fd)+'assives'][_0x196119(0x61c)](_0x31780f['id']),this['_cache']={},this['refresh'](),!this[_0x196119(0x369)]&&Imported[_0x196119(0x641)+_0x196119(0x2f0)+_0x196119(0x431)]&&this[_0x196119(0x471)+_0x196119(0x509)](_0x5355fb);},Game_Actor[_0x864467(0x5d8)][_0x864467(0x262)+_0x864467(0x584)]=function(_0x5ed096){const _0x4f3742=_0x864467,_0x1cb979={'YupkK':function(_0x56c8bb,_0x3ce07f){return _0x56c8bb===_0x3ce07f;}};if(!DataManager[_0x4f3742(0x1be)](_0x5ed096))return![];if(_0x1cb979[_0x4f3742(0x533)](this[_0x4f3742(0x3fd)+_0x4f3742(0x43a)],undefined))this[_0x4f3742(0x3d8)+'assiveSyst'+'em']();if(!this[_0x4f3742(0x3fd)+_0x4f3742(0x43a)][_0x4f3742(0x551)](_0x5ed096['id']))return;let _0x4e1315=null;!this[_0x4f3742(0x369)]&&Imported[_0x4f3742(0x641)+_0x4f3742(0x2f0)+_0x4f3742(0x431)]&&(_0x4e1315=JsonEx[_0x4f3742(0x6a5)+'py'](this),_0x4e1315[_0x4f3742(0x369)]=!![]),this[_0x4f3742(0x3fd)+_0x4f3742(0x43a)]['remove'](_0x5ed096['id']),this[_0x4f3742(0x66c)]={},this[_0x4f3742(0x1e2)](),!this[_0x4f3742(0x369)]&&Imported[_0x4f3742(0x641)+_0x4f3742(0x2f0)+_0x4f3742(0x431)]&&this[_0x4f3742(0x471)+_0x4f3742(0x509)](_0x4e1315);},Game_Actor[_0x864467(0x5d8)][_0x864467(0x3a9)+'pedPassive']=function(_0x4f7bf6,_0x22edc5){const _0x5b73a1=_0x864467,_0x593ad1={'wMoei':function(_0x1f9f46,_0x88318,_0x1a19ed){return _0x1f9f46(_0x88318,_0x1a19ed);},'HIlzG':function(_0x45ecc7,_0x1db8ca){return _0x45ecc7===_0x1db8ca;},'vhIkm':_0x5b73a1(0x3b6),'oVgDb':function(_0x18b46a,_0x51759a){return _0x18b46a(_0x51759a);}};if(this[_0x5b73a1(0x4af)+_0x5b73a1(0x229)+'temFlag'])return _0x593ad1[_0x5b73a1(0x55a)](setTimeout,this[_0x5b73a1(0x3a9)+_0x5b73a1(0x294)][_0x5b73a1(0x469)](this,_0x4f7bf6,_0x22edc5),0x3c*-0x22+0x1e28+-0x9*0x277);if(!DataManager[_0x5b73a1(0x1be)](_0x4f7bf6))return;if(_0x593ad1[_0x5b73a1(0x57d)](this[_0x5b73a1(0x45d)+'uippablePa'+_0x5b73a1(0x5d4)],undefined))this[_0x5b73a1(0x3d8)+_0x5b73a1(0x548)+'em']();if(this[_0x5b73a1(0x45d)+'uippablePa'+_0x5b73a1(0x5d4)][_0x5b73a1(0x551)](_0x4f7bf6['id']))return;this['_learnedEq'+_0x5b73a1(0x637)+_0x5b73a1(0x5d4)][_0x5b73a1(0x61c)](_0x4f7bf6['id']),this[_0x5b73a1(0x45d)+_0x5b73a1(0x637)+_0x5b73a1(0x5d4)][_0x5b73a1(0x558)]((_0x223f95,_0x414924)=>_0x223f95-_0x414924);Game_Actor[_0x5b73a1(0x4a2)+_0x5b73a1(0x497)][_0x5b73a1(0x647)+_0x5b73a1(0x54f)]&&$gameSystem[_0x5b73a1(0x2aa)+'siveComman'+_0x5b73a1(0x483)]()&&(this[_0x5b73a1(0x603)+_0x5b73a1(0x4ad)+_0x5b73a1(0x691)](_0x4f7bf6)&&this['processEqu'+_0x5b73a1(0x474)](_0x4f7bf6));if(!_0x22edc5&&TextManager[_0x5b73a1(0x4a2)+_0x5b73a1(0x497)][_0x5b73a1(0x636)+'extPopup']&&_0x593ad1[_0x5b73a1(0x57d)](this,$gameActors[_0x5b73a1(0x45a)](this[_0x5b73a1(0x1d7)]()))){const _0x423127=TextManager['EQUIP_PASS'+_0x5b73a1(0x497)]['textPopupF'+'mt'],_0xe4d898=DataManager['getEquipPa'+'ssiveName'](_0x4f7bf6),_0x1dd4df=_0x593ad1[_0x5b73a1(0x59e)][_0x5b73a1(0x4c1)](DataManager[_0x5b73a1(0x23b)+_0x5b73a1(0x515)](_0x4f7bf6)),_0x4fbfcd=_0x423127[_0x5b73a1(0x4c1)](this['name'](),_0xe4d898,_0x1dd4df);_0x593ad1['oVgDb']($textPopup,_0x4fbfcd);}this[_0x5b73a1(0x5c4)+_0x5b73a1(0x4ae)+_0x5b73a1(0x4ba)](_0x4f7bf6,_0x22edc5),this[_0x5b73a1(0x5c4)+_0x5b73a1(0x49e)+'Passives'](_0x4f7bf6);},Game_Actor[_0x864467(0x5d8)][_0x864467(0x53d)+_0x864467(0x62b)+'e']=function(_0x285748){const _0x17502b=_0x864467,_0x41346f={'tVFIq':_0x17502b(0x67c)+_0x17502b(0x22a),'foJte':function(_0x3b5561,_0x47ae6d){return _0x3b5561===_0x47ae6d;}},_0x346f9f=_0x41346f[_0x17502b(0x53c)][_0x17502b(0x3ca)]('|');let _0x1d104f=0x63f+-0x272*-0x5+-0x1*0x1279;while(!![]){switch(_0x346f9f[_0x1d104f++]){case'0':this[_0x17502b(0x45d)+_0x17502b(0x637)+_0x17502b(0x5d4)][_0x17502b(0x558)]((_0x386079,_0x223489)=>_0x386079-_0x223489);continue;case'1':this[_0x17502b(0x1e2)]();continue;case'2':this['_learnedEq'+'uippablePa'+_0x17502b(0x5d4)]['remove'](_0x285748['id']);continue;case'3':if(!DataManager['isState'](_0x285748))return;continue;case'4':this[_0x17502b(0x3fd)+_0x17502b(0x43a)][_0x17502b(0x2f3)](_0x285748['id']);continue;case'5':if(_0x41346f[_0x17502b(0x649)](this[_0x17502b(0x45d)+'uippablePa'+'ssives'],undefined))this['initEquipP'+_0x17502b(0x548)+'em']();continue;case'6':if(!this['_learnedEq'+_0x17502b(0x637)+'ssives']['includes'](_0x285748['id']))return;continue;}break;}},Game_Actor['prototype'][_0x864467(0x45b)+_0x864467(0x44a)+_0x864467(0x5a7)]=function(_0x737b55){const _0x4b99c7=_0x864467,_0x182b75={'ePCVm':function(_0x5a911b,_0x38c13e){return _0x5a911b===_0x38c13e;}};if(!DataManager[_0x4b99c7(0x1be)](_0x737b55))return![];if(_0x182b75['ePCVm'](this[_0x4b99c7(0x45d)+_0x4b99c7(0x637)+_0x4b99c7(0x5d4)],undefined))this[_0x4b99c7(0x3d8)+'assiveSyst'+'em']();return this[_0x4b99c7(0x45d)+_0x4b99c7(0x637)+'ssives'][_0x4b99c7(0x551)](_0x737b55['id'])||$gameParty['isLearnedE'+'quippedPas'+_0x4b99c7(0x5a7)](_0x737b55);},Game_Actor[_0x864467(0x5d8)]['addUnlearn'+_0x864467(0x528)+'lePassive']=function(_0xa8d9a6){const _0x31db4e=_0x864467,_0x3ff4bf={'jLUar':'0|1|4|2|3','qgZPS':function(_0x4c6697,_0x127e09){return _0x4c6697===_0x127e09;}},_0x298a99=_0x3ff4bf['jLUar'][_0x31db4e(0x3ca)]('|');let _0x14e556=0x15a1+-0x1cb*0xf+0x544;while(!![]){switch(_0x298a99[_0x14e556++]){case'0':if(!DataManager['isState'](_0xa8d9a6))return;continue;case'1':if(_0x3ff4bf[_0x31db4e(0x50c)](this[_0x31db4e(0x1f6)+_0x31db4e(0x299)+_0x31db4e(0x46e)],undefined))this[_0x31db4e(0x3d8)+_0x31db4e(0x548)+'em']();continue;case'2':this[_0x31db4e(0x1f6)+_0x31db4e(0x299)+_0x31db4e(0x46e)][_0x31db4e(0x61c)](_0xa8d9a6['id']);continue;case'3':this[_0x31db4e(0x1f6)+'Equippable'+'Passives']['sort']((_0x286343,_0x430cc6)=>_0x286343-_0x430cc6);continue;case'4':if(this['_learnable'+_0x31db4e(0x299)+_0x31db4e(0x46e)]['includes'](_0xa8d9a6['id']))return;continue;}break;}},Game_Actor[_0x864467(0x5d8)]['removeUnle'+'arnedEquip'+'pablePassi'+'ve']=function(_0x808f8a){const _0x28052e=_0x864467,_0x1d724f={'AlMGf':_0x28052e(0x44e),'GVrHe':function(_0x56338b,_0x381dc1){return _0x56338b===_0x381dc1;}},_0xade1ca=_0x1d724f[_0x28052e(0x4e7)][_0x28052e(0x3ca)]('|');let _0x15e8ba=0x8d+-0x22*-0xd7+-0x1d1b;while(!![]){switch(_0xade1ca[_0x15e8ba++]){case'0':this[_0x28052e(0x1f6)+_0x28052e(0x299)+_0x28052e(0x46e)][_0x28052e(0x2f3)](_0x808f8a['id']);continue;case'1':if(!DataManager[_0x28052e(0x1be)](_0x808f8a))return;continue;case'2':if(!this[_0x28052e(0x1f6)+_0x28052e(0x299)+'Passives']['includes'](_0x808f8a['id']))return;continue;case'3':if(_0x1d724f[_0x28052e(0x3d1)](this[_0x28052e(0x1f6)+_0x28052e(0x299)+_0x28052e(0x46e)],undefined))this[_0x28052e(0x3d8)+'assiveSyst'+'em']();continue;case'4':this['_learnable'+_0x28052e(0x299)+_0x28052e(0x46e)][_0x28052e(0x558)]((_0x4e7465,_0x2878b9)=>_0x4e7465-_0x2878b9);continue;}break;}},Game_Actor[_0x864467(0x5d8)]['setupIniti'+_0x864467(0x1d3)+_0x864467(0x277)+_0x864467(0x43a)]=function(){const _0x267b16=_0x864467,_0x188b26={'gRAUi':function(_0x580700,_0x4007c8){return _0x580700(_0x4007c8);},'UGFyI':function(_0x33daf7,_0x31dfeb){return _0x33daf7(_0x31dfeb);},'kOkMb':function(_0x1e4e35,_0x54f215){return _0x1e4e35>_0x54f215;}},_0x5f5298=VisuMZ[_0x267b16(0x1d0)+_0x267b16(0x479)][_0x267b16(0x503)],_0x43715a=this[_0x267b16(0x45a)]()[_0x267b16(0x379)]||'';if(_0x43715a[_0x267b16(0x231)](_0x5f5298[_0x267b16(0x25c)+_0x267b16(0x4fd)])){const _0x4ed608=_0x188b26['gRAUi'](String,RegExp['$1'])[_0x267b16(0x3ca)](',')[_0x267b16(0x327)](_0x22d679=>_0x22d679['trim']());for(const _0x5a36af of _0x4ed608){const _0x45ab75=/^\d+$/[_0x267b16(0x1d5)](_0x5a36af);let _0x1b787a=0x1*0x5f9+-0x2*-0x28+0x649*-0x1;_0x45ab75?_0x1b787a=_0x188b26['UGFyI'](Number,_0x5a36af):_0x1b787a=DataManager[_0x267b16(0x1cb)+_0x267b16(0x20e)](_0x5a36af),_0x188b26[_0x267b16(0x325)](_0x1b787a,0xaa9*0x1+0x19f7+-0x24a0)&&(!this[_0x267b16(0x45d)+_0x267b16(0x637)+_0x267b16(0x5d4)]['includes'](_0x1b787a)&&this[_0x267b16(0x45d)+'uippablePa'+_0x267b16(0x5d4)][_0x267b16(0x61c)](_0x1b787a));}}},Game_Actor[_0x864467(0x5d8)][_0x864467(0x55f)+_0x864467(0x223)+_0x864467(0x44a)+_0x864467(0x206)]=function(){const _0x25d4c9=_0x864467,_0x48a85b={'brIFH':function(_0x384e18,_0x42fc7a){return _0x384e18(_0x42fc7a);},'nouno':function(_0x3c806b,_0x493730){return _0x3c806b>_0x493730;}},_0x5adbb3=VisuMZ['EquipPassi'+_0x25d4c9(0x479)]['RegExp'],_0x595346=this[_0x25d4c9(0x45a)]()[_0x25d4c9(0x379)]||'';if(_0x595346['match'](_0x5adbb3[_0x25d4c9(0x24b)+_0x25d4c9(0x4fd)])){const _0x55b78d=_0x48a85b['brIFH'](String,RegExp['$1'])['split'](',')[_0x25d4c9(0x327)](_0x97a3a3=>_0x97a3a3[_0x25d4c9(0x22f)]());for(const _0x180d8f of _0x55b78d){const _0x3a4b1f=/^\d+$/[_0x25d4c9(0x1d5)](_0x180d8f);let _0x37d383=-0x24b3+0x1533+0xf80;_0x3a4b1f?_0x37d383=_0x48a85b[_0x25d4c9(0x500)](Number,_0x180d8f):_0x37d383=DataManager[_0x25d4c9(0x1cb)+_0x25d4c9(0x20e)](_0x180d8f);if(_0x48a85b[_0x25d4c9(0x4f3)](_0x37d383,0x263b*-0x1+0x1*-0x701+0x2d3c)){!this[_0x25d4c9(0x45d)+_0x25d4c9(0x637)+_0x25d4c9(0x5d4)][_0x25d4c9(0x551)](_0x37d383)&&this[_0x25d4c9(0x45d)+'uippablePa'+'ssives'][_0x25d4c9(0x61c)](_0x37d383);const _0x262227=$dataStates[_0x37d383];this[_0x25d4c9(0x603)+'ssiveCapac'+_0x25d4c9(0x691)](_0x262227)&&this[_0x25d4c9(0x24f)+'ipPassive'](_0x262227);}}}},Game_Actor[_0x864467(0x5d8)]['availableL'+_0x864467(0x6b4)+_0x864467(0x508)+_0x864467(0x4ba)]=function(){const _0x857710=_0x864467,_0x2f22b1={'wNSID':function(_0x389975,_0x33eecc){return _0x389975===_0x33eecc;}};if(_0x2f22b1[_0x857710(0x668)](this[_0x857710(0x45d)+_0x857710(0x637)+_0x857710(0x5d4)],undefined))this[_0x857710(0x3d8)+_0x857710(0x548)+'em']();let _0xd280e3=[];return _0xd280e3=_0xd280e3['concat'](this[_0x857710(0x45d)+'uippablePa'+'ssives']),_0xd280e3=_0xd280e3[_0x857710(0x69d)]($gameParty['getLearnEq'+_0x857710(0x1e1)+_0x857710(0x519)]()),_0xd280e3=_0xd280e3[_0x857710(0x402)]((_0x1fbbdd,_0x3ce0b6,_0x18511a)=>_0x18511a[_0x857710(0x3ef)](_0x1fbbdd)===_0x3ce0b6),_0xd280e3[_0x857710(0x327)](_0x53bafc=>$dataStates[_0x53bafc])[_0x857710(0x2f3)](null)[_0x857710(0x2f3)](undefined);},Game_Actor[_0x864467(0x5d8)][_0x864467(0x33c)+'nlearnedEq'+'uippablePa'+_0x864467(0x5d4)]=function(){const _0x5e2ebf=_0x864467,_0x5977d7={'YFGJp':function(_0x4fcd7e,_0x13a37e){return _0x4fcd7e===_0x13a37e;}};if(_0x5977d7[_0x5e2ebf(0x5f7)](this['_learnedEq'+_0x5e2ebf(0x637)+_0x5e2ebf(0x5d4)],undefined))this[_0x5e2ebf(0x3d8)+'assiveSyst'+'em']();if(_0x5977d7[_0x5e2ebf(0x5f7)](this[_0x5e2ebf(0x1f6)+_0x5e2ebf(0x299)+_0x5e2ebf(0x46e)],undefined))this['initEquipP'+_0x5e2ebf(0x548)+'em']();let _0x4eac33=this[_0x5e2ebf(0x1f6)+_0x5e2ebf(0x299)+_0x5e2ebf(0x46e)]['clone']();return _0x4eac33=_0x4eac33['concat'](DataManager['getLearnab'+_0x5e2ebf(0x411)+_0x5e2ebf(0x5be)+'Ds'](this)),_0x4eac33=_0x4eac33['concat']($gameParty[_0x5e2ebf(0x2c4)+_0x5e2ebf(0x541)+_0x5e2ebf(0x4c5)+_0x5e2ebf(0x2d5)]()),_0x4eac33=_0x4eac33[_0x5e2ebf(0x402)](_0x2a135d=>!this[_0x5e2ebf(0x45d)+_0x5e2ebf(0x637)+_0x5e2ebf(0x5d4)][_0x5e2ebf(0x551)](_0x2a135d)),_0x4eac33=_0x4eac33[_0x5e2ebf(0x402)]((_0x2b2638,_0x434abd,_0x7036b)=>_0x7036b[_0x5e2ebf(0x3ef)](_0x2b2638)===_0x434abd),_0x4eac33['map'](_0x354e5c=>$dataStates[_0x354e5c])[_0x5e2ebf(0x2f3)](null)[_0x5e2ebf(0x2f3)](undefined);},Game_Actor[_0x864467(0x5d8)]['branchLear'+_0x864467(0x4ae)+_0x864467(0x4ba)]=function(_0x4bd0e6,_0x4f8334){const _0x49cd53=_0x864467,_0x4e622d={'HrVbH':function(_0x3957ff,_0x4119b3){return _0x3957ff(_0x4119b3);},'TeVLy':function(_0x1cd263,_0x34a82f){return _0x1cd263(_0x34a82f);},'zLfng':function(_0x1afc8f,_0x258339){return _0x1afc8f>_0x258339;}},_0x104db4=VisuMZ['EquipPassi'+_0x49cd53(0x479)][_0x49cd53(0x503)],_0x80c8dc=_0x4bd0e6[_0x49cd53(0x379)]||'';if(_0x80c8dc[_0x49cd53(0x231)](_0x104db4['BranchLear'+'n'])){const _0x105ed2=_0x4e622d['HrVbH'](String,RegExp['$1'])[_0x49cd53(0x3ca)](',')[_0x49cd53(0x327)](_0x5852ed=>_0x5852ed[_0x49cd53(0x22f)]());for(const _0x524971 of _0x105ed2){const _0x93c81b=/^\d+$/[_0x49cd53(0x1d5)](_0x524971);let _0x243ee9=-0x1*-0x7d+-0x6d1*0x3+0x16d*0xe;_0x93c81b?_0x243ee9=_0x4e622d['TeVLy'](Number,_0x524971):_0x243ee9=DataManager[_0x49cd53(0x1cb)+'WithName'](_0x524971),_0x4e622d['zLfng'](_0x243ee9,0x1839+-0x220*-0x8+0x2939*-0x1)&&this['learnEquip'+_0x49cd53(0x294)]($dataStates[_0x243ee9],_0x4f8334);}}},Game_Actor[_0x864467(0x5d8)][_0x864467(0x5c4)+_0x864467(0x49e)+_0x864467(0x46e)]=function(_0x58dd1e){const _0x3c10ee=_0x864467,_0x21691f={'rpFWc':function(_0x32c2a0,_0x1d019a){return _0x32c2a0(_0x1d019a);},'zgOXU':function(_0x215ec9,_0x5f5c35){return _0x215ec9(_0x5f5c35);},'iOTAH':function(_0x135ab8,_0x5df384){return _0x135ab8>_0x5df384;}},_0x199fe7=VisuMZ[_0x3c10ee(0x1d0)+_0x3c10ee(0x479)][_0x3c10ee(0x503)],_0x272735=_0x58dd1e[_0x3c10ee(0x379)]||'';if(_0x272735[_0x3c10ee(0x231)](_0x199fe7[_0x3c10ee(0x1f0)+_0x3c10ee(0x23d)])){const _0x19c562=_0x21691f[_0x3c10ee(0x264)](String,RegExp['$1'])[_0x3c10ee(0x3ca)](',')[_0x3c10ee(0x327)](_0x40b899=>_0x40b899['trim']());for(const _0x2b5a9b of _0x19c562){const _0x25d77d=/^\d+$/[_0x3c10ee(0x1d5)](_0x2b5a9b);let _0x490e35=0x4b3+-0x9db+0xa5*0x8;_0x25d77d?_0x490e35=_0x21691f[_0x3c10ee(0x5ab)](Number,_0x2b5a9b):_0x490e35=DataManager[_0x3c10ee(0x1cb)+_0x3c10ee(0x20e)](_0x2b5a9b),_0x21691f['iOTAH'](_0x490e35,-0x4*0x87c+-0x1*0x4f+-0x1*-0x223f)&&this[_0x3c10ee(0x33a)+'edEquippab'+_0x3c10ee(0x27d)]($dataStates[_0x490e35]);}}},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x2f4)+_0x864467(0x350)+_0x864467(0x305)+'tesFromOth'+_0x864467(0x453)]=Game_BattlerBase['prototype'][_0x864467(0x2ab)+'StatesFrom'+_0x864467(0x46c)+'ns'],Game_BattlerBase[_0x864467(0x5d8)][_0x864467(0x2ab)+'StatesFrom'+_0x864467(0x46c)+'ns']=function(){const _0x47aeb3=_0x864467;VisuMZ[_0x47aeb3(0x1d0)+_0x47aeb3(0x479)][_0x47aeb3(0x2f4)+'erBase_add'+_0x47aeb3(0x305)+_0x47aeb3(0x3db)+_0x47aeb3(0x453)][_0x47aeb3(0x349)](this),this[_0x47aeb3(0x3c7)+_0x47aeb3(0x25d)+_0x47aeb3(0x5d2)]();},Game_BattlerBase[_0x864467(0x5d8)][_0x864467(0x3c7)+_0x864467(0x25d)+_0x864467(0x5d2)]=function(){},Game_Actor[_0x864467(0x5d8)]['addEquippa'+_0x864467(0x25d)+_0x864467(0x5d2)]=function(){const _0x214278=_0x864467,_0x3d5441={'rDLJe':_0x214278(0x53a)+_0x214278(0x59f)},_0x2f7fd9=this[_0x214278(0x66c)][_0x3d5441['rDLJe']],_0x46ade9=this[_0x214278(0x634)+_0x214278(0x542)+'Ds']();this[_0x214278(0x66c)][_0x3d5441[_0x214278(0x2e8)]]=_0x2f7fd9['concat'](_0x46ade9);},Game_Actor[_0x864467(0x5d8)][_0x864467(0x6b1)+_0x864467(0x35d)+'apacity']=function(){const _0x2cb2b3=_0x864467;return this[_0x2cb2b3(0x634)+_0x2cb2b3(0x5d4)]()[_0x2cb2b3(0x2b2)]((_0x2dd38d,_0x4587f8)=>_0x2dd38d+DataManager[_0x2cb2b3(0x23b)+_0x2cb2b3(0x38b)](_0x4587f8),-0x2*-0x2ab+-0xdd8+0x6*0x16b);},Game_Actor[_0x864467(0x5d8)][_0x864467(0x6b1)+_0x864467(0x2ea)+_0x864467(0x46d)]=function(){const _0x1554e0=_0x864467,_0x3ecad0={'itbku':function(_0x4734cf,_0x2dd3a2){return _0x4734cf(_0x2dd3a2);}},_0xb8819d=Game_Actor[_0x1554e0(0x4a2)+'IVE_SYS'],_0x1debb3=_0xb8819d['capacityFo'+'rmula'];let _0x16d315=_0xb8819d[_0x1554e0(0x261)+'y'];try{window[_0x1554e0(0x213)]=this,_0x16d315=_0x3ecad0[_0x1554e0(0x5e9)](eval,_0x1debb3),window[_0x1554e0(0x213)]=undefined;}catch(_0xc4ab42){_0x16d315=_0xb8819d[_0x1554e0(0x261)+'y'];}return _0x16d315=_0x16d315[_0x1554e0(0x570)](_0xb8819d[_0x1554e0(0x261)+'y'],_0xb8819d['maxCapacit'+'y']),_0x16d315;},Game_Actor[_0x864467(0x5d8)][_0x864467(0x603)+_0x864467(0x4ad)+_0x864467(0x691)]=function(_0x4c5599){const _0x3b5fec=_0x864467,_0x50476f={'VNxEN':function(_0x1de0a2,_0x3c5185){return _0x1de0a2<=_0x3c5185;},'vBRbW':function(_0x2e66ef,_0x35e725){return _0x2e66ef+_0x35e725;}};if(!_0x4c5599)return![];const _0xd0fa3d=DataManager[_0x3b5fec(0x23b)+_0x3b5fec(0x38b)](_0x4c5599),_0x49e15b=this['equipPassi'+'veCurrentC'+_0x3b5fec(0x1cf)](),_0x1cab87=this['equipPassi'+'veMaxCapac'+_0x3b5fec(0x46d)]();return _0x50476f[_0x3b5fec(0x40a)](_0x50476f[_0x3b5fec(0x4d5)](_0x49e15b,_0xd0fa3d),_0x1cab87);},Game_Actor[_0x864467(0x5d8)][_0x864467(0x4a9)+'rEquipPass'+_0x864467(0x540)+'y']=function(){const _0x23d0c9=_0x864467,_0x4cf36f={'YAuGP':function(_0x456b8f,_0x33af13){return _0x456b8f<=_0x33af13;},'ZLZmp':function(_0x1601f2,_0xe16860){return _0x1601f2<=_0xe16860;}};if(!Game_Actor[_0x23d0c9(0x4a2)+_0x23d0c9(0x497)]['checkOverC'+_0x23d0c9(0x224)])return;let _0x434e49=![];for(;;){if(_0x4cf36f[_0x23d0c9(0x646)](this[_0x23d0c9(0x634)+_0x23d0c9(0x5d4)]()[_0x23d0c9(0x3bb)],0x24a6+0x1f29+-0x43cf))break;if(_0x4cf36f['ZLZmp'](this[_0x23d0c9(0x6b1)+_0x23d0c9(0x35d)+_0x23d0c9(0x1cf)](),this[_0x23d0c9(0x6b1)+_0x23d0c9(0x2ea)+'ity']()))break;const _0x240db7=this[_0x23d0c9(0x634)+_0x23d0c9(0x5d4)]()[_0x23d0c9(0x56d)]();this['removeEqui'+_0x23d0c9(0x584)](_0x240db7),_0x434e49=!![];}_0x434e49&&this['refresh']();},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x38d)+'_changeExp']=Game_Actor['prototype'][_0x864467(0x4ca)],Game_Actor[_0x864467(0x5d8)][_0x864467(0x4ca)]=function(_0x54f3df,_0x14eb70){const _0x5b0175=_0x864467,_0x50929c={'htRPr':function(_0x2bcf6f,_0x3a52f6){return _0x2bcf6f===_0x3a52f6;}},_0x477df9=this[_0x5b0175(0x5b8)];VisuMZ[_0x5b0175(0x1d0)+'veSys'][_0x5b0175(0x38d)+'_changeExp'][_0x5b0175(0x349)](this,_0x54f3df,_0x14eb70);if(_0x50929c[_0x5b0175(0x28c)](this[_0x5b0175(0x5b8)],_0x477df9))return;this[_0x5b0175(0x4a9)+'rEquipPass'+_0x5b0175(0x540)+'y'](),this[_0x5b0175(0x67a)+_0x5b0175(0x5b4)+_0x5b0175(0x5d4)]();},VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x2f4)+_0x864467(0x40c)+'eEnd']=Game_Battler[_0x864467(0x5d8)]['onBattleEn'+'d'],Game_Battler[_0x864467(0x5d8)]['onBattleEn'+'d']=function(){const _0x3521dc=_0x864467;VisuMZ[_0x3521dc(0x1d0)+_0x3521dc(0x479)]['Game_Battl'+_0x3521dc(0x40c)+_0x3521dc(0x274)]['call'](this);if(this[_0x3521dc(0x1bd)]())this['checkLearn'+_0x3521dc(0x5b4)+_0x3521dc(0x5d4)]();},Game_Actor[_0x864467(0x5d8)][_0x864467(0x67a)+'NewEquipPa'+_0x864467(0x5d4)]=function(){const _0x12a848=_0x864467,_0x3481f5=this['availableU'+'nlearnedEq'+_0x12a848(0x637)+_0x12a848(0x5d4)]();for(const _0x27afe3 of _0x3481f5){if(!_0x27afe3)continue;if(this[_0x12a848(0x45b)+'quippedPas'+_0x12a848(0x5a7)](_0x27afe3))continue;VisuMZ['EquipPassi'+_0x12a848(0x479)]['MeetsLearn'+_0x12a848(0x4d7)](this,_0x27afe3)&&this[_0x12a848(0x3a9)+_0x12a848(0x294)](_0x27afe3);}},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x667)+_0x864467(0x4d7)]=function(_0x203ebc,_0x1600aa){const _0x325399=_0x864467,_0x203f22={'zhIkC':function(_0x3d94bf,_0x102b1e){return _0x3d94bf(_0x102b1e);},'vhyOj':function(_0x5d7761,_0x1529f2){return _0x5d7761>_0x1529f2;},'JZwCK':function(_0x3e2121,_0x1033cc){return _0x3e2121(_0x1033cc);},'yCqOj':_0x325399(0x242),'TMwOf':_0x325399(0x239),'KeFTQ':_0x325399(0x54e),'aDMEl':_0x325399(0x390),'osOTX':function(_0x6f6711,_0x14f551){return _0x6f6711(_0x14f551);},'MNlZi':function(_0xb48eed,_0x223b59){return _0xb48eed>_0x223b59;},'KFavo':'defeat','bacJd':function(_0xb3cb77,_0x11b3cf){return _0xb3cb77(_0x11b3cf);},'DRXBu':'actionTime'+'s','qPVny':_0x325399(0x559),'DqOwa':function(_0x434fee,_0x22d941){return _0x434fee>_0x22d941;},'tbhhT':'guard','mrjCJ':_0x325399(0x2c3),'yCnSu':function(_0x497b71,_0x76a390){return _0x497b71>_0x76a390;},'yhpWI':'physicalSk'+_0x325399(0x4c4),'sRDjY':function(_0x5689a3,_0x40b14c){return _0x5689a3(_0x40b14c);},'mVMPT':function(_0x2aa058,_0x450ebb){return _0x2aa058>_0x450ebb;},'zVisO':_0x325399(0x266)+'ll','bwtZK':_0x325399(0x538)+_0x325399(0x1ce),'TSIKy':function(_0x21b0ad,_0x27140c){return _0x21b0ad>_0x27140c;},'isYuD':_0x325399(0x3c3),'jTWvZ':_0x325399(0x36d),'FkTOt':_0x325399(0x552),'NKddU':function(_0xd8d0ac,_0x22eb06){return _0xd8d0ac(_0x22eb06);},'JgVVP':function(_0x347573,_0x5c6371){return _0x347573>_0x5c6371;},'mDgbz':'miss','uwrRg':function(_0x242c58,_0x1f0429){return _0x242c58(_0x1f0429);},'OQiXz':_0x325399(0x467),'oLVtq':_0x325399(0x404),'MdrQX':_0x325399(0x29c)+'l','TVLKU':function(_0x387a40,_0xcbf92e){return _0x387a40(_0xcbf92e);},'DuVih':_0x325399(0x377)+'e','FulAN':function(_0x338c0d,_0x2d8d7b){return _0x338c0d(_0x2d8d7b);},'ZsVBG':function(_0x5a7d2d,_0x5b1563){return _0x5a7d2d>_0x5b1563;},'eIunh':_0x325399(0x6b3),'quXUg':function(_0x1f066c,_0x912b89){return _0x1f066c(_0x912b89);},'eLuhG':function(_0x3f7121,_0x1c44f9){return _0x3f7121>_0x1c44f9;},'boGjh':'stateTake','IHYvR':function(_0x2d4e7f,_0x54d251){return _0x2d4e7f(_0x54d251);},'MuFLw':function(_0x369861,_0x73cf17){return _0x369861(_0x73cf17);},'hYruf':_0x325399(0x3e8)+'r','IygUD':_0x325399(0x44d),'zLCAA':function(_0x5916ac,_0x3c39e8){return _0x5916ac(_0x3c39e8);},'KtSsr':'dmgTake','BjJCv':function(_0x48b28e,_0x14bad2){return _0x48b28e(_0x14bad2);},'UgaKL':_0x325399(0x546),'AzblS':function(_0x288104,_0x698824){return _0x288104>_0x698824;},'AXdWT':'healTake','fsqUA':function(_0x7150e8,_0x54469f){return _0x7150e8>_0x54469f;},'aNRTL':_0x325399(0x454),'URqhs':_0x325399(0x308),'FtuXb':function(_0x3580cb,_0x41345c){return _0x3580cb(_0x41345c);},'wjSks':function(_0x588593,_0x3fa964){return _0x588593>_0x3fa964;},'wISaV':_0x325399(0x337),'JkCeU':function(_0x5f2b2c,_0x4c41d6){return _0x5f2b2c(_0x4c41d6);},'cRlsU':_0x325399(0x3d0),'bFQPn':function(_0x40eaa2,_0x524b54){return _0x40eaa2>_0x524b54;},'aIPCl':function(_0xca656d,_0x3d7bc8){return _0xca656d(_0x3d7bc8);},'qpJYo':function(_0x1b99f5,_0x3320ab){return _0x1b99f5(_0x3320ab);},'gpWLy':function(_0x2af02b,_0x307226){return _0x2af02b(_0x307226);},'VRdSb':function(_0x84e5cf,_0x15e65e){return _0x84e5cf(_0x15e65e);},'HeCNZ':function(_0x19ec08,_0x502001){return _0x19ec08(_0x502001);},'KIJBt':function(_0x465fd4,_0x10c68b){return _0x465fd4>_0x10c68b;},'niBdX':function(_0x4c7cea,_0xad0d98){return _0x4c7cea===_0xad0d98;},'ARLTl':_0x325399(0x3a1),'FksNf':'MAXHP','ltVgZ':_0x325399(0x6ae),'eifYu':function(_0x2e1bb5,_0x9abfee){return _0x2e1bb5===_0x9abfee;},'hEczw':_0x325399(0x33b),'BsZdY':_0x325399(0x695),'oKYNH':function(_0x378bbc,_0x267b4f){return _0x378bbc===_0x267b4f;},'FzJMk':'MAX\x20MP','yDKlj':_0x325399(0x35c),'BXVyh':_0x325399(0x3d5),'mjddw':_0x325399(0x4ab),'thepd':'MDF','nVmdZ':_0x325399(0x353),'hoSUM':_0x325399(0x59a),'YcuIf':function(_0x24d73b,_0xb456d7){return _0x24d73b(_0xb456d7);},'nkXXv':function(_0x2e80fc,_0x1af500){return _0x2e80fc*_0x1af500;},'ENlmy':function(_0x559acc,_0x101252){return _0x559acc(_0x101252);},'ECWSP':_0x325399(0x61f),'UtVnp':_0x325399(0x659),'DFNqC':_0x325399(0x451),'SZXMY':_0x325399(0x2b1),'RwSZu':_0x325399(0x317),'mTqBb':_0x325399(0x653),'ORXbW':'CNT','qlAtG':_0x325399(0x3f0),'UYlSl':_0x325399(0x5e3),'ARHha':_0x325399(0x2ce),'fSCHG':function(_0x15325c,_0xd2ac6f){return _0x15325c>_0xd2ac6f;},'iKwEL':'TGR','RhXyF':'GRD','ofGqk':'REC','wALSg':_0x325399(0x4b4),'IKRvM':_0x325399(0x21b),'NnJKA':_0x325399(0x204),'tAYIx':_0x325399(0x1dc),'thGkD':'MDR','jqCgr':_0x325399(0x3ec),'WKQFu':_0x325399(0x344)},_0x383959=VisuMZ[_0x325399(0x1d0)+_0x325399(0x479)][_0x325399(0x503)],_0x52f869=_0x1600aa['note']||'';let _0x55c5ab=![];if(!_0x52f869[_0x325399(0x231)](_0x383959['LearnAny']))return _0x55c5ab;if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x49b)])){const _0x1fb753=_0x203f22[_0x325399(0x230)](Number,RegExp['$1']);if(_0x203f22['vhyOj'](_0x1fb753,_0x203ebc['level']))return![];_0x55c5ab=!![];}if(_0x52f869['match'](_0x383959['LearnBattl'+'es'])){const _0x21cc33=_0x203f22[_0x325399(0x3e1)](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x4e8)](_0x21cc33,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x386)],_0x203f22['TMwOf'])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959['LearnVicto'+'ry'])){const _0x33822d=_0x203f22[_0x325399(0x3e1)](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x4e8)](_0x33822d,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x386)],_0x203f22[_0x325399(0x3cf)])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x4f6)+'es'])){const _0x46c5eb=_0x203f22['JZwCK'](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x4e8)](_0x46c5eb,_0x203ebc['getEquipPa'+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x386)],_0x203f22['aDMEl'])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x3c8)+'ts'])){const _0x48d512=_0x203f22[_0x325399(0x267)](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x316)](_0x48d512,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x386)],_0x203f22[_0x325399(0x427)])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959['LearnAttac'+_0x325399(0x680)])){const _0x5266af=_0x203f22['bacJd'](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x316)](_0x5266af,_0x203ebc['getEquipPa'+'ssiveLearn'+'Progress'](_0x1600aa,_0x203f22[_0x325399(0x3d7)],_0x203f22['qPVny'])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x3b8)+_0x325399(0x662)])){const _0x29b9f2=_0x203f22[_0x325399(0x230)](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x52e)](_0x29b9f2,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x3d7)],_0x203f22[_0x325399(0x477)])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x4c3)+_0x325399(0x5ac)])){const _0xa8ddd2=_0x203f22[_0x325399(0x267)](Number,RegExp['$1']);if(_0x203f22['vhyOj'](_0xa8ddd2,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x3d7)],_0x203f22[_0x325399(0x441)])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x23f)+_0x325399(0x43e)])){const _0x25dd4d=_0x203f22[_0x325399(0x3e1)](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x3b9)](_0x25dd4d,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x3d7)],_0x203f22[_0x325399(0x50d)])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x4c2)+'ill'])){const _0xfb184c=_0x203f22['sRDjY'](Number,RegExp['$1']);if(_0x203f22['mVMPT'](_0xfb184c,_0x203ebc[_0x325399(0x23b)+'ssiveLearn'+_0x325399(0x632)](_0x1600aa,_0x203f22['DRXBu'],_0x203f22[_0x325399(0x1c9)])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959['LearnCertS'+_0x325399(0x43e)])){const _0x1ed18b=_0x203f22[_0x325399(0x52a)](Number,RegExp['$1']);if(_0x203f22['MNlZi'](_0x1ed18b,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+'Progress'](_0x1600aa,_0x203f22[_0x325399(0x3d7)],_0x203f22[_0x325399(0x618)])))return![];_0x55c5ab=!![];}if(_0x52f869['match'](_0x383959['LearnItemU'+_0x325399(0x32f)])){const _0x11783b=_0x203f22[_0x325399(0x52a)](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x21e)](_0x11783b,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+'Progress'](_0x1600aa,_0x203f22[_0x325399(0x3d7)],_0x203f22[_0x325399(0x543)])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x6b9)+_0x325399(0x661)+'s'])){const _0x19a356=_0x203f22[_0x325399(0x267)](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x21e)](_0x19a356,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+'Progress'](_0x1600aa,_0x203f22[_0x325399(0x3d7)],_0x203f22[_0x325399(0x58c)])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x424)+_0x325399(0x661)+'s'])){const _0x8a019e=_0x203f22[_0x325399(0x4ec)](Number,RegExp['$1']);if(_0x203f22['vhyOj'](_0x8a019e,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x3d7)],_0x203f22[_0x325399(0x6a1)])))return![];_0x55c5ab=!![];}if(_0x52f869['match'](_0x383959[_0x325399(0x3f5)+_0x325399(0x280)])){const _0x3228e9=_0x203f22[_0x325399(0x412)](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x4c6)](_0x3228e9,_0x203ebc['getEquipPa'+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x3d7)],_0x203f22['mDgbz'])))return![];_0x55c5ab=!![];}if(_0x52f869['match'](_0x383959[_0x325399(0x581)+'Times'])){const _0x42020e=_0x203f22[_0x325399(0x329)](Number,RegExp['$1']);if(_0x203f22['TSIKy'](_0x42020e,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x3d7)],_0x203f22['OQiXz'])))return![];_0x55c5ab=!![];}{const _0x182b14=_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x50e)+_0x325399(0x5ac)]);if(_0x182b14)for(const _0x430a9e of _0x182b14){_0x430a9e[_0x325399(0x231)](_0x383959[_0x325399(0x50e)+_0x325399(0x5ac)]);let _0x44d33c=_0x203f22[_0x325399(0x412)](String,RegExp['$1']);const _0x1229e3=_0x203f22[_0x325399(0x267)](Number,RegExp['$2']),_0x1b03f4=/^\d+$/[_0x325399(0x1d5)](_0x44d33c);_0x44d33c=_0x1b03f4?_0x203f22[_0x325399(0x230)](Number,_0x44d33c):DataManager[_0x325399(0x4db)+_0x325399(0x20e)](_0x44d33c);if(_0x203f22['DqOwa'](_0x1229e3,_0x203ebc['getEquipPa'+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22['oLVtq'],_0x44d33c)))return![];_0x55c5ab=!![];}}{const _0x5262e6=_0x52f869['match'](_0x383959[_0x325399(0x27f)+_0x325399(0x5f8)]);if(_0x5262e6)for(const _0xeb150d of _0x5262e6){_0xeb150d[_0x325399(0x231)](_0x383959[_0x325399(0x27f)+_0x325399(0x5f8)]);let _0x54cf34=_0x203f22['bacJd'](String,RegExp['$1']);const _0x57012d=_0x203f22[_0x325399(0x4ec)](Number,RegExp['$2']),_0x2d7b08=/^\d+$/[_0x325399(0x1d5)](_0x54cf34);_0x54cf34=_0x2d7b08?_0x203f22[_0x325399(0x267)](Number,_0x54cf34):DataManager[_0x325399(0x567)+_0x325399(0x49f)](_0x54cf34);if(_0x203f22['MNlZi'](_0x57012d,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x615)],_0x54cf34)))return![];_0x55c5ab=!![];}}{const _0x56d4a9=_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x27f)+_0x325399(0x293)]);if(_0x56d4a9)for(const _0x152d31 of _0x56d4a9){_0x152d31['match'](_0x383959[_0x325399(0x27f)+_0x325399(0x293)]);let _0x27a4f1=_0x203f22[_0x325399(0x329)](String,RegExp['$1']);const _0x478c06=_0x203f22[_0x325399(0x329)](Number,RegExp['$2']),_0x32a4fd=/^\d+$/[_0x325399(0x1d5)](_0x27a4f1);_0x27a4f1=_0x32a4fd?_0x203f22[_0x325399(0x61a)](Number,_0x27a4f1):DataManager[_0x325399(0x567)+_0x325399(0x49f)](_0x27a4f1);if(_0x203f22[_0x325399(0x526)](_0x478c06,_0x203ebc['getEquipPa'+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x2ef)],_0x27a4f1)))return![];_0x55c5ab=!![];}}{const _0x38558b=_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x511)+_0x325399(0x417)]);if(_0x38558b)for(const _0x177085 of _0x38558b){_0x177085[_0x325399(0x231)](_0x383959['LearnState'+_0x325399(0x417)]);let _0x39a09d=_0x203f22[_0x325399(0x5d1)](String,RegExp['$1']);const _0x49b44a=_0x203f22['NKddU'](Number,RegExp['$2']);_0x39a09d=DataManager['getStateId'+_0x325399(0x20e)](_0x39a09d);if(_0x203f22['ZsVBG'](_0x49b44a,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22['eIunh'],_0x39a09d)))return![];_0x55c5ab=!![];}}{const _0xf88ce9=_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x511)+_0x325399(0x1eb)]);if(_0xf88ce9)for(const _0x36be9e of _0xf88ce9){_0x36be9e[_0x325399(0x231)](_0x383959[_0x325399(0x511)+'Take']);let _0x3d3e05=_0x203f22[_0x325399(0x333)](String,RegExp['$1']);const _0x4f7d77=_0x203f22[_0x325399(0x4ec)](Number,RegExp['$2']);_0x3d3e05=DataManager[_0x325399(0x1cb)+'WithName'](_0x3d3e05);if(_0x203f22[_0x325399(0x232)](_0x4f7d77,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x61e)],_0x3d3e05)))return![];_0x55c5ab=!![];}}if(Imported[_0x325399(0x1fa)+_0x325399(0x428)+_0x325399(0x64b)]){const _0xc8adb0=_0x52f869['match'](_0x383959[_0x325399(0x3c8)+_0x325399(0x1f1)]);if(_0xc8adb0)for(const _0x471453 of _0xc8adb0){_0x471453['match'](_0x383959['LearnDefea'+_0x325399(0x1f1)]);const _0x2da72a=_0x203f22[_0x325399(0x47e)](String,RegExp['$1'])['toUpperCas'+'e']()[_0x325399(0x22f)](),_0x5f0311=_0x203f22[_0x325399(0x23e)](Number,RegExp['$2']);if(_0x203f22[_0x325399(0x5ba)](_0x5f0311,_0x203ebc['getEquipPa'+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x287)],_0x2da72a)))return![];_0x55c5ab=!![];}}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x3cb)+_0x325399(0x309)])){const _0x28fa22=_0x203f22['osOTX'](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x3b9)](_0x28fa22,_0x203ebc[_0x325399(0x23b)+'ssiveLearn'+_0x325399(0x632)](_0x1600aa,'hp',_0x203f22[_0x325399(0x57c)])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x3cb)+_0x325399(0x29a)])){const _0x57afc8=_0x203f22['zLCAA'](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x5ba)](_0x57afc8,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,'hp',_0x203f22[_0x325399(0x380)])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x3cb)+'HealDeal'])){const _0x448656=_0x203f22[_0x325399(0x366)](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x4e8)](_0x448656,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,'hp',_0x203f22['UgaKL'])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x3cb)+_0x325399(0x4ce)])){const _0x478261=_0x203f22[_0x325399(0x366)](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x64d)](_0x478261,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,'hp',_0x203f22[_0x325399(0x2ed)])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x256)+'Kills'])){const _0xe26c04=_0x203f22[_0x325399(0x366)](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x388)](_0xe26c04,_0x203ebc['getEquipPa'+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x609)],_0x203f22['URqhs'])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x256)+_0x325399(0x2a0)])){const _0x54e89e=_0x203f22['FtuXb'](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x203)](_0x54e89e,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+'Progress'](_0x1600aa,_0x203f22[_0x325399(0x609)],_0x203f22[_0x325399(0x410)])))return![];_0x55c5ab=!![];}if(_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x256)+_0x325399(0x4f8)])){const _0x4f8465=_0x203f22[_0x325399(0x4f4)](Number,RegExp['$1']);if(_0x203f22[_0x325399(0x4c6)](_0x4f8465,_0x203ebc[_0x325399(0x23b)+_0x325399(0x673)+_0x325399(0x632)](_0x1600aa,_0x203f22[_0x325399(0x609)],_0x203f22[_0x325399(0x38a)])))return![];_0x55c5ab=!![];}if(_0x52f869['match'](_0x383959[_0x325399(0x54a)+_0x325399(0x2a6)])){const _0x27755b=_0x203f22[_0x325399(0x329)](Number,RegExp['$1']);if(_0x203f22['bFQPn'](_0x27755b,$gameParty['gold']()))return![];_0x55c5ab=!![];}{const _0x42e893=_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x1ec)+_0x325399(0x45f)]);if(_0x42e893)for(const _0x7c7a74 of _0x42e893){_0x7c7a74[_0x325399(0x231)](_0x383959[_0x325399(0x1ec)+_0x325399(0x45f)]);const _0x3171b0=_0x203f22['aIPCl'](String,RegExp['$1']),_0x58709c=_0x203f22[_0x325399(0x59d)](Number,RegExp['$2']),_0x1bc4ed=/^\d+$/[_0x325399(0x1d5)](_0x3171b0),_0x134ac0=_0x1bc4ed?_0x203f22[_0x325399(0x5d1)](Number,_0x3171b0):DataManager[_0x325399(0x5dd)+_0x325399(0x683)](_0x3171b0),_0x3671e1=$dataItems[_0x134ac0];if(!_0x3671e1)continue;if(_0x203f22['DqOwa'](_0x58709c,$gameParty[_0x325399(0x2bb)](_0x3671e1)))return![];_0x55c5ab=!![];}}{const _0x3f7af9=_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x648)+_0x325399(0x2c7)]);if(_0x3f7af9)for(const _0xddf0b5 of _0x3f7af9){_0xddf0b5['match'](_0x383959[_0x325399(0x648)+_0x325399(0x2c7)]);const _0x149e54=_0x203f22[_0x325399(0x333)](String,RegExp['$1']),_0x58c663=_0x203f22[_0x325399(0x622)](Number,RegExp['$2']),_0xe15e6d=/^\d+$/[_0x325399(0x1d5)](_0x149e54),_0x1699c3=_0xe15e6d?_0x203f22[_0x325399(0x549)](Number,_0x149e54):DataManager['getWeaponI'+_0x325399(0x365)](_0x149e54),_0x2c9cd9=$dataWeapons[_0x1699c3];if(!_0x2c9cd9)continue;if(_0x203f22['mVMPT'](_0x58c663,$gameParty[_0x325399(0x2bb)](_0x2c9cd9)))return![];_0x55c5ab=!![];}}{const _0x162f51=_0x52f869['match'](_0x383959[_0x325399(0x22c)+'rmor']);if(_0x162f51)for(const _0x1d075d of _0x162f51){_0x1d075d[_0x325399(0x231)](_0x383959[_0x325399(0x22c)+'rmor']);const _0x5383fd=_0x203f22[_0x325399(0x366)](String,RegExp['$1']),_0x5834e6=_0x203f22[_0x325399(0x675)](Number,RegExp['$2']),_0x38f776=/^\d+$/['test'](_0x5383fd),_0x41b2b0=_0x38f776?_0x203f22[_0x325399(0x272)](Number,_0x5383fd):DataManager[_0x325399(0x522)+_0x325399(0x20e)](_0x5383fd),_0x214dcf=$dataArmors[_0x41b2b0];if(!_0x214dcf)continue;if(_0x203f22[_0x325399(0x4b1)](_0x5834e6,$gameParty['numItems'](_0x214dcf)))return![];_0x55c5ab=!![];}}{const _0x145620=_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x63d)+_0x325399(0x60f)]);if(_0x145620)for(const _0x2cda55 of _0x145620){_0x2cda55['match'](_0x383959[_0x325399(0x63d)+_0x325399(0x60f)]);let _0x5606fb=_0x203f22[_0x325399(0x366)](String,RegExp['$1'])[_0x325399(0x5c8)+'e']()[_0x325399(0x22f)]();const _0xbb6a0f=_0x203f22[_0x325399(0x4f4)](Number,RegExp['$2']);if(_0x203f22[_0x325399(0x553)](_0x5606fb,_0x203f22['ARLTl']))_0x5606fb=_0x203f22[_0x325399(0x2fe)];if(_0x203f22[_0x325399(0x553)](_0x5606fb,_0x203f22['ltVgZ']))_0x5606fb=_0x203f22[_0x325399(0x2fe)];if(_0x203f22['eifYu'](_0x5606fb,_0x203f22['hEczw']))_0x5606fb=_0x203f22[_0x325399(0x2ac)];if(_0x203f22['oKYNH'](_0x5606fb,_0x203f22[_0x325399(0x4f9)]))_0x5606fb=_0x203f22['BsZdY'];const _0x467978=[_0x203f22[_0x325399(0x2fe)],_0x203f22[_0x325399(0x2ac)],_0x203f22[_0x325399(0x481)],_0x203f22['BXVyh'],_0x203f22[_0x325399(0x4bf)],_0x203f22[_0x325399(0x205)],_0x203f22[_0x325399(0x3e7)],_0x203f22['hoSUM']],_0x2e1267=_0x467978['indexOf'](_0x5606fb);if(_0x203f22[_0x325399(0x4c6)](_0xbb6a0f,_0x203ebc[_0x325399(0x62d)](_0x2e1267)))return![];_0x55c5ab=!![];}}{const _0x426921=_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x3dc)+'Param']);if(_0x426921)for(const _0x86ccf8 of _0x426921){_0x86ccf8[_0x325399(0x231)](_0x383959[_0x325399(0x3dc)+_0x325399(0x4d8)]);let _0x33eaf8=_0x203f22['YcuIf'](String,RegExp['$1'])[_0x325399(0x5c8)+'e']()[_0x325399(0x22f)]();const _0x410413=_0x203f22[_0x325399(0x67f)](_0x203f22[_0x325399(0x259)](Number,RegExp['$2']),-0xcab*0x1+-0x12ce+0x1f79+0.01),_0x1ac668=[_0x203f22[_0x325399(0x351)],_0x203f22[_0x325399(0x24e)],_0x203f22[_0x325399(0x2b8)],_0x203f22[_0x325399(0x20b)],_0x203f22[_0x325399(0x32d)],_0x203f22['mTqBb'],_0x203f22[_0x325399(0x307)],_0x203f22[_0x325399(0x5da)],_0x203f22[_0x325399(0x5a3)],_0x203f22[_0x325399(0x498)]],_0x110f6e=_0x1ac668[_0x325399(0x3ef)](_0x33eaf8);if(_0x203f22[_0x325399(0x63b)](_0x410413,_0x203ebc['xparam'](_0x110f6e)))return![];_0x55c5ab=!![];}}{const _0x192778=_0x52f869[_0x325399(0x231)](_0x383959[_0x325399(0x3f7)+_0x325399(0x4d8)]);if(_0x192778)for(const _0x10a219 of _0x192778){_0x10a219[_0x325399(0x231)](_0x383959[_0x325399(0x3f7)+_0x325399(0x4d8)]);let _0x13d927=_0x203f22[_0x325399(0x5eb)](String,RegExp['$1'])[_0x325399(0x5c8)+'e']()[_0x325399(0x22f)]();const _0x5c6bc0=_0x203f22[_0x325399(0x67f)](_0x203f22[_0x325399(0x5eb)](Number,RegExp['$2']),-0xee+0xc1f*-0x1+-0xd0d*-0x1+0.01),_0x2c30f1=[_0x203f22[_0x325399(0x640)],_0x203f22[_0x325399(0x62a)],_0x203f22[_0x325399(0x269)],_0x203f22['wALSg'],_0x203f22['IKRvM'],_0x203f22[_0x325399(0x672)],_0x203f22[_0x325399(0x566)],_0x203f22[_0x325399(0x1c3)],_0x203f22[_0x325399(0x491)],_0x203f22[_0x325399(0x216)]],_0x32cfbb=_0x2c30f1[_0x325399(0x3ef)](_0x13d927);if(_0x203f22[_0x325399(0x4e8)](_0x5c6bc0,_0x203ebc[_0x325399(0x2c2)](_0x32cfbb)))return![];_0x55c5ab=!![];}}return _0x55c5ab;},Game_Actor['prototype'][_0x864467(0x23b)+_0x864467(0x673)+_0x864467(0x632)]=function(_0x446f8f,_0x5c6fe5,_0x397ab6){const _0x342735=_0x864467,_0x3eb955={'CePQC':_0x342735(0x282)+'3'},_0x7c1e4=_0x3eb955[_0x342735(0x31a)]['split']('|');let _0x35a696=0x169c*0x1+0x1*0x63a+-0x1cd6*0x1;while(!![]){switch(_0x7c1e4[_0x35a696++]){case'0':this['_equipPass'+'iveLearnPr'+_0x342735(0x6af)][_0x446f8f]=this[_0x342735(0x28e)+_0x342735(0x4dd)+_0x342735(0x6af)][_0x446f8f]||{};continue;case'1':this['_equipPass'+_0x342735(0x4dd)+_0x342735(0x6af)]=this[_0x342735(0x28e)+_0x342735(0x4dd)+_0x342735(0x6af)]||{};continue;case'2':this[_0x342735(0x28e)+_0x342735(0x4dd)+_0x342735(0x6af)][_0x446f8f][_0x5c6fe5][_0x397ab6]=this[_0x342735(0x28e)+_0x342735(0x4dd)+_0x342735(0x6af)][_0x446f8f][_0x5c6fe5][_0x397ab6]||0x3b*-0x15+0x1*0x28b+0x24c;continue;case'3':return this[_0x342735(0x28e)+'iveLearnPr'+'ogress'][_0x446f8f][_0x5c6fe5][_0x397ab6];case'4':_0x446f8f=_0x446f8f['id']||_0x446f8f;continue;case'5':this[_0x342735(0x28e)+_0x342735(0x4dd)+_0x342735(0x6af)][_0x446f8f][_0x5c6fe5]=this[_0x342735(0x28e)+_0x342735(0x4dd)+'ogress'][_0x446f8f][_0x5c6fe5]||{};continue;}break;}},Game_Actor['prototype'][_0x864467(0x421)+_0x864467(0x34c)+_0x864467(0x55c)+'s']=function(_0x3362b8,_0x524f6e,_0x33a7e9,_0x386605){const _0xf46980=_0x864467,_0x236a6a={'FxRCT':_0xf46980(0x4bb)+'2'},_0x4a271c=_0x236a6a['FxRCT'][_0xf46980(0x3ca)]('|');let _0xb149d=0x10*0x17c+-0x1*-0x2572+-0x3d32;while(!![]){switch(_0x4a271c[_0xb149d++]){case'0':this['_equipPass'+_0xf46980(0x4dd)+'ogress']=this['_equipPass'+_0xf46980(0x4dd)+'ogress']||{};continue;case'1':this[_0xf46980(0x28e)+_0xf46980(0x4dd)+_0xf46980(0x6af)][_0x3362b8][_0x524f6e]=this[_0xf46980(0x28e)+'iveLearnPr'+_0xf46980(0x6af)][_0x3362b8][_0x524f6e]||{};continue;case'2':this[_0xf46980(0x28e)+_0xf46980(0x4dd)+_0xf46980(0x6af)][_0x3362b8][_0x524f6e][_0x33a7e9]+=_0x386605;continue;case'3':this['_equipPass'+_0xf46980(0x4dd)+'ogress'][_0x3362b8][_0x524f6e][_0x33a7e9]=this[_0xf46980(0x28e)+_0xf46980(0x4dd)+_0xf46980(0x6af)][_0x3362b8][_0x524f6e][_0x33a7e9]||-0xe99*0x1+0x26b*0x5+0x282;continue;case'4':_0x3362b8=_0x3362b8['id']||_0x3362b8;continue;case'5':this[_0xf46980(0x28e)+_0xf46980(0x4dd)+_0xf46980(0x6af)][_0x3362b8]=this[_0xf46980(0x28e)+_0xf46980(0x4dd)+_0xf46980(0x6af)][_0x3362b8]||{};continue;}break;}},VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x2f4)+_0x864467(0x64f)+'BattleCore'+'JS']=Game_Battler['prototype'][_0x864467(0x3d6)+_0x864467(0x433)],Game_Battler['prototype'][_0x864467(0x3d6)+_0x864467(0x433)]=function(_0x3956bd){const _0x3098ca=_0x864467,_0x164695={'lNGii':function(_0x54a937,_0x3d97dd){return _0x54a937===_0x3d97dd;},'iaMtB':_0x3098ca(0x321)+_0x3098ca(0x29f),'ikCmw':function(_0x110550,_0x2b2863){return _0x110550===_0x2b2863;},'gZpCv':'EscapeSucc'+_0x3098ca(0x674),'HEbnt':_0x3098ca(0x41f)+_0x3098ca(0x499)};VisuMZ[_0x3098ca(0x1d0)+_0x3098ca(0x479)][_0x3098ca(0x2f4)+'er_process'+_0x3098ca(0x387)+'JS']['call'](this,_0x3956bd);if(!this[_0x3098ca(0x1bd)]())return;if(_0x164695[_0x3098ca(0x1ea)](_0x3956bd,_0x164695[_0x3098ca(0x1e0)]))this[_0x3098ca(0x421)+_0x3098ca(0x65b)+'ttleVictor'+'y']();else{if(_0x164695['ikCmw'](_0x3956bd,_0x164695[_0x3098ca(0x2db)]))this[_0x3098ca(0x421)+_0x3098ca(0x65b)+_0x3098ca(0x578)]();else _0x164695[_0x3098ca(0x1ea)](_0x3956bd,_0x164695['HEbnt'])&&this[_0x3098ca(0x421)+'pPassiveBa'+_0x3098ca(0x4de)]();}},Game_Actor['prototype'][_0x864467(0x421)+_0x864467(0x65b)+_0x864467(0x3f2)+'y']=function(){const _0x46b2dc=_0x864467,_0xa25cba={'ZFvlE':_0x46b2dc(0x242),'qqOCn':_0x46b2dc(0x239),'evGSC':_0x46b2dc(0x54e)},_0x59f284=VisuMZ[_0x46b2dc(0x1d0)+_0x46b2dc(0x479)][_0x46b2dc(0x503)],_0x110633=this['availableU'+'nlearnedEq'+_0x46b2dc(0x637)+_0x46b2dc(0x5d4)]();for(const _0x886b50 of _0x110633){if(!_0x886b50)continue;const _0x5350a9=_0x886b50[_0x46b2dc(0x379)]||'';_0x5350a9[_0x46b2dc(0x231)](_0x59f284[_0x46b2dc(0x301)+'es'])&&this['updateEqui'+_0x46b2dc(0x34c)+_0x46b2dc(0x55c)+'s'](_0x886b50,_0xa25cba[_0x46b2dc(0x3b0)],_0xa25cba[_0x46b2dc(0x59c)],-0x5a0+-0xf52+0x14f3),_0x5350a9[_0x46b2dc(0x231)](_0x59f284['LearnVicto'+'ry'])&&this[_0x46b2dc(0x421)+_0x46b2dc(0x34c)+_0x46b2dc(0x55c)+'s'](_0x886b50,_0xa25cba['ZFvlE'],_0xa25cba[_0x46b2dc(0x33e)],-0x232d*-0x1+0x1*-0x23f6+0xca*0x1);}},Game_Actor[_0x864467(0x5d8)][_0x864467(0x421)+_0x864467(0x65b)+_0x864467(0x578)]=function(){const _0x5ba176=_0x864467,_0x1e1058={'DviBE':_0x5ba176(0x242),'IcayJ':_0x5ba176(0x239),'liqpF':'escape'},_0x47ccb8=VisuMZ['EquipPassi'+'veSys'][_0x5ba176(0x503)],_0x3b384b=this[_0x5ba176(0x33c)+_0x5ba176(0x58f)+_0x5ba176(0x637)+_0x5ba176(0x5d4)]();for(const _0x55da5c of _0x3b384b){if(!_0x55da5c)continue;const _0x451daa=_0x55da5c['note']||'';_0x451daa[_0x5ba176(0x231)](_0x47ccb8[_0x5ba176(0x301)+'es'])&&this[_0x5ba176(0x421)+'pPassiveLe'+_0x5ba176(0x55c)+'s'](_0x55da5c,_0x1e1058[_0x5ba176(0x42c)],_0x1e1058[_0x5ba176(0x6ad)],-0xac1*-0x1+0x298*0xe+-0x2f10),_0x451daa[_0x5ba176(0x231)](_0x47ccb8[_0x5ba176(0x248)+'ry'])&&this[_0x5ba176(0x421)+'pPassiveLe'+_0x5ba176(0x55c)+'s'](_0x55da5c,_0x1e1058['DviBE'],_0x1e1058[_0x5ba176(0x62f)],0x1ae6+-0x1*-0xa85+-0x2*0x12b5);}},Game_Actor['prototype']['updateEqui'+_0x864467(0x65b)+_0x864467(0x4de)]=function(){const _0x28dd1c=_0x864467,_0x29befb={'DhnCX':_0x28dd1c(0x242),'CbMer':'all','SmEmj':_0x28dd1c(0x1e6)},_0x490204=VisuMZ['EquipPassi'+_0x28dd1c(0x479)][_0x28dd1c(0x503)],_0x1c03d4=this[_0x28dd1c(0x33c)+_0x28dd1c(0x58f)+_0x28dd1c(0x637)+_0x28dd1c(0x5d4)]();for(const _0x261417 of _0x1c03d4){if(!_0x261417)continue;const _0xf846ad=_0x261417[_0x28dd1c(0x379)]||'';_0xf846ad[_0x28dd1c(0x231)](_0x490204[_0x28dd1c(0x301)+'es'])&&this['updateEqui'+_0x28dd1c(0x34c)+_0x28dd1c(0x55c)+'s'](_0x261417,_0x29befb[_0x28dd1c(0x63e)],_0x29befb[_0x28dd1c(0x56f)],-0x2d3*-0x1+0x1905+0x1bd7*-0x1),_0xf846ad[_0x28dd1c(0x231)](_0x490204['LearnVicto'+'ry'])&&this[_0x28dd1c(0x421)+_0x28dd1c(0x34c)+_0x28dd1c(0x55c)+'s'](_0x261417,_0x29befb['DhnCX'],_0x29befb[_0x28dd1c(0x313)],0x2443*-0x1+-0x1c64+0x40a8);}},VisuMZ['EquipPassi'+_0x864467(0x479)]['Game_Actio'+_0x864467(0x1f4)+'bal']=Game_Action[_0x864467(0x5d8)]['applyGloba'+'l'],Game_Action['prototype'][_0x864467(0x3fa)+'l']=function(){const _0x408cb8=_0x864467;VisuMZ[_0x408cb8(0x1d0)+_0x408cb8(0x479)][_0x408cb8(0x505)+_0x408cb8(0x1f4)+_0x408cb8(0x45e)][_0x408cb8(0x349)](this),this[_0x408cb8(0x4b5)]()&&this[_0x408cb8(0x4b5)]()[_0x408cb8(0x1bd)]()&&this[_0x408cb8(0x4b5)]()[_0x408cb8(0x421)+'pPassiveAc'+_0x408cb8(0x51a)](this);},Game_Actor[_0x864467(0x5d8)][_0x864467(0x421)+'pPassiveAc'+_0x864467(0x51a)]=function(_0x2d6755){const _0x407d76=_0x864467,_0x44f58b={'Gjekv':_0x407d76(0x3e6)+'s','kjMPb':_0x407d76(0x559),'qWLSd':_0x407d76(0x3a0),'nrBbV':'skill','vCzLh':_0x407d76(0x598)+_0x407d76(0x4c4),'wjAgo':_0x407d76(0x266)+'ll','vzyym':_0x407d76(0x538)+'Skill','PDHmS':'item','QosKi':function(_0x97470,_0x33e397){return _0x97470(_0x33e397);},'pJjuc':function(_0x240c22,_0x3af1c4){return _0x240c22(_0x3af1c4);},'qARvN':function(_0x27ec35,_0x3ed3d9){return _0x27ec35!==_0x3ed3d9;},'CkkZQ':'stype'},_0x4ef2e8=VisuMZ[_0x407d76(0x1d0)+'veSys'][_0x407d76(0x503)],_0x4946e5=this[_0x407d76(0x33c)+_0x407d76(0x58f)+_0x407d76(0x637)+_0x407d76(0x5d4)]();for(const _0x2c55a8 of _0x4946e5){if(!_0x2c55a8)continue;const _0x27f461=_0x2c55a8[_0x407d76(0x379)]||'';_0x27f461['match'](_0x4ef2e8[_0x407d76(0x4b3)+'kTimes'])&&(_0x2d6755['isAttack']()&&this[_0x407d76(0x421)+_0x407d76(0x34c)+_0x407d76(0x55c)+'s'](_0x2c55a8,_0x44f58b[_0x407d76(0x228)],_0x44f58b[_0x407d76(0x1fb)],0x6e3+-0x1*-0x1042+-0x1724));_0x27f461['match'](_0x4ef2e8['LearnGuard'+_0x407d76(0x662)])&&(_0x2d6755[_0x407d76(0x22e)]()&&this[_0x407d76(0x421)+'pPassiveLe'+_0x407d76(0x55c)+'s'](_0x2c55a8,_0x44f58b[_0x407d76(0x228)],_0x44f58b[_0x407d76(0x49d)],-0x12*0x1ae+0x1ed8+-0x9b));_0x27f461[_0x407d76(0x231)](_0x4ef2e8[_0x407d76(0x4c3)+_0x407d76(0x5ac)])&&(_0x2d6755[_0x407d76(0x25b)]()&&!_0x2d6755['isAttack']()&&!_0x2d6755[_0x407d76(0x22e)]()&&this[_0x407d76(0x421)+_0x407d76(0x34c)+_0x407d76(0x55c)+'s'](_0x2c55a8,_0x44f58b[_0x407d76(0x228)],_0x44f58b[_0x407d76(0x4ea)],0x1*-0x12a5+-0x12a3+0x2549));_0x27f461[_0x407d76(0x231)](_0x4ef2e8['LearnPhysS'+_0x407d76(0x43e)])&&(_0x2d6755[_0x407d76(0x25b)]()&&_0x2d6755[_0x407d76(0x5f4)]()&&!_0x2d6755[_0x407d76(0x5c9)]()&&!_0x2d6755[_0x407d76(0x22e)]()&&this[_0x407d76(0x421)+_0x407d76(0x34c)+_0x407d76(0x55c)+'s'](_0x2c55a8,_0x44f58b[_0x407d76(0x228)],_0x44f58b[_0x407d76(0x3bf)],-0x2120+0x1c9e+0xa5*0x7));_0x27f461[_0x407d76(0x231)](_0x4ef2e8['LearnMagSk'+_0x407d76(0x4c4)])&&(_0x2d6755[_0x407d76(0x25b)]()&&_0x2d6755[_0x407d76(0x50f)]()&&!_0x2d6755['isAttack']()&&!_0x2d6755[_0x407d76(0x22e)]()&&this['updateEqui'+'pPassiveLe'+_0x407d76(0x55c)+'s'](_0x2c55a8,_0x44f58b[_0x407d76(0x228)],_0x44f58b[_0x407d76(0x656)],-0x699+-0x7*-0x146+-0x250));_0x27f461[_0x407d76(0x231)](_0x4ef2e8['LearnCertS'+_0x407d76(0x43e)])&&(_0x2d6755['isSkill']()&&_0x2d6755[_0x407d76(0x3e4)+'it']()&&!_0x2d6755[_0x407d76(0x5c9)]()&&!_0x2d6755['isGuard']()&&this[_0x407d76(0x421)+_0x407d76(0x34c)+'arnProgres'+'s'](_0x2c55a8,_0x44f58b[_0x407d76(0x228)],_0x44f58b[_0x407d76(0x347)],-0x946*-0x1+-0x1*-0x8f3+-0x1*0x1238));_0x27f461[_0x407d76(0x231)](_0x4ef2e8[_0x407d76(0x5b7)+_0x407d76(0x32f)])&&(_0x2d6755[_0x407d76(0x3a5)]()&&this[_0x407d76(0x421)+_0x407d76(0x34c)+_0x407d76(0x55c)+'s'](_0x2c55a8,_0x44f58b[_0x407d76(0x228)],_0x44f58b[_0x407d76(0x3c0)],-0x547+0x1*0x469+0xdf));{const _0x3ff671=_0x27f461['match'](_0x4ef2e8[_0x407d76(0x50e)+'Usage']);if(_0x3ff671&&_0x2d6755[_0x407d76(0x25b)]()&&!_0x2d6755[_0x407d76(0x5c9)]()&&!_0x2d6755[_0x407d76(0x22e)]())for(const _0x37580e of _0x3ff671){_0x37580e[_0x407d76(0x231)](_0x4ef2e8['LearnSType'+_0x407d76(0x5ac)]);let _0x3cf145=_0x44f58b['QosKi'](String,RegExp['$1']);const _0x582abb=/^\d+$/['test'](_0x3cf145);_0x3cf145=_0x582abb?_0x44f58b['pJjuc'](Number,_0x3cf145):DataManager['getStypeId'+_0x407d76(0x20e)](_0x3cf145);if(Imported[_0x407d76(0x63f)+_0x407d76(0x51c)+'sCore']){const _0x11627e=DataManager[_0x407d76(0x590)+_0x407d76(0x3d9)](_0x2d6755[_0x407d76(0x3c3)]());if(!_0x11627e[_0x407d76(0x551)](_0x3cf145))continue;}else{if(_0x44f58b[_0x407d76(0x29b)](_0x2d6755[_0x407d76(0x3c3)]()['stypeId'],_0x3cf145))continue;}this[_0x407d76(0x421)+'pPassiveLe'+'arnProgres'+'s'](_0x2c55a8,_0x44f58b[_0x407d76(0x655)],_0x3cf145,-0x1*0x1ff3+-0xbf1*0x2+0x3fd*0xe);}}}},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x505)+_0x864467(0x54c)]=Game_Action[_0x864467(0x5d8)]['apply'],Game_Action[_0x864467(0x5d8)]['apply']=function(_0x4854b6){const _0x2c8180=_0x864467;VisuMZ[_0x2c8180(0x1d0)+'veSys']['Game_Actio'+_0x2c8180(0x54c)]['call'](this,_0x4854b6);const _0x66fcef=_0x4854b6[_0x2c8180(0x2d1)]();this[_0x2c8180(0x4b5)]()[_0x2c8180(0x1bd)]()&&this[_0x2c8180(0x4b5)]()['updateEqui'+_0x2c8180(0x422)+_0x2c8180(0x68c)](_0x66fcef,!![]),_0x4854b6[_0x2c8180(0x1bd)]()&&_0x4854b6[_0x2c8180(0x421)+_0x2c8180(0x422)+_0x2c8180(0x68c)](_0x66fcef,![]);},Game_Actor['prototype'][_0x864467(0x421)+_0x864467(0x422)+'tionResult']=function(_0x590b0e,_0x33a6c8){const _0x3ff208=_0x864467,_0x4d44af={'UKGeu':_0x3ff208(0x6b9)+'ritHitTime'+'s','Ynewm':_0x3ff208(0x424)+_0x3ff208(0x661)+'s','YXJKp':_0x3ff208(0x36d),'RdTye':_0x3ff208(0x552),'HsVfP':_0x3ff208(0x3f5)+_0x3ff208(0x280),'gApOx':_0x3ff208(0x581)+_0x3ff208(0x662),'WotWc':'miss','golQy':'evade','addbj':_0x3ff208(0x3e6)+'s'},_0x45d115=VisuMZ['EquipPassi'+_0x3ff208(0x479)][_0x3ff208(0x503)],_0x152dc2=this['availableU'+'nlearnedEq'+'uippablePa'+'ssives'](),_0x13c191=_0x33a6c8?_0x4d44af['UKGeu']:_0x4d44af['Ynewm'],_0x1c4cb8=_0x33a6c8?_0x4d44af[_0x3ff208(0x339)]:_0x4d44af[_0x3ff208(0x690)],_0x45c703=_0x33a6c8?_0x4d44af[_0x3ff208(0x35a)]:_0x4d44af['gApOx'],_0xf04b05=_0x33a6c8?_0x4d44af[_0x3ff208(0x4cb)]:_0x4d44af[_0x3ff208(0x476)];for(const _0x56d8a5 of _0x152dc2){if(!_0x56d8a5)continue;const _0x41b248=_0x56d8a5['note']||'';_0x41b248[_0x3ff208(0x231)](_0x45d115[_0x13c191])&&(_0x590b0e[_0x3ff208(0x4c0)]&&this['updateEqui'+_0x3ff208(0x34c)+'arnProgres'+'s'](_0x56d8a5,_0x4d44af['addbj'],_0x1c4cb8,0x21a9+-0xf71+-0x1237)),_0x41b248[_0x3ff208(0x231)](_0x45d115[_0x45c703])&&((_0x590b0e[_0x3ff208(0x487)]||_0x590b0e[_0x3ff208(0x5b6)])&&this[_0x3ff208(0x421)+_0x3ff208(0x34c)+_0x3ff208(0x55c)+'s'](_0x56d8a5,_0x4d44af[_0x3ff208(0x5bd)],_0xf04b05,0x123f+0x1261+-0x249f));}},VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x505)+_0x864467(0x51e)+_0x864467(0x425)]=Game_Action[_0x864467(0x5d8)][_0x864467(0x326)+_0x864467(0x1f5)],Game_Action[_0x864467(0x5d8)]['executeDam'+'age']=function(_0x3f20a8,_0x373673){const _0x3d9685=_0x864467,_0x3aa878={'wDtPa':function(_0x1a5754,_0x2c6a7e){return _0x1a5754<=_0x2c6a7e;}};VisuMZ[_0x3d9685(0x1d0)+'veSys'][_0x3d9685(0x505)+'n_executeD'+_0x3d9685(0x425)][_0x3d9685(0x349)](this,_0x3f20a8,_0x373673);if(_0x3aa878[_0x3d9685(0x42a)](_0x373673,-0x7*0x155+-0x65*-0x7+0x690))return;this['subject']()[_0x3d9685(0x1bd)]()&&this[_0x3d9685(0x4b5)]()[_0x3d9685(0x421)+_0x3d9685(0x422)+'tionElemen'+'t'](this,!![]),_0x3f20a8[_0x3d9685(0x1bd)]()&&_0x3f20a8[_0x3d9685(0x421)+_0x3d9685(0x422)+_0x3d9685(0x3fc)+'t'](this,![]);},Game_Actor['prototype'][_0x864467(0x421)+_0x864467(0x422)+_0x864467(0x3fc)+'t']=function(_0x4bd8cf,_0x5a0efc){const _0x4139b7=_0x864467,_0xb89d65={'YHEqZ':function(_0x50f22f,_0x3e43bb){return _0x50f22f<=_0x3e43bb;},'DZPSf':_0x4139b7(0x29c)+'l','YxDFN':_0x4139b7(0x377)+'e','JhAVY':_0x4139b7(0x27f)+'ntDeal','pxCgO':_0x4139b7(0x27f)+'ntTake','oriYG':function(_0x5f4248,_0x35e428){return _0x5f4248(_0x35e428);}},_0x17d12f=VisuMZ['EquipPassi'+'veSys'][_0x4139b7(0x42f)+'s'](_0x4bd8cf);if(_0xb89d65[_0x4139b7(0x627)](_0x17d12f['length'],0xf3b*-0x1+0x2*-0xff2+0x2f1f*0x1))return;const _0x269d69=_0x5a0efc?_0xb89d65['DZPSf']:_0xb89d65[_0x4139b7(0x4e9)],_0x109fc8=VisuMZ[_0x4139b7(0x1d0)+_0x4139b7(0x479)]['RegExp'],_0x1ffa14=_0x5a0efc?_0xb89d65['JhAVY']:_0xb89d65['pxCgO'],_0x1774a2=this[_0x4139b7(0x33c)+_0x4139b7(0x58f)+_0x4139b7(0x637)+'ssives']();for(const _0x3d20ad of _0x1774a2){if(!_0x3d20ad)continue;const _0x176db5=_0x3d20ad[_0x4139b7(0x379)]||'',_0x3c2cbc=_0x176db5[_0x4139b7(0x231)](_0x109fc8[_0x1ffa14]);if(_0x3c2cbc)for(const _0x197b3a of _0x3c2cbc){_0x197b3a['match'](_0x109fc8[_0x1ffa14]);let _0x1bbad2=_0xb89d65[_0x4139b7(0x222)](String,RegExp['$1']);const _0x49f19b=/^\d+$/[_0x4139b7(0x1d5)](_0x1bbad2);_0x1bbad2=_0x49f19b?_0xb89d65[_0x4139b7(0x222)](Number,_0x1bbad2):DataManager[_0x4139b7(0x567)+'IdWithName'](_0x1bbad2),_0x17d12f[_0x4139b7(0x551)](_0x1bbad2)&&this[_0x4139b7(0x421)+_0x4139b7(0x34c)+'arnProgres'+'s'](_0x3d20ad,_0x269d69,_0x1bbad2,-0xf89*0x2+-0x1*0x19cf+0x38e2);}}},VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x42f)+'s']=function(_0x52ed7b){const _0x564e89=_0x864467,_0xc00fe7={'psrog':function(_0xeb9b1,_0x315501){return _0xeb9b1<_0x315501;}};let _0x2a27ed=[];if(Imported['VisuMZ_1_E'+_0x564e89(0x428)+_0x564e89(0x64b)])_0x2a27ed=_0x52ed7b[_0x564e89(0x544)]();else{const _0x2ec460=_0x52ed7b['item']()['damage']['elementId'];_0xc00fe7[_0x564e89(0x5f0)](_0x2ec460,-0x1c5d+0x457*-0x5+0x1908*0x2)?_0x2a27ed=_0x52ed7b[_0x564e89(0x4b5)]()[_0x564e89(0x306)+_0x564e89(0x320)]():_0x2a27ed=[_0x2ec460];}return _0x2a27ed;},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Game_Battl'+_0x864467(0x523)+'e']=Game_Battler[_0x864467(0x5d8)]['addState'],Game_Battler[_0x864467(0x5d8)][_0x864467(0x22d)]=function(_0x10d3cc){const _0x56b210=_0x864467,_0x51df3a={'aXvFf':function(_0x4e08b4,_0x372b3d){return _0x4e08b4===_0x372b3d;},'czTYf':_0x56b210(0x337),'IKczt':function(_0x55b0f9,_0x3ac032){return _0x55b0f9===_0x3ac032;},'uhsYt':_0x56b210(0x308),'IxwtL':'assists'};VisuMZ[_0x56b210(0x1d0)+_0x56b210(0x479)]['Game_Battl'+'er_addStat'+'e']['call'](this,_0x10d3cc);if(this['isStateAff'+_0x56b210(0x539)](_0x10d3cc)){const _0x12d573=BattleManager[_0x56b210(0x53b)];$gameParty[_0x56b210(0x513)]()&&_0x12d573&&_0x12d573[_0x56b210(0x1bd)]()&&_0x12d573['updateEqui'+_0x56b210(0x422)+_0x56b210(0x591)](_0x10d3cc,!![]);this[_0x56b210(0x1bd)]()&&(this['updateEqui'+_0x56b210(0x422)+'tionState'](_0x10d3cc,![]),_0x51df3a[_0x56b210(0x2d8)](_0x10d3cc,this[_0x56b210(0x594)+'Id']())&&this[_0x56b210(0x421)+_0x56b210(0x520)+'a'](_0x51df3a[_0x56b210(0x2e0)]));if(this[_0x56b210(0x440)]()&&_0x51df3a[_0x56b210(0x3d4)](_0x10d3cc,this['deathState'+'Id']())&&BattleManager[_0x56b210(0x53b)]&&BattleManager['_subject'][_0x56b210(0x1bd)]()){BattleManager[_0x56b210(0x53b)][_0x56b210(0x421)+_0x56b210(0x565)+_0x56b210(0x318)](this),BattleManager[_0x56b210(0x53b)][_0x56b210(0x421)+_0x56b210(0x520)+'a'](_0x51df3a['uhsYt']);for(const _0x36bae4 of $gameParty['battleMemb'+_0x56b210(0x2e4)]()){if(!_0x36bae4)continue;if(_0x51df3a[_0x56b210(0x2d8)](_0x36bae4,BattleManager['_subject']))continue;if(!_0x36bae4[_0x56b210(0x40b)]())continue;_0x36bae4['updateEqui'+_0x56b210(0x520)+'a'](_0x51df3a[_0x56b210(0x2e9)]);}}}},Game_Actor[_0x864467(0x5d8)][_0x864467(0x421)+_0x864467(0x422)+'tionState']=function(_0x144ec1,_0x2eea34){const _0x562210=_0x864467,_0x21a14a={'eMObD':_0x562210(0x6b3),'JIcRj':_0x562210(0x56a),'MncyS':'LearnState'+_0x562210(0x417),'iturE':'LearnState'+_0x562210(0x1eb),'YsvhZ':function(_0x370d4d,_0x5c2b2a){return _0x370d4d(_0x5c2b2a);},'mMJHN':function(_0x2adc2f,_0x4073ee){return _0x2adc2f(_0x4073ee);},'gEdBY':function(_0x4e23f7,_0x49f59b){return _0x4e23f7===_0x49f59b;}};if(!$dataStates[_0x144ec1])return;const _0x40459b=_0x2eea34?_0x21a14a[_0x562210(0x244)]:_0x21a14a[_0x562210(0x37f)],_0x1ec67e=VisuMZ[_0x562210(0x1d0)+_0x562210(0x479)]['RegExp'],_0x4fe3af=_0x2eea34?_0x21a14a[_0x562210(0x335)]:_0x21a14a[_0x562210(0x66b)],_0x41a890=this[_0x562210(0x33c)+'nlearnedEq'+_0x562210(0x637)+_0x562210(0x5d4)]();for(const _0x173333 of _0x41a890){if(!_0x173333)continue;const _0x56cc05=_0x173333['note']||'',_0x40125f=_0x56cc05[_0x562210(0x231)](_0x1ec67e[_0x4fe3af]);if(_0x40125f)for(const _0x5e1bf5 of _0x40125f){_0x5e1bf5['match'](_0x1ec67e[_0x4fe3af]);let _0x2addef=_0x21a14a[_0x562210(0x1f7)](String,RegExp['$1']);const _0xa4282c=/^\d+$/['test'](_0x2addef);_0x2addef=_0xa4282c?_0x21a14a[_0x562210(0x3d3)](Number,_0x2addef):DataManager['getStateId'+_0x562210(0x20e)](_0x2addef),_0x21a14a[_0x562210(0x63a)](_0x144ec1,_0x2addef)&&this[_0x562210(0x421)+_0x562210(0x34c)+_0x562210(0x55c)+'s'](_0x173333,_0x40459b,_0x144ec1,-0x10b9*-0x2+-0x53*-0x3b+-0x3492);}}},Game_Actor[_0x864467(0x5d8)][_0x864467(0x421)+'pPassiveTr'+_0x864467(0x318)]=function(_0xc07b20){const _0x1e9db6=_0x864467,_0x4486c8={'yDwSo':function(_0x4f9fc8,_0x3e84a8){return _0x4f9fc8(_0x3e84a8);},'OkdDT':_0x1e9db6(0x3e8)+'r'};if(!_0xc07b20)return;if(!Imported['VisuMZ_1_E'+_0x1e9db6(0x428)+_0x1e9db6(0x64b)])return;const _0x37d62c=VisuMZ['EquipPassi'+_0x1e9db6(0x479)]['RegExp'],_0x25a5c3=this[_0x1e9db6(0x33c)+_0x1e9db6(0x58f)+_0x1e9db6(0x637)+_0x1e9db6(0x5d4)]();for(const _0x3e7b22 of _0x25a5c3){if(!_0x3e7b22)continue;const _0x5027b9=_0x3e7b22[_0x1e9db6(0x379)]||'',_0x2f7333=_0x5027b9[_0x1e9db6(0x231)](_0x37d62c[_0x1e9db6(0x3c8)+_0x1e9db6(0x1f1)]);if(_0x2f7333)for(const _0x2b9848 of _0x2f7333){_0x2b9848[_0x1e9db6(0x231)](_0x37d62c['LearnDefea'+'tTrait']);const _0x2e8fad=_0x4486c8['yDwSo'](String,RegExp['$1'])[_0x1e9db6(0x5c8)+'e']()[_0x1e9db6(0x22f)]();_0xc07b20[_0x1e9db6(0x2fb)+'t'](_0x2e8fad)&&this[_0x1e9db6(0x421)+_0x1e9db6(0x34c)+_0x1e9db6(0x55c)+'s'](_0x3e7b22,_0x4486c8['OkdDT'],_0x2e8fad,-0x26a*0x6+-0xeef+0x1d6c);}}},VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x2f4)+_0x864467(0x28f)]=Game_Battler[_0x864467(0x5d8)][_0x864467(0x39d)],Game_Battler[_0x864467(0x5d8)][_0x864467(0x39d)]=function(_0xa8a51f){const _0x1ce02c=_0x864467,_0x1357e7={'DQLBy':function(_0x47aed4,_0x4184df){return _0x47aed4-_0x4184df;},'TWYTc':function(_0x25f20b,_0x5c1496){return _0x25f20b===_0x5c1496;}},_0xd244cf=this['hp'];VisuMZ[_0x1ce02c(0x1d0)+_0x1ce02c(0x479)][_0x1ce02c(0x2f4)+_0x1ce02c(0x28f)][_0x1ce02c(0x349)](this,_0xa8a51f);const _0x4b957a=_0x1357e7['DQLBy'](this['hp'],_0xd244cf);if(_0x1357e7[_0x1ce02c(0x6a2)](_0x4b957a,-0x206*-0xd+-0x3d*0x1d+0x14b*-0xf))return;if(!$gameParty['inBattle']())return;this['isActor']()&&this['updateEqui'+_0x1ce02c(0x3a3)+_0x1ce02c(0x625)](_0xa8a51f,![]),BattleManager[_0x1ce02c(0x53b)]&&BattleManager[_0x1ce02c(0x53b)]['isActor']()&&BattleManager['_subject'][_0x1ce02c(0x421)+_0x1ce02c(0x3a3)+_0x1ce02c(0x625)](_0xa8a51f,!![]);},Game_Actor[_0x864467(0x5d8)]['updateEqui'+_0x864467(0x3a3)+_0x864467(0x625)]=function(_0x5ece7d,_0xc3a30f){const _0x1d00d8=_0x864467,_0x3baf2f={'UfZgx':_0x1d00d8(0x3cb),'AOoMP':function(_0x2ca412,_0x2b6f01){return _0x2ca412>_0x2b6f01;},'QEMTn':_0x1d00d8(0x485),'dsDEp':'Dmg','ItaJu':'Deal','HTNJy':_0x1d00d8(0x1eb),'WHciV':function(_0x2fb260,_0x3ed75a){return _0x2fb260>_0x3ed75a;},'GxbNS':_0x1d00d8(0x409),'stXAL':'dmg'};if(!Imported[_0x1d00d8(0x1fa)+'lementStat'+'usCore'])return;let _0x343fea=_0x3baf2f[_0x1d00d8(0x1ff)];_0x343fea+=_0x3baf2f[_0x1d00d8(0x238)](_0x5ece7d,0x821*-0x1+-0x7a4*-0x1+0x7d)?_0x3baf2f['QEMTn']:_0x3baf2f[_0x1d00d8(0x5c5)],_0x343fea+=_0xc3a30f?_0x3baf2f['ItaJu']:_0x3baf2f[_0x1d00d8(0x4a4)];let _0x267e44=_0x3baf2f['WHciV'](_0x5ece7d,-0x486+0xb*0x3e+0x1dc)?_0x3baf2f['GxbNS']:_0x3baf2f[_0x1d00d8(0x3c2)];_0x267e44+=_0xc3a30f?_0x3baf2f[_0x1d00d8(0x473)]:_0x3baf2f[_0x1d00d8(0x4a4)];const _0x33af7a=VisuMZ[_0x1d00d8(0x1d0)+_0x1d00d8(0x479)]['RegExp'],_0x8a6962=this[_0x1d00d8(0x33c)+_0x1d00d8(0x58f)+'uippablePa'+_0x1d00d8(0x5d4)]();for(const _0x21af14 of _0x8a6962){if(!_0x21af14)continue;const _0x23cb48=_0x21af14[_0x1d00d8(0x379)]||'';_0x23cb48[_0x1d00d8(0x231)](_0x33af7a[_0x343fea])&&this['updateEqui'+'pPassiveLe'+_0x1d00d8(0x55c)+'s'](_0x21af14,'hp',_0x267e44,Math[_0x1d00d8(0x40f)](_0x5ece7d));}},Game_Actor[_0x864467(0x5d8)][_0x864467(0x421)+_0x864467(0x520)+'a']=function(_0x3c6588){const _0xede3f2=_0x864467,_0x1a0c48={'CJlju':_0xede3f2(0x256)+_0xede3f2(0x4aa),'XrHAV':_0xede3f2(0x256)+_0xede3f2(0x2a0),'goJsX':_0xede3f2(0x256)+_0xede3f2(0x4f8),'CwVOl':_0xede3f2(0x454)},_0x2eae26=VisuMZ[_0xede3f2(0x1d0)+'veSys']['RegExp'],_0x4996dc=this[_0xede3f2(0x33c)+_0xede3f2(0x58f)+_0xede3f2(0x637)+'ssives'](),_0x3364e1={'kills':_0x1a0c48[_0xede3f2(0x253)],'deaths':_0x1a0c48[_0xede3f2(0x361)],'assists':_0x1a0c48[_0xede3f2(0x60c)]},_0x1de7d6=_0x3364e1[_0x3c6588];for(const _0x9681d1 of _0x4996dc){if(!_0x9681d1)continue;const _0x55c89e=_0x9681d1[_0xede3f2(0x379)]||'';_0x55c89e[_0xede3f2(0x231)](_0x2eae26[_0x1de7d6])&&this['updateEqui'+_0xede3f2(0x34c)+_0xede3f2(0x55c)+'s'](_0x9681d1,_0x1a0c48[_0xede3f2(0x3ed)],_0x3c6588,0x11f*0xe+-0x1*0x230b+-0x1*-0x135a);}},VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x38d)+_0x864467(0x4cf)+'l']=Game_Actor[_0x864467(0x5d8)][_0x864467(0x4b7)],Game_Actor[_0x864467(0x5d8)][_0x864467(0x4b7)]=function(_0x3744d9){const _0x5f15fd=_0x864467;VisuMZ[_0x5f15fd(0x1d0)+_0x5f15fd(0x479)][_0x5f15fd(0x38d)+_0x5f15fd(0x4cf)+'l']['call'](this,_0x3744d9),VisuMZ[_0x5f15fd(0x1d0)+'veSys'][_0x5f15fd(0x596)](this,$dataSkills[_0x3744d9]);},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x596)]=function(_0x3a7d27,_0x25da70){const _0x2d1806=_0x864467,_0x2de1fb={'EvENV':function(_0x1377c4,_0xd34631){return _0x1377c4(_0xd34631);},'dZAlz':function(_0x1bfd60,_0x588c8b){return _0x1bfd60(_0x588c8b);},'Ruhub':function(_0x25895d,_0x504ae0){return _0x25895d>_0x504ae0;},'HgSQi':function(_0x525bf2,_0x2103f9){return _0x525bf2(_0x2103f9);}};if(!_0x3a7d27)return;if(!_0x25da70)return;const _0x56db10=VisuMZ[_0x2d1806(0x1d0)+_0x2d1806(0x479)]['RegExp'],_0x25e114=_0x25da70[_0x2d1806(0x379)]||'';if(_0x25e114[_0x2d1806(0x231)](_0x56db10[_0x2d1806(0x290)+_0x2d1806(0x448)])){const _0x5f07a1=_0x2de1fb['EvENV'](String,RegExp['$1'])[_0x2d1806(0x3ca)](',')[_0x2d1806(0x327)](_0x2e23d6=>_0x2e23d6[_0x2d1806(0x22f)]());for(const _0xae2030 of _0x5f07a1){const _0xee19ae=/^\d+$/[_0x2d1806(0x1d5)](_0xae2030);let _0x495366=0x118a*0x1+-0x1353+-0x1*-0x1c9;_0xee19ae?_0x495366=_0x2de1fb[_0x2d1806(0x3c4)](Number,_0xae2030):_0x495366=DataManager[_0x2d1806(0x1cb)+'WithName'](_0xae2030);if(_0x2de1fb[_0x2d1806(0x5af)](_0x495366,0xe83+-0xeb1*0x1+0x2e)){const _0x5d052d=$dataStates[_0x495366];_0x3a7d27[_0x2d1806(0x3a9)+'pedPassive'](_0x5d052d);}}}if(_0x25e114[_0x2d1806(0x231)](_0x56db10[_0x2d1806(0x290)+_0x2d1806(0x3bd)])){const _0x4107e5=_0x2de1fb[_0x2d1806(0x32c)](String,RegExp['$1'])['split'](',')[_0x2d1806(0x327)](_0x4156fe=>_0x4156fe[_0x2d1806(0x22f)]());for(const _0x1d6aac of _0x4107e5){const _0x4d8f24=/^\d+$/[_0x2d1806(0x1d5)](_0x1d6aac);let _0x48c0df=0x9d*0x16+-0x90*-0x2+0x1*-0xe9e;_0x4d8f24?_0x48c0df=_0x2de1fb[_0x2d1806(0x3c4)](Number,_0x1d6aac):_0x48c0df=DataManager[_0x2d1806(0x1cb)+_0x2d1806(0x20e)](_0x1d6aac);if(_0x2de1fb[_0x2d1806(0x5af)](_0x48c0df,-0x5b*-0xd+0xf8d+-0x4*0x50b)){const _0x2243ad=$dataStates[_0x48c0df];_0x3a7d27[_0x2d1806(0x33a)+_0x2d1806(0x528)+_0x2d1806(0x27d)](_0x2243ad);}}}},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Game_Actor'+_0x864467(0x376)]=Game_Actor[_0x864467(0x5d8)][_0x864467(0x1e2)],Game_Actor['prototype'][_0x864467(0x1e2)]=function(){const _0x57c67e=_0x864467;VisuMZ['EquipPassi'+'veSys']['Game_Actor'+_0x57c67e(0x376)][_0x57c67e(0x349)](this);if(this[_0x57c67e(0x607)+_0x57c67e(0x32a)+'Passive'])return;this[_0x57c67e(0x4e1)+_0x57c67e(0x436)+'s']();},Game_Actor['prototype']['unequipHid'+_0x864467(0x436)+'s']=function(){const _0x1311ed=_0x864467,_0x50c79f={'YgldD':function(_0x540c29,_0x2866aa){return _0x540c29>_0x2866aa;}};this['_bypassUne'+_0x1311ed(0x32a)+_0x1311ed(0x341)]=!![];const _0x4add64=this[_0x1311ed(0x634)+_0x1311ed(0x5d4)]()[_0x1311ed(0x402)](_0x381976=>VisuMZ[_0x1311ed(0x1d0)+_0x1311ed(0x479)][_0x1311ed(0x32b)+_0x1311ed(0x6aa)](this,_0x381976));for(const _0x5d162a of _0x4add64){this['removeEqui'+'pPassive'](_0x5d162a);}this['_bypassUne'+_0x1311ed(0x32a)+_0x1311ed(0x341)]=![];if(_0x50c79f[_0x1311ed(0x5bb)](_0x4add64[_0x1311ed(0x3bb)],-0x1ba8+0x3c5*-0x4+-0xa*-0x446)){VisuMZ[_0x1311ed(0x1d0)+_0x1311ed(0x479)]['Game_Actor'+_0x1311ed(0x376)]['call'](this);const _0x424b4f=SceneManager[_0x1311ed(0x405)];_0x424b4f&&_0x424b4f[_0x1311ed(0x2f8)+_0x1311ed(0x354)]&&_0x424b4f[_0x1311ed(0x2f8)+'dow'][_0x1311ed(0x1e2)]();}},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x414)+_0x864467(0x3f8)+'e']=Game_Party['prototype'][_0x864467(0x39c)],Game_Party[_0x864467(0x5d8)][_0x864467(0x39c)]=function(){const _0x4d551b=_0x864467;VisuMZ[_0x4d551b(0x1d0)+'veSys']['Game_Party'+_0x4d551b(0x3f8)+'e']['call'](this),this[_0x4d551b(0x3d8)+_0x4d551b(0x548)+'em']();},Game_Party[_0x864467(0x5d8)][_0x864467(0x3d8)+'assiveSyst'+'em']=function(){const _0x49244e=_0x864467;this[_0x49244e(0x45d)+_0x49244e(0x637)+_0x49244e(0x5d4)]=[],this[_0x49244e(0x1f6)+_0x49244e(0x299)+_0x49244e(0x46e)]=[];},Game_Party[_0x864467(0x5d8)][_0x864467(0x28d)+'uippedPass'+_0x864467(0x519)]=function(){const _0x4e1c8e=_0x864467,_0x269e3a={'MvOpj':function(_0x74cee7,_0xeddc99){return _0x74cee7===_0xeddc99;}};if(_0x269e3a[_0x4e1c8e(0x604)](this['_learnedEq'+'uippablePa'+_0x4e1c8e(0x5d4)],undefined))this[_0x4e1c8e(0x3d8)+'assiveSyst'+'em']();return this[_0x4e1c8e(0x45d)+_0x4e1c8e(0x637)+_0x4e1c8e(0x5d4)];},Game_Party['prototype'][_0x864467(0x3a9)+_0x864467(0x294)]=function(_0x49adee,_0x307640){const _0x41e60b=_0x864467,_0xf2fe85={'OFZVZ':function(_0x7abfec,_0x1cec5a){return _0x7abfec===_0x1cec5a;},'qrsfi':_0x41e60b(0x3b6),'NkRKj':function(_0xf6b341,_0x9e0a82){return _0xf6b341(_0x9e0a82);}};if(!DataManager[_0x41e60b(0x1be)](_0x49adee))return;if(_0xf2fe85['OFZVZ'](this[_0x41e60b(0x45d)+_0x41e60b(0x637)+_0x41e60b(0x5d4)],undefined))this['initEquipP'+'assiveSyst'+'em']();if(this['_learnedEq'+_0x41e60b(0x637)+_0x41e60b(0x5d4)][_0x41e60b(0x551)](_0x49adee['id']))return;this[_0x41e60b(0x45d)+'uippablePa'+'ssives'][_0x41e60b(0x61c)](_0x49adee['id']),this[_0x41e60b(0x45d)+_0x41e60b(0x637)+_0x41e60b(0x5d4)][_0x41e60b(0x558)]((_0x4cb50f,_0x1127aa)=>_0x4cb50f-_0x1127aa),this[_0x41e60b(0x5c4)+'nableEquip'+_0x41e60b(0x46e)](_0x49adee);if(Game_Actor[_0x41e60b(0x4a2)+_0x41e60b(0x497)][_0x41e60b(0x647)+_0x41e60b(0x54f)]&&$gameSystem[_0x41e60b(0x2aa)+_0x41e60b(0x273)+'dVisible']())for(const _0x3afc84 of this[_0x41e60b(0x2cf)]()){if(!_0x3afc84)continue;_0x3afc84[_0x41e60b(0x1e2)](),_0x3afc84['hasEquipPa'+_0x41e60b(0x4ad)+_0x41e60b(0x691)](_0x49adee)&&_0x3afc84[_0x41e60b(0x24f)+'ipPassive'](_0x49adee);}if(!_0x307640&&TextManager[_0x41e60b(0x4a2)+_0x41e60b(0x497)]['learnShowT'+'extPopup']){const _0x2961c4=TextManager[_0x41e60b(0x4a2)+'IVE_SYS'][_0x41e60b(0x698)+'mt'],_0x16f6f3=DataManager[_0x41e60b(0x23b)+_0x41e60b(0x3cd)](_0x49adee),_0x3a7bfb=_0xf2fe85[_0x41e60b(0x2a3)][_0x41e60b(0x4c1)](DataManager['getEquipPa'+_0x41e60b(0x515)](_0x49adee)),_0x3a5524=_0x2961c4[_0x41e60b(0x4c1)](this[_0x41e60b(0x572)](),_0x16f6f3,_0x3a7bfb);_0xf2fe85[_0x41e60b(0x4ac)]($textPopup,_0x3a5524);}},Game_Party[_0x864467(0x5d8)][_0x864467(0x5c4)+'nableEquip'+_0x864467(0x46e)]=function(_0x3f59a7){const _0x3998ec=_0x864467,_0x24cee7={'qFTYe':function(_0xd6a376,_0x457df4){return _0xd6a376(_0x457df4);},'GQsin':function(_0x5dbc45,_0x1336bb){return _0x5dbc45(_0x1336bb);},'Wedru':function(_0x139f93,_0x2a5007){return _0x139f93>_0x2a5007;}},_0x489c03=VisuMZ[_0x3998ec(0x1d0)+'veSys'][_0x3998ec(0x503)],_0xcced66=_0x3f59a7[_0x3998ec(0x379)]||'';if(_0xcced66['match'](_0x489c03[_0x3998ec(0x1f0)+_0x3998ec(0x23d)])){const _0x3e98a3=_0x24cee7[_0x3998ec(0x55b)](String,RegExp['$1'])[_0x3998ec(0x3ca)](',')[_0x3998ec(0x327)](_0x1c6da7=>_0x1c6da7[_0x3998ec(0x22f)]());for(const _0x4159f7 of _0x3e98a3){const _0x65c1c3=/^\d+$/[_0x3998ec(0x1d5)](_0x4159f7);let _0x8fbebd=0x1*0x126e+0x35*-0x16+0x1*-0xde0;_0x65c1c3?_0x8fbebd=_0x24cee7[_0x3998ec(0x66e)](Number,_0x4159f7):_0x8fbebd=DataManager['getStateId'+_0x3998ec(0x20e)](_0x4159f7),_0x24cee7[_0x3998ec(0x2a8)](_0x8fbebd,0x1ce2+-0x19fe*-0x1+-0x36e0*0x1)&&this[_0x3998ec(0x33a)+_0x3998ec(0x528)+_0x3998ec(0x27d)]($dataStates[_0x8fbebd]);}}},Game_Party[_0x864467(0x5d8)][_0x864467(0x45b)+'quippedPas'+'sive']=function(_0x3f7542){const _0x457535=_0x864467,_0x36c84e={'TlAet':function(_0x28d7a4,_0x3d1179){return _0x28d7a4===_0x3d1179;}};if(!DataManager[_0x457535(0x1be)](_0x3f7542))return;if(_0x36c84e[_0x457535(0x5cc)](this['_learnedEq'+_0x457535(0x637)+'ssives'],undefined))this[_0x457535(0x3d8)+_0x457535(0x548)+'em']();return this['_learnedEq'+_0x457535(0x637)+_0x457535(0x5d4)][_0x457535(0x551)](_0x3f7542['id']);},Game_Party['prototype'][_0x864467(0x53d)+_0x864467(0x62b)+'e']=function(_0x56afe1){const _0x182e01=_0x864467,_0x243eae={'vpwik':function(_0x45ca02,_0x2765f2){return _0x45ca02===_0x2765f2;}};if(!DataManager[_0x182e01(0x1be)](_0x56afe1))return;if(_0x243eae[_0x182e01(0x368)](this[_0x182e01(0x45d)+_0x182e01(0x637)+_0x182e01(0x5d4)],undefined))this[_0x182e01(0x3d8)+'assiveSyst'+'em']();this[_0x182e01(0x45d)+_0x182e01(0x637)+_0x182e01(0x5d4)]['remove'](_0x56afe1['id']),this[_0x182e01(0x45d)+_0x182e01(0x637)+_0x182e01(0x5d4)][_0x182e01(0x558)]((_0x4c03be,_0x7a075e)=>_0x4c03be-_0x7a075e);for(const _0x3ff5d8 of this[_0x182e01(0x2cf)]()){if(!_0x3ff5d8)continue;_0x3ff5d8['forgetEqui'+'ppedPassiv'+'e'](_0x56afe1);}},Game_Party[_0x864467(0x5d8)][_0x864467(0x2c4)+_0x864467(0x541)+_0x864467(0x4c5)+_0x864467(0x2d5)]=function(){const _0x1cad31=_0x864467,_0x3b065b={'eMrMA':function(_0x5284bd,_0x549236){return _0x5284bd===_0x549236;}};if(_0x3b065b[_0x1cad31(0x68e)](this[_0x1cad31(0x1f6)+_0x1cad31(0x299)+'Passives'],undefined))this[_0x1cad31(0x3d8)+_0x1cad31(0x548)+'em']();return this[_0x1cad31(0x1f6)+_0x1cad31(0x299)+_0x1cad31(0x46e)];},Game_Party['prototype'][_0x864467(0x33a)+_0x864467(0x528)+'lePassive']=function(_0x317b5b){const _0x39f9ff=_0x864467,_0x531c3a={'vLHnw':'2|4|1|0|3','BuHiB':function(_0x50f4c0,_0x2b71b2){return _0x50f4c0===_0x2b71b2;}},_0x4dfb66=_0x531c3a[_0x39f9ff(0x536)][_0x39f9ff(0x3ca)]('|');let _0x206b1b=0x33c+-0x1b7+-0x185;while(!![]){switch(_0x4dfb66[_0x206b1b++]){case'0':this[_0x39f9ff(0x1f6)+_0x39f9ff(0x299)+_0x39f9ff(0x46e)]['push'](_0x317b5b['id']);continue;case'1':if(this['_learnable'+_0x39f9ff(0x299)+'Passives'][_0x39f9ff(0x551)](_0x317b5b['id']))return;continue;case'2':if(!DataManager[_0x39f9ff(0x1be)](_0x317b5b))return;continue;case'3':this[_0x39f9ff(0x1f6)+'Equippable'+_0x39f9ff(0x46e)]['sort']((_0x296644,_0x3ab74a)=>_0x296644-_0x3ab74a);continue;case'4':if(_0x531c3a[_0x39f9ff(0x383)](this[_0x39f9ff(0x1f6)+_0x39f9ff(0x299)+_0x39f9ff(0x46e)],undefined))this[_0x39f9ff(0x3d8)+'assiveSyst'+'em']();continue;}break;}},Game_Party['prototype'][_0x864467(0x38c)+_0x864467(0x629)+_0x864467(0x289)+'ve']=function(_0x1f1c5c){const _0xa9870e=_0x864467,_0x6ffa44={'BAkFT':function(_0x553852,_0x122aa9){return _0x553852===_0x122aa9;}};if(!DataManager[_0xa9870e(0x1be)](_0x1f1c5c))return;if(_0x6ffa44[_0xa9870e(0x254)](this['_learnable'+'Equippable'+_0xa9870e(0x46e)],undefined))this[_0xa9870e(0x3d8)+_0xa9870e(0x548)+'em']();this[_0xa9870e(0x1f6)+_0xa9870e(0x299)+_0xa9870e(0x46e)][_0xa9870e(0x2f3)](_0x1f1c5c['id']),this[_0xa9870e(0x1f6)+_0xa9870e(0x299)+_0xa9870e(0x46e)][_0xa9870e(0x558)]((_0x2335d3,_0x22ec82)=>_0x2335d3-_0x22ec82);for(const _0xfec9ab of this[_0xa9870e(0x2cf)]()){if(!_0xfec9ab)continue;_0xfec9ab['removeUnle'+_0xa9870e(0x629)+_0xa9870e(0x289)+'ve'](_0x1f1c5c);}},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x3e3)+_0x864467(0x5ca)]=Scene_Skill[_0x864467(0x5d8)]['create'],Scene_Skill[_0x864467(0x5d8)][_0x864467(0x21c)]=function(){const _0x512849=_0x864467;VisuMZ[_0x512849(0x1d0)+_0x512849(0x479)][_0x512849(0x3e3)+_0x512849(0x5ca)][_0x512849(0x349)](this),this[_0x512849(0x35e)+_0x512849(0x60e)+_0x512849(0x28b)](),this['createPass'+_0x512849(0x638)+'indow']();},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x3e3)+_0x864467(0x53e)+_0x864467(0x4e2)+_0x864467(0x354)]=Scene_Skill[_0x864467(0x5d8)][_0x864467(0x3b4)+_0x864467(0x3eb)+'w'],Scene_Skill[_0x864467(0x5d8)][_0x864467(0x3b4)+_0x864467(0x3eb)+'w']=function(){const _0x4f82a5=_0x864467,_0x34d80b={'HfWPM':_0x4f82a5(0x6b1)+'ves'};VisuMZ[_0x4f82a5(0x1d0)+_0x4f82a5(0x479)][_0x4f82a5(0x3e3)+'l_createSk'+_0x4f82a5(0x4e2)+_0x4f82a5(0x354)][_0x4f82a5(0x349)](this),this[_0x4f82a5(0x2af)+_0x4f82a5(0x3df)][_0x4f82a5(0x612)](_0x34d80b[_0x4f82a5(0x617)],this[_0x4f82a5(0x391)+_0x4f82a5(0x4fd)][_0x4f82a5(0x469)](this));},Scene_Skill[_0x864467(0x5d8)]['createEqui'+_0x864467(0x60e)+_0x864467(0x28b)]=function(){const _0x395426=_0x864467,_0x3eec37={'THimO':_0x395426(0x600),'SHBBs':function(_0x4e3adb,_0x4afc0f){return _0x4e3adb||_0x4afc0f;}},_0x546a8f=this['equipPassi'+'veWindowRe'+'ct']();this[_0x395426(0x28e)+_0x395426(0x4a1)]=new Window_EquipPassiveList(_0x546a8f),this[_0x395426(0x28e)+_0x395426(0x4a1)][_0x395426(0x606)+_0x395426(0x354)](this[_0x395426(0x382)+'w']),this['_equipPass'+_0x395426(0x4a1)][_0x395426(0x612)]('ok',this[_0x395426(0x5d0)+'siveOk'][_0x395426(0x469)](this)),this[_0x395426(0x28e)+_0x395426(0x4a1)]['setHandler'](_0x3eec37[_0x395426(0x208)],this['onEquipPas'+_0x395426(0x4df)][_0x395426(0x469)](this)),this[_0x395426(0x1d6)](this['_equipPass'+_0x395426(0x4a1)]);const _0x1638ac=Window_EquipPassiveList[_0x395426(0x25f)][_0x395426(0x21d)];this[_0x395426(0x28e)+'iveWindow']['setBackgro'+_0x395426(0x527)](_0x3eec37[_0x395426(0x537)](_0x1638ac,-0x1010+-0x4ff*-0x1+0xb11));},Scene_Skill[_0x864467(0x5d8)][_0x864467(0x6b1)+_0x864467(0x3ff)+'ct']=function(){const _0x2b421b=_0x864467,_0x26bb5f={'LzpBS':function(_0x68ec3d,_0x24463d){return _0x68ec3d+_0x24463d;},'LzNmG':function(_0x30ceec,_0x2c9adc){return _0x30ceec-_0x2c9adc;}},_0x5d75ad=0x1f9b+-0xd*-0x6e+-0x2531,_0x37f959=_0x26bb5f[_0x2b421b(0x4fa)](this['_statusWin'+_0x2b421b(0x354)]['y'],this[_0x2b421b(0x2f8)+_0x2b421b(0x354)][_0x2b421b(0x550)]),_0x4d83d9=Graphics['boxWidth'];let _0x1b0718=_0x26bb5f[_0x2b421b(0x2e6)](this[_0x2b421b(0x58b)+_0x2b421b(0x671)](),this[_0x2b421b(0x2f8)+'dow'][_0x2b421b(0x550)]);return Window_EquipPassiveStatus[_0x2b421b(0x25f)]['showWindow']&&(_0x1b0718-=this['calcWindow'+_0x2b421b(0x3ea)](-0x1*-0x555+-0x5f9+0x37*0x3,![])),new Rectangle(_0x5d75ad,_0x37f959,_0x4d83d9,_0x1b0718);},Scene_Skill[_0x864467(0x5d8)]['createPass'+_0x864467(0x638)+_0x864467(0x460)]=function(){const _0x302a63=_0x864467,_0x23623c={'cKzbm':function(_0xcc16e3,_0x10c521){return _0xcc16e3||_0x10c521;}};if(!Window_EquipPassiveStatus[_0x302a63(0x25f)]['showWindow'])return;const _0x56e6b5=this[_0x302a63(0x53a)+_0x302a63(0x3a4)+_0x302a63(0x564)]();this['_passiveSt'+_0x302a63(0x3b2)]=new Window_EquipPassiveStatus(_0x56e6b5),this['_passiveSt'+_0x302a63(0x3b2)][_0x302a63(0x66a)](this['actor']()),this['addWindow'](this[_0x302a63(0x5b2)+_0x302a63(0x3b2)]);const _0x35c3cc=Window_EquipPassiveStatus[_0x302a63(0x25f)][_0x302a63(0x21d)];this['_passiveSt'+_0x302a63(0x3b2)][_0x302a63(0x360)+_0x302a63(0x527)](_0x23623c[_0x302a63(0x56b)](_0x35c3cc,-0x191*-0xa+0x160*0x7+-0x194a));},Scene_Skill[_0x864467(0x5d8)]['passiveSta'+_0x864467(0x3a4)+_0x864467(0x564)]=function(){const _0x5c6b88=_0x864467,_0x569273={'dCxXF':function(_0x1bda6b,_0x5c606d){return _0x1bda6b+_0x5c606d;}},_0x35370f=this[_0x5c6b88(0x6b1)+_0x5c6b88(0x3ff)+'ct'](),_0x2c86a9=_0x35370f['x'],_0xc8cb6d=_0x569273['dCxXF'](_0x35370f['y'],_0x35370f[_0x5c6b88(0x550)]),_0x2b31ce=_0x35370f[_0x5c6b88(0x218)],_0x480673=this[_0x5c6b88(0x258)+_0x5c6b88(0x3ea)](0x2d+-0x138+0x10c,![]);return new Rectangle(_0x2c86a9,_0xc8cb6d,_0x2b31ce,_0x480673);},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x3e3)+'l_refreshA'+_0x864467(0x480)]=Scene_Skill['prototype'][_0x864467(0x4c9)+'or'],Scene_Skill[_0x864467(0x5d8)]['refreshAct'+'or']=function(){const _0x2f5e87=_0x864467;VisuMZ[_0x2f5e87(0x1d0)+'veSys']['Scene_Skil'+_0x2f5e87(0x639)+_0x2f5e87(0x480)][_0x2f5e87(0x349)](this),this['actor']()['checkLearn'+_0x2f5e87(0x5b4)+'ssives'](),this[_0x2f5e87(0x28e)+_0x2f5e87(0x4a1)]&&(this[_0x2f5e87(0x28e)+_0x2f5e87(0x4a1)][_0x2f5e87(0x66a)](this[_0x2f5e87(0x45a)]()),this[_0x2f5e87(0x28e)+_0x2f5e87(0x4a1)][_0x2f5e87(0x1e2)]()),this[_0x2f5e87(0x5b2)+_0x2f5e87(0x3b2)]&&(this[_0x2f5e87(0x5b2)+_0x2f5e87(0x3b2)]['setActor'](this[_0x2f5e87(0x45a)]()),this[_0x2f5e87(0x5b2)+_0x2f5e87(0x3b2)][_0x2f5e87(0x1e2)]());},Scene_Skill[_0x864467(0x5d8)][_0x864467(0x391)+_0x864467(0x4fd)]=function(){const _0x3a69d7=_0x864467;this[_0x3a69d7(0x28e)+_0x3a69d7(0x4a1)]['activate'](),this[_0x3a69d7(0x28e)+_0x3a69d7(0x4a1)][_0x3a69d7(0x1bc)]();},Scene_Skill['prototype']['onEquipPas'+_0x864467(0x400)]=function(){const _0x416a21=_0x864467,_0x8a14c=this[_0x416a21(0x28e)+_0x416a21(0x4a1)][_0x416a21(0x3c3)]();this[_0x416a21(0x291)][_0x416a21(0x6bd)+_0x416a21(0x251)+_0x416a21(0x1db)](_0x8a14c)?this['_actor'][_0x416a21(0x262)+_0x416a21(0x584)](_0x8a14c):this[_0x416a21(0x291)][_0x416a21(0x24f)+_0x416a21(0x474)](_0x8a14c);this['_statusWin'+_0x416a21(0x354)]['refresh'](),this['_itemWindo'+'w'][_0x416a21(0x1e2)](),this[_0x416a21(0x28e)+_0x416a21(0x4a1)][_0x416a21(0x1e2)](),this[_0x416a21(0x28e)+_0x416a21(0x4a1)]['activate']();if(this[_0x416a21(0x5b2)+_0x416a21(0x3b2)])this[_0x416a21(0x5b2)+'atusWindow']['refresh']();},Scene_Skill[_0x864467(0x5d8)]['onEquipPas'+_0x864467(0x4df)]=function(){const _0x35883e=_0x864467;this['_equipPass'+_0x35883e(0x4a1)][_0x35883e(0x352)](),this[_0x35883e(0x2af)+_0x35883e(0x3df)][_0x35883e(0x5f2)]();},Window_Base['prototype']['drawEquipp'+_0x864467(0x663)+_0x864467(0x475)]=function(_0x2eb275,_0x205540,_0x3f2df7,_0x4bae59,_0x19555a){const _0x2aa27f=_0x864467,_0x440bbe={'YNXlZ':function(_0x57eaa7,_0x90dea3){return _0x57eaa7+_0x90dea3;},'ixWWY':function(_0x2409a2,_0x171325){return _0x2409a2/_0x171325;},'ysgSN':function(_0x4c71af,_0x3b0f8a){return _0x4c71af-_0x3b0f8a;},'ZvkUT':function(_0x1c8665,_0x2457b1){return _0x1c8665-_0x2457b1;},'YijtW':function(_0x41c4cd,_0x27e710){return _0x41c4cd+_0x27e710;}};if(!_0x2eb275)return;const _0x12e8c1=_0x440bbe[_0x2aa27f(0x2c5)](_0x3f2df7,_0x440bbe[_0x2aa27f(0x260)](_0x440bbe[_0x2aa27f(0x666)](this['lineHeight'](),ImageManager[_0x2aa27f(0x61d)]),0x11*-0xf8+0x1*0x10e1+-0x67)),_0x15fe6f=_0x440bbe['YNXlZ'](ImageManager[_0x2aa27f(0x48b)],-0x9f*0x35+-0x3a+0xd*0x28d),_0x11c38e=Math[_0x2aa27f(0x1f9)](-0x3e*-0x8a+-0x1d*0x11c+-0x40*0x5,_0x440bbe[_0x2aa27f(0x2ec)](_0x4bae59,_0x15fe6f));this[_0x2aa27f(0x677)+'olor'](),_0x19555a&&_0x19555a[_0x2aa27f(0x634)+_0x2aa27f(0x5d4)]()[_0x2aa27f(0x551)](_0x2eb275)&&this[_0x2aa27f(0x458)+'Color'](ColorManager[_0x2aa27f(0x6b1)+_0x2aa27f(0x52b)]()),this[_0x2aa27f(0x2da)](DataManager[_0x2aa27f(0x23b)+'ssiveIcon'](_0x2eb275),_0x205540,_0x12e8c1),this[_0x2aa27f(0x685)](DataManager['getEquipPa'+_0x2aa27f(0x3cd)](_0x2eb275),_0x440bbe[_0x2aa27f(0x37b)](_0x205540,_0x15fe6f),_0x3f2df7,_0x11c38e);},Window_Base[_0x864467(0x5d8)][_0x864467(0x51b)+_0x864467(0x663)+_0x864467(0x48c)]=function(_0x33c570,_0x324037,_0x54879b,_0x4c84c0){const _0x137b5a=_0x864467,_0x3fdd45={'FNKYP':function(_0x1db35c,_0x31dfcc){return _0x1db35c===_0x31dfcc;},'qgoaH':function(_0x1a7247,_0x4163cd){return _0x1a7247<_0x4163cd;},'zzUBN':_0x137b5a(0x3b6),'SLQdY':function(_0xaaea0a,_0x4e1942){return _0xaaea0a>_0x4e1942;},'Mlvxv':function(_0x2e117b,_0x40333e){return _0x2e117b-_0x40333e;},'ubobe':function(_0x150277,_0x92eb6d){return _0x150277+_0x92eb6d;}};if(!_0x33c570)return;const _0x526d17=Window_EquipPassiveList[_0x137b5a(0x25f)];if(!_0x526d17[_0x137b5a(0x393)+'y'])return;const _0x370e52=DataManager[_0x137b5a(0x23b)+_0x137b5a(0x38b)](_0x33c570);if(_0x3fdd45[_0x137b5a(0x50b)](_0x370e52,0x1490+-0x26d0+-0x1*-0x1241)&&!_0x526d17[_0x137b5a(0x1ee)])return;if(_0x3fdd45[_0x137b5a(0x214)](_0x370e52,0xd*0x2e9+-0xda0+-0x1834)&&!_0x526d17[_0x137b5a(0x257)])return;this[_0x137b5a(0x2a7)+_0x137b5a(0x201)]();const _0x269325=_0x3fdd45[_0x137b5a(0x3ac)]['format'](ImageManager[_0x137b5a(0x4a2)+'IVE_SYS'][_0x137b5a(0x5bf)]);let _0x32224b='';if(_0x526d17[_0x137b5a(0x200)]||_0x3fdd45[_0x137b5a(0x48e)](_0x370e52,_0x526d17[_0x137b5a(0x621)+_0x137b5a(0x36a)]))_0x32224b=TextManager[_0x137b5a(0x4a2)+_0x137b5a(0x497)][_0x137b5a(0x2d9)][_0x137b5a(0x4c1)](_0x370e52,_0x269325);else{let _0x5b2a96=_0x370e52;while(_0x5b2a96--)_0x32224b+=_0x269325;}const _0x333c70=this[_0x137b5a(0x490)](_0x32224b)[_0x137b5a(0x218)],_0x13d36d=_0x3fdd45[_0x137b5a(0x2d4)](_0x3fdd45[_0x137b5a(0x560)](_0x324037,_0x4c84c0),_0x333c70);this[_0x137b5a(0x2f9)](_0x32224b,_0x13d36d,_0x54879b);},Window_Base[_0x864467(0x5d8)][_0x864467(0x51b)+'ablePassiv'+'eMask']=function(_0x3de6d5,_0x8180be,_0x456ccd,_0x24958d){const _0x29eb6e=_0x864467,_0x361abe={'OtMcc':function(_0xa2c49b,_0x3be09d){return _0xa2c49b+_0x3be09d;},'WzJog':function(_0x1b32eb,_0x34061d){return _0x1b32eb/_0x34061d;},'lroUW':function(_0x6d6dd6,_0x15f088){return _0x6d6dd6-_0x15f088;},'wWgqC':function(_0x10f013,_0x5767b){return _0x10f013+_0x5767b;}};if(!_0x3de6d5)return;const _0x1a5005=_0x361abe[_0x29eb6e(0x217)](_0x456ccd,_0x361abe[_0x29eb6e(0x450)](_0x361abe[_0x29eb6e(0x1ca)](this[_0x29eb6e(0x686)](),ImageManager['iconHeight']),0x3*0x6e2+0x1*0x2665+0x1*-0x3b09)),_0x3e3c14=_0x361abe[_0x29eb6e(0x4eb)](ImageManager['iconWidth'],-0x87b+-0xffb*-0x1+-0x77c),_0x22f0f1=Math['max'](0x4*-0x482+0x2*0xfd1+-0xd9a,_0x361abe['lroUW'](_0x24958d,_0x3e3c14));this['resetTextC'+'olor']();const _0xcab801=Window_EquipPassiveList[_0x29eb6e(0x25f)][_0x29eb6e(0x530)];this[_0x29eb6e(0x2da)](_0xcab801,_0x8180be,_0x1a5005);const _0x4981be=VisuMZ[_0x29eb6e(0x1d0)+_0x29eb6e(0x479)][_0x29eb6e(0x36b)](_0x3de6d5);this['contents']['fontItalic']=Window_EquipPassiveList[_0x29eb6e(0x25f)][_0x29eb6e(0x5ff)+'s'],this[_0x29eb6e(0x685)](_0x4981be,_0x361abe[_0x29eb6e(0x217)](_0x8180be,_0x3e3c14),_0x456ccd,_0x22f0f1),this['contents'][_0x29eb6e(0x25a)]=![];},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x36b)]=function(_0x1ca1d4){const _0x56b902=_0x864467,_0x52d433={'sXvoE':function(_0x1e682d,_0xa8d865){return _0x1e682d(_0xa8d865);},'AiXqr':function(_0x21e194,_0x255c74){return _0x21e194(_0x255c74);},'iASRN':function(_0x2f8f6e,_0x4d9e44){return _0x2f8f6e+_0x4d9e44;}},_0xdf38ae=VisuMZ[_0x56b902(0x1d0)+_0x56b902(0x479)][_0x56b902(0x503)],_0x44c34f=_0x1ca1d4[_0x56b902(0x379)]||'';if(_0x44c34f[_0x56b902(0x231)](_0xdf38ae[_0x56b902(0x36b)]))return _0x52d433[_0x56b902(0x1d4)](String,RegExp['$1'])['trim']();const _0x44a1c5=Window_EquipPassiveList[_0x56b902(0x25f)][_0x56b902(0x4e6)];return _0x52d433['AiXqr'](Array,_0x52d433['iASRN'](_0x1ca1d4[_0x56b902(0x572)][_0x56b902(0x3bb)],-0x143e+-0x1983+0x16e1*0x2))[_0x56b902(0x3fb)](_0x44a1c5);},Window_Base[_0x864467(0x5d8)][_0x864467(0x367)+_0x864467(0x330)+_0x864467(0x252)+_0x864467(0x6a6)]=function(_0x29950a){const _0x349b76=_0x864467,_0x37bdeb={'PNHzU':_0x349b76(0x506),'gAQEM':function(_0x1a15eb,_0x2978f3){return _0x1a15eb!==_0x2978f3;}},_0x2fd886=_0x37bdeb['PNHzU']['split']('|');let _0x20d697=-0x129*0x12+0x6e*0x1e+0x7fe;while(!![]){switch(_0x2fd886[_0x20d697++]){case'0':if(!SceneManager['_scene'])return![];continue;case'1':if(!_0x29950a)return![];continue;case'2':return SceneManager[_0x349b76(0x405)]['_itemWindo'+'w'][_0x349b76(0x507)+_0x349b76(0x255)]();case'3':if(_0x37bdeb[_0x349b76(0x449)](SceneManager[_0x349b76(0x405)][_0x349b76(0x4e5)+'r'],Scene_Skill))return![];continue;case'4':if(!DataManager[_0x349b76(0x1be)](_0x29950a))return![];continue;}break;}},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x36e)+'e_drawItem'+_0x864467(0x484)]=Window_Base[_0x864467(0x5d8)][_0x864467(0x54d)+'me'],Window_Base[_0x864467(0x5d8)]['drawItemNa'+'me']=function(_0x4936f5,_0x23908e,_0x148aad,_0x51563e){const _0x576a86=_0x864467,_0x22066c=_0x4936f5?_0x4936f5[_0x576a86(0x572)]:'',_0x53d528=_0x4936f5?_0x4936f5[_0x576a86(0x5c0)]:0x1*-0x65d+0xb14+0x11*-0x47;this[_0x576a86(0x367)+_0x576a86(0x330)+_0x576a86(0x252)+'itions'](_0x4936f5)&&(_0x4936f5[_0x576a86(0x572)]=DataManager[_0x576a86(0x23b)+'ssiveName'](_0x4936f5),_0x4936f5[_0x576a86(0x5c0)]=DataManager[_0x576a86(0x23b)+_0x576a86(0x515)](_0x4936f5)),VisuMZ['EquipPassi'+_0x576a86(0x479)][_0x576a86(0x36e)+_0x576a86(0x419)+_0x576a86(0x484)][_0x576a86(0x349)](this,_0x4936f5,_0x23908e,_0x148aad,_0x51563e),this[_0x576a86(0x367)+_0x576a86(0x330)+_0x576a86(0x252)+_0x576a86(0x6a6)](_0x4936f5)&&(_0x4936f5[_0x576a86(0x572)]=_0x22066c,_0x4936f5[_0x576a86(0x5c0)]=_0x53d528);},VisuMZ['EquipPassi'+_0x864467(0x479)]['Window_Sel'+'ectable_se'+_0x864467(0x4c8)+'wItem']=Window_Selectable[_0x864467(0x5d8)][_0x864467(0x606)+_0x864467(0x602)],Window_Selectable['prototype'][_0x864467(0x606)+_0x864467(0x602)]=function(_0x44c508){const _0x54c908=_0x864467,_0x421099={'jVkpB':function(_0x3fc26b,_0x5f0da5){return _0x3fc26b(_0x5f0da5);}};_0x44c508&&(_0x44c508['descriptio'+'n']=_0x44c508[_0x54c908(0x6b0)+'n']||'',_0x44c508[_0x54c908(0x6b0)+'n']=_0x421099[_0x54c908(0x3f6)](String,_0x44c508[_0x54c908(0x6b0)+'n'])),VisuMZ[_0x54c908(0x1d0)+_0x54c908(0x479)][_0x54c908(0x635)+_0x54c908(0x27a)+_0x54c908(0x4c8)+_0x54c908(0x3c1)][_0x54c908(0x349)](this,_0x44c508);},Window_SkillType[_0x864467(0x4a2)+_0x864467(0x497)]={'defaultShowEquipPassive':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Settings']['General'][_0x864467(0x623)+_0x864467(0x5dc)]??!![]},VisuMZ[_0x864467(0x1d0)+'veSys']['Window_Ski'+_0x864467(0x27b)+_0x864467(0x676)+'st']=Window_SkillType['prototype']['makeComman'+_0x864467(0x38e)],Window_SkillType['prototype'][_0x864467(0x678)+_0x864467(0x38e)]=function(){const _0x3926e4=_0x864467;VisuMZ[_0x3926e4(0x1d0)+_0x3926e4(0x479)]['Window_Ski'+_0x3926e4(0x27b)+_0x3926e4(0x676)+'st']['call'](this),this['addEquipPa'+_0x3926e4(0x348)+'nd']();},Window_SkillType[_0x864467(0x5d8)][_0x864467(0x569)+_0x864467(0x348)+'nd']=function(){const _0x148fcc=_0x864467,_0x55a5c8={'acrVj':function(_0x254f18,_0xcdca7f){return _0x254f18!==_0xcdca7f;},'tJyhM':_0x148fcc(0x34a),'MrPcC':'\x5cI[%1]%2','imGnK':_0x148fcc(0x6b1)+_0x148fcc(0x5c1)};if(!this[_0x148fcc(0x2aa)+_0x148fcc(0x273)+'dVisible']())return;let _0x5aa89a=TextManager[_0x148fcc(0x4a2)+_0x148fcc(0x497)][_0x148fcc(0x41b)];if(_0x55a5c8[_0x148fcc(0x408)](this[_0x148fcc(0x34e)+'le'](),_0x55a5c8['tJyhM'])){const _0x426cec=ImageManager[_0x148fcc(0x4a2)+_0x148fcc(0x497)]['icon'];_0x5aa89a=_0x55a5c8[_0x148fcc(0x355)][_0x148fcc(0x4c1)](_0x426cec,_0x5aa89a);}this[_0x148fcc(0x311)](_0x5aa89a,_0x55a5c8[_0x148fcc(0x57a)],!![],_0x55a5c8[_0x148fcc(0x57a)]);},Window_SkillType[_0x864467(0x5d8)]['isEquipPas'+_0x864467(0x273)+'dVisible']=function(){const _0x50e20f=_0x864467;return $gameSystem[_0x50e20f(0x2aa)+_0x50e20f(0x273)+_0x50e20f(0x483)]();},Window_SkillList[_0x864467(0x5d8)][_0x864467(0x2aa)+'siveMode']=function(){const _0x48b73b=_0x864467,_0x86da9={'cIgnJ':function(_0x1c1d4b,_0x2bb5d9){return _0x1c1d4b===_0x2bb5d9;},'pvVJZ':'equipPassi'+_0x48b73b(0x5c1)};return _0x86da9['cIgnJ'](this[_0x48b73b(0x302)],_0x86da9[_0x48b73b(0x501)]);},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Window_Ski'+'llList_set'+_0x864467(0x620)]=Window_SkillList['prototype']['setStypeId'],Window_SkillList[_0x864467(0x5d8)]['setStypeId']=function(_0x42ee1d){const _0x44dd1f=_0x864467,_0x4405cb={'Piwys':function(_0x5e327e,_0x3ce42c){return _0x5e327e!==_0x3ce42c;},'DTjXy':function(_0x2b5b1b,_0x43ba6f){return _0x2b5b1b&&_0x43ba6f;},'rwWhQ':function(_0x4dd8e2,_0x5b4b4c){return _0x4dd8e2===_0x5b4b4c;},'rpfxF':_0x44dd1f(0x6b1)+_0x44dd1f(0x5c1),'dkPxP':_0x44dd1f(0x415)+'2'},_0x987488=_0x4405cb['Piwys'](this['_stypeId'],_0x42ee1d);if(!_0x987488)return;this[_0x44dd1f(0x1e9)]();const _0x5db814=SceneManager[_0x44dd1f(0x405)][_0x44dd1f(0x28e)+_0x44dd1f(0x4a1)];if(_0x5db814)_0x5db814[_0x44dd1f(0x27e)]();const _0x213634=SceneManager[_0x44dd1f(0x405)][_0x44dd1f(0x5b2)+_0x44dd1f(0x3b2)];if(_0x213634)_0x213634['hide']();const _0x4ea78f=this[_0x44dd1f(0x2f8)+_0x44dd1f(0x354)];if(_0x4ea78f)_0x4ea78f[_0x44dd1f(0x1e9)]();VisuMZ[_0x44dd1f(0x1d0)+'veSys'][_0x44dd1f(0x5d5)+_0x44dd1f(0x65e)+_0x44dd1f(0x620)][_0x44dd1f(0x349)](this,_0x42ee1d);if(_0x4405cb[_0x44dd1f(0x36f)](_0x987488,_0x5db814)&&_0x4405cb[_0x44dd1f(0x3e0)](_0x42ee1d,_0x4405cb['rpfxF'])){const _0x4fcff5=_0x4405cb[_0x44dd1f(0x389)][_0x44dd1f(0x3ca)]('|');let _0x541f0f=-0x1f43*0x1+-0x24b5+-0x10fe*-0x4;while(!![]){switch(_0x4fcff5[_0x541f0f++]){case'0':this['hide']();continue;case'1':_0x5db814[_0x44dd1f(0x1e9)]();continue;case'2':_0x213634&&(_0x213634[_0x44dd1f(0x1e2)](),_0x213634[_0x44dd1f(0x1e9)]());continue;case'3':if(this[_0x44dd1f(0x291)])this[_0x44dd1f(0x291)]['checkLearn'+_0x44dd1f(0x5b4)+_0x44dd1f(0x5d4)]();continue;case'4':if(_0x4ea78f)_0x4ea78f['hide']();continue;case'5':_0x5db814[_0x44dd1f(0x1e2)]();continue;}break;}}},Window_SkillList[_0x864467(0x5d8)][_0x864467(0x468)+_0x864467(0x330)+_0x864467(0x529)]=function(){const _0x186fc5=_0x864467,_0x15ec2f=DataManager[_0x186fc5(0x202)+_0x186fc5(0x4a7)+'SkillsFrom'+_0x186fc5(0x225)](this[_0x186fc5(0x291)][_0x186fc5(0x298)+'ss']()['id']),_0x18c92d=_0x15ec2f['map'](_0x2cab8a=>$dataStates[_0x2cab8a])[_0x186fc5(0x402)](_0x3af092=>this[_0x186fc5(0x551)](_0x3af092));this['_data']=this['_data'][_0x186fc5(0x69d)](_0x18c92d);},DataManager[_0x864467(0x202)+_0x864467(0x4a7)+_0x864467(0x43f)+'Class']=function(_0x21bb18){const _0x6fe6f2=_0x864467,_0x5ab036={'eBiQo':function(_0x9aca8,_0x2c9ecd){return _0x9aca8(_0x2c9ecd);},'tgmVr':function(_0x4a4784,_0x115c3b){return _0x4a4784(_0x115c3b);},'bKpYB':function(_0x705ec,_0x4d776d){return _0x705ec<=_0x4d776d;},'KCWKT':function(_0x28f5d5,_0x34e183){return _0x28f5d5(_0x34e183);},'ysSFq':function(_0x4442c7,_0xf92d93){return _0x4442c7(_0xf92d93);},'hctzp':function(_0x1ade7f,_0x57816b){return _0x1ade7f(_0x57816b);},'xTRMm':function(_0x215af7,_0x3cfde5){return _0x215af7(_0x3cfde5);},'VXSpL':function(_0x1fde8b,_0x14d891){return _0x1fde8b<=_0x14d891;},'eNJht':function(_0x5219c3,_0x27188b){return _0x5219c3(_0x27188b);}};if(!$dataClasses[_0x21bb18])return[];const _0x5f15ff=[],_0x3b9b0a=$dataClasses[_0x21bb18][_0x6fe6f2(0x379)],_0xd35a5c=VisuMZ[_0x6fe6f2(0x394)+_0x6fe6f2(0x1e5)]['RegExp'],_0x52f35f=_0x3b9b0a[_0x6fe6f2(0x231)](_0xd35a5c[_0x6fe6f2(0x4c3)+_0x6fe6f2(0x4d9)]);if(_0x52f35f)for(const _0x39a06e of _0x52f35f){if(!_0x39a06e)continue;_0x39a06e[_0x6fe6f2(0x231)](_0xd35a5c[_0x6fe6f2(0x4c3)+_0x6fe6f2(0x4d9)]);const _0x5c1512=_0x5ab036[_0x6fe6f2(0x657)](String,RegExp['$1'])['split'](',')['map'](_0x442e10=>_0x442e10[_0x6fe6f2(0x22f)]());;for(let _0x823b6c of _0x5c1512){_0x823b6c=(_0x5ab036[_0x6fe6f2(0x657)](String,_0x823b6c)||'')[_0x6fe6f2(0x22f)]();if(_0x823b6c[_0x6fe6f2(0x231)](/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)){const _0x432300=Math[_0x6fe6f2(0x67e)](_0x5ab036[_0x6fe6f2(0x338)](Number,RegExp['$1']),_0x5ab036[_0x6fe6f2(0x338)](Number,RegExp['$2'])),_0x370d22=Math[_0x6fe6f2(0x1f9)](_0x5ab036['eBiQo'](Number,RegExp['$1']),_0x5ab036['tgmVr'](Number,RegExp['$2']));for(let _0x467cf6=_0x432300;_0x5ab036[_0x6fe6f2(0x2b4)](_0x467cf6,_0x370d22);_0x467cf6++)_0x5f15ff[_0x6fe6f2(0x61c)](_0x467cf6);continue;}const _0x557602=/^\d+$/[_0x6fe6f2(0x1d5)](_0x823b6c);_0x557602?_0x5f15ff[_0x6fe6f2(0x61c)](_0x5ab036[_0x6fe6f2(0x338)](Number,_0x823b6c)):_0x5f15ff[_0x6fe6f2(0x61c)](DataManager[_0x6fe6f2(0x1cb)+'WithName'](_0x823b6c));}}const _0x2de68f=_0x3b9b0a[_0x6fe6f2(0x231)](_0xd35a5c[_0x6fe6f2(0x4c3)+_0x6fe6f2(0x58e)]);if(_0x2de68f)for(const _0x58e405 of _0x2de68f){if(!_0x58e405)continue;_0x58e405[_0x6fe6f2(0x231)](_0xd35a5c[_0x6fe6f2(0x4c3)+_0x6fe6f2(0x58e)]);const _0x3cb6e0=_0x5ab036[_0x6fe6f2(0x5cf)](String,RegExp['$1'])['split'](/[\r\n]+/);for(let _0x1e13d8 of _0x3cb6e0){_0x1e13d8=(_0x5ab036[_0x6fe6f2(0x338)](String,_0x1e13d8)||'')['trim']();if(_0x1e13d8[_0x6fe6f2(0x231)](/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)){const _0x5408ca=Math[_0x6fe6f2(0x67e)](_0x5ab036[_0x6fe6f2(0x55d)](Number,RegExp['$1']),_0x5ab036['hctzp'](Number,RegExp['$2'])),_0x2a2d4d=Math['max'](_0x5ab036[_0x6fe6f2(0x657)](Number,RegExp['$1']),_0x5ab036[_0x6fe6f2(0x670)](Number,RegExp['$2']));for(let _0x5073c9=_0x5408ca;_0x5ab036['VXSpL'](_0x5073c9,_0x2a2d4d);_0x5073c9++)_0x5f15ff[_0x6fe6f2(0x61c)](_0x5073c9);continue;}const _0xfa072c=/^\d+$/[_0x6fe6f2(0x1d5)](_0x1e13d8);_0xfa072c?_0x5f15ff[_0x6fe6f2(0x61c)](_0x5ab036[_0x6fe6f2(0x4f5)](Number,_0x1e13d8)):_0x5f15ff[_0x6fe6f2(0x61c)](DataManager[_0x6fe6f2(0x1cb)+_0x6fe6f2(0x20e)](_0x1e13d8));}}return _0x5f15ff['sort']((_0x5e651b,_0x49ce91)=>_0x5e651b-_0x49ce91),_0x5f15ff['filter']((_0x48c792,_0x487d99,_0x2928c5)=>_0x2928c5[_0x6fe6f2(0x3ef)](_0x48c792)===_0x487d99);},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x2cd)+_0x864467(0x4da)+_0x864467(0x6ba)]=Window_ShopStatus['prototype'][_0x864467(0x2dc)+'ta'],Window_ShopStatus[_0x864467(0x5d8)]['drawItemDa'+'ta']=function(){const _0x4cf7d2=_0x864467;this[_0x4cf7d2(0x367)+'earnPassiv'+'eStateCond'+_0x4cf7d2(0x6a6)](this['_item'])?this['drawPassiv'+'eStateData']():VisuMZ['EquipPassi'+_0x4cf7d2(0x479)][_0x4cf7d2(0x2cd)+'pStatus_dr'+_0x4cf7d2(0x6ba)][_0x4cf7d2(0x349)](this);},Window_ShopStatus[_0x864467(0x5d8)]['drawPassiv'+_0x864467(0x48f)]=function(){const _0x1891c0=_0x864467,_0x4a103d={'PIqTw':function(_0x5ac3c8,_0x1903ac){return _0x5ac3c8-_0x1903ac;},'vPrav':function(_0x13e834,_0x12e9f3){return _0x13e834+_0x12e9f3;},'gHiKI':function(_0x1ec6b9,_0x3744f7){return _0x1ec6b9*_0x3744f7;},'SztLt':function(_0x3c42d8,_0x3de9d6){return _0x3c42d8-_0x3de9d6;}};this['resetFontS'+_0x1891c0(0x201)]();let _0x1c92ef=this[_0x1891c0(0x3da)],_0xaef2b7=this[_0x1891c0(0x396)+'t'],_0x3ba519=0x22e1+0xb*-0x232+-0xabb,_0x15b7e9=-0x4cc*0x1+0x4c*-0x17+0x2e8*0x4;this[_0x1891c0(0x435)+'ck'][_0x1891c0(0x5a1)](_0x3ba519,_0x15b7e9,_0x1c92ef,_0x4a103d['PIqTw'](_0xaef2b7,_0x15b7e9)),this['drawItemNa'+'me'](this[_0x1891c0(0x270)],_0x4a103d[_0x1891c0(0x5f3)](_0x3ba519,this[_0x1891c0(0x48a)+'g']()),_0x15b7e9,_0x4a103d[_0x1891c0(0x470)](_0x1c92ef,_0x4a103d[_0x1891c0(0x370)](this[_0x1891c0(0x48a)+'g'](),-0xaa5+-0x3*0xa9c+0x2a7b))),this['drawItemDa'+'rkRect'](_0x3ba519,_0x15b7e9,_0x1c92ef),_0x15b7e9+=this[_0x1891c0(0x686)]();const _0x35e775=TextManager[_0x1891c0(0x4a2)+'IVE_SYS'][_0x1891c0(0x46a)+_0x1891c0(0x364)]||'';this[_0x1891c0(0x49c)+_0x1891c0(0x275)](_0x35e775,_0x3ba519,_0x15b7e9,_0x1c92ef,!![]),this[_0x1891c0(0x2dc)+_0x1891c0(0x41d)](_0x3ba519,_0x15b7e9,_0x1c92ef),_0x15b7e9+=this[_0x1891c0(0x686)](),this['drawItemDa'+_0x1891c0(0x41d)](_0x3ba519,_0x15b7e9,_0x1c92ef,_0x4a103d[_0x1891c0(0x36c)](_0xaef2b7,_0x15b7e9));};function _0x5ef6(_0x10076b,_0x48281e){const _0x25fa88=_0x5696();return _0x5ef6=function(_0x407646,_0x28d111){_0x407646=_0x407646-(0x62f*-0x1+0x13*-0x11c+0x6*0x4d5);let _0x116b96=_0x25fa88[_0x407646];return _0x116b96;},_0x5ef6(_0x10076b,_0x48281e);}function Window_EquipPassiveList(){this['initialize'](...arguments);}Window_EquipPassiveList[_0x864467(0x5d8)]=Object[_0x864467(0x21c)](Window_Selectable[_0x864467(0x5d8)]),Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x4e5)+'r']=Window_EquipPassiveList,Window_EquipPassiveList[_0x864467(0x25f)]={'bgType':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x3df)]['EquipPassi'+_0x864467(0x2e7)+_0x864467(0x611)]??-0xfd8+0x39*0x2f+0x561,'equipColor':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x3df)][_0x864467(0x643)+_0x864467(0x63c)]??-0x11ca+-0xf*-0x207+0xc8e*-0x1,'showCostAny':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x3df)][_0x864467(0x2d0)]??!![],'showCost1':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Settings'][_0x864467(0x3df)][_0x864467(0x3af)]??!![],'showCost0':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x3df)]['ShowCost0']??![],'costNumber':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x3df)]['ShowCostNu'+_0x864467(0x5c2)]??!![],'costIconLimit':VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x4a8)][_0x864467(0x3df)][_0x864467(0x621)+_0x864467(0x36a)]??-0xdb6+0xd*-0x2ae+0x308f,'sortBy':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x3df)][_0x864467(0x6ac)]??'id','showUnlearned':VisuMZ['EquipPassi'+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x3df)][_0x864467(0x40e)+_0x864467(0x5ee)]??!![],'separateUnlearned':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x3df)][_0x864467(0x5e2)+_0x864467(0x2b9)]??!![],'maskUnlearned':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Settings'][_0x864467(0x3df)]['MaskUnlear'+_0x864467(0x5ee)]??![],'maskItalics':VisuMZ['EquipPassi'+'veSys'][_0x864467(0x4a8)][_0x864467(0x3df)][_0x864467(0x4cd)+'s']??!![],'maskIcon':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x3df)][_0x864467(0x288)]??0x2669*0x1+-0x41*-0x65+0x1*-0x3edb,'maskLetter':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4a8)][_0x864467(0x3df)][_0x864467(0x1c7)]??'?'},Window_EquipPassiveList['prototype'][_0x864467(0x39c)]=function(_0x1730d2){const _0x4ab5a2=_0x864467;Window_Selectable['prototype'][_0x4ab5a2(0x39c)][_0x4ab5a2(0x349)](this,_0x1730d2),this[_0x4ab5a2(0x291)]=null,this['_data']=[],this['hide']();},Window_EquipPassiveList[_0x864467(0x5d8)]['setActor']=function(_0x3c9e0e){const _0x596ccd=_0x864467,_0x10ba07={'bJlHB':function(_0x41cb32,_0x542cc3){return _0x41cb32!==_0x542cc3;}};_0x10ba07[_0x596ccd(0x31d)](this[_0x596ccd(0x291)],_0x3c9e0e)&&(this[_0x596ccd(0x291)]=_0x3c9e0e,this[_0x596ccd(0x1e2)](),this[_0x596ccd(0x54b)](0x9e3+0xed*0x26+0x1*-0x2d11,-0x121+0x187d*-0x1+0xccf*0x2));},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x574)]=function(){return-0x7d3+0x4*0x4a9+0xacf*-0x1;},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x46f)]=function(){return 0x252+0xf61+-0x11a3;},Window_EquipPassiveList['prototype'][_0x864467(0x315)]=function(){const _0x38afbc=_0x864467;return this[_0x38afbc(0x557)]?this[_0x38afbc(0x557)]['length']:0x13fa+0xcd7*-0x1+-0x722;},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x3c3)]=function(){const _0x6c2e5d=_0x864467;return this[_0x6c2e5d(0x2ee)](this[_0x6c2e5d(0x207)]());},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x2ee)]=function(_0x3590c1){const _0x543cb6=_0x864467,_0x530394={'IptqS':function(_0x438b79,_0x4e36ec){return _0x438b79>=_0x4e36ec;}};return this[_0x543cb6(0x557)]&&_0x530394[_0x543cb6(0x25e)](_0x3590c1,0xd4e+0x147c+0xa*-0x361)?this[_0x543cb6(0x557)][_0x3590c1]:null;},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x24c)+'st']=function(){const _0x472cb7=_0x864467;this['_actor']?this[_0x472cb7(0x557)]=this[_0x472cb7(0x4c7)+_0x472cb7(0x645)]():this['_data']=[];},Window_EquipPassiveList[_0x864467(0x5d8)]['availableI'+_0x864467(0x645)]=function(){const _0x25607e=_0x864467;if(!this['_actor'])return[];let _0x4961e4=this[_0x25607e(0x291)]['availableL'+'earnedEqui'+_0x25607e(0x508)+_0x25607e(0x4ba)]();Window_EquipPassiveList['SETTINGS'][_0x25607e(0x4f1)+_0x25607e(0x2b9)]&&(_0x4961e4=this['sortItems'](_0x4961e4));if(Window_EquipPassiveList[_0x25607e(0x25f)][_0x25607e(0x3f3)+_0x25607e(0x5ee)]){let _0x5676af=this['_actor']['availableU'+_0x25607e(0x58f)+_0x25607e(0x637)+'ssives']();Window_EquipPassiveList[_0x25607e(0x25f)][_0x25607e(0x4f1)+_0x25607e(0x2b9)]&&(_0x5676af=this[_0x25607e(0x24a)](_0x5676af)),_0x4961e4=_0x4961e4['concat'](_0x5676af);}return _0x4961e4=_0x4961e4[_0x25607e(0x402)]((_0x3e6a9d,_0x53328f,_0x46d4db)=>_0x46d4db[_0x25607e(0x3ef)](_0x3e6a9d)===_0x53328f),!Window_EquipPassiveList['SETTINGS'][_0x25607e(0x4f1)+_0x25607e(0x2b9)]&&(_0x4961e4=this['sortItems'](_0x4961e4)),_0x4961e4=_0x4961e4[_0x25607e(0x402)](_0x4ee3ae=>this['includes'](_0x4ee3ae)),_0x4961e4;},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x551)]=function(_0x597111){const _0x48cad4=_0x864467;if(VisuMZ['EquipPassi'+_0x48cad4(0x479)]['IsPassiveH'+_0x48cad4(0x6aa)](this['_actor'],_0x597111))return![];return!![];},VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x32b)+'idden']=function(_0x1fd00e,_0x50f1a6){const _0x55d060=_0x864467,_0x585b1c={'HCItS':function(_0x27400f,_0x36b54f){return _0x27400f(_0x36b54f);},'WPsBR':function(_0x24ab98,_0x279992){return _0x24ab98(_0x279992);}},_0x320c5f=VisuMZ[_0x55d060(0x1d0)+_0x55d060(0x479)][_0x55d060(0x503)],_0x32ad4b=_0x50f1a6[_0x55d060(0x379)]||'';if(_0x32ad4b['match'](_0x320c5f['HideUnlear'+_0x55d060(0x5ee)])){if(!_0x1fd00e['isLearnedE'+_0x55d060(0x44a)+'sive'](_0x50f1a6))return!![];}if(_0x32ad4b[_0x55d060(0x231)](_0x320c5f['HideLearne'+_0x55d060(0x39b)])){const _0x1af770=_0x585b1c[_0x55d060(0x375)](String,RegExp['$1'])[_0x55d060(0x3ca)](',')[_0x55d060(0x327)](_0x231c87=>Number(_0x231c87));if(_0x1af770[_0x55d060(0x243)](_0x1738b5=>_0x1fd00e['isLearnedE'+'quippedPas'+_0x55d060(0x5a7)]($dataStates[_0x1738b5])))return!![];}if(_0x32ad4b[_0x55d060(0x231)](_0x320c5f[_0x55d060(0x4ff)+_0x55d060(0x2a9)])){const _0x577287=_0x585b1c['WPsBR'](String,RegExp['$1'])[_0x55d060(0x3ca)](',')[_0x55d060(0x327)](_0x4ea02b=>Number(_0x4ea02b));if(_0x577287['some'](_0x107840=>_0x1fd00e[_0x55d060(0x45b)+'quippedPas'+_0x55d060(0x5a7)]($dataStates[_0x107840])))return!![];}if(_0x32ad4b[_0x55d060(0x231)](_0x320c5f[_0x55d060(0x4ff)+_0x55d060(0x38f)])){const _0x309550=_0x585b1c[_0x55d060(0x375)](String,RegExp['$1'])['split'](',')[_0x55d060(0x327)](_0x14e642=>DataManager[_0x55d060(0x1cb)+_0x55d060(0x20e)](_0x14e642));if(_0x309550[_0x55d060(0x243)](_0x5528de=>_0x1fd00e[_0x55d060(0x45b)+_0x55d060(0x44a)+'sive']($dataStates[_0x5528de])))return!![];}if(_0x32ad4b['match'](_0x320c5f[_0x55d060(0x4ff)+_0x55d060(0x6b5)])){const _0x361e49=_0x585b1c['HCItS'](String,RegExp['$1'])['split'](',')[_0x55d060(0x327)](_0x3d618c=>DataManager[_0x55d060(0x1cb)+_0x55d060(0x20e)](_0x3d618c));if(_0x361e49['some'](_0x3097bc=>_0x1fd00e[_0x55d060(0x45b)+_0x55d060(0x44a)+_0x55d060(0x5a7)]($dataStates[_0x3097bc])))return!![];}return![];},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x24a)]=function(_0x2e9d4b){const _0x113446=_0x864467,_0x347ac6={'wYIju':function(_0x40c3c3,_0x58b2df){return _0x40c3c3===_0x58b2df;},'MdRnL':'name','uTgvN':function(_0x29d471,_0x1b3bde){return _0x29d471===_0x1b3bde;},'ottsx':_0x113446(0x6b8)},_0x5592b3=Window_EquipPassiveList[_0x113446(0x25f)][_0x113446(0x21a)];if(_0x347ac6[_0x113446(0x2e1)](_0x5592b3,'id'))return _0x2e9d4b[_0x113446(0x558)]((_0x495ed6,_0x414a08)=>_0x495ed6['id']-_0x414a08['id']);else{if(_0x347ac6[_0x113446(0x2e1)](_0x5592b3,_0x347ac6[_0x113446(0x35b)]))return _0x2e9d4b[_0x113446(0x558)]((_0x25691d,_0xcc98c1)=>DataManager[_0x113446(0x23b)+'ssiveName'](_0x25691d)>DataManager['getEquipPa'+_0x113446(0x3cd)](_0xcc98c1)?-0x4d*-0x6b+0x4d*0x12+0x191*-0x18:-(0x1ac*0xb+-0x3*0xcca+0x13fb));else return _0x347ac6['uTgvN'](_0x5592b3,_0x347ac6[_0x113446(0x532)])?_0x2e9d4b['sort']((_0x15ac8d,_0x3aaff6)=>_0x15ac8d[_0x113446(0x6b8)]-_0x3aaff6[_0x113446(0x6b8)]):_0x2e9d4b;}},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x1bc)]=function(){this['forceSelec'+'t'](-0xaa*-0x16+-0x17df+0x943);},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x4b0)]=function(_0xe79a3a){const _0x242331=_0x864467,_0x162fc4=this['itemAt'](_0xe79a3a);if(!_0x162fc4)return;const _0x53cd83=this[_0x242331(0x1fd)+'ct'](_0xe79a3a);this[_0x242331(0x5fc)+_0x242331(0x41e)](this[_0x242331(0x1c2)](_0x162fc4)),this['_actor'][_0x242331(0x45b)+_0x242331(0x44a)+_0x242331(0x5a7)](_0x162fc4)?(this[_0x242331(0x51b)+_0x242331(0x663)+'eState'](_0x162fc4,_0x53cd83['x'],_0x53cd83['y'],_0x53cd83['width'],this[_0x242331(0x291)]),this[_0x242331(0x51b)+_0x242331(0x663)+_0x242331(0x48c)](_0x162fc4,_0x53cd83['x'],_0x53cd83['y'],_0x53cd83[_0x242331(0x218)])):(VisuMZ[_0x242331(0x1d0)+_0x242331(0x479)][_0x242331(0x5fa)](_0x162fc4)?this[_0x242331(0x51b)+_0x242331(0x663)+_0x242331(0x68b)](_0x162fc4,_0x53cd83['x'],_0x53cd83['y'],_0x53cd83[_0x242331(0x218)]):this['drawEquipp'+_0x242331(0x663)+_0x242331(0x475)](_0x162fc4,_0x53cd83['x'],_0x53cd83['y'],_0x53cd83[_0x242331(0x218)],this['_actor']),this[_0x242331(0x297)+_0x242331(0x492)](_0x53cd83));},VisuMZ[_0x864467(0x1d0)+'veSys'][_0x864467(0x5fa)]=function(_0x1b8fc7){const _0x40519d=_0x864467,_0x1a64d8=VisuMZ[_0x40519d(0x1d0)+'veSys'][_0x40519d(0x503)],_0x2dabb4=_0x1b8fc7[_0x40519d(0x379)]||'';if(_0x2dabb4['match'](_0x1a64d8[_0x40519d(0x227)+_0x40519d(0x5ee)]))return!![];if(_0x2dabb4[_0x40519d(0x231)](_0x1a64d8[_0x40519d(0x4fc)+_0x40519d(0x30d)]))return![];return Window_EquipPassiveList[_0x40519d(0x25f)][_0x40519d(0x4bd)+_0x40519d(0x5ee)];},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x297)+_0x864467(0x492)]=function(_0x24dc19){const _0x38714a=_0x864467,_0x46352f={'VfdPt':function(_0x3378a3,_0x39fc41){return _0x3378a3-_0x39fc41;},'yTfYD':function(_0x2b37fb,_0x427994){return _0x2b37fb+_0x427994;}},_0x24269a=TextManager[_0x38714a(0x4a2)+_0x38714a(0x497)]['unlearned'],_0x459182=this['textSizeEx'](_0x24269a)['width'],_0x183f42=_0x46352f['VfdPt'](_0x46352f[_0x38714a(0x5a0)](_0x24dc19['x'],_0x24dc19['width']),_0x459182);this[_0x38714a(0x2f9)](_0x24269a,_0x183f42,_0x24dc19['y']),this[_0x38714a(0x2a7)+_0x38714a(0x201)]();},Window_EquipPassiveList['prototype'][_0x864467(0x65d)]=function(){const _0x4e1542=_0x864467;if(this[_0x4e1542(0x291)]&&this[_0x4e1542(0x291)]['isLearnedE'+_0x4e1542(0x44a)+_0x4e1542(0x5a7)](this[_0x4e1542(0x3c3)]()))this['item']()&&(this[_0x4e1542(0x3c3)]()['descriptio'+'n']=this['item']()[_0x4e1542(0x6b0)+'n']||'-'),this[_0x4e1542(0x606)+_0x4e1542(0x602)](this[_0x4e1542(0x3c3)]());else{const _0x75b61c=VisuMZ[_0x4e1542(0x1d0)+_0x4e1542(0x479)][_0x4e1542(0x374)+_0x4e1542(0x2f6)](this[_0x4e1542(0x291)],this[_0x4e1542(0x3c3)]());if(this['_helpWindo'+'w'])this[_0x4e1542(0x382)+'w'][_0x4e1542(0x4e0)](_0x75b61c);}},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x1e2)]=function(){const _0x299be3=_0x864467;this[_0x299be3(0x24c)+'st'](),Window_Selectable[_0x299be3(0x5d8)]['refresh'][_0x299be3(0x349)](this);},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x2c9)+'d']=function(){const _0x47c2b2=_0x864467;SoundManager[_0x47c2b2(0x3e9)]();},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x343)+_0x864467(0x5c3)]=function(){const _0x46946e=_0x864467;return this['isEnabled'](this[_0x46946e(0x3c3)]());},Window_EquipPassiveList[_0x864467(0x5d8)][_0x864467(0x1c2)]=function(_0x313fb4){const _0x4548d4=_0x864467;if(!_0x313fb4)return![];if(!this[_0x4548d4(0x291)])return![];if(this[_0x4548d4(0x291)]['isEquippab'+_0x4548d4(0x251)+_0x4548d4(0x1db)](_0x313fb4))return!![];return this[_0x4548d4(0x291)][_0x4548d4(0x45b)+_0x4548d4(0x44a)+_0x4548d4(0x5a7)](_0x313fb4)?this['_actor'][_0x4548d4(0x603)+_0x4548d4(0x4ad)+_0x4548d4(0x691)](_0x313fb4):![];},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['MakeUnlock'+_0x864467(0x2f6)]=function(_0x39349e,_0x245c70){const _0x30d822=_0x864467,_0x51ccd8={'emNVv':function(_0xee31b6,_0x39be5a){return _0xee31b6(_0x39be5a);},'Skeub':_0x30d822(0x61b),'JDujf':function(_0x3ee1c7,_0x8f584f){return _0x3ee1c7(_0x8f584f);},'NkeVE':_0x30d822(0x242),'YJavA':_0x30d822(0x239),'JGKtd':function(_0x4412b4,_0x4d18e4){return _0x4412b4(_0x4d18e4);},'HSxOD':_0x30d822(0x54e),'HTlOF':_0x30d822(0x390),'kAObC':_0x30d822(0x4d6),'auLmM':_0x30d822(0x1e6),'otCmI':function(_0x57ff71,_0x50bcab){return _0x57ff71(_0x50bcab);},'LuWpY':_0x30d822(0x3e6)+'s','jUtpo':'attack','zslah':_0x30d822(0x69f)+'s','QoXaU':function(_0xfccfd9,_0x4b2bc1){return _0xfccfd9(_0x4b2bc1);},'kMiNp':_0x30d822(0x3a0),'swFNe':'guardTimes','fxCyN':_0x30d822(0x2c3),'NXTNH':_0x30d822(0x24d),'OkmOY':_0x30d822(0x598)+_0x30d822(0x4c4),'Qfzge':_0x30d822(0x2f2)+'se','syKMj':function(_0x34cd16,_0x53de1e){return _0x34cd16(_0x53de1e);},'XGdvQ':_0x30d822(0x266)+'ll','aNZGO':_0x30d822(0x644)+'e','Ofexp':function(_0x28a334,_0x26823e){return _0x28a334(_0x26823e);},'lODBr':_0x30d822(0x538)+'Skill','gmOOa':'certSkillU'+'se','XbNiy':_0x30d822(0x3c3),'QsCze':'itemUse','ltiVS':function(_0x5ee036,_0x18ed2f){return _0x5ee036(_0x18ed2f);},'eXjJj':_0x30d822(0x36d),'LMvRa':function(_0x37f1c4,_0x124e1e){return _0x37f1c4(_0x124e1e);},'crYBi':_0x30d822(0x552),'QwsOQ':function(_0x343188,_0x726a18){return _0x343188(_0x726a18);},'qyRmE':_0x30d822(0x4ed),'QxSCh':function(_0x1a4223,_0xd07ebf){return _0x1a4223(_0xd07ebf);},'WDgMd':_0x30d822(0x467),'vvpYx':_0x30d822(0x404),'eiofN':_0x30d822(0x654),'azXJh':_0x30d822(0x29c)+'l','CEkib':function(_0x33d036,_0x5e830b){return _0x33d036(_0x5e830b);},'fbIZn':function(_0x329475,_0xcc7371){return _0x329475(_0xcc7371);},'OKDXE':'elementTak'+'e','DHlWp':function(_0x497a98,_0x2d06ec){return _0x497a98(_0x2d06ec);},'FebqB':function(_0x1cc756,_0x11a94e){return _0x1cc756(_0x11a94e);},'OCbbe':_0x30d822(0x6b3),'WemfF':_0x30d822(0x3b7),'GDcGn':function(_0x17c3e0,_0x5c15f8){return _0x17c3e0(_0x5c15f8);},'apHZz':_0x30d822(0x56a),'YhzgY':_0x30d822(0x3e8)+'r','sDylL':_0x30d822(0x44d),'YpQNZ':_0x30d822(0x35f)+'al','Cmwqk':function(_0x12527f,_0xded0f6){return _0x12527f(_0xded0f6);},'OPPyR':_0x30d822(0x26b),'xQREU':'totalDmgTa'+'ke','JEvca':function(_0x414178,_0x34795e){return _0x414178(_0x34795e);},'SoOtC':_0x30d822(0x546),'VNNes':'totalHealD'+_0x30d822(0x22b),'VShWQ':_0x30d822(0x68d),'OTCSi':'totalHealT'+'ake','OpfSE':function(_0x3e3ce8,_0x3455e4){return _0x3e3ce8(_0x3455e4);},'DnygV':'kda','OitwV':_0x30d822(0x308),'ZgJqH':_0x30d822(0x337),'gOpjn':'assists','mWcBM':_0x30d822(0x47d),'VobXy':_0x30d822(0x687),'DKfsI':function(_0x32a070,_0x55272d){return _0x32a070(_0x55272d);},'Sprko':function(_0x4f1013,_0x36bd0e){return _0x4f1013(_0x36bd0e);},'oqzOM':_0x30d822(0x524),'EYyff':function(_0x532468,_0x325a71){return _0x532468(_0x325a71);},'aTXrV':_0x30d822(0x613),'EdAnX':function(_0x5d1678,_0xd7801b){return _0x5d1678(_0xd7801b);},'mPhkc':function(_0x10f6e3,_0x55e7d9){return _0x10f6e3(_0x55e7d9);},'geFvq':function(_0x5e4787,_0x4d6d4f){return _0x5e4787===_0x4d6d4f;},'ODIkB':'MHP','czjje':_0x30d822(0x5fd),'jQLKA':function(_0x2b05c6,_0x3a6eeb){return _0x2b05c6===_0x3a6eeb;},'YzROG':_0x30d822(0x6ae),'jFSKL':'MMP','FPlBu':_0x30d822(0x695),'VxlJf':function(_0x56ab12,_0x113ce0){return _0x56ab12===_0x113ce0;},'tpkly':_0x30d822(0x517),'kTzBz':_0x30d822(0x35c),'rvEuA':_0x30d822(0x3d5),'wcOxR':'MAT','eJxop':_0x30d822(0x496),'zkXwh':_0x30d822(0x353),'wzovn':_0x30d822(0x59a),'jCEnp':_0x30d822(0x1d1),'ECczr':function(_0x3b54b5,_0x207f84){return _0x3b54b5(_0x207f84);},'fFTcg':function(_0x51571b,_0x394e41){return _0x51571b(_0x394e41);},'fEHyG':_0x30d822(0x61f),'tLTIf':_0x30d822(0x659),'qShOI':'CRI','arrcb':_0x30d822(0x2b1),'mqKGD':_0x30d822(0x317),'CHgyd':_0x30d822(0x653),'VNIej':_0x30d822(0x1cd),'deDdi':_0x30d822(0x3f0),'yyBXH':_0x30d822(0x5e3),'ZhShd':_0x30d822(0x2ce),'Cnamu':function(_0x21480f,_0x236d41){return _0x21480f*_0x236d41;},'BjnKc':'haveXParam','KEfiq':function(_0x388501,_0x491945){return _0x388501(_0x491945);},'eQgDE':function(_0x313d7c,_0x11c589){return _0x313d7c(_0x11c589);},'QuGLO':_0x30d822(0x331),'ArQJL':'GRD','HHNbZ':'REC','GQffq':_0x30d822(0x4b4),'zumbW':_0x30d822(0x21b),'toVVb':_0x30d822(0x204),'hfCHm':_0x30d822(0x1dc),'xnHgw':_0x30d822(0x628),'mrkdC':_0x30d822(0x3ec),'TBeje':_0x30d822(0x344),'wqWHc':function(_0x201a16,_0x1b2f60){return _0x201a16*_0x1b2f60;},'KsHFX':_0x30d822(0x4fb),'gjxQL':function(_0x506375,_0x195ed3){return _0x506375===_0x195ed3;},'TmqMZ':function(_0xbcd99,_0x5c99fe){return _0xbcd99+_0x5c99fe;},'raAni':_0x30d822(0x585)};if(!_0x245c70)return'';const _0x43e9c5=TextManager[_0x30d822(0x4a2)+'IVE_SYS'],_0x3005dc=VisuMZ[_0x30d822(0x1d0)+_0x30d822(0x479)][_0x30d822(0x503)],_0x1362d0=_0x245c70[_0x30d822(0x379)]||'';let _0x591e93='';if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x562)+_0x30d822(0x413)]))_0x591e93=_0x51ccd8['emNVv'](String,RegExp['$1'])[_0x30d822(0x22f)]();else{if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x49b)])){const _0x2accc8=_0x51ccd8['emNVv'](Number,RegExp['$1']),_0x106423=_0x39349e[_0x30d822(0x61b)],_0x238dfb=_0x51ccd8[_0x30d822(0x20d)];_0x591e93=this[_0x30d822(0x4d2)+'kHelpTextC'+'ondition'](_0x591e93,_0x2accc8,_0x106423,_0x238dfb);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x301)+'es'])){const _0x2dc001=_0x51ccd8[_0x30d822(0x62e)](Number,RegExp['$1']),_0x25fa18=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+'Progress'](_0x245c70,_0x51ccd8[_0x30d822(0x4cc)],_0x51ccd8['YJavA']),_0x4d113c=_0x51ccd8['NkeVE'];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x2dc001,_0x25fa18,_0x4d113c);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x248)+'ry'])){const _0x175b7d=_0x51ccd8[_0x30d822(0x2ad)](Number,RegExp['$1']),_0x117860=_0x39349e[_0x30d822(0x23b)+'ssiveLearn'+'Progress'](_0x245c70,_0x51ccd8[_0x30d822(0x4cc)],_0x51ccd8[_0x30d822(0x62c)]),_0x3e4415=_0x51ccd8['HSxOD'];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+'ondition'](_0x591e93,_0x175b7d,_0x117860,_0x3e4415);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc['LearnEscap'+'es'])){const _0x5ebb5d=_0x51ccd8[_0x30d822(0x2ad)](Number,RegExp['$1']),_0x695a24=_0x39349e['getEquipPa'+'ssiveLearn'+_0x30d822(0x632)](_0x245c70,_0x51ccd8[_0x30d822(0x4cc)],_0x51ccd8['HTlOF']),_0x3ba79d=_0x51ccd8[_0x30d822(0x1dd)];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x5ebb5d,_0x695a24,_0x3ba79d);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x3c8)+'ts'])){const _0x564660=_0x51ccd8[_0x30d822(0x2ad)](Number,RegExp['$1']),_0x59564f=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+'Progress'](_0x245c70,_0x51ccd8['NkeVE'],_0x51ccd8['auLmM']),_0x1db2fd=_0x51ccd8[_0x30d822(0x2c0)];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x564660,_0x59564f,_0x1db2fd);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x4b3)+_0x30d822(0x680)])){const _0x3317f5=_0x51ccd8[_0x30d822(0x2df)](Number,RegExp['$1']),_0x4bdb77=_0x39349e['getEquipPa'+'ssiveLearn'+_0x30d822(0x632)](_0x245c70,_0x51ccd8['LuWpY'],_0x51ccd8[_0x30d822(0x463)]),_0x46ba11=_0x51ccd8['zslah'];_0x591e93=this[_0x30d822(0x4d2)+'kHelpTextC'+_0x30d822(0x2f5)](_0x591e93,_0x3317f5,_0x4bdb77,_0x46ba11);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x3b8)+_0x30d822(0x662)])){const _0x453883=_0x51ccd8['QoXaU'](Number,RegExp['$1']),_0x59a652=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+_0x30d822(0x632)](_0x245c70,_0x51ccd8[_0x30d822(0x29d)],_0x51ccd8[_0x30d822(0x6a0)]),_0x4662a0=_0x51ccd8[_0x30d822(0x2ae)];_0x591e93=this['ApplyUnloc'+'kHelpTextC'+_0x30d822(0x2f5)](_0x591e93,_0x453883,_0x59a652,_0x4662a0);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x4c3)+_0x30d822(0x5ac)])){const _0x102b2b=_0x51ccd8[_0x30d822(0x62e)](Number,RegExp['$1']),_0x498134=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+_0x30d822(0x632)](_0x245c70,_0x51ccd8[_0x30d822(0x29d)],_0x51ccd8[_0x30d822(0x3fe)]),_0x59fbaf=_0x51ccd8[_0x30d822(0x2f7)];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+'ondition'](_0x591e93,_0x102b2b,_0x498134,_0x59fbaf);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x23f)+'kill'])){const _0x325f86=_0x51ccd8[_0x30d822(0x1de)](Number,RegExp['$1']),_0x2444b5=_0x39349e['getEquipPa'+_0x30d822(0x673)+_0x30d822(0x632)](_0x245c70,_0x51ccd8[_0x30d822(0x29d)],_0x51ccd8[_0x30d822(0x44b)]),_0x13809e=_0x51ccd8[_0x30d822(0x52f)];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x325f86,_0x2444b5,_0x13809e);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x4c2)+'ill'])){const _0x24b293=_0x51ccd8[_0x30d822(0x5a5)](Number,RegExp['$1']),_0x1ca7b5=_0x39349e[_0x30d822(0x23b)+'ssiveLearn'+'Progress'](_0x245c70,_0x51ccd8['LuWpY'],_0x51ccd8[_0x30d822(0x43d)]),_0x5c6218=_0x51ccd8[_0x30d822(0x50a)];_0x591e93=this['ApplyUnloc'+'kHelpTextC'+'ondition'](_0x591e93,_0x24b293,_0x1ca7b5,_0x5c6218);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x55e)+_0x30d822(0x43e)])){const _0x47a512=_0x51ccd8[_0x30d822(0x2f1)](Number,RegExp['$1']),_0x3948ca=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+_0x30d822(0x632)](_0x245c70,_0x51ccd8['LuWpY'],_0x51ccd8[_0x30d822(0x4be)]),_0x1824dd=_0x51ccd8['gmOOa'];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x47a512,_0x3948ca,_0x1824dd);}if(_0x1362d0['match'](_0x3005dc[_0x30d822(0x5b7)+_0x30d822(0x32f)])){const _0x29eb10=_0x51ccd8[_0x30d822(0x2df)](Number,RegExp['$1']),_0x4208a2=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+_0x30d822(0x632)](_0x245c70,_0x51ccd8[_0x30d822(0x29d)],_0x51ccd8[_0x30d822(0x64c)]),_0x30c604=_0x51ccd8['QsCze'];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x29eb10,_0x4208a2,_0x30c604);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x6b9)+_0x30d822(0x661)+'s'])){const _0x36af13=_0x51ccd8[_0x30d822(0x694)](Number,RegExp['$1']),_0x11a148=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+'Progress'](_0x245c70,_0x51ccd8[_0x30d822(0x29d)],_0x51ccd8['eXjJj']),_0x2b8529=_0x51ccd8['eXjJj'];_0x591e93=this['ApplyUnloc'+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x36af13,_0x11a148,_0x2b8529);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x424)+'ritHitTime'+'s'])){const _0x1b084d=_0x51ccd8[_0x30d822(0x573)](Number,RegExp['$1']),_0x30177a=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+_0x30d822(0x632)](_0x245c70,_0x51ccd8[_0x30d822(0x29d)],_0x51ccd8[_0x30d822(0x5ae)]),_0x3f8759=_0x51ccd8[_0x30d822(0x5ae)];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x1b084d,_0x30177a,_0x3f8759);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x3f5)+_0x30d822(0x280)])){const _0x2e4d99=_0x51ccd8['QwsOQ'](Number,RegExp['$1']),_0x1d3be5=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+'Progress'](_0x245c70,_0x51ccd8[_0x30d822(0x29d)],_0x51ccd8[_0x30d822(0x371)]),_0x28302f=_0x51ccd8[_0x30d822(0x371)];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+'ondition'](_0x591e93,_0x2e4d99,_0x1d3be5,_0x28302f);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x581)+_0x30d822(0x662)])){const _0x11f8d9=_0x51ccd8[_0x30d822(0x472)](Number,RegExp['$1']),_0x96666e=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+_0x30d822(0x632)](_0x245c70,_0x51ccd8[_0x30d822(0x29d)],_0x51ccd8[_0x30d822(0x2c8)]),_0x472531=_0x51ccd8[_0x30d822(0x2c8)];_0x591e93=this[_0x30d822(0x4d2)+'kHelpTextC'+_0x30d822(0x2f5)](_0x591e93,_0x11f8d9,_0x96666e,_0x472531);}{const _0x414112=_0x1362d0['match'](_0x3005dc[_0x30d822(0x50e)+_0x30d822(0x5ac)]);if(_0x414112)for(const _0x3c38b4 of _0x414112){_0x3c38b4[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x50e)+_0x30d822(0x5ac)]);let _0x575e81=_0x51ccd8[_0x30d822(0x41c)](String,RegExp['$1']);const _0x45d3cd=_0x51ccd8[_0x30d822(0x2df)](Number,RegExp['$2']),_0x4972d6=/^\d+$/[_0x30d822(0x1d5)](_0x575e81);_0x575e81=_0x4972d6?_0x51ccd8[_0x30d822(0x2f1)](Number,_0x575e81):DataManager['getStypeId'+_0x30d822(0x20e)](_0x575e81);const _0x3dddcb=_0x39349e[_0x30d822(0x23b)+'ssiveLearn'+_0x30d822(0x632)](_0x245c70,_0x51ccd8['vvpYx'],_0x575e81),_0x462be0=_0x51ccd8['eiofN'],_0x25f95a=$dataSystem[_0x30d822(0x5d6)][_0x575e81];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x45d3cd,_0x3dddcb,_0x462be0,_0x25f95a);}}{const _0x428010=_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x27f)+_0x30d822(0x5f8)]);if(_0x428010)for(const _0x17b89 of _0x428010){_0x17b89[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x27f)+_0x30d822(0x5f8)]);let _0x22d200=_0x51ccd8[_0x30d822(0x2f1)](String,RegExp['$1']);const _0x4aeae1=_0x51ccd8[_0x30d822(0x41c)](Number,RegExp['$2']),_0x266486=/^\d+$/[_0x30d822(0x1d5)](_0x22d200);_0x22d200=_0x266486?_0x51ccd8[_0x30d822(0x5a5)](Number,_0x22d200):DataManager[_0x30d822(0x567)+'IdWithName'](_0x22d200);const _0x58796a=_0x39349e[_0x30d822(0x23b)+'ssiveLearn'+_0x30d822(0x632)](_0x245c70,_0x51ccd8[_0x30d822(0x2de)],_0x22d200),_0x4f111b=_0x51ccd8[_0x30d822(0x2de)],_0x16e136=$dataSystem['elements'][_0x22d200];_0x591e93=this[_0x30d822(0x4d2)+'kHelpTextC'+_0x30d822(0x2f5)](_0x591e93,_0x4aeae1,_0x58796a,_0x4f111b,_0x16e136);}}{const _0x53adc9=_0x1362d0['match'](_0x3005dc[_0x30d822(0x27f)+_0x30d822(0x293)]);if(_0x53adc9)for(const _0x4705c4 of _0x53adc9){_0x4705c4['match'](_0x3005dc[_0x30d822(0x27f)+'ntTake']);let _0x3656c9=_0x51ccd8['CEkib'](String,RegExp['$1']);const _0x295f3b=_0x51ccd8[_0x30d822(0x5a5)](Number,RegExp['$2']),_0x2b292c=/^\d+$/[_0x30d822(0x1d5)](_0x3656c9);_0x3656c9=_0x2b292c?_0x51ccd8[_0x30d822(0x545)](Number,_0x3656c9):DataManager[_0x30d822(0x567)+_0x30d822(0x49f)](_0x3656c9);const _0x30a955=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+_0x30d822(0x632)](_0x245c70,_0x51ccd8[_0x30d822(0x1bf)],_0x3656c9),_0x42c1f7=_0x51ccd8[_0x30d822(0x1bf)],_0x31c1b4=$dataSystem[_0x30d822(0x544)][_0x3656c9];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x295f3b,_0x30a955,_0x42c1f7,_0x31c1b4);}}{const _0x5943ca=_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x511)+_0x30d822(0x417)]);if(_0x5943ca)for(const _0xafc377 of _0x5943ca){_0xafc377[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x511)+_0x30d822(0x417)]);let _0x186835=_0x51ccd8[_0x30d822(0x5e5)](String,RegExp['$1']);const _0x385771=_0x51ccd8[_0x30d822(0x5a9)](Number,RegExp['$2']);_0x186835=DataManager[_0x30d822(0x1cb)+_0x30d822(0x20e)](_0x186835);const _0x152154=_0x39349e[_0x30d822(0x23b)+'ssiveLearn'+_0x30d822(0x632)](_0x245c70,_0x51ccd8['OCbbe'],_0x186835),_0xe5ac20=_0x51ccd8['OCbbe'],_0x2ff34f=$dataStates[_0x186835],_0x3d1911=_0x51ccd8[_0x30d822(0x1c8)]['format'](_0x2ff34f[_0x30d822(0x5c0)],_0x2ff34f[_0x30d822(0x572)]);_0x591e93=this['ApplyUnloc'+'kHelpTextC'+_0x30d822(0x2f5)](_0x591e93,_0x385771,_0x152154,_0xe5ac20,_0x3d1911);}}{const _0x47798d=_0x1362d0[_0x30d822(0x231)](_0x3005dc['LearnState'+_0x30d822(0x1eb)]);if(_0x47798d)for(const _0x1ec06b of _0x47798d){_0x1ec06b[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x511)+'Take']);let _0x2ee2c=_0x51ccd8['GDcGn'](String,RegExp['$1']);const _0x4a9ff5=_0x51ccd8['otCmI'](Number,RegExp['$2']);_0x2ee2c=DataManager[_0x30d822(0x1cb)+_0x30d822(0x20e)](_0x2ee2c);const _0x51638e=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+'Progress'](_0x245c70,_0x51ccd8['apHZz'],_0x2ee2c),_0x3d394d=_0x51ccd8[_0x30d822(0x1c4)],_0x47653e=$dataStates[_0x2ee2c],_0xc07247=_0x51ccd8['WemfF']['format'](_0x47653e[_0x30d822(0x5c0)],_0x47653e[_0x30d822(0x572)]);_0x591e93=this['ApplyUnloc'+'kHelpTextC'+'ondition'](_0x591e93,_0x4a9ff5,_0x51638e,_0x3d394d,_0xc07247);}}if(Imported[_0x30d822(0x1fa)+'lementStat'+_0x30d822(0x64b)]){const _0x60c4b0=_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x3c8)+_0x30d822(0x1f1)]);if(_0x60c4b0)for(const _0xd5fcf6 of _0x60c4b0){_0xd5fcf6[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x3c8)+_0x30d822(0x1f1)]);const _0x10b801=_0x51ccd8[_0x30d822(0x5a9)](String,RegExp['$1']),_0xc9ca66=_0x51ccd8[_0x30d822(0x573)](Number,RegExp['$2']),_0x12e562=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+_0x30d822(0x632)](_0x245c70,_0x51ccd8[_0x30d822(0x345)],_0x10b801[_0x30d822(0x5c8)+'e']()[_0x30d822(0x22f)]()),_0x4f4e92=_0x51ccd8[_0x30d822(0x345)],_0x3fe6f9=_0x10b801;_0x591e93=this['ApplyUnloc'+_0x30d822(0x44f)+'ondition'](_0x591e93,_0xc9ca66,_0x12e562,_0x4f4e92,_0x3fe6f9);}}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc['LearnTotal'+'DmgDeal'])){const _0xdd5fe4=_0x51ccd8[_0x30d822(0x2f1)](Number,RegExp['$1']),_0x218d58=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+'Progress'](_0x245c70,'hp',_0x51ccd8['sDylL']),_0xeb29cd=_0x51ccd8[_0x30d822(0x1ef)];_0x591e93=this[_0x30d822(0x4d2)+'kHelpTextC'+'ondition'](_0x591e93,_0xdd5fe4,_0x218d58,_0xeb29cd);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x3cb)+'DmgTake'])){const _0xf7ad64=_0x51ccd8[_0x30d822(0x346)](Number,RegExp['$1']),_0x38b511=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+'Progress'](_0x245c70,'hp',_0x51ccd8['OPPyR']),_0x20d3cf=_0x51ccd8[_0x30d822(0x234)];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0xf7ad64,_0x38b511,_0x20d3cf);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x3cb)+_0x30d822(0x464)])){const _0x1ca8b8=_0x51ccd8[_0x30d822(0x4ee)](Number,RegExp['$1']),_0x444f2b=_0x39349e['getEquipPa'+'ssiveLearn'+_0x30d822(0x632)](_0x245c70,'hp',_0x51ccd8['SoOtC']),_0x4352bb=_0x51ccd8['VNNes'];_0x591e93=this['ApplyUnloc'+_0x30d822(0x44f)+'ondition'](_0x591e93,_0x1ca8b8,_0x444f2b,_0x4352bb);}if(_0x1362d0['match'](_0x3005dc[_0x30d822(0x3cb)+_0x30d822(0x4ce)])){const _0x49e721=_0x51ccd8[_0x30d822(0x472)](Number,RegExp['$1']),_0x1e9e7b=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+_0x30d822(0x632)](_0x245c70,'hp',_0x51ccd8[_0x30d822(0x295)]),_0x463ab2=_0x51ccd8[_0x30d822(0x4d3)];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x49e721,_0x1e9e7b,_0x463ab2);}if(_0x1362d0['match'](_0x3005dc[_0x30d822(0x256)+_0x30d822(0x4aa)])){const _0x5d9a99=_0x51ccd8[_0x30d822(0x1fc)](Number,RegExp['$1']),_0x3024bf=_0x39349e[_0x30d822(0x23b)+_0x30d822(0x673)+'Progress'](_0x245c70,_0x51ccd8[_0x30d822(0x1d8)],_0x51ccd8[_0x30d822(0x236)]),_0x26fe08=_0x51ccd8[_0x30d822(0x236)];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x5d9a99,_0x3024bf,_0x26fe08);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x256)+'Deaths'])){const _0x397faf=_0x51ccd8[_0x30d822(0x41c)](Number,RegExp['$1']),_0x4f6320=_0x39349e['getEquipPa'+_0x30d822(0x673)+'Progress'](_0x245c70,_0x51ccd8[_0x30d822(0x1d8)],_0x51ccd8[_0x30d822(0x1d2)]),_0x1d123a=_0x51ccd8[_0x30d822(0x1d2)];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+'ondition'](_0x591e93,_0x397faf,_0x4f6320,_0x1d123a);}if(_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x256)+_0x30d822(0x4f8)])){const _0x2a0548=_0x51ccd8[_0x30d822(0x5a9)](Number,RegExp['$1']),_0x1c191f=_0x39349e[_0x30d822(0x23b)+'ssiveLearn'+_0x30d822(0x632)](_0x245c70,_0x51ccd8[_0x30d822(0x1d8)],_0x51ccd8[_0x30d822(0x3b3)]),_0x5dd362=_0x51ccd8['gOpjn'];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x2a0548,_0x1c191f,_0x5dd362);}if(_0x1362d0['match'](_0x3005dc[_0x30d822(0x54a)+_0x30d822(0x2a6)])){const _0x15c666=_0x51ccd8['FebqB'](Number,RegExp['$1']),_0x167b8e=$gameParty[_0x30d822(0x692)](),_0x21b3df=_0x51ccd8['mWcBM'],_0x5b0f87=TextManager[_0x30d822(0x684)+'it'];_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+'ondition'](_0x591e93,_0x15c666,_0x167b8e,_0x21b3df,_0x5b0f87);}{const _0x2e17c0=_0x1362d0['match'](_0x3005dc[_0x30d822(0x1ec)+_0x30d822(0x45f)]);if(_0x2e17c0)for(const _0x5b2bd9 of _0x2e17c0){_0x5b2bd9['match'](_0x3005dc[_0x30d822(0x1ec)+'tem']);const _0x2e5a09=_0x51ccd8[_0x30d822(0x1fc)](String,RegExp['$1']),_0x2cb555=_0x51ccd8[_0x30d822(0x545)](Number,RegExp['$2']),_0x45c62c=/^\d+$/[_0x30d822(0x1d5)](_0x2e5a09),_0xc2cc3d=_0x45c62c?_0x51ccd8[_0x30d822(0x545)](Number,_0x2e5a09):DataManager['getItemIdW'+'ithName'](_0x2e5a09),_0x5c7d65=$dataItems[_0xc2cc3d];if(!_0x5c7d65)continue;const _0x5645af=$gameParty[_0x30d822(0x2bb)](_0x5c7d65),_0x20248=_0x51ccd8['VobXy'],_0x2f8b8e=_0x51ccd8[_0x30d822(0x1c8)][_0x30d822(0x4c1)](_0x5c7d65[_0x30d822(0x5c0)],_0x5c7d65[_0x30d822(0x572)]);_0x591e93=this[_0x30d822(0x4d2)+'kHelpTextC'+'ondition'](_0x591e93,_0x2cb555,_0x5645af,_0x20248,_0x2f8b8e);}}{const _0x56716d=_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x648)+_0x30d822(0x2c7)]);if(_0x56716d)for(const _0x5eeded of _0x56716d){_0x5eeded['match'](_0x3005dc['LearnHaveW'+_0x30d822(0x2c7)]);const _0x26902a=_0x51ccd8[_0x30d822(0x26f)](String,RegExp['$1']),_0x2b112b=_0x51ccd8['DKfsI'](Number,RegExp['$2']),_0x3e0c00=/^\d+$/[_0x30d822(0x1d5)](_0x26902a),_0xf08b79=_0x3e0c00?_0x51ccd8[_0x30d822(0x279)](Number,_0x26902a):DataManager[_0x30d822(0x466)+_0x30d822(0x365)](_0x26902a),_0x33f831=$dataWeapons[_0xf08b79];if(!_0x33f831)continue;const _0x2cb71f=$gameParty[_0x30d822(0x2bb)](_0x33f831),_0xb2a1cb=_0x51ccd8[_0x30d822(0x1da)],_0x4b531d=_0x51ccd8[_0x30d822(0x1c8)]['format'](_0x33f831[_0x30d822(0x5c0)],_0x33f831[_0x30d822(0x572)]);_0x591e93=this['ApplyUnloc'+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x2b112b,_0x2cb71f,_0xb2a1cb,_0x4b531d);}}{const _0x662b78=_0x1362d0[_0x30d822(0x231)](_0x3005dc['LearnHaveA'+_0x30d822(0x597)]);if(_0x662b78)for(const _0x5913fa of _0x662b78){_0x5913fa['match'](_0x3005dc[_0x30d822(0x22c)+_0x30d822(0x597)]);const _0x4eb027=_0x51ccd8[_0x30d822(0x488)](String,RegExp['$1']),_0x2c329f=_0x51ccd8[_0x30d822(0x5a9)](Number,RegExp['$2']),_0x1947ed=/^\d+$/['test'](_0x4eb027),_0x5acbef=_0x1947ed?_0x51ccd8[_0x30d822(0x26f)](Number,_0x4eb027):DataManager['getArmorId'+'WithName'](_0x4eb027),_0x18379d=$dataArmors[_0x5acbef];if(!_0x18379d)continue;const _0x4b7f13=$gameParty[_0x30d822(0x2bb)](_0x18379d),_0x1c0c41=_0x51ccd8[_0x30d822(0x56e)],_0x15d995=_0x51ccd8[_0x30d822(0x1c8)][_0x30d822(0x4c1)](_0x18379d[_0x30d822(0x5c0)],_0x18379d[_0x30d822(0x572)]);_0x591e93=this['ApplyUnloc'+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x2c329f,_0x4b7f13,_0x1c0c41,_0x15d995);}}{const _0x257c69=_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x63d)+'aram']);if(_0x257c69)for(const _0x430b61 of _0x257c69){_0x430b61[_0x30d822(0x231)](_0x3005dc['LearnHaveP'+'aram']);let _0x167a91=_0x51ccd8['EdAnX'](String,RegExp['$1'])[_0x30d822(0x5c8)+'e']()['trim']();const _0x1b3403=_0x51ccd8[_0x30d822(0x47b)](Number,RegExp['$2']);if(_0x51ccd8[_0x30d822(0x689)](_0x167a91,_0x51ccd8[_0x30d822(0x64a)]))_0x167a91=_0x51ccd8[_0x30d822(0x465)];if(_0x51ccd8[_0x30d822(0x2be)](_0x167a91,_0x51ccd8[_0x30d822(0x642)]))_0x167a91=_0x51ccd8[_0x30d822(0x465)];if(_0x51ccd8[_0x30d822(0x689)](_0x167a91,_0x51ccd8[_0x30d822(0x2b5)]))_0x167a91=_0x51ccd8[_0x30d822(0x423)];if(_0x51ccd8[_0x30d822(0x589)](_0x167a91,_0x51ccd8['tpkly']))_0x167a91=_0x51ccd8['FPlBu'];const _0x5a0ee3=[_0x51ccd8[_0x30d822(0x465)],_0x51ccd8[_0x30d822(0x423)],_0x51ccd8[_0x30d822(0x45c)],_0x51ccd8[_0x30d822(0x688)],_0x51ccd8['wcOxR'],_0x51ccd8[_0x30d822(0x6a4)],_0x51ccd8['zkXwh'],_0x51ccd8[_0x30d822(0x5de)]],_0x4db08c=_0x5a0ee3[_0x30d822(0x3ef)](_0x167a91),_0x1dfd23=_0x39349e[_0x30d822(0x62d)](_0x4db08c),_0x2b2e31=_0x51ccd8[_0x30d822(0x69b)],_0x55a245=TextManager[_0x30d822(0x67b)](_0x167a91);_0x591e93=this['ApplyUnloc'+'kHelpTextC'+_0x30d822(0x2f5)](_0x591e93,_0x1b3403,_0x1dfd23,_0x2b2e31,_0x55a245);}}{const _0x1bd250=_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x3dc)+'Param']);if(_0x1bd250)for(const _0x15a25f of _0x1bd250){_0x15a25f['match'](_0x3005dc[_0x30d822(0x3dc)+_0x30d822(0x4d8)]);let _0x80ee0f=_0x51ccd8[_0x30d822(0x5e4)](String,RegExp['$1'])[_0x30d822(0x5c8)+'e']()[_0x30d822(0x22f)]();const _0x15af11=_0x51ccd8[_0x30d822(0x633)](Number,RegExp['$2']),_0x3a4c10=[_0x51ccd8[_0x30d822(0x211)],_0x51ccd8[_0x30d822(0x6a7)],_0x51ccd8[_0x30d822(0x30f)],_0x51ccd8[_0x30d822(0x67d)],_0x51ccd8[_0x30d822(0x59b)],_0x51ccd8[_0x30d822(0x29e)],_0x51ccd8[_0x30d822(0x5d3)],_0x51ccd8[_0x30d822(0x616)],_0x51ccd8[_0x30d822(0x237)],_0x51ccd8[_0x30d822(0x1e7)]],_0x32a3d1=_0x3a4c10[_0x30d822(0x3ef)](_0x80ee0f),_0x2b541d=Math[_0x30d822(0x3a6)](_0x51ccd8[_0x30d822(0x5ec)](_0x39349e[_0x30d822(0x482)](_0x32a3d1),0xedc+0x15b*-0x1+-0x175*0x9)),_0x56dcaa=_0x51ccd8[_0x30d822(0x1f2)],_0x409c8a=TextManager[_0x30d822(0x67b)](_0x80ee0f);_0x591e93=this[_0x30d822(0x4d2)+_0x30d822(0x44f)+_0x30d822(0x2f5)](_0x591e93,_0x15af11,_0x2b541d,_0x56dcaa,_0x409c8a);}}{const _0x289794=_0x1362d0[_0x30d822(0x231)](_0x3005dc[_0x30d822(0x3f7)+_0x30d822(0x4d8)]);if(_0x289794)for(const _0x543020 of _0x289794){_0x543020['match'](_0x3005dc['LearnHaveS'+_0x30d822(0x4d8)]);let _0x34531b=_0x51ccd8['KEfiq'](String,RegExp['$1'])[_0x30d822(0x5c8)+'e']()[_0x30d822(0x22f)]();const _0x197b31=_0x51ccd8[_0x30d822(0x37d)](Number,RegExp['$2']),_0xdc219a=[_0x51ccd8[_0x30d822(0x57e)],_0x51ccd8[_0x30d822(0x3de)],_0x51ccd8[_0x30d822(0x5ef)],_0x51ccd8['GQffq'],_0x51ccd8[_0x30d822(0x284)],_0x51ccd8[_0x30d822(0x3be)],_0x51ccd8['hfCHm'],_0x51ccd8[_0x30d822(0x34d)],_0x51ccd8['mrkdC'],_0x51ccd8[_0x30d822(0x60d)]],_0x26e459=_0xdc219a[_0x30d822(0x3ef)](_0x34531b),_0x3db420=Math[_0x30d822(0x3a6)](_0x51ccd8['wqWHc'](_0x39349e[_0x30d822(0x2c2)](_0x26e459),-0x2261*-0x1+0x1*0x1105+-0x3302)),_0x43f489=_0x51ccd8[_0x30d822(0x2bc)],_0x494dd9=TextManager['paramName'](_0x34531b);_0x591e93=this['ApplyUnloc'+'kHelpTextC'+_0x30d822(0x2f5)](_0x591e93,_0x197b31,_0x3db420,_0x43f489,_0x494dd9);}}}_0x51ccd8['gjxQL'](_0x591e93,'')&&(_0x591e93=_0x43e9c5[_0x30d822(0x2d7)+'g']);let _0x824880=_0x43e9c5['helpFmt'][_0x30d822(0x4c1)](_0x591e93);if(_0x43e9c5[_0x30d822(0x3e5)+'ap']&&Imported[_0x30d822(0x5a2)+_0x30d822(0x220)])_0x824880=_0x51ccd8[_0x30d822(0x212)](_0x51ccd8[_0x30d822(0x445)],_0x824880);return _0x824880;},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x4d2)+_0x864467(0x44f)+'ondition']=function(_0x178902,_0x20e418,_0x1f3d99,_0x12d811,_0x50abc6){const _0x23e64a=_0x864467,_0x217cfd={'fHKUp':function(_0x3ab656,_0x49fdbf){return _0x3ab656*_0x49fdbf;},'ygriI':function(_0x3e921d,_0x49c043){return _0x3e921d/_0x49c043;},'IMGsj':function(_0x24ee73,_0x42b8f7){return _0x24ee73>_0x42b8f7;},'ulItC':function(_0x225074,_0xb92cd7){return _0x225074>_0xb92cd7;},'clNUD':function(_0x24cf06,_0x5000d0){return _0x24cf06>=_0x5000d0;},'LviPw':_0x23e64a(0x47a),'bnpog':_0x23e64a(0x33d),'FknpN':function(_0x224477,_0x5e1603){return _0x224477||_0x5e1603;},'bNnwl':'\x5cC[0]'},_0x22665f=TextManager[_0x23e64a(0x4a2)+_0x23e64a(0x497)],_0x5d9844=_0x22665f[_0x23e64a(0x1cc)+'t'];_0x1f3d99=_0x1f3d99[_0x23e64a(0x570)](0x16a7+0x1*0x1feb+-0x3692,_0x20e418);let _0x2122d6='';const _0x2e665f=_0x5d9844[_0x23e64a(0x23a)+'t'],_0x552034=_0x5d9844[_0x23e64a(0x4dc)+_0x23e64a(0x5e7)][_0x23e64a(0x4c1)](_0x1f3d99,_0x20e418),_0x47c382=_0x5d9844[_0x23e64a(0x5c7)+'rcent']['format'](Math[_0x23e64a(0x3a6)](_0x217cfd[_0x23e64a(0x2b3)](_0x217cfd['ygriI'](_0x1f3d99,_0x20e418),0x218a+-0x1196*0x2+0x206)));_0x2122d6=_0x2e665f[_0x23e64a(0x4c1)](_0x217cfd['IMGsj'](_0x552034['length'],_0x5d9844[_0x23e64a(0x432)+'ngthLimit'])?_0x47c382:_0x552034);if(_0x217cfd['ulItC'](_0x178902[_0x23e64a(0x3bb)],-0x720+0x34d+0x59*0xb)){_0x178902+=_0x22665f['helpSpacer'];if(_0x22665f[_0x23e64a(0x3a2)+'g'])_0x178902+='\x20';}return _0x217cfd[_0x23e64a(0x2a5)](_0x1f3d99,_0x20e418)&&(_0x178902+=_0x217cfd[_0x23e64a(0x69c)]['format'](_0x22665f[_0x23e64a(0x681)+_0x23e64a(0x26d)+'or']),_0x2122d6=_0x5d9844[_0x23e64a(0x209)+_0x23e64a(0x356)]),_0x178902+=(_0x5d9844[_0x12d811]||_0x217cfd[_0x23e64a(0x5cb)])[_0x23e64a(0x4c1)](_0x20e418,_0x2122d6,_0x217cfd[_0x23e64a(0x510)](_0x50abc6,''))['trim'](),_0x217cfd[_0x23e64a(0x2a5)](_0x1f3d99,_0x20e418)&&(_0x178902+=_0x217cfd[_0x23e64a(0x6a3)]),_0x178902;};function _0x5696(){const _0x30bc23=['WotWc','NkeVE','MaskItalic','HealTake','_learnSkil','zbsrP','in\x20order\x20f','ApplyUnloc','OTCSi','equipColor','vBRbW','escapes','Conditions','Param','PassiveA','pStatus_dr','getStypeId','progressFr','iveLearnPr','ttleDefeat','siveCancel','setText','unequipHid','illTypeWin','Imported.V','HelpFmt','constructo','maskLetter','AlMGf','vhyOj','YxDFN','nrBbV','wWgqC','bacJd','miss','JEvca','illLearnSy','TTlVO','separateUn','hmjMM','nouno','JkCeU','eNJht','LearnEscap','jlQNS','Assists','FzJMk','LzpBS','haveSParam','NoMaskUnle','ipPassives','Inflict\x20%3','HideLearne','brIFH','pvVJZ','Plugin\x20Man','RegExp','STR','Game_Actio','0|3|1|4|2','isSkillLea','ppablePass','tHpMp','aNZGO','FNKYP','qgZPS','yhpWI','LearnSType','isMagical','FknpN','LearnState','MVlSW','inBattle','_itemIDs','ssiveIcon','FOFiw','MAX\x20MP','%1/%2','iveRawIDs','tionUsage','drawEquipp','killsState','HelpDescri','n_executeD','\x20Damage\x20%1','pPassiveKd','pup','getArmorId','er_addStat','haveWeapon','Passive\x20Ef','mVMPT','undType','edEquippab','esList','sRDjY','veColor','ShowTextPo','rUpdY','DqOwa','Qfzge','maskIcon','sCore\x20need','ottsx','YupkK','l\x20%1\x20%2','-----','vLHnw','SHBBs','certainHit','ected','passiveSta','_subject','tVFIq','forgetEqui','l_createSk','other\x20Tier','iveCapacit','edEquipped','ssivesRawI','isYuD','elements','fbIZn','healDeal','iption','assiveSyst','gpWLy','LearnHaveG','scrollTo','n_apply','drawItemNa','victory','quip','height','includes','critTake','niBdX','ssive','exit','\x20into\x20the\x20','_data','sort','attack','wMoei','qFTYe','arnProgres','ysSFq','LearnCertS','setupIniti','ubobe','DEBUG','CustomLear','ARRAYFUNC','ect','pPassiveTr','tAYIx','getElement','mallest\x20to','addEquipPa','stateTake','cKzbm','TextPopupF','pop','aTXrV','CbMer','clamp','mGKsi','name','LMvRa','maxCols','VisuMZ_2_S','ease\x20updat','qRTbv','ttleEscape','ive','imGnK','Fotda','IygUD','HIlzG','QuGLO','m_initiali','[0]','LearnEvade','SlyCF','%1/%2%3','pPassive','<WordWrap>','MinimumCos','ActorRemov','e\x20it\x20in\x20th','VxlJf','Use\x20%1\x20Ite','mainAreaHe','jTWvZ','WxQOJ','PassiveB','nlearnedEq','getSkillTy','tionState','Attack\x20%1\x20','TShgB','deathState','_cache_act','LinkLearn','rmor','physicalSk','on\x20does\x20no','LUK','mqKGD','qqOCn','aIPCl','vhIkm','tes','yTfYD','clearRect','VisuMZ_1_M','UYlSl','ActorForge','syKMj','return\x200','sive','vedVk','FebqB','parse','zgOXU','Usage','yColor','crYBi','Ruhub','LearnPopup','Die\x20%1\x20Tim','_passiveSt','etPassive','NewEquipPa','ARRAYEVAL','evaded','LearnItemU','_level','Reach\x20%1\x20%','ZsVBG','YgldD','getColor','addbj','lePassiveI','capacity','iconIndex','ves','mber','temEnabled','branchLear','dsDEp','jhpCo','progressPe','toUpperCas','isAttack','l_create','bnpog','TlAet','Color','EbHna','KCWKT','onEquipPas','FulAN','States','VNIej','ssives','Window_Ski','skillTypes','replace','prototype','ated\x20','qlAtG','DefaultCos','wCommand','getItemIdW','wzovn','HiqCI','assiveName','_setup','SeparateUn','MRG','ECczr','DHlWp','s.\x0aPlease\x20','action','IYeWZ','itbku','icon','YcuIf','Cnamu','oreEngine','ned','HHNbZ','psrog','KuNoS','activate','vPrav','isPhysical','expParams','LhwLM','YFGJp','ntDeal','GlobalForg','IsMasked','2_EquipPas','changePain','MAXHP','NYmzB','maskItalic','cancel','needs\x20to\x20b','dowItem','hasEquipPa','MvOpj','Possess\x20×%','setHelpWin','_bypassUne','%1\x27s\x20versi','aNRTL','Receive\x20%1','iJJEY','goJsX','TBeje','pPassiveWi','aram','version','ype','setHandler','haveArmor','1%3\x20%2','MdrQX','deDdi','HfWPM','bwtZK','EquipName','TVLKU','level','push','iconHeight','boGjh','HIT','StypeId','costIconLi','qpJYo','DefaultSho','5747DuTtgf','Changes','iveSys_Sce','YHEqZ','MDR','arnedEquip','RhXyF','ppedPassiv','HSxOD','param','JDujf','liqpF','learnings','nickname','Progress','fFTcg','equippedPa','Window_Sel','learnShowT','uippablePa','iveStatusW','l_refreshA','gEdBY','fSCHG','lor','LearnHaveP','DhnCX','VisuMZ_1_S','iKwEL','VisuMZ_1_I','YzROG','EquippedCo','magSkillUs','tems','YAuGP','learnAutoE','LearnHaveW','foJte','ODIkB','usCore','XbNiy','AzblS','mand','er_process','ORbwY','process_Vi','%3\x20%2','MRF','stypeUse','CkkZQ','wjAgo','eBiQo','DiEsn','EVA','JSON','pPassiveBa','STRUCT','updateHelp','llList_set','Notetags','AsPug','ritHitTime','Times','ablePassiv','TboVn','ss_getLear','ysgSN','MeetsLearn','wNSID','eLoaded','setActor','iturE','_cache','Vocab','GQsin','Skills\x20%2','xTRMm','ight','NnJKA','ssiveLearn','essJS','VRdSb','eCommandLi','resetTextC','makeComman','aGRrU','checkLearn','paramName','3|5|6|2|4|','arrcb','min','nkXXv','kTimes','helpMeetCo','e\x20plugin\x20l','ithName','currencyUn','drawText','lineHeight','haveItem','rvEuA','geFvq','defaultCos','eMask','tionResult','healTake','eMrMA','\x20/\x205)\x20*\x205','RdTye','ityFor','gold','ow_BgType','ltiVS','MAXMP','totalHealD','helpSpacer','textPopupF','rcent','Reach\x20Leve','jCEnp','LviPw','concat','mytnG','attackTime','kMiNp','FkTOt','TWYTc','bNnwl','eJxop','makeDeepCo','itions','tLTIf','assiveCost','assiveIcon','idden','ier\x20number','SortStyle','IcayJ','MAX\x20HP','ogress','descriptio','equipPassi','Guard\x20%1\x20T','stateDeal','earnedEqui','dAnyName','anager.','Text','priority','LearnDealC','awItemData','hIWEv','\x5cC[%1]%2\x5cC','isEquippab','imes\x20%2','selectLast','isActor','isState','OKDXE','\x20%3\x20plugin','ByEQX','isEnabled','thGkD','apHZz','cCunI','itical\x20Hit','MaskLetter','WemfF','zVisO','lroUW','getStateId','helpDescFm','CNT','Skill','apacity','EquipPassi','haveParam','ZgJqH','alLearnedE','sXvoE','test','addWindow','actorId','DnygV','\x20Total\x20Bat','oqzOM','quipped','PDR','kAObC','emNVv','emies\x20%2','iaMtB','uippedPass','refresh','\x20to\x20be\x20upd','CostFmt','System','defeat','ZhShd','XBdpc','show','lNGii','Take','LearnHaveI','\x20a\x20Tier\x20%2','showCost1','YpQNZ','BranchLear','tTrait','BjnKc','%1%','n_applyGlo','age','_learnable','YsvhZ','Defeat\x20%1\x20','max','VisuMZ_1_E','kjMPb','OpfSE','itemLineRe','stem\x20needs','UfZgx','costNumber','ettings','getSkillLe','wjSks','TCR','thepd','sives','index','THimO','progressCo','aced\x20over\x20','SZXMY','registerCo','Skeub','WithName','ption','oqoFQ','fEHyG','TmqMZ','user','qgoaH','CJqqg','WKQFu','OtMcc','width','siveSys\x20to','sortBy','MCR','create','bgType','TSIKy','mOijV','essageCore','tle\x20Damage','oriYG','alAlreadyE','apacityExp','Class','ystem','MaskUnlear','Gjekv','PassiveSys','0|1','eal','LearnHaveA','addState','isGuard','trim','zhIkC','match','eLuhG','StateIDs','xQREU','1162072krApkb','OitwV','yyBXH','AOoMP','all','progressFm','getEquipPa','Parse_Note','nable','MuFLw','LearnPhysS','t\x20match\x20pl','isuMZ_1_El','battle','every','eMObD','722678XxXxoc','102TYaQjE','_getEquipP','LearnVicto','mmand','sortItems','AlreadyEqu','makeItemLi','skillUse','UtVnp','processEqu','Use\x20%1\x20%3\x20','lePassiveE','eStateCond','CJlju','BAkFT','rnMode','LearnCount','showCost0','calcWindow','ENlmy','fontItalic','isSkill','LearnedEqu','blePassive','IptqS','SETTINGS','ixWWY','minCapacit','removeEqui','\x20×%1\x20%2','rpFWc','neSkill','magicalSki','osOTX','mes\x20%2','ofGqk','_cache_cla','dmgTake','ElementSta','nditionCol','General','DKfsI','_item','oxYyo','HeCNZ','siveComman','eEnd','yData','s\x20%2','quippableP','attles\x20%2','Sprko','ectable_se','llType_mak','325395VUGJTG','lePassive','hide','LearnEleme','imes','PEJLg','4|1|0|5|2|','guardTimes','zumbW','vObUb','WShqW','hYruf','MaskIcon','pablePassi','_onDatabas','ndow','htRPr','getLearnEq','_equipPass','er_gainHp','SkillLinkL','_actor','or\x20VisuMZ_','ntTake','pedPassive','VShWQ','Reach\x20%1%\x20','drawUnlear','currentCla','Equippable','DmgTake','qARvN','elementDea','LuWpY','CHgyd','oryJS','Deaths','znBlf','ActorIDs','qrsfi','VisuMZ_0_C','clNUD','old','resetFontS','Wedru','dAnyID','isEquipPas','addPassive','BsZdY','JGKtd','swFNe','_skillType','gRMsV','CEV','reduce','fHKUp','bKpYB','jFSKL','Battles\x20%2','tibility','DFNqC','learned','Deal\x20%1\x20Cr','numItems','KsHFX','%1\x20is\x20inco','jQLKA','eUnlearned','auLmM','autoRemova','sparam','skill','getUnlearn','YNXlZ','quipPassiv','eapon','WDgMd','playOkSoun','_weaponIDs','lePassives','Scene_Boot','Window_Sho','TRG','allMembers','ShowCosts','result','moHPo','nPassive','Mlvxv','IDs','\x20plugin\x20pl','helpNothin','aXvFf','costFmt','drawIcon','gZpCv','drawItemDa','ementStatu','azXJh','otCmI','czTYf','wYIju','ynlJw','Omipg','ers','e\x20Plugin\x20M','LzNmG','veList_BgT','rDLJe','IxwtL','veMaxCapac','isuMZ_2_Sk','ZvkUT','AXdWT','itemAt','DuVih','temsEquips','Ofexp','physSkillU','remove','Game_Battl','ondition','HelpText','NXTNH','_statusWin','drawTextEx','BHrSt','hasTraitSe','Escape\x20%1\x20','ist\x20from\x20s','FksNf','CGCZw','Evade\x20%1\x20T','LearnBattl','_stypeId','40821jmIdYb','setEquipPa','PassiveSta','attackElem','ORXbW','kills','DmgDeal','ager.','or_getLear','maxCapacit','arned','Perform\x20%1','qShOI','FJHhc','addCommand','esCore','SmEmj','LearnableE','maxItems','MNlZi','MEV','aitSlayer','KitPG','CePQC','g\x20%2','lls\x20%2','bJlHB','tags_Descr','EVAL','ents','BattleVict','ired\x20plugi','veUnlearne','ZxWul','kOkMb','executeDam','map','\x5c}Unlearne','uwrRg','quipHidden','IsPassiveH','HgSQi','RwSZu','ARRAYJSON','sage','earnPassiv','TGR','suMZ_Equip','quXUg','GlobalAddU','MncyS','Kill\x20%1\x20En','deaths','tgmVr','YXJKp','addUnlearn','MMP','availableU','---','evGSC','\x20work.','1352166FCngwF','Passive','ParseState','isCurrentI','EXR','YhzgY','Cmwqk','vzyym','ssiveComma','call','text','EobQL','pPassiveLe','xnHgw','commandSty','CapacityFm','erBase_add','ECWSP','deselect','AGI','dow','MrPcC','mplete','learnedPas','ARRAYSTRUC','tain\x20Hit\x20S','HsVfP','MdRnL','ATK','veCurrentC','createEqui','totalDmgDe','setBackgro','XrHAV','es\x20%2','AUNts','ShopStatus','dWithName','BjJCv','meetSkillL','vpwik','_tempActor','mit','MaskName','SztLt','critDeal','Window_Bas','DTjXy','gHiKI','qyRmE','maxTurns','Passive\x20Ca','MakeUnlock','HCItS','_refresh','elementTak','ms\x20%2','note','Unlearned','YijtW','kZRTc','eQgDE','uBDjj','JIcRj','KtSsr','ns:\x5cC[0]\x20%','_helpWindo','BuHiB','ceCNk','itemUse','yCqOj','BattleCore','fsqUA','dkPxP','cRlsU','ssiveCost','removeUnle','Game_Actor','dList','dAllName','escape','commandEqu','n\x20Conditio','showCostAn','SkillLearn','haveXParam','innerHeigh','GlobalRemo','ConvertPar','tles\x20%2','\x20%2','dAllID','initialize','gainHp','ndVisible','pRKLp','guard','MHP','helpSpacin','pPassiveHp','tusWindowR','isItem','round','(Progress\x20','NUM','learnEquip','ParseAllNo','\x20%1\x20Times\x20','zzUBN','wEquipPass','MaximumCos','ShowCost1','ZFvlE','%1%2','atusWindow','gOpjn','createSkil','Lose\x20%1\x20Ba','\x5cI[%1]','\x5cI[%1]%2','LearnGuard','yCnSu','tes_Noteta','length','tle\x20Healin','earnable','toVVb','vCzLh','PDHmS','wItem','stXAL','item','dZAlz','yTextColor','oAwMV','addEquippa','LearnDefea','rmula','split','LearnTotal','showStatus','ssiveName','Use\x20%1\x20Ski','KeFTQ','assists','GVrHe','9qVDPhu','mMJHN','IKczt','DEF','processBat','DRXBu','initEquipP','pes','innerWidth','tesFromOth','LearnHaveX','BnmLy','ArQJL','Window','rwWhQ','JZwCK','left','Scene_Skil','isCertainH','helpWordWr','actionTime','nVmdZ','traitSlaye','playEquip','Height','lTypeWindo','FDR','CwVOl','ls\x20%2','indexOf','HRG','CapacityTe','ttleVictor','showUnlear','%1\x20has\x20lea','LearnMissT','jVkpB','LearnHaveS','_initializ','12iFpEVU','applyGloba','join','tionElemen','_equippedP','fxCyN','veWindowRe','siveOk','Miss\x20%1\x20Ti','filter','50HfhAHu','stype','_scene','CheckCompa','fect','acrVj','heal','VNxEN','isAlive','er_onBattl','TzgHP','ShowUnlear','abs','wISaV','leEquippab','NKddU','nCondText','Game_Party','4|0|3|5|1|','OaBcE','Deal','ttles\x20%2','e_drawItem','Game_Syste','command','QwsOQ','rkRect','tOpacity','BattleDefe','Use\x20%1\x20Mag','updateEqui','pPassiveAc','FPlBu','LearnTakeC','amage','\x20largest\x20t','KFavo','lementStat','Times\x20%2','wDtPa','CommandNam','DviBE','Loaded','killLearnS','GetElement','FromObj','Core','progressLe','tleCoreJS','d\x5c{','contentsBa','denPassive','setup','jzrYd','vscBW','assives','aced\x20on\x20th','_armorIDs','XGdvQ','kill','SkillsFrom','isEnemy','mrjCJ','LearnAutoE','KDcml','StatusWind','raAni','CapacityFo','zOrrv','earned','gAQEM','quippedPas','OkmOY','_elementID','dmgDeal','1|3|2|0|4','kHelpTextC','WzJog','CRI','ing\x20a\x20requ','erPlugins','kda','Possess\x20%3','sCore','esA','changeText','capacityFm','actor','isLearnedE','kTzBz','_learnedEq','bal','tem','indow','%3\x20Enemies','BGSAx','jUtpo','HealDeal','czjje','getWeaponI','evade','makeSkillL','bind','skillLearn','EquipCost','OtherPlugi','ity','Passives','colSpacing','PIqTw','equipAdjus','QxSCh','ItaJu','ipPassive','eState','golQy','tbhhT','e\x20updated\x20','veSys','\x5cC[%1]','mPhkc','MrnUe','haveGold','IHYvR','xmHBN','ctor','yDKlj','xparam','dVisible','Name','Heal','tetags','missed','EYyff','rwQwJ','itemPaddin','iconWidth','eCost','dated\x20','SLQdY','eStateData','textSizeEx','jqCgr','nedText','ngthLimit','CheckOverC','rned\x20%3%2!','MDF','IVE_SYS','ARHha','atJS','\x20Times\x20%2','LearnLevel','drawItemKe','qWLSd','nableEquip','IdWithName','ZHMxH','iveWindow','EQUIP_PASS','SkillsStat','HTNJy','ams','Receive\x20%3','arnPassive','Settings','releaseOve','Kills','MAT','NkRKj','ssiveCapac','nEquipPass','_initEquip','drawItem','KIJBt','2383770OobFsa','LearnAttac','PHA','subject','getLearnab','learnSkill','UJWiP','s\x20to\x20be\x20up','ives','4|0|5|1|3|','rrectly\x20pl','maskUnlear','lODBr','mjddw','critical','format','LearnMagSk','LearnSkill','ill','PassiveRaw','JgVVP','availableI','tHelpWindo','refreshAct','changeExp'];_0x5696=function(){return _0x30bc23;};return _0x5696();}function Window_EquipPassiveStatus(){const _0xab5b89=_0x864467;this[_0xab5b89(0x39c)](...arguments);}Window_EquipPassiveStatus[_0x864467(0x5d8)]=Object[_0x864467(0x21c)](Window_Base[_0x864467(0x5d8)]),Window_EquipPassiveStatus[_0x864467(0x5d8)][_0x864467(0x4e5)+'r']=Window_EquipPassiveStatus,Window_EquipPassiveStatus[_0x864467(0x25f)]={'showWindow':VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)]['Settings'][_0x864467(0x3df)][_0x864467(0x3cc)+'Window']??!![],'bgType':VisuMZ['EquipPassi'+'veSys'][_0x864467(0x4a8)][_0x864467(0x3df)][_0x864467(0x444)+_0x864467(0x693)]??-0x161a+0x947+0x1d5*0x7,'maxCapacityTextColor':VisuMZ[_0x864467(0x1d0)+'veSys']['Settings'][_0x864467(0x3df)]['MaxCapacit'+_0x864467(0x5ad)]??-0x25e8+0x109b+0x155e},Window_EquipPassiveStatus['prototype'][_0x864467(0x39c)]=function(_0x30e16f){const _0x1d4bbd=_0x864467;Window_Base[_0x1d4bbd(0x5d8)][_0x1d4bbd(0x39c)]['call'](this,_0x30e16f),this[_0x1d4bbd(0x27e)]();},Window_EquipPassiveStatus[_0x864467(0x5d8)][_0x864467(0x66a)]=function(_0x4811e5){const _0x2f4dc1=_0x864467,_0x5e3075={'bxeLn':function(_0x46abff,_0x473e5a){return _0x46abff!==_0x473e5a;}};_0x5e3075['bxeLn'](this[_0x2f4dc1(0x291)],_0x4811e5)&&(this[_0x2f4dc1(0x291)]=_0x4811e5,this[_0x2f4dc1(0x1e2)]());},Window_EquipPassiveStatus[_0x864467(0x5d8)][_0x864467(0x1e2)]=function(){const _0x4a51af=_0x864467,_0x116d0c={'SlyCF':function(_0x57e2b5,_0x18b12b){return _0x57e2b5-_0x18b12b;},'xmHBN':function(_0x47f4e1,_0x8473e9){return _0x47f4e1*_0x8473e9;},'WShqW':_0x4a51af(0x3e2),'qRTbv':function(_0xb79529,_0xa2d1){return _0xb79529>_0xa2d1;},'TzgHP':function(_0x4ba76a,_0x1fd00b){return _0x4ba76a>=_0x1fd00b;},'rBAjU':_0x4a51af(0x6bc)+_0x4a51af(0x580),'EobQL':_0x4a51af(0x3b6),'FOFiw':function(_0x1e1fe7,_0x132144){return _0x1e1fe7-_0x132144;}};this['contents']['clear'](),this['resetFontS'+'ettings']();{const _0x5e88b8=TextManager[_0x4a51af(0x4a2)+_0x4a51af(0x497)]['capacity'];this[_0x4a51af(0x458)+_0x4a51af(0x5cd)](ColorManager['systemColo'+'r']());const _0x12fa4b=_0x116d0c[_0x4a51af(0x582)](this[_0x4a51af(0x3da)],_0x116d0c[_0x4a51af(0x47f)](this[_0x4a51af(0x48a)+'g'](),-0x54f+0x10a7+-0xb56));this[_0x4a51af(0x685)](_0x5e88b8,this[_0x4a51af(0x48a)+'g'](),-0x17fa+-0xd06+-0x1*-0x2500,_0x12fa4b,_0x116d0c[_0x4a51af(0x286)]),this[_0x4a51af(0x2a7)+_0x4a51af(0x201)]();}if(this[_0x4a51af(0x291)]){const _0x223d80=TextManager[_0x4a51af(0x4a2)+_0x4a51af(0x497)][_0x4a51af(0x459)+'t'];let _0x55f76e=this['_actor']['equipPassi'+_0x4a51af(0x35d)+_0x4a51af(0x1cf)](),_0x26a3d2=this['_actor']['equipPassi'+'veMaxCapac'+_0x4a51af(0x46d)]();const _0x31d30b=Window_EquipPassiveStatus['SETTINGS'][_0x4a51af(0x30c)+_0x4a51af(0x3c5)]||0xd*0x2cf+0x162f+-0x3ab2;_0x116d0c[_0x4a51af(0x577)](_0x31d30b,0x199c+0x8*0x1e7+-0x28d4)&&_0x116d0c[_0x4a51af(0x40d)](_0x55f76e,_0x26a3d2)&&(_0x55f76e=_0x116d0c['rBAjU'][_0x4a51af(0x4c1)](_0x31d30b,_0x55f76e),_0x26a3d2=_0x116d0c['rBAjU'][_0x4a51af(0x4c1)](_0x31d30b,_0x26a3d2));const _0x1be255=_0x116d0c[_0x4a51af(0x34b)][_0x4a51af(0x4c1)](ImageManager[_0x4a51af(0x4a2)+_0x4a51af(0x497)][_0x4a51af(0x5bf)]),_0x29be54=_0x223d80[_0x4a51af(0x4c1)](_0x55f76e,_0x26a3d2,_0x1be255),_0xc648ab=this['textSizeEx'](_0x29be54)[_0x4a51af(0x218)],_0x53dc84=_0x116d0c[_0x4a51af(0x582)](_0x116d0c[_0x4a51af(0x516)](this[_0x4a51af(0x3da)],this[_0x4a51af(0x48a)+'g']()),_0xc648ab);this['drawTextEx'](_0x29be54,_0x53dc84,-0x1c91+0x1f8f+-0x2*0x17f);}},VisuMZ[_0x864467(0x1d0)+_0x864467(0x479)][_0x864467(0x561)]=![];