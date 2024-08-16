//=============================================================================
// VisuStella MZ - Lighting Effects
// VisuMZ_2_LightingEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_LightingEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.LightingEffects = VisuMZ.LightingEffects || {};
VisuMZ.LightingEffects.version = 1.08;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.08] [LightingEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Lighting_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ lacks the ability to provide lighting by default. During scenes
 * where it is night, the usage of tones is not adequate either since there is
 * no way to illuminate the darkness. This plugin remedies that problem by
 * providing lighting effects that pierce the darkness. From radial lights to
 * conical lights and applying various lighting behaviors, this plugin covers
 * the general lighting needs that RPG Maker MZ does not.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Auto-Tints allow for maps to automatically load up a specific screen tint
 *   upon player entry. Screen tints can be custom or based off presets.
 * * Apply darkness overlays to maps using custom colors or presets. Change
 *   them midway through the game using Plugin Commands.
 * * Radial lights can be added to pierce the darkness overlays. They will
 *   light up nearby surroundings in a circular area.
 * * Conical lights can be used to portray light in a cone-like direction and
 *   simulate the light coming from flashlights.
 * * Adjust the offset settings for conical lights, such at the source of the
 *   light will come from an actor or event's hand positions rather than their
 *   chest or face.
 * * Adjusted conical light offsets can vary for different actors and/or events
 *   in case they have different body structures. Change these settings through
 *   notetags, Plugin Commands, or Plugin Parameters.
 * * Apply radial and conical lights to vehicles. They can have different
 *   settings applied when they're inactive or being driven. These settings can
 *   be adjusted separately via Plugin Parameters or Plugin Commands!
 * * Assign lights via a variety of ways such as easy to use notetags, page-
 *   specific comment tags, and Plugin Commands!
 * * Use either images or have the plugin generate them ingame using various
 *   notetags, Plugin Parameters, or Plugin Commands!
 * * Apply optional light behaviors to lights such as blinking, flickering,
 *   flashing, flares, and more!
 * * Use patterns for light fluctuation behaviors instead of randoms.
 * * Spawn lights unattached to the player character, followers, or events.
 *   These spawned lights can have unique trajectories akin to what would be
 *   seen at a light show.
 * * The darkness overlay also appears in battle. Actors and enemies will have
 *   their own individual radial light settings that they can use specifically
 *   for the battle-scene only. There will be no conical lights for battle.
 * * Options added in the Options menu to allow players to turn on/off any
 *   unwanted light behaviors that may bother them. Examples include blinking
 *   lights, flickering lights, flashing, flares, etc.
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
 * * VisuMZ_1_EventsMoveCore
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
 * Here are some instructions to get yourself started quickly on using the
 * Lighting Effects plugin.
 * 
 * ---
 * 
 * Step 1: Create a map with a darkness overlay.
 * 
 * 1. Create a new map (or use an old one if you know what you're doing).
 * 2. Right click the map's name in the editor and go to the Map's Properties.
 * 3. Add the <Overlay: Night> notetag into the map's notebox.
 * 4. For more information on the types of settings you can pick, look in the
 *    help file.
 * 
 * *NOTE* Keep in mind that whenever you enter this map, the darkness overlay
 * will shift to "Night". If you don't want this to happen and want to shift it
 * dynamically, use the Plugin Command "OVERLAY: Change to Preset Color" or
 * "OVERLAY: Change to Custom Color" to change them instead.
 * 
 * ---
 * 
 * Step 2: Create an event with a radial light.
 * 
 * 1. Create a new event on the map.
 * 2. Add a "Comment" event to the event (you can use the notebox, too, but
 *    it's tiny, and the comment box is more visible).
 * 3. Inside the comment (or notebox), add in the following tags:
 * 
 *    <Radial Light Color: Light Yellow>
 *    <Radial Light Radius: 100>
 *    <Radial Light Intensity: 25%>
 *    <Radial Light Opacity: 50%>
 * 
 * 4. You can leave any of them out, but these four are selected as the main
 *    notetags to use to adjust how radial lights behave.
 * 5. For more information on the types of settings you can apply to radial
 *    lights, look in the help file.
 * 6. Let's see how this looks in-game!
 * 7. Save the game project.
 * 8. Let's test it out!
 * 
 * ---
 * 
 * Step 3: Play Test! Checking out the Radial Light!
 * 
 * 1. You should notice that the screen is darker than normal with the "Night"
 *    color as the darkness overlay.
 * 2. Find the event you've made. It should be emitting a light.
 * 3. The player, by default, assuming that no other Plugin Parameters have
 *    been changed, should also be emitting a faint light and has a conical
 *    light on, too.
 * 4. Everything working? Awesome, let's create an event with a conical light
 *    this time.
 * 
 * ---
 * 
 * Step 4: Create an event with a conical light.
 * 
 * 1. Create another new event on the map.
 * 2. Add a "Comment" event to the event (once again, you can use the notebox,
 *    too if you want but we prefer the larger comment box).
 * 3. Inside the comment (or notebox), add in the following tags:
 * 
 *    <Conical Light Color: Light Yellow>
 *    <Conical Light Radius: 300>
 *    <Conical Light Source Radius: 40>
 *    <Conical Light Intensity: 25%>
 *    <Conical Light Opacity: 80%>
 * 
 * 4. You can leave any of the above out, but these are the usual suspects when
 *    applying a conical light to an event.
 * 5. The "Source Radius" notetag refers to the light source point from which
 *    the conical light extends out of.
 * 6. For more information on the types of settings you can apply to radial
 *    lights, look in the help file.
 * 7. Let's see how this looks in-game!
 * 8. Save the game project.
 * 9. Let's test it out!
 * 
 * ---
 * 
 * Step 5: Play Test! Checking out the Conical Light!
 * 
 * 1. Look for the new event you've made. It should be holding a conical light,
 *    similar to your player.
 * 2. Conical lights will face whatever direction its user is facing.
 * 3. By default, the source point should be coming from the user's hand.
 * 4. This can be changed via notetags, Plugin Parameters, or Plugin Commands.
 * 5. Look in the help file for more information.
 * 6. The lights look kinda boring the way they are though. Let's give them
 *    some typical light behaviors.
 * 
 * ---
 * 
 * Step 6: Applying Behaviors
 * 
 * 1. Open your first event with the radial light and add these tags:
 * 
 *    <Radial Light Blink Rate: 3%>
 *    <Radial Light Pulse Rate: 20%>
 * 
 * 2. This will cause the radial light tied to this event to change slightly
 *    while waiting. This imitates how certain light bulbs work although there
 *    are other patterns you can use.
 * 3. Look in the help file for more behavior notetags you can use.
 * 4. Let's modify the conical light event and add these tags:
 * 
 *    <Conical Light Flicker Rate: 2%>
 *    <Conical Light Glow Rate: 10%>
 * 
 * 5. This will cause the conical light tied to this event to also change ever
 *    so slightly while waiting. Like with the other, this also imitates how
 *    flash bulbs work although there are other pattners you can use.
 * 6. Check the help file out for more behavior types to use with these lights.
 * 7. Let's see how this looks in-game!
 * 8. Save the game project.
 * 9. Let's test it out!
 * 
 * ---
 * 
 * Step 7: Play Test! Checking out Light Behaviors!
 * 
 * 1. Find the two events you've altered.
 * 2. You'll notice that the lights don't stay static the way they are. One
 *    will pulse back and forth while the other will have its opacity oscillate
 *    down and back up.
 * 3. Lighting behaviors make the atmosphere less boring even if nothing is
 *    happening on screen.
 * 4. These behaviors extend to blinking, flickering, flashing, flares, glows,
 *    pulses, and even custom patterns.
 * 5. For more information, check out the help file.
 * 
 * ---
 * 
 * And with that, you should have a better grasp on a few of the things the
 * Lighting Effects plugin is capable of.
 * 
 * ---
 *
 * ============================================================================
 * Keeping FPS Stable
 * ============================================================================
 * 
 * As this is a plugin that adds special effects to your game, you do have to
 * be mindful about how you use the various Lighting Effects features or else
 * your game will face FPS drops.
 *
 * ---
 * 
 * Here are a few things to keep in mind:
 * 
 * 1. Lighting Effects work best on small to medium sized maps. Anything below
 *    72x72 tiles in size is ideal. This also puts less stress on RPG Maker MZ
 *    even if you aren't using Lighting Effects for that map as there are less
 *    tiles to process in regards to the tilemap shader.
 * 
 * 2. Don't go overboard with Lighting Effect events. The more events there are
 *    for lighting effects, the more the player's GPU will act up. Keep the
 *    event count low and there will be less FPS drops. Anything below 80
 *    events is ideal. However, performances may vary on different computers.
 *    This is also a good practice to keep in mind for maps that aren't using
 *    Lighting Effects either.
 * 
 * 3. Keep spawned lights to a minimum. Generally speaking, anything under 128
 *    spawned lights on a map at a time is a good metric to keep in mind.
 *    However, performances may vary on different computers.
 * 
 * ---
 * 
 * We are NOT responsible for irresponsible usage of this plugin that pushes
 * graphical processing to their absolute limitations.
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
 * VisuMZ_1_BattleCore
 * 
 * Without the VisuStella MZ Battle Core installed in the same project, there
 * will be no darkness overlay in battle and as such, no lighting effects. The
 * Battle Core provides the needed architecture for lighting effects to go
 * through properly.
 * 
 * ---
 * 
 * VisuMZ_2_WeatherEffects
 * 
 * Weather patterns placed on the lower layer will be affected by the darkness
 * overlay that the VisuStella MZ Lighting Effects plugin utilizes. This means
 * that even the supposively "brighter" weather patterns will be dimmed out
 * (such as the Flame Wall or Aurora to name a few). To deal with this, use the
 * Lighting Effects plugin's "Auto-Light Regions" and mark the parallax visible
 * tiles with those said regions.
 * 
 * Weather patterns placed on the upper layer will not be affected by the
 * darkness overlay in order to allow the weather have better contrast in
 * addition to following RPG Maker MZ's decision to not have weather affected
 * by tints either. If you want to tint the upper layer weather, you can add
 * the tint manually through the weather pattern's custom Image Settings and
 * apply a hue.
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
 * === Auto-Tint-Related Notetags ===
 * 
 * ---
 *
 * <Auto-Tint: Normal>
 * <Auto-Tint: Dark>
 * <Auto-Tint: Sepia>
 * <Auto-Tint: Sunset>
 * <Auto-Tint: Night>
 *
 * - Used for: Map Notetags
 * - Automatically tints the screen upon map entry with a preset tone.
 * - Screen tint preset values are based on RPG Maker MZ's default presets.
 * - Keep in minds that lights do not pierce through tones.
 *
 * ---
 *
 * <Auto-Tint: r, g, b, k>
 *
 * - Used for: Map Notetags
 * - Automatically tints the screen upon map entry with a custom tone.
 * - Replace 'r' with a number representing the red tone value (-255 to 255).
 * - Replace 'g' with a number representing the green tone value (-255 to 255).
 * - Replace 'b' with a number representing the blue tone value (-255 to 255).
 * - Replace 'k' with a number representing the grey tone value (0 to 255).
 * - Values that exceed -255 or 255 will be automatically timmed down.
 * - Grey values that are negative will have their absolute value taken of.
 * - Keep in minds that lights do not pierce through tones.
 *
 * ---
 * 
 * === Darkness Overlay-Related Notetags ===
 * 
 * ---
 * 
 * <Overlay: name>
 * 
 * - Used for: Map Notetags
 * - Applies a darkness overlay to the map that lights can penetrate through.
 * - Replace 'name' with any of the following preset names:
 *   - Normal, Dawn, Day, Dusk, Night
 *   - White, Black, Red, Orange, Yellow, Green, Cyan, Blue, Purple, Magenta,
 *     Pink, Brown
 *   - Light Red, Light Orange, Light Yellow, Light Green, Light Cyan,
 *     Light Blue, Light Purple, Light Magenta, Light Pink, Light Brown
 *   - Dark Red, Dark Orange, Dark Yellow, Dark Green, Dark Cyan,
 *     Dark Blue, Dark Purple, Dark Magenta, Dark Pink, Dark Brown
 * - Some of the above presets automatically adjust opacity levels to certain
 *   values. Otherwise, they will be at 255.
 * 
 * ---
 * 
 * <Overlay Color: #rrggbb>
 * 
 * - Used for: Map Notetags
 * - Applies a darkness overlay using a custom color.
 * - Replace 'rr' with a hexadecimal value for red.
 * - Replace 'gg' with a hexadecimal value for green.
 * - Replace 'bb' with a hexadecimal value for blue.
 * - Leave the '#' in place.
 * - If you are unsure of what hexadecimal value your color is, please use an
 *   online site like: https://htmlcolorcodes.com/
 * - These settings do not adjust opacity levels.
 * 
 * ---
 * 
 * <Overlay Opacity: x>
 * 
 * - Used for: Map Notetags
 * - Adjusts the darkness overlay's opacity level.
 * - Replace 'x' with a number value from 0 to 255, where 0 is transparent
 *   and 255 is opaque.
 * 
 * ---
 * 
 * <Overlay Opacity: x%>
 * 
 * - Used for: Map Notetags
 * - Adjusts the darkness overlay's opacity level by rate.
 * - Replace 'x' with a number value from 0 to 100, where 0% is transparent
 *   and 100% is opaque.
 * 
 * ---
 * 
 * <No Overlay>
 * 
 * - Used for: Map Notetags
 * - For the maps where you don't want there to be any overlay, but you don't
 *   want this to affect the other maps using them.
 * 
 * ---
 * 
 * === Anti-Light-Related Notetags ===
 * 
 * ---
 * 
 * <Hard Anti-Light Region: x>
 * <Hard Anti-Light Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Tiles marked by these regions won't have any light shown on them.
 *   - This will use hard edges.
 *   - This will override the settings found in the Plugin Parameters.
 *   - If this notetag is not used, use the settings in the Plugin Parameters
 *     instead for the map.
 *   - This does NOT work with looping maps.
 * - This does NOT block light from going to the other side. If the light
 *   radius is large enough, it will pierce through to the other side. It just
 *   won't be visible on the region marked tiles.
 * - Replace 'x' with a number representing the region ID to function as an
 *   anti-light tile marker.
 *   - You cannot use region 0. Use a number from 1 to 255 instead.
 * 
 * ---
 * 
 * <Hard Anti-Light Terrain Tag: x>
 * <Hard Anti-Light Terrain Tags: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Tiles marked by these terrain tags won't have any light shown on them.
 *   - This will use hard edges.
 *   - This will override the settings found in the Plugin Parameters.
 *   - If this notetag is not used, use the settings in the Plugin Parameters
 *     instead for the map.
 *   - This does NOT work with looping maps.
 * - This does NOT block light from going to the other side. If the light
 *   radius is large enough, it will pierce through to the other side. It just
 *   won't be visible on the terrain tag marked tiles.
 * - Replace 'x' with a number representing the terrain tag to function as an
 *   anti-light tile marker.
 *   - You cannot use terrain tag 0. Use a number from 1 to 7 instead.
 * 
 * ---
 * 
 * <Soft Anti-Light Region: x>
 * <Soft Anti-Light Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Tiles marked by these regions won't have any light shown on them.
 *   - This will use soft edges.
 *   - This will override the settings found in the Plugin Parameters.
 *   - If this notetag is not used, use the settings in the Plugin Parameters
 *     instead for the map.
 *   - This does NOT work with looping maps.
 * - This does NOT block light from going to the other side. If the light
 *   radius is large enough, it will pierce through to the other side. It just
 *   won't be visible on the region marked tiles.
 * - Replace 'x' with a number representing the region ID to function as an
 *   anti-light tile marker.
 *   - You cannot use region 0. Use a number from 1 to 255 instead.
 * 
 * ---
 * 
 * <Soft Anti-Light Terrain Tag: x>
 * <Soft Anti-Light Terrain Tags: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Tiles marked by these terrain tags won't have any light shown on them.
 *   - This will use soft edges.
 *   - This will override the settings found in the Plugin Parameters.
 *   - If this notetag is not used, use the settings in the Plugin Parameters
 *     instead for the map.
 *   - This does NOT work with looping maps.
 * - This does NOT block light from going to the other side. If the light
 *   radius is large enough, it will pierce through to the other side. It just
 *   won't be visible on the terrain tag marked tiles.
 * - Replace 'x' with a number representing the terrain tag to function as an
 *   anti-light tile marker.
 *   - You cannot use terrain tag 0. Use a number from 1 to 7 instead.
 * 
 * ---
 * 
 * === Radial Light General-Related Notetags ===
 * 
 * Using this notetag will override the default settings found in the Plugin
 * Parameters provided that they are adjusting already present settings.
 * 
 * ---
 * 
 * <Radial Light>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Quick and simple setup to add radial lights to this event.
 * - Using this notetag will enable radial lights for this event.
 * - This will use the default settings found in the Plugin Parameters for
 *   Event Radial Lights.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <No Radial Light>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Disables radial lights for this event.
 * - Primarily used if the default settings for Event Radial Lights would have
 *   the radial light enabled.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Filename: filename>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Uses an image instead of generated radial lights.
 *   - Using this notetag will lock out the usage of generated radial light
 *     notetags found below.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 * - Image will be centered on the target where the center of the image is the
 *   anchor point and will be rotated.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Color: name>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Creates a generated radial light using a preset color.
 *   - This notetag cannot be used with <Radial Light Filename: filename>.
 * - Replace 'name' with any of the following:
 *   - Normal, Dawn, Day, Dusk, Night
 *   - White, Black, Red, Orange, Yellow, Green, Cyan, Blue, Purple, Magenta,
 *     Pink, Brown
 *   - Light Red, Light Orange, Light Yellow, Light Green, Light Cyan,
 *     Light Blue, Light Purple, Light Magenta, Light Pink, Light Brown
 *   - Dark Red, Dark Orange, Dark Yellow, Dark Green, Dark Cyan,
 *     Dark Blue, Dark Purple, Dark Magenta, Dark Pink, Dark Brown
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Color: #rrggbb>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Creates a generated radial light using a custom color.
 *   - This notetag cannot be used with <Radial Light Filename: filename>.
 * - Replace 'rr' with a hexadecimal value for red.
 * - Replace 'gg' with a hexadecimal value for green.
 * - Replace 'bb' with a hexadecimal value for blue.
 * - Leave the '#' in place.
 * - If you are unsure of what hexadecimal value your color is, please use an
 *   online site like: https://htmlcolorcodes.com/
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Radius: r>
 * <Radial Light Diameter: d>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Determines the radius/diameter of the generated radial light.
 *   - This notetag cannot be used with <Radial Light Filename: filename>.
 * - Replace 'r' with a number representing the pixel radius of the generated
 *   radial light.
 * - Replace 'd' with a number representing the pixel diameter of the generated
 *   radial light.
 * - Use one or the other.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 *   - If this notetag is used, this will disable the "Auto-Calc Radius" Plugin
 *     Parameter for this specific actor/enemy.
 * 
 * ---
 * 
 * <Radial Light Intensity: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Determines the light intensity of the generated radial light.
 *   - This notetag cannot be used with <Radial Light Filename: filename>.
 *   - Intensity determines how much of the light's luminosity extends outwards
 *     at full strength between fading away.
 * - Replace 'x' with a number between 0 and 100 representing the intensity
 *   percentage for the generated radial light.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Angle: x>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Determines the initial angle of the generated radial light.
 *   - Can be used with both image and generated radial lights.
 *   - Best used with the <Radial Light Filename: filename> notetag in order to
 *     see any changes.
 * - Replace 'x' with a number between 0 and 360 representing the angle.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Rotate Speed: +x>
 * <Radial Light Rotate Speed: -x>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Determines the speed at which the radial light rotates.
 *   - Can be used with both image and generated radial lights.
 *   - Best used with the <Radial Light Filename: filename> notetag in order to
 *     see any changes.
 * - Replace 'x' with a number representing how slow (smaller numbers) or fast
 *   (larger numbers) the light rotates.
 *   - Use negative numbers for a reverser rotation going counter-clockwise.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Blend Mode: Normal>
 * <Radial Light Blend Mode: Additive>
 * <Radial Light Blend Mode: Multiply>
 * <Radial Light Blend Mode: Screen>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Changes the blend mode of the radial light.
 *   - Can be used with both image and generated radial lights.
 *   - We recommend that you use 'screen'.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Opacity: x>
 * <Radial Light Opacity: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Changes the opacity level of the radial light.
 *   - Can be used with both image and generated radial lights.
 *   - The opacity of a light determines how bright (larger numbers) or dim
 *     (smaller numbers) it is.
 * - Replace 'x' with a number between 0 and 255 to determine how dim (smaller
 *   numbers) or bright (larger numbers) the light is.
 * - Replace 'x%' with a percentage between 0% and 100% to determine how
 *   dim (smaller numbers) or bright (larger numbers) the light is.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Offset: +x, +y>
 * <Radial Light Offset: -x, -y>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Offsets the position of the radial light, which is normally centered on
 *   the sprite it is coming from.
 *   - Can be used with both image and generated radial lights.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the radial light's x and y coordinates by.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * === Radial Light Behavior-Related Notetags ===
 * 
 * Using this notetag will override the default settings found in the Plugin
 * Parameters provided that they are adjusting already present settings.
 * 
 * ---
 * 
 * <Radial Light Blink Rate: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts the frequency at which the radial light will blink.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Blink Modifier: +x%>
 * <Radial Light Blink Modifier: -x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts a static multiplicative opacity modifier at which lights will
 *   become brighter (+) or dimmer (-) when flashing.
 * - Replace 'x' with a percentage representing the static multiplier increase.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Flicker Rate: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts the frequency at which the radial light will flicker.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Flicker Modifier: +x%>
 * <Radial Light Flicker Modifier: -x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts a randomized multiplicative opacity modifier at which lights will
 *   become brighter (+) or dimmer (-) when flashing.
 * - Replace 'x' with a percentage representing the randomized multiplier
 *   increase.
 *   - Randomized multiplier will range anywhere from 0 to the number itself.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Flash Rate: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts the frequency at which the radial light will flash.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Flash Modifier: +x%>
 * <Radial Light Flash Modifier: -x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts a static additive opacity modifier at which lights will become
 *   brighter (+) or dimmer (-) when flashing.
 * - Replace 'x' with a percentage representing the static additional change.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Flare Rate: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts the frequency at which the radial light will flare.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Flare Modifier: +x%>
 * <Radial Light Flare Modifier: -x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts a randomized additive opacity modifier at which lights will become
 *   brighter (+) or dimmer (-) when flaring up.
 * - Replace 'x' with a percentage representing the randomized multiplier
 *   increase.
 *   - Randomized multiplier will range anywhere from 0 to the number itself.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Glow Rate: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts how much the radial light will oscillate its brightness back and
 *   forth in a glow-like fashion.
 * - Replace 'x' with a percentage representing the change in brightness.
 *   - Lower numbers mean less fluctuation.
 *   - Higher numbers mean more fluctuation.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Glow Speed: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts the speed at which the glow oscillates back and forth.
 * - Replace 'x' with a percentage representing the speed.
 *   - Lower numbers mean slower.
 *   - Higher numbers mean faster.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Glow Random>
 * <Radial Light Glow No Random>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adds a random seed (or not) to the glow oscillation. This can be used to
 *   put multiple lights glowing at different starting points.
 * - This is used to offset the default RNG settings found in the default
 *   Plugin Parameters.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Pulse Rate: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts how much the radial light will oscillate its radius back and
 *   forth in a pulse-like fashion.
 * - Replace 'x' with a percentage representing the change in size.
 *   - Lower numbers mean less shrinking.
 *   - Higher numbers mean more shrinking.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Pulse Speed: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts the speed at which the pulse oscillates back and forth.
 * - Replace 'x' with a percentage representing the speed.
 *   - Lower numbers mean slower.
 *   - Higher numbers mean faster.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Pulse Random>
 * <Radial Light Pulse No Random>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adds a random seed (or not) to the pulse oscillation. This can be used to
 *   put multiple lights pulsing at different starting points.
 * - This is used to offset the default RNG settings found in the default
 *   Plugin Parameters.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Pattern Type: name>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Uses a premade pattern by this plugin. The pattern will change the
 *   brightness of the light in a sequenced pattern.
 * - Replace 'name' with any of the following text:
 *   - none, normal
 *   - fluorescent, halogen, incandescent
 *   - candle, torch, campfire
 *   - fast strobe, slow strobe
 *   - strong pulse, medium pulse, slow pulse
 *   - underwater
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Custom Pattern: x>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Uses a custom pattern determined by you, the game dev, on how the light's
 *   brightness will change over time.
 * - Replace 'x' with letters of the alphabet from 'a' to 'z'.
 *   - 'a' is completely transparent.
 *   - 'm' is midway in brightness.
 *   - 'z' is the brightest the light can be.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * - Examples:
 *   - <Radial Light Custom Pattern: mmmmmaaaaammmmmaaaaaabcdefgabcdefg>
 *   - <Radial Light Custom Pattern: nmonqnmomnmomomno>
 *   - <Radial Light Custom Pattern: abcdefghijklmnopqrrqponmlkjihgfedcba>
 * 
 * ---
 * 
 * <Radial Light Pattern Delay: x>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Determines how many frames to wait before going to the next part of the
 *   preset pattern and/or custom pattern.
 * - Replace 'x' with a number representing the frames the radial light needs
 *   to wait before moving forward in the pattern.
 *   - Lower numbers mean faster (minimum: 1).
 *   - Higher numbers mean slower.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * === Conical Light General-Related Notetags ===
 * 
 * Using this notetag will override the default settings found in the Plugin
 * Parameters provided that they are adjusting already present settings.
 * 
 * ---
 * 
 * <Conical Light>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Quick and simple setup to add conical lights to this event.
 * - Using this notetag will enable conical lights for this event.
 * - This will use the default settings found in the Plugin Parameters for
 *   Event Conical Lights.
 * 
 * ---
 * 
 * <No Conical Light>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Disables conical lights for this event.
 * - Primarily used if the default settings for Event Conical Lights would have
 *   the conical light enabled.
 * 
 * ---
 * 
 * <Conical Light Filename: filename>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Uses an image instead of generated conical lights.
 *   - Using this notetag will lock out the usage of generated conical light
 *     notetags found below.
 *   - By default, you should have your conical light image face the right at
 *     "0 degrees".
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light File Angle Offset: +x>
 * <Conical Light File Angle Offset: -x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines how much to offset the angle of the conical light image by.
 * - Replace 'x' with a number from 0 to 360 representing the angle offset.
 *   - Negatives are allowed in order to quickly go the other way.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light File Anchor: x, y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determine the anchor points for the conical light image.
 * - Replace 'x' and 'y' with numbers between 0 and 1.
 *   - For x: 0.0 is left-aligned, 0.5 is center-aligned, 1.0 is right-aligned.
 *   - For y: 0.0 is top-aligned, 0.5 is middle-aligned, 1.0 is bottom-aligned.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Color: name>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Creates a generated conical light using a preset color.
 *   - This notetag cannot be used with <Conical Light Filename: filename>.
 * - Replace 'name' with any of the following:
 *   - Normal, Dawn, Day, Dusk, Night
 *   - White, Black, Red, Orange, Yellow, Green, Cyan, Blue, Purple, Magenta,
 *     Pink, Brown
 *   - Light Red, Light Orange, Light Yellow, Light Green, Light Cyan,
 *     Light Blue, Light Purple, Light Magenta, Light Pink, Light Brown
 *   - Dark Red, Dark Orange, Dark Yellow, Dark Green, Dark Cyan,
 *     Dark Blue, Dark Purple, Dark Magenta, Dark Pink, Dark Brown
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Color: #rrggbb>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Creates a generated conical light using a custom color.
 *   - This notetag cannot be used with <Conical Light Filename: filename>.
 * - Replace 'rr' with a hexadecimal value for red.
 * - Replace 'gg' with a hexadecimal value for green.
 * - Replace 'bb' with a hexadecimal value for blue.
 * - Leave the '#' in place.
 * - If you are unsure of what hexadecimal value your color is, please use an
 *   online site like: https://htmlcolorcodes.com/
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Radius: r>
 * <Conical Light Diameter: d>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the radius/diameter of the generated conical light.
 *   - This notetag cannot be used with <Conical Light Filename: filename>.
 * - Replace 'r' with a number representing the pixel radius of the generated
 *   conical light.
 * - Replace 'd' with a number representing the pixel diameter of the generated
 *   conical light.
 * - Use one or the other.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Source Radius: r>
 * <Conical Light Source Diameter: d>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the radius/diameter of the generated conical light's light
 *   source, creating a little circle from where the cone starts.
 *   - This notetag cannot be used with <Conical Light Filename: filename>.
 * - Replace 'r' with a number representing the pixel radius of the generated
 *   conical light.
 * - Replace 'd' with a number representing the pixel diameter of the generated
 *   conical light.
 * - Use one or the other.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Intensity: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the light intensity of the generated conical light.
 *   - This notetag cannot be used with <Conical Light Filename: filename>.
 *   - Intensity determines how much of the light's luminosity extends outwards
 *     at full strength between fading away.
 * - Replace 'x' with a number between 0 and 100 representing the intensity
 *   percentage for the generated conical light.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Blend Mode: Normal>
 * <Conical Light Blend Mode: Additive>
 * <Conical Light Blend Mode: Multiply>
 * <Conical Light Blend Mode: Screen>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the blend mode of the conical light.
 *   - Can be used with both image and generated conical lights.
 *   - We recommend that you use 'screen'.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Opacity: x>
 * <Conical Light Opacity: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the opacity level of the conical light.
 *   - Can be used with both image and generated conical lights.
 *   - The opacity of a light determines how bright (larger numbers) or dim
 *     (smaller numbers) it is.
 * - Replace 'x' with a number between 0 and 255 to determine how dim (smaller
 *   numbers) or bright (larger numbers) the light is.
 * - Replace 'x%' with a percentage between 0% and 100% to determine how
 *   dim (smaller numbers) or bright (larger numbers) the light is.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Angle: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the arc angle of the generated conical light.
 *   - The larger the angle, the wider the arc.
 * - Replace 'x' with a number between 0 and 360 representing the angle.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Angle Sway: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines how many degrees the light will sway back and forth.
 *   - The larger the angle, the wider the sway.
 * - Replace 'x' with a number between 0 and 360 representing the degrees the
 *   light will sway.
 *   - Use 0 for no sway.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Sway Speed: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines how fast the light will sway back and forth.
 * - Replace 'x' with a percentage from 1% to 100%.
 *   - Lower numbers mean slower.
 *   - Higher numbers mean faster.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Sway Random>
 * <Conical Light Sway No Random>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adds a random seed (or not) to the sway oscillation. This can be used to
 *   put multiple lights swaying at different starting points.
 * - This is used to offset the default RNG settings found in the default
 *   Plugin Parameters.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Force Direction: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Forces the conical light to face a certain direction.
 *   - This is primarily used for tile events or direction fixed events that
 *     would otherwise lock a conical light to face a certain direction.
 * - Replace 'x' with any of the following:
 *   - none
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Use 'none' to remove any forced directions.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Follow Cursor>
 * <Conical Light Not Follow Cursor>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the conical light to face towards the direction of the mouse
 *   cursor if it's within the game client window.
 * - This is used to offset the default settings found in the default
 *   Plugin Parameters.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Hand Offset>
 * <Conical Light Center Offset>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the conical light to follow either the hand-focused offsets or
 *   base the offset at the center of the character.
 * - This is used to offset the default settings found in the default
 *   Plugin Parameters.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Offset: +x, +y>
 * <Conical Light Offset: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Offsets the position of the conical light, which is normally centered on
 *   the sprite it is coming from.
 *   - Can be used with both image and generated conical lights.
 *   - This is NOT used with the <Conical Light Hand Offset> notetag.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the conical light's x and y coordinates by.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light d Pattern p: +x, +y>
 * <Conical Light d Pattern p: -x, -y>
 * <Conical Light d Pattern p: +x, -y>
 * <Conical Light d Pattern p: -x, +y>
 * 
 * - Used for: Actor Notetags, Event Notetags, and Event Page Comment Tags
 * - When using hand-based offsets for the conical light, this will cause the
 *   light source to come from the target's hand instead of their chest/face.
 * - For actors, the light source origin will vary depending on who is in the
 *   lead, in case certain actors may be left or right handed, or if happen to
 *   be a robot that has the light shining from their eyes.
 * - Replace 'd' with text representing the direction the offset is for. Use
 *   any of the directions below:
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Replace 'p' with a number representing the pattern index. Patterns are
 *   the individual frames used in the sprite when walking.
 *   - By default, RPG Maker MZ sprites have the following patterns:
 *   - Left frame is pattern 0.
 *   - Center frame is pattern 1.
 *   - Right frame is pattern 2.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the conical light's x and y coordinates by.
 * - Examples:
 *   - <Conical Light Down Pattern 0: +12, +14>
 *   - <Conical Light Left Pattern 1: +4, +16>
 *   - <Conical Light Right Pattern 2: -6, +16>
 * 
 * ---
 * 
 * === Conical Light Behavior-Related Notetags ===
 * 
 * Using this notetag will override the default settings found in the Plugin
 * Parameters provided that they are adjusting already present settings.
 * 
 * ---
 * 
 * <Conical Light Blink Rate: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the frequency at which the conical light will blink.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * 
 * ---
 * 
 * <Conical Light Blink Modifier: +x%>
 * <Conical Light Blink Modifier: -x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts a static multiplicative opacity modifier at which lights will
 *   become brighter (+) or dimmer (-) when flashing.
 * - Replace 'x' with a percentage representing the static multiplier increase.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * 
 * ---
 * 
 * <Conical Light Flicker Rate: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the frequency at which the conical light will flicker.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * 
 * ---
 * 
 * <Conical Light Flicker Modifier: +x%>
 * <Conical Light Flicker Modifier: -x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts a randomized multiplicative opacity modifier at which lights will
 *   become brighter (+) or dimmer (-) when flashing.
 * - Replace 'x' with a percentage representing the randomized multiplier
 *   increase.
 *   - Randomized multiplier will range anywhere from 0 to the number itself.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * 
 * ---
 * 
 * <Conical Light Flash Rate: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the frequency at which the conical light will flash.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * 
 * ---
 * 
 * <Conical Light Flash Modifier: +x%>
 * <Conical Light Flash Modifier: -x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts a static additive opacity modifier at which lights will become
 *   brighter (+) or dimmer (-) when flashing.
 * - Replace 'x' with a percentage representing the static additional change.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * 
 * ---
 * 
 * <Conical Light Flare Rate: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the frequency at which the conical light will flare.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * 
 * ---
 * 
 * <Conical Light Flare Modifier: +x%>
 * <Conical Light Flare Modifier: -x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts a randomized additive opacity modifier at which lights will become
 *   brighter (+) or dimmer (-) when flaring up.
 * - Replace 'x' with a percentage representing the randomized multiplier
 *   increase.
 *   - Randomized multiplier will range anywhere from 0 to the number itself.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * 
 * ---
 * 
 * <Conical Light Glow Rate: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts how much the conical light will oscillate its brightness back and
 *   forth in a glow-like fashion.
 * - Replace 'x' with a percentage representing the change in brightness.
 *   - Lower numbers mean less fluctuation.
 *   - Higher numbers mean more fluctuation.
 * 
 * ---
 * 
 * <Conical Light Glow Speed: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the speed at which the glow oscillates back and forth.
 * - Replace 'x' with a percentage representing the speed.
 *   - Lower numbers mean slower.
 *   - Higher numbers mean faster.
 * 
 * ---
 * 
 * <Conical Light Glow Random>
 * <Conical Light Glow No Random>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adds a random seed (or not) to the glow oscillation. This can be used to
 *   put multiple lights glowing at different starting points.
 * - This is used to offset the default RNG settings found in the default
 *   Plugin Parameters.
 * 
 * ---
 * 
 * <Conical Light Pulse Rate: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts how much the conical light will oscillate its radius back and
 *   forth in a pulse-like fashion.
 * - Replace 'x' with a percentage representing the change in size.
 *   - Lower numbers mean less shrinking.
 *   - Higher numbers mean more shrinking.
 * 
 * ---
 * 
 * <Conical Light Pulse Speed: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the speed at which the pulse oscillates back and forth.
 * - Replace 'x' with a percentage representing the speed.
 *   - Lower numbers mean slower.
 *   - Higher numbers mean faster.
 * 
 * ---
 * 
 * <Conical Light Pulse Random>
 * <Conical Light Pulse No Random>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adds a random seed (or not) to the pulse oscillation. This can be used to
 *   put multiple lights pulsing at different starting points.
 * - This is used to offset the default RNG settings found in the default
 *   Plugin Parameters.
 * 
 * ---
 * 
 * <Conical Light Pattern Type: name>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Uses a premade pattern by this plugin. The pattern will change the
 *   brightness of the light in a sequenced pattern.
 * - Replace 'name' with any of the following text:
 *   - none, normal
 *   - fluorescent, halogen, incandescent
 *   - candle, torch, campfire
 *   - fast strobe, slow strobe
 *   - strong pulse, medium pulse, slow pulse
 *   - underwater
 * 
 * ---
 * 
 * <Conical Light Custom Pattern: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Uses a custom pattern determined by you, the game dev, on how the light's
 *   brightness will change over time.
 * - Replace 'x' with letters of the alphabet from 'a' to 'z'.
 *   - 'a' is completely transparent.
 *   - 'm' is midway in brightness.
 *   - 'z' is the brightest the light can be.
 * - Examples:
 *   - <Conical Light Custom Pattern: mmmmmaaaaammmmmaaaaaabcdefgabcdefg>
 *   - <Conical Light Custom Pattern: nmonqnmomnmomomno>
 *   - <Conical Light Custom Pattern: abcdefghijklmnopqrrqponmlkjihgfedcba>
 * 
 * ---
 * 
 * <Conical Light Pattern Delay: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines how many frames to wait before going to the next part of the
 *   preset pattern and/or custom pattern.
 * - Replace 'x' with a number representing the frames the conical light needs
 *   to wait before moving forward in the pattern.
 *   - Lower numbers mean faster (minimum: 1).
 *   - Higher numbers mean slower.
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
 * === Overlay Plugin Commands ===
 * 
 * ---
 * 
 * OVERLAY: Change to Preset Color
 * - Change current darkness overlay to a preset color and opacity level.
 * 
 *   Color: 
 *   - Pick a preset color.
 *   - This will also come with predetermined opacity values.
 * 
 *   Duration:
 *   - What is the duration of the color change?
 * 
 * ---
 * 
 * OVERLAY: Change to Custom Color
 * - Change current darkness overlay to a custom color.
 * 
 *   Color:
 *   - Custom color.
 *   - This uses #rrggbb format.
 *   - Check your color here: https://htmlcolorcodes.com/
 * 
 *   Opacity:
 *   - Opacity level of the color.
 *   - Value between 0-255.
 *   - Transparent: 0. Opaque: 255.
 * 
 *   Duration:
 *   - What is the duration of the color change?
 * 
 * ---
 * 
 * === Battle Light Plugin Commands ===
 * 
 * ---
 * 
 * BATTLE LIGHT: Change Actor(s) Settings
 * - Change the battle-radial light settings for target(s).
 * 
 *   Actor ID(s):
 *   - Target actor(s) you want to change light settings for.
 *   - You may use JavaScript code.
 * 
 *   Settings:
 *   - Change the radial light settings for the target(s).
 * 
 *   Behavior:
 *   - Change the behaviors for this radial light.
 * 
 *   Auto-Calc Radius:
 *   - Automatically calculates the radius size based on sprite's width/height.
 * 
 * ---
 * 
 * BATTLE LIGHT: Change Enemy(s) Settings
 * - Change the battle-radial light settings for target(s).
 * 
 *   Enemy Index(es):
 *   - Select enemy troop index(es) to change light settings for.
 *   - You may use JavaScript code.
 * 
 *   Settings:
 *   - Change the radial light settings for the target(s).
 * 
 *   Behavior:
 *   - Change the behaviors for this radial light.
 * 
 *   Auto-Calc Radius:
 *   - Automatically calculates the radius size based on sprite's width/height.
 * 
 * ---
 * 
 * === Radial Light Plugin Commands ===
 * 
 * ---
 *
 * RADIAL LIGHT: Change Player Settings
 * - Change the radial light settings for the player.
 *
 *   Settings:
 *   - Change the radial light settings for the player.
 *   - See "Radial Light Settings" section below.
 * 
 *   Behavior:
 *   - Change the behaviors for this radial light.
 *   - See "Behavior" section below.
 *
 * ---
 *
 * RADIAL LIGHT: Change Follower Settings
 * - Change the radial light settings for followers.
 *
 *   Settings:
 *   - Change the radial light settings for all followers.
 *   - See "Radial Light Settings" section below.
 * 
 *   Behavior:
 *   - Change the behaviors for this radial light.
 *   - See "Behavior" section below.
 *
 * ---
 *
 * RADIAL LIGHT: Change Event(s) Settings
 * - Change the radial light settings for target event(s).
 *
 *   Event ID(s):
 *   - Target event(s) to have their light settings changed.
 *   - Use 0 for "this event".
 *   - You may use JavaScript code.
 *
 *   Settings:
 *   - Change the radial light settings for target event(s).
 *   - See "Radial Light Settings" section below.
 * 
 *   Behavior:
 *   - Change the behaviors for this radial light.
 *   - See "Behavior" section below.
 *
 * ---
 *
 * RADIAL LIGHT: Change Boat Settings
 * - Change the radial light settings for the boat vehicle.
 * 
 *   Boarded:
 * 
 *     Radial Light:
 *     - Changed radial light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 * 
 *   Unboarded:
 * 
 *     Radial Light:
 *     - Changed radial light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 *
 * ---
 *
 * RADIAL LIGHT: Change Ship Settings
 * - Change the radial light settings for the ship vehicle.
 * 
 *   Boarded:
 * 
 *     Radial Light:
 *     - Changed radial light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 * 
 *   Unboarded:
 * 
 *     Radial Light:
 *     - Changed radial light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 *
 * ---
 *
 * RADIAL LIGHT: Change Airship Settings
 * - Change the radial light settings for the airship vehicle.
 * 
 *   Boarded:
 * 
 *     Radial Light:
 *     - Changed radial light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 * 
 *   Unboarded:
 * 
 *     Radial Light:
 *     - Changed radial light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 *
 * ---
 * 
 * === Conical Light Plugin Commands ===
 * 
 * ---
 *
 * CONICAL LIGHT: Change Player Settings
 * - Change the conical light settings for the player.
 *
 *   Settings:
 *   - Change the conical light settings for the player.
 *   - See "Conical Light Settings" section below.
 * 
 *   Behavior:
 *   - Change the behaviors for this conical light.
 *   - See "Behavior" section below.
 *
 * ---
 *
 * CONICAL LIGHT: Change Follower Settings
 * - Change the conical light settings for followers.
 *
 *   Settings:
 *   - Change the conical light settings for all followers.
 *   - See "Conical Light Settings" section below.
 * 
 *   Behavior:
 *   - Change the behaviors for this conical light.
 *   - See "Behavior" section below.
 *
 * ---
 *
 * CONICAL LIGHT: Change Event(s) Settings
 * - Change the conical light settings for target event(s).
 *
 *   Event ID(s):
 *   - Target event(s) to have their light settings changed.
 *   - Use 0 for "this event".
 *   - You may use JavaScript code.
 *
 *   Settings:
 *   - Change the conical light settings for target event(s).
 *   - See "Conical Light Settings" section below.
 * 
 *   Behavior:
 *   - Change the behaviors for this conical light.
 *   - See "Behavior" section below.
 *
 * ---
 *
 * CONICAL LIGHT: Change Boat Settings
 * - Change the conical light settings for the boat vehicle.
 * 
 *   Boarded:
 * 
 *     Conical Light:
 *     - Changed conical light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these conical lights?
 * 
 *   Unboarded:
 * 
 *     Conical Light:
 *     - Changed conical light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these conical lights?
 *
 * ---
 *
 * CONICAL LIGHT: Change Ship Settings
 * - Change the conical light settings for the ship vehicle.
 * 
 *   Boarded:
 * 
 *     Conical Light:
 *     - Changed conical light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these conical lights?
 * 
 *   Unboarded:
 * 
 *     Conical Light:
 *     - Changed conical light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these conical lights?
 *
 * ---
 *
 * CONICAL LIGHT: Change Airship Settings
 * - Change the conical light settings for the airship vehicle.
 * 
 *   Boarded:
 * 
 *     Conical Light:
 *     - Changed conical light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these conical lights?
 * 
 *   Unboarded:
 * 
 *     Conical Light:
 *     - Changed conical light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 *
 * ---
 * 
 * === Conical Offset Plugin Commands ===
 * 
 * ---
 * 
 * CONICAL OFFSET: Change Actor(s) Settings
 * - Change the conical light hand offset for target actor(s).
 * 
 *   Actor ID(s):
 *   - Target actor(s) you want to change offset settings for.
 *   - You may use JavaScript code.
 * 
 *   Enable:
 *   - Change the offset settings for the target(s).
 * 
 *   Hand Position Offsets:
 *   - Change target(s)'s offsets used for hand positions.
 * 
 *   VS8 Dash Offsets:
 *   - Change target(s)'s offsets used for hand positions for VS8 sprites
 *     while dashing.
 * 
 *   VS8 Jump Offsets:
 *   - Change target(s)'s offsets used for hand positions for VS8 sprites
 *     while jumping.
 * 
 * ---
 * 
 * CONICAL OFFSET: Change Event(s) Settings
 * - Change the conical light hand offset for target event(s).
 * 
 *   Event ID(s):
 *   - Target event(s) you want to change offset settings for.
 *   - Use 0 for "this event".
 *   - You may use JavaScript code.
 * 
 *   Enable:
 *   - Change the offset settings for the target(s).
 * 
 *   Hand Position Offsets:
 *   - Change target(s)'s offsets used for hand positions.
 * 
 *   VS8 Dash Offsets:
 *   - Change target(s)'s offsets used for hand positions for VS8 sprites
 *     while dashing.
 * 
 *   VS8 Jump Offsets:
 *   - Change target(s)'s offsets used for hand positions for VS8 sprites
 *     while jumping.
 * 
 * ---
 *
 * CONICAL LIGHT: Change Ship Settings
 * - Change the conical light hand offset for the Ship vehicle.
 * 
 *   Boarded:
 * 
 *     Changed Offsets:
 *     - Changed offsets used for the "hand" positions of this vehicle.
 * 
 *   Unboarded:
 * 
 *     Changed Offsets:
 *     - Changed offsets used for the "hand" positions of this vehicle.
 *
 * ---
 *
 * CONICAL LIGHT: Change Airship Settings
 * - Change the conical light hand offset for the airship vehicle.
 * 
 *   Boarded:
 * 
 *     Changed Offsets:
 *     - Changed offsets used for the "hand" positions of this vehicle.
 * 
 *   Unboarded:
 * 
 *     Changed Offsets:
 *     - Changed offsets used for the "hand" positions of this vehicle.
 *
 * ---
 *
 * CONICAL LIGHT: Change Boat Settings
 * - Change the conical light hand offset for the boat vehicle.
 * 
 *   Boarded:
 * 
 *     Changed Offsets:
 *     - Changed offsets used for the "hand" positions of this vehicle.
 * 
 *   Unboarded:
 * 
 *     Changed Offsets:
 *     - Changed offsets used for the "hand" positions of this vehicle.
 *
 * ---
 * 
 * === Spawn Light Plugin Commands ===
 * 
 * ---
 * 
 * SPAWN LIGHT: Create Light(s) at Map X/Y
 * - Map only!
 * - Create new light spawn(s) locked to the map.
 * - Use tile coordinates for X and Y.
 * 
 *   Light Settings:
 * 
 *     Settings:
 *     - Change the radial light settings for the light spawn(s).
 * 
 *     Bheavior:
 *     - Change the behaviors for the light spawn(s).
 * 
 *   Coordinates X/Y:
 * 
 *     Origin X:
 *     Origin Y:
 *     - What is the origin X/Y position?
 *     - You may use JavaScript code.
 * 
 *   Spawn Settings:
 * 
 *     JS: Trajectory:
 *     - Code used to determine the trajectory of these lights.
 *     - These will revolve around the origin X/Y position.
 * 
 *     Initial Time:
 *     - What is the initial time value for this light spawn(s)?
 *     - You may use JavaScript code.
 * 
 *       Total Spawns:
 *       - How many light spawns should there be?
 *       - Minimum value: 1.
 *       - You may use JavaScript code.
 * 
 *       Time Increment:
 *       - What is the time increment between spawns?
 * 
 *     Expiration Timer:
 *     - After how many frames will light spawn(s) expire?
 *     - Use 0 for no expiration.
 *     - You may use JavaScript code.
 * 
 * ---
 * 
 * SPAWN LIGHT: Create Light(s) at Screen X/Y
 * - Map only!
 * - Create new light spawn(s) locked to the screen.
 * - The light spawn(s) is unaffected by map scrolling.
 * 
 *   Light Settings:
 * 
 *     Settings:
 *     - Change the radial light settings for the light spawn(s).
 * 
 *     Bheavior:
 *     - Change the behaviors for the light spawn(s).
 * 
 *   Coordinates X/Y:
 * 
 *     Origin X:
 *     Origin Y:
 *     - What is the origin X/Y position?
 *     - You may use JavaScript code.
 * 
 *   Spawn Settings:
 * 
 *     JS: Trajectory:
 *     - Code used to determine the trajectory of these lights.
 *     - These will revolve around the origin X/Y position.
 * 
 *     Initial Time:
 *     - What is the initial time value for this light spawn(s)?
 *     - You may use JavaScript code.
 * 
 *       Total Spawns:
 *       - How many light spawns should there be?
 *       - Minimum value: 1.
 *       - You may use JavaScript code.
 * 
 *       Time Increment:
 *       - What is the time increment between spawns?
 * 
 *     Expiration Timer:
 *     - After how many frames will light spawn(s) expire?
 *     - Use 0 for no expiration.
 *     - You may use JavaScript code.
 * 
 * ---
 * 
 * SPAWN LIGHT: Create Light(s) on Player
 * - Map only!
 * - Create new light spawn(s) following the player.
 * - The light spawn(s) is unaffected by map scrolling.
 * 
 *   Light Settings:
 * 
 *     Settings:
 *     - Change the radial light settings for the light spawn(s).
 * 
 *     Bheavior:
 *     - Change the behaviors for the light spawn(s).
 * 
 *   Spawn Settings:
 * 
 *     JS: Trajectory:
 *     - Code used to determine the trajectory of these lights.
 *     - These will revolve around the origin X/Y position.
 * 
 *     Initial Time:
 *     - What is the initial time value for this light spawn(s)?
 *     - You may use JavaScript code.
 * 
 *       Total Spawns:
 *       - How many light spawns should there be?
 *       - Minimum value: 1.
 *       - You may use JavaScript code.
 * 
 *       Time Increment:
 *       - What is the time increment between spawns?
 * 
 *     Expiration Timer:
 *     - After how many frames will light spawn(s) expire?
 *     - Use 0 for no expiration.
 *     - You may use JavaScript code.
 * 
 * ---
 * 
 * SPAWN LIGHT: Create Light(s) on Follower
 * - Map only!
 * - Create new light spawn(s) following the player.
 * - The light spawn(s) is unaffected by map scrolling.
 * 
 *   Light Settings:
 * 
 *     Settings:
 *     - Change the radial light settings for the light spawn(s).
 * 
 *     Bheavior:
 *     - Change the behaviors for the light spawn(s).
 * 
 *   Target:
 * 
 *     Follower Index:
 *     - Which follower index should the light(s) follow?
 *     - Index starts at 0.
 *     - You may use JavaScript code.
 * 
 *   Spawn Settings:
 * 
 *     JS: Trajectory:
 *     - Code used to determine the trajectory of these lights.
 *     - These will revolve around the origin X/Y position.
 * 
 *     Initial Time:
 *     - What is the initial time value for this light spawn(s)?
 *     - You may use JavaScript code.
 * 
 *       Total Spawns:
 *       - How many light spawns should there be?
 *       - Minimum value: 1.
 *       - You may use JavaScript code.
 * 
 *       Time Increment:
 *       - What is the time increment between spawns?
 * 
 *     Expiration Timer:
 *     - After how many frames will light spawn(s) expire?
 *     - Use 0 for no expiration.
 *     - You may use JavaScript code.
 * 
 * ---
 * 
 * SPAWN LIGHT: Create Light(s) on Event
 * - Map only!
 * - Create new light spawn(s) following the player.
 * - The light spawn(s) is unaffected by map scrolling.
 * 
 *   Light Settings:
 * 
 *     Settings:
 *     - Change the radial light settings for the light spawn(s).
 * 
 *     Bheavior:
 *     - Change the behaviors for the light spawn(s).
 * 
 *   Target:
 * 
 *     Event ID:
 *     - Which map event should the light(s) follow?
 *     - Use 0 for "this event".
 *     - You may use JavaScript code.
 * 
 *   Spawn Settings:
 * 
 *     JS: Trajectory:
 *     - Code used to determine the trajectory of these lights.
 *     - These will revolve around the origin X/Y position.
 * 
 *     Initial Time:
 *     - What is the initial time value for this light spawn(s)?
 *     - You may use JavaScript code.
 * 
 *       Total Spawns:
 *       - How many light spawns should there be?
 *       - Minimum value: 1.
 *       - You may use JavaScript code.
 * 
 *       Time Increment:
 *       - What is the time increment between spawns?
 * 
 *     Expiration Timer:
 *     - After how many frames will light spawn(s) expire?
 *     - Use 0 for no expiration.
 *     - You may use JavaScript code.
 * 
 * ---
 * 
 * === Light-Related Sub Settings ===
 * 
 * ---
 * 
 * Radial Light Settings
 * 
 *   General:
 * 
 *     Enabled?:
 *     - Is this radial light enabled?
 * 
 *   Properties:
 * 
 *     Filename:
 *     - Filename used for the light effect image.
 *     - If used, ignore Color, Radius, and Intensity.
 *     - Image will be centered on the target where the center of the image is
 *       the anchor point and will be rotated.
 * 
 *     Color:
 *     - Color of the radial light in #rrggbb format.
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *     Radius:
 *     - What is the radius of this radial light?
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *     Intensity:
 *     - Radial light intensity. Use value between 0 & 1.
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *   Optional:
 * 
 *     Angle:
 *     - What is the angle of this radial light?
 *     - Only noticeable with using images.
 * 
 *       Rotate Speed:
 *       - The rotation speed of this light?
 *       - Lower: slower. Higher: faster. Negative: reverse.
 * 
 *     Blend Mode:
 *     - What kind of blend mode do you wish to apply to the radial light?
 * 
 *     Opacity:
 *     - What is the opacity (0 to 255)?
 *     - Lower: dimmer. Higher: Brighter.
 * 
 *   Offsets:
 * 
 *     Offset X:
 *     - Offset the X position of this light.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offset the Y position of this light.
 *     - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Conical Light Settings
 * 
 *   General:
 *   
 *     Enabled?:
 *     - Is this conical light enabled?
 * 
 *   Properties:
 * 
 *     Filename:
 *     - Filename used for the light effect image.
 *     - If used, ignore Radius, Color, and Intensity.
 * 
 *       Angle Offset:
 *       - Offset the image angle by this many degrees.
 *       - Only applies to images.
 * 
 *       File Anchor X:
 *       File Anchor Y:
 *       - Anchor X/Y used for images.
 *       - For X - Left: 0.0; Center: 0.5; Right: 1.0
 *       - For Y - Top: 0.0; Middle: 0.5; Bottom: 1.0
 * 
 *     Color:
 *     - What is the radius of this conical light?
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *     Radius:
 *     - What is the radius of this conical light?
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *       Source Radius:
 *       - What is the radius of this light source?
 *       - For generated lights only.
 *       - Ignore if using image.
 * 
 *     Intensity:
 *     - Conical light intensity. Use value between 0 & 1.
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *   Optional:
 * 
 *     Blend Mode:
 *     - What kind of blend mode do you wish to apply to the conical light?
 * 
 *     Opacity:
 *     - What is the opacity (0 to 255)?
 *     - Lower: dimmer. Higher: Brighter.
 * 
 *   Angle:
 * 
 *     Arc Angle:
 *     - What is the angle of this conical light's arc?
 * 
 *     Angle Sway:
 *     - How many degrees should this light sway?
 *     - Use 0 for no sway.
 * 
 *     Sway Speed:
 *     - How fast should this light sway?
 *     - Lower: Slower; Higher: Faster
 * 
 *     Randomize Sway?:
 *     - Change the sway to offset at different starting points?
 * 
 *   Direction:
 * 
 *     Forced Direction?:
 *     - Force the conical light to face a certain direction?
 * 
 *     Follow Cursor?
 *     - Follow the mouse cursor?
 * 
 *   Offsets:
 * 
 *     Use Hand Offset?:
 *     - Put the light source on the target's "hand" position?
 *     - Disables the two settings below if on.
 * 
 *     Offset X (Non-Hand):
 *     - Offset the X position of this light.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y (Non-Hand):
 *     - Offset the Y position of this light.
 *     - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Behavior
 * 
 *   Blink:
 * 
 *     Blink Rate:
 *     - What is the rate of occurance for this effect?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Blink Modifier:
 *     - Static multiplicative opacity modifier. Before additive.
 *     - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 *   Flicker:
 * 
 *     Flicker Rate:
 *     - What is the rate of occurance for this effect?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Flicker Modifier:
 *     - Random multiplicative opacity modifier. Before additive.
 *     - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 *   Flash:
 * 
 *     Flash Rate:
 *     - What is the rate of occurance for this effect?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Flash Modifier:
 *     - Static additive opacity modifier. Before multiplicative.
 *     - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 *   Flare:
 * 
 *     Flare Rate:
 *     - What is the rate of occurance for this effect?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Flare Modifier:
 *     - Random additive opacity modifier. Before multiplicative.
 *     - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 *   Glow:
 * 
 *     Glow Rate:
 *     - What is the glow change for this light?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Glow Speed:
 *     - What is the speed at which glow oscillates at?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Randomize Glow?:
 *     - Offset the glow to oscillate at different starting points?
 * 
 *   Pulse:
 * 
 *     Pulse Rate:
 *     - What is the pulse change for this light?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Pulse Speed:
 *     - What is the speed at which pulse oscillates at?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Randomize Pulse?:
 *     - Offset the pulse to oscillate at different starting points?
 * 
 *   Pattern:
 * 
 *     Pattern Name:
 *     - Select the pattern name for this light.
 *     - Ignore if using any Custom Pattern.
 * 
 *     Custom Pattern:
 *     - Create a custom pattern with letters from a to z.
 *     - Where 'a' is transparent and 'z' is opaque.
 * 
 *     Frame Delay:
 *     - What is the frame delay between pattern updates?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Map Lighting Settings
 * ============================================================================
 *
 * Lighting settings for the map scene. These settings allow you to adjust the
 * default settings used for the majority of lighting types and behaviors
 * across the player character, followers, events, and the various vehicles.
 *
 * ---
 *
 * General
 * 
 *   Enable For Map?:
 *   - Enable Lighting Effects for map?
 * 
 *   Shake Buffer:
 *   - Screen shakes reveal more of the screen than normal.
 *   - How many pixels of buffer should you provide?
 *
 * ---
 *
 * Player Defaults
 * 
 *   Radial Light:
 *   - Default radial light settings for this target.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for this light?
 * 
 *   Conical Light:
 *   - Default radial light settings for this target.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for this light?
 * 
 * ---
 * 
 * Follower Defaults
 * 
 *   Radial Light:
 *   - Default radial light settings for this target.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for this light?
 * 
 *   Conical Light:
 *   - Default radial light settings for this target.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for this light?
 * 
 * ---
 * 
 * Event Defaults
 * 
 *   Radial Light:
 *   - Default radial light settings for this target.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for this light?
 * 
 *   Conical Light:
 *   - Default radial light settings for this target.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for this light?
 * 
 * ---
 * 
 * Vehicles
 * 
 *   Boat:
 *   Ship:
 *   Airship:
 * 
 *     Boarded:
 * 
 *       Radial Light:
 *       - Default radial light settings for this target.
 * 
 *         Default Behavior:
 *         - What are the default behavioral settings for this light?
 * 
 *       Conical Light:
 *       - Default radial light settings for this target.
 * 
 *         Default Behavior:
 *         - What are the default behavioral settings for this light?
 * 
 *         "Hand" Offsets:
 *         - Default offsets used for the "hand" positions of this vehicle.
 * 
 *     Unboarded:
 * 
 *       Radial Light:
 *       - Default radial light settings for this target.
 * 
 *         Default Behavior:
 *         - What are the default behavioral settings for this light?
 * 
 *       Conical Light:
 *       - Default radial light settings for this target.
 * 
 *         Default Behavior:
 *         - What are the default behavioral settings for this light?
 * 
 *         "Hand" Offsets:
 *         - Default offsets used for the "hand" positions of this vehicle.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Hand Position, VS8 Dash, VS8 Jump Offsets
 * ============================================================================
 *
 * Default offsets used for hand positions. These are for conical lights and
 * help determine where the light source should come from to avoid making the
 * conical light look weird by having lights come from the user's face or chest
 * as seen with other lighting plugins.
 * 
 * There are also separate settings for those using VS8 sprites for dashing and
 * jumping positions. Be sure to adjust them accordingly.
 *
 * ---
 *
 * Standard Directions
 * 
 *   Down:
 *   Up:
 *   Left:
 *   Right:
 *   - Offsets to determine conical light source position when facing
 *     this direction.
 * 
 * ---
 * 
 * Diagonal Directions
 * 
 *   Lower Left:
 *   Lower Right:
 *   Upper Left:
 *   Upper Right:
 *   - Offsets to determine conical light source position when facing
 *     this direction.
 *
 * ---
 *
 * Pattern Offsets:
 * 
 *   Pattern 0-10:
 * 
 *     Offset X:
 *     - What is the offset X for this pattern?
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - What is the offset Y for this pattern?
 *     - Negative: up. Positive: down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Anti-Light Settings
 * ============================================================================
 *
 * Anti-Light regions and terrain tags can be used to mark certain tiles from
 * being affected by light at all. These tiles can be used as ceiling tiles or
 * areas outside of the map boundaries where light doesn't normally reach.
 * 
 * Keep in mind that this does NOT block light from passing through it. If a
 * light source is big enough to engulf the tiles past the anti-light marked
 * tiles, those tiles will still be lit up by any light sources. Therefore, you
 * need to mark those tiles on the map to be anti-light as well in addition to
 * planning out your maps for potential light piercing through the tiles.
 * 
 * There are two kinds of anti-light types. Hard edges and soft edges. Hard
 * Edges are extremely rough and box like. Soft Edges will smooth out towards
 * regularly lit tiles.
 *
 * ---
 *
 * Hard Edges
 * 
 *   Regions:
 *   - Which regions by default apply anti-light?
 *   - 0 is ignored. Use a number from 1 to 255.
 * 
 *   Terrain Tags:
 *   - Which terrain tags by default apply anti-light?
 *   - 0 is ignored. Use a number from 1 to 7.
 *
 * ---
 *
 * Soft Edges
 * 
 *   Regions:
 *   - Which regions by default apply anti-light?
 *   - 0 is ignored. Use a number from 1 to 255.
 * 
 *   Terrain Tags:
 *   - Which terrain tags by default apply anti-light?
 *   - 0 is ignored. Use a number from 1 to 7.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle Lighting Settings
 * ============================================================================
 *
 * Lighting settings for the battle scene. The VisuStella MZ Battle Core is
 * required in order for lighting effects to work in-battle.
 *
 * ---
 *
 * General
 * 
 *   Enable For Battle?:
 *   - Enable Lighting Effects for battles?
 *   - Requires VisuStella MZ Battle Core!
 * 
 * ---
 * 
 * Actor Defaults
 * 
 *   Battle Light:
 *   - Default battle-radial light settings for actors.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for actor radial lights?
 * 
 *     Auto-Calc Radius:
 *     - Automatically calculates the radius size based on sprite's
 *       width/height.
 *     - Ignore if use <Radial Light Radius: x>.
 *
 * ---
 * 
 * Enemy Defaults
 * 
 *   Battle Light:
 *   - Default battle-radial light settings for enemies.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for enemy radial lights?
 * 
 *     Auto-Calc Radius:
 *     - Automatically calculates the radius size based on sprite's
 *       width/height.
 *     - Ignore if use <Radial Light Radius: x>.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Light Regions Settings
 * ============================================================================
 *
 * Tiles marked with these regions will automatically have white light spawned
 * on top of them. However, depending on the group the region belongs to, the
 * light spawned will have varying degrees of opacity. This means some places
 * can be less lit while others can be darker.
 * 
 * This can be used to light up certain parts of the map automatically while
 * requiring others to be lit with standard lighting.
 * 
 * This is also helpful for those who wish to keep their parallax fully lit
 * (since it will be affected by the darkness overlay) without having to put in
 * a lot of light sources.
 *
 * ---
 *
 * Auto-Light Regions
 * 
 *   Opacity - 100%:
 *   to
 *   Opacity - 5%:
 *   - Mark the regions with this opacity level.
 *   - Light color will be white. Use Region ID's (1 to 255).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Preset Color Settings
 * ============================================================================
 *
 * If you happen to not like the preset colors used by this plugin, you can
 * redefine them using different hexidecimal values for you own touch. If you
 * are unsure of what the hexidecimal values are, please use an online site
 * like: https://htmlcolorcodes.com/
 *
 * ---
 *
 * Daytime Colors
 * Greyscale Colors
 * Red Colors
 * Orange Colors
 * Yellow Colors
 * Green Colors
 * Cyan Colors
 * Blue Colors
 * Purple Colors
 * Magenta Colors
 * Pink Colors
 * Brown Colors
 * Misc Colors
 * 
 *   Preset Color Name:
 *   - Preset's hex color in #rrggbb format.
 *   - Check your color here: https://htmlcolorcodes.com/
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Menu Settings
 * ============================================================================
 *
 * Lighting settings for the options scene. These are for the players who
 * aren't fond of blinking or oscillating lights in case they bother them.
 *
 * ---
 *
 * Options
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 *   - Ignore if using the VisuStella MZ Options Core.
 * 
 * ---
 * 
 * Blinking Lights
 * 
 *   Add Option?:
 *   - Add the 'Blinking Lights' option to the Options menu?
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 * ---
 * 
 * Pulsing Lights
 * 
 *   Add Option?:
 *   - Add the 'Pulsing Lights' option to the Options menu?
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Radial Light Settings
 * ============================================================================
 *
 * These are sub-settings found in the other settings lists. These settings
 * adjust the default/primary properties of radial lights for the specific
 * user type.
 *
 * --- 
 * 
 * General:
 * 
 *   Enabled?:
 *   - Is this radial light enabled?
 * 
 * ---
 * 
 * Properties:
 * 
 *   Filename:
 *   - Filename used for the light effect image.
 *   - If used, ignore Color, Radius, and Intensity.
 *   - Image will be centered on the target where the center of the image is
 *     the anchor point and will be rotated.
 * 
 *   Color:
 *   - Color of the radial light in #rrggbb format.
 *   - For generated lights only.
 *   - Ignore if using image.
 * 
 *   Radius:
 *   - What is the radius of this radial light?
 *   - For generated lights only.
 *   - Ignore if using image.
 * 
 *   Intensity:
 *   - Radial light intensity. Use value between 0 & 1.
 *   - For generated lights only.
 *   - Ignore if using image.
 * 
 * ---
 * 
 * Optional:
 * 
 *   Angle:
 *   - What is the angle of this radial light?
 *   - Only noticeable with using images.
 * 
 *     Rotate Speed:
 *     - The rotation speed of this light?
 *     - Lower: slower. Higher: faster. Negative: reverse.
 * 
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the radial light?
 * 
 *   Opacity:
 *   - What is the opacity (0 to 255)?
 *   - Lower: dimmer. Higher: Brighter.
 * 
 * ---
 * 
 * Offsets:
 * 
 *   Offset X:
 *   - Offset the X position of this light.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the Y position of this light.
 *   - Negative: up. Positive: down.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Conical Light Settings
 * ============================================================================
 *
 * These are sub-settings found in the other settings lists. These settings
 * adjust the default/primary properties of conical lights for the specific
 * user type.
 *
 * --- 
 * 
 * General:
 * 
 *   Enabled?:
 *   - Is this conical light enabled?
 * 
 * ---
 * 
 * Properties:
 * 
 *   Filename:
 *   - Filename used for the light effect image.
 *   - If used, ignore Radius, Color, and Intensity.
 * 
 *     Angle Offset:
 *     - Offset the image angle by this many degrees.
 *     - Only applies to images.
 * 
 *     File Anchor X:
 *     File Anchor Y:
 *     - Anchor X/Y used for images.
 *     - For X - Left: 0.0; Center: 0.5; Right: 1.0
 *     - For Y - Top: 0.0; Middle: 0.5; Bottom: 1.0
 * 
 *   Color:
 *   - What is the radius of this conical light?
 *   - For generated lights only.
 *   - Ignore if using image.
 * 
 *   Radius:
 *   - What is the radius of this conical light?
 *   - For generated lights only.
 *   - Ignore if using image.
 * 
 *     Source Radius:
 *     - What is the radius of this light source?
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *   Intensity:
 *   - Conical light intensity. Use value between 0 & 1.
 *   - For generated lights only.
 *   - Ignore if using image.
 * 
 * ---
 * 
 * Optional:
 * 
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the radial light?
 * 
 *   Opacity:
 *   - What is the opacity (0 to 255)?
 *   - Lower: dimmer. Higher: Brighter.
 * 
 * ---
 * 
 * Angle:
 * 
 *   Arc Angle:
 *   - What is the angle of this conical light's arc?
 * 
 *   Angle Sway:
 *   - How many degrees should this light sway?
 *   - Use 0 for no sway.
 * 
 *   Sway Speed:
 *   - How fast should this light sway?
 *   - Lower: Slower; Higher: Faster
 * 
 *   Randomize Sway?:
 *   - Change the sway to offset at different starting points?
 * 
 * ---
 * 
 * Direction:
 * 
 *   Forced Direction?:
 *   - Force the conical light to face a certain direction?
 * 
 *   Follow Cursor?
 *   - Follow the mouse cursor?
 * 
 * ---
 * 
 * Offsets:
 * 
 *   Offset X:
 *   - Offset the X position of this light.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the Y position of this light.
 *   - Negative: up. Positive: down.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Light Behavior Settings
 * ============================================================================
 *
 * These are sub-settings found in the other settings lists. These settings
 * adjust the default/primary patterns of how lights behave for the specific
 * user type.
 *
 * --- 
 * 
 * Blink:
 * 
 *   Blink Rate:
 *   - What is the rate of occurance for this effect?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Blink Modifier:
 *   - Static multiplicative opacity modifier. Before additive.
 *   - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 * ---
 * 
 * Flicker:
 * 
 *   Flicker Rate:
 *   - What is the rate of occurance for this effect?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Flicker Modifier:
 *   - Random multiplicative opacity modifier. Before additive.
 *   - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 * ---
 * 
 * Flash:
 * 
 *   Flash Rate:
 *   - What is the rate of occurance for this effect?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Flash Modifier:
 *   - Static additive opacity modifier. Before multiplicative.
 *   - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 * ---
 * 
 * Flare:
 * 
 *   Flare Rate:
 *   - What is the rate of occurance for this effect?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Flare Modifier:
 *   - Random additive opacity modifier. Before multiplicative.
 *   - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 * ---
 * 
 * Glow:
 * 
 *   Glow Rate:
 *   - What is the glow change for this light?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Glow Speed:
 *   - What is the speed at which glow oscillates at?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Randomize Glow?:
 *   - Offset the glow to oscillate at different starting points?
 * 
 * ---
 * 
 * Pulse:
 * 
 *   Pulse Rate:
 *   - What is the pulse change for this light?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Pulse Speed:
 *   - What is the speed at which pulse oscillates at?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Randomize Pulse?:
 *   - Offset the pulse to oscillate at different starting points?
 * 
 * ---
 * 
 * Pattern:
 * 
 *   Pattern Name:
 *   - Select the pattern name for this light.
 *   - Ignore if using any Custom Pattern.
 * 
 *   Custom Pattern:
 *   - Create a custom pattern with letters from a to z.
 *   - Where 'a' is transparent and 'z' is opaque.
 * 
 *   Frame Delay:
 *   - What is the frame delay between pattern updates?
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
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.08: June 13, 2024
 * * Bug Fixes!
 * ** <Conical Light Custom Pattern: x> was not working before and should now
 *    work properly. Fix made by Arisu.
 * 
 * Version 1.07: February 15, 2024
 * * Bug Fixes!
 * ** Fixed a bug where enemy notetags for lighting effects did not work
 *    properly. Fix made by Arisu.
 * 
 * Version 1.06: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: September 14, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.04: February 16, 2023
 * * Feature Update!
 * ** During events, touch-directed flashlight movement will not occur to
 *    prevent the player character from facing different directions than
 *    intended. Update made by Irina.
 * 
 * Version 1.03: May 5, 2022
 * * Bug Fixes!
 * ** Vehicles no longer auto put out light in the upper left corner of the map
 *    when they have no graphic. Fix made by Irina.
 * 
 * Version 1.02: March 31, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina:
 * *** <Hard Anti-Light Regions: x, x, x>
 * *** <Hard Anti-Light Terrain Tags: x, x, x>
 * *** <Soft Anti-Light Regions: x, x, x>
 * *** <Soft Anti-Light Terrain Tags: x, x, x>
 * **** Tiles marked by these regions/terrain tags won't have any light shown
 *      on them.
 * **** This does NOT block light from going to the other side. If the light
 *      radius is large enough, it will pierce through to the other side. It
 *      just won't be visible on the region marked tiles.
 * ** New Plugin Parameters added by Irina:
 * *** Anti-Light Settings
 * **** Anti-Light regions and terrain tags can be used to mark certain tiles
 *      from being affected by light at all. These tiles can be used as ceiling
 *      tiles or areas outside of the map boundaries where light doesn't
 *      normally reach.
 * **** Keep in mind that this does NOT block light from passing through it. If
 *      a light source is big enough to engulf the tiles past the anti-light
 *      marked tiles, those tiles will still be lit up by any light sources.
 *      Therefore, you need to mark those tiles on the map to be anti-light as
 *      well in addition to planning out your maps for potential light piercing
 *      through the tiles.
 * **** There are two kinds of anti-light types. Hard edges and soft edges.
 *      Hard Edges are extremely rough and box like. Soft Edges will smooth out
 *      towards regularly lit tiles.
 * 
 * Version 1.01: March 24, 2022
 * * Bug Fixes!
 * ** Updated battle radial light positions for games where the UI resolution
 *    is not the same as the Screen resolution. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update
 * ** Changed the position of "Use Hand Offset?" in the Plugin Parameters for
 *    more clarity in regards to Conical Lights.
 * ** Added "(Non-Hand)" to the respective Offset X and Offset Y plugin
 *    parameter names for those who missed the description of the previous
 *    Plugin Parameter.
 * * New Features!
 * ** New Plugin Parameters added by Irina.
 * *** Plugin Parameters > Preset Colors Settings
 * **** You can now define what hex codes are used for each preset color.
 * 
 * Version 1.00 Official Release Date: April 8, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Overlay
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Overlay
 * @text Category - Overlay
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OverlayChangeToPreset
 * @text OVERLAY: Change to Preset Color
 * @desc Change current darkness overlay to a preset color and opacity level.
 *
 * @arg Color:str
 * @text Color
 * @type select
 * @option Normal
 * @option -
 * @option Dawn
 * @option Day
 * @option Dusk
 * @option Night
 * @option -
 * @option White
 * @option Light Grey
 * @option Grey
 * @option Dark Grey
 * @option Black
 * @option -
 * @option Light Red
 * @option Red
 * @option Dark Red
 * @option -
 * @option Light Orange
 * @option Orange
 * @option Dark Orange
 * @option -
 * @option Light Yellow
 * @option Yellow
 * @option Dark Yellow
 * @option -
 * @option Light Green
 * @option Green
 * @option Dark Green
 * @option -
 * @option Light Cyan
 * @option Cyan
 * @option Dark Cyan
 * @option -
 * @option Light Blue
 * @option Blue
 * @option Dark Blue
 * @option -
 * @option Light Purple
 * @option Purple
 * @option Dark Purple
 * @option -
 * @option Light Magenta
 * @option Magenta
 * @option Dark Magenta
 * @option -
 * @option Light Pink
 * @option Pink
 * @option Dark Pink
 * @option -
 * @option Light Brown
 * @option Brown
 * @option Dark Brown
 * @option -
 * @desc Pick a preset color. This will also come with predetermined opacity values.
 * @default Night
 *
 * @arg Duration:num
 * @text Duration
 * @desc What is the duration of the color change?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OverlayChangeToCustomColor
 * @text OVERLAY: Change to Custom Color
 * @desc Change current darkness overlay to a custom color.
 *
 * @arg Color:str
 * @text Color
 * @desc Custom color. This uses #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @arg Opacity:num
 * @text Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Opacity level of the color. Value between 0-255.
 * Transparent: 0. Opaque: 255.
 * @default 255
 *
 * @arg Duration:num
 * @text Duration
 * @desc What is the duration of the color change?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_BattleLight
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_BattleLight
 * @text Category - Battle Light
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleLightChangeActorSettings
 * @text BATTLE LIGHT: Change Actor(s) Settings
 * @desc Change the battle-radial light settings for target(s).
 * 
 * @arg ActorID:arrayeval
 * @text Actor ID(s)
 * @type actor[]
 * @desc Target actor(s) you want to change light settings for.
 * You may use JavaScript code.
 * @default ["1"]
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Radial>
 * @desc Change the radial light settings for the target(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"64","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"128","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this radial light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg AutoRadius:eval
 * @text Auto-Calc Radius
 * @type boolean
 * @on Calculate Radius
 * @off Use Default Radius
 * @desc Automatically calculates the radius size based on sprite's
 * width/height.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleLightChangeEnemySettings
 * @text BATTLE LIGHT: Change Enemy(s) Settings
 * @desc Change the battle-radial light settings for target(s).
 *
 * @arg EnemyIndex:arrayeval
 * @text Enemy Index(es)
 * @type string[]
 * @desc Select enemy troop index(es) to change light settings for.
 * You may use JavaScript code.
 * @default ["0"]
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Radial>
 * @desc Change the radial light settings for the target(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"64","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"128","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this radial light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg AutoRadius:eval
 * @text Auto-Calc Radius
 * @type boolean
 * @on Calculate Radius
 * @off Use Default Radius
 * @desc Automatically calculates the radius size based on sprite's
 * width/height.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_RadialLight
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_RadialLight
 * @text Category - Radial Light
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RadialLightChangePlayerSettings
 * @text RADIAL LIGHT: Change Player Settings
 * @desc Change the radial light settings for the player.
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Radial>
 * @desc Change the radial light settings for the player.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","radius:num":"216","color:str":"#ffffff","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this radial light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RadialLightChangeFollowerSettings
 * @text RADIAL LIGHT: Change Follower Settings
 * @desc Change the radial light settings for followers.
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Radial>
 * @desc Change the radial light settings for all followers.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","radius:num":"216","color:str":"#ffffff","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this radial light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RadialLightChangeEventSettings
 * @text RADIAL LIGHT: Change Event(s) Settings
 * @desc Change the radial light settings for target event(s).
 * 
 * @arg EventID:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc Target event(s) to have their light settings changed.
 * Use 0 for "this event". You may use JavaScript code.
 * @default ["0"]
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Radial>
 * @desc Change the radial light settings for target event(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","radius:num":"72","color:str":"#ffffff","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this radial light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RadialLightChangeBoatSettings
 * @text RADIAL LIGHT: Change Boat Settings
 * @desc Change the radial light settings for the boat vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedSettings:struct
 * @text Radial Light
 * @parent Boarded
 * @type struct<Radial>
 * @desc Changed radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"240","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"128","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg BoardedBehavior:struct
 * @text Changed Behavior
 * @parent BoardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg Unboarded
 * @parent Boat
 * 
 * @arg UnboardedSettings:struct
 * @text Radial Light
 * @parent Unboarded
 * @type struct<Radial>
 * @desc Changed radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"72","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg UnboardedBehavior:struct
 * @text Changed Behavior
 * @parent UnboardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RadialLightChangeShipSettings
 * @text RADIAL LIGHT: Change Ship Settings
 * @desc Change the radial light settings for the ship vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedSettings:struct
 * @text Radial Light
 * @parent Boarded
 * @type struct<Radial>
 * @desc Changed radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"300","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"160","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg BoardedBehavior:struct
 * @text Changed Behavior
 * @parent BoardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedSettings:struct
 * @text Radial Light
 * @parent Unboarded
 * @type struct<Radial>
 * @desc Changed radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"72","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg UnboardedBehavior:struct
 * @text Changed Behavior
 * @parent UnboardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RadialLightChangeAirshipSettings
 * @text RADIAL LIGHT: Change Airship Settings
 * @desc Change the radial light settings for the airship vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedSettings:struct
 * @text Radial Light
 * @parent Boarded
 * @type struct<Radial>
 * @desc Changed radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"360","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"192","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg BoardedBehavior:struct
 * @text Changed Behavior
 * @parent BoardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedSettings:struct
 * @text Radial Light
 * @parent Unboarded
 * @type struct<Radial>
 * @desc Changed radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"72","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg UnboardedBehavior:struct
 * @text Changed Behavior
 * @parent UnboardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ConicalLight
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_ConicalLight
 * @text Category - Conical Light
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalLightChangePlayerSettings
 * @text CONICAL LIGHT: Change Player Settings
 * @desc Change the conical light settings for the player.
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Conical>
 * @desc Change the conical light settings for the player.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"240","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"6","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","followMouse:eval":"true","useHandOffset:eval":"true","forceDirection:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this conical light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalLightChangeFollowerSettings
 * @text CONICAL LIGHT: Change Follower Settings
 * @desc Change the conical light settings for followers.
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Conical>
 * @desc Change the conical light settings for all followers.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"240","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"6","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","followMouse:eval":"false","useHandOffset:eval":"true","forceDirection:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this conical light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalLightChangeEventSettings
 * @text CONICAL LIGHT: Change Event(s) Settings
 * @desc Change the conical light settings for target event(s).
 * 
 * @arg EventID:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc Target event(s) to have their light settings changed.
 * Use 0 for "this event". You may use JavaScript code.
 * @default ["0"]
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Conical>
 * @desc Change the conical light settings for target event(s).
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"240","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"6","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","followMouse:eval":"false","useHandOffset:eval":"true","forceDirection:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this conical light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalLightChangeBoatSettings
 * @text CONICAL LIGHT: Change Boat Settings
 * @desc Change the conical light settings for the boat vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedSettings:struct
 * @text Conical Light
 * @parent Boarded
 * @type struct<Conical>
 * @desc Changed conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"360","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg BoardedBehavior:struct
 * @text Changed Behavior
 * @parent BoardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedSettings:struct
 * @text Conical Light
 * @parent Unboarded
 * @type struct<Conical>
 * @desc Changed conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"360","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg UnboardedBehavior:struct
 * @text Changed Behavior
 * @parent UnboardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalLightChangeShipSettings
 * @text CONICAL LIGHT: Change Ship Settings
 * @desc Change the conical light settings for the ship vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedSettings:struct
 * @text Conical Light
 * @parent Boarded
 * @type struct<Conical>
 * @desc Changed conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"480","miniRadius:num":"16","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"75","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg BoardedBehavior:struct
 * @text Changed Behavior
 * @parent BoardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedSettings:struct
 * @text Conical Light
 * @parent Unboarded
 * @type struct<Conical>
 * @desc Changed conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"360","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg UnboardedBehavior:struct
 * @text Changed Behavior
 * @parent UnboardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalLightChangeAirshipSettings
 * @text CONICAL LIGHT: Change Airship Settings
 * @desc Change the conical light settings for the airship vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedSettings:struct
 * @text Conical Light
 * @parent Boarded
 * @type struct<Conical>
 * @desc Changed conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"600","miniRadius:num":"32","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"90","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg BoardedBehavior:struct
 * @text Changed Behavior
 * @parent BoardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedSettings:struct
 * @text Conical Light
 * @parent Unboarded
 * @type struct<Conical>
 * @desc Changed conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"360","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg UnboardedBehavior:struct
 * @text Changed Behavior
 * @parent UnboardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ConicalOffset
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_ConicalOffset
 * @text Category - Conical Offset
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalOffsetChangeActor
 * @text CONICAL OFFSET: Change Actor(s) Settings
 * @desc Change the conical light hand offset for target actor(s).
 * 
 * @arg ActorID:arrayeval
 * @text Actor ID(s)
 * @type actor[]
 * @desc Target actor(s) you want to change offset settings for.
 * You may use JavaScript code.
 * @default ["1"]
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Hand Offset
 * @off Center Offset
 * @desc Change the offset settings for the target(s).
 * @default true
 * 
 * @arg HandOffset:struct
 * @text Hand Position Offsets
 * @type struct<HandOffset>
 * @desc Change target(s)'s offsets used for hand positions.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-12\",\"pattern0Y:num\":\"+14\",\"Pattern1\":\"\",\"pattern1X:num\":\"-12\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"-12\",\"pattern2Y:num\":\"+18\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+2\",\"pattern0Y:num\":\"+16\",\"Pattern1\":\"\",\"pattern1X:num\":\"+4\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"+6\",\"pattern2Y:num\":\"+16\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-2\",\"pattern0Y:num\":\"+16\",\"Pattern1\":\"\",\"pattern1X:num\":\"-4\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"-6\",\"pattern2Y:num\":\"+16\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+12\",\"pattern0Y:num\":\"-18\",\"Pattern1\":\"\",\"pattern1X:num\":\"+12\",\"pattern1Y:num\":\"-16\",\"Pattern2\":\"\",\"pattern2X:num\":\"+12\",\"pattern2Y:num\":\"-14\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @arg VsDashOffset:struct
 * @text VS8 Dash Offsets
 * @type struct<HandOffset>
 * @desc Change target(s)'s offsets used for hand positions for VS8 sprites while dashing.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @arg VsJumpOffset:struct
 * @text VS8 Jump Offsets
 * @type struct<HandOffset>
 * @desc Change target(s)'s offsets used for hand positions for VS8 sprites while jumping.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalOffsetChangeEvent
 * @text CONICAL OFFSET: Change Event(s) Settings
 * @desc Change the conical light hand offset for target event(s).
 * 
 * @arg EventID:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc Target event(s) you want to change offset settings for.
 * Use 0 for "this event". You may use JavaScript code.
 * @default ["0"]
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Hand Offset
 * @off Center Offset
 * @desc Change the offset settings for the target(s).
 * @default true
 * 
 * @arg HandOffset:struct
 * @text Hand Position Offsets
 * @type struct<HandOffset>
 * @desc Change target(s)'s offsets used for hand positions.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-12\",\"pattern0Y:num\":\"+14\",\"Pattern1\":\"\",\"pattern1X:num\":\"-12\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"-12\",\"pattern2Y:num\":\"+18\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+2\",\"pattern0Y:num\":\"+16\",\"Pattern1\":\"\",\"pattern1X:num\":\"+4\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"+6\",\"pattern2Y:num\":\"+16\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-2\",\"pattern0Y:num\":\"+16\",\"Pattern1\":\"\",\"pattern1X:num\":\"-4\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"-6\",\"pattern2Y:num\":\"+16\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+12\",\"pattern0Y:num\":\"-18\",\"Pattern1\":\"\",\"pattern1X:num\":\"+12\",\"pattern1Y:num\":\"-16\",\"Pattern2\":\"\",\"pattern2X:num\":\"+12\",\"pattern2Y:num\":\"-14\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @arg VsDashOffset:struct
 * @text VS8 Dash Offsets
 * @type struct<HandOffset>
 * @desc Change target(s)'s offsets used for hand positions for VS8 sprites while dashing.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @arg VsJumpOffset:struct
 * @text VS8 Jump Offsets
 * @type struct<HandOffset>
 * @desc Change target(s)'s offsets used for hand positions for VS8 sprites while jumping.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalOffsetChangeBoat
 * @text CONICAL OFFSET: Change Boat Settings
 * @desc Change the conical light hand offset for the boat vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedOffset:struct
 * @text Changed Offsets
 * @parent Boarded
 * @type struct<HandOffset>
 * @desc Changed offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"-23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"+23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedOffset:struct
 * @text Changed Offsets
 * @parent Unboarded
 * @type struct<HandOffset>
 * @desc Changed offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"-23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"+23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalOffsetChangeShip
 * @text CONICAL OFFSET: Change Ship Settings
 * @desc Change the conical light hand offset for the ship vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedOffset:struct
 * @text Changed Offsets
 * @parent Boarded
 * @type struct<HandOffset>
 * @desc Changed offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"-24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-24\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-23\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-24\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedOffset:struct
 * @text Changed Offsets
 * @parent Unboarded
 * @type struct<HandOffset>
 * @desc Changed offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"-24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-24\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-23\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-24\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalOffsetChangeAirship
 * @text CONICAL OFFSET: Change Airship Settings
 * @desc Change the conical light hand offset for the airship vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedOffset:struct
 * @text Changed Offsets
 * @parent Boarded
 * @type struct<HandOffset>
 * @desc Changed offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedOffset:struct
 * @text Changed Offsets
 * @parent Unboarded
 * @type struct<HandOffset>
 * @desc Changed offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_LightSpawns
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_LightSpawns
 * @text Category - Spawn Light(s)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LightSpawnNewMapLockedLight
 * @text SPAWN LIGHT: Create Light(s) at Map X/Y
 * @desc Map only! Create new light spawn(s) locked to the map.
 * Use tile coordinates for X and Y.
 * 
 * @arg LightSettings
 * @text Light Settings
 * 
 * @arg Settings:struct
 * @text Settings
 * @parent LightSettings
 * @type struct<Radial>
 * @desc Change the radial light settings for the light spawn(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"32","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @parent LightSettings
 * @type struct<Behavior>
 * @desc Change the behaviors for the light spawn(s).
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @arg Coordinates
 * @text Coordinates X/Y
 *
 * @arg CoordinatesX:eval
 * @text Origin X
 * @parent Coordinates
 * @desc What is the origin X position?
 * You may use JavaScript code.
 * @default $gamePlayer.x
 *
 * @arg CoordinatesY:eval
 * @text Origin Y
 * @parent Coordinates
 * @desc What is the origin Y position?
 * You may use JavaScript code.
 * @default $gamePlayer.y
 * 
 * @arg SpawnSettings
 * @text Spawn Settings
 *
 * @arg UpdateFunc:json
 * @text JS: Trajectory
 * @parent SpawnSettings
 * @type note
 * @desc Code used to determine the trajectory of these lights.
 * These will revolve around the origin X/Y position.
 * @default "// Declare Constants\nconst data = arguments[0];\nconst time = arguments[1];\n\n// Calculate Results\nconst angle = time * 1.0;\nconst radians = angle * Math.PI / 180.0;\nconst distance = 0;  // Distance from Center\nconst offsetX = 0;\nconst offsetY = 0;\nconst x = Math.cos(radians) * distance + offsetX;\nconst y = Math.sin(radians) * distance + offsetY;\n\n// Return Results\nreturn {\n    x: x,\n    y: y,\n};"
 *
 * @arg InitialTime:eval
 * @text Initial Time
 * @parent SpawnSettings
 * @desc What is the initial time value for this light spawn(s)?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg TotalSpawns:eval
 * @text Total Spawns
 * @parent InitialTime:eval
 * @desc How many light spawns should there be?
 * Minimum value: 1. You may use JavaScript code.
 * @default 1
 *
 * @arg TimeIncrement:eval
 * @text Time Increment
 * @parent InitialTime:eval
 * @desc What is the time increment between spawns?
 * @default +1
 *
 * @arg ExpirationTimer:eval
 * @text Expiration Timer
 * @parent SpawnSettings
 * @desc After how many frames will light spawn(s) expire?
 * Use 0 for no expiration. You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LightSpawnNewScreenLockedLight
 * @text SPAWN LIGHT: Create Light(s) at Screen X/Y
 * @desc Map only! Create new light spawn(s) locked to the screen.
 * The light spawn(s) is unaffected by map scrolling.
 * 
 * @arg LightSettings
 * @text Light Settings
 * 
 * @arg Settings:struct
 * @text Settings
 * @parent LightSettings
 * @type struct<Radial>
 * @desc Change the radial light settings for the light spawn(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"32","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @parent LightSettings
 * @type struct<Behavior>
 * @desc Change the behaviors for the light spawn(s).
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @arg Coordinates
 * @text Coordinates X/Y
 *
 * @arg CoordinatesX:eval
 * @text Origin X
 * @parent Coordinates
 * @desc What is the origin X position?
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg CoordinatesY:eval
 * @text Origin Y
 * @parent Coordinates
 * @desc What is the origin Y position?
 * You may use JavaScript code.
 * @default Graphics.height / 2
 * 
 * @arg SpawnSettings
 * @text Spawn Settings
 *
 * @arg UpdateFunc:json
 * @text JS: Trajectory
 * @parent SpawnSettings
 * @type note
 * @desc Code used to determine the trajectory of these lights.
 * These will revolve around the origin X/Y position.
 * @default "// Declare Constants\nconst data = arguments[0];\nconst time = arguments[1];\n\n// Calculate Results\nconst angle = time * 1.0;\nconst radians = angle * Math.PI / 180.0;\nconst distance = 0;  // Distance from Center\nconst offsetX = 0;\nconst offsetY = 0;\nconst x = Math.cos(radians) * distance + offsetX;\nconst y = Math.sin(radians) * distance + offsetY;\n\n// Return Results\nreturn {\n    x: x,\n    y: y,\n};"
 *
 * @arg InitialTime:eval
 * @text Initial Time
 * @parent SpawnSettings
 * @desc What is the initial time value for this light spawn(s)?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg TotalSpawns:eval
 * @text Total Spawns
 * @parent InitialTime:eval
 * @desc How many light spawns should there be?
 * Minimum value: 1. You may use JavaScript code.
 * @default 1
 *
 * @arg TimeIncrement:eval
 * @text Time Increment
 * @parent InitialTime:eval
 * @desc What is the time increment between spawns?
 * @default +1
 *
 * @arg ExpirationTimer:eval
 * @text Expiration Timer
 * @parent SpawnSettings
 * @desc After how many frames will light spawn(s) expire?
 * Use 0 for no expiration. You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LightSpawnNewPlayerLockedLight
 * @text SPAWN LIGHT: Create Light(s) on Player
 * @desc Map only! Create new light spawn(s) following the player.
 * Use tile coordinates for X and Y.
 * 
 * @arg LightSettings
 * @text Light Settings
 * 
 * @arg Settings:struct
 * @text Settings
 * @parent LightSettings
 * @type struct<Radial>
 * @desc Change the radial light settings for the light spawn(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"32","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @parent LightSettings
 * @type struct<Behavior>
 * @desc Change the behaviors for the light spawn(s).
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @arg SpawnSettings
 * @text Spawn Settings
 *
 * @arg UpdateFunc:json
 * @text JS: Trajectory
 * @parent SpawnSettings
 * @type note
 * @desc Code used to determine the trajectory of these lights.
 * These will revolve around the origin X/Y position.
 * @default "// Declare Constants\nconst data = arguments[0];\nconst time = arguments[1];\n\n// Calculate Results\nconst angle = time * 1.0;\nconst radians = angle * Math.PI / 180.0;\nconst distance = 0;  // Distance from Center\nconst offsetX = 0;\nconst offsetY = 0;\nconst x = Math.cos(radians) * distance + offsetX;\nconst y = Math.sin(radians) * distance + offsetY;\n\n// Return Results\nreturn {\n    x: x,\n    y: y,\n};"
 *
 * @arg InitialTime:eval
 * @text Initial Time
 * @parent SpawnSettings
 * @desc What is the initial time value for this light spawn(s)?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg TotalSpawns:eval
 * @text Total Spawns
 * @parent InitialTime:eval
 * @desc How many light spawns should there be?
 * Minimum value: 1. You may use JavaScript code.
 * @default 1
 *
 * @arg TimeIncrement:eval
 * @text Time Increment
 * @parent InitialTime:eval
 * @desc What is the time increment between spawns?
 * @default +1
 *
 * @arg ExpirationTimer:eval
 * @text Expiration Timer
 * @parent SpawnSettings
 * @desc After how many frames will light spawn(s) expire?
 * Use 0 for no expiration. You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LightSpawnNewFollowerLockedLight
 * @text SPAWN LIGHT: Create Light(s) on Follower
 * @desc Map only! Create new light spawn(s) following a follower.
 * Use tile coordinates for X and Y.
 * 
 * @arg LightSettings
 * @text Light Settings
 * 
 * @arg Settings:struct
 * @text Settings
 * @parent LightSettings
 * @type struct<Radial>
 * @desc Change the radial light settings for the light spawn(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"32","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @parent LightSettings
 * @type struct<Behavior>
 * @desc Change the behaviors for the light spawn(s).
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @arg Target
 * @text Target
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @parent Target
 * @desc Which follower index should the light(s) follow?
 * Index starts at 0. You may use JavaScript code.
 * @default 0
 * 
 * @arg SpawnSettings
 * @text Spawn Settings
 *
 * @arg UpdateFunc:json
 * @text JS: Trajectory
 * @parent SpawnSettings
 * @type note
 * @desc Code used to determine the trajectory of these lights.
 * These will revolve around the origin X/Y position.
 * @default "// Declare Constants\nconst data = arguments[0];\nconst time = arguments[1];\n\n// Calculate Results\nconst angle = time * 1.0;\nconst radians = angle * Math.PI / 180.0;\nconst distance = 0;  // Distance from Center\nconst offsetX = 0;\nconst offsetY = 0;\nconst x = Math.cos(radians) * distance + offsetX;\nconst y = Math.sin(radians) * distance + offsetY;\n\n// Return Results\nreturn {\n    x: x,\n    y: y,\n};"
 *
 * @arg InitialTime:eval
 * @text Initial Time
 * @parent SpawnSettings
 * @desc What is the initial time value for this light spawn(s)?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg TotalSpawns:eval
 * @text Total Spawns
 * @parent InitialTime:eval
 * @desc How many light spawns should there be?
 * Minimum value: 1. You may use JavaScript code.
 * @default 1
 *
 * @arg TimeIncrement:eval
 * @text Time Increment
 * @parent InitialTime:eval
 * @desc What is the time increment between spawns?
 * @default +1
 *
 * @arg ExpirationTimer:eval
 * @text Expiration Timer
 * @parent SpawnSettings
 * @desc After how many frames will light spawn(s) expire?
 * Use 0 for no expiration. You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LightSpawnNewEventLockedLight
 * @text SPAWN LIGHT: Create Light(s) on Event
 * @desc Map only! Create new light spawn(s) following an event.
 * Use tile coordinates for X and Y.
 * 
 * @arg LightSettings
 * @text Light Settings
 * 
 * @arg Settings:struct
 * @text Settings
 * @parent LightSettings
 * @type struct<Radial>
 * @desc Change the radial light settings for the light spawn(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"32","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @parent LightSettings
 * @type struct<Behavior>
 * @desc Change the behaviors for the light spawn(s).
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @arg Target
 * @text Target
 *
 * @arg EventID:eval
 * @text Event ID
 * @parent Target
 * @desc Which map event should the light(s) follow?
 * Use 0 for "this event". You may use JavaScript code.
 * @default 0
 * 
 * @arg SpawnSettings
 * @text Spawn Settings
 *
 * @arg UpdateFunc:json
 * @text JS: Trajectory
 * @parent SpawnSettings
 * @type note
 * @desc Code used to determine the trajectory of these lights.
 * These will revolve around the origin X/Y position.
 * @default "// Declare Constants\nconst data = arguments[0];\nconst time = arguments[1];\n\n// Calculate Results\nconst angle = time * 1.0;\nconst radians = angle * Math.PI / 180.0;\nconst distance = 0;  // Distance from Center\nconst offsetX = 0;\nconst offsetY = 0;\nconst x = Math.cos(radians) * distance + offsetX;\nconst y = Math.sin(radians) * distance + offsetY;\n\n// Return Results\nreturn {\n    x: x,\n    y: y,\n};"
 *
 * @arg InitialTime:eval
 * @text Initial Time
 * @parent SpawnSettings
 * @desc What is the initial time value for this light spawn(s)?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg TotalSpawns:eval
 * @text Total Spawns
 * @parent InitialTime:eval
 * @desc How many light spawns should there be?
 * Minimum value: 1. You may use JavaScript code.
 * @default 1
 *
 * @arg TimeIncrement:eval
 * @text Time Increment
 * @parent InitialTime:eval
 * @desc What is the time increment between spawns?
 * @default +1
 *
 * @arg ExpirationTimer:eval
 * @text Expiration Timer
 * @parent SpawnSettings
 * @desc After how many frames will light spawn(s) expire?
 * Use 0 for no expiration. You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LightSpawnExpireSpawnedLights
 * @text SPAWN LIGHT: Expire All Spawned Light(s)
 * @desc Map only! Expires all spawned lights.
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
 * @param LightingEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Map:struct
 * @text Map Lighting Settings
 * @type struct<Map>
 * @desc Lighting settings for the map scene.
 * @default {"General":"","Enable:eval":"true","ShakeBuffer:num":"80","PlayerDefaults":"","PlayerRadial:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"radius:num\":\"216\",\"color:str\":\"#ffffff\",\"intensity:num\":\"0.15\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"64\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","PlayerRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","PlayerConical:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.1\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"240\",\"miniRadius:num\":\"8\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"60\",\"angleSway:num\":\"6\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","PlayerConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","FollowerDefaults":"","FollowerRadial:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"radius:num\":\"216\",\"color:str\":\"#ffffff\",\"intensity:num\":\"0.15\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"64\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","FollowerRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","FollowerConical:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"240\",\"miniRadius:num\":\"8\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"60\",\"angleSway:num\":\"6\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"followMouse:eval\":\"false\",\"useHandOffset:eval\":\"true\",\"forceDirection:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","FollowerConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","EventDefaults":"","EventRadial:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"radius:num\":\"72\",\"color:str\":\"#ffffff\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","EventRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","EventConical:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"240\",\"miniRadius:num\":\"8\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"60\",\"angleSway:num\":\"6\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"followMouse:eval\":\"false\",\"useHandOffset:eval\":\"true\",\"forceDirection:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","EventConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","Vehicles":"","Boat":"","BoatBoarded":"","BoatBoardedRadialSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"240\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"128\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","BoatBoardedRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","BoatBoardedConicalSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"360\",\"miniRadius:num\":\"8\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"60\",\"angleSway:num\":\"0\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","BoatBoardedConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","BoatBoardedConicalOffset:struct":"{\"StandardDirections\":\"\",\"dir2:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+8\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+7\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+8\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir4:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"-23\\\",\\\"pattern0Y:num\\\":\\\"-8\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"-24\\\",\\\"pattern1Y:num\\\":\\\"-8\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"-23\\\",\\\"pattern2Y:num\\\":\\\"-8\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir6:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+23\\\",\\\"pattern0Y:num\\\":\\\"-8\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+24\\\",\\\"pattern1Y:num\\\":\\\"-8\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+23\\\",\\\"pattern2Y:num\\\":\\\"-8\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir8:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"-23\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"-24\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"-23\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"DiagonalDirections\":\"\",\"dir1:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir3:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir7:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir9:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\"}","BoatUnboarded":"","BoatUnboardedRadialSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"72\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"64\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","BoatUnboardedRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","BoatUnboardedConicalSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"360\",\"miniRadius:num\":\"8\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"60\",\"angleSway:num\":\"0\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","BoatUnboardedConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","BoatUnboardedConicalOffset:struct":"{\"StandardDirections\":\"\",\"dir2:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+8\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+7\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+8\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir4:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"-23\\\",\\\"pattern0Y:num\\\":\\\"-8\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"-24\\\",\\\"pattern1Y:num\\\":\\\"-8\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"-23\\\",\\\"pattern2Y:num\\\":\\\"-8\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir6:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+23\\\",\\\"pattern0Y:num\\\":\\\"-8\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+24\\\",\\\"pattern1Y:num\\\":\\\"-8\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+23\\\",\\\"pattern2Y:num\\\":\\\"-8\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir8:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"-23\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"-24\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"-23\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"DiagonalDirections\":\"\",\"dir1:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir3:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir7:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir9:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\"}","Ship":"","ShipBoarded":"","ShipBoardedRadialSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"300\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"160\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","ShipBoardedRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","ShipBoardedConicalSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"480\",\"miniRadius:num\":\"16\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"75\",\"angleSway:num\":\"0\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","ShipBoardedConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","ShipBoardedConicalOffset:struct":"{\"StandardDirections\":\"\",\"dir2:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+23\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+24\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+23\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir4:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"-24\\\",\\\"pattern0Y:num\\\":\\\"+6\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"-24\\\",\\\"pattern1Y:num\\\":\\\"+7\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"-24\\\",\\\"pattern2Y:num\\\":\\\"+6\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir6:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+24\\\",\\\"pattern0Y:num\\\":\\\"+6\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+24\\\",\\\"pattern1Y:num\\\":\\\"+7\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+24\\\",\\\"pattern2Y:num\\\":\\\"+6\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir8:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"-24\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"-23\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"-24\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"DiagonalDirections\":\"\",\"dir1:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir3:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir7:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir9:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\"}","ShipUnboarded":"","ShipUnboardedRadialSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"72\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"64\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","ShipUnboardedRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","ShipUnboardedConicalSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"480\",\"miniRadius:num\":\"16\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"75\",\"angleSway:num\":\"0\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","ShipUnboardedConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","ShipUnboardedConicalOffset:struct":"{\"StandardDirections\":\"\",\"dir2:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+23\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+24\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+23\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir4:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"-24\\\",\\\"pattern0Y:num\\\":\\\"+6\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"-24\\\",\\\"pattern1Y:num\\\":\\\"+7\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"-24\\\",\\\"pattern2Y:num\\\":\\\"+6\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir6:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+24\\\",\\\"pattern0Y:num\\\":\\\"+6\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+24\\\",\\\"pattern1Y:num\\\":\\\"+7\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+24\\\",\\\"pattern2Y:num\\\":\\\"+6\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir8:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"-24\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"-23\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"-24\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"DiagonalDirections\":\"\",\"dir1:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir3:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir7:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir9:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\"}","Airship":"","AirshipBoarded":"","AirshipBoardedRadialSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"360\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"192\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","AirshipBoardedRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","AirshipBoardedConicalSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"600\",\"miniRadius:num\":\"32\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"90\",\"angleSway:num\":\"0\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","AirshipBoardedConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","AirshipBoardedConicalOffset:struct":"{\"StandardDirections\":\"\",\"dir2:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir4:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir6:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir8:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"DiagonalDirections\":\"\",\"dir1:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir3:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir7:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir9:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\"}","AirshipUnboarded":"","AirshipUnboardedRadialSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"72\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"64\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","AirshipUnboardedRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","AirshipUnboardedConicalSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"600\",\"miniRadius:num\":\"32\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"90\",\"angleSway:num\":\"0\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","AirshipUnboardedConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","AirshipUnboardedConicalOffset:struct":"{\"StandardDirections\":\"\",\"dir2:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir4:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir6:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir8:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"DiagonalDirections\":\"\",\"dir1:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir3:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir7:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir9:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\"}"}
 * 
 * @param HandOffset:struct
 * @text Hand Position Offsets
 * @parent Map:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for hand positions.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-12\",\"pattern0Y:num\":\"+14\",\"Pattern1\":\"\",\"pattern1X:num\":\"-12\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"-12\",\"pattern2Y:num\":\"+18\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+2\",\"pattern0Y:num\":\"+16\",\"Pattern1\":\"\",\"pattern1X:num\":\"+4\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"+6\",\"pattern2Y:num\":\"+16\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-2\",\"pattern0Y:num\":\"+16\",\"Pattern1\":\"\",\"pattern1X:num\":\"-4\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"-6\",\"pattern2Y:num\":\"+16\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+12\",\"pattern0Y:num\":\"-18\",\"Pattern1\":\"\",\"pattern1X:num\":\"+12\",\"pattern1Y:num\":\"-16\",\"Pattern2\":\"\",\"pattern2X:num\":\"+12\",\"pattern2Y:num\":\"-14\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @param VsDashOffset:struct
 * @text VS8 Dash Offsets
 * @parent Map:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for hand positions for VS8 sprites while dashing.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @param VsJumpOffset:struct
 * @text VS8 Jump Offsets
 * @parent Map:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for hand positions for VS8 sprites while jumping.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @param Battle:struct
 * @text Battle Lighting Settings
 * @type struct<Battle>
 * @desc Lighting settings for the battle scene.
 * Requires VisuMZ_1_BattleCore!
 * @default {"General":"","Enable:eval":"true","ActorDefaults":"","ActorRadial:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"64\",\"intensity:num\":\"0.15\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"128\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","ActorRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","ActorAutoRadius:eval":"true","EnemyDefaults":"","EnemyRadial:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"64\",\"intensity:num\":\"0.15\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"128\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","EnemyRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","EnemyAutoRadius:eval":"true"}
 *
 * @param AntiLight:struct
 * @text Anti-Light Settings
 * @type struct<AntiLight>
 * @desc Settings to determine default anti-light tile markers.
 * @default {"Hard":"","HardRegions:arraynum":"[]","HardTerrainTags:arraynum":"[]","Soft":"","SoftRegions:arraynum":"[]","SoftTerrainTags:arraynum":"[]"}
 *
 * @param AutoLight:struct
 * @text Auto-Light Regions
 * @type struct<AutoLight>
 * @desc Light up specific parts of the map with regions.
 * @default {"opacity100:arraynum":"[]","opacity95:arraynum":"[]","opacity90:arraynum":"[]","opacity85:arraynum":"[]","opacity80:arraynum":"[]","opacity75:arraynum":"[]","opacity70:arraynum":"[]","opacity65:arraynum":"[]","opacity60:arraynum":"[]","opacity55:arraynum":"[]","opacity50:arraynum":"[]","opacity45:arraynum":"[]","opacity40:arraynum":"[]","opacity35:arraynum":"[]","opacity30:arraynum":"[]","opacity25:arraynum":"[]","opacity20:arraynum":"[]","opacity15:arraynum":"[]","opacity10:arraynum":"[]","opacity5:arraynum":"[]"}
 *
 * @param PresetColors:struct
 * @text Preset Colors Settings
 * @type struct<PresetColors>
 * @desc Preset Color settings for this plugin.
 * @default {"Daytime":"","dawn:str":"#5674b9","day:str":"#ffffff","dusk:str":"#f7941d","night:str":"#2e3192","Greyscale":"","white:str":"#ffffff","light grey:str":"#aaaaaa","grey:str":"#888888","dark grey:str":"#444444","black:str":"#000000","Reds":"","light red:str":"#f69679","red:str":"#ff0000","dark red:str":"#790000","Oranges":"","light orange:str":"#fdc689","orange:str":"#f7941d","dark orange:str":"#7d4900","Yellows":"","light yellow:str":"#fff799","yellow:str":"#ffff00","dark yellow:str":"#827b00","Greens":"","light green:str":"#a3d39c","green:str":"#00ff00","dark green:str":"#005e20","Cyans":"","light cyan:str":"#7accc8","cyan:str":"#00ffff","dark cyan:str":"#005952","Blues":"","light blue:str":"#ace4fa","blue:str":"#0000ff","dark blue:str":"#003663","Purples":"","light purple:str":"#a186be","purple:str":"#92278f","dark purple:str":"#32004b","Magentas":"","light magenta:str":"#bd8cbf","magenta:str":"#ff00ff","dark magenta:str":"#7b0046","Pinks":"","light pink:str":"#f49ac1","pink:str":"#f06eaa","dark pink:str":"#9e0039","Browns":"","light brown:str":"#c69c6d","brown:str":"#8c6239","dark brown:str":"#603913","Misc":"","normal:str":"#ffffff","none:str":"#ffffff","dark:str":"#000000","null:str":"#000000"}
 *
 * @param Options:struct
 * @text Options Menu Settings
 * @type struct<Options>
 * @desc Lighting settings for the options scene.
 * @default {"Options":"","AdjustRect:eval":"true","BlinkingLights":"","AddBlinkingLights:eval":"true","BlinkingLightsName:str":"Blinking Lights","PulsingLights":"","AddPulsingLights:eval":"true","PulsingLightsName:str":"Pulsing Lights"}
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
 * Map Lighting Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Map:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable For Map?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Lighting Effects for map?
 * @default true
 *
 * @param ShakeBuffer:num
 * @text Shake Buffer
 * @parent General
 * @type number
 * @desc Screen shakes reveal more of the screen than normal.
 * How many pixels of buffer should you provide?
 * @default 80
 *
 * @param PlayerDefaults
 * @text Player Defaults
 * 
 * @param PlayerRadial:struct
 * @text Radial Light
 * @parent PlayerDefaults
 * @type struct<Radial>
 * @desc Default radial light settings for the player.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","radius:num":"216","color:str":"#ffffff","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param PlayerRadialBehavior:struct
 * @text Default Behavior
 * @parent PlayerRadial:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for the player radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param PlayerConical:struct
 * @text Conical Light
 * @parent PlayerDefaults
 * @type struct<Conical>
 * @desc Default conical light settings for the player.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"240","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"6","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","followMouse:eval":"true","useHandOffset:eval":"true","forceDirection:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param PlayerConicalBehavior:struct
 * @text Default Behavior
 * @parent PlayerConical:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for the player conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @param FollowerDefaults
 * @text Follower Defaults
 * 
 * @param FollowerRadial:struct
 * @text Radial Light
 * @parent FollowerDefaults
 * @type struct<Radial>
 * @desc Default radial light settings for followers.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","radius:num":"216","color:str":"#ffffff","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param FollowerRadialBehavior:struct
 * @text Default Behavior
 * @parent FollowerRadial:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for follower radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param FollowerConical:struct
 * @text Conical Light
 * @parent FollowerDefaults
 * @type struct<Conical>
 * @desc Default conical light settings for followers.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"240","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"6","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","followMouse:eval":"false","useHandOffset:eval":"true","forceDirection:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param FollowerConicalBehavior:struct
 * @text Default Behavior
 * @parent FollowerConical:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for follower conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @param EventDefaults
 * @text Event Defaults
 * 
 * @param EventRadial:struct
 * @text Radial Light
 * @parent EventDefaults
 * @type struct<Radial>
 * @desc Default radial light settings for events.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","radius:num":"72","color:str":"#ffffff","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param EventRadialBehavior:struct
 * @text Default Behavior
 * @parent EventRadial:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for event radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param EventConical:struct
 * @text Conical Light
 * @parent EventDefaults
 * @type struct<Conical>
 * @desc Default conical light settings for events.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"240","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"6","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","followMouse:eval":"false","useHandOffset:eval":"true","forceDirection:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param EventConicalBehavior:struct
 * @text Default Behavior
 * @parent EventConical:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for event conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param Vehicles
 * 
 * @param Boat
 * @parent Vehicles
 *
 * @param BoatBoarded
 * @text Boarded
 * @parent Boat
 * 
 * @param BoatBoardedRadialSettings:struct
 * @text Radial Light
 * @parent BoatBoarded
 * @type struct<Radial>
 * @desc Default radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"240","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"128","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param BoatBoardedRadialBehavior:struct
 * @text Default Behavior
 * @parent BoatBoardedRadialSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param BoatBoardedConicalSettings:struct
 * @text Conical Light
 * @parent BoatBoarded
 * @type struct<Conical>
 * @desc Default conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"360","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param BoatBoardedConicalBehavior:struct
 * @text Default Behavior
 * @parent BoatBoardedConicalSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param BoatBoardedConicalOffset:struct
 * @text "Hand" Offsets
 * @parent BoatBoardedConicalSettings:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"-23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"+23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @param BoatUnboarded
 * @text Unboarded
 * @parent Boat
 * 
 * @param BoatUnboardedRadialSettings:struct
 * @text Radial Light
 * @parent BoatUnboarded
 * @type struct<Radial>
 * @desc Default radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"72","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param BoatUnboardedRadialBehavior:struct
 * @text Default Behavior
 * @parent BoatUnboardedRadialSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param BoatUnboardedConicalSettings:struct
 * @text Conical Light
 * @parent BoatUnboarded
 * @type struct<Conical>
 * @desc Default conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"360","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param BoatUnboardedConicalBehavior:struct
 * @text Default Behavior
 * @parent BoatUnboardedConicalSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param BoatUnboardedConicalOffset:struct
 * @text "Hand" Offsets
 * @parent BoatUnboardedConicalSettings:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"-23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"+23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @param Ship
 * @parent Vehicles
 *
 * @param ShipBoarded
 * @text Boarded
 * @parent Ship
 * 
 * @param ShipBoardedRadialSettings:struct
 * @text Radial Light
 * @parent ShipBoarded
 * @type struct<Radial>
 * @desc Default radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"300","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"160","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param ShipBoardedRadialBehavior:struct
 * @text Default Behavior
 * @parent ShipBoardedRadialSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param ShipBoardedConicalSettings:struct
 * @text Conical Light
 * @parent ShipBoarded
 * @type struct<Conical>
 * @desc Default conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"480","miniRadius:num":"16","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"75","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param ShipBoardedConicalBehavior:struct
 * @text Default Behavior
 * @parent ShipBoardedConicalSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param ShipBoardedConicalOffset:struct
 * @text "Hand" Offsets
 * @parent ShipBoardedConicalSettings:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"-24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-24\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-23\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-24\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @param ShipUnboarded
 * @text Unboarded
 * @parent Ship
 * 
 * @param ShipUnboardedRadialSettings:struct
 * @text Radial Light
 * @parent ShipUnboarded
 * @type struct<Radial>
 * @desc Default radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"72","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param ShipUnboardedRadialBehavior:struct
 * @text Default Behavior
 * @parent ShipUnboardedRadialSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param ShipUnboardedConicalSettings:struct
 * @text Conical Light
 * @parent ShipUnboarded
 * @type struct<Conical>
 * @desc Default conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"480","miniRadius:num":"16","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"75","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param ShipUnboardedConicalBehavior:struct
 * @text Default Behavior
 * @parent ShipUnboardedConicalSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param ShipUnboardedConicalOffset:struct
 * @text "Hand" Offsets
 * @parent ShipUnboardedConicalSettings:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"-24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-24\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-23\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-24\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @param Airship
 * @parent Vehicles
 *
 * @param AirshipBoarded
 * @text Boarded
 * @parent Airship
 * 
 * @param AirshipBoardedRadialSettings:struct
 * @text Radial Light
 * @parent AirshipBoarded
 * @type struct<Radial>
 * @desc Default radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"360","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"192","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param AirshipBoardedRadialBehavior:struct
 * @text Default Behavior
 * @parent AirshipBoardedRadialSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param AirshipBoardedConicalSettings:struct
 * @text Conical Light
 * @parent AirshipBoarded
 * @type struct<Conical>
 * @desc Default conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"600","miniRadius:num":"32","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"90","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param AirshipBoardedConicalBehavior:struct
 * @text Default Behavior
 * @parent AirshipBoardedConicalSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param AirshipBoardedConicalOffset:struct
 * @text "Hand" Offsets
 * @parent AirshipBoardedConicalSettings:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @param AirshipUnboarded
 * @text Unboarded
 * @parent Airship
 * 
 * @param AirshipUnboardedRadialSettings:struct
 * @text Radial Light
 * @parent AirshipUnboarded
 * @type struct<Radial>
 * @desc Default radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"72","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param AirshipUnboardedRadialBehavior:struct
 * @text Default Behavior
 * @parent AirshipUnboardedRadialSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param AirshipUnboardedConicalSettings:struct
 * @text Conical Light
 * @parent AirshipUnboarded
 * @type struct<Conical>
 * @desc Default conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"600","miniRadius:num":"32","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"90","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param AirshipUnboardedConicalBehavior:struct
 * @text Default Behavior
 * @parent AirshipUnboardedConicalSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param AirshipUnboardedConicalOffset:struct
 * @text "Hand" Offsets
 * @parent AirshipUnboardedConicalSettings:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 */
/* ----------------------------------------------------------------------------
 * Battle Lighting Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battle:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable For Battle?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Lighting Effects for battles?
 * Requires VisuMZ_1_BattleCore!
 * @default true
 * 
 * @param ActorDefaults
 * @text Actor Defaults
 * 
 * @param ActorRadial:struct
 * @text Battle Light
 * @parent ActorDefaults
 * @type struct<Radial>
 * @desc Default battle-radial light settings for actors.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"64","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"128","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param ActorRadialBehavior:struct
 * @text Default Behavior
 * @parent ActorRadial:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for actor radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @param ActorAutoRadius:eval
 * @text Auto-Calc Radius
 * @parent ActorRadial:struct
 * @type boolean
 * @on Calculate Radius
 * @off Use Default Radius
 * @desc Automatically calculates the radius size based on sprite's
 * width/height. Ignore if use <Radial Light Radius: x>.
 * @default true
 * 
 * @param EnemyDefaults
 * @text Enemy Defaults
 * 
 * @param EnemyRadial:struct
 * @text Battle Light
 * @parent EnemyDefaults
 * @type struct<Radial>
 * @desc Default battle-radial light settings for enemies.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"64","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"128","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param EnemyRadialBehavior:struct
 * @text Default Behavior
 * @parent EnemyRadial:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for enemy radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @param EnemyAutoRadius:eval
 * @text Auto-Calc Radius
 * @parent EnemyRadial:struct
 * @type boolean
 * @on Calculate Radius
 * @off Use Default Radius
 * @desc Automatically calculates the radius size based on sprite's
 * width/height. Ignore if use <Radial Light Radius: x>.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Anti-Light Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AntiLight:
 *
 * @param Hard
 * @text Hard Edges
 *
 * @param HardRegions:arraynum
 * @text Regions
 * @parent Hard
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which regions by default apply anti-light?
 * 0 is ignored. Use a number from 1 to 255.
 * @default []
 *
 * @param HardTerrainTags:arraynum
 * @text Terrain Tags
 * @parent Hard
 * @type number[]
 * @min 1
 * @max 7
 * @desc Which terrain tags by default apply anti-light?
 * 0 is ignored. Use a number from 1 to 7.
 * @default []
 *
 * @param Soft
 * @text Soft Edges
 *
 * @param SoftRegions:arraynum
 * @text Regions
 * @parent Soft
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which regions by default apply anti-light?
 * 0 is ignored. Use a number from 1 to 255.
 * @default []
 *
 * @param SoftTerrainTags:arraynum
 * @text Terrain Tags
 * @parent Soft
 * @type number[]
 * @min 1
 * @max 7
 * @desc Which terrain tags by default apply anti-light?
 * 0 is ignored. Use a number from 1 to 7.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Auto-Light Regions Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoLight:
 *
 * @param opacity100:arraynum
 * @text Opacity - 100%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity95:arraynum
 * @text Opacity - 95%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity90:arraynum
 * @text Opacity - 90%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity85:arraynum
 * @text Opacity - 85%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity80:arraynum
 * @text Opacity - 80%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity75:arraynum
 * @text Opacity - 75%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity70:arraynum
 * @text Opacity - 70%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity65:arraynum
 * @text Opacity - 65%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity60:arraynum
 * @text Opacity - 60%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity55:arraynum
 * @text Opacity - 55%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity50:arraynum
 * @text Opacity - 50%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity45:arraynum
 * @text Opacity - 45%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity40:arraynum
 * @text Opacity - 40%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity35:arraynum
 * @text Opacity - 35%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity30:arraynum
 * @text Opacity - 30%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity25:arraynum
 * @text Opacity - 25%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity20:arraynum
 * @text Opacity - 20%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity15:arraynum
 * @text Opacity - 15%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity10:arraynum
 * @text Opacity - 10%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity5:arraynum
 * @text Opacity - 5%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Preset Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PresetColors:
 *
 * @param Daytime
 * @text Daytime Colors
 *
 * @param dawn:str
 * @text Dawn
 * @parent Daytime
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #5674b9
 *
 * @param day:str
 * @text Day
 * @parent Daytime
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ffffff
 *
 * @param dusk:str
 * @text Dusk
 * @parent Daytime
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #f7941d
 *
 * @param night:str
 * @text Night
 * @parent Daytime
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #2e3192
 *
 * @param Greyscale
 * @text Greyscale Colors
 *
 * @param white:str
 * @text White
 * @parent Greyscale
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ffffff
 *
 * @param light grey:str
 * @text Light Grey
 * @parent Greyscale
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #aaaaaa
 *
 * @param grey:str
 * @text Grey
 * @parent Greyscale
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #888888
 *
 * @param dark grey:str
 * @text Dark Grey
 * @parent Greyscale
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #444444
 *
 * @param black:str
 * @text Black
 * @parent Greyscale
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param Reds
 * @text Red Colors
 *
 * @param light red:str
 * @text Light Red
 * @parent Reds
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #f69679
 *
 * @param red:str
 * @text Red
 * @parent Reds
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ff0000
 *
 * @param dark red:str
 * @text Dark Red
 * @parent Reds
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #790000
 *
 * @param Oranges
 * @text Orange Colors
 *
 * @param light orange:str
 * @text Light Orange
 * @parent Oranges
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #fdc689
 *
 * @param orange:str
 * @text Orange
 * @parent Oranges
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #f7941d
 *
 * @param dark orange:str
 * @text Dark Orange
 * @parent Oranges
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #7d4900
 *
 * @param Yellows
 * @text Yellow Colors
 *
 * @param light yellow:str
 * @text Light Yellow
 * @parent Yellows
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #fff799
 *
 * @param yellow:str
 * @text Yellow
 * @parent Yellows
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ffff00
 *
 * @param dark yellow:str
 * @text Dark Yellow
 * @parent Yellows
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #827b00
 *
 * @param Greens
 * @text Green Colors
 *
 * @param light green:str
 * @text Light Green
 * @parent Greens
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #a3d39c
 *
 * @param green:str
 * @text Green
 * @parent Greens
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #00ff00
 *
 * @param dark green:str
 * @text Dark Green
 * @parent Greens
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #005e20
 *
 * @param Cyans
 * @text Cyan Colors
 *
 * @param light cyan:str
 * @text Light Cyan
 * @parent Cyans
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #7accc8
 *
 * @param cyan:str
 * @text Cyan
 * @parent Cyans
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #00ffff
 *
 * @param dark cyan:str
 * @text Dark Cyan
 * @parent Cyans
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #005952
 *
 * @param Blues
 * @text Blue Colors
 *
 * @param light blue:str
 * @text Light Blue
 * @parent Blues
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ace4fa
 *
 * @param blue:str
 * @text Blue
 * @parent Blues
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #0000ff
 *
 * @param dark blue:str
 * @text Dark Blue
 * @parent Blues
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #003663
 *
 * @param Purples
 * @text Purple Colors
 *
 * @param light purple:str
 * @text Light Purple
 * @parent Purples
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #a186be
 *
 * @param purple:str
 * @text Purple
 * @parent Purples
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #92278f
 *
 * @param dark purple:str
 * @text Dark Purple
 * @parent Purples
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #32004b
 *
 * @param Magentas
 * @text Magenta Colors
 *
 * @param light magenta:str
 * @text Light Magenta
 * @parent Magentas
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #bd8cbf
 *
 * @param magenta:str
 * @text Magenta
 * @parent Magentas
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ff00ff
 *
 * @param dark magenta:str
 * @text Dark Magenta
 * @parent Magentas
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #7b0046
 *
 * @param Pinks
 * @text Pink Colors
 *
 * @param light pink:str
 * @text Light Pink
 * @parent Pinks
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #f49ac1
 *
 * @param pink:str
 * @text Pink
 * @parent Pinks
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #f06eaa
 *
 * @param dark pink:str
 * @text Dark Pink
 * @parent Pinks
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #9e0039
 *
 * @param Browns
 * @text Brown Colors
 *
 * @param light brown:str
 * @text Light Brown
 * @parent Browns
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #c69c6d
 *
 * @param brown:str
 * @text Brown
 * @parent Browns
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #8c6239
 *
 * @param dark brown:str
 * @text Dark Brown
 * @parent Browns
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #603913
 *
 * @param Misc
 * @text Misc Colors
 *
 * @param normal:str
 * @text Normal
 * @parent Misc
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ffffff
 *
 * @param none:str
 * @text None
 * @parent Misc
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ffffff
 *
 * @param dark:str
 * @text Dark
 * @parent Misc
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param null:str
 * @text Null
 * @parent Misc
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
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
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param BlinkingLights
 * @text Blinking Lights
 *
 * @param AddBlinkingLights:eval
 * @text Add Option?
 * @parent BlinkingLights
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Blinking Lights' option to the Options menu?
 * @default true
 *
 * @param BlinkingLightsName:str
 * @text Option Name
 * @parent BlinkingLights
 * @desc Command name of the option.
 * @default Blinking Lights
 *
 * @param PulsingLights
 * @text Pulsing Lights
 *
 * @param AddPulsingLights:eval
 * @text Add Option?
 * @parent PulsingLights
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Pulsing Lights' option to the Options menu?
 * @default true
 *
 * @param PulsingLightsName:str
 * @text Option Name
 * @parent PulsingLights
 * @desc Command name of the option.
 * @default Pulsing Lights
 *
 */
/* ----------------------------------------------------------------------------
 * Radial Light Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Radial:
 *
 * @param General
 *
 * @param enabled:eval
 * @text Enabled?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Is this radial light enabled?
 * @default true
 *
 * @param Properties
 *
 * @param filename:str
 * @text Filename
 * @parent Properties
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the light effect image.
 * If used, ignore Color, Radius, and Intensity.
 * @default 
 *
 * @param color:str
 * @text Color
 * @parent Properties
 * @desc Color of the radial light in #rrggbb format.
 * For generated lights only. Ignore if using image.
 * @default #ffffff
 *
 * @param radius:num
 * @text Radius
 * @parent Properties
 * @type number
 * @min 1
 * @desc What is the radius of this radial light?
 * For generated lights only. Ignore if using image.
 * @default 72
 *
 * @param intensity:num
 * @text Intensity
 * @parent Properties
 * @desc Radial light intensity. Use value between 0 & 1.
 * For generated lights only. Ignore if using image.
 * @default 0.50
 *
 * @param Optional
 * 
 * @param angle:num
 * @text Angle
 * @parent Optional
 * @type number
 * @min 0
 * @max 360
 * @desc What is the angle of this radial light?
 * Only noticeable with using images.
 * @default 0
 * 
 * @param rotateSpeed:num
 * @text Rotate Speed
 * @parent angle:num
 * @type number
 * @desc The rotation speed of this light?
 * Lower: slower. Higher: faster. Negative: reverse.
 * @default +0
 *
 * @param blendMode:num
 * @text Blend Mode
 * @parent Optional
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the radial light?
 * @default 3
 *
 * @param opacity:num
 * @text Opacity
 * @parent Optional
 * @type number
 * @min 0
 * @max 255
 * @desc What is the opacity (0 to 255)?
 * Lower: dimmer. Higher: Brighter.
 * @default 255
 *
 * @param Offsets
 *
 * @param offsetX:num
 * @text Offset X
 * @parent Offsets
 * @desc Offset the X position of this light.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param offsetY:num
 * @text Offset Y
 * @parent Offsets
 * @desc Offset the Y position of this light.
 * Negative: up. Positive: down.
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Conical Light Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Conical:
 *
 * @param General
 *
 * @param enabled:eval
 * @text Enabled?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Is this conical light enabled?
 * @default true
 *
 * @param Properties
 *
 * @param filename:str
 * @text Filename
 * @parent Properties
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the light effect image.
 * If used, ignore Color, Radius, and Intensity.
 * @default 
 * 
 * @param fileAngleOffset:num
 * @text Angle Offset
 * @parent filename:str
 * @type number
 * @min 0
 * @max 360
 * @desc Offset the image angle by this many degrees.
 * Only applies to images.
 * @default 0
 *
 * @param fileAnchorX:num
 * @text File Anchor X
 * @parent filename:str
 * @desc Anchor X used for images.
 * Left: 0.0; Center: 0.5; Right: 1.0
 * @default 0.5
 *
 * @param fileAnchorY:num
 * @text File Anchor Y
 * @parent filename:str
 * @desc Anchor Y used for images.
 * Top: 0.0; Middle: 0.5; Bottom: 1.0
 * @default 0.5
 *
 * @param color:str
 * @text Color
 * @parent Properties
 * @desc Color of the conical light in #rrggbb format.
 * For generated lights only. Ignore if using image.
 * @default #ffffff
 *
 * @param radius:num
 * @text Radius
 * @parent Properties
 * @type number
 * @min 1
 * @desc What is the radius of this conical light?
 * For generated lights only. Ignore if using image.
 * @default 240
 *
 * @param miniRadius:num
 * @text Source Radius
 * @parent radius:num
 * @type number
 * @min 1
 * @desc What is the radius of this light source?
 * For generated lights only. Ignore if using image.
 * @default 8
 *
 * @param intensity:num
 * @text Intensity
 * @parent Properties
 * @desc Conical light intensity. Use value between 0 & 1.
 * For generated lights only. Ignore if using image.
 * @default 0.25
 *
 * @param Optional
 *
 * @param blendMode:num
 * @text Blend Mode
 * @parent Optional
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the conical light?
 * @default 3
 *
 * @param opacity:num
 * @text Opacity
 * @parent Optional
 * @type number
 * @min 0
 * @max 255
 * @desc What is the opacity (0 to 255)?
 * Lower: dimmer. Higher: Brighter.
 * @default 255
 *
 * @param AngleSettings
 * @text Angle
 * 
 * @param angle:num
 * @text Arc Angle
 * @parent AngleSettings
 * @type number
 * @min 0
 * @max 360
 * @desc What is the angle of this conical light's arc?
 * @default 60
 * 
 * @param angleSway:num
 * @text Angle Sway
 * @parent AngleSettings
 * @type number
 * @desc How many degrees should this light sway?
 * Use 0 for no sway.
 * @default 6
 * 
 * @param swaySpeed:num
 * @text Sway Speed
 * @parent AngleSettings
 * @type number
 * @desc How fast should this light sway?
 * Lower: Slower; Higher: Faster
 * @default 0.1
 *
 * @param swayRng:eval
 * @text Randomize Sway?
 * @parent AngleSettings
 * @type boolean
 * @on Randomize
 * @off Structured
 * @desc Change the sway to offset at different starting points?
 * @default true
 *
 * @param Direction
 *
 * @param forceDirection:num
 * @text Forced Direction?
 * @parent Direction
 * @type select
 * @option none
 * @value 0
 * @option lower left
 * @value 1
 * @option down
 * @value 2
 * @option lower right
 * @value 3
 * @option left
 * @value 4
 * @option right
 * @value 6
 * @option upper left
 * @value 7
 * @option up
 * @value 8
 * @option upper right
 * @value 9
 * @desc Force the conical light to face a certain direction?
 * @default 0
 *
 * @param followMouse:eval
 * @text Follow Cursor?
 * @parent Direction
 * @type boolean
 * @on Follow Mouse
 * @off Don't Follow
 * @desc Follow the mouse cursor?
 * @default false
 *
 * @param Offsets
 *
 * @param useHandOffset:eval
 * @text Use Hand Offset?
 * @parent Offsets
 * @type boolean
 * @on Hand Offset
 * @off Center Offset
 * @desc Put the light source on the target's "hand" position? Disables the two settings below if on.
 * @default true
 *
 * @param offsetX:num
 * @text Offset X (Non-Hand)
 * @parent Offsets
 * @desc Offset the X position of this light.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param offsetY:num
 * @text Offset Y (Non-Hand)
 * @parent Offsets
 * @desc Offset the Y position of this light.
 * Negative: up. Positive: down.
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Light Behavior Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Behavior:
 *
 * @param Blink
 *
 * @param blinkRate:num
 * @text Blink Rate
 * @parent Blink
 * @desc What is the rate of occurance for this effect?
 * Use a decimal number between 0 and 1.
 * @default 0.00
 *
 * @param blinkModifier:num
 * @text Blink Modifier
 * @parent Blink
 * @desc Static multiplicative opacity modifier. Before additive.
 * Use a decimal number between -1 and 1. Negatives allowed.
 * @default -0.50
 *
 * @param Flicker
 *
 * @param flickerRate:num
 * @text Flicker Rate
 * @parent Flicker
 * @desc What is the rate of occurance for this effect?
 * Use a decimal number between 0 and 1.
 * @default 0.00
 *
 * @param flickerModifier:num
 * @text Flicker Modifier
 * @parent Flicker
 * @desc Random multiplicative opacity modifier. Before additive.
 * Use a decimal number between -1 and 1. Negatives allowed.
 * @default -0.50
 *
 * @param Flash
 *
 * @param flashRate:num
 * @text Flash Rate
 * @parent Flash
 * @desc What is the rate of occurance for this effect?
 * Use a decimal number between 0 and 1.
 * @default 0.00
 *
 * @param flashModifier:num
 * @text Flash Modifier
 * @parent Flash
 * @desc Static additive opacity modifier. Before multiplicative.
 * Use a decimal number between -1 and 1. Negatives allowed.
 * @default +0.50
 *
 * @param Flare
 *
 * @param flareRate:num
 * @text Flare Rate
 * @parent Flare
 * @desc What is the rate of occurance for this effect?
 * Use a decimal number between 0 and 1.
 * @default 0.00
 *
 * @param flareModifier:num
 * @text Flare Modifier
 * @parent Flare
 * @desc Random additive opacity modifier. Before multiplicative.
 * Use a decimal number between -1 and 1. Negatives allowed.
 * @default +0.50
 * 
 * @param Glow
 *
 * @param glowRate:num
 * @text Glow Rate
 * @parent Glow
 * @desc What is the glow change for this light?
 * Use a decimal number between 0 and 1.
 * @default 0.00
 *
 * @param glowSpeed:num
 * @text Glow Speed
 * @parent Glow
 * @desc What is the speed at which glow oscillates at?
 * Use a decimal number between 0 and 1.
 * @default 0.10
 *
 * @param glowRng:eval
 * @text Randomize Glow?
 * @parent Glow
 * @type boolean
 * @on Randomize
 * @off Structured
 * @desc Offset the glow to oscillate at different starting points?
 * @default true
 * 
 * @param Pulse
 *
 * @param pulseRate:num
 * @text Pulse Rate
 * @parent Pulse
 * @desc What is the pulse change for this light?
 * Use a decimal number between 0 and 1.
 * @default 0.00
 *
 * @param pulseSpeed:num
 * @text Pulse Speed
 * @parent Pulse
 * @desc What is the speed at which pulse oscillates at?
 * Use a decimal number between 0 and 1.
 * @default 0.10
 *
 * @param pulseRng:eval
 * @text Randomize Pulse?
 * @parent Pulse
 * @type boolean
 * @on Randomize
 * @off Structured
 * @desc Offset the pulse to oscillate at different starting points?
 * @default true
 * 
 * @param Pattern
 *
 * @param patternName:str
 * @text Pattern Name
 * @parent Pattern
 * @type select
 * @option none
 * @option normal
 * @option fluorescent
 * @option halogen
 * @option incandescent
 * @option candle
 * @option torch
 * @option campfire
 * @option fast strobe
 * @option slow strobe
 * @option strong pulse
 * @option medium pulse
 * @option slow pulse
 * @option underwater
 * @desc Select the pattern name for this light.
 * Ignore if using any Custom Pattern.
 * @default none
 *
 * @param pattern:str
 * @text Custom Pattern
 * @parent Pattern
 * @desc Create a custom pattern with letters from a to z.
 * Where 'a' is transparent and 'z' is opaque.
 * @default 
 *
 * @param patternDelay:num
 * @text Frame Delay
 * @parent Pattern
 * @type number
 * @min 1
 * @desc What is the frame delay between pattern updates?
 * @default 6
 *
 */
/* ----------------------------------------------------------------------------
 * Hand Offsets Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~HandOffset:
 * 
 * @param StandardDirections
 * @text Standard Directions
 * 
 * @param dir2:struct
 * @text Down
 * @parent StandardDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"-12","pattern0Y:num":"+14","Pattern1":"","pattern1X:num":"-12","pattern1Y:num":"+16","Pattern2":"","pattern2X:num":"-12","pattern2Y:num":"+18","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param dir4:struct
 * @text Left
 * @parent StandardDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"+2","pattern0Y:num":"+16","Pattern1":"","pattern1X:num":"+4","pattern1Y:num":"+16","Pattern2":"","pattern2X:num":"+6","pattern2Y:num":"+16","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param dir6:struct
 * @text Right
 * @parent StandardDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"-2","pattern0Y:num":"+16","Pattern1":"","pattern1X:num":"-4","pattern1Y:num":"+16","Pattern2":"","pattern2X:num":"-6","pattern2Y:num":"+16","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param dir8:struct
 * @text Up
 * @parent StandardDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"+12","pattern0Y:num":"-18","Pattern1":"","pattern1X:num":"+12","pattern1Y:num":"-16","Pattern2":"","pattern2X:num":"+12","pattern2Y:num":"-14","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param DiagonalDirections
 * @text Diagonal Directions
 * 
 * @param dir1:struct
 * @text Lower Left
 * @parent DiagonalDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"+0","pattern0Y:num":"+0","Pattern1":"","pattern1X:num":"+0","pattern1Y:num":"+0","Pattern2":"","pattern2X:num":"+0","pattern2Y:num":"+0","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param dir3:struct
 * @text Lower Right
 * @parent DiagonalDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"+0","pattern0Y:num":"+0","Pattern1":"","pattern1X:num":"+0","pattern1Y:num":"+0","Pattern2":"","pattern2X:num":"+0","pattern2Y:num":"+0","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param dir7:struct
 * @text Upper Left
 * @parent DiagonalDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"+0","pattern0Y:num":"+0","Pattern1":"","pattern1X:num":"+0","pattern1Y:num":"+0","Pattern2":"","pattern2X:num":"+0","pattern2Y:num":"+0","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param dir9:struct
 * @text Upper Right
 * @parent DiagonalDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"+0","pattern0Y:num":"+0","Pattern1":"","pattern1X:num":"+0","pattern1Y:num":"+0","Pattern2":"","pattern2X:num":"+0","pattern2Y:num":"+0","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 *
 */
/* ----------------------------------------------------------------------------
 * Pattern Offsets Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PatternOffset:
 *
 * @param Pattern0
 * @text Pattern 0
 *
 * @param pattern0X:num
 * @text Offset X
 * @parent Pattern0
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern0Y:num
 * @text Offset Y
 * @parent Pattern0
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern1
 * @text Pattern 1
 *
 * @param pattern1X:num
 * @text Offset X
 * @parent Pattern1
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern1Y:num
 * @text Offset Y
 * @parent Pattern1
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern2
 * @text Pattern 2
 *
 * @param pattern2X:num
 * @text Offset X
 * @parent Pattern2
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern2Y:num
 * @text Offset Y
 * @parent Pattern2
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern3
 * @text Pattern 3
 * @default (Unused by Default)
 *
 * @param pattern3X:num
 * @text Offset X
 * @parent Pattern3
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern3Y:num
 * @text Offset Y
 * @parent Pattern3
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern4
 * @text Pattern 4
 * @default (Unused by Default)
 *
 * @param pattern4X:num
 * @text Offset X
 * @parent Pattern4
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern4Y:num
 * @text Offset Y
 * @parent Pattern4
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern5
 * @text Pattern 5
 * @default (Unused by Default)
 *
 * @param pattern5X:num
 * @text Offset X
 * @parent Pattern5
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern5Y:num
 * @text Offset Y
 * @parent Pattern5
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern6
 * @text Pattern 6
 * @default (Unused by Default)
 *
 * @param pattern6X:num
 * @text Offset X
 * @parent Pattern6
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern6Y:num
 * @text Offset Y
 * @parent Pattern6
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern7
 * @text Pattern 7
 * @default (Unused by Default)
 *
 * @param pattern7X:num
 * @text Offset X
 * @parent Pattern7
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern7Y:num
 * @text Offset Y
 * @parent Pattern7
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern8
 * @text Pattern 8
 * @default (Unused by Default)
 *
 * @param pattern8X:num
 * @text Offset X
 * @parent Pattern8
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern8Y:num
 * @text Offset Y
 * @parent Pattern8
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern9
 * @text Pattern 9
 * @default (Unused by Default)
 *
 * @param pattern9X:num
 * @text Offset X
 * @parent Pattern9
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern9Y:num
 * @text Offset Y
 * @parent Pattern9
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern10
 * @text Pattern 10
 * @default (Unused by Default)
 *
 * @param pattern10X:num
 * @text Offset X
 * @parent Pattern10
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern10Y:num
 * @text Offset Y
 * @parent Pattern10
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 */
//=============================================================================

const _0x4b43fd=_0x11f9;(function(_0x440417,_0x47bd37){const _0x59af92=_0x11f9,_0x34ac93=_0x440417();while(!![]){try{const _0x4bf569=parseInt(_0x59af92(0x3ef))/(-0x145f+-0x955+0x1db5)+parseInt(_0x59af92(0x770))/(0x8e2*-0x3+0x1ce9+-0x241)*(-parseInt(_0x59af92(0x312))/(0x1*0x1391+-0x71d*0x3+-0x1c9*-0x1))+-parseInt(_0x59af92(0x603))/(0x1b6b+-0x232a+0x7c3)*(parseInt(_0x59af92(0x2ae))/(-0xcd1*0x3+-0x1f36+0x45ae))+parseInt(_0x59af92(0x3db))/(0x1c*0x47+0x1f28+-0x26e6)*(-parseInt(_0x59af92(0x5cd))/(-0x19b8+0x34f*0x1+0x1670))+parseInt(_0x59af92(0x2d2))/(-0x5e3*0x4+0x26d+0x1527)+parseInt(_0x59af92(0x4bf))/(-0x1a21*0x1+-0x1*0x2167+0x3b91)+parseInt(_0x59af92(0x5f6))/(0xe4a+0x22df+-0x311f)*(parseInt(_0x59af92(0x333))/(0x1b05+0x1*-0x7fa+-0x1300));if(_0x4bf569===_0x47bd37)break;else _0x34ac93['push'](_0x34ac93['shift']());}catch(_0x34f536){_0x34ac93['push'](_0x34ac93['shift']());}}}(_0x5630,-0x2b2e*-0x47+0x78028+-0x98eea));function _0x11f9(_0x5afcc0,_0x20fc6d){const _0x321ab7=_0x5630();return _0x11f9=function(_0x547418,_0x15a263){_0x547418=_0x547418-(-0x1091*-0x2+0x4*0xe3+-0x7*0x4f9);let _0x52a0fb=_0x321ab7[_0x547418];return _0x52a0fb;},_0x11f9(_0x5afcc0,_0x20fc6d);}var label=_0x4b43fd(0x3ba)+'fects',tier=tier||0x190f+0x23e1+-0xc3*0x50,dependencies=[_0x4b43fd(0x48a)+_0x4b43fd(0x609),_0x4b43fd(0x74d)+'ventsMoveC'+'ore'],pluginData=$plugins['filter'](function(_0x30c49c){const _0x16e438=_0x4b43fd,_0x42a419={'JPWhB':function(_0x4a835c,_0x51a61e){return _0x4a835c+_0x51a61e;}};return _0x30c49c[_0x16e438(0x35d)]&&_0x30c49c['descriptio'+'n'][_0x16e438(0x5ad)](_0x42a419[_0x16e438(0x696)](_0x42a419[_0x16e438(0x696)]('[',label),']'));})[-0x2370+-0xbcd*0x1+0x1d*0x1a1];VisuMZ[label][_0x4b43fd(0x5b6)]=VisuMZ[label][_0x4b43fd(0x5b6)]||{},VisuMZ[_0x4b43fd(0x5b0)+_0x4b43fd(0x565)]=function(_0x3f1a71,_0x3dfd46){const _0x14e752=_0x4b43fd,_0x1867ef={'ophmn':function(_0x4893c8,_0x1af67b){return _0x4893c8(_0x1af67b);},'RjHLL':function(_0x16b18f,_0x108863){return _0x16b18f(_0x108863);},'bWjmj':_0x14e752(0x77f),'ceJvv':function(_0x290318,_0x3d57e1){return _0x290318!==_0x3d57e1;},'EkeHT':_0x14e752(0x26b),'qgxVO':_0x14e752(0x360),'stSPJ':_0x14e752(0x701),'byPSV':function(_0x363b12,_0x181e2f){return _0x363b12!==_0x181e2f;},'fGCNg':_0x14e752(0x2eb),'jyubg':function(_0x251cf6,_0x6cb06){return _0x251cf6!==_0x6cb06;},'oIfbF':_0x14e752(0x6ff),'DKREc':_0x14e752(0x3e3),'eVDkD':function(_0x2112e0,_0x6428a5){return _0x2112e0!==_0x6428a5;},'wzttP':_0x14e752(0x67c),'wpYcE':_0x14e752(0x442),'AkYkT':_0x14e752(0x736),'Iphac':function(_0x12eaed,_0x466d0e){return _0x12eaed!==_0x466d0e;},'grnzu':_0x14e752(0x40e),'nDHzF':function(_0x34f164,_0x1114c5){return _0x34f164!==_0x1114c5;},'kDaik':_0x14e752(0x2ac),'xzGUI':_0x14e752(0x4c9)+'T'};for(const _0x24f8db in _0x3dfd46){if(_0x24f8db[_0x14e752(0x321)](/(.*):(.*)/i)){const _0xc4f0d8=_0x1867ef[_0x14e752(0x42a)](String,RegExp['$1']),_0x54e0f3=_0x1867ef[_0x14e752(0x319)](String,RegExp['$2'])[_0x14e752(0x6d4)+'e']()['trim']();let _0x170c54,_0x58622b,_0x14582d;switch(_0x54e0f3){case _0x1867ef[_0x14e752(0x1fd)]:_0x170c54=_0x1867ef[_0x14e752(0x69a)](_0x3dfd46[_0x24f8db],'')?_0x1867ef[_0x14e752(0x319)](Number,_0x3dfd46[_0x24f8db]):-0x30b*0x7+-0x1*0x1f17+0x3be*0xe;break;case _0x1867ef['EkeHT']:_0x58622b=_0x1867ef[_0x14e752(0x69a)](_0x3dfd46[_0x24f8db],'')?JSON[_0x14e752(0x240)](_0x3dfd46[_0x24f8db]):[],_0x170c54=_0x58622b[_0x14e752(0x2d5)](_0x521505=>Number(_0x521505));break;case _0x1867ef['qgxVO']:_0x170c54=_0x1867ef[_0x14e752(0x69a)](_0x3dfd46[_0x24f8db],'')?_0x1867ef[_0x14e752(0x42a)](eval,_0x3dfd46[_0x24f8db]):null;break;case _0x1867ef[_0x14e752(0x3ab)]:_0x58622b=_0x1867ef['byPSV'](_0x3dfd46[_0x24f8db],'')?JSON[_0x14e752(0x240)](_0x3dfd46[_0x24f8db]):[],_0x170c54=_0x58622b[_0x14e752(0x2d5)](_0x292f56=>eval(_0x292f56));break;case _0x1867ef[_0x14e752(0x73b)]:_0x170c54=_0x1867ef['jyubg'](_0x3dfd46[_0x24f8db],'')?JSON[_0x14e752(0x240)](_0x3dfd46[_0x24f8db]):'';break;case _0x1867ef[_0x14e752(0x532)]:_0x58622b=_0x1867ef[_0x14e752(0x245)](_0x3dfd46[_0x24f8db],'')?JSON[_0x14e752(0x240)](_0x3dfd46[_0x24f8db]):[],_0x170c54=_0x58622b[_0x14e752(0x2d5)](_0x2ce842=>JSON['parse'](_0x2ce842));break;case _0x1867ef[_0x14e752(0x685)]:_0x170c54=_0x1867ef[_0x14e752(0x54b)](_0x3dfd46[_0x24f8db],'')?new Function(JSON[_0x14e752(0x240)](_0x3dfd46[_0x24f8db])):new Function(_0x1867ef['wzttP']);break;case _0x1867ef[_0x14e752(0x70b)]:_0x58622b=_0x1867ef['jyubg'](_0x3dfd46[_0x24f8db],'')?JSON[_0x14e752(0x240)](_0x3dfd46[_0x24f8db]):[],_0x170c54=_0x58622b[_0x14e752(0x2d5)](_0x36ba78=>new Function(JSON[_0x14e752(0x240)](_0x36ba78)));break;case _0x1867ef[_0x14e752(0x408)]:_0x170c54=_0x1867ef[_0x14e752(0x566)](_0x3dfd46[_0x24f8db],'')?_0x1867ef[_0x14e752(0x319)](String,_0x3dfd46[_0x24f8db]):'';break;case _0x1867ef[_0x14e752(0x4ac)]:_0x58622b=_0x1867ef[_0x14e752(0x5d7)](_0x3dfd46[_0x24f8db],'')?JSON['parse'](_0x3dfd46[_0x24f8db]):[],_0x170c54=_0x58622b['map'](_0x26fce1=>String(_0x26fce1));break;case _0x1867ef['kDaik']:_0x14582d=_0x1867ef[_0x14e752(0x5d7)](_0x3dfd46[_0x24f8db],'')?JSON['parse'](_0x3dfd46[_0x24f8db]):{},_0x170c54=VisuMZ[_0x14e752(0x5b0)+'ams']({},_0x14582d);break;case _0x1867ef[_0x14e752(0x4c7)]:_0x58622b=_0x1867ef[_0x14e752(0x245)](_0x3dfd46[_0x24f8db],'')?JSON[_0x14e752(0x240)](_0x3dfd46[_0x24f8db]):[],_0x170c54=_0x58622b[_0x14e752(0x2d5)](_0x5ed29f=>VisuMZ['ConvertPar'+_0x14e752(0x565)]({},JSON[_0x14e752(0x240)](_0x5ed29f)));break;default:continue;}_0x3f1a71[_0xc4f0d8]=_0x170c54;}}return _0x3f1a71;},(_0x541869=>{const _0x30d80d=_0x4b43fd,_0x273450={'tcuUI':function(_0x4db6dd,_0x5adf00){return _0x4db6dd(_0x5adf00);},'rkGaH':_0x30d80d(0x647)+_0x30d80d(0x67d)+_0x30d80d(0x5ee)+_0x30d80d(0x4de)+'install\x20%2'+_0x30d80d(0x23f)+'Plugin\x20Man'+'ager.','wAZTO':function(_0x156110,_0x59741f){return _0x156110(_0x59741f);},'iaeza':function(_0x57556e,_0x59f30f){return _0x57556e!==_0x59f30f;},'smKmY':function(_0x1cf97a,_0x5ab720){return _0x1cf97a(_0x5ab720);},'JbZHJ':'%1\x27s\x20versi'+'on\x20does\x20no'+'t\x20match\x20pl'+_0x30d80d(0x581)+_0x30d80d(0x5a7)+_0x30d80d(0x76c)+_0x30d80d(0x5e0)+_0x30d80d(0x5c7),'MQwSZ':function(_0x46cef2,_0x3ae6b5){return _0x46cef2(_0x3ae6b5);},'QKChw':function(_0x41f713,_0x15fbc2){return _0x41f713<_0x15fbc2;},'wKuTW':function(_0x345199,_0x432f0a){return _0x345199(_0x432f0a);},'UcYqp':_0x30d80d(0x394)+_0x30d80d(0x6d0)+_0x30d80d(0x3df)+_0x30d80d(0x2e0)+'ist.\x0aIt\x20is'+_0x30d80d(0x4e8)+_0x30d80d(0x754)+_0x30d80d(0x445)+_0x30d80d(0x5c1)+_0x30d80d(0x572)+_0x30d80d(0x6dd)+'reorder\x20th'+_0x30d80d(0x2e0)+_0x30d80d(0x372)+_0x30d80d(0x216)+_0x30d80d(0x406)+_0x30d80d(0x5db)+'s.'},_0x3b6926=_0x541869[_0x30d80d(0x488)];for(const _0xf95b8 of dependencies){if(!Imported[_0xf95b8]){_0x273450['tcuUI'](alert,_0x273450[_0x30d80d(0x64c)][_0x30d80d(0x493)](_0x3b6926,_0xf95b8)),SceneManager['exit']();break;}}const _0x13519f=_0x541869[_0x30d80d(0x6d2)+'n'];if(_0x13519f[_0x30d80d(0x321)](/\[Version[ ](.*?)\]/i)){const _0x499e7c=_0x273450['wAZTO'](Number,RegExp['$1']);_0x273450[_0x30d80d(0x709)](_0x499e7c,VisuMZ[label]['version'])&&(_0x273450['smKmY'](alert,_0x273450[_0x30d80d(0x5ce)][_0x30d80d(0x493)](_0x3b6926,_0x499e7c)),SceneManager[_0x30d80d(0x57b)]());}if(_0x13519f['match'](/\[Tier[ ](\d+)\]/i)){const _0x54a6fa=_0x273450[_0x30d80d(0x467)](Number,RegExp['$1']);_0x273450['QKChw'](_0x54a6fa,tier)?(_0x273450['wKuTW'](alert,_0x273450[_0x30d80d(0x248)][_0x30d80d(0x493)](_0x3b6926,_0x54a6fa,tier)),SceneManager[_0x30d80d(0x57b)]()):tier=Math[_0x30d80d(0x452)](_0x54a6fa,tier);}VisuMZ[_0x30d80d(0x5b0)+_0x30d80d(0x565)](VisuMZ[label][_0x30d80d(0x5b6)],_0x541869[_0x30d80d(0x2ff)]);})(pluginData),PluginManager[_0x4b43fd(0x65e)+'mmand'](pluginData[_0x4b43fd(0x488)],'OverlayCha'+'ngeToCusto'+_0x4b43fd(0x5af),_0x313638=>{const _0x50a5d1=_0x4b43fd;VisuMZ[_0x50a5d1(0x5b0)+'ams'](_0x313638,_0x313638);const _0x228273=_0x313638[_0x50a5d1(0x4f1)],_0x553a5d=_0x313638[_0x50a5d1(0x4ec)],_0x163aa3=_0x313638[_0x50a5d1(0x5ac)];$gameScreen[_0x50a5d1(0x217)+'ingOverlay'+_0x50a5d1(0x4f1)](_0x228273,_0x163aa3),$gameScreen[_0x50a5d1(0x217)+_0x50a5d1(0x619)+'Opacity'](_0x553a5d,_0x163aa3);}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],_0x4b43fd(0x2e7)+'ngeToPrese'+'t',_0x4065e8=>{const _0x1ba76c=_0x4b43fd;VisuMZ['ConvertPar'+'ams'](_0x4065e8,_0x4065e8);const _0xd8938e=_0x4065e8[_0x1ba76c(0x4f1)],_0x493ce6=_0x4065e8[_0x1ba76c(0x5ac)];$gameScreen['processLig'+'htingOverl'+'ayColor'](_0xd8938e,_0x493ce6);}),PluginManager['registerCo'+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],_0x4b43fd(0x24e)+_0x4b43fd(0x462)+_0x4b43fd(0x36a),_0x2db163=>{const _0xca5a09=_0x4b43fd;VisuMZ[_0xca5a09(0x5b0)+_0xca5a09(0x565)](_0x2db163,_0x2db163);const _0x21cc0b=_0x2db163[_0xca5a09(0x252)],_0x4eb636=_0x2db163[_0xca5a09(0x5b6)],_0x3c8f2b=_0x2db163[_0xca5a09(0x6b7)],_0x401592=_0x2db163[_0xca5a09(0x65a)];for(const _0x456068 of _0x21cc0b){const _0x14faa8=$gameActors[_0xca5a09(0x68f)](_0x456068);if(!_0x14faa8)continue;_0x14faa8[_0xca5a09(0x363)+_0xca5a09(0x332)+'gs'](_0x4eb636),_0x14faa8['setRadialL'+_0xca5a09(0x40b)+'or'](_0x3c8f2b),_0x14faa8[_0xca5a09(0x2b3)+'t']()[_0xca5a09(0x594)]=_0x401592;}}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],'BattleLigh'+'tChangeEne'+_0x4b43fd(0x49d),_0x7ae19=>{const _0x4e9bfd=_0x4b43fd;VisuMZ[_0x4e9bfd(0x5b0)+_0x4e9bfd(0x565)](_0x7ae19,_0x7ae19);const _0x1ac77e=_0x7ae19[_0x4e9bfd(0x4d6)],_0x4a5bb7=_0x7ae19['Settings'],_0x3b5486=_0x7ae19[_0x4e9bfd(0x6b7)],_0x1e2e03=_0x7ae19[_0x4e9bfd(0x65a)];for(const _0x189833 of _0x1ac77e){const _0x129951=$gameTroop[_0x4e9bfd(0x542)]()[_0x189833];if(!_0x129951)continue;_0x129951[_0x4e9bfd(0x363)+_0x4e9bfd(0x332)+'gs'](_0x4a5bb7),_0x129951[_0x4e9bfd(0x363)+_0x4e9bfd(0x40b)+'or'](_0x3b5486),_0x129951[_0x4e9bfd(0x2b3)+'t']()[_0x4e9bfd(0x594)]=_0x1e2e03;}}),PluginManager['registerCo'+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],_0x4b43fd(0x3f3)+_0x4b43fd(0x34c)+_0x4b43fd(0x544)+'s',_0x7a6b81=>{const _0xb14efa=_0x4b43fd;VisuMZ[_0xb14efa(0x5b0)+_0xb14efa(0x565)](_0x7a6b81,_0x7a6b81);const _0x24e029=_0x7a6b81[_0xb14efa(0x5b6)],_0x554ecc=_0x7a6b81['Behavior'];$gamePlayer[_0xb14efa(0x363)+_0xb14efa(0x332)+'gs'](_0x24e029),$gamePlayer['setRadialL'+_0xb14efa(0x40b)+'or'](_0x554ecc);}),PluginManager[_0x4b43fd(0x65e)+'mmand'](pluginData['name'],_0x4b43fd(0x3f3)+_0x4b43fd(0x436)+_0x4b43fd(0x3d8)+_0x4b43fd(0x2ba),_0x233510=>{const _0x1bf52e=_0x4b43fd;VisuMZ[_0x1bf52e(0x5b0)+_0x1bf52e(0x565)](_0x233510,_0x233510);const _0xeca08=_0x233510[_0x1bf52e(0x5b6)],_0x2664b0=_0x233510[_0x1bf52e(0x6b7)];$gamePlayer['setFollowe'+'rRadialLig'+_0x1bf52e(0x70e)](_0xeca08),$gamePlayer[_0x1bf52e(0x632)+_0x1bf52e(0x1f8)+'htBehavior'](_0x2664b0);}),PluginManager[_0x4b43fd(0x65e)+'mmand'](pluginData[_0x4b43fd(0x488)],'RadialLigh'+_0x4b43fd(0x32a)+_0x4b43fd(0x3bd),_0x76922f=>{const _0x4db42e=_0x4b43fd,_0xdb33a9={'qjuCy':function(_0xc887ce,_0xaa3fac){return _0xc887ce===_0xaa3fac;}};VisuMZ[_0x4db42e(0x5b0)+'ams'](_0x76922f,_0x76922f);const _0x3d295b=_0x76922f[_0x4db42e(0x5d2)],_0x577c8e=_0x76922f[_0x4db42e(0x5b6)],_0x2f39bb=_0x76922f[_0x4db42e(0x6b7)],_0x594a15=$gameTemp[_0x4db42e(0x653)+_0x4db42e(0x4c4)+_0x4db42e(0x425)+'r']();for(let _0x3e3355 of _0x3d295b){if(_0xdb33a9[_0x4db42e(0x53f)](_0x3e3355,-0x3*0x49d+-0xd07+-0xd6f*-0x2))_0x3e3355=_0x594a15['eventId']();const _0x3cb50b=$gameMap[_0x4db42e(0x237)](_0x3e3355);_0x3cb50b&&(_0x3cb50b[_0x4db42e(0x363)+_0x4db42e(0x332)+'gs'](_0x577c8e),_0x3cb50b[_0x4db42e(0x363)+_0x4db42e(0x40b)+'or'](_0x2f39bb));}}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],'RadialLigh'+_0x4b43fd(0x76e)+_0x4b43fd(0x215),_0x3e3329=>{const _0x9867b7=_0x4b43fd;VisuMZ[_0x9867b7(0x5b0)+'ams'](_0x3e3329,_0x3e3329);const _0x262f71=$gameMap[_0x9867b7(0x454)](),_0x374dab=_0x3e3329['BoardedSet'+_0x9867b7(0x6ca)],_0x2b84a0=_0x3e3329['BoardedBeh'+_0x9867b7(0x5e8)],_0x303c32=_0x3e3329[_0x9867b7(0x365)+_0x9867b7(0x41a)],_0x38c404=_0x3e3329[_0x9867b7(0x376)+_0x9867b7(0x61e)];if(_0x262f71){const _0x59ec2c=!![];_0x262f71['setVehicle'+_0x9867b7(0x772)+'ta'](_0x374dab,!![],_0x59ec2c,![]),_0x262f71[_0x9867b7(0x35c)+_0x9867b7(0x772)+'ta'](_0x2b84a0,!![],_0x59ec2c,!![]),_0x262f71[_0x9867b7(0x35c)+_0x9867b7(0x772)+'ta'](_0x303c32,![],_0x59ec2c,![]),_0x262f71[_0x9867b7(0x35c)+_0x9867b7(0x772)+'ta'](_0x38c404,![],_0x59ec2c,!![]);}}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData['name'],'RadialLigh'+_0x4b43fd(0x3be)+_0x4b43fd(0x28d),_0x553049=>{const _0x5997dd=_0x4b43fd;VisuMZ['ConvertPar'+_0x5997dd(0x565)](_0x553049,_0x553049);const _0x2f3a8b=$gameMap[_0x5997dd(0x58b)](),_0x3684ba=_0x553049[_0x5997dd(0x3d3)+_0x5997dd(0x6ca)],_0x2cf28a=_0x553049[_0x5997dd(0x626)+_0x5997dd(0x5e8)],_0x20f2c7=_0x553049['UnboardedS'+'ettings'],_0x5caee6=_0x553049['UnboardedB'+_0x5997dd(0x61e)];if(_0x2f3a8b){const _0x34a0b6=!![];_0x2f3a8b[_0x5997dd(0x35c)+_0x5997dd(0x772)+'ta'](_0x3684ba,!![],_0x34a0b6,![]),_0x2f3a8b[_0x5997dd(0x35c)+'LightingDa'+'ta'](_0x2cf28a,!![],_0x34a0b6,!![]),_0x2f3a8b[_0x5997dd(0x35c)+'LightingDa'+'ta'](_0x20f2c7,![],_0x34a0b6,![]),_0x2f3a8b[_0x5997dd(0x35c)+_0x5997dd(0x772)+'ta'](_0x5caee6,![],_0x34a0b6,!![]);}}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData['name'],_0x4b43fd(0x3f3)+_0x4b43fd(0x253)+_0x4b43fd(0x38d)+'gs',_0x1113a6=>{const _0x5c3979=_0x4b43fd;VisuMZ['ConvertPar'+'ams'](_0x1113a6,_0x1113a6);const _0x5957a5=$gameMap[_0x5c3979(0x458)](),_0x1ebe31=_0x1113a6['BoardedSet'+_0x5c3979(0x6ca)],_0x21f55c=_0x1113a6[_0x5c3979(0x626)+_0x5c3979(0x5e8)],_0x424cac=_0x1113a6['UnboardedS'+'ettings'],_0x5b3f0d=_0x1113a6[_0x5c3979(0x376)+_0x5c3979(0x61e)];if(_0x5957a5){const _0x535fdd=!![];_0x5957a5['setVehicle'+'LightingDa'+'ta'](_0x1ebe31,!![],_0x535fdd,![]),_0x5957a5[_0x5c3979(0x35c)+'LightingDa'+'ta'](_0x21f55c,!![],_0x535fdd,!![]),_0x5957a5[_0x5c3979(0x35c)+'LightingDa'+'ta'](_0x424cac,![],_0x535fdd,![]),_0x5957a5[_0x5c3979(0x35c)+'LightingDa'+'ta'](_0x5b3f0d,![],_0x535fdd,!![]);}}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],'ConicalLig'+_0x4b43fd(0x2c6)+_0x4b43fd(0x5da)+'gs',_0x302784=>{const _0x44bf62=_0x4b43fd;VisuMZ[_0x44bf62(0x5b0)+'ams'](_0x302784,_0x302784);const _0x2b34b4=_0x302784[_0x44bf62(0x5b6)],_0x242fe4=_0x302784[_0x44bf62(0x6b7)];$gamePlayer[_0x44bf62(0x308)+_0x44bf62(0x2cf)+'ngs'](_0x2b34b4),$gamePlayer[_0x44bf62(0x308)+_0x44bf62(0x5aa)+'ior'](_0x242fe4);}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],'ConicalLig'+'htChangeFo'+'llowerSett'+_0x4b43fd(0x4f3),_0x208762=>{const _0x3bd187=_0x4b43fd;VisuMZ['ConvertPar'+_0x3bd187(0x565)](_0x208762,_0x208762);const _0x3b24ce=_0x208762[_0x3bd187(0x5b6)],_0x334e07=_0x208762[_0x3bd187(0x6b7)];$gamePlayer['setFollowe'+_0x3bd187(0x296)+_0x3bd187(0x25d)+'s'](_0x3b24ce),$gamePlayer[_0x3bd187(0x632)+_0x3bd187(0x296)+_0x3bd187(0x3e1)+'r'](_0x334e07);}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData['name'],_0x4b43fd(0x22e)+_0x4b43fd(0x574)+'entSetting'+'s',_0x7d594f=>{const _0x41645e=_0x4b43fd,_0x5ef5fa={'hfMNH':function(_0x5c27c3,_0x21fce2){return _0x5c27c3===_0x21fce2;}};VisuMZ['ConvertPar'+_0x41645e(0x565)](_0x7d594f,_0x7d594f);const _0x2f163a=_0x7d594f[_0x41645e(0x5d2)],_0x888d04=_0x7d594f['Settings'],_0x47d362=_0x7d594f['Behavior'],_0x4cf8e7=$gameTemp['getLastPlu'+_0x41645e(0x4c4)+_0x41645e(0x425)+'r']();for(let _0x3587e3 of _0x2f163a){if(_0x5ef5fa[_0x41645e(0x65c)](_0x3587e3,0xbc+-0x70f+0x653*0x1))_0x3587e3=_0x4cf8e7[_0x41645e(0x2a7)]();const _0x2b9b70=$gameMap['event'](_0x3587e3);_0x2b9b70&&(_0x2b9b70[_0x41645e(0x308)+_0x41645e(0x2cf)+_0x41645e(0x2ba)](_0x888d04),_0x2b9b70[_0x41645e(0x308)+_0x41645e(0x5aa)+_0x41645e(0x6cc)](_0x47d362));}}),PluginManager['registerCo'+_0x4b43fd(0x26d)](pluginData['name'],_0x4b43fd(0x22e)+'htChangeBo'+_0x4b43fd(0x4ef),_0x1f5640=>{const _0x426c2c=_0x4b43fd;VisuMZ[_0x426c2c(0x5b0)+'ams'](_0x1f5640,_0x1f5640);const _0xdc18b4=$gameMap[_0x426c2c(0x454)](),_0x41576b=_0x1f5640[_0x426c2c(0x3d3)+_0x426c2c(0x6ca)],_0x10e7f4=_0x1f5640[_0x426c2c(0x626)+_0x426c2c(0x5e8)],_0x2c99d5=_0x1f5640['UnboardedS'+_0x426c2c(0x41a)],_0x24cb44=_0x1f5640[_0x426c2c(0x376)+_0x426c2c(0x61e)];if(_0xdc18b4){const _0x37348a=![];_0xdc18b4[_0x426c2c(0x35c)+_0x426c2c(0x772)+'ta'](_0x41576b,!![],_0x37348a,![]),_0xdc18b4[_0x426c2c(0x35c)+_0x426c2c(0x772)+'ta'](_0x10e7f4,!![],_0x37348a,!![]),_0xdc18b4['setVehicle'+'LightingDa'+'ta'](_0x2c99d5,![],_0x37348a,![]),_0xdc18b4['setVehicle'+_0x426c2c(0x772)+'ta'](_0x24cb44,![],_0x37348a,!![]);}}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData['name'],'ConicalLig'+_0x4b43fd(0x529)+'ipSettings',_0x441258=>{const _0x56b01f=_0x4b43fd;VisuMZ[_0x56b01f(0x5b0)+'ams'](_0x441258,_0x441258);const _0x4f87b6=$gameMap['ship'](),_0x41387c=_0x441258[_0x56b01f(0x3d3)+_0x56b01f(0x6ca)],_0x2e2089=_0x441258['BoardedBeh'+_0x56b01f(0x5e8)],_0x46f237=_0x441258[_0x56b01f(0x365)+_0x56b01f(0x41a)],_0x1e9c24=_0x441258[_0x56b01f(0x376)+_0x56b01f(0x61e)];if(_0x4f87b6){const _0x7b2297=![];_0x4f87b6[_0x56b01f(0x35c)+_0x56b01f(0x772)+'ta'](_0x41387c,!![],_0x7b2297,![]),_0x4f87b6['setVehicle'+'LightingDa'+'ta'](_0x2e2089,!![],_0x7b2297,!![]),_0x4f87b6[_0x56b01f(0x35c)+_0x56b01f(0x772)+'ta'](_0x46f237,![],_0x7b2297,![]),_0x4f87b6[_0x56b01f(0x35c)+'LightingDa'+'ta'](_0x1e9c24,![],_0x7b2297,!![]);}}),PluginManager['registerCo'+'mmand'](pluginData[_0x4b43fd(0x488)],_0x4b43fd(0x22e)+_0x4b43fd(0x69b)+_0x4b43fd(0x64b)+_0x4b43fd(0x2ba),_0x4b4334=>{const _0xb3e4ab=_0x4b43fd;VisuMZ['ConvertPar'+_0xb3e4ab(0x565)](_0x4b4334,_0x4b4334);const _0x3c620c=$gameMap['airship'](),_0x39b951=_0x4b4334[_0xb3e4ab(0x3d3)+'tings'],_0x2c28c0=_0x4b4334['BoardedBeh'+_0xb3e4ab(0x5e8)],_0x324cd9=_0x4b4334[_0xb3e4ab(0x365)+'ettings'],_0x37a13b=_0x4b4334[_0xb3e4ab(0x376)+_0xb3e4ab(0x61e)];if(_0x3c620c){const _0x3f9d5e=![];_0x3c620c[_0xb3e4ab(0x35c)+_0xb3e4ab(0x772)+'ta'](_0x39b951,!![],_0x3f9d5e,![]),_0x3c620c[_0xb3e4ab(0x35c)+_0xb3e4ab(0x772)+'ta'](_0x2c28c0,!![],_0x3f9d5e,!![]),_0x3c620c[_0xb3e4ab(0x35c)+'LightingDa'+'ta'](_0x324cd9,![],_0x3f9d5e,![]),_0x3c620c['setVehicle'+_0xb3e4ab(0x772)+'ta'](_0x37a13b,![],_0x3f9d5e,!![]);}}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],_0x4b43fd(0x516)+'setChangeA'+_0x4b43fd(0x2a5),_0x3b8db9=>{const _0x17fea6=_0x4b43fd,_0x35b9e7={'nDJEr':function(_0x4da805,_0x574e35){return _0x4da805===_0x574e35;}};VisuMZ[_0x17fea6(0x5b0)+_0x17fea6(0x565)](_0x3b8db9,_0x3b8db9);const _0x9d4980=_0x3b8db9[_0x17fea6(0x252)],_0x3e88cf=_0x3b8db9[_0x17fea6(0x5cb)],_0x3580c4=_0x3b8db9['HandOffset'],_0x114177=_0x3b8db9[_0x17fea6(0x631)+'et'],_0x1e2b9d=_0x3b8db9[_0x17fea6(0x749)+'et'];for(const _0x2b603d of _0x9d4980){const _0x4bb75f=$gameActors[_0x17fea6(0x68f)](_0x2b603d);if(!_0x4bb75f)continue;_0x4bb75f['setConical'+_0x17fea6(0x508)+_0x17fea6(0x3a8)](_0x3580c4),_0x4bb75f['setConical'+_0x17fea6(0x261)+'ffsets'](_0x114177),_0x4bb75f[_0x17fea6(0x308)+'LightJumpO'+_0x17fea6(0x3a8)](_0x1e2b9d),_0x35b9e7[_0x17fea6(0x2ea)](_0x4bb75f,$gameParty[_0x17fea6(0x49e)]())?$gamePlayer[_0x17fea6(0x5d6)+'ht']()['useHandOff'+'set']=_0x3e88cf:$gamePlayer[_0x17fea6(0x6c8)+_0x17fea6(0x296)+_0x17fea6(0x25d)+'s']()[_0x17fea6(0x76a)+'set']=_0x3e88cf;}}),PluginManager[_0x4b43fd(0x65e)+'mmand'](pluginData[_0x4b43fd(0x488)],_0x4b43fd(0x516)+'setChangeE'+_0x4b43fd(0x610),_0x4cc07d=>{const _0x4697c4=_0x4b43fd,_0x4e6291={'EwSDm':function(_0x27e65d,_0x287681){return _0x27e65d===_0x287681;}};VisuMZ[_0x4697c4(0x5b0)+_0x4697c4(0x565)](_0x4cc07d,_0x4cc07d);const _0xe70c74=_0x4cc07d[_0x4697c4(0x5d2)],_0x32b422=_0x4cc07d[_0x4697c4(0x5cb)],_0x3fcc0d=_0x4cc07d['HandOffset'],_0x5b994b=_0x4cc07d[_0x4697c4(0x631)+'et'],_0x37302b=_0x4cc07d[_0x4697c4(0x749)+'et'],_0x760747=$gameTemp['getLastPlu'+_0x4697c4(0x4c4)+'Interprete'+'r']();for(let _0x356dd6 of _0xe70c74){if(_0x4e6291[_0x4697c4(0x465)](_0x356dd6,0x1*0x19f5+-0x33a+0x17*-0xfd))_0x356dd6=_0x760747['eventId']();const _0x3b945b=$gameMap['event'](_0x356dd6);_0x3b945b&&(_0x3b945b[_0x4697c4(0x308)+'LightWalkO'+_0x4697c4(0x3a8)](_0x3fcc0d),_0x3b945b['setConical'+_0x4697c4(0x261)+'ffsets'](_0x5b994b),_0x3b945b[_0x4697c4(0x308)+'LightJumpO'+'ffsets'](_0x37302b),_0x3b945b['conicalLig'+'ht']()[_0x4697c4(0x76a)+_0x4697c4(0x38b)]=_0x32b422);}}),PluginManager[_0x4b43fd(0x65e)+'mmand'](pluginData[_0x4b43fd(0x488)],_0x4b43fd(0x516)+_0x4b43fd(0x2cd)+'oat',_0x54417d=>{const _0x1dd133=_0x4b43fd;VisuMZ[_0x1dd133(0x5b0)+_0x1dd133(0x565)](_0x54417d,_0x54417d);const _0xdbb185=$gameMap[_0x1dd133(0x454)](),_0x16d24d=_0x54417d['BoardedOff'+_0x1dd133(0x38b)],_0x1fc5e4=_0x54417d[_0x1dd133(0x537)+_0x1dd133(0x3e2)];_0xdbb185&&(_0xdbb185[_0x1dd133(0x35c)+_0x1dd133(0x66c)+_0x1dd133(0x5ed)+'t'](_0x16d24d,!![]),_0xdbb185[_0x1dd133(0x35c)+_0x1dd133(0x66c)+_0x1dd133(0x5ed)+'t'](_0x1fc5e4,![]));}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],_0x4b43fd(0x516)+_0x4b43fd(0x500)+_0x4b43fd(0x509),_0x564d8f=>{const _0x1bfab6=_0x4b43fd;VisuMZ['ConvertPar'+'ams'](_0x564d8f,_0x564d8f);const _0x19187f=$gameMap['ship'](),_0x5e78ef=_0x564d8f[_0x1bfab6(0x422)+_0x1bfab6(0x38b)],_0x46b2c0=_0x564d8f[_0x1bfab6(0x537)+_0x1bfab6(0x3e2)];_0x19187f&&(_0x19187f[_0x1bfab6(0x35c)+_0x1bfab6(0x66c)+'nicalOffse'+'t'](_0x5e78ef,!![]),_0x19187f[_0x1bfab6(0x35c)+'LightingCo'+_0x1bfab6(0x5ed)+'t'](_0x46b2c0,![]));}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],'ConicalOff'+_0x4b43fd(0x72f)+_0x4b43fd(0x4af),_0x1241ec=>{const _0x4a1000=_0x4b43fd;VisuMZ[_0x4a1000(0x5b0)+_0x4a1000(0x565)](_0x1241ec,_0x1241ec);const _0x52fbeb=$gameMap[_0x4a1000(0x458)](),_0x4674cb=_0x1241ec[_0x4a1000(0x422)+'set'],_0x731e9e=_0x1241ec[_0x4a1000(0x537)+_0x4a1000(0x3e2)];_0x52fbeb&&(_0x52fbeb[_0x4a1000(0x35c)+_0x4a1000(0x66c)+_0x4a1000(0x5ed)+'t'](_0x4674cb,!![]),_0x52fbeb['setVehicle'+_0x4a1000(0x66c)+'nicalOffse'+'t'](_0x731e9e,![]));}),VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)][_0x4b43fd(0x66d)+'s']=function(_0x53ddd5,_0x204a89){const _0x10b522=_0x4b43fd,_0x361909={'DEuDg':function(_0x419389,_0x238b02){return _0x419389===_0x238b02;},'NJkLt':function(_0x37973c,_0x38e553){return _0x37973c===_0x38e553;},'suBnO':_0x10b522(0x402),'BBLUM':_0x10b522(0x237),'ErxYN':function(_0x14d1d1,_0x3f2bad){return _0x14d1d1===_0x3f2bad;},'cdbOH':function(_0x1f085e,_0x140720){return _0x1f085e<_0x140720;},'AeORn':function(_0x1cbf03,_0x498ac0){return _0x1cbf03+_0x498ac0;},'iFjJH':function(_0x27b612,_0x19f176){return _0x27b612*_0x19f176;}};VisuMZ[_0x10b522(0x5b0)+'ams'](_0x53ddd5,_0x53ddd5);const _0x5d3e9a=_0x53ddd5[_0x10b522(0x5b6)],_0x185e6b=_0x53ddd5[_0x10b522(0x6b7)],_0x1c1f1e=_0x53ddd5[_0x10b522(0x549)],_0x3693d9=_0x53ddd5['InitialTim'+'e']||-0x2*-0x51e+-0x23f1+-0x1*-0x19b5,_0x4a6def=_0x53ddd5[_0x10b522(0x6ea)+'s'],_0x5709e3=_0x53ddd5[_0x10b522(0x304)+_0x10b522(0x3a5)],_0x1249fd=_0x53ddd5[_0x10b522(0x210)+'Timer']||-0x1*-0x1a41+0xc9*-0x4+0x3d*-0x61,_0x4583b8={'active':!![],'settings':JsonEx[_0x10b522(0x327)+'py'](_0x5d3e9a),'behavior':JsonEx[_0x10b522(0x327)+'py'](_0x185e6b),'type':_0x204a89,'originX':_0x53ddd5[_0x10b522(0x61b)+'sX']||0x1*-0x58e+-0x13b1*-0x1+-0xe23,'originY':_0x53ddd5[_0x10b522(0x61b)+'sY']||-0x1*-0x243a+0xa46+-0x180*0x1f,'update':_0x1c1f1e,'initialTime':_0x3693d9,'time':_0x3693d9,'expire':_0x361909[_0x10b522(0x276)](_0x1249fd,-0x1*0x1083+0x1a3a+-0x9b7)?Number[_0x10b522(0x747)+'NTEGER']:_0x1249fd,'x':0x0,'y':0x0};_0x361909[_0x10b522(0x59c)](_0x204a89,_0x361909[_0x10b522(0x397)])&&(_0x4583b8[_0x10b522(0x59e)+'dex']=_0x53ddd5[_0x10b522(0x325)+_0x10b522(0x25f)]||-0x31*-0x6d+-0x1*0x11b7+-0x326);if(_0x361909[_0x10b522(0x276)](_0x204a89,_0x361909[_0x10b522(0x53d)])){_0x4583b8[_0x10b522(0x2a7)]=_0x53ddd5[_0x10b522(0x5d2)]||-0x1a14+0x26*0xa2+0x208;if(_0x361909[_0x10b522(0x264)](_0x4583b8['eventId'],-0x1ed*-0xa+0x4*-0x2b0+-0x882)){const _0x13ac2b=$gameTemp[_0x10b522(0x653)+'ginCommand'+_0x10b522(0x425)+'r']();_0x4583b8[_0x10b522(0x2a7)]=_0x13ac2b[_0x10b522(0x2a7)]();}}for(let _0x359237=0xce*-0xb+-0x13*0x65+-0x1059*-0x1;_0x361909[_0x10b522(0x4ba)](_0x359237,_0x4a6def);_0x359237++){const _0x574888=JsonEx[_0x10b522(0x327)+'py'](_0x4583b8),_0x3fe6ab=_0x361909[_0x10b522(0x390)](_0x3693d9,_0x361909[_0x10b522(0x6e6)](_0x359237,_0x5709e3));_0x574888[_0x10b522(0x6c2)]=_0x3fe6ab,$gameMap[_0x10b522(0x498)+_0x10b522(0x4dc)](_0x574888);}},PluginManager[_0x4b43fd(0x65e)+'mmand'](pluginData['name'],_0x4b43fd(0x220)+'NewMapLock'+'edLight',_0x5bd83d=>{const _0xefa60b=_0x4b43fd,_0x5f2349={'BLPJD':_0xefa60b(0x2d5)};if(SceneManager[_0xefa60b(0x724)+_0xefa60b(0x2bc)]())return;VisuMZ['LightingEf'+_0xefa60b(0x4a5)][_0xefa60b(0x66d)+'s'](_0x5bd83d,_0x5f2349[_0xefa60b(0x4ab)]);}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],_0x4b43fd(0x220)+_0x4b43fd(0x2d9)+_0x4b43fd(0x27b),_0x57727c=>{const _0x541c59=_0x4b43fd,_0x36d42f={'yitph':'screen'};if(SceneManager[_0x541c59(0x724)+_0x541c59(0x2bc)]())return;VisuMZ[_0x541c59(0x3ba)+_0x541c59(0x4a5)][_0x541c59(0x66d)+'s'](_0x57727c,_0x36d42f[_0x541c59(0x234)]);}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],_0x4b43fd(0x220)+'NewPlayerL'+_0x4b43fd(0x27b),_0x48d2e6=>{const _0x58f2d1=_0x4b43fd,_0x32b976={'LCesb':_0x58f2d1(0x4fb)};if(SceneManager['isSceneBat'+_0x58f2d1(0x2bc)]())return;VisuMZ[_0x58f2d1(0x3ba)+_0x58f2d1(0x4a5)][_0x58f2d1(0x66d)+'s'](_0x48d2e6,_0x32b976[_0x58f2d1(0x546)]);}),PluginManager[_0x4b43fd(0x65e)+'mmand'](pluginData[_0x4b43fd(0x488)],_0x4b43fd(0x220)+_0x4b43fd(0x47d)+_0x4b43fd(0x753)+'ht',_0x1f45e4=>{const _0x58650c=_0x4b43fd,_0x2b5dfd={'KxWZT':_0x58650c(0x402)};if(SceneManager[_0x58650c(0x724)+'tle']())return;VisuMZ[_0x58650c(0x3ba)+_0x58650c(0x4a5)]['SpawnLight'+'s'](_0x1f45e4,_0x2b5dfd[_0x58650c(0x6d8)]);}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],_0x4b43fd(0x220)+_0x4b43fd(0x6f1)+_0x4b43fd(0x5ec),_0x2a33ea=>{const _0x1acad6=_0x4b43fd,_0x27c997={'RTjCq':'event'};if(SceneManager[_0x1acad6(0x724)+_0x1acad6(0x2bc)]())return;VisuMZ[_0x1acad6(0x3ba)+_0x1acad6(0x4a5)]['SpawnLight'+'s'](_0x2a33ea,_0x27c997[_0x1acad6(0x4fd)]);}),PluginManager[_0x4b43fd(0x65e)+_0x4b43fd(0x26d)](pluginData[_0x4b43fd(0x488)],'LightSpawn'+_0x4b43fd(0x679)+_0x4b43fd(0x633),_0x42982f=>{const _0x176e14=_0x4b43fd,_0x2d6b33={'IfRKZ':function(_0xb10aec,_0x49a066){return _0xb10aec<_0x49a066;}};if(SceneManager['isSceneBat'+_0x176e14(0x2bc)]())return;for(const _0x120f60 of $gameMap[_0x176e14(0x68d)+'s']()){if(!_0x120f60)continue;if(!_0x120f60[_0x176e14(0x5f9)])continue;if(_0x2d6b33[_0x176e14(0x677)](_0x120f60['expire'],-0x11cf*-0x1+-0x12be*0x1+-0x3*-0x53))continue;_0x120f60[_0x176e14(0x5e1)]=-0x1*0x815+0x49a+0x385*0x1;}}),VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)][_0x4b43fd(0x72d)]={'AutoTint':/<(?:AUTOTINT|AUTO-TINT|AUTOTONE|AUTO-TONE):[ ](.*)>/i,'lightingOverlayColor':/<(?:OVERLAY|OVERLAY COLOR):[ ](.*)>/i,'lightingOverlayOpacityValue':/<(?:OVERLAY) OPACITY:[ ](\d+)>/i,'lightingOverlayOpacityRate':/<(?:OVERLAY) OPACITY:[ ](\d+)([%％])>/i,'noLightingOverlay':/<NO (?:OVERLAY|DARKNESS OVERLAY)>/i,'antiLightMaskHardRegions':/<HARD (?:ANTILIGHT|ANTI-LIGHT) (?:REGION|REGIONS):[ ](.*)>/i,'antiLightMaskHardTerrainTags':/<HARD (?:ANTILIGHT|ANTI-LIGHT) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'antiLightMaskSoftRegions':/<SOFT (?:ANTILIGHT|ANTI-LIGHT) (?:REGION|REGIONS):[ ](.*)>/i,'antiLightMaskSoftTerrainTags':/<SOFT (?:ANTILIGHT|ANTI-LIGHT) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'RadialLightGeneric':/<(?:LIGHT|RADIAL LIGHT)>/i,'RadialLightCatchAll':/<(?:LIGHT|RADIAL LIGHT)[ ](.*?)>/i,'RadialLightTurnOff':/<NO (?:LIGHT|RADIAL LIGHT)>/i,'RadialLightFilename':/<(?:LIGHT|RADIAL LIGHT) FILENAME:[ ](.*?)>/i,'RadialLightColor':/<(?:LIGHT|RADIAL LIGHT) COLOR:[ ](.*?)>/i,'RadialLightRadius':/<(?:LIGHT|RADIAL LIGHT) RADIUS:[ ](\d+)>/i,'RadialLightDiameter':/<(?:LIGHT|RADIAL LIGHT) DIAMETER:[ ](\d+)>/i,'RadialLightIntensity':/<(?:LIGHT|RADIAL LIGHT) INTENSITY:[ ](\d+)([%％])>/i,'RadialLightAngle':/<(?:LIGHT|RADIAL LIGHT) ANGLE:[ ](\d+)>/i,'RadialLightRotateSpeed':/<(?:LIGHT|RADIAL LIGHT) ROTATE SPEED:[ ]([\+\-]\d+)>/i,'RadialLightBlendMode':/<(?:LIGHT|RADIAL LIGHT) BLEND MODE:[ ](.*?)>/i,'RadialLightOpacityFlat':/<(?:LIGHT|RADIAL LIGHT) OPACITY:[ ](\d+)>/i,'RadialLightOpacityRate':/<(?:LIGHT|RADIAL LIGHT) OPACITY:[ ](\d+)([%％])>/i,'RadialLightOffset':/<(?:LIGHT|RADIAL LIGHT) OFFSET:[ ](.*?)>/i,'RadialBehaviorBlinkRate':/<(?:LIGHT|RADIAL LIGHT) BLINK RATE:[ ](\d+)([%％])>/i,'RadialBehaviorBlinkMod':/<(?:LIGHT|RADIAL LIGHT) BLINK MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'RadialBehaviorFlickerRate':/<(?:LIGHT|RADIAL LIGHT) FLICKER RATE:[ ](\d+)([%％])>/i,'RadialBehaviorFlickerMod':/<(?:LIGHT|RADIAL LIGHT) FLICKER MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'RadialBehaviorFlashRate':/<(?:LIGHT|RADIAL LIGHT) FLASH RATE:[ ](\d+)([%％])>/i,'RadialBehaviorFlashMod':/<(?:LIGHT|RADIAL LIGHT) FLASH MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'RadialBehaviorFlareRate':/<(?:LIGHT|RADIAL LIGHT) FLARE RATE:[ ](\d+)([%％])>/i,'RadialBehaviorFlareMod':/<(?:LIGHT|RADIAL LIGHT) FLARE MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'RadialBehaviorGlowRate':/<(?:LIGHT|RADIAL LIGHT) GLOW RATE:[ ](\d+)([%％])>/i,'RadialBehaviorGlowSpeed':/<(?:LIGHT|RADIAL LIGHT) GLOW SPEED:[ ](\d+)([%％])>/i,'RadialBehaviorGlowRng':/<(?:LIGHT|RADIAL LIGHT) GLOW RANDOM>/i,'RadialBehaviorGlowNoRng':/<(?:LIGHT|RADIAL LIGHT) GLOW NO RANDOM>/i,'RadialBehaviorPulseRate':/<(?:LIGHT|RADIAL LIGHT) PULSE RATE:[ ](\d+)([%％])>/i,'RadialBehaviorPulseSpeed':/<(?:LIGHT|RADIAL LIGHT) PULSE SPEED:[ ](\d+)([%％])>/i,'RadialBehaviorPulseRng':/<(?:LIGHT|RADIAL LIGHT) PULSE RANDOM>/i,'RadialBehaviorPulseNoRng':/<(?:LIGHT|RADIAL LIGHT) PULSE NO RANDOM>/i,'RadialBehaviorPatternPreset':/<(?:LIGHT|RADIAL LIGHT) PATTERN TYPE:[ ](.*?)>/i,'RadialBehaviorPatternSequence':/<(?:LIGHT|RADIAL LIGHT) (?:PATTERN|PATTERN TABLE|CUSTOM PATTERN):[ ](.*?)>/i,'RadialBehaviorPatternUpdateDelay':/<(?:LIGHT|RADIAL LIGHT) PATTERN (?:DELAY|UPDATE DELAY):[ ](\d+)>/i,'ConicalLightGeneric':/<(?:CONICAL LIGHT|TORCH)>/i,'ConicalLightCatchAll':/<(?:CONICAL LIGHT|TORCH)[ ](.*?)>/i,'ConicalLightTurnOff':/<NO (?:CONICAL LIGHT|TORCH)>/i,'ConicalLightFilename':/<(?:CONICAL LIGHT|TORCH) FILENAME:[ ](.*?)>/i,'ConicalLightFileAngleOffset':/<(?:CONICAL LIGHT|TORCH) FILE ANGLE OFFSET:[ ]([\+\-]\d+)>/i,'ConicalLightFileAnchor':/<(?:CONICAL LIGHT|TORCH) FILE ANCHOR:[ ](.*?)>/i,'ConicalLightColor':/<(?:CONICAL LIGHT|TORCH) COLOR:[ ](.*?)>/i,'ConicalLightRadius':/<(?:CONICAL LIGHT|TORCH) RADIUS:[ ](\d+)>/i,'ConicalLightDiameter':/<(?:CONICAL LIGHT|TORCH) DIAMETER:[ ](\d+)>/i,'ConicalLightSrcRadius':/<(?:CONICAL LIGHT|TORCH) (?:SOURCE|MINI) RADIUS:[ ](\d+)>/i,'ConicalLightSrcDiameter':/<(?:CONICAL LIGHT|TORCH) (?:SOURCE|MINI) DIAMETER:[ ](\d+)>/i,'ConicalLightIntensity':/<(?:CONICAL LIGHT|TORCH) INTENSITY:[ ](\d+)([%％])>/i,'ConicalLightBlendMode':/<(?:CONICAL LIGHT|TORCH) BLEND MODE:[ ](.*?)>/i,'ConicalLightOpacityFlat':/<(?:CONICAL LIGHT|TORCH) OPACITY:[ ](\d+)>/i,'ConicalLightOpacityRate':/<(?:CONICAL LIGHT|TORCH) OPACITY:[ ](\d+)([%％])>/i,'ConicalLightAngle':/<(?:CONICAL LIGHT|TORCH) ANGLE:[ ](\d+)>/i,'ConicalLightAngleSway':/<(?:CONICAL LIGHT|TORCH) ANGLE SWAY:[ ](\d+)>/i,'ConicalLightSwaySpeed':/<(?:CONICAL LIGHT|TORCH) SWAY SPEED:[ ](\d+)([%％])>/i,'ConicalLightSwayRng':/<(?:CONICAL LIGHT|TORCH) SWAY RANDOM>/i,'ConicalLightSwayNoRng':/<(?:CONICAL LIGHT|TORCH) SWAY NO RANDOM>/i,'ConicalLightForceDir':/<(?:CONICAL LIGHT|TORCH) FORCE DIRECTION:[ ](.*?)>/i,'ConicalLightFollowMouse':/<(?:CONICAL LIGHT|TORCH) FOLLOW (?:CURSOR|MOUSE)>/i,'ConicalLightNoFollowMouse':/<(?:CONICAL LIGHT|TORCH) (?:NO|NOT) FOLLOW (?:CURSOR|MOUSE)>/i,'ConicalLightUseHandOffset':/<(?:CONICAL LIGHT|TORCH) HAND OFFSET>/i,'ConicalLightCentralOffset':/<(?:CONICAL LIGHT|TORCH) (?:CENTER|CENTRAL) OFFSET>/i,'ConicalLightOffset':/<(?:CONICAL LIGHT|TORCH) OFFSET:[ ](.*?)>/i,'ConicalBehaviorBlinkRate':/<(?:CONICAL LIGHT|TORCH) BLINK RATE:[ ](\d+)([%％])>/i,'ConicalBehaviorBlinkMod':/<(?:CONICAL LIGHT|TORCH) BLINK MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'ConicalBehaviorFlickerRate':/<(?:CONICAL LIGHT|TORCH) FLICKER RATE:[ ](\d+)([%％])>/i,'ConicalBehaviorFlickerMod':/<(?:CONICAL LIGHT|TORCH) FLICKER MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'ConicalBehaviorFlashRate':/<(?:CONICAL LIGHT|TORCH) FLASH RATE:[ ](\d+)([%％])>/i,'ConicalBehaviorFlashMod':/<(?:CONICAL LIGHT|TORCH) FLASH MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'ConicalBehaviorFlareRate':/<(?:CONICAL LIGHT|TORCH) FLARE RATE:[ ](\d+)([%％])>/i,'ConicalBehaviorFlareMod':/<(?:CONICAL LIGHT|TORCH) FLARE MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'ConicalBehaviorGlowRate':/<(?:CONICAL LIGHT|TORCH) GLOW RATE:[ ](\d+)([%％])>/i,'ConicalBehaviorGlowSpeed':/<(?:CONICAL LIGHT|TORCH) GLOW SPEED:[ ](\d+)([%％])>/i,'ConicalBehaviorGlowRng':/<(?:CONICAL LIGHT|TORCH) GLOW RANDOM>/i,'ConicalBehaviorGlowNoRng':/<(?:CONICAL LIGHT|TORCH) GLOW NO RANDOM>/i,'ConicalBehaviorPulseRate':/<(?:CONICAL LIGHT|TORCH) PULSE RATE:[ ](\d+)([%％])>/i,'ConicalBehaviorPulseSpeed':/<(?:CONICAL LIGHT|TORCH) PULSE SPEED:[ ](\d+)([%％])>/i,'ConicalBehaviorPulseRng':/<(?:CONICAL LIGHT|TORCH) PULSE RANDOM>/i,'ConicalBehaviorPulseNoRng':/<(?:CONICAL LIGHT|TORCH) PULSE NO RANDOM>/i,'ConicalBehaviorPatternPreset':/<(?:CONICAL LIGHT|TORCH) PATTERN TYPE:[ ](.*?)>/i,'ConicalBehaviorPatternSequence':/<(?:CONICAL LIGHT|TORCH) (?:PATTERN|PATTERN TABLE|CUSTOM PATTERN):[ ](.*?)>/i,'ConicalBehaviorPatternUpdateDelay':/<(?:CONICAL LIGHT|TORCH) PATTERN (?:DELAY|UPDATE DELAY):[ ](\d+)>/i,'ConicalLightHandOffset':/<(?:CONICAL LIGHT|TORCH) (.*?) PATTERN (\d+) OFFSET:[ ](.*?)>/gi},Bitmap[_0x4b43fd(0x62d)]['drawTestDu'+_0x4b43fd(0x62c)]=function(_0x32ef4b,_0x214635){const _0x4abb36=_0x4b43fd;this[_0x4abb36(0x1fa)+_0x4abb36(0x311)](_0x32ef4b,_0x214635,-0xac0*-0x3+-0x1831+-0x80f+0.5);},Bitmap[_0x4b43fd(0x62d)][_0x4b43fd(0x1fa)+_0x4b43fd(0x311)]=function(_0x705b01,_0x517524,_0x384dfa){const _0x317d40=_0x4b43fd,_0x5a7f29=-0x1fd4+-0x172*0x1+0x22ae,_0x230307=-0x7b9+-0x1ebe+0x2678,_0x3e4013=-0x1b1*0x5+0x7c9*0x2+-0x71d;this[_0x317d40(0x6de)+_0x317d40(0x305)](_0x705b01,_0x5a7f29,_0x517524,_0x384dfa,_0x230307,_0x3e4013);},Bitmap['prototype'][_0x4b43fd(0x6de)+'lLight']=function(_0x3d7ec1,_0x4be0ed,_0x2b2be3,_0x5704aa,_0x2189a9,_0x3af306){const _0x2e77bc=_0x4b43fd,_0xc553dc={'jvTZa':function(_0x47f41e,_0x1b7ddc){return _0x47f41e*_0x1b7ddc;},'zlleX':function(_0x236e85,_0x274195){return _0x236e85/_0x274195;},'GwKMU':function(_0x232ec7,_0x8be271){return _0x232ec7*_0x8be271;},'OZKUK':function(_0x9463a9,_0x56c119){return _0x9463a9/_0x56c119;}};_0x5704aa=_0x5704aa[_0x2e77bc(0x68b)](-0x83b+-0x1*0x305+0xb40+0.000001,-0x1d43+-0xda*-0x25+-0x23f+0.999999);const _0x4d8838=this['context'],_0x23eada=_0xc553dc[_0x2e77bc(0x34f)](_0x4be0ed,_0xc553dc[_0x2e77bc(0x4f7)](Math['PI'],0xc13+-0x2*0x1057+0x154f)),_0x7d9ee2=_0xc553dc[_0x2e77bc(0x463)](_0x3d7ec1,0x2411+0x57a+0xd9*-0x31),_0xa2b605=_0x4d8838[_0x2e77bc(0x20d)+_0x2e77bc(0x580)](_0x3d7ec1,_0x3d7ec1,_0x3af306,_0x3d7ec1,_0x3d7ec1,_0x3d7ec1),_0x396e4b=ColorManager['hexToRgba'](_0x2b2be3,_0x2189a9),_0x131915=ColorManager[_0x2e77bc(0x634)](_0x2b2be3,0x3*-0xc41+0x5*0x6b1+-0x79*-0x7),_0x5102c1=ColorManager[_0x2e77bc(0x634)](_0x2b2be3,0x6ca*-0x1+0x121b+-0xb51);_0xa2b605[_0x2e77bc(0x624)+'op'](0x76*0x4e+-0x21f8+-0x1fc,_0x396e4b),_0xa2b605[_0x2e77bc(0x624)+'op'](_0xc553dc['OZKUK'](_0x5704aa,0xfe*-0xf+0x1*0x146+0x245*0x6),_0x131915),_0xa2b605['addColorSt'+'op'](_0x5704aa,_0x131915),_0xa2b605['addColorSt'+'op'](0x1a88+-0x1b44+0xbd,_0x5102c1),_0x4d8838[_0x2e77bc(0x25b)](),_0x4d8838[_0x2e77bc(0x4b5)]=_0xa2b605,_0x4d8838[_0x2e77bc(0x6bf)](),_0x4d8838[_0x2e77bc(0x236)](_0x3d7ec1,_0x3d7ec1),_0x4d8838['lineTo'](_0x7d9ee2,_0x3d7ec1),_0x4d8838[_0x2e77bc(0x474)](_0x3d7ec1,_0x3d7ec1,_0x3d7ec1,0x6b*0x17+0x2182+-0x2b1f,_0x23eada),_0x4d8838['lineTo'](_0x3d7ec1,_0x3d7ec1),_0x4d8838[_0x2e77bc(0x4e6)](),_0x4d8838[_0x2e77bc(0x2e9)](),this[_0x2e77bc(0x203)+'re'][_0x2e77bc(0x299)]();},ConfigManager[_0x4b43fd(0x62f)+_0x4b43fd(0x732)]=!![],ConfigManager[_0x4b43fd(0x22a)+_0x4b43fd(0x568)]=!![],VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)][_0x4b43fd(0x3fe)+_0x4b43fd(0x208)+'ta']=ConfigManager[_0x4b43fd(0x28f)],ConfigManager[_0x4b43fd(0x28f)]=function(){const _0x237c29=_0x4b43fd,_0x1fa0e1=VisuMZ[_0x237c29(0x3ba)+_0x237c29(0x4a5)][_0x237c29(0x3fe)+_0x237c29(0x208)+'ta'][_0x237c29(0x752)](this);return _0x1fa0e1['blinkingLi'+_0x237c29(0x732)]=this['blinkingLi'+_0x237c29(0x732)],_0x1fa0e1[_0x237c29(0x22a)+_0x237c29(0x568)]=this[_0x237c29(0x22a)+_0x237c29(0x568)],_0x1fa0e1;},VisuMZ['LightingEf'+_0x4b43fd(0x4a5)][_0x4b43fd(0x3fe)+_0x4b43fd(0x3b0)+_0x4b43fd(0x4f6)]=ConfigManager[_0x4b43fd(0x5dc)],ConfigManager[_0x4b43fd(0x5dc)]=function(_0x500ccd){const _0x34908d=_0x4b43fd,_0x3dfc42={'RktKa':'blinkingLi'+'ghts','cWTmh':'pulsingLig'+_0x34908d(0x568)};VisuMZ[_0x34908d(0x3ba)+_0x34908d(0x4a5)][_0x34908d(0x3fe)+'ger_applyD'+_0x34908d(0x4f6)][_0x34908d(0x752)](this,_0x500ccd),this[_0x34908d(0x499)](_0x500ccd,_0x3dfc42[_0x34908d(0x6d7)],!![]),this[_0x34908d(0x499)](_0x500ccd,_0x3dfc42[_0x34908d(0x32f)],!![]);},TextManager['LightingEf'+_0x4b43fd(0x52f)+'ns']={'BlinkingLights':VisuMZ['LightingEf'+'fects'][_0x4b43fd(0x5b6)][_0x4b43fd(0x560)][_0x4b43fd(0x5e7)+_0x4b43fd(0x49b)],'PulsingLights':VisuMZ['LightingEf'+'fects'][_0x4b43fd(0x5b6)][_0x4b43fd(0x560)][_0x4b43fd(0x461)+_0x4b43fd(0x42e)]},TextManager[_0x4b43fd(0x553)+_0x4b43fd(0x358)]=function(_0x50b7bc){const _0xc55eb8=_0x4b43fd,_0x37f566={'gIivz':_0xc55eb8(0x3b8),'ccyci':'left','mILkt':_0xc55eb8(0x66f),'SMiKv':'lower\x20left','qVtFs':_0xc55eb8(0x6ec)+'t','ZzvSA':_0xc55eb8(0x4b1),'XhLHb':_0xc55eb8(0x2de)+'t','aLvMI':function(_0x55a09c,_0x4e9e00){return _0x55a09c(_0x4e9e00);}};_0x50b7bc=_0x50b7bc['toLowerCas'+'e']()[_0xc55eb8(0x5f8)]();switch(_0x50b7bc){case _0x37f566[_0xc55eb8(0x5be)]:return-0x1ab4+-0xfa7+0x2a5d;case _0x37f566[_0xc55eb8(0x39e)]:return 0x2bc+0x1b2c+0x2*-0xef2;case _0x37f566[_0xc55eb8(0x644)]:return-0x2ef+-0x1271+0x1566;case'up':return 0x142+0x2c1*0x3+-0x97d*0x1;case _0x37f566[_0xc55eb8(0x53b)]:return 0x25f5+0x16d*-0x7+-0x15*0x155;case _0x37f566[_0xc55eb8(0x769)]:return-0x1147+0x259f*0x1+-0x1455;case _0x37f566[_0xc55eb8(0x6ae)]:return 0x20db+0x18*0x60+-0x29d4;case _0x37f566[_0xc55eb8(0x48e)]:return-0xc05*0x1+0x1124*0x2+0xa*-0x239;}return _0x37f566[_0xc55eb8(0x1ff)](Number,_0x50b7bc)||0x3db*0x2+0x73*-0x53+0x71*0x43;},ColorManager[_0x4b43fd(0x758)+_0x4b43fd(0x3bc)]=function(_0x270da6){const _0x1943a9=_0x4b43fd,_0x4d5554={'YoAIl':_0x1943a9(0x704),'cttot':function(_0x659a27,_0x2ecaea){return _0x659a27(_0x2ecaea);},'HEzcg':'white','ZvAFu':'normal','IrMws':_0x1943a9(0x722),'CnqUi':_0x1943a9(0x4a1),'tfKSV':_0x1943a9(0x243),'QGFmy':_0x1943a9(0x229),'pOrDe':_0x1943a9(0x2c1),'Svahn':'#000000','rDUji':_0x1943a9(0x563),'JDWYT':'#ff0000','TytVc':_0x1943a9(0x34e),'ogatY':_0x1943a9(0x69c),'ypXOc':_0x1943a9(0x480),'rzxZh':_0x1943a9(0x1e0),'AXGlI':_0x1943a9(0x202),'KlTzq':_0x1943a9(0x60b),'SAcSC':_0x1943a9(0x52b),'RRlpo':_0x1943a9(0x657),'zmPcV':_0x1943a9(0x48d),'KInfo':_0x1943a9(0x73e),'OBmra':_0x1943a9(0x213),'WdbwN':_0x1943a9(0x3a9),'kLBhz':_0x1943a9(0x669),'Fqicp':_0x1943a9(0x59b),'iFfQl':'pink','WprvA':_0x1943a9(0x29c),'diYkC':_0x1943a9(0x283),'gLdKJ':_0x1943a9(0x285),'nUUpW':'grey','aCDLM':_0x1943a9(0x43f),'LjWII':_0x1943a9(0x755),'psZkD':_0x1943a9(0x5b7),'oXcVW':_0x1943a9(0x6f6),'FkLpl':_0x1943a9(0x47a)+'ge','ySKFn':'#fdc689','UiQCB':'light\x20yell'+'ow','lDyRy':_0x1943a9(0x27e),'NOPHm':_0x1943a9(0x60c)+'n','mPitA':_0x1943a9(0x5a0),'vUhXN':_0x1943a9(0x23b),'ntPHp':'#7accc8','IbArU':_0x1943a9(0x579),'jtpPd':_0x1943a9(0x2d6),'ZBiQP':_0x1943a9(0x40d)+'le','elkpe':_0x1943a9(0x4dd),'wsGaE':'light\x20mage'+_0x1943a9(0x3cf),'pcJjq':_0x1943a9(0x710),'qdSqL':_0x1943a9(0x740),'raBaG':'#f49ac1','QJOKp':'light\x20brow'+'n','FNEam':'#c69c6d','wyqgq':_0x1943a9(0x396),'yJJUl':_0x1943a9(0x2dc),'wgXqz':_0x1943a9(0x4d1),'zRsud':_0x1943a9(0x776),'WDHpN':_0x1943a9(0x3de),'xGvnR':_0x1943a9(0x6fe)+'e','RKeuc':_0x1943a9(0x718),'mnQMk':_0x1943a9(0x347)+'w','HBMZA':_0x1943a9(0x62a),'DNbcl':_0x1943a9(0x711),'yTHVA':_0x1943a9(0x77d),'EXTXv':_0x1943a9(0x1f4),'wYojT':'#005952','yvQoN':_0x1943a9(0x3e5),'lApuc':'#003663','JffqP':_0x1943a9(0x541)+'e','qETOK':_0x1943a9(0x424),'RKHjy':'dark\x20magen'+'ta','YJMbE':'#7b0046','eANmR':_0x1943a9(0x6da),'tSNfn':_0x1943a9(0x5dd),'zXMcP':'dark\x20brown','WmEGy':_0x1943a9(0x4bc),'aNWya':_0x1943a9(0x3e4),'qEwEb':_0x1943a9(0x256),'mqcBg':_0x1943a9(0x378),'BVtck':_0x1943a9(0x5a2),'cZwZu':_0x1943a9(0x621),'hdWlT':_0x1943a9(0x4ff),'mHQVb':'night','grrgc':_0x1943a9(0x2df)};if(_0x270da6['match'](/\#(.*)/i))return _0x4d5554['YoAIl']['format'](_0x4d5554[_0x1943a9(0x3cb)](String,RegExp['$1']));else{_0x270da6=_0x270da6[_0x1943a9(0x586)+'e']()[_0x1943a9(0x5f8)]();const _0x11a9c8=VisuMZ[_0x1943a9(0x3ba)+_0x1943a9(0x4a5)][_0x1943a9(0x5b6)][_0x1943a9(0x4aa)+'rs'];if(_0x11a9c8&&_0x11a9c8[_0x270da6])return _0x11a9c8[_0x270da6];switch(_0x270da6){case'-':case _0x4d5554[_0x1943a9(0x38e)]:case _0x4d5554['ZvAFu']:case _0x4d5554[_0x1943a9(0x339)]:case _0x4d5554['CnqUi']:return _0x4d5554[_0x1943a9(0x745)];case _0x4d5554[_0x1943a9(0x369)]:case _0x4d5554[_0x1943a9(0x34a)]:return _0x4d5554[_0x1943a9(0x590)];case _0x4d5554[_0x1943a9(0x60a)]:return _0x4d5554['JDWYT'];case _0x4d5554['TytVc']:return _0x4d5554[_0x1943a9(0x6b5)];case _0x4d5554['ypXOc']:return _0x4d5554['rzxZh'];case _0x4d5554['AXGlI']:return _0x4d5554[_0x1943a9(0x22b)];case _0x4d5554[_0x1943a9(0x36e)]:return _0x4d5554[_0x1943a9(0x592)];case _0x4d5554[_0x1943a9(0x434)]:return _0x4d5554[_0x1943a9(0x764)];case _0x4d5554[_0x1943a9(0x3ea)]:return _0x4d5554[_0x1943a9(0x484)];case _0x4d5554['kLBhz']:return _0x4d5554[_0x1943a9(0x556)];case _0x4d5554['iFfQl']:return _0x4d5554[_0x1943a9(0x386)];case _0x4d5554[_0x1943a9(0x5b4)]:return _0x4d5554[_0x1943a9(0x25c)];case _0x4d5554[_0x1943a9(0x548)]:case _0x4d5554[_0x1943a9(0x682)]:return _0x4d5554['LjWII'];case _0x4d5554[_0x1943a9(0x616)]:return _0x4d5554[_0x1943a9(0x702)];case _0x4d5554[_0x1943a9(0x368)]:return _0x4d5554[_0x1943a9(0x30f)];case _0x4d5554[_0x1943a9(0x323)]:return _0x4d5554[_0x1943a9(0x32b)];case _0x4d5554['NOPHm']:return _0x4d5554[_0x1943a9(0x29f)];case _0x4d5554[_0x1943a9(0x247)]:return _0x4d5554[_0x1943a9(0x77b)];case _0x4d5554[_0x1943a9(0x5c4)]:return _0x4d5554[_0x1943a9(0x6ab)];case _0x4d5554[_0x1943a9(0x5d8)]:return _0x4d5554[_0x1943a9(0x5a3)];case _0x4d5554[_0x1943a9(0x373)]:return _0x4d5554['pcJjq'];case _0x4d5554['qdSqL']:return _0x4d5554[_0x1943a9(0x39b)];case _0x4d5554[_0x1943a9(0x3eb)]:return _0x4d5554[_0x1943a9(0x70a)];case _0x4d5554['wyqgq']:case _0x4d5554[_0x1943a9(0x4d7)]:return _0x4d5554[_0x1943a9(0x697)];case _0x4d5554[_0x1943a9(0x61c)]:return _0x4d5554[_0x1943a9(0x453)];case _0x4d5554[_0x1943a9(0x3a0)]:return _0x4d5554[_0x1943a9(0x2b7)];case _0x4d5554[_0x1943a9(0x71d)]:return _0x4d5554[_0x1943a9(0x504)];case _0x4d5554[_0x1943a9(0x768)]:return _0x4d5554[_0x1943a9(0x403)];case _0x4d5554[_0x1943a9(0x421)]:return _0x4d5554['wYojT'];case _0x4d5554['yvQoN']:return _0x4d5554['lApuc'];case _0x4d5554[_0x1943a9(0x238)]:return _0x4d5554['qETOK'];case _0x4d5554[_0x1943a9(0x4b8)]:return _0x4d5554['YJMbE'];case _0x4d5554[_0x1943a9(0x2e5)]:return _0x4d5554[_0x1943a9(0x588)];case _0x4d5554['zXMcP']:return _0x4d5554[_0x1943a9(0x730)];case _0x4d5554[_0x1943a9(0x4a2)]:case _0x4d5554[_0x1943a9(0x3f2)]:return _0x4d5554[_0x1943a9(0x459)];case _0x4d5554[_0x1943a9(0x435)]:return _0x4d5554[_0x1943a9(0x6e7)];case _0x4d5554['hdWlT']:return _0x4d5554[_0x1943a9(0x484)];case _0x4d5554['mHQVb']:return _0x4d5554[_0x1943a9(0x441)];}}},ColorManager[_0x4b43fd(0x4d0)+_0x4b43fd(0x5c0)]=function(_0x408ea8){const _0x1b7d00=_0x4b43fd,_0x3d4a71={'uhECL':_0x1b7d00(0x58d),'wkuVa':'add','FnLyF':'additive','VCwgi':_0x1b7d00(0x523),'BWnQd':_0x1b7d00(0x4ea)};_0x408ea8=_0x408ea8['toLowerCas'+'e']();switch(_0x408ea8){case _0x3d4a71[_0x1b7d00(0x45d)]:return PIXI[_0x1b7d00(0x3a4)+'S'][_0x1b7d00(0x6e9)];case _0x3d4a71[_0x1b7d00(0x550)]:case _0x3d4a71[_0x1b7d00(0x75f)]:return PIXI['BLEND_MODE'+'S'][_0x1b7d00(0x6c3)];case _0x3d4a71[_0x1b7d00(0x3b2)]:return PIXI['BLEND_MODE'+'S'][_0x1b7d00(0x757)];case _0x3d4a71[_0x1b7d00(0x6db)]:return PIXI[_0x1b7d00(0x3a4)+'S'][_0x1b7d00(0x640)];}},ColorManager['hexToRgba']=function(_0x2776d4,_0x2e3674){const _0x5e7b2e=_0x4b43fd,_0x435c80={'PfRBX':'4|0|3|2|1','KLAWj':function(_0x293c7e,_0x40c77b){return _0x293c7e===_0x40c77b;},'qEfbQ':function(_0x13b500,_0x2072a1){return _0x13b500+_0x2072a1;},'QOSkr':_0x5e7b2e(0x522),'DkXfY':function(_0x2a927a,_0x25e125){return _0x2a927a&_0x25e125;},'jAlKp':function(_0x1a34c3,_0x3cb4b9){return _0x1a34c3>>_0x3cb4b9;},'DjvnP':function(_0x175401,_0x141d3d){return _0x175401&_0x141d3d;},'EJNan':function(_0xbf20c4,_0xfd9e13){return _0xbf20c4+_0xfd9e13;},'hescI':function(_0x524f10,_0x12bc7d){return _0x524f10>_0x12bc7d;},'wotBz':_0x5e7b2e(0x703)+',0)'};let _0x37fcfa='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x5e7b2e(0x38f)](_0x2776d4)){const _0x2297f4=_0x435c80[_0x5e7b2e(0x6df)][_0x5e7b2e(0x589)]('|');let _0x56df3d=0x2*0x105e+-0x206b+0x1b*-0x3;while(!![]){switch(_0x2297f4[_0x56df3d++]){case'0':_0x435c80[_0x5e7b2e(0x1fc)](_0x37fcfa[_0x5e7b2e(0x77e)],0xd4e+-0x886*0x1+-0x4c5)&&(_0x37fcfa=[_0x37fcfa[-0x2225+0x3*0x1d6+0x1ca3],_0x37fcfa[0x18c3+-0xb5*0xd+0xf92*-0x1],_0x37fcfa[0x1661+-0x5*0x5ad+0x601],_0x37fcfa[-0x2*0x253+0x1a5a+-0x15b3],_0x37fcfa[0x1e32+-0xb1*0x33+0x513],_0x37fcfa[-0x21e1+-0x18ae*0x1+0x3a91]]);continue;case'1':return _0x435c80[_0x5e7b2e(0x4a8)](_0x435c80['qEfbQ'](_0x435c80[_0x5e7b2e(0x4a8)](_0x435c80[_0x5e7b2e(0x4a8)](_0x435c80[_0x5e7b2e(0x4c1)],[_0x435c80['DkXfY'](_0x435c80[_0x5e7b2e(0x282)](_0x37fcfa,0x3da+-0x1*0x222+-0x1a8),-0x611*-0x1+-0x3aa*-0x7+-0x1eb8)[_0x5e7b2e(0x68b)](0x3a6*-0x3+0x1751*-0x1+0x2243,0x141d+-0x7ea+0x2*-0x59a),_0x435c80[_0x5e7b2e(0x277)](_0x435c80[_0x5e7b2e(0x282)](_0x37fcfa,0x1a99+-0x1538+-0x559*0x1),-0x3*0xd03+-0x25c*-0x10+-0x4*-0x92)['clamp'](-0x1*-0x263a+-0x6cc+-0x3*0xa7a,-0x7*-0x199+0x14fe+-0x266*0xd),_0x435c80[_0x5e7b2e(0x277)](_0x37fcfa,0x17d8+-0x20b3+-0x1*-0x9da)[_0x5e7b2e(0x68b)](0x1af*-0x2+0x2*0xf1e+0xb5*-0x26,-0x2*0x12ee+0x247*0x5+0x1b78)][_0x5e7b2e(0x602)](',')),','),_0x2e3674[_0x5e7b2e(0x68b)](0xa5e*-0x2+-0x1082*-0x1+0x43a,0x6d8+0x135*-0x9+0x406)),')');case'2':_0x37fcfa=_0x435c80['EJNan']('0x',_0x37fcfa['join'](''));continue;case'3':while(_0x435c80['hescI'](_0x37fcfa[_0x5e7b2e(0x77e)],0x1feb*0x1+0x383+-0x2368))_0x37fcfa['pop']();continue;case'4':_0x37fcfa=_0x2776d4[_0x5e7b2e(0x47e)](-0x2f+-0x62b+0x65b)[_0x5e7b2e(0x589)]('');continue;}break;}}else return _0x435c80['wotBz'];},ColorManager[_0x4b43fd(0x45c)]=function(_0x273ac1){const _0x33d137=_0x4b43fd,_0x14d125={'ayXgR':_0x33d137(0x4a9),'kcIeL':function(_0x3275e0,_0x32134f){return _0x3275e0&_0x32134f;},'YlrxH':function(_0x363c02,_0x23fd45){return _0x363c02>>_0x23fd45;},'RGqua':function(_0x5b664e,_0x44bb59){return _0x5b664e&_0x44bb59;},'ZAgIe':function(_0x2efada,_0x33062e){return _0x2efada>>_0x33062e;},'IUnMx':function(_0x2cd806,_0x168129){return _0x2cd806&_0x168129;},'QCutL':function(_0x4af3e1,_0x291c8b){return _0x4af3e1+_0x291c8b;},'vPxRA':function(_0x1107bf,_0xb3df75){return _0x1107bf===_0xb3df75;},'OGmkb':function(_0x2168dc,_0x152964){return _0x2168dc>_0x152964;}};let _0x46b52b='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x33d137(0x38f)](_0x273ac1)){const _0x5d108a=_0x14d125[_0x33d137(0x665)][_0x33d137(0x589)]('|');let _0x2ad2f9=0x1*0x1cd6+-0x544*-0x6+-0x3c6e;while(!![]){switch(_0x5d108a[_0x2ad2f9++]){case'0':return[_0x14d125[_0x33d137(0x4b9)](_0x14d125[_0x33d137(0x250)](_0x46b52b,-0x2d5*0xc+-0x5ff+-0x99*-0x43),0x2*0xeff+-0x171*0x4+-0x173b)['clamp'](0x102a*-0x1+0x24b2+-0x1488,0x6bc+-0x2ef*0xb+0x8*0x351),_0x14d125[_0x33d137(0x597)](_0x14d125[_0x33d137(0x70d)](_0x46b52b,0x1a5f*0x1+0x2124+0x3b7b*-0x1),0x76*0x45+-0x5*0x300+-0x1*0xfcf)['clamp'](-0x24eb+0x47*0x55+0xd58,-0x1c51+-0x493*-0x2+-0x1d*-0xb2),_0x14d125[_0x33d137(0x595)](_0x46b52b,-0x13a2*-0x1+-0xb5*0x15+0xa*-0x61)['clamp'](-0x1fcc+-0x2501+-0x16ef*-0x3,0x220c+-0x7c5+0x4*-0x652)];case'1':_0x46b52b=_0x14d125[_0x33d137(0x59a)]('0x',_0x46b52b[_0x33d137(0x602)](''));continue;case'2':_0x46b52b=_0x273ac1['substring'](-0x4cc+-0x1a41+0x1f0e)[_0x33d137(0x589)]('');continue;case'3':_0x14d125[_0x33d137(0x57a)](_0x46b52b['length'],0xca*-0x3+-0x17e8+0x1a49*0x1)&&(_0x46b52b=[_0x46b52b[-0xc69+-0xb5a+0x17c3],_0x46b52b[-0x2*-0x5e5+-0x305*-0x2+-0x11d4],_0x46b52b[-0x1*-0x2075+-0x1474+-0xc00],_0x46b52b[0xc4*-0x10+-0xad5+-0x2*-0xb8b],_0x46b52b[-0x258e+-0x3a*-0x8+0x23c0],_0x46b52b[-0x211*-0xa+-0x1*-0x21da+-0x3682]]);continue;case'4':while(_0x14d125[_0x33d137(0x4f5)](_0x46b52b[_0x33d137(0x77e)],-0x1f2e+-0xc9a*0x2+0x3868))_0x46b52b[_0x33d137(0x75d)]();continue;}break;}}else return[0x1a+0x3*-0xc1a+-0x1*-0x2434,0x262f+-0x1b73+0x394*-0x3,0xb49+-0x1f9d+0x1454];},ColorManager[_0x4b43fd(0x4a4)]=function(_0x3c7dc0){const _0x445440=_0x4b43fd,_0x2f3d91={'SQaLF':function(_0x42869b,_0x3d963e){return _0x42869b<_0x3d963e;},'NKPtK':function(_0x5432c7,_0x27f946){return _0x5432c7>_0x27f946;},'HjIOS':function(_0x2ef79b,_0x2e1d1d){return _0x2ef79b+_0x2e1d1d;}};while(_0x2f3d91['SQaLF'](_0x3c7dc0['length'],-0x3*-0xa75+0xb27+0x1*-0x2a83))_0x3c7dc0[_0x445440(0x54e)](0x226e+0x1e28+-0x4096);while(_0x2f3d91[_0x445440(0x39d)](_0x3c7dc0[_0x445440(0x77e)],-0x2*-0xbcc+0x6ef*0x4+-0x3351))_0x3c7dc0[_0x445440(0x75d)]();return _0x2f3d91[_0x445440(0x374)]('#',_0x3c7dc0[_0x445440(0x2d5)](_0x8f626b=>_0x8f626b[_0x445440(0x68b)](-0x23c0+-0x3d9+0x1*0x2799,0x46*0x2d+-0xe9+0x16*-0x79)[_0x445440(0x4a7)](0x9cb+-0x2208+0x184d*0x1)[_0x445440(0x5f1)](-0x38f*0x2+0x1*-0x1c13+0x2333))['join'](''));},ColorManager['RetrieveOp'+_0x4b43fd(0x57d)+'rn']=function(_0x18d941){const _0x517273=_0x4b43fd,_0x5780be={'LFQke':function(_0x1431f5,_0x266d92){return _0x1431f5===_0x266d92;}};_0x5780be[_0x517273(0x5de)](_0x18d941[_0x517273(0x3ff)],'')&&(_0x18d941[_0x517273(0x3ff)]=ColorManager[_0x517273(0x5b2)+'ternParser'](_0x18d941[_0x517273(0x64e)+'e']));},ColorManager['opacityPat'+_0x4b43fd(0x24c)]=function(_0x4a9959){const _0x3648b8=_0x4b43fd,_0x158c11={'ygCWY':_0x3648b8(0x58d),'TQmca':_0x3648b8(0x387),'GYAbh':'flicker1','TFljK':_0x3648b8(0x778),'spiRO':_0x3648b8(0x60e)+_0x3648b8(0x42c)+_0x3648b8(0x6a1),'aIZGv':_0x3648b8(0x518),'ZYsDP':_0x3648b8(0x43c),'riXVs':_0x3648b8(0x263)+'se','VCDTl':'abcdefghij'+'klmnopqrst'+_0x3648b8(0x47c)+'utsrqponml'+_0x3648b8(0x5d3)+'a','jXlyV':_0x3648b8(0x294),'wdWMi':_0x3648b8(0x642),'PqBPn':_0x3648b8(0x5d4)+_0x3648b8(0x5d4)+_0x3648b8(0x258)+_0x3648b8(0x3fd),'CSPZJ':_0x3648b8(0x6b1)+'e','kxtMx':_0x3648b8(0x5b3),'VzvBh':_0x3648b8(0x5a9),'GQHAt':_0x3648b8(0x617)+'ma','GFrdr':_0x3648b8(0x341),'jxuPi':_0x3648b8(0x643)+'se','RcfLy':_0x3648b8(0x725)+'tuvwxyzyxw'+_0x3648b8(0x4a0)+_0x3648b8(0x437),'oNcIH':_0x3648b8(0x23a),'HuAvt':_0x3648b8(0x466)+'nt','OlXxY':_0x3648b8(0x444)+'momomno','AUzhx':_0x3648b8(0x58e),'azOBj':_0x3648b8(0x639),'WxrXx':_0x3648b8(0x5e2)+'efgmmmmaaa'+'ammmaamm','TXHQA':_0x3648b8(0x27f),'kkEYD':_0x3648b8(0x545),'Mjnqw':_0x3648b8(0x1f2)+_0x3648b8(0x3af)+_0x3648b8(0x50e)+_0x3648b8(0x1ee)+'aa','kGMUh':_0x3648b8(0x26e)+'e','FwkZu':_0x3648b8(0x414),'kKeiT':'aaaaaaaazz'+'zzzzzz','MNGUZ':_0x3648b8(0x3d5)+'t','JyjnI':_0x3648b8(0x668),'hEIpL':'mmamammmma'+_0x3648b8(0x68e)+_0x3648b8(0x45a),'iVvkF':_0x3648b8(0x57c),'yuAku':_0x3648b8(0x5fd)+'klmnopqrrq'+_0x3648b8(0x70f)+'fedcba','wmfLD':_0x3648b8(0x6e0),'QKoCT':'mmnnmmnnnm'+_0x3648b8(0x75a)};_0x4a9959=_0x4a9959['toLowerCas'+'e']()[_0x3648b8(0x5f8)]();switch(_0x4a9959){case _0x158c11[_0x3648b8(0x309)]:case'-':return'z';case _0x158c11[_0x3648b8(0x729)]:case _0x158c11['GYAbh']:case _0x158c11[_0x3648b8(0x5cf)]:return _0x158c11[_0x3648b8(0x6f8)];case _0x158c11[_0x3648b8(0x763)]:case _0x158c11[_0x3648b8(0x219)]:case _0x158c11[_0x3648b8(0x46c)]:return _0x158c11['VCDTl'];case _0x158c11[_0x3648b8(0x741)]:case _0x158c11['wdWMi']:return _0x158c11[_0x3648b8(0x1f3)];case _0x158c11[_0x3648b8(0x375)]:case _0x158c11[_0x3648b8(0x2dd)]:case _0x158c11[_0x3648b8(0x324)]:return _0x158c11[_0x3648b8(0x5a1)];case _0x158c11[_0x3648b8(0x55a)]:case _0x158c11[_0x3648b8(0x200)]:return _0x158c11[_0x3648b8(0x3b5)];case _0x158c11[_0x3648b8(0x781)]:case _0x158c11[_0x3648b8(0x65f)]:return _0x158c11[_0x3648b8(0x1df)];case _0x158c11[_0x3648b8(0x27c)]:case _0x158c11[_0x3648b8(0x2f6)]:return _0x158c11[_0x3648b8(0x6b2)];case _0x158c11['TXHQA']:case _0x158c11['kkEYD']:return _0x158c11[_0x3648b8(0x4e5)];case _0x158c11[_0x3648b8(0x223)]:case _0x158c11[_0x3648b8(0x4ce)]:return _0x158c11[_0x3648b8(0x4b4)];case _0x158c11[_0x3648b8(0x735)]:case _0x158c11[_0x3648b8(0x20c)]:return _0x158c11[_0x3648b8(0x6b0)];case _0x158c11[_0x3648b8(0x55a)]:case _0x158c11[_0x3648b8(0x335)]:return _0x158c11['yuAku'];case _0x158c11[_0x3648b8(0x646)]:return _0x158c11[_0x3648b8(0x601)];}return'';},SceneManager[_0x4b43fd(0x724)+_0x4b43fd(0x2bc)]=function(){const _0x12eb27=_0x4b43fd,_0x5d9245={'Plqzh':function(_0x1483fb,_0x23eb27){return _0x1483fb===_0x23eb27;}};return this['_scene']&&_0x5d9245[_0x12eb27(0x451)](this[_0x12eb27(0x249)][_0x12eb27(0x4a3)+'r'],Scene_Battle);},SceneManager[_0x4b43fd(0x4fc)]=function(){const _0x5b4e73=_0x4b43fd,_0x402209={'pVRTS':function(_0x4db469,_0xb1008){return _0x4db469===_0xb1008;}};return this[_0x5b4e73(0x249)]&&_0x402209[_0x5b4e73(0x42b)](this[_0x5b4e73(0x249)][_0x5b4e73(0x4a3)+'r'],Scene_Map);},SceneManager['addChildTo'+_0x4b43fd(0x25e)+_0x4b43fd(0x605)]=function(_0x41ef66){const _0xaee3df=_0x4b43fd;this[_0xaee3df(0x249)]&&this['_scene'][_0xaee3df(0x3f1)+_0xaee3df(0x491)]&&this[_0xaee3df(0x249)][_0xaee3df(0x3f1)+'ainer'][_0xaee3df(0x2db)](_0x41ef66);},SceneManager[_0x4b43fd(0x30e)+_0x4b43fd(0x737)+_0x4b43fd(0x6e5)]=function(_0x1d9b08){const _0x6f9be9=_0x4b43fd;this['_scene']&&this['_scene'][_0x6f9be9(0x3f1)+_0x6f9be9(0x491)]&&this['_scene'][_0x6f9be9(0x3f1)+'ainer'][_0x6f9be9(0x30e)+'d'](_0x1d9b08);},Game_Temp[_0x4b43fd(0x62d)]['createLigh'+_0x4b43fd(0x66e)+_0x4b43fd(0x6c6)]=function(_0x33473a){const _0x342a8f=_0x4b43fd,_0x268d18=_0x33473a[_0x342a8f(0x299)];this[_0x342a8f(0x32c)+_0x342a8f(0x60d)]=this['_lightSpaw'+_0x342a8f(0x60d)]||[];const _0x202d0f=this[_0x342a8f(0x32c)+_0x342a8f(0x60d)][_0x342a8f(0x77e)];this[_0x342a8f(0x32c)+_0x342a8f(0x60d)][_0x202d0f]=new Function(_0x268d18),this[_0x342a8f(0x211)+_0x342a8f(0x743)](_0x202d0f,_0x33473a);},Game_Temp[_0x4b43fd(0x62d)]['updateLigh'+'tSpawn']=function(_0x3b5714,_0x24c7b6){const _0x2a1028=_0x4b43fd,_0xa4b1a4={'SMJhp':function(_0x553191,_0x139dbf){return _0x553191<_0x139dbf;},'YjuQt':function(_0x4a90e6,_0x1b49e8){return _0x4a90e6*_0x1b49e8;}};if(!_0x24c7b6)return;this[_0x2a1028(0x32c)+_0x2a1028(0x60d)]=this[_0x2a1028(0x32c)+_0x2a1028(0x60d)]||[];const _0x12a7fb=this[_0x2a1028(0x32c)+_0x2a1028(0x60d)][_0x3b5714];if(!_0x12a7fb)return;const _0x2041c8=_0x12a7fb[_0x2a1028(0x752)](_0x24c7b6,_0x24c7b6,_0x24c7b6[_0x2a1028(0x6c2)]);if(!_0x2041c8)return;_0x24c7b6['x']=Math['round'](_0x2041c8['x']||0x1e68+-0x2232+0x3ca),_0x24c7b6['y']=Math[_0x2a1028(0x29a)](_0x2041c8['y']||-0x5e*-0x49+-0x1091*-0x2+-0xefc*0x4),_0x24c7b6[_0x2a1028(0x760)]['color']=_0x2041c8[_0x2a1028(0x2aa)]??_0x24c7b6[_0x2a1028(0x760)][_0x2a1028(0x2aa)],_0x24c7b6[_0x2a1028(0x760)][_0x2a1028(0x51f)]=_0x2041c8[_0x2a1028(0x51f)]??_0x24c7b6[_0x2a1028(0x760)][_0x2a1028(0x51f)],_0x24c7b6[_0x2a1028(0x760)][_0x2a1028(0x74f)]=_0x2041c8[_0x2a1028(0x74f)]??_0x24c7b6[_0x2a1028(0x760)][_0x2a1028(0x74f)],_0x24c7b6[_0x2a1028(0x760)]['angle']=_0x2041c8['angle']??_0x24c7b6[_0x2a1028(0x760)][_0x2a1028(0x4df)],_0x24c7b6[_0x2a1028(0x760)]['opacity']=_0x2041c8[_0x2a1028(0x415)]??_0x24c7b6[_0x2a1028(0x760)]['opacity'];if(_0xa4b1a4[_0x2a1028(0x6c4)](_0x24c7b6[_0x2a1028(0x5e1)],-0x1*-0x1f89+0xd8e*0x2+0x1*-0x3a9b)){const _0x2b31dc=_0xa4b1a4[_0x2a1028(0x4bd)](_0x24c7b6[_0x2a1028(0x5e1)],0x2359+-0x4c7*0x1+-0x1e92+0.1);_0x24c7b6['settings'][_0x2a1028(0x415)]=Math[_0x2a1028(0x29a)](_0xa4b1a4[_0x2a1028(0x4bd)](_0x24c7b6[_0x2a1028(0x760)][_0x2a1028(0x415)],_0x2b31dc))[_0x2a1028(0x68b)](-0x88*0x10+-0x15b6+0x1e36,0x5*-0x14e+-0x1d*0x1+0x7a2);}},VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)]['Game_Scree'+_0x4b43fd(0x418)+'ze']=Game_Screen['prototype']['initialize'],Game_Screen['prototype'][_0x4b43fd(0x645)]=function(){const _0x4d118a=_0x4b43fd;VisuMZ['LightingEf'+_0x4d118a(0x4a5)][_0x4d118a(0x5bb)+'n_initiali'+'ze']['call'](this),this[_0x4d118a(0x2f4)+_0x4d118a(0x608)]();},VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)][_0x4b43fd(0x5bb)+'n_update']=Game_Screen[_0x4b43fd(0x62d)][_0x4b43fd(0x299)],Game_Screen[_0x4b43fd(0x62d)]['update']=function(){const _0x196b5b=_0x4b43fd;VisuMZ[_0x196b5b(0x3ba)+'fects']['Game_Scree'+_0x196b5b(0x708)][_0x196b5b(0x752)](this),this['updateLigh'+_0x196b5b(0x5ef)+'sColor'](),this[_0x196b5b(0x211)+_0x196b5b(0x5ef)+_0x196b5b(0x313)]();},Game_Screen[_0x4b43fd(0x62d)][_0x4b43fd(0x486)+'htingEffec'+_0x4b43fd(0x3a1)]=function(_0x4727b1){const _0x5e00ac=_0x4b43fd,_0xd8bbfb={'ibtQK':function(_0x48f6ff,_0x48c10b){return _0x48f6ff<_0x48c10b;}};_0x4727b1=_0x4727b1['toLowerCas'+'e']()[_0x5e00ac(0x5f8)]();if(this[_0x5e00ac(0x2f9)+_0x5e00ac(0x74a)+_0x5e00ac(0x4cb)+_0x5e00ac(0x6a6)](_0x4727b1))return;else{const _0x9df994=_0x4727b1[_0x5e00ac(0x589)](',')[_0x5e00ac(0x2d5)](_0x9ed5f7=>(Number(_0x9ed5f7)||-0x21df+0x527*0x7+0x119*-0x2)[_0x5e00ac(0x68b)](-(-0xb4+-0xeca+0x107d),-0x31d*0x1+0x1*0x26cb+-0x22af));while(_0xd8bbfb[_0x5e00ac(0x4ae)](_0x9df994[_0x5e00ac(0x77e)],-0x1*-0xcf2+0x1a9*-0xe+0xa4f))_0x9df994[_0x5e00ac(0x54e)](0xc14*0x2+0xe78+-0x6*0x670);_0x9df994[0x11*0x1+0x1c46+-0x1c54]=Math[_0x5e00ac(0x66a)](_0x9df994[0x116b*0x1+0x4c1+-0x1*0x1629]),this[_0x5e00ac(0x738)](_0x9df994,0x1589+-0x21b8+0xc2f);}},Game_Screen[_0x4b43fd(0x62d)]['checkLight'+_0x4b43fd(0x74a)+'AutoTintPr'+'esets']=function(_0x4ffdd7){const _0x526b4e=_0x4b43fd,_0x5736aa={'enGVq':_0x526b4e(0x58d),'FKKBh':'dark','qwxcT':_0x526b4e(0x654),'ztSCu':_0x526b4e(0x771),'HdzSi':_0x526b4e(0x55d)};_0x4ffdd7=_0x4ffdd7[_0x526b4e(0x586)+'e']()[_0x526b4e(0x5f8)]();switch(_0x4ffdd7){case _0x5736aa[_0x526b4e(0x26f)]:this[_0x526b4e(0x738)]([0x186c+0x95*0x2+0x1*-0x1996,-0x2a*-0xcd+-0x5d9*-0x6+-0x44b8,-0xa21*0x3+-0x1bc3+-0x6*-0x9b1,0x1021*0x1+-0x1*-0xdb7+-0x776*0x4],-0x132d+0x1b2c+-0x7ff);return!![];case _0x5736aa[_0x526b4e(0x478)]:this[_0x526b4e(0x738)]([-(0x1713+-0x17*0x15+-0x14ec),-(0x2*0x138+-0xf93+0xd67),-(-0x1ab0+-0x118+-0x14*-0x167),-0x1a02+0x65+0x199d],0x54a*0x1+-0x1df0+0x18a6);return!![];case _0x5736aa['qwxcT']:this[_0x526b4e(0x738)]([0x2af+0x1*-0x829+0x167*0x4,-(0x167*-0x1+0x21ef+-0x2066),-(0xfce+-0x1aa3*-0x1+-0x2a2d),-0x8*0x409+-0x1*0x923+0x3f*0xab],0x1f9*0x3+0x22fc+-0x28e7);return!![];case _0x5736aa[_0x526b4e(0x636)]:this['startTint']([-0x12cf+-0x3d1*0x1+0x16e4,-(-0x1*0x1095+0x137f+0x2*-0x164),-(-0x85*0x18+-0x1035*-0x1+0x47*-0xd),0x160a+0x88e+-0x1e98],-0x25*0xad+0x9fd+0x1f*0x7c);return!![];case _0x5736aa[_0x526b4e(0x51e)]:this[_0x526b4e(0x738)]([-(0x20fd+-0xc5f+0x412*-0x5),-(-0x1f5f+-0x106e+-0x1*-0x3011),-0x1*-0x1f4b+-0x2fd*0x8+-0x3d*0x1f,0x14ef+-0x13f1+-0x3e*0x3],0x42b*0x2+-0x24b3+0x1c5d);return!![];default:return![];}},Game_Screen[_0x4b43fd(0x62d)][_0x4b43fd(0x2f4)+_0x4b43fd(0x608)]=function(){const _0x2b89be=_0x4b43fd,_0x4b1d2f={'NiWRP':'#ffffff'};this[_0x2b89be(0x354)+_0x2b89be(0x625)]={'color':_0x4b1d2f[_0x2b89be(0x232)],'targetColor':_0x4b1d2f[_0x2b89be(0x232)],'colorDuration':0x0,'opacity':0xff,'targetOpacity':0xff,'opacityDuration':0x0,'cacheOpacity':undefined};},Game_Screen[_0x4b43fd(0x62d)]['lightingEf'+_0x4b43fd(0x4a5)]=function(){const _0x4121ab=_0x4b43fd,_0x3cf764={'fFTmU':function(_0x5bbe7f,_0x58fff6){return _0x5bbe7f===_0x58fff6;}};if(_0x3cf764[_0x4121ab(0x3ae)](this[_0x4121ab(0x354)+'ffects'],undefined))this[_0x4121ab(0x2f4)+'ngEffects']();return this[_0x4121ab(0x354)+_0x4121ab(0x625)];},Game_Screen[_0x4b43fd(0x62d)][_0x4b43fd(0x3b1)+_0x4b43fd(0x449)]=function(){const _0x5704d8=_0x4b43fd,_0x4dc501={'mRbSB':_0x5704d8(0x243)};if(this[_0x5704d8(0x4f2)+_0x5704d8(0x74b)]())return this[_0x5704d8(0x405)+'rlay']();return this[_0x5704d8(0x1ea)+_0x5704d8(0x4a5)]()[_0x5704d8(0x2aa)]??_0x4dc501[_0x5704d8(0x259)];},Game_Screen[_0x4b43fd(0x62d)][_0x4b43fd(0x4f2)+_0x4b43fd(0x74b)]=function(){const _0x39dfcd=_0x4b43fd;if(!Imported[_0x39dfcd(0x681)+_0x39dfcd(0x322)+_0x39dfcd(0x570)])return![];if(!$gameMap)return![];return $gameMap['isUseTimeO'+_0x39dfcd(0x72c)]();},Game_Screen[_0x4b43fd(0x62d)][_0x4b43fd(0x486)+_0x4b43fd(0x76f)+_0x4b43fd(0x29d)]=function(_0x3c2417,_0x2fce88){const _0x254ad1=_0x4b43fd,_0x21e868={'VDwNZ':_0x254ad1(0x243),'RUPba':function(_0x124eed,_0x2055a4){return _0x124eed||_0x2055a4;},'lvfbH':_0x254ad1(0x704),'cSDRl':function(_0xed9cfb,_0x3a506f){return _0xed9cfb(_0x3a506f);},'aJvpE':_0x254ad1(0x58d),'QbZAQ':_0x254ad1(0x44b),'ANHcu':_0x254ad1(0x722),'QkAOn':_0x254ad1(0x229),'EylaL':_0x254ad1(0x2c1),'MTCxa':_0x254ad1(0x55d),'lTDNB':_0x254ad1(0x5a2),'ZUusd':_0x254ad1(0x4ff)};let _0x535898=_0x21e868[_0x254ad1(0x51a)],_0xdc986f=-0x241*-0x3+0x89a+-0xe5e;_0x2fce88=_0x21e868['RUPba'](_0x2fce88,0x9d6+0x25c9+-0x2f9f);if(_0x3c2417[_0x254ad1(0x321)](/\#(.*)/i))_0x535898=_0x21e868['lvfbH'][_0x254ad1(0x493)](_0x21e868[_0x254ad1(0x5f5)](String,RegExp['$1']));else{_0x3c2417=_0x3c2417[_0x254ad1(0x586)+'e'](),_0x535898=ColorManager['presetColo'+_0x254ad1(0x3bc)](_0x3c2417);switch(_0x3c2417){case _0x21e868[_0x254ad1(0x4c3)]:case _0x21e868[_0x254ad1(0x468)]:case _0x21e868[_0x254ad1(0x1e8)]:_0xdc986f=0x1*0x1a11+0x1*-0xa3d+-0xfd4;break;case _0x21e868[_0x254ad1(0x413)]:case _0x21e868[_0x254ad1(0x385)]:case _0x21e868['MTCxa']:_0xdc986f=-0xa7f*-0x2+-0x1002+-0x40c;break;case _0x21e868[_0x254ad1(0x660)]:case _0x21e868[_0x254ad1(0x2e6)]:_0xdc986f=0x6c4+-0x1be6+0x15a2;break;default:if(_0x3c2417['match'](/light/i))_0xdc986f=-0x6f1+0x1*0x9e0+-0x2b*0xd;else _0x3c2417['match'](/dark/i)?_0xdc986f=0x1c2+0x1*-0x34+-0x8f:_0xdc986f=0x1*0x1a2d+-0x38f+-0x15ae;break;}}this[_0x254ad1(0x217)+'ingOverlay'+_0x254ad1(0x4f1)](_0x535898,_0x2fce88),this['shiftLight'+_0x254ad1(0x619)+_0x254ad1(0x4ec)](_0xdc986f,_0x2fce88);},Game_Screen['prototype']['setLightin'+_0x4b43fd(0x34d)+_0x4b43fd(0x2b8)]=function(_0x548d58){const _0x351c18=_0x4b43fd;this['lightingEf'+_0x351c18(0x4a5)]()['color']=_0x548d58,this[_0x351c18(0x1ea)+'fects']()[_0x351c18(0x36c)+'ty']=undefined;},Game_Screen['LIGHTING_E'+'FFECTS_SMA'+_0x4b43fd(0x1ef)+_0x4b43fd(0x683)]=![],Game_Screen['prototype']['lightingOv'+'erlayOpaci'+'ty']=function(){const _0x692564=_0x4b43fd,_0x3389c5={'Yhpaw':function(_0x10756e,_0x4aa1fe){return _0x10756e===_0x4aa1fe;}};if($gameMap&&$gameMap['isAntiLigh'+'tingOverla'+'y']())return-0x233f+0x30*-0x66+0x365f;if(Game_Screen[_0x692564(0x72e)+_0x692564(0x514)+'RT_AUTO_OP'+'ACITY']&&Sprite_LightingEffects[_0x692564(0x439)+_0x692564(0x700)+'K'])return _0x3389c5['Yhpaw'](this['lightingEf'+_0x692564(0x4a5)]()[_0x692564(0x36c)+'ty'],undefined)&&(this[_0x692564(0x1ea)+_0x692564(0x4a5)]()[_0x692564(0x36c)+'ty']=VisuMZ[_0x692564(0x3ba)+_0x692564(0x4a5)][_0x692564(0x1ed)+'pacity']()),this[_0x692564(0x1ea)+'fects']()['cacheOpaci'+'ty'];return this[_0x692564(0x1ea)+_0x692564(0x4a5)]()[_0x692564(0x415)]??0x251b*0x1+0x26*-0xde+0x2*-0x194;},Game_Screen[_0x4b43fd(0x62d)][_0x4b43fd(0x20b)+_0x4b43fd(0x6f2)+_0x4b43fd(0x214)]=function(_0x4e3cde){const _0x53dd9c=_0x4b43fd;return this[_0x53dd9c(0x1ea)+_0x53dd9c(0x4a5)]()[_0x53dd9c(0x36c)+'ty']=undefined,this['lightingEf'+_0x53dd9c(0x4a5)]()[_0x53dd9c(0x415)]=Math[_0x53dd9c(0x29a)](_0x4e3cde)[_0x53dd9c(0x68b)](-0x20*-0x121+0x20e9+-0x4509,-0x1323+-0x24ba+-0x6*-0x97a);},VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)]['CalcSmartO'+_0x4b43fd(0x350)]=function(){const _0x1832c2=_0x4b43fd,_0x1c5ffb={'WRyhY':function(_0xc951ea,_0x343549){return _0xc951ea/_0x343549;},'RrSaI':function(_0x321bb7,_0x84279e){return _0x321bb7<_0x84279e;},'ZaChH':function(_0x547304,_0x35ccca){return _0x547304/_0x35ccca;},'LgUXB':function(_0x4d8c24,_0x3a6b43){return _0x4d8c24-_0x3a6b43;},'yWFrR':function(_0x58faa4,_0x1bbed6){return _0x58faa4*_0x1bbed6;}},_0x445b01=$gameScreen[_0x1832c2(0x1ea)+'fects']()[_0x1832c2(0x415)],_0x11208b=$gameScreen[_0x1832c2(0x3b1)+_0x1832c2(0x449)](),_0x439422=ColorManager[_0x1832c2(0x45c)](_0x11208b),_0x5b6818=Math[_0x1832c2(0x29a)](_0x1c5ffb[_0x1832c2(0x28b)](_0x439422[_0x1832c2(0x39c)]((_0x215b57,_0x484d90)=>_0x215b57+_0x484d90,-0x15d9+0x5e1+0xff8),_0x439422['length'])),_0xae2273=-0xd83+0x8f3*-0x3+0x291c;if(_0x1c5ffb['RrSaI'](_0x5b6818,_0xae2273))return _0x445b01;const _0x217a0d=_0x1c5ffb[_0x1832c2(0x443)](_0x1c5ffb[_0x1832c2(0x6b8)](-0x1*0x26dd+0xb3*0x26+0xd4a,_0x5b6818),_0x1c5ffb[_0x1832c2(0x6b8)](-0x13d4+0x2d0+-0x1203*-0x1,_0xae2273));return Math[_0x1832c2(0x2e4)](_0x1c5ffb[_0x1832c2(0x5c8)](_0x217a0d,_0x445b01))[_0x1832c2(0x68b)](0x81*0x7+0xf7f*0x1+-0x1306,0x6bc*-0x1+0x5c5+0x1f6);},Game_Screen[_0x4b43fd(0x62d)][_0x4b43fd(0x217)+'ingOverlay'+_0x4b43fd(0x4f1)]=function(_0x574573,_0x9161e3){const _0x3fc1f1=_0x4b43fd,_0x2b7f48={'cQlMN':function(_0x5cbc60,_0x440ca7){return _0x5cbc60<=_0x440ca7;}};this[_0x3fc1f1(0x1ea)+_0x3fc1f1(0x4a5)]()[_0x3fc1f1(0x527)+'r']=_0x574573,this[_0x3fc1f1(0x1ea)+_0x3fc1f1(0x4a5)]()[_0x3fc1f1(0x409)+'ion']=_0x9161e3,_0x2b7f48[_0x3fc1f1(0x56a)](_0x9161e3,0xdab*-0x1+-0x34d*-0xb+-0x19e*0xe)&&(this[_0x3fc1f1(0x1ea)+_0x3fc1f1(0x4a5)]()[_0x3fc1f1(0x2aa)]=_0x574573,this['lightingEf'+_0x3fc1f1(0x4a5)]()[_0x3fc1f1(0x36c)+'ty']=undefined);},Game_Screen[_0x4b43fd(0x62d)][_0x4b43fd(0x211)+_0x4b43fd(0x5ef)+'sColor']=function(){const _0x107092=_0x4b43fd,_0x4808fa={'NZOGS':function(_0x7c972a,_0x576f08){return _0x7c972a<=_0x576f08;},'EMhUm':function(_0xefce9f,_0x55e0f8){return _0xefce9f<_0x55e0f8;},'AEIVB':function(_0x231c8c,_0x313f69){return _0x231c8c/_0x313f69;},'UWwcj':function(_0x358868,_0x25c807){return _0x358868+_0x25c807;},'Quoyo':function(_0x5b3f89,_0x40c13a){return _0x5b3f89*_0x40c13a;},'YpOrO':function(_0x31096f,_0x1482bd){return _0x31096f-_0x1482bd;},'NxdTc':function(_0x5b6f27,_0x21a58c){return _0x5b6f27<=_0x21a58c;}};if(_0x4808fa[_0x107092(0x251)](this[_0x107092(0x1ea)+_0x107092(0x4a5)]()[_0x107092(0x409)+'ion'],0x10f5+0x1284*-0x2+0x1413))return;const _0x1c4a41=this[_0x107092(0x1ea)+_0x107092(0x4a5)]()[_0x107092(0x409)+_0x107092(0x2fc)],_0x264f19=ColorManager[_0x107092(0x45c)](this[_0x107092(0x1ea)+'fects']()[_0x107092(0x2aa)]),_0x16491f=ColorManager[_0x107092(0x45c)](this[_0x107092(0x1ea)+_0x107092(0x4a5)]()[_0x107092(0x527)+'r']);for(let _0x1bf687=0xed*0x8+0x1eb2*0x1+-0x130d*0x2;_0x4808fa[_0x107092(0x6c7)](_0x1bf687,0x1*0x2e9+0x15ca+-0x18b0);_0x1bf687++){_0x264f19[_0x1bf687]=Math[_0x107092(0x29a)](_0x4808fa[_0x107092(0x23c)](_0x4808fa[_0x107092(0x6a3)](_0x4808fa[_0x107092(0x780)](_0x264f19[_0x1bf687],_0x4808fa['YpOrO'](_0x1c4a41,-0x1*0x7e1+-0x1*-0x26ae+-0x1ecc)),_0x16491f[_0x1bf687]),_0x1c4a41));}this['lightingEf'+_0x107092(0x4a5)]()[_0x107092(0x2aa)]=ColorManager['arrayToHex'](_0x264f19),this[_0x107092(0x1ea)+_0x107092(0x4a5)]()[_0x107092(0x36c)+'ty']=undefined,this[_0x107092(0x1ea)+_0x107092(0x4a5)]()[_0x107092(0x409)+_0x107092(0x2fc)]--,_0x4808fa[_0x107092(0x4c6)](this[_0x107092(0x1ea)+_0x107092(0x4a5)]()[_0x107092(0x409)+_0x107092(0x2fc)],-0x1*0x1201+0xc81+0x580)&&(this[_0x107092(0x1ea)+_0x107092(0x4a5)]()[_0x107092(0x2aa)]=this['lightingEf'+_0x107092(0x4a5)]()[_0x107092(0x527)+'r']);},Game_Screen[_0x4b43fd(0x62d)][_0x4b43fd(0x217)+_0x4b43fd(0x619)+_0x4b43fd(0x4ec)]=function(_0x79b352,_0x3bb0fe){const _0x3f187f=_0x4b43fd,_0xb7cb9d={'VoNpQ':function(_0x1224b6,_0x4d3844){return _0x1224b6<=_0x4d3844;}};this[_0x3f187f(0x1ea)+_0x3f187f(0x4a5)]()['targetOpac'+'ity']=_0x79b352,this[_0x3f187f(0x1ea)+_0x3f187f(0x4a5)]()[_0x3f187f(0x5f4)+'ation']=_0x3bb0fe,_0xb7cb9d[_0x3f187f(0x71c)](_0x3bb0fe,-0xf04+-0x1579+0x1*0x247d)&&(this['lightingEf'+_0x3f187f(0x4a5)]()[_0x3f187f(0x415)]=_0x79b352,this[_0x3f187f(0x1ea)+'fects']()[_0x3f187f(0x36c)+'ty']=undefined);},Game_Screen[_0x4b43fd(0x62d)][_0x4b43fd(0x211)+_0x4b43fd(0x5ef)+'sOpacity']=function(){const _0x25c7cb=_0x4b43fd,_0x533cbb={'nwzca':function(_0x2fbfe1,_0x4960d6){return _0x2fbfe1<=_0x4960d6;},'UxwpI':function(_0x1978a4,_0x9ddf0d){return _0x1978a4/_0x9ddf0d;},'AutyM':function(_0x56e117,_0x360602){return _0x56e117+_0x360602;},'klnlV':function(_0x322150,_0x5dbef4){return _0x322150*_0x5dbef4;},'IINXi':function(_0x3a0c81,_0x3ec6d7){return _0x3a0c81-_0x3ec6d7;},'KNVON':function(_0x5484a8,_0x3eadbb){return _0x5484a8<=_0x3eadbb;}};if(_0x533cbb['nwzca'](this[_0x25c7cb(0x1ea)+_0x25c7cb(0x4a5)]()[_0x25c7cb(0x5f4)+_0x25c7cb(0x629)],-0x1f32+0x20b4+-0xc1*0x2))return;const _0x73afb3=this[_0x25c7cb(0x1ea)+_0x25c7cb(0x4a5)]()[_0x25c7cb(0x5f4)+_0x25c7cb(0x629)],_0x4c283d=this['lightingEf'+_0x25c7cb(0x4a5)]()[_0x25c7cb(0x415)],_0x2dfaf5=this[_0x25c7cb(0x1ea)+_0x25c7cb(0x4a5)]()[_0x25c7cb(0x483)+_0x25c7cb(0x31e)];this[_0x25c7cb(0x1ea)+_0x25c7cb(0x4a5)]()[_0x25c7cb(0x415)]=_0x533cbb[_0x25c7cb(0x5c9)](_0x533cbb[_0x25c7cb(0x456)](_0x533cbb[_0x25c7cb(0x505)](_0x4c283d,_0x533cbb[_0x25c7cb(0x257)](_0x73afb3,0x8*0x4+-0x26b8+0x2699)),_0x2dfaf5),_0x73afb3),this[_0x25c7cb(0x1ea)+_0x25c7cb(0x4a5)]()[_0x25c7cb(0x36c)+'ty']=undefined,this[_0x25c7cb(0x1ea)+_0x25c7cb(0x4a5)]()['opacityDur'+_0x25c7cb(0x629)]--,_0x533cbb[_0x25c7cb(0x43a)](this[_0x25c7cb(0x1ea)+'fects']()[_0x25c7cb(0x5f4)+'ation'],0x1ddd+-0x16b8+0x1f*-0x3b)&&(this[_0x25c7cb(0x1ea)+'fects']()[_0x25c7cb(0x415)]=_0x2dfaf5);},VisuMZ[_0x4b43fd(0x3ba)+'fects'][_0x4b43fd(0x2cc)+'erBase_ini'+_0x4b43fd(0x62b)]=Game_BattlerBase['prototype'][_0x4b43fd(0x6b9)+'s'],Game_BattlerBase[_0x4b43fd(0x62d)]['initMember'+'s']=function(){const _0x3d63f7=_0x4b43fd;VisuMZ[_0x3d63f7(0x3ba)+_0x3d63f7(0x4a5)]['Game_Battl'+_0x3d63f7(0x649)+_0x3d63f7(0x62b)]['call'](this),this[_0x3d63f7(0x2f4)+_0x3d63f7(0x6fb)+_0x3d63f7(0x41a)]();},Game_BattlerBase[_0x4b43fd(0x62d)][_0x4b43fd(0x2f4)+_0x4b43fd(0x6fb)+_0x4b43fd(0x41a)]=function(){const _0x3ded0d=_0x4b43fd;this[_0x3ded0d(0x6d3)+'ht']={},this[_0x3ded0d(0x6d3)+_0x3ded0d(0x4e2)]={};},Game_BattlerBase['prototype']['radialLigh'+'t']=function(){const _0x40c3f1=_0x4b43fd,_0x421d5b={'oOKBb':function(_0x573d93,_0xed5ad9){return _0x573d93===_0xed5ad9;}};if(_0x421d5b[_0x40c3f1(0x2b0)](this['_radialLig'+'ht'],undefined))this[_0x40c3f1(0x2f4)+_0x40c3f1(0x6fb)+_0x40c3f1(0x41a)]();return this[_0x40c3f1(0x6d3)+'ht'];},Game_BattlerBase[_0x4b43fd(0x62d)][_0x4b43fd(0x363)+_0x4b43fd(0x332)+'gs']=function(_0x274883){const _0x5acbb5=_0x4b43fd,_0x4846f0={'vqssg':function(_0x510ea1,_0x46c2cc){return _0x510ea1===_0x46c2cc;}};if(_0x4846f0[_0x5acbb5(0x2bf)](this[_0x5acbb5(0x6d3)+'ht'],undefined))this['initLighti'+_0x5acbb5(0x6fb)+_0x5acbb5(0x41a)]();this['_radialLig'+'ht']=JsonEx['makeDeepCo'+'py'](_0x274883);},Game_BattlerBase[_0x4b43fd(0x62d)][_0x4b43fd(0x2b3)+_0x4b43fd(0x2c4)]=function(){const _0x53ce94=_0x4b43fd,_0x754ab2={'LSaqo':function(_0x3a914d,_0x515a30){return _0x3a914d===_0x515a30;}};if(_0x754ab2[_0x53ce94(0x6ef)](this[_0x53ce94(0x6d3)+_0x53ce94(0x4e2)],undefined))this['initLighti'+_0x53ce94(0x6fb)+_0x53ce94(0x41a)]();return this[_0x53ce94(0x6d3)+_0x53ce94(0x4e2)];},Game_BattlerBase['prototype'][_0x4b43fd(0x363)+_0x4b43fd(0x40b)+'or']=function(_0x49958c){const _0x2bbe6d=_0x4b43fd,_0x2c4146={'LpbrR':function(_0x3f21ff,_0x51bb0a){return _0x3f21ff===_0x51bb0a;}};if(_0x2c4146[_0x2bbe6d(0x75b)](this[_0x2bbe6d(0x6d3)+_0x2bbe6d(0x4e2)],undefined))this[_0x2bbe6d(0x2f4)+_0x2bbe6d(0x6fb)+_0x2bbe6d(0x41a)]();this[_0x2bbe6d(0x6d3)+_0x2bbe6d(0x4e2)]=JsonEx[_0x2bbe6d(0x327)+'py'](_0x49958c),ColorManager[_0x2bbe6d(0x622)+_0x2bbe6d(0x57d)+'rn'](this['_radialLig'+_0x2bbe6d(0x4e2)]);},Game_Battler[_0x4b43fd(0x62d)][_0x4b43fd(0x558)+_0x4b43fd(0x503)+_0x4b43fd(0x618)+'ings']=function(_0x22fea7){const _0xb63fe9=_0x4b43fd,_0x5c3cab={'vxlvE':function(_0x4bf1f8,_0x11afc7){return _0x4bf1f8||_0x11afc7;}};_0x22fea7=_0x5c3cab['vxlvE'](_0x22fea7,''),Game_Event[_0xb63fe9(0x62d)][_0xb63fe9(0x2c9)+_0xb63fe9(0x35f)+_0xb63fe9(0x2ef)+'s']['call'](this,_0x22fea7),Game_Event['prototype'][_0xb63fe9(0x2c9)+'lLightBeha'+_0xb63fe9(0x55f)+_0xb63fe9(0x207)][_0xb63fe9(0x752)](this,_0x22fea7);},VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)]['Game_Actor'+_0x4b43fd(0x355)]=Game_Actor[_0x4b43fd(0x62d)][_0x4b43fd(0x37c)],Game_Actor[_0x4b43fd(0x62d)][_0x4b43fd(0x37c)]=function(_0x2cd43d){const _0x3efeaa=_0x4b43fd;VisuMZ[_0x3efeaa(0x3ba)+'fects'][_0x3efeaa(0x3ce)+_0x3efeaa(0x355)][_0x3efeaa(0x752)](this,_0x2cd43d),this[_0x3efeaa(0x2f4)+_0x3efeaa(0x608)](),this[_0x3efeaa(0x558)+_0x3efeaa(0x503)+_0x3efeaa(0x618)+_0x3efeaa(0x4f3)]();},Game_Actor[_0x4b43fd(0x62d)][_0x4b43fd(0x2f4)+'ngEffects']=function(){const _0xd634c6=_0x4b43fd,_0x4bf87a=VisuMZ[_0xd634c6(0x3ba)+_0xd634c6(0x4a5)][_0xd634c6(0x5b6)];this['_conicalLi'+_0xd634c6(0x6ba)+'sets']=JsonEx['makeDeepCo'+'py'](_0x4bf87a[_0xd634c6(0x54f)]),this[_0xd634c6(0x507)+_0xd634c6(0x6ce)+_0xd634c6(0x4fe)]=JsonEx[_0xd634c6(0x327)+'py'](_0x4bf87a[_0xd634c6(0x631)+'et']),this[_0xd634c6(0x507)+_0xd634c6(0x585)+_0xd634c6(0x4fe)]=JsonEx[_0xd634c6(0x327)+'py'](_0x4bf87a[_0xd634c6(0x749)+'et']);const _0x1860c5=this[_0xd634c6(0x68f)]()[_0xd634c6(0x620)]||'';Game_Event[_0xd634c6(0x62d)][_0xd634c6(0x392)+_0xd634c6(0x49c)+_0xd634c6(0x551)+_0xd634c6(0x2d0)][_0xd634c6(0x752)](this,_0x1860c5);},Game_Actor[_0x4b43fd(0x62d)][_0x4b43fd(0x5d6)+_0x4b43fd(0x538)+_0x4b43fd(0x5a8)]=function(){const _0x58db5f=_0x4b43fd,_0xb4c1b4={'VZuCd':function(_0x4790e4,_0x4691c5){return _0x4790e4===_0x4691c5;}};if(_0xb4c1b4[_0x58db5f(0x5c3)](this[_0x58db5f(0x507)+_0x58db5f(0x6ba)+'sets'],undefined))this['initLighti'+_0x58db5f(0x608)]();return this[_0x58db5f(0x507)+_0x58db5f(0x6ba)+'sets'];},Game_Actor[_0x4b43fd(0x62d)]['setConical'+_0x4b43fd(0x508)+_0x4b43fd(0x3a8)]=function(_0x2d1a1e){const _0x371cd2=_0x4b43fd,_0x258f3c={'nSoLB':function(_0x2bf0fa,_0x200999){return _0x2bf0fa===_0x200999;}};if(_0x258f3c[_0x371cd2(0x279)](this[_0x371cd2(0x507)+_0x371cd2(0x6ba)+_0x371cd2(0x4fe)],undefined))this[_0x371cd2(0x2f4)+_0x371cd2(0x608)]();this[_0x371cd2(0x507)+'ghtWalkOff'+_0x371cd2(0x4fe)]=JsonEx[_0x371cd2(0x327)+'py'](_0x2d1a1e);},Game_Actor[_0x4b43fd(0x62d)][_0x4b43fd(0x5d6)+_0x4b43fd(0x1e6)+_0x4b43fd(0x5a8)]=function(){const _0x4b22d2=_0x4b43fd,_0x224908={'GaAqx':function(_0x1b8ab5,_0x577a5c){return _0x1b8ab5===_0x577a5c;}};if(_0x224908['GaAqx'](this[_0x4b22d2(0x507)+'ghtDashOff'+_0x4b22d2(0x4fe)],undefined))this[_0x4b22d2(0x2f4)+_0x4b22d2(0x608)]();return this[_0x4b22d2(0x507)+'ghtDashOff'+_0x4b22d2(0x4fe)];},Game_Actor['prototype'][_0x4b43fd(0x308)+_0x4b43fd(0x261)+_0x4b43fd(0x3a8)]=function(_0x58a242){const _0x42e980=_0x4b43fd,_0x321032={'xsmID':function(_0x38c198,_0x256505){return _0x38c198===_0x256505;}};if(_0x321032[_0x42e980(0x525)](this[_0x42e980(0x507)+'ghtDashOff'+_0x42e980(0x4fe)],undefined))this[_0x42e980(0x2f4)+_0x42e980(0x608)]();this[_0x42e980(0x507)+_0x42e980(0x6ce)+_0x42e980(0x4fe)]=JsonEx[_0x42e980(0x327)+'py'](_0x58a242);},Game_Actor[_0x4b43fd(0x62d)]['conicalLig'+_0x4b43fd(0x20f)+_0x4b43fd(0x5a8)]=function(){const _0x2184da=_0x4b43fd,_0x5de2a2={'YcMbW':function(_0x3e4122,_0x9797e9){return _0x3e4122===_0x9797e9;}};if(_0x5de2a2[_0x2184da(0x5a5)](this['_conicalLi'+'ghtJumpOff'+_0x2184da(0x4fe)],undefined))this[_0x2184da(0x2f4)+_0x2184da(0x608)]();return this[_0x2184da(0x507)+_0x2184da(0x585)+_0x2184da(0x4fe)];},Game_Actor[_0x4b43fd(0x62d)]['setConical'+_0x4b43fd(0x670)+_0x4b43fd(0x3a8)]=function(_0x55f537){const _0x126649=_0x4b43fd,_0xbd3cd3={'BiFGP':function(_0x4f275a,_0x5cf390){return _0x4f275a===_0x5cf390;}};if(_0xbd3cd3[_0x126649(0x655)](this['_conicalLi'+_0x126649(0x585)+_0x126649(0x4fe)],undefined))this['initLighti'+_0x126649(0x608)]();this['_conicalLi'+'ghtJumpOff'+'sets']=JsonEx[_0x126649(0x327)+'py'](_0x55f537);},Game_Actor['prototype']['initLighti'+'ngEffectsS'+_0x4b43fd(0x41a)]=function(){const _0x4247bb=_0x4b43fd;Game_Battler[_0x4247bb(0x62d)][_0x4247bb(0x2f4)+'ngEffectsS'+_0x4247bb(0x41a)][_0x4247bb(0x752)](this);const _0x3595a1=VisuMZ[_0x4247bb(0x3ba)+_0x4247bb(0x4a5)][_0x4247bb(0x5b6)][_0x4247bb(0x45b)];this[_0x4247bb(0x363)+_0x4247bb(0x332)+'gs'](_0x3595a1[_0x4247bb(0x76b)+'l']),this[_0x4247bb(0x363)+_0x4247bb(0x40b)+'or'](_0x3595a1[_0x4247bb(0x76b)+_0x4247bb(0x255)]),this[_0x4247bb(0x2b3)+'t']()[_0x4247bb(0x594)]=_0x3595a1[_0x4247bb(0x3f0)+_0x4247bb(0x274)];},Game_Actor[_0x4b43fd(0x62d)][_0x4b43fd(0x558)+_0x4b43fd(0x503)+_0x4b43fd(0x618)+_0x4b43fd(0x4f3)]=function(){const _0xa9d386=_0x4b43fd,_0x28abec=this[_0xa9d386(0x68f)]()['note'];Game_Battler[_0xa9d386(0x62d)]['setupBattl'+_0xa9d386(0x503)+_0xa9d386(0x618)+_0xa9d386(0x4f3)][_0xa9d386(0x752)](this,_0x28abec);},Game_Enemy[_0x4b43fd(0x62d)][_0x4b43fd(0x2f4)+_0x4b43fd(0x6fb)+_0x4b43fd(0x41a)]=function(){const _0x5f435b=_0x4b43fd;Game_Battler[_0x5f435b(0x62d)][_0x5f435b(0x2f4)+_0x5f435b(0x6fb)+'ettings'][_0x5f435b(0x752)](this);const _0xfebd0c=VisuMZ[_0x5f435b(0x3ba)+'fects'][_0x5f435b(0x5b6)][_0x5f435b(0x45b)];this[_0x5f435b(0x363)+_0x5f435b(0x332)+'gs'](_0xfebd0c[_0x5f435b(0x739)+'l']),this[_0x5f435b(0x363)+'ightBehavi'+'or'](_0xfebd0c[_0x5f435b(0x739)+'lBehavior']),this['radialLigh'+'t']()[_0x5f435b(0x594)]=_0xfebd0c['EnemyAutoR'+_0x5f435b(0x274)];},VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)]['Game_Enemy'+'_setup']=Game_Enemy[_0x4b43fd(0x62d)][_0x4b43fd(0x37c)],Game_Enemy[_0x4b43fd(0x62d)][_0x4b43fd(0x37c)]=function(_0x5c6ca4,_0x1c99c3,_0x33ab3b){const _0x5815b7=_0x4b43fd;VisuMZ[_0x5815b7(0x3ba)+'fects'][_0x5815b7(0x76d)+_0x5815b7(0x355)]['call'](this,_0x5c6ca4,_0x1c99c3,_0x33ab3b),this[_0x5815b7(0x558)+'eLightingE'+_0x5815b7(0x618)+_0x5815b7(0x4f3)]();},Game_Enemy[_0x4b43fd(0x62d)]['setupBattl'+_0x4b43fd(0x503)+_0x4b43fd(0x618)+_0x4b43fd(0x4f3)]=function(){const _0x58a613=_0x4b43fd,_0x2ab732=this[_0x58a613(0x345)]()[_0x58a613(0x620)];Game_Battler[_0x58a613(0x62d)]['setupBattl'+_0x58a613(0x503)+_0x58a613(0x618)+_0x58a613(0x4f3)][_0x58a613(0x752)](this,_0x2ab732);},VisuMZ[_0x4b43fd(0x3ba)+'fects'][_0x4b43fd(0x3dd)+_0x4b43fd(0x744)]=Game_Map['prototype'][_0x4b43fd(0x37c)],Game_Map['prototype']['setup']=function(_0x16c2c1){const _0x2983a4=_0x4b43fd;VisuMZ[_0x2983a4(0x3ba)+_0x2983a4(0x4a5)][_0x2983a4(0x3dd)+'etup'][_0x2983a4(0x752)](this,_0x16c2c1),this[_0x2983a4(0x4e4)+_0x2983a4(0x74a)+_0x2983a4(0x446)](),this[_0x2983a4(0x4e4)+_0x2983a4(0x74a)+_0x2983a4(0x429)]();},Game_Map['prototype'][_0x4b43fd(0x4e4)+_0x4b43fd(0x74a)+_0x4b43fd(0x446)]=function(){const _0x567b1a=_0x4b43fd,_0xad2e4c={'ufdLd':function(_0x598734,_0x26e84f){return _0x598734(_0x26e84f);},'yLjum':function(_0x599565,_0x4516e5){return _0x599565*_0x4516e5;},'fIzIj':function(_0xb1cac,_0x4fa5e4){return _0xb1cac(_0x4fa5e4);},'RyRoV':function(_0x1af972,_0xed182a){return _0x1af972(_0xed182a);}};if(!$dataMap)return;const _0x4f832c=VisuMZ[_0x567b1a(0x3ba)+'fects'][_0x567b1a(0x72d)],_0x2f4a23=$dataMap[_0x567b1a(0x620)]||'',_0x21f0c7=(this['tileset']()?this[_0x567b1a(0x52d)]()['note']:'')||'',_0x2c75d0=VisuMZ[_0x567b1a(0x3ba)+_0x567b1a(0x4a5)][_0x567b1a(0x5b6)][_0x567b1a(0x35b)];this['_antiLight'+_0x567b1a(0x3ee)]={'hardRegionIDs':_0x2c75d0[_0x567b1a(0x317)+'s']['clone'](),'hardTerrainTagIDs':_0x2c75d0[_0x567b1a(0x30b)+_0x567b1a(0x3a3)][_0x567b1a(0x3cd)](),'softRegionIDs':_0x2c75d0[_0x567b1a(0x2ab)+'s'][_0x567b1a(0x3cd)](),'softTerrainTagIDs':_0x2c75d0[_0x567b1a(0x680)+'nTags']['clone']()};_0x2f4a23['match'](_0x4f832c[_0x567b1a(0x2a6)])&&$gameScreen['processLig'+_0x567b1a(0x54d)+_0x567b1a(0x3a1)](RegExp['$1']);this[_0x567b1a(0x3e6)+'sOverlay']=![];_0x2f4a23['match'](_0x4f832c[_0x567b1a(0x3b1)+'erlayColor'])&&$gameScreen[_0x567b1a(0x486)+_0x567b1a(0x76f)+'ayColor'](RegExp['$1']);if(_0x2f4a23[_0x567b1a(0x321)](_0x4f832c[_0x567b1a(0x3b1)+'erlayOpaci'+_0x567b1a(0x5ff)]))$gameScreen[_0x567b1a(0x20b)+'gOverlayOp'+_0x567b1a(0x214)](_0xad2e4c[_0x567b1a(0x4d9)](Number,RegExp['$1']));else{if(_0x2f4a23[_0x567b1a(0x321)](_0x4f832c['lightingOv'+_0x567b1a(0x693)+_0x567b1a(0x29b)])){const _0x4ed474=_0xad2e4c[_0x567b1a(0x2a0)](_0xad2e4c[_0x567b1a(0x4d9)](Number,RegExp['$1']),0x1*-0x94b+-0x1*0xa3b+0xee*0x15+0.01),_0x52cc53=Math['round'](_0xad2e4c[_0x567b1a(0x2a0)](_0x4ed474,0x1515+-0x8f2+-0xb24));$gameScreen[_0x567b1a(0x20b)+_0x567b1a(0x6f2)+_0x567b1a(0x214)](_0x52cc53);}}_0x2f4a23['match'](_0x4f832c[_0x567b1a(0x48b)+_0x567b1a(0x4eb)])&&(this[_0x567b1a(0x3e6)+_0x567b1a(0x604)]=!![]),_0x2f4a23[_0x567b1a(0x321)](_0x4f832c[_0x567b1a(0x578)+_0x567b1a(0x416)+_0x567b1a(0x751)])&&(this['_antiLight'+_0x567b1a(0x3ee)][_0x567b1a(0x3c5)+'IDs']=_0xad2e4c[_0x567b1a(0x4d9)](String,RegExp['$1'])['split'](',')[_0x567b1a(0x2d5)](_0x289bf0=>(Number(_0x289bf0)||0x1*-0x933+0x209e+0x4a*-0x51)[_0x567b1a(0x68b)](0x22f1+-0x2295+-0x5b,0x87b*-0x4+0x17ae+0xb3d*0x1))),_0x21f0c7[_0x567b1a(0x321)](_0x4f832c['antiLightM'+_0x567b1a(0x70c)+_0x567b1a(0x5ca)])&&(this[_0x567b1a(0x673)+_0x567b1a(0x3ee)][_0x567b1a(0x71e)+_0x567b1a(0x5ae)]=_0xad2e4c['fIzIj'](String,RegExp['$1'])[_0x567b1a(0x589)](',')[_0x567b1a(0x2d5)](_0x2003f1=>(Number(_0x2003f1)||0x1a52*0x1+0xaf2+-0x2543)[_0x567b1a(0x68b)](0x7*-0x232+-0x1*-0x14c9+-0x9*0x9a,0x34c+-0x1*-0x1462+-0x17a7))),_0x2f4a23[_0x567b1a(0x321)](_0x4f832c[_0x567b1a(0x578)+_0x567b1a(0x6be)+_0x567b1a(0x751)])&&(this['_antiLight'+'Masks'][_0x567b1a(0x3da)+_0x567b1a(0x4f4)]=_0xad2e4c[_0x567b1a(0x288)](String,RegExp['$1'])[_0x567b1a(0x589)](',')[_0x567b1a(0x2d5)](_0x1691a4=>(Number(_0x1691a4)||-0x1a80*-0x1+-0xa*-0xbf+-0x1*0x21f5)['clamp'](0x100e+-0x1824+0x817*0x1,-0x13*-0xa9+-0x1*0x1882+0xcf6))),_0x21f0c7['match'](_0x4f832c[_0x567b1a(0x578)+_0x567b1a(0x515)+_0x567b1a(0x5ca)])&&(this[_0x567b1a(0x673)+_0x567b1a(0x3ee)][_0x567b1a(0x27a)+_0x567b1a(0x5ae)]=_0xad2e4c['RyRoV'](String,RegExp['$1'])['split'](',')['map'](_0x184535=>(Number(_0x184535)||0x1*-0x25c2+0x205f+0x2*0x2b2)['clamp'](-0x1385+0xbeb+-0x79b*-0x1,0x12b0+0x1492+-0x273b)));},Game_Map[_0x4b43fd(0x62d)]['hasAntiLig'+'htTiles']=function(){const _0x54e5f0=_0x4b43fd,_0xeefa1c={'QHxwN':function(_0x45bd4f,_0x30761c){return _0x45bd4f>_0x30761c;}};if(_0xeefa1c[_0x54e5f0(0x3c8)](this[_0x54e5f0(0x73a)+_0x54e5f0(0x352)+'Ds']()['length'],-0xbfa+0x2e9+-0xd3*-0xb))return!![];if(_0xeefa1c[_0x54e5f0(0x3c8)](this[_0x54e5f0(0x73a)+_0x54e5f0(0x337)+_0x54e5f0(0x207)]()['length'],0x82b+0x9e2+-0x120d*0x1))return!![];return![];},Game_Map[_0x4b43fd(0x62d)]['hardAntiLi'+'ghtRegionI'+'Ds']=function(){const _0x513fca=_0x4b43fd,_0x3dace2={'qJvxx':function(_0x4f7989,_0x5c5b39){return _0x4f7989===_0x5c5b39;}};if(_0x3dace2[_0x513fca(0x382)](this['_antiLight'+'Masks'],undefined))this[_0x513fca(0x4e4)+_0x513fca(0x74a)+_0x513fca(0x446)]();return this[_0x513fca(0x673)+_0x513fca(0x3ee)]?.[_0x513fca(0x3c5)+_0x513fca(0x4f4)]??[];},Game_Map[_0x4b43fd(0x62d)][_0x4b43fd(0x73a)+_0x4b43fd(0x337)+_0x4b43fd(0x207)]=function(){const _0x2741bb=_0x4b43fd,_0x53f2ec={'VnOEp':function(_0x1d93a0,_0x9c697e){return _0x1d93a0===_0x9c697e;}};if(_0x53f2ec['VnOEp'](this['_antiLight'+_0x2741bb(0x3ee)],undefined))this[_0x2741bb(0x4e4)+_0x2741bb(0x74a)+_0x2741bb(0x446)]();return this['_antiLight'+'Masks']?.['hardTerrai'+'nTagIDs']??[];},Game_Map['prototype'][_0x4b43fd(0x2b6)+'ghtRegionI'+'Ds']=function(){const _0x1ac99a=_0x4b43fd,_0x2874f4={'tqCNQ':function(_0x3762d6,_0x2036ad){return _0x3762d6===_0x2036ad;}};if(_0x2874f4[_0x1ac99a(0x359)](this['_antiLight'+'Masks'],undefined))this[_0x1ac99a(0x4e4)+_0x1ac99a(0x74a)+_0x1ac99a(0x446)]();return this['_antiLight'+'Masks']?.[_0x1ac99a(0x3da)+_0x1ac99a(0x4f4)]??[];},Game_Map[_0x4b43fd(0x62d)][_0x4b43fd(0x2b6)+_0x4b43fd(0x337)+_0x4b43fd(0x207)]=function(){const _0x36dc2a=_0x4b43fd,_0x553a56={'XnIBl':function(_0x25cc9b,_0x162a12){return _0x25cc9b===_0x162a12;}};if(_0x553a56[_0x36dc2a(0x26a)](this[_0x36dc2a(0x673)+_0x36dc2a(0x3ee)],undefined))this[_0x36dc2a(0x4e4)+'ingEffects'+'Notetags']();return this['_antiLight'+'Masks']?.[_0x36dc2a(0x27a)+'nTagIDs']??[];},Game_Map[_0x4b43fd(0x62d)][_0x4b43fd(0x4e4)+_0x4b43fd(0x74a)+_0x4b43fd(0x429)]=function(){const _0x1413ac=_0x4b43fd;this['_lightSpaw'+'ns']=[],$gameTemp['_lightSpaw'+_0x1413ac(0x60d)]=[];},Game_Map['prototype'][_0x4b43fd(0x68d)+'s']=function(){const _0x18cdd1=_0x4b43fd,_0x5ce16a={'cVHdJ':function(_0x3ef27b,_0x8b79d4){return _0x3ef27b===_0x8b79d4;}};if(_0x5ce16a['cVHdJ'](this[_0x18cdd1(0x32c)+'ns'],undefined))this['setupLight'+_0x18cdd1(0x74a)+_0x18cdd1(0x429)]();return this[_0x18cdd1(0x32c)+'ns'];},VisuMZ['LightingEf'+'fects'][_0x4b43fd(0x613)+_0x4b43fd(0x1fe)]=Game_Map[_0x4b43fd(0x62d)][_0x4b43fd(0x299)],Game_Map[_0x4b43fd(0x62d)]['update']=function(_0x19c9ad){const _0x8455c8=_0x4b43fd;VisuMZ[_0x8455c8(0x3ba)+_0x8455c8(0x4a5)][_0x8455c8(0x613)+_0x8455c8(0x1fe)][_0x8455c8(0x752)](this,_0x19c9ad),this['updateLigh'+_0x8455c8(0x5ef)+'sLightSpaw'+'ns']();},Game_Map[_0x4b43fd(0x62d)]['updateLigh'+_0x4b43fd(0x5ef)+_0x4b43fd(0x55c)+'ns']=function(){const _0x24d75f=_0x4b43fd,_0x2924d1={'LMBBT':function(_0x1be48f,_0x336066){return _0x1be48f<_0x336066;},'zSVra':function(_0x4e1005,_0x4c8930){return _0x4e1005<_0x4c8930;},'FOqIv':function(_0x3595a2,_0x5da2eb){return _0x3595a2<=_0x5da2eb;}},_0x220da4=this[_0x24d75f(0x68d)+'s']()[_0x24d75f(0x77e)];for(let _0x1d7bb9=0x9*-0x385+0xb*0x253+0x5c*0x11;_0x2924d1[_0x24d75f(0x410)](_0x1d7bb9,_0x220da4);_0x1d7bb9++){const _0x331a69=this['lightSpawn'+'s']()[_0x1d7bb9];if(!_0x331a69)continue;if(!_0x331a69[_0x24d75f(0x5f9)])continue;$gameTemp[_0x24d75f(0x211)+_0x24d75f(0x743)](_0x1d7bb9,_0x331a69),_0x331a69[_0x24d75f(0x6c2)]++;if(_0x2924d1[_0x24d75f(0x3c9)](_0x331a69[_0x24d75f(0x5e1)],Number[_0x24d75f(0x747)+'NTEGER']))_0x331a69['expire']--;if(_0x2924d1['FOqIv'](_0x331a69[_0x24d75f(0x5e1)],-0xcd3+-0x1*-0x4eb+0x1*0x7e8))_0x331a69[_0x24d75f(0x5f9)]=![];}},Game_Map['prototype'][_0x4b43fd(0x498)+_0x4b43fd(0x4dc)]=function(_0x286433){const _0x20f652=_0x4b43fd;$gameTemp[_0x20f652(0x582)+'tSpawnFunc'+_0x20f652(0x6c6)](_0x286433),this[_0x20f652(0x68d)+'s']()['push'](_0x286433);const _0x211b43=new Sprite_LightSpawn(_0x286433);SceneManager[_0x20f652(0x765)+'LightConta'+_0x20f652(0x605)](_0x211b43);},Game_Map[_0x4b43fd(0x62d)][_0x4b43fd(0x4e0)+_0x4b43fd(0x6f0)+'y']=function(){const _0x123ac7=_0x4b43fd;return this[_0x123ac7(0x3e6)+_0x123ac7(0x604)];},Game_CharacterBase['prototype'][_0x4b43fd(0x2f4)+_0x4b43fd(0x6fb)+_0x4b43fd(0x41a)]=function(){const _0x39e75e=_0x4b43fd;this[_0x39e75e(0x6d3)+'ht']={},this[_0x39e75e(0x6d3)+_0x39e75e(0x4e2)]={},this['_conicalLi'+_0x39e75e(0x612)]={},this[_0x39e75e(0x507)+_0x39e75e(0x3e1)+'r']={};const _0x54b9e6=VisuMZ[_0x39e75e(0x3ba)+_0x39e75e(0x4a5)][_0x39e75e(0x5b6)];this['_conicalLi'+_0x39e75e(0x6ba)+_0x39e75e(0x4fe)]=JsonEx[_0x39e75e(0x327)+'py'](_0x54b9e6[_0x39e75e(0x54f)]),this[_0x39e75e(0x507)+_0x39e75e(0x6ce)+'sets']=JsonEx[_0x39e75e(0x327)+'py'](_0x54b9e6[_0x39e75e(0x631)+'et']),this['_conicalLi'+_0x39e75e(0x585)+_0x39e75e(0x4fe)]=JsonEx[_0x39e75e(0x327)+'py'](_0x54b9e6[_0x39e75e(0x749)+'et']);},Game_CharacterBase[_0x4b43fd(0x62d)]['radialLigh'+'t']=function(){const _0x25a408=_0x4b43fd,_0x33cf1b={'NBjtH':function(_0x17e617,_0x23ec8e){return _0x17e617===_0x23ec8e;}};if(_0x33cf1b[_0x25a408(0x5e5)](this[_0x25a408(0x6d3)+'ht'],undefined))this['initLighti'+_0x25a408(0x6fb)+_0x25a408(0x41a)]();return this[_0x25a408(0x6d3)+'ht'];},Game_CharacterBase[_0x4b43fd(0x62d)]['setRadialL'+'ightSettin'+'gs']=function(_0x2e4733){const _0x5436c1=_0x4b43fd,_0x2cfb2f={'KssOe':function(_0x486c5f,_0x24043c){return _0x486c5f===_0x24043c;}};if(_0x2cfb2f[_0x5436c1(0x2fb)](this['_radialLig'+'ht'],undefined))this[_0x5436c1(0x2f4)+_0x5436c1(0x6fb)+'ettings']();this['_radialLig'+'ht']=JsonEx[_0x5436c1(0x327)+'py'](_0x2e4733);},Game_CharacterBase['prototype'][_0x4b43fd(0x2b3)+_0x4b43fd(0x2c4)]=function(){const _0x15f183=_0x4b43fd,_0xd3396b={'rOEZH':function(_0x4d95bc,_0x4c649d){return _0x4d95bc===_0x4c649d;}};if(_0xd3396b[_0x15f183(0x281)](this[_0x15f183(0x6d3)+'htBehavior'],undefined))this[_0x15f183(0x2f4)+_0x15f183(0x6fb)+_0x15f183(0x41a)]();return this[_0x15f183(0x6d3)+'htBehavior'];},Game_CharacterBase[_0x4b43fd(0x62d)][_0x4b43fd(0x363)+'ightBehavi'+'or']=function(_0x3e8aef){const _0x3a02c2=_0x4b43fd,_0x95ce72={'fmvQt':function(_0x971e29,_0x30cd96){return _0x971e29===_0x30cd96;}};if(_0x95ce72[_0x3a02c2(0x46a)](this[_0x3a02c2(0x6d3)+_0x3a02c2(0x4e2)],undefined))this['initLighti'+_0x3a02c2(0x6fb)+_0x3a02c2(0x41a)]();this['_radialLig'+_0x3a02c2(0x4e2)]=JsonEx['makeDeepCo'+'py'](_0x3e8aef),ColorManager[_0x3a02c2(0x622)+_0x3a02c2(0x57d)+'rn'](this[_0x3a02c2(0x6d3)+_0x3a02c2(0x4e2)]);},Game_CharacterBase[_0x4b43fd(0x62d)][_0x4b43fd(0x5d6)+'ht']=function(){const _0x40f7a4=_0x4b43fd,_0x390b41={'nQWlX':function(_0x516d97,_0x5a7316){return _0x516d97===_0x5a7316;}};if(_0x390b41[_0x40f7a4(0x728)](this[_0x40f7a4(0x507)+_0x40f7a4(0x612)],undefined))this[_0x40f7a4(0x2f4)+_0x40f7a4(0x6fb)+_0x40f7a4(0x41a)]();return this[_0x40f7a4(0x507)+_0x40f7a4(0x612)];},Game_CharacterBase[_0x4b43fd(0x62d)][_0x4b43fd(0x308)+_0x4b43fd(0x2cf)+_0x4b43fd(0x2ba)]=function(_0x1c034b){const _0x4a0e17=_0x4b43fd,_0x278b92={'qsIbv':function(_0x4b3b05,_0x2bfa83){return _0x4b3b05===_0x2bfa83;}};if(_0x278b92['qsIbv'](this[_0x4a0e17(0x507)+'ght'],undefined))this[_0x4a0e17(0x2f4)+'ngEffectsS'+_0x4a0e17(0x41a)]();this[_0x4a0e17(0x507)+_0x4a0e17(0x612)]=JsonEx['makeDeepCo'+'py'](_0x1c034b);},Game_CharacterBase[_0x4b43fd(0x62d)][_0x4b43fd(0x5d6)+_0x4b43fd(0x4e2)]=function(){const _0x23ae2f=_0x4b43fd,_0x59a357={'EUnTV':function(_0x5205f8,_0x232a0b){return _0x5205f8===_0x232a0b;}};if(_0x59a357[_0x23ae2f(0x75e)](this['_conicalLi'+'ghtBehavio'+'r'],undefined))this[_0x23ae2f(0x2f4)+_0x23ae2f(0x6fb)+_0x23ae2f(0x41a)]();return this[_0x23ae2f(0x507)+'ghtBehavio'+'r'];},Game_CharacterBase[_0x4b43fd(0x62d)][_0x4b43fd(0x308)+_0x4b43fd(0x5aa)+_0x4b43fd(0x6cc)]=function(_0x31156c){const _0x5ecbdc=_0x4b43fd,_0x1a86da={'Ykmbz':function(_0xde1791,_0x1f7d70){return _0xde1791===_0x1f7d70;}};if(_0x1a86da[_0x5ecbdc(0x74c)](this[_0x5ecbdc(0x507)+_0x5ecbdc(0x3e1)+'r'],undefined))this['initLighti'+'ngEffectsS'+_0x5ecbdc(0x41a)]();this[_0x5ecbdc(0x507)+_0x5ecbdc(0x3e1)+'r']=JsonEx[_0x5ecbdc(0x327)+'py'](_0x31156c),ColorManager[_0x5ecbdc(0x622)+_0x5ecbdc(0x57d)+'rn'](this[_0x5ecbdc(0x507)+_0x5ecbdc(0x3e1)+'r']);},Game_CharacterBase[_0x4b43fd(0x62d)][_0x4b43fd(0x5d6)+_0x4b43fd(0x3fc)]=function(){const _0x219892=_0x4b43fd;if(this[_0x219892(0x3f6)+'8dir']()){if(this['isDashingA'+'ndMoving']())return this[_0x219892(0x5d6)+'htDashOffs'+_0x219892(0x5a8)]();else{if(this['isJumping']())return this['conicalLig'+'htJumpOffs'+_0x219892(0x5a8)]();}}return this[_0x219892(0x5d6)+'htWalkOffs'+'ets']();},Game_CharacterBase['prototype'][_0x4b43fd(0x5d6)+'htWalkOffs'+_0x4b43fd(0x5a8)]=function(){const _0x5f25f0=_0x4b43fd,_0x1c2b79={'yaBIy':function(_0x13427c,_0x5ac4ef){return _0x13427c===_0x5ac4ef;}};if(_0x1c2b79[_0x5f25f0(0x68a)](this[_0x5f25f0(0x507)+_0x5f25f0(0x6ba)+_0x5f25f0(0x4fe)],undefined))this[_0x5f25f0(0x2f4)+'ngEffects']();return this[_0x5f25f0(0x507)+_0x5f25f0(0x6ba)+_0x5f25f0(0x4fe)];},Game_CharacterBase[_0x4b43fd(0x62d)][_0x4b43fd(0x308)+'LightWalkO'+'ffsets']=function(_0x12098a){const _0x489731=_0x4b43fd,_0x28195e={'cRBTf':function(_0x4f782,_0x42bb1d){return _0x4f782===_0x42bb1d;}};if(_0x28195e[_0x489731(0x47f)](this[_0x489731(0x507)+_0x489731(0x6ba)+_0x489731(0x4fe)],undefined))this[_0x489731(0x2f4)+'ngEffects']();this[_0x489731(0x507)+_0x489731(0x6ba)+'sets']=JsonEx[_0x489731(0x327)+'py'](_0x12098a);},Game_CharacterBase[_0x4b43fd(0x62d)][_0x4b43fd(0x5d6)+_0x4b43fd(0x1e6)+_0x4b43fd(0x5a8)]=function(){const _0x57c156=_0x4b43fd,_0x54f9f0={'AExLj':function(_0x2ba41a,_0x276fb8){return _0x2ba41a===_0x276fb8;}};if(_0x54f9f0[_0x57c156(0x28c)](this[_0x57c156(0x507)+_0x57c156(0x6ce)+_0x57c156(0x4fe)],undefined))this[_0x57c156(0x2f4)+_0x57c156(0x608)]();return this['_conicalLi'+'ghtDashOff'+_0x57c156(0x4fe)];},Game_CharacterBase[_0x4b43fd(0x62d)]['setConical'+_0x4b43fd(0x261)+'ffsets']=function(_0x5f2356){const _0x1c7769=_0x4b43fd,_0x36aa49={'jGHEm':function(_0xfa4c39,_0x3e38c0){return _0xfa4c39===_0x3e38c0;}};if(_0x36aa49[_0x1c7769(0x6cb)](this['_conicalLi'+_0x1c7769(0x6ce)+_0x1c7769(0x4fe)],undefined))this[_0x1c7769(0x2f4)+_0x1c7769(0x608)]();this[_0x1c7769(0x507)+_0x1c7769(0x6ce)+'sets']=JsonEx[_0x1c7769(0x327)+'py'](_0x5f2356);},Game_CharacterBase[_0x4b43fd(0x62d)][_0x4b43fd(0x5d6)+_0x4b43fd(0x20f)+_0x4b43fd(0x5a8)]=function(){const _0x3a0da8=_0x4b43fd,_0x5b3389={'mtuZy':function(_0x1a397f,_0x462fd5){return _0x1a397f===_0x462fd5;}};if(_0x5b3389[_0x3a0da8(0x719)](this[_0x3a0da8(0x507)+'ghtWalkOff'+'sets'],undefined))this[_0x3a0da8(0x2f4)+'ngEffects']();return this[_0x3a0da8(0x507)+_0x3a0da8(0x6ba)+'sets'];},Game_CharacterBase['prototype'][_0x4b43fd(0x308)+_0x4b43fd(0x670)+_0x4b43fd(0x3a8)]=function(_0x1951f0){const _0x2be691=_0x4b43fd,_0x2836df={'MNcyO':function(_0x394d2c,_0x47a35d){return _0x394d2c===_0x47a35d;}};if(_0x2836df[_0x2be691(0x46f)](this[_0x2be691(0x507)+_0x2be691(0x585)+_0x2be691(0x4fe)],undefined))this[_0x2be691(0x2f4)+_0x2be691(0x608)]();this[_0x2be691(0x507)+_0x2be691(0x585)+_0x2be691(0x4fe)]=JsonEx[_0x2be691(0x327)+'py'](_0x1951f0);},VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)][_0x4b43fd(0x3f5)+'r_initMemb'+_0x4b43fd(0x391)]=Game_Player[_0x4b43fd(0x62d)][_0x4b43fd(0x6b9)+'s'],Game_Player[_0x4b43fd(0x62d)][_0x4b43fd(0x6b9)+'s']=function(){const _0x89c787=_0x4b43fd;VisuMZ[_0x89c787(0x3ba)+_0x89c787(0x4a5)][_0x89c787(0x3f5)+'r_initMemb'+_0x89c787(0x391)][_0x89c787(0x752)](this),this[_0x89c787(0x2f4)+_0x89c787(0x608)]();},Game_Player[_0x4b43fd(0x62d)]['initLighti'+_0x4b43fd(0x608)]=function(){const _0x3e013a=_0x4b43fd,_0x5d4a94=VisuMZ['LightingEf'+_0x3e013a(0x4a5)]['Settings'][_0x3e013a(0x24d)];this[_0x3e013a(0x632)+_0x3e013a(0x1f8)+_0x3e013a(0x70e)](_0x5d4a94[_0x3e013a(0x6f7)+_0x3e013a(0x599)]),this[_0x3e013a(0x632)+_0x3e013a(0x1f8)+_0x3e013a(0x4e2)](_0x5d4a94[_0x3e013a(0x6f7)+_0x3e013a(0x6eb)+'or']),this[_0x3e013a(0x632)+_0x3e013a(0x296)+_0x3e013a(0x25d)+'s'](_0x5d4a94['FollowerCo'+_0x3e013a(0x46d)]),this[_0x3e013a(0x632)+'rConicalLi'+_0x3e013a(0x3e1)+'r'](_0x5d4a94[_0x3e013a(0x227)+_0x3e013a(0x2e2)+'ior']);},Game_Player['prototype'][_0x4b43fd(0x2f4)+_0x4b43fd(0x6fb)+_0x4b43fd(0x41a)]=function(){const _0x4ee004=_0x4b43fd;Game_Character[_0x4ee004(0x62d)]['initLighti'+_0x4ee004(0x6fb)+_0x4ee004(0x41a)]['call'](this);const _0x2f7268=VisuMZ['LightingEf'+'fects'][_0x4ee004(0x5b6)][_0x4ee004(0x24d)];this[_0x4ee004(0x363)+_0x4ee004(0x332)+'gs'](_0x2f7268[_0x4ee004(0x2fd)+'al']),this[_0x4ee004(0x363)+'ightBehavi'+'or'](_0x2f7268[_0x4ee004(0x2fd)+_0x4ee004(0x5ab)]),this[_0x4ee004(0x308)+_0x4ee004(0x2cf)+'ngs'](_0x2f7268[_0x4ee004(0x231)+_0x4ee004(0x63a)]),this[_0x4ee004(0x308)+_0x4ee004(0x5aa)+_0x4ee004(0x6cc)](_0x2f7268[_0x4ee004(0x231)+'calBehavio'+'r']);},Game_Player['prototype'][_0x4b43fd(0x6c8)+'rRadialLig'+'htSettings']=function(){const _0x76e3a3=_0x4b43fd,_0x224452={'wQHAd':function(_0x3de68e,_0x1ad30d){return _0x3de68e===_0x1ad30d;}};if(_0x224452['wQHAd'](this[_0x76e3a3(0x361)+_0x76e3a3(0x269)],undefined))this[_0x76e3a3(0x2f4)+'ngEffects']();return this['_followerR'+_0x76e3a3(0x269)];},Game_Player[_0x4b43fd(0x62d)]['setFollowe'+_0x4b43fd(0x1f8)+'htSettings']=function(_0x15731d){const _0x118da2=_0x4b43fd;this[_0x118da2(0x361)+'adialLight']=JsonEx[_0x118da2(0x327)+'py'](_0x15731d);},Game_Player[_0x4b43fd(0x62d)][_0x4b43fd(0x6c8)+_0x4b43fd(0x1f8)+_0x4b43fd(0x4e2)]=function(){const _0x58da9e=_0x4b43fd,_0x15b45c={'UrfHw':function(_0x1e660e,_0x58846b){return _0x1e660e===_0x58846b;}};if(_0x15b45c['UrfHw'](this[_0x58da9e(0x361)+_0x58da9e(0x269)+_0x58da9e(0x6b7)],undefined))this[_0x58da9e(0x2f4)+'ngEffectsS'+_0x58da9e(0x41a)]();return this[_0x58da9e(0x361)+_0x58da9e(0x269)+_0x58da9e(0x6b7)];},Game_Player['prototype']['setFollowe'+'rRadialLig'+_0x4b43fd(0x4e2)]=function(_0x39bd89){const _0xa721e7=_0x4b43fd,_0x2a7e6f={'lmkIt':function(_0x3db952,_0x45ae29){return _0x3db952===_0x45ae29;}};if(_0x2a7e6f[_0xa721e7(0x596)](this['_followerR'+_0xa721e7(0x269)+'Behavior'],undefined))this[_0xa721e7(0x2f4)+_0xa721e7(0x6fb)+_0xa721e7(0x41a)]();this[_0xa721e7(0x361)+'adialLight'+_0xa721e7(0x6b7)]=JsonEx[_0xa721e7(0x327)+'py'](_0x39bd89),ColorManager[_0xa721e7(0x622)+_0xa721e7(0x57d)+'rn'](this['_followerR'+_0xa721e7(0x269)+_0xa721e7(0x6b7)]);},Game_Player[_0x4b43fd(0x62d)][_0x4b43fd(0x6c8)+_0x4b43fd(0x296)+'ghtSetting'+'s']=function(){const _0x5ea7b2=_0x4b43fd,_0x5471e8={'ZfcWh':function(_0x382f83,_0x3fd56a){return _0x382f83===_0x3fd56a;}};if(_0x5471e8[_0x5ea7b2(0x393)](this['_followerC'+'onicalLigh'+'t'],undefined))this[_0x5ea7b2(0x2f4)+'ngEffects']();return this[_0x5ea7b2(0x306)+'onicalLigh'+'t'];},Game_Player[_0x4b43fd(0x62d)][_0x4b43fd(0x632)+_0x4b43fd(0x296)+_0x4b43fd(0x25d)+'s']=function(_0x3a13aa){const _0x5ce29e=_0x4b43fd;this[_0x5ce29e(0x306)+_0x5ce29e(0x1eb)+'t']=JsonEx[_0x5ce29e(0x327)+'py'](_0x3a13aa);},Game_Player[_0x4b43fd(0x62d)][_0x4b43fd(0x6c8)+_0x4b43fd(0x296)+'ghtBehavio'+'r']=function(){const _0x1e09ed=_0x4b43fd,_0x53e77b={'PtrkJ':function(_0x44d4ab,_0xeff554){return _0x44d4ab===_0xeff554;}};if(_0x53e77b['PtrkJ'](this['_followerC'+_0x1e09ed(0x1eb)+_0x1e09ed(0x2c4)],undefined))this[_0x1e09ed(0x2f4)+_0x1e09ed(0x6fb)+_0x1e09ed(0x41a)]();return this['_followerC'+_0x1e09ed(0x1eb)+'tBehavior'];},Game_Player[_0x4b43fd(0x62d)][_0x4b43fd(0x632)+_0x4b43fd(0x296)+'ghtBehavio'+'r']=function(_0x5a0bfe){const _0x4ae8d6=_0x4b43fd,_0x5481fb={'iCNKs':function(_0x3a0844,_0x16faef){return _0x3a0844===_0x16faef;}};if(_0x5481fb[_0x4ae8d6(0x3d2)](this[_0x4ae8d6(0x306)+_0x4ae8d6(0x1eb)+_0x4ae8d6(0x2c4)],undefined))this[_0x4ae8d6(0x2f4)+_0x4ae8d6(0x6fb)+_0x4ae8d6(0x41a)]();this[_0x4ae8d6(0x306)+_0x4ae8d6(0x1eb)+'tBehavior']=JsonEx[_0x4ae8d6(0x327)+'py'](_0x5a0bfe),ColorManager[_0x4ae8d6(0x622)+_0x4ae8d6(0x57d)+'rn'](this[_0x4ae8d6(0x306)+_0x4ae8d6(0x1eb)+_0x4ae8d6(0x2c4)]);},Game_Player[_0x4b43fd(0x62d)][_0x4b43fd(0x5d6)+_0x4b43fd(0x538)+_0x4b43fd(0x5a8)]=function(){const _0x5bad90=_0x4b43fd;return $gameParty[_0x5bad90(0x49e)]()?$gameParty[_0x5bad90(0x49e)]()[_0x5bad90(0x5d6)+'htWalkOffs'+_0x5bad90(0x5a8)]():Game_Character[_0x5bad90(0x62d)][_0x5bad90(0x5d6)+_0x5bad90(0x538)+'ets'][_0x5bad90(0x752)](this);},Game_Player[_0x4b43fd(0x62d)][_0x4b43fd(0x308)+'LightWalkO'+_0x4b43fd(0x3a8)]=function(_0x3797d8){const _0x4f0b9b=_0x4b43fd;$gameParty[_0x4f0b9b(0x49e)]()?$gameParty[_0x4f0b9b(0x49e)]()[_0x4f0b9b(0x308)+_0x4f0b9b(0x508)+_0x4f0b9b(0x3a8)](_0x3797d8):Game_Character[_0x4f0b9b(0x62d)][_0x4f0b9b(0x308)+'LightWalkO'+_0x4f0b9b(0x3a8)][_0x4f0b9b(0x752)](this,_0x3797d8);},Game_Player[_0x4b43fd(0x62d)]['conicalLig'+_0x4b43fd(0x1e6)+'ets']=function(){const _0x3f2162=_0x4b43fd;return $gameParty[_0x3f2162(0x49e)]()?$gameParty[_0x3f2162(0x49e)]()[_0x3f2162(0x5d6)+_0x3f2162(0x1e6)+'ets']():Game_Character['prototype']['conicalLig'+_0x3f2162(0x1e6)+_0x3f2162(0x5a8)][_0x3f2162(0x752)](this);},Game_Player[_0x4b43fd(0x62d)][_0x4b43fd(0x308)+_0x4b43fd(0x261)+_0x4b43fd(0x3a8)]=function(_0x264e54){const _0x501d4e=_0x4b43fd;$gameParty[_0x501d4e(0x49e)]()?$gameParty[_0x501d4e(0x49e)]()[_0x501d4e(0x308)+_0x501d4e(0x261)+_0x501d4e(0x3a8)](_0x264e54):Game_Character['prototype'][_0x501d4e(0x308)+'LightDashO'+_0x501d4e(0x3a8)][_0x501d4e(0x752)](this,_0x264e54);},Game_Player['prototype']['conicalLig'+_0x4b43fd(0x20f)+_0x4b43fd(0x5a8)]=function(){const _0x5e5c86=_0x4b43fd;return $gameParty[_0x5e5c86(0x49e)]()?$gameParty[_0x5e5c86(0x49e)]()[_0x5e5c86(0x5d6)+_0x5e5c86(0x20f)+_0x5e5c86(0x5a8)]():Game_Character[_0x5e5c86(0x62d)]['conicalLig'+'htJumpOffs'+_0x5e5c86(0x5a8)][_0x5e5c86(0x752)](this);},Game_Player['prototype'][_0x4b43fd(0x308)+_0x4b43fd(0x670)+_0x4b43fd(0x3a8)]=function(_0x1eb5df){const _0x5a28b5=_0x4b43fd;$gameParty[_0x5a28b5(0x49e)]()?$gameParty[_0x5a28b5(0x49e)]()[_0x5a28b5(0x308)+'LightJumpO'+'ffsets'](_0x1eb5df):Game_Character[_0x5a28b5(0x62d)]['setConical'+'LightJumpO'+_0x5a28b5(0x3a8)][_0x5a28b5(0x752)](this,_0x1eb5df);},Game_Follower[_0x4b43fd(0x62d)][_0x4b43fd(0x2b3)+'t']=function(){const _0x2af8bd=_0x4b43fd;return $gamePlayer['getFollowe'+_0x2af8bd(0x1f8)+'htSettings']();},Game_Follower['prototype']['radialLigh'+'tBehavior']=function(){const _0x4c55b0=_0x4b43fd;return $gamePlayer[_0x4c55b0(0x6c8)+'rRadialLig'+_0x4c55b0(0x4e2)]();},Game_Follower['prototype'][_0x4b43fd(0x5d6)+'ht']=function(){const _0x399cdf=_0x4b43fd;return $gamePlayer[_0x399cdf(0x6c8)+_0x399cdf(0x296)+_0x399cdf(0x25d)+'s']();},Game_Follower[_0x4b43fd(0x62d)][_0x4b43fd(0x5d6)+_0x4b43fd(0x4e2)]=function(){const _0x4cf320=_0x4b43fd;return $gamePlayer[_0x4cf320(0x6c8)+_0x4cf320(0x296)+_0x4cf320(0x3e1)+'r']();},Game_Follower[_0x4b43fd(0x62d)][_0x4b43fd(0x5d6)+_0x4b43fd(0x538)+_0x4b43fd(0x5a8)]=function(){const _0x144f2f=_0x4b43fd;return this[_0x144f2f(0x68f)]()?this['actor']()[_0x144f2f(0x5d6)+'htWalkOffs'+'ets']():Game_Character[_0x144f2f(0x62d)][_0x144f2f(0x5d6)+_0x144f2f(0x538)+'ets'][_0x144f2f(0x752)](this);},Game_Follower[_0x4b43fd(0x62d)]['setConical'+_0x4b43fd(0x508)+'ffsets']=function(_0x5b5ef9){const _0x24dc3e=_0x4b43fd;this[_0x24dc3e(0x68f)]()?this[_0x24dc3e(0x68f)]()[_0x24dc3e(0x308)+_0x24dc3e(0x508)+'ffsets'](_0x5b5ef9):Game_Character['prototype'][_0x24dc3e(0x308)+_0x24dc3e(0x508)+_0x24dc3e(0x3a8)][_0x24dc3e(0x752)](this,_0x5b5ef9);},Game_Follower[_0x4b43fd(0x62d)][_0x4b43fd(0x5d6)+_0x4b43fd(0x1e6)+_0x4b43fd(0x5a8)]=function(){const _0xf00f90=_0x4b43fd;return this[_0xf00f90(0x68f)]()?this['actor']()['conicalLig'+_0xf00f90(0x1e6)+_0xf00f90(0x5a8)]():Game_Character['prototype'][_0xf00f90(0x5d6)+_0xf00f90(0x1e6)+'ets']['call'](this);},Game_Follower[_0x4b43fd(0x62d)][_0x4b43fd(0x308)+'LightDashO'+_0x4b43fd(0x3a8)]=function(_0x1b269b){const _0x34d69f=_0x4b43fd;this[_0x34d69f(0x68f)]()?this[_0x34d69f(0x68f)]()[_0x34d69f(0x308)+_0x34d69f(0x261)+_0x34d69f(0x3a8)](_0x1b269b):Game_Character['prototype']['setConical'+_0x34d69f(0x261)+'ffsets'][_0x34d69f(0x752)](this,_0x1b269b);},Game_Follower[_0x4b43fd(0x62d)][_0x4b43fd(0x5d6)+_0x4b43fd(0x20f)+_0x4b43fd(0x5a8)]=function(){const _0x5cbc6e=_0x4b43fd;return this['actor']()?this[_0x5cbc6e(0x68f)]()[_0x5cbc6e(0x5d6)+_0x5cbc6e(0x20f)+'ets']():Game_Character[_0x5cbc6e(0x62d)][_0x5cbc6e(0x5d6)+_0x5cbc6e(0x20f)+_0x5cbc6e(0x5a8)][_0x5cbc6e(0x752)](this);},Game_Follower[_0x4b43fd(0x62d)][_0x4b43fd(0x308)+_0x4b43fd(0x670)+_0x4b43fd(0x3a8)]=function(_0x1ca0af){const _0x224291=_0x4b43fd;this[_0x224291(0x68f)]()?this[_0x224291(0x68f)]()['setConical'+'LightJumpO'+_0x224291(0x3a8)](_0x1ca0af):Game_Character['prototype'][_0x224291(0x308)+'LightJumpO'+_0x224291(0x3a8)][_0x224291(0x752)](this,_0x1ca0af);},Game_Vehicle[_0x4b43fd(0x62d)]['initLighti'+_0x4b43fd(0x6fb)+_0x4b43fd(0x41a)]=function(){const _0x48f15e=_0x4b43fd;Game_Character[_0x48f15e(0x62d)]['initLighti'+_0x48f15e(0x6fb)+_0x48f15e(0x41a)]['call'](this),this[_0x48f15e(0x5b9)+_0x48f15e(0x503)+_0x48f15e(0x618)+'ings']();},Game_Vehicle[_0x4b43fd(0x62d)]['initVehicl'+_0x4b43fd(0x503)+_0x4b43fd(0x618)+'ings']=function(){const _0x239ec9=_0x4b43fd;let _0x45f35c=this[_0x239ec9(0x63f)+_0x239ec9(0x226)+'gEffectsVe'+_0x239ec9(0x33c)]();_0x45f35c=this['applyDefau'+'ltLighting'+'EffectsVeh'+_0x239ec9(0x662)](_0x45f35c),this[_0x239ec9(0x412)+_0x239ec9(0x648)+'ings']=_0x45f35c;},Game_Vehicle['prototype'][_0x4b43fd(0x63f)+'ultLightin'+_0x4b43fd(0x2d7)+'hicleData']=function(){return{'Boarded':{'Radial':{'Settings':{},'Behavior':{}},'Conical':{'Settings':{},'Behavior':{},'Offset':{}}},'Unboarded':{'Radial':{'Settings':{},'Behavior':{}},'Conical':{'Settings':{},'Behavior':{},'Offset':{}}}};},Game_Vehicle[_0x4b43fd(0x62d)][_0x4b43fd(0x5e6)+'ltLighting'+'EffectsVeh'+_0x4b43fd(0x662)]=function(_0x38cf64){const _0x1f29c3=_0x4b43fd,_0x18c85d={'kirWC':_0x1f29c3(0x51c),'MsPgo':_0x1f29c3(0x370),'nDaeH':'Airship','KQFci':_0x1f29c3(0x43e),'NUysg':'Unboarded','OUeHb':_0x1f29c3(0x433),'jjUdU':_0x1f29c3(0x404),'lQsgO':_0x1f29c3(0x5b6),'RLVhT':_0x1f29c3(0x6b7),'kPMuS':'Offset','riPEu':function(_0x49b7d5,_0x4531fc){return _0x49b7d5<_0x4531fc;},'GnOBg':_0x1f29c3(0x450)},_0x1739c6=VisuMZ[_0x1f29c3(0x3ba)+_0x1f29c3(0x4a5)]['Settings'][_0x1f29c3(0x24d)];let _0xbea00f='';if(this[_0x1f29c3(0x64f)]())_0xbea00f=_0x18c85d[_0x1f29c3(0x715)];if(this[_0x1f29c3(0x23e)]())_0xbea00f=_0x18c85d[_0x1f29c3(0x268)];if(this[_0x1f29c3(0x775)]())_0xbea00f=_0x18c85d[_0x1f29c3(0x727)];const _0x2cd800=[_0x18c85d[_0x1f29c3(0x4f9)],_0x18c85d[_0x1f29c3(0x476)]],_0x1e0ae2=[_0x18c85d[_0x1f29c3(0x614)],_0x18c85d[_0x1f29c3(0x379)]],_0x3ee664=[_0x18c85d[_0x1f29c3(0x5e9)],_0x18c85d['RLVhT'],_0x18c85d[_0x1f29c3(0x5d5)]];for(let _0x5c87a6=0x10e0+0x7*-0x515+-0x12b3*-0x1;_0x18c85d[_0x1f29c3(0x291)](_0x5c87a6,_0x2cd800[_0x1f29c3(0x77e)]);_0x5c87a6++){let _0x36e235=_0x2cd800[_0x5c87a6];for(let _0xff961a=-0x1419+-0x4a*0x4+0x1541*0x1;_0x18c85d[_0x1f29c3(0x291)](_0xff961a,_0x1e0ae2[_0x1f29c3(0x77e)]);_0xff961a++){let _0x33f120=_0x1e0ae2[_0xff961a];for(let _0x5d0ee8=0x1*-0xd19+0x275*0x6+-0x1a5;_0x18c85d[_0x1f29c3(0x291)](_0x5d0ee8,_0x3ee664[_0x1f29c3(0x77e)]);_0x5d0ee8++){let _0x4b5cd5=_0x3ee664[_0x5d0ee8];const _0x406297=_0x18c85d[_0x1f29c3(0x395)]['format'](_0xbea00f,_0x36e235,_0x33f120,_0x4b5cd5);_0x1739c6[_0x406297]&&(_0x38cf64[_0x36e235][_0x33f120][_0x4b5cd5]=JsonEx[_0x1f29c3(0x327)+'py'](_0x1739c6[_0x406297]));}}}return _0x38cf64;},Game_Vehicle[_0x4b43fd(0x62d)]['getVehicle'+'LightingDa'+'ta']=function(_0x2fcb7f,_0x2486c2,_0x4cfc9e){const _0x7a84f=_0x4b43fd,_0x219e3a={'ShQrr':function(_0x482406,_0x140798){return _0x482406===_0x140798;},'Ulglv':'Boarded','XATUi':'Unboarded','JIZbj':_0x7a84f(0x433),'MyNtn':_0x7a84f(0x404),'nJBIL':_0x7a84f(0x6b7),'CTrgG':_0x7a84f(0x5b6)};_0x219e3a['ShQrr'](this[_0x7a84f(0x412)+'ghtingSett'+_0x7a84f(0x4f3)],undefined)&&this[_0x7a84f(0x5b9)+_0x7a84f(0x503)+_0x7a84f(0x618)+'ings']();const _0xc18632=_0x2fcb7f?_0x219e3a[_0x7a84f(0x61f)]:_0x219e3a['XATUi'],_0x27725d=_0x2486c2?_0x219e3a['JIZbj']:_0x219e3a[_0x7a84f(0x6cf)],_0x4247f5=_0x4cfc9e?_0x219e3a[_0x7a84f(0x2cb)]:_0x219e3a[_0x7a84f(0x3d9)];return this['_vehicleLi'+_0x7a84f(0x648)+_0x7a84f(0x4f3)][_0xc18632][_0x27725d][_0x4247f5];},Game_Vehicle[_0x4b43fd(0x62d)]['setVehicle'+'LightingDa'+'ta']=function(_0x186b9d,_0x3bb197,_0x118242,_0x5b7c46){const _0x469ca0=_0x4b43fd,_0x5cd786={'cPAHK':function(_0x22d0fe,_0x530801){return _0x22d0fe===_0x530801;},'cPhxo':_0x469ca0(0x43e),'Pfvck':_0x469ca0(0x72a),'hROkX':_0x469ca0(0x433),'ZxDtz':_0x469ca0(0x404),'IVuun':_0x469ca0(0x6b7),'ceNJN':_0x469ca0(0x5b6)};_0x5cd786['cPAHK'](this['_vehicleLi'+'ghtingSett'+_0x469ca0(0x4f3)],undefined)&&this[_0x469ca0(0x5b9)+_0x469ca0(0x503)+_0x469ca0(0x618)+_0x469ca0(0x4f3)]();const _0x28b0fc=_0x3bb197?_0x5cd786[_0x469ca0(0x53a)]:_0x5cd786[_0x469ca0(0x58f)],_0x2813a1=_0x118242?_0x5cd786[_0x469ca0(0x411)]:_0x5cd786[_0x469ca0(0x44c)],_0x320938=_0x5b7c46?_0x5cd786['IVuun']:_0x5cd786[_0x469ca0(0x260)];this['_vehicleLi'+_0x469ca0(0x648)+_0x469ca0(0x4f3)][_0x28b0fc][_0x2813a1][_0x320938]=JsonEx[_0x469ca0(0x327)+'py'](_0x186b9d);},Game_Vehicle[_0x4b43fd(0x62d)]['setVehicle'+_0x4b43fd(0x66c)+_0x4b43fd(0x5ed)+'t']=function(_0x514c9c,_0x1f214a){const _0x409dc3=_0x4b43fd,_0x11f3dd={'auvxK':function(_0x35c4ab,_0x3a33dd){return _0x35c4ab===_0x3a33dd;},'wsHWS':'Boarded','DCGBv':_0x409dc3(0x72a),'wsWIp':_0x409dc3(0x404),'LGWYc':_0x409dc3(0x767)};_0x11f3dd[_0x409dc3(0x21d)](this['_vehicleLi'+'ghtingSett'+_0x409dc3(0x4f3)],undefined)&&this['initVehicl'+_0x409dc3(0x503)+'ffectsSett'+'ings']();const _0x14fb3d=_0x1f214a?_0x11f3dd[_0x409dc3(0x24b)]:_0x11f3dd[_0x409dc3(0x430)],_0x55df19=_0x11f3dd[_0x409dc3(0x222)],_0x49f8ad=_0x11f3dd[_0x409dc3(0x593)];this['_vehicleLi'+'ghtingSett'+_0x409dc3(0x4f3)][_0x14fb3d][_0x55df19][_0x49f8ad]=JsonEx['makeDeepCo'+'py'](_0x514c9c);},Game_Vehicle[_0x4b43fd(0x62d)][_0x4b43fd(0x2b3)+'t']=function(){const _0x478f55=_0x4b43fd;return this[_0x478f55(0x554)+'LightingDa'+'ta'](this['_driving'],!![],![]);},Game_Vehicle[_0x4b43fd(0x62d)]['radialLigh'+_0x4b43fd(0x2c4)]=function(){const _0x661345=_0x4b43fd;return this[_0x661345(0x554)+'LightingDa'+'ta'](this['_driving'],!![],!![]);},Game_Vehicle['prototype'][_0x4b43fd(0x5d6)+'ht']=function(){const _0x101c4f=_0x4b43fd,_0x180fec={'dfViH':_0x101c4f(0x43e),'vIwTF':_0x101c4f(0x72a),'mmmUp':_0x101c4f(0x433),'KUqEq':'Conical','XMnhB':_0x101c4f(0x6b7),'MyiYv':_0x101c4f(0x5b6)},_0x52406a=this['_driving']?_0x180fec['dfViH']:_0x180fec[_0x101c4f(0x56e)],_0x2b2623=![]?_0x180fec[_0x101c4f(0x33a)]:_0x180fec[_0x101c4f(0x44e)],_0x1e9193=![]?_0x180fec[_0x101c4f(0x28a)]:_0x180fec['MyiYv'];return this[_0x101c4f(0x554)+_0x101c4f(0x772)+'ta'](this['_driving'],![],![]);},Game_Vehicle['prototype'][_0x4b43fd(0x5d6)+_0x4b43fd(0x4e2)]=function(){const _0xe62e3d=_0x4b43fd;return this[_0xe62e3d(0x554)+'LightingDa'+'ta'](this['_driving'],![],!![]);},Game_Vehicle[_0x4b43fd(0x62d)]['conicalLig'+_0x4b43fd(0x3fc)]=function(){const _0x7220=_0x4b43fd,_0x532808={'ySpdU':function(_0x259eef,_0x3033f6){return _0x259eef===_0x3033f6;}};return _0x532808[_0x7220(0x3e0)](this['_vehicleLi'+_0x7220(0x648)+_0x7220(0x4f3)],undefined)&&this['initVehicl'+_0x7220(0x503)+_0x7220(0x618)+_0x7220(0x4f3)](),this[_0x7220(0x440)]?this[_0x7220(0x412)+'ghtingSett'+_0x7220(0x4f3)][_0x7220(0x43e)][_0x7220(0x404)]['Offset']:this[_0x7220(0x412)+_0x7220(0x648)+_0x7220(0x4f3)]['Unboarded'][_0x7220(0x404)][_0x7220(0x767)];},VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)][_0x4b43fd(0x494)+_0x4b43fd(0x734)+_0x4b43fd(0x5b6)]=Game_Event[_0x4b43fd(0x62d)][_0x4b43fd(0x2ed)+'ettings'],Game_Event[_0x4b43fd(0x62d)][_0x4b43fd(0x2ed)+'ettings']=function(){const _0x84667=_0x4b43fd;VisuMZ[_0x84667(0x3ba)+_0x84667(0x4a5)][_0x84667(0x494)+_0x84667(0x734)+_0x84667(0x5b6)][_0x84667(0x752)](this),this[_0x84667(0x2f4)+_0x84667(0x6fb)+_0x84667(0x41a)]();},VisuMZ['LightingEf'+_0x4b43fd(0x4a5)][_0x4b43fd(0x494)+_0x4b43fd(0x540)+'Settings']=Game_Event[_0x4b43fd(0x62d)][_0x4b43fd(0x460)+_0x4b43fd(0x41a)],Game_Event['prototype'][_0x4b43fd(0x460)+_0x4b43fd(0x41a)]=function(){const _0x2e99f1=_0x4b43fd;VisuMZ['LightingEf'+_0x2e99f1(0x4a5)][_0x2e99f1(0x494)+_0x2e99f1(0x540)+_0x2e99f1(0x5b6)][_0x2e99f1(0x752)](this),this[_0x2e99f1(0x4e4)+_0x2e99f1(0x74a)+_0x2e99f1(0x5b6)]();},Game_Event['prototype'][_0x4b43fd(0x4e4)+_0x4b43fd(0x74a)+'Settings']=function(){const _0x32cefb=_0x4b43fd;if(!this[_0x32cefb(0x237)]())return;this[_0x32cefb(0x2f4)+'ngEffectsS'+'ettings'](),this[_0x32cefb(0x4e4)+_0x32cefb(0x74a)+_0x32cefb(0x446)](),this[_0x32cefb(0x4e4)+_0x32cefb(0x74a)+_0x32cefb(0x51b)+'s']();},Game_Event[_0x4b43fd(0x62d)][_0x4b43fd(0x4e4)+_0x4b43fd(0x74a)+_0x4b43fd(0x446)]=function(){const _0x5904f=_0x4b43fd,_0x25f29b={'xdjXX':function(_0x459bb2,_0x2a4ee2){return _0x459bb2===_0x2a4ee2;}},_0x2fe1b4=this[_0x5904f(0x237)]()[_0x5904f(0x620)];if(_0x25f29b[_0x5904f(0x60f)](_0x2fe1b4,''))return;this[_0x5904f(0x2f9)+_0x5904f(0x74a)+'StringTags'](_0x2fe1b4);},Game_Event[_0x4b43fd(0x62d)][_0x4b43fd(0x4e4)+_0x4b43fd(0x74a)+_0x4b43fd(0x51b)+'s']=function(){const _0x422d39=_0x4b43fd,_0x57d6a9={'WmWVC':function(_0x2c954f,_0x1f4063){return _0x2c954f!==_0x1f4063;}};if(!this[_0x422d39(0x2b5)]())return;const _0x2606a9=this[_0x422d39(0x52a)]();let _0x5731aa='';for(const _0x1d909c of _0x2606a9){if([0x9b2+0x1*0x399+0x5*-0x293,0x745*-0x1+0x139d*-0x1+0x1c7a][_0x422d39(0x5ad)](_0x1d909c[_0x422d39(0x2b1)])){if(_0x57d6a9[_0x422d39(0x3e9)](_0x5731aa,''))_0x5731aa+='\x0a';_0x5731aa+=_0x1d909c[_0x422d39(0x2ff)][-0x22ab+0xbb+0x21f0];}}this[_0x422d39(0x2f9)+'ingEffects'+_0x422d39(0x297)](_0x5731aa);},Game_Event[_0x4b43fd(0x62d)][_0x4b43fd(0x2f4)+'ngEffectsS'+_0x4b43fd(0x41a)]=function(){const _0x3de244=_0x4b43fd;Game_Character[_0x3de244(0x62d)][_0x3de244(0x2f4)+_0x3de244(0x6fb)+_0x3de244(0x41a)][_0x3de244(0x752)](this);const _0x4b6158=VisuMZ['LightingEf'+'fects'][_0x3de244(0x5b6)][_0x3de244(0x24d)];this['setRadialL'+_0x3de244(0x332)+'gs'](_0x4b6158[_0x3de244(0x6e2)+'l']),this[_0x3de244(0x363)+_0x3de244(0x40b)+'or'](_0x4b6158[_0x3de244(0x6e2)+'lBehavior']),this[_0x3de244(0x308)+_0x3de244(0x2cf)+'ngs'](_0x4b6158['EventConic'+'al']),this[_0x3de244(0x308)+_0x3de244(0x5aa)+_0x3de244(0x6cc)](_0x4b6158[_0x3de244(0x343)+_0x3de244(0x5ab)]);},Game_Event[_0x4b43fd(0x62d)][_0x4b43fd(0x2f9)+_0x4b43fd(0x74a)+_0x4b43fd(0x297)]=function(_0x984efb){const _0x141a1d=_0x4b43fd,_0x2a33b9={'HOjYJ':_0x141a1d(0x3ad)},_0x17e940=_0x2a33b9[_0x141a1d(0x5e4)][_0x141a1d(0x589)]('|');let _0x1549f7=-0x25f*0x1+-0x1cce*0x1+0x15b*0x17;while(!![]){switch(_0x17e940[_0x1549f7++]){case'0':this[_0x141a1d(0x392)+_0x141a1d(0x49c)+_0x141a1d(0x551)+_0x141a1d(0x2d0)](_0x984efb);continue;case'1':this[_0x141a1d(0x392)+_0x141a1d(0x63e)+_0x141a1d(0x506)+'gs'](_0x984efb);continue;case'2':this[_0x141a1d(0x2c9)+_0x141a1d(0x447)+_0x141a1d(0x55f)+_0x141a1d(0x207)](_0x984efb);continue;case'3':this[_0x141a1d(0x2c9)+_0x141a1d(0x35f)+_0x141a1d(0x2ef)+'s'](_0x984efb);continue;case'4':this[_0x141a1d(0x392)+_0x141a1d(0x287)+_0x141a1d(0x3b3)+_0x141a1d(0x535)](_0x984efb);continue;}break;}},Game_Event[_0x4b43fd(0x62d)]['checkRadia'+_0x4b43fd(0x35f)+'cStringTag'+'s']=function(_0x1b7129){const _0x514380=_0x4b43fd,_0xe3e787={'GuPKT':function(_0x447b2f,_0x327f14){return _0x447b2f(_0x327f14);},'qZwAz':function(_0x48cf82,_0x539767){return _0x48cf82(_0x539767);},'CHxPa':function(_0x2e4816,_0x36b0e8){return _0x2e4816/_0x36b0e8;},'xIoiJ':function(_0x387b1d,_0x55dc92){return _0x387b1d*_0x55dc92;},'spNhQ':function(_0x58c6f6,_0x9ee77a){return _0x58c6f6*_0x9ee77a;}},_0x15ab32=VisuMZ[_0x514380(0x3ba)+_0x514380(0x4a5)][_0x514380(0x72d)];if(_0x1b7129[_0x514380(0x321)](_0x15ab32[_0x514380(0x3f3)+_0x514380(0x59d)]))this[_0x514380(0x2b3)+'t']()[_0x514380(0x528)]=!![];else{if(_0x1b7129[_0x514380(0x321)](_0x15ab32['RadialLigh'+'tCatchAll']))this[_0x514380(0x2b3)+'t']()[_0x514380(0x528)]=!![];else _0x1b7129['match'](_0x15ab32[_0x514380(0x3f3)+'tTurnOff'])&&(this[_0x514380(0x2b3)+'t']()['enabled']=![]);}_0x1b7129[_0x514380(0x321)](_0x15ab32[_0x514380(0x3f3)+'tFilename'])&&(this[_0x514380(0x2b3)+'t']()[_0x514380(0x4d4)]=_0xe3e787[_0x514380(0x21c)](String,RegExp['$1'])[_0x514380(0x5f8)]());_0x1b7129[_0x514380(0x321)](_0x15ab32['RadialLigh'+_0x514380(0x678)])&&(this['radialLigh'+'t']()[_0x514380(0x2aa)]=ColorManager[_0x514380(0x758)+_0x514380(0x3bc)](RegExp['$1']));if(_0x1b7129[_0x514380(0x321)](_0x15ab32['RadialLigh'+'tRadius']))this['radialLigh'+'t']()[_0x514380(0x51f)]=_0xe3e787['qZwAz'](Number,RegExp['$1']),this[_0x514380(0x2b3)+'t']()['autoRadius']=![];else _0x1b7129[_0x514380(0x321)](_0x15ab32[_0x514380(0x3f3)+_0x514380(0x5a4)])&&(this[_0x514380(0x2b3)+'t']()[_0x514380(0x51f)]=Math[_0x514380(0x29a)](_0xe3e787['CHxPa'](_0xe3e787[_0x514380(0x6a8)](Number,RegExp['$1']),-0x2*-0xa3d+0x161+-0x149*0x11)),this[_0x514380(0x2b3)+'t']()['autoRadius']=![]);_0x1b7129[_0x514380(0x321)](_0x15ab32[_0x514380(0x3f3)+_0x514380(0x517)])&&(this[_0x514380(0x2b3)+'t']()[_0x514380(0x74f)]=_0xe3e787[_0x514380(0x782)](_0xe3e787['qZwAz'](Number,RegExp['$1']),-0x24cb+0x1b3d+0x98e+0.01)[_0x514380(0x68b)](-0x1354*0x1+0xa38+0x4*0x247,0x192b*-0x1+-0x557*0x3+-0x2bf*-0xf));_0x1b7129[_0x514380(0x321)](_0x15ab32[_0x514380(0x3f3)+_0x514380(0x688)])&&(this['radialLigh'+'t']()[_0x514380(0x46e)]=ColorManager['blendModeP'+'arser'](RegExp['$1']));if(_0x1b7129[_0x514380(0x321)](_0x15ab32['RadialLigh'+_0x514380(0x2ca)+'at']))this[_0x514380(0x2b3)+'t']()['opacity']=_0xe3e787['GuPKT'](Number,RegExp['$1'])[_0x514380(0x68b)](0x805+0x1*-0x1839+0x1034,0xa45*0x1+0x10ee+-0x1a34);else{if(_0x1b7129[_0x514380(0x321)](_0x15ab32['RadialLigh'+'tOpacityRa'+'te'])){const _0x35f578=_0xe3e787[_0x514380(0x3c3)](_0xe3e787[_0x514380(0x21c)](Number,RegExp['$1']),-0x5a1+0x1d61+-0x17c0+0.01);this[_0x514380(0x2b3)+'t']()[_0x514380(0x415)]=Math['round'](_0xe3e787[_0x514380(0x782)](_0x35f578,0x1f*-0x37+-0x5b0+-0x1*-0xd58))[_0x514380(0x68b)](0x1*-0x78d+0x1*0x24d7+0xea5*-0x2,0xc33+0xd3a+-0x186e);}}_0x1b7129[_0x514380(0x321)](_0x15ab32[_0x514380(0x3f3)+_0x514380(0x62e)])&&(this['radialLigh'+'t']()[_0x514380(0x4df)]=_0xe3e787[_0x514380(0x21c)](Number,RegExp['$1'])[_0x514380(0x68b)](0x1*-0x130d+0x15ca+-0x2bd,-0x5b*0x35+0x790+0xcaf*0x1));_0x1b7129['match'](_0x15ab32[_0x514380(0x3f3)+'tRotateSpe'+'ed'])&&(this['radialLigh'+'t']()[_0x514380(0x423)+'d']=_0xe3e787[_0x514380(0x6a8)](Number,RegExp['$1']));if(_0x1b7129[_0x514380(0x321)](_0x15ab32[_0x514380(0x3f3)+_0x514380(0x27d)])){const _0x3798f2=_0xe3e787['GuPKT'](String,RegExp['$1'])[_0x514380(0x589)](',')[_0x514380(0x2d5)](_0x9673fc=>Number(_0x9673fc)||0x1*-0x251e+-0x65*0x41+-0x3ec3*-0x1);this[_0x514380(0x2b3)+'t']()[_0x514380(0x5fe)]=_0x3798f2[-0xe4f+-0x7*0x269+0x133*0x1a]||-0x67f+0x2d*0x51+0x7be*-0x1,this[_0x514380(0x2b3)+'t']()['offsetY']=_0x3798f2[0x11f1+-0x13*-0x71+-0x1*0x1a53]||0x50f+0x1*-0x1dd7+0x18c8;}},Game_Event['prototype'][_0x4b43fd(0x2c9)+'lLightBeha'+_0x4b43fd(0x55f)+'Tags']=function(_0x2cda15){const _0x50928b=_0x4b43fd,_0x52006c={'JwmNO':function(_0x538e47,_0x14f315){return _0x538e47*_0x14f315;},'wvcDm':function(_0x31d728,_0x30831c){return _0x31d728(_0x30831c);},'ahtWT':function(_0x571590,_0x47f1c8){return _0x571590*_0x47f1c8;},'Xqgrj':function(_0x1a465e,_0x14ef89){return _0x1a465e(_0x14ef89);},'BoVTb':function(_0x36b6a0,_0x2b4d07){return _0x36b6a0*_0x2b4d07;},'nyZUj':function(_0x1cd31a,_0x4713ba){return _0x1cd31a(_0x4713ba);},'QgLTI':function(_0x28f554,_0x250f0b){return _0x28f554*_0x250f0b;},'NgZWa':function(_0x211a75,_0xbe06d0){return _0x211a75(_0xbe06d0);},'hMvdO':function(_0x2b52b2,_0x519913){return _0x2b52b2*_0x519913;},'khWHS':function(_0x44ee10,_0x190cef){return _0x44ee10*_0x190cef;},'CoTws':function(_0x2a02b5,_0x3f4e2c){return _0x2a02b5(_0x3f4e2c);},'MrOgz':function(_0x3be89c,_0x3d8c87){return _0x3be89c(_0x3d8c87);}},_0x4bd441=VisuMZ[_0x50928b(0x3ba)+_0x50928b(0x4a5)]['RegExp'];_0x2cda15[_0x50928b(0x321)](_0x4bd441[_0x50928b(0x717)+_0x50928b(0x2f7)+_0x50928b(0x3ec)])&&(this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()[_0x50928b(0x2b9)]=_0x52006c['JwmNO'](_0x52006c[_0x50928b(0x67e)](Number,RegExp['$1']),-0x1e*-0x13+0x5*0x7cd+0x83f*-0x5+0.01));_0x2cda15[_0x50928b(0x321)](_0x4bd441[_0x50928b(0x717)+_0x50928b(0x690)+'od'])&&(this['radialLigh'+_0x50928b(0x2c4)]()[_0x50928b(0x52e)+'ier']=_0x52006c[_0x50928b(0x4a6)](_0x52006c[_0x50928b(0x67e)](Number,RegExp['$1']),0x396*0x3+-0xecd+0x40b+0.01));_0x2cda15['match'](_0x4bd441['RadialBeha'+_0x50928b(0x21f)+_0x50928b(0x4ca)])&&(this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()[_0x50928b(0x666)+'e']=_0x52006c[_0x50928b(0x6a5)](_0x52006c[_0x50928b(0x3d6)](Number,RegExp['$1']),0x17f7*0x1+0x1c75+-0x346c+0.01));_0x2cda15['match'](_0x4bd441[_0x50928b(0x717)+'viorFlicke'+_0x50928b(0x292)])&&(this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()[_0x50928b(0x2fe)+_0x50928b(0x380)]=_0x52006c['JwmNO'](_0x52006c[_0x50928b(0x3d6)](Number,RegExp['$1']),0x1aad+-0x1*-0xe2d+-0x28da+0.01));_0x2cda15[_0x50928b(0x321)](_0x4bd441[_0x50928b(0x717)+_0x50928b(0x4c5)+_0x50928b(0x3ec)])&&(this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()['flashRate']=_0x52006c[_0x50928b(0x271)](_0x52006c[_0x50928b(0x756)](Number,RegExp['$1']),0x210e+0x364+-0x2472*0x1+0.01));_0x2cda15[_0x50928b(0x321)](_0x4bd441[_0x50928b(0x717)+_0x50928b(0x278)+'od'])&&(this['radialLigh'+_0x50928b(0x2c4)]()[_0x50928b(0x63c)+'ier']=_0x52006c[_0x50928b(0x4a6)](_0x52006c[_0x50928b(0x3d6)](Number,RegExp['$1']),0x1*0x35f+0x13f*-0xb+0x6*0x1b9+0.01));_0x2cda15['match'](_0x4bd441[_0x50928b(0x717)+_0x50928b(0x6ee)+_0x50928b(0x3ec)])&&(this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()[_0x50928b(0x38a)]=_0x52006c[_0x50928b(0x1f5)](_0x52006c[_0x50928b(0x4e1)](Number,RegExp['$1']),0xda3+0xaf6+-0x1899+0.01));_0x2cda15[_0x50928b(0x321)](_0x4bd441[_0x50928b(0x717)+_0x50928b(0x6f5)+'od'])&&(this['radialLigh'+_0x50928b(0x2c4)]()[_0x50928b(0x44f)+_0x50928b(0x567)]=_0x52006c[_0x50928b(0x4a6)](_0x52006c[_0x50928b(0x756)](Number,RegExp['$1']),0x967+0x1d97+-0x26fe+0.01));_0x2cda15['match'](_0x4bd441['RadialBeha'+_0x50928b(0x33d)+'te'])&&(this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()['glowRate']=_0x52006c[_0x50928b(0x24a)](_0x52006c[_0x50928b(0x4e1)](Number,RegExp['$1']),-0x14ab+-0x1*0x35f+0x180a+0.01));_0x2cda15[_0x50928b(0x321)](_0x4bd441[_0x50928b(0x717)+_0x50928b(0x5e3)+'eed'])&&(this[_0x50928b(0x2b3)+'tBehavior']()[_0x50928b(0x389)]=_0x52006c[_0x50928b(0x6d5)](_0x52006c[_0x50928b(0x756)](Number,RegExp['$1']),0x12e*0x13+0x19c0+0x12*-0x2ad+0.01));if(_0x2cda15[_0x50928b(0x321)](_0x4bd441[_0x50928b(0x717)+_0x50928b(0x513)+'g']))this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()['glowRng']=!![];else _0x2cda15[_0x50928b(0x321)](_0x4bd441[_0x50928b(0x717)+_0x50928b(0x4ad)+_0x50928b(0x57f)])&&(this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()[_0x50928b(0x357)]=![]);_0x2cda15[_0x50928b(0x321)](_0x4bd441[_0x50928b(0x717)+'viorPulseR'+_0x50928b(0x3ec)])&&(this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()[_0x50928b(0x520)]=_0x52006c[_0x50928b(0x6d5)](_0x52006c['wvcDm'](Number,RegExp['$1']),0x1d86+0x258+0x1*-0x1fde+0.01));_0x2cda15[_0x50928b(0x321)](_0x4bd441['RadialBeha'+_0x50928b(0x293)+_0x50928b(0x49a)])&&(this['radialLigh'+_0x50928b(0x2c4)]()['pulseSpeed']=_0x52006c[_0x50928b(0x271)](_0x52006c['Xqgrj'](Number,RegExp['$1']),0x26a8+0x50b+-0x3*0xe91+0.01));if(_0x2cda15[_0x50928b(0x321)](_0x4bd441[_0x50928b(0x717)+_0x50928b(0x2d4)+'ng']))this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()['pulseRng']=!![];else _0x2cda15[_0x50928b(0x321)](_0x4bd441['RadialBeha'+_0x50928b(0x1e7)+_0x50928b(0x6fd)])&&(this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()[_0x50928b(0x266)]=![]);if(_0x2cda15[_0x50928b(0x321)](_0x4bd441[_0x50928b(0x717)+'viorPatter'+_0x50928b(0x52c)]))this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()['pattern']=ColorManager[_0x50928b(0x5b2)+_0x50928b(0x24c)](RegExp['$1']);else _0x2cda15[_0x50928b(0x321)](_0x4bd441[_0x50928b(0x717)+_0x50928b(0x303)+_0x50928b(0x2c3)])&&(this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()[_0x50928b(0x3ff)]=_0x52006c[_0x50928b(0x723)](String,RegExp['$1'])[_0x50928b(0x586)+'e']()[_0x50928b(0x5f8)]());_0x2cda15['match'](_0x4bd441[_0x50928b(0x717)+_0x50928b(0x303)+'nUpdateDel'+'ay'])&&(this[_0x50928b(0x2b3)+_0x50928b(0x2c4)]()[_0x50928b(0x750)+'ay']=_0x52006c[_0x50928b(0x699)](Number,RegExp['$1'])||-0x1e9*-0x5+0x1cb7*-0x1+-0x7*-0x2bd);},Game_Event[_0x4b43fd(0x62d)]['checkConic'+_0x4b43fd(0x63e)+_0x4b43fd(0x506)+'gs']=function(_0x5c4c73){const _0x45a7d1=_0x4b43fd,_0x5ef4bf={'WxQLc':function(_0x140bb5,_0x269ee8){return _0x140bb5(_0x269ee8);},'XQLYg':function(_0x328e85,_0x16e791){return _0x328e85(_0x16e791);},'wHMsZ':function(_0x1754b1,_0x243b63){return _0x1754b1(_0x243b63);},'nOpzZ':function(_0x2d07bc,_0x23d805){return _0x2d07bc(_0x23d805);},'AmTkn':function(_0x409ed5,_0x4af765){return _0x409ed5/_0x4af765;},'nsGPq':function(_0x341ce7,_0x1d5ecc){return _0x341ce7(_0x1d5ecc);},'JQzwW':function(_0x205870,_0x24289d){return _0x205870/_0x24289d;},'FMJYi':function(_0x5b52ae,_0x260e48){return _0x5b52ae(_0x260e48);},'PQTRh':function(_0x387ce9,_0x4a2155){return _0x387ce9*_0x4a2155;},'ENvph':function(_0x34fa77,_0x27eeab){return _0x34fa77*_0x27eeab;},'jaMgg':function(_0x3d2ad7,_0x4c96bd){return _0x3d2ad7(_0x4c96bd);},'SmzSx':function(_0x3a935a,_0x2a14e7){return _0x3a935a(_0x2a14e7);},'pmYJU':function(_0x485260,_0x324d12){return _0x485260*_0x324d12;},'AEDWD':function(_0x37ef33,_0x5b70cb){return _0x37ef33(_0x5b70cb);}},_0x515b17=VisuMZ[_0x45a7d1(0x3ba)+_0x45a7d1(0x4a5)]['RegExp'];if(_0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x477)]))this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x528)]=!![];else{if(_0x5c4c73['match'](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x31c)]))this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x528)]=!![];else _0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x58a)])&&(this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x528)]=![]);}_0x5c4c73['match'](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x5ba)])&&(this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x4d4)]=_0x5ef4bf[_0x45a7d1(0x206)](String,RegExp['$1'])[_0x45a7d1(0x5f8)]());_0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x438)+_0x45a7d1(0x41f)])&&(this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x1f7)+'ffset']=_0x5ef4bf['XQLYg'](Number,RegExp['$1'])[_0x45a7d1(0x68b)](0x8b9+-0x63*0x21+-0x2f*-0x16,-0x80e*0x3+0x109+0x1889));if(_0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x2c2)+'or'])){const _0x26922d=_0x5ef4bf[_0x45a7d1(0x598)](String,RegExp['$1'])[_0x45a7d1(0x589)](',')[_0x45a7d1(0x2d5)](_0x4d1f67=>Number(_0x4d1f67)||0x1*-0x65b+-0x6*0x384+-0x1b73*-0x1);this['conicalLig'+'ht']()[_0x45a7d1(0x591)+'X']=_0x26922d[-0x715+0x1e88+0x105*-0x17],this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x591)+'Y']=_0x26922d[0x117c*-0x2+0x13*0xa6+0x16a7];}_0x5c4c73[_0x45a7d1(0x321)](_0x515b17['ConicalLig'+_0x45a7d1(0x552)])&&(this['conicalLig'+'ht']()[_0x45a7d1(0x2aa)]=ColorManager[_0x45a7d1(0x758)+_0x45a7d1(0x3bc)](RegExp['$1']));if(_0x5c4c73[_0x45a7d1(0x321)](_0x515b17['ConicalLig'+_0x45a7d1(0x630)]))this[_0x45a7d1(0x5d6)+'ht']()['radius']=_0x5ef4bf[_0x45a7d1(0x67a)](Number,RegExp['$1']);else _0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+'htDiameter'])&&(this['conicalLig'+'ht']()[_0x45a7d1(0x51f)]=Math[_0x45a7d1(0x29a)](_0x5ef4bf['AmTkn'](_0x5ef4bf['nOpzZ'](Number,RegExp['$1']),-0x2166+-0x76*-0x53+-0x4da)));if(_0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+'htSrcRadiu'+'s']))this['conicalLig'+'ht']()['miniRadius']=_0x5ef4bf[_0x45a7d1(0x637)](Number,RegExp['$1']);else _0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x512)+_0x45a7d1(0x3fa)])&&(this['conicalLig'+'ht']()[_0x45a7d1(0x496)]=Math['round'](_0x5ef4bf[_0x45a7d1(0x420)](_0x5ef4bf[_0x45a7d1(0x473)](Number,RegExp['$1']),-0x247b*-0x1+0x2e*0x8f+-0x3e2b)));_0x5c4c73['match'](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x212)+'y'])&&(this[_0x45a7d1(0x5d6)+'ht']()['intensity']=_0x5ef4bf[_0x45a7d1(0x5a6)](_0x5ef4bf[_0x45a7d1(0x598)](Number,RegExp['$1']),0x1*-0x1e44+0x2*-0xdc7+0x1*0x39d2+0.01)[_0x45a7d1(0x68b)](-0x1a00+0x3ad*-0x1+-0x47*-0x6b,0x2*0xb44+0xf3c+-0x25c3));_0x5c4c73['match'](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x676)+'e'])&&(this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x46e)]=ColorManager[_0x45a7d1(0x4d0)+_0x45a7d1(0x5c0)](RegExp['$1']));if(_0x5c4c73[_0x45a7d1(0x321)](_0x515b17['ConicalLig'+_0x45a7d1(0x684)+_0x45a7d1(0x495)]))this['conicalLig'+'ht']()[_0x45a7d1(0x415)]=_0x5ef4bf['wHMsZ'](Number,RegExp['$1'])[_0x45a7d1(0x68b)](0x1203+0x1f5f+0x12d*-0x2a,-0x807+0x970+-0x2*0x35);else{if(_0x5c4c73[_0x45a7d1(0x321)](_0x515b17['ConicalLig'+'htOpacityR'+_0x45a7d1(0x3ec)])){const _0x5e1e16=_0x5ef4bf[_0x45a7d1(0x75c)](_0x5ef4bf[_0x45a7d1(0x67a)](Number,RegExp['$1']),-0x2567+-0x21e0+0x101*0x47+0.01);this['conicalLig'+'ht']()['opacity']=Math[_0x45a7d1(0x29a)](_0x5ef4bf[_0x45a7d1(0x5a6)](_0x5e1e16,0x17bc+-0x10f9*-0x1+0x12b*-0x22))[_0x45a7d1(0x68b)](-0x387+-0xa04*-0x2+-0x1081*0x1,-0x2175+-0x1b1f+0x599*0xb);}}_0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x56b)])&&(this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x4df)]=_0x5ef4bf['jaMgg'](Number,RegExp['$1'])['clamp'](-0x4bd+-0x1f5e+0x241b,0x1426*-0x1+0x76f+0xe1f));_0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+'htAngleSwa'+'y'])&&(this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x4ee)]=_0x5ef4bf[_0x45a7d1(0x5d1)](Number,RegExp['$1'])[_0x45a7d1(0x68b)](0x10ca*0x1+0x16b7+-0x2781*0x1,0x9*-0xd6+0x1aba*0x1+-0x11cc));_0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x4c2)+'d'])&&(this['conicalLig'+'ht']()['swaySpeed']=_0x5ef4bf[_0x45a7d1(0x351)](_0x5ef4bf['nsGPq'](Number,RegExp['$1']),0xa30+0x11cd+0x5*-0x599+0.01));if(_0x5c4c73['match'](_0x515b17[_0x45a7d1(0x22e)+'htSwayRng']))this[_0x45a7d1(0x5d6)+'ht']()['swayRng']=!![];else _0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x3ed)+'g'])&&(this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x419)]=![]);_0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x650)])&&(this['conicalLig'+'ht']()[_0x45a7d1(0x559)+_0x45a7d1(0x6c6)]=TextManager[_0x45a7d1(0x553)+'tionText'](RegExp['$1']));if(_0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+'htFollowMo'+_0x45a7d1(0x686)]))this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x564)+'e']=!![];else _0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x20e)+_0x45a7d1(0x31f)])&&(this[_0x45a7d1(0x5d6)+'ht']()['followMous'+'e']=![]);if(_0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x73f)+'ffset']))this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x76a)+_0x45a7d1(0x38b)]=!![];else _0x5c4c73[_0x45a7d1(0x321)](_0x515b17[_0x45a7d1(0x22e)+'htCentralO'+'ffset'])&&(this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x76a)+_0x45a7d1(0x38b)]=![]);if(_0x5c4c73['match'](_0x515b17[_0x45a7d1(0x22e)+_0x45a7d1(0x66b)])){const _0x2717db=_0x5ef4bf[_0x45a7d1(0x47b)](String,RegExp['$1'])[_0x45a7d1(0x589)](',')[_0x45a7d1(0x2d5)](_0x1a33a9=>Number(_0x1a33a9)||-0x19a3*-0x1+0x1e69+-0x380c);this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x5fe)]=_0x2717db[-0xc9*0x20+-0x1*-0x2591+-0xc71]||0x1*-0x193c+0x1*0x235a+-0xa*0x103,this[_0x45a7d1(0x5d6)+'ht']()[_0x45a7d1(0x4b0)]=_0x2717db[-0x8*0x331+-0x179*0xe+-0x5*-0x93b]||-0x1b09+0x1627+0x4e2;}},Game_Event[_0x4b43fd(0x62d)]['checkConic'+_0x4b43fd(0x287)+_0x4b43fd(0x3b3)+_0x4b43fd(0x535)]=function(_0x549f58){const _0x1a1726=_0x4b43fd,_0x2f76fb={'uwcRa':function(_0x23e633,_0x173072){return _0x23e633*_0x173072;},'MgZBm':function(_0x1742f4,_0x841908){return _0x1742f4(_0x841908);},'HCzKR':function(_0x4e618c,_0x726e0){return _0x4e618c(_0x726e0);},'GPCwk':function(_0x2f9596,_0xba1606){return _0x2f9596*_0xba1606;},'WVYie':function(_0x306537,_0x506cd3){return _0x306537(_0x506cd3);},'pDXyE':function(_0x59cfe3,_0x3533f1){return _0x59cfe3*_0x3533f1;},'ATdnt':function(_0x5dbbd2,_0xaa4411){return _0x5dbbd2(_0xaa4411);},'fGtCd':function(_0x334a45,_0x56d9c0){return _0x334a45*_0x56d9c0;},'iAbHO':function(_0x40a114,_0x3231a6){return _0x40a114(_0x3231a6);},'oukRT':function(_0x23b6dd,_0x108e4e){return _0x23b6dd*_0x108e4e;},'ojRLX':function(_0x58d2c0,_0x17ef3c){return _0x58d2c0(_0x17ef3c);},'abFOd':function(_0x101ed5,_0x48e285){return _0x101ed5(_0x48e285);},'LtiAv':function(_0x5a5465,_0x10708e){return _0x5a5465*_0x10708e;},'nVwIH':function(_0x3f1cfa,_0x324417){return _0x3f1cfa(_0x324417);},'tJwIG':function(_0x28b752,_0x594dc9){return _0x28b752*_0x594dc9;},'TXGRc':function(_0x33da8c,_0x3c60c8){return _0x33da8c(_0x3c60c8);},'PSdSq':function(_0x96ba8d,_0x3da7e8){return _0x96ba8d*_0x3da7e8;},'OGJii':function(_0x24416d,_0x2e61c8){return _0x24416d(_0x2e61c8);},'SKVjn':function(_0x5eb32e,_0x741d0e){return _0x5eb32e(_0x741d0e);}},_0x12fe3e=VisuMZ['LightingEf'+_0x1a1726(0x4a5)][_0x1a1726(0x72d)];_0x549f58[_0x1a1726(0x321)](_0x12fe3e[_0x1a1726(0x334)+_0x1a1726(0x74e)+_0x1a1726(0x50c)])&&(this[_0x1a1726(0x5d6)+'htBehavior']()[_0x1a1726(0x2b9)]=_0x2f76fb[_0x1a1726(0x687)](_0x2f76fb[_0x1a1726(0x56c)](Number,RegExp['$1']),0x16c5+0xa99*-0x2+-0x193+0.01));_0x549f58[_0x1a1726(0x321)](_0x12fe3e[_0x1a1726(0x334)+_0x1a1726(0x74e)+_0x1a1726(0x1e5)])&&(this[_0x1a1726(0x5d6)+_0x1a1726(0x4e2)]()['blinkModif'+_0x1a1726(0x567)]=_0x2f76fb['uwcRa'](_0x2f76fb[_0x1a1726(0x4cc)](Number,RegExp['$1']),0x1c66+-0x17fe+-0x468+0.01));_0x549f58[_0x1a1726(0x321)](_0x12fe3e[_0x1a1726(0x334)+'aviorFlick'+'erRate'])&&(this[_0x1a1726(0x5d6)+'htBehavior']()[_0x1a1726(0x666)+'e']=_0x2f76fb[_0x1a1726(0x726)](_0x2f76fb[_0x1a1726(0x4f8)](Number,RegExp['$1']),-0x13*-0x158+0x1f5e*0x1+-0x38e6+0.01));_0x549f58[_0x1a1726(0x321)](_0x12fe3e[_0x1a1726(0x334)+_0x1a1726(0x204)+_0x1a1726(0x242)])&&(this[_0x1a1726(0x5d6)+_0x1a1726(0x4e2)]()[_0x1a1726(0x2fe)+_0x1a1726(0x380)]=_0x2f76fb[_0x1a1726(0x687)](_0x2f76fb['WVYie'](Number,RegExp['$1']),-0x1*-0x4b2+-0x3*-0x7d+-0x629+0.01));_0x549f58[_0x1a1726(0x321)](_0x12fe3e['ConicalBeh'+_0x1a1726(0x22f)+_0x1a1726(0x50c)])&&(this[_0x1a1726(0x5d6)+'htBehavior']()[_0x1a1726(0x2a1)]=_0x2f76fb[_0x1a1726(0x67b)](_0x2f76fb[_0x1a1726(0x4da)](Number,RegExp['$1']),-0x146+-0x19a8+-0x1*-0x1aee+0.01));_0x549f58[_0x1a1726(0x321)](_0x12fe3e['ConicalBeh'+_0x1a1726(0x22f)+_0x1a1726(0x1e5)])&&(this[_0x1a1726(0x5d6)+_0x1a1726(0x4e2)]()[_0x1a1726(0x63c)+_0x1a1726(0x567)]=_0x2f76fb['fGtCd'](_0x2f76fb['iAbHO'](Number,RegExp['$1']),0x1494+-0x1*0x110c+-0xe2*0x4+0.01));_0x549f58[_0x1a1726(0x321)](_0x12fe3e[_0x1a1726(0x334)+_0x1a1726(0x2f8)+_0x1a1726(0x50c)])&&(this['conicalLig'+_0x1a1726(0x4e2)]()[_0x1a1726(0x38a)]=_0x2f76fb[_0x1a1726(0x20a)](_0x2f76fb['ojRLX'](Number,RegExp['$1']),0xb80+0x19f9+-0x1*0x2579+0.01));_0x549f58[_0x1a1726(0x321)](_0x12fe3e[_0x1a1726(0x334)+_0x1a1726(0x2f8)+'Mod'])&&(this['conicalLig'+_0x1a1726(0x4e2)]()[_0x1a1726(0x44f)+_0x1a1726(0x567)]=_0x2f76fb[_0x1a1726(0x20a)](_0x2f76fb[_0x1a1726(0x40a)](Number,RegExp['$1']),-0x1*-0x463+0x1f3f+-0x2*0x11d1+0.01));_0x549f58['match'](_0x12fe3e[_0x1a1726(0x334)+_0x1a1726(0x318)+_0x1a1726(0x3ec)])&&(this[_0x1a1726(0x5d6)+_0x1a1726(0x4e2)]()[_0x1a1726(0x543)]=_0x2f76fb[_0x1a1726(0x482)](_0x2f76fb['nVwIH'](Number,RegExp['$1']),-0x1*0x743+-0xafb*-0x1+-0xe*0x44+0.01));_0x549f58['match'](_0x12fe3e[_0x1a1726(0x334)+_0x1a1726(0x2da)+_0x1a1726(0x49a)])&&(this[_0x1a1726(0x5d6)+_0x1a1726(0x4e2)]()[_0x1a1726(0x389)]=_0x2f76fb[_0x1a1726(0x6c0)](_0x2f76fb['TXGRc'](Number,RegExp['$1']),-0x24cd+-0xa20+-0x29*-0x125+0.01));if(_0x549f58[_0x1a1726(0x321)](_0x12fe3e[_0x1a1726(0x334)+_0x1a1726(0x318)+'ng']))this[_0x1a1726(0x5d6)+_0x1a1726(0x4e2)]()[_0x1a1726(0x357)]=!![];else _0x549f58['match'](_0x12fe3e['ConicalBeh'+'aviorGlowN'+'oRng'])&&(this['conicalLig'+_0x1a1726(0x4e2)]()[_0x1a1726(0x357)]=![]);_0x549f58[_0x1a1726(0x321)](_0x12fe3e['ConicalBeh'+_0x1a1726(0x45e)+_0x1a1726(0x50c)])&&(this[_0x1a1726(0x5d6)+_0x1a1726(0x4e2)]()[_0x1a1726(0x520)]=_0x2f76fb[_0x1a1726(0x726)](_0x2f76fb['ATdnt'](Number,RegExp['$1']),-0x1082*0x2+-0x95c+0x2a60+0.01));_0x549f58[_0x1a1726(0x321)](_0x12fe3e[_0x1a1726(0x334)+_0x1a1726(0x45e)+_0x1a1726(0x2fa)])&&(this[_0x1a1726(0x5d6)+_0x1a1726(0x4e2)]()['pulseSpeed']=_0x2f76fb[_0x1a1726(0x777)](_0x2f76fb['OGJii'](Number,RegExp['$1']),0x7*0x4fd+0x21a6+-0x3*0x16db+0.01));if(_0x549f58[_0x1a1726(0x321)](_0x12fe3e['ConicalBeh'+_0x1a1726(0x45e)+_0x1a1726(0x57f)]))this[_0x1a1726(0x5d6)+_0x1a1726(0x4e2)]()[_0x1a1726(0x266)]=!![];else _0x549f58[_0x1a1726(0x321)](_0x12fe3e[_0x1a1726(0x334)+'aviorPulse'+'NoRng'])&&(this[_0x1a1726(0x5d6)+_0x1a1726(0x4e2)]()[_0x1a1726(0x266)]=![]);if(_0x549f58[_0x1a1726(0x321)](_0x12fe3e[_0x1a1726(0x334)+_0x1a1726(0x349)+_0x1a1726(0x4cd)]))this['conicalLig'+_0x1a1726(0x4e2)]()[_0x1a1726(0x3ff)]=ColorManager[_0x1a1726(0x5b2)+_0x1a1726(0x24c)](RegExp['$1']);else _0x549f58['match'](_0x12fe3e[_0x1a1726(0x334)+_0x1a1726(0x349)+_0x1a1726(0x1fb)])&&(this[_0x1a1726(0x5d6)+'htBehavior']()[_0x1a1726(0x3ff)]=_0x2f76fb['TXGRc'](String,RegExp['$1'])['toLowerCas'+'e']()['trim']());_0x549f58[_0x1a1726(0x321)](_0x12fe3e[_0x1a1726(0x334)+_0x1a1726(0x349)+'rnUpdateDe'+_0x1a1726(0x714)])&&(this[_0x1a1726(0x5d6)+_0x1a1726(0x4e2)]()[_0x1a1726(0x750)+'ay']=_0x2f76fb['SKVjn'](Number,RegExp['$1'])||-0x1293*0x1+-0x2464+0x36f8);},Game_Event[_0x4b43fd(0x62d)][_0x4b43fd(0x392)+_0x4b43fd(0x49c)+_0x4b43fd(0x551)+'ingTags']=function(_0x351d2f){const _0x16c076=_0x4b43fd,_0x3577f4={'tMcSO':function(_0x509c1e,_0x1df7da){return _0x509c1e(_0x1df7da);},'VrYFe':function(_0x4937ce,_0x51a398){return _0x4937ce(_0x51a398);},'OLWbw':'dir%1','MWoqE':_0x16c076(0x4db),'faBgg':_0x16c076(0x6f9)},_0x2db0a9=VisuMZ[_0x16c076(0x3ba)+_0x16c076(0x4a5)][_0x16c076(0x72d)],_0x16b738=_0x351d2f[_0x16c076(0x321)](_0x2db0a9[_0x16c076(0x22e)+'htHandOffs'+'et']);if(_0x16b738)for(const _0x53b7a6 of _0x16b738){_0x53b7a6[_0x16c076(0x321)](_0x2db0a9['ConicalLig'+_0x16c076(0x5f2)+'et']);const _0x4a2652=TextManager['parseDirec'+'tionText'](RegExp['$1']);if([0x5*0x5d+-0x1696+-0x14c5*-0x1,-0x150b+-0x2666+0x3b76][_0x16c076(0x5ad)](_0x4a2652))continue;const _0x4e8abc=_0x3577f4[_0x16c076(0x470)](Number,RegExp['$2'])||0x16d*0xe+0x6c*-0x46+0x992,_0x59cb46=_0x3577f4[_0x16c076(0x470)](String,RegExp['$3'])[_0x16c076(0x589)](',')[_0x16c076(0x2d5)](_0x589748=>Number(_0x589748)||0x1*0x20d6+0x1ce5+-0x3dbb),_0x228019=_0x3577f4[_0x16c076(0x470)](Number,_0x59cb46[0x1306+-0x20c6+0xdc0])||0xe44+-0xc13*0x1+-0x231,_0x32cde4=_0x3577f4[_0x16c076(0x716)](Number,_0x59cb46[0x1717+-0x26*-0x26+0x2*-0xe5d])||-0x7*-0x1b7+-0x1fb7+0x13b6,_0x12417e=_0x3577f4[_0x16c076(0x377)][_0x16c076(0x493)](_0x4a2652),_0x378aed=_0x3577f4['MWoqE']['format'](_0x4e8abc),_0x4c024b=_0x3577f4[_0x16c076(0x2a9)][_0x16c076(0x493)](_0x4e8abc);this['conicalLig'+_0x16c076(0x3fc)]()[_0x12417e][_0x378aed]=_0x228019,this[_0x16c076(0x5d6)+_0x16c076(0x3fc)]()[_0x12417e][_0x4c024b]=_0x32cde4;}},VisuMZ['LightingEf'+'fects'][_0x4b43fd(0x464)+'ons_maxCom'+_0x4b43fd(0x50b)]=Scene_Options[_0x4b43fd(0x62d)][_0x4b43fd(0x3a6)+'s'],Scene_Options[_0x4b43fd(0x62d)][_0x4b43fd(0x3a6)+'s']=function(){const _0x1410bd=_0x4b43fd;let _0x9d3fbd=VisuMZ[_0x1410bd(0x3ba)+_0x1410bd(0x4a5)][_0x1410bd(0x464)+_0x1410bd(0x6e4)+_0x1410bd(0x50b)][_0x1410bd(0x752)](this);const _0x27e0c5=VisuMZ[_0x1410bd(0x3ba)+_0x1410bd(0x4a5)][_0x1410bd(0x5b6)]['Options'];if(_0x27e0c5['AdjustRect']&&_0x27e0c5['AddBlinkin'+_0x1410bd(0x68c)])_0x9d3fbd++;if(_0x27e0c5[_0x1410bd(0x606)]&&_0x27e0c5['AddPulsing'+_0x1410bd(0x31d)])_0x9d3fbd++;return _0x9d3fbd;},VisuMZ[_0x4b43fd(0x3ba)+'fects'][_0x4b43fd(0x6dc)+_0x4b43fd(0x26c)+_0x4b43fd(0x501)]=Sprite_Character[_0x4b43fd(0x62d)][_0x4b43fd(0x645)],Sprite_Character[_0x4b43fd(0x62d)][_0x4b43fd(0x645)]=function(_0x469cfb){const _0x1f8215=_0x4b43fd;VisuMZ[_0x1f8215(0x3ba)+'fects'][_0x1f8215(0x6dc)+_0x1f8215(0x26c)+'tialize'][_0x1f8215(0x752)](this,_0x469cfb),this[_0x1f8215(0x1e9)+_0x1f8215(0x305)](_0x469cfb),this[_0x1f8215(0x635)+'alLight'](_0x469cfb);},Sprite_Character[_0x4b43fd(0x62d)]['setupRadia'+_0x4b43fd(0x305)]=function(_0xa4f09f){const _0x2c0368=_0x4b43fd,_0x3d6ff1={'kOard':function(_0x5ded84,_0x2dfe0f){return _0x5ded84!==_0x2dfe0f;}};if(_0x3d6ff1[_0x2c0368(0x22c)](this['constructo'+'r'],Sprite_Character))return;this[_0x2c0368(0x6d3)+'ht']=new Sprite_RadialLight(_0xa4f09f,this),SceneManager[_0x2c0368(0x765)+_0x2c0368(0x25e)+_0x2c0368(0x605)](this[_0x2c0368(0x6d3)+'ht']);},Sprite_Character[_0x4b43fd(0x62d)][_0x4b43fd(0x635)+_0x4b43fd(0x575)]=function(_0x32d62e){const _0x2187a3=_0x4b43fd,_0x1b5129={'NGJSc':function(_0x5b4119,_0x17a6f0){return _0x5b4119!==_0x17a6f0;}};if(_0x1b5129[_0x2187a3(0x6b6)](this[_0x2187a3(0x4a3)+'r'],Sprite_Character))return;this['_conicalLi'+_0x2187a3(0x612)]=new Sprite_ConicalLight(_0x32d62e,this),SceneManager['addChildTo'+_0x2187a3(0x25e)+_0x2187a3(0x605)](this[_0x2187a3(0x507)+'ght']);},VisuMZ['LightingEf'+_0x4b43fd(0x4a5)]['Sprite_Bat'+_0x4b43fd(0x30a)+_0x4b43fd(0x4e9)]=Sprite_Battler[_0x4b43fd(0x62d)][_0x4b43fd(0x4d8)],Sprite_Battler[_0x4b43fd(0x62d)][_0x4b43fd(0x4d8)]=function(_0x46a1dc){const _0x39fb26=_0x4b43fd;VisuMZ[_0x39fb26(0x3ba)+_0x39fb26(0x4a5)][_0x39fb26(0x742)+'tler_setBa'+_0x39fb26(0x4e9)]['call'](this,_0x46a1dc),this[_0x39fb26(0x1e9)+_0x39fb26(0x305)](_0x46a1dc);},Sprite_Battler[_0x4b43fd(0x62d)][_0x4b43fd(0x1e9)+_0x4b43fd(0x305)]=function(_0x2bb90e){const _0x436767=_0x4b43fd,_0x59a395={'dvYuS':function(_0x5c27ef,_0x1bc61a){return _0x5c27ef===_0x1bc61a;},'EHPtI':_0x436767(0x362)+'nemy'};if(this[_0x436767(0x6d3)+'ht']){this[_0x436767(0x6d3)+'ht']['setSource'](_0x2bb90e);return;}if(_0x59a395['dvYuS'](this[_0x436767(0x4a3)+'r'][_0x436767(0x488)],_0x59a395[_0x436767(0x661)]))return;this[_0x436767(0x6d3)+'ht']=new Sprite_RadialLight(_0x2bb90e,this),SceneManager[_0x436767(0x765)+_0x436767(0x25e)+_0x436767(0x605)](this[_0x436767(0x6d3)+'ht']);};function Sprite_LightingEffects(){const _0x5a610d=_0x4b43fd;this[_0x5a610d(0x645)](...arguments);}Sprite_LightingEffects[_0x4b43fd(0x62d)]=Object[_0x4b43fd(0x61d)](Sprite[_0x4b43fd(0x62d)]),Sprite_LightingEffects[_0x4b43fd(0x62d)]['constructo'+'r']=Sprite_LightingEffects,Sprite_LightingEffects[_0x4b43fd(0x58c)+'ER']=VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)]['Settings'][_0x4b43fd(0x24d)][_0x4b43fd(0x2ce)+'r'],Sprite_LightingEffects[_0x4b43fd(0x62d)]['initialize']=function(_0x226fa6){const _0x21250e=_0x4b43fd,_0xa35592={'yhlvc':_0x21250e(0x428)+'10|3|11|9|'+'2|12|5|6','ISWlf':function(_0x2fea91,_0x428aee){return _0x2fea91/_0x428aee;},'Stnwj':function(_0xb69cfe,_0x2a4379){return _0xb69cfe/_0x2a4379;}},_0x32ee5d=_0xa35592[_0x21250e(0x6ad)][_0x21250e(0x589)]('|');let _0x331035=0x11e5+0x1b65+0x22*-0x155;while(!![]){switch(_0x32ee5d[_0x331035++]){case'0':this[_0x21250e(0x5ea)]=_0x226fa6;continue;case'1':this[_0x21250e(0x46e)]=PIXI[_0x21250e(0x3a4)+'S'][_0x21250e(0x757)];continue;case'2':this['createLigh'+_0x21250e(0x22d)]();continue;case'3':this[_0x21250e(0x417)+_0x21250e(0x39a)]();continue;case'4':Sprite['prototype']['initialize'][_0x21250e(0x752)](this);continue;case'5':this[_0x21250e(0x246)+_0x21250e(0x6ed)+'ns']();continue;case'6':![]&&this['createTest'+_0x21250e(0x3c6)]();continue;case'7':this['y']=Math[_0x21250e(0x29a)](_0xa35592[_0x21250e(0x5bf)](Graphics[_0x21250e(0x401)],0x1*0x253f+0x13*-0x7f+-0x1bd0));continue;case'8':this['x']=Math[_0x21250e(0x29a)](_0xa35592[_0x21250e(0x675)](Graphics[_0x21250e(0x664)],0x350+-0x1254+0xf06));continue;case'9':this[_0x21250e(0x490)+'rSprite']();continue;case'10':this['anchor']['x']=this[_0x21250e(0x5bd)]['y']=-0x388*0x2+-0xdc3*0x1+-0x1*-0x14d3+0.5;continue;case'11':this[_0x21250e(0x615)+_0x21250e(0x526)]();continue;case'12':this['createAnti'+'LightMask']();continue;}break;}},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x557)]=function(){const _0x443184=_0x4b43fd;Sprite[_0x443184(0x62d)]['destroy'][_0x443184(0x752)](this),this[_0x443184(0x510)+'htContaine'+'r']();},Sprite_LightingEffects['prototype']['destroyLig'+'htContaine'+'r']=function(){const _0x465bdb=_0x4b43fd;this['_hardAntiL'+_0x465bdb(0x5fc)]&&this['_hardAntiL'+_0x465bdb(0x5fc)][_0x465bdb(0x557)](),this[_0x465bdb(0x315)+_0x465bdb(0x5fc)]&&this['_softAntiL'+_0x465bdb(0x5fc)][_0x465bdb(0x557)](),this[_0x465bdb(0x3f1)+_0x465bdb(0x491)]&&this[_0x465bdb(0x3f1)+'ainer']['destroy']();},Sprite_LightingEffects['prototype'][_0x4b43fd(0x417)+_0x4b43fd(0x39a)]=function(){const _0x33a93c=_0x4b43fd,_0x5ecf6f={'zzCyq':function(_0x2d6fd1,_0x4d4d85){return _0x2d6fd1*_0x4d4d85;},'vBCxN':function(_0x17461a,_0x1e62ad){return _0x17461a+_0x1e62ad;},'HbBaV':function(_0x1e3652,_0x2bc817){return _0x1e3652+_0x2bc817;}},_0x181bfd=_0x5ecf6f['zzCyq'](Sprite_LightingEffects['SHAKE_BUFF'+'ER'],0x7*0x12e+0x9fb+0x123b*-0x1),_0x38383b=_0x5ecf6f[_0x33a93c(0x48c)](Graphics[_0x33a93c(0x664)],_0x181bfd),_0x1fd8ff=_0x5ecf6f[_0x33a93c(0x307)](Graphics[_0x33a93c(0x401)],_0x181bfd);this['texture']=PIXI[_0x33a93c(0x6af)+_0x33a93c(0x30d)][_0x33a93c(0x61d)](_0x38383b,_0x1fd8ff);},Sprite_LightingEffects[_0x4b43fd(0x62d)]['createProx'+_0x4b43fd(0x526)]=function(){const _0x16d0da=_0x4b43fd;this[_0x16d0da(0x37a)+'te']=new Sprite();},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x490)+_0x4b43fd(0x41b)]=function(){const _0x2773db=_0x4b43fd,_0x42bdca={'BVHFE':function(_0x24705d,_0x302da9){return _0x24705d*_0x302da9;},'XRJWW':function(_0x58a328,_0x4bef75){return _0x58a328+_0x4bef75;}};this['_colorSpri'+'te']=new Sprite(),this[_0x2773db(0x587)+'te'][_0x2773db(0x42d)]=new Bitmap(-0x6e4+-0xede+0x3*0x741,0x1cf7+-0x169*-0xe+-0x30b4),this[_0x2773db(0x37a)+'te'][_0x2773db(0x2db)](this[_0x2773db(0x587)+'te']);const _0x44216c=_0x42bdca[_0x2773db(0x21a)](Sprite_LightingEffects[_0x2773db(0x58c)+'ER'],-0x58*-0x7+0x106f+-0x12d5);this[_0x2773db(0x587)+'te'][_0x2773db(0x344)]['x']=_0x42bdca[_0x2773db(0x25a)](Graphics[_0x2773db(0x664)],_0x44216c),this['_colorSpri'+'te'][_0x2773db(0x344)]['y']=_0x42bdca[_0x2773db(0x25a)](Graphics[_0x2773db(0x401)],_0x44216c),this['updateOver'+_0x2773db(0x336)]();},Sprite_LightingEffects['prototype']['createLigh'+'tContainer']=function(){const _0x2e2763=_0x4b43fd;this[_0x2e2763(0x3f1)+_0x2e2763(0x491)]=new Sprite(),this['_proxySpri'+'te']['addChild'](this[_0x2e2763(0x3f1)+'ainer']);const _0x2d8a81=Sprite_LightingEffects[_0x2e2763(0x58c)+'ER'];this[_0x2e2763(0x3f1)+_0x2e2763(0x491)]['x']=_0x2d8a81,this[_0x2e2763(0x3f1)+'ainer']['y']=_0x2d8a81;},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x6d9)+_0x4b43fd(0x605)]=function(){const _0x10fbe3=_0x4b43fd,_0x486c98={'nuvtZ':function(_0x5ab972,_0x4863b6){return _0x5ab972===_0x4863b6;}};if(_0x486c98[_0x10fbe3(0x511)](this['_lightCont'+_0x10fbe3(0x491)],undefined))this[_0x10fbe3(0x582)+_0x10fbe3(0x22d)]();return this[_0x10fbe3(0x3f1)+_0x10fbe3(0x491)];},Sprite_LightingEffects[_0x4b43fd(0x439)+_0x4b43fd(0x700)+'K']=!![],Sprite_LightingEffects[_0x4b43fd(0x583)+_0x4b43fd(0x6f4)]=![],Sprite_LightingEffects[_0x4b43fd(0x62d)]['createAnti'+_0x4b43fd(0x698)]=function(){const _0x2555b7=_0x4b43fd;if(!Sprite_LightingEffects[_0x2555b7(0x439)+_0x2555b7(0x700)+'K'])return;if(SceneManager[_0x2555b7(0x724)+_0x2555b7(0x2bc)]())return;if($gameMap[_0x2555b7(0x641)+'zontal']()||$gameMap[_0x2555b7(0x54a)+_0x2555b7(0x5c6)]())return;if(!$gameMap[_0x2555b7(0x57e)+_0x2555b7(0x3c1)]())return;{const _0x1e37e9=new Sprite();_0x1e37e9['bitmap']=this[_0x2555b7(0x607)+_0x2555b7(0x1f6)+_0x2555b7(0x30c)](![],$gameMap['hardAntiLi'+_0x2555b7(0x352)+'Ds'](),$gameMap[_0x2555b7(0x73a)+'ghtTerrain'+_0x2555b7(0x207)]()),_0x1e37e9['scale']['x']=$gameMap[_0x2555b7(0x521)](),_0x1e37e9[_0x2555b7(0x344)]['y']=$gameMap[_0x2555b7(0x300)](),this['_hardAntiL'+'ightMask']=_0x1e37e9,this['_lightCont'+'ainer']['addChild'](this['_hardAntiL'+_0x2555b7(0x5fc)]),this['_hardAlpha'+_0x2555b7(0x774)]=new PIXI['SpriteMask'+(_0x2555b7(0x254))](this[_0x2555b7(0x4b2)+'ightMask']),this[_0x2555b7(0x3ac)+'Mask']['blendMode']=PIXI[_0x2555b7(0x3a4)+'S'][_0x2555b7(0x6c3)];}{const _0xd0e3da=new Sprite();_0xd0e3da['bitmap']=this['createAnti'+'LightMaskB'+_0x2555b7(0x30c)](!![],$gameMap[_0x2555b7(0x2b6)+_0x2555b7(0x352)+'Ds'](),$gameMap[_0x2555b7(0x2b6)+'ghtTerrain'+'Tags']()),_0xd0e3da[_0x2555b7(0x344)]['x']=$gameMap['tileWidth'](),_0xd0e3da['scale']['y']=$gameMap[_0x2555b7(0x300)](),this[_0x2555b7(0x315)+_0x2555b7(0x5fc)]=_0xd0e3da,this[_0x2555b7(0x3f1)+_0x2555b7(0x491)][_0x2555b7(0x2db)](this[_0x2555b7(0x315)+_0x2555b7(0x5fc)]),this[_0x2555b7(0x37d)+_0x2555b7(0x774)]=new PIXI['SpriteMask'+(_0x2555b7(0x254))](this['_softAntiL'+_0x2555b7(0x5fc)]),this[_0x2555b7(0x37d)+_0x2555b7(0x774)][_0x2555b7(0x46e)]=PIXI[_0x2555b7(0x3a4)+'S'][_0x2555b7(0x6c3)];}this[_0x2555b7(0x3f1)+_0x2555b7(0x491)][_0x2555b7(0x663)]=this[_0x2555b7(0x3f1)+_0x2555b7(0x491)][_0x2555b7(0x663)]||[],this[_0x2555b7(0x3f1)+_0x2555b7(0x491)][_0x2555b7(0x663)][_0x2555b7(0x54e)](this['_hardAlpha'+_0x2555b7(0x774)]),this[_0x2555b7(0x3f1)+_0x2555b7(0x491)][_0x2555b7(0x663)][_0x2555b7(0x54e)](this[_0x2555b7(0x37d)+_0x2555b7(0x774)]);},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x607)+_0x4b43fd(0x1f6)+'itmap']=function(_0x3e5330,_0x5f3fe4,_0xe6c734){const _0x4c24bc=_0x4b43fd,_0x31dd97={'HaemS':function(_0x540333,_0x58336e){return _0x540333<_0x58336e;},'DebDt':_0x4c24bc(0x243)},_0x7ff34b=$gameMap[_0x4c24bc(0x664)](),_0x195939=$gameMap[_0x4c24bc(0x401)](),_0x2788c5=new Bitmap(_0x7ff34b,_0x195939);_0x2788c5[_0x4c24bc(0x531)]=_0x3e5330;for(let _0x14fb31=-0x152e*0x1+0x5ca+-0xa*-0x18a;_0x31dd97[_0x4c24bc(0x35a)](_0x14fb31,_0x7ff34b);_0x14fb31++){for(let _0x4a7cbf=0x37*-0x22+-0x8*0x2f9+-0x17*-0x15a;_0x31dd97[_0x4c24bc(0x35a)](_0x4a7cbf,_0x195939);_0x4a7cbf++){const _0x391321=$gameMap[_0x4c24bc(0x2a8)](_0x14fb31,_0x4a7cbf);if(_0x5f3fe4[_0x4c24bc(0x5ad)](_0x391321)){Imported[_0x4c24bc(0x2ee)+_0x4c24bc(0x2f1)+_0x4c24bc(0x2a4)]&&SceneManager[_0x4c24bc(0x249)][_0x4c24bc(0x1f0)+_0x4c24bc(0x497)+'ns'][_0x4c24bc(0x54e)](_0x391321);continue;}const _0x43edb0=$gameMap['terrainTag'](_0x14fb31,_0x4a7cbf);if(_0xe6c734[_0x4c24bc(0x5ad)](_0x43edb0))continue;_0x2788c5[_0x4c24bc(0x712)](_0x14fb31,_0x4a7cbf,0x1518+0x913+-0x1e2a,0x6d*-0x19+-0xce+-0x4*-0x2dd,_0x31dd97['DebDt']);}}return _0x2788c5;},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x246)+_0x4b43fd(0x6ed)+'ns']=function(){const _0x100862=_0x4b43fd;if(!$gameMap)return;if(!$dataMap)return;if($gameMap[_0x100862(0x641)+_0x100862(0x38c)]()||$gameMap['isLoopVert'+_0x100862(0x5c6)]())return;if(!this[_0x100862(0x3f1)+_0x100862(0x491)])return;if(SceneManager['isSceneBat'+_0x100862(0x2bc)]())return;const _0x2e258a=new Sprite();_0x2e258a[_0x100862(0x42d)]=this['createAuto'+_0x100862(0x3f7)+'p'](),_0x2e258a['scale']['x']=$gameMap['tileWidth'](),_0x2e258a[_0x100862(0x344)]['y']=$gameMap[_0x100862(0x300)](),this[_0x100862(0x53e)+'Sprite']=_0x2e258a,this[_0x100862(0x53e)+'Sprite'][_0x100862(0x46e)]=PIXI[_0x100862(0x3a4)+'S']['SCREEN'],this[_0x100862(0x6d9)+_0x100862(0x605)]()['addChild'](_0x2e258a);},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x246)+'LightBitma'+'p']=function(){const _0x17ba38=_0x4b43fd,_0x56451b={'Jhhai':function(_0x1d7d89,_0x2278dd){return _0x1d7d89<_0x2278dd;},'wlBtw':function(_0x53b14d,_0x4dcfb3){return _0x53b14d<_0x4dcfb3;},'pwqTU':function(_0x732751,_0x3bca7b){return _0x732751>_0x3bca7b;},'fCeUN':function(_0x449ff3,_0x7a08b4){return _0x449ff3/_0x7a08b4;},'TIjUA':function(_0x1eecd9,_0x36a076){return _0x1eecd9*_0x36a076;}},_0x53be9e=$gameMap[_0x17ba38(0x664)](),_0x221c5b=$gameMap[_0x17ba38(0x401)](),_0x428743=new Bitmap(_0x53be9e,_0x221c5b);_0x428743[_0x17ba38(0x531)]=!![];for(let _0x31f998=-0xe*0x2b5+-0x4*0x119+0x1525*0x2;_0x56451b['Jhhai'](_0x31f998,_0x53be9e);_0x31f998++){for(let _0x20a9a8=0xe5*0x7+0xe5a+-0x149d;_0x56451b['wlBtw'](_0x20a9a8,_0x221c5b);_0x20a9a8++){const _0x20d557=$gameMap['regionId'](_0x31f998,_0x20a9a8),_0x44fb79=this[_0x17ba38(0x489)+'LightOpaci'+'ty'](_0x20d557);if(_0x56451b[_0x17ba38(0x3fb)](_0x44fb79,-0x27*0xd+-0x7a7+-0x336*-0x3)){const _0x24d24e=Math[_0x17ba38(0x1e1)](_0x56451b[_0x17ba38(0x3e8)](_0x56451b[_0x17ba38(0x536)](0x12b2*0x2+0x137*-0x1f+0x144,_0x44fb79),-0x1377+-0x7*0x37+0x155c));let _0x2aeeaf=ColorManager[_0x17ba38(0x4a4)]([_0x24d24e,_0x24d24e,_0x24d24e]);_0x428743[_0x17ba38(0x712)](_0x31f998,_0x20a9a8,0x1e69+0x22a9+-0x4111*0x1,-0x12f*-0x18+-0x10d*0x1+-0x12*0x185,_0x2aeeaf),Imported['VisuMZ_2_T'+_0x17ba38(0x2f1)+_0x17ba38(0x2a4)]&&SceneManager[_0x17ba38(0x249)]['_grafterRe'+_0x17ba38(0x497)+'ns'][_0x17ba38(0x54e)](_0x20d557);}}}return _0x428743;},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x489)+_0x4b43fd(0x3f8)+'ty']=function(_0x5333ba){const _0x3f86e5=_0x4b43fd,_0xce946e={'xCXAa':function(_0x318481,_0x3aef51){return _0x318481>_0x3aef51;},'zTjXJ':_0x3f86e5(0x2f3)},_0x70afb4=VisuMZ[_0x3f86e5(0x3ba)+_0x3f86e5(0x4a5)][_0x3f86e5(0x5b6)][_0x3f86e5(0x2e3)];let _0x4bf5de=-0x449*-0x5+-0x66e*-0x3+-0xd71*0x3;while(_0xce946e[_0x3f86e5(0x56d)](_0x4bf5de,0xa*0x7d+-0x1a31+0x154f)){const _0x189bdc=_0x70afb4[_0xce946e[_0x3f86e5(0x244)][_0x3f86e5(0x493)](_0x4bf5de)]||[];if(_0x189bdc[_0x3f86e5(0x5ad)](_0x5333ba))return _0x4bf5de;_0x4bf5de-=0xdce+0x26ed+0x1*-0x34b6;}return 0x1*0x1169+0x47*0x89+-0x3768;},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x4f0)+_0x4b43fd(0x3c6)]=function(){const _0x466f53=_0x4b43fd,_0x10046c={'uotgE':_0x466f53(0x2ec),'ovfnV':function(_0x506044,_0x5a0a7d){return _0x506044/_0x5a0a7d;},'yCqgJ':function(_0x2250f3,_0x17b13c){return _0x2250f3*_0x17b13c;},'nlTjw':function(_0x4eed45,_0x5b58be){return _0x4eed45/_0x5b58be;},'dShdD':_0x466f53(0x69c),'ZlRBD':function(_0x58a3d6,_0x233d9c){return _0x58a3d6*_0x233d9c;},'Tjzel':function(_0x5533b1,_0x23ee4e){return _0x5533b1/_0x23ee4e;},'wZvmX':function(_0x1d0ff6,_0x31290e){return _0x1d0ff6*_0x31290e;},'ROBWl':_0x466f53(0x1e0),'QfnqB':function(_0x481eb0,_0x2ae9a4){return _0x481eb0/_0x2ae9a4;},'toFKa':function(_0x5b637f,_0x310428){return _0x5b637f*_0x310428;},'VFtkN':function(_0x43a7e7,_0x490c67){return _0x43a7e7*_0x490c67;}};{const _0x195bc8=new Sprite();_0x195bc8[_0x466f53(0x42d)]=new Bitmap(0x12dd+0x1*0x1e43+-0x2f2c,-0x1192+0x563+-0x7*-0x205),_0x195bc8[_0x466f53(0x42d)][_0x466f53(0x2f0)+_0x466f53(0x62c)](0x802+-0x8c7+-0x1*-0x1bf,_0x10046c['uotgE']),this[_0x466f53(0x6d9)+_0x466f53(0x605)]()[_0x466f53(0x2db)](_0x195bc8),_0x195bc8[_0x466f53(0x5bd)]['x']=_0x195bc8[_0x466f53(0x5bd)]['y']=-0x1c68+0x5c4+-0x15*-0x114+0.5,_0x195bc8['x']=_0x10046c[_0x466f53(0x2a3)](_0x10046c['yCqgJ'](Graphics[_0x466f53(0x664)],0x1c4c+0x6d3*0x1+-0x3a*0x9b),0xe3b*0x2+0x2b*-0xa3+-0x113),_0x195bc8['y']=_0x10046c[_0x466f53(0x301)](_0x10046c[_0x466f53(0x262)](Graphics[_0x466f53(0x401)],-0x8e1+-0xdd9*0x2+-0x2*-0x124a),-0x2*-0x887+0x2*0x251+-0x15ad),_0x195bc8[_0x466f53(0x46e)]=PIXI[_0x466f53(0x3a4)+'S'][_0x466f53(0x6c3)],this[_0x466f53(0x672)+'R']=_0x195bc8;}{const _0x23ff48=new Sprite();_0x23ff48[_0x466f53(0x42d)]=new Bitmap(0x65+0x1037+-0xea8,-0x17*-0xf9+0x31a*0x3+-0x1db9),_0x23ff48['bitmap'][_0x466f53(0x2f0)+_0x466f53(0x62c)](0x2408+0x3*-0xaf3+-0x235,_0x10046c[_0x466f53(0x55b)]),this['lightConta'+_0x466f53(0x605)]()[_0x466f53(0x2db)](_0x23ff48),_0x23ff48['anchor']['x']=_0x23ff48[_0x466f53(0x5bd)]['y']=-0x1d55+-0xffa+0x2d4f+0.5,_0x23ff48['x']=_0x10046c[_0x466f53(0x2a3)](_0x10046c[_0x466f53(0x331)](Graphics[_0x466f53(0x664)],-0x4*-0x56b+-0x31d*0xb+0xc95),0x742+0x1e31+-0x256e),_0x23ff48['y']=_0x10046c[_0x466f53(0x659)](_0x10046c[_0x466f53(0x36d)](Graphics['height'],0x1082+-0x836+0x1*-0x84a),-0x797*0x4+0x1f7f+-0x120),_0x23ff48[_0x466f53(0x46e)]=PIXI[_0x466f53(0x3a4)+'S'][_0x466f53(0x6c3)],this[_0x466f53(0x672)+'G']=_0x23ff48;}{const _0xe6735d=new Sprite();_0xe6735d[_0x466f53(0x42d)]=new Bitmap(0x1d64+-0x3*0x39b+-0x73*0x25,-0x26ea*0x1+-0x1fa4+0x4882),_0xe6735d[_0x466f53(0x42d)]['drawTestDu'+_0x466f53(0x62c)](-0x23df+-0x1*-0x1683+0x72b*0x2,_0x10046c[_0x466f53(0x3f9)]),this[_0x466f53(0x6d9)+_0x466f53(0x605)]()[_0x466f53(0x2db)](_0xe6735d),_0xe6735d['anchor']['x']=_0xe6735d[_0x466f53(0x5bd)]['y']=0x1*-0x1961+0x1bfd+-0x29c+0.5,_0xe6735d['x']=_0x10046c['QfnqB'](_0x10046c[_0x466f53(0x23d)](Graphics[_0x466f53(0x664)],-0x2a2*0xd+0x561+0x1cdc),-0x1d*-0xbf+-0x21f*-0x11+-0x39ad),_0xe6735d['y']=_0x10046c[_0x466f53(0x659)](_0x10046c[_0x466f53(0x329)](Graphics[_0x466f53(0x401)],0x561*-0x4+-0xf*-0x27d+-0xfcd),-0x1c19+0x373+0x18a9),_0xe6735d[_0x466f53(0x46e)]=PIXI[_0x466f53(0x3a4)+'S'][_0x466f53(0x6c3)],this[_0x466f53(0x672)+'B']=_0xe6735d;}this[_0x466f53(0x49f)+'es']=!![];},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x299)]=function(){const _0x231c64=_0x4b43fd,_0x20871b={'HfZCU':_0x231c64(0x3a7)+_0x231c64(0x48f)},_0x13f1e9=_0x20871b['HfZCU']['split']('|');let _0x3567dc=0x37f*-0x5+-0x2265+0x14*0x298;while(!![]){switch(_0x13f1e9[_0x3567dc++]){case'0':Sprite[_0x231c64(0x62d)][_0x231c64(0x299)]['call'](this);continue;case'1':this['_proxySpri'+'te']&&(this[_0x231c64(0x577)+_0x231c64(0x336)](),this['updateOver'+_0x231c64(0x721)]());continue;case'2':this[_0x231c64(0x53e)+_0x231c64(0x41c)]&&this[_0x231c64(0x24f)+_0x231c64(0x272)]();continue;case'3':this[_0x231c64(0x3f1)+_0x231c64(0x491)]&&this[_0x231c64(0x3f1)+_0x231c64(0x491)][_0x231c64(0x299)]();continue;case'4':this['updateAnti'+_0x231c64(0x698)]();continue;case'5':this['_testDummi'+'es']&&this[_0x231c64(0x398)+_0x231c64(0x3c6)]();continue;case'6':this[_0x231c64(0x37f)+_0x231c64(0x31e)]();continue;}break;}},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x37f)+_0x4b43fd(0x31e)]=function(){const _0x2dc459=_0x4b43fd;this[_0x2dc459(0x415)]=$gameScreen[_0x2dc459(0x3b1)+'erlayOpaci'+'ty']();},Sprite_LightingEffects['prototype']['updateAnti'+'LightMask']=function(){const _0x2708b4=_0x4b43fd,_0x427d5f={'WmzDW':function(_0x4e33fe,_0x4dd913){return _0x4e33fe*_0x4dd913;},'LoddH':function(_0x501ca3,_0x2eafee){return _0x501ca3*_0x2eafee;},'ueUeq':function(_0x1ea244,_0xc2c839){return _0x1ea244*_0xc2c839;},'XPFUL':function(_0x1c428d,_0x134913){return _0x1c428d*_0x134913;}};if(this[_0x2708b4(0x4b2)+'ightMask']){const _0x484a30=this[_0x2708b4(0x4b2)+_0x2708b4(0x5fc)];_0x484a30['x']=Math[_0x2708b4(0x2e4)](_0x427d5f[_0x2708b4(0x44a)](-$gameMap[_0x2708b4(0x569)](),$gameMap['tileWidth']())),_0x484a30['y']=Math[_0x2708b4(0x2e4)](_0x427d5f[_0x2708b4(0x3c2)](-$gameMap[_0x2708b4(0x71a)](),$gameMap[_0x2708b4(0x300)]()));}if(this[_0x2708b4(0x315)+_0x2708b4(0x5fc)]){const _0x6651c=this[_0x2708b4(0x315)+_0x2708b4(0x5fc)];_0x6651c['x']=Math[_0x2708b4(0x2e4)](_0x427d5f['ueUeq'](-$gameMap[_0x2708b4(0x569)](),$gameMap[_0x2708b4(0x521)]())),_0x6651c['y']=Math['floor'](_0x427d5f[_0x2708b4(0x4b3)](-$gameMap[_0x2708b4(0x71a)](),$gameMap['tileHeight']()));}},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x24f)+'LightAreas']=function(){const _0x30ce25=_0x4b43fd,_0x3ae11a={'jVSmO':function(_0x1ed171,_0x5ab211){return _0x1ed171*_0x5ab211;}};this[_0x30ce25(0x53e)+'Sprite']['x']=Math[_0x30ce25(0x2e4)](_0x3ae11a[_0x30ce25(0x69d)](-$gameMap[_0x30ce25(0x569)](),$gameMap[_0x30ce25(0x521)]())),this['_autoLight'+'Sprite']['y']=Math[_0x30ce25(0x2e4)](_0x3ae11a[_0x30ce25(0x69d)](-$gameMap['displayY'](),$gameMap[_0x30ce25(0x300)]()));},Sprite_LightingEffects['prototype']['updateTest'+'Dummies']=function(){const _0x586233=_0x4b43fd,_0x8ba6fc={'GhaJK':function(_0x5f2bf3,_0x355d91){return _0x5f2bf3+_0x355d91;},'sMwDw':function(_0xb5d2eb,_0x383998){return _0xb5d2eb*_0x383998;},'HZylI':function(_0x12ac7a,_0x48ae74){return _0x12ac7a*_0x48ae74;},'KVqIh':function(_0x218ca3,_0x2eda92){return _0x218ca3+_0x2eda92;},'LLECW':function(_0x346956,_0x42952d){return _0x346956+_0x42952d;},'QRcNt':function(_0x4de11b,_0x5e799a){return _0x4de11b*_0x5e799a;}};this[_0x586233(0x672)+'R']['scale']['x']=this['_testDummy'+'R'][_0x586233(0x344)]['y']=_0x8ba6fc['GhaJK'](0x1f94+-0x10c5*-0x1+-0x3059*0x1+0.9,_0x8ba6fc[_0x586233(0x779)](Math['cos'](_0x8ba6fc[_0x586233(0x623)](Graphics['frameCount'],-0x2*-0xc19+-0x1*-0x12a3+-0x2ad5+0.11)),-0x5f1+0x1*-0x60f+0x6*0x200+0.1)),this['_testDummy'+'G'][_0x586233(0x344)]['x']=this[_0x586233(0x672)+'G'][_0x586233(0x344)]['y']=_0x8ba6fc[_0x586233(0x4e3)](-0x24d*0x2+0x6a6+0x4*-0x83+0.9,_0x8ba6fc['HZylI'](Math[_0x586233(0x2bb)](_0x8ba6fc['sMwDw'](Graphics[_0x586233(0x759)],-0x12*-0x6d+-0x2296*0x1+0x6bb*0x4+0.12)),0x18ee*-0x1+-0x1395+0x2c83+0.1)),this[_0x586233(0x672)+'B'][_0x586233(0x344)]['x']=this[_0x586233(0x672)+'B'][_0x586233(0x344)]['y']=_0x8ba6fc['LLECW'](0x26a5+-0x1f*-0xa5+-0x1*0x3aa0+0.9,_0x8ba6fc['HZylI'](Math[_0x586233(0x2bb)](_0x8ba6fc[_0x586233(0x6c5)](Graphics[_0x586233(0x759)],-0x122f+-0xca+0x12f9+0.13)),-0x1*-0xee5+-0x98f*-0x4+-0x3521+0.1));},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x577)+'layColor']=function(){const _0x21eca5=_0x4b43fd,_0x314f5f={'uZliH':function(_0x287af0,_0x912026){return _0x287af0===_0x912026;}};if(_0x314f5f[_0x21eca5(0x5d9)](this[_0x21eca5(0x427)+_0x21eca5(0x2b8)],$gameScreen[_0x21eca5(0x3b1)+_0x21eca5(0x449)]()))return;this[_0x21eca5(0x427)+_0x21eca5(0x2b8)]=$gameScreen[_0x21eca5(0x3b1)+'erlayColor']();const _0x2c147d=this[_0x21eca5(0x587)+'te']['bitmap'];_0x2c147d[_0x21eca5(0x712)](-0x6*0x205+0xb*0x257+-0xd9f,-0x1306+-0x1821+0x2b27,0x21ea+0x1d*0x14+-0x242d,-0x1*-0xa45+-0x246*0x6+0x360,this[_0x21eca5(0x427)+'lor']);},Sprite_LightingEffects[_0x4b43fd(0x62d)][_0x4b43fd(0x577)+_0x4b43fd(0x721)]=function(){const _0x2217cf=_0x4b43fd,_0x4211d2=Graphics[_0x2217cf(0x3b9)][_0x2217cf(0x316)];_0x4211d2&&_0x4211d2[_0x2217cf(0x766)](this[_0x2217cf(0x37a)+'te'],this['texture'],![]);};function Sprite_LightBase(){const _0x22cdd9=_0x4b43fd;this[_0x22cdd9(0x645)](...arguments);}Sprite_LightBase[_0x4b43fd(0x62d)]=Object[_0x4b43fd(0x61d)](Sprite[_0x4b43fd(0x62d)]),Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x4a3)+'r']=Sprite_LightBase,Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x645)]=function(_0x501af9,_0x5b8115){const _0x21b47f=_0x4b43fd;this[_0x21b47f(0x72b)]=_0x501af9,this[_0x21b47f(0x6e1)+_0x21b47f(0x6f3)]=_0x5b8115,Sprite['prototype'][_0x21b47f(0x645)][_0x21b47f(0x752)](this),this[_0x21b47f(0x6b9)+'s']();},Sprite_LightBase['prototype'][_0x4b43fd(0x6b9)+'s']=function(){const _0x424b45=_0x4b43fd,_0x3d27fb={'NrCmS':'0|1|6|2|3|'+_0x424b45(0x31b)},_0x217ca6=_0x3d27fb['NrCmS'][_0x424b45(0x589)]('|');let _0x557cb9=-0x19b9*0x1+0x1a*-0x39+0x1f83;while(!![]){switch(_0x217ca6[_0x557cb9++]){case'0':this[_0x424b45(0x5bd)]['x']=-0x3*-0x340+0x5*-0x301+0x47*0x13+0.5;continue;case'1':this[_0x424b45(0x5bd)]['y']=-0x1a92+-0x21*-0x77+0xb3b+0.5;continue;case'2':this[_0x424b45(0x344)]['y']=0x86b*-0x1+-0x9e*-0x24+-0x2*0x6e6;continue;case'3':this[_0x424b45(0x295)]=Math[_0x424b45(0x5eb)](0x548dd+0x1494d*0x17+0x30a*-0x674);continue;case'4':this[_0x424b45(0x4b7)]=Math['randomInt'](-0x19b1ce+-0x1d081*-0xa+0x16cf04);continue;case'5':this[_0x424b45(0x530)+_0x424b45(0x25f)]=-0xe*-0x2c1+0xbb+-0x2749;continue;case'6':this[_0x424b45(0x344)]['x']=-0x16f7+-0x2186+0x387e;continue;}break;}},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x2b4)]=function(_0x2dae35){const _0x51ad29=_0x4b43fd,_0x1e5ace={'YcXRl':function(_0xc6058c,_0x5ef742){return _0xc6058c===_0x5ef742;}};if(_0x1e5ace[_0x51ad29(0x2d8)](this['_source'],_0x2dae35))return;this[_0x51ad29(0x72b)]=_0x2dae35,this['update']();},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x5b1)]=function(){const _0x2a4bf0=_0x4b43fd;return this[_0x2a4bf0(0x72b)]?this[_0x2a4bf0(0x72b)][_0x2a4bf0(0x2b3)+'t']():{};},Sprite_LightBase['prototype'][_0x4b43fd(0x41d)+'ta']=function(){const _0x21eb34=_0x4b43fd;return this[_0x21eb34(0x72b)]?this['_source'][_0x21eb34(0x2b3)+_0x21eb34(0x2c4)]():{};},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x627)]=function(){const _0x5f1f2c=_0x4b43fd,_0x4ce7b3={'nqpjq':function(_0x3aaf06,_0x50c6b9){return _0x3aaf06===_0x50c6b9;}};if(this[_0x5f1f2c(0x72b)]&&_0x4ce7b3[_0x5f1f2c(0x230)](this[_0x5f1f2c(0x72b)]['constructo'+'r'],Game_Vehicle)){if(_0x4ce7b3['nqpjq'](this[_0x5f1f2c(0x72b)]['characterN'+'ame'](),''))return![];}return this[_0x5f1f2c(0x5b1)]()['enabled'];},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x299)]=function(){const _0x3e049f=_0x4b43fd;Sprite['prototype'][_0x3e049f(0x299)][_0x3e049f(0x752)](this),this[_0x3e049f(0x707)+'rties'](),this['isEnabled']()&&this[_0x3e049f(0x72b)]&&(this['updateMain'](),this[_0x3e049f(0x338)+_0x3e049f(0x366)]()),this[_0x3e049f(0x731)+_0x3e049f(0x3cc)]();},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x6bd)]=function(){const _0x279477=_0x4b43fd;this[_0x279477(0x3b6)+'e'](),this[_0x279477(0x4b6)+_0x279477(0x273)](),this['updateOpac'+'ity'](),this[_0x279477(0x55e)+_0x279477(0x6c6)]();},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x707)+_0x4b43fd(0x6a4)]=function(){const _0x3a726e=_0x4b43fd;if(!this[_0x3a726e(0x519)+_0x3a726e(0x629)]())return;this[_0x3a726e(0x3f4)+'ta'](),this['createBitm'+'ap']();},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x519)+_0x4b43fd(0x629)]=function(){return![];},Sprite_LightBase['prototype'][_0x4b43fd(0x3f4)+'ta']=function(){},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x3dc)+'ap']=function(){const _0x564279=_0x4b43fd,_0x36a4f7={'CAsLG':function(_0x1ace01,_0x4e82c5){return _0x1ace01!==_0x4e82c5;}},_0x24bade=this['lightData']();this['scale']['x']=-0x1058+0x847*0x2+-0x35*0x1,this[_0x564279(0x344)]['y']=-0x1af*0x7+-0x5*0x4+0xbde,this[_0x564279(0x295)]=Math['randomInt'](-0x222a*-0xbb+0x16659b+-0x201809),this['_pulseRng']=Math[_0x564279(0x5eb)](0x9fd*0x97+0x9628c*-0x1+0x12c091),this[_0x564279(0x530)+_0x564279(0x25f)]=0xf1*-0xb+-0x13*0xb+0xdc*0xd;if(_0x36a4f7[_0x564279(0x502)](_0x24bade[_0x564279(0x4d4)],''))this[_0x564279(0x42d)]=ImageManager[_0x564279(0x42f)+'e'](_0x24bade[_0x564279(0x4d4)]);else this[_0x564279(0x627)]()?this[_0x564279(0x42d)]=this[_0x564279(0x2f5)+_0x564279(0x612)](_0x24bade):this[_0x564279(0x42d)]=new Bitmap(-0x8c*0x1e+0x222d*0x1+-0x17b*0xc,0xf89*0x1+0x11*0x1cb+-0x1*0x2e03);},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x2f5)+'ght']=function(_0x51d44b){return new Bitmap(0x61*-0x1+0x11*0x20c+-0x226a,-0x54e*-0x1+-0x103f*-0x2+-0x25cb);},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x3b6)+'e']=function(){const _0x487c84=_0x4b43fd;this[_0x487c84(0x4df)]=-0x21b*-0xb+-0xa81+0x288*-0x5;},Sprite_LightBase[_0x4b43fd(0x62d)]['updateBlen'+_0x4b43fd(0x273)]=function(){const _0x17e489=_0x4b43fd;this[_0x17e489(0x46e)]=this[_0x17e489(0x5b1)]()[_0x17e489(0x46e)]||0xcf8+-0x21*0x3+0x1*-0xc95;},Sprite_LightBase[_0x4b43fd(0x62d)]['updateOpac'+'ity']=function(){const _0x477594=_0x4b43fd;this[_0x477594(0x415)]=this[_0x477594(0x5b1)]()[_0x477594(0x415)]||0xa75*0x1+-0x1*0x2467+0x19f2;},Sprite_LightBase['prototype'][_0x4b43fd(0x55e)+_0x4b43fd(0x6c6)]=function(){const _0xc8671a=_0x4b43fd,_0x2e8ce8={'hcGVK':function(_0x3e7366,_0x4f69d5){return _0x3e7366-_0x4f69d5;},'GvKsC':function(_0x47101a,_0x790614){return _0x47101a/_0x790614;},'FkOkc':function(_0x1d328b,_0x30edf6){return _0x1d328b-_0x30edf6;}},_0x3b7059=this['_originSpr'+_0xc8671a(0x6f3)],_0x4dc20b=this[_0xc8671a(0x5b1)]();this['x']=_0x3b7059['x'],this['x']+=_0x4dc20b[_0xc8671a(0x5fe)],this['y']=_0x2e8ce8[_0xc8671a(0x383)](_0x3b7059['y'],Math[_0xc8671a(0x29a)](_0x2e8ce8[_0xc8671a(0x56f)](_0x3b7059['height'],0x1*0x1dcc+0x2082+-0xc*0x531))),this['y']+=_0x4dc20b[_0xc8671a(0x4b0)],SceneManager[_0xc8671a(0x724)+_0xc8671a(0x2bc)]()&&(this['x']+=_0x2e8ce8[_0xc8671a(0x56f)](_0x2e8ce8[_0xc8671a(0x383)](Graphics[_0xc8671a(0x664)],Graphics[_0xc8671a(0x2a2)]),0x28c*-0xe+0xb02+0x6*0x41c),this['y']+=_0x2e8ce8[_0xc8671a(0x56f)](_0x2e8ce8[_0xc8671a(0x71b)](Graphics['height'],Graphics[_0xc8671a(0x4cf)]),0x1eb9+-0x8f*0xb+-0x1892));},Sprite_LightBase['prototype'][_0x4b43fd(0x338)+_0x4b43fd(0x366)]=function(){const _0x27a4de=_0x4b43fd,_0x34c177={'nheJD':_0x27a4de(0x73c)+_0x27a4de(0x228)},_0x2f7b86=_0x34c177[_0x27a4de(0x3a2)][_0x27a4de(0x589)]('|');let _0x2c3b59=0x12c*0x15+-0x231e+0x21a*0x5;while(!![]){switch(_0x2f7b86[_0x2c3b59++]){case'0':this[_0x27a4de(0x1ec)+_0x27a4de(0x2c7)]();continue;case'1':this['updateFlas'+'h']();continue;case'2':this[_0x27a4de(0x4d5)+'ern']();continue;case'3':this[_0x27a4de(0x705)+'e']();continue;case'4':this[_0x27a4de(0x651)]();continue;case'5':this[_0x27a4de(0x562)+'k']();continue;case'6':this[_0x27a4de(0x371)+'e']();continue;}break;}},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x562)+'k']=function(){const _0x29c890=_0x4b43fd,_0x21165f={'HuPBq':function(_0x424124,_0x20053b){return _0x424124<_0x20053b;},'MeHku':function(_0x4ae281,_0x257fb2){return _0x4ae281*_0x257fb2;},'PenAi':function(_0x534ce8,_0x4e6a9e){return _0x534ce8+_0x4e6a9e;}};if(!ConfigManager['blinkingLi'+_0x29c890(0x732)])return;const _0x219784=this[_0x29c890(0x41d)+'ta']();if(_0x21165f[_0x29c890(0x2c8)](Math[_0x29c890(0x3d4)](),_0x219784[_0x29c890(0x2b9)]||0x1*-0x503+-0x5*-0x27f+-0x3bc*0x2)){const _0x4f2ccc=_0x21165f[_0x29c890(0x6d1)](this[_0x29c890(0x415)],_0x219784[_0x29c890(0x52e)+'ier']||0x5f1+0xef9+0x14ea*-0x1);this[_0x29c890(0x415)]=Math[_0x29c890(0x29a)](_0x21165f['PenAi'](this[_0x29c890(0x415)],_0x4f2ccc))[_0x29c890(0x68b)](0x18a8+0x26bd+-0x3f65*0x1,-0x1*0x1d9b+0x7*0x125+-0x1*-0x1697);}},Sprite_LightBase[_0x4b43fd(0x62d)]['updateFlic'+_0x4b43fd(0x2c7)]=function(){const _0x2b858c=_0x4b43fd,_0x2209bb={'JHTJs':function(_0x229d73,_0x172582){return _0x229d73<_0x172582;},'LiZxS':function(_0x3d48fb,_0x2242f7){return _0x3d48fb*_0x2242f7;},'vjcGS':function(_0x2fb4db,_0x48fe0c){return _0x2fb4db*_0x48fe0c;},'MtWbr':function(_0x5dd90b,_0x1463b7){return _0x5dd90b+_0x1463b7;}};if(!ConfigManager[_0x2b858c(0x62f)+_0x2b858c(0x732)])return;const _0x5a28fd=this['behaviorDa'+'ta']();if(_0x2209bb[_0x2b858c(0x2c5)](Math[_0x2b858c(0x3d4)](),_0x5a28fd[_0x2b858c(0x666)+'e']||0x11*0xc6+-0x31*0x31+-0x3c5)){const _0x1b3f51=_0x2209bb[_0x2b858c(0x29e)](this[_0x2b858c(0x415)],_0x2209bb[_0x2b858c(0x694)](Math[_0x2b858c(0x3d4)](),_0x5a28fd[_0x2b858c(0x2fe)+_0x2b858c(0x380)]||0x1*-0x1772+0xf9e+0x7d4));this[_0x2b858c(0x415)]=Math[_0x2b858c(0x29a)](_0x2209bb[_0x2b858c(0x746)](this['opacity'],_0x1b3f51))[_0x2b858c(0x68b)](-0x10a4+0xa22+-0x7*-0xee,-0xc0*0xe+-0x22ac+0x2e2b);}},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x69e)+'h']=function(){const _0x4294c6=_0x4b43fd,_0x49f817={'hjIte':function(_0x53bb0f,_0x357e38){return _0x53bb0f<_0x357e38;},'qHdlz':function(_0x3d2137,_0x50a3d1){return _0x3d2137*_0x50a3d1;},'wYjhm':function(_0x53effa,_0x520ec4){return _0x53effa+_0x520ec4;}};if(!ConfigManager[_0x4294c6(0x62f)+_0x4294c6(0x732)])return;const _0x15b2ea=this[_0x4294c6(0x41d)+'ta']();if(_0x49f817[_0x4294c6(0x472)](Math[_0x4294c6(0x3d4)](),_0x15b2ea[_0x4294c6(0x2a1)]||0x2500+-0x2*-0x8+-0x2510)){const _0x4bbe53=_0x49f817[_0x4294c6(0x3bb)](-0x1*0x409+-0x180d+0x1d15,_0x15b2ea[_0x4294c6(0x63c)+_0x4294c6(0x567)]||0x1365+0xeb3+0x110c*-0x2);this[_0x4294c6(0x415)]=Math[_0x4294c6(0x29a)](_0x49f817['wYjhm'](this[_0x4294c6(0x415)],_0x4bbe53))[_0x4294c6(0x68b)](-0x1a31+-0x1*0x97b+0x23ac*0x1,0x1*-0x10ca+0x1005*0x1+0x1c4);}},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x371)+'e']=function(){const _0x3a2c0e=_0x4b43fd,_0x1f4574={'fDWCS':function(_0x364eff,_0x3890c8){return _0x364eff<_0x3890c8;},'mAOln':function(_0x2c65e2,_0x42ef1e){return _0x2c65e2*_0x42ef1e;},'TZUYW':function(_0x1a02f8,_0x56e14b){return _0x1a02f8+_0x56e14b;}};if(!ConfigManager[_0x3a2c0e(0x62f)+_0x3a2c0e(0x732)])return;const _0x521681=this['behaviorDa'+'ta']();if(_0x1f4574[_0x3a2c0e(0x73d)](Math[_0x3a2c0e(0x3d4)](),_0x521681[_0x3a2c0e(0x38a)]||0x1400+-0x3*-0x772+0x152b*-0x2)){const _0x48aef0=_0x1f4574['mAOln'](0x14bb+0x1e44+-0x3200,_0x1f4574['mAOln'](Math[_0x3a2c0e(0x3d4)](),_0x521681[_0x3a2c0e(0x44f)+'ier']||0x1d*0x32+-0x19c2+0x1418));this[_0x3a2c0e(0x415)]=Math[_0x3a2c0e(0x29a)](_0x1f4574[_0x3a2c0e(0x69f)](this['opacity'],_0x48aef0))[_0x3a2c0e(0x68b)](-0x100*-0x18+-0x131d+-0x4e3,-0x171a+-0x16f0+0x2f09);}},Sprite_LightBase['prototype'][_0x4b43fd(0x651)]=function(){const _0x2e6a14=_0x4b43fd,_0x1a7f77={'rIJzW':function(_0x4fb5da,_0x128893){return _0x4fb5da>_0x128893;},'SqBml':function(_0x3e5244,_0x591d18){return _0x3e5244/_0x591d18;},'ZGkUv':function(_0x18362e,_0x23d249){return _0x18362e-_0x23d249;},'IYimM':function(_0x21cfc2,_0xbfcb08){return _0x21cfc2+_0xbfcb08;},'QmSEH':function(_0x2c5b59,_0x1669ec){return _0x2c5b59*_0x1669ec;},'Zwmxy':function(_0x4fe38d,_0x3d1774){return _0x4fe38d*_0x3d1774;}};if(!ConfigManager[_0x2e6a14(0x22a)+_0x2e6a14(0x568)])return;const _0x49acc1=this['behaviorDa'+'ta']();if(_0x1a7f77[_0x2e6a14(0x32e)](_0x49acc1[_0x2e6a14(0x543)],-0x1*0x2e1+0x13*0x6f+0x55c*-0x1)){const _0x3e0a7b=_0x1a7f77[_0x2e6a14(0x45f)](_0x49acc1[_0x2e6a14(0x543)],0x3cd*-0x6+-0x6b2*-0x5+-0xaaa),_0x4e70d3=_0x1a7f77['ZGkUv'](-0x1b09+0x201f*-0x1+-0x3b29*-0x1,_0x3e0a7b),_0x3a61e5=_0x49acc1[_0x2e6a14(0x389)],_0x233a24=_0x49acc1[_0x2e6a14(0x357)]?this[_0x2e6a14(0x295)]:-0x21dd+-0x210e+0x42eb,_0x3b4738=_0x1a7f77[_0x2e6a14(0x5df)](Graphics[_0x2e6a14(0x759)],_0x233a24);this[_0x2e6a14(0x415)]*=_0x1a7f77[_0x2e6a14(0x5df)](_0x4e70d3,_0x1a7f77[_0x2e6a14(0x487)](Math[_0x2e6a14(0x2bb)](_0x1a7f77[_0x2e6a14(0x5c2)](_0x3b4738,_0x3a61e5)),_0x3e0a7b));}},Sprite_LightBase[_0x4b43fd(0x62d)]['updatePatt'+_0x4b43fd(0x2d3)]=function(){const _0x587e1f=_0x4b43fd,_0x48780c={'tBgNU':function(_0x34a11c,_0xb21e44){return _0x34a11c===_0xb21e44;},'ktBtW':function(_0x2c51da,_0xa2fefe){return _0x2c51da-_0xa2fefe;},'TErsI':function(_0x34e872,_0x401477){return _0x34e872/_0x401477;},'OrLDZ':function(_0x42e88a,_0x1f6298){return _0x42e88a*_0x1f6298;},'HhWWm':function(_0x3179e8,_0x5a86c7){return _0x3179e8===_0x5a86c7;},'npADS':function(_0x1a111e,_0x3a0c33){return _0x1a111e%_0x3a0c33;},'XNInu':function(_0xab634c,_0xbee88a){return _0xab634c>=_0xbee88a;}};if(!ConfigManager['blinkingLi'+_0x587e1f(0x732)])return;const _0x4926c0=this[_0x587e1f(0x41d)+'ta']();if(_0x48780c[_0x587e1f(0x6e8)](_0x4926c0['pattern'],''))return;if(_0x48780c[_0x587e1f(0x6e8)](_0x4926c0[_0x587e1f(0x3ff)],undefined))return;const _0x5c6220=_0x48780c['ktBtW'](_0x4926c0[_0x587e1f(0x3ff)]['charCodeAt'](this[_0x587e1f(0x530)+_0x587e1f(0x25f)]),-0x1bf*0x13+0xb56*-0x3+-0x1*-0x4390)[_0x587e1f(0x68b)](0x978+-0x6a3*0x5+0xd*0x1d3,-0x997*-0x4+0x2683*-0x1+0x40),_0x4082f8=_0x48780c[_0x587e1f(0x233)](_0x5c6220,-0x1*0x983+-0x1*-0x1ddb+-0x1*0x143f);this[_0x587e1f(0x415)]=Math[_0x587e1f(0x29a)](_0x48780c[_0x587e1f(0x35e)](0x1463*0x1+0x1df8+-0x27*0x144,_0x4082f8))[_0x587e1f(0x68b)](0x1749*-0x1+0x26fb+0x23e*-0x7,0x2312+0x1934+-0x3b47);if(_0x48780c['HhWWm'](_0x48780c[_0x587e1f(0x3b4)](Graphics[_0x587e1f(0x759)],_0x4926c0[_0x587e1f(0x750)+'ay']||0xe3f+0x2*0x7eb+-0x32*0x9a),0x9af+-0x1792+0xde3)){this[_0x587e1f(0x530)+_0x587e1f(0x25f)]++;if(_0x48780c[_0x587e1f(0x6b3)](this[_0x587e1f(0x530)+_0x587e1f(0x25f)],_0x4926c0[_0x587e1f(0x3ff)]['length']))this[_0x587e1f(0x530)+_0x587e1f(0x25f)]=0x1223+-0x23e4+0x9*0x1f9;}},Sprite_LightBase['prototype'][_0x4b43fd(0x705)+'e']=function(){const _0x47caff=_0x4b43fd,_0x19feac={'lituN':function(_0x21b589,_0x1be7fd){return _0x21b589>_0x1be7fd;},'VUiAy':function(_0x561808,_0x3e418e){return _0x561808/_0x3e418e;},'JuLJs':function(_0x2252bf,_0x2a6fda){return _0x2252bf-_0x2a6fda;},'nABBI':function(_0xd0463,_0x181955){return _0xd0463+_0x181955;},'zDtCK':function(_0x453999,_0x3fb27f){return _0x453999+_0x3fb27f;},'RPqXM':function(_0x4a3247,_0x3f9f0c){return _0x4a3247*_0x3f9f0c;}};if(!ConfigManager['pulsingLig'+'hts'])return;const _0x3d9e18=this['behaviorDa'+'ta']();if(_0x19feac[_0x47caff(0x4c8)](_0x3d9e18[_0x47caff(0x520)],0x1e8+0x1973+-0x1b5b*0x1)){const _0x29a797=_0x19feac['VUiAy'](_0x3d9e18[_0x47caff(0x520)],-0x1ad2+0x1*0x142b+0x6a9),_0x59c5c0=_0x19feac[_0x47caff(0x455)](0x1*-0xbbd+0x1*0x214c+-0x158e,_0x29a797),_0x3b46e6=_0x3d9e18[_0x47caff(0x571)],_0x34f09e=_0x3d9e18[_0x47caff(0x266)]?this['_pulseRng']:-0x56f+0xb11*-0x1+-0x4*-0x420,_0x534113=_0x19feac[_0x47caff(0x40c)](Graphics[_0x47caff(0x759)],_0x34f09e),_0x5f4e4b=_0x19feac[_0x47caff(0x3d1)](_0x59c5c0,_0x19feac[_0x47caff(0x37e)](Math[_0x47caff(0x2bb)](_0x19feac[_0x47caff(0x37e)](_0x534113,_0x3b46e6)),_0x29a797));this[_0x47caff(0x344)]['x']=this[_0x47caff(0x344)]['y']=_0x5f4e4b;}else this[_0x47caff(0x344)]['x']=this['scale']['y']=-0x3*-0x337+-0x1c0e+0x1*0x126a;},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x731)+_0x4b43fd(0x3cc)]=function(){const _0x244164=_0x4b43fd;this[_0x244164(0x34b)]=this[_0x244164(0x39f)+'ible']();},Sprite_LightBase[_0x4b43fd(0x62d)][_0x4b43fd(0x39f)+'ible']=function(){const _0x5b24ac=_0x4b43fd,_0x58a651={'CBIRJ':'5|3|4|2|6|'+'0|7|1','LWLQC':function(_0x5e1cd7,_0x2615ed){return _0x5e1cd7!==_0x2615ed;},'CSbrY':function(_0xd8cb5,_0x31fcdc){return _0xd8cb5===_0x31fcdc;}},_0x1d7c82=_0x58a651[_0x5b24ac(0x5cc)][_0x5b24ac(0x589)]('|');let _0x597ace=0xebe+0x3dc+-0x129a*0x1;while(!![]){switch(_0x1d7c82[_0x597ace++]){case'0':if(this[_0x5b24ac(0x72b)][_0x5b24ac(0x426)]){if(this[_0x5b24ac(0x72b)][_0x5b24ac(0x426)]())return![];if(this[_0x5b24ac(0x72b)][_0x5b24ac(0x40f)]())return![];}continue;case'1':return this[_0x5b24ac(0x627)]();case'2':if(this[_0x5b24ac(0x72b)]['_erased'])return![];continue;case'3':if(this[_0x5b24ac(0x72b)][_0x5b24ac(0x235)+_0x5b24ac(0x533)]&&_0x58a651['LWLQC'](this['_source'][_0x5b24ac(0x235)+_0x5b24ac(0x533)](),'')){if(this['_originSpr'+_0x5b24ac(0x6f3)]&&!this[_0x5b24ac(0x6e1)+'ite'][_0x5b24ac(0x34b)])return![];}continue;case'4':if(_0x58a651[_0x5b24ac(0x221)](this[_0x5b24ac(0x72b)][_0x5b24ac(0x4a3)+'r'],Game_Follower)){if(!this[_0x5b24ac(0x72b)][_0x5b24ac(0x68f)]())return![];if(!this[_0x5b24ac(0x72b)][_0x5b24ac(0x6e3)]())return![];}continue;case'5':if(!this[_0x5b24ac(0x72b)])return![];continue;case'6':if(_0x58a651[_0x5b24ac(0x221)](this[_0x5b24ac(0x72b)],$gamePlayer)){if($gamePlayer['isInVehicl'+'e']())return![];}continue;case'7':if(!this[_0x5b24ac(0x5b1)]())return![];continue;}break;}};function Sprite_RadialLight(){this['initialize'](...arguments);}Sprite_RadialLight[_0x4b43fd(0x62d)]=Object[_0x4b43fd(0x61d)](Sprite_LightBase['prototype']),Sprite_RadialLight[_0x4b43fd(0x62d)][_0x4b43fd(0x4a3)+'r']=Sprite_RadialLight,Sprite_RadialLight[_0x4b43fd(0x62d)]['initialize']=function(_0x2d5c54,_0x1bd644){const _0x3b3ad7=_0x4b43fd;Sprite_LightBase[_0x3b3ad7(0x62d)][_0x3b3ad7(0x645)]['call'](this,_0x2d5c54,_0x1bd644);},Sprite_RadialLight['prototype'][_0x4b43fd(0x5b1)]=function(){const _0x3adbf9=_0x4b43fd;return this[_0x3adbf9(0x72b)]?this[_0x3adbf9(0x72b)][_0x3adbf9(0x2b3)+'t']():{};},Sprite_RadialLight[_0x4b43fd(0x62d)][_0x4b43fd(0x41d)+'ta']=function(){const _0xa7d52a=_0x4b43fd;return this[_0xa7d52a(0x72b)]?this[_0xa7d52a(0x72b)][_0xa7d52a(0x2b3)+'tBehavior']():{};},Sprite_RadialLight['prototype']['getRadius']=function(_0x4e3d4f){const _0x2695bc=_0x4b43fd,_0x535193={'ldcAm':function(_0x4316c0,_0x111de0){return _0x4316c0+_0x111de0;}};let _0x10e3a2=_0x4e3d4f['radius'];if(_0x4e3d4f[_0x2695bc(0x594)]){let _0x591428=this['_originSpr'+'ite'];if(this[_0x2695bc(0x6e1)+_0x2695bc(0x6f3)][_0x2695bc(0x6c9)+'e'])_0x591428=_0x591428;let _0x40a3cc=_0x535193[_0x2695bc(0x689)](Math[_0x2695bc(0x457)](_0x591428['width'],-0x91*-0xb+0x8*-0x466+0x5*0x5cb),Math[_0x2695bc(0x457)](_0x591428[_0x2695bc(0x401)],0x1120+0x2000*-0x1+0xee2));_0x40a3cc=Math[_0x2695bc(0x457)](_0x40a3cc,0x1*-0x1585+0x353*-0xa+0x1*0x36c3+0.5),_0x40a3cc/=-0x112f*-0x2+0x427*0x5+0x67*-0x89,_0x10e3a2=Math[_0x2695bc(0x452)](_0x40a3cc,_0x10e3a2);}return _0x10e3a2;},Sprite_RadialLight[_0x4b43fd(0x62d)][_0x4b43fd(0x519)+_0x4b43fd(0x629)]=function(){const _0x12a2a7=_0x4b43fd,_0x34a565={'SgFoB':function(_0x154f2b,_0x16e372){return _0x154f2b!==_0x16e372;},'iOQVX':function(_0x2aa60a,_0x36b47c){return _0x2aa60a!==_0x36b47c;},'xitlv':function(_0x30018e,_0x2f86ae){return _0x30018e!==_0x2f86ae;},'tyEVP':function(_0x159a38,_0xb96ad0){return _0x159a38!==_0xb96ad0;},'OteUD':function(_0x209a0a,_0x2f7d4d){return _0x209a0a!==_0x2f7d4d;}},_0x145639=this['lightData']();if(_0x34a565[_0x12a2a7(0x400)](this[_0x12a2a7(0x3c4)+'ed'],_0x145639[_0x12a2a7(0x528)]))return!![];if(_0x34a565[_0x12a2a7(0x28e)](this[_0x12a2a7(0x6a2)+'ame'],_0x145639[_0x12a2a7(0x4d4)]))return!![];if(_0x34a565[_0x12a2a7(0x63d)](this[_0x12a2a7(0x44d)+'s'],this[_0x12a2a7(0x399)](_0x145639)))return!![];if(_0x34a565[_0x12a2a7(0x695)](this['_lastColor'],_0x145639[_0x12a2a7(0x2aa)]))return!![];if(_0x34a565[_0x12a2a7(0x2e8)](this[_0x12a2a7(0x1f9)+_0x12a2a7(0x224)],_0x145639[_0x12a2a7(0x74f)]))return!![];return Sprite_LightBase[_0x12a2a7(0x62d)][_0x12a2a7(0x519)+_0x12a2a7(0x629)][_0x12a2a7(0x752)](this);},Sprite_RadialLight[_0x4b43fd(0x62d)][_0x4b43fd(0x3f4)+'ta']=function(){const _0x176de3=_0x4b43fd,_0x1ac98b=this[_0x176de3(0x5b1)]();this[_0x176de3(0x3c4)+'ed']=_0x1ac98b['enabled'],this[_0x176de3(0x6a2)+_0x176de3(0x533)]=_0x1ac98b[_0x176de3(0x4d4)],this[_0x176de3(0x44d)+'s']=this[_0x176de3(0x399)](_0x1ac98b),this[_0x176de3(0x485)]=_0x1ac98b[_0x176de3(0x2aa)],this['_lastInten'+_0x176de3(0x224)]=_0x1ac98b[_0x176de3(0x74f)];},Sprite_RadialLight['prototype'][_0x4b43fd(0x2f5)+_0x4b43fd(0x612)]=function(_0x5b3b94){const _0x3dd02a=_0x4b43fd,_0xe25895={'uYsKp':function(_0x92eb87,_0x2d1862){return _0x92eb87*_0x2d1862;}},_0x17bc37=this[_0x3dd02a(0x399)](_0x5b3b94),_0x54adec=ColorManager['presetColo'+_0x3dd02a(0x3bc)](_0x5b3b94[_0x3dd02a(0x2aa)]),_0x402d12=_0x5b3b94[_0x3dd02a(0x74f)],_0x52a15b=_0xe25895['uYsKp'](Math[_0x3dd02a(0x1e1)](_0x17bc37),-0x1*-0x24f5+0x9ef*-0x2+-0x1115*0x1),_0x386d1f=new Bitmap(_0x52a15b,_0x52a15b);return _0x386d1f['drawRadial'+_0x3dd02a(0x311)](_0x17bc37,_0x54adec,_0x402d12),_0x386d1f;},Sprite_RadialLight['prototype']['updateAngl'+'e']=function(){const _0x425620=_0x4b43fd;this[_0x425620(0x4df)]=-this[_0x425620(0x5b1)]()[_0x425620(0x4df)]||-0x2241+-0x5b*0x56+0x40d3*0x1,this['lightData']()[_0x425620(0x4df)]-=this[_0x425620(0x5b1)]()[_0x425620(0x423)+'d']||-0x20b4+0x1367+0xd4d;};function Sprite_ConicalLight(){const _0x531bd8=_0x4b43fd;this[_0x531bd8(0x645)](...arguments);}Sprite_ConicalLight[_0x4b43fd(0x62d)]=Object[_0x4b43fd(0x61d)](Sprite_LightBase['prototype']),Sprite_ConicalLight[_0x4b43fd(0x62d)][_0x4b43fd(0x4a3)+'r']=Sprite_ConicalLight,Sprite_ConicalLight['prototype'][_0x4b43fd(0x645)]=function(_0x6b6044,_0x4a2b31){const _0x5323a5=_0x4b43fd;Sprite_LightBase[_0x5323a5(0x62d)][_0x5323a5(0x645)][_0x5323a5(0x752)](this,_0x6b6044,_0x4a2b31),this[_0x5323a5(0x51d)+'FlareSprit'+'e'](),this[_0x5323a5(0x600)+_0x5323a5(0x6ac)]=0xfc6+0xe91*0x1+-0x1e53;},Sprite_ConicalLight[_0x4b43fd(0x62d)]['createLens'+_0x4b43fd(0x4be)+'e']=function(){const _0x52d252=_0x4b43fd,_0x3ee601={'Lwsdr':'1|0|8|5|3|'+_0x52d252(0x50a)+'10'},_0x2e1bb8=_0x3ee601['Lwsdr'][_0x52d252(0x589)]('|');let _0x18c6ed=0x16fd+0x44*-0x22+-0x3*0x4a7;while(!![]){switch(_0x2e1bb8[_0x18c6ed++]){case'0':return;case'1':if(!Imported[_0x52d252(0x6bb)+'eatherEffe'+_0x52d252(0x407)])return;continue;case'2':this['_lensFlare'+_0x52d252(0x41c)]['scale']['y']=0x71f*-0x1+-0x10*-0xd3+-0x611+0.6;continue;case'3':this[_0x52d252(0x6c1)+_0x52d252(0x41c)][_0x52d252(0x46e)]=-0x84f+0x9f1+-0x3*0x8b;continue;case'4':this[_0x52d252(0x6c1)+'Sprite'][_0x52d252(0x344)]['x']=0x1*0x247c+0x339+-0x5f*0x6b+0.6;continue;case'5':this[_0x52d252(0x6c1)+_0x52d252(0x41c)][_0x52d252(0x42d)]=ImageManager[_0x52d252(0x3b7)+_0x52d252(0x628)+_0x52d252(0x6a9)]();continue;case'6':this['_lensFlare'+_0x52d252(0x41c)][_0x52d252(0x5bd)]['x']=-0x4*0x610+0x7cf+0x45*0x3d+0.5;continue;case'7':this[_0x52d252(0x6c1)+_0x52d252(0x41c)][_0x52d252(0x34b)]=![];continue;case'8':this[_0x52d252(0x6c1)+_0x52d252(0x41c)]=new Sprite();continue;case'9':this[_0x52d252(0x6c1)+_0x52d252(0x41c)][_0x52d252(0x5bd)]['y']=0x1191+-0x123a+0xd*0xd+0.5;continue;case'10':this[_0x52d252(0x2db)](this['_lensFlare'+'Sprite']);continue;}break;}},Sprite_ConicalLight[_0x4b43fd(0x62d)][_0x4b43fd(0x5b1)]=function(){const _0x3f5f2e=_0x4b43fd;return this[_0x3f5f2e(0x72b)]?this['_source'][_0x3f5f2e(0x5d6)+'ht']():{};},Sprite_ConicalLight['prototype'][_0x4b43fd(0x41d)+'ta']=function(){const _0xdeffe1=_0x4b43fd;return this['_source']?this[_0xdeffe1(0x72b)][_0xdeffe1(0x5d6)+_0xdeffe1(0x4e2)]():{};},Sprite_ConicalLight[_0x4b43fd(0x62d)]['handOffset'+_0x4b43fd(0x3d0)]=function(){const _0x2b5940=_0x4b43fd;return this[_0x2b5940(0x72b)]?this['_source']['conicalLig'+_0x2b5940(0x3fc)]():{};},Sprite_ConicalLight['prototype'][_0x4b43fd(0x519)+_0x4b43fd(0x629)]=function(){const _0x42acbb=_0x4b43fd,_0x366442={'WxMrh':function(_0x592b61,_0x50ded1){return _0x592b61!==_0x50ded1;},'PwDmR':function(_0x102143,_0x2957e2){return _0x102143!==_0x2957e2;},'kYkSv':function(_0x577c7e,_0x527d98){return _0x577c7e!==_0x527d98;},'pGXIm':function(_0x41d049,_0x357034){return _0x41d049!==_0x357034;},'eTGVl':function(_0x422593,_0x2a3277){return _0x422593!==_0x2a3277;}},_0x5bba2e=this[_0x42acbb(0x5b1)]();if(_0x366442[_0x42acbb(0x6a7)](this[_0x42acbb(0x3c4)+'ed'],_0x5bba2e[_0x42acbb(0x528)]))return!![];if(_0x366442[_0x42acbb(0x492)](this[_0x42acbb(0x6a2)+_0x42acbb(0x533)],_0x5bba2e[_0x42acbb(0x4d4)]))return!![];if(_0x366442['kYkSv'](this[_0x42acbb(0x44d)+'s'],_0x5bba2e['radius']))return!![];if(_0x366442[_0x42acbb(0x6a7)](this[_0x42acbb(0x485)],_0x5bba2e['color']))return!![];if(_0x366442[_0x42acbb(0x576)](this[_0x42acbb(0x1f9)+_0x42acbb(0x224)],_0x5bba2e['intensity']))return!![];if(_0x366442[_0x42acbb(0x492)](this[_0x42acbb(0x267)],_0x5bba2e[_0x42acbb(0x4df)]))return!![];if(_0x366442[_0x42acbb(0x67f)](this[_0x42acbb(0x265)+_0x42acbb(0x274)],_0x5bba2e[_0x42acbb(0x496)]))return!![];return Sprite_LightBase[_0x42acbb(0x62d)]['needsRecre'+_0x42acbb(0x629)][_0x42acbb(0x752)](this);},Sprite_ConicalLight[_0x4b43fd(0x62d)]['cacheNewDa'+'ta']=function(){const _0x531c5b=_0x4b43fd,_0x2b4205=this[_0x531c5b(0x5b1)]();this[_0x531c5b(0x3c4)+'ed']=_0x2b4205[_0x531c5b(0x528)],this[_0x531c5b(0x6a2)+_0x531c5b(0x533)]=_0x2b4205[_0x531c5b(0x4d4)],this[_0x531c5b(0x44d)+'s']=_0x2b4205['radius'],this[_0x531c5b(0x485)]=_0x2b4205[_0x531c5b(0x2aa)],this['_lastInten'+_0x531c5b(0x224)]=_0x2b4205[_0x531c5b(0x74f)],this['_lastAngle']=_0x2b4205[_0x531c5b(0x4df)],this[_0x531c5b(0x265)+_0x531c5b(0x274)]=_0x2b4205[_0x531c5b(0x496)];},Sprite_ConicalLight['prototype'][_0x4b43fd(0x3dc)+'ap']=function(){const _0x40d2c3=_0x4b43fd,_0x147fc5={'dAwsh':function(_0x2f7b32,_0xe64ac){return _0x2f7b32!==_0xe64ac;}};Sprite_LightBase[_0x40d2c3(0x62d)][_0x40d2c3(0x3dc)+'ap']['call'](this),this[_0x40d2c3(0x1e4)+'InputX']=TouchInput['x'],this[_0x40d2c3(0x1e4)+_0x40d2c3(0x5d0)]=TouchInput['y'],this[_0x40d2c3(0x600)+_0x40d2c3(0x61a)]=![],this['_lastInput'+_0x40d2c3(0x706)]=!![],this[_0x40d2c3(0x600)+'Timer']=0x3*-0x377+-0x22e*-0x5+0x19*-0x5,this[_0x40d2c3(0x524)]=Math[_0x40d2c3(0x5eb)](0x1*0x124b31+-0x48*0x11c8+0x1f74f);const _0x240906=this[_0x40d2c3(0x5b1)]();_0x147fc5['dAwsh'](_0x240906[_0x40d2c3(0x4d4)],'')?(this['anchor']['x']=_0x240906[_0x40d2c3(0x591)+'X'],this[_0x40d2c3(0x5bd)]['y']=_0x240906['fileAnchor'+'Y']):(this[_0x40d2c3(0x5bd)]['x']=0x3*-0x55d+-0x5*-0x6d7+-0x4c*0x3d+0.5,this[_0x40d2c3(0x5bd)]['y']=0x47*0x3b+0x1069*0x1+-0x20c6+0.5);},Sprite_ConicalLight['prototype'][_0x4b43fd(0x2f5)+_0x4b43fd(0x612)]=function(_0x16d4d4){const _0x4ee386=_0x4b43fd,_0x45fd2c={'uzioW':function(_0x61f988,_0x578d27){return _0x61f988*_0x578d27;},'aKpnD':function(_0x1d1f1d,_0x33be13){return _0x1d1f1d*_0x33be13;},'YMmrE':function(_0x318927,_0x46a726){return _0x318927-_0x46a726;},'dzAdp':function(_0x39d587,_0x3e4722){return _0x39d587/_0x3e4722;}},_0xb9cd20=_0x16d4d4['radius'],_0x3ef594=ColorManager[_0x4ee386(0x758)+_0x4ee386(0x3bc)](_0x16d4d4[_0x4ee386(0x2aa)]),_0x4a2c3d=_0x16d4d4[_0x4ee386(0x74f)],_0x4af6ec=_0x16d4d4[_0x4ee386(0x4df)],_0xb8ec22=_0x45fd2c[_0x4ee386(0x748)](_0xb9cd20,-0x1*-0x9f9+0x2011*0x1+-0x2a08),_0x3579db=-0x223b+-0x1*-0xc9a+0x2*0xad1,_0x569abc=0x2*-0x11dd+0x1fe0+0x2*0x1ed,_0x136043=new Bitmap(_0xb8ec22,_0xb8ec22);_0x136043[_0x4ee386(0x6de)+_0x4ee386(0x305)](_0xb9cd20,_0x4af6ec,_0x3ef594,_0x4a2c3d,_0x3579db,_0x569abc);const _0x29999b=_0x16d4d4[_0x4ee386(0x496)],_0x2b4d38=_0x45fd2c[_0x4ee386(0x367)](_0x29999b,-0x3*-0x3b7+0x1*0x1ead+0xc*-0x37c),_0x5643d5=new Bitmap(_0x2b4d38,_0x2b4d38);_0x5643d5[_0x4ee386(0x1fa)+_0x4ee386(0x311)](_0x29999b,_0x3ef594,_0x4a2c3d);const _0x4d230f=_0x45fd2c['YMmrE'](Math['floor'](_0x45fd2c[_0x4ee386(0x381)](_0xb8ec22,-0xe9+-0xdda+0xec5)),_0x29999b);return _0x136043[_0x4ee386(0x41e)](_0x5643d5,-0x1b3b*0x1+-0x133*-0x11+0x6d8,0xfbb+0x185b*-0x1+0x2*0x450,_0x2b4d38,_0x2b4d38,_0x4d230f,_0x4d230f,_0x2b4d38,_0x2b4d38),_0x136043;},Sprite_ConicalLight['prototype'][_0x4b43fd(0x21e)+_0x4b43fd(0x761)]=function(){const _0x5e5036=_0x4b43fd;if(this[_0x5e5036(0x72b)]['isPosing']&&this[_0x5e5036(0x72b)][_0x5e5036(0x33e)]())return-0xb7c+-0x2411+0x2f8f*0x1;const _0x46c16c=this[_0x5e5036(0x5b1)]();return _0x46c16c[_0x5e5036(0x559)+_0x5e5036(0x6c6)]?_0x46c16c['forceDirec'+_0x5e5036(0x6c6)]:this[_0x5e5036(0x72b)]['_direction'];},Sprite_ConicalLight[_0x4b43fd(0x62d)][_0x4b43fd(0x3b6)+'e']=function(){const _0x504398=_0x4b43fd;this['updateLast'+_0x504398(0x50d)]();if(this[_0x504398(0x600)+_0x504398(0x706)])this['updateChar'+_0x504398(0x284)]();else this[_0x504398(0x600)+_0x504398(0x61a)]?this[_0x504398(0x33f)+'orAngle']():this[_0x504398(0x4df)]=0x18*0x166+0x1a4d+-0x5*0xbf9;this['updateLens'+_0x504398(0x4be)+'e']();},Sprite_ConicalLight[_0x4b43fd(0x62d)][_0x4b43fd(0x71f)+'InputType']=function(){const _0x2da1c9=_0x4b43fd,_0xd0dc27={'ZhtmS':'down','KCwpT':_0x2da1c9(0x64d),'TJDNJ':_0x2da1c9(0x66f),'DGiLy':function(_0x3c899b,_0x45aeaa){return _0x3c899b!==_0x45aeaa;},'HwcMy':function(_0x24fcdc,_0x21724d){return _0x24fcdc!==_0x21724d;},'TieiM':function(_0x40a111,_0x24f108){return _0x40a111!==_0x24f108;}};if(this[_0x2da1c9(0x2c0)+_0x2da1c9(0x241)+_0x2da1c9(0x1fe)]()){if($gameTemp['isDestinat'+'ionValid']()||['up',_0xd0dc27['ZhtmS'],_0xd0dc27['KCwpT'],_0xd0dc27[_0x2da1c9(0x5fa)]][_0x2da1c9(0x555)](_0x5f50a4=>Input[_0x2da1c9(0x59f)](_0x5f50a4)))this[_0x2da1c9(0x600)+_0x2da1c9(0x61a)]=![],this[_0x2da1c9(0x600)+_0x2da1c9(0x706)]=!![],this[_0x2da1c9(0x600)+_0x2da1c9(0x6ac)]=0x14f7+0x1c72+0x9e1*-0x5;else{if(this[_0x2da1c9(0x5b1)]()['followMous'+'e']&&(_0xd0dc27[_0x2da1c9(0x286)](this['_lastTouch'+_0x2da1c9(0x314)],TouchInput['x'])||_0xd0dc27[_0x2da1c9(0x286)](this['_lastTouch'+_0x2da1c9(0x5d0)],TouchInput['y']))){if(this[_0x2da1c9(0x600)+_0x2da1c9(0x6ac)]--)return;this['_lastInput'+_0x2da1c9(0x61a)]=!![],this[_0x2da1c9(0x600)+_0x2da1c9(0x706)]=![];}}}else _0xd0dc27[_0x2da1c9(0x239)](this['_source'],$gamePlayer)&&_0xd0dc27['TieiM'](this['_source'],$gamePlayer[_0x2da1c9(0x3aa)]())&&(this[_0x2da1c9(0x600)+_0x2da1c9(0x61a)]=this[_0x2da1c9(0x5b1)]()[_0x2da1c9(0x564)+'e'],this[_0x2da1c9(0x600)+_0x2da1c9(0x706)]=!this[_0x2da1c9(0x5b1)]()[_0x2da1c9(0x564)+'e']);},Sprite_ConicalLight[_0x4b43fd(0x62d)][_0x4b43fd(0x2c0)+_0x4b43fd(0x241)+'pdate']=function(){const _0x57671a=_0x4b43fd,_0x5b1397={'qTXRh':function(_0x19f691,_0x3a5d87){return _0x19f691===_0x3a5d87;},'vowNp':_0x57671a(0x243),'NLPcP':function(_0x320c47,_0x4460d2){return _0x320c47<=_0x4460d2;},'EyjRo':function(_0x15f90b,_0x3bba87){return _0x15f90b===_0x3bba87;},'stjRm':function(_0x497fff,_0x54f8eb){return _0x497fff===_0x54f8eb;}};if(_0x5b1397[_0x57671a(0x4c0)]($gameScreen[_0x57671a(0x3b1)+_0x57671a(0x449)](),_0x5b1397[_0x57671a(0x209)]))return![];if(_0x5b1397['NLPcP']($gameScreen[_0x57671a(0x3b1)+_0x57671a(0x693)+'ty'](),0x1336+-0x3*0xbbd+0xf1*0x11))return![];return _0x5b1397[_0x57671a(0x342)](this['_source'],$gamePlayer)||_0x5b1397['stjRm'](this['_source'],$gamePlayer['vehicle']());},Sprite_ConicalLight['prototype'][_0x4b43fd(0x33f)+_0x4b43fd(0x6aa)]=function(){const _0x5bd174=_0x4b43fd,_0x221c44={'vOUom':function(_0x1b5487,_0x2f4e54){return _0x1b5487===_0x2f4e54;},'dRsNi':function(_0x2e0427,_0x568a93){return _0x2e0427===_0x568a93;},'siawi':function(_0x8eea50,_0x49764d){return _0x8eea50/_0x49764d;},'mGvEm':function(_0x5eaecc,_0x1a6e75){return _0x5eaecc*_0x1a6e75;},'bOdeJ':function(_0x2779af,_0x3b58d8){return _0x2779af===_0x3b58d8;},'bHtsQ':function(_0x5e3101,_0xc678d2){return _0x5e3101/_0xc678d2;},'OPLjd':'#ffffff','WvDQU':function(_0x33e649,_0x1e24be){return _0x33e649<=_0x1e24be;},'iVlJX':function(_0x1f2323,_0xf5cb27){return _0x1f2323===_0xf5cb27;}};if(_0x221c44[_0x5bd174(0x2be)](this[_0x5bd174(0x72b)],$gamePlayer)||_0x221c44['dRsNi'](this[_0x5bd174(0x72b)],$gamePlayer['vehicle']())){if($gameMap[_0x5bd174(0x671)+'ning']()||$gameMessage[_0x5bd174(0x205)]())return;}this['_lastTouch'+_0x5bd174(0x314)]=TouchInput['x'],this[_0x5bd174(0x1e4)+'InputY']=TouchInput['y'];const _0x224c4f=new Point(TouchInput['x'],TouchInput['y']),_0x6e3600=this[_0x5bd174(0x6e1)+'ite'][_0x5bd174(0x6cd)+_0x5bd174(0x340)][_0x5bd174(0x2f2)+'se'](_0x224c4f),_0x36fda4=this[_0x5bd174(0x5b1)]();let _0x44e855=_0x221c44[_0x5bd174(0x290)](_0x221c44[_0x5bd174(0x225)](Math[_0x5bd174(0x1f1)](_0x6e3600['y'],_0x6e3600['x']),-0x2*-0x30f+-0x24ba+0x1f50),Math['PI']);_0x221c44[_0x5bd174(0x469)](_0x36fda4[_0x5bd174(0x4d4)],'')?_0x44e855-=_0x221c44[_0x5bd174(0x310)](_0x36fda4[_0x5bd174(0x4df)],0x1*-0x20a1+-0x5b*-0xa+-0x1d15*-0x1):_0x44e855-=_0x36fda4[_0x5bd174(0x1f7)+_0x5bd174(0x3e2)];this[_0x5bd174(0x4df)]=_0x44e855;if(!this[_0x5bd174(0x72b)][_0x5bd174(0x356)+_0x5bd174(0x21b)]()){if(_0x221c44['vOUom'](this[_0x5bd174(0x72b)],$gamePlayer)&&$gamePlayer['isInVehicl'+'e']())return;if(_0x221c44['vOUom']($gameScreen[_0x5bd174(0x3b1)+'erlayColor'](),_0x221c44[_0x5bd174(0x6b4)]))return;if(_0x221c44[_0x5bd174(0x63b)]($gameScreen['lightingOv'+_0x5bd174(0x693)+'ty'](),0xe99*-0x1+0xb67+0x332))return;let _0x1d0027=this['_source'];if(_0x221c44['iVlJX'](this[_0x5bd174(0x72b)],$gamePlayer[_0x5bd174(0x3aa)]()))_0x1d0027=$gamePlayer;const _0x18edb0=$gameMap[_0x5bd174(0x218)+'pX'](TouchInput['x']),_0x3d968c=$gameMap['canvasToMa'+'pY'](TouchInput['y']);_0x1d0027[_0x5bd174(0x5fb)+'Point'](_0x18edb0,_0x3d968c);}},Sprite_ConicalLight[_0x4b43fd(0x62d)][_0x4b43fd(0x3c0)+_0x4b43fd(0x284)]=function(){const _0x42c0c4=_0x4b43fd,_0x379ffe={'hdqyo':function(_0x3d5597,_0x2576cf){return _0x3d5597===_0x2576cf;},'AcTSc':function(_0xb37c78,_0x29b4e2){return _0xb37c78/_0x29b4e2;},'vBZcU':function(_0x8dae57,_0x40522c){return _0x8dae57+_0x40522c;},'lHbxa':function(_0x4073a4,_0x5b7767){return _0x4073a4*_0x5b7767;},'jtgkg':function(_0x49ade0,_0x524aae){return _0x49ade0*_0x524aae;}},_0x8ef346=this[_0x42c0c4(0x5b1)]();let _0x46803f=-0x208*-0x10+-0x1*0xef4+-0x4*0x463;_0x379ffe['hdqyo'](_0x8ef346[_0x42c0c4(0x4d4)],'')?_0x46803f-=_0x379ffe[_0x42c0c4(0x667)](_0x8ef346[_0x42c0c4(0x4df)],0x19*-0x123+-0x1982+0x35ef):_0x46803f-=_0x8ef346[_0x42c0c4(0x1f7)+_0x42c0c4(0x3e2)]||0x129e+0xcf1*-0x1+-0x1*0x5ad;const _0x287a6a=this['getSourceD'+_0x42c0c4(0x761)]();_0x46803f+=[0x1*0x679+-0x5*-0x51c+-0x493*0x7,-0x1c7+0x26f3+-0x24a5,-0x2424+0x2c4+0xb3e*0x3,-0x93f+-0xe33+-0x1*-0x179f,0xb0b+-0xa4d+0xa*-0x1,-0x1*0x10a3+0x1925*-0x1+-0x539*-0x8,0x79d*-0x3+-0x2d7*-0x2+0x1129,0x1153*-0x1+0x1*0x2259+-0x1025,-0x4a5+-0x7*0x503+0x28c8,-0x61e+-0x1054+0x17ad][_0x287a6a];if(_0x8ef346[_0x42c0c4(0x4ee)]){const _0x5b32c4=_0x8ef346[_0x42c0c4(0x419)]?this[_0x42c0c4(0x524)]:0x1*-0x1381+-0x1*0x1f94+-0x1107*-0x3,_0x4b32aa=_0x379ffe[_0x42c0c4(0x5bc)](Graphics[_0x42c0c4(0x759)],_0x5b32c4),_0x1353e7=_0x8ef346[_0x42c0c4(0x4ed)];_0x46803f+=_0x379ffe[_0x42c0c4(0x6a0)](Math['cos'](_0x379ffe[_0x42c0c4(0x479)](_0x4b32aa,_0x1353e7)),_0x8ef346[_0x42c0c4(0x4ee)]);}this[_0x42c0c4(0x4df)]=_0x46803f;},Sprite_ConicalLight['prototype'][_0x4b43fd(0x4e7)+_0x4b43fd(0x4be)+'e']=function(){const _0x13a923=_0x4b43fd,_0x89043b={'SdOBD':function(_0x2dfe59,_0x2df549){return _0x2dfe59===_0x2df549;},'CVdxs':function(_0x3b9b45,_0x582b71){return _0x3b9b45/_0x582b71;}};if(!this[_0x13a923(0x6c1)+_0x13a923(0x41c)])return;const _0x13bd41=this['getSourceD'+'irection']();this[_0x13a923(0x6c1)+_0x13a923(0x41c)][_0x13a923(0x34b)]=_0x89043b['SdOBD'](_0x13bd41,-0xd*-0x53+0x849+-0xc7e),this[_0x13a923(0x6c1)+_0x13a923(0x41c)][_0x13a923(0x4df)]=_0x89043b[_0x13a923(0x4fa)](this['angle'],0x214c+0x4e1*-0x4+-0xdc6*0x1);},Sprite_ConicalLight[_0x4b43fd(0x62d)][_0x4b43fd(0x55e)+_0x4b43fd(0x6c6)]=function(){const _0x15d6d8=_0x4b43fd,_0x4b9e86=this[_0x15d6d8(0x5b1)]();_0x4b9e86[_0x15d6d8(0x76a)+_0x15d6d8(0x38b)]?this[_0x15d6d8(0x539)+_0x15d6d8(0x656)]():Sprite_LightBase[_0x15d6d8(0x62d)][_0x15d6d8(0x55e)+_0x15d6d8(0x6c6)][_0x15d6d8(0x752)](this);},Sprite_ConicalLight[_0x4b43fd(0x62d)][_0x4b43fd(0x539)+'Position']=function(){const _0x5d499d=_0x4b43fd,_0x51da6f={'UPmZz':function(_0x36dd1c,_0x46abf9){return _0x36dd1c(_0x46abf9);},'QQtkh':function(_0xaf796f,_0x215af6){return _0xaf796f===_0x215af6;},'PONbW':_0x5d499d(0x692),'tXVPG':_0x5d499d(0x4db),'cvBWf':'pattern%1Y','QSgwk':function(_0x532a5f,_0xdb056b){return _0x532a5f-_0xdb056b;},'jIElg':function(_0x12d852,_0x3f5760){return _0x12d852/_0x3f5760;}},_0x42344e=this[_0x5d499d(0x270)+_0x5d499d(0x3d0)](),_0x263403=this['_originSpr'+_0x5d499d(0x6f3)];let _0x5584e7=(_0x51da6f['UPmZz'](Number,this[_0x5d499d(0x21e)+_0x5d499d(0x761)]())||-0x4*0x3aa+-0x1c8d+0x2b37)[_0x5d499d(0x68b)](-0x1e5d+-0x9*0x3b7+-0xaa2*-0x6,0x10*0xe+-0x322*0xb+0x219f);if(_0x51da6f[_0x5d499d(0x36f)](_0x5584e7,-0x1216+0x147b+-0x265)||_0x51da6f[_0x5d499d(0x36f)](_0x5584e7,-0xd0a+-0x20e7*-0x1+-0x13d8))_0x5584e7=-0x24c5+0x16*0x36+-0x1b1*-0x13;const _0x130457=_0x51da6f[_0x5d499d(0x384)]['format'](_0x5584e7),_0x4fd16e=_0x51da6f[_0x5d499d(0x65d)]['format'](this['_source'][_0x5d499d(0x3ff)]()||0x1d1d*0x1+0x1e7f+-0x3b9c),_0x1fe224=_0x51da6f[_0x5d499d(0x43b)][_0x5d499d(0x493)](this[_0x5d499d(0x72b)]['pattern']()||0x4e0*0x1+0x3d7*0x2+-0x1*0xc8e),_0x52f1cb=(_0x42344e[_0x130457]||{})[_0x4fd16e]||-0x1*0x32b+-0x2*-0x2de+-0x291,_0x3c12c4=(_0x42344e[_0x130457]||{})[_0x1fe224]||-0x7*0x26f+-0x29f+-0x11*-0x128;this['x']=_0x263403['x'],this['x']+=_0x52f1cb,this['y']=_0x51da6f['QSgwk'](_0x263403['y'],Math[_0x5d499d(0x29a)](_0x51da6f[_0x5d499d(0x50f)](_0x263403[_0x5d499d(0x401)],0x1*-0x16a6+0x1ceb+-0x1*0x643))),this['y']+=_0x3c12c4;},Sprite_ConicalLight[_0x4b43fd(0x62d)][_0x4b43fd(0x39f)+'ible']=function(){const _0x46a23f=_0x4b43fd;if(!Sprite_LightBase[_0x46a23f(0x62d)][_0x46a23f(0x39f)+'ible'][_0x46a23f(0x752)](this))return![];if(!this[_0x46a23f(0x5b1)]())return![];return this[_0x46a23f(0x627)]();};function Sprite_LightSpawn(){const _0x1c109a=_0x4b43fd;this[_0x1c109a(0x645)](...arguments);}Sprite_LightSpawn[_0x4b43fd(0x62d)]=Object[_0x4b43fd(0x61d)](Sprite_RadialLight['prototype']),Sprite_LightSpawn[_0x4b43fd(0x62d)][_0x4b43fd(0x4a3)+'r']=Sprite_LightSpawn,Sprite_LightSpawn['prototype'][_0x4b43fd(0x645)]=function(_0x978ee1){const _0x404bb9=_0x4b43fd;Sprite_RadialLight['prototype'][_0x404bb9(0x645)][_0x404bb9(0x752)](this,_0x978ee1,null);},Sprite_LightSpawn['prototype']['lightData']=function(){const _0x5876bf=_0x4b43fd;return this[_0x5876bf(0x72b)]?this[_0x5876bf(0x72b)][_0x5876bf(0x760)]:{};},Sprite_LightSpawn['prototype'][_0x4b43fd(0x41d)+'ta']=function(){const _0x11bd99=_0x4b43fd;return this['_source']?this[_0x11bd99(0x72b)][_0x11bd99(0x53c)]:{};},Sprite_LightSpawn[_0x4b43fd(0x62d)][_0x4b43fd(0x39f)+_0x4b43fd(0x4d2)]=function(){const _0x4c50af=_0x4b43fd;if(this[_0x4c50af(0x72b)]&&!this[_0x4c50af(0x72b)][_0x4c50af(0x5f9)])return![];return Sprite_LightBase[_0x4c50af(0x62d)]['isLightVis'+_0x4c50af(0x4d2)][_0x4c50af(0x752)](this);},Sprite_LightSpawn[_0x4b43fd(0x62d)][_0x4b43fd(0x32d)+_0x4b43fd(0x2af)+'ates']=function(){const _0x2636d1=_0x4b43fd,_0x438d93={'cLmoO':function(_0x299742,_0x3d0500){return _0x299742===_0x3d0500;},'mGIiQ':_0x2636d1(0x4ea)};return this[_0x2636d1(0x72b)]?_0x438d93[_0x2636d1(0x65b)](this[_0x2636d1(0x72b)]['type'],_0x438d93[_0x2636d1(0x43d)]):![];},Sprite_LightSpawn[_0x4b43fd(0x62d)][_0x4b43fd(0x3d7)+'Coordinate'+'s']=function(){const _0x49eb4d=_0x4b43fd,_0x3db819={'AjcKw':function(_0x3a2c3b,_0x292ad4){return _0x3a2c3b===_0x292ad4;},'VsILT':_0x49eb4d(0x2d5)};return this['_source']?_0x3db819[_0x49eb4d(0x3e7)](this['_source'][_0x49eb4d(0x54c)],_0x3db819[_0x49eb4d(0x280)]):![];},Sprite_LightSpawn['prototype'][_0x4b43fd(0x733)+_0x4b43fd(0x6d6)]=function(){const _0x3d264b=_0x4b43fd,_0x5716c5={'PvdCy':function(_0x414d9a,_0x2f7f84){return _0x414d9a===_0x2f7f84;},'IdIVr':_0x3d264b(0x4fb)};return this['_source']?_0x5716c5['PvdCy'](this[_0x3d264b(0x72b)][_0x3d264b(0x54c)],_0x5716c5[_0x3d264b(0x773)]):![];},Sprite_LightSpawn[_0x4b43fd(0x62d)][_0x4b43fd(0x733)+'gFollower']=function(){const _0x5b378d=_0x4b43fd,_0x272337={'wfFvv':function(_0x7759fa,_0x297745){return _0x7759fa===_0x297745;},'RObNI':_0x5b378d(0x402)};return this['_source']?_0x272337['wfFvv'](this[_0x5b378d(0x72b)][_0x5b378d(0x54c)],_0x272337[_0x5b378d(0x5f7)]):![];},Sprite_LightSpawn['prototype'][_0x4b43fd(0x733)+_0x4b43fd(0x2b2)]=function(){const _0x1a4ce7=_0x4b43fd,_0x5bbffb={'uZbar':function(_0x8e2e74,_0x53529e){return _0x8e2e74===_0x53529e;},'nfhuU':_0x1a4ce7(0x237)};return this['_source']?_0x5bbffb[_0x1a4ce7(0x275)](this[_0x1a4ce7(0x72b)][_0x1a4ce7(0x54c)],_0x5bbffb[_0x1a4ce7(0x6fc)]):![];},Sprite_LightSpawn[_0x4b43fd(0x62d)][_0x4b43fd(0x55e)+_0x4b43fd(0x6c6)]=function(){const _0x354f4=_0x4b43fd,_0x27c93e=this[_0x354f4(0x72b)],_0x595688=this[_0x354f4(0x5b1)]();this['x']=_0x27c93e['x'],this['x']+=_0x595688[_0x354f4(0x5fe)],this['y']=_0x27c93e['y'],this['y']+=_0x595688[_0x354f4(0x4b0)],this['adjustPosi'+'tion'](),this['x']=Math[_0x354f4(0x29a)](this['x']),this['y']=Math[_0x354f4(0x29a)](this['y']);},Sprite_LightSpawn[_0x4b43fd(0x62d)][_0x4b43fd(0x348)+'tion']=function(){const _0x59dec0=_0x4b43fd,_0x5234c7={'WalLe':function(_0x3bd8c0,_0x3393c5){return _0x3bd8c0+_0x3393c5;}},_0x4f2d0e=this[_0x59dec0(0x72b)];if(this['isUsingScr'+_0x59dec0(0x2af)+_0x59dec0(0x289)]())this['x']+=_0x4f2d0e[_0x59dec0(0x328)],this['y']+=_0x4f2d0e[_0x59dec0(0x36b)];else{if(this[_0x59dec0(0x3d7)+_0x59dec0(0x61b)+'s']()){let _0x4789c6=_0x5234c7[_0x59dec0(0x3bf)](_0x4f2d0e[_0x59dec0(0x328)],-0x4*-0x8ea+-0x25e2*0x1+0x23a+0.5),_0x3572d0=_0x5234c7[_0x59dec0(0x3bf)](_0x4f2d0e[_0x59dec0(0x36b)],-0x72*-0x6+0x154e*-0x1+-0x1*-0x12a2+0.5);this[_0x59dec0(0x348)+_0x59dec0(0x5c5)](_0x4789c6,_0x3572d0);}else{if(this['isFollowin'+_0x59dec0(0x6d6)]()){const _0x532788=$gamePlayer;this['adjustPosi'+'tionByTarg'+'et'](_0x532788);}else{if(this['isFollowin'+_0x59dec0(0x674)]()){const _0x141d86=$gamePlayer['followers']()['follower'](_0x4f2d0e[_0x59dec0(0x59e)+_0x59dec0(0x25f)]||-0x11e8+0x20c0+-0xed8);this[_0x59dec0(0x348)+'tionByTarg'+'et'](_0x141d86);}else{if(this[_0x59dec0(0x733)+_0x59dec0(0x2b2)]()){const _0x19206e=$gameMap[_0x59dec0(0x237)](_0x4f2d0e[_0x59dec0(0x2a7)]);this[_0x59dec0(0x348)+_0x59dec0(0x658)+'et'](_0x19206e);}}}}}},Sprite_LightSpawn[_0x4b43fd(0x62d)][_0x4b43fd(0x348)+_0x4b43fd(0x5c5)]=function(_0x214713,_0x2fed38,_0x2f1c1f,_0x595757){const _0x34e185=_0x4b43fd,_0x3357f2={'VWEna':_0x34e185(0x2e1)+'3','eBHIg':function(_0x1d2236,_0x14db7){return _0x1d2236||_0x14db7;},'ffGMT':function(_0x338245,_0x4018c7){return _0x338245*_0x4018c7;},'ckKBe':function(_0xe7fe15,_0x44a552){return _0xe7fe15*_0x44a552;},'rPDDf':function(_0x3ad199,_0x5815f4){return _0x3ad199*_0x5815f4;}},_0x193e5c=_0x3357f2[_0x34e185(0x2d1)][_0x34e185(0x589)]('|');let _0x46e160=0xf57+-0x18a8+0x1*0x951;while(!![]){switch(_0x193e5c[_0x46e160++]){case'0':this['x']+=_0x3357f2[_0x34e185(0x37b)](_0x2f1c1f,0x12b6+0xcf7*-0x1+-0x5bf);continue;case'1':this['x']+=Math[_0x34e185(0x2e4)](_0x3357f2[_0x34e185(0x5f3)](_0x214713,$gameMap[_0x34e185(0x521)]()));continue;case'2':this['y']+=Math['floor'](_0x3357f2[_0x34e185(0x5f3)](_0x2fed38,$gameMap['tileHeight']()));continue;case'3':this['y']+=_0x3357f2[_0x34e185(0x37b)](_0x595757,0x633+-0x1a7c+-0x3*-0x6c3);continue;case'4':this['x']+=Math['floor'](_0x3357f2['ckKBe'](-$gameMap[_0x34e185(0x569)](),$gameMap[_0x34e185(0x521)]()));continue;case'5':this['y']+=Math[_0x34e185(0x2e4)](_0x3357f2['rPDDf'](-$gameMap[_0x34e185(0x71a)](),$gameMap[_0x34e185(0x300)]()));continue;}break;}},Sprite_LightSpawn['prototype'][_0x4b43fd(0x348)+_0x4b43fd(0x658)+'et']=function(_0x3a5328){const _0x2d17b1=_0x4b43fd,_0x38d82d={'hvEkz':function(_0x26d902,_0x101b18){return _0x26d902+_0x101b18;},'qmrTg':function(_0x282bbd,_0x1cb5d4){return _0x282bbd/_0x1cb5d4;}};if(!_0x3a5328)return;let _0x353d5b=_0x38d82d[_0x2d17b1(0x5b8)](_0x3a5328[_0x2d17b1(0x5f0)],0x414+-0x4fe+0xea+0.5),_0x1921e8=_0x38d82d['hvEkz'](_0x3a5328[_0x2d17b1(0x720)],-0x212d+0x53+0x20db),_0x43391d=0x7a+0x81b+-0x895,_0x5ed753=0x86d*0x2+0x1299+0x21*-0x113;const _0x2cdf84=SceneManager[_0x2d17b1(0x249)][_0x2d17b1(0x5ea)];if(_0x2cdf84){const _0x203805=_0x2cdf84[_0x2d17b1(0x346)+'Sprite'](_0x3a5328);_0x203805&&(_0x5ed753=-_0x38d82d['qmrTg'](_0x203805[_0x2d17b1(0x401)],-0x1*-0x2313+0x180e+-0xf*0x3f1));}this['adjustPosi'+'tionByMap'](_0x353d5b,_0x1921e8,_0x43391d,_0x5ed753);},VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)]['Spriteset_'+_0x4b43fd(0x364)+_0x4b43fd(0x77a)+'r']=Spriteset_Base[_0x4b43fd(0x62d)][_0x4b43fd(0x298)+_0x4b43fd(0x302)],Spriteset_Base[_0x4b43fd(0x62d)][_0x4b43fd(0x298)+_0x4b43fd(0x302)]=function(){const _0x231c51=_0x4b43fd;this[_0x231c51(0x582)+_0x231c51(0x5ef)+'s'](),VisuMZ[_0x231c51(0x3ba)+_0x231c51(0x4a5)][_0x231c51(0x584)+_0x231c51(0x364)+_0x231c51(0x77a)+'r'][_0x231c51(0x752)](this);},VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)]['Spriteset_'+_0x4b43fd(0x364)+'eUpperLaye'+'r']=Spriteset_Base[_0x4b43fd(0x62d)][_0x4b43fd(0x1e2)+_0x4b43fd(0x302)],Spriteset_Base[_0x4b43fd(0x62d)]['createUppe'+_0x4b43fd(0x302)]=function(){const _0x334bff=_0x4b43fd;this[_0x334bff(0x6d9)+_0x334bff(0x605)]()&&this[_0x334bff(0x582)+'tingEffect'+_0x334bff(0x55c)+'ns'](),VisuMZ['LightingEf'+_0x334bff(0x4a5)]['Spriteset_'+_0x334bff(0x364)+_0x334bff(0x713)+'r'][_0x334bff(0x752)](this);},Spriteset_Base[_0x4b43fd(0x62d)][_0x4b43fd(0x762)+_0x4b43fd(0x611)]=function(){const _0x358209=_0x4b43fd;if(!this['isLighting'+'Enabled']())return;this[_0x358209(0x354)+'ffects']&&this[_0x358209(0x431)+'e'][_0x358209(0x2db)](this[_0x358209(0x354)+_0x358209(0x625)]);},Spriteset_Base[_0x4b43fd(0x62d)][_0x4b43fd(0x582)+'tingEffect'+'s']=function(){const _0x7c81e0=_0x4b43fd;if(!this[_0x7c81e0(0x201)+'Enabled']())return;this[_0x7c81e0(0x354)+_0x7c81e0(0x625)]=new Sprite_LightingEffects(this),this[_0x7c81e0(0x3f1)+_0x7c81e0(0x491)]=this[_0x7c81e0(0x354)+_0x7c81e0(0x625)][_0x7c81e0(0x6d9)+'iner'](),SceneManager['_scene'][_0x7c81e0(0x3f1)+_0x7c81e0(0x491)]=this[_0x7c81e0(0x354)+_0x7c81e0(0x625)][_0x7c81e0(0x6d9)+_0x7c81e0(0x605)]();},Spriteset_Base[_0x4b43fd(0x62d)][_0x4b43fd(0x6d9)+_0x4b43fd(0x605)]=function(){const _0x4a4825=_0x4b43fd;return this[_0x4a4825(0x3f1)+_0x4a4825(0x491)];},Spriteset_Base['prototype'][_0x4b43fd(0x201)+_0x4b43fd(0x652)]=function(){return![];},Spriteset_Base[_0x4b43fd(0x62d)][_0x4b43fd(0x582)+_0x4b43fd(0x5ef)+'sLightSpaw'+'ns']=function(){},Spriteset_Map[_0x4b43fd(0x62d)][_0x4b43fd(0x201)+_0x4b43fd(0x652)]=function(){const _0x4c6de5=_0x4b43fd;return VisuMZ['LightingEf'+_0x4c6de5(0x4a5)][_0x4c6de5(0x5b6)][_0x4c6de5(0x24d)][_0x4c6de5(0x5cb)];},VisuMZ['LightingEf'+_0x4b43fd(0x4a5)][_0x4b43fd(0x584)+_0x4b43fd(0x330)+_0x4b43fd(0x4d3)+'n']=Spriteset_Map['prototype'][_0x4b43fd(0x320)+_0x4b43fd(0x573)],Spriteset_Map[_0x4b43fd(0x62d)][_0x4b43fd(0x320)+_0x4b43fd(0x573)]=function(){const _0x2b27ea=_0x4b43fd;VisuMZ[_0x2b27ea(0x3ba)+_0x2b27ea(0x4a5)][_0x2b27ea(0x584)+_0x2b27ea(0x330)+'Destinatio'+'n'][_0x2b27ea(0x752)](this),this['addLightin'+'gEffects']();},VisuMZ['LightingEf'+_0x4b43fd(0x4a5)][_0x4b43fd(0x584)+_0x4b43fd(0x561)+_0x4b43fd(0x353)]=Spriteset_Map[_0x4b43fd(0x62d)]['hideCharac'+'ters'],Spriteset_Map['prototype'][_0x4b43fd(0x326)+_0x4b43fd(0x638)]=function(){const _0x1ab78c=_0x4b43fd;VisuMZ[_0x1ab78c(0x3ba)+_0x1ab78c(0x4a5)][_0x1ab78c(0x584)+_0x1ab78c(0x561)+'aracters']['call'](this),this[_0x1ab78c(0x354)+'ffects']&&this[_0x1ab78c(0x354)+_0x1ab78c(0x625)][_0x1ab78c(0x299)]();},Spriteset_Map[_0x4b43fd(0x62d)][_0x4b43fd(0x582)+'tingEffect'+_0x4b43fd(0x55c)+'ns']=function(){const _0x44496e=_0x4b43fd,_0x3dfd96=$gameMap['lightSpawn'+'s']();for(const _0x40197d of _0x3dfd96){const _0x40f073=new Sprite_LightSpawn(_0x40197d);SceneManager['addChildTo'+_0x44496e(0x25e)+_0x44496e(0x605)](_0x40f073);}},Spriteset_Battle['prototype'][_0x4b43fd(0x201)+_0x4b43fd(0x652)]=function(){const _0x502695=_0x4b43fd;if(!Imported['VisuMZ_1_B'+_0x502695(0x481)])return![];return VisuMZ[_0x502695(0x3ba)+_0x502695(0x4a5)]['Settings']['Battle'][_0x502695(0x5cb)];},VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)]['Spriteset_'+'Battle_cre'+'ateBattleF'+'ield']=Spriteset_Battle[_0x4b43fd(0x62d)][_0x4b43fd(0x1e3)+'leField'],Spriteset_Battle['prototype'][_0x4b43fd(0x1e3)+_0x4b43fd(0x547)]=function(){const _0x44de39=_0x4b43fd;VisuMZ[_0x44de39(0x3ba)+'fects'][_0x44de39(0x584)+_0x44de39(0x3c7)+'ateBattleF'+'ield'][_0x44de39(0x752)](this),this[_0x44de39(0x762)+_0x44de39(0x611)]();},Spriteset_Battle['prototype']['addLightin'+'gEffects']=function(){const _0x123a97=_0x4b43fd,_0x4de7db={'NpkCd':function(_0x55986f,_0x50ccdc){return _0x55986f/_0x50ccdc;},'UiZgy':function(_0x94cbad,_0x1e290d){return _0x94cbad/_0x1e290d;}};if(!this[_0x123a97(0x201)+_0x123a97(0x652)]())return;this[_0x123a97(0x354)+'ffects']&&(this[_0x123a97(0x77c)+'ld'][_0x123a97(0x2db)](this[_0x123a97(0x354)+'ffects']),this[_0x123a97(0x354)+_0x123a97(0x625)]['x']=_0x4de7db[_0x123a97(0x448)](this['_battleFie'+'ld'][_0x123a97(0x664)],0x1b73*0x1+-0xa0+-0x1ad1),this[_0x123a97(0x354)+_0x123a97(0x625)]['y']=_0x4de7db[_0x123a97(0x471)](this['_battleFie'+'ld'][_0x123a97(0x401)],0xded*-0x2+0x2d*0x31+0x133f));},VisuMZ[_0x4b43fd(0x3ba)+_0x4b43fd(0x4a5)][_0x4b43fd(0x475)+'ions_addGe'+'neralOptio'+'ns']=Window_Options[_0x4b43fd(0x62d)][_0x4b43fd(0x6fa)+_0x4b43fd(0x560)],Window_Options[_0x4b43fd(0x62d)][_0x4b43fd(0x6fa)+_0x4b43fd(0x560)]=function(){const _0x52a942=_0x4b43fd;VisuMZ[_0x52a942(0x3ba)+_0x52a942(0x4a5)][_0x52a942(0x475)+_0x52a942(0x432)+_0x52a942(0x6bc)+'ns']['call'](this),this['addLightin'+_0x52a942(0x46b)+'tionComman'+'ds']();},Window_Options[_0x4b43fd(0x62d)]['addLightin'+_0x4b43fd(0x46b)+_0x4b43fd(0x31a)+'ds']=function(){const _0x327cb9=_0x4b43fd;VisuMZ[_0x327cb9(0x3ba)+_0x327cb9(0x4a5)][_0x327cb9(0x5b6)][_0x327cb9(0x560)][_0x327cb9(0x534)+'gLights']&&this[_0x327cb9(0x762)+_0x327cb9(0x2bd)+_0x327cb9(0x5b5)+_0x327cb9(0x691)](),VisuMZ[_0x327cb9(0x3ba)+_0x327cb9(0x4a5)][_0x327cb9(0x5b6)]['Options'][_0x327cb9(0x64a)+'Lights']&&this['addLightin'+'gEffectsPu'+'lsingLight'+_0x327cb9(0x4bb)]();},Window_Options[_0x4b43fd(0x62d)]['addLightin'+_0x4b43fd(0x2bd)+'inkingLigh'+_0x4b43fd(0x691)]=function(){const _0x4aaf06=_0x4b43fd,_0x2b2065={'zxyPR':_0x4aaf06(0x62f)+_0x4aaf06(0x732)},_0x450b8f=TextManager[_0x4aaf06(0x3ba)+'fectsOptio'+'ns'][_0x4aaf06(0x5e7)+_0x4aaf06(0x732)],_0x4c8efe=_0x2b2065[_0x4aaf06(0x3ca)];this[_0x4aaf06(0x2ad)](_0x450b8f,_0x4c8efe);},Window_Options[_0x4b43fd(0x62d)][_0x4b43fd(0x762)+_0x4b43fd(0x33b)+_0x4b43fd(0x388)+_0x4b43fd(0x4bb)]=function(){const _0x37f02e=_0x4b43fd,_0x342f99={'BugXC':_0x37f02e(0x22a)+'hts'},_0x349241=TextManager[_0x37f02e(0x3ba)+'fectsOptio'+'ns'][_0x37f02e(0x461)+_0x37f02e(0x568)],_0x62bb6f=_0x342f99['BugXC'];this[_0x37f02e(0x2ad)](_0x349241,_0x62bb6f);};function _0x5630(){const _0x4a67c8=['dark\x20pink','BWnQd','Sprite_Cha','s.\x0aPlease\x20','drawConica','PfRBX','underwater','_originSpr','EventRadia','isVisible','ons_maxCom','Container','iFjJH','cZwZu','tBgNU','NORMAL','TotalSpawn','dialBehavi','lower\x20righ','LightRegio','viorFlareR','LSaqo','tingOverla','NewEventLo','gOverlayOp','ite','KING','viorFlareM','#f69679','FollowerRa','spiRO','pattern%1Y','addGeneral','ngEffectsS','nfhuU','oRng','dark\x20orang','ARRAYJSON','_LIGHT_MAS','ARRAYEVAL','oXcVW','rgba(0,0,0','#%1','updatePuls','Dir','checkPrope','n_update','iaeza','FNEam','wpYcE','askHardTer','ZAgIe','htSettings','ponmlkjihg','#bd8cbf','dark\x20green','fillRect','eUpperLaye','lay','kirWC','VrYFe','RadialBeha','#7d4900','mtuZy','displayY','FkOkc','VoNpQ','mnQMk','hardTerrai','updateLast','_realY','layRender','day','CoTws','isSceneBat','jklmnopqrs','GPCwk','nDaeH','nQWlX','TQmca','Unboarded','_source','verlay','RegExp','LIGHTING_E','setChangeA','WmEGy','updateVisi','ghts','isFollowin','_clearPage','MNGUZ','STR','dFromLight','startTint','EnemyRadia','hardAntiLi','fGCNg','5|0|1|6|4|','fDWCS','#00ffff','htUseHandO','light\x20pink','jXlyV','Sprite_Bat','tSpawn','etup','tfKSV','MtWbr','MAX_SAFE_I','uzioW','VsJumpOffs','ingEffects','eOverlay','Ykmbz','VisuMZ_1_E','aviorBlink','intensity','patternDel','ions','call','rLockedLig','\x20plugin\x20pl','#888888','nyZUj','MULTIPLY','presetColo','frameCount','mnn','LpbrR','ENvph','pop','EUnTV','FnLyF','settings','irection','addLightin','aIZGv','KInfo','addChildTo','render','Offset','DNbcl','qVtFs','useHandOff','ActorRadia','e\x20it\x20in\x20th','Game_Enemy','tChangeBoa','htingOverl','161844qyCUFp','sunset','LightingDa','IdIVr','Mask','isAirship','dark\x20red','PSdSq','halogen','sMwDw','eLowerLaye','ntPHp','_battleFie','#005e20','length','NUM','Quoyo','oNcIH','xIoiJ','OlXxY','#0000ff','ceil','createUppe','createBatt','_lastTouch','Mod','htDashOffs','viorPulseN','ANHcu','setupRadia','lightingEf','onicalLigh','updateFlic','CalcSmartO','bcdefmmmaa','RT_AUTO_OP','_grafterRe','atan2','mmmaaammma','PqBPn','dark\x20cyan','QgLTI','LightMaskB','fileAngleO','rRadialLig','_lastInten','drawRadial','rnSequence','KLAWj','bWjmj','pdate','aLvMI','jxuPi','isLighting','yellow','_baseTextu','aviorFlick','isBusy','WxQLc','Tags','ger_makeDa','vowNp','oukRT','setLightin','JyjnI','createRadi','htNoFollow','htJumpOffs','Expiration','updateLigh','htIntensit','orange','acity','tSettings','mallest\x20to','shiftLight','canvasToMa','ZYsDP','BVHFE','nFixed','GuPKT','auvxK','getSourceD','viorFlicke','LightSpawn','CSbrY','wsWIp','kGMUh','sity','mGvEm','ultLightin','FollowerCo','2|3','black','pulsingLig','KlTzq','kOard','tContainer','ConicalLig','aviorFlash','nqpjq','PlayerConi','NiWRP','TErsI','yitph','characterN','moveTo','event','JffqP','HwcMy','flicker2','light\x20cyan','AEIVB','toFKa','isShip','\x20into\x20the\x20','parse','cterAngleU','erMod','#ffffff','zTjXJ','byPSV','createAuto','vUhXN','UcYqp','_scene','hMvdO','wsHWS','ternParser','Map','BattleLigh','updateAuto','YlrxH','NZOGS','ActorID','tChangeAir','Filter','lBehavior','dark\x20gray','IINXi','abcdefgabc','mRbSB','XRJWW','save','gLdKJ','ghtSetting','LightConta','dex','ceNJN','LightDashO','yCqgJ','strong\x20pul','ErxYN','_lastMiniR','pulseRng','_lastAngle','MsPgo','adialLight','XnIBl','ARRAYNUM','racter_ini','mmand','slow\x20strob','enGVq','handOffset','BoVTb','LightAreas','dMode','adius','uZbar','DEuDg','DjvnP','viorFlashM','nSoLB','softTerrai','ockedLight','AUzhx','tOffset','#fff799','candle3','VsILT','rOEZH','jAlKp','brown','acterAngle','#8c6239','DGiLy','alLightBeh','RyRoV','ates','XMnhB','WRyhY','AExLj','pSettings','iOQVX','makeData','siawi','riPEu','rMod','viorPulseS','candle','_glowRng','rConicalLi','StringTags','createLowe','update','round','tyRate','#f06eaa','ayColor','LiZxS','mPitA','yLjum','flashRate','boxWidth','ovfnV','System','ctor','AutoTint','eventId','regionId','faBgg','color','SoftRegion','STRUCT','addCommand','2930295kISIKW','eenCoordin','oOKBb','code','gEvent','radialLigh','setSource','page','softAntiLi','RKeuc','lor','blinkRate','ngs','cos','tle','gEffectsBl','vOUom','vqssg','allowChara','dark','htFileAnch','nSequence','tBehavior','JHTJs','htChangePl','ker','HuPBq','checkRadia','tOpacityFl','nJBIL','Game_Battl','setChangeB','ShakeBuffe','LightSetti','ingTags','VWEna','1139304HSFytO','ern','viorPulseR','map','#ace4fa','gEffectsVe','YcXRl','NewScreenL','aviorGlowS','addChild','light\x20gray','kxtMx','upper\x20righ','#2e3192','e\x20plugin\x20l','4|5|1|2|0|','nicalBehav','AutoLight','floor','eANmR','ZUusd','OverlayCha','OteUD','restore','nDJEr','JSON','#ff0000','clearPageS','VisuMZ_2_T','cStringTag','drawTestDu','ileGrafter','applyInver','opacity%1','initLighti','generateLi','azOBj','viorBlinkR','aviorFlare','checkLight','Speed','KssOe','ion','PlayerRadi','flickerMod','parameters','tileHeight','nlTjw','rLayer','viorPatter','TimeIncrem','lLight','_followerC','HbBaV','setConical','ygCWY','tler_setBa','HardTerrai','itmap','ure','removeChil','ySKFn','bHtsQ','Light','27ePvLXh','sOpacity','InputX','_softAntiL','renderer','HardRegion','aviorGlowR','RjHLL','tionComman','4|5','htCatchAll','Lights','ity','Mouse','createDest','match','ateTimeSys','UiQCB','VzvBh','FollowerIn','hideCharac','makeDeepCo','originX','VFtkN','tChangeEve','lDyRy','_lightSpaw','isUsingScr','rIJzW','cWTmh','Map_create','ZlRBD','ightSettin','11lmcRmj','ConicalBeh','iVvkF','layColor','ghtTerrain','updateBeha','IrMws','mmmUp','gEffectsPu','hicleData','viorGlowRa','isPosing','updateCurs','form','pulse2','EyjRo','EventConic','scale','enemy','findTarget','dark\x20yello','adjustPosi','aviorPatte','pOrDe','visible','tChangePla','gOverlayCo','green','jvTZa','pacity','pmYJU','ghtRegionI','aracters','_lightingE','_setup','isDirectio','glowRng','tionText','tqCNQ','HaemS','AntiLight','setVehicle','status','OrLDZ','lLightBasi','EVAL','_followerR','Sprite_SvE','setRadialL','Base_creat','UnboardedS','vior','aKpnD','FkLpl','QGFmy','orSettings','originY','cacheOpaci','wZvmX','SAcSC','QQtkh','Ship','updateFlar','ist\x20from\x20s','wsGaE','HjIOS','CSPZJ','UnboardedB','OLWbw','#444444','jjUdU','_proxySpri','eBHIg','setup','_softAlpha','RPqXM','updateOpac','ifier','dzAdp','qJvxx','hcGVK','PONbW','EylaL','WprvA','flicker','lsingLight','glowSpeed','flareRate','set','zontal','shipSettin','HEzcg','test','AeORn','ers','checkConic','ZfcWh','%1\x20is\x20inco','GnOBg','light\x20grey','suBnO','updateTest','getRadius','layTexture','raBaG','reduce','NKPtK','ccyci','isLightVis','xGvnR','tsAutoTint','nheJD','nTags','BLEND_MODE','ent','maxCommand','0|6|3|4|2|','ffsets','#f7941d','vehicle','stSPJ','_hardAlpha','3|2|1|4|0','fFTmU','aammmabcde','ger_applyD','lightingOv','VCwgi','aviorStrin','npADS','RcfLy','updateAngl','weatherEff','down','_app','LightingEf','qHdlz','rParser','ntSettings','tChangeShi','WalLe','updateChar','htTiles','LoddH','spNhQ','_lastEnabl','hardRegion','Dummies','Battle_cre','QHxwN','zSVra','zxyPR','cttot','bility','clone','Game_Actor','nta','Data','zDtCK','iCNKs','BoardedSet','random','fluorescen','Xqgrj','isUsingMap','lowerSetti','CTrgG','softRegion','5892oZuSja','createBitm','Game_Map_s','#790000','aced\x20on\x20th','ySpdU','ghtBehavio','ffset','FUNC','dark\x20grey','dark\x20blue','_noDarknes','AjcKw','fCeUN','WmWVC','OBmra','QJOKp','ate','htSwayNoRn','Masks','626060yWgYdn','ActorAutoR','_lightCont','qEwEb','RadialLigh','cacheNewDa','Game_Playe','isSpriteVS','LightBitma','LightOpaci','ROBWl','ter','pwqTU','htOffsets','defg','ConfigMana','pattern','SgFoB','height','follower','yTHVA','Conical','getTimeOve','\x20largest\x20t','cts','AkYkT','colorDurat','abFOd','ightBehavi','nABBI','light\x20purp','ARRAYSTR','isDead','LMBBT','hROkX','_vehicleLi','QkAOn','strobe2','opacity','askHardReg','createOver','n_initiali','swayRng','ettings','rSprite','Sprite','behaviorDa','blt','eOffset','JQzwW','EXTXv','BoardedOff','rotateSpee','#32004b','Interprete','isHidden','_overlayCo','0|4|1|8|7|','Spawns','ophmn','pVRTS','mnonmmonqn','bitmap','htsName','loadPictur','DCGBv','_baseSprit','ions_addGe','Radial','zmPcV','BVtck','tChangeFol','lkj','htFileAngl','ALLOW_ANTI','KNVON','cvBWf','pulse1','mGIiQ','Boarded','gray','_driving','grrgc','ARRAYFUNC','ZaChH','nmonqnmomn','aced\x20over\x20','Notetags','lLightBeha','NpkCd','erlayColor','WmzDW','white','ZxDtz','_lastRadiu','KUqEq','flareModif','%1%2%3%4','Plqzh','max','WDHpN','boat','JuLJs','AutyM','pow','airship','mqcBg','ammma','Battle','hexToArray','uhECL','aviorPulse','SqBml','setupPageS','PulsingLig','tChangeAct','GwKMU','Scene_Opti','EwSDm','incandesce','MQwSZ','QbZAQ','bOdeJ','fmvQt','gEffectsOp','riXVs','nical','blendMode','MNcyO','tMcSO','UiZgy','hjIte','FMJYi','arc','Window_Opt','NUysg','htGeneric','FKKBh','jtgkg','light\x20oran','AEDWD','uvwxyzyxwv','NewFollowe','substring','cRBTf','blue','attleCore','LtiAv','targetOpac','WdbwN','_lastColor','processLig','QmSEH','name','regionAuto','VisuMZ_0_C','noLighting','vBCxN','cyan','XhLHb','5|1','createColo','ainer','PwDmR','format','Game_Event','lat','miniRadius','freshRegio','createNewL','readFlag','peed','ghtsName','alLightHan','mySettings','leader','_testDummi','vutsrqponm','none','aNWya','constructo','arrayToHex','fects','ahtWT','toString','qEfbQ','2|3|4|1|0','PresetColo','BLPJD','grnzu','viorGlowNo','ibtQK','irship','offsetY','upper\x20left','_hardAntiL','XPFUL','kKeiT','fillStyle','updateBlen','_pulseRng','RKHjy','kcIeL','cdbOH','sCommand','#603913','YjuQt','FlareSprit','6604587PZfQbo','qTXRh','QOSkr','htSwaySpee','aJvpE','ginCommand','viorFlashR','NxdTc','xzGUI','lituN','ARRAYSTRUC','rRate','AutoTintPr','HCzKR','rnPreset','FwkZu','boxHeight','blendModeP','#aaaaaa','ible','Destinatio','filename','updatePatt','EnemyIndex','yJJUl','setBattler','ufdLd','ATdnt','pattern%1X','ightSpawn','#a186be','n.\x0aPlease\x20','angle','isAntiLigh','NgZWa','htBehavior','KVqIh','setupLight','Mjnqw','fill','updateLens','\x20a\x20Tier\x20%2','ttler','screen','Overlay','Opacity','swaySpeed','angleSway','atSettings','createTest','Color','isUsingTim','ings','IDs','OGmkb','ata','zlleX','WVYie','KQFci','CVdxs','player','isSceneMap','RTjCq','sets','dusk','setChangeS','tialize','CAsLG','eLightingE','HBMZA','klnlV','icStringTa','_conicalLi','LightWalkO','hip','4|2|6|9|7|','mands','Rate','InputType','faaaammmma','jIElg','destroyLig','nuvtZ','htSrcDiame','viorGlowRn','FFECTS_SMA','askSoftTer','ConicalOff','tIntensity','pulse','needsRecre','VDwNZ','CommentTag','Boat','createLens','HdzSi','radius','pulseRate','tileWidth','rgba(','multiply','_swayRng','xsmID','ySprite','targetColo','enabled','htChangeSh','list','magenta','nPreset','tileset','blinkModif','fectsOptio','_patternIn','smooth','oIfbF','ame','AddBlinkin','gTags','TIjUA','UnboardedO','htWalkOffs','updateHand','cPhxo','SMiKv','behavior','BBLUM','_autoLight','qjuCy','_setupPage','dark\x20purpl','members','glowRate','yerSetting','campfire','LCesb','leField','nUUpW','UpdateFunc','isLoopVert','eVDkD','type','htingEffec','push','HandOffset','wkuVa','dOffsetStr','htColor','parseDirec','getVehicle','some','Fqicp','destroy','setupBattl','forceDirec','GFrdr','dShdD','sLightSpaw','night','updatePosi','viorString','Options','Map_hideCh','updateBlin','red','followMous','ams','Iphac','ier','hts','displayX','cQlMN','htAngle','MgZBm','xCXAa','vIwTF','GvKsC','tem','pulseSpeed','\x20%3\x20plugin','ination','htChangeEv','alLight','pGXIm','updateOver','antiLightM','light\x20blue','vPxRA','exit','slow\x20pulse','acityPatte','hasAntiLig','Rng','alGradient','ugin\x27s.\x20Pl','createLigh','SMOOTH_MAS','Spriteset_','ghtJumpOff','toLowerCas','_colorSpri','tSNfn','split','htTurnOff','ship','SHAKE_BUFF','normal','candle2','Pfvck','Svahn','fileAnchor','RRlpo','LGWYc','autoRadius','IUnMx','lmkIt','RGqua','wHMsZ','dial','QCutL','#92278f','NJkLt','tGeneric','followerIn','isPressed','#a3d39c','GQHAt','dawn','elkpe','tDiameter','YcMbW','PQTRh','ease\x20updat','ets','strobe1','LightBehav','alBehavior','Duration','includes','nTagIDs','mColor','ConvertPar','lightData','opacityPat','strobe','diYkC','inkingLigh','Settings','light\x20red','hvEkz','initVehicl','htFilename','Game_Scree','vBZcU','anchor','gIivz','ISWlf','arser','other\x20Tier','Zwmxy','VZuCd','IbArU','tionByMap','ical','anager.','yWFrR','UxwpI','rainTags','Enable','CBIRJ','5446QlYUCq','JbZHJ','TFljK','InputY','SmzSx','EventID','kjihgfedcb','mmmmmaaaaa','kPMuS','conicalLig','nDHzF','ZBiQP','uZliH','ayerSettin','ier\x20number','applyData','#9e0039','LFQke','IYimM','e\x20Plugin\x20M','expire','mmmaaaabcd','viorGlowSp','HOjYJ','NBjtH','applyDefau','BlinkingLi','avior','lQsgO','_spriteset','randomInt','ckedLight','nicalOffse','ired\x20plugi','tingEffect','_realX','padZero','htHandOffs','ffGMT','opacityDur','cSDRl','12260210TBsabp','RObNI','trim','active','TJDNJ','turnToward','ightMask','abcdefghij','offsetX','tyValue','_lastInput','QKoCT','join','4WcOpnl','sOverlay','iner','AdjustRect','createAnti','ngEffects','oreEngine','rDUji','#ffff00','light\x20gree','nsFunc','mmnmmommom','xdjXX','vent','gEffects','ght','Game_Map_u','OUeHb','createProx','psZkD','mamamamama','ffectsSett','ingOverlay','Touch','Coordinate','zRsud','create','ehavior','Ulglv','note','#5674b9','RetrieveOp','HZylI','addColorSt','ffects','BoardedBeh','isEnabled','ectsLensFl','ation','#827b00','tMembers','mmy','prototype','tAngle','blinkingLi','htRadius','VsDashOffs','setFollowe','nedLights','hexToRgba','setupConic','ztSCu','nsGPq','ters','torch','cal','WvDQU','flashModif','xitlv','alLightBas','createDefa','SCREEN','isLoopHori','candle1','medium\x20pul','mILkt','initialize','wmfLD','%1\x20is\x20miss','ghtingSett','erBase_ini','AddPulsing','rshipSetti','rkGaH','left','patternNam','isBoat','htForceDir','updateGlow','Enabled','getLastPlu','sepia','BiFGP','Position','#ff00ff','tionByTarg','Tjzel','AutoRadius','cLmoO','hfMNH','tXVPG','registerCo','HuAvt','lTDNB','EHPtI','icleData','filters','width','ayXgR','flickerRat','AcTSc','flicker3','purple','abs','htOffset','LightingCo','SpawnLight','tSpawnFunc','right','LightJumpO','isEventRun','_testDummy','_antiLight','gFollower','Stnwj','htBlendMod','IfRKZ','tColor','ExpireSpaw','nOpzZ','pDXyE','return\x200','ing\x20a\x20requ','wvcDm','eTGVl','SoftTerrai','VisuMZ_2_D','aCDLM','ACITY','htOpacityF','DKREc','use','uwcRa','tBlendMode','ldcAm','yaBIy','clamp','gLights','lightSpawn','mmamamaaam','actor','viorBlinkM','tsCommand','dir%1','erlayOpaci','vjcGS','tyEVP','JPWhB','wgXqz','LightMask','MrOgz','ceJvv','htChangeAi','#00ff00','jVSmO','updateFlas','TZUYW','lHbxa','mmo','_lastFilen','UWwcj','rties','JwmNO','esets','WxMrh','qZwAz','are','orAngle','jtpPd','Timer','yhlvc','ZzvSA','RenderText','hEIpL','fast\x20strob','WxrXx','XNInu','OPLjd','ogatY','NGJSc','Behavior','LgUXB','initMember','ghtWalkOff','VisuMZ_2_W','neralOptio','updateMain','askSoftReg','beginPath','tJwIG','_lensFlare','time','ADD','SMJhp','QRcNt','tion','EMhUm','getFollowe','_mainSprit','tings','jGHEm','ior','worldTrans','ghtDashOff','MyNtn','rrectly\x20pl','MeHku','descriptio','_radialLig','toUpperCas','khWHS','gPlayer','RktKa','KxWZT','lightConta'];_0x5630=function(){return _0x4a67c8;};return _0x5630();}