//=============================================================================
// VisuStella MZ - Weather Effects
// VisuMZ_2_WeatherEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_WeatherEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeatherEffects = VisuMZ.WeatherEffects || {};
VisuMZ.WeatherEffects.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.05] [WeatherEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weather_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ didn't come with too many weather effects. Only three: rain,
 * storm, and snow. This plugin will ramp that number up a considerable amount
 * and revise the way the original three weathers look, too. These new weather
 * patterns will help breathe life into your game for various scenarios and/or
 * cutscenes. The added control and customization options mean you can alter
 * their behaviors to your liking.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assign multiple weathers up to a max of 20. For maps, there are 10 layers
 *   on top of the map and another 10 layers behind the tilemap (but above the
 *   parallax layer).
 * * Set certain maps to not show any weather through notetags. This allows you
 *   to avoid having to turn on and off your weather settings.
 * * The basic RPG Maker MZ weather patterns (Rain, Storm, and Snow) have been
 *   recreated to look better than before.
 * * Plugin Commands allow for game devs to place the newly added weather types
 *   with intricate levels of customization.
 * * Customization options available for weather patterns include spawn numbers
 *   control, spawn location control, opacity easing, trajectory properties,
 *   coloring options, overlay dimmer control, and more!
 * * There are 10 weather patterns for each of the 8-themed elements, alongside
 *   lots of preset icon-related weather patterns for over 80+ weather pattern
 *   types to choose from.
 * * More basic and easier to use directional flying icon weather patterns of
 *   varying speeds can be used to ease yourself into how weather patterns can
 *   be customized.
 * * Newly added weather patterns come with their own generated sprites.
 *   There's no need to use custom images or such unless you want to. Custom
 *   images can come in the form of icons or pictures. Some generated sprites
 *   include many variances (such as Snowflakes).
 * * Weather layers can now be placed on top of the map or below the map, aka
 *   between the tilemap and parallax layer.
 * * Plugin Commands allow the player to clear multiple weather layers, adjust
 *   the power of multiple weather layers, memorize, and even replay multiple
 *   weather layer patterns in a go.
 * * Up to 20 layers can be used for weather, all of each having different
 *   settings. 10 layers for above the map. 10 layers for below the map. This
 *   can be utilized to create more detailed weather effects than ever before.
 * * Common Events can be linked up with weather patterns, launching parallel
 *   whenever a weather particular respawns, allowing for special effects like
 *   screen flashes and/or playing sounds. This allows devs to match up certain
 *   weather patterns like thunder sounds and flashes with thunder bolts.
 * * A new option "Weather Density" has been added. The amount of weather
 *   sprites on screen can be tuned downward in order to reduce frame drops for
 *   players with weaker computers.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them. Other things listed here are also worthy of
 * mentioning.
 *
 * ---
 *
 * Weather System Overwrite
 * 
 * As one would expect out of a plugin focused around changing weather effects,
 * the whole RPG Maker MZ weather system has been revamped. This means that a
 * lot of the default functions related to weather have been overwritten in
 * order to fulfill the demands of the plugin. Such demands include having more
 * control over the individual weather particles to the way the sprites are
 * handled and how the data persists for their behaviors.
 *
 * ---
 * 
 * Weather Layers
 * 
 * There are now multiple weather layers, allowing you to have multiple weather
 * patterns on simultaneously. Amongst the layers, there are upper and lower
 * layer types, too.
 * 
 * Upper layers are what RPG Maker MZ has, they exist above the tilemap. The
 * lower layers are new and exist below the tilemap but above the parallax
 * layer.
 * 
 * As such, weather effects below the tilemap won't be visible unless you are
 * using transparent tiles. This can be applied to windows or cliff tiles (for
 * some of these, you'll have to modify the tiles yourself). This effect can be
 * used to give a sense of depth, such as transparent windows observing a large
 * blizzard happening outside.
 * 
 * ---
 * 
 * Generated Weather Sprite Graphics
 * 
 * The default generated weather sprite graphics have been overwritten in favor
 * of better looking ones that we've made. Due to a technique that we've
 * created for this plugin, the generated weather sprites will also appear more
 * plentiful while keeping raw sprite counts low.
 * 
 * For those wondering, the "Rain", "Storm", and "Snow" weather types are the
 * default RPG Maker MZ weathers that we have changed. They can be accessed
 * through the usual event commands, or they can be accessed through Plugin
 * Commands.
 * 
 * Accessing these weather patterns through Plugin Commands gives you, the game
 * dev, more control over how they behave compared to the minimal control that
 * the default RPG Maker MZ event commands have.
 * 
 * ---
 * 
 * Custom Icons and Custom Pictures
 * 
 * If you plan on using custom icons or custom pictures, you might find it odd
 * that there is less volume of the weather sprite on the screen compared to
 * the generated graphics. This is due to a custering replication technique we
 * use for the sprite textures that make them appear more plentiful. To remedy
 * this, adjust the weight values for the icon variations and picture
 * variations to be higher than that of the generated sprites.
 * 
 * When designing custom icons and/or custom pictures for weather sprite
 * purposes, design them facing right at "0 degrees". This way, the angle will
 * align better and you can avoid using the "Visual Angle Offset" if you are
 * unfamiliar or troubled by offsets.
 * 
 * ---
 * 
 * RPG Maker MZ Tints
 * 
 * Weather patterns placed on the below tileset layer will be covered by RPG
 * Maker MZ's default tint layer, thus, affected by it. However, there's
 * nothing we can do about that one unlike the darkness overlay provided by the
 * Lighting Effects plugin where there's a workaround. Either you use the
 * Lighting Effects darkness overlay or you play work around tint usage in
 * regards to below tileset layer.
 * 
 * Weather patterns placed above the tileset layer will NOT be affected by RPG
 * Maker MZ's default tint layer nor will it be affected by the darkness
 * overlay from the Lighting Effects plugin. This is because not all effects
 * should be affected by it. If you do want to apply a tint to you, you can do
 * so via the custom settings and apply the tint manually. It's not applied
 * from the getgo because it's more efficient to make the upper weather sprites
 * unaffected first and applied later than the opposite.
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
 * Battle Core
 *
 * Those with the Battle Core can have weather effects show up in battle, too.
 * This does not happen without it. This is because the Battle Core has
 * provided the code infrastructure to support battle weather and this plugin
 * ties in with that code infrastructure better.
 *
 * ---
 *
 * ============================================================================
 * Keeping FPS Stable
 * ============================================================================
 * 
 * As this is a plugin that adds special effects to your game, you do have to
 * be mindful about how you use the various Weather Effects features or else
 * your game will face FPS drops.
 *
 * ---
 * 
 * Here are a few things to keep in mind:
 * 
 * 1. Hues and tones are expensive to process graphically. Using a lot of hue
 *    and/or tone variations on lots of weather sprites at the same time can
 *    eat up a chunk of the player's FPS. If you do plan on using hue and/or
 *    tone variations, keep the sprite count low by either using lower power
 *    settings or less sprites on the screen.
 * 
 * 2. Yes, this plugin provides 20 layers (10 for upper and 10 for lower), but
 *    that doesn't mean you should use all 20 at the same time at max power. Be
 *    moderate in how many weather layers you use at a time. Just because there
 *    is an option for the player to adjust the weather density doesn't mean it
 *    should be okay to go wild with weather layers.
 * 
 * 3. The majority of the default settings should be safe to use on their own,
 *    but that also suggests that they're used by themselves. You can usually
 *    combine three or four default weather patterns together across different
 *    layers, but do exercise restraint when customizing the settings from
 *    their default values and using more layers at a time.
 * 
 * 4. Avoid having too many sprites on the screen at once. Each weather sprite
 *    adds to the number of processes the game has to keep track of and update
 *    each individual frame. Especially weather patterns with sprites that
 *    alter light or affect it. While the plugin is optimized to allow handling
 *    of a decently large number of sprites within the hundreds, do not go
 *    overboard and use them with modesty.
 * 
 * 5. If you choose to not pre-render generated sprites at the start of the
 *    game, some weather patterns may take a bit of processing power to render
 *    generated sprites on the spot especially if there are a lot of sprites to
 *    work with. The pre-render option is the most ideal to use if you plan on
 *    using generated sprites. If you intend to use mostly icons or custom
 *    pictures, pre-rendering at the start of the game can be turned off.
 * 
 * ---
 * 
 * We are NOT responsible for irresponsible usage of this plugin that pushes
 * graphical processing to absolute limitations.
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
 * VisuMZ_2_LightingEffects
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
 * === Convenience-Related Notetags ===
 * 
 * ---
 *
 * <No Weather>
 *
 * - Used for: Map Notetags
 * - Sets the map to not show any weather effects regardless of what's actually
 *   being set currently. Weather effects will resume once the player leaves
 *   the map and enters one that does not forbid weather effects.
 * - This is useful for indoor maps when you don't want to turn weather effects
 *   on and off constantly.
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
 * === Basic Plugin Commands ===
 * 
 * ---
 * 
 * BASIC: Adjust Weather Power
 * - Adjusts the power of the target weather layer(s).
 * 
 *   Layer(s):
 *   - Which weather layer(s) do you wish to adjust?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Adjust weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 *   Power:
 *   - Adjust power by how much?
 *   - Caps at 1 and 9.
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How many frames to fully adjust the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?
 *   - Wait for weather to completely adjust before moving on with the next
 *     event command?
 * 
 * ---
 *
 * BASIC: Clear Weather
 * - Clears out target weather layer(s).
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to clear?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Clear weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 *
 *   Duration:
 *   - How many frames to fully clear the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?
 *   - Wait for weather to completely adjust before moving on with the next
 *     event command?
 *
 * ---
 * 
 * BASIC: Memorize Weather
 * - Memorizes the settings for target weather pattern(s) so that you can
 *   reuse it later.
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to save?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Save weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 * ---
 * 
 * BASIC: Pre-Render Generated Weather
 * - Selects target weather type to pre-render the generated graphics for it.
 * - This is to help reduce future lag spikes on mobile devices.
 * 
 *   Weather Type:
 *   - Which weather type do you wish to pre-render?
 *   - This is to help reduce lag spikes when calling weathers.
 * 
 * ---
 * 
 * BASIC: Replay Memorized Weather
 * - Replays target memorized weather pattern(s).
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to replay?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Replay weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 *   Duration:
 *   - How many frames to fully replay the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?:
 *   - Wait for weather to completely replay before moving on with the next
 *     event command?
 * 
 * ---
 * 
 * === Weather Pattern-Related Plugin Commands ===
 * 
 * ---
 *
 * Weather Pattern
 * - All weather patterns provided by this plugin use the following format.
 * Yes, all of them. This is to ensure that there is familiarity when modifying
 * one weather pattern and then moving to another and reducing the amount of
 * time needed to fiddle around with each of them. As such, the parameters will
 * affect each weather pattern the same exact way.
 * 
 *   ---
 *
 *   Main Settings:
 *
 *     Power:
 *     - What weather power do you wish to apply?
 *     - Use values between 1 and 9.
 *     - You may use JavaScript code.
 *
 *     Duration:
 *     - How many frames to fully change the weather?
 *     - You may use JavaScript code.
 *
 *     Wait For Completion?:
 *     - Wait for weather to completely change before moving on with the next
 *       event command?
 * 
 *   ---
 * 
 *   Layer Settings
 *
 *     Layer(s):
 *     - Which weather layer(s) do you wish to apply changes?
 *     - Use values between 1 and 10.
 *     - You may use JavaScript code.
 *
 *     Upper/Lower?:
 *     - Play the weather pattern above the tileset or below it?
 *     - You can select "both" to affect both.
 * 
 *   ---
 * 
 *   Customization
 *
 *     Custom Settings:
 *     - Adjust the custom settings involving this weather.
 *     - More information below:
 *
 * ---
 *
 * Custom Settings
 * - Each weather pattern's "Custom Settings" will have each of the following
 * options available to it.
 *
 *   Sprite Settings:
 *   - The general settings involving the weather sprites.
 *
 *   Dimmer Overlay:
 *   - Settings involving the dimmer overlay cast over the screen.
 *
 *   Image Settings:
 *   - Settings for the images used for the weather sprites.
 *   - Weathers with multiple images will be picked at random.
 *
 *   Special Effects:
 *   - Specialized effects that are turned on for specific weather types can
 *     be found here.
 *
 *   Trajectory Settings:
 *   - Settings used to determine the trajectory a weather sprite will take
 *     and how they behave on it.
 *
 * ---
 *
 * Sprite Settings
 * - The general settings involving the weather sprites.
 *
 *   Lifespan:
 *   - Lifespan of each weather sprite in frames.
 *
 *     Variance:
 *     - What variance is there to each lifespan value?
 *
 *     Spawn Location X:
 *     - What x location should the weather sprites appear?
 *
 *       Offset X:
 *       - Offset the spawn location by this many pixels.
 *       - Negative: left. Positive: right.
 *
 *     Spawn Location Y:
 *     - What y location should the weather sprites appear?
 *
 *       Offset Y:
 *       - Offset the spawn location by this many pixels.
 *       - Negative: up. Positive: down.
 *
 *     Map Bound?:
 *     - Do the weather sprites move with the map scrolling?
 *
 *   Starting Opacity:
 *   - Starting opacity of each weather sprite in frames.
 *
 *     Variance:
 *     - What variance is there to each starting opacity value?
 *
 *     Easing Type:
 *     - Select which easing type you wish to apply for opacity.
 *
 *     Fade In Time:
 *     - How many frames does it take for the sprite to fade in?
 *     - Use 0 to start immediately at full opacity.
 *
 *   Scale:
 *   - What is the scale of the sprite?
 *   - 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 *
 *     Variance:
 *     - What variance is there to the main scale value?
 *
 *     Ratio X:
 *     Ratio Y:
 *     - What is the ratio of this sprite's scale X/Y?
 *     - 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 *
 *   Total Sprite Minimum:
 *   - What is the minimum number of sprites on the screen?
 *
 *     Total Per Power:
 *     - Increase the total number of sprites per power by this.
 *     - Lowest power is 1.
 *     - Highest power is 9.
 *
 * ---
 *
 * Dimmer Overlay
 * - Settings involving the dimmer overlay cast over the screen.
 *
 *   Color:
 *   - Dimmer color. This uses #rrggbb format.
 *   - Check your color here: https://htmlcolorcodes.com/
 *
 *   Opacity Minimum:
 *   - What is the minimum opacity value for the dimmer?
 *
 *     Opacity Per Power:
 *     - What is the total opacity value per power for the dimmer?
 *
 * ---
 *
 * Image Settings
 * - Settings for the images used for the weather sprites.
 * - Weathers with multiple images will be picked at random.
 *
 *   Generated Image?:
 *   - Include the plugin-generated image for this weather type?
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Icon(s):
 *   - Which icons do you wish to include for the images to appear as?
 *   - When using icons, icons are best made when aligned to the right at
 *     "0 degrees". This is for settings like angle alignment tracking.
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Picture(s):
 *   - Which pictures do you wish to include for the images to appear as?
 *   - When using pictures, pictures are best made when aligned to the right at
 *     "0 degrees". This is for settings like angle alignment tracking.
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the weather sprite?
 *
 *   Hue Variations:
 *   - What hue variations will be randomly selected from?
 *   - Use a value between 0 and 360.
 *
 *   Tone Variations:
 *   - What tone variations will be randomly selected from?
 *   - Format for each: [Red, Green, Blue, Gray]
 * 
 *   *NOTE*
 * 
 *   Hues and tones are expensive to process graphically. Using a lot of hue
 *   and/or tone variations on lots of weather sprites at the same time can
 *   eat up a chunk of the player's FPS. If you do plan on using hue and/or
 *   tone variations, keep the sprite count low by either using lower power
 *   settings or less sprites on the screen.
 *
 * ---
 *
 * Special Effects
 * - Specialized effects that are turned on for specific weather types can
 * be found here.
 *
 *   Allow Visible Player?:
 *   - Make the player more visible by reducing the opacity of nearby weather
 *     sprites?
 *
 *   Flat Fluttering?:
 *   - Is the object flat and flutters in the wind?
 *   - Or does the object have volume and doesn't?
 *
 *   Longevity:
 *   - Weather effects with longevity don't expire until the weather pattern
 *     type is changed.
 *
 *   Hue Sway Range:
 *   - How much should the hue sway back and forth?
 *   - JavaScript code can be used.
 *
 *     Hue Sway Speed:
 *     - What speed does the angle sway?
 *     - Lower is slower.
 *     - Higher is faster.
 *     - JavaScript code can be used.
 *
 *   Respawn Common Event:
 *   - Play a specific Common Event when this event respawns?
 *   - The Common Event will run as a Once Parallel.
 *
 *   Respawn Delay Minimum:
 *   - Is there a delay to the respawn?
 *   - This is how many frames the sprite must wait before respawning.
 *
 *     RNG Delay Per Power:
 *     - How many randomized frames of delay per power must be waited?
 *
 *   Scale In:
 *   - What scale ratio should the sprite spawn in at?
 *   - Use 1.0 for regular ratios.
 *   - You may use JavaScript.
 *
 *     Duration:
 *     - How many frames should the scale in effect take?
 *     - Scale in will always head towards 1.0.
 *
 *   Scale Out:
 *   - What scale ratio should the sprite despawn out at?
 *   - Use 1.0 for regular ratios.
 *   - You may use JavaScript.
 *
 *     Duration:
 *     - How many frames should the scale out effect take?
 *     - Scale in will usually head from 1.0.
 *
 *   Custom Finish:
 *
 *     Fireworks Finish?:
 *     - At the end of the weather particle's lifespan, finish up with a
 *       fireworks explosion?
 *
 *     Sparkle Finish?:
 *     - At the end of the weather particle's lifespan, finish up with a
 *       fabulous spinning sparkle effect?
 *
 * ---
 *
 * Trajectory Settings
 * - Settings used to determine the trajectory a weather sprite will take
 *   and how they behave on it.
 *
 *   Trajectory Type:
 *   - What trajectory type is used?
 *     - Both Map and Battle
 *       - Straight
 *       - Frozen
 *     - Map Only
 *       - Player-Locked
 *       - Follower-Locked
 *       - Event-Locked
 *     - Battle Only
 *       - Actor-Locked
 *       - Enemy-Locked
 *       - User-Locked
 *       - Target-Locked
 * 
 *     Locked ID/Index:
 *     - For locked trajectories only. Input the follower index.
 *     - Or ID of event, actor, enemy.
 *
 *     Offset X (Locked):
 *     - For locked trajectories only.
 *     - Negative: left. Positive: right.
 *
 *     Offset Y (Locked):
 *     - For locked trajectories only.
 *     - Negative: up. Positive: down.
 *
 *   Speed:
 *   - What speed is the sprite moving at? Lower is slower.
 *   - Higher is faster.
 *   - JavaScript code can be used.
 *
 *     Speed Variance:
 *     - What variance is there to the speed value?
 *
 *   Angle:
 *   - What angle (0 to 360) is the sprite moving toward?
 *   - JavaScript code can be used.
 *
 *     Align Angle?:
 *     - Should the sprite rotate itself according to the angle it is moving at
 *       across the screen?
 *
 *     Angle Variance:
 *     - What variance is there to the base angle?
 *
 *     Visual Angle Offset:
 *     - Offset the visual by this many degrees. Used for images that aren't
 *       made aligned with 0 degrees facing left.
 *
 *     Angle Arc:
 *     - How should the trajectory arc when the sprite moves?
 *     - JavaScript code can be used.
 *
 *     Angle Sway Range:
 *     - How much should the angle sway as the sprite moves?
 *     - JavaScript code can be used.
 *
 *       Angle Sway Speed:
 *       - What speed does the angle sway? Lower is slower.
 *       - Higher is faster.
 *       - JavaScript code can be used.
 *
 *   Spin Speed:
 *   - What speed do the sprites spin?
 *   - JavaScript code can be used.
 *   - Some generated weather pattern sprites use the clustering replication
 *     technique. This allows the weather pattern to appear more full and have
 *     higher volume while keeping sprite counts low. As such, not all weather
 *     patterns will spin the way you expect. This is not a bug.
 *
 *     Spin Speed Variance:
 *     - What variance is there to the spin speed?
 *
 *     Reverse Spin?:
 *     - Can the spin go in the reverse direction?
 *
 *   X Sway Range:
 *   Y Sway Range:
 *   - How much should the X/Y value sway as the sprite moves?
 *   - JavaScript code can be used.
 *
 *     Sway Speed:
 *     - What speed does the sway move? Lower is slower.
 *     - Higher is faster. JavaScript code can be used.
 *
 * ---
 * 
 * === Weather Pattern-Type Plugin Commands ===
 * 
 * Each of the weather patterns below all use the same plugin command structure
 * as listed in the section above. They are separated in various themes to help
 * better organize them and quickly find them. Each weather pattern has their
 * own generated image type that they use.
 * 
 * ---
 * 
 * Fire-Themed
 * 
 *   FIRE: Embers:
 *   - Oh, Ember, you will remember. So warm and tender.
 *   - Embers rise off from the ground upward.
 *
 *   FIRE: Fireflies:
 *   - Take my love, take my land, take me where I cannot stand.
 *   - Fireflies will spawn and float around.
 *
 *   FIRE: Firestorm:
 *   - This is fine.
 *   - Rain fiery bolts of flames from the heavens!
 *
 *   FIRE: Fireworks:
 *   - You just gotta ignite the light and let it shine!
 *   - A shot of fire flies up and blows up into a flower.
 *
 *   FIRE: Flame Haze:
 *   - Flaming Hair Blazing Eyes!
 *   - A fiery smoke clouds the screen!
 *
 *   FIRE: Flame Wall:
 *   - Is it me, or is it hot in here? Oh, it's me.
 *   - A wall of flames appears on the bottom part of the screen.
 *
 *   FIRE: Heat Clouds:
 *   - Fiery conglomerations of clouds.
 *   - Heat clouds scorch the top of the screen.
 *
 *   FIRE: Meteor Shower:
 *   - Clustering wishes will become a new shining star!
 *   - A nonstop swarm of meteors fall in the night sky.
 *
 *   FIRE: Shooting Stars:
 *   - Make a wish! A wholesome one, please.
 *   - Shooting stars appear over the horizon of the night sky.
 *
 *   FIRE: Sunlight Beams:
 *   - Aka crepuscular rays. Makes any day brighter!
 *   - Sun beams shine down from the heavens.
 * 
 * ---
 *
 * Ice-Themed
 *
 *   ICE: Arctic Gleam:
 *   - Oh, erie bluish glow of the arctic.
 *   - Illuminate the frozen land below!
 *
 *   ICE: Aurora Borealis:
 *   - Also known as the Northern Lights.
 *   - Auroras dance across the top of the screen.
 *
 *   ICE: Blizzard:
 *   - Let it go, let it go! Can't hold it back anymore!
 *   - Concentrated snowfall covers the screen.
 *
 *   ICE: Diamond Dust:
 *   - Diamond dust falls from the skies.
 *   - Slightly illuminated ice particles descend from above.
 *
 *   ICE: Glistening Ice:
 *   - Walkin' on thin ice!
 *   - Ice particles sparkle from all around.
 *
 *   ICE: Ice Fog:
 *   - Yo! VIP! Let's Kick it!
 *   - Frozen fog covers the whole screen.
 *
 *   ICE: Sleet:
 *   - Slightly heavier and more solid than snow!
 *   - Frozen ice crystals snow down from above.
 *
 *   ICE: Snow:
 *   - Brace yourselves! Winter is coming!
 *   - Snow falls from the sky and flutters downward.
 *
 *   ICE: Snow Clouds:
 *   - Icy gatherings of clouds ready to deliver snow.
 *   - Snow clouds blanket the top of the screen.
 *
 *   ICE: Snowflakes:
 *   - Snowflake! Snowflake! Little snowflake!
 *   - Generated snowflakes will have random patterns.
 *
 * ---
 *
 * Thunder-Themed
 *
 *   THUNDER: Discharge:
 *   - Danger! Danger! High voltage!
 *   - Electricity discharges from the sides of the screen.
 *
 *   THUNDER: Plasma Bolt:
 *   - A horizontal bolt of electricity! From left to right!
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Plasma Surge:
 *   - The windows are becoming stained with a nostalgic color.
 *   - Nonstop plasma bolts flood the screen.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Purple Haze:
 *   - Purple haze all around. Don't know if I'm coming up or down.
 *   - A purple fog blankets the whole screen.
 *
 *   THUNDER: Spider Lightning:
 *   - Nothing to do with spiders.
 *   - Bolts expand outwards from a target.
 *
 *   THUNDER: Static Charge:
 *   - Snap! Crackle! Pop!
 *   - Highly charged target emits static.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Thunder Bolt:
 *   - More than just an expensive charging cable. Giant bolt flashes
 *     from above!
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Thunder Clouds:
 *   - These thunderclouds, oh no, no!
 *   - Thunder-ready clouds fly atop the top of the screen.
 *
 *   THUNDER: Thunder Surge:
 *   - When you walk away, you don't hear me say.
 *   - Nonstop thunder bolts scour the skies.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Ultraviolet Beams:
 *   - Get out some of that SPF 100+!
 *   - (This is NOT real UV Light!)
 *   - Ultraviolet lights are coming from the sky!
 *
 * ---
 *
 * Water-Themed
 *
 *   WATER: Bubbles Rising:
 *   - Let's not burst your bubble!
 *   - Bubbles will rise up towards the top of the screen.
 *
 *   WATER: Cloud Burst:
 *   - A sudden massive deluge of rain!
 *   - A near vertical storm of massive volume.
 *
 *   WATER: Dripping Water:
 *   - Leaky ceilings? It's time to call a plumber.
 *   - Water droplets drip from above.
 *
 *   WATER: Mist:
 *   - Not to be confused with the video game. That has a Y.
 *   - A suspended mist covers the screen.
 *
 *   WATER: Rain:
 *   - Rain, rain, go away! Come again some other day!
 *   - Raindrops will fall from the sky all over the screen.
 *
 *   WATER: Rain Clouds:
 *   - It's raining men! Hallelujah! It's raining men, amen!
 *   - Rain-filled clouds hover menacingly at the top of the screen.
 *
 *   WATER: Rainbow Arch:
 *   - Somewhere over the rainbow~
 *   - A large rainbow arch appears in the corner of the screen.
 *
 *   WATER: Rising Steam:
 *   - Take more photos to train your selfie steam!
 *   - Steam vapor clouds rise from below.
 *
 *   WATER: Soap Bubbles:
 *   - I will try to blow a bubble that will last all day.
 *   - Soap bubbles float and hover around.
 *
 *   WATER: Storm:
 *   - A MIGHTY storm!
 *   - Large and long raindrops fall from the sky creating a storm.
 *
 * ---
 *
 * Earth-Themed
 *
 *   EARTH: Acid Rain:
 *   - Real acid rain doesn't glow in the dark.
 *   - But this one sure does.
 *
 *   EARTH: Crumbling Cave:
 *   - Do NOT grab any suspiciously placed rubies.
 *   - Bits and pieces of the cave ceiling crumble.
 *
 *   EARTH: Dust Clouds:
 *   - Darkened dust covers the surroundings!
 *   - Dust clouds will fill up the screen.
 *
 *   EARTH: Dust Storm:
 *   - Happens in places other than Nashville.
 *   - Darkened dust launches across the screen.
 *
 *   EARTH: House Dust:
 *   - Floating white dust particles with nowhere to go.
 *   - So they'll just make themselves at home.
 *
 *   EARTH: Pollution Clouds:
 *   - Absolutely disgusting colored pollution clouds.
 *   - Pollution clouds cover the top of the screen.
 *
 *   EARTH: Radioactive Beams:
 *   - Alert! Alert! Alert! Nuclear green lights!
 *   - Nuclear green lights irradiate from the clouds.
 *
 *   EARTH: Sand Clouds:
 *   - Straight from the Pyramids of Giza!
 *   - Sand clouds will surround everything!
 *
 *   EARTH: Sandstorm:
 *   - Darude! Sandstorm!
 *   - Sand blasts across the screen from one end to the other.
 *
 *   EARTH: Toxic Gas:
 *   - More toxic than the comments section of social media!
 *   - A foggy green gas blankets the screen.
 *
 * ---
 *
 * Wind-Themed
 *
 *   WIND: Autumn Leaves:
 *   - Red, yellow, orange, brown leaves are falling all around.
 *   - See them dance in the cool, fall air. 
 *
 *   WIND: Balloons:
 *   - You and I in a little toy shop, buy a bag balloons with the money
 *     we've got.
 *
 *   WIND: Cherry Blossoms:
 *   - The emblem of love and good luck.
 *   - Cherry blossom petals flutter down from above.
 *
 *   WIND: Dandelion Seeds:
 *   - Floating on the air. Never seem to care.
 *   - Dandelion seeds will flow up into the air.
 *
 *   WIND: Grassy Gust:
 *   - A gust of wind!
 *   - From right to left, grass flies with it.
 *   - Best when paired with a Tempest.
 *
 *   WIND: Green Leaves:
 *   - Leaf me alone!
 *   - Green leaves fall above, spinning round and round.
 *
 *   WIND: Pollen:
 *   - Bless you! Gesundheit! Salute!
 *   - A cloud of pollen grains travel about the screen.
 *
 *   WIND: Tempest:
 *   - Brought to you by a friendly slime.
 *   - Powerful gusts of wind blast across the screen.
 *
 *   WIND: White Clouds:
 *   - Not the main character from Final Fantasy VII.
 *   - Fluffy white clouds slowly drift across the upper screen.
 *
 *   WIND: Xtreme Speed:
 *   - Gotta go fast! Speedlines whip past!
 *   - Works best below the tileset layer.
 *
 * ---
 *
 * Light-Themed
 *
 *   LIGHT: Confetti:
 *   - Party like it's 1999!
 *   - Confetti of differing shapes drop from the sky.
 *
 *   LIGHT: Lens Flare:
 *   - Relive the amateur days from Photoshop!
 *   - A lens flare descends from the upper corner of the sky!
 *
 *   LIGHT: Light Burst:
 *   - Sometimes also known as Sun Bursts.
 *   - CAUTION: Bright lights!
 *   - Bright white light bursts out from a target.
 *
 *   LIGHT: Light Orbs:
 *   - Show me the light!
 *   - Light orbs fly round and round.
 *
 *   LIGHT: Pastel Brume:
 *   - Cute pastel colors forming a foggy brume.
 *   - Various bright colors cover the screen.
 *
 *   LIGHT: Prism Burst:
 *   - More color than a bag of candy!
 *   - CAUTION: Bright lights!
 *   - Lights of all colors expand out from a target.
 *
 *   LIGHT: Prismatic Gleam:
 *   - Our seven lights spring to the task!
 *   - Colors of all sorts shine from the skies high above.
 *
 *   LIGHT: Rainbow Clouds:
 *   - Colorful clouds dot the heavens.
 *   - Multi-colored clouds slowly drift across the upper screen.
 *
 *   LIGHT: Rainbow Orbs:
 *   - Taste the rainbow!
 *   - Multi-colored rainbow orbs spawn in and float about.
 *
 *   LIGHT: Star Fall:
 *   - You're a star. You're one in a million.
 *   - Stars fall out of the night sky spinning round and round.
 *
 * ---
 *
 * Dark-Themed
 *
 *   DARK: Ash Debris:
 *   - Gotta ketchum all.
 *   - Pieces of ash debris flutter through the air.
 *
 *   DARK: Ashfall:
 *   - But unlike thunder, this didn’t stop. It went on and on.
 *   - Volcanic ash pieces descend from the skies above.
 *
 *   DARK: Blood Rain:
 *   - It's actually a real phenomenon.
 *   - However, it's not really blood.
 *
 *   DARK: Dark Orbs:
 *   - Hello darkness, my old friend.
 *   - Dark orbs circle about the screen.
 *
 *   DARK: Fumes:
 *   - Don't inhale any!
 *   - Dark fume clouds plume from below.
 *
 *   DARK: Moonlight Beams:
 *   - Moonlight is the smuggler's enemy.
 *   - Light the path in the night sky by moonshine.
 *
 *   DARK: Shadow Siphon:
 *   - Drain all of the light! CAUTION: Dark lights!
 *   - Light from around is all drained into one area.
 *
 *   DARK: Smog:
 *   - Smoking is bad, mkay?
 *   - Smokey fog (aka Smog) cover the whole screen.
 *
 *   DARK: Smoke Clouds:
 *   - Accompanied by factories owned by evil corporations.
 *   - Smoke clouds blot out the sun.
 *
 *   DARK: Sootfall:
 *   - Try not to build a snowman out of this.
 *   - Smoke-contaminated snow falls from the sky.
 *
 * ---
 *
 * Icons-Related
 *
 *   SLOW: Flying Icons ↑:
 *   MEDIUM: Flying Icons ↑:
 *   FAST: Flying Icons ↑:
 *   - Icons fly to the top at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↗:
 *   MEDIUM: Flying Icons ↗:
 *   FAST: Flying Icons ↗:
 *   - Icons fly upper right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons →:
 *   MEDIUM: Flying Icons →:
 *   FAST: Flying Icons →:
 *   - Icons fly to the right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↘:
 *   MEDIUM: Flying Icons ↘:
 *   FAST: Flying Icons ↘:
 *   - Icons fly lower right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↓:
 *   MEDIUM: Flying Icons ↓:
 *   FAST: Flying Icons ↓:
 *   - Icons fly to the bottom at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↙:
 *   MEDIUM: Flying Icons ↙:
 *   FAST: Flying Icons ↙:
 *   - Icons fly lower left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ←:
 *   MEDIUM: Flying Icons ←:
 *   FAST: Flying Icons ←:
 *   - Icons fly to the left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↖:
 *   MEDIUM: Flying Icons ↖:
 *   FAST: Flying Icons ↖:
 *   - Icons fly upper left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ●:
 *   MEDIUM: Flying Icons ●:
 *   FAST: Flying Icons ●:
 *   - Icons hover at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General Settings for the Weather Effects plugin. There aren't too many
 * settings to adjust here as the majority of the customization options exist
 * within each weather pattern-related Plugin Command instead. However, the
 * options here allow you to control what the weather patterns do not.
 *
 * ---
 * 
 * General Settings
 * 
 *   Pre-Render Generated?:
 *   - Pre-render generated images for weather patterns?
 *   - This reduces lag for on-demand weather patterns.
 *   - This is automatically turned OFF for mobile devices.
 * 
 *     # of Variations:
 *     - How many variations of each rendered weather pattern do you want?
 * 
 *   Smooth Icons?
 *   - Smooth out the icons used for weather sprites?
 *   - Or keep them pixelated?
 * 
 *   Expand Random Spawn?
 *   - Expand random spawn locations by an extra screen size?
 *   - This is for games that have really high walking speeds where the player
 *     can move fast enough where the weather cannot catch up.
 *   - Power settings will be split across multiple settings so readjust your
 *     weather power accordingly.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * There is only one option added through this plugin and it's an option that
 * allows the player to adjust what % of weather sprites are visible on the
 * screen at a time. This is helpful for those who may have weaker computers or
 * those who may find the weather patterns to be a bit intrusive at times.
 * 
 * The number of minimum weather sprites will always be shown. The number of
 * added sprites based on power will be what the weather density value affects.
 * 
 * If you are using the Options Core, the settings found in the Options Core
 * need to be managed instead of these as these will be overwritten in favor of
 * what the Options Core will offer.
 *
 * ---
 * 
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Weather Density' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
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
 * * Olivia
 * * Arisu
 * * Irina
 * * Yanfly
 * * Aries
 * 
 * Creazilla Open-Source
 * * Many of the canvas drawings are made by various artists under Creazilla.
 * * These are under the Creazilla Open-Source License.
 * * They are free for personal and commercial use. No attribution required.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.05: August 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > General Settings > Expand Random Spawn?
 * **** Expand random spawn locations by an extra screen size?
 * **** This is for games that have really high walking speeds where the player
 *      can move fast enough where the weather cannot catch up.
 * **** Power settings will be split across multiple settings so readjust your
 *      weather power accordingly.
 * 
 * Version 1.04: February 16, 2023
 * * Bug Fixes!
 * ** LIGHT: Confetti should no longer only display black stars when pre-render
 *    is turned off. Confetti should now be pastel colors once again. Fix made
 *    by Irina.
 * 
 * Version 1.03: December 15, 2022
 * * Documentation Update!
 * ** Added new note for "Pre-Render Generated" in Plugin Parameters.
 * ** Help file updated for new features.
 * *** This is automatically turned OFF for mobile devices.
 * * Feature Update!
 * ** Games running with this plugin on mobile devices will automatically
 *    default to turning off "Pre-Render Generated" in order to conserve memory
 *    usage. This is NOT disabled automatically for MacOS because memory leak
 *    problems do not apply to MacOS. If you feel like it should be disabled,
 *    we recommend that you turn off "Pre-Render Generated" in the
 *    Plugin Parameters. Update made by Arisu.
 * ** "Pre-Render Generated" is also now set to "false" by default.
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** BASIC: Pre-Render Generated Weather
 * **** Selects target weather type to pre-render the generated graphics.
 * **** This is to help reduce future lag spikes on mobile devices.
 * 
 * Version 1.02: June 2, 2022
 * * Bug Fixes!
 * ** "ICE: Aurora Borealis" default values are now fixed to properly convey
 *    proper verticality and angle. If you have the "ICE: Aurora Borealis"
 *    Plugin Command already in place, delete it and replace it with a new one
 *    for the newer default values. Fix made by Irina.
 * * Documentation Update!
 * ** Updated descriptions for "Upper/Lower?" parameters to the following:
 * *** In battle, they are above the battlers and behind the battlebacks.
 * * Feature Update!
 * ** In battle, the "lower" layer is now moved to behind the battlebacks.
 *    Update made by Irina.
 * 
 * Version 1.01: March 31, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused any weather effects on layers 9 and 10 to
 *    cancel each other out. Fix made by Irina.
 * 
 * Version 1.00 Official Release Date: April 6, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Basic
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Basic
 * @text Category - Basic
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicAdjustWeatherPower
 * @text BASIC: Adjust Weather Power
 * @desc Adjusts the power of the target weather layer(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to adjust?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Adjust weather layer(s) from the upper or lower layers?
 * @default upper
 * 
 * @arg Power:eval
 * @text Power
 * @desc Adjust power by how much? Caps at 1 and 9.
 * You may use JavaScript code.
 * @default +1
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully adjust the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely adjust before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicClearWeather
 * @text BASIC: Clear Weather
 * @desc Clears out target weather layer(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to clear?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Clear weather layer(s) from the upper or lower layers?
 * @default both
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully clear the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely clear before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicMemorizeWeather
 * @text BASIC: Memorize Weather
 * @desc Memorizes the settings for target weather pattern(s) so
 * that you can reuse it later.
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to save?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc save weather layer(s) from the upper or lower layers?
 * @default both
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicPreRenderGeneratedWeather
 * @text BASIC: Pre-Render Generated Weather
 * @desc Selects target weather type to pre-render the generated
 * graphics for it. This is to help reduce future lag spikes.
 *
 * @arg WeatherType:str
 * @text Weather Type
 * @type select
 * @option -
 * @option Embers
 * @option FireStorm
 * @option Fireflies
 * @option Fireworks
 * @option FlameHaze
 * @option FlameWall
 * @option HeatClouds
 * @option MeteorShower
 * @option ShootingStars
 * @option SunBeams
 * @option -
 * @option ArcticBeam
 * @option Aurora
 * @option Blizzard
 * @option DiamondDust
 * @option Glistening
 * @option IceFog
 * @option Sleet
 * @option Snow
 * @option SnowClouds
 * @option SnowFlakes
 * @option -
 * @option Discharge
 * @option PlasmaBolt
 * @option PlasmaSurge
 * @option SpiderBolt
 * @option StaticCharge
 * @option Thunderbolt
 * @option ThunderClouds
 * @option ThunderSurge
 * @option PurpleHaze
 * @option UltraViolet
 * @option -
 * @option Bubbles
 * @option CloudBurst
 * @option Drip
 * @option Mist
 * @option Rain
 * @option RainbowArch
 * @option RainClouds
 * @option SoapBubbles
 * @option Steam
 * @option Storm
 * @option -
 * @option AcidRain
 * @option CrumblingCave
 * @option DustClouds
 * @option DustStorm
 * @option HouseDust
 * @option PollutionClouds
 * @option RadioactiveBeam
 * @option SandClouds
 * @option SandStorm
 * @option ToxicGas
 * @option -
 * @option AutumnLeaves
 * @option Balloons
 * @option CherryBlossoms
 * @option DandelionSeeds
 * @option GrassyGust
 * @option GreenLeaves
 * @option Pollen
 * @option Tempest
 * @option WhiteClouds
 * @option Xtreme
 * @option -
 * @option Confetti
 * @option LensFlare
 * @option LightBurst
 * @option LightOrbs
 * @option PastelBrume
 * @option PrismBeams
 * @option PrismBurst
 * @option RainbowClouds
 * @option RainbowOrbs
 * @option Stars
 * @option -
 * @option AshDebris
 * @option AshFall
 * @option BloodRain
 * @option DarkOrbs
 * @option Fumes
 * @option MoonBeams
 * @option SmokeFog
 * @option SmokeCloud
 * @option ShadowBurst
 * @option SootFall
 * @option -
 * @desc Which weather type do you wish to pre-render?
 * This is to help reduce lag spikes when calling weathers.
 * @default Embers
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicReplayMemory
 * @text BASIC: Replay Memorized Weather
 * @desc Replays target memorized weather pattern(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to replay?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Replay weather layer(s) from the upper or lower layers?
 * @default both
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully replay the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely replay before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Fire
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Fire
 * @text Category - Fire-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Embers
 * @text FIRE: Embers
 * @desc Oh, Ember, you will remember. So warm and tender.
 * Embers rise off from the ground upward.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Fireflies
 * @text FIRE: Fireflies
 * @desc Take my love, take my land, take me where I cannot stand.
 * Fireflies will spawn and float around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Firestorm
 * @text FIRE: Firestorm
 * @desc This is fine.
 * Rain fiery bolts of flames from the heavens!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"245\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Fireworks
 * @text FIRE: Fireworks
 * @desc You just gotta ignite the light and let it shine!
 * A shot of fire flies up and blows up into a flower.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"20\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"lower 70%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"245\",\"opacityVariance:num\":\"10\",\"opacityEasingType:str\":\"InCirc\",\"opacityFadeInTime:num\":\"4\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[\\\"30\\\",\\\"60\\\",\\\"90\\\",\\\"120\\\",\\\"150\\\",\\\"180\\\",\\\"210\\\",\\\"240\\\",\\\"270\\\",\\\"300\\\",\\\"330\\\"]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"true\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_FlameHaze
 * @text FIRE: Flame Haze
 * @desc Flaming Hair Blazing Eyes!
 * A fiery smoke clouds the screen!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#f26c4f\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.2\",\"speedVariance:eval\":\"0.3\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_FlameWall
 * @text FIRE: Flame Wall
 * @desc Is it me, or is it hot in here? Oh, it's me.
 * A wall of flames appears on the bottom part of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"lower 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"50\",\"totalPerPower:num\":\"25\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"32\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"32\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_HeatClouds
 * @text FIRE: Heat Clouds
 * @desc Fiery conglomerations of clouds.
 * Heat clouds scorch the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_MeteorShower
 * @text FIRE: Meteor Shower
 * @desc Clustering wishes will become a new shining star!
 * A nonstop swarm of meteors fall in the night sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"6\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.6\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"15\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"true\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"4\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"3\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_ShootingStar
 * @text FIRE: Shooting Stars
 * @desc Make a wish! A wholesome one, please.
 * Shooting stars appear over the horizon of the night sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"6\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"sparkleFinish:eval\":\"true\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"4\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"3\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_SunBeams
 * @text FIRE: Sunlight Beams
 * @desc Aka crepuscular rays. Makes any day brighter!
 * Sun beams shine down from the heavens.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Ice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Ice
 * @text Category - Ice-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_ArcticBeam
 * @text ICE: Arctic Gleam
 * @desc Oh, erie bluish glow of the arctic.
 * Illuminate the frozen land below!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Aurora
 * @text ICE: Aurora Borealis
 * @desc Also known as the Northern Lights.
 * Auroras dance across the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper border\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"32\",\"scale:num\":\"0.90\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"1\",\"ySwaySpeed:eval\":\"0.005\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Blizzard
 * @text ICE: Blizzard
 * @desc Let it go, let it go! Can't hold it back anymore!
 * Concentrated snowfall covers the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"200\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#cccccc\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"12\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"16\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"205\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"12\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_DiamondDust
 * @text ICE: Diamond Dust
 * @desc Diamond dust falls from the skies.
 * Slightly illuminated ice particles descend from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_GlisteningIce
 * @text ICE: Glistening Ice
 * @desc Walkin' on thin ice!
 * Ice particles sparkle from all around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"45\",\"lifespanVariance:num\":\"15\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuad\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-6\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_IceFog
 * @text ICE: Ice Fog
 * @desc Yo! VIP! Let's Kick it!
 * Frozen fog covers the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"8\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Sleet
 * @text ICE: Sleet
 * @desc Slightly heavier and more solid than snow!
 * Frozen ice crystals snow down from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"140\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"8\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Snow
 * @text ICE: Snow
 * @desc Brace yourselves! Winter is coming!
 * Snow falls from the sky and flutters downward.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_SnowClouds
 * @text ICE: Snow Clouds
 * @desc Icy gatherings of clouds ready to deliver snow.
 * Snow clouds blanket the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Snowflakes
 * @text ICE: Snowflakes
 * @desc Snowflake! Snowflake! Little snowflake!
 * Generated snowflakes will have random patterns.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"220\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"5\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"230\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Thunder
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Thunder
 * @text Category - Thunder-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Discharge
 * @text THUNDER: Discharge
 * @desc Danger! Danger! High voltage!
 * Electricity discharges from the sides of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 10%\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"0.5\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"45\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PlasmaBolt
 * @text THUNDER: Plasma Bolt
 * @desc A horizontal bolt of electricity! From left to right!
 * Best used with a Respawn Common Event.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"center screen\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"either 40%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"600\",\"respawnDelayRngPerPower:eval\":\"-60\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PlasmaSurge
 * @text THUNDER: Plasma Surge
 * @desc The windows are becoming stained with a nostalgic color.
 * Nonstop plasma bolts flood the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"center screen\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"either 40%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"30\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PurpleHaze
 * @text THUNDER: Purple Haze
 * @desc Purple haze all around. Don't know if I'm coming up or down.
 * A purple fog blankets the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"96\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#8560a8\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_SpiderLightning
 * @text THUNDER: Spider Lightning
 * @desc Nothing to do with spiders.
 * Bolts expand outwards from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-8\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_StaticCharge
 * @text THUNDER: Static Charge
 * @desc Snap! Crackle! Pop!
 * Highly charged target emits static.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"0.5\",\"scaleVariance:num\":\"0.25\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-12\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thunderbolt
 * @text THUNDER: Thunder Bolt
 * @desc More than just an expensive charging cable. Giant bolt
 * flashes from above! Best used with a Respawn Common Event.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 30%\",\"spawnLocationY:str\":\"middle screen\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"600\",\"respawnDelayRngPerPower:eval\":\"-60\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thunderclouds
 * @text THUNDER: Thunder Clouds
 * @desc These thunderclouds, oh no, no!
 * Thunder-ready clouds fly atop the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#605ca8\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thundersurge
 * @text THUNDER: Thunder Surge
 * @desc When you walk away, you don't hear me say.
 * Nonstop thunder bolts scour the skies.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 30%\",\"spawnLocationY:str\":\"middle screen\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"30\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_UltravioletBeams
 * @text THUNDER: Ultraviolet Beams
 * @desc Get out some of that SPF 100+! (This is NOT real UV Light!)
 * Ultraviolet lights are coming from the sky!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Water
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Water
 * @text Category - Water-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Bubbles
 * @text WATER: Bubbles Rising
 * @desc Let's not burst your bubble!
 * Bubbles will rise up towards the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00aaaa\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_CloudBurst
 * @text WATER: Cloud Burst
 * @desc A sudden massive deluge of rain!
 * A near vertical storm of massive volume.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"4\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#303030\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"8\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"18\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_DrippingWater
 * @text WATER: Dripping Water
 * @desc Leaky ceilings? It's time to call a plumber.
 * Water droplets drip from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"3\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"60\",\"respawnDelayRngPerPower:eval\":\"-6\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Mist
 * @text WATER: Mist
 * @desc Not to be confused with the video game. That has a Y.
 * A suspended mist covers the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Rain
 * @text WATER: Rain
 * @desc Rain, rain, go away! Come again some other day!
 * Raindrops will fall from the sky all over the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RainClouds
 * @text WATER: Rain Clouds
 * @desc It's raining men! Hallelujah! It's raining men, amen!
 * Rain-filled clouds hover menacingly at the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RainbowArch
 * @text WATER: Rainbow Arch
 * @desc Somewhere over the rainbow~
 * A large rainbow arch appears in the corner of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"right border\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"lower border\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.30\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"1\",\"totalPerPower:num\":\"0\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.0025\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RisingSteam
 * @text WATER: Rising Steam
 * @desc Take more photos to train your selfie steam!
 * Steam vapor clouds rise from below.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"0.5\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-9\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"45\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_SoapBubbles
 * @text WATER: Soap Bubbles
 * @desc I will try to blow a bubble that will last all day.
 * Soap bubbles float and hover around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"20\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"30\",\"scaleOut:eval\":\"0.0\",\"scaleOutDuration:eval\":\"30\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.005\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.005\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Storm
 * @text WATER: Storm
 * @desc A MIGHTY storm!
 * Large and long raindrops fall from the sky creating a storm.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#404040\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"16\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"245\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Earth
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Earth
 * @text Category - Earth-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_AcidRain
 * @text EARTH: Acid Rain
 * @desc Real acid rain doesn't glow in the dark.
 * But this one sure does.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#c4df9b\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_CrumblingCave
 * @text EARTH: Crumbling Cave
 * @desc Do NOT grab any suspiciously placed rubies.
 * Bits and pieces of the cave ceiling crumble.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper border\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"OutQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.00\",\"scaleVariance:num\":\"0.00\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.5\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"8\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"8\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_DustClouds
 * @text EARTH: Dust Clouds
 * @desc Darkened dust covers the surroundings!
 * Dust clouds will fill up the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"72\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#a67c52\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_DustStorm
 * @text EARTH: Dust Storm
 * @desc Happens in places other than Nashville.
 * Darkened dust launches across the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#a67c52\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_HouseDust
 * @text EARTH: House Dust
 * @desc Floating white dust particles with nowhere to go.
 * So they'll just make themselves at home.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.0025\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.0025\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_PollutionClouds
 * @text EARTH: Pollution Clouds
 * @desc Absolutely disgusting colored pollution clouds.
 * Pollution clouds cover the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_RadioactiveBeams
 * @text EARTH: Radioactive Beams
 * @desc Alert! Alert! Alert! Nuclear green lights!
 * Nuclear green lights irradiate from the clouds.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#00ff00\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_SandClouds
 * @text EARTH: Sand Clouds
 * @desc Straight from the Pyramids of Giza!
 * Sand clouds will surround everything!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_Sandstorm
 * @text EARTH: Sandstorm
 * @desc Darude! Sandstorm!
 * Sand blasts across the screen from one end to the other.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocation:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_ToxicGas
 * @text EARTH: Toxic Gas
 * @desc More toxic than the comments section of social media!
 * A foggy green gas blankets the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"type:str":"straight","lockedOffsetX:eval":"+0","lockedOffsetY:eval":"+0","speed:eval":"1.2","speedVariance:eval":"0.3","angle:eval":"180","alignAngle:eval":"false","angleVariance:eval":"2","angleOffset:eval":"+0","angleArc:eval":"+0","angleSwayRange:eval":"0","angleSwaySpeed:eval":"0.01","spinSpeed:eval":"+0","spinSpeedVariance:eval":"0","reverseSpin:eval":"false","xSwayRange:eval":"0","xSwaySpeed:eval":"0.01","ySwayRange:eval":"0","ySwaySpeed:eval":"0.01"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Wind
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Wind
 * @text Category - Wind-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_AutumnLeaves
 * @text WIND: Autumn Leaves
 * @desc Red, yellow, orange, brown leaves are falling all around.
 * See them dance in the cool, fall air. 
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Balloons
 * @text WIND: Balloons
 * @desc You and I in a little toy shop,
 * buy a bag balloons with the money we've got.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.5\",\"scaleInDuration:eval\":\"30\",\"scaleOut:eval\":\"1.5\",\"scaleOutDuration:eval\":\"30\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"74\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+15\",\"angleArc:eval\":\"0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_CherryBlossoms
 * @text WIND: Cherry Blossoms
 * @desc The emblem of love and good luck.
 * Cherry blossom petals flutter down from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuint\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.15\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"320\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_DandelionSeeds
 * @text WIND: Dandelion Seeds
 * @desc Floating on the air. Never seem to care.
 * Dandelion seeds will flow up into the air.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.15\",\"scaleVariance:num\":\"0.05\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"30\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"-45\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_GrassyGust
 * @text WIND: Grassy Gust
 * @desc A gust of wind! From right to left, grass flies with it.
 * Best when paired with a Tempest.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuint\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.15\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"320\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_GreenLeaves
 * @text WIND: Green Leaves
 * @desc Leaf me alone!
 * Green leaves fall above, spinning round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InCubic\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.30\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"310\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Pollen
 * @text WIND: Pollen
 * @desc Bless you! Gesundheit! Salute!
 * A cloud of pollen grains travel about the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"48\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#fff799\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"15\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"8\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Tempest
 * @text WIND: Tempest
 * @desc Brought to you by a friendly slime.
 * Powerful gusts of wind blast across the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.4\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_WhiteClouds
 * @text WIND: White Clouds
 * @desc Not the main character from Final Fantasy VII.
 * Fluffy white clouds slowly drift across the upper screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_XtremeSpeed
 * @text WIND: Xtreme Speed
 * @desc Gotta go fast! Speedlines whip past!
 * Works best below the tileset layer.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"middle screen\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"100\",\"opacityVariance:num\":\"28\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"2.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"2.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"15\",\"totalPerPower:num\":\"3\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"24\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Light
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Light
 * @text Category - Light-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_Confetti
 * @text LIGHT: Confetti
 * @desc Party like it's 1999!
 * Confetti of differing shapes drop from the sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"40\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LensFlare
 * @text LIGHT: Lens Flare
 * @desc Relive the amateur days from Photoshop!
 * A lens flare descends from the upper corner of the sky!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"left 10%\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"upper 10%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"1\",\"totalPerPower:num\":\"0\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.0025\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LightBurst
 * @text LIGHT: Light Burst
 * @desc Sometimes also known as Sun Bursts. CAUTION: Bright lights!
 * Bright white light bursts out from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"12\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"2\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LightOrbs
 * @text LIGHT: Light Orbs
 * @desc Show me the light!
 * Light orbs fly round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PastelBrume
 * @text LIGHT: Pastel Brume
 * @desc Cute pastel colors forming a foggy brume.
 * Various bright colors cover the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.2\",\"speedVariance:eval\":\"0.3\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PrismBurst
 * @text LIGHT: Prism Burst
 * @desc More color than a bag of candy! CAUTION: Bright lights!
 * Lights of all colors expand out from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"12\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"2\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PrismBeams
 * @text LIGHT: Prismatic Gleam
 * @desc Our seven lights spring to the task!
 * Colors of all sorts shine from the skies high above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_RainbowClouds
 * @text LIGHT: Rainbow Clouds
 * @desc Colorful clouds dot the heavens.
 * Multi-colored clouds slowly drift across the upper screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 30%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"32\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_RainbowOrbs
 * @text LIGHT: Rainbow Orbs
 * @desc Taste the rainbow!
 * Multi-colored rainbow orbs spawn in and float about.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_Stars
 * @text LIGHT: Star Fall
 * @desc You're a star. You're one in a million.
 * Stars fall out of the night sky spinning round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"5\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"-3\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Dark
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Dark
 * @text Category - Dark-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_AshDebris
 * @text DARK: Ash Debris
 * @desc Gotta ketchum all.
 * Pieces of ash debris flutter through the air.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocation:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"180\",\"opacityVariance:num\":\"40\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"45\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"-3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Ashfall
 * @text DARK: Ashfall
 * @desc But unlike thunder, this didn’t stop. It went on and on.
 * Volcanic ash pieces descend from the skies above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"180\",\"opacityVariance:num\":\"40\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"215\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_BloodRain
 * @text DARK: Blood Rain
 * @desc It's actually a real phenomenon.
 * However, it's not really blood.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#cc0000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_DarkOrbs
 * @text DARK: Dark Orbs
 * @desc Hello darkness, my old friend.
 * Dark orbs circle about the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"2\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Fumes
 * @text DARK: Fumes
 * @desc Don't inhale any!
 * Dark fume clouds plume from below.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"0.8\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-9\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"45\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_MoonBeams
 * @text DARK: Moonlight Beams
 * @desc Moonlight is the smuggler's enemy.
 * Light the path in the night sky by moonshine.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#d0bbee\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_ShadowBurst
 * @text DARK: Shadow Siphon
 * @desc Drain all of the light! CAUTION: Dark lights!
 * Light from around is all drained into one area.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"10\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"0.1\",\"scaleOutDuration:eval\":\"20\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_SmokeFog
 * @text DARK: Smog
 * @desc Smoking is bad, mkay?
 * Smokey fog (aka Smog) cover the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#222222\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"12\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_SmokeClouds
 * @text DARK: Smoke Clouds
 * @desc Accompanied by factories owned by evil corporations.
 * Smoke clouds blot out the sun.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Sootfall
 * @text DARK: Sootfall
 * @desc Try not to build a snowman out of this.
 * Smoke-contaminated snow falls from the sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons1
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons1
 * @text Category - Icons (Slow)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Up
 * @text SLOW: Flying Icons ↑
 * @desc Icons fly to the top at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_UpperRight
 * @text SLOW: Flying Icons ↗
 * @desc Icons fly upper right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Right
 * @text SLOW: Flying Icons →
 * @desc Icons fly to the right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_LowerRight
 * @text SLOW: Flying Icons ↘
 * @desc Icons fly lower right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Down
 * @text SLOW: Flying Icons ↓
 * @desc Icons fly to the bottom at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_LowerLeft
 * @text SLOW: Flying Icons ↙
 * @desc Icons fly lower left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Left
 * @text SLOW: Flying Icons ←
 * @desc Icons fly to the left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_UpperLeft
 * @text SLOW: Flying Icons ↖
 * @desc Icons fly upper left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Mid
 * @text SLOW: Flying Icons ●
 * @desc Icons hover at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"1\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"1\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons2
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons2
 * @text Category - Icons (Medium)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Up
 * @text MEDIUM: Flying Icons ↑
 * @desc Icons fly to the top at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_UpperRight
 * @text MEDIUM: Flying Icons ↗
 * @desc Icons fly upper right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Right
 * @text MEDIUM: Flying Icons →
 * @desc Icons fly to the right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_LowerRight
 * @text MEDIUM: Flying Icons ↘
 * @desc Icons fly lower right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Down
 * @text MEDIUM: Flying Icons ↓
 * @desc Icons fly to the bottom at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_LowerLeft
 * @text MEDIUM: Flying Icons ↙
 * @desc Icons fly lower left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Left
 * @text MEDIUM: Flying Icons ←
 * @desc Icons fly to the left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_UpperLeft
 * @text MEDIUM: Flying Icons ↖
 * @desc Icons fly upper left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Mid
 * @text MEDIUM: Flying Icons ●
 * @desc Icons hover at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons3
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons3
 * @text Category - Icons (Fast)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Up
 * @text FAST: Flying Icons ↑
 * @desc Icons fly to the top at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_UpperRight
 * @text FAST: Flying Icons ↗
 * @desc Icons fly upper right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Right
 * @text FAST: Flying Icons →
 * @desc Icons fly to the right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_LowerRight
 * @text FAST: Flying Icons ↘
 * @desc Icons fly lower right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Down
 * @text FAST: Flying Icons ↓
 * @desc Icons fly to the bottom at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_LowerLeft
 * @text FAST: Flying Icons ↙
 * @desc Icons fly lower left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Left
 * @text FAST: Flying Icons ←
 * @desc Icons fly to the left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_UpperLeft
 * @text FAST: Flying Icons ↖
 * @desc Icons fly upper left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Mid
 * @text FAST: Flying Icons ●
 * @desc Icons hover at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"4\",\"ySwaySpeed:eval\":\"0.01\"}"}
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
 * @param WeatherEffects
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
 * @desc General Settings for the Weather Effects plugin.
 * @default {"PreRenderGenImage:eval":"false","RenderVariations:num":"16","SmoothIcons:eval":"true"}
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options Settings for the Weather Effects plugin.
 * @default {"Options":"","AddWeatherDensityOption:eval":"true","AdjustRect:eval":"true","Name:str":"Weather Density"}
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
 * @param PreRenderGenImage:eval
 * @text Pre-Render Generated?
 * @type boolean
 * @on Pre-render
 * @off Render when needed
 * @desc Pre-render generated images for weather patterns?
 * This reduces lag for on-demand weather patterns.
 * @default false
 *
 * @param RenderVariations:num
 * @text # of Variations
 * @parent PreRenderGenImage:eval
 * @min 1
 * @desc How many variations of each rendered weather pattern do you want?
 * @default 16
 *
 * @param SmoothIcons:eval
 * @text Smooth Icons?
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Smooth out the icons used for weather sprites?
 * Or keep them pixelated?
 * @default true
 *
 * @param ExpandedRandomSpawn:eval
 * @text Expand Random Spawn?
 * @type boolean
 * @on Expand
 * @off Don't Expand
 * @desc Expand random spawn locations by an extra screen size?
 * @default false
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
 * @param AddWeatherDensityOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Weather Density' option to the Options menu?
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
 * @default Weather Density
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Custom:
 *
 * @param sprite:struct
 * @text Sprite Settings
 * @type struct<Sprite>
 * @desc The general settings involving the weather sprites.
 * @default {"lifespan:num":"60","lifespanVariance:num":"0","spawnLocationX:str":"random","spawnLocationY:str":"random","mapBound:eval":"true","opacity:num":"255","opacityVariance:num":"0","scale:num":"1.0","scaleVariance:num":"0","totalMinimum:num":"20","totalPerPower:num":"5"}
 *
 * @param dimmer:struct
 * @text Dimmer Overlay
 * @type struct<Dimmer>
 * @desc Settings involving the dimmer overlay cast over the screen.
 * @default {"color:str":"#000000","opacityMinimum:num":"0","opacityPerPower:num":"0"}
 *
 * @param image:struct
 * @text Image Settings
 * @type struct<Image>
 * @desc Settings for the images used for the weather sprites.
 * Weathers with multiple images will be picked at random.
 * @default {"generated:eval":"true","generatedWeight:num":"1","icons:arraynum":"[]","iconsWeight:num":"16","pictures:arraystr":"[]","picturesWeight:num":"16","blendMode:num":"0","hueVariations:arraynum":"[]","toneVariations:arrayeval":"[]"}
 *
 * @param flags:struct
 * @text Special Effects
 * @type struct<Flags>
 * @desc Specialized effects that are turned on for specific weather
 * types can be found here.
 * @default {"alwaysVisiblePlayer:eval":"false"}
 *
 * @param trajectory:struct
 * @text Trajectory Settings
 * @type struct<Trajectory>
 * @desc Settings used to determine the trajectory a weather sprite
 * will take and how they behave on it.
 * @default {"type:str":"straight","speed:eval":"1","angle:eval":"0","alignAngle:eval":"true","angleVariance:eval":"0","angleOffset:eval":"+0","angleSwayRange:eval":"0","angleSwaySpeed:eval":"0.01","xSwayRange:eval":"0","xSwaySpeed:eval":"0.01","ySwayRange:eval":"0","ySwaySpeed:eval":"0.01"}
 *
 */
/* ----------------------------------------------------------------------------
 * Sprite Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sprite:
 *
 * @param lifespan:num
 * @text Lifespan
 * @desc Lifespan of each weather sprite in frames.
 * @default 60
 *
 * @param lifespanVariance:num
 * @text Variance
 * @parent lifespan:num
 * @desc What variance is there to each lifespan value?
 * @default 0
 *
 * @param spawnLocationX:str
 * @text Spawn Location X
 * @type select
 * @option - 
 * @option random
 * @option - 
 * @option left border
 * @option left 10%
 * @option left 20%
 * @option left 30%
 * @option left 40%
 * @option left 50%
 * @option left 60%
 * @option left 70%
 * @option left 80%
 * @option left 90%
 * @option - 
 * @option center screen
 * @option center 10%
 * @option center 20%
 * @option center 30%
 * @option center 40%
 * @option center 50%
 * @option center 60%
 * @option center 70%
 * @option center 80%
 * @option center 90%
 * @option - 
 * @option right border
 * @option right 10%
 * @option right 20%
 * @option right 30%
 * @option right 40%
 * @option right 50%
 * @option right 60%
 * @option right 70%
 * @option right 80%
 * @option right 90%
 * @option - 
 * @option sides border
 * @option sides 10%
 * @option sides 20%
 * @option sides 30%
 * @option sides 40%
 * @option - 
 * @desc What x location should the weather sprites appear?
 * @default random
 * 
 * @param spawnOffsetX:eval
 * @text Offset X
 * @parent spawnLocationX:str
 * @desc Offset the spawn location by this many pixels.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param spawnLocationY:str
 * @text Spawn Location Y
 * @type select
 * @option - 
 * @option random
 * @option - 
 * @option upper border
 * @option upper 10%
 * @option upper 20%
 * @option upper 30%
 * @option upper 40%
 * @option upper 50%
 * @option upper 60%
 * @option upper 70%
 * @option upper 80%
 * @option upper 90%
 * @option - 
 * @option middle screen
 * @option middle 10%
 * @option middle 20%
 * @option middle 30%
 * @option middle 40%
 * @option middle 50%
 * @option middle 60%
 * @option middle 70%
 * @option middle 80%
 * @option middle 90%
 * @option - 
 * @option - 
 * @option lower border
 * @option lower 10%
 * @option lower 20%
 * @option lower 30%
 * @option lower 40%
 * @option lower 50%
 * @option lower 60%
 * @option lower 70%
 * @option lower 80%
 * @option lower 90%
 * @option - 
 * @option either border
 * @option either 10%
 * @option either 20%
 * @option either 30%
 * @option either 40%
 * @option - 
 * @desc What y location should the weather sprites appear?
 * @default random
 * 
 * @param spawnOffsetY:eval
 * @text Offset Y
 * @parent spawnLocationY:str
 * @desc Offset the spawn location by this many pixels.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param mapBound:eval
 * @text Map Bound?
 * @parent spawnLocation:str
 * @type boolean
 * @on Moves with Map
 * @off Screen-Locked
 * @desc Do the weather sprites move with the map scrolling?
 * @default true
 *
 * @param opacity:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Starting opacity of each weather sprite in frames.
 * @default 255
 *
 * @param opacityVariance:num
 * @text Variance
 * @parent opacity:num
 * @desc What variance is there to each starting opacity value?
 * @default 0
 *
 * @param opacityEasingType:str
 * @text Easing Type
 * @parent opacity:num
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply for opacity.
 * @default Linear
 *
 * @param opacityFadeInTime:num
 * @text Fade In Time
 * @parent opacity:num
 * @type number
 * @desc How many frames does it take for the sprite to fade in?
 * Use 0 to start immediately at full opacity.
 * @default 16
 *
 * @param scale:num
 * @text Scale
 * @desc What is the scale of the sprite?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param scaleVariance:num
 * @text Variance
 * @parent scale:num
 * @desc What variance is there to the main scale value?
 * @default 0
 *
 * @param scaleRatioX:num
 * @text Ratio X
 * @parent scale:num
 * @desc What is the ratio of this sprite's scale X?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param scaleRatioY:num
 * @text Ratio Y
 * @parent scale:num
 * @desc What is the ratio of this sprite's scale Y?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param totalMinimum:num
 * @text Total Sprite Minimum
 * @desc What is the minimum number of sprites on the screen?
 * @default 20
 *
 * @param totalPerPower:num
 * @text Total Per Power
 * @parent totalMinimum:num
 * @desc Increase the total number of sprites per power by this.
 * Lowest power is 1. Highest power is 9.
 * @default 5
 *
 */
/* ----------------------------------------------------------------------------
 * Dimmer Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Dimmer:
 *
 * @param color:str
 * @text Color
 * @desc Dimmer color. This uses #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param opacityMinimum:num
 * @text Opacity Minimum
 * @parent totalMinimum:num
 * @desc What is the minimum opacity value for the dimmer?
 * @default 0
 *
 * @param opacityPerPower:num
 * @text Opacity Per Power
 * @parent opacityMinimum:num
 * @desc What is the total opacity value per power for the dimmer?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Image Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Image:
 *
 * @param generated:eval
 * @text Generated Image?
 * @type boolean
 * @on Include
 * @off Exclude
 * @desc Include the plugin-generated image for this weather type?
 * @default true
 *
 * @param generatedWeight:num
 * @text Weight
 * @parent generated:eval
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param icons:arraynum
 * @text Icon(s)
 * @type string[]
 * @desc Which icons do you wish to include for the images to appear as?
 * @default []
 *
 * @param iconsWeight:num
 * @text Weight
 * @parent icons:arraynum
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param pictures:arraystr
 * @text Picture(s)
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Which pictures do you wish to include for the images to appear as?
 * @default []
 *
 * @param picturesWeight:num
 * @text Weight
 * @parent pictures:arraystr
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param blendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the weather sprite?
 * @default 0
 *
 * @param hueVariations:arraynum
 * @text Hue Variations
 * @type number[]
 * @min 0
 * @max 360
 * @desc What hue variations will be randomly selected from?
 * Use a value between 0 and 360.
 * @default ["0"]
 *
 * @param toneVariations:arrayeval
 * @text Tone Variations
 * @type string[]
 * @desc What tone variations will be randomly selected from?
 * Format for each: [Red, Green, Blue, Gray]
 * @default ["[0,0,0,0]"]
 *
 */
/* ----------------------------------------------------------------------------
 * Special Flags Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Flags:
 *
 * @param alwaysVisiblePlayer:eval
 * @text Allow Visible Player?
 * @type boolean
 * @on Visible
 * @off Ignore
 * @desc Make the player more visible by reducing the
 * opacity of nearby weather sprites?
 * @default false
 *
 * @param flatFlutter:eval
 * @text Flat Fluttering?
 * @type boolean
 * @on Object is Flat
 * @off Object has Volume
 * @desc Is the object flat and flutters in the wind?
 * Or does the object have volume and doesn't?
 * @default false
 *
 * @param longevity:eval
 * @text Longevity
 * @type boolean
 * @on Lasts Until Changed
 * @off Normal
 * @desc Weather effects with longevity don't expire until
 * the weather pattern type is changed.
 * @default false
 *
 * @param hueSwayRange:eval
 * @text Hue Sway Range
 * @desc How much should the hue sway back and forth?
 * JavaScript code can be used.
 * @default 0
 *
 * @param hueSwaySpeed:eval
 * @text Hue Sway Speed
 * @parent hueSwayRange:eval
 * @desc What speed does the angle sway? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param respawnCommonEventID:num
 * @text Respawn Common Event
 * @type common_event
 * @desc Play a specific Common Event when this event respawns?
 * The Common Event will run as a Once Parallel.
 * @default 0
 *
 * @param respawnDelayMin:eval
 * @text Respawn Delay Minimum
 * @desc Is there a delay to the respawn? This is how many
 * frames the sprite must wait before respawning.
 * @default 0
 *
 * @param respawnDelayRngPerPower:eval
 * @text RNG Delay Per Power
 * @parent respawnDelayMin:eval
 * @desc How many randomized frames of delay per power must be waited?
 * @default +0
 *
 * @param scaleIn:eval
 * @text Scale In
 * @desc What scale ratio should the sprite spawn in at?
 * Use 1.0 for regular ratios. You may use JavaScript.
 * @default 1.0
 *
 * @param scaleInDuration:eval
 * @text Duration
 * @parent scaleIn:eval
 * @desc How many frames should the scale in effect take?
 * Scale in will always head towards 1.0.
 * @default 10
 *
 * @param scaleOut:eval
 * @text Scale Out
 * @desc What scale ratio should the sprite despawn out at?
 * Use 1.0 for regular ratios. You may use JavaScript.
 * @default 1.0
 *
 * @param scaleOutDuration:eval
 * @text Duration
 * @parent scaleOut:eval
 * @desc How many frames should the scale out effect take?
 * Scale in will usually head from 1.0.
 * @default 10
 * 
 * @param CustomFinish
 * @text Custom Finish
 *
 * @param fireworksFinish:eval
 * @text Fireworks Finish?
 * @parent CustomFinish
 * @type boolean
 * @on Show me fireworks!
 * @off It's not right!
 * @desc At the end of the weather particle's lifespan,
 * finish up with a fireworks explosion?
 * @default false
 *
 * @param sparkleFinish:eval
 * @text Sparkle Finish?
 * @parent CustomFinish
 * @type boolean
 * @on Sparkle YES!
 * @off NO! No Sparkle!
 * @desc At the end of the weather particle's lifespan,
 * finish up with a fabulous spinning sparkle effect?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Trajectory Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Trajectory:
 *
 * @param type:str
 * @text Trajectory Type
 * @type select
 * @option -
 * @option Straight: Follows the trajectory
 * @value straight
 * @option Frozen: Does not follow a trajectory
 * @value frozen
 * @option -
 * @option Player-Locked: Map only! Center of sprite is locked on player
 * @value player
 * @option Follower-Locked: Map only! Center of sprite is locked on target follower
 * @value follower
 * @option Event-Locked: Map only! Center of sprite is locked on target event
 * @value event
 * @option -
 * @option Actor-Locked: Battle only! Center of sprite is locked on target actor
 * @value actor
 * @option Enemy-Locked: Battle only! Center of sprite is locked on target enemy
 * @value enemy
 * @option User-Locked: Battle only! Center of sprite is locked on current user
 * @value user
 * @option Target-Locked: Battle only! Center of sprite is locked on current target
 * @value target
 * @option -
 * @desc What trajectory type is used?
 * @default straight
 * 
 * @param lockedID:eval
 * @text Locked ID/Index
 * @parent type:str
 * @desc For locked trajectories only. Input the follower index.
 * Or ID of event, actor, enemy.
 * @default 0
 * 
 * @param lockedOffsetX:eval
 * @text Offset X (Locked)
 * @parent type:str
 * @desc For locked trajectories only.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param lockedOffsetY:eval
 * @text Offset Y (Locked)
 * @parent type:str
 * @desc For locked trajectories only.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param speed:eval
 * @text Speed
 * @desc What speed is the sprite moving at? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 1
 *
 * @param speedVariance:eval
 * @text Speed Variance
 * @parent speed:eval
 * @desc What variance is there to the speed value?
 * @default 0
 *
 * @param angle:eval
 * @text Angle
 * @desc What angle (0 to 360) is the sprite moving toward?
 * JavaScript code can be used.
 * @default 0
 *
 * @param alignAngle:eval
 * @text Align Angle?
 * @parent angle:eval
 * @type boolean
 * @on Rotates to Align
 * @off Does Not Rotate
 * @desc Should the sprite rotate itself according to the angle
 * it is moving at across the screen?
 * @default true
 *
 * @param angleVariance:eval
 * @text Angle Variance
 * @parent angle:eval
 * @desc What variance is there to the base angle?
 * @default 0
 *
 * @param angleOffset:eval
 * @text Visual Angle Offset
 * @parent angle:eval
 * @desc Offset the visual by this many degrees. Used for images
 * that aren't made aligned with 0 degrees facing left.
 * @default +0
 *
 * @param angleArc:eval
 * @text Angle Arc
 * @desc How should the trajectory arc when the sprite moves?
 * JavaScript code can be used.
 * @default +0
 *
 * @param angleSwayRange:eval
 * @text Angle Sway Range
 * @desc How much should the angle sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param angleSwaySpeed:eval
 * @text Angle Sway Speed
 * @parent angleSwayRange:eval
 * @desc What speed does the angle sway? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param spinSpeed:eval
 * @text Spin Speed
 * @desc What speed do the sprites spin?
 * JavaScript code can be used.
 * @default +0
 *
 * @param spinSpeedVariance:eval
 * @text Spin Speed Variance
 * @parent spinSpeed:eval
 * @desc What variance is there to the spin speed?
 * @default 0
 *
 * @param reverseSpin:eval
 * @text Reverse Spin?
 * @parent spinSpeed:eval
 * @type boolean
 * @on Can Reverse Spin
 * @off No Reverse Spin
 * @desc Can the spin go in the reverse direction?
 * @default false
 *
 * @param xSwayRange:eval
 * @text X Sway Range
 * @desc How much should the X value sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param xSwaySpeed:eval
 * @text X Sway Speed
 * @parent xSwayRange:eval
 * @desc What speed does the sway move? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param ySwayRange:eval
 * @text Y Sway Range
 * @desc How much should the Y value sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param ySwaySpeed:eval
 * @text Y Sway Speed
 * @parent ySwayRange:eval
 * @desc What speed does the sway move? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 */
//=============================================================================

const _0x32d3d9=_0x15da;function _0x15da(_0x2893f6,_0x209dc0){const _0x1f884b=_0x1f88();return _0x15da=function(_0x15da42,_0x977968){_0x15da42=_0x15da42-0x1eb;let _0x598cd6=_0x1f884b[_0x15da42];return _0x598cd6;},_0x15da(_0x2893f6,_0x209dc0);}(function(_0x3b6f59,_0x38058f){const _0x422bff=_0x15da,_0x5e6df0=_0x3b6f59();while(!![]){try{const _0x4af678=parseInt(_0x422bff(0x532))/0x1+-parseInt(_0x422bff(0x292))/0x2*(parseInt(_0x422bff(0x30a))/0x3)+parseInt(_0x422bff(0x522))/0x4*(-parseInt(_0x422bff(0x5e0))/0x5)+parseInt(_0x422bff(0x271))/0x6*(-parseInt(_0x422bff(0x3b5))/0x7)+-parseInt(_0x422bff(0x2be))/0x8*(-parseInt(_0x422bff(0x382))/0x9)+-parseInt(_0x422bff(0x45c))/0xa+-parseInt(_0x422bff(0x2aa))/0xb*(-parseInt(_0x422bff(0x5f8))/0xc);if(_0x4af678===_0x38058f)break;else _0x5e6df0['push'](_0x5e6df0['shift']());}catch(_0x575c1e){_0x5e6df0['push'](_0x5e6df0['shift']());}}}(_0x1f88,0x649f0));function _0x1f88(){const _0x2338fd=['fast_icons_7','plasmasurge','_customModified','#f68e56','calculateScaleX','flamehaze','map','addGeneralOptions','left\x2090%','sandstorm','setupIconFrame','rainclouds','status','_cached_WeatherEffects_Icons','tempest','fumes','log','_weatherParent','WEATHER_EFFECTS_DEBUG_GENERATE_MSG','Wind_GreenLeaves','adaptWeatherLayerData','center\x2050%','createLinearGradient','reverse','center\x2030%','weatherEffectsDiamondDust','_cached_WeatherEffects_Spiderbolt','Settings','rgba(','#aaaaff','#fffbc7','upper\x2070%','drip','maxSprites','WEATHER_EARTH_COLORS','left\x2030%','drawRainbowArch','#13ffee','#e6cab9','#aaffaa','frameCount','#888800','getGeneratedWeatherParticle','weatherEffectsAurora','displayY','weatherEffectsRadioactiveBeams','_cached_WeatherEffects_Ashfall','randomizeBitmapType','Earth_RadioactiveBeams','isSceneBattle','lower\x2050%','Fast_Icons_LowerLeft','height','WEATHER_AUTUMN_COLORS','createBattleback','getWeatherLayerData','RadiansToDegrees','update','fast_icons_1','weatherEffectsBloodRain','rainbowclouds','#440000','createNewWeatherLayers','lower\x2010%','setupWeatherEffectNotetags','Earth_DustStorm','weatherEffectsSleet','makeData','medium_icons_3','hueVariations','weatherEffectsNone','lightburst','_cached_WeatherEffects_RainbowOrbs','calculateScaleY','cherryblossoms','_cached_WeatherEffects_FlameWall','anchor','Medium_Icons_Down','Ice_Snowflakes','min','slow_icons_9','_branches','_cached_WeatherEffects_Sleet','opacityVariance','updateOpacityEasing','fireflies','BasicAdjustWeatherPower','_opacityFadeInTime','drawMultiPointPolygon','_cached_WeatherEffects_Embers','_lockedOffsetX','Fire_FlameHaze','Fast_Icons_UpperLeft','rgba(%1,%1,255,1)','moveTo','screenWidth','greenleaves','rgba(%1,255,%1,1)','WEATHER_EFFECTS_MAX_VARIATIONS','InQuad','#ccffaa','arc','setLayerData','lighter','WEATHER_RAINBOW_CLOUD_COLORS','_lifespan','#efcba2','Fire_Fireworks','initMembers','WEATHER_PRIMARY_COLORS','Game_Map_setup','screenHeight','length','lockedOffsetX','updatePositionFailsafeTrajectory','WEATHER_LIGHT_COLORS','drawFireworksMissile','destroy','_flags','_baseAngle','heatclouds','_notLoadedReady','drawCloud','ySwaySpeed','image','_cached_WeatherEffects_RainbowArch','translate','_cached_WeatherEffects_GreenLeaves','upper\x2010%','WEATHER_FLAME_COLORS','wait','weatherEffectsAutumnLeaves','weatherEffectsIcons','toneVariations','_spinAngle','Wind_CherryBlossoms','ARRAYEVAL','applyPluginCmdSettingsLayers','141325mIZiBe','straight','glistening','_cached_WeatherEffects_Mist','#ddffff','cos','#a900ff','getWeatherLayerSprite','sparkle','middle\x2080%','_updateAllSprites','WEATHER_CONFETTI_COLORS','frozen','_cached_WeatherEffects_CloudBurst','description','rebornFlags','#ea916d','loadPictureBitmap','updateScale','drawImage','#ddddff','#d2c8c5','Earth_CrumblingCave','Scene_Options_maxCommands','1637580ZpkOHj','format','processSparkleFinish','clearCircle','#ba7959','#aa00ff','round','index','WEATHER_PASTEL_BRUME_COLORS','clearWeatherLayers','_xSwayRange','VisuMZ_0_CoreEngine','Name','_strokeWidth','_cached_WeatherEffects_Sparkle','weatherEffectsSandClouds','blizzard','SmoothIcons','clamp','_cached_WeatherEffects_UvBeam','rgba(128,255,128,0)','_alignAngle','weatherEffectsRainbowArch','screenX','rebornBitmap','_cached_WeatherEffects_SunBeam','_cached_WeatherEffects_Fumes','WEATHER_SOAP_BUBBLE_COLORS','waterdrop','#aaccff','MakeFloatVariance','#f26522','strokeStyle','#92d450','respawnCommonEventID','Dark_SmokeFog','pollen','ConvertParams','moonbeams','Thunder_PlasmaSurge','_cached_WeatherEffects_PastelBrume','#821d1c','destination-out','WEATHER_CLOUD_DARK_COLORS','aurora','remove','WEATHER_MOONLIGHT_COLORS','#9cdaf2','fast_icons_2','left','middle\x2090%','bitmap','iconWidth','#a700ff','toLowerCase','AddOption','white','replace','maxCommands','WEATHER_GREEN_LEAVES_COLORS','lower','longevity','Spriteset_Battle_createBattleback','Dark_ShadowBurst','right\x2040%','bezierCurveTo','dustclouds','EVAL','#6dcff6','weatherEffectsFireworksFlower','_lowerLayerSprites','toUpperCase','_cached_WeatherEffects_FireworksFlower','applyPluginCmdSettingsSpecificCases','_xSwayRng','substring','upper\x2050%','weatherEffectsThunderbolt','initialize','#8c6239','filter','_cached_WeatherEffects_Thunderclouds','_cached_WeatherEffects_ArcticBeams','#a67c52','#79bfdb','adjustHexColor','parameters','Fast_Icons_Mid','_cached_WeatherEffects_Tempest','Fast_Icons_UpperRight','whiteclouds','smokefog','weatherEffectsShootingStars','drawPolyArc','RenderVariations','weatherEffectsDustStorm','discharge','ConfigManager_applyData','reverseSpin','worldTransform','#754c24','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','loadWeatherIcons','alwaysVisiblePlayer','stars','_angleSwaySpeed','processRespawnDelay','none','_cached_WeatherEffects_Fireflies','weatherEffectsHeatClouds','_lowerWeatherContainer','Ice_Blizzard','#404040','#aaffff','#f5989d','_cached_WeatherEffects_HeatClouds','lockedOffsetY','WEATHER_NUCLEAR_COLORS','thunderbolt','_flakeRadius','slow_icons_4','Medium_Icons_Mid','Slow_Icons_Left','drawOvalGradiantCircle','_hue','_angleArcTotal','icons','WEATHER_EFFECTS_PRERENDER_GENERATED_IMAGES','updatePosition','ashdebris','getTemporaryContext','updateWeatherLayerPower','crumblingcave','setColor','WEATHER_LIGHTNING_COLORS','generated','_cached_WeatherEffects_RadioactiveBeam','_cached_WeatherEffects_AcidRain','medium_icons_1','6FzxoHc','shadowburst','weatherEffectsTempest','#c5302e','#c4df9b','Fire_MeteorShower','max','#f26c4f','WEATHER_ASH_COLORS','_maxLevel','_cached_WeatherEffects_DarkOrbs','removeUnusedColorFilter','sootfall','_cached_WeatherEffects_Bubbles','radioactivebeam','_respawnDelay','rain','_spinSpeed','WEATHER_EFFECTS_SMOOTH_ICONS','#fffde0','Ice_GlisteningIce','_cached_WeatherEffects_SmokeFog','WEATHER_SUNLIGHT_COLORS','_cached_WeatherEffects_RainbowClouds','scale','_cached_WeatherEffects_PollutionClouds','_cached_WeatherEffects_SandClouds','WEATHER_DANDELION2_COLORS','DegreesToRadian','opacityMinimum','_cached_WeatherEffects_DandelionSeeds','_angleSwayRange','updateOpacityFinal','20yOdnbb','_baseScale','speedVariance','beginPath','upper\x2020%','updateDimmerOpacity','EXPAND_RNG_SPAWN','ARRAYFUNC','weatherEffectsSunBeams','_cached_WeatherEffects_WhiteClouds','power','_cached_WeatherEffects_CrumblingCave','drawSakuraPetal','rebornLifespan','pictures','user','#fff2e4','_colorFilter','_cached_WeatherEffects_Rain','Water_RainClouds','_snowBitmap','sandclouds','_cached_WeatherEffects_Snow','#fcfade','44eHoCoO','AdjustRect','isMobileDevice','center\x2070%','cloudburst','lower\x2060%','angle','#f69679','weatherEffectsToxicGas','_cached_WeatherEffects_DustStorm','weatherEffectsShadowBurst','lifespan','weatherEffectsCherryBlossoms','_flatFlutterSpeedY','applyData','split','both','opacityRate','Dark_Fumes','stringify','64yuuslY','angleSwaySpeed','_cached_WeatherEffects_None','prototype','origin','sunbeams','clearWeatherLayerData','sqrt','#fdc689','#222222','_cached_WeatherEffects_Aurora','loadGeneratedBitmap','#998675','closePath','angleArc','#00aa00','Light_LightOrbs','purplehaze','Earth_SandClouds','#b2e0f2','_scaleRatioX','context','shootingstars','Dark_Sootfall','balloons','_weatherLayers','_flatFlutterRngY','lensflare','#7d7d7d','rgba(%1,255,255,1)','lockedID','rainboworbs','weatherEffectsEmbers','setHue','#e0dd4c','Earth_PollutionClouds','middle\x2060%','_cached_WeatherEffects_MoonBeam','setWeatherLayerData','updatePositionFinal','center\x2010%','WEATHER_POLLEN_COLORS','_speed','weatherEffectsGrassyGust','updatePositionTrajectorySpin','Fire_Firestorm','STRUCT','lower\x2070%','lineWidth','drawRainbowLensFlare','call','#ebebeb','Dark_Ashfall','slow_icons_7','rgba(255,%1,%1,1)','#fbaf5d','test','#ffff00','WEATHER_FROST_COLORS','updateWeatherLayers','Thunder_Thundersurge','Slow_Icons_LowerRight','#004400','weatherEffectsSoapBubbles','weatherEffectsAshDebris','#333333','Power','setFrame','indexOf','weatherEffectsSmokeFog','#fff799','lineTo','Scene_Boot_loadSystemImages','#fbec65','opacityPerPower','return\x200','153222uiSynl','createFrontEnvironmentContainer','updatePositionStraightTrajectory','#d6967c','advanced','scaleIn','_cached_WeatherEffects_AshDebris','setupEventCommandData','fillStyle','Fire_Fireflies','_cached_WeatherEffects_Xtreme','weatherEffectsPollen','Options','#69822d','#ffaaff','hexToArray','weatherEffectsPurpleHaze','addChild','drawSnowflakeLine','rebornSpriteImage','floor','_xSwaySpeed','angleOffset','Thunder_StaticCharge','black','adjustWeatherLayerPower','speed','weatherEffectsMoonBeams','registerCommand','parse','iconsWeight','tileWidth','_cached_WeatherEffects_Balloons','blendMode','WEATHER_RADIOACTIVE_COLORS','updatePositionTrajectory','Ice_Sleet','right\x2060%','_lowerLayer','_cached_WeatherEffects_DiamondDust','#0072bc','newLayer','Earth_AcidRain','#faaacf','Fire_SunBeams','_cached_WeatherEffects_Blizzard','weatherEffectsConfetti','WEATHER_CLOUD_WHITE_COLORS','clone','_realOpacity','isSceneMap','lower\x20border','toxicgas','WEATHER_SUNBEAM_COLORS','_cached_WeatherEffects_LensFlare','type','isPressed','setup','_cached_WeatherEffects_CherryBlossoms','WEATHER_DARKNESS_COLORS','ceil','#fff200','weatherEffectsSpiderbolt','pop','weatherEffectsBubbles','join','totalPerPower','_upperLayerSprites','isPlaytest','_baseTone','smooth','BasicPreRenderGeneratedWeather','_cached_WeatherEffects_IceFog','isNoWeather','_context','_cached_WeatherEffects_DustClouds','rgba(255,64,64,0)','scaleOut','scaleVariance','xSwayRange','applyInverse','bind','_debugID','_opacityFadeInTimeWhole','WEATHER_PRISMBEAM_COLORS','Water_Storm','Water_Mist','weatherEffectsPrismBeams','right\x20border','middle\x2050%','snow','#880000','plasmabolt','#faacab','addWeatherDensityCommand','createRadialGradient','Slow_Icons_LowerLeft','Thunder_Thunderclouds','#888888','target','_weatherIcons','Light_RainbowOrbs','Window_Options_isVolumeSymbol','WEATHER_SAKURA3_COLORS','rebornSpriteHue','opacity','_cached_WeatherEffects_Sandstorm','_dimmerSprite','Medium_Icons_Left','angleSwayRange','center\x2060%','WEATHER_MOON_BEAM_COLORS','diamonddust','weatherEffectsFireflies','slow_icons_2','enemy','#ffaaaa','rgba(128,255,128,1)','findTargetSprite','lightorbs','666243fKATGe','Water_CloudBurst','addCommand','drawDandelionSeed','includes','#000044','Light_PrismBeams','Earth_HouseDust','embers','weatherType','Wind_WhiteClouds','_updateDimmer','weatherEffectsAcidRain','weatherEffectsStars','right','fast_icons_5','_cached_WeatherEffects_FlameHaze','_cached_WeatherEffects_Thunderbolt','xtreme','upper\x2080%','snowflakes','rebornInitialOpacity','Wind_AutumnLeaves','medium_icons_8','Fast_Icons_LowerRight','_blue','WaitForCompletion','updateOpacity','lower\x2080%','_cached_WeatherEffects_BloodRain','createNewWeatherSprites','darkorbs','rainbowarch','createWeather','drawSnowflake','weatherEffectsFireworks','slow_icons_3','weatherEffectsPastelBrume','_lockedOffsetY','#fac4ad','_cached_WeatherEffects_ToxicGas','rebornSprite','isInstanceOfSceneMap','rebornSpriteScale','Fire_FlameWall','Medium_Icons_UpperRight','#cceaf6','#fac159','width','data','_subject','440629EjORWm','medium_icons_7','createTilemap','hueSwayRange','#ffddff','_upperWeatherContainer','Ice_IceFog','thundersurge','Medium_Icons_Up','#ff0000','_trajectoryType','calcEasing','_baseTexture','autumnleaves','fireworksflower','#fddbe2','_cached_WeatherEffects_ShootingStars','WEATHER_SHADOW_BURST_COLORS','_cached_WeatherEffects_PrismBeams','_cached_WeatherEffects_Pollen','_lastDimmerColor','_cached_WeatherEffects_HouseDust','Light_LensFlare','balloon','lower\x2040%','slow_icons_0','_green','#ed1c24','copyPluginCmdCustomSettings','updatePositionMapLockedTarget','weatherEffectsMist','Dark_MoonBeams','_flakeAngle','hexToRgba','#3d8b43','drawCircle','grassyGust','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','upper\x2060%','_noWeather','medium_icons_2','setFullBitmapFrame','weatherEffectsXtremeSpeed','WEATHER_CLOUD_BLUE_COLORS','NUM','addColorStop','Wind_Tempest','_layerID','updateData','Slow_Icons_UpperLeft','transform','flatFlutter','#fcecde','Ice_Snow','#f49ac1','weatherEffectsFirestorm','dimmer','drawBalloon','fillRect','Layer','_cached_WeatherEffects_GrassyGust','globalCompositeOperation','NoWeather','upper\x2030%','_flatFlutterSpeedX','_cached_WeatherEffects_ShadowBurst','actor','#8dc63f','center','left\x2040%','_cached_WeatherEffects_SoapBubbles','updateWeather','General','grassygust','applyEasing','Fast_Icons_Right','fast_icons_9','isLongevityAffected','Thunder_UltravioletBeams','drawMapleLeaf','globalAlpha','_scaleInOutRatio','weatherEffectsDandelionSeeds','loadIconsetBitmap','pollutionclouds','drawFireworksFlower','WEATHER_PASTEL_COLORS','#898989','flags','applyPluginCmdSettingsCustom','screenY','displayX','rgba(255,255,255,0)','event','weatherEffectsWhiteClouds','Fire_HeatClouds','children','#a8c54a','firestorm','Thunder_PlasmaBolt','weatherEffectsStorm','updatePositionBattleLockedTarget','xSwaySpeed','#8393ca','Medium_Icons_UpperLeft','rgba(255,255,%1,1)','storm','medium_icons_9','_weather','_cached_WeatherEffects_Sootfall','#e6654c','_sprites','weatherEffectsSparkle','icefog','weatherEffectsSandstorm','_cached_WeatherEffects_Firestorm','Light_LightBurst','left\x2050%','eventId','ARRAYSTR','Ice_DiamondDust','drawLightning','totalMinimum','prepareGeneratedWeatherImages','save','fill','getLastPluginCommandInterpreter','processFireworksFinish','rgba(255,%1,%1,0.5)','meteorshower','exit','lower\x2020%','#959595','rotate','Thunder_Thunderbolt','ConfigManager_makeData','#e1e1e1','steam','WEATHER_ARCTIC_BEAM_COLORS','Earth_ToxicGas','flamewall','isVolumeSymbol','follower','Earth_Sandstorm','medium_icons_4','sin','Linear','ApplyEasing','_angleArc','rgba(128,%1,255,1)','version','%1Weight','#ffffaa','acidrain','BasicClearWeather','angleVariance','applyPluginCmdSettings','replayMemorizedWeatherLayerData','createUpperWeatherLayer','drawLensFlare','pastelbrume','slow_icons_1','#00ff00','_cached_WeatherEffects_RainClouds','addLoadListener','housedust','#603913','1278500ISwHYj','create','fast_icons_3','fontSize','applyPluginCmdSettingsWait','sleet','WEATHER_FIREFLY_COLORS','MakeVariance','Dark_DarkOrbs','duration','setColorTone','scaleInDuration','memorizeWeatherLayerData','#b4a8b1','#ffbbff','_angleOffset','weatherEffectsBlizzard','_colorTone','updateWeatherLayer','updateFlags','changeWeather','#07ff7f','_cached_WeatherEffects_Stars','Water_SoapBubbles','loadSystemImages','Game_Screen_clearWeather','ySwayRange','_cached_WeatherEffects_Storm','weatherEffectsDarkOrbs','updateScaleInOutRatio','rebornSpawnLocation','updateWeatherLayerDuration','middle\x2030%','drawTreeLeaf','rgba(%1,%2,%3,%4)','_cached_WeatherEffects_AutumnLeaves','STR','rgba(%1,%1,%1,0)','updatePositionTrajectoryAngle','shouldPreRenderWeatherImages','right\x2010%','shift','lower\x2030%','fireworks','#55a743','prismbeams','MAX_LAYERS','respawnDelayRngPerPower','match','rebornSpriteTone','scaleRatioY','restore','control','createLowerWeatherLayer','Water_RainbowArch','shadowColor','bubbles','_cached_WeatherEffects_Fireworks','_scene','left\x2070%','Spriteset_Map_createTilemap','createBattleFieldContainer','upper\x2090%','weatherEffectsHouseDust','WEATHER_UV_BEAM_COLORS','Water_Rain','_baseHue','Dark_SmokeClouds','soapbubbles','_createBitmaps','#ffffbb','duststorm','ARRAYNUM','Ice_ArcticBeam','#111111','_memorizedWeatherData','#b87693','#fff568','_tempCanvas','FUNC','weatherEffectsFlameWall','#b8dfee','weatherEffectsDustClouds','weatherEffectsSnowflakes','canvas','toString','PreRenderGenImage','trim','middle\x2040%','Fast_Icons_Down','#d58e6a','isDebugAllOption','WEATHER_STAR_COLORS','weatherEffectsGreenLeaves','player','getTemporaryCanvas','lifespanVariance','_ySwayRng','weatherEffectsUltravioletBeams','rebornActions','followers','hueSwaySpeed','_cached_WeatherEffects_PurpleHaze','rgba(255,255,255,1)','abs','WeatherEffects','spawnOffsetX','smokecloud','snowclouds','powerTarget','stroke','middle\x2070%','updatePositionTrajectorySway','#ffffff','name','dandelionseeds','playOnceParallelInterpreter','fast_icons_0','right\x2020%','weatherEffectsSnowClouds','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','rebornNewData','WEATHER_AUTUMN_LEAVES_COLORS','WEATHER_DANDELION1_COLORS','#ccaaff','confetti','padZero','constructor','_opacityEasingType','_trajectoryLockedID','ExpandedRandomSpawn','ashfall','sparkleFinish','drawStar','weatherDensity','WEATHER_GRASSY_GUST_COLORS','_addSprite','Wind_Balloons','randomInt','WEATHER_BALLOON_COLORS','updatePositionFrozenTrajectory','spiderbolt','rebornCommonEvent','right\x2030%','weatherEffectsIceFog','weatherEffectsSnow','push','ARRAYJSON','#aaffcc','opacityEasingType','#949fc6','left\x2020%','Slow_Icons_Mid','generatedWeight','updateHueSway','_ySwayRange','left\x2060%','rgba(0,0,0,0)','Earth_DustClouds','weatherEffectsAshfall','weatherEffectsFlameHaze','Duration','sprite','weatherEffectsThunderclouds','drawFireball','Custom','scaleOutDuration','weatherEffectsBalloons','smokeclouds','_cached_WeatherEffects_Confetti','WEATHER_SAKURA1_COLORS','left\x20border','filters','random','medium_icons_0','loadPicture','weatherEffectsRain','weatherEffectsCloudBurst','center\x2020%','Dark_AshDebris','#008800','thunderclouds','weatherPower','weatherEffectsFumes','bloodrain','weatherEffectsSootfall','_flatFlutterDirX','gradientFillRect','_cached_WeatherEffects_LightOrbs','arrayToHex','weatherEffectsLightOrbs','_scaleRatioY','_baseSprite','#fdedd9','strokeColor','WEATHER_SAKURA2_COLORS','paintOpacity','WEATHER_NATURE_GREEN_COLORS','116cqpeBd','_lastType','Spriteset_Battle_createBattleFieldContainer','right\x2090%','#000000','upper','_cached_WeatherEffects_SmokeClouds','Medium_Icons_LowerLeft','RegExp','left\x2080%','Light_PastelBrume','rgba(%1,\x20%2,\x20%3,\x201)','#4dff65','createElement','rebornInitialTrajectoryData','UpperLower','795290kyfDoW','rebornSpriteBlendMode','_rainBitmap','WEATHER_EFFECTS_ICON_GENERATED','_hueSwayRng','trajectory','_cached_WeatherEffects_SnowClouds','_cached_WeatherEffects_WaterDrop','arcticbeam','Light_Stars','_originBound','equals','yellow','opacityFadeInTime','_wholeLifespan','spawnLocationX','#00ffff','_flatFlutterRngX','weatherEffectsPollutionClouds','#fcf3de','weatherEffectsWaterDrop','#bbc9f9','ultraviolet','respawnDelayMin','Ice_SnowClouds','weatherEffectsArcticBeams','_cached_WeatherEffects_Snowflakes','Weather_update','weatherEffectsRainClouds','color','_removeSprite','mist','WEATHER_RAINBOW_ORB_COLORS','upper\x2040%','updateLifespan','weatherEffectsLensFlare'];_0x1f88=function(){return _0x2338fd;};return _0x1f88();}var label=_0x32d3d9(0x4c5),tier=tier||0x0,dependencies=[_0x32d3d9(0x1f1)],pluginData=$plugins[_0x32d3d9(0x236)](function(_0x90e6c1){const _0x27ee6c=_0x32d3d9;return _0x90e6c1[_0x27ee6c(0x562)]&&_0x90e6c1[_0x27ee6c(0x5ee)][_0x27ee6c(0x386)]('['+label+']');})[0x0];VisuMZ[label][_0x32d3d9(0x571)]=VisuMZ[label][_0x32d3d9(0x571)]||{},VisuMZ['ConvertParams']=function(_0x4cbdb1,_0x4241b7){const _0x4bfa58=_0x32d3d9;for(const _0x44d241 in _0x4241b7){if(_0x44d241['match'](/(.*):(.*)/i)){const _0x2e4dc2=String(RegExp['$1']),_0x29b3f6=String(RegExp['$2'])[_0x4bfa58(0x22d)]()[_0x4bfa58(0x4b3)]();let _0x585a3e,_0x45a486,_0x1dc267;switch(_0x29b3f6){case _0x4bfa58(0x3e1):_0x585a3e=_0x4241b7[_0x44d241]!==''?Number(_0x4241b7[_0x44d241]):0x0;break;case _0x4bfa58(0x4a4):_0x45a486=_0x4241b7[_0x44d241]!==''?JSON[_0x4bfa58(0x327)](_0x4241b7[_0x44d241]):[],_0x585a3e=_0x45a486[_0x4bfa58(0x55c)](_0x46a48d=>Number(_0x46a48d));break;case _0x4bfa58(0x229):_0x585a3e=_0x4241b7[_0x44d241]!==''?eval(_0x4241b7[_0x44d241]):null;break;case _0x4bfa58(0x5de):_0x45a486=_0x4241b7[_0x44d241]!==''?JSON[_0x4bfa58(0x327)](_0x4241b7[_0x44d241]):[],_0x585a3e=_0x45a486[_0x4bfa58(0x55c)](_0x428488=>eval(_0x428488));break;case'JSON':_0x585a3e=_0x4241b7[_0x44d241]!==''?JSON['parse'](_0x4241b7[_0x44d241]):'';break;case _0x4bfa58(0x4ef):_0x45a486=_0x4241b7[_0x44d241]!==''?JSON[_0x4bfa58(0x327)](_0x4241b7[_0x44d241]):[],_0x585a3e=_0x45a486['map'](_0x5a71d0=>JSON[_0x4bfa58(0x327)](_0x5a71d0));break;case _0x4bfa58(0x4ab):_0x585a3e=_0x4241b7[_0x44d241]!==''?new Function(JSON[_0x4bfa58(0x327)](_0x4241b7[_0x44d241])):new Function(_0x4bfa58(0x309));break;case _0x4bfa58(0x299):_0x45a486=_0x4241b7[_0x44d241]!==''?JSON[_0x4bfa58(0x327)](_0x4241b7[_0x44d241]):[],_0x585a3e=_0x45a486[_0x4bfa58(0x55c)](_0x4cc27f=>new Function(JSON[_0x4bfa58(0x327)](_0x4cc27f)));break;case _0x4bfa58(0x480):_0x585a3e=_0x4241b7[_0x44d241]!==''?String(_0x4241b7[_0x44d241]):'';break;case _0x4bfa58(0x42c):_0x45a486=_0x4241b7[_0x44d241]!==''?JSON[_0x4bfa58(0x327)](_0x4241b7[_0x44d241]):[],_0x585a3e=_0x45a486[_0x4bfa58(0x55c)](_0x33c92a=>String(_0x33c92a));break;case _0x4bfa58(0x2ec):_0x1dc267=_0x4241b7[_0x44d241]!==''?JSON[_0x4bfa58(0x327)](_0x4241b7[_0x44d241]):{},_0x585a3e=VisuMZ[_0x4bfa58(0x20b)]({},_0x1dc267);break;case'ARRAYSTRUCT':_0x45a486=_0x4241b7[_0x44d241]!==''?JSON[_0x4bfa58(0x327)](_0x4241b7[_0x44d241]):[],_0x585a3e=_0x45a486[_0x4bfa58(0x55c)](_0xd02234=>VisuMZ[_0x4bfa58(0x20b)]({},JSON[_0x4bfa58(0x327)](_0xd02234)));break;default:continue;}_0x4cbdb1[_0x2e4dc2]=_0x585a3e;}}return _0x4cbdb1;},(_0x463004=>{const _0x4d9961=_0x32d3d9,_0x3d9ab9=_0x463004[_0x4d9961(0x4ce)];for(const _0x3f6fab of dependencies){if(!Imported[_0x3f6fab]){alert(_0x4d9961(0x4d4)[_0x4d9961(0x5f9)](_0x3d9ab9,_0x3f6fab)),SceneManager[_0x4d9961(0x437)]();break;}}const _0x54e99a=_0x463004['description'];if(_0x54e99a[_0x4d9961(0x48c)](/\[Version[ ](.*?)\]/i)){const _0x3d543f=Number(RegExp['$1']);_0x3d543f!==VisuMZ[label][_0x4d9961(0x44b)]&&(alert(_0x4d9961(0x3da)[_0x4d9961(0x5f9)](_0x3d9ab9,_0x3d543f)),SceneManager[_0x4d9961(0x437)]());}if(_0x54e99a[_0x4d9961(0x48c)](/\[Tier[ ](\d+)\]/i)){const _0x1ff243=Number(RegExp['$1']);_0x1ff243<tier?(alert(_0x4d9961(0x24b)['format'](_0x3d9ab9,_0x1ff243,tier)),SceneManager[_0x4d9961(0x437)]()):tier=Math[_0x4d9961(0x277)](_0x1ff243,tier);}VisuMZ[_0x4d9961(0x20b)](VisuMZ[label][_0x4d9961(0x571)],_0x463004[_0x4d9961(0x23c)]);})(pluginData),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x5ac),_0x1bdff0=>{const _0x586f49=_0x32d3d9;VisuMZ[_0x586f49(0x20b)](_0x1bdff0,_0x1bdff0);const _0x48cce2=_0x1bdff0['Layer'][_0x586f49(0x55c)](_0x383c14=>(Number(_0x383c14)||0x1)['clamp'](0x1,0xa)),_0x4ce6db=_0x1bdff0[_0x586f49(0x531)],_0x24da6e=_0x1bdff0[_0x586f49(0x300)]||0x0,_0x361338=_0x1bdff0[_0x586f49(0x4fd)]||0x1;for(const _0x554370 of _0x48cce2){[_0x586f49(0x527),_0x586f49(0x2ba)][_0x586f49(0x386)](_0x4ce6db)&&$gameScreen[_0x586f49(0x323)](_0x554370,![],_0x24da6e,_0x361338),['lower',_0x586f49(0x2ba)][_0x586f49(0x386)](_0x4ce6db)&&$gameScreen[_0x586f49(0x323)](_0x554370,!![],_0x24da6e,_0x361338);}if(_0x1bdff0[_0x586f49(0x39c)]){const _0x23c887=$gameTemp[_0x586f49(0x433)]();_0x23c887&&_0x23c887[_0x586f49(0x5d8)](_0x361338||0x1);}}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x44f),_0x531639=>{const _0x159440=_0x32d3d9;VisuMZ[_0x159440(0x20b)](_0x531639,_0x531639);const _0x3811f5=_0x531639[_0x159440(0x3f0)][_0x159440(0x55c)](_0x29e9ed=>(Number(_0x29e9ed)||0x1)[_0x159440(0x1f8)](0x1,0xa)),_0x4dfd6a=_0x531639[_0x159440(0x531)],_0x412272=_0x531639[_0x159440(0x4fd)]||0x1;for(const _0x3af47c of _0x3811f5){[_0x159440(0x527),_0x159440(0x2ba)]['includes'](_0x4dfd6a)&&$gameScreen[_0x159440(0x2c4)](_0x3af47c,![],_0x412272),['lower',_0x159440(0x2ba)][_0x159440(0x386)](_0x4dfd6a)&&$gameScreen['clearWeatherLayerData'](_0x3af47c,!![],_0x412272);}if(_0x531639['WaitForCompletion']){const _0x3538b2=$gameTemp['getLastPluginCommandInterpreter']();_0x3538b2&&_0x3538b2[_0x159440(0x5d8)](_0x412272||0x1);}}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'BasicMemorizeWeather',_0x2ce758=>{const _0x12a15e=_0x32d3d9;VisuMZ['ConvertParams'](_0x2ce758,_0x2ce758);const _0x5eb4df=_0x2ce758['Layer'][_0x12a15e(0x55c)](_0x269847=>(Number(_0x269847)||0x1)[_0x12a15e(0x1f8)](0x1,0xa)),_0x531d9a=_0x2ce758[_0x12a15e(0x531)],_0x3ef7c1=_0x2ce758[_0x12a15e(0x4fd)]||0x1;for(const _0x1ad745 of _0x5eb4df){[_0x12a15e(0x527),_0x12a15e(0x2ba)][_0x12a15e(0x386)](_0x531d9a)&&$gameScreen[_0x12a15e(0x468)](_0x1ad745,![]),[_0x12a15e(0x222),_0x12a15e(0x2ba)][_0x12a15e(0x386)](_0x531d9a)&&$gameScreen[_0x12a15e(0x468)](_0x1ad745,!![]);}}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x351),_0x410533=>{const _0x36b5a9=_0x32d3d9;VisuMZ['ConvertParams'](_0x410533,_0x410533);const _0x14fabe=String(_0x410533['WeatherType']||'')[_0x36b5a9(0x21c)]()[_0x36b5a9(0x4b3)]();if(_0x14fabe==='')return;let _0x3a783e=ImageManager[_0x36b5a9(0x5b8)]??0x1;while(_0x3a783e--){ImageManager[_0x36b5a9(0x580)](_0x14fabe);}}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],'BasicReplayMemory',_0xc30fff=>{const _0x911dc0=_0x32d3d9;VisuMZ[_0x911dc0(0x20b)](_0xc30fff,_0xc30fff);const _0x4a8482=_0xc30fff[_0x911dc0(0x3f0)][_0x911dc0(0x55c)](_0x46f228=>(Number(_0x46f228)||0x1)[_0x911dc0(0x1f8)](0x1,0xa)),_0x15c946=_0xc30fff[_0x911dc0(0x531)],_0x2a99cc=_0xc30fff[_0x911dc0(0x4fd)]||0x1;for(const _0x4aad6d of _0x4a8482){[_0x911dc0(0x527),_0x911dc0(0x2ba)]['includes'](_0x15c946)&&$gameScreen[_0x911dc0(0x452)](_0x4aad6d,![],_0x2a99cc),[_0x911dc0(0x222),_0x911dc0(0x2ba)][_0x911dc0(0x386)](_0x15c946)&&$gameScreen[_0x911dc0(0x452)](_0x4aad6d,!![],_0x2a99cc);}if(_0xc30fff[_0x911dc0(0x39c)]){const _0x1790b6=$gameTemp[_0x911dc0(0x433)]();_0x1790b6&&_0x1790b6[_0x911dc0(0x5d8)](_0x2a99cc||0x1);}}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Fire_Embers',_0x42cc5c=>{const _0xbc594c=_0x32d3d9;VisuMZ['ConvertParams'](_0x42cc5c,_0x42cc5c),_0x42cc5c[_0xbc594c(0x341)]=_0xbc594c(0x38a),VisuMZ[_0xbc594c(0x4c5)][_0xbc594c(0x451)](_0x42cc5c);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x313),_0x30b3d6=>{const _0x58e507=_0x32d3d9;VisuMZ[_0x58e507(0x20b)](_0x30b3d6,_0x30b3d6),_0x30b3d6['type']=_0x58e507(0x5ab),VisuMZ[_0x58e507(0x4c5)]['applyPluginCmdSettings'](_0x30b3d6);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x2eb),_0xfa4ab=>{const _0x20691a=_0x32d3d9;VisuMZ['ConvertParams'](_0xfa4ab,_0xfa4ab),_0xfa4ab[_0x20691a(0x341)]='firestorm',VisuMZ['WeatherEffects'][_0x20691a(0x451)](_0xfa4ab);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],_0x32d3d9(0x5c1),_0x5853c8=>{const _0x1a9796=_0x32d3d9;VisuMZ[_0x1a9796(0x20b)](_0x5853c8,_0x5853c8),_0x5853c8[_0x1a9796(0x341)]='fireworks',VisuMZ[_0x1a9796(0x4c5)][_0x1a9796(0x451)](_0x5853c8);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x5b1),_0x12d182=>{const _0x3ba99f=_0x32d3d9;VisuMZ[_0x3ba99f(0x20b)](_0x12d182,_0x12d182),_0x12d182[_0x3ba99f(0x341)]='flamehaze',VisuMZ[_0x3ba99f(0x4c5)][_0x3ba99f(0x451)](_0x12d182);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x3ae),_0xfd6262=>{const _0x3adf34=_0x32d3d9;VisuMZ[_0x3adf34(0x20b)](_0xfd6262,_0xfd6262),_0xfd6262[_0x3adf34(0x341)]='flamewall',VisuMZ[_0x3adf34(0x4c5)][_0x3adf34(0x451)](_0xfd6262);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x414),_0x2c00a1=>{const _0x4608e8=_0x32d3d9;VisuMZ[_0x4608e8(0x20b)](_0x2c00a1,_0x2c00a1),_0x2c00a1[_0x4608e8(0x341)]='heatclouds',VisuMZ[_0x4608e8(0x4c5)]['applyPluginCmdSettings'](_0x2c00a1);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x276),_0x2172a3=>{const _0x460157=_0x32d3d9;VisuMZ[_0x460157(0x20b)](_0x2172a3,_0x2172a3),_0x2172a3['type']=_0x460157(0x436),VisuMZ[_0x460157(0x4c5)][_0x460157(0x451)](_0x2172a3);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Fire_ShootingStar',_0x249d70=>{const _0x4d63da=_0x32d3d9;VisuMZ[_0x4d63da(0x20b)](_0x249d70,_0x249d70),_0x249d70['type']=_0x4d63da(0x2d4),VisuMZ[_0x4d63da(0x4c5)][_0x4d63da(0x451)](_0x249d70);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x336),_0x561e55=>{const _0x1db44a=_0x32d3d9;VisuMZ[_0x1db44a(0x20b)](_0x561e55,_0x561e55),_0x561e55[_0x1db44a(0x341)]=_0x1db44a(0x2c3),VisuMZ['WeatherEffects'][_0x1db44a(0x451)](_0x561e55);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x4a5),_0x1f4be1=>{const _0x24f11c=_0x32d3d9;VisuMZ['ConvertParams'](_0x1f4be1,_0x1f4be1),_0x1f4be1[_0x24f11c(0x341)]=_0x24f11c(0x53a),VisuMZ[_0x24f11c(0x4c5)][_0x24f11c(0x451)](_0x1f4be1);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],'Ice_Aurora',_0x4d43cf=>{const _0x3f5af9=_0x32d3d9;VisuMZ['ConvertParams'](_0x4d43cf,_0x4d43cf),_0x4d43cf[_0x3f5af9(0x341)]='aurora',VisuMZ[_0x3f5af9(0x4c5)][_0x3f5af9(0x451)](_0x4d43cf);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x255),_0xd18491=>{const _0x5e1a38=_0x32d3d9;VisuMZ[_0x5e1a38(0x20b)](_0xd18491,_0xd18491),_0xd18491[_0x5e1a38(0x341)]='blizzard',VisuMZ[_0x5e1a38(0x4c5)][_0x5e1a38(0x451)](_0xd18491);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x42d),_0x1f6365=>{const _0xe2e579=_0x32d3d9;VisuMZ['ConvertParams'](_0x1f6365,_0x1f6365),_0x1f6365[_0xe2e579(0x341)]='diamonddust',VisuMZ[_0xe2e579(0x4c5)][_0xe2e579(0x451)](_0x1f6365);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x285),_0x258ca6=>{const _0x4c6c53=_0x32d3d9;VisuMZ['ConvertParams'](_0x258ca6,_0x258ca6),_0x258ca6[_0x4c6c53(0x341)]=_0x4c6c53(0x5e2),VisuMZ[_0x4c6c53(0x4c5)][_0x4c6c53(0x451)](_0x258ca6);}),PluginManager['registerCommand'](pluginData['name'],_0x32d3d9(0x3bb),_0x4eb7a8=>{const _0x5ea08b=_0x32d3d9;VisuMZ[_0x5ea08b(0x20b)](_0x4eb7a8,_0x4eb7a8),_0x4eb7a8[_0x5ea08b(0x341)]=_0x5ea08b(0x426),VisuMZ['WeatherEffects'][_0x5ea08b(0x451)](_0x4eb7a8);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x32e),_0x5846ed=>{const _0x3ef7e2=_0x32d3d9;VisuMZ['ConvertParams'](_0x5846ed,_0x5846ed),_0x5846ed[_0x3ef7e2(0x341)]='sleet',VisuMZ[_0x3ef7e2(0x4c5)]['applyPluginCmdSettings'](_0x5846ed);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x3ea),_0xaa4521=>{const _0x49cae3=_0x32d3d9;VisuMZ[_0x49cae3(0x20b)](_0xaa4521,_0xaa4521),_0xaa4521[_0x49cae3(0x341)]=_0x49cae3(0x364),VisuMZ['WeatherEffects'][_0x49cae3(0x451)](_0xaa4521);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x54a),_0x5a4a30=>{const _0x75f192=_0x32d3d9;VisuMZ['ConvertParams'](_0x5a4a30,_0x5a4a30),_0x5a4a30[_0x75f192(0x341)]='snowclouds',VisuMZ[_0x75f192(0x4c5)][_0x75f192(0x451)](_0x5a4a30);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x5a4),_0xe88735=>{const _0x5b0816=_0x32d3d9;VisuMZ[_0x5b0816(0x20b)](_0xe88735,_0xe88735),_0xe88735[_0x5b0816(0x341)]=_0x5b0816(0x396),VisuMZ[_0x5b0816(0x4c5)][_0x5b0816(0x451)](_0xe88735);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],'Thunder_Discharge',_0xcffbd5=>{const _0x1dde97=_0x32d3d9;VisuMZ[_0x1dde97(0x20b)](_0xcffbd5,_0xcffbd5),_0xcffbd5[_0x1dde97(0x341)]=_0x1dde97(0x246),VisuMZ[_0x1dde97(0x4c5)]['applyPluginCmdSettings'](_0xcffbd5);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x418),_0x44fbe5=>{const _0x277efc=_0x32d3d9;VisuMZ['ConvertParams'](_0x44fbe5,_0x44fbe5),_0x44fbe5[_0x277efc(0x341)]=_0x277efc(0x366),VisuMZ[_0x277efc(0x4c5)][_0x277efc(0x451)](_0x44fbe5);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x20d),_0x276e20=>{const _0x21d48f=_0x32d3d9;VisuMZ[_0x21d48f(0x20b)](_0x276e20,_0x276e20),_0x276e20[_0x21d48f(0x341)]=_0x21d48f(0x557),VisuMZ['WeatherEffects'][_0x21d48f(0x451)](_0x276e20);}),PluginManager['registerCommand'](pluginData['name'],'Thunder_PurpleHaze',_0x209b7d=>{const _0x24bac7=_0x32d3d9;VisuMZ['ConvertParams'](_0x209b7d,_0x209b7d),_0x209b7d['type']='purplehaze',VisuMZ[_0x24bac7(0x4c5)]['applyPluginCmdSettings'](_0x209b7d);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],'Thunder_SpiderLightning',_0x12a375=>{const _0x4bb10f=_0x32d3d9;VisuMZ['ConvertParams'](_0x12a375,_0x12a375),_0x12a375[_0x4bb10f(0x341)]='spiderbolt',VisuMZ['WeatherEffects'][_0x4bb10f(0x451)](_0x12a375);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x43b),_0x275908=>{const _0x1fe2ab=_0x32d3d9;VisuMZ[_0x1fe2ab(0x20b)](_0x275908,_0x275908),_0x275908[_0x1fe2ab(0x341)]='thunderbolt',VisuMZ[_0x1fe2ab(0x4c5)][_0x1fe2ab(0x451)](_0x275908);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x321),_0x35aba6=>{const _0x43365f=_0x32d3d9;VisuMZ[_0x43365f(0x20b)](_0x35aba6,_0x35aba6),_0x35aba6['type']='staticcharge',VisuMZ['WeatherEffects'][_0x43365f(0x451)](_0x35aba6);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x36b),_0x48bd38=>{const _0x2a6ed0=_0x32d3d9;VisuMZ['ConvertParams'](_0x48bd38,_0x48bd38),_0x48bd38[_0x2a6ed0(0x341)]=_0x2a6ed0(0x511),VisuMZ[_0x2a6ed0(0x4c5)][_0x2a6ed0(0x451)](_0x48bd38);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x2fa),_0x12ea3a=>{const _0xdd909b=_0x32d3d9;VisuMZ[_0xdd909b(0x20b)](_0x12ea3a,_0x12ea3a),_0x12ea3a['type']=_0xdd909b(0x3bc),VisuMZ[_0xdd909b(0x4c5)][_0xdd909b(0x451)](_0x12ea3a);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x403),_0x196e95=>{const _0x2fba7b=_0x32d3d9;VisuMZ[_0x2fba7b(0x20b)](_0x196e95,_0x196e95),_0x196e95[_0x2fba7b(0x341)]=_0x2fba7b(0x548),VisuMZ[_0x2fba7b(0x4c5)][_0x2fba7b(0x451)](_0x196e95);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],'Water_Bubbles',_0x36f3ce=>{const _0xc2d1f1=_0x32d3d9;VisuMZ[_0xc2d1f1(0x20b)](_0x36f3ce,_0x36f3ce),_0x36f3ce['type']=_0xc2d1f1(0x494),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x36f3ce);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x383),_0x356cea=>{const _0x85392b=_0x32d3d9;VisuMZ['ConvertParams'](_0x356cea,_0x356cea),_0x356cea['type']=_0x85392b(0x2ae),VisuMZ[_0x85392b(0x4c5)][_0x85392b(0x451)](_0x356cea);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Water_DrippingWater',_0x4a2581=>{const _0x388d34=_0x32d3d9;VisuMZ[_0x388d34(0x20b)](_0x4a2581,_0x4a2581),_0x4a2581[_0x388d34(0x341)]='drip',VisuMZ['WeatherEffects'][_0x388d34(0x451)](_0x4a2581);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x360),_0x4a925f=>{const _0x30a4de=_0x32d3d9;VisuMZ[_0x30a4de(0x20b)](_0x4a925f,_0x4a925f),_0x4a925f['type']=_0x30a4de(0x551),VisuMZ[_0x30a4de(0x4c5)][_0x30a4de(0x451)](_0x4a925f);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],_0x32d3d9(0x49d),_0x8d0aa6=>{const _0x39a8df=_0x32d3d9;VisuMZ['ConvertParams'](_0x8d0aa6,_0x8d0aa6),_0x8d0aa6[_0x39a8df(0x341)]=_0x39a8df(0x281),VisuMZ[_0x39a8df(0x4c5)][_0x39a8df(0x451)](_0x8d0aa6);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x492),_0xf68586=>{const _0x458ee5=_0x32d3d9;VisuMZ['ConvertParams'](_0xf68586,_0xf68586),_0xf68586['type']=_0x458ee5(0x3a2),VisuMZ[_0x458ee5(0x4c5)][_0x458ee5(0x451)](_0xf68586);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],_0x32d3d9(0x2a5),_0x35c3c4=>{const _0x31eb7f=_0x32d3d9;VisuMZ[_0x31eb7f(0x20b)](_0x35c3c4,_0x35c3c4),_0x35c3c4[_0x31eb7f(0x341)]=_0x31eb7f(0x561),VisuMZ['WeatherEffects'][_0x31eb7f(0x451)](_0x35c3c4);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],'Water_RisingSteam',_0x2df505=>{const _0x59317a=_0x32d3d9;VisuMZ['ConvertParams'](_0x2df505,_0x2df505),_0x2df505[_0x59317a(0x341)]=_0x59317a(0x43e),VisuMZ[_0x59317a(0x4c5)][_0x59317a(0x451)](_0x2df505);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x473),_0x1c0c7b=>{const _0x226733=_0x32d3d9;VisuMZ[_0x226733(0x20b)](_0x1c0c7b,_0x1c0c7b),_0x1c0c7b['type']=_0x226733(0x4a0),VisuMZ[_0x226733(0x4c5)]['applyPluginCmdSettings'](_0x1c0c7b);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x35f),_0x37c5dc=>{const _0x449c61=_0x32d3d9;VisuMZ[_0x449c61(0x20b)](_0x37c5dc,_0x37c5dc),_0x37c5dc[_0x449c61(0x341)]=_0x449c61(0x41f),VisuMZ[_0x449c61(0x4c5)][_0x449c61(0x451)](_0x37c5dc);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x334),_0x5e0255=>{const _0x1d4919=_0x32d3d9;VisuMZ[_0x1d4919(0x20b)](_0x5e0255,_0x5e0255),_0x5e0255[_0x1d4919(0x341)]='acidrain',VisuMZ[_0x1d4919(0x4c5)][_0x1d4919(0x451)](_0x5e0255);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x5f6),_0x4d40cd=>{const _0x21ae4b=_0x32d3d9;VisuMZ[_0x21ae4b(0x20b)](_0x4d40cd,_0x4d40cd),_0x4d40cd['type']=_0x21ae4b(0x26a),VisuMZ[_0x21ae4b(0x4c5)][_0x21ae4b(0x451)](_0x4d40cd);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x4fa),_0x577b2b=>{const _0x13692f=_0x32d3d9;VisuMZ[_0x13692f(0x20b)](_0x577b2b,_0x577b2b),_0x577b2b[_0x13692f(0x341)]=_0x13692f(0x228),VisuMZ[_0x13692f(0x4c5)][_0x13692f(0x451)](_0x577b2b);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x597),_0x394501=>{const _0x3897fd=_0x32d3d9;VisuMZ[_0x3897fd(0x20b)](_0x394501,_0x394501),_0x394501[_0x3897fd(0x341)]=_0x3897fd(0x4a3),VisuMZ[_0x3897fd(0x4c5)]['applyPluginCmdSettings'](_0x394501);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x389),_0x56018d=>{const _0x2229e7=_0x32d3d9;VisuMZ[_0x2229e7(0x20b)](_0x56018d,_0x56018d),_0x56018d[_0x2229e7(0x341)]=_0x2229e7(0x45a),VisuMZ[_0x2229e7(0x4c5)][_0x2229e7(0x451)](_0x56018d);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x2e1),_0x2a96b7=>{const _0x497d11=_0x32d3d9;VisuMZ[_0x497d11(0x20b)](_0x2a96b7,_0x2a96b7),_0x2a96b7['type']=_0x497d11(0x409),VisuMZ[_0x497d11(0x4c5)][_0x497d11(0x451)](_0x2a96b7);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x586),_0x24a58c=>{const _0x2bdeda=_0x32d3d9;VisuMZ[_0x2bdeda(0x20b)](_0x24a58c,_0x24a58c),_0x24a58c[_0x2bdeda(0x341)]=_0x2bdeda(0x27f),VisuMZ[_0x2bdeda(0x4c5)][_0x2bdeda(0x451)](_0x24a58c);}),PluginManager['registerCommand'](pluginData['name'],_0x32d3d9(0x2d0),_0x2d17b2=>{const _0x124eac=_0x32d3d9;VisuMZ[_0x124eac(0x20b)](_0x2d17b2,_0x2d17b2),_0x2d17b2[_0x124eac(0x341)]=_0x124eac(0x2a7),VisuMZ['WeatherEffects'][_0x124eac(0x451)](_0x2d17b2);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x444),_0x71590f=>{const _0x31278d=_0x32d3d9;VisuMZ['ConvertParams'](_0x71590f,_0x71590f),_0x71590f[_0x31278d(0x341)]=_0x31278d(0x55f),VisuMZ['WeatherEffects'][_0x31278d(0x451)](_0x71590f);}),PluginManager['registerCommand'](pluginData['name'],_0x32d3d9(0x440),_0xcb2650=>{const _0x2e66c9=_0x32d3d9;VisuMZ[_0x2e66c9(0x20b)](_0xcb2650,_0xcb2650),_0xcb2650[_0x2e66c9(0x341)]=_0x2e66c9(0x33e),VisuMZ[_0x2e66c9(0x4c5)][_0x2e66c9(0x451)](_0xcb2650);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x398),_0xbdd624=>{const _0x27cfac=_0x32d3d9;VisuMZ['ConvertParams'](_0xbdd624,_0xbdd624),_0xbdd624[_0x27cfac(0x341)]=_0x27cfac(0x3c2),VisuMZ[_0x27cfac(0x4c5)][_0x27cfac(0x451)](_0xbdd624);}),PluginManager['registerCommand'](pluginData['name'],_0x32d3d9(0x4e5),_0x54ad68=>{const _0x47a43b=_0x32d3d9;VisuMZ['ConvertParams'](_0x54ad68,_0x54ad68),_0x54ad68[_0x47a43b(0x341)]=_0x47a43b(0x2d6),VisuMZ[_0x47a43b(0x4c5)][_0x47a43b(0x451)](_0x54ad68);}),PluginManager['registerCommand'](pluginData['name'],_0x32d3d9(0x5dd),_0x59438f=>{const _0x2a080a=_0x32d3d9;VisuMZ[_0x2a080a(0x20b)](_0x59438f,_0x59438f),_0x59438f[_0x2a080a(0x341)]='cherryblossoms',VisuMZ[_0x2a080a(0x4c5)][_0x2a080a(0x451)](_0x59438f);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Wind_DandelionSeeds',_0x90c5d6=>{const _0x1d012a=_0x32d3d9;VisuMZ[_0x1d012a(0x20b)](_0x90c5d6,_0x90c5d6),_0x90c5d6[_0x1d012a(0x341)]=_0x1d012a(0x4cf),VisuMZ[_0x1d012a(0x4c5)][_0x1d012a(0x451)](_0x90c5d6);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Wind_GrassyGust',_0x1d9401=>{const _0x16bac3=_0x32d3d9;VisuMZ['ConvertParams'](_0x1d9401,_0x1d9401),_0x1d9401[_0x16bac3(0x341)]=_0x16bac3(0x3fe),VisuMZ[_0x16bac3(0x4c5)]['applyPluginCmdSettings'](_0x1d9401);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x569),_0x3e386b=>{const _0x37ee15=_0x32d3d9;VisuMZ[_0x37ee15(0x20b)](_0x3e386b,_0x3e386b),_0x3e386b[_0x37ee15(0x341)]=_0x37ee15(0x5b6),VisuMZ[_0x37ee15(0x4c5)]['applyPluginCmdSettings'](_0x3e386b);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Wind_Pollen',_0x2a887e=>{const _0x1c2957=_0x32d3d9;VisuMZ[_0x1c2957(0x20b)](_0x2a887e,_0x2a887e),_0x2a887e[_0x1c2957(0x341)]=_0x1c2957(0x20a),VisuMZ[_0x1c2957(0x4c5)][_0x1c2957(0x451)](_0x2a887e);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x3e3),_0x228a6c=>{const _0x2b5e54=_0x32d3d9;VisuMZ[_0x2b5e54(0x20b)](_0x228a6c,_0x228a6c),_0x228a6c[_0x2b5e54(0x341)]=_0x2b5e54(0x564),VisuMZ[_0x2b5e54(0x4c5)]['applyPluginCmdSettings'](_0x228a6c);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],_0x32d3d9(0x38c),_0x894cd4=>{const _0xbfb692=_0x32d3d9;VisuMZ['ConvertParams'](_0x894cd4,_0x894cd4),_0x894cd4[_0xbfb692(0x341)]=_0xbfb692(0x240),VisuMZ[_0xbfb692(0x4c5)]['applyPluginCmdSettings'](_0x894cd4);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Wind_XtremeSpeed',_0xdbe1ce=>{const _0xe92406=_0x32d3d9;VisuMZ[_0xe92406(0x20b)](_0xdbe1ce,_0xdbe1ce),_0xdbe1ce[_0xe92406(0x341)]=_0xe92406(0x394),VisuMZ[_0xe92406(0x4c5)][_0xe92406(0x451)](_0xdbe1ce);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],'Light_Confetti',_0x3ce137=>{const _0xf0c62e=_0x32d3d9;VisuMZ[_0xf0c62e(0x20b)](_0x3ce137,_0x3ce137),_0x3ce137['type']=_0xf0c62e(0x4d9),VisuMZ[_0xf0c62e(0x4c5)][_0xf0c62e(0x451)](_0x3ce137);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x3cb),_0x38787a=>{const _0x2e5b94=_0x32d3d9;VisuMZ[_0x2e5b94(0x20b)](_0x38787a,_0x38787a),_0x38787a[_0x2e5b94(0x341)]='lensflare',VisuMZ[_0x2e5b94(0x4c5)]['applyPluginCmdSettings'](_0x38787a);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x429),_0x1e424b=>{const _0x1b3dee=_0x32d3d9;VisuMZ['ConvertParams'](_0x1e424b,_0x1e424b),_0x1e424b[_0x1b3dee(0x341)]=_0x1b3dee(0x59d),VisuMZ[_0x1b3dee(0x4c5)]['applyPluginCmdSettings'](_0x1e424b);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],_0x32d3d9(0x2ce),_0x4b0059=>{const _0x176fb8=_0x32d3d9;VisuMZ[_0x176fb8(0x20b)](_0x4b0059,_0x4b0059),_0x4b0059['type']=_0x176fb8(0x381),VisuMZ[_0x176fb8(0x4c5)][_0x176fb8(0x451)](_0x4b0059);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x52c),_0x535c01=>{const _0x1747b4=_0x32d3d9;VisuMZ[_0x1747b4(0x20b)](_0x535c01,_0x535c01),_0x535c01[_0x1747b4(0x341)]=_0x1747b4(0x455),VisuMZ[_0x1747b4(0x4c5)][_0x1747b4(0x451)](_0x535c01);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],'Light_PrismBurst',_0x2c5078=>{const _0x36a78f=_0x32d3d9;VisuMZ[_0x36a78f(0x20b)](_0x2c5078,_0x2c5078),_0x2c5078['type']='prismburst',VisuMZ['WeatherEffects'][_0x36a78f(0x451)](_0x2c5078);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x388),_0x578908=>{const _0x202b0c=_0x32d3d9;VisuMZ[_0x202b0c(0x20b)](_0x578908,_0x578908),_0x578908[_0x202b0c(0x341)]=_0x202b0c(0x489),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x578908);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Light_RainbowClouds',_0x42f964=>{const _0x30c4c4=_0x32d3d9;VisuMZ[_0x30c4c4(0x20b)](_0x42f964,_0x42f964),_0x42f964['type']=_0x30c4c4(0x592),VisuMZ[_0x30c4c4(0x4c5)][_0x30c4c4(0x451)](_0x42f964);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x36f),_0x333f77=>{const _0xc3f271=_0x32d3d9;VisuMZ[_0xc3f271(0x20b)](_0x333f77,_0x333f77),_0x333f77[_0xc3f271(0x341)]='rainboworbs',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x333f77);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x53b),_0x46e88a=>{const _0x2d6ffe=_0x32d3d9;VisuMZ['ConvertParams'](_0x46e88a,_0x46e88a),_0x46e88a[_0x2d6ffe(0x341)]=_0x2d6ffe(0x24e),VisuMZ[_0x2d6ffe(0x4c5)][_0x2d6ffe(0x451)](_0x46e88a);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x50f),_0x1ffca1=>{const _0x18c832=_0x32d3d9;VisuMZ[_0x18c832(0x20b)](_0x1ffca1,_0x1ffca1),_0x1ffca1[_0x18c832(0x341)]=_0x18c832(0x267),VisuMZ[_0x18c832(0x4c5)][_0x18c832(0x451)](_0x1ffca1);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x2f2),_0x4f2b2f=>{const _0x1d3f4e=_0x32d3d9;VisuMZ[_0x1d3f4e(0x20b)](_0x4f2b2f,_0x4f2b2f),_0x4f2b2f[_0x1d3f4e(0x341)]='ashfall',VisuMZ[_0x1d3f4e(0x4c5)][_0x1d3f4e(0x451)](_0x4f2b2f);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Dark_BloodRain',_0x368c6c=>{const _0x42bd94=_0x32d3d9;VisuMZ[_0x42bd94(0x20b)](_0x368c6c,_0x368c6c),_0x368c6c['type']=_0x42bd94(0x514),VisuMZ[_0x42bd94(0x4c5)][_0x42bd94(0x451)](_0x368c6c);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x464),_0x17a552=>{const _0x2bf209=_0x32d3d9;VisuMZ['ConvertParams'](_0x17a552,_0x17a552),_0x17a552[_0x2bf209(0x341)]=_0x2bf209(0x3a1),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x17a552);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x2bc),_0x286e75=>{const _0x57b38d=_0x32d3d9;VisuMZ[_0x57b38d(0x20b)](_0x286e75,_0x286e75),_0x286e75[_0x57b38d(0x341)]=_0x57b38d(0x565),VisuMZ[_0x57b38d(0x4c5)][_0x57b38d(0x451)](_0x286e75);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],_0x32d3d9(0x3d4),_0x1fc679=>{const _0x2c8946=_0x32d3d9;VisuMZ[_0x2c8946(0x20b)](_0x1fc679,_0x1fc679),_0x1fc679[_0x2c8946(0x341)]=_0x2c8946(0x20c),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x1fc679);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x225),_0x238e11=>{const _0x4c4a8c=_0x32d3d9;VisuMZ[_0x4c4a8c(0x20b)](_0x238e11,_0x238e11),_0x238e11['type']=_0x4c4a8c(0x272),VisuMZ[_0x4c4a8c(0x4c5)][_0x4c4a8c(0x451)](_0x238e11);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x209),_0x13a431=>{const _0x41cd15=_0x32d3d9;VisuMZ['ConvertParams'](_0x13a431,_0x13a431),_0x13a431[_0x41cd15(0x341)]=_0x41cd15(0x241),VisuMZ[_0x41cd15(0x4c5)][_0x41cd15(0x451)](_0x13a431);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x49f),_0x4d27bf=>{const _0x25d0fc=_0x32d3d9;VisuMZ[_0x25d0fc(0x20b)](_0x4d27bf,_0x4d27bf),_0x4d27bf['type']=_0x25d0fc(0x4c7),VisuMZ['WeatherEffects'][_0x25d0fc(0x451)](_0x4d27bf);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x2d5),_0x2572a1=>{const _0x22ea2e=_0x32d3d9;VisuMZ[_0x22ea2e(0x20b)](_0x2572a1,_0x2572a1),_0x2572a1[_0x22ea2e(0x341)]=_0x22ea2e(0x27d),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x2572a1);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Slow_Icons_Up',_0x2b54ee=>{const _0x4939e6=_0x32d3d9;VisuMZ[_0x4939e6(0x20b)](_0x2b54ee,_0x2b54ee),_0x2b54ee[_0x4939e6(0x341)]=_0x4939e6(0x37c),VisuMZ['WeatherEffects'][_0x4939e6(0x451)](_0x2b54ee);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],'Slow_Icons_UpperRight',_0x2322a0=>{const _0x24f97c=_0x32d3d9;VisuMZ[_0x24f97c(0x20b)](_0x2322a0,_0x2322a0),_0x2322a0[_0x24f97c(0x341)]=_0x24f97c(0x5a6),VisuMZ[_0x24f97c(0x4c5)][_0x24f97c(0x451)](_0x2322a0);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Slow_Icons_Right',_0x438db8=>{const _0x1bdc0f=_0x32d3d9;VisuMZ[_0x1bdc0f(0x20b)](_0x438db8,_0x438db8),_0x438db8['type']='slow_icons_6',VisuMZ[_0x1bdc0f(0x4c5)][_0x1bdc0f(0x451)](_0x438db8);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],_0x32d3d9(0x2fb),_0x12d119=>{const _0x516111=_0x32d3d9;VisuMZ[_0x516111(0x20b)](_0x12d119,_0x12d119),_0x12d119['type']=_0x516111(0x3a6),VisuMZ['WeatherEffects'][_0x516111(0x451)](_0x12d119);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Slow_Icons_Down',_0x4d6a85=>{const _0x1e0c34=_0x32d3d9;VisuMZ[_0x1e0c34(0x20b)](_0x4d6a85,_0x4d6a85),_0x4d6a85[_0x1e0c34(0x341)]=_0x1e0c34(0x37c),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x4d6a85);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x36a),_0x3c7315=>{const _0xf8ad9e=_0x32d3d9;VisuMZ[_0xf8ad9e(0x20b)](_0x3c7315,_0x3c7315),_0x3c7315[_0xf8ad9e(0x341)]=_0xf8ad9e(0x456),VisuMZ['WeatherEffects'][_0xf8ad9e(0x451)](_0x3c7315);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x260),_0x1a5e94=>{const _0x23c72d=_0x32d3d9;VisuMZ[_0x23c72d(0x20b)](_0x1a5e94,_0x1a5e94),_0x1a5e94[_0x23c72d(0x341)]=_0x23c72d(0x25e),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x1a5e94);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x3e6),_0x5ef908=>{const _0xbf7f33=_0x32d3d9;VisuMZ[_0xbf7f33(0x20b)](_0x5ef908,_0x5ef908),_0x5ef908[_0xbf7f33(0x341)]='slow_icons_7',VisuMZ[_0xbf7f33(0x4c5)][_0xbf7f33(0x451)](_0x5ef908);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],_0x32d3d9(0x4f4),_0x191f85=>{const _0x3314a1=_0x32d3d9;VisuMZ[_0x3314a1(0x20b)](_0x191f85,_0x191f85),_0x191f85[_0x3314a1(0x341)]='slow_icons_5',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x191f85);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x3bd),_0x2c4c4d=>{const _0x105eeb=_0x32d3d9;VisuMZ[_0x105eeb(0x20b)](_0x2c4c4d,_0x2c4c4d),_0x2c4c4d[_0x105eeb(0x341)]=_0x105eeb(0x3dd),VisuMZ['WeatherEffects'][_0x105eeb(0x451)](_0x2c4c4d);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x3af),_0x32f986=>{const _0x4aae97=_0x32d3d9;VisuMZ[_0x4aae97(0x20b)](_0x32f986,_0x32f986),_0x32f986[_0x4aae97(0x341)]='medium_icons_9',VisuMZ[_0x4aae97(0x4c5)]['applyPluginCmdSettings'](_0x32f986);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Medium_Icons_Right',_0x335950=>{const _0x1a2b10=_0x32d3d9;VisuMZ[_0x1a2b10(0x20b)](_0x335950,_0x335950),_0x335950['type']='medium_icons_6',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x335950);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Medium_Icons_LowerRight',_0x244110=>{const _0xa8ccab=_0x32d3d9;VisuMZ[_0xa8ccab(0x20b)](_0x244110,_0x244110),_0x244110[_0xa8ccab(0x341)]='medium_icons_3',VisuMZ[_0xa8ccab(0x4c5)]['applyPluginCmdSettings'](_0x244110);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x5a3),_0x4185b7=>{const _0x598a6a=_0x32d3d9;VisuMZ['ConvertParams'](_0x4185b7,_0x4185b7),_0x4185b7[_0x598a6a(0x341)]=_0x598a6a(0x3dd),VisuMZ[_0x598a6a(0x4c5)]['applyPluginCmdSettings'](_0x4185b7);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x529),_0xb17c3f=>{const _0x4a9c12=_0x32d3d9;VisuMZ[_0x4a9c12(0x20b)](_0xb17c3f,_0xb17c3f),_0xb17c3f[_0x4a9c12(0x341)]=_0x4a9c12(0x270),VisuMZ[_0x4a9c12(0x4c5)][_0x4a9c12(0x451)](_0xb17c3f);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x376),_0x4ce352=>{const _0x4b51d2=_0x32d3d9;VisuMZ[_0x4b51d2(0x20b)](_0x4ce352,_0x4ce352),_0x4ce352[_0x4b51d2(0x341)]=_0x4b51d2(0x445),VisuMZ[_0x4b51d2(0x4c5)][_0x4b51d2(0x451)](_0x4ce352);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],_0x32d3d9(0x41d),_0x4aa792=>{const _0x58a59d=_0x32d3d9;VisuMZ[_0x58a59d(0x20b)](_0x4aa792,_0x4aa792),_0x4aa792[_0x58a59d(0x341)]='medium_icons_7',VisuMZ['WeatherEffects'][_0x58a59d(0x451)](_0x4aa792);}),PluginManager[_0x32d3d9(0x326)](pluginData['name'],_0x32d3d9(0x25f),_0x2ff7ea=>{const _0x2f7358=_0x32d3d9;VisuMZ['ConvertParams'](_0x2ff7ea,_0x2ff7ea),_0x2ff7ea[_0x2f7358(0x341)]='medium_icons_5',VisuMZ[_0x2f7358(0x4c5)]['applyPluginCmdSettings'](_0x2ff7ea);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Fast_Icons_Up',_0x584395=>{const _0x617805=_0x32d3d9;VisuMZ[_0x617805(0x20b)](_0x584395,_0x584395),_0x584395[_0x617805(0x341)]='fast_icons_2',VisuMZ[_0x617805(0x4c5)][_0x617805(0x451)](_0x584395);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x23f),_0x8f9ee7=>{const _0x493508=_0x32d3d9;VisuMZ[_0x493508(0x20b)](_0x8f9ee7,_0x8f9ee7),_0x8f9ee7[_0x493508(0x341)]=_0x493508(0x401),VisuMZ['WeatherEffects'][_0x493508(0x451)](_0x8f9ee7);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x400),_0x5dd153=>{const _0x43dbed=_0x32d3d9;VisuMZ[_0x43dbed(0x20b)](_0x5dd153,_0x5dd153),_0x5dd153[_0x43dbed(0x341)]='fast_icons_6',VisuMZ[_0x43dbed(0x4c5)][_0x43dbed(0x451)](_0x5dd153);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x39a),_0x42b904=>{const _0x489afe=_0x32d3d9;VisuMZ[_0x489afe(0x20b)](_0x42b904,_0x42b904),_0x42b904[_0x489afe(0x341)]=_0x489afe(0x45e),VisuMZ[_0x489afe(0x4c5)][_0x489afe(0x451)](_0x42b904);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x4b5),_0x3410c3=>{const _0x40c19f=_0x32d3d9;VisuMZ['ConvertParams'](_0x3410c3,_0x3410c3),_0x3410c3[_0x40c19f(0x341)]=_0x40c19f(0x216),VisuMZ[_0x40c19f(0x4c5)]['applyPluginCmdSettings'](_0x3410c3);}),PluginManager['registerCommand'](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x589),_0x3cde94=>{const _0xcd67e7=_0x32d3d9;VisuMZ[_0xcd67e7(0x20b)](_0x3cde94,_0x3cde94),_0x3cde94[_0xcd67e7(0x341)]=_0xcd67e7(0x590),VisuMZ[_0xcd67e7(0x4c5)][_0xcd67e7(0x451)](_0x3cde94);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],'Fast_Icons_Left',_0x40eea6=>{const _0x295835=_0x32d3d9;VisuMZ[_0x295835(0x20b)](_0x40eea6,_0x40eea6),_0x40eea6[_0x295835(0x341)]='fast_icons_4',VisuMZ['WeatherEffects'][_0x295835(0x451)](_0x40eea6);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x5b2),_0x3903d0=>{const _0x386f55=_0x32d3d9;VisuMZ['ConvertParams'](_0x3903d0,_0x3903d0),_0x3903d0['type']=_0x386f55(0x556),VisuMZ[_0x386f55(0x4c5)]['applyPluginCmdSettings'](_0x3903d0);}),PluginManager[_0x32d3d9(0x326)](pluginData[_0x32d3d9(0x4ce)],_0x32d3d9(0x23d),_0x39fe5a=>{const _0x516975=_0x32d3d9;VisuMZ[_0x516975(0x20b)](_0x39fe5a,_0x39fe5a),_0x39fe5a['type']=_0x516975(0x391),VisuMZ[_0x516975(0x4c5)][_0x516975(0x451)](_0x39fe5a);}),VisuMZ['WeatherEffects'][_0x32d3d9(0x52a)]={'NoWeather':/<NO WEATHER>/gi},Weather['MAX_LAYERS']=0xa,Weather[_0x32d3d9(0x298)]=VisuMZ[_0x32d3d9(0x4c5)]['Settings']['General'][_0x32d3d9(0x4de)]??![],VisuMZ['WeatherEffects']['Weather_update']=Weather[_0x32d3d9(0x2c1)][_0x32d3d9(0x58f)],Weather[_0x32d3d9(0x2c1)][_0x32d3d9(0x58f)]=function(){const _0x106817=_0x32d3d9;this[_0x106817(0x3e5)](),VisuMZ[_0x106817(0x4c5)][_0x106817(0x54d)][_0x106817(0x2f0)](this);},Weather[_0x32d3d9(0x2c1)][_0x32d3d9(0x4a1)]=function(){const _0x419a94=_0x32d3d9;this[_0x419a94(0x534)]=new Bitmap(0x1,0x1),this['_stormBitmap']=new Bitmap(0x1,0x1),this[_0x419a94(0x2a6)]=new Bitmap(0x1,0x1);},Weather[_0x32d3d9(0x2c1)][_0x32d3d9(0x38d)]=function(){const _0x4c62f7=_0x32d3d9;if(!this[_0x4c62f7(0x375)])return;this['updateDimmerColor'](),this[_0x4c62f7(0x297)]();},Weather[_0x32d3d9(0x2c1)][_0x32d3d9(0x5ea)]=function(){const _0x3da758=_0x32d3d9,_0xd9f27e=this[_0x3da758(0x577)]();while(this[_0x3da758(0x424)]['length']<_0xd9f27e)this[_0x3da758(0x4e4)]();while(this[_0x3da758(0x424)][_0x3da758(0x5c6)]>_0xd9f27e)this[_0x3da758(0x550)]();for(const _0x252ea5 of this[_0x3da758(0x424)]){_0x252ea5[_0x3da758(0x58f)]();}},Weather['prototype']['_addSprite']=function(){const _0x118957=_0x32d3d9,_0x5543cf=new Sprite_WeatherParticle(this,this[_0x118957(0x424)][_0x118957(0x5c6)]);this[_0x118957(0x424)][_0x118957(0x4ee)](_0x5543cf),this[_0x118957(0x31b)](_0x5543cf);},Weather[_0x32d3d9(0x2c1)][_0x32d3d9(0x5cb)]=function(){},Weather['prototype'][_0x32d3d9(0x5bc)]=function(_0x50240f,_0x2815cf){const _0x22533a=_0x32d3d9;this[_0x22533a(0x3e4)]=_0x50240f,this[_0x22533a(0x330)]=_0x2815cf||![];},Weather['prototype'][_0x32d3d9(0x3b3)]=function(){const _0x24604a=_0x32d3d9;return $gameScreen[_0x24604a(0x58d)](this[_0x24604a(0x3e4)],this[_0x24604a(0x330)]);},Weather[_0x32d3d9(0x2c1)][_0x32d3d9(0x3e5)]=function(){const _0x60f2e4=_0x32d3d9,_0x526279=this['data']();if(!_0x526279)return;this[_0x60f2e4(0x341)]=_0x526279[_0x60f2e4(0x341)],this['power']=_0x526279[_0x60f2e4(0x29c)],$gameMap&&$gameMap[_0x60f2e4(0x353)]()&&(this['power']=0x0);},Weather[_0x32d3d9(0x2c1)][_0x32d3d9(0x266)]=function(){const _0x16d9b7=_0x32d3d9;if(SceneManager[_0x16d9b7(0x587)]())return;this[_0x16d9b7(0x2c2)]['x']=$gameMap[_0x16d9b7(0x410)]()*$gameMap[_0x16d9b7(0x329)](),this[_0x16d9b7(0x2c2)]['y']=$gameMap[_0x16d9b7(0x582)]()*$gameMap['tileHeight']();},Weather[_0x32d3d9(0x2c1)]['updateDimmerColor']=function(){const _0x5f276c=_0x32d3d9;if(this[_0x5f276c(0x3b3)]()[_0x5f276c(0x341)]===_0x5f276c(0x251))return;if(this[_0x5f276c(0x3c9)]===this[_0x5f276c(0x3b3)]()['dimmer'][_0x5f276c(0x54f)])return;const _0x370d66=this['data']()[_0x5f276c(0x465)];let _0x1f990a=this['data']()['dimmer']['color'];this[_0x5f276c(0x3c9)]=_0x1f990a;if(_0x370d66>0x0){const _0x171d8c=[this['_dimmerSprite']['_red'],this[_0x5f276c(0x375)][_0x5f276c(0x3cf)],this['_dimmerSprite'][_0x5f276c(0x39b)]],_0x4a130e=ColorManager[_0x5f276c(0x319)](_0x1f990a);for(let _0x191b2b=0x0;_0x191b2b<0x3;_0x191b2b++){_0x171d8c[_0x191b2b]=Math[_0x5f276c(0x1ec)]((_0x171d8c[_0x191b2b]*(_0x370d66-0x1)+_0x4a130e[_0x191b2b])/_0x370d66);}this[_0x5f276c(0x3c9)]=ColorManager['arrayToHex'](_0x171d8c);}const _0x44bb3=ColorManager[_0x5f276c(0x319)](this[_0x5f276c(0x3c9)]);this[_0x5f276c(0x375)][_0x5f276c(0x26b)](_0x44bb3[0x0]||0x0,_0x44bb3[0x1]||0x0,_0x44bb3[0x2]||0x0);},Weather['prototype'][_0x32d3d9(0x297)]=function(){const _0x369468=_0x32d3d9,_0x483d22=this[_0x369468(0x3b3)]()['duration'],_0x32f3f8=this['data']()[_0x369468(0x3ed)];let _0x22814b=_0x32f3f8[_0x369468(0x28e)]+_0x32f3f8[_0x369468(0x308)]*this['data']()[_0x369468(0x4c9)];if(this[_0x369468(0x29c)]<=0x0)_0x22814b=0x0;let _0x456d5c=_0x22814b;_0x483d22>0x0&&(_0x456d5c=(this[_0x369468(0x375)][_0x369468(0x373)]*(_0x483d22-0x1)+_0x22814b)/_0x483d22),$gameMap&&$gameMap[_0x369468(0x353)]()&&(_0x456d5c=0x0),this[_0x369468(0x375)][_0x369468(0x373)]=_0x456d5c;},Weather[_0x32d3d9(0x2c1)][_0x32d3d9(0x577)]=function(){const _0x3a6751=_0x32d3d9;if($gameMap&&$gameMap[_0x3a6751(0x353)]())return 0x0;if(this[_0x3a6751(0x29c)]<0x1)return 0x0;const _0x19a1b8=this[_0x3a6751(0x3b3)](),_0x365e76=_0x19a1b8[_0x3a6751(0x4fe)][_0x3a6751(0x42f)]||0x0,_0x3eca96=_0x19a1b8[_0x3a6751(0x4fe)][_0x3a6751(0x34c)]||0x0,_0x4bb42d=(ConfigManager['weatherDensity']??0x64)/0x64,_0x404e4a=Math['ceil'](this[_0x3a6751(0x29c)]*_0x3eca96*_0x4bb42d)+_0x365e76;return Math[_0x3a6751(0x346)](_0x404e4a);},ConfigManager[_0x32d3d9(0x4e2)]=0x64,VisuMZ['WeatherEffects'][_0x32d3d9(0x43c)]=ConfigManager[_0x32d3d9(0x599)],ConfigManager[_0x32d3d9(0x599)]=function(){const _0x2db272=_0x32d3d9,_0x3d0407=VisuMZ[_0x2db272(0x4c5)][_0x2db272(0x43c)][_0x2db272(0x2f0)](this);return _0x3d0407[_0x2db272(0x4e2)]=this[_0x2db272(0x4e2)],_0x3d0407;},VisuMZ[_0x32d3d9(0x4c5)]['ConfigManager_applyData']=ConfigManager['applyData'],ConfigManager[_0x32d3d9(0x2b8)]=function(_0x2ea078){const _0x2400f8=_0x32d3d9;VisuMZ[_0x2400f8(0x4c5)][_0x2400f8(0x247)][_0x2400f8(0x2f0)](this,_0x2ea078),_0x2400f8(0x4e2)in _0x2ea078?this['weatherDensity']=_0x2ea078[_0x2400f8(0x4e2)]:this[_0x2400f8(0x4e2)]=0x64;},ImageManager[_0x32d3d9(0x265)]=VisuMZ['WeatherEffects'][_0x32d3d9(0x571)][_0x32d3d9(0x3fd)][_0x32d3d9(0x4b2)]??![],ImageManager[_0x32d3d9(0x5b8)]=VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x571)][_0x32d3d9(0x3fd)][_0x32d3d9(0x244)]||0x10,ImageManager[_0x32d3d9(0x283)]=VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x571)][_0x32d3d9(0x3fd)][_0x32d3d9(0x1f7)],ImageManager[_0x32d3d9(0x568)]=![],ImageManager[_0x32d3d9(0x535)]=['🐄','🐕','🐖','🐏','🐑','🐐','🐇','🐎','🐒','🐓','🦆','🐈','🐁','🐀','🦢','🐢'],VisuMZ[_0x32d3d9(0x4c5)]['Scene_Boot_loadSystemImages']=Scene_Boot[_0x32d3d9(0x2c1)][_0x32d3d9(0x474)],Scene_Boot[_0x32d3d9(0x2c1)]['loadSystemImages']=function(){const _0x3d0a8f=_0x32d3d9;VisuMZ[_0x3d0a8f(0x4c5)][_0x3d0a8f(0x306)][_0x3d0a8f(0x2f0)](this),ImageManager['prepareGeneratedWeatherImages']();},ImageManager['shouldPreRenderWeatherImages']=function(){const _0x155ee3=_0x32d3d9;if(Utils[_0x155ee3(0x2ac)]())return![];return ImageManager['WEATHER_EFFECTS_PRERENDER_GENERATED_IMAGES'];},ImageManager[_0x32d3d9(0x430)]=function(){const _0x14de5a=_0x32d3d9;if(!ImageManager[_0x14de5a(0x483)]())return;ImageManager[_0x14de5a(0x24c)]();const _0x3f197a=[_0x14de5a(0x251)];for(const _0x19ee7c of _0x3f197a){this[_0x14de5a(0x580)](_0x19ee7c);}let _0x78b92e=0x0;const _0x15ef56=[_0x14de5a(0x38a),_0x14de5a(0x5ab),'firestorm','flamewall',_0x14de5a(0x5ce),_0x14de5a(0x2c3),_0x14de5a(0x55b),_0x14de5a(0x487),_0x14de5a(0x2d4),_0x14de5a(0x1f6),_0x14de5a(0x364),'snowflakes',_0x14de5a(0x4c8),_0x14de5a(0x426),'diamonddust','aurora',_0x14de5a(0x53a),_0x14de5a(0x461),_0x14de5a(0x25c),_0x14de5a(0x2cf),_0x14de5a(0x511),_0x14de5a(0x548),'spiderbolt',_0x14de5a(0x366),_0x14de5a(0x557),_0x14de5a(0x494),_0x14de5a(0x281),_0x14de5a(0x41f),_0x14de5a(0x561),_0x14de5a(0x551),_0x14de5a(0x576),'soapbubbles',_0x14de5a(0x3a2),'sandstorm','pollutionclouds',_0x14de5a(0x4a3),_0x14de5a(0x228),'sandclouds',_0x14de5a(0x26a),'toxicgas',_0x14de5a(0x44e),'radioactivebeam',_0x14de5a(0x45a),_0x14de5a(0x3c2),_0x14de5a(0x5a0),_0x14de5a(0x5b6),_0x14de5a(0x4cf),'whiteclouds',_0x14de5a(0x20a),_0x14de5a(0x3fe),'xtreme','balloons',_0x14de5a(0x24e),_0x14de5a(0x455),_0x14de5a(0x592),'rainboworbs','lightorbs',_0x14de5a(0x4d9),_0x14de5a(0x489),_0x14de5a(0x2d9),_0x14de5a(0x267),_0x14de5a(0x4df),_0x14de5a(0x27d),'smokefog','darkorbs',_0x14de5a(0x514),_0x14de5a(0x20c),_0x14de5a(0x4c7),_0x14de5a(0x272),_0x14de5a(0x565),_0x14de5a(0x5e8),'fireworksflower',_0x14de5a(0x264)];_0x78b92e=ImageManager[_0x14de5a(0x5b8)];while(_0x78b92e--){for(const _0x51d34c of _0x15ef56){this[_0x14de5a(0x580)](_0x51d34c);}}const _0x3e8bd2=[_0x14de5a(0x25c),'thunderbolt',_0x14de5a(0x212),_0x14de5a(0x212),_0x14de5a(0x212),'aurora',_0x14de5a(0x2d4),'shootingstars'];_0x78b92e=ImageManager[_0x14de5a(0x5b8)];while(_0x78b92e--){for(const _0x55b865 of _0x3e8bd2){this['getGeneratedWeatherParticle'](_0x55b865);}}},ImageManager[_0x32d3d9(0x24c)]=function(){const _0x5bf6ad=_0x32d3d9;if(this[_0x5bf6ad(0x36e)])return this['_weatherIcons'];return this[_0x5bf6ad(0x36e)]=Bitmap['load']('img/system/Iconset.png'),this['_weatherIcons'][_0x5bf6ad(0x350)]=ImageManager['WEATHER_EFFECTS_SMOOTH_ICONS'],this[_0x5bf6ad(0x36e)];},ImageManager[_0x32d3d9(0x580)]=function(_0xf96cc){const _0xe8af91=_0x32d3d9;_0xf96cc=_0xf96cc[_0xe8af91(0x21c)]()[_0xe8af91(0x4b3)]();switch(_0xf96cc){case'none':return this[_0xe8af91(0x59c)]();case _0xe8af91(0x281):return this[_0xe8af91(0x50c)]();case _0xe8af91(0x41f):return this[_0xe8af91(0x419)]();case _0xe8af91(0x364):return this[_0xe8af91(0x4ed)]();case'embers':return this[_0xe8af91(0x2de)]();case _0xe8af91(0x417):return this[_0xe8af91(0x3ec)]();case'fireflies':return this[_0xe8af91(0x37b)]();case _0xe8af91(0x441):return this['weatherEffectsFlameWall']();case'heatclouds':return this[_0xe8af91(0x253)]();case _0xe8af91(0x2c3):return this[_0xe8af91(0x29a)]();case _0xe8af91(0x55b):return this[_0xe8af91(0x4fc)]();case _0xe8af91(0x487):return this[_0xe8af91(0x3a5)]();case _0xe8af91(0x436):case _0xe8af91(0x2d4):return this[_0xe8af91(0x242)]();case _0xe8af91(0x1f6):return this[_0xe8af91(0x46c)]();case'snowflakes':return this['weatherEffectsSnowflakes']();case _0xe8af91(0x4c8):return this[_0xe8af91(0x4d3)]();case'icefog':return this[_0xe8af91(0x4ec)]();case _0xe8af91(0x37a):return this[_0xe8af91(0x56f)]();case _0xe8af91(0x212):return this[_0xe8af91(0x581)]();case _0xe8af91(0x53a):return this['weatherEffectsArcticBeams']();case _0xe8af91(0x461):return this[_0xe8af91(0x598)]();case _0xe8af91(0x5e2):return this[_0xe8af91(0x425)]();case'thunderbolt':case _0xe8af91(0x3bc):case _0xe8af91(0x366):case _0xe8af91(0x557):case _0xe8af91(0x246):return this['weatherEffectsThunderbolt']();case'purplehaze':return this[_0xe8af91(0x31a)]();case _0xe8af91(0x511):return this[_0xe8af91(0x4ff)]();case'ultraviolet':return this[_0xe8af91(0x4be)]();case'spiderbolt':case'staticcharge':return this['weatherEffectsSpiderbolt']();case _0xe8af91(0x494):return this[_0xe8af91(0x34a)]();case _0xe8af91(0x561):return this[_0xe8af91(0x54e)]();case _0xe8af91(0x551):case _0xe8af91(0x43e):return this[_0xe8af91(0x3d3)]();case _0xe8af91(0x576):return this[_0xe8af91(0x546)]();case'soapbubbles':return this[_0xe8af91(0x2fd)]();case _0xe8af91(0x2ae):return this['weatherEffectsCloudBurst']();case _0xe8af91(0x3a2):return this[_0xe8af91(0x1fc)]();case _0xe8af91(0x55f):return this[_0xe8af91(0x427)]();case _0xe8af91(0x409):return this[_0xe8af91(0x544)]();case _0xe8af91(0x4a3):return this['weatherEffectsDustStorm']();case _0xe8af91(0x228):return this[_0xe8af91(0x4ae)]();case _0xe8af91(0x2a7):return this['weatherEffectsSandClouds']();case _0xe8af91(0x26a):return this['weatherEffectsCrumblingCave']();case _0xe8af91(0x33e):return this[_0xe8af91(0x2b2)]();case _0xe8af91(0x44e):return this[_0xe8af91(0x38e)]();case'radioactivebeam':return this[_0xe8af91(0x583)]();case _0xe8af91(0x45a):return this[_0xe8af91(0x49b)]();case _0xe8af91(0x3c2):return this[_0xe8af91(0x5d9)]();case _0xe8af91(0x5a0):return this[_0xe8af91(0x2b6)]();case _0xe8af91(0x5b6):return this[_0xe8af91(0x4b9)]();case _0xe8af91(0x4cf):return this[_0xe8af91(0x407)]();case'whiteclouds':return this[_0xe8af91(0x413)]();case'pollen':return this[_0xe8af91(0x315)]();case'tempest':return this['weatherEffectsTempest']();case _0xe8af91(0x3fe):return this[_0xe8af91(0x2e9)]();case'xtreme':return this[_0xe8af91(0x3df)]();case'balloons':return this[_0xe8af91(0x503)]();case _0xe8af91(0x24e):return this[_0xe8af91(0x38f)]();case _0xe8af91(0x455):return this[_0xe8af91(0x3a7)]();case'rainbowclouds':return this['weatherEffectsRainbowClouds']();case _0xe8af91(0x2dd):return this['weatherEffectsRainbowOrbs']();case _0xe8af91(0x381):return this[_0xe8af91(0x51a)]();case _0xe8af91(0x4d9):return this[_0xe8af91(0x338)]();case _0xe8af91(0x59d):return this[_0xe8af91(0x29a)]();case _0xe8af91(0x489):case'prismburst':return this[_0xe8af91(0x361)]();case _0xe8af91(0x2d9):return this[_0xe8af91(0x555)]();case _0xe8af91(0x267):return this[_0xe8af91(0x2fe)]();case _0xe8af91(0x4df):return this[_0xe8af91(0x4fb)]();case'sootfall':return this[_0xe8af91(0x515)]();case'smokefog':return this[_0xe8af91(0x303)]();case _0xe8af91(0x3a1):return this[_0xe8af91(0x478)]();case _0xe8af91(0x514):return this['weatherEffectsBloodRain']();case'moonbeams':return this[_0xe8af91(0x325)]();case _0xe8af91(0x4c7):return this['weatherEffectsSmokeClouds']();case _0xe8af91(0x272):return this['weatherEffectsShadowBurst']();case'fumes':return this['weatherEffectsFumes']();case _0xe8af91(0x5e8):return this[_0xe8af91(0x425)]();case _0xe8af91(0x3c3):return this['weatherEffectsFireworksFlower']();case _0xe8af91(0x264):case _0xe8af91(0x456):case'slow_icons_2':case _0xe8af91(0x3a6):case _0xe8af91(0x25e):case'slow_icons_5':case'slow_icons_6':case _0xe8af91(0x2f3):case'slow_icons_8':case _0xe8af91(0x5a6):case _0xe8af91(0x3ce):case _0xe8af91(0x270):case'medium_icons_2':case _0xe8af91(0x59a):case'medium_icons_4':case'medium_icons_5':case'medium_icons_6':case _0xe8af91(0x3b6):case _0xe8af91(0x399):case _0xe8af91(0x420):case _0xe8af91(0x50a):case _0xe8af91(0x590):case _0xe8af91(0x216):case _0xe8af91(0x45e):case'fast_icons_4':case'fast_icons_5':case'fast_icons_6':case'fast_icons_7':case'fast_icons_8':case _0xe8af91(0x401):case _0xe8af91(0x4d1):return this['weatherEffectsIcons']();default:return this[_0xe8af91(0x4ed)]();}},ImageManager[_0x32d3d9(0x4bb)]=function(){const _0x1e308a=_0x32d3d9;return!this[_0x1e308a(0x4aa)]&&(this[_0x1e308a(0x4aa)]=document[_0x1e308a(0x52f)](_0x1e308a(0x4b0))),this[_0x1e308a(0x4aa)];},ImageManager[_0x32d3d9(0x268)]=function(_0x10e458,_0xd331b7){const _0x48f8f8=_0x32d3d9,_0x3e0889=this[_0x48f8f8(0x4bb)]();return _0x3e0889[_0x48f8f8(0x3b2)]=_0x10e458,_0x3e0889[_0x48f8f8(0x58a)]=_0xd331b7,_0x3e0889['getContext']('2d');},ImageManager[_0x32d3d9(0x59c)]=function(){const _0x5489f5=_0x32d3d9;if(this[_0x5489f5(0x2c0)])return this[_0x5489f5(0x2c0)];const _0x4b74a2=new Bitmap(0x1,0x1);_0x4b74a2[_0x5489f5(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x5489f5(0x251));return this[_0x5489f5(0x2c0)]=_0x4b74a2,this[_0x5489f5(0x2c0)];},ImageManager[_0x32d3d9(0x50c)]=function(){const _0x49890b=_0x32d3d9;if(this[_0x49890b(0x2a4)]&&this[_0x49890b(0x2a4)][_0x49890b(0x5c6)]>=ImageManager[_0x49890b(0x5b8)]){const _0x108112=this[_0x49890b(0x2a4)];return _0x108112[Math[_0x49890b(0x31e)](Math[_0x49890b(0x509)]()*_0x108112['length'])];}const _0x14358e=new Bitmap(0x1f4,0x1f4),_0x4e9a3f='rgba(255,255,255,0)',_0x35b2b8=_0x49890b(0x4c3),_0x3a2b83=_0x14358e['width'],_0x284f68=_0x14358e[_0x49890b(0x58a)],_0x2d9d7c=0x3c,_0x181fa6=_0x2d9d7c/0x2,_0x399c74=0x2;let _0x25d203=0x10;while(_0x25d203--){const _0x2821c0=Math[_0x49890b(0x4e6)](_0x3a2b83-_0x2d9d7c)+_0x2d9d7c,_0x1bbf05=Math['randomInt'](_0x284f68-_0x399c74)+_0x399c74;_0x14358e[_0x49890b(0x520)]=Math[_0x49890b(0x4e6)](0x40)+0xc0,_0x14358e[_0x49890b(0x517)](_0x2821c0,_0x1bbf05,_0x181fa6,0x2,_0x4e9a3f,_0x35b2b8),_0x14358e['fillRect'](_0x2821c0+_0x181fa6,_0x1bbf05,_0x181fa6,0x2,_0x35b2b8);}_0x14358e[_0x49890b(0x558)]=![];if(ImageManager[_0x49890b(0x568)])console['log'](_0x49890b(0x281));return this[_0x49890b(0x2a4)]=this['_cached_WeatherEffects_Rain']||[],this[_0x49890b(0x2a4)][_0x49890b(0x4ee)](_0x14358e),_0x14358e;},ImageManager['weatherEffectsStorm']=function(){const _0x4630b9=_0x32d3d9;if(this[_0x4630b9(0x477)]&&this[_0x4630b9(0x477)][_0x4630b9(0x5c6)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x41273c=this[_0x4630b9(0x477)];return _0x41273c[Math[_0x4630b9(0x31e)](Math[_0x4630b9(0x509)]()*_0x41273c[_0x4630b9(0x5c6)])];}const _0x495c76=new Bitmap(0x1f4,0x1f4),_0x126cbb=_0x4630b9(0x411),_0x4a19bc=_0x4630b9(0x4c3),_0x410fd8=_0x495c76[_0x4630b9(0x3b2)],_0x1b3622=_0x495c76[_0x4630b9(0x58a)],_0x56d005=0x64,_0x3d2f65=_0x56d005/0x2,_0x4d502d=0x2;let _0xd7e9a8=0x20;while(_0xd7e9a8--){const _0x196e31=Math[_0x4630b9(0x4e6)](_0x410fd8-_0x56d005)+_0x56d005,_0xabba60=Math[_0x4630b9(0x4e6)](_0x1b3622-_0x4d502d)+_0x4d502d;_0x495c76[_0x4630b9(0x520)]=Math[_0x4630b9(0x4e6)](0x40)+0xc0,_0x495c76[_0x4630b9(0x517)](_0x196e31,_0xabba60,Math['ceil'](_0x3d2f65),_0x4d502d,_0x126cbb,_0x4a19bc),_0x495c76[_0x4630b9(0x3ef)](_0x196e31+Math[_0x4630b9(0x346)](_0x3d2f65),_0xabba60,Math[_0x4630b9(0x31e)](_0x3d2f65),_0x4d502d,_0x4a19bc);}_0x495c76['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x4630b9(0x566)](_0x4630b9(0x41f));return this['_cached_WeatherEffects_Storm']=this[_0x4630b9(0x477)]||[],this['_cached_WeatherEffects_Storm'][_0x4630b9(0x4ee)](_0x495c76),_0x495c76;},ImageManager[_0x32d3d9(0x4ed)]=function(){const _0x1b61cc=_0x32d3d9;if(this['_cached_WeatherEffects_Snow']&&this[_0x1b61cc(0x2a8)][_0x1b61cc(0x5c6)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x52b7a7=this[_0x1b61cc(0x2a8)];return _0x52b7a7[Math[_0x1b61cc(0x31e)](Math[_0x1b61cc(0x509)]()*_0x52b7a7[_0x1b61cc(0x5c6)])];}const _0x5a5c65=new Bitmap(0x1f4,0x1f4),_0x4aae53=_0x5a5c65[_0x1b61cc(0x3b2)],_0x56cfaa=_0x5a5c65[_0x1b61cc(0x58a)],_0x29b8e6=0x5;let _0xf9e6ee=0x10;while(_0xf9e6ee--){const _0x4d65eb=Math[_0x1b61cc(0x4e6)](_0x4aae53-_0x29b8e6*0x2)+_0x29b8e6,_0x56c9ff=Math[_0x1b61cc(0x4e6)](_0x56cfaa-_0x29b8e6*0x2)+_0x29b8e6,_0x395c91=Math[_0x1b61cc(0x4e6)](_0x29b8e6)+0x1;_0x5a5c65[_0x1b61cc(0x520)]=Math[_0x1b61cc(0x4e6)](0x40)+0xc0,_0x5a5c65[_0x1b61cc(0x3d8)](_0x4d65eb,_0x56c9ff,_0x395c91,_0x1b61cc(0x21e));}_0x5a5c65[_0x1b61cc(0x558)]=![];if(ImageManager[_0x1b61cc(0x568)])console[_0x1b61cc(0x566)]('snow');return this[_0x1b61cc(0x2a8)]=this[_0x1b61cc(0x2a8)]||[],this[_0x1b61cc(0x2a8)][_0x1b61cc(0x4ee)](_0x5a5c65),_0x5a5c65;},ImageManager[_0x32d3d9(0x46c)]=function(){const _0x1c75fd=_0x32d3d9;if(this[_0x1c75fd(0x337)]&&this['_cached_WeatherEffects_Blizzard'][_0x1c75fd(0x5c6)]>=ImageManager[_0x1c75fd(0x5b8)]){const _0x478e4d=this[_0x1c75fd(0x337)];return _0x478e4d[Math['floor'](Math[_0x1c75fd(0x509)]()*_0x478e4d[_0x1c75fd(0x5c6)])];}const _0x5c544e=new Bitmap(0x1f4,0x1f4),_0xabdff7=_0x5c544e[_0x1c75fd(0x3b2)],_0x53935f=_0x5c544e[_0x1c75fd(0x58a)],_0x1a9d37=0x8;let _0x30f5cb=0x20;while(_0x30f5cb--){const _0x17830f=Math[_0x1c75fd(0x4e6)](_0xabdff7-_0x1a9d37*0x2)+_0x1a9d37,_0x23dc42=Math[_0x1c75fd(0x4e6)](_0x53935f-_0x1a9d37*0x2)+_0x1a9d37,_0x278097=Math[_0x1c75fd(0x4e6)](_0x1a9d37)+0x1;_0x5c544e[_0x1c75fd(0x520)]=Math[_0x1c75fd(0x4e6)](0x40)+0xc0,_0x5c544e['drawCircle'](_0x17830f,_0x23dc42,_0x278097,'white');}_0x5c544e[_0x1c75fd(0x558)]=![];if(ImageManager[_0x1c75fd(0x568)])console['log'](_0x1c75fd(0x1f6));return this['_cached_WeatherEffects_Blizzard']=this[_0x1c75fd(0x337)]||[],this[_0x1c75fd(0x337)][_0x1c75fd(0x4ee)](_0x5c544e),_0x5c544e;},ImageManager['weatherEffectsBubbles']=function(){const _0x302ceb=_0x32d3d9;if(this['_cached_WeatherEffects_Bubbles']&&this[_0x302ceb(0x27e)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x5509e5=this['_cached_WeatherEffects_Bubbles'];return _0x5509e5[Math['floor'](Math[_0x302ceb(0x509)]()*_0x5509e5[_0x302ceb(0x5c6)])];}const _0x4e7a2a=new Bitmap(0x1f4,0x1f4),_0x5aad84=_0x4e7a2a[_0x302ceb(0x3b2)],_0x93da10=_0x4e7a2a[_0x302ceb(0x58a)],_0x32884b=0xc;let _0x4f4d42=0x10;while(_0x4f4d42--){const _0x234f46=Math['randomInt'](_0x5aad84-_0x32884b*0x2)+_0x32884b,_0x27f262=Math[_0x302ceb(0x4e6)](_0x93da10-_0x32884b*0x2)+_0x32884b,_0x15ffd0=Math[_0x302ceb(0x4e6)](_0x32884b/0x2)+_0x32884b/0x2;_0x4e7a2a[_0x302ceb(0x520)]=Math[_0x302ceb(0x4e6)](0x40)+0xc0,_0x4e7a2a[_0x302ceb(0x3d8)](_0x234f46,_0x27f262,_0x15ffd0,'cyan'),_0x4e7a2a[_0x302ceb(0x5fb)](_0x234f46,_0x27f262,_0x15ffd0-0x2),_0x4e7a2a['drawCircle'](_0x234f46+_0x15ffd0/0x3,_0x27f262-_0x15ffd0/0x3,_0x15ffd0/0x3,'white');}_0x4e7a2a[_0x302ceb(0x558)]=![];if(ImageManager[_0x302ceb(0x568)])console[_0x302ceb(0x566)](_0x302ceb(0x494));return this[_0x302ceb(0x27e)]=this[_0x302ceb(0x27e)]||[],this[_0x302ceb(0x27e)]['push'](_0x4e7a2a),_0x4e7a2a;},ImageManager['weatherEffectsStars']=function(){const _0x1dfeed=_0x32d3d9;if(this['_cached_WeatherEffects_Stars']&&ColorManager[_0x1dfeed(0x4b8)]['length']<=0x0){const _0x24ec7e=this['_cached_WeatherEffects_Stars'];return _0x24ec7e[Math[_0x1dfeed(0x31e)](Math[_0x1dfeed(0x509)]()*_0x24ec7e['length'])];}const _0x1d20c2=new Bitmap(0x18,0x18),_0x4665e0=ColorManager[_0x1dfeed(0x4b8)][_0x1dfeed(0x349)]();_0x1d20c2[_0x1dfeed(0x4e1)](0xc,0xc,_0x4665e0,_0x4665e0,0x5,0xc,0x6),_0x1d20c2[_0x1dfeed(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x1dfeed(0x566)](_0x1dfeed(0x24e));return this[_0x1dfeed(0x472)]=this[_0x1dfeed(0x472)]||[],this[_0x1dfeed(0x472)]['push'](_0x1d20c2),_0x1d20c2;},ImageManager[_0x32d3d9(0x4af)]=function(){const _0x87e620=_0x32d3d9;if(this[_0x87e620(0x54c)]&&this[_0x87e620(0x54c)][_0x87e620(0x5c6)]>=ImageManager[_0x87e620(0x5b8)]){const _0x2a8a2a=this[_0x87e620(0x54c)];return _0x2a8a2a[Math[_0x87e620(0x31e)](Math[_0x87e620(0x509)]()*_0x2a8a2a[_0x87e620(0x5c6)])];}const _0x48f8ed=new Bitmap(0x64,0x64);_0x48f8ed[_0x87e620(0x3a4)](),_0x48f8ed[_0x87e620(0x558)]=![];if(ImageManager[_0x87e620(0x568)])console[_0x87e620(0x566)](_0x87e620(0x396));return this[_0x87e620(0x54c)]=this[_0x87e620(0x54c)]||[],this[_0x87e620(0x54c)][_0x87e620(0x4ee)](_0x48f8ed),_0x48f8ed;},ImageManager[_0x32d3d9(0x427)]=function(){const _0x1261f3=_0x32d3d9;if(this['_cached_WeatherEffects_Sandstorm']&&this['_cached_WeatherEffects_Sandstorm'][_0x1261f3(0x5c6)]>=ImageManager[_0x1261f3(0x5b8)]){const _0x296a6a=this['_cached_WeatherEffects_Sandstorm'];return _0x296a6a[Math[_0x1261f3(0x31e)](Math[_0x1261f3(0x509)]()*_0x296a6a['length'])];}const _0x407ec2=ColorManager[_0x1261f3(0x578)][_0x1261f3(0x33a)](),_0x417db6=1.5,_0x1daee6=ColorManager['adjustHexColor'](_0x407ec2[Math[_0x1261f3(0x31e)](Math[_0x1261f3(0x509)]()*_0x407ec2[_0x1261f3(0x5c6)])],_0x417db6),_0x41a911=ColorManager[_0x1261f3(0x23b)](_0x407ec2[Math[_0x1261f3(0x31e)](Math['random']()*_0x407ec2[_0x1261f3(0x5c6)])],_0x417db6),_0x10ef8c=ColorManager[_0x1261f3(0x23b)](_0x407ec2[Math['floor'](Math[_0x1261f3(0x509)]()*_0x407ec2[_0x1261f3(0x5c6)])],_0x417db6),_0x3e35c6=new Bitmap(0x1f4,0x1f4);_0x3e35c6[_0x1261f3(0x5d0)](0xfa,0x15e,0x4b,_0x1daee6,0x4,0x14),_0x3e35c6[_0x1261f3(0x5d0)](0xfa,0xfa,0x64,_0x10ef8c,0x8,0x19),_0x3e35c6[_0x1261f3(0x5d0)](0xfa,0xfa,0x3c,_0x41a911,0x4,0x14);const _0x1be904=_0x3e35c6[_0x1261f3(0x3b2)],_0x3475c5=_0x3e35c6['height'],_0x475d41=0x2;let _0x3bb5ea=0x40;while(_0x3bb5ea--){const _0x537122=Math['randomInt'](_0x1be904-_0x475d41*0x2)+_0x475d41,_0x17528a=Math['randomInt'](_0x3475c5-_0x475d41*0x2)+_0x475d41;let _0x708a7e=_0x407ec2[Math[_0x1261f3(0x31e)](Math[_0x1261f3(0x509)]()*_0x407ec2[_0x1261f3(0x5c6)])];_0x708a7e=ColorManager['adjustHexColor'](_0x708a7e,_0x417db6);const _0x2fa3b0=Math[_0x1261f3(0x4e6)](_0x475d41)+0x1;_0x3e35c6[_0x1261f3(0x520)]=Math[_0x1261f3(0x4e6)](0x40)+0xa0,_0x3e35c6['drawCircle'](_0x537122,_0x17528a,_0x2fa3b0,_0x708a7e);}_0x3e35c6['_customModified']=![];if(ImageManager[_0x1261f3(0x568)])console[_0x1261f3(0x566)](_0x1261f3(0x55f));return this[_0x1261f3(0x374)]=this['_cached_WeatherEffects_Sandstorm']||[],this[_0x1261f3(0x374)][_0x1261f3(0x4ee)](_0x3e35c6),_0x3e35c6;},ImageManager[_0x32d3d9(0x2de)]=function(){const _0x308ffa=_0x32d3d9;if(this[_0x308ffa(0x5af)]&&this['_cached_WeatherEffects_Embers']['length']>=ImageManager[_0x308ffa(0x5b8)]){const _0x238703=this[_0x308ffa(0x5af)];return _0x238703[Math[_0x308ffa(0x31e)](Math['random']()*_0x238703[_0x308ffa(0x5c6)])];}const _0x46a62d=new Bitmap(0x1f4,0x1f4),_0x102285=_0x46a62d[_0x308ffa(0x3b2)],_0x4ae298=_0x46a62d[_0x308ffa(0x58a)],_0xd75ef9=0x10;let _0x48f986=0x10;while(_0x48f986--){const _0x103d85=Math[_0x308ffa(0x4e6)](_0x102285-_0xd75ef9*0x2)+_0xd75ef9,_0x5c5ac4=Math[_0x308ffa(0x4e6)](_0x4ae298-_0xd75ef9*0x2)+_0xd75ef9,_0x4da8b6=Math['randomInt'](_0xd75ef9/0x2)+0x2,_0x2a468b=ColorManager[_0x308ffa(0x519)]([0xff,Math[_0x308ffa(0x4e6)](0x46),0x0]);_0x46a62d[_0x308ffa(0x520)]=Math[_0x308ffa(0x4e6)](0x40),_0x46a62d['drawCircle'](_0x103d85,_0x5c5ac4,_0x4da8b6,_0x2a468b),_0x46a62d[_0x308ffa(0x520)]=Math['randomInt'](0x40)+0x40,_0x46a62d[_0x308ffa(0x3d8)](_0x103d85,_0x5c5ac4,_0x4da8b6/0x2,_0x2a468b),_0x46a62d[_0x308ffa(0x520)]=Math[_0x308ffa(0x4e6)](0x40)+0xc0;const _0x510732=ColorManager[_0x308ffa(0x519)]([0xff,Math[_0x308ffa(0x4e6)](0x46)+0xb9,0x0]);_0x46a62d[_0x308ffa(0x3d8)](_0x103d85,_0x5c5ac4,_0x4da8b6/0x4,_0x510732),_0x46a62d[_0x308ffa(0x3d8)](_0x103d85,_0x5c5ac4,_0x4da8b6/0x8,_0x308ffa(0x53e));}_0x46a62d[_0x308ffa(0x558)]=![];if(ImageManager[_0x308ffa(0x568)])console[_0x308ffa(0x566)](_0x308ffa(0x38a));return this['_cached_WeatherEffects_Embers']=this[_0x308ffa(0x5af)]||[],this[_0x308ffa(0x5af)][_0x308ffa(0x4ee)](_0x46a62d),_0x46a62d;},ImageManager[_0x32d3d9(0x2fe)]=function(){const _0x1dac43=_0x32d3d9;if(this['_cached_WeatherEffects_AshDebris']&&this[_0x1dac43(0x310)]['length']>=ImageManager[_0x1dac43(0x5b8)]){const _0x3b010f=this[_0x1dac43(0x310)];return _0x3b010f[Math[_0x1dac43(0x31e)](Math[_0x1dac43(0x509)]()*_0x3b010f[_0x1dac43(0x5c6)])];}const _0x4b96da=new Bitmap(0x12,0x12),_0x101e1e=_0x4b96da[_0x1dac43(0x3b2)],_0x2a95bd=_0x4b96da[_0x1dac43(0x58a)],_0x4c18cb=_0x101e1e/0x2-0x2,_0x5db4a3=_0x2a95bd/0x2-0x2,_0x5136e4=[];_0x5136e4[_0x1dac43(0x4ee)](Math[_0x1dac43(0x4e6)](_0x4c18cb)+0x2,Math[_0x1dac43(0x4e6)](_0x5db4a3)+0x2),_0x5136e4['push'](_0x101e1e-Math['randomInt'](_0x4c18cb)-0x2,Math[_0x1dac43(0x4e6)](_0x5db4a3)+0x2),_0x5136e4[_0x1dac43(0x4ee)](_0x101e1e-Math['randomInt'](_0x4c18cb)-0x2,_0x2a95bd-Math[_0x1dac43(0x4e6)](_0x5db4a3)-0x2),_0x5136e4[_0x1dac43(0x4ee)](Math[_0x1dac43(0x4e6)](_0x4c18cb)+0x2,_0x2a95bd-Math[_0x1dac43(0x4e6)](_0x5db4a3)-0x2);const _0x96c20d=ColorManager[_0x1dac43(0x279)][_0x1dac43(0x33a)](),_0x3fc225=_0x96c20d[Math[_0x1dac43(0x31e)](Math['random']()*_0x96c20d[_0x1dac43(0x5c6)])];_0x4b96da[_0x1dac43(0x5ae)](_0x5136e4,_0x3fc225,_0x1dac43(0x322),0x2,0xff,![]),_0x4b96da['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x1dac43(0x566)](_0x1dac43(0x267));return this[_0x1dac43(0x310)]=this[_0x1dac43(0x310)]||[],this['_cached_WeatherEffects_AshDebris']['push'](_0x4b96da),_0x4b96da;},ImageManager[_0x32d3d9(0x3ec)]=function(){const _0x39c677=_0x32d3d9;if(this[_0x39c677(0x428)]&&this[_0x39c677(0x428)][_0x39c677(0x5c6)]>=ImageManager[_0x39c677(0x5b8)]){const _0x5e106f=this[_0x39c677(0x428)];return _0x5e106f[Math['floor'](Math[_0x39c677(0x509)]()*_0x5e106f[_0x39c677(0x5c6)])];}const _0x4c5d0e=new Bitmap(0x1f4,0x1f4),_0x34512f=_0x4c5d0e[_0x39c677(0x3b2)],_0x5bc97f=_0x4c5d0e['height'],_0x5ef1e7=0xc,_0x443746=0x64;let _0x40b0c4=0x4;while(_0x40b0c4--){const _0x54cb94=Math[_0x39c677(0x4e6)](_0x34512f-_0x443746*0x2)+_0x443746*0x1,_0xf8ed80=Math[_0x39c677(0x4e6)](_0x5bc97f-_0x5ef1e7*0x8)+_0x5ef1e7*0x4,_0xe11071=Math[_0x39c677(0x4e6)](_0x5ef1e7*0x2/0x5)+_0x5ef1e7*0x2/0x5,_0x1848f2=Math[_0x39c677(0x4e6)](_0x443746*0x1/0x3)+_0x443746*0x2/0x3;_0x4c5d0e[_0x39c677(0x500)](_0x54cb94,_0xf8ed80,_0xe11071,_0x1848f2);}_0x4c5d0e[_0x39c677(0x558)]=![];if(ImageManager[_0x39c677(0x568)])console[_0x39c677(0x566)](_0x39c677(0x417));return this[_0x39c677(0x428)]=this[_0x39c677(0x428)]||[],this['_cached_WeatherEffects_Firestorm'][_0x39c677(0x4ee)](_0x4c5d0e),_0x4c5d0e;},ImageManager[_0x32d3d9(0x37b)]=function(){const _0x224800=_0x32d3d9;if(this[_0x224800(0x252)]&&this[_0x224800(0x252)]['length']>=ImageManager[_0x224800(0x5b8)]){const _0xac5017=this['_cached_WeatherEffects_Fireflies'];return _0xac5017[Math['floor'](Math['random']()*_0xac5017['length'])];}const _0x29d768=ColorManager[_0x224800(0x462)]['clone'](),_0x3881ab=_0x29d768[Math[_0x224800(0x31e)](Math[_0x224800(0x509)]()*_0x29d768['length'])];let _0x4f517e=Math[_0x224800(0x4e6)](0x10)+0x10;if(_0x4f517e%0x2!==0x0)_0x4f517e+=0x1;const _0x4a2f6d=new Bitmap(_0x4f517e,_0x4f517e),_0x382333=Math[_0x224800(0x31e)](_0x4f517e/0x2);_0x4a2f6d[_0x224800(0x243)](_0x382333,_0x382333,_0x382333,0x168,_0x3881ab,0x0,0x1,0x0),_0x4a2f6d['fillRect'](_0x382333-0x1,_0x382333-0x1,0x2,0x2,_0x3881ab),_0x4a2f6d[_0x224800(0x558)]=![];if(ImageManager[_0x224800(0x568)])console[_0x224800(0x566)]('fireflies');return this['_cached_WeatherEffects_Fireflies']=this[_0x224800(0x252)]||[],this['_cached_WeatherEffects_Fireflies'][_0x224800(0x4ee)](_0x4a2f6d),_0x4a2f6d;},ImageManager[_0x32d3d9(0x233)]=function(){const _0x3c51ad=_0x32d3d9;if(this['_cached_WeatherEffects_Thunderbolt']&&this[_0x3c51ad(0x393)]['length']>=ImageManager[_0x3c51ad(0x5b8)]*0x3){const _0x2d986b=this[_0x3c51ad(0x393)];return _0x2d986b[Math[_0x3c51ad(0x31e)](Math['random']()*_0x2d986b[_0x3c51ad(0x5c6)])];}const _0x23fddf=Math[_0x3c51ad(0x277)]($dataSystem[_0x3c51ad(0x30e)][_0x3c51ad(0x5b5)],$dataSystem[_0x3c51ad(0x30e)]['screenHeight'])||0x1,_0x25cc00=new Bitmap(_0x23fddf,_0x23fddf);_0x25cc00['drawLightning'](),_0x25cc00[_0x3c51ad(0x558)]=![];if(ImageManager[_0x3c51ad(0x568)])console[_0x3c51ad(0x566)]('thunderbolt');return this['_cached_WeatherEffects_Thunderbolt']=this['_cached_WeatherEffects_Thunderbolt']||[],this[_0x3c51ad(0x393)][_0x3c51ad(0x4ee)](_0x25cc00),_0x25cc00;},ImageManager['weatherEffectsSootfall']=function(){const _0x91aa90=_0x32d3d9;if(this['_cached_WeatherEffects_Sootfall']&&this[_0x91aa90(0x422)][_0x91aa90(0x5c6)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x447f7a=this['_cached_WeatherEffects_Sootfall'];return _0x447f7a[Math[_0x91aa90(0x31e)](Math[_0x91aa90(0x509)]()*_0x447f7a[_0x91aa90(0x5c6)])];}const _0xd18bcd=ColorManager[_0x91aa90(0x279)]['clone'](),_0x4994c9=new Bitmap(0x1f4,0x1f4),_0x5e9034=_0x4994c9[_0x91aa90(0x3b2)],_0x311a7c=_0x4994c9['height'],_0x29aed7=0x5;let _0x286b2b=0x8;while(_0x286b2b--){const _0x24f10e=Math[_0x91aa90(0x4e6)](_0x5e9034-_0x29aed7*0x2)+_0x29aed7,_0x394038=Math[_0x91aa90(0x4e6)](_0x311a7c-_0x29aed7*0x2)+_0x29aed7,_0x22f503=Math[_0x91aa90(0x4e6)](_0x29aed7)+0x1,_0x3d3868=_0xd18bcd[Math[_0x91aa90(0x31e)](Math[_0x91aa90(0x509)]()*_0xd18bcd[_0x91aa90(0x5c6)])];_0x4994c9['paintOpacity']=Math[_0x91aa90(0x4e6)](0x40)+0xc0,_0x4994c9[_0x91aa90(0x3d8)](_0x24f10e,_0x394038,_0x22f503,_0x3d3868);}_0x4994c9[_0x91aa90(0x558)]=![];if(ImageManager[_0x91aa90(0x568)])console[_0x91aa90(0x566)](_0x91aa90(0x27d));return this['_cached_WeatherEffects_Sootfall']=this['_cached_WeatherEffects_Sootfall']||[],this[_0x91aa90(0x422)][_0x91aa90(0x4ee)](_0x4994c9),_0x4994c9;},ImageManager[_0x32d3d9(0x4fb)]=function(){const _0x8d6155=_0x32d3d9;if(this[_0x8d6155(0x584)]&&this[_0x8d6155(0x584)][_0x8d6155(0x5c6)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x293f5d=this['_cached_WeatherEffects_Ashfall'];return _0x293f5d[Math['floor'](Math[_0x8d6155(0x509)]()*_0x293f5d[_0x8d6155(0x5c6)])];}const _0x484ecf=new Bitmap(0x18,0x18),_0x46ff1c=_0x484ecf['width'],_0x7e7645=_0x484ecf[_0x8d6155(0x58a)],_0x3511f9=_0x46ff1c/0x2-0x2,_0x3b2bf5=_0x7e7645/0x2-0x2,_0x58aa98=[];_0x58aa98[_0x8d6155(0x4ee)](Math[_0x8d6155(0x4e6)](_0x3511f9)+0x2,Math['randomInt'](_0x3b2bf5)+0x2),_0x58aa98['push'](_0x46ff1c-Math[_0x8d6155(0x4e6)](_0x3511f9)-0x2,Math['randomInt'](_0x3b2bf5)+0x2),_0x58aa98[_0x8d6155(0x4ee)](_0x46ff1c-Math[_0x8d6155(0x4e6)](_0x3511f9)-0x2,_0x7e7645-Math[_0x8d6155(0x4e6)](_0x3b2bf5)-0x2),_0x58aa98[_0x8d6155(0x4ee)](Math[_0x8d6155(0x4e6)](_0x3511f9)+0x2,_0x7e7645-Math['randomInt'](_0x3b2bf5)-0x2);const _0x5c1fa8=ColorManager[_0x8d6155(0x279)][_0x8d6155(0x33a)](),_0x8addaf=_0x5c1fa8[Math[_0x8d6155(0x31e)](Math[_0x8d6155(0x509)]()*_0x5c1fa8['length'])];_0x484ecf[_0x8d6155(0x5ae)](_0x58aa98,_0x8addaf,_0x8d6155(0x322),0x2,0xff,![]),_0x484ecf['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x8d6155(0x566)](_0x8d6155(0x4df));return this[_0x8d6155(0x584)]=this[_0x8d6155(0x584)]||[],this[_0x8d6155(0x584)]['push'](_0x484ecf),_0x484ecf;},ImageManager[_0x32d3d9(0x4ac)]=function(){const _0x5bec14=_0x32d3d9;if(this[_0x5bec14(0x5a1)]&&this['_cached_WeatherEffects_FlameWall']['length']>=ImageManager[_0x5bec14(0x5b8)]){const _0x3717e3=this[_0x5bec14(0x5a1)];return _0x3717e3[Math[_0x5bec14(0x31e)](Math['random']()*_0x3717e3[_0x5bec14(0x5c6)])];}const _0x51d303=new Bitmap(0x258,0xc8),_0x65a519=_0x51d303[_0x5bec14(0x3b2)],_0x33283b=_0x51d303[_0x5bec14(0x58a)],_0xd1092f=0x40;let _0x3ad2ec=0x40;while(_0x3ad2ec--){const _0x4f06fa=Math['randomInt'](_0x65a519-_0xd1092f*0x2)+_0xd1092f,_0xb5dc63=Math['randomInt'](_0x33283b-_0xd1092f*0x2)+_0xd1092f,_0x2f2ab8=Math['randomInt'](_0xd1092f/0x2)+0x2,_0x1ae735=ColorManager['arrayToHex']([0xff,Math[_0x5bec14(0x4e6)](0x46),0x0]);_0x51d303[_0x5bec14(0x520)]=Math[_0x5bec14(0x4e6)](0x40),_0x51d303[_0x5bec14(0x3d8)](_0x4f06fa,_0xb5dc63,_0x2f2ab8,_0x1ae735),_0x51d303['paintOpacity']=Math['randomInt'](0x40)+0x40,_0x51d303[_0x5bec14(0x3d8)](_0x4f06fa,_0xb5dc63,_0x2f2ab8/0x2,_0x1ae735),_0x51d303[_0x5bec14(0x520)]=Math[_0x5bec14(0x4e6)](0x40)+0xc0;const _0x3b4184=ColorManager[_0x5bec14(0x519)]([0xff,Math[_0x5bec14(0x4e6)](0x46)+0xb9,0x0]);_0x51d303['drawCircle'](_0x4f06fa,_0xb5dc63,_0x2f2ab8/0x4,_0x3b4184),_0x51d303['drawCircle'](_0x4f06fa,_0xb5dc63,_0x2f2ab8/0x8,_0x5bec14(0x53e)),_0x51d303[_0x5bec14(0x3d8)](_0x4f06fa,_0xb5dc63,_0x2f2ab8/0xa,_0x5bec14(0x21e));}_0x51d303[_0x5bec14(0x558)]=![];if(ImageManager[_0x5bec14(0x568)])console['log'](_0x5bec14(0x441));return this[_0x5bec14(0x5a1)]=this[_0x5bec14(0x5a1)]||[],this[_0x5bec14(0x5a1)][_0x5bec14(0x4ee)](_0x51d303),_0x51d303;},ImageManager[_0x32d3d9(0x5d9)]=function(){const _0x58b8bd=_0x32d3d9;if(this['_cached_WeatherEffects_AutumnLeaves']&&ColorManager['WEATHER_AUTUMN_LEAVES_COLORS']['length']<=0x0){const _0x2e4d22=this['_cached_WeatherEffects_AutumnLeaves'];return _0x2e4d22[Math[_0x58b8bd(0x31e)](Math[_0x58b8bd(0x509)]()*_0x2e4d22['length'])];}const _0xbc6f1d=ColorManager[_0x58b8bd(0x4d6)]['pop']();let _0x5358a7=ColorManager[_0x58b8bd(0x319)](_0xbc6f1d);const _0x108cdf=[];while(_0x108cdf[_0x58b8bd(0x5c6)]<0x6){const _0x15f396=ColorManager[_0x58b8bd(0x519)](_0x5358a7);_0x108cdf[_0x58b8bd(0x4ee)](_0x15f396),_0x5358a7=_0x5358a7['map'](_0x24b02b=>Math[_0x58b8bd(0x346)](_0x24b02b*0.85)[_0x58b8bd(0x1f8)](0x0,0xff));}_0x108cdf[_0x58b8bd(0x56d)](),_0x108cdf[_0x58b8bd(0x4ee)](_0x108cdf['shift']()),_0x108cdf[_0x58b8bd(0x4ee)](_0x108cdf['shift']());const _0x4495e5=new Bitmap(0x64,0x60);_0x4495e5[_0x58b8bd(0x404)](_0x108cdf),_0x4495e5[_0x58b8bd(0x558)]=![];if(ImageManager[_0x58b8bd(0x568)])console['log']('autumnleaves');return this['_cached_WeatherEffects_AutumnLeaves']=this['_cached_WeatherEffects_AutumnLeaves']||[],this[_0x58b8bd(0x47f)][_0x58b8bd(0x4ee)](_0x4495e5),_0x4495e5;},ImageManager['weatherEffectsCherryBlossoms']=function(){const _0x394cf5=_0x32d3d9;if(this['_cached_WeatherEffects_CherryBlossoms']&&this['_cached_WeatherEffects_CherryBlossoms'][_0x394cf5(0x5c6)]>=ImageManager[_0x394cf5(0x5b8)]){const _0x2cb707=this[_0x394cf5(0x344)];return _0x2cb707[Math['floor'](Math['random']()*_0x2cb707[_0x394cf5(0x5c6)])];}const _0x2a56e5=ColorManager[_0x394cf5(0x506)],_0x84c513=ColorManager[_0x394cf5(0x51f)],_0x50c3b3=ColorManager[_0x394cf5(0x371)],_0x44ced3=_0x2a56e5[Math[_0x394cf5(0x31e)](Math['random']()*_0x2a56e5[_0x394cf5(0x5c6)])],_0x3f37ff=_0x84c513[Math[_0x394cf5(0x31e)](Math[_0x394cf5(0x509)]()*_0x84c513[_0x394cf5(0x5c6)])],_0x1d2585=_0x50c3b3[Math[_0x394cf5(0x31e)](Math[_0x394cf5(0x509)]()*_0x50c3b3[_0x394cf5(0x5c6)])],_0x345587=new Bitmap(0x34,0x23);_0x345587[_0x394cf5(0x29e)](_0x44ced3,_0x3f37ff,_0x1d2585),_0x345587['_customModified']=![];if(ImageManager[_0x394cf5(0x568)])console['log'](_0x394cf5(0x5a0));return this['_cached_WeatherEffects_CherryBlossoms']=this['_cached_WeatherEffects_CherryBlossoms']||[],this['_cached_WeatherEffects_CherryBlossoms'][_0x394cf5(0x4ee)](_0x345587),_0x345587;},ImageManager['weatherEffectsGreenLeaves']=function(){const _0x2c7206=_0x32d3d9;if(this['_cached_WeatherEffects_GreenLeaves']&&ColorManager[_0x2c7206(0x221)][_0x2c7206(0x5c6)]<=0x0){const _0xf39758=this[_0x2c7206(0x5d5)];return _0xf39758[Math[_0x2c7206(0x31e)](Math['random']()*_0xf39758[_0x2c7206(0x5c6)])];}const _0x4d8947=ColorManager[_0x2c7206(0x221)][_0x2c7206(0x349)]();let _0x5225ff=ColorManager['hexToArray'](_0x4d8947);const _0x337c99=[];while(_0x337c99[_0x2c7206(0x5c6)]<0x6){const _0x341a72=ColorManager[_0x2c7206(0x519)](_0x5225ff);_0x337c99[_0x2c7206(0x4ee)](_0x341a72),_0x5225ff=_0x5225ff[_0x2c7206(0x55c)](_0x239b53=>Math[_0x2c7206(0x346)](_0x239b53*0.85)['clamp'](0x0,0xff));}_0x337c99[_0x2c7206(0x56d)](),_0x337c99['push'](_0x337c99[_0x2c7206(0x485)]()),_0x337c99['push'](_0x337c99[_0x2c7206(0x485)]());const _0x29cae3=new Bitmap(0x64,0x60);_0x29cae3[_0x2c7206(0x47d)](_0x337c99),_0x29cae3[_0x2c7206(0x558)]=![];if(ImageManager[_0x2c7206(0x568)])console[_0x2c7206(0x566)](_0x2c7206(0x5b6));return this[_0x2c7206(0x5d5)]=this[_0x2c7206(0x5d5)]||[],this['_cached_WeatherEffects_GreenLeaves'][_0x2c7206(0x4ee)](_0x29cae3),_0x29cae3;},ImageManager[_0x32d3d9(0x407)]=function(){const _0x105cfc=_0x32d3d9;if(this[_0x105cfc(0x28f)]&&this['_cached_WeatherEffects_DandelionSeeds'][_0x105cfc(0x5c6)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x29e40f=this[_0x105cfc(0x28f)];return _0x29e40f[Math[_0x105cfc(0x31e)](Math['random']()*_0x29e40f[_0x105cfc(0x5c6)])];}const _0xdb8bfa=ColorManager[_0x105cfc(0x4d7)],_0x23279f=ColorManager[_0x105cfc(0x28c)],_0x242b60=ColorManager['WEATHER_DANDELION3_COLORS'],_0x30c9ca=_0xdb8bfa[Math[_0x105cfc(0x31e)](Math[_0x105cfc(0x509)]()*_0xdb8bfa[_0x105cfc(0x5c6)])],_0x57e3ff=_0x23279f[Math[_0x105cfc(0x31e)](Math['random']()*_0x23279f['length'])],_0xc22ec3=_0x242b60[Math[_0x105cfc(0x31e)](Math[_0x105cfc(0x509)]()*_0x242b60[_0x105cfc(0x5c6)])],_0x595258=new Bitmap(0x40,0x64);_0x595258['drawDandelionSeed'](_0x30c9ca,_0x57e3ff,_0xc22ec3),_0x595258[_0x105cfc(0x558)]=![];if(ImageManager[_0x105cfc(0x568)])console[_0x105cfc(0x566)](_0x105cfc(0x4cf));return this[_0x105cfc(0x28f)]=this[_0x105cfc(0x28f)]||[],this['_cached_WeatherEffects_DandelionSeeds'][_0x105cfc(0x4ee)](_0x595258),_0x595258;},ImageManager['weatherEffectsWhiteClouds']=function(){const _0x139b61=_0x32d3d9;if(this[_0x139b61(0x29b)]&&this[_0x139b61(0x29b)][_0x139b61(0x5c6)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x2a1bd4=this['_cached_WeatherEffects_WhiteClouds'];return _0x2a1bd4[Math['floor'](Math[_0x139b61(0x509)]()*_0x2a1bd4['length'])];}const _0x320652=ColorManager['WEATHER_CLOUD_DARK_COLORS'],_0x3c7652=ColorManager[_0x139b61(0x3e0)],_0x290374=ColorManager[_0x139b61(0x339)],_0x3b2bc1=_0x320652[Math[_0x139b61(0x31e)](Math[_0x139b61(0x509)]()*_0x320652[_0x139b61(0x5c6)])],_0x47f9c8=_0x3c7652[Math[_0x139b61(0x31e)](Math[_0x139b61(0x509)]()*_0x3c7652[_0x139b61(0x5c6)])],_0x5a4f17=_0x290374[Math['floor'](Math[_0x139b61(0x509)]()*_0x290374[_0x139b61(0x5c6)])],_0x1d7e4e=new Bitmap(0x1f4,0x1f4);_0x1d7e4e['drawCloud'](0xfa,0x15e,0x4b,_0x3b2bc1,0x10,0x14),_0x1d7e4e[_0x139b61(0x5d0)](0xfa,0xfa,0x64,_0x5a4f17,0x40,0x19),_0x1d7e4e[_0x139b61(0x5d0)](0xfa,0xfa,0x3c,_0x47f9c8,0x10,0x14),_0x1d7e4e['_customModified']=![];if(ImageManager[_0x139b61(0x568)])console[_0x139b61(0x566)](_0x139b61(0x241));return this[_0x139b61(0x29b)]=this[_0x139b61(0x29b)]||[],this[_0x139b61(0x29b)][_0x139b61(0x4ee)](_0x1d7e4e),_0x1d7e4e;},ImageManager[_0x32d3d9(0x303)]=function(){const _0x5b2c5f=_0x32d3d9;if(this[_0x5b2c5f(0x286)]&&this[_0x5b2c5f(0x286)][_0x5b2c5f(0x5c6)]>=ImageManager[_0x5b2c5f(0x5b8)]){const _0x864fde=this['_cached_WeatherEffects_SmokeFog'];return _0x864fde[Math[_0x5b2c5f(0x31e)](Math[_0x5b2c5f(0x509)]()*_0x864fde[_0x5b2c5f(0x5c6)])];}const _0x414386=ColorManager['WEATHER_ASH_COLORS'],_0x41003c=_0x414386[0x3],_0x5c2016=_0x414386[0x2],_0x2bb0c0=_0x414386[0x1],_0x74dc7a=new Bitmap(0x3e8,0x3e8);_0x74dc7a[_0x5b2c5f(0x5d0)](0x1f4,0x28a,0xaf,_0x41003c,0x10,0x14),_0x74dc7a['drawCloud'](0x1f4,0x1f4,0xc8,_0x2bb0c0,0x40,0x19),_0x74dc7a[_0x5b2c5f(0x5d0)](0x1f4,0x15e,0xa0,_0x5c2016,0x10,0x14),_0x74dc7a[_0x5b2c5f(0x558)]=![];if(ImageManager[_0x5b2c5f(0x568)])console[_0x5b2c5f(0x566)](_0x5b2c5f(0x241));return this[_0x5b2c5f(0x286)]=this[_0x5b2c5f(0x286)]||[],this[_0x5b2c5f(0x286)][_0x5b2c5f(0x4ee)](_0x74dc7a),_0x74dc7a;},ImageManager[_0x32d3d9(0x544)]=function(){const _0x1e0132=_0x32d3d9;if(this['_cached_WeatherEffects_PollutionClouds']&&this[_0x1e0132(0x28a)][_0x1e0132(0x5c6)]>=ImageManager[_0x1e0132(0x5b8)]){const _0x5ca282=this[_0x1e0132(0x28a)];return _0x5ca282[Math[_0x1e0132(0x31e)](Math[_0x1e0132(0x509)]()*_0x5ca282['length'])];}const _0x517861=ColorManager['WEATHER_EARTH_COLORS'],_0x4c467a=0.75;let _0x97cfdb=ColorManager[_0x1e0132(0x23b)](_0x517861[Math[_0x1e0132(0x31e)](Math['random']()*_0x517861[_0x1e0132(0x5c6)])],_0x4c467a),_0x374109=ColorManager['adjustHexColor'](_0x517861[Math[_0x1e0132(0x31e)](Math['random']()*_0x517861[_0x1e0132(0x5c6)])],_0x4c467a),_0x40880c=ColorManager[_0x1e0132(0x23b)](_0x517861[Math[_0x1e0132(0x31e)](Math[_0x1e0132(0x509)]()*_0x517861['length'])],_0x4c467a);const _0x139257=new Bitmap(0x1f4,0x1f4);_0x139257['drawCloud'](0xfa,0x15e,0x4b,_0x97cfdb,0x10,0x14),_0x139257[_0x1e0132(0x5d0)](0xfa,0xfa,0x64,_0x40880c,0x40,0x19),_0x139257[_0x1e0132(0x5d0)](0xfa,0xfa,0x3c,_0x374109,0x10,0x14),_0x139257['_customModified']=![];if(ImageManager[_0x1e0132(0x568)])console[_0x1e0132(0x566)](_0x1e0132(0x409));return this[_0x1e0132(0x28a)]=this[_0x1e0132(0x28a)]||[],this[_0x1e0132(0x28a)][_0x1e0132(0x4ee)](_0x139257),_0x139257;},ImageManager['weatherEffectsHeatClouds']=function(){const _0x13660b=_0x32d3d9;if(this[_0x13660b(0x259)]&&this[_0x13660b(0x259)][_0x13660b(0x5c6)]>=ImageManager[_0x13660b(0x5b8)]){const _0xd61ad2=this['_cached_WeatherEffects_HeatClouds'];return _0xd61ad2[Math[_0x13660b(0x31e)](Math[_0x13660b(0x509)]()*_0xd61ad2['length'])];}const _0x5e047f=ColorManager[_0x13660b(0x5d7)],_0x47591c=0.85;let _0x567408=ColorManager[_0x13660b(0x23b)](_0x5e047f[Math[_0x13660b(0x31e)](Math[_0x13660b(0x509)]()*_0x5e047f['length'])],_0x47591c),_0x4d5d1f=ColorManager['adjustHexColor'](_0x5e047f[Math[_0x13660b(0x31e)](Math[_0x13660b(0x509)]()*_0x5e047f['length'])],_0x47591c),_0x32e729=ColorManager[_0x13660b(0x23b)](_0x5e047f[Math['floor'](Math['random']()*_0x5e047f[_0x13660b(0x5c6)])],_0x47591c);const _0x15f742=new Bitmap(0x1f4,0x1f4);_0x15f742['drawCloud'](0xfa,0x15e,0x4b,_0x567408,0x10,0x14),_0x15f742['drawCloud'](0xfa,0xfa,0x64,_0x32e729,0x40,0x19),_0x15f742[_0x13660b(0x5d0)](0xfa,0xfa,0x3c,_0x4d5d1f,0x10,0x14),_0x15f742[_0x13660b(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x13660b(0x566)]('heatclouds');return this[_0x13660b(0x259)]=this[_0x13660b(0x259)]||[],this['_cached_WeatherEffects_HeatClouds']['push'](_0x15f742),_0x15f742;},ImageManager[_0x32d3d9(0x4d3)]=function(){const _0xf5e32d=_0x32d3d9;if(this['_cached_WeatherEffects_SnowClouds']&&this['_cached_WeatherEffects_SnowClouds']['length']>=ImageManager[_0xf5e32d(0x5b8)]){const _0x3b19ac=this[_0xf5e32d(0x538)];return _0x3b19ac[Math['floor'](Math['random']()*_0x3b19ac[_0xf5e32d(0x5c6)])];}const _0x175f49=ColorManager['WEATHER_FROST_COLORS'],_0x140319=1.2;let _0x1a9883=ColorManager[_0xf5e32d(0x23b)](_0x175f49[Math[_0xf5e32d(0x31e)](Math['random']()*_0x175f49[_0xf5e32d(0x5c6)])],_0x140319),_0x3e7588=ColorManager['adjustHexColor'](_0x175f49[Math[_0xf5e32d(0x31e)](Math[_0xf5e32d(0x509)]()*_0x175f49[_0xf5e32d(0x5c6)])],_0x140319),_0x19c205=ColorManager[_0xf5e32d(0x23b)](_0x175f49[Math[_0xf5e32d(0x31e)](Math[_0xf5e32d(0x509)]()*_0x175f49[_0xf5e32d(0x5c6)])],_0x140319);const _0x1fcdbe=new Bitmap(0x1f4,0x1f4);_0x1fcdbe[_0xf5e32d(0x5d0)](0xfa,0x15e,0x4b,_0x1a9883,0x10,0x14),_0x1fcdbe[_0xf5e32d(0x5d0)](0xfa,0xfa,0x64,_0x19c205,0x40,0x19),_0x1fcdbe[_0xf5e32d(0x5d0)](0xfa,0xfa,0x3c,_0x3e7588,0x10,0x14),_0x1fcdbe[_0xf5e32d(0x558)]=![];if(ImageManager[_0xf5e32d(0x568)])console['log']('snowclouds');return this[_0xf5e32d(0x538)]=this['_cached_WeatherEffects_SnowClouds']||[],this[_0xf5e32d(0x538)][_0xf5e32d(0x4ee)](_0x1fcdbe),_0x1fcdbe;},ImageManager[_0x32d3d9(0x4ec)]=function(){const _0x4528cc=_0x32d3d9;if(this['_cached_WeatherEffects_IceFog']&&this['_cached_WeatherEffects_IceFog']['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x2b2486=this['_cached_WeatherEffects_IceFog'];return _0x2b2486[Math[_0x4528cc(0x31e)](Math[_0x4528cc(0x509)]()*_0x2b2486[_0x4528cc(0x5c6)])];}const _0x3035cc=ColorManager[_0x4528cc(0x2f8)],_0xa8d43b=1.3;let _0x362142=ColorManager['adjustHexColor'](_0x3035cc[Math['floor'](Math[_0x4528cc(0x509)]()*_0x3035cc['length'])],_0xa8d43b),_0x495cc3=ColorManager[_0x4528cc(0x23b)](_0x3035cc[Math[_0x4528cc(0x31e)](Math[_0x4528cc(0x509)]()*_0x3035cc[_0x4528cc(0x5c6)])],_0xa8d43b),_0x1c9727=ColorManager[_0x4528cc(0x23b)](_0x3035cc[Math[_0x4528cc(0x31e)](Math['random']()*_0x3035cc[_0x4528cc(0x5c6)])],_0xa8d43b);const _0x9696f0=new Bitmap(0x3e8,0x3e8);_0x9696f0[_0x4528cc(0x5d0)](0x1f4,0x28a,0xaf,_0x362142,0x10,0x14),_0x9696f0[_0x4528cc(0x5d0)](0x1f4,0x1f4,0xc8,_0x1c9727,0x40,0x19),_0x9696f0[_0x4528cc(0x5d0)](0x1f4,0x15e,0xa0,_0x495cc3,0x10,0x14),_0x9696f0[_0x4528cc(0x558)]=![];if(ImageManager[_0x4528cc(0x568)])console[_0x4528cc(0x566)](_0x4528cc(0x426));return this['_cached_WeatherEffects_IceFog']=this[_0x4528cc(0x352)]||[],this[_0x4528cc(0x352)]['push'](_0x9696f0),_0x9696f0;},ImageManager['weatherEffectsPurpleHaze']=function(){const _0x334345=_0x32d3d9;if(this[_0x334345(0x4c2)]&&this[_0x334345(0x4c2)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x3eb537=this[_0x334345(0x4c2)];return _0x3eb537[Math[_0x334345(0x31e)](Math[_0x334345(0x509)]()*_0x3eb537[_0x334345(0x5c6)])];}let _0x5eedbd=ColorManager[_0x334345(0x519)]([Math['randomInt'](0x80)+0x80,0x18,Math[_0x334345(0x4e6)](0x80)+0x80]),_0x1880b7=ColorManager[_0x334345(0x519)]([Math[_0x334345(0x4e6)](0x80)+0x80,0x30,Math[_0x334345(0x4e6)](0x80)+0x80]),_0x33d402=ColorManager[_0x334345(0x519)]([Math['randomInt'](0x80)+0x80,0x60,Math[_0x334345(0x4e6)](0x80)+0x80]);const _0x13eff6=new Bitmap(0x3e8,0x3e8);_0x13eff6[_0x334345(0x5d0)](0x1f4,0x28a,0xaf,_0x5eedbd,0x10,0x14),_0x13eff6['drawCloud'](0x1f4,0x1f4,0xc8,_0x33d402,0x40,0x19),_0x13eff6['drawCloud'](0x1f4,0x15e,0xa0,_0x1880b7,0x10,0x14),_0x13eff6[_0x334345(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x334345(0x566)](_0x334345(0x2cf));return this[_0x334345(0x4c2)]=this[_0x334345(0x4c2)]||[],this['_cached_WeatherEffects_PurpleHaze'][_0x334345(0x4ee)](_0x13eff6),_0x13eff6;},ImageManager['weatherEffectsThunderclouds']=function(){const _0x490edc=_0x32d3d9;if(this[_0x490edc(0x237)]&&this[_0x490edc(0x237)][_0x490edc(0x5c6)]>=ImageManager[_0x490edc(0x5b8)]){const _0x3936b7=this[_0x490edc(0x237)];return _0x3936b7[Math['floor'](Math[_0x490edc(0x509)]()*_0x3936b7[_0x490edc(0x5c6)])];}let _0x3061b6=ColorManager['arrayToHex']([Math[_0x490edc(0x4e6)](0x20)+0x10,0x18,Math[_0x490edc(0x4e6)](0x20)+0x10]),_0x1fef08=ColorManager[_0x490edc(0x519)]([Math['randomInt'](0x30)+0x20,0x30,Math[_0x490edc(0x4e6)](0x30)+0x20]),_0x44f3f4=ColorManager['arrayToHex']([Math[_0x490edc(0x4e6)](0x40)+0x30,0x60,Math[_0x490edc(0x4e6)](0x40)+0x30]);const _0x5fdf66=new Bitmap(0x3e8,0x3e8);_0x5fdf66[_0x490edc(0x5d0)](0x1f4,0x28a,0xaf,_0x3061b6,0x10,0x14),_0x5fdf66[_0x490edc(0x5d0)](0x1f4,0x1f4,0xc8,_0x44f3f4,0x40,0x19),_0x5fdf66[_0x490edc(0x5d0)](0x1f4,0x15e,0xa0,_0x1fef08,0x10,0x14),_0x5fdf66[_0x490edc(0x558)]=![];if(ImageManager[_0x490edc(0x568)])console[_0x490edc(0x566)](_0x490edc(0x511));return this[_0x490edc(0x237)]=this[_0x490edc(0x237)]||[],this[_0x490edc(0x237)][_0x490edc(0x4ee)](_0x5fdf66),_0x5fdf66;},ImageManager[_0x32d3d9(0x54e)]=function(){const _0x23d61d=_0x32d3d9;if(this['_cached_WeatherEffects_RainClouds']&&this[_0x23d61d(0x458)][_0x23d61d(0x5c6)]>=ImageManager[_0x23d61d(0x5b8)]){const _0xe24ee8=this[_0x23d61d(0x458)];return _0xe24ee8[Math[_0x23d61d(0x31e)](Math[_0x23d61d(0x509)]()*_0xe24ee8[_0x23d61d(0x5c6)])];}const _0x37111f=Math[_0x23d61d(0x4e6)](0x20)+0x40,_0x373ae1=Math[_0x23d61d(0x4e6)](0x20)+0x60,_0x5c5436=Math[_0x23d61d(0x4e6)](0x20)+0x80;let _0x2d0118=ColorManager[_0x23d61d(0x519)]([_0x37111f,_0x37111f,_0x37111f]),_0xbbd485=ColorManager[_0x23d61d(0x519)]([_0x373ae1,_0x373ae1,_0x373ae1]),_0x294d26=ColorManager[_0x23d61d(0x519)]([_0x5c5436,_0x5c5436,_0x5c5436]);const _0x4f0c59=new Bitmap(0x1f4,0x1f4);_0x4f0c59['drawCloud'](0xfa,0x15e,0x4b,_0x2d0118,0x10,0x14),_0x4f0c59[_0x23d61d(0x5d0)](0xfa,0xfa,0x64,_0x294d26,0x40,0x19),_0x4f0c59[_0x23d61d(0x5d0)](0xfa,0xfa,0x3c,_0xbbd485,0x10,0x14),_0x4f0c59['_customModified']=![];if(ImageManager[_0x23d61d(0x568)])console['log'](_0x23d61d(0x561));return this[_0x23d61d(0x458)]=this['_cached_WeatherEffects_RainClouds']||[],this[_0x23d61d(0x458)][_0x23d61d(0x4ee)](_0x4f0c59),_0x4f0c59;},ImageManager[_0x32d3d9(0x3d3)]=function(){const _0x3d68cb=_0x32d3d9;if(this[_0x3d68cb(0x5e3)]&&this['_cached_WeatherEffects_Mist']['length']>=ImageManager[_0x3d68cb(0x5b8)]){const _0x39970f=this['_cached_WeatherEffects_Mist'];return _0x39970f[Math[_0x3d68cb(0x31e)](Math[_0x3d68cb(0x509)]()*_0x39970f[_0x3d68cb(0x5c6)])];}const _0x4da1af=ColorManager[_0x3d68cb(0x211)],_0x4b642d=ColorManager[_0x3d68cb(0x3e0)],_0x32a887=ColorManager[_0x3d68cb(0x339)],_0x2bf6a5=_0x4da1af[Math[_0x3d68cb(0x31e)](Math[_0x3d68cb(0x509)]()*_0x4da1af['length'])],_0x37a305=_0x4b642d[Math['floor'](Math['random']()*_0x4b642d[_0x3d68cb(0x5c6)])],_0x4bf2ca=_0x32a887[Math[_0x3d68cb(0x31e)](Math[_0x3d68cb(0x509)]()*_0x32a887[_0x3d68cb(0x5c6)])],_0x369163=new Bitmap(0x3e8,0x3e8);_0x369163[_0x3d68cb(0x5d0)](0x1f4,0x28a,0xaf,_0x2bf6a5,0x10,0x14),_0x369163[_0x3d68cb(0x5d0)](0x1f4,0x1f4,0xc8,_0x4bf2ca,0x40,0x19),_0x369163[_0x3d68cb(0x5d0)](0x1f4,0x15e,0xa0,_0x37a305,0x10,0x14),_0x369163[_0x3d68cb(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x3d68cb(0x566)](_0x3d68cb(0x241));return this['_cached_WeatherEffects_Mist']=this[_0x3d68cb(0x5e3)]||[],this[_0x3d68cb(0x5e3)]['push'](_0x369163),_0x369163;},ImageManager[_0x32d3d9(0x245)]=function(){const _0x570419=_0x32d3d9;if(this[_0x570419(0x2b3)]&&this[_0x570419(0x2b3)]['length']>=ImageManager[_0x570419(0x5b8)]){const _0x559489=this[_0x570419(0x2b3)];return _0x559489[Math['floor'](Math['random']()*_0x559489[_0x570419(0x5c6)])];}const _0x43fe11=ColorManager[_0x570419(0x578)][_0x570419(0x33a)](),_0x5994df=_0x43fe11[Math[_0x570419(0x31e)](Math[_0x570419(0x509)]()*_0x43fe11[_0x570419(0x5c6)])],_0xc4e6f=_0x43fe11[Math['floor'](Math['random']()*_0x43fe11[_0x570419(0x5c6)])],_0x26ff6d=_0x43fe11[Math[_0x570419(0x31e)](Math[_0x570419(0x509)]()*_0x43fe11['length'])],_0x5ee496=new Bitmap(0x1f4,0x1f4);_0x5ee496[_0x570419(0x5d0)](0xfa,0x15e,0x4b,_0x5994df,0x6,0x14),_0x5ee496[_0x570419(0x5d0)](0xfa,0xfa,0x64,_0x26ff6d,0xc,0x19),_0x5ee496['drawCloud'](0xfa,0xfa,0x3c,_0xc4e6f,0x6,0x14);const _0x39e075=_0x5ee496[_0x570419(0x3b2)],_0x2db278=_0x5ee496['height'],_0x343580=0x2;let _0x120740=0x80;while(_0x120740--){const _0x3bf54d=Math[_0x570419(0x4e6)](_0x39e075-_0x343580*0x2)+_0x343580,_0x385f99=Math[_0x570419(0x4e6)](_0x2db278-_0x343580*0x2)+_0x343580,_0x2180c8=_0x43fe11[Math[_0x570419(0x31e)](Math['random']()*_0x43fe11['length'])],_0x4baf74=Math['randomInt'](_0x343580)+0x1;_0x5ee496['paintOpacity']=Math[_0x570419(0x4e6)](0x40)+0xc0,_0x5ee496['drawCircle'](_0x3bf54d,_0x385f99,_0x4baf74,_0x2180c8);}_0x5ee496[_0x570419(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x570419(0x4a3));return this[_0x570419(0x2b3)]=this[_0x570419(0x2b3)]||[],this['_cached_WeatherEffects_DustStorm'][_0x570419(0x4ee)](_0x5ee496),_0x5ee496;},ImageManager['weatherEffectsDustClouds']=function(){const _0x1cd664=_0x32d3d9;if(this[_0x1cd664(0x355)]&&this[_0x1cd664(0x355)][_0x1cd664(0x5c6)]>=ImageManager[_0x1cd664(0x5b8)]){const _0x3e8998=this['_cached_WeatherEffects_DustClouds'];return _0x3e8998[Math['floor'](Math[_0x1cd664(0x509)]()*_0x3e8998[_0x1cd664(0x5c6)])];}const _0x28b0bf=ColorManager[_0x1cd664(0x578)][_0x1cd664(0x33a)](),_0x1f8144=1.5,_0xce8f07=ColorManager['adjustHexColor'](_0x28b0bf[Math[_0x1cd664(0x31e)](Math['random']()*_0x28b0bf[_0x1cd664(0x5c6)])],_0x1f8144),_0x17837d=ColorManager[_0x1cd664(0x23b)](_0x28b0bf[Math[_0x1cd664(0x31e)](Math['random']()*_0x28b0bf['length'])],_0x1f8144),_0x121df0=ColorManager[_0x1cd664(0x23b)](_0x28b0bf[Math[_0x1cd664(0x31e)](Math['random']()*_0x28b0bf[_0x1cd664(0x5c6)])],_0x1f8144),_0x50e4c2=new Bitmap(0x3e8,0x3e8);_0x50e4c2[_0x1cd664(0x5d0)](0x1f4,0x28a,0xaf,_0xce8f07,0x10,0x14),_0x50e4c2['drawCloud'](0x1f4,0x1f4,0xc8,_0x121df0,0x40,0x19),_0x50e4c2[_0x1cd664(0x5d0)](0x1f4,0x15e,0xa0,_0x17837d,0x10,0x14),_0x50e4c2[_0x1cd664(0x558)]=![];if(ImageManager[_0x1cd664(0x568)])console[_0x1cd664(0x566)](_0x1cd664(0x228));return this[_0x1cd664(0x355)]=this[_0x1cd664(0x355)]||[],this[_0x1cd664(0x355)][_0x1cd664(0x4ee)](_0x50e4c2),_0x50e4c2;},ImageManager[_0x32d3d9(0x1f5)]=function(){const _0x30451c=_0x32d3d9;if(this[_0x30451c(0x28b)]&&this[_0x30451c(0x28b)][_0x30451c(0x5c6)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x13d7fa=this[_0x30451c(0x28b)];return _0x13d7fa[Math[_0x30451c(0x31e)](Math['random']()*_0x13d7fa[_0x30451c(0x5c6)])];}const _0x42c5dd=ColorManager[_0x30451c(0x578)][_0x30451c(0x33a)](),_0x33e090=1.8,_0x4d29d0=ColorManager[_0x30451c(0x23b)](_0x42c5dd[Math[_0x30451c(0x31e)](Math[_0x30451c(0x509)]()*_0x42c5dd[_0x30451c(0x5c6)])],_0x33e090),_0x346a7a=ColorManager[_0x30451c(0x23b)](_0x42c5dd[Math[_0x30451c(0x31e)](Math['random']()*_0x42c5dd[_0x30451c(0x5c6)])],_0x33e090),_0x1ee376=ColorManager[_0x30451c(0x23b)](_0x42c5dd[Math[_0x30451c(0x31e)](Math[_0x30451c(0x509)]()*_0x42c5dd[_0x30451c(0x5c6)])],_0x33e090),_0x5dfc84=new Bitmap(0x3e8,0x3e8);_0x5dfc84[_0x30451c(0x5d0)](0x1f4,0x28a,0xaf,_0x4d29d0,0x10,0x14),_0x5dfc84['drawCloud'](0x1f4,0x1f4,0xc8,_0x1ee376,0x40,0x19),_0x5dfc84['drawCloud'](0x1f4,0x15e,0xa0,_0x346a7a,0x10,0x14),_0x5dfc84[_0x30451c(0x558)]=![];if(ImageManager[_0x30451c(0x568)])console[_0x30451c(0x566)]('sandclouds');return this[_0x30451c(0x28b)]=this[_0x30451c(0x28b)]||[],this[_0x30451c(0x28b)][_0x30451c(0x4ee)](_0x5dfc84),_0x5dfc84;},ImageManager[_0x32d3d9(0x315)]=function(){const _0x4ae3a5=_0x32d3d9;if(this['_cached_WeatherEffects_Pollen']&&this[_0x4ae3a5(0x3c8)][_0x4ae3a5(0x5c6)]>=ImageManager[_0x4ae3a5(0x5b8)]){const _0x52763a=this[_0x4ae3a5(0x3c8)];return _0x52763a[Math[_0x4ae3a5(0x31e)](Math[_0x4ae3a5(0x509)]()*_0x52763a[_0x4ae3a5(0x5c6)])];}const _0x1e1053=ColorManager[_0x4ae3a5(0x2e7)]['clone'](),_0x4086d0=0.8,_0x190696=ColorManager['adjustHexColor'](_0x1e1053[Math[_0x4ae3a5(0x31e)](Math[_0x4ae3a5(0x509)]()*_0x1e1053[_0x4ae3a5(0x5c6)])],_0x4086d0),_0x36d07d=ColorManager['adjustHexColor'](_0x1e1053[Math[_0x4ae3a5(0x31e)](Math[_0x4ae3a5(0x509)]()*_0x1e1053[_0x4ae3a5(0x5c6)])],_0x4086d0),_0x1dca3d=ColorManager[_0x4ae3a5(0x23b)](_0x1e1053[Math[_0x4ae3a5(0x31e)](Math[_0x4ae3a5(0x509)]()*_0x1e1053['length'])],_0x4086d0),_0x18a0a8=new Bitmap(0x1f4,0x1f4);_0x18a0a8[_0x4ae3a5(0x5d0)](0xfa,0x15e,0x4b,_0x190696,0x4,0x14),_0x18a0a8[_0x4ae3a5(0x5d0)](0xfa,0xfa,0x64,_0x1dca3d,0x8,0x19),_0x18a0a8[_0x4ae3a5(0x5d0)](0xfa,0xfa,0x3c,_0x36d07d,0x4,0x14);const _0x41ed50=_0x18a0a8[_0x4ae3a5(0x3b2)],_0x2c460a=_0x18a0a8[_0x4ae3a5(0x58a)],_0x3315e0=0x2;let _0x8521a=0x20;while(_0x8521a--){const _0x1d9740=Math[_0x4ae3a5(0x4e6)](_0x41ed50-_0x3315e0*0x2)+_0x3315e0,_0x2bf70c=Math[_0x4ae3a5(0x4e6)](_0x2c460a-_0x3315e0*0x2)+_0x3315e0;let _0x48a242=_0x1e1053[Math[_0x4ae3a5(0x31e)](Math['random']()*_0x1e1053['length'])];_0x48a242=ColorManager[_0x4ae3a5(0x23b)](_0x48a242,_0x4086d0);const _0x49f0ca=Math[_0x4ae3a5(0x4e6)](_0x3315e0)+0x1;_0x18a0a8['paintOpacity']=Math[_0x4ae3a5(0x4e6)](0x40)+0xa0,_0x18a0a8['drawCircle'](_0x1d9740,_0x2bf70c,_0x49f0ca,_0x48a242);}_0x18a0a8[_0x4ae3a5(0x558)]=![];if(ImageManager[_0x4ae3a5(0x568)])console[_0x4ae3a5(0x566)](_0x4ae3a5(0x20a));return this[_0x4ae3a5(0x3c8)]=this[_0x4ae3a5(0x3c8)]||[],this[_0x4ae3a5(0x3c8)]['push'](_0x18a0a8),_0x18a0a8;},ImageManager['weatherEffectsToxicGas']=function(){const _0x3c520e=_0x32d3d9;if(this[_0x3c520e(0x3aa)]&&this[_0x3c520e(0x3aa)][_0x3c520e(0x5c6)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x25b083=this[_0x3c520e(0x3aa)];return _0x25b083[Math[_0x3c520e(0x31e)](Math[_0x3c520e(0x509)]()*_0x25b083['length'])];}const _0x2b3273=_0x3c520e(0x457),_0x258bd0=0.75,_0x1b60b5=ColorManager[_0x3c520e(0x23b)](_0x2b3273,_0x258bd0),_0x1ec29b=ColorManager[_0x3c520e(0x23b)](_0x1b60b5,_0x258bd0),_0xa97d79=ColorManager[_0x3c520e(0x23b)](_0x1ec29b,_0x258bd0),_0x5823f9=new Bitmap(0x3e8,0x3e8);_0x5823f9['drawCloud'](0x1f4,0x28a,0xaf,_0xa97d79,0x10,0x14),_0x5823f9[_0x3c520e(0x5d0)](0x1f4,0x1f4,0xc8,_0x1b60b5,0x40,0x19),_0x5823f9[_0x3c520e(0x5d0)](0x1f4,0x15e,0xa0,_0x1ec29b,0x10,0x14),_0x5823f9[_0x3c520e(0x558)]=![];if(ImageManager[_0x3c520e(0x568)])console[_0x3c520e(0x566)](_0x3c520e(0x33e));return this[_0x3c520e(0x3aa)]=this[_0x3c520e(0x3aa)]||[],this[_0x3c520e(0x3aa)][_0x3c520e(0x4ee)](_0x5823f9),_0x5823f9;},ImageManager[_0x32d3d9(0x3a7)]=function(){const _0x263023=_0x32d3d9;if(this['_cached_WeatherEffects_PastelBrume']&&ColorManager[_0x263023(0x1ee)]['length']<=0x0){const _0x1e55c9=this[_0x263023(0x20e)];return _0x1e55c9[Math[_0x263023(0x31e)](Math[_0x263023(0x509)]()*_0x1e55c9[_0x263023(0x5c6)])];}const _0x219e96=ColorManager['WEATHER_PASTEL_BRUME_COLORS']['pop'](),_0x4beed5=0.85,_0x638b19=ColorManager[_0x263023(0x23b)](_0x219e96,_0x4beed5),_0x3d9fa8=ColorManager['adjustHexColor'](_0x638b19,_0x4beed5),_0x334eb3=ColorManager[_0x263023(0x23b)](_0x3d9fa8,_0x4beed5),_0x7dcf44=new Bitmap(0x3e8,0x3e8);_0x7dcf44[_0x263023(0x5d0)](0x1f4,0x28a,0xaf,_0x334eb3,0x10,0x14),_0x7dcf44[_0x263023(0x5d0)](0x1f4,0x1f4,0xc8,_0x638b19,0x40,0x19),_0x7dcf44['drawCloud'](0x1f4,0x15e,0xa0,_0x3d9fa8,0x10,0x14),_0x7dcf44['_customModified']=![];if(ImageManager[_0x263023(0x568)])console[_0x263023(0x566)](_0x263023(0x455));return this[_0x263023(0x20e)]=this[_0x263023(0x20e)]||[],this[_0x263023(0x20e)][_0x263023(0x4ee)](_0x7dcf44),_0x7dcf44;},ImageManager['weatherEffectsRainbowClouds']=function(){const _0x5f3ba8=_0x32d3d9;if(this['_cached_WeatherEffects_RainbowClouds']&&ColorManager['WEATHER_RAINBOW_CLOUD_COLORS'][_0x5f3ba8(0x5c6)]<=0x0){const _0x5c9f61=this[_0x5f3ba8(0x288)];return _0x5c9f61[Math[_0x5f3ba8(0x31e)](Math['random']()*_0x5c9f61[_0x5f3ba8(0x5c6)])];}const _0x5e7af8=ColorManager['WEATHER_RAINBOW_CLOUD_COLORS'][_0x5f3ba8(0x349)](),_0x3a9b80=0.85,_0x878a9a=ColorManager[_0x5f3ba8(0x23b)](_0x5e7af8,_0x3a9b80),_0x5de584=ColorManager['adjustHexColor'](_0x878a9a,_0x3a9b80),_0x1e0e6c=ColorManager[_0x5f3ba8(0x23b)](_0x5de584,_0x3a9b80),_0x1605da=new Bitmap(0x1f4,0x1f4);_0x1605da[_0x5f3ba8(0x5d0)](0xfa,0x15e,0x4b,_0x1e0e6c,0x10,0x14),_0x1605da[_0x5f3ba8(0x5d0)](0xfa,0xfa,0x64,_0x878a9a,0x40,0x19),_0x1605da[_0x5f3ba8(0x5d0)](0xfa,0xfa,0x3c,_0x5de584,0x10,0x14),_0x1605da[_0x5f3ba8(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x5f3ba8(0x566)](_0x5f3ba8(0x592));return this[_0x5f3ba8(0x288)]=this[_0x5f3ba8(0x288)]||[],this['_cached_WeatherEffects_RainbowClouds']['push'](_0x1605da),_0x1605da;},ImageManager['weatherEffectsRainbowOrbs']=function(){const _0x5f0af8=_0x32d3d9;if(this[_0x5f0af8(0x59e)]&&ColorManager[_0x5f0af8(0x552)]['length']<=0x0){const _0x419463=this[_0x5f0af8(0x59e)];return _0x419463[Math[_0x5f0af8(0x31e)](Math[_0x5f0af8(0x509)]()*_0x419463['length'])];}const _0x24deee=ColorManager['WEATHER_RAINBOW_ORB_COLORS'][_0x5f0af8(0x349)](),_0x49fd83=0x20,_0x3730de=new Bitmap(_0x49fd83,_0x49fd83),_0x11c819=Math[_0x5f0af8(0x31e)](_0x49fd83/0x2);_0x3730de[_0x5f0af8(0x243)](_0x11c819,_0x11c819,_0x11c819,0x168,_0x24deee,0x0,0x1,0x0),_0x3730de[_0x5f0af8(0x3ef)](_0x11c819-0x1,_0x11c819-0x1,0x2,0x2,_0x24deee),_0x3730de[_0x5f0af8(0x558)]=![];if(ImageManager[_0x5f0af8(0x568)])console[_0x5f0af8(0x566)](_0x5f0af8(0x2dd));return this['_cached_WeatherEffects_RainbowOrbs']=this[_0x5f0af8(0x59e)]||[],this[_0x5f0af8(0x59e)][_0x5f0af8(0x4ee)](_0x3730de),_0x3730de;},ImageManager[_0x32d3d9(0x51a)]=function(){const _0x53861b=_0x32d3d9;if(this[_0x53861b(0x518)]&&this[_0x53861b(0x518)]['length']>=ImageManager[_0x53861b(0x5b8)]){const _0x2c242c=this['_cached_WeatherEffects_LightOrbs'];return _0x2c242c[Math[_0x53861b(0x31e)](Math[_0x53861b(0x509)]()*_0x2c242c['length'])];}const _0x304d0c=ColorManager[_0x53861b(0x5c9)],_0x4c5ab8=_0x304d0c[Math[_0x53861b(0x31e)](Math[_0x53861b(0x509)]()*_0x304d0c[_0x53861b(0x5c6)])];let _0x4a6716=Math[_0x53861b(0x4e6)](0x10)+0x10;if(_0x4a6716%0x2!==0x0)_0x4a6716+=0x1;const _0x4f21d4=new Bitmap(_0x4a6716,_0x4a6716),_0x4b03a2=Math[_0x53861b(0x31e)](_0x4a6716/0x2);_0x4f21d4[_0x53861b(0x243)](_0x4b03a2,_0x4b03a2,_0x4b03a2,0x168,_0x4c5ab8,0x0,0x1,0x0),_0x4f21d4[_0x53861b(0x3ef)](_0x4b03a2-0x1,_0x4b03a2-0x1,0x2,0x2,_0x4c5ab8),_0x4f21d4[_0x53861b(0x558)]=![];if(ImageManager[_0x53861b(0x568)])console['log'](_0x53861b(0x381));return this[_0x53861b(0x518)]=this['_cached_WeatherEffects_LightOrbs']||[],this['_cached_WeatherEffects_LightOrbs'][_0x53861b(0x4ee)](_0x4f21d4),_0x4f21d4;},ImageManager[_0x32d3d9(0x478)]=function(){const _0x54c96a=_0x32d3d9;if(this[_0x54c96a(0x27b)]&&this[_0x54c96a(0x27b)][_0x54c96a(0x5c6)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x676092=this[_0x54c96a(0x27b)];return _0x676092[Math['floor'](Math[_0x54c96a(0x509)]()*_0x676092[_0x54c96a(0x5c6)])];}const _0x5e5b78=ColorManager[_0x54c96a(0x345)],_0xc7fd95=_0x5e5b78[Math[_0x54c96a(0x31e)](Math[_0x54c96a(0x509)]()*_0x5e5b78[_0x54c96a(0x5c6)])];let _0x1af0a6=Math[_0x54c96a(0x4e6)](0x10)+0x10;if(_0x1af0a6%0x2!==0x0)_0x1af0a6+=0x1;const _0x516f94=new Bitmap(_0x1af0a6,_0x1af0a6),_0x3417b1=Math['floor'](_0x1af0a6/0x2);_0x516f94[_0x54c96a(0x243)](_0x3417b1,_0x3417b1,_0x3417b1,0x168,_0xc7fd95,0x0,0x1,0x0),_0x516f94[_0x54c96a(0x3ef)](_0x3417b1-0x1,_0x3417b1-0x1,0x2,0x2,_0xc7fd95),_0x516f94[_0x54c96a(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x54c96a(0x3a1));return this[_0x54c96a(0x27b)]=this[_0x54c96a(0x27b)]||[],this[_0x54c96a(0x27b)][_0x54c96a(0x4ee)](_0x516f94),_0x516f94;},ImageManager[_0x32d3d9(0x56f)]=function(){const _0x5429b4=_0x32d3d9;if(this[_0x5429b4(0x331)]&&this[_0x5429b4(0x331)][_0x5429b4(0x5c6)]>=ImageManager[_0x5429b4(0x5b8)]){const _0x57407b=this[_0x5429b4(0x331)];return _0x57407b[Math[_0x5429b4(0x31e)](Math[_0x5429b4(0x509)]()*_0x57407b[_0x5429b4(0x5c6)])];}const _0xbd39d4=ColorManager[_0x5429b4(0x2f8)],_0x315ae5=1.3;let _0x39b5f2=ColorManager[_0x5429b4(0x23b)](_0xbd39d4[Math['floor'](Math[_0x5429b4(0x509)]()*_0xbd39d4[_0x5429b4(0x5c6)])],_0x315ae5),_0x4c9627=ColorManager['adjustHexColor'](_0xbd39d4[Math[_0x5429b4(0x31e)](Math[_0x5429b4(0x509)]()*_0xbd39d4['length'])],_0x315ae5),_0x407ab8=ColorManager[_0x5429b4(0x23b)](_0xbd39d4[Math['floor'](Math['random']()*_0xbd39d4[_0x5429b4(0x5c6)])],_0x315ae5);const _0x634e2f=new Bitmap(0x1f4,0x1f4);_0x634e2f[_0x5429b4(0x5d0)](0xfa,0x15e,0x4b,_0x39b5f2,0x4,0x14),_0x634e2f[_0x5429b4(0x5d0)](0xfa,0xfa,0x64,_0x407ab8,0x8,0x19),_0x634e2f[_0x5429b4(0x5d0)](0xfa,0xfa,0x3c,_0x4c9627,0x4,0x14);const _0x31e75c=_0x634e2f['width'],_0x486aa8=_0x634e2f[_0x5429b4(0x58a)],_0x551d71=0x2;let _0x277d84=0x20;while(_0x277d84--){const _0x47dab8=Math[_0x5429b4(0x4e6)](_0x31e75c-_0x551d71*0x2)+_0x551d71,_0x5a4701=Math[_0x5429b4(0x4e6)](_0x486aa8-_0x551d71*0x2)+_0x551d71;let _0x2486b6=_0xbd39d4[Math[_0x5429b4(0x31e)](Math[_0x5429b4(0x509)]()*_0xbd39d4[_0x5429b4(0x5c6)])];_0x2486b6=ColorManager[_0x5429b4(0x23b)](_0x2486b6,_0x315ae5);const _0x1ac5d4=Math[_0x5429b4(0x4e6)](_0x551d71)+0x1;_0x634e2f[_0x5429b4(0x520)]=Math[_0x5429b4(0x4e6)](0x40)+0xa0,_0x634e2f[_0x5429b4(0x3d8)](_0x47dab8,_0x5a4701,_0x1ac5d4,_0x2486b6);}const _0x40a824=_0x551d71*0x3,_0x17e281=_0x40a824/0x2;_0x277d84=0x8;while(_0x277d84--){const _0x1fd92c=Math[_0x5429b4(0x4e6)](_0x31e75c-_0x40a824*0x2)+_0x40a824,_0x401a4a=Math[_0x5429b4(0x4e6)](_0x486aa8-_0x40a824*0x2)+_0x40a824;let _0x716d37=_0xbd39d4[Math['floor'](Math[_0x5429b4(0x509)]()*_0xbd39d4[_0x5429b4(0x5c6)])];_0x716d37=ColorManager[_0x5429b4(0x23b)](_0x716d37,_0x315ae5),_0x634e2f[_0x5429b4(0x520)]=Math[_0x5429b4(0x4e6)](0x40)+0xa0,_0x634e2f[_0x5429b4(0x4e1)](_0x1fd92c,_0x401a4a,_0x716d37,_0x716d37,0x4,_0x40a824,_0x17e281);}_0x634e2f[_0x5429b4(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x5429b4(0x566)](_0x5429b4(0x37a));return this[_0x5429b4(0x331)]=this['_cached_WeatherEffects_DiamondDust']||[],this[_0x5429b4(0x331)][_0x5429b4(0x4ee)](_0x634e2f),_0x634e2f;},ImageManager['weatherEffectsCrumblingCave']=function(){const _0x349489=_0x32d3d9;if(this[_0x349489(0x29d)]&&this[_0x349489(0x29d)]['length']>=ImageManager[_0x349489(0x5b8)]){const _0xaf8c51=this[_0x349489(0x29d)];return _0xaf8c51[Math[_0x349489(0x31e)](Math[_0x349489(0x509)]()*_0xaf8c51[_0x349489(0x5c6)])];}const _0x18807a=ColorManager[_0x349489(0x578)],_0x3e7018=_0x18807a[Math[_0x349489(0x31e)](Math[_0x349489(0x509)]()*_0x18807a[_0x349489(0x5c6)])],_0x49e0a1=_0x18807a[Math[_0x349489(0x31e)](Math['random']()*_0x18807a[_0x349489(0x5c6)])],_0x3fe9e0=_0x18807a[Math[_0x349489(0x31e)](Math[_0x349489(0x509)]()*_0x18807a[_0x349489(0x5c6)])],_0x4b25b7=new Bitmap(0x1f4,0x1f4);_0x4b25b7[_0x349489(0x5d0)](0xfa,0x15e,0x4b,_0x3e7018,0x4,0x14),_0x4b25b7[_0x349489(0x5d0)](0xfa,0xfa,0x64,_0x3fe9e0,0x8,0x19),_0x4b25b7[_0x349489(0x5d0)](0xfa,0xfa,0x3c,_0x49e0a1,0x4,0x14);const _0x349b81=_0x4b25b7[_0x349489(0x3b2)],_0x1fc616=_0x4b25b7[_0x349489(0x58a)],_0x10121d=0x4;let _0x672930=0x80;while(_0x672930--){const _0x1d7006=Math[_0x349489(0x4e6)](_0x349b81-_0x10121d*0x2)+_0x10121d,_0x31ffe7=Math['randomInt'](_0x1fc616-_0x10121d*0x2)+_0x10121d;let _0x2856a6=_0x18807a[Math[_0x349489(0x31e)](Math[_0x349489(0x509)]()*_0x18807a[_0x349489(0x5c6)])];const _0x2e24f2=Math['randomInt'](_0x10121d)+0x1;_0x4b25b7[_0x349489(0x520)]=Math['randomInt'](0x40)+0xa0,_0x4b25b7[_0x349489(0x3d8)](_0x1d7006,_0x31ffe7,_0x2e24f2,_0x2856a6);}_0x4b25b7['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x349489(0x26a));return this[_0x349489(0x29d)]=this[_0x349489(0x29d)]||[],this[_0x349489(0x29d)][_0x349489(0x4ee)](_0x4b25b7),_0x4b25b7;},ImageManager['weatherEffectsAurora']=function(){const _0x107903=_0x32d3d9;if(this[_0x107903(0x2c8)]&&this[_0x107903(0x2c8)]['length']>=ImageManager[_0x107903(0x5b8)]*0x5){const _0x34c30b=this[_0x107903(0x2c8)];return _0x34c30b[Math[_0x107903(0x31e)](Math[_0x107903(0x509)]()*_0x34c30b[_0x107903(0x5c6)])];}const _0x4ee83c=Math[_0x107903(0x4e6)](0xc0)+0x40,_0xdddd7a=Math['randomInt'](0xc0)+0x40,_0x2a016b=Math[_0x107903(0x4e6)](0xc0)+0x40,_0x10463='rgba(%1,\x20%2,\x20%3,\x200)'[_0x107903(0x5f9)](_0x4ee83c,_0xdddd7a,_0x2a016b),_0x4edd51=_0x107903(0x52d)[_0x107903(0x5f9)](_0x4ee83c,_0xdddd7a,_0x2a016b),_0xaece16=new Bitmap(0x1f4,0x1f4),_0x5e5f0b=_0xaece16[_0x107903(0x3b2)],_0x487ec9=_0xaece16[_0x107903(0x58a)],_0x5bb695=Math[_0x107903(0x4e6)](0xf4240),_0x1aefa3=Math[_0x107903(0x509)]()*0.03+0.02;for(let _0x188f0d=0x0;_0x188f0d<_0x487ec9;_0x188f0d++){const _0x55e781=(_0x188f0d+_0x5bb695)*_0x1aefa3;let _0x40039b=_0x5e5f0b-Math[_0x107903(0x31e)](Math[_0x107903(0x5e5)](_0x55e781)*0xa)-0x28;const _0x27533a=_0x188f0d;_0xaece16[_0x107903(0x520)]=(0x1-Math[_0x107903(0x4c4)](_0x188f0d-_0x487ec9/0x2)/(_0x487ec9/0x2))*0xc0,_0xaece16['gradientFillRect'](_0x40039b,_0x27533a,Math['randomInt'](0x14)+0xa,0x1,_0x4edd51,_0x10463);let _0x59146f=Math[_0x107903(0x346)](Math[_0x107903(0x446)]((_0x188f0d+_0x5bb695)*_0x1aefa3)*0x5)+0xa;_0x40039b-=_0x59146f,_0xaece16[_0x107903(0x517)](_0x40039b,_0x27533a,_0x59146f,0x1,_0x4edd51,_0x4edd51),_0x59146f=Math['ceil'](Math[_0x107903(0x5e5)]((_0x188f0d+_0x5bb695)*_0x1aefa3)*0x3c)+0xa0,_0x40039b-=_0x59146f;const _0x52922d=Math['randomInt'](0x3c);_0x40039b+=_0x52922d,_0xaece16[_0x107903(0x517)](_0x40039b,_0x27533a,_0x59146f-_0x52922d,0x1,_0x10463,_0x4edd51);}_0xaece16[_0x107903(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log']('aurora');return this[_0x107903(0x2c8)]=this[_0x107903(0x2c8)]||[],this[_0x107903(0x2c8)]['push'](_0xaece16),_0xaece16;},ImageManager[_0x32d3d9(0x242)]=function(){const _0xc27fdf=_0x32d3d9;if(this[_0xc27fdf(0x3c5)]&&this['_cached_WeatherEffects_ShootingStars'][_0xc27fdf(0x5c6)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']*0x3){const _0x541fb5=this[_0xc27fdf(0x3c5)];return _0x541fb5[Math[_0xc27fdf(0x31e)](Math[_0xc27fdf(0x509)]()*_0x541fb5['length'])];}const _0x4b1137=Math[_0xc27fdf(0x4e6)](0x80)+0x80,_0x3986cd=Math[_0xc27fdf(0x4e6)](0x80)+0x80,_0x297904=Math[_0xc27fdf(0x4e6)](0x80)+0x80,_0x4fb92f='rgba(%1,\x20%2,\x20%3,\x200)'[_0xc27fdf(0x5f9)](_0x4b1137,_0x3986cd,_0x297904),_0x405b50=_0xc27fdf(0x52d)['format'](_0x4b1137,_0x3986cd,_0x297904),_0x14e84f=Math['randomInt'](0x32)+0x32,_0x19f901=0x4,_0x534091=new Bitmap(_0x14e84f*0x2,_0x19f901);_0x534091[_0xc27fdf(0x517)](0x0,0x0,_0x14e84f,_0x19f901,_0x4fb92f,_0x405b50),_0x534091[_0xc27fdf(0x558)]=![];if(ImageManager[_0xc27fdf(0x568)])console['log']('shootingstars');return this[_0xc27fdf(0x3c5)]=this[_0xc27fdf(0x3c5)]||[],this[_0xc27fdf(0x3c5)]['push'](_0x534091),_0x534091;},ImageManager['weatherEffectsSparkle']=function(){const _0x5a063e=_0x32d3d9;if(this[_0x5a063e(0x1f4)])return this[_0x5a063e(0x1f4)];const _0x1b6dd2=0x20,_0xca714=new Bitmap(_0x1b6dd2,_0x1b6dd2),_0x3c386d=_0x5a063e(0x4cd);_0xca714[_0x5a063e(0x4e1)](_0x1b6dd2/0x2,_0x1b6dd2/0x2,_0x3c386d,_0x3c386d,0x4,_0x1b6dd2/0x2,_0x1b6dd2/0x8),_0xca714[_0x5a063e(0x558)]=![];if(ImageManager[_0x5a063e(0x568)])console[_0x5a063e(0x566)](_0x5a063e(0x5e8));return this['_cached_WeatherEffects_Sparkle']=_0xca714,_0xca714;},ImageManager[_0x32d3d9(0x38e)]=function(){const _0xbb3069=_0x32d3d9;if(this['_cached_WeatherEffects_AcidRain']&&this[_0xbb3069(0x26f)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x36854e=this[_0xbb3069(0x26f)];return _0x36854e[Math['floor'](Math[_0xbb3069(0x509)]()*_0x36854e[_0xbb3069(0x5c6)])];}const _0x34b3c3=new Bitmap(0x1f4,0x1f4),_0x29de1f=_0xbb3069(0x1fa),_0x8ca8e2=_0xbb3069(0x37f),_0x55ccbe=_0x34b3c3['width'],_0x4f7c8b=_0x34b3c3['height'],_0x1c5f4b=0x3c,_0x56239c=_0x1c5f4b/0x2,_0x16a334=0x2;let _0x4ee8d3=0x10;while(_0x4ee8d3--){const _0x3e7663=Math[_0xbb3069(0x4e6)](_0x55ccbe-_0x1c5f4b)+_0x1c5f4b,_0x5cf48e=Math['randomInt'](_0x4f7c8b-_0x16a334)+_0x16a334;_0x34b3c3['paintOpacity']=Math[_0xbb3069(0x4e6)](0x40)+0xc0,_0x34b3c3[_0xbb3069(0x517)](_0x3e7663,_0x5cf48e,_0x56239c,0x2,_0x29de1f,_0x8ca8e2),_0x34b3c3[_0xbb3069(0x3ef)](_0x3e7663+_0x56239c,_0x5cf48e,_0x56239c,0x2,_0x8ca8e2);}_0x34b3c3[_0xbb3069(0x558)]=![];if(ImageManager[_0xbb3069(0x568)])console[_0xbb3069(0x566)](_0xbb3069(0x44e));return this[_0xbb3069(0x26f)]=this[_0xbb3069(0x26f)]||[],this[_0xbb3069(0x26f)]['push'](_0x34b3c3),_0x34b3c3;},ImageManager[_0x32d3d9(0x591)]=function(){const _0xb30c2d=_0x32d3d9;if(this[_0xb30c2d(0x39f)]&&this[_0xb30c2d(0x39f)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x32096e=this[_0xb30c2d(0x39f)];return _0x32096e[Math['floor'](Math[_0xb30c2d(0x509)]()*_0x32096e[_0xb30c2d(0x5c6)])];}const _0x66e48f=new Bitmap(0x1f4,0x1f4),_0x452f08=_0xb30c2d(0x356),_0x45c526='rgba(255,64,64,1)',_0x3262aa=_0x66e48f['width'],_0x4c9d4f=_0x66e48f[_0xb30c2d(0x58a)],_0x4357b1=0x64,_0x50af9b=_0x4357b1/0x2,_0x232f11=0x3;let _0x385da9=0x10;while(_0x385da9--){const _0x1e57a6=Math[_0xb30c2d(0x4e6)](_0x3262aa-_0x4357b1)+_0x4357b1,_0x595dd3=Math['randomInt'](_0x4c9d4f-_0x232f11)+_0x232f11;_0x66e48f[_0xb30c2d(0x520)]=Math[_0xb30c2d(0x4e6)](0x40)+0xc0,_0x66e48f[_0xb30c2d(0x517)](_0x1e57a6,_0x595dd3,_0x50af9b,0x2,_0x452f08,_0x45c526),_0x66e48f['fillRect'](_0x1e57a6+_0x50af9b,_0x595dd3,_0x50af9b,0x2,_0x45c526);}_0x66e48f[_0xb30c2d(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0xb30c2d(0x566)]('bloodrain');return this[_0xb30c2d(0x39f)]=this[_0xb30c2d(0x39f)]||[],this[_0xb30c2d(0x39f)][_0xb30c2d(0x4ee)](_0x66e48f),_0x66e48f;},ImageManager['weatherEffectsConfetti']=function(){const _0x136b2a=_0x32d3d9;if(this[_0x136b2a(0x505)]&&ColorManager[_0x136b2a(0x5eb)][_0x136b2a(0x5c6)]<=0x0){const _0x4bc928=this[_0x136b2a(0x505)];return _0x4bc928[Math[_0x136b2a(0x31e)](Math['random']()*_0x4bc928[_0x136b2a(0x5c6)])];}this[_0x136b2a(0x505)]=this[_0x136b2a(0x505)]||[];const _0x2c300e=ColorManager[_0x136b2a(0x5eb)]['pop'](),_0x283c5f=_0x136b2a(0x526);{const _0x4f7b54=0x8,_0xd658b2=new Bitmap(_0x4f7b54*0x2,_0x4f7b54*0x2);_0xd658b2[_0x136b2a(0x3d8)](_0x4f7b54,_0x4f7b54,_0x4f7b54,_0x283c5f),_0xd658b2[_0x136b2a(0x3d8)](_0x4f7b54,_0x4f7b54,_0x4f7b54-0x1,_0x2c300e),_0xd658b2[_0x136b2a(0x558)]=![],this[_0x136b2a(0x505)]['push'](_0xd658b2);}{const _0x45a045=new Bitmap(0x10,0x8);_0x45a045['fillRect'](0x0,0x0,0x10,0x8,_0x283c5f),_0x45a045[_0x136b2a(0x3ef)](0x1,0x1,0xe,0x6,_0x2c300e),_0x45a045['_customModified']=![],this[_0x136b2a(0x505)][_0x136b2a(0x4ee)](_0x45a045);}const _0x519ebf=new Bitmap(0x10,0x10);_0x519ebf['drawStar'](0x8,0x8,_0x283c5f,_0x283c5f,0x5,0x8,0x4),_0x519ebf['drawStar'](0x8,0x8,_0x2c300e,_0x2c300e,0x5,0x7,0x3),_0x519ebf[_0x136b2a(0x558)]=![];if(ImageManager[_0x136b2a(0x568)])console['log'](_0x136b2a(0x4d9));return this[_0x136b2a(0x505)][_0x136b2a(0x4ee)](_0x519ebf),_0x519ebf;},ImageManager[_0x32d3d9(0x29a)]=function(){const _0x1abeec=_0x32d3d9;if(this[_0x1abeec(0x1ff)]&&ColorManager[_0x1abeec(0x33f)][_0x1abeec(0x5c6)]<=0x0){const _0x5a8b3f=this[_0x1abeec(0x1ff)];return _0x5a8b3f[Math['floor'](Math['random']()*_0x5a8b3f['length'])];}const _0x51a296=ColorManager[_0x1abeec(0x33f)][_0x1abeec(0x349)](),_0x53a184=new Bitmap(0x3e8,0x3e8),_0x49aedb=_0x53a184[_0x1abeec(0x3b2)]/0x2;return _0x53a184[_0x1abeec(0x243)](_0x49aedb,_0x49aedb,_0x49aedb,0x168,_0x51a296,0x0,0x1,0x0),_0x53a184[_0x1abeec(0x558)]=![],this[_0x1abeec(0x1ff)]=this[_0x1abeec(0x1ff)]||[],this['_cached_WeatherEffects_SunBeam'][_0x1abeec(0x4ee)](_0x53a184),_0x53a184;},ImageManager[_0x32d3d9(0x361)]=function(){const _0x4c7de6=_0x32d3d9;if(this[_0x4c7de6(0x3c7)]&&ColorManager[_0x4c7de6(0x35e)][_0x4c7de6(0x5c6)]<=0x0){const _0x37d22b=this[_0x4c7de6(0x3c7)];return _0x37d22b[Math[_0x4c7de6(0x31e)](Math[_0x4c7de6(0x509)]()*_0x37d22b[_0x4c7de6(0x5c6)])];}const _0x227fdd=ColorManager[_0x4c7de6(0x35e)]['pop'](),_0x2d4afa=new Bitmap(0x3e8,0x3e8),_0x22502f=_0x2d4afa[_0x4c7de6(0x3b2)]/0x2;return _0x2d4afa[_0x4c7de6(0x243)](_0x22502f,_0x22502f,_0x22502f,0x168,_0x227fdd,0x0,0x1,0x0),_0x2d4afa[_0x4c7de6(0x558)]=![],this['_cached_WeatherEffects_PrismBeams']=this[_0x4c7de6(0x3c7)]||[],this[_0x4c7de6(0x3c7)]['push'](_0x2d4afa),_0x2d4afa;},ImageManager[_0x32d3d9(0x54b)]=function(){const _0xde2af1=_0x32d3d9;if(this[_0xde2af1(0x238)]&&ColorManager[_0xde2af1(0x43f)][_0xde2af1(0x5c6)]<=0x0){const _0x418660=this[_0xde2af1(0x238)];return _0x418660[Math[_0xde2af1(0x31e)](Math[_0xde2af1(0x509)]()*_0x418660['length'])];}let _0x2cfed1=ColorManager[_0xde2af1(0x43f)][_0xde2af1(0x349)]();_0x2cfed1=ColorManager[_0xde2af1(0x23b)](_0x2cfed1,1.2);const _0x3afd66=new Bitmap(0x3e8,0x3e8),_0x317165=_0x3afd66[_0xde2af1(0x3b2)]/0x2;return _0x3afd66[_0xde2af1(0x243)](_0x317165,_0x317165,_0x317165,0x168,_0x2cfed1,0x0,0x1,0x0),_0x3afd66[_0xde2af1(0x558)]=![],this[_0xde2af1(0x238)]=this['_cached_WeatherEffects_ArcticBeams']||[],this[_0xde2af1(0x238)][_0xde2af1(0x4ee)](_0x3afd66),_0x3afd66;},ImageManager[_0x32d3d9(0x555)]=function(){const _0x362c86=_0x32d3d9;if(this['_cached_WeatherEffects_LensFlare']&&this[_0x362c86(0x340)]['length']>=ImageManager[_0x362c86(0x5b8)]){const _0x4e4b13=this[_0x362c86(0x340)];return _0x4e4b13[Math[_0x362c86(0x31e)](Math[_0x362c86(0x509)]()*_0x4e4b13[_0x362c86(0x5c6)])];}const _0x5f233e=Math[_0x362c86(0x277)]($dataSystem[_0x362c86(0x30e)]['screenWidth'],$dataSystem[_0x362c86(0x30e)][_0x362c86(0x5c5)])||0x1,_0x14d945=Math[_0x362c86(0x2c5)](_0x5f233e*_0x5f233e+_0x5f233e*_0x5f233e),_0x30c0e4=Math['randomInt'](_0x14d945*0x1/0x3)+_0x14d945*0x2/0x3,_0x5b8964=Math['randomInt'](0xc8)+0x64,_0x3d658f=new Bitmap(_0x30c0e4,_0x5b8964*0x2);_0x3d658f['fillRect'](0x0,0x0,_0x30c0e4,_0x30c0e4,'#000000');const _0x1c0402=_0x3d658f['width']/0x2,_0x16594c=_0x3d658f[_0x362c86(0x58a)],_0x103817=_0x1c0402-_0x5b8964,_0x242173=_0x16594c/0x2;let _0x7ed7ee=Math[_0x362c86(0x4e6)](0xa)+0x6;const _0x3a1ace=_0x103817/_0x7ed7ee;for(let _0x463d1a=0x0;_0x463d1a<_0x7ed7ee;_0x463d1a++){if(Math[_0x362c86(0x509)]()<0.4-_0x463d1a*0.04)continue;let _0x680abd=Math[_0x362c86(0x4e6)](_0x5b8964*(_0x463d1a*0.75)/_0x7ed7ee)+_0x5b8964*0x1/_0x7ed7ee;const _0x5defd5=_0x1c0402+_0x463d1a*_0x3a1ace;_0x3d658f['paintOpacity']=Math[_0x362c86(0x4e6)](0x40)+0xc0,_0x3d658f[_0x362c86(0x454)](_0x5defd5,_0x242173,_0x680abd);}const _0x12d74b=_0x30c0e4-_0x5b8964;_0x3d658f[_0x362c86(0x520)]=Math['randomInt'](0x10)+0x10,_0x3d658f[_0x362c86(0x2ef)](_0x12d74b,_0x242173,_0x5b8964),_0x3d658f[_0x362c86(0x558)]=![];if(ImageManager[_0x362c86(0x568)])console[_0x362c86(0x566)](_0x362c86(0x2d9));return this['_cached_WeatherEffects_LensFlare']=this[_0x362c86(0x340)]||[],this[_0x362c86(0x340)]['push'](_0x3d658f),_0x3d658f;},ImageManager['weatherEffectsMoonBeams']=function(){const _0x5cec70=_0x32d3d9;if(this['_cached_WeatherEffects_MoonBeam']&&ColorManager[_0x5cec70(0x379)][_0x5cec70(0x5c6)]<=0x0){const _0x5765ed=this[_0x5cec70(0x2e3)];return _0x5765ed[Math[_0x5cec70(0x31e)](Math[_0x5cec70(0x509)]()*_0x5765ed[_0x5cec70(0x5c6)])];}let _0x265d62=ColorManager[_0x5cec70(0x379)]['pop']();_0x265d62=ColorManager[_0x5cec70(0x23b)](_0x265d62,1.2);const _0x227aa9=new Bitmap(0x3e8,0x3e8),_0x25c707=_0x227aa9[_0x5cec70(0x3b2)]/0x2;return _0x227aa9['drawPolyArc'](_0x25c707,_0x25c707,_0x25c707,0x168,_0x265d62,0x0,0x1,0x0),_0x227aa9[_0x5cec70(0x558)]=![],this[_0x5cec70(0x2e3)]=this[_0x5cec70(0x2e3)]||[],this[_0x5cec70(0x2e3)][_0x5cec70(0x4ee)](_0x227aa9),_0x227aa9;},ImageManager['weatherEffectsUltravioletBeams']=function(){const _0xefe97a=_0x32d3d9;if(this[_0xefe97a(0x1f9)]&&ColorManager['WEATHER_UV_BEAM_COLORS'][_0xefe97a(0x5c6)]<=0x0){const _0x29d9f1=this['_cached_WeatherEffects_UvBeam'];return _0x29d9f1[Math[_0xefe97a(0x31e)](Math['random']()*_0x29d9f1[_0xefe97a(0x5c6)])];}const _0xb35a1e=ColorManager[_0xefe97a(0x49c)]['pop'](),_0x1b93a9=new Bitmap(0x3e8,0x3e8),_0x158cd3=_0x1b93a9[_0xefe97a(0x3b2)]/0x2;return _0x1b93a9[_0xefe97a(0x243)](_0x158cd3,_0x158cd3,_0x158cd3,0x168,_0xb35a1e,0x0,0x1,0x0),_0x1b93a9[_0xefe97a(0x558)]=![],this['_cached_WeatherEffects_UvBeam']=this[_0xefe97a(0x1f9)]||[],this[_0xefe97a(0x1f9)][_0xefe97a(0x4ee)](_0x1b93a9),_0x1b93a9;},ImageManager['weatherEffectsRadioactiveBeams']=function(){const _0x3b1623=_0x32d3d9;if(this['_cached_WeatherEffects_RadioactiveBeam']&&ColorManager[_0x3b1623(0x32c)]['length']<=0x0){const _0x30afe2=this['_cached_WeatherEffects_RadioactiveBeam'];return _0x30afe2[Math[_0x3b1623(0x31e)](Math[_0x3b1623(0x509)]()*_0x30afe2[_0x3b1623(0x5c6)])];}const _0x455413=ColorManager[_0x3b1623(0x32c)][_0x3b1623(0x349)](),_0x45d390=new Bitmap(0x3e8,0x3e8),_0x1ec386=_0x45d390[_0x3b1623(0x3b2)]/0x2;return _0x45d390['drawPolyArc'](_0x1ec386,_0x1ec386,_0x1ec386,0x168,_0x455413,0x0,0x1,0x0),_0x45d390[_0x3b1623(0x558)]=![],this['_cached_WeatherEffects_RadioactiveBeam']=this[_0x3b1623(0x26e)]||[],this[_0x3b1623(0x26e)][_0x3b1623(0x4ee)](_0x45d390),_0x45d390;},ImageManager['weatherEffectsHouseDust']=function(){const _0x4c2fd3=_0x32d3d9;if(this[_0x4c2fd3(0x3ca)]&&this[_0x4c2fd3(0x3ca)][_0x4c2fd3(0x5c6)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x33f3c3=this[_0x4c2fd3(0x3ca)];return _0x33f3c3[Math[_0x4c2fd3(0x31e)](Math[_0x4c2fd3(0x509)]()*_0x33f3c3['length'])];}const _0x190a56=new Bitmap(0x1f4,0x1f4),_0x20bfe3=_0x190a56['width'],_0x2f3a58=_0x190a56['height'],_0x53f777=ColorManager['WEATHER_CLOUD_WHITE_COLORS'][_0x4c2fd3(0x33a)](),_0x5692ea=1.5,_0x1906ce=0x1;let _0x27a446=0x20;while(_0x27a446--){const _0x3f95db=Math[_0x4c2fd3(0x4e6)](_0x20bfe3-_0x1906ce*0x2)+_0x1906ce,_0x13a3eb=Math['randomInt'](_0x2f3a58-_0x1906ce*0x2)+_0x1906ce;let _0x5bddd6=_0x53f777[Math[_0x4c2fd3(0x31e)](Math[_0x4c2fd3(0x509)]()*_0x53f777[_0x4c2fd3(0x5c6)])];_0x5bddd6=ColorManager[_0x4c2fd3(0x23b)](_0x5bddd6,_0x5692ea);const _0x5467b4=Math[_0x4c2fd3(0x4e6)](_0x1906ce)+0x1;_0x190a56[_0x4c2fd3(0x520)]=Math[_0x4c2fd3(0x4e6)](0x40)+0xa0,_0x190a56[_0x4c2fd3(0x3d8)](_0x3f95db,_0x13a3eb,_0x5467b4,_0x5bddd6);}_0x190a56[_0x4c2fd3(0x558)]=![];if(ImageManager[_0x4c2fd3(0x568)])console[_0x4c2fd3(0x566)](_0x4c2fd3(0x45a));return this[_0x4c2fd3(0x3ca)]=this[_0x4c2fd3(0x3ca)]||[],this[_0x4c2fd3(0x3ca)][_0x4c2fd3(0x4ee)](_0x190a56),_0x190a56;},ImageManager[_0x32d3d9(0x4fc)]=function(){const _0x394dff=_0x32d3d9;if(this[_0x394dff(0x392)]&&this[_0x394dff(0x392)][_0x394dff(0x5c6)]>=ImageManager[_0x394dff(0x5b8)]){const _0x34fc4e=this[_0x394dff(0x392)];return _0x34fc4e[Math[_0x394dff(0x31e)](Math['random']()*_0x34fc4e[_0x394dff(0x5c6)])];}const _0x79da0c=ColorManager['WEATHER_FLAME_COLORS']['clone'](),_0x4deace=_0x79da0c[Math[_0x394dff(0x31e)](Math[_0x394dff(0x509)]()*_0x79da0c['length'])];_0x79da0c[_0x394dff(0x213)](_0x4deace);const _0x550d8f=_0x79da0c[Math[_0x394dff(0x31e)](Math['random']()*_0x79da0c[_0x394dff(0x5c6)])];_0x79da0c[_0x394dff(0x213)](_0x550d8f);const _0x27dcba=_0x79da0c[Math[_0x394dff(0x31e)](Math[_0x394dff(0x509)]()*_0x79da0c[_0x394dff(0x5c6)])];_0x79da0c['remove'](_0x27dcba);const _0x56efe7=new Bitmap(0x3e8,0x3e8);_0x56efe7[_0x394dff(0x5d0)](0x1f4,0x28a,0xaf,_0x27dcba,0x10,0x14),_0x56efe7['drawCloud'](0x1f4,0x1f4,0xc8,_0x4deace,0x40,0x19),_0x56efe7['drawCloud'](0x1f4,0x15e,0xa0,_0x550d8f,0x10,0x14),_0x56efe7[_0x394dff(0x558)]=![];if(ImageManager[_0x394dff(0x568)])console[_0x394dff(0x566)](_0x394dff(0x55b));return this['_cached_WeatherEffects_FlameHaze']=this['_cached_WeatherEffects_FlameHaze']||[],this['_cached_WeatherEffects_FlameHaze'][_0x394dff(0x4ee)](_0x56efe7),_0x56efe7;},ImageManager[_0x32d3d9(0x348)]=function(){const _0x3e9d47=_0x32d3d9;if(this[_0x3e9d47(0x570)]&&this[_0x3e9d47(0x570)][_0x3e9d47(0x5c6)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']*0x3){const _0x2a78ea=this[_0x3e9d47(0x570)];return _0x2a78ea[Math[_0x3e9d47(0x31e)](Math[_0x3e9d47(0x509)]()*_0x2a78ea[_0x3e9d47(0x5c6)])];}const _0x419081=Math[_0x3e9d47(0x277)]($dataSystem['advanced'][_0x3e9d47(0x5b5)],$dataSystem[_0x3e9d47(0x30e)][_0x3e9d47(0x5c5)])||0x1,_0x2e578d=new Bitmap(_0x419081,_0x419081),_0x5f4023=_0x3e9d47(0x4cd);_0x2e578d['drawStar'](_0x419081/0x2,_0x419081/0x2,_0x5f4023,_0x5f4023,0x4,0x10,0x4),_0x2e578d[_0x3e9d47(0x354)]['scale'](0.5,0.5),_0x2e578d[_0x3e9d47(0x354)][_0x3e9d47(0x5d4)](_0x419081,_0x419081/0x2),_0x2e578d[_0x3e9d47(0x42e)](),_0x2e578d[_0x3e9d47(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x3e9d47(0x566)](_0x3e9d47(0x4e9));return this['_cached_WeatherEffects_Spiderbolt']=this[_0x3e9d47(0x570)]||[],this[_0x3e9d47(0x570)][_0x3e9d47(0x4ee)](_0x2e578d),_0x2e578d;},ImageManager[_0x32d3d9(0x546)]=function(){const _0x487e1=_0x32d3d9;if(this[_0x487e1(0x539)]&&this[_0x487e1(0x539)][_0x487e1(0x5c6)]>=ImageManager[_0x487e1(0x5b8)]*0x3){const _0x5744d0=this[_0x487e1(0x539)];return _0x5744d0[Math[_0x487e1(0x31e)](Math['random']()*_0x5744d0['length'])];}const _0x248f88='rgba(255,255,255,0)',_0x130376=_0x487e1(0x4c3);let _0x1b792d=Math[_0x487e1(0x4e6)](0x1e)+0x1e;if(_0x1b792d%0x2!==0x0)_0x1b792d+=0x1;const _0xc969a2=0x2,_0xe86c35=new Bitmap(_0x1b792d,_0xc969a2);_0xe86c35[_0x487e1(0x520)]=Math[_0x487e1(0x4e6)](0x40)+0xc0,_0xe86c35[_0x487e1(0x517)](0x0,0x0,_0x1b792d/0x2,_0xc969a2,_0x248f88,_0x130376),_0xe86c35['fillRect'](_0x1b792d/0x2,0x0,_0x1b792d/0x2,_0xc969a2,_0x130376),_0xe86c35['_customModified']=![];if(ImageManager[_0x487e1(0x568)])console[_0x487e1(0x566)](_0x487e1(0x202));return this[_0x487e1(0x539)]=this['_cached_WeatherEffects_WaterDrop']||[],this[_0x487e1(0x539)][_0x487e1(0x4ee)](_0xe86c35),_0xe86c35;},ImageManager[_0x32d3d9(0x2fd)]=function(){const _0x5136cc=_0x32d3d9;if(this['_cached_WeatherEffects_SoapBubbles']&&ColorManager['WEATHER_SOAP_BUBBLE_COLORS'][_0x5136cc(0x5c6)]<=0x0){const _0x4d3ed9=this[_0x5136cc(0x3fb)];return _0x4d3ed9[Math['floor'](Math[_0x5136cc(0x509)]()*_0x4d3ed9[_0x5136cc(0x5c6)])];}const _0x190d45=ColorManager[_0x5136cc(0x201)]['pop'](),_0x40f4cf=new Bitmap(0x18,0x18),_0x5f3ca9=0xc,_0x4aa399=_0x5f3ca9/0x3;return _0x40f4cf['drawCircle'](_0x5f3ca9,_0x5f3ca9,_0x5f3ca9,_0x190d45),_0x40f4cf[_0x5136cc(0x5fb)](_0x5f3ca9,_0x5f3ca9,_0x5f3ca9-0x2),_0x40f4cf['drawCircle'](_0x5f3ca9+_0x4aa399,_0x5f3ca9-_0x4aa399,_0x4aa399,'#ffffff'),_0x40f4cf[_0x5136cc(0x558)]=![],this['_cached_WeatherEffects_SoapBubbles']=this[_0x5136cc(0x3fb)]||[],this[_0x5136cc(0x3fb)]['push'](_0x40f4cf),_0x40f4cf;},ImageManager['weatherEffectsSmokeClouds']=function(){const _0x2f35c4=_0x32d3d9;if(this[_0x2f35c4(0x528)]&&this[_0x2f35c4(0x528)][_0x2f35c4(0x5c6)]>=ImageManager[_0x2f35c4(0x5b8)]){const _0x18c7c3=this['_cached_WeatherEffects_SmokeClouds'];return _0x18c7c3[Math[_0x2f35c4(0x31e)](Math[_0x2f35c4(0x509)]()*_0x18c7c3[_0x2f35c4(0x5c6)])];}const _0x55e524=ColorManager[_0x2f35c4(0x279)],_0x48f125=_0x55e524[0x3],_0x4644f6=_0x55e524[0x2],_0xb25ad6=_0x55e524[0x1],_0x549ad1=new Bitmap(0x1f4,0x1f4);_0x549ad1[_0x2f35c4(0x5d0)](0xfa,0x15e,0x4b,_0x48f125,0x10,0x14),_0x549ad1['drawCloud'](0xfa,0xfa,0x64,_0xb25ad6,0x40,0x19),_0x549ad1[_0x2f35c4(0x5d0)](0xfa,0xfa,0x3c,_0x4644f6,0x10,0x14),_0x549ad1[_0x2f35c4(0x558)]=![];if(ImageManager[_0x2f35c4(0x568)])console['log'](_0x2f35c4(0x504));return this[_0x2f35c4(0x528)]=this[_0x2f35c4(0x528)]||[],this[_0x2f35c4(0x528)][_0x2f35c4(0x4ee)](_0x549ad1),_0x549ad1;},ImageManager[_0x32d3d9(0x598)]=function(){const _0x61330d=_0x32d3d9;if(this[_0x61330d(0x5a8)]&&this[_0x61330d(0x5a8)]['length']>=ImageManager[_0x61330d(0x5b8)]){const _0x1f93e9=this['_cached_WeatherEffects_Sleet'];return _0x1f93e9[Math[_0x61330d(0x31e)](Math[_0x61330d(0x509)]()*_0x1f93e9[_0x61330d(0x5c6)])];}const _0x556472=ColorManager[_0x61330d(0x2f8)],_0x67478d=1.3;let _0x37e3f5=ColorManager[_0x61330d(0x23b)](_0x556472[Math['floor'](Math['random']()*_0x556472[_0x61330d(0x5c6)])],_0x67478d),_0x4423ac=ColorManager[_0x61330d(0x23b)](_0x556472[Math[_0x61330d(0x31e)](Math[_0x61330d(0x509)]()*_0x556472[_0x61330d(0x5c6)])],_0x67478d),_0x1344a2=ColorManager['adjustHexColor'](_0x556472[Math['floor'](Math[_0x61330d(0x509)]()*_0x556472[_0x61330d(0x5c6)])],_0x67478d);const _0x3c44b7=new Bitmap(0x1f4,0x1f4);_0x3c44b7[_0x61330d(0x5d0)](0xfa,0x15e,0x4b,_0x37e3f5,0x4,0x14),_0x3c44b7[_0x61330d(0x5d0)](0xfa,0xfa,0x64,_0x1344a2,0x8,0x19),_0x3c44b7[_0x61330d(0x5d0)](0xfa,0xfa,0x3c,_0x4423ac,0x4,0x14);const _0x1ec3d5=_0x3c44b7['width'],_0x35e2ab=_0x3c44b7[_0x61330d(0x58a)],_0x12d5ae=0x4;let _0x485d83=0x10;while(_0x485d83--){const _0x23f996=Math[_0x61330d(0x4e6)](_0x1ec3d5-_0x12d5ae*0x2)+_0x12d5ae,_0x110d8e=Math[_0x61330d(0x4e6)](_0x35e2ab-_0x12d5ae*0x2)+_0x12d5ae;let _0x59f713=_0x556472[Math[_0x61330d(0x31e)](Math['random']()*_0x556472[_0x61330d(0x5c6)])];_0x59f713=ColorManager[_0x61330d(0x23b)](_0x59f713,_0x67478d),_0x3c44b7[_0x61330d(0x520)]=Math[_0x61330d(0x4e6)](0x40)+0xc0,_0x3c44b7[_0x61330d(0x4e1)](_0x23f996,_0x110d8e,_0x59f713,_0x59f713,0x4,_0x12d5ae,_0x12d5ae/0x2);}_0x3c44b7[_0x61330d(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x61330d(0x566)](_0x61330d(0x55f));return this['_cached_WeatherEffects_Sleet']=this[_0x61330d(0x5a8)]||[],this[_0x61330d(0x5a8)][_0x61330d(0x4ee)](_0x3c44b7),_0x3c44b7;},ImageManager[_0x32d3d9(0x273)]=function(){const _0x204ea4=_0x32d3d9;if(this[_0x204ea4(0x23e)]&&this[_0x204ea4(0x23e)][_0x204ea4(0x5c6)]>=ImageManager[_0x204ea4(0x5b8)]){const _0x28253a=this[_0x204ea4(0x23e)];return _0x28253a[Math[_0x204ea4(0x31e)](Math['random']()*_0x28253a[_0x204ea4(0x5c6)])];}const _0x36da89=Math[_0x204ea4(0x4e6)](0x20)+0x40,_0x463908=Math[_0x204ea4(0x4e6)](0x20)+0x60,_0x3f0f7b=Math[_0x204ea4(0x4e6)](0x20)+0x80;let _0x19540a=ColorManager['arrayToHex']([_0x36da89,_0x36da89,_0x36da89]),_0x15fc74=ColorManager[_0x204ea4(0x519)]([_0x463908,_0x463908,_0x463908]),_0x3e600a=ColorManager[_0x204ea4(0x519)]([_0x3f0f7b,_0x3f0f7b,_0x3f0f7b]);const _0x139fbb=new Bitmap(0x3e8,0x3e8);_0x139fbb['drawCloud'](0x1f4,0x28a,0xaf,_0x19540a,0x10,0x14),_0x139fbb[_0x204ea4(0x5d0)](0x1f4,0x1f4,0xc8,_0x3e600a,0x40,0x19),_0x139fbb[_0x204ea4(0x5d0)](0x1f4,0x15e,0xa0,_0x15fc74,0x10,0x14),_0x139fbb[_0x204ea4(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x204ea4(0x566)](_0x204ea4(0x564));return this[_0x204ea4(0x23e)]=this[_0x204ea4(0x23e)]||[],this['_cached_WeatherEffects_Tempest'][_0x204ea4(0x4ee)](_0x139fbb),_0x139fbb;},ImageManager[_0x32d3d9(0x2e9)]=function(){const _0x5c2d21=_0x32d3d9;if(this[_0x5c2d21(0x3f1)]&&ColorManager[_0x5c2d21(0x4e3)][_0x5c2d21(0x5c6)]<=0x0){const _0x57b90f=this[_0x5c2d21(0x3f1)];return _0x57b90f[Math[_0x5c2d21(0x31e)](Math['random']()*_0x57b90f[_0x5c2d21(0x5c6)])];}const _0x5c087b=ColorManager[_0x5c2d21(0x4e3)]['pop'](),_0x2e8bfa=ColorManager[_0x5c2d21(0x23b)](_0x5c087b,0.5),_0xd527e9=0xc,_0xf05a26=0x4,_0x5347e5=new Bitmap(_0xd527e9,_0xf05a26);_0x5347e5[_0x5c2d21(0x3ef)](0x0,0x0,_0xd527e9,_0xf05a26/0x2,_0x5c087b),_0x5347e5[_0x5c2d21(0x3ef)](0x0,_0xf05a26/0x2,_0xd527e9,_0xf05a26/0x2,_0x2e8bfa),_0x5347e5[_0x5c2d21(0x558)]=![];if(ImageManager[_0x5c2d21(0x568)])console[_0x5c2d21(0x566)](_0x5c2d21(0x3d9));return this[_0x5c2d21(0x3f1)]=this[_0x5c2d21(0x3f1)]||[],this[_0x5c2d21(0x3f1)][_0x5c2d21(0x4ee)](_0x5347e5),_0x5347e5;},ImageManager[_0x32d3d9(0x3df)]=function(){const _0x4703cb=_0x32d3d9;if(this[_0x4703cb(0x314)]&&this[_0x4703cb(0x314)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x31bd0b=this[_0x4703cb(0x314)];return _0x31bd0b[Math[_0x4703cb(0x31e)](Math[_0x4703cb(0x509)]()*_0x31bd0b[_0x4703cb(0x5c6)])];}const _0x34de9f=_0x4703cb(0x4cd),_0x792a2c=_0x4703cb(0x22a),_0x2716a7=_0x4703cb(0x332),_0x1e7d6c=0x1f4,_0x101a32=new Bitmap(_0x1e7d6c,_0x1e7d6c);let _0x477471=0x40;while(_0x477471--){const _0x112930=Math['randomInt'](0x32)+0xa,_0x581f6f=Math[_0x4703cb(0x4e6)](0x32)+0x1b8,_0x18ebbd=Math[_0x4703cb(0x4e6)](0x1e0)+0xa,_0x2c093f=(_0x581f6f-_0x112930)/0x2,_0x34ecf4=Math[_0x4703cb(0x4e6)](0x3)+0x1c,_0x54e621=ColorManager[_0x4703cb(0x3d6)](_0x2716a7,0x0),_0x3f8abd=ColorManager[_0x4703cb(0x3d6)](_0x2716a7,Math[_0x4703cb(0x509)]());_0x101a32['gradientFillRect'](_0x112930,_0x18ebbd,Math[_0x4703cb(0x31e)](_0x2c093f),_0x34ecf4,_0x54e621,_0x3f8abd),_0x101a32['gradientFillRect'](_0x112930+Math[_0x4703cb(0x31e)](_0x2c093f),_0x18ebbd,Math[_0x4703cb(0x346)](_0x2c093f),_0x34ecf4,_0x3f8abd,_0x54e621);}_0x477471=0x20;while(_0x477471--){const _0x135455=Math['randomInt'](0x32)+0x64,_0x4db0a1=Math[_0x4703cb(0x4e6)](0x32)+0x15e,_0x2cf4ea=Math[_0x4703cb(0x4e6)](0x1e0)+0xa,_0x18e939=(_0x4db0a1-_0x135455)/0x2,_0x34b451=Math[_0x4703cb(0x4e6)](0x6)+0xa,_0x32297d=ColorManager[_0x4703cb(0x3d6)](_0x792a2c,0x0),_0x20d0a7=ColorManager[_0x4703cb(0x3d6)](_0x792a2c,Math['random']());_0x101a32[_0x4703cb(0x517)](_0x135455,_0x2cf4ea,Math[_0x4703cb(0x31e)](_0x18e939),_0x34b451,_0x32297d,_0x20d0a7),_0x101a32[_0x4703cb(0x517)](_0x135455+Math[_0x4703cb(0x31e)](_0x18e939),_0x2cf4ea,Math[_0x4703cb(0x346)](_0x18e939),_0x34b451,_0x20d0a7,_0x32297d);}_0x477471=0x10;while(_0x477471--){const _0x2fe89d=Math['randomInt'](0x32)+0xa,_0x50da51=Math[_0x4703cb(0x4e6)](0x32)+0x1b8,_0x3907f7=Math[_0x4703cb(0x4e6)](0x1e0)+0xa,_0x2b86b0=(_0x50da51-_0x2fe89d)/0x2,_0x5299ea=Math['randomInt'](0x6)+0x5,_0x57ffda=ColorManager[_0x4703cb(0x3d6)](_0x34de9f,0x0),_0x281511=ColorManager[_0x4703cb(0x3d6)](_0x34de9f,0x1);_0x101a32[_0x4703cb(0x517)](_0x2fe89d,_0x3907f7,Math[_0x4703cb(0x31e)](_0x2b86b0),_0x5299ea,_0x57ffda,_0x281511),_0x101a32[_0x4703cb(0x517)](_0x2fe89d+Math['floor'](_0x2b86b0),_0x3907f7,Math[_0x4703cb(0x346)](_0x2b86b0),_0x5299ea,_0x281511,_0x57ffda);}const _0x11f9b9='rgba(255,255,255,0)',_0x44dcb6=_0x4703cb(0x4c3),_0x42295b=0xc8,_0x589a8d=_0x42295b/0x2,_0x1756be=0x6;_0x477471=0x10;while(_0x477471--){const _0x4fdb51=Math[_0x4703cb(0x4e6)](_0x1e7d6c-_0x42295b)+_0x42295b,_0x5a16df=Math[_0x4703cb(0x4e6)](_0x1e7d6c-_0x1756be)+_0x1756be;_0x101a32[_0x4703cb(0x520)]=Math[_0x4703cb(0x4e6)](0x40)+0xc0,_0x101a32[_0x4703cb(0x517)](_0x4fdb51,_0x5a16df,_0x589a8d,0x2,_0x11f9b9,_0x44dcb6),_0x101a32[_0x4703cb(0x3ef)](_0x4fdb51+_0x589a8d,_0x5a16df,_0x589a8d,0x2,_0x44dcb6);}_0x101a32[_0x4703cb(0x558)]=![];if(ImageManager[_0x4703cb(0x568)])console[_0x4703cb(0x566)](_0x4703cb(0x394));return this['_cached_WeatherEffects_Xtreme']=this['_cached_WeatherEffects_Xtreme']||[],this[_0x4703cb(0x314)][_0x4703cb(0x4ee)](_0x101a32),_0x101a32;},ImageManager[_0x32d3d9(0x503)]=function(){const _0xe3c617=_0x32d3d9;if(this[_0xe3c617(0x32a)]&&ColorManager[_0xe3c617(0x4e7)][_0xe3c617(0x5c6)]<=0x0){const _0x171da1=this['_cached_WeatherEffects_Balloons'];return _0x171da1[Math['floor'](Math[_0xe3c617(0x509)]()*_0x171da1[_0xe3c617(0x5c6)])];}const _0xe9c863=ColorManager[_0xe3c617(0x4e7)]['pop'](),_0x1b84b8=ColorManager[_0xe3c617(0x23b)](_0xe9c863,0.8),_0x1fa161=[_0xe9c863,_0x1b84b8],_0x25200f=new Bitmap(0x64,0x24);_0x25200f[_0xe3c617(0x3ee)](_0x1fa161),_0x25200f[_0xe3c617(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0xe3c617(0x566)](_0xe3c617(0x3cc));return this['_cached_WeatherEffects_Balloons']=this['_cached_WeatherEffects_Balloons']||[],this[_0xe3c617(0x32a)][_0xe3c617(0x4ee)](_0x25200f),_0x25200f;},ImageManager[_0x32d3d9(0x3a5)]=function(){const _0x4bd5fa=_0x32d3d9;if(this[_0x4bd5fa(0x495)]&&this[_0x4bd5fa(0x495)]['length']>=ImageManager[_0x4bd5fa(0x5b8)]){const _0x3f6424=this[_0x4bd5fa(0x495)];return _0x3f6424[Math[_0x4bd5fa(0x31e)](Math[_0x4bd5fa(0x509)]()*_0x3f6424[_0x4bd5fa(0x5c6)])];}const _0x59920d=_0x4bd5fa(0x3be);let _0x41f4a4=Math[_0x4bd5fa(0x4e6)](0x32)+0x64;if(_0x41f4a4%0x2!==0x0)_0x41f4a4+=0x1;const _0x44eb45=new Bitmap(_0x41f4a4,0x8);_0x44eb45[_0x4bd5fa(0x5ca)](_0x59920d),_0x44eb45['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x4bd5fa(0x566)](_0x4bd5fa(0x487));return this[_0x4bd5fa(0x495)]=this[_0x4bd5fa(0x495)]||[],this['_cached_WeatherEffects_Fireworks'][_0x4bd5fa(0x4ee)](_0x44eb45),_0x44eb45;},ImageManager[_0x32d3d9(0x22b)]=function(){const _0x576f8b=_0x32d3d9;if(this[_0x576f8b(0x22e)]&&this[_0x576f8b(0x22e)][_0x576f8b(0x5c6)]>=ImageManager[_0x576f8b(0x5b8)]){const _0x1ff4b8=this[_0x576f8b(0x22e)];return _0x1ff4b8[Math['floor'](Math['random']()*_0x1ff4b8[_0x576f8b(0x5c6)])];}const _0x35c7c7=_0x576f8b(0x3be),_0x3d08d4=new Bitmap(0xc8,0xc8);_0x3d08d4[_0x576f8b(0x40a)](_0x35c7c7),_0x3d08d4[_0x576f8b(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x576f8b(0x566)]('fireworksflower');return this[_0x576f8b(0x22e)]=this['_cached_WeatherEffects_FireworksFlower']||[],this[_0x576f8b(0x22e)][_0x576f8b(0x4ee)](_0x3d08d4),_0x3d08d4;},ImageManager[_0x32d3d9(0x2b4)]=function(){const _0x504927=_0x32d3d9;if(this[_0x504927(0x3f6)]&&ColorManager[_0x504927(0x3c6)][_0x504927(0x5c6)]<=0x0){const _0xb11941=this[_0x504927(0x3f6)];return _0xb11941[Math[_0x504927(0x31e)](Math['random']()*_0xb11941[_0x504927(0x5c6)])];}const _0x572474=ColorManager['WEATHER_SHADOW_BURST_COLORS'][_0x504927(0x349)](),_0x3dc1db=new Bitmap(0x3e8,0x3e8),_0x5d2a57=_0x3dc1db[_0x504927(0x3b2)]/0x2;_0x3dc1db[_0x504927(0x243)](_0x5d2a57,_0x5d2a57,_0x5d2a57,0x168,_0x572474,0x0,0x1,0x0),_0x3dc1db['_customModified']=![];if(ImageManager[_0x504927(0x568)])console[_0x504927(0x566)](_0x504927(0x272));return this[_0x504927(0x3f6)]=this[_0x504927(0x3f6)]||[],this['_cached_WeatherEffects_ShadowBurst'][_0x504927(0x4ee)](_0x3dc1db),_0x3dc1db;},ImageManager[_0x32d3d9(0x50d)]=function(){const _0x3d3fba=_0x32d3d9;if(this['_cached_WeatherEffects_CloudBurst']&&this[_0x3d3fba(0x5ed)][_0x3d3fba(0x5c6)]>=ImageManager[_0x3d3fba(0x5b8)]){const _0x1b5a3c=this[_0x3d3fba(0x5ed)];return _0x1b5a3c[Math[_0x3d3fba(0x31e)](Math[_0x3d3fba(0x509)]()*_0x1b5a3c[_0x3d3fba(0x5c6)])];}const _0x39a963=new Bitmap(0x1f4,0x1f4);let _0x1215aa=ColorManager[_0x3d3fba(0x519)]([Math['randomInt'](0x20)+0x10,0x18,Math['randomInt'](0x20)+0x10]),_0x1fb771=ColorManager[_0x3d3fba(0x519)]([Math[_0x3d3fba(0x4e6)](0x30)+0x20,0x30,Math[_0x3d3fba(0x4e6)](0x30)+0x20]),_0x472613=ColorManager[_0x3d3fba(0x519)]([Math['randomInt'](0x40)+0x30,0x60,Math[_0x3d3fba(0x4e6)](0x40)+0x30]);_0x39a963[_0x3d3fba(0x5d0)](0xfa,0x15e,0x4b,_0x1215aa,0x10,0x14),_0x39a963[_0x3d3fba(0x5d0)](0xfa,0xfa,0x64,_0x472613,0x40,0x19),_0x39a963[_0x3d3fba(0x5d0)](0xfa,0xfa,0x3c,_0x1fb771,0x10,0x14);const _0x2e6264=_0x3d3fba(0x411),_0x5c20c4='rgba(255,255,255,1)',_0x8ae546=_0x39a963[_0x3d3fba(0x3b2)],_0x35ef8b=_0x39a963[_0x3d3fba(0x58a)],_0x55de2b=0x64,_0x108f74=_0x55de2b/0x2,_0x1efe2b=0x2;let _0x574791=0x20;while(_0x574791--){const _0xc636d9=Math['randomInt'](_0x8ae546-_0x55de2b)+_0x55de2b,_0x5c611e=Math[_0x3d3fba(0x4e6)](_0x35ef8b-_0x1efe2b)+_0x1efe2b;_0x39a963[_0x3d3fba(0x520)]=Math['randomInt'](0x40)+0xc0,_0x39a963[_0x3d3fba(0x517)](_0xc636d9,_0x5c611e,Math[_0x3d3fba(0x346)](_0x108f74),_0x1efe2b,_0x2e6264,_0x5c20c4),_0x39a963[_0x3d3fba(0x3ef)](_0xc636d9+Math[_0x3d3fba(0x346)](_0x108f74),_0x5c611e,Math[_0x3d3fba(0x31e)](_0x108f74),_0x1efe2b,_0x5c20c4);}_0x39a963[_0x3d3fba(0x558)]=![];if(ImageManager[_0x3d3fba(0x568)])console[_0x3d3fba(0x566)](_0x3d3fba(0x2ae));return this[_0x3d3fba(0x5ed)]=this[_0x3d3fba(0x5ed)]||[],this[_0x3d3fba(0x5ed)][_0x3d3fba(0x4ee)](_0x39a963),_0x39a963;},ImageManager[_0x32d3d9(0x1fc)]=function(){const _0x588fcd=_0x32d3d9;if(this[_0x588fcd(0x5d3)])return this[_0x588fcd(0x5d3)];const _0x90c0db=Math[_0x588fcd(0x277)]($dataSystem[_0x588fcd(0x30e)][_0x588fcd(0x5b5)],$dataSystem[_0x588fcd(0x30e)]['screenHeight'])||0x1,_0x236e38=new Bitmap(_0x90c0db,_0x90c0db);_0x236e38['drawRainbowArch'](_0x90c0db/0x2,_0x90c0db/0x2,_0x90c0db/0x2),_0x236e38[_0x588fcd(0x558)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x588fcd(0x3a2));return this[_0x588fcd(0x5d3)]=_0x236e38,_0x236e38;},ImageManager[_0x32d3d9(0x5da)]=function(){const _0x4303fc=_0x32d3d9;if(this[_0x4303fc(0x563)]){const _0x2754ea=this[_0x4303fc(0x563)];return _0x2754ea[Math[_0x4303fc(0x31e)](Math[_0x4303fc(0x509)]()*_0x2754ea[_0x4303fc(0x5c6)])];}this[_0x4303fc(0x563)]=this[_0x4303fc(0x563)]||[];const _0x352001=ImageManager[_0x4303fc(0x535)];for(const _0x5e9bb5 of _0x352001){const _0x6412b3=new Bitmap(ImageManager[_0x4303fc(0x21a)],ImageManager['iconHeight']);_0x6412b3[_0x4303fc(0x45f)]=0x1c,_0x6412b3['drawText'](_0x5e9bb5,0x0,0x0,_0x6412b3['width'],_0x6412b3[_0x4303fc(0x58a)],_0x4303fc(0x3f9)),_0x6412b3[_0x4303fc(0x558)]=![],this['_cached_WeatherEffects_Icons'][_0x4303fc(0x4ee)](_0x6412b3);}if(ImageManager[_0x4303fc(0x568)])console['log'](_0x4303fc(0x264));const _0x6b4461=this['_cached_WeatherEffects_Icons'];return _0x6b4461[Math[_0x4303fc(0x31e)](Math['random']()*_0x6b4461['length'])];},ImageManager[_0x32d3d9(0x513)]=function(){const _0x49f7e2=_0x32d3d9;if(this[_0x49f7e2(0x200)]&&this[_0x49f7e2(0x200)][_0x49f7e2(0x5c6)]>=ImageManager[_0x49f7e2(0x5b8)]){const _0x2c319c=this[_0x49f7e2(0x200)];return _0x2c319c[Math[_0x49f7e2(0x31e)](Math['random']()*_0x2c319c[_0x49f7e2(0x5c6)])];}let _0x3a4eca=ColorManager['WEATHER_ASH_COLORS'];const _0xdb382e=_0x3a4eca[Math[_0x49f7e2(0x31e)](Math[_0x49f7e2(0x509)]()*_0x3a4eca[_0x49f7e2(0x5c6)])];_0x3a4eca=ColorManager[_0x49f7e2(0x578)];const _0x5e9314=_0x3a4eca[Math[_0x49f7e2(0x31e)](Math[_0x49f7e2(0x509)]()*_0x3a4eca[_0x49f7e2(0x5c6)])];_0x3a4eca=ColorManager[_0x49f7e2(0x339)];const _0x300ab4=_0x3a4eca[Math[_0x49f7e2(0x31e)](Math['random']()*_0x3a4eca[_0x49f7e2(0x5c6)])],_0x39c34f=new Bitmap(0x3e8,0x3e8);_0x39c34f[_0x49f7e2(0x5d0)](0x1f4,0x258,0xaf,_0xdb382e,0x40,0x14),_0x39c34f[_0x49f7e2(0x5d0)](0x1f4,0x1f4,0xc8,_0x300ab4,0x40,0x19),_0x39c34f[_0x49f7e2(0x5d0)](0x1f4,0x1c2,0xa0,_0x5e9314,0x40,0x1e),_0x39c34f['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x49f7e2(0x566)](_0x49f7e2(0x565));return this['_cached_WeatherEffects_Fumes']=this[_0x49f7e2(0x200)]||[],this[_0x49f7e2(0x200)][_0x49f7e2(0x4ee)](_0x39c34f),_0x39c34f;},Bitmap[_0x32d3d9(0x2c1)][_0x32d3d9(0x5fb)]=function(_0x5efd2e,_0x2b13ec,_0x236887){const _0x59e054=_0x32d3d9,_0x3d655c=this[_0x59e054(0x2d3)];_0x3d655c[_0x59e054(0x431)](),_0x3d655c[_0x59e054(0x3f2)]=_0x59e054(0x210),_0x3d655c[_0x59e054(0x295)](),_0x3d655c['arc'](_0x5efd2e,_0x2b13ec,_0x236887,0x0,0x2*Math['PI'],![]),_0x3d655c[_0x59e054(0x432)](),_0x3d655c[_0x59e054(0x48f)](),this[_0x59e054(0x3c1)][_0x59e054(0x58f)]();},Bitmap[_0x32d3d9(0x2c1)][_0x32d3d9(0x5ae)]=function(_0x252ddf,_0x385b27,_0xbb3eb2,_0x309559,_0x208e79,_0x3e8ea8){const _0x3c8bd4=_0x32d3d9,_0x2e7271=this[_0x3c8bd4(0x354)];_0x2e7271['save'](),_0x2e7271[_0x3c8bd4(0x312)]=_0x385b27,_0x2e7271[_0x3c8bd4(0x295)](),_0x2e7271[_0x3c8bd4(0x5b4)](_0x252ddf[0x0],_0x252ddf[0x1]);for(var _0x2f6ddb=0x2;_0x2f6ddb<_0x252ddf[_0x3c8bd4(0x5c6)];_0x2f6ddb+=0x2){_0x2e7271[_0x3c8bd4(0x305)](_0x252ddf[_0x2f6ddb],_0x252ddf[_0x2f6ddb+0x1]);}_0x2e7271[_0x3c8bd4(0x305)](_0x252ddf[0x0],_0x252ddf[0x1]),_0x2e7271[_0x3c8bd4(0x206)]=_0xbb3eb2,_0x2e7271[_0x3c8bd4(0x2ee)]=_0x309559,_0x3e8ea8&&_0x2e7271[_0x3c8bd4(0x4ca)](),_0x2e7271[_0x3c8bd4(0x405)]=_0x208e79,_0x2e7271[_0x3c8bd4(0x432)](),_0x2e7271[_0x3c8bd4(0x405)]=0x1,_0x2e7271[_0x3c8bd4(0x48f)]();},Bitmap[_0x32d3d9(0x2c1)][_0x32d3d9(0x243)]=function(_0x455d36,_0x5b2495,_0x129460,_0xc2b645,_0x28259f,_0x182eb6,_0x2429ff,_0x385ec9){const _0x230090=_0x32d3d9;_0x182eb6=_0x182eb6[_0x230090(0x1f8)](0.000001,0.999999);const _0x4781aa=this['context'];_0x4781aa['save']();const _0x4e74a4=_0xc2b645*(Math['PI']/0xb4),_0x236dd8=_0x129460*0x2;_0x4781aa[_0x230090(0x5d4)](_0x455d36-_0x129460,_0x5b2495-_0x129460);const _0x4c5f25=_0x4781aa[_0x230090(0x369)](_0x129460,_0x129460,_0x385ec9,_0x129460,_0x129460,_0x129460),_0x7e8619=ColorManager['hexToRgba'](_0x28259f,_0x2429ff/0x2),_0x81c39a=ColorManager[_0x230090(0x3d6)](_0x28259f,_0x2429ff),_0x237014=ColorManager[_0x230090(0x3d6)](_0x28259f,0x0);_0x4c5f25[_0x230090(0x3e2)](0x0,_0x7e8619),_0x4c5f25[_0x230090(0x3e2)](_0x182eb6/0x2,_0x81c39a),_0x4c5f25[_0x230090(0x3e2)](_0x182eb6,_0x81c39a),_0x4c5f25[_0x230090(0x3e2)](0x1,_0x237014),_0x4781aa[_0x230090(0x312)]=_0x4c5f25,_0x4781aa[_0x230090(0x295)](),_0x4781aa[_0x230090(0x5b4)](_0x129460,_0x129460),_0x4781aa[_0x230090(0x305)](_0x236dd8,_0x129460),_0x4781aa[_0x230090(0x5bb)](_0x129460,_0x129460,_0x129460,0x0,_0x4e74a4),_0x4781aa[_0x230090(0x305)](_0x129460,_0x129460),_0x4781aa[_0x230090(0x432)](),_0x4781aa['save'](),_0x4781aa[_0x230090(0x48f)](),this[_0x230090(0x3c1)][_0x230090(0x58f)]();},Bitmap[_0x32d3d9(0x2c1)][_0x32d3d9(0x261)]=function(_0x451ab1,_0x16dd2c,_0x7ec237,_0x5f78b3,_0x4992cb,_0x14b780,_0x502f0e){const _0x59300d=_0x32d3d9,_0x2d8ec7=_0x5f78b3/_0x7ec237,_0x27e877=this['_context'];_0x27e877[_0x59300d(0x431)](),_0x27e877[_0x59300d(0x289)](0x1,_0x2d8ec7),this[_0x59300d(0x243)](_0x451ab1,_0x16dd2c/_0x2d8ec7,_0x7ec237,0x168,_0x4992cb,_0x14b780,_0x502f0e,0x0),_0x27e877[_0x59300d(0x48f)](),this[_0x59300d(0x3c1)][_0x59300d(0x58f)]();},Bitmap['prototype'][_0x32d3d9(0x5d0)]=function(_0x51f9ea,_0x272877,_0x5955e6,_0x368234,_0xa0d577,_0x2ce515){const _0x2d807b=_0x32d3d9,_0x1c369a=this[_0x2d807b(0x354)];_0x5955e6=_0x5955e6||0x1;const _0x4b1998=_0x5955e6*0x3/0x5;_0xa0d577=_0xa0d577??0xff,_0x2ce515=_0x2ce515??0xa;const _0x12cfef=ColorManager[_0x2d807b(0x319)](_0x368234),_0x97bb31=_0x1c369a['createRadialGradient'](_0x4b1998,_0x4b1998,0x0,_0x4b1998,_0x4b1998,_0x4b1998),_0x3027d5=_0x2d807b(0x47e)['format'](_0x12cfef[0x0],_0x12cfef[0x1],_0x12cfef[0x2],_0xa0d577/0xff),_0x1fcace=_0x2d807b(0x47e)['format'](_0x12cfef[0x0],_0x12cfef[0x1],_0x12cfef[0x2],0x0);_0x97bb31[_0x2d807b(0x3e2)](0x0,_0x3027d5),_0x97bb31['addColorStop'](0x1,_0x1fcace);const _0x4889ee=_0x4b1998*0x2,_0x44b7f5=ImageManager[_0x2d807b(0x268)](_0x4889ee,_0x4889ee);_0x44b7f5[_0x2d807b(0x312)]=_0x97bb31,_0x44b7f5[_0x2d807b(0x295)](),_0x44b7f5[_0x2d807b(0x5bb)](_0x4b1998,_0x4b1998,_0x4b1998,0x0,Math['PI']*0x2,!![]),_0x44b7f5[_0x2d807b(0x432)]();for(let _0x427013=0x0;_0x427013<_0x2ce515;_0x427013++){const _0x776919=Math[_0x2d807b(0x509)]()*(Math['PI']*0x2),_0x41fc8b=Math[_0x2d807b(0x509)]()*Math[_0x2d807b(0x446)](_0x776919)*_0x5955e6+(_0x51f9ea-_0x4b1998),_0x52fcc2=Math[_0x2d807b(0x509)]()*Math[_0x2d807b(0x5e5)](_0x776919)*_0x5955e6+(_0x272877-_0x4b1998);_0x1c369a[_0x2d807b(0x5f3)](ImageManager[_0x2d807b(0x4bb)](),_0x41fc8b,_0x52fcc2);}},Bitmap[_0x32d3d9(0x2c1)][_0x32d3d9(0x4e1)]=function(_0xa90230,_0xa57f2e,_0x200e75,_0x1a281b,_0x36c439,_0x4e8792,_0x19f826,_0x551469){const _0x32f584=_0x32d3d9;_0x551469=_0x551469||0x3;const _0x1b3fa1=this['context'];let _0x5650f6=Math['PI']/0x2*_0x551469,_0x2ec44=_0xa90230,_0x288257=_0xa57f2e,_0x513a92=Math['PI']/_0x36c439;_0x1b3fa1[_0x32f584(0x431)](),_0x1b3fa1['beginPath'](),_0x1b3fa1[_0x32f584(0x5b4)](_0xa90230,_0xa57f2e-_0x4e8792);for(let _0x4e37c2=0x0;_0x4e37c2<_0x36c439;_0x4e37c2++){_0x2ec44=_0xa90230+Math[_0x32f584(0x5e5)](_0x5650f6)*_0x4e8792,_0x288257=_0xa57f2e+Math[_0x32f584(0x446)](_0x5650f6)*_0x4e8792,_0x1b3fa1[_0x32f584(0x305)](_0x2ec44,_0x288257),_0x5650f6+=_0x513a92,_0x2ec44=_0xa90230+Math[_0x32f584(0x5e5)](_0x5650f6)*_0x19f826,_0x288257=_0xa57f2e+Math['sin'](_0x5650f6)*_0x19f826,_0x1b3fa1['lineTo'](_0x2ec44,_0x288257),_0x5650f6+=_0x513a92;}_0x1b3fa1[_0x32f584(0x305)](_0xa90230,_0xa57f2e-_0x4e8792),_0x1b3fa1[_0x32f584(0x2cb)](),_0x1b3fa1[_0x32f584(0x2ee)]=0x0,_0x1b3fa1[_0x32f584(0x2ee)]>0x1&&(_0x1b3fa1[_0x32f584(0x2ee)]=_0x1b3fa1[_0x32f584(0x2ee)]-0x1,_0x1b3fa1[_0x32f584(0x206)]=_0x1a281b,_0x1b3fa1['stroke']()),_0x1b3fa1[_0x32f584(0x312)]=_0x200e75,_0x1b3fa1[_0x32f584(0x432)](),_0x1b3fa1[_0x32f584(0x48f)](),this['_baseTexture'][_0x32f584(0x58f)]();},Bitmap[_0x32d3d9(0x2c1)][_0x32d3d9(0x3a4)]=function(){const _0x3a37ed=_0x32d3d9,_0x53b178=0x6,_0x42bdcc=this[_0x3a37ed(0x2d3)],_0x4497e2=this[_0x3a37ed(0x3b2)]/0x2,_0x5ea095=this[_0x3a37ed(0x58a)]/0x2;this[_0x3a37ed(0x27a)]=0x3,this[_0x3a37ed(0x5a7)]=0x2+Math[_0x3a37ed(0x4e6)](0x2),this[_0x3a37ed(0x25d)]=Math[_0x3a37ed(0x5a5)](_0x4497e2,_0x5ea095)*0x2/0x3,this[_0x3a37ed(0x3d5)]=Math['PI']*0x2*(Math[_0x3a37ed(0x509)]()*0.15+0.7),this[_0x3a37ed(0x1f3)]=Math[_0x3a37ed(0x277)](Math[_0x3a37ed(0x346)](this[_0x3a37ed(0x3b2)]/0xc),0x2),_0x42bdcc['translate'](_0x4497e2,_0x5ea095);for(let _0xb5d0db=0x0;_0xb5d0db<_0x53b178;_0xb5d0db++){this[_0x3a37ed(0x31c)](0x0),_0x42bdcc[_0x3a37ed(0x43a)](Math['PI']*0x2/_0x53b178);}},Bitmap[_0x32d3d9(0x2c1)]['drawSnowflakeLine']=function(_0x46e9b6){const _0x3da96f=_0x32d3d9;if(_0x46e9b6>this[_0x3da96f(0x27a)])return;const _0x1ec9d8=this[_0x3da96f(0x2d3)];_0x1ec9d8[_0x3da96f(0x206)]='#ffffff',_0x1ec9d8[_0x3da96f(0x2ee)]=0x3,_0x1ec9d8[_0x3da96f(0x295)](),_0x1ec9d8[_0x3da96f(0x5b4)](0x0,0x0),_0x1ec9d8['lineTo'](0x0+this[_0x3da96f(0x25d)],0x0),_0x1ec9d8['stroke']();for(let _0x59930a=0x1;_0x59930a<this[_0x3da96f(0x5a7)]+0x1;_0x59930a++){_0x1ec9d8[_0x3da96f(0x431)](),_0x1ec9d8[_0x3da96f(0x5d4)](this[_0x3da96f(0x25d)]*_0x59930a/(this[_0x3da96f(0x5a7)]+0x1),0x0),_0x1ec9d8['scale'](0.5,0.5),_0x1ec9d8[_0x3da96f(0x431)](),_0x1ec9d8[_0x3da96f(0x43a)](this[_0x3da96f(0x3d5)]),this['drawSnowflakeLine'](_0x46e9b6+0x1),_0x1ec9d8[_0x3da96f(0x48f)](),_0x1ec9d8['save'](),_0x1ec9d8['rotate'](-this[_0x3da96f(0x3d5)]),this[_0x3da96f(0x31c)](_0x46e9b6+0x1),_0x1ec9d8[_0x3da96f(0x48f)](),_0x1ec9d8[_0x3da96f(0x48f)]();}},Bitmap['prototype'][_0x32d3d9(0x500)]=function(_0x3db2b3,_0xcfea42,_0x27e110,_0x5e9a66){const _0x210002=_0x32d3d9;let _0x11e228=0x1e,_0x2bdffe=Math[_0x210002(0x31e)](_0x5e9a66/0x6),_0x53faf6=0x10;const _0x21ce64=(0xff-_0x53faf6)/_0x2bdffe,_0xa761e1=(0xff-_0x11e228)/_0x2bdffe,_0x4d0984=Math[_0x210002(0x31e)](_0x5e9a66/_0x2bdffe),_0x230fa1=_0x27e110/0x10,_0x409018=_0xcfea42;let _0x31f789=Math[_0x210002(0x4e6)](0xf4240),_0x4e20bc=0x10,_0x274c52=_0x27e110/0x2,_0x531f4b=Math[_0x210002(0x277)](0x4,_0x27e110/0x10);_0x3db2b3-=_0x5e9a66;while(_0x2bdffe--){_0x11e228+=_0xa761e1,_0x531f4b+=_0x230fa1,_0x53faf6+=_0x21ce64,_0x3db2b3+=_0x4d0984,_0xcfea42=_0x409018+Math[_0x210002(0x5e5)](_0x31f789)*_0x274c52/0x2,_0x31f789+=Math[_0x210002(0x4e6)](_0x4e20bc)+_0x4e20bc/0x2,_0x5e9a66-=_0x4d0984;if(_0x5e9a66<=0x0)break;const _0x5aa206='rgba(255,\x20%1,\x200,\x201)'['format'](_0x11e228);this[_0x210002(0x520)]=_0x53faf6,this[_0x210002(0x3d8)](_0x3db2b3,_0xcfea42,_0x531f4b,_0x5aa206);}this['paintOpacity']=0xf0,this[_0x210002(0x3d8)](_0x3db2b3,_0xcfea42,_0x531f4b*0x3/0x4,_0x210002(0x21e));},Bitmap[_0x32d3d9(0x2c1)]['drawLightning']=function(){const _0x18e90c=_0x32d3d9,_0x4f5a78=this[_0x18e90c(0x354)],_0x139ac3=0xa,_0x28ca99=0x50,_0x19ab0b={'x':_0x139ac3,'y':this['height']/0x2},_0x26b231=0x8,_0x9cb833=this[_0x18e90c(0x3b2)]-_0x139ac3,_0x41b3e2=ColorManager[_0x18e90c(0x26c)][_0x18e90c(0x33a)](),_0x36bee3=_0x41b3e2[Math[_0x18e90c(0x31e)](Math[_0x18e90c(0x509)]()*_0x41b3e2['length'])],_0x2d5000=0x2,_0xe6fe3f=this['width']/0x5;_0x4f5a78[_0x18e90c(0x3f2)]='lighter',_0x4f5a78[_0x18e90c(0x206)]=_0x36bee3,_0x4f5a78[_0x18e90c(0x493)]=_0x36bee3,_0x4f5a78['fillStyle']=_0x36bee3;let _0x480956=[],_0x243ba6=_0x19ab0b['x']+_0x9cb833;_0x480956[_0x18e90c(0x4ee)]({'x':_0x19ab0b['x'],'y':_0x19ab0b['y']}),_0x480956['push']({'x':_0x9cb833+(Math['random']()-0.9)*_0x28ca99,'y':Math['random']()*(this[_0x18e90c(0x58a)]-0x64)+_0x28ca99});let _0x47010d=_0xe6fe3f;while(_0x243ba6>_0x26b231){const _0x494254=[];for(var _0x4e6c83=0x0;_0x4e6c83<_0x480956['length']-0x1;_0x4e6c83++){var _0x59b965=_0x480956[_0x4e6c83],_0x400d24=_0x480956[_0x4e6c83+0x1],_0x3fef06=(_0x59b965['y']+_0x400d24['y'])/0x2,_0x173bb9=_0x3fef06+(Math[_0x18e90c(0x509)]()*0x2-0x1)*_0x47010d;_0x494254[_0x18e90c(0x4ee)](_0x59b965,{'x':(_0x59b965['x']+_0x400d24['x'])/0x2,'y':_0x173bb9});}_0x494254[_0x18e90c(0x4ee)](_0x480956[_0x18e90c(0x349)]()),_0x480956=_0x494254,_0x47010d/=_0x2d5000,_0x243ba6/=0x2;}_0x4f5a78[_0x18e90c(0x3f2)]=_0x18e90c(0x5bd),_0x4f5a78['shadowBlur']=0xf,_0x4f5a78[_0x18e90c(0x295)]();for(var _0x4e6c83=0x0;_0x4e6c83<_0x480956[_0x18e90c(0x5c6)];_0x4e6c83++){_0x4f5a78[_0x18e90c(0x305)](_0x480956[_0x4e6c83]['x'],_0x480956[_0x4e6c83]['y']);}let _0x60ddd7=0x3;while(_0x60ddd7--)_0x4f5a78[_0x18e90c(0x4ca)]();_0x4f5a78[_0x18e90c(0x48f)](),this[_0x18e90c(0x3c1)][_0x18e90c(0x58f)]();},Bitmap[_0x32d3d9(0x2c1)][_0x32d3d9(0x404)]=function(_0x565114){const _0x361d7e=_0x32d3d9,_0x5ba605=this[_0x361d7e(0x354)];_0x565114=_0x565114||[_0x361d7e(0x20f),_0x361d7e(0x2e0),_0x361d7e(0x307),_0x361d7e(0x3b1)];const _0x27e7f3=_0x565114[0x4]||'#000000',_0x3eb94a=_0x565114[0x5]||_0x361d7e(0x526);_0x5ba605[_0x361d7e(0x431)](),_0x5ba605[_0x361d7e(0x3e7)](0x0,0.162467,-0.162467,0x0,101.142,-4.33347),_0x5ba605[_0x361d7e(0x312)]=_0x565114[0x0],(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605[_0x361d7e(0x5b4)](555.3,409.4),_0x5ba605[_0x361d7e(0x227)](527.4,409.4,497.2,419.2,497.3,436.6),_0x5ba605[_0x361d7e(0x227)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x5ba605['bezierCurveTo'](463.7,482.7,447.7,487.4,391.9,479.6),_0x5ba605['lineTo'](383.8,481.2),_0x5ba605[_0x361d7e(0x305)](381.2,481.7),_0x5ba605[_0x361d7e(0x227)](376.9,509.6,372.6,548.2,346.8,563.2),_0x5ba605[_0x361d7e(0x227)](332.8,526.3,293.1,567.7,267.3,582.7),_0x5ba605[_0x361d7e(0x227)](307.4,497.6,232.9,526.3,215.7,563.2),_0x5ba605[_0x361d7e(0x227)](200.7,0x220,157.7,541.9,131.9,559.1),_0x5ba605['bezierCurveTo'](140.4,545.2,146.9,526.3,148.2,507.1),_0x5ba605[_0x361d7e(0x227)](149.1,493.9,147.6,480.6,142.6,468.8),_0x5ba605['bezierCurveTo'](168.4,466.7,236.8,435.6,196.3,408.6),_0x5ba605['bezierCurveTo'](195.1,407.8,193.2,407.2,190.6,406.8),_0x5ba605['bezierCurveTo'](170.3,403.6,111.9,412.7,90.9,427.9),_0x5ba605[_0x361d7e(0x227)](104.7,374.2,66.4,0x168,39.7,345.5),_0x5ba605[_0x361d7e(0x227)](39.7,345.5,104.6,326.9,104.6,279.6),_0x5ba605[_0x361d7e(0x227)](129.9,305.1,168.2,305.4,189.7,290.3),_0x5ba605[_0x361d7e(0x227)](215.5,273.1,172.5,245.2,157.5,238.7),_0x5ba605[_0x361d7e(0x227)](168.2,234.4,185.4,230.2,185.4,215.2),_0x5ba605[_0x361d7e(0x227)](185.4,184.8,165.4,0x9d,146.1,0x8e),_0x5ba605['bezierCurveTo'](200.5,133.4,185.4,27.6,185.4,27.6),_0x5ba605[_0x361d7e(0x227)](185.4,27.6,232.7,96.9,287.1,77.6),_0x5ba605[_0x361d7e(0x227)](278.5,116.3,282.2,163.6,309.4,0xaa),_0x5ba605[_0x361d7e(0x227)](319.9,172.5,346.7,161.4,346.7,161.4),_0x5ba605[_0x361d7e(0x227)](343.2,202.2,345.5,215.3,369.4,215.3),_0x5ba605[_0x361d7e(0x227)](392.3,215.3,413.3,0xaa,416.5,133.5),_0x5ba605[_0x361d7e(0x227)](447.6,142.1,493.3,0x7e,527.7,89.4),_0x5ba605[_0x361d7e(0x227)](527.2,90.9,502.6,170.4,533.7,206.5),_0x5ba605['bezierCurveTo'](504.5,211.4,477.2,236.8,474.1,0x100),_0x5ba605[_0x361d7e(0x227)](0x1d8,269.2,481.3,279.6,509.4,278.3),_0x5ba605['bezierCurveTo'](512.3,278.2,515.3,277.9,518.6,277.5),_0x5ba605[_0x361d7e(0x227)](510.4,326.9,593.3,323.5,593.3,323.5),_0x5ba605[_0x361d7e(0x227)](561.3,347.2,541.7,0x172,555.3,409.4)),_0x5ba605[_0x361d7e(0x432)](),_0x5ba605[_0x361d7e(0x312)]=_0x565114[0x1],(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605['moveTo'](509.7,278.3),_0x5ba605['bezierCurveTo'](501.6,295.2,497.9,314.1,492.3,332.2),_0x5ba605[_0x361d7e(0x227)](482.3,364.8,462.5,0x18e,0x1ae,408.1),_0x5ba605[_0x361d7e(0x227)](422.2,410.5,413.9,411.5,406.4,414.8),_0x5ba605[_0x361d7e(0x227)](377.9,427.1,370.6,0x1d2,344.4,482.5),_0x5ba605[_0x361d7e(0x227)](307.2,0x1fa,259.1,472.5,215.5,477.7),_0x5ba605[_0x361d7e(0x227)](191.1,480.7,170.2,495.6,148.3,507.2),_0x5ba605['bezierCurveTo'](149.2,0x1ee,147.7,480.7,142.7,468.9),_0x5ba605[_0x361d7e(0x227)](168.5,466.8,236.9,435.7,196.4,408.7),_0x5ba605[_0x361d7e(0x227)](195.2,407.9,193.3,407.3,190.7,406.9),_0x5ba605[_0x361d7e(0x227)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x5ba605[_0x361d7e(0x227)](104.8,374.3,66.5,360.1,39.8,345.6),_0x5ba605[_0x361d7e(0x227)](39.8,345.6,104.7,0x147,104.7,279.7),_0x5ba605['bezierCurveTo'](0x82,305.2,168.3,305.5,189.8,290.4),_0x5ba605['bezierCurveTo'](215.6,273.2,172.6,245.3,157.6,238.8),_0x5ba605['bezierCurveTo'](168.3,234.5,185.5,230.3,185.5,215.3),_0x5ba605['bezierCurveTo'](185.5,184.9,165.5,157.1,146.2,142.1),_0x5ba605[_0x361d7e(0x227)](200.6,133.5,185.5,27.7,185.5,27.7),_0x5ba605[_0x361d7e(0x227)](185.5,27.7,232.8,0x61,287.2,77.7),_0x5ba605[_0x361d7e(0x227)](278.6,116.4,282.3,163.7,309.5,170.1),_0x5ba605['bezierCurveTo'](0x140,172.6,346.8,161.5,346.8,161.5),_0x5ba605[_0x361d7e(0x227)](343.3,202.3,345.6,215.4,369.5,215.4),_0x5ba605['bezierCurveTo'](392.4,215.4,413.4,170.1,416.6,133.6),_0x5ba605[_0x361d7e(0x227)](447.7,142.2,493.4,126.1,527.8,89.5),_0x5ba605[_0x361d7e(0x227)](527.3,0x5b,502.7,170.5,533.8,206.6),_0x5ba605[_0x361d7e(0x227)](504.6,211.5,477.3,236.9,474.2,256.1),_0x5ba605[_0x361d7e(0x227)](472.2,269.3,481.5,279.6,509.7,278.3)),_0x5ba605[_0x361d7e(0x432)](),_0x5ba605[_0x361d7e(0x312)]=_0x565114[0x2],(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605['moveTo'](533.9,206.6),_0x5ba605[_0x361d7e(0x227)](504.7,211.5,477.4,236.9,474.3,256.1),_0x5ba605[_0x361d7e(0x227)](461.6,260.5,449.1,265.3,435.6,271.5),_0x5ba605[_0x361d7e(0x227)](420.6,278.4,403.5,280.9,390.2,290.6),_0x5ba605['bezierCurveTo'](0x173,304.6,364.5,329.8,357.1,352.4),_0x5ba605[_0x361d7e(0x227)](349.7,0x177,337.4,399.6,314.4,405.8),_0x5ba605['bezierCurveTo'](290.1,412.3,0x10a,395.2,0xf1,393.4),_0x5ba605[_0x361d7e(0x227)](223.2,392.1,206.8,398.4,190.7,406.9),_0x5ba605[_0x361d7e(0x227)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x5ba605[_0x361d7e(0x227)](104.8,374.3,66.5,360.1,39.8,345.6),_0x5ba605[_0x361d7e(0x227)](39.8,345.6,104.7,0x147,104.7,279.7),_0x5ba605[_0x361d7e(0x227)](0x82,305.2,168.3,305.5,189.8,290.4),_0x5ba605[_0x361d7e(0x227)](215.6,273.2,172.6,245.3,157.6,238.8),_0x5ba605[_0x361d7e(0x227)](168.3,234.5,185.5,230.3,185.5,215.3),_0x5ba605[_0x361d7e(0x227)](185.5,184.9,165.5,157.1,146.2,142.1),_0x5ba605[_0x361d7e(0x227)](200.6,133.5,185.5,27.7,185.5,27.7),_0x5ba605['bezierCurveTo'](185.5,27.7,232.8,0x61,287.2,77.7),_0x5ba605['bezierCurveTo'](278.6,116.4,282.3,163.7,309.5,170.1),_0x5ba605[_0x361d7e(0x227)](0x140,172.6,346.8,161.5,346.8,161.5),_0x5ba605[_0x361d7e(0x227)](343.3,202.3,345.6,215.4,369.5,215.4),_0x5ba605[_0x361d7e(0x227)](392.4,215.4,413.4,170.1,416.6,133.6),_0x5ba605[_0x361d7e(0x227)](447.7,142.2,493.4,126.1,527.8,89.5),_0x5ba605[_0x361d7e(0x227)](527.4,0x5b,502.8,170.4,533.9,206.6)),_0x5ba605[_0x361d7e(0x432)](),_0x5ba605[_0x361d7e(0x312)]=_0x565114[0x3],(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605[_0x361d7e(0x5b4)](120.7,325.8),_0x5ba605[_0x361d7e(0x227)](126.5,334.6,138.7,335.8,149.3,336.1),_0x5ba605[_0x361d7e(0x227)](193.7,337.4,238.1,338.7,282.5,0x154),_0x5ba605['bezierCurveTo'](289.7,340.2,297.6,340.2,303.3,335.8),_0x5ba605['bezierCurveTo'](312.9,328.2,310.8,312.8,317.4,302.5),_0x5ba605[_0x361d7e(0x227)](324.7,291.1,0x154,0x121,353.1,285.9),_0x5ba605[_0x361d7e(0x227)](405.5,273.6,444.9,231.7,0x1e1,191.8),_0x5ba605['bezierCurveTo'](486.2,186.1,491.6,0xb4,493.5,172.5),_0x5ba605['bezierCurveTo'](498.1,154.8,479.9,137.4,461.6,136.9),_0x5ba605[_0x361d7e(0x227)](443.3,136.5,426.8,0x94,414.2,161.3),_0x5ba605['bezierCurveTo'](401.7,174.6,398.5,197.8,383.5,208.2),_0x5ba605[_0x361d7e(0x227)](368.5,218.6,339.2,214.6,325.5,202.5),_0x5ba605['bezierCurveTo'](317.3,195.2,313.8,184.1,307.6,0xaf),_0x5ba605['bezierCurveTo'](291.6,151.6,259.3,144.6,241.8,122.3),_0x5ba605[_0x361d7e(0x227)](235.7,114.6,231.7,105.4,225.2,98.1),_0x5ba605['bezierCurveTo'](218.6,0x5b,0xd0,85.9,0xc7,89.8),_0x5ba605[_0x361d7e(0x227)](186.5,95.3,186.2,112.6,188.1,126.1),_0x5ba605['bezierCurveTo'](192.5,0x9d,198.5,187.7,205.8,0xda),_0x5ba605[_0x361d7e(0x227)](211.1,239.7,216.2,265.5,201.2,282.2),_0x5ba605['bezierCurveTo'](189.7,295.1,108.1,306.6,120.7,325.8)),_0x5ba605[_0x361d7e(0x432)](),_0x5ba605[_0x361d7e(0x206)]=_0x3eb94a,_0x5ba605[_0x361d7e(0x2ee)]=0x5,(_0x5ba605['beginPath'](),_0x5ba605[_0x361d7e(0x5b4)](555.3,409.4),_0x5ba605['bezierCurveTo'](527.4,409.4,497.2,419.2,497.3,436.6),_0x5ba605[_0x361d7e(0x227)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x5ba605['bezierCurveTo'](463.7,482.7,447.7,487.4,391.9,479.6),_0x5ba605['lineTo'](383.8,481.2),_0x5ba605[_0x361d7e(0x305)](381.2,481.7),_0x5ba605[_0x361d7e(0x227)](376.9,509.6,372.6,548.2,346.8,563.2),_0x5ba605[_0x361d7e(0x227)](332.8,526.3,293.1,567.7,267.3,582.7),_0x5ba605[_0x361d7e(0x227)](307.4,497.6,232.9,526.3,215.7,563.2),_0x5ba605[_0x361d7e(0x227)](200.7,0x220,157.7,541.9,131.9,559.1),_0x5ba605[_0x361d7e(0x227)](146.3,535.7,154.9,497.6,142.6,468.8),_0x5ba605[_0x361d7e(0x227)](168.4,466.7,236.8,435.6,196.3,408.6),_0x5ba605['bezierCurveTo'](185.6,401.4,114.6,410.7,0x5b,427.9),_0x5ba605['bezierCurveTo'](104.8,374.2,66.5,0x168,39.8,345.5),_0x5ba605['bezierCurveTo'](39.8,345.5,104.7,326.9,104.7,279.6),_0x5ba605[_0x361d7e(0x227)](0x82,305.1,168.3,305.4,189.8,290.3),_0x5ba605[_0x361d7e(0x227)](215.6,273.1,172.6,245.2,157.6,238.7),_0x5ba605['bezierCurveTo'](168.3,234.4,185.5,230.2,185.5,215.2),_0x5ba605[_0x361d7e(0x227)](185.5,184.8,165.5,0x9d,146.2,0x8e),_0x5ba605[_0x361d7e(0x227)](200.6,133.4,185.5,27.6,185.5,27.6),_0x5ba605[_0x361d7e(0x227)](185.5,27.6,232.8,96.9,287.2,77.6),_0x5ba605[_0x361d7e(0x227)](278.6,116.3,282.3,163.6,309.5,0xaa),_0x5ba605['bezierCurveTo'](0x140,172.5,346.8,161.4,346.8,161.4),_0x5ba605[_0x361d7e(0x227)](343.3,202.2,345.6,215.3,369.5,215.3),_0x5ba605[_0x361d7e(0x227)](392.4,215.3,413.4,0xaa,416.6,133.5),_0x5ba605[_0x361d7e(0x227)](447.7,142.1,493.4,0x7e,527.8,89.4),_0x5ba605[_0x361d7e(0x227)](527.3,90.9,502.7,170.4,533.8,206.5),_0x5ba605[_0x361d7e(0x227)](482.3,215.2,437.1,287.1,518.8,277.4),_0x5ba605[_0x361d7e(0x227)](510.6,326.8,593.5,323.4,593.5,323.4),_0x5ba605[_0x361d7e(0x227)](561.3,347.2,541.7,0x172,555.3,409.4)),_0x5ba605[_0x361d7e(0x4ca)](),_0x5ba605['fillStyle']=_0x27e7f3,(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605[_0x361d7e(0x5b4)](236.9,152.9),_0x5ba605[_0x361d7e(0x227)](245.5,185.6,255.3,217.6,268.2,0xf9),_0x5ba605[_0x361d7e(0x227)](281.4,281.1,296.5,312.4,310.8,344.1),_0x5ba605[_0x361d7e(0x227)](338.4,0x195,369.3,464.6,393.1,527.2),_0x5ba605[_0x361d7e(0x227)](0x18f,542.9,404.5,558.8,408.9,0x23f),_0x5ba605[_0x361d7e(0x227)](0x19b,582.4,412.8,589.9,414.4,597.4),_0x5ba605['bezierCurveTo'](415.2,601.3,0x1a0,605.1,416.7,0x261),_0x5ba605[_0x361d7e(0x227)](417.6,0x266,419.5,617.1,423.2,620.4),_0x5ba605[_0x361d7e(0x227)](426.8,623.6,432.5,623.3,435.1,618.9),_0x5ba605[_0x361d7e(0x227)](437.5,614.8,438.8,611.3,0x1b6,606.5),_0x5ba605[_0x361d7e(0x227)](437.4,603.1,436.7,599.6,0x1b4,596.2),_0x5ba605[_0x361d7e(0x227)](434.5,589.4,432.8,582.7,430.8,0x240),_0x5ba605['bezierCurveTo'](426.8,561.9,421.9,0x224,416.7,534.4),_0x5ba605['bezierCurveTo'](0x195,0x1f8,0x187,474.6,376.2,445.6),_0x5ba605['bezierCurveTo'](344.5,383.6,308.7,323.8,279.9,260.4),_0x5ba605['bezierCurveTo'](264.1,225.5,0xf8,189.7,237.6,152.8),_0x5ba605[_0x361d7e(0x227)](237.5,152.3,236.7,152.5,236.9,152.9)),_0x5ba605['fill'](),_0x5ba605[_0x361d7e(0x312)]=_0x27e7f3,(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605[_0x361d7e(0x5b4)](436.6,221.3),_0x5ba605[_0x361d7e(0x227)](415.7,0xfa,403.1,0x11a,395.3,316.5),_0x5ba605[_0x361d7e(0x227)](388.4,347.3,382.8,379.1,0x17c,410.6),_0x5ba605[_0x361d7e(0x227)](378.2,430.6,377.5,0x1c3,378.3,471.1),_0x5ba605[_0x361d7e(0x227)](378.6,477.6,388.6,477.7,388.5,471.1),_0x5ba605['bezierCurveTo'](388.2,453.4,387.8,435.8,388.7,418.1),_0x5ba605[_0x361d7e(0x227)](389.4,0x194,390.9,389.9,392.1,375.8),_0x5ba605[_0x361d7e(0x227)](395.2,341.9,398.1,308.4,409.7,276.1),_0x5ba605[_0x361d7e(0x227)](416.6,256.9,426.2,238.9,437.7,222.1),_0x5ba605['bezierCurveTo'](438.3,221.2,437.1,220.6,436.6,221.3)),_0x5ba605['fill'](),_0x5ba605[_0x361d7e(0x312)]=_0x27e7f3,(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605[_0x361d7e(0x5b4)](0x86,344.4),_0x5ba605[_0x361d7e(0x227)](209.5,355.1,275.3,397.6,335.7,441.6),_0x5ba605[_0x361d7e(0x227)](343.7,447.4,351.6,453.3,359.4,459.2),_0x5ba605[_0x361d7e(0x227)](363.3,462.2,367.2,465.1,371.2,468.1),_0x5ba605[_0x361d7e(0x227)](375.2,471.1,378.3,474.1,383.4,474.6),_0x5ba605[_0x361d7e(0x227)](385.5,474.8,387.6,472.1,386.8,470.1),_0x5ba605[_0x361d7e(0x227)](383.8,462.7,374.4,0x1ca,368.1,453.5),_0x5ba605['bezierCurveTo'](360.9,448.2,353.6,442.9,346.3,437.7),_0x5ba605[_0x361d7e(0x227)](330.9,426.7,315.3,416.1,299.1,406.2),_0x5ba605[_0x361d7e(0x227)](266.5,386.3,232.2,368.6,195.8,356.6),_0x5ba605['bezierCurveTo'](175.6,349.9,155.1,345.9,133.9,343.9),_0x5ba605[_0x361d7e(0x227)](133.7,343.9,133.6,344.4,0x86,344.4)),_0x5ba605['fill'](),_0x5ba605[_0x361d7e(0x312)]=_0x27e7f3,(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605[_0x361d7e(0x5b4)](458.7,294.7),_0x5ba605[_0x361d7e(0x227)](458.7,294.7,0x1c9,295.4,0x1c6,296.6),_0x5ba605[_0x361d7e(0x227)](0x1c3,297.8,446.6,299.5,441.2,301.6),_0x5ba605['bezierCurveTo'](435.8,303.7,429.4,306.2,422.4,309.1),_0x5ba605[_0x361d7e(0x227)](415.4,0x138,407.8,315.5,400.2,319.5),_0x5ba605[_0x361d7e(0x227)](399.3,0x140,398.5,320.4,397.6,320.9),_0x5ba605['lineTo'](396.2,321.7),_0x5ba605[_0x361d7e(0x305)](395.5,322.1),_0x5ba605[_0x361d7e(0x227)](395.4,322.2,395.4,0x142,395.4,0x142),_0x5ba605['lineTo'](395.3,321.8),_0x5ba605[_0x361d7e(0x305)](395.1,321.5),_0x5ba605[_0x361d7e(0x227)](394.5,320.6,393.9,319.7,393.3,318.8),_0x5ba605[_0x361d7e(0x305)](392.4,317.5),_0x5ba605[_0x361d7e(0x305)](0x188,316.7),_0x5ba605['bezierCurveTo'](390.9,314.6,390.1,312.6,389.3,310.6),_0x5ba605[_0x361d7e(0x227)](387.9,306.6,0x183,302.6,386.2,298.9),_0x5ba605[_0x361d7e(0x227)](384.7,291.5,0x180,284.8,383.6,279.1),_0x5ba605[_0x361d7e(0x227)](382.8,267.8,383.4,260.5,383.5,259.4),_0x5ba605[_0x361d7e(0x227)](383.6,258.2,384.2,265.4,386.3,0x115),_0x5ba605[_0x361d7e(0x227)](387.4,282.8,388.8,289.7,390.7,297.2),_0x5ba605[_0x361d7e(0x227)](391.7,300.9,392.8,304.8,394.3,308.5),_0x5ba605[_0x361d7e(0x227)](395.1,310.4,395.8,312.2,396.8,313.9),_0x5ba605[_0x361d7e(0x305)](397.1,314.6),_0x5ba605[_0x361d7e(0x227)](397.1,314.7,397.1,314.6,397.1,314.7),_0x5ba605[_0x361d7e(0x305)](397.1,314.7),_0x5ba605[_0x361d7e(0x305)](397.1,314.7),_0x5ba605[_0x361d7e(0x305)](397.1,314.7),_0x5ba605[_0x361d7e(0x305)](397.1,314.7),_0x5ba605[_0x361d7e(0x305)](397.1,314.7),_0x5ba605['lineTo'](397.4,314.5),_0x5ba605[_0x361d7e(0x227)](405.3,310.3,413.3,307.1,420.6,304.6),_0x5ba605['bezierCurveTo'](427.9,302.1,434.6,300.3,440.2,298.9),_0x5ba605[_0x361d7e(0x227)](445.8,297.5,450.4,296.5,453.6,295.8),_0x5ba605[_0x361d7e(0x227)](456.9,295.1,458.7,294.7,458.7,294.7)),_0x5ba605['fill'](),_0x5ba605[_0x361d7e(0x312)]=_0x27e7f3,(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605[_0x361d7e(0x5b4)](213.6,309.8),_0x5ba605[_0x361d7e(0x227)](213.6,309.8,214.3,310.1,215.7,310.8),_0x5ba605[_0x361d7e(0x227)](216.4,311.1,217.2,311.5,218.2,311.9),_0x5ba605['bezierCurveTo'](219.2,312.3,220.3,312.8,221.7,313.3),_0x5ba605[_0x361d7e(0x227)](224.3,314.4,227.6,315.5,231.4,316.8),_0x5ba605[_0x361d7e(0x227)](235.2,0x13e,239.6,319.4,244.4,320.8),_0x5ba605[_0x361d7e(0x227)](254.1,323.6,265.8,326.5,278.7,330.5),_0x5ba605['bezierCurveTo'](285.1,332.6,291.8,334.9,298.6,0x152),_0x5ba605[_0x361d7e(0x227)](305.4,0x155,312.2,344.8,318.5,349.8),_0x5ba605[_0x361d7e(0x227)](319.9,350.9,321.2,0x160,322.5,353.2),_0x5ba605[_0x361d7e(0x227)](323.1,353.8,323.8,354.4,324.4,354.9),_0x5ba605[_0x361d7e(0x227)](0x145,355.5,325.6,356.1,326.1,356.7),_0x5ba605[_0x361d7e(0x227)](326.4,0x165,326.7,357.3,0x147,357.6),_0x5ba605[_0x361d7e(0x305)](327.1,357.7),_0x5ba605[_0x361d7e(0x305)](327.1,357.7),_0x5ba605[_0x361d7e(0x305)](327.1,357.7),_0x5ba605[_0x361d7e(0x305)](327.1,357.7),_0x5ba605['lineTo'](327.1,357.8),_0x5ba605[_0x361d7e(0x227)](327.1,357.9,327.2,357.9,327.2,0x166),_0x5ba605['bezierCurveTo'](327.2,0x166,327.2,0x166,327.3,357.9),_0x5ba605['lineTo'](327.3,357.8),_0x5ba605[_0x361d7e(0x305)](327.3,357.8),_0x5ba605[_0x361d7e(0x305)](327.3,357.8),_0x5ba605[_0x361d7e(0x305)](327.3,357.7),_0x5ba605[_0x361d7e(0x305)](327.3,357.4),_0x5ba605['lineTo'](327.4,356.2),_0x5ba605['bezierCurveTo'](327.5,354.6,327.6,0x161,327.7,351.5),_0x5ba605[_0x361d7e(0x227)](327.8,349.9,0x148,348.4,328.1,346.9),_0x5ba605['bezierCurveTo'](328.7,340.8,329.6,335.1,330.5,329.7),_0x5ba605[_0x361d7e(0x227)](332.3,318.9,334.3,309.4,335.8,301.5),_0x5ba605[_0x361d7e(0x227)](0x153,285.6,340.2,275.5,340.5,273.7),_0x5ba605[_0x361d7e(0x227)](340.6,272.8,340.6,274.8,340.5,279.2),_0x5ba605[_0x361d7e(0x227)](340.3,283.6,339.8,290.3,338.8,298.8),_0x5ba605[_0x361d7e(0x227)](337.9,307.3,336.4,317.5,0x14f,328.9),_0x5ba605[_0x361d7e(0x227)](334.3,334.6,333.6,340.6,333.2,346.8),_0x5ba605[_0x361d7e(0x227)](333.1,348.4,0x14d,349.9,332.9,351.5),_0x5ba605['bezierCurveTo'](332.8,353.1,332.7,354.7,332.7,356.3),_0x5ba605['bezierCurveTo'](332.7,357.3,332.6,358.3,332.6,359.3),_0x5ba605[_0x361d7e(0x227)](332.5,360.9,332.6,362.6,332.5,364.2),_0x5ba605[_0x361d7e(0x227)](332.5,367.5,332.4,370.8,332.4,374.2),_0x5ba605['bezierCurveTo'](330.5,371.7,328.7,369.1,326.6,366.6),_0x5ba605[_0x361d7e(0x227)](325.6,365.3,324.6,364.1,323.6,362.8),_0x5ba605[_0x361d7e(0x305)](322.8,361.8),_0x5ba605[_0x361d7e(0x227)](322.6,361.6,322.5,361.5,322.4,361.4),_0x5ba605[_0x361d7e(0x305)](321.6,360.6),_0x5ba605[_0x361d7e(0x227)](321.1,360.1,320.6,359.5,0x140,0x167),_0x5ba605[_0x361d7e(0x305)](318.3,357.5),_0x5ba605['bezierCurveTo'](317.2,356.5,0x13c,355.5,314.8,354.6),_0x5ba605[_0x361d7e(0x227)](308.9,0x15e,302.5,346.4,296.1,343.3),_0x5ba605['bezierCurveTo'](289.7,340.2,283.2,337.7,276.9,335.4),_0x5ba605[_0x361d7e(0x227)](264.4,330.9,252.9,327.3,243.3,323.8),_0x5ba605[_0x361d7e(0x227)](238.5,322.1,234.2,320.4,230.5,318.8),_0x5ba605[_0x361d7e(0x227)](226.8,317.2,223.6,315.7,221.1,314.4),_0x5ba605['bezierCurveTo'](219.8,313.8,218.7,313.1,217.8,312.6),_0x5ba605[_0x361d7e(0x227)](216.8,312.1,0xd8,311.6,215.4,311.2),_0x5ba605['bezierCurveTo'](214.3,310.2,213.6,309.8,213.6,309.8)),_0x5ba605[_0x361d7e(0x432)](),_0x5ba605['fillStyle']=_0x27e7f3,(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605[_0x361d7e(0x5b4)](235.1,251.7),_0x5ba605[_0x361d7e(0x227)](235.1,251.7,236.5,252.2,238.9,253.2),_0x5ba605[_0x361d7e(0x227)](241.3,254.2,244.9,255.7,249.1,257.8),_0x5ba605['bezierCurveTo'](253.4,259.9,258.3,262.4,263.8,265.3),_0x5ba605['bezierCurveTo'](269.3,268.1,275.3,271.2,281.7,273.9),_0x5ba605['bezierCurveTo'](282.5,274.3,283.3,274.6,284.1,274.9),_0x5ba605[_0x361d7e(0x227)](284.5,275.1,284.9,275.2,285.3,275.4),_0x5ba605[_0x361d7e(0x305)](285.9,275.6),_0x5ba605[_0x361d7e(0x227)](0x11e,275.6,285.9,275.6,285.9,275.6),_0x5ba605[_0x361d7e(0x305)](0x11e,275.7),_0x5ba605[_0x361d7e(0x227)](0x11e,275.7,0x11e,275.7,0x11e,275.6),_0x5ba605[_0x361d7e(0x305)](0x11e,275.4),_0x5ba605[_0x361d7e(0x305)](0x11e,0x113),_0x5ba605[_0x361d7e(0x227)](286.1,274.2,286.2,273.5,286.3,272.8),_0x5ba605[_0x361d7e(0x227)](286.5,271.1,286.8,269.5,287.2,0x10c),_0x5ba605[_0x361d7e(0x227)](288.7,261.8,291.1,256.8,293.2,252.7),_0x5ba605[_0x361d7e(0x227)](295.4,248.6,297.3,245.4,298.8,243.1),_0x5ba605[_0x361d7e(0x227)](300.3,240.8,301.2,239.4,301.5,238.9),_0x5ba605[_0x361d7e(0x227)](301.8,238.5,301.4,239.7,300.5,242.1),_0x5ba605[_0x361d7e(0x227)](299.6,244.5,298.2,248.1,296.6,252.6),_0x5ba605[_0x361d7e(0x227)](0x127,257.1,293.2,262.5,292.1,268.5),_0x5ba605[_0x361d7e(0x227)](0x124,269.2,291.9,0x10e,291.8,270.8),_0x5ba605[_0x361d7e(0x227)](291.7,271.6,291.6,272.3,291.6,273.1),_0x5ba605[_0x361d7e(0x227)](291.6,273.5,291.6,273.9,291.5,274.3),_0x5ba605[_0x361d7e(0x305)](291.5,274.9),_0x5ba605[_0x361d7e(0x227)](291.5,275.1,291.5,275.2,291.5,275.6),_0x5ba605[_0x361d7e(0x227)](291.5,277.1,291.5,278.5,291.5,0x118),_0x5ba605[_0x361d7e(0x227)](291.5,280.8,291.5,281.7,291.5,282.5),_0x5ba605[_0x361d7e(0x305)](291.5,283.1),_0x5ba605[_0x361d7e(0x305)](291.5,283.4),_0x5ba605[_0x361d7e(0x305)](291.5,283.5),_0x5ba605['lineTo'](291.4,283.5),_0x5ba605[_0x361d7e(0x305)](291.3,283.4),_0x5ba605[_0x361d7e(0x305)](290.1,0x11b),_0x5ba605[_0x361d7e(0x227)](288.5,282.4,286.9,281.9,285.2,281.3),_0x5ba605[_0x361d7e(0x227)](284.8,281.2,284.3,0x119,0x11c,280.9),_0x5ba605[_0x361d7e(0x305)](283.3,280.6),_0x5ba605[_0x361d7e(0x305)](0x11a,280.1),_0x5ba605[_0x361d7e(0x227)](281.1,279.8,280.3,279.4,279.5,279.1),_0x5ba605[_0x361d7e(0x227)](272.7,276.2,266.7,272.7,261.4,269.4),_0x5ba605[_0x361d7e(0x227)](256.1,266.1,251.5,262.9,247.6,260.2),_0x5ba605[_0x361d7e(0x227)](243.7,257.5,240.6,255.4,238.4,253.9),_0x5ba605[_0x361d7e(0x227)](236.3,252.5,235.1,251.7,235.1,251.7)),_0x5ba605[_0x361d7e(0x432)](),_0x5ba605[_0x361d7e(0x312)]=_0x27e7f3,(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605[_0x361d7e(0x5b4)](235.1,0x1d7),_0x5ba605['bezierCurveTo'](235.1,0x1d7,237.1,469.6,240.8,466.9),_0x5ba605[_0x361d7e(0x227)](244.5,464.3,249.8,460.6,256.5,456.2),_0x5ba605[_0x361d7e(0x227)](263.3,451.8,271.4,446.8,281.1,442.1),_0x5ba605[_0x361d7e(0x227)](281.7,441.8,282.3,441.5,282.9,441.2),_0x5ba605['bezierCurveTo'](283.5,440.9,284.1,440.6,284.8,440.4),_0x5ba605['bezierCurveTo'](286.1,439.8,287.3,439.3,288.6,438.7),_0x5ba605[_0x361d7e(0x227)](291.2,437.7,293.9,436.6,296.7,435.7),_0x5ba605[_0x361d7e(0x227)](299.5,434.7,302.4,0x1b2,305.3,433.1),_0x5ba605[_0x361d7e(0x227)](308.3,432.4,311.3,431.7,314.4,431.2),_0x5ba605[_0x361d7e(0x227)](317.5,430.6,320.5,430.3,323.5,0x1ae),_0x5ba605[_0x361d7e(0x227)](324.2,429.9,0x145,429.9,325.7,429.8),_0x5ba605[_0x361d7e(0x305)](326.3,429.8),_0x5ba605[_0x361d7e(0x227)](326.4,429.8,326.4,429.8,326.4,429.8),_0x5ba605[_0x361d7e(0x305)](326.4,429.8),_0x5ba605['lineTo'](326.4,429.8),_0x5ba605[_0x361d7e(0x305)](326.4,429.8),_0x5ba605[_0x361d7e(0x227)](326.5,429.8,326.5,429.8,326.5,429.8),_0x5ba605[_0x361d7e(0x227)](326.5,429.8,326.5,429.8,326.5,429.7),_0x5ba605['bezierCurveTo'](326.2,429.2,0x146,428.6,325.7,428.1),_0x5ba605[_0x361d7e(0x227)](325.1,426.9,324.5,425.7,323.9,424.5),_0x5ba605[_0x361d7e(0x227)](322.7,422.1,321.4,419.8,320.2,417.6),_0x5ba605[_0x361d7e(0x227)](317.7,413.1,315.2,0x199,312.8,405.2),_0x5ba605[_0x361d7e(0x227)](311.5,403.3,310.4,401.5,309.2,399.7),_0x5ba605[_0x361d7e(0x227)](0x134,0x18e,306.8,396.3,305.7,394.7),_0x5ba605[_0x361d7e(0x227)](301.2,388.4,297.1,383.5,294.1,0x17c),_0x5ba605['bezierCurveTo'](0x123,376.5,289.1,374.4,288.5,373.8),_0x5ba605['bezierCurveTo'](287.9,373.2,289.6,374.5,292.9,377.3),_0x5ba605[_0x361d7e(0x227)](293.7,0x17a,294.7,378.8,295.6,379.8),_0x5ba605[_0x361d7e(0x227)](296.6,380.7,297.7,381.8,298.9,382.9),_0x5ba605[_0x361d7e(0x227)](300.1,0x180,301.2,385.3,302.5,386.6),_0x5ba605['bezierCurveTo'](303.8,387.9,305.1,389.4,306.5,390.9),_0x5ba605[_0x361d7e(0x227)](0x138,397.1,318.2,404.9,0x144,414.3),_0x5ba605[_0x361d7e(0x227)](324.7,415.5,325.5,416.6,326.2,417.9),_0x5ba605[_0x361d7e(0x227)](326.9,419.1,327.6,420.3,328.3,421.6),_0x5ba605[_0x361d7e(0x227)](0x149,422.8,329.7,424.1,330.4,425.4),_0x5ba605['bezierCurveTo'](330.7,0x1aa,331.1,426.7,331.4,427.4),_0x5ba605[_0x361d7e(0x227)](0x14c,428.6,332.6,429.9,333.2,431.2),_0x5ba605[_0x361d7e(0x305)](334.1,433.1),_0x5ba605[_0x361d7e(0x305)](334.5,434.1),_0x5ba605[_0x361d7e(0x305)](334.7,434.6),_0x5ba605[_0x361d7e(0x305)](334.8,434.7),_0x5ba605[_0x361d7e(0x305)](334.8,434.8),_0x5ba605['bezierCurveTo'](334.8,434.8,334.8,434.8,334.7,434.8),_0x5ba605[_0x361d7e(0x305)](334.4,434.8),_0x5ba605[_0x361d7e(0x227)](0x14d,434.9,331.6,435.1,330.2,435.3),_0x5ba605[_0x361d7e(0x227)](328.9,435.4,327.6,435.5,326.3,435.6),_0x5ba605['bezierCurveTo'](325.6,435.7,324.8,435.7,324.1,435.8),_0x5ba605[_0x361d7e(0x227)](321.2,436.2,318.2,436.5,315.3,437.1),_0x5ba605[_0x361d7e(0x227)](312.3,437.5,309.5,438.2,306.6,438.8),_0x5ba605['bezierCurveTo'](303.8,439.5,0x12d,440.2,298.3,441.1),_0x5ba605[_0x361d7e(0x227)](295.6,441.9,0x125,442.9,290.4,443.7),_0x5ba605['bezierCurveTo'](289.1,444.2,287.9,444.7,286.6,445.2),_0x5ba605[_0x361d7e(0x227)](0x11e,445.4,285.4,445.7,284.7,445.9),_0x5ba605['bezierCurveTo'](284.1,446.2,283.5,446.4,282.9,446.7),_0x5ba605['bezierCurveTo'](273.3,450.8,264.8,455.1,257.8,458.9),_0x5ba605[_0x361d7e(0x227)](243.8,466.3,235.1,0x1d7,235.1,0x1d7)),_0x5ba605[_0x361d7e(0x432)](),_0x5ba605['fillStyle']=_0x27e7f3,(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605[_0x361d7e(0x5b4)](0xb1,376.4),_0x5ba605[_0x361d7e(0x227)](0xb1,376.4,178.8,375.9,182.1,375.2),_0x5ba605[_0x361d7e(0x227)](185.4,374.6,190.3,373.8,196.5,373.5),_0x5ba605[_0x361d7e(0x227)](202.6,373.2,209.9,373.4,217.9,0x176),_0x5ba605['bezierCurveTo'](225.9,374.7,234.6,375.8,243.7,376.9),_0x5ba605[_0x361d7e(0x227)](244.3,0x179,244.8,0x179,245.4,377.1),_0x5ba605[_0x361d7e(0x305)](245.8,377.1),_0x5ba605[_0x361d7e(0x305)](245.8,377.1),_0x5ba605['lineTo'](245.8,377.1),_0x5ba605[_0x361d7e(0x305)](245.8,377.1),_0x5ba605[_0x361d7e(0x305)](245.9,377.1),_0x5ba605['bezierCurveTo'](245.9,377.1,245.9,377.1,245.9,0x179),_0x5ba605[_0x361d7e(0x305)](245.8,376.9),_0x5ba605[_0x361d7e(0x305)](245.8,376.8),_0x5ba605['lineTo'](245.4,376.3),_0x5ba605[_0x361d7e(0x227)](244.7,375.5,244.1,374.7,243.5,0x176),_0x5ba605['bezierCurveTo'](242.2,372.5,240.9,0x173,239.6,369.6),_0x5ba605[_0x361d7e(0x227)](234.4,0x16c,229.3,359.3,224.9,355.4),_0x5ba605[_0x361d7e(0x227)](216.1,347.6,210.3,342.8,209.4,0x156),_0x5ba605[_0x361d7e(0x227)](208.9,341.6,210.3,342.3,213.1,0x158),_0x5ba605[_0x361d7e(0x227)](215.9,345.7,220.1,348.3,225.3,351.9),_0x5ba605['bezierCurveTo'](230.4,355.5,236.4,0x168,242.6,365.6),_0x5ba605[_0x361d7e(0x227)](243.4,366.3,244.1,0x16f,244.9,367.8),_0x5ba605[_0x361d7e(0x227)](245.7,368.6,246.4,369.3,247.2,370.1),_0x5ba605[_0x361d7e(0x227)](0xf8,370.9,248.7,371.7,249.4,372.5),_0x5ba605['lineTo'](0xfa,373.1),_0x5ba605[_0x361d7e(0x227)](250.1,373.2,250.1,373.2,250.2,373.3),_0x5ba605[_0x361d7e(0x305)](250.4,373.6),_0x5ba605['lineTo'](250.9,374.2),_0x5ba605[_0x361d7e(0x227)](251.5,0x177,252.2,375.8,252.8,376.6),_0x5ba605[_0x361d7e(0x227)](254.1,378.2,255.4,379.9,256.7,381.7),_0x5ba605['lineTo'](257.7,0x17f),_0x5ba605[_0x361d7e(0x305)](258.2,383.7),_0x5ba605[_0x361d7e(0x305)](258.3,383.9),_0x5ba605['lineTo'](258.3,383.9),_0x5ba605[_0x361d7e(0x305)](258.3,383.9),_0x5ba605['lineTo'](258.2,383.9),_0x5ba605[_0x361d7e(0x305)](257.8,383.9),_0x5ba605[_0x361d7e(0x227)](256.7,383.8,255.6,383.7,254.6,383.6),_0x5ba605[_0x361d7e(0x227)](252.4,383.4,250.2,383.2,0xf8,383.1),_0x5ba605[_0x361d7e(0x227)](246.4,382.9,244.9,382.8,243.3,382.6),_0x5ba605[_0x361d7e(0x227)](234.1,381.5,225.4,0x17c,217.6,378.8),_0x5ba605[_0x361d7e(0x227)](209.7,377.6,202.7,376.7,196.7,376.3),_0x5ba605[_0x361d7e(0x227)](190.7,375.9,185.9,375.9,182.5,0x178),_0x5ba605['bezierCurveTo'](178.9,376.3,0xb1,376.4,0xb1,376.4)),_0x5ba605[_0x361d7e(0x432)](),_0x5ba605[_0x361d7e(0x312)]=_0x27e7f3,(_0x5ba605[_0x361d7e(0x295)](),_0x5ba605[_0x361d7e(0x5b4)](458.7,346.3),_0x5ba605[_0x361d7e(0x227)](458.7,346.3,456.7,347.4,0x1c5,349.4),_0x5ba605[_0x361d7e(0x227)](449.4,351.5,444.2,354.6,438.1,0x167),_0x5ba605['bezierCurveTo'](432.1,363.4,425.3,369.1,418.2,375.9),_0x5ba605[_0x361d7e(0x227)](411.1,382.7,403.7,390.6,396.1,399.1),_0x5ba605[_0x361d7e(0x227)](0x18a,401.5,391.9,403.9,389.8,406.2),_0x5ba605[_0x361d7e(0x227)](388.1,408.1,386.5,0x19a,384.8,411.8),_0x5ba605['lineTo'](383.6,413.2),_0x5ba605[_0x361d7e(0x305)](383.4,413.4),_0x5ba605[_0x361d7e(0x305)](383.3,413.5),_0x5ba605[_0x361d7e(0x305)](383.3,413.4),_0x5ba605[_0x361d7e(0x305)](383.2,412.9),_0x5ba605[_0x361d7e(0x305)](0x17f,411.9),_0x5ba605[_0x361d7e(0x227)](382.7,410.6,382.4,409.3,382.2,408.1),_0x5ba605[_0x361d7e(0x227)](381.9,406.8,381.6,405.6,381.4,404.4),_0x5ba605[_0x361d7e(0x227)](381.2,403.4,381.1,402.5,380.9,401.5),_0x5ba605['bezierCurveTo'](380.7,400.2,380.5,398.9,380.3,397.6),_0x5ba605['bezierCurveTo'](379.9,395.1,379.6,392.6,379.4,390.1),_0x5ba605[_0x361d7e(0x227)](378.3,380.4,377.5,371.9,376.5,364.6),_0x5ba605[_0x361d7e(0x227)](375.6,357.4,374.5,351.5,373.3,347.4),_0x5ba605[_0x361d7e(0x227)](373.1,346.3,372.7,345.4,372.5,344.6),_0x5ba605[_0x361d7e(0x227)](372.2,343.8,0x174,0x157,371.7,342.4),_0x5ba605['bezierCurveTo'](371.2,341.2,370.9,340.4,370.7,0x154),_0x5ba605[_0x361d7e(0x227)](370.5,339.6,370.7,339.9,371.2,340.6),_0x5ba605[_0x361d7e(0x227)](371.7,341.4,372.5,342.6,373.4,344.5),_0x5ba605[_0x361d7e(0x227)](375.2,348.2,377.2,354.1,0x17b,361.7),_0x5ba605[_0x361d7e(0x227)](380.8,369.3,382.4,378.4,384.1,388.5),_0x5ba605[_0x361d7e(0x227)](384.5,0x187,0x181,393.6,385.4,396.2),_0x5ba605[_0x361d7e(0x227)](385.6,397.5,385.9,398.8,386.1,400.1),_0x5ba605['bezierCurveTo'](386.5,0x192,386.4,401.3,386.4,401.5),_0x5ba605[_0x361d7e(0x305)](386.4,401.5),_0x5ba605[_0x361d7e(0x305)](386.4,401.5),_0x5ba605[_0x361d7e(0x305)](386.5,401.4),_0x5ba605['lineTo'](386.9,400.9),_0x5ba605[_0x361d7e(0x305)](0x183,400.8),_0x5ba605['lineTo'](387.5,400.2),_0x5ba605[_0x361d7e(0x305)](388.9,398.6),_0x5ba605[_0x361d7e(0x227)](389.8,397.5,390.8,396.5,391.7,395.4),_0x5ba605[_0x361d7e(0x227)](399.4,386.8,407.1,378.9,414.8,372.4),_0x5ba605[_0x361d7e(0x227)](422.4,365.8,429.9,360.6,436.4,356.7),_0x5ba605[_0x361d7e(0x227)](0x1bb,352.8,448.6,350.3,452.5,348.7),_0x5ba605[_0x361d7e(0x227)](454.5,347.9,0x1c8,347.4,0x1c9,0x15b),_0x5ba605['bezierCurveTo'](458.1,346.5,458.7,346.3,458.7,346.3)),_0x5ba605[_0x361d7e(0x432)](),_0x5ba605[_0x361d7e(0x48f)](),this[_0x361d7e(0x3c1)][_0x361d7e(0x58f)]();},Bitmap[_0x32d3d9(0x2c1)]['drawSakuraPetal']=function(_0x47139a,_0x55a153,_0x14ef73){const _0x14ba64=_0x32d3d9,_0x118042=this[_0x14ba64(0x354)];_0x118042[_0x14ba64(0x431)]();const _0x49dabc=_0x118042[_0x14ba64(0x56c)](0x0,this['height']/0x2,this[_0x14ba64(0x3b2)]/0x2,this[_0x14ba64(0x58a)]/0x2);_0x49dabc[_0x14ba64(0x3e2)](0x0,_0x47139a||_0x14ba64(0x335)),_0x49dabc[_0x14ba64(0x3e2)](0x1,_0x55a153||_0x14ba64(0x3c4)),_0x118042['fillStyle']=_0x49dabc,(_0x118042['beginPath'](),_0x118042[_0x14ba64(0x5b4)](12.57908,31.191794),_0x118042[_0x14ba64(0x227)](4.317875,26.790381,0x2,21.507626,0x2,21.507626),_0x118042[_0x14ba64(0x227)](0x2,21.507626,5.544827,18.680225,7.844373,17.156388),_0x118042[_0x14ba64(0x227)](5.6081,15.442017,2.28258,12.418619,2.28258,12.418619),_0x118042[_0x14ba64(0x227)](2.28258,12.418619,4.929183,7.198899,13.612139,3.449718),_0x118042[_0x14ba64(0x227)](30.630505,-3.805291,49.031689,18.529354,49.031689,18.529354),_0x118042[_0x14ba64(0x227)](49.031689,18.529354,48.933179,18.511974,48.718891,18.575774),_0x118042[_0x14ba64(0x227)](48.915856,18.610504,49.014335,18.627874,49.014335,18.627874),_0x118042[_0x14ba64(0x227)](49.014335,18.627874,26.958007,38.905902,12.579092,31.191834)),_0x118042[_0x14ba64(0x432)](),_0x118042[_0x14ba64(0x51e)]=_0x14ef73||_0x14ba64(0x526),_0x118042[_0x14ba64(0x4ca)](),_0x118042[_0x14ba64(0x431)](),_0x118042[_0x14ba64(0x48f)](),this[_0x14ba64(0x3c1)][_0x14ba64(0x58f)]();},Bitmap[_0x32d3d9(0x2c1)][_0x32d3d9(0x47d)]=function(_0x17a7aa){const _0x7ad6be=_0x32d3d9,_0x19b8af=this['_context'];_0x17a7aa=_0x17a7aa||[_0x7ad6be(0x457),'#00dd00','#00bb00',_0x7ad6be(0x2cd),_0x7ad6be(0x510),_0x7ad6be(0x526)],_0x19b8af[_0x7ad6be(0x431)](),_0x19b8af[_0x7ad6be(0x3e7)](0.044027,0.164312,-0.164312,0.044027,89.0097,-44.1852),_0x19b8af[_0x7ad6be(0x312)]=_0x17a7aa[0x0],_0x19b8af[_0x7ad6be(0x206)]=_0x17a7aa[0x5],_0x19b8af[_0x7ad6be(0x2ee)]=0xc,(_0x19b8af[_0x7ad6be(0x295)](),_0x19b8af[_0x7ad6be(0x5b4)](431.62,249.52),_0x19b8af['bezierCurveTo'](431.721833,257.349163,431.387983,265.177929,430.62,272.97),_0x19b8af[_0x7ad6be(0x227)](430.23,276.86,429.73,280.75,429.1,284.61),_0x19b8af[_0x7ad6be(0x227)](428.47,288.47,427.91,292.3,427.37,296.18),_0x19b8af[_0x7ad6be(0x227)](426.83,300.06,426.06,303.89,425.37,307.73),_0x19b8af[_0x7ad6be(0x227)](424.68,311.57,423.88,315.4,423.26,319.24),_0x19b8af['bezierCurveTo'](422.64,323.08,422.18,326.95,421.56,330.82),_0x19b8af[_0x7ad6be(0x227)](420.94,334.69,420.14,338.52,419.39,342.35),_0x19b8af[_0x7ad6be(0x227)](418.64,346.18,417.8,350.01,416.84,353.81),_0x19b8af[_0x7ad6be(0x227)](415.88,357.61,414.75,361.36,413.6,365.1),_0x19b8af[_0x7ad6be(0x227)](411.28,372.57,408.73,379.96,406.25,387.35),_0x19b8af[_0x7ad6be(0x227)](405.01,391.06,403.73,394.77,402.15,398.35),_0x19b8af['bezierCurveTo'](400.57,401.93,398.73,405.42,396.87,408.87),_0x19b8af[_0x7ad6be(0x227)](395.01,412.32,0x189,415.72,0x187,419.05),_0x19b8af[_0x7ad6be(0x227)](0x185,422.38,386.74,425.65,384.38,428.79),_0x19b8af[_0x7ad6be(0x227)](379.581436,434.992727,374.447096,440.928264,0x171,446.57),_0x19b8af[_0x7ad6be(0x227)](363.63,452.25,358.11,457.81,352.4,463.16),_0x19b8af[_0x7ad6be(0x227)](349.56,465.85,346.63,468.42,343.72,471.04),_0x19b8af[_0x7ad6be(0x305)](0x14f,478.86),_0x19b8af['lineTo'](326.28,486.68),_0x19b8af[_0x7ad6be(0x305)](321.9,490.58),_0x19b8af[_0x7ad6be(0x227)](320.42,491.87,318.9,493.12,317.31,494.31),_0x19b8af[_0x7ad6be(0x227)](314.158788,496.68913,310.840189,498.838031,307.38,500.74),_0x19b8af['bezierCurveTo'](305.65,501.74,303.88,502.55,302.15,503.43),_0x19b8af['lineTo'](296.92,506.07),_0x19b8af['bezierCurveTo'](293.43,507.82,289.92,509.53,286.29,511.07),_0x19b8af[_0x7ad6be(0x227)](282.677226,512.628282,278.985531,513.996813,275.23,515.17),_0x19b8af['bezierCurveTo'](271.49,516.37,267.75,517.45,0x108,518.58),_0x19b8af[_0x7ad6be(0x227)](260.227016,519.72514,256.38621,520.633574,252.5,521.3),_0x19b8af['bezierCurveTo'](248.595082,521.810403,244.66662,522.120808,240.73,522.23),_0x19b8af[_0x7ad6be(0x305)](234.87,522.46),_0x19b8af[_0x7ad6be(0x305)](231.93,522.57),_0x19b8af['bezierCurveTo'](231.042639,522.560274,230.157021,522.650849,229.29,522.84),_0x19b8af[_0x7ad6be(0x305)](229.29,522.84),_0x19b8af[_0x7ad6be(0x305)](229.12,522.84),_0x19b8af[_0x7ad6be(0x305)](228.9,522.84),_0x19b8af[_0x7ad6be(0x227)](226.0396,522.722573,223.221208,522.110173,220.57,521.03),_0x19b8af['lineTo'](220.44,520.98),_0x19b8af[_0x7ad6be(0x227)](219.08661,520.382693,217.816088,519.612985,216.66,518.69),_0x19b8af[_0x7ad6be(0x227)](216.085072,518.218253,215.537516,517.714102,215.02,517.18),_0x19b8af[_0x7ad6be(0x305)](213.61,515.56),_0x19b8af[_0x7ad6be(0x305)](213.51,515.44),_0x19b8af[_0x7ad6be(0x305)](213.44,515.27),_0x19b8af['lineTo'](213.44,515.22),_0x19b8af['bezierCurveTo'](212.708687,513.436313,211.887639,511.69075,210.98,509.99),_0x19b8af['bezierCurveTo'](210.09,508.23,209.21,506.46,208.39,504.65),_0x19b8af[_0x7ad6be(0x227)](206.643417,501.02829,205.395407,497.186707,204.68,493.23),_0x19b8af[_0x7ad6be(0x227)](204.146127,489.249079,204.125962,485.21606,204.62,481.23),_0x19b8af['bezierCurveTo'](205.081051,477.294323,205.748639,473.385598,206.62,469.52),_0x19b8af[_0x7ad6be(0x227)](207.49288,465.764819,207.886016,461.9141,207.79,458.06),_0x19b8af[_0x7ad6be(0x227)](207.513295,454.195646,206.860201,450.36751,205.84,446.63),_0x19b8af[_0x7ad6be(0x227)](204.99,443.31,204.17,439.98,203.25,436.68),_0x19b8af[_0x7ad6be(0x227)](203.12,436.2,202.99,435.68,202.85,435.26),_0x19b8af['lineTo'](199.49,0x1a8),_0x19b8af['lineTo'](196.33,412.63),_0x19b8af[_0x7ad6be(0x227)](195.241308,408.813871,194.412739,404.928284,193.85,0x191),_0x19b8af[_0x7ad6be(0x227)](192.79,393.13,192.48,385.3,192.02,377.41),_0x19b8af[_0x7ad6be(0x227)](191.77,369.41,192.93,361.55,194.4,353.82),_0x19b8af[_0x7ad6be(0x305)](196.71,342.26),_0x19b8af['bezierCurveTo'](197.47,338.41,198.18,334.55,198.81,330.69),_0x19b8af['bezierCurveTo'](199.44,326.83,200.07,322.93,200.45,319.07),_0x19b8af[_0x7ad6be(0x227)](200.83,315.21,0xc9,311.25,201.45,307.31),_0x19b8af[_0x7ad6be(0x227)](202.45,299.51,203.2,291.66,205.03,283.93),_0x19b8af[_0x7ad6be(0x227)](206.86,276.2,210.25,0x10d,212.78,261.6),_0x19b8af[_0x7ad6be(0x227)](215.47,254.2,218.06,246.79,220.78,239.41),_0x19b8af[_0x7ad6be(0x227)](222.24,235.74,223.88,232.16,225.46,228.56),_0x19b8af[_0x7ad6be(0x227)](227.04,224.96,228.46,221.33,0xe6,217.7),_0x19b8af['lineTo'](234.48,206.81),_0x19b8af[_0x7ad6be(0x227)](235.91,203.21,236.93,199.36,238.48,195.74),_0x19b8af[_0x7ad6be(0x305)](240.77,190.29),_0x19b8af[_0x7ad6be(0x227)](241.53,188.47,242.27,186.64,243.15,184.89),_0x19b8af[_0x7ad6be(0x227)](244.83,181.33,246.56,177.79,248.15,174.23),_0x19b8af[_0x7ad6be(0x227)](249.74,170.67,251.28,167.02,253.15,163.5),_0x19b8af[_0x7ad6be(0x227)](255.02,159.98,257.01,156.61,259.15,153.29),_0x19b8af[_0x7ad6be(0x227)](261.29,149.97,263.53,146.74,265.82,143.53),_0x19b8af[_0x7ad6be(0x227)](268.11,140.32,270.29,137.11,272.31,133.75),_0x19b8af['bezierCurveTo'](274.33,130.39,276.31,126.98,278.2,123.57),_0x19b8af[_0x7ad6be(0x227)](280.09,120.16,281.77,116.57,283.6,113.1),_0x19b8af['bezierCurveTo'](284.52,111.36,285.47,109.62,286.5,107.93),_0x19b8af[_0x7ad6be(0x227)](287.522434,106.213457,288.729617,104.61394,290.1,103.16),_0x19b8af[_0x7ad6be(0x227)](291.46,101.7,292.9,100.35,294.29,98.98),_0x19b8af[_0x7ad6be(0x227)](295.68,97.61,297.01,96.17,298.37,94.75),_0x19b8af[_0x7ad6be(0x305)](306.51,86.23),_0x19b8af[_0x7ad6be(0x227)](309.21,83.35,312.03,80.59,314.93,77.93),_0x19b8af['bezierCurveTo'](317.83,75.27,320.83,72.71,323.87,70.22),_0x19b8af['bezierCurveTo'](326.950045,67.806921,329.835603,65.155418,332.5,62.29),_0x19b8af[_0x7ad6be(0x227)](335.15434,59.416711,337.584777,56.344397,339.77,53.1),_0x19b8af[_0x7ad6be(0x227)](341.91,49.84,344.23,46.49,347.5,44.1),_0x19b8af[_0x7ad6be(0x227)](349.125878,42.9073,350.950982,42.013371,352.89,41.46),_0x19b8af[_0x7ad6be(0x227)](353.37,41.33,353.89,41.2,354.34,41.1),_0x19b8af[_0x7ad6be(0x227)](354.838027,40.968768,355.346669,40.881764,355.86,40.84),_0x19b8af['bezierCurveTo'](356.947139,40.805706,358.010866,41.160281,358.86,41.84),_0x19b8af[_0x7ad6be(0x227)](359.63952,42.468744,360.362298,43.164753,361.02,43.92),_0x19b8af[_0x7ad6be(0x305)](363.02,46.07),_0x19b8af['bezierCurveTo'](364.36,47.52,365.68,48.98,366.95,50.49),_0x19b8af['bezierCurveTo'](370.89,55.3,374.55,60.33,378.05,65.49),_0x19b8af['lineTo'](378.05,65.49),_0x19b8af[_0x7ad6be(0x227)](378.99,66.86,379.91,68.23,380.83,69.61),_0x19b8af[_0x7ad6be(0x227)](383.02,72.87,385.19,76.15,387.29,79.48),_0x19b8af[_0x7ad6be(0x227)](389.460572,82.779822,391.414679,86.217047,393.14,89.77),_0x19b8af[_0x7ad6be(0x227)](394.766901,93.373214,396.130474,97.089619,397.22,100.89),_0x19b8af[_0x7ad6be(0x227)](398.34,104.67,399.22,108.5,400.29,112.28),_0x19b8af[_0x7ad6be(0x227)](401.36,116.06,402.41,119.83,403.67,123.54),_0x19b8af[_0x7ad6be(0x305)](407.58,134.66),_0x19b8af[_0x7ad6be(0x227)](408.86,138.3,410.15,141.94,411.42,145.59),_0x19b8af[_0x7ad6be(0x227)](412.69,149.24,414.06,153.14,415.34,156.93),_0x19b8af[_0x7ad6be(0x305)](417.23,162.52),_0x19b8af['lineTo'](418.98,168.15),_0x19b8af[_0x7ad6be(0x227)](420.12,171.91,421.23,175.7,422.1,179.55),_0x19b8af[_0x7ad6be(0x305)](427.1,202.6),_0x19b8af['lineTo'](428.36,208.36),_0x19b8af[_0x7ad6be(0x305)](428.98,211.24),_0x19b8af['bezierCurveTo'](429.173333,212.22,429.333333,213.2,429.46,214.18),_0x19b8af['bezierCurveTo'](0x1ae,218.11,430.15,222.05,430.4,225.96),_0x19b8af[_0x7ad6be(0x227)](0x1af,233.79,431.51,241.64,431.62,249.52),_0x19b8af[_0x7ad6be(0x432)]()),_0x19b8af['stroke'](),_0x19b8af[_0x7ad6be(0x312)]=_0x17a7aa[0x1],(_0x19b8af[_0x7ad6be(0x295)](),_0x19b8af['moveTo'](285.75,360.45),_0x19b8af[_0x7ad6be(0x305)](317.05,277.5),_0x19b8af[_0x7ad6be(0x305)](329.05,225.84),_0x19b8af[_0x7ad6be(0x305)](340.79,165.58),_0x19b8af[_0x7ad6be(0x305)](0x15b,124.66),_0x19b8af[_0x7ad6be(0x305)](349.15,110.28),_0x19b8af[_0x7ad6be(0x305)](352.38,88.17),_0x19b8af[_0x7ad6be(0x305)](354.04,74.9),_0x19b8af[_0x7ad6be(0x227)](354.04,74.9,340.19,93.66,0x142,121.85),_0x19b8af[_0x7ad6be(0x305)](0x142,121.85),_0x19b8af[_0x7ad6be(0x305)](318.94,116.08),_0x19b8af['lineTo'](315.07,108.52),_0x19b8af[_0x7ad6be(0x305)](313.88,105.61),_0x19b8af[_0x7ad6be(0x227)](313.88,105.61,320.3,123.77,309.71,141.31),_0x19b8af[_0x7ad6be(0x305)](309.71,141.31),_0x19b8af[_0x7ad6be(0x227)](306.916667,145.83,304.09,150.496667,301.23,155.31),_0x19b8af[_0x7ad6be(0x305)](301.23,155.31),_0x19b8af['lineTo'](297.4,0x95),_0x19b8af[_0x7ad6be(0x305)](293.4,142.73),_0x19b8af[_0x7ad6be(0x305)](288.67,134.87),_0x19b8af['bezierCurveTo'](295.901876,148.194393,295.803749,164.294746,288.41,177.53),_0x19b8af[_0x7ad6be(0x305)](288.41,177.53),_0x19b8af[_0x7ad6be(0x227)](286.65,180.676667,284.896667,183.86,283.15,187.08),_0x19b8af[_0x7ad6be(0x305)](283.15,187.08),_0x19b8af[_0x7ad6be(0x305)](279.22,182.53),_0x19b8af[_0x7ad6be(0x305)](272.79,175.59),_0x19b8af['bezierCurveTo'](275.19,178.45,281.64,188.49,273.09,206.31),_0x19b8af['lineTo'](273.09,206.31),_0x19b8af[_0x7ad6be(0x227)](270.72,211.02,268.4,215.77,266.15,220.52),_0x19b8af['lineTo'](266.15,220.52),_0x19b8af[_0x7ad6be(0x305)](263.84,218.34),_0x19b8af[_0x7ad6be(0x305)](260.92,215.6),_0x19b8af[_0x7ad6be(0x227)](260.92,215.6,265.27,221.08,259.07,236.13),_0x19b8af['lineTo'](259.07,236.13),_0x19b8af[_0x7ad6be(0x227)](256.603333,241.836667,254.27,247.503333,252.07,253.13),_0x19b8af[_0x7ad6be(0x305)](252.07,253.13),_0x19b8af['lineTo'](247.51,249.29),_0x19b8af[_0x7ad6be(0x305)](244.92,0xf7),_0x19b8af[_0x7ad6be(0x305)](243.76,246.13),_0x19b8af[_0x7ad6be(0x227)](246.52,248.92,250.54,256.13,244.9,272.77),_0x19b8af[_0x7ad6be(0x305)](244.9,272.77),_0x19b8af['bezierCurveTo'](243.806667,275.85,242.716667,278.986667,241.63,282.18),_0x19b8af[_0x7ad6be(0x305)](241.63,282.18),_0x19b8af[_0x7ad6be(0x305)](237.21,0x114),_0x19b8af[_0x7ad6be(0x305)](233.81,271.77),_0x19b8af['lineTo'](230.81,267.86),_0x19b8af[_0x7ad6be(0x227)](233.81,272.45,239.7,285.52,232.29,310.91),_0x19b8af[_0x7ad6be(0x305)](232.29,310.91),_0x19b8af['bezierCurveTo'](231.623333,313.11,230.956667,315.326667,230.29,317.56),_0x19b8af[_0x7ad6be(0x305)](230.29,317.56),_0x19b8af[_0x7ad6be(0x305)](226.67,310.46),_0x19b8af['lineTo'](223.88,304.91),_0x19b8af[_0x7ad6be(0x305)](221.49,299.78),_0x19b8af[_0x7ad6be(0x227)](224.38,307.42,228.04,322.78,222.56,344.43),_0x19b8af[_0x7ad6be(0x305)](222.56,344.43),_0x19b8af[_0x7ad6be(0x227)](222.08,346.16,221.62,347.89,221.15,349.62),_0x19b8af['lineTo'](221.15,349.62),_0x19b8af[_0x7ad6be(0x305)](219.97,346.31),_0x19b8af[_0x7ad6be(0x305)](215.78,0x150),_0x19b8af[_0x7ad6be(0x305)](215.38,334.89),_0x19b8af['bezierCurveTo'](217.23,341.26,219.38,353.39,216.06,369.47),_0x19b8af[_0x7ad6be(0x227)](215.62,371.28,215.19,373.08,214.76,374.89),_0x19b8af[_0x7ad6be(0x305)](214.7,375.14),_0x19b8af['lineTo'](214.7,375.14),_0x19b8af[_0x7ad6be(0x227)](213.32,381.06,212.01,386.96,210.77,392.84),_0x19b8af[_0x7ad6be(0x305)](210.77,392.84),_0x19b8af[_0x7ad6be(0x305)](209.36,389.71),_0x19b8af[_0x7ad6be(0x305)](0xd0,386.2),_0x19b8af[_0x7ad6be(0x305)](207.12,383.09),_0x19b8af[_0x7ad6be(0x305)](206.37,378.74),_0x19b8af[_0x7ad6be(0x227)](208.034744,391.047293,208.034744,403.522707,206.37,415.83),_0x19b8af['bezierCurveTo'](205.89,418.61,205.43,421.37,205.01,424.12),_0x19b8af[_0x7ad6be(0x227)](205.005302,424.16989,205.005302,424.22011,205.01,424.27),_0x19b8af[_0x7ad6be(0x305)](205.01,424.27),_0x19b8af[_0x7ad6be(0x227)](204.343333,428.47,203.746667,432.623333,203.22,436.73),_0x19b8af[_0x7ad6be(0x227)](204.14,440.03,204.96,443.36,205.81,446.68),_0x19b8af[_0x7ad6be(0x227)](206.830201,450.41751,207.483295,454.245646,207.76,458.11),_0x19b8af[_0x7ad6be(0x227)](207.856016,461.9641,207.46288,465.814819,206.59,469.57),_0x19b8af[_0x7ad6be(0x227)](205.718639,473.435598,205.051051,477.344323,204.59,481.28),_0x19b8af[_0x7ad6be(0x227)](204.095962,485.26606,204.116127,489.299079,204.65,493.28),_0x19b8af[_0x7ad6be(0x227)](205.365407,497.236707,206.613417,501.07829,208.36,504.7),_0x19b8af[_0x7ad6be(0x227)](209.18,506.51,210.06,508.28,210.95,510.04),_0x19b8af[_0x7ad6be(0x227)](211.857639,511.74075,212.678687,513.486313,213.41,515.27),_0x19b8af[_0x7ad6be(0x305)](213.41,515.32),_0x19b8af[_0x7ad6be(0x305)](213.48,515.49),_0x19b8af[_0x7ad6be(0x305)](213.58,515.61),_0x19b8af[_0x7ad6be(0x305)](214.99,517.23),_0x19b8af['bezierCurveTo'](215.507516,517.764102,216.055072,518.268253,216.63,518.74),_0x19b8af[_0x7ad6be(0x227)](217.786088,519.662985,219.05661,520.432693,220.41,521.03),_0x19b8af['lineTo'](220.54,521.08),_0x19b8af[_0x7ad6be(0x227)](234.62,498.82,250.27,460.36,250.27,460.36)),_0x19b8af[_0x7ad6be(0x432)](),_0x19b8af[_0x7ad6be(0x312)]=_0x17a7aa[0x2],(_0x19b8af[_0x7ad6be(0x295)](),_0x19b8af[_0x7ad6be(0x5b4)](430.49,225.94),_0x19b8af['bezierCurveTo'](430.24,222.03,430.09,218.09,429.55,214.16),_0x19b8af['bezierCurveTo'](429.423333,213.18,429.263333,212.2,429.07,211.22),_0x19b8af[_0x7ad6be(0x305)](428.45,208.34),_0x19b8af[_0x7ad6be(0x305)](427.19,202.58),_0x19b8af[_0x7ad6be(0x305)](422.19,179.53),_0x19b8af[_0x7ad6be(0x227)](421.32,175.68,420.19,171.89,419.07,168.13),_0x19b8af['lineTo'](417.32,162.5),_0x19b8af[_0x7ad6be(0x305)](415.43,156.91),_0x19b8af[_0x7ad6be(0x227)](412.91,149.45,410.28,142.05,407.67,134.64),_0x19b8af[_0x7ad6be(0x305)](403.76,123.52),_0x19b8af['bezierCurveTo'](402.5,119.81,401.42,116.04,400.38,112.26),_0x19b8af['bezierCurveTo'](399.34,108.48,398.43,104.65,397.31,100.87),_0x19b8af[_0x7ad6be(0x227)](396.220474,97.069619,394.856901,93.353214,393.23,89.75),_0x19b8af[_0x7ad6be(0x227)](391.504679,86.197047,389.550572,82.759822,387.38,79.46),_0x19b8af[_0x7ad6be(0x227)](385.28,76.13,383.11,72.85,380.92,69.59),_0x19b8af[_0x7ad6be(0x227)](0x17c,68.21,379.08,66.84,378.14,65.47),_0x19b8af[_0x7ad6be(0x227)](387.8,80.8,395.04,109.72,396.47,149.27),_0x19b8af['lineTo'](376.1,161.86),_0x19b8af[_0x7ad6be(0x227)](379.85,159.59,396.59,0x96,396.69,160.27),_0x19b8af[_0x7ad6be(0x227)](396.75,167.25,396.633333,174.516667,396.34,182.07),_0x19b8af[_0x7ad6be(0x305)](370.5,194.47),_0x19b8af[_0x7ad6be(0x227)](379.58,190.47,396.45,184.53,395.5,196.63),_0x19b8af[_0x7ad6be(0x227)](395.39,198.23,395.27,199.84,395.15,201.46),_0x19b8af[_0x7ad6be(0x305)](389.25,207.26),_0x19b8af['lineTo'](383.25,212.74),_0x19b8af['bezierCurveTo'](383.25,212.74,380.25,215.38,375.87,218.98),_0x19b8af[_0x7ad6be(0x227)](390.22,209.39,393.47,215.75,392.87,224.41),_0x19b8af[_0x7ad6be(0x227)](392.15,230.37,391.323333,236.463333,390.39,242.69),_0x19b8af['lineTo'](374.29,253.84),_0x19b8af[_0x7ad6be(0x227)](381.29,249.93,389.62,247.84,387.03,262.84),_0x19b8af[_0x7ad6be(0x227)](386.036667,268.253333,384.96,273.74,383.8,279.3),_0x19b8af[_0x7ad6be(0x305)](378.4,282.68),_0x19b8af[_0x7ad6be(0x305)](368.4,288.48),_0x19b8af[_0x7ad6be(0x305)](351.28,0x12a),_0x19b8af[_0x7ad6be(0x227)](351.28,0x12a,382.89,280.72,379.45,298.88),_0x19b8af['bezierCurveTo'](378.51,302.88,377.51,306.896667,376.45,310.93),_0x19b8af['lineTo'](364.43,0x13d),_0x19b8af['lineTo'](354.48,321.41),_0x19b8af[_0x7ad6be(0x227)](363.55,317.83,375.77,314.48,373.1,323.71),_0x19b8af['bezierCurveTo'](373.01,324.03,372.93,324.35,372.84,324.71),_0x19b8af[_0x7ad6be(0x227)](371.506667,329.583333,370.066667,334.36,368.52,339.04),_0x19b8af[_0x7ad6be(0x305)](358.52,344.38),_0x19b8af[_0x7ad6be(0x305)](353.36,347.17),_0x19b8af[_0x7ad6be(0x305)](341.49,352.49),_0x19b8af[_0x7ad6be(0x227)](351.93,348.35,366.49,344.44,361.87,357.42),_0x19b8af[_0x7ad6be(0x227)](359.27,364.006667,356.51,370.406667,353.59,376.62),_0x19b8af[_0x7ad6be(0x227)](349.53,378.78,331.04,388.35,313.91,392.41),_0x19b8af[_0x7ad6be(0x227)](326.26,390.74,350.91,379.56,344.78,394.04),_0x19b8af[_0x7ad6be(0x227)](339.71,403.42,334.34,412.3,328.78,420.68),_0x19b8af[_0x7ad6be(0x227)](318.476689,423.18083,308.011191,424.958495,297.46,0x1aa),_0x19b8af['bezierCurveTo'](315.21,425.12,326.79,424.25,317.73,436.57),_0x19b8af[_0x7ad6be(0x227)](311.08,445.57,304.32,453.89,297.65,461.51),_0x19b8af[_0x7ad6be(0x227)](297.56,461.51,279.87,463.81,266.65,461.17),_0x19b8af[_0x7ad6be(0x227)](280.85,464.3,296.44,463.02,284.31,476.04),_0x19b8af['bezierCurveTo'](280.976667,479.5,277.703333,482.77,274.49,485.85),_0x19b8af['bezierCurveTo'](274.43,485.85,261.73,486.11,251.87,484.55),_0x19b8af[_0x7ad6be(0x227)](262.77,486.37,273.54,486.5,263.2,496.32),_0x19b8af[_0x7ad6be(0x227)](258.69,500.32,254.47,503.9,250.65,507.01),_0x19b8af[_0x7ad6be(0x227)](250.55,507.01,238.65,508.01,233.16,506.79),_0x19b8af[_0x7ad6be(0x227)](239.07,508.66,243.85,511.37,237.87,516.9),_0x19b8af[_0x7ad6be(0x227)](232.71,520.68,229.59,522.68,229.32,522.9),_0x19b8af[_0x7ad6be(0x227)](230.187021,522.710849,231.072639,522.620274,231.96,522.63),_0x19b8af[_0x7ad6be(0x305)](234.9,522.52),_0x19b8af[_0x7ad6be(0x305)](240.76,522.29),_0x19b8af[_0x7ad6be(0x227)](244.69662,522.180808,248.625082,521.870403,252.53,521.36),_0x19b8af[_0x7ad6be(0x227)](256.406968,520.679223,260.23773,519.757436,0x108,518.6),_0x19b8af[_0x7ad6be(0x227)](267.75,517.47,271.49,516.39,275.23,515.19),_0x19b8af[_0x7ad6be(0x227)](278.985531,514.016813,282.677226,512.648282,286.29,511.09),_0x19b8af[_0x7ad6be(0x227)](289.9,509.53,293.43,507.82,296.92,506.09),_0x19b8af[_0x7ad6be(0x305)](302.15,503.45),_0x19b8af['bezierCurveTo'](303.88,502.57,305.65,501.72,307.38,500.76),_0x19b8af[_0x7ad6be(0x227)](310.840189,498.858031,314.158788,496.70913,317.31,494.33),_0x19b8af[_0x7ad6be(0x227)](318.89,493.14,320.42,491.89,321.9,490.6),_0x19b8af[_0x7ad6be(0x305)](326.28,486.7),_0x19b8af[_0x7ad6be(0x305)](0x14f,478.88),_0x19b8af[_0x7ad6be(0x305)](343.72,471.06),_0x19b8af[_0x7ad6be(0x227)](346.63,468.44,349.56,465.87,352.4,463.18),_0x19b8af[_0x7ad6be(0x227)](358.11,457.83,363.63,452.27,0x171,446.59),_0x19b8af[_0x7ad6be(0x227)](374.436839,440.947476,379.561151,435.011953,384.35,428.81),_0x19b8af[_0x7ad6be(0x227)](386.71,425.67,388.93,422.42,390.97,419.07),_0x19b8af['bezierCurveTo'](393.01,415.72,394.97,412.36,396.89,408.92),_0x19b8af[_0x7ad6be(0x227)](398.81,405.48,400.57,402.02,402.17,398.4),_0x19b8af[_0x7ad6be(0x227)](403.77,394.78,405.03,391.08,406.27,387.4),_0x19b8af[_0x7ad6be(0x227)](408.75,380.01,411.27,372.62,413.62,365.15),_0x19b8af['bezierCurveTo'](414.77,361.41,415.89,357.67,416.86,353.86),_0x19b8af[_0x7ad6be(0x227)](417.83,350.05,418.64,346.24,419.41,342.4),_0x19b8af[_0x7ad6be(0x227)](420.18,338.56,420.96,334.75,421.58,330.87),_0x19b8af[_0x7ad6be(0x227)](422.2,326.99,422.68,323.13,423.28,319.29),_0x19b8af[_0x7ad6be(0x227)](423.88,315.45,424.7,311.61,425.39,307.78),_0x19b8af[_0x7ad6be(0x227)](426.08,303.95,426.9,300.12,427.39,296.23),_0x19b8af[_0x7ad6be(0x227)](427.88,292.34,428.44,288.51,429.12,284.66),_0x19b8af[_0x7ad6be(0x227)](429.8,280.81,430.25,276.91,430.64,273.02),_0x19b8af[_0x7ad6be(0x227)](431.407983,265.227929,431.741833,257.399163,431.64,249.57),_0x19b8af['bezierCurveTo'](431.51,241.64,0x1af,233.79,430.49,225.94)),_0x19b8af['fill'](),_0x19b8af[_0x7ad6be(0x312)]=_0x17a7aa[0x3],(_0x19b8af[_0x7ad6be(0x295)](),_0x19b8af['moveTo'](340.27,176.61),_0x19b8af[_0x7ad6be(0x305)](348.27,122.21),_0x19b8af[_0x7ad6be(0x305)](0x160,0x56),_0x19b8af[_0x7ad6be(0x227)](0x160,0x56,349.18,94.32,344.36,108.7),_0x19b8af[_0x7ad6be(0x305)](341.04,104.91),_0x19b8af[_0x7ad6be(0x227)](341.04,104.91,344.15,109.29,341.39,117.57),_0x19b8af[_0x7ad6be(0x305)](341.39,117.57),_0x19b8af['bezierCurveTo'](339.01,124.71,336.28,132.9,333.28,141.95),_0x19b8af[_0x7ad6be(0x305)](333.28,141.95),_0x19b8af[_0x7ad6be(0x305)](328.13,133.05),_0x19b8af[_0x7ad6be(0x305)](325.91,129.17),_0x19b8af[_0x7ad6be(0x227)](325.91,129.17,332.53,142.95,325.57,165.28),_0x19b8af[_0x7ad6be(0x305)](325.57,165.28),_0x19b8af[_0x7ad6be(0x227)](323.503333,171.573333,321.35,178.12,319.11,184.92),_0x19b8af['lineTo'](319.11,184.92),_0x19b8af[_0x7ad6be(0x305)](0x13b,177.71),_0x19b8af[_0x7ad6be(0x305)](308.25,166.82),_0x19b8af['bezierCurveTo'](314.733452,179.880969,315.811249,194.970124,311.25,208.82),_0x19b8af[_0x7ad6be(0x305)](311.25,208.82),_0x19b8af[_0x7ad6be(0x227)](310.103333,212.326667,308.946667,215.883333,307.78,219.49),_0x19b8af['lineTo'](307.78,219.49),_0x19b8af[_0x7ad6be(0x305)](300.16,0xd0),_0x19b8af[_0x7ad6be(0x305)](295.37,201.93),_0x19b8af[_0x7ad6be(0x227)](295.37,201.93,308.11,218.47,299.78,244.52),_0x19b8af[_0x7ad6be(0x227)](298.653333,248.04,297.516667,251.586667,296.37,255.16),_0x19b8af[_0x7ad6be(0x305)](296.37,255.16),_0x19b8af[_0x7ad6be(0x305)](290.64,0xf7),_0x19b8af['lineTo'](280.58,236.2),_0x19b8af[_0x7ad6be(0x227)](281.58,237.26,296.58,254.13,287.96,281.57),_0x19b8af[_0x7ad6be(0x305)](287.96,281.57),_0x19b8af[_0x7ad6be(0x227)](287.333333,283.53,286.71,285.496667,286.09,287.47),_0x19b8af[_0x7ad6be(0x305)](286.09,287.47),_0x19b8af[_0x7ad6be(0x305)](0x118,279.81),_0x19b8af['lineTo'](270.72,270.71),_0x19b8af['bezierCurveTo'](270.72,270.71,286.28,286.4,277.78,313.81),_0x19b8af['lineTo'](277.78,313.81),_0x19b8af[_0x7ad6be(0x227)](276.106667,319.143333,274.44,324.476667,272.78,329.81),_0x19b8af[_0x7ad6be(0x305)](272.78,329.81),_0x19b8af['lineTo'](265.2,315.89),_0x19b8af[_0x7ad6be(0x305)](259.75,307.61),_0x19b8af[_0x7ad6be(0x227)](267.679619,321.381348,269.795642,337.744541,265.63,353.08),_0x19b8af[_0x7ad6be(0x305)](264.63,356.41),_0x19b8af['lineTo'](264.63,356.41),_0x19b8af['lineTo'](264.63,356.41),_0x19b8af[_0x7ad6be(0x227)](263.683333,359.516667,262.74,362.62,261.8,365.72),_0x19b8af[_0x7ad6be(0x305)](261.8,365.72),_0x19b8af[_0x7ad6be(0x305)](255.48,357.92),_0x19b8af[_0x7ad6be(0x305)](248.69,349.01),_0x19b8af[_0x7ad6be(0x227)](248.69,349.01,261.56,365.87,253.9,392.1),_0x19b8af[_0x7ad6be(0x305)](253.9,392.1),_0x19b8af['bezierCurveTo'](252.566667,396.706667,251.233333,401.26,249.9,405.76),_0x19b8af[_0x7ad6be(0x305)](249.9,405.76),_0x19b8af[_0x7ad6be(0x305)](243.52,395.82),_0x19b8af[_0x7ad6be(0x305)](238.92,387.92),_0x19b8af['bezierCurveTo'](238.92,387.92,249.49,405.92,241.92,433.65),_0x19b8af[_0x7ad6be(0x305)](241.92,433.65),_0x19b8af[_0x7ad6be(0x305)](239.82,441.18),_0x19b8af[_0x7ad6be(0x305)](239.82,441.18),_0x19b8af[_0x7ad6be(0x305)](0xe9,429.68),_0x19b8af['bezierCurveTo'](0xe9,429.68,239.72,442.12,234.11,462.31),_0x19b8af['lineTo'](234.11,462.31),_0x19b8af['bezierCurveTo'](233.17,465.85,232.27,469.303333,231.41,472.67),_0x19b8af[_0x7ad6be(0x305)](227.3,467.28),_0x19b8af[_0x7ad6be(0x227)](227.3,467.28,230.97,473.84,228.38,484.69),_0x19b8af[_0x7ad6be(0x305)](228.38,484.69),_0x19b8af['bezierCurveTo'](225.19,497.69,222.71,508.99,221.15,518.02),_0x19b8af[_0x7ad6be(0x227)](0xf0,483.95,262.65,419.16,262.65,419.16),_0x19b8af[_0x7ad6be(0x305)](306.26,315.71),_0x19b8af[_0x7ad6be(0x305)](323.48,243.71)),_0x19b8af[_0x7ad6be(0x432)](),_0x19b8af[_0x7ad6be(0x312)]=_0x17a7aa[0x4],(_0x19b8af['beginPath'](),_0x19b8af[_0x7ad6be(0x5b4)](430.49,225.94),_0x19b8af[_0x7ad6be(0x227)](430.24,222.03,430.09,218.09,429.55,214.16),_0x19b8af[_0x7ad6be(0x227)](429.423333,213.18,429.263333,212.2,429.07,211.22),_0x19b8af[_0x7ad6be(0x305)](428.45,208.34),_0x19b8af[_0x7ad6be(0x305)](427.19,202.58),_0x19b8af['lineTo'](422.19,179.53),_0x19b8af[_0x7ad6be(0x227)](421.32,175.68,420.19,171.89,419.07,168.13),_0x19b8af[_0x7ad6be(0x305)](417.32,162.5),_0x19b8af[_0x7ad6be(0x305)](415.43,156.91),_0x19b8af[_0x7ad6be(0x227)](414.15,153.123333,412.843333,149.343333,411.51,145.57),_0x19b8af[_0x7ad6be(0x227)](412.03,148.49,448.2,358.03,321.91,490.57),_0x19b8af[_0x7ad6be(0x305)](326.29,486.67),_0x19b8af[_0x7ad6be(0x305)](335.01,478.85),_0x19b8af[_0x7ad6be(0x305)](343.73,471.03),_0x19b8af['bezierCurveTo'](346.64,468.41,349.57,465.84,352.41,463.15),_0x19b8af[_0x7ad6be(0x227)](358.12,457.8,363.64,452.24,369.01,446.56),_0x19b8af[_0x7ad6be(0x227)](374.446839,440.917476,379.571151,434.981953,384.36,428.78),_0x19b8af[_0x7ad6be(0x227)](386.72,425.64,388.94,422.39,390.98,419.04),_0x19b8af[_0x7ad6be(0x227)](393.02,415.69,394.98,412.33,396.9,408.89),_0x19b8af[_0x7ad6be(0x227)](398.82,405.45,400.58,401.99,402.18,398.37),_0x19b8af[_0x7ad6be(0x227)](403.78,394.75,405.04,391.05,406.28,387.37),_0x19b8af['bezierCurveTo'](408.76,379.98,411.28,372.59,413.63,365.12),_0x19b8af[_0x7ad6be(0x227)](414.78,361.38,415.9,357.64,416.87,353.83),_0x19b8af[_0x7ad6be(0x227)](417.84,350.02,418.65,346.21,419.42,342.37),_0x19b8af['bezierCurveTo'](420.19,338.53,420.97,334.72,421.59,330.84),_0x19b8af[_0x7ad6be(0x227)](422.21,326.96,422.69,323.1,423.29,319.26),_0x19b8af[_0x7ad6be(0x227)](423.89,315.42,424.71,311.58,425.4,307.75),_0x19b8af['bezierCurveTo'](426.09,303.92,426.91,300.09,427.4,296.2),_0x19b8af[_0x7ad6be(0x227)](427.89,292.31,428.45,288.48,429.13,284.63),_0x19b8af['bezierCurveTo'](429.81,280.78,430.26,276.88,430.65,272.99),_0x19b8af[_0x7ad6be(0x227)](431.417983,265.197929,431.751833,257.369163,431.65,249.54),_0x19b8af['bezierCurveTo'](431.51,241.64,0x1af,233.79,430.49,225.94)),_0x19b8af['fill'](),_0x19b8af[_0x7ad6be(0x312)]=_0x17a7aa[0x5],_0x19b8af[_0x7ad6be(0x206)]=_0x17a7aa[0x5],_0x19b8af[_0x7ad6be(0x2ee)]=0.5,(_0x19b8af[_0x7ad6be(0x295)](),_0x19b8af[_0x7ad6be(0x5b4)](299.66,335.53),_0x19b8af['bezierCurveTo'](309.681137,334.686744,319.615142,333.014353,329.36,330.53),_0x19b8af['bezierCurveTo'](339.199482,327.973836,348.817214,324.629701,358.12,320.53),_0x19b8af[_0x7ad6be(0x227)](362.786667,318.47,367.35,316.243333,371.81,313.85),_0x19b8af[_0x7ad6be(0x227)](376.27,311.456667,380.643333,308.883333,384.93,306.13),_0x19b8af[_0x7ad6be(0x227)](393.507021,300.696702,401.564499,294.483707,0x199,287.57),_0x19b8af['bezierCurveTo'](401.449487,294.326806,393.291566,300.372438,384.63,305.63),_0x19b8af[_0x7ad6be(0x227)](380.33,308.296667,375.93,310.79,371.43,313.11),_0x19b8af[_0x7ad6be(0x227)](366.93,315.43,362.353333,317.57,357.7,319.53),_0x19b8af[_0x7ad6be(0x227)](348.401624,323.448152,338.804247,326.614952,0x149,0x149),_0x19b8af[_0x7ad6be(0x227)](319.603472,331.243088,310.043265,332.734467,300.41,333.46),_0x19b8af[_0x7ad6be(0x227)](301.51,330.46,302.62,327.46,303.7,324.4),_0x19b8af[_0x7ad6be(0x227)](305.086667,320.546667,306.46,316.68,307.82,312.8),_0x19b8af[_0x7ad6be(0x305)](314.12,311.35),_0x19b8af[_0x7ad6be(0x305)](317.4,310.58),_0x19b8af[_0x7ad6be(0x305)](320.63,309.58),_0x19b8af[_0x7ad6be(0x227)](322.79,308.94,324.95,308.32,327.09,307.66),_0x19b8af[_0x7ad6be(0x305)](333.43,305.41),_0x19b8af[_0x7ad6be(0x227)](341.840722,302.350071,350.047426,298.756089,0x166,294.65),_0x19b8af[_0x7ad6be(0x227)](365.959278,290.559569,373.699792,286.056786,381.19,281.16),_0x19b8af['bezierCurveTo'](388.682119,276.281578,395.887358,270.976145,402.77,265.27),_0x19b8af[_0x7ad6be(0x227)](395.789265,270.841289,388.493886,276.006485,380.92,280.74),_0x19b8af[_0x7ad6be(0x227)](373.356854,285.469142,365.556654,289.808149,357.55,293.74),_0x19b8af[_0x7ad6be(0x227)](349.567396,297.696491,341.340718,301.140139,332.92,304.05),_0x19b8af[_0x7ad6be(0x305)](326.59,306.16),_0x19b8af[_0x7ad6be(0x227)](324.45,306.78,322.3,307.34,320.16,307.94),_0x19b8af[_0x7ad6be(0x305)](316.95,308.82),_0x19b8af[_0x7ad6be(0x305)](313.69,309.52),_0x19b8af[_0x7ad6be(0x305)](308.57,310.6),_0x19b8af[_0x7ad6be(0x305)](309.36,308.35),_0x19b8af[_0x7ad6be(0x305)](0x138,300.27),_0x19b8af[_0x7ad6be(0x305)](313.32,296.22),_0x19b8af[_0x7ad6be(0x227)](313.77,294.88,314.21,293.53,314.58,292.16),_0x19b8af[_0x7ad6be(0x227)](315.35,289.54,316.09,286.91,316.83,284.28),_0x19b8af['bezierCurveTo'](325.865827,281.447791,334.625259,277.799422,0x157,273.38),_0x19b8af[_0x7ad6be(0x305)](349.3,270.03),_0x19b8af[_0x7ad6be(0x305)](355.47,266.47),_0x19b8af[_0x7ad6be(0x227)](357.55,265.31,359.54,264.01,361.57,262.77),_0x19b8af[_0x7ad6be(0x227)](363.6,261.53,365.57,260.29,367.57,258.97),_0x19b8af[_0x7ad6be(0x227)](375.57,253.84,383.32,248.36,390.96,242.73),_0x19b8af['bezierCurveTo'](398.6,237.1,406.08,231.26,413.35,225.16),_0x19b8af[_0x7ad6be(0x227)](405.98,231.16,398.35,236.81,390.66,242.32),_0x19b8af[_0x7ad6be(0x227)](382.97,247.83,375.09,253.15,0x16f,258.13),_0x19b8af[_0x7ad6be(0x227)](0x16d,259.41,0x16b,260.6,360.93,261.81),_0x19b8af['bezierCurveTo'](358.86,263.02,356.93,264.26,354.79,265.38),_0x19b8af[_0x7ad6be(0x305)](348.58,268.83),_0x19b8af[_0x7ad6be(0x305)](342.29,0x110),_0x19b8af[_0x7ad6be(0x227)](334.311743,276.031109,326.005153,279.376494,317.46,0x11a),_0x19b8af[_0x7ad6be(0x305)](319.2,275.76),_0x19b8af['bezierCurveTo'](321.9,266.06,324.34,256.29,326.62,246.49),_0x19b8af[_0x7ad6be(0x227)](329.874304,245.741841,333.077493,244.786562,336.21,243.63),_0x19b8af[_0x7ad6be(0x227)](339.430957,242.413731,342.588325,241.035303,345.67,239.5),_0x19b8af['bezierCurveTo'](351.791575,236.396752,357.680318,232.854149,363.29,228.9),_0x19b8af[_0x7ad6be(0x227)](368.9,224.98,374.29,220.75,379.46,216.3),_0x19b8af[_0x7ad6be(0x227)](384.63,211.85,389.65,207.18,394.36,202.24),_0x19b8af[_0x7ad6be(0x227)](389.53,207.06,384.41,211.59,379.14,215.92),_0x19b8af['bezierCurveTo'](373.87416,220.243153,368.393882,224.298292,362.72,228.07),_0x19b8af[_0x7ad6be(0x227)](357.066914,231.866215,351.144545,235.245174,0x159,238.18),_0x19b8af['bezierCurveTo'](341.934973,239.618284,338.797427,240.896667,335.6,242.01),_0x19b8af[_0x7ad6be(0x227)](332.81442,242.95951,329.976369,243.747486,327.1,244.37),_0x19b8af[_0x7ad6be(0x227)](329.486667,233.97,331.696667,223.536667,333.73,213.07),_0x19b8af[_0x7ad6be(0x305)](393.36,182.9),_0x19b8af['lineTo'](334.11,211.14),_0x19b8af[_0x7ad6be(0x305)](334.44,209.48),_0x19b8af[_0x7ad6be(0x227)](336.66,197.92,338.73,186.326667,340.65,174.7),_0x19b8af[_0x7ad6be(0x227)](343.104938,174.985029,345.590493,174.84976,0x15c,174.3),_0x19b8af['bezierCurveTo'](350.54725,173.755679,353.050747,173.023682,355.49,172.11),_0x19b8af[_0x7ad6be(0x227)](360.323367,170.268226,365.033112,168.117108,369.59,165.67),_0x19b8af[_0x7ad6be(0x227)](374.16,163.25,378.59,160.67,0x17f,157.94),_0x19b8af[_0x7ad6be(0x227)](387.41,155.21,391.69,152.4,395.9,149.44),_0x19b8af[_0x7ad6be(0x227)](391.62,152.31,387.25,155.03,382.82,157.65),_0x19b8af[_0x7ad6be(0x227)](378.39,160.27,373.87,162.75,369.28,165.05),_0x19b8af['bezierCurveTo'](364.706245,167.379689,359.98636,169.410609,355.15,171.13),_0x19b8af[_0x7ad6be(0x227)](352.747367,171.981834,350.28365,172.650414,347.78,173.13),_0x19b8af[_0x7ad6be(0x227)](345.506501,173.59759,343.170462,173.678726,340.87,173.37),_0x19b8af[_0x7ad6be(0x227)](342.583333,163.07,344.193333,152.736667,345.7,142.37),_0x19b8af[_0x7ad6be(0x227)](345.78,141.83,345.85,141.29,345.93,140.74),_0x19b8af[_0x7ad6be(0x227)](347.937647,140.185143,349.849427,139.32872,351.6,138.2),_0x19b8af['bezierCurveTo'](353.402611,137.059465,355.129551,135.803509,356.77,134.44),_0x19b8af['bezierCurveTo'](360.020292,131.719246,363.108885,128.810959,366.02,125.73),_0x19b8af['bezierCurveTo'](368.95,122.67,371.76,119.51,374.48,116.28),_0x19b8af['bezierCurveTo'](377.2,113.05,379.86,109.75,382.4,106.38),_0x19b8af[_0x7ad6be(0x227)](379.79,109.7,377.07,112.93,374.29,116.11),_0x19b8af['bezierCurveTo'](371.51,119.29,368.63,122.38,365.65,125.37),_0x19b8af[_0x7ad6be(0x227)](362.693277,128.372353,359.564676,131.200448,356.28,133.84),_0x19b8af[_0x7ad6be(0x227)](354.645971,135.148027,352.925382,136.344087,351.13,137.42),_0x19b8af[_0x7ad6be(0x227)](349.573662,138.386994,347.891052,139.134074,346.13,139.64),_0x19b8af[_0x7ad6be(0x227)](347.616667,129.34,349.023333,119.006667,350.35,108.64),_0x19b8af['bezierCurveTo'](350.57,106.84,350.78,105.04,0x15f,103.24),_0x19b8af['bezierCurveTo'](353.772959,102.887322,356.382857,101.733546,358.51,99.92),_0x19b8af['bezierCurveTo'](360.689247,98.129763,362.646488,96.085235,364.34,93.83),_0x19b8af[_0x7ad6be(0x227)](366.045862,91.599723,367.605781,89.261516,369.01,86.83),_0x19b8af[_0x7ad6be(0x227)](370.424961,84.40499,371.713354,81.908312,372.87,79.35),_0x19b8af['bezierCurveTo'](371.664016,81.886654,370.328935,84.359892,368.87,86.76),_0x19b8af[_0x7ad6be(0x227)](367.43589,89.167971,365.84583,91.47957,364.11,93.68),_0x19b8af[_0x7ad6be(0x227)](362.402661,95.90958,360.431652,97.92424,358.24,99.68),_0x19b8af[_0x7ad6be(0x227)](356.181381,101.379613,353.679738,102.455215,351.03,102.78),_0x19b8af[_0x7ad6be(0x227)](351.48,99.13,351.94,95.48,352.36,91.78),_0x19b8af[_0x7ad6be(0x227)](352.91,87.02,353.45,82.26,353.84,77.48),_0x19b8af[_0x7ad6be(0x227)](353.9683,76.612156,354.041779,75.737088,354.06,74.86),_0x19b8af[_0x7ad6be(0x305)](354.06,74.86),_0x19b8af[_0x7ad6be(0x227)](353.767911,76.227538,353.547609,77.609429,353.4,0x4f),_0x19b8af[_0x7ad6be(0x305)](352.83,83.08),_0x19b8af[_0x7ad6be(0x305)](351.66,91.23),_0x19b8af['bezierCurveTo'](350.86,96.67,350.036667,102.1,349.19,107.52),_0x19b8af[_0x7ad6be(0x227)](348.96,0x6d,348.71,110.52,348.47,111.95),_0x19b8af[_0x7ad6be(0x227)](346.380877,110.605461,344.506467,108.953553,342.91,107.05),_0x19b8af['bezierCurveTo'](341.207134,104.948594,339.794484,102.627812,338.71,100.15),_0x19b8af[_0x7ad6be(0x227)](337.631198,97.658606,336.803763,95.065754,336.24,92.41),_0x19b8af['bezierCurveTo'](335.652362,89.750891,335.317538,87.042163,335.24,84.32),_0x19b8af['bezierCurveTo'](335.239879,87.048686,335.501071,89.771113,336.02,92.45),_0x19b8af['bezierCurveTo'](336.526469,95.139226,337.296862,97.771962,338.32,100.31),_0x19b8af[_0x7ad6be(0x227)](339.364301,102.853909,340.746748,105.245442,342.43,107.42),_0x19b8af['bezierCurveTo'](344.096692,109.506877,346.080879,111.318967,348.31,112.79),_0x19b8af['bezierCurveTo'](346.85,121.876667,345.33,130.953333,343.75,140.02),_0x19b8af[_0x7ad6be(0x227)](342.99,144.34,342.21,148.64,341.43,152.95),_0x19b8af[_0x7ad6be(0x227)](338.9,149.65,336.59,146.14,334.35,142.6),_0x19b8af[_0x7ad6be(0x227)](331.84,138.6,329.43,134.6,327.08,130.48),_0x19b8af['bezierCurveTo'](322.413333,122.313333,317.893333,114.033333,313.52,105.64),_0x19b8af[_0x7ad6be(0x227)](317.68,114.12,321.98,122.51,326.52,130.8),_0x19b8af['bezierCurveTo'](328.773333,134.946667,331.106667,139.053333,333.52,143.12),_0x19b8af[_0x7ad6be(0x227)](335.853003,147.115524,338.396586,150.984307,341.14,154.71),_0x19b8af['bezierCurveTo'](338.08,171.43,334.79,188.09,331.14,204.71),_0x19b8af[_0x7ad6be(0x305)](330.93,205.64),_0x19b8af[_0x7ad6be(0x227)](330.54,204.77,330.14,203.92,329.7,203.09),_0x19b8af[_0x7ad6be(0x305)](328.46,200.64),_0x19b8af[_0x7ad6be(0x305)](327.15,198.24),_0x19b8af['bezierCurveTo'](326.29,196.63,325.4,195.04,324.5,193.46),_0x19b8af[_0x7ad6be(0x227)](323.6,191.88,322.71,190.29,321.78,188.72),_0x19b8af[_0x7ad6be(0x227)](318.13,182.42,314.34,176.21,310.55,0xaa),_0x19b8af[_0x7ad6be(0x227)](302.93,157.6,295.18,145.29,287.3,133.07),_0x19b8af['bezierCurveTo'](294.96,145.43,302.5,157.866667,309.92,170.38),_0x19b8af[_0x7ad6be(0x227)](313.61,176.65,317.28,182.92,320.82,189.27),_0x19b8af[_0x7ad6be(0x227)](321.72,190.85,322.59,192.44,323.46,194.04),_0x19b8af[_0x7ad6be(0x227)](324.33,195.64,325.19,197.23,326.02,198.84),_0x19b8af[_0x7ad6be(0x305)](327.28,201.25),_0x19b8af[_0x7ad6be(0x305)](328.46,203.69),_0x19b8af[_0x7ad6be(0x227)](329.2,205.12,329.79,206.59,330.4,208.05),_0x19b8af['bezierCurveTo'](328.27,217.66,326.14,227.26,323.83,236.82),_0x19b8af[_0x7ad6be(0x227)](323.31,0xef,322.77,241.17,322.23,243.35),_0x19b8af[_0x7ad6be(0x227)](319.523513,237.538154,316.457575,231.900567,313.05,226.47),_0x19b8af[_0x7ad6be(0x227)](309.17,220.21,304.89,214.22,300.51,208.33),_0x19b8af[_0x7ad6be(0x227)](296.13,202.44,291.51,196.75,286.74,191.14),_0x19b8af['bezierCurveTo'](281.97,185.53,277.13,180.05,272.07,174.74),_0x19b8af[_0x7ad6be(0x227)](277.01,180.16,281.74,185.74,286.36,191.46),_0x19b8af[_0x7ad6be(0x227)](290.98,197.18,295.45,202.95,299.7,208.92),_0x19b8af[_0x7ad6be(0x227)](303.95,214.89,308.06,220.92,311.76,227.24),_0x19b8af['bezierCurveTo'](315.459615,233.407716,318.695213,239.842143,321.44,246.49),_0x19b8af[_0x7ad6be(0x227)](319.56,253.903333,317.56,261.293333,315.44,268.66),_0x19b8af[_0x7ad6be(0x305)](311.15,283.19),_0x19b8af['bezierCurveTo'](310.43586,280.708811,309.577739,278.271346,308.58,275.89),_0x19b8af[_0x7ad6be(0x227)](307.125264,272.474241,305.455242,269.154237,303.58,265.95),_0x19b8af[_0x7ad6be(0x227)](299.85838,259.571158,295.67733,253.471705,291.07,247.7),_0x19b8af[_0x7ad6be(0x227)](286.51,241.91,281.65,236.37,276.59,231.03),_0x19b8af[_0x7ad6be(0x227)](271.53,225.69,266.29,220.53,260.8,215.63),_0x19b8af['bezierCurveTo'](266.18,220.63,271.29,225.93,276.22,231.37),_0x19b8af[_0x7ad6be(0x227)](281.15,236.81,285.87,242.45,290.27,248.31),_0x19b8af[_0x7ad6be(0x227)](294.711787,254.133096,298.722451,260.272753,302.27,266.68),_0x19b8af[_0x7ad6be(0x227)](304.033085,269.865329,305.586386,273.162337,306.92,276.55),_0x19b8af['bezierCurveTo'](308.270743,279.897749,309.298741,283.366825,309.99,286.91),_0x19b8af[_0x7ad6be(0x305)](308.34,292.3),_0x19b8af[_0x7ad6be(0x305)](305.78,0x12c),_0x19b8af[_0x7ad6be(0x305)](303.08,307.79),_0x19b8af[_0x7ad6be(0x305)](302.38,309.67),_0x19b8af[_0x7ad6be(0x227)](298.932766,303.588345,295.056269,297.760233,290.78,292.23),_0x19b8af['bezierCurveTo'](286.07,286.23,281.01,280.49,275.78,274.97),_0x19b8af[_0x7ad6be(0x227)](270.55,269.45,264.98,264.22,259.31,259.13),_0x19b8af['bezierCurveTo'](253.64,254.04,247.81,249.13,241.77,244.52),_0x19b8af['bezierCurveTo'](247.71,249.27,253.41,254.32,258.97,259.52),_0x19b8af[_0x7ad6be(0x227)](264.53,264.72,269.9,270.1,275.05,275.68),_0x19b8af[_0x7ad6be(0x227)](280.2,281.26,285.05,287.09,289.61,293.16),_0x19b8af[_0x7ad6be(0x227)](294.060285,299.171244,298.029271,305.524297,301.48,312.16),_0x19b8af[_0x7ad6be(0x305)](300.23,315.52),_0x19b8af[_0x7ad6be(0x305)](294.37,330.91),_0x19b8af[_0x7ad6be(0x227)](291.99,337.05,289.593333,343.18,287.18,349.3),_0x19b8af[_0x7ad6be(0x227)](283.87,347.64,281.89,344.1,279.84,340.74),_0x19b8af['bezierCurveTo'](277.68,337.04,275.63,333.25,273.58,329.46),_0x19b8af['lineTo'](270.51,323.78),_0x19b8af['bezierCurveTo'](269.42,321.9,268.41,319.98,267.26,318.16),_0x19b8af[_0x7ad6be(0x305)](265.57,315.39),_0x19b8af[_0x7ad6be(0x305)](263.81,312.67),_0x19b8af[_0x7ad6be(0x227)](262.66,310.84,261.45,309.06,260.24,307.27),_0x19b8af[_0x7ad6be(0x227)](255.4,300.13,250.33,293.15,245.14,286.27),_0x19b8af[_0x7ad6be(0x227)](239.95,279.39,234.66,272.58,229.25,265.87),_0x19b8af[_0x7ad6be(0x227)](234.53,272.683333,239.693333,279.58,244.74,286.56),_0x19b8af[_0x7ad6be(0x227)](249.79,293.56,254.74,300.56,259.41,307.82),_0x19b8af[_0x7ad6be(0x227)](260.58,309.63,261.75,311.43,262.86,313.27),_0x19b8af[_0x7ad6be(0x305)](264.55,316.01),_0x19b8af[_0x7ad6be(0x305)](266.18,318.79),_0x19b8af[_0x7ad6be(0x227)](267.29,320.63,268.25,322.55,269.29,324.42),_0x19b8af[_0x7ad6be(0x305)](272.29,330.16),_0x19b8af[_0x7ad6be(0x227)](274.29,333.99,276.29,337.82,278.36,341.61),_0x19b8af[_0x7ad6be(0x227)](279.408258,343.540652,280.580722,345.40123,281.87,347.18),_0x19b8af[_0x7ad6be(0x227)](282.552636,348.10872,283.345052,348.951501,284.23,349.69),_0x19b8af[_0x7ad6be(0x227)](284.930562,350.256711,285.687936,350.749339,286.49,351.16),_0x19b8af['bezierCurveTo'](282.943333,360.18,279.36,369.18,275.74,378.16),_0x19b8af['bezierCurveTo'](272.678992,375.756461,269.779399,373.154177,267.06,370.37),_0x19b8af['bezierCurveTo'](264.050646,367.3051,261.197054,364.091055,258.51,360.74),_0x19b8af['bezierCurveTo'](253.113167,354.032122,248.104966,347.02064,243.51,339.74),_0x19b8af[_0x7ad6be(0x227)](238.87,332.47,234.51,324.99,230.45,317.4),_0x19b8af[_0x7ad6be(0x227)](226.39,309.81,222.45,302.09,218.9,294.22),_0x19b8af[_0x7ad6be(0x227)](222.31,302.16,226.06,309.95,0xe6,317.63),_0x19b8af[_0x7ad6be(0x227)](233.94,325.31,238.15,332.88,242.66,340.27),_0x19b8af[_0x7ad6be(0x227)](247.134146,347.686959,252.028804,354.841974,257.32,361.7),_0x19b8af[_0x7ad6be(0x227)](259.967844,365.143315,262.791598,368.447708,265.78,371.6),_0x19b8af[_0x7ad6be(0x227)](268.633614,374.64481,271.697841,377.485151,274.95,380.1),_0x19b8af[_0x7ad6be(0x227)](270.03,392.36,265.07,404.6,260.07,416.82),_0x19b8af[_0x7ad6be(0x227)](257.405305,414.216058,254.944723,411.411128,252.71,408.43),_0x19b8af[_0x7ad6be(0x227)](250.19,405.11,247.84,401.65,245.61,398.11),_0x19b8af[_0x7ad6be(0x227)](241.18,391.02,237.18,383.63,233.44,376.11),_0x19b8af[_0x7ad6be(0x227)](229.7,368.59,226.22,360.96,222.93,353.23),_0x19b8af[_0x7ad6be(0x227)](219.64,345.5,216.5,337.71,213.62,329.82),_0x19b8af[_0x7ad6be(0x227)](216.34,337.77,219.33,345.63,222.47,353.43),_0x19b8af[_0x7ad6be(0x227)](225.61,361.23,228.95,368.94,232.54,376.55),_0x19b8af[_0x7ad6be(0x227)](236.13,384.16,0xf0,391.64,244.33,398.89),_0x19b8af[_0x7ad6be(0x227)](246.51,402.5,248.81,406.05,251.33,409.47),_0x19b8af[_0x7ad6be(0x227)](253.727855,412.797666,256.40415,415.915549,259.33,418.79),_0x19b8af['bezierCurveTo'](255.15,429.01,250.953333,439.226667,246.74,449.44),_0x19b8af[_0x7ad6be(0x227)](244.778777,447.210592,242.996576,444.829866,241.41,442.32),_0x19b8af[_0x7ad6be(0x227)](239.52,439.43,237.79,436.41,236.07,433.4),_0x19b8af[_0x7ad6be(0x227)](232.66,427.34,229.43,421.17,225.97,415.11),_0x19b8af['bezierCurveTo'](224.25,412.11,222.44,409.11,220.52,406.17),_0x19b8af[_0x7ad6be(0x227)](219.52,404.73,218.52,403.29,217.41,401.94),_0x19b8af[_0x7ad6be(0x227)](216.3,400.59,215.2,399.27,214.22,397.83),_0x19b8af[_0x7ad6be(0x227)](212.202342,395.007135,210.505222,391.96842,209.16,388.77),_0x19b8af['bezierCurveTo'](207.794006,385.579613,206.881803,382.213553,206.45,378.77),_0x19b8af[_0x7ad6be(0x227)](206.794245,382.246821,207.629204,385.657359,208.93,388.9),_0x19b8af[_0x7ad6be(0x227)](210.205438,392.159366,211.842331,395.265438,213.81,398.16),_0x19b8af[_0x7ad6be(0x227)](214.75,399.62,215.9,400.98,216.92,402.37),_0x19b8af[_0x7ad6be(0x227)](217.94,403.76,218.92,405.18,219.92,406.62),_0x19b8af[_0x7ad6be(0x227)](221.76,409.56,223.496667,412.56,225.13,415.62),_0x19b8af[_0x7ad6be(0x227)](228.43,421.74,231.51,427.98,234.79,434.14),_0x19b8af[_0x7ad6be(0x227)](236.44,437.21,238.1,440.29,239.96,443.27),_0x19b8af[_0x7ad6be(0x227)](241.69116,446.199586,243.700435,448.955642,245.96,451.5),_0x19b8af[_0x7ad6be(0x227)](245.73,452.05,245.51,452.61,245.28,453.16),_0x19b8af[_0x7ad6be(0x305)](235.65,476.16),_0x19b8af[_0x7ad6be(0x227)](233.234419,473.928115,231.116935,471.393856,229.35,468.62),_0x19b8af[_0x7ad6be(0x305)](227.86,466.23),_0x19b8af[_0x7ad6be(0x305)](226.53,463.74),_0x19b8af[_0x7ad6be(0x227)](226.07,462.92,225.7,462.05,225.29,461.2),_0x19b8af['bezierCurveTo'](224.88,460.35,224.47,459.5,224.12,458.62),_0x19b8af[_0x7ad6be(0x227)](222.637911,455.133693,221.349287,451.568275,220.26,447.94),_0x19b8af[_0x7ad6be(0x227)](219.17,444.3,218.19,440.63,217.46,436.94),_0x19b8af['bezierCurveTo'](218.03,440.71,218.84,444.43,219.78,448.12),_0x19b8af[_0x7ad6be(0x227)](220.651169,451.803459,221.726156,455.435715,0xdf,0x1cb),_0x19b8af[_0x7ad6be(0x227)](223.31,459.91,223.69,460.79,224.06,461.67),_0x19b8af[_0x7ad6be(0x227)](224.43,462.55,224.77,463.45,225.21,464.3),_0x19b8af[_0x7ad6be(0x305)](226.46,466.9),_0x19b8af[_0x7ad6be(0x305)](227.87,469.42),_0x19b8af[_0x7ad6be(0x227)](229.710692,472.611692,231.993268,475.527195,234.65,478.08),_0x19b8af[_0x7ad6be(0x305)](225.34,500.28),_0x19b8af[_0x7ad6be(0x227)](223.567784,498.932077,222.096411,497.229099,221.02,495.28),_0x19b8af['bezierCurveTo'](219.682772,492.949719,218.654152,490.455485,217.96,487.86),_0x19b8af[_0x7ad6be(0x227)](217.240155,485.235686,216.71539,482.561726,216.39,479.86),_0x19b8af[_0x7ad6be(0x227)](216.048256,477.146861,215.881245,474.414563,215.89,471.68),_0x19b8af['bezierCurveTo'](215.715019,474.420543,215.715019,477.169457,215.89,479.91),_0x19b8af[_0x7ad6be(0x227)](216.051088,482.664265,216.422166,485.402217,0xd9,488.1),_0x19b8af[_0x7ad6be(0x227)](217.563246,490.841192,218.473932,493.49932,219.71,496.01),_0x19b8af[_0x7ad6be(0x227)](220.864811,498.365539,222.524089,500.437928,224.57,502.08),_0x19b8af['lineTo'](194.12,574.71),_0x19b8af[_0x7ad6be(0x227)](193.118154,577.053783,193.766894,579.777055,195.717847,581.41742),_0x19b8af[_0x7ad6be(0x227)](197.6688,583.057785,200.463015,583.229356,202.6,581.84),_0x19b8af[_0x7ad6be(0x227)](203.294888,581.395101,203.885101,580.804888,204.33,580.11),_0x19b8af[_0x7ad6be(0x227)](204.537742,579.764552,204.718287,579.403462,204.87,579.03),_0x19b8af[_0x7ad6be(0x305)](205.26,578.03),_0x19b8af['lineTo'](211.54,562.23),_0x19b8af[_0x7ad6be(0x305)](224.09,530.63),_0x19b8af[_0x7ad6be(0x305)](233.09,507.93),_0x19b8af[_0x7ad6be(0x227)](237.58,508.07,242.09,508.14,246.55,507.93),_0x19b8af[_0x7ad6be(0x227)](251.01,507.72,255.72,507.44,260.27,506.93),_0x19b8af[_0x7ad6be(0x227)](264.82,506.42,269.38,505.81,273.89,505.03),_0x19b8af[_0x7ad6be(0x227)](278.4,504.25,282.89,503.32,287.31,502.14),_0x19b8af[_0x7ad6be(0x227)](282.85,503.14,278.31,503.91,273.81,504.53),_0x19b8af[_0x7ad6be(0x227)](269.31,505.15,264.74,505.63,260.19,505.93),_0x19b8af[_0x7ad6be(0x227)](255.64,506.23,251.08,506.42,246.52,506.4),_0x19b8af[_0x7ad6be(0x227)](242.29,506.4,238.07,506.21,233.87,505.94),_0x19b8af['lineTo'](242.87,483.17),_0x19b8af['bezierCurveTo'](247.748633,484.67415,252.779669,485.630046,257.87,486.02),_0x19b8af[_0x7ad6be(0x305)](261.81,486.28),_0x19b8af[_0x7ad6be(0x305)](265.75,486.37),_0x19b8af[_0x7ad6be(0x227)](267.06,486.37,268.38,486.37,269.69,486.37),_0x19b8af[_0x7ad6be(0x227)](0x10f,486.37,272.31,486.37,273.62,486.24),_0x19b8af[_0x7ad6be(0x227)](278.86,486.02,284.08,485.46,289.26,484.78),_0x19b8af[_0x7ad6be(0x227)](294.44,484.1,299.61,483.21,304.72,482.07),_0x19b8af[_0x7ad6be(0x227)](299.58,483.07,294.4,483.74,289.21,484.28),_0x19b8af['bezierCurveTo'](284.02,484.82,278.8,485.19,273.59,485.28),_0x19b8af[_0x7ad6be(0x227)](272.29,485.34,270.98,485.28,269.68,485.28),_0x19b8af[_0x7ad6be(0x227)](268.38,485.28,267.08,485.28,265.78,485.18),_0x19b8af[_0x7ad6be(0x305)](261.89,484.97),_0x19b8af[_0x7ad6be(0x305)](258.02,484.58),_0x19b8af[_0x7ad6be(0x227)](253.124193,484.047191,248.301856,482.977424,243.64,481.39),_0x19b8af[_0x7ad6be(0x305)](249.19,467.39),_0x19b8af[_0x7ad6be(0x227)](250.19,464.99,251.09,462.58,252.04,460.18),_0x19b8af[_0x7ad6be(0x305)](257.36,461.07),_0x19b8af[_0x7ad6be(0x305)](260.36,461.57),_0x19b8af[_0x7ad6be(0x227)](261.36,461.72,262.36,461.78,263.36,461.89),_0x19b8af['lineTo'](269.36,462.48),_0x19b8af[_0x7ad6be(0x227)](271.36,462.61,273.36,462.64,275.36,462.73),_0x19b8af[_0x7ad6be(0x305)](278.36,462.84),_0x19b8af[_0x7ad6be(0x227)](279.36,462.84,280.36,462.84,281.36,462.79),_0x19b8af['lineTo'](287.36,462.65),_0x19b8af['bezierCurveTo'](291.36,462.34,295.36,462.15,299.26,461.58),_0x19b8af['bezierCurveTo'](307.162025,460.627802,314.987783,459.124133,322.68,457.08),_0x19b8af[_0x7ad6be(0x227)](330.372552,455.087162,337.898555,452.499367,345.19,449.34),_0x19b8af[_0x7ad6be(0x227)](337.845928,452.34203,330.279858,454.769325,322.56,456.6),_0x19b8af['bezierCurveTo'](314.859048,458.475463,307.03677,459.812033,299.15,460.6),_0x19b8af[_0x7ad6be(0x227)](295.22,461.08,291.26,461.18,287.32,461.41),_0x19b8af[_0x7ad6be(0x305)](281.39,461.41),_0x19b8af[_0x7ad6be(0x227)](280.39,461.41,279.39,461.41,278.39,461.41),_0x19b8af[_0x7ad6be(0x305)](275.44,461.24),_0x19b8af[_0x7ad6be(0x227)](273.44,461.11,271.49,461.04,269.53,460.87),_0x19b8af[_0x7ad6be(0x305)](263.65,460.16),_0x19b8af[_0x7ad6be(0x227)](262.65,460.03,261.65,459.95,260.72,459.79),_0x19b8af[_0x7ad6be(0x305)](257.81,459.23),_0x19b8af[_0x7ad6be(0x305)](252.92,458.31),_0x19b8af['bezierCurveTo'](255.886667,450.803333,258.83,443.283333,261.75,435.75),_0x19b8af['lineTo'](264.75,427.87),_0x19b8af['lineTo'](271.61,0x1ac),_0x19b8af['lineTo'](275.28,428.06),_0x19b8af[_0x7ad6be(0x227)](276.5,428.06,277.72,427.99,278.95,427.95),_0x19b8af[_0x7ad6be(0x305)](286.28,427.7),_0x19b8af[_0x7ad6be(0x305)](293.59,427.1),_0x19b8af[_0x7ad6be(0x305)](297.24,426.8),_0x19b8af['lineTo'](300.88,426.33),_0x19b8af[_0x7ad6be(0x227)](303.3,426.01,305.73,425.73,308.15,425.38),_0x19b8af[_0x7ad6be(0x227)](312.96,424.55,317.79,423.82,322.56,422.75),_0x19b8af[_0x7ad6be(0x227)](332.11993,420.773435,341.569582,418.296698,350.87,415.33),_0x19b8af[_0x7ad6be(0x227)](360.149488,412.428191,369.248783,408.978807,378.12,0x195),_0x19b8af['bezierCurveTo'](369.169758,408.852543,359.996642,412.16515,350.65,414.92),_0x19b8af['bezierCurveTo'](341.325156,417.724595,331.858624,420.034482,322.29,421.84),_0x19b8af[_0x7ad6be(0x227)](317.53,422.84,312.7,423.47,307.9,424.21),_0x19b8af['bezierCurveTo'](305.49,424.52,303.07,424.76,300.66,425.03),_0x19b8af['lineTo'](297.03,425.43),_0x19b8af[_0x7ad6be(0x305)](293.4,425.68),_0x19b8af[_0x7ad6be(0x305)](286.13,426.14),_0x19b8af[_0x7ad6be(0x305)](278.85,426.27),_0x19b8af[_0x7ad6be(0x227)](277.64,426.27,276.42,426.33,275.21,426.27),_0x19b8af[_0x7ad6be(0x305)](271.57,426.14),_0x19b8af[_0x7ad6be(0x305)](265.44,425.92),_0x19b8af['lineTo'](273.9,404.05),_0x19b8af[_0x7ad6be(0x305)](276.44,397.42),_0x19b8af['bezierCurveTo'](281.770413,397.776303,287.120775,397.70608,292.44,397.21),_0x19b8af[_0x7ad6be(0x227)](297.9039,396.661021,303.32566,395.752383,308.67,394.49),_0x19b8af[_0x7ad6be(0x227)](319.304232,391.902545,329.68049,388.351187,339.67,383.88),_0x19b8af[_0x7ad6be(0x227)](349.660792,379.456497,359.372192,374.427141,368.75,368.82),_0x19b8af[_0x7ad6be(0x227)](378.143829,363.260838,387.208908,357.16403,395.9,350.56),_0x19b8af[_0x7ad6be(0x227)](387.113785,357.02045,377.965537,362.973489,368.5,368.39),_0x19b8af['bezierCurveTo'](359.068327,373.847301,349.313675,378.726297,339.29,0x17f),_0x19b8af[_0x7ad6be(0x227)](329.283202,387.286697,318.907086,390.653914,308.29,393.06),_0x19b8af[_0x7ad6be(0x227)](302.996377,394.226849,297.631313,395.041964,292.23,395.5),_0x19b8af[_0x7ad6be(0x227)](287.210705,395.884995,282.169295,395.884995,277.15,395.5),_0x19b8af[_0x7ad6be(0x227)](280.603333,386.466667,284.033333,377.43,287.44,368.39),_0x19b8af[_0x7ad6be(0x227)](291.168819,368.27132,294.884664,367.890379,298.56,367.25),_0x19b8af['bezierCurveTo'](302.456875,366.589762,306.315704,365.721859,310.12,364.65),_0x19b8af[_0x7ad6be(0x227)](317.703022,362.515407,325.149958,359.924007,332.42,356.89),_0x19b8af[_0x7ad6be(0x227)](339.7,353.89,346.83,350.58,353.85,347.05),_0x19b8af[_0x7ad6be(0x227)](360.87,343.52,367.77,339.76,374.5,335.72),_0x19b8af[_0x7ad6be(0x227)](367.69,339.62,360.7,343.21,353.63,346.6),_0x19b8af[_0x7ad6be(0x227)](346.56,349.99,339.36,353.14,332.05,355.96),_0x19b8af[_0x7ad6be(0x227)](324.766107,358.820936,317.315836,361.238684,309.74,363.2),_0x19b8af[_0x7ad6be(0x227)](305.963906,364.178842,302.138527,364.956602,298.28,365.53),_0x19b8af[_0x7ad6be(0x227)](294.938345,366.030666,291.568185,366.317915,288.19,366.39),_0x19b8af[_0x7ad6be(0x227)](291.443333,357.723333,294.666667,349.056667,297.86,340.39),_0x19b8af[_0x7ad6be(0x227)](298.49,338.79,299.06,337.16,299.66,335.53)),_0x19b8af[_0x7ad6be(0x432)](),_0x19b8af[_0x7ad6be(0x4ca)](),_0x19b8af[_0x7ad6be(0x48f)](),this[_0x7ad6be(0x3c1)]['update']();},Bitmap[_0x32d3d9(0x2c1)][_0x32d3d9(0x385)]=function(_0xdb5d7b,_0x301ced,_0x5f4b07){const _0x5bfe29=_0x32d3d9,_0xf011a2=this[_0x5bfe29(0x354)];_0xdb5d7b=_0xdb5d7b||'#bbbbbb',_0x301ced=_0x301ced||_0x5bfe29(0x57f),_0x5f4b07=_0x5f4b07||'#ffffff',_0xf011a2[_0x5bfe29(0x431)](),_0xf011a2[_0x5bfe29(0x312)]=_0xdb5d7b,(_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['lineWidth']=0.695966,_0xf011a2[_0x5bfe29(0x5b4)](32.118356,32.638166),_0xf011a2[_0x5bfe29(0x227)](36.363751,64.026251,27.872961,82.886942,27.872961,82.886942)),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x312)]=_0x301ced,(_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](30.16965,77.249614),_0xf011a2[_0x5bfe29(0x227)](31.491986,78.154371,30.16965,83.443715,27.107398,89.081043),_0xf011a2[_0x5bfe29(0x227)](24.045146,94.718371,20.495717,98.546186,19.173381,97.64143),_0xf011a2[_0x5bfe29(0x227)](17.851045,96.736674,19.173381,91.447329,22.235633,85.810001),_0xf011a2[_0x5bfe29(0x227)](25.297885,80.172673,28.847314,76.344858,30.16965,77.249614)),_0xf011a2['fill'](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x312)]=_0x5f4b07,_0xf011a2[_0x5bfe29(0x206)]=_0x5f4b07,_0xf011a2[_0x5bfe29(0x2ee)]=0x5,(_0xf011a2[_0x5bfe29(0x431)](),_0xf011a2['transform'](0.695966,0x0,0x0,0.695966,181.842,123.051),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-242.3,-157.8),_0xf011a2[_0x5bfe29(0x305)](-214.1,-130.5),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x431)](),_0xf011a2['transform'](0.31266,0x0,0x0,0.32058,88.64,390.11),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-1050.5,-0x6a5),_0xf011a2['bezierCurveTo'](-1079.4,-1729.8,-1102.2,-1750.4,-1078.2,-1725.7),_0xf011a2[_0x5bfe29(0x227)](-1054.1,-0x6a5,-1052.9,-0x6a5,-1050.5,-0x6a5),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['beginPath'](),_0xf011a2['moveTo'](-1048.5,-0x6a7),_0xf011a2[_0x5bfe29(0x227)](-1077.4,-1731.8,-1100.2,-1752.4,-1076.2,-1727.7),_0xf011a2[_0x5bfe29(0x227)](-1052.1,-0x6a7,-1050.9,-0x6a7,-1048.5,-0x6a7),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-1050.5,-0x6a7),_0xf011a2[_0x5bfe29(0x227)](-1079.4,-1731.8,-1102.2,-1752.4,-1078.2,-1727.7),_0xf011a2[_0x5bfe29(0x227)](-1054.1,-0x6a7,-1052.9,-0x6a7,-1050.5,-0x6a7),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x48f)](),_0xf011a2['beginPath'](),_0xf011a2[_0x5bfe29(0x5b4)](-230.9,-162.8),_0xf011a2[_0x5bfe29(0x305)](-215.2,-132.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['save'](),_0xf011a2['transform'](0.22445,0.070054,-0.053362,0.28457,132.9,389.45),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-1959.5,-1448.4),_0xf011a2[_0x5bfe29(0x227)](-1988.4,-1477.2,-2011.2,-1497.8,-1987.2,-1473.1),_0xf011a2[_0x5bfe29(0x227)](-1963.1,-1448.4,-1961.9,-1448.4,-1959.5,-1448.4),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['beginPath'](),_0xf011a2['moveTo'](-1957.5,-1450.4),_0xf011a2['bezierCurveTo'](-1986.4,-1479.2,-2009.2,-1499.8,-1985.2,-1475.1),_0xf011a2[_0x5bfe29(0x227)](-1961.1,-1450.4,-1959.9,-1450.4,-1957.5,-1450.4),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2['stroke'](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-1959.5,-1450.4),_0xf011a2[_0x5bfe29(0x227)](-1988.4,-1479.2,-2011.2,-1499.8,-1987.2,-1475.1),_0xf011a2[_0x5bfe29(0x227)](-1963.1,-1450.4,-1961.9,-1450.4,-1959.5,-1450.4),_0xf011a2['fill'](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['restore'](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](-217.8,-162.7),_0xf011a2[_0x5bfe29(0x305)](-216.1,-133.5),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2['stroke'](),_0xf011a2[_0x5bfe29(0x431)](),_0xf011a2[_0x5bfe29(0x3e7)](0.22089,0.17769,-0.21484,0.15456,209.48,425.48),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-2652.9,-738.7),_0xf011a2[_0x5bfe29(0x227)](-2681.8,-767.5,-2704.6,-788.1,-2680.6,-763.4),_0xf011a2[_0x5bfe29(0x227)](-2656.5,-738.7,-2655.3,-738.7,-2652.9,-738.7),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-2650.9,-740.7),_0xf011a2['bezierCurveTo'](-2679.8,-769.5,-2702.6,-790.1,-2678.6,-765.4),_0xf011a2[_0x5bfe29(0x227)](-2654.5,-740.7,-2653.3,-740.7,-2650.9,-740.7),_0xf011a2['fill'](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-2652.9,-740.7),_0xf011a2[_0x5bfe29(0x227)](-2681.8,-769.5,-2704.6,-790.1,-2680.6,-765.4),_0xf011a2[_0x5bfe29(0x227)](-2656.5,-740.7,-2655.3,-740.7,-2652.9,-740.7),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x48f)](),_0xf011a2['beginPath'](),_0xf011a2[_0x5bfe29(0x5b4)](-196.4,-158.1),_0xf011a2[_0x5bfe29(0x305)](-216.8,-133.7),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['save'](),_0xf011a2[_0x5bfe29(0x3e7)](-0.002675,0.26549,-0.23659,0.00452,270.1,476.54),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-2416.6,2007.2),_0xf011a2[_0x5bfe29(0x227)](-2445.5,1978.4,-2468.3,1957.8,-2444.3,1982.5),_0xf011a2['bezierCurveTo'](-2420.2,2007.2,-0x973,2007.2,-2416.6,2007.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-2414.6,2005.2),_0xf011a2[_0x5bfe29(0x227)](-2443.5,1976.4,-2466.3,1955.8,-2442.3,1980.5),_0xf011a2[_0x5bfe29(0x227)](-2418.2,2005.2,-0x971,2005.2,-2414.6,2005.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2['stroke'](),_0xf011a2['beginPath'](),_0xf011a2[_0x5bfe29(0x5b4)](-2416.6,2005.2),_0xf011a2[_0x5bfe29(0x227)](-2445.5,1976.4,-2468.3,1955.8,-2444.3,1980.5),_0xf011a2[_0x5bfe29(0x227)](-2420.2,2005.2,-0x973,2005.2,-2416.6,2005.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2['stroke'](),_0xf011a2[_0x5bfe29(0x48f)](),_0xf011a2['beginPath'](),_0xf011a2['moveTo'](-246.9,-141.7),_0xf011a2['lineTo'](-214.2,-131.4),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x431)](),_0xf011a2['transform'](0.24275,-0.15327,0.12697,0.28299,44.094,441.92),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-85.8,-2104.9),_0xf011a2[_0x5bfe29(0x227)](-114.7,-2133.7,-137.5,-2154.3,-113.5,-2129.6),_0xf011a2['bezierCurveTo'](-89.4,-2104.9,-88.2,-2104.9,-85.8,-2104.9),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2['stroke'](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-83.8,-2106.9),_0xf011a2[_0x5bfe29(0x227)](-112.7,-2135.7,-135.5,-2156.3,-111.5,-2131.6),_0xf011a2[_0x5bfe29(0x227)](-87.4,-2106.9,-86.2,-2106.9,-83.8,-2106.9),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-85.8,-2106.9),_0xf011a2['bezierCurveTo'](-114.7,-2135.7,-137.5,-2156.3,-113.5,-2131.6),_0xf011a2['bezierCurveTo'](-89.4,-2106.9,-88.2,-2106.9,-85.8,-2106.9),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x48f)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-185.8,-142.3),_0xf011a2[_0x5bfe29(0x305)](-218.5,-0x84),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x431)](),_0xf011a2[_0x5bfe29(0x3e7)](-0.24275,-0.15327,-0.12697,0.28299,270.99,441.28),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](2314.6,-804.9),_0xf011a2[_0x5bfe29(0x227)](2285.7,-833.7,2262.9,-854.3,2286.9,-829.6),_0xf011a2[_0x5bfe29(0x227)](0x907,-804.9,2312.2,-804.9,2314.6,-804.9),_0xf011a2['fill'](),_0xf011a2['stroke'](),_0xf011a2['beginPath'](),_0xf011a2['moveTo'](2316.6,-806.9),_0xf011a2[_0x5bfe29(0x227)](2287.7,-835.7,2264.9,-856.3,2288.9,-831.6),_0xf011a2[_0x5bfe29(0x227)](0x909,-806.9,2314.2,-806.9,2316.6,-806.9),_0xf011a2['fill'](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](2314.6,-806.9),_0xf011a2['bezierCurveTo'](2285.7,-835.7,2262.9,-856.3,2286.9,-831.6),_0xf011a2[_0x5bfe29(0x227)](0x907,-806.9,2312.2,-806.9,2314.6,-806.9),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x48f)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](-231.8,-129.4),_0xf011a2[_0x5bfe29(0x305)](-213.2,-134.7),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x431)](),_0xf011a2[_0x5bfe29(0x3e7)](0.023653,-0.076388,0.19356,0.018706,63.365,546.69),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](8238.8,-2522.6),_0xf011a2[_0x5bfe29(0x227)](8209.9,-2551.4,8187.1,-0xa0c,8211.1,-2547.3),_0xf011a2['bezierCurveTo'](8235.2,-2522.6,8236.4,-2522.6,8238.8,-2522.6),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](8240.8,-2524.6),_0xf011a2[_0x5bfe29(0x227)](8211.9,-2553.4,8189.1,-0xa0e,8213.1,-2549.3),_0xf011a2[_0x5bfe29(0x227)](8237.2,-2524.6,8238.4,-2524.6,8240.8,-2524.6),_0xf011a2['fill'](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](8238.8,-2524.6),_0xf011a2[_0x5bfe29(0x227)](8209.9,-2553.4,8187.1,-0xa0e,8211.1,-2549.3),_0xf011a2[_0x5bfe29(0x227)](8235.2,-2524.6,8236.4,-2524.6,8238.8,-2524.6),_0xf011a2['fill'](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x48f)](),_0xf011a2['beginPath'](),_0xf011a2[_0x5bfe29(0x5b4)](-199.6,-0x80),_0xf011a2[_0x5bfe29(0x305)](-218.2,-133.3),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x431)](),_0xf011a2[_0x5bfe29(0x3e7)](-0.023653,-0.076388,-0.19356,0.018706,252.97,548.1),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](9157.3,1228.3),_0xf011a2[_0x5bfe29(0x227)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0xf011a2[_0x5bfe29(0x227)](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](9159.3,1226.3),_0xf011a2[_0x5bfe29(0x227)](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0xf011a2[_0x5bfe29(0x227)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2['stroke'](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](9157.3,1226.3),_0xf011a2['bezierCurveTo'](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0xf011a2[_0x5bfe29(0x227)](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0xf011a2['restore'](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-198.5,-126.8),_0xf011a2[_0x5bfe29(0x305)](-217.1,-132.1),_0xf011a2['fill'](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['save'](),_0xf011a2[_0x5bfe29(0x3e7)](-0.023653,-0.076388,-0.19356,0.018706,254.11,549.29),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](9157.3,1228.3),_0xf011a2['bezierCurveTo'](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0xf011a2[_0x5bfe29(0x227)](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0xf011a2['fill'](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](9159.3,1226.3),_0xf011a2[_0x5bfe29(0x227)](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0xf011a2[_0x5bfe29(0x227)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](9157.3,1226.3),_0xf011a2[_0x5bfe29(0x227)](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0xf011a2['bezierCurveTo'](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['restore'](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-215.6,-132.9),_0xf011a2[_0x5bfe29(0x305)](-215.6,-128.2),_0xf011a2['fill'](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-206.5,-160.9),_0xf011a2['lineTo'](-215.4,-134.6),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x431)](),_0xf011a2['transform'](0.14296,0.24045,-0.25629,0.054271,247.7,457.79),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-2632.7,307.2),_0xf011a2['bezierCurveTo'](-2661.6,278.4,-2684.4,257.8,-2660.4,282.5),_0xf011a2[_0x5bfe29(0x227)](-2636.3,307.2,-2635.1,307.2,-2632.7,307.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['beginPath'](),_0xf011a2[_0x5bfe29(0x5b4)](-2630.7,305.2),_0xf011a2[_0x5bfe29(0x227)](-2659.6,276.4,-2682.4,255.8,-2658.4,280.5),_0xf011a2[_0x5bfe29(0x227)](-2634.3,305.2,-2633.1,305.2,-2630.7,305.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-2632.7,305.2),_0xf011a2['bezierCurveTo'](-2661.6,276.4,-2684.4,255.8,-2660.4,280.5),_0xf011a2[_0x5bfe29(0x227)](-2636.3,305.2,-2635.1,305.2,-2632.7,305.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x48f)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](-188.1,-148.7),_0xf011a2[_0x5bfe29(0x305)](-215.9,-0x87),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['save'](),_0xf011a2[_0x5bfe29(0x3e7)](-0.097581,0.23264,-0.2229,-0.086065,286.11,525.8),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-1809.9,2931.2),_0xf011a2[_0x5bfe29(0x227)](-1838.8,2902.4,-1861.6,2881.8,-1837.6,2906.5),_0xf011a2[_0x5bfe29(0x227)](-1813.5,2931.2,-1812.3,2931.2,-1809.9,2931.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-1807.9,2929.2),_0xf011a2[_0x5bfe29(0x227)](-1836.8,2900.4,-1859.6,2879.8,-1835.6,2904.5),_0xf011a2[_0x5bfe29(0x227)](-1811.5,2929.2,-1810.3,2929.2,-1807.9,2929.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-1809.9,2929.2),_0xf011a2['bezierCurveTo'](-1838.8,2900.4,-1861.6,2879.8,-1837.6,2904.5),_0xf011a2['bezierCurveTo'](-1813.5,2929.2,-1812.3,2929.2,-1809.9,2929.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x48f)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-183.8,-130.7),_0xf011a2[_0x5bfe29(0x305)](-218.1,-134.1),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['save'](),_0xf011a2[_0x5bfe29(0x3e7)](-0.17214,-0.22728,-0.2201,0.20074,299.56,495.11),_0xf011a2['beginPath'](),_0xf011a2['moveTo'](2783.6,33.2),_0xf011a2[_0x5bfe29(0x227)](2754.7,4.4,2731.9,-16.2,2755.9,8.5),_0xf011a2[_0x5bfe29(0x227)](0xadc,33.2,2781.2,33.2,2783.6,33.2),_0xf011a2['fill'](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](2785.6,31.2),_0xf011a2[_0x5bfe29(0x227)](2756.7,2.4,2733.9,-18.2,2757.9,6.5),_0xf011a2['bezierCurveTo'](0xade,31.2,2783.2,31.2,2785.6,31.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['beginPath'](),_0xf011a2['moveTo'](2783.6,31.2),_0xf011a2[_0x5bfe29(0x227)](2754.7,2.4,2731.9,-18.2,2755.9,6.5),_0xf011a2[_0x5bfe29(0x227)](0xadc,31.2,2781.2,31.2,2783.6,31.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x48f)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2[_0x5bfe29(0x5b4)](-231.5,-136.9),_0xf011a2['lineTo'](-212.2,-134.5),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x431)](),_0xf011a2[_0x5bfe29(0x3e7)](0.049479,-0.058228,0.17433,0.090128,67.628,508.86),_0xf011a2['beginPath'](),_0xf011a2[_0x5bfe29(0x5b4)](5867.7,-3370.8),_0xf011a2[_0x5bfe29(0x227)](5838.8,-3399.6,0x16b8,-3420.2,0x16d0,-3395.5),_0xf011a2[_0x5bfe29(0x227)](0x16e8,-3370.8,5865.3,-3370.8,5867.7,-3370.8),_0xf011a2['fill'](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](5869.7,-3372.8),_0xf011a2[_0x5bfe29(0x227)](5840.8,-3401.6,0x16ba,-3422.2,0x16d2,-3397.5),_0xf011a2[_0x5bfe29(0x227)](0x16ea,-3372.8,5867.3,-3372.8,5869.7,-3372.8),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2['stroke'](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](5867.7,-3372.8),_0xf011a2[_0x5bfe29(0x227)](5838.8,-3401.6,0x16b8,-3422.2,0x16d0,-3397.5),_0xf011a2[_0x5bfe29(0x227)](0x16e8,-3372.8,5865.3,-3372.8,5867.7,-3372.8),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x48f)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](-201.9,-123.4),_0xf011a2[_0x5bfe29(0x305)](-217.4,-135.2),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x431)](),_0xf011a2['transform'](0.005235,-0.076232,-0.18773,-0.057202,244.46,582.26),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](7327.3,2589.8),_0xf011a2[_0x5bfe29(0x227)](7298.4,0xa01,7275.6,2540.4,7299.6,2565.1),_0xf011a2[_0x5bfe29(0x227)](7323.6,2589.8,7324.9,2589.8,7327.3,2589.8),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['beginPath'](),_0xf011a2['moveTo'](7329.3,2587.8),_0xf011a2['bezierCurveTo'](7300.4,0x9ff,7277.6,2538.4,7301.6,2563.1),_0xf011a2[_0x5bfe29(0x227)](7325.6,2587.8,7326.9,2587.8,7329.3,2587.8),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2['beginPath'](),_0xf011a2[_0x5bfe29(0x5b4)](7327.3,2587.8),_0xf011a2[_0x5bfe29(0x227)](7298.4,0x9ff,7275.6,2538.4,7299.6,2563.1),_0xf011a2['bezierCurveTo'](7323.6,2587.8,7324.9,2587.8,7327.3,2587.8),_0xf011a2[_0x5bfe29(0x432)](),_0xf011a2[_0x5bfe29(0x4ca)](),_0xf011a2[_0x5bfe29(0x48f)](),_0xf011a2[_0x5bfe29(0x295)](),_0xf011a2['moveTo'](-0xd7,-133.8),_0xf011a2[_0x5bfe29(0x305)](-216.7,-129.6),_0xf011a2['fill'](),_0xf011a2[_0x5bfe29(0x4ca)]()),_0xf011a2[_0x5bfe29(0x48f)](),this[_0x5bfe29(0x3c1)][_0x5bfe29(0x58f)]();},Bitmap[_0x32d3d9(0x2c1)]['drawLensFlare']=function(_0x2702c4,_0x6e7576,_0x20451f){const _0x5e407e=_0x32d3d9,_0x3661ab=this[_0x5e407e(0x2d3)];_0x3661ab['save'](),_0x3661ab['translate'](_0x2702c4-_0x20451f,_0x6e7576-_0x20451f);const _0x36491b=0x168*(Math['PI']/0xb4),_0x54b23c=ColorManager[_0x5e407e(0x40b)],_0x255f93=_0x54b23c[Math['floor'](Math['random']()*_0x54b23c['length'])];let _0x193d19=ColorManager['adjustHexColor'](_0x255f93,0.85);_0x193d19=ColorManager['hexToRgba'](_0x193d19,Math[_0x5e407e(0x509)]()*0.4+0.2);let _0x461a35=ColorManager['adjustHexColor'](_0x255f93,0.85);_0x461a35=ColorManager['hexToRgba'](_0x461a35,Math[_0x5e407e(0x509)]()*0.2);const _0x555dd7=_0x3661ab[_0x5e407e(0x369)](_0x20451f,_0x20451f,0xa,_0x20451f,_0x20451f,_0x20451f);_0x555dd7[_0x5e407e(0x3e2)](0x0,_0x193d19),_0x555dd7[_0x5e407e(0x3e2)](0x1,_0x461a35),_0x3661ab[_0x5e407e(0x312)]=_0x555dd7,_0x3661ab[_0x5e407e(0x295)](),_0x3661ab[_0x5e407e(0x5b4)](_0x20451f,_0x20451f),_0x3661ab['lineTo'](length,_0x20451f),_0x3661ab[_0x5e407e(0x5bb)](_0x20451f,_0x20451f,_0x20451f,0x0,_0x36491b),_0x3661ab[_0x5e407e(0x305)](_0x20451f,_0x20451f),_0x3661ab['fill'](),_0x3661ab['restore'](),this[_0x5e407e(0x3c1)][_0x5e407e(0x58f)]();},Bitmap['prototype']['drawRainbowLensFlare']=function(_0xa3465,_0x26418f,_0x4595ea){const _0x176603=_0x32d3d9,_0x5cea51=this[_0x176603(0x2d3)];_0x5cea51[_0x176603(0x431)](),_0x5cea51[_0x176603(0x5d4)](_0xa3465-_0x4595ea,_0x26418f-_0x4595ea);const _0x436f0e=0x168*(Math['PI']/0xb4),_0x482005=Math[_0x176603(0x4e6)](0x80),_0x1c291e=_0x176603(0x481)[_0x176603(0x5f9)](_0x482005),_0x33cdb1=_0x176603(0x44a)['format'](_0x482005),_0x1e45e0=_0x176603(0x5b3)[_0x176603(0x5f9)](_0x482005),_0x492ca8='rgba(%1,255,255,1)'[_0x176603(0x5f9)](_0x482005),_0x9ea4e0=_0x176603(0x5b7)[_0x176603(0x5f9)](_0x482005),_0x3cd26e='rgba(255,255,%1,1)'[_0x176603(0x5f9)](_0x482005),_0x537e37='rgba(255,%1,%1,1)'[_0x176603(0x5f9)](_0x482005),_0x22a7ae=_0x176603(0x435)['format'](_0x482005),_0x7dc6de=_0x5cea51[_0x176603(0x369)](_0x4595ea,_0x4595ea,0xa,_0x4595ea,_0x4595ea,_0x4595ea);_0x7dc6de['addColorStop'](0x0,_0x1c291e),_0x7dc6de['addColorStop'](0.7,_0x1c291e),_0x7dc6de[_0x176603(0x3e2)](0.8,_0x33cdb1),_0x7dc6de[_0x176603(0x3e2)](0.81,_0x1e45e0),_0x7dc6de[_0x176603(0x3e2)](0.82,_0x492ca8),_0x7dc6de[_0x176603(0x3e2)](0.8225,_0x9ea4e0),_0x7dc6de['addColorStop'](0.8275,_0x3cd26e),_0x7dc6de[_0x176603(0x3e2)](0.85,_0x537e37),_0x7dc6de[_0x176603(0x3e2)](0.9,_0x22a7ae),_0x7dc6de['addColorStop'](0.95,_0x1c291e),_0x7dc6de[_0x176603(0x3e2)](0x1,_0x1c291e),_0x5cea51[_0x176603(0x312)]=_0x7dc6de,_0x5cea51[_0x176603(0x295)](),_0x5cea51['moveTo'](_0x4595ea,_0x4595ea),_0x5cea51['lineTo'](length,_0x4595ea),_0x5cea51[_0x176603(0x5bb)](_0x4595ea,_0x4595ea,_0x4595ea,0x0,_0x436f0e),_0x5cea51[_0x176603(0x305)](_0x4595ea,_0x4595ea),_0x5cea51[_0x176603(0x432)](),_0x5cea51[_0x176603(0x48f)](),this[_0x176603(0x3c1)]['update']();},Bitmap[_0x32d3d9(0x2c1)][_0x32d3d9(0x3ee)]=function(_0x85fdea){const _0x5e856b=_0x32d3d9,_0x23878c=this[_0x5e856b(0x2d3)];_0x85fdea=_0x85fdea||['#ff0000',_0x5e856b(0x365)],_0x23878c[_0x5e856b(0x431)](),_0x23878c[_0x5e856b(0x3e7)](0x0,0.11738,-0.11738,0x0,99.6785,-39.5524),_0x23878c[_0x5e856b(0x206)]=_0x5e856b(0x526),_0x23878c[_0x5e856b(0x2ee)]=0xa;const _0x2aa3f1=_0x23878c['createLinearGradient'](0x0,this[_0x5e856b(0x58a)],this[_0x5e856b(0x3b2)]*0x2,this['height']*0x14);_0x2aa3f1[_0x5e856b(0x3e2)](0x0,_0x85fdea[0x0]),_0x2aa3f1['addColorStop'](0x1,_0x85fdea[0x1]),_0x23878c[_0x5e856b(0x312)]=_0x2aa3f1,(_0x23878c['beginPath'](),_0x23878c[_0x5e856b(0x5b4)](489.1,324.8),_0x23878c[_0x5e856b(0x227)](492.6,324.4,516.9,356.8,515.5,360.1),_0x23878c['bezierCurveTo'](514.1,363.4,473.9,368.2,471.8,365.3),_0x23878c['bezierCurveTo'](469.7,362.5,485.6,325.2,489.1,324.8)),_0x23878c['fill'](),_0x23878c['stroke'](),(_0x23878c[_0x5e856b(0x295)](),_0x23878c[_0x5e856b(0x5b4)](622.6,156.7),_0x23878c[_0x5e856b(0x227)](622.6,230.8,556.4,341.5,488.3,341.5),_0x23878c['bezierCurveTo'](418.2,341.5,0x162,230.8,0x162,156.7),_0x23878c['bezierCurveTo'](0x162,82.6,414.2,14.3,488.3,14.3),_0x23878c[_0x5e856b(0x227)](562.4,14.3,622.6,82.6,622.6,156.7)),_0x23878c['fill'](),_0x23878c[_0x5e856b(0x4ca)](),_0x23878c[_0x5e856b(0x2ee)]=0x5,(_0x23878c['beginPath'](),_0x23878c[_0x5e856b(0x5b4)](0x1de,0x156),_0x23878c[_0x5e856b(0x227)](486.5,340.3,492.4,338.5,503.5,341.1),_0x23878c[_0x5e856b(0x227)](482.2,561.7,393.8,609.5,366.7,789.6),_0x23878c[_0x5e856b(0x227)](366.2,792.9,368.2,806.3,371.3,831.2)),_0x23878c[_0x5e856b(0x4ca)](),_0x23878c[_0x5e856b(0x48f)](),this[_0x5e856b(0x520)]=0x80,this[_0x5e856b(0x3d8)](this['width']*0x7/0x8,this['height']*0x1/0x4,0x4,_0x5e856b(0x21e));},Bitmap[_0x32d3d9(0x2c1)][_0x32d3d9(0x5ca)]=function(_0x4d7d82){const _0x35345d=_0x32d3d9;_0x4d7d82=_0x4d7d82||'#ff0000';const _0x1b1ab2=this['width']/0x2,_0x47a3bc=this[_0x35345d(0x58a)]/0x2,_0x12ad66=ColorManager[_0x35345d(0x3d6)](_0x4d7d82,0x0),_0x4c5755=ColorManager[_0x35345d(0x3d6)](_0x4d7d82,0.8),_0x17d62f=ColorManager[_0x35345d(0x3d6)](_0x4d7d82,0x1),_0x29b752=this[_0x35345d(0x3b2)]/0x2,_0x2e8a71=0x4;this[_0x35345d(0x517)](0x0,_0x47a3bc-_0x2e8a71,_0x29b752,_0x2e8a71*0x2,_0x12ad66,_0x4c5755),this[_0x35345d(0x3d8)](_0x1b1ab2,_0x47a3bc,_0x2e8a71,_0x17d62f),this[_0x35345d(0x3d8)](_0x1b1ab2,_0x47a3bc,_0x2e8a71-0x2,_0x35345d(0x21e));},Bitmap[_0x32d3d9(0x2c1)]['drawFireworksFlower']=function(_0x1f50f5){const _0xa541c6=_0x32d3d9,_0x4080ab=this[_0xa541c6(0x354)];_0x1f50f5=_0x1f50f5||_0xa541c6(0x3be);const _0x5b0587=this['width']/0x2,_0x3ac315=this[_0xa541c6(0x58a)]/0x2,_0x3af769=ColorManager[_0xa541c6(0x3d6)](_0x1f50f5,0x0),_0x53347e=ColorManager['hexToRgba'](_0x1f50f5,0.25),_0xaf2300=ColorManager[_0xa541c6(0x3d6)](_0x1f50f5,0x1),_0x59f3ed=this[_0xa541c6(0x3b2)]/0x2,_0x4699b3=0x4,_0x5f2eb3=Math['randomInt'](0x3)+0xa;_0x4080ab['translate'](_0x5b0587,_0x3ac315);const _0x21955e=Math['randomInt'](0x3)+0x4;for(let _0x78b131=0x0;_0x78b131<_0x21955e;_0x78b131++){const _0x55a280=_0x59f3ed*((_0x21955e-_0x78b131)/_0x21955e);let _0x275eb9=Math[_0xa541c6(0x4e6)](0xa)+0x28;_0x275eb9/=_0x78b131+0x1;for(let _0x5e8f3b=0x0;_0x5e8f3b<_0x275eb9;_0x5e8f3b++){let _0x1e9da9=Math[_0xa541c6(0x4e6)](Math[_0xa541c6(0x1ec)](_0x55a280/_0x5f2eb3))+_0x55a280*(_0x5f2eb3-0x1)/_0x5f2eb3;const _0x22385e=Math['randomInt'](_0x1e9da9/0x2);this['gradientFillRect'](_0x22385e,-_0x4699b3,_0x1e9da9-_0x22385e,_0x4699b3*0x2,_0x3af769,_0x53347e),this[_0xa541c6(0x3d8)](_0x1e9da9,0x0,_0x4699b3,_0xaf2300),this[_0xa541c6(0x3d8)](_0x1e9da9,0x0,_0x4699b3-(Math[_0xa541c6(0x4e6)](0x2)-0x1),'white'),_0x4080ab[_0xa541c6(0x43a)](Math['PI']*0x2/_0x275eb9);}}},Bitmap[_0x32d3d9(0x2c1)][_0x32d3d9(0x57a)]=function(_0x1f1069,_0x21783e,_0x478281){const _0x448c4b=_0x32d3d9,_0x3b33b2=this[_0x448c4b(0x2d3)];_0x3b33b2[_0x448c4b(0x431)](),_0x3b33b2['translate'](_0x1f1069-_0x478281,_0x21783e-_0x478281);const _0x147bd1=0x168*(Math['PI']/0xb4),_0x10c978=Math[_0x448c4b(0x4e6)](0x80),_0x3a8d1e=_0x448c4b(0x481)[_0x448c4b(0x5f9)](_0x10c978),_0x15a928='rgba(128,%1,255,1)'[_0x448c4b(0x5f9)](_0x10c978),_0x8cee40=_0x448c4b(0x5b3)[_0x448c4b(0x5f9)](_0x10c978),_0x31f60e=_0x448c4b(0x2db)['format'](_0x10c978),_0x2bce43=_0x448c4b(0x5b7)[_0x448c4b(0x5f9)](_0x10c978),_0x16f645=_0x448c4b(0x41e)['format'](_0x10c978),_0x5ad093=_0x448c4b(0x2f4)[_0x448c4b(0x5f9)](_0x10c978),_0x1c8ac9=_0x448c4b(0x435)[_0x448c4b(0x5f9)](_0x10c978),_0x19b29c=_0x3b33b2[_0x448c4b(0x369)](_0x478281,_0x478281,0xa,_0x478281,_0x478281,_0x478281);_0x19b29c['addColorStop'](0x0,_0x3a8d1e),_0x19b29c['addColorStop'](0.15,_0x3a8d1e),_0x19b29c['addColorStop'](0.25,_0x15a928),_0x19b29c[_0x448c4b(0x3e2)](0.3,_0x15a928),_0x19b29c['addColorStop'](0.4,_0x8cee40),_0x19b29c['addColorStop'](0.45,_0x31f60e),_0x19b29c[_0x448c4b(0x3e2)](0.5,_0x31f60e),_0x19b29c[_0x448c4b(0x3e2)](0.55,_0x2bce43),_0x19b29c[_0x448c4b(0x3e2)](0.6,_0x16f645),_0x19b29c[_0x448c4b(0x3e2)](0.65,_0x16f645),_0x19b29c[_0x448c4b(0x3e2)](0.75,_0x5ad093),_0x19b29c['addColorStop'](0.85,_0x1c8ac9),_0x19b29c[_0x448c4b(0x3e2)](0.95,_0x3a8d1e),_0x19b29c[_0x448c4b(0x3e2)](0x1,_0x3a8d1e),_0x3b33b2[_0x448c4b(0x312)]=_0x19b29c,_0x3b33b2[_0x448c4b(0x295)](),_0x3b33b2[_0x448c4b(0x5b4)](_0x478281,_0x478281),_0x3b33b2[_0x448c4b(0x305)](length,_0x478281),_0x3b33b2[_0x448c4b(0x5bb)](_0x478281,_0x478281,_0x478281,0x0,_0x147bd1),_0x3b33b2[_0x448c4b(0x305)](_0x478281,_0x478281),_0x3b33b2[_0x448c4b(0x432)](),_0x3b33b2[_0x448c4b(0x48f)](),this[_0x448c4b(0x3c1)]['update']();},TextManager[_0x32d3d9(0x4e2)]=VisuMZ[_0x32d3d9(0x4c5)]['Settings']['Options'][_0x32d3d9(0x1f2)],ColorManager['WEATHER_ASH_COLORS']=[_0x32d3d9(0x4a6),_0x32d3d9(0x2c7),_0x32d3d9(0x2ff),'#444444'],ColorManager[_0x32d3d9(0x58b)]=[_0x32d3d9(0x416),'#a8c54a',_0x32d3d9(0x2e0),_0x32d3d9(0x307),_0x32d3d9(0x3b1),_0x32d3d9(0x423),_0x32d3d9(0x274),_0x32d3d9(0x274),_0x32d3d9(0x317)],ColorManager['WEATHER_CLOUD_DARK_COLORS']=['#a1a1a1',_0x32d3d9(0x439),_0x32d3d9(0x40c),_0x32d3d9(0x2da)],ColorManager['WEATHER_CLOUD_BLUE_COLORS']=[_0x32d3d9(0x3b0),_0x32d3d9(0x2d1),_0x32d3d9(0x215),'#a3d2e5'],ColorManager[_0x32d3d9(0x339)]=[_0x32d3d9(0x4cd),'#ebebeb',_0x32d3d9(0x43d)],ColorManager[_0x32d3d9(0x4d7)]=[_0x32d3d9(0x57c),'#baa4b2',_0x32d3d9(0x5f5),_0x32d3d9(0x469)],ColorManager[_0x32d3d9(0x28c)]=[_0x32d3d9(0x5f0),_0x32d3d9(0x5fc),_0x32d3d9(0x4b6)],ColorManager['WEATHER_DANDELION3_COLORS']=['#ffffff',_0x32d3d9(0x2f1),_0x32d3d9(0x43d),_0x32d3d9(0x284),_0x32d3d9(0x2a2)],ColorManager[_0x32d3d9(0x345)]=[_0x32d3d9(0x526),_0x32d3d9(0x387),_0x32d3d9(0x593),_0x32d3d9(0x2fc)],ColorManager[_0x32d3d9(0x578)]=['#c69c6d',_0x32d3d9(0x239),_0x32d3d9(0x235),_0x32d3d9(0x24a),_0x32d3d9(0x45b)],ColorManager[_0x32d3d9(0x462)]=[_0x32d3d9(0x304),'#fff568',_0x32d3d9(0x2c6),'#fbaf5d',_0x32d3d9(0x574)],ColorManager[_0x32d3d9(0x5d7)]=[_0x32d3d9(0x3d0),_0x32d3d9(0x205),'#f7941d',_0x32d3d9(0x2f5),_0x32d3d9(0x559),_0x32d3d9(0x278)],ColorManager[_0x32d3d9(0x2f8)]=[_0x32d3d9(0x4ad),'#a1d2e5',_0x32d3d9(0x23a),_0x32d3d9(0x547),'#aabaf1',_0x32d3d9(0x4f2)],ColorManager['WEATHER_LIGHT_COLORS']=[_0x32d3d9(0x4cd),_0x32d3d9(0x4a2),'#bbffff',_0x32d3d9(0x46a)],ColorManager[_0x32d3d9(0x26c)]=[_0x32d3d9(0x3b9),_0x32d3d9(0x5e4),_0x32d3d9(0x5f4)],ColorManager[_0x32d3d9(0x214)]=['#7accc8',_0x32d3d9(0x22a),'#7da7d9',_0x32d3d9(0x41c)],ColorManager[_0x32d3d9(0x521)]=[_0x32d3d9(0x207),_0x32d3d9(0x207),_0x32d3d9(0x3f8),'#6aba49',_0x32d3d9(0x488),_0x32d3d9(0x3d7)],ColorManager[_0x32d3d9(0x40b)]=[_0x32d3d9(0x37e),'#ffccaa',_0x32d3d9(0x44d),_0x32d3d9(0x5ba),_0x32d3d9(0x57d),_0x32d3d9(0x4f0),_0x32d3d9(0x257),_0x32d3d9(0x203),_0x32d3d9(0x573),_0x32d3d9(0x4d8),_0x32d3d9(0x318),'#ffaacc',_0x32d3d9(0x4cd)],ColorManager[_0x32d3d9(0x2e7)]=[_0x32d3d9(0x2c6),'#fff799',_0x32d3d9(0x275),_0x32d3d9(0x2ca),_0x32d3d9(0x5c0),_0x32d3d9(0x2b1),_0x32d3d9(0x4a9),_0x32d3d9(0x4a9),_0x32d3d9(0x4a9),_0x32d3d9(0x347),_0x32d3d9(0x347),_0x32d3d9(0x347)],ColorManager[_0x32d3d9(0x5c3)]=[_0x32d3d9(0x4cd),'#ff0000',_0x32d3d9(0x2f7),_0x32d3d9(0x457),_0x32d3d9(0x542),'#0000ff','#ff00ff','#ff8800',_0x32d3d9(0x3be),_0x32d3d9(0x457),_0x32d3d9(0x542)],ColorManager[_0x32d3d9(0x25b)]=[_0x32d3d9(0x457),'#acff3b',_0x32d3d9(0x52e),_0x32d3d9(0x471),_0x32d3d9(0x57b)],ColorManager['WEATHER_SAKURA1_COLORS']=[_0x32d3d9(0x335),_0x32d3d9(0x3eb),_0x32d3d9(0x258),_0x32d3d9(0x367),_0x32d3d9(0x3a9)],ColorManager[_0x32d3d9(0x51f)]=[_0x32d3d9(0x3c4),'#fde3d9',_0x32d3d9(0x51d)],ColorManager[_0x32d3d9(0x371)]=['#d28fad',_0x32d3d9(0x4a8),_0x32d3d9(0x30d)],ColorManager[_0x32d3d9(0x287)]=[_0x32d3d9(0x4cd),_0x32d3d9(0x2a9),_0x32d3d9(0x545),_0x32d3d9(0x3e9)],ColorManager['WEATHER_ULTRAVIOLET_COLORS']=[_0x32d3d9(0x21b),'#a800ff',_0x32d3d9(0x5e6),_0x32d3d9(0x1eb)],ColorManager[_0x32d3d9(0x43f)]=ColorManager[_0x32d3d9(0x2f8)]['clone'](),ColorManager[_0x32d3d9(0x4d6)]=ColorManager[_0x32d3d9(0x58b)]['clone'](),ColorManager['WEATHER_BALLOON_COLORS']=ColorManager[_0x32d3d9(0x40b)]['concat'](ColorManager[_0x32d3d9(0x5c3)]),ColorManager['WEATHER_CONFETTI_COLORS']=ColorManager['WEATHER_PASTEL_COLORS'][_0x32d3d9(0x33a)](),ColorManager[_0x32d3d9(0x4e3)]=ColorManager[_0x32d3d9(0x521)][_0x32d3d9(0x33a)](),ColorManager[_0x32d3d9(0x221)]=ColorManager[_0x32d3d9(0x521)][_0x32d3d9(0x33a)](),ColorManager[_0x32d3d9(0x379)]=ColorManager[_0x32d3d9(0x214)][_0x32d3d9(0x33a)](),ColorManager['WEATHER_PASTEL_BRUME_COLORS']=ColorManager[_0x32d3d9(0x40b)]['clone'](),ColorManager[_0x32d3d9(0x35e)]=ColorManager['WEATHER_PRIMARY_COLORS'][_0x32d3d9(0x33a)](),ColorManager[_0x32d3d9(0x5be)]=ColorManager[_0x32d3d9(0x40b)][_0x32d3d9(0x33a)](),ColorManager[_0x32d3d9(0x552)]=ColorManager[_0x32d3d9(0x5c3)][_0x32d3d9(0x33a)](),ColorManager['WEATHER_STAR_COLORS']=ColorManager[_0x32d3d9(0x40b)][_0x32d3d9(0x33a)](),ColorManager[_0x32d3d9(0x32c)]=ColorManager[_0x32d3d9(0x25b)][_0x32d3d9(0x33a)](),ColorManager[_0x32d3d9(0x3c6)]=ColorManager[_0x32d3d9(0x345)][_0x32d3d9(0x33a)](),ColorManager[_0x32d3d9(0x201)]=ColorManager['WEATHER_PASTEL_COLORS']['clone'](),ColorManager[_0x32d3d9(0x33f)]=ColorManager[_0x32d3d9(0x287)][_0x32d3d9(0x33a)](),ColorManager[_0x32d3d9(0x49c)]=ColorManager['WEATHER_ULTRAVIOLET_COLORS'][_0x32d3d9(0x33a)](),ColorManager[_0x32d3d9(0x3d6)]=function(_0x7b949b,_0x288e5a){const _0x6bfcc7=_0x32d3d9;let _0x3171e2='';if(/^#([A-Fa-f0-9]{3}){1,2}$/['test'](_0x7b949b)){_0x3171e2=_0x7b949b[_0x6bfcc7(0x231)](0x1)[_0x6bfcc7(0x2b9)]('');_0x3171e2[_0x6bfcc7(0x5c6)]===0x3&&(_0x3171e2=[_0x3171e2[0x0],_0x3171e2[0x0],_0x3171e2[0x1],_0x3171e2[0x1],_0x3171e2[0x2],_0x3171e2[0x2]]);while(_0x3171e2[_0x6bfcc7(0x5c6)]>0x6)_0x3171e2[_0x6bfcc7(0x349)]();return _0x3171e2='0x'+_0x3171e2['join'](''),_0x6bfcc7(0x572)+[(_0x3171e2>>0x10&0xff)[_0x6bfcc7(0x1f8)](0x0,0xff),(_0x3171e2>>0x8&0xff)[_0x6bfcc7(0x1f8)](0x0,0xff),(_0x3171e2&0xff)['clamp'](0x0,0xff)][_0x6bfcc7(0x34b)](',')+','+_0x288e5a['clamp'](0x0,0x1)+')';}else return _0x6bfcc7(0x4f9);},ColorManager[_0x32d3d9(0x319)]=function(_0x53fd0c){const _0xbb727d=_0x32d3d9;let _0x52ff74='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0xbb727d(0x2f6)](_0x53fd0c)){_0x52ff74=_0x53fd0c[_0xbb727d(0x231)](0x1)[_0xbb727d(0x2b9)]('');_0x52ff74[_0xbb727d(0x5c6)]===0x3&&(_0x52ff74=[_0x52ff74[0x0],_0x52ff74[0x0],_0x52ff74[0x1],_0x52ff74[0x1],_0x52ff74[0x2],_0x52ff74[0x2]]);while(_0x52ff74[_0xbb727d(0x5c6)]>0x6)_0x52ff74[_0xbb727d(0x349)]();return _0x52ff74='0x'+_0x52ff74[_0xbb727d(0x34b)](''),[(_0x52ff74>>0x10&0xff)[_0xbb727d(0x1f8)](0x0,0xff),(_0x52ff74>>0x8&0xff)[_0xbb727d(0x1f8)](0x0,0xff),(_0x52ff74&0xff)[_0xbb727d(0x1f8)](0x0,0xff)];}else return[0x0,0x0,0x0];},ColorManager[_0x32d3d9(0x519)]=function(_0x33b983){const _0xdded6e=_0x32d3d9;while(_0x33b983[_0xdded6e(0x5c6)]<0x3)_0x33b983[_0xdded6e(0x4ee)](0x0);while(_0x33b983['length']>0x3)_0x33b983[_0xdded6e(0x349)]();return'#'+_0x33b983[_0xdded6e(0x55c)](_0xfe976a=>_0xfe976a['clamp'](0x0,0xff)[_0xdded6e(0x4b1)](0x10)[_0xdded6e(0x4da)](0x2))[_0xdded6e(0x34b)]('');},ColorManager[_0x32d3d9(0x23b)]=function(_0x3a8bef,_0x3195b7){const _0xff7ddb=_0x32d3d9,_0x2376d7=this[_0xff7ddb(0x319)](_0x3a8bef)[_0xff7ddb(0x55c)](_0x3f90d7=>Math['ceil']((Number(_0x3f90d7)||0x0)*_0x3195b7)[_0xff7ddb(0x1f8)](0x0,0xff));return this[_0xff7ddb(0x519)](_0x2376d7);},SceneManager[_0x32d3d9(0x587)]=function(){const _0x4e4f28=_0x32d3d9;return this[_0x4e4f28(0x496)]&&this[_0x4e4f28(0x496)][_0x4e4f28(0x4db)]===Scene_Battle;},SceneManager[_0x32d3d9(0x3ac)]=function(){const _0x437024=_0x32d3d9;return this[_0x437024(0x496)]&&this[_0x437024(0x496)]instanceof Scene_Map;},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x475)]=Game_Screen[_0x32d3d9(0x2c1)]['clearWeather'],Game_Screen[_0x32d3d9(0x2c1)]['clearWeather']=function(){const _0x3a252d=_0x32d3d9;VisuMZ[_0x3a252d(0x4c5)]['Game_Screen_clearWeather'][_0x3a252d(0x2f0)](this),this[_0x3a252d(0x1ef)]();},Game_Screen['prototype'][_0x32d3d9(0x38b)]=function(){const _0x2d5fc0=_0x32d3d9;if($gameMap&&$gameMap['isNoWeather']())return'none';return this[_0x2d5fc0(0x58d)](0x1)[_0x2d5fc0(0x341)]||_0x2d5fc0(0x251);},Game_Screen[_0x32d3d9(0x2c1)][_0x32d3d9(0x512)]=function(){const _0x54e0d8=_0x32d3d9;if($gameMap&&$gameMap[_0x54e0d8(0x353)]())return 0x0;return this[_0x54e0d8(0x58d)](0x1)['power']||0x0;},Game_Screen['prototype'][_0x32d3d9(0x470)]=function(_0xcdfa76,_0x82678e,_0x183dfe){const _0x162a03=_0x32d3d9,_0x2a1c50=this['getWeatherLayerData'](0x1,![])[_0x162a03(0x29c)],_0x1771e8=VisuMZ[_0x162a03(0x4c5)]['newLayer']();if(!_0x1771e8)return;_0x1771e8[_0x162a03(0x341)]=_0xcdfa76,_0x1771e8[_0x162a03(0x29c)]=_0x2a1c50,_0x1771e8[_0x162a03(0x4c9)]=_0xcdfa76===_0x162a03(0x251)?0x0:_0x82678e[_0x162a03(0x1f8)](0x1,0x9),_0x1771e8[_0x162a03(0x465)]=_0x183dfe,_0x183dfe<=0x0&&(_0x1771e8[_0x162a03(0x29c)]=_0x1771e8[_0x162a03(0x4c9)]),VisuMZ[_0x162a03(0x4c5)][_0x162a03(0x311)](_0x1771e8),this[_0x162a03(0x2e4)](0x1,![],_0x1771e8);},Game_Screen[_0x32d3d9(0x2c1)][_0x32d3d9(0x3fc)]=function(){const _0x32d918=_0x32d3d9;if(this[_0x32d918(0x2d7)]===undefined)this['clearWeatherLayers']();for(let _0x1773a2=0x1;_0x1773a2<=Weather['MAX_LAYERS'];_0x1773a2++){this[_0x32d918(0x46e)](_0x1773a2,!![]),this[_0x32d918(0x46e)](_0x1773a2,![]);}},Game_Screen[_0x32d3d9(0x2c1)]['clearWeatherLayers']=function(){const _0x23a1cb=_0x32d3d9;this[_0x23a1cb(0x2d7)]={'lower':[],'upper':[]};while(this[_0x23a1cb(0x2d7)][_0x23a1cb(0x222)][_0x23a1cb(0x5c6)]<Weather[_0x23a1cb(0x48a)]){this[_0x23a1cb(0x2d7)][_0x23a1cb(0x222)][_0x23a1cb(0x4ee)](VisuMZ[_0x23a1cb(0x4c5)][_0x23a1cb(0x333)]());}while(this[_0x23a1cb(0x2d7)]['upper'][_0x23a1cb(0x5c6)]<Weather[_0x23a1cb(0x48a)]){this[_0x23a1cb(0x2d7)]['upper'][_0x23a1cb(0x4ee)](VisuMZ[_0x23a1cb(0x4c5)][_0x23a1cb(0x333)]());}},Game_Screen['prototype'][_0x32d3d9(0x2c4)]=function(_0x374345,_0x2acf13,_0x56dd16){const _0x573205=_0x32d3d9;if(this['_weatherLayers']===undefined)this[_0x573205(0x1ef)]();const _0x12b4aa=this['getWeatherLayerData'](_0x374345,_0x2acf13),_0x9abf1f=_0x374345[_0x573205(0x1f8)](0x1,Weather[_0x573205(0x48a)])-0x1,_0x41533a=_0x2acf13?'lower':_0x573205(0x527);_0x56dd16=_0x56dd16||0x0;const _0x25d413=_0x12b4aa[_0x573205(0x29c)],_0x4abef7=VisuMZ['WeatherEffects'][_0x573205(0x333)]();_0x4abef7['power']=_0x25d413,_0x4abef7[_0x573205(0x465)]=_0x56dd16,this[_0x573205(0x2d7)][_0x41533a][_0x9abf1f]=_0x4abef7;},Game_Screen[_0x32d3d9(0x2c1)][_0x32d3d9(0x323)]=function(_0x34965d,_0x1ed522,_0x302025,_0x1d7c3b){const _0x208c12=_0x32d3d9,_0x360f27=this[_0x208c12(0x58d)](_0x34965d,_0x1ed522);_0x360f27['duration']=_0x1d7c3b||0x1,_0x360f27[_0x208c12(0x4c9)]=(_0x360f27[_0x208c12(0x4c9)]+_0x302025)['clamp'](0x1,0x9);},Game_Screen['prototype'][_0x32d3d9(0x468)]=function(_0x5b564d,_0x519403){const _0x10858e=_0x32d3d9,_0x25c5c2=this['getWeatherLayerData'](_0x5b564d,_0x519403),_0x1562e5=_0x519403?_0x10858e(0x222):_0x10858e(0x527);this[_0x10858e(0x4a7)]=this['_memorizedWeatherData']||{'lower':[],'upper':[]},this[_0x10858e(0x4a7)][_0x1562e5][_0x5b564d]=JSON['parse'](JSON[_0x10858e(0x2bd)](_0x25c5c2));},Game_Screen[_0x32d3d9(0x2c1)][_0x32d3d9(0x452)]=function(_0x254278,_0x16d776,_0x560424){const _0x41c20c=_0x32d3d9,_0xb1a1f7=_0x16d776?'lower':'upper';this[_0x41c20c(0x4a7)]=this[_0x41c20c(0x4a7)]||{'lower':[],'upper':[]};const _0x4e6758=this[_0x41c20c(0x4a7)][_0xb1a1f7][_0x254278]||VisuMZ[_0x41c20c(0x4c5)][_0x41c20c(0x333)]();_0x4e6758[_0x41c20c(0x465)]=_0x560424,_0x4e6758[_0x41c20c(0x4c9)]=_0x4e6758[_0x41c20c(0x29c)],_0x4e6758[_0x41c20c(0x29c)]=this['getWeatherLayerData'](_0x254278,_0x16d776)['power'],this[_0x41c20c(0x2e4)](_0x254278,_0x16d776,_0x4e6758);},Game_Screen[_0x32d3d9(0x2c1)][_0x32d3d9(0x58d)]=function(_0x16055e,_0xe3c270){const _0xee9e72=_0x32d3d9;if(this[_0xee9e72(0x2d7)]===undefined)this[_0xee9e72(0x1ef)]();const _0x53a45e=_0x16055e[_0xee9e72(0x1f8)](0x1,Weather[_0xee9e72(0x48a)])-0x1,_0x277a70=_0xe3c270?_0xee9e72(0x222):_0xee9e72(0x527);return!this[_0xee9e72(0x2d7)][_0x277a70][_0x53a45e]&&(this[_0xee9e72(0x2d7)][_0x277a70][_0x53a45e]=VisuMZ[_0xee9e72(0x4c5)]['newLayer']()),this['_weatherLayers'][_0x277a70][_0x53a45e];},Game_Screen[_0x32d3d9(0x2c1)]['setWeatherLayerData']=function(_0x51aa7a,_0x116af1,_0x156715){const _0x30e598=_0x32d3d9;if(this['_weatherLayers']===undefined)this['clearWeatherLayers']();const _0x566fce=_0x51aa7a[_0x30e598(0x1f8)](0x1,Weather['MAX_LAYERS'])-0x1,_0xca1a68=_0x116af1?'lower':_0x30e598(0x527);this['_weatherLayers'][_0xca1a68][_0x566fce]=JSON[_0x30e598(0x327)](JSON['stringify'](_0x156715));},Game_Screen[_0x32d3d9(0x2c1)][_0x32d3d9(0x56a)]=function(_0x30f0ec,_0x2ab59f,_0x124332){const _0x1ef556=_0x32d3d9;if(this[_0x1ef556(0x2d7)]===undefined)this[_0x1ef556(0x1ef)]();const _0xf4b174=this[_0x1ef556(0x58d)](_0x30f0ec,_0x2ab59f),_0xf6e9af=_0x30f0ec[_0x1ef556(0x1f8)](0x1,Weather['MAX_LAYERS'])-0x1,_0x2e7e16=_0x2ab59f?_0x1ef556(0x222):'upper';_0x124332[_0x1ef556(0x29c)]=_0xf4b174[_0x1ef556(0x29c)],this[_0x1ef556(0x2d7)][_0x2e7e16][_0xf6e9af]=_0x124332;},Game_Screen[_0x32d3d9(0x2c1)][_0x32d3d9(0x46e)]=function(_0x1f37c9,_0x16b9da){const _0x40c7ce=_0x32d3d9,_0x50ff26=this[_0x40c7ce(0x58d)](_0x1f37c9,_0x16b9da);if(!_0x50ff26)return;_0x50ff26[_0x40c7ce(0x465)]>0x0&&(this['updateWeatherLayerPower'](_0x50ff26),this[_0x40c7ce(0x47b)](_0x50ff26));},Game_Screen[_0x32d3d9(0x2c1)][_0x32d3d9(0x269)]=function(_0x4f4ee5){const _0x4b2379=_0x32d3d9,_0x3574a8=_0x4f4ee5[_0x4b2379(0x465)],_0x58fedb=_0x4f4ee5['powerTarget'];_0x4f4ee5[_0x4b2379(0x29c)]=(_0x4f4ee5['power']*(_0x3574a8-0x1)+_0x58fedb)/_0x3574a8;},Game_Screen[_0x32d3d9(0x2c1)][_0x32d3d9(0x47b)]=function(_0x24af06){const _0x41aacb=_0x32d3d9;_0x24af06['duration']--,_0x24af06[_0x41aacb(0x465)]===0x0&&_0x24af06['powerTarget']===0x0&&(_0x24af06[_0x41aacb(0x341)]='none');},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x5c4)]=Game_Map[_0x32d3d9(0x2c1)][_0x32d3d9(0x343)],Game_Map['prototype'][_0x32d3d9(0x343)]=function(_0x2a7a0d){const _0x4a4f81=_0x32d3d9;VisuMZ[_0x4a4f81(0x4c5)][_0x4a4f81(0x5c4)][_0x4a4f81(0x2f0)](this,_0x2a7a0d),this[_0x4a4f81(0x596)]();},Game_Map['prototype']['setupWeatherEffectNotetags']=function(){const _0x1e41db=_0x32d3d9;if(!$dataMap)return;if(!SceneManager[_0x1e41db(0x33c)]())return;this[_0x1e41db(0x3dc)]=![];const _0x544aa1=VisuMZ[_0x1e41db(0x4c5)][_0x1e41db(0x52a)],_0xd871e2=$dataMap['note']||'';_0xd871e2[_0x1e41db(0x48c)](_0x544aa1[_0x1e41db(0x3f3)])&&(this[_0x1e41db(0x3dc)]=!![]);},Game_Map[_0x32d3d9(0x2c1)][_0x32d3d9(0x353)]=function(){const _0x298898=_0x32d3d9;if(this[_0x298898(0x3dc)]===undefined)this['setupWeatherEffectNotetags']();return this[_0x298898(0x3dc)];},VisuMZ['WeatherEffects']['Scene_Options_maxCommands']=Scene_Options[_0x32d3d9(0x2c1)][_0x32d3d9(0x220)],Scene_Options[_0x32d3d9(0x2c1)]['maxCommands']=function(){const _0x53cda7=_0x32d3d9;let _0x5a923f=VisuMZ[_0x53cda7(0x4c5)][_0x53cda7(0x5f7)][_0x53cda7(0x2f0)](this);const _0x531ee4=VisuMZ[_0x53cda7(0x4c5)][_0x53cda7(0x571)][_0x53cda7(0x316)];if(_0x531ee4[_0x53cda7(0x21d)]&&_0x531ee4[_0x53cda7(0x2ab)])_0x5a923f++;return _0x5a923f;};function Sprite_WeatherParticle(){this['initialize'](...arguments);}Sprite_WeatherParticle['prototype']=Object[_0x32d3d9(0x45d)](Sprite[_0x32d3d9(0x2c1)]),Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x4db)]=Sprite_WeatherParticle,Sprite_WeatherParticle['prototype'][_0x32d3d9(0x234)]=function(_0x278a19,_0x2cec9e){const _0x372b53=_0x32d3d9;this['_weatherParent']=_0x278a19,this[_0x372b53(0x35c)]=_0x2cec9e,Sprite[_0x372b53(0x2c1)]['initialize'][_0x372b53(0x2f0)](this,this[_0x372b53(0x567)]['viewport']),this[_0x372b53(0x5c2)](),this[_0x372b53(0x3ab)]();},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x5c2)]=function(){const _0x527a94=_0x32d3d9;this[_0x527a94(0x373)]=0x0,this['anchor']['x']=0.5,this[_0x527a94(0x5a2)]['y']=0.5,this['_respawnDelay']=0x0;},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x3b3)]=function(){const _0x23acf9=_0x32d3d9;return this[_0x23acf9(0x567)]['data']();},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x1ed)]=function(){const _0x1f338b=_0x32d3d9;if(!this['parent'])return-0x1;return this['parent'][_0x1f338b(0x415)][_0x1f338b(0x302)](this);},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x3ab)]=function(){const _0x5efa2d=_0x32d3d9;this[_0x5efa2d(0x4d5)](),this[_0x5efa2d(0x31d)](),this[_0x5efa2d(0x4bf)]();},Sprite_WeatherParticle['prototype']['rebornNewData']=function(){const _0x417b58=_0x32d3d9;this['type']=this['data']()[_0x417b58(0x341)];if(this[_0x417b58(0x341)]==='none')return;this[_0x417b58(0x29f)](),this[_0x417b58(0x5ef)](),this[_0x417b58(0x3ad)](),this[_0x417b58(0x47a)](),this['rebornInitialOpacity'](),this[_0x417b58(0x530)]();},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x29f)]=function(){const _0x116e2e=_0x32d3d9;this[_0x116e2e(0x5bf)]=this[_0x116e2e(0x3b3)]()[_0x116e2e(0x4fe)]['lifespan'];const _0x46843f=this[_0x116e2e(0x3b3)]()[_0x116e2e(0x4fe)][_0x116e2e(0x4bc)],_0x50178a=VisuMZ[_0x116e2e(0x4c5)][_0x116e2e(0x463)](_0x46843f);this[_0x116e2e(0x5bf)]=Math[_0x116e2e(0x277)](0x1,Math[_0x116e2e(0x346)](this[_0x116e2e(0x5bf)]+_0x50178a)),this['_wholeLifespan']=this[_0x116e2e(0x5bf)],this[_0x116e2e(0x523)]!==this[_0x116e2e(0x341)]&&(this[_0x116e2e(0x523)]=this['type'],this[_0x116e2e(0x5bf)]=Math['randomInt'](this[_0x116e2e(0x5bf)])+0x1);},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x5ef)]=function(){const _0x4e1e79=_0x32d3d9;this[_0x4e1e79(0x5cc)]=JSON[_0x4e1e79(0x327)](JSON[_0x4e1e79(0x2bd)](this['data']()['flags'])),this[_0x4e1e79(0x536)]=Math[_0x4e1e79(0x4e6)](0xf4240),this[_0x4e1e79(0x543)]=Math[_0x4e1e79(0x4e6)](0xf4240),this[_0x4e1e79(0x2d8)]=Math['randomInt'](0xf4240),this[_0x4e1e79(0x3f5)]=Math['random']()*0.05+0.005,this[_0x4e1e79(0x2b7)]=Math[_0x4e1e79(0x509)]()*0.05+0.005,this[_0x4e1e79(0x516)]=Math[_0x4e1e79(0x509)]()<0.5;},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x3ad)]=function(){const _0x13d60f=_0x32d3d9;this[_0x13d60f(0x293)]=this['data']()['sprite'][_0x13d60f(0x289)]??0x1;const _0x149445=this['data']()['sprite'][_0x13d60f(0x358)]??0x0;this[_0x13d60f(0x293)]+=VisuMZ[_0x13d60f(0x4c5)][_0x13d60f(0x204)](_0x149445),this[_0x13d60f(0x2d2)]=this[_0x13d60f(0x3b3)]()[_0x13d60f(0x4fe)]['scaleRatioX']??0x1,this[_0x13d60f(0x51b)]=this[_0x13d60f(0x3b3)]()['sprite'][_0x13d60f(0x48e)]??0x1,this[_0x13d60f(0x406)]=this['data']()[_0x13d60f(0x40d)][_0x13d60f(0x30f)]??0x1,this['scale']['x']=this[_0x13d60f(0x293)]*this['_scaleRatioX']*this[_0x13d60f(0x406)],this[_0x13d60f(0x289)]['y']=this[_0x13d60f(0x293)]*this[_0x13d60f(0x51b)]*this[_0x13d60f(0x406)];},Sprite_WeatherParticle[_0x32d3d9(0x2c1)]['rebornSpawnLocation']=function(){const _0x4c18be=_0x32d3d9,_0xc26010=0xc8;let _0x2cf17d=this[_0x4c18be(0x3b3)]()['sprite'][_0x4c18be(0x541)]||'random';_0x2cf17d=_0x2cf17d[_0x4c18be(0x21f)](/sides/i,Math[_0x4c18be(0x509)]()<0.5?_0x4c18be(0x217):_0x4c18be(0x390));let _0x13328e=0x0;switch(_0x2cf17d[_0x4c18be(0x21c)]()['trim']()){case _0x4c18be(0x509):this['ax']=Math['randomInt'](Graphics[_0x4c18be(0x3b2)]+_0xc26010*0x2)-_0xc26010;if(Weather[_0x4c18be(0x298)]){const _0x2d5f69=Math[_0x4c18be(0x4e6)](0x3)-0x1;this['ax']+=Graphics[_0x4c18be(0x3b2)]*_0x2d5f69;}break;case _0x4c18be(0x507):this['ax']=0x0;break;case'left\x2010%':case _0x4c18be(0x4f3):case _0x4c18be(0x579):case _0x4c18be(0x3fa):case _0x4c18be(0x42a):case _0x4c18be(0x4f8):case _0x4c18be(0x497):case _0x4c18be(0x52b):case _0x4c18be(0x55e):if(_0x2cf17d['match'](/(\d+)([%％])/i)){const _0x5ec0b5=Number(RegExp['$1'])*0.01;_0x13328e+=Math[_0x4c18be(0x31e)](Graphics['width']*_0x5ec0b5);}this['ax']=0x0+Math[_0x4c18be(0x4e6)](_0x13328e)-Math[_0x4c18be(0x4e6)](_0xc26010);break;case _0x4c18be(0x362):this['ax']=Graphics[_0x4c18be(0x3b2)];break;case _0x4c18be(0x484):case _0x4c18be(0x4d2):case _0x4c18be(0x4eb):case _0x4c18be(0x226):case'right\x2050%':case _0x4c18be(0x32f):case'right\x2070%':case'right\x2080%':case _0x4c18be(0x525):if(_0x2cf17d[_0x4c18be(0x48c)](/(\d+)([%％])/i)){const _0x4aed02=Number(RegExp['$1'])*0.01;_0x13328e+=Math[_0x4c18be(0x31e)](Graphics[_0x4c18be(0x3b2)]*_0x4aed02);}this['ax']=Graphics[_0x4c18be(0x3b2)]-Math[_0x4c18be(0x4e6)](_0x13328e)+Math[_0x4c18be(0x4e6)](_0xc26010);break;case _0x4c18be(0x2e6):case _0x4c18be(0x2e6):case _0x4c18be(0x50e):case _0x4c18be(0x56e):case'center\x2040%':case _0x4c18be(0x56b):case _0x4c18be(0x378):case _0x4c18be(0x2ad):case'center\x2080%':case'center\x2090%':if(_0x2cf17d[_0x4c18be(0x48c)](/(\d+)([%％])/i)){const _0x16d988=Number(RegExp['$1'])*0.01;_0x13328e+=Math[_0x4c18be(0x31e)](Graphics[_0x4c18be(0x3b2)]*_0x16d988);}this['ax']=Graphics[_0x4c18be(0x3b2)]/0x2+Math['randomInt'](_0x13328e)+Math[_0x4c18be(0x4e6)](_0x13328e)-_0x13328e;break;default:this['ax']=Graphics[_0x4c18be(0x3b2)]/0x2;break;}let _0x4cbb66=this['data']()[_0x4c18be(0x4fe)]['spawnLocationY']||'random';_0x4cbb66=_0x4cbb66[_0x4c18be(0x21f)](/either/i,Math[_0x4c18be(0x509)]()<0.5?_0x4c18be(0x527):_0x4c18be(0x222));let _0x5efeda=0x0;switch(_0x4cbb66['toLowerCase']()['trim']()){case _0x4c18be(0x509):this['ay']=Math[_0x4c18be(0x4e6)](Graphics[_0x4c18be(0x58a)]+_0xc26010*0x2)-_0xc26010;if(Weather['EXPAND_RNG_SPAWN']){const _0x1befe0=Math[_0x4c18be(0x4e6)](0x3)-0x1;this['ay']+=Graphics['height']*_0x1befe0;}break;case'upper\x20border':this['ay']=0x0;break;case _0x4c18be(0x5d6):case _0x4c18be(0x296):case _0x4c18be(0x3f4):case _0x4c18be(0x553):case _0x4c18be(0x232):case _0x4c18be(0x3db):case _0x4c18be(0x575):case _0x4c18be(0x395):case _0x4c18be(0x49a):if(_0x4cbb66['match'](/(\d+)([%％])/i)){const _0x57e881=Number(RegExp['$1'])*0.01;_0x5efeda+=Math['floor'](Graphics['height']*_0x57e881);}this['ay']=0x0+Math[_0x4c18be(0x4e6)](_0x5efeda)-Math['randomInt'](_0xc26010);break;case _0x4c18be(0x33d):this['ay']=Graphics[_0x4c18be(0x58a)];break;case _0x4c18be(0x595):case _0x4c18be(0x438):case _0x4c18be(0x486):case _0x4c18be(0x3cd):case _0x4c18be(0x588):case _0x4c18be(0x2af):case _0x4c18be(0x2ed):case _0x4c18be(0x39e):case'lower\x2090%':if(_0x4cbb66['match'](/(\d+)([%％])/i)){const _0x2fb9bd=Number(RegExp['$1'])*0.01;_0x5efeda+=Math['floor'](Graphics[_0x4c18be(0x58a)]*_0x2fb9bd);}this['ay']=Graphics['height']-Math[_0x4c18be(0x4e6)](_0x5efeda)+Math['randomInt'](_0xc26010);break;case'middle\x2010%':case'middle\x2010%':case'middle\x2020%':case _0x4c18be(0x47c):case _0x4c18be(0x4b4):case _0x4c18be(0x363):case _0x4c18be(0x2e2):case _0x4c18be(0x4cb):case _0x4c18be(0x5e9):case _0x4c18be(0x218):if(_0x4cbb66[_0x4c18be(0x48c)](/(\d+)([%％])/i)){const _0x3f90f=Number(RegExp['$1'])*0.01;_0x5efeda+=Math[_0x4c18be(0x31e)](Graphics[_0x4c18be(0x58a)]*_0x3f90f);}this['ay']=Graphics[_0x4c18be(0x58a)]/0x2+Math[_0x4c18be(0x4e6)](_0x5efeda)+Math[_0x4c18be(0x4e6)](_0x5efeda)-_0x5efeda;break;default:this['ay']=Graphics[_0x4c18be(0x58a)]/0x2;break;}this['ax']+=this['data']()[_0x4c18be(0x4fe)][_0x4c18be(0x4c6)]||0x0,this['ay']+=this[_0x4c18be(0x3b3)]()['sprite']['spawnOffsetY']||0x0,this[_0x4c18be(0x53c)]=this['data']()[_0x4c18be(0x4fe)]['mapBound'],this[_0x4c18be(0x53c)]&&(this['ax']+=this[_0x4c18be(0x567)][_0x4c18be(0x2c2)]['x'],this['ay']+=this[_0x4c18be(0x567)][_0x4c18be(0x2c2)]['y']);},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x397)]=function(){const _0x49708e=_0x32d3d9;this[_0x49708e(0x373)]=this['data']()[_0x49708e(0x4fe)]['opacity'];const _0x43bac6=this['data']()['sprite']['opacityVariance'],_0x26abad=VisuMZ['WeatherEffects'][_0x49708e(0x463)](_0x43bac6);this[_0x49708e(0x373)]=(this[_0x49708e(0x373)]+_0x26abad)['clamp'](0x0,0xff),this[_0x49708e(0x33b)]=this['opacity'],this[_0x49708e(0x4dc)]=this[_0x49708e(0x3b3)]()['sprite'][_0x49708e(0x4f1)]||_0x49708e(0x447),this[_0x49708e(0x5ad)]=this[_0x49708e(0x3b3)]()[_0x49708e(0x4fe)][_0x49708e(0x53f)]||0x0,this[_0x49708e(0x35d)]=this[_0x49708e(0x3b3)]()[_0x49708e(0x4fe)][_0x49708e(0x53f)]||0x0;},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x530)]=function(){const _0x4a628a=_0x32d3d9;this[_0x4a628a(0x3bf)]=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)][_0x4a628a(0x341)]||_0x4a628a(0x5e1),this['_trajectoryLockedID']=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)][_0x4a628a(0x2dc)]||0x0,this[_0x4a628a(0x5b0)]=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)][_0x4a628a(0x5c7)]||0x0,this['_lockedOffsetY']=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)][_0x4a628a(0x25a)]||0x0,this[_0x4a628a(0x2e8)]=this[_0x4a628a(0x3b3)]()['trajectory']['speed'],this[_0x4a628a(0x2e8)]+=VisuMZ['WeatherEffects'][_0x4a628a(0x204)](this['data']()[_0x4a628a(0x537)][_0x4a628a(0x294)]);if(this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)]['speedVariance']!==0x0){if(this[_0x4a628a(0x2e8)]===0x0)this[_0x4a628a(0x2e8)]=Math[_0x4a628a(0x509)]();}this[_0x4a628a(0x5cd)]=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)][_0x4a628a(0x2b0)];const _0x587ca8=this[_0x4a628a(0x3b3)]()['trajectory'][_0x4a628a(0x450)],_0x8d7bd2=VisuMZ[_0x4a628a(0x4c5)]['MakeVariance'](_0x587ca8);this[_0x4a628a(0x5cd)]=Math[_0x4a628a(0x346)](this[_0x4a628a(0x5cd)]+_0x8d7bd2),this[_0x4a628a(0x46b)]=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)][_0x4a628a(0x320)],this[_0x4a628a(0x1fb)]=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)]['alignAngle']??!![],this[_0x4a628a(0x449)]=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)][_0x4a628a(0x2cc)]??0x0,this['_angleArcTotal']=0x0,this['_angleSwayRng']=Math[_0x4a628a(0x4e6)](0xf4240),this[_0x4a628a(0x290)]=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)][_0x4a628a(0x377)],this['_angleSwaySpeed']=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)][_0x4a628a(0x2bf)],this['_spinAngle']=0x0,this[_0x4a628a(0x282)]=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)]['spinSpeed']||0x0;this[_0x4a628a(0x282)]!==0x0&&(this[_0x4a628a(0x5dc)]=Math['randomInt'](0x168));this['_spinSpeed']+=VisuMZ['WeatherEffects'][_0x4a628a(0x463)](this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)]['spinSpeedVariance']||0x0);if(this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)][_0x4a628a(0x248)]){if(Math['random']()<0.5)this[_0x4a628a(0x282)]*=-0x1;}this[_0x4a628a(0x230)]=Math[_0x4a628a(0x4e6)](0xf4240),this[_0x4a628a(0x4bd)]=Math[_0x4a628a(0x4e6)](0xf4240),this['_xSwayRange']=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)][_0x4a628a(0x359)],this[_0x4a628a(0x31f)]=this['data']()['trajectory'][_0x4a628a(0x41b)],this[_0x4a628a(0x4f7)]=this[_0x4a628a(0x3b3)]()[_0x4a628a(0x537)][_0x4a628a(0x476)],this['_ySwaySpeed']=this[_0x4a628a(0x3b3)]()['trajectory'][_0x4a628a(0x5d1)];},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x31d)]=function(){const _0x2b0826=_0x32d3d9;this[_0x2b0826(0x1fe)](),this[_0x2b0826(0x533)](),this[_0x2b0826(0x372)](),this['rebornSpriteTone'](),this[_0x2b0826(0x27c)]();},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x1fe)]=function(){const _0xa55b88=this['randomizeBitmapType']();this['loadBitmapType'](_0xa55b88);},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x585)]=function(){const _0x3633fa=_0x32d3d9,_0x51b9ab=this['data']();let _0x2cc8fe=[],_0x4755b7=0x0;_0x51b9ab[_0x3633fa(0x5d2)][_0x3633fa(0x26d)]&&(_0x2cc8fe[_0x3633fa(0x4ee)](_0x3633fa(0x26d)),_0x4755b7+=_0x51b9ab[_0x3633fa(0x5d2)][_0x3633fa(0x4f5)]||0x1);_0x51b9ab['image'][_0x3633fa(0x264)][_0x3633fa(0x5c6)]>0x0&&(_0x2cc8fe[_0x3633fa(0x4ee)](_0x3633fa(0x264)),_0x4755b7+=_0x51b9ab[_0x3633fa(0x5d2)][_0x3633fa(0x328)]||0x1);_0x51b9ab[_0x3633fa(0x5d2)][_0x3633fa(0x2a0)]['length']>0x0&&(_0x2cc8fe[_0x3633fa(0x4ee)]('pictures'),_0x4755b7+=_0x51b9ab[_0x3633fa(0x5d2)]['picturesWeight']||0x1);let _0x2e33a2=Math['random']()*_0x4755b7;for(const _0x27cca2 of _0x2cc8fe){_0x2e33a2-=_0x51b9ab[_0x3633fa(0x5d2)][_0x3633fa(0x44c)[_0x3633fa(0x5f9)](_0x27cca2)]||0x0;if(_0x2e33a2<=0x0)return _0x27cca2;}return _0x3633fa(0x26d);},Sprite_WeatherParticle['prototype']['loadBitmapType']=function(_0x832f5e){const _0x555b61=_0x32d3d9;this[_0x555b61(0x5cf)]=!![];if(_0x832f5e===_0x555b61(0x26d))this[_0x555b61(0x2c9)]();else{if(_0x832f5e===_0x555b61(0x264))this[_0x555b61(0x408)]();else _0x832f5e===_0x555b61(0x2a0)&&this[_0x555b61(0x5f1)]();}},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x2c9)]=function(){const _0x505404=_0x32d3d9,_0x384266=this['data']()['type'][_0x505404(0x21c)]()[_0x505404(0x4b3)]();this[_0x505404(0x219)]=ImageManager[_0x505404(0x580)](_0x384266),this['bitmap'][_0x505404(0x459)](this[_0x505404(0x3de)][_0x505404(0x35b)](this));},Sprite_WeatherParticle[_0x32d3d9(0x2c1)]['setFullBitmapFrame']=function(){const _0x233162=_0x32d3d9;this[_0x233162(0x5cf)]=![];const _0xcab44f=this['bitmap']['width'],_0x23beae=this['bitmap'][_0x233162(0x58a)];this[_0x233162(0x301)](0x0,0x0,_0xcab44f,_0x23beae);},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x408)]=function(){const _0x3bfc2e=_0x32d3d9;this['bitmap']=ImageManager[_0x3bfc2e(0x24c)](),this[_0x3bfc2e(0x219)][_0x3bfc2e(0x459)](this['setupIconFrame']['bind'](this));},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x560)]=function(){const _0x3abe61=_0x32d3d9;this[_0x3abe61(0x5cf)]=![];const _0x5b4406=this[_0x3abe61(0x3b3)]()[_0x3abe61(0x5d2)][_0x3abe61(0x264)],_0x480b20=_0x5b4406[Math[_0x3abe61(0x31e)](Math[_0x3abe61(0x509)]()*_0x5b4406[_0x3abe61(0x5c6)])],_0x2e2746=ImageManager[_0x3abe61(0x21a)],_0x1b9b62=ImageManager['iconHeight'],_0x27e657=_0x480b20%0x10*_0x2e2746,_0x5d534f=Math[_0x3abe61(0x31e)](_0x480b20/0x10)*_0x1b9b62;this[_0x3abe61(0x301)](_0x27e657,_0x5d534f,_0x2e2746,_0x1b9b62);},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x5f1)]=function(){const _0x5381a9=_0x32d3d9,_0x20453f=this[_0x5381a9(0x3b3)]()[_0x5381a9(0x5d2)][_0x5381a9(0x2a0)],_0x492dd6=_0x20453f[Math['floor'](Math['random']()*_0x20453f[_0x5381a9(0x5c6)])];this['bitmap']=ImageManager[_0x5381a9(0x50b)](_0x492dd6),this[_0x5381a9(0x219)][_0x5381a9(0x459)](this[_0x5381a9(0x3de)][_0x5381a9(0x35b)](this));},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x533)]=function(){const _0x2917a2=_0x32d3d9,_0x5516eb=this[_0x2917a2(0x3b3)]()['image'][_0x2917a2(0x32b)];this[_0x2917a2(0x32b)]=_0x5516eb;},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x372)]=function(){const _0x4f700f=_0x32d3d9,_0x226b18=this[_0x4f700f(0x3b3)]()[_0x4f700f(0x5d2)][_0x4f700f(0x59b)]||[];if(_0x226b18[_0x4f700f(0x5c6)]<=0x0)_0x226b18[_0x4f700f(0x4ee)](0x0);this[_0x4f700f(0x49e)]=_0x226b18[Math[_0x4f700f(0x31e)](Math[_0x4f700f(0x509)]()*_0x226b18[_0x4f700f(0x5c6)])],this[_0x4f700f(0x2df)](this[_0x4f700f(0x49e)]);},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x48d)]=function(){const _0x18eabe=_0x32d3d9,_0x36eb8f=this['data']()[_0x18eabe(0x5d2)][_0x18eabe(0x5db)]||[];if(_0x36eb8f[_0x18eabe(0x5c6)]<=0x0)_0x36eb8f['push']([0x0,0x0,0x0,0x0]);this[_0x18eabe(0x34f)]=_0x36eb8f[Math[_0x18eabe(0x31e)](Math['random']()*_0x36eb8f['length'])]['clone'](),this[_0x18eabe(0x466)](this[_0x18eabe(0x34f)]);},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x27c)]=function(){const _0x51f7b8=_0x32d3d9;if(!this[_0x51f7b8(0x508)])return;if(!this[_0x51f7b8(0x2a3)])return;if(this[_0x51f7b8(0x262)]!==0x0)return;if(!this[_0x51f7b8(0x46d)][_0x51f7b8(0x53d)]([0x0,0x0,0x0,0x0]))return;this[_0x51f7b8(0x508)][_0x51f7b8(0x213)](this[_0x51f7b8(0x2a3)]),delete this[_0x51f7b8(0x2a3)];},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x4bf)]=function(){const _0xeef9ee=_0x32d3d9;this[_0xeef9ee(0x4ea)]();},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x4ea)]=function(){const _0x125813=_0x32d3d9;if(!this[_0x125813(0x5cc)])return;if(!this[_0x125813(0x5cc)][_0x125813(0x208)])return;const _0x189ead=this[_0x125813(0x5cc)]['respawnCommonEventID']||0x0;SceneManager[_0x125813(0x496)][_0x125813(0x4d0)](_0x189ead);},Sprite_WeatherParticle[_0x32d3d9(0x2c1)]['update']=function(){const _0x5a5522=_0x32d3d9;Sprite[_0x5a5522(0x2c1)][_0x5a5522(0x58f)][_0x5a5522(0x2f0)](this);if(this[_0x5a5522(0x341)]===_0x5a5522(0x251))return;if(this['_notLoadedReady'])return;if(this['_respawnDelay']>0x0)return this[_0x5a5522(0x5ad)]=0x0,this[_0x5a5522(0x373)]=0x0,this[_0x5a5522(0x280)]--;this[_0x5a5522(0x554)](),this[_0x5a5522(0x46f)](),this[_0x5a5522(0x5f2)](),this[_0x5a5522(0x266)](),this[_0x5a5522(0x39d)]();},Sprite_WeatherParticle[_0x32d3d9(0x2c1)]['updateLifespan']=function(){const _0x2aef55=_0x32d3d9;if(this['_lifespan']<=0x0)return this['rebornSprite']();if(this[_0x2aef55(0x402)]()){this[_0x2aef55(0x5bf)]=this[_0x2aef55(0x540)];return;}this['_lifespan']--;if(this[_0x2aef55(0x5bf)]<=0x0&&this['_flags']){if(this[_0x2aef55(0x5cc)]['fireworksFinish']&&this[_0x2aef55(0x341)]!==_0x2aef55(0x3c3))return this[_0x2aef55(0x434)]();else{if(this['_flags'][_0x2aef55(0x4e0)]&&this[_0x2aef55(0x341)]!=='sparkle')return this['processSparkleFinish']();}this[_0x2aef55(0x5cc)][_0x2aef55(0x549)]&&this[_0x2aef55(0x250)]();}},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x402)]=function(){const _0x5987cf=_0x32d3d9;if(!this['_flags'])return![];if(!this[_0x5987cf(0x5cc)][_0x5987cf(0x223)])return![];return this['type']===this['data']()[_0x5987cf(0x341)];},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x434)]=function(){const _0x389716=_0x32d3d9;this[_0x389716(0x341)]=_0x389716(0x487),this['_lifespan']=Math['randomInt'](0x14)+0x50,this[_0x389716(0x540)]=this[_0x389716(0x5bf)],this['_lastType']=_0x389716(0x487),this[_0x389716(0x5cc)]={'scaleIn':0x0,'scaleInDuration':0x64,'scaleOut':0x2,'scaleOutDuration':0x64},this[_0x389716(0x2d2)]=0x1,this[_0x389716(0x51b)]=0x1,this[_0x389716(0x406)]=0x0,this['opacity']=0xff,this[_0x389716(0x33b)]=0xff,this['_opacityEasingType']='InSine',this[_0x389716(0x5ad)]=0xa,this[_0x389716(0x35d)]=0xa,this['_trajectoryType']=_0x389716(0x5e1),this[_0x389716(0x2e8)]=0.05,this[_0x389716(0x5cd)]=0x10e,this['_angleOffset']=Math['randomInt'](0x168),this['_alignAngle']=![],this[_0x389716(0x449)]=0x0,this[_0x389716(0x263)]=0x0,this['_angleSwayRange']=0x0,this[_0x389716(0x5dc)]=0x0,this[_0x389716(0x282)]=0x0,this[_0x389716(0x1f0)]=0x0,this[_0x389716(0x4f7)]=0x0,this[_0x389716(0x5cf)]=!![],this['bitmap']=ImageManager['weatherEffectsFireworksFlower'](),this[_0x389716(0x219)][_0x389716(0x459)](this['setFullBitmapFrame'][_0x389716(0x35b)](this)),this[_0x389716(0x32b)]=0x1,this[_0x389716(0x46d)]=[0x0,0x0,0x0,0x0];},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x5fa)]=function(){const _0x5b3711=_0x32d3d9;this[_0x5b3711(0x341)]=_0x5b3711(0x5e8),this[_0x5b3711(0x5bf)]=Math[_0x5b3711(0x4e6)](0x1e)+0x3c,this[_0x5b3711(0x540)]=this['_lifespan'],this[_0x5b3711(0x523)]=_0x5b3711(0x5e8),this[_0x5b3711(0x5cc)]={},this[_0x5b3711(0x2d2)]=0x1,this[_0x5b3711(0x51b)]=0x1,this[_0x5b3711(0x406)]=0x1,this[_0x5b3711(0x373)]=0xff,this[_0x5b3711(0x33b)]=0xff,this[_0x5b3711(0x4dc)]=_0x5b3711(0x5b9),this['_opacityFadeInTime']=0x6,this['_opacityFadeInTimeWhole']=0x6,this['_trajectoryType']=_0x5b3711(0x5ec),this['_speed']=0x0,this[_0x5b3711(0x5cd)]=0x0,this['_angleOffset']=0x0,this[_0x5b3711(0x1fb)]=![],this[_0x5b3711(0x449)]=0x0,this[_0x5b3711(0x263)]=0x0,this['_angleSwayRange']=0x0,this['_spinAngle']=0x0,this[_0x5b3711(0x282)]=Math['randomInt'](0x3)+0x2,this[_0x5b3711(0x1f0)]=0x0,this[_0x5b3711(0x4f7)]=0x0,this['_notLoadedReady']=!![],this[_0x5b3711(0x219)]=ImageManager[_0x5b3711(0x425)](),this[_0x5b3711(0x219)][_0x5b3711(0x459)](this[_0x5b3711(0x3de)]['bind'](this)),this[_0x5b3711(0x32b)]=0x1,this[_0x5b3711(0x262)]=0x0,this[_0x5b3711(0x46d)]=[0x0,0x0,0x0,0x0],this[_0x5b3711(0x27c)]();},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x250)]=function(){const _0x356f61=_0x32d3d9;this[_0x356f61(0x280)]=this[_0x356f61(0x5cc)][_0x356f61(0x549)];const _0x5ef62d=this[_0x356f61(0x5cc)][_0x356f61(0x48b)],_0x491482=this['data']()['power'],_0x1179a6=Math[_0x356f61(0x4e6)](_0x5ef62d*_0x491482);this[_0x356f61(0x280)]+=_0x1179a6;},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x46f)]=function(){const _0x42e952=_0x32d3d9;if(this[_0x42e952(0x5cc)][_0x42e952(0x3b8)])this[_0x42e952(0x4f6)]();},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x4f6)]=function(){const _0x1ca4b1=_0x32d3d9,_0x392efc=Graphics[_0x1ca4b1(0x57e)]+this[_0x1ca4b1(0x536)],_0x483da7=this[_0x1ca4b1(0x5cc)][_0x1ca4b1(0x4c1)],_0x3a91ec=this[_0x1ca4b1(0x5cc)][_0x1ca4b1(0x3b8)]/0x2,_0x2314bd=this[_0x1ca4b1(0x49e)]+Math[_0x1ca4b1(0x5e5)](_0x392efc*_0x483da7)*_0x3a91ec;this['setHue'](_0x2314bd);},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x5f2)]=function(){const _0x387518=_0x32d3d9;this[_0x387518(0x479)](),this[_0x387518(0x289)]['x']=this[_0x387518(0x55a)](),this['scale']['y']=this['calculateScaleY']();},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x479)]=function(){const _0x11a925=_0x32d3d9;if(this[_0x11a925(0x5cc)][_0x11a925(0x502)]>this[_0x11a925(0x5bf)]){const _0x532a15=this[_0x11a925(0x5bf)],_0x9fd7fb=this[_0x11a925(0x5cc)][_0x11a925(0x357)]??0x1;_0x532a15<=0x1?this[_0x11a925(0x406)]=_0x9fd7fb:this[_0x11a925(0x406)]=(this[_0x11a925(0x406)]*(_0x532a15-0x1)+_0x9fd7fb)/_0x532a15;}else{if(this['_flags'][_0x11a925(0x467)]>this[_0x11a925(0x540)]-this[_0x11a925(0x5bf)]){const _0x2ae644=this[_0x11a925(0x5cc)][_0x11a925(0x467)]-(this[_0x11a925(0x540)]-this[_0x11a925(0x5bf)]),_0x3b38bb=0x1;_0x2ae644<=0x1?this[_0x11a925(0x406)]=_0x3b38bb:this[_0x11a925(0x406)]=(this[_0x11a925(0x406)]*(_0x2ae644-0x1)+_0x3b38bb)/_0x2ae644;}else this[_0x11a925(0x406)]=0x1;}},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x55a)]=function(){const _0x3758c=_0x32d3d9;let _0xf137ab=this[_0x3758c(0x293)];_0xf137ab*=this[_0x3758c(0x2d2)];if(this['_flags'][_0x3758c(0x3e8)]&&this[_0x3758c(0x516)]){const _0x135325=Graphics[_0x3758c(0x57e)]+this[_0x3758c(0x543)];_0xf137ab*=Math[_0x3758c(0x5e5)](_0x135325*this[_0x3758c(0x3f5)]);}return _0xf137ab*=this[_0x3758c(0x406)],_0xf137ab;},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x59f)]=function(){const _0x37b424=_0x32d3d9;let _0x5383eb=this[_0x37b424(0x293)];_0x5383eb*=this[_0x37b424(0x51b)];if(this['_flags'][_0x37b424(0x3e8)]&&!this[_0x37b424(0x516)]){const _0x44a362=Graphics[_0x37b424(0x57e)]+this['_flatFlutterRngY'];_0x5383eb*=Math[_0x37b424(0x5e5)](_0x44a362*this[_0x37b424(0x2b7)]);}return _0x5383eb*=this['_scaleInOutRatio'],_0x5383eb;},Sprite_WeatherParticle['prototype']['updatePosition']=function(){const _0x3e513e=_0x32d3d9;this[_0x3e513e(0x32d)](),this[_0x3e513e(0x2e5)]();},Sprite_WeatherParticle['prototype']['updatePositionFinal']=function(){const _0x38cb5f=_0x32d3d9;this['x']=this['ax'],this['y']=this['ay'],this['_originBound']&&(this['x']-=this[_0x38cb5f(0x567)][_0x38cb5f(0x2c2)]['x'],this['y']-=this[_0x38cb5f(0x567)]['origin']['y']),this['x']=Math[_0x38cb5f(0x346)](this['x']),this['y']=Math[_0x38cb5f(0x346)](this['y']);},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x39d)]=function(){const _0x341472=_0x32d3d9;this[_0x341472(0x5aa)](),this[_0x341472(0x291)]();},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x5aa)]=function(){const _0x78ed5d=_0x32d3d9;if(this[_0x78ed5d(0x5bf)]<=0x0)return;if(this[_0x78ed5d(0x5ad)]>0x0&&this[_0x78ed5d(0x5bf)]>this[_0x78ed5d(0x5ad)])return;if(this[_0x78ed5d(0x402)]())return;const _0x4477cc=this[_0x78ed5d(0x4dc)]||_0x78ed5d(0x447);this[_0x78ed5d(0x33b)]=this[_0x78ed5d(0x3ff)](this[_0x78ed5d(0x33b)],0x0,_0x4477cc);},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x3ff)]=function(_0x11f770,_0x3105d1,_0x8f2760){const _0x296922=_0x32d3d9,_0x1f08ed=this[_0x296922(0x5bf)],_0x23d4a4=this[_0x296922(0x540)],_0x4b6dff=this['calcEasing']((_0x23d4a4-_0x1f08ed)/_0x23d4a4,_0x8f2760),_0x1f9427=this[_0x296922(0x3c0)]((_0x23d4a4-_0x1f08ed+0x1)/_0x23d4a4,_0x8f2760),_0x2750c2=(_0x11f770-_0x3105d1*_0x4b6dff)/(0x1-_0x4b6dff);return _0x2750c2+(_0x3105d1-_0x2750c2)*_0x1f9427;},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x3c0)]=function(_0x5c513d,_0x9bd02b){const _0x18db1f=_0x32d3d9;return VisuMZ[_0x18db1f(0x448)](_0x5c513d,_0x9bd02b);},Sprite_WeatherParticle[_0x32d3d9(0x2c1)]['opacityRate']=function(){const _0x238f44=_0x32d3d9;let _0x4f6ce5=0x1;if(!SceneManager[_0x238f44(0x587)]()){if(this[_0x238f44(0x5cc)][_0x238f44(0x24d)]&&!this['_weatherParent'][_0x238f44(0x330)]){const _0x441beb=$gamePlayer['screenX']()-this['x'],_0x1ae45e=$gamePlayer[_0x238f44(0x40f)]()-this['y'],_0x23fff1=Math['sqrt'](_0x441beb*_0x441beb+_0x1ae45e*_0x1ae45e),_0x14f8d9=0x5*$gameMap[_0x238f44(0x329)]();if(_0x23fff1<=_0x14f8d9)_0x4f6ce5*=0.15;}}if(this[_0x238f44(0x5ad)]>0x0){const _0x2935f6=this['_opacityFadeInTimeWhole']||0x1,_0x2bb7f8=this[_0x238f44(0x5ad)];_0x4f6ce5*=(_0x2935f6-_0x2bb7f8)/_0x2935f6,this[_0x238f44(0x5ad)]--;}return _0x4f6ce5;},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x291)]=function(){const _0xc2e483=_0x32d3d9,_0x5b07c2=this[_0xc2e483(0x2bb)]();this[_0xc2e483(0x373)]=Math[_0xc2e483(0x1ec)](this[_0xc2e483(0x33b)]*_0x5b07c2);},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x32d)]=function(){const _0x4a93e4=_0x32d3d9,_0x3c8f61=this[_0x4a93e4(0x482)]();switch(this['_trajectoryType']){case'straight':this[_0x4a93e4(0x30c)](_0x3c8f61);break;case'frozen':this[_0x4a93e4(0x4e8)](_0x3c8f61);break;case _0x4a93e4(0x4ba):case'follower':case'event':this[_0x4a93e4(0x3d2)](_0x3c8f61);break;case'actor':case _0x4a93e4(0x37d):case _0x4a93e4(0x2a1):case _0x4a93e4(0x36d):this['updatePositionBattleLockedTarget'](_0x3c8f61);break;default:this[_0x4a93e4(0x5c8)]();break;}this[_0x4a93e4(0x2ea)](),this[_0x4a93e4(0x4cc)]();},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x482)]=function(){const _0xc94e0=_0x32d3d9;this[_0xc94e0(0x263)]+=this[_0xc94e0(0x449)];let _0x2ad238=this[_0xc94e0(0x5cd)]+this[_0xc94e0(0x263)];const _0x13fdb8=Graphics['frameCount']+this['_angleSwayRng'];return _0x2ad238+=Math[_0xc94e0(0x5e5)](_0x13fdb8*this[_0xc94e0(0x24f)])*this[_0xc94e0(0x290)],this[_0xc94e0(0x2b0)]=-((this[_0xc94e0(0x1fb)]?_0x2ad238:0x0)+this[_0xc94e0(0x46b)]),_0x2ad238;},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x30c)]=function(_0x537e36){const _0x2590ce=_0x32d3d9,_0x4fd833=VisuMZ[_0x2590ce(0x4c5)]['DegreesToRadian'](_0x537e36);this['ax']+=this[_0x2590ce(0x2e8)]*Math[_0x2590ce(0x5e5)](_0x4fd833),this['ay']-=this[_0x2590ce(0x2e8)]*Math['sin'](_0x4fd833);},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x5c8)]=function(){const _0x7aaf7b=_0x32d3d9;this['ax']=Graphics[_0x7aaf7b(0x3b2)]*0x64,this['ay']=Graphics[_0x7aaf7b(0x58a)]*0x64;},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x4e8)]=function(_0xf240d9){},Sprite_WeatherParticle[_0x32d3d9(0x2c1)]['updatePositionMapLockedTarget']=function(_0x57900d){const _0x388f01=_0x32d3d9;let _0x5dc436=null;if(!SceneManager['isSceneBattle']())switch(this[_0x388f01(0x3bf)]){case _0x388f01(0x4ba):_0x5dc436=$gamePlayer;break;case'follower':const _0x1ad788=this[_0x388f01(0x4dd)];_0x5dc436=$gamePlayer[_0x388f01(0x4c0)]()[_0x388f01(0x443)](_0x1ad788);break;case _0x388f01(0x412):const _0x4b8f73=this['_trajectoryLockedID'];_0x5dc436=$gameMap[_0x388f01(0x412)](_0x4b8f73);break;}if(_0x5dc436){this['ax']=_0x5dc436[_0x388f01(0x1fd)]()+this[_0x388f01(0x5b0)],this['ay']=_0x5dc436[_0x388f01(0x40f)]()+this[_0x388f01(0x3a8)];return;}this[_0x388f01(0x5c8)]();},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x41a)]=function(_0x5d57bf){const _0x130e93=_0x32d3d9;let _0x4a828e=null;if(SceneManager[_0x130e93(0x587)]())switch(this[_0x130e93(0x3bf)]){case _0x130e93(0x3f7):const _0x3182c4=this[_0x130e93(0x4dd)];_0x4a828e=$gameActors[_0x130e93(0x3f7)](_0x3182c4);break;case _0x130e93(0x37d):const _0x4414f5=this[_0x130e93(0x4dd)];_0x4a828e=$gameTroop['members']()[_0x4414f5];break;case'user':_0x4a828e=BattleManager[_0x130e93(0x3b4)];break;case _0x130e93(0x36d):_0x4a828e=BattleManager['_target'];!_0x4a828e&&BattleManager['_targets']&&(_0x4a828e=BattleManager['_targets'][0x0]);break;}if(_0x4a828e){const _0x465634=SceneManager[_0x130e93(0x496)]['_spriteset'];if(_0x465634){const _0x3f3058=_0x465634[_0x130e93(0x380)](_0x4a828e);if(_0x3f3058){const _0x2970ab=new Point(_0x3f3058['x'],_0x3f3058['y']),_0x509972=_0x3f3058[_0x130e93(0x249)][_0x130e93(0x35a)](_0x2970ab);this['ax']=_0x3f3058['x']-_0x509972['x']+this[_0x130e93(0x5b0)],this['ay']=_0x3f3058['y']-_0x509972['y']+this['_lockedOffsetY'];return;}}}this[_0x130e93(0x5c8)]();},Sprite_WeatherParticle[_0x32d3d9(0x2c1)][_0x32d3d9(0x2ea)]=function(){const _0x20d96a=_0x32d3d9;this[_0x20d96a(0x5dc)]+=this[_0x20d96a(0x282)],this['angle']+=this[_0x20d96a(0x5dc)];},Sprite_WeatherParticle['prototype'][_0x32d3d9(0x4cc)]=function(){const _0x586bef=_0x32d3d9,_0x519a10=Graphics[_0x586bef(0x57e)]+this[_0x586bef(0x230)],_0x59c79c=Graphics[_0x586bef(0x57e)]+this[_0x586bef(0x4bd)];this['ax']+=Math[_0x586bef(0x5e5)](_0x519a10*this[_0x586bef(0x31f)])*this[_0x586bef(0x1f0)]/0x2,this['ay']+=Math[_0x586bef(0x446)](_0x59c79c*this['_ySwaySpeed'])*this[_0x586bef(0x4f7)]/0x2;},Spriteset_Base[_0x32d3d9(0x2c1)]['createWeather']=function(){const _0x466b7c=_0x32d3d9;this[_0x466b7c(0x3ba)]?this['_weather']=this[_0x466b7c(0x3ba)]['children'][0x0]:(this[_0x466b7c(0x421)]=new Weather(),this[_0x466b7c(0x31b)](this[_0x466b7c(0x421)]));},Spriteset_Base[_0x32d3d9(0x2c1)]['createNewWeatherLayers']=function(_0x354639,_0x2262e0){if(!_0x354639)return;const _0x35f398=Weather['MAX_LAYERS'];for(let _0x15cdaa=0x1;_0x15cdaa<=_0x35f398;_0x15cdaa++){const _0x28e315=VisuMZ['WeatherEffects']['getWeatherLayerSprite'](_0x15cdaa,_0x2262e0);_0x354639['addChild'](_0x28e315);}},Spriteset_Base['prototype'][_0x32d3d9(0x491)]=function(){const _0x186728=_0x32d3d9;this[_0x186728(0x254)]=new Sprite(),this[_0x186728(0x594)](this[_0x186728(0x254)],!![]),this[_0x186728(0x51c)][_0x186728(0x31b)](this[_0x186728(0x254)]);},Spriteset_Base[_0x32d3d9(0x2c1)][_0x32d3d9(0x453)]=function(){const _0xcc6cfd=_0x32d3d9;this[_0xcc6cfd(0x3ba)]=new Sprite(),this[_0xcc6cfd(0x594)](this[_0xcc6cfd(0x3ba)],![]),this[_0xcc6cfd(0x31b)](this[_0xcc6cfd(0x3ba)]);},Spriteset_Base[_0x32d3d9(0x2c1)][_0x32d3d9(0x3fc)]=function(){const _0x34efa3=_0x32d3d9;this[_0x34efa3(0x2f9)](!![]),this[_0x34efa3(0x2f9)](![]);},Spriteset_Base[_0x32d3d9(0x2c1)][_0x32d3d9(0x2f9)]=function(_0x4b7e4b){const _0x3d1aee=_0x32d3d9,_0xda6323=_0x4b7e4b?this[_0x3d1aee(0x254)]:this[_0x3d1aee(0x3ba)];if(!_0xda6323)return;for(const _0x43c43d of _0xda6323[_0x3d1aee(0x415)]){if(!_0x43c43d)continue;_0x43c43d[_0x3d1aee(0x3e5)](),_0x43c43d[_0x3d1aee(0x266)]();}},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x498)]=Spriteset_Map[_0x32d3d9(0x2c1)][_0x32d3d9(0x3b7)],Spriteset_Map[_0x32d3d9(0x2c1)][_0x32d3d9(0x3b7)]=function(){const _0x34ba58=_0x32d3d9;this[_0x34ba58(0x491)](),VisuMZ['WeatherEffects'][_0x34ba58(0x498)][_0x34ba58(0x2f0)](this),this['createUpperWeatherLayer']();},Spriteset_Map[_0x32d3d9(0x2c1)][_0x32d3d9(0x3a3)]=function(){const _0xbbf586=_0x32d3d9;Spriteset_Base[_0xbbf586(0x2c1)][_0xbbf586(0x3a3)][_0xbbf586(0x2f0)](this);},Spriteset_Map['prototype']['updateWeather']=function(){const _0x5bbdf4=_0x32d3d9;Spriteset_Base[_0x5bbdf4(0x2c1)][_0x5bbdf4(0x3fc)][_0x5bbdf4(0x2f0)](this);},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x224)]=Spriteset_Battle['prototype'][_0x32d3d9(0x58c)],Spriteset_Battle[_0x32d3d9(0x2c1)][_0x32d3d9(0x58c)]=function(){const _0x69e9ad=_0x32d3d9;this[_0x69e9ad(0x491)](),VisuMZ[_0x69e9ad(0x4c5)]['Spriteset_Battle_createBattleback'][_0x69e9ad(0x2f0)](this);},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x524)]=Spriteset_Battle['prototype'][_0x32d3d9(0x499)],Spriteset_Battle['prototype'][_0x32d3d9(0x499)]=function(){const _0x4d0423=_0x32d3d9;VisuMZ[_0x4d0423(0x4c5)][_0x4d0423(0x524)][_0x4d0423(0x2f0)](this),this['createUpperWeatherLayer']();},Spriteset_Battle['prototype'][_0x32d3d9(0x491)]=function(){const _0x165207=_0x32d3d9;Spriteset_Base[_0x165207(0x2c1)][_0x165207(0x491)]['call'](this),this['_baseSprite']['addChild'](this[_0x165207(0x254)]);},Spriteset_Battle[_0x32d3d9(0x2c1)][_0x32d3d9(0x453)]=function(){const _0x5ef10b=_0x32d3d9;Spriteset_Base[_0x5ef10b(0x2c1)][_0x5ef10b(0x453)][_0x5ef10b(0x2f0)](this),this[_0x5ef10b(0x51c)][_0x5ef10b(0x31b)](this[_0x5ef10b(0x3ba)]);},Spriteset_Battle[_0x32d3d9(0x2c1)][_0x32d3d9(0x3a3)]=function(){const _0x53bea8=_0x32d3d9;Imported['VisuMZ_2_VisualBattleEnv']&&this[_0x53bea8(0x30b)](),Spriteset_Base[_0x53bea8(0x2c1)][_0x53bea8(0x3a3)]['call'](this);},Spriteset_Battle[_0x32d3d9(0x2c1)][_0x32d3d9(0x3fc)]=function(){const _0x2b7234=_0x32d3d9;Spriteset_Base[_0x2b7234(0x2c1)][_0x2b7234(0x3fc)]['call'](this);},VisuMZ[_0x32d3d9(0x4c5)]['Window_Options_addGeneralOptions']=Window_Options['prototype'][_0x32d3d9(0x55d)],Window_Options[_0x32d3d9(0x2c1)][_0x32d3d9(0x55d)]=function(){const _0x379efd=_0x32d3d9;VisuMZ[_0x379efd(0x4c5)]['Window_Options_addGeneralOptions'][_0x379efd(0x2f0)](this),this[_0x379efd(0x368)]();},Window_Options[_0x32d3d9(0x2c1)][_0x32d3d9(0x368)]=function(){const _0x20c1f=_0x32d3d9;if(!VisuMZ[_0x20c1f(0x4c5)]['Settings'][_0x20c1f(0x316)]['AddWeatherDensityOption'])return;const _0x267b3d=TextManager[_0x20c1f(0x4e2)],_0xb1d852=_0x20c1f(0x4e2);this[_0x20c1f(0x384)](_0x267b3d,_0xb1d852);},VisuMZ['WeatherEffects'][_0x32d3d9(0x370)]=Window_Options['prototype'][_0x32d3d9(0x442)],Window_Options[_0x32d3d9(0x2c1)][_0x32d3d9(0x442)]=function(_0x4ef825){const _0x10c427=_0x32d3d9;if(_0x4ef825==='weatherDensity')return!![];return VisuMZ[_0x10c427(0x4c5)]['Window_Options_isVolumeSymbol'][_0x10c427(0x2f0)](this,_0x4ef825);},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x28d)]=function(_0x10327c){return _0x10327c*(Math['PI']/0xb4);},VisuMZ['WeatherEffects'][_0x32d3d9(0x58e)]=function(_0x2d79c8){return _0x2d79c8*(0xb4/Math['PI']);},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x463)]=function(_0xacffe3){const _0x24a7c2=_0x32d3d9;return Math['randomInt'](_0xacffe3+0x1)+Math[_0x24a7c2(0x4e6)](_0xacffe3+0x1)-_0xacffe3;},VisuMZ['WeatherEffects'][_0x32d3d9(0x204)]=function(_0x30910f){const _0x282760=_0x32d3d9;return Math[_0x282760(0x509)]()*_0x30910f+Math[_0x282760(0x509)]()*_0x30910f-_0x30910f;},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x3a0)]=function(){const _0x23878e=_0x32d3d9;this[_0x23878e(0x22c)]=[],this[_0x23878e(0x34d)]=[];const _0x55a48c=Weather['MAX_LAYERS'];let _0x6f9dc8=!![];for(let _0x615776=0x1;_0x615776<=_0x55a48c;_0x615776++){const _0x569f01=new Weather();_0x569f01['setLayerData'](_0x615776,_0x6f9dc8),this['_lowerLayerSprites'][_0x23878e(0x4ee)](_0x569f01);}_0x6f9dc8=![];for(let _0x352b6d=0x1;_0x352b6d<=_0x55a48c;_0x352b6d++){const _0x2e1fa5=new Weather();_0x2e1fa5[_0x23878e(0x5bc)](_0x352b6d,_0x6f9dc8),this[_0x23878e(0x34d)]['push'](_0x2e1fa5);}},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x5e7)]=function(_0x1c2aa6,_0x16cc43){const _0x2ddf50=_0x32d3d9;if(this[_0x2ddf50(0x22c)]===undefined)this[_0x2ddf50(0x3a0)]();if(this[_0x2ddf50(0x34d)]===undefined)this[_0x2ddf50(0x3a0)]();_0x1c2aa6=(_0x1c2aa6||0x1)[_0x2ddf50(0x1f8)](0x1,Weather[_0x2ddf50(0x48a)]);const _0x15fe15=_0x1c2aa6-0x1;return _0x16cc43?this[_0x2ddf50(0x22c)][_0x15fe15]:this['_upperLayerSprites'][_0x15fe15];},VisuMZ[_0x32d3d9(0x4c5)]['newLayer']=function(){const _0x4d11d5=_0x32d3d9;return{'type':'none','power':0x0,'powerTarget':0x0,'duration':0x0,'sprite':{'lifespan':0x3c,'lifespanVariance':0x0,'spawnLocationX':'random','spawnOffsetX':0x0,'spawnLocationY':_0x4d11d5(0x509),'spawnOffsetY':0x0,'mapBound':!![],'opacity':0xff,'opacityVariance':0x0,'opacityEasingType':_0x4d11d5(0x447),'opacityFadeInTime':0x10,'scale':0x1,'scaleVariance':0x0,'scaleRatioX':0x1,'scaleRatioY':0x1,'totalMinimum':0x14,'totalPerPower':0x5},'dimmer':{'color':_0x4d11d5(0x526),'opacityMinimum':0x0,'opacityPerPower':0x0},'image':{'generated':!![],'generatedWeight':0x1,'icons':[],'iconsWeight':0x10,'pictures':[],'picturesWeight':0x10,'blendMode':0x0,'hueVariations':[],'toneVariations':[]},'flags':{'alwaysVisiblePlayer':![],'flatFlutter':![],'hueSwayRange':0x0,'hueSwaySpeed':0.01,'longevity':![],'respawnCommonEventID':0x0,'respawnDelayMin':0x0,'respawnDelayRngPerPower':0x0,'scaleIn':0x1,'scaleInDuration':0xa,'scaleOut':0x1,'scaleOutDuration':0xa,'fireworksFinish':![],'sparkleFinish':![]},'trajectory':{'type':_0x4d11d5(0x5e1),'lockedID':0x0,'lockedOffsetX':0x0,'lockedOffsetY':0x0,'speed':0x1,'speedVariance':0x0,'angle':0x0,'alignAngle':!![],'angleOffset':0x0,'angleVariance':0x0,'angleArc':0x0,'angleSwayRange':0x0,'angleSwaySpeed':0.01,'spinSpeed':0x0,'spinSpeedVariance':0x0,'reverseSpin':![],'xSwayRange':0x0,'xSwaySpeed':0.01,'ySwayRange':0x0,'ySwaySpeed':0.01}};},VisuMZ[_0x32d3d9(0x4c5)]['setupEventCommandData']=function(_0xafd14b){const _0x411098=_0x32d3d9;if(!_0xafd14b)return;_0xafd14b[_0x411098(0x4fe)][_0x411098(0x373)]=0xbe,_0xafd14b[_0x411098(0x4fe)]['opacityVariance']=0x1e;if(_0xafd14b[_0x411098(0x341)]===_0x411098(0x281))_0xafd14b[_0x411098(0x4fe)][_0x411098(0x2b5)]=0x24,_0xafd14b[_0x411098(0x4fe)]['opacity']=0x82,_0xafd14b[_0x411098(0x4fe)][_0x411098(0x5a9)]=0x1e,_0xafd14b['sprite'][_0x411098(0x42f)]=0x50,_0xafd14b[_0x411098(0x4fe)][_0x411098(0x34c)]=0x14,(_0xafd14b[_0x411098(0x3ed)][_0x411098(0x54f)]='#505050',_0xafd14b[_0x411098(0x3ed)][_0x411098(0x308)]=0x6,_0xafd14b[_0x411098(0x537)]['speed']=0xc),_0xafd14b[_0x411098(0x537)][_0x411098(0x2b0)]=0xff,_0xafd14b[_0x411098(0x537)]['angleVariance']=0x5;else{if(_0xafd14b[_0x411098(0x341)]===_0x411098(0x41f))_0xafd14b['sprite']['lifespan']=0x1c,_0xafd14b[_0x411098(0x4fe)][_0x411098(0x373)]=0x82,_0xafd14b[_0x411098(0x4fe)]['opacityVariance']=0x1e,_0xafd14b[_0x411098(0x4fe)][_0x411098(0x42f)]=0x78,_0xafd14b[_0x411098(0x4fe)][_0x411098(0x34c)]=0x28,(_0xafd14b['dimmer'][_0x411098(0x54f)]=_0x411098(0x256),_0xafd14b[_0x411098(0x3ed)][_0x411098(0x308)]=0x6,_0xafd14b[_0x411098(0x537)][_0x411098(0x324)]=0x10),_0xafd14b[_0x411098(0x537)][_0x411098(0x2b0)]=0xf5,_0xafd14b['trajectory'][_0x411098(0x450)]=0xa;else _0xafd14b[_0x411098(0x341)]===_0x411098(0x364)&&(_0xafd14b[_0x411098(0x4fe)][_0x411098(0x2b5)]=0x78,_0xafd14b[_0x411098(0x4fe)][_0x411098(0x373)]=0xa0,_0xafd14b['sprite'][_0x411098(0x5a9)]=0x14,_0xafd14b[_0x411098(0x4fe)]['totalMinimum']=0x96,_0xafd14b[_0x411098(0x4fe)][_0x411098(0x34c)]=0x28,(_0xafd14b[_0x411098(0x3ed)][_0x411098(0x54f)]=_0x411098(0x36c),_0xafd14b[_0x411098(0x3ed)]['opacityPerPower']=0x6,_0xafd14b[_0x411098(0x537)][_0x411098(0x324)]=0x2),_0xafd14b[_0x411098(0x537)][_0x411098(0x2b0)]=0xdc,_0xafd14b['trajectory'][_0x411098(0x450)]=0xf,_0xafd14b[_0x411098(0x537)][_0x411098(0x359)]=0x2,_0xafd14b['trajectory'][_0x411098(0x41b)]=0.01);}},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x451)]=function(_0x117873){const _0x45532e=_0x32d3d9,_0x55162c=VisuMZ[_0x45532e(0x4c5)][_0x45532e(0x333)]();this['applyPluginCmdSettingsBasic'](_0x55162c,_0x117873),this['applyPluginCmdSettingsCustom'](_0x55162c,_0x117873),this[_0x45532e(0x22f)](_0x55162c,_0x117873),this['applyPluginCmdSettingsLayers'](_0x55162c,_0x117873),this[_0x45532e(0x460)](_0x55162c,_0x117873);},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x4b7)]=function(){const _0x10f1ba=_0x32d3d9;return![];if(!$gameTemp[_0x10f1ba(0x34e)]())return![];return Input[_0x10f1ba(0x342)](_0x10f1ba(0x490))&&Input[_0x10f1ba(0x342)](_0x10f1ba(0x485));},VisuMZ[_0x32d3d9(0x4c5)]['applyPluginCmdSettingsBasic']=function(_0x5328ec,_0x50f89e){const _0x5b6850=_0x32d3d9;_0x5328ec[_0x5b6850(0x341)]=_0x50f89e[_0x5b6850(0x341)]||'none',_0x5328ec['powerTarget']=(_0x50f89e[_0x5b6850(0x4c9)]||0x1)[_0x5b6850(0x1f8)](0x1,0x9),this['isDebugAllOption']()&&(_0x5328ec['powerTarget']=0x9);},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x40e)]=function(_0x3cd22f,_0x514571){const _0x2a5c4b=_0x32d3d9,_0x39ba59=[_0x2a5c4b(0x4fe),_0x2a5c4b(0x3ed),_0x2a5c4b(0x5d2),'flags',_0x2a5c4b(0x537)];for(const _0xdabd40 of _0x39ba59){if(!_0x3cd22f[_0xdabd40])continue;if(!_0x514571[_0x2a5c4b(0x501)][_0xdabd40])continue;this[_0x2a5c4b(0x3d1)](_0x3cd22f[_0xdabd40],_0x514571['Custom'][_0xdabd40]);}},VisuMZ['WeatherEffects'][_0x32d3d9(0x3d1)]=function(_0x5e5d7a,_0xab06eb){for(const _0x41e828 in _0x5e5d7a){if(_0xab06eb[_0x41e828]===undefined)continue;_0x5e5d7a[_0x41e828]=_0xab06eb[_0x41e828];}},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x22f)]=function(_0x5860d6,_0x4467b7){const _0x325ce5=_0x32d3d9;if(_0x5860d6[_0x325ce5(0x537)]['type']==='event'&&_0x5860d6[_0x325ce5(0x537)][_0x325ce5(0x2dc)]<=0x0){const _0x3b4110=$gameTemp['getLastPluginCommandInterpreter']();_0x5860d6['trajectory'][_0x325ce5(0x2dc)]=_0x3b4110[_0x325ce5(0x42b)]();}},VisuMZ[_0x32d3d9(0x4c5)][_0x32d3d9(0x5df)]=function(_0x239129,_0x5bc7d8){const _0xf4a7d3=_0x32d3d9;let _0x106028=_0x5bc7d8[_0xf4a7d3(0x3f0)]['map'](_0x6fceb6=>(Number(_0x6fceb6)||0x1)[_0xf4a7d3(0x1f8)](0x1,0xa)),_0x13bfff=_0x5bc7d8['UpperLower'];_0x239129[_0xf4a7d3(0x465)]=_0x5bc7d8[_0xf4a7d3(0x465)]||0x1;this[_0xf4a7d3(0x4b7)]()&&(_0x106028=[0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa],_0x13bfff='both');for(const _0x5bb177 of _0x106028){[_0xf4a7d3(0x527),_0xf4a7d3(0x2ba)][_0xf4a7d3(0x386)](_0x13bfff)&&$gameScreen[_0xf4a7d3(0x56a)](_0x5bb177,![],_0x239129),[_0xf4a7d3(0x222),'both'][_0xf4a7d3(0x386)](_0x13bfff)&&$gameScreen[_0xf4a7d3(0x56a)](_0x5bb177,!![],_0x239129);}},VisuMZ[_0x32d3d9(0x4c5)]['applyPluginCmdSettingsWait']=function(_0x16c8bb,_0x52c78f){const _0x5c897e=_0x32d3d9;if(!_0x52c78f[_0x5c897e(0x39c)])return;const _0x1f2d24=$gameTemp[_0x5c897e(0x433)]();_0x1f2d24&&_0x1f2d24[_0x5c897e(0x5d8)](_0x16c8bb[_0x5c897e(0x465)]||0x1);};