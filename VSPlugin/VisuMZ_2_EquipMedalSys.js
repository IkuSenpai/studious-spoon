//=============================================================================
// VisuStella MZ - Equip Medal System
// VisuMZ_2_EquipMedalSys.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_EquipMedalSys = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EquipMedalSys = VisuMZ.EquipMedalSys || {};
VisuMZ.EquipMedalSys.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.04] [EquipMedalSys]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Equip_Medal_System_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_ItemsEquipsCore
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Medals are a type of personalized equipment that actors can wear. They
 * function just like pieces of armor which means they can get all of the
 * parameter bonuses and traits that armors add. Medals can be acquired through
 * various conditions and allow your actors can be customized in more ways.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Medals can be found and toggled from the equip scene.
 * * Medals are limited to the medal slots that an actor has and the amount of
 *   slots that a medal takes up.
 * * Since medals are armors in the database, they also take on all of the
 *   aspects that armors do like parameters and traits.
 * * Determine which medals an actor can acquire through notetags.
 * * Some medals can be acquired for the whole party when the player acquires
 *   certain items, weapons, armors, or key items.
 * * Medals can be acquired by fulfilling the conditions needed to be met.
 * * Upon acquiring medals, actors can branch out and unlock more medals to be
 *   acquired through various means.
 * * Some of these conditions include leveling, winning battles, escaping,
 *   being afflicted by states, attacking a certain amount of times, and more!
 * * Give and remove medals to and from all actors in a party globally.
 * * Medals have the ability to gain Glory, a form of Medal EXP, to evolve and
 *   transform into other medals.
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
 * * VisuMZ_1_ItemsEquipsCore
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
 * How Equippable Medals Work
 * ============================================================================
 *
 * This section explains how Equippable Medals work in detail.
 *
 * ---
 * 
 * Armors at Base
 *
 * Equippable Medals are personalized armors that actors can equip and unequip
 * as long as the actors have enough "Medal Slots" to support the medals. Since
 * medals are armors at the fundamental level, they have all of the traits that
 * armors have access to in addition to the ability to give stat bonuses.
 *
 * ---
 *
 * Unlock Conditions
 * 
 * If an actor has unacquired Equippable Medals listed, that actor can attempt
 * to meet the conditions of those medals and acquire them. Actors will not be
 * able to acquire medals that aren't listed, regardless of the actor meeting
 * all the unlock conditions for the unlisted Equippable Medals.
 * 
 * Unlock conditions can range from things like fighting 5 battles since the
 * time the Equippable Medal has been listed to things like casting 8 magical
 * skills. There is a huge list of unlock conditions that can be used found in
 * the notetags section.
 *
 * ---
 *
 * Medal Evolution
 * 
 * When Equipped Medals are worn in battle, they can earn "Glory", a type of
 * EXP for medals. Enemies can reward players different amounts of Medal EXP
 * based off their notetags.
 * 
 * When medals receive enough Medal EXP, they will "evolve", transforming them
 * into a different Medal that can be worn by the actor. By default, the
 * previous Medal will be hidden away in favor of the newer evolved Medal. Any
 * excess Medal EXP will be transferred over to the newer evolved Medal.
 * 
 * Medal Evolution does not take into consideration Unlock Conditions. Evolving
 * a Medal can happen without fulfilling Unlock Conditions as evolutions just
 * bypass them altogether.
 * 
 * Not all medals need to evolve. Only those that can evolve will take in Medal
 * EXP. In Scene_Equip, where medals can be viewed, a gauge will be displayed
 * next to evolvable medals to represent the progress made so far in acquiring
 * Medal EXP for those medals.
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
 * notetag is the <Equip Medal Learn Defeat name Trait: x> notetag.
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
 * VisuMZ_3_VictoryAftermath
 * 
 * If Victory Aftermath is installed (and updated to the latest version),
 * reward strips can be updated to show the amount of Glory (Medal EXP) that
 * is gained in battle.
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
 * <Equip Medal Cost: x>
 *
 * - Used for: Armor Notetags
 * - Determines the Medal Slot cost of the Equippable Medal.
 * - Replace 'x' with a number representing the Medal Slot cost.
 * - If this notetag is not used, the Medal Slot cost will default to
 *   the setting found in the Plugin Parameters.
 *
 * ---
 * 
 * <Learnable Equip Medal: id>
 * <Learnable Equip Medals: id, id, id>
 * 
 * <Learnable Equip Medal: name>
 * <Learnable Equip Medals: name, name, name>
 * 
 * <Learnable Equip Medals>
 *  name
 *  name
 *  name
 * </Learnable Equip Medals>
 * 
 * - Used for: Actor, Class Notetags
 * - Determines which Equippable Medals that actors and classes can learn.
 * - Replace 'id' with a number representing the ID of the medal.
 * - Replace 'name' with the name of the medal.
 * 
 * ---
 * 
 * <Equip Medal Icon: x>
 * <Equip Medal Name: name>
 * 
 * - Used for: Armor Notetags
 * - Changes the icon and name of the Equippable Medal to something different
 *   than how it is listed in the database or found in other menus.
 * - Replace 'x' with a number representing the icon index you want.
 * - Replace 'name' with the text of the name you want used.
 * 
 * ---
 * 
 * <Equip Medal Help Description>
 *  text
 *  text
 * </Equip Medal Help Description>
 * 
 * - Used for: Armor Notetags
 * - Changes the help description of the Equippable Medal to something
 *   different than how it is listed in the database or found in other menus.
 * - Replace 'text' with text you want displayed when this medal is selected
 *   and can be possibly equipped.
 * 
 * ---
 * 
 * <Learned Equip Medal: id>
 * <Learned Equip Medals: id, id, id>
 * 
 * <Learned Equip Medal: name>
 * <Learned Equip Medals: name, name, name>
 * 
 * - Used for: Actor Notetags
 * - Allows this actor to already have learned this Equippable Medal by
 *   default so that it is available when the actor joins your party.
 * - These Equippable Medals do not have to be listed through the learnable
 *   notetags.
 * - Replace 'id' with a number representing the ID of the medal.
 * - Replace 'name' with the name of the medal.
 * 
 * ---
 * 
 * <Already Equip Medal: id>
 * <Already Equip Medals: id, id, id>
 * 
 * <Already Equip Medal: name>
 * <Already Equip Medals: name, name, name>
 * 
 * - Used for: Actor Notetags
 * - Allows this actor to already have learned this Equippable Medal and has
 *   it equipped by default so that it is available when the actor joins your
 *   party.
 * - These Equippable Medals do not have to be listed through the learnable
 *   notetags.
 * - Replace 'id' with a number representing the ID of the medal.
 * - Replace 'name' with the name of the medal.
 * 
 * ---
 * 
 * <Branch Learn Equip Medal: id>
 * <Branch Learn Equip Medals: id, id, id>
 * 
 * <Branch Learn Equip Medal: name>
 * <Branch Learn Equip Medals: name, name, name>
 * 
 * - Used for: Armor Notetags
 * - When this Equippable Medal is learned, also learn target medal(s).
 * - Target medal(s) does not have to be learnable listed.
 * - Replace 'id' with a number representing the ID of the target medal.
 * - Replace 'name' with the name of the target medal.
 * 
 * ---
 * 
 * <Branch Learnable Equip Medal: id>
 * <Branch Learnable Equip Medals: id, id, id>
 * 
 * <Branch Learnable Equip Medal: name>
 * <Branch Learnable Equip Medals: name, name, name>
 * 
 * - Used for: Armor Notetags
 * - When this Equippable Medal is learned, add target medal(s) to the
 *   actor's learnable medal list.
 * - Replace 'id' with a number representing the ID of the target medal.
 * - Replace 'name' with the name of the target medal.
 * 
 * ---
 * 
 * <Link Learn Equip Medal: id>
 * <Link Learn Equip Medals: id, id, id>
 * 
 * <Link Learn Equip Medal: name>
 * <Link Learn Equip Medals: name, name, name>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is gained, also learn target medal(s).
 * - Target medal(s) does not have to be learnable listed.
 * - Replace 'id' with a number representing the ID of the target medal.
 * - Replace 'name' with the name of the target medal.
 * 
 * ---
 * 
 * <Link Learnable Equip Medal: id>
 * <Link Learnable Equip Medals: id, id, id>
 * 
 * <Link Learnable Equip Medal: name>
 * <Link Learnable Equip Medals: name, name, name>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is gained, add target medal(s) to the
 *   actor's learnable medal list.
 * - Replace 'id' with a number representing the ID of the target medal.
 * - Replace 'name' with the name of the target medal.
 * 
 * ---
 * 
 * === Hiding-Related Notetags ===
 * 
 * ---
 * 
 * <Hide If Not Learned Equip Medal>
 * 
 * - Used for: Armor Notetags
 * - Bypasses Medals listing and hides the medal regardless of the
 *   Plugin Parameter settings.
 * 
 * ---
 * 
 * <Hide If Learned Equip Medal: id>
 * <Hide If Learned Equip Medal: name>
 * 
 * <Hide If Learned All Equip Medals: id, id, id>
 * <Hide If Learned All Equip Medals: name, name, name>
 * 
 * <Hide If Learned Any Equip Medals: id, id, id>
 * <Hide If Learned Any Equip Medals: name, name, name>
 * 
 * - Used for: Armor Notetags
 * - Hides the medal from the Medals listing based on whether or not
 *   other medals are learned.
 * - Replace 'id' with a number representing the ID of the medal.
 * - Replace 'name' with the name of the medal.
 * - The 'All' notetag variant requires all of the listed medals to be
 *   learned in order for this medal to be hidden.
 * - The 'Any' notetag variant requires only one of the listed medals to be
 *   learned in order for this medal to be hidden.
 * 
 * ---
 * 
 * === Masking-Related Notetags ===
 * 
 * ---
 * 
 * <Mask If Not Learned Equip Medal>
 * <No Mask If Not Learned Equip Medal>
 * 
 * - Used for: Armor Notetags
 * - Bypasses the masking settings determined in the Plugin Parameters to mask
 *   or not mask the Equippable Medal if the medal is not learned.
 * 
 * ---
 * 
 * <Equip Medal Mask Name: name>
 * 
 * - Used for: Armor Notetags
 * - Instead of displaying ?'s for the mask name, this allows you to insert
 *   custom mask names instead.
 * - Replace 'name' with the text you want for the mask name.
 * 
 * ---
 * 
 * === Medal Evolution-Related Notetags ===
 * 
 * ---
 * 
 * <Equip Medal Evolves Into id: exp>
 * <Equip Medal Evolves Into name: exp>
 * 
 * - Used for: Armor Notetags
 * - Allows this Equippable Medal to evolve into target medal upon reaching
 *   'exp' Medal EXP.
 * - Equipped Medal must be equipped in order to receive Medal EXP.
 * - Replace 'id' with a number representing the ID of the evolution medal ID
 *   (armor ID).
 * - Replace 'name' with text representing the evolution medal (armor) name.
 * - Replace 'exp' with a number representing the amount of Medal EXP needed
 *   for this Equippable Medal to evolve.
 * - If no evolve notetags are used, the Equippable Medal will not evolve and
 *   won't receive any Medal EXP.
 * 
 * ---
 * 
 * <Equip Medal Evolves Into Next: exp>
 * 
 * - Used for: Armor Notetags
 * - Allows this Equippable Medal to evolve into the next available armor as
 *   a medal in the database upon reaching 'exp' Medal EXP.
 *   - The target armor/medal is just whatever this Equippable Medal's ID is
 *     but +1.
 * - Equipped Medal must be equipped in order to receive Medal EXP.
 * - Replace 'exp' with a number representing the amount of Medal EXP needed
 *   for this Equippable Medal to evolve.
 * - If no evolve notetags are used, the Equippable Medal will not evolve and
 *   won't receive any Medal EXP.
 * 
 * ---
 * 
 * <Medal EXP: x>
 * 
 * - Used for: Enemy Notetags
 * - Determines how much Medal EXP this enemy will give when defeated.
 * - Replace 'x' with a number representing the amount of Medal EXP given.
 * - If this notetag is not used, the Medal EXP given will be determined by
 *   the Plugin Parameters.
 * 
 * ---
 * 
 * <Medal EXP Rate: x%>
 * 
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Increases the amount of Medal EXP the affected actor will gain by a
 *   percentile value.
 * - Replace 'x' with a percentage number representing the amount of Medal EXP
 *   that will be acquired.
 * - This stacks multiplicatively with each other.
 * - This does not apply when Medal EXP are directly added.
 * 
 * ---
 * 
 * <Equip Medal Full EXP Gauge>
 * 
 * - Used for: Armor Notetags
 * - If you want an Equippable Medal to have a gauge but it does not evolve,
 *   this will allow a full gauge to appear.
 * - Useful for medals at the end of an evolution track.
 * 
 * ---
 * 
 * <Equip Medal EXP Gauge Color 1: x>
 * <Equip Medal EXP Gauge Color 2: x>
 * 
 * - Used for: Armor Notetags
 * - Allows you to adjust the gauge colors used for this Equippable Medal.
 * - Replace 'x' with a number representing the text color you want (ranges
 *   from 0 to 31).
 * - Alternatively, use '#rrggbb' for custom colors in hex color format.
 * 
 * ---
 * 
 * === Unlock Conditions-Related Notetags ===
 * 
 * ---
 * 
 * <Equip Medal Learn Condition Text>
 *  text
 *  text
 * </Equip Medal Learn Condition Text>
 * 
 * - Used for: Armor Notetags
 * - Assigns text to the Equip Medals learn unlock conditions.
 * - Replace 'text' with text you want displayed when this medal is selected
 *   and has not yet been learned.
 * - If this notetag is not used, the help description will default be
 *   automatically constructed through the plugin using Plugin Parameters.
 * 
 * ---
 * 
 * <Equip Medal Learn Level: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must reach level 'x'.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'x' with a number representing the level the actor must reach.
 * 
 * ---
 * 
 * <Equip Medal Learn Battles: x>
 * <Equip Medal Learn Victories: x>
 * <Equip Medal Learn Escapes: x>
 * <Equip Medal Learn Defeats: x>
 * 
 * - Used for: Armor Notetags
 * - Adds a battle result-related unlock condition that the actor must fulfill
 *   in order to learn this Equippable Medal.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'x' with a number representing the number of battle results that
 *   must be fulfilled.
 *   - The number counter will start from the moment Equippable Medal is
 *     listed in the learnable list.
 *   - This does NOT take into account previous battle results before listing.
 * - The 'Battles' notetag variant requires participating in any battles.
 * - The 'Victories' notetag variant requires winning battles.
 * - The 'Escapes' notetag variant requires successfully escaping battles.
 * - The 'Defeats' notetag variant requires losing battles.
 * 
 * ---
 * 
 * <Equip Medal Learn Attack Times: x>
 * <Equip Medal Learn Guard Times: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must attack or guard 'x' times.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'x' with a number representing the number of times the actor must
 *   attack or guard.
 *   - The number counter will start from the moment Equippable Medal is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * 
 * ---
 * 
 * <Equip Medal Learn Use Skills: x>
 * <Equip Medal Learn Use Physical Skills: x>
 * <Equip Medal Learn Use Magical Skills: x>
 * <Equip Medal Learn Use Certain Hit Skills: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must use 'x' skills.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'x' with a number representing the number of times the actor must
 *   use skills.
 *   - The number counter will start from the moment Equippable Medal is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Skills' notetag variant allows any kind of skill usage.
 * - The 'Physical Skills' notetag variant requires physical hit skills.
 * - The 'Magical Skills' notetag variant requires magical hit skills.
 * - The 'Certain Hit Skills' notetag variant requires certain hit skills.
 * 
 * ---
 * 
 * <Equip Medal Learn SType id: x>
 * <Equip Medal Learn SType name: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must use 'x' skills that belong to
 *   a specific skill type.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'id' with a number representing the needed skill type's ID number.
 * - Replace 'name' with text representing the needed skill type's name.
 * - Replace 'x' with a number representing the number of times the actor must
 *   use skills belonging to the needed skill type.
 * 
 * ---
 * 
 * <Equip Medal Learn Use Items: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must use 'x' items.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'x' with a number representing the number of times the actor must
 *   use items.
 *   - The number counter will start from the moment Equippable Medal is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - Any kind of item can be used.
 * 
 * ---
 * 
 * <Equip Medal Learn Inflict Critical Times: x>
 * <Equip Medal Learn Receive Critical Times: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must inflict or receive 'x'
 *   critical hits from actions.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'x' with a number representing the number of times the actor must
 *   inflict or receive critical hits.
 *   - The number counter will start from the moment Equippable Medal is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Inflict' notetag variant requires the critical hit to be caused by
 *   the actor.
 * - The 'Receive' notetag variant requires the critical hit to be caused
 *   against the actor.
 * 
 * ---
 * 
 * <Equip Medal Learn Miss Times: x>
 * <Equip Medal Learn Evade Times: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must miss or evade 'x' actions.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'x' with a number representing the number of times the actor must
 *   miss or evade actions.
 *   - The number counter will start from the moment Equippable Medal is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Miss' notetag variant requires the actor to miss an action.
 * - The 'Evade' notetag variant requires the actor to evade an action.
 * 
 * ---
 * 
 * <Equip Medal Learn Inflict Element id Damage: x>
 * <Equip Medal Learn Inflict Element name Damage: x>
 * 
 * <Equip Medal Learn Receive Element id Damage: x>
 * <Equip Medal Learn Receive Element name Damage: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must inflict or receive damage
 *   from a specific element 'x' times.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'id' with a number representing the element ID number.
 * - Replace 'name' with text representing the element's name.
 * - Replace 'x' with a number representing the number of times the actor must
 *   inflict or receive damage from a specific element.
 *   - The number counter will start from the moment Equippable Medal is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Inflict' notetag variant requires the elemental damage to be caused
 *   by the actor.
 * - The 'Receive' notetag variant requires the elemental damage to be caused
 *   against the actor.
 * 
 * ---
 * 
 * <Equip Medal Learn Inflict State id: x>
 * <Equip Medal Learn Inflict State name: x>
 * 
 * <Equip Medal Learn Receive State id: x>
 * <Equip Medal Learn Receive State name: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must inflict or receive a specific
 *   state 'x' times.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'id' with a number representing the state ID number.
 * - Replace 'name' with text representing the state's name.
 * - Replace 'x' with a number representing the number of times the actor must
 *   inflict or receive a specific state.
 *   - The number counter will start from the moment Equippable Medal is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Inflict' notetag variant requires the target state to be caused
 *   by the actor.
 * - The 'Receive' notetag variant requires the target state to be caused
 *   against the actor.
 * 
 * ---
 * 
 * <Equip Medal Learn Defeat name Trait: x>
 * 
 * - Used for: Armor Notetags
 * - Requires VisuMZ_1_ElementStatusCore!
 * - Adds an unlock condition that the actor must defeat enemies with specific
 *   trait sets 'x' times.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'name' with text representing the trait set's name.
 * - Replace 'x' with a number representing the number of times the actor must
 *   defeat enemies with the target trait set.
 * 
 * ---
 * 
 * <Equip Medal Learn Inflict Total Damage: x>
 * <Equip Medal Learn Receive Total Damage: x>
 * 
 * <Equip Medal Learn Inflict Total Healing: x>
 * <Equip Medal Learn Receive Total Healing: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must inflict or receive a total
 *   amounts of damage or healing since the time the medal is listed.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'x' with a number representing the total number of damage and
 *   healing the actor must reach.
 *   - The number counter will start from the moment Equippable Medal is
 *     listed in the learnable list.
 *   - This does NOT take into account previous actions before listing.
 * - The 'Inflict' notetag variant requires the damage/healing to be caused
 *   by the actor.
 * - The 'Receive' notetag variant requires the damage/healing to be caused
 *   against the actor.
 * 
 * ---
 * 
 * <Equip Medal Learn Kill Count: x>
 * <Equip Medal Learn Death Count: x>
 * <Equip Medal Learn Assist Count: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must fulfill the needed amount of
 *   kills, suffer the amount of deaths, or partake in the number of assists
 *   since the time the medal is listed.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'x' with a number representing the number of kills, deaths, or
 *   assists the actor must reach.
 *   - The number counter will start from the moment Equippable Medal is
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
 * <Equip Medal Learn Have Gold: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the party must have 'x' gold present at the
 *   moment.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'x' with a number representing the needed amount of gold.
 * 
 * ---
 * 
 * <Equip Medal Learn Have Item id: x>
 * <Equip Medal Learn Have Item name: x>
 * 
 * <Equip Medal Learn Have Weapon id: x>
 * <Equip Medal Learn Have Weapon name: x>
 * 
 * <Equip Medal Learn Have Armor id: x>
 * <Equip Medal Learn Have Armor name: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the party must have 'x' quantities of a
 *   specific item, weapon, or armor present at the moment.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'id' with a number representing the ID of the item, weapon, or
 *   armor needed for the medal.
 * - Replace 'name' with text representing the name of the item, weapon, or
 *   armor needed for the medal.
 * - Replace 'x' with a number representing the needed amount of the item, 
 *   weapon, or armor.
 * 
 * ---
 * 
 * <Equip Medal Learn Reach Param name: x>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must have 'x' value for its base
 *   parameter value at the moment.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'name' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to be referenced.
 * - Replace 'x' with a number representing the needed parameter value.
 * 
 * ---
 * 
 * <Equip Medal Learn Reach XParam name: x%>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must have 'x' value for its
 *   X-parameter value at the moment.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'name' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which parameter to be referenced.
 * - Replace 'x' with a number representing the needed parameter percent value.
 * 
 * ---
 * 
 * <Equip Medal Learn Reach SParam name: x%>
 * 
 * - Used for: Armor Notetags
 * - Adds an unlock condition that the actor must have 'x' value for its
 *   S-parameter value at the moment.
 * - If this Equippable Medal is found in the learnable list and all unlock
 *   conditions in addition to this unlock condition are met, then the actor
 *   will learn the Equippable Medal.
 * - Replace 'name' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which parameter to be referenced.
 * - Replace 'x' with a number representing the needed parameter percent value.
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
 * Actor: Gain Medal EXP
 * - Target actor(s) gains equippable Medal EXP for all currently
 * - equipped medals. Applies any Medal EXP bonus rates.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Medal EXP:
 *   - Determine how much Medal EXP target actor(s) gains.
 * 
 *   Show Text Popup?:
 *   - Shows text popup of actor(s) learning the medal if any?
 * 
 * ---
 * 
 * Actor: Add Medal EXP
 * - Target actor(s) gains equippable Medal EXP for all currently
 * - equipped medals. Does not apply any Medal EXP bonus rates.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Medal EXP:
 *   - Determine how much Medal EXP target actor(s) receives.
 * 
 *   Show Text Popup?:
 *   - Shows text popup of actor(s) learning the medal if any?
 * 
 * ---
 * 
 * Actor: Learn Equippable Medal
 * - Target actor(s) learns equippable medal(s).
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Medal ID(s):
 *   - Select which Armor ID(s) to add as an equippable medal.
 * 
 *   Show Text Popup?:
 *   - Shows text popup of actor(s) learning the medal?
 * 
 * ---
 * 
 * Actor: Forgets Equippable Medal
 * - Target actor(s) forgets equippable medal(s).
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Medal ID(s):
 *   - Select which Armor ID(s) to forget as an equippable medal.
 * 
 * ---
 * 
 * Actor: Add Unlearned Equippable Medal
 * - Gives target actor(s) the ability to learn target medal(s).
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Medal ID(s):
 *   - Select which Armor ID(s) to add as an unlearned equippable medal.
 * 
 * ---
 * 
 * Actor: Remove Unlearned Equippable Medal
 * - Removes target actor(s) the ability to learn target medal(s).
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Medal ID(s):
 *   - Select which Armor ID(s) to remove unlearned equippable medal.
 * 
 * ---
 * 
 * === Global Plugin Commands ===
 * 
 * ---
 * 
 * Global: Learn Equippable Medal
 * - All actors learns equippable medal(s).
 * 
 *   Medal ID(s):
 *   - Select which Armor ID(s) to add as an equippable medal.
 * 
 *   Show Text Popup?:
 *   - Shows text popup of party learning the medal?
 * 
 * ---
 * 
 * Global: Forgets Equippable Medal
 * - All actors forgets equippable medal(s).
 * 
 *   Medal ID(s):
 *   - Select which Armor ID(s) to forget as an equippable medal.
 * 
 * ---
 * 
 * Global: Add Unlearned Equippable Medal
 * - Gives all actors the ability to learn target medal(s).
 * 
 *   Medal ID(s):
 *   - Select which Armor ID(s) to add as an unlearned equippable medal.
 * 
 * ---
 * 
 * Global: Remove Unlearned Equippable Medal
 * - Removes from all actors the ability to learn target medal(s).
 * 
 *   Medal ID(s):
 *   - Select which Armor ID(s) to remove unlearned equippable medal.
 * 
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 * 
 * System: Show Medal in Equip Scene?
 * - Shows/hides Medal command inside the equip scene.
 * 
 *   Show/Hide?:
 *   - Shows/hides Medal command inside the equip scene.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for the Equip Medal System.
 *
 * ---
 *
 * General Settings:
 * 
 *   Default Show Command:
 *   - Shows Medal Command by default?
 * 
 *   Auto-Equip on Learn:
 *   - Automatically equips newly learned Medals.
 * 
 *   Text Popup on Learn:
 *   - Produce a text popup when a Medal is learned?
 * 
 *     Text Popup Format:
 *     - Text format used for text popup.
 *     - %1 - Actor, %2 - Medal, %3 - Icon
 * 
 * ---
 * 
 * Slot Settings:
 * 
 *   Slot Formula:
 *   - What is the formula used to determine current max capacity?
 * 
 *   Default Slot Cost:
 *   - What is the default capacity cost of equipping a Medal?
 * 
 *   Minimum Slot Cap:
 *   - What is the minimum capacity value?
 * 
 *   Maximum Slot Cap:
 *   - What is the maximum capacity value?
 * 
 *   Check Over-Capacity:
 *   - Checks over-capacity when EXP changes.
 * 
 * ---
 * 
 * Medal EXP Settings:
 * 
 *   EXP Formula:
 *   - What is the formula used to determine how much exp an enemy gives?
 *   - Variable 'user' refers to the defeated enemy.
 * 
 *     Alive Actors?:
 *     - Do actors have to be alive to receive Medal EXP from defeated enemies?
 * 
 *   Show During Victory?:
 *   - Show how much Medal EXP is earned during victory phase?
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
 * Medal EXP:
 * 
 *   Medal EXP Name:
 *   - Text used to represent Medal EXP.
 * 
 *   Medal EXP Icon:
 *   - Icon used to represent Medal EXP.
 * 
 *   Medal EXP Name Format:
 *   - Text format used to display Medal EXP name. %1 - Name, %2 - Icon
 * 
 *   Reward Message Format:
 *   - Text format used when Medal EXP is received. %1 - Amount, %2 - Name
 * 
 * ---
 * 
 * Scene_Equip:
 * 
 *   Command Name:
 *   - Text used for the Medals Command.
 * 
 *     Command Icon:
 *     - Icon used for the Medals command and for any medals that are displayed
 *       without any icon.
 * 
 *   Capacity Text:
 *   - Text used for Medals Capacity.
 * 
 *     Capacity Icon:
 *     - Icon used to represent Medals Capacity when displayed as a limited
 *       resource.
 * 
 *     Capacity Format:
 *     - Text format used to representing Capacity.
 *     - %1 - Current, %2 - Max, %3 - Icon
 * 
 *   Cost Format:
 *   - Text format used for Capacity Cost. %1 - Cost, %2 - Icon
 * 
 *     Unlearned Text:
 *     - Text displayed instead of cost for unlearned Medals.
 * 
 *   Gauge EXP Format:
 *   - Text format used when displaying Medal EXP in a gauge.
 *   - %1 - Current, %2 - Needed, %3 - Percent
 * 
 *     Decimal Places:
 *     - How many decimal places should the percent digits go out to for the
 *       percent value?
 * 
 *     Mastered Medal Text:
 *     - Text used in Medal EXP Gauge for mastered medals.
 *     - You may use text codes.
 *
 * ---
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
 * Equip Medal List:
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Equipped Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Show Capacity Costs?:
 *   - Shows capacity costs on Medals?
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
 *   - How do you wish to sort medals by?
 * 
 *   Show Unlearned?:
 *   - Shows unlearned medals in the list window?
 * 
 *     Separate Unlearned?:
 *     - Separate unlearned medals from learned medals?
 * 
 *     Mask Unlearned?:
 *     - Masks unlearned medals in list window?
 * 
 *       Mask Icon:
 *       - What is the icon used for masked medals?
 * 
 *       Mask Character:
 *       - Text used for masking per individual character.
 * 
 *       Italics?:
 *       - Use italics for masked names?
 * 
 *   Hide Former Evolved?:
 *   - Hide formerly evolved medals?
 * 
 *   Medal EXP Gauge Style:
 *   - Select the gauge style to use for medal EXP.
 *   - Requires VisuMZ_3_VisualGaugeStyles!
 * 
 *     EXP Gauge Color 1:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     EXP Gauge Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Gauge Width Modifier:
 *     - Adjust the gauge width by this amount.
 * 
 *     EXP Text Offset X:
 *     - Offsets the Medal EXP Gauge Text X.
 *     - Negative: left. Positive: right.
 * 
 *     EXP Text Offset Y:
 *     - Offsets the Medal EXP Gauge Text Y.
 *     - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Medal Status Window:
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
 * Version 1.04: July 18, 2024
 * * Compatibility Update!
 * ** Added compatibility with new Items and Equips Core features!
 * 
 * Version 1.03: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where equipped medals did not play nicely when given
 *    MaxHP and MaxMP parameter related traits. Fix made by Irina.
 * 
 * Version 1.02: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where switching to different actors while the medal menu is
 *    selected will cause a window stacking bug. Fix made by Irina.
 * ** Fixed a bug where using mouse controls to select Medals from the Equip
 *    menu is not optimal. Fix made by Irina.
 * 
 * Version 1.01: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a compatibility issue with Equip Set Bonuses where the set tooltip
 *    window would no disappear upon selecting the Medal command. Fix by Arisu.
 * ** Fixed a bug where hovering over the Medal command would stop making the
 *    hover change work for the other commands. Fix by Arisu.
 * ** Fixed a bug where pressing 'up' with Modern Controls would not return
 *    back to the command window. Fix by Arisu.
 * ** Fixed a bug where elemental damage, states, and stypes, taken and dealt
 *    was not making progress for learning new medals. Fix by Arisu.
 * ** Fixed a bug where <Equip Medal Evolves Into Next: exp> notetag was
 *    suppressed by the other notetag. Fix made by Arisu.
 * ** Fixed a bug where the <Equip Medal Evolves Into Next: exp> notetag does
 *    not require the proper amount of EXP. Fix made by Arisu.
 * * Feature Update!
 * ** Added a fail safe where if both the optimize and clear commands are
 *    removed from the equip scene, the medal command can still be visible.
 *    Update made by Arisu.
 * ** If a medal becomes hidden, it is no longer considered equipped.
 * ** Inflict and Receive State effects no longer require the target to be
 *    unaffilicted by the state before to count.
 * 
 * Version 1.00 Official Release Date: March 27, 2024
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
 * @command ActorGainMedalExp
 * @text Actor: Gain Medal EXP
 * @desc Target actor(s) gains equippable Medal EXP for all currently
 * equipped medals. Applies any Medal EXP bonus rates.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg MedalEXP:num
 * @text Medal EXP
 * @type number
 * @desc Determine how much Medal EXP target actor(s) gains.
 * @default 1
 *
 * @arg ShowTextPopup:eval
 * @text Show Text Popup?
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Shows text popup of actor(s) learning the medal if any?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorAddMedalExp
 * @text Actor: Add Medal EXP
 * @desc Target actor(s) gains equippable Medal EXP for all currently
 * equipped medals. Does not apply any Medal EXP bonus rates.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg MedalEXP:num
 * @text Medal EXP
 * @type number
 * @desc Determine how much Medal EXP target actor(s) receives.
 * @default 1
 *
 * @arg ShowTextPopup:eval
 * @text Show Text Popup?
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Shows text popup of actor(s) learning the medal if any?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorLearnMedal
 * @text Actor: Learn Equippable Medal
 * @desc Target actor(s) learns equippable medal(s).
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg MedalIDs:arraynum
 * @text Medal ID(s)
 * @type armor[]
 * @desc Select which Armor ID(s) to add as an equippable medal.
 * @default []
 *
 * @arg ShowTextPopup:eval
 * @text Show Text Popup?
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Shows text popup of actor(s) learning the medal?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorForgetMedal
 * @text Actor: Forgets Equippable Medal
 * @desc Target actor(s) forgets equippable medal(s).
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg MedalIDs:arraynum
 * @text Medal ID(s)
 * @type armor[]
 * @desc Select which Armor ID(s) to forget as an equippable medal.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorAddUnlearnedMedal
 * @text Actor: Add Unlearned Equippable Medal
 * @desc Gives target actor(s) the ability to learn target medal(s).
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg MedalIDs:arraynum
 * @text Medal ID(s)
 * @type armor[]
 * @desc Select which Armor ID(s) to add as an unlearned equippable medal.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorRemoveUnlearnedMedal
 * @text Actor: Remove Unlearned Equippable Medal
 * @desc Removes target actor(s) the ability to learn target medal(s).
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg MedalIDs:arraynum
 * @text Medal ID(s)
 * @type armor[]
 * @desc Select which Armor ID(s) to remove unlearned equippable medal.
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
 * @command GlobalLearnMedal
 * @text Global: Learn Equippable Medal
 * @desc All actors learns equippable medal(s).
 *
 * @arg MedalIDs:arraynum
 * @text Medal ID(s)
 * @type armor[]
 * @desc Select which Armor ID(s) to add as an equippable medal.
 * @default []
 *
 * @arg ShowTextPopup:eval
 * @text Show Text Popup?
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Shows text popup of party learning the medal?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GlobalForgetMedal
 * @text Global: Forgets Equippable Medal
 * @desc All actors forgets equippable medal(s).
 *
 * @arg MedalIDs:arraynum
 * @text Medal ID(s)
 * @type armor[]
 * @desc Select which Armor ID(s) to forget as an equippable medal.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GlobalAddUnlearnedMedal
 * @text Global: Add Unlearned Equippable Medal
 * @desc Gives all actors the ability to learn target medal(s).
 *
 * @arg MedalIDs:arraynum
 * @text Medal ID(s)
 * @type armor[]
 * @desc Select which Armor ID(s) to add as an unlearned equippable medal.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GlobalRemoveUnlearnedMedal
 * @text Global: Remove Unlearned Equippable Medal
 * @desc Removes from all actors the ability to learn target medal(s).
 *
 * @arg MedalIDs:arraynum
 * @text Medal ID(s)
 * @type armor[]
 * @desc Select which Armor ID(s) to remove unlearned equippable medal.
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
 * @command SystemShowMedalCommand
 * @text System: Show Medal in Equip Scene?
 * @desc Shows/hides Medal command inside the equip scene.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Medal command inside the equip scene.
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
 * @param EquipMedalSys
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
 * @desc General settings for the Equip Medal System.
 * @default {"General":"","DefaultShowCommand:eval":"true","LearnAutoEquip:eval":"false","LearnPopup:eval":"true","TextPopupFmt:str":"%1 has acquired %3%2!","CheckOverCapacity:eval":"true","Capacity":"","CapacityFormula:str":"Math.ceil(user.level / 10)","DefaultCost:num":"1","MinimumCost:num":"1","MaximumCost:num":"10","MedalExp":"","MedalExpFormula:str":"1","AliveActors:eval":"true","ShowVictory:eval":"true"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"MedalExp":"","equipMedalExpName:str":"Glory","equipMedalExpIcon:num":"147","equipMedalDisplayFmt:str":"%2%1","rewardMessageFmt:str":"%1 %2 acquired!","Scene":"","CommandName:str":"Medals","CommandIcon:num":"147","CapacityText:str":"Medal Slots","CapacityIcon:num":"309","CapacityFmt:str":"%1/%2%3","CostFmt:str":"%1%2","Unlearned:str":"\\}Unacquired\\{","expTextFormat:str":"\\}%1/%2 (%3%)\\{","expPercentDigits:num":"2","maxExpTextFormat:str":"\\}MASTERED!\\{","HelpWindow":"","HelpFmt:str":"\\C[16]Acquire Conditions:\\C[0] %1","helpWordWrap:eval":"true","helpSpacing:eval":"true","helpSpacer:str":",","helpNothing:str":"-","ConditionText":"","helpMeetConditionColor:num":"24","progressFmt:str":"(Progress %1)","progressFraction:str":"%1/%2","progressPercent:str":"%1%","progressLengthLimit:num":"7","progressComplete:str":"\\I[87]","level:str":"Reach Level %1 %2","battle:str":"Fight %1 Battles %2","victory:str":"Win %1 Battles %2","escapes:str":"Escape %1 Battles %2","defeat:str":"Lose %1 Battles %2","attackTimes:str":"Attack %1 Times %2","guardTimes:str":"Guard %1 Times %2","skillUse:str":"Use %1 Skills %2","physSkillUse:str":"Use %1 Physical Skills %2","magSkillUse:str":"Use %1 Magical Skills %2","certSkillUse:str":"Use %1 Certain Hit Skills %2","itemUse:str":"Use %1 Items %2","critDeal:str":"Deal %1 Critical Hits %2","critTake:str":"Take %1 Critical Hits %2","miss:str":"Miss %1 Times %2","evade:str":"Evade %1 Times %2","stypeUse:str":"Use %1 %3 Skills %2","elementDeal:str":"Inflict %3 Damage %1 Times %2","elementTake:str":"Receive %3 Damage %1 Times %2","stateDeal:str":"Inflict %3 %1 Times %2","stateTake:str":"Receive %3 %1 Times %2","traitSlayer:str":"Defeat %1 %3 Enemies %2","totalDmgDeal:str":"Inflict %1 Total Battle Damage %2","totalDmgTake:str":"Receive %1 Total Battle Damage %2","totalHealDeal:str":"Perform %1 Total Battle Healing %2","totalHealTake:str":"Receive %1 Total Battle Healing %2","kills:str":"Kill %1 Enemies %2","deaths:str":"Die %1 Times %2","assists:str":"Assist %1 Times %2","haveGold:str":"Possess ×%1%3 %2","haveItem:str":"Possess %3 ×%1 %2","haveWeapon:str":"Possess %3 ×%1 %2","haveArmor:str":"Possess %3 ×%1 %2","haveParam:str":"Reach %1 %3 %2","haveXParam:str":"Reach %1% %3 %2","haveSParam:str":"Reach %1% %3 %2"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"Window_EquipMedalList":"","EquipMedalList_BgType:num":"0","EquippedColor:str":"17","ShowCosts:eval":"true","ShowCost0:eval":"false","ShowCost1:eval":"true","ShowCostNumber:eval":"false","costIconLimit:num":"3","SortStyle:str":"name","ShowUnlearned:eval":"true","SeparateUnlearned:eval":"true","MaskUnlearned:eval":"true","MaskIcon:num":"161","MaskLetter:str":"?","MaskItalics:eval":"true","hideFormerEvolution:eval":"true","expGaugeStyleType:str":"Growth","ExpGaugeColor1:str":"16","ExpGaugeColor2:str":"17","expGaugeWidthModifier:num":"-104","expTextOffsetX:num":"+0","expTextOffsetY:num":"+6","Window_EquipMedalStatus":"","showStatusWindow:eval":"true","StatusWindow_BgType:num":"0","MaxCapacityColor:num":"17"}
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
 * @desc Shows Medal Command by default?
 * @default true
 *
 * @param LearnAutoEquip:eval
 * @text Auto-Equip on Learn
 * @parent General
 * @type boolean
 * @on Auto-Equip
 * @off Don't Equip
 * @desc Automatically equips newly learned Medals.
 * @default false
 *
 * @param LearnPopup:eval
 * @text Text Popup on Learn
 * @parent General
 * @type boolean
 * @on Show Popup
 * @off Don't Show
 * @desc Produce a text popup when a Medal is learned?
 * @default true
 *
 * @param TextPopupFmt:str
 * @text Text Popup Format
 * @parent LearnPopup:eval
 * @desc Text format used for text popup.
 * %1 - Actor, %2 - Medal, %3 - Icon
 * @default %1 has acquired %3%2!
 *
 * @param Capacity
 * @text Slot Settings
 *
 * @param CapacityFormula:str
 * @text Slot Formula
 * @parent Capacity
 * @desc What is the formula used to determine current max capacity?
 * @default Math.ceil(user.level / 10)
 *
 * @param DefaultCost:num
 * @text Default Slot Cost
 * @parent Capacity
 * @desc What is the default capacity cost of equipping a Medal?
 * @default 1
 *
 * @param MinimumCost:num
 * @text Minimum Slot Cap
 * @parent Capacity
 * @type number
 * @min 1
 * @desc What is the minimum capacity value?
 * @default 1
 *
 * @param MaximumCost:num
 * @text Maximum Slot Cap
 * @parent Capacity
 * @type number
 * @min 1
 * @desc What is the maximum capacity value?
 * @default 10
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
 * @param MedalExp
 * @text Medal EXP Settings
 *
 * @param MedalExpFormula:str
 * @text EXP Formula
 * @parent MedalExp
 * @desc What is the formula used to determine how much exp an
 * enemy gives? Variable 'user' refers to the defeated enemy.
 * @default 1
 *
 * @param AliveActors:eval
 * @text Alive Actors?
 * @parent MedalExpFormula:str
 * @type boolean
 * @on Alive Requirement
 * @off No Requirement
 * @desc Do actors have to be alive to receive Medal EXP from
 * defeated enemies?
 * @default true
 *
 * @param ShowVictory:eval
 * @text Show During Victory?
 * @parent MedalExp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how much Medal EXP is earned during victory phase?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param MedalExp
 * @text Medal EXP
 * 
 * @param equipMedalExpName:str
 * @text Medal EXP Name
 * @parent MedalExp
 * @desc Text used to represent Medal EXP.
 * @default Glory
 * 
 * @param equipMedalExpIcon:num
 * @text Medal EXP Icon
 * @parent MedalExp
 * @desc Icon used to represent Medal EXP.
 * @default 147
 * 
 * @param equipMedalDisplayFmt:str
 * @text Medal EXP Name Format
 * @parent MedalExp
 * @desc Text format used to display Medal EXP name.
 * %1 - Name, %2 - Icon
 * @default %2%1
 * 
 * @param rewardMessageFmt:str
 * @text Reward Message Format
 * @parent MedalExp
 * @desc Text format used when Medal EXP is received.
 * %1 - Amount, %2 - Name
 * @default %1 %2 acquired!
 *
 * @param Scene
 * @text Scene_Equip
 *
 * @param CommandName:str
 * @text Command Name
 * @parent Scene
 * @desc Text used for the Medals Command.
 * @default Medals
 *
 * @param CommandIcon:num
 * @text Command Icon
 * @parent CommandName:str
 * @desc Icon used for the Medals command and for any
 * medals that are displayed without any icon.
 * @default 147
 *
 * @param CapacityText:str
 * @text Capacity Text
 * @parent Scene
 * @desc Text used for Medals Capacity.
 * @default Medal Slots
 *
 * @param CapacityIcon:num
 * @text Capacity Icon
 * @parent CapacityText:str
 * @desc Icon used to represent Medals Capacity when
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
 * @desc Text displayed instead of cost for unlearned Medals.
 * @default \}Unacquired\{
 * 
 * @param expTextFormat:str
 * @text Gauge EXP Format
 * @parent Scene
 * @desc Text format used when displaying Medal EXP in a gauge.
 * %1 - Current, %2 - Needed, %3 - Percent
 * @default \}%1/%2 (%3%)\{
 * 
 * @param expPercentDigits:num
 * @text Decimal Places
 * @parent expTextFormat:str
 * @type number
 * @min 0
 * @desc How many decimal places should the percent digits
 * go out to for the percent value?
 * @default 2
 * 
 * @param maxExpTextFormat:str
 * @text Mastered Medal Text
 * @parent expTextFormat:str
 * @desc Text used in Medal EXP Gauge for mastered medals.
 * You may use text codes.
 * @default \}MASTERED!\{
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpFmt:str
 * @text Description Format
 * @parent HelpWindow
 * @desc Text format used to create help descriptions.
 * %1 - Unlocking Conditions
 * @default \C[16]Acquire Conditions:\C[0] %1
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
 * @parent attackTimes:str
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
 * @parent attackTimes:str
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
 * @param Window_EquipMedalList
 * @text Equip Medal List
 *
 * @param EquipMedalList_BgType:num
 * @text Background Type
 * @parent Window_EquipMedalList
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
 * @parent Window_EquipMedalList
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param ShowCosts:eval
 * @text Show Capacity Costs?
 * @parent Window_EquipMedalList
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Shows capacity costs on Medals?
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
 * @default false
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
 * @parent Window_EquipMedalList
 * @type select
 * @option ID - Sort by Armor ID
 * @value id
 * @option Name - Sort by Armor Name
 * @value name
 * @option Type - Sort by Armor Type
 * @value atype
 * @desc How do you wish to sort medals by?
 * @default name
 *
 * @param ShowUnlearned:eval
 * @text Show Unlearned?
 * @parent Window_EquipMedalList
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Shows unlearned medals in the list window?
 * @default true
 *
 * @param SeparateUnlearned:eval
 * @text Separate Unlearned?
 * @parent ShowUnlearned:eval
 * @type boolean
 * @on Separate
 * @off Don't
 * @desc Separate unlearned medals from learned medals?
 * @default true
 *
 * @param MaskUnlearned:eval
 * @text Mask Unlearned?
 * @parent ShowUnlearned:eval
 * @type boolean
 * @on Mask
 * @off Don't
 * @desc Masks unlearned medals in list window?
 * @default true
 *
 * @param MaskIcon:num
 * @text Mask Icon
 * @parent MaskUnlearned:eval
 * @desc What is the icon used for masked medals?
 * @default 161
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
 * @param hideFormerEvolution:eval
 * @text Hide Former Evolved?
 * @parent Window_EquipMedalList
 * @type boolean
 * @on Hide
 * @off Show
 * @desc Hide formerly evolved medals?
 * @default true
 * 
 * @param expGaugeStyleType:str
 * @text Medal EXP Gauge Style
 * @parent Window_EquipMedalList
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
 * @desc Select the gauge style to use for medal EXP.
 * Requires VisuMZ_3_VisualGaugeStyles!
 * @default Growth
 *
 * @param ExpGaugeColor1:str
 * @text EXP Gauge Color 1
 * @parent expGaugeStyleType:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param ExpGaugeColor2:str
 * @text EXP Gauge Color 2
 * @parent expGaugeStyleType:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param expGaugeWidthModifier:num
 * @text Gauge Width Modifier
 * @parent expGaugeStyleType:str
 * @desc Adjust the gauge width by this amount.
 * @default -104
 *
 * @param expTextOffsetX:num
 * @text EXP Text Offset X
 * @parent expGaugeStyleType:str
 * @desc Offsets the Medal EXP Gauge Text X.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param expTextOffsetY:num
 * @text EXP Text Offset Y
 * @parent expGaugeStyleType:str
 * @desc Offsets the Medal EXP Gauge Text Y.
 * Negative: up. Positive: down.
 * @default +6
 *
 * @param Window_EquipMedalStatus
 * @text Medal Status Window
 *
 * @param showStatusWindow:eval
 * @text Show Window?
 * @parent Window_EquipMedalStatus
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Shows this window in the scene?
 * @default true
 *
 * @param StatusWindow_BgType:num
 * @text Background Type
 * @parent Window_EquipMedalStatus
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
 * @parent Window_EquipMedalStatus
 * @type number
 * @min 0
 * @desc Use text colors from the Window Skin only.
 * @default 17
 *
 */
//=============================================================================

const _0x31b406=_0x814f;(function(_0x5aa372,_0x378d86){const _0x22aa8d=_0x814f,_0x2bf292=_0x5aa372();while(!![]){try{const _0x1af7fd=parseInt(_0x22aa8d(0x272))/0x1+-parseInt(_0x22aa8d(0x1f1))/0x2*(-parseInt(_0x22aa8d(0x198))/0x3)+parseInt(_0x22aa8d(0x260))/0x4*(-parseInt(_0x22aa8d(0x21e))/0x5)+parseInt(_0x22aa8d(0x215))/0x6+parseInt(_0x22aa8d(0x1e0))/0x7*(parseInt(_0x22aa8d(0xf9))/0x8)+-parseInt(_0x22aa8d(0xa7))/0x9+parseInt(_0x22aa8d(0x1b5))/0xa*(-parseInt(_0x22aa8d(0x1ce))/0xb);if(_0x1af7fd===_0x378d86)break;else _0x2bf292['push'](_0x2bf292['shift']());}catch(_0x220990){_0x2bf292['push'](_0x2bf292['shift']());}}}(_0x2a2e,0xd4d1e));var label=_0x31b406(0x258),tier=tier||0x0,dependencies=[_0x31b406(0x318),_0x31b406(0xb5)],pluginData=$plugins[_0x31b406(0x12f)](function(_0xc5188b){const _0xb98724=_0x31b406;return _0xc5188b[_0xb98724(0x221)]&&_0xc5188b[_0xb98724(0x1d6)][_0xb98724(0x2fc)]('['+label+']');})[0x0];VisuMZ[label][_0x31b406(0x326)]=VisuMZ[label][_0x31b406(0x326)]||{},VisuMZ[_0x31b406(0x2a0)]=function(_0x505969,_0x5b5761){const _0x9a3fa4=_0x31b406;for(const _0x326b7d in _0x5b5761){if(_0x326b7d['match'](/(.*):(.*)/i)){const _0x1acdd5=String(RegExp['$1']),_0x27ec54=String(RegExp['$2'])[_0x9a3fa4(0x166)]()[_0x9a3fa4(0x112)]();let _0x5dc08a,_0x203f13,_0x33d659;switch(_0x27ec54){case'NUM':_0x5dc08a=_0x5b5761[_0x326b7d]!==''?Number(_0x5b5761[_0x326b7d]):0x0;break;case _0x9a3fa4(0x2eb):_0x203f13=_0x5b5761[_0x326b7d]!==''?JSON['parse'](_0x5b5761[_0x326b7d]):[],_0x5dc08a=_0x203f13[_0x9a3fa4(0x14b)](_0x4b1a3b=>Number(_0x4b1a3b));break;case _0x9a3fa4(0x194):_0x5dc08a=_0x5b5761[_0x326b7d]!==''?eval(_0x5b5761[_0x326b7d]):null;break;case _0x9a3fa4(0x1a3):_0x203f13=_0x5b5761[_0x326b7d]!==''?JSON[_0x9a3fa4(0x2d8)](_0x5b5761[_0x326b7d]):[],_0x5dc08a=_0x203f13[_0x9a3fa4(0x14b)](_0x260618=>eval(_0x260618));break;case _0x9a3fa4(0xa0):_0x5dc08a=_0x5b5761[_0x326b7d]!==''?JSON[_0x9a3fa4(0x2d8)](_0x5b5761[_0x326b7d]):'';break;case'ARRAYJSON':_0x203f13=_0x5b5761[_0x326b7d]!==''?JSON['parse'](_0x5b5761[_0x326b7d]):[],_0x5dc08a=_0x203f13[_0x9a3fa4(0x14b)](_0x544720=>JSON[_0x9a3fa4(0x2d8)](_0x544720));break;case _0x9a3fa4(0x2da):_0x5dc08a=_0x5b5761[_0x326b7d]!==''?new Function(JSON[_0x9a3fa4(0x2d8)](_0x5b5761[_0x326b7d])):new Function('return\x200');break;case _0x9a3fa4(0x10b):_0x203f13=_0x5b5761[_0x326b7d]!==''?JSON[_0x9a3fa4(0x2d8)](_0x5b5761[_0x326b7d]):[],_0x5dc08a=_0x203f13[_0x9a3fa4(0x14b)](_0x57bb06=>new Function(JSON['parse'](_0x57bb06)));break;case _0x9a3fa4(0x237):_0x5dc08a=_0x5b5761[_0x326b7d]!==''?String(_0x5b5761[_0x326b7d]):'';break;case _0x9a3fa4(0x2ff):_0x203f13=_0x5b5761[_0x326b7d]!==''?JSON[_0x9a3fa4(0x2d8)](_0x5b5761[_0x326b7d]):[],_0x5dc08a=_0x203f13[_0x9a3fa4(0x14b)](_0x5defa5=>String(_0x5defa5));break;case _0x9a3fa4(0xd1):_0x33d659=_0x5b5761[_0x326b7d]!==''?JSON[_0x9a3fa4(0x2d8)](_0x5b5761[_0x326b7d]):{},_0x5dc08a=VisuMZ[_0x9a3fa4(0x2a0)]({},_0x33d659);break;case'ARRAYSTRUCT':_0x203f13=_0x5b5761[_0x326b7d]!==''?JSON[_0x9a3fa4(0x2d8)](_0x5b5761[_0x326b7d]):[],_0x5dc08a=_0x203f13[_0x9a3fa4(0x14b)](_0x472848=>VisuMZ[_0x9a3fa4(0x2a0)]({},JSON[_0x9a3fa4(0x2d8)](_0x472848)));break;default:continue;}_0x505969[_0x1acdd5]=_0x5dc08a;}}return _0x505969;},(_0x1de38d=>{const _0x4bc940=_0x31b406,_0x165713=_0x1de38d['name'];for(const _0x4b6db9 of dependencies){if(!Imported[_0x4b6db9]){alert(_0x4bc940(0x1bd)[_0x4bc940(0x15a)](_0x165713,_0x4b6db9)),SceneManager[_0x4bc940(0x95)]();break;}}const _0x2dd542=_0x1de38d[_0x4bc940(0x1d6)];if(_0x2dd542[_0x4bc940(0xae)](/\[Version[ ](.*?)\]/i)){const _0xa552b4=Number(RegExp['$1']);_0xa552b4!==VisuMZ[label]['version']&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x165713,_0xa552b4)),SceneManager['exit']());}if(_0x2dd542['match'](/\[Tier[ ](\d+)\]/i)){const _0x5c7776=Number(RegExp['$1']);_0x5c7776<tier?(alert(_0x4bc940(0x25d)[_0x4bc940(0x15a)](_0x165713,_0x5c7776,tier)),SceneManager[_0x4bc940(0x95)]()):tier=Math[_0x4bc940(0x21a)](_0x5c7776,tier);}VisuMZ[_0x4bc940(0x2a0)](VisuMZ[label][_0x4bc940(0x326)],_0x1de38d[_0x4bc940(0x2b3)]);})(pluginData);if(VisuMZ[_0x31b406(0x29f)][_0x31b406(0x16b)]<1.79){let text='';text+=_0x31b406(0xec),text+='in\x20order\x20for\x20VisuMZ_2_EquipMedalSys\x20to\x20work.',alert(text),SceneManager[_0x31b406(0x95)]();}if(VisuMZ[_0x31b406(0x327)]['version']<1.5){let text='';text+=_0x31b406(0x2e4),text+=_0x31b406(0xaf),alert(text),SceneManager['exit']();}PluginManager[_0x31b406(0x30f)](pluginData['name'],'ActorGainMedalExp',_0x4d84b5=>{const _0xd2f04d=_0x31b406;VisuMZ['ConvertParams'](_0x4d84b5,_0x4d84b5);const _0x171a2c=_0x4d84b5[_0xd2f04d(0x199)]||[],_0x11e758=_0x4d84b5['MedalEXP']||[],_0x44f834=!_0x4d84b5[_0xd2f04d(0x133)];for(const _0x187d7e of _0x171a2c){const _0x49046=$gameActors[_0xd2f04d(0xeb)](_0x187d7e);if(!_0x49046)continue;_0x49046[_0xd2f04d(0x93)](_0x11e758,_0x44f834);}}),PluginManager['registerCommand'](pluginData['name'],_0x31b406(0x305),_0x305501=>{const _0x197721=_0x31b406;VisuMZ[_0x197721(0x2a0)](_0x305501,_0x305501);const _0x575a34=_0x305501[_0x197721(0x199)]||[],_0x4bc2c8=_0x305501[_0x197721(0xc9)]||[],_0x25f3cf=!_0x305501[_0x197721(0x133)];for(const _0x505677 of _0x575a34){const _0x3c2cb0=$gameActors[_0x197721(0xeb)](_0x505677);if(!_0x3c2cb0)continue;_0x3c2cb0[_0x197721(0xb4)](_0x4bc2c8,_0x25f3cf);}}),PluginManager['registerCommand'](pluginData[_0x31b406(0xd4)],_0x31b406(0x19f),_0x3e5522=>{const _0x2e32ee=_0x31b406;VisuMZ[_0x2e32ee(0x2a0)](_0x3e5522,_0x3e5522);const _0x294fcc=_0x3e5522['ActorIDs']||[],_0x2a1ad7=_0x3e5522[_0x2e32ee(0xe2)]||[],_0x5e3d9d=!_0x3e5522[_0x2e32ee(0x133)];for(const _0x1ddbe0 of _0x294fcc){const _0x251cc2=$gameActors[_0x2e32ee(0xeb)](_0x1ddbe0);if(!_0x251cc2)continue;for(const _0x26b2c8 of _0x2a1ad7){const _0x23c11f=$dataArmors[_0x26b2c8];if(!_0x23c11f)continue;if(_0x23c11f[_0x2e32ee(0xd4)]['trim']()==='')continue;if(_0x23c11f[_0x2e32ee(0xd4)][_0x2e32ee(0x2fc)](_0x2e32ee(0x118)))continue;_0x251cc2[_0x2e32ee(0x2b6)](_0x23c11f,_0x5e3d9d);}}}),PluginManager['registerCommand'](pluginData[_0x31b406(0xd4)],_0x31b406(0x230),_0x57d654=>{const _0xeb2c5c=_0x31b406;VisuMZ['ConvertParams'](_0x57d654,_0x57d654);const _0x5f5179=_0x57d654['ActorIDs']||[],_0x587c6d=_0x57d654[_0xeb2c5c(0xe2)]||[];for(const _0x307dd8 of _0x5f5179){const _0xdb30c5=$gameActors[_0xeb2c5c(0xeb)](_0x307dd8);if(!_0xdb30c5)continue;for(const _0x37bb2a of _0x587c6d){const _0x3e0adf=$dataArmors[_0x37bb2a];if(!_0x3e0adf)continue;if(_0x3e0adf[_0xeb2c5c(0xd4)]['trim']()==='')continue;if(_0x3e0adf[_0xeb2c5c(0xd4)][_0xeb2c5c(0x2fc)]('-----'))continue;_0xdb30c5[_0xeb2c5c(0x94)](_0x3e0adf);}}}),PluginManager[_0x31b406(0x30f)](pluginData['name'],_0x31b406(0x28b),_0x31a79b=>{const _0x2f3e84=_0x31b406;VisuMZ[_0x2f3e84(0x2a0)](_0x31a79b,_0x31a79b);const _0x418f05=_0x31a79b[_0x2f3e84(0x199)]||[],_0x503213=_0x31a79b[_0x2f3e84(0xe2)]||[];for(const _0x2ccdf0 of _0x418f05){const _0x5de2b4=$gameActors[_0x2f3e84(0xeb)](_0x2ccdf0);if(!_0x5de2b4)continue;for(const _0xff2878 of _0x503213){const _0x10ef6e=$dataArmors[_0xff2878];if(!_0x10ef6e)continue;if(_0x10ef6e[_0x2f3e84(0xd4)][_0x2f3e84(0x112)]()==='')continue;if(_0x10ef6e[_0x2f3e84(0xd4)][_0x2f3e84(0x2fc)]('-----'))continue;_0x5de2b4[_0x2f3e84(0x1d5)](_0x10ef6e);}}}),PluginManager[_0x31b406(0x30f)](pluginData[_0x31b406(0xd4)],_0x31b406(0xbe),_0xef8db3=>{const _0x36ca46=_0x31b406;VisuMZ[_0x36ca46(0x2a0)](_0xef8db3,_0xef8db3);const _0x5f12c1=_0xef8db3[_0x36ca46(0x199)]||[],_0x38ebdf=_0xef8db3[_0x36ca46(0xe2)]||[];for(const _0x1770df of _0x5f12c1){const _0xb79745=$gameActors[_0x36ca46(0xeb)](_0x1770df);if(!_0xb79745)continue;for(const _0x35794c of _0x38ebdf){const _0x598aab=$dataArmors[_0x35794c];if(!_0x598aab)continue;if(_0x598aab['name'][_0x36ca46(0x112)]()==='')continue;if(_0x598aab[_0x36ca46(0xd4)][_0x36ca46(0x2fc)](_0x36ca46(0x118)))continue;_0xb79745['removeUnlearnedEquippableMedal'](_0x598aab);}}}),PluginManager['registerCommand'](pluginData[_0x31b406(0xd4)],_0x31b406(0x1a5),_0x3a3559=>{const _0x283233=_0x31b406;VisuMZ[_0x283233(0x2a0)](_0x3a3559,_0x3a3559);const _0x123398=_0x3a3559['MedalIDs']||[],_0x184dba=!_0x3a3559['ShowTextPopup'];for(const _0x3676a3 of _0x123398){const _0x9ae9f1=$dataArmors[_0x3676a3];if(!_0x9ae9f1)continue;if(_0x9ae9f1[_0x283233(0xd4)][_0x283233(0x112)]()==='')continue;if(_0x9ae9f1['name'][_0x283233(0x2fc)](_0x283233(0x118)))continue;$gameParty['learnEquippedMedal'](_0x9ae9f1,_0x184dba);}}),PluginManager['registerCommand'](pluginData['name'],_0x31b406(0x208),_0x383b87=>{const _0x1343b9=_0x31b406;VisuMZ[_0x1343b9(0x2a0)](_0x383b87,_0x383b87);const _0x478ca7=_0x383b87[_0x1343b9(0xe2)]||[];for(const _0x1b1421 of _0x478ca7){const _0x3528d6=$dataArmors[_0x1b1421];if(!_0x3528d6)continue;if(_0x3528d6[_0x1343b9(0xd4)][_0x1343b9(0x112)]()==='')continue;if(_0x3528d6[_0x1343b9(0xd4)]['includes'](_0x1343b9(0x118)))continue;$gameParty[_0x1343b9(0x94)](_0x3528d6);}}),PluginManager[_0x31b406(0x30f)](pluginData['name'],_0x31b406(0x18e),_0x49c56c=>{const _0x4811bb=_0x31b406;VisuMZ['ConvertParams'](_0x49c56c,_0x49c56c);const _0x533585=_0x49c56c[_0x4811bb(0xe2)]||[];for(const _0x158749 of _0x533585){const _0x262729=$dataArmors[_0x158749];if(!_0x262729)continue;if(_0x262729['name']['trim']()==='')continue;if(_0x262729[_0x4811bb(0xd4)]['includes']('-----'))continue;$gameParty['addUnlearnedEquippableMedal'](_0x262729);}}),PluginManager[_0x31b406(0x30f)](pluginData[_0x31b406(0xd4)],_0x31b406(0x9c),_0x16fa62=>{const _0x5d89bf=_0x31b406;VisuMZ[_0x5d89bf(0x2a0)](_0x16fa62,_0x16fa62);const _0x1f959f=_0x16fa62[_0x5d89bf(0xe2)]||[];for(const _0x4e4da1 of _0x1f959f){const _0x534f52=$dataArmors[_0x4e4da1];if(!_0x534f52)continue;if(_0x534f52[_0x5d89bf(0xd4)][_0x5d89bf(0x112)]()==='')continue;if(_0x534f52[_0x5d89bf(0xd4)][_0x5d89bf(0x2fc)]('-----'))continue;$gameParty['removeUnlearnedEquippableMedal'](_0x534f52);}}),PluginManager[_0x31b406(0x30f)](pluginData[_0x31b406(0xd4)],_0x31b406(0x29b),_0x1a5e4b=>{const _0x5940d9=_0x31b406;VisuMZ[_0x5940d9(0x2a0)](_0x1a5e4b,_0x1a5e4b);const _0x3145fe=_0x1a5e4b[_0x5940d9(0x297)];$gameSystem['setEquipMedalCommandVisible'](_0x3145fe);}),VisuMZ[_0x31b406(0x258)]['RegExp']={'EquipCost':/<EQUIP MEDAL (?:COST|SLOTS):[ ](\d+)>/i,'EquipIcon':/<EQUIP MEDAL ICON:[ ](\d+)>/i,'EquipName':/<EQUIP MEDAL NAME:[ ](.*)>/i,'CustomEquipText':/<EQUIP(?:|PED) MEDAL (?:HELP|HELP |)(?:TEXT|DESC|DESCRIPTION)>\s*([\s\S]*)\s*<\/EQUIP(?:|PED) MEDAL (?:HELP|HELP |)(?:TEXT|DESC|DESCRIPTION)>/i,'HideUnlearned':/<HIDE IF NOT LEARNED EQUIP MEDAL>/i,'HideLearnedAllID':/<HIDE IF LEARNED (?:|ALL )EQUIP MEDAL(?:|S):[ ](\d+)>/i,'HideLearnedAnyID':/<HIDE IF LEARNED ANY EQUIP MEDAL(?:|S):[ ](.*)>/i,'HideLearnedAllName':/<HIDE IF LEARNED (?:|ALL )EQUIP MEDAL(?:|S):[ ](.*)>/i,'HideLearnedAnyName':/<HIDE IF LEARNED ANY EQUIP MEDAL(?:|S):[ ](.*)>/i,'MaskUnlearned':/<MASK IF NOT LEARNED EQUIP MEDAL>/i,'NoMaskUnlearned':/<NO MASK IF NOT LEARNED EQUIP MEDAL>/i,'MaskName':/<EQUIP MEDAL MASK NAME: (.*)>/i,'LearnedEquipMedals':/<LEARNED EQUIP(?:|PED) MEDAL(?:|S):[ ](.*)>/i,'AlreadyEquipMedals':/<ALREADY EQUIP(?:|PED) MEDAL(?:|S):[ ](.*)>/i,'LearnableEquipMedalsA':/<LEARNABLE EQUIP(?:|PED) MEDAL(?:|S):[ ](.*)>/i,'LearnableEquipMedalsB':/<LEARNABLE EQUIP(?:|PED) MEDAL(?:|S)>\s*([\s\S]*)\s*<\/LEARNABLE EQUIP(?:|PED) MEDAL(?:|S)>/i,'BranchLearn':/<BRANCH LEARN EQUIP MEDAL(?:|S):[ ](.*)>/i,'BranchLearnable':/<BRANCH LEARNABLE EQUIP MEDAL(?:|S):[ ](.*)>/i,'ItemLinkLearned':/<LINK LEARN EQUIP MEDAL(?:|S):[ ](.*)>/i,'ItemLinkLearnable':/<LINK LEARNABLE EQUIP MEDAL(?:|S):[ ](.*)>/i,'CustomLearnCondText':/<EQUIP(?:|PED) MEDAL LEARN CONDITION TEXT>\s*([\s\S]*)\s*<\/EQUIP(?:|PED) MEDAL LEARN CONDITION TEXT>/i,'LearnAny':/<EQUIP MEDAL LEARN (.*)>/i,'LearnLevel':/<EQUIP MEDAL LEARN LEVEL:[ ](\d+)>/i,'LearnBattles':/<EQUIP MEDAL LEARN BATTLES:[ ](\d+)>/i,'LearnVictory':/<EQUIP MEDAL LEARN VICTORIES:[ ](\d+)>/i,'LearnEscapes':/<EQUIP MEDAL LEARN ESCAPES:[ ](\d+)>/i,'LearnDefeats':/<EQUIP MEDAL LEARN DEFEATS:[ ](\d+)>/i,'LearnAttackTimes':/<EQUIP MEDAL LEARN ATTACK TIMES:[ ](\d+)>/i,'LearnGuardTimes':/<EQUIP MEDAL LEARN GUARD TIMES:[ ](\d+)>/i,'LearnSkillUsage':/<EQUIP MEDAL LEARN USE SKILLS:[ ](\d+)>/i,'LearnPhysSkill':/<EQUIP MEDAL LEARN USE PHYSICAL SKILLS:[ ](\d+)>/i,'LearnMagSkill':/<EQUIP MEDAL LEARN USE MAGICAL SKILLS:[ ](\d+)>/i,'LearnCertSkill':/<EQUIP MEDAL LEARN USE CERTAIN HIT SKILLS:[ ](\d+)>/i,'LearnItemUsage':/<EQUIP MEDAL LEARN USE ITEMS:[ ](\d+)>/i,'LearnDealCritHitTimes':/<EQUIP MEDAL LEARN (?:DEAL|INFLICT) CRIT(?:|S|ICAL)(?:| HIT) TIMES:[ ](\d+)>/i,'LearnTakeCritHitTimes':/<EQUIP MEDAL LEARN (?:TAKE|RECEIVE) CRIT(?:|S|ICAL)(?:| HIT) TIMES:[ ](\d+)>/i,'LearnMissTimes':/<EQUIP MEDAL LEARN (?:MISS|MISSED) TIMES:[ ](\d+)>/i,'LearnEvadeTimes':/<EQUIP MEDAL LEARN (?:EVADE|EVASION) TIMES:[ ](\d+)>/i,'LearnSTypeUsage':/<EQUIP MEDAL LEARN USE STYPE (.*):[ ](\d+)>/gi,'LearnElementDeal':/<EQUIP MEDAL LEARN (?:DEAL|INFLICT) ELEMENT (.*) (?:DMG|DAMAGE):[ ](\d+)>/gi,'LearnElementTake':/<EQUIP MEDAL LEARN (?:TAKE|RECEIVE) ELEMENT (.*) (?:DMG|DAMAGE):[ ](\d+)>/gi,'LearnStateDeal':/<EQUIP MEDAL LEARN (?:DEAL|INFLICT) STATE (.*):[ ](\d+)>/gi,'LearnStateTake':/<EQUIP MEDAL LEARN (?:TAKE|RECEIVE) STATE (.*):[ ](\d+)>/gi,'LearnDefeatTrait':/<EQUIP MEDAL LEARN DEFEAT (.*) TRAIT:[ ](\d+)>/gi,'LearnTotalDmgDeal':/<EQUIP MEDAL LEARN (?:DEAL|INFLICT) TOTAL (?:DMG|DAMAGE):[ ](\d+)>/gi,'LearnTotalDmgTake':/<EQUIP MEDAL LEARN (?:TAKE|RECEIVE) TOTAL (?:DMG|DAMAGE):[ ](\d+)>/gi,'LearnTotalHealDeal':/<EQUIP MEDAL LEARN (?:DEAL|INFLICT) TOTAL (?:HEAL|HEALING):[ ](\d+)>/gi,'LearnTotalHealTake':/<EQUIP MEDAL LEARN (?:TAKE|RECEIVE) TOTAL (?:HEAL|HEALING):[ ](\d+)>/gi,'LearnCountKills':/<EQUIP MEDAL LEARN KILL COUNT:[ ](\d+)>/gi,'LearnCountDeaths':/<EQUIP MEDAL LEARN DEATH COUNT:[ ](\d+)>/gi,'LearnCountAssists':/<EQUIP MEDAL LEARN ASSIST COUNT:[ ](\d+)>/gi,'LearnHaveGold':/<EQUIP MEDAL LEARN (?:HAVE|REACH) GOLD:[ ](\d+)>/i,'LearnHaveItem':/<EQUIP MEDAL LEARN (?:HAVE|REACH) ITEM (.*):[ ](\d+)>/gi,'LearnHaveWeapon':/<EQUIP MEDAL LEARN (?:HAVE|REACH) WEAPON (.*):[ ](\d+)>/gi,'LearnHaveArmor':/<EQUIP MEDAL LEARN (?:HAVE|REACH) ARMOR (.*):[ ](\d+)>/gi,'LearnHaveParam':/<EQUIP MEDAL LEARN (?:HAVE|REACH) (?:|BASE )PARAM[ ](.*):[ ](\d+)>/gi,'LearnHaveXParam':/<EQUIP MEDAL LEARN (?:HAVE|REACH) (?:X|X )PARAM[ ](.*):[ ](\d+)([%％])>/gi,'LearnHaveSParam':/<EQUIP MEDAL LEARN (?:HAVE|REACH) (?:S|S )PARAM[ ](.*):[ ](\d+)([%％])>/gi,'Evolution':/<EQUIP MEDAL EVOLVE(?:|S) (?:INTO |TO |)(.*):[ ](\d+)>/i,'EvolutionNext':/<EQUIP MEDAL EVOLVE(?:|S) (?:INTO |TO |)NEXT:[ ](\d+)>/i,'EnemyMedalExp':/<(?:EQUIP |)MEDAL EXP:[ ](.*)>/i,'MedalExpRate':/<(?:EQUIP |)MEDAL EXP RATE:[ ](\d+)([%％])>/i,'MedalFullGauge':/<(?:EQUIP |)MEDAL FULL EXP GAUGE>/i,'MedalGaugeColor1':/<(?:EQUIP |)MEDAL EXP GAUGE COLOR 1:[ ](.*)>/i,'MedalGaugeColor2':/<(?:EQUIP |)MEDAL EXP GAUGE COLOR 2:[ ](.*)>/i},VisuMZ['EquipMedalSys'][_0x31b406(0x26f)]=Scene_Boot[_0x31b406(0x161)][_0x31b406(0x224)],Scene_Boot[_0x31b406(0x161)][_0x31b406(0x224)]=function(){const _0x2e2530=_0x31b406;VisuMZ[_0x2e2530(0x258)][_0x2e2530(0x26f)]['call'](this),VisuMZ[_0x2e2530(0x258)][_0x2e2530(0xdd)]();},VisuMZ['EquipMedalSys']['CheckCompatibility']=function(){const _0xa807c4=_0x31b406;if(Imported[_0xa807c4(0x242)]&&VisuMZ['ElementStatusCore'][_0xa807c4(0x16b)]<1.23){let _0x377e58='';_0x377e58+=_0xa807c4(0x298),_0x377e58+=_0xa807c4(0xaf),alert(_0x377e58),SceneManager[_0xa807c4(0x95)]();}},DataManager[_0x31b406(0x2be)]=function(_0x15fecc){const _0x5ed006=_0x31b406;_0x15fecc=_0x15fecc[_0x5ed006(0x166)]()[_0x5ed006(0x112)](),this[_0x5ed006(0x12e)]=this[_0x5ed006(0x12e)]||{};if(this['_stypeIDs'][_0x15fecc])return this[_0x5ed006(0x12e)][_0x15fecc];for(let _0x395e69=0x1;_0x395e69<0x64;_0x395e69++){if(!$dataSystem[_0x5ed006(0x1c7)][_0x395e69])continue;let _0x420c39=$dataSystem[_0x5ed006(0x1c7)][_0x395e69][_0x5ed006(0x166)]()[_0x5ed006(0x112)]();_0x420c39=_0x420c39[_0x5ed006(0x248)](/\x1I\[(\d+)\]/gi,''),_0x420c39=_0x420c39['replace'](/\\I\[(\d+)\]/gi,''),this[_0x5ed006(0x12e)][_0x420c39]=_0x395e69;}return this[_0x5ed006(0x12e)][_0x15fecc]||0x0;},DataManager[_0x31b406(0x9b)]=function(_0x47352a){const _0x8346a8=_0x31b406;_0x47352a=_0x47352a['toUpperCase']()[_0x8346a8(0x112)](),this['_stateIDs']=this[_0x8346a8(0x31f)]||{};if(this[_0x8346a8(0x31f)][_0x47352a])return this['_stateIDs'][_0x47352a];for(const _0x161a79 of $dataStates){if(!_0x161a79)continue;this[_0x8346a8(0x31f)][_0x161a79[_0x8346a8(0xd4)][_0x8346a8(0x166)]()['trim']()]=_0x161a79['id'];}return this[_0x8346a8(0x31f)][_0x47352a]||0x0;},DataManager[_0x31b406(0x2ae)]=function(_0x19e1d1){const _0x4e859b=_0x31b406;_0x19e1d1=_0x19e1d1['toUpperCase']()['trim'](),this[_0x4e859b(0x164)]=this[_0x4e859b(0x164)]||{};if(this[_0x4e859b(0x164)][_0x19e1d1])return this['_elementIDs'][_0x19e1d1];let _0x2a141e=0x1;for(const _0x1a076c of $dataSystem[_0x4e859b(0xd8)]){if(!_0x1a076c)continue;let _0x45823e=_0x1a076c[_0x4e859b(0x166)]();_0x45823e=_0x45823e[_0x4e859b(0x248)](/\x1I\[(\d+)\]/gi,''),_0x45823e=_0x45823e[_0x4e859b(0x248)](/\\I\[(\d+)\]/gi,''),this[_0x4e859b(0x164)][_0x45823e]=_0x2a141e,_0x2a141e++;}return this[_0x4e859b(0x164)][_0x19e1d1]||0x0;},DataManager[_0x31b406(0x126)]=function(_0x2f56a9){const _0x1209c7=_0x31b406;if(!this[_0x1209c7(0x2ed)](_0x2f56a9))return 0x0;this[_0x1209c7(0x2cd)]=this[_0x1209c7(0x2cd)]||{};if(this['_getEquipMedalCost'][_0x2f56a9['id']]!==undefined)return this[_0x1209c7(0x2cd)][_0x2f56a9['id']];let _0x243f8b=Game_Actor[_0x1209c7(0x30a)][_0x1209c7(0x253)]||0x1;const _0x5ba4c7=VisuMZ['EquipMedalSys'][_0x1209c7(0x26d)],_0xc77747=_0x2f56a9['note']||'';return _0xc77747['match'](_0x5ba4c7[_0x1209c7(0x32e)])&&(_0x243f8b=Number(RegExp['$1'])),this['_getEquipMedalCost'][_0x2f56a9['id']]=_0x243f8b,this['_getEquipMedalCost'][_0x2f56a9['id']];},DataManager[_0x31b406(0x2c7)]=function(_0x4ee6eb){const _0x2da338=_0x31b406;if(!this['isArmor'](_0x4ee6eb))return 0x0;this['_getEquipMedalIcon']=this['_getEquipMedalIcon']||{};if(this[_0x2da338(0x11f)][_0x4ee6eb['id']]!==undefined)return this['_getEquipMedalIcon'][_0x4ee6eb['id']];let _0x1fee9d=_0x4ee6eb[_0x2da338(0x1b2)]||ImageManager[_0x2da338(0x30a)][_0x2da338(0x275)];const _0x4391d6=VisuMZ['EquipMedalSys'][_0x2da338(0x26d)],_0x432c9c=_0x4ee6eb[_0x2da338(0x209)]||'';return _0x432c9c[_0x2da338(0xae)](_0x4391d6[_0x2da338(0x299)])&&(_0x1fee9d=Number(RegExp['$1'])),this['_getEquipMedalIcon'][_0x4ee6eb['id']]=_0x1fee9d,this[_0x2da338(0x11f)][_0x4ee6eb['id']];},DataManager[_0x31b406(0x241)]=function(_0x589aa7){const _0x2e275b=_0x31b406;if(!this[_0x2e275b(0x2ed)](_0x589aa7))return 0x0;this['_getEquipMedalName']=this[_0x2e275b(0xfb)]||{};if(this[_0x2e275b(0xfb)][_0x589aa7['id']]!==undefined)return this[_0x2e275b(0xfb)][_0x589aa7['id']];let _0x3370ea=_0x589aa7[_0x2e275b(0xd4)]||'';const _0x207e2d=VisuMZ['EquipMedalSys'][_0x2e275b(0x26d)],_0x43c8e6=_0x589aa7['note']||'';return _0x43c8e6[_0x2e275b(0xae)](_0x207e2d[_0x2e275b(0x2c9)])&&(_0x3370ea=String(RegExp['$1'])[_0x2e275b(0x112)]()),this['_getEquipMedalName'][_0x589aa7['id']]=_0x3370ea,this[_0x2e275b(0xfb)][_0x589aa7['id']];},DataManager[_0x31b406(0x2e0)]=function(_0xc6c93e){const _0x204a3f=_0x31b406,_0x461678=this[_0x204a3f(0x257)](_0xc6c93e['actor']()),_0x15a40f=this[_0x204a3f(0x257)](_0xc6c93e[_0x204a3f(0x2b7)]());let _0x2dcccf=_0x461678['concat'](_0x15a40f);return _0x2dcccf=_0x2dcccf['filter']((_0x1c7b02,_0x361d27,_0x51896f)=>_0x51896f[_0x204a3f(0x123)](_0x1c7b02)===_0x361d27),_0x2dcccf;},DataManager[_0x31b406(0x257)]=function(_0x433670){const _0x89dd6d=_0x31b406;let _0x24647f=null;this[_0x89dd6d(0x15b)]=this[_0x89dd6d(0x15b)]||{},this[_0x89dd6d(0x9f)]=this[_0x89dd6d(0x9f)]||{};if(_0x433670[_0x89dd6d(0xb9)]!==undefined&&_0x433670[_0x89dd6d(0x16e)]!==undefined)_0x24647f=this[_0x89dd6d(0x15b)];else{if(_0x433670[_0x89dd6d(0x17f)]!==undefined&&_0x433670[_0x89dd6d(0x321)]!==undefined)_0x24647f=this['_cache_class_getLearnableEquippableMedals'];else return[];}if(_0x24647f[_0x433670['id']]!==undefined)return _0x24647f[_0x433670['id']];_0x24647f[_0x433670['id']]=[];const _0x1f8ace=VisuMZ[_0x89dd6d(0x258)]['RegExp'],_0x128318=_0x433670[_0x89dd6d(0x209)]||'';if(_0x128318['match'](_0x1f8ace[_0x89dd6d(0x317)])){const _0x35347c=String(RegExp['$1'])[_0x89dd6d(0x8d)](',')[_0x89dd6d(0x14b)](_0x29fd72=>_0x29fd72[_0x89dd6d(0x112)]());for(const _0x26b44f of _0x35347c){const _0x64c51b=/^\d+$/[_0x89dd6d(0x17e)](_0x26b44f);let _0x5d1eec=0x0;_0x64c51b?_0x5d1eec=Number(_0x26b44f):_0x5d1eec=DataManager[_0x89dd6d(0xcd)](_0x26b44f),_0x5d1eec>0x0&&_0x24647f[_0x433670['id']][_0x89dd6d(0x110)](_0x5d1eec);}}if(_0x128318[_0x89dd6d(0xae)](_0x1f8ace[_0x89dd6d(0x1ee)])){const _0x5a0c7c=String(RegExp['$1'])[_0x89dd6d(0x8d)](/[\r\n]+/);for(const _0x262699 of _0x5a0c7c){const _0x45eb8b=/^\d+$/[_0x89dd6d(0x17e)](_0x262699);let _0x327702=0x0;_0x45eb8b?_0x327702=Number(_0x262699):_0x327702=DataManager['getArmorIdWithName'](_0x262699),_0x327702>0x0&&_0x24647f[_0x433670['id']][_0x89dd6d(0x110)](_0x327702);}}return _0x24647f[_0x433670['id']];},DataManager[_0x31b406(0x294)]=function(_0x7f2522){const _0x29aecf=_0x31b406;if(!this[_0x29aecf(0x2ed)](_0x7f2522))return 0x0;this['_getEquipMedalEvolutionData']=this[_0x29aecf(0x206)]||{};if(this[_0x29aecf(0x206)][_0x7f2522['id']]!==undefined)return this[_0x29aecf(0x206)][_0x7f2522['id']];const _0x404b2c={},_0x52afa3=VisuMZ[_0x29aecf(0x258)][_0x29aecf(0x26d)],_0x4a98cf=_0x7f2522[_0x29aecf(0x209)]||'';if(_0x4a98cf['match'](_0x52afa3[_0x29aecf(0x245)])){const _0x1013fe=Math['max'](Number(RegExp['$1']),0x1);_0x404b2c[_0x29aecf(0x323)]=_0x7f2522['id']+0x1,_0x404b2c[_0x29aecf(0x2f4)]=_0x1013fe;}else{if(_0x4a98cf[_0x29aecf(0xae)](_0x52afa3[_0x29aecf(0x19e)])){const _0x8aa8da=String(RegExp['$1'])[_0x29aecf(0x112)](),_0x2b4f81=Math[_0x29aecf(0x21a)](Number(RegExp['$2']),0x1),_0x4f0e1e=/^\d+$/[_0x29aecf(0x17e)](_0x8aa8da);let _0x27d8b3=0x0;_0x4f0e1e?_0x27d8b3=Number(_0x8aa8da):_0x27d8b3=DataManager[_0x29aecf(0xcd)](_0x8aa8da),_0x27d8b3>0x0&&(_0x404b2c['targetID']=_0x27d8b3,_0x404b2c[_0x29aecf(0x2f4)]=_0x2b4f81);}}return this[_0x29aecf(0x206)][_0x7f2522['id']]=_0x404b2c,this[_0x29aecf(0x206)][_0x7f2522['id']];},DataManager[_0x31b406(0x157)]=function(_0x4c3778){const _0x5ed366=_0x31b406;return this['getEquipMedalEvolutionData'](_0x4c3778)[_0x5ed366(0x323)];},DataManager[_0x31b406(0x2bf)]=function(_0x3702f3){const _0x9443bb=_0x31b406;return this[_0x9443bb(0x294)](_0x3702f3)[_0x9443bb(0x2f4)]||0x0;},DataManager[_0x31b406(0x218)]=function(_0x4b2803){return $dataArmors[this['getEquipMedalEvolutionID'](_0x4b2803)];},DataManager[_0x31b406(0x1c1)]=function(_0x5652c7){return!!this['getEquipMedalEvolutionTarget'](_0x5652c7);},ImageManager[_0x31b406(0x30a)]={'icon':VisuMZ['EquipMedalSys']['Settings']['Vocab'][_0x31b406(0x285)]??0x93,'capacity':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab'][_0x31b406(0x19b)]??0x135},TextManager[_0x31b406(0x30a)]={'command':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x2df)]??_0x31b406(0x1d9),'capacity':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0xbd)]??_0x31b406(0x170),'capacityFmt':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0x120)]['CapacityFmt']??_0x31b406(0x2a1),'costFmt':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x2c4)]??_0x31b406(0x1b7),'unlearned':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x1b1)]??_0x31b406(0xdb),'learnShowTextPopup':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x23b)]['LearnPopup']??!![],'textPopupFmt':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x23b)][_0x31b406(0x8e)]??'%1\x20has\x20acquired\x20%3%2!','helpFmt':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0x120)]['HelpFmt']??'\x5cC[16]Acquire\x20Conditions:\x5cC[0]\x20%1','helpWordWrap':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x330)]??!![],'helpSpacing':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)]['helpSpacing']??!![],'helpSpacer':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x18d)]??',','helpNothing':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab'][_0x31b406(0x207)]??'-','helpDescFmt':{'progressFmt':VisuMZ[_0x31b406(0x258)]['Settings']['Vocab']['progressFmt']??_0x31b406(0x92),'progressFraction':VisuMZ[_0x31b406(0x258)]['Settings'][_0x31b406(0x120)][_0x31b406(0x30c)]??_0x31b406(0x1ff),'progressPercent':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab'][_0x31b406(0x270)]??_0x31b406(0xca),'progressLengthLimit':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab'][_0x31b406(0xb2)]??0x7,'progressComplete':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0xa3)]??'\x5cI[87]','level':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x24f)]??'Reach\x20Level\x20%1\x20%2','battle':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0x120)]['battle']??_0x31b406(0x174),'victory':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0xa2)]??'Win\x20%1\x20Battles\x20%2','escapes':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab'][_0x31b406(0x11e)]??'Escape\x20%1\x20Battles\x20%2','defeat':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x2a9)]??'Lose\x20%1\x20Battles\x20%2','attackTimes':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x154)]??'Attack\x20%1\x20Times\x20%2','guardTimes':VisuMZ[_0x31b406(0x258)]['Settings']['Vocab'][_0x31b406(0x1eb)]??'Guard\x20%1\x20Times\x20%2','skillUse':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab'][_0x31b406(0x15f)]??_0x31b406(0x26e),'physSkillUse':VisuMZ[_0x31b406(0x258)]['Settings'][_0x31b406(0x120)]['physSkillUse']??_0x31b406(0xd9),'magSkillUse':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0x120)]['magSkillUse']??'Use\x20%1\x20Magical\x20Skills\x20%2','certSkillUse':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab']['certSkillUse']??_0x31b406(0x2dd),'itemUse':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)]['itemUse']??_0x31b406(0x2d5),'critDeal':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)]['critDeal']??_0x31b406(0x1fc),'critTake':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x24a)]??'Take\x20%1\x20Critical\x20Hits\x20%2','miss':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x14a)]??_0x31b406(0xbf),'evade':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab'][_0x31b406(0x15c)]??_0x31b406(0x139),'stypeUse':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)]['stypeUse']??'Use\x20%1\x20%3\x20Skills\x20%2','elementDeal':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x130)]??_0x31b406(0x2b5),'elementTake':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x2f2)]??_0x31b406(0x322),'stateDeal':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0xfc)]??_0x31b406(0x165),'stateTake':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x278)]??_0x31b406(0x32a),'traitSlayer':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x254)]??_0x31b406(0x1b8),'totalDmgDeal':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)]['totalDmgDeal']??_0x31b406(0x1ab),'totalDmgTake':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)]['totalDmgTake']??_0x31b406(0xe4),'totalHealDeal':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0xd3)]??_0x31b406(0x167),'totalHealTake':VisuMZ[_0x31b406(0x258)]['Settings'][_0x31b406(0x120)][_0x31b406(0x1a7)]??_0x31b406(0x223),'kills':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0x120)]['kills']??_0x31b406(0x27f),'deaths':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab'][_0x31b406(0x2fa)]??_0x31b406(0x2c2),'assists':VisuMZ[_0x31b406(0x258)]['Settings'][_0x31b406(0x120)][_0x31b406(0xa1)]??'Assist\x20%1\x20Times\x20%2','haveGold':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x2a8)]??_0x31b406(0x251),'haveItem':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x2c5)]??_0x31b406(0x124),'haveWeapon':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab'][_0x31b406(0x18b)]??_0x31b406(0x124),'haveArmor':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x200)]??'Possess\x20%3\x20×%1\x20%2','haveParam':VisuMZ['EquipMedalSys'][_0x31b406(0x326)]['Vocab']['haveParam']??_0x31b406(0x2fe),'haveXParam':VisuMZ[_0x31b406(0x258)]['Settings'][_0x31b406(0x120)][_0x31b406(0x247)]??_0x31b406(0x22a),'haveSParam':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab'][_0x31b406(0x250)]??_0x31b406(0x22a)},'helpMeetConditionColor':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x24d)]??0x18,'equipMedalExpName':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab']['equipMedalExpName']??'Glory','equipMedalExpIcon':VisuMZ[_0x31b406(0x258)]['Settings'][_0x31b406(0x120)][_0x31b406(0x301)]??0x93,'equipMedalDisplayFmt':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab']['equipMedalDisplayFmt']??_0x31b406(0xd0),'rewardMessageFmt':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)]['rewardMessageFmt']??_0x31b406(0xad),'expTextFormat':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x307)]??'\x5c}%1/%2\x20(%3%)\x5c{','maxExpTextFormat':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x120)][_0x31b406(0x1fa)]??_0x31b406(0x2a3),'expPercentDigits':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Vocab'][_0x31b406(0x108)]??0x2},TextManager[_0x31b406(0x27c)]=TextManager[_0x31b406(0x30a)][_0x31b406(0x23c)],ColorManager[_0x31b406(0x99)]=function(){const _0x473eed=_0x31b406;return this[_0x473eed(0x331)](Window_EquipMedalList[_0x473eed(0x2fd)][_0x473eed(0x201)]);},VisuMZ['EquipMedalSys']['BattleManager_makeRewards']=BattleManager[_0x31b406(0x184)],BattleManager[_0x31b406(0x184)]=function(){const _0x19f3c3=_0x31b406;VisuMZ[_0x19f3c3(0x258)][_0x19f3c3(0x328)]['call'](this),this[_0x19f3c3(0x22e)](),this[_0x19f3c3(0x1dc)]();},VisuMZ[_0x31b406(0x258)][_0x31b406(0x1f2)]=BattleManager[_0x31b406(0x1fb)],BattleManager[_0x31b406(0x1fb)]=function(){const _0x8ee819=_0x31b406;VisuMZ[_0x8ee819(0x258)][_0x8ee819(0x1f2)]['call'](this),this['displayRewardsEquipMedalExp']();},BattleManager[_0x31b406(0x22e)]=function(){const _0x1a5b0d=_0x31b406;this[_0x1a5b0d(0x97)][_0x1a5b0d(0x27c)]=$gameTroop[_0x1a5b0d(0x264)]();},BattleManager['displayRewardsEquipMedalExp']=function(){const _0xbd42ae=_0x31b406;if(!this[_0xbd42ae(0x249)]())return;this[_0xbd42ae(0x97)][_0xbd42ae(0x27c)]=this[_0xbd42ae(0x97)][_0xbd42ae(0x27c)]||0x0;const _0x35d578=TextManager[_0xbd42ae(0x30a)],_0x5e6f40=_0x35d578[_0xbd42ae(0x2ec)],_0x48c02e=_0xbd42ae(0x212)[_0xbd42ae(0x15a)](_0x35d578[_0xbd42ae(0x301)]),_0x51e037=_0x35d578[_0xbd42ae(0x23c)],_0x4efa5c=_0x35d578[_0xbd42ae(0x14c)],_0x59df78=_0x4efa5c[_0xbd42ae(0x15a)](_0x51e037,_0x48c02e),_0x545142=_0x5e6f40[_0xbd42ae(0x15a)](this[_0xbd42ae(0x97)][_0xbd42ae(0x27c)],_0x59df78);$gameMessage[_0xbd42ae(0x196)]('\x5c.'+_0x545142);},BattleManager['gainRewardsEquipMedalExp']=function(){const _0x1cdeb6=_0x31b406;this[_0x1cdeb6(0x97)][_0x1cdeb6(0x27c)]=this[_0x1cdeb6(0x97)][_0x1cdeb6(0x27c)]||0x0;const _0x3918f1=Game_Troop[_0x1cdeb6(0x30a)];let _0x48a1e7=$gameParty[_0x1cdeb6(0x1ea)]();_0x3918f1['rewardAliveActors']&&(_0x48a1e7=_0x48a1e7[_0x1cdeb6(0x12f)](_0x49ed10=>_0x49ed10[_0x1cdeb6(0x2e8)]()));for(const _0x1c8283 of _0x48a1e7){if(!_0x1c8283)continue;if(!$dataSystem['optExtraExp']&&!_0x1c8283[_0x1cdeb6(0xa5)]())continue;_0x1c8283[_0x1cdeb6(0x93)](this[_0x1cdeb6(0x97)][_0x1cdeb6(0x27c)]);}},BattleManager[_0x31b406(0x249)]=function(){const _0x465d9f=_0x31b406;return Game_Troop['EQUIP_MEDAL_SYS'][_0x465d9f(0x105)];},VisuMZ[_0x31b406(0x258)][_0x31b406(0x188)]=Game_System['prototype']['initialize'],Game_System['prototype'][_0x31b406(0xce)]=function(){const _0x16016b=_0x31b406;VisuMZ[_0x16016b(0x258)][_0x16016b(0x188)][_0x16016b(0x210)](this),this[_0x16016b(0x2cc)]();},Game_System['prototype'][_0x31b406(0x2cc)]=function(){const _0x1e701f=_0x31b406;this[_0x1e701f(0x106)]=Window_EquipCommand['EQUIP_MEDAL_SYS'][_0x1e701f(0x23f)];},Game_System[_0x31b406(0x161)][_0x31b406(0x1b0)]=function(){const _0x58f7cb=_0x31b406;return this[_0x58f7cb(0x106)]===undefined&&this[_0x58f7cb(0x2cc)](),this[_0x58f7cb(0x106)];},Game_System['prototype'][_0x31b406(0x107)]=function(_0x59630d){const _0x56bfe3=_0x31b406;this[_0x56bfe3(0x106)]===undefined&&this[_0x56bfe3(0x2cc)](),this[_0x56bfe3(0x106)]=_0x59630d;},Game_Actor[_0x31b406(0x30a)]={'defaultCost':VisuMZ[_0x31b406(0x258)]['Settings']['General'][_0x31b406(0x211)]??0x1,'minCapacity':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x23b)][_0x31b406(0x311)]??0x1,'maxCapacity':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0x23b)]['MaximumCost']??0xa,'capacityFormula':VisuMZ[_0x31b406(0x258)]['Settings'][_0x31b406(0x23b)][_0x31b406(0x1da)]??_0x31b406(0x12c),'checkOverCapacityExp':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['General'][_0x31b406(0x1c9)]??!![],'learnAutoEquip':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x23b)][_0x31b406(0xa6)]??![]},VisuMZ[_0x31b406(0x258)]['Game_Actor_setup']=Game_Actor[_0x31b406(0x161)][_0x31b406(0x2c3)],Game_Actor[_0x31b406(0x161)][_0x31b406(0x2c3)]=function(_0x296d2f){const _0x13866b=_0x31b406;VisuMZ['EquipMedalSys'][_0x13866b(0x2ac)][_0x13866b(0x210)](this,_0x296d2f),this[_0x13866b(0x2cc)]();},Game_Actor[_0x31b406(0x161)][_0x31b406(0x2cc)]=function(){const _0x5a2d43=_0x31b406;this[_0x5a2d43(0x13f)]=[],this[_0x5a2d43(0xe8)]=[],this['_equippedMedals']=[];if(VisuMZ[_0x5a2d43(0x258)]['DEBUG'])for(let _0x89f45a=0x2;_0x89f45a<=0x56;_0x89f45a++){const _0x56c6e0=$dataArmors[_0x89f45a];if(_0x56c6e0['name']==='')continue;if(_0x56c6e0[_0x5a2d43(0xd4)][_0x5a2d43(0x2fc)](_0x5a2d43(0x118)))continue;this[_0x5a2d43(0x13f)][_0x5a2d43(0x110)](_0x89f45a);}this[_0x5a2d43(0x2c0)](),this[_0x5a2d43(0x284)](),this['_learnedEquippableMedals'][_0x5a2d43(0xe9)]((_0x207086,_0xcb6335)=>_0x207086-_0xcb6335);},Game_Actor[_0x31b406(0x161)][_0x31b406(0x23a)]=function(){const _0x2f4c34=_0x31b406;if(this[_0x2f4c34(0x1ad)]===undefined)this['initEquipMedalSystem']();return this['_equippedMedals']['map'](_0x37c0f3=>$dataArmors[_0x37c0f3])[_0x2f4c34(0x312)](null)['remove'](undefined);},Game_Actor['prototype'][_0x31b406(0x271)]=function(_0x48700f){const _0x24c23f=_0x31b406;if(!DataManager[_0x24c23f(0x2ed)](_0x48700f))return![];if(this[_0x24c23f(0x1ad)]===undefined)this[_0x24c23f(0x2cc)]();return this[_0x24c23f(0x1ad)][_0x24c23f(0x2fc)](_0x48700f['id']);},Game_Actor[_0x31b406(0x161)][_0x31b406(0x25c)]=function(_0x4ed56a){const _0x3dc4f5=_0x31b406;if(!DataManager[_0x3dc4f5(0x2ed)](_0x4ed56a))return![];if(this[_0x3dc4f5(0x1ad)]===undefined)this['initEquipMedalSystem']();if(this[_0x3dc4f5(0x1ad)][_0x3dc4f5(0x2fc)](_0x4ed56a['id']))return;let _0x521b69=null;!this[_0x3dc4f5(0x91)]&&(_0x521b69=JsonEx['makeDeepCopy'](this),_0x521b69['_tempActor']=!![]),this[_0x3dc4f5(0x1ad)][_0x3dc4f5(0x110)](_0x4ed56a['id']),this[_0x3dc4f5(0xba)]={},this[_0x3dc4f5(0xea)](),!this[_0x3dc4f5(0x91)]&&this[_0x3dc4f5(0x16f)](_0x521b69);},Game_Actor['prototype']['removeEquipMedal']=function(_0x59255e){const _0xc6ce40=_0x31b406;if(!DataManager[_0xc6ce40(0x2ed)](_0x59255e))return![];if(this['_equippedMedals']===undefined)this[_0xc6ce40(0x2cc)]();if(!this['_equippedMedals'][_0xc6ce40(0x2fc)](_0x59255e['id']))return;let _0x2b75e4=null;!this[_0xc6ce40(0x91)]&&(_0x2b75e4=JsonEx[_0xc6ce40(0x2b8)](this),_0x2b75e4['_tempActor']=!![]),this[_0xc6ce40(0x1ad)][_0xc6ce40(0x312)](_0x59255e['id']),this[_0xc6ce40(0xba)]={},this['refresh'](),!this[_0xc6ce40(0x91)]&&this[_0xc6ce40(0x16f)](_0x2b75e4);},Game_Actor[_0x31b406(0x161)]['learnEquippedMedal']=function(_0x282c87,_0x376dd6){const _0x422dfe=_0x31b406;if(!DataManager[_0x422dfe(0x2ed)](_0x282c87))return;if(this['_learnedEquippableMedals']===undefined)this[_0x422dfe(0x2cc)]();if(this[_0x422dfe(0x13f)]['includes'](_0x282c87['id']))return;this[_0x422dfe(0x13f)]['push'](_0x282c87['id']),this[_0x422dfe(0x13f)][_0x422dfe(0xe9)]((_0x2f20e0,_0x510019)=>_0x2f20e0-_0x510019);Game_Actor[_0x422dfe(0x30a)]['learnAutoEquip']&&$gameSystem[_0x422dfe(0x1b0)]()&&(this[_0x422dfe(0x304)](_0x282c87)&&this[_0x422dfe(0x25c)](_0x282c87));if(!_0x376dd6&&TextManager[_0x422dfe(0x30a)][_0x422dfe(0x1e1)]&&this===$gameActors[_0x422dfe(0xeb)](this[_0x422dfe(0x26c)]())){const _0x3e3e25=TextManager[_0x422dfe(0x30a)][_0x422dfe(0x13e)],_0x5c3ca5=DataManager[_0x422dfe(0x241)](_0x282c87),_0x833a63=_0x422dfe(0x212)[_0x422dfe(0x15a)](DataManager['getEquipMedalIcon'](_0x282c87)),_0x1801c0=_0x3e3e25[_0x422dfe(0x15a)](this['name'](),_0x5c3ca5,_0x833a63);$textPopup(_0x1801c0);}this[_0x422dfe(0x197)](_0x282c87,_0x376dd6),this[_0x422dfe(0x13b)](_0x282c87),this[_0x422dfe(0xea)]();},Game_Actor[_0x31b406(0x161)]['forgetEquippedMedal']=function(_0x36fb7b){const _0xf4cb6f=_0x31b406;if(!DataManager[_0xf4cb6f(0x2ed)](_0x36fb7b))return;if(this[_0xf4cb6f(0x13f)]===undefined)this[_0xf4cb6f(0x2cc)]();if(!this[_0xf4cb6f(0x13f)][_0xf4cb6f(0x2fc)](_0x36fb7b['id']))return;this[_0xf4cb6f(0x13f)][_0xf4cb6f(0x312)](_0x36fb7b['id']),this[_0xf4cb6f(0x1ad)][_0xf4cb6f(0x312)](_0x36fb7b['id']),this['_learnedEquippableMedals'][_0xf4cb6f(0xe9)]((_0x2166cc,_0x1c8b3e)=>_0x2166cc-_0x1c8b3e),this[_0xf4cb6f(0xea)]();},Game_Actor[_0x31b406(0x161)][_0x31b406(0x2a6)]=function(_0x3ef54a){const _0x18c294=_0x31b406;if(!DataManager[_0x18c294(0x2ed)](_0x3ef54a))return![];if(this[_0x18c294(0x13f)]===undefined)this[_0x18c294(0x2cc)]();return this[_0x18c294(0x13f)][_0x18c294(0x2fc)](_0x3ef54a['id'])||$gameParty[_0x18c294(0x2a6)](_0x3ef54a);},Game_Actor[_0x31b406(0x161)]['addUnlearnedEquippableMedal']=function(_0x1938d1){const _0x2fd769=_0x31b406;if(!DataManager[_0x2fd769(0x2ed)](_0x1938d1))return![];if(this[_0x2fd769(0xe8)]===undefined)this[_0x2fd769(0x2cc)]();if(this[_0x2fd769(0xe8)]['includes'](_0x1938d1['id']))return;this[_0x2fd769(0xe8)][_0x2fd769(0x110)](_0x1938d1['id']),this[_0x2fd769(0xe8)]['sort']((_0x313dae,_0x4da383)=>_0x313dae-_0x4da383);},Game_Actor[_0x31b406(0x161)][_0x31b406(0x280)]=function(_0x35ca4a){const _0x430172=_0x31b406;if(!DataManager[_0x430172(0x2ed)](_0x35ca4a))return![];if(this[_0x430172(0xe8)]===undefined)this[_0x430172(0x2cc)]();if(!this[_0x430172(0xe8)][_0x430172(0x2fc)](_0x35ca4a['id']))return;this[_0x430172(0xe8)][_0x430172(0x312)](_0x35ca4a['id']),this[_0x430172(0xe8)]['sort']((_0x553f3c,_0x26c8b4)=>_0x553f3c-_0x26c8b4);},Game_Actor['prototype']['setupInitialLearnedEquippableMedals']=function(){const _0x19260e=_0x31b406,_0x5ec5d6=VisuMZ[_0x19260e(0x258)][_0x19260e(0x26d)],_0x177830=this[_0x19260e(0xeb)]()[_0x19260e(0x209)]||'';if(_0x177830['match'](_0x5ec5d6['LearnedEquipMedals'])){const _0x4de67a=String(RegExp['$1'])['split'](',')['map'](_0x3e9579=>_0x3e9579[_0x19260e(0x112)]());for(const _0x3d5b62 of _0x4de67a){const _0x35dd39=/^\d+$/[_0x19260e(0x17e)](_0x3d5b62);let _0x1643a3=0x0;_0x35dd39?_0x1643a3=Number(_0x3d5b62):_0x1643a3=DataManager['getArmorIdWithName'](_0x3d5b62),_0x1643a3>0x0&&(!this[_0x19260e(0x13f)][_0x19260e(0x2fc)](_0x1643a3)&&this[_0x19260e(0x13f)]['push'](_0x1643a3));}}},Game_Actor['prototype']['setupInitialAlreadyEquippedMedals']=function(){const _0x3a21bc=_0x31b406,_0x1e7c30=VisuMZ[_0x3a21bc(0x258)]['RegExp'],_0x2946c2=this[_0x3a21bc(0xeb)]()[_0x3a21bc(0x209)]||'';if(_0x2946c2['match'](_0x1e7c30[_0x3a21bc(0x20d)])){const _0x2d66d3=String(RegExp['$1'])['split'](',')['map'](_0x176903=>_0x176903[_0x3a21bc(0x112)]());for(const _0x3bca78 of _0x2d66d3){const _0x26d468=/^\d+$/[_0x3a21bc(0x17e)](_0x3bca78);let _0xc6556d=0x0;_0x26d468?_0xc6556d=Number(_0x3bca78):_0xc6556d=DataManager[_0x3a21bc(0xcd)](_0x3bca78);if(_0xc6556d>0x0){!this['_learnedEquippableMedals'][_0x3a21bc(0x2fc)](_0xc6556d)&&this[_0x3a21bc(0x13f)][_0x3a21bc(0x110)](_0xc6556d);const _0x37fab2=$dataArmors[_0xc6556d];this[_0x3a21bc(0x304)](_0x37fab2)&&this[_0x3a21bc(0x25c)](_0x37fab2);}}}},Game_Actor['prototype']['availableLearnedEquippableMedals']=function(){const _0xecb3b0=_0x31b406;if(this['_learnedEquippableMedals']===undefined)this['initEquipMedalSystem']();let _0x43f27e=[];return _0x43f27e=_0x43f27e[_0xecb3b0(0x2f1)](this['_learnedEquippableMedals']),_0x43f27e=_0x43f27e['concat']($gameParty[_0xecb3b0(0x191)]()),_0x43f27e=_0x43f27e[_0xecb3b0(0x12f)]((_0x4ff775,_0x11128e,_0xaca777)=>_0xaca777[_0xecb3b0(0x123)](_0x4ff775)===_0x11128e),_0x43f27e[_0xecb3b0(0x14b)](_0x4f6dd4=>$dataArmors[_0x4f6dd4])[_0xecb3b0(0x312)](null)['remove'](undefined);},Game_Actor[_0x31b406(0x161)][_0x31b406(0x295)]=function(){const _0x2d5a9d=_0x31b406;if(this['_learnedEquippableMedals']===undefined)this[_0x2d5a9d(0x2cc)]();if(this['_learnableEquippableMedals']===undefined)this[_0x2d5a9d(0x2cc)]();let _0x1bf7bb=this[_0x2d5a9d(0xe8)][_0x2d5a9d(0xc2)]();return _0x1bf7bb=_0x1bf7bb[_0x2d5a9d(0x2f1)](DataManager['getLearnableEquippableMedalIDs'](this)),_0x1bf7bb=_0x1bf7bb['concat']($gameParty[_0x2d5a9d(0xa9)]()),_0x1bf7bb=_0x1bf7bb[_0x2d5a9d(0x12f)](_0x27052d=>!this[_0x2d5a9d(0x13f)][_0x2d5a9d(0x2fc)](_0x27052d)),_0x1bf7bb=_0x1bf7bb[_0x2d5a9d(0x12f)]((_0x2920c0,_0x2c01de,_0x1ab8c8)=>_0x1ab8c8['indexOf'](_0x2920c0)===_0x2c01de),_0x1bf7bb[_0x2d5a9d(0x14b)](_0x23f0f1=>$dataArmors[_0x23f0f1])[_0x2d5a9d(0x312)](null)['remove'](undefined);},Game_Actor[_0x31b406(0x161)][_0x31b406(0x197)]=function(_0x5045f7,_0x21c314){const _0x5a7f77=_0x31b406,_0x2a3a10=VisuMZ[_0x5a7f77(0x258)][_0x5a7f77(0x26d)],_0x42d3f8=_0x5045f7[_0x5a7f77(0x209)]||'';if(_0x42d3f8[_0x5a7f77(0xae)](_0x2a3a10[_0x5a7f77(0x1ac)])){const _0x42c729=String(RegExp['$1'])[_0x5a7f77(0x8d)](',')[_0x5a7f77(0x14b)](_0x4fc0f1=>_0x4fc0f1[_0x5a7f77(0x112)]());for(const _0x24aef0 of _0x42c729){const _0x2ec860=/^\d+$/[_0x5a7f77(0x17e)](_0x24aef0);let _0x1ed254=0x0;_0x2ec860?_0x1ed254=Number(_0x24aef0):_0x1ed254=DataManager[_0x5a7f77(0xcd)](_0x24aef0),_0x1ed254>0x0&&this['learnEquippedMedal']($dataArmors[_0x1ed254],_0x21c314);}}},Game_Actor[_0x31b406(0x161)][_0x31b406(0x13b)]=function(_0x1c676a){const _0x465432=_0x31b406,_0x31c4a2=VisuMZ[_0x465432(0x258)][_0x465432(0x26d)],_0x3566e9=_0x1c676a[_0x465432(0x209)]||'';if(_0x3566e9['match'](_0x31c4a2[_0x465432(0x31a)])){const _0xd20daf=String(RegExp['$1'])[_0x465432(0x8d)](',')['map'](_0x53284d=>_0x53284d[_0x465432(0x112)]());for(const _0x2f1349 of _0xd20daf){const _0x293d77=/^\d+$/[_0x465432(0x17e)](_0x2f1349);let _0x507ec5=0x0;_0x293d77?_0x507ec5=Number(_0x2f1349):_0x507ec5=DataManager['getArmorIdWithName'](_0x2f1349),_0x507ec5>0x0&&this[_0x465432(0x1d5)]($dataArmors[_0x507ec5]);}}},VisuMZ['EquipMedalSys'][_0x31b406(0x1d3)]=Game_Actor[_0x31b406(0x161)][_0x31b406(0xe0)],Game_Actor['prototype'][_0x31b406(0xe0)]=function(_0x7bcef0){const _0x489589=_0x31b406;let _0x7bd3c=VisuMZ[_0x489589(0x258)][_0x489589(0x1d3)]['call'](this,_0x7bcef0);for(const _0x1ecd09 of this[_0x489589(0x23a)]()){_0x1ecd09&&(_0x7bd3c+=_0x1ecd09[_0x489589(0x28f)][_0x7bcef0]);}return _0x7bd3c;},VisuMZ['EquipMedalSys'][_0x31b406(0xd7)]=Game_Actor[_0x31b406(0x161)][_0x31b406(0x217)],Game_Actor[_0x31b406(0x161)]['traitObjects']=function(){const _0x3bccd4=_0x31b406,_0x5500fa=VisuMZ[_0x3bccd4(0x258)][_0x3bccd4(0xd7)]['call'](this);return _0x5500fa[_0x3bccd4(0x2f1)](this[_0x3bccd4(0x23a)]());},VisuMZ[_0x31b406(0x258)][_0x31b406(0x10e)]=Game_Actor[_0x31b406(0x161)][_0x31b406(0x31e)],Game_Actor[_0x31b406(0x161)]['releaseUnequippableItems']=function(_0x426b7a){const _0x1f54b0=_0x31b406;this[_0x1f54b0(0xcb)]=!![],VisuMZ[_0x1f54b0(0x258)]['Game_Actor_releaseUnequippableItems']['call'](this,_0x426b7a),this[_0x1f54b0(0xcb)]=undefined;},Game_Actor['prototype'][_0x31b406(0x1de)]=function(){const _0x2629f5=_0x31b406;return this[_0x2629f5(0x23a)]()[_0x2629f5(0x17c)]((_0x241654,_0x2f1c66)=>_0x241654+DataManager['getEquipMedalCost'](_0x2f1c66),0x0);},Game_Actor[_0x31b406(0x161)][_0x31b406(0x171)]=function(){const _0x160087=_0x31b406,_0x54ee6c=Game_Actor['EQUIP_MEDAL_SYS'],_0x4765aa=_0x54ee6c[_0x160087(0x18c)];let _0x11b071=_0x54ee6c[_0x160087(0x1ba)];try{window[_0x160087(0x2a7)]=this,_0x11b071=eval(_0x4765aa),window['user']=undefined;}catch(_0x4d1c94){_0x11b071=_0x54ee6c[_0x160087(0x1ba)];}return _0x11b071=_0x11b071[_0x160087(0x333)](_0x54ee6c[_0x160087(0x1ba)],_0x54ee6c['maxCapacity']),_0x11b071;},Game_Actor[_0x31b406(0x161)]['hasEquipMedalCapacityFor']=function(_0x5206f5){const _0x4ac348=_0x31b406;if(this[_0x4ac348(0x1ad)]===undefined)this['initEquipMedalSystem']();if(this[_0x4ac348(0x1ad)][_0x4ac348(0x2fc)](_0x5206f5['id']))return![];const _0x42c095=DataManager[_0x4ac348(0x126)](_0x5206f5),_0x4eaa80=this[_0x4ac348(0x1de)](),_0x593e62=this[_0x4ac348(0x171)]();return _0x4eaa80+_0x42c095<=_0x593e62;},Game_Actor[_0x31b406(0x161)][_0x31b406(0x27d)]=function(){const _0xd7e4ef=_0x31b406;if(!Game_Actor[_0xd7e4ef(0x30a)][_0xd7e4ef(0x227)])return;let _0x42a6e2=![];for(;;){if(this[_0xd7e4ef(0x23a)]()[_0xd7e4ef(0x2d4)]<=0x0)break;if(this[_0xd7e4ef(0x1de)]()<=this[_0xd7e4ef(0x171)]())break;const _0x4275b4=this['equippedMedals']()[_0xd7e4ef(0x314)]();this[_0xd7e4ef(0x122)](_0x4275b4),_0x42a6e2=!![];}_0x42a6e2&&this[_0xd7e4ef(0xea)]();},VisuMZ['EquipMedalSys']['Game_Actor_changeExp']=Game_Actor[_0x31b406(0x161)][_0x31b406(0x25b)],Game_Actor['prototype'][_0x31b406(0x25b)]=function(_0x39b795,_0x357dd4){const _0x241dfc=_0x31b406,_0x3edc6b=this[_0x241dfc(0x244)];VisuMZ['EquipMedalSys']['Game_Actor_changeExp'][_0x241dfc(0x210)](this,_0x39b795,_0x357dd4);if(this[_0x241dfc(0x244)]===_0x3edc6b)return;this['releaseOverEquipMedalCapacity'](),this[_0x241dfc(0x182)]();},VisuMZ[_0x31b406(0x258)][_0x31b406(0x273)]=Game_Battler[_0x31b406(0x161)][_0x31b406(0x186)],Game_Battler[_0x31b406(0x161)][_0x31b406(0x186)]=function(){const _0x5f0b5f=_0x31b406;VisuMZ[_0x5f0b5f(0x258)][_0x5f0b5f(0x273)]['call'](this);if(this[_0x5f0b5f(0x2c1)]())this[_0x5f0b5f(0x182)]();},Game_Actor[_0x31b406(0x161)][_0x31b406(0x182)]=function(){const _0x4b5d0c=_0x31b406,_0x4b5110=this['availableUnlearnedEquippableMedals']();for(const _0x402b19 of _0x4b5110){if(!_0x402b19)continue;if(this[_0x4b5d0c(0x2a6)](_0x402b19))continue;VisuMZ[_0x4b5d0c(0x258)][_0x4b5d0c(0x11b)](this,_0x402b19)&&this[_0x4b5d0c(0x2b6)](_0x402b19);}},VisuMZ[_0x31b406(0x258)][_0x31b406(0x11b)]=function(_0x25ce70,_0x48a810){const _0x325665=_0x31b406,_0x3c0711=VisuMZ[_0x325665(0x258)]['RegExp'],_0x308578=_0x48a810[_0x325665(0x209)]||'';let _0x1a1ddc=![];if(!_0x308578['match'](_0x3c0711[_0x325665(0x10a)]))return _0x1a1ddc;if(_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x14f)])){const _0x2a4807=Number(RegExp['$1']);if(_0x2a4807>_0x25ce70[_0x325665(0x24f)])return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x183)])){const _0xdbcb72=Number(RegExp['$1']);if(_0xdbcb72>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0xc8),_0x325665(0x1ed)))return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711['LearnVictory'])){const _0x29b7d6=Number(RegExp['$1']);if(_0x29b7d6>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0xc8),_0x325665(0xa2)))return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x1cb)])){const _0x1aede6=Number(RegExp['$1']);if(_0x1aede6>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0xc8),_0x325665(0x21b)))return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x1d4)])){const _0x350e19=Number(RegExp['$1']);if(_0x350e19>_0x25ce70['getEquipMedalLearnProgress'](_0x48a810,_0x325665(0xc8),'defeat'))return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x300)])){const _0x124d45=Number(RegExp['$1']);if(_0x124d45>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x134),_0x325665(0xc1)))return![];_0x1a1ddc=!![];}if(_0x308578['match'](_0x3c0711[_0x325665(0x293)])){const _0x39bd7e=Number(RegExp['$1']);if(_0x39bd7e>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x134),_0x325665(0x20c)))return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0xf8)])){const _0xd63128=Number(RegExp['$1']);if(_0xd63128>_0x25ce70['getEquipMedalLearnProgress'](_0x48a810,'actionTimes','skill'))return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711['LearnPhysSkill'])){const _0x1f92eb=Number(RegExp['$1']);if(_0x1f92eb>_0x25ce70[_0x325665(0x1cd)](_0x48a810,'actionTimes',_0x325665(0x31b)))return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x2ca)])){const _0x4a380d=Number(RegExp['$1']);if(_0x4a380d>_0x25ce70['getEquipMedalLearnProgress'](_0x48a810,_0x325665(0x134),_0x325665(0x159)))return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0xab)])){const _0x2a148f=Number(RegExp['$1']);if(_0x2a148f>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x134),'certainHitSkill'))return![];_0x1a1ddc=!![];}if(_0x308578['match'](_0x3c0711['LearnItemUsage'])){const _0x11afeb=Number(RegExp['$1']);if(_0x11afeb>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x134),'item'))return![];_0x1a1ddc=!![];}if(_0x308578['match'](_0x3c0711['LearnDealCritHitTimes'])){const _0x1bc994=Number(RegExp['$1']);if(_0x1bc994>_0x25ce70[_0x325665(0x1cd)](_0x48a810,'actionTimes',_0x325665(0x1c0)))return![];_0x1a1ddc=!![];}if(_0x308578['match'](_0x3c0711['LearnTakeCritHitTimes'])){const _0x179ccc=Number(RegExp['$1']);if(_0x179ccc>_0x25ce70['getEquipMedalLearnProgress'](_0x48a810,_0x325665(0x134),_0x325665(0x24a)))return![];_0x1a1ddc=!![];}if(_0x308578['match'](_0x3c0711[_0x325665(0x29e)])){const _0x128123=Number(RegExp['$1']);if(_0x128123>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x134),_0x325665(0x14a)))return![];_0x1a1ddc=!![];}if(_0x308578['match'](_0x3c0711[_0x325665(0x313)])){const _0xba2007=Number(RegExp['$1']);if(_0xba2007>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x134),_0x325665(0x15c)))return![];_0x1a1ddc=!![];}{const _0xf7eb20=_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x1a2)]);if(_0xf7eb20)for(const _0x51dc1f of _0xf7eb20){_0x51dc1f['match'](_0x3c0711[_0x325665(0x1a2)]);let _0x6368e6=String(RegExp['$1']);const _0x111d05=Number(RegExp['$2']),_0x14d2e2=/^\d+$/['test'](_0x6368e6);_0x6368e6=_0x14d2e2?Number(_0x6368e6):DataManager[_0x325665(0x2be)](_0x6368e6);if(_0x111d05>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x1bc),_0x6368e6))return![];_0x1a1ddc=!![];}}{const _0x453871=_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0xef)]);if(_0x453871)for(const _0x4b2e10 of _0x453871){_0x4b2e10['match'](_0x3c0711['LearnElementDeal']);let _0x1caaa7=String(RegExp['$1']);const _0x2f2106=Number(RegExp['$2']),_0x5b03fd=/^\d+$/[_0x325665(0x17e)](_0x1caaa7);_0x1caaa7=_0x5b03fd?Number(_0x1caaa7):DataManager[_0x325665(0x2ae)](_0x1caaa7);if(_0x2f2106>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x130),_0x1caaa7))return![];_0x1a1ddc=!![];}}{const _0x517bca=_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x259)]);if(_0x517bca)for(const _0x5521c3 of _0x517bca){_0x5521c3[_0x325665(0xae)](_0x3c0711[_0x325665(0x259)]);let _0x39ac8c=String(RegExp['$1']);const _0x347b55=Number(RegExp['$2']),_0x406a09=/^\d+$/['test'](_0x39ac8c);_0x39ac8c=_0x406a09?Number(_0x39ac8c):DataManager[_0x325665(0x2ae)](_0x39ac8c);if(_0x347b55>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x2f2),_0x39ac8c))return![];_0x1a1ddc=!![];}}{const _0x2c7cd9=_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x2ab)]);if(_0x2c7cd9)for(const _0x53ebda of _0x2c7cd9){_0x53ebda[_0x325665(0xae)](_0x3c0711[_0x325665(0x2ab)]);let _0x58f05f=String(RegExp['$1']);const _0xa2eca6=Number(RegExp['$2']),_0x1b11e5=/^\d+$/[_0x325665(0x17e)](_0x58f05f);_0x58f05f=_0x1b11e5?Number(_0x58f05f):DataManager[_0x325665(0x9b)](_0x58f05f);if(_0xa2eca6>_0x25ce70[_0x325665(0x1cd)](_0x48a810,'stateDeal',_0x58f05f))return![];_0x1a1ddc=!![];}}{const _0x380b7a=_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x279)]);if(_0x380b7a)for(const _0x46b4c9 of _0x380b7a){_0x46b4c9[_0x325665(0xae)](_0x3c0711[_0x325665(0x279)]);let _0x50c2b8=String(RegExp['$1']);const _0x18098d=Number(RegExp['$2']),_0x378f0f=/^\d+$/[_0x325665(0x17e)](_0x50c2b8);_0x50c2b8=_0x378f0f?Number(_0x50c2b8):DataManager['getStateIdWithName'](_0x50c2b8);if(_0x18098d>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x278),_0x50c2b8))return![];_0x1a1ddc=!![];}}if(Imported[_0x325665(0x242)]){const _0x18db56=_0x308578[_0x325665(0xae)](_0x3c0711['LearnDefeatTrait']);if(_0x18db56)for(const _0x14e2c4 of _0x18db56){_0x14e2c4[_0x325665(0xae)](_0x3c0711[_0x325665(0x320)]);const _0xba9ed0=String(RegExp['$1'])[_0x325665(0x166)]()[_0x325665(0x112)](),_0x51d376=Number(RegExp['$2']);if(_0x51d376>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x254),_0xba9ed0))return![];_0x1a1ddc=!![];}}if(_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x22c)])){const _0x1b337b=Number(RegExp['$1']);if(_0x1b337b>_0x25ce70['getEquipMedalLearnProgress'](_0x48a810,'hp',_0x325665(0x316)))return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x26a)])){const _0x408273=Number(RegExp['$1']);if(_0x408273>_0x25ce70[_0x325665(0x1cd)](_0x48a810,'hp',_0x325665(0xfa)))return![];_0x1a1ddc=!![];}if(_0x308578['match'](_0x3c0711[_0x325665(0x1f7)])){const _0x344e2e=Number(RegExp['$1']);if(_0x344e2e>_0x25ce70[_0x325665(0x1cd)](_0x48a810,'hp','healDeal'))return![];_0x1a1ddc=!![];}if(_0x308578['match'](_0x3c0711[_0x325665(0x10f)])){const _0x5e17a1=Number(RegExp['$1']);if(_0x5e17a1>_0x25ce70[_0x325665(0x1cd)](_0x48a810,'hp',_0x325665(0x115)))return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x146)])){const _0x4b0a47=Number(RegExp['$1']);if(_0x4b0a47>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x19d),_0x325665(0x202)))return![];_0x1a1ddc=!![];}if(_0x308578['match'](_0x3c0711['LearnCountDeaths'])){const _0x251f5c=Number(RegExp['$1']);if(_0x251f5c>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x19d),_0x325665(0x2fa)))return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711['LearnCountAssists'])){const _0x4c67e0=Number(RegExp['$1']);if(_0x4c67e0>_0x25ce70[_0x325665(0x1cd)](_0x48a810,_0x325665(0x19d),'assists'))return![];_0x1a1ddc=!![];}if(_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x1f5)])){const _0x1eaaed=Number(RegExp['$1']);if(_0x1eaaed>$gameParty[_0x325665(0x153)]())return![];_0x1a1ddc=!![];}{const _0x2d5f99=_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0xc4)]);if(_0x2d5f99)for(const _0x583f23 of _0x2d5f99){_0x583f23['match'](_0x3c0711['LearnHaveItem']);const _0x72cb6a=String(RegExp['$1']),_0x1cffa0=Number(RegExp['$2']),_0x9555b5=/^\d+$/[_0x325665(0x17e)](_0x72cb6a),_0x49ef8f=_0x9555b5?Number(_0x72cb6a):DataManager['getItemIdWithName'](_0x72cb6a),_0x398c32=$dataItems[_0x49ef8f];if(!_0x398c32)continue;if(_0x1cffa0>$gameParty[_0x325665(0xdc)](_0x398c32))return![];_0x1a1ddc=!![];}}{const _0x41b8fa=_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0xf5)]);if(_0x41b8fa)for(const _0x29f538 of _0x41b8fa){_0x29f538[_0x325665(0xae)](_0x3c0711['LearnHaveWeapon']);const _0x1b95d9=String(RegExp['$1']),_0x368248=Number(RegExp['$2']),_0x576bcd=/^\d+$/[_0x325665(0x17e)](_0x1b95d9),_0x3f1388=_0x576bcd?Number(_0x1b95d9):DataManager[_0x325665(0x149)](_0x1b95d9),_0x2c7a47=$dataWeapons[_0x3f1388];if(!_0x2c7a47)continue;if(_0x368248>$gameParty[_0x325665(0xdc)](_0x2c7a47))return![];_0x1a1ddc=!![];}}{const _0x581c36=_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x22d)]);if(_0x581c36)for(const _0x2c6df9 of _0x581c36){_0x2c6df9[_0x325665(0xae)](_0x3c0711[_0x325665(0x22d)]);const _0x16c858=String(RegExp['$1']),_0xea78aa=Number(RegExp['$2']),_0x4bcbc2=/^\d+$/[_0x325665(0x17e)](_0x16c858),_0x22186c=_0x4bcbc2?Number(_0x16c858):DataManager[_0x325665(0xcd)](_0x16c858),_0x4dd8de=$dataArmors[_0x22186c];if(!_0x4dd8de)continue;if(_0xea78aa>$gameParty[_0x325665(0xdc)](_0x4dd8de))return![];_0x1a1ddc=!![];}}{const _0x8746dc=_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x220)]);if(_0x8746dc)for(const _0x565599 of _0x8746dc){_0x565599['match'](_0x3c0711[_0x325665(0x220)]);let _0x3e22c3=String(RegExp['$1'])[_0x325665(0x166)]()['trim']();const _0x4a161c=Number(RegExp['$2']);if(_0x3e22c3==='MHP')_0x3e22c3=_0x325665(0x142);if(_0x3e22c3===_0x325665(0x28c))_0x3e22c3=_0x325665(0x142);if(_0x3e22c3===_0x325665(0x101))_0x3e22c3='MAXMP';if(_0x3e22c3==='MAX\x20MP')_0x3e22c3='MAXMP';const _0x3f6a4f=[_0x325665(0x142),_0x325665(0x30b),_0x325665(0x1c5),_0x325665(0xc6),_0x325665(0x232),_0x325665(0xe6),'AGI',_0x325665(0xb0)],_0x34f505=_0x3f6a4f[_0x325665(0x123)](_0x3e22c3);if(_0x4a161c>_0x25ce70[_0x325665(0xa4)](_0x34f505))return![];_0x1a1ddc=!![];}}{const _0x51007d=_0x308578[_0x325665(0xae)](_0x3c0711[_0x325665(0x195)]);if(_0x51007d)for(const _0x2f0fa9 of _0x51007d){_0x2f0fa9['match'](_0x3c0711['LearnHaveXParam']);let _0x52c28a=String(RegExp['$1'])[_0x325665(0x166)]()[_0x325665(0x112)]();const _0x11418d=Number(RegExp['$2'])*0.01,_0xf70aa4=[_0x325665(0x2b9),_0x325665(0x332),_0x325665(0x1b3),_0x325665(0x1a9),'MEV',_0x325665(0xb7),_0x325665(0x12a),'HRG',_0x325665(0x2f9),_0x325665(0x2cf)],_0x182271=_0xf70aa4[_0x325665(0x123)](_0x52c28a);if(_0x11418d>_0x25ce70[_0x325665(0x19c)](_0x182271))return![];_0x1a1ddc=!![];}}{const _0x372805=_0x308578['match'](_0x3c0711['LearnHaveSParam']);if(_0x372805)for(const _0x4d90f2 of _0x372805){_0x4d90f2[_0x325665(0xae)](_0x3c0711[_0x325665(0xd2)]);let _0x220c3f=String(RegExp['$1'])[_0x325665(0x166)]()[_0x325665(0x112)]();const _0x24ca00=Number(RegExp['$2'])*0.01,_0x1e0338=[_0x325665(0x1e8),'GRD','REC',_0x325665(0x324),_0x325665(0x292),_0x325665(0x9e),_0x325665(0xde),'MDR',_0x325665(0x111),'EXR'],_0x4c0a4f=_0x1e0338['indexOf'](_0x220c3f);if(_0x24ca00>_0x25ce70[_0x325665(0x96)](_0x4c0a4f))return![];_0x1a1ddc=!![];}}return _0x1a1ddc;},Game_Actor[_0x31b406(0x161)][_0x31b406(0x1cd)]=function(_0x424e72,_0x4e7e27,_0x4950a9){const _0x17a620=_0x31b406;return _0x424e72=_0x424e72['id']||_0x424e72,this[_0x17a620(0x2bc)]=this[_0x17a620(0x2bc)]||{},this[_0x17a620(0x2bc)][_0x424e72]=this[_0x17a620(0x2bc)][_0x424e72]||{},this[_0x17a620(0x2bc)][_0x424e72][_0x4e7e27]=this[_0x17a620(0x2bc)][_0x424e72][_0x4e7e27]||{},this[_0x17a620(0x2bc)][_0x424e72][_0x4e7e27][_0x4950a9]=this[_0x17a620(0x2bc)][_0x424e72][_0x4e7e27][_0x4950a9]||0x0,this[_0x17a620(0x2bc)][_0x424e72][_0x4e7e27][_0x4950a9];},Game_Actor['prototype'][_0x31b406(0xd5)]=function(_0x2f1831,_0x1fc384,_0x15697a,_0xe78568){const _0x29274c=_0x31b406;_0x2f1831=_0x2f1831['id']||_0x2f1831,this[_0x29274c(0x2bc)]=this[_0x29274c(0x2bc)]||{},this[_0x29274c(0x2bc)][_0x2f1831]=this['_equipMedalLearnProgress'][_0x2f1831]||{},this[_0x29274c(0x2bc)][_0x2f1831][_0x1fc384]=this[_0x29274c(0x2bc)][_0x2f1831][_0x1fc384]||{},this['_equipMedalLearnProgress'][_0x2f1831][_0x1fc384][_0x15697a]=this[_0x29274c(0x2bc)][_0x2f1831][_0x1fc384][_0x15697a]||0x0,this[_0x29274c(0x2bc)][_0x2f1831][_0x1fc384][_0x15697a]+=_0xe78568;},VisuMZ[_0x31b406(0x258)]['Game_Battler_processBattleCoreJS']=Game_Battler[_0x31b406(0x161)]['processBattleCoreJS'],Game_Battler['prototype']['processBattleCoreJS']=function(_0x521038){const _0x441693=_0x31b406;VisuMZ[_0x441693(0x258)][_0x441693(0x1a1)]['call'](this,_0x521038);if(!this[_0x441693(0x2c1)]())return;if(_0x521038===_0x441693(0x289))this[_0x441693(0xee)]();else{if(_0x521038===_0x441693(0x2af))this[_0x441693(0x302)]();else _0x521038==='BattleDefeatJS'&&this[_0x441693(0x27a)]();}},Game_Actor[_0x31b406(0x161)]['updateEquipMedalBattleVictory']=function(){const _0x1c9cbe=_0x31b406,_0x5418e3=VisuMZ['EquipMedalSys'][_0x1c9cbe(0x26d)],_0x550f0a=this[_0x1c9cbe(0x295)]();for(const _0x5f3cc3 of _0x550f0a){if(!_0x5f3cc3)continue;const _0x2c3570=_0x5f3cc3[_0x1c9cbe(0x209)]||'';_0x2c3570['match'](_0x5418e3[_0x1c9cbe(0x183)])&&this[_0x1c9cbe(0xd5)](_0x5f3cc3,_0x1c9cbe(0xc8),_0x1c9cbe(0x1ed),0x1),_0x2c3570[_0x1c9cbe(0xae)](_0x5418e3['LearnVictory'])&&this[_0x1c9cbe(0xd5)](_0x5f3cc3,_0x1c9cbe(0xc8),_0x1c9cbe(0xa2),0x1);}},Game_Actor[_0x31b406(0x161)][_0x31b406(0x302)]=function(){const _0x170d3a=_0x31b406,_0x278ce2=VisuMZ[_0x170d3a(0x258)]['RegExp'],_0x442d52=this[_0x170d3a(0x295)]();for(const _0x4811fb of _0x442d52){if(!_0x4811fb)continue;const _0x1c9529=_0x4811fb[_0x170d3a(0x209)]||'';_0x1c9529[_0x170d3a(0xae)](_0x278ce2[_0x170d3a(0x183)])&&this[_0x170d3a(0xd5)](_0x4811fb,_0x170d3a(0xc8),_0x170d3a(0x1ed),0x1),_0x1c9529[_0x170d3a(0xae)](_0x278ce2[_0x170d3a(0xf1)])&&this[_0x170d3a(0xd5)](_0x4811fb,_0x170d3a(0xc8),'escape',0x1);}},Game_Actor[_0x31b406(0x161)][_0x31b406(0x27a)]=function(){const _0x3839b8=_0x31b406,_0x312506=VisuMZ[_0x3839b8(0x258)][_0x3839b8(0x26d)],_0x38f4d7=this['availableUnlearnedEquippableMedals']();for(const _0x59874c of _0x38f4d7){if(!_0x59874c)continue;const _0x4f3ef7=_0x59874c[_0x3839b8(0x209)]||'';_0x4f3ef7['match'](_0x312506[_0x3839b8(0x183)])&&this['updateEquipMedalLearnProgress'](_0x59874c,_0x3839b8(0xc8),_0x3839b8(0x1ed),0x1),_0x4f3ef7['match'](_0x312506[_0x3839b8(0xf1)])&&this[_0x3839b8(0xd5)](_0x59874c,_0x3839b8(0xc8),_0x3839b8(0x2a9),0x1);}},VisuMZ[_0x31b406(0x258)][_0x31b406(0x1c2)]=Game_Action[_0x31b406(0x161)]['applyGlobal'],Game_Action['prototype'][_0x31b406(0xfe)]=function(){const _0x2d43e5=_0x31b406;VisuMZ[_0x2d43e5(0x258)][_0x2d43e5(0x1c2)][_0x2d43e5(0x210)](this),this[_0x2d43e5(0x125)]()&&this[_0x2d43e5(0x125)]()[_0x2d43e5(0x2c1)]()&&this[_0x2d43e5(0x125)]()['updateEquipMedalActionUsage'](this);},Game_Actor[_0x31b406(0x161)]['updateEquipMedalActionUsage']=function(_0x169c4b){const _0x1fa5b0=_0x31b406,_0x169da8=VisuMZ['EquipMedalSys'][_0x1fa5b0(0x26d)],_0x1909bc=this[_0x1fa5b0(0x295)]();for(const _0xffab0e of _0x1909bc){if(!_0xffab0e)continue;const _0x45a0c5=_0xffab0e[_0x1fa5b0(0x209)]||'';_0x45a0c5[_0x1fa5b0(0xae)](_0x169da8['LearnAttackTimes'])&&(_0x169c4b[_0x1fa5b0(0xff)]()&&this[_0x1fa5b0(0xd5)](_0xffab0e,_0x1fa5b0(0x134),_0x1fa5b0(0xc1),0x1));_0x45a0c5[_0x1fa5b0(0xae)](_0x169da8[_0x1fa5b0(0x293)])&&(_0x169c4b[_0x1fa5b0(0x213)]()&&this[_0x1fa5b0(0xd5)](_0xffab0e,_0x1fa5b0(0x134),_0x1fa5b0(0x20c),0x1));_0x45a0c5[_0x1fa5b0(0xae)](_0x169da8[_0x1fa5b0(0xf8)])&&(_0x169c4b[_0x1fa5b0(0xbc)]()&&!_0x169c4b['isAttack']()&&!_0x169c4b[_0x1fa5b0(0x213)]()&&this[_0x1fa5b0(0xd5)](_0xffab0e,_0x1fa5b0(0x134),_0x1fa5b0(0x1df),0x1));_0x45a0c5[_0x1fa5b0(0xae)](_0x169da8[_0x1fa5b0(0x2e7)])&&(_0x169c4b[_0x1fa5b0(0xbc)]()&&_0x169c4b[_0x1fa5b0(0x185)]()&&!_0x169c4b[_0x1fa5b0(0xff)]()&&!_0x169c4b[_0x1fa5b0(0x213)]()&&this[_0x1fa5b0(0xd5)](_0xffab0e,_0x1fa5b0(0x134),_0x1fa5b0(0x31b),0x1));_0x45a0c5['match'](_0x169da8[_0x1fa5b0(0x2ca)])&&(_0x169c4b['isSkill']()&&_0x169c4b['isMagical']()&&!_0x169c4b[_0x1fa5b0(0xff)]()&&!_0x169c4b['isGuard']()&&this[_0x1fa5b0(0xd5)](_0xffab0e,_0x1fa5b0(0x134),'magicalSkill',0x1));_0x45a0c5['match'](_0x169da8[_0x1fa5b0(0xab)])&&(_0x169c4b[_0x1fa5b0(0xbc)]()&&_0x169c4b[_0x1fa5b0(0x2a5)]()&&!_0x169c4b[_0x1fa5b0(0xff)]()&&!_0x169c4b['isGuard']()&&this[_0x1fa5b0(0xd5)](_0xffab0e,_0x1fa5b0(0x134),_0x1fa5b0(0x2f8),0x1));_0x45a0c5[_0x1fa5b0(0xae)](_0x169da8[_0x1fa5b0(0x156)])&&(_0x169c4b['isItem']()&&this[_0x1fa5b0(0xd5)](_0xffab0e,_0x1fa5b0(0x134),_0x1fa5b0(0x276),0x1));{const _0x45756c=_0x45a0c5[_0x1fa5b0(0xae)](_0x169da8[_0x1fa5b0(0x1a2)]);if(_0x45756c&&_0x169c4b[_0x1fa5b0(0xbc)]()&&!_0x169c4b[_0x1fa5b0(0xff)]()&&!_0x169c4b['isGuard']())for(const _0x5e658e of _0x45756c){_0x5e658e[_0x1fa5b0(0xae)](_0x169da8[_0x1fa5b0(0x1a2)]);let _0x48bcd0=String(RegExp['$1']);const _0xd5ae08=/^\d+$/[_0x1fa5b0(0x17e)](_0x48bcd0);_0x48bcd0=_0xd5ae08?Number(_0x48bcd0):DataManager[_0x1fa5b0(0x2be)](_0x48bcd0);if(Imported[_0x1fa5b0(0x28a)]){const _0x5c9997=DataManager['getSkillTypes'](_0x169c4b[_0x1fa5b0(0x276)]());if(!_0x5c9997[_0x1fa5b0(0x2fc)](_0x48bcd0))continue;}else{if(_0x169c4b[_0x1fa5b0(0x276)]()[_0x1fa5b0(0x222)]!==_0x48bcd0)continue;}this['updateEquipMedalLearnProgress'](_0xffab0e,_0x1fa5b0(0x1bc),_0x48bcd0,0x1);}}}},VisuMZ['EquipMedalSys'][_0x31b406(0x1a4)]=Game_Action['prototype'][_0x31b406(0x236)],Game_Action['prototype']['apply']=function(_0x43ffd6){const _0x500bbe=_0x31b406;VisuMZ[_0x500bbe(0x258)][_0x500bbe(0x1a4)][_0x500bbe(0x210)](this,_0x43ffd6);const _0x27389f=_0x43ffd6['result']();this[_0x500bbe(0x125)]()[_0x500bbe(0x2c1)]()&&this[_0x500bbe(0x125)]()[_0x500bbe(0x24e)](_0x27389f,!![]),_0x43ffd6['isActor']()&&_0x43ffd6['updateEquipMedalActionResult'](_0x27389f,![]);},Game_Actor[_0x31b406(0x161)]['updateEquipMedalActionResult']=function(_0x30e2d8,_0x5691fe){const _0x283d6f=_0x31b406,_0x38f987=VisuMZ[_0x283d6f(0x258)][_0x283d6f(0x26d)],_0x43ff05=this['availableUnlearnedEquippableMedals'](),_0x5c22c5=_0x5691fe?_0x283d6f(0x2d2):'LearnTakeCritHitTimes',_0xd6559d=_0x5691fe?_0x283d6f(0x1c0):_0x283d6f(0x24a),_0x240bb2=_0x5691fe?_0x283d6f(0x29e):_0x283d6f(0x313),_0xd8cd8b=_0x5691fe?_0x283d6f(0x14a):_0x283d6f(0x15c);for(const _0xfb8dcb of _0x43ff05){if(!_0xfb8dcb)continue;const _0x1b3a59=_0xfb8dcb[_0x283d6f(0x209)]||'';_0x1b3a59[_0x283d6f(0xae)](_0x38f987[_0x5c22c5])&&(_0x30e2d8[_0x283d6f(0x190)]&&this[_0x283d6f(0xd5)](_0xfb8dcb,_0x283d6f(0x134),_0xd6559d,0x1)),_0x1b3a59[_0x283d6f(0xae)](_0x38f987[_0x240bb2])&&((_0x30e2d8[_0x283d6f(0x329)]||_0x30e2d8['evaded'])&&this[_0x283d6f(0xd5)](_0xfb8dcb,_0x283d6f(0x134),_0xd8cd8b,0x1));}},VisuMZ[_0x31b406(0x258)][_0x31b406(0xc5)]=Game_Action[_0x31b406(0x161)]['executeDamage'],Game_Action[_0x31b406(0x161)][_0x31b406(0x287)]=function(_0x13afdd,_0x2cbf33){const _0xa69a3d=_0x31b406;VisuMZ[_0xa69a3d(0x258)][_0xa69a3d(0xc5)][_0xa69a3d(0x210)](this,_0x13afdd,_0x2cbf33);if(_0x2cbf33<=0x0)return;this[_0xa69a3d(0x125)]()['isActor']()&&this[_0xa69a3d(0x125)]()[_0xa69a3d(0x288)](this,!![]),_0x13afdd[_0xa69a3d(0x2c1)]()&&_0x13afdd['updateEquipMedalActionElement'](this,![]);},Game_Actor['prototype'][_0x31b406(0x288)]=function(_0x1d6ba4,_0x1bca64){const _0x3dc265=_0x31b406,_0x13126f=VisuMZ[_0x3dc265(0x258)][_0x3dc265(0x12d)](_0x1d6ba4);if(_0x13126f[_0x3dc265(0x2d4)]<=0x0)return;const _0x1000b5=_0x1bca64?_0x3dc265(0x130):'elementTake',_0x4d7b39=VisuMZ['EquipMedalSys'][_0x3dc265(0x26d)],_0x3876fe=_0x1bca64?_0x3dc265(0xef):'LearnElementTake',_0x72cc83=this[_0x3dc265(0x295)]();for(const _0x59ca8c of _0x72cc83){if(!_0x59ca8c)continue;const _0x8dad85=_0x59ca8c[_0x3dc265(0x209)]||'',_0x3512d7=_0x8dad85[_0x3dc265(0xae)](_0x4d7b39[_0x3876fe]);if(_0x3512d7)for(const _0x1017c3 of _0x3512d7){_0x1017c3[_0x3dc265(0xae)](_0x4d7b39[_0x3876fe]);let _0xc52e07=String(RegExp['$1']);const _0x103652=/^\d+$/[_0x3dc265(0x17e)](_0xc52e07);_0xc52e07=_0x103652?Number(_0xc52e07):DataManager['getElementIdWithName'](_0xc52e07),_0x13126f[_0x3dc265(0x2fc)](_0xc52e07)&&this[_0x3dc265(0xd5)](_0x59ca8c,_0x1000b5,_0xc52e07,0x1);}}},VisuMZ[_0x31b406(0x258)]['GetElements']=function(_0x35191c){const _0x11ff1b=_0x31b406;let _0x2e3ab0=[];if(Imported['VisuMZ_1_ElementStatusCore'])_0x2e3ab0=_0x35191c[_0x11ff1b(0xd8)]();else{const _0x6683a=_0x35191c[_0x11ff1b(0x276)]()[_0x11ff1b(0x2db)]['elementId'];_0x6683a<0x0?_0x2e3ab0=_0x35191c['subject']()[_0x11ff1b(0x2d0)]():_0x2e3ab0=[_0x6683a];}return _0x2e3ab0;},VisuMZ[_0x31b406(0x258)][_0x31b406(0x2e2)]=Game_Battler[_0x31b406(0x161)][_0x31b406(0x2aa)],Game_Battler['prototype'][_0x31b406(0x2aa)]=function(_0x98eb4d){const _0x2d44e8=_0x31b406;VisuMZ[_0x2d44e8(0x258)][_0x2d44e8(0x2e2)][_0x2d44e8(0x210)](this,_0x98eb4d);if(this[_0x2d44e8(0x2e3)](_0x98eb4d)){const _0x6c3e15=BattleManager[_0x2d44e8(0x20a)];$gameParty[_0x2d44e8(0x325)]()&&_0x6c3e15&&_0x6c3e15[_0x2d44e8(0x2c1)]()&&_0x6c3e15[_0x2d44e8(0x16c)](_0x98eb4d,!![]);this[_0x2d44e8(0x2c1)]()&&(this[_0x2d44e8(0x16c)](_0x98eb4d,![]),_0x98eb4d===this[_0x2d44e8(0x2cb)]()&&this[_0x2d44e8(0x23e)]('deaths'));if(this['isEnemy']()&&_0x98eb4d===this[_0x2d44e8(0x2cb)]()&&BattleManager['_subject']&&BattleManager[_0x2d44e8(0x20a)]['isActor']()){BattleManager[_0x2d44e8(0x20a)][_0x2d44e8(0xf4)](this),BattleManager[_0x2d44e8(0x20a)]['updateEquipMedalKda'](_0x2d44e8(0x202));for(const _0xc55fe8 of $gameParty[_0x2d44e8(0x306)]()){if(!_0xc55fe8)continue;if(_0xc55fe8===BattleManager[_0x2d44e8(0x20a)])continue;if(!_0xc55fe8[_0x2d44e8(0x2e8)]())continue;_0xc55fe8['updateEquipMedalKda']('assists');}}}},Game_Actor[_0x31b406(0x161)]['updateEquipMedalActionState']=function(_0x2793c6,_0x4edd0a){const _0x110440=_0x31b406;if(!$dataStates[_0x2793c6])return;const _0x2a789b=_0x4edd0a?'stateDeal':_0x110440(0x278),_0x4f0108=VisuMZ[_0x110440(0x258)]['RegExp'],_0x59340d=_0x4edd0a?_0x110440(0x2ab):_0x110440(0x279),_0x2d0323=this[_0x110440(0x295)]();for(const _0x557232 of _0x2d0323){if(!_0x557232)continue;const _0x4dc966=_0x557232[_0x110440(0x209)]||'',_0x49a975=_0x4dc966[_0x110440(0xae)](_0x4f0108[_0x59340d]);if(_0x49a975)for(const _0x2ee903 of _0x49a975){_0x2ee903[_0x110440(0xae)](_0x4f0108[_0x59340d]);let _0x3ce69e=String(RegExp['$1']);const _0x24cc7b=/^\d+$/['test'](_0x3ce69e);_0x3ce69e=_0x24cc7b?Number(_0x3ce69e):DataManager[_0x110440(0x9b)](_0x3ce69e),_0x2793c6===_0x3ce69e&&this[_0x110440(0xd5)](_0x557232,_0x2a789b,_0x2793c6,0x1);}}},Game_Actor['prototype'][_0x31b406(0xf4)]=function(_0x5c40bc){const _0x195517=_0x31b406;if(!_0x5c40bc)return;if(!Imported[_0x195517(0x242)])return;const _0x749b79=VisuMZ[_0x195517(0x258)][_0x195517(0x26d)],_0x56ed18=this[_0x195517(0x295)]();for(const _0x16dc6f of _0x56ed18){if(!_0x16dc6f)continue;const _0x52b415=_0x16dc6f[_0x195517(0x209)]||'',_0x22fa49=_0x52b415[_0x195517(0xae)](_0x749b79[_0x195517(0x320)]);if(_0x22fa49)for(const _0x1d844e of _0x22fa49){_0x1d844e['match'](_0x749b79[_0x195517(0x320)]);const _0x4c804a=String(RegExp['$1'])[_0x195517(0x166)]()['trim']();_0x5c40bc[_0x195517(0x235)](_0x4c804a)&&this[_0x195517(0xd5)](_0x16dc6f,_0x195517(0x254),_0x4c804a,0x1);}}},VisuMZ['EquipMedalSys'][_0x31b406(0x143)]=Game_Battler[_0x31b406(0x161)][_0x31b406(0x315)],Game_Battler['prototype']['gainHp']=function(_0x2ac3ef){const _0x1f0ed4=_0x31b406,_0x1ebaeb=this['hp'];VisuMZ[_0x1f0ed4(0x258)][_0x1f0ed4(0x143)]['call'](this,_0x2ac3ef);const _0x1456ad=this['hp']-_0x1ebaeb;if(_0x1456ad===0x0)return;if(!$gameParty[_0x1f0ed4(0x325)]())return;this[_0x1f0ed4(0x2c1)]()&&this[_0x1f0ed4(0x27b)](_0x2ac3ef,![]),BattleManager[_0x1f0ed4(0x20a)]&&BattleManager[_0x1f0ed4(0x20a)][_0x1f0ed4(0x2c1)]()&&BattleManager[_0x1f0ed4(0x20a)][_0x1f0ed4(0x27b)](_0x2ac3ef,!![]);},Game_Actor['prototype'][_0x31b406(0x27b)]=function(_0x5dbf60,_0x15980a){const _0x4cf354=_0x31b406;if(!Imported['VisuMZ_1_ElementStatusCore'])return;let _0x48b155=_0x4cf354(0x1e2);_0x48b155+=_0x5dbf60>0x0?'Heal':_0x4cf354(0x30e),_0x48b155+=_0x15980a?'Deal':_0x4cf354(0x25e);let _0x3b9c25=_0x5dbf60>0x0?'heal':_0x4cf354(0xc0);_0x3b9c25+=_0x15980a?_0x4cf354(0x1f4):_0x4cf354(0x25e);const _0x443532=VisuMZ[_0x4cf354(0x258)][_0x4cf354(0x26d)],_0x2403e8=this['availableUnlearnedEquippableMedals']();for(const _0x46216e of _0x2403e8){if(!_0x46216e)continue;const _0x35323f=_0x46216e[_0x4cf354(0x209)]||'';_0x35323f[_0x4cf354(0xae)](_0x443532[_0x48b155])&&this[_0x4cf354(0xd5)](_0x46216e,'hp',_0x3b9c25,Math[_0x4cf354(0x225)](_0x5dbf60));}},Game_Actor['prototype'][_0x31b406(0x23e)]=function(_0x163c27){const _0x9d2c7b=_0x31b406,_0xd3fcc4=VisuMZ[_0x9d2c7b(0x258)][_0x9d2c7b(0x26d)],_0x5bf607=this['availableUnlearnedEquippableMedals'](),_0x34b86d={'kills':_0x9d2c7b(0x146),'deaths':_0x9d2c7b(0x14d),'assists':_0x9d2c7b(0x28d)},_0x3cd37b=_0x34b86d[_0x163c27];for(const _0x13ccb8 of _0x5bf607){if(!_0x13ccb8)continue;const _0xe450a0=_0x13ccb8[_0x9d2c7b(0x209)]||'';_0xe450a0[_0x9d2c7b(0xae)](_0xd3fcc4[_0x3cd37b])&&this[_0x9d2c7b(0xd5)](_0x13ccb8,_0x9d2c7b(0x19d),_0x163c27,0x1);}},Game_Actor[_0x31b406(0x161)][_0x31b406(0x93)]=function(_0x4f2661,_0x27586a){const _0x1d725a=_0x31b406;_0x4f2661>0x0&&(_0x4f2661*=this[_0x1d725a(0x238)]()),_0x4f2661=Math[_0x1d725a(0xc3)](_0x4f2661),this[_0x1d725a(0xb4)](_0x4f2661,_0x27586a);},Game_Actor[_0x31b406(0x161)]['equipMedalExpRate']=function(){const _0x5cd7d5=_0x31b406,_0x35c6ed=VisuMZ[_0x5cd7d5(0x258)][_0x5cd7d5(0x26d)],_0x4c2252=_0x35c6ed[_0x5cd7d5(0x9a)];return this[_0x5cd7d5(0x217)]()[_0x5cd7d5(0x17c)]((_0x1a9922,_0x4b29d3)=>{const _0x569738=_0x5cd7d5;return _0x4b29d3&&_0x4b29d3['note'][_0x569738(0xae)](_0x4c2252)?_0x1a9922*(Number(RegExp['$1'])*0.01):_0x1a9922;},0x1);},Game_Actor[_0x31b406(0x161)][_0x31b406(0xb4)]=function(_0xbd57ee,_0x45ae6b){const _0x484fa1=_0x31b406;if(_0xbd57ee<0x0)return;const _0x115c97=this[_0x484fa1(0x23a)]();for(const _0x1590d0 of _0x115c97){if(!_0x1590d0)continue;this[_0x484fa1(0x203)](_0x1590d0,_0xbd57ee,_0x45ae6b);}},Game_Actor[_0x31b406(0x161)]['getEquipMedalExp']=function(_0x588eb4){const _0x5563bd=_0x31b406;if(!DataManager[_0x5563bd(0x1c1)](_0x588eb4))return 0x0;return this['_equipMedalExp']=this[_0x5563bd(0x1c3)]||{},this['_equipMedalExp'][_0x588eb4['id']]=this[_0x5563bd(0x1c3)][_0x588eb4['id']]||0x0,this[_0x5563bd(0x1c3)][_0x588eb4['id']];},Game_Actor[_0x31b406(0x161)][_0x31b406(0x203)]=function(_0x484d88,_0x424dfb,_0x582831){const _0x102108=_0x31b406;if(!_0x484d88)return;if(_0x424dfb<0x0)return;if(!DataManager[_0x102108(0x1c1)](_0x484d88))return;this['_equipMedalExp']=this['_equipMedalExp']||{},this[_0x102108(0x1c3)][_0x484d88['id']]=this[_0x102108(0x1c3)][_0x484d88['id']]||0x0,this[_0x102108(0x1c3)][_0x484d88['id']]+=_0x424dfb;const _0x2850c9=DataManager[_0x102108(0x2bf)](_0x484d88);if(this[_0x102108(0x1c3)][_0x484d88['id']]>=_0x2850c9){const _0x40f1b5=this[_0x102108(0x1c3)][_0x484d88['id']]-_0x2850c9,_0x392cbe=DataManager[_0x102108(0x218)](_0x484d88);this['removeEquipMedal'](_0x484d88),this[_0x102108(0x2b6)](_0x392cbe,_0x582831),this['hasEquipMedalCapacityFor'](_0x392cbe)&&this[_0x102108(0x25c)](_0x392cbe),this[_0x102108(0x203)](_0x392cbe,_0x40f1b5);}},VisuMZ['EquipMedalSys'][_0x31b406(0x2ea)]=Game_Actor[_0x31b406(0x161)][_0x31b406(0xea)],Game_Actor['prototype'][_0x31b406(0xea)]=function(){const _0x534dda=_0x31b406;VisuMZ[_0x534dda(0x258)][_0x534dda(0x2ea)][_0x534dda(0x210)](this);if(this[_0x534dda(0x24c)])return;this[_0x534dda(0xcc)]();},Game_Actor[_0x31b406(0x161)]['unequipHiddenMedals']=function(){const _0x38beb3=_0x31b406;this['_bypassUnequipHiddenMedal']=!![];const _0x109ded=this[_0x38beb3(0x23a)]()[_0x38beb3(0x12f)](_0x2a71d1=>VisuMZ[_0x38beb3(0x258)][_0x38beb3(0xf3)](this,_0x2a71d1));for(const _0x3bebd1 of _0x109ded){this[_0x38beb3(0x122)](_0x3bebd1);}this[_0x38beb3(0x24c)]=![];if(_0x109ded[_0x38beb3(0x2d4)]>0x0){VisuMZ[_0x38beb3(0x258)][_0x38beb3(0x2ea)][_0x38beb3(0x210)](this);const _0x5b5508=SceneManager[_0x38beb3(0x255)];_0x5b5508&&_0x5b5508['_statusWindow']&&_0x5b5508['_statusWindow'][_0x38beb3(0xea)]();}},VisuMZ[_0x31b406(0x258)][_0x31b406(0x128)]=Game_Party[_0x31b406(0x161)][_0x31b406(0xce)],Game_Party[_0x31b406(0x161)]['initialize']=function(){const _0x519105=_0x31b406;VisuMZ['EquipMedalSys'][_0x519105(0x128)][_0x519105(0x210)](this),this[_0x519105(0x2cc)]();},Game_Party[_0x31b406(0x161)]['initEquipMedalSystem']=function(){const _0x175ead=_0x31b406;this[_0x175ead(0x13f)]=[],this[_0x175ead(0xe8)]=[];},Game_Party['prototype'][_0x31b406(0x191)]=function(){const _0x376285=_0x31b406;if(this[_0x376285(0x13f)]===undefined)this[_0x376285(0x2cc)]();return this[_0x376285(0x13f)];},Game_Party[_0x31b406(0x161)][_0x31b406(0x2b6)]=function(_0x38f048,_0x4749e2){const _0x18e823=_0x31b406;if(!DataManager[_0x18e823(0x2ed)](_0x38f048))return;if(this[_0x18e823(0x13f)]===undefined)this['initEquipMedalSystem']();if(this[_0x18e823(0x13f)]['includes'](_0x38f048['id']))return;this[_0x18e823(0x13f)][_0x18e823(0x110)](_0x38f048['id']),this[_0x18e823(0x13f)][_0x18e823(0xe9)]((_0x297f0f,_0x19a153)=>_0x297f0f-_0x19a153),this['branchLearnableEquipMedals'](_0x38f048);if(Game_Actor[_0x18e823(0x30a)]['learnAutoEquip']&&$gameSystem[_0x18e823(0x1b0)]())for(const _0x2bd723 of this[_0x18e823(0x1ea)]()){if(!_0x2bd723)continue;_0x2bd723[_0x18e823(0xea)](),_0x2bd723[_0x18e823(0x304)](_0x38f048)&&_0x2bd723[_0x18e823(0x25c)](_0x38f048);}if(!_0x4749e2&&TextManager[_0x18e823(0x30a)][_0x18e823(0x1e1)]){const _0x35e427=TextManager[_0x18e823(0x30a)][_0x18e823(0x13e)],_0x6b7873=DataManager['getEquipMedalName'](_0x38f048),_0x305268=_0x18e823(0x212)[_0x18e823(0x15a)](DataManager[_0x18e823(0x2c7)](_0x38f048)),_0x10b327=_0x35e427[_0x18e823(0x15a)](this[_0x18e823(0xd4)](),_0x6b7873,_0x305268);$textPopup(_0x10b327);}},Game_Party['prototype']['branchLearnableEquipMedals']=function(_0x23d0a1){const _0xbf0770=_0x31b406,_0x556f09=VisuMZ['EquipMedalSys'][_0xbf0770(0x26d)],_0x25f6ff=_0x23d0a1[_0xbf0770(0x209)]||'';if(_0x25f6ff[_0xbf0770(0xae)](_0x556f09[_0xbf0770(0x31a)])){const _0x42fc83=String(RegExp['$1'])[_0xbf0770(0x8d)](',')[_0xbf0770(0x14b)](_0x1432e1=>_0x1432e1[_0xbf0770(0x112)]());for(const _0x472867 of _0x42fc83){const _0x44c2b5=/^\d+$/[_0xbf0770(0x17e)](_0x472867);let _0x479706=0x0;_0x44c2b5?_0x479706=Number(_0x472867):_0x479706=DataManager[_0xbf0770(0xcd)](_0x472867),_0x479706>0x0&&this[_0xbf0770(0x1d5)]($dataArmors[_0x479706]);}}},Game_Party[_0x31b406(0x161)][_0x31b406(0x2a6)]=function(_0x28296f){const _0x55e114=_0x31b406;if(!DataManager[_0x55e114(0x2ed)](_0x28296f))return;if(this[_0x55e114(0x13f)]===undefined)this[_0x55e114(0x2cc)]();return this[_0x55e114(0x13f)]['includes'](_0x28296f['id']);},Game_Party[_0x31b406(0x161)][_0x31b406(0x94)]=function(_0x3a42d4){const _0x31e29c=_0x31b406;if(!DataManager[_0x31e29c(0x2ed)](_0x3a42d4))return;if(this[_0x31e29c(0x13f)]===undefined)this[_0x31e29c(0x2cc)]();this['_learnedEquippableMedals']['push'](_0x3a42d4['id']),this[_0x31e29c(0x13f)][_0x31e29c(0xe9)]((_0x414dc2,_0x5b7496)=>_0x414dc2-_0x5b7496);for(const _0x1fe7d2 of this[_0x31e29c(0x1ea)]()){if(!_0x1fe7d2)continue;_0x1fe7d2['forgetEquippedMedal'](_0x3a42d4);}},Game_Party[_0x31b406(0x161)][_0x31b406(0xa9)]=function(){const _0x10f8f4=_0x31b406;if(this['_learnableEquippableMedals']===undefined)this['initEquipMedalSystem']();return this[_0x10f8f4(0xe8)];},Game_Party[_0x31b406(0x161)]['addUnlearnedEquippableMedal']=function(_0x1b1262){const _0x2050d9=_0x31b406;if(!DataManager[_0x2050d9(0x2ed)](_0x1b1262))return;if(this['_learnableEquippableMedals']===undefined)this[_0x2050d9(0x2cc)]();if(this[_0x2050d9(0xe8)][_0x2050d9(0x2fc)](_0x1b1262['id']))return;this[_0x2050d9(0xe8)]['push'](_0x1b1262['id']),this[_0x2050d9(0xe8)]['sort']((_0xf3f05e,_0x3652cb)=>_0xf3f05e-_0x3652cb);},Game_Party[_0x31b406(0x161)][_0x31b406(0x280)]=function(_0x330a56){const _0x22604c=_0x31b406;if(!DataManager[_0x22604c(0x2ed)](_0x330a56))return;if(this['_learnableEquippableMedals']===undefined)this['initEquipMedalSystem']();this['_learnableEquippableMedals'][_0x22604c(0x312)](_0x330a56['id']),this[_0x22604c(0xe8)][_0x22604c(0xe9)]((_0x58c320,_0x32df44)=>_0x58c320-_0x32df44);for(const _0x4d4001 of this[_0x22604c(0x1ea)]()){if(!_0x4d4001)continue;_0x4d4001[_0x22604c(0x280)](_0x330a56);}},VisuMZ['EquipMedalSys'][_0x31b406(0x90)]=Game_Party[_0x31b406(0x161)][_0x31b406(0x262)],Game_Party[_0x31b406(0x161)][_0x31b406(0x262)]=function(_0xecbc4c,_0x3a27dc,_0x5952a2){const _0x2dc07f=_0x31b406;VisuMZ['EquipMedalSys'][_0x2dc07f(0x90)][_0x2dc07f(0x210)](this,_0xecbc4c,_0x3a27dc,_0x5952a2);if(!_0xecbc4c)return;if(_0x3a27dc<=0x0)return;VisuMZ[_0x2dc07f(0x258)]['LinkLearn'](_0xecbc4c);},VisuMZ[_0x31b406(0x258)][_0x31b406(0xe7)]=function(_0x1ba2d9){const _0x4e4a83=_0x31b406;if(!_0x1ba2d9)return;const _0x508c75=VisuMZ[_0x4e4a83(0x258)][_0x4e4a83(0x26d)],_0x10f5e9=_0x1ba2d9[_0x4e4a83(0x209)]||'';if(_0x10f5e9['match'](_0x508c75['ItemLinkLearned'])){const _0x52e1cd=String(RegExp['$1'])[_0x4e4a83(0x8d)](',')[_0x4e4a83(0x14b)](_0x5ebbe9=>_0x5ebbe9[_0x4e4a83(0x112)]());for(const _0x56410d of _0x52e1cd){const _0x5f26b3=/^\d+$/[_0x4e4a83(0x17e)](_0x56410d);let _0xe3ba21=0x0;_0x5f26b3?_0xe3ba21=Number(_0x56410d):_0xe3ba21=DataManager['getArmorIdWithName'](_0x56410d);if(_0xe3ba21>0x0){const _0x112259=$dataArmors[_0xe3ba21];$gameParty['learnEquippedMedal'](_0x112259);}}}if(_0x10f5e9[_0x4e4a83(0xae)](_0x508c75['ItemLinkLearnable'])){const _0x3e31a7=String(RegExp['$1'])['split'](',')[_0x4e4a83(0x14b)](_0x8fb81a=>_0x8fb81a['trim']());for(const _0x3a6521 of _0x3e31a7){const _0x284afe=/^\d+$/['test'](_0x3a6521);let _0x1a302d=0x0;_0x284afe?_0x1a302d=Number(_0x3a6521):_0x1a302d=DataManager[_0x4e4a83(0xcd)](_0x3a6521);if(_0x1a302d>0x0){const _0x1c3f24=$dataArmors[_0x1a302d];$gameParty[_0x4e4a83(0x1d5)](_0x1c3f24);}}}},Game_Troop[_0x31b406(0x30a)]={'expFormula':VisuMZ['EquipMedalSys']['Settings']['General'][_0x31b406(0x2e5)]??'1','showRewards':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x23b)][_0x31b406(0x290)]??!![],'rewardAliveActors':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x23b)][_0x31b406(0x2d9)]??!![]},Game_Troop[_0x31b406(0x161)][_0x31b406(0x264)]=function(){const _0x4630e9=_0x31b406;return this[_0x4630e9(0x1cc)]()[_0x4630e9(0x17c)]((_0x536c17,_0x28167e)=>_0x536c17+_0x28167e[_0x4630e9(0x27c)](),0x0);},Game_Enemy[_0x31b406(0x161)][_0x31b406(0x27c)]=function(){const _0x49c8b1=_0x31b406,_0x15a03c=VisuMZ[_0x49c8b1(0x258)]['RegExp'],_0x15881c=this[_0x49c8b1(0x148)]()[_0x49c8b1(0x209)];let _0x57b2f8=0x0;window[_0x49c8b1(0x2a7)]=this,window[_0x49c8b1(0x24f)]=this[_0x49c8b1(0x24f)]||0x0;if(_0x15881c[_0x49c8b1(0xae)](_0x15a03c[_0x49c8b1(0x29d)]))try{_0x57b2f8=eval(RegExp['$1']);}catch(_0x252798){if($gameTemp[_0x49c8b1(0x252)]())console['log'](_0x252798);_0x57b2f8=0x0;}else try{_0x57b2f8=eval(Game_Troop[_0x49c8b1(0x30a)][_0x49c8b1(0x193)]);}catch(_0x57943a){if($gameTemp[_0x49c8b1(0x252)]())console[_0x49c8b1(0xf6)](_0x57943a);_0x57b2f8=0x0;}return window[_0x49c8b1(0x2a7)]=undefined,window[_0x49c8b1(0x24f)]=undefined,_0x57b2f8;},VisuMZ[_0x31b406(0x258)][_0x31b406(0x268)]=Scene_Equip[_0x31b406(0x161)][_0x31b406(0x303)],Scene_Equip[_0x31b406(0x161)][_0x31b406(0x303)]=function(){const _0x35966b=_0x31b406;VisuMZ[_0x35966b(0x258)][_0x35966b(0x268)][_0x35966b(0x210)](this),this[_0x35966b(0xaa)](),this[_0x35966b(0xe5)]();},VisuMZ[_0x31b406(0x258)][_0x31b406(0x1f9)]=Scene_Equip[_0x31b406(0x161)][_0x31b406(0x1af)],Scene_Equip[_0x31b406(0x161)][_0x31b406(0x1af)]=function(){const _0x45b4fa=_0x31b406;VisuMZ['EquipMedalSys'][_0x45b4fa(0x1f9)][_0x45b4fa(0x210)](this),this['_commandWindow'][_0x45b4fa(0x1d7)](_0x45b4fa(0x141),this['commandEquipMedals'][_0x45b4fa(0x240)](this));},VisuMZ[_0x31b406(0x258)][_0x31b406(0x282)]=Scene_Equip['prototype'][_0x31b406(0x1c8)],Scene_Equip[_0x31b406(0x161)][_0x31b406(0x1c8)]=function(){const _0x2f55de=_0x31b406;if($gameSystem[_0x2f55de(0x1b0)]())return!![];return VisuMZ[_0x2f55de(0x258)]['Scene_Equip_shouldCommandWindowExist'][_0x2f55de(0x210)](this);},Scene_Equip['prototype'][_0x31b406(0xaa)]=function(){const _0x2d21ec=_0x31b406,_0x1676c5=this['equipMedalWindowRect']();this[_0x2d21ec(0x2c6)]=new Window_EquipMedalList(_0x1676c5),this[_0x2d21ec(0x2c6)]['setHelpWindow'](this[_0x2d21ec(0x2f6)]),this[_0x2d21ec(0x2c6)][_0x2d21ec(0x1d7)]('ok',this['onEquipMedalOk'][_0x2d21ec(0x240)](this)),this[_0x2d21ec(0x2c6)]['setHandler'](_0x2d21ec(0x2f3),this[_0x2d21ec(0x1c4)][_0x2d21ec(0x240)](this)),this[_0x2d21ec(0x32d)](this[_0x2d21ec(0x2c6)]);const _0x497d06=Window_EquipMedalList[_0x2d21ec(0x2fd)][_0x2d21ec(0x2b0)];this[_0x2d21ec(0x2c6)][_0x2d21ec(0x226)](_0x497d06||0x0),this[_0x2d21ec(0x2c6)]['setStatusWindow'](this[_0x2d21ec(0x2a2)]);},Scene_Equip[_0x31b406(0x161)][_0x31b406(0x2e6)]=function(){const _0x2ffc45=_0x31b406,_0x160422=this['slotWindowRect'](),_0x27acbf=_0x160422['x'],_0x458429=_0x160422['y'],_0x12d98b=_0x160422['width'];let _0x29aa23=_0x160422[_0x2ffc45(0x189)];return Window_EquipMedalStatus['SETTINGS'][_0x2ffc45(0x265)]&&(_0x29aa23-=this[_0x2ffc45(0x2d3)](0x1,![])),new Rectangle(_0x27acbf,_0x458429,_0x12d98b,_0x29aa23);},Scene_Equip[_0x31b406(0x161)][_0x31b406(0xe5)]=function(){const _0x5905cb=_0x31b406;if(!Window_EquipMedalStatus[_0x5905cb(0x2fd)]['showWindow'])return;const _0x599c1f=this[_0x5905cb(0x2b2)]();this[_0x5905cb(0x2a4)]=new Window_EquipMedalStatus(_0x599c1f),this[_0x5905cb(0x2a4)][_0x5905cb(0x160)](this[_0x5905cb(0xeb)]()),this['addWindow'](this[_0x5905cb(0x2a4)]);const _0xee820f=Window_EquipMedalStatus[_0x5905cb(0x2fd)][_0x5905cb(0x2b0)];this['_medalStatusWindow'][_0x5905cb(0x226)](_0xee820f||0x0);},Scene_Equip[_0x31b406(0x161)][_0x31b406(0x2b2)]=function(){const _0x328858=_0x31b406,_0x27f358=this[_0x328858(0x2e6)](),_0x1f9d04=_0x27f358['x'],_0x5e5446=_0x27f358['y']+_0x27f358[_0x328858(0x189)],_0x29da39=_0x27f358['width'],_0x2b2a21=this[_0x328858(0x2d3)](0x1,![]);return new Rectangle(_0x1f9d04,_0x5e5446,_0x29da39,_0x2b2a21);},VisuMZ['EquipMedalSys'][_0x31b406(0x335)]=Scene_Equip[_0x31b406(0x161)][_0x31b406(0x1f3)],Scene_Equip[_0x31b406(0x161)]['refreshActor']=function(){const _0x59e73f=_0x31b406;VisuMZ[_0x59e73f(0x258)][_0x59e73f(0x335)][_0x59e73f(0x210)](this),this['actor']()['checkLearnNewEquipMedals'](),this[_0x59e73f(0x2c6)]&&(this[_0x59e73f(0x2c6)][_0x59e73f(0x160)](this[_0x59e73f(0xeb)]()),this[_0x59e73f(0x2c6)][_0x59e73f(0xea)]()),this[_0x59e73f(0x2a4)]&&(this[_0x59e73f(0x2a4)]['setActor'](this[_0x59e73f(0xeb)]()),this[_0x59e73f(0x2a4)][_0x59e73f(0xea)]());},VisuMZ[_0x31b406(0x258)][_0x31b406(0x180)]=Scene_Equip[_0x31b406(0x161)][_0x31b406(0x17d)],Scene_Equip[_0x31b406(0x161)][_0x31b406(0x17d)]=function(){const _0x3b0102=_0x31b406;if(this['_equipMedalWindow']&&this['_equipMedalWindow'][_0x3b0102(0xd6)])return![];return VisuMZ[_0x3b0102(0x258)][_0x3b0102(0x180)]['call'](this);},VisuMZ[_0x31b406(0x258)]['Scene_Equip_onActorChange']=Scene_Equip[_0x31b406(0x161)][_0x31b406(0x13c)],Scene_Equip['prototype'][_0x31b406(0x13c)]=function(){const _0x639673=_0x31b406;VisuMZ[_0x639673(0x258)][_0x639673(0x32c)][_0x639673(0x210)](this),this[_0x639673(0x286)]&&this[_0x639673(0x286)][_0x639673(0x281)]()==='equipMedals'&&(this['_slotWindow'][_0x639673(0x11c)](),this[_0x639673(0x113)][_0x639673(0x155)]());},VisuMZ[_0x31b406(0x258)][_0x31b406(0x18a)]=Scene_Equip['prototype'][_0x31b406(0x32f)],Scene_Equip['prototype'][_0x31b406(0x32f)]=function(){const _0xfddf99=_0x31b406;VisuMZ[_0xfddf99(0x258)][_0xfddf99(0x18a)]['call'](this),this[_0xfddf99(0x2c6)]&&(this[_0xfddf99(0x2c6)][_0xfddf99(0x155)](),this['_equipMedalWindow'][_0xfddf99(0x11c)]());},Scene_Equip[_0x31b406(0x161)][_0x31b406(0x147)]=function(){const _0x57dd59=_0x31b406;this[_0x57dd59(0x286)][_0x57dd59(0x1a0)](_0x57dd59(0x141)),this['_equipMedalWindow'][_0x57dd59(0x31c)](),this[_0x57dd59(0x2c6)]['selectLast'](),this[_0x57dd59(0x2c6)]['show'](),this['_slotWindow'][_0x57dd59(0x155)](),this[_0x57dd59(0x113)][_0x57dd59(0x11c)]();},Scene_Equip[_0x31b406(0x161)]['onEquipMedalOk']=function(){const _0x1a3f40=_0x31b406,_0x226f6f=this[_0x1a3f40(0x2c6)][_0x1a3f40(0x276)]();this[_0x1a3f40(0x21c)][_0x1a3f40(0x271)](_0x226f6f)?this[_0x1a3f40(0x21c)][_0x1a3f40(0x122)](_0x226f6f):this[_0x1a3f40(0x21c)][_0x1a3f40(0x25c)](_0x226f6f);this[_0x1a3f40(0x2a2)][_0x1a3f40(0xea)](),this['_slotWindow'][_0x1a3f40(0xea)](),this[_0x1a3f40(0x2c6)][_0x1a3f40(0xea)](),this[_0x1a3f40(0x2c6)][_0x1a3f40(0x31c)]();if(this[_0x1a3f40(0x2a4)])this[_0x1a3f40(0x2a4)]['refresh']();},Scene_Equip[_0x31b406(0x161)][_0x31b406(0x1c4)]=function(){const _0x354820=_0x31b406;this[_0x354820(0x2c6)][_0x354820(0x2ba)](),this[_0x354820(0x2c6)][_0x354820(0x155)](),this[_0x354820(0x286)][_0x354820(0x31c)](),this[_0x354820(0x286)][_0x354820(0x1a0)]('equipMedals'),this[_0x354820(0x2a2)][_0x354820(0x175)](null);},Window_Base[_0x31b406(0x161)]['drawEquippableMedal']=function(_0xd695d1,_0x455392,_0x4074c0,_0x3bb135,_0x5756c0){const _0x1399e3=_0x31b406;if(!_0xd695d1)return;const _0x335436=_0x4074c0+(this[_0x1399e3(0x18f)]()-ImageManager[_0x1399e3(0x2ef)])/0x2,_0x2bbf8e=ImageManager[_0x1399e3(0x2b1)]+0x4,_0x9b4d80=Math[_0x1399e3(0x21a)](0x0,_0x3bb135-_0x2bbf8e);this[_0x1399e3(0x2d7)](),_0x5756c0&&_0x5756c0['equippedMedals']()[_0x1399e3(0x2fc)](_0xd695d1)&&this[_0x1399e3(0x310)](ColorManager[_0x1399e3(0x99)]()),this[_0x1399e3(0x19a)](DataManager[_0x1399e3(0x2c7)](_0xd695d1),_0x455392,_0x335436),this['drawText'](DataManager[_0x1399e3(0x241)](_0xd695d1),_0x455392+_0x2bbf8e,_0x4074c0,_0x9b4d80);},Window_Base[_0x31b406(0x161)][_0x31b406(0x2dc)]=function(_0x53e8a4,_0x803624,_0x2b7985,_0x107e47){const _0x2e0db0=_0x31b406;if(!_0x53e8a4)return;const _0x3b5cfd=Window_EquipMedalList[_0x2e0db0(0x2fd)];if(!_0x3b5cfd[_0x2e0db0(0x29a)])return;const _0xf4716=DataManager[_0x2e0db0(0x126)](_0x53e8a4);if(_0xf4716===0x1&&!_0x3b5cfd[_0x2e0db0(0x10c)])return;if(_0xf4716<0x1&&!_0x3b5cfd['showCost0'])return;this[_0x2e0db0(0x1cf)]();const _0x328b97=_0x2e0db0(0x212)[_0x2e0db0(0x15a)](ImageManager[_0x2e0db0(0x30a)][_0x2e0db0(0x132)]);let _0x36904d='';if(_0x3b5cfd[_0x2e0db0(0x1e6)]||_0xf4716>_0x3b5cfd['costIconLimit'])_0x36904d=TextManager[_0x2e0db0(0x30a)][_0x2e0db0(0x13a)]['format'](_0xf4716,_0x328b97);else{let _0x1c971e=_0xf4716;while(_0x1c971e--)_0x36904d+=_0x328b97;}const _0x824865=this[_0x2e0db0(0x150)](_0x36904d)['width'],_0x2a62bc=_0x803624+_0x107e47-_0x824865;this[_0x2e0db0(0x162)](_0x36904d,_0x2a62bc,_0x2b7985);},Window_Base[_0x31b406(0x161)][_0x31b406(0x15d)]=function(_0x12e425,_0x24f356,_0x7df191,_0x29b3e4){const _0x1c30c3=_0x31b406;if(!_0x12e425)return;const _0x274cb1=_0x7df191+(this['lineHeight']()-ImageManager[_0x1c30c3(0x2ef)])/0x2,_0x508ad5=ImageManager[_0x1c30c3(0x2b1)]+0x4,_0x17d829=Math[_0x1c30c3(0x21a)](0x0,_0x29b3e4-_0x508ad5);this['resetTextColor']();const _0x38faee=Window_EquipMedalList[_0x1c30c3(0x2fd)][_0x1c30c3(0x2bb)];this[_0x1c30c3(0x19a)](_0x38faee,_0x24f356,_0x274cb1);const _0x5c6d1a=VisuMZ['EquipMedalSys'][_0x1c30c3(0x109)](_0x12e425);this[_0x1c30c3(0x2fb)][_0x1c30c3(0x135)]=Window_EquipMedalList[_0x1c30c3(0x2fd)][_0x1c30c3(0x8f)],this['drawText'](_0x5c6d1a,_0x24f356+_0x508ad5,_0x7df191,_0x17d829),this[_0x1c30c3(0x2fb)][_0x1c30c3(0x135)]=![];},VisuMZ[_0x31b406(0x258)]['MaskName']=function(_0x28beb5){const _0x2c3411=_0x31b406,_0x289638=VisuMZ[_0x2c3411(0x258)][_0x2c3411(0x26d)],_0x23988d=_0x28beb5['note']||'';if(_0x23988d[_0x2c3411(0xae)](_0x289638[_0x2c3411(0x109)]))return String(RegExp['$1'])[_0x2c3411(0x112)]();const _0x38a0a0=Window_EquipMedalList['SETTINGS'][_0x2c3411(0xe1)];return Array(_0x28beb5[_0x2c3411(0xd4)]['length']+0x1)[_0x2c3411(0x32b)](_0x38a0a0);},Window_Base['prototype'][_0x31b406(0x100)]=function(_0x2c2386,_0x5f2f7f,_0x417400,_0x18ccdb,_0x3d5335){const _0x50e222=_0x31b406,_0x396d02=Window_EquipMedalList[_0x50e222(0x2fd)],_0x410be5=TextManager[_0x50e222(0x30a)],_0x5b3504=ColorManager[_0x50e222(0x331)](VisuMZ[_0x50e222(0x258)][_0x50e222(0x129)](_0x2c2386)),_0x57f6c2=ColorManager['getColor'](VisuMZ[_0x50e222(0x258)][_0x50e222(0x103)](_0x2c2386)),_0x33197c=_0x396d02['expGaugeStyleType'];_0x18ccdb+=_0x396d02[_0x50e222(0x1b9)];const _0x509d4b=_0x3d5335[_0x50e222(0xf0)](_0x2c2386),_0xa40c02=DataManager[_0x50e222(0x2bf)](_0x2c2386);let _0x25169c=(_0x509d4b/_0xa40c02)[_0x50e222(0x333)](0x0,0x1);if(VisuMZ[_0x50e222(0x258)]['HasFullExpGauge'](_0x2c2386))_0x25169c=0x1;if(Imported[_0x50e222(0x2f7)]){const _0x4c48f6=(VisuMZ[_0x50e222(0x277)]['GetGaugeHeight'](_0x33197c)??0xc)[_0x50e222(0x333)](0x1,0x20),_0x205153=_0x417400+this['lineHeight']()-_0x4c48f6-0x2,_0x4240ee=ColorManager[_0x50e222(0x246)]();VisuMZ[_0x50e222(0x277)][_0x50e222(0x2e9)]=_0xa40c02,this[_0x50e222(0x2fb)][_0x50e222(0x21f)](_0x33197c,_0x5f2f7f,_0x205153,_0x18ccdb,_0x4c48f6,_0x25169c,_0x4240ee,_0x5b3504,_0x57f6c2);}else this[_0x50e222(0x1db)](_0x5f2f7f,_0x417400,_0x18ccdb,_0x25169c,_0x5b3504,_0x57f6c2);this[_0x50e222(0x1cf)]();const _0x41408b=(_0x25169c*0x64)['toFixed'](_0x410be5[_0x50e222(0x108)]),_0x522913=_0x410be5[_0x50e222(0x307)];let _0x1f2eea=_0x522913[_0x50e222(0x15a)](_0x509d4b,_0xa40c02,_0x41408b);if(_0x25169c>=0x1)_0x1f2eea=_0x410be5['maxExpTextFormat'];const _0xc25ce9=this['textSizeEx'](_0x1f2eea)[_0x50e222(0x102)],_0x9b52f0=_0x5f2f7f+_0x18ccdb-_0xc25ce9+_0x396d02[_0x50e222(0x151)],_0xb08cd8=_0x417400+_0x396d02['expTextOffsetY'];this[_0x50e222(0x162)](_0x1f2eea,_0x9b52f0,_0xb08cd8);},VisuMZ[_0x31b406(0x258)][_0x31b406(0x129)]=function(_0x33bb4a){const _0x238063=_0x31b406,_0x384e2b=VisuMZ[_0x238063(0x258)][_0x238063(0x26d)],_0x2560c1=_0x33bb4a[_0x238063(0x209)]||'';if(_0x2560c1[_0x238063(0xae)](_0x384e2b[_0x238063(0x1e5)]))return String(RegExp['$1']);return Window_EquipMedalList[_0x238063(0x2fd)][_0x238063(0x233)];},VisuMZ[_0x31b406(0x258)][_0x31b406(0x103)]=function(_0x331d00){const _0x369743=_0x31b406,_0x2648a2=VisuMZ[_0x369743(0x258)][_0x369743(0x26d)],_0x3d7829=_0x331d00[_0x369743(0x209)]||'';if(_0x3d7829[_0x369743(0xae)](_0x2648a2[_0x369743(0x2b4)]))return String(RegExp['$1']);return Window_EquipMedalList[_0x369743(0x2fd)][_0x369743(0x104)];},Window_EquipCommand[_0x31b406(0x30a)]={'defaultShowEquipMedal':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0x23b)][_0x31b406(0xdf)]??!![]},VisuMZ[_0x31b406(0x258)][_0x31b406(0x31d)]=Window_EquipCommand[_0x31b406(0x161)][_0x31b406(0x1e9)],Window_EquipCommand['prototype']['makeCommandList']=function(){const _0x5ceef2=_0x31b406;VisuMZ['EquipMedalSys'][_0x5ceef2(0x31d)][_0x5ceef2(0x210)](this),this[_0x5ceef2(0x274)]();},VisuMZ['EquipMedalSys'][_0x31b406(0x239)]=Window_EquipCommand['prototype'][_0x31b406(0x177)],Window_EquipCommand[_0x31b406(0x161)][_0x31b406(0x177)]=function(){const _0x374208=_0x31b406;if(!this[_0x374208(0x145)]()&&!this[_0x374208(0x29c)]()&&this['isEquipMedalCommandVisible']())return![];return VisuMZ[_0x374208(0x258)][_0x374208(0x239)]['call'](this);},VisuMZ['EquipMedalSys'][_0x31b406(0xfd)]=Window_EquipCommand['prototype']['isEquipCommandAdded'],Window_EquipCommand[_0x31b406(0x161)]['isEquipCommandAdded']=function(){const _0x1c489b=_0x31b406;if(!this[_0x1c489b(0x145)]()&&!this[_0x1c489b(0x29c)]()&&this['isEquipMedalCommandVisible']())return!![];return VisuMZ[_0x1c489b(0x258)][_0x1c489b(0xfd)]['call'](this);},Window_EquipCommand[_0x31b406(0x161)][_0x31b406(0x274)]=function(){const _0x2d3180=_0x31b406;if(!this[_0x2d3180(0x1b0)]())return;let _0x20d399=TextManager[_0x2d3180(0x30a)][_0x2d3180(0x228)];if(this[_0x2d3180(0xc7)]()!==_0x2d3180(0x17b)){const _0x4b8539=ImageManager[_0x2d3180(0x30a)][_0x2d3180(0x275)];_0x20d399=_0x2d3180(0x98)[_0x2d3180(0x15a)](_0x4b8539,_0x20d399);}this['addCommand'](_0x20d399,_0x2d3180(0x141));},Window_EquipCommand[_0x31b406(0x161)][_0x31b406(0x1b0)]=function(){const _0x6a3b39=_0x31b406;return $gameSystem[_0x6a3b39(0x1b0)]();},VisuMZ[_0x31b406(0x258)][_0x31b406(0x137)]=Window_EquipCommand[_0x31b406(0x161)][_0x31b406(0x152)],Window_EquipCommand[_0x31b406(0x161)][_0x31b406(0x152)]=function(){const _0x2b9159=_0x31b406;VisuMZ[_0x2b9159(0x258)][_0x2b9159(0x137)][_0x2b9159(0x210)](this),this[_0x2b9159(0x1fe)]();},Window_EquipCommand[_0x31b406(0x161)][_0x31b406(0x1fe)]=function(){const _0x38f53c=_0x31b406,_0x2c40bb=this[_0x38f53c(0x20f)]!==this[_0x38f53c(0x281)]();if(!_0x2c40bb)return;const _0x557687=SceneManager['_scene']['_equipMedalWindow'];if(_0x557687)_0x557687[_0x38f53c(0x11c)]();const _0x559e98=SceneManager[_0x38f53c(0x255)]['_medalStatusWindow'];if(_0x559e98)_0x559e98[_0x38f53c(0x11c)]();const _0xe51071=SceneManager[_0x38f53c(0x255)][_0x38f53c(0x113)];if(_0xe51071)_0xe51071[_0x38f53c(0x25a)]();this[_0x38f53c(0x20f)]=this['currentSymbol']();if(_0x2c40bb&&_0x557687&&this[_0x38f53c(0x281)]()===_0x38f53c(0x141)){_0xe51071&&(_0xe51071['deactivate'](),_0xe51071[_0x38f53c(0x2ba)](),_0xe51071[_0x38f53c(0x11c)]());if(this[_0x38f53c(0x21c)])this[_0x38f53c(0x21c)]['checkLearnNewEquipMedals']();_0x557687[_0x38f53c(0xea)](),_0x557687[_0x38f53c(0x25a)](),_0x559e98&&(_0x559e98[_0x38f53c(0xea)](),_0x559e98[_0x38f53c(0x25a)]());}else _0x557687&&(_0x557687[_0x38f53c(0x155)](),_0x557687[_0x38f53c(0x2ba)]());},VisuMZ['EquipMedalSys'][_0x31b406(0x23d)]=Window_EquipCommand[_0x31b406(0x161)][_0x31b406(0x131)],Window_EquipCommand[_0x31b406(0x161)][_0x31b406(0x131)]=function(){const _0x1eec8b=_0x31b406;this['_lastCurrentSymbol']===_0x1eec8b(0x141)?(this[_0x1eec8b(0x1ec)](),this['deactivate'](),this[_0x1eec8b(0x2ba)](),Input[_0x1eec8b(0x205)](),SceneManager[_0x1eec8b(0x255)][_0x1eec8b(0x147)]()):VisuMZ[_0x1eec8b(0x258)][_0x1eec8b(0x23d)][_0x1eec8b(0x210)](this);},VisuMZ['EquipMedalSys'][_0x31b406(0x14e)]=Window_EquipCommand[_0x31b406(0x161)]['playOkSound'],Window_EquipCommand['prototype'][_0x31b406(0x1e3)]=function(){const _0x41c3ed=_0x31b406;VisuMZ[_0x41c3ed(0x258)][_0x41c3ed(0x14e)][_0x41c3ed(0x210)](this);if(this['currentSymbol']()===_0x41c3ed(0x141))Window_HorzCommand[_0x41c3ed(0x161)]['playOkSound'][_0x41c3ed(0x210)](this);},VisuMZ['EquipMedalSys'][_0x31b406(0x30d)]=Window_EquipCommand[_0x31b406(0x161)][_0x31b406(0xda)],Window_EquipCommand[_0x31b406(0x161)][_0x31b406(0xda)]=function(_0x2f4cb4){const _0x32a683=_0x31b406;this[_0x32a683(0x2e1)]=![];const _0x4a6364=this[_0x32a683(0x26b)](),_0x37d28f=this[_0x32a683(0x266)](),_0x3679c=SceneManager[_0x32a683(0x255)][_0x32a683(0x2c6)];if(_0x3679c[_0x32a683(0x1aa)]()&&_0x3679c[_0x32a683(0x169)]){if(_0x37d28f>=0x0)_0x37d28f===this[_0x32a683(0x26b)]()&&(this[_0x32a683(0x2e1)]=!![]),this[_0x32a683(0x31c)](),this[_0x32a683(0x267)](_0x37d28f),_0x3679c[_0x32a683(0x155)](),_0x3679c[_0x32a683(0x2ba)]();else _0x3679c[_0x32a683(0x266)]()>=0x0&&(this[_0x32a683(0x155)](),_0x3679c[_0x32a683(0x31c)]());}else{VisuMZ[_0x32a683(0x258)][_0x32a683(0x30d)]['call'](this);return;}_0x2f4cb4&&this['index']()!==_0x4a6364&&this[_0x32a683(0x1ec)]();};function Window_EquipMedalList(){const _0x3c6d2a=_0x31b406;this[_0x3c6d2a(0xce)](...arguments);}Window_EquipMedalList[_0x31b406(0x161)]=Object['create'](Window_Selectable[_0x31b406(0x161)]),Window_EquipMedalList[_0x31b406(0x161)][_0x31b406(0x28e)]=Window_EquipMedalList,Window_EquipMedalList[_0x31b406(0x2fd)]={'bgType':VisuMZ[_0x31b406(0x258)]['Settings']['Window'][_0x31b406(0x2ee)]??0x0,'equipColor':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)]['Window'][_0x31b406(0x11a)]??0x11,'showCostAny':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0x219)]??!![],'showCost1':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0x231)]??!![],'showCost0':VisuMZ['EquipMedalSys']['Settings'][_0x31b406(0xb6)][_0x31b406(0x296)]??![],'costNumber':VisuMZ[_0x31b406(0x258)]['Settings'][_0x31b406(0xb6)][_0x31b406(0x234)]??![],'costIconLimit':VisuMZ[_0x31b406(0x258)]['Settings'][_0x31b406(0xb6)]['costIconLimit']??0x3,'sortBy':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0xb6)]['SortStyle']??_0x31b406(0xd4),'showUnlearned':VisuMZ[_0x31b406(0x258)]['Settings']['Window'][_0x31b406(0x10d)]??!![],'separateUnlearned':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0x1a8)]??!![],'maskUnlearned':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0x2bd)]??![],'maskItalics':VisuMZ['EquipMedalSys']['Settings'][_0x31b406(0xb6)][_0x31b406(0x1ae)]??!![],'maskIcon':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0x319)]??0xa1,'maskLetter':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0x1e4)]??'?','hideFormerEvolution':VisuMZ[_0x31b406(0x258)]['Settings'][_0x31b406(0xb6)][_0x31b406(0x1ca)]??!![],'defaultExpGaugeColor1':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0xf7)]??0x10,'defaultExpGaugeColor2':VisuMZ['EquipMedalSys'][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0xac)]??0x11,'expGaugeStyleType':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0x1dd)]??_0x31b406(0xcf),'expGaugeWidthModifier':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0x1b9)]??-0x68,'expTextOffsetX':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0x151)]??0x0,'expTextOffsetY':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0x22f)]??0x6},Window_EquipMedalList[_0x31b406(0x161)][_0x31b406(0xce)]=function(_0x2a8291){const _0x44fd02=_0x31b406;Window_Selectable[_0x44fd02(0x161)][_0x44fd02(0xce)][_0x44fd02(0x210)](this,_0x2a8291),this[_0x44fd02(0x21c)]=null,this['_data']=[],this[_0x44fd02(0x11c)]();},Window_EquipMedalList['prototype'][_0x31b406(0x160)]=function(_0x2ad1f5){const _0x59243e=_0x31b406;this[_0x59243e(0x21c)]!==_0x2ad1f5&&(this[_0x59243e(0x21c)]=_0x2ad1f5,this[_0x59243e(0xea)](),this['scrollTo'](0x0,0x0));},Window_EquipMedalList['prototype'][_0x31b406(0x2f5)]=function(){return 0x1;},Window_EquipMedalList[_0x31b406(0x161)][_0x31b406(0x20b)]=function(){return 0x8;},Window_EquipMedalList[_0x31b406(0x161)][_0x31b406(0xa8)]=function(){const _0x5d745d=_0x31b406;return this['_data']?this[_0x5d745d(0x158)][_0x5d745d(0x2d4)]:0x1;},Window_EquipMedalList['prototype'][_0x31b406(0x276)]=function(){const _0x3d2564=_0x31b406;return this[_0x3d2564(0x116)](this['index']());},Window_EquipMedalList['prototype'][_0x31b406(0x116)]=function(_0x2b8de9){return this['_data']&&_0x2b8de9>=0x0?this['_data'][_0x2b8de9]:null;},Window_EquipMedalList[_0x31b406(0x161)]['show']=function(){const _0x32f8bd=_0x31b406;Window_Selectable[_0x32f8bd(0x161)][_0x32f8bd(0x25a)]['call'](this);const _0x3c51e6=SceneManager[_0x32f8bd(0x255)];Imported[_0x32f8bd(0x261)]&&_0x3c51e6[_0x32f8bd(0x309)]&&_0x3c51e6[_0x32f8bd(0x11d)]();},Window_EquipMedalList['prototype'][_0x31b406(0x1f8)]=function(){const _0x19e862=_0x31b406;this['_actor']?this[_0x19e862(0x158)]=this['availableItems']():this[_0x19e862(0x158)]=[];},Window_EquipMedalList[_0x31b406(0x161)][_0x31b406(0x243)]=function(){const _0x3072b8=_0x31b406;if(!this[_0x3072b8(0x21c)])return[];let _0x4093d9=this[_0x3072b8(0x21c)][_0x3072b8(0xb3)]();Window_EquipMedalList[_0x3072b8(0x2fd)][_0x3072b8(0x1c6)]&&(_0x4093d9=this[_0x3072b8(0x16d)](_0x4093d9));if(Window_EquipMedalList[_0x3072b8(0x2fd)][_0x3072b8(0x192)]){let _0x224845=this[_0x3072b8(0x21c)]['availableUnlearnedEquippableMedals']();Window_EquipMedalList[_0x3072b8(0x2fd)][_0x3072b8(0x1c6)]&&(_0x224845=this['sortItems'](_0x224845)),_0x4093d9=_0x4093d9[_0x3072b8(0x2f1)](_0x224845);}return _0x4093d9=_0x4093d9[_0x3072b8(0x12f)]((_0x2e4d8b,_0x3ffd13,_0x11a92e)=>_0x11a92e[_0x3072b8(0x123)](_0x2e4d8b)===_0x3ffd13),!Window_EquipMedalList[_0x3072b8(0x2fd)]['separateUnlearned']&&(_0x4093d9=this['sortItems'](_0x4093d9)),_0x4093d9=_0x4093d9[_0x3072b8(0x12f)](_0x20993f=>this[_0x3072b8(0x2fc)](_0x20993f)),_0x4093d9;},Window_EquipMedalList[_0x31b406(0x161)]['includes']=function(_0x5b36bf){const _0x4819dd=_0x31b406;if(VisuMZ[_0x4819dd(0x258)][_0x4819dd(0xf3)](this[_0x4819dd(0x21c)],_0x5b36bf))return![];if(DataManager[_0x4819dd(0x1c1)](_0x5b36bf)){const _0x9059ed=DataManager[_0x4819dd(0x218)](_0x5b36bf);if(this[_0x4819dd(0x21c)][_0x4819dd(0x2a6)](_0x9059ed))return![];}return!![];},VisuMZ[_0x31b406(0x258)][_0x31b406(0xf3)]=function(_0x77133c,_0x5d5420){const _0x117951=_0x31b406,_0x4e9dcb=VisuMZ[_0x117951(0x258)][_0x117951(0x26d)],_0x3b3bb4=_0x5d5420[_0x117951(0x209)]||'';if(_0x3b3bb4['match'](_0x4e9dcb['HideUnlearned'])){if(!_0x77133c[_0x117951(0x2a6)](_0x5d5420))return!![];}if(_0x3b3bb4[_0x117951(0xae)](_0x4e9dcb[_0x117951(0xe3)])){const _0x79d974=String(RegExp['$1'])[_0x117951(0x8d)](',')['map'](_0x35e17e=>Number(_0x35e17e));if(_0x79d974[_0x117951(0x1ef)](_0x59a1e9=>_0x77133c[_0x117951(0x2a6)]($dataArmors[_0x59a1e9])))return!![];}if(_0x3b3bb4[_0x117951(0xae)](_0x4e9dcb[_0x117951(0x21d)])){const _0x5c0614=String(RegExp['$1'])[_0x117951(0x8d)](',')[_0x117951(0x14b)](_0x10da77=>Number(_0x10da77));if(_0x5c0614[_0x117951(0x229)](_0x51b0e1=>_0x77133c[_0x117951(0x2a6)]($dataArmors[_0x51b0e1])))return!![];}if(_0x3b3bb4[_0x117951(0xae)](_0x4e9dcb['HideLearnedAllName'])){const _0x601651=String(RegExp['$1'])[_0x117951(0x8d)](',')[_0x117951(0x14b)](_0x1e71fb=>DataManager[_0x117951(0xcd)](_0x1e71fb));if(_0x601651[_0x117951(0x1ef)](_0x2462de=>_0x77133c[_0x117951(0x2a6)]($dataArmors[_0x2462de])))return!![];}if(_0x3b3bb4['match'](_0x4e9dcb[_0x117951(0x117)])){const _0x332417=String(RegExp['$1'])[_0x117951(0x8d)](',')[_0x117951(0x14b)](_0xe3246f=>DataManager['getArmorIdWithName'](_0xe3246f));if(_0x332417['some'](_0x386ff5=>_0x77133c[_0x117951(0x2a6)]($dataArmors[_0x386ff5])))return!![];}return![];},Window_EquipMedalList['prototype'][_0x31b406(0x16d)]=function(_0x4a46b6){const _0x18bd65=_0x31b406,_0x41b30f=Window_EquipMedalList[_0x18bd65(0x2fd)][_0x18bd65(0x1d8)];if(_0x41b30f==='id')return VisuMZ[_0x18bd65(0x327)][_0x18bd65(0x1b6)]?VisuMZ[_0x18bd65(0x327)][_0x18bd65(0x1b6)](_0x4a46b6):_0x4a46b6[_0x18bd65(0xe9)]((_0x4151b8,_0x2fa275)=>_0x4151b8['id']-_0x2fa275['id']);else{if(_0x41b30f===_0x18bd65(0xd4))return _0x4a46b6['sort']((_0xfc59a,_0x585104)=>DataManager[_0x18bd65(0x241)](_0xfc59a)>DataManager['getEquipMedalName'](_0x585104)?0x1:-0x1);else return _0x41b30f===_0x18bd65(0x1b4)?_0x4a46b6[_0x18bd65(0xe9)]((_0x307b34,_0x3f9b01)=>_0x307b34[_0x18bd65(0x1bb)]-_0x3f9b01[_0x18bd65(0x1bb)]):_0x4a46b6;}},Window_EquipMedalList[_0x31b406(0x161)][_0x31b406(0x178)]=function(){const _0x3b0491=_0x31b406;this[_0x3b0491(0x204)](0x0);},Window_EquipMedalList[_0x31b406(0x161)][_0x31b406(0x179)]=function(_0x3e554d){const _0x3c2e59=_0x31b406,_0x1c3d0e=this['itemAt'](_0x3e554d);if(!_0x1c3d0e)return;const _0x2a405c=this[_0x3c2e59(0x1a6)](_0x3e554d);this[_0x3c2e59(0x334)](this[_0x3c2e59(0x256)](_0x1c3d0e)),this[_0x3c2e59(0x21c)][_0x3c2e59(0x2a6)](_0x1c3d0e)?(VisuMZ[_0x3c2e59(0x258)]['HasExpGauge'](_0x1c3d0e)&&this[_0x3c2e59(0x100)](_0x1c3d0e,_0x2a405c['x'],_0x2a405c['y'],_0x2a405c[_0x3c2e59(0x102)],this[_0x3c2e59(0x21c)]),this[_0x3c2e59(0x214)](_0x1c3d0e,_0x2a405c['x'],_0x2a405c['y'],_0x2a405c[_0x3c2e59(0x102)],this[_0x3c2e59(0x21c)]),this[_0x3c2e59(0x2dc)](_0x1c3d0e,_0x2a405c['x'],_0x2a405c['y'],_0x2a405c[_0x3c2e59(0x102)])):(VisuMZ[_0x3c2e59(0x258)][_0x3c2e59(0x163)](_0x1c3d0e)?this['drawEquippableMedalMask'](_0x1c3d0e,_0x2a405c['x'],_0x2a405c['y'],_0x2a405c['width']):this['drawEquippableMedal'](_0x1c3d0e,_0x2a405c['x'],_0x2a405c['y'],_0x2a405c[_0x3c2e59(0x102)],this[_0x3c2e59(0x21c)]),this[_0x3c2e59(0x127)](_0x2a405c));},VisuMZ['EquipMedalSys'][_0x31b406(0x163)]=function(_0x58aab9){const _0x3b8f7e=_0x31b406,_0x186252=VisuMZ['EquipMedalSys'][_0x3b8f7e(0x26d)],_0xb2cfc3=_0x58aab9['note']||'';if(_0xb2cfc3[_0x3b8f7e(0xae)](_0x186252['MaskUnlearned']))return!![];if(_0xb2cfc3[_0x3b8f7e(0xae)](_0x186252['NoMaskUnlearned']))return![];return Window_EquipMedalList[_0x3b8f7e(0x2fd)][_0x3b8f7e(0x119)];},VisuMZ['EquipMedalSys'][_0x31b406(0x269)]=function(_0x29d59c){const _0x3ef97c=_0x31b406;if(this[_0x3ef97c(0xed)](_0x29d59c))return!![];if(DataManager[_0x3ef97c(0x1c1)](_0x29d59c))return!![];return![];},VisuMZ[_0x31b406(0x258)][_0x31b406(0xed)]=function(_0x1e6fe1){const _0x5ee2a1=_0x31b406,_0x5b5107=VisuMZ[_0x5ee2a1(0x258)][_0x5ee2a1(0x26d)],_0x2f5ee8=_0x1e6fe1[_0x5ee2a1(0x209)]||'';if(_0x2f5ee8[_0x5ee2a1(0xae)](_0x5b5107[_0x5ee2a1(0xbb)]))return!![];return![];},Window_EquipMedalList[_0x31b406(0x161)]['drawUnlearnedText']=function(_0x3a416c){const _0x3e749c=_0x31b406,_0xa51c1=TextManager[_0x3e749c(0x30a)][_0x3e749c(0x336)],_0x1ab95f=this[_0x3e749c(0x150)](_0xa51c1)[_0x3e749c(0x102)],_0x384d56=_0x3a416c['x']+_0x3a416c[_0x3e749c(0x102)]-_0x1ab95f;this['drawTextEx'](_0xa51c1,_0x384d56,_0x3a416c['y']),this[_0x3e749c(0x1cf)]();},Window_EquipMedalList[_0x31b406(0x161)][_0x31b406(0x1bf)]=function(){const _0x398098=_0x31b406;if(this[_0x398098(0x21c)]&&this[_0x398098(0x21c)]['isLearnedEquippedMedal'](this[_0x398098(0x276)]())){this[_0x398098(0x27e)](this[_0x398098(0x276)]());if(this[_0x398098(0x2a2)])this[_0x398098(0x15e)]();}else{const _0x12be15=VisuMZ[_0x398098(0x258)][_0x398098(0xb8)](this[_0x398098(0x21c)],this[_0x398098(0x276)]());if(this[_0x398098(0x2f6)])this[_0x398098(0x2f6)][_0x398098(0xb1)](_0x12be15);if(this[_0x398098(0x2a2)])this[_0x398098(0x2a2)]['setTempActor'](null);}},Window_EquipMedalList['prototype'][_0x31b406(0x27e)]=function(_0x493f19){const _0x1d3f40=_0x31b406;if(!this['_helpWindow'])return;const _0x517077=VisuMZ[_0x1d3f40(0x258)]['RegExp'],_0x29551b=(_0x493f19?_0x493f19[_0x1d3f40(0x209)]:'')||'';let _0x1b79f2=_0x493f19?_0x493f19[_0x1d3f40(0x1d6)]:'';_0x493f19&&_0x29551b[_0x1d3f40(0xae)](_0x517077[_0x1d3f40(0x2ce)])&&(_0x1b79f2=String(RegExp['$1'])),this[_0x1d3f40(0x2f6)][_0x1d3f40(0xb1)](_0x1b79f2);},Window_EquipMedalList['prototype'][_0x31b406(0xea)]=function(){const _0xf72f53=_0x31b406;this[_0xf72f53(0x1f8)](),Window_Selectable[_0xf72f53(0x161)][_0xf72f53(0xea)][_0xf72f53(0x210)](this);},Window_EquipMedalList[_0x31b406(0x161)][_0x31b406(0x1e3)]=function(){const _0x4c6809=_0x31b406;SoundManager[_0x4c6809(0x16a)]();},Window_EquipMedalList['prototype'][_0x31b406(0x1f6)]=function(){const _0x350992=_0x31b406;return this[_0x350992(0x256)](this['item']());},Window_EquipMedalList['prototype'][_0x31b406(0x256)]=function(_0x2895ef){const _0xbc5b63=_0x31b406;if(!_0x2895ef)return![];if(!this[_0xbc5b63(0x21c)])return![];if(this['_actor'][_0xbc5b63(0x271)](_0x2895ef))return!![];return this[_0xbc5b63(0x21c)]['isLearnedEquippedMedal'](_0x2895ef)?this[_0xbc5b63(0x21c)]['hasEquipMedalCapacityFor'](_0x2895ef):![];},VisuMZ[_0x31b406(0x258)][_0x31b406(0xb8)]=function(_0x3d842f,_0x6a9d48){const _0x237e17=_0x31b406;if(!_0x6a9d48)return'';const _0x461790=TextManager[_0x237e17(0x30a)],_0x44ae9d=VisuMZ[_0x237e17(0x258)][_0x237e17(0x26d)],_0xb72fdf=_0x6a9d48['note']||'';let _0x3045af='';if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x1f0)]))_0x3045af=String(RegExp['$1'])[_0x237e17(0x112)]();else{if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x14f)])){const _0x114b9f=Number(RegExp['$1']),_0x2161a4=_0x3d842f[_0x237e17(0x24f)],_0x226737=_0x237e17(0x24f);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x114b9f,_0x2161a4,_0x226737);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d['LearnBattles'])){const _0x473491=Number(RegExp['$1']),_0x77f26=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0xc8),_0x237e17(0x1ed)),_0x5d861d='battle';_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x473491,_0x77f26,_0x5d861d);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d['LearnVictory'])){const _0x1f3e84=Number(RegExp['$1']),_0x496373=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0xc8),_0x237e17(0xa2)),_0x5ec591='victory';_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x1f3e84,_0x496373,_0x5ec591);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x1cb)])){const _0x12087e=Number(RegExp['$1']),_0x58f0aa=_0x3d842f['getEquipMedalLearnProgress'](_0x6a9d48,'battle',_0x237e17(0x21b)),_0x250136=_0x237e17(0x11e);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x12087e,_0x58f0aa,_0x250136);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x1d4)])){const _0x14334b=Number(RegExp['$1']),_0x393a11=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0xc8),_0x237e17(0x2a9)),_0x29166d=_0x237e17(0x2a9);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x14334b,_0x393a11,_0x29166d);}if(_0xb72fdf['match'](_0x44ae9d['LearnAttackTimes'])){const _0x4dae16=Number(RegExp['$1']),_0x1d9782=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x134),_0x237e17(0xc1)),_0x35967c=_0x237e17(0x154);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x4dae16,_0x1d9782,_0x35967c);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x293)])){const _0x3e604d=Number(RegExp['$1']),_0x1b52aa=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x134),'guard'),_0x2ea204=_0x237e17(0x1eb);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x3e604d,_0x1b52aa,_0x2ea204);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d['LearnSkillUsage'])){const _0x1d1367=Number(RegExp['$1']),_0x13a11a=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x134),_0x237e17(0x1df)),_0x400e64=_0x237e17(0x15f);_0x3045af=this['ApplyUnlockHelpTextCondition'](_0x3045af,_0x1d1367,_0x13a11a,_0x400e64);}if(_0xb72fdf['match'](_0x44ae9d[_0x237e17(0x2e7)])){const _0x28420b=Number(RegExp['$1']),_0x320dd5=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x134),_0x237e17(0x31b)),_0x3f6fdd='physSkillUse';_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x28420b,_0x320dd5,_0x3f6fdd);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d['LearnMagSkill'])){const _0x955d1e=Number(RegExp['$1']),_0x52691d=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x134),'magicalSkill'),_0x235aa5='magSkillUse';_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x955d1e,_0x52691d,_0x235aa5);}if(_0xb72fdf['match'](_0x44ae9d[_0x237e17(0xab)])){const _0x2cf2b9=Number(RegExp['$1']),_0x5f309a=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x134),_0x237e17(0x2f8)),_0x5088fb='certSkillUse';_0x3045af=this['ApplyUnlockHelpTextCondition'](_0x3045af,_0x2cf2b9,_0x5f309a,_0x5088fb);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d['LearnItemUsage'])){const _0x1d4a0e=Number(RegExp['$1']),_0x5ba90e=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x134),'item'),_0x222e77=_0x237e17(0x20e);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x1d4a0e,_0x5ba90e,_0x222e77);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x2d2)])){const _0x4bb785=Number(RegExp['$1']),_0x4a4d2a=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x134),'critDeal'),_0x5c9ea3=_0x237e17(0x1c0);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x4bb785,_0x4a4d2a,_0x5c9ea3);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d['LearnTakeCritHitTimes'])){const _0x558235=Number(RegExp['$1']),_0x5d0510=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x134),_0x237e17(0x24a)),_0x474353='critTake';_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x558235,_0x5d0510,_0x474353);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x29e)])){const _0x156c4e=Number(RegExp['$1']),_0x3da8ef=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x134),_0x237e17(0x14a)),_0x17601c=_0x237e17(0x14a);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x156c4e,_0x3da8ef,_0x17601c);}if(_0xb72fdf['match'](_0x44ae9d['LearnEvadeTimes'])){const _0x5573cf=Number(RegExp['$1']),_0x52813b=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x134),_0x237e17(0x15c)),_0x447cfb=_0x237e17(0x15c);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x5573cf,_0x52813b,_0x447cfb);}{const _0x2f20ef=_0xb72fdf[_0x237e17(0xae)](_0x44ae9d['LearnSTypeUsage']);if(_0x2f20ef)for(const _0xb620b1 of _0x2f20ef){_0xb620b1[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x1a2)]);let _0x5ce795=String(RegExp['$1']);const _0xca8883=Number(RegExp['$2']),_0x3befaf=/^\d+$/[_0x237e17(0x17e)](_0x5ce795);_0x5ce795=_0x3befaf?Number(_0x5ce795):DataManager[_0x237e17(0x2be)](_0x5ce795);const _0x2caf3a=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x1bc),_0x5ce795),_0x573d82=_0x237e17(0x9d),_0x452796=$dataSystem['skillTypes'][_0x5ce795];_0x3045af=this['ApplyUnlockHelpTextCondition'](_0x3045af,_0xca8883,_0x2caf3a,_0x573d82,_0x452796);}}{const _0x34fbfa=_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0xef)]);if(_0x34fbfa)for(const _0x1d20ea of _0x34fbfa){_0x1d20ea[_0x237e17(0xae)](_0x44ae9d['LearnElementDeal']);let _0x3fc072=String(RegExp['$1']);const _0x33afe4=Number(RegExp['$2']),_0x5801b0=/^\d+$/[_0x237e17(0x17e)](_0x3fc072);_0x3fc072=_0x5801b0?Number(_0x3fc072):DataManager[_0x237e17(0x2ae)](_0x3fc072);const _0x580365=_0x3d842f['getEquipMedalLearnProgress'](_0x6a9d48,_0x237e17(0x130),_0x3fc072),_0x4aa97c=_0x237e17(0x130),_0x750682=$dataSystem[_0x237e17(0xd8)][_0x3fc072];_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x33afe4,_0x580365,_0x4aa97c,_0x750682);}}{const _0x30bb1e=_0xb72fdf['match'](_0x44ae9d[_0x237e17(0x259)]);if(_0x30bb1e)for(const _0x30cb50 of _0x30bb1e){_0x30cb50[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x259)]);let _0x483af6=String(RegExp['$1']);const _0x34e1ae=Number(RegExp['$2']),_0x172d12=/^\d+$/['test'](_0x483af6);_0x483af6=_0x172d12?Number(_0x483af6):DataManager['getElementIdWithName'](_0x483af6);const _0x681aa6=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x2f2),_0x483af6),_0x516b99=_0x237e17(0x2f2),_0xa9d41e=$dataSystem[_0x237e17(0xd8)][_0x483af6];_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x34e1ae,_0x681aa6,_0x516b99,_0xa9d41e);}}{const _0x5e8152=_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x2ab)]);if(_0x5e8152)for(const _0x2f70b3 of _0x5e8152){_0x2f70b3['match'](_0x44ae9d[_0x237e17(0x2ab)]);let _0x7f1c33=String(RegExp['$1']);const _0x3d8d42=Number(RegExp['$2']),_0x11447b=/^\d+$/[_0x237e17(0x17e)](_0x7f1c33);_0x7f1c33=_0x11447b?Number(_0x7f1c33):DataManager[_0x237e17(0x9b)](_0x7f1c33);const _0xfa5cc6=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0xfc),_0x7f1c33),_0x57b296=_0x237e17(0xfc),_0xe7cf82=$dataStates[_0x7f1c33],_0x50cb24=_0x237e17(0x98)[_0x237e17(0x15a)](_0xe7cf82[_0x237e17(0x1b2)],_0xe7cf82[_0x237e17(0xd4)]);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x3d8d42,_0xfa5cc6,_0x57b296,_0x50cb24);}}{const _0xfedb24=_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x279)]);if(_0xfedb24)for(const _0x56c2e7 of _0xfedb24){_0x56c2e7[_0x237e17(0xae)](_0x44ae9d['LearnStateTake']);let _0x133022=String(RegExp['$1']);const _0x36f348=Number(RegExp['$2']),_0x3afe9e=/^\d+$/[_0x237e17(0x17e)](_0x133022);_0x133022=_0x3afe9e?Number(_0x133022):DataManager[_0x237e17(0x9b)](_0x133022);const _0x17f499=_0x3d842f['getEquipMedalLearnProgress'](_0x6a9d48,'stateTake',_0x133022),_0x4ea801=_0x237e17(0x278),_0x3ad69d=$dataStates[_0x133022],_0x500533=_0x237e17(0x98)[_0x237e17(0x15a)](_0x3ad69d[_0x237e17(0x1b2)],_0x3ad69d[_0x237e17(0xd4)]);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x36f348,_0x17f499,_0x4ea801,_0x500533);}}if(Imported['VisuMZ_1_ElementStatusCore']){const _0x5437ca=_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x320)]);if(_0x5437ca)for(const _0x3b3d15 of _0x5437ca){_0x3b3d15[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x320)]);const _0x497dfa=String(RegExp['$1']),_0x367000=Number(RegExp['$2']),_0xde7143=_0x3d842f['getEquipMedalLearnProgress'](_0x6a9d48,_0x237e17(0x254),_0x497dfa[_0x237e17(0x166)]()[_0x237e17(0x112)]()),_0x2a26fd=_0x237e17(0x254),_0x4bf4c9=_0x497dfa;_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x367000,_0xde7143,_0x2a26fd,_0x4bf4c9);}}if(_0xb72fdf['match'](_0x44ae9d[_0x237e17(0x22c)])){const _0x4f10f7=Number(RegExp['$1']),_0x19ef2b=_0x3d842f['getEquipMedalLearnProgress'](_0x6a9d48,'hp','dmgDeal'),_0x55f1b7='totalDmgDeal';_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x4f10f7,_0x19ef2b,_0x55f1b7);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d['LearnTotalDmgTake'])){const _0x3b894a=Number(RegExp['$1']),_0x14d06a=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,'hp',_0x237e17(0xfa)),_0xb32f70=_0x237e17(0x136);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x3b894a,_0x14d06a,_0xb32f70);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x1f7)])){const _0x3b1493=Number(RegExp['$1']),_0x2f8b7f=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,'hp',_0x237e17(0x2f0)),_0x429dcd=_0x237e17(0xd3);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x3b1493,_0x2f8b7f,_0x429dcd);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x10f)])){const _0x1514e0=Number(RegExp['$1']),_0x3642fd=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,'hp',_0x237e17(0x115)),_0x5bbd98=_0x237e17(0x1a7);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x1514e0,_0x3642fd,_0x5bbd98);}if(_0xb72fdf['match'](_0x44ae9d[_0x237e17(0x146)])){const _0x5dbe84=Number(RegExp['$1']),_0x39022d=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x19d),_0x237e17(0x202)),_0x880e8e='kills';_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x5dbe84,_0x39022d,_0x880e8e);}if(_0xb72fdf['match'](_0x44ae9d[_0x237e17(0x14d)])){const _0x1f603d=Number(RegExp['$1']),_0x11b2fb=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x19d),_0x237e17(0x2fa)),_0x132d9c=_0x237e17(0x2fa);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x1f603d,_0x11b2fb,_0x132d9c);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x28d)])){const _0x36ebbb=Number(RegExp['$1']),_0x22cf71=_0x3d842f[_0x237e17(0x1cd)](_0x6a9d48,_0x237e17(0x19d),_0x237e17(0xa1)),_0x3d8dd9='assists';_0x3045af=this['ApplyUnlockHelpTextCondition'](_0x3045af,_0x36ebbb,_0x22cf71,_0x3d8dd9);}if(_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x1f5)])){const _0x44a636=Number(RegExp['$1']),_0x5ad93d=$gameParty['gold'](),_0x4514b9=_0x237e17(0x2a8),_0x248fbd=TextManager[_0x237e17(0x2d6)];_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x44a636,_0x5ad93d,_0x4514b9,_0x248fbd);}{const _0x590b6b=_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0xc4)]);if(_0x590b6b)for(const _0x46175c of _0x590b6b){_0x46175c[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0xc4)]);const _0x8e24d=String(RegExp['$1']),_0x3e8992=Number(RegExp['$2']),_0x2af7e5=/^\d+$/['test'](_0x8e24d),_0x244d5a=_0x2af7e5?Number(_0x8e24d):DataManager['getItemIdWithName'](_0x8e24d),_0x403db9=$dataItems[_0x244d5a];if(!_0x403db9)continue;const _0x2c4df5=$gameParty['numItems'](_0x403db9),_0x13f3f6=_0x237e17(0x2c5),_0x1dbeb4=_0x237e17(0x98)['format'](_0x403db9[_0x237e17(0x1b2)],_0x403db9['name']);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x3e8992,_0x2c4df5,_0x13f3f6,_0x1dbeb4);}}{const _0x5c17eb=_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0xf5)]);if(_0x5c17eb)for(const _0x55f399 of _0x5c17eb){_0x55f399[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0xf5)]);const _0x33a544=String(RegExp['$1']),_0x33a438=Number(RegExp['$2']),_0x56c2eb=/^\d+$/[_0x237e17(0x17e)](_0x33a544),_0x4a1671=_0x56c2eb?Number(_0x33a544):DataManager[_0x237e17(0x149)](_0x33a544),_0x521e15=$dataWeapons[_0x4a1671];if(!_0x521e15)continue;const _0x17f5d0=$gameParty[_0x237e17(0xdc)](_0x521e15),_0x2acb91='haveWeapon',_0x34c9f5='\x5cI[%1]%2'[_0x237e17(0x15a)](_0x521e15[_0x237e17(0x1b2)],_0x521e15[_0x237e17(0xd4)]);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x33a438,_0x17f5d0,_0x2acb91,_0x34c9f5);}}{const _0x412aa6=_0xb72fdf['match'](_0x44ae9d[_0x237e17(0x22d)]);if(_0x412aa6)for(const _0x502dba of _0x412aa6){_0x502dba[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x22d)]);const _0x565315=String(RegExp['$1']),_0x44c05a=Number(RegExp['$2']),_0x4b000a=/^\d+$/[_0x237e17(0x17e)](_0x565315),_0x130d46=_0x4b000a?Number(_0x565315):DataManager['getArmorIdWithName'](_0x565315),_0x15f825=$dataArmors[_0x130d46];if(!_0x15f825)continue;const _0x42ca6b=$gameParty[_0x237e17(0xdc)](_0x15f825),_0x4f5a8e='haveArmor',_0x3201dc=_0x237e17(0x98)[_0x237e17(0x15a)](_0x15f825[_0x237e17(0x1b2)],_0x15f825['name']);_0x3045af=this['ApplyUnlockHelpTextCondition'](_0x3045af,_0x44c05a,_0x42ca6b,_0x4f5a8e,_0x3201dc);}}{const _0x33f208=_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x220)]);if(_0x33f208)for(const _0x2e61f2 of _0x33f208){_0x2e61f2[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x220)]);let _0x1795da=String(RegExp['$1'])[_0x237e17(0x166)]()[_0x237e17(0x112)]();const _0x1fb6ef=Number(RegExp['$2']);if(_0x1795da===_0x237e17(0x121))_0x1795da='MAXHP';if(_0x1795da===_0x237e17(0x28c))_0x1795da=_0x237e17(0x142);if(_0x1795da==='MMP')_0x1795da=_0x237e17(0x30b);if(_0x1795da===_0x237e17(0x176))_0x1795da=_0x237e17(0x30b);const _0x2cdaac=[_0x237e17(0x142),_0x237e17(0x30b),'ATK',_0x237e17(0xc6),_0x237e17(0x232),'MDF',_0x237e17(0x181),_0x237e17(0xb0)],_0x2395cf=_0x2cdaac[_0x237e17(0x123)](_0x1795da),_0x3fd00f=_0x3d842f['param'](_0x2395cf),_0xac4d1=_0x237e17(0x2c8),_0x1863d4=TextManager[_0x237e17(0x12b)](_0x1795da);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x1fb6ef,_0x3fd00f,_0xac4d1,_0x1863d4);}}{const _0xff6c52=_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0x195)]);if(_0xff6c52)for(const _0x14d4c7 of _0xff6c52){_0x14d4c7[_0x237e17(0xae)](_0x44ae9d['LearnHaveXParam']);let _0x4a9c92=String(RegExp['$1'])[_0x237e17(0x166)]()['trim']();const _0x1ee8a8=Number(RegExp['$2']),_0x441008=[_0x237e17(0x2b9),_0x237e17(0x332),_0x237e17(0x1b3),'CEV',_0x237e17(0x144),_0x237e17(0xb7),_0x237e17(0x12a),'HRG',_0x237e17(0x2f9),_0x237e17(0x2cf)],_0x3dfb9e=_0x441008['indexOf'](_0x4a9c92),_0x20fcc9=Math[_0x237e17(0xc3)](_0x3d842f[_0x237e17(0x19c)](_0x3dfb9e)*0x64),_0x51a8dd=_0x237e17(0x247),_0x1e7496=TextManager[_0x237e17(0x12b)](_0x4a9c92);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x1ee8a8,_0x20fcc9,_0x51a8dd,_0x1e7496);}}{const _0x573b08=_0xb72fdf[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0xd2)]);if(_0x573b08)for(const _0x4e4354 of _0x573b08){_0x4e4354[_0x237e17(0xae)](_0x44ae9d[_0x237e17(0xd2)]);let _0x3ccae2=String(RegExp['$1'])['toUpperCase']()[_0x237e17(0x112)]();const _0x5d83f7=Number(RegExp['$2']),_0x378d21=[_0x237e17(0x1e8),_0x237e17(0x263),'REC','PHA',_0x237e17(0x292),_0x237e17(0x9e),_0x237e17(0xde),_0x237e17(0x2ad),'FDR',_0x237e17(0x22b)],_0x3030e1=_0x378d21[_0x237e17(0x123)](_0x3ccae2),_0x5bbe4e=Math[_0x237e17(0xc3)](_0x3d842f[_0x237e17(0x96)](_0x3030e1)*0x64),_0x2347b8='haveSParam',_0x571d27=TextManager[_0x237e17(0x12b)](_0x3ccae2);_0x3045af=this[_0x237e17(0x140)](_0x3045af,_0x5d83f7,_0x5bbe4e,_0x2347b8,_0x571d27);}}}_0x3045af===''&&(_0x3045af=_0x461790['helpNothing']);let _0xc01aaf=_0x461790[_0x237e17(0x187)][_0x237e17(0x15a)](_0x3045af);if(_0x461790[_0x237e17(0x330)]&&Imported[_0x237e17(0x216)])_0xc01aaf=_0x237e17(0x173)+_0xc01aaf;return _0xc01aaf;},VisuMZ[_0x31b406(0x258)]['ApplyUnlockHelpTextCondition']=function(_0x4da898,_0x4339cf,_0x55788e,_0x1c6f60,_0xc16cd9){const _0x89d990=_0x31b406,_0x2c2be5=TextManager['EQUIP_MEDAL_SYS'],_0x5942a2=_0x2c2be5[_0x89d990(0x1be)];_0x55788e=_0x55788e['clamp'](0x0,_0x4339cf);let _0x5cabe2='';const _0x3fc218=_0x5942a2[_0x89d990(0x1e7)],_0x499c1b=_0x5942a2[_0x89d990(0x30c)]['format'](_0x55788e,_0x4339cf),_0x2c3c88=_0x5942a2[_0x89d990(0x270)][_0x89d990(0x15a)](Math[_0x89d990(0xc3)](_0x55788e/_0x4339cf*0x64));_0x5cabe2=_0x3fc218[_0x89d990(0x15a)](_0x499c1b[_0x89d990(0x2d4)]>_0x5942a2[_0x89d990(0xb2)]?_0x2c3c88:_0x499c1b);if(_0x4da898[_0x89d990(0x2d4)]>0x0){_0x4da898+=_0x2c2be5[_0x89d990(0x18d)];if(_0x2c2be5[_0x89d990(0x291)])_0x4da898+='\x20';}return _0x55788e>=_0x4339cf&&(_0x4da898+=_0x89d990(0x13d)[_0x89d990(0x15a)](_0x2c2be5[_0x89d990(0x24d)]),_0x5cabe2=_0x5942a2[_0x89d990(0xa3)]),_0x4da898+=(_0x5942a2[_0x1c6f60]||_0x89d990(0x24b))['format'](_0x4339cf,_0x5cabe2,_0xc16cd9||''),_0x55788e>=_0x4339cf&&(_0x4da898+=_0x89d990(0x308)),_0x4da898;},Window_EquipMedalList[_0x31b406(0x161)][_0x31b406(0x1fd)]=function(_0x57077d){const _0x5859f3=_0x31b406;this[_0x5859f3(0x2a2)]=_0x57077d;},Window_EquipMedalList[_0x31b406(0x161)]['updateStatusWindow']=function(){const _0x41c706=_0x31b406;if(!this[_0x41c706(0x21c)])return;if(!this[_0x41c706(0xd6)])return;const _0x2f7e9b=this[_0x41c706(0x276)]();if(!_0x2f7e9b)return;const _0x31fa03=JsonEx[_0x41c706(0x2b8)](this[_0x41c706(0x21c)]);_0x31fa03[_0x41c706(0x91)]=!![],_0x31fa03['isEquippableMedalEquipped'](_0x2f7e9b)?_0x31fa03[_0x41c706(0x122)](_0x2f7e9b):_0x31fa03[_0x41c706(0x25c)](_0x2f7e9b),this[_0x41c706(0x2a2)][_0x41c706(0x175)](_0x31fa03);},Window_EquipMedalList[_0x31b406(0x161)][_0x31b406(0x2d1)]=function(){const _0x328696=_0x31b406;!this[_0x328696(0x114)]()&&Window_Selectable[_0x328696(0x161)]['processCursorMoveModernControls'][_0x328696(0x210)](this);},Window_EquipMedalList['prototype'][_0x31b406(0x114)]=function(){const _0x2dcf40=_0x31b406;if(!this[_0x2dcf40(0xd6)])return![];if(SceneManager[_0x2dcf40(0x255)]['constructor']!==Scene_Equip)return![];if(this[_0x2dcf40(0xf2)]())return this['playCursorSound'](),Input[_0x2dcf40(0x205)](),SceneManager['_scene'][_0x2dcf40(0x1c4)](),![];return![];},Window_EquipMedalList[_0x31b406(0x161)][_0x31b406(0xf2)]=function(){const _0x286cb3=_0x31b406;if(this[_0x286cb3(0x26b)]()!==0x0)return![];return Input['isTriggered']('up');};function _0x814f(_0x31308c,_0x2616d4){const _0x2a2ee2=_0x2a2e();return _0x814f=function(_0x814f25,_0x44a684){_0x814f25=_0x814f25-0x8d;let _0x472401=_0x2a2ee2[_0x814f25];return _0x472401;},_0x814f(_0x31308c,_0x2616d4);}function Window_EquipMedalStatus(){const _0x3fcc09=_0x31b406;this[_0x3fcc09(0xce)](...arguments);}Window_EquipMedalStatus[_0x31b406(0x161)]=Object['create'](Window_Base['prototype']),Window_EquipMedalStatus[_0x31b406(0x161)]['constructor']=Window_EquipMedalStatus,Window_EquipMedalStatus[_0x31b406(0x2fd)]={'showWindow':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0x172)]??!![],'bgType':VisuMZ[_0x31b406(0x258)][_0x31b406(0x326)][_0x31b406(0xb6)][_0x31b406(0x283)]??0x0,'maxCapacityTextColor':VisuMZ[_0x31b406(0x258)]['Settings']['Window'][_0x31b406(0x1d1)]??0x11},Window_EquipMedalStatus[_0x31b406(0x161)][_0x31b406(0xce)]=function(_0x4f9ff4){const _0x221d47=_0x31b406;Window_Base[_0x221d47(0x161)][_0x221d47(0xce)][_0x221d47(0x210)](this,_0x4f9ff4),this[_0x221d47(0x11c)]();},Window_EquipMedalStatus['prototype']['setActor']=function(_0x34e2ba){const _0x38b4b5=_0x31b406;this['_actor']!==_0x34e2ba&&(this[_0x38b4b5(0x21c)]=_0x34e2ba,this['refresh']());},Window_EquipMedalStatus['prototype'][_0x31b406(0xea)]=function(){const _0x2d31d0=_0x31b406;this[_0x2d31d0(0x2fb)][_0x2d31d0(0x205)](),this['resetFontSettings']();{const _0x4cf23a=TextManager[_0x2d31d0(0x30a)][_0x2d31d0(0x132)];this[_0x2d31d0(0x310)](ColorManager[_0x2d31d0(0x2de)]());const _0x475615=this[_0x2d31d0(0x1d2)]-this[_0x2d31d0(0x1d0)]()*0x2;this[_0x2d31d0(0x168)](_0x4cf23a,this[_0x2d31d0(0x1d0)](),0x0,_0x475615,_0x2d31d0(0x138)),this['resetFontSettings']();}if(this[_0x2d31d0(0x21c)]){const _0x501d05=TextManager['EQUIP_MEDAL_SYS'][_0x2d31d0(0x17a)];let _0xccf1aa=this[_0x2d31d0(0x21c)]['equipMedalCurrentCapacity'](),_0x3bd6bc=this[_0x2d31d0(0x21c)][_0x2d31d0(0x171)]();const _0x3b5e14=Window_EquipMedalStatus['SETTINGS']['maxCapacityTextColor']||0x0;_0x3b5e14>0x0&&_0xccf1aa>=_0x3bd6bc&&(_0xccf1aa=_0x2d31d0(0x25f)[_0x2d31d0(0x15a)](_0x3b5e14,_0xccf1aa),_0x3bd6bc=_0x2d31d0(0x25f)[_0x2d31d0(0x15a)](_0x3b5e14,_0x3bd6bc));const _0xb86c38=_0x2d31d0(0x212)['format'](ImageManager[_0x2d31d0(0x30a)][_0x2d31d0(0x132)]),_0xe1c684=_0x501d05[_0x2d31d0(0x15a)](_0xccf1aa,_0x3bd6bc,_0xb86c38),_0x360003=this[_0x2d31d0(0x150)](_0xe1c684)[_0x2d31d0(0x102)],_0x224266=this['innerWidth']-this[_0x2d31d0(0x1d0)]()-_0x360003;this[_0x2d31d0(0x162)](_0xe1c684,_0x224266,0x0);}},VisuMZ[_0x31b406(0x258)]['DEBUG']=![];function _0x2a2e(){const _0x2dd1df=['equipMedalDisplayFmt','LearnCountDeaths','Window_EquipCommand_playOkSound','LearnLevel','textSizeEx','expTextOffsetX','callUpdateHelp','gold','attackTimes','deactivate','LearnItemUsage','getEquipMedalEvolutionID','_data','magicalSkill','format','_cache_actor_getLearnableEquippableMedals','evade','drawEquippableMedalMask','updateStatusWindow','skillUse','setActor','prototype','drawTextEx','IsMasked','_elementIDs','Inflict\x20%3\x20%1\x20Times\x20%2','toUpperCase','Perform\x20%1\x20Total\x20Battle\x20Healing\x20%2','drawText','visible','playEquip','version','updateEquipMedalActionState','sortItems','nickname','equipAdjustHpMp','Medal\x20Slots','equipMedalMaxCapacity','showStatusWindow','<WordWrap>','Fight\x20%1\x20Battles\x20%2','setTempActor','MAX\x20MP','isUseModernControls','selectLast','drawItem','capacityFmt','text','reduce','arePageButtonsEnabled','test','expParams','Scene_Equip_arePageButtonsEnabled','AGI','checkLearnNewEquipMedals','LearnBattles','makeRewards','isPhysical','onBattleEnd','helpFmt','Game_System_initialize','height','Scene_Equip_commandEquip','haveWeapon','capacityFormula','helpSpacer','GlobalAddUnlearnedMedal','lineHeight','critical','getLearnEquippedMedalRawIDs','showUnlearned','expFormula','EVAL','LearnHaveXParam','add','branchLearnEquipMedals','3SwgfNH','ActorIDs','drawIcon','CapacityIcon','xparam','kda','Evolution','ActorLearnMedal','selectSymbol','Game_Battler_processBattleCoreJS','LearnSTypeUsage','ARRAYEVAL','Game_Action_apply','GlobalLearnMedal','itemLineRect','totalHealTake','SeparateUnlearned','CEV','isOpen','Inflict\x20%1\x20Total\x20Battle\x20Damage\x20%2','BranchLearn','_equippedMedals','MaskItalics','createCommandWindow','isEquipMedalCommandVisible','Unlearned','iconIndex','CRI','atype','143550GmeSDS','SortByIDandPriority','%1%2','Defeat\x20%1\x20%3\x20Enemies\x20%2','expGaugeWidthModifier','minCapacity','atypeId','stype','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','helpDescFmt','updateHelp','critDeal','hasEquipMedalEvolution','Game_Action_applyGlobal','_equipMedalExp','onEquipMedalCancel','ATK','separateUnlearned','skillTypes','shouldCommandWindowExist','CheckOverCapacity','hideFormerEvolution','LearnEscapes','deadMembers','getEquipMedalLearnProgress','1056sZnhtZ','resetFontSettings','itemPadding','MaxCapacityColor','innerWidth','Game_Actor_paramPlus','LearnDefeats','addUnlearnedEquippableMedal','description','setHandler','sortBy','Medals','CapacityFormula','drawGauge','gainRewardsEquipMedalExp','expGaugeStyleType','equipMedalCurrentCapacity','skill','476TtDiFF','learnShowTextPopup','LearnTotal','playOkSound','MaskLetter','MedalGaugeColor1','costNumber','progressFmt','TGR','makeCommandList','allMembers','guardTimes','playCursorSound','all','LearnableEquipMedalsB','every','CustomLearnCondText','2970098sEzKVs','BattleManager_displayRewards','refreshActor','Deal','LearnHaveGold','isCurrentItemEnabled','LearnTotalHealDeal','makeItemList','Scene_Equip_createCommandWindow','maxExpTextFormat','displayRewards','Deal\x20%1\x20Critical\x20Hits\x20%2','setStatusWindow','updateForEquipMedals','%1/%2','haveArmor','equipColor','kills','addEquipMedalExpToMedal','forceSelect','clear','_getEquipMedalEvolutionData','helpNothing','GlobalForgetMedal','note','_subject','colSpacing','guard','AlreadyEquipMedals','itemUse','_lastCurrentSymbol','call','DefaultCost','\x5cI[%1]','isGuard','drawEquippableMedal','5531232reIoBh','VisuMZ_1_MessageCore','traitObjects','getEquipMedalEvolutionTarget','ShowCosts','max','escape','_actor','HideLearnedAnyID','470GtWKhi','drawVisualStyleGauge','LearnHaveParam','status','stypeId','Receive\x20%1\x20Total\x20Battle\x20Healing\x20%2','onDatabaseLoaded','abs','setBackgroundType','checkOverCapacityExp','command','some','Reach\x20%1%\x20%3\x20%2','EXR','LearnTotalDmgDeal','LearnHaveArmor','makeRewardsEquipMedalExp','expTextOffsetY','ActorForgetMedal','ShowCost1','MAT','defaultExpGaugeColor1','ShowCostNumber','hasTraitSet','apply','STR','equipMedalExpRate','Window_EquipCommand_isUseModernControls','equippedMedals','General','equipMedalExpName','Window_EquipCommand_processDownCursorSpecialCheckModernControls','updateEquipMedalKda','defaultShowEquipMedal','bind','getEquipMedalName','VisuMZ_1_ElementStatusCore','availableItems','_level','EvolutionNext','gaugeBackColor','haveXParam','replace','equipMedalExpVisible','critTake','---','_bypassUnequipHiddenMedal','helpMeetConditionColor','updateEquipMedalActionResult','level','haveSParam','Possess\x20×%1%3\x20%2','isPlaytest','defaultCost','traitSlayer','_scene','isEnabled','getLearnableEquippableMedalsFromObj','EquipMedalSys','LearnElementTake','show','changeExp','processEquipMedal','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Take','\x5cC[%1]%2\x5cC[0]','9640daTtoK','VisuMZ_2_EquipSetBonuses','gainItem','GRD','equipMedalExpTotal','showWindow','hitIndex','select','Scene_Equip_create','HasExpGauge','LearnTotalDmgTake','index','actorId','RegExp','Use\x20%1\x20Skills\x20%2','Scene_Boot_onDatabaseLoaded','progressPercent','isEquippableMedalEquipped','62552aVOlgx','Game_Battler_onBattleEnd','addEquipMedalCommand','icon','item','VisualGaugeStyles','stateTake','LearnStateTake','updateEquipMedalBattleDefeat','updateEquipMedalHpChanges','equipMedalExp','releaseOverEquipMedalCapacity','setHelpWindowItem','Kill\x20%1\x20Enemies\x20%2','removeUnlearnedEquippableMedal','currentSymbol','Scene_Equip_shouldCommandWindowExist','StatusWindow_BgType','setupInitialAlreadyEquippedMedals','CommandIcon','_commandWindow','executeDamage','updateEquipMedalActionElement','BattleVictoryJS','VisuMZ_1_SkillsStatesCore','ActorAddUnlearnedMedal','MAX\x20HP','LearnCountAssists','constructor','params','ShowVictory','helpSpacing','MCR','LearnGuardTimes','getEquipMedalEvolutionData','availableUnlearnedEquippableMedals','ShowCost0','Show','Imported.VisuMZ_1_ElementStatusCore\x20needs\x20to\x20be\x20updated\x20','EquipIcon','showCostAny','SystemShowMedalCommand','isClearCommandAdded','EnemyMedalExp','LearnMissTimes','CoreEngine','ConvertParams','%1/%2%3','_statusWindow','\x5c}MASTERED!\x5c{','_medalStatusWindow','isCertainHit','isLearnedEquippedMedal','user','haveGold','defeat','addState','LearnStateDeal','Game_Actor_setup','MDR','getElementIdWithName','EscapeSuccessJS','bgType','iconWidth','medalStatusWindowRect','parameters','MedalGaugeColor2','Inflict\x20%3\x20Damage\x20%1\x20Times\x20%2','learnEquippedMedal','currentClass','makeDeepCopy','HIT','deselect','maskIcon','_equipMedalLearnProgress','MaskUnlearned','getStypeIdWithName','getEquipMedalEvolutionEXP','setupInitialLearnedEquippableMedals','isActor','Die\x20%1\x20Times\x20%2','setup','CostFmt','haveItem','_equipMedalWindow','getEquipMedalIcon','haveParam','EquipName','LearnMagSkill','deathStateId','initEquipMedalSystem','_getEquipMedalCost','CustomEquipText','TRG','attackElements','processCursorMoveModernControls','LearnDealCritHitTimes','calcWindowHeight','length','Use\x20%1\x20Items\x20%2','currencyUnit','resetTextColor','parse','AliveActors','FUNC','damage','drawEquippableMedalCost','Use\x20%1\x20Certain\x20Hit\x20Skills\x20%2','systemColor','CommandName','getLearnableEquippableMedalIDs','_doubleTouch','Game_Battler_addState','isStateAffected','VisuMZ_1_ItemsEquipsCore\x20needs\x20to\x20be\x20updated\x20','MedalExpFormula','equipMedalWindowRect','LearnPhysSkill','isAlive','_maxValueSegment','Game_Actor_refresh','ARRAYNUM','rewardMessageFmt','isArmor','EquipMedalList_BgType','iconHeight','healDeal','concat','elementTake','cancel','exp','maxCols','_helpWindow','VisuMZ_3_VisualGaugeStyles','certainHitSkill','MRG','deaths','contents','includes','SETTINGS','Reach\x20%1\x20%3\x20%2','ARRAYSTR','LearnAttackTimes','equipMedalExpIcon','updateEquipMedalBattleEscape','create','hasEquipMedalCapacityFor','ActorAddMedalExp','battleMembers','expTextFormat','\x5cC[0]','_equipSetBonusTooltipWindow','EQUIP_MEDAL_SYS','MAXMP','progressFraction','Window_EquipCommand_onTouchSelectModernControls','Dmg','registerCommand','changeTextColor','MinimumCost','remove','LearnEvadeTimes','pop','gainHp','dmgDeal','LearnableEquipMedalsA','VisuMZ_0_CoreEngine','MaskIcon','BranchLearnable','physicalSkill','activate','Window_EquipCommand_makeCommandList','releaseUnequippableItems','_stateIDs','LearnDefeatTrait','learnings','Receive\x20%3\x20Damage\x20%1\x20Times\x20%2','targetID','PHA','inBattle','Settings','ItemsEquipsCore','BattleManager_makeRewards','missed','Receive\x20%3\x20%1\x20Times\x20%2','join','Scene_Equip_onActorChange','addWindow','EquipCost','commandEquip','helpWordWrap','getColor','EVA','clamp','changePaintOpacity','Scene_Equip_refreshActor','unlearned','split','TextPopupFmt','maskItalics','Game_Party_gainItem','_tempActor','(Progress\x20%1)','gainEquipMedalExp','forgetEquippedMedal','exit','sparam','_rewards','\x5cI[%1]%2','equipMedalColor','MedalExpRate','getStateIdWithName','GlobalRemoveUnlearnedMedal','stypeUse','TCR','_cache_class_getLearnableEquippableMedals','JSON','assists','victory','progressComplete','param','isBattleMember','LearnAutoEquip','10231515TJQMsA','maxItems','getUnlearnedEquippedMedalRawIDs','createEquipMedalWindow','LearnCertSkill','ExpGaugeColor2','%1\x20%2\x20acquired!','match','in\x20order\x20for\x20VisuMZ_2_EquipMedalSys\x20to\x20work.','LUK','setText','progressLengthLimit','availableLearnedEquippableMedals','addEquipMedalExp','VisuMZ_1_ItemsEquipsCore','Window','MRF','MakeUnlockHelpText','initialLevel','_cache','MedalFullGauge','isSkill','CapacityText','ActorRemoveUnlearnedMedal','Miss\x20%1\x20Times\x20%2','dmg','attack','clone','round','LearnHaveItem','Game_Action_executeDamage','DEF','commandStyle','battle','MedalEXP','%1%','_equipMedalSysReleaseUnequippables','unequipHiddenMedals','getArmorIdWithName','initialize','Growth','%2%1','STRUCT','LearnHaveSParam','totalHealDeal','name','updateEquipMedalLearnProgress','active','Game_Actor_traitObjects','elements','Use\x20%1\x20Physical\x20Skills\x20%2','onTouchSelectModernControls','\x5c}Unacquired\x5c{','numItems','CheckCompatibility','PDR','DefaultShowCommand','paramPlus','maskLetter','MedalIDs','HideLearnedAllID','Receive\x20%1\x20Total\x20Battle\x20Damage\x20%2','createMedalStatusWindow','MDF','LinkLearn','_learnableEquippableMedals','sort','refresh','actor','VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20','HasFullExpGauge','updateEquipMedalBattleVictory','LearnElementDeal','getEquipMedalExp','LearnVictory','allowCommandWindowCursorUp','IsMedalHidden','updateEquipMedalTraitSlayer','LearnHaveWeapon','log','ExpGaugeColor1','LearnSkillUsage','134552iJbEwf','dmgTake','_getEquipMedalName','stateDeal','Window_EquipCommand_isEquipCommandAdded','applyGlobal','isAttack','drawEquippableMedalExpGauge','MMP','width','GetExpGaugeColor2','defaultExpGaugeColor2','showRewards','_equipMedalSys_SceneSkill','setEquipMedalCommandVisible','expPercentDigits','MaskName','LearnAny','ARRAYFUNC','showCost1','ShowUnlearned','Game_Actor_releaseUnequippableItems','LearnTotalHealTake','push','FDR','trim','_slotWindow','processCursorSpecialCheckModernControls','healTake','itemAt','HideLearnedAnyName','-----','maskUnlearned','EquippedColor','MeetsLearnConditions','hide','hideEquipSetBonusTooltipWindow','escapes','_getEquipMedalIcon','Vocab','MHP','removeEquipMedal','indexOf','Possess\x20%3\x20×%1\x20%2','subject','getEquipMedalCost','drawUnlearnedText','Game_Party_initialize','GetExpGaugeColor1','CNT','paramName','Math.ceil(user.level\x20/\x2010)','GetElements','_stypeIDs','filter','elementDeal','processDownCursorSpecialCheckModernControls','capacity','ShowTextPopup','actionTimes','fontItalic','totalDmgTake','Window_EquipCommand_callUpdateHelp','left','Evade\x20%1\x20Times\x20%2','costFmt','branchLearnableEquipMedals','onActorChange','\x5cC[%1]','textPopupFmt','_learnedEquippableMedals','ApplyUnlockHelpTextCondition','equipMedals','MAXHP','Game_Battler_gainHp','MEV','isOptimizeCommandAdded','LearnCountKills','commandEquipMedals','enemy','getWeaponIdWithName','miss','map'];_0x2a2e=function(){return _0x2dd1df;};return _0x2a2e();}