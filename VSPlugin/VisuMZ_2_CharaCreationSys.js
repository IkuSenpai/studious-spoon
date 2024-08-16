//=============================================================================
// VisuStella MZ - Character Creation System
// VisuMZ_2_CharaCreationSys.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_CharaCreationSys = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CharaCreationSys = VisuMZ.CharaCreationSys || {};
VisuMZ.CharaCreationSys.version = 1.06;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.06] [CharaCreationSys]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Character_Creation_System_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Character Creation System allows players to pick and choose how they
 * want their party members to be created. Players can pick from different
 * classes, appearances, traits, and names for their desired characters. This
 * plugin allows your game to have a Character Creation System so that your
 * players can add a bit more of a personal touch into their game.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Character Creation System is called scene in which the player can create
 *   characters of their liking.
 * * Created character features range from selecting classes, appearances,
 *   traits (if using the VisuMZ Elements and Status Menu Core), and name.
 * * Some classes can be locked behind switches, meaning they cannot be picked
 *   by the player in the Character Creation System until those switches are
 *   turned on, functioning as an unlocking system. Classes can cost gold
 *   and/or items in order to be selected, making the possibility of having
 *   premium classes.
 * * Selected appearances allow the player to pick a set of graphics that will
 *   define the created character's face graphic, map sprite graphic, battle
 *   sprite graphic, menu portrait, and battle portrait (for any related
 *   VisuStella plugins). Each class can have a batch of graphics assigned to
 *   them for the player to pick and choose from.
 * * If the player wants more, the player can (optionally) pick graphic sets
 *   from a global pool of image combinations. These graphic sets can also be
 *   locked away behind switches, allowing for an unlocking system. If desired,
 *   you can let players pick graphic sets from other classes as  well.
 * * If using the VisuStella MZ Elements and Status Menu Core plugin, traits
 *   can be selected for each of the 10 available Trait Types. Trait Sets can
 *   be selected and picked. Some of them can even require switches to appear,
 *   cost gold and items to pick, and more.
 * * Players can enter in the names of their created characters or select from
 *   randomized name pools that are defined by the plugin.
 * * Other scenes have been added for the player to select created characters
 *   to dismiss from the player's party or even retrain them to bring them back
 *   to the Character Creation System for further customization.
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
 * Instructions - Quick Start
 * ============================================================================
 *
 * Follow these instructions to use this plugin properly.
 *
 * ---
 *
 * Step 1: Create Extra Actor Slots
 * 
 * In order for this plugin to be able to allow players to create their own
 * characters, the game must have enough actor slots. Do this by raising the
 * maximum number of actors in the Database.
 * 
 * While you can use the plugin to overwrite specific actors, you would
 * normally want the plugin to automatically select unused actors by itself.
 * Either leave the unused actors with nothing in their name or <Empty> as
 * their database name. The <Empty> character must not be in your party.
 * 
 * Player created characters can still be affected by traits, notes, max level
 * differences between them so keep these "empty actors" the same if possible.
 * The plugin chooses not to interfere with these details in case they are
 * needed by other plugins for any specific reason.
 * 
 * The maximum number of created characters a player can create will depend on
 * the number of "empty actors" available in the database in order to prevent
 * flooding the game.
 *
 * ---
 *
 * Step 2: Make a Plugin Command on a Regular Map
 * 
 * Create a new event on a map. Add a "Scene: Open Character Creation Scene"
 * Plugin Command from this plugin and keep the "Actor ID" parameter at "0".
 * This will have the Plugin Command automatically select the first available
 * "empty actor" in the database.
 * 
 * While not needed, it is recommended that the "Fail Switch", "Join Switch",
 * and "Register Variable" parameters are all bound to switches and variables.
 * You can use "Conditional Branch" events after this Plugin Command runs in
 * order to tell if a character failed to be created (using the "Fail switch"),
 * successfully joined (using the "Join Switch"), and which actor ID is used
 * to create the new character (using the "Register Variable").
 * 
 * ---
 * 
 * Step 3: Play Test Character Creation
 * 
 * Go ahead and test the new Character Creation feature. If all the other
 * Plugin Parameters are left as default and the RPG Maker MZ default assets
 * are still present, you'll see that the first 8 classes are available to be
 * selected along with a batch of graphics to pick from.
 * 
 * Otherwise, if you have changed these for your game project, you'll need to
 * adjust these accordingly in the Plugin Parameters. There is no plug and play
 * aspect to this particular feature for games that have fewer than 8 classes
 * and have removed their default RPG Maker MZ assets.
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
 * VisuMZ_1_BattleCore
 * 
 * VisuMZ_1_MainMenuCore
 * 
 * If these plugins are installed, you can set battle portraits and menu
 * portraits for selectable appearances.
 * 
 * ---
 * 
 * VisuMZ_1_ElementStatusCore
 * 
 * If installed and the other Plugin Parameters are enabled, the player can
 * select traits for the created characters. This step during the character
 * creation process will not be available otherwise. Character biographies can
 * also be generated for this plugin.
 * 
 * ---
 *
 * VisuMZ_1_MessageCore
 *
 * Allows usage of Auto-Word Wrap for class descriptions when selecting which
 * class to create a character as. Likewise, created character biographies for
 * the Elements and Status Menu Core with Auto-Word Wrap.
 *
 * ---
 * 
 * VisuMZ_3_BattleVoices
 * 
 * If installed, allows the player to select what battle voice set to apply to
 * the character in question.
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
 * === Actor-Related Notetags ===
 * 
 * ---
 *
 * <Cannot Select Dismiss>
 *
 * - Used for: Actor Notetags
 * - This actor cannot be selected as a dismissal target through the actor
 *   selection scene.
 * - This actor can still be manually dismissed from the party through event
 *   commands and/or script calls.
 * 
 * ---
 * 
 * <Cannot Select Retrain>
 * 
 * - Used for: Actor Notetags
 * - This actor cannot be selected as a retrain target through the actor
 *   selection scene.
 * - This actor can still be manually retrained by having the associated Plugin
 *   Command directly target the actor (instead of using 0 for selection).
 *
 * ---
 * 
 * === Class-Related Notetags ===
 *
 * <Icon: x>
 *
 * - Used for: Class Notetags
 * - Sets the icon used for this class to icon index 'x'.
 * - Replace 'x' with a number representing the index of the icon you wish to
 *   use as a marker for this class.
 *
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. These will
 * require that you have VisuMZ_1_MessageCore in order for these to work.
 *
 * === Character Creation-Related Text Codes ===
 * 
 * These text codes require VisuMZ_1_MessageCore!
 * 
 * ---
 *
 * -----------------------------------   --------------------------------------
 * Text Code                             Effect (Show Choice Text Only)
 * -----------------------------------   --------------------------------------
 * 
 * <Enable if Can Create Characters>     Makes the choice enabled if there are
 *                                       any available slots to create new
 *                                       characters with using the plugin. If
 *                                       not, this choice becomes disabled.
 *                                       Requires VisuMZ_1_MessageCore!
 * 
 * <Enable if Can Dismiss Characters>    Makes the choice enabled if there are
 *                                       members currently in the party that
 *                                       have been created with the plugin's
 *                                       Character Creation System that can be
 *                                       dismissed via selection.
 *                                       Requires VisuMZ_1_MessageCore!
 * 
 * <Enable if Can Retrain Characters>    Makes the choice enabled if there are
 *                                       members currently in the party that
 *                                       have been created with the plugin's
 *                                       Character Creation System that can be
 *                                       retrained via selection.
 *                                       Requires VisuMZ_1_MessageCore!
 * 
 * <Enable if Have Created Characters>   Makes the choice enabled if there are
 *                                       members currently in the party that
 *                                       have been created with the plugin's
 *                                       Character Creation System.
 *                                       Requires VisuMZ_1_MessageCore!
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
 * === Scene Plugin Commands ===
 * 
 * ---
 *
 * Scene: Create Character Process
 * - Opens the Character Creation Scene.
 * - Cannot be used in battle.
 * - Does not affect <Empty> named characters that have joined the party.
 *
 *   Actor ID?:
 *   - Pick a specific actor to create a character onto.
 *   - Use 0 for first available unnamed actor or named <Empty>.
 *
 *     Actor Level:
 *     - What level should the actor be created at?
 *
 *     Default Name:
 *     - Enter the name you want this actor to have as default.
 *     - The name can still be changed.
 *     - Leave empty for random.
 * 
 *   Data Gathering:
 * 
 *     Fail Switch:
 *     - If searching for first available unnamed actor and is unable to do so
 *       successfully, this Switch turns on.
 *     - This is mainly used for event systems.
 * 
 *     Join Switch:
 *     - If an actor is successfully recruited, turn Switch ON.
 *     - Otherwise, it stays OFF.
 *     - This is mainly used for event systems.
 * 
 *     Register Variable:
 *     - When searching for first available unnamed actor, register that
 *       actor's ID number to this variable.
 *     - This is mainly used for event systems.
 * 
 *   Other Settings:
 *
 *     Cancel -> Exit?:
 *     - Allow cancel button let you exit the scene?
 *
 *     Show Gold Window?:
 *     - Shows/hides the gold window.
 *     - Gold costs still apply.
 *
 * ---
 *
 * Scene: Dismiss Select Created Character
 * - Opens the Selected Character Dismissal Scene.
 * - Cannot be used in battle.
 * 
 *   Data Gathering:
 * 
 *     Fail Switch:
 *     - If there is no created character to dismiss from the player's party,
 *       this Switch turns on.
 *     - This is mainly used for event systems.
 * 
 *     Dismiss Switch:
 *     - If an actor is successfully dismissed, turn Switch ON.
 *     - Otherwise, it stays OFF.
 *     - This is mainly used for event systems.
 * 
 *     Register Variable:
 *     - When a character is dismissed from the player party, register that
 *       actor's ID number to this variable.
 *     - This is mainly used for event systems.
 *
 * ---
 *
 * Scene: Retrain Created Character
 * - Retrains a created character.
 * - Cannot be used in battle.
 *
 *   Actor ID?:
 *   - Pick a specific actor to retrain.
 *   - Use 0 if you want the player to select the character.
 *
 *     Change Class?:
 *     - Is the target actor's class changeable?
 * 
 *       Preserve Level?:
 *       - If the actor retrains its class, preserve the actor's
 *         previous level?
 *
 *     Change Appearance?:
 *     - Is the target actor's appearance changeable?
 *
 *     Change Traits?:
 *     - Are the target actor's traits changeable?
 *     - Requires VisuMZ_1_ElementStatusCore!
 * 
 *     Change Battle Voice?
 *     - Is the target actor's battle voice changeable?
 *     - Requires VisuMZ_3_BattleVoices!
 *
 *     Change Name?:
 *     - Is the target actor's name changeable?
 *
 *     Reset Profile?:
 *     - Reset target actor's profile or keep it the same?
 *
 *     Reset Biography?:
 *     - Reset target actor's biography or keep it the same?
 *     - Requires VisuMZ_1_ElementStatusCore!
 * 
 *   Data Gathering:
 * 
 *     Fail Switch:
 *     - If there is no actor to retrain, then this switch is turned ON.
 *     - Otherwise, it stays OFF.
 *     - This is mainly used for event systems.
 * 
 *     Retrain Switch:
 *     - If an actor is successfully retrained, turn Switch ON.
 *     - Otherwise, it stays OFF.
 *     - This is mainly used for event systems.
 * 
 *     Register Variable:
 *     - This variable records the actor ID of the retrained actor if the actor
 *       is successfully retrained.
 *     - This is mainly used for event systems.
 * 
 *   Other Settings:
 *
 *     Show Gold Window?:
 *     - Shows/hides the gold window.
 *     - Gold costs still apply.
 *
 * ---
 * 
 * === Variable Plugin Commands ===
 * 
 * ---
 *
 * Variable: Set Created Character Count
 * - Target variable will have a value equal to the total number of created
 *   characters in the player's party.
 *
 *   Variable ID:
 *   - Target variable will have a value equal to the total number of created
 *     characters in the player's party.
 *
 * ---
 *
 * Variable: Set Available Empty Character Slots
 * - Target variable will have a value equal to the total number of empty
 *   character slots left available.
 *
 *   Variable ID:
 *   - Target variable will have a value equal to the total number of empty
 *     character slots left available.
 *
 * ---
 *
 * Variable: Set Total Empty Character Slots
 * - Target variable will have a value equal to the total number of empty
 *   character slots in total.
 *
 *   Variable ID:
 *   - Target variable will have a value equal to the total number of empty
 *     character slots in total.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Class List Settings
 * ============================================================================
 *
 * A list of classes that can be selected as the to-be-created character's
 * primary class. This is the first screen the player sees in the Character
 * Creation System when creating new characters.
 *
 * ---
 *
 * Settings
 * 
 *   Class ID:
 *   - The ID of the class that can be selected.
 * 
 *     Preview Picture:
 *     - Filename of the preview picture.
 *     - Located in /img/pictures/
 * 
 *     Preview Background:
 *     - Filename of the preview background.
 *     - Located in /img/parallaxes/
 * 
 *     Text Description:
 *     - Text description used for this class.
 *     - Shown in the preview window.
 *     - Text codes allowed.
 * 
 * ---
 * 
 * Graphic Sets
 * 
 *   Graphics List:
 *   - A list of graphic sets that are tied to this class.
 *   - For more information, look under the Graphic Set Entry Settings.
 *
 * ---
 *
 * Requirements
 * 
 *   Required Switch:
 *   - What switch must be turned on for this class to show?
 *   - Use 0 to not require a switch.
 * 
 *   Gold Cost:
 *   - How much gold should it cost to pick this class?
 *   - Use 0 to not require a gold cost.
 * 
 *   Item Cost Type:
 *   - What item is needed to pick this class?
 *   - This determines the item type's ID.
 * 
 *     Item Cost Quantity:
 *     - How many of the item is needed to pick this class?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Global Graphic Sets Settings
 * ============================================================================
 *
 * A list of graphic sets that can be selected by the player to use for the
 * created character. This list contains the global graphic sets that the
 * player can pick from.
 *
 * ---
 *
 * Settings
 * 
 *   Display Text:
 *   - The text used to represent this graphic set.
 *   - Text codes allowed.
 * 
 *     Display Icon:
 *     - The icon shown next to the Display Text.
 * 
 *     Preview Picture:
 *     - Filename of the preview picture.
 *     - Located in /img/pictures/
 * 
 *     Preview Background:
 *     - Filename of the preview background.
 *     - Located in /img/parallaxes/
 * 
 *   Required Switch:
 *   - What switch must be turned on for this set to show?
 *   - Use 0 to not require a switch.
 * 
 *   Graphics List:
 *   - A list of graphic sets that are tied to this graphic set.
 *   - For more information, look under the Graphic Set Entry Settings section.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Graphic Set Entry Settings
 * ============================================================================
 *
 * These are the graphic set entries that are found in the Class List settings
 * and Global Graphic Sets. These help define the graphics that will be applied
 * to the created characters based on what they are assigned with.
 *
 * ---
 *
 * Display
 * 
 *   Display Text:
 *   - The text used to represent these graphics.
 *   - Text codes allowed.
 * 
 *   Display Icon:
 *   - The icon shown next to the Display Text.
 * 
 *   Display Background:
 *   - Filename of the display background.
 *   - Located in /img/parallaxes/
 * 
 * ---
 * 
 * Graphics
 * 
 *   Face Graphic:
 *   - Filename of the face graphic used.
 * 
 *     Face Index:
 *     - What is the face index used?
 *     - Index values start at 0.
 * 
 *   Character Graphic:
 *   - Filename of the character graphic used.
 * 
 *     Character Index:
 *     - What is the character index used?
 *     - Index values start at 0.
 * 
 *   SV Battler:
 *   - Filename of the sideview battler used.
 * 
 *   Battle Portrait:
 *   - Filename of the battle portrait.
 *   - Used for VisuMZ_1_BattleCore.
 * 
 *   Menu Portrait:
 *   - Filename of the main menu portrait.
 *   - Used for VisuMZ_1_MainMenuCore.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Traits Settings
 * ============================================================================
 * 
 * This requires VisuStella MZ's VisuMZ_1_ElementStatusCore in order to use.
 * This utilizes that plugin's traits system to allow for better customization.
 *
 * These settings will allow you to select which Trait Types can have which
 * Trait Sets be selectable. The actual Trait Set effects are adjusted in the
 * VisuMZ_1_ElementStatusCore plugin. These settings will refer to those but
 * apply things like costs and availability.
 *
 * ---
 *
 * General
 * 
 *   Enable Traits Step:
 *   - Enable traits step for Character Creation?
 *   - Requires VisuMZ_1_ElementStatusCore.js!
 *
 * ---
 *
 * Trait Types
 * 
 *   Main Element Settings:
 *   Sub Element Settings:
 *   Gender Settings:
 *   Race Settings:
 *   Nature Settings:
 *   Alignment Settings:
 *   Blessing Settings:
 *   Curse Settings:
 *   Zodiac Settings:
 *   Variant Settings:
 *   - Settings regarding the this specific trait type.
 *   - For more information, look under the Trait Type Settings section.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Trait Type Settings
 * ============================================================================
 *
 * These are the various Trait Types made available through the VisuStella MZ
 * VisuMZ_1_ElementStatusCore plugin. There are ten different types and these
 * will adjust their main settings.
 *
 * ---
 *
 * Settings
 * 
 *   Visible:
 *   - Is command visible in the Character Creation scene?
 *   - Also needs to be Visible in VisuMZ_1_ElementStatusCore.
 * 
 *   Create -> Randomize?:
 *   - Randomize the default setting for this trait type?
 *   - If not randomized, the default is selected.
 * 
 *     Default:
 *     - If not randomized, insert the name of the trait used.
 *     - The default cannot cost gold or items.
 * 
 *   Create -> Change?:
 *   - Changeable trait types can be adjusted.
 *   - Otherwise, they're stuck the way they are.
 * 
 *     Retrain -> Change?:
 *     - If a character is being retrained, can this trait type be changed?
 *     - Must also be changeable on creation.
 * 
 *   Trait Options:
 *   - A list of traits that the character can change to.
 *   - Automatically include the Default trait if used.
 *   - For more information, look under the Trait Set Settings section.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Trait Set Settings
 * ============================================================================
 *
 * These are the individual Trait Sets that can be picked for each of the ten
 * Trait Types. These parameters do not define the effects of the Trait Sets.
 * Instead, they only refer to the Trait Sets whose effects are defined in the
 * Plugin Parameters for the VisuMZ_1_ElementStatusCore plugin.
 *
 * ---
 *
 * Settings
 * 
 *   Name:
 *   - Name of this Trait Set. Must match the name of a trait found in
 *     VisuMZ_1_ElementStatusCore plugin.
 * 
 * ---
 * 
 * Requirements
 * 
 *   Required Switch:
 *   - What switch must be turned on for this trait to show?
 *   - Use 0 to not require a switch.
 * 
 *   Gold Cost:
 *   - How much gold should it cost to pick this trait?
 *   - Use 0 to not require a gold cost.
 * 
 *   Item Cost Type:
 *   - What item is needed to pick this trait?
 *   - This determines the item type's ID.
 * 
 *     Item Cost Quantity:
 *     - How many of the item is needed to pick this trait?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Random Name Sets
 * ============================================================================
 *
 * When selecting random names to work with, you can adjust which names will
 * appear in which set.
 *
 * ---
 *
 * Settings
 * 
 *   Display Text:
 *   - The text used to represent this name set.
 *   - Text codes allowed.
 * 
 *   Display Icon:
 *   - The icon shown next to the Display Text.
 * 
 *   Random Names:
 *   - A list of random names to pick from.
 *   - Insert a possible random name here.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_CreateCharacter and Scene_SelectCreatedChara.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * These settings let you adjust the sound effects used for this plugin.
 *
 * ---
 *
 * Create
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
 * Dismiss
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
 * Retrain
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
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed for this plugin.
 *
 * ---
 *
 * Instruction Window
 * 
 *   For Class:
 *   For Appearance:
 *   For Graphic Set:
 *   For Traits:
 *   For Battle Voices:
 *   For Naming:
 *   For Confirmation:
 *   For Dismissal:
 *   For Retraining:
 *   - Instruction text when on this step.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Preview Window
 * 
 *   Cost Text:
 *   - Text displayed when showing a gold cost.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Appearance Window
 * 
 *   More Command Name:
 *   - Text used for More Appearances command.
 *   - Text codes allowed.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 * ---
 * 
 * Graphic Sets Window
 * 
 *   Class Name Format:
 *   - Text for class graphic set command names.
 *   - Text codes allowed.
 *   - %1 - Class Name.
 * 
 * ---
 * 
 * Trait Types Window
 * 
 *   Accept Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 *   Trait Types Format:
 *   - Text format used for trait type command names.
 *   - %1 - Command Name Text
 * 
 *     Icon:
 *     - Icon used for this command.
 *
 * ---
 * 
 * Battle Voice Window
 * 
 *   Accept Text:
 *   - Text used for this command.
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 *     Icon:
 *     - Icon used for this command.
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 *   No Voice:
 *   - Text used for this command.
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 * ---
 *
 * Name Command Window
 * 
 *   Accept Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 *   Manual Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 * ---
 * 
 * Confirm Data Window
 * 
 *   Name Text:
 *   Class Text:
 *   Cost Text:
 *   - Text used for this data category.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Confirm Command Window
 * 
 *   Confirm Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 *   Cancel Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 * ---
 * 
 * Button Assist Window
 * 
 *   Exit Text:
 *   - Text used for button assist shortcut to exit.
 * 
 * ---
 * 
 * Status Menu
 * 
 *   Profile Text:
 *   - Text used for a created character's profile.
 *   - %1 - Character's Actor ID
 * 
 *   Biography Text:
 *   - Text used for a created character's biography.
 *   - %1 - Character's Actor ID, %2 - Class Name
 * 
 *   Auto-Word Wrap:
 *   - Automatically apply word wrap to biography?
 *   - Requires VisuMZ_1_MessageCore.js!
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
 * General
 * 
 *   Side Buffer:
 *   - How many pixels from the edges of the screen should be buffered?
 * 
 *   Show List Icons:
 *   - Show/hide icons for most list elements?
 *   - Some elements will always have icons.
 * 
 * ---
 * 
 * Instruction Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Text Align:
 *   - Text alignment for this window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Gold Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Preview Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Padding:
 *   - What is the window edge padding value?
 * 
 *   Preview Contents:
 * 
 *     Auto-Word Wrap:
 *     - Automatically apply word wrap to preview text?
 *     - Requires VisuMZ_1_MessageCore.js!
 * 
 *     Draw Dark Rectangle:
 *     - Draw dark rectangles to make text more visible?
 * 
 *     Draw Gold Cost:
 *     - Draw the gold cost on the preview image?
 * 
 *   Foreground Picture:
 * 
 *     Anchor X:
 *     - Anchor value X. Use a number between 0 and 1.
 *     - 0.0 - Left; 0.5 - Center; 1.0 - Right
 * 
 *     Anchor Y:
 *     - Anchor value Y. Use a number between 0 and 1.
 *     - 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * 
 *     Scale Up:
 *     - Scale foreground picture size up to fit window?
 * 
 *   Background Parallax:
 * 
 *     Anchor X:
 *     - Anchor value X. Use a number between 0 and 1.
 *     - 0.0 - Left; 0.5 - Center; 1.0 - Right
 * 
 *     Anchor Y:
 *     - Anchor value Y. Use a number between 0 and 1.
 *     - 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * 
 *     Scale Up:
 *     - Scale foreground picture size up to fit window?
 * 
 *     Retrain Parallax:
 *     - Filename of the preview background for retraining.
 *     - Located in /img/parallaxes/
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Class List Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Current Text Color:
 *   - Use text colors from the Window Skin only.
 *   - This does NOT use #rrggbb format.
 * 
 *   Default Class Icon:
 *   - What icon should be used by default for classes without the <Icon: x>
 *     notetag?
 * 
 *   Item Cost:
 * 
 *     Cost Type Format:
 *     - How does the cost look in comparison to the item icon?
 *     - %1 - Icon, %2 - Cost Text
 * 
 *     Item Quantity :
 *     - How does the cost look in comparison to the item icon?
 *     - %1 - Cost, %2 - Owned
 * 
 *     Draw Cost of 1?:
 *     - Draws the cost format if there is a cost of 1?
 *     - Otherwise, just show the icon.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Appearance Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Show More Command?:
 *   - Shows a "More Appearances" command for the player to select.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Graphic Sets Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Show Other Classes?:
 *   - Allows player to select graphic sets from other classes?
 * 
 *   Other Classes First?:
 *   - Shows other class graphic sets before global graphics or after global
 *     graphics.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Trait Types Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 *   - Requires VisuMZ_1_ElementStatusCore!
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *   - Requires VisuMZ_1_ElementStatusCore!
 *
 * ---
 * 
 * Trait Sets Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 *   - Requires VisuMZ_1_ElementStatusCore!
 * 
 *   Current Text Color:
 *   - Use text colors from the Window Skin only.
 *   - This does NOT use #rrggbb format.
 * 
 *   Line Thickness:
 *   - How many lines thick is each selectable option?
 *   - Requires VisuMZ_1_ElementStatusCore!
 * 
 *   Item Cost:
 * 
 *     Cost Type Format:
 *     - How does the cost look in comparison to the item icon?
 *     - %1 - Icon, %2 - Cost Text
 * 
 *     Item Quantity :
 *     - How does the cost look in comparison to the item icon?
 *     - %1 - Cost, %2 - Owned
 * 
 *     Draw Cost of 1?:
 *     - Draws the cost format if there is a cost of 1?
 *     - Otherwise, just show the icon.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *   - Requires VisuMZ_1_ElementStatusCore!
 *
 * ---
 * 
 * Battle Voice Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 *   Current Text Color:
 *   - Use text colors from the Window Skin only.
 *   - This does NOT use #rrggbb format.
 * 
 *   Enable?:
 *   - Enables adjusting battle voice sets?
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 *   Voice Set Icon:
 *   - Icon used for voice sets.
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *   - Requires VisuMZ_3_BattleVoices!
 * 
 * ---
 * 
 * Current Name Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Name Command Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Name Edit Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Max Character Length:
 *   - What is the maximum character length for entering in a name?
 * 
 *   Name Width Padding:
 *   - What is the padding between characters?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Name Input Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Confirm Data Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Confirm Command Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Play Shop Sound?:
 *   - Play the shop sound when gold and items are involved?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 * 
 * Select Actor Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
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
 * Verison 1.06: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where the audio bgm being played would fade out and not
 *    return upon finishing a scene. Fix made by Irina.
 * 
 * Version 1.05: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where the selected battle voice did not carry over properly.
 *    Fix made by Irina.
 * 
 * Version 1.04: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause the traits selected in the character creator
 *    would not carry over. Fix made by Irina.
 * 
 * Version 1.03: December 14, 2023
 * * Documentation Update!
 * ** Added extra clarity for Instructions - Quick Start
 * *** Step 1: Create Extra Actor Slots
 * **** The <Empty> character must not be in your party.
 * ** Added extra clarity for "Scene: Create Character Process" Plugin Command.
 * *** Does not affect <Empty> named characters that have joined the party.
 * * Feature Update!
 * ** If Traits Step is disabled, check for trait setups does not need to be
 *    adhered to. Fix made by Arisu.
 * 
 * Version 1.02: November 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that deducted all of an item amount upon creation.
 *    Fix by Arisu.
 * 
 * Version 1.01: October 12, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash due to missing icon. Fix by Olivia.
 * 
 * Version 1.00 Official Release Date: September 29, 2023
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
 * @command SceneOpenCharaCreateScene
 * @text Scene: Create Character Process
 * @desc Opens the Character Creation Scene.
 * Cannot be used in battle.
 *
 * @arg ActorID:num
 * @text Actor ID?
 * @type actor
 * @desc Pick a specific actor to create a character onto.
 * Use 0 for first available unnamed actor or named <Empty>.
 * @default 0
 *
 * @arg ActorLevel:eval
 * @text Actor Level
 * @parent ActorID:num
 * @desc What level should the actor be created at?
 * @default 1
 *
 * @arg DefaultName:str
 * @text Default Name
 * @parent ActorID:num
 * @desc Enter the name you want this actor to have as default.
 * The name can still be changed. Leave empty for random.
 * @default 
 * 
 * @arg Data
 * @text Data Gathering
 *
 * @arg FailSwitchID:num
 * @text Fail Switch
 * @parent Data
 * @type switch
 * @desc If searching for first available unnamed actor and is
 * unable to do so successfully, this Switch turns on.
 * @default 1
 *
 * @arg JoinSwitchID:num
 * @text Join Switch
 * @parent Data
 * @type switch
 * @desc If an actor is successfully recruited, turn Switch ON.
 * Otherwise, it stays OFF.
 * @default 2
 *
 * @arg RegisterVarID:num
 * @text Register Variable
 * @parent Data
 * @type variable
 * @desc When searching for first available unnamed actor,
 * register that actor's ID number to this variable.
 * @default 1
 * 
 * @arg Settings
 * @text Other Settings
 *
 * @arg CancelExit:eval
 * @text Cancel -> Exit?
 * @parent Settings
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow cancel button let you exit the scene?
 * @default true
 *
 * @arg ShowGoldWindow:eval
 * @text Show Gold Window?
 * @parent Settings
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides the gold window.
 * Gold costs still apply.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SceneOpenCharaDismissScene
 * @text Scene: Dismiss Select Created Character
 * @desc Opens the Selected Character Dismissal Scene.
 * Cannot be used in battle.
 * 
 * @arg Data
 * @text Data Gathering
 *
 * @arg FailSwitchID:num
 * @text Fail Switch
 * @parent Data
 * @type switch
 * @desc If there is no created character to dismiss from the
 * player's party, this Switch turns on.
 * @default 1
 *
 * @arg DismissSwitchID:num
 * @text Dismiss Switch
 * @parent Data
 * @type switch
 * @desc If an actor is successfully dismissed, turn Switch ON.
 * Otherwise, it stays OFF.
 * @default 2
 *
 * @arg RegisterVarID:num
 * @text Register Variable
 * @parent Data
 * @type variable
 * @desc When a character is dismissed from the player party,
 * register that actor's ID number to this variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SceneOpenCharaRetrainScene
 * @text Scene: Retrain Created Character
 * @desc Retrains a created character.
 * Cannot be used in battle.
 *
 * @arg ActorID:num
 * @text Actor ID?
 * @type actor
 * @desc Pick a specific actor to retrain.
 * Use 0 if you want the player to select the character.
 * @default 0
 *
 * @arg RetrainClass:eval
 * @text Change Class?
 * @parent ActorID:num
 * @type boolean
 * @on Changeable
 * @off Not Changeable
 * @desc Is the target actor's class changeable?
 * @default true
 *
 * @arg PreserveLevel:eval
 * @text Preserve Level?
 * @parent RetrainClass:eval
 * @type boolean
 * @on Preserve
 * @off Reset
 * @desc If the actor retrains its class,
 * preserve the actor's previous level?
 * @default false
 *
 * @arg RetrainAppearance:eval
 * @text Change Appearance?
 * @parent ActorID:num
 * @type boolean
 * @on Changeable
 * @off Not Changeable
 * @desc Is the target actor's appearance changeable?
 * @default true
 *
 * @arg RetrainTraits:eval
 * @text Change Traits?
 * @parent ActorID:num
 * @type boolean
 * @on Changeable
 * @off Not Changeable
 * @desc Are the target actor's traits changeable?
 * Requires VisuMZ_1_ElementStatusCore!
 * @default true
 *
 * @arg RetrainVoice:eval
 * @text Change Battle Voice?
 * @parent ActorID:num
 * @type boolean
 * @on Changeable
 * @off Not Changeable
 * @desc Is the target actor's battle voice changeable?
 * Requires VisuMZ_3_BattleVoices!
 * @default true
 *
 * @arg RetrainName:eval
 * @text Change Name?
 * @parent ActorID:num
 * @type boolean
 * @on Changeable
 * @off Not Changeable
 * @desc Is the target actor's name changeable?
 * @default true
 *
 * @arg ResetProfile:eval
 * @text Reset Profile?
 * @parent ActorID:num
 * @type boolean
 * @on Reset
 * @off Keep Old
 * @desc Reset target actor's profile or keep it the same?
 * @default true
 *
 * @arg ResetBiography:eval
 * @text Reset Biography?
 * @parent ActorID:num
 * @type boolean
 * @on Reset
 * @off Keep Old
 * @desc Reset target actor's biography or keep it the same?
 * Requires VisuMZ_1_ElementStatusCore!
 * @default true
 * 
 * @arg Data
 * @text Data Gathering
 *
 * @arg FailSwitchID:num
 * @text Fail Switch
 * @parent Data
 * @type switch
 * @desc If there is no actor to retrain, then this
 * switch is turned ON. Otherwise, it stays OFF.
 * @default 1
 *
 * @arg RetrainSwitchID:num
 * @text Retrain Switch
 * @parent Data
 * @type switch
 * @desc If an actor is successfully retrained, turn Switch ON.
 * Otherwise, it stays OFF.
 * @default 2
 *
 * @arg RegisterVarID:num
 * @text Register Variable
 * @parent Data
 * @type variable
 * @desc This variable records the actor ID of the retrained
 * actor if the actor is successfully retrained.
 * @default 1
 * 
 * @arg Settings
 * @text Other Settings
 *
 * @arg ShowGoldWindow:eval
 * @text Show Gold Window?
 * @parent Settings
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides the gold window.
 * Gold costs still apply.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Variable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableSetCreatedCharacterCount
 * @text Variable: Set Created Character Count
 * @desc Target variable will have a value equal to the total number
 * of created characters in the player's party.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type variable
 * @desc Target variable will have a value equal to the total
 * number of created characters in the player's party.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableSetAvailableEmptyCharacterSlots
 * @text Variable: Set Available Empty Character Slots
 * @desc Target variable will have a value equal to the total number
 * of empty character slots left available.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type variable
 * @desc Target variable will have a value equal to the total
 * number of empty character slots left available.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableSetTotalEmptyCharacterSlots
 * @text Variable: Set Total Empty Character Slots
 * @desc Target variable will have a value equal to the total number
 * of empty character slots in total.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type variable
 * @desc Target variable will have a value equal to the total
 * number of empty character slots in total.
 * @default 1
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
 * @param CharaCreationSys
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CharacterCreate
 * @text Character Creation
 *
 * @param ClassList:arraystruct
 * @text Class List
 * @parent CharacterCreate
 * @type struct<ClassData>[]
 * @desc A list of classes that can be selected as the
 * to-be-created character's primary class.
 * @default ["{\"ClassID:num\":\"1\",\"PreviewPicture:str\":\"Actor1_1\",\"PreviewParallax:str\":\"Mountains1\",\"Description:json\":\"\\\"A strong and dextrous\\\\nclass with various\\\\ncapabilities.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_1\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_1\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_1\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_2\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_2\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_2\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"2\",\"PreviewPicture:str\":\"Actor1_6\",\"PreviewParallax:str\":\"Clouds\",\"Description:json\":\"\\\"Uses elemental magic to\\\\ndefeat their opponents.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Clouds\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Clouds\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Clouds\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_6\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_6\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_6\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Clouds\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_5\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_5\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_5\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"3\",\"PreviewPicture:str\":\"Actor1_7\",\"PreviewParallax:str\":\"Universe\",\"Description:json\":\"\\\"Uses holy magic to aid\\\\nallies and defeat foes.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Universe\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Universe\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Universe\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_7\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_7\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_7\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Universe\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_8\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_8\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_8\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"4\",\"PreviewPicture:str\":\"Actor2_1\",\"PreviewParallax:str\":\"Town2\",\"Description:json\":\"\\\"Has sturdy defense to\\\\nprotect the party.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town2\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town2\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town2\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor2_1\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor2_1\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor2_1\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town2\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor2_2\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor2_2\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor2_2\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"5\",\"PreviewPicture:str\":\"Actor1_4\",\"PreviewParallax:str\":\"Ocean\",\"Description:json\":\"\\\"A highly dextrous\\\\nspecialist in barefist\\\\ncombat arts.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Ocean\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Ocean\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Ocean\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_4\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_4\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_4\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Ocean\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor1_3\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor1_3\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor1_3\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"6\",\"PreviewPicture:str\":\"Actor2_4\",\"PreviewParallax:str\":\"Mountains3\",\"Description:json\":\"\\\"An expert in sword and\\\\nmagical arts.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor2_4\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor2_4\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor2_4\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor2_3\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor2_3\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor2_3\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"7\",\"PreviewPicture:str\":\"Actor2_8\",\"PreviewParallax:str\":\"Forest\",\"Description:json\":\"\\\"Equips bows to attack\\\\nenemies from afar.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Forest\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Forest\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Forest\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor2_8\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor2_8\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor2_8\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Forest\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor2_7\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor2_7\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor2_7\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"ClassID:num\":\"8\",\"PreviewPicture:str\":\"Actor3_5\",\"PreviewParallax:str\":\"Town1\",\"Description:json\":\"\\\"A crafty character\\\\ncapable of many feats.\\\"\",\"GraphicSet\":\"\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant A\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor3\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor3\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor3_5\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor3_5\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor3_5\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant B\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor3\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor3\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor3_6\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor3_6\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor3_6\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant C\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor3\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor3\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor3_5\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor3_5\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor3_5\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Variant D\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Town1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"SF_Actor3\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"SF_Actor3\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"SF_Actor3_6\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"SF_Actor3_6\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"SF_Actor3_6\\\\\\\"}\\\"]\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}"]
 *
 * @param GraphicSets:arraystruct
 * @text Graphic Sets
 * @parent CharacterCreate
 * @type struct<GraphicSet>[]
 * @desc A list of graphic sets that can be selected by
 * the player to use for the created character.
 * @default ["{\"DisplayText:str\":\"Primary Actors\",\"DisplayIcon:num\":\"162\",\"PreviewPicture:str\":\"Actor1_1\",\"PreviewParallax:str\":\"Mountains1\",\"SwitchReq:num\":\"0\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-1\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_1\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-2\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_2\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-3\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_3\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-4\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_4\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-5\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_5\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-6\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_6\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-7\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_7\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 1-8\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains1\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor1\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor1_8\\\\\\\"}\\\"]\"}","{\"DisplayText:str\":\"Secondary Actors\",\"DisplayIcon:num\":\"163\",\"PreviewPicture:str\":\"Actor2_1\",\"PreviewParallax:str\":\"Mountains3\",\"SwitchReq:num\":\"0\",\"Graphics:arraystruct\":\"[\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-1\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_1\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-2\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_2\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-3\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_3\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-4\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_4\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-5\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_5\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_5\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_5\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-6\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_6\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_6\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_6\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-7\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"6\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_7\\\\\\\"}\\\",\\\"{\\\\\\\"Display\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DisplayText:str\\\\\\\":\\\\\\\"Actor 2-8\\\\\\\",\\\\\\\"DisplayIcon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"PreviewParallax:str\\\\\\\":\\\\\\\"Mountains3\\\\\\\",\\\\\\\"Graphics\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FaceGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"FaceIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"CharacterGraphic:str\\\\\\\":\\\\\\\"Actor2\\\\\\\",\\\\\\\"CharacterIndex:num\\\\\\\":\\\\\\\"7\\\\\\\",\\\\\\\"SvBattler:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\",\\\\\\\"BattlePortrait:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\",\\\\\\\"MenuPortrait:str\\\\\\\":\\\\\\\"Actor2_8\\\\\\\"}\\\"]\"}"]
 *
 * @param Traits:struct
 * @text Traits Settings
 * @parent CharacterCreate
 * @type struct<Traits>
 * @desc These settings let you adjust traits.
 * Requires VisuMZ_1_ElementStatusCore!
 * @default {"EnableTraitsStep:eval":"true","Element:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"Neutral\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"false\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Neutral\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Fire\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Ice\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Thunder\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Water\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Earth\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Wind\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Light\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Darkness\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","SubElement:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"-\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"false\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"-\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Fire\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Ice\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Thunder\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Water\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Earth\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Wind\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Light\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Darkness\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"3000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Gender:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"true\",\"Default:str\":\"\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"false\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Male\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Female\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Race:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"Human\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"false\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Human\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"High Elf\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Wood Elf\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Dark Elf\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Dwarf\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Gnome\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Halfling\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Wolfkin\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Felyne\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lizardman\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Nature:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"true\",\"Default:str\":\"\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"true\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Chill\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Hardy\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lonely\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Adamant\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Naughty\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Brave\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Bold\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Docile\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Impish\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lax\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Relaxed\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Modest\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Mild\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Bashful\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Rash\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Quiet\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Calm\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Gentle\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Careful\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Quirky\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Sassy\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Timid\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Hasty\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Jolly\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Naive\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Serious\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Alignment:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"Neutral\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"true\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lawful Good\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Neutral Good\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Chaotic Good\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lawful Neutral\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Neutral\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Chaotic Neutral\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lawful Evil\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Neutral Evil\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Chaotic Evil\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Blessing:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"No Blessing\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"true\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"No Blessing\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Dextrous\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Elusive\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Impact\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Healthy\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Focused\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Energetic\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Curse:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"No Curse\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"true\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"No Curse\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Clumsy\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Dazed\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Fitful\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Drained\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Inefficient\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Unmotivated\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Zodiac:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"true\",\"Default:str\":\"\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"false\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Aries\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Taurus\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Gemini\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Cancer\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Leo\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Virgo\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Libra\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Scorpio\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Sagittarius\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Capricorn\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Aquarius\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Pisces\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Ophiuchus\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}","Variant:struct":"{\"Visible:eval\":\"true\",\"Randomize:eval\":\"false\",\"Default:str\":\"Normal\",\"Changeable:eval\":\"true\",\"RetrainChange:eval\":\"false\",\"Options:arraystruct\":\"[\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Mighty\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"100000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Major\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"10000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Greater\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"1000\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Normal\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Lesser\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Minor\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"{\\\\\\\"Name:str\\\\\\\":\\\\\\\"Puny\\\\\\\",\\\\\\\"Requirements\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchReq:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"GoldCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemIdCost:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemCountCost:num\\\\\\\":\\\\\\\"1\\\\\\\"}\\\"]\"}"}
 *
 * @param NameSets:arraystruct
 * @text Random Name Sets
 * @parent CharacterCreate
 * @type struct<NameSet>[]
 * @desc A list of random names to use when naming
 * a created character.
 * @default ["{\"DisplayText:str\":\"Random Neutral Names\",\"DisplayIcon:num\":\"307\",\"NameSets:arraystr\":\"[\\\"Addison\\\",\\\"Adrian\\\",\\\"Aeron\\\",\\\"Ainsley\\\",\\\"Alex\\\",\\\"Alexis\\\",\\\"Amandus\\\",\\\"Amari\\\",\\\"Andi\\\",\\\"Andie\\\",\\\"Andy\\\",\\\"Angel\\\",\\\"Aran\\\",\\\"Ari\\\",\\\"Ariel\\\",\\\"Armani\\\",\\\"Artemis\\\",\\\"Ash\\\",\\\"Asher\\\",\\\"Ashlyn\\\",\\\"Asia\\\",\\\"Aspen\\\",\\\"August\\\",\\\"Autumn\\\",\\\"Azariah\\\",\\\"Bay\\\",\\\"Berenice\\\",\\\"Berni\\\",\\\"Berny\\\",\\\"Bertie\\\",\\\"Berty\\\",\\\"Blaine\\\",\\\"Blair\\\",\\\"Blue\\\",\\\"Bobby\\\",\\\"Brett\\\",\\\"Brody\\\",\\\"Brogan\\\",\\\"Brook\\\",\\\"Cadence\\\",\\\"Caelan\\\",\\\"Cameron\\\",\\\"Campbell\\\",\\\"Carey\\\",\\\"Carroll\\\",\\\"Carter\\\",\\\"Cas\\\",\\\"Casey\\\",\\\"Casper\\\",\\\"Cassi\\\",\\\"Cassian\\\",\\\"Cassidy\\\",\\\"Cassie\\\",\\\"Cassy\\\",\\\"Castiel\\\",\\\"Chance\\\",\\\"Charli\\\",\\\"Charlie\\\",\\\"Charly\\\",\\\"Chase\\\",\\\"Clay\\\",\\\"Cody\\\",\\\"Corey\\\",\\\"Dakota\\\",\\\"Dale\\\",\\\"Dallas\\\",\\\"Dana\\\",\\\"Danni\\\",\\\"Dannie\\\",\\\"Danny\\\",\\\"Darby\\\",\\\"Darcy\\\",\\\"Darnell\\\",\\\"Daryl\\\",\\\"Dominique\\\",\\\"Dorian\\\",\\\"Eli\\\",\\\"Emerson\\\",\\\"Emery\\\",\\\"Emory\\\",\\\"Ennis\\\",\\\"Finley\\\",\\\"Fran\\\",\\\"Franni\\\",\\\"Frannie\\\",\\\"Franny\\\",\\\"Gabbi\\\",\\\"Gabbie\\\",\\\"Gabby\\\",\\\"Gabriel\\\",\\\"Gale\\\",\\\"Gray\\\",\\\"Grey\\\",\\\"Hadley\\\",\\\"Harley\\\",\\\"Harlow\\\",\\\"Harper\\\",\\\"Haven\\\",\\\"Hayden\\\",\\\"Hollis\\\",\\\"Hunter\\\",\\\"Indigo\\\",\\\"Isidore\\\",\\\"Isolde\\\",\\\"Izzi\\\",\\\"Izzie\\\",\\\"Izzy\\\",\\\"Jace\\\",\\\"Jack\\\",\\\"Jacki\\\",\\\"Jackie\\\",\\\"Jackson\\\",\\\"Jacky\\\",\\\"Jaden\\\",\\\"Jaeden\\\",\\\"Jamie\\\",\\\"Jay\\\",\\\"Jayden\\\",\\\"Jean\\\",\\\"Jeremiah\\\",\\\"Jerri\\\",\\\"Jerrie\\\",\\\"Jerry\\\",\\\"Jesse\\\",\\\"Jessica\\\",\\\"Jessie\\\",\\\"Joanne\\\",\\\"Jocelyn\\\",\\\"Jordan\\\",\\\"Jordyn\\\",\\\"Josiah\\\",\\\"Joss\\\",\\\"Joyce\\\",\\\"Jules\\\",\\\"Julian\\\",\\\"Justice\\\",\\\"Kaden\\\",\\\"Kai\\\",\\\"Kamryn\\\",\\\"Karter\\\",\\\"Kayden\\\",\\\"Keelan\\\",\\\"Kel\\\",\\\"Kendall\\\",\\\"Kim\\\",\\\"Kris\\\",\\\"Kristin\\\",\\\"Lake\\\",\\\"Landry\\\",\\\"Layton\\\",\\\"Lee\\\",\\\"Leighton\\\",\\\"Lennon\\\",\\\"Leslie\\\",\\\"Lester\\\",\\\"Lewis\\\",\\\"Liv\\\",\\\"Loren\\\",\\\"Louie\\\",\\\"Lynn\\\",\\\"Lyric\\\",\\\"Mackenzie\\\",\\\"Maddi\\\",\\\"Maddie\\\",\\\"Maddy\\\",\\\"Madison\\\",\\\"Mallory\\\",\\\"Mandel\\\",\\\"Mandi\\\",\\\"Mandie\\\",\\\"Mandy\\\",\\\"Manni\\\",\\\"Mannie\\\",\\\"Manny\\\",\\\"Marley\\\",\\\"Mathilda\\\",\\\"Matilda\\\",\\\"Matti\\\",\\\"Mattie\\\",\\\"Matty\\\",\\\"Max\\\",\\\"Maxine\\\",\\\"Maxwell\\\",\\\"Mel\\\",\\\"Melody\\\",\\\"Melvin\\\",\\\"Micah\\\",\\\"Mickey\\\",\\\"Micki\\\",\\\"Mickie\\\",\\\"Mikayla\\\",\\\"Milan\\\",\\\"Misha\\\",\\\"Montana\\\",\\\"Morgan\\\",\\\"Murphy\\\",\\\"Nat\\\",\\\"Nathalie\\\",\\\"Nathan\\\",\\\"Nathanael\\\",\\\"Nathaniel\\\",\\\"Nevada\\\",\\\"Nicki\\\",\\\"Nickie\\\",\\\"Nicky\\\",\\\"Nikita\\\",\\\"Oakley\\\",\\\"Ocean\\\",\\\"Oli\\\",\\\"Olive\\\",\\\"Oliver\\\",\\\"Olli\\\",\\\"Ollie\\\",\\\"Olly\\\",\\\"Paige\\\",\\\"Paisley\\\",\\\"Paris\\\",\\\"Parker\\\",\\\"Pat\\\",\\\"Patti\\\",\\\"Pattie\\\",\\\"Patty\\\",\\\"Payton\\\",\\\"Peyton\\\",\\\"Phoenix\\\",\\\"Piper\\\",\\\"Quinn\\\",\\\"Rain\\\",\\\"Raven\\\",\\\"Ray\\\",\\\"Reagan\\\",\\\"Reed\\\",\\\"Reese\\\",\\\"Remington\\\",\\\"Remy\\\",\\\"Rey\\\",\\\"Riley\\\",\\\"Ripley\\\",\\\"River\\\",\\\"Roan\\\",\\\"Robbi\\\",\\\"Robbie\\\",\\\"Robby\\\",\\\"Robin\\\",\\\"Rohan\\\",\\\"Ronni\\\",\\\"Ronnie\\\",\\\"Ronny\\\",\\\"Rory\\\",\\\"Rowan\\\",\\\"Rudy\\\",\\\"Rylan\\\",\\\"Rylee\\\",\\\"Sacha\\\",\\\"Sage\\\",\\\"Sal\\\",\\\"Sally\\\",\\\"Salvador\\\",\\\"Sammi\\\",\\\"Sammie\\\",\\\"Sammy\\\",\\\"Samuel\\\",\\\"Sandi\\\",\\\"Sandie\\\",\\\"Sandy\\\",\\\"Sascha\\\",\\\"Sasha\\\",\\\"Sawyer\\\",\\\"Scout\\\",\\\"Sean\\\",\\\"September\\\",\\\"Sevan\\\",\\\"Shannon\\\",\\\"Shawn\\\",\\\"Shelby\\\",\\\"Shelli\\\",\\\"Shellie\\\",\\\"Shelly\\\",\\\"Shelton\\\",\\\"Sheridan\\\",\\\"Shiloh\\\",\\\"Shirley\\\",\\\"Sidney\\\",\\\"Silver\\\",\\\"Sky\\\",\\\"Skylar\\\",\\\"Skyler\\\",\\\"Sloane\\\",\\\"Sparrow\\\",\\\"Spirit\\\",\\\"Stacey\\\",\\\"Steph\\\",\\\"Storm\\\",\\\"Sunny\\\",\\\"Tanner\\\",\\\"Tate\\\",\\\"Tatum\\\",\\\"Taylor\\\",\\\"Teagan\\\",\\\"Terri\\\",\\\"Terrie\\\",\\\"Terry\\\",\\\"Toby\\\",\\\"Toni\\\",\\\"Tonie\\\",\\\"Tony\\\",\\\"Tracy\\\",\\\"Trinidad\\\",\\\"Tyler\\\",\\\"Val\\\",\\\"Valentine\\\",\\\"Vic\\\",\\\"Vicky\\\",\\\"Viv\\\",\\\"West\\\",\\\"Whitney\\\",\\\"Willow\\\",\\\"Winter\\\",\\\"Zara\\\",\\\"Zion\\\"]\"}","{\"DisplayText:str\":\"Random Male Names\",\"DisplayIcon:num\":\"312\",\"NameSets:arraystr\":\"[\\\"Aamir\\\",\\\"Abbey\\\",\\\"Abbot\\\",\\\"Abdul\\\",\\\"Abdulkarim\\\",\\\"Abdullah\\\",\\\"Abner\\\",\\\"Ace\\\",\\\"Adam\\\",\\\"Addie\\\",\\\"Aditya\\\",\\\"Adolphe\\\",\\\"Adolphus\\\",\\\"Adrick\\\",\\\"Agamemnon\\\",\\\"Aguste\\\",\\\"Ahmad\\\",\\\"Ajay\\\",\\\"Alaa\\\",\\\"Albatros\\\",\\\"Alberto\\\",\\\"Alden\\\",\\\"Aldwin\\\",\\\"Aleck\\\",\\\"Aleks\\\",\\\"Aleksandrs\\\",\\\"Alex\\\",\\\"Alexander\\\",\\\"Alexei\\\",\\\"Algernon\\\",\\\"Alister\\\",\\\"Alix\\\",\\\"Allan\\\",\\\"Alley\\\",\\\"Alonso\\\",\\\"Alonzo\\\",\\\"Alvin\\\",\\\"Alwin\\\",\\\"Ambros\\\",\\\"Ambrosio\\\",\\\"Ambrosius\\\",\\\"Anatole\\\",\\\"Anders\\\",\\\"Andres\\\",\\\"Andrew\\\",\\\"Andy\\\",\\\"Angel\\\",\\\"Angelico\\\",\\\"Angus\\\",\\\"Ansell\\\",\\\"Antin\\\",\\\"Anton\\\",\\\"Antoni\\\",\\\"Antonin\\\",\\\"Antonio\\\",\\\"Antonius\\\",\\\"Apostolos\\\",\\\"Aram\\\",\\\"Archibold\\\",\\\"Arel\\\",\\\"Aristotle\\\",\\\"Arlo\\\",\\\"Armando\\\",\\\"Arne\\\",\\\"Arnie\\\",\\\"Aron\\\",\\\"Art\\\",\\\"Artur\\\",\\\"Arvie\\\",\\\"Arvin\\\",\\\"Arvind\\\",\\\"Arvy\\\",\\\"Ash\\\",\\\"Ashley\\\",\\\"Aubert\\\",\\\"Augustine\\\",\\\"Austen\\\",\\\"Avery\\\",\\\"Avi\\\",\\\"Avraham\\\",\\\"Baldwin\\\",\\\"Bancroft\\\",\\\"Barclay\\\",\\\"Barn\\\",\\\"Barnabas\\\",\\\"Barnaby\\\",\\\"Barnard\\\",\\\"Barnebas\\\",\\\"Baron\\\",\\\"Barret\\\",\\\"Barry\\\",\\\"Bart\\\",\\\"Bartel\\\",\\\"Barthel\\\",\\\"Bartlet\\\",\\\"Bartlett\\\",\\\"Basil\\\",\\\"Batholomew\\\",\\\"Bay\\\",\\\"Bealle\\\",\\\"Bearnard\\\",\\\"Beauregard\\\",\\\"Beck\\\",\\\"Bennet\\\",\\\"Berke\\\",\\\"Berkeley\\\",\\\"Bernd\\\",\\\"Bernhard\\\",\\\"Bernie\\\",\\\"Bertie\\\",\\\"Bill\\\",\\\"Bing\\\",\\\"Binky\\\",\\\"Bishop\\\",\\\"Blair\\\",\\\"Bob\\\",\\\"Bobby\\\",\\\"Boyd\\\",\\\"Bradly\\\",\\\"Brandon\\\",\\\"Bret\\\",\\\"Brewster\\\",\\\"Brian\\\",\\\"Broddy\\\",\\\"Broderick\\\",\\\"Bronson\\\",\\\"Brooke\\\",\\\"Bryan\\\",\\\"Burton\\\",\\\"Butch\\\",\\\"Byron\\\",\\\"Cal\\\",\\\"Cam\\\",\\\"Carlyle\\\",\\\"Carroll\\\",\\\"Carter\\\",\\\"Caryl\\\",\\\"Casey\\\",\\\"Cecil\\\",\\\"Cesar\\\",\\\"Chaddie\\\",\\\"Chaddy\\\",\\\"Chalmers\\\",\\\"Chan\\\",\\\"Chanderjit\\\",\\\"Charles\\\",\\\"Charlie\\\",\\\"Chauncey\\\",\\\"Chen\\\",\\\"Chester\\\",\\\"Cheston\\\",\\\"Chet\\\",\\\"Chevy\\\",\\\"Christof\\\",\\\"Christofer\\\",\\\"Christophe\\\",\\\"Christopher\\\",\\\"Christos\\\",\\\"Christy\\\",\\\"Chrisy\\\",\\\"Clair\\\",\\\"Clark\\\",\\\"Clarke\\\",\\\"Claus\\\",\\\"Clayborn\\\",\\\"Cleland\\\",\\\"Clem\\\",\\\"Clemmie\\\",\\\"Clive\\\",\\\"Clyde\\\",\\\"Cobby\\\",\\\"Colbert\\\",\\\"Collin\\\",\\\"Connor\\\",\\\"Constantine\\\",\\\"Corby\\\",\\\"Cornellis\\\",\\\"Corwin\\\",\\\"Crawford\\\",\\\"Creighton\\\",\\\"Cristopher\\\",\\\"Curtice\\\",\\\"Cyrill\\\",\\\"Cyrille\\\",\\\"Cyrus\\\",\\\"Dabney\\\",\\\"Dale\\\",\\\"Dan\\\",\\\"Dani\\\",\\\"Dannie\\\",\\\"Dante\\\",\\\"Darby\\\",\\\"Darrel\\\",\\\"Darrick\\\",\\\"Darryl\\\",\\\"Darth\\\",\\\"Darwin\\\",\\\"Daryl\\\",\\\"Daryle\\\",\\\"David\\\",\\\"Davie\\\",\\\"Davy\\\",\\\"Dawson\\\",\\\"Deane\\\",\\\"Delbert\\\",\\\"Delmar\\\",\\\"Demetris\\\",\\\"Derrek\\\",\\\"Derrol\\\",\\\"Derron\\\",\\\"Deryl\\\",\\\"Desmond\\\",\\\"Devon\\\",\\\"Dexter\\\",\\\"Dimitrou\\\",\\\"Dion\\\",\\\"Dmitri\\\",\\\"Dom\\\",\\\"Domenico\\\",\\\"Donal\\\",\\\"Donn\\\",\\\"Douglas\\\",\\\"Douglass\\\",\\\"Douglis\\\",\\\"Dov\\\",\\\"Doyle\\\",\\\"Drake\\\",\\\"Dryke\\\",\\\"Duane\\\",\\\"Duffie\\\",\\\"Duncan\\\",\\\"Durante\\\",\\\"Dwayne\\\",\\\"Dwight\\\",\\\"Dyson\\\",\\\"Earle\\\",\\\"Ebeneser\\\",\\\"Ed\\\",\\\"Eddy\\\",\\\"Eduard\\\",\\\"Edwin\\\",\\\"Ehud\\\",\\\"Eldon\\\",\\\"Eli\\\",\\\"Elias\\\",\\\"Elihu\\\",\\\"Elijah\\\",\\\"Elliott\\\",\\\"Elroy\\\",\\\"Elton\\\",\\\"Elvin\\\",\\\"Elvis\\\",\\\"Ely\\\",\\\"Emery\\\",\\\"Emmery\\\",\\\"Emmott\\\",\\\"Emmy\\\",\\\"Engelbert\\\",\\\"Englebart\\\",\\\"Enoch\\\",\\\"Enrico\\\",\\\"Erek\\\",\\\"Eric\\\",\\\"Ernie\\\",\\\"Ernst\\\",\\\"Erny\\\",\\\"Errol\\\",\\\"Erwin\\\",\\\"Esau\\\",\\\"Esteban\\\",\\\"Ethelred\\\",\\\"Etienne\\\",\\\"Euclid\\\",\\\"Eugene\\\",\\\"Evelyn\\\",\\\"Ezechiel\\\",\\\"Ezra\\\",\\\"Ferdie\\\",\\\"Ferdinand\\\",\\\"Ferdy\\\",\\\"Fergus\\\",\\\"Ferinand\\\",\\\"Filbert\\\",\\\"Filipe\\\",\\\"Filmore\\\",\\\"Finley\\\",\\\"Finn\\\",\\\"Fitzgerald\\\",\\\"Fletcher\\\",\\\"Floyd\\\",\\\"Flynn\\\",\\\"Fons\\\",\\\"Fonz\\\",\\\"Fonzie\\\",\\\"Forest\\\",\\\"Forrest\\\",\\\"Forster\\\",\\\"Foster\\\",\\\"Fox\\\",\\\"Francesco\\\",\\\"Frank\\\",\\\"Frankie\\\",\\\"Franklyn\\\",\\\"Franz\\\",\\\"Freddie\\\",\\\"Frederico\\\",\\\"Fredric\\\",\\\"Fredrick\\\",\\\"Freeman\\\",\\\"Friedric\\\",\\\"Fritz\\\",\\\"Fyodor\\\",\\\"Gabriel\\\",\\\"Gale\\\",\\\"Galen\\\",\\\"Gardener\\\",\\\"Gardiner\\\",\\\"Garey\\\",\\\"Garfinkel\\\",\\\"Garret\\\",\\\"Garwood\\\",\\\"Gasper\\\",\\\"Gav\\\",\\\"Gaven\\\",\\\"Gearard\\\",\\\"Geoffrey\\\",\\\"Geoffry\\\",\\\"Gere\\\",\\\"Gerhard\\\",\\\"Germaine\\\",\\\"Gerome\\\",\\\"Gerrard\\\",\\\"Gershon\\\",\\\"Giacomo\\\",\\\"Giancarlo\\\",\\\"Giavani\\\",\\\"Giffard\\\",\\\"Giffer\\\",\\\"Giffie\\\",\\\"Giffy\\\",\\\"Gilburt\\\",\\\"Giordano\\\",\\\"Giorgio\\\",\\\"Giraldo\\\",\\\"Glen\\\",\\\"Glenn\\\",\\\"Godart\\\",\\\"Godfrey\\\",\\\"Gomer\\\",\\\"Goober\\\",\\\"Gordie\\\",\\\"Grady\\\",\\\"Graham\\\",\\\"Grant\\\",\\\"Greg\\\",\\\"Gregor\\\",\\\"Gregorio\\\",\\\"Gregory\\\",\\\"Gretchen\\\",\\\"Grover\\\",\\\"Guillaume\\\",\\\"Gunner\\\",\\\"Gunther\\\",\\\"Gustavo\\\",\\\"Gustavus\\\",\\\"Guy\\\",\\\"Hadleigh\\\",\\\"Hadrian\\\",\\\"Hagen\\\",\\\"Hailey\\\",\\\"Hakeem\\\",\\\"Haleigh\\\",\\\"Halvard\\\",\\\"Ham\\\",\\\"Hamlet\\\",\\\"Hamlin\\\",\\\"Hans\\\",\\\"Harald\\\",\\\"Harman\\\",\\\"Harris\\\",\\\"Harry\\\",\\\"Hartley\\\",\\\"Hartwell\\\",\\\"Harv\\\",\\\"Hasheem\\\",\\\"Haskel\\\",\\\"Hastings\\\",\\\"Haven\\\",\\\"Haydon\\\",\\\"Hector\\\",\\\"Heinrich\\\",\\\"Hendrick\\\",\\\"Hermy\\\",\\\"Herschel\\\",\\\"Hew\\\",\\\"Hewe\\\",\\\"Hewet\\\",\\\"Hewitt\\\",\\\"Hilbert\\\",\\\"Hill\\\",\\\"Hillary\\\",\\\"Hillery\\\",\\\"Hiro\\\",\\\"Hodge\\\",\\\"Horace\\\",\\\"Horatius\\\",\\\"Howard\\\",\\\"Hoyt\\\",\\\"Hudson\\\",\\\"Hugh\\\",\\\"Hugo\\\",\\\"Ian\\\",\\\"Ichabod\\\",\\\"Iggie\\\",\\\"Ignace\\\",\\\"Ignacius\\\",\\\"Ignazio\\\",\\\"Igor\\\",\\\"Ikey\\\",\\\"Immanuel\\\",\\\"Ingamar\\\",\\\"Ingemar\\\",\\\"Inglebert\\\",\\\"Ingmar\\\",\\\"Ira\\\",\\\"Irvine\\\",\\\"Isaak\\\",\\\"Isaiah\\\",\\\"Ismail\\\",\\\"Israel\\\",\\\"Ivan\\\",\\\"Jackson\\\",\\\"Jan\\\",\\\"Janos\\\",\\\"Jared\\\",\\\"Jarrett\\\",\\\"Jarvis\\\",\\\"Jason\\\",\\\"Jean-Lou\\\",\\\"Jean-Pierre\\\",\\\"Jeb\\\",\\\"Jedediah\\\",\\\"Jefferey\\\",\\\"Jeffie\\\",\\\"Jeffrey\\\",\\\"Jephthah\\\",\\\"Jeremias\\\",\\\"Jermain\\\",\\\"Jermayne\\\",\\\"Jeromy\\\",\\\"Jerrie\\\",\\\"Jerrold\\\",\\\"Jerrome\\\",\\\"Jerry\\\",\\\"Jervis\\\",\\\"Jessie\\\",\\\"Jethro\\\",\\\"Jimmie\\\",\\\"Jo\\\",\\\"Joaquin\\\",\\\"Jock\\\",\\\"Jodie\\\",\\\"Joel\\\",\\\"Johann\\\",\\\"Johannes\\\",\\\"John-David\\\",\\\"John-Patrick\\\",\\\"Johnnie\\\",\\\"Johny\\\",\\\"Jonathan\\\",\\\"Jonathon\\\",\\\"Jordan\\\",\\\"Jordy\\\",\\\"Jorge\\\",\\\"Jory\\\",\\\"Joshua\\\",\\\"Judith\\\",\\\"Jules\\\",\\\"Julian\\\",\\\"Julio\\\",\\\"Kalle\\\",\\\"Kalman\\\",\\\"Kam\\\",\\\"Karim\\\",\\\"Karsten\\\",\\\"Keefe\\\",\\\"Keenan\\\",\\\"Keil\\\",\\\"Keith\\\",\\\"Kellen\\\",\\\"Kelley\\\",\\\"Kelsey\\\",\\\"Ken\\\",\\\"Kendall\\\",\\\"Kendrick\\\",\\\"Kenneth\\\",\\\"Kermit\\\",\\\"Kingsley\\\",\\\"Kip\\\",\\\"Kit\\\",\\\"Klee\\\",\\\"Knox\\\",\\\"Konrad\\\",\\\"Kory\\\",\\\"Kostas\\\",\\\"Krishna\\\",\\\"Kristopher\\\",\\\"Kurtis\\\",\\\"Kyle\\\",\\\"Lamar\\\",\\\"Lambert\\\",\\\"Lance\\\",\\\"Lauren\\\",\\\"Laurens\\\",\\\"Laurent\\\",\\\"Laurie\\\",\\\"Lawson\\\",\\\"Lawton\\\",\\\"Layton\\\",\\\"Lazaro\\\",\\\"Lefty\\\",\\\"Lemar\\\",\\\"Leo\\\",\\\"Leon\\\",\\\"Leonardo\\\",\\\"Leonerd\\\",\\\"Leopold\\\",\\\"Leroy\\\",\\\"Lester\\\",\\\"Liam\\\",\\\"Linus\\\",\\\"Llewellyn\\\",\\\"Lon\\\",\\\"Lonny\\\",\\\"Loren\\\",\\\"Lorenzo\\\",\\\"Lorne\\\",\\\"Lothar\\\",\\\"Lou\\\",\\\"Louis\\\",\\\"Luciano\\\",\\\"Ludvig\\\",\\\"Lukas\\\",\\\"Lyn\\\",\\\"Mack\\\",\\\"Magnum\\\",\\\"Magnus\\\",\\\"Mahmoud\\\",\\\"Major\\\",\\\"Manuel\\\",\\\"Marc\\\",\\\"Marcio\\\",\\\"Marietta\\\",\\\"Marion\\\",\\\"Marko\\\",\\\"Markos\\\",\\\"Marshal\\\",\\\"Marshall\\\",\\\"Marten\\\",\\\"Martin\\\",\\\"Matthaeus\\\",\\\"Mattheus\\\",\\\"Matthias\\\",\\\"Matthieu\\\",\\\"Maurie\\\",\\\"Maury\\\",\\\"Maynard\\\",\\\"Mead\\\",\\\"Melvin\\\",\\\"Mendie\\\",\\\"Meredith\\\",\\\"Merlin\\\",\\\"Merril\\\",\\\"Mervin\\\",\\\"Merwin\\\",\\\"Mic\\\",\\\"Michal\\\",\\\"Michale\\\",\\\"Micheal\\\",\\\"Mick\\\",\\\"Miguel\\\",\\\"Mika\\\",\\\"Mikael\\\",\\\"Mikel\\\",\\\"Mikhail\\\",\\\"Milo\\\",\\\"Mitchael\\\",\\\"Mitchell\\\",\\\"Moe\\\",\\\"Mohammad\\\",\\\"Moises\\\",\\\"Moishe\\\",\\\"Monte\\\",\\\"Mordecai\\\",\\\"Morley\\\",\\\"Morly\\\",\\\"Morris\\\",\\\"Morry\\\",\\\"Morse\\\",\\\"Mort\\\",\\\"Mose\\\",\\\"Muffin\\\",\\\"Muhammad\\\",\\\"Murdock\\\",\\\"Myron\\\",\\\"Nahum\\\",\\\"Neale\\\",\\\"Neil\\\",\\\"Nels\\\",\\\"Nelsen\\\",\\\"Nevile\\\",\\\"Nick\\\",\\\"Nickey\\\",\\\"Nickie\\\",\\\"Nicky\\\",\\\"Nico\\\",\\\"Niels\\\",\\\"Nigel\\\",\\\"Nikita\\\",\\\"Nikolai\\\",\\\"Nils\\\",\\\"Nilson\\\",\\\"Noble\\\",\\\"Noe\\\",\\\"Noel\\\",\\\"Noland\\\",\\\"Norbert\\\",\\\"Normand\\\",\\\"Northrup\\\",\\\"Norwood\\\",\\\"Odin\\\",\\\"Olag\\\",\\\"Olivier\\\",\\\"Orazio\\\",\\\"Orin\\\",\\\"Orion\\\",\\\"Osbert\\\",\\\"Osborn\\\",\\\"Osgood\\\",\\\"Osmund\\\",\\\"Oswald\\\",\\\"Othello\\\",\\\"Otto\\\",\\\"Ozzie\\\",\\\"Pace\\\",\\\"Paco\\\",\\\"Paige\\\",\\\"Pail\\\",\\\"Parke\\\",\\\"Parker\\\",\\\"Parrnell\\\",\\\"Parsifal\\\",\\\"Pasquale\\\",\\\"Pat\\\",\\\"Paten\\\",\\\"Patric\\\",\\\"Patrice\\\",\\\"Patrick\\\",\\\"Paul\\\",\\\"Pavel\\\",\\\"Pepe\\\",\\\"Perry\\\",\\\"Petey\\\",\\\"Petr\\\",\\\"Peyton\\\",\\\"Philbert\\\",\\\"Phillip\\\",\\\"Piotr\\\",\\\"Pip\\\",\\\"Praneetf\\\",\\\"Prasad\\\",\\\"Prentiss\\\",\\\"Prescott\\\",\\\"Preston\\\",\\\"Prince\\\",\\\"Purcell\\\",\\\"Quent\\\",\\\"Quiggly\\\",\\\"Quigman\\\",\\\"Quill\\\",\\\"Quincey\\\",\\\"Quincy\\\",\\\"Quint\\\",\\\"Rab\\\",\\\"Rad\\\",\\\"Radcliffe\\\",\\\"Rafe\\\",\\\"Rahul\\\",\\\"Ralph\\\",\\\"Ramon\\\",\\\"Ramsey\\\",\\\"Rand\\\",\\\"Randal\\\",\\\"Randall\\\",\\\"Ray\\\",\\\"Raymundo\\\",\\\"Raynor\\\",\\\"Reagan\\\",\\\"Redford\\\",\\\"Redmond\\\",\\\"Reg\\\",\\\"Regan\\\",\\\"Regen\\\",\\\"Reggie\\\",\\\"Reggis\\\",\\\"Reginald\\\",\\\"Reginauld\\\",\\\"Reinhard\\\",\\\"Rem\\\",\\\"Remus\\\",\\\"Renaldo\\\",\\\"Renaud\\\",\\\"Reube\\\",\\\"Reuben\\\",\\\"Reynard\\\",\\\"Reza\\\",\\\"Rich\\\",\\\"Richard\\\",\\\"Richie\\\",\\\"Rickie\\\",\\\"Ricky\\\",\\\"Rik\\\",\\\"Ripley\\\",\\\"Robert\\\",\\\"Roberto\\\",\\\"Robinson\\\",\\\"Rocky\\\",\\\"Rodd\\\",\\\"Roddy\\\",\\\"Roderich\\\",\\\"Rodney\\\",\\\"Rodolphe\\\",\\\"Rodrigo\\\",\\\"Rog\\\",\\\"Roger\\\",\\\"Roice\\\",\\\"Roland\\\",\\\"Rolfe\\\",\\\"Rolph\\\",\\\"Roni\\\",\\\"Ronnie\\\",\\\"Roosevelt\\\",\\\"Roscoe\\\",\\\"Rowland\\\",\\\"Royce\\\",\\\"Ruby\\\",\\\"Rudolf\\\",\\\"Rudyard\\\",\\\"Rufe\\\",\\\"Russel\\\",\\\"Russell\\\",\\\"Rutledge\\\",\\\"Rutter\\\",\\\"Salem\\\",\\\"Salim\\\",\\\"Salmon\\\",\\\"Salomo\\\",\\\"Salvador\\\",\\\"Salvidor\\\",\\\"Sammy\\\",\\\"Sander\\\",\\\"Sandy\\\",\\\"Sanford\\\",\\\"Sasha\\\",\\\"Saul\\\",\\\"Sauncho\\\",\\\"Saunders\\\",\\\"Saw\\\",\\\"Sawyer\\\",\\\"Say\\\",\\\"Sayer\\\",\\\"Sayers\\\",\\\"Sayres\\\",\\\"Schroeder\\\",\\\"Schuyler\\\",\\\"Scot\\\",\\\"Scotti\\\",\\\"Scottie\\\",\\\"Selby\\\",\\\"Sergio\\\",\\\"Shaine\\\",\\\"Shannon\\\",\\\"Shaun\\\",\\\"Shawn\\\",\\\"Shayne\\\",\\\"Shea\\\",\\\"Sheffie\\\",\\\"Sheffield\\\",\\\"Sheffy\\\",\\\"Shell\\\",\\\"Shepperd\\\",\\\"Sherlocke\\\",\\\"Shurlocke\\\",\\\"Shurwood\\\",\\\"Siffre\\\",\\\"Sig\\\",\\\"Sigfried\\\",\\\"Sigmund\\\",\\\"Silvan\\\",\\\"Silvano\\\",\\\"Silvester\\\",\\\"Simeon\\\",\\\"Simone\\\",\\\"Sinclare\\\",\\\"Siward\\\",\\\"Skell\\\",\\\"Skip\\\",\\\"Skipp\\\",\\\"Skylar\\\",\\\"Sloane\\\",\\\"Sly\\\",\\\"Sol\\\",\\\"Sollie\\\",\\\"Solly\\\",\\\"Son\\\",\\\"Sonny\\\",\\\"Spence\\\",\\\"Spike\\\",\\\"Staford\\\",\\\"Stanford\\\",\\\"Stanislaw\\\",\\\"Stanly\\\",\\\"Stanton\\\",\\\"Stanwood\\\",\\\"Sterne\\\",\\\"Steve\\\",\\\"Steven\\\",\\\"Stew\\\",\\\"Stillmann\\\",\\\"Sting\\\",\\\"Stu\\\",\\\"Stuart\\\",\\\"Sturgis\\\",\\\"Sunny\\\",\\\"Sven\\\",\\\"Swen\\\",\\\"Sydney\\\",\\\"Sylvan\\\",\\\"Taber\\\",\\\"Tabor\\\",\\\"Taddeus\\\",\\\"Tadeas\\\",\\\"Taite\\\",\\\"Talbert\\\",\\\"Talbot\\\",\\\"Tallie\\\",\\\"Tamas\\\",\\\"Tanner\\\",\\\"Tanney\\\",\\\"Tanny\\\",\\\"Tarrant\\\",\\\"Tarzan\\\",\\\"Tate\\\",\\\"Ted\\\",\\\"Teddie\\\",\\\"Teddy\\\",\\\"Tedrick\\\",\\\"Teodoor\\\",\\\"Teodor\\\",\\\"Terence\\\",\\\"Terrell\\\",\\\"Terrence\\\",\\\"Terri\\\",\\\"Terrill\\\",\\\"Thaddus\\\",\\\"Thadeus\\\",\\\"Thaine\\\",\\\"Thane\\\",\\\"Thaxter\\\",\\\"Theodore\\\",\\\"Thor\\\",\\\"Thorndike\\\",\\\"Thornton\\\",\\\"Thorny\\\",\\\"Thurstan\\\",\\\"Thurston\\\",\\\"Tiebold\\\",\\\"Tim\\\",\\\"Timmie\\\",\\\"Timotheus\\\",\\\"Tobe\\\",\\\"Tobiah\\\",\\\"Tobie\\\",\\\"Toddy\\\",\\\"Tomas\\\",\\\"Tomlin\\\",\\\"Tony\\\",\\\"Torey\\\",\\\"Torin\\\",\\\"Torrin\\\",\\\"Town\\\",\\\"Tracey\\\",\\\"Travers\\\",\\\"Tray\\\",\\\"Tre\\\",\\\"Trent\\\",\\\"Trev\\\",\\\"Trever\\\",\\\"Trevor\\\",\\\"Truman\\\",\\\"Tuckie\\\",\\\"Tucky\\\",\\\"Tull\\\",\\\"Tulley\\\",\\\"Ty\\\",\\\"Tyler\\\",\\\"Tymon\\\",\\\"Tyrus\\\",\\\"Tyson\\\",\\\"Ugo\\\",\\\"Ulberto\\\",\\\"Ulric\\\",\\\"Ulrich\\\",\\\"Ulrick\\\",\\\"Urbanus\\\",\\\"Uri\\\",\\\"Urson\\\",\\\"Val\\\",\\\"Valdemar\\\",\\\"Vale\\\",\\\"Vasilis\\\",\\\"Vasily\\\",\\\"Vassily\\\",\\\"Vern\\\",\\\"Verne\\\",\\\"Verney\\\",\\\"Vernon\\\",\\\"Vibhu\\\",\\\"Vijay\\\",\\\"Vin\\\",\\\"Vince\\\",\\\"Vincents\\\",\\\"Vinny\\\",\\\"Virgilio\\\",\\\"Vito\\\",\\\"Vladimir\\\",\\\"Wait\\\",\\\"Waiter\\\",\\\"Wald\\\",\\\"Waldemar\\\",\\\"Walden\\\",\\\"Waldo\\\",\\\"Waldon\\\",\\\"Wallace\\\",\\\"Wallache\\\",\\\"Wallas\\\",\\\"Wallis\\\",\\\"Wally\\\",\\\"Walsh\\\",\\\"Walter\\\",\\\"Warde\\\",\\\"Warden\\\",\\\"Ware\\\",\\\"Waring\\\",\\\"Warren\\\",\\\"Waylan\\\",\\\"Wayland\\\",\\\"Waylon\\\",\\\"Webb\\\",\\\"Weider\\\",\\\"Wendall\\\",\\\"Wendell\\\",\\\"Wesley\\\",\\\"Westbrook\\\",\\\"Westbrooke\\\",\\\"Weston\\\",\\\"Whitaker\\\",\\\"Wiley\\\",\\\"Wilhelm\\\",\\\"Willdon\\\",\\\"Willie\\\",\\\"Wilmer\\\",\\\"Winford\\\",\\\"Winn\\\",\\\"Winny\\\",\\\"Winston\\\",\\\"Wit\\\",\\\"Witold\\\",\\\"Wittie\\\",\\\"Witty\\\",\\\"Woodrow\\\",\\\"Woody\\\",\\\"Wyatan\\\",\\\"Wyatt\\\",\\\"Wynton\\\",\\\"Yanaton\\\",\\\"Yance\\\",\\\"Yehudi\\\",\\\"Yigal\\\",\\\"Zacharias\\\",\\\"Zachery\\\",\\\"Zack\\\",\\\"Zak\\\",\\\"Zane\\\",\\\"Zary\\\",\\\"Zebulon\\\",\\\"Zed\\\",\\\"Zerk\\\",\\\"Zollie\\\",\\\"Zolly\\\"]\"}","{\"DisplayText:str\":\"Random Female Names\",\"DisplayIcon:num\":\"309\",\"NameSets:arraystr\":\"[\\\"Abbi\\\",\\\"Abigael\\\",\\\"Adah\\\",\\\"Addie\\\",\\\"Adeline\\\",\\\"Adena\\\",\\\"Adiana\\\",\\\"Adora\\\",\\\"Adore\\\",\\\"Adorne\\\",\\\"Adrian\\\",\\\"Adriana\\\",\\\"Adriane\\\",\\\"Adrianna\\\",\\\"Adrianne\\\",\\\"Adriena\\\",\\\"Agna\\\",\\\"Agnola\\\",\\\"Aida\\\",\\\"Aidan\\\",\\\"Aila\\\",\\\"Aile\\\",\\\"Aime\\\",\\\"Alayne\\\",\\\"Aleece\\\",\\\"Alessandra\\\",\\\"Alfie\\\",\\\"Alica\\\",\\\"Alice\\\",\\\"Alina\\\",\\\"Aline\\\",\\\"Alis\\\",\\\"Alisun\\\",\\\"Aliza\\\",\\\"Alleen\\\",\\\"Allene\\\",\\\"Allison\\\",\\\"Allyce\\\",\\\"Allyson\\\",\\\"Alma\\\",\\\"Almeria\\\",\\\"Alvinia\\\",\\\"Amalie\\\",\\\"Ame\\\",\\\"Amie\\\",\\\"Anabel\\\",\\\"Anabella\\\",\\\"Andi\\\",\\\"Andra\\\",\\\"Andreana\\\",\\\"Andromache\\\",\\\"Anette\\\",\\\"Ange\\\",\\\"Angelina\\\",\\\"Ania\\\",\\\"Anitra\\\",\\\"Ann\\\",\\\"Anna\\\",\\\"Annabela\\\",\\\"Annalena\\\",\\\"Annamaria\\\",\\\"Annette\\\",\\\"Annice\\\",\\\"Appolonia\\\",\\\"Arda\\\",\\\"Ardelis\\\",\\\"Ardine\\\",\\\"Ardith\\\",\\\"Ardyth\\\",\\\"Aridatha\\\",\\\"Arleta\\\",\\\"Arleyne\\\",\\\"Arlina\\\",\\\"Arline\\\",\\\"Arly\\\",\\\"Ashlen\\\",\\\"Ashley\\\",\\\"Ashlie\\\",\\\"Asia\\\",\\\"Astra\\\",\\\"Atalanta\\\",\\\"Athena\\\",\\\"Atlante\\\",\\\"Aubrie\\\",\\\"Audrey\\\",\\\"Aurel\\\",\\\"Aurelia\\\",\\\"Avie\\\",\\\"Avrit\\\",\\\"Bamby\\\",\\\"Barbey\\\",\\\"Barbie\\\",\\\"Barry\\\",\\\"Bathsheba\\\",\\\"Batsheva\\\",\\\"Bea\\\",\\\"Beatrice\\\",\\\"Beatrisa\\\",\\\"Beatriz\\\",\\\"Beau\\\",\\\"Becca\\\",\\\"Becki\\\",\\\"Beckie\\\",\\\"Becky\\\",\\\"Beitris\\\",\\\"Bel\\\",\\\"Belita\\\",\\\"Bell\\\",\\\"Bellina\\\",\\\"Benetta\\\",\\\"Benita\\\",\\\"Beret\\\",\\\"Berna\\\",\\\"Bernadine\\\",\\\"Bernardine\\\",\\\"Berri\\\",\\\"Berry\\\",\\\"Berte\\\",\\\"Bertha\\\",\\\"Betta\\\",\\\"Bette\\\",\\\"Betti\\\",\\\"Bevvy\\\",\\\"Bianca\\\",\\\"Bianka\\\",\\\"Billy\\\",\\\"Binny\\\",\\\"Birgit\\\",\\\"Blanch\\\",\\\"Blinni\\\",\\\"Blithe\\\",\\\"Blondell\\\",\\\"Bobina\\\",\\\"Bobinette\\\",\\\"Brandea\\\",\\\"Brandise\\\",\\\"Breena\\\",\\\"Brenda\\\",\\\"Brenn\\\",\\\"Brianne\\\",\\\"Bridgett\\\",\\\"Bridie\\\",\\\"Brier\\\",\\\"Brietta\\\",\\\"Brita\\\",\\\"Britni\\\",\\\"Britta\\\",\\\"Brook\\\",\\\"Brooks\\\",\\\"Camila\\\",\\\"Cammie\\\",\\\"Cappella\\\",\\\"Caprice\\\",\\\"Carena\\\",\\\"Carie\\\",\\\"Carlee\\\",\\\"Carline\\\",\\\"Carlita\\\",\\\"Carlyn\\\",\\\"Carlynne\\\",\\\"Carmelia\\\",\\\"Carmella\\\",\\\"Carmine\\\",\\\"Carmon\\\",\\\"Carola\\\",\\\"Carolyne\\\",\\\"Carrie\\\",\\\"Caryn\\\",\\\"Casia\\\",\\\"Cassandry\\\",\\\"Cassey\\\",\\\"Cassi\\\",\\\"Cat\\\",\\\"Cate\\\",\\\"Catherina\\\",\\\"Cathryn\\\",\\\"Catrina\\\",\\\"Ceil\\\",\\\"Cele\\\",\\\"Celene\\\",\\\"Celestia\\\",\\\"Celinka\\\",\\\"Chanda\\\",\\\"Charin\\\",\\\"Charity\\\",\\\"Charlean\\\",\\\"Charlot\\\",\\\"Charmaine\\\",\\\"Charmane\\\",\\\"Chelsey\\\",\\\"Cherida\\\",\\\"Cherlyn\\\",\\\"Chickie\\\",\\\"Chloe\\\",\\\"Chloris\\\",\\\"Chriss\\\",\\\"Chrissy\\\",\\\"Christal\\\",\\\"Christean\\\",\\\"Christen\\\",\\\"Christie\\\",\\\"Chrysa\\\",\\\"Chrystal\\\",\\\"Chryste\\\",\\\"Cindee\\\",\\\"Cindelyn\\\",\\\"Cinderella\\\",\\\"Cindie\\\",\\\"Cindra\\\",\\\"Claire\\\",\\\"Clara\\\",\\\"Claretta\\\",\\\"Clarette\\\",\\\"Clari\\\",\\\"Claribel\\\",\\\"Clarissa\\\",\\\"Clarisse\\\",\\\"Claudette\\\",\\\"Clea\\\",\\\"Clemence\\\",\\\"Clovis\\\",\\\"Colleen\\\",\\\"Collete\\\",\\\"Colly\\\",\\\"Conchita\\\",\\\"Connie\\\",\\\"Constantina\\\",\\\"Corabel\\\",\\\"Cordelia\\\",\\\"Cordula\\\",\\\"Coreen\\\",\\\"Corette\\\",\\\"Corey\\\",\\\"Cori\\\",\\\"Coriss\\\",\\\"Cosette\\\",\\\"Crista\\\",\\\"Cristabel\\\",\\\"Cristin\\\",\\\"Crystie\\\",\\\"Cynthea\\\",\\\"Dalenna\\\",\\\"Daloris\\\",\\\"Danell\\\",\\\"Danica\\\",\\\"Daniela\\\",\\\"Daniele\\\",\\\"Danita\\\",\\\"Danya\\\",\\\"Darb\\\",\\\"Darda\\\",\\\"Daria\\\",\\\"Darya\\\",\\\"Davida\\\",\\\"Davine\\\",\\\"Deana\\\",\\\"Deb\\\",\\\"Debra\\\",\\\"Dee\\\",\\\"Deena\\\",\\\"Deidre\\\",\\\"Deina\\\",\\\"Dell\\\",\\\"Delores\\\",\\\"Demetris\\\",\\\"Denice\\\",\\\"Denyse\\\",\\\"Desaree\\\",\\\"Desiree\\\",\\\"Devan\\\",\\\"Devin\\\",\\\"Devinne\\\",\\\"Devon\\\",\\\"Devonne\\\",\\\"Dew\\\",\\\"Diamond\\\",\\\"Diandra\\\",\\\"Diane\\\",\\\"Dianna\\\",\\\"Didi\\\",\\\"Dierdre\\\",\\\"Dion\\\",\\\"Dody\\\",\\\"Dollie\\\",\\\"Dona\\\",\\\"Donnamarie\\\",\\\"Donny\\\",\\\"Doralin\\\",\\\"Doreen\\\",\\\"Dorelia\\\",\\\"Dorella\\\",\\\"Dorie\\\",\\\"Doris\\\",\\\"Dorit\\\",\\\"Dorita\\\",\\\"Dorolisa\\\",\\\"Dorri\\\",\\\"Dorthy\\\",\\\"Dosi\\\",\\\"Dot\\\",\\\"Dotti\\\",\\\"Dove\\\",\\\"Dulcia\\\",\\\"E'Lane\\\",\\\"Eadith\\\",\\\"Edeline\\\",\\\"Eden\\\",\\\"Edie\\\",\\\"Editha\\\",\\\"Edwina\\\",\\\"Edythe\\\",\\\"Eilis\\\",\\\"Elane\\\",\\\"Elbertina\\\",\\\"Eleanora\\\",\\\"Eleonora\\\",\\\"Elfreda\\\",\\\"Elisabeth\\\",\\\"Elizabet\\\",\\\"Elka\\\",\\\"Elke\\\",\\\"Elladine\\\",\\\"Ellie\\\",\\\"Ellissa\\\",\\\"Elmira\\\",\\\"Elnora\\\",\\\"Eloisa\\\",\\\"Eloise\\\",\\\"Elvina\\\",\\\"Elvira\\\",\\\"Elyn\\\",\\\"Elysha\\\",\\\"Emeline\\\",\\\"Emelita\\\",\\\"Emmaline\\\",\\\"Emmalynne\\\",\\\"Emmye\\\",\\\"Emylee\\\",\\\"Engracia\\\",\\\"Enrica\\\",\\\"Eolande\\\",\\\"Erica\\\",\\\"Ericha\\\",\\\"Ermina\\\",\\\"Ernestine\\\",\\\"Esma\\\",\\\"Esme\\\",\\\"Esmerelda\\\",\\\"Essa\\\",\\\"Ester\\\",\\\"Ethelda\\\",\\\"Ethyl\\\",\\\"Etta\\\",\\\"Evangelina\\\",\\\"Evelina\\\",\\\"Eveline\\\",\\\"Evelyn\\\",\\\"Evvy\\\",\\\"Eyde\\\",\\\"Eydie\\\",\\\"Fae\\\",\\\"Faith\\\",\\\"Fancie\\\",\\\"Fania\\\",\\\"Fannie\\\",\\\"Fanny\\\",\\\"Farica\\\",\\\"Faustina\\\",\\\"Fayth\\\",\\\"Felicle\\\",\\\"Fernande\\\",\\\"Fifine\\\",\\\"Filippa\\\",\\\"Fleurette\\\",\\\"Flo\\\",\\\"Florella\\\",\\\"Floria\\\",\\\"Florice\\\",\\\"Florinda\\\",\\\"Floris\\\",\\\"Florri\\\",\\\"Flossi\\\",\\\"Flower\\\",\\\"Francene\\\",\\\"Francis\\\",\\\"Franky\\\",\\\"Franni\\\",\\\"Frannie\\\",\\\"Fred\\\",\\\"Freida\\\",\\\"Gabbey\\\",\\\"Gabie\\\",\\\"Gail\\\",\\\"Galina\\\",\\\"Gayla\\\",\\\"Gayleen\\\",\\\"Genevieve\\\",\\\"Genevra\\\",\\\"Genna\\\",\\\"Genovera\\\",\\\"Georgetta\\\",\\\"Georgianne\\\",\\\"Gerhardine\\\",\\\"Gerrie\\\",\\\"Gert\\\",\\\"Gertrudis\\\",\\\"Giacinta\\\",\\\"Giana\\\",\\\"Gianna\\\",\\\"Gilli\\\",\\\"Gillian\\\",\\\"Gillie\\\",\\\"Ginelle\\\",\\\"Ginnifer\\\",\\\"Gisele\\\",\\\"Gisella\\\",\\\"Glennie\\\",\\\"Glennis\\\",\\\"Glori\\\",\\\"Gloriana\\\",\\\"Glorianna\\\",\\\"Glory\\\",\\\"Glynda\\\",\\\"Glynis\\\",\\\"Goldia\\\",\\\"Greta\\\",\\\"Gretel\\\",\\\"Grethel\\\",\\\"Grier\\\",\\\"Griselda\\\",\\\"Guillemette\\\",\\\"Gusty\\\",\\\"Gwenny\\\",\\\"Gwenora\\\",\\\"Haleigh\\\",\\\"Hannah\\\",\\\"Hannie\\\",\\\"Harmonie\\\",\\\"Harriette\\\",\\\"Harriot\\\",\\\"Heddi\\\",\\\"Heida\\\",\\\"Heidi\\\",\\\"Heidie\\\",\\\"Helaine\\\",\\\"Helsa\\\",\\\"Helyn\\\",\\\"Hendrika\\\",\\\"Henriette\\\",\\\"Hephzibah\\\",\\\"Hestia\\\",\\\"Hetti\\\",\\\"Hillary\\\",\\\"Honey\\\",\\\"Honor\\\",\\\"Honoria\\\",\\\"Horatia\\\",\\\"Hortensia\\\",\\\"Hulda\\\",\\\"Hyacinthe\\\",\\\"Idalia\\\",\\\"Ike\\\",\\\"Ileana\\\",\\\"Illa\\\",\\\"Inesita\\\",\\\"Inga\\\",\\\"Ingaberg\\\",\\\"Ingaborg\\\",\\\"Inge\\\",\\\"Ingeberg\\\",\\\"Inger\\\",\\\"Ioana\\\",\\\"Irene\\\",\\\"Isa\\\",\\\"Isabeau\\\",\\\"Isabella\\\",\\\"Isadore\\\",\\\"Ivett\\\",\\\"Izabel\\\",\\\"Izzi\\\",\\\"Jacquelin\\\",\\\"Jacquelyn\\\",\\\"Jacynth\\\",\\\"Jada\\\",\\\"Jade\\\",\\\"Jaimie\\\",\\\"Jami\\\",\\\"Jamie\\\",\\\"Janela\\\",\\\"Janet\\\",\\\"Janeta\\\",\\\"Janice\\\",\\\"Janna\\\",\\\"Jaquenetta\\\",\\\"Jasmina\\\",\\\"Jayme\\\",\\\"Jayne\\\",\\\"Jean\\\",\\\"Jeanelle\\\",\\\"Jeanette\\\",\\\"Jeanine\\\",\\\"Jeanna\\\",\\\"Jeannine\\\",\\\"Jelene\\\",\\\"Jemima\\\",\\\"Jeniffer\\\",\\\"Jenine\\\",\\\"Jennie\\\",\\\"Jennifer\\\",\\\"Jeralee\\\",\\\"Jerrie\\\",\\\"Jerrilee\\\",\\\"Jessalyn\\\",\\\"Jessi\\\",\\\"Jessica\\\",\\\"Jessie\\\",\\\"Jilleen\\\",\\\"JoAnn\\\",\\\"JoAnne\\\",\\\"Joanna\\\",\\\"Jobie\\\",\\\"Jobina\\\",\\\"Joby\\\",\\\"Jody\\\",\\\"Joell\\\",\\\"Joelle\\\",\\\"Joelynn\\\",\\\"Johannah\\\",\\\"Joleen\\\",\\\"Jolene\\\",\\\"Joli\\\",\\\"Joni\\\",\\\"Jorie\\\",\\\"Joselyn\\\",\\\"Josi\\\",\\\"Josselyn\\\",\\\"Jourdan\\\",\\\"Joyann\\\",\\\"Joyce\\\",\\\"Julee\\\",\\\"Julianna\\\",\\\"Juliet\\\",\\\"Kaile\\\",\\\"Kaitlin\\\",\\\"Kalindi\\\",\\\"Karalee\\\",\\\"Karie\\\",\\\"Karil\\\",\\\"Karlee\\\",\\\"Karlotta\\\",\\\"Karly\\\",\\\"Karna\\\",\\\"Kate\\\",\\\"Katee\\\",\\\"Kath\\\",\\\"Kathe\\\",\\\"Katheleen\\\",\\\"Kathy\\\",\\\"Kati\\\",\\\"Katinka\\\",\\\"Katusha\\\",\\\"Kee\\\",\\\"Kelcie\\\",\\\"Kelcy\\\",\\\"Kelley\\\",\\\"Keriann\\\",\\\"Kerri\\\",\\\"Kerrin\\\",\\\"Kesley\\\",\\\"Kessia\\\",\\\"Kiele\\\",\\\"Kimmi\\\",\\\"Kirbee\\\",\\\"Kirby\\\",\\\"Konstanze\\\",\\\"Kordula\\\",\\\"Korry\\\",\\\"Krissy\\\",\\\"Kristien\\\",\\\"Krystalle\\\",\\\"Lacy\\\",\\\"Lamb\\\",\\\"Laney\\\",\\\"Lanny\\\",\\\"Lara\\\",\\\"Larisa\\\",\\\"Laryssa\\\",\\\"Latashia\\\",\\\"Latrena\\\",\\\"Lauren\\\",\\\"Laurene\\\",\\\"Lauretta\\\",\\\"Leah\\\",\\\"Leanne\\\",\\\"Leanora\\\",\\\"Leeann\\\",\\\"Leena\\\",\\\"Leia\\\",\\\"Leiah\\\",\\\"Leigha\\\",\\\"Leland\\\",\\\"Lelia\\\",\\\"Lena\\\",\\\"Lenna\\\",\\\"Leone\\\",\\\"Leonie\\\",\\\"Leontyne\\\",\\\"Leora\\\",\\\"Lesli\\\",\\\"Letitia\\\",\\\"Lia\\\",\\\"Lib\\\",\\\"Libbey\\\",\\\"Libbie\\\",\\\"Lilas\\\",\\\"Lilli\\\",\\\"Lindy\\\",\\\"Linea\\\",\\\"Linell\\\",\\\"Linnea\\\",\\\"Linzy\\\",\\\"Lise\\\",\\\"Lissie\\\",\\\"Lissy\\\",\\\"Lizabeth\\\",\\\"Lizbeth\\\",\\\"Lizette\\\",\\\"Lolita\\\",\\\"Lonni\\\",\\\"Lora\\\",\\\"Loree\\\",\\\"Lorena\\\",\\\"Lorettalorna\\\",\\\"Lorianne\\\",\\\"Lorie\\\",\\\"Lorine\\\",\\\"Lorrie\\\",\\\"Lotta\\\",\\\"Lou\\\",\\\"Louise\\\",\\\"Luana\\\",\\\"Lucinda\\\",\\\"Lucky\\\",\\\"Lurline\\\",\\\"Lust\\\",\\\"Lynde\\\",\\\"Lyndell\\\",\\\"Lyndsey\\\",\\\"Lynette\\\",\\\"Lynnell\\\",\\\"Mabel\\\",\\\"Mable\\\",\\\"Madalyn\\\",\\\"Maddi\\\",\\\"Maddy\\\",\\\"Madelaine\\\",\\\"Madelena\\\",\\\"Madella\\\",\\\"Madlen\\\",\\\"Madona\\\",\\\"Mae\\\",\\\"Maegan\\\",\\\"Magdaia\\\",\\\"Magdalen\\\",\\\"Maggee\\\",\\\"Maggy\\\",\\\"Malia\\\",\\\"Malinde\\\",\\\"Malissa\\\",\\\"Malka\\\",\\\"Mallissa\\\",\\\"Malory\\\",\\\"Mandi\\\",\\\"Mandie\\\",\\\"Mandy\\\",\\\"Marcella\\\",\\\"Mareah\\\",\\\"Maressa\\\",\\\"Marga\\\",\\\"Margaux\\\",\\\"Margeaux\\\",\\\"Marget\\\",\\\"Margie\\\",\\\"Marglerite\\\",\\\"Margurite\\\",\\\"Mariam\\\",\\\"Marianne\\\",\\\"Maribelle\\\",\\\"Marieann\\\",\\\"Marigold\\\",\\\"Marin\\\",\\\"Marina\\\",\\\"Marita\\\",\\\"Marja\\\",\\\"Marjory\\\",\\\"Marketa\\\",\\\"Marlena\\\",\\\"Marney\\\",\\\"Marthena\\\",\\\"Martica\\\",\\\"Martita\\\",\\\"Mary\\\",\\\"Marya\\\",\\\"Maryanna\\\",\\\"Maryjane\\\",\\\"Maryjo\\\",\\\"Masha\\\",\\\"Maud\\\",\\\"Maxie\\\",\\\"Maxine\\\",\\\"Maybelle\\\",\\\"Meagan\\\",\\\"Meggy\\\",\\\"Mel\\\",\\\"Melanie\\\",\\\"Melantha\\\",\\\"Melany\\\",\\\"Melba\\\",\\\"Melesa\\\",\\\"Melisenda\\\",\\\"Melisent\\\",\\\"Melissa\\\",\\\"Mellissa\\\",\\\"Mercie\\\",\\\"Merilee\\\",\\\"Merissa\\\",\\\"Merla\\\",\\\"Merridie\\\",\\\"Meryl\\\",\\\"Meta\\\",\\\"Mignon\\\",\\\"Milly\\\",\\\"Mimi\\\",\\\"Mina\\\",\\\"Mindy\\\",\\\"Minetta\\\",\\\"Mirabel\\\",\\\"Miran\\\",\\\"Mirilla\\\",\\\"Misha\\\",\\\"Misti\\\",\\\"Modestia\\\",\\\"Mona\\\",\\\"Monah\\\",\\\"Monica\\\",\\\"Monika\\\",\\\"Moreen\\\",\\\"Morgana\\\",\\\"Morganica\\\",\\\"Morissa\\\",\\\"Morna\\\",\\\"Muriel\\\",\\\"Myrah\\\",\\\"Myrilla\\\",\\\"Myrna\\\",\\\"Myrtie\\\",\\\"Nadeen\\\",\\\"Nananne\\\",\\\"Nanette\\\",\\\"Nannette\\\",\\\"Natalya\\\",\\\"Neda\\\",\\\"Nedi\\\",\\\"Neile\\\",\\\"Nelle\\\",\\\"Nelli\\\",\\\"Nellie\\\",\\\"Nerty\\\",\\\"Nessie\\\",\\\"Nevsa\\\",\\\"Neysa\\\",\\\"Nicholle\\\",\\\"Nicola\\\",\\\"Nicolina\\\",\\\"Niki\\\",\\\"Nina\\\",\\\"Ninon\\\",\\\"Nissy\\\",\\\"Noel\\\",\\\"Noelani\\\",\\\"Noelle\\\",\\\"Noemi\\\",\\\"Nola\\\",\\\"Nomi\\\",\\\"Nonie\\\",\\\"Norma\\\",\\\"Odessa\\\",\\\"Odilia\\\",\\\"Olenka\\\",\\\"Oneida\\\",\\\"Onlea\\\",\\\"Ophelia\\\",\\\"Ophelie\\\",\\\"Ora\\\",\\\"Orella\\\",\\\"Otha\\\",\\\"Othilie\\\",\\\"Ottilie\\\",\\\"Pacifica\\\",\\\"Pam\\\",\\\"Pammi\\\",\\\"Patti\\\",\\\"Paulita\\\",\\\"Pearla\\\",\\\"Perle\\\",\\\"Pet\\\",\\\"Petra\\\",\\\"Petrina\\\",\\\"Phelia\\\",\\\"Philly\\\",\\\"Phoebe\\\",\\\"Phylis\\\",\\\"Phyllys\\\",\\\"Pier\\\",\\\"Poppy\\\",\\\"Pris\\\",\\\"Prudence\\\",\\\"Queada\\\",\\\"Quintina\\\",\\\"Rachael\\\",\\\"Rae\\\",\\\"Raf\\\",\\\"Rahal\\\",\\\"Ralina\\\",\\\"Ramona\\\",\\\"Randee\\\",\\\"Randene\\\",\\\"Ranee\\\",\\\"Rani\\\",\\\"Raquela\\\",\\\"Raven\\\",\\\"Ray\\\",\\\"Regan\\\",\\\"Reggie\\\",\\\"Reine\\\",\\\"Rennie\\\",\\\"Reta\\\",\\\"Rhody\\\",\\\"Rikki\\\",\\\"Rivalee\\\",\\\"Robbi\\\",\\\"Robinetta\\\",\\\"Rochell\\\",\\\"Rochella\\\",\\\"Romonda\\\",\\\"Rora\\\",\\\"Rory\\\",\\\"Rosalinda\\\",\\\"Rosalinde\\\",\\\"Rosario\\\",\\\"Roseanna\\\",\\\"Roseanne\\\",\\\"Rosemaria\\\",\\\"Rosene\\\",\\\"Rosy\\\",\\\"Rubetta\\\",\\\"Rubi\\\",\\\"Ruthie\\\",\\\"Rycca\\\",\\\"Sadella\\\",\\\"Salli\\\",\\\"Salome\\\",\\\"Samuella\\\",\\\"Sande\\\",\\\"Sandye\\\",\\\"Sapphira\\\",\\\"Savina\\\",\\\"Scotty\\\",\\\"Sean\\\",\\\"Seka\\\",\\\"Selena\\\",\\\"Selma\\\",\\\"Shamit\\\",\\\"Shanie\\\",\\\"Shannon\\\",\\\"Shanon\\\",\\\"Sharla\\\",\\\"Sharleen\\\",\\\"Sharna\\\",\\\"Sharon\\\",\\\"Sharona\\\",\\\"Sharron\\\",\\\"Sharyl\\\",\\\"Shauna\\\",\\\"Shawnee\\\",\\\"Shay\\\",\\\"Sheilakathryn\\\",\\\"Shelia\\\",\\\"Sheri\\\",\\\"Sherrie\\\",\\\"Shilpa\\\",\\\"Shirlee\\\",\\\"Shirlene\\\",\\\"Shirley\\\",\\\"Shirline\\\",\\\"Sibbie\\\",\\\"Sibley\\\",\\\"Silva\\\",\\\"Simonne\\\",\\\"Sonja\\\",\\\"Sonya\\\",\\\"Sophronia\\\",\\\"Stacey\\\",\\\"Stefania\\\",\\\"Steffane\\\",\\\"Stoddard\\\",\\\"Stormie\\\",\\\"Susannah\\\",\\\"Susette\\\",\\\"Susi\\\",\\\"Suzann\\\",\\\"Suzy\\\",\\\"Sybil\\\",\\\"Sybilla\\\",\\\"Sybille\\\",\\\"Sybyl\\\",\\\"Taffy\\\",\\\"Tallia\\\",\\\"Tallie\\\",\\\"Tally\\\",\\\"Tamra\\\",\\\"Tandie\\\",\\\"Tania\\\",\\\"Tara\\\",\\\"Tatiana\\\",\\\"Tawnya\\\",\\\"Teane\\\",\\\"Ted\\\",\\\"Tella\\\",\\\"Tera\\\",\\\"TeresaAnne\\\",\\\"Terese\\\",\\\"Teresita\\\",\\\"Terrye\\\",\\\"Terza\\\",\\\"Thea\\\",\\\"Theada\\\",\\\"Thekla\\\",\\\"Theodora\\\",\\\"Therese\\\",\\\"Thomasin\\\",\\\"Tiff\\\",\\\"Tildi\\\",\\\"Timmie\\\",\\\"Tiphany\\\",\\\"Tisha\\\",\\\"Tobey\\\",\\\"Toinette\\\",\\\"Tory\\\",\\\"Tova\\\",\\\"Trescha\\\",\\\"Tressa\\\",\\\"Trish\\\",\\\"Truda\\\",\\\"Trudey\\\",\\\"Ulla\\\",\\\"Ulrike\\\",\\\"Una\\\",\\\"Ursa\\\",\\\"Ursala\\\",\\\"Ursuline\\\",\\\"Uta\\\",\\\"Valaria\\\",\\\"Valentia\\\",\\\"Valerie\\\",\\\"Valina\\\",\\\"Vallie\\\",\\\"Vanessa\\\",\\\"Vanya\\\",\\\"Venita\\\",\\\"Vera\\\",\\\"Verena\\\",\\\"Verina\\\",\\\"Victoria\\\",\\\"Vikkie\\\",\\\"Vilma\\\",\\\"Vinnie\\\",\\\"Violante\\\",\\\"Virginia\\\",\\\"Viv\\\",\\\"Vivian\\\",\\\"Viviana\\\",\\\"Vivianne\\\",\\\"Wallie\\\",\\\"Wendeline\\\",\\\"Willow\\\",\\\"Willy\\\",\\\"Wilma\\\",\\\"Windy\\\",\\\"Winifred\\\",\\\"Winnie\\\",\\\"Wynne\\\",\\\"Yehudit\\\",\\\"Zaneta\\\",\\\"Zarah\\\",\\\"Zaria\\\",\\\"Zarla\\\",\\\"Zenia\\\",\\\"Zita\\\",\\\"Zonda\\\"]\"}"]
 * 
 * @param Scene
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @parent Scene
 * @type struct<BgSettings>
 * @desc Background settings for Scene_CreateCharacter.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @parent Scene
 * @type struct<Sound>
 * @desc These settings let you adjust the sound effects used for this plugin.
 * @default {"Create":"","create_name:str":"Chime2","create_volume:num":"90","create_pitch:num":"100","create_pan:num":"0","Dismiss":"","dismiss_name:str":"Fog1","dismiss_volume:num":"90","dismiss_pitch:num":"100","dismiss_pan:num":"0","Retrain":"","retrain_name:str":"Raise3","retrain_volume:num":"90","retrain_pitch:num":"100","retrain_pan:num":"0"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @parent Scene
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"InstructionWindow":"","InstructionWindow_Class:str":"Please select a class.","InstructionWindow_Appearance:str":"Select an appearance!","InstructionWindow_Graphics:str":"Select graphics set!","InstructionWindow_Traits:str":"Select character traits!","InstructionWindow_Voices:str":"Select character traits!","InstructionWindow_Name:str":"Enter character name!","InstructionWindow_Confirm:str":"Confirm character details!","InstructionWindow_Dismiss:str":"Select a character to dismiss from the party.","InstructionWindow_Retrain:str":"Select a character to retrain anew.","PreviewWindow":"","PreviewWindow_CostText:str":"\\C[16]Cost","AppearanceWindow":"","AppearanceWindow_MoreCommand:str":"More...","AppearanceWindow_MoreIcon:num":"83","GraphicSetsWindow":"","GraphicSetsWindow_ClassNameFmt:str":"%1 Set","TraitTypesWindow":"","TraitTypesWindow_AcceptText:str":"Accept Traits","TraitTypesWindow_AcceptIcon:num":"164","TraitTypesWindow_TypeFmt:str":"\\C[16]%1","TraitTypesWindow_TypeIcon:num":"83","BattleVoiceWindow":"","BattleVoiceWindow_AcceptText:str":"Accept Traits","BattleVoiceWindow_AcceptIcon:num":"83","BattleVoiceWindow_NoVoice:str":"No Voice","NameCommandWindow":"","NameCommandWindow_AcceptText:str":"Accept Name","NameCommandWindow_AcceptIcon:num":"164","NameCommandWindow_ManualText:str":"Manual Name Entry","NameCommandWindow_ManualIcon:num":"83","ConfirmDataWindow":"","ConfirmDataWindow_NameText:str":"\\C[16]Name","ConfirmDataWindow_ClassText:str":"\\C[16]Class","ConfirmDataWindow_CostText:str":"\\C[16]Cost","ConfirmCommandWindow":"","ConfirmCommandWindow_ConfirmText:str":"Confirm","ConfirmCommandWindow_ConfirmIcon:num":"164","ConfirmCommandWindow_CancelText:str":"Revise","ConfirmCommandWindow_CancelIcon:num":"168","ButtonAssist":"","ButtonAssist_ClassText:str":"Exit","StatusMenu":"","StatusMenu_Profile:json":"\"\\\\N[%1] is hired recruit that joined \\\\N[1]'s party.\"","StatusMenu_Biography:json":"\"\\\\N[%1] is a %2 who joined \\\\N[1]\\\\'s party with goals and aspirations in mind.\"","StatusMenu_Biography_AutoWordWrap:eval":"true"}
 *
 * @param Window:struct
 * @text Window Settings
 * @parent Scene
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"General":"","SideBuffer:num":"48","ShowIcons:eval":"true","InstructionWindow":"","InstructionWindow_BgType:num":"0","InstructionWindow_TextAlign:str":"center","InstructionWindow_RectJS:func":"\"const ww = Graphics.boxWidth - (this.sideBuffer() * 2);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + Math.floor(this.calcWindowHeight(1, false) * 0.5);\\nreturn new Rectangle(wx, wy, ww - (this.showGoldWindow() ? this.mainCommandWidth() : 0), wh);\"","GoldWindow":"","GoldWindow_BgType:num":"0","GoldWindow_RectJS:func":"\"const instructRect = this.instructionWindowRect();\\n\\nconst ww = this.mainCommandWidth();\\nconst wh = instructRect.height;\\nconst wx = instructRect.x + instructRect.width;\\nconst wy = instructRect.y;\\nreturn new Rectangle(wx, wy, ww, wh);\"","PreviewWindow":"","PreviewWindow_BgType:num":"0","PreviewWindow_Padding:num":"4","PreviewWindow_Draw":"","PreviewWindow_Draw_AutoWordWrap:eval":"true","PreviewWindow_Draw_DarkRect:eval":"true","PreviewWindow_Draw_GoldCost:eval":"true","PreviewWindow_Picture":"","PreviewWindow_Picture_AnchorX:num":"0.5","PreviewWindow_Picture_AnchorY:num":"0.0","PreviewWindow_Picture_ScaleUp:eval":"true","PreviewWindow_Background":"","PreviewWindow_Background_AnchorX:num":"0.5","PreviewWindow_Background_AnchorY:num":"0.0","PreviewWindow_Background_ScaleUp:eval":"true","PreviewWindow_Background_RetrainBg:str":"Mountains1","GraphicsPreviewWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = Graphics.boxWidth - ww - this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","ClassWindow":"","ClassWindow_BgType:num":"0","ClassWindow_TextColorID:num":"17","ClassWindow_DefaultIcon:num":"96","ClassWindowItemCost":"","ClassWindow_CostTypeFmt:str":"\\}%2\\{%1","ClassWindow_QuantityFmt:str":"%2/%1","ClassWindow_DrawCost1:eval":"false","ClassListWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","AppearanceWindow":"","AppearanceWindow_BgType:num":"0","AppearanceWindow_MoreCommand:eval":"true","AppearanceWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","GraphicSetsWindow":"","GraphicSetsWindow_BgType:num":"0","GraphicSetsWindow_OtherClasses:eval":"true","GraphicSetsWindow_OtherFirst:eval":"true","GraphicSetsWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","TraitTypesWindow":"","TraitTypesWindow_BgType:num":"0","TraitTypesWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","TraitSetsWindow":"","TraitSetsWindow_BgType:num":"0","TraitSetsWindow_TextColorID:num":"17","TraitSetsWindow_Thickness:num":"3","TraitSetsWindowItemCost":"","TraitSetsWindow_CostTypeFmt:str":"\\}%2\\{%1","TraitSetsWindow_QuantityFmt:str":"%2/%1","TraitSetsWindow_DrawCost1:eval":"false","TraitSetsWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = Graphics.boxWidth - ww - this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","BattleVoiceWindow":"","BattleVoiceWindow_BgType:num":"0","BattleVoiceWindow_TextColorID:num":"17","BattleVoiceWindow_Enable:eval":"true","BattleVoiceWindow_VoiceCommandIcon:num":"4","BattleVoiceWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","NameCurrentWindow":"","NameCurrentWindow_BgType:num":"0","NameCurrentWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","NameCommandWindow":"","NameCommandWindow_BgType:num":"0","NameCommandWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 4);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 3);\\nreturn new Rectangle(wx, wy, ww, wh);\"","NameEditWindow":"","NameEditWindow_BgType:num":"0","NameEditWindow_MaxLength:num":"16","NameEditWindow_NameWidthPadding:num":"8","NameEditWindow_RectJS:func":"\"const ww = 600;\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaTop() + Math.ceil(this.calcWindowHeight(1, false) * (Graphics.boxHeight >= 700 ? 2 : 1.5));\\nreturn new Rectangle(wx, wy, ww, wh);\"","NameInputWindow":"","NameInputWindow_BgType:num":"0","NameInputWindow_RectJS:func":"\"const editWindow = this.nameEditWindowRect();\\n\\nconst ww = editWindow.width;\\nconst wh = this.calcWindowHeight(9, true);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = editWindow.y + editWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","ConfirmDataWindow":"","ConfirmDataWindow_BgType:num":"0","ConfirmDataWindow_RectJS:func":"\"const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.calcWindowHeight(6, false);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","ConfirmCommandWindow":"","ConfirmCommandWindow_BgType:num":"0","ConfirmCommandWindow_PlayShopSound:eval":"true","ConfirmCommandWindow_RectJS:func":"\"const previewRect = this.graphicsPreviewWindowRect();\\n\\nconst ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = this.sideBuffer();\\nconst wy = previewRect.y + previewRect.height - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\"","SelectCharaWindow":"","SelectCharaWindow_BgType:num":"0","SelectActorWindow_RectJS:func":"\"const ww = Graphics.boxWidth - (this.sideBuffer() * 2);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\\nconst wx = this.sideBuffer();\\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * Class List Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ClassData:
 *
 * @param ClassID:num
 * @text Class ID
 * @type class
 * @desc The ID of the class that can be selected.
 * @default 1
 *
 * @param PreviewPicture:str
 * @text Preview Picture
 * @parent ClassID:num
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the preview picture.
 * Located in /img/pictures/
 * @default 
 *
 * @param PreviewParallax:str
 * @text Preview Background
 * @parent ClassID:num
 * @type file
 * @dir img/parallaxes/
 * @require 1
 * @desc Filename of the preview background.
 * Located in /img/parallaxes/
 * @default 
 *
 * @param Description:json
 * @text Text Description
 * @parent ClassID:num
 * @type note
 * @desc Text description used for this class.
 * Shown in the preview window. Text codes allowed.
 * @default "Line1\nLine2\nLine3"
 * 
 * @param GraphicSet
 * @text Graphic Sets
 *
 * @param Graphics:arraystruct
 * @text Graphics List
 * @parent GraphicSet
 * @type struct<Graphic>[]
 * @desc A list of graphic sets that are tied to this class.
 * @default []
 * 
 * @param Requirements
 *
 * @param SwitchReq:num
 * @text Required Switch
 * @parent Requirements
 * @type switch
 * @desc What switch must be turned on for this class to show?
 * Use 0 to not require a switch.
 * @default 0
 *
 * @param GoldCost:num
 * @text Gold Cost
 * @parent Requirements
 * @type number
 * @desc How much gold should it cost to pick this class?
 * Use 0 to not require a gold cost.
 * @default 0
 *
 * @param ItemIdCost:num
 * @text Item Cost Type
 * @parent Requirements
 * @type item
 * @desc What item is needed to pick this class?
 * This determines the item type's ID.
 * @default 0
 *
 * @param ItemCountCost:num
 * @text Item Cost Quantity
 * @parent ItemIdCost:num
 * @type number
 * @min 1
 * @desc How many of the item is needed to pick this class?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * Graphic Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Graphic:
 *
 * @param Display
 * 
 * @param DisplayText:str
 * @text Display Text
 * @parent Display
 * @desc The text used to represent these graphics.
 * Text codes allowed.
 * @default Graphic Name
 * 
 * @param DisplayIcon:num
 * @text Display Icon
 * @parent Display
 * @desc The icon shown next to the Display Text.
 * @default 160
 *
 * @param PreviewParallax:str
 * @text Display Background
 * @parent Display
 * @type file
 * @dir img/parallaxes/
 * @require 1
 * @desc Filename of the display background.
 * Located in /img/parallaxes/
 * @default 
 * 
 * @param Graphics
 *
 * @param FaceGraphic:str
 * @text Face Graphic
 * @parent Graphics
 * @type file
 * @dir img/faces/
 * @require 1
 * @desc Filename of the face graphic used.
 * @default 
 * 
 * @param FaceIndex:num
 * @text Face Index
 * @parent FaceGraphic:str
 * @type number
 * @desc What is the face index used?
 * Index values start at 0.
 * @default 0
 *
 * @param CharacterGraphic:str
 * @text Character Graphic
 * @parent Graphics
 * @type file
 * @dir img/characters/
 * @require 1
 * @desc Filename of the character graphic used.
 * @default 
 * 
 * @param CharacterIndex:num
 * @text Character Index
 * @parent CharacterGraphic:str
 * @type number
 * @desc What is the character index used?
 * Index values start at 0.
 * @default 0
 *
 * @param SvBattler:str
 * @text SV Battler
 * @parent Graphics
 * @type file
 * @dir img/sv_actors/
 * @require 1
 * @desc Filename of the sideview battler used.
 * @default 
 *
 * @param BattlePortrait:str
 * @text Battle Portrait
 * @parent Graphics
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the battle portrait.
 * Used for VisuMZ_1_BattleCore.
 * @default 
 *
 * @param MenuPortrait:str
 * @text Menu Portrait
 * @parent Graphics
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the main menu portrait.
 * Used for VisuMZ_1_MainMenuCore.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Graphic Set Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GraphicSet:
 * 
 * @param DisplayText:str
 * @text Display Text
 * @parent Display
 * @desc The text used to represent this graphic set.
 * Text codes allowed.
 * @default Graphic Set Name
 * 
 * @param DisplayIcon:num
 * @text Display Icon
 * @parent DisplayText:str
 * @desc The icon shown next to the Display Text.
 * @default 160
 *
 * @param PreviewPicture:str
 * @text Preview Picture
 * @parent DisplayText:str
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the preview picture.
 * Located in /img/pictures/
 * @default 
 *
 * @param PreviewParallax:str
 * @text Preview Background
 * @parent DisplayText:str
 * @type file
 * @dir img/parallaxes/
 * @require 1
 * @desc Filename of the preview background.
 * Located in /img/parallaxes/
 * @default 
 *
 * @param SwitchReq:num
 * @text Required Switch
 * @parent DisplayText:str
 * @type switch
 * @desc What switch must be turned on for this set to show?
 * Use 0 to not require a switch.
 * @default 0
 *
 * @param Graphics:arraystruct
 * @text Graphics List
 * @parent GraphicSet
 * @type struct<Graphic>[]
 * @desc A list of graphic sets that are tied to this graphic set.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Name Set Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NameSet:
 * 
 * @param DisplayText:str
 * @text Display Text
 * @parent Display
 * @desc The text used to represent this name set.
 * Text codes allowed.
 * @default Random Name Set
 * 
 * @param DisplayIcon:num
 * @text Display Icon
 * @parent DisplayText:str
 * @desc The icon shown next to the Display Text.
 * @default 160
 *
 * @param NameSets:arraystr
 * @text Random Names
 * @type string[]
 * @desc A list of random names to pick from.
 * Insert a possible random name here.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Traits Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Traits:
 *
 * @param EnableTraitsStep:eval
 * @text Enable Traits Step
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable traits step for Character Creation?
 * Requires VisuMZ_1_ElementStatusCore.js!
 * @default true
 *
 * @param Element:struct
 * @text Main Element Settings
 * @type struct<TraitType>
 * @desc Settings regarding the main element trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"false","Default:str":"Neutral","Changeable:eval":"true","RetrainChange:eval":"false","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"Neutral\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Fire\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Ice\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Thunder\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Water\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Earth\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Wind\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Light\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Darkness\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param SubElement:struct
 * @text Sub Element Settings
 * @type struct<TraitType>
 * @desc Settings regarding the sub element trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"false","Default:str":"-","Changeable:eval":"true","RetrainChange:eval":"false","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"-\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Fire\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Ice\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Thunder\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Water\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Earth\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Wind\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Light\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Darkness\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"3000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param Gender:struct
 * @text Gender Settings
 * @type struct<TraitType>
 * @desc Settings regarding the gender trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"true","Default:str":"","Changeable:eval":"true","RetrainChange:eval":"false","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"Male\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Female\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param Race:struct
 * @text Race Settings
 * @type struct<TraitType>
 * @desc Settings regarding the race trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"false","Default:str":"Human","Changeable:eval":"true","RetrainChange:eval":"false","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"Human\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"High Elf\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Wood Elf\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Dark Elf\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Dwarf\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Gnome\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Halfling\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Wolfkin\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Felyne\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Lizardman\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param Nature:struct
 * @text Nature Settings
 * @type struct<TraitType>
 * @desc Settings regarding the nature trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"true","Default:str":"","Changeable:eval":"true","RetrainChange:eval":"true","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"Chill\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Hardy\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Lonely\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Adamant\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Naughty\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Brave\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Bold\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Docile\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Impish\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Lax\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Relaxed\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Modest\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Mild\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Bashful\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Rash\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Quiet\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Calm\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Gentle\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Careful\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Quirky\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Sassy\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Timid\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Hasty\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Jolly\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Naive\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Serious\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param Alignment:struct
 * @text Alignment Settings
 * @type struct<TraitType>
 * @desc Settings regarding the alignment trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"false","Default:str":"Neutral","Changeable:eval":"true","RetrainChange:eval":"true","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"Lawful Good\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Neutral Good\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Chaotic Good\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Lawful Neutral\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Neutral\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Chaotic Neutral\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Lawful Evil\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Neutral Evil\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Chaotic Evil\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param Blessing:struct
 * @text Blessing Settings
 * @type struct<TraitType>
 * @desc Settings regarding the blessing trait type.
 * @default ["{\"Name:str\":\"No Blessing\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Dextrous\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Elusive\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Impact\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Healthy\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Focused\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Energetic\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}"]
 *
 * @param Curse:struct
 * @text Curse Settings
 * @type struct<TraitType>
 * @desc Settings regarding the curse trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"false","Default:str":"No Curse","Changeable:eval":"true","RetrainChange:eval":"true","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"No Curse\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Clumsy\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Dazed\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Fitful\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Drained\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Inefficient\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Unmotivated\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 * @param Zodiac:struct
 * @text Zodiac Settings
 * @type struct<TraitType>
 * @desc Settings regarding the zodiac trait type.
 * @default ["{\"Name:str\":\"Aries\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Taurus\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Gemini\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Cancer\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Leo\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Virgo\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Libra\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Scorpio\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Sagittarius\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Capricorn\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Aquarius\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Pisces\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"0\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}","{\"Name:str\":\"Ophiuchus\",\"Requirements\":\"\",\"SwitchReq:num\":\"0\",\"GoldCost:num\":\"10000\",\"ItemIdCost:num\":\"0\",\"ItemCountCost:num\":\"1\"}"]
 *
 * @param Variant:struct
 * @text Variant Settings
 * @type struct<TraitType>
 * @desc Settings regarding the variant trait type.
 * @default {"Visible:eval":"true","Randomize:eval":"false","Default:str":"Normal","Changeable:eval":"true","RetrainChange:eval":"false","Options:arraystruct":"[\"{\\\"Name:str\\\":\\\"Mighty\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"100000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Major\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"10000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Greater\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"1000\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Normal\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Lesser\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Minor\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\",\"{\\\"Name:str\\\":\\\"Puny\\\",\\\"Requirements\\\":\\\"\\\",\\\"SwitchReq:num\\\":\\\"0\\\",\\\"GoldCost:num\\\":\\\"0\\\",\\\"ItemIdCost:num\\\":\\\"0\\\",\\\"ItemCountCost:num\\\":\\\"1\\\"}\"]"}
 *
 */
/* ----------------------------------------------------------------------------
 * Trait Type Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TraitType:
 *
 * @param Visible:eval
 * @text Visible
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Is command visible in the Character Creation scene?
 * Also needs to be Visible in VisuMZ_1_ElementStatusCore.
 * @default true
 *
 * @param Randomize:eval
 * @text Create -> Randomize?
 * @type boolean
 * @on Randomize
 * @off Default
 * @desc Randomize the default setting for this trait type?
 * If not randomized, the default is selected.
 * @default true
 *
 * @param Default:str
 * @text Default
 * @parent Randomize:eval
 * @desc If not randomized, insert the name of the trait used.
 * The default cannot cost gold or items.
 * @default 
 *
 * @param Changeable:eval
 * @text Create -> Change?
 * @type boolean
 * @on Can Change
 * @off Cannot Change
 * @desc Changeable trait types can be adjusted.
 * Otherwise, they're stuck the way they are.
 * @default true
 *
 * @param RetrainChange:eval
 * @text Retrain -> Change?
 * @parent Changeable:eval
 * @type boolean
 * @on Can Change
 * @off Cannot Change
 * @desc If a character is being retrained, can this trait type
 * be changed? Must also be changeable on creation.
 * @default true
 *
 * @param Options:arraystruct
 * @text Trait Options
 * @parent Changeable:eval
 * @type struct<TraitSet>[]
 * @desc A list of traits that the character can change to.
 * Automatically include the Default trait if used.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Trait Set Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TraitSet:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Trait Set. Must match the name of a
 * trait found in VisuMZ_1_ElementStatusCore.
 * @default >>>NEEDS ATTENTION<<<
 * 
 * @param Requirements
 *
 * @param SwitchReq:num
 * @text Required Switch
 * @parent Requirements
 * @type switch
 * @desc What switch must be turned on for this trait to show?
 * Use 0 to not require a switch.
 * @default 0
 *
 * @param GoldCost:num
 * @text Gold Cost
 * @parent Requirements
 * @type number
 * @desc How much gold should it cost to pick this trait?
 * Use 0 to not require a gold cost.
 * @default 0
 *
 * @param ItemIdCost:num
 * @text Item Cost Type
 * @parent Requirements
 * @type item
 * @desc What item is needed to pick this trait?
 * This determines the item type's ID.
 * @default 0
 *
 * @param ItemCountCost:num
 * @text Item Cost Quantity
 * @parent ItemIdCost:num
 * @type number
 * @min 1
 * @desc How many of the item is needed to pick this trait?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param Create
 * 
 * @param create_name:str
 * @text Filename
 * @parent Create
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Chime2
 *
 * @param create_volume:num
 * @text Volume
 * @parent Create
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param create_pitch:num
 * @text Pitch
 * @parent Create
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param create_pan:num
 * @text Pan
 * @parent Create
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Dismiss
 * 
 * @param dismiss_name:str
 * @text Filename
 * @parent Dismiss
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Fog1
 *
 * @param dismiss_volume:num
 * @text Volume
 * @parent Dismiss
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param dismiss_pitch:num
 * @text Pitch
 * @parent Dismiss
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param dismiss_pan:num
 * @text Pan
 * @parent Dismiss
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Retrain
 * 
 * @param retrain_name:str
 * @text Filename
 * @parent Retrain
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Raise3
 *
 * @param retrain_volume:num
 * @text Volume
 * @parent Retrain
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param retrain_pitch:num
 * @text Pitch
 * @parent Retrain
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param retrain_pan:num
 * @text Pan
 * @parent Retrain
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param InstructionWindow
 * @text Instruction Window
 *
 * @param InstructionWindow_Class:str
 * @text For Class
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Please select a class.
 *
 * @param InstructionWindow_Appearance:str
 * @text For Appearance
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Select an appearance!
 *
 * @param InstructionWindow_Graphics:str
 * @text For Graphic Set
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Select graphics set!
 *
 * @param InstructionWindow_Traits:str
 * @text For Traits
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed. Requires VisuMZ_1_ElementStatusCore!
 * @default Select character traits!
 *
 * @param InstructionWindow_Voices:str
 * @text For Battle Voices
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed. Requires VisuMZ_3_BattleVoices!
 * @default Select character traits!
 *
 * @param InstructionWindow_Name:str
 * @text For Naming
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Enter character name!
 *
 * @param InstructionWindow_Confirm:str
 * @text For Confirmation
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Confirm character details!
 *
 * @param InstructionWindow_Dismiss:str
 * @text For Dismissal
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Select a character to dismiss from the party.
 *
 * @param InstructionWindow_Retrain:str
 * @text For Retraining
 * @parent InstructionWindow
 * @desc Instruction text when on this step.
 * Text codes allowed.
 * @default Select a character to retrain anew.
 *
 * @param PreviewWindow
 * @text Preview Window
 *
 * @param PreviewWindow_CostText:str
 * @text Cost Text
 * @parent PreviewWindow
 * @desc Text displayed when showing a gold cost.
 * Text codes allowed.
 * @default \C[16]Cost
 *
 * @param AppearanceWindow
 * @text Appearance Window
 *
 * @param AppearanceWindow_MoreCommand:str
 * @text More Command Name
 * @parent AppearanceWindow
 * @desc Text used for More Appearances command.
 * Text codes allowed.
 * @default More...
 *
 * @param AppearanceWindow_MoreIcon:num
 * @text Icon
 * @parent AppearanceWindow_MoreCommand:str
 * @desc Icon used for this command.
 * @default 83
 *
 * @param GraphicSetsWindow
 * @text Graphic Sets Window
 *
 * @param GraphicSetsWindow_ClassNameFmt:str
 * @text Class Name Format
 * @parent GraphicSetsWindow
 * @desc Text for class graphic set command names.
 * Text codes allowed. %1 - Class Name.
 * @default %1 Set
 *
 * @param TraitTypesWindow
 * @text Trait Types Window
 *
 * @param TraitTypesWindow_AcceptText:str
 * @text Accept Text
 * @parent TraitTypesWindow
 * @desc Text used for this command.
 * @default Accept Traits
 *
 * @param TraitTypesWindow_AcceptIcon:num
 * @text Icon
 * @parent TraitTypesWindow_AcceptText:str
 * @desc Icon used for this command.
 * @default 164
 *
 * @param TraitTypesWindow_TypeFmt:str
 * @text Trait Types Format
 * @parent TraitTypesWindow
 * @desc Text format used for trait type command names.
 * %1 - Command Name Text
 * @default \C[16]%1
 *
 * @param TraitTypesWindow_TypeIcon:num
 * @text Icon
 * @parent TraitTypesWindow_TypeFmt:str
 * @desc Icon used for this command.
 * @default 83
 *
 * @param BattleVoiceWindow
 * @text Battle Voice Window
 *
 * @param BattleVoiceWindow_AcceptText:str
 * @text Accept Text
 * @parent BattleVoiceWindow
 * @desc Text used for this command.
 * Requires VisuMZ_3_BattleVoices!
 * @default Accept Traits
 *
 * @param BattleVoiceWindow_AcceptIcon:num
 * @text Icon
 * @parent BattleVoiceWindow_AcceptText:str
 * @desc Icon used for this command.
 * Requires VisuMZ_3_BattleVoices!
 * @default 83
 *
 * @param BattleVoiceWindow_NoVoice:str
 * @text No Voice
 * @parent BattleVoiceWindow
 * @desc Text used for this command.
 * Requires VisuMZ_3_BattleVoices!
 * @default No Voice
 *
 * @param NameCommandWindow
 * @text Name Command Window
 *
 * @param NameCommandWindow_AcceptText:str
 * @text Accept Text
 * @parent NameCommandWindow
 * @desc Text used for this command.
 * @default Accept Name
 *
 * @param NameCommandWindow_AcceptIcon:num
 * @text Icon
 * @parent NameCommandWindow_AcceptText:str
 * @desc Icon used for this command.
 * @default 164
 *
 * @param NameCommandWindow_ManualText:str
 * @text Manual Text
 * @parent NameCommandWindow
 * @desc Text used for this command.
 * @default Manual Name Entry
 *
 * @param NameCommandWindow_ManualIcon:num
 * @text Icon
 * @parent NameCommandWindow_ManualText:str
 * @desc Icon used for this command.
 * @default 83
 *
 * @param ConfirmDataWindow
 * @text Confirm Data Window
 *
 * @param ConfirmDataWindow_NameText:str
 * @text Name Text
 * @parent ConfirmDataWindow
 * @desc Text used for this data category.
 * Text codes allowed.
 * @default \C[16]Name
 *
 * @param ConfirmDataWindow_ClassText:str
 * @text Class Text
 * @parent ConfirmDataWindow
 * @desc Text used for this data category.
 * Text codes allowed.
 * @default \C[16]Class
 *
 * @param ConfirmDataWindow_CostText:str
 * @text Cost Text
 * @parent ConfirmDataWindow
 * @desc Text used for this data category.
 * Text codes allowed.
 * @default \C[16]Cost
 *
 * @param ConfirmDataWindow_NameText:str
 * @text Name Text
 * @parent ConfirmDataWindow
 * @desc Text used for this data category.
 * Text codes allowed.
 * @default \C[16]Name
 *
 * @param ConfirmCommandWindow
 * @text Confirm Command Window
 *
 * @param ConfirmCommandWindow_ConfirmText:str
 * @text Confirm Text
 * @parent ConfirmCommandWindow
 * @desc Text used for this command.
 * @default Confirm
 *
 * @param ConfirmCommandWindow_ConfirmIcon:num
 * @text Icon
 * @parent ConfirmCommandWindow_ConfirmText:str
 * @desc Icon used for this command.
 * @default 164
 *
 * @param ConfirmCommandWindow_CancelText:str
 * @text Cancel Text
 * @parent ConfirmCommandWindow
 * @desc Text used for this command.
 * @default Revise
 *
 * @param ConfirmCommandWindow_CancelIcon:num
 * @text Icon
 * @parent ConfirmCommandWindow_CancelText:str
 * @desc Icon used for this command.
 * @default 168
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param ButtonAssist_ClassText:str
 * @text Exit Text
 * @parent ButtonAssist
 * @desc Text used for button assist shortcut to exit.
 * @default Exit
 *
 * @param StatusMenu
 * @text Status Menu
 *
 * @param StatusMenu_Profile:json
 * @text Profile Text
 * @parent StatusMenu
 * @type note
 * @desc Text used for a created character's profile.
 * %1 - Character's Actor ID
 * @default "\\N[%1] is hired recruit that joined \\N[1]'s party."
 *
 * @param StatusMenu_Biography:json
 * @text Biography Text
 * @parent StatusMenu
 * @type note
 * @desc Text used for a created character's biography.
 * %1 - Character's Actor ID, %2 - Class Name
 * @default "\\N[%1] is a %2 who joined \\N[1]\\'s party with goals and aspirations in mind."
 *
 * @param StatusMenu_Biography_AutoWordWrap:eval
 * @text Auto-Word Wrap
 * @parent StatusMenu_Biography:json
 * @type boolean
 * @on Auto-Word Wrap
 * @off No Word Wrap
 * @desc Automatically apply word wrap to biography?
 * Requires VisuMZ_1_MessageCore.js!
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param General
 *
 * @param SideBuffer:num
 * @text Side Buffer
 * @parent General
 * @desc How many pixels from the edges of the screen should be buffered?
 * @default 48
 *
 * @param ShowIcons:eval
 * @text Show List Icons
 * @parent General
 * @type boolean
 * @on Show Icons
 * @off Hide Icons
 * @desc Show/hide icons for most list elements?
 * Some elements will always have icons.
 * @default true
 *
 * @param InstructionWindow
 * @text Instruction Window
 *
 * @param InstructionWindow_BgType:num
 * @text Background Type
 * @parent InstructionWindow
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
 * @param InstructionWindow_TextAlign:str
 * @text Text Align
 * @parent InstructionWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for this window?
 * @default center
 *
 * @param InstructionWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent InstructionWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - (this.sideBuffer() * 2);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + Math.floor(this.calcWindowHeight(1, false) * 0.5);\nreturn new Rectangle(wx, wy, ww - (this.showGoldWindow() ? this.mainCommandWidth() : 0), wh);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldWindow_BgType:num
 * @text Background Type
 * @parent GoldWindow
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
 * @param GoldWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const instructRect = this.instructionWindowRect();\n\nconst ww = this.mainCommandWidth();\nconst wh = instructRect.height;\nconst wx = instructRect.x + instructRect.width;\nconst wy = instructRect.y;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param PreviewWindow
 * @text Preview Window
 *
 * @param PreviewWindow_BgType:num
 * @text Background Type
 * @parent PreviewWindow
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
 * @param PreviewWindow_Padding:num
 * @text Padding
 * @parent PreviewWindow
 * @type number
 * @desc What is the window edge padding value?
 * @default 4
 * 
 * @param PreviewWindow_Draw
 * @text Preview Contents
 * @parent PreviewWindow
 *
 * @param PreviewWindow_Draw_AutoWordWrap:eval
 * @text Auto-Word Wrap
 * @parent PreviewWindow_Draw
 * @type boolean
 * @on Auto-Word Wrap
 * @off No Word Wrap
 * @desc Automatically apply word wrap to preview text?
 * Requires VisuMZ_1_MessageCore.js!
 * @default true
 *
 * @param PreviewWindow_Draw_DarkRect:eval
 * @text Draw Dark Rectangle
 * @parent PreviewWindow_Draw
 * @type boolean
 * @on Draw Dark Rect
 * @off Don't Draw
 * @desc Draw dark rectangles to make text more visible?
 * @default true
 *
 * @param PreviewWindow_Draw_GoldCost:eval
 * @text Draw Gold Cost
 * @parent PreviewWindow_Draw
 * @type boolean
 * @on Draw Cost
 * @off Don't Draw
 * @desc Draw the gold cost on the preview image?
 * @default true
 * 
 * @param PreviewWindow_Picture
 * @text Foreground Picture
 * @parent PreviewWindow
 *
 * @param PreviewWindow_Picture_AnchorX:num
 * @text Anchor X
 * @parent PreviewWindow_Picture
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param PreviewWindow_Picture_AnchorY:num
 * @text Anchor Y
 * @parent PreviewWindow_Picture
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 0.0
 *
 * @param PreviewWindow_Picture_ScaleUp:eval
 * @text Scale Up
 * @parent PreviewWindow_Picture
 * @type boolean
 * @on Scale Up
 * @off Same Size
 * @desc Scale foreground picture size up to fit window?
 * @default true
 * 
 * @param PreviewWindow_Background
 * @text Background Parallax
 * @parent PreviewWindow
 *
 * @param PreviewWindow_Background_AnchorX:num
 * @text Anchor X
 * @parent PreviewWindow_Background
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param PreviewWindow_Background_AnchorY:num
 * @text Anchor Y
 * @parent PreviewWindow_Background
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 0.0
 *
 * @param PreviewWindow_Background_ScaleUp:eval
 * @text Scale Up
 * @parent PreviewWindow_Background
 * @type boolean
 * @on Scale Up
 * @off Same Size
 * @desc Scale background parallax size up to fit window?
 * @default true
 *
 * @param PreviewWindow_Background_RetrainBg:str
 * @text Retrain Parallax
 * @parent PreviewWindow_Background
 * @type file
 * @dir img/parallaxes/
 * @require 1
 * @desc Filename of the preview background for retraining.
 * Located in /img/parallaxes/
 * @default Mountains1
 *
 * @param GraphicsPreviewWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent PreviewWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = Graphics.boxWidth - ww - this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ClassWindow
 * @text Class List Window
 *
 * @param ClassWindow_BgType:num
 * @text Background Type
 * @parent ClassWindow
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
 * @param ClassWindow_TextColorID:num
 * @text Current Text Color
 * @parent ClassWindow
 * @desc Use text colors from the Window Skin only.
 * This does NOT use #rrggbb format.
 * @default 17
 *
 * @param ClassWindow_DefaultIcon:num
 * @text Default Class Icon
 * @parent ClassWindow
 * @desc What icon should be used by default for classes
 * without the <Icon: x> notetag?
 * @default 96
 *
 * @param ClassWindowItemCost
 * @text Item Cost
 * @parent ClassWindow
 *
 * @param ClassWindow_CostTypeFmt:str
 * @text Cost Type Format
 * @parent ClassWindowItemCost
 * @desc How does the cost look in comparison to the item icon?
 * %1 - Icon, %2 - Cost Text
 * @default \}%2\{%1
 *
 * @param ClassWindow_QuantityFmt:str
 * @text Item Quantity Format
 * @parent ClassWindowItemCost
 * @desc How does the cost look in comparison to the item icon?
 * %1 - Cost, %2 - Owned
 * @default %2/%1
 *
 * @param ClassWindow_DrawCost1:eval
 * @text Draw Cost of 1?
 * @parent ClassWindowItemCost
 * @type boolean
 * @on Draw Whole Cost
 * @off Draw Only Icon
 * @desc Draws the cost format if there is a cost of 1?
 * Otherwise, just show the icon.
 * @default false
 *
 * @param ClassListWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ClassWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param AppearanceWindow
 * @text Appearance Window
 *
 * @param AppearanceWindow_BgType:num
 * @text Background Type
 * @parent AppearanceWindow
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
 * @param AppearanceWindow_MoreCommand:eval
 * @text Show More Command?
 * @parent AppearanceWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Shows a "More Appearances" command for the player to select.
 * @default true
 *
 * @param AppearanceWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent AppearanceWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GraphicSetsWindow
 * @text Graphic Sets Window
 *
 * @param GraphicSetsWindow_BgType:num
 * @text Background Type
 * @parent GraphicSetsWindow
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
 * @param GraphicSetsWindow_OtherClasses:eval
 * @text Show Other Classes?
 * @parent GraphicSetsWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Allows player to select graphic sets from other classes?
 * @default true
 *
 * @param GraphicSetsWindow_OtherFirst:eval
 * @text Other Classes First?
 * @parent GraphicSetsWindow_OtherClasses:eval
 * @type boolean
 * @on Before Global
 * @off After Global
 * @desc Shows other class graphic sets before global graphics
 * or after global graphics.
 * @default true
 *
 * @param GraphicSetsWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent GraphicSetsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param TraitTypesWindow
 * @text Trait Types Window
 *
 * @param TraitTypesWindow_BgType:num
 * @text Background Type
 * @parent TraitTypesWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * Requires VisuMZ_1_ElementStatusCore!
 * @default 0
 *
 * @param TraitTypesWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent TraitTypesWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * Requires VisuMZ_1_ElementStatusCore!
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param TraitSetsWindow
 * @text Trait Sets Window
 *
 * @param TraitSetsWindow_BgType:num
 * @text Background Type
 * @parent TraitSetsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * Requires VisuMZ_1_ElementStatusCore!
 * @default 0
 *
 * @param TraitSetsWindow_TextColorID:num
 * @text Current Text Color
 * @parent TraitSetsWindow
 * @desc Use text colors from the Window Skin only.
 * This does NOT use #rrggbb format.
 * @default 17
 *
 * @param TraitSetsWindow_Thickness:num
 * @text Line Thickness
 * @parent TraitSetsWindow
 * @type number
 * @min 1
 * @desc How many lines thick is each selectable option?
 * Requires VisuMZ_1_ElementStatusCore!
 * @default 3
 *
 * @param TraitSetsWindowItemCost
 * @text Item Cost
 * @parent TraitSetsWindow
 *
 * @param TraitSetsWindow_CostTypeFmt:str
 * @text Cost Type Format
 * @parent TraitSetsWindowItemCost
 * @desc How does the cost look in comparison to the item icon?
 * %1 - Icon, %2 - Cost Text
 * @default \}%2\{%1
 *
 * @param TraitSetsWindow_QuantityFmt:str
 * @text Item Quantity Format
 * @parent TraitSetsWindowItemCost
 * @desc How does the cost look in comparison to the item icon?
 * %1 - Cost, %2 - Owned
 * @default %2/%1
 *
 * @param TraitSetsWindow_DrawCost1:eval
 * @text Draw Cost of 1?
 * @parent TraitSetsWindowItemCost
 * @type boolean
 * @on Draw Whole Cost
 * @off Draw Only Icon
 * @desc Draws the cost format if there is a cost of 1?
 * Otherwise, just show the icon.
 * @default false
 *
 * @param TraitSetsWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent TraitSetsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = Graphics.boxWidth - ww - this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param BattleVoiceWindow
 * @text Battle Voice Window
 *
 * @param BattleVoiceWindow_BgType:num
 * @text Background Type
 * @parent BattleVoiceWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * Requires VisuMZ_3_BattleVoices!
 * @default 0
 *
 * @param BattleVoiceWindow_TextColorID:num
 * @text Current Text Color
 * @parent BattleVoiceWindow
 * @desc Use text colors from the Window Skin only.
 * This does NOT use #rrggbb format.
 * @default 17
 *
 * @param BattleVoiceWindow_Enable:eval
 * @text Enable?
 * @parent BattleVoiceWindow
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables adjusting battle voice sets?
 * Requires VisuMZ_3_BattleVoices!
 * @default true
 *
 * @param BattleVoiceWindow_VoiceCommandIcon:num
 * @text Voice Set Icon
 * @parent BattleVoiceWindow
 * @desc Icon used for voice sets.
 * Requires VisuMZ_3_BattleVoices!
 * @default 4
 *
 * @param BattleVoiceWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent BattleVoiceWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * Requires VisuMZ_3_BattleVoices!
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param NameCurrentWindow
 * @text Current Name Window
 *
 * @param NameCurrentWindow_BgType:num
 * @text Background Type
 * @parent NameCurrentWindow
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
 * @param NameCurrentWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent NameCurrentWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.calcWindowHeight(1, false);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param NameCommandWindow
 * @text Name Command Window
 *
 * @param NameCommandWindow_BgType:num
 * @text Background Type
 * @parent NameCommandWindow
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
 * @param NameCommandWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent NameCommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 4);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 3);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param NameEditWindow
 * @text Name Edit Window
 *
 * @param NameEditWindow_BgType:num
 * @text Background Type
 * @parent NameEditWindow
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
 * @param NameEditWindow_MaxLength:num
 * @text Max Character Length
 * @parent NameEditWindow
 * @min 4
 * @desc What is the maximum character length for entering in a name?
 * @default 16
 *
 * @param NameEditWindow_NameWidthPadding:num
 * @text Name Width Padding
 * @parent NameEditWindow
 * @min 1
 * @desc What is the padding between characters?
 * @default 8
 *
 * @param NameEditWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent NameEditWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = 600;\nconst wh = this.calcWindowHeight(1, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaTop() + Math.ceil(this.calcWindowHeight(1, false) * (Graphics.boxHeight >= 700 ? 2 : 1.5));\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param NameInputWindow
 * @text Name Input Window
 *
 * @param NameInputWindow_BgType:num
 * @text Background Type
 * @parent NameInputWindow
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
 * @param NameInputWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent NameInputWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const editWindow = this.nameEditWindowRect();\n\nconst ww = editWindow.width;\nconst wh = this.calcWindowHeight(9, true);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = editWindow.y + editWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ConfirmDataWindow
 * @text Confirm Data Window
 *
 * @param ConfirmDataWindow_BgType:num
 * @text Background Type
 * @parent ConfirmDataWindow
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
 * @param ConfirmDataWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ConfirmDataWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.calcWindowHeight(6, false);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ConfirmCommandWindow
 * @text Confirm Command Window
 *
 * @param ConfirmCommandWindow_BgType:num
 * @text Background Type
 * @parent ConfirmCommandWindow
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
 * @param ConfirmCommandWindow_PlayShopSound:eval
 * @text Play Shop Sound?
 * @parent ConfirmCommandWindow
 * @type boolean
 * @on Play Sound
 * @off Don't Play
 * @desc Play the shop sound when gold and items are involved?
 * @default true
 *
 * @param ConfirmCommandWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ConfirmCommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const previewRect = this.graphicsPreviewWindowRect();\n\nconst ww = Math.floor(Graphics.boxWidth / 2) - Math.ceil(this.sideBuffer() * 1.5);\nconst wh = this.calcWindowHeight(1, true);\nconst wx = this.sideBuffer();\nconst wy = previewRect.y + previewRect.height - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param SelectCharaWindow
 * @text Select Actor Window
 *
 * @param SelectCharaWindow_BgType:num
 * @text Background Type
 * @parent SelectCharaWindow
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
 * @param SelectActorWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent SelectCharaWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - (this.sideBuffer() * 2);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 3);\nconst wx = this.sideBuffer();\nconst wy = this.mainAreaTop() + (this.calcWindowHeight(1, false) * 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

const _0x42c79f=_0x4137;(function(_0x2eb183,_0x2fda24){const _0x479c65=_0x4137,_0xc48f3b=_0x2eb183();while(!![]){try{const _0x1760bf=parseInt(_0x479c65(0x2a0))/0x1*(-parseInt(_0x479c65(0x29e))/0x2)+parseInt(_0x479c65(0xdf))/0x3*(-parseInt(_0x479c65(0xb9))/0x4)+-parseInt(_0x479c65(0x3b0))/0x5+-parseInt(_0x479c65(0x326))/0x6*(parseInt(_0x479c65(0x206))/0x7)+parseInt(_0x479c65(0xe4))/0x8*(parseInt(_0x479c65(0x100))/0x9)+parseInt(_0x479c65(0x26f))/0xa+parseInt(_0x479c65(0x1a3))/0xb;if(_0x1760bf===_0x2fda24)break;else _0xc48f3b['push'](_0xc48f3b['shift']());}catch(_0x15e923){_0xc48f3b['push'](_0xc48f3b['shift']());}}}(_0x40a6,0xd45b3));var label=_0x42c79f(0x38a),tier=tier||0x0,dependencies=[_0x42c79f(0x301)],pluginData=$plugins[_0x42c79f(0x117)](function(_0x1c93b4){const _0x13ec2b=_0x42c79f;return _0x1c93b4[_0x13ec2b(0xe8)]&&_0x1c93b4[_0x13ec2b(0x30d)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x42c79f(0x101)]=function(_0x1e339f,_0x304852){const _0x409f49=_0x42c79f;for(const _0x48e568 in _0x304852){if(_0x409f49(0x2b7)!=='mGxMH'){if(_0x48e568[_0x409f49(0xe0)](/(.*):(.*)/i)){if(_0x409f49(0x156)!==_0x409f49(0x2fb)){const _0x1c52a7=String(RegExp['$1']),_0x4e55d2=String(RegExp['$2'])['toUpperCase']()[_0x409f49(0x223)]();let _0x224d44,_0x394aba,_0xcc32de;switch(_0x4e55d2){case _0x409f49(0xf5):_0x224d44=_0x304852[_0x48e568]!==''?Number(_0x304852[_0x48e568]):0x0;break;case _0x409f49(0x216):_0x394aba=_0x304852[_0x48e568]!==''?JSON[_0x409f49(0x3d3)](_0x304852[_0x48e568]):[],_0x224d44=_0x394aba['map'](_0xd2c4a0=>Number(_0xd2c4a0));break;case _0x409f49(0x22c):_0x224d44=_0x304852[_0x48e568]!==''?eval(_0x304852[_0x48e568]):null;break;case _0x409f49(0x3b1):_0x394aba=_0x304852[_0x48e568]!==''?JSON[_0x409f49(0x3d3)](_0x304852[_0x48e568]):[],_0x224d44=_0x394aba[_0x409f49(0x1c6)](_0x5af1ff=>eval(_0x5af1ff));break;case _0x409f49(0x34b):_0x224d44=_0x304852[_0x48e568]!==''?JSON[_0x409f49(0x3d3)](_0x304852[_0x48e568]):'';break;case'ARRAYJSON':_0x394aba=_0x304852[_0x48e568]!==''?JSON[_0x409f49(0x3d3)](_0x304852[_0x48e568]):[],_0x224d44=_0x394aba[_0x409f49(0x1c6)](_0x318152=>JSON[_0x409f49(0x3d3)](_0x318152));break;case _0x409f49(0xb3):_0x224d44=_0x304852[_0x48e568]!==''?new Function(JSON[_0x409f49(0x3d3)](_0x304852[_0x48e568])):new Function(_0x409f49(0x2a2));break;case _0x409f49(0x1a2):_0x394aba=_0x304852[_0x48e568]!==''?JSON[_0x409f49(0x3d3)](_0x304852[_0x48e568]):[],_0x224d44=_0x394aba[_0x409f49(0x1c6)](_0x2a3a1d=>new Function(JSON[_0x409f49(0x3d3)](_0x2a3a1d)));break;case'STR':_0x224d44=_0x304852[_0x48e568]!==''?String(_0x304852[_0x48e568]):'';break;case'ARRAYSTR':_0x394aba=_0x304852[_0x48e568]!==''?JSON[_0x409f49(0x3d3)](_0x304852[_0x48e568]):[],_0x224d44=_0x394aba[_0x409f49(0x1c6)](_0x16d674=>String(_0x16d674));break;case _0x409f49(0x27b):_0xcc32de=_0x304852[_0x48e568]!==''?JSON[_0x409f49(0x3d3)](_0x304852[_0x48e568]):{},_0x224d44=VisuMZ['ConvertParams']({},_0xcc32de);break;case _0x409f49(0x1b4):_0x394aba=_0x304852[_0x48e568]!==''?JSON['parse'](_0x304852[_0x48e568]):[],_0x224d44=_0x394aba['map'](_0x39d89c=>VisuMZ[_0x409f49(0x101)]({},JSON['parse'](_0x39d89c)));break;default:continue;}_0x1e339f[_0x1c52a7]=_0x224d44;}else this[_0x409f49(0x1f9)](_0x4fd440,_0x4c9b49,_0x17c05f);}}else this['learnSkill'](_0x7a9591[_0x409f49(0x1c8)]);}return _0x1e339f;},(_0x55bc68=>{const _0xb7c95e=_0x42c79f,_0x560319=_0x55bc68['name'];for(const _0x3b8ec3 of dependencies){if('YQtSt'===_0xb7c95e(0x1f0)){if(!Imported[_0x3b8ec3]){alert(_0xb7c95e(0x192)[_0xb7c95e(0x358)](_0x560319,_0x3b8ec3)),SceneManager[_0xb7c95e(0x185)]();break;}}else{this[_0xb7c95e(0x2b1)]=_0x5c69ca[_0xb7c95e(0x20b)];const _0x85c768=this[_0xb7c95e(0x2b1)][_0xb7c95e(0x30c)]()['id'],_0x1a0f8a=this['_list'][_0xb7c95e(0x277)](_0x25242b=>_0x25242b[_0xb7c95e(0x2f1)]&&_0x25242b[_0xb7c95e(0x2f1)]['ClassID']===_0x85c768);this[_0xb7c95e(0x37b)](_0x24d56b['max'](0x0,_0x1a0f8a)),this['refresh']();}}const _0x42d454=_0x55bc68[_0xb7c95e(0x30d)];if(_0x42d454[_0xb7c95e(0xe0)](/\[Version[ ](.*?)\]/i)){const _0x1ff78b=Number(RegExp['$1']);_0x1ff78b!==VisuMZ[label][_0xb7c95e(0x3c4)]&&(alert(_0xb7c95e(0x172)['format'](_0x560319,_0x1ff78b)),SceneManager[_0xb7c95e(0x185)]());}if(_0x42d454[_0xb7c95e(0xe0)](/\[Tier[ ](\d+)\]/i)){if('uREtG'!==_0xb7c95e(0x10e)){this[_0xb7c95e(0x38f)][_0xb7c95e(0x318)]=new _0x5b0808(0x1,0x1);return;}else{const _0x425d8e=Number(RegExp['$1']);_0x425d8e<tier?(alert(_0xb7c95e(0x357)['format'](_0x560319,_0x425d8e,tier)),SceneManager['exit']()):tier=Math[_0xb7c95e(0xff)](_0x425d8e,tier);}}VisuMZ[_0xb7c95e(0x101)](VisuMZ[label][_0xb7c95e(0x3a5)],_0x55bc68[_0xb7c95e(0x1bc)]);})(pluginData),VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3b2)]=function(_0x1ed5cf){const _0x568ee2=_0x42c79f;_0x1ed5cf=_0x1ed5cf||VisuMZ[_0x568ee2(0x38a)][_0x568ee2(0x3a5)][_0x568ee2(0xa8)][0x0];const _0x5f1dad=_0x1ed5cf['NameSets'];return _0x5f1dad[Math['randomInt'](_0x5f1dad[_0x568ee2(0x250)])];},PluginManager[_0x42c79f(0x2b2)](pluginData[_0x42c79f(0x399)],'SceneOpenCharaCreateScene',_0x590e55=>{const _0x209297=_0x42c79f;if(SceneManager[_0x209297(0x261)]())return;if($gameParty[_0x209297(0x3a9)]())return;VisuMZ[_0x209297(0x101)](_0x590e55,_0x590e55);const _0x5997cb={'actorID':_0x590e55[_0x209297(0x299)]||$gameActors[_0x209297(0x1a6)](),'level':Math['max'](Math[_0x209297(0x2b6)](_0x590e55[_0x209297(0x138)]||0x1),0x1),'name':String(_0x590e55[_0x209297(0x36e)])||VisuMZ[_0x209297(0x38a)][_0x209297(0x3b2)](),'cancelExit':_0x590e55[_0x209297(0x2fa)]??!![],'showGold':_0x590e55['ShowGoldWindow']??!![],'joinSwitchID':_0x590e55[_0x209297(0x105)]||0x0},_0x495ae0=_0x590e55[_0x209297(0x193)]||0x0;if(_0x5997cb['actorID']>0x0&&!$gameParty['members']()[_0x209297(0xce)]($gameActors[_0x209297(0x2f0)](_0x5997cb['actorID']))){if('VxJOM'===_0x209297(0x348))_0x2ad2da[_0x209297(0x32a)](_0x2164af[_0x209297(0x1f8)],0x0);else{$gameActors[_0x209297(0x2f0)](_0x5997cb[_0x209297(0x394)])[_0x209297(0x339)](_0x5997cb['level']),SceneManager[_0x209297(0x2ff)](Scene_CreateCharacter),SceneManager[_0x209297(0x15a)](_0x209297(0x133),_0x5997cb);if(_0x495ae0)$gameSwitches[_0x209297(0x32a)](_0x495ae0,![]);}}else{if(_0x495ae0)$gameSwitches[_0x209297(0x32a)](_0x495ae0,!![]);}const _0x33204f=_0x590e55[_0x209297(0x3be)]||0x0;if(_0x33204f)$gameVariables[_0x209297(0x32a)](_0x33204f,_0x5997cb[_0x209297(0x394)]);if(_0x5997cb[_0x209297(0x2a7)]){if(_0x209297(0x166)!=='QZQhi')$gameSwitches[_0x209297(0x32a)](_0x5997cb['joinSwitchID'],![]);else{const _0x183408=_0x48c230[_0x209297(0x38a)]['Settings'][_0x209297(0x10d)],_0x1199cc={'name':_0x183408[_0x209297(0x1f6)],'volume':_0x183408['create_volume'],'pitch':_0x183408[_0x209297(0x1cf)],'pan':_0x183408[_0x209297(0xc0)]};_0x33968d['playSe'](_0x1199cc);}}}),PluginManager[_0x42c79f(0x2b2)](pluginData[_0x42c79f(0x399)],'SceneOpenCharaDismissScene',_0x110f33=>{const _0x4327c6=_0x42c79f;if(SceneManager[_0x4327c6(0x261)]())return;if($gameParty[_0x4327c6(0x3a9)]())return;VisuMZ[_0x4327c6(0x101)](_0x110f33,_0x110f33);const _0x3ef018={'dismissSwitchID':_0x110f33['JoinSwitchID']||0x0,'registerVarID':_0x110f33[_0x4327c6(0x3be)]||0x0},_0x57461b=_0x110f33[_0x4327c6(0x193)]||0x0;if($gameParty[_0x4327c6(0x14c)]()[_0x4327c6(0x250)]>0x0){SceneManager[_0x4327c6(0x2ff)](Scene_SelectCreatedChara),SceneManager[_0x4327c6(0x15a)](_0x4327c6(0x3c3),_0x3ef018);if(_0x57461b)$gameSwitches[_0x4327c6(0x32a)](_0x57461b,![]);}else{if(_0x57461b)$gameSwitches[_0x4327c6(0x32a)](_0x57461b,!![]);}_0x3ef018[_0x4327c6(0x252)]&&$gameSwitches[_0x4327c6(0x32a)](_0x3ef018['dismissSwitchID'],![]),_0x3ef018[_0x4327c6(0x1f8)]&&$gameVariables[_0x4327c6(0x32a)](_0x3ef018['registerVarID'],0x0);}),PluginManager['registerCommand'](pluginData['name'],_0x42c79f(0x194),_0x788f77=>{const _0xeab135=_0x42c79f;if(SceneManager['isSceneBattle']())return;if($gameParty[_0xeab135(0x3a9)]())return;VisuMZ[_0xeab135(0x101)](_0x788f77,_0x788f77);const _0x3eb9de={'actorID':_0x788f77[_0xeab135(0x299)]||0x0,'retrain':{'class':_0x788f77[_0xeab135(0x388)],'preserveClassLevel':_0x788f77['PreserveLevel'],'appearance':_0x788f77[_0xeab135(0x177)],'traits':_0x788f77['RetrainTraits'],'voice':_0x788f77[_0xeab135(0x3c6)]??!![],'name':_0x788f77[_0xeab135(0x124)],'profile':_0x788f77[_0xeab135(0x37c)],'bio':_0x788f77['ResetBiography']},'retrainSwitchID':_0x788f77[_0xeab135(0x325)]||0x0,'registerVarID':_0x788f77[_0xeab135(0x3be)]||0x0,'showGold':_0x788f77[_0xeab135(0x2b5)]??!![]},_0xc74d40=_0x788f77[_0xeab135(0x193)]||0x0;if(_0xc74d40)$gameSwitches['setValue'](_0xc74d40,![]);if(_0x3eb9de[_0xeab135(0x394)]>0x0){if(_0xeab135(0x32d)===_0xeab135(0x32d))$gameActors[_0xeab135(0x2f0)](_0x3eb9de[_0xeab135(0x394)])[_0xeab135(0x18b)](_0x3eb9de),SceneManager['push'](Scene_CreateCharacter),SceneManager[_0xeab135(0x15a)](_0xeab135(0x3b4),_0x3eb9de);else{if(!_0x4c3162[_0xeab135(0x254)])return;if(this[_0xeab135(0x2bd)]()&&!this[_0xeab135(0x3ce)][_0xeab135(0x3b4)][_0xeab135(0x2a4)])return;const _0x3a65ca=this[_0xeab135(0xf4)]['_currentVoice']||null;this[_0xeab135(0x2f0)]()[_0xeab135(0x2c6)](_0x3a65ca);const _0x2a97c2=_0x2428ab[_0xeab135(0x1a8)]['Settings'];this[_0xeab135(0x2f0)]()[_0xeab135(0xd9)](_0x2a97c2[_0xeab135(0x154)]),this['actor']()[_0xeab135(0x28e)](_0x2a97c2[_0xeab135(0xee)]),this[_0xeab135(0x2f0)]()[_0xeab135(0x3c7)](_0x2a97c2[_0xeab135(0x234)]);}}else{if(_0x3eb9de[_0xeab135(0x394)]<=0x0&&$gameParty[_0xeab135(0x356)]()[_0xeab135(0x250)]>0x0)SceneManager[_0xeab135(0x2ff)](Scene_SelectCreatedChara),SceneManager[_0xeab135(0x15a)](_0xeab135(0x3b4),_0x3eb9de);else{if(_0xc74d40)$gameSwitches[_0xeab135(0x32a)](_0xc74d40,!![]);}}_0x3eb9de[_0xeab135(0xea)]&&$gameSwitches['setValue'](_0x3eb9de[_0xeab135(0xea)],![]),_0x3eb9de[_0xeab135(0x1f8)]&&$gameVariables['setValue'](_0x3eb9de[_0xeab135(0x1f8)],0x0);}),PluginManager[_0x42c79f(0x2b2)](pluginData[_0x42c79f(0x399)],_0x42c79f(0x152),_0x456a6a=>{const _0x7b9478=_0x42c79f;VisuMZ[_0x7b9478(0x101)](_0x456a6a,_0x456a6a);const _0xa002d7=_0x456a6a[_0x7b9478(0x2cf)]||0x0;if(!_0xa002d7)return;const _0x18ed4c=$gameParty['totalCreatedCharacters']();$gameVariables['setValue'](_0xa002d7,_0x18ed4c);}),PluginManager['registerCommand'](pluginData[_0x42c79f(0x399)],_0x42c79f(0x313),_0x25cb87=>{const _0x350825=_0x42c79f;VisuMZ[_0x350825(0x101)](_0x25cb87,_0x25cb87);const _0x32f5fd=_0x25cb87['VariableID']||0x0;if(!_0x32f5fd)return;const _0x3b43ff=$gameParty[_0x350825(0x102)]();$gameVariables[_0x350825(0x32a)](_0x32f5fd,_0x3b43ff);}),PluginManager['registerCommand'](pluginData[_0x42c79f(0x399)],_0x42c79f(0x1ea),_0x34616a=>{const _0xcebe65=_0x42c79f;VisuMZ[_0xcebe65(0x101)](_0x34616a,_0x34616a);const _0x518af5=_0x34616a[_0xcebe65(0x2cf)]||0x0;if(!_0x518af5)return;const _0xc7fc17=$gameParty[_0xcebe65(0x378)]();$gameVariables[_0xcebe65(0x32a)](_0x518af5,_0xc7fc17);}),VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0xd0)]={'CannotSelectDismiss':/<CANNOT SELECT DISMISS>/i,'CannotSelectRetrain':/<CANNOT SELECT RETRAIN>/i,'ClassIcon':/<ICON:[ ](\d+)>/i,'EnableCanCreate':/<ENABLE IF CAN CREATE CHARACTER>/gi,'EnableCanDismiss':/<ENABLE IF CAN DISMISS CHARACTERS>/gi,'EnableCanRetrain':/<ENABLE IF CAN RETRAIN CHARACTERS>/gi,'EnableHaveCreated':/<ENABLE IF HAVE CREATED CHARACTERS>/gi},SoundManager[_0x42c79f(0x148)]=function(){const _0x343e23=_0x42c79f,_0x395858=VisuMZ[_0x343e23(0x38a)][_0x343e23(0x3a5)]['Sound'],_0x24e6c7={'name':_0x395858['create_name'],'volume':_0x395858['create_volume'],'pitch':_0x395858[_0x343e23(0x1cf)],'pan':_0x395858[_0x343e23(0xc0)]};AudioManager[_0x343e23(0x2ea)](_0x24e6c7);},SoundManager[_0x42c79f(0x2fe)]=function(){const _0x468d39=_0x42c79f,_0x3567b6=VisuMZ[_0x468d39(0x38a)]['Settings'][_0x468d39(0x10d)],_0x1c6d5c={'name':_0x3567b6['dismiss_name'],'volume':_0x3567b6[_0x468d39(0x290)],'pitch':_0x3567b6[_0x468d39(0x3d5)],'pan':_0x3567b6[_0x468d39(0x13a)]};AudioManager[_0x468d39(0x2ea)](_0x1c6d5c);},SoundManager['playRetrainCreatedCharacter']=function(){const _0x381fa4=_0x42c79f,_0x5b248a=VisuMZ[_0x381fa4(0x38a)][_0x381fa4(0x3a5)]['Sound'],_0x26ad4e={'name':_0x5b248a[_0x381fa4(0x28d)],'volume':_0x5b248a[_0x381fa4(0x1d7)],'pitch':_0x5b248a[_0x381fa4(0xaf)],'pan':_0x5b248a[_0x381fa4(0x171)]};AudioManager['playSe'](_0x26ad4e);},TextManager[_0x42c79f(0x2aa)]={'instructions':{'class':VisuMZ[_0x42c79f(0x38a)]['Settings'][_0x42c79f(0x354)][_0x42c79f(0x33a)]??'Please\x20select\x20a\x20class!','appearance':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)][_0x42c79f(0x1b3)]??_0x42c79f(0x222),'traits':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)]['Vocab']['InstructionWindow_Traits']??_0x42c79f(0x294),'voice':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Vocab'][_0x42c79f(0x137)]??_0x42c79f(0xdc),'name':VisuMZ[_0x42c79f(0x38a)]['Settings'][_0x42c79f(0x354)][_0x42c79f(0x323)]??_0x42c79f(0x191),'confirm':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)][_0x42c79f(0x2d4)]??_0x42c79f(0xe6),'graphics':VisuMZ[_0x42c79f(0x38a)]['Settings']['Vocab'][_0x42c79f(0x344)]??'Select\x20graphics\x20set!','dismiss':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)]['InstructionWindow_Dismiss']??_0x42c79f(0x1ff),'retrain':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)][_0x42c79f(0x1b6)]??_0x42c79f(0x310)},'preview':{'cost':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Vocab'][_0x42c79f(0x175)]??_0x42c79f(0x262)},'appearances':{'command':VisuMZ['CharaCreationSys']['Settings']['Vocab'][_0x42c79f(0xa5)]??_0x42c79f(0x1ba),'icon':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Vocab'][_0x42c79f(0x3c2)]??0x53},'graphicSets':{'classSetNameFmt':VisuMZ[_0x42c79f(0x38a)]['Settings'][_0x42c79f(0x354)][_0x42c79f(0x39f)]??_0x42c79f(0x1bf)},'traits':{'accept':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)]['TraitTypesWindow_AcceptText']??_0x42c79f(0x35a),'traitFmt':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Vocab'][_0x42c79f(0x21c)]??_0x42c79f(0x26b)},'voice':{'accept':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x354)]['BattleVoiceWindow_AcceptText']??'Accept\x20Voice','none':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)]['BattleVoiceWindow_NoVoice']??_0x42c79f(0x389)},'naming':{'accept':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x354)]['NameCommandWindow_AcceptText']??_0x42c79f(0x199),'manual':VisuMZ[_0x42c79f(0x38a)]['Settings']['Vocab']['NameCommandWindow_ManualText']??_0x42c79f(0x2b3)},'confirm':{'name':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)][_0x42c79f(0x1aa)]??'\x5cC[16]Name','class':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)]['ConfirmDataWindow_ClassText']??_0x42c79f(0x2c5),'cost':VisuMZ['CharaCreationSys']['Settings']['Vocab'][_0x42c79f(0x303)]??'\x5cC[16]Cost','ok':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)][_0x42c79f(0x1e5)]??_0x42c79f(0x165),'cancel':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)]['ConfirmCommandWindow_CancelText']??_0x42c79f(0x392)},'buttonAssist':{'exit':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)]['ButtonAssist_ClassText']??_0x42c79f(0x208)},'character':{'profile':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)][_0x42c79f(0xf0)]??'\x5cN[%1]\x20is\x20a\x20hired\x20recruit\x20that\x20joined\x20\x5cN[1]\x27s\x20party.','bio':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Vocab'][_0x42c79f(0xcc)]??_0x42c79f(0x2dc),'bioWordWrap':VisuMZ[_0x42c79f(0x38a)]['Settings'][_0x42c79f(0x354)][_0x42c79f(0xc4)]??!![]}},VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x149)]=Scene_Boot['prototype'][_0x42c79f(0x1d4)],Scene_Boot[_0x42c79f(0x1c0)]['onDatabaseLoaded']=function(){const _0xb8a4e5=_0x42c79f;VisuMZ[_0xb8a4e5(0x38a)][_0xb8a4e5(0x149)]['call'](this),this['process_VisuMZ_CharaCreationSys']();},Scene_Boot[_0x42c79f(0x1c0)]['process_VisuMZ_CharaCreationSys']=function(){const _0x5a4656=_0x42c79f;if(Imported[_0x5a4656(0x19a)]){if(_0x5a4656(0xc9)!==_0x5a4656(0x2bb))this['process_VisuMZ_CharaCreationSys_Traits']();else{const _0x5d695e=this[_0x5a4656(0x360)](),_0x4121c2=_0x5d695e,_0xa218=this['lineHeight']()*_0x4023ee;this[_0x5a4656(0xa2)](_0x3d1dbd,_0x4121c2,_0xa218),this[_0x5a4656(0x16e)](),this[_0x5a4656(0xa2)](_0x2c880a,_0x4121c2+_0x5d695e*0x4,_0xa218+this[_0x5a4656(0x25d)]());}}},Scene_Boot[_0x42c79f(0x1c0)][_0x42c79f(0xc6)]=function(){const _0x2aa81d=_0x42c79f;if(!Scene_CreateCharacter[_0x2aa81d(0x3cd)][_0x2aa81d(0x1e4)])return;const _0x4ed3b0=Game_BattlerBase[_0x2aa81d(0x1c0)]['getTraitSetKeys'](),_0x3fee60=VisuMZ[_0x2aa81d(0x38a)][_0x2aa81d(0x3a5)]['Traits'];for(const _0x207632 of _0x4ed3b0){const _0x16ad15=_0x207632[_0x2aa81d(0x24c)]()[_0x2aa81d(0x223)](),_0x170828=_0x3fee60[_0x207632],_0x166ac9=DataManager[_0x2aa81d(0x14b)][_0x16ad15];let _0x1c0bb4=![];if(_0x170828[_0x2aa81d(0xbd)])for(const _0xdef495 of _0x170828[_0x2aa81d(0x2a8)]){const _0x8600bd=_0xdef495[_0x2aa81d(0x260)]['toUpperCase']()['trim']();if(!_0x166ac9[_0x8600bd])continue;const _0x4075fd={'SwitchReq':_0xdef495['SwitchReq']||0x0,'GoldCost':_0xdef495['GoldCost']||0x0,'ItemIdCost':_0xdef495[_0x2aa81d(0x26e)]||0x0,'ItemCountCost':_0xdef495[_0x2aa81d(0x355)],'noCostOption':!![]};_0x166ac9[_0x8600bd][_0x2aa81d(0x35c)]=_0x4075fd,!_0x4075fd[_0x2aa81d(0x3cb)]&&!_0x4075fd['GoldCost']&&!_0x4075fd[_0x2aa81d(0x26e)]&&(_0x1c0bb4=!![],_0xdef495[_0x2aa81d(0x314)]=!![]);}if(!_0x170828['Randomize']){if(_0x2aa81d(0xdd)!==_0x2aa81d(0xb6)){const _0xe1ba4=_0x170828[_0x2aa81d(0x123)][_0x2aa81d(0x24c)]()[_0x2aa81d(0x223)]();if(_0x166ac9[_0xe1ba4]){if(_0x2aa81d(0x115)==='EgCYo')this['_traitType']=_0xc6f129,this[_0x2aa81d(0x15b)]();else{const _0x4d3ac9={'SwitchReq':0x0,'GoldCost':0x0,'ItemIdCost':0x0,'ItemCountCost':0x1};_0x166ac9[_0xe1ba4]['createCostData']=_0x4d3ac9,_0x1c0bb4=!![];}}else{let _0x488132=_0x2aa81d(0x1f2);_0x488132+='VisuMZ_2_CharaCreationSys\x20is\x20using\x20a\x20non-existent\x20trait\x20set\x20for\x20%1\x20trait\x20type\x27s\x20\x22Default\x22\x20parameter.\x0a'[_0x2aa81d(0x358)](_0x207632),_0x488132+=_0x2aa81d(0x240),alert(_0x488132),SceneManager['exit']();}!_0x170828[_0x2aa81d(0x2a8)][_0x2aa81d(0x28b)](_0x101885=>_0x101885[_0x2aa81d(0x260)][_0x2aa81d(0x24c)]()[_0x2aa81d(0x223)]())===_0xe1ba4&&_0x170828[_0x2aa81d(0x2a8)][_0x2aa81d(0x2ff)]({'Name':_0xe1ba4,'SwitchReq':0x0,'GoldCost':0x0,'ItemIdCost':0x0,'ItemCountCost':0x1,'noCostOption':!![]});}else _0x2619ea[_0x40e9a9]=_0x4784b2['ItemCountCost'];}if(!_0x1c0bb4){if(_0x2aa81d(0x267)===_0x2aa81d(0x1dc)){if(!_0x39b074)return;let _0x2dc619=_0x391807[_0x2aa81d(0x2e9)]||'';if(this[_0x2aa81d(0x2b1)]){const _0x5b840c=this[_0x2aa81d(0x2b1)][_0x2aa81d(0x14b)][this[_0x2aa81d(0xbb)]][_0x2aa81d(0x24c)]()[_0x2aa81d(0x223)]();_0x5b840c===_0x12d9f8[_0x2aa81d(0x260)]['toUpperCase']()[_0x2aa81d(0x223)]()&&(_0x2dc619=_0x2aa81d(0x1ab)[_0x2aa81d(0x358)](_0x11e77a[_0x2aa81d(0x3cd)][_0x2aa81d(0x368)],_0x2dc619));}this['drawTextEx'](_0x2dc619,_0x37a991['x']+this[_0x2aa81d(0x360)](),_0x5f1b9f['y']);}else{let _0x347c8f=_0x2aa81d(0x1f2);_0x347c8f+=_0x2aa81d(0x1b8)[_0x2aa81d(0x358)](_0x207632),_0x347c8f+='Please\x20make\x20an\x20option\x20WITHOUT\x20a\x20Required\x20Switch,\x20Gold\x20Cost,\x20and\x20Item\x20Cost\x20Type!',alert(_0x347c8f),SceneManager[_0x2aa81d(0x185)]();}}}},Game_Actor[_0x42c79f(0x1c0)][_0x42c79f(0x339)]=function(_0x3f8c0d){const _0x54c567=_0x42c79f;this[_0x54c567(0x2dd)](this[_0x54c567(0x107)]),this[_0x54c567(0x1c5)](''),this['changeLevel'](_0x3f8c0d,![]),this[_0x54c567(0x1b5)]=[],this[_0x54c567(0x2c4)]([]),this[_0x54c567(0x2e0)]=[],this['recoverAll'](),this[_0x54c567(0x3aa)]=!![];},Game_Actor[_0x42c79f(0x1c0)][_0x42c79f(0x18b)]=function(_0x2de789){const _0x428a8e=_0x42c79f;_0x2de789['name']=this[_0x428a8e(0x399)](),_0x2de789[_0x428a8e(0x20b)]=JsonEx['makeDeepCopy'](this);},Game_Actor[_0x42c79f(0x1c0)][_0x42c79f(0x304)]=function(){const _0x4cd1c6=_0x42c79f;return this[_0x4cd1c6(0x3aa)];},Game_Actor[_0x42c79f(0x1c0)][_0x42c79f(0x270)]=function(){const _0x59e4d8=_0x42c79f;if(!this[_0x59e4d8(0x304)]())return![];const _0x14accf=VisuMZ[_0x59e4d8(0x38a)][_0x59e4d8(0xd0)],_0x25f8f6=this[_0x59e4d8(0x2f0)]()[_0x59e4d8(0x1c1)]||'';if(_0x25f8f6[_0x59e4d8(0xe0)](_0x14accf['CannotSelectDismiss']))return![];return!![];},Game_Actor['prototype'][_0x42c79f(0x349)]=function(){const _0x445716=_0x42c79f;if(!this['isCreatedCharacter']())return![];const _0xadbc8a=VisuMZ[_0x445716(0x38a)][_0x445716(0xd0)],_0x314f3a=this[_0x445716(0x2f0)]()[_0x445716(0x1c1)]||'';if(_0x314f3a[_0x445716(0xe0)](_0xadbc8a[_0x445716(0x184)])){if(_0x445716(0x2e4)!==_0x445716(0x372))return![];else _0x1cbfa0[_0x445716(0x1c0)]['initialize'][_0x445716(0x376)](this,_0x4f1cf6);}return!![];},Game_Actor[_0x42c79f(0x1c0)][_0x42c79f(0x2db)]=function(){const _0x10965b=_0x42c79f;for(const _0x199879 of this['currentClass']()['learnings']){if(_0x199879[_0x10965b(0x14f)]<=this[_0x10965b(0xac)]){if(_0x10965b(0x125)!==_0x10965b(0x1db))this[_0x10965b(0x1e3)](_0x199879[_0x10965b(0x1c8)]);else{if(_0x55c6df!==this[_0x10965b(0x11d)])return;const _0x1535a9=this[_0x10965b(0x2ca)];_0x1535a9[_0x10965b(0x318)]=_0x2bff9b,_0x1535a9['x']=_0x402d1d[_0x10965b(0x316)](this[_0x10965b(0x374)]*_0x1535a9[_0x10965b(0x32f)]['x']),_0x1535a9['y']=_0x5a0d5b['round'](this[_0x10965b(0x2a3)]*_0x1535a9[_0x10965b(0x32f)]['y']);if(_0xd32bc3['SETTINGS'][_0x10965b(0x25a)]){const _0xa20021=this[_0x10965b(0x374)]/_0x126528[_0x10965b(0x296)],_0xc4c331=this['innerHeight']/_0x1e20a5[_0x10965b(0xaa)],_0x1c4af7=_0x493e72['max'](_0xa20021,_0xc4c331,0x1);_0x1535a9[_0x10965b(0x1e6)]['x']=_0x1c4af7,_0x1535a9[_0x10965b(0x1e6)]['y']=_0x1c4af7;}}}}},Game_Actors[_0x42c79f(0x1c0)][_0x42c79f(0x1a6)]=function(){const _0x1dcf64=_0x42c79f;for(let _0x3f8c06=0x1;_0x3f8c06<$dataActors[_0x1dcf64(0x250)];_0x3f8c06++){const _0x9bf0ba=this[_0x1dcf64(0x2f0)](_0x3f8c06);if($gameParty[_0x1dcf64(0xdb)]()[_0x1dcf64(0xce)](_0x9bf0ba))continue;const _0x4fddb0=$dataActors[_0x3f8c06][_0x1dcf64(0x399)][_0x1dcf64(0x24c)]()[_0x1dcf64(0x223)]();if(_0x4fddb0==='')return _0x3f8c06;if(_0x4fddb0===_0x1dcf64(0x291))return _0x3f8c06;}return 0x0;},Game_Party[_0x42c79f(0x1c0)]['totalCreatedCharacters']=function(){const _0x2ce04e=_0x42c79f;return this[_0x2ce04e(0x2ed)]()['length'];},Game_Party[_0x42c79f(0x1c0)]['createdMembers']=function(){const _0x54aa0c=_0x42c79f;return this[_0x54aa0c(0xdb)]()[_0x54aa0c(0x117)](_0x2a5b73=>_0x2a5b73[_0x54aa0c(0x304)]());},Game_Party['prototype'][_0x42c79f(0x14c)]=function(){const _0x1d5224=_0x42c79f;return this[_0x1d5224(0x2ed)]()[_0x1d5224(0x117)](_0x1106ff=>_0x1106ff[_0x1d5224(0x270)]());},Game_Party[_0x42c79f(0x1c0)][_0x42c79f(0x356)]=function(){const _0x534728=_0x42c79f;return this[_0x534728(0x2ed)]()[_0x534728(0x117)](_0x136b87=>_0x136b87['canBeRetrainSelected']());},Game_Party['prototype'][_0x42c79f(0x378)]=function(){const _0x55643f=_0x42c79f;let _0x12433a=0x0;for(let _0x5c0985=0x1;_0x5c0985<$dataActors[_0x55643f(0x250)];_0x5c0985++){if('qhzpS'===_0x55643f(0x25c)){const _0x886080=$dataActors[_0x5c0985],_0x54a677=_0x886080['name'][_0x55643f(0x24c)]()[_0x55643f(0x223)]();(_0x54a677===''||_0x54a677==='<EMPTY>')&&(_0x12433a+=0x1);}else _0x2b47da=!![],_0x2864c7[_0x55643f(0x314)]=!![];}return _0x12433a;},Game_Party[_0x42c79f(0x1c0)]['availableEmptyCreatableCharacterSlots']=function(){const _0x4d4ea7=_0x42c79f;let _0x54500c=0x0;for(let _0x43f612=0x1;_0x43f612<$dataActors['length'];_0x43f612++){if($gameParty[_0x4d4ea7(0xdb)]()[_0x4d4ea7(0xce)]($gameActors[_0x4d4ea7(0x2f0)](_0x43f612)))continue;const _0x3dcca7=$dataActors[_0x43f612],_0x23ce1b=_0x3dcca7[_0x4d4ea7(0x399)][_0x4d4ea7(0x24c)]()[_0x4d4ea7(0x223)]();(_0x23ce1b===''||_0x23ce1b==='<EMPTY>')&&(_0x54500c+=0x1);}return _0x54500c;},VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3b9)]=Scene_Map[_0x42c79f(0x1c0)][_0x42c79f(0x162)],Scene_Map[_0x42c79f(0x1c0)]['needsFadeIn']=function(){const _0x6c4965=_0x42c79f;if($gameTemp[_0x6c4965(0x198)]){$gameTemp[_0x6c4965(0x198)]=![];if(SceneManager['isPreviousScene'](Scene_CreateCharacter))return!![];if(SceneManager[_0x6c4965(0x322)](Scene_SelectCreatedChara))return!![];}return VisuMZ['CharaCreationSys'][_0x6c4965(0x3b9)]['call'](this);};function Scene_SelectCreatedChara(){const _0x4da337=_0x42c79f;this[_0x4da337(0x18a)](...arguments);}Scene_SelectCreatedChara[_0x42c79f(0x1c0)]=Object[_0x42c79f(0x133)](Scene_MenuBase[_0x42c79f(0x1c0)]),Scene_SelectCreatedChara['prototype'][_0x42c79f(0x2e5)]=Scene_SelectCreatedChara,Scene_SelectCreatedChara[_0x42c79f(0x1c0)]['initialize']=function(){const _0x267e6d=_0x42c79f;Scene_MenuBase[_0x267e6d(0x1c0)][_0x267e6d(0x18a)]['call'](this);},Scene_SelectCreatedChara[_0x42c79f(0x1c0)][_0x42c79f(0xf2)]=function(_0x373fcd,_0x139209){const _0x93b88c=_0x42c79f;this[_0x93b88c(0x319)]=_0x373fcd,this['_settings']=_0x139209;},Scene_SelectCreatedChara[_0x42c79f(0x1c0)]['showGoldWindow']=function(){return![];},Scene_SelectCreatedChara[_0x42c79f(0x1c0)][_0x42c79f(0x320)]=function(){return 0x0;},Scene_SelectCreatedChara[_0x42c79f(0x1c0)]['sideBuffer']=function(){const _0x11e5c0=_0x42c79f;return Scene_CreateCharacter[_0x11e5c0(0x3cd)]['buffer'];},Scene_SelectCreatedChara[_0x42c79f(0x1c0)][_0x42c79f(0x133)]=function(){const _0x65be13=_0x42c79f;Scene_MenuBase['prototype'][_0x65be13(0x133)][_0x65be13(0x376)](this),this[_0x65be13(0x3ca)](),this[_0x65be13(0xcf)]();},Scene_SelectCreatedChara[_0x42c79f(0x1c0)][_0x42c79f(0x3ca)]=function(){const _0x465a39=_0x42c79f,_0x391695=this[_0x465a39(0x238)](),_0x8f8062=new Window_CharaCreateInstruction(_0x391695);this[_0x465a39(0xb4)](_0x8f8062),this[_0x465a39(0x1e9)]=_0x8f8062,_0x8f8062['setBackgroundType'](Window_CharaCreateInstruction['SETTINGS'][_0x465a39(0x111)]),this[_0x465a39(0x1c3)]();},Scene_SelectCreatedChara[_0x42c79f(0x1c0)][_0x42c79f(0x238)]=function(){const _0x1ccc04=_0x42c79f;if(VisuMZ[_0x1ccc04(0x38a)][_0x1ccc04(0x3a5)]['Window'][_0x1ccc04(0x343)])return VisuMZ[_0x1ccc04(0x38a)][_0x1ccc04(0x3a5)][_0x1ccc04(0x1d9)][_0x1ccc04(0x343)]['call'](this);const _0x548acc=Graphics[_0x1ccc04(0x214)]-this[_0x1ccc04(0x1e1)]()*0x2,_0x24a3fc=this['calcWindowHeight'](0x1,![]),_0x4df996=this[_0x1ccc04(0x1e1)](),_0x561c93=this[_0x1ccc04(0x215)]()+Math[_0x1ccc04(0x365)](this[_0x1ccc04(0xc1)](0x1,![])*0.5);return new Rectangle(_0x4df996,_0x561c93,_0x548acc-(this[_0x1ccc04(0x38b)]()?this['mainCommandWidth']():0x0),_0x24a3fc);},Scene_SelectCreatedChara[_0x42c79f(0x1c0)][_0x42c79f(0xcf)]=function(){const _0x40d980=_0x42c79f,_0x4a5b6d=this[_0x40d980(0x26d)](),_0x1f9768=new Window_SelectCreateCharacter(_0x4a5b6d);_0x1f9768[_0x40d980(0x385)](this[_0x40d980(0x319)]),_0x1f9768[_0x40d980(0x237)]('ok',this['onActorOk'][_0x40d980(0x1ac)](this)),_0x1f9768[_0x40d980(0x237)](_0x40d980(0x2e3),this[_0x40d980(0x1ae)]['bind'](this)),this['addWindow'](_0x1f9768),this['_actorWindow']=_0x1f9768,_0x1f9768[_0x40d980(0x1d8)](Window_SelectCreateCharacter['SETTINGS']['bgType']);},Scene_SelectCreatedChara[_0x42c79f(0x1c0)][_0x42c79f(0x26d)]=function(){const _0x21f102=_0x42c79f;if(VisuMZ[_0x21f102(0x38a)][_0x21f102(0x3a5)][_0x21f102(0x1d9)][_0x21f102(0x275)])return VisuMZ[_0x21f102(0x38a)][_0x21f102(0x3a5)][_0x21f102(0x1d9)]['SelectActorWindow_RectJS'][_0x21f102(0x376)](this);const _0x31d4f3=Graphics[_0x21f102(0x214)]-this[_0x21f102(0x1e1)]()*0x2,_0x289aa0=this[_0x21f102(0x1a9)]()-this[_0x21f102(0xc1)](0x1,![])*0x3,_0x344a54=this[_0x21f102(0x1e1)](),_0x5664e7=this[_0x21f102(0x215)]()+this[_0x21f102(0xc1)](0x1,![])*0x2;return new Rectangle(_0x344a54,_0x5664e7,_0x31d4f3,_0x289aa0);},Scene_SelectCreatedChara[_0x42c79f(0x1c0)][_0x42c79f(0x1c3)]=function(){const _0x240a28=_0x42c79f,_0x3e968f=this['_type'];this[_0x240a28(0x342)](_0x3e968f);},Scene_SelectCreatedChara['prototype']['updateInstructionTextKey']=function(_0x15f1e9){const _0x3e4901=_0x42c79f,_0xbf032=TextManager['CHARA_CREATION_SYS'][_0x3e4901(0x34c)][_0x15f1e9]||'';this['_instructionWindow'][_0x3e4901(0x11b)](_0xbf032);},Scene_SelectCreatedChara[_0x42c79f(0x1c0)]['onActorOk']=function(){const _0x581a1b=_0x42c79f;if(this[_0x581a1b(0x319)]===_0x581a1b(0x3c3))this[_0x581a1b(0x2ee)]();else{if(this[_0x581a1b(0x319)]===_0x581a1b(0x3b4)){if(_0x581a1b(0x10b)!==_0x581a1b(0x10b))return _0x5f53ea[_0x581a1b(0x38a)][_0x581a1b(0x3a5)][_0x581a1b(0x1d9)][_0x581a1b(0x1d6)]['call'](this);else this[_0x581a1b(0x2e2)]();}}},Scene_SelectCreatedChara['prototype'][_0x42c79f(0x2ee)]=function(){const _0x5e278d=_0x42c79f,_0x5097b7=this[_0x5e278d(0x229)][_0x5e278d(0x3d2)]();this[_0x5e278d(0x3ce)][_0x5e278d(0x252)]&&$gameSwitches[_0x5e278d(0x32a)](this['_settings'][_0x5e278d(0x252)],!![]),this[_0x5e278d(0x3ce)][_0x5e278d(0x1f8)]&&$gameVariables[_0x5e278d(0x32a)](this[_0x5e278d(0x3ce)]['registerVarID'],_0x5097b7[_0x5e278d(0x180)]()),_0x5097b7[_0x5e278d(0x167)](),$gameParty['removeActor'](_0x5097b7[_0x5e278d(0x180)]()),$gameTemp['_characterCreated']=!![],this[_0x5e278d(0x201)](this[_0x5e278d(0xc5)]()),this[_0x5e278d(0x1ae)]();},Scene_SelectCreatedChara[_0x42c79f(0x1c0)][_0x42c79f(0x2e2)]=function(){const _0x46f223=_0x42c79f,_0x45188c=this[_0x46f223(0x229)][_0x46f223(0x3d2)]();this[_0x46f223(0x3ce)][_0x46f223(0x394)]=_0x45188c[_0x46f223(0x180)](),_0x45188c[_0x46f223(0x18b)](this[_0x46f223(0x3ce)]),SceneManager[_0x46f223(0x2ff)](Scene_CreateCharacter),SceneManager[_0x46f223(0x15a)](_0x46f223(0x3b4),this[_0x46f223(0x3ce)]);},Scene_SelectCreatedChara['prototype'][_0x42c79f(0x135)]=function(){const _0x559b42=_0x42c79f;Scene_MenuBase[_0x559b42(0x1c0)][_0x559b42(0x135)][_0x559b42(0x376)](this),this[_0x559b42(0x190)](this[_0x559b42(0x163)]()),this[_0x559b42(0x2ec)]();},Scene_SelectCreatedChara[_0x42c79f(0x1c0)][_0x42c79f(0x163)]=function(){const _0x1cfab8=_0x42c79f;return VisuMZ[_0x1cfab8(0x38a)][_0x1cfab8(0x3a5)][_0x1cfab8(0x21b)][_0x1cfab8(0xf8)];},Scene_SelectCreatedChara[_0x42c79f(0x1c0)][_0x42c79f(0x2ec)]=function(){const _0x1cb56e=_0x42c79f,_0x41e5cb=VisuMZ[_0x1cb56e(0x38a)]['Settings'][_0x1cb56e(0x21b)];_0x41e5cb&&(_0x41e5cb[_0x1cb56e(0x197)]!==''||_0x41e5cb[_0x1cb56e(0x22d)]!=='')&&(this[_0x1cb56e(0x3b6)]=new Sprite(ImageManager[_0x1cb56e(0x2d7)](_0x41e5cb[_0x1cb56e(0x197)])),this['_backSprite2']=new Sprite(ImageManager[_0x1cb56e(0x3ae)](_0x41e5cb[_0x1cb56e(0x22d)])),this['addChild'](this['_backSprite1']),this[_0x1cb56e(0x20e)](this[_0x1cb56e(0xf9)]),this[_0x1cb56e(0x3b6)][_0x1cb56e(0x318)]['addLoadListener'](this[_0x1cb56e(0x397)][_0x1cb56e(0x1ac)](this,this['_backSprite1'])),this['_backSprite2'][_0x1cb56e(0x318)][_0x1cb56e(0x32b)](this[_0x1cb56e(0x397)][_0x1cb56e(0x1ac)](this,this[_0x1cb56e(0xf9)])));},Scene_SelectCreatedChara[_0x42c79f(0x1c0)][_0x42c79f(0x397)]=function(_0x4f6fcf){const _0x99367=_0x42c79f;this[_0x99367(0x12e)](_0x4f6fcf),this['centerSprite'](_0x4f6fcf);};function Scene_CreateCharacter(){const _0x51892c=_0x42c79f;this[_0x51892c(0x18a)](...arguments);}Scene_CreateCharacter[_0x42c79f(0x1c0)]=Object[_0x42c79f(0x133)](Scene_MenuBase[_0x42c79f(0x1c0)]),Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x2e5)]=Scene_CreateCharacter,Scene_CreateCharacter[_0x42c79f(0x3cd)]={'steps':['class','appearance',_0x42c79f(0x2d8),_0x42c79f(0x2a4),_0x42c79f(0x399),_0x42c79f(0x20d)],'buffer':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x2f5)]??0x30,'showListIcons':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)]['ShowIcons']??!![],'traitsStep':VisuMZ['CharaCreationSys']['Settings'][_0x42c79f(0x118)][_0x42c79f(0x3a1)]??!![],'voiceStep':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)]['BattleVoiceWindow_Enable']??!![]},Scene_CreateCharacter[_0x42c79f(0x1c0)]['initialize']=function(){const _0x156603=_0x42c79f;Scene_MenuBase['prototype'][_0x156603(0x18a)][_0x156603(0x376)](this),this['_step']=-0x1;},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0xf2)]=function(_0x223580,_0x44d1ac){const _0x19ebaf=_0x42c79f;this[_0x19ebaf(0x319)]=_0x223580,this[_0x19ebaf(0x3ce)]=_0x44d1ac,this['prepareTraits']();},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x2f0)]=function(){const _0x31fd9a=_0x42c79f;return $gameActors[_0x31fd9a(0x2f0)](this[_0x31fd9a(0x3ce)][_0x31fd9a(0x394)])||null;},Scene_CreateCharacter['prototype'][_0x42c79f(0x38b)]=function(){const _0x3e9378=_0x42c79f;return this[_0x3e9378(0x3ce)]['showGold'];},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x320)]=function(){return 0x0;},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x1e1)]=function(){const _0x315e41=_0x42c79f;return Scene_CreateCharacter[_0x315e41(0x3cd)][_0x315e41(0x2fc)];},Scene_CreateCharacter['prototype']['isRetrainMode']=function(){const _0x20947f=_0x42c79f;return this[_0x20947f(0x319)]===_0x20947f(0x3b4);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x29f)]=function(){const _0x53367c=_0x42c79f;if(!Imported[_0x53367c(0x19a)])return;this['_traits']={};const _0x3cedef=this['actor']()[_0x53367c(0x2c9)]();for(const _0x3acdda of _0x3cedef){if(_0x53367c(0x3c8)!==_0x53367c(0x24f))this[_0x53367c(0x1a4)][_0x3acdda[_0x53367c(0x24c)]()[_0x53367c(0x223)]()]=this[_0x53367c(0xa9)](_0x3acdda);else{if(_0x5db719['GoldCost']>0x0){let _0x1f06d2=_0xb7c23[_0x53367c(0x2da)][_0x53367c(0x211)](this[_0x53367c(0xbb)]);_0x1f06d2+=_0x40f98f[_0x53367c(0x366)];if(_0x5be4c9[_0x53367c(0xad)]()<_0x1f06d2)return![];}if(_0xb6d22[_0x53367c(0x26e)]>0x0){const _0x4fbb41=_0x462907['_scene'][_0x53367c(0x136)](this[_0x53367c(0xbb)]),_0x5a5229=_0x209f69[_0x53367c(0x26e)];_0x4fbb41[_0x5a5229]=_0x4fbb41[_0x5a5229]||0x0,_0x4fbb41[_0x5a5229]+=_0x206c5c[_0x53367c(0x355)];if(!_0x321e0a['_scene']['meetsTotalItemCosts'](_0x4fbb41))return![];}return!![];}}},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0xa9)]=function(_0x1d3e81){const _0x502a60=_0x42c79f;if(this[_0x502a60(0x2bd)]()){const _0x25ba97=this[_0x502a60(0x3ce)][_0x502a60(0x20b)],_0x29f20d=_0x25ba97[_0x502a60(0x14b)][_0x1d3e81]||'';return _0x29f20d['toUpperCase']()[_0x502a60(0x223)]();}const _0x960e06=VisuMZ[_0x502a60(0x38a)]['Settings']['Traits'],_0x589a27=_0x960e06[_0x1d3e81];if(_0x589a27[_0x502a60(0x218)]){const _0x53528a=_0x589a27[_0x502a60(0x2a8)][_0x502a60(0x117)](_0x3a8ebe=>_0x3a8ebe['noCostOption']),_0x59f61b=_0x53528a[Math[_0x502a60(0x36d)](_0x53528a['length'])];return _0x59f61b[_0x502a60(0x260)][_0x502a60(0x24c)]()[_0x502a60(0x223)]();}else return _0x589a27['Default'][_0x502a60(0x24c)]()[_0x502a60(0x223)]();},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x241)]=function(){const _0x105c6a=_0x42c79f;Scene_MenuBase['prototype'][_0x105c6a(0x241)][_0x105c6a(0x376)](this),this[_0x105c6a(0x2bd)]()&&this[_0x105c6a(0x3b5)](),this[_0x105c6a(0x174)](),this[_0x105c6a(0x1c3)]();},Scene_CreateCharacter[_0x42c79f(0x1c0)]['setInitialStep']=function(){const _0x1db70a=_0x42c79f;this[_0x1db70a(0x23c)]=-0x1,this[_0x1db70a(0x17f)]='',this['gotoNextStep'](),this[_0x1db70a(0x19f)]=this[_0x1db70a(0x23c)],this['openCurrentStepWindows']();},Scene_CreateCharacter['prototype']['gotoNextStep']=function(){const _0x13128f=_0x42c79f,_0x388a6c=Scene_CreateCharacter[_0x13128f(0x3cd)]['steps'];for(;;){if(_0x13128f(0x128)!==_0x13128f(0x128))return this[_0x13128f(0x2ed)]()[_0x13128f(0x117)](_0x1aa2b3=>_0x1aa2b3[_0x13128f(0x270)]());else{this[_0x13128f(0x23c)]+=0x1;if(this[_0x13128f(0x18e)](_0x388a6c[this[_0x13128f(0x23c)]])){if('YTxqm'==='YTxqm')break;else this['_text']!==_0x531262&&(this['_text']=_0x5c30a9,this[_0x13128f(0x15b)]());}if(this[_0x13128f(0x23c)]>=_0x388a6c[_0x13128f(0x250)]){alert(_0x13128f(0x32c)[_0x13128f(0x358)](this['_step'])),SceneManager[_0x13128f(0x185)]();return;}}}this[_0x13128f(0x17f)]=_0x388a6c[this[_0x13128f(0x23c)]];},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x346)]=function(){const _0x16bcf8=_0x42c79f,_0x3ab3d7=Scene_CreateCharacter[_0x16bcf8(0x3cd)][_0x16bcf8(0x161)];for(;;){this[_0x16bcf8(0x23c)]-=0x1;if(this[_0x16bcf8(0x19f)]===this['_step']){if(_0x16bcf8(0x15d)!=='NMovn')break;else{let _0x315f25=_0x8b38c4[_0x16bcf8(0x1c0)][_0x16bcf8(0xbe)]['call'](this);return _0x315f25+=_0x1f3ba6[_0x16bcf8(0x3cd)][_0x16bcf8(0x27d)],_0x315f25;}}if(this[_0x16bcf8(0x18e)](_0x3ab3d7[this[_0x16bcf8(0x23c)]]))break;if(this[_0x16bcf8(0x23c)]>=_0x3ab3d7[_0x16bcf8(0x250)]){if('ektKp'===_0x16bcf8(0x30e)){if(this[_0x16bcf8(0x2bd)]()&&!this[_0x16bcf8(0x3ce)][_0x16bcf8(0x3b4)][_0x16bcf8(0x399)])return;const _0x21ef11=this['_nameCurrentWindow'][_0x16bcf8(0xb7)]||'';this[_0x16bcf8(0x2f0)]()['setName'](_0x21ef11);}else{alert('Error!\x20Impossible\x20step!\x20%1'[_0x16bcf8(0x358)](this[_0x16bcf8(0x23c)])),SceneManager[_0x16bcf8(0x185)]();return;}}}this[_0x16bcf8(0x17f)]=_0x3ab3d7[this['_step']];},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x18e)]=function(_0x3cc5e1){const _0x4ee12d=_0x42c79f;switch(_0x3cc5e1[_0x4ee12d(0xb1)]()[_0x4ee12d(0x223)]()){case _0x4ee12d(0x364):if(this['isRetrainMode']())return this[_0x4ee12d(0x3ce)][_0x4ee12d(0x3b4)][_0x4ee12d(0x364)];return!![];case'appearance':if(this[_0x4ee12d(0x2bd)]())return this[_0x4ee12d(0x3ce)][_0x4ee12d(0x3b4)][_0x4ee12d(0x247)];return!![];case'traits':if(!Imported[_0x4ee12d(0x19a)])return![];if(!Scene_CreateCharacter[_0x4ee12d(0x3cd)]['traitsStep'])return![];if(this[_0x4ee12d(0x2bd)]())return this[_0x4ee12d(0x3ce)][_0x4ee12d(0x3b4)]['traits'];return!![];case _0x4ee12d(0x2a4):if(!Imported[_0x4ee12d(0x254)])return![];if(!Scene_CreateCharacter[_0x4ee12d(0x3cd)][_0x4ee12d(0x202)])return![];if(this[_0x4ee12d(0x2bd)]())return this['_settings'][_0x4ee12d(0x3b4)][_0x4ee12d(0x2a4)];return!![];case _0x4ee12d(0x399):if(this[_0x4ee12d(0x2bd)]())return this[_0x4ee12d(0x3ce)]['retrain'][_0x4ee12d(0x399)];return!![];case _0x4ee12d(0x20d):return!![];default:return![];}},Scene_CreateCharacter['prototype'][_0x42c79f(0x1e2)]=function(){const _0x4079e3=_0x42c79f;if(!this[_0x4079e3(0x2ae)])return;for(const _0x23000e of this[_0x4079e3(0x2ae)]){if(_0x4079e3(0x3bd)===_0x4079e3(0x37f))return this[_0x4079e3(0x2f0)](this[_0x4079e3(0xf7)]());else _0x23000e[_0x4079e3(0x373)](),_0x23000e[_0x4079e3(0x2df)]();}},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x159)]=function(){const _0x272d28=_0x42c79f;if(this[_0x272d28(0x17f)]===_0x272d28(0x20d)){if(_0x272d28(0x39c)===_0x272d28(0x293))_0x304eb8+=0x1;else{this['popScene']();return;}}this[_0x272d28(0x1e2)](),this[_0x272d28(0x2b4)](),this[_0x272d28(0x1c3)](),this[_0x272d28(0x329)]();},Scene_CreateCharacter['prototype'][_0x42c79f(0x3ba)]=function(){const _0x1731fe=_0x42c79f;if(this['_firstStep']===this[_0x1731fe(0x23c)]){this[_0x1731fe(0x1ae)]();return;}this['closeAllWindows'](),this[_0x1731fe(0x346)](),this[_0x1731fe(0x1c3)](),this[_0x1731fe(0x329)]();},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x329)]=function(){const _0x1664c8=_0x42c79f;Input[_0x1664c8(0x108)](),this[_0x1664c8(0x3bb)]['open']();const _0x344ae9=this[_0x1664c8(0x17f)];switch(_0x344ae9[_0x1664c8(0xb1)]()[_0x1664c8(0x223)]()){case'class':this[_0x1664c8(0x25b)][_0x1664c8(0x1be)](),this[_0x1664c8(0x25b)][_0x1664c8(0x15b)](),this[_0x1664c8(0x25b)][_0x1664c8(0x217)]();break;case'appearance':this['_appearanceWindow'][_0x1664c8(0x1be)](),this['_appearanceWindow'][_0x1664c8(0x15b)](),this[_0x1664c8(0x324)][_0x1664c8(0x217)]();break;case _0x1664c8(0x2d8):this[_0x1664c8(0x24b)][_0x1664c8(0x217)](),this['_traitTypesWindow'][_0x1664c8(0x1be)](),this['_traitTypesWindow'][_0x1664c8(0x15b)]();break;case _0x1664c8(0x2a4):this[_0x1664c8(0xf4)][_0x1664c8(0x217)](),this[_0x1664c8(0xf4)][_0x1664c8(0x1be)](),this[_0x1664c8(0xf4)][_0x1664c8(0x15b)]();break;case _0x1664c8(0x399):this[_0x1664c8(0x369)][_0x1664c8(0x217)](),this[_0x1664c8(0x369)][_0x1664c8(0x15b)](),this[_0x1664c8(0xe9)][_0x1664c8(0x217)](),this[_0x1664c8(0xe9)][_0x1664c8(0x1be)]();break;case'confirm':this['_confirmDataWindow'][_0x1664c8(0x217)](),this[_0x1664c8(0xcd)][_0x1664c8(0x15b)](),this[_0x1664c8(0x295)][_0x1664c8(0x217)](),this['_confirmCommandWindow']['activate'](),this[_0x1664c8(0x295)][_0x1664c8(0x15b)]();break;default:break;}},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x133)]=function(){const _0x391863=_0x42c79f;Scene_MenuBase[_0x391863(0x1c0)]['create']['call'](this),this['_stepWindows']=[],this[_0x391863(0x3ca)](),this[_0x391863(0x127)](),this['createGraphicsPreviewWindow'](),this['createClassListWindow'](),this[_0x391863(0x2a9)](),this[_0x391863(0x27f)](),this[_0x391863(0x383)](),this[_0x391863(0x2d6)](),this[_0x391863(0x1ec)](),this[_0x391863(0x1b0)](),this[_0x391863(0x178)](),this['createNameEditWindow'](),this[_0x391863(0x3af)](),this[_0x391863(0xfe)](),this[_0x391863(0x377)]();},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x3b5)]=function(){const _0x1ef4e1=_0x42c79f;this[_0x1ef4e1(0x3bb)]['setupRetrain'](this[_0x1ef4e1(0x3ce)]),this[_0x1ef4e1(0x25b)][_0x1ef4e1(0x10f)](this['_settings']),this[_0x1ef4e1(0x324)][_0x1ef4e1(0x10f)](this[_0x1ef4e1(0x3ce)]),this[_0x1ef4e1(0x24b)]['setupRetrain'](this['_settings']),this['_traitSetsWindow']['setupRetrain'](this[_0x1ef4e1(0x3ce)]),this[_0x1ef4e1(0xcd)][_0x1ef4e1(0x10f)](this[_0x1ef4e1(0x3ce)]);},Scene_CreateCharacter[_0x42c79f(0x1c0)]['createInstructionWindow']=function(){const _0x2dc4fc=_0x42c79f,_0x28233f=this[_0x2dc4fc(0x238)](),_0x33bcd3=new Window_CharaCreateInstruction(_0x28233f);this['addWindow'](_0x33bcd3),this[_0x2dc4fc(0x1e9)]=_0x33bcd3,_0x33bcd3['setBackgroundType'](Window_CharaCreateInstruction[_0x2dc4fc(0x3cd)][_0x2dc4fc(0x111)]);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x238)]=function(){const _0x3db191=_0x42c79f;if(VisuMZ[_0x3db191(0x38a)]['Settings'][_0x3db191(0x1d9)]['InstructionWindow_RectJS'])return VisuMZ[_0x3db191(0x38a)][_0x3db191(0x3a5)]['Window'][_0x3db191(0x343)][_0x3db191(0x376)](this);const _0x4c48de=Graphics[_0x3db191(0x214)]-this[_0x3db191(0x1e1)]()*0x2,_0x1df19b=this['calcWindowHeight'](0x1,![]),_0x506280=this[_0x3db191(0x1e1)](),_0x10c054=this[_0x3db191(0x215)]()+Math[_0x3db191(0x365)](this[_0x3db191(0xc1)](0x1,![])*0.5);return new Rectangle(_0x506280,_0x10c054,_0x4c48de-(this[_0x3db191(0x38b)]()?this[_0x3db191(0x32e)]():0x0),_0x1df19b);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x127)]=function(){const _0x340d3e=_0x42c79f;if(!this[_0x340d3e(0x38b)]())return;const _0x23d2d4=this[_0x340d3e(0x321)](),_0x68a827=new Window_CharaCreateGold(_0x23d2d4);this[_0x340d3e(0xb4)](_0x68a827),this['_goldWindow']=_0x68a827,_0x68a827['setBackgroundType'](Window_CharaCreateGold[_0x340d3e(0x3cd)][_0x340d3e(0x111)]);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x321)]=function(){const _0x45e53d=_0x42c79f;if(VisuMZ['CharaCreationSys'][_0x45e53d(0x3a5)][_0x45e53d(0x1d9)][_0x45e53d(0x384)])return VisuMZ[_0x45e53d(0x38a)][_0x45e53d(0x3a5)][_0x45e53d(0x1d9)]['GoldWindow_RectJS'][_0x45e53d(0x376)](this);const _0x342276=this[_0x45e53d(0x238)](),_0x255250=this[_0x45e53d(0x32e)](),_0x59397c=_0x342276['height'],_0x32c081=_0x342276['x']+_0x342276[_0x45e53d(0x296)],_0x31229d=_0x342276['y'];return new Rectangle(_0x32c081,_0x31229d,_0x255250,_0x59397c);},Scene_CreateCharacter['prototype'][_0x42c79f(0x287)]=function(){const _0x3b701a=_0x42c79f,_0x1e73dd=this[_0x3b701a(0x328)](),_0x336172=new Window_CharaCreateGraphicsPreview(_0x1e73dd);this[_0x3b701a(0xb4)](_0x336172),this[_0x3b701a(0x3bb)]=_0x336172,_0x336172[_0x3b701a(0x1d8)](Window_CharaCreateGraphicsPreview[_0x3b701a(0x3cd)][_0x3b701a(0x111)]);},Scene_CreateCharacter['prototype'][_0x42c79f(0x328)]=function(){const _0x29bedc=_0x42c79f;if(VisuMZ['CharaCreationSys'][_0x29bedc(0x3a5)][_0x29bedc(0x1d9)]['GraphicsPreviewWindow_RectJS'])return VisuMZ['CharaCreationSys']['Settings'][_0x29bedc(0x1d9)][_0x29bedc(0x390)][_0x29bedc(0x376)](this);const _0x2b816e=Math[_0x29bedc(0x365)](Graphics[_0x29bedc(0x214)]/0x2)-Math[_0x29bedc(0x2b6)](this[_0x29bedc(0x1e1)]()*1.5),_0x3d8f8c=this['mainAreaHeight']()-this[_0x29bedc(0xc1)](0x1,![])*0x3,_0xcd7fad=Graphics['boxWidth']-_0x2b816e-this['sideBuffer'](),_0x26b861=this[_0x29bedc(0x215)]()+this[_0x29bedc(0xc1)](0x1,![])*0x2;return new Rectangle(_0xcd7fad,_0x26b861,_0x2b816e,_0x3d8f8c);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x298)]=function(){const _0x5aa411=_0x42c79f,_0x10faf7=this[_0x5aa411(0x37d)](),_0x6cb498=new Window_CharaCreateClassList(_0x10faf7);_0x6cb498[_0x5aa411(0x228)](this['_graphicsPreviewWindow']),_0x6cb498[_0x5aa411(0x237)](_0x5aa411(0x364),this[_0x5aa411(0x186)]['bind'](this)),_0x6cb498[_0x5aa411(0x237)](_0x5aa411(0x2e3),this['processPrevStep'][_0x5aa411(0x1ac)](this)),this['addWindow'](_0x6cb498),this[_0x5aa411(0x25b)]=_0x6cb498,this[_0x5aa411(0x2ae)]['push'](_0x6cb498),_0x6cb498[_0x5aa411(0x1d8)](Window_CharaCreateClassList['SETTINGS']['bgType']);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x37d)]=function(){const _0x48116b=_0x42c79f;if(VisuMZ[_0x48116b(0x38a)]['Settings'][_0x48116b(0x1d9)][_0x48116b(0x1d2)])return VisuMZ['CharaCreationSys'][_0x48116b(0x3a5)][_0x48116b(0x1d9)]['ClassListWindow_RectJS']['call'](this);const _0xb500ea=Math['floor'](Graphics[_0x48116b(0x214)]/0x2)-Math[_0x48116b(0x2b6)](this['sideBuffer']()*1.5),_0x26bcfe=this['mainAreaHeight']()-this[_0x48116b(0xc1)](0x1,![])*0x3,_0x178029=this['sideBuffer'](),_0x2e9df8=this[_0x48116b(0x215)]()+this[_0x48116b(0xc1)](0x1,![])*0x2;return new Rectangle(_0x178029,_0x2e9df8,_0xb500ea,_0x26bcfe);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x2a9)]=function(){const _0x198534=_0x42c79f,_0x37e4bd=this[_0x198534(0x181)](),_0x388259=new Window_CharaCreateAppearance(_0x37e4bd);_0x388259[_0x198534(0x228)](this[_0x198534(0x3bb)]),_0x388259['setHandler'](_0x198534(0x11a),this[_0x198534(0x159)]['bind'](this)),_0x388259[_0x198534(0x237)](_0x198534(0x276),this[_0x198534(0x16b)][_0x198534(0x1ac)](this)),_0x388259[_0x198534(0x237)](_0x198534(0x2e3),this[_0x198534(0x3ba)][_0x198534(0x1ac)](this)),this['addWindow'](_0x388259),this['_appearanceWindow']=_0x388259,this[_0x198534(0x2ae)][_0x198534(0x2ff)](_0x388259),_0x388259[_0x198534(0x1d8)](Window_CharaCreateAppearance[_0x198534(0x3cd)]['bgType']);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x181)]=function(){const _0x3527e6=_0x42c79f;if(VisuMZ[_0x3527e6(0x38a)][_0x3527e6(0x3a5)]['Window']['AppearanceWindow_RectJS'])return VisuMZ[_0x3527e6(0x38a)][_0x3527e6(0x3a5)]['Window'][_0x3527e6(0x164)]['call'](this);const _0x34f99e=Math['floor'](Graphics[_0x3527e6(0x214)]/0x2)-Math[_0x3527e6(0x2b6)](this[_0x3527e6(0x1e1)]()*1.5),_0x438caa=this[_0x3527e6(0x1a9)]()-this[_0x3527e6(0xc1)](0x1,![])*0x3,_0x3618c1=this['sideBuffer'](),_0x4f2fa7=this[_0x3527e6(0x215)]()+this[_0x3527e6(0xc1)](0x1,![])*0x2;return new Rectangle(_0x3618c1,_0x4f2fa7,_0x34f99e,_0x438caa);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x27f)]=function(){const _0x171cf6=_0x42c79f,_0x3e6b7a=this[_0x171cf6(0x14d)](),_0xe31658=new Window_CharaCreateGraphicSets(_0x3e6b7a);_0xe31658[_0x171cf6(0x228)](this[_0x171cf6(0x3bb)]),_0xe31658['setHandler'](_0x171cf6(0x11a),this[_0x171cf6(0x3d6)]['bind'](this)),_0xe31658[_0x171cf6(0x237)]('cancel',this[_0x171cf6(0x12a)][_0x171cf6(0x1ac)](this)),this['addWindow'](_0xe31658),this['_graphicSetsWindow']=_0xe31658,this[_0x171cf6(0x2ae)][_0x171cf6(0x2ff)](_0xe31658),_0xe31658[_0x171cf6(0x1d8)](Window_CharaCreateGraphicSets[_0x171cf6(0x3cd)][_0x171cf6(0x111)]);},Scene_CreateCharacter[_0x42c79f(0x1c0)]['graphicSetsWindowRect']=function(){const _0x1db8fc=_0x42c79f;if(VisuMZ[_0x1db8fc(0x38a)][_0x1db8fc(0x3a5)][_0x1db8fc(0x1d9)]['GraphicSetsWindow_RectJS'])return VisuMZ[_0x1db8fc(0x38a)][_0x1db8fc(0x3a5)][_0x1db8fc(0x1d9)]['GraphicSetsWindow_RectJS'][_0x1db8fc(0x376)](this);const _0x462914=Math['floor'](Graphics[_0x1db8fc(0x214)]/0x2)-Math['ceil'](this['sideBuffer']()*1.5),_0x40d0b6=this[_0x1db8fc(0x1a9)]()-this[_0x1db8fc(0xc1)](0x1,![])*0x3,_0x41adf9=this[_0x1db8fc(0x1e1)](),_0x1be33a=this['mainAreaTop']()+this['calcWindowHeight'](0x1,![])*0x2;return new Rectangle(_0x41adf9,_0x1be33a,_0x462914,_0x40d0b6);},Scene_CreateCharacter[_0x42c79f(0x1c0)]['createTraitTypesWindow']=function(){const _0x2741eb=_0x42c79f;if(!Imported['VisuMZ_1_ElementStatusCore'])return;const _0x2259fc=this[_0x2741eb(0xde)](),_0x328ce6=new Window_CharaCreateTraitTypes(_0x2259fc);_0x328ce6['setHandler']('accept',this[_0x2741eb(0x159)][_0x2741eb(0x1ac)](this)),_0x328ce6[_0x2741eb(0x237)](_0x2741eb(0x2e3),this['processPrevStep']['bind'](this));const _0x3f416d=this['actor']()[_0x2741eb(0x2c9)]();for(const _0x29afda of _0x3f416d){_0x2741eb(0x12b)==='uvOpa'?(_0x50fe99=_0x5d98f5[_0x2741eb(0x279)],_0x1983bd=_0x2741eb(0x120)[_0x2741eb(0x358)](_0x13a06f,_0x144fe2)):_0x328ce6[_0x2741eb(0x237)](_0x29afda,this[_0x2741eb(0xb8)][_0x2741eb(0x1ac)](this,_0x29afda));}this['addWindow'](_0x328ce6),this[_0x2741eb(0x24b)]=_0x328ce6,this[_0x2741eb(0x2ae)][_0x2741eb(0x2ff)](_0x328ce6),_0x328ce6[_0x2741eb(0x1d8)](Window_CharaCreateTraitTypes['SETTINGS']['bgType']);},Scene_CreateCharacter['prototype'][_0x42c79f(0xde)]=function(){const _0x2815af=_0x42c79f;if(VisuMZ[_0x2815af(0x38a)][_0x2815af(0x3a5)][_0x2815af(0x1d9)][_0x2815af(0x39b)])return VisuMZ[_0x2815af(0x38a)][_0x2815af(0x3a5)][_0x2815af(0x1d9)][_0x2815af(0x39b)][_0x2815af(0x376)](this);const _0x435b75=Math[_0x2815af(0x365)](Graphics[_0x2815af(0x214)]/0x2)-Math[_0x2815af(0x2b6)](this[_0x2815af(0x1e1)]()*1.5),_0x12b068=this[_0x2815af(0x1a9)]()-this[_0x2815af(0xc1)](0x1,![])*0x3,_0x5584b3=this['sideBuffer'](),_0x2d4b7b=this[_0x2815af(0x215)]()+this[_0x2815af(0xc1)](0x1,![])*0x2;return new Rectangle(_0x5584b3,_0x2d4b7b,_0x435b75,_0x12b068);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x2d6)]=function(){const _0x5a5911=_0x42c79f;if(!Imported[_0x5a5911(0x19a)])return;const _0x2a0bf1=this[_0x5a5911(0x34a)](),_0x4b2a0c=new Window_CharaCreateTraitSets(_0x2a0bf1);_0x4b2a0c[_0x5a5911(0x237)](_0x5a5911(0x306),this['onTraitSetsOk']['bind'](this)),_0x4b2a0c[_0x5a5911(0x237)]('cancel',this[_0x5a5911(0x3a4)][_0x5a5911(0x1ac)](this)),this['addWindow'](_0x4b2a0c),this[_0x5a5911(0x271)]=_0x4b2a0c,this[_0x5a5911(0x2ae)]['push'](_0x4b2a0c),_0x4b2a0c[_0x5a5911(0x1d8)](Window_CharaCreateTraitSets[_0x5a5911(0x3cd)]['bgType']);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x34a)]=function(){const _0xf47328=_0x42c79f;if(VisuMZ[_0xf47328(0x38a)][_0xf47328(0x3a5)][_0xf47328(0x1d9)][_0xf47328(0x1d6)])return VisuMZ[_0xf47328(0x38a)][_0xf47328(0x3a5)][_0xf47328(0x1d9)][_0xf47328(0x1d6)]['call'](this);const _0xa14db3=Math['floor'](Graphics['boxWidth']/0x2)-Math['ceil'](this['sideBuffer']()*1.5),_0x13fa36=this[_0xf47328(0x1a9)]()-this[_0xf47328(0xc1)](0x1,![])*0x3,_0x59e348=Graphics[_0xf47328(0x214)]-_0xa14db3-this[_0xf47328(0x1e1)](),_0x10043a=this[_0xf47328(0x215)]()+this[_0xf47328(0xc1)](0x1,![])*0x2;return new Rectangle(_0x59e348,_0x10043a,_0xa14db3,_0x13fa36);},Scene_CreateCharacter['prototype'][_0x42c79f(0x1ec)]=function(){const _0x58b2a4=_0x42c79f;if(!Imported[_0x58b2a4(0x254)])return;const _0x14c9e7=this['battleVoiceWindowRect'](),_0x4df25e=new Window_CharaCreateBattleVoice(_0x14c9e7);_0x4df25e[_0x58b2a4(0x237)]('accept',this[_0x58b2a4(0x159)][_0x58b2a4(0x1ac)](this)),_0x4df25e[_0x58b2a4(0x237)](_0x58b2a4(0x2a4),this[_0x58b2a4(0xbf)]['bind'](this)),_0x4df25e[_0x58b2a4(0x237)](_0x58b2a4(0x2e3),this['processPrevStep'][_0x58b2a4(0x1ac)](this)),this[_0x58b2a4(0xb4)](_0x4df25e),this[_0x58b2a4(0xf4)]=_0x4df25e,this[_0x58b2a4(0x2ae)]['push'](_0x4df25e),_0x4df25e['setBackgroundType'](Window_CharaCreateBattleVoice['SETTINGS'][_0x58b2a4(0x111)]);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x189)]=function(){const _0x242463=_0x42c79f;if(VisuMZ[_0x242463(0x38a)]['Settings'][_0x242463(0x1d9)][_0x242463(0x146)])return VisuMZ[_0x242463(0x38a)][_0x242463(0x3a5)][_0x242463(0x1d9)]['BattleVoiceWindow_RectJS'][_0x242463(0x376)](this);const _0x5853f8=Math[_0x242463(0x365)](Graphics[_0x242463(0x214)]/0x2)-Math[_0x242463(0x2b6)](this['sideBuffer']()*1.5),_0x292295=this[_0x242463(0x1a9)]()-this[_0x242463(0xc1)](0x1,![])*0x3,_0x138738=this['sideBuffer'](),_0x12a7c7=this[_0x242463(0x215)]()+this[_0x242463(0xc1)](0x1,![])*0x2;return new Rectangle(_0x138738,_0x12a7c7,_0x5853f8,_0x292295);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x1b0)]=function(){const _0x5ead2e=_0x42c79f,_0x5f21df=this['nameCurrentWindowRect'](),_0x245469=new Window_CharaCreateNameCurrent(_0x5f21df);_0x245469[_0x5ead2e(0x11b)](this['_settings'][_0x5ead2e(0x399)]||''),this[_0x5ead2e(0xb4)](_0x245469),this[_0x5ead2e(0x369)]=_0x245469,this[_0x5ead2e(0x2ae)][_0x5ead2e(0x2ff)](_0x245469),_0x245469[_0x5ead2e(0x1d8)](Window_CharaCreateNameCurrent[_0x5ead2e(0x3cd)][_0x5ead2e(0x111)]);},Scene_CreateCharacter[_0x42c79f(0x1c0)]['nameCurrentWindowRect']=function(){const _0x671491=_0x42c79f;if(VisuMZ[_0x671491(0x38a)]['Settings']['Window'][_0x671491(0x129)]){if(_0x671491(0x2eb)===_0x671491(0x2eb))return VisuMZ['CharaCreationSys'][_0x671491(0x3a5)][_0x671491(0x1d9)]['NameCurrentWindow_RectJS'][_0x671491(0x376)](this);else{if(this[_0x671491(0x2ba)]&&this[_0x671491(0x2ba)][_0x671491(0x21a)]&&_0x39bec1[_0x671491(0x381)][_0x671491(0x3a5)][_0x671491(0x1ca)][_0x671491(0x3b8)]){const _0x4a4eab=_0x31dc72[_0x671491(0x381)][_0x671491(0x3a5)][_0x671491(0x1ca)];if(this['_nameInputWindow'][_0x671491(0x3a7)]===_0x671491(0x130))return _0x4a4eab['Finish']||_0x671491(0x1b2);}return _0x5d9086[_0x671491(0x1c0)][_0x671491(0x1da)]['call'](this);}}const _0x4f6d56=Math[_0x671491(0x365)](Graphics[_0x671491(0x214)]/0x2)-Math[_0x671491(0x2b6)](this[_0x671491(0x1e1)]()*1.5),_0x11ebfd=this[_0x671491(0xc1)](0x1,![]),_0x409762=this[_0x671491(0x1e1)](),_0x29c467=this[_0x671491(0x215)]()+this[_0x671491(0xc1)](0x1,![])*0x2;return new Rectangle(_0x409762,_0x29c467,_0x4f6d56,_0x11ebfd);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x178)]=function(){const _0x156499=_0x42c79f,_0x71f826=this[_0x156499(0x244)](),_0x56e0e7=new Window_CharaCreateNameCommand(_0x71f826);_0x56e0e7[_0x156499(0x237)](_0x156499(0x33d),this['processNextStep'][_0x156499(0x1ac)](this)),_0x56e0e7[_0x156499(0x237)]('manual',this[_0x156499(0x256)][_0x156499(0x1ac)](this)),_0x56e0e7[_0x156499(0x237)]('randomName',this[_0x156499(0x20f)][_0x156499(0x1ac)](this)),_0x56e0e7[_0x156499(0x237)]('cancel',this[_0x156499(0x3ba)][_0x156499(0x1ac)](this)),this[_0x156499(0xb4)](_0x56e0e7),this[_0x156499(0xe9)]=_0x56e0e7,this[_0x156499(0x2ae)]['push'](_0x56e0e7),_0x56e0e7[_0x156499(0x1d8)](Window_CharaCreateNameCommand[_0x156499(0x3cd)][_0x156499(0x111)]);},Scene_CreateCharacter['prototype'][_0x42c79f(0x244)]=function(){const _0x33c00d=_0x42c79f;if(VisuMZ[_0x33c00d(0x38a)][_0x33c00d(0x3a5)][_0x33c00d(0x1d9)]['NameCommandWindow_RectJS']){if('xNlxi'!=='Ajmga')return VisuMZ[_0x33c00d(0x38a)][_0x33c00d(0x3a5)]['Window'][_0x33c00d(0x2f4)]['call'](this);else _0xce23e7[_0x33c00d(0x2f0)](_0x4ef831[_0x33c00d(0x394)])[_0x33c00d(0x18b)](_0x551451),_0x20d23d['push'](_0x5b3a48),_0xa914ae[_0x33c00d(0x15a)](_0x33c00d(0x3b4),_0x298f3d);}const _0x1fa393=Math[_0x33c00d(0x365)](Graphics[_0x33c00d(0x214)]/0x2)-Math[_0x33c00d(0x2b6)](this[_0x33c00d(0x1e1)]()*1.5),_0x912e6b=this[_0x33c00d(0x1a9)]()-this['calcWindowHeight'](0x1,![])*0x4,_0x54b377=this[_0x33c00d(0x1e1)](),_0x2cc041=this['mainAreaTop']()+this[_0x33c00d(0xc1)](0x1,![])*0x3;return new Rectangle(_0x54b377,_0x2cc041,_0x1fa393,_0x912e6b);},Scene_CreateCharacter[_0x42c79f(0x1c0)]['createNameEditWindow']=function(){const _0x51ac27=_0x42c79f,_0x32eca9=this[_0x51ac27(0x9d)](),_0x133ec3=new Window_CharaCreateNameEdit(_0x32eca9);_0x133ec3[_0x51ac27(0x2dd)](this['actor']()),this[_0x51ac27(0xb4)](_0x133ec3),this[_0x51ac27(0x132)]=_0x133ec3,this[_0x51ac27(0x2ae)][_0x51ac27(0x2ff)](_0x133ec3),_0x133ec3[_0x51ac27(0x1d8)](Window_CharaCreateNameEdit[_0x51ac27(0x3cd)]['bgType']);},Scene_CreateCharacter[_0x42c79f(0x1c0)]['nameEditWindowRect']=function(){const _0x3ca85a=_0x42c79f;if(VisuMZ[_0x3ca85a(0x38a)][_0x3ca85a(0x3a5)][_0x3ca85a(0x1d9)][_0x3ca85a(0xa7)]){if('AlGnw'!==_0x3ca85a(0x1fb)){if(_0x4ce006[_0x3ca85a(0x261)]())return;if(_0x3d2a52[_0x3ca85a(0x3a9)]())return;_0x49e20e['ConvertParams'](_0x430f0c,_0x22b8d5);const _0x2045b9={'actorID':_0x54f443[_0x3ca85a(0x299)]||_0x38b221[_0x3ca85a(0x1a6)](),'level':_0x2e265a[_0x3ca85a(0xff)](_0x49580b[_0x3ca85a(0x2b6)](_0x547839[_0x3ca85a(0x138)]||0x1),0x1),'name':_0x3a541b(_0x559eb6['DefaultName'])||_0x1010c8[_0x3ca85a(0x38a)][_0x3ca85a(0x3b2)](),'cancelExit':_0x3c3883['CancelExit']??!![],'showGold':_0x17ac16[_0x3ca85a(0x2b5)]??!![],'joinSwitchID':_0x5002ac['JoinSwitchID']||0x0},_0x57835b=_0x32ca2f[_0x3ca85a(0x193)]||0x0;if(_0x2045b9[_0x3ca85a(0x394)]>0x0&&!_0x28655e[_0x3ca85a(0xdb)]()['includes'](_0x3877bc['actor'](_0x2045b9[_0x3ca85a(0x394)]))){_0x1489b0[_0x3ca85a(0x2f0)](_0x2045b9[_0x3ca85a(0x394)])[_0x3ca85a(0x339)](_0x2045b9['level']),_0x2d3513['push'](_0x357ef9),_0x1d2cce[_0x3ca85a(0x15a)](_0x3ca85a(0x133),_0x2045b9);if(_0x57835b)_0x3c375c[_0x3ca85a(0x32a)](_0x57835b,![]);}else{if(_0x57835b)_0x442e00[_0x3ca85a(0x32a)](_0x57835b,!![]);}const _0x4fe5dc=_0x127b9f[_0x3ca85a(0x3be)]||0x0;if(_0x4fe5dc)_0x5d90af[_0x3ca85a(0x32a)](_0x4fe5dc,_0x2045b9[_0x3ca85a(0x394)]);_0x2045b9[_0x3ca85a(0x2a7)]&&_0x1123ef['setValue'](_0x2045b9[_0x3ca85a(0x2a7)],![]);}else return VisuMZ[_0x3ca85a(0x38a)]['Settings']['Window'][_0x3ca85a(0xa7)][_0x3ca85a(0x376)](this);}const _0x3f1ad5=0x258,_0x2b8c87=this[_0x3ca85a(0xc1)](0x1,!![]),_0x4bf972=Math['floor']((Graphics[_0x3ca85a(0x214)]-_0x3f1ad5)/0x2),_0x1728e9=this['mainAreaTop']()+Math[_0x3ca85a(0x2b6)](this['calcWindowHeight'](0x1,![])*(Graphics['boxHeight']>=0x2bc?0x2:1.5));return new Rectangle(_0x4bf972,_0x1728e9,_0x3f1ad5,_0x2b8c87);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x3af)]=function(){const _0x2ab2b6=_0x42c79f,_0x22fe61=this[_0x2ab2b6(0xa1)](),_0x575e57=new Window_CharaCreateNameInput(_0x22fe61);_0x575e57[_0x2ab2b6(0xef)](this['_nameEditWindow']),_0x575e57[_0x2ab2b6(0x237)]('ok',this['onNameInputOk']['bind'](this)),this['addWindow'](_0x575e57),this[_0x2ab2b6(0x2ba)]=_0x575e57,this[_0x2ab2b6(0x2ae)]['push'](_0x575e57),_0x575e57[_0x2ab2b6(0x1d8)](Window_CharaCreateNameInput[_0x2ab2b6(0x3cd)][_0x2ab2b6(0x111)]);},Scene_CreateCharacter['prototype'][_0x42c79f(0xa1)]=function(){const _0x383758=_0x42c79f;if(VisuMZ['CharaCreationSys']['Settings']['Window'][_0x383758(0x25e)])return VisuMZ['CharaCreationSys'][_0x383758(0x3a5)][_0x383758(0x1d9)]['NameInputWindow_RectJS'][_0x383758(0x376)](this);const _0x37255b=this[_0x383758(0x9d)](),_0x22feb1=_0x37255b[_0x383758(0x296)],_0x5698a0=this[_0x383758(0xc1)](0x9,!![]),_0x243286=Math['floor']((Graphics[_0x383758(0x214)]-_0x22feb1)/0x2),_0x6d1fe8=_0x37255b['y']+_0x37255b[_0x383758(0xaa)];return new Rectangle(_0x243286,_0x6d1fe8,_0x22feb1,_0x5698a0);},Scene_CreateCharacter['prototype'][_0x42c79f(0xfe)]=function(){const _0x321c9e=_0x42c79f,_0x11d436=this[_0x321c9e(0x9f)](),_0x4e0197=new Window_CharaCreateConfirmData(_0x11d436);this[_0x321c9e(0xb4)](_0x4e0197),this[_0x321c9e(0xcd)]=_0x4e0197,this['_stepWindows'][_0x321c9e(0x2ff)](_0x4e0197),_0x4e0197[_0x321c9e(0x1d8)](Window_CharaCreateConfirmData[_0x321c9e(0x3cd)][_0x321c9e(0x111)]);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x9f)]=function(){const _0x2aa594=_0x42c79f;if(VisuMZ['CharaCreationSys']['Settings'][_0x2aa594(0x1d9)][_0x2aa594(0x2fd)])return _0x2aa594(0x116)!==_0x2aa594(0x307)?VisuMZ[_0x2aa594(0x38a)]['Settings'][_0x2aa594(0x1d9)][_0x2aa594(0x2fd)]['call'](this):this[_0x2aa594(0x3aa)];const _0x204c6a=Math[_0x2aa594(0x365)](Graphics['boxWidth']/0x2)-Math[_0x2aa594(0x2b6)](this[_0x2aa594(0x1e1)]()*1.5),_0x16b551=this[_0x2aa594(0xc1)](0x6,![]),_0xe60bb1=this['sideBuffer'](),_0x36ab3f=this[_0x2aa594(0x215)]()+this[_0x2aa594(0xc1)](0x1,![])*0x2;return new Rectangle(_0xe60bb1,_0x36ab3f,_0x204c6a,_0x16b551);},Scene_CreateCharacter['prototype'][_0x42c79f(0x377)]=function(){const _0x4a5c6b=_0x42c79f,_0x5a8776=this[_0x4a5c6b(0x2c1)](),_0x3ca916=new Window_CharaCreateConfirmCommand(_0x5a8776);_0x3ca916['setHandler']('finalize',this[_0x4a5c6b(0x35b)]['bind'](this)),_0x3ca916[_0x4a5c6b(0x237)]('cancel',this['processPrevStep'][_0x4a5c6b(0x1ac)](this)),this[_0x4a5c6b(0xb4)](_0x3ca916),this[_0x4a5c6b(0x295)]=_0x3ca916,this[_0x4a5c6b(0x2ae)][_0x4a5c6b(0x2ff)](_0x3ca916),_0x3ca916['setBackgroundType'](Window_CharaCreateConfirmCommand[_0x4a5c6b(0x3cd)][_0x4a5c6b(0x111)]);},Scene_CreateCharacter[_0x42c79f(0x1c0)]['confirmCommandWindowRect']=function(){const _0x45262e=_0x42c79f;if(VisuMZ[_0x45262e(0x38a)][_0x45262e(0x3a5)]['Window'][_0x45262e(0x23a)]){if(_0x45262e(0x1fa)===_0x45262e(0x1fa))return VisuMZ[_0x45262e(0x38a)][_0x45262e(0x3a5)][_0x45262e(0x1d9)]['ConfirmCommandWindow_RectJS']['call'](this);else{if(!_0x4207ea[_0x45262e(0x254)])return;const _0xa7f3eb=this[_0x45262e(0x189)](),_0x9c7527=new _0x1fc51d(_0xa7f3eb);_0x9c7527['setHandler']('accept',this[_0x45262e(0x159)][_0x45262e(0x1ac)](this)),_0x9c7527[_0x45262e(0x237)]('voice',this[_0x45262e(0xbf)][_0x45262e(0x1ac)](this)),_0x9c7527[_0x45262e(0x237)]('cancel',this[_0x45262e(0x3ba)]['bind'](this)),this['addWindow'](_0x9c7527),this[_0x45262e(0xf4)]=_0x9c7527,this[_0x45262e(0x2ae)][_0x45262e(0x2ff)](_0x9c7527),_0x9c7527[_0x45262e(0x1d8)](_0x1dea3[_0x45262e(0x3cd)][_0x45262e(0x111)]);}}const _0x29f23e=this[_0x45262e(0x328)](),_0x3b41e9=Math['floor'](Graphics[_0x45262e(0x214)]/0x2)-Math[_0x45262e(0x2b6)](this[_0x45262e(0x1e1)]()*1.5),_0x19dc96=this[_0x45262e(0xc1)](0x1,!![]),_0x3e1d53=this[_0x45262e(0x1e1)](),_0xcf0091=_0x29f23e['y']+_0x29f23e[_0x45262e(0xaa)]-_0x19dc96;return new Rectangle(_0x3e1d53,_0xcf0091,_0x3b41e9,_0x19dc96);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x1c3)]=function(){const _0x419b6f=_0x42c79f,_0x1d364d=this[_0x419b6f(0x17f)];this['updateInstructionTextKey'](_0x1d364d);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x342)]=function(_0x345666){const _0x44473e=_0x42c79f,_0x509d8d=TextManager[_0x44473e(0x2aa)][_0x44473e(0x34c)][_0x345666]||'';this['_instructionWindow'][_0x44473e(0x11b)](_0x509d8d);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x186)]=function(){const _0x445dfb=_0x42c79f;if(this[_0x445dfb(0x18e)](_0x445dfb(0x247))){const _0x90755b=this[_0x445dfb(0x25b)][_0x445dfb(0x33c)](),_0x57eb9b=_0x90755b[_0x445dfb(0xd3)],_0x24e23d=_0x90755b[_0x445dfb(0xd7)];this[_0x445dfb(0x324)][_0x445dfb(0x31e)](_0x57eb9b,_0x24e23d);}this['processNextStep']();},Scene_CreateCharacter[_0x42c79f(0x1c0)]['onAppearanceMore']=function(){const _0x25f2c4=_0x42c79f;this[_0x25f2c4(0x324)][_0x25f2c4(0x373)](),this[_0x25f2c4(0x243)][_0x25f2c4(0x217)](),this[_0x25f2c4(0x243)][_0x25f2c4(0x1be)](),this[_0x25f2c4(0x243)][_0x25f2c4(0x37b)](0x0),this[_0x25f2c4(0x342)]('graphics');},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x3d6)]=function(){const _0x117146=_0x42c79f,_0x298f9f=this[_0x117146(0x243)][_0x117146(0x33c)](),_0x420ed7=_0x298f9f[_0x117146(0xd7)];this['_appearanceWindow'][_0x117146(0xd4)](_0x420ed7),this[_0x117146(0x324)][_0x117146(0x37b)](0x0),this['onGraphicSetsCancel']();},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x12a)]=function(){const _0x1c8244=_0x42c79f;this[_0x1c8244(0x324)][_0x1c8244(0x217)](),this[_0x1c8244(0x324)][_0x1c8244(0x1be)](),this[_0x1c8244(0x243)][_0x1c8244(0x373)](),this['updateInstructionText']();},Scene_CreateCharacter[_0x42c79f(0x1c0)]['onTraitTypeChange']=function(_0x52f6af){const _0x8de600=_0x42c79f;this['_traitSetsWindow'][_0x8de600(0x29d)](_0x52f6af),this[_0x8de600(0x271)][_0x8de600(0x217)](),this[_0x8de600(0x271)][_0x8de600(0x1be)](),this['_traitSetsWindow'][_0x8de600(0x3a3)](),this[_0x8de600(0x3bb)]['close']();},Scene_CreateCharacter[_0x42c79f(0x1c0)]['onTraitSetsOk']=function(){const _0x21c6af=_0x42c79f,_0x51da95=this[_0x21c6af(0x271)][_0x21c6af(0xbb)][_0x21c6af(0x24c)]()[_0x21c6af(0x223)](),_0x4b5761=this[_0x21c6af(0x271)]['commandName'](this['_traitSetsWindow'][_0x21c6af(0xf7)]());this[_0x21c6af(0x1a4)][_0x51da95]=_0x4b5761,this[_0x21c6af(0x3a4)](),this[_0x21c6af(0x3bb)][_0x21c6af(0x15b)]();},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x3a4)]=function(){const _0x2f6a07=_0x42c79f;this[_0x2f6a07(0x271)]['close'](),this[_0x2f6a07(0x24b)][_0x2f6a07(0x1be)](),this['_traitTypesWindow']['refresh'](),this[_0x2f6a07(0x3bb)]['open']();},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0xbf)]=function(){const _0x403a9e=_0x42c79f;this['_battleVoiceWindow']['setNewBattleVoice'](),this[_0x403a9e(0xf4)][_0x403a9e(0x1be)](),this[_0x403a9e(0xf4)][_0x403a9e(0x15b)]();},Scene_CreateCharacter['prototype'][_0x42c79f(0x256)]=function(){const _0x5a3a26=_0x42c79f;Input['clear']();const _0x44ea18=this[_0x5a3a26(0x369)][_0x5a3a26(0xb7)][_0x5a3a26(0x223)]();this[_0x5a3a26(0x369)][_0x5a3a26(0x373)](),this[_0x5a3a26(0xe9)][_0x5a3a26(0x373)](),this[_0x5a3a26(0x3bb)][_0x5a3a26(0x373)](),this[_0x5a3a26(0x132)][_0x5a3a26(0x1c5)](_0x44ea18),this[_0x5a3a26(0x132)]['open'](),this[_0x5a3a26(0x2ba)][_0x5a3a26(0x217)](),this[_0x5a3a26(0x2ba)]['activate']();},Scene_CreateCharacter[_0x42c79f(0x1c0)]['onNameInputCancel']=function(){const _0x10bc88=_0x42c79f;this[_0x10bc88(0x132)][_0x10bc88(0x373)](),this['_nameInputWindow']['close'](),this['_nameInputWindow'][_0x10bc88(0x2df)](),this[_0x10bc88(0x369)][_0x10bc88(0x217)](),this['_nameCommandWindow']['open'](),this[_0x10bc88(0xe9)][_0x10bc88(0x1be)](),this[_0x10bc88(0xe9)]['refresh'](),this['_graphicsPreviewWindow'][_0x10bc88(0x217)]();},Scene_CreateCharacter['prototype']['onNameInputOk']=function(){const _0x33f853=_0x42c79f;this[_0x33f853(0x369)]['setText'](this[_0x33f853(0x132)][_0x33f853(0x399)]()),this[_0x33f853(0x204)]();},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x20f)]=function(){const _0x40237f=_0x42c79f,_0x16671a=this['_nameCommandWindow']['currentExt'](),_0x3436c4=_0x16671a[_0x40237f(0xa8)];let _0x91a9ae=this[_0x40237f(0x369)]['_text'],_0x23eac5=0x14;while(_0x23eac5--){if('zWBzj'!==_0x40237f(0x39e)){_0x91a9ae=_0x3436c4[Math[_0x40237f(0x36d)](_0x3436c4[_0x40237f(0x250)])];if(this[_0x40237f(0x369)][_0x40237f(0xb7)]!==_0x91a9ae)break;}else{this[_0x40237f(0x38c)](''),this[_0x40237f(0x141)]('');return;}}this[_0x40237f(0x369)]['setText'](_0x91a9ae),this[_0x40237f(0xe9)][_0x40237f(0x1be)](),this[_0x40237f(0xe9)][_0x40237f(0x15b)]();},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x35b)]=function(){const _0x4d7a3f=_0x42c79f;this[_0x4d7a3f(0x2f9)](),this[_0x4d7a3f(0x386)](),this['finalizeDeductCosts'](),this[_0x4d7a3f(0x23f)]();},Scene_CreateCharacter['prototype'][_0x42c79f(0x2f9)]=function(){const _0x34c825=_0x42c79f;this['finalizeApplyClass'](),this['finalizeApplyAppearance'](),this['finalizeApplyTraits'](),this['finalizeApplyVoiceSet'](),this['finalizeApplyName'](),this['finalizeApplyProfile'](),this[_0x34c825(0x33f)]();},Scene_CreateCharacter[_0x42c79f(0x1c0)]['finalizeApplyClass']=function(){const _0x44e5b9=_0x42c79f;if(this[_0x44e5b9(0x2bd)]()&&!this['_settings']['retrain'][_0x44e5b9(0x364)])return;const _0x59bd4d=this[_0x44e5b9(0x25b)]['currentExt'](),_0x4d605b=_0x59bd4d[_0x44e5b9(0xd3)],_0x471289=this['isRetrainMode']()&&this[_0x44e5b9(0x3ce)][_0x44e5b9(0x3b4)]['preserveClassLevel'];this['actor']()['changeClass'](_0x4d605b,_0x471289);if(this[_0x44e5b9(0x2bd)]()){this[_0x44e5b9(0x2f0)]()[_0x44e5b9(0x2db)]();return;}this[_0x44e5b9(0x2f0)]()[_0x44e5b9(0x27a)](this[_0x44e5b9(0x3ce)][_0x44e5b9(0x14f)],![]),this[_0x44e5b9(0x2f0)]()['_skills']=[],this[_0x44e5b9(0x2f0)]()['initSkills']();},Scene_CreateCharacter['prototype'][_0x42c79f(0x235)]=function(){const _0x5d8145=_0x42c79f;if(this[_0x5d8145(0x2bd)]()&&!this['_settings']['retrain'][_0x5d8145(0x247)])return;const _0x8fde1e=this[_0x5d8145(0x324)][_0x5d8145(0x33c)]();this[_0x5d8145(0x2f0)]()[_0x5d8145(0x283)](_0x8fde1e[_0x5d8145(0x14e)]||'',_0x8fde1e[_0x5d8145(0x31f)]),this[_0x5d8145(0x2f0)]()[_0x5d8145(0x2b9)](_0x8fde1e['FaceGraphic']||'',_0x8fde1e['FaceIndex']),this[_0x5d8145(0x2f0)]()[_0x5d8145(0x203)](_0x8fde1e[_0x5d8145(0x230)]||''),Imported['VisuMZ_1_BattleCore']&&this['actor']()[_0x5d8145(0x20c)](_0x8fde1e[_0x5d8145(0xd1)]||_0x8fde1e[_0x5d8145(0x317)]||''),Imported[_0x5d8145(0x12c)]&&this['actor']()[_0x5d8145(0x18c)](_0x8fde1e[_0x5d8145(0x317)]||'');},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0xb0)]=function(){const _0x2e2798=_0x42c79f;if(!Imported[_0x2e2798(0x19a)])return;if(this[_0x2e2798(0x2bd)]()&&!this[_0x2e2798(0x3ce)]['retrain']['traits'])return;const _0x41afed=this[_0x2e2798(0x2f0)]()[_0x2e2798(0x2c9)]();for(const _0x714e85 of _0x41afed){const _0x27be59=this['_traits'][_0x714e85[_0x2e2798(0x24c)]()[_0x2e2798(0x223)]()][_0x2e2798(0x24c)]()[_0x2e2798(0x223)]();this[_0x2e2798(0x2f0)]()[_0x2e2798(0x2d2)](_0x714e85,_0x27be59);}},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x3b3)]=function(){const _0x47432d=_0x42c79f;if(!Imported[_0x47432d(0x254)])return;if(this['isRetrainMode']()&&!this[_0x47432d(0x3ce)]['retrain'][_0x47432d(0x2a4)])return;const _0x47aef9=this['_battleVoiceWindow'][_0x47432d(0x288)]||null;this[_0x47432d(0x2f0)]()[_0x47432d(0x2c6)](_0x47aef9);const _0x265bea=VisuMZ['BattleVoices'][_0x47432d(0x3a5)];this[_0x47432d(0x2f0)]()[_0x47432d(0xd9)](_0x265bea['volume']),this[_0x47432d(0x2f0)]()[_0x47432d(0x28e)](_0x265bea[_0x47432d(0xee)]),this[_0x47432d(0x2f0)]()['changeBattleVoicePan'](_0x265bea[_0x47432d(0x234)]);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x3c1)]=function(){const _0x24ea3c=_0x42c79f;if(this['isRetrainMode']()&&!this[_0x24ea3c(0x3ce)]['retrain'][_0x24ea3c(0x399)])return;const _0x1aef8d=this[_0x24ea3c(0x369)][_0x24ea3c(0xb7)]||'';this[_0x24ea3c(0x2f0)]()[_0x24ea3c(0x1c5)](_0x1aef8d);},Scene_CreateCharacter[_0x42c79f(0x1c0)]['finalizeApplyProfile']=function(){const _0x3349f8=_0x42c79f;if(this[_0x3349f8(0x2bd)]()&&!this[_0x3349f8(0x3ce)][_0x3349f8(0x3b4)]['profile'])return;const _0x1c5053=TextManager[_0x3349f8(0x2aa)][_0x3349f8(0x23d)][_0x3349f8(0x393)],_0x2d8312=_0x1c5053[_0x3349f8(0x358)](this[_0x3349f8(0x2f0)]()[_0x3349f8(0x180)]());this[_0x3349f8(0x2f0)]()['setProfile'](_0x2d8312);},Scene_CreateCharacter[_0x42c79f(0x1c0)]['finalizeApplyBiography']=function(){const _0x4ca26f=_0x42c79f;if(!Imported[_0x4ca26f(0x19a)])return;if(this[_0x4ca26f(0x2bd)]()&&!this[_0x4ca26f(0x3ce)]['retrain'][_0x4ca26f(0x23e)])return;const _0x183d70=TextManager[_0x4ca26f(0x2aa)][_0x4ca26f(0x23d)][_0x4ca26f(0x23e)];let _0x14f00a=_0x183d70[_0x4ca26f(0x358)](this[_0x4ca26f(0x2f0)]()[_0x4ca26f(0x180)](),this[_0x4ca26f(0x2f0)]()[_0x4ca26f(0x30c)]()[_0x4ca26f(0x399)]);TextManager[_0x4ca26f(0x2aa)]['character'][_0x4ca26f(0x236)]&&Imported['VisuMZ_1_MessageCore']&&(_0x14f00a=_0x4ca26f(0x2ce)+_0x14f00a),this[_0x4ca26f(0x2f0)]()['setBiography'](_0x14f00a);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x386)]=function(){const _0x16c9ef=_0x42c79f;if(this[_0x16c9ef(0x2bd)]()){this[_0x16c9ef(0x3ce)][_0x16c9ef(0xea)]>0x0&&$gameSwitches[_0x16c9ef(0x32a)](this[_0x16c9ef(0x3ce)]['retrainSwitchID'],!![]);this[_0x16c9ef(0x3ce)][_0x16c9ef(0x1f8)]&&(_0x16c9ef(0xa4)!==_0x16c9ef(0x35e)?$gameVariables['setValue'](this['_settings'][_0x16c9ef(0x1f8)],this[_0x16c9ef(0x2f0)]()[_0x16c9ef(0x180)]()):(_0x322411[_0x16c9ef(0x1c0)][_0x16c9ef(0x18a)]['call'](this,_0x2b9169),this[_0x16c9ef(0x15c)]=0x0,this[_0x16c9ef(0x2df)]()));return;}this[_0x16c9ef(0x2f0)]()[_0x16c9ef(0x15b)](),$gameParty['addActor'](this['actor']()[_0x16c9ef(0x180)]()),this[_0x16c9ef(0x2f0)]()['recoverAll'](),this['_settings']['joinSwitchID']>0x0&&$gameSwitches['setValue'](this[_0x16c9ef(0x3ce)][_0x16c9ef(0x2a7)],!![]);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x23f)]=function(){const _0x143c78=_0x42c79f;$gameTemp['_characterCreated']=!![],this[_0x143c78(0x201)](this[_0x143c78(0xc5)]()),SceneManager['goto'](Scene_Map);},Scene_CreateCharacter['prototype'][_0x42c79f(0x211)]=function(_0x34809c){const _0x4ac0a3=_0x42c79f;let _0x437f4d=0x0;return _0x437f4d+=this[_0x4ac0a3(0xe3)](),_0x437f4d+=this[_0x4ac0a3(0xc3)](),_0x437f4d;},Scene_CreateCharacter[_0x42c79f(0x1c0)]['totalGoldCostFromClass']=function(){const _0x277b0c=_0x42c79f;if(this[_0x277b0c(0x2bd)]()&&!this[_0x277b0c(0x3ce)][_0x277b0c(0x3b4)]['class'])return 0x0;let _0x3b2f8d=0x0;const _0x179cd5=this['_classListWindow']['currentExt']();if(this['isRetrainMode']()){const _0x571063=this[_0x277b0c(0x3ce)][_0x277b0c(0x20b)];if(_0x179cd5['ClassID']===_0x571063[_0x277b0c(0x30c)]()['id'])return 0x0;}return _0x3b2f8d+=_0x179cd5?_0x179cd5[_0x277b0c(0x366)]||0x0:0x0,_0x3b2f8d;},Scene_CreateCharacter[_0x42c79f(0x1c0)]['totalGoldCostFromTraits']=function(_0x336ca4){const _0x4d2794=_0x42c79f;if(!Imported['VisuMZ_1_ElementStatusCore'])return 0x0;if(!this[_0x4d2794(0x1a4)])return 0x0;if(this[_0x4d2794(0x2bd)]()&&!this[_0x4d2794(0x3ce)][_0x4d2794(0x3b4)]['traits'])return 0x0;let _0x1e0c00=0x0;const _0x16e672=this[_0x4d2794(0x2f0)]()[_0x4d2794(0x2c9)]();for(const _0x292652 of _0x16e672){if(_0x292652===_0x336ca4)continue;const _0x540f40=this[_0x4d2794(0x1a4)][_0x292652[_0x4d2794(0x24c)]()[_0x4d2794(0x223)]()];if(this[_0x4d2794(0x2bd)]()){const _0x1ea2e4=this['_settings'][_0x4d2794(0x20b)];if(_0x540f40===_0x1ea2e4[_0x4d2794(0x14b)][_0x292652]['toUpperCase']()['trim']())continue;}const _0x1c19b2=DataManager[_0x4d2794(0x14b)][_0x292652[_0x4d2794(0x24c)]()[_0x4d2794(0x223)]()][_0x540f40];_0x1c19b2&&_0x1c19b2[_0x4d2794(0x35c)]&&(_0x1e0c00+=_0x1c19b2['createCostData'][_0x4d2794(0x366)]||0x0);}return _0x1e0c00;},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x17e)]=function(){const _0x18e466=_0x42c79f,_0x5ffc0b=this[_0x18e466(0x211)]();return $gameParty[_0x18e466(0xad)]()>=_0x5ffc0b;},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x25f)]=function(){const _0x525941=_0x42c79f;this[_0x525941(0x367)](),this[_0x525941(0x122)]();},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x367)]=function(){const _0x41a677=_0x42c79f,_0x2f1eb0=this['totalGoldCost']();$gameParty[_0x41a677(0x2f8)](_0x2f1eb0);if(this[_0x41a677(0x24e)])this[_0x41a677(0x24e)][_0x41a677(0x15b)]();if(_0x2f1eb0>0x0&&Window_CharaCreateConfirmCommand[_0x41a677(0x3cd)][_0x41a677(0x1ee)]){if(_0x41a677(0xfd)==='fKhjy'){if(_0x5f3708!==this[_0x41a677(0x11d)])return;const _0x1f1a06=this[_0x41a677(0x38f)];_0x1f1a06[_0x41a677(0x318)]=_0x23f003,_0x1f1a06['x']=_0xccfaf5[_0x41a677(0x316)](this['innerWidth']*_0x1f1a06['anchor']['x']),_0x1f1a06['y']=_0xd61c29[_0x41a677(0x316)](this['innerHeight']*_0x1f1a06[_0x41a677(0x32f)]['y']);if(_0x1ec78e[_0x41a677(0x3cd)]['pictureScaleUp']){const _0x3ffae9=this[_0x41a677(0x374)]/_0x15fd60[_0x41a677(0x296)],_0x17c4f5=this[_0x41a677(0x2a3)]/_0x1d22b7[_0x41a677(0xaa)],_0xed7229=_0x5a9a13[_0x41a677(0xff)](_0x3ffae9,_0x17c4f5,0x1);_0x1f1a06[_0x41a677(0x1e6)]['x']=_0xed7229,_0x1f1a06[_0x41a677(0x1e6)]['y']=_0xed7229;}}else SoundManager[_0x41a677(0xc8)]();}},Scene_CreateCharacter['prototype'][_0x42c79f(0x136)]=function(_0x74195c){const _0x4ef87e=_0x42c79f,_0x1942e0={};return this[_0x4ef87e(0x2bf)](_0x1942e0),this[_0x4ef87e(0x1ef)](_0x1942e0,_0x74195c),_0x1942e0;},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x2bf)]=function(_0x1d39c4){const _0x4d9ff1=_0x42c79f;if(this[_0x4d9ff1(0x2bd)]()&&!this[_0x4d9ff1(0x3ce)][_0x4d9ff1(0x3b4)][_0x4d9ff1(0x364)])return;const _0x4a9268=this[_0x4d9ff1(0x25b)]['currentExt']();if(this[_0x4d9ff1(0x2bd)]()){const _0x25dda7=this['_settings'][_0x4d9ff1(0x20b)];if(_0x4a9268['ClassID']===_0x25dda7[_0x4d9ff1(0x30c)]()['id'])return;}const _0x5cbdd1=_0x4a9268[_0x4d9ff1(0x26e)];_0x5cbdd1>0x0&&(_0x1d39c4[_0x5cbdd1]=_0x4a9268[_0x4d9ff1(0x355)]);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x1ef)]=function(_0x157509,_0x3b60c6){const _0x55363e=_0x42c79f;if(!Imported['VisuMZ_1_ElementStatusCore'])return;if(!this[_0x55363e(0x1a4)])return;if(this[_0x55363e(0x2bd)]()&&!this[_0x55363e(0x3ce)][_0x55363e(0x3b4)][_0x55363e(0x2d8)])return;const _0x1bafa6=this[_0x55363e(0x2f0)]()[_0x55363e(0x2c9)]();for(const _0x118928 of _0x1bafa6){if(_0x118928===_0x3b60c6)continue;const _0x46fbb1=this[_0x55363e(0x1a4)][_0x118928[_0x55363e(0x24c)]()[_0x55363e(0x223)]()];if(this[_0x55363e(0x2bd)]()){const _0x1781bc=this[_0x55363e(0x3ce)][_0x55363e(0x20b)];if(_0x46fbb1===_0x1781bc[_0x55363e(0x14b)][_0x118928][_0x55363e(0x24c)]()[_0x55363e(0x223)]())continue;}const _0x135c71=DataManager[_0x55363e(0x14b)][_0x118928[_0x55363e(0x24c)]()[_0x55363e(0x223)]()][_0x46fbb1];_0x135c71&&_0x135c71[_0x55363e(0x35c)]&&_0x135c71['createCostData']['ItemIdCost']>0x0&&(_0x157509[_0x135c71['ItemIdCost']]=_0x157509[_0x135c71['createCostData'][_0x55363e(0x26e)]]||0x0,_0x157509[_0x135c71[_0x55363e(0x26e)]]+=_0x135c71[_0x55363e(0x35c)]['ItemCountCost']||0x0);}},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x10a)]=function(_0x392a4a){const _0x1b3119=_0x42c79f;_0x392a4a=_0x392a4a||this[_0x1b3119(0x136)]();for(const _0x6584d6 in _0x392a4a){const _0x265760=$dataItems[Number(_0x6584d6)],_0x54ea9f=_0x392a4a[_0x6584d6];if($gameParty['numItems'](_0x265760)<_0x54ea9f)return![];}return!![];},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x122)]=function(){const _0x288074=_0x42c79f,_0xabb0a7=this[_0x288074(0x136)]();for(const _0x4825de in _0xabb0a7){const _0x28bba1=$dataItems[Number(_0x4825de)],_0x16922f=_0xabb0a7[_0x4825de];$gameParty['loseItem'](_0x28bba1,_0x16922f);}},Scene_CreateCharacter[_0x42c79f(0x1c0)]['buttonAssistKey1']=function(){const _0x1fcd91=_0x42c79f;if(this[_0x1fcd91(0x2ba)]&&this[_0x1fcd91(0x2ba)][_0x1fcd91(0x21a)]&&VisuMZ['CoreEngine'][_0x1fcd91(0x3a5)]['KeyboardInput'][_0x1fcd91(0x3b8)]){if('oSAEB'===_0x1fcd91(0x281)){if(this['_nameInputWindow']['_mode']!==_0x1fcd91(0x130))return TextManager[_0x1fcd91(0x11e)](_0x1fcd91(0x179),_0x1fcd91(0x1e0));}else _0x59230c[_0x1fcd91(0x38a)][_0x1fcd91(0x149)][_0x1fcd91(0x376)](this),this['process_VisuMZ_CharaCreationSys']();}return Scene_MenuBase['prototype'][_0x1fcd91(0x29b)]['call'](this);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x2b8)]=function(){const _0x821be=_0x42c79f;if(this['_nameInputWindow']&&this[_0x821be(0x2ba)]['active']&&VisuMZ['CoreEngine']['Settings'][_0x821be(0x1ca)][_0x821be(0x3b8)])return TextManager[_0x821be(0x2a6)](_0x821be(0x396));return Scene_MenuBase['prototype']['buttonAssistKey3'][_0x821be(0x376)](this);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x286)]=function(){const _0x275e46=_0x42c79f;if(this[_0x275e46(0x2ba)]&&this[_0x275e46(0x2ba)]['active']&&VisuMZ[_0x275e46(0x381)][_0x275e46(0x3a5)][_0x275e46(0x1ca)]['EnableNameInput']){if(this[_0x275e46(0x2ba)][_0x275e46(0x3a7)]===_0x275e46(0x130))return TextManager[_0x275e46(0x27e)](['ENTER']);}return Scene_MenuBase[_0x275e46(0x1c0)][_0x275e46(0x286)][_0x275e46(0x376)](this);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x2b0)]=function(){const _0x32ec64=_0x42c79f;if(this[_0x32ec64(0x2ba)]&&this['_nameInputWindow']['active']&&VisuMZ[_0x32ec64(0x381)][_0x32ec64(0x3a5)][_0x32ec64(0x1ca)]['EnableNameInput']){if(this[_0x32ec64(0x2ba)][_0x32ec64(0x3a7)]==='keyboard')return TextManager[_0x32ec64(0x27e)](['BKSP']);}return Scene_MenuBase['prototype'][_0x32ec64(0x2b0)][_0x32ec64(0x376)](this);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x338)]=function(){const _0x4ea05f=_0x42c79f;if(this[_0x4ea05f(0x2ba)]&&this[_0x4ea05f(0x2ba)][_0x4ea05f(0x21a)]&&VisuMZ['CoreEngine']['Settings'][_0x4ea05f(0x1ca)][_0x4ea05f(0x3b8)]){if(_0x4ea05f(0x353)===_0x4ea05f(0x1f7))this[_0x4ea05f(0xfb)]=_0x41b2a9[_0x4ea05f(0x30b)][_0x4ea05f(0x3a5)]['StatusMenu'][_0x4ea05f(0x12d)];else{if(this[_0x4ea05f(0x2ba)][_0x4ea05f(0x3a7)]!==_0x4ea05f(0x130)){if(_0x4ea05f(0x3cc)==='hpCOT'){this[_0x4ea05f(0x3ce)][_0x4ea05f(0xea)]>0x0&&_0x24fd5a[_0x4ea05f(0x32a)](this[_0x4ea05f(0x3ce)]['retrainSwitchID'],!![]);this[_0x4ea05f(0x3ce)][_0x4ea05f(0x1f8)]&&_0x1e8d5d['setValue'](this['_settings'][_0x4ea05f(0x1f8)],this[_0x4ea05f(0x2f0)]()[_0x4ea05f(0x180)]());return;}else{const _0x41a002=VisuMZ[_0x4ea05f(0x381)][_0x4ea05f(0x3a5)][_0x4ea05f(0x1ca)];return _0x41a002[_0x4ea05f(0x30f)]||_0x4ea05f(0x35d);}}}}return Scene_MenuBase[_0x4ea05f(0x1c0)][_0x4ea05f(0x338)][_0x4ea05f(0x376)](this);},Scene_CreateCharacter['prototype'][_0x42c79f(0x21f)]=function(){const _0x53813d=_0x42c79f;if(this[_0x53813d(0x2ba)]&&this['_nameInputWindow']['active']&&VisuMZ['CoreEngine']['Settings'][_0x53813d(0x1ca)][_0x53813d(0x3b8)]){if('CYiFU'===_0x53813d(0x143)){const _0x57d714=VisuMZ[_0x53813d(0x381)][_0x53813d(0x3a5)][_0x53813d(0x1ca)];if(this['_nameInputWindow'][_0x53813d(0x3a7)]===_0x53813d(0x130)){if(_0x53813d(0x2cd)!=='GGsqu'){let _0x4b0b28=_0x12bec2[_0x53813d(0x2aa)][_0x53813d(0x2d8)]['accept'],_0x2f4bf9=0x0;_0x5d57ce[_0x53813d(0x3cd)]['showListIcons']&&(_0x2f4bf9=_0x10e2c3[_0x53813d(0x3cd)][_0x53813d(0x151)],_0x4b0b28=_0x53813d(0x120)['format'](_0x2f4bf9,_0x4b0b28));const _0xcab1b7=this[_0x53813d(0x19d)]();this[_0x53813d(0x110)](_0x4b0b28,_0x53813d(0x33d),_0xcab1b7);}else return _0x57d714[_0x53813d(0x28a)]||_0x53813d(0x28a);}else{if(_0x53813d(0x1f1)==='GLHVn')return _0x57d714[_0x53813d(0x2a1)]||_0x53813d(0x2a1);else _0x17ae37=_0x2baad7[_0x53813d(0xff)](_0x175134,_0x2bf8c6);}}else _0x57da9f=this[_0x53813d(0x360)]();}return Scene_MenuBase['prototype'][_0x53813d(0x21f)]['call'](this);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x1da)]=function(){const _0x559aff=_0x42c79f;if(this[_0x559aff(0x2ba)]&&this['_nameInputWindow'][_0x559aff(0x21a)]&&VisuMZ[_0x559aff(0x381)]['Settings'][_0x559aff(0x1ca)][_0x559aff(0x3b8)]){const _0x32d160=VisuMZ['CoreEngine'][_0x559aff(0x3a5)][_0x559aff(0x1ca)];if(this[_0x559aff(0x2ba)]['_mode']===_0x559aff(0x130)){if('AXqfY'!=='AXqfY'){if(!_0x1510f8){this[_0x559aff(0x38f)]['bitmap']=new _0x5a85a0(0x1,0x1);return;}if(_0x185f09['isArray'](_0x3d0f3c)){const _0x2b3847=_0x53d286['loadFace'](_0x5d5670[0x0]),_0x57b22d=_0x24650e[0x1];_0x2b3847[_0x559aff(0x32b)](this[_0x559aff(0x15e)][_0x559aff(0x1ac)](this,_0x2b3847,_0x57b22d,this['_entry']));}else{const _0x13da8a=_0x23c34c[_0x559aff(0x336)](_0x15e674);_0x13da8a[_0x559aff(0x32b)](this[_0x559aff(0x297)][_0x559aff(0x1ac)](this,_0x13da8a,this[_0x559aff(0x11d)]));}}else return _0x32d160[_0x559aff(0x1b2)]||'Finish';}}return Scene_MenuBase[_0x559aff(0x1c0)][_0x559aff(0x1da)]['call'](this);},Scene_CreateCharacter[_0x42c79f(0x1c0)]['buttonAssistText5']=function(){const _0x2e260c=_0x42c79f;if(this[_0x2e260c(0x19f)]===this['_step']){if(_0x2e260c(0x3c5)!==_0x2e260c(0x3c5))this[_0x2e260c(0x12e)](_0x9dfb48),this[_0x2e260c(0x334)](_0x23f1db);else{if(this[_0x2e260c(0x3ce)]&&this[_0x2e260c(0x3ce)][_0x2e260c(0xfc)]){if(_0x2e260c(0x337)===_0x2e260c(0x337))return TextManager['CHARA_CREATION_SYS'][_0x2e260c(0x1fc)][_0x2e260c(0x185)];else{const _0x558306=this['_actorWindow'][_0x2e260c(0x3d2)]();this[_0x2e260c(0x3ce)][_0x2e260c(0x394)]=_0x558306[_0x2e260c(0x180)](),_0x558306[_0x2e260c(0x18b)](this[_0x2e260c(0x3ce)]),_0x27d27b[_0x2e260c(0x2ff)](_0x15db5c),_0x459855[_0x2e260c(0x15a)](_0x2e260c(0x3b4),this['_settings']);}}else return'';}}return Scene_MenuBase['prototype'][_0x2e260c(0x155)]['call'](this);},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x135)]=function(){const _0x1b7dc3=_0x42c79f;Scene_MenuBase['prototype'][_0x1b7dc3(0x135)][_0x1b7dc3(0x376)](this),this[_0x1b7dc3(0x190)](this[_0x1b7dc3(0x163)]()),this[_0x1b7dc3(0x2ec)]();},Scene_CreateCharacter[_0x42c79f(0x1c0)]['getBackgroundOpacity']=function(){const _0x50f388=_0x42c79f;return VisuMZ[_0x50f388(0x38a)][_0x50f388(0x3a5)][_0x50f388(0x21b)][_0x50f388(0xf8)];},Scene_CreateCharacter[_0x42c79f(0x1c0)]['createCustomBackgroundImages']=function(){const _0x29529e=_0x42c79f,_0x1255f5=VisuMZ[_0x29529e(0x38a)][_0x29529e(0x3a5)]['BgSettings'];_0x1255f5&&(_0x1255f5[_0x29529e(0x197)]!==''||_0x1255f5[_0x29529e(0x22d)]!=='')&&(this[_0x29529e(0x3b6)]=new Sprite(ImageManager[_0x29529e(0x2d7)](_0x1255f5[_0x29529e(0x197)])),this[_0x29529e(0xf9)]=new Sprite(ImageManager[_0x29529e(0x3ae)](_0x1255f5[_0x29529e(0x22d)])),this[_0x29529e(0x20e)](this[_0x29529e(0x3b6)]),this['addChild'](this['_backSprite2']),this[_0x29529e(0x3b6)][_0x29529e(0x318)][_0x29529e(0x32b)](this[_0x29529e(0x397)][_0x29529e(0x1ac)](this,this[_0x29529e(0x3b6)])),this[_0x29529e(0xf9)][_0x29529e(0x318)][_0x29529e(0x32b)](this[_0x29529e(0x397)]['bind'](this,this[_0x29529e(0xf9)])));},Scene_CreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x397)]=function(_0x35c3e5){const _0x1ac1af=_0x42c79f;this[_0x1ac1af(0x12e)](_0x35c3e5),this['centerSprite'](_0x35c3e5);},VisuMZ[_0x42c79f(0x38a)]['Window_ChoiceList_parseChoiceText']=Window_ChoiceList[_0x42c79f(0x1c0)][_0x42c79f(0x158)],Window_ChoiceList[_0x42c79f(0x1c0)]['parseChoiceText']=function(_0x35fba7){const _0x1b4589=_0x42c79f;let _0x1e92a6=VisuMZ[_0x1b4589(0x38a)][_0x1b4589(0x2cc)][_0x1b4589(0x376)](this,_0x35fba7);const _0x51222f=VisuMZ[_0x1b4589(0x38a)][_0x1b4589(0xd0)];return _0x1e92a6=_0x1e92a6[_0x1b4589(0xe2)](_0x51222f['EnableCanCreate'],''),_0x1e92a6=_0x1e92a6[_0x1b4589(0xe2)](_0x51222f['EnableCanDismiss'],''),_0x1e92a6=_0x1e92a6[_0x1b4589(0xe2)](_0x51222f[_0x1b4589(0x210)],''),_0x1e92a6=_0x1e92a6[_0x1b4589(0xe2)](_0x51222f[_0x1b4589(0x2ab)],''),_0x1e92a6;},VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3d4)]=Window_ChoiceList[_0x42c79f(0x1c0)][_0x42c79f(0xfa)],Window_ChoiceList[_0x42c79f(0x1c0)]['isChoiceEnabled']=function(_0xd3621f){const _0x546617=_0x42c79f,_0x2c828c=VisuMZ[_0x546617(0x38a)][_0x546617(0xd0)];if(_0xd3621f[_0x546617(0xe0)](_0x2c828c[_0x546617(0x255)])){if(_0x546617(0x379)==='pyQGm')this[_0x546617(0x18a)](...arguments);else{if($gameParty[_0x546617(0x102)]()<=0x0)return![];}}if(_0xd3621f[_0x546617(0xe0)](_0x2c828c[_0x546617(0x251)])){if($gameParty['createdDismissableMembers']()[_0x546617(0x250)]<=0x0)return![];}if(_0xd3621f[_0x546617(0xe0)](_0x2c828c[_0x546617(0x210)])){if($gameParty[_0x546617(0x356)]()[_0x546617(0x250)]<=0x0)return![];}if(_0xd3621f['match'](_0x2c828c[_0x546617(0x2ab)])){if($gameParty[_0x546617(0x1bd)]()<=0x0)return![];}return VisuMZ[_0x546617(0x38a)]['Window_ChoiceList_isChoiceEnabled'][_0x546617(0x376)](this,_0xd3621f);};function _0x40a6(){const _0x2da9fe=['_graphicSetsWindow','nameCommandWindowRect','itemHeight','PreviewWindow_Draw_AutoWordWrap','appearance','command','drawEntry','isCommandEnabled','_traitTypesWindow','toUpperCase','AEZOA','_goldWindow','lGXzL','length','EnableCanDismiss','dismissSwitchID','makeCommandList','VisuMZ_3_BattleVoices','EnableCanCreate','onNameManualEntry','createNoVoiceCommand','createChildSprites','addManualEntryCommand','backgroundScaleUp','_classListWindow','qhzpS','lineHeight','NameInputWindow_RectJS','finalizeDeductCosts','Name','isSceneBattle','\x5cC[16]Cost','selectCurrentClassID','actorGroup','Visible','drawing','MgcXR','qscCx','addClassEntry','createAcceptVoiceCommand','\x5cC[16]%1','IconSet','actorWindowRect','ItemIdCost','6636390bSTVpT','canBeDismissSelected','_traitSetsWindow','untitled','mainFontSize','ClassList','SelectActorWindow_RectJS','more','findIndex','drawDarkRect','icon','changeLevel','STRUCT','addGraphicsSetEntry','nameWidthPadding','makeInputButtonString','createGraphicSetsWindow','textSizeEx','oSAEB','NameEditWindow_MaxLength','setCharacterImage','fontSize','ClassWindow_QuantityFmt','buttonAssistKey4','createGraphicsPreviewWindow','_currentVoice','otherClassesFirst','Keyboard','find','iconWidth','retrain_name','changeBattleVoicePitch','processBack','dismiss_volume','<EMPTY>','isTraitTypeEnabled','XVBqy','Select\x20character\x20traits!','_confirmCommandWindow','width','processPictureChange','createClassListWindow','ActorID','loadParallax','buttonAssistKey1','_classID','setTraitType','144982MNBKNR','prepareTraits','6tkhGUD','Manual','return\x200','innerHeight','voice','LCxmS','getInputButtonString','joinSwitchID','Options','createAppearanceWindow','CHARA_CREATION_SYS','EnableHaveCreated','currentClassTextColor','ClassIcon','_stepWindows','none','buttonAssistKey5','_tempActor','registerCommand','Manual\x20Name\x20Entry','gotoNextStep','ShowGoldWindow','ceil','jNNiL','buttonAssistKey3','setFaceImage','_nameInputWindow','CNUgo','randomName','isRetrainMode','trSYO','addTotalItemCostsFromClasses','VoiceSets','confirmCommandWindowRect','playRetrainCreatedCharacter','NameCommandWindow_BgType','initEquips','\x5cC[16]Class','changeBattleVoiceSet','BattleVoiceWindow_AcceptIcon','MVBdL','getTraitSetKeys','_parallaxSprite','PreviewWindow_Picture_AnchorY','Window_ChoiceList_parseChoiceText','GGsqu','<WordWrap>','VariableID','Mrbua','CzDtr','setTraitSet','TraitSetsWindow_CostTypeFmt','InstructionWindow_Confirm','maxLength','createTraitSetsWindow','loadTitle1','traits','oTMIp','_scene','learnAllAvailableClassSkillsByLevel','\x5cN[%1]\x20is\x20a\x20%2\x20who\x20joined\x20\x5cN[1]\x27s\x20party\x20with\x20goals\x20and\x20aspirations\x20in\x20mind.','setup','Mountains1','deactivate','_skills','ConfirmCommandWindow_ConfirmIcon','onActorRetrain','cancel','BZHYE','constructor','lineThickness','WSHER','createBattleVoiceList','Display','playSe','xwSPT','createCustomBackgroundImages','createdMembers','onActorDismiss','ELsJP','actor','ext','center','BattleVoiceWindow_TextColorID','NameCommandWindow_RectJS','SideBuffer','fillRect','itemRect','loseGold','finalizeCustomSettings','CancelExit','MUsCD','buffer','ConfirmDataWindow_RectJS','playDismissCreatedCharacter','push','setDescriptionFontSizeToTraitSet','VisuMZ_0_CoreEngine','drawGoldCost','ConfirmDataWindow_CostText','isCreatedCharacter','\x5c}%2\x5c{%1','select','rHLVc','_graphicsData','PreviewParallax','itemCostQuantityFmt','ElementStatusCore','currentClass','description','HGPkM','PageChange','Select\x20a\x20character\x20to\x20retrain\x20anew.','drawFadedItemBackground','voiceIcon','VariableSetAvailableEmptyCharacterSlots','noCostOption','_filterType','round','MenuPortrait','bitmap','_type','addAcceptTraitsCommand','TraitTypesWindow_AcceptIcon','_retrainMode','BQJcf','setAppearanceSet','CharacterIndex','helpAreaHeight','goldWindowRect','isPreviousScene','InstructionWindow_Name','_appearanceWindow','RetrainSwitchID','6QyjdPq','addOtherClassGraphics','graphicsPreviewWindowRect','openCurrentStepWindows','setValue','addLoadListener','Error!\x20Impossible\x20step!\x20%1','diKfN','mainCommandWidth','anchor','_clientArea','retrainParallax','PreviewWindow_Padding','drawTraitCost','centerSprite','-----','loadPicture','TEggl','buttonAssistText1','prepareForNewCharacter','InstructionWindow_Class','itemLineRect','currentExt','accept','drawClass','finalizeApplyBiography','defaultIcon','confirmIcon','updateInstructionTextKey','InstructionWindow_RectJS','InstructionWindow_Graphics','PreviewWindow_Picture_ScaleUp','gotoPrevStep','cancelIcon','PEiLN','canBeRetrainSelected','traitSetsWindowRect','JSON','instructions','gradientFillRect','pickOtherClassApperances','ConfirmDataWindow_BgType','cost','_name','includesClass','GjqSQ','Vocab','ItemCountCost','createdRetrainableMembers','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','format','kFZoc','Accept\x20Traits','onConfirmFinalize','createCostData','Page','dWmFW','PreviewWindow_Draw_DarkRect','itemPadding','drawTraitSetName','_helpWindow','TraitSetsWindow_DrawCost1','class','floor','GoldCost','finalizeDeductGold','currentTraitSetTextColor','_nameCurrentWindow','resetDescriptionFontSize','%2/%1','dimColor1','randomInt','DefaultName','appearances','_editWindow','FaceIndex','jgTLY','close','innerWidth','includesGraphicsSet','call','createConfirmCommandWindow','totalEmptyCreatableCharacterSlots','ivnMN','isEnabled','smoothSelect','ResetProfile','classListWindowRect','PKtjM','eOlIr','playCancel','CoreEngine','currencyUnit','createTraitTypesWindow','GoldWindow_RectJS','setFilterType','finalizeAddCharacterToParty','addGlobalGraphics','RetrainClass','No\x20Voice','CharaCreationSys','showGoldWindow','changePicture','playOk','contents','_pictureSprite','GraphicsPreviewWindow_RectJS','StatusMenu','Revise','profile','actorID','maxCols','tab','adjustSprite','Please\x20make\x20an\x20option\x20WITHOUT\x20a\x20Required\x20Switch,\x20Gold\x20Cost,\x20and\x20Item\x20Cost\x20Type!','name','ClassWindow_TextColorID','TraitTypesWindow_RectJS','TPwNN','faceHeight','AKVot','GraphicSetsWindow_ClassNameFmt','isTraitSetIncluded','EnableTraitsStep','addAcceptNameCommand','selectLast','onTraitSetsCancel','Settings','FaceGraphic','_mode','BattleVoiceWindow_BgType','inBattle','_createdCharacter','itemTextAlign','YFBdI','addRandomNamePools','loadTitle2','createNameInputWindow','7177595ZEelFl','ARRAYEVAL','GetRandomName','finalizeApplyVoiceSet','retrain','onRetrainStart','_backSprite1','selectCurrentAppearance','EnableNameInput','Scene_Map_needsFadeIn','processPrevStep','_graphicsPreviewWindow','uXrRM','Xqkys','RegisterVarID','HasAnyMatchingGraphics','TraitSetsWindow_Thickness','finalizeApplyName','AppearanceWindow_MoreIcon','dismiss','version','zNbsx','RetrainVoice','changeBattleVoicePan','eCcMM','drawText','createInstructionWindow','SwitchReq','lQbRV','SETTINGS','_settings','setNewBattleVoice','ClassWindow_CostTypeFmt','autoWordwrap','targetActor','parse','Window_ChoiceList_isChoiceEnabled','dismiss_pitch','onGraphicSetsOk','PreviewWindow_Background_AnchorY','nameEditWindowRect','SelectCharaWindow_BgType','confirmDataWindowRect','fontSizeRatio','nameInputWindowRect','drawTextEx','pictureAnchorX','AfNRC','AppearanceWindow_MoreCommand','pictureAnchorY','NameEditWindow_RectJS','NameSets','getPreparedTrait','height','loadSystem','_level','gold','drawName','retrain_pitch','finalizeApplyTraits','toLowerCase','naming','FUNC','addWindow','updatePadding','ljTcX','_text','onTraitTypeChange','4KpZjYF','classSetNameFmt','_traitType','faceWidth','Changeable','charWidth','onBattleVoiceOk','create_pan','calcWindowHeight','PreviewPicture','totalGoldCostFromTraits','StatusMenu_Biography_AutoWordWrap','slowFadeSpeed','process_VisuMZ_CharaCreationSys_Traits','TraitTypesWindow_BgType','playShop','BFCAr','ONyEA','YXAxV','StatusMenu_Biography','_confirmDataWindow','includes','createActorWindow','RegExp','BattlePortrait','PreviewWindow_BgType','ClassID','setGraphicsData','Description','TraitSetsWindow_QuantityFmt','Graphics','PreviewWindow_Draw_GoldCost','changeBattleVoiceVolume','KdwPV','members','Select\x20a\x20voice!','yiwuD','traitTypesWindowRect','3712809topiXi','match','dAmLS','replace','totalGoldCostFromClass','118448pIvfmE','isNamePoolIncluded','Confirm\x20character\x20details!','setEntryData','status','_nameCommandWindow','retrainSwitchID','checkRetrainGlobalAppearanceSet','windowPadding','drawChar','pitch','setEditWindow','StatusMenu_Profile','updateHelp','prepare','drawCurrencyValue','_battleVoiceWindow','NUM','back','index','SnapshotOpacity','_backSprite2','isChoiceEnabled','_resetFontSize','cancelExit','EFGPX','createConfirmDataWindow','max','72UuVDsZ','ConvertParams','availableEmptyCreatableCharacterSlots','iconIndex','right','JoinSwitchID','checkRetrainClassAppearanceSet','_actorId','clear','changePaintOpacity','meetsTotalItemCosts','fFMUl','GoldWindow_BgType','Sound','uREtG','setupRetrain','addCommand','bgType','loadFace','maxItems','rqIKB','ypuWW','myPrI','filter','Traits','isTraitTypeIncluded','graphic','setText','ConfirmCommandWindow_BgType','_entry','getInputMultiButtonStrings','puFrv','\x5cI[%1]%2','eLvoa','finalizeDeductItems','Default','RetrainName','IQyez','CreateVisualGoldText','createGoldWindow','zadAo','NameCurrentWindow_RectJS','onGraphicSetsCancel','apZQt','VisuMZ_1_MainMenuCore','TraitDescriptionFontSize','scaleSprite','drawCost','keyboard','sWjRh','_nameEditWindow','create','padding','createBackground','totalItemCosts','InstructionWindow_Voices','ActorLevel','bikla','dismiss_pan','backgroundAnchorY','pDdBf','RugNT','_battlePortrait','iconHeight','DisplayIcon','changeParallax','isArray','CYiFU','dimColor2','addGraphicEntry','BattleVoiceWindow_RectJS','processParallaxChange','playCreateCharacter','Scene_Boot_onDatabaseLoaded','itemCostTypeFmt','_traitSets','createdDismissableMembers','graphicSetsWindowRect','CharacterGraphic','level','Gold','acceptIcon','VariableSetCreatedCharacterCount','processDrawIcon','volume','buttonAssistText5','IMGgX','itemDrawCost1','parseChoiceText','processNextStep','prepareNextScene','refresh','openness','zsFwe','processFaceChange','clearBattleVoice','_list','steps','needsFadeIn','getBackgroundOpacity','AppearanceWindow_RectJS','Confirm','DQlhD','clearEquipments','processOk','setTopRow','showListIcons','onAppearanceMore','ITEwB','playOkSound','resetFontSettings','_defaultName','mHUgI','retrain_pan','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Label','setInitialStep','PreviewWindow_CostText','manual','RetrainAppearance','createNameCommandWindow','pageup','YyXlg','isEntryValid','NameCommandWindow_AcceptIcon','GraphicSetsWindow_OtherClasses','meetsTotalGoldCosts','_stepName','actorId','appearanceWindowRect','updateImages','pictureScaleUp','CannotSelectRetrain','exit','onClassOk','backgroundAnchorX','aYOSw','battleVoiceWindowRect','initialize','prepareForRetraining','setMenuImage','traitFmt','isValidStep','VisuMZ_2_CharaCreationSys\x20is\x20using\x20a\x20non-existent\x20trait\x20set\x20for\x20%1\x20trait\x20type\x27s\x20\x22Default\x22\x20parameter.\x0a','setBackgroundOpacity','Enter\x20character\x20name!','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','FailSwitchID','SceneOpenCharaRetrainScene','CharaCreatePreview','nAuzH','BgFilename1','_characterCreated','Accept\x20Name','VisuMZ_1_ElementStatusCore','PreviewWindow_Picture_AnchorX','manualIcon','isAcceptTraitsEnabled','oHGhZ','_firstStep','tLJpl','KXrik','ARRAYFUNC','38104891vkScIT','_traits','value','findFirstAvailableCharacterCreationActorID','HQgHA','BattleVoices','mainAreaHeight','ConfirmDataWindow_NameText','\x5cC[%1]%2','bind','_index','popScene','canPickMoreAppearances','createNameCurrentWindow','drawActorFace','Finish','InstructionWindow_Appearance','ARRAYSTRUCT','_equips','InstructionWindow_Retrain','drawIcon','VisuMZ_2_CharaCreationSys\x20is\x20lacking\x20a\x20trait\x20option\x20for\x20%1\x20trait\x20type\x20that\x20lacks\x20cost\x20options.\x0a','YbRIY','More...','SRHiT','parameters','totalCreatedCharacters','activate','%1\x20Set','prototype','note','ColorSystem','updateInstructionText','pickMoreAppearances','setName','map','DisplayText','skillId','numItems','KeyboardInput','drawTraitDescription','HhtBQ','resetTextColor','addTraitTypeCommands','create_pitch','VisualGoldDisplay','NameInputWindow_BgType','ClassListWindow_RectJS','TTqUN','onDatabaseLoaded','characterName','TraitSetsWindow_RectJS','retrain_volume','setBackgroundType','Window','buttonAssistText4','gKGKZ','drsOU','finalize','GraphicSets','qMomc','pagedown','sideBuffer','closeAllWindows','learnSkill','traitsStep','ConfirmCommandWindow_ConfirmText','scale','XCpsO','PRzfL','_instructionWindow','VariableSetTotalEmptyCharacterSlots','commandName','createBattleVoiceWindow','addInnerChild','playShopSound','addTotalItemCostsFromTraits','YQtSt','GLHVn','ERROR!\x20ERROR!\x20ERROR!\x20\x0a\x0a','makeTraitTypeExt','KeTUL','drawItem','create_name','DYHqt','registerVarID','drawItemCost','WOHkO','AlGnw','buttonAssist','currentSymbol','faceName','Select\x20a\x20character\x20to\x20dismiss\x20from\x20the\x20party.','AgIhz','startFadeOut','voiceStep','setBattlerImage','onNameInputCancel','characterIndex','1878023ZgJpGE','addMoreCommand','Exit','PreviewWindow_Background_ScaleUp','traitIcon','tempActor','setBattlePortrait','confirm','addChild','onNameRandom','EnableCanRetrain','totalGoldCost','_retrainSettings','GraphicSetsWindow_BgType','boxWidth','mainAreaTop','ARRAYNUM','open','Randomize','faceIndex','active','BgSettings','TraitTypesWindow_TypeFmt','addNamePoolCommand','CharaCreateSelect','buttonAssistText3','battlerName','BattleVoiceWindow_VoiceCommandIcon','Select\x20an\x20appearance!','trim','tUriR','commandSymbol','createBattleVoiceEntry','isTraitSetEnabled','setHelpWindow','_actorWindow','NameCurrentWindow_BgType','PreviewWindow_Background_AnchorX','EVAL','BgFilename2','visualGoldDisplayPadding','GRSky','SvBattler','iPlTt','\x5cI[%1]','_menuImage','pan','finalizeApplyAppearance','bioWordWrap','setHandler','instructionWindowRect','addConfirmCommand','ConfirmCommandWindow_RectJS','IPilg','_step','character','bio','finalizeExitScene','Please\x20change\x20this\x20value\x20with\x20a\x20trait\x20set\x20that\x20exists.','start','removeActor'];_0x40a6=function(){return _0x2da9fe;};return _0x40a6();}function Window_CharaCreateInstruction(){const _0x292eda=_0x42c79f;this[_0x292eda(0x18a)](...arguments);}Window_CharaCreateInstruction['prototype']=Object['create'](Window_Base[_0x42c79f(0x1c0)]),Window_CharaCreateInstruction[_0x42c79f(0x1c0)][_0x42c79f(0x2e5)]=Window_CharaCreateInstruction,Window_CharaCreateInstruction['SETTINGS']={'bgType':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)]['InstructionWindow_BgType']??0x0,'align':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)]['InstructionWindow_TextAlign']??_0x42c79f(0x2f2)},Window_CharaCreateInstruction[_0x42c79f(0x1c0)]['initialize']=function(_0x32a09f){const _0x57bbca=_0x42c79f;Window_Base['prototype'][_0x57bbca(0x18a)][_0x57bbca(0x376)](this,_0x32a09f),this[_0x57bbca(0xb7)]='';},Window_CharaCreateInstruction[_0x42c79f(0x1c0)]['isAutoColorAffected']=function(){return![];},Window_CharaCreateInstruction[_0x42c79f(0x1c0)][_0x42c79f(0x11b)]=function(_0x583aa2){const _0x450a03=_0x42c79f;this['_text']!==_0x583aa2&&(this[_0x450a03(0xb7)]=_0x583aa2,this['refresh']());},Window_CharaCreateInstruction[_0x42c79f(0x1c0)][_0x42c79f(0x108)]=function(){const _0x1db809=_0x42c79f;this[_0x1db809(0x11b)]('');},Window_CharaCreateInstruction[_0x42c79f(0x1c0)]['refresh']=function(){const _0x4ac557=_0x42c79f;this[_0x4ac557(0x38e)][_0x4ac557(0x108)]();const _0x5c006b=this[_0x4ac557(0x280)](this['_text']),_0x4a4b3e=_0x5c006b['width'],_0x3ceb7b=this[_0x4ac557(0x3ab)]();let _0x3843ec=0x0;if(_0x3ceb7b===_0x4ac557(0x2f2))_0x3843ec=Math[_0x4ac557(0x365)]((this['innerWidth']-_0x4a4b3e)/0x2);else _0x3ceb7b===_0x4ac557(0x104)?_0x3843ec=Math[_0x4ac557(0x365)](this[_0x4ac557(0x374)]-_0x4a4b3e-this[_0x4ac557(0x360)]()):_0x3843ec=this[_0x4ac557(0x360)]();this[_0x4ac557(0xa2)](this[_0x4ac557(0xb7)],_0x3843ec,0x0,_0x4a4b3e);},Window_CharaCreateInstruction[_0x42c79f(0x1c0)][_0x42c79f(0x3ab)]=function(){const _0x16bf4c=_0x42c79f;return Window_CharaCreateInstruction[_0x16bf4c(0x3cd)]['align'];};function Window_CharaCreateGold(){const _0x46ef00=_0x42c79f;this[_0x46ef00(0x18a)](...arguments);}Window_CharaCreateGold['prototype']=Object[_0x42c79f(0x133)](Window_Gold[_0x42c79f(0x1c0)]),Window_CharaCreateGold[_0x42c79f(0x1c0)][_0x42c79f(0x2e5)]=Window_CharaCreateGold,Window_CharaCreateGold['SETTINGS']={'bgType':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x10c)]??0x0},Window_CharaCreateGold['prototype'][_0x42c79f(0x18a)]=function(_0xa0fe89){const _0x2c297c=_0x42c79f;Window_Gold[_0x2c297c(0x1c0)][_0x2c297c(0x18a)]['call'](this,_0xa0fe89);},Window_CharaCreateGold[_0x42c79f(0x1c0)][_0x42c79f(0x245)]=function(){const _0x43a644=_0x42c79f;return this[_0x43a644(0x25d)]();};function Window_CharaCreateGraphicsPreview(){const _0xd451b8=_0x42c79f;this[_0xd451b8(0x18a)](...arguments);}Window_CharaCreateGraphicsPreview['prototype']=Object['create'](Window_Base['prototype']),Window_CharaCreateGraphicsPreview[_0x42c79f(0x1c0)]['constructor']=Window_CharaCreateGraphicsPreview,Window_CharaCreateGraphicsPreview[_0x42c79f(0x3cd)]={'bgType':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0xd2)]??0x0,'padding':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)]['Window'][_0x42c79f(0x332)]??0x4,'pictureAnchorX':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x19b)]??0.5,'pictureAnchorY':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x2cb)]??0x0,'pictureScaleUp':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x345)]??!![],'backgroundAnchorX':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x22b)]??0.5,'backgroundAnchorY':VisuMZ[_0x42c79f(0x38a)]['Settings'][_0x42c79f(0x1d9)][_0x42c79f(0x3d7)]??0x1,'backgroundScaleUp':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Window'][_0x42c79f(0x209)]??!![],'retrainParallax':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Window']['PreviewWindow_Background_RetrainBg']??_0x42c79f(0x2de),'autoWordwrap':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x246)]??!![],'drawDarkRect':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Window'][_0x42c79f(0x35f)]??!![],'drawGoldCost':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0xd8)]??!![]},Window_CharaCreateGraphicsPreview[_0x42c79f(0x1c0)][_0x42c79f(0x18a)]=function(_0x185e1c){const _0x5a4e90=_0x42c79f;Window_Base['prototype']['initialize'][_0x5a4e90(0x376)](this,_0x185e1c),this[_0x5a4e90(0x258)](),this[_0x5a4e90(0x15c)]=0x0;},Window_CharaCreateGraphicsPreview[_0x42c79f(0x1c0)][_0x42c79f(0xb5)]=function(){const _0x24f27a=_0x42c79f;this[_0x24f27a(0x134)]=Window_CharaCreateGraphicsPreview[_0x24f27a(0x3cd)][_0x24f27a(0x134)];},Window_CharaCreateGraphicsPreview['prototype']['createChildSprites']=function(){const _0x26c8f8=_0x42c79f,_0x3d489e=Window_CharaCreateGraphicsPreview[_0x26c8f8(0x3cd)];this[_0x26c8f8(0x38f)]=new Sprite(),this[_0x26c8f8(0x38f)][_0x26c8f8(0x32f)]['x']=_0x3d489e[_0x26c8f8(0xa3)],this[_0x26c8f8(0x38f)][_0x26c8f8(0x32f)]['y']=_0x3d489e[_0x26c8f8(0xa6)],this[_0x26c8f8(0x1ed)](this[_0x26c8f8(0x38f)]),this[_0x26c8f8(0x330)]['addChildAt'](this[_0x26c8f8(0x38f)],0x0),this[_0x26c8f8(0x2ca)]=new Sprite(),this[_0x26c8f8(0x2ca)][_0x26c8f8(0x32f)]['x']=_0x3d489e[_0x26c8f8(0x187)],this[_0x26c8f8(0x2ca)]['anchor']['y']=_0x3d489e[_0x26c8f8(0x13b)],this[_0x26c8f8(0x1ed)](this[_0x26c8f8(0x2ca)]),this[_0x26c8f8(0x330)]['addChildAt'](this[_0x26c8f8(0x2ca)],0x0);},Window_CharaCreateGraphicsPreview['prototype']['setEntryData']=function(_0x3c40a6){const _0x5c56ae=_0x42c79f;this[_0x5c56ae(0x11d)]=_0x3c40a6,this[_0x5c56ae(0x15b)](),this['updateImages']();},Window_CharaCreateGraphicsPreview[_0x42c79f(0x1c0)][_0x42c79f(0x3d1)]=function(){const _0x5c9503=_0x42c79f;if(!Imported['VisuMZ_1_MessageCore'])return;return Window_CharaCreateGraphicsPreview['SETTINGS'][_0x5c9503(0x3d1)];},Window_CharaCreateGraphicsPreview['prototype'][_0x42c79f(0x10f)]=function(_0x3ef3e3){const _0x3a7277=_0x42c79f,_0x558237=_0x3ef3e3[_0x3a7277(0x20b)],_0x289535={'PreviewPicture':[_0x558237['faceName'](),_0x558237[_0x3a7277(0x219)]()],'PreviewParallax':Window_CharaCreateGraphicsPreview['SETTINGS'][_0x3a7277(0x331)]};if(_0x558237['_menuImage'])_0x289535[_0x3a7277(0xc2)]=_0x558237[_0x3a7277(0x233)];else _0x558237[_0x3a7277(0x13e)]&&(_0x289535[_0x3a7277(0xc2)]=_0x558237[_0x3a7277(0x13e)]);this[_0x3a7277(0xe7)](_0x289535);},Window_CharaCreateGraphicsPreview['prototype'][_0x42c79f(0x15b)]=function(){const _0x17b2d9=_0x42c79f;this[_0x17b2d9(0x38e)]['clear'](),this[_0x17b2d9(0x302)]();let _0xb9c985=this['_entry'][_0x17b2d9(0xd5)]||'';if(!_0xb9c985)return;if(this[_0x17b2d9(0x3d1)]())_0xb9c985=_0x17b2d9(0x2ce)+_0xb9c985;this[_0x17b2d9(0x134)]=$gameSystem['windowPadding']();const _0x4391ae=this['textSizeEx'](_0xb9c985);this[_0x17b2d9(0xb5)]();const _0x3f53ec=_0x4391ae[_0x17b2d9(0xaa)],_0x8dd88a=Math['max'](0x0,$gameSystem[_0x17b2d9(0xec)]()-this['padding']),_0x20c3e4=this[_0x17b2d9(0x2a3)]-_0x3f53ec;if(Window_CharaCreateGraphicsPreview[_0x17b2d9(0x3cd)][_0x17b2d9(0x278)]){const _0x30bda7=ColorManager['dimColor1']();this[_0x17b2d9(0x38e)][_0x17b2d9(0x2f6)](0x0,_0x20c3e4,this[_0x17b2d9(0x374)],_0x3f53ec,_0x30bda7);}this[_0x17b2d9(0xa2)](_0xb9c985,_0x8dd88a,_0x20c3e4);},Window_CharaCreateGraphicsPreview[_0x42c79f(0x1c0)][_0x42c79f(0x302)]=function(){const _0x161363=_0x42c79f,_0x34d72a=SceneManager[_0x161363(0x2da)][_0x161363(0x211)]();if(_0x34d72a<=0x0)return;if(!Window_CharaCreateGraphicsPreview[_0x161363(0x3cd)][_0x161363(0x302)])return;if(Window_CharaCreateGraphicsPreview[_0x161363(0x3cd)]['drawDarkRect']){const _0x1a8712=ColorManager[_0x161363(0x36c)]();this[_0x161363(0x38e)][_0x161363(0x2f6)](0x0,0x0,this[_0x161363(0x374)],this[_0x161363(0x25d)](),_0x1a8712);}const _0x4e8b75=TextManager[_0x161363(0x2aa)]['preview'][_0x161363(0x350)],_0x256ed6=this['itemPadding']()*0x2;this[_0x161363(0xa2)](_0x4e8b75,_0x256ed6,0x0),this[_0x161363(0xf3)](_0x34d72a,TextManager['currencyUnit'],0x0,0x0,this[_0x161363(0x374)]-_0x256ed6);},Window_CharaCreateGraphicsPreview[_0x42c79f(0x1c0)][_0x42c79f(0x22e)]=function(){return!![];},Window_CharaCreateGraphicsPreview['prototype'][_0x42c79f(0x182)]=function(){const _0x3075d4=_0x42c79f;if(this[_0x3075d4(0x11d)]){if('bBJUZ'===_0x3075d4(0x2d1)){let _0x5a788e=_0x3075d4(0x1f2);_0x5a788e+=_0x3075d4(0x18f)[_0x3075d4(0x358)](_0x3f8f8d),_0x5a788e+=_0x3075d4(0x240),_0xfbdd94(_0x5a788e),_0x28a23e[_0x3075d4(0x185)]();}else this['changePicture'](this[_0x3075d4(0x11d)]['PreviewPicture']||''),this[_0x3075d4(0x141)](this[_0x3075d4(0x11d)][_0x3075d4(0x309)]||'');}else{this['changePicture'](''),this[_0x3075d4(0x141)]('');return;}},Window_CharaCreateGraphicsPreview[_0x42c79f(0x1c0)]['changePicture']=function(_0x279001){const _0x502876=_0x42c79f;if(!_0x279001){if(_0x502876(0x2d0)===_0x502876(0x17a))return 0x0;else{this[_0x502876(0x38f)][_0x502876(0x318)]=new Bitmap(0x1,0x1);return;}}if(Array[_0x502876(0x142)](_0x279001)){const _0x24723e=ImageManager[_0x502876(0x112)](_0x279001[0x0]),_0x2de54d=_0x279001[0x1];_0x24723e['addLoadListener'](this['processFaceChange'][_0x502876(0x1ac)](this,_0x24723e,_0x2de54d,this[_0x502876(0x11d)]));}else{const _0x58c938=ImageManager[_0x502876(0x336)](_0x279001);_0x58c938[_0x502876(0x32b)](this[_0x502876(0x297)]['bind'](this,_0x58c938,this[_0x502876(0x11d)]));}},Window_CharaCreateGraphicsPreview[_0x42c79f(0x1c0)][_0x42c79f(0x141)]=function(_0x37018e){const _0x425d34=_0x42c79f;if(!_0x37018e){this[_0x425d34(0x2ca)][_0x425d34(0x318)]=new Bitmap(0x1,0x1);return;}const _0x34d173=ImageManager[_0x425d34(0x29a)](_0x37018e);_0x34d173['addLoadListener'](this[_0x425d34(0x147)][_0x425d34(0x1ac)](this,_0x34d173,this['_entry']));},Window_CharaCreateGraphicsPreview[_0x42c79f(0x1c0)]['processFaceChange']=function(_0xe4865d,_0x45f85a,_0xf549d9){const _0x5f55f0=_0x42c79f;if(_0xf549d9!==this[_0x5f55f0(0x11d)])return;const _0x5d2c9e=this[_0x5f55f0(0x38f)];_0x5d2c9e[_0x5f55f0(0x318)]=new Bitmap(ImageManager[_0x5f55f0(0xbc)],ImageManager[_0x5f55f0(0x39d)]);const _0x50fb97=ImageManager[_0x5f55f0(0xbc)],_0x40b3e4=ImageManager[_0x5f55f0(0x39d)],_0x439d7e=Math['floor'](_0x45f85a%0x4*ImageManager['faceWidth']),_0x556db9=Math[_0x5f55f0(0x365)](Math[_0x5f55f0(0x365)](_0x45f85a/0x4)*ImageManager[_0x5f55f0(0x39d)]);_0x5d2c9e[_0x5f55f0(0x318)]['blt'](_0xe4865d,_0x439d7e,_0x556db9,_0x50fb97,_0x40b3e4,0x0,0x0),_0x5d2c9e['x']=Math[_0x5f55f0(0x316)](this['innerWidth']*_0x5d2c9e[_0x5f55f0(0x32f)]['x']),_0x5d2c9e['y']=Math[_0x5f55f0(0x316)](this['innerHeight']*_0x5d2c9e[_0x5f55f0(0x32f)]['y']);if(Window_CharaCreateGraphicsPreview[_0x5f55f0(0x3cd)][_0x5f55f0(0x183)]){const _0x256fb1=this[_0x5f55f0(0x374)]/_0x5d2c9e['bitmap']['width'],_0x1bce41=this[_0x5f55f0(0x2a3)]/_0x5d2c9e[_0x5f55f0(0x318)]['height'],_0x47d7e0=Math[_0x5f55f0(0xff)](_0x256fb1,_0x1bce41,0x1);_0x5d2c9e[_0x5f55f0(0x1e6)]['x']=_0x47d7e0,_0x5d2c9e[_0x5f55f0(0x1e6)]['y']=_0x47d7e0;}},Window_CharaCreateGraphicsPreview[_0x42c79f(0x1c0)]['processPictureChange']=function(_0x3d9263,_0x4dfc6c){const _0x56b202=_0x42c79f;if(_0x4dfc6c!==this[_0x56b202(0x11d)])return;const _0x5db01f=this[_0x56b202(0x38f)];_0x5db01f['bitmap']=_0x3d9263,_0x5db01f['x']=Math[_0x56b202(0x316)](this[_0x56b202(0x374)]*_0x5db01f[_0x56b202(0x32f)]['x']),_0x5db01f['y']=Math[_0x56b202(0x316)](this[_0x56b202(0x2a3)]*_0x5db01f['anchor']['y']);if(Window_CharaCreateGraphicsPreview['SETTINGS'][_0x56b202(0x183)]){if(_0x56b202(0x1d3)!=='TTqUN')_0x4dc4be['prototype'][_0x56b202(0x16e)][_0x56b202(0x376)](this),this[_0x56b202(0x38e)]['fontSize']=this[_0x56b202(0xfb)];else{const _0x2cd872=this[_0x56b202(0x374)]/_0x3d9263[_0x56b202(0x296)],_0x356309=this[_0x56b202(0x2a3)]/_0x3d9263[_0x56b202(0xaa)],_0x56deeb=Math[_0x56b202(0xff)](_0x2cd872,_0x356309,0x1);_0x5db01f[_0x56b202(0x1e6)]['x']=_0x56deeb,_0x5db01f[_0x56b202(0x1e6)]['y']=_0x56deeb;}}},Window_CharaCreateGraphicsPreview[_0x42c79f(0x1c0)][_0x42c79f(0x147)]=function(_0x410a9c,_0x38c0af){const _0x4a30a3=_0x42c79f;if(_0x38c0af!==this[_0x4a30a3(0x11d)])return;const _0x590d76=this[_0x4a30a3(0x2ca)];_0x590d76[_0x4a30a3(0x318)]=_0x410a9c,_0x590d76['x']=Math[_0x4a30a3(0x316)](this[_0x4a30a3(0x374)]*_0x590d76[_0x4a30a3(0x32f)]['x']),_0x590d76['y']=Math['round'](this[_0x4a30a3(0x2a3)]*_0x590d76[_0x4a30a3(0x32f)]['y']);if(Window_CharaCreateGraphicsPreview[_0x4a30a3(0x3cd)][_0x4a30a3(0x25a)]){if(_0x4a30a3(0x3ac)==='lCzMG')this['changePicture'](this[_0x4a30a3(0x11d)][_0x4a30a3(0xc2)]||''),this['changeParallax'](this['_entry']['PreviewParallax']||'');else{const _0x1dd8bd=this['innerWidth']/_0x410a9c['width'],_0x54e663=this[_0x4a30a3(0x2a3)]/_0x410a9c[_0x4a30a3(0xaa)],_0x4822ea=Math[_0x4a30a3(0xff)](_0x1dd8bd,_0x54e663,0x1);_0x590d76[_0x4a30a3(0x1e6)]['x']=_0x4822ea,_0x590d76['scale']['y']=_0x4822ea;}}};function Window_CharaCreateClassList(){this['initialize'](...arguments);}Window_CharaCreateClassList[_0x42c79f(0x1c0)]=Object[_0x42c79f(0x133)](Window_Command[_0x42c79f(0x1c0)]),Window_CharaCreateClassList[_0x42c79f(0x1c0)][_0x42c79f(0x2e5)]=Window_CharaCreateClassList,Window_CharaCreateClassList[_0x42c79f(0x3cd)]={'bgType':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)]['ClassWindow_BgType']??0x0,'defaultIcon':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)]['ClassWindow_BgType']??0x60,'currentClassTextColor':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x39a)]??0x11,'itemCostTypeFmt':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x3d0)]??_0x42c79f(0x305),'itemCostQuantityFmt':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x285)]??_0x42c79f(0x36b),'itemDrawCost1':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Window']['ClassWindow_DrawCost1']??![]},Window_CharaCreateClassList['prototype'][_0x42c79f(0x18a)]=function(_0x27e9cc){const _0x46aa45=_0x42c79f;Window_Command['prototype'][_0x46aa45(0x18a)][_0x46aa45(0x376)](this,_0x27e9cc),this[_0x46aa45(0x15c)]=0x0,this[_0x46aa45(0x2df)]();},Window_CharaCreateClassList[_0x42c79f(0x1c0)][_0x42c79f(0x253)]=function(){const _0x42d9c6=_0x42c79f,_0x453caf=VisuMZ[_0x42d9c6(0x38a)][_0x42d9c6(0x3a5)][_0x42d9c6(0x274)];for(const _0x1420dc of _0x453caf){if(_0x42d9c6(0x231)!==_0x42d9c6(0x231)){const _0x73de99=this[_0x42d9c6(0x2f7)](_0x1dbccc);this[_0x42d9c6(0x1cd)](),this[_0x42d9c6(0x3c9)](this[_0x42d9c6(0x351)][_0x20f563]||'',_0x73de99['x'],_0x73de99['y'],_0x73de99[_0x42d9c6(0x296)],_0x42d9c6(0x2f2));}else{if(!this[_0x42d9c6(0xce)](_0x1420dc))continue;this['addClassEntry'](_0x1420dc);}}},Window_CharaCreateClassList['prototype'][_0x42c79f(0xce)]=function(_0x11dc34){const _0x30b1b7=_0x42c79f;if(!_0x11dc34)return![];const _0xd232e2=_0x11dc34[_0x30b1b7(0xd3)]||0x0;if(!$dataClasses[_0xd232e2])return![];const _0x21203e=$dataClasses[_0xd232e2];if(_0x21203e[_0x30b1b7(0x399)][_0x30b1b7(0x223)]()==='')return![];if(_0x21203e['name'][_0x30b1b7(0xce)](_0x30b1b7(0x335)))return![];if(_0x11dc34['SwitchReq']>0x0){if('mHUgI'!==_0x30b1b7(0x170)){if(!_0x3e0d6e['_scene'][_0x30b1b7(0x17e)]())return![];if(!_0x6b9802[_0x30b1b7(0x2da)]['meetsTotalItemCosts']())return![];return!![];}else{if(!$gameSwitches[_0x30b1b7(0x1a5)](_0x11dc34[_0x30b1b7(0x3cb)]))return![];}}return!![];},Window_CharaCreateClassList[_0x42c79f(0x1c0)]['addClassEntry']=function(_0x117ab6){const _0x35b1f8=_0x42c79f,_0x9d68af=_0x117ab6[_0x35b1f8(0xd3)]||0x0,_0xa2fe41=$dataClasses[_0x9d68af];let _0x49e317=_0xa2fe41[_0x35b1f8(0x399)];if(this[_0x35b1f8(0x2b1)]&&this['_tempActor'][_0x35b1f8(0x30c)]()['id']===_0x117ab6[_0x35b1f8(0xd3)]){if(_0x35b1f8(0x1bb)!==_0x35b1f8(0xda)){const _0x4f91ee=Window_CharaCreateClassList[_0x35b1f8(0x3cd)][_0x35b1f8(0x2ac)];_0x49e317=_0x35b1f8(0x1ab)[_0x35b1f8(0x358)](_0x4f91ee,_0x49e317);}else{const _0x3ceb19=_0x280b42(_0x47495c['$1']);_0x3ceb19!==_0x367208[_0x4f95f0][_0x35b1f8(0x3c4)]&&(_0x139dba(_0x35b1f8(0x172)[_0x35b1f8(0x358)](_0x5dd955,_0x3ceb19)),_0x3a5ee1[_0x35b1f8(0x185)]());}}let _0x314d5c=Window_CharaCreateClassList[_0x35b1f8(0x3cd)]['defaultIcon'];if(Scene_CreateCharacter[_0x35b1f8(0x3cd)][_0x35b1f8(0x16a)]){if('lHjYa'!==_0x35b1f8(0x114)){const _0x388a25=VisuMZ[_0x35b1f8(0x38a)][_0x35b1f8(0xd0)],_0x34ec8e=_0xa2fe41[_0x35b1f8(0x1c1)]||'';_0x34ec8e[_0x35b1f8(0xe0)](_0x388a25[_0x35b1f8(0x2ad)])&&(_0x314d5c=Number(RegExp['$1'])),_0x49e317=_0x35b1f8(0x120)[_0x35b1f8(0x358)](_0x314d5c,_0x49e317);}else this['drawCurrencyValue'](_0x2261a6,_0x1d8a44['currencyUnit'],_0x49172a['x'],_0x28c4ca['y'],_0x252242['width']);}const _0x2695cd=this[_0x35b1f8(0x37a)](_0x117ab6);this[_0x35b1f8(0x110)](_0x49e317,'class',_0x2695cd,_0x117ab6);},Window_CharaCreateClassList[_0x42c79f(0x1c0)][_0x42c79f(0x37a)]=function(_0x3e8d8){const _0x461df7=_0x42c79f;if(!_0x3e8d8)return![];if(_0x3e8d8[_0x461df7(0x366)]>0x0){if('IPilg'===_0x461df7(0x23b)){if($gameParty['gold']()<_0x3e8d8[_0x461df7(0x366)])return![];}else return _0x4d2d4b[_0x461df7(0x38a)][_0x461df7(0x3a5)][_0x461df7(0x21b)][_0x461df7(0xf8)];}if(_0x3e8d8[_0x461df7(0x26e)]>0x0){if(_0x461df7(0x31d)==='Uljdq')this['_text']=_0x898da2,this[_0x461df7(0x15b)]();else{const _0x2a8e48=$dataItems[_0x3e8d8['ItemIdCost']];if(!_0x2a8e48)return![];const _0x5c06d4=_0x3e8d8[_0x461df7(0x355)];if($gameParty[_0x461df7(0x1c9)](_0x2a8e48)<_0x5c06d4)return![];}}return _0x3e8d8[_0x461df7(0xd7)]['length']>0x0;},Window_CharaCreateClassList['prototype'][_0x42c79f(0x1f5)]=function(_0xc6b293){const _0x50c0be=_0x42c79f,_0x37a489=this[_0x50c0be(0x33b)](_0xc6b293);this['resetTextColor'](),this[_0x50c0be(0x109)](this[_0x50c0be(0x24a)](_0xc6b293)),this[_0x50c0be(0xa2)](this['commandName'](_0xc6b293),_0x37a489['x'],_0x37a489['y'],_0x37a489[_0x50c0be(0x296)]),this['drawClassCost'](_0xc6b293);},Window_CharaCreateClassList[_0x42c79f(0x1c0)]['drawClassCost']=function(_0x406f5a){const _0x16c1f0=_0x42c79f,_0x2a4c1b=this['itemLineRect'](_0x406f5a),_0x2eba35=this['_list'][_0x406f5a][_0x16c1f0(0x2f1)];if(this[_0x16c1f0(0x2b1)]&&this[_0x16c1f0(0x2b1)]['currentClass']()['id']===_0x2eba35[_0x16c1f0(0xd3)]){if(_0x16c1f0(0x200)===_0x16c1f0(0x200))return;else{this[_0x16c1f0(0x1ae)]();return;}}let _0x114913=$dataItems[_0x2eba35[_0x16c1f0(0x26e)]||0x0];_0x114913&&this['drawItemCost'](_0x2eba35,_0x114913,_0x2a4c1b);let _0x4698ab=_0x2eba35[_0x16c1f0(0x366)]||0x0;_0x4698ab>0x0&&this[_0x16c1f0(0x302)](_0x4698ab,_0x2a4c1b);},Window_CharaCreateClassList['prototype'][_0x42c79f(0x1f9)]=function(_0x54e4c9,_0x3ee6a3,_0x496020){const _0x1a1e68=_0x42c79f,_0x231dcf=Window_CharaCreateClassList[_0x1a1e68(0x3cd)],_0x484117=_0x54e4c9['ItemCountCost'],_0x2a1344=$gameParty[_0x1a1e68(0x1c9)](_0x3ee6a3);let _0x134b41='';(_0x484117>0x1||_0x231dcf[_0x1a1e68(0x157)])&&(_0x134b41=_0x231dcf[_0x1a1e68(0x30a)][_0x1a1e68(0x358)](_0x484117,_0x2a1344));const _0x494c5a=_0x1a1e68(0x232)[_0x1a1e68(0x358)](_0x3ee6a3[_0x1a1e68(0x103)]);let _0x246489=_0x231dcf['itemCostTypeFmt'][_0x1a1e68(0x358)](_0x494c5a,_0x134b41);const _0x49b710=this[_0x1a1e68(0x280)](_0x246489)['width'],_0x5840cc=_0x496020['x']+_0x496020[_0x1a1e68(0x296)]-_0x49b710,_0x1504d4=_0x496020['y'];this[_0x1a1e68(0xa2)](_0x246489,_0x5840cc,_0x1504d4),_0x496020[_0x1a1e68(0x296)]-=_0x49b710+this[_0x1a1e68(0x360)]()*0x2;},Window_CharaCreateClassList['prototype']['drawGoldCost']=function(_0x535bc9,_0x1b6801){const _0xa5622b=_0x42c79f;this['drawCurrencyValue'](_0x535bc9,TextManager[_0xa5622b(0x382)],_0x1b6801['x'],_0x1b6801['y'],_0x1b6801[_0xa5622b(0x296)]);},Window_CharaCreateClassList['prototype'][_0x42c79f(0xf1)]=function(){const _0x42ee14=_0x42c79f;this['_helpWindow'][_0x42ee14(0xe7)](this[_0x42ee14(0x33c)]());},Window_CharaCreateClassList[_0x42c79f(0x1c0)][_0x42c79f(0x10f)]=function(_0x1a8c99){const _0x4afe0e=_0x42c79f;_0x1a8c99[_0x4afe0e(0x3b4)][_0x4afe0e(0x364)]&&this[_0x4afe0e(0x263)](_0x1a8c99);},Window_CharaCreateClassList[_0x42c79f(0x1c0)][_0x42c79f(0x263)]=function(_0x167245){const _0x550c97=_0x42c79f;this['_tempActor']=_0x167245[_0x550c97(0x20b)];const _0x1f0c70=this['_tempActor'][_0x550c97(0x30c)]()['id'],_0x396ee7=this[_0x550c97(0x160)][_0x550c97(0x277)](_0x379e3d=>_0x379e3d[_0x550c97(0x2f1)]&&_0x379e3d[_0x550c97(0x2f1)][_0x550c97(0xd3)]===_0x1f0c70);this[_0x550c97(0x37b)](Math[_0x550c97(0xff)](0x0,_0x396ee7)),this[_0x550c97(0x15b)]();};function Window_CharaCreateAppearance(){const _0x33c96c=_0x42c79f;this[_0x33c96c(0x18a)](...arguments);}Window_CharaCreateAppearance['prototype']=Object[_0x42c79f(0x133)](Window_Command[_0x42c79f(0x1c0)]),Window_CharaCreateAppearance[_0x42c79f(0x1c0)][_0x42c79f(0x2e5)]=Window_CharaCreateAppearance,Window_CharaCreateAppearance[_0x42c79f(0x3cd)]={'bgType':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Window']['AppearanceWindow_BgType']??0x0,'pickMoreAppearances':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)]['Window'][_0x42c79f(0xa5)]??!![]},Window_CharaCreateAppearance['prototype'][_0x42c79f(0x18a)]=function(_0x4daf3a){const _0x3200f5=_0x42c79f;Window_Command[_0x3200f5(0x1c0)][_0x3200f5(0x18a)]['call'](this,_0x4daf3a),this[_0x3200f5(0x15c)]=0x0,this['deactivate']();},Window_CharaCreateAppearance[_0x42c79f(0x1c0)][_0x42c79f(0x31e)]=function(_0x17ae55,_0x1ef9ec){const _0x4d2d3c=_0x42c79f;if(this['_classID']===_0x17ae55)return;this[_0x4d2d3c(0x29c)]=_0x17ae55,this[_0x4d2d3c(0xd4)](_0x1ef9ec);},Window_CharaCreateAppearance['prototype'][_0x42c79f(0xd4)]=function(_0x500a27){const _0x40c8cd=_0x42c79f;this[_0x40c8cd(0x308)]=JSON[_0x40c8cd(0x3d3)](JSON['stringify'](_0x500a27)),this[_0x40c8cd(0x15b)](),this['smoothSelect'](0x0);},Window_CharaCreateAppearance[_0x42c79f(0x1c0)]['makeCommandList']=function(){const _0x378081=_0x42c79f;if(!this[_0x378081(0x308)])return;for(const _0x59c1cb of this['_graphicsData']){this[_0x378081(0x145)](_0x59c1cb);}this[_0x378081(0x1af)]()&&this['addMoreCommand']();},Window_CharaCreateAppearance['prototype'][_0x42c79f(0x145)]=function(_0x489366){const _0xbdbdb=_0x42c79f;if(!_0x489366)return;let _0x50bbd2=_0x489366[_0xbdbdb(0x1c7)],_0x26ee46=0x0;if(Scene_CreateCharacter[_0xbdbdb(0x3cd)][_0xbdbdb(0x16a)]){if(_0xbdbdb(0x16c)===_0xbdbdb(0x16c))_0x26ee46=_0x489366[_0xbdbdb(0x140)],_0x50bbd2=_0xbdbdb(0x120)['format'](_0x26ee46,_0x50bbd2);else{const _0x1e18f0=_0x5837d3[_0xbdbdb(0x1c0)][_0xbdbdb(0x2f7)][_0xbdbdb(0x376)](this,_0x5f2951);return _0x1e18f0['y']=0x0,_0x1e18f0;}}this[_0xbdbdb(0x110)](_0x50bbd2,_0xbdbdb(0x11a),!![],_0x489366);},Window_CharaCreateAppearance['prototype']['canPickMoreAppearances']=function(){const _0x4b229a=_0x42c79f,_0x12c07c=Window_CharaCreateAppearance[_0x4b229a(0x3cd)];if(!_0x12c07c[_0x4b229a(0x1c4)])return![];if(Window_CharaCreateGraphicSets[_0x4b229a(0x3cd)][_0x4b229a(0x34e)])return!![];for(const _0x20d735 of VisuMZ[_0x4b229a(0x38a)][_0x4b229a(0x3a5)]['GraphicSets']){const _0x4ef96f=_0x20d735[_0x4b229a(0x3cb)]||0x0;if(_0x4ef96f===0x0)return!![];if($gameSwitches[_0x4b229a(0x1a5)](_0x4ef96f))return!![];}return![];},Window_CharaCreateAppearance['prototype'][_0x42c79f(0x207)]=function(){const _0x28578c=_0x42c79f,_0x449dae=TextManager[_0x28578c(0x2aa)][_0x28578c(0x36f)];let _0x50787b=_0x449dae[_0x28578c(0x248)],_0x855dd1=0x0;if(Scene_CreateCharacter[_0x28578c(0x3cd)][_0x28578c(0x16a)]){if(_0x28578c(0x37e)!==_0x28578c(0x1f4))_0x855dd1=_0x449dae[_0x28578c(0x279)],_0x50787b=_0x28578c(0x120)['format'](_0x855dd1,_0x50787b);else{if(!this[_0x28578c(0x38b)]())return;const _0x362e59=this[_0x28578c(0x321)](),_0x1ac11e=new _0x5ad66b(_0x362e59);this['addWindow'](_0x1ac11e),this[_0x28578c(0x24e)]=_0x1ac11e,_0x1ac11e[_0x28578c(0x1d8)](_0x4f1f9c[_0x28578c(0x3cd)][_0x28578c(0x111)]);}}this[_0x28578c(0x110)](_0x50787b,'more',!![]);},Window_CharaCreateAppearance['prototype']['drawItem']=function(_0x13efb8){const _0x2906e9=_0x42c79f,_0x26c4c0=this[_0x2906e9(0x33b)](_0x13efb8);this['resetTextColor'](),this['changePaintOpacity'](this[_0x2906e9(0x24a)](_0x13efb8)),this[_0x2906e9(0xa2)](this[_0x2906e9(0x1eb)](_0x13efb8),_0x26c4c0['x'],_0x26c4c0['y'],_0x26c4c0[_0x2906e9(0x296)]);},Window_CharaCreateAppearance[_0x42c79f(0x1c0)]['updateHelp']=function(){const _0x26ec4d=_0x42c79f;if(this[_0x26ec4d(0x1fd)]()===_0x26ec4d(0x11a)&&this['currentExt']()){if('xQaHG'!==_0x26ec4d(0x1df))this[_0x26ec4d(0x362)]['setEntryData']({'PreviewPicture':this['currentExt']()[_0x26ec4d(0x317)]||this[_0x26ec4d(0x33c)]()[_0x26ec4d(0xd1)]||[this[_0x26ec4d(0x33c)]()[_0x26ec4d(0x3a6)],this[_0x26ec4d(0x33c)]()[_0x26ec4d(0x371)]],'PreviewParallax':this[_0x26ec4d(0x33c)]()[_0x26ec4d(0x309)]});else{const _0x1c6e1c=this['graphicSetsWindowRect'](),_0x56732f=new _0x36697c(_0x1c6e1c);_0x56732f[_0x26ec4d(0x228)](this[_0x26ec4d(0x3bb)]),_0x56732f[_0x26ec4d(0x237)]('graphic',this[_0x26ec4d(0x3d6)][_0x26ec4d(0x1ac)](this)),_0x56732f[_0x26ec4d(0x237)](_0x26ec4d(0x2e3),this[_0x26ec4d(0x12a)]['bind'](this)),this[_0x26ec4d(0xb4)](_0x56732f),this['_graphicSetsWindow']=_0x56732f,this[_0x26ec4d(0x2ae)][_0x26ec4d(0x2ff)](_0x56732f),_0x56732f[_0x26ec4d(0x1d8)](_0x3084b8['SETTINGS']['bgType']);}}else{if('oTMIp'!==_0x26ec4d(0x2d9)){const _0x63247d=this[_0x26ec4d(0x33b)](_0x3f94c9);this[_0x26ec4d(0x1cd)](),this[_0x26ec4d(0x109)](this[_0x26ec4d(0x24a)](_0x5a2edf)),this[_0x26ec4d(0xa2)](this[_0x26ec4d(0x1eb)](_0x27eee3),_0x63247d['x'],_0x63247d['y'],_0x63247d[_0x26ec4d(0x296)]),this['drawClassCost'](_0x1dadbe);}else this['_helpWindow'][_0x26ec4d(0xe7)]({'PreviewPicture':'','PreviewParallax':''});}},Window_CharaCreateAppearance[_0x42c79f(0x1c0)][_0x42c79f(0x10f)]=function(_0x98ce6c){const _0x4710a9=_0x42c79f;_0x98ce6c[_0x4710a9(0x3b4)]['appearance']&&this['selectCurrentAppearance'](_0x98ce6c);},Window_CharaCreateAppearance[_0x42c79f(0x1c0)][_0x42c79f(0x3b7)]=function(_0x263377){const _0x503e86=_0x42c79f;this[_0x503e86(0x2b1)]=_0x263377[_0x503e86(0x20b)];const _0x31a9d1=this[_0x503e86(0x2b1)]['currentClass']()['id'];if(this[_0x503e86(0x106)](_0x31a9d1))return;if(Window_CharaCreateAppearance[_0x503e86(0x3cd)][_0x503e86(0x1c4)]){if(Window_CharaCreateGraphicSets[_0x503e86(0x3cd)][_0x503e86(0x34e)]){if(_0x503e86(0x2ef)===_0x503e86(0x2ef)){const _0x115fe3=VisuMZ[_0x503e86(0x38a)][_0x503e86(0x3a5)][_0x503e86(0x274)];for(const _0xb7cd1a of _0x115fe3){if(this[_0x503e86(0x106)](_0xb7cd1a[_0x503e86(0xd3)]))return;}}else{if(!_0x11a80c[_0x503e86(0x1a5)](_0x4c0373[_0x503e86(0x3cb)]))return![];}}const _0x446678=VisuMZ[_0x503e86(0x38a)][_0x503e86(0x3a5)][_0x503e86(0x1de)];for(const _0x349c21 of _0x446678){if(this[_0x503e86(0xeb)](_0x349c21))return;}}_0x263377[_0x503e86(0x3b4)][_0x503e86(0x247)]=![];},Window_CharaCreateAppearance['prototype'][_0x42c79f(0x106)]=function(_0x17fe98){const _0xa5d0fe=_0x42c79f,_0x40392e=VisuMZ[_0xa5d0fe(0x38a)][_0xa5d0fe(0x3a5)][_0xa5d0fe(0x274)],_0xba644=_0x40392e[_0xa5d0fe(0x28b)](_0x286792=>_0x286792[_0xa5d0fe(0xd3)]===_0x17fe98);if(_0xba644[_0xa5d0fe(0x3cb)]&&!$gameSwitches[_0xa5d0fe(0x1a5)](_0xba644[_0xa5d0fe(0x3cb)]))return![];if(_0xba644){if(_0xa5d0fe(0x2e7)!==_0xa5d0fe(0x2e7))this['padding']=_0xd3727a['SETTINGS'][_0xa5d0fe(0x134)];else{const _0x3df093=_0xba644[_0xa5d0fe(0xd7)],_0x2cd5de=_0x3df093[_0xa5d0fe(0x28b)](_0x5d3c7d=>VisuMZ['CharaCreationSys'][_0xa5d0fe(0x3bf)](_0x5d3c7d,this[_0xa5d0fe(0x2b1)]));if(_0x2cd5de){this['setAppearanceSet'](_0x17fe98,_0x3df093);const _0x2a069c=this[_0xa5d0fe(0x160)][_0xa5d0fe(0x277)](_0x3e1d16=>VisuMZ[_0xa5d0fe(0x38a)]['HasAnyMatchingGraphics'](_0x3e1d16[_0xa5d0fe(0x2f1)],this[_0xa5d0fe(0x2b1)]));return this[_0xa5d0fe(0x37b)](Math[_0xa5d0fe(0xff)](0x0,_0x2a069c)),!![];}}}return![];},Window_CharaCreateAppearance[_0x42c79f(0x1c0)]['checkRetrainGlobalAppearanceSet']=function(_0x5cbc9c){const _0x54746f=_0x42c79f;if(_0x5cbc9c[_0x54746f(0x3cb)]&&!$gameSwitches[_0x54746f(0x1a5)](_0x5cbc9c[_0x54746f(0x3cb)]))return![];const _0x2bf500=_0x5cbc9c[_0x54746f(0xd7)],_0x63928c=_0x2bf500[_0x54746f(0x28b)](_0x18f9d7=>VisuMZ['CharaCreationSys'][_0x54746f(0x3bf)](_0x18f9d7,this[_0x54746f(0x2b1)]));if(_0x63928c){if(_0x54746f(0x1a1)!=='KXrik')_0x385d00=_0x521acc[_0x54746f(0x3cd)][_0x54746f(0x312)],_0x366813=_0x54746f(0x120)[_0x54746f(0x358)](_0x2804f4,_0x3ce50c);else{this[_0x54746f(0xd4)](_0x2bf500);const _0x1e8495=this[_0x54746f(0x160)]['findIndex'](_0x43ae81=>VisuMZ['CharaCreationSys'][_0x54746f(0x3bf)](_0x43ae81['ext'],this[_0x54746f(0x2b1)]));return this['smoothSelect'](Math[_0x54746f(0xff)](0x0,_0x1e8495)),!![];}}return![];},VisuMZ['CharaCreationSys']['HasAnyMatchingGraphics']=function(_0x101eb9,_0x353c7c){const _0x18e3e3=_0x42c79f;if(_0x101eb9[_0x18e3e3(0x3a6)]&&_0x101eb9['FaceGraphic']===_0x353c7c[_0x18e3e3(0x1fe)]()&&_0x101eb9[_0x18e3e3(0x371)]===_0x353c7c[_0x18e3e3(0x219)]())return!![];if(_0x101eb9['CharacterGraphic']&&_0x101eb9['CharacterGraphic']===_0x353c7c[_0x18e3e3(0x1d5)]()&&_0x101eb9[_0x18e3e3(0x31f)]===_0x353c7c[_0x18e3e3(0x205)]())return!![];if(_0x101eb9['SvBattler']&&_0x101eb9[_0x18e3e3(0x230)]===_0x353c7c[_0x18e3e3(0x220)]())return!![];if(_0x101eb9[_0x18e3e3(0xd1)]&&_0x101eb9[_0x18e3e3(0xd1)]===_0x353c7c[_0x18e3e3(0x13e)])return!![];if(_0x101eb9[_0x18e3e3(0x317)]&&_0x101eb9[_0x18e3e3(0x317)]===_0x353c7c[_0x18e3e3(0x233)]){if(_0x18e3e3(0x139)!==_0x18e3e3(0x139)){const _0x56dc17=this['innerWidth']/_0x11bb3a[_0x18e3e3(0x318)][_0x18e3e3(0x296)],_0x34abc4=this[_0x18e3e3(0x2a3)]/_0x50a340[_0x18e3e3(0x318)]['height'],_0x5ce847=_0x24ac84['max'](_0x56dc17,_0x34abc4,0x1);_0x2ffac0[_0x18e3e3(0x1e6)]['x']=_0x5ce847,_0x3f3a2a[_0x18e3e3(0x1e6)]['y']=_0x5ce847;}else return!![];}return![];};function Window_CharaCreateGraphicSets(){this['initialize'](...arguments);}function _0x4137(_0x24bdd3,_0x1cc74d){const _0x40a66c=_0x40a6();return _0x4137=function(_0x413761,_0x3ca483){_0x413761=_0x413761-0x9d;let _0x265ac8=_0x40a66c[_0x413761];return _0x265ac8;},_0x4137(_0x24bdd3,_0x1cc74d);}Window_CharaCreateGraphicSets['prototype']=Object['create'](Window_Command[_0x42c79f(0x1c0)]),Window_CharaCreateGraphicSets['prototype'][_0x42c79f(0x2e5)]=Window_CharaCreateGraphicSets,Window_CharaCreateGraphicSets[_0x42c79f(0x3cd)]={'bgType':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x213)]??0x0,'otherClassesFirst':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)]['GraphicSetsWindow_OtherFirst']??!![],'pickOtherClassApperances':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x17d)]??!![]},Window_CharaCreateGraphicSets['prototype']['initialize']=function(_0x3157d8){const _0x3a4e0a=_0x42c79f;Window_Command[_0x3a4e0a(0x1c0)][_0x3a4e0a(0x18a)][_0x3a4e0a(0x376)](this,_0x3157d8),this[_0x3a4e0a(0x15c)]=0x0,this['deactivate']();},Window_CharaCreateGraphicSets['prototype'][_0x42c79f(0x253)]=function(){const _0x1c7dd5=_0x42c79f,_0x3d3ae0=Window_CharaCreateGraphicSets['SETTINGS'];if(_0x3d3ae0[_0x1c7dd5(0x34e)]&&_0x3d3ae0[_0x1c7dd5(0x289)])this[_0x1c7dd5(0x327)]();this[_0x1c7dd5(0x387)]();if(_0x3d3ae0[_0x1c7dd5(0x34e)]&&!_0x3d3ae0[_0x1c7dd5(0x289)])this[_0x1c7dd5(0x327)]();},Window_CharaCreateGraphicSets[_0x42c79f(0x1c0)][_0x42c79f(0x327)]=function(){const _0x55f642=_0x42c79f,_0x225b28=VisuMZ[_0x55f642(0x38a)][_0x55f642(0x3a5)][_0x55f642(0x274)];for(const _0x4b104c of _0x225b28){if(!this[_0x55f642(0x352)](_0x4b104c))continue;this[_0x55f642(0x269)](_0x4b104c);}},Window_CharaCreateGraphicSets[_0x42c79f(0x1c0)][_0x42c79f(0x352)]=function(_0x3c1ed7){const _0x5cd140=_0x42c79f;if(!_0x3c1ed7)return![];const _0xaee005=_0x3c1ed7[_0x5cd140(0xd3)]||0x0;if(!$dataClasses[_0xaee005])return![];const _0x16524b=$dataClasses[_0xaee005];if(_0x16524b[_0x5cd140(0x399)][_0x5cd140(0x223)]()==='')return![];if(_0x16524b[_0x5cd140(0x399)][_0x5cd140(0xce)]('-----'))return![];if(_0x3c1ed7[_0x5cd140(0x3cb)]>0x0){if(!$gameSwitches[_0x5cd140(0x1a5)](_0x3c1ed7[_0x5cd140(0x3cb)]))return![];}return _0x3c1ed7[_0x5cd140(0xd7)][_0x5cd140(0x250)]>0x0;},Window_CharaCreateGraphicSets['prototype'][_0x42c79f(0x269)]=function(_0xa5ba1e){const _0x2d4947=_0x42c79f,_0x56e595=_0xa5ba1e[_0x2d4947(0xd3)]||0x0,_0x209b2a=$dataClasses[_0x56e595],_0x64d02e=TextManager[_0x2d4947(0x2aa)]['graphicSets'][_0x2d4947(0xba)];let _0x5eebb7=_0x64d02e[_0x2d4947(0x358)](_0x209b2a['name']),_0x3d9d7d=Window_CharaCreateClassList[_0x2d4947(0x3cd)][_0x2d4947(0x340)];if(Scene_CreateCharacter[_0x2d4947(0x3cd)][_0x2d4947(0x16a)]){const _0x1b1c7f=VisuMZ[_0x2d4947(0x38a)]['RegExp'],_0x5dfae7=_0x209b2a[_0x2d4947(0x1c1)]||'';_0x5dfae7['match'](_0x1b1c7f[_0x2d4947(0x2ad)])&&(_0x3d9d7d=Number(RegExp['$1'])),_0x5eebb7=_0x2d4947(0x120)[_0x2d4947(0x358)](_0x3d9d7d,_0x5eebb7);}this[_0x2d4947(0x110)](_0x5eebb7,_0x2d4947(0x11a),!![],_0xa5ba1e);},Window_CharaCreateGraphicSets[_0x42c79f(0x1c0)][_0x42c79f(0x387)]=function(){const _0x293f09=_0x42c79f,_0x260e0b=VisuMZ[_0x293f09(0x38a)][_0x293f09(0x3a5)]['GraphicSets'];for(const _0x45d4ae of _0x260e0b){if(_0x293f09(0xe1)!==_0x293f09(0xe1)){if(!_0x32ce3a)return![];const _0x39536f=_0x566b6b['ClassID']||0x0;if(!_0x4e3d0b[_0x39536f])return![];const _0x44196c=_0x39e0f7[_0x39536f];if(_0x44196c[_0x293f09(0x399)]['trim']()==='')return![];if(_0x44196c[_0x293f09(0x399)][_0x293f09(0xce)](_0x293f09(0x335)))return![];if(_0x47e29f[_0x293f09(0x3cb)]>0x0){if(!_0x58e686[_0x293f09(0x1a5)](_0x325854[_0x293f09(0x3cb)]))return![];}return _0x4689e9[_0x293f09(0xd7)]['length']>0x0;}else{if(!this[_0x293f09(0x375)](_0x45d4ae))continue;this[_0x293f09(0x27c)](_0x45d4ae);}}},Window_CharaCreateGraphicSets[_0x42c79f(0x1c0)]['includesGraphicsSet']=function(_0x360742){const _0x577acf=_0x42c79f;if(!_0x360742)return![];if(_0x360742[_0x577acf(0x3cb)]>0x0){if(!$gameSwitches[_0x577acf(0x1a5)](_0x360742['SwitchReq']))return![];}return _0x360742['Graphics'][_0x577acf(0x250)]>0x0;},Window_CharaCreateGraphicSets[_0x42c79f(0x1c0)][_0x42c79f(0x27c)]=function(_0x187465){const _0x36640b=_0x42c79f;let _0x2eb5f7=_0x187465[_0x36640b(0x1c7)],_0x57d66b=0x0;if(Scene_CreateCharacter['SETTINGS'][_0x36640b(0x16a)]){if(_0x36640b(0x22f)!==_0x36640b(0x22f)){let _0x1a8d6d=0x0;return _0x1a8d6d+=this[_0x36640b(0xe3)](),_0x1a8d6d+=this[_0x36640b(0xc3)](),_0x1a8d6d;}else _0x57d66b=_0x187465[_0x36640b(0x140)],_0x2eb5f7=_0x36640b(0x120)[_0x36640b(0x358)](_0x57d66b,_0x2eb5f7);}this[_0x36640b(0x110)](_0x2eb5f7,_0x36640b(0x11a),!![],_0x187465);},Window_CharaCreateGraphicSets['prototype']['drawItem']=function(_0x5ab805){const _0x336694=_0x42c79f,_0x1b4d1d=this[_0x336694(0x33b)](_0x5ab805);this[_0x336694(0x1cd)](),this['changePaintOpacity'](this[_0x336694(0x24a)](_0x5ab805)),this[_0x336694(0xa2)](this['commandName'](_0x5ab805),_0x1b4d1d['x'],_0x1b4d1d['y'],_0x1b4d1d[_0x336694(0x296)]);},Window_CharaCreateGraphicSets[_0x42c79f(0x1c0)][_0x42c79f(0xf1)]=function(){const _0x4da5be=_0x42c79f;this[_0x4da5be(0x362)][_0x4da5be(0xe7)](this[_0x4da5be(0x33c)]());};function Window_CharaCreateTraitTypes(){const _0x3960d5=_0x42c79f;this[_0x3960d5(0x18a)](...arguments);}Window_CharaCreateTraitTypes[_0x42c79f(0x1c0)]=Object[_0x42c79f(0x133)](Window_Command[_0x42c79f(0x1c0)]),Window_CharaCreateTraitTypes[_0x42c79f(0x1c0)]['constructor']=Window_CharaCreateTraitTypes,Window_CharaCreateTraitTypes[_0x42c79f(0x3cd)]={'bgType':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0xc7)]??0x0,'acceptIcon':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)][_0x42c79f(0x31b)]??0xa4,'traitIcon':VisuMZ[_0x42c79f(0x38a)]['Settings'][_0x42c79f(0x354)]['TraitTypesWindow_TypeIcon']??0x53},Window_CharaCreateTraitTypes[_0x42c79f(0x1c0)][_0x42c79f(0x18a)]=function(_0x322cc6){const _0x494dcf=_0x42c79f;Window_Command[_0x494dcf(0x1c0)][_0x494dcf(0x18a)]['call'](this,_0x322cc6),this[_0x494dcf(0x15c)]=0x0,this[_0x494dcf(0x2df)]();},Window_CharaCreateTraitTypes[_0x42c79f(0x1c0)][_0x42c79f(0x253)]=function(){const _0x4cfbf3=_0x42c79f;this[_0x4cfbf3(0x31a)](),this[_0x4cfbf3(0x1ce)]();},Window_CharaCreateTraitTypes['prototype']['addAcceptTraitsCommand']=function(){const _0x365271=_0x42c79f;let _0x33c77c=TextManager[_0x365271(0x2aa)][_0x365271(0x2d8)][_0x365271(0x33d)],_0x5d9528=0x0;if(Scene_CreateCharacter[_0x365271(0x3cd)][_0x365271(0x16a)]){if('GsWNI'===_0x365271(0x11f)){const _0x258580=this[_0x365271(0x229)][_0x365271(0x3d2)]();this['_settings'][_0x365271(0x252)]&&_0x28d280[_0x365271(0x32a)](this['_settings']['dismissSwitchID'],!![]),this[_0x365271(0x3ce)][_0x365271(0x1f8)]&&_0x5db515['setValue'](this['_settings'][_0x365271(0x1f8)],_0x258580[_0x365271(0x180)]()),_0x258580[_0x365271(0x167)](),_0x4f6aad[_0x365271(0x242)](_0x258580[_0x365271(0x180)]()),_0x369269[_0x365271(0x198)]=!![],this[_0x365271(0x201)](this[_0x365271(0xc5)]()),this[_0x365271(0x1ae)]();}else _0x5d9528=Window_CharaCreateTraitTypes[_0x365271(0x3cd)][_0x365271(0x151)],_0x33c77c='\x5cI[%1]%2'[_0x365271(0x358)](_0x5d9528,_0x33c77c);}const _0x22ed17=this['isAcceptTraitsEnabled']();this[_0x365271(0x110)](_0x33c77c,_0x365271(0x33d),_0x22ed17);},Window_CharaCreateTraitTypes[_0x42c79f(0x1c0)][_0x42c79f(0x19d)]=function(){const _0xcb240c=_0x42c79f;if(!SceneManager['_scene'][_0xcb240c(0x17e)]())return![];if(!SceneManager[_0xcb240c(0x2da)][_0xcb240c(0x10a)]())return![];return!![];},Window_CharaCreateTraitTypes[_0x42c79f(0x1c0)][_0x42c79f(0x1ce)]=function(){const _0x589841=_0x42c79f,_0x35aad4=SceneManager[_0x589841(0x2da)][_0x589841(0x2f0)]()[_0x589841(0x2c9)](),_0x56132a=VisuMZ[_0x589841(0x30b)][_0x589841(0x3a5)];for(const _0x153b92 of _0x35aad4){if(_0x589841(0x196)==='nhkEB'){if(_0x61fc35[_0x589841(0x3cb)]>0x0){if(!_0x4e0d00[_0x589841(0x1a5)](_0x584fe6[_0x589841(0x3cb)]))return![];}const _0x5467ac=_0x31c534['Name'][_0x589841(0x24c)]()[_0x589841(0x223)](),_0x2d6bdd=this[_0x589841(0xbb)][_0x589841(0x24c)]()[_0x589841(0x223)]();return!!_0x448d2b[_0x589841(0x14b)][_0x2d6bdd][_0x5467ac];}else{const _0x450610=_0x56132a[_0x153b92];if(!_0x450610)continue;if(!_0x450610[_0x589841(0x265)])continue;if(!this[_0x589841(0x119)](_0x153b92))continue;const _0x4b1715=TextManager['CHARA_CREATION_SYS'][_0x589841(0x2d8)][_0x589841(0x18d)];let _0x1953e0=_0x4b1715[_0x589841(0x358)](_0x450610[_0x589841(0x173)]),_0x15324f=0x0;Scene_CreateCharacter[_0x589841(0x3cd)][_0x589841(0x16a)]&&(_0x15324f=Window_CharaCreateTraitTypes['SETTINGS'][_0x589841(0x20a)],_0x1953e0='\x5cI[%1]%2'[_0x589841(0x358)](_0x15324f,_0x1953e0));const _0x52bb9f=_0x153b92,_0x2af03a=this[_0x589841(0x292)](_0x153b92),_0x337f25=this['makeTraitTypeExt'](_0x153b92);this[_0x589841(0x110)](_0x1953e0,_0x52bb9f,_0x2af03a,_0x337f25);}}},Window_CharaCreateTraitTypes[_0x42c79f(0x1c0)][_0x42c79f(0x119)]=function(_0x3b0a9f){const _0x434385=_0x42c79f,_0x308544=VisuMZ[_0x434385(0x38a)][_0x434385(0x3a5)][_0x434385(0x118)],_0x452dfb=_0x308544[_0x3b0a9f];return _0x452dfb['Visible'];},Window_CharaCreateTraitTypes['prototype']['isTraitTypeEnabled']=function(_0x17f279){const _0x44eb6a=_0x42c79f,_0x423b0f=VisuMZ[_0x44eb6a(0x38a)][_0x44eb6a(0x3a5)][_0x44eb6a(0x118)],_0x578953=_0x423b0f[_0x17f279];return this['_retrainMode']?_0x578953['RetrainChange']:_0x578953[_0x44eb6a(0xbd)];},Window_CharaCreateTraitTypes[_0x42c79f(0x1c0)][_0x42c79f(0x1f3)]=function(_0x151791){const _0x1ae21c=_0x42c79f;_0x151791=_0x151791[_0x1ae21c(0x24c)]()[_0x1ae21c(0x223)]();const _0x43b797=SceneManager[_0x1ae21c(0x2da)][_0x1ae21c(0x1a4)][_0x151791]['toUpperCase']()[_0x1ae21c(0x223)](),_0x303ffb=DataManager[_0x1ae21c(0x14b)][_0x151791][_0x43b797];return _0x303ffb['Display']||'';},Window_CharaCreateTraitTypes[_0x42c79f(0x1c0)][_0x42c79f(0x1f5)]=function(_0x5d07e3){const _0x38dfc8=_0x42c79f,_0x52a912=this[_0x38dfc8(0x33b)](_0x5d07e3);this[_0x38dfc8(0x1cd)](),this['changePaintOpacity'](this[_0x38dfc8(0x24a)](_0x5d07e3)),this[_0x38dfc8(0xa2)](this[_0x38dfc8(0x1eb)](_0x5d07e3),_0x52a912['x'],_0x52a912['y']);const _0x199e99=this[_0x38dfc8(0x160)][_0x5d07e3]['ext']||'';if(_0x199e99){const _0x59867b=_0x52a912['x']+Math[_0x38dfc8(0x365)](_0x52a912[_0x38dfc8(0x296)]/0x2);this[_0x38dfc8(0xa2)](_0x199e99,_0x59867b,_0x52a912['y']);}},Window_CharaCreateTraitTypes[_0x42c79f(0x1c0)][_0x42c79f(0x10f)]=function(_0x173a1f){this['_retrainMode']=!![];};function Window_CharaCreateTraitSets(){const _0xc74c6e=_0x42c79f;this[_0xc74c6e(0x18a)](...arguments);}Window_CharaCreateTraitSets[_0x42c79f(0x1c0)]=Object[_0x42c79f(0x133)](Window_Command[_0x42c79f(0x1c0)]),Window_CharaCreateTraitSets[_0x42c79f(0x1c0)]['constructor']=Window_CharaCreateTraitSets,Window_CharaCreateTraitSets['SETTINGS']={'bgType':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)]['TraitSetsWindow_BgType']??0x0,'lineThickness':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x3c0)]??0x3,'currentTraitSetTextColor':VisuMZ[_0x42c79f(0x38a)]['Settings'][_0x42c79f(0x1d9)]['TraitSetsWindow_TextColorID']??0x11,'itemCostTypeFmt':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Window'][_0x42c79f(0x2d3)]??_0x42c79f(0x305),'itemCostQuantityFmt':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0xd6)]??'%2/%1','itemDrawCost1':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Window'][_0x42c79f(0x363)]??![]},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x18a)]=function(_0x38873c){const _0x446893=_0x42c79f;Window_Command[_0x446893(0x1c0)]['initialize']['call'](this,_0x38873c),this[_0x446893(0x15c)]=0x0,this['deactivate']();},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x245)]=function(){const _0x240d0f=_0x42c79f,_0x514182=Math[_0x240d0f(0xff)](Window_CharaCreateTraitSets[_0x240d0f(0x3cd)][_0x240d0f(0x2e6)],0x1);return Math[_0x240d0f(0x2b6)](this['lineHeight']()*_0x514182)+0x8;},Window_CharaCreateTraitSets['prototype'][_0x42c79f(0x29d)]=function(_0xe3ac59){const _0xb99c0=_0x42c79f;this[_0xb99c0(0xbb)]=_0xe3ac59,this[_0xb99c0(0x15b)]();},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x3a3)]=function(){const _0x2ffed0=_0x42c79f,_0x498d77=this['_traitType'][_0x2ffed0(0x24c)]()['trim'](),_0x4c1f01=SceneManager[_0x2ffed0(0x2da)]['_traits'][_0x498d77],_0x21bf04=Math[_0x2ffed0(0xff)](this[_0x2ffed0(0x160)]['findIndex'](_0x465f4f=>_0x465f4f['name']===_0x4c1f01),0x0);_0x21bf04>0x0?(this[_0x2ffed0(0x169)](_0x21bf04-0x1),this[_0x2ffed0(0x37b)](_0x21bf04)):(this[_0x2ffed0(0x169)](0x0),this[_0x2ffed0(0x37b)](0x0));},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x253)]=function(){const _0x2dfc5d=_0x42c79f;if(!this['_traitType'])return;const _0x3ebd2f=VisuMZ[_0x2dfc5d(0x38a)][_0x2dfc5d(0x3a5)][_0x2dfc5d(0x118)][this['_traitType']],_0x29d89a=_0x3ebd2f[_0x2dfc5d(0x2a8)];for(const _0x2facaa of _0x29d89a){if(_0x2dfc5d(0x19e)===_0x2dfc5d(0x1e8))_0x618646[_0x2dfc5d(0x14f)]<=this['_level']&&this['learnSkill'](_0x37dea2[_0x2dfc5d(0x1c8)]);else{if(!this['isTraitSetIncluded'](_0x2facaa))continue;const _0x42c61c=_0x2facaa[_0x2dfc5d(0x260)][_0x2dfc5d(0x24c)]()[_0x2dfc5d(0x223)](),_0x361ac0=this[_0x2dfc5d(0x227)](_0x2facaa),_0x535e7c=_0x2facaa;this[_0x2dfc5d(0x110)](_0x42c61c,'select',_0x361ac0,_0x535e7c);}}},Window_CharaCreateTraitSets['prototype'][_0x42c79f(0x3a0)]=function(_0x2e8f1b){const _0x4a004b=_0x42c79f;if(_0x2e8f1b[_0x4a004b(0x3cb)]>0x0){if(_0x4a004b(0x359)!==_0x4a004b(0x359))return _0x45c170[_0x4a004b(0x38a)][_0x4a004b(0x3a5)][_0x4a004b(0x1d9)][_0x4a004b(0x1d2)][_0x4a004b(0x376)](this);else{if(!$gameSwitches[_0x4a004b(0x1a5)](_0x2e8f1b[_0x4a004b(0x3cb)]))return![];}}const _0x1ad195=_0x2e8f1b['Name'][_0x4a004b(0x24c)]()[_0x4a004b(0x223)](),_0x2a8b79=this[_0x4a004b(0xbb)][_0x4a004b(0x24c)]()[_0x4a004b(0x223)]();return!!DataManager['_traitSets'][_0x2a8b79][_0x1ad195];},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x227)]=function(_0x451383){const _0x21d0db=_0x42c79f;if(_0x451383[_0x21d0db(0x366)]>0x0){if(_0x21d0db(0x3bc)===_0x21d0db(0x3bc)){let _0x3a1a4b=SceneManager[_0x21d0db(0x2da)][_0x21d0db(0x211)](this[_0x21d0db(0xbb)]);_0x3a1a4b+=_0x451383['GoldCost'];if($gameParty[_0x21d0db(0xad)]()<_0x3a1a4b)return![];}else{this[_0x21d0db(0x31e)](_0x42a755,_0x4c1b3a);const _0x50e846=this[_0x21d0db(0x160)][_0x21d0db(0x277)](_0x5ac6e0=>_0x2bf5d7[_0x21d0db(0x38a)]['HasAnyMatchingGraphics'](_0x5ac6e0[_0x21d0db(0x2f1)],this[_0x21d0db(0x2b1)]));return this[_0x21d0db(0x37b)](_0x4e3444[_0x21d0db(0xff)](0x0,_0x50e846)),!![];}}if(_0x451383[_0x21d0db(0x26e)]>0x0){const _0x1036ef=SceneManager[_0x21d0db(0x2da)][_0x21d0db(0x136)](this[_0x21d0db(0xbb)]),_0x12efba=_0x451383[_0x21d0db(0x26e)];_0x1036ef[_0x12efba]=_0x1036ef[_0x12efba]||0x0,_0x1036ef[_0x12efba]+=_0x451383[_0x21d0db(0x355)];if(!SceneManager[_0x21d0db(0x2da)][_0x21d0db(0x10a)](_0x1036ef))return![];}return!![];},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x1f5)]=function(_0x27fd0b){const _0x52d388=_0x42c79f,_0x4662e7=this[_0x52d388(0x2f7)](_0x27fd0b);this['resetDescriptionFontSize'](),this[_0x52d388(0x16e)]();const _0x576ab0=DataManager[_0x52d388(0x14b)][this[_0x52d388(0xbb)][_0x52d388(0x24c)]()[_0x52d388(0x223)]()][this[_0x52d388(0x1eb)](_0x27fd0b)],_0x6e0b4b=this[_0x52d388(0x160)][_0x27fd0b][_0x52d388(0x2f1)],_0xc3f303=this[_0x52d388(0x24a)](_0x27fd0b),_0x46f405=Window_CharaCreateTraitSets[_0x52d388(0x3cd)][_0x52d388(0x2e6)];this[_0x52d388(0x109)](!![]);if(_0x46f405>0x1)this['drawFadedItemBackground'](_0x4662e7,0x2);this[_0x52d388(0x109)](_0xc3f303),this[_0x52d388(0x361)](_0x576ab0,_0x4662e7),this[_0x52d388(0x333)](_0x6e0b4b,_0x27fd0b);if(_0x46f405>0x1)this[_0x52d388(0x1cb)](_0x576ab0,_0x4662e7);this[_0x52d388(0x109)](!![]);},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x311)]=function(_0x164b66,_0x5501c5){const _0x5634b6=_0x42c79f;_0x5501c5=_0x5501c5||0x1,this[_0x5634b6(0x109)](![]);const _0x1b311d=ColorManager[_0x5634b6(0x36c)](),_0x232b18=ColorManager[_0x5634b6(0x144)](),_0x827623=_0x164b66[_0x5634b6(0x296)]/0x2,_0x2b83c9=this['lineHeight']();while(_0x5501c5--){this['contents'][_0x5634b6(0x34d)](_0x164b66['x'],_0x164b66['y'],_0x827623,_0x2b83c9,_0x232b18,_0x1b311d),this[_0x5634b6(0x38e)]['gradientFillRect'](_0x164b66['x']+_0x827623,_0x164b66['y'],_0x827623,_0x2b83c9,_0x1b311d,_0x232b18);}this[_0x5634b6(0x109)](!![]);},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x361)]=function(_0x125ad7,_0x366684){const _0x57cfb0=_0x42c79f;if(!_0x125ad7)return;let _0x116b5b=_0x125ad7[_0x57cfb0(0x2e9)]||'';if(this[_0x57cfb0(0x2b1)]){if('xqrSA'!=='xqrSA')_0x298c40[_0x57cfb0(0x32a)](_0x1e3db4[_0x57cfb0(0x252)],![]);else{const _0x1066c6=this[_0x57cfb0(0x2b1)][_0x57cfb0(0x14b)][this[_0x57cfb0(0xbb)]][_0x57cfb0(0x24c)]()[_0x57cfb0(0x223)]();_0x1066c6===_0x125ad7[_0x57cfb0(0x260)][_0x57cfb0(0x24c)]()['trim']()&&(_0x116b5b=_0x57cfb0(0x1ab)['format'](Window_CharaCreateTraitSets[_0x57cfb0(0x3cd)]['currentTraitSetTextColor'],_0x116b5b));}}this[_0x57cfb0(0xa2)](_0x116b5b,_0x366684['x']+this[_0x57cfb0(0x360)](),_0x366684['y']);},Window_CharaCreateTraitSets['prototype'][_0x42c79f(0x333)]=function(_0x495758,_0x20764a){const _0x389421=_0x42c79f;if(this['_tempActor']){const _0x106c14=this[_0x389421(0x2b1)][_0x389421(0x14b)][this[_0x389421(0xbb)]][_0x389421(0x24c)]()['trim']();if(_0x106c14===_0x495758[_0x389421(0x260)]['toUpperCase']()[_0x389421(0x223)]())return;}const _0x37515c=this[_0x389421(0x2f7)](_0x20764a);_0x37515c[_0x389421(0x296)]-=this['itemPadding']()*0x2;let _0x271458=$dataItems[_0x495758[_0x389421(0x26e)]||0x0];_0x271458&&this[_0x389421(0x1f9)](_0x495758,_0x271458,_0x37515c);let _0x441d6c=_0x495758[_0x389421(0x366)]||0x0;if(_0x441d6c>0x0){if('xLuRy'!=='xLuRy'){const _0x3aac87=this['_traitSetsWindow'][_0x389421(0xbb)][_0x389421(0x24c)]()[_0x389421(0x223)](),_0x4925d5=this[_0x389421(0x271)]['commandName'](this[_0x389421(0x271)]['index']());this[_0x389421(0x1a4)][_0x3aac87]=_0x4925d5,this['onTraitSetsCancel'](),this[_0x389421(0x3bb)][_0x389421(0x15b)]();}else this[_0x389421(0x302)](_0x441d6c,_0x37515c);}},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x1f9)]=function(_0x42964e,_0x27a969,_0x3d6c5c){const _0x1a354f=_0x42c79f,_0xc63f74=Window_CharaCreateTraitSets[_0x1a354f(0x3cd)],_0x3ae978=_0x42964e[_0x1a354f(0x355)],_0x399828=$gameParty['numItems'](_0x27a969);let _0x51bfda='';(_0x3ae978>0x1||_0xc63f74[_0x1a354f(0x157)])&&(_0x51bfda=_0xc63f74['itemCostQuantityFmt'][_0x1a354f(0x358)](_0x3ae978,_0x399828));const _0x2e074e=_0x1a354f(0x232)[_0x1a354f(0x358)](_0x27a969[_0x1a354f(0x103)]);let _0x428a8b=_0xc63f74[_0x1a354f(0x14a)]['format'](_0x2e074e,_0x51bfda);const _0x3c1b49=this['textSizeEx'](_0x428a8b)[_0x1a354f(0x296)],_0x4b1084=_0x3d6c5c['x']+_0x3d6c5c['width']-_0x3c1b49,_0x2e5003=_0x3d6c5c['y'];this[_0x1a354f(0xa2)](_0x428a8b,_0x4b1084,_0x2e5003),_0x3d6c5c[_0x1a354f(0x296)]-=_0x3c1b49+this['itemPadding']()*0x2;},Window_CharaCreateTraitSets['prototype'][_0x42c79f(0x302)]=function(_0x524968,_0x47d7e8){const _0x33c10b=_0x42c79f;this[_0x33c10b(0xf3)](_0x524968,TextManager[_0x33c10b(0x382)],_0x47d7e8['x'],_0x47d7e8['y'],_0x47d7e8['width']);},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x1cb)]=function(_0xabe9f6,_0x2c5a5e){const _0xa4dbb9=_0x42c79f;let _0x405c6f=_0x2c5a5e['x']+this['itemPadding']()*0x4,_0x2a70a2=_0x2c5a5e['y']+this['lineHeight'](),_0x523a88=_0xabe9f6[_0xa4dbb9(0xd5)]||'';this[_0xa4dbb9(0x300)](),this[_0xa4dbb9(0x16e)](),this[_0xa4dbb9(0xa2)](_0x523a88,_0x405c6f,_0x2a70a2),this[_0xa4dbb9(0x36a)]();},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x16e)]=function(){const _0x12aa89=_0x42c79f;Window_Command[_0x12aa89(0x1c0)]['resetFontSettings'][_0x12aa89(0x376)](this),this[_0x12aa89(0x38e)][_0x12aa89(0x284)]=this[_0x12aa89(0xfb)];},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x300)]=function(){const _0x14853d=_0x42c79f;this[_0x14853d(0xfb)]=VisuMZ[_0x14853d(0x30b)][_0x14853d(0x3a5)][_0x14853d(0x391)][_0x14853d(0x12d)];},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x36a)]=function(){const _0x470888=_0x42c79f;this['_resetFontSize']=$gameSystem[_0x470888(0x273)]();},Window_CharaCreateTraitSets['prototype'][_0x42c79f(0x153)]=function(_0x29ae81,_0x459dfb){const _0x36e4f6=_0x42c79f;if(_0x459dfb[_0x36e4f6(0x266)]){if(_0x36e4f6(0x1e7)!==_0x36e4f6(0x188))this[_0x36e4f6(0x1b7)](_0x29ae81,_0x459dfb['x'],_0x459dfb['y']+0x2);else{const _0x29cd47=_0x15a57e[_0x36e4f6(0x3cd)],_0x553607=_0xd0fde3[_0x36e4f6(0x355)],_0x9a1241=_0x5c369d[_0x36e4f6(0x1c9)](_0x3e4097);let _0x32ac8e='';(_0x553607>0x1||_0x29cd47['itemDrawCost1'])&&(_0x32ac8e=_0x29cd47[_0x36e4f6(0x30a)][_0x36e4f6(0x358)](_0x553607,_0x9a1241));const _0xe05c12='\x5cI[%1]'[_0x36e4f6(0x358)](_0x32ab11[_0x36e4f6(0x103)]);let _0x596b33=_0x29cd47[_0x36e4f6(0x14a)]['format'](_0xe05c12,_0x32ac8e);const _0x327d6e=this[_0x36e4f6(0x280)](_0x596b33)[_0x36e4f6(0x296)],_0x413524=_0x8efd92['x']+_0x29e8dd[_0x36e4f6(0x296)]-_0x327d6e,_0x4ee575=_0x392aee['y'];this[_0x36e4f6(0xa2)](_0x596b33,_0x413524,_0x4ee575),_0x35fc98[_0x36e4f6(0x296)]-=_0x327d6e+this['itemPadding']()*0x2;}}_0x459dfb['x']+=Math[_0x36e4f6(0x2b6)](ImageManager[_0x36e4f6(0x28c)]*this[_0x36e4f6(0xa0)]());if(this['fontSizeRatio']()===0x1)_0x459dfb['x']+=0x4;},Window_CharaCreateTraitSets['prototype'][_0x42c79f(0x1b7)]=function(_0x4e6430,_0x206a38,_0x53c6ef){const _0x5e94c2=_0x42c79f,_0x1fab54=ImageManager[_0x5e94c2(0xab)](_0x5e94c2(0x26c)),_0x3b8c48=ImageManager[_0x5e94c2(0x28c)],_0x242292=ImageManager[_0x5e94c2(0x13f)],_0x2065cf=_0x4e6430%0x10*_0x3b8c48,_0x3522ff=Math[_0x5e94c2(0x365)](_0x4e6430/0x10)*_0x242292,_0x3e25f5=Math[_0x5e94c2(0x2b6)](_0x3b8c48*this[_0x5e94c2(0xa0)]()),_0x4953b3=Math[_0x5e94c2(0x2b6)](_0x242292*this[_0x5e94c2(0xa0)]());this['contents']['blt'](_0x1fab54,_0x2065cf,_0x3522ff,_0x3b8c48,_0x242292,_0x206a38,_0x53c6ef,_0x3e25f5,_0x4953b3);},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0xa0)]=function(){const _0x5e7311=_0x42c79f;return this[_0x5e7311(0x38e)]['fontSize']/$gameSystem[_0x5e7311(0x273)]();},Window_CharaCreateTraitSets[_0x42c79f(0x1c0)][_0x42c79f(0x10f)]=function(_0x216d94){const _0x1eeeac=_0x42c79f;_0x216d94[_0x1eeeac(0x3b4)]['traits']&&(this[_0x1eeeac(0x2b1)]=_0x216d94[_0x1eeeac(0x20b)]);};function Window_CharaCreateBattleVoice(){const _0x56fd57=_0x42c79f;this[_0x56fd57(0x18a)](...arguments);}Window_CharaCreateBattleVoice[_0x42c79f(0x1c0)]=Object['create'](Window_Command[_0x42c79f(0x1c0)]),Window_CharaCreateBattleVoice['prototype'][_0x42c79f(0x2e5)]=Window_CharaCreateBattleVoice,Window_CharaCreateBattleVoice[_0x42c79f(0x3cd)]={'bgType':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x3a8)]??0x0,'currentTextColor':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x2f3)]??0x11,'acceptIcon':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Vocab'][_0x42c79f(0x2c7)]??0xa4,'voiceIcon':VisuMZ[_0x42c79f(0x38a)]['Settings'][_0x42c79f(0x1d9)][_0x42c79f(0x221)]??0x4},Window_CharaCreateBattleVoice['prototype']['initialize']=function(_0x12ffa5){const _0x84178a=_0x42c79f;Window_Command[_0x84178a(0x1c0)][_0x84178a(0x18a)][_0x84178a(0x376)](this,_0x12ffa5),this[_0x84178a(0x288)]='',this['openness']=0x0,this[_0x84178a(0x2df)]();},Window_CharaCreateBattleVoice['prototype'][_0x42c79f(0x253)]=function(){const _0x25f8be=_0x42c79f;this[_0x25f8be(0x26a)](),this[_0x25f8be(0x257)](),this[_0x25f8be(0x2e8)]();},Window_CharaCreateBattleVoice[_0x42c79f(0x1c0)]['createAcceptVoiceCommand']=function(){const _0x101572=_0x42c79f;let _0x26c8d9=TextManager[_0x101572(0x2aa)][_0x101572(0x2a4)]['accept'],_0x39003c=0x0;if(Scene_CreateCharacter['SETTINGS'][_0x101572(0x16a)]){if(_0x101572(0x13c)===_0x101572(0x13c))_0x39003c=Window_CharaCreateBattleVoice[_0x101572(0x3cd)][_0x101572(0x151)],_0x26c8d9=_0x101572(0x120)[_0x101572(0x358)](_0x39003c,_0x26c8d9);else return 0x0;}this['addCommand'](_0x26c8d9,'accept',!![]);},Window_CharaCreateBattleVoice[_0x42c79f(0x1c0)]['createNoVoiceCommand']=function(){const _0xb9c686=_0x42c79f;let _0x57cfdf=TextManager['CHARA_CREATION_SYS'][_0xb9c686(0x2a4)][_0xb9c686(0x2af)],_0x558708=0x0;if(Scene_CreateCharacter['SETTINGS'][_0xb9c686(0x16a)]){if(_0xb9c686(0x1a7)===_0xb9c686(0x1a7))_0x558708=Window_CharaCreateBattleVoice[_0xb9c686(0x3cd)][_0xb9c686(0x312)],_0x57cfdf=_0xb9c686(0x120)[_0xb9c686(0x358)](_0x558708,_0x57cfdf);else return 0x0;}this[_0xb9c686(0x110)](_0x57cfdf,'voice',!![],'');},Window_CharaCreateBattleVoice[_0x42c79f(0x1c0)]['createBattleVoiceList']=function(){const _0x4ac38d=_0x42c79f,_0x3f40b2=VisuMZ[_0x4ac38d(0x1a8)][_0x4ac38d(0x3a5)][_0x4ac38d(0x2c0)];for(const _0x17565d of _0x3f40b2){if(!this[_0x4ac38d(0x17b)](_0x17565d))continue;this[_0x4ac38d(0x226)](_0x17565d);}},Window_CharaCreateBattleVoice[_0x42c79f(0x1c0)][_0x42c79f(0x17b)]=function(_0x3948fd){const _0xe3ebf7=_0x42c79f;if(!_0x3948fd)return![];if(_0x3948fd[_0xe3ebf7(0x260)][_0xe3ebf7(0x223)]()==='')return![];if(_0x3948fd[_0xe3ebf7(0x260)][_0xe3ebf7(0xb1)]()[_0xe3ebf7(0x223)]()===_0xe3ebf7(0x272))return![];if(!_0x3948fd[_0xe3ebf7(0x21e)])return![];if(!_0x3948fd[_0xe3ebf7(0x195)])return![];if(_0x3948fd[_0xe3ebf7(0x195)]['length']<=0x0)return![];const _0x8d1ab5=_0x3948fd['CharaCreateDisplayName'];return _0x8d1ab5[_0xe3ebf7(0xb1)]()[_0xe3ebf7(0x223)]()!==_0xe3ebf7(0x272);},Window_CharaCreateBattleVoice[_0x42c79f(0x1c0)][_0x42c79f(0x226)]=function(_0x520bbb){const _0x4a342c=_0x42c79f;let _0x1b14f1=_0x520bbb['CharaCreateDisplayName'],_0x4e2ca4=0x0;Scene_CreateCharacter[_0x4a342c(0x3cd)]['showListIcons']&&(_0x4e2ca4=Window_CharaCreateBattleVoice['SETTINGS'][_0x4a342c(0x312)],_0x1b14f1=_0x4a342c(0x120)['format'](_0x4e2ca4,_0x1b14f1)),this[_0x4a342c(0x110)](_0x1b14f1,_0x4a342c(0x2a4),!![],_0x520bbb['Name']);},Window_CharaCreateBattleVoice[_0x42c79f(0x1c0)]['drawItem']=function(_0x3b6474){const _0x3dce18=_0x42c79f,_0x2f33ef=this[_0x3dce18(0x33b)](_0x3b6474);this[_0x3dce18(0x1cd)](),this[_0x3dce18(0x109)](this[_0x3dce18(0x24a)](_0x3b6474));const _0x45be12=this[_0x3dce18(0x225)](_0x3b6474),_0x272974=this[_0x3dce18(0x160)][_0x3b6474][_0x3dce18(0x2f1)];let _0xdb2d0b=this[_0x3dce18(0x1eb)](_0x3b6474);if(_0x45be12===_0x3dce18(0x2a4)&&this['_currentVoice']===_0x272974){if('UOTDi'!==_0x3dce18(0x224)){const _0x1dde14=Window_CharaCreateBattleVoice['SETTINGS']['currentTextColor'];_0xdb2d0b='\x5cC[%1]%2'['format'](_0x1dde14,_0xdb2d0b);}else{let _0x4df3c4=_0x487be4[_0x3dce18(0x1c7)],_0x4d8126=0x0;_0x12497f[_0x3dce18(0x3cd)][_0x3dce18(0x16a)]&&(_0x4d8126=_0x1ee342['DisplayIcon'],_0x4df3c4=_0x3dce18(0x120)[_0x3dce18(0x358)](_0x4d8126,_0x4df3c4)),this[_0x3dce18(0x110)](_0x4df3c4,_0x3dce18(0x11a),!![],_0x26f16e);}}this[_0x3dce18(0xa2)](_0xdb2d0b,_0x2f33ef['x'],_0x2f33ef['y']);},Window_CharaCreateBattleVoice[_0x42c79f(0x1c0)][_0x42c79f(0x16d)]=function(){const _0x1f45e2=_0x42c79f;this[_0x1f45e2(0x1fd)]()===_0x1f45e2(0x33d)&&SoundManager[_0x1f45e2(0x38d)]();},Window_CharaCreateBattleVoice[_0x42c79f(0x1c0)][_0x42c79f(0x3cf)]=function(){const _0x23961c=_0x42c79f,_0x53902d=this[_0x23961c(0x33c)]();if(_0x53902d===''){this['_currentVoice']=_0x53902d;return;}const _0xfa73ea=VisuMZ[_0x23961c(0x1a8)]['VoiceSet'][_0x53902d[_0x23961c(0x24c)]()[_0x23961c(0x223)]()];if(!_0xfa73ea)return;this[_0x23961c(0x288)]=_0x53902d;const _0x1f992e=SceneManager[_0x23961c(0x2da)][_0x23961c(0x2f0)](),_0x1cc995=VisuMZ[_0x23961c(0x1a8)][_0x23961c(0x3a5)],_0x2d6c41=_0xfa73ea[_0x23961c(0x195)];if(!_0x2d6c41)return;if(_0x2d6c41[_0x23961c(0x250)]<=0x0)return;const _0x1cdad8=_0x2d6c41[Math[_0x23961c(0x36d)](_0x2d6c41[_0x23961c(0x250)])],_0x152828={'name':_0x1cdad8,'volume':_0x1cc995['volume'],'pitch':_0x1cc995[_0x23961c(0xee)],'pan':_0x1cc995[_0x23961c(0x234)]};AudioManager[_0x23961c(0x15f)](_0x1f992e),AudioManager['playBattleVoice'](_0x152828,_0x1f992e);};function Window_CharaCreateNameCurrent(){this['initialize'](...arguments);}Window_CharaCreateNameCurrent[_0x42c79f(0x1c0)]=Object[_0x42c79f(0x133)](Window_Base[_0x42c79f(0x1c0)]),Window_CharaCreateNameCurrent['prototype']['constructor']=Window_CharaCreateNameCurrent,Window_CharaCreateNameCurrent[_0x42c79f(0x3cd)]={'bgType':VisuMZ[_0x42c79f(0x38a)]['Settings'][_0x42c79f(0x1d9)][_0x42c79f(0x22a)]??0x0},Window_CharaCreateNameCurrent[_0x42c79f(0x1c0)]['initialize']=function(_0x42345f){const _0x3f1e80=_0x42c79f;Window_Base['prototype'][_0x3f1e80(0x18a)][_0x3f1e80(0x376)](this,_0x42345f),this['openness']=0x0,this[_0x3f1e80(0xb7)]='';},Window_CharaCreateNameCurrent['prototype']['setText']=function(_0x5bffc8){const _0x519bc0=_0x42c79f;this[_0x519bc0(0xb7)]!==_0x5bffc8&&(_0x519bc0(0x121)===_0x519bc0(0xca)?this[_0x519bc0(0x18a)](...arguments):(this[_0x519bc0(0xb7)]=_0x5bffc8,this[_0x519bc0(0x15b)]()));},Window_CharaCreateNameCurrent['prototype'][_0x42c79f(0x108)]=function(){this['setText']('');},Window_CharaCreateNameCurrent['prototype'][_0x42c79f(0x15b)]=function(){const _0x248c89=_0x42c79f;this['contents'][_0x248c89(0x108)]();const _0x1e1c5e=this[_0x248c89(0x280)](this[_0x248c89(0xb7)])[_0x248c89(0x296)],_0x1181ee=Math[_0x248c89(0x365)]((this[_0x248c89(0x374)]-_0x1e1c5e)/0x2);this[_0x248c89(0xa2)](this[_0x248c89(0xb7)],_0x1181ee,0x0);};function Window_CharaCreateNameCommand(){const _0x3b04bc=_0x42c79f;this[_0x3b04bc(0x18a)](...arguments);}Window_CharaCreateNameCommand['prototype']=Object['create'](Window_Command[_0x42c79f(0x1c0)]),Window_CharaCreateNameCommand[_0x42c79f(0x1c0)][_0x42c79f(0x2e5)]=Window_CharaCreateNameCommand,Window_CharaCreateNameCommand[_0x42c79f(0x3cd)]={'bgType':VisuMZ['CharaCreationSys']['Settings'][_0x42c79f(0x1d9)][_0x42c79f(0x2c3)]??0x0,'acceptIcon':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x354)][_0x42c79f(0x17c)]??0xa4,'manualIcon':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x354)]['NameCommandWindow_ManualIcon']??0x53},Window_CharaCreateNameCommand['prototype'][_0x42c79f(0x18a)]=function(_0xadae07){const _0x32c9e0=_0x42c79f;Window_Command[_0x32c9e0(0x1c0)][_0x32c9e0(0x18a)][_0x32c9e0(0x376)](this,_0xadae07),this[_0x32c9e0(0x15c)]=0x0,this['deactivate']();},Window_CharaCreateNameCommand['prototype'][_0x42c79f(0x253)]=function(){const _0x3c34aa=_0x42c79f;this['addAcceptNameCommand'](),this[_0x3c34aa(0x259)](),this[_0x3c34aa(0x3ad)]();},Window_CharaCreateNameCommand[_0x42c79f(0x1c0)][_0x42c79f(0x3a2)]=function(){const _0x16c884=_0x42c79f;let _0x2226d1=TextManager[_0x16c884(0x2aa)][_0x16c884(0xb2)]['accept'],_0x73da93=Window_CharaCreateNameCommand[_0x16c884(0x3cd)]['acceptIcon'];Scene_CreateCharacter[_0x16c884(0x3cd)][_0x16c884(0x16a)]&&('vKJxN'===_0x16c884(0x131)?_0x131b27['VisuMZ_1_ElementStatusCore']&&this[_0x16c884(0xc6)]():_0x2226d1=_0x16c884(0x120)[_0x16c884(0x358)](_0x73da93,_0x2226d1));const _0x220aa0=SceneManager[_0x16c884(0x2da)][_0x16c884(0x369)][_0x16c884(0xb7)]!=='';this['addCommand'](_0x2226d1,'accept',_0x220aa0);},Window_CharaCreateNameCommand[_0x42c79f(0x1c0)][_0x42c79f(0x259)]=function(){const _0x3ee9f2=_0x42c79f;let _0x302083=TextManager['CHARA_CREATION_SYS'][_0x3ee9f2(0xb2)]['manual'],_0x3a0810=Window_CharaCreateNameCommand['SETTINGS'][_0x3ee9f2(0x19c)];if(Scene_CreateCharacter['SETTINGS']['showListIcons']){if(_0x3ee9f2(0x2a5)!==_0x3ee9f2(0x2a5)){let _0x471a44=_0xc24627['CHARA_CREATION_SYS']['naming'][_0x3ee9f2(0x176)],_0x4f273c=_0x5c707e[_0x3ee9f2(0x3cd)][_0x3ee9f2(0x19c)];_0x431c57[_0x3ee9f2(0x3cd)][_0x3ee9f2(0x16a)]&&(_0x471a44=_0x3ee9f2(0x120)['format'](_0x4f273c,_0x471a44)),this[_0x3ee9f2(0x110)](_0x471a44,'manual',!![]);}else _0x302083=_0x3ee9f2(0x120)[_0x3ee9f2(0x358)](_0x3a0810,_0x302083);}this[_0x3ee9f2(0x110)](_0x302083,_0x3ee9f2(0x176),!![]);},Window_CharaCreateNameCommand[_0x42c79f(0x1c0)][_0x42c79f(0x3ad)]=function(){const _0x376035=_0x42c79f,_0x39da69=VisuMZ['CharaCreationSys'][_0x376035(0x3a5)][_0x376035(0xa8)];for(const _0x3db587 of _0x39da69){if(!this[_0x376035(0xe5)](_0x3db587))continue;this[_0x376035(0x21d)](_0x3db587);}},Window_CharaCreateNameCommand[_0x42c79f(0x1c0)][_0x42c79f(0xe5)]=function(_0x327178){const _0xc3b6ba=_0x42c79f;if(!_0x327178)return![];return _0x327178[_0xc3b6ba(0xa8)][_0xc3b6ba(0x250)]>0x0;},Window_CharaCreateNameCommand['prototype'][_0x42c79f(0x21d)]=function(_0x4870ec){const _0x58c4bd=_0x42c79f;let _0x4f753f=_0x4870ec['DisplayText'],_0x224994=_0x4870ec[_0x58c4bd(0x140)];if(Scene_CreateCharacter['SETTINGS'][_0x58c4bd(0x16a)]){if(_0x58c4bd(0x1cc)===_0x58c4bd(0x1cc))_0x4f753f=_0x58c4bd(0x120)[_0x58c4bd(0x358)](_0x224994,_0x4f753f);else return this[_0x58c4bd(0x38e)]['fontSize']/_0x5f549a[_0x58c4bd(0x273)]();}this[_0x58c4bd(0x110)](_0x4f753f,_0x58c4bd(0x2bc),!![],_0x4870ec);},Window_CharaCreateNameCommand[_0x42c79f(0x1c0)][_0x42c79f(0x1f5)]=function(_0x150a66){const _0x35bb53=_0x42c79f,_0x3155c5=this[_0x35bb53(0x33b)](_0x150a66);this[_0x35bb53(0x1cd)](),this['changePaintOpacity'](this[_0x35bb53(0x24a)](_0x150a66)),this[_0x35bb53(0xa2)](this[_0x35bb53(0x1eb)](_0x150a66),_0x3155c5['x'],_0x3155c5['y'],_0x3155c5['width']);};function Window_CharaCreateNameEdit(){const _0x23b895=_0x42c79f;this[_0x23b895(0x18a)](...arguments);}Window_CharaCreateNameEdit['prototype']=Object['create'](Window_NameEdit[_0x42c79f(0x1c0)]),Window_CharaCreateNameEdit[_0x42c79f(0x1c0)][_0x42c79f(0x2e5)]=Window_CharaCreateNameEdit,Window_CharaCreateNameEdit['SETTINGS']={'bgType':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)]['NameEditWindow_BgType']??0x0,'maxLength':VisuMZ[_0x42c79f(0x38a)]['Settings'][_0x42c79f(0x1d9)][_0x42c79f(0x282)]??0x10,'nameWidthPadding':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)]['NameEditWindow_NameWidthPadding']??0x8},Window_CharaCreateNameEdit[_0x42c79f(0x1c0)][_0x42c79f(0x18a)]=function(_0xee3415){const _0x323a54=_0x42c79f;Window_NameEdit['prototype'][_0x323a54(0x18a)][_0x323a54(0x376)](this,_0xee3415),this[_0x323a54(0x15c)]=0x0,this[_0x323a54(0x2df)]();},Window_CharaCreateNameEdit['prototype'][_0x42c79f(0xbc)]=function(){return 0x0;},Window_CharaCreateNameEdit[_0x42c79f(0x1c0)][_0x42c79f(0x1b1)]=function(){},Window_CharaCreateNameEdit[_0x42c79f(0x1c0)][_0x42c79f(0x2dd)]=function(_0x304db9,_0x6582a8){const _0x12bd31=_0x42c79f;_0x6582a8=_0x6582a8||Window_CharaCreateNameEdit[_0x12bd31(0x3cd)][_0x12bd31(0x2d5)],Window_NameEdit[_0x12bd31(0x1c0)][_0x12bd31(0x2dd)][_0x12bd31(0x376)](this,_0x304db9,_0x6582a8),this[_0x12bd31(0x15b)]();},Window_CharaCreateNameEdit[_0x42c79f(0x1c0)][_0x42c79f(0x1c5)]=function(_0x212f7a){const _0x4d1577=_0x42c79f;this[_0x4d1577(0x351)]=_0x212f7a,this[_0x4d1577(0x1ad)]=this['_name'][_0x4d1577(0x250)],this[_0x4d1577(0x16f)]=this[_0x4d1577(0x351)],this[_0x4d1577(0x15b)]();},Window_CharaCreateNameEdit[_0x42c79f(0x1c0)]['itemRect']=function(_0x35707f){const _0x45f2d4=_0x42c79f,_0x34a403=Window_NameEdit['prototype'][_0x45f2d4(0x2f7)][_0x45f2d4(0x376)](this,_0x35707f);return _0x34a403['y']=0x0,_0x34a403;},Window_CharaCreateNameEdit[_0x42c79f(0x1c0)]['charWidth']=function(){const _0x3a2756=_0x42c79f;let _0x8e97ef=Window_NameEdit[_0x3a2756(0x1c0)][_0x3a2756(0xbe)][_0x3a2756(0x376)](this);return _0x8e97ef+=Window_CharaCreateNameEdit[_0x3a2756(0x3cd)][_0x3a2756(0x27d)],_0x8e97ef;},Window_CharaCreateNameEdit['prototype'][_0x42c79f(0xed)]=function(_0x229315){const _0x523919=_0x42c79f,_0x2c6f04=this[_0x523919(0x2f7)](_0x229315);this[_0x523919(0x1cd)](),this['drawText'](this[_0x523919(0x351)][_0x229315]||'',_0x2c6f04['x'],_0x2c6f04['y'],_0x2c6f04[_0x523919(0x296)],'center');};function Window_CharaCreateNameInput(){const _0x580be6=_0x42c79f;this[_0x580be6(0x18a)](...arguments);}Window_CharaCreateNameInput[_0x42c79f(0x1c0)]=Object['create'](Window_NameInput[_0x42c79f(0x1c0)]),Window_CharaCreateNameInput[_0x42c79f(0x1c0)]['constructor']=Window_CharaCreateNameInput,Window_CharaCreateNameInput['SETTINGS']={'bgType':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x1d1)]??0x0},Window_CharaCreateNameInput[_0x42c79f(0x1c0)][_0x42c79f(0x18a)]=function(_0x39005e){const _0x54fe74=_0x42c79f;Window_NameInput[_0x54fe74(0x1c0)][_0x54fe74(0x18a)][_0x54fe74(0x376)](this,_0x39005e),this['openness']=0x0,this[_0x54fe74(0x2df)]();},Window_CharaCreateNameInput[_0x42c79f(0x1c0)]['setEditWindow']=function(_0x507fa0){const _0x3653f8=_0x42c79f;this[_0x3653f8(0x370)]=_0x507fa0,this['refresh'](),this['updateCursor']();},Window_CharaCreateNameInput[_0x42c79f(0x1c0)][_0x42c79f(0x28f)]=function(){const _0x408efc=_0x42c79f;if(this[_0x408efc(0x370)][_0x408efc(0xf6)]())SoundManager[_0x408efc(0x380)]();else{if(_0x408efc(0x24d)===_0x408efc(0x24d))SoundManager[_0x408efc(0x380)](),SceneManager[_0x408efc(0x2da)][_0x408efc(0x204)]();else return _0x52095f['CharaCreationSys'][_0x408efc(0x3a5)][_0x408efc(0x1d9)][_0x408efc(0x129)]['call'](this);}};function Window_CharaCreateConfirmData(){const _0x4a35c6=_0x42c79f;this[_0x4a35c6(0x18a)](...arguments);}Window_CharaCreateConfirmData['prototype']=Object['create'](Window_Base['prototype']),Window_CharaCreateConfirmData[_0x42c79f(0x1c0)][_0x42c79f(0x2e5)]=Window_CharaCreateConfirmData,Window_CharaCreateConfirmData[_0x42c79f(0x3cd)]={'bgType':VisuMZ['CharaCreationSys'][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x34f)]??0x0},Window_CharaCreateConfirmData['prototype'][_0x42c79f(0x18a)]=function(_0x1f13c6){const _0x2322e4=_0x42c79f;Window_Base['prototype'][_0x2322e4(0x18a)][_0x2322e4(0x376)](this,_0x1f13c6),this['openness']=0x0;},Window_CharaCreateConfirmData['prototype']['refresh']=function(){const _0x2b266e=_0x42c79f;this[_0x2b266e(0x38e)]['clear'](),this[_0x2b266e(0xae)](),this[_0x2b266e(0x33e)](),this['drawCost']();},Window_CharaCreateConfirmData[_0x42c79f(0x1c0)]['drawEntry']=function(_0x3024ce,_0x48a01e,_0x5aad0a){const _0x26ea03=_0x42c79f,_0x1316fc=this[_0x26ea03(0x360)](),_0x5844bc=_0x1316fc,_0x56c52c=this[_0x26ea03(0x25d)]()*_0x5aad0a;this[_0x26ea03(0xa2)](_0x3024ce,_0x5844bc,_0x56c52c),this[_0x26ea03(0x16e)](),this[_0x26ea03(0xa2)](_0x48a01e,_0x5844bc+_0x1316fc*0x4,_0x56c52c+this[_0x26ea03(0x25d)]());},Window_CharaCreateConfirmData['prototype'][_0x42c79f(0xae)]=function(){const _0x17b4c2=_0x42c79f,_0x3ff9da=TextManager[_0x17b4c2(0x2aa)][_0x17b4c2(0x20d)][_0x17b4c2(0x399)],_0x7ce6e8=SceneManager['_scene'][_0x17b4c2(0x369)][_0x17b4c2(0xb7)];this['drawEntry'](_0x3ff9da,_0x7ce6e8,0x0);},Window_CharaCreateConfirmData[_0x42c79f(0x1c0)][_0x42c79f(0x33e)]=function(){const _0x51e387=_0x42c79f,_0x559125=TextManager['CHARA_CREATION_SYS'][_0x51e387(0x20d)]['class'],_0xe77af8=SceneManager[_0x51e387(0x2da)][_0x51e387(0x25b)][_0x51e387(0x33c)]();let _0x12da5c=_0xe77af8[_0x51e387(0xd3)];this[_0x51e387(0x31c)]&&!this['_retrainSettings'][_0x51e387(0x3b4)]['class']&&(_0x12da5c=this[_0x51e387(0x212)][_0x51e387(0x20b)][_0x51e387(0x30c)]()['id']);const _0x3065cf=$dataClasses[_0x12da5c];let _0x6087c5=_0x3065cf[_0x51e387(0x399)];if(Scene_CreateCharacter[_0x51e387(0x3cd)][_0x51e387(0x16a)]){if(_0x51e387(0x1a0)!==_0x51e387(0xcb)){const _0x55e041=VisuMZ['CharaCreationSys'][_0x51e387(0xd0)],_0x444a6e=_0x3065cf[_0x51e387(0x1c1)]||'';let _0x1fd122=0x0;if(_0x444a6e[_0x51e387(0xe0)](_0x55e041[_0x51e387(0x2ad)])){if('trSYO'===_0x51e387(0x2be))_0x1fd122=Number(RegExp['$1']);else{if(_0x2a50fc)_0x542451[_0x51e387(0x32a)](_0x50fd33,!![]);}}_0x6087c5=_0x51e387(0x120)[_0x51e387(0x358)](_0x1fd122,_0x6087c5);}else _0x15a27e['playCancel']();}this['drawEntry'](_0x559125,_0x6087c5,0x2);},Window_CharaCreateConfirmData['prototype'][_0x42c79f(0x12f)]=function(){const _0xde235a=_0x42c79f,_0x5a1a1c=TextManager['CHARA_CREATION_SYS'][_0xde235a(0x20d)][_0xde235a(0x350)],_0xb8ccad=SceneManager[_0xde235a(0x2da)][_0xde235a(0x211)]();if(_0xb8ccad<=0x0)return;let _0x2e648e=String(_0xb8ccad);if(Imported['VisuMZ_3_VisualGoldDisplay']){if(_0xde235a(0x13d)===_0xde235a(0x13d))_0x2e648e=VisuMZ[_0xde235a(0x1d0)][_0xde235a(0x126)](_0xb8ccad);else{let _0x1f67bf=0x0;for(let _0x533768=0x1;_0x533768<_0x2f4580[_0xde235a(0x250)];_0x533768++){const _0x31de37=_0x38ceb4[_0x533768],_0x9ec670=_0x31de37['name'][_0xde235a(0x24c)]()[_0xde235a(0x223)]();(_0x9ec670===''||_0x9ec670===_0xde235a(0x291))&&(_0x1f67bf+=0x1);}return _0x1f67bf;}}else{if(_0xde235a(0x1b9)===_0xde235a(0x2c8)){_0x31b915[_0xde235a(0x266)]&&this[_0xde235a(0x1b7)](_0x205792,_0x391d03['x'],_0x3f1b02['y']+0x2);_0x105074['x']+=_0x3c89b3[_0xde235a(0x2b6)](_0x449dfc[_0xde235a(0x28c)]*this[_0xde235a(0xa0)]());if(this['fontSizeRatio']()===0x1)_0x329821['x']+=0x4;}else _0x2e648e+='\x5cC[%1]%2\x5cC[0]'[_0xde235a(0x358)](VisuMZ[_0xde235a(0x381)][_0xde235a(0x3a5)]['Color'][_0xde235a(0x1c2)],TextManager[_0xde235a(0x382)]),_0x2e648e+='\x5cI[%1]'[_0xde235a(0x358)](VisuMZ[_0xde235a(0x381)][_0xde235a(0x3a5)][_0xde235a(0x150)]['GoldIcon']||0x0);}this[_0xde235a(0x249)](_0x5a1a1c,_0x2e648e,0x4);},Window_CharaCreateConfirmData['prototype'][_0x42c79f(0x10f)]=function(_0x1235b1){const _0x4f85f9=_0x42c79f;this[_0x4f85f9(0x31c)]=!![],this[_0x4f85f9(0x212)]=_0x1235b1;};function Window_CharaCreateConfirmCommand(){const _0x340a03=_0x42c79f;this[_0x340a03(0x18a)](...arguments);}Window_CharaCreateConfirmCommand['prototype']=Object['create'](Window_HorzCommand[_0x42c79f(0x1c0)]),Window_CharaCreateConfirmCommand['prototype']['constructor']=Window_CharaCreateConfirmCommand,Window_CharaCreateConfirmCommand[_0x42c79f(0x3cd)]={'bgType':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)][_0x42c79f(0x1d9)][_0x42c79f(0x11c)]??0x0,'confirmIcon':VisuMZ[_0x42c79f(0x38a)]['Settings'][_0x42c79f(0x354)][_0x42c79f(0x2e1)]??0xa4,'cancelIcon':VisuMZ['CharaCreationSys']['Settings'][_0x42c79f(0x354)][_0x42c79f(0x11c)]??0xa8,'playShopSound':VisuMZ[_0x42c79f(0x38a)][_0x42c79f(0x3a5)]['Window']['ConfirmCommandWindow_PlayShopSound']??!![]},Window_CharaCreateConfirmCommand[_0x42c79f(0x1c0)]['initialize']=function(_0x1619a0){const _0x246cdf=_0x42c79f;Window_HorzCommand[_0x246cdf(0x1c0)][_0x246cdf(0x18a)][_0x246cdf(0x376)](this,_0x1619a0),this[_0x246cdf(0x15c)]=0x0,this[_0x246cdf(0x2df)]();},Window_CharaCreateConfirmCommand[_0x42c79f(0x1c0)][_0x42c79f(0x395)]=function(){return 0x2;},Window_CharaCreateConfirmCommand[_0x42c79f(0x1c0)][_0x42c79f(0x253)]=function(){const _0x95afcd=_0x42c79f;this[_0x95afcd(0x239)](),this['addReviseCommand']();},Window_CharaCreateConfirmCommand[_0x42c79f(0x1c0)][_0x42c79f(0x239)]=function(){const _0x38b7a5=_0x42c79f;let _0x3121c5=TextManager[_0x38b7a5(0x2aa)][_0x38b7a5(0x20d)]['ok'],_0x170b62=Window_CharaCreateConfirmCommand[_0x38b7a5(0x3cd)][_0x38b7a5(0x341)];Scene_CreateCharacter['SETTINGS'][_0x38b7a5(0x16a)]&&(_0x3121c5=_0x38b7a5(0x120)[_0x38b7a5(0x358)](_0x170b62,_0x3121c5)),this[_0x38b7a5(0x110)](_0x3121c5,_0x38b7a5(0x1dd),!![]);},Window_CharaCreateConfirmCommand[_0x42c79f(0x1c0)]['addReviseCommand']=function(){const _0x1a5e1f=_0x42c79f;let _0x43b9cb=TextManager[_0x1a5e1f(0x2aa)][_0x1a5e1f(0x20d)][_0x1a5e1f(0x2e3)],_0x31660b=Window_CharaCreateConfirmCommand[_0x1a5e1f(0x3cd)][_0x1a5e1f(0x347)];Scene_CreateCharacter[_0x1a5e1f(0x3cd)][_0x1a5e1f(0x16a)]&&(_0x43b9cb=_0x1a5e1f(0x120)[_0x1a5e1f(0x358)](_0x31660b,_0x43b9cb)),this[_0x1a5e1f(0x110)](_0x43b9cb,_0x1a5e1f(0x2e3),!![]);},Window_CharaCreateConfirmCommand[_0x42c79f(0x1c0)][_0x42c79f(0x1f5)]=function(_0x451086){const _0x46e5b6=_0x42c79f,_0x1982eb=this[_0x46e5b6(0x33b)](_0x451086);this['resetTextColor'](),this['changePaintOpacity'](this[_0x46e5b6(0x24a)](_0x451086));const _0x1ca85f=this[_0x46e5b6(0x1eb)](_0x451086),_0x34d140=this['textSizeEx'](_0x1ca85f)[_0x46e5b6(0x296)],_0x434021=_0x1982eb['x']+Math[_0x46e5b6(0x365)]((_0x1982eb['width']-_0x34d140)/0x2);this[_0x46e5b6(0xa2)](_0x1ca85f,_0x434021,_0x1982eb['y']);},Window_CharaCreateConfirmCommand[_0x42c79f(0x1c0)][_0x42c79f(0x16d)]=function(){const _0x5b7358=_0x42c79f;SoundManager[_0x5b7358(0x148)]();};function Window_SelectCreateCharacter(){const _0x496982=_0x42c79f;this[_0x496982(0x18a)](...arguments);}Window_SelectCreateCharacter[_0x42c79f(0x1c0)]=Object[_0x42c79f(0x133)](Window_MenuStatus[_0x42c79f(0x1c0)]),Window_SelectCreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x2e5)]=Window_SelectCreateCharacter,Window_SelectCreateCharacter[_0x42c79f(0x3cd)]={'bgType':VisuMZ['CharaCreationSys']['Settings'][_0x42c79f(0x1d9)][_0x42c79f(0x9e)]??0x0},Window_SelectCreateCharacter['prototype'][_0x42c79f(0x18a)]=function(_0x182a4d){const _0x2d870d=_0x42c79f;this['_filterType']='none',Window_MenuStatus[_0x2d870d(0x1c0)]['initialize'][_0x2d870d(0x376)](this,_0x182a4d),this[_0x2d870d(0x1be)](),this['selectLast']();},Window_SelectCreateCharacter[_0x42c79f(0x1c0)]['setFilterType']=function(_0x7dc157){this['_filterType']=_0x7dc157,this['refresh']();},Window_SelectCreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x264)]=function(){const _0x4cffa0=_0x42c79f;if(this[_0x4cffa0(0x315)]===_0x4cffa0(0x3c3))return $gameParty[_0x4cffa0(0x14c)]();if(this[_0x4cffa0(0x315)]==='retrain')return $gameParty[_0x4cffa0(0x356)]();return $gameParty[_0x4cffa0(0x2ed)]();},Window_SelectCreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x113)]=function(){const _0x3521e1=_0x42c79f;return this[_0x3521e1(0x264)]()[_0x3521e1(0x250)];},Window_SelectCreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x245)]=function(){const _0x54eba9=_0x42c79f;return ImageManager[_0x54eba9(0x39d)];},Window_SelectCreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x2f0)]=function(_0x2e013f){const _0x47928a=_0x42c79f;return this[_0x47928a(0x264)]()[_0x2e013f];},Window_SelectCreateCharacter['prototype'][_0x42c79f(0x3d2)]=function(){const _0x56527b=_0x42c79f;return this[_0x56527b(0x2f0)](this[_0x56527b(0xf7)]());},Window_SelectCreateCharacter[_0x42c79f(0x1c0)][_0x42c79f(0x168)]=function(){const _0x51fcb7=_0x42c79f;Window_Selectable[_0x51fcb7(0x1c0)][_0x51fcb7(0x168)][_0x51fcb7(0x376)](this);},Window_SelectCreateCharacter['prototype'][_0x42c79f(0x3a3)]=function(){this['smoothSelect'](0x0);},Window_SelectCreateCharacter['prototype'][_0x42c79f(0x16d)]=function(){const _0x339236=_0x42c79f;if(this[_0x339236(0x315)]===_0x339236(0x3c3)){if('TSDvb'!=='PKDAi')SoundManager['playDismissCreatedCharacter']();else{const _0x4cc7f5=this[_0x339236(0x33b)](_0x551627);this[_0x339236(0x1cd)](),this[_0x339236(0x109)](this[_0x339236(0x24a)](_0x58d022)),this['drawTextEx'](this[_0x339236(0x1eb)](_0x31414b),_0x4cc7f5['x'],_0x4cc7f5['y'],_0x4cc7f5[_0x339236(0x296)]);}}else{if(this['_filterType']==='retrain')SoundManager[_0x339236(0x2c2)]();else{if(_0x339236(0x268)==='MbXra'){let _0x3b8e1d=_0x339236(0x1f2);_0x3b8e1d+='VisuMZ_2_CharaCreationSys\x20is\x20lacking\x20a\x20trait\x20option\x20for\x20%1\x20trait\x20type\x20that\x20lacks\x20cost\x20options.\x0a'[_0x339236(0x358)](_0x5e8851),_0x3b8e1d+=_0x339236(0x398),_0x152653(_0x3b8e1d),_0x519e0b[_0x339236(0x185)]();}else Window_Selectable[_0x339236(0x1c0)][_0x339236(0x16d)]['call'](this);}}};