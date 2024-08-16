//=============================================================================
// VisuStella MZ - Visual State Effects
// VisuMZ_3_VisualStateEffect.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_VisualStateEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualStateEffects = VisuMZ.VisualStateEffects || {};
VisuMZ.VisualStateEffects.version = 1.21;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.21] [VisualStateEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_State_Effects_VisuStella_MZ
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
 * States, buffs, and debuffs are amongst one of the most important aspects of
 * the battle system. Therefore, relaying proper information to the player is
 * extremely important. RPG Maker MZ does relay information to the player about
 * the various states and effects, but it is far from perfect. This plugin
 * allows you to add more detail and visual effects regarding states to relay
 * proper data.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Choose to display State Overlays and State Icons over actors and enemies.
 * * Create text popups for Buffs, Debuffs, and States along with full control
 *   over their color, flash, and flash duration.
 * * Play animations upon receiving or removing Buffs, Debuffs, and States.
 * * States can have repeating animations.
 * * States can change the tone of a sprite.
 * * States can freeze a sprite in place.
 * * States can adjust the opacity of a battler to make them semi-transparent.
 * * Hovering effects that can be visibly applied to trait objects.
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
 * - VisuMZ_0_CoreEngine
 * - VisuMZ_1_BattleCore
 * - VisuMZ_1_SkillsStatesCore
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
 * State Motion Index and State Overlay Index
 * 
 * - The original RPG Maker MZ functions have been overwritten because they
 * only display the motions and overlays of the highest priority state even if
 * it does not have any motions while lower priority states with motions and
 * overlays will be hidden.
 * 
 * - The changed code will now take the highest priority state motion index (or
 * a custom one defined by a notetag) and the highest priority state overlay
 * index to show those instead.
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
 * === State-Related Notetags ===
 * 
 * The following notetags are made for states.
 * 
 * ---
 * 
 * <Hide State Popup>
 *
 * - Used for: State Notetags
 * - Don't display any of the popups for this state.
 * 
 * ---
 * 
 * <State Popup>
 *  text color: c
 *  flash color: r, g, b, a
 *  flash duration: d
 * </State Popup>
 *
 * - Used for: State Notetags
 * - Changes the settings of the state popup from the defaults declared by the
 *   Plugin Parameters. Each of the settings are optional. If the lines do not
 *   appear in the notetag, then the default values from the Plugin Parameters
 *   will be used instead.
 * - Replace 'c' #rrggbb for custom colors or insert a regular number for text
 *   colors from the Window Skin.
 * - Replace 'r', 'g', 'b', 'a' with number values ranging from 0 to 255 for
 *   'red', 'green', 'blue', and 'alpha' to determine the flash color.
 * - Replace 'd' with a number representing the amount of frames you want the
 *   flash duration to last for.
 * 
 * Examples:
 * 
 * <State Popup>
 *  text color: 3
 * </State Popup>
 * 
 * <State Popup>
 *  text color: #abcdef
 *  flash color: 255, 255, 0, 160
 * </State Popup>
 * 
 * <State Popup>
 *  flash color: 0, 255, 255, 160
 *  flash duration: 90
 * </State Popup>
 * 
 * <State Popup>
 *  flash duration: 777
 * </State Popup>
 * 
 * ---
 * 
 * <Add Animation: x>
 *
 * - Used for: State Notetags
 * - Determines the battle animation to play when the state is applied.
 * - Replace 'x' with a number representing the ID of the animation you wish
 *   to play when the state is added.
 * - This does not work for states without icons nor the death state.
 * 
 * ---
 * 
 * <Erase Animation: x>
 *
 * - Used for: State Notetags
 * - Determines the battle animation to play when the state is removed.
 * - Replace 'x' with a number representing the ID of the animation you wish
 *   to play when the state is removed.
 * - This does not work for states without icons nor the death state.
 * 
 * ---
 * 
 * <Repeat Animation: x>
 *
 * - Used for: State Notetags
 * - Determines the battle animation to play in intervals when the battler is
 *   affected by it.
 * - Replace 'x' with a number representing the ID of the animation you wish
 *   to play on repeat while the battler is affected by the state.
 * - The battler will cycle through the various repeating state animations
 *   available through states.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * - WARNING: Abusing Repeat Animations can jeopardize game performance.
 * 
 * ---
 * 
 * <Repeat Animation Cycle: x>
 *
 * - Used for: State Notetags
 * - Determines the cycle/duration of this specific state's repeating animation
 *   if you do not wish to use the plugin parameter's default setting.
 * - Replace 'x' with the number of frames you wish to play this animation for
 *   before moving onto the next animation.
 * - WARNING: Lower numbers can jeopardize game performance.
 * 
 * ---
 * 
 * <Custom Overlay: filename>
 * 
 * - Used for: State Notetags
 * - For those who don't want to use the img/system/ folder's "States" image
 *   file and want something custom, this notetag will do exactly that.
 * - Custom state overlays will follow similar dimensions to the original
 *   States image:
 *   - Pixel Width: 768
 *   - Pixel Height: 96
 *   - Total Frames: 8
 *   - If you want to use different sizes, we recommend you look into Effekseer
 *     custom animations with the <Repeat Animation: x> notetag instead.
 * - Replace 'filename' with the filename of the image you want to use as
 *   a state overlay found in the game project's img/system/ folder.
 *   - Do not include the file extension.
 * 
 * ---
 * 
 * <State Motion: Walk>
 * <State Motion: Wait>
 * <State Motion: Chant>
 * <State Motion: Guard>
 * <State Motion: Damage>
 * <State Motion: Evade>
 * <State Motion: Thrust>
 * <State Motion: Swing>
 * <State Motion: Missile>
 * <State Motion: Skill>
 * <State Motion: Spell>
 * <State Motion: Item>
 * <State Motion: Escape>
 * <State Motion: Victory>
 * <State Motion: Dying>
 * <State Motion: Abnormal>
 * <State Motion: Sleep>
 * <State Motion: Dead>
 *
 * - Used for: State Notetags
 * - Lets you determine what kind of state motion to play when the battler is
 *   affected by the state.
 * - The battler will only play the highest priority state motion.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 * 
 * <State Motion Lock>
 * 
 * - Used for: State Notetags
 * - If an actor or animated sideview enemy is affected by a state that has
 *   this notetag, their animation will be locked in place while this state
 *   is in effect.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 * 
 * <State Tone: red, green, blue, gray>
 *
 * - Used for: State Notetags
 * - Tints the battler with a tone determined by the state.
 * - Replace 'red', 'green', 'blue' with a value between -255 and 255.
 * - Replace 'gray' with a value between 0 and 255.
 * - If a battler has multiple states with tones, then the state with the
 *   highest priority value is applied to the battler.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 * 
 * <Visual Opacity: x>
 * <Visual Opacity: x%>
 * 
 * - Used for: State Notetags
 * - When a battler is affected by this state, change the opacity of their main
 *   battler sprite to 'x' or 'x%'.
 * - Replace 'x' with a number from 0 to 255 representing the opacity level.
 * - Replace 'x%' with a percentage from 0% to 100% representing the opacity.
 * - This does NOT affect UI elements like the HP Gauges, State Icons, or their
 *   positioning markers such as the battler's shadow as this is only to used
 *   to represent a change in their opacity through a state.
 * - To change the whole battler's opacity including everything from the UI
 *   elements, State Icons, etc., use the Action Sequence Plugin Command to
 *   visually alter the whole opacity level instead.
 * - The Visual Opacity level will compound with the opacity level adjusted by
 *   the Action Sequence Plugin Command. Keep this in mind when using both of
 *   them together.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 * 
 * <Visual Rainbow: +x>
 * <Visual Rainbow: -x>
 * 
 * - Used for: State Notetags
 * - When a battler is affected by this state, the battler has a colorful
 *   rainbow shifting effect.
 * - Replace 'x' with a number representing how fast the colors shift for the
 *   battler. Higher numbers are faster. Lower numbers are slower.
 * - This does NOT affect UI elements like the HP Gauges, State Icons, or their
 *   positioning markers such as the battler's shadow as this is only to used
 *   to represent a change in their opacity through a state.
 * - The Visual Rainbow shift will be stacked on top of any battlers/enemies
 *   that already have a hue change.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 *
 * === Hover-Related Notetags ===
 * 
 * ---
 * 
 * <Visual Hover Effect>
 *  Base: x
 *  Speed: y
 *  Rate: z
 *  Death: case
 * </Visual Hover Effect>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Creates a hover effect when tied to a trait object.
 * - The 'base' value determines the minimum height above the ground for the
 *   hover effect. Replace 'x' with a number representing the pixel height.
 * - The 'speed' value determines the flat adjustment towards the wobbling
 *   change. Replace 'y' with a number representing the speed. Lower values
 *   move faster while higher values move slower.
 * - The 'rate' determines the fluctuation rate when the hover effect bobbles
 *   up and down. Replace 'z' with a number representing the fluctuation rate.
 * - The 'death' scenario lets you decide if you want the hovering battler to
 *   remain hovering if they're dead or fall down to the floor. Replace 'case'
 *   with 'Hover' or 'Floor'.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * Example:
 * 
 * <Visual Hover Effect>
 *  Base: 100
 *  Speed: 20
 *  Rate: 5.0
 *  Death: floor
 * </Visual Hover Effect>
 * 
 * ---
 *
 * === Breathing-Related Notetags ===
 * 
 * The following notetags are purely EXPERIMENTAL. There is a high likelihood
 * of unintended graphical glitches when using them. Use them at your own risk.
 * 
 * ---
 * 
 * <Visual Breathing Effect>
 *  Speed: x
 *  Speed X: x
 *  Speed Y: x
 *  
 *  Rate: x.y
 *  Rate X: x.y
 *  Rate Y: x.y
 * 
 *  HP Link: On
 *  HP Link: Off
 * </Visual Breathing Effect>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Creates a hover effect when tied to a trait object.
 * - The 'speed' value determines how long each cycle is.
 *   - When using 'Speed', this will apply to both 'Speed X' and 'Speed Y'
 *   - 'Speed X' refers to the horizontal breathing cycle
 *   - 'Speed Y' refers to the vertical breathing cycle
 *   - If not declared, both will default to a value of '10'
 * - The 'rate' value determines how exaggerated the breathing distortion looks
 *   for the affected target.
 *   - When using 'Rate', this will apply to both 'Rate X' and 'Rate Y
 *   - 'Rate X' refers to horizontal breathing distortion effect
 *   - 'Rate Y' refers to vertical breathing distortion effect
 *   - If not declared, 'Rate X' will default to 0.000 and 'Rate Y' to 0.020.
 * - HP Link refers to the breathing speed relative to the target's HP rate
 *   where the lower the rate, the slower the speed becomes.
 *   - 'On' means it's enabled.
 *   - 'Off' means it's disabled.
 *   - If not declared, this will default to 'OFF'
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * Examples:
 * 
 * <Visual Breathing Effect>
 *  Speed: 10
 *  Rate Y: 0.050
 *  HP Link: On
 * </Visual Breathing Effect>
 * 
 * <Visual Breathing Effect>
 *  Speed X: 15
 *  Speed Y: 10
 *  Rate X: 0.01
 *  Rate Y: 0.050
 * </Visual Breathing Effect>
 * 
 * ---
 * 
 * <No Breathing>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Removes any breathing effects for the affected target.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for Visual State Effects.
 *
 * ---
 *
 * Actors
 * 
 *   Show State Overlay?:
 *   - Show state overlays over an actor's head?
 * 
 *   Show State Icons?:
 *   - Show state icons over an actor's head?
 *
 * ---
 *
 * Enemies
 * 
 *   Show State Overlay?:
 *   - Show state overlays over an enemy's head?
 * 
 *   Show State Icons?:
 *   - Show state icons over an enemy's head?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Buff/Debuff Settings Settings
 * ============================================================================
 *
 * Buff/Debuff settings for Visual State Effects.
 *
 * ---
 *
 * Popups
 * 
 *   Show Popups?:
 *   - Show Buff/Debuff Popups when applied?
 * 
 *     Buff Format:
 *     - How do you want the buff text to appear?
 *     - %1 - Parameter Name
 * 
 *       Text Color:
 *       - Use #rrggbb for custom colors or regular numbers for text colors
 *         from the Window Skin.
 * 
 *       Flash Color:
 *       - Adjust the popup's flash color.
 *       - Format: [red, green, blue, alpha]
 * 
 *       Flash Duration:
 *       - What is the frame duration of the flash effect?
 * 
 *     Debuff Format:
 *     - How do you want the debuff text to appear?
 *     - %1 - Parameter Name
 * 
 *       Text Color:
 *       - Use #rrggbb for custom colors or regular numbers for text colors
 *         from the Window Skin.
 * 
 *       Flash Color:
 *       - Adjust the popup's flash color.
 *       - Format: [red, green, blue, alpha]
 * 
 *       Flash Duration:
 *       - What is the frame duration of the flash effect?
 * 
 * ---
 * 
 * Animations
 * 
 *   Show Animations?:
 *   - Show Buff/Debuff Animations when applied?
 * 
 *     Mirror Animations?:
 *     - Mirror animations for buffs/debuffs?
 * 
 *     Mute Animations?:
 *     - Mute animations for buffs/debuffs?
 * 
 * ---
 * 
 * Buff Animations
 * 
 *   MaxHP Buff:
 *   MaxMP Buff:
 *   ATK Buff:
 *   DEF Buff:
 *   MAT Buff:
 *   MDF Buff:
 *   AGI Buff:
 *   LUK Buff:
 *   - Animation played when applying specific Buffs.
 * 
 * Debuff Animations
 * 
 *   MaxHP Debuff:
 *   MaxMP Debuff:
 *   ATK Debuff:
 *   DEF Debuff:
 *   MAT Debuff:
 *   MDF Debuff:
 *   AGI Debuff:
 *   LUK Debuff:
 *   - Animation played when applying specific Debuff.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: State Settings
 * ============================================================================
 *
 * Default State settings for Visual State Effects.
 *
 * ---
 *
 * Popups
 * 
 *   Show Popups?:
 *   - Show States Popups when applied and removed?
 * 
 *     Allow Duplicates?:
 *     - Allow duplicate state popups to appear with the same graphical frame?
 * 
 *     Battle End Popups?:
 *     - Show State Popup removal on battle end for battle state removal?
 * 
 *     Add State Format:
 *     - How do you want added states to appear?
 *     - %1 - State Name
 * 
 *     Erase State Format:
 *     - How do you want erased states to appear?
 *     - %1 - State Name
 * 
 *     Default Text Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *       Match Turn Count?:
 *       - Match turn count color by default?
 * 
 *     Flash Color:
 *     - Adjust the popup's default flash color.
 *     - Format: [red, green, blue, alpha]
 * 
 *       Flash Duration:
 *       - What is the frame duration of the default flash effect?
 *
 * ---
 *
 * State Animations
 * 
 *   Add/Erase Animations
 * 
 *     Mirror Animations?:
 *     - Mirror animations for states?
 * 
 *     Mute Animations?:
 *     - Mute animations for states?
 * 
 *   Repeating Animations
 * 
 *     Cycle Time:
 *     - The amount of frames to wait before each animation cycle.
 *     - WARNING: Lower numbers can jeopardize game performance.
 * 
 *     Mirror Animations?:
 *     - Mirror repeating animations for states by default?
 * 
 *     Mute Animations?:
 *     - Mute repeating animations for states by default?
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
 * Version 1.21: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > State Settings > Battle End Popups?
 * **** Show State Popup removal on battle end for battle state removal?
 * 
 * Version 1.20: June 13, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > State Settings > State Popups > Allow Duplicates?
 * **** Allow duplicate state popups to appear with the same graphical frame?
 * 
 * Version 1.19: March 16, 2023
 * * Compatibility Update!
 * ** Plugin is now updated for the recent changes made with the
 *    VisuMZ_2_DragonbonesUnion plugin.
 * 
 * Version 1.18: October 13, 2022
 * * Compatibility Update!
 * ** Plugin should be more compatible with VisuMZ_2_DragonbonesUnion.
 * 
 * Version 1.17: September 29, 2022
 * * Bug Fixes!
 * ** Filename has been shortened from VisuMZ_3_VisualStateEffects.js to
 *    VisuMZ_3_VisualStateEffect.js due to deployment reasons. For some mobile
 *    devices, keeping the name as long as VisuMZ_3_VisualStateEffects.js
 *    causes problems, but VisuMZ_3_VisualStateEffect.js is fine. Take note of
 *    this while you are updating.
 * 
 * Version 1.16: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New state notetag added by Irina: <Custom Overlay: filename>
 * *** For those who don't want to use the img/system/ folder's "States" image
 *     file and want something custom, this notetag will do exactly that.
 * *** Custom state overlays will follow similar dimensions to the original
 *     States image: Pixel Width of 768, Pixel Height of 96, Total Frames of 8.
 * *** If you want to use different sizes, we recommend you look into Effekseer
 *     custom animations with the <Repeat Animation: x> notetag instead.
 * 
 * Version 1.15: February 17, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: July 2, 2021
 * * Feature Updates!
 * ** When a battler's sprite opacity is zero, repeating animations are hidden
 *    along with them. Update made by Arisu.
 * 
 * Version 1.13: June 18, 2021
 * * Bug Fixes!
 * ** Repeating animations no longer play on invisible enemies or dead enemies
 *    through passive state effects. Fix made by Arisu.
 * 
 * Version 1.12: June 11, 2021
 * * Documentation Update!
 * ** Added warnings for the following notetags by Irina:
 * *** <Repeat Animation: x>
 * *** <State Motion: x>
 * *** <State Motion Lock>
 * *** <Visual Opacity: x>
 * *** <Visual Rainbow: +/-x>
 * *** <Visual Hover Effect>
 * *** <Visual Breathing Effect>
 * **** NOTE: Using this with Passive State Conditions will make this effect
 *      update at the next battler refresh cycle. This is due to the effect
 *      being cached in order to prevent lag and overloading the engine.
 * 
 * Version 1.11: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina:
 * *** <Visual Breathing Effect>
 * *** <No Breathing>
 * **** Enables/disables breathing effects for your actors and/or enemies.
 *      Refer to the documentation for more details on how to set it up.
 * **** These are EXPERIMENTAL notetags. This means that these effects have the
 *      possibility of creating graphical glitches when used. Use at your own
 *      risk as these are not perfected features.
 * 
 * Version 1.10: January 1, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Yanfly.
 * *** <Visual Rainbow: +x> and <Visual Rainbow: -x>
 * 
 * Version 1.09: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Yanfly.
 * *** <Visual Opacity: x> and <Visual Opacity: x%>
 * 
 * Version 1.08: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Requires updated Core Engine. Fix made by Yanfly.
 * 
 * Version 1.07: November 22, 2020
 * * Bug Fixes!
 * ** <State Motion: x> now works for sideview enemies. Keep in mind the state
 *    motion does not apply to the active battler during the Input phase. Fix
 *    made by Yanfly.
 * 
 * Version 1.06: November 8, 2020
 * * Bug Fixes!
 * ** <Add Animation: x> and <Erase Animation: x> notetags now work properly.
 *    Fix by Arisu.
 * 
 * Version 1.05: November 1, 2020
 * * Feature Update!
 * ** Upon dying, state removal popups are no longer shown to prevent massive
 *    clutter of the screen. Update by Irina.
 * 
 * Version 1.04: October 25, 2020
 * * Bug Fixes!
 * ** Zooming in should no longer display faint outlines around state sprites.
 *    Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility with the Battle Core's new <Battler Sprite Grounded>
 *    notetag. Added by Irina.
 * 
 * Version 1.03: October 11, 2020
 * * Bug Fixes!
 * ** Motion Locked Battlers at the start of battle no longer show their entire
 *    sprite sheet. Fix made by Arisu.
 * 
 * Version 1.02: September 13, 2020
 * * Compatibility Update
 * ** Added compatibility with Battle Core's newest update for the new
 *    distortion effects.
 * 
 * Version 1.01: September 6, 2020
 * * Compatibility Update
 * ** Added compatibility with Battle Core's newest update for the
 *    <Battle UI Offset: +x, +y> notetags. Update made by Yanfly.
 *
 * Version 1.00: September 2, 2020
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
 * @param VisualStateEffects
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
 * @desc General settings for Visual State Effects.
 * @default {"Actors":"","ActorOverlay:eval":"true","ActorStateIcon:eval":"true","Enemies":"","EnemyOverlay:eval":"true","EnemyStateIcon:eval":"true"}
 *
 * @param BuffDebuff:struct
 * @text Buff/Debuff Settings
 * @type struct<BuffDebuff>
 * @desc Buff/Debuff settings for Visual State Effects.
 * @default {"ShowPopups:eval":"true","BuffPopupFmt:str":"%1▲","BuffTextColor:str":"24","BuffFlashColor:eval":"[0, 255, 0, 160]","BuffFlashDuration:num":"60","DebuffPopupFmt:str":"%1▼","DebuffTextColor:str":"27","DebuffFlashColor:eval":"[255, 0, 0, 160]","DebuffFlashDuration:num":"60","ShowAnimations:eval":"true","AnimationMirror:eval":"false","AnimationMute:eval":"false","BuffAnimations":"","Buff0Animation:num":"52","Buff1Animation:num":"53","Buff2Animation:num":"52","Buff3Animation:num":"52","Buff4Animation:num":"53","Buff5Animation:num":"53","Buff6Animation:num":"51","Buff7Animation:num":"51","DebuffAnimations":"","Debuff0Animation:num":"55","Debuff1Animation:num":"56","Debuff2Animation:num":"55","Debuff3Animation:num":"55","Debuff4Animation:num":"56","Debuff5Animation:num":"56","Debuff6Animation:num":"54","Debuff7Animation:num":"54"}
 *
 * @param State:struct
 * @text State Defaults
 * @type struct<State>
 * @desc Default State settings for Visual State Effects.
 * @default {"ShowPopups:eval":"true","AddPopupFmt:str":"+%1","ErasePopupFmt:str":"-%1","TextColor:str":"0","MatchTurnCountColor:eval":"true","FlashColor:eval":"[0, 0, 0, 0]","FlashDuration:num":"60","StateAnimations":"","AddEraseAnimations":"","AnimationMirror:eval":"false","AnimationMute:eval":"false","RepeatingAnimations":"","CycleTime:num":"300","RepeatMirror:eval":"false","RepeatMute:eval":"true"}
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
 * @param Actors
 *
 * @param ActorOverlay:eval
 * @text Show State Overlay?
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state overlays over an actor's head?
 * @default true
 *
 * @param ActorStateIcon:eval
 * @text Show State Icons?
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state icons over an actor's head?
 * @default true
 *
 * @param Enemies
 *
 * @param EnemyOverlay:eval
 * @text Show State Overlay?
 * @parent Enemies
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state overlays over an enemy's head?
 * @default true
 *
 * @param EnemyStateIcon:eval
 * @text Show State Icons?
 * @parent Enemies
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state icons over an enemy's head?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Buff/Debuff Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BuffDebuff:
 *
 * @param ShowPopups:eval
 * @text Show Popups?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show Buff/Debuff Popups when applied?
 * @default true
 *
 * @param BuffPopupFmt:str
 * @text Buff Format
 * @parent ShowPopups:eval
 * @desc How do you want the buff text to appear?
 * %1 - Parameter Name
 * @default %1▲
 *
 * @param BuffTextColor:str
 * @text Text Color
 * @parent BuffPopupFmt:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param BuffFlashColor:eval
 * @text Flash Color
 * @parent BuffPopupFmt:str
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [0, 255, 0, 160]
 * 
 * @param BuffFlashDuration:num
 * @text Flash Duration
 * @parent BuffPopupFmt:str
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @param DebuffPopupFmt:str
 * @text Debuff Format
 * @parent ShowPopups:eval
 * @desc How do you want the debuff text to appear?
 * %1 - Parameter Name
 * @default %1▼
 *
 * @param DebuffTextColor:str
 * @text Text Color
 * @parent DebuffPopupFmt:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param DebuffFlashColor:eval
 * @text Flash Color
 * @parent DebuffPopupFmt:str
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @param DebuffFlashDuration:num
 * @text Flash Duration
 * @parent DebuffPopupFmt:str
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @param ShowAnimations:eval
 * @text Show Animations?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show Buff/Debuff Animations when applied?
 * @default true
 *
 * @param AnimationMirror:eval
 * @text Mirror Animations?
 * @parent ShowAnimations:eval
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror animations for buffs/debuffs?
 * @default false
 *
 * @param AnimationMute:eval
 * @text Mute Animations?
 * @parent ShowAnimations:eval
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute animations for buffs/debuffs?
 * @default false
 * 
 * @param BuffAnimations
 * @text Buff Animations
 * @parent ShowAnimations:eval
 *
 * @param Buff0Animation:num
 * @text MaxHP Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying MaxHP Buffs.
 * @default 52
 *
 * @param Buff1Animation:num
 * @text MaxMP Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying MaxMP Buffs.
 * @default 53
 *
 * @param Buff2Animation:num
 * @text ATK Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying ATK Buffs.
 * @default 52
 *
 * @param Buff3Animation:num
 * @text DEF Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying DEF Buffs.
 * @default 52
 *
 * @param Buff4Animation:num
 * @text MAT Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying MAT Buffs.
 * @default 53
 *
 * @param Buff5Animation:num
 * @text MDF Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying MDF Buffs.
 * @default 53
 *
 * @param Buff6Animation:num
 * @text AGI Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying AGI Buffs.
 * @default 51
 *
 * @param Buff7Animation:num
 * @text LUK Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying LUK Buffs.
 * @default 51
 * 
 * @param DebuffAnimations
 * @text Debuff Animations
 * @parent ShowAnimations:eval
 *
 * @param Debuff0Animation:num
 * @text MaxHP Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying MaxHP Debuffs.
 * @default 55
 *
 * @param Debuff1Animation:num
 * @text MaxMP Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying MaxMP Debuffs.
 * @default 56
 *
 * @param Debuff2Animation:num
 * @text ATK Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying ATK Debuffs.
 * @default 55
 *
 * @param Debuff3Animation:num
 * @text DEF Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying DEF Debuffs.
 * @default 55
 *
 * @param Debuff4Animation:num
 * @text MAT Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying MAT Debuffs.
 * @default 56
 *
 * @param Debuff5Animation:num
 * @text MDF Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying MDF Debuffs.
 * @default 56
 *
 * @param Debuff6Animation:num
 * @text AGI Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying AGI Debuffs.
 * @default 54
 *
 * @param Debuff7Animation:num
 * @text LUK Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying LUK Debuffs.
 * @default 54
 *
 */
/* ----------------------------------------------------------------------------
 * State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~State:
 *
 * @param ShowPopups:eval
 * @text Show Popups?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show States Popups when applied and removed?
 * @default true
 *
 * @param AllowDupes:eval
 * @text Allow Duplicates?
 * @parent ShowPopups:eval
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow duplicate state popups to appear with the same graphical frame?
 * @default false
 *
 * @param BattleEndPopup:eval
 * @text Battle End Popups?
 * @parent ShowPopups:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show State Popup removal on battle end for battle state removal?
 * @default true
 *
 * @param AddPopupFmt:str
 * @text Add State Format
 * @parent ShowPopups:eval
 * @desc How do you want added states to appear?
 * %1 - State Name
 * @default +%1
 *
 * @param ErasePopupFmt:str
 * @text Erase State Format
 * @parent ShowPopups:eval
 * @desc How do you want erased states to appear?
 * %1 - State Name
 * @default -%1
 *
 * @param TextColor:str
 * @text Default Text Color
 * @parent ShowPopups:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param MatchTurnCountColor:eval
 * @text Match Turn Count?
 * @parent TextColor:str
 * @type boolean
 * @on Match
 * @off Don't
 * @desc Match turn count color by default?
 * @default true
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent ShowPopups:eval
 * @desc Adjust the popup's default flash color.
 * Format: [red, green, blue, alpha]
 * @default [0, 0, 0, 0]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the default flash effect?
 * @default 60
 * 
 * @param StateAnimations
 * @text State Animations
 * 
 * @param AddEraseAnimations
 * @text Add/Erase Animations
 * @parent StateAnimations
 *
 * @param AnimationMirror:eval
 * @text Mirror Animations?
 * @parent AddEraseAnimations
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror animations for states?
 * @default false
 *
 * @param AnimationMute:eval
 * @text Mute Animations?
 * @parent AddEraseAnimations
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute animations for states?
 * @default false
 * 
 * @param RepeatingAnimations
 * @text Repeating Animations
 * @parent StateAnimations
 *
 * @param CycleTime:num
 * @text Cycle Time
 * @parent RepeatingAnimations
 * @type number
 * @min 1
 * @desc The amount of frames to wait before each animation cycle.
 * WARNING: Lower numbers can jeopardize game performance.
 * @default 300
 *
 * @param RepeatMirror:eval
 * @text Mirror Animations?
 * @parent RepeatingAnimations
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror repeating animations for states by default?
 * @default false
 *
 * @param RepeatMute:eval
 * @text Mute Animations?
 * @parent RepeatingAnimations
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute repeating animations for states by default?
 * @default true
 *
 */
//=============================================================================

function _0x5a95(){const _0x310380=['ARRAYNUM','_svBattlerSprite','states','Game_Battler_removeBattleStates','visualRepeatingStateAnimation','match','breathing','13295VWIWkB','createVisualStateRainbow','visualBattlerOpacity','JSON','isSceneBattle','_hoverRand','animation','updateVisualStateRainbow','floor','isAppeared','removeBattleStates','updateFrame','NUM','ShowPopups','format','round','update','hasDragonbonesBattler','157242coDlWQ','stateMotionLock','Buff','_actor','hoverData','refreshMotion','TextColor','setupVisualStateEffect','createVisualStateTone','rate','addChild','ShowAnimations','CycleTime','isActor','Sprite_Battler_extraPositionY','visualRepeatingStateAniCycle','createVisualBattlerOpacity','isInputting','Erase','extraPositionY','width','Add','Settings','loadBitmap','increaseBuff','Sprite_Actor_setBattler','hoverHeight','FlashColor','_dragonbonesSpriteContainer','Debuff','Sprite_Actor_createStateSprite','Game_BattlerBase_decreaseBuff','hpRate','randomInt','visualStateRainbow','_bitmapName','frameCount','2550JyGAci','isBattlerGrounded','updateVisualStateEffectsIcons','bitmap','ICON_BUFF_START','rateX','_stateMotionLocked','parse','noBreathing','textColor','battler','loadSystem','%1FlashColor','visualStateTone','call','Sprite_Battler_mainSpriteScaleY','updateRepeatingVisualStateAnimation','state-%1-%2-%3','deathHover','Sprite_Battler_initMembers','initVisualStateEffects','speedY','checkCacheKey','Sprite_Actor_refreshMotion','13626pahmlW','onLoadCustomOverlayBitmap','updateOpacity','VisuMZ_0_CoreEngine','Sprite_Battler_playDragonbonesMotion','battleUIOffsetX','_breathingRand','onLoadDefaultOverlayBitmap','battleUIOffsetY','filter','setupVisualBuffDebuffEffect','_hue','Sprite_Battler_mainSpriteScaleX','VisuMZ_1_BattleCore','Sprite_Actor_update','createVisualHoveringData','createStateIconSprite','_battler','AnimationMirror','getVisualRepeatingStateAnimation','setupStateAnimation','ICON_DEBUFF_START','constructor','split','38963749yPsrYT','isEnemy','_cache','AnimationMute','bind','setBattler','MatchTurnCountColor','EnemyOverlay','Sprite_Enemy_createStateIconSprite','clamp','speed','flashColor','min','4010808qFrxgB','initVisualHoverEffect','_die_bypass_visualStateEffects','note','description','mainSpriteScaleX','_noDoublePopups','addLoadListener','createVisualRepeatingStateAnimationCycle','_distortionSprite','getVisualRepeatingStateAnimationCycle','418410XUzLAn','_visualStateAnimationIndex','stateOverlayIndex','setupVisualStateEffectsPopup','setFrame','push','setColorTone','applyBreathingCalculations','ARRAYFUNC','Game_Battler_onAddState','isRepeatingVisualStateAnimationShown','Sprite_SvEnemy','hpLinked','VisuMZ_1_SkillsStatesCore','_hoverMinimum','string','getVisualStateTone','59646LlkjdJ','Sprite_Enemy_setBattler','applyBreathingScaleX','setupBuffDebuffPopup','32FORmRb','updateDragonbonesTimeScale','createVisualRepeatingStateAnimation','prototype','includes','Sprite_StateOverlay_updateFrame','some','refresh','%1%2Animation','FlashDuration','Game_BattlerBase_initMembers','setupIconTextPopup','status','setHue','createStateSprite','States','BattleEndPopup','%1PopupFmt','ActorOverlay','_visualStateAnimationRepeatDuration','breathingData','hover','AllowDupes','State','%1TextColor','_overlayIndex','mainSpriteScaleY','RepeatMirror','customizeStatePopup','getStateMotionLock','iconIndex','height','setup','random','VisualStateEffects','_dragonbones','onAddState','flashDuration','max','isActing','ARRAYSTRUCT','updateVisualStateEffects','updateDistortionOpacity','EVAL','Game_BattlerBase_increaseBuff','ConvertParams','exit','isAlive','Game_BattlerBase_refresh','Sprite_SvEnemy_refreshMotion','trim','Sprite_Battler_updateDragonbonesTimeScale','_stateIconSprite','decreaseBuff','Sprite_Enemy_update','rateY','IconSet','_customStateMotion','playDragonbonesMotion','Sprite_StateOverlay_loadBitmap','opacity','Sprite_Battler_updateOpacity','_stateSprite','FUNC','base','707uUXREm','speedX','getStateOverlayIndex','overlay','idle','Sprite_Actor_updateFrame','length','14ZhdHuC','_show_battleRemovalStates','cos','updateVisualStateTone','_mainSprite','name','die','RepeatMute','map','VisuMZ_2_DragonbonesUnion','Game_Battler_onRemoveState','traitObjects','stateMotionIndex','applyBreathingScaleY','Game_BattlerBase_die','General','updateCustomOverlayFrame','return\x200','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','updateVisualStateEffectsOverlay','initMembers','scale','isStateAffected','visible','motion','createVisualBreathingData','STRUCT','_loadingCustomOverlay'];_0x5a95=function(){return _0x310380;};return _0x5a95();}const _0x1bc529=_0xbe5f;(function(_0x390b65,_0x342cef){const _0xd7e3c3=_0xbe5f,_0x4fc6d6=_0x390b65();while(!![]){try{const _0xd2347f=parseInt(_0xd7e3c3(0x14f))/0x1*(-parseInt(_0xd7e3c3(0x184))/0x2)+parseInt(_0xd7e3c3(0xf2))/0x3+parseInt(_0xd7e3c3(0x107))/0x4*(-parseInt(_0xd7e3c3(0x172))/0x5)+-parseInt(_0xd7e3c3(0x103))/0x6*(parseInt(_0xd7e3c3(0x148))/0x7)+-parseInt(_0xd7e3c3(0xe7))/0x8+parseInt(_0xd7e3c3(0xc2))/0x9*(-parseInt(_0xd7e3c3(0xaa))/0xa)+parseInt(_0xd7e3c3(0xda))/0xb;if(_0xd2347f===_0x342cef)break;else _0x4fc6d6['push'](_0x4fc6d6['shift']());}catch(_0x4780c3){_0x4fc6d6['push'](_0x4fc6d6['shift']());}}}(_0x5a95,0xa3229));var label=_0x1bc529(0x129),tier=tier||0x0,dependencies=[_0x1bc529(0xc5),_0x1bc529(0xcf),_0x1bc529(0xff)],pluginData=$plugins[_0x1bc529(0xcb)](function(_0xdbbc36){const _0x3f7c47=_0x1bc529;return _0xdbbc36[_0x3f7c47(0x113)]&&_0xdbbc36[_0x3f7c47(0xeb)][_0x3f7c47(0x10b)]('['+label+']');})[0x0];function _0xbe5f(_0x47f6f2,_0x5ab8d7){const _0x5a95ce=_0x5a95();return _0xbe5f=function(_0xbe5f38,_0x265664){_0xbe5f38=_0xbe5f38-0x9c;let _0x185321=_0x5a95ce[_0xbe5f38];return _0x185321;},_0xbe5f(_0x47f6f2,_0x5ab8d7);}VisuMZ[label][_0x1bc529(0x19a)]=VisuMZ[label][_0x1bc529(0x19a)]||{},VisuMZ[_0x1bc529(0x134)]=function(_0x25ce83,_0x4816d7){const _0x299481=_0x1bc529;for(const _0x4ec1d4 in _0x4816d7){if(_0x4ec1d4['match'](/(.*):(.*)/i)){const _0x4bb768=String(RegExp['$1']),_0x4ef298=String(RegExp['$2'])['toUpperCase']()[_0x299481(0x139)]();let _0x3558c9,_0x5c4f98,_0x23d5b2;switch(_0x4ef298){case _0x299481(0x17e):_0x3558c9=_0x4816d7[_0x4ec1d4]!==''?Number(_0x4816d7[_0x4ec1d4]):0x0;break;case _0x299481(0x16b):_0x5c4f98=_0x4816d7[_0x4ec1d4]!==''?JSON[_0x299481(0xb1)](_0x4816d7[_0x4ec1d4]):[],_0x3558c9=_0x5c4f98[_0x299481(0x157)](_0x21e1e8=>Number(_0x21e1e8));break;case _0x299481(0x132):_0x3558c9=_0x4816d7[_0x4ec1d4]!==''?eval(_0x4816d7[_0x4ec1d4]):null;break;case'ARRAYEVAL':_0x5c4f98=_0x4816d7[_0x4ec1d4]!==''?JSON['parse'](_0x4816d7[_0x4ec1d4]):[],_0x3558c9=_0x5c4f98[_0x299481(0x157)](_0x26a26a=>eval(_0x26a26a));break;case _0x299481(0x175):_0x3558c9=_0x4816d7[_0x4ec1d4]!==''?JSON[_0x299481(0xb1)](_0x4816d7[_0x4ec1d4]):'';break;case'ARRAYJSON':_0x5c4f98=_0x4816d7[_0x4ec1d4]!==''?JSON[_0x299481(0xb1)](_0x4816d7[_0x4ec1d4]):[],_0x3558c9=_0x5c4f98['map'](_0x10b8a2=>JSON[_0x299481(0xb1)](_0x10b8a2));break;case _0x299481(0x146):_0x3558c9=_0x4816d7[_0x4ec1d4]!==''?new Function(JSON[_0x299481(0xb1)](_0x4816d7[_0x4ec1d4])):new Function(_0x299481(0x160));break;case _0x299481(0xfa):_0x5c4f98=_0x4816d7[_0x4ec1d4]!==''?JSON[_0x299481(0xb1)](_0x4816d7[_0x4ec1d4]):[],_0x3558c9=_0x5c4f98[_0x299481(0x157)](_0x43cee6=>new Function(JSON[_0x299481(0xb1)](_0x43cee6)));break;case'STR':_0x3558c9=_0x4816d7[_0x4ec1d4]!==''?String(_0x4816d7[_0x4ec1d4]):'';break;case'ARRAYSTR':_0x5c4f98=_0x4816d7[_0x4ec1d4]!==''?JSON[_0x299481(0xb1)](_0x4816d7[_0x4ec1d4]):[],_0x3558c9=_0x5c4f98[_0x299481(0x157)](_0x34c355=>String(_0x34c355));break;case _0x299481(0x169):_0x23d5b2=_0x4816d7[_0x4ec1d4]!==''?JSON[_0x299481(0xb1)](_0x4816d7[_0x4ec1d4]):{},_0x3558c9=VisuMZ[_0x299481(0x134)]({},_0x23d5b2);break;case _0x299481(0x12f):_0x5c4f98=_0x4816d7[_0x4ec1d4]!==''?JSON[_0x299481(0xb1)](_0x4816d7[_0x4ec1d4]):[],_0x3558c9=_0x5c4f98[_0x299481(0x157)](_0x13c4c8=>VisuMZ[_0x299481(0x134)]({},JSON[_0x299481(0xb1)](_0x13c4c8)));break;default:continue;}_0x25ce83[_0x4bb768]=_0x3558c9;}}return _0x25ce83;},(_0x19cb03=>{const _0x35eb8d=_0x1bc529,_0x1b305a=_0x19cb03[_0x35eb8d(0x154)];for(const _0x187f35 of dependencies){if(!Imported[_0x187f35]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x35eb8d(0x180)](_0x1b305a,_0x187f35)),SceneManager[_0x35eb8d(0x135)]();break;}}const _0x1b8eae=_0x19cb03[_0x35eb8d(0xeb)];if(_0x1b8eae[_0x35eb8d(0x170)](/\[Version[ ](.*?)\]/i)){const _0x54dab1=Number(RegExp['$1']);_0x54dab1!==VisuMZ[label]['version']&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x35eb8d(0x180)](_0x1b305a,_0x54dab1)),SceneManager['exit']());}if(_0x1b8eae[_0x35eb8d(0x170)](/\[Tier[ ](\d+)\]/i)){const _0x45cb98=Number(RegExp['$1']);_0x45cb98<tier?(alert(_0x35eb8d(0x161)['format'](_0x1b305a,_0x45cb98,tier)),SceneManager[_0x35eb8d(0x135)]()):tier=Math[_0x35eb8d(0x12d)](_0x45cb98,tier);}VisuMZ[_0x35eb8d(0x134)](VisuMZ[label][_0x35eb8d(0x19a)],_0x19cb03['parameters']);})(pluginData),VisuMZ[_0x1bc529(0x129)][_0x1bc529(0x111)]=Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x163)],Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x163)]=function(){const _0x238d45=_0x1bc529;this[_0x238d45(0xdc)]={},VisuMZ[_0x238d45(0x129)][_0x238d45(0x111)]['call'](this);},VisuMZ[_0x1bc529(0x129)][_0x1bc529(0x137)]=Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x10e)],Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x10e)]=function(){const _0x34451b=_0x1bc529;this[_0x34451b(0xdc)]={},VisuMZ[_0x34451b(0x129)]['Game_BattlerBase_refresh'][_0x34451b(0xb8)](this);},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0xc0)]=function(_0x9b5387){const _0x5d6823=_0x1bc529;return this[_0x5d6823(0xdc)]=this[_0x5d6823(0xdc)]||{},this[_0x5d6823(0xdc)][_0x9b5387]!==undefined;},VisuMZ['VisualStateEffects'][_0x1bc529(0x133)]=Game_BattlerBase['prototype'][_0x1bc529(0x9d)],Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x9d)]=function(_0x4458d9){const _0x3deeb4=_0x1bc529;VisuMZ[_0x3deeb4(0x129)][_0x3deeb4(0x133)][_0x3deeb4(0xb8)](this,_0x4458d9),this[_0x3deeb4(0xcc)](_0x4458d9,!![]);},VisuMZ['VisualStateEffects'][_0x1bc529(0xa4)]=Game_BattlerBase[_0x1bc529(0x10a)]['decreaseBuff'],Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x13c)]=function(_0x42b562){const _0x551024=_0x1bc529;VisuMZ[_0x551024(0x129)][_0x551024(0xa4)][_0x551024(0xb8)](this,_0x42b562),this['setupVisualBuffDebuffEffect'](_0x42b562,![]);},Game_BattlerBase['prototype']['setupVisualBuffDebuffEffect']=function(_0x13f202,_0x1ace0c){const _0x2d9664=_0x1bc529;if(!SceneManager['isSceneBattle']())return;if(!this[_0x2d9664(0xb4)]())return;const _0x56d1cb=VisuMZ[_0x2d9664(0x129)][_0x2d9664(0x19a)]['BuffDebuff'],_0x1baa1e=_0x1ace0c?_0x2d9664(0x186):'Debuff';_0x56d1cb[_0x2d9664(0x17f)]&&this[_0x2d9664(0xb4)]()[_0x2d9664(0x106)](_0x13f202,_0x1ace0c);if(_0x56d1cb[_0x2d9664(0x18f)]){const _0x1a3872=[this],_0x53f41f=_0x56d1cb[_0x2d9664(0x10f)[_0x2d9664(0x180)](_0x1baa1e,_0x13f202)]||0x0,_0x5e7889=_0x56d1cb[_0x2d9664(0xd4)],_0x227258=_0x56d1cb[_0x2d9664(0xdd)];$gameTemp['requestFauxAnimation'](_0x1a3872,_0x53f41f,_0x5e7889,_0x227258);}},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x18b)]=function(_0x445d70,_0x2fde49){const _0xe8936=_0x1bc529;if(!SceneManager[_0xe8936(0x176)]())return;if(_0x445d70===this['deathStateId']())return;if(_0x2fde49&&!this[_0xe8936(0x165)](_0x445d70))return;if(!_0x2fde49&&this[_0xe8936(0x165)](_0x445d70))return;if(!this[_0xe8936(0xb4)]())return;const _0x5dcb02=VisuMZ['VisualStateEffects'][_0xe8936(0x19a)][_0xe8936(0x11e)],_0x4dcf81=$dataStates[_0x445d70];if(!_0x4dcf81)return;_0x5dcb02[_0xe8936(0x17f)]&&!_0x4dcf81[_0xe8936(0xea)][_0xe8936(0x170)](/<HIDE STATE POPUP>/i)&&this[_0xe8936(0xb4)]()[_0xe8936(0xf5)](_0x445d70,_0x2fde49),VisuMZ[_0xe8936(0x129)][_0xe8936(0xd6)](this,_0x4dcf81,_0x2fde49);},VisuMZ['VisualStateEffects']['setupStateAnimation']=function(_0x378e1b,_0x571e9a,_0x539996){const _0x21a3f7=_0x1bc529,_0x584667=VisuMZ[_0x21a3f7(0x129)]['Settings'][_0x21a3f7(0x11e)],_0x335753=_0x584667[_0x21a3f7(0xd4)],_0x586fd2=_0x584667['AnimationMute'],_0x40f6b4=_0x571e9a[_0x21a3f7(0xea)];if(_0x539996&&_0x40f6b4[_0x21a3f7(0x170)](/(?:ADD|APPLY) ANIMATION:[ ](\d+)/i)){const _0x439915=Number(RegExp['$1']);$gameTemp['requestFauxAnimation']([_0x378e1b],_0x439915,_0x335753,_0x586fd2);}if(!_0x539996&&_0x40f6b4[_0x21a3f7(0x170)](/(?:ERASE|REMOVE) ANIMATION:[ ](\d+)/i)){const _0x4aa1d3=Number(RegExp['$1']);$gameTemp['requestFauxAnimation']([_0x378e1b],_0x4aa1d3,_0x335753,_0x586fd2);}},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0xd5)]=function(){const _0x3535f1=_0x1bc529,_0x26ccfc=_0x3535f1(0x16f);if(this[_0x3535f1(0xc0)](_0x26ccfc))return this[_0x3535f1(0xdc)][_0x26ccfc];return this[_0x3535f1(0xdc)][_0x26ccfc]=this['createVisualRepeatingStateAnimation'](),this[_0x3535f1(0xdc)][_0x26ccfc];},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x109)]=function(){const _0xee4c78=_0x1bc529;let _0x358218=[];for(const _0x3c2ffa of this[_0xee4c78(0x16d)]()){if(!_0x3c2ffa)continue;_0x3c2ffa[_0xee4c78(0xea)][_0xee4c78(0x170)](/<(?:REPEAT|REPEATING|CYCLE|STATE) ANIMATION:[ ](\d+)>/i)&&_0x358218[_0xee4c78(0xf7)](Number(RegExp['$1'])||0x0);}return _0x358218;},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0xf1)]=function(){const _0x195fe5=_0x1bc529,_0x5f93ed=_0x195fe5(0x193);if(this[_0x195fe5(0xc0)](_0x5f93ed))return this[_0x195fe5(0xdc)][_0x5f93ed];return this[_0x195fe5(0xdc)][_0x5f93ed]=this['createVisualRepeatingStateAnimationCycle'](),this['_cache'][_0x5f93ed];},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0xef)]=function(){const _0x18ca01=_0x1bc529;let _0x447c69=[];for(const _0x2ba33c of this[_0x18ca01(0x16d)]()){if(!_0x2ba33c)continue;_0x2ba33c[_0x18ca01(0xea)][_0x18ca01(0x170)](/<(?:REPEAT|REPEATING|CYCLE|STATE) ANIMATION CYCLE:[ ](\d+)>/i)?_0x447c69[_0x18ca01(0xf7)](Number(RegExp['$1'])||0x0):_0x447c69[_0x18ca01(0xf7)](VisuMZ[_0x18ca01(0x129)][_0x18ca01(0x19a)][_0x18ca01(0x11e)][_0x18ca01(0x190)]);}return _0x447c69;},Game_BattlerBase['prototype'][_0x1bc529(0x15b)]=function(){const _0x1c34c4=_0x1bc529,_0x41f2fc=_0x1c34c4(0x15b);if(this['checkCacheKey'](_0x41f2fc))return this[_0x1c34c4(0xdc)][_0x41f2fc];return this[_0x1c34c4(0xdc)][_0x41f2fc]=this['getStateMotionIndex'](),this['_cache'][_0x41f2fc];},Game_BattlerBase[_0x1bc529(0x10a)]['getStateMotionIndex']=function(){const _0x36cc99=_0x1bc529,_0x143ad4=this[_0x36cc99(0x16d)]();for(const _0x1e700c of _0x143ad4){if(!_0x1e700c)continue;if(_0x1e700c[_0x36cc99(0xea)]['match'](/<STATE MOTION:[ ](.*)>/i))return this[_0x36cc99(0x140)]=String(RegExp['$1'])['toLowerCase']()[_0x36cc99(0x139)](),0x4;else{if(_0x1e700c[_0x36cc99(0x167)]!==0x0)return _0x1e700c[_0x36cc99(0x167)];}}return 0x0;},Game_BattlerBase['prototype'][_0x1bc529(0x185)]=function(){const _0x455bbd=_0x1bc529,_0x54a6bd=_0x455bbd(0x185);if(this['checkCacheKey'](_0x54a6bd))return this[_0x455bbd(0xdc)][_0x54a6bd];return this[_0x455bbd(0xdc)][_0x54a6bd]=this[_0x455bbd(0x124)](),this[_0x455bbd(0xdc)][_0x54a6bd];},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x124)]=function(){const _0x4f30f2=_0x1bc529,_0x6e7f75=this[_0x4f30f2(0x16d)]();for(const _0xfa2236 of _0x6e7f75){if(!_0xfa2236)continue;if(_0xfa2236[_0x4f30f2(0xea)]['match'](/<STATE MOTION (?:LOCK|LOCKED)>/i))return!![];}return![];},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0xf4)]=function(){const _0x52e885=_0x1bc529,_0x2b4a5d='stateOverlayIndex';if(this[_0x52e885(0xc0)](_0x2b4a5d))return this[_0x52e885(0xdc)][_0x2b4a5d];return this['_cache'][_0x2b4a5d]=this[_0x52e885(0x14a)](),this['_cache'][_0x2b4a5d];},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x14a)]=function(){const _0x48341d=_0x1bc529,_0x342777=this[_0x48341d(0x16d)]();for(const _0x18c347 of _0x342777){if(!_0x18c347)continue;if(_0x18c347[_0x48341d(0xea)][_0x48341d(0x170)](/<CUSTOM OVERLAY:[ ](.*)>/i))return String(RegExp['$1']);if(_0x18c347[_0x48341d(0x14b)]!==0x0)return _0x18c347['overlay'];}return 0x0;},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x102)]=function(){const _0x4257e7=_0x1bc529,_0x171c84=_0x4257e7(0xb7);if(this[_0x4257e7(0xc0)](_0x171c84))return this[_0x4257e7(0xdc)][_0x171c84];return this['_cache'][_0x171c84]=this['createVisualStateTone'](),this[_0x4257e7(0xdc)][_0x171c84];},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x18c)]=function(){const _0x3c451e=_0x1bc529;for(const _0x59e93f of this[_0x3c451e(0x16d)]()){if(!_0x59e93f)continue;if(_0x59e93f[_0x3c451e(0xea)][_0x3c451e(0x170)](/<STATE TONE:[ ](.*)>/i)){let _0x16f216=String(RegExp['$1'])[_0x3c451e(0x139)]()[_0x3c451e(0xd9)](',')['map'](_0x3ff085=>Number(_0x3ff085)||0x0);while(_0x16f216[_0x3c451e(0x14e)]<0x4)_0x16f216[_0x3c451e(0xf7)](0x0);return _0x16f216[0x0]=_0x16f216[0x0][_0x3c451e(0xe3)](-0xff,0xff),_0x16f216[0x1]=_0x16f216[0x1][_0x3c451e(0xe3)](-0xff,0xff),_0x16f216[0x2]=_0x16f216[0x2][_0x3c451e(0xe3)](-0xff,0xff),_0x16f216[0x3]=_0x16f216[0x3][_0x3c451e(0xe3)](0x0,0xff),_0x16f216;}}return[0x0,0x0,0x0,0x0];},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x188)]=function(){const _0x489a53=_0x1bc529,_0x467780=_0x489a53(0x188);if(this[_0x489a53(0xc0)](_0x467780))return this[_0x489a53(0xdc)][_0x467780];return this[_0x489a53(0xdc)][_0x467780]=this['createVisualHoveringData'](),this[_0x489a53(0xdc)][_0x467780];},Game_BattlerBase['prototype'][_0x1bc529(0xd1)]=function(){const _0x4355e1=_0x1bc529,_0x58f673=/<VISUAL (?:HOVER|FLOAT) EFFECT>\s*([\s\S]*)\s*<\/VISUAL (?:HOVER|FLOAT) EFFECT>/i,_0x27b6a2={'hover':![],'base':0x64,'speed':0x14,'rate':0x5,'deathHover':![]};for(const _0xdd62ac of this[_0x4355e1(0x15a)]()){if(!_0xdd62ac)continue;if(_0xdd62ac[_0x4355e1(0xea)][_0x4355e1(0x170)](_0x58f673)){_0x27b6a2['hover']=!![];const _0x500a02=String(RegExp['$1']);_0x500a02[_0x4355e1(0x170)](/BASE:[ ](.*)/i)&&(_0x27b6a2[_0x4355e1(0x147)]=Number(RegExp['$1'])||0x0);_0x500a02['match'](/SPEED:[ ](.*)/i)&&(_0x27b6a2[_0x4355e1(0xe4)]=Number(RegExp['$1'])||0x0);_0x500a02['match'](/RATE:[ ](.*)/i)&&(_0x27b6a2[_0x4355e1(0x18d)]=Number(RegExp['$1'])||0x0);if(_0x500a02[_0x4355e1(0x170)](/DEATH: HOVER/i))_0x27b6a2[_0x4355e1(0xbc)]=!![];else _0x500a02[_0x4355e1(0x170)](/DEATH: FLOOR/i)&&(_0x27b6a2[_0x4355e1(0xbc)]=![]);break;}}return _0x27b6a2;},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0xb2)]=function(){const _0x234851=_0x1bc529,_0x4057ce=_0x234851(0xb2);if(this[_0x234851(0xc0)](_0x4057ce))return this[_0x234851(0xdc)][_0x4057ce];const _0x6c5fb9=this[_0x234851(0x15a)]();return this[_0x234851(0xdc)][_0x4057ce]=_0x6c5fb9[_0x234851(0x10d)](_0x7eb7b3=>_0x7eb7b3&&_0x7eb7b3[_0x234851(0xea)][_0x234851(0x170)](/<NO (?:BREATH|BREATHING)>/i)),this[_0x234851(0xdc)][_0x4057ce];},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x11b)]=function(){const _0x4d14f9=_0x1bc529,_0x210dde=_0x4d14f9(0x11b);if(this[_0x4d14f9(0xc0)](_0x210dde))return this[_0x4d14f9(0xdc)][_0x210dde];return this['_cache'][_0x210dde]=this[_0x4d14f9(0x168)](),this[_0x4d14f9(0xdc)][_0x210dde];},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x168)]=function(){const _0x5531b2=_0x1bc529,_0x2458c3=/<VISUAL (?:BREATH|BREATHING) EFFECT>\s*([\s\S]*)\s*<\/VISUAL (?:BREATH|BREATHING) EFFECT>/i,_0x254dec={'breathing':![],'speedX':0xa,'speedY':0xa,'rateX':0x0,'rateY':0.02,'hpLinked':![]};for(const _0x4b433c of this['traitObjects']()){if(!_0x4b433c)continue;if(_0x4b433c[_0x5531b2(0xea)][_0x5531b2(0x170)](_0x2458c3)){_0x254dec[_0x5531b2(0x171)]=!![];const _0x2ba982=String(RegExp['$1']);_0x2ba982['match'](/SPEED:[ ](.*)/i)&&(_0x254dec['speedX']=Number(RegExp['$1'])||0x0,_0x254dec['speedY']=Number(RegExp['$1'])||0x0);_0x2ba982[_0x5531b2(0x170)](/(?:SPEEDX|SPEED X):[ ](.*)/i)&&(_0x254dec[_0x5531b2(0x149)]=Number(RegExp['$1'])||0x0);_0x2ba982[_0x5531b2(0x170)](/(?:SPEEDY|SPEED Y):[ ](.*)/i)&&(_0x254dec['speedY']=Number(RegExp['$1'])||0x0);_0x2ba982['match'](/RATE:[ ](.*)/i)&&(_0x254dec[_0x5531b2(0xaf)]=Number(RegExp['$1'])||0x0,_0x254dec[_0x5531b2(0x13e)]=Number(RegExp['$1'])||0x0);_0x2ba982[_0x5531b2(0x170)](/(?:RATEX|RATE X):[ ](.*)/i)&&(_0x254dec['rateX']=Number(RegExp['$1'])||0x0);_0x2ba982[_0x5531b2(0x170)](/(?:RATEY|RATE Y):[ ](.*)/i)&&(_0x254dec[_0x5531b2(0x13e)]=Number(RegExp['$1'])||0x0);if(_0x2ba982[_0x5531b2(0x170)](/(?:HPLINK|HP LINK|HPLINKED|HP LINKED): ON/i))_0x254dec[_0x5531b2(0xfe)]=!![];else _0x2ba982[_0x5531b2(0x170)](/(?:HPLINK|HP LINK|HPLINKED|HP LINKED): OFF/i)&&(_0x254dec[_0x5531b2(0xfe)]=![]);break;}}return _0x254dec;},VisuMZ['VisualStateEffects']['Game_Battler_onAddState']=Game_Battler[_0x1bc529(0x10a)][_0x1bc529(0x12b)],Game_Battler[_0x1bc529(0x10a)][_0x1bc529(0x12b)]=function(_0x1d9c55){const _0x2934c7=_0x1bc529;VisuMZ['VisualStateEffects'][_0x2934c7(0xfb)][_0x2934c7(0xb8)](this,_0x1d9c55),this[_0x2934c7(0x18b)](_0x1d9c55,!![]);},VisuMZ[_0x1bc529(0x129)][_0x1bc529(0x15d)]=Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0x155)],Game_BattlerBase[_0x1bc529(0x10a)]['die']=function(){const _0x20d68e=_0x1bc529;this[_0x20d68e(0xe9)]=!![],VisuMZ[_0x20d68e(0x129)][_0x20d68e(0x15d)][_0x20d68e(0xb8)](this),this[_0x20d68e(0xe9)]=undefined;},VisuMZ[_0x1bc529(0x129)][_0x1bc529(0x159)]=Game_Battler[_0x1bc529(0x10a)]['onRemoveState'],Game_Battler[_0x1bc529(0x10a)]['onRemoveState']=function(_0x5b09e8){const _0x270c59=_0x1bc529;!this['_die_bypass_visualStateEffects']&&this[_0x270c59(0x150)]!==![]&&this[_0x270c59(0x18b)](_0x5b09e8,![]),VisuMZ['VisualStateEffects'][_0x270c59(0x159)][_0x270c59(0xb8)](this,_0x5b09e8);},VisuMZ[_0x1bc529(0x129)][_0x1bc529(0x16e)]=Game_Battler[_0x1bc529(0x10a)][_0x1bc529(0x17c)],Game_Battler['prototype'][_0x1bc529(0x17c)]=function(){const _0x2b8b64=_0x1bc529;this['_show_battleRemovalStates']=VisuMZ[_0x2b8b64(0x129)][_0x2b8b64(0x19a)][_0x2b8b64(0x11e)][_0x2b8b64(0x117)]??!![],VisuMZ[_0x2b8b64(0x129)][_0x2b8b64(0x16e)][_0x2b8b64(0xb8)](this),this['_show_battleRemovalStates']=undefined;},VisuMZ['VisualStateEffects'][_0x1bc529(0xbd)]=Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0x163)],Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0x163)]=function(){const _0x769048=_0x1bc529;VisuMZ[_0x769048(0x129)]['Sprite_Battler_initMembers'][_0x769048(0xb8)](this),this[_0x769048(0xbe)](),this[_0x769048(0xe8)]();},Sprite_Battler['prototype'][_0x1bc529(0xbe)]=function(){this['_visualStateAnimationRepeatDuration']=0x0,this['_visualStateAnimationIndex']=0x0;},Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0x106)]=function(_0x3b6a6e,_0x2d6570){const _0x30feb7=_0x1bc529,_0x220a2a=VisuMZ[_0x30feb7(0x129)][_0x30feb7(0x19a)]['BuffDebuff'],_0x2ce88b=_0x2d6570?_0x30feb7(0x186):_0x30feb7(0xa2),_0x36b117=_0x2d6570?Game_BattlerBase[_0x30feb7(0xae)]:Game_BattlerBase[_0x30feb7(0xd7)],_0x5e5ec1=_0x36b117+_0x3b6a6e,_0x5a73d2=TextManager['param'](_0x3b6a6e),_0x654298=_0x220a2a[_0x30feb7(0x118)[_0x30feb7(0x180)](_0x2ce88b)];if(_0x654298[_0x30feb7(0x14e)]<=0x0)return;let _0x3ffc51=_0x654298['format'](_0x5a73d2);const _0x256103={'textColor':_0x220a2a[_0x30feb7(0x11f)[_0x30feb7(0x180)](_0x2ce88b)]||0x0,'flashColor':_0x220a2a[_0x30feb7(0xb6)['format'](_0x2ce88b)]||[0x0,0x0,0x0,0x0],'flashDuration':_0x220a2a['%1FlashDuration'[_0x30feb7(0x180)](_0x2ce88b)]||0x0},_0x1f862f=ImageManager[_0x30feb7(0xb5)](_0x30feb7(0x13f));_0x1f862f[_0x30feb7(0xee)](this[_0x30feb7(0x112)][_0x30feb7(0xde)](this,_0x5e5ec1,_0x3ffc51,_0x256103));},Sprite_Battler['prototype'][_0x1bc529(0xf5)]=function(_0x227622,_0x32d7d2){const _0x4b9768=_0x1bc529,_0x446e04=VisuMZ['VisualStateEffects'][_0x4b9768(0x19a)][_0x4b9768(0x11e)],_0x4c161e=$dataStates[_0x227622];if(!_0x4c161e)return;const _0x247763=_0x32d7d2?_0x4b9768(0x199):_0x4b9768(0x196);this[_0x4b9768(0xed)]=this['_noDoublePopups']||{};if(!VisuMZ[_0x4b9768(0x129)][_0x4b9768(0x19a)][_0x4b9768(0x11e)][_0x4b9768(0x11d)]){const _0x695eba=_0x4b9768(0xbb)[_0x4b9768(0x180)](_0x227622,_0x247763,Graphics[_0x4b9768(0xa9)]);if(this['_noDoublePopups'][_0x695eba])return;this[_0x4b9768(0xed)][_0x695eba]=!![];}const _0x88cac6=_0x4c161e[_0x4b9768(0x125)];if(_0x88cac6<=0x0)return;const _0x38eb10=_0x446e04['%1PopupFmt'[_0x4b9768(0x180)](_0x247763)];if(_0x38eb10[_0x4b9768(0x14e)]<=0x0)return;let _0x3a2c20=_0x38eb10['format'](_0x4c161e[_0x4b9768(0x154)]);const _0x47c919={'textColor':_0x446e04[_0x4b9768(0x18a)]||0x0,'flashColor':_0x446e04[_0x4b9768(0xa0)]||[0x0,0x0,0x0,0x0],'flashDuration':_0x446e04[_0x4b9768(0x110)]||0x0};_0x446e04[_0x4b9768(0xe0)]&&(_0x47c919[_0x4b9768(0xb3)]=ColorManager['stateColor'](_0x4c161e));VisuMZ[_0x4b9768(0x129)][_0x4b9768(0x123)](_0x4c161e,_0x47c919);const _0x22ba47=ImageManager['loadSystem'](_0x4b9768(0x13f));_0x22ba47[_0x4b9768(0xee)](this[_0x4b9768(0x112)][_0x4b9768(0xde)](this,_0x88cac6,_0x3a2c20,_0x47c919));},VisuMZ[_0x1bc529(0x129)]['customizeStatePopup']=function(_0x35edce,_0x3131e2){const _0x3e7fa0=_0x1bc529,_0x3920a0=_0x35edce['note'];if(_0x3920a0[_0x3e7fa0(0x170)](/<STATE POPUP>\s*([\s\S]*)\s*<\/STATE POPUP>/i)){const _0xbd4386=String(RegExp['$1'])[_0x3e7fa0(0x139)]()[_0x3e7fa0(0xd9)](/[\r\n]+/);for(const _0x1e077e of _0xbd4386){_0x1e077e[_0x3e7fa0(0x170)](/(?:TEXT COLOR|TEXTCOLOR):[ ](.*)/i)&&(_0x3131e2[_0x3e7fa0(0xb3)]=String(RegExp['$1'])[_0x3e7fa0(0x139)]());if(_0x1e077e[_0x3e7fa0(0x170)](/(?:FLASH COLOR|FLASHCOLOR):[ ](.*)/i)){_0x3131e2[_0x3e7fa0(0xe5)]=String(RegExp['$1'])[_0x3e7fa0(0x139)]()['split'](',')['map'](_0x1a3ff2=>Number(_0x1a3ff2));while(_0x3131e2[_0x3e7fa0(0xe5)][_0x3e7fa0(0x14e)]<=0x4){_0x3131e2[_0x3e7fa0(0xe5)][_0x3e7fa0(0xf7)](0x0);};_0x3131e2[_0x3e7fa0(0x12c)]=_0x3131e2['flashDuration']||0x1;}_0x1e077e[_0x3e7fa0(0x170)](/(?:FLASH DURATION|FLASHDURATION):[ ](\d+)/i)&&(_0x3131e2[_0x3e7fa0(0x12c)]=Number(RegExp['$1']));}}},Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0xba)]=function(){const _0x4f47c1=_0x1bc529;if(!this[_0x4f47c1(0xfc)]())return;if(this[_0x4f47c1(0x11a)]>0x0){this[_0x4f47c1(0x11a)]--;return;}const _0x3829b8=this[_0x4f47c1(0xd3)][_0x4f47c1(0xd5)](),_0x11945e=this['_battler'][_0x4f47c1(0xf1)]();if(_0x3829b8['length']<=0x0)return;this[_0x4f47c1(0xf3)]>=_0x3829b8[_0x4f47c1(0x14e)]&&(this[_0x4f47c1(0xf3)]=0x0);const _0x5d3466=_0x3829b8[this['_visualStateAnimationIndex']],_0x54c8f5=VisuMZ[_0x4f47c1(0x129)][_0x4f47c1(0x19a)][_0x4f47c1(0x11e)],_0x4655e5=[this['_battler']],_0x254d7e=_0x54c8f5[_0x4f47c1(0x122)],_0xc2517d=_0x54c8f5[_0x4f47c1(0x156)];$gameTemp['requestFauxAnimation'](_0x4655e5,_0x5d3466,_0x254d7e,_0xc2517d);const _0x430ad8=_0x11945e[this['_visualStateAnimationIndex']]||_0x54c8f5[_0x4f47c1(0x190)];this[_0x4f47c1(0x11a)]=_0x430ad8,this[_0x4f47c1(0xf3)]++;},Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0xfc)]=function(){const _0x4935b4=_0x1bc529;if(!this[_0x4935b4(0xd3)])return![];if(!this['_battler']['isSpriteVisible']())return![];if(!this[_0x4935b4(0xd3)][_0x4935b4(0x17b)]())return![];if(!this[_0x4935b4(0xd3)][_0x4935b4(0x136)]())return![];if(this[_0x4935b4(0xd8)][_0x4935b4(0x154)]===_0x4935b4(0xfd))return![];if(this[_0x4935b4(0x143)]<=0x0)return![];return!![];},Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0x130)]=function(){const _0x1cecb2=_0x1bc529;this[_0x1cecb2(0x13b)]&&this[_0x1cecb2(0xac)](),this[_0x1cecb2(0x145)]&&this[_0x1cecb2(0x162)](),this[_0x1cecb2(0xba)](),this[_0x1cecb2(0x152)](),this['updateVisualStateRainbow']();},Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0xac)]=function(){const _0x5414e3=_0x1bc529;if(!this['_battler'])return;const _0x286b27=VisuMZ[_0x5414e3(0x129)]['Settings'][_0x5414e3(0x15e)],_0x12b011=this[_0x5414e3(0x13b)];_0x12b011[_0x5414e3(0x166)]=this['_battler'][_0x5414e3(0x191)]()?_0x286b27['ActorStateIcon']:_0x286b27['EnemyStateIcon'],this[_0x5414e3(0xd3)][_0x5414e3(0x191)]()&&(_0x12b011['x']=0x0,this[_0x5414e3(0xd3)][_0x5414e3(0xc7)]&&(_0x12b011['x']+=this[_0x5414e3(0xd3)]['battleUIOffsetX']()),_0x12b011['y']=-Math[_0x5414e3(0x181)]((this[_0x5414e3(0x126)]+0x28)*0.9),_0x12b011['y']<0x14-this['y']&&(_0x12b011['y']=0x14-this['y']),this[_0x5414e3(0xd3)]['battleUIOffsetY']&&(_0x12b011['y']+=this['_battler'][_0x5414e3(0xca)]()-0x4));},Sprite_Battler['prototype'][_0x1bc529(0x162)]=function(){const _0x18ed71=_0x1bc529;if(!this[_0x18ed71(0xd3)])return;const _0x1b0846=VisuMZ[_0x18ed71(0x129)][_0x18ed71(0x19a)][_0x18ed71(0x15e)],_0x1f3955=this['_stateSprite'];_0x1f3955[_0x18ed71(0x166)]=this[_0x18ed71(0xd3)][_0x18ed71(0x191)]()?_0x1b0846[_0x18ed71(0x119)]:_0x1b0846[_0x18ed71(0xe1)];this['_svBattlerSprite']&&(this[_0x18ed71(0x16c)][_0x18ed71(0x145)]['visible']=![]);this[_0x18ed71(0xd3)][_0x18ed71(0xdb)]()&&!this[_0x18ed71(0xd3)]['hasSvBattler']()&&(this[_0x18ed71(0x13b)]?_0x1f3955['y']=this[_0x18ed71(0x13b)]['y']+_0x1f3955[_0x18ed71(0x126)]:_0x1f3955['y']=-this[_0x18ed71(0x126)]+_0x1f3955['height']);;},Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0x152)]=function(){const _0x43a71a=_0x1bc529;if(!this[_0x43a71a(0xd3)])return;const _0x18df9b=this['visualStateToneTargetSprite'](),_0x2b4586=this[_0x43a71a(0xd3)][_0x43a71a(0x102)]();_0x18df9b&&_0x18df9b[_0x43a71a(0xf8)](_0x2b4586),this['_dragonbonesSpriteContainer']&&this[_0x43a71a(0xa1)][_0x43a71a(0xf8)](_0x2b4586);},Sprite_Battler[_0x1bc529(0x10a)]['visualStateToneTargetSprite']=function(){const _0x5aa5e2=_0x1bc529;return this[_0x5aa5e2(0x153)]||this;},VisuMZ[_0x1bc529(0x129)]['Sprite_Battler_updateDragonbonesTimeScale']=Sprite_Battler['prototype']['updateDragonbonesTimeScale'],Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0x108)]=function(){const _0x1c0b2a=_0x1bc529;if(!this[_0x1c0b2a(0x12a)])return;this['_battler'][_0x1c0b2a(0x185)]()?this[_0x1c0b2a(0x12a)][_0x1c0b2a(0x178)]['timeScale']=0x0:VisuMZ['VisualStateEffects'][_0x1c0b2a(0x13a)][_0x1c0b2a(0xb8)](this);},Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0xe8)]=function(){this['_hoverMinimum']=-0x1;},VisuMZ[_0x1bc529(0x129)][_0x1bc529(0x192)]=Sprite_Battler['prototype'][_0x1bc529(0x197)],Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0x197)]=function(){const _0x32ab6c=_0x1bc529;let _0x5754f8=VisuMZ[_0x32ab6c(0x129)][_0x32ab6c(0x192)]['call'](this);return _0x5754f8-=Math[_0x32ab6c(0x17a)](this[_0x32ab6c(0x9f)]()),_0x5754f8;},Sprite_Battler[_0x1bc529(0x10a)]['hoverHeight']=function(){const _0x502d8b=_0x1bc529;if(this['constructor']===Sprite_SvEnemy)return 0x0;if(!this[_0x502d8b(0xd3)])return 0x0;if(this[_0x502d8b(0xd3)]['isBattlerGrounded']&&this[_0x502d8b(0xd3)][_0x502d8b(0xab)]())return 0x0;const _0x1495bb=this[_0x502d8b(0xd3)][_0x502d8b(0x188)]();let _0x583eef=0x0;this[_0x502d8b(0x177)]=this[_0x502d8b(0x177)]||Math[_0x502d8b(0x17a)](Math[_0x502d8b(0x128)]()*0x2710);const _0x522e30=Graphics[_0x502d8b(0xa9)]+this['_hoverRand'],_0x5760d0=_0x1495bb[_0x502d8b(0xe4)],_0x2a33f5=_0x1495bb[_0x502d8b(0x18d)];let _0xe0a411=_0x1495bb[_0x502d8b(0x11c)];if(_0xe0a411&&this[_0x502d8b(0xd3)]['isDead']())_0xe0a411=_0x1495bb[_0x502d8b(0xbc)];if(_0xe0a411){_0x583eef+=Math[_0x502d8b(0x151)](_0x522e30/(_0x5760d0||0x1))*_0x2a33f5,_0x583eef+=_0x1495bb[_0x502d8b(0x147)];if(this[_0x502d8b(0x100)]<0x0)this['_hoverMinimum']=_0x583eef;const _0x1cf8b9=this[_0x502d8b(0x100)]+_0x5760d0/Math[_0x502d8b(0x12d)](0x1,_0x2a33f5**1.5);this[_0x502d8b(0x100)]=Math[_0x502d8b(0xe6)](_0x1cf8b9,_0x583eef);}else{const _0x523f0b=this['_hoverMinimum']-_0x5760d0/Math['max'](0x1,_0x2a33f5/0x2);this['_hoverMinimum']=Math[_0x502d8b(0x12d)](_0x523f0b,0x0);}return Math[_0x502d8b(0x12d)](0x0,this[_0x502d8b(0x100)]);},VisuMZ[_0x1bc529(0x129)][_0x1bc529(0x144)]=Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0xc4)],Sprite_Battler[_0x1bc529(0x10a)]['updateOpacity']=function(){const _0x1e66b0=_0x1bc529;VisuMZ[_0x1e66b0(0x129)][_0x1e66b0(0x144)][_0x1e66b0(0xb8)](this),this[_0x1e66b0(0x131)]();},Sprite_Battler['prototype'][_0x1bc529(0x131)]=function(){const _0x249b1b=_0x1bc529;if(!this[_0x249b1b(0xf0)])return;if(!this[_0x249b1b(0xd3)])return;if(this[_0x249b1b(0xd8)]===Sprite_SvEnemy)return;const _0x2dc168=this[_0x249b1b(0xd3)][_0x249b1b(0x174)]();if(this['_distortionSprite'][_0x249b1b(0x143)]!==_0x2dc168){const _0x203411=0x8;this[_0x249b1b(0xf0)]['opacity']>_0x2dc168?this[_0x249b1b(0xf0)][_0x249b1b(0x143)]=Math[_0x249b1b(0x12d)](this[_0x249b1b(0xf0)][_0x249b1b(0x143)]-_0x203411,_0x2dc168):this[_0x249b1b(0xf0)][_0x249b1b(0x143)]=Math[_0x249b1b(0xe6)](this[_0x249b1b(0xf0)][_0x249b1b(0x143)]+_0x203411,_0x2dc168);}},Game_BattlerBase['prototype'][_0x1bc529(0x174)]=function(){const _0x242c18=_0x1bc529,_0x5ab76e='visualBattlerOpacity';if(this[_0x242c18(0xc0)](_0x5ab76e))return this[_0x242c18(0xdc)][_0x5ab76e];return this[_0x242c18(0xdc)][_0x5ab76e]=this[_0x242c18(0x194)](),this[_0x242c18(0xdc)][_0x5ab76e];},Game_BattlerBase['prototype'][_0x1bc529(0x194)]=function(){const _0x363cc9=_0x1bc529;for(const _0xb09d29 of this[_0x363cc9(0x16d)]()){if(!_0xb09d29)continue;if(_0xb09d29['note'][_0x363cc9(0x170)](/<VISUAL OPACITY:[ ](\d+)([%％])>/i)){const _0x3f3478=Number(RegExp['$1'])*0.01;return Math[_0x363cc9(0x181)](_0x3f3478*0xff)[_0x363cc9(0xe3)](0x0,0xff);}if(_0xb09d29[_0x363cc9(0xea)]['match'](/<VISUAL OPACITY:[ ](\d+)>/i))return Number(RegExp['$1'])['clamp'](0x0,0xff);}return 0xff;},Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0x179)]=function(){const _0x194c42=_0x1bc529;if(!this['_battler'])return;const _0x274e8d=this[_0x194c42(0xd3)][_0x194c42(0xa7)]();if(_0x274e8d===0x0&&this[_0x194c42(0xf0)][_0x194c42(0xcd)]!==0x0)this[_0x194c42(0xf0)][_0x194c42(0x114)](0x0);else{let _0x3b9738=this[_0x194c42(0xf0)]['_hue']+_0x274e8d;_0x3b9738%=0x168,this[_0x194c42(0xf0)]['setHue'](_0x3b9738);}},Game_BattlerBase[_0x1bc529(0x10a)][_0x1bc529(0xa7)]=function(){const _0x973340=_0x1bc529,_0x4424c3=_0x973340(0xa7);if(this[_0x973340(0xc0)](_0x4424c3))return this['_cache'][_0x4424c3];return this['_cache'][_0x4424c3]=this[_0x973340(0x173)](),this['_cache'][_0x4424c3];},Game_BattlerBase['prototype'][_0x1bc529(0x173)]=function(){const _0x223b98=_0x1bc529;for(const _0x404340 of this[_0x223b98(0x16d)]()){if(!_0x404340)continue;if(_0x404340[_0x223b98(0xea)]['match'](/<VISUAL RAINBOW:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);}return 0x0;},VisuMZ['VisualStateEffects'][_0x1bc529(0xce)]=Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0xec)],Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0xec)]=function(){const _0x5f55de=_0x1bc529;let _0x3404ae=VisuMZ['VisualStateEffects'][_0x5f55de(0xce)]['call'](this);return _0x3404ae+=this[_0x5f55de(0x105)](),_0x3404ae;},VisuMZ['VisualStateEffects'][_0x1bc529(0xb9)]=Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0x121)],Sprite_Battler['prototype']['mainSpriteScaleY']=function(){const _0x175119=_0x1bc529;let _0x541a07=VisuMZ[_0x175119(0x129)][_0x175119(0xb9)]['call'](this);return _0x541a07+=this[_0x175119(0x15c)](),_0x541a07;},Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0x105)]=function(){const _0x3b5a41=_0x1bc529;if(!this[_0x3b5a41(0xd3)])return 0x0;if(this[_0x3b5a41(0xd3)]['noBreathing']())return 0x0;const _0x5368c7=this[_0x3b5a41(0xd3)][_0x3b5a41(0x11b)]();if(!_0x5368c7)return 0x0;if(!_0x5368c7[_0x3b5a41(0x171)])return 0x0;let _0x462e39=this[_0x3b5a41(0xf9)](_0x5368c7,_0x5368c7[_0x3b5a41(0x149)],_0x5368c7['rateX']);const _0x547221=this[_0x3b5a41(0xf0)][_0x3b5a41(0x164)]['x']>0x0?0x1:-0x1;return _0x462e39*_0x547221;},Sprite_Battler['prototype']['applyBreathingScaleY']=function(){const _0x29027b=_0x1bc529;if(!this[_0x29027b(0xd3)])return 0x0;if(this[_0x29027b(0xd3)][_0x29027b(0xb2)]())return 0x0;const _0x3d1184=this[_0x29027b(0xd3)]['breathingData']();if(!_0x3d1184)return 0x0;if(!_0x3d1184[_0x29027b(0x171)])return 0x0;let _0x558b6b=this[_0x29027b(0xf9)](_0x3d1184,_0x3d1184[_0x29027b(0xbf)],_0x3d1184[_0x29027b(0x13e)]);return _0x558b6b;},Sprite_Battler['prototype'][_0x1bc529(0xf9)]=function(_0x154c19,_0x4f028d,_0x2fdacb){const _0x556956=_0x1bc529;this[_0x556956(0xc8)]=this[_0x556956(0xc8)]??Math[_0x556956(0xa6)](0x2710);let _0x2d208b=Graphics['frameCount']+this[_0x556956(0xc8)];return _0x154c19[_0x556956(0xfe)]&&(_0x4f028d/=this['_battler'][_0x556956(0xa5)]()),Math[_0x556956(0x151)](_0x2d208b/_0x4f028d)*_0x2fdacb;},VisuMZ[_0x1bc529(0x129)][_0x1bc529(0xa3)]=Sprite_Actor[_0x1bc529(0x10a)][_0x1bc529(0x115)],Sprite_Actor[_0x1bc529(0x10a)][_0x1bc529(0x115)]=function(){const _0x1447cd=_0x1bc529;VisuMZ[_0x1447cd(0x129)][_0x1447cd(0xa3)][_0x1447cd(0xb8)](this),this[_0x1447cd(0xd2)]();},Sprite_Actor[_0x1bc529(0x10a)][_0x1bc529(0xd2)]=function(){const _0x34e734=_0x1bc529;if(this['constructor']!==Sprite_Actor)return;this[_0x34e734(0x13b)]=new Sprite_StateIcon(),this[_0x34e734(0x18e)](this['_stateIconSprite']),this[_0x34e734(0x13b)][_0x34e734(0xad)]['smooth']=![];},VisuMZ['VisualStateEffects'][_0x1bc529(0xc1)]=Sprite_Actor[_0x1bc529(0x10a)][_0x1bc529(0x189)],Sprite_Actor[_0x1bc529(0x10a)]['refreshMotion']=function(){const _0x1a16c3=_0x1bc529,_0xb07178=this[_0x1a16c3(0x187)];if(!_0xb07178)return;const _0x5efeb2=_0xb07178[_0x1a16c3(0x15b)]();if(_0x5efeb2>=0x4){if(!_0xb07178['isInputting']()&&!_0xb07178[_0x1a16c3(0x12e)]())return this['startMotion'](_0xb07178[_0x1a16c3(0x140)]);}VisuMZ[_0x1a16c3(0x129)][_0x1a16c3(0xc1)][_0x1a16c3(0xb8)](this);},VisuMZ[_0x1bc529(0x129)][_0x1bc529(0x138)]=Sprite_SvEnemy[_0x1bc529(0x10a)][_0x1bc529(0x189)],Sprite_SvEnemy[_0x1bc529(0x10a)]['refreshMotion']=function(){const _0x2c690b=_0x1bc529,_0x4be8a6=this[_0x2c690b(0x187)];if(!_0x4be8a6)return;if(Imported[_0x2c690b(0x158)]&&_0x4be8a6[_0x2c690b(0x183)]())return;const _0x19c571=_0x4be8a6[_0x2c690b(0x15b)]();if(_0x19c571>=0x4){if(!_0x4be8a6[_0x2c690b(0x195)]()&&!_0x4be8a6['isActing']())return this['startMotion'](_0x4be8a6['_customStateMotion']);}VisuMZ[_0x2c690b(0x129)]['Sprite_SvEnemy_refreshMotion'][_0x2c690b(0xb8)](this);},VisuMZ[_0x1bc529(0x129)][_0x1bc529(0xc6)]=Sprite_Battler[_0x1bc529(0x10a)][_0x1bc529(0x141)],Sprite_Battler['prototype'][_0x1bc529(0x141)]=function(_0x7271d5){const _0x59b1f0=_0x1bc529;if(this[_0x59b1f0(0x12a)]&&_0x7271d5===_0x59b1f0(0x14c)){const _0x2ab41c=this['_battler'][_0x59b1f0(0x15b)]();_0x2ab41c>=0x4&&(_0x7271d5=this[_0x59b1f0(0xd3)]['_customStateMotion']||_0x7271d5);}VisuMZ[_0x59b1f0(0x129)][_0x59b1f0(0xc6)]['call'](this,_0x7271d5);},VisuMZ['VisualStateEffects'][_0x1bc529(0x9e)]=Sprite_Actor[_0x1bc529(0x10a)][_0x1bc529(0xdf)],Sprite_Actor[_0x1bc529(0x10a)][_0x1bc529(0xdf)]=function(_0x3c88b3){const _0x33c485=_0x1bc529;VisuMZ[_0x33c485(0x129)][_0x33c485(0x9e)]['call'](this,_0x3c88b3);if(this[_0x33c485(0x13b)])this[_0x33c485(0x13b)]['setup'](_0x3c88b3);},VisuMZ[_0x1bc529(0x129)][_0x1bc529(0xd0)]=Sprite_Actor[_0x1bc529(0x10a)]['update'],Sprite_Actor['prototype']['update']=function(){const _0x5d2e50=_0x1bc529;VisuMZ['VisualStateEffects'][_0x5d2e50(0xd0)]['call'](this),this[_0x5d2e50(0x130)]();},VisuMZ[_0x1bc529(0x129)][_0x1bc529(0x14d)]=Sprite_Actor['prototype'][_0x1bc529(0x17d)],Sprite_Actor[_0x1bc529(0x10a)][_0x1bc529(0x17d)]=function(){const _0x2616ab=_0x1bc529;if(this[_0x2616ab(0xd3)][_0x2616ab(0x185)]()&&this[_0x2616ab(0x153)]&&this[_0x2616ab(0x153)][_0x2616ab(0xad)]){if(this[_0x2616ab(0xb0)])return;this['_stateMotionLocked']=this[_0x2616ab(0x153)]['_frame'][_0x2616ab(0x198)]>0x0;}else this[_0x2616ab(0xb0)]=![];VisuMZ[_0x2616ab(0x129)][_0x2616ab(0x14d)][_0x2616ab(0xb8)](this);},VisuMZ['VisualStateEffects'][_0x1bc529(0xe2)]=Sprite_Enemy['prototype'][_0x1bc529(0xd2)],Sprite_Enemy[_0x1bc529(0x10a)]['createStateIconSprite']=function(){const _0x3d4112=_0x1bc529;this['createStateSprite'](),VisuMZ[_0x3d4112(0x129)][_0x3d4112(0xe2)]['call'](this);},Sprite_Enemy['prototype'][_0x1bc529(0x115)]=function(){const _0x4c1bdd=_0x1bc529;this[_0x4c1bdd(0x145)]=new Sprite_StateOverlay(),this['addChild'](this['_stateSprite']);},VisuMZ['VisualStateEffects']['Sprite_Enemy_setBattler']=Sprite_Enemy[_0x1bc529(0x10a)]['setBattler'],Sprite_Enemy[_0x1bc529(0x10a)][_0x1bc529(0xdf)]=function(_0x3ccddb){const _0x1ff41d=_0x1bc529;VisuMZ['VisualStateEffects'][_0x1ff41d(0x104)][_0x1ff41d(0xb8)](this,_0x3ccddb);if(this[_0x1ff41d(0x145)])this[_0x1ff41d(0x145)][_0x1ff41d(0x127)](_0x3ccddb);},VisuMZ[_0x1bc529(0x129)]['Sprite_Enemy_update']=Sprite_Enemy['prototype'][_0x1bc529(0x182)],Sprite_Enemy['prototype'][_0x1bc529(0x182)]=function(){const _0x2e7cf1=_0x1bc529;VisuMZ[_0x2e7cf1(0x129)][_0x2e7cf1(0x13d)]['call'](this),this['updateVisualStateEffects']();},VisuMZ[_0x1bc529(0x129)]['Sprite_StateOverlay_loadBitmap']=Sprite_StateOverlay[_0x1bc529(0x10a)][_0x1bc529(0x9c)],Sprite_StateOverlay[_0x1bc529(0x10a)][_0x1bc529(0x9c)]=function(){const _0x3c4bea=_0x1bc529;VisuMZ[_0x3c4bea(0x129)][_0x3c4bea(0x142)]['call'](this),this[_0x3c4bea(0xa8)]=_0x3c4bea(0x116);},VisuMZ[_0x1bc529(0x129)][_0x1bc529(0x10c)]=Sprite_StateOverlay[_0x1bc529(0x10a)][_0x1bc529(0x17d)],Sprite_StateOverlay['prototype'][_0x1bc529(0x17d)]=function(){const _0x51098a=_0x1bc529;if(typeof this[_0x51098a(0x120)]===_0x51098a(0x101))return this['updateCustomOverlayFrame']();else{if(this[_0x51098a(0xa8)]!==_0x51098a(0x116)){this[_0x51098a(0x16a)]=!![];const _0x25dcec=ImageManager[_0x51098a(0xb5)](_0x51098a(0x116));_0x25dcec[_0x51098a(0xee)](this[_0x51098a(0xc9)]['bind'](this,_0x25dcec));}else this[_0x51098a(0xa8)]==='States'&&VisuMZ[_0x51098a(0x129)][_0x51098a(0x10c)][_0x51098a(0xb8)](this);}},Sprite_StateOverlay['prototype'][_0x1bc529(0xc9)]=function(_0x4fc748){const _0x1c182a=_0x1bc529;this[_0x1c182a(0xad)]=_0x4fc748,this[_0x1c182a(0x16a)]=![],this[_0x1c182a(0xa8)]=_0x1c182a(0x116),VisuMZ[_0x1c182a(0x129)][_0x1c182a(0x10c)][_0x1c182a(0xb8)](this);},Sprite_StateOverlay[_0x1bc529(0x10a)][_0x1bc529(0x15f)]=function(){const _0x2c4684=_0x1bc529;if(!this[_0x2c4684(0x16a)]&&this['_bitmapName']!==this[_0x2c4684(0x120)]){this['_loadingCustomOverlay']=!![];const _0x1d0408=ImageManager[_0x2c4684(0xb5)](this['_overlayIndex']);_0x1d0408[_0x2c4684(0xee)](this[_0x2c4684(0xc3)]['bind'](this,_0x1d0408));}if(this[_0x2c4684(0xa8)]===this['_overlayIndex']){const _0x256b6c=0x60,_0x411101=0x60,_0x37489f=this['_pattern']*_0x256b6c,_0x36b320=0x0;this[_0x2c4684(0xf6)](_0x37489f,_0x36b320,_0x256b6c,_0x411101);}},Sprite_StateOverlay[_0x1bc529(0x10a)][_0x1bc529(0xc3)]=function(_0x2ceb60){const _0x20e568=_0x1bc529;this['bitmap']=_0x2ceb60,this['_loadingCustomOverlay']=![],this[_0x20e568(0xa8)]=this[_0x20e568(0x120)],this[_0x20e568(0x15f)]();};