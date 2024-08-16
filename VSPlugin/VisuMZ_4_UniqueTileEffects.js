//=============================================================================
// VisuStella MZ - Unique Tile Effects
// VisuMZ_4_UniqueTileEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_UniqueTileEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.UniqueTileEffects = VisuMZ.UniqueTileEffects || {};
VisuMZ.UniqueTileEffects.version = 1.06;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.06] [UniqueTileEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Unique_Tile_Effects_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you to add new properties to tiles, by marking them with
 * regions or assigning those properties to the terrain tags. These new unique
 * tile effects allow more player and event interactivity with the environment.
 * Such interactivity ranges from tiles that cause the character to slide from
 * one end to the other to other tiles that bounce the character forward.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Slippery tiles will cause affected characters on them to slide forward
 *   until they stop and hit a solid object or wall.
 * * Some tiles can force movement in a specific direction by simply standing
 *   on top of them.
 * * Pitfall tiles can have the player dropping into them and taking damage.
 *   Objects can also be thrown into them and having them erased.
 * * The player and characters can now fall into the water and drown. However,
 *   players can also learn how to swim and turn water tiles into traversible
 *   parts of the map.
 * * Quicksand tiles will cause affected characters to sink down further
 *   whenever they take a step up to a limited amount of times.
 * * Lava tiles will cause affected characters to burn constantly.
 * * Shock tiles instantly jolt characters that step upon them. If it's the
 *   player, send them back to their previous position, too.
 * * Bounce tiles will cause characters that step onto them to bounce forward a
 *   certain number of tiles based on the bounce strength.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
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
 * VisuMZ_2_MovementEffects
 *
 * Footstep sounds can be played for certain unique tiles if the VisuStella MZ
 * Movement Effects plugin is installed. Modify the settings found in the
 * Plugin Parameters to allow them to do so.
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
 * VisuMZ_2_MovementEffects
 * 
 * Smart Rush, Smart Jump, and Smart Blink cannot be used while on certain
 * unique tiles, like slippery tiles and force move tiles. This is because the
 * movement behavior will conflict with these tiles' properties. Some actions
 * like Smart Rush will be cut short when going onto these regions.
 * 
 * The general footstep sound effects will also stop playing on these unique
 * tiles. Instead, different sound effects declared through the Unique Tile
 * Effects plugin will be played instead.
 * 
 * Both Smart Rush and Smart Jump can move the player into a pitfall and other
 * similar tiles. Smart Blink, however, will not.
 * 
 * ---
 * 
 * VisuMZ_3_EventChainReact
 * 
 * While on certain unique tiles, some objects cannot be pushed or pulled. For
 * example, the player cannot pull objects with the Plugin Commands while there
 * is a slippery tile or force move tile behind the player.
 * 
 * Objects also cannot be pulled while on unique tiles like slippery tiles and
 * force move tiles.
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
 * Naturally, this causes problems with the Unique Tile Effects plugin as the
 * water tiles allow for swimming and drowning.
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
 * === Bounce Tile-Related Notetags ===
 * 
 * Bounce tiles will cause affected characters that step over them to jump
 * forward a specified amount of spaces based on their regions/terrain tags.
 * This allows characters to scale past obstacles and/or other events!
 * 
 * This jump effect has no rules other than it jumps forward that many spaces.
 * The no rules bit means the jump tile is capable of launching characters into
 * walls and/or on top of other events, so place your bounce tiles carefully!
 * We are not responsible for any weird landing locations!
 * 
 * If you are making maps where events can launch themselves with the aid of
 * bounce tiles, we recommend putting either slippery tiles or force move tiles
 * to move those events out of the way in the scenario where the player is
 * following behind. This is to prevent the player from landing on top of the
 * event.
 * 
 * ---
 *
 * <Bounce d Region: x>
 * <Bounce d Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become bounce tiles, causing
 *   the characters to jump forward a specific 'distance'.
 * - Replace 'd' with a number from 1 to 9 representing the distance to jump.
 *   Numbers above 10 will be ignored to prevent clipping bugs.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a bounce tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Bounce d Terrain Tag: x>
 * <Bounce d Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these terrain tags will become bounce tiles,
 *   causing the characters to jump forward a specific 'distance'.
 * - Replace 'd' with a number from 1 to 9 representing the distance to jump.
 *   Numbers above 10 will be ignored to prevent clipping bugs.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a bounce tile marker.
 *
 * ---
 *
 * <Can Bounce>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by bounce tiles and jump.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Bounce>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by bounce tiles and not jump.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Bounce>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by bounce tiles and not jump.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by bounce tiles and not jump.
 *
 * ---
 *
 * <Avoid Bounce>
 * <Beware Bounce>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on bounce tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Bounce>
 * <Ignore Bounce>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto bounce tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Force Move Tile-Related Notetags ===
 * 
 * Force move tiles cause affected characters on top of them to move in a
 * specified direction continuously. This means that even if a character is
 * stopped midway, transferred to the tile, or relocated to the force move
 * tile, once the path is clear, the character will be sent automatically
 * moving in the designated direction.
 * 
 * ---
 *
 * <Force direction Region: x>
 * <Force direction Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become force move tiles,
 *   causing the characters on top of the go moving in the direction the tiles
 *   direct them to upon stepping on them.
 * - Replace 'direction' with a string that is either 'down', 'left', 'right',
 *   or 'up' (without the quotes) to designate the direction the tile will
 *   automatically move the character.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a force move tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Force direction Terrain Tag: x>
 * <Force direction Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these regions will become force move tiles,
 *   causing the characters on top of the go moving in the direction the tiles
 *   direct them to upon stepping on them.
 * - Replace 'direction' with a string that is either 'down', 'left', 'right',
 *   or 'up' (without the quotes) to designate the direction the tile will
 *   automatically move the character.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a force move tile marker.
 *
 * ---
 *
 * <Can Force Move>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by force move tiles.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Force Move>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by force move tiles.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Force Move>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by force move tiles.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by force move tiles.
 *
 * ---
 *
 * <Avoid Force Move>
 * <Beware Force Move>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on force move tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Force Move>
 * <Ignore Force Move>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto force move tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Lava Tile-Related Notetags ===
 * 
 * Lava tiles cause affected characters on top of them to continuously burn
 * over time regardless of whether or not they're moving on the lava tile.
 * When this happens to a player, the party will take lava burn damage, and
 * events will be erased.
 * 
 * When the character steps off a lava tile and is still surviving, the
 * otherwise continuously lava effect wears off. However, the damage remains
 * for the events and the number of times they can survive further lava burns
 * has been reduced.
 * 
 * ---
 *
 * <Lava Region: x>
 * <Lava Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become lava tiles, causing
 *   the characters on top to continuously take damage regardless of whether or
 *   not they're moving on the lava tile.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a lava tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Lava Terrain Tag: x>
 * <Lava Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these terrain tags will become lava tiles,
 *   causing the characters on top to continuously take damage regardless of
 *   whether or not they're moving on the lava tile.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a lava tile marker.
 *
 * ---
 *
 * <Can Lava Burn>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by lava tiles and burn.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Lava Burn>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by lava tiles and not burn.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Lava Burn>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by lava tiles and not burn.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by lava tiles and not burn.
 *
 * ---
 * 
 * <Lava Burn Max: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If the event can be affected by lava tiles and burn, this determines the
 *   maximum amount of times they can burn before erasure.
 * - Replace 'x' with a number representing the maximum number of times the
 *   event can burn before erasure.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Avoid Lava>
 * <Beware Lava>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on lava tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Lava>
 * <Ignore Lava>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto lava tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Pitfall Tile-Related Notetags ===
 * 
 * Pitfalls (or bottomless pits) are tiles that when an affected character
 * walks over it, the character will fall to its doom. Players will have their
 * whole party take fall damage and return to a previously safe location.
 * Events will be erased as if an event command took care of them. Characters
 * can jump over pitfalls and be unharmed. Jumping directly into a pitfall will
 * trigger a lethal reaction.
 * 
 * ---
 *
 * <Pitfall Region: x>
 * <Pitfall Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become pitfall tiles,
 *   causing the characters that walk over them to fall in.
 *   - If the player character falls in, the party takes damage.
 *   - If an event falls in, it is erased.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a pitfall tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Pitfall Terrain Tag: x>
 * <Pitfall Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these terrain tags will become pitfall tiles,
 *   causing the characters on top of the go sliding in the direction they're
 *   facing upon stepping on them.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a pitfall tile marker.
 *
 * ---
 * 
 * <Pitfall Transfer: mapID>
 * <Pitfall Transfer: mapID, x, y>
 * 
 * - Used for: Map Notetags
 * - If the player falls into a pitfall tile on this specific map, the player
 *   will be transferred to a different map (after taking damage).
 *   - If the <Pitfall Transfer: mapID> variant is used, transfer the player to
 *     the new map, but keep the current X, Y coordinates.
 *   - If the <Pitfall Transfer: mapID, x, y> variant is used, transfer the
 *     player to specific X, Y coordinates, too.
 *   - The player's direction will be retained in both cases.
 * - Replace 'mapID' with a number representing the ID of the map to transfer
 *   to. Use '0' to keep it to the current map.
 * - Replace 'x' and 'y' with numbers representing the respective target X and
 *   Y coordinates on the new map. If these aren't used, then the player will
 *   retain the current X and Y coordinates.
 * 
 * ---
 *
 * <Can Pitfall>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by pitfall tiles and fall in.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Pitfall>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by pitfall tiles and can't fall in. They are
 *   also unable to walk into them without Through-state assistance.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Pitfall>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by pitfall tiles and can't fall in.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by pitfall tiles and can't fall in.
 *
 * ---
 *
 * <Avoid Pitfall>
 * <Beware Pitfall>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on pitfall tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Pitfall>
 * <Ignore Pitfall>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto pitfall tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Quicksand Tile-Related Notetags ===
 * 
 * Quicksand tiles cause affected characters on top of them to slowly sink
 * deeper with each step they take and visibly go deeper until they fully sink.
 * When this happens to a player, the party will take sandsink damage and then
 * return to a previously safe location. Events will be erased.
 * 
 * When a character steps on a non-quicksand tile, the sandsink counter resets
 * and the character fully resurfaces itself from the ground.
 * 
 * ---
 *
 * <Quicksand Region: x>
 * <Quicksand Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become quicksand tiles,
 *   causing the characters to slowly sink deeper with each step.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a quicksand tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Quicksand Terrain Tag: x>
 * <Quicksand Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these terrain tags will become quicksand tiles,
 *   causing the characters to slowly sink deeper with each step.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a quicksand tile marker.
 *
 * ---
 *
 * <Can Sandsink>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by quicksand tiles and sandsink.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Sandsink>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by quicksand tiles and not sandsink.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Sandsink>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by quicksand tiles and not sandsink.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by quicksand tiles and not sandsink.
 *
 * ---
 *
 * <Avoid Quicksand>
 * <Beware Quicksand>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on quicksand tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Quicksand>
 * <Ignore Quicksand>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto quicksand tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Shock Tile-Related Notetags ===
 * 
 * When characters that are affected by shock tiles and step over them, the
 * tile will shock and zap them. The player will have the whole party take
 * shock damage and then return to a previously safe location. Events will be
 * erased immediately.
 * 
 * ---
 *
 * <Shock Region: x>
 * <Shock Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become shock tiles, causing
 *   the characters to be shocked and zapped.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a shock tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Shock Terrain Tag: x>
 * <Shock Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these terrain tags will become shock tiles,
 *   causing the characters to be shocked and zapped.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a shock tile marker.
 *
 * ---
 *
 * <Can Shock>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by shock tiles and being zapped.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Shock>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by shock tiles and not be zapped.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Sandsink>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by shock tiles and not be zapped.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by shock tiles and not be zapped.
 *
 * ---
 *
 * <Avoid Shock>
 * <Beware Shock>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on shock tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Shock>
 * <Ignore Shock>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto shock tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Slippery Tile-Related Notetags ===
 * 
 * Slippery tiles cause affected characters on top of them to slide forward
 * until they hit a wall or another object. Once they stop, they can turn and
 * move a different direction. If this new direction is still on the slippery
 * tile, the character will continue sliding that direction, too.
 * 
 * ---
 *
 * <Slippery Region: x>
 * <Slippery Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become slippery tiles,
 *   causing the characters on top of the go sliding in the direction they're
 *   facing upon stepping on them.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a slippery tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Slippery Terrain Tag: x>
 * <Slippery Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these terrain tags will become slippery tiles,
 *   causing the characters on top of the go sliding in the direction they're
 *   facing upon stepping on them.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a slippery tile marker.
 *
 * ---
 *
 * <Can Slip>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by slippery tiles and slide.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Slip>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by slippery tiles and not slide.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Slip>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by slippery tiles and not slide.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by slippery tiles and not slide.
 *
 * ---
 *
 * <Avoid Slippery>
 * <Beware Slippery>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on slippery tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Slippery>
 * <Ignore Slippery>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto slippery tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Water Tile-Related Notetags ===
 * 
 * Water tiles are anything that a boat or ship can pass over and do not need
 * to be marked by regions or terrain tags.  Water tiles can cause affected
 * characters to drown in them when walking over them. Players will have their
 * whole party take drowning damage and then return to a previously safe
 * location. Events will be erased. If the player is given the ability to swim,
 * the player can traverse water tiles without any drowning problems.
 * 
 * ---
 *
 * <Can Drown>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by water tiles and drown.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Drown>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by water tiles and not drown. They are also
 *   unable to naturally walk into them withou Through-state assistance.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Can Swim>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become able to swim in water and traverse them.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become able to swim in water and traverse them.
 *
 * ---
 *
 * <Avoid Drown>
 * <Beware Drown>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on water tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Drown>
 * <Ignore Drown>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto water tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
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
 * === Player Plugin Commands ===
 * 
 * ---
 *
 * Player: Set Bounce Status
 * - Changes the player character's ability to navigate on Bounce Tiles.
 *
 *   Immune?:
 *   - Changes the player character's ability to navigate on Bounce Tiles.
 *
 * ---
 *
 * Player: Set Force Move Status
 * - Changes the player character's ability to navigate on Force Move Tiles.
 *
 *   Immune?:
 *   - Changes the player character's ability to navigate on Force Move Tiles.
 *
 * ---
 *
 * Player: Set Lava Status
 * - Changes the player character's ability to navigate on Lava Tiles.
 *
 *   Immune?:
 *   - Changes the player character's ability to navigate on Lava Tiles.
 *
 * ---
 *
 * Player: Set Quicksand Status
 * - Changes the player character's ability to navigate on Quicksand Tiles.
 *
 *   Immune?:
 *   - Changes the player character's ability to navigate on Quicksand Tiles.
 *
 * ---
 *
 * Player: Set Shock Status
 * - Changes the player character's ability to navigate on Shock Tiles.
 *
 *   Immune?:
 *   - Changes the player character's ability to navigate on Shock Tiles.
 *
 * ---
 *
 * Player: Set Slippery Status
 * - Changes the player character's ability to navigate on Slippery Tiles.
 *
 *   Immune?:
 *   - Changes the player character's ability to navigate on Slippery Tiles.
 *
 * ---
 *
 * Player: Set Swimming Status
 * - Changes the player character's ability to navigate on water tiles.
 *
 *   Allow?:
 *   - Changes the player character's ability to navigate on water tiles.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Bounce Tile Settings
 * ============================================================================
 *
 * Settings related to Bounce Tiles.
 * 
 * Bounce tiles will cause affected characters that step over them to jump
 * forward a specified amount of spaces based on their regions/terrain tags.
 * This allows characters to scale past obstacles and/or other events!
 * 
 * This jump effect has no rules other than it jumps forward that many spaces.
 * The no rules bit means the jump tile is capable of launching characters into
 * walls and/or on top of other events, so place your bounce tiles carefully!
 * We are not responsible for any weird landing locations!
 * 
 * If you are making maps where events can launch themselves with the aid of
 * bounce tiles, we recommend putting either slippery tiles or force move tiles
 * to move those events out of the way in the scenario where the player is
 * following behind. This is to prevent the player from landing on top of the
 * event.
 *
 * ---
 *
 * General
 * 
 *   Default Region(s):
 * 
 *     Bounce 1-9 Region(s):
 *     - Which region(s) will be used to mark this tile type?
 *     - Ignore if map has <Bounce 1-9 Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 *
 * ---
 *
 * Sound Effects
 * 
 *   Effect:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Force Move Tile Settings
 * ============================================================================
 *
 * Settings related to Force Move Tiles.
 * 
 * Force move tiles cause affected characters on top of them to move in a
 * specified direction continuously. This means that even if a character is
 * stopped midway, transferred to the tile, or relocated to the force move
 * tile, once the path is clear, the character will be sent automatically
 * moving in the designated direction.
 *
 * ---
 * 
 * General
 * 
 *   Default Region(s):
 * 
 *     Down Region(s):
 *     Left Region(s):
 *     Right Region(s):
 *     Up Region(s):
 *     - Which region(s) will be used to mark this tile type?
 *     - Ignore if map has <Force direction Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *   Tile Move Speed:
 *   - Forces this move speed when on this tile type.
 *   - Use 0 to use the character's current move speed.
 * 
 *   Tile Sprite Pattern:
 *   - Forces this sprite pattern when on this tile type.
 *   - Use -1 to allow characters to freely animate.
 *
 * ---
 *
 * Sound Effects
 * 
 *   Footsteps:
 * 
 *     Enabled?:
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *     - Requires VisuMZ_2_MovementEffects.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Lava Tile Settings
 * ============================================================================
 *
 * Settings related to Lava Tiles.
 * 
 * Lava tiles cause affected characters on top of them to continuously burn
 * over time regardless of whether or not they're moving on the lava tile.
 * When this happens to a player, the party will take lava burn damage, and
 * events will be erased.
 * 
 * When the character steps off a lava tile and is still surviving, the
 * otherwise continuously lava effect wears off. However, the damage remains
 * for the events and the number of times they can survive further lava burns
 * has been reduced.
 *
 * ---
 * 
 * General
 * 
 *   Default Region(s):
 *   - Which region(s) will be used to mark this tile type?
 *   - Ignore if map has <Lava Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *     Event Lava Burn Max:
 *     - Default number of times an event can suffer lava burns before
 *       being erased.
 * 
 *   Lava Burn Frame Delay:
 *   - Frames to delay lava burn iterations from one another.
 *   - Lower: less delay.
 *   - Higher: larger delay.
 *
 * ---
 * 
 * Damage Calculation
 * 
 *   Allow Death?:
 *   - Can actors die from the damage dealt by this tile?
 * 
 *   Rate Damage:
 *   - What percentile of the actor's MaxHP is dealt as damage?
 * 
 *   Flat Damage:
 *   - What flat amount of damage is dealt to the actor?
 * 
 * ---
 * 
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 * ---
 *
 * Sound Effects
 * 
 *   Footsteps:
 * 
 *     Enabled?:
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *     - Requires VisuMZ_2_MovementEffects.
 * 
 *   Damage:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Pitfall Tile Settings
 * ============================================================================
 *
 * Settings related to Pitfall Tiles.
 * 
 * Pitfalls (or bottomless pits) are tiles that when an affected character
 * walks over it, the character will fall to its doom. Players will have their
 * whole party take fall damage and return to a previously safe location.
 * Events will be erased as if an event command took care of them. Characters
 * can jump over pitfalls and be unharmed. Jumping directly into a pitfall will
 * trigger a lethal reaction.
 *
 * ---
 * 
 * General
 * 
 *   Default Region(s):
 *   - Which region(s) will be used to mark this tile type?
 *   - Ignore if map has <Pitfall Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *   Fall Duration:
 *   - How many frames will the falling animation take?
 *
 * ---
 * 
 * Damage Calculation
 * 
 *   Allow Death?:
 *   - Can actors die from the damage dealt by this tile?
 * 
 *   Rate Damage:
 *   - What percentile of the actor's MaxHP is dealt as damage?
 * 
 *   Flat Damage:
 *   - What flat amount of damage is dealt to the actor?
 * 
 * ---
 *
 * Sound Effects
 * 
 *   Fall:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 * 
 *   Damage:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quicksand Tile Settings
 * ============================================================================
 *
 * Settings related to Quicksand Tiles.
 * 
 * Quicksand tiles cause affected characters on top of them to slowly sink
 * deeper with each step they take and visibly go deeper until they fully sink.
 * When this happens to a player, the party will take sandsink damage and then
 * return to a previously safe location. Events will be erased.
 * 
 * When a character steps on a non-quicksand tile, the sandsink counter resets
 * and the character fully resurfaces itself from the ground.
 *
 * ---
 * 
 * General
 * 
 *   Default Region(s):
 *   - Which region(s) will be used to mark this tile type?
 *   - Ignore if map has <Quicksand Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *   Steps to Sandsink:
 *   - How many steps will it take on quicksand before sandsinking a character?
 * 
 *   Tile Move Speed:
 *   - Forces this move speed when on this tile type.
 *   - Use 0 to use the character's current move speed.
 *
 * ---
 * 
 * Damage Calculation
 * 
 *   Allow Death?:
 *   - Can actors die from the damage dealt by this tile?
 * 
 *   Rate Damage:
 *   - What percentile of the actor's MaxHP is dealt as damage?
 * 
 *   Flat Damage:
 *   - What flat amount of damage is dealt to the actor?
 * 
 * ---
 *
 * Sound Effects
 * 
 *   Footsteps:
 * 
 *     Enabled?:
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *     - Requires VisuMZ_2_MovementEffects.
 * 
 *   Damage:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shock Tile Settings
 * ============================================================================
 *
 * Settings related to Shock Tiles.
 * 
 * When characters that are affected by shock tiles and step over them, the
 * tile will shock and zap them. The player will have the whole party take
 * shock damage and then return to a previously safe location. Events will be
 * erased immediately.
 *
 * ---
 * 
 * General
 * 
 *   Default Region(s):
 *   - Which region(s) will be used to mark this tile type?
 *   - Ignore if map has <Shock Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *   Shock Input Delay:
 *   - How many frames to wait before giving player move input?
 *   - Lower: less delay. Higher: larger delay.
 *
 * ---
 * 
 * Damage Calculation
 * 
 *   Allow Death?:
 *   - Can actors die from the damage dealt by this tile?
 * 
 *   Rate Damage:
 *   - What percentile of the actor's MaxHP is dealt as damage?
 * 
 *   Flat Damage:
 *   - What flat amount of damage is dealt to the actor?
 * 
 * ---
 * 
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 * ---
 *
 * Sound Effects
 * 
 *   Damage:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Slippery Tile Settings
 * ============================================================================
 *
 * Settings related to Slippery Tiles.
 * 
 * Slippery tiles cause affected characters on top of them to slide forward
 * until they hit a wall or another object. Once they stop, they can turn and
 * move a different direction. If this new direction is still on the slippery
 * tile, the character will continue sliding that direction, too.
 *
 * ---
 * 
 * General
 * 
 *   Default Region(s):
 *   - Which region(s) will be used to mark this tile type?
 *   - Ignore if map has <Slippery Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *   Tile Move Speed:
 *   - Forces this move speed when on this tile type.
 *   - Use 0 to use the character's current move speed.
 * 
 *   Tile Sprite Pattern:
 *   - Forces this sprite pattern when on this tile type.
 *   - Use -1 to allow characters to freely animate.
 *
 * ---
 *
 * Sound Effects
 * 
 *   Footsteps:
 * 
 *     Enabled?:
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *     - Requires VisuMZ_2_MovementEffects.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Water Tile Settings
 * ============================================================================
 *
 * Settings related to Water Tiles.
 * 
 * Water tiles are anything that a boat or ship can pass over and do not need
 * to be marked by regions or terrain tags.  Water tiles can cause affected
 * characters to drown in them when walking over them. Players will have their
 * whole party take drowning damage and then return to a previously safe
 * location. Events will be erased. If the player is given the ability to swim,
 * the player can traverse water tiles without any drowning problems.
 *
 * ---
 * 
 * General
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *   Drowning Duration:
 *   - How many frames will the drowning animation take?
 * 
 *   Player Can Drown?:
 *   - Allow the player to be able to step into water tiles without the ability
 *     to swim and causing player to drown?
 * 
 *   Swimming Depth:
 *   - How many pixels will the player character be submerged when in a state
 *     of swimming?
 * 
 *   Tile Move Speed:
 *   - Forces this move speed when on this tile type.
 *   - Use 0 to use the character's current move speed.
 *
 * ---
 * 
 * Damage Calculation
 * 
 *   Allow Death?:
 *   - Can actors die from the damage dealt by this tile?
 * 
 *   Rate Damage:
 *   - What percentile of the actor's MaxHP is dealt as damage?
 * 
 *   Flat Damage:
 *   - What flat amount of damage is dealt to the actor?
 * 
 * ---
 *
 * Sound Effects
 * 
 *   Footsteps:
 * 
 *     Enabled?:
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *     - Requires VisuMZ_2_MovementEffects.
 * 
 *   Drown:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 * 
 *   Damage:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
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
 * Version 1.06: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a <Can Swim> notetag to allow inventory held items to work with it.
 *    Fix made by Arisu.
 * 
 * Version 1.05: November 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug where an updated version of Events & Movement Core would
 *    block the pitfall animation for the character sprite. Fix made by Arisu.
 * ** Fixed a bug where events were unable to fall into the water due to a few
 *    notetags clashing. Fix made by Arisu.
 * 
 * Version 1.04: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause repeating flag errors that cannot be stopped
 *    unless you had the VisuStella MZ Core Engine installed. Fix by Irina.
 * ** Fixed a compatibility issue with "Event Title Scene" upon using the
 *    "Return to Title Screen" event command. Fix made by Irina.
 * 
 * Version 1.03: April 13, 2023
 * * Bug Fixes!
 * ** <Anti-Drown> and <Anti-Pitfall> notetags should now work properly for
 *    events. Fix made by Arisu.
 * ** Moving into a wall while in the quicksand will no longer result in
 *    instant KO. Fix made by Arisu.
 * ** While swimming, player can no longer move off onto land tiles that are
 *    not normally passable. Fix made by Arisu.
 * ** Cliff tiles can no longer be bypassed via swimming. Fix made by Arisu.
 * 
 * Version 1.02: January 20, 2023
 * * Bug Fixes!
 * ** If followers are disabled, they no longer trigger footstep sound effects
 *    on unique tiles. Fix made by Arisu.
 * ** When entering water from a bush tile, sprite glitches should no longer
 *    occur. Fix made by Arisu.
 * * Feature Update!
 * ** This plugin is now automatically disabled when doing an event command
 *    test from right-clicking an event and clicking "Test" in order to enable
 *    a controlled environment for event testing. Fix made by Irina.
 * 
 * Version 1.01: December 15, 2022
 * * Bug Fixes!
 * ** Fixed a bug where you cannot respawn on X = 0 or Y = 0.
 * * Documentation Update!
 * ** Added new section: "Warning! RPG Maker MZ Version 1.5.0+ Water-Tile Bug!"
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** Naturally, this causes problems with the Unique Tile Effects plugin as
 *     the water tiles allow for swimming and drowning.
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
 * Version 1.00 Official Release Date: January 6, 2023
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
 * @command PlayerSetAntiBounce
 * @text Player: Set Bounce Status
 * @desc Changes the player character's ability to navigate on Bounce Tiles.
 *
 * @arg Setting:eval
 * @text Immune?
 * @type boolean
 * @on No Bounce
 * @off Force Bounce
 * @desc Changes the player character's ability to navigate on Bounce Tiles.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerSetAntiForceMove
 * @text Player: Set Force Move Status
 * @desc Changes the player character's ability to navigate on Force Move Tiles.
 *
 * @arg Setting:eval
 * @text Immune?
 * @type boolean
 * @on No Force Move
 * @off Force Move
 * @desc Changes the player character's ability to navigate on Force Move Tiles.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerSetAntiLava
 * @text Player: Set Lava Status
 * @desc Changes the player character's ability to walk on Lava Tiles.
 *
 * @arg Setting:eval
 * @text Immune?
 * @type boolean
 * @on No Burn
 * @off Can Burn
 * @desc Changes the player character's ability to walk on Lava Tiles.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerSetAntiQuicksand
 * @text Player: Set Quicksand Status
 * @desc Changes the player character's ability to walk on Quicksand Tiles.
 *
 * @arg Setting:eval
 * @text Immune?
 * @type boolean
 * @on No Sink
 * @off Can Sink
 * @desc Changes the player character's ability to walk on Quicksand Tiles.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerSetAntiShock
 * @text Player: Set Shock Status
 * @desc Changes the player character's ability to walk on Shock Tiles.
 *
 * @arg Setting:eval
 * @text Immune?
 * @type boolean
 * @on No Shock
 * @off Can Shock
 * @desc Changes the player character's ability to walk on Shock Tiles.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerSetAntiSlippery
 * @text Player: Set Slippery Status
 * @desc Changes the player character's ability to walk on Slippery Tiles.
 *
 * @arg Setting:eval
 * @text Immune?
 * @type boolean
 * @on No Slip
 * @off Can Slip
 * @desc Changes the player character's ability to walk on Slippery Tiles.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerSetAllowSwimming
 * @text Player: Set Swimming Status
 * @desc Changes the player character's ability to swim on water Tiles.
 *
 * @arg Setting:eval
 * @text Allow?
 * @type boolean
 * @on Can Swim
 * @off Cannot Swim
 * @desc Changes the player character's ability to swim on water Tiles.
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
 * @param UniqueTileEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param NotetagPartyWide:eval
 * @text Reserve Party Notetags?
 * @type boolean
 * @on All Members Allowed
 * @off Battle Members Only
 * @desc Should immunity notetags check all party members including
 * the reserve members or only battle members?
 * @default true
 *
 * @param Bounce:struct
 * @text Bounce Tile Settings
 * @type struct<Bounce>
 * @desc Settings related to Bounce Tiles.
 * @default {"General":"","DefaultRegions":"","Bounce1Regions:arraynum":"[]","Bounce2Regions:arraynum":"[]","Bounce3Regions:arraynum":"[]","Bounce4Regions:arraynum":"[]","Bounce5Regions:arraynum":"[]","Bounce6Regions:arraynum":"[]","Bounce7Regions:arraynum":"[]","Bounce8Regions:arraynum":"[]","Bounce9Regions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"false","Sound":"","Effect":"","effectName:str":"Jump2","effectVolume:num":"50","effectPitch:num":"120","effectPan:num":"0"}
 *
 * @param ForceMove:struct
 * @text Force Move Tile Settings
 * @type struct<ForceMove>
 * @desc Settings related to Force Move Tiles.
 * @default {"General":"","DefaultRegions":"","DownRegions:arraynum":"[]","LeftRegions:arraynum":"[]","RightRegions:arraynum":"[]","UpRegions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"false","MoveSpeed:num":"6","Pattern:num":"2","Sound":"","Footsteps":"","footstepsEnabled:eval":"true","footstepsName:str":"Skill1","footstepsVolume:num":"10","footstepsPitch:num":"130","footstepsPan:num":"0"}
 *
 * @param Lava:struct
 * @text Lava Tile Settings
 * @type struct<Lava>
 * @desc Settings related to Lava Tiles.
 * @default {"General":"","DefaultRegions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"true","LavaBurnEventMax:num":"6","LavaBurnTimer:num":"20","DmgCalc":"","DmgDeathAllow:eval":"true","DmgRate:num":"0.05","DmgFlat:num":"50","Animation":"","AnimationID:num":"0","AnimationMirror:eval":"false","AnimationMute:eval":"false","Sound":"","Footsteps":"","footstepsEnabled:eval":"true","footstepsName:str":"Fire2","footstepsVolume:num":"10","footstepsPitch:num":"120","footstepsPan:num":"0","Damage":"","damageName:str":"Fire8","damageVolume:num":"30","damagePitch:num":"100","damagePan:num":"0"}
 *
 * @param Pitfall:struct
 * @text Pitfall Tile Settings
 * @type struct<Pitfall>
 * @desc Settings related to Pitfall Tiles.
 * @default {"General":"","DefaultRegions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"true","EffectDuration:num":"20","DmgCalc":"","DmgDeathAllow:eval":"true","DmgRate:num":"0.20","DmgFlat:num":"20","Sound":"","Effect":"","effectName:str":"Fall","effectVolume:num":"50","effectPitch:num":"80","effectPan:num":"0","Damage":"","damageName:str":"Earth4","damageVolume:num":"30","damagePitch:num":"80","damagePan:num":"0"}
 *
 * @param Quicksand:struct
 * @text Quicksand Tile Settings
 * @type struct<Quicksand>
 * @desc Settings related to Quicksand Tiles.
 * @default {"General":"","DefaultRegions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"true","StepsSandSink:num":"10","MoveSpeed:num":"3","DmgCalc":"","DmgDeathAllow:eval":"true","DmgRate:num":"0.30","DmgFlat:num":"40","Sound":"","Footsteps":"","footstepsEnabled:eval":"true","footstepsName:str":"Blow2","footstepsVolume:num":"10","footstepsPitch:num":"60","footstepsPan:num":"0","Damage":"","damageName:str":"Earth3","damageVolume:num":"30","damagePitch:num":"120","damagePan:num":"0"}
 *
 * @param Shock:struct
 * @text Shock Tile Settings
 * @type struct<Shock>
 * @desc Settings related to Shock Tiles.
 * @default {"General":"","DefaultRegions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"true","ShockTimer:num":"60","DmgCalc":"","DmgDeathAllow:eval":"true","DmgRate:num":"0.25","DmgFlat:num":"60","Animation":"","AnimationID:num":"0","AnimationMirror:eval":"false","AnimationMute:eval":"false","Sound":"","Damage":"","damageName:str":"Thunder3","damageVolume:num":"30","damagePitch:num":"120","damagePan:num":"0"}
 *
 * @param Slippery:struct
 * @text Slippery Tile Settings
 * @type struct<Slippery>
 * @desc Settings related to Slippery Tiles.
 * @default {"General":"","DefaultRegions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"false","MoveSpeed:num":"4","Pattern:num":"2","Sound":"","Footsteps":"","footstepsEnabled:eval":"true","footstepsName:str":"Sand","footstepsVolume:num":"10","footstepsPitch:num":"150","footstepsPan:num":"0"}
 *
 * @param Swimming:struct
 * @text Water Tile Settings
 * @type struct<Swimming>
 * @desc Settings related to Water Tiles.
 * @default {"General":"","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"true","EffectDuration:num":"30","playerCanDrown:eval":"true","SwimmingDepth:num":"16","MoveSpeed:num":"4","DmgCalc":"","DmgDeathAllow:eval":"true","DmgRate:num":"0.10","DmgFlat:num":"15","Sound":"","Footsteps":"","footstepsEnabled:eval":"true","footstepsName:str":"Water1","footstepsVolume:num":"10","footstepsPitch:num":"80","footstepsPan:num":"0","Effect":"","effectName:str":"Dive","effectVolume:num":"50","effectPitch:num":"120","effectPan:num":"0","Damage":"","damageName:str":"Water3","damageVolume:num":"30","damagePitch:num":"80","damagePan:num":"0"}
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
 * Slippery Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Slippery:
 *
 * @param General
 *
 * @param DefaultRegions:arraynum
 * @text Default Region(s)
 * @parent General
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Slippery Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default false
 *
 * @param MoveSpeed:num
 * @text Tile Move Speed
 * @parent General
 * @type number
 * @desc Forces this move speed when on this tile type.
 * Use 0 to use the character's current move speed.
 * @default 4
 *
 * @param Pattern:num
 * @text Tile Sprite Pattern
 * @parent General
 * @desc Forces this sprite pattern when on this tile type.
 * Use -1 to allow characters to freely animate.
 * @default 2
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Footsteps
 * @parent Sound
 *
 * @param footstepsEnabled:eval
 * @text Enabled?
 * @parent Footsteps
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable footstep sounds for this tile?
 * Requires VisuMZ_2_MovementEffects!
 * @default true
 *
 * @param footstepsName:str
 * @text Filename
 * @parent Footsteps
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default Sand
 *
 * @param footstepsVolume:num
 * @text Volume
 * @parent Footsteps
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 10
 *
 * @param footstepsPitch:num
 * @text Pitch
 * @parent Footsteps
 * @type number
 * @desc Pitch of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 150
 *
 * @param footstepsPan:num
 * @text Pan
 * @parent Footsteps
 * @desc Pan of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Force Move Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ForceMove:
 *
 * @param General
 *
 * @param DefaultRegions
 * @text Default Region(s)
 * @parent General
 *
 * @param DownRegions:arraynum
 * @text Down Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Force Down Region: x> notetag.
 * @default []
 *
 * @param LeftRegions:arraynum
 * @text Left Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Force Left Region: x> notetag.
 * @default []
 *
 * @param RightRegions:arraynum
 * @text Right Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Force Right Region: x> notetag.
 * @default []
 *
 * @param UpRegions:arraynum
 * @text Up Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Force Up Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default false
 *
 * @param MoveSpeed:num
 * @text Tile Move Speed
 * @parent General
 * @type number
 * @desc Forces this move speed when on this tile type.
 * Use 0 to use the character's current move speed.
 * @default 6
 *
 * @param Pattern:num
 * @text Tile Sprite Pattern
 * @parent General
 * @desc Forces this sprite pattern when on this tile type.
 * Use -1 to allow characters to freely animate.
 * @default 2
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Footsteps
 * @parent Sound
 *
 * @param footstepsEnabled:eval
 * @text Enabled?
 * @parent Footsteps
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable footstep sounds for this tile?
 * Requires VisuMZ_2_MovementEffects!
 * @default true
 *
 * @param footstepsName:str
 * @text Filename
 * @parent Footsteps
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default Skill1
 *
 * @param footstepsVolume:num
 * @text Volume
 * @parent Footsteps
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 10
 *
 * @param footstepsPitch:num
 * @text Pitch
 * @parent Footsteps
 * @type number
 * @desc Pitch of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 130
 *
 * @param footstepsPan:num
 * @text Pan
 * @parent Footsteps
 * @desc Pan of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Pitfall Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Pitfall:
 *
 * @param General
 *
 * @param DefaultRegions:arraynum
 * @text Default Region(s)
 * @parent General
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Pitfall Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default true
 *
 * @param EffectDuration:num
 * @text Fall Duration
 * @parent General
 * @type number
 * @min 1
 * @desc How many frames will the falling animation take?
 * @default 20
 *
 * @param DmgCalc
 * @text Damage Calculation
 *
 * @param DmgDeathAllow:eval
 * @text Allow Death?
 * @parent DmgCalc
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Can actors die from the damage dealt by this tile?
 * @default true
 *
 * @param DmgRate:num
 * @text Rate Damage
 * @parent DmgCalc
 * @desc What percentile of the actor's MaxHP is dealt as damage?
 * @default 0.20
 *
 * @param DmgFlat:num
 * @text Flat Damage
 * @parent DmgCalc
 * @type number
 * @desc What flat amount of damage is dealt to the actor?
 * @default 20
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Effect
 * @text Fall
 * @parent Sound
 *
 * @param effectName:str
 * @text Filename
 * @parent Effect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Fall
 *
 * @param effectVolume:num
 * @text Volume
 * @parent Effect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 50
 *
 * @param effectPitch:num
 * @text Pitch
 * @parent Effect
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 80
 *
 * @param effectPan:num
 * @text Pan
 * @parent Effect
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param Damage
 * @parent Sound
 *
 * @param damageName:str
 * @text Filename
 * @parent Damage
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Earth4
 *
 * @param damageVolume:num
 * @text Volume
 * @parent Damage
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 30
 *
 * @param damagePitch:num
 * @text Pitch
 * @parent Damage
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 80
 *
 * @param damagePan:num
 * @text Pan
 * @parent Damage
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Swimming Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Swimming:
 *
 * @param General
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default true
 *
 * @param EffectDuration:num
 * @text Drowning Duration
 * @parent General
 * @type number
 * @min 1
 * @desc How many frames will the drowning animation take?
 * @default 30
 *
 * @param playerCanDrown:eval
 * @text Player Can Drown?
 * @parent General
 * @type boolean
 * @on Drown
 * @off Avoid
 * @desc Allow the player to be able to step into water tiles
 * without the ability to swim and causing player to drown?
 * @default true
 *
 * @param SwimmingDepth:num
 * @text Swimming Depth
 * @parent General
 * @type number
 * @desc How many pixels will the player character be submerged
 * when in a state of swimming?
 * @default 16
 *
 * @param MoveSpeed:num
 * @text Tile Move Speed
 * @parent General
 * @type number
 * @desc Forces this move speed when on this tile type.
 * Use 0 to use the character's current move speed.
 * @default 4
 *
 * @param DmgCalc
 * @text Damage Calculation
 *
 * @param DmgDeathAllow:eval
 * @text Allow Death?
 * @parent DmgCalc
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Can actors die from the damage dealt by this tile?
 * @default true
 *
 * @param DmgRate:num
 * @text Rate Damage
 * @parent DmgCalc
 * @desc What percentile of the actor's MaxHP is dealt as damage?
 * @default 0.10
 *
 * @param DmgFlat:num
 * @text Flat Damage
 * @parent DmgCalc
 * @type number
 * @desc What flat amount of damage is dealt to the actor?
 * @default 15
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Footsteps
 * @parent Sound
 *
 * @param footstepsEnabled:eval
 * @text Enabled?
 * @parent Footsteps
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable footstep sounds for this tile?
 * Requires VisuMZ_2_MovementEffects!
 * @default true
 *
 * @param footstepsName:str
 * @text Filename
 * @parent Footsteps
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default Water1
 *
 * @param footstepsVolume:num
 * @text Volume
 * @parent Footsteps
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 10
 *
 * @param footstepsPitch:num
 * @text Pitch
 * @parent Footsteps
 * @type number
 * @desc Pitch of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 80
 *
 * @param footstepsPan:num
 * @text Pan
 * @parent Footsteps
 * @desc Pan of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 0
 * 
 * @param Effect
 * @text Drown
 * @parent Sound
 *
 * @param effectName:str
 * @text Filename
 * @parent Effect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Dive
 *
 * @param effectVolume:num
 * @text Volume
 * @parent Effect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 50
 *
 * @param effectPitch:num
 * @text Pitch
 * @parent Effect
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param effectPan:num
 * @text Pan
 * @parent Effect
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param Damage
 * @parent Sound
 *
 * @param damageName:str
 * @text Filename
 * @parent Damage
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Water3
 *
 * @param damageVolume:num
 * @text Volume
 * @parent Damage
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 30
 *
 * @param damagePitch:num
 * @text Pitch
 * @parent Damage
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 80
 *
 * @param damagePan:num
 * @text Pan
 * @parent Damage
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Quicksand Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Quicksand:
 *
 * @param General
 *
 * @param DefaultRegions:arraynum
 * @text Default Region(s)
 * @parent General
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Quicksand Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default true
 *
 * @param StepsSandSink:num
 * @text Steps to Sandsink
 * @parent General
 * @type number
 * @min 1
 * @desc How many steps will it take on quicksand before
 * sandsinking a character?
 * @default 10
 *
 * @param MoveSpeed:num
 * @text Tile Move Speed
 * @parent General
 * @type number
 * @desc Forces this move speed when on this tile type.
 * Use 0 to use the character's current move speed.
 * @default 3
 *
 * @param DmgCalc
 * @text Damage Calculation
 *
 * @param DmgDeathAllow:eval
 * @text Allow Death?
 * @parent DmgCalc
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Can actors die from the damage dealt by this tile?
 * @default true
 *
 * @param DmgRate:num
 * @text Rate Damage
 * @parent DmgCalc
 * @desc What percentile of the actor's MaxHP is dealt as damage?
 * @default 0.30
 *
 * @param DmgFlat:num
 * @text Flat Damage
 * @parent DmgCalc
 * @type number
 * @desc What flat amount of damage is dealt to the actor?
 * @default 40
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Footsteps
 * @parent Sound
 *
 * @param footstepsEnabled:eval
 * @text Enabled?
 * @parent Footsteps
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable footstep sounds for this tile?
 * Requires VisuMZ_2_MovementEffects!
 * @default true
 *
 * @param footstepsName:str
 * @text Filename
 * @parent Footsteps
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default Blow2
 *
 * @param footstepsVolume:num
 * @text Volume
 * @parent Footsteps
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 10
 *
 * @param footstepsPitch:num
 * @text Pitch
 * @parent Footsteps
 * @type number
 * @desc Pitch of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 60
 *
 * @param footstepsPan:num
 * @text Pan
 * @parent Footsteps
 * @desc Pan of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 0
 * 
 * @param Damage
 * @parent Sound
 *
 * @param damageName:str
 * @text Filename
 * @parent Damage
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Earth3
 *
 * @param damageVolume:num
 * @text Volume
 * @parent Damage
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 30
 *
 * @param damagePitch:num
 * @text Pitch
 * @parent Damage
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param damagePan:num
 * @text Pan
 * @parent Damage
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Lava Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Lava:
 *
 * @param General
 *
 * @param DefaultRegions:arraynum
 * @text Default Region(s)
 * @parent General
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Lava Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default true
 *
 * @param LavaBurnEventMax:num
 * @text Event Lava Burn Max
 * @parent EventDefaults
 * @type number
 * @min 1
 * @desc Default number of times an event can suffer lava burns
 * before being erased.
 * @default 6
 *
 * @param LavaBurnTimer:num
 * @text Lava Burn Frame Delay
 * @parent General
 * @type number
 * @min 1
 * @desc Frames to delay lava burn iterations from one another.
 * Lower: less delay. Higher: larger delay.
 * @default 20
 *
 * @param DmgCalc
 * @text Damage Calculation
 *
 * @param DmgDeathAllow:eval
 * @text Allow Death?
 * @parent DmgCalc
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Can actors die from the damage dealt by this tile?
 * @default true
 *
 * @param DmgRate:num
 * @text Rate Damage
 * @parent DmgCalc
 * @desc What percentile of the actor's MaxHP is dealt as damage?
 * @default 0.05
 *
 * @param DmgFlat:num
 * @text Flat Damage
 * @parent DmgCalc
 * @type number
 * @desc What flat amount of damage is dealt to the actor?
 * @default 50
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * Requires VisuMZ_0_CoreEngine.
 * @default 0
 *
 * @param AnimationMirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param AnimationMute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Footsteps
 * @text Footsteps
 * @parent Sound
 *
 * @param footstepsEnabled:eval
 * @text Enabled?
 * @parent Footsteps
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable footstep sounds for this tile?
 * Requires VisuMZ_2_MovementEffects!
 * @default true
 *
 * @param footstepsName:str
 * @text Filename
 * @parent Footsteps
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default Fire2
 *
 * @param footstepsVolume:num
 * @text Volume
 * @parent Footsteps
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 10
 *
 * @param footstepsPitch:num
 * @text Pitch
 * @parent Footsteps
 * @type number
 * @desc Pitch of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 120
 *
 * @param footstepsPan:num
 * @text Pan
 * @parent Footsteps
 * @desc Pan of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 0
 * 
 * @param Damage
 * @parent Sound
 *
 * @param damageName:str
 * @text Filename
 * @parent Damage
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Fire8
 *
 * @param damageVolume:num
 * @text Volume
 * @parent Damage
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 30
 *
 * @param damagePitch:num
 * @text Pitch
 * @parent Damage
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param damagePan:num
 * @text Pan
 * @parent Damage
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Shock Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Shock:
 *
 * @param General
 *
 * @param DefaultRegions:arraynum
 * @text Default Region(s)
 * @parent General
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Shock Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default true
 *
 * @param ShockTimer:num
 * @text Shock Input Delay
 * @parent General
 * @type number
 * @min 1
 * @desc How many frames to wait before giving player move input?
 * Lower: less delay. Higher: larger delay.
 * @default 60
 *
 * @param DmgCalc
 * @text Damage Calculation
 *
 * @param DmgDeathAllow:eval
 * @text Allow Death?
 * @parent DmgCalc
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Can actors die from the damage dealt by this tile?
 * @default true
 *
 * @param DmgRate:num
 * @text Rate Damage
 * @parent DmgCalc
 * @desc What percentile of the actor's MaxHP is dealt as damage?
 * @default 0.25
 *
 * @param DmgFlat:num
 * @text Flat Damage
 * @parent DmgCalc
 * @type number
 * @desc What flat amount of damage is dealt to the actor?
 * @default 60
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * Requires VisuMZ_0_CoreEngine.
 * @default 0
 *
 * @param AnimationMirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param AnimationMute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Damage
 * @parent Sound
 *
 * @param damageName:str
 * @text Filename
 * @parent Damage
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Thunder3
 *
 * @param damageVolume:num
 * @text Volume
 * @parent Damage
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 30
 *
 * @param damagePitch:num
 * @text Pitch
 * @parent Damage
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param damagePan:num
 * @text Pan
 * @parent Damage
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Bounce Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Bounce:
 *
 * @param General
 *
 * @param DefaultRegions
 * @text Default Region(s)
 * @parent General
 *
 * @param Bounce1Regions:arraynum
 * @text Bounce 1 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 1 Region: x> notetag.
 * @default []
 *
 * @param Bounce2Regions:arraynum
 * @text Bounce 2 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 2 Region: x> notetag.
 * @default []
 *
 * @param Bounce3Regions:arraynum
 * @text Bounce 3 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 3 Region: x> notetag.
 * @default []
 *
 * @param Bounce4Regions:arraynum
 * @text Bounce 4 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 4 Region: x> notetag.
 * @default []
 *
 * @param Bounce5Regions:arraynum
 * @text Bounce 5 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 5 Region: x> notetag.
 * @default []
 *
 * @param Bounce6Regions:arraynum
 * @text Bounce 6 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 6 Region: x> notetag.
 * @default []
 *
 * @param Bounce7Regions:arraynum
 * @text Bounce 7 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 7 Region: x> notetag.
 * @default []
 *
 * @param Bounce8Regions:arraynum
 * @text Bounce 8 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 8 Region: x> notetag.
 * @default []
 *
 * @param Bounce9Regions:arraynum
 * @text Bounce 9 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 9 Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default false
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Effect
 * @parent Sound
 *
 * @param effectName:str
 * @text Filename
 * @parent Effect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Jump2
 *
 * @param effectVolume:num
 * @text Volume
 * @parent Effect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 50
 *
 * @param effectPitch:num
 * @text Pitch
 * @parent Effect
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param effectPan:num
 * @text Pan
 * @parent Effect
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
//=============================================================================

const _0x9d1216=_0x1691;function _0x1691(_0x5569e5,_0xbbe934){const _0x11937f=_0x1193();return _0x1691=function(_0x1691d3,_0x32d81c){_0x1691d3=_0x1691d3-0x1a4;let _0x32bea4=_0x11937f[_0x1691d3];return _0x32bea4;},_0x1691(_0x5569e5,_0xbbe934);}(function(_0x1ccd75,_0x4f2a45){const _0x31a9e7=_0x1691,_0x53f889=_0x1ccd75();while(!![]){try{const _0x3f25ae=-parseInt(_0x31a9e7(0x269))/0x1+parseInt(_0x31a9e7(0x376))/0x2*(parseInt(_0x31a9e7(0x281))/0x3)+-parseInt(_0x31a9e7(0x241))/0x4*(-parseInt(_0x31a9e7(0x36b))/0x5)+-parseInt(_0x31a9e7(0x28b))/0x6+-parseInt(_0x31a9e7(0x1fe))/0x7+-parseInt(_0x31a9e7(0x294))/0x8*(-parseInt(_0x31a9e7(0x348))/0x9)+parseInt(_0x31a9e7(0x31d))/0xa;if(_0x3f25ae===_0x4f2a45)break;else _0x53f889['push'](_0x53f889['shift']());}catch(_0x38ec1b){_0x53f889['push'](_0x53f889['shift']());}}}(_0x1193,0x2b2bc));function _0x1193(){const _0x5096d0=['isMovementEffectsUniqueTilesSmartBlinkCompatible','_bypassPassableAnyDirection','min','bounce3','UpRegions','isSwimming','calcUniqueTileCharaFrame','damagePitch','restorePreDrowning','Game_Player_moveByInput','26217HJHClr','forceMoveDirection','WzPof','Pitfall','updateScaleBase','onDrowningFinish','_uniqueTileMoveDirection','name','QEiYB','Water1','increaseStepsUniqueTileEffects','nsQXY','scaleX','setupUniqueTileEffectsNotetags','clearUniqueTilePartyImmunity','visibleFollowers','_character','PlayerSetAntiShock','floor','processSlipperyEffect','page','DmgRate','VisuMZ_2_MovementEffects','damagePan','UniqueTileEffects','Bounce2Regions','bounce9','playUniqueTileSfx','note','Settings','eventsXy','finishDrowningEffect','qeNJU','Pattern','Game_Player_isTileSmartJumpCompatible','3265srJppo','Sprite_Character_update','Setting','DROWNING_DURATION','isUniqueTileAffected','turnOffDrowning','registerCommand','immuneReserveParty','pitch','canUniqueTileEndSmartAction','DqiYe','441076YxRgVz','isDead','Game_Player_isTileSmartJumpBreakable','canUpdateUniqueTileEffects','description','isAffectedByCurrentUniqueTile','canSwimInWater','UNIQUE_TILE_PATTERN','PITFALL_DURATION','bounce7','clear','updateCharacterFrame','VisuMZ_4_EventTitleScene','Game_Player_isDashing','clone','volume','processBounceEffect','oJolZ','OdUfH','makeUniqueTileFootstepSounds','hasUniqueTileEffects','HxCiH','finishPitfallEffect','Game_Actor_forceChangeEquip','Lava','_isPitfalling','isVisible','OKUFB','doesCurrentTileHaveUniqueFootstepSfx','list','canPreventSafestCoordinateRegistration','AnimationMirror','Game_CharacterBase_increaseSteps','registerLastSafestCoordinate','mute','UNIQUE_TILE_AFFECTED_DEFAULT','effect','Game_Player_moveBySmartRush','KEGka','playSe','Game_CharacterBase_canMakeFootstepSounds','Game_Player_isTileSmartBlinkBreakable','updateCharacterFrameDrowning','TXbsf','RightRegions','swimmingDepth','_priorityType','PlayerSetAntiLava','avoid','TileTypes','canSmartJump','TOdOr','PlayerSetAntiQuicksand','burnMax','split','updateQuicksand','reverseDir','moveDiagonally','cOPUo','restorePrePitfallScale','constructor','_tempSlipperyTileStop','Sprite_Character_initMembers','xFwtW','Dive','_lastSafestCoordinate','bounce1','and\x20add\x20it\x20onto\x20this\x20one.','_refresh','dmgFlat','gainItem','erase','STR','isRawPassableByAnyDirection','pNVPB','vTSTT','startPitfallEffect','pitfall','onPitfallDead','dLSkt','DnGqW','getUniqueTileRegions','isTransferring','Game_Actor_changeEquip','UNIQUE_TILE_DAMAGE','left','isTileSmartJumpCompatible','PlayerSetAntiSlippery','VisuMZ_3_EventChainReact','tileset','hdJnd','canBePushed','updateSelfMovement','isOnBush','_drowningDuration','Game_CharacterBase_pattern','isUniqueTileWithoutBelow','bounce0','characterName','isOnUniqueTile','ApplyFootstepSfxModifiers','iicGv','moveBySmartRush','updateJump','footstepsVolume','refresh','Swimming','pattern','rzQZz','prototype','iHpwO','JSON','roundXWithDirection','canBePulled','isMoving','MoveSpeed','some','ARRAYEVAL','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','turnOffPitfalling','Game_CharacterBase_locate','bounce5','moveByInput','processUniqueTileDamage','cawkP','mAHkq','frameCount','setFrame','_uniqueTileMoveSpeed','STRUCT','mirror','canMakeUniqueTileFootstepSounds','_frame','processUniqueTileEffect','onPitfallFinish','updateDrowningEffect','items','uOVPm','filter','_flagErrorShown','quicksand','canMakeFootstepSounds','exit','footstepsName','checkBlockedCliffTiles','regionId','getUniqueTileCharaFrameTarget','QUICKSAND_MAX_STEPS','processDrowningEffect','1996659yOieRU','Water3','damageVolume','isUniqueTileAvoided','isDashingAffectedByUniqueTile','isImmuneToUniqueTileType','_uniqueTileAffected','XNtqP','characterBlockY','scaleY','mhp','anyFollowersNotSwimming','indexOf','isStopping','checkEventTriggerHere','ZVQLq','_lowerBody','characterPatternX','Game_Player_canSmartBlink','ARRAYFUNC','map','NUM','characterBlockX','down','Thunder3','_uniqueTilePartyImmune','lPUBs','qqJdp','DmgDeathAllow','ucMaD','behindUniqueTileMeetsPullTargetEventConditions','Game_Party_gainItem','_erased','UNIQUE_TILE_AVOID_DEFAULT','forceMove','isMovementEffectsUniqueTilesSmartJumpBreakable','_shockEffectDelay','LppXB','event','DefaultRegions','Bounce3Regions','processLavaEffect','ydiKj','_vehicleGettingOn','Game_Event_clearPageSettings','Bounce','update','getUniqueTileData','characterPatternY','setDirection','_uniqueTileData','height','ForceMove','PlayerSetAntiForceMove','DefaultAvoid','getUniqueTileCharaSwimFrameTarget','setUniqueTileAffected','_followers','gatherFollowers','reserveTransfer','UpQUE','roundYWithDirection','bounce4','_isShocked','VisuMZ_0_CoreEngine','_lavaBurnTimes','isSwimmingTile','356ALGoBZ','_scene','Game_CharacterBase_isOnBush','AnimationMute','includes','ignore','isTileSmartJumpBreakable','LXfEN','enabled','Game_Player_canSmartRush','length','aliveMembers','isSwimmingTileWithNoBridge','HoByT','DefaultAffected','checkUniqueTileEffectsStringTags','slippery','DlioC','isDashing','EVAL','processUniqueTileTransfer','code','meetsUniqueTileGatherConditions','getUniqueTileType','_uniqueTileSelfMove','tileId','UNIQUE_TILE_SFX','Game_CharacterBase_update','call','effectName','EyPLj','setImmuneToUniqueTileType','Game_Player_locate','pbmud','LAVA_EVENT_MAX','_drowningHeightRate','format','initMembers','_spriteset','_upperBody','317259UeDXmN','slipperyMoveDirection','checkPassageNoEvents','hasPushConditionsUniqueTiles','equips','bounce8','processShockEffect','Sprite_Character_updateScaleBase','tilesetFlags','allTiles','isEventTest','_lavaBurnMax','Slippery','UNIQUE_TILE_MOVE_SPEED','parse','VmPvk','isInVehicle','push','pullTargetEvent','_uniqueTileCmdImmune','UNIQUE_TILE_REGIONS','_isDrowning','immune','affected','3SiOnmY','JXFRW','effectPitch','mapTransfer','findTargetSprite','ACFOX','updateUniqueTileEffects','_uniqueTilePattern','initUniqueTileEffectsEffects','BBkUt','1304052JwvmbY','Bounce4Regions','checkUniqueTileType','rvIux','onQuicksandSink','isJumping','usalm','trim','DRmjI','304NEtejM','LeftRegions','footstepsPitch','Sprite_Character_updateCharacterFrame','gXAjf','performCollapse','Game_Event_canBePulled','none','kpiYV','fLwnE','footstepsPan','isPassable','regions','updateUniqueTileData','ConvertParams','getBounceTileDistance','setupEvents','swimming','endSmartRush','Quicksand','Game_CharacterBase_moveDiagonally','setupUniqueTileData','djNGn','updateCharacterSwimmingFrame','LAVA_ANIMATION','AnimationID','startDrowningEffect','SHOCK_DELAY','isQuicksandSinking','Game_CharacterBase_isMapPassable','HuHpR','PlayerSetAllowSwimming','mapId','patternHeight','SHOCK_ANIMATION','DmgFlat','Skill1','isMovementEffectsUniqueTilesSmartJumpCompatible','realMoveSpeed','damage','canSmartBlink','Game_Player_isTileSmartBlinkCompatible','ceil','right','Current\x20tileset\x20has\x20incomplete\x20flag\x20data.','clearPageSettings','checkPassageNoEventsErrorValid','NotetagPartyWide','_nextScene','_uniqueTileTransfer','hasBelowPriorityEventsXy','playerCanDrown','SWIMMING_DEPTH','gotoLastSafestCoordinate','isDebugThrough','bounce2','setupPageSettings','CiWMn','PLAYER_CAN_DROWN','bounce6','effectVolume','jump','terrainTag','clearUniqueTileTempData','Game_CharacterBase_updateJump','getUniqueTileXyType','ARRAYNUM','_uniqueTileAvoid','bounceMoveDirection','getUniqueTileCharaQuicksandFrameTarget','_pitfallDuration','LAVA_DELAY','clamp','dMPHN','PlayerSetAntiBounce','getQuicksandSinkRate','onDrowningDead','isUniqueTile','ARRAYSTRUCT','Bounce1Regions','_data','kpChC','getUniqueTileTerrainTags','AjblR','canUpdateUniqueTileLava','shadowScaleY','match','isShipPassable','WoRZz','_uniqueTileXyType','Game_Player_canSmartJump','Game_Player_refresh','pan','increaseSteps','isSceneMap','changeEquip','requestFauxAnimation','refreshUniqueTileImmunityPartyCheck','processForceMoveEffect','resetPattern','epOOi','direction','_quicksandSteps','qGYLS','Game_CharacterBase_initMembers','Game_Event_canBePushed','UYYLg','parseUniqueTileNotetags','Game_Event_setupPageSettings','patternWidth','_shadowSprite','initUniqueTileData','setupUniqueTileEffectsEffects','isMovementEffectsUniqueTilesSmartBlinkBreakable','MovementEffects','isMovementSucceeded','LavaBurnTimer','KSTcA','allMembers','kpsmU','JOgHQ','tBUhx','Shock','Sand','bounce','isMapPassable','Fire2','damageName','clearUniqueTileSpriteEffects','setupUniqueTileEffectsCommentTags','Earth3','shock','terrainTags','effectPan','forceChangeEquip','Bounce6Regions','_executeFloorDamage','6073170tMtGbF','ARRAYSTR','lava','locate','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Bounce5Regions','_uniqueTileFrameMinusY','_pitfallData','isPlaytest','isTileSmartBlinkBreakable','Game_Player_increaseSteps','Game_CharacterBase_jump','getLastUniqueTileCoordinate','anyFollowersSwimming','Game_Player_pullTargetEvent','bind','isBoatPassable','registerLastUniqueTileCoordinate','battleMembers','moveStraight','max','footstepsEnabled','DgrUr','Game_Map_setupEvents','isAllDead','footstep','gainHp','isTileSmartBlinkCompatible','scale','Bounce9Regions','lSWVe','ETYDG','zPxwN'];_0x1193=function(){return _0x5096d0;};return _0x1193();}var label=_0x9d1216(0x360),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x9d1216(0x1f3)](function(_0x239470){const _0x2123d6=_0x9d1216;return _0x239470['status']&&_0x239470[_0x2123d6(0x37a)][_0x2123d6(0x245)]('['+label+']');})[0x0];VisuMZ[label][_0x9d1216(0x365)]=VisuMZ[label][_0x9d1216(0x365)]||{},VisuMZ['ConvertParams']=function(_0x119597,_0x1a44c0){const _0xad92e=_0x9d1216;for(const _0x4fbcde in _0x1a44c0){if(_0x4fbcde[_0xad92e(0x2ea)](/(.*):(.*)/i)){const _0x50cd4a=String(RegExp['$1']),_0x29b41e=String(RegExp['$2'])['toUpperCase']()[_0xad92e(0x292)]();let _0x5a1576,_0x16cab2,_0x288c21;switch(_0x29b41e){case _0xad92e(0x213):_0x5a1576=_0x1a44c0[_0x4fbcde]!==''?Number(_0x1a44c0[_0x4fbcde]):0x0;break;case _0xad92e(0x2d6):_0x16cab2=_0x1a44c0[_0x4fbcde]!==''?JSON['parse'](_0x1a44c0[_0x4fbcde]):[],_0x5a1576=_0x16cab2[_0xad92e(0x212)](_0x2a2cb3=>Number(_0x2a2cb3));break;case _0xad92e(0x254):_0x5a1576=_0x1a44c0[_0x4fbcde]!==''?eval(_0x1a44c0[_0x4fbcde]):null;break;case _0xad92e(0x1de):_0x16cab2=_0x1a44c0[_0x4fbcde]!==''?JSON[_0xad92e(0x277)](_0x1a44c0[_0x4fbcde]):[],_0x5a1576=_0x16cab2[_0xad92e(0x212)](_0x29eb41=>eval(_0x29eb41));break;case _0xad92e(0x1d8):_0x5a1576=_0x1a44c0[_0x4fbcde]!==''?JSON[_0xad92e(0x277)](_0x1a44c0[_0x4fbcde]):'';break;case'ARRAYJSON':_0x16cab2=_0x1a44c0[_0x4fbcde]!==''?JSON[_0xad92e(0x277)](_0x1a44c0[_0x4fbcde]):[],_0x5a1576=_0x16cab2[_0xad92e(0x212)](_0x29cd8d=>JSON['parse'](_0x29cd8d));break;case'FUNC':_0x5a1576=_0x1a44c0[_0x4fbcde]!==''?new Function(JSON[_0xad92e(0x277)](_0x1a44c0[_0x4fbcde])):new Function('return\x200');break;case _0xad92e(0x211):_0x16cab2=_0x1a44c0[_0x4fbcde]!==''?JSON[_0xad92e(0x277)](_0x1a44c0[_0x4fbcde]):[],_0x5a1576=_0x16cab2[_0xad92e(0x212)](_0x319118=>new Function(JSON[_0xad92e(0x277)](_0x319118)));break;case _0xad92e(0x1b1):_0x5a1576=_0x1a44c0[_0x4fbcde]!==''?String(_0x1a44c0[_0x4fbcde]):'';break;case _0xad92e(0x31e):_0x16cab2=_0x1a44c0[_0x4fbcde]!==''?JSON[_0xad92e(0x277)](_0x1a44c0[_0x4fbcde]):[],_0x5a1576=_0x16cab2[_0xad92e(0x212)](_0x285b46=>String(_0x285b46));break;case _0xad92e(0x1ea):_0x288c21=_0x1a44c0[_0x4fbcde]!==''?JSON[_0xad92e(0x277)](_0x1a44c0[_0x4fbcde]):{},_0x5a1576=VisuMZ[_0xad92e(0x2a2)]({},_0x288c21);break;case _0xad92e(0x2e2):_0x16cab2=_0x1a44c0[_0x4fbcde]!==''?JSON[_0xad92e(0x277)](_0x1a44c0[_0x4fbcde]):[],_0x5a1576=_0x16cab2[_0xad92e(0x212)](_0x3dc035=>VisuMZ[_0xad92e(0x2a2)]({},JSON[_0xad92e(0x277)](_0x3dc035)));break;default:continue;}_0x119597[_0x50cd4a]=_0x5a1576;}}return _0x119597;},(_0x52518b=>{const _0x386178=_0x9d1216,_0x56f686=_0x52518b[_0x386178(0x34f)];for(const _0x479a5e of dependencies){if('zPxwN'!==_0x386178(0x33d))return _0x386178(0x220);else{if(!Imported[_0x479a5e]){if(_0x386178(0x28e)!=='rvIux')this['erase']();else{alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x386178(0x265)](_0x56f686,_0x479a5e)),SceneManager[_0x386178(0x1f7)]();break;}}}}const _0x2fc7a0=_0x52518b[_0x386178(0x37a)];if(_0x2fc7a0[_0x386178(0x2ea)](/\[Version[ ](.*?)\]/i)){const _0x41590c=Number(RegExp['$1']);_0x41590c!==VisuMZ[label]['version']&&(_0x386178(0x248)===_0x386178(0x30c)?(_0x3f9aec('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x37ded5,_0x481430,_0x707972)),_0x4ce8d6[_0x386178(0x1f7)]()):(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x386178(0x265)](_0x56f686,_0x41590c)),SceneManager[_0x386178(0x1f7)]()));}if(_0x2fc7a0[_0x386178(0x2ea)](/\[Tier[ ](\d+)\]/i)){if('nPDOp'!==_0x386178(0x1e6)){const _0x3de057=Number(RegExp['$1']);_0x3de057<tier?(alert(_0x386178(0x1df)[_0x386178(0x265)](_0x56f686,_0x3de057,tier)),SceneManager[_0x386178(0x1f7)]()):tier=Math['max'](_0x3de057,tier);}else{const _0x14d38a=_0x16c5b1[_0x386178(0x2d5)](_0xfb5876,_0x100ac0);if(_0x14d38a==='pitfall'&&_0x225c11[_0x386178(0x2c6)](_0x5e756c,_0x5c18e5))return!![];if(_0x5e01ba['isSwimmingTileWithBridge'](this['x'],this['y']))return!![];return![];}}VisuMZ[_0x386178(0x2a2)](VisuMZ[label]['Settings'],_0x52518b['parameters']);})(pluginData),PluginManager[_0x9d1216(0x371)](pluginData['name'],_0x9d1216(0x2de),_0x2fa97b=>{const _0x287e59=_0x9d1216;VisuMZ[_0x287e59(0x2a2)](_0x2fa97b,_0x2fa97b);const _0x5af7ff=_0x2fa97b[_0x287e59(0x36d)];$gamePlayer[_0x287e59(0x260)](_0x287e59(0x310),_0x5af7ff);}),PluginManager[_0x9d1216(0x371)](pluginData[_0x9d1216(0x34f)],_0x9d1216(0x233),_0x5dd088=>{const _0x22941c=_0x9d1216;VisuMZ[_0x22941c(0x2a2)](_0x5dd088,_0x5dd088);const _0x1dfb0d=_0x5dd088[_0x22941c(0x36d)];$gamePlayer[_0x22941c(0x260)](_0x22941c(0x220),_0x1dfb0d);}),PluginManager[_0x9d1216(0x371)](pluginData[_0x9d1216(0x34f)],_0x9d1216(0x3a5),_0x4ecdbe=>{const _0x1f3aac=_0x9d1216;VisuMZ[_0x1f3aac(0x2a2)](_0x4ecdbe,_0x4ecdbe);const _0x241003=_0x4ecdbe[_0x1f3aac(0x36d)];$gamePlayer[_0x1f3aac(0x260)]('lava',_0x241003);}),PluginManager['registerCommand'](pluginData[_0x9d1216(0x34f)],_0x9d1216(0x3aa),_0x279d7e=>{const _0x1aa66b=_0x9d1216;VisuMZ[_0x1aa66b(0x2a2)](_0x279d7e,_0x279d7e);const _0x38990d=_0x279d7e[_0x1aa66b(0x36d)];$gamePlayer[_0x1aa66b(0x260)](_0x1aa66b(0x1f5),_0x38990d);}),PluginManager[_0x9d1216(0x371)](pluginData[_0x9d1216(0x34f)],_0x9d1216(0x359),_0x33720f=>{const _0x33b939=_0x9d1216;VisuMZ[_0x33b939(0x2a2)](_0x33720f,_0x33720f);const _0x3696ea=_0x33720f[_0x33b939(0x36d)];$gamePlayer[_0x33b939(0x260)](_0x33b939(0x317),_0x3696ea);}),PluginManager[_0x9d1216(0x371)](pluginData['name'],_0x9d1216(0x1c0),_0x1aa1e9=>{const _0x4b4423=_0x9d1216;VisuMZ[_0x4b4423(0x2a2)](_0x1aa1e9,_0x1aa1e9);const _0x6b13e8=_0x1aa1e9['Setting'];$gamePlayer['setImmuneToUniqueTileType']('slippery',_0x6b13e8);}),PluginManager[_0x9d1216(0x371)](pluginData['name'],_0x9d1216(0x2b3),_0x5248ac=>{const _0x2170dc=_0x9d1216;VisuMZ[_0x2170dc(0x2a2)](_0x5248ac,_0x5248ac);const _0x360927=_0x5248ac[_0x2170dc(0x36d)];$gamePlayer[_0x2170dc(0x260)]('swimming',_0x360927);}),VisuMZ['UniqueTileEffects'][_0x9d1216(0x3a7)]=function(_0x5c09a2){const _0x3f3b05=_0x9d1216,_0x3254a0=[_0x3f3b05(0x251),_0x3f3b05(0x1b6),_0x3f3b05(0x2a5),'quicksand','lava',_0x3f3b05(0x317)];if(_0x5c09a2){if('ROXOa'==='HcqvJ'){const _0x2fbf76=this['eventsXy'](_0x5f5b6e,_0x4a563f)[_0x3f3b05(0x1f3)](_0x1af84e=>_0x1af84e&&!_0x1af84e[_0x3f3b05(0x21e)]&&_0x1af84e[_0x3f3b05(0x3a4)]===0x0&&(_0x1af84e[_0x3f3b05(0x1cb)]()!==''||_0x1af84e[_0x3f3b05(0x25a)]()>0x0));return _0x2fbf76['length']>0x0;}else _0x3254a0[_0x3f3b05(0x27a)](_0x3f3b05(0x215),_0x3f3b05(0x1be),_0x3f3b05(0x2bf),'up'),_0x3254a0['push'](_0x3f3b05(0x1ab),_0x3f3b05(0x2cb),_0x3f3b05(0x341),_0x3f3b05(0x23c),_0x3f3b05(0x1e2)),_0x3254a0[_0x3f3b05(0x27a)](_0x3f3b05(0x2cf),_0x3f3b05(0x37f),'bounce8',_0x3f3b05(0x362));}else _0x3f3b05(0x1b9)!==_0x3f3b05(0x1b9)?(_0x3dff9d=_0x4c4893||0x1,this[_0x3f3b05(0x2b0)]()?(this['_quicksandSteps']+=_0x6e629c,this[_0x3f3b05(0x2fa)]>=_0x59adec[_0x3f3b05(0x1fc)]&&this['onQuicksandSink']()):this[_0x3f3b05(0x2fa)]=0x0):(_0x3254a0[_0x3f3b05(0x27a)](_0x3f3b05(0x220)),_0x3254a0[_0x3f3b05(0x27a)](_0x3f3b05(0x310)));return _0x3254a0;},VisuMZ[_0x9d1216(0x360)]['RegExp']={'slippery':{'regions':/<SLIP(?:|PERY) REGION(?:|S):[ ](.*)>/i,'terrainTags':/<SLIP(?:|PERY) (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i,'affected':/<(?:|CAN )SLIP>/i,'immune':/<(?:ANTI|ANTI-|ANTI )SLIP(?:|PERY)>/i,'avoid':/<(?:AVOID|BEWARE) (?:SLIP|SLIPPERY|ICE)>/i,'ignore':/<(?:IGNORE|CARELESS) (?:SLIP|SLIPPERY|ICE)>/i},'down':{'regions':/<FORCE DOWN REGION(?:|S):[ ](.*)>/i,'terrainTags':/<FORCE DOWN (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'left':{'regions':/<FORCE LEFT REGION(?:|S):[ ](.*)>/i,'terrainTags':/<FORCE LEFT (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'right':{'regions':/<FORCE RIGHT REGION(?:|S):[ ](.*)>/i,'terrainTags':/<FORCE RIGHT (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'up':{'regions':/<FORCE UP REGION(?:|S):[ ](.*)>/i,'terrainTags':/<FORCE UP (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'forceMove':{'affected':/<(?:|CAN )FORCE MOVE>/i,'immune':/<(?:ANTI|ANTI-|ANTI )FORCE MOVE>/i,'avoid':/<(?:AVOID|BEWARE) FORCE MOVE>/i,'ignore':/<(?:IGNORE|CARELESS) FORCE MOVE>/i},'pitfall':{'regions':/<PIT(?:|FALL) REGION(?:|S):[ ](.*)>/i,'terrainTags':/<PIT(?:|FALL) (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i,'affected':/<(?:|CAN )PIT(?:|FALL)>/i,'immune':/<(?:ANTI|ANTI-|ANTI )PIT(?:|FALL)>/i,'avoid':/<(?:AVOID|BEWARE) PIT(?:|FALL)>/i,'ignore':/<(?:IGNORE|CARELESS) PIT(?:|FALL)>/i,'mapTransfer':/<PIT(?:|FALL) (?:TRANSFER|TELEPORT):[ ](.*)>/i},'swimming':{'affected':/<(?:|CAN )DROWN(?:|ING)>/i,'immune':/<(?:CAN SWIM|ANTI-DROWN)(?:|ING|MING)>/i,'avoid':/<(?:AVOID|BEWARE) DROWN(?:|ING)>/i,'ignore':/<(?:IGNORE|CARELESS) DROWN(?:|ING)>/i},'quicksand':{'regions':/<QUICKSAND REGION(?:|S):[ ](.*)>/i,'terrainTags':/<QUICKSAND (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i,'affected':/<(?:|CAN )(?:|SAND)SINK>/i,'immune':/<(?:ANTI|ANTI-|ANTI )(?:QUICKSAND|SAND|SANDSINK|SINK)>/i,'avoid':/<(?:AVOID|BEWARE) QUICKSAND>/i,'ignore':/<(?:IGNORE|CARELESS) QUICKSAND>/i},'lava':{'regions':/<LAVA REGION(?:|S):[ ](.*)>/i,'terrainTags':/<LAVA (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i,'affected':/<(?:|CAN )(?:|LAVA|LAVA )BURN>/i,'immune':/<(?:ANTI|ANTI-|ANTI )(?:LAVA|BURN|LAVABURN|LAVA BURN)>/i,'avoid':/<(?:AVOID|BEWARE) LAVA>/i,'ignore':/<(?:IGNORE|CARELESS) LAVA>/i,'burnMax':/<(?:|LAVA|LAVA )BURN MAX:[ ](\d+)>/i},'shock':{'regions':/<SHOCK REGION(?:|S):[ ](.*)>/i,'terrainTags':/<SHOCK (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i,'affected':/<(?:|CAN )SHOCK>/i,'immune':/<(?:ANTI|ANTI-|ANTI )SHOCK>/i,'avoid':/<(?:AVOID|BEWARE) SHOCK>/i,'ignore':/<(?:IGNORE|CARELESS) SHOCK>/i},'bounce1':{'regions':/<BOUNCE 1 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 1 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce2':{'regions':/<BOUNCE 2 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 2 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce3':{'regions':/<BOUNCE 3 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 3 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce4':{'regions':/<BOUNCE 4 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 4 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce5':{'regions':/<BOUNCE 5 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 5 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce6':{'regions':/<BOUNCE 6 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 6 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce7':{'regions':/<BOUNCE 7 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 7 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce8':{'regions':/<BOUNCE 8 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 8 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce9':{'regions':/<BOUNCE 9 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 9 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce':{'affected':/<(?:|CAN )BOUNCE>/i,'immune':/<(?:ANTI|ANTI-|ANTI )BOUNCE>/i,'avoid':/<(?:AVOID|BEWARE) BOUNCE>/i,'ignore':/<(?:IGNORE|CARELESS) BOUNCE>/i}},SoundManager[_0x9d1216(0x25b)]={'slippery':{'footstep':{'enabled':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x275)][_0x9d1216(0x332)]??!![],'name':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x275)]['footstepsName']??_0x9d1216(0x30f),'volume':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x275)]['footstepsVolume']??0xa,'pitch':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x275)][_0x9d1216(0x296)]??0x96,'pan':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x275)]['footstepsPan']??0x0}},'forceMove':{'footstep':{'enabled':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x232)][_0x9d1216(0x332)]??!![],'name':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)]['ForceMove'][_0x9d1216(0x1f8)]??_0x9d1216(0x2b8),'volume':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x232)][_0x9d1216(0x1d1)]??0xa,'pitch':VisuMZ['UniqueTileEffects']['Settings'][_0x9d1216(0x232)]['footstepsPitch']??0x82,'pan':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x232)]['footstepsPan']??0x0}},'pitfall':{'effect':{'name':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x34b)]['effectName']??'Fall','volume':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x34b)][_0x9d1216(0x2d0)]??0x32,'pitch':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x34b)]['effectPitch']??0x50,'pan':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x34b)][_0x9d1216(0x319)]??0x0},'damage':{'name':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)]['Pitfall']['damageName']??'Earth4','volume':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x34b)][_0x9d1216(0x200)]??0x1e,'pitch':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x34b)][_0x9d1216(0x345)]??0x50,'pan':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x34b)]['damagePan']??0x0}},'swimming':{'footstep':{'enabled':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x1d3)][_0x9d1216(0x332)]??!![],'name':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x1d3)][_0x9d1216(0x1f8)]??_0x9d1216(0x351),'volume':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x1d3)][_0x9d1216(0x1d1)]??0xa,'pitch':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x1d3)]['footstepsPitch']??0x50,'pan':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x1d3)]['footstepsPan']??0x0},'effect':{'name':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x1d3)][_0x9d1216(0x25e)]??_0x9d1216(0x1a9),'volume':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x1d3)][_0x9d1216(0x2d0)]??0x32,'pitch':VisuMZ[_0x9d1216(0x360)]['Settings']['Swimming']['effectPitch']??0x78,'pan':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x1d3)][_0x9d1216(0x319)]??0x0},'damage':{'name':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x1d3)][_0x9d1216(0x313)]??_0x9d1216(0x1ff),'volume':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x1d3)][_0x9d1216(0x200)]??0x1e,'pitch':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x1d3)][_0x9d1216(0x345)]??0x50,'pan':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x1d3)][_0x9d1216(0x35f)]??0x0}},'quicksand':{'footstep':{'enabled':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)]['Quicksand']['footstepsEnabled']??!![],'name':VisuMZ['UniqueTileEffects']['Settings'][_0x9d1216(0x2a7)][_0x9d1216(0x1f8)]??'Blow2','volume':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x2a7)][_0x9d1216(0x1d1)]??0xa,'pitch':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x2a7)][_0x9d1216(0x296)]??0x3c,'pan':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)]['Quicksand'][_0x9d1216(0x29e)]??0x0},'damage':{'name':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x2a7)]['damageName']??_0x9d1216(0x316),'volume':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)]['Quicksand'][_0x9d1216(0x200)]??0x1e,'pitch':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)]['Quicksand'][_0x9d1216(0x345)]??0x78,'pan':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x2a7)][_0x9d1216(0x35f)]??0x0}},'lava':{'footstep':{'enabled':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)]['Lava']['footstepsEnabled']??!![],'name':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)][_0x9d1216(0x1f8)]??_0x9d1216(0x312),'volume':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)][_0x9d1216(0x1d1)]??0xa,'pitch':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x38e)]['footstepsPitch']??0x78,'pan':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x38e)][_0x9d1216(0x29e)]??0x0},'damage':{'name':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)]['damageName']??'Fire8','volume':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)][_0x9d1216(0x200)]??0x1e,'pitch':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)][_0x9d1216(0x345)]??0x64,'pan':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)][_0x9d1216(0x35f)]??0x0}},'shock':{'damage':{'name':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x30e)][_0x9d1216(0x313)]??_0x9d1216(0x216),'volume':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x30e)][_0x9d1216(0x200)]??0x1e,'pitch':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x30e)][_0x9d1216(0x345)]??0x78,'pan':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x30e)][_0x9d1216(0x35f)]??0x0}},'bounce':{'effect':{'name':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x22b)]['effectName']??'Jump2','volume':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x22b)]['effectVolume']??0x32,'pitch':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)]['Bounce'][_0x9d1216(0x283)]??0x78,'pan':VisuMZ['UniqueTileEffects']['Settings']['Bounce'][_0x9d1216(0x319)]??0x0}}},SoundManager[_0x9d1216(0x363)]=function(_0x248e13,_0x42a74f,_0x369665){const _0x299c35=_0x9d1216;if(_0x248e13===_0x299c35(0x29b))return;const _0x504025=SoundManager[_0x299c35(0x25b)][_0x248e13][_0x42a74f];if(!_0x504025)return;if(_0x42a74f==='effect'&&_0x369665['constructor']===Game_Follower)return;if(_0x248e13===_0x299c35(0x310)&&_0x369665[_0x299c35(0x1a5)]===Game_Follower)return;const _0x171189={'name':_0x504025[_0x299c35(0x34f)]||'','volume':_0x504025[_0x299c35(0x385)]||0x0,'pitch':_0x504025[_0x299c35(0x373)]||0x0,'pan':_0x504025[_0x299c35(0x2f0)]||0x0};if(_0x171189[_0x299c35(0x34f)]==='')return;if(_0x369665&&Imported[_0x299c35(0x35e)]){if(_0x299c35(0x1b3)===_0x299c35(0x223))return _0x2aff66['canSwimInWater']();else VisuMZ[_0x299c35(0x306)][_0x299c35(0x1cd)](_0x171189,_0x369665);}AudioManager[_0x299c35(0x39d)](_0x171189);},SceneManager[_0x9d1216(0x2f2)]=function(){const _0x3736f9=_0x9d1216;return this['_scene']&&this['_scene'][_0x3736f9(0x1a5)]===Scene_Map;},Game_Map[_0x9d1216(0x27d)]={'slippery':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)]['Slippery'][_0x9d1216(0x225)],'down':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x232)]['DownRegions'],'left':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x232)][_0x9d1216(0x295)],'right':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x232)][_0x9d1216(0x3a2)],'up':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x232)][_0x9d1216(0x342)],'pitfall':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x34b)][_0x9d1216(0x225)],'quicksand':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x2a7)][_0x9d1216(0x225)],'lava':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)]['Lava'][_0x9d1216(0x225)],'shock':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x30e)][_0x9d1216(0x225)],'bounce1':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x22b)][_0x9d1216(0x2e3)],'bounce2':VisuMZ[_0x9d1216(0x360)]['Settings']['Bounce'][_0x9d1216(0x361)],'bounce3':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x22b)][_0x9d1216(0x226)],'bounce4':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x22b)][_0x9d1216(0x28c)],'bounce5':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x22b)][_0x9d1216(0x322)],'bounce6':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x22b)][_0x9d1216(0x31b)],'bounce7':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x22b)]['Bounce7Regions'],'bounce8':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x22b)]['Bounce8Regions'],'bounce9':VisuMZ[_0x9d1216(0x360)]['Settings']['Bounce'][_0x9d1216(0x33a)]},VisuMZ['UniqueTileEffects']['Game_Map_setupEvents']=Game_Map[_0x9d1216(0x1d6)][_0x9d1216(0x2a4)],Game_Map['prototype'][_0x9d1216(0x2a4)]=function(){const _0x25463f=_0x9d1216;this[_0x25463f(0x2a9)](),VisuMZ[_0x25463f(0x360)][_0x25463f(0x334)]['call'](this);},Game_Map[_0x9d1216(0x1d6)][_0x9d1216(0x2a9)]=function(){const _0x2ff7c5=_0x9d1216;this[_0x2ff7c5(0x303)](),this[_0x2ff7c5(0x2ff)]();},Game_Map[_0x9d1216(0x1d6)][_0x9d1216(0x303)]=function(){const _0x5b4bb7=_0x9d1216,_0x1fe0fd=VisuMZ[_0x5b4bb7(0x360)][_0x5b4bb7(0x3a7)](!![]);this[_0x5b4bb7(0x230)]={};for(const _0x58a4e8 of _0x1fe0fd){if(_0x5b4bb7(0x2cd)!==_0x5b4bb7(0x388)){this[_0x5b4bb7(0x230)][_0x58a4e8]={'regions':[],'terrainTags':[]};if(Game_Map[_0x5b4bb7(0x27d)][_0x58a4e8]){if(_0x5b4bb7(0x1d5)===_0x5b4bb7(0x3b0)){if(!_0x599c9a){if(this[_0x5b4bb7(0x394)]())return;}this['_lastSafestCoordinate']={'x':this['x'],'y':this['y'],'d':this[_0x5b4bb7(0x2f9)]()};}else this['_uniqueTileData'][_0x58a4e8][_0x5b4bb7(0x2a0)]=Game_Map[_0x5b4bb7(0x27d)][_0x58a4e8][_0x5b4bb7(0x384)]();}}else{if(_0x1d6169[_0x5b4bb7(0x1f9)](this['x'],this['y'],_0x1f5e71))return![];return!![];}}this['_uniqueTileXyType']={},this['_uniqueTileTransfer']={};},Game_Map[_0x9d1216(0x1d6)][_0x9d1216(0x2ff)]=function(){const _0x1f7a4f=_0x9d1216,_0x41981b=VisuMZ[_0x1f7a4f(0x360)]['RegExp'],_0x2a2cbd=$dataMap?$dataMap['note']||'':'',_0x5d8149=this[_0x1f7a4f(0x1c2)]()?this[_0x1f7a4f(0x1c2)]()[_0x1f7a4f(0x364)]||'':'',_0x462ce9=VisuMZ[_0x1f7a4f(0x360)][_0x1f7a4f(0x3a7)](!![]);for(const _0x237e43 of _0x462ce9){if(!_0x41981b[_0x237e43])continue;if(_0x41981b[_0x237e43][_0x1f7a4f(0x2a0)]&&_0x2a2cbd[_0x1f7a4f(0x2ea)](_0x41981b[_0x237e43]['regions'])){if('uOVPm'!==_0x1f7a4f(0x1f2)){if(_0x281e19[_0x1f7a4f(0x279)]())return![];if(_0x4332bb[_0x1f7a4f(0x1bb)]())return![];}else this[_0x1f7a4f(0x230)][_0x237e43][_0x1f7a4f(0x2a0)]=RegExp['$1'][_0x1f7a4f(0x3ac)](',')['map'](_0x25940b=>Number(_0x25940b)['clamp'](0x1,0xff));}_0x41981b[_0x237e43][_0x1f7a4f(0x318)]&&_0x5d8149[_0x1f7a4f(0x2ea)](_0x41981b[_0x237e43][_0x1f7a4f(0x318)])&&(this['_uniqueTileData'][_0x237e43][_0x1f7a4f(0x318)]=RegExp['$1'][_0x1f7a4f(0x3ac)](',')[_0x1f7a4f(0x212)](_0x5cdedf=>Number(_0x5cdedf)[_0x1f7a4f(0x2dc)](0x1,0x7)));if(_0x41981b[_0x237e43][_0x1f7a4f(0x284)]&&_0x2a2cbd[_0x1f7a4f(0x2ea)](_0x41981b[_0x237e43][_0x1f7a4f(0x284)])){const _0x345936=RegExp['$1'][_0x1f7a4f(0x3ac)](',')[_0x1f7a4f(0x212)](_0x584034=>Number(_0x584034)||0x0);this[_0x1f7a4f(0x2c5)][_0x237e43]=_0x345936;}}},Game_Map[_0x9d1216(0x1d6)][_0x9d1216(0x22d)]=function(_0x222267){const _0x5ec5b1=_0x9d1216;if(this[_0x5ec5b1(0x230)]===undefined)this[_0x5ec5b1(0x2a9)]();return this[_0x5ec5b1(0x230)][_0x222267]||{};},Game_Map[_0x9d1216(0x1d6)][_0x9d1216(0x1ba)]=function(_0x3dea25){const _0x370b33=_0x9d1216;return this[_0x370b33(0x22d)](_0x3dea25)[_0x370b33(0x2a0)]||[];},Game_Map[_0x9d1216(0x1d6)]['getUniqueTileTerrainTags']=function(_0x3f1e79){const _0x28170f=_0x9d1216;return this[_0x28170f(0x22d)](_0x3f1e79)['terrainTags']||[];},Game_Map[_0x9d1216(0x1d6)]['getUniqueTileXyType']=function(_0x58d84f,_0xdcf33d,_0x240a05){const _0x1583a7=_0x9d1216;if(this['isSwimmingTile'](_0x58d84f,_0xdcf33d))return _0x1583a7(0x2a5);const _0x2bc0ae=[_0x58d84f,_0xdcf33d];if(this[_0x1583a7(0x2ed)][_0x2bc0ae]!==undefined){const _0x5bd424=this['_uniqueTileXyType'][_0x2bc0ae];if(!_0x240a05&&[_0x1583a7(0x215),'left',_0x1583a7(0x2bf),'up'][_0x1583a7(0x245)](_0x5bd424))return _0x1583a7(0x220);if(!_0x240a05&&[_0x1583a7(0x1ab),_0x1583a7(0x2cb),'bounce3',_0x1583a7(0x23c),_0x1583a7(0x1e2)][_0x1583a7(0x245)](_0x5bd424))return _0x1583a7(0x310);if(!_0x240a05&&[_0x1583a7(0x2cf),_0x1583a7(0x37f),_0x1583a7(0x26e),_0x1583a7(0x362)]['includes'](_0x5bd424))return _0x1583a7(0x310);return _0x5bd424;}this[_0x1583a7(0x2ed)][_0x2bc0ae]=_0x1583a7(0x29b);const _0x5ac907=this[_0x1583a7(0x1fa)](_0x58d84f,_0xdcf33d),_0x491f00=this[_0x1583a7(0x2d2)](_0x58d84f,_0xdcf33d),_0x293adc=VisuMZ[_0x1583a7(0x360)][_0x1583a7(0x3a7)](!![]);for(const _0x12d3dd of _0x293adc){const _0x232d86=this[_0x1583a7(0x1ba)](_0x12d3dd);if(_0x232d86[_0x1583a7(0x245)](_0x5ac907)){this['_uniqueTileXyType'][_0x2bc0ae]=_0x12d3dd;break;}if(this['_uniqueTileXyType'][_0x2bc0ae]!=='none')break;const _0x305874=this[_0x1583a7(0x2e6)](_0x12d3dd);if(_0x305874['includes'](_0x491f00)){if(_0x1583a7(0x282)==='JXFRW'){this['_uniqueTileXyType'][_0x2bc0ae]=_0x12d3dd;break;}else return this[_0x1583a7(0x358)][_0x1583a7(0x3a3)]();}if(this[_0x1583a7(0x2ed)][_0x2bc0ae]!==_0x1583a7(0x29b))break;}if(!_0x240a05&&['down',_0x1583a7(0x1be),_0x1583a7(0x2bf),'up']['includes'](this[_0x1583a7(0x2ed)][_0x2bc0ae]))return _0x1583a7(0x220);if(!_0x240a05&&[_0x1583a7(0x1ab),_0x1583a7(0x2cb),'bounce3','bounce4',_0x1583a7(0x1e2),_0x1583a7(0x2cf),_0x1583a7(0x37f),'bounce8','bounce9']['includes'](this[_0x1583a7(0x2ed)][_0x2bc0ae]))return'bounce';return this['_uniqueTileXyType'][_0x2bc0ae];},Game_Map[_0x9d1216(0x1d6)]['isUniqueTile']=function(_0x335540,_0xd6aac0){const _0x48c47e=_0x9d1216;return this[_0x48c47e(0x2d5)](_0x335540,_0xd6aac0,![])!=='none';},Game_Map[_0x9d1216(0x1d6)][_0x9d1216(0x28d)]=function(_0xf72b18,_0x38fa1b,_0x2f33d7){const _0x268a32=_0x9d1216;return this[_0x268a32(0x2d5)](_0xf72b18,_0x38fa1b,![])===_0x2f33d7;},Game_Map['prototype'][_0x9d1216(0x1c9)]=function(_0x24b8fb,_0x120b2a){const _0x35caad=_0x9d1216;return this[_0x35caad(0x2e1)](_0x24b8fb,_0x120b2a)&&!this['hasBelowPriorityEventsXy'](_0x24b8fb,_0x120b2a);},Game_Map['prototype'][_0x9d1216(0x1b2)]=function(_0x78aee7,_0x18768a){const _0x17cfaf=_0x9d1216;this[_0x17cfaf(0x33f)]=!![];let _0xb51149=![];if(this[_0x17cfaf(0x29f)](_0x78aee7,_0x18768a,0x2))_0xb51149=!![];if(this[_0x17cfaf(0x29f)](_0x78aee7,_0x18768a,0x4))_0xb51149=!![];if(this['isPassable'](_0x78aee7,_0x18768a,0x6))_0xb51149=!![];if(this[_0x17cfaf(0x29f)](_0x78aee7,_0x18768a,0x8))_0xb51149=!![];return this[_0x17cfaf(0x33f)]=![],_0xb51149;},Game_Map[_0x9d1216(0x1d6)][_0x9d1216(0x2c6)]=function(_0x4fcb6f,_0x2bad45){const _0x5bdb79=_0x9d1216,_0x538e2b=this[_0x5bdb79(0x366)](_0x4fcb6f,_0x2bad45)['filter'](_0x2695c8=>_0x2695c8&&!_0x2695c8[_0x5bdb79(0x21e)]&&_0x2695c8[_0x5bdb79(0x3a4)]===0x0&&(_0x2695c8['characterName']()!==''||_0x2695c8[_0x5bdb79(0x25a)]()>0x0));return _0x538e2b[_0x5bdb79(0x24b)]>0x0;},Game_Map[_0x9d1216(0x1d6)]['isSwimmingTile']=function(_0x56b263,_0x954e1f){const _0x32d8ca=_0x9d1216;return this['checkPassageNoEvents'](_0x56b263,_0x954e1f,0x200)||this[_0x32d8ca(0x26b)](_0x56b263,_0x954e1f,0x400);},Game_Map[_0x9d1216(0x1d6)]['isSwimmingTileWithBridge']=function(_0x1540a0,_0x1f1adb){const _0x36ee09=_0x9d1216;return this['isSwimmingTile'](_0x1540a0,_0x1f1adb)&&this[_0x36ee09(0x2c6)](_0x1540a0,_0x1f1adb);},Game_Map['prototype'][_0x9d1216(0x24d)]=function(_0x4a36be,_0x388bb3){const _0x817048=_0x9d1216;return this[_0x817048(0x240)](_0x4a36be,_0x388bb3)&&!this[_0x817048(0x2c6)](_0x4a36be,_0x388bb3);},Game_Map[_0x9d1216(0x1d6)][_0x9d1216(0x26b)]=function(_0x191774,_0x265b46,_0x2f09da){const _0x4b2994=_0x9d1216,_0x1b2a5c=this[_0x4b2994(0x271)](),_0x22a073=this['layeredTiles'](_0x191774,_0x265b46);for(const _0x3ddcbf of _0x22a073){if('JXgVI'===_0x4b2994(0x30b)){_0x116e2a[_0x4b2994(0x2a2)](_0x53d7ec,_0x559248);const _0x2a82ab=_0x466568[_0x4b2994(0x36d)];_0xa73895['setImmuneToUniqueTileType']('shock',_0x2a82ab);}else{const _0x51c989=_0x1b2a5c[_0x3ddcbf];if(_0x51c989===undefined||_0x51c989===null){if(this[_0x4b2994(0x2c2)]()){if(_0x4b2994(0x33c)!==_0x4b2994(0x33c))this[_0x4b2994(0x217)]=_0x2f0733;else{let _0x58f8ec=_0x4b2994(0x2c0)+'\x0a';_0x58f8ec+='Click\x20\x22Copy\x20Page\x22\x20from\x20another\x20tileset\x27s\x20pages'+'\x0a',_0x58f8ec+='and\x20add\x20it\x20onto\x20this\x20one.',alert(_0x58f8ec),this[_0x4b2994(0x1f4)]=!![],SceneManager[_0x4b2994(0x1f7)]();}}}if((_0x51c989&0x10)!==0x0){if(_0x4b2994(0x350)!==_0x4b2994(0x350)){if(_0x22a70c[_0x4b2994(0x273)]())return![];if(this['_erased'])return'none';return _0x1796b3['getUniqueTileXyType'](this['x'],this['y'],![]);}else continue;}if((_0x51c989&_0x2f09da)===0x0)return _0x4b2994(0x29d)===_0x4b2994(0x20d)?![]:!![];if((_0x51c989&_0x2f09da)===_0x2f09da)return![];}}return![];},Game_Map[_0x9d1216(0x1d6)]['checkPassageNoEventsErrorValid']=function(){const _0x1f3732=_0x9d1216;if(this['_flagErrorShown'])return![];if(!$gameTemp[_0x1f3732(0x325)]())return![];if(DataManager[_0x1f3732(0x273)]())return![];if(Imported[_0x1f3732(0x382)]){if(SceneManager[_0x1f3732(0x2c4)][_0x1f3732(0x1a5)]===Scene_EventedTitleMap)return![];}return!![];},Game_CharacterBase['UNIQUE_TILE_MOVE_SPEED']={'slippery':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x275)][_0x9d1216(0x1dc)]??0x4,'forceMove':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x232)][_0x9d1216(0x1dc)]??0x6,'swimming':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x1d3)][_0x9d1216(0x1dc)]??0x4,'quicksand':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x2a7)][_0x9d1216(0x1dc)]??0x3},Game_CharacterBase[_0x9d1216(0x37d)]={'slippery':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x275)][_0x9d1216(0x369)]??0x2,'forceMove':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x232)][_0x9d1216(0x369)]??0x2},Game_CharacterBase[_0x9d1216(0x2ce)]=VisuMZ[_0x9d1216(0x360)]['Settings']['Swimming'][_0x9d1216(0x2c7)]??!![],Game_CharacterBase[_0x9d1216(0x2c8)]=VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x1d3)]['SwimmingDepth']??0x10,Game_CharacterBase[_0x9d1216(0x1fc)]=VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)]['Quicksand']['StepsSandSink']??0xa,Game_CharacterBase[_0x9d1216(0x2ac)]={'id':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)]['AnimationID']??0x7d,'mirror':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)]['AnimationMirror']??![],'mute':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)][_0x9d1216(0x244)]??!![]},Game_CharacterBase['LAVA_DELAY']=VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)]['Lava'][_0x9d1216(0x308)]??0x14,Game_CharacterBase[_0x9d1216(0x263)]=VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)][_0x9d1216(0x308)]??0x6,Game_CharacterBase['SHOCK_ANIMATION']={'id':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x30e)][_0x9d1216(0x2ad)]??0x4d,'mirror':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x30e)][_0x9d1216(0x395)]??![],'mute':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x30e)][_0x9d1216(0x244)]??!![]},Game_CharacterBase[_0x9d1216(0x2af)]=VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x30e)]['ShockTimer']??0x3c,VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x2fc)]=Game_CharacterBase['prototype']['initMembers'],Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x266)]=function(){const _0xeb0393=_0x9d1216;VisuMZ[_0xeb0393(0x360)][_0xeb0393(0x2fc)]['call'](this),this[_0xeb0393(0x2a9)]();},Game_CharacterBase['prototype']['setupUniqueTileData']=function(){const _0x283b78=_0x9d1216;this[_0x283b78(0x204)]={},this[_0x283b78(0x1e9)]=-0x1,this['_uniqueTilePattern']=-0x1,this[_0x283b78(0x2fa)]=0x0;},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x1cc)]=function(){const _0x1f4a52=_0x9d1216;if(DataManager[_0x1f4a52(0x273)]())return![];if(this[_0x1f4a52(0x21e)])return![];return $gameMap[_0x1f4a52(0x2e1)](this['x'],this['y']);},Game_Vehicle[_0x9d1216(0x1d6)][_0x9d1216(0x1cc)]=function(){return![];},Game_CharacterBase[_0x9d1216(0x1d6)]['getUniqueTileType']=function(){const _0x528a82=_0x9d1216;if(DataManager['isEventTest']())return![];if(this[_0x528a82(0x21e)])return'none';return $gameMap[_0x528a82(0x2d5)](this['x'],this['y'],![]);},Game_Vehicle['prototype']['getUniqueTileType']=function(){const _0x3cd75d=_0x9d1216;return _0x3cd75d(0x29b);},Game_CharacterBase['prototype'][_0x9d1216(0x236)]=function(_0x5dea06,_0x20ebf1){const _0x1d72a9=_0x9d1216;if(this[_0x1d72a9(0x204)]===undefined)this['setupUniqueTileData']();this[_0x1d72a9(0x204)][_0x5dea06]=_0x20ebf1,this['refresh']();},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x36f)]=function(_0x12dbf2){const _0x22bae3=_0x9d1216;if(_0x12dbf2===_0x22bae3(0x29b))return![];if(this[_0x22bae3(0x21e)])return![];if(this[_0x22bae3(0x204)]===undefined)this[_0x22bae3(0x2a9)]();return this[_0x22bae3(0x204)][_0x12dbf2];},Game_Player['prototype']['isUniqueTileAffected']=function(_0x365e46){const _0x483d36=_0x9d1216;if(_0x365e46===_0x483d36(0x29b))return![];if(this[_0x483d36(0x203)](_0x365e46)){if(_0x365e46===_0x483d36(0x2a5))return!![];return![];}if(_0x365e46===_0x483d36(0x2a5)){if(_0x483d36(0x1ce)!==_0x483d36(0x33b))return Game_CharacterBase['PLAYER_CAN_DROWN'];else{if(_0x1d9150['isAllDead']())return;this[_0x483d36(0x2da)]=_0x1de8a4['PITFALL_DURATION'],this['_pitfallData']={'scaleX':this[_0x483d36(0x339)]['x'],'scaleY':this[_0x483d36(0x339)]['y'],'shadowScaleX':this[_0x483d36(0x302)]?this[_0x483d36(0x302)][_0x483d36(0x339)]['x']:0x0,'shadowScaleY':this[_0x483d36(0x302)]?this[_0x483d36(0x302)][_0x483d36(0x339)]['y']:0x0};}}return!![];},Game_Follower[_0x9d1216(0x1d6)][_0x9d1216(0x36f)]=function(_0x2c728c){const _0x4af2c5=_0x9d1216;return $gamePlayer[_0x4af2c5(0x36f)](_0x2c728c);},Game_CharacterBase['prototype'][_0x9d1216(0x37b)]=function(){const _0x491820=_0x9d1216;if(this[_0x491820(0x21e)])return![];const _0x4a0979=this[_0x491820(0x258)]();if(_0x4a0979===_0x491820(0x29b))return![];return this[_0x491820(0x36f)](_0x4a0979);},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x2d3)]=function(){const _0x355a56=_0x9d1216;this[_0x355a56(0x1e9)]=-0x1,this[_0x355a56(0x288)]=-0x1;},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x2a1)]=function(){const _0x1c78c3=_0x9d1216;this[_0x1c78c3(0x2d3)]();if(!this['isOnUniqueTile']())return;if($gameMap[_0x1c78c3(0x2c6)](this['x'],this['y']))return;if(this[_0x1c78c3(0x21e)])return;if(this[_0x1c78c3(0x37b)]()){const _0x4af6a1=this[_0x1c78c3(0x258)]();this['_uniqueTileMoveSpeed']=Game_CharacterBase[_0x1c78c3(0x276)][_0x4af6a1]??-0x1,this[_0x1c78c3(0x288)]=Game_CharacterBase['UNIQUE_TILE_PATTERN'][_0x4af6a1]??-0x1;}},VisuMZ[_0x9d1216(0x360)]['Game_CharacterBase_realMoveSpeed']=Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x2ba)],Game_CharacterBase['prototype'][_0x9d1216(0x2ba)]=function(){const _0x48ff7a=_0x9d1216;if(!this[_0x48ff7a(0x2ca)]()){if(this['_uniqueTileMoveSpeed']===undefined)this[_0x48ff7a(0x2a1)]();if(this[_0x48ff7a(0x1e9)]>0x0)return this[_0x48ff7a(0x1e9)];}return VisuMZ[_0x48ff7a(0x360)]['Game_CharacterBase_realMoveSpeed'][_0x48ff7a(0x25d)](this);},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x1c8)]=Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x1d4)],Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x1d4)]=function(){const _0x53d45a=_0x9d1216;if(!this[_0x53d45a(0x2ca)]()){if(this['_walkAnime']&&!this['_stepAnime']){if(_0x53d45a(0x2dd)!==_0x53d45a(0x2fe)){if(this[_0x53d45a(0x288)]===undefined)this[_0x53d45a(0x2a1)]();if(this[_0x53d45a(0x288)]>-0x1)return this[_0x53d45a(0x288)];}else{this['_followers']['onDrowningDead']();return;}}}return VisuMZ[_0x53d45a(0x360)][_0x53d45a(0x1c8)][_0x53d45a(0x25d)](this);},VisuMZ['UniqueTileEffects'][_0x9d1216(0x383)]=Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x253)],Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x253)]=function(){const _0x5c2f22=_0x9d1216;if(this[_0x5c2f22(0x202)]())return![];return VisuMZ[_0x5c2f22(0x360)][_0x5c2f22(0x383)]['call'](this);},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x202)]=function(){const _0x576425=_0x9d1216;if(this[_0x576425(0x2ca)]())return![];if($gameMap['checkUniqueTileType'](this['x'],this['y'],_0x576425(0x1b6)))return![];if($gameMap[_0x576425(0x28d)](this['x'],this['y'],_0x576425(0x310)))return![];if($gameMap[_0x576425(0x2c6)](this['x'],this['y']))return![];return this[_0x576425(0x37b)]();},VisuMZ['UniqueTileEffects'][_0x9d1216(0x1e1)]=Game_CharacterBase['prototype']['locate'],Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x320)]=function(_0x323cab,_0x53314e){const _0x5cd86a=_0x9d1216;VisuMZ[_0x5cd86a(0x360)][_0x5cd86a(0x1e1)]['call'](this,_0x323cab,_0x53314e),this[_0x5cd86a(0x2a1)](),this[_0x5cd86a(0x3ad)](0x1),this['_tempSlipperyTileStop']=!![];},VisuMZ[_0x9d1216(0x360)]['Game_CharacterBase_moveStraight']=Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x330)],Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x330)]=function(_0x35357d){const _0x1caf49=_0x9d1216;if(this===$gamePlayer)this[_0x1caf49(0x32e)]();VisuMZ['UniqueTileEffects']['Game_CharacterBase_moveStraight'][_0x1caf49(0x25d)](this,_0x35357d),this[_0x1caf49(0x2a1)]();if(this[_0x1caf49(0x307)]())this[_0x1caf49(0x3ad)](0x1);this[_0x1caf49(0x34e)]=_0x35357d,this[_0x1caf49(0x1a6)]=![];},VisuMZ['UniqueTileEffects']['Game_CharacterBase_moveDiagonally']=Game_CharacterBase['prototype']['moveDiagonally'],Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x3af)]=function(_0x195df3,_0x21ae46){const _0x1c7203=_0x9d1216;if(this===$gamePlayer)this[_0x1c7203(0x32e)]();VisuMZ[_0x1c7203(0x360)][_0x1c7203(0x2a8)]['call'](this,_0x195df3,_0x21ae46),this[_0x1c7203(0x2a1)](),this[_0x1c7203(0x3ad)](0x2),this[_0x1c7203(0x1a6)]=![];},VisuMZ[_0x9d1216(0x360)]['Game_CharacterBase_jump']=Game_CharacterBase['prototype'][_0x9d1216(0x2d1)],Game_CharacterBase[_0x9d1216(0x1d6)]['jump']=function(_0x53dc65,_0x433545){const _0x45ebc7=_0x9d1216;VisuMZ[_0x45ebc7(0x360)][_0x45ebc7(0x328)][_0x45ebc7(0x25d)](this,_0x53dc65,_0x433545),this[_0x45ebc7(0x2a1)](),this[_0x45ebc7(0x34e)]=this[_0x45ebc7(0x2f9)](),this[_0x45ebc7(0x1a6)]=![];},VisuMZ['UniqueTileEffects']['Game_CharacterBase_isStopping']=Game_CharacterBase[_0x9d1216(0x1d6)]['isStopping'],Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x20b)]=function(){const _0x3f57d1=_0x9d1216;if(this[_0x3f57d1(0x38f)])return!![];if(this['_isDrowning'])return!![];return VisuMZ['UniqueTileEffects']['Game_CharacterBase_isStopping']['call'](this);},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x347)]=Game_Player['prototype'][_0x9d1216(0x1e3)],Game_Player[_0x9d1216(0x1d6)]['moveByInput']=function(){const _0x2e9e72=_0x9d1216;if(this[_0x2e9e72(0x38f)])return;if(this[_0x2e9e72(0x27e)])return;if(this[_0x2e9e72(0x222)]!==undefined&&this[_0x2e9e72(0x222)]-->0x0)return;VisuMZ[_0x2e9e72(0x360)]['Game_Player_moveByInput'][_0x2e9e72(0x25d)](this);},Game_CharacterBase[_0x9d1216(0x1d6)]['doesCurrentTileHaveUniqueFootstepSfx']=function(){const _0x24e029=_0x9d1216;if($gameMap[_0x24e029(0x2c6)](this['x'],this['y']))return![];if(this[_0x24e029(0x37b)]()){const _0x709c05=this[_0x24e029(0x258)]();if(SoundManager[_0x24e029(0x25b)][_0x709c05]['footstep']&&SoundManager['UNIQUE_TILE_SFX'][_0x709c05][_0x24e029(0x336)][_0x24e029(0x249)])return!![];}return![];},VisuMZ['UniqueTileEffects']['Game_CharacterBase_canMakeFootstepSounds']=Game_CharacterBase[_0x9d1216(0x1d6)]['canMakeFootstepSounds'],Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x1f6)]=function(){const _0x50fcfe=_0x9d1216;if(this['doesCurrentTileHaveUniqueFootstepSfx']())return![];if(this[_0x50fcfe(0x21e)])return![];return VisuMZ[_0x50fcfe(0x360)][_0x50fcfe(0x39e)]['call'](this);},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x396)]=Game_CharacterBase['prototype'][_0x9d1216(0x2f1)],Game_CharacterBase[_0x9d1216(0x1d6)]['increaseSteps']=function(){const _0x191e9d=_0x9d1216;VisuMZ[_0x191e9d(0x360)][_0x191e9d(0x396)]['call'](this),this[_0x191e9d(0x352)]();},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x2d4)]=Game_CharacterBase['prototype'][_0x9d1216(0x1d0)],Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x1d0)]=function(){const _0x39255e=_0x9d1216;VisuMZ[_0x39255e(0x360)][_0x39255e(0x2d4)][_0x39255e(0x25d)](this),this['_jumpCount']===0x0&&this[_0x39255e(0x1ec)]()&&this[_0x39255e(0x389)]();},Game_CharacterBase[_0x9d1216(0x1d6)]['increaseStepsUniqueTileEffects']=function(){const _0xa23762=_0x9d1216;this[_0xa23762(0x1ec)]()&&this[_0xa23762(0x389)](),this===$gamePlayer&&this[_0xa23762(0x257)]()&&this[_0xa23762(0x238)]();},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x1ec)]=function(){const _0x497473=_0x9d1216;if(!Imported[_0x497473(0x35e)])return![];if(!$gameSystem[_0x497473(0x1f6)]())return![];if(this['constructor']===Game_Follower&&!this['isVisible']())return![];if(!this[_0x497473(0x1cc)]())return![];if(!this[_0x497473(0x37b)]())return![];if(!this[_0x497473(0x392)]())return![];return!![];},Game_CharacterBase['prototype']['makeUniqueTileFootstepSounds']=function(){const _0x57ffb3=_0x9d1216,_0x24c18a=this[_0x57ffb3(0x258)]();SoundManager[_0x57ffb3(0x363)](_0x24c18a,_0x57ffb3(0x336),this);},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x257)]=function(){const _0x32f8ef=_0x9d1216;if(this[_0x32f8ef(0x2ca)]())return![];if(this[_0x32f8ef(0x37c)]()){if(_0x32f8ef(0x2aa)===_0x32f8ef(0x1b4))return![];else{if(this[_0x32f8ef(0x343)]())return this[_0x32f8ef(0x209)]();if(!this[_0x32f8ef(0x343)]()&&this[_0x32f8ef(0x32a)]())return!![];}}const _0xe15d41=this['getLastUniqueTileCoordinate'](),_0x4ff5ab=$gameMap[_0x32f8ef(0x2d5)](_0xe15d41['x'],_0xe15d41['y']),_0x130012=this[_0x32f8ef(0x36f)](_0x4ff5ab),_0x58b965=$gameMap[_0x32f8ef(0x2c6)](_0xe15d41['x'],_0xe15d41['y']);if(!this[_0x32f8ef(0x37b)]()||$gameMap[_0x32f8ef(0x2c6)](this['x'],this['y'])){if('CneGM'===_0x32f8ef(0x368)){if(!_0x1fc97e['checkUniqueTileType'](_0x104fb7,_0x5678ab,_0x32f8ef(0x2a5))){if(_0x2f5888[_0x32f8ef(0x1f9)](_0x46e51c,_0x251639,this[_0x32f8ef(0x3ae)](_0x14d09e)))return![];if(_0x414211[_0x32f8ef(0x1b2)](_0x22d171,_0x444056))return!![];if(!_0x49cae3[_0x32f8ef(0x360)][_0x32f8ef(0x2b1)][_0x32f8ef(0x25d)](this,_0x16f0b6,_0x1bcff5,_0x21d78b))return![];}if(!_0x3ab450[_0x32f8ef(0x2c6)](this['x'],this['y']))return this[_0x32f8ef(0x37c)]();}else return _0x130012&&!_0x58b965;}return![];},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x32a)]=function(){const _0x4327ce=_0x9d1216;return this[_0x4327ce(0x237)][_0x4327ce(0x357)]()[_0x4327ce(0x1dd)](_0x55208e=>_0x55208e['isSwimming']());},Game_Player['prototype'][_0x9d1216(0x209)]=function(){const _0x50d648=_0x9d1216;return this[_0x50d648(0x237)][_0x50d648(0x357)]()['some'](_0x5e21f2=>!_0x5e21f2[_0x50d648(0x343)]());},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x2b1)]=Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x311)],Game_CharacterBase['prototype'][_0x9d1216(0x311)]=function(_0x40660a,_0x5eb20e,_0x470b05){const _0x3af7d2=_0x9d1216;if(this[_0x3af7d2(0x259)]){const _0x286df=$gameMap[_0x3af7d2(0x1d9)](_0x40660a,_0x470b05),_0x348eb6=$gameMap[_0x3af7d2(0x23b)](_0x5eb20e,_0x470b05),_0x538766=$gameMap[_0x3af7d2(0x2d5)](_0x286df,_0x348eb6,![]);if(this['isUniqueTileAvoided'](_0x538766))return![];}if(this['isUniqueTileAffected'](_0x3af7d2(0x1b6))){if('HxCiH'!==_0x3af7d2(0x38b))_0x951aac[_0x3af7d2(0x360)]['Game_CharacterBase_jump'][_0x3af7d2(0x25d)](this,_0x4f4245,_0x35084a),this[_0x3af7d2(0x2a1)](),this[_0x3af7d2(0x34e)]=this['direction'](),this[_0x3af7d2(0x1a6)]=![];else{if($gameMap['checkUniqueTileType'](this['x'],this['y'],_0x3af7d2(0x1b6))){if('dDxmf'==='JCaAB')this['_quicksandSteps']=0x0;else{if(!$gameMap[_0x3af7d2(0x2c6)](this['x'],this['y'])){if(_0x3af7d2(0x291)===_0x3af7d2(0x375)){_0x146bae[_0x3af7d2(0x1e4)]();if(_0x116836[_0x3af7d2(0x335)]()){this[_0x3af7d2(0x237)][_0x3af7d2(0x1b7)]();return;}_0x16f357[_0x3af7d2(0x1d6)][_0x3af7d2(0x1ef)][_0x3af7d2(0x25d)](this);if(this[_0x3af7d2(0x255)](_0x3af7d2(0x1b6)))return;this['gotoLastSafestCoordinate'](),this['_followers'][_0x3af7d2(0x1ef)]();if(_0x458c2c[_0x3af7d2(0x2f2)]()){const _0x19ae33=_0x5eb31e[_0x3af7d2(0x242)][_0x3af7d2(0x267)][_0x3af7d2(0x285)](this);if(_0x19ae33)_0x19ae33[_0x3af7d2(0x1a4)]();}}else return![];}}}const _0x11b717=$gameMap[_0x3af7d2(0x1d9)](_0x40660a,_0x470b05),_0x408c56=$gameMap[_0x3af7d2(0x23b)](_0x5eb20e,_0x470b05);if($gameMap[_0x3af7d2(0x28d)](_0x11b717,_0x408c56,_0x3af7d2(0x1b6))){if(_0x3af7d2(0x2ec)!==_0x3af7d2(0x2ec)){_0x89a649['ConvertParams'](_0x2a59e9,_0x20cc50);const _0x421dea=_0xc524f5['Setting'];_0x3c39b5[_0x3af7d2(0x260)](_0x3af7d2(0x1f5),_0x421dea);}else return!![];}}}if(this[_0x3af7d2(0x36f)](_0x3af7d2(0x2a5))){const _0x1f4826=$gameMap[_0x3af7d2(0x1d9)](_0x40660a,_0x470b05),_0x2e031e=$gameMap['roundYWithDirection'](_0x5eb20e,_0x470b05);if($gameMap['checkUniqueTileType'](this['x'],this['y'],'swimming')){if(!$gameMap[_0x3af7d2(0x28d)](_0x1f4826,_0x2e031e,_0x3af7d2(0x2a5))){if(_0x3af7d2(0x309)===_0x3af7d2(0x309)){if($gameMap[_0x3af7d2(0x1f9)](_0x1f4826,_0x2e031e,this[_0x3af7d2(0x3ae)](_0x470b05)))return![];if($gameMap[_0x3af7d2(0x1b2)](_0x1f4826,_0x2e031e))return!![];if(!VisuMZ['UniqueTileEffects']['Game_CharacterBase_isMapPassable']['call'](this,_0x40660a,_0x5eb20e,_0x470b05))return![];}else this[_0x3af7d2(0x2fa)]+=_0x1ef32e,this['_quicksandSteps']>=_0x5bbae0[_0x3af7d2(0x1fc)]&&this[_0x3af7d2(0x28f)]();}if(!$gameMap[_0x3af7d2(0x2c6)](this['x'],this['y']))return this[_0x3af7d2(0x37c)]();}if($gameMap[_0x3af7d2(0x28d)](_0x1f4826,_0x2e031e,_0x3af7d2(0x2a5))){if($gameMap[_0x3af7d2(0x1f9)](this['x'],this['y'],_0x470b05))return![];return!![];}}return VisuMZ[_0x3af7d2(0x360)][_0x3af7d2(0x2b1)]['call'](this,_0x40660a,_0x5eb20e,_0x470b05);},Game_Map[_0x9d1216(0x1d6)][_0x9d1216(0x1f9)]=function(_0x270808,_0x4d830b,_0x51c0bc){const _0x550fbb=_0x9d1216,_0x3314aa=this[_0x550fbb(0x271)](),_0x469e87=this[_0x550fbb(0x272)](_0x270808,_0x4d830b);for(const _0x271fab of _0x469e87){if(_0x550fbb(0x28a)==='zKfQq'){_0x436a83[_0x550fbb(0x2a2)](_0x5bfe58,_0x5ddf57);const _0x45c04a=_0x1a52ea[_0x550fbb(0x36d)];_0x1d1b10[_0x550fbb(0x260)](_0x550fbb(0x31f),_0x45c04a);}else{const _0x19ecbe=_0x3314aa[_0x271fab];if([0x1,0x2,0x3][_0x550fbb(0x245)](_0x51c0bc)&&_0x19ecbe===0x601)return!![];if([0x4,0x1,0x2][_0x550fbb(0x245)](_0x51c0bc)&&_0x19ecbe===0x603)return!![];if([0x2,0x3,0x6][_0x550fbb(0x245)](_0x51c0bc)&&_0x19ecbe===0x605)return!![];if([0x7,0x4,0x3][_0x550fbb(0x245)](_0x51c0bc)&&_0x19ecbe===0x602)return!![];if([0x9,0x6,0x3][_0x550fbb(0x245)](_0x51c0bc)&&_0x19ecbe===0x604)return!![];if([0x7,0x8,0x9][_0x550fbb(0x245)](_0x51c0bc)&&_0x19ecbe===0x608)return!![];if([0x4,0x7,0x8][_0x550fbb(0x245)](_0x51c0bc)&&_0x19ecbe===0x60a)return!![];if([0x8,0x9,0x6][_0x550fbb(0x245)](_0x51c0bc)&&_0x19ecbe===0x60c)return!![];}}return![];},VisuMZ[_0x9d1216(0x360)]['Game_CharacterBase_update']=Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x22c)],Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x22c)]=function(){const _0x1559bd=_0x9d1216;VisuMZ[_0x1559bd(0x360)][_0x1559bd(0x25c)][_0x1559bd(0x25d)](this);if(this['canUpdateUniqueTileEffects']())this[_0x1559bd(0x287)]();if(this[_0x1559bd(0x2e8)]())this[_0x1559bd(0x227)]();},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x379)]=function(){const _0x21ee43=_0x9d1216;if(this[_0x21ee43(0x1db)]())return![];if(this[_0x21ee43(0x290)]())return![];if(this[_0x21ee43(0x2ca)]())return![];if(this[_0x21ee43(0x21e)])return![];if(this===$gamePlayer){if('SJwnI'==='XWZOG')return![];else{if($gamePlayer[_0x21ee43(0x279)]())return![];if($gamePlayer[_0x21ee43(0x1bb)]())return![];}}if(this[_0x21ee43(0x1a5)]===Game_Follower&&$gamePlayer[_0x21ee43(0x2ca)]())return![];if(!this[_0x21ee43(0x37b)]())return![];if($gameMap[_0x21ee43(0x2c6)](this['x'],this['y']))return![];return!![];},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x287)]=function(){const _0x3f9e99=_0x9d1216,_0xc09e67=this[_0x3f9e99(0x258)]();this[_0x3f9e99(0x1ee)](_0xc09e67);},Game_CharacterBase[_0x9d1216(0x1d6)]['processUniqueTileEffect']=function(_0x1e6de7){const _0x5d771f=_0x9d1216;switch(_0x1e6de7){case _0x5d771f(0x251):this[_0x5d771f(0x35b)]();break;case _0x5d771f(0x220):this[_0x5d771f(0x2f6)]();break;case _0x5d771f(0x1b6):this['processPitfallEffect']();break;case _0x5d771f(0x2a5):this[_0x5d771f(0x1fd)]();break;case'shock':this[_0x5d771f(0x26f)]();break;case _0x5d771f(0x310):this[_0x5d771f(0x386)]();break;}},Game_CharacterBase[_0x9d1216(0x1d6)]['processSlipperyEffect']=function(){const _0x3de185=_0x9d1216;if(this[_0x3de185(0x1a6)])return;if(this[_0x3de185(0x1a5)]===Game_Follower)return;const _0x145a0a=this[_0x3de185(0x2f9)]();if([0x7,0x1][_0x3de185(0x245)](_0x145a0a))this[_0x3de185(0x22f)](0x4);if([0x9,0x3][_0x3de185(0x245)](_0x145a0a))this[_0x3de185(0x22f)](0x6);this['moveStraight'](this['slipperyMoveDirection']());this===$gamePlayer&&$gamePlayer[_0x3de185(0x20c)]([0x1,0x2]);if(!this[_0x3de185(0x307)]()){if(_0x3de185(0x353)!==_0x3de185(0x353)){_0x3313f6['processUniqueTileDamage']();if(_0x3d383d['isAllDead']()){this[_0x3de185(0x237)][_0x3de185(0x2e0)]();return;}_0x8ab0db[_0x3de185(0x1d6)]['onDrowningFinish'][_0x3de185(0x25d)](this),this[_0x3de185(0x2c9)](),this[_0x3de185(0x237)][_0x3de185(0x34d)]();if(_0x1e3ba1[_0x3de185(0x2f2)]()){const _0x2c1bc3=_0x27c33d[_0x3de185(0x242)][_0x3de185(0x267)][_0x3de185(0x285)](this);if(_0x2c1bc3)_0x2c1bc3[_0x3de185(0x346)]();}}else this[_0x3de185(0x1a6)]=!![];}},Game_CharacterBase['prototype'][_0x9d1216(0x26a)]=function(){const _0x13c575=_0x9d1216;return this[_0x13c575(0x34e)]||this[_0x13c575(0x2f9)]();},Game_CharacterBase[_0x9d1216(0x1d6)]['processForceMoveEffect']=function(){const _0x3b3881=_0x9d1216;if(this['constructor']===Game_Follower)return;this[_0x3b3881(0x330)](this['forceMoveDirection']()),this===$gamePlayer&&$gamePlayer[_0x3b3881(0x20c)]([0x1,0x2]);},Game_CharacterBase['prototype']['forceMoveDirection']=function(){const _0x546b3f=_0x9d1216,_0x3c38fd=$gameMap['getUniqueTileXyType'](this['x'],this['y'],!![]);switch(_0x3c38fd){case _0x546b3f(0x215):return 0x2;case _0x546b3f(0x1be):return 0x4;case _0x546b3f(0x2bf):return 0x6;case'up':return 0x8;default:return 0x0;}},Game_CharacterBase[_0x9d1216(0x1d6)]['processPitfallEffect']=function(){const _0x1412d7=_0x9d1216;if(this[_0x1412d7(0x38f)])return;if($gameMap[_0x1412d7(0x2c6)](this['x'],this['y']))return;this['_isPitfalling']=!![],SoundManager[_0x1412d7(0x363)]('pitfall',_0x1412d7(0x39a),this);const _0x4da0e4=SceneManager['_scene'][_0x1412d7(0x267)];if(_0x4da0e4){if(_0x1412d7(0x333)!==_0x1412d7(0x333)){_0xe10dee[_0x1412d7(0x2a2)](_0x18f43d,_0x127b7c);const _0x56d4df=_0xb9b959[_0x1412d7(0x36d)];_0x4daf54[_0x1412d7(0x260)](_0x1412d7(0x310),_0x56d4df);}else{const _0x169068=_0x4da0e4[_0x1412d7(0x285)](this);if(_0x169068){_0x169068['startPitfallEffect']();return;}}}this[_0x1412d7(0x1ef)]();},Game_CharacterBase['prototype'][_0x9d1216(0x1ef)]=function(){const _0x236f2a=_0x9d1216;setTimeout(this[_0x236f2a(0x1e0)][_0x236f2a(0x32c)](this),0x64);},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x1e0)]=function(){const _0x14d9d3=_0x9d1216;this[_0x14d9d3(0x38f)]=![];},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x1ef)]=function(){const _0xcbf63a=_0x9d1216;$gameParty[_0xcbf63a(0x1e4)]();if($gameParty['isAllDead']()){this[_0xcbf63a(0x237)][_0xcbf63a(0x1b7)]();return;}Game_Character[_0xcbf63a(0x1d6)][_0xcbf63a(0x1ef)][_0xcbf63a(0x25d)](this);if(this['processUniqueTileTransfer'](_0xcbf63a(0x1b6)))return;this[_0xcbf63a(0x2c9)](),this['_followers']['onPitfallFinish']();if(SceneManager[_0xcbf63a(0x2f2)]()){if(_0xcbf63a(0x3a9)===_0xcbf63a(0x387))this[_0xcbf63a(0x323)]=0x0,this[_0xcbf63a(0x22c)]();else{const _0xb4acc6=SceneManager[_0xcbf63a(0x242)][_0xcbf63a(0x267)][_0xcbf63a(0x285)](this);if(_0xb4acc6)_0xb4acc6[_0xcbf63a(0x1a4)]();}}},Game_Followers[_0x9d1216(0x1d6)]['onPitfallFinish']=function(){const _0x291816=_0x9d1216;for(const _0x4525c0 of this[_0x291816(0x2e4)]){if(_0x291816(0x2f8)!==_0x291816(0x2f8))return this['getUniqueTileData'](_0xc68c4a)[_0x291816(0x2a0)]||[];else{if(!_0x4525c0)continue;_0x4525c0['onPitfallFinish']();if(SceneManager[_0x291816(0x2f2)]()){const _0x4d075c=SceneManager[_0x291816(0x242)][_0x291816(0x267)][_0x291816(0x285)](_0x4525c0);if(_0x4d075c)_0x4d075c[_0x291816(0x1a4)]();}}}},Game_Followers[_0x9d1216(0x1d6)]['onPitfallDead']=function(){const _0x454838=_0x9d1216;for(const _0x5890ca of this[_0x454838(0x2e4)]){if(!_0x5890ca)continue;_0x5890ca[_0x454838(0x38f)]=!![];}},Game_Follower['prototype'][_0x9d1216(0x1ef)]=function(){const _0x25a6cd=_0x9d1216;if($gameParty[_0x25a6cd(0x335)]())return;Game_Character[_0x25a6cd(0x1d6)]['onPitfallFinish']['call'](this),this[_0x25a6cd(0x320)]($gamePlayer['x'],$gamePlayer['y']),this['setDirection']($gamePlayer[_0x25a6cd(0x2f9)]()),this['resetPattern'](),this[_0x25a6cd(0x2a1)]();if($gamePlayer[_0x25a6cd(0x38f)])return;if(SceneManager[_0x25a6cd(0x2f2)]()){const _0x306942=SceneManager[_0x25a6cd(0x242)][_0x25a6cd(0x267)][_0x25a6cd(0x285)](this);_0x306942&&(_0x306942['restorePrePitfallScale'](),_0x306942[_0x25a6cd(0x22c)]());}},Game_Event['prototype']['onPitfallFinish']=function(){const _0x4b6669=_0x9d1216;Game_Character[_0x4b6669(0x1d6)]['onPitfallFinish'][_0x4b6669(0x25d)](this),this[_0x4b6669(0x1b0)]();},Game_Character[_0x9d1216(0x1d6)][_0x9d1216(0x37c)]=function(){return![];},Game_Player[_0x9d1216(0x1d6)]['canSwimInWater']=function(){const _0x1ae011=_0x9d1216;return this['isImmuneToUniqueTileType'](_0x1ae011(0x2a5));},Game_Follower[_0x9d1216(0x1d6)][_0x9d1216(0x37c)]=function(){const _0x58a10d=_0x9d1216;return $gamePlayer[_0x58a10d(0x37c)]();},Game_Character[_0x9d1216(0x1d6)][_0x9d1216(0x343)]=function(){const _0x2bda87=_0x9d1216;if(!this[_0x2bda87(0x37c)]())return![];if(!$gameMap[_0x2bda87(0x240)](this['x'],this['y']))return![];if($gameMap['hasBelowPriorityEventsXy'](this['x'],this['y']))return![];return $gameMap[_0x2bda87(0x28d)](this['x'],this['y'],_0x2bda87(0x2a5));},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x243)]=Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x1c6)],Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x1c6)]=function(){const _0x1ce79f=_0x9d1216;if(this[_0x1ce79f(0x343)]())return![];return VisuMZ[_0x1ce79f(0x360)]['Game_CharacterBase_isOnBush'][_0x1ce79f(0x25d)](this);},Game_Character[_0x9d1216(0x1d6)][_0x9d1216(0x3a3)]=function(){const _0x4df4fe=_0x9d1216;return Game_CharacterBase[_0x4df4fe(0x2c8)];},Game_CharacterBase[_0x9d1216(0x1d6)]['processDrowningEffect']=function(){const _0x13105c=_0x9d1216;if(this[_0x13105c(0x27e)])return;if($gameMap['hasBelowPriorityEventsXy'](this['x'],this['y']))return;if(this[_0x13105c(0x37c)]())return;this[_0x13105c(0x27e)]=!![],SoundManager[_0x13105c(0x363)](_0x13105c(0x2a5),_0x13105c(0x39a),this);const _0x238688=SceneManager[_0x13105c(0x242)][_0x13105c(0x267)];if(_0x238688){if(_0x13105c(0x1b8)===_0x13105c(0x1b8)){const _0x4446e0=_0x238688['findTargetSprite'](this);if(_0x4446e0){_0x4446e0[_0x13105c(0x2ae)]();return;}}else{if([0x6c,0x198][_0x13105c(0x245)](_0x20d5e2[_0x13105c(0x256)])){if(_0x2c48db!=='')_0x4b0dd4+='\x0a';_0x2ea35a+=_0x2d6176['parameters'][0x0];}}}this[_0x13105c(0x34d)]();},Game_Follower['prototype']['processDrowningEffect']=function(){const _0x3cb847=_0x9d1216;if($gamePlayer[_0x3cb847(0x229)])return;if($gamePlayer['isInVehicle']())return;Game_Character[_0x3cb847(0x1d6)]['processDrowningEffect'][_0x3cb847(0x25d)](this);},Game_CharacterBase['prototype'][_0x9d1216(0x34d)]=function(){const _0x5ec606=_0x9d1216;setTimeout(this[_0x5ec606(0x370)]['bind'](this),0x64);},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x370)]=function(){const _0x4dd69f=_0x9d1216;this[_0x4dd69f(0x27e)]=![];},Game_Player['prototype'][_0x9d1216(0x34d)]=function(){const _0x22375e=_0x9d1216;$gameParty[_0x22375e(0x1e4)]();if($gameParty[_0x22375e(0x335)]()){if(_0x22375e(0x1a8)===_0x22375e(0x2fb)){if(this[_0x22375e(0x23d)])return;_0x245e2b[_0x22375e(0x1d6)][_0x22375e(0x26f)][_0x22375e(0x25d)](this),_0x38f12d[_0x22375e(0x363)](_0x22375e(0x317),_0x22375e(0x2bb),this),this[_0x22375e(0x23d)]=!![],_0x1fd8ba(this[_0x22375e(0x1b0)][_0x22375e(0x32c)](this),0x64);}else{this['_followers'][_0x22375e(0x2e0)]();return;}}Game_Character[_0x22375e(0x1d6)][_0x22375e(0x34d)][_0x22375e(0x25d)](this),this[_0x22375e(0x2c9)](),this[_0x22375e(0x237)]['onDrowningFinish']();if(SceneManager[_0x22375e(0x2f2)]()){const _0xbc6b56=SceneManager[_0x22375e(0x242)][_0x22375e(0x267)][_0x22375e(0x285)](this);if(_0xbc6b56)_0xbc6b56[_0x22375e(0x346)]();}},Game_Followers[_0x9d1216(0x1d6)][_0x9d1216(0x34d)]=function(){const _0x5e9124=_0x9d1216;for(const _0x3cf0ca of this['_data']){if(_0x5e9124(0x25f)!=='duFqd'){if(!_0x3cf0ca)continue;_0x3cf0ca[_0x5e9124(0x34d)]();if(SceneManager[_0x5e9124(0x2f2)]()){const _0x807c59=SceneManager['_scene']['_spriteset'][_0x5e9124(0x285)](_0x3cf0ca);if(_0x807c59)_0x807c59[_0x5e9124(0x346)]();}}else{if(_0x37780e[_0x5e9124(0x23e)]){const _0x145a47=_0x1cfb50[_0x5e9124(0x2b6)];if(_0x145a47['id']<=0x0)return;_0xc68aff[_0x5e9124(0x2f4)]([this],_0x145a47['id'],_0x145a47['mirror'],_0x145a47['mute']);}}}},Game_Followers[_0x9d1216(0x1d6)]['onDrowningDead']=function(){const _0x450fa0=_0x9d1216;for(const _0x2dfed1 of this[_0x450fa0(0x2e4)]){if(!_0x2dfed1)continue;_0x2dfed1['_isDrowning']=!![];}},Game_Follower['prototype'][_0x9d1216(0x34d)]=function(){const _0x310cca=_0x9d1216;if($gameParty[_0x310cca(0x335)]())return;Game_Character['prototype']['onDrowningFinish'][_0x310cca(0x25d)](this),this[_0x310cca(0x320)]($gamePlayer['x'],$gamePlayer['y']),this[_0x310cca(0x22f)]($gamePlayer['direction']()),this[_0x310cca(0x2f7)](),this[_0x310cca(0x2a1)]();if($gamePlayer['_isDrowning'])return;if(SceneManager[_0x310cca(0x2f2)]()){const _0x3fdf26=SceneManager[_0x310cca(0x242)][_0x310cca(0x267)][_0x310cca(0x285)](this);_0x3fdf26&&(_0x3fdf26[_0x310cca(0x346)](),_0x3fdf26[_0x310cca(0x22c)]());}},Game_Event[_0x9d1216(0x1d6)][_0x9d1216(0x34d)]=function(){const _0x3069b3=_0x9d1216;Game_Character[_0x3069b3(0x1d6)][_0x3069b3(0x34d)][_0x3069b3(0x25d)](this),this['erase']();},Game_Character[_0x9d1216(0x1d6)][_0x9d1216(0x2b0)]=function(){const _0x2533a9=_0x9d1216;return this[_0x2533a9(0x36f)](_0x2533a9(0x1f5))&&this[_0x2533a9(0x258)]()===_0x2533a9(0x1f5)&&!$gameMap[_0x2533a9(0x2c6)](this['x'],this['y']);},Game_Character[_0x9d1216(0x1d6)][_0x9d1216(0x2df)]=function(){const _0x386ae1=_0x9d1216;return this[_0x386ae1(0x2fa)]=this[_0x386ae1(0x2fa)]||0x0,(this[_0x386ae1(0x2fa)]/Game_CharacterBase['QUICKSAND_MAX_STEPS'])['clamp'](0x0,0x1);},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x3ad)]=function(_0x50adbb){const _0x2074c2=_0x9d1216;_0x50adbb=_0x50adbb||0x1;if(this[_0x2074c2(0x2b0)]()){this['_quicksandSteps']+=_0x50adbb;if(this['_quicksandSteps']>=Game_CharacterBase['QUICKSAND_MAX_STEPS']){if(_0x2074c2(0x218)!==_0x2074c2(0x218)){const _0x37a79d=this[_0x2074c2(0x301)](),_0x4c8f78=this[_0x2074c2(0x2b5)](),_0x83df1e=(this[_0x2074c2(0x214)]()+this[_0x2074c2(0x20f)]())*_0x37a79d,_0x500361=(this[_0x2074c2(0x206)]()+this[_0x2074c2(0x22e)]())*_0x4c8f78;this[_0x2074c2(0x1e8)](_0x83df1e,_0x500361,_0x37a79d,_0x4c8f78-this[_0x2074c2(0x323)]);if(this[_0x2074c2(0x268)])this[_0x2074c2(0x268)][_0x2074c2(0x1e8)](0x0,0x0,0x0,0x0);if(this[_0x2074c2(0x20e)])this[_0x2074c2(0x20e)]['setFrame'](0x0,0x0,0x0,0x0);}else this[_0x2074c2(0x28f)]();}}else this[_0x2074c2(0x2fa)]=0x0;},Game_CharacterBase[_0x9d1216(0x1d6)]['onQuicksandSink']=function(){},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x28f)]=function(){const _0x11a258=_0x9d1216;Input[_0x11a258(0x380)](),TouchInput[_0x11a258(0x380)](),$gameParty['processUniqueTileDamage']();if($gameParty[_0x11a258(0x335)]()){if(_0x11a258(0x39c)===_0x11a258(0x39c))return;else{if(this[_0x11a258(0x221)](_0x2ffb25,_0x24bf5b))return!![];return _0x567a80[_0x11a258(0x360)]['Game_Player_isTileSmartJumpBreakable'][_0x11a258(0x25d)](this,_0x4e77d4,_0x5aafbd);}}Game_Character['prototype']['onQuicksandSink']['call'](this),this[_0x11a258(0x2c9)]();},Game_Event[_0x9d1216(0x1d6)][_0x9d1216(0x28f)]=function(){const _0x13495c=_0x9d1216;Game_Character[_0x13495c(0x1d6)]['onQuicksandSink'][_0x13495c(0x25d)](this),this[_0x13495c(0x1b0)]();},Game_CharacterBase[_0x9d1216(0x1d6)]['canUpdateUniqueTileLava']=function(){const _0x3b316f=_0x9d1216;if(!this[_0x3b316f(0x36f)](_0x3b316f(0x31f)))return![];if(this[_0x3b316f(0x290)]())return![];if(this[_0x3b316f(0x2ca)]())return![];if(this[_0x3b316f(0x21e)])return![];if(this===$gamePlayer){if(_0x3b316f(0x1c3)!==_0x3b316f(0x1c3))_0x23df1a(this[_0x3b316f(0x1e0)][_0x3b316f(0x32c)](this),0x64);else{if($gamePlayer[_0x3b316f(0x279)]())return![];if($gamePlayer[_0x3b316f(0x1bb)]())return![];}}if(this['constructor']===Game_Follower&&$gamePlayer[_0x3b316f(0x2ca)]())return![];if(!this['isAffectedByCurrentUniqueTile']())return![];if(this[_0x3b316f(0x258)]()!==_0x3b316f(0x31f))return![];if($gameMap[_0x3b316f(0x2c6)](this['x'],this['y']))return![];return Graphics[_0x3b316f(0x1e7)]%Game_CharacterBase[_0x3b316f(0x2db)]===0x0;},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x227)]=function(){const _0x5e390a=_0x9d1216;if(this[_0x5e390a(0x1a5)]===Game_Follower&&!this[_0x5e390a(0x390)]()){if(_0x5e390a(0x219)==='qqJdp')return;else _0x1581b4(_0x5e390a(0x321)['format'](_0x4b6241,_0x108f9a)),_0x5b2f47[_0x5e390a(0x1f7)]();}if(Imported['VisuMZ_0_CoreEngine']){const _0x3e4e80=Game_CharacterBase[_0x5e390a(0x2ac)];if(_0x3e4e80['id']<=0x0)return;$gameTemp[_0x5e390a(0x2f4)]([this],_0x3e4e80['id'],_0x3e4e80[_0x5e390a(0x1eb)],_0x3e4e80[_0x5e390a(0x398)]);}},Game_Player[_0x9d1216(0x1d6)]['processLavaEffect']=function(){const _0x3212a7=_0x9d1216;$gameParty[_0x3212a7(0x1e4)]();if($gameParty[_0x3212a7(0x335)]()){if(_0x3212a7(0x205)===_0x3212a7(0x1d7)){if(this[_0x3212a7(0x2c2)]()){let _0x160809=_0x3212a7(0x2c0)+'\x0a';_0x160809+='Click\x20\x22Copy\x20Page\x22\x20from\x20another\x20tileset\x27s\x20pages'+'\x0a',_0x160809+=_0x3212a7(0x1ac),_0x491a99(_0x160809),this[_0x3212a7(0x1f4)]=!![],_0xf29e09[_0x3212a7(0x1f7)]();}}else return;}Game_Character['prototype'][_0x3212a7(0x227)][_0x3212a7(0x25d)](this);},Game_Event[_0x9d1216(0x1d6)]['processLavaEffect']=function(){const _0x365c3d=_0x9d1216;Game_Character[_0x365c3d(0x1d6)][_0x365c3d(0x227)][_0x365c3d(0x25d)](this),this['_lavaBurnTimes']=this[_0x365c3d(0x23f)]||0x0,this[_0x365c3d(0x23f)]++,SoundManager[_0x365c3d(0x363)](_0x365c3d(0x31f),_0x365c3d(0x2bb),this),this[_0x365c3d(0x23f)]>=(this[_0x365c3d(0x274)]??Game_CharacterBase[_0x365c3d(0x263)])&&('DlioC'!==_0x365c3d(0x252)?(_0xb29ae5[_0x365c3d(0x360)][_0x365c3d(0x261)]['call'](this,_0x4c6232,_0x44cc3d),this[_0x365c3d(0x32e)](),this[_0x365c3d(0x397)](!![])):this[_0x365c3d(0x1b0)]());},Game_CharacterBase['prototype'][_0x9d1216(0x26f)]=function(){const _0x3a9e74=_0x9d1216;if(Imported[_0x3a9e74(0x23e)]){const _0x140bfc=Game_CharacterBase[_0x3a9e74(0x2b6)];if(_0x140bfc['id']<=0x0)return;$gameTemp[_0x3a9e74(0x2f4)]([this],_0x140bfc['id'],_0x140bfc[_0x3a9e74(0x1eb)],_0x140bfc[_0x3a9e74(0x398)]);}},Game_Player['prototype'][_0x9d1216(0x26f)]=function(){const _0x34f675=_0x9d1216;if(this[_0x34f675(0x23d)])return;Input[_0x34f675(0x380)](),TouchInput[_0x34f675(0x380)](),$gameParty['processUniqueTileDamage'](),Game_Character[_0x34f675(0x1d6)][_0x34f675(0x26f)]['call'](this);if($gameParty['isAllDead']()){this[_0x34f675(0x23d)]=!![];return;}this[_0x34f675(0x2c9)](),this[_0x34f675(0x222)]=Game_CharacterBase['SHOCK_DELAY'];},Game_Follower['prototype'][_0x9d1216(0x26f)]=function(){},Game_Event['prototype'][_0x9d1216(0x26f)]=function(){const _0x16043d=_0x9d1216;if(this[_0x16043d(0x23d)])return;Game_Character['prototype'][_0x16043d(0x26f)][_0x16043d(0x25d)](this),SoundManager[_0x16043d(0x363)]('shock',_0x16043d(0x2bb),this),this[_0x16043d(0x23d)]=!![],setTimeout(this[_0x16043d(0x1b0)][_0x16043d(0x32c)](this),0x64);},Game_CharacterBase['prototype'][_0x9d1216(0x386)]=function(){const _0x26ffee=_0x9d1216,_0x4be327=this[_0x26ffee(0x2a3)]();let _0x286871=0x0,_0x3aac1f=0x0;const _0x347bd4=this[_0x26ffee(0x2d8)]();if([0x7,0x1][_0x26ffee(0x245)](_0x347bd4))this[_0x26ffee(0x22f)](0x4);if([0x9,0x3][_0x26ffee(0x245)](_0x347bd4))this[_0x26ffee(0x22f)](0x6);switch(_0x347bd4){case 0x2:_0x3aac1f=_0x4be327;break;case 0x4:_0x286871=-_0x4be327;break;case 0x6:_0x286871=_0x4be327;break;case 0x8:_0x3aac1f=-_0x4be327;break;}this['jump'](_0x286871,_0x3aac1f),(_0x286871!==0x0||_0x3aac1f!==0x0)&&SoundManager['playUniqueTileSfx']('bounce',_0x26ffee(0x39a),this);},Game_Follower[_0x9d1216(0x1d6)]['processBounceEffect']=function(){},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x2d8)]=function(){const _0x27c503=_0x9d1216;return this[_0x27c503(0x34e)]||this[_0x27c503(0x2f9)]();},Game_CharacterBase[_0x9d1216(0x1d6)][_0x9d1216(0x2a3)]=function(){const _0x3ee5b1=_0x9d1216,_0x14ef75=$gameMap[_0x3ee5b1(0x2d5)](this['x'],this['y'],!![]);return[_0x3ee5b1(0x1ca),_0x3ee5b1(0x1ab),'bounce2',_0x3ee5b1(0x341),_0x3ee5b1(0x23c),_0x3ee5b1(0x1e2),_0x3ee5b1(0x2cf),'bounce7',_0x3ee5b1(0x26e),_0x3ee5b1(0x362)][_0x3ee5b1(0x20a)](_0x14ef75);},Game_Player[_0x9d1216(0x1d6)]['setupUniqueTileData']=function(){const _0x37376c=_0x9d1216;Game_Character[_0x37376c(0x1d6)]['setupUniqueTileData'][_0x37376c(0x25d)](this),this[_0x37376c(0x27c)]={},this[_0x37376c(0x217)]={};},Game_Player['prototype'][_0x9d1216(0x203)]=function(_0x2e1398){const _0x56af2e=_0x9d1216;if(this[_0x56af2e(0x27c)]===undefined)this[_0x56af2e(0x2a9)]();if(this[_0x56af2e(0x217)]===undefined)this[_0x56af2e(0x2f5)]();return this[_0x56af2e(0x27c)][_0x2e1398]||this[_0x56af2e(0x217)][_0x2e1398];},Game_Player[_0x9d1216(0x1d6)]['setImmuneToUniqueTileType']=function(_0x4fddf2,_0x382824){const _0x5294df=_0x9d1216;if(this['_uniqueTileCmdImmune']===undefined)this[_0x5294df(0x2a9)]();this[_0x5294df(0x27c)][_0x4fddf2]=_0x382824,this[_0x5294df(0x1d2)]();},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x2ef)]=Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x1d2)],Game_Player[_0x9d1216(0x1d6)]['refresh']=function(){const _0x19050f=_0x9d1216;VisuMZ['UniqueTileEffects'][_0x19050f(0x2ef)]['call'](this),this['clearUniqueTilePartyImmunity']();},Game_Player[_0x9d1216(0x1d6)]['clearUniqueTilePartyImmunity']=function(){const _0x27e528=_0x9d1216;this[_0x27e528(0x217)]=undefined;},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x2f5)]=function(){const _0x52aa49=_0x9d1216;this['_uniqueTilePartyImmune']={};const _0x2725e9=VisuMZ['UniqueTileEffects']['RegExp'],_0x5dcf73=VisuMZ['UniqueTileEffects'][_0x52aa49(0x3a7)]();for(const _0x427ba8 of _0x5dcf73){if(_0x52aa49(0x293)===_0x52aa49(0x293)){if(!_0x2725e9[_0x427ba8])continue;const _0x16e8b9=_0x2725e9[_0x427ba8][_0x52aa49(0x27f)];_0x16e8b9&&(this[_0x52aa49(0x217)][_0x427ba8]=$gameParty[_0x52aa49(0x38a)](_0x16e8b9));}else{if(_0x5c8558[_0x52aa49(0x28d)](this['x'],this['y'],_0x52aa49(0x1b6))){if(!_0x536cd8['hasBelowPriorityEventsXy'](this['x'],this['y']))return![];}const _0x5564a9=_0x48e243[_0x52aa49(0x1d9)](_0x277096,_0x52e3e7),_0x486b63=_0x2fd23d['roundYWithDirection'](_0x54600c,_0x32878a);if(_0xd85417[_0x52aa49(0x28d)](_0x5564a9,_0x486b63,_0x52aa49(0x1b6)))return!![];}}},Game_Party[_0x9d1216(0x1d6)][_0x9d1216(0x38a)]=function(_0x215ea3){const _0x2e8cee=_0x9d1216;if(this[_0x2e8cee(0x1f1)]()[_0x2e8cee(0x1dd)](_0x333466=>_0x333466&&_0x333466[_0x2e8cee(0x364)][_0x2e8cee(0x2ea)](_0x215ea3)))return!![];const _0x240deb=Game_Party[_0x2e8cee(0x1bd)]['general'][_0x2e8cee(0x372)],_0xf4b073=_0x240deb?this[_0x2e8cee(0x30a)]():this[_0x2e8cee(0x32f)]();for(const _0x4dcb2c of _0xf4b073){if(!_0x4dcb2c)continue;if(_0x4dcb2c[_0x2e8cee(0x26d)]()[_0x2e8cee(0x1dd)](_0x46452a=>_0x46452a&&_0x46452a['note']['match'](_0x215ea3))){if('ACFOX'!==_0x2e8cee(0x286))this[_0x2e8cee(0x1a6)]=!![];else return!![];}}return![];},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x21d)]=Game_Party[_0x9d1216(0x1d6)][_0x9d1216(0x1af)],Game_Party[_0x9d1216(0x1d6)][_0x9d1216(0x1af)]=function(_0x316bbb,_0x5984d4,_0x2578fc){const _0x1786d9=_0x9d1216;VisuMZ[_0x1786d9(0x360)][_0x1786d9(0x21d)][_0x1786d9(0x25d)](this,_0x316bbb,_0x5984d4,_0x2578fc),$gamePlayer[_0x1786d9(0x356)]();},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x1bc)]=Game_Actor['prototype'][_0x9d1216(0x2f3)],Game_Actor[_0x9d1216(0x1d6)][_0x9d1216(0x2f3)]=function(_0x28ea56,_0x4d3f87){const _0x64a71d=_0x9d1216;VisuMZ[_0x64a71d(0x360)]['Game_Actor_changeEquip'][_0x64a71d(0x25d)](this,_0x28ea56,_0x4d3f87),$gamePlayer[_0x64a71d(0x356)]();},VisuMZ['UniqueTileEffects'][_0x9d1216(0x38d)]=Game_Actor[_0x9d1216(0x1d6)][_0x9d1216(0x31a)],Game_Actor[_0x9d1216(0x1d6)][_0x9d1216(0x31a)]=function(_0x29349e,_0x305b79){const _0x3ad639=_0x9d1216;VisuMZ['UniqueTileEffects'][_0x3ad639(0x38d)]['call'](this,_0x29349e,_0x305b79),$gamePlayer['clearUniqueTilePartyImmunity']();},VisuMZ[_0x9d1216(0x360)]['Game_Player_locate']=Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x320)],Game_Player[_0x9d1216(0x1d6)]['locate']=function(_0x38784f,_0x27abf2){const _0x4dd3c1=_0x9d1216;VisuMZ['UniqueTileEffects'][_0x4dd3c1(0x261)][_0x4dd3c1(0x25d)](this,_0x38784f,_0x27abf2),this[_0x4dd3c1(0x32e)](),this[_0x4dd3c1(0x397)](!![]);},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x327)]=Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x2f1)],Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x2f1)]=function(){const _0x2cc566=_0x9d1216;VisuMZ[_0x2cc566(0x360)][_0x2cc566(0x327)][_0x2cc566(0x25d)](this),this[_0x2cc566(0x397)]();},Game_Player['prototype'][_0x9d1216(0x32e)]=function(){this['_lastUniqueTileCoordinate']={'x':this['x'],'y':this['y']};},Game_Player['prototype']['getLastUniqueTileCoordinate']=function(){return this['_lastUniqueTileCoordinate']||{'x':this['x'],'y':this['y']};},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x397)]=function(_0x5dd028){const _0x17506=_0x9d1216;if(!_0x5dd028){if(this[_0x17506(0x394)]())return;}this[_0x17506(0x1aa)]={'x':this['x'],'y':this['y'],'d':this[_0x17506(0x2f9)]()};},Game_Player['prototype'][_0x9d1216(0x394)]=function(){const _0x5e1f3f=_0x9d1216;if(this['isOnUniqueTile']())return!![];if(!$gameMap['isRawPassableByAnyDirection'](this['x'],this['y']))return!![];if($gameMap['isDamageFloor'](this['x'],this['y']))return!![];if($gameMap['isBoatPassable'](this['x'],this['y']))return!![];if($gameMap[_0x5e1f3f(0x2eb)](this['x'],this['y']))return!![];return![];},Game_Player[_0x9d1216(0x1d6)]['gotoLastSafestCoordinate']=function(){const _0x16cf28=_0x9d1216;if(this[_0x16cf28(0x1aa)]===undefined)return;this[_0x16cf28(0x22f)](this[_0x16cf28(0x1aa)]['d']||this[_0x16cf28(0x2f9)]()),this['locate'](this['_lastSafestCoordinate']['x']??this['x'],this[_0x16cf28(0x1aa)]['y']??this['y']),this[_0x16cf28(0x314)]();},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x314)]=function(){const _0x23a7eb=_0x9d1216;if(!SceneManager['isSceneMap']())return;const _0x6790e6=SceneManager[_0x23a7eb(0x242)][_0x23a7eb(0x267)];if(!_0x6790e6)return;{const _0xce8461=_0x6790e6[_0x23a7eb(0x285)](this);if(_0xce8461)_0xce8461[_0x23a7eb(0x314)]();}for(const _0x41a6c0 of this[_0x23a7eb(0x237)][_0x23a7eb(0x357)]()){const _0x41dab8=_0x6790e6[_0x23a7eb(0x285)](_0x41a6c0);if(_0x41dab8)_0x41dab8[_0x23a7eb(0x314)]();}},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x255)]=function(_0x1d9e5f){const _0x327c22=_0x9d1216,_0x54fc33=$gameMap['_uniqueTileTransfer'][_0x1d9e5f];if(!_0x54fc33)return![];const _0x2aeb74=_0x54fc33[0x0]||$gameMap['mapId'](),_0x299f54=_0x54fc33[0x1]??this['x'],_0x421c8d=_0x54fc33[0x2]??this['y'];if(_0x2aeb74===$gameMap[_0x327c22(0x2b4)]()&&_0x299f54===this['x']&&_0x421c8d===this['y'])return![];return this[_0x327c22(0x239)](_0x2aeb74,_0x299f54,_0x421c8d,this['direction'](),0x0),!![];},Game_Event[_0x9d1216(0x399)]={'slippery':VisuMZ['UniqueTileEffects']['Settings'][_0x9d1216(0x275)][_0x9d1216(0x24f)],'forceMove':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x232)]['DefaultAffected'],'pitfall':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x34b)][_0x9d1216(0x24f)],'swimming':VisuMZ['UniqueTileEffects']['Settings'][_0x9d1216(0x1d3)]['DefaultAffected'],'quicksand':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)]['Quicksand']['DefaultAffected'],'lava':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)][_0x9d1216(0x24f)],'shock':VisuMZ[_0x9d1216(0x360)]['Settings']['Shock'][_0x9d1216(0x24f)],'bounce':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x22b)][_0x9d1216(0x24f)]},Game_Event[_0x9d1216(0x21f)]={'slippery':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x275)][_0x9d1216(0x234)],'forceMove':VisuMZ['UniqueTileEffects']['Settings'][_0x9d1216(0x232)][_0x9d1216(0x234)],'pitfall':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)]['Pitfall'][_0x9d1216(0x234)],'swimming':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x1d3)][_0x9d1216(0x234)],'quicksand':VisuMZ['UniqueTileEffects']['Settings'][_0x9d1216(0x2a7)][_0x9d1216(0x234)],'lava':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x38e)][_0x9d1216(0x234)],'shock':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)]['Shock']['DefaultAvoid'],'bounce':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x22b)][_0x9d1216(0x234)]},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x22a)]=Game_Event[_0x9d1216(0x1d6)][_0x9d1216(0x2c1)],Game_Event[_0x9d1216(0x1d6)][_0x9d1216(0x2c1)]=function(){const _0x1026d8=_0x9d1216;VisuMZ['UniqueTileEffects'][_0x1026d8(0x22a)][_0x1026d8(0x25d)](this),this[_0x1026d8(0x289)]();},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x300)]=Game_Event['prototype']['setupPageSettings'],Game_Event[_0x9d1216(0x1d6)][_0x9d1216(0x2cc)]=function(){const _0x202ecc=_0x9d1216;VisuMZ[_0x202ecc(0x360)][_0x202ecc(0x300)]['call'](this),this['setupUniqueTileEffectsEffects']();},Game_Event['prototype'][_0x9d1216(0x304)]=function(){const _0x1a9a9c=_0x9d1216;if(!this[_0x1a9a9c(0x224)]())return;this[_0x1a9a9c(0x289)](),this[_0x1a9a9c(0x355)](),this[_0x1a9a9c(0x315)]();},Game_Event[_0x9d1216(0x1d6)][_0x9d1216(0x355)]=function(){const _0x58b4f6=_0x9d1216,_0x5847ee=this[_0x58b4f6(0x224)]()[_0x58b4f6(0x364)];if(_0x5847ee==='')return;this[_0x58b4f6(0x250)](_0x5847ee);},Game_Event[_0x9d1216(0x1d6)]['setupUniqueTileEffectsCommentTags']=function(){const _0x102d96=_0x9d1216;if(!this[_0x102d96(0x35c)]())return;const _0x413158=this[_0x102d96(0x393)]();let _0x41fb76='';for(const _0x3ccb67 of _0x413158){if(_0x102d96(0x262)!==_0x102d96(0x262)){if(_0x24df66[_0x102d96(0x28d)](_0xae403a,_0x2ed07c,_0x102d96(0x1b6)))return _0x472180['isUniqueTileAffected'](_0x102d96(0x1b6));if(_0x21bd03[_0x102d96(0x28d)](_0x1bbdc4,_0x415139,_0x102d96(0x2a5)))return _0x56c1c8['isUniqueTileAffected'](_0x102d96(0x2a5));return![];}else{if([0x6c,0x198][_0x102d96(0x245)](_0x3ccb67['code'])){if(_0x102d96(0x391)==='OKUFB'){if(_0x41fb76!=='')_0x41fb76+='\x0a';_0x41fb76+=_0x3ccb67['parameters'][0x0];}else{if(this[_0x102d96(0x1a5)]===_0x29984f)return;this[_0x102d96(0x330)](this[_0x102d96(0x349)]()),this===_0x13c42c&&_0x26a137['checkEventTriggerHere']([0x1,0x2]);}}}}this['checkUniqueTileEffectsStringTags'](_0x41fb76);},Game_Event[_0x9d1216(0x1d6)]['initUniqueTileEffectsEffects']=function(){const _0x4b12dd=_0x9d1216;this[_0x4b12dd(0x204)]={},this[_0x4b12dd(0x2d7)]={};const _0x168fd7=VisuMZ[_0x4b12dd(0x360)][_0x4b12dd(0x3a7)]();for(const _0x3bb42b of _0x168fd7){if('vnfAR'!=='fBhcB')this[_0x4b12dd(0x204)][_0x3bb42b]=Game_Event[_0x4b12dd(0x399)][_0x3bb42b]||![],this[_0x4b12dd(0x2d7)][_0x3bb42b]=Game_Event['UNIQUE_TILE_AVOID_DEFAULT'][_0x3bb42b]||![];else{if(this[_0x4b12dd(0x343)]())return![];return _0x57f1ea['UniqueTileEffects'][_0x4b12dd(0x243)][_0x4b12dd(0x25d)](this);}}this['_lavaBurnMax']=Game_CharacterBase[_0x4b12dd(0x263)]||0x1;},Game_Event[_0x9d1216(0x1d6)][_0x9d1216(0x250)]=function(_0x1b703d){const _0x2c8831=_0x9d1216,_0x540257=VisuMZ[_0x2c8831(0x360)]['RegExp'],_0x19bc17=VisuMZ[_0x2c8831(0x360)]['TileTypes']();for(const _0xa19adf of _0x19bc17){if(!_0x540257[_0xa19adf])continue;_0x540257[_0xa19adf][_0x2c8831(0x280)]&&_0x1b703d[_0x2c8831(0x2ea)](_0x540257[_0xa19adf]['affected'])&&(this['_uniqueTileAffected'][_0xa19adf]=!![]);if(_0x540257[_0xa19adf][_0x2c8831(0x27f)]&&_0x1b703d[_0x2c8831(0x2ea)](_0x540257[_0xa19adf][_0x2c8831(0x27f)])){if('UziZa'!=='ggVWq')this['_uniqueTileAffected'][_0xa19adf]=![];else{if(_0x46767f==='swimming')return!![];return![];}}_0x540257[_0xa19adf][_0x2c8831(0x3a6)]&&_0x1b703d['match'](_0x540257[_0xa19adf][_0x2c8831(0x3a6)])&&(this[_0x2c8831(0x2d7)][_0xa19adf]=!![]),_0x540257[_0xa19adf][_0x2c8831(0x246)]&&_0x1b703d['match'](_0x540257[_0xa19adf][_0x2c8831(0x246)])&&(this[_0x2c8831(0x2d7)][_0xa19adf]=![]);}_0x1b703d[_0x2c8831(0x2ea)](_0x540257[_0x2c8831(0x31f)][_0x2c8831(0x3ab)])&&(this['_lavaBurnMax']=Math[_0x2c8831(0x331)](Number(RegExp['$1']),0x1));},VisuMZ[_0x9d1216(0x360)]['Game_Event_updateSelfMovement']=Game_Event[_0x9d1216(0x1d6)]['updateSelfMovement'],Game_Event[_0x9d1216(0x1d6)][_0x9d1216(0x1c5)]=function(){const _0x11cc23=_0x9d1216;if(this['_isPitfalling'])return;if(this[_0x11cc23(0x27e)])return;this[_0x11cc23(0x259)]=!![],VisuMZ[_0x11cc23(0x360)]['Game_Event_updateSelfMovement']['call'](this),this[_0x11cc23(0x259)]=undefined;},Game_Event[_0x9d1216(0x1d6)][_0x9d1216(0x36f)]=function(_0x4c8815){const _0x35e30f=_0x9d1216;if(this[_0x35e30f(0x259)]){if(_0x35e30f(0x2e7)!==_0x35e30f(0x2e7)){this[_0x35e30f(0x204)]={},this['_uniqueTileAvoid']={};const _0x4a10cc=_0x231013[_0x35e30f(0x360)]['TileTypes']();for(const _0x4abf56 of _0x4a10cc){this[_0x35e30f(0x204)][_0x4abf56]=_0x1a2133[_0x35e30f(0x399)][_0x4abf56]||![],this[_0x35e30f(0x2d7)][_0x4abf56]=_0x2317dd['UNIQUE_TILE_AVOID_DEFAULT'][_0x4abf56]||![];}this['_lavaBurnMax']=_0x3709a5[_0x35e30f(0x263)]||0x1;}else{this['_uniqueTileAvoid']===undefined&&this[_0x35e30f(0x304)]();if(this['isUniqueTileAvoided'](_0x4c8815))return![];}}return Game_Character[_0x35e30f(0x1d6)][_0x35e30f(0x36f)][_0x35e30f(0x25d)](this,_0x4c8815);},Game_Event['prototype'][_0x9d1216(0x201)]=function(_0x1866a2){const _0xd83e6b=_0x9d1216;return this['_uniqueTileAvoid']===undefined&&this[_0xd83e6b(0x304)](),this[_0xd83e6b(0x2d7)][_0x1866a2];},Game_Party['UNIQUE_TILE_DAMAGE']={'general':{'immuneReserveParty':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x2c3)]},'pitfall':{'deathAllow':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x34b)][_0x9d1216(0x21a)]??!![],'dmgRate':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x34b)][_0x9d1216(0x35d)]??0.2,'dmgFlat':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x34b)][_0x9d1216(0x2b7)]??0x14},'swimming':{'deathAllow':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x1d3)][_0x9d1216(0x21a)]??!![],'dmgRate':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x1d3)][_0x9d1216(0x35d)]??0.1,'dmgFlat':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x1d3)][_0x9d1216(0x2b7)]??0xf},'quicksand':{'deathAllow':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)]['Quicksand'][_0x9d1216(0x21a)]??!![],'dmgRate':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x2a7)][_0x9d1216(0x35d)]??0.3,'dmgFlat':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x2a7)][_0x9d1216(0x2b7)]??0x28},'lava':{'deathAllow':VisuMZ[_0x9d1216(0x360)]['Settings'][_0x9d1216(0x38e)][_0x9d1216(0x21a)]??!![],'dmgRate':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)]['DmgRate']??0.05,'dmgFlat':VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)][_0x9d1216(0x38e)][_0x9d1216(0x2b7)]??0x32},'shock':{'deathAllow':VisuMZ['UniqueTileEffects']['Settings'][_0x9d1216(0x30e)][_0x9d1216(0x21a)]??!![],'dmgRate':VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x30e)][_0x9d1216(0x35d)]??0.25,'dmgFlat':VisuMZ['UniqueTileEffects']['Settings'][_0x9d1216(0x30e)]['DmgFlat']??0x3c}},Game_Party[_0x9d1216(0x1d6)][_0x9d1216(0x1e4)]=function(){const _0x154764=_0x9d1216,_0x277823=$gamePlayer['getUniqueTileType']();SoundManager[_0x154764(0x363)](_0x277823,_0x154764(0x2bb),$gamePlayer);for(const _0x1fc93c of this[_0x154764(0x24c)]()){if(_0x154764(0x21b)!=='ucMaD')return!![];else{if(!_0x1fc93c)continue;_0x1fc93c['processUniqueTileDamage'](_0x277823);}}},Game_Actor['prototype'][_0x9d1216(0x1e4)]=function(_0x1073ee){const _0x2b7052=_0x9d1216,_0x3bacb2=Game_Party['UNIQUE_TILE_DAMAGE'][_0x1073ee];if(!_0x3bacb2)return;let _0x3c3782=0x0;_0x3c3782+=_0x3bacb2['dmgRate']*this[_0x2b7052(0x208)],_0x3c3782+=_0x3bacb2[_0x2b7052(0x1ae)],_0x3c3782=Math[_0x2b7052(0x2be)](_0x3c3782);!_0x3bacb2['deathAllow']&&(_0x3c3782=Math[_0x2b7052(0x340)](_0x3c3782,this['hp']-0x1));_0x3c3782>0x0&&($gameTemp['_executeFloorDamage']=!![],this['performMapDamage'](),$gameTemp[_0x2b7052(0x31c)]=![]);this[_0x2b7052(0x337)](-_0x3c3782);if(this[_0x2b7052(0x377)]())this[_0x2b7052(0x299)]();},Sprite_Character['PITFALL_DURATION']=VisuMZ['UniqueTileEffects'][_0x9d1216(0x365)][_0x9d1216(0x34b)]['EffectDuration']??0x14,Sprite_Character['DROWNING_DURATION']=VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x365)]['Swimming']['EffectDuration']??0x1e,VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x1a7)]=Sprite_Character['prototype'][_0x9d1216(0x266)],Sprite_Character['prototype'][_0x9d1216(0x266)]=function(){const _0x7de2d5=_0x9d1216;VisuMZ[_0x7de2d5(0x360)][_0x7de2d5(0x1a7)]['call'](this),this['initMembersUniqueTileEffects']();},Sprite_Character[_0x9d1216(0x1d6)]['initMembersUniqueTileEffects']=function(){const _0x515432=_0x9d1216;this[_0x515432(0x2da)]=0x0,this['_drowningDuration']=0x0,this[_0x515432(0x323)]=0x0;},Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x314)]=function(){const _0x15d648=_0x9d1216;this[_0x15d648(0x323)]=0x0,this['update']();},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x36c)]=Sprite_Character[_0x9d1216(0x1d6)]['update'],Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x22c)]=function(){const _0x4f6ada=_0x9d1216;this['updatePitfallEffect'](),VisuMZ[_0x4f6ada(0x360)]['Sprite_Character_update'][_0x4f6ada(0x25d)](this),this[_0x4f6ada(0x1f0)]();},VisuMZ['UniqueTileEffects'][_0x9d1216(0x297)]=Sprite_Character['prototype']['updateCharacterFrame'],Sprite_Character['prototype'][_0x9d1216(0x381)]=function(){const _0x27f528=_0x9d1216;this['calcUniqueTileCharaFrame'](),this[_0x27f528(0x323)]>0x0?this[_0x27f528(0x2ab)]():(VisuMZ[_0x27f528(0x360)]['Sprite_Character_updateCharacterFrame'][_0x27f528(0x25d)](this),this[_0x27f528(0x3a0)]());},Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x344)]=function(){const _0x3746bf=_0x9d1216,_0x36e1ec=this['getUniqueTileCharaFrameTarget'](),_0x49083a=0x1;if(this['_uniqueTileFrameMinusY']>_0x36e1ec)this[_0x3746bf(0x323)]=Math[_0x3746bf(0x331)](this[_0x3746bf(0x323)]-_0x49083a*0x4,_0x36e1ec);else{if(this['_uniqueTileFrameMinusY']<_0x36e1ec){if(_0x3746bf(0x298)!=='WZRLo')this[_0x3746bf(0x323)]=Math[_0x3746bf(0x340)](this[_0x3746bf(0x323)]+_0x49083a,_0x36e1ec);else{if(this[_0x3746bf(0x1cc)]())return!![];if(!_0x40cde0['isRawPassableByAnyDirection'](this['x'],this['y']))return!![];if(_0x518338['isDamageFloor'](this['x'],this['y']))return!![];if(_0x1028bd[_0x3746bf(0x32d)](this['x'],this['y']))return!![];if(_0x1ff062[_0x3746bf(0x2eb)](this['x'],this['y']))return!![];return![];}}else{if(_0x3746bf(0x2b2)!==_0x3746bf(0x2b2)){const _0x577598=_0x31375b[_0x3746bf(0x1d9)](_0x414cbf,_0x1361fd),_0x4914d6=_0x3641c3['roundYWithDirection'](_0x497a8a,_0x16bc6d),_0x8af0d1=_0xf4c6c0[_0x3746bf(0x2d5)](_0x577598,_0x4914d6,![]);if(this[_0x3746bf(0x201)](_0x8af0d1))return![];}else this[_0x3746bf(0x323)]=_0x36e1ec;}}},Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x1fb)]=function(){const _0x514983=_0x9d1216;if(!this[_0x514983(0x358)])return 0x0;if(this[_0x514983(0x358)][_0x514983(0x343)]())return this[_0x514983(0x235)]();else{if(this[_0x514983(0x358)][_0x514983(0x2b0)]()){if(_0x514983(0x278)!==_0x514983(0x278))this[_0x514983(0x2d7)][_0x60dfd5]=![];else return this['getUniqueTileCharaQuicksandFrameTarget']();}}return 0x0;},VisuMZ[_0x9d1216(0x360)]['Sprite_Character_updateScaleBase']=Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x34c)],Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x34c)]=function(){const _0x448ad8=_0x9d1216;if(this[_0x448ad8(0x2da)]>0x0)return;VisuMZ[_0x448ad8(0x360)][_0x448ad8(0x270)][_0x448ad8(0x25d)](this);},Sprite_Character[_0x9d1216(0x1d6)]['updatePitfallEffect']=function(){const _0x426c29=_0x9d1216;if(this['_pitfallDuration']<=0x0)return;const _0x32d558=this[_0x426c29(0x2da)];this[_0x426c29(0x339)]['x']=this[_0x426c29(0x339)]['x']*(_0x32d558-0x1)/_0x32d558,this[_0x426c29(0x339)]['y']=this[_0x426c29(0x339)]['y']*(_0x32d558-0x1)/_0x32d558,this['_pitfallDuration']--;if(this[_0x426c29(0x2da)]<=0x0){if(this[_0x426c29(0x358)])this[_0x426c29(0x358)][_0x426c29(0x1ef)]();this['finishPitfallEffect']();}},Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x1b5)]=function(){const _0x43b06e=_0x9d1216;if($gameParty[_0x43b06e(0x335)]())return;this[_0x43b06e(0x2da)]=Sprite_Character[_0x43b06e(0x37e)],this[_0x43b06e(0x324)]={'scaleX':this[_0x43b06e(0x339)]['x'],'scaleY':this[_0x43b06e(0x339)]['y'],'shadowScaleX':this[_0x43b06e(0x302)]?this['_shadowSprite'][_0x43b06e(0x339)]['x']:0x0,'shadowScaleY':this[_0x43b06e(0x302)]?this[_0x43b06e(0x302)]['scale']['y']:0x0};},Sprite_Character['prototype'][_0x9d1216(0x38c)]=function(){this['_pitfallDuration']=0x0;},Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x1a4)]=function(){const _0x4c86d5=_0x9d1216;this['_pitfallDuration']=0x0;if(!this[_0x4c86d5(0x324)])return;this['scale']['x']=this[_0x4c86d5(0x324)][_0x4c86d5(0x354)],this[_0x4c86d5(0x339)]['y']=this[_0x4c86d5(0x324)][_0x4c86d5(0x207)],this['_shadowSprite']&&('EajwM'!==_0x4c86d5(0x228)?(this[_0x4c86d5(0x302)]['scale']['x']=this[_0x4c86d5(0x324)]['shadowScaleX'],this[_0x4c86d5(0x302)][_0x4c86d5(0x339)]['y']=this['_pitfallData'][_0x4c86d5(0x2e9)]):_0x439b4b[_0x4c86d5(0x20c)]([0x1,0x2])),this[_0x4c86d5(0x324)]=undefined;},Sprite_Character['prototype'][_0x9d1216(0x3a0)]=function(){const _0xf29ea6=_0x9d1216;if(this[_0xf29ea6(0x264)]!==undefined){if('Rkdop'===_0xf29ea6(0x23a)){if(this['_isDrowning'])return;if(_0x1bcfed['hasBelowPriorityEventsXy'](this['x'],this['y']))return;if(this[_0xf29ea6(0x37c)]())return;this['_isDrowning']=!![],_0x17df22[_0xf29ea6(0x363)](_0xf29ea6(0x2a5),_0xf29ea6(0x39a),this);const _0x570ad7=_0x826444[_0xf29ea6(0x242)][_0xf29ea6(0x267)];if(_0x570ad7){const _0x1f7d3b=_0x570ad7[_0xf29ea6(0x285)](this);if(_0x1f7d3b){_0x1f7d3b[_0xf29ea6(0x2ae)]();return;}}this[_0xf29ea6(0x34d)]();}else{const _0xd22d82=Math[_0xf29ea6(0x35a)](this[_0xf29ea6(0x1ed)][_0xf29ea6(0x231)]*this[_0xf29ea6(0x264)]);this[_0xf29ea6(0x1ed)]['height']=_0xd22d82,this[_0xf29ea6(0x1ad)]();}}},Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x1f0)]=function(){const _0x4ee7f8=_0x9d1216;if(this[_0x4ee7f8(0x1c7)]<=0x0)return;const _0x4334c8=this[_0x4ee7f8(0x1c7)];this['_drowningHeightRate']=this['_drowningHeightRate']*(_0x4334c8-0x1)/_0x4334c8,this[_0x4ee7f8(0x381)](),this[_0x4ee7f8(0x1c7)]--;if(this[_0x4ee7f8(0x1c7)]<=0x0){if('WzPof'===_0x4ee7f8(0x34a)){if(this[_0x4ee7f8(0x358)])this[_0x4ee7f8(0x358)][_0x4ee7f8(0x34d)]();this['finishDrowningEffect']();}else{_0x12c9f1['UniqueTileEffects'][_0x4ee7f8(0x25c)][_0x4ee7f8(0x25d)](this);if(this[_0x4ee7f8(0x379)]())this[_0x4ee7f8(0x287)]();if(this[_0x4ee7f8(0x2e8)]())this[_0x4ee7f8(0x227)]();}}},Sprite_Character['prototype'][_0x9d1216(0x2ae)]=function(){const _0x7cb668=_0x9d1216;if($gameParty[_0x7cb668(0x335)]())return;this[_0x7cb668(0x1c7)]=Sprite_Character[_0x7cb668(0x36e)],this[_0x7cb668(0x264)]=0x1;},Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x367)]=function(){const _0x537d3c=_0x9d1216;this[_0x537d3c(0x1c7)]=0x0;},Sprite_Character['prototype']['restorePreDrowning']=function(){const _0x4a0450=_0x9d1216;this[_0x4a0450(0x1c7)]=0x0,this['_drowningHeightRate']=undefined,this[_0x4a0450(0x381)]();},Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x235)]=function(){const _0x17154b=_0x9d1216;return this['_character'][_0x17154b(0x3a3)]();},Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x2ab)]=function(){const _0x5c4799=_0x9d1216,_0x4a1022=this['patternWidth'](),_0x32fae6=this['patternHeight'](),_0x3e0be5=(this[_0x5c4799(0x214)]()+this[_0x5c4799(0x20f)]())*_0x4a1022,_0x54e6da=(this[_0x5c4799(0x206)]()+this[_0x5c4799(0x22e)]())*_0x32fae6;this['setFrame'](_0x3e0be5,_0x54e6da,_0x4a1022,_0x32fae6-this['_uniqueTileFrameMinusY']);if(this[_0x5c4799(0x268)])this[_0x5c4799(0x268)][_0x5c4799(0x1e8)](0x0,0x0,0x0,0x0);if(this[_0x5c4799(0x20e)])this['_lowerBody'][_0x5c4799(0x1e8)](0x0,0x0,0x0,0x0);},Sprite_Character[_0x9d1216(0x1d6)][_0x9d1216(0x2d9)]=function(){const _0x52ded8=_0x9d1216;return Math[_0x52ded8(0x35a)](this[_0x52ded8(0x358)][_0x52ded8(0x2df)]()*this['patternHeight']());};Imported[_0x9d1216(0x35e)]&&(Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x374)]=function(){const _0x52a162=_0x9d1216;if(this[_0x52a162(0x37b)]()){if(this[_0x52a162(0x258)]()===_0x52a162(0x1b6)){if(_0x52a162(0x3a1)===_0x52a162(0x30d)){if(this[_0x52a162(0x2ca)]())return![];if(this[_0x52a162(0x37c)]()){if(this[_0x52a162(0x343)]())return this[_0x52a162(0x209)]();if(!this[_0x52a162(0x343)]()&&this[_0x52a162(0x32a)]())return!![];}const _0x1fb520=this[_0x52a162(0x329)](),_0x920446=_0x415eb4[_0x52a162(0x2d5)](_0x1fb520['x'],_0x1fb520['y']),_0xe976f6=this['isUniqueTileAffected'](_0x920446),_0x3b04b9=_0x4c2af4[_0x52a162(0x2c6)](_0x1fb520['x'],_0x1fb520['y']);if(!this[_0x52a162(0x37b)]()||_0x25d3c4['hasBelowPriorityEventsXy'](this['x'],this['y']))return _0xe976f6&&!_0x3b04b9;return![];}else return $gameMap[_0x52a162(0x2c6)](this['x'],this['y']);}if(this[_0x52a162(0x258)]()===_0x52a162(0x2a5)){if('FmUVb'===_0x52a162(0x1e5))this[_0x52a162(0x323)]=_0xd94fdc[_0x52a162(0x331)](this[_0x52a162(0x323)]-_0xf205d7*0x4,_0x464393);else return $gameMap[_0x52a162(0x2c6)](this['x'],this['y']);}return![];}return!![];},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x24a)]=Game_Player['prototype']['canSmartRush'],Game_Player[_0x9d1216(0x1d6)]['canSmartRush']=function(){const _0x5c06f6=_0x9d1216;if(!this[_0x5c06f6(0x374)]())return![];return VisuMZ[_0x5c06f6(0x360)][_0x5c06f6(0x24a)][_0x5c06f6(0x25d)](this);},VisuMZ[_0x9d1216(0x360)]['Game_Player_canSmartBlink']=Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x2bc)],Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x2bc)]=function(_0x69eec3){const _0x17ffdc=_0x9d1216;if(!this[_0x17ffdc(0x374)]())return![];return VisuMZ[_0x17ffdc(0x360)][_0x17ffdc(0x210)]['call'](this,_0x69eec3);},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x2ee)]=Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x3a8)],Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x3a8)]=function(){const _0x4a0106=_0x9d1216;if(!this['canUniqueTileEndSmartAction']())return![];return VisuMZ[_0x4a0106(0x360)][_0x4a0106(0x2ee)][_0x4a0106(0x25d)](this);},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x39b)]=Game_Player[_0x9d1216(0x1d6)]['moveBySmartRush'],Game_Player['prototype'][_0x9d1216(0x1cf)]=function(){const _0xd88380=_0x9d1216;if(!this['canUniqueTileEndSmartAction']()){this[_0xd88380(0x2a6)]();return;}return VisuMZ[_0xd88380(0x360)][_0xd88380(0x39b)][_0xd88380(0x25d)](this);},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x221)]=function(_0x1960e2,_0x33f6dd){return![];},VisuMZ[_0x9d1216(0x360)]['Game_Player_isTileSmartJumpBreakable']=Game_Player[_0x9d1216(0x1d6)]['isTileSmartJumpBreakable'],Game_Player['prototype'][_0x9d1216(0x247)]=function(_0x2b4563,_0x2ed78c){const _0x3fbb86=_0x9d1216;if(this[_0x3fbb86(0x221)](_0x2b4563,_0x2ed78c))return!![];return VisuMZ[_0x3fbb86(0x360)][_0x3fbb86(0x378)][_0x3fbb86(0x25d)](this,_0x2b4563,_0x2ed78c);},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x2b9)]=function(_0x346c02,_0x5e922a){const _0x5c9129=_0x9d1216;if($gameMap[_0x5c9129(0x28d)](_0x346c02,_0x5e922a,_0x5c9129(0x1b6)))return $gamePlayer[_0x5c9129(0x36f)]('pitfall');if($gameMap['checkUniqueTileType'](_0x346c02,_0x5e922a,'swimming')){if(_0x5c9129(0x2e5)===_0x5c9129(0x29c)){this[_0x5c9129(0x237)]['onPitfallDead']();return;}else return $gamePlayer[_0x5c9129(0x36f)](_0x5c9129(0x2a5));}return![];},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x36a)]=Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x1bf)],Game_Player['prototype'][_0x9d1216(0x1bf)]=function(_0xf64e1d,_0x470bfa){const _0x4496a7=_0x9d1216;if(this[_0x4496a7(0x2b9)](_0xf64e1d,_0x470bfa))return!![];return VisuMZ[_0x4496a7(0x360)][_0x4496a7(0x36a)][_0x4496a7(0x25d)](this,_0xf64e1d,_0x470bfa);},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x305)]=function(_0x540a10,_0x4531b3){return![];},VisuMZ['UniqueTileEffects'][_0x9d1216(0x39f)]=Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x326)],Game_Player['prototype']['isTileSmartBlinkBreakable']=function(_0x3b61d5,_0x3fedb7){const _0x3300c9=_0x9d1216;if(this[_0x3300c9(0x305)](_0x3b61d5,_0x3fedb7))return!![];return VisuMZ[_0x3300c9(0x360)][_0x3300c9(0x39f)][_0x3300c9(0x25d)](this,_0x3b61d5,_0x3fedb7);},Game_Player['prototype'][_0x9d1216(0x33e)]=function(_0x2777eb,_0x19009a){return![];},VisuMZ[_0x9d1216(0x360)]['Game_Player_isTileSmartBlinkCompatible']=Game_Player[_0x9d1216(0x1d6)]['isTileSmartBlinkCompatible'],Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x338)]=function(_0x6062a0,_0xf73f5a){const _0x59a01d=_0x9d1216;if(this[_0x59a01d(0x33e)](_0x6062a0,_0xf73f5a))return!![];return VisuMZ[_0x59a01d(0x360)][_0x59a01d(0x2bd)][_0x59a01d(0x25d)](this,_0x6062a0,_0xf73f5a);});;Imported[_0x9d1216(0x1c1)]&&(Game_Player['prototype'][_0x9d1216(0x26c)]=function(_0x42087e){return!![];},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x2fd)]=Game_Event[_0x9d1216(0x1d6)][_0x9d1216(0x1c4)],Game_Event[_0x9d1216(0x1d6)][_0x9d1216(0x1c4)]=function(){const _0x5285e9=_0x9d1216;if(!$gamePlayer['hasPushConditionsUniqueTiles'](this))return![];return VisuMZ['UniqueTileEffects'][_0x5285e9(0x2fd)][_0x5285e9(0x25d)](this);},Game_Player[_0x9d1216(0x1d6)]['hasPullConditionsUniqueTiles']=function(_0x19c439){return!![];},VisuMZ['UniqueTileEffects'][_0x9d1216(0x29a)]=Game_Event['prototype'][_0x9d1216(0x1da)],Game_Event[_0x9d1216(0x1d6)][_0x9d1216(0x1da)]=function(){const _0x1139e3=_0x9d1216;if(!$gamePlayer['hasPullConditionsUniqueTiles'](this))return![];return VisuMZ[_0x1139e3(0x360)][_0x1139e3(0x29a)]['call'](this);},Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x21c)]=function(_0x2a4214,_0x3a58d9){const _0x19fc95=_0x9d1216;if($gameMap[_0x19fc95(0x2e1)](_0x2a4214,_0x3a58d9)){if(_0x19fc95(0x24e)==='KceBe')_0x4ab57c['MovementEffects']['ApplyFootstepSfxModifiers'](_0x24e6d3,_0x4eef2a);else{const _0x269478=$gameMap[_0x19fc95(0x2d5)](_0x2a4214,_0x3a58d9);if(_0x269478==='pitfall'&&$gameMap['hasBelowPriorityEventsXy'](_0x2a4214,_0x3a58d9))return!![];if($gameMap['isSwimmingTileWithBridge'](this['x'],this['y']))return!![];return![];}}return!![];},VisuMZ[_0x9d1216(0x360)][_0x9d1216(0x32b)]=Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x27b)],Game_Player[_0x9d1216(0x1d6)][_0x9d1216(0x27b)]=function(_0x1e3828,_0x3f4e7c,_0x13616c){const _0x58befe=_0x9d1216,_0x29b684=0xa-this[_0x58befe(0x2f9)]();if(_0x29b684%0x2!==0x0)return;const _0x52d472=$gameMap[_0x58befe(0x1d9)](this['x'],_0x29b684),_0x1a398c=$gameMap[_0x58befe(0x23b)](this['y'],_0x29b684);if(!this[_0x58befe(0x21c)](_0x52d472,_0x1a398c))return;VisuMZ[_0x58befe(0x360)][_0x58befe(0x32b)]['call'](this,_0x1e3828,_0x3f4e7c,_0x13616c);});;