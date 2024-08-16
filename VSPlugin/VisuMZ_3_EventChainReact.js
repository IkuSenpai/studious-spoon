//=============================================================================
// VisuStella MZ - Event Chain Reactions
// VisuMZ_3_EventChainReact.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_EventChainReact = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventChainReact = VisuMZ.EventChainReact || {};
VisuMZ.EventChainReact.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.05] [EventChainReact]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Event_Chain_Reactions_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Making events react to anything but the player requires so much work in RPG
 * Maker MZ. This plugin will change that by adding in many different ways to
 * cause event changes to take place. This includes streamlined forms of push
 * and pull, catalysts that cause reactions, pressure plates and heavy objects,
 * chargers and conductors, a form of timed decay, and objects that submerge
 * when moved into the water.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Plugin Command added to let you push events with more efficiency and less
 *   headache, allowing them to only move and play sound effects when possible.
 * * The ability to pull objects, an absolute headache to event, is now also
 *   added through the form of a Plugin Command for ease of use.
 * * Events can react to calaytic events that spread energy outward. When
 *   reacting, the target event(s) can turn on/off switches and self switches.
 * * Plugin Commands added to help you create catalysts at specific coordinates
 *   so you can fire off your own chain reactions.
 * * Objects can be assigned as a heavy weight and placed on top of pressure
 *   plate events to turn on switches when there's a heavy object on top or
 *   turn off switches when there isn't one.
 * * Events can produce charges and others can conduct them. When events have a
 *   conduction current running through them, they can become powered up and
 *   turn on switches. When they don't, those switches are turned off.
 * * Events can decay over time. When the decay timer runs out, switches can be
 *   turned on or off.
 * * Events can submerge into the water if pushed into it. When done, they can
 *   become bridges for the player or other events to walk over.
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
 * * VisuMZ_1_EventsMoveCore
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
 * Event Mechanics - Pushing and Pulling
 * ============================================================================
 *
 * While push and pull mechanics can be achieved through common event systems,
 * sometimes, hiccups can occur that makes life a little bit more difficult,
 * such as determining if an event has successfully moved in order to decide if
 * a sound effect should be played or not.
 * 
 * This plugin streamlines the push and pull mechanics by incorporating them
 * into simplistic Plugin Commands for you to use as you wish.
 *
 * ---
 * 
 * ==== Push ====
 * 
 * Pushing an event requires the player to be located adjacent to the event
 * (meaning next to the event and not diagonally). The direction the player is
 * facing will determine the direction the event will go. If there is a viable
 * tile for the event to move, the event will be "pushed" in that direction.
 * Pushing can only travel in the down, left, right, up directions.
 * 
 * Through the push-related Plugin Commands, you can decide if you want the
 * player to move forward alongside the event. If you do, both the player's and
 * the event's speeds will become synchronized to whoever has the lower move
 * speed. Otherwise, if the player does not move with the event, then the speed
 * at which the event is pushed will be its own.
 * 
 * The player cannot push an event onto a ladder tile nor can the player push
 * while on a ladder tile.
 * 
 * Pushing an event can have a sound effect. This sound effect will only play
 * if the event is pushed successfully.
 * 
 * ---
 * 
 * ==== Pull ====
 * 
 * Pulling an event requires the player to be located adjacent to the event
 * (meaning next to the event and not diagonally). There must be an empty tile
 * behind the player for the player to back into. If there is a viable tile for
 * the player to move to, the player will move backwards into that tile while
 * "pulling" the event into the player's previous position. Pulling can only
 * travel in the down, left, right, up directions.
 * 
 * Unlike the push-related Plugin Commands, the pull-related Plugin Commands do
 * not have an option to determine if the player can or cannot move. The player
 * character will always move backwards while pulling the event backwards. Both
 * the player's and event's move speeds will be synchronized to whoever has the
 * lower move speed.
 * 
 * Pulling an event can have a sound effect. This sound effect will only play
 * if the event is pulled successfully.
 * 
 * ---
 * 
 * Pushing and pulling event objects do not inherently have chain reaction
 * effects. However, there's a lot of position-based chain reactions for events
 * meaning that being able to push or pull the events into position will cause
 * a potential chain reaction to occur.
 * 
 * ---
 *
 * ============================================================================
 * Event Mechanics - Catalysts and Reactors
 * ============================================================================
 *
 * A new type of event interaction added through this plugin comes in the form
 * of catalysts and reactors. These are things like events that are sources of
 * fire that when put near flammable events will make those flammable events
 * burst aflame.
 *
 * ---
 * 
 * ==== Catalysts ====
 * 
 * A catalyst event is one that spreads a reactionary source like a "flame".
 * The flame's spread direction can be determined through notetags. If there
 * are any nearby events that would react to the catalyst, those events will
 * change switches and/or self switches as instructed, allowing a chain
 * reaction to occur.
 * 
 * For example, a torch is considered a "flame" source and therefore serves as
 * a catalyst for the "flame" reactor type. If placed near flammable objects
 * like dried plants, those dried plants can react to it by burning up.
 * 
 * A catalyst event will spread this reactionary source in timed intervals.
 * The reason why they're not immediate or instant is to prevent lag as well as
 * some catalysts work slower than others, even in real life scenarios. This is
 * to mimic the nature of how catalysts work in ways that are familiar to
 * players experience the chain reactions.
 * 
 * Catalysts don't have to come from events. They can be manually started with
 * Plugin Commands at specific coordinates.
 * 
 * ---
 * 
 * ==== Reactors ====
 * 
 * A reactor event is one that, upon exposure to a specific type of catalyst,
 * like a "flame", will react a certain way, by either turning ON or OFF a
 * switch, multiple switches, or self switches.
 * 
 * For example, dried plants will react to a "flame" type catalyst. When they
 * are near a "flame" source like a torch, the dried plant event will turn on
 * a self switch to change it into a burning flame sprite, indicating that it's
 * been set on fire.
 * 
 * Reactor events can also trigger from non-event catalysts through Plugin
 * Commands, assuming that the Plugin Command catalyst aims at the reactor
 * event with a matching catalyst type.
 * 
 * ---
 * 
 * ==== Types ====
 * 
 * An event chain reaction is based off a "type". The catalyst will have a type
 * that it spreads while the target event will have a type that it reacts to.
 * These catalyst types can be named to your needs as the game developer.
 * 
 * Catalyst events can generate multiple types and reactor events can react to
 * multiple types as well. Some events can spread one type as a catalyst while
 * reacting to another type. Mix and match them as needed.
 * 
 * ---
 * 
 * Knowing how to utilize catalysts and reactors will allow you to create a
 * very interactable environment in your game. Dried plants can be set aflame
 * and spread to other nearby dried plants. When on fire, they can be doused
 * with water creating puddles. The puddles can conduct electricity and more.
 * 
 * ---
 *
 * ============================================================================
 * Event Mechanics - Pressure Plates and Heavy Objects
 * ============================================================================
 *
 * A common mechanic you see in RPG puzzles is the pressure plate. When a heavy
 * object is on top of it, something will turn on or open. When there is no
 * heavy object on top, something will turn off or close. The pressure plate
 * chain reaction works similarly here.
 *
 * ---
 * 
 * ==== Pressure Plates ====
 * 
 * Pressure plate events are events that will trigger a switch or self switch
 * to the ON position if there is a heavy object located on top of it. If there
 * isn't, then the linked switch or self switches will be set to OFF.
 * 
 * Once an event is declared a pressure plate, it will automatically change its
 * priority type to "Below characters", allowing the player and other events
 * to travel on top of it.
 * 
 * A common example of a pressure plate event used would be a button on the
 * floor linked to a normally closed gate. Both the pressure plate button and
 * the gate are linked to a switch. If that switch is ON, then the gate opens
 * allowing the player to pass through it. A common solution to this puzzle
 * would be that the player needs to find a heavy object to hold down the
 * pressure plate and pass through the gate.
 * 
 * ---
 * 
 * ==== Heavy Objects ====
 * 
 * Events marked as heavy objects are capable of activating pressure plates on
 * the map. They just simply have to share the same coordinates as the pressure
 * plates they're on top of to activate them.
 * 
 * When events are marked as heavy objects, their priority level becomes
 * "Same as characters" in order to be able to register the connection between
 * heavy objects and pressure plates.
 * 
 * The Plugin Parameters allow you to determine if the player and the player's
 * followers are considered heavy objects. This means that the player is
 * capable of activating pressure plates if he/she is considered heavy. However
 * this can ruin certain types of games so there is an option to turn that off.
 * 
 * The Plugin Parameters also allow you to set events with "Same as Characters"
 * priority level to automatically be heavy objects. This allows wandering
 * NPC's to set on pressure plates and activate them as well. Events that are
 * "Below characters" or "Above characters" will be exempt from this automatic
 * assignment by default.
 * 
 * ---
 * 
 * ==== Switches and Self Switches ====
 * 
 * Unlike catalysts and reactors, decay, and submerging, the switches and self
 * switches here will only turn ON and OFF under specific conditions. If a
 * heavy object is on top of the pressure plate, the assigned switch(es) will
 * turn ON. If there is no heavy object on top of the pressure plate, then the
 * assigned switch(es) will turn OFF.
 * 
 * ---
 * 
 * Heavy objects are the key to making pressure plates work. Therefore, it's
 * important to be able to move around the heavy objects, too. Pushing and
 * pulling can make this a reality. By assigning the ability to push or pull
 * the heavy objects, pressure plate utility becomes very accessible.
 * 
 * ---
 *
 * ============================================================================
 * Event Mechanics - Chargers and Conductors
 * ============================================================================
 *
 * Conduction is a new event mechanic added through this plugin. Some events
 * can produce a type of current while another event conducts it. Conducting
 * events will have a switch, multiple switches, and/or self switches that turn
 * ON or OFF depending on the events' conduction state.
 *
 * ---
 * 
 * ==== Chargers ====
 * 
 * Charger events can emit a "current" of a specific type like "electricity".
 * This electricity is emitted in the specified direction as a current. Any
 * nearby events that conduct this type of current will have their linked
 * switch(es) turned ON or OFF.
 * 
 * An event charger is always emitting the current instantaneously. Therefore,
 * anything that conducts the matching current type will also be set to the
 * appropriate conduction state a frame or two later and remain that way.
 * 
 * Event chargers do not interact with reactors or catalysts inherently (though
 * you can make them do so with catalyst and/or reactor notetags).
 * 
 * ---
 * 
 * ==== Conductors ====
 * 
 * Conductor events can receive a current and change its conduction state. They
 * can take something like "electricity", conduct it, and pass it to other
 * conductor events. Conductors will only conduct the specified current "type"
 * marked by its notetag(s) and/or comment tag(s).
 * 
 * Once conducted, any linked switch(es) or self switch(es) to the conductor
 * event will turn ON. If there is no matching current running through it,
 * those linked switch(es) will turn OFF.
 * 
 * Event chargers do not interact with reactors or catalysts inherently (though
 * you can make them do so with catalyst and/or reactor notetags).
 * 
 * ---
 * 
 * ==== Direction ====
 * 
 * Both chargers and conductors have a direction in which the current travels.
 * By default, if no notetags or comment tags are used to control this, then
 * the current will emit to adjacent conductor events. Otherwise, you can
 * control the flow of a current to go left and right, up and down, etc.
 * 
 * The same notetag and comment tag is used for both chargers and conductors.
 * 
 * ---
 * 
 * ==== Types ====
 * 
 * Event chargers and conductors are based off a "type" of current. Conductors
 * can only receive and pass on matching current types from chargers and/or
 * other conductors. These current types can be named to your needs as the
 * game developer.
 * 
 * Charger events can generate multiple types of currents and the conductor
 * events can conduct to multiple types as well. Some events can charge on type
 * of current while conducting another. Mix and match them as needed.
 * 
 * ---
 * 
 * ==== Switches and Self Switches ====
 * 
 * Unlike catalysts and reactors, decay, and submerging, the switches and self
 * switches here will only turn ON and OFF under specific conditions. If a
 * conductor has a current running through it, the assigned switch(es) will
 * turn ON. If there is no current going through the conductor, then the
 * assigned switch(es) will turn OFF.
 * 
 * ---
 * 
 * Chargers and conductors allow you to create environmental interactions that
 * differ from catalysts and reactions. Where catalysts and reactions typically
 * have a one directional change, the chargers and conductors utilize the
 * current and conduction system to produce a toggleable change capable of
 * shifting back and forth.
 * 
 * This can be used for a system where the player can choose which door to 
 * temporarily open or close depending on where the current goes based off the
 * conductors on the map.
 * 
 * ---
 *
 * ============================================================================
 * Event Mechanics - Decay
 * ============================================================================
 *
 * Not all events need to interact with one another to produce a reaction. An
 * event with decay mechanic will simply react to itself existing for a set
 * amount of time on the map.
 *
 * ---
 * 
 * ==== Decay Timing ====
 * 
 * A decaying event can be set to decay in a preset amount of frames or a
 * custom amount of frames (your choice as the developer). Once the decay timer
 * is set, it automatically starts counting down. Once it reaches 0, then any
 * linked switch(es) or self switch(es) will turn ON or OFF.
 * 
 * The event does not necessarily have to remove itself once the decay timer
 * has reached 0. It can if it wants to, but all the same, the event can remain
 * in its current state if it doesn't.
 * 
 * If the event page changes while a decay countdown is happening, the
 * countdown timer will reset to whatever is the newest countdown timer on the
 * event page's comments. If an event notetag is used to encompass the global
 * countdown timer, then it will reset to that timer each time the page changes
 * forward.
 * 
 * ---
 * 
 * This can be used for a number of things, ranging from bombs to ever so
 * slightly transforming events. It removes the need to utilize a parallel
 * process event to make a change.
 * 
 * ---
 *
 * ============================================================================
 * Event Mechanics - Submerge
 * ============================================================================
 *
 * Events can now interact with water tiles by submerging into them. If an
 * event is submerged, any linked switch(es) and/or self switch(es) will turn
 * ON or OFF. These can be used to form temporary bridges and the like.
 *
 * ---
 * 
 * ==== Submersive ====
 * 
 * When an object is submersive, it can be moved into a water tile. Immediate
 * contact with the water tile will cause it to submerge and linked switch(es)
 * and/or self switch(es) will be turned ON or OFF depending on the notetags
 * and/or comment tags used.
 * 
 * Once an event is moved into the water and submerges, it can no longer be
 * pushed or pulled.
 * 
 * ---
 * 
 * ==== Bridge ====
 * 
 * A common usage for submersive events is to change them into a temporary
 * bridge that lets the player and other events to travel over what was
 * otherwise intraversable waters. Though this normally could be done with
 * events that use graphics from the tileset with passabilities, becoming a
 * bridge was not available to events that used graphics from other sources.
 * 
 * The notetag/comment tag allows the event to become a bridge and allowing it
 * to become passable no matter from which direction. This ignores the tileset
 * graphic source requirement and binds it to a tag instead.
 * 
 * ---
 * 
 * This feature is best used with the push/pull mechanics. Submersive objects
 * forming temporary land bridges allows for a more interactable environment.
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
 * VisuMZ_0_CoreEngine
 * 
 * Due to the nature of this plugin, the VisuStella MZ Core Engine's plugin
 * parameter "Smart Event Collision" will be automatically turned on in order
 * for the features provided by this plugin to properly work.
 * 
 * ---
 *
 * ============================================================================
 * Warning! RPG Maker MZ Version 1.5.0+ Water-Tile Bug!
 * ============================================================================
 *
 * It seems like there's a new bug that occurs if you create a tileset from
 * scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 * does is it causes many tiles to become water tiles without intending to.
 * You can find this out by turning off all the plugins in your project,
 * putting a Ship or Boat on what are normally ground tiles, and then seeing
 * the Ship or Boat traverse through it.
 * 
 * Naturally, this causes problems with the Event Chain Reactions plugin as the
 * water tiles are important for submerging reactions.
 * 
 * There are two ways to fix this. We cannot fix it through code in this plugin
 * as it's a problem that involves the tileset json data there are ways to work
 * around it so that you can get the proper water-flags to go where they need
 * to be at.
 *
 * ---
 * 
 * 1. Copy a working un-bugged tileset onto the currently bugged one and
 *    reapply the tile features like passability, terrain tags, etc. This will
 *    make sure the water-passability tiles get copied over correctly.
 * 
 * 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *    un-bugged tileset (usually a pre-existing tileset when a new project is
 *    made), click the "Copy Page" button, go to the bugged tileset and press
 *    "Paste Page". You'll have to reapply any different properties like
 *    passabilities and terrain tags, but the water tile flags should now be
 *    working properly.
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
 * === Positioning-Related Notetags ===
 * 
 * ---
 *
 * <Push>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be pushed when using the Plugin Command:
 *   "Positioning: Push Player Front".
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Pull>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - Allows this event to be pushed when using the Plugin Command:
 *   "Positioning: Pull Player Front".
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Push Pull>
 * <Pull Push>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be pushed when using the Plugin Commands:
 *   "Positioning: Push Player Front" and "Positioning: Pull Player Front".
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Catalyst and Reactor-Related Notetags ===
 * 
 * ---
 *
 * <type speed Catalyst: range>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes this event into a 'type' catalyst source that spreads at 'speed'
 *   intervals onto events within 'range'.
 * - Replace 'type' with a string representing the reaction type to be spread
 *   to other event reactors of the same 'type'.
 *   - This is NOT case sensitive.
 * - Replace 'speed' with any of the following text to represent the repeating
 *   interval at which the catalyst event spreads:
 *   - 'tick', 'fast', 'quick', 'short', 'average', 'slow', 'long', 'late'
 *   - Do NOT include the quotes.
 *   - Faster speeds can potentially cause lag, so use slower speeds to ensure
 *     FPS stability.
 * - Replace 'range' with any of the following to determine the range:
 *   - 'exact' - Coordinates must equal the catalyst event's X, Y position.
 *   - 'front' - Coordinates equal the tile in front of the catalyst.
 *   - 'back' - Coordinates equal the tile behind the catalyst.
 *   - 'cw' - Coordinates equal the tile clockwise from catalyst.
 *   - 'ccw' - Coordinates equal the tile counterclockwise from catalyst.
 *   - 'adjacent' - Any of the 4 tiles surrounding the catalyst.
 *   - 'near' - Any of the 8 tiles surrounding the catalyst.
 *   - 'down' - Coordinates equal the tile below the catalyst on the map.
 *   - 'left' - Coordinates equal the tile left of the catalyst on the map.
 *   - 'right' - Coordinates equal the tile right of the catalyst on the map.
 *   - 'up' - Coordinates equal the tile above the catalyst on the map.
 *   - 'lower left' - Coordinates equal the tile to catalyst's lower left.
 *   - 'lower right' - Coordinates equal the tile to catalyst's lower right.
 *   - 'upper left' - Coordinates equal the tile to catalyst's upper left.
 *   - 'upper right' - Coordinates equal the tile to catalyst's upper right.
 *   - Do NOT include the quotes.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <type x Frames Catalyst: range>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes this event into a 'type' catalyst source that spreads at 'x' frame
 *   intervals onto events within 'range'.
 * - Replace 'type' with a string representing the reaction type to be spread
 *   to other event reactors of the same 'type'.
 *   - This is NOT case sensitive.
 * - Replace 'x' with a number representing the number of frames that determine
 *   the ongoing intervals the catalysts cycle through.
 *   - Faster speeds can potentially cause lag, so use slower speeds to ensure
 *     FPS stability.
 * - Replace 'range' with any of the following to determine the range:
 *   - 'exact' - Coordinates must equal the catalyst event's X, Y position.
 *   - 'front' - Coordinates equal the tile in front of the catalyst.
 *   - 'back' - Coordinates equal the tile behind the catalyst.
 *   - 'cw' - Coordinates equal the tile clockwise from catalyst.
 *   - 'ccw' - Coordinates equal the tile counterclockwise from catalyst.
 *   - 'adjacent' - Any of the 4 tiles surrounding the catalyst.
 *   - 'near' - Any of the 8 tiles surrounding the catalyst.
 *   - 'down' - Coordinates equal the tile below the catalyst on the map.
 *   - 'left' - Coordinates equal the tile left of the catalyst on the map.
 *   - 'right' - Coordinates equal the tile right of the catalyst on the map.
 *   - 'up' - Coordinates equal the tile above the catalyst on the map.
 *   - 'lower left' - Coordinates equal the tile to catalyst's lower left.
 *   - 'lower right' - Coordinates equal the tile to catalyst's lower right.
 *   - 'upper left' - Coordinates equal the tile to catalyst's upper left.
 *   - 'upper right' - Coordinates equal the tile to catalyst's upper right.
 *   - Do NOT include the quotes.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <type Reactor Switch On: x>
 * <type Reactor Switches On: x, x, x>
 * 
 * <type Reactor Switch Off: x>
 * <type Reactor Switches Off: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes this event into a 'type' reactor that upon a catalyst creating a
 *   reaction will turn any linked switch(es) or self switch(es) ON or OFF.
 *   - The ON variant will turn the linked switch ON when a reaction occurs.
 *   - The OFF variant will turn the linked switch OFF when a reaction occurs.
 * - Replace 'type' with a string representing the reaction type to be react
 *   to from catalysts of the same 'type'.
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to change multiple switches or self switches
 *     upon a successful reaction.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Pressure Plate and Heavy Object-Related Notetags ===
 * 
 * ---
 *
 * <Pressure Plate Switch: x>
 * <Pressure Plate Switches: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Turns this event into a pressure plate that upon having a heavy object on
 *   it will trigger any linked switch(es) and self switch(es) to turn ON and
 *   upon stepping off will also turn them OFF.
 * - Using this notetag will set the event's priority to "Below characters".
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to change multiple switches or self switches
 *     upon a successful activation.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Heavy>
 * <Heavy Object>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as a heavy object that can stand on top of and activate
 *   pressure plate events.
 * - Using this notetag will set the event's priority to "Same as characters".
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Not Heavy>
 * <Not Heavy Object>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as an object not heavy enough to activate pressure
 *   plates events.
 * - This is used to offset the Plugin Parameter that sets "Same as characters"
 *   events as heavy objects.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <All Pressure Plates Switch: x>
 * <All Pressure Plates Switches: x, x, x>
 *
 * - Used for: Map Notetags
 * - If all native pressure plate events on the map has been stepped on, turn
 *   ON the switch(es). Otherwise, set the switch(es) to OFF.
 * - Erased and spawned pressure plate events do not count.
 * - Replace 'x' with a number to represent a numeric global switch.
 *   - If a numeric switch value happens to be a map switch or map self due to
 *     VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *
 * ---
 * 
 * === Charger and Conductor-Related Notetags ===
 * 
 * ---
 *
 * <type Charger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as a charger event that produces a 'type' current that
 *   can be received by same 'type' conductors.
 * - Replace 'type' with a string representing the current type released from
 *   this charger event to other conductor events of the same 'type'.
 *   - This is NOT case sensitive.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <type Conductor Switch: x>
 * <type Conductor Switches: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as a conductor event that receives a 'type' current and
 *   will turn on any linked switch(es) or self switch(es) based on its current
 *   conduction state.
 * - Conductor events will also transfer its current to other conductors of the
 *   same 'type'.
 * - Replace 'type' with a string representing the current type released from
 *   this charger event to other conductor events of the same 'type'.
 *   - This is NOT case sensitive.
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to apply multiple switches or self switches
 *     based on the conduction state.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Current Direction: range>
 * <Charge Direction: range>
 * <Conduct Direction: range>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used for charger events and conductor events to determine which direction
 *   the current will travel.
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
 * - Replace 'range' with any of the following to determine the range:
 *   - 'exact' - Coordinates must equal the catalyst event's X, Y position.
 *   - 'front' - Coordinates equal the tile in front of the catalyst.
 *   - 'back' - Coordinates equal the tile behind the catalyst.
 *   - 'cw' - Coordinates equal the tile clockwise from catalyst.
 *   - 'ccw' - Coordinates equal the tile counterclockwise from catalyst.
 *   - 'adjacent' - Any of the 4 tiles surrounding the catalyst.
 *   - 'near' - Any of the 8 tiles surrounding the catalyst.
 *   - 'down' - Coordinates equal the tile below the catalyst on the map.
 *   - 'left' - Coordinates equal the tile left of the catalyst on the map.
 *   - 'right' - Coordinates equal the tile right of the catalyst on the map.
 *   - 'up' - Coordinates equal the tile above the catalyst on the map.
 *   - 'lower left' - Coordinates equal the tile to catalyst's lower left.
 *   - 'lower right' - Coordinates equal the tile to catalyst's lower right.
 *   - 'upper left' - Coordinates equal the tile to catalyst's upper left.
 *   - 'upper right' - Coordinates equal the tile to catalyst's upper right.
 *   - Do NOT include the quotes.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Decay-Related Notetags ===
 * 
 * ---
 *
 * <speed Decay Switch On: x>
 * <speed Decay Switches On: x, x, x>
 *
 * <speed Decay Switch Off: x>
 * <speed Decay Switches On: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as one that upon availability, will start decaying and
 *   start a countdown timer, where upon reaching 0, any linked switch(es) and
 *   self switch(es) will have their values changed.
 *   - The ON variant will turn the linked switch ON when the decay occurs.
 *   - The OFF variant will turn the linked switch OFF when the decay occurs.
 * - Replace 'speed' with any of the following text to represent the duration
 *   time of the decay countdown:
 *   - 'tick', 'fast', 'quick', 'short', 'average', 'slow', 'long', 'late'
 *   - Do NOT include the quotes.
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to change multiple switches or self switches
 *     upon the decay countdown reaching 0.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <x Frames Decay Switch On: id>
 * <x Frames Decay Switches On: id, id, id>
 * 
 * <x Frames Decay Switch Off: id>
 * <x Frames Decay Switches Off: id, id, id>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as one that upon availability, will start decaying and
 *   after x frames, any linked switch(es) and self switch(es) will have their
 *   values changed.
 *   - The ON variant will turn the linked switch ON when the decay occurs.
 *   - The OFF variant will turn the linked switch OFF when the decay occurs.
 * - Replace 'x' with a number representing the number of frames that determine
 *   the total frames before the decay occurs.
 *   - Faster speeds can potentially cause lag, so use slower speeds to ensure
 *     FPS stability.
 * - Replace 'id' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'id' values to change multiple switches or self switches
 *     upon the decay countdown reaching 0.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * === Submerge-Related Notetags ===
 * 
 * ---
 *
 * <Submerge Switch On: x>
 * <Submerge Switches On: x, x, x>
 * 
 * <Submerge Switch Off: x>
 * <Submerge Switches Off: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as a submersive event, which upon being on top of a water
 *   tile, will instantly alter any linked switch(es) and self switch(es).
 *   - The ON variant will turn the linked switch ON when the decay occurs.
 *   - The OFF variant will turn the linked switch OFF when the decay occurs.
 * - This notetag variant will treat both shallow water and deep water tiles
 *   the same as one another.
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to change multiple switches or self switches
 *     upon being submerged into water.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Shallow Submerge Switch On: x>
 * <Shallow Submerge Switches On: x, x, x>
 * 
 * <Shallow Submerge Switch Off: x>
 * <Shallow Submerge Switches Off: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as a submersive event, which upon being on top of a water
 *   tile, will instantly alter any linked switch(es) and self switch(es).
 *   - The ON variant will turn the linked switch ON when the decay occurs.
 *   - The OFF variant will turn the linked switch OFF when the decay occurs.
 * - This notetag variant will only trigger on shallow water tiles and not
 *   deep water tiles.
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to change multiple switches or self switches
 *     upon being submerged into shallow water.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Deep Submerge Switch On: x>
 * <Deep Submerge Switches On: x, x, x>
 * 
 * <Deep Submerge Switch Off: x>
 * <Deep Submerge Switches Off: x, x, x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks this event as a submersive event, which upon being on top of a water
 *   tile, will instantly alter any linked switch(es) and self switch(es).
 *   - The ON variant will turn the linked switch ON when the decay occurs.
 *   - The OFF variant will turn the linked switch OFF when the decay occurs.
 * - This notetag variant will only trigger on deep water tiles and not
 *   shallow water tiles.
 * - Replace 'x' with either a number to represent a numeric global switch or
 *   a letter to represent a native RPG Maker MZ self switch.
 *   - If a numeric switch value happens to be a self switch or map switch due
 *     to VisuMZ_1_EventsMoveCore, then it will be treated as such.
 *   - Insert multiple 'x' values to change multiple switches or self switches
 *     upon being submerged into deep water.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Submerged Effect>
 * 
 * <Submerged Effect: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adds a visual effect to the event, making it bob up and down like at the
 *   surface of the water.
 * - Use the <Submerged Effect: x> variant to visually submerge the event
 *   further, making it appear heavier and deeper in the water.
 * - Replace 'x' with a number representing how many pixels deep to submerge
 *   the event visually.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Bridge>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Marks the event as a bridge, allowing the player and other events to walk
 *   on top of it, even if it is over water.
 * - Using this notetag will set the event's priority to "Below characters".
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Useful-Related Notetags ===
 * 
 * ---
 * 
 * <Exit Reset Self Data>
 * 
 * - Used for: Event Notetags ONLY
 * - When the player leaves the current map, all Self Switches and Self
 *   Variables related to this event will be reset.
 * - This notetag is a part of VisuMZ_1_EventsMoveCore but is recommended to be
 *   listed here with this plugin.
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
 * === Catalyst Plugin Commands ===
 * 
 * ---
 *
 * Catalyst: Create Catalyst at Event Location
 * - Creates a catalyst for a spreadable event chain reaction at a target
 *   event's relative coordinates.
 *
 *   Event ID:
 *   - The ID of the event to start catalyst from.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Reaction Type:
 *   - What is the reaction type's string?
 *   - Case does not matter.
 *
 *   Relative Location:
 *   - What is the location of the reaction relative to the event?
 *
 * ---
 *
 * Catalyst: Create Catalyst at Player Location
 * - Creates a catalyst for a spreadable event chain reaction at the player's
 *   relative coordinates.
 *
 *   Reaction Type:
 *   - What is the reaction type's string?
 *   - Case does not matter.
 *
 *   Relative Location:
 *   - What is the location of the reaction relative to the player?
 *
 * ---
 *
 * Catalyst: Create Catalyst at X, Y
 * - Creates a catalyst for a spreadable event chain reaction at
 *   X, Y coordinates.
 *
 *   Reaction Type:
 *   - What is the reaction type's string?
 *   - Case does not matter.
 *
 *   X Coordinate:
 *   Y Coordinate:
 *   - Target X/Y coordinate to create catalyst at.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Positioning Plugin Commands ===
 * 
 * ---
 *
 * Positioning: Pull Player Front
 * - If an event in front the player can be pulled, do so.
 * - Event requires <Pull> or <Pull Push> notetag.
 * 
 *   Check Touch Triggers?:
 *   - Check triggers after moving and pulling?
 *
 *   Sound Effect:
 *   - Play this sound effect if the event can be pulled.
 *
 * ---
 *
 * Positioning: Pull This Event
 * - Pulls this event backward by one tile if possible.
 * - Requires the player to align up adjacently.
 * 
 *   Check Touch Triggers?:
 *   - Check triggers after moving and pulling?
 *
 *   Sound Effect:
 *   - Play this sound effect if the event can be pulled.
 *
 * ---
 *
 * Positioning: Push Player Front
 * - If an event in front the player can be pushed, do so.
 * - Event requires <Push> or <Push Pull> notetag.
 *
 *   Move Player Forward?:
 *   - Move player forward while pushing the event?
 * 
 *     Check Touch Triggers?:
 *     - Check triggers after moving and pushing?
 *
 *   Sound Effect:
 *   - Play this sound effect if the event can be pushed.
 *
 * ---
 *
 * Positioning: Push This Event
 * - Pushes this event forward by one tile if possible.
 * - Requires the player to align up adjacently.
 *
 *   Move Player Forward?:
 *   - Move player forward while pushing the event?
 * 
 *     Check Touch Triggers?:
 *     - Check triggers after moving and pushing?
 *
 *   Sound Effect:
 *   - Play this sound effect if the event can be pushed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Pressure Plate Settings
 * ============================================================================
 *
 * Pressure Plate-related settings used by this plugin.
 *
 * ---
 *
 * Settings
 * 
 *   Heavy Player?:
 *   - Make the player character a "heavy object" capable of activating
 *     pressure plates?
 * 
 *   Heavy Followers?:
 *   - Make the player followers "heavy objects" capable of activating
 *     pressure plates?
 * 
 *   Heavy "Same" Events?:
 *   - Make events with "Same as Characters" priority capable of
 *     activating pressure plates?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Speed Settings
 * ============================================================================
 *
 * Speed-related settings for specific notetags used by this plugin.
 *
 * ---
 *
 * Settings
 * 
 *   Tick:
 *   Fast:
 *   Quick:
 *   Short:
 *   Average:
 *   Slow:
 *   Long:
 *   Late:
 *   - How many frames to pass when using this speed for an Event Chain
 *     Reaction notetag?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Submerge Settings
 * ============================================================================
 *
 * Settings related to the submerge function for this plugin.
 *
 * ---
 *
 * Sound Effect
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
 * Visual
 * 
 *   Submerge Speed:
 *   - What speed should objects submerge at?
 *   - Lower numbers are faster.
 *   - Higher numbers are slower.
 * 
 *   Oscillation Distance:
 *   - What is the maximum oscillation distance?
 *   - Lower numbers are closer.
 *   - Higher numbers are further.
 * 
 *   Submerge Rate:
 *   - What rate should objects oscillate at?
 *   - Lower numbers are slower.
 *   - Higher numbers are faster.
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
 * Version 1.05: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where if player would still be considered a heavy object
 *    after pushing a heavy object off a pressure plate if Plugin Parameters
 *    have set the player as non-Heavy. Fix made by Arisu.
 * 
 * Version 1.04: October 12, 2023
 * * Documentation Update!
 * ** It appears we've left out some notetags/comment tags that could be used:
 * *** <x Frames Decay Switch On: id>
 * *** <x Frames Decay Switches On: id, id, id>
 * *** <x Frames Decay Switch Off: id>
 * *** <x Frames Decay Switches Off: id, id, id>
 * ** These should now appear in the help file.
 * 
 * Version 1.03: August 17, 2023
 * * Bug Fixes!
 * ** Fixed an error that would cause a crash upon using the "Return to Title
 *    Screen" event command with the "Event Title Screen" plugin installed. Fix
 *    made by Irina.
 * 
 * Version 1.02: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause certain notetags to not work properly when
 *    they have another notetag in front of them. Fix made by Arisu.
 * 
 * Version 1.01: December 15, 2022
 * * Documentation Update!
 * ** Added new section: "Warning! RPG Maker MZ Version 1.5.0+ Water-Tile Bug!"
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** Naturally, this causes problems with the Event Chain Reactions plugin as
 *     the water tiles are important for submerging reactions.
 * *** There are two ways to fix this. We cannot fix it through code in this
 *     plugin as it's a problem that involves the tileset json data there are
 *     ways to work around it so that you can get the proper water-flags to go
 *     where they need to be at.
 * **** 1. Copy a working un-bugged tileset onto the currently bugged one and
 *      reapply the tile features like passability, terrain tags, etc. This
 *      will make sure the water-passability tiles get copied over correctly.
 * **** 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *      un-bugged tileset (usually a pre-existing tileset when a new project is
 *      made), click the "Copy Page" button, go to the bugged tileset and press
 *      "Paste Page". You'll have to reapply any different properties like
 *      passabilities and terrain tags, but the water tile flags should now be
 *      working properly.
 * 
 * Version 1.00 Official Release Date: January 4, 2023
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
 * @command CatalystCreateAtEvent
 * @text Catalyst: Create Catalyst at Event Location
 * @desc Creates a catalyst for a spreadable event chain reaction
 * at a target event's relative coordinates.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc The ID of the event to start catalyst from.
 * Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg Type:str
 * @text Reaction Type
 * @desc What is the reaction type's string?
 * Case does not matter.
 * @default >>>ATTENTION<<<
 *
 * @arg Location:str
 * @text Relative Location
 * @type select
 * @option -
 * @option exact
 * @option -
 * @option front
 * @option back
 * @option cw
 * @option ccw
 * @option -
 * @option adjacent
 * @option nearby
 * @option -
 * @option down
 * @option left
 * @option right
 * @option up
 * @option -
 * @option lower left
 * @option lower right
 * @option upper left
 * @option upper right
 * @option -
 * @desc What is the location of the reaction relative to the event?
 * @default exact
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CatalystCreateAtPlayer
 * @text Catalyst: Create Catalyst at Player Location
 * @desc Creates a catalyst for a spreadable event chain reaction
 * at the player's relative coordinates.
 *
 * @arg Type:str
 * @text Reaction Type
 * @desc What is the reaction type's string?
 * Case does not matter.
 * @default >>>ATTENTION<<<
 *
 * @arg Location:str
 * @text Relative Location
 * @type select
 * @option -
 * @option exact
 * @option -
 * @option front
 * @option back
 * @option cw
 * @option ccw
 * @option -
 * @option adjacent
 * @option nearby
 * @option -
 * @option down
 * @option left
 * @option right
 * @option up
 * @option -
 * @option lower left
 * @option lower right
 * @option upper left
 * @option upper right
 * @option -
 * @desc What is the location of the reaction relative to the player?
 * @default front
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CatalystCreateAtXy
 * @text Catalyst: Create Catalyst at X, Y
 * @desc Creates a catalyst for a spreadable event chain reaction
 * at X, Y coordinates.
 *
 * @arg Type:str
 * @text Reaction Type
 * @desc What is the reaction type's string?
 * Case does not matter.
 * @default >>>ATTENTION<<<
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @type combo
 * @option 0
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @desc Target X coordinate to create catalyst at.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @type combo
 * @option 0
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @desc Target Y coordinate to create catalyst at.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Positioning
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PositioningPullPlayerFront
 * @text Positioning: Pull Player Front
 * @desc If an event in front the player can be pulled, do so.
 * Event requires <Pull> or <Pull Push> notetag.
 * 
 * @arg CheckTriggers:eval
 * @text Check Touch Triggers?
 * @type boolean
 * @on Move
 * @off Don't Move
 * @desc Check triggers after moving and pulling?
 * @default true
 * 
 * @arg Sound:struct
 * @text Sound Effect
 * @type struct<Sound>
 * @desc Play this sound effect if the event can be pulled.
 * @default {"name:str":"Earth3","volume:num":"60","pitch:num":"150","pan:num":"0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PositioningPullThisEvent
 * @text Positioning: Pull This Event
 * @desc Pulls this event backward by one tile if possible.
 * Requires the player to align up adjacently.
 * 
 * @arg CheckTriggers:eval
 * @text Check Touch Triggers?
 * @type boolean
 * @on Move
 * @off Don't Move
 * @desc Check triggers after moving and pulling?
 * @default true
 * 
 * @arg Sound:struct
 * @text Sound Effect
 * @type struct<Sound>
 * @desc Play this sound effect if the event can be pulled.
 * @default {"name:str":"Earth3","volume:num":"60","pitch:num":"150","pan:num":"0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PositioningPushPlayerFront
 * @text Positioning: Push Player Front
 * @desc If an event in front the player can be pushed, do so.
 * Event requires <Push> or <Push Pull> notetag.
 * 
 * @arg MoveForward:eval
 * @text Move Player Forward?
 * @type boolean
 * @on Move
 * @off Don't Move
 * @desc Move player forward while pushing the event?
 * @default true
 * 
 * @arg CheckTriggers:eval
 * @text Check Touch Triggers?
 * @parent MoveForward:eval
 * @type boolean
 * @on Move
 * @off Don't Move
 * @desc Check triggers after moving and pushing?
 * @default true
 *
 * @arg Sound:struct
 * @text Sound Effect
 * @type struct<Sound>
 * @desc Play this sound effect if the event can be pushed.
 * @default {"name:str":"Earth3","volume:num":"60","pitch:num":"150","pan:num":"0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PositioningPushThisEvent
 * @text Positioning: Push This Event
 * @desc Pushes this event forward by one tile if possible.
 * Requires the player to align up adjacently.
 * 
 * @arg MoveForward:eval
 * @text Move Player Forward?
 * @type boolean
 * @on Move
 * @off Don't Move
 * @desc Move player forward while pushing the event?
 * @default true
 * 
 * @arg CheckTriggers:eval
 * @text Check Touch Triggers?
 * @parent MoveForward:eval
 * @type boolean
 * @on Move
 * @off Don't Move
 * @desc Check triggers after moving and pushing?
 * @default true
 *
 * @arg Sound:struct
 * @text Sound Effect
 * @type struct<Sound>
 * @desc Play this sound effect if the event can be pushed.
 * @default {"name:str":"Earth3","volume:num":"60","pitch:num":"150","pan:num":"0"}
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
 * @param EventChainReact
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param PressurePlate:struct
 * @text Pressure Plate Settings
 * @type struct<PressurePlate>
 * @desc Pressure Plate-related settings used by this plugin.
 * @default {"HeavyPlayerCharacter:eval":"true","HeavyFollowers:eval":"true","HeavySameEvents:eval":"true"}
 *
 * @param Speed:struct
 * @text Speed Settings
 * @type struct<Speed>
 * @desc Speed-related settings for specific notetags used by this plugin.
 * @default {"tick:num":"1","fast:num":"8","quick:num":"15","short:num":"20","avg:num":"30","slow:num":"40","long:num":"60","late:num":"120"}
 *
 * @param Submerge:struct
 * @text Submerge Settings
 * @type struct<Submerge>
 * @desc Settings related to the submerge function for this plugin.
 * @default {"Sound":"","soundName:str":"Water1","soundVolume:num":"50","soundPitch:num":"60","soundPan:num":"0","Visual":"","updateFrequency:num":"4","oscillationDistance:num":"8","oscillationSpeed:num":"0.05"}
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
 * PressurePlate Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PressurePlate:
 *
 * @param HeavyPlayerCharacter:eval
 * @text Heavy Player?
 * @type boolean
 * @on Heavy
 * @off Not Heavy
 * @desc Make the player character a "heavy object"
 * capable of activating pressure plates?
 * @default true
 * 
 * @param HeavyFollowers:eval
 * @text Heavy Followers?
 * @type boolean
 * @on Heavy
 * @off Not Heavy
 * @desc Make the player followers "heavy objects"
 * capable of activating pressure plates?
 * @default true
 * 
 * @param HeavySameEvents:eval
 * @text Heavy "Same" Events?
 * @type boolean
 * @on Heavy
 * @off Not Heavy
 * @desc Make events with "Same as Characters" priority
 * capable of activating pressure plates?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Speed Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Speed:
 *
 * @param tick:num
 * @text Tick
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 1
 *
 * @param fast:num
 * @text Fast
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 8
 *
 * @param quick:num
 * @text Quick
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 15
 *
 * @param short:num
 * @text Short
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 20
 *
 * @param avg:num
 * @text Average
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 30
 *
 * @param slow:num
 * @text Slow
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 40
 *
 * @param long:num
 * @text Long
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 60
 *
 * @param late:num
 * @text Late
 * @type number
 * @min 1
 * @desc How many frames to pass when using this speed for an
 * Event Chain Reaction notetag?
 * @default 120
 *
 */
/* ----------------------------------------------------------------------------
 * Submerge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Submerge:
 *
 * @param Sound
 * @text Sound Effect
 *
 * @param soundName:str
 * @text Filename
 * @parent Sound
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Water1
 *
 * @param soundVolume:num
 * @text Volume
 * @parent Sound
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 50
 *
 * @param soundPitch:num
 * @text Pitch
 * @parent Sound
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 60
 *
 * @param soundPan:num
 * @text Pan
 * @parent Sound
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Visual
 * 
 * @param updateFrequency:num
 * @text Submerge Speed
 * @parent Visual
 * @type number
 * @min 1
 * @desc What speed should objects submerge at?
 * Lower numbers are faster. Higher numbers are slower.
 * @default 4
 * 
 * @param oscillationDistance:num
 * @text Oscillation Distance
 * @parent Visual
 * @type number
 * @min 1
 * @desc What is the maximum oscillation distance?
 * Lower numbers are closer. Higher numbers are further.
 * @default 8
 * 
 * @param oscillationSpeed:num
 * @text Submerge Rate
 * @parent Visual
 * @desc What rate should objects oscillate at?
 * Lower numbers are slower. Higher numbers are faster.
 * @default 0.05
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
 * @default Earth3
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
//=============================================================================

const _0x352ada=_0x43a9;function _0x29d3(){const _0x3ae4ba=['Sound','getConductionState','prototype','JSON','ONgbT','_character','727195uHedPY','needsUpdatePressurePlate','update','VisuMZ_1_EventsMoveCore','Bridge','toLowerCase','clearConductionState','isShipPassable','requestRefreshCondution','isBridge','some','Game_Event_isMapPassable','findTargetSprite','Charger','PositioningPushPlayerFront','canResurface','jumpHeight','submergedEffectOffset','_submergeEffectOffset','cVlGA','PositioningPushThisEvent','submergedEventsXy','_gatherWait','Game_Map_checkPassage','nearby','needsUpdateConduction','%1,%2','isVisible','getPressurePlateSwitches','ROUTE_END','bridgeEventsXy','isSmartEventCollisionOn','STRUCT','moveDiagonally','roundYWithDirection','ROUTE_DIR_FIX_ON','format','isShallowSubmersible','in\x20order\x20for\x20VisuMZ_3_EventChainReact\x20to\x20work.','DecayFrameOff','aieIK','AllWeightSwitch','updatePosition','_conductCache','fast','vehicles','cyUMC','EVENT_CHAIN_REACT_SPEED','PressurePlate','randomInt','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Game_Follower_chaseCharacter','trim','includes','inWaterTile','quick','_bridge','note','Game_Map_refreshIfNeeded','late','max','JcUct','pitch','Speed','oscillationDistance','ConvertParams','ACalI','round','width','match','refreshIfNeeded','cTyiN','VnJZb','ROUTE_CHANGE_SPEED','DeepSubmergeOff','route','checkEventChainReactStringTags','Game_Event_erase','Type','isSceneMap','tGeXs','isBusy','call','canConductType','ARRAYNUM','_pressurePlateSwitches','Settings','VisuMZ_0_CoreEngine','erase','moveStraight','ARRAYFUNC','_followers','Game_Event_setupPageSettings','initSubmerged','VpIzF','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','layeredTiles','soundName','spreadChargeAtLocation','BRoJx','upper\x20right','tick','split','ROUTE_THROUGH_OFF','min','PositioningPullThisEvent','ROUTE_MOVE_RIGHT','_eventId','requestRefreshConduction','iBCtn','registerCommand','front','qOCIk','frontY','next','xCEEt','reactSwitchOff','turnOffAllConductions','Trdga','VisuMZ_1_EventsMoveCore\x20needs\x20to\x20be\x20updated\x20','_priorityType','backY','mqHmF','_decaySwitchOn','pushTargetEvent','HeavyPlayerCharacter','LFeZk','frontX','DeepSubmergeOn','parse','_pageIndex','SYams','MeFTX','updateFrame','12141sluwnT','list','VPfgX','shiftY','right','_submergeOffsetY','adjacent','_heavyObjCache','event','ozEyL','createChainReactionCatalystAtXy','roundXWithDirection','FIkVb','LbdYH','Map\x20%1\x20Switch\x20%2','Current\x20tileset\x20has\x20incomplete\x20flag\x20data.','isMoving','updateDecayOn','MsTNB','getConductDirections','eventsXy','clockwise','CatalystCreateAtXy','pan','name','_decaySwitchOff','initEventChainReactEffects','_decayOnDuration','canPass','canUpdateSubmergeFrame','status','version','left','wtGRJ','refreshEventChainReact','cvFep','_submergeShallowOn','long','McPAy','canSubmergeShallow','79571SjZQXe','ShallowSubmergeOn','constructor','ccwY','_addedHitbox','updateEventChainReactSpread','EventsMoveCore','pos','_data','getLastPluginCommandInterpreter','chaseCharacter','ARRAYSTRUCT','spreadChargeAtCoordinate','3955716grWBrz','chasePullXy','DecaySpeedOff','_canPush','return\x200','spreadChainReactionFromTarget','updateSubmergeFrame','CheckTriggers','aWLIB','toUpperCase','HeavyObj','NUM','back','setupEventChainReactNotetags','canSpreadEventChainReact','iQHaI','OtJBi','1187110bTooGV','_chainReactions','setup','_erased','canSubmergeDeep','setValue','NotHeavyObj','lower\x20right','soundPitch','gatherFollowers','SubmergedEffectOffset','short','AWotx','requestRefreshPressurePlate','getChargeTypes','mxfzn','Sprite_Character_updatePosition','initialize','isHeavyObject','_submergeDistance','EventReactOff','moveSpeed','DxAga','cos','eventChainReactSwitchChange','exact','synchConductionStates','_conductTypes','DWBUW','RpwlP','30FllXfR','hasCharge','poTgk','checkPassage','_characterId','updateDecay','EventReactOn','AddEntries','Sprite_Character_initialize','isInAirship','VisuMZ_2_FurnitureSystem','EventChainReact','filter','backX','isDeepSubmersible','208arroqg','zwUnh','spreadChargeType','MHwpf','hGevS','_submergeDeepOn','spreadCharges','cwY','this.pullFollowers(true)','slow','_conductionState','isJumping','forceMoveRoute','FqsGT','CatalystCreateAtPlayer','6xllegC','54724hkpxub','_submergedEventsXy','down','MBZYR','MoveForward','pullFollowers','_requestRefreshConduction','xUOmz','description','characterName','Game_Event_clearPageSettings','748WkiqfL','JHGbY','TwvgB','setupPageSettings','_heavyObject','Game_Map_refresh','SubmergedEffect','xnwVX','Location','_bridgeEventsXy','this._gatherWait\x20=\x20true','EVAL','code','_spriteset','length','playSubmerge','RelativeCoordinates','isNormalPriority','_submergeEffect','playSe','_submergeCache','RrGYp','upper\x20left','CFScr','isPressurePlate','Submerge','map','_canPull','ROUTE_MOVE_LEFT','events','mapId','ccwX','deltaXFrom','_decayOffDuration','isWaterTile','test','page','_chainSpreads','isRegionAllowPass','CanPull','keys','Game_Character_updateRoutineMove','_pullingFollowers','Sprite_Character_updateFrame','FUNC','SUBMERGE','_conductDir','DecayFrameOn','floor','isBoatPassable','PositioningPullPlayerFront','isOnLadder','push','near','ARRAYSTR','refreshPressurePlate','Game_Map_setup','_submergeShallowOff','SlsHx','eventId','sjGfW','isSpawnedEvent','volume','ChargeDir','setupPressurePlateNotetags','avg','ShallowSubmergeOff','needsUpdateSubmerge','_resurfaceOff','UdcOM','_submergeRng','parameters','SvRcY','updateDecayOff','%1,%2,Self\x20Switch\x20%3','this.pullFollowers(false)','_requestRefreshPressurePlate','sGyQp','updateFrequency','_scene','isLowest','RegExp','isSubmergePassable','followers','lastX','11MSjQdu','iKWQJ','DecaySpeedOn','_submergeDeepOff','pullTargetEvent','_mapId','ROUTE_MOVE_DOWN','1539uOyoto','UPpYf','oFrUm','SpreadReactSpeed','bDEoX','replace','applyPressurePlateSwitchChange','checkPassageNoEvents','isConductor','getConductionTypes','lWnHT','cwX','setWaitMode','processPressurePlateChanges','ROUTE_SCRIPT','YJurW','this.checkEventTriggerHere([1,\x202])','setupEventChainReactCommentTags','refreshConduction','yorQG','anyHeavyObjOnThisTile','_chargeTypes','isSubmerged','needsUpdateDecay','jtRvQ','SpreadReactFrame','>\x0a<','oyRJv','ccw','refresh','isMapPassable','oscillationSpeed','updateEventChainReact','initEventChainReactType','ROUTE_PLAY_SE','updateSubmergedOffset','setMoveSpeed','reactSwitchOn','Game_CharacterBase_update','exit','QnKMk','distance','PosX','isLadder','every','reactToType','_allPressurePlateSwitches','isRegionForbidPass','lastY','EventID','submergedEffect','ROUTE_MOVE_UP','_through','UwdNC','Conductor','frameCount','ROUTE_DIR_FIX_OFF','clearPageSettings','_resurfaceOn','direction','updateRoutineMove','clearSubmergeData','GsLWK','canUpdateSubmergedOffset','_submergeHeight'];_0x29d3=function(){return _0x3ae4ba;};return _0x29d3();}function _0x43a9(_0x54b1ef,_0x1b4272){const _0x29d3f7=_0x29d3();return _0x43a9=function(_0x43a976,_0x2d4afd){_0x43a976=_0x43a976-0x14b;let _0x2e289e=_0x29d3f7[_0x43a976];return _0x2e289e;},_0x43a9(_0x54b1ef,_0x1b4272);}(function(_0x58006b,_0x5037a3){const _0x485dec=_0x43a9,_0x183653=_0x58006b();while(!![]){try{const _0x4414da=-parseInt(_0x485dec(0x178))/0x1+-parseInt(_0x485dec(0x1de))/0x2*(parseInt(_0x485dec(0x23a))/0x3)+-parseInt(_0x485dec(0x1d3))/0x4*(-parseInt(_0x485dec(0x1b4))/0x5)+-parseInt(_0x485dec(0x1d2))/0x6*(parseInt(_0x485dec(0x281))/0x7)+parseInt(_0x485dec(0x1c3))/0x8*(-parseInt(_0x485dec(0x150))/0x9)+parseInt(_0x485dec(0x196))/0xa*(parseInt(_0x485dec(0x233))/0xb)+parseInt(_0x485dec(0x185))/0xc;if(_0x4414da===_0x5037a3)break;else _0x183653['push'](_0x183653['shift']());}catch(_0x167305){_0x183653['push'](_0x183653['shift']());}}}(_0x29d3,0x1d4f0));var label='EventChainReact',tier=tier||0x0,dependencies=[_0x352ada(0x2d8),_0x352ada(0x284)],pluginData=$plugins['filter'](function(_0x43f1b3){const _0xc856f=_0x352ada;return _0x43f1b3[_0xc856f(0x16e)]&&_0x43f1b3[_0xc856f(0x1db)][_0xc856f(0x2b6)]('['+label+']');})[0x0];VisuMZ[label][_0x352ada(0x2d7)]=VisuMZ[label][_0x352ada(0x2d7)]||{},VisuMZ[_0x352ada(0x2c2)]=function(_0x476170,_0x1df09f){const _0x44d34d=_0x352ada;for(const _0x2d46ed in _0x1df09f){if(_0x44d34d(0x2e4)!==_0x44d34d(0x1ac)){if(_0x2d46ed[_0x44d34d(0x2c6)](/(.*):(.*)/i)){const _0x27b1e2=String(RegExp['$1']),_0x3554d5=String(RegExp['$2'])[_0x44d34d(0x18e)]()['trim']();let _0x33d673,_0x378265,_0x1987ea;switch(_0x3554d5){case _0x44d34d(0x190):_0x33d673=_0x1df09f[_0x2d46ed]!==''?Number(_0x1df09f[_0x2d46ed]):0x0;break;case _0x44d34d(0x2d5):_0x378265=_0x1df09f[_0x2d46ed]!==''?JSON[_0x44d34d(0x14b)](_0x1df09f[_0x2d46ed]):[],_0x33d673=_0x378265[_0x44d34d(0x1f8)](_0x53b6ae=>Number(_0x53b6ae));break;case _0x44d34d(0x1e9):_0x33d673=_0x1df09f[_0x2d46ed]!==''?eval(_0x1df09f[_0x2d46ed]):null;break;case'ARRAYEVAL':_0x378265=_0x1df09f[_0x2d46ed]!==''?JSON[_0x44d34d(0x14b)](_0x1df09f[_0x2d46ed]):[],_0x33d673=_0x378265[_0x44d34d(0x1f8)](_0x3c0eb9=>eval(_0x3c0eb9));break;case _0x44d34d(0x27e):_0x33d673=_0x1df09f[_0x2d46ed]!==''?JSON[_0x44d34d(0x14b)](_0x1df09f[_0x2d46ed]):'';break;case'ARRAYJSON':_0x378265=_0x1df09f[_0x2d46ed]!==''?JSON['parse'](_0x1df09f[_0x2d46ed]):[],_0x33d673=_0x378265['map'](_0x2a03b3=>JSON[_0x44d34d(0x14b)](_0x2a03b3));break;case _0x44d34d(0x20a):_0x33d673=_0x1df09f[_0x2d46ed]!==''?new Function(JSON[_0x44d34d(0x14b)](_0x1df09f[_0x2d46ed])):new Function(_0x44d34d(0x189));break;case _0x44d34d(0x2db):_0x378265=_0x1df09f[_0x2d46ed]!==''?JSON['parse'](_0x1df09f[_0x2d46ed]):[],_0x33d673=_0x378265[_0x44d34d(0x1f8)](_0x5517fc=>new Function(JSON[_0x44d34d(0x14b)](_0x5517fc)));break;case'STR':_0x33d673=_0x1df09f[_0x2d46ed]!==''?String(_0x1df09f[_0x2d46ed]):'';break;case _0x44d34d(0x214):_0x378265=_0x1df09f[_0x2d46ed]!==''?JSON['parse'](_0x1df09f[_0x2d46ed]):[],_0x33d673=_0x378265[_0x44d34d(0x1f8)](_0x23e19d=>String(_0x23e19d));break;case _0x44d34d(0x2a1):_0x1987ea=_0x1df09f[_0x2d46ed]!==''?JSON['parse'](_0x1df09f[_0x2d46ed]):{},_0x33d673=VisuMZ[_0x44d34d(0x2c2)]({},_0x1987ea);break;case _0x44d34d(0x183):_0x378265=_0x1df09f[_0x2d46ed]!==''?JSON[_0x44d34d(0x14b)](_0x1df09f[_0x2d46ed]):[],_0x33d673=_0x378265[_0x44d34d(0x1f8)](_0x2119c6=>VisuMZ['ConvertParams']({},JSON[_0x44d34d(0x14b)](_0x2119c6)));break;default:continue;}_0x476170[_0x27b1e2]=_0x33d673;}}else{const _0x312f50=this[_0x44d34d(0x1a4)]();for(const _0x335e4d of _0x312f50){this['spreadChargeType'](_0x335e4d);}}}return _0x476170;},(_0x5d9801=>{const _0x5d7959=_0x352ada,_0x4fbd29=_0x5d9801['name'];for(const _0x173c1d of dependencies){if(!Imported[_0x173c1d]){if(_0x5d7959(0x2af)===_0x5d7959(0x15c)){const _0x26ec74={'list':[],'repeat':![],'skippable':!![],'wait':!![]};_0x26ec74['list'][_0x5d7959(0x212)]({'code':_0x4c754d['ROUTE_SCRIPT'],'parameters':['this.gatherFollowersAndWait()'],'indent':null}),_0x26ec74[_0x5d7959(0x151)][_0x5d7959(0x212)]({'code':_0x4ceeae['ROUTE_SCRIPT'],'parameters':[_0x5d7959(0x1cb)],'indent':null});_0x4e0d02&&_0x1abacc[_0x5d7959(0x168)]!==''&&_0x26ec74[_0x5d7959(0x151)][_0x5d7959(0x212)]({'code':_0x444b1f[_0x5d7959(0x25c)],'parameters':[_0x25aebf],'indent':null});_0x26ec74[_0x5d7959(0x151)][_0x5d7959(0x212)]({'code':_0x43d788[_0x5d7959(0x2a4)],'indent':null}),_0x26ec74[_0x5d7959(0x151)][_0x5d7959(0x212)]({'code':_0x46c278[_0x5d7959(0x2ca)],'parameters':[_0x15ed11],'indent':null}),_0x26ec74[_0x5d7959(0x151)][_0x5d7959(0x212)]({'code':_0x44e98d,'indent':null}),_0x26ec74[_0x5d7959(0x151)][_0x5d7959(0x212)]({'code':_0x3fd6fa[_0x5d7959(0x2ca)],'parameters':[_0x579927],'indent':null}),_0x26ec74[_0x5d7959(0x151)][_0x5d7959(0x212)]({'code':_0x5865ea[_0x5d7959(0x272)],'indent':null}),_0x26ec74[_0x5d7959(0x151)][_0x5d7959(0x212)]({'code':_0xcea1e[_0x5d7959(0x248)],'parameters':[_0x5d7959(0x229)],'indent':null});if(_0x236fb8)_0x26ec74[_0x5d7959(0x151)]['push']({'code':_0x506300[_0x5d7959(0x248)],'parameters':['this.checkEventTriggerHere([1,\x202])'],'indent':null});_0x26ec74[_0x5d7959(0x151)][_0x5d7959(0x212)]({'code':_0x12604c['ROUTE_END']}),this[_0x5d7959(0x1cf)](_0x26ec74);}else{alert(_0x5d7959(0x2e0)[_0x5d7959(0x2a5)](_0x4fbd29,_0x173c1d)),SceneManager['exit']();break;}}}const _0x5e36b9=_0x5d9801[_0x5d7959(0x1db)];if(_0x5e36b9[_0x5d7959(0x2c6)](/\[Version[ ](.*?)\]/i)){const _0x119d55=Number(RegExp['$1']);_0x119d55!==VisuMZ[label][_0x5d7959(0x16f)]&&(_0x5d7959(0x244)==='lWnHT'?(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x5d7959(0x2a5)](_0x4fbd29,_0x119d55)),SceneManager['exit']()):(this[_0x5d7959(0x2ac)]=this[_0x5d7959(0x2ac)]||{},this[_0x5d7959(0x2ac)][_0x5d7959(0x232)]=this['x'],this[_0x5d7959(0x2ac)][_0x5d7959(0x26a)]=this['y'],this[_0x5d7959(0x2ac)][_0x5d7959(0x291)]=this['jumpHeight'](),this['_conductCache'][_0x5d7959(0x14c)]=this[_0x5d7959(0x14c)],_0x37ace8[_0x5d7959(0x289)]()));}if(_0x5e36b9[_0x5d7959(0x2c6)](/\[Tier[ ](\d+)\]/i)){const _0x4e7376=Number(RegExp['$1']);_0x4e7376<tier?_0x5d7959(0x252)!==_0x5d7959(0x1d6)?(alert(_0x5d7959(0x2b3)[_0x5d7959(0x2a5)](_0x4fbd29,_0x4e7376,tier)),SceneManager[_0x5d7959(0x261)]()):(this[_0x5d7959(0x1f0)]=!![],this['_submergeEffectOffset']=_0x2102db(_0x57fb3a['$1'])):tier=Math[_0x5d7959(0x2bd)](_0x4e7376,tier);}VisuMZ[_0x5d7959(0x2c2)](VisuMZ[label][_0x5d7959(0x2d7)],_0x5d9801[_0x5d7959(0x225)]);})(pluginData);if(VisuMZ[_0x352ada(0x17e)][_0x352ada(0x16f)]<1.42){let text='';text+=_0x352ada(0x2f8),text+=_0x352ada(0x2a7),alert(text),SceneManager[_0x352ada(0x261)]();}PluginManager[_0x352ada(0x2ef)](pluginData[_0x352ada(0x168)],'CatalystCreateAtEvent',_0x3039af=>{const _0x28cd64=_0x352ada;if(!SceneManager[_0x28cd64(0x2d0)]())return;if(!$gameMap)return;VisuMZ[_0x28cd64(0x2c2)](_0x3039af,_0x3039af);const _0x10a94d=$gameTemp['getLastPluginCommandInterpreter'](),_0x1c6441=_0x3039af[_0x28cd64(0x26b)]||_0x10a94d[_0x28cd64(0x219)](),_0x12f642=_0x3039af[_0x28cd64(0x2cf)]||'',_0x3186f9=_0x3039af['Location']||_0x28cd64(0x1af),_0x17f03e=$gameMap[_0x28cd64(0x158)](_0x1c6441);$gameMap[_0x28cd64(0x18a)](_0x17f03e,_0x12f642,_0x3186f9);}),PluginManager[_0x352ada(0x2ef)](pluginData[_0x352ada(0x168)],_0x352ada(0x1d1),_0x4c8a39=>{const _0x3677a2=_0x352ada;if(!SceneManager[_0x3677a2(0x2d0)]())return;if(!$gameMap)return;VisuMZ[_0x3677a2(0x2c2)](_0x4c8a39,_0x4c8a39);const _0x88ade3=_0x4c8a39[_0x3677a2(0x2cf)]||'',_0x5b8aee=_0x4c8a39[_0x3677a2(0x1e6)]||'exact',_0x10092a=$gamePlayer;$gameMap['spreadChainReactionFromTarget'](_0x10092a,_0x88ade3,_0x5b8aee);}),PluginManager[_0x352ada(0x2ef)](pluginData[_0x352ada(0x168)],_0x352ada(0x166),_0x58ac04=>{const _0x2ff9aa=_0x352ada;if(!SceneManager['isSceneMap']())return;if(!$gameMap)return;VisuMZ[_0x2ff9aa(0x2c2)](_0x58ac04,_0x58ac04);const _0x4a7fd1=_0x58ac04[_0x2ff9aa(0x2cf)]||'',_0x30bd79=_0x58ac04[_0x2ff9aa(0x264)]||0x0,_0x125b1c=_0x58ac04['PosY']||0x0;$gameMap['createChainReactionCatalystAtXy'](_0x4a7fd1,_0x30bd79,_0x125b1c);}),PluginManager[_0x352ada(0x2ef)](pluginData['name'],_0x352ada(0x210),_0x5e41f9=>{const _0x2d8cdc=_0x352ada;if(!SceneManager[_0x2d8cdc(0x2d0)]())return;VisuMZ['ConvertParams'](_0x5e41f9,_0x5e41f9);const _0x3ed650=$gameMap[_0x2d8cdc(0x164)]($gamePlayer[_0x2d8cdc(0x300)](),$gamePlayer[_0x2d8cdc(0x2f2)]())[_0x2d8cdc(0x1c0)](_0x17b9eb=>_0x17b9eb&&_0x17b9eb['canBePulled']());if(_0x3ed650['length']<=0x0)return;const _0x46fde6=_0x3ed650[0x0],_0xda958={'name':_0x5e41f9['Sound'][_0x2d8cdc(0x168)]||'','volume':_0x5e41f9[_0x2d8cdc(0x27b)][_0x2d8cdc(0x21c)]||0x5a,'pitch':_0x5e41f9[_0x2d8cdc(0x27b)][_0x2d8cdc(0x2bf)]||0x64,'pan':_0x5e41f9['Sound']['pan']||0x0},_0x14176d=_0x5e41f9[_0x2d8cdc(0x18c)]??!![];$gamePlayer[_0x2d8cdc(0x237)](_0x46fde6,_0xda958,_0x14176d);}),PluginManager['registerCommand'](pluginData[_0x352ada(0x168)],_0x352ada(0x2ea),_0x1104b5=>{const _0x23e269=_0x352ada;if(!SceneManager[_0x23e269(0x2d0)]())return;VisuMZ[_0x23e269(0x2c2)](_0x1104b5,_0x1104b5);const _0x1f1c6b=$gameTemp['getLastPluginCommandInterpreter'](),_0x251797=$gameMap[_0x23e269(0x158)](_0x1f1c6b[_0x23e269(0x219)]());if(!_0x251797)return;const _0x1216a5={'name':_0x1104b5[_0x23e269(0x27b)][_0x23e269(0x168)]||'','volume':_0x1104b5[_0x23e269(0x27b)][_0x23e269(0x21c)]||0x5a,'pitch':_0x1104b5[_0x23e269(0x27b)][_0x23e269(0x2bf)]||0x64,'pan':_0x1104b5[_0x23e269(0x27b)][_0x23e269(0x167)]||0x0},_0x580382=_0x1104b5[_0x23e269(0x18c)]??!![];$gamePlayer['pullTargetEvent'](_0x251797,_0x1216a5,_0x580382);}),PluginManager['registerCommand'](pluginData[_0x352ada(0x168)],_0x352ada(0x28f),_0x3003f4=>{const _0x3fe989=_0x352ada;if(!SceneManager[_0x3fe989(0x2d0)]())return;VisuMZ[_0x3fe989(0x2c2)](_0x3003f4,_0x3003f4);const _0x2d68d1=$gameMap[_0x3fe989(0x164)]($gamePlayer['frontX'](),$gamePlayer[_0x3fe989(0x2f2)]())[_0x3fe989(0x1c0)](_0x1da5c9=>_0x1da5c9&&_0x1da5c9['canBePushed']());if(_0x2d68d1['length']<=0x0)return;const _0x298bf6=_0x2d68d1[0x0],_0x18fa87={'name':_0x3003f4[_0x3fe989(0x27b)]['name']||'','volume':_0x3003f4[_0x3fe989(0x27b)]['volume']||0x5a,'pitch':_0x3003f4[_0x3fe989(0x27b)]['pitch']||0x64,'pan':_0x3003f4[_0x3fe989(0x27b)][_0x3fe989(0x167)]||0x0},_0x3b25b6=_0x3003f4[_0x3fe989(0x18c)]??!![];$gamePlayer[_0x3fe989(0x2fd)](_0x298bf6,_0x18fa87,_0x3003f4[_0x3fe989(0x1d7)],_0x3b25b6);}),PluginManager[_0x352ada(0x2ef)](pluginData[_0x352ada(0x168)],_0x352ada(0x295),_0x2e6f07=>{const _0xe9147a=_0x352ada;if(!SceneManager[_0xe9147a(0x2d0)]())return;VisuMZ[_0xe9147a(0x2c2)](_0x2e6f07,_0x2e6f07);const _0x16008d=$gameTemp[_0xe9147a(0x181)](),_0x53d383=$gameMap[_0xe9147a(0x158)](_0x16008d[_0xe9147a(0x219)]());if(!_0x53d383)return;const _0x3c3534={'name':_0x2e6f07[_0xe9147a(0x27b)][_0xe9147a(0x168)]||'','volume':_0x2e6f07[_0xe9147a(0x27b)][_0xe9147a(0x21c)]||0x5a,'pitch':_0x2e6f07['Sound'][_0xe9147a(0x2bf)]||0x64,'pan':_0x2e6f07[_0xe9147a(0x27b)][_0xe9147a(0x167)]||0x0},_0x277f44=_0x2e6f07[_0xe9147a(0x18c)]??!![];$gamePlayer[_0xe9147a(0x2fd)](_0x53d383,_0x3c3534,_0x2e6f07[_0xe9147a(0x1d7)],_0x277f44);}),VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x22f)]={'CanPush':/<(?:PUSH|REPOSITION|PUSH PULL|PULL PUSH)>/i,'CanPull':/<(?:PULL|REPOSITION|PUSH PULL|PULL PUSH)>/i,'EventReactOn':/<(.*?) (?:REACT|REACTION|REACTOR) (?:SW|SWITCH|SWITCHES) ON:[ ](.*?)>/gi,'EventReactOff':/<(.*?) (?:REACT|REACTION|REACTOR) (?:SW|SWITCH|SWITCHES) OFF:[ ](.*?)>/gi,'SpreadReactSpeed':/<(.*?)[ ](TICK|FAST|QUICK|SHORT|AVG|AVERAGE|SLOW|LONG|LATE)[ ](?:SPREAD|SPREADS|CATALYST):[ ](.*?)>/gi,'SpreadReactFrame':/<(.*?)[ ](\d+)[ ](?:FRAME|FRAMES)[ ](?:SPREAD|SPREADS|CATALYST):[ ](.*?)>/gi,'HeavyObj':/<(?:HEAVY OBJECT|HEAVY OBJ|HEAVY)>/i,'NotHeavyObj':/<NOT (?:HEAVY OBJECT|HEAVY OBJ|HEAVY)>/i,'PressurePlate':/<(?:PRESSURE PLATE|PLATE) (?:SW|SWITCH|SWITCHES):[ ](.*?)>/i,'AllWeightSwitch':/<ALL (?:PRESSURE PLATES|PLATES) (?:SW|SWITCH|SWITCHES):[ ](.*?)>/i,'Charger':/<(.*?)[ ](?:CHARGER|CHARGE)>/gi,'Conductor':/<(.*?)[ ](?:CONDUCTOR|CONDUCT) (?:SW|SWITCH|SWITCHES):[ ](.*?)>/gi,'ChargeDir':/<(?:CHARGER|CHARGE|CONDUCTOR|CONDUCT|CURRENT)[ ](?:DIR|DIRECTION|DIRECTIONS):[ ](.*?)>/i,'DecaySpeedOn':/<(TICK|FAST|QUICK|SHORT|AVG|AVERAGE|SLOW|LONG|LATE) DECAY (?:SW|SWITCH|SWITCHES) ON:[ ](.*?)>/i,'DecaySpeedOff':/<(TICK|FAST|QUICK|SHORT|AVG|AVERAGE|SLOW|LONG|LATE) DECAY (?:SW|SWITCH|SWITCHES) OFF:[ ](.*?)>/i,'DecayFrameOn':/<(\d+)[ ](?:FRAME|FRAMES) DECAY (?:SW|SWITCH|SWITCHES) ON:[ ](.*?)>/i,'DecayFrameOff':/<(\d+)[ ](?:FRAME|FRAMES) DECAY (?:SW|SWITCH|SWITCHES) OFF:[ ](.*?)>/i,'ShallowSubmergeOn':/<(?:SHALLOW SUBMERGE|SUBMERGE) (?:SW|SWITCH|SWITCHES) ON:[ ](.*?)>/i,'ShallowSubmergeOff':/<(?:SHALLOW SUBMERGE|SUBMERGE) (?:SW|SWITCH|SWITCHES) OFF:[ ](.*?)>/i,'DeepSubmergeOn':/<(?:DEEP SUBMERGE|SUBMERGE) (?:SW|SWITCH|SWITCHES) ON:[ ](.*?)>/i,'DeepSubmergeOff':/<(?:DEEP SUBMERGE|SUBMERGE) (?:SW|SWITCH|SWITCHES) OFF:[ ](.*?)>/i,'ResurfaceOn':/<(?:SURFACE|RESURFACE) (?:SW|SWITCH|SWITCHES) ON:[ ](.*?)>/i,'ResurfaceOff':/<(?:SURFACE|RESURFACE) (?:SW|SWITCH|SWITCHES) OFF:[ ](.*?)>/i,'SubmergedEffect':/<SUBMERGED EFFECT>/i,'SubmergedEffectOffset':/<SUBMERGED EFFECT:[ ](\d+)>/i,'Bridge':/<BRIDGE>/i},SoundManager[_0x352ada(0x1ed)]=function(){const _0x596e15=_0x352ada,_0x141caa=VisuMZ['EventChainReact']['Settings']['Submerge'],_0x49f1bc={'name':_0x141caa[_0x596e15(0x2e2)]||'','volume':_0x141caa['soundVolume']||0x5a,'pitch':_0x141caa[_0x596e15(0x19e)]||0x64,'pan':_0x141caa['soundPan']||0x0};AudioManager[_0x596e15(0x1f1)](_0x49f1bc);},SceneManager[_0x352ada(0x2d0)]=function(){const _0x35eb9e=_0x352ada;return this[_0x35eb9e(0x22d)]&&this[_0x35eb9e(0x22d)]['constructor']===Scene_Map;},Game_Temp[_0x352ada(0x27d)]['clearEventChainReactionCache']=function(){const _0x2d71a3=_0x352ada;this[_0x2d71a3(0x1d4)]={},this[_0x2d71a3(0x1e7)]={};},Game_Temp[_0x352ada(0x27d)][_0x352ada(0x296)]=function(_0x9ec9e6,_0x8b82e0){const _0x4ef0d3=_0x352ada;this[_0x4ef0d3(0x1d4)]=this[_0x4ef0d3(0x1d4)]||{};const _0x4e0569='%1,%2'[_0x4ef0d3(0x2a5)](_0x9ec9e6,_0x8b82e0);if(this[_0x4ef0d3(0x1d4)][_0x4e0569])return this[_0x4ef0d3(0x1d4)][_0x4e0569];return this[_0x4ef0d3(0x1d4)][_0x4e0569]=$gameMap[_0x4ef0d3(0x164)](_0x9ec9e6,_0x8b82e0)[_0x4ef0d3(0x1c0)](_0x3f8c4e=>_0x3f8c4e&&_0x3f8c4e['submergedEffect']()),this[_0x4ef0d3(0x1d4)][_0x4e0569];},Game_Temp['prototype'][_0x352ada(0x29f)]=function(_0x183496,_0xc9175a){const _0x468ecb=_0x352ada;this[_0x468ecb(0x1e7)]=this['_bridgeEventsXy']||{};const _0x127e6b='%1,%2'[_0x468ecb(0x2a5)](_0x183496,_0xc9175a);if(this[_0x468ecb(0x1e7)][_0x127e6b])return this[_0x468ecb(0x1e7)][_0x127e6b];return this[_0x468ecb(0x1e7)][_0x127e6b]=$gameMap[_0x468ecb(0x164)](_0x183496,_0xc9175a)[_0x468ecb(0x1c0)](_0x424aff=>_0x424aff&&_0x424aff['isBridge']()),this[_0x468ecb(0x1e7)][_0x127e6b];},VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x216)]=Game_Map[_0x352ada(0x27d)][_0x352ada(0x198)],Game_Map[_0x352ada(0x27d)][_0x352ada(0x198)]=function(_0x1f38e0){const _0x59689d=_0x352ada;VisuMZ[_0x59689d(0x1bf)][_0x59689d(0x216)][_0x59689d(0x2d3)](this,_0x1f38e0),this['setupEventChainReactNotetags'](),this[_0x59689d(0x172)]();},Game_Map['prototype'][_0x352ada(0x192)]=function(){const _0xad1678=_0x352ada;this[_0xad1678(0x21e)]();},VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x2bb)]=Game_Map[_0x352ada(0x27d)][_0x352ada(0x2c7)],Game_Map[_0x352ada(0x27d)][_0x352ada(0x2c7)]=function(){const _0x340604=_0x352ada;VisuMZ[_0x340604(0x1bf)][_0x340604(0x2bb)]['call'](this),this[_0x340604(0x172)]();},Game_Map['prototype'][_0x352ada(0x172)]=function(){const _0x630ce3=_0x352ada;this[_0x630ce3(0x22a)]&&this['refreshPressurePlate'](),this[_0x630ce3(0x1d9)]&&this[_0x630ce3(0x24c)]();},VisuMZ[_0x352ada(0x1bf)]['Game_Map_refresh']=Game_Map['prototype'][_0x352ada(0x257)],Game_Map['prototype'][_0x352ada(0x257)]=function(){const _0x52a75a=_0x352ada;VisuMZ[_0x52a75a(0x1bf)][_0x52a75a(0x1e3)][_0x52a75a(0x2d3)](this),$gameTemp['clearEventChainReactionCache']();},VisuMZ[_0x352ada(0x1bf)]['RelativeCoordinates']=function(_0x26c125,_0x3ebb43){const _0x213dd4=_0x352ada,_0x51f4e1=_0x26c125['x'],_0x425848=_0x26c125['y'],_0x473c90=[];switch(_0x3ebb43['toLowerCase']()['trim']()){case'exact':_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1,'y':_0x425848});break;case _0x213dd4(0x2f0):_0x473c90['push']({'x':_0x26c125[_0x213dd4(0x300)](),'y':_0x26c125[_0x213dd4(0x2f2)]()});break;case _0x213dd4(0x191):_0x473c90[_0x213dd4(0x212)]({'x':_0x26c125[_0x213dd4(0x1c1)](),'y':_0x26c125[_0x213dd4(0x2fa)]()});break;case'cw':case _0x213dd4(0x165):_0x473c90[_0x213dd4(0x212)]({'x':_0x26c125[_0x213dd4(0x245)](),'y':_0x26c125[_0x213dd4(0x1ca)]()});break;case _0x213dd4(0x256):case'counterclockwise':_0x473c90[_0x213dd4(0x212)]({'x':_0x26c125[_0x213dd4(0x1fd)](),'y':_0x26c125[_0x213dd4(0x17b)]()});break;case'adjacent':case _0x213dd4(0x2f3):_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1-0x1,'y':_0x425848}),_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1+0x1,'y':_0x425848}),_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1,'y':_0x425848}),_0x473c90['push']({'x':_0x51f4e1,'y':_0x425848-0x1}),_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1,'y':_0x425848+0x1});break;case _0x213dd4(0x213):case _0x213dd4(0x299):_0x473c90['push']({'x':_0x51f4e1-0x1,'y':_0x425848-0x1}),_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1-0x1,'y':_0x425848}),_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1-0x1,'y':_0x425848+0x1}),_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1,'y':_0x425848-0x1}),_0x473c90['push']({'x':_0x51f4e1,'y':_0x425848}),_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1,'y':_0x425848+0x1}),_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1+0x1,'y':_0x425848-0x1}),_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1+0x1,'y':_0x425848}),_0x473c90['push']({'x':_0x51f4e1+0x1,'y':_0x425848+0x1});break;case _0x213dd4(0x1d5):_0x473c90['push']({'x':_0x51f4e1,'y':_0x425848+0x1});break;case _0x213dd4(0x170):_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1-0x1,'y':_0x425848});break;case _0x213dd4(0x154):_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1+0x1,'y':_0x425848});break;case'up':_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1,'y':_0x425848-0x1});break;case'lower\x20left':_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1-0x1,'y':_0x425848+0x1});break;case _0x213dd4(0x19d):_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1+0x1,'y':_0x425848+0x1});break;case _0x213dd4(0x1f4):_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1-0x1,'y':_0x425848-0x1});break;case _0x213dd4(0x2e5):_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1+0x1,'y':_0x425848-0x1});break;default:_0x473c90[_0x213dd4(0x212)]({'x':_0x51f4e1,'y':_0x425848});break;}return _0x473c90;},Game_Map[_0x352ada(0x27d)]['createChainReactionCatalystAtXy']=function(_0x449a93,_0x4e00c9,_0x500e5d,_0x49dbeb){const _0x3e35c=_0x352ada,_0x517094=this[_0x3e35c(0x164)](_0x4e00c9,_0x500e5d)[_0x3e35c(0x1c0)](_0x210526=>_0x210526&&_0x210526!==_0x49dbeb);for(const _0x55b4b2 of _0x517094){if(_0x3e35c(0x2fb)==='mqHmF')_0x55b4b2&&!_0x55b4b2['_erased']&&_0x55b4b2[_0x3e35c(0x267)](_0x449a93);else return this[_0x3e35c(0x2a6)](_0x338b1f,_0x37f594)||this[_0x3e35c(0x1c2)](_0x5dc90,_0x27c74d);}},Game_Map[_0x352ada(0x27d)]['spreadChainReactionFromTarget']=function(_0x150a28,_0x27034d,_0x17e267){const _0x456c8c=_0x352ada;if(!_0x150a28)return;const _0x4ee61b=VisuMZ[_0x456c8c(0x1bf)][_0x456c8c(0x1ee)](_0x150a28,_0x17e267),_0x53f2e3=_0x150a28===$gamePlayer?0x0:-_0x150a28[_0x456c8c(0x17c)][_0x456c8c(0x170)],_0x930e56=_0x150a28===$gamePlayer?0x0:_0x150a28[_0x456c8c(0x17c)][_0x456c8c(0x154)],_0x1e9d16=_0x150a28===$gamePlayer?0x0:-_0x150a28[_0x456c8c(0x17c)]['up'],_0x174a0d=_0x150a28===$gamePlayer?0x0:_0x150a28[_0x456c8c(0x17c)]['down'];for(let _0x54fb42=_0x53f2e3;_0x54fb42<=_0x930e56;_0x54fb42++){for(let _0x45c5b6=_0x1e9d16;_0x45c5b6<=_0x174a0d;_0x45c5b6++){if(_0x456c8c(0x1b6)===_0x456c8c(0x1b6))for(const _0x37a28b of _0x4ee61b){if(_0x456c8c(0x162)!=='wPjSC'){const _0x42381e=_0x37a28b['x']??-0x1,_0x73bc2=_0x37a28b['y']??-0x1;this[_0x456c8c(0x15a)](_0x27034d,_0x42381e+_0x54fb42,_0x73bc2+_0x45c5b6,this);}else return!![];}else{const _0x166f69={'list':[],'repeat':![],'skippable':!![],'wait':!![]};_0x166f69[_0x456c8c(0x151)][_0x456c8c(0x212)]({'code':_0x163f28[_0x456c8c(0x2ca)],'parameters':[_0x5e7768],'indent':null}),_0x166f69['list'][_0x456c8c(0x212)]({'code':_0x4e3dae,'indent':null}),_0x166f69[_0x456c8c(0x151)][_0x456c8c(0x212)]({'code':_0xc6ed2d['ROUTE_CHANGE_SPEED'],'parameters':[_0x484b75],'indent':null}),_0x166f69[_0x456c8c(0x151)]['push']({'code':_0x2d3088['ROUTE_END']}),_0x474287['forceMoveRoute'](_0x166f69);}}}},Game_Map['prototype'][_0x352ada(0x21e)]=function(){const _0xb3c8df=_0x352ada;this[_0xb3c8df(0x268)]=[];const _0x2023e1=VisuMZ[_0xb3c8df(0x1bf)]['RegExp'],_0x3a13e9=$dataMap?$dataMap[_0xb3c8df(0x2ba)]||'':'';_0x3a13e9[_0xb3c8df(0x2c6)](_0x2023e1[_0xb3c8df(0x2aa)])&&(this[_0xb3c8df(0x268)]=String(RegExp['$1'])['split'](',')[_0xb3c8df(0x1f8)](_0x1ab2d7=>Number(_0x1ab2d7)||0x0));},Game_Map[_0x352ada(0x27d)][_0x352ada(0x1a3)]=function(){const _0x45b650=_0x352ada;this[_0x45b650(0x22a)]=!![];},Game_Map['prototype'][_0x352ada(0x215)]=function(){const _0x32888d=_0x352ada;this[_0x32888d(0x22a)]=![];const _0x524236=this['events']()[_0x32888d(0x1c0)](_0x171eb4=>_0x171eb4&&_0x171eb4[_0x32888d(0x1f6)]());for(const _0x3301fe of _0x524236){_0x3301fe&&_0x3301fe[_0x32888d(0x247)]();}if(this[_0x32888d(0x268)]===undefined){if(_0x32888d(0x152)===_0x32888d(0x152))this[_0x32888d(0x21e)]();else{const _0x346096=_0x4fb7ab(_0xb6ef6e['$1']);_0x346096<_0x90bd00?(_0x48fa6b(_0x32888d(0x2b3)[_0x32888d(0x2a5)](_0x3deed1,_0x346096,_0x40bf3b)),_0x4f5131[_0x32888d(0x261)]()):_0x19e97e=_0x16796e[_0x32888d(0x2bd)](_0x346096,_0x14dc54);}}if(this[_0x32888d(0x268)][_0x32888d(0x1ec)]>0x0){const _0x32445b=_0x524236[_0x32888d(0x266)](_0x4cd305=>_0x4cd305[_0x32888d(0x24e)]()&&!_0x4cd305[_0x32888d(0x21b)]()&&!_0x4cd305[_0x32888d(0x199)]);for(const _0x2da193 of this[_0x32888d(0x268)]){$gameSwitches[_0x32888d(0x19b)](_0x2da193,_0x32445b);}}},Game_Map[_0x352ada(0x27d)][_0x352ada(0x289)]=function(){const _0x4990ed=_0x352ada;this[_0x4990ed(0x1d9)]=!![];},Game_Map['prototype']['refreshConduction']=function(){const _0x547741=_0x352ada;this[_0x547741(0x1d9)]=![];const _0x24c5aa=this[_0x547741(0x1fb)]()[_0x547741(0x1c0)](_0x2404b7=>_0x2404b7&&_0x2404b7[_0x547741(0x242)]());for(const _0xdbf343 of _0x24c5aa){_0xdbf343[_0x547741(0x2f6)]();}const _0x28e494=this[_0x547741(0x1fb)]()['filter'](_0xfd4079=>_0xfd4079&&_0xfd4079['hasCharge']());for(const _0x1c7cbe of _0x28e494){if(_0x547741(0x2f7)!=='muRLg')_0x1c7cbe[_0x547741(0x1c9)]();else{const _0x45a91e=this[_0x547741(0x164)](_0x5be65b,_0x424582)['filter'](_0x5d7e54=>_0x5d7e54&&_0x5d7e54!==_0x219545);for(const _0x5d039c of _0x45a91e){_0x5d039c&&!_0x5d039c[_0x547741(0x199)]&&_0x5d039c[_0x547741(0x267)](_0x55a4a0);}}}for(const _0x11478e of _0x24c5aa){if(_0x547741(0x1da)==='xUOmz')_0x11478e[_0x547741(0x1b0)]();else{let _0x5ac7a6=this['anyHeavyObjOnThisTile']();this['applyPressurePlateSwitchChange'](_0x5ac7a6);}}},Game_Map['prototype'][_0x352ada(0x184)]=function(_0x573eb3,_0xb9b7b3,_0x34a43c){const _0x4dc87d=_0x352ada,_0xa8d2d7=this[_0x4dc87d(0x164)](_0xb9b7b3,_0x34a43c)[_0x4dc87d(0x1c0)](_0x4b4c83=>_0x4b4c83&&_0x4b4c83[_0x4dc87d(0x242)]()&&_0x4b4c83[_0x4dc87d(0x2d4)](_0x573eb3)&&_0x4b4c83['getConductionState'](_0x573eb3)===![]);for(const _0x5dbe23 of _0xa8d2d7){if(_0x4dc87d(0x171)===_0x4dc87d(0x24d))return _0x1db814['EventChainReact'][_0x4dc87d(0x2d7)][_0x4dc87d(0x2b1)][_0x4dc87d(0x2fe)];else _0x5dbe23['setConductionState'](_0x573eb3,!![]),_0x5dbe23[_0x4dc87d(0x1c5)](_0x573eb3),_0x5dbe23['update']();}},VisuMZ[_0x352ada(0x1bf)]['Game_Map_checkPassage']=Game_Map[_0x352ada(0x27d)][_0x352ada(0x1b7)],Game_Map['prototype'][_0x352ada(0x1b7)]=function(_0x19d872,_0x47956d,_0xb1f61){const _0x3f45b4=_0x352ada,_0x51c72e=$gameTemp[_0x3f45b4(0x29f)](_0x19d872,_0x47956d);if(_0x51c72e[_0x3f45b4(0x1ec)]>0x0){if(_0x3f45b4(0x1a5)===_0x3f45b4(0x1a5)){if(_0xb1f61===0x200)return![];if(_0xb1f61===0x400)return![];return!![];}else this[_0x3f45b4(0x2ed)]();}else{if(_0x3f45b4(0x194)!==_0x3f45b4(0x26f))return VisuMZ[_0x3f45b4(0x1bf)][_0x3f45b4(0x298)][_0x3f45b4(0x2d3)](this,_0x19d872,_0x47956d,_0xb1f61);else{const _0x5054fc=this[_0x3f45b4(0x243)]();for(const _0x425bb0 of _0x5054fc){const _0x9d8e6a=this[_0x3f45b4(0x1b1)][_0x425bb0]||[],_0x20de02=this['getConductionState'](_0x425bb0);this[_0x3f45b4(0x1ae)](_0x9d8e6a,_0x20de02);}this['clearConductionState']();const _0x459295=_0xa0182[_0x3f45b4(0x22d)],_0x1760a1=_0x459295?_0x459295[_0x3f45b4(0x1eb)]:null;if(_0x1760a1){const _0x13456c=_0x1760a1[_0x3f45b4(0x28d)](this);if(_0x13456c)_0x13456c[_0x3f45b4(0x283)]();}}}},Game_Map['prototype'][_0x352ada(0x200)]=function(_0x518767,_0x70300a){const _0x19b9dc=_0x352ada;return this[_0x19b9dc(0x2a6)](_0x518767,_0x70300a)||this['isDeepSubmersible'](_0x518767,_0x70300a);},Game_Map[_0x352ada(0x27d)][_0x352ada(0x2a6)]=function(_0x34a6eb,_0x1c3dd1){const _0x319b85=_0x352ada;return this[_0x319b85(0x241)](_0x34a6eb,_0x1c3dd1,0x200);},Game_Map[_0x352ada(0x27d)][_0x352ada(0x1c2)]=function(_0x28fab6,_0x33be58){return this['checkPassageNoEvents'](_0x28fab6,_0x33be58,0x400);},Game_Map[_0x352ada(0x27d)]['checkPassageNoEvents']=function(_0xebfa4a,_0xd8130f,_0x57a552){const _0x81eaa9=_0x352ada,_0x5b2b92=this['tilesetFlags'](),_0x9bba28=this[_0x81eaa9(0x2e1)](_0xebfa4a,_0xd8130f);for(const _0x3e0e90 of _0x9bba28){if(_0x81eaa9(0x15d)===_0x81eaa9(0x15d)){const _0x4257f3=_0x5b2b92[_0x3e0e90];if(_0x4257f3===undefined||_0x4257f3===null){let _0x395005=_0x81eaa9(0x15f)+'\x0a';_0x395005+='Click\x20\x22Copy\x20Page\x22\x20from\x20another\x20tileset\x27s\x20pages'+'\x0a',_0x395005+='and\x20add\x20it\x20onto\x20this\x20one.',alert(_0x395005),SceneManager[_0x81eaa9(0x261)]();}if((_0x4257f3&0x10)!==0x0)continue;if((_0x4257f3&_0x57a552)===0x0)return!![];if((_0x4257f3&_0x57a552)===_0x57a552)return![];}else return this[_0x81eaa9(0x293)]||0x0;}return![];},VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x260)]=Game_CharacterBase[_0x352ada(0x27d)][_0x352ada(0x283)],Game_CharacterBase['prototype'][_0x352ada(0x283)]=function(){const _0x1f5c64=_0x352ada;this[_0x1f5c64(0x25a)](),VisuMZ[_0x1f5c64(0x1bf)][_0x1f5c64(0x260)]['call'](this);},Game_CharacterBase['prototype'][_0x352ada(0x25a)]=function(){const _0x317027=_0x352ada;if(this[_0x317027(0x282)]()){if(_0x317027(0x234)==='iKWQJ')this[_0x317027(0x1a3)]();else{if(this[_0x317027(0x199)])return![];return this[_0x317027(0x274)][_0x317027(0x1ec)]>0x0||this[_0x317027(0x222)][_0x317027(0x1ec)]>0x0;}}},Game_CharacterBase[_0x352ada(0x27d)]['needsUpdatePressurePlate']=function(){const _0x4a69c9=_0x352ada;if(!this[_0x4a69c9(0x1a8)]())return![];this[_0x4a69c9(0x157)]=this[_0x4a69c9(0x157)]||{};if(this['_heavyObjCache'][_0x4a69c9(0x232)]!==this['x'])return!![];if(this['_heavyObjCache'][_0x4a69c9(0x26a)]!==this['y'])return!![];if(this[_0x4a69c9(0x157)]['jumpHeight']!==this[_0x4a69c9(0x291)]())return!![];if(this['_heavyObjCache'][_0x4a69c9(0x14c)]!==this[_0x4a69c9(0x14c)])return!![];return![];},Game_CharacterBase[_0x352ada(0x27d)][_0x352ada(0x1a8)]=function(){return![];},Game_CharacterBase[_0x352ada(0x27d)]['requestRefreshPressurePlate']=function(){const _0x40ff30=_0x352ada;this[_0x40ff30(0x157)]=this[_0x40ff30(0x157)]||{},this[_0x40ff30(0x157)][_0x40ff30(0x232)]=this['x'],this['_heavyObjCache'][_0x40ff30(0x26a)]=this['y'],this[_0x40ff30(0x157)]['jumpHeight']=this[_0x40ff30(0x291)](),this[_0x40ff30(0x157)][_0x40ff30(0x14c)]=this[_0x40ff30(0x14c)],$gameMap[_0x40ff30(0x1a3)]();};!Game_CharacterBase[_0x352ada(0x27d)]['ccwX']&&(Game_CharacterBase['prototype'][_0x352ada(0x1fd)]=function(){const _0x221ebc=_0x352ada,_0x3df297=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x221ebc(0x275)]()];return $gameMap[_0x221ebc(0x15b)](this['x'],_0x3df297);},Game_CharacterBase['prototype'][_0x352ada(0x17b)]=function(){const _0x1fce11=_0x352ada,_0x756b04=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x1fce11(0x275)]()];return $gameMap['roundYWithDirection'](this['y'],_0x756b04);},Game_CharacterBase[_0x352ada(0x27d)]['cwX']=function(){const _0x3c4b8e=_0x352ada,_0x38521d=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this['direction']()];return $gameMap[_0x3c4b8e(0x15b)](this['x'],_0x38521d);},Game_CharacterBase['prototype'][_0x352ada(0x1ca)]=function(){const _0x4ff8b1=_0x352ada,_0x8b7792=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x4ff8b1(0x275)]()];return $gameMap[_0x4ff8b1(0x2a3)](this['y'],_0x8b7792);});Game_CharacterBase[_0x352ada(0x27d)]['submergedEffect']=function(){const _0x308bb4=_0x352ada;return this[_0x308bb4(0x1f0)];},Game_CharacterBase[_0x352ada(0x27d)]['submergedEffectOffset']=function(){const _0x31d45f=_0x352ada;return this[_0x31d45f(0x293)]||0x0;},Game_Player['prototype'][_0x352ada(0x237)]=function(_0x40bda2,_0x1a4623,_0x3f4439){const _0x49cf87=_0x352ada;if(!_0x40bda2)return;if(_0x40bda2[_0x49cf87(0x160)]())return;if(_0x40bda2[_0x49cf87(0x2b7)](_0x40bda2['x'],_0x40bda2['y']))return;const _0x11e4e3=$gameMap[_0x49cf87(0x263)](this['x'],this['y'],_0x40bda2['x'],_0x40bda2['y']);if(_0x11e4e3>0x1)return;if(_0x40bda2['isOnLadder']())return;if(this[_0x49cf87(0x211)]())return;const _0x2c8c63=0xa-this[_0x49cf87(0x275)]();if(_0x2c8c63%0x2!==0x0)return;if(!this['canPass'](this['x'],this['y'],_0x2c8c63))return;const _0xce5436=this[_0x49cf87(0x26e)];this[_0x49cf87(0x26e)]=!![];if(!_0x40bda2[_0x49cf87(0x16c)](_0x40bda2['x'],_0x40bda2['y'],_0x2c8c63))return;this[_0x49cf87(0x26e)]=_0xce5436;const _0x2fd136=$gameMap[_0x49cf87(0x15b)](this['x'],_0x2c8c63),_0x182d4f=$gameMap[_0x49cf87(0x2a3)](this['y'],_0x2c8c63);if($gameMap[_0x49cf87(0x265)](_0x2fd136,_0x182d4f))return;let _0x1b296a=0x0;if(_0x2c8c63===0x2)_0x1b296a=Game_Character['ROUTE_MOVE_DOWN'];if(_0x2c8c63===0x4)_0x1b296a=Game_Character[_0x49cf87(0x1fa)];if(_0x2c8c63===0x6)_0x1b296a=Game_Character[_0x49cf87(0x2eb)];if(_0x2c8c63===0x8)_0x1b296a=Game_Character['ROUTE_MOVE_UP'];const _0x276bbb=_0x40bda2['moveSpeed'](),_0x3c6140=$gamePlayer['moveSpeed'](),_0x5cc968=Math[_0x49cf87(0x2e9)](_0x276bbb,_0x3c6140);{if(_0x49cf87(0x2be)===_0x49cf87(0x2be)){const _0x7ef815={'list':[],'repeat':![],'skippable':!![],'wait':!![]};_0x7ef815[_0x49cf87(0x151)][_0x49cf87(0x212)]({'code':Game_Character[_0x49cf87(0x248)],'parameters':['this.gatherFollowersAndWait()'],'indent':null}),_0x7ef815['list'][_0x49cf87(0x212)]({'code':Game_Character[_0x49cf87(0x248)],'parameters':['this.pullFollowers(true)'],'indent':null});_0x1a4623&&_0x1a4623[_0x49cf87(0x168)]!==''&&(_0x49cf87(0x2f4)===_0x49cf87(0x278)?this[_0x49cf87(0x274)]=_0x4ee605(_0x56bd6a['$1'])[_0x49cf87(0x2e7)](',')[_0x49cf87(0x1f8)](_0x245a1f=>_0x245a1f['trim']()):_0x7ef815[_0x49cf87(0x151)][_0x49cf87(0x212)]({'code':Game_Character[_0x49cf87(0x25c)],'parameters':[_0x1a4623],'indent':null}));_0x7ef815['list']['push']({'code':Game_Character[_0x49cf87(0x2a4)],'indent':null}),_0x7ef815[_0x49cf87(0x151)][_0x49cf87(0x212)]({'code':Game_Character[_0x49cf87(0x2ca)],'parameters':[_0x5cc968],'indent':null}),_0x7ef815['list'][_0x49cf87(0x212)]({'code':_0x1b296a,'indent':null}),_0x7ef815[_0x49cf87(0x151)][_0x49cf87(0x212)]({'code':Game_Character[_0x49cf87(0x2ca)],'parameters':[_0x3c6140],'indent':null}),_0x7ef815[_0x49cf87(0x151)][_0x49cf87(0x212)]({'code':Game_Character['ROUTE_DIR_FIX_OFF'],'indent':null}),_0x7ef815['list'][_0x49cf87(0x212)]({'code':Game_Character[_0x49cf87(0x248)],'parameters':[_0x49cf87(0x229)],'indent':null});if(_0x3f4439)_0x7ef815[_0x49cf87(0x151)]['push']({'code':Game_Character['ROUTE_SCRIPT'],'parameters':['this.checkEventTriggerHere([1,\x202])'],'indent':null});_0x7ef815[_0x49cf87(0x151)][_0x49cf87(0x212)]({'code':Game_Character['ROUTE_END']}),this[_0x49cf87(0x1cf)](_0x7ef815);}else this[_0x49cf87(0x222)]=_0x10576b(_0x5c32a1['$1'])[_0x49cf87(0x2e7)](',')[_0x49cf87(0x1f8)](_0xe9b41=>_0xe9b41[_0x49cf87(0x2b5)]());}{if(_0x49cf87(0x14d)!=='MhJEp'){const _0x58328e={'list':[],'repeat':![],'skippable':!![],'wait':!![]};_0x58328e[_0x49cf87(0x151)][_0x49cf87(0x212)]({'code':Game_Character[_0x49cf87(0x248)],'parameters':[_0x49cf87(0x1e8)],'indent':null}),_0x58328e[_0x49cf87(0x151)][_0x49cf87(0x212)]({'code':Game_Character['ROUTE_THROUGH_ON'],'indent':null}),_0x58328e['list'][_0x49cf87(0x212)]({'code':Game_Character[_0x49cf87(0x2ca)],'parameters':[_0x5cc968],'indent':null}),_0x58328e['list']['push']({'code':_0x1b296a,'indent':null}),_0x58328e[_0x49cf87(0x151)]['push']({'code':Game_Character[_0x49cf87(0x2ca)],'parameters':[_0x276bbb],'indent':null}),_0x58328e[_0x49cf87(0x151)]['push']({'code':Game_Character[_0x49cf87(0x2e8)],'indent':null}),_0x58328e[_0x49cf87(0x151)][_0x49cf87(0x212)]({'code':Game_Character[_0x49cf87(0x248)],'parameters':['this._gatherWait\x20=\x20false'],'indent':null}),_0x58328e[_0x49cf87(0x151)]['push']({'code':Game_Character[_0x49cf87(0x29e)]}),_0x40bda2['forceMoveRoute'](_0x58328e);}else this[_0x49cf87(0x217)]=_0x1738a2(_0x40f03c['$1'])[_0x49cf87(0x2e7)](',')[_0x49cf87(0x1f8)](_0x4c38f3=>_0x4c38f3[_0x49cf87(0x2b5)]());}const _0x40ce0b=$gameTemp[_0x49cf87(0x181)]();_0x40ce0b[_0x49cf87(0x1b8)]=_0x40bda2['eventId'](),_0x40ce0b[_0x49cf87(0x246)](_0x49cf87(0x2cc));},Game_Player[_0x352ada(0x27d)]['pushTargetEvent']=function(_0x5c255b,_0x5ec774,_0x1039ac,_0x35d4f1){const _0x3bbbf1=_0x352ada;if(!_0x5c255b)return;if(_0x5c255b[_0x3bbbf1(0x160)]())return;if(_0x5c255b['inWaterTile'](_0x5c255b['x'],_0x5c255b['y']))return;const _0x4a40c3=$gameMap['distance'](this['x'],this['y'],_0x5c255b['x'],_0x5c255b['y']);if(_0x4a40c3>0x1)return;if(_0x5c255b['isOnLadder']())return;if(this['isOnLadder']())return;const _0xf60628=this[_0x3bbbf1(0x275)]();if(_0xf60628%0x2!==0x0)return;if(!_0x5c255b[_0x3bbbf1(0x16c)](_0x5c255b['x'],_0x5c255b['y'],_0xf60628))return;const _0x25fba0=$gameMap[_0x3bbbf1(0x15b)](_0x5c255b['x'],_0xf60628),_0x458faf=$gameMap[_0x3bbbf1(0x2a3)](_0x5c255b['y'],_0xf60628);if($gameMap[_0x3bbbf1(0x265)](_0x25fba0,_0x458faf))return;if(_0x5ec774&&_0x5ec774['name']!=='')AudioManager[_0x3bbbf1(0x1f1)](_0x5ec774);let _0x4b55d7=0x0;if(_0xf60628===0x2)_0x4b55d7=Game_Character[_0x3bbbf1(0x239)];if(_0xf60628===0x4)_0x4b55d7=Game_Character['ROUTE_MOVE_LEFT'];if(_0xf60628===0x6)_0x4b55d7=Game_Character[_0x3bbbf1(0x2eb)];if(_0xf60628===0x8)_0x4b55d7=Game_Character[_0x3bbbf1(0x26d)];const _0x2e36f4=_0x5c255b[_0x3bbbf1(0x1ab)](),_0x31cb37=_0x1039ac?$gamePlayer[_0x3bbbf1(0x1ab)]():_0x2e36f4,_0x47d5a8=Math[_0x3bbbf1(0x2e9)](_0x2e36f4,_0x31cb37);{const _0x3354f2={'list':[],'repeat':![],'skippable':!![],'wait':!![]};_0x3354f2[_0x3bbbf1(0x151)]['push']({'code':Game_Character[_0x3bbbf1(0x2ca)],'parameters':[_0x47d5a8],'indent':null}),_0x3354f2['list']['push']({'code':_0x4b55d7,'indent':null}),_0x3354f2['list'][_0x3bbbf1(0x212)]({'code':Game_Character[_0x3bbbf1(0x2ca)],'parameters':[_0x2e36f4],'indent':null}),_0x3354f2[_0x3bbbf1(0x151)][_0x3bbbf1(0x212)]({'code':Game_Character[_0x3bbbf1(0x29e)]}),_0x5c255b[_0x3bbbf1(0x1cf)](_0x3354f2);}if(_0x1039ac){const _0x2aee49={'list':[],'repeat':![],'skippable':!![],'wait':!![]};_0x2aee49['list']['push']({'code':Game_Character[_0x3bbbf1(0x2ca)],'parameters':[_0x47d5a8],'indent':null}),_0x2aee49[_0x3bbbf1(0x151)][_0x3bbbf1(0x212)]({'code':_0x4b55d7,'indent':null}),_0x2aee49['list'][_0x3bbbf1(0x212)]({'code':Game_Character[_0x3bbbf1(0x2ca)],'parameters':[_0x31cb37],'indent':null}),_0x2aee49['list'][_0x3bbbf1(0x212)]({'code':Game_Character[_0x3bbbf1(0x272)],'indent':null});if(_0x35d4f1)_0x2aee49['list'][_0x3bbbf1(0x212)]({'code':Game_Character[_0x3bbbf1(0x248)],'parameters':[_0x3bbbf1(0x24a)],'indent':null});_0x2aee49['list'][_0x3bbbf1(0x212)]({'code':Game_Character[_0x3bbbf1(0x29e)]}),this[_0x3bbbf1(0x1cf)](_0x2aee49);}const _0x1d8f83=$gameTemp[_0x3bbbf1(0x181)]();_0x1d8f83[_0x3bbbf1(0x1b8)]=_0x5c255b[_0x3bbbf1(0x219)](),_0x1d8f83[_0x3bbbf1(0x246)]('route');},Game_Player['prototype']['gatherFollowersAndWait']=function(){const _0x47e519=_0x352ada;this[_0x47e519(0x19f)](),this[_0x47e519(0x297)]=!![];},VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x207)]=Game_Character[_0x352ada(0x27d)][_0x352ada(0x276)],Game_Character['prototype'][_0x352ada(0x276)]=function(){const _0x3440ee=_0x352ada;if(this[_0x3440ee(0x297)]&&$gamePlayer['areFollowersGathering']())return;VisuMZ[_0x3440ee(0x1bf)][_0x3440ee(0x207)][_0x3440ee(0x2d3)](this);},Game_Player['prototype'][_0x352ada(0x1d8)]=function(_0x356314){const _0x451108=_0x352ada;this[_0x451108(0x2dc)][_0x451108(0x1d8)](_0x356314);if(!_0x356314)this['_gatherWait']=![];},Game_Player[_0x352ada(0x27d)][_0x352ada(0x1a8)]=function(){const _0xe0e992=_0x352ada;return VisuMZ[_0xe0e992(0x1bf)]['Settings'][_0xe0e992(0x2b1)][_0xe0e992(0x2fe)];},Game_Follower[_0x352ada(0x27d)][_0x352ada(0x1a8)]=function(){const _0x431782=_0x352ada;if(!VisuMZ[_0x431782(0x1bf)][_0x431782(0x2d7)][_0x431782(0x2b1)]['HeavyFollowers'])return![];return this[_0x431782(0x29c)]()&&this[_0x431782(0x1dc)]()!=='';},Game_Followers[_0x352ada(0x27d)]['pullFollowers']=function(_0x3b19f7){const _0xc4c5b8=_0x352ada;for(let _0x43c2d5=this[_0xc4c5b8(0x180)]['length']-0x1;_0x43c2d5>=0x0;_0x43c2d5--){this[_0xc4c5b8(0x180)][_0x43c2d5][_0xc4c5b8(0x208)]=_0x3b19f7;if(this[_0xc4c5b8(0x180)][_0x43c2d5]['isMoving']())continue;if(_0x3b19f7)this[_0xc4c5b8(0x180)][_0x43c2d5]['chasePull']($gamePlayer);}},Game_Follower[_0x352ada(0x27d)]['chasePull']=function(_0xc70922){const _0xd1c80b=_0x352ada;this[_0xd1c80b(0x186)](_0xc70922[_0xd1c80b(0x1c1)](),_0xc70922[_0xd1c80b(0x2fa)](),_0xc70922[_0xd1c80b(0x275)]());},Game_Follower[_0x352ada(0x27d)]['chasePullXy']=function(_0x25988c,_0x229391,_0x22a3bf){const _0x38d975=_0x352ada,_0x407d46=this[_0x38d975(0x1fe)](_0x25988c),_0x5a1ba7=this['deltaYFrom'](_0x229391);if(_0x407d46!==0x0||_0x5a1ba7!==0x0){if(_0x407d46!==0x0&&_0x5a1ba7!==0x0){if(_0x38d975(0x2f1)!==_0x38d975(0x2f1)){this[_0x38d975(0x2dc)][_0x38d975(0x1d8)](_0x398f47);if(!_0x1f7793)this[_0x38d975(0x297)]=![];}else this[_0x38d975(0x2a2)](_0x407d46>0x0?0x4:0x6,_0x5a1ba7>0x0?0x8:0x2);}else{if(_0x407d46!==0x0)this[_0x38d975(0x2da)](_0x407d46>0x0?0x4:0x6);else _0x5a1ba7!==0x0&&this['moveStraight'](_0x5a1ba7>0x0?0x8:0x2);}}this['setDirection'](_0x22a3bf),this[_0x38d975(0x25e)]($gamePlayer['realMoveSpeed']());},VisuMZ['EventChainReact'][_0x352ada(0x2b4)]=Game_Follower[_0x352ada(0x27d)][_0x352ada(0x182)],Game_Follower['prototype'][_0x352ada(0x182)]=function(_0x706cf){const _0x17bc6c=_0x352ada;if(this[_0x17bc6c(0x208)])return;VisuMZ[_0x17bc6c(0x1bf)][_0x17bc6c(0x2b4)][_0x17bc6c(0x2d3)](this,_0x706cf);},Game_Event[_0x352ada(0x2b0)]={'tick':VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x2d7)][_0x352ada(0x2c0)][_0x352ada(0x2e6)]||0x1,'fast':VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x2d7)][_0x352ada(0x2c0)][_0x352ada(0x2ad)]||0x8,'quick':VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x2d7)][_0x352ada(0x2c0)][_0x352ada(0x2b8)]||0xf,'short':VisuMZ['EventChainReact'][_0x352ada(0x2d7)][_0x352ada(0x2c0)][_0x352ada(0x1a1)]||0x14,'avg':VisuMZ['EventChainReact'][_0x352ada(0x2d7)]['Speed'][_0x352ada(0x21f)]||0x1e,'average':VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x2d7)]['Speed']['avg']||0x1e,'slow':VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x2d7)][_0x352ada(0x2c0)][_0x352ada(0x1cc)]||0x28,'long':VisuMZ['EventChainReact'][_0x352ada(0x2d7)][_0x352ada(0x2c0)][_0x352ada(0x175)]||0x3c,'late':VisuMZ['EventChainReact']['Settings'][_0x352ada(0x2c0)][_0x352ada(0x2bc)]||0x78},VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x1dd)]=Game_Event[_0x352ada(0x27d)][_0x352ada(0x273)],Game_Event[_0x352ada(0x27d)]['clearPageSettings']=function(){const _0x56fa43=_0x352ada;VisuMZ['EventChainReact'][_0x56fa43(0x1dd)]['call'](this),this[_0x56fa43(0x16a)]();},VisuMZ[_0x352ada(0x1bf)]['Game_Event_setupPageSettings']=Game_Event[_0x352ada(0x27d)][_0x352ada(0x1e1)],Game_Event['prototype'][_0x352ada(0x1e1)]=function(){const _0x187b70=_0x352ada;VisuMZ[_0x187b70(0x1bf)][_0x187b70(0x2dd)][_0x187b70(0x2d3)](this),this['setupEventChainReactEffects']();},Game_Event['prototype']['setupEventChainReactEffects']=function(){const _0x37c5fe=_0x352ada;if(!this[_0x37c5fe(0x158)]())return;this['initEventChainReactEffects'](),this[_0x37c5fe(0x192)](),this[_0x37c5fe(0x24b)]();},Game_Event[_0x352ada(0x27d)][_0x352ada(0x192)]=function(){const _0x109179=_0x352ada;let _0x409134=this[_0x109179(0x158)]()['note'];if(_0x409134==='')return;_0x409134=_0x409134[_0x109179(0x23f)](/>[ ]*</i,'>\x0a<'),this[_0x109179(0x2cd)](_0x409134);},Game_Event[_0x352ada(0x27d)]['setupEventChainReactCommentTags']=function(){const _0x51103e=_0x352ada;if(!this[_0x51103e(0x202)]())return;const _0x5aeca1=this['list']();let _0x33df0f='';for(const _0x5a4833 of _0x5aeca1){if([0x6c,0x198][_0x51103e(0x2b6)](_0x5a4833[_0x51103e(0x1ea)])){if(_0x33df0f!=='')_0x33df0f+='\x0a';_0x33df0f+=_0x5a4833[_0x51103e(0x225)][0x0];}}this[_0x51103e(0x2cd)](_0x33df0f);},Game_Event[_0x352ada(0x27d)][_0x352ada(0x2a0)]=function(){return!![];},Game_Event[_0x352ada(0x27d)]['initEventChainReactEffects']=function(){const _0x47ef27=_0x352ada;this[_0x47ef27(0x188)]=![],this['_canPull']=![],this[_0x47ef27(0x197)]={},this[_0x47ef27(0x203)]=[],this['_pressurePlateSwitches']=[],this[_0x47ef27(0x1e2)]=![];if(this[_0x47ef27(0x2f9)]===0x1){if('YRTyl'==='SZnBp')return this[_0x47ef27(0x22d)]&&this[_0x47ef27(0x22d)][_0x47ef27(0x17a)]===_0x57a48e;else this[_0x47ef27(0x1e2)]=VisuMZ[_0x47ef27(0x1bf)][_0x47ef27(0x2d7)][_0x47ef27(0x2b1)]['HeavySameEvents'];}this[_0x47ef27(0x24f)]=[],this[_0x47ef27(0x1b1)]={},this[_0x47ef27(0x20c)]=[_0x47ef27(0x156)],this[_0x47ef27(0x16b)]=-0x1,this[_0x47ef27(0x1ff)]=-0x1,this[_0x47ef27(0x2fc)]=[],this[_0x47ef27(0x169)]=[],this[_0x47ef27(0x174)]=[],this[_0x47ef27(0x217)]=[],this[_0x47ef27(0x1c8)]=[],this[_0x47ef27(0x236)]=[],this['_resurfaceOn']=[],this[_0x47ef27(0x222)]=[],this['_submergeEffect']=![],this[_0x47ef27(0x293)]=0x0,this[_0x47ef27(0x2b9)]=![];},Game_Event[_0x352ada(0x27d)]['initEventChainReactType']=function(_0xe88715){const _0x435eef=_0x352ada;if(this[_0x435eef(0x197)]===undefined)this[_0x435eef(0x16a)]();_0xe88715=_0xe88715['toLowerCase']()[_0x435eef(0x2b5)](),this[_0x435eef(0x197)][_0xe88715]=this[_0x435eef(0x197)][_0xe88715]||{},this[_0x435eef(0x197)][_0xe88715][_0x435eef(0x25f)]=[],this['_chainReactions'][_0xe88715][_0x435eef(0x2f5)]=[];},Game_Event[_0x352ada(0x27d)][_0x352ada(0x2cd)]=function(_0xee8e33){const _0x2f5418=_0x352ada,_0x4e817c=VisuMZ[_0x2f5418(0x1bf)][_0x2f5418(0x22f)];if(_0xee8e33[_0x2f5418(0x2c6)](_0x4e817c['CanPush'])){if(_0x2f5418(0x1c4)!=='zwUnh'){const _0x55657f=_0x15c4e0[_0x2f5418(0x1bf)][_0x2f5418(0x1ee)](this,_0x24e5c0),_0x5e5fca=-this[_0x2f5418(0x17c)]['left'],_0x1ad3e5=this[_0x2f5418(0x17c)][_0x2f5418(0x154)],_0xbdf5a1=-this[_0x2f5418(0x17c)]['up'],_0x532ce1=this[_0x2f5418(0x17c)]['down'];for(let _0x4aeaf3=_0x5e5fca;_0x4aeaf3<=_0x1ad3e5;_0x4aeaf3++){for(let _0x296c2c=_0xbdf5a1;_0x296c2c<=_0x532ce1;_0x296c2c++){for(const _0x311e83 of _0x55657f){const _0x23b4b9=(_0x311e83['x']??-0x1)+_0x4aeaf3,_0x5037f3=(_0x311e83['y']??-0x1)+_0x296c2c;_0x240937[_0x2f5418(0x184)](_0xbc90f1,_0x23b4b9,_0x5037f3);}}}}else this[_0x2f5418(0x188)]=!![],this[_0x2f5418(0x2f9)]=0x1;}_0xee8e33['match'](_0x4e817c[_0x2f5418(0x205)])&&(this['_canPull']=!![],this[_0x2f5418(0x2f9)]=0x1);{if('iliwW'!==_0x2f5418(0x159)){const _0x13d521=_0x4e817c[_0x2f5418(0x1ba)],_0x3f300b=_0xee8e33[_0x2f5418(0x2c6)](_0x13d521);if(_0x3f300b){if('VnJZb'===_0x2f5418(0x2c9))for(const _0x14daa3 of _0x3f300b){_0x14daa3[_0x2f5418(0x2c6)](_0x13d521);const _0x2ba801=String(RegExp['$1'])[_0x2f5418(0x286)]()['trim'](),_0x566879=String(RegExp['$2'])[_0x2f5418(0x2e7)](',')[_0x2f5418(0x1f8)](_0x505e12=>_0x505e12[_0x2f5418(0x2b5)]());this['initEventChainReactType'](_0x2ba801);const _0x5f3adc=this[_0x2f5418(0x197)][_0x2ba801]['reactSwitchOn'];VisuMZ[_0x2f5418(0x1bf)][_0x2f5418(0x1bb)](_0x5f3adc,_0x566879);}else{const _0x5b63cb=_0x521e38['x']??-0x1,_0x1af253=_0x452a19['y']??-0x1;this['createChainReactionCatalystAtXy'](_0x355cef,_0x5b63cb+_0x1a8e1a,_0x1af253+_0xecd321,this);}}}else{if(!this['isConductor']()&&!this[_0x2f5418(0x1b5)]())return![];this[_0x2f5418(0x2ac)]=this[_0x2f5418(0x2ac)]||{};if(this[_0x2f5418(0x2ac)][_0x2f5418(0x232)]!==this['x'])return!![];if(this[_0x2f5418(0x2ac)][_0x2f5418(0x26a)]!==this['y'])return!![];if(this[_0x2f5418(0x2ac)][_0x2f5418(0x291)]!==this[_0x2f5418(0x291)]())return!![];if(this[_0x2f5418(0x2ac)][_0x2f5418(0x14c)]!==this[_0x2f5418(0x14c)])return!![];return![];}}{if(_0x2f5418(0x1f5)===_0x2f5418(0x249)){_0x15cf59[_0x2f5418(0x2c6)](_0x229178);const _0x30c8a5=_0xf86077(_0xa2bdfb['$1'])[_0x2f5418(0x286)]()[_0x2f5418(0x2b5)](),_0x518bf9=_0x18af8e(_0xea0170['$2'])[_0x2f5418(0x2e7)](',')[_0x2f5418(0x1f8)](_0x1bf0dd=>_0x1bf0dd['trim']());this[_0x2f5418(0x1b1)][_0x30c8a5]=_0x518bf9;}else{const _0x2483c2=_0x4e817c[_0x2f5418(0x1aa)],_0x3da5a7=_0xee8e33[_0x2f5418(0x2c6)](_0x2483c2);if(_0x3da5a7){if(_0x2f5418(0x21a)!==_0x2f5418(0x2ff))for(const _0xff3ef of _0x3da5a7){_0xff3ef['match'](_0x2483c2);const _0x4bed1f=String(RegExp['$1'])['toLowerCase']()[_0x2f5418(0x2b5)](),_0x2d63d7=String(RegExp['$2'])[_0x2f5418(0x2e7)](',')[_0x2f5418(0x1f8)](_0x413954=>_0x413954[_0x2f5418(0x2b5)]());this[_0x2f5418(0x25b)](_0x4bed1f);const _0x45b789=this[_0x2f5418(0x197)][_0x4bed1f][_0x2f5418(0x2f5)];VisuMZ[_0x2f5418(0x1bf)]['AddEntries'](_0x45b789,_0x2d63d7);}else{const _0x3c6bb3=this['_decaySwitchOff'];this[_0x2f5418(0x1ae)](_0x3c6bb3,![]);}}}}{const _0x45bb41=_0x4e817c[_0x2f5418(0x23d)],_0x38945e=_0xee8e33[_0x2f5418(0x2c6)](_0x45bb41);if(_0x38945e){if(_0x2f5418(0x255)===_0x2f5418(0x255))for(const _0x1e762c of _0x38945e){if('JEiPq'===_0x2f5418(0x2a9))this[_0x2f5418(0x188)]=!![],this[_0x2f5418(0x2f9)]=0x1;else{_0x1e762c['match'](_0x45bb41);const _0x5cea3d=String(RegExp['$1'])[_0x2f5418(0x286)]()['trim'](),_0x4455b0=String(RegExp['$2'])[_0x2f5418(0x286)]()['trim'](),_0xc93de9=String(RegExp['$3'])['split'](',')[_0x2f5418(0x1f8)](_0x53442a=>_0x53442a[_0x2f5418(0x286)]()[_0x2f5418(0x2b5)]()),_0x69ada2=Game_Event['EVENT_CHAIN_REACT_SPEED'],_0x41136b=_0x69ada2[_0x4455b0]||_0x69ada2[_0x2f5418(0x2ad)];for(const _0xd6ec9b of _0xc93de9){if(_0x2f5418(0x1c7)!==_0x2f5418(0x2c3)){const _0xa4b438=[_0x41136b,_0x5cea3d,_0xd6ec9b];this[_0x2f5418(0x203)]['push'](_0xa4b438);}else{if(!_0x2c3f3e[_0x2f5418(0x2d0)]())return;_0x1de1aa[_0x2f5418(0x2c2)](_0x4b76b8,_0x3d9d51);const _0x565dc7=_0x204d93[_0x2f5418(0x164)](_0x353434['frontX'](),_0x5f4875['frontY']())[_0x2f5418(0x1c0)](_0x28cb85=>_0x28cb85&&_0x28cb85['canBePulled']());if(_0x565dc7[_0x2f5418(0x1ec)]<=0x0)return;const _0x25a4dc=_0x565dc7[0x0],_0xd981a9={'name':_0x1b4de8[_0x2f5418(0x27b)]['name']||'','volume':_0x30d567['Sound'][_0x2f5418(0x21c)]||0x5a,'pitch':_0x3d8ccc['Sound'][_0x2f5418(0x2bf)]||0x64,'pan':_0x253f3a[_0x2f5418(0x27b)]['pan']||0x0},_0x160053=_0x5d57c7[_0x2f5418(0x18c)]??!![];_0x1fe04b['pullTargetEvent'](_0x25a4dc,_0xd981a9,_0x160053);}}}}else this[_0x2f5418(0x16b)]=_0x1efa4d['max'](_0x2adcf5(_0x3df3d2['$1']),0x1),this[_0x2f5418(0x2fc)]=_0xdd1f80(_0x5ab151['$2'])[_0x2f5418(0x2e7)](',')[_0x2f5418(0x1f8)](_0x17a9e6=>_0x17a9e6['trim']());}}{const _0xad8b25=_0x4e817c[_0x2f5418(0x253)],_0x51e4c4=_0xee8e33['match'](_0xad8b25);if(_0x51e4c4)for(const _0x554071 of _0x51e4c4){_0x554071['match'](_0xad8b25);const _0x5233c4=String(RegExp['$1'])[_0x2f5418(0x286)]()[_0x2f5418(0x2b5)](),_0x496898=Number(RegExp['$2'])||0x1,_0x571f58=String(RegExp['$3'])['split'](',')[_0x2f5418(0x1f8)](_0x5c1b7f=>_0x5c1b7f[_0x2f5418(0x286)]()['trim']());for(const _0x39d76f of _0x571f58){const _0x5487d1=[_0x496898,_0x5233c4,_0x39d76f];this[_0x2f5418(0x203)][_0x2f5418(0x212)](_0x5487d1);}}}_0xee8e33[_0x2f5418(0x2c6)](_0x4e817c['PressurePlate'])&&(this[_0x2f5418(0x2d6)]=String(RegExp['$1'])[_0x2f5418(0x2e7)](',')[_0x2f5418(0x1f8)](_0x1661bc=>_0x1661bc[_0x2f5418(0x18e)]()[_0x2f5418(0x2b5)]()),this[_0x2f5418(0x2f9)]=0x0,this[_0x2f5418(0x1e2)]=![],this[_0x2f5418(0x188)]=![],this['_canPull']=![]);_0xee8e33[_0x2f5418(0x2c6)](_0x4e817c[_0x2f5418(0x18f)])&&(this[_0x2f5418(0x2d6)]['length']<=0x0&&(_0x2f5418(0x1df)!==_0x2f5418(0x1df)?this[_0x2f5418(0x24f)][_0x2f5418(0x212)](_0x53c29d):(this[_0x2f5418(0x2f9)]=0x1,this[_0x2f5418(0x1e2)]=!![])));_0xee8e33[_0x2f5418(0x2c6)](_0x4e817c[_0x2f5418(0x19c)])&&(this['_heavyObject']=![]);{const _0x2bb99d=_0x4e817c[_0x2f5418(0x28e)],_0x5e45b4=_0xee8e33['match'](_0x2bb99d);if(_0x5e45b4)for(const _0x44a1e7 of _0x5e45b4){if(_0x2f5418(0x1e5)===_0x2f5418(0x1a2)){const _0x39f9ba=_0xb26795[_0x2f5418(0x29f)](_0x5603f5,_0x5df783);if(_0x39f9ba[_0x2f5418(0x1ec)]>0x0){if(_0x1c7b94===0x200)return![];if(_0x4d4f5a===0x400)return![];return!![];}else return _0x4ed012[_0x2f5418(0x1bf)]['Game_Map_checkPassage'][_0x2f5418(0x2d3)](this,_0x24cf9a,_0x5a47b3,_0x5731f7);}else{_0x44a1e7['match'](_0x2bb99d);const _0x255b78=String(RegExp['$1'])[_0x2f5418(0x286)]()[_0x2f5418(0x2b5)]();!this[_0x2f5418(0x24f)]['includes'](_0x255b78)&&this[_0x2f5418(0x24f)][_0x2f5418(0x212)](_0x255b78);}}}{if('DWBUW'===_0x2f5418(0x1b2)){const _0x54d4ac=_0x4e817c['Conductor'],_0x7ca945=_0xee8e33['match'](_0x54d4ac);if(_0x7ca945)for(const _0x32f788 of _0x7ca945){_0x32f788[_0x2f5418(0x2c6)](_0x54d4ac);const _0xdc528a=String(RegExp['$1'])['toLowerCase']()[_0x2f5418(0x2b5)](),_0x1267dd=String(RegExp['$2'])[_0x2f5418(0x2e7)](',')[_0x2f5418(0x1f8)](_0xdef1fa=>_0xdef1fa[_0x2f5418(0x2b5)]());this[_0x2f5418(0x1b1)][_0xdc528a]=_0x1267dd;}}else _0x31027e=_0x28e8a6['toLowerCase']()[_0x2f5418(0x2b5)](),this[_0x2f5418(0x1cd)]=this[_0x2f5418(0x1cd)]||{},this['_conductionState'][_0xb7d1c8]=_0xd94123;}_0xee8e33['match'](_0x4e817c[_0x2f5418(0x21d)])&&(this[_0x2f5418(0x20c)]=String(RegExp['$1'])['split'](',')[_0x2f5418(0x1f8)](_0x3b2c69=>_0x3b2c69[_0x2f5418(0x286)]()[_0x2f5418(0x2b5)]()));if(_0xee8e33[_0x2f5418(0x2c6)](_0x4e817c[_0x2f5418(0x20d)]))this[_0x2f5418(0x16b)]=Math['max'](Number(RegExp['$1']),0x1),this[_0x2f5418(0x2fc)]=String(RegExp['$2'])[_0x2f5418(0x2e7)](',')['map'](_0x11e6e5=>_0x11e6e5[_0x2f5418(0x2b5)]());else{if(_0xee8e33['match'](_0x4e817c[_0x2f5418(0x235)])){if(_0x2f5418(0x218)!=='SlsHx'){const _0x249d44=this[_0x2f5418(0x280)]['x'],_0x21ef70=this[_0x2f5418(0x280)]['y'],_0x187355=_0x4016cc[_0x2f5418(0x296)](_0x249d44,_0x21ef70);if(_0x187355[_0x2f5418(0x1ec)]<=0x0)return;const _0xc7a201=_0x1b1723['_scene'][_0x2f5418(0x1eb)];if(!_0xc7a201)return;const _0x5e14db=_0x187355[_0x2f5418(0x1f8)](_0x3d98bb=>_0xc7a201[_0x2f5418(0x28d)](_0x3d98bb));if(_0x5e14db['length']<=0x0)return;const _0x5eacd9=_0xbedb1a[_0x2f5418(0x2bd)](..._0x5e14db['map'](_0x57e1e1=>_0x57e1e1[_0x2f5418(0x155)]||0x0),0x0);this['y']+=_0x5eacd9-this[_0x2f5418(0x280)][_0x2f5418(0x153)]();}else{const _0x10a130=Game_Event[_0x2f5418(0x2b0)],_0x2c7a8e=String(RegExp['$1'])['toLowerCase']()[_0x2f5418(0x2b5)]();this[_0x2f5418(0x16b)]=_0x10a130[_0x2c7a8e]||_0x10a130[_0x2f5418(0x2ad)],this[_0x2f5418(0x2fc)]=String(RegExp['$2'])['split'](',')['map'](_0x149f38=>_0x149f38[_0x2f5418(0x2b5)]());}}}if(_0xee8e33['match'](_0x4e817c[_0x2f5418(0x2a8)])){if(_0x2f5418(0x195)!=='OtJBi')return!![];else this['_decayOffDuration']=Math['max'](Number(RegExp['$1']),0x1),this['_decaySwitchOff']=String(RegExp['$2'])[_0x2f5418(0x2e7)](',')[_0x2f5418(0x1f8)](_0x4c17b2=>_0x4c17b2[_0x2f5418(0x2b5)]());}else{if(_0xee8e33['match'](_0x4e817c[_0x2f5418(0x187)])){if('EWQNu'!==_0x2f5418(0x2d1)){const _0x250f62=Game_Event['EVENT_CHAIN_REACT_SPEED'],_0x184823=String(RegExp['$1'])[_0x2f5418(0x286)]()[_0x2f5418(0x2b5)]();this[_0x2f5418(0x1ff)]=_0x250f62[_0x184823]||_0x250f62[_0x2f5418(0x2ad)],this[_0x2f5418(0x169)]=String(RegExp['$2'])[_0x2f5418(0x2e7)](',')[_0x2f5418(0x1f8)](_0x2a57d0=>_0x2a57d0[_0x2f5418(0x2b5)]());}else this[_0x2f5418(0x1ff)]=_0x557ba6[_0x2f5418(0x2bd)](_0x24df3e(_0x15caec['$1']),0x1),this['_decaySwitchOff']=_0x4c5fc9(_0x237337['$2'])['split'](',')[_0x2f5418(0x1f8)](_0x251db7=>_0x251db7[_0x2f5418(0x2b5)]());}}if(_0xee8e33[_0x2f5418(0x2c6)](_0x4e817c[_0x2f5418(0x179)])){if(_0x2f5418(0x14e)!==_0x2f5418(0x14e)){const _0x2ba353=this[_0x2f5418(0x29d)]();this[_0x2f5418(0x1ae)](_0x2ba353,_0x5db0e1);}else this[_0x2f5418(0x174)]=String(RegExp['$1'])['split'](',')[_0x2f5418(0x1f8)](_0x1e770d=>_0x1e770d[_0x2f5418(0x2b5)]());}_0xee8e33[_0x2f5418(0x2c6)](_0x4e817c[_0x2f5418(0x220)])&&(this['_submergeShallowOff']=String(RegExp['$1'])[_0x2f5418(0x2e7)](',')[_0x2f5418(0x1f8)](_0x5ec0f7=>_0x5ec0f7[_0x2f5418(0x2b5)]()));_0xee8e33[_0x2f5418(0x2c6)](_0x4e817c[_0x2f5418(0x301)])&&(this['_submergeDeepOn']=String(RegExp['$1'])['split'](',')[_0x2f5418(0x1f8)](_0x566dc2=>_0x566dc2[_0x2f5418(0x2b5)]()));_0xee8e33[_0x2f5418(0x2c6)](_0x4e817c[_0x2f5418(0x2cb)])&&('QFvXA'!=='QFvXA'?this[_0x2f5418(0x27a)]--:this[_0x2f5418(0x236)]=String(RegExp['$1'])[_0x2f5418(0x2e7)](',')[_0x2f5418(0x1f8)](_0x1deafb=>_0x1deafb['trim']()));if(_0xee8e33['match'](_0x4e817c['ResurfaceOn'])){if(_0x2f5418(0x1e0)!=='lRvys')this[_0x2f5418(0x274)]=String(RegExp['$1'])[_0x2f5418(0x2e7)](',')[_0x2f5418(0x1f8)](_0x265451=>_0x265451[_0x2f5418(0x2b5)]());else{const _0x2cac97=_0x3f9002[_0x2f5418(0x231)]()[_0x2f5418(0x180)][_0x2f5418(0x1c0)](_0x38b8bd=>_0x38b8bd[_0x2f5418(0x29c)]()&&_0x38b8bd[_0x2f5418(0x1dc)]()!==''&&!_0x38b8bd[_0x2f5418(0x1ce)]());if(_0x2cac97[_0x2f5418(0x28b)](_0x2e6fa9=>_0x2e6fa9[_0x2f5418(0x17f)](this['x']+_0x5b5d83,this['y']+_0x2231be)))return!![];}}_0xee8e33[_0x2f5418(0x2c6)](_0x4e817c['ResurfaceOff'])&&(_0x2f5418(0x223)===_0x2f5418(0x223)?this[_0x2f5418(0x222)]=String(RegExp['$1'])[_0x2f5418(0x2e7)](',')['map'](_0x4a8a4c=>_0x4a8a4c[_0x2f5418(0x2b5)]()):(this[_0x2f5418(0x1ae)](this[_0x2f5418(0x274)]||[],!![]),this['eventChainReactSwitchChange'](this[_0x2f5418(0x222)]||[],![]),_0x1d0de3['playSubmerge']())),_0xee8e33['match'](_0x4e817c[_0x2f5418(0x1e4)])&&(this['_submergeEffect']=!![]),_0xee8e33['match'](_0x4e817c[_0x2f5418(0x1a0)])&&(this['_submergeEffect']=!![],this['_submergeEffectOffset']=Number(RegExp['$1'])),_0xee8e33[_0x2f5418(0x2c6)](_0x4e817c[_0x2f5418(0x285)])&&(this[_0x2f5418(0x2b9)]=!![],this['_priorityType']=0x0,this['_heavyObject']=![],this['_canPush']=![],this[_0x2f5418(0x1f9)]=![]);},VisuMZ['EventChainReact']['AddEntries']=function(_0x227e89,_0x52b96e){const _0x151199=_0x352ada;for(const _0x378e84 of _0x52b96e){const _0x5180ab=/^\d+$/[_0x151199(0x201)](_0x378e84);_0x227e89[_0x151199(0x212)](_0x5180ab?Number(_0x378e84):String(_0x378e84)[_0x151199(0x18e)]()['trim']());}},Game_Event[_0x352ada(0x27d)][_0x352ada(0x1ae)]=function(_0xeb186b,_0x3851ef){const _0x3f249f=_0x352ada,_0x360941=$gameMap[_0x3f249f(0x238)],_0x111577=this[_0x3f249f(0x2ec)]||0x0;for(const _0xc4a505 of _0xeb186b){if(_0x3f249f(0x23b)===_0x3f249f(0x23b)){let _0x5b0918='';const _0x1a64c8=/^\d+$/[_0x3f249f(0x201)](_0xc4a505);if(_0x1a64c8){const _0x17b1da=Number(_0xc4a505);if(DataManager['isSelfSwitch'](_0x17b1da)){if(_0x3f249f(0x23c)!=='jHvwi')_0x5b0918=_0x3f249f(0x228)[_0x3f249f(0x2a5)](_0x360941,_0x111577,_0x17b1da);else{this[_0x3f249f(0x1d4)]=this['_submergedEventsXy']||{};const _0x29ed92=_0x3f249f(0x29b)['format'](_0x1596c0,_0x44a84b);if(this[_0x3f249f(0x1d4)][_0x29ed92])return this['_submergedEventsXy'][_0x29ed92];return this[_0x3f249f(0x1d4)][_0x29ed92]=_0x3a5680[_0x3f249f(0x164)](_0x5a5da1,_0x3ec53e)['filter'](_0x466ddc=>_0x466ddc&&_0x466ddc[_0x3f249f(0x26c)]()),this[_0x3f249f(0x1d4)][_0x29ed92];}}else{if(DataManager['isMapSwitch'](_0x17b1da)){const _0x531f9a=_0x3f249f(0x15e)[_0x3f249f(0x2a5)](_0x360941,_0x17b1da),_0x5b3ef5=!!$gameSelfSwitches[_0x3f249f(0x180)][_0x531f9a];if(_0x5b3ef5!==_0x3851ef){if(_0x3f249f(0x2ee)==='YhsmN'){const _0x5925f7=this['_conductTypes'][_0x24c014]||[],_0x2f4f24=this[_0x3f249f(0x27c)](_0x21876c);this['eventChainReactSwitchChange'](_0x5925f7,_0x2f4f24);}else $gameSwitches[_0x3f249f(0x19b)](_0x17b1da,_0x3851ef);}}else{const _0x44277b=!!$gameSwitches['_data'][_0x17b1da];if(_0x44277b!==_0x3851ef){if('SvRcY'!==_0x3f249f(0x226)){const _0x1cad0c=_0x2768d4[_0x3f249f(0x253)],_0x20a212=_0x255045[_0x3f249f(0x2c6)](_0x1cad0c);if(_0x20a212)for(const _0x1d267c of _0x20a212){_0x1d267c[_0x3f249f(0x2c6)](_0x1cad0c);const _0xe6e81d=_0x38b750(_0x545d10['$1'])[_0x3f249f(0x286)]()[_0x3f249f(0x2b5)](),_0x344439=_0x1fb5d5(_0x21b6f3['$2'])||0x1,_0x5ca456=_0x4a7dff(_0x103f44['$3'])[_0x3f249f(0x2e7)](',')[_0x3f249f(0x1f8)](_0x5b0630=>_0x5b0630[_0x3f249f(0x286)]()[_0x3f249f(0x2b5)]());for(const _0xadd58f of _0x5ca456){const _0xfaf438=[_0x344439,_0xe6e81d,_0xadd58f];this[_0x3f249f(0x203)][_0x3f249f(0x212)](_0xfaf438);}}}else $gameSwitches['setValue'](_0x17b1da,_0x3851ef);}}}}else _0x5b0918='%1,%2,%3'[_0x3f249f(0x2a5)](_0x360941,_0x111577,String(_0xc4a505));if(_0x5b0918!==''){if(_0x3f249f(0x1d0)!==_0x3f249f(0x1d0)){const _0x525d54=_0x411ffb[_0x3f249f(0x15b)](_0x567847,_0x23312a),_0x2e122a=_0x51bc79['roundYWithDirection'](_0x4e7fe2,_0x1ff328);if(_0x32aaf6[_0x3f249f(0x20f)](_0x525d54,_0x2e122a)&&this['canSubmergeShallow']())return!![];if(_0x4326bd[_0x3f249f(0x288)](_0x525d54,_0x2e122a)&&!_0xb394b6[_0x3f249f(0x20f)](_0x525d54,_0x2e122a)&&this[_0x3f249f(0x19a)]())return!![];return![];}else{const _0x282ec6=!!$gameSelfSwitches[_0x3f249f(0x180)][_0x5b0918];if(_0x282ec6!==_0x3851ef){if(_0x3f249f(0x2c8)===_0x3f249f(0x2c8))$gameSelfSwitches['setValue'](_0x5b0918,_0x3851ef);else{const _0x4897c1=_0x494534[_0x3f249f(0x270)],_0x1c90d8=_0x2957b9[_0x3f249f(0x2c6)](_0x4897c1);if(_0x1c90d8)for(const _0x4e224e of _0x1c90d8){_0x4e224e['match'](_0x4897c1);const _0x1373c5=_0x3b9cd6(_0x41dd57['$1'])[_0x3f249f(0x286)]()['trim'](),_0x411a45=_0x40578e(_0x28d63c['$2'])['split'](',')[_0x3f249f(0x1f8)](_0x5175b5=>_0x5175b5[_0x3f249f(0x2b5)]());this[_0x3f249f(0x1b1)][_0x1373c5]=_0x411a45;}}}}}}else{if(!_0x31b4f3[_0x3f249f(0x2d0)]())return;if(!_0x177bc6)return;_0x1be2a0[_0x3f249f(0x2c2)](_0x4a83df,_0x57a675);const _0x4db7c2=_0x9e96f3[_0x3f249f(0x2cf)]||'',_0x3079f2=_0x1e7651['Location']||_0x3f249f(0x1af),_0x49af5e=_0x16c6d8;_0x51c985[_0x3f249f(0x18a)](_0x49af5e,_0x4db7c2,_0x3079f2);}}},VisuMZ['EventChainReact'][_0x352ada(0x2ce)]=Game_Event['prototype']['erase'],Game_Event[_0x352ada(0x27d)][_0x352ada(0x2d9)]=function(){const _0x2fa5a7=_0x352ada;if(this['isHeavyObject']())this['requestRefreshPressurePlate']();VisuMZ[_0x2fa5a7(0x1bf)][_0x2fa5a7(0x2ce)][_0x2fa5a7(0x2d3)](this);},Game_Event['prototype'][_0x352ada(0x25a)]=function(){const _0xb86c12=_0x352ada;Game_Character[_0xb86c12(0x27d)]['updateEventChainReact'][_0xb86c12(0x2d3)](this),this[_0xb86c12(0x193)]()&&this[_0xb86c12(0x17d)](),this['needsUpdateConduction']()&&this['requestRefreshConduction'](),this[_0xb86c12(0x251)]()&&this['updateDecay'](),this[_0xb86c12(0x221)]()&&this['updateSubmerge']();},Game_Event['prototype']['canBePushed']=function(){const _0x37093f=_0x352ada;if(this[_0x37093f(0x199)])return![];if(this['isMoving']())return![];if(this[_0x37093f(0x2b7)](this['x'],this['y']))return![];if(this[_0x37093f(0x211)]())return![];if($gamePlayer[_0x37093f(0x211)]())return![];return this[_0x37093f(0x188)];},Game_Event[_0x352ada(0x27d)]['canBePulled']=function(){const _0xd9e98=_0x352ada;if(this['_erased'])return![];if(this['isMoving']())return![];if(this[_0xd9e98(0x2b7)](this['x'],this['y']))return![];if(this[_0xd9e98(0x211)]())return![];if($gamePlayer[_0xd9e98(0x211)]())return![];return this[_0xd9e98(0x1f9)];},Game_Event[_0x352ada(0x27d)][_0x352ada(0x267)]=function(_0x32ed49){const _0x3ed19d=_0x352ada;if(!this[_0x3ed19d(0x197)])return;_0x32ed49=_0x32ed49[_0x3ed19d(0x286)]()['trim']();if(this['_chainReactions']===undefined)return;if(this[_0x3ed19d(0x197)][_0x32ed49]===undefined)return;const _0xfc5682=this[_0x3ed19d(0x197)][_0x32ed49][_0x3ed19d(0x25f)],_0x35be3b=this[_0x3ed19d(0x197)][_0x32ed49][_0x3ed19d(0x2f5)];this['eventChainReactSwitchChange'](_0xfc5682,!![]),this[_0x3ed19d(0x1ae)](_0x35be3b,![]);},Game_Event[_0x352ada(0x27d)][_0x352ada(0x193)]=function(){const _0x7deaef=_0x352ada;if(!this[_0x7deaef(0x203)])return![];if($gameMessage[_0x7deaef(0x2d2)]())return![];if(this[_0x7deaef(0x160)]())return![];if(Imported[_0x7deaef(0x1be)]&&$gameMap['isFurnitureSystemMode']())return![];return this[_0x7deaef(0x203)][_0x7deaef(0x1ec)]>0x0;},Game_Event[_0x352ada(0x27d)][_0x352ada(0x17d)]=function(){const _0x582c08=_0x352ada;for(const _0x52f5d0 of this[_0x582c08(0x203)]){const _0xa26c49=_0x52f5d0[0x0];if(Graphics[_0x582c08(0x271)]%_0xa26c49!==0x0)continue;const _0x395cb2=_0x52f5d0[0x1],_0x244456=_0x52f5d0[0x2];$gameMap[_0x582c08(0x18a)](this,_0x395cb2,_0x244456);}},Game_Event['prototype'][_0x352ada(0x1a8)]=function(){const _0x59cb28=_0x352ada;if(this['_erased'])return![];if(this[_0x59cb28(0x1e2)]!==undefined)return this[_0x59cb28(0x1e2)];return this[_0x59cb28(0x1e2)]||[];},Game_Event[_0x352ada(0x27d)][_0x352ada(0x1f6)]=function(){const _0x1b3753=_0x352ada;return this[_0x1b3753(0x29d)]()[_0x1b3753(0x1ec)]>0x0;},Game_Event[_0x352ada(0x27d)][_0x352ada(0x29d)]=function(){const _0x1538e7=_0x352ada;if(this[_0x1538e7(0x199)])return[];return this[_0x1538e7(0x2d6)]||[];},Game_Event[_0x352ada(0x27d)][_0x352ada(0x247)]=function(){const _0x40cd03=_0x352ada;let _0x3ed4a2=this[_0x40cd03(0x24e)]();this[_0x40cd03(0x240)](_0x3ed4a2);},Game_Event['prototype'][_0x352ada(0x24e)]=function(){const _0x5934a3=_0x352ada,_0x248cb9=-this['_addedHitbox'][_0x5934a3(0x170)],_0x4cecd7=this[_0x5934a3(0x17c)]['right'],_0x43d8c1=-this[_0x5934a3(0x17c)]['up'],_0x250eaa=this['_addedHitbox'][_0x5934a3(0x1d5)];for(let _0x49a76e=_0x248cb9;_0x49a76e<=_0x4cecd7;_0x49a76e++){for(let _0x404d41=_0x43d8c1;_0x404d41<=_0x250eaa;_0x404d41++){if(_0x5934a3(0x2df)!==_0x5934a3(0x2df)){if(this[_0x5934a3(0x199)])return[];return this[_0x5934a3(0x2d6)]||[];}else{if($gamePlayer[_0x5934a3(0x1a8)]()){if($gamePlayer[_0x5934a3(0x17f)](this['x']+_0x49a76e,this['y']+_0x404d41)&&!$gamePlayer[_0x5934a3(0x1bd)]()&&!$gamePlayer[_0x5934a3(0x1ce)]())return!![];}if($gamePlayer[_0x5934a3(0x231)]()[_0x5934a3(0x29c)]()&&!$gamePlayer[_0x5934a3(0x1bd)]()&&!$gamePlayer[_0x5934a3(0x1ce)]()){const _0x4e00a8=$gamePlayer['followers']()[_0x5934a3(0x180)]['filter'](_0xdac5ae=>_0xdac5ae[_0x5934a3(0x29c)]()&&_0xdac5ae[_0x5934a3(0x1dc)]()!==''&&!_0xdac5ae[_0x5934a3(0x1ce)]());if(_0x4e00a8[_0x5934a3(0x28b)](_0x3c9f91=>_0x3c9f91[_0x5934a3(0x17f)](this['x']+_0x49a76e,this['y']+_0x404d41)))return!![];}for(const _0xabc012 of $gameMap[_0x5934a3(0x2ae)]()){if(_0x5934a3(0x27f)===_0x5934a3(0x27f)){if(!_0xabc012)continue;if(_0xabc012[_0x5934a3(0x238)]!==$gameMap[_0x5934a3(0x1fc)]())continue;if(!_0xabc012[_0x5934a3(0x22e)]())continue;if(_0xabc012['pos'](this['x']+_0x49a76e,this['y']+_0x404d41))return!![];}else this['_submergeDeepOn']=_0x150767(_0x572b69['$1'])[_0x5934a3(0x2e7)](',')[_0x5934a3(0x1f8)](_0x612482=>_0x612482[_0x5934a3(0x2b5)]());}const _0x121b4a=$gameMap[_0x5934a3(0x164)](this['x']+_0x49a76e,this['y']+_0x404d41)[_0x5934a3(0x1c0)](_0xdbc047=>_0xdbc047['isHeavyObject']()&&!_0xdbc047['isJumping']());if(_0x121b4a[_0x5934a3(0x1ec)]>0x0)return!![];}}}return![];},Game_Event['prototype'][_0x352ada(0x240)]=function(_0x44562b){const _0x376f81=_0x352ada,_0x36648a=this[_0x376f81(0x29d)]();this[_0x376f81(0x1ae)](_0x36648a,_0x44562b);},Game_Event[_0x352ada(0x27d)][_0x352ada(0x242)]=function(){const _0x3f9484=_0x352ada;return this['getConductionTypes']()[_0x3f9484(0x1ec)]>0x0;},Game_Event[_0x352ada(0x27d)]['getConductionTypes']=function(){const _0x399dc6=_0x352ada;if(this[_0x399dc6(0x199)])return[];return Object[_0x399dc6(0x206)](this[_0x399dc6(0x1b1)]||{});},Game_Event[_0x352ada(0x27d)][_0x352ada(0x2d4)]=function(_0x4a16dc){const _0x3e64aa=_0x352ada;return _0x4a16dc=_0x4a16dc[_0x3e64aa(0x286)]()['trim'](),this[_0x3e64aa(0x243)]()[_0x3e64aa(0x2b6)](_0x4a16dc);},Game_Event[_0x352ada(0x27d)][_0x352ada(0x287)]=function(){const _0x19473a=_0x352ada;this[_0x19473a(0x1cd)]={};},Game_Event[_0x352ada(0x27d)]['setConductionState']=function(_0x10cce2,_0x1184a6){const _0x39dca6=_0x352ada;_0x10cce2=_0x10cce2[_0x39dca6(0x286)]()[_0x39dca6(0x2b5)](),this['_conductionState']=this[_0x39dca6(0x1cd)]||{},this[_0x39dca6(0x1cd)][_0x10cce2]=_0x1184a6;},Game_Event[_0x352ada(0x27d)][_0x352ada(0x27c)]=function(_0x4de372){const _0x542374=_0x352ada;return _0x4de372=_0x4de372['toLowerCase']()[_0x542374(0x2b5)](),this[_0x542374(0x1cd)]=this[_0x542374(0x1cd)]||{},this[_0x542374(0x1cd)][_0x4de372]||![];},Game_Event[_0x352ada(0x27d)][_0x352ada(0x1b5)]=function(){const _0x27abb8=_0x352ada;return this[_0x27abb8(0x1a4)]()['length']>0x0;},Game_Event[_0x352ada(0x27d)]['getChargeTypes']=function(){const _0x134074=_0x352ada;if(this[_0x134074(0x199)])return[];return this[_0x134074(0x24f)]||[];},Game_Event['prototype'][_0x352ada(0x163)]=function(){const _0x31fb47=_0x352ada;if(this[_0x31fb47(0x199)])return[];return this[_0x31fb47(0x20c)]||[];},Game_Event[_0x352ada(0x27d)][_0x352ada(0x29a)]=function(){const _0x6ffab2=_0x352ada;if(!this[_0x6ffab2(0x242)]()&&!this[_0x6ffab2(0x1b5)]())return![];this[_0x6ffab2(0x2ac)]=this[_0x6ffab2(0x2ac)]||{};if(this[_0x6ffab2(0x2ac)][_0x6ffab2(0x232)]!==this['x'])return!![];if(this[_0x6ffab2(0x2ac)][_0x6ffab2(0x26a)]!==this['y'])return!![];if(this[_0x6ffab2(0x2ac)][_0x6ffab2(0x291)]!==this[_0x6ffab2(0x291)]())return!![];if(this[_0x6ffab2(0x2ac)]['_pageIndex']!==this[_0x6ffab2(0x14c)])return!![];return![];},Game_Event[_0x352ada(0x27d)][_0x352ada(0x2ed)]=function(){const _0x5c74bf=_0x352ada;this[_0x5c74bf(0x2ac)]=this[_0x5c74bf(0x2ac)]||{},this[_0x5c74bf(0x2ac)][_0x5c74bf(0x232)]=this['x'],this[_0x5c74bf(0x2ac)][_0x5c74bf(0x26a)]=this['y'],this[_0x5c74bf(0x2ac)][_0x5c74bf(0x291)]=this['jumpHeight'](),this['_conductCache']['_pageIndex']=this[_0x5c74bf(0x14c)],$gameMap[_0x5c74bf(0x289)]();},Game_Event[_0x352ada(0x27d)][_0x352ada(0x2f6)]=function(){this['clearConductionState']();},Game_Event[_0x352ada(0x27d)]['spreadCharges']=function(){const _0x5cb1a9=this['getChargeTypes']();for(const _0xab2dd7 of _0x5cb1a9){this['spreadChargeType'](_0xab2dd7);}},Game_Event['prototype']['spreadChargeType']=function(_0x1c5d61){const _0x161c4d=_0x352ada,_0x130605=this[_0x161c4d(0x163)]();for(const _0x19f9f7 of _0x130605){_0x161c4d(0x294)===_0x161c4d(0x294)?this[_0x161c4d(0x2e3)](_0x19f9f7,_0x1c5d61):_0x3e0248[_0x161c4d(0x19b)](_0x2f069b,_0x1ea9c0);}},Game_Event[_0x352ada(0x27d)][_0x352ada(0x2e3)]=function(_0x21b88d,_0x49375e){const _0x34796d=_0x352ada,_0x47eafe=VisuMZ[_0x34796d(0x1bf)][_0x34796d(0x1ee)](this,_0x21b88d),_0x3d8a4a=-this['_addedHitbox'][_0x34796d(0x170)],_0x310c4d=this['_addedHitbox']['right'],_0x189030=-this['_addedHitbox']['up'],_0x42142d=this[_0x34796d(0x17c)][_0x34796d(0x1d5)];for(let _0xffb3d1=_0x3d8a4a;_0xffb3d1<=_0x310c4d;_0xffb3d1++){if(_0x34796d(0x1c6)!=='MHwpf'){if(this['isHeavyObject']())this['requestRefreshPressurePlate']();_0x525dae['EventChainReact'][_0x34796d(0x2ce)][_0x34796d(0x2d3)](this);}else for(let _0x100589=_0x189030;_0x100589<=_0x42142d;_0x100589++){if('aWLIB'!==_0x34796d(0x18d)){const _0x13f9ae=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x34796d(0x275)]()];return _0x35aecf[_0x34796d(0x2a3)](this['y'],_0x13f9ae);}else for(const _0x572e23 of _0x47eafe){const _0x516f8c=(_0x572e23['x']??-0x1)+_0xffb3d1,_0x4ddf6c=(_0x572e23['y']??-0x1)+_0x100589;$gameMap[_0x34796d(0x184)](_0x49375e,_0x516f8c,_0x4ddf6c);}}}},Game_Event['prototype']['synchConductionStates']=function(){const _0x1e6b06=_0x352ada,_0x3c03ac=this[_0x1e6b06(0x243)]();for(const _0x3f67aa of _0x3c03ac){if(_0x1e6b06(0x1f3)===_0x1e6b06(0x1f3)){const _0x1ae9b4=this['_conductTypes'][_0x3f67aa]||[],_0x5e0ddb=this[_0x1e6b06(0x27c)](_0x3f67aa);this[_0x1e6b06(0x1ae)](_0x1ae9b4,_0x5e0ddb);}else _0x31040d[_0x1e6b06(0x247)]();}this[_0x1e6b06(0x287)]();const _0x47be96=SceneManager[_0x1e6b06(0x22d)],_0x53648f=_0x47be96?_0x47be96[_0x1e6b06(0x1eb)]:null;if(_0x53648f){if('RpwlP'!==_0x1e6b06(0x1b3)){let _0x3d7842=this[_0x1e6b06(0x158)]()[_0x1e6b06(0x2ba)];if(_0x3d7842==='')return;_0x3d7842=_0x3d7842[_0x1e6b06(0x23f)](/>[ ]*</i,_0x1e6b06(0x254)),this[_0x1e6b06(0x2cd)](_0x3d7842);}else{const _0x41af31=_0x53648f[_0x1e6b06(0x28d)](this);if(_0x41af31)_0x41af31[_0x1e6b06(0x283)]();}}},Game_Event['prototype']['needsUpdateDecay']=function(){const _0x4cf46d=_0x352ada;if($gameMessage[_0x4cf46d(0x2d2)]())return![];if(Imported['VisuMZ_2_FurnitureSystem']&&$gameMap['isFurnitureSystemMode']())return![];return this[_0x4cf46d(0x16b)]>0x0||this['_decayOffDuration']>0x0;},Game_Event['prototype'][_0x352ada(0x1b9)]=function(){const _0x2f16b4=_0x352ada;this[_0x2f16b4(0x161)](),this[_0x2f16b4(0x227)]();},Game_Event[_0x352ada(0x27d)][_0x352ada(0x161)]=function(){const _0x2cb027=_0x352ada;if(this[_0x2cb027(0x16b)]<=0x0)return;this[_0x2cb027(0x16b)]--;if(this['_decayOnDuration']<=0x0){if('McPAy'===_0x2cb027(0x176)){const _0x313cda=this['_decaySwitchOn'];this[_0x2cb027(0x1ae)](_0x313cda,!![]);}else{if(this['_erased'])return![];if(this[_0x2cb027(0x1e2)]!==_0x3ef88d)return this[_0x2cb027(0x1e2)];return this[_0x2cb027(0x1e2)]||[];}}},Game_Event[_0x352ada(0x27d)][_0x352ada(0x227)]=function(){const _0x35a178=_0x352ada;if(this[_0x35a178(0x1ff)]<=0x0)return;this['_decayOffDuration']--;if(this['_decayOffDuration']<=0x0){const _0x2f637b=this[_0x35a178(0x169)];this[_0x35a178(0x1ae)](_0x2f637b,![]);}},Game_Event[_0x352ada(0x27d)]['canSubmergeShallow']=function(){const _0x3eec3f=_0x352ada;if(this['_erased'])return![];return this['_submergeShallowOn'][_0x3eec3f(0x1ec)]>0x0||this[_0x3eec3f(0x217)][_0x3eec3f(0x1ec)]>0x0;},Game_Event['prototype'][_0x352ada(0x19a)]=function(){const _0x582870=_0x352ada;if(this[_0x582870(0x199)])return![];return this[_0x582870(0x1c8)][_0x582870(0x1ec)]>0x0||this[_0x582870(0x236)]['length']>0x0;},Game_Event[_0x352ada(0x27d)][_0x352ada(0x290)]=function(){const _0x15bbb7=_0x352ada;if(this[_0x15bbb7(0x199)])return![];return this[_0x15bbb7(0x274)]['length']>0x0||this[_0x15bbb7(0x222)]['length']>0x0;},VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x28c)]=Game_Event[_0x352ada(0x27d)][_0x352ada(0x258)],Game_Event[_0x352ada(0x27d)][_0x352ada(0x258)]=function(_0x8d18ba,_0x974962,_0x19e4af){const _0x892740=_0x352ada;if(this['hasMoveOnlyRegions']()&&!this['isMoveOnlyRegionPassable'](_0x8d18ba,_0x974962,_0x19e4af))return![];if($gameMap[_0x892740(0x204)](_0x8d18ba,_0x974962,_0x19e4af,_0x892740(0x158)))return!![];if($gameMap[_0x892740(0x269)](_0x8d18ba,_0x974962,_0x19e4af,_0x892740(0x158)))return![];if(this[_0x892740(0x230)](_0x8d18ba,_0x974962,_0x19e4af))return!![];return VisuMZ[_0x892740(0x1bf)]['Game_Event_isMapPassable'][_0x892740(0x2d3)](this,_0x8d18ba,_0x974962,_0x19e4af);},Game_Event['prototype'][_0x352ada(0x230)]=function(_0xb30bc0,_0x255a45,_0x59be3d){const _0x3d8940=_0x352ada,_0x5c1049=$gameMap[_0x3d8940(0x15b)](_0xb30bc0,_0x59be3d),_0x2fbf63=$gameMap[_0x3d8940(0x2a3)](_0x255a45,_0x59be3d);if($gameMap[_0x3d8940(0x20f)](_0x5c1049,_0x2fbf63)&&this[_0x3d8940(0x177)]()){if(_0x3d8940(0x22b)!=='gXfih')return!![];else this[_0x3d8940(0x2da)](_0x62b3af>0x0?0x4:0x6);}if($gameMap[_0x3d8940(0x288)](_0x5c1049,_0x2fbf63)&&!$gameMap[_0x3d8940(0x20f)](_0x5c1049,_0x2fbf63)&&this[_0x3d8940(0x19a)]()){if('gWCcX'!=='gWCcX')this[_0x3d8940(0x1ae)](this['_submergeShallowOn']||[],!![]),this[_0x3d8940(0x1ae)](this['_submergeShallowOff']||[],![]);else return!![];}return![];},Game_Event['prototype']['needsUpdateSubmerge']=function(){const _0x188fa0=_0x352ada;if(this[_0x188fa0(0x199)])return![];if(!this[_0x188fa0(0x177)]()&&!this[_0x188fa0(0x19a)]()&&!this[_0x188fa0(0x290)]())return![];this[_0x188fa0(0x1f2)]=this['_submergeCache']||{};if(this[_0x188fa0(0x1f2)]['lastX']!==this['x'])return!![];if(this[_0x188fa0(0x1f2)]['lastY']!==this['y'])return!![];if(this['_submergeCache'][_0x188fa0(0x291)]!==this[_0x188fa0(0x291)]())return!![];if(this[_0x188fa0(0x1f2)]['_pageIndex']!==this[_0x188fa0(0x14c)])return!![];return![];},Game_Event[_0x352ada(0x27d)]['updateSubmerge']=function(){const _0xfcc45f=_0x352ada,_0x2796b6=this['isSubmerged'](this[_0xfcc45f(0x1f2)]['lastX']??this['x'],this['_submergeCache']['lastY']??this['y']),_0x3ff1db=this['inWaterTile'](this[_0xfcc45f(0x1f2)][_0xfcc45f(0x232)]??this['x'],this[_0xfcc45f(0x1f2)][_0xfcc45f(0x26a)]??this['y']);this[_0xfcc45f(0x1f2)][_0xfcc45f(0x232)]=this['x'],this['_submergeCache'][_0xfcc45f(0x26a)]=this['y'],this['_submergeCache'][_0xfcc45f(0x291)]=this[_0xfcc45f(0x291)](),this['_submergeCache'][_0xfcc45f(0x14c)]=this[_0xfcc45f(0x14c)];if($gameMap[_0xfcc45f(0x20f)](this['x'],this['y'])&&this[_0xfcc45f(0x177)]()){if(_0xfcc45f(0x262)!==_0xfcc45f(0x262)){if(_0x249318!=='')_0x108386+='\x0a';_0x4941f1+=_0x56c9a9[_0xfcc45f(0x225)][0x0];}else this['eventChainReactSwitchChange'](this[_0xfcc45f(0x174)]||[],!![]),this[_0xfcc45f(0x1ae)](this[_0xfcc45f(0x217)]||[],![]);}$gameMap[_0xfcc45f(0x288)](this['x'],this['y'])&&!$gameMap[_0xfcc45f(0x20f)](this['x'],this['y'])&&this['canSubmergeDeep']()&&(this[_0xfcc45f(0x1ae)](this[_0xfcc45f(0x1c8)]||[],!![]),this['eventChainReactSwitchChange'](this[_0xfcc45f(0x236)]||[],![])),!_0x2796b6&&this[_0xfcc45f(0x250)](this['x'],this['y'])&&SoundManager[_0xfcc45f(0x1ed)](),_0x3ff1db&&!this['isSubmerged'](this['x'],this['y'])&&(this['eventChainReactSwitchChange'](this['_resurfaceOn']||[],!![]),this[_0xfcc45f(0x1ae)](this[_0xfcc45f(0x222)]||[],![]),SoundManager['playSubmerge']());},Game_Event[_0x352ada(0x27d)][_0x352ada(0x250)]=function(_0x393398,_0xa18c3d){const _0x41e784=_0x352ada;if(!this[_0x41e784(0x177)]()&&!this[_0x41e784(0x19a)]())return![];return $gameMap['isBoatPassable'](_0x393398,_0xa18c3d)||$gameMap['isShipPassable'](_0x393398,_0xa18c3d);},Game_Event[_0x352ada(0x27d)]['inWaterTile']=function(_0x259126,_0x30866b){const _0x532e74=_0x352ada;return $gameMap[_0x532e74(0x200)](_0x259126,_0x30866b)&&this[_0x532e74(0x250)](_0x259126,_0x30866b);},Game_Event['prototype'][_0x352ada(0x28a)]=function(){const _0x3a3ac0=_0x352ada;if(this[_0x3a3ac0(0x199)])return![];return this[_0x3a3ac0(0x2b9)];},Sprite_Character['SUBMERGE']={'updateFrequency':VisuMZ['EventChainReact'][_0x352ada(0x2d7)][_0x352ada(0x1f7)][_0x352ada(0x22c)]||0x4,'oscillationDistance':VisuMZ[_0x352ada(0x1bf)]['Settings'][_0x352ada(0x1f7)][_0x352ada(0x2c1)]||0x8,'oscillationSpeed':VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x2d7)][_0x352ada(0x1f7)][_0x352ada(0x259)]||0.05},VisuMZ['EventChainReact'][_0x352ada(0x1bc)]=Sprite_Character[_0x352ada(0x27d)][_0x352ada(0x1a7)],Sprite_Character['prototype'][_0x352ada(0x1a7)]=function(_0x485a78){const _0x9edb5=_0x352ada;VisuMZ['EventChainReact']['Sprite_Character_initialize'][_0x9edb5(0x2d3)](this,_0x485a78),this['initSubmerged']();},Sprite_Character['prototype'][_0x352ada(0x2de)]=function(){const _0xd8e5c5=_0x352ada;if(!this[_0xd8e5c5(0x280)])return;if(this[_0xd8e5c5(0x280)][_0xd8e5c5(0x199)])return;if(!this[_0xd8e5c5(0x16d)]())return;this[_0xd8e5c5(0x224)]=Math[_0xd8e5c5(0x2b2)](0xf4240),this[_0xd8e5c5(0x27a)]=this[_0xd8e5c5(0x280)][_0xd8e5c5(0x292)](),this[_0xd8e5c5(0x1a9)]=Sprite_Character[_0xd8e5c5(0x20b)][_0xd8e5c5(0x2c1)];},VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x209)]=Sprite_Character[_0x352ada(0x27d)][_0x352ada(0x14f)],Sprite_Character[_0x352ada(0x27d)][_0x352ada(0x14f)]=function(){const _0x164d03=_0x352ada;VisuMZ[_0x164d03(0x1bf)][_0x164d03(0x209)][_0x164d03(0x2d3)](this);if(this[_0x164d03(0x16d)]()){if('XEpbD'!==_0x164d03(0x23e))this[_0x164d03(0x18b)]();else return![];}else this[_0x164d03(0x277)]();},Sprite_Character[_0x352ada(0x27d)][_0x352ada(0x16d)]=function(){const _0xdac28a=_0x352ada;return this[_0xdac28a(0x280)]&&this[_0xdac28a(0x280)][_0xdac28a(0x26c)]();},Sprite_Character[_0x352ada(0x27d)]['clearSubmergeData']=function(){const _0x169834=_0x352ada;this[_0x169834(0x224)]=0x0,this[_0x169834(0x27a)]=0x0,this[_0x169834(0x1a9)]=0x0,this[_0x169834(0x155)]=0x0;},Sprite_Character[_0x352ada(0x27d)][_0x352ada(0x18b)]=function(){const _0x32ea7d=_0x352ada,_0x4cb959=this['_frame'];this[_0x32ea7d(0x224)]=this['_submergeRng']||Math[_0x32ea7d(0x2b2)](0xf4240);const _0x3fe1a9=this[_0x32ea7d(0x224)]+Graphics['frameCount'];this['_submergeHeight']=this[_0x32ea7d(0x27a)]||0x0;if(Graphics[_0x32ea7d(0x271)]%Sprite_Character[_0x32ea7d(0x20b)]['updateFrequency']===0x0&&!this[_0x32ea7d(0x280)]['isMoving']()){if(this[_0x32ea7d(0x280)][_0x32ea7d(0x292)]()>this['_submergeHeight'])this[_0x32ea7d(0x27a)]++;else{if(this[_0x32ea7d(0x280)][_0x32ea7d(0x292)]()<this[_0x32ea7d(0x27a)])this['_submergeHeight']--;else{if(_0x32ea7d(0x173)!==_0x32ea7d(0x173)){_0x260fad[_0x32ea7d(0x2c6)](_0x31d16a);const _0xe22a01=_0x1882db(_0x240697['$1'])[_0x32ea7d(0x286)]()[_0x32ea7d(0x2b5)](),_0x44f761=_0x45ff20(_0x38d702['$2'])['toLowerCase']()[_0x32ea7d(0x2b5)](),_0x34f8d5=_0x3ba926(_0x31f0b5['$3'])[_0x32ea7d(0x2e7)](',')[_0x32ea7d(0x1f8)](_0x1abd3a=>_0x1abd3a[_0x32ea7d(0x286)]()[_0x32ea7d(0x2b5)]()),_0x587d3b=_0x258c1e[_0x32ea7d(0x2b0)],_0x108da=_0x587d3b[_0x44f761]||_0x587d3b['fast'];for(const _0x37281d of _0x34f8d5){const _0x44688a=[_0x108da,_0xe22a01,_0x37281d];this[_0x32ea7d(0x203)][_0x32ea7d(0x212)](_0x44688a);}}else this[_0x32ea7d(0x1a9)]=this[_0x32ea7d(0x1a9)]||0x0,this['_submergeDistance']=Math[_0x32ea7d(0x2e9)](this['_submergeDistance']+0x1,Sprite_Character[_0x32ea7d(0x20b)][_0x32ea7d(0x2c1)]);}}}let _0xd431a3=_0x4cb959['height'];_0xd431a3-=this[_0x32ea7d(0x27a)]||0x0;if(this[_0x32ea7d(0x280)][_0x32ea7d(0x292)]()===this[_0x32ea7d(0x27a)]){const _0x413d08=Sprite_Character[_0x32ea7d(0x20b)][_0x32ea7d(0x259)],_0x254df2=Math[_0x32ea7d(0x2c4)]((this[_0x32ea7d(0x1a9)]||0x0)/0x2);this['_submergeOffsetY']=Math[_0x32ea7d(0x20e)](Math[_0x32ea7d(0x1ad)](_0x3fe1a9*_0x413d08)*_0x254df2+_0x254df2),_0xd431a3-=this[_0x32ea7d(0x155)];}this['setFrame'](_0x4cb959['x'],_0x4cb959['y'],_0x4cb959[_0x32ea7d(0x2c5)],_0xd431a3);},VisuMZ[_0x352ada(0x1bf)][_0x352ada(0x1a6)]=Sprite_Character[_0x352ada(0x27d)][_0x352ada(0x2ab)],Sprite_Character[_0x352ada(0x27d)]['updatePosition']=function(){const _0x417c0b=_0x352ada;VisuMZ[_0x417c0b(0x1bf)][_0x417c0b(0x1a6)]['call'](this),this[_0x417c0b(0x279)]()&&this[_0x417c0b(0x25d)]();},Sprite_Character[_0x352ada(0x27d)][_0x352ada(0x279)]=function(){const _0x5991cb=_0x352ada;if(SceneManager[_0x5991cb(0x22d)])return![];if(SceneManager['_scene']['_spriteset'])return![];if(!this[_0x5991cb(0x280)])return![];if(!this[_0x5991cb(0x280)][_0x5991cb(0x1ef)]())return![];const _0x93b4af=this[_0x5991cb(0x280)]['x'],_0x4b6cac=this[_0x5991cb(0x280)]['y'];return $gameMap[_0x5991cb(0x200)](_0x93b4af,_0x4b6cac);},Sprite_Character[_0x352ada(0x27d)][_0x352ada(0x25d)]=function(){const _0x2cd7f7=_0x352ada,_0xfc63bf=this[_0x2cd7f7(0x280)]['x'],_0x39ffe7=this[_0x2cd7f7(0x280)]['y'],_0x19f9d8=$gameTemp['submergedEventsXy'](_0xfc63bf,_0x39ffe7);if(_0x19f9d8[_0x2cd7f7(0x1ec)]<=0x0)return;const _0x565fc9=SceneManager['_scene'][_0x2cd7f7(0x1eb)];if(!_0x565fc9)return;const _0x17966e=_0x19f9d8[_0x2cd7f7(0x1f8)](_0x2852b3=>_0x565fc9[_0x2cd7f7(0x28d)](_0x2852b3));if(_0x17966e[_0x2cd7f7(0x1ec)]<=0x0)return;const _0x4acf47=Math[_0x2cd7f7(0x2bd)](..._0x17966e[_0x2cd7f7(0x1f8)](_0x15b84d=>_0x15b84d[_0x2cd7f7(0x155)]||0x0),0x0);this['y']+=_0x4acf47-this[_0x2cd7f7(0x280)][_0x2cd7f7(0x153)]();};