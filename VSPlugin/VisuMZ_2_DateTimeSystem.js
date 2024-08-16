//=============================================================================
// VisuStella MZ - Date & Time System
// VisuMZ_2_DateTimeSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_DateTimeSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.DateTimeSystem = VisuMZ.DateTimeSystem || {};
VisuMZ.DateTimeSystem.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.03] [DateTimeSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Date_and_Time_System_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Does your game need a time system? This plugin adds time-related mechanics
 * to RPG Maker MZ, allowing you to control either Game Time, governed by your
 * own custom rules, or Real Time, synchronized to the player's PC or device.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Pick between Game Time or Real Time. Game Time uses in-game rules while
 *   real time synchronizes the timer with the player's PC or device.
 * * In Game Time, create custom months, weekdays, and even change up rulings
 *   like how many hours a day there are or minutes in an hour.
 * * Game Time allows for Time Dilation, where you can change how fast a minute
 *   occurs or even slow it down. This can be adjusted midgame even.
 * * Pause and unpause Game Time as you see fit, or even use notetags to halt
 *   the passage of Game Time inside certain maps like building interiors.
 * * Enables usage of real time data, like dates and time. This data can be
 *   utilized in-game for variables, switches, and going as far as tinting the
 *   screen on certain maps based on the time of day.
 * * Variables and switches will be automatically updated and can be used to
 *   save date and time-related information.
 * * Recorded data found in variables and switches are highly useful for
 *   immediate event usage.
 * * Determine the screen tone and/or overlay used depending on what time of
 *   the day it is.
 * * Certain message-related text codes can be used to make quick mention of
 *   what time it is, certain aspects of a date, seasons, and more.
 * * Compatibility with other plugins can enable more features to be used, such
 *   as date and time-related battle encounters, season items for shops, usage
 *   of different tilesets for different dates/times, and more!
 * * Date/Time HUD is added for the map scene to quickly display information to
 *   the player about the date and time.
 * * The HUD is fully customizable and custom images/icons can be used as well
 *   as custom JavaScript code to modify how certain aspects appear in-game.
 * * Parts of the HUD can be disabled for those who may only want a Time system
 *   but not a Date system or vice versa.
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
 * The following is a list of them.
 *
 * ---
 *
 * Tint Screen / Screen Tone
 * 
 * Although this plugin has screen tones for different times of the day, these
 * do NOT conflict with the "Tint Screen" command to adjust screen tones like
 * one may predict. Instead, the ones used in this plugin are a separate tint
 * effect and can, in fact, be stacked on top of each other.
 * 
 * Keep in mind that if you are using VisuMZ_2_LightingEffects, the screen
 * tones added by this plugin won't take effect in favor of the overlay system
 * to better work with the Lighting Effects system.
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
 * If you have VisuStella MZ's Battle Core installed, you will gain access to
 * a few of the new comment tags available to Troops. These comment tags allow
 * you to setup which troops that appear based on certain Date and/or Time
 * conditions.
 * 
 * For example, if you want some enemies that only appear during the day time,
 * you can use the <Encounter Cycles: Dawn, Day> comment tag. If you want them
 * to appear at night, <Encounter Cycles: Dusk, Night> will work.
 * 
 * For another example, we can make some enemies that appear only during
 * specific seasons like <Encounter Season: Winter>. Other setups can be more
 * numerically involved like during specific months, hours, weekdays, etc.
 * 
 * Keep in mind that if you are using these conditions, all other conditions
 * need to be met for those Troops, such as which regions they're supposed to
 * appear in on the map or any other plugin related conditions like for the
 * VisuStella MZ Conditional Random Encounters plugin.
 * 
 * Battlebacks will need to do the same though the notetag for this will be
 * placed on the map notebox itself and for seasonal changes only.
 * 
 * ---
 * 
 * VisuMZ_1_EventsMoveCore
 * 
 * If you have VisuStella MZ's Events & Movement Core installed, you will gain
 * access to allowing certain tilesets to swap to another upon loading the map.
 * Inside the base tileset's notebox, you can insert <Winter Swap To: 7> and it
 * will exchange itself to tileset 7 if the season happens to be winter.
 * 
 * The effect does not end there, it will perform another check, but this time,
 * on the new tileset the map was changed to. There, it can optionally perform
 * another check like <Night Swap To: 8> if desired.
 * 
 * Priority will be given to seasons first, then  the day cycles (dawn, day,
 * dusk, night). This way, you can ensure that the tileset you're using matches
 * the conditions of the season or time of day if so desired.
 * 
 * If time changes into a new season or day cycle while on the map, there won't
 * be any changes made immediately. Instead, the player must exit and reenter
 * the map for the changes to be seen. This is to prevent any awkward changes
 * and transitions that may occur otherwise. The same applies to battlebacks.
 * 
 * ---
 * 
 * VisuMZ_1_ItemsEquipsCore
 * 
 * If you have VisuStella MZ's Items & Equips Core installed, you will gain
 * access to new notetags that govern if some items, weapons, or armors can
 * appear in shops during specific times or dates. This can make way for the
 * idea of seasonal items and the like where certain holiday cookies are
 * available during the winter and cool drinks are available during summers.
 * 
 * Additionally, you can have price changes depending on seasons and times.
 * Is it almost time for the bakery to close, make the items cheaper around
 * then. What about the holiday season? Make them cheaper again. Make your
 * players feel the discount frenzy.
 * 
 * ---
 *
 * VisuMZ_1_MessageCore
 *
 * If you have VisuStella MZ's Message Core installed, you can access the new
 * text codes added through this plugin to quickly display times and dates. A
 * few of these text codes are also used to display seasons, weekdays, parts of
 * the day cycle, and more. This can be used with both Game Time and Real Time
 * vocabularies.
 *
 * ---
 * 
 * VisuMZ_1_SkillsStatesCore
 * 
 * Installing VisuStella MZ's Skills & States Core gives you access to several
 * special notetags that allow you to take advantage of the Date & Time System.
 * 
 * Some of these notetags make it so that some skills can only be used during
 * specific seasons or times of the day. For example, the skill "Moon Beam" can
 * only be used during the Night hours. Other things like "Summer Heat" can
 * only be used during the Summer months.
 * 
 * Other notetags involve changing up how much certain skills cost for MP, HP,
 * TP, and more. A skill like "Icicle Rain" might cost 200% less MP during the
 * Summer months while "Solarbeam" might cost 50% less MP during Day hours.
 * 
 * Damage can also be affected by dates and times. Skills like "Vine Whip" can
 * deal more damage during Spring months and skills like "Nocturnal Healing"
 * might yield less HP recovery during non-Night hours.
 * 
 * State turns can also benefit from these effects. A "Sleep" state might last
 * a couple of more turns during the Night hours while "Burn" wouldn't last as
 * long during Winter months.
 * 
 * ---
 * 
 * VisuMZ_1_SaveCore
 * 
 * Those using the VisuStella MZ Save Core plugin can gain access to another
 * feature when used together with this plugin. If the player loads a save file
 * then the game will record the time difference upon loading in minutes onto a
 * variable. This means that you can detect how long the player has been away
 * from the game offline and use that as a game mechanic.
 * 
 * In order for this mechanic to work, the Save Core must be implemented, save
 * the game (with this plugin installed), and then load it. If a save was made
 * before this plugin is installed, loading the old save file won't give out a
 * time difference. This is not an error as it is moreso a condition has not
 * been first met.
 * 
 * This uses Real Time and is based off the player's PC date and time settings.
 * For what it's worth, it's possible for the player to "cheat" using time
 * travel shenanigans, but just keep in mind that if a player travels backwards
 * in time, the variable's value will be negative. Use that information however
 * you want.
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
 * If you have using VisuStella MZ's Lighting Effects plugin, tints/tones will
 * not be used, but instead, overlay values will be. This is so that the
 * overlay can utilize the lighting system in play. Do not be surprised if any
 * changes to this plugin's tone-related Plugin Parameters do nothing as long
 * as Lighting Effects is enabled.
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
 * === Time-Type-Related Notetags ===
 * 
 * ---
 * 
 * <Time System: None>
 * <Time System: Game>
 * <Time System: Real>
 * 
 * - Used for: Map Notetags
 * - Insert one of these notetags into your map's notebox and it will change
 *   the time type to the desired type.
 * - If this notetag is not used, use the default Time System type declared in
 *   the Plugin Parameters.
 * 
 * ---
 * 
 * <Pause Game Time>
 * 
 * - Used for: Map Notetags
 * - While the player is on this map, prevent Game Time from progressing
 *   forward.
 * - This does NOT apply to Real Time.
 * - The Plugin Command to pause/unpause Game Time will have no effect on any
 *   map that has this notetag.
 * 
 * ---
 * 
 * === Time Tone-Related Notetags ===
 * 
 * ---
 * 
 * <No Time Tone>
 * <Time Tone>
 * 
 * - Used for: Map Notetags
 * - Insert one of these notetags into your map to decide if you want the map
 *   to use the time-based screen tone (or overlay for those using the
 *   VisuMZ_2_LightingEffects plugin).
 *   - Places where you wouldn't want time tones would be indoor areas where
 *     the screen tone/overlay wouldn't matter.
 *   - Places where you would want to use time tones would be outdoor areas
 *     where the screen tone/overlay would matter.
 * - If this notetag is not used, use the default Time Tone type declared in
 *   the Plugin Parameters.
 * 
 * ---
 * 
 * === HUD-Related Notetags ===
 * 
 * ---
 * 
 * <Show Date Time HUD>
 * <Hide Date Time HUD>
 * 
 * - Used for: Map Notetags
 * - Insert one of these notetags into your map to decide if you want the map
 *   to show the Date/Time HUD or not.
 *   - If the player has opted to hide the Date/Time HUD in the options, that
 *     will take priority over the map notetag deciding to show it.
 *   - If the game dev opted to hide the Date/Time HUD through Plugin Commands,
 *     that will take priority over the map notetag deciding to show it.
 * - If this notetag is not used, use the default setting visuals declared in
 *   the Plugin Parameters.
 * 
 * ---
 * 
 * === Battle-Related Notetags ===
 * 
 * ---
 * 
 * <Encounter Hour: x>
 * <Encounter Hours: x, x, x>
 * 
 * <Encounter Weekday: x>
 * <Encounter Weekdays: x, x, x>
 * 
 * <Encounter Date: x>
 * <Encounter Dates: x, x, x>
 * 
 * <Encounter Month: x>
 * <Encounter Months: x, x, x>
 * 
 * - Used for: Troop Page Comment Tags
 * - Requires VisuMZ_1_BattleCore!
 * - Makes this encounter only appear during the specified hours, weekdays,
 *   dates, and/or months.
 * - Replace 'x' with a number representing the hour, weekday, date, or month.
 *   - Hours start at 0.
 *   - Weekdays, dates, and months start at 1.
 *   - Insert multiple 'x' values to cover more instances.
 * - You can use multiple combinations of types together, like in order to make
 *   a troop encounter that only occurs during the last day of the year by
 *   using the Month and Date comment tags together.
 * - This will NOT work with a Base Troop. You will get an alert saying so.
 *   - Why? Because this can cause all of the troops in the game to just shut
 *     off and you don't want that.
 * 
 * ---
 * 
 * <Encounter Season: type>
 * <Encounter Seasons: type, type, type>
 * 
 * <Encounter Cycle: type>
 * <Encounter Cycle: type, type, type>
 * 
 * - Used for: Troop Page Comment Tags
 * - Requires VisuMZ_1_BattleCore!
 * - Makes this encounter only appear during the specified seasons or parts of
 *   the day cycle.
 * - Replace 'type' with a string representing the season or day cycle type.
 *   - Seasons are: "spring", "summer", "autumn", "winter" (no quotes).
 *   - Cycles are: "dawn", "day", "dusk", "night" (no quotes).
 *   - Insert multiple 'type' values to cover more instances.
 * - You can use multiple combinations of types together, like in order to make
 *   a troop encounter that only occurs during winter and at night by using the
 *   two comment tags together.
 * - This will NOT work with a Base Troop. You will get an alert saying so.
 *   - Why? Because this can cause all of the troops in the game to just shut
 *     off and you don't want that.
 * 
 * ---
 * 
 * <season Battleback1: filename>
 * <season Battleback2: filename>
 * 
 * - Used for: Map Notetags
 * - Requires VisuMZ_1_BattleCore!
 * - Changes the primary map battleback(s) to the designated 'filename' when
 *   the player has entered the map at a specific 'season'.
 *   - If the player has entered the map at a specific 'season', but time has
 *     moved forward and the season has changed, the season will be whatever it
 *     was upon the time the player has entered in order to prevent any weird
 *     and out of place transitions from happening.
 * - Replace 'season' with a string representing the season.
 *   - Seasons are: "spring", "summer", "autumn", "winter" (no quotes).
 * - Replace 'filename' with the filename of the graphic to use. Do not insert
 *   any extensions. This means the file 'Castle1.png' will be only inserted
 *   as 'Castle1' without the '.png' at the end.
 * - Insert multiples of these notetags to declare different settings for
 *   different seasons.
 * - *NOTE: This will override any specified battleback settings.
 * 
 * ---
 * 
 * <season Region x Battleback1: filename>
 * <season Region x Battleback2: filename>
 * 
 * - Used for: Map Notetags
 * - Requires VisuMZ_1_BattleCore!
 * - Changes the primary map battleback(s) to the designated 'filename' when
 *   the player has entered the map at a specific 'season' and while on a
 *   specific 'region' on the map.
 *   - If the player has entered the map at a specific 'season', but time has
 *     moved forward and the season has changed, the season will be whatever it
 *     was upon the time the player has entered in order to prevent any weird
 *     and out of place transitions from happening.
 * - Replace 'season' with a string representing the season.
 *   - Seasons are: "spring", "summer", "autumn", "winter" (no quotes).
 * - Replace 'x' with a number representing the region ID you wish to use.
 * - Replace 'filename' with the filename of the graphic to use. Do not insert
 *   any extensions. This means the file 'Castle1.png' will be only inserted
 *   as 'Castle1' without the '.png' at the end.
 * - Insert multiples of these notetags to declare different settings for
 *   different season and region combinations.
 * - *NOTE: This will override any specified battleback settings.
 * 
 * ---
 * 
 * === Tileset-Related Notetags ===
 * 
 * ---
 * 
 * <type Swap To: x>
 * 
 * - Used for: Tileset Notetags
 * - If a map loads a tileset with this notetag and it happens to be that
 *   season, swap to 'x' tileset instead and repeat the check.
 *   - The repeated check will only last for 5 checks max for each map loading.
 * - Replace 'type' with a string representing the season or cycle.
 *   - Seasons are: "spring", "summer", "autumn", "winter" (no quotes).
 *   - Cycles are: "dawn", "day", "dusk", "night" (no quotes).
 *   - Priority will be given to seasons first before cycles.
 *   - Insert multiples of this notetag to cover different cases.
 * - Each successful check will result in another check on the newer tileset
 *   for up to 5 times.
 * - This can be chained in such a way where an "Outdoor" tileset can chain
 *   into something like "Summer Outdoor", which can then be chained into
 *   "Summer Outdoor Day" or "Summer Outdoor Night" for more accuracy.
 * - Priority will be given to seasons first, then  the day cycles (dawn, day,
 *   dusk, night). This way, you can ensure that the tileset you're using
 *   matches the conditions of the season or time of day if so desired.
 * - If time changes into a new season or day cycle while on the map, there
 *   won't be any changes made immediately. Instead, the player must exit and
 *   reenter the map for the changes to be seen. This is to prevent any awkward
 *   changes and transitions that may occur otherwise.
 * 
 * ---
 * 
 * <Bypass Tileset Swap>
 * 
 * - Used for: Map Notetags
 * - If a map with this notetag loads a tileset that would normally swap out,
 *   this will prevent it from happening.
 * - This can be used for things like flashbacks where it would make sense for
 *   a specific tileset to be used as opposed to the current season's variant.
 * 
 * ---
 * 
 * === Shop-Related Notetags ===
 * 
 * ---
 * 
 * <Shop Buy Hour: x>
 * <Shop Buy Hours: x, x, x>
 * 
 * <Shop Buy Weekday: x>
 * <Shop Buy Weekdays: x, x, x>
 * 
 * <Shop Buy Date: x>
 * <Shop Buy Dates: x, x, x>
 * 
 * <Shop Buy Month: x>
 * <Shop Buy Months: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_1_ItemsEquipsCore!
 * - These shop listings can only be bought at specific hours, weekdays, dates,
 *   and/or months.
 * - Replace 'x' with a number representing the hour, weekday, date, or month.
 *   - Hours start at 0.
 *   - Weekdays, dates, and months start at 1.
 *   - Insert multiple 'x' values to cover more instances.
 * - You can use multiple combinations of types together, like in order to make
 *   a shop listing that only appears during the last day of the year by using
 *   the Month and Date notetags together.
 * 
 * ---
 * 
 * <Shop Buy Season: type>
 * <Shop Buy Seasons: type, type, type>
 * 
 * <Shop Buy Cycle: type>
 * <Shop Buy Cycle: type, type, type>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_1_ItemsEquipsCore!
 * - Makes this shop listing only appear during the specified seasons or parts
 *   of the day cycle.
 * - Replace 'type' with a string representing the season or day cycle type.
 *   - Seasons are: "spring", "summer", "autumn", "winter" (no quotes).
 *   - Cycles are: "dawn", "day", "dusk", "night" (no quotes).
 *   - Insert multiple 'type' values to cover more instances.
 * - You can use multiple combinations of types together, like in order to make
 *   a shop listing that onlappears occurs during winter and at night by using
 *   the two notetags together.
 * 
 * ---
 * 
 * <Shop Price Hour x: y%>
 * <Shop Price Hours x, x, x: y%>
 * 
 * <Shop Price Weekday x: y%>
 * <Shop Price Weekdays x, x, x: y%>
 * 
 * <Shop Price Date x: y%>
 * <Shop Price Dates x, x, x: y%>
 * 
 * <Shop Price Month x: y%>
 * <Shop Price Months x, x, x: y%>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_1_ItemsEquipsCore!
 * - These shop listings will have their (gold only) prices affected by 'y%'
 *   when it is the specific hour, weekday, date, and/or month.
 * - This ONLY affects gold prices and does not affect anything else that may
 *   be added by other plugins such as VisuMZ_2_MoreCurrencies.
 * - Replace 'x' with a number representing the hour, weekday, date, or month.
 *   - Hours start at 0.
 *   - Weekdays, dates, and months start at 1.
 *   - Insert multiple 'x' values to cover more instances.
 * - Replace 'y' with a number representing the percent change for the price.
 * - If multiples of these notetags are used together, the effects will be
 *   multiplicative.
 *   - For example, if price drops by 50% at the last hours of the work day,
 *     and the price also drops by 50% at the last day of the week, then the
 *     last hours of the last day of the week will have the price drop to 25%.
 * 
 * ---
 * 
 * <Shop Price Spring Months: y%>
 * <Shop Price Summer Months: y%>
 * <Shop Price Autumn Months: y%>
 * <Shop Price Winter Months: y%>
 * 
 * <Shop Price Weekdays Only: y%>
 * <Shop Price Weekends Only: y%>
 * 
 * <Shop Price Dawn Hours: y%>
 * <Shop Price Day Hours: y%>
 * <Shop Price Dusk Hours: y%>
 * <Shop Price Night Hours: y%>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_1_ItemsEquipsCore!
 * - These shop listings will have their (gold only) prices affected by 'y%'
 *   when it is the specific season, weekday type, or day cycle.
 * - This ONLY affects gold prices and does not affect anything else that may
 *   be added by other plugins such as VisuMZ_2_MoreCurrencies.
 * - Replace 'y' with a number representing the percent change for the price.
 * - If multiples of these notetags are used together, the effects will be
 *   multiplicative.
 *   - For example, if price drops by 50% at the dusk hours of the work day,
 *     and the price also drops by 50% at the weekend, then the dusk hours of a
 *     weekend will have the price drop to 25%.
 * 
 * ---
 * 
 * === Skill-Related Notetags ===
 * 
 * ---
 * 
 * <Require Hour x: y%>
 * <Require Hours x, x, x: y%>
 * 
 * <Require Weekday x: y%>
 * <Require Weekdays x, x, x: y%>
 * 
 * <Require Date x: y%>
 * <Require Dates x, x, x: y%>
 * 
 * <Require Month x: y%>
 * <Require Months x, x, x: y%>
 * 
 * - Used for: Skill Notetags
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - These skills can only be used during specific hours, weekdays, dates,
 *   and/or months.
 * - Replace 'x' with a number representing the hour, weekday, date, or month.
 *   - Hours start at 0.
 *   - Weekdays, dates, and months start at 1.
 *   - Insert multiple 'x' values to cover more instances.
 * - You can use multiple combinations of types together, like in order to make
 *   a skill that can only be used during the first month of the year and the
 *   first few days of the year by using those specific notetags together.
 * 
 * ---
 * 
 * <Require Season: type>
 * <Require Seasons: type, type, type>
 * 
 * <Require Cycle: type>
 * <Require Cycle: type, type, type>
 * 
 * - Used for: Skill Notetags
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - These skills can only be used during specific seasons or day cycles.
 * - Replace 'type' with a string representing the season or day cycle type.
 *   - Seasons are: "spring", "summer", "autumn", "winter" (no quotes).
 *   - Cycles are: "dawn", "day", "dusk", "night" (no quotes).
 *   - Insert multiple 'type' values to cover more instances.
 * - You can use multiple combinations of types together, like in order to make
 *   a skill that can only be used during winter nights by using those specific
 *   notetags together.
 * 
 * ---
 * 
 * <type Cost If Hour x: y%>
 * <type Cost If Hours x, x, x: y%>
 * 
 * <type Cost If Weekday x: y%>
 * <type Cost If Weekdays x, x, x: y%>
 * 
 * <type Cost If Date x: y%>
 * <type Cost If Dates x, x, x: y%>
 * 
 * <type Cost If Month x: y%>
 * <type Cost If Months x, x, x: y%>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - This skill's cost 'type' will be affected by 'y%' when it is the specific
 *   hour, weekday, date, and/or month.
 * - Replace 'type' with either 'HP', 'MP', or 'TP' to represent the cost type
 *   that you wish to affect.
 * - Replace 'x' with a number representing the hour, weekday, date, or month.
 *   - Hours start at 0.
 *   - Weekdays, dates, and months start at 1.
 *   - Insert multiple 'x' values to cover more instances.
 * - Replace 'y' with a number representing the percent change for the skill
 *   cost type.
 * - If multiples of these notetags are used together, the effects will be
 *   multiplicative.
 *   - For example, if skill cost drops by 50% at the last hours of the day,
 *     and the skill cost also drops by 50% at the last day of the week, then
 *     the last hours of the last day of the week will have the cost drop to
 *     a multiplicative 25%.
 * 
 * ---
 * 
 * <type Cost If Spring Months: y%>
 * <type Cost If Summer Months: y%>
 * <type Cost If Autumn Months: y%>
 * <type Cost If Winter Months: y%>
 * 
 * <type Cost If Weekdays Only: y%>
 * <type Cost If Weekends Only: y%>
 * 
 * <type Cost If Dawn Hours: y%>
 * <type Cost If Day Hours: y%>
 * <type Cost If Dusk Hours: y%>
 * <type Cost If Night Hours: y%>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - This skill's cost 'type' will be affected by 'y%' when it is the specific
 *   season, weekday type, or day cycle.
 * - Replace 'type' with either 'HP', 'MP', or 'TP' to represent the cost type
 *   that you wish to affect.
 * - Replace 'y' with a number representing the percent change for the skill
 *   cost type.
 * - If multiples of these notetags are used together, the effects will be
 *   multiplicative.
 *   - For example, if skill cost drops by 50% at the dusk hours of the day,
 *     and the skill cost also drops by 50% at the weekend, then the dusk hours
 *     of a weekend will have the skill cost drop to 25%.
 * 
 * ---
 * 
 * <Damage If Hour x: y%>
 * <Damage If Hours x, x, x: y%>
 * 
 * <Healing If Hour x: y%>
 * <Healing If Hours x, x, x: y%>
 * 
 * <Damage If Weekday x: y%>
 * <Damage If Weekdays x, x, x: y%>
 * 
 * <Healing If Weekday x: y%>
 * <Healing If Weekdays x, x, x: y%>
 * 
 * <Damage If Date x: y%>
 * <Damage If Dates x, x, x: y%>
 * 
 * <Healing If Date x: y%>
 * <Healing If Dates x, x, x: y%>
 * 
 * <Damage If Month x: y%>
 * <Damage If Months x, x, x: y%>
 * 
 * <Healing If Month x: y%>
 * <Healing If Months x, x, x: y%>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - This skill's damage or healing dealt will be affected by 'y%' when it is
 *   the specific hour, weekday, date, and/or month.
 * - Replace 'x' with a number representing the hour, weekday, date, or month.
 *   - Hours start at 0.
 *   - Weekdays, dates, and months start at 1.
 *   - Insert multiple 'x' values to cover more instances.
 * - Replace 'y' with a number representing the percent change for the skill's
 *   dealt damage or healing.
 * - If multiples of these notetags are used together, the effects will be
 *   multiplicative.
 *   - For example, if skill damage/healing drops by 50% at the last hours of
 *     the day, and the skill damage/healing also drops by 50% at the last day
 *     of the week, then the last hours of the last day of the week will have
 *     the damage/healing drop to a multiplicative 25%.
 * 
 * ---
 * 
 * <Damage If Spring Months: y%>
 * <Damage If Summer Months: y%>
 * <Damage If Autumn Months: y%>
 * <Damage If Winter Months: y%>
 * 
 * <Healing If Spring Months: y%>
 * <Healing If Summer Months: y%>
 * <Healing If Autumn Months: y%>
 * <Healing If Winter Months: y%>
 * 
 * <Damage If Weekdays Only: y%>
 * <Damage If Weekends Only: y%>
 * 
 * <Healing If Weekdays Only: y%>
 * <Healing If Weekends Only: y%>
 * 
 * <Damage If Dawn Hours: y%>
 * <Damage If Day Hours: y%>
 * <Damage If Dusk Hours: y%>
 * <Damage If Night Hours: y%>
 * 
 * <Healing If Dawn Hours: y%>
 * <Healing If Day Hours: y%>
 * <Healing If Dusk Hours: y%>
 * <Healing If Night Hours: y%>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - This skill's damage or healing dealt will be affected by 'y%' when it is
 *   the specific season, weekday type, or day cycle.
 * - Replace 'y' with a number representing the percent change for the skill
 *   cost type.
 * - If multiples of these notetags are used together, the effects will be
 *   multiplicative.
 *   - For example, if skill damage/healing drops by 50% at the dusk hours of
 *     the day, and the skill damage/healing also drops by 50% at the weekend,
 *     then the dusk hours of a weekend will have the damage/heal drop to 25%.
 * 
 * ---
 * 
 * ===
 * 
 * === State-Related Notetags ===
 * 
 * ---
 * 
 * <Turns If Hour x: +y>
 * <Turns If Hour x: -y>
 * 
 * <Turns If Hours x, x, x: +y>
 * <Turns If Hours x, x, x: -y>
 * 
 * <Turns If Weekday x: +y>
 * <Turns If Weekday x: -y>
 * 
 * <Turns If Weekdays x, x, x: +y>
 * <Turns If Weekdays x, x, x: -y>
 * 
 * <Turns If Date x: +y>
 * <Turns If Date x: -y>
 * 
 * <Turns If Dates x, x, x: +y>
 * <Turns If Dates x, x, x: -y>
 * 
 * <Turns If Month x: +y>
 * <Turns If Month x: -y>
 * 
 * <Turns If Months x, x, x: +y>
 * <Turns If Months x, x, x: -y>
 * 
 * - Used for: State Notetags
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - These state durations will have their turn counts affected by '+y' or '-y'
 *   when it is the specific hour, weekday, date, and/or month.
 * - Replace 'x' with a number representing the hour, weekday, date, or month.
 *   - Hours start at 0.
 *   - Weekdays, dates, and months start at 1.
 *   - Insert multiple 'x' values to cover more instances.
 * - Replace 'y' with a number representing the turn count change.
 * - If multiples of these notetags are used together, the effects will be
 *   additive.
 *   - For example, if state's turn count drops by -1 at the last hours of the
 *     day, and state's turn count also drops by -1 at the last day of the
 *     week, then the last hours of the last day of the week will have the
 *     state's turn count drop by -2.
 * 
 * ---
 * 
 * <Turns If Spring Months: +y>
 * <Turns If Spring Months: -y>
 * 
 * <Turns If Summer Months: +y>
 * <Turns If Summer Months: -y>
 * 
 * <Turns If Autumn Months: +y>
 * <Turns If Autumn Months: -y>
 * 
 * <Turns If Winter Months: +y>
 * <Turns If Winter Months: -y>
 * 
 * <Turns If Weekdays Only: +y>
 * <Turns If Weekdays Only: -y>
 * 
 * <Turns If Weekends Only: +y>
 * <Turns If Weekends Only: -y>
 * 
 * <Turns If Dawn Hours: +y>
 * <Turns If Dawn Hours: -y>
 * 
 * <Turns If Day Hours: +y>
 * <Turns If Day Hours: -y>
 * 
 * <Turns If Dusk Hours: +y>
 * <Turns If Dusk Hours: -y>
 * 
 * <Turns If Night Hours: +y>
 * <Turns If Night Hours: -y>
 * 
 * - Used for: State Notetags
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - These state durations will have their turn counts affected by '+y' or '-y'
 *   when it is the specific season, weekday type, or day cycle.
 * - Replace 'y' with a number representing the turn count change.
 * - If multiples of these notetags are used together, the effects will be
 *   additive.
 *   - For example, if state's turn count drops by -1 at the dusk hours of the
 *     day, and state's turn count also drops by -1 on weekends, then the dusk
 *     hours of a weekend day will have the state's turn count drop by -2.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. 
 *
 * === Game Time-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect (Requires VisuMZ_1_MessageCore)
 * --------------------   -----------------------------------------------------
 * 
 * <GameYear>             Returns the Game Time year's number.
 * <GameYearP>            Returns the Game Time year's number twice padded.
 * 
 * <GameMonth>            Returns the Game Time month's name.
 * <GameMonthA>           Returns the Game Time month's abbreviated name.
 * <GameMonthN>           Returns the Game Time month's number.
 * <GameMonthP>           Returns the Game Time month's number twice padded.
 * 
 * <GameSeason>           Returns the Game Time current season's name.
 * 
 * <GameDate>             Returns the Game Time date's number.
 * <GameDateP>            Returns the Game Time date's number twice padded.
 * 
 * <GameWeekday>          Returns the Game Time weekday's name.
 * <GameWeekdayA>         Returns the Game Time weekday's abbreviated name.
 * <GameWeekdayT>         Returns the Game Time weekday's type.
 * 
 * <GameHour>             Returns the Game Time hour's number.
 * <GameHourP>            Returns the Game Time hour's number twice padded.
 * <GameHourM>            Returns the Game Time military hour's number.
 * <GameHourP>            Returns the Game Time military hour's number padded.
 * 
 * <GameMinute>           Returns the Game Time minute's number.
 * <GameMinuteP>          Returns the Game Time minute's number twice padded.
 * 
 * <GameMeridiem>         Returns the Game Time meridiem (AM/PM).
 * 
 * <GameDayCycle>         Returns the Game Time day cycle.
 * 
 * ---
 *
 * === Real Time-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect (Requires VisuMZ_1_MessageCore)
 * --------------------   -----------------------------------------------------
 * 
 * <RealYear>             Returns the Real Time year's number.
 * <RealYearP>            Returns the Real Time year's number twice padded.
 * 
 * <RealMonth>            Returns the Real Time month's name.
 * <RealMonthA>           Returns the Real Time month's abbreviated name.
 * <RealMonthN>           Returns the Real Time month's number.
 * <RealMonthP>           Returns the Real Time month's number twice padded.
 * 
 * <RealSeason>           Returns the Real Time current season's name.
 * 
 * <RealDate>             Returns the Real Time date's number.
 * <RealDateP>            Returns the Real Time date's number twice padded.
 * 
 * <RealWeekday>          Returns the Real Time weekday's name.
 * <RealWeekdayA>         Returns the Real Time weekday's abbreviated name.
 * <RealWeekdayT>         Returns the Real Time weekday's type.
 * 
 * <RealHour>             Returns the Real Time hour's number.
 * <RealHourP>            Returns the Real Time hour's number twice padded.
 * <RealHourM>            Returns the Real Time military hour's number.
 * <RealHourP>            Returns the Real Time military hour's number padded.
 * 
 * <RealMinute>           Returns the Real Time minute's number.
 * <RealMinuteP>          Returns the Real Time minute's number twice padded.
 * 
 * <RealSecond>           Returns the Real Time second's number.
 * <RealSecondP>          Returns the Real Time second's number twice padded.
 * 
 * <RealMeridiem>         Returns the Real Time meridiem (AM/PM).
 * 
 * <RealDayCycle>         Returns the Real Time day cycle.
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
 * === Game Time Plugin Commands ===
 * 
 * ---
 * 
 * Game Time: Change Date To
 * - Changes the Game Time's date to a specific date.
 * - Does not affect time. Does NOT affect time.
 * 
 *   Year:
 *   - Changes Game Time's year to this.
 *   - You may use JavaScript code.
 * 
 *   Month:
 *   - Changes Game Time's month to this.
 *   - You may use JavaScript code.
 * 
 *     Allow Overflow?:
 *     - If allow overflow, excess months increase year count.
 *     - If not, excess months are clamped to what's allowed.
 * 
 *   Date:
 *   - Changes Game Time's date to this.
 *   - You may use JavaScript code. Overflow is calculated.
 * 
 *     Allow Overflow?:
 *     - If allow overflow, excess days increase month count.
 *     - If not, excess days are clamped to what's allowed.
 * 
 * ---
 * 
 * Game Time: Change Time To
 * - Changes the Game Time's time to a specific time.
 * - Does not affect time. CAN affect date and weekday.
 * 
 *   Hour:
 *   - Changes Game Time's hour to this.
 *   - You may use JavaScript code. Excess hours changes date.
 * 
 *     Allow Overflow?:
 *     - If allow overflow, excess hours increase date count.
 *     - If not, excess hours are clamped to what's allowed.
 * 
 *   Minute:
 *   - Changes Game Time's minute to this.
 *   - You may use JavaScript code. Overflow is calculated.
 * 
 *     Allow Overflow?:
 *     - If allow overflow, excess minutes increase hour count.
 *     - If not, excess minutes are clamped to what's allowed.
 * 
 * ---
 * 
 * Game Time: Pause Time Start
 * - Pauses time from going forward while in Game Time.
 * - This only pauses Game Time. Events and Timers can still move.
 * 
 * ---
 * 
 * Game Time: Pause Time End
 * - Allows Game Time to resume moving.
 * 
 * ---
 * 
 * Game Time: Record to Variable(s)
 * - Records game Time data to select variable(s).
 * - This only records the data for this moment.
 * 
 *   Calendar:
 * 
 *     Year Variable:
 *     - Select a variable to record the year.
 *     - Leave at 0 to not use.
 * 
 *     Month Variable:
 *     - Select a variable to record the month.
 *     - Leave at 0 to not use.
 * 
 *     Date Variable:
 *     - Select a variable to record the date.
 *     - Leave at 0 to not use.
 * 
 *     Full Date Variable:
 *     - Select a variable to record the full date.
 *     - Leave at 0 to not use.
 *     - Result is year + month (2 digits) + date (2 digits)
 *       - For example, Year 2, Month 4, Date 12 will yield 20412
 * 
 *   Weekday:
 * 
 *     Weekday Variable:
 *     - Select a variable to record the weekday.
 *     - Leave at 0 to not use.
 * 
 *   Time:
 * 
 *     Hour Variable:
 *     - Select a variable to record the hour.
 *     - Leave at 0 to not use.
 * 
 *     Minute Variable:
 *     - Select a variable to record the minute.
 *     - Leave at 0 to not use.
 * 
 *     Full Time Variable:
 *     - Select a variable to record the full time.
 *     - Leave at 0 to not use.
 *     - Result is hour + minutes (2 digits) + seconds (2 digits)
 *       - For example, Hour 16, Minute 8, Seconds 0 will yield 160800
 * 
 * ---
 * 
 * Game Time: Time Dilation Change
 * - Changes how fast it takes for a minute to pass in Game Time.
 * 
 *   MS Per Game Minute:
 *   - How many milliseconds will count as a game minute?
 *   - 1000 milliseconds = 1 real life second.
 * 
 * ---
 * 
 * Game Time: Time Dilation Clear
 * - Clears the time dilation and changes it back to default settings based on
 *   Plugin Parameters.
 * 
 * ---
 * 
 * === Real Time Plugin Commands ===
 * 
 * ---
 * 
 * Real Time: Record to Variable(s)
 * - Records Real Time data to select variable(s).
 * - This only records the data for this moment.
 * 
 *   Calendar:
 * 
 *     Year Variable:
 *     - Select a variable to record the year.
 *     - Leave at 0 to not use.
 * 
 *     Month Variable:
 *     - Select a variable to record the month.
 *     - Leave at 0 to not use.
 * 
 *     Date Variable:
 *     - Select a variable to record the date.
 *     - Leave at 0 to not use.
 * 
 *     Full Date Variable:
 *     - Select a variable to record the full date.
 *     - Leave at 0 to not use.
 *     - Result is year + month (2 digits) + date (2 digits)
 *       - For example, Year 2, Month 4, Date 12 will yield 20412
 * 
 *   Weekday:
 * 
 *     Weekday Variable:
 *     - Select a variable to record the weekday.
 *     - Leave at 0 to not use.
 * 
 *   Time:
 * 
 *     Hour Variable:
 *     - Select a variable to record the hour.
 *     - Leave at 0 to not use.
 * 
 *     Minute Variable:
 *     - Select a variable to record the minute.
 *     - Leave at 0 to not use.
 * 
 *     Second Variable:
 *     - Select a variable to record the second.
 *     - Leave at 0 to not use.
 * 
 *     Full Time Variable:
 *     - Select a variable to record the full time.
 *     - Leave at 0 to not use.
 *     - Result is hour + minutes (2 digits) + seconds (2 digits)
 *       - For example, Hour 16, Minute 8, Seconds 0 will yield 160800
 * 
 * ---
 * 
 * === HUD Plugin Commands ===
 * 
 * ---
 * 
 * HUD: Show/Hide
 * - Makes the Date & Time HUD visible or hidden.
 * - Does not affect maps with forced hidden notetags.
 * 
 *   Show/Hide?:
 *   - Shows/hides Date & Time HUD on the map scene.
 * 
 * ---
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * The following are Script Calls that can be used with this plugin. These are
 * made for JavaScript proficient users. We are not responsible if you use them
 * incorrectly or for unintended usage.
 *
 * ---
 * 
 * === Date and Time-Related Script Calls ===
 * 
 * ---
 *
 * TimeManager.getYear()
 * 
 * - Gets the current year.
 * - Works for both Game Time and Real Time.
 *   - The value received will depend on which mode you're using at the moment.
 * - Returns a numeric value.
 *
 * ---
 *
 * TimeManager.getMonth()
 * 
 * - Gets the current month.
 * - Works for both Game Time and Real Time.
 *   - The value received will depend on which mode you're using at the moment.
 * - Returns a numeric value.
 *   - The first month starts at 1.
 *
 * ---
 *
 * TimeManager.getDate()
 * 
 * - Gets the current date.
 * - Works for both Game Time and Real Time.
 *   - The value received will depend on which mode you're using at the moment.
 * - Returns a numeric value.
 *   - The first date starts at 1.
 *
 * ---
 *
 * TimeManager.getWeekday()
 * 
 * - Gets the current weekday.
 * - Works for both Game Time and Real Time.
 *   - The value received will depend on which mode you're using at the moment.
 * - Returns a numeric value.
 *   - The first weekday starts at 1.
 *
 * ---
 *
 * TimeManager.getHour()
 * 
 * - Gets the current hour.
 * - Works for both Game Time and Real Time.
 *   - The value received will depend on which mode you're using at the moment.
 * - Returns a numeric value.
 *   - The first hour starts at 0.
 *
 * ---
 *
 * TimeManager.getMinute()
 * 
 * TimeManager.getMinuteRaw()
 * 
 * - Gets the current minute.
 * - Works for both Game Time and Real Time.
 *   - The value received will depend on which mode you're using at the moment.
 *   - If you are using Game Time, you may be using the Plugin Parameter called
 *     "Round Minutes to 10s" where it only shows the minute count for every 10
 *     minutes. The Raw version will return the actual minute value while the
 *     non-raw version will show the selected version if enabled.
 * - Returns a numeric value.
 *   - The first minute starts at 0.
 *
 * ---
 *
 * TimeManager.getSecond()
 * 
 * - Gets the current minute.
 * - Only works for Real Time.
 * - Game Time does not use seconds and if you use this, you will always get 0.
 * - Returns a numeric value.
 *   - The first second starts at 0.
 *
 * ---
 *
 * TimeManager.checkSeason()
 * 
 * - Checks the current season based on what month it currently is.
 * - Works for both Game Time and Real Time.
 *   - The value received will depend on which mode you're using at the moment.
 * - Returns a numeric value.
 *   - 1 means Spring.
 *   - 2 means Summer.
 *   - 3 means Autumn.
 *   - 4 means Winter.
 *
 * ---
 *
 * TimeManager.checkWeekdayType()
 * 
 * - Checks the current weekday type based on what weekday it currently is.
 * - Works for both Game Time and Real Time.
 *   - The value received will depend on which mode you're using at the moment.
 * - Returns a numeric value.
 *   - 1 means Weekday.
 *   - 2 means Weekend.
 *
 * ---
 *
 * TimeManager.checkDayCycle()
 * 
 * - Checks the current day cycle based on what hour it currently is.
 * - Works for both Game Time and Real Time.
 *   - The value received will depend on which mode you're using at the moment.
 * - Returns a numeric value.
 *   - 1 means Dawn.
 *   - 2 means Day.
 *   - 3 means Dusk.
 *   - 4 means Night.
 *
 * ---
 *
 * TimeManager.forceRefreshHUD()
 * 
 * - For the moment you need force the HUD to refresh.
 * - Does not happen if you're not on the map and/or not using the HUD.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Default Settings
 * ============================================================================
 *
 * These are the default settings for the plugin that determines time type
 * and time-based screen tones/overlays.
 *
 * ---
 *
 * Default Settings
 * 
 *   Default Map Time Type:
 *   - What do you want to be the default time system?
 *   - Change per map with <Time System: x> notetag.
 *     - None - Time doesn't pass on most maps
 *     - Game - Time passes based on game rules
 *     - Real - Time passes based on real life
 * 
 *   Default Map Time Tone:
 *   - Do maps have time-based screen tones/tints?
 *   - Can change with <No Time Tone> or <Time Tone> notetags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Game Time General Settings
 * ============================================================================
 *
 * Here are the general settings regarding Game Time.
 *
 * ---
 * 
 * Starting Data:
 * 
 *   Start Year:
 *   - What is the number of the starting year?
 * 
 *   Start Month:
 *   - What is the number of the starting month?
 * 
 *   Start Date:
 *   - What is the number of the starting date?
 * 
 *   Start Weekday:
 *   - What is the number of the starting weekday?
 * 
 *   Start Hour:
 *   - What is the number of the starting hour?
 * 
 *   Start Minute:
 *   - What is the number of the starting minute?
 * 
 * ---
 * 
 * Game Time Mechanics:
 * 
 *   MS Per Game Minute:
 *   - How many milliseconds will count as a game minute?
 *   - 1000 milliseconds = 1 real life second.
 * 
 *   Minutes in an Hour:
 *   - How many minutes are there in an hour?
 *   - This is for Game Time only.
 * 
 *   Round Minutes to 10s:
 *   - Rounds the displayed minutes to 10's so they only visually update every
 *     10 Game Time minutes.
 * 
 *   Hours in a Day:
 *   - How many hours are there in a day? This is for Game Time only.
 * 
 *   JS: Check Leap Year:
 *   - Code used to determine how a year is considered a leap year.
 * 
 * ---
 * 
 * Pause Conditions:
 * 
 *   If Event Running:
 *   - Pauses Game Time update if an event is running?
 *   - Doesn't apply to Parallels. Applies to Autorun.
 * 
 *   If Forced Player Move:
 *   - Pauses Game Time update if player movement is forced?
 *   - Doesn't apply to Parallels. Applies to Autorun.
 * 
 *   If Gather Followers:
 *   - Pauses Game Time update if followers are gathering?
 *   - Doesn't apply to Parallels. Applies to Autorun.
 * 
 *   If Vehicle Entry/Exit:
 *   - Pauses Game Time update if followers are gathering?
 *   - Doesn't apply to Parallels. Applies to Autorun.
 * 
 * ---
 * 
 * Month Structure:
 * 
 *   List of Months:
 *   - Here, adjust the in-game months for Game Time.
 *   - Months will occur in the order they're in.
 * 
 *     Name:
 *     - What is the name of the month?
 * 
 *     Abbreviation:
 *     - What is the abbreviation of this month?
 * 
 *     Total Days:
 *     - How many days are there in this month?
 * 
 *       Leap Month?:
 *       - Is this month a leap month?
 *       - It'll get an extra day each leap year.
 * 
 *     Season:
 *     - What season is this month a part of?
 *       - Spring
 *       - Summer
 *       - Autumn
 *       - Winter
 * 

 * 
 * ---
 * 
 * Weekday Structure:
 * 
 *   List of Weekdays:
 *   - Here, adjust the in-game weekdays for Game Time.
 *   - Weekdays will occur in the order they're in.
 *
 *     Name:
 *     - What is the name of this weekday?
 * 
 *     Abbreviation:
 *     - What is the abbreviation of this weekday?
 * 
 *     Weekday Type:
 *     - Is this day part of the weekdays or weekend?
 *       - Weekday
 *       - Weekend
 * 
 * ---
 * 
 * Day Structure:
 * 
 *   Dawn Hours:
 *   - What hours are considered "Dawn" hours?
 *   - This is for Game Time only.
 * 
 *   Day Hours:
 *   - What hours are considered "Day" hours?
 *   - This is for Game Time only.
 * 
 *   Dusk Hours:
 *   - What hours are considered "Dusk" hours?
 *   - This is for Game Time only.
 * 
 *   Night Hours:
 *   - What hours are considered "Night" hours?
 *   - This is for Game Time only.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Game Time Tone Settings
 * ============================================================================
 * 
 * These settings determine the screen tones used for Game Time and will occur
 * the order the hours appear.
 *
 * ---
 *
 * Tone Settings
 * 
 *   Tone:
 *   - What tone/tint is used for various Game Time hours?
 *   - Format: [Red, Green, Blue, Gray]. Starts at 0:00.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Game Time Overlay Settings
 * ============================================================================
 * 
 * These settings determine the screen tones used for Game Time and will occur
 * the order the hours appear.
 * 
 * Requires VisuMZ_2_LightingEffects!
 *
 * ---
 *
 * Overlay Settings
 * 
 *   Overlay:
 *   - What overlay is used for this hour? Starts at 0:00.
 *   - Format: #rrggbb.
 *   - Requires VisuMZ_2_LightingEffects!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Game Time Variables & Switches
 * ============================================================================
 *
 * Adjust the variables and switches that record data here. These will be
 * automatically updated upon time changes.
 *
 * ---
 *
 * Calendar:
 * 
 *   Year Variable:
 *   - Select a variable to record the year.
 *   - Leave at 0 to not use.
 * 
 *   Month Variable:
 *   - Select a variable to record the month.
 *   - Leave at 0 to not use.
 * 
 *   Date Variable:
 *   - Select a variable to record the date.
 *   - Leave at 0 to not use.
 * 
 *   Full Date Variable:
 *   - Select a variable to record the full date.
 *   - Leave at 0 to not use.
 *   - Result is year + month (2 digits) + date (2 digits)
 *     - For example, Year 2, Month 4, Date 12 will yield 20412
 * 
 * ---
 * 
 * Weekday:
 * 
 *   Weekday Variable:
 *   - Select a variable to record the weekday.
 *   - Leave at 0 to not use.
 * 
 * ---
 * 
 * Time:
 * 
 *   Hour Variable:
 *   - Select a variable to record the hour.
 *   - Leave at 0 to not use.
 * 
 *   Minute Variable:
 *   - Select a variable to record the minute.
 *   - Leave at 0 to not use.
 * 
 *   Second Variable:
 *   - Select a variable to record the second.
 *   - Leave at 0 to not use.
 *   - Not available for Game Time.
 *
 *   Full Time Variable:
 *   - Select a variable to record the full time.
 *   - Leave at 0 to not use.
 *   - Result is hour + minutes (2 digits) + seconds (2 digits)
 *     - For example, Hour 16, Minute 8, Seconds 0 will yield 160800
 * 
 * ---
 * 
 * Seasons:
 * 
 *   Spring Switch:
 *   - Turns on when season is a "Spring" month.
 *   - Leave at 0 to not use.
 * 
 *   Summer Switch:
 *   - Turns on when season is a "Summer" month.
 *   - Leave at 0 to not use.
 * 
 *   Autumn Switch:
 *   - Turns on when season is a "Autumn" month.
 *   - Leave at 0 to not use.
 * 
 *   Winter Switch:
 *   - Turns on when season is a "Winter" month.
 *   - Leave at 0 to not use.
 * 
 * ---
 * 
 * Days:
 * 
 *   Weekday Switch:
 *   - Turns on when day is "Weekday". Leave at 0 to not use.
 * 
 *   Weekend Switch:
 *   - Turns on when day is "Weekend". Leave at 0 to not use.
 * 
 * ---
 * 
 * Hours:
 * 
 *   Dawn Switch:
 *   - Turns on when time is "Dawn" hours. Leave at 0 to not use.
 * 
 *   Day Switch:
 *   - Turns on when time is "Day" hours. Leave at 0 to not use.
 * 
 *   Dusk Switch:
 *   - Turns on when time is "Dusk" hours. Leave at 0 to not use.
 * 
 *   Night Switch:
 *   - Turns on when time is "Night" hours. Leave at 0 to not use.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Game Time Vocabulary Settings
 * ============================================================================
 *
 * Here are the vocabulary-related terms involving Game Time.
 *
 * ---
 * 
 * Seasons:
 * 
 *   Spring:
 *   - How "Spring" is displayed.
 * 
 *   Summer:
 *   - How "Summer" is displayed.
 * 
 *   Autumn:
 *   - How "Autumn" is displayed.
 * 
 *   Winter:
 *   - How "Winter" is displayed.
 * 
 * ---
 * 
 * Weekday Type:
 * 
 *   Weekday:
 *   - How "Weekday" is displayed.
 * 
 *   Weekend:
 *   - how "Weekend" is displayed.
 * 
 * ---
 * 
 * Time-Related:
 * 
 *   Meridiem:
 * 
 *     Ante Meridiem:
 *     - How "Ante Meridiem" is displayed.
 * 
 *     Post Meridiem:
 *     - How "Post Meridiem" is displayed.
 * 
 * ---
 * 
 * Day Cycle:
 * 
 *   Dawn:
 *   - How "Dawn" is displayed.
 * 
 *   Day:
 *   - How "Day" is displayed.
 * 
 *   Dusk:
 *   - How "Dusk" is displayed.
 * 
 *   Night:
 *   - How "Night" is displayed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Real Time General Settings
 * ============================================================================
 *
 * Here are the general settings regarding Real Time.
 *
 * ---
 * 
 * Seasonal Months:
 * 
 *   Spring Months:
 *   - Which Real Time months are Spring months for this game?
 * 
 *   Summer Months:
 *   - Which Real Time months are Summer months for this game?
 * 
 *   Autumn Months:
 *   - Which Real Time months are Autumn months for this game?
 * 
 *   Winter Months:
 *   - Which Real Time months are Winter months for this game?
 * 
 * ---
 * 
 * Week Structure:
 * 
 *   Weekdays:
 *   - Which Real Time weekdays are considered "Weekdays"?
 * 
 *   Weekends:
 *   - Which Real Time weekdays are considered "Weekends"?
 * 
 * ---
 * 
 * Day Structure:
 * 
 *   Dawn Hours:
 *   - What hours are considered "Dawn" hours?
 *   - Use military time.
 * 
 *   Day Hours:
 *   - What hours are considered "Day" hours?
 *   - Use military time.
 * 
 *   Dusk Hours:
 *   - What hours are considered "Dusk" hours?
 *   - Use military time.
 * 
 *   Night Hours:
 *   - What hours are considered "Night" hours?
 *   - Use military time.
 * 
 * ---
 * 
 * VisuMZ_1_SaveCore:
 * 
 *   Difference Variable:
 *   - Select a variable that records the time difference from the last save
 *     game and the current load game in minutes.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Real Time Tones & Overlay Settings
 * ============================================================================
 *
 * Adjust the tones and overlay settings to change what color the screen will
 * appear based on the time of day.
 *
 * ---
 * 
 * Screen Tones/Tints
 * 
 *   00:00 / 12 AM to 23:00 / 11 PM:
 *   - What tone/tint is used for this hour?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * Screen Overlay
 * 
 *   00:00 / 12 AM to 23:00 / 11 PM:
 *   - What overlay is used for this hour?
 *   - Format: #rrggbb.
 *   - Requires VisuMZ_2_LightingEffects!
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Real Time Variables & Switches
 * ============================================================================
 *
 * Adjust the variables and switches that record data here. These will be
 * automatically updated upon time changes.
 *
 * ---
 *
 * Calendar:
 * 
 *   Year Variable:
 *   - Select a variable to record the year.
 *   - Leave at 0 to not use.
 * 
 *   Month Variable:
 *   - Select a variable to record the month.
 *   - Leave at 0 to not use.
 * 
 *   Date Variable:
 *   - Select a variable to record the date.
 *   - Leave at 0 to not use.
 * 
 *   Full Date Variable:
 *   - Select a variable to record the full date.
 *   - Leave at 0 to not use.
 *   - Result is year + month (2 digits) + date (2 digits)
 *     - For example, Year 2, Month 4, Date 12 will yield 20412
 * 
 * ---
 * 
 * Weekday:
 * 
 *   Weekday Variable:
 *   - Select a variable to record the weekday.
 *   - Leave at 0 to not use.
 * 
 * ---
 * 
 * Time:
 * 
 *   Hour Variable:
 *   - Select a variable to record the hour.
 *   - Leave at 0 to not use.
 * 
 *   Minute Variable:
 *   - Select a variable to record the minute.
 *   - Leave at 0 to not use.
 * 
 *   Second Variable:
 *   - Select a variable to record the second.
 *   - Leave at 0 to not use.
 *   - Not available for Game Time.
 *
 *   Full Time Variable:
 *   - Select a variable to record the full time.
 *   - Leave at 0 to not use.
 *   - Result is hour + minutes (2 digits) + seconds (2 digits)
 *     - For example, Hour 16, Minute 8, Seconds 0 will yield 160800
 * 
 * ---
 * 
 * Seasons:
 * 
 *   Spring Switch:
 *   - Turns on when season is a "Spring" month.
 *   - Leave at 0 to not use.
 * 
 *   Summer Switch:
 *   - Turns on when season is a "Summer" month.
 *   - Leave at 0 to not use.
 * 
 *   Autumn Switch:
 *   - Turns on when season is a "Autumn" month.
 *   - Leave at 0 to not use.
 * 
 *   Winter Switch:
 *   - Turns on when season is a "Winter" month.
 *   - Leave at 0 to not use.
 * 
 * ---
 * 
 * Days:
 * 
 *   Weekday Switch:
 *   - Turns on when day is "Weekday". Leave at 0 to not use.
 * 
 *   Weekend Switch:
 *   - Turns on when day is "Weekend". Leave at 0 to not use.
 * 
 * ---
 * 
 * Hours:
 * 
 *   Dawn Switch:
 *   - Turns on when time is "Dawn" hours. Leave at 0 to not use.
 * 
 *   Day Switch:
 *   - Turns on when time is "Day" hours. Leave at 0 to not use.
 * 
 *   Dusk Switch:
 *   - Turns on when time is "Dusk" hours. Leave at 0 to not use.
 * 
 *   Night Switch:
 *   - Turns on when time is "Night" hours. Leave at 0 to not use.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Real Time Vocabulary Settings
 * ============================================================================
 *
 * Here are the vocabulary-related terms involving Real Time.
 *
 * ---
 * 
 * Month Names:
 * 
 *   Full Names:
 * 
 *     Month 1 to 12:
 *     - Name of this month.
 * 
 *   Abbreviations:
 * 
 *     Month 1 to 12:
 *     - Abbreviation of this month.
 * 
 * ---
 * 
 * Seasons:
 * 
 *   Spring:
 *   Summer:
 *   Autumn:
 *   Winter:
 *   - How this season is displayed.
 * 
 * ---
 * 
 * Weekday Names:
 * 
 *   Full Names:
 * 
 *     Weekday 1 to Weekday 7:
 *     - Name of this weekday.
 * 
 *   Abbreviation:
 * 
 *     Weekday 1 to Weekday 7:
 *     - Abbreviation of this weekday.
 * 
 *   Weekday Type:
 * 
 *     Weekday:
 *     Weekend:
 *     - How "Weekday/end" is displayed.
 * 
 * ---
 * 
 * Time-Related:
 * 
 *   Meridiem:
 * 
 *     Ante Meridiem:
 *     Post Meridiem:
 *     - How "Ante/Post Meridiem" is displayed.
 * 
 *   Day Cycle:
 *  
 *     Dawn:
 *     Day:
 *     Dusk:
 *     Night:
 *     - How "Dawn", "Day", "Dusk", "Night" is displayed.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Date/Time HUD Sprites
 * ============================================================================
 *
 * These settings let you adjust the HUD sprites displayed for this plugin.
 *
 * ---
 * 
 * General:
 * 
 *   Enabled?:
 *   - Enables usage of the Date/Time HUD.
 * 
 *   Show by Default:
 *   - Sets up default visibility of the Date/Time HUD.
 *   - Individual maps can be adjusted by notetags.
 * 
 *   Opacity Speed:
 *   - How fast does fade in/out work?
 *   - Lower is slower. Higher is faster.
 * 
 * ---
 * 
 * Position:
 * 
 *   Position X:
 *   - How much to position the HUD's X by.
 *   - Negative: left. Positive: right.
 * 
 *   Position Y:
 *   - How much to position the HUD's Y by.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Season Sprite:
 * 
 *   Enabled?:
 *   - Enables usage of this sprite.
 * 
 *   Opacity:
 *   - What is the default opacity for this sprite?
 *   - Use a value between 0 and 255.
 * 
 *   Anchor:
 * 
 *     Anchor X:
 *     - Anchor X value for this sprite.
 *     - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *     Anchor Y:
 *     - Anchor Y value for this sprite.
 *     - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Offset:
 * 
 *     Offset X:
 *     - How much to offset this sprite's X by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset this sprite's Y by.
 *     - Negative: up. Positive: down.
 * 
 *   Scale:
 * 
 *     Scale X:
 *     - What is the scale used for this sprite icon's X?
 *     - 0.0 - 0%; 0.5 - 50%; 1.0 - 100%; 1.5 - 150%; 2.0 - 200%
 * 
 *     Scale Y:
 *     - What is the scale used for this sprite icon's Y?
 *     - 0.0 - 0%; 0.5 - 50%; 1.0 - 100%; 1.5 - 150%; 2.0 - 200%
 * 
 *   Icons:
 * 
 *     Spring Icon:
 *     Summer Icon:
 *     Autumn Icon:
 *     Winter Icon:
 *     - What icon is used for this months?
 *     - Ignore if there is an image equivalent.
 * 
 *   Images:
 * 
 *     Spring Image:
 *     Summer Image:
 *     Autumn Image:
 *     Winter Image:
 *     - What image is used for spring months?
 *     - Ignores any icon equivalents.
 * 
 * ---
 * 
 * DayCycle Sprite:
 * 
 *   Enabled?:
 *   - Enables usage of this sprite.
 * 
 *   Opacity:
 *   - What is the default opacity for this sprite?
 *   - Use a value between 0 and 255.
 * 
 *   Anchor:
 * 
 *     Anchor X:
 *     - Anchor X value for this sprite.
 *     - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *     Anchor Y:
 *     - Anchor Y value for this sprite.
 *     - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Offset:
 * 
 *     Offset X:
 *     - How much to offset this sprite's X by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset this sprite's Y by.
 *     - Negative: up. Positive: down.
 * 
 *   Scale:
 * 
 *     Scale X:
 *     - What is the scale used for this sprite icon's X?
 *     - 0.0 - 0%; 0.5 - 50%; 1.0 - 100%; 1.5 - 150%; 2.0 - 200%
 * 
 *     Scale Y:
 *     - What is the scale used for this sprite icon's Y?
 *     - 0.0 - 0%; 0.5 - 50%; 1.0 - 100%; 1.5 - 150%; 2.0 - 200%
 * 
 *   Icons:
 * 
 *     Dawn Icon:
 *     Day Icon:
 *     Dusk Icon:
 *     Night Icon:
 *     - What icon is used for these day cycle hours?
 *     - Ignore if there is an image equivalent.
 * 
 *   Images:
 * 
 *     Dawn Image:
 *     Day Image:
 *     Dusk Image:
 *     Night Image:
 *     - What image is used for these day cycle hours?
 *     - Ignores any icon equivalents.
 * 
 * ---
 * 
 * Weekday Type Sprite:
 * 
 *   Enabled?:
 *   - Enables usage of this sprite.
 * 
 *   Opacity:
 *   - What is the default opacity for this sprite?
 *   - Use a value between 0 and 255.
 * 
 *   Anchor:
 * 
 *     Anchor X:
 *     - Anchor X value for this sprite.
 *     - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *     Anchor Y:
 *     - Anchor Y value for this sprite.
 *     - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Offset:
 * 
 *     Offset X:
 *     - How much to offset this sprite's X by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset this sprite's Y by.
 *     - Negative: up. Positive: down.
 * 
 *   Scale:
 * 
 *     Scale X:
 *     - What is the scale used for this sprite icon's X?
 *     - 0.0 - 0%; 0.5 - 50%; 1.0 - 100%; 1.5 - 150%; 2.0 - 200%
 * 
 *     Scale Y:
 *     - What is the scale used for this sprite icon's Y?
 *     - 0.0 - 0%; 0.5 - 50%; 1.0 - 100%; 1.5 - 150%; 2.0 - 200%
 * 
 *   Icons:
 * 
 *     Weekday Icon:
 *     Weekend Icon:
 *     - What icon is used for weekdays?
 *     - Ignore if there is an image equivalent.
 * 
 *   Images:
 * 
 *     Weekday Image:
 *     Weekend Image:
 *     - What image is used for weekdays?
 *     - Ignores any icon equivalents.
 * 
 * ---
 * 
 * Year Sprite:
 * 
 *   Enabled?:
 *   - Enables usage of this sprite.
 * 
 *   Angle:
 *   - What is the angle used for this sprite?
 *   - Value is written in degrees.
 * 
 *   Year Format:
 *   - How is the year written when it's less than 4 digits?
 *   - %1 - Current Year
 * 
 *   Size:
 * 
 *     Width:
 *     - What is the width of this sprite in pixels?
 * 
 *     Height:
 *     - What is the height of this sprite in pixels?
 * 
 *   Anchor:
 * 
 *     Anchor X:
 *     - Anchor X value for this sprite.
 *     - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *     Anchor Y:
 *     - Anchor Y value for this sprite.
 *     - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Offset:
 * 
 *     Offset X:
 *     - How much to offset this sprite's X by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset this sprite's Y by.
 *     - Negative: up. Positive: down.
 * 
 *   JS: Draw Text:
 *   - Code used to draw the text for this sprite.
 * 
 * ---
 * 
 * Month Sprite:
 * 
 *   Enabled?:
 *   - Enables usage of this sprite.
 * 
 *   Angle:
 *   - What is the angle used for this sprite?
 *   - Value is written in degrees.
 * 
 *   Size:
 * 
 *     Width:
 *     - What is the width of this sprite in pixels?
 * 
 *     Height:
 *     - What is the height of this sprite in pixels?
 * 
 *   Anchor:
 * 
 *     Anchor X:
 *     - Anchor X value for this sprite.
 *     - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *     Anchor Y:
 *     - Anchor Y value for this sprite.
 *     - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Offset:
 * 
 *     Offset X:
 *     - How much to offset this sprite's X by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset this sprite's Y by.
 *     - Negative: up. Positive: down.
 * 
 *   JS: Draw Text:
 *   - Code used to draw the text for this sprite.
 * 
 * ---
 * 
 * Date Sprite:
 * 
 *   Enabled?:
 *   - Enables usage of this sprite.
 * 
 *   Angle:
 *   - What is the angle used for this sprite?
 *   - Value is written in degrees.
 * 
 *   Size:
 * 
 *     Width:
 *     - What is the width of this sprite in pixels?
 * 
 *     Height:
 *     - What is the height of this sprite in pixels?
 * 
 *   Anchor:
 * 
 *     Anchor X:
 *     - Anchor X value for this sprite.
 *     - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *     Anchor Y:
 *     - Anchor Y value for this sprite.
 *     - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Offset:
 * 
 *     Offset X:
 *     - How much to offset this sprite's X by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset this sprite's Y by.
 *     - Negative: up. Positive: down.
 * 
 *   JS: Draw Text:
 *   - Code used to draw the text for this sprite.
 * 
 * ---
 * 
 * Weekday Sprite:
 * 
 *   Enabled?:
 *   - Enables usage of this sprite.
 * 
 *   Angle:
 *   - What is the angle used for this sprite?
 *   - Value is written in degrees.
 * 
 *   Size:
 * 
 *     Width:
 *     - What is the width of this sprite in pixels?
 * 
 *     Height:
 *     - What is the height of this sprite in pixels?
 * 
 *   Anchor:
 * 
 *     Anchor X:
 *     - Anchor X value for this sprite.
 *     - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *     Anchor Y:
 *     - Anchor Y value for this sprite.
 *     - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Offset:
 * 
 *     Offset X:
 *     - How much to offset this sprite's X by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset this sprite's Y by.
 *     - Negative: up. Positive: down.
 * 
 *   JS: Draw Text:
 *   - Code used to draw the text for this sprite.
 * 
 * ---
 * 
 * Time Sprite:
 * 
 *   Enabled?:
 *   - Enables usage of this sprite.
 * 
 *   Angle:
 *   - What is the angle used for this sprite?
 *   - Value is written in degrees.
 * 
 *   Size:
 * 
 *     Width:
 *     - What is the width of this sprite in pixels?
 * 
 *     Height:
 *     - What is the height of this sprite in pixels?
 * 
 *   Anchor:
 * 
 *     Anchor X:
 *     - Anchor X value for this sprite.
 *     - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *     Anchor Y:
 *     - Anchor Y value for this sprite.
 *     - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Offset:
 * 
 *     Offset X:
 *     - How much to offset this sprite's X by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset this sprite's Y by.
 *     - Negative: up. Positive: down.
 * 
 *   JS: Draw Text:
 *   - Code used to draw the text for this sprite.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Date/Time HUD Options Settings
 * ============================================================================
 *
 * Options settings for the Date & Time System.
 *
 * ---
 * 
 * Options:
 * 
 *   Add Option?:
 *   - Add the 'Date Time HUD' option to the Options menu?
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
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.03: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where the Winter switch would turn on during summer.
 *    Fix made by Irina.
 * 
 * Version 1.02: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where "Show by Default" plugin parameter did not register.
 *    Fix made by Olivia.
 * * Feature Update!
 * ** Default option state for the Date & Time HUD will be true for those not
 *    using the Options Core. Update by Olivia.
 * 
 * Version 1.01: February 15, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash when using Real Time and skip title.
 *    Fix made by Irina.
 * ** Fixed a bug where seasonal tilesets could cause a crash. Fix by Irina.
 * 
 * Version 1.00 Official Release Date: February 19, 2024
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
 * @command GameTime_ChangeDateTo
 * @text Game Time: Change Date To
 * @desc Changes the Game Time's date to a specific date.
 * Does not affect time. Does NOT affect time.
 *
 * @arg Year:eval
 * @text Year
 * @desc Changes Game Time's year to this.
 * You may use JavaScript code.
 * @default TimeManager.getYear() + 0
 *
 * @arg Month:eval
 * @text Month
 * @desc Changes Game Time's month to this.
 * You may use JavaScript code.
 * @default TimeManager.getMonth() + 0
 *
 * @arg MonthOverflow:eval
 * @text Allow Overflow?
 * @parent Month:eval
 * @type boolean
 * @on Overflow
 * @off Clamp
 * @desc If allow overflow, excess months increase year count.
 * If not, excess months are clamped to what's allowed.
 * @default true
 *
 * @arg Date:eval
 * @text Date
 * @desc Changes Game Time's date to this.
 * You may use JavaScript code. Overflow is calculated.
 * @default TimeManager.getDate() + 0
 *
 * @arg DateOverflow:eval
 * @text Allow Overflow?
 * @parent Date:eval
 * @type boolean
 * @on Overflow
 * @off Clamp
 * @desc If allow overflow, excess days increase month count.
 * If not, excess days are clamped to what's allowed.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GameTime_ChangeTimeTo
 * @text Game Time: Change Time To
 * @desc Changes the Game Time's time to a specific time.
 * Does not affect time. CAN affect date and weekday.
 *
 * @arg Hour:eval
 * @text Hour
 * @desc Changes Game Time's hour to this.
 * You may use JavaScript code. Excess hours changes date.
 * @default TimeManager.getHour() + 0
 *
 * @arg HourOverflow:eval
 * @text Allow Overflow?
 * @parent Hour:eval
 * @type boolean
 * @on Overflow
 * @off Clamp
 * @desc If allow overflow, excess hours increase date count.
 * If not, excess hours are clamped to what's allowed.
 * @default true
 *
 * @arg Minute:eval
 * @text Minute
 * @desc Changes Game Time's minute to this.
 * You may use JavaScript code. Overflow is calculated.
 * @default TimeManager.getMinuteRaw() + 0
 *
 * @arg MinuteOverflow:eval
 * @text Allow Overflow?
 * @parent Minute:eval
 * @type boolean
 * @on Overflow
 * @off Clamp
 * @desc If allow overflow, excess minutes increase hour count.
 * If not, excess minutes are clamped to what's allowed.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GameTime_PauseTimeStart
 * @text Game Time: Pause Time Start
 * @desc Pauses time from going forward while in Game Time.
 * This only pauses Game Time. Events and Timers can still move.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GameTime_PauseTimeEnd
 * @text Game Time: Pause Time End
 * @desc Allows Game Time to resume moving.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GameTime_RecordToVariables
 * @text Game Time: Record to Variable(s)
 * @desc Records game Time data to select variable(s).
 * This only records the data for this moment.
 * 
 * @arg VarCalendarType
 * @text Calendar
 * @parent Variables
 *
 * @arg VarYear:num
 * @text Year Variable
 * @parent VarCalendarType
 * @type variable
 * @desc Select a variable to record the year.
 * Leave at 0 to not use.
 * @default 0
 *
 * @arg VarMonth:num
 * @text Month Variable
 * @parent VarCalendarType
 * @type variable
 * @desc Select a variable to record the month.
 * Leave at 0 to not use.
 * @default 0
 *
 * @arg VarDate:num
 * @text Date Variable
 * @parent VarCalendarType
 * @type variable
 * @desc Select a variable to record the date.
 * Leave at 0 to not use.
 * @default 0
 *
 * @arg VarFullDate:num
 * @text Full Date Variable
 * @parent VarCalendarType
 * @type variable
 * @desc Select a variable to record the full date.
 * Leave at 0 to not use.
 * @default 0
 * 
 * @arg VarDayType
 * @text Weekday
 * @parent Variables
 *
 * @arg VarWeekday:num
 * @text Weekday Variable
 * @parent VarDayType
 * @type variable
 * @desc Select a variable to record the weekday.
 * Leave at 0 to not use.
 * @default 0
 * 
 * @arg VarTimeType
 * @text Time
 * @parent Variables
 *
 * @arg VarHour:num
 * @text Hour Variable
 * @parent VarTimeType
 * @type variable
 * @desc Select a variable to record the hour.
 * Leave at 0 to not use.
 * @default 0
 *
 * @arg VarMinute:num
 * @text Minute Variable
 * @parent VarTimeType
 * @type variable
 * @desc Select a variable to record the minute.
 * Leave at 0 to not use.
 * @default 0
 *
 * @arg VarFullTime:num
 * @text Full Time Variable
 * @parent VarTimeType
 * @type variable
 * @desc Select a variable to record the full time.
 * Leave at 0 to not use.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GameTime_TimeDilation
 * @text Game Time: Time Dilation Change
 * @desc Changes how fast it takes for a minute to pass in Game Time.
 *
 * @arg msPerMinute:eval
 * @text MS Per Game Minute
 * @type number
 * @min 20
 * @desc How many milliseconds will count as a game minute?
 * 1000 milliseconds = 1 real life second.
 * @default 1000
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GameTime_ClearDilation
 * @text Game Time: Time Dilation Clear
 * @desc Clears the time dilation and changes it back to default
 * settings based on Plugin Parameters.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Real
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RealTime_RecordToVariables
 * @text Real Time: Record to Variable(s)
 * @desc Records Real Time data to select variable(s).
 * This only records the data for this moment.
 * 
 * @arg VarCalendarType
 * @text Calendar
 * @parent Variables
 *
 * @arg VarYear:num
 * @text Year Variable
 * @parent VarCalendarType
 * @type variable
 * @desc Select a variable to record the year.
 * Leave at 0 to not use.
 * @default 0
 *
 * @arg VarMonth:num
 * @text Month Variable
 * @parent VarCalendarType
 * @type variable
 * @desc Select a variable to record the month.
 * Leave at 0 to not use.
 * @default 0
 *
 * @arg VarDate:num
 * @text Date Variable
 * @parent VarCalendarType
 * @type variable
 * @desc Select a variable to record the date.
 * Leave at 0 to not use.
 * @default 0
 *
 * @arg VarFullDate:num
 * @text Full Date Variable
 * @parent VarCalendarType
 * @type variable
 * @desc Select a variable to record the full date.
 * Leave at 0 to not use.
 * @default 0
 * 
 * @arg VarDayType
 * @text Weekday
 * @parent Variables
 *
 * @arg VarWeekday:num
 * @text Weekday Variable
 * @parent VarDayType
 * @type variable
 * @desc Select a variable to record the weekday.
 * Leave at 0 to not use.
 * @default 0
 * 
 * @arg VarTimeType
 * @text Time
 * @parent Variables
 *
 * @arg VarHour:num
 * @text Hour Variable
 * @parent VarTimeType
 * @type variable
 * @desc Select a variable to record the hour.
 * Leave at 0 to not use.
 * @default 0
 *
 * @arg VarMinute:num
 * @text Minute Variable
 * @parent VarTimeType
 * @type variable
 * @desc Select a variable to record the minute.
 * Leave at 0 to not use.
 * @default 0
 *
 * @arg VarSecond:num
 * @text Second Variable
 * @parent VarTimeType
 * @type variable
 * @desc Select a variable to record the second.
 * Leave at 0 to not use.
 * @default 0
 *
 * @arg VarFullTime:num
 * @text Full Time Variable
 * @parent VarTimeType
 * @type variable
 * @desc Select a variable to record the full time.
 * Leave at 0 to not use.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Hud
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command HudShowHide
 * @text HUD: Show/Hide
 * @desc Makes the Date & Time HUD visible or hidden.
 * Does not affect maps with forced hidden notetags.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Date & Time HUD on the map scene.
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
 * @param DateTimeSystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Defaults
 * @text Default Settings
 *
 * @param DefaultTimeType:str
 * @text Default Map Time Type
 * @parent Defaults
 * @type select
 * @option None - Time doesn't pass on most maps
 * @value none
 * @option Game - Time passes based on game rules
 * @value game
 * @option Real - Time passes based on real life
 * @value real
 * @desc What do you want to be the default time system?
 * Change per map with <Time System: x> notetag.
 * @default game
 *
 * @param DefaultTimeTone:str
 * @text Default Map Time Tone
 * @parent Defaults
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Do maps have time-based screen tones/tints?
 * Can change with <No Time Tone> or <Time Tone> notetags.
 * @default true
 * 
 * @param GameTime
 * @text Game Time Settings
 *
 * @param GameTimeGeneral:struct
 * @text General Settings
 * @parent GameTime
 * @type struct<GameTimeGeneral>
 * @desc Here are the general settings regarding Game Time.
 * @default {"Starting":"","StartYear:num":"1","StartMonth:num":"1","StartDate:num":"1","StartWeekday:num":"1","StartHour:num":"8","StartMinute:num":"0","Mechanics":"","msPerMinute:num":"1000","minutesInHour:num":"60","roundMinutesTo10:eval":"true","HoursInDay:num":"24","LeapYearCalc:func":"\"// Declare Constants\\nconst year = arguments[0];\\n\\n// Check Leap Year Rules\\nreturn (year % 400 === 0) ||\\n  ((year % 100 !== 0) && (year % 4 === 0));\"","Pause":"","PauseEventRunning:eval":"true","PauseMoveRouteForcing:eval":"true","PauseGatheringFollowers:eval":"true","PauseVehicleEntry:eval":"true","MonthStruct":"","Months:arraystruct":"[\"{\\\"Name:str\\\":\\\"Verenthilun\\\",\\\"Abbr:str\\\":\\\"VER\\\",\\\"Days:num\\\":\\\"28\\\",\\\"LeapMonth:eval\\\":\\\"false\\\",\\\"Season:str\\\":\\\"spring\\\"}\",\"{\\\"Name:str\\\":\\\"Solarnilun\\\",\\\"Abbr:str\\\":\\\"SOL\\\",\\\"Days:num\\\":\\\"28\\\",\\\"LeapMonth:eval\\\":\\\"false\\\",\\\"Season:str\\\":\\\"summer\\\"}\",\"{\\\"Name:str\\\":\\\"Auminolun\\\",\\\"Abbr:str\\\":\\\"AUM\\\",\\\"Days:num\\\":\\\"28\\\",\\\"LeapMonth:eval\\\":\\\"false\\\",\\\"Season:str\\\":\\\"autumn\\\"}\",\"{\\\"Name:str\\\":\\\"Frostalun\\\",\\\"Abbr:str\\\":\\\"FRO\\\",\\\"Days:num\\\":\\\"28\\\",\\\"LeapMonth:eval\\\":\\\"false\\\",\\\"Season:str\\\":\\\"winter\\\"}\"]","WeekdayStruct":"","Weekdays:arraystruct":"[\"{\\\"Name:str\\\":\\\"Lunara\\\",\\\"Abbr:str\\\":\\\"LUN\\\",\\\"WeekdayType:str\\\":\\\"weekday\\\"}\",\"{\\\"Name:str\\\":\\\"Tundara\\\",\\\"Abbr:str\\\":\\\"TUN\\\",\\\"WeekdayType:str\\\":\\\"weekday\\\"}\",\"{\\\"Name:str\\\":\\\"Wyrmara\\\",\\\"Abbr:str\\\":\\\"WYR\\\",\\\"WeekdayType:str\\\":\\\"weekday\\\"}\",\"{\\\"Name:str\\\":\\\"Thundra\\\",\\\"Abbr:str\\\":\\\"THU\\\",\\\"WeekdayType:str\\\":\\\"weekday\\\"}\",\"{\\\"Name:str\\\":\\\"Fyrara\\\",\\\"Abbr:str\\\":\\\"FYR\\\",\\\"WeekdayType:str\\\":\\\"weekday\\\"}\",\"{\\\"Name:str\\\":\\\"Sylphira\\\",\\\"Abbr:str\\\":\\\"SYL\\\",\\\"WeekdayType:str\\\":\\\"weekend\\\"}\",\"{\\\"Name:str\\\":\\\"Heliora\\\",\\\"Abbr:str\\\":\\\"HEL\\\",\\\"WeekdayType:str\\\":\\\"weekend\\\"}\"]","DayStruct":"","DawnHours:arraynum":"[\"4\",\"5\",\"6\"]","DayHours:arraynum":"[\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\"]","DuskHours:arraynum":"[\"18\",\"19\",\"20\"]","NightHours:arraynum":"[\"21\",\"22\",\"23\",\"0\",\"1\",\"2\",\"3\"]"}
 *
 * @param GameTimeTone:arrayeval
 * @text Tone Settings
 * @parent GameTime
 * @type string[]
 * @desc What tone/tint is used for various Game Time hours?
 * Format: [Red, Green, Blue, Gray]. Starts at 0:00.
 * @default ["[-68, -68, 0, 68]","[-68, -68, 0, 68]","[-68, -68, 0, 68]","[-68, -68, 0, 68]","[-51, -51, 0, 51]","[-34, -34, 0, 34]","[-17, -17, 0, 17]","[0, 0, 0, 0]","[0, 0, 0, 0]","[0, 0, 0, 0]","[0, 0, 0, 0]","[0, 0, 0, 0]","[0, 0, 0, 0]","[0, 0, 0, 0]","[0, 0, 0, 0]","[0, 0, 0, 0]","[0, 0, 0, 0]","[0, 0, 0, 0]","[34, -17, -17, 0]","[68, -34, -34, 0]","[0, -51, -17, 34]","[-68, -68, 0, 68]","[-68, -68, 0, 68]","[-68, -68, 0, 68]"]
 *
 * @param GameTimeOverlay:arraystr
 * @text Overlay Settings
 * @parent GameTime
 * @type string[]
 * @desc What overlay is used for this hour? Starts at 0:00.
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default ["#2e3192","#2e3192","#2e3192","#2e3192","#404d9a","#5674b9","#aab4e8","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#fbca8f","#f7941d","#63a850","#2e3192","#2e3192","#2e3192"]
 *
 * @param GameTimeData:struct
 * @text Variables & Switches
 * @parent GameTime
 * @type struct<VarSw>
 * @desc Adjust the variables and switches that record data here.
 * These will be automatically updated upon time changes.
 * @default {"Variables":"","VarCalendarType":"","VarYear:num":"0","VarMonth:num":"0","VarDate:num":"0","VarDayType":"","VarWeekday:num":"0","VarTimeType":"","VarHour:num":"0","VarMinute:num":"0","VarSecond:num":"0","Switches":"","SwSeasonType":"","SwSpring:num":"0","SwSummer:num":"0","SwAutumn:num":"0","SwWinter:num":"0","SwDayType":"","SwWeekday:num":"0","SwWeekend:num":"0","SwHourType":"","SwDawn:num":"0","SwDay:num":"0","SwDusk:num":"0","SwNight:num":"0"}
 *
 * @param GameTimeVocab:struct
 * @text Vocabulary Settings
 * @parent GameTime
 * @type struct<GameTimeVocab>
 * @desc Here are the vocabulary-related terms involving Game Time.
 * @default {"MonthsSeasons":"","SeasonSpring:str":"Spring","SeasonSummer:str":"Summer","SeasonAutumn:str":"Autumn","SeasonWinter:str":"Winter","WeekdaysType":"","WeekdayName:str":"Weekday","WeekendName:str":"Weekend","Time":"","TimeMeridiem":"","TimeAM:str":"AM","TimePM:str":"PM","TimeDayCycle":"","TimeDawn:str":"Dawn","TimeDay:str":"Daytime","TimeDusk:str":"Dusk","TimeNight:str":"Nighttime"}
 * 
 * @param RealTime
 * @text Real Time Settings
 *
 * @param RealTimeGeneral:struct
 * @text General Settings
 * @parent RealTime
 * @type struct<RealTimeGeneral>
 * @desc Here are the general settings regarding Real Time.
 * @default {"Seasonal":"","SpringMonths:arraynum":"[\"3\",\"4\",\"5\"]","SummerMonths:arraynum":"[\"6\",\"7\",\"8\"]","AutumnMonths:arraynum":"[\"9\",\"10\",\"11\"]","WinterMonths:arraynum":"[\"12\",\"1\",\"2\"]","Weekday":"","Weekdays:arraynum":"[\"1\",\"2\",\"3\",\"4\",\"5\"]","Weekends:arraynum":"[\"6\",\"7\"]","DayStruct":"","DawnHours:arraynum":"[\"4\",\"5\",\"6\"]","DayHours:arraynum":"[\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\"]","DuskHours:arraynum":"[\"18\",\"19\",\"20\"]","NightHours:arraynum":"[\"21\",\"22\",\"23\",\"0\",\"1\",\"2\",\"3\"]","SaveCore":"","LoadMinDiff:num":"0"}
 *
 * @param RealTimeToneOverlay:struct
 * @text Tones & Overlay Settings
 * @parent RealTime
 * @type struct<RealTimeToneOverlay>
 * @desc Adjust the tones and overlay settings to change what
 * color the screen will appear based on the time of day.
 * @default {"Tones":"","Tone0:eval":"[-68, -68, 0, 68]","Tone1:eval":"[-68, -68, 0, 68]","Tone2:eval":"[-68, -68, 0, 68]","Tone3:eval":"[-68, -68, 0, 68]","Tone4:eval":"[-51, -51, 0, 51]","Tone5:eval":"[-34, -34, 0, 34]","Tone6:eval":"[-17, -17, 0, 17]","Tone7:eval":"[0, 0, 0, 0]","Tone8:eval":"[0, 0, 0, 0]","Tone9:eval":"[0, 0, 0, 0]","Tone10:eval":"[0, 0, 0, 0]","Tone11:eval":"[0, 0, 0, 0]","Tone12:eval":"[0, 0, 0, 0]","Tone13:eval":"[0, 0, 0, 0]","Tone14:eval":"[0, 0, 0, 0]","Tone15:eval":"[0, 0, 0, 0]","Tone16:eval":"[0, 0, 0, 0]","Tone17:eval":"[0, 0, 0, 0]","Tone18:eval":"[34, -17, -17, 0]","Tone19:eval":"[68, -34, -34, 0]","Tone20:eval":"[0, -51, -17, 34]","Tone21:eval":"[-68, -68, 0, 68]","Tone22:eval":"[-68, -68, 0, 68]","Tone23:eval":"[-68, -68, 0, 68]","Overlays":"","OverlaysReq":"VisuMZ_2_LightingEffects","Overlay0:str":"#2e3192","Overlay1:str":"#2e3192","Overlay2:str":"#2e3192","Overlay3:str":"#2e3192","Overlay4:str":"#404d9a","Overlay5:str":"#5674b9","Overlay6:str":"#aab4e8","Overlay7:str":"#ffffff","Overlay8:str":"#ffffff","Overlay9:str":"#ffffff","Overlay10:str":"#ffffff","Overlay11:str":"#ffffff","Overlay12:str":"#ffffff","Overlay13:str":"#ffffff","Overlay14:str":"#ffffff","Overlay15:str":"#ffffff","Overlay16:str":"#ffffff","Overlay17:str":"#ffffff","Overlay18:str":"#fbca8f","Overlay19:str":"#f7941d","Overlay20:str":"#63a850","Overlay21:str":"#2e3192","Overlay22:str":"#2e3192","Overlay23:str":"#2e3192"}
 *
 * @param RealTimeData:struct
 * @text Variables & Switches
 * @parent RealTime
 * @type struct<VarSw>
 * @desc Adjust the variables and switches that record data here.
 * These will be automatically updated upon time changes.
 * @default {"Variables":"","VarCalendarType":"","VarYear:num":"0","VarMonth:num":"0","VarDate:num":"0","VarDayType":"","VarWeekday:num":"0","VarTimeType":"","VarHour:num":"0","VarMinute:num":"0","VarSecond:num":"0","Switches":"","SwSeasonType":"","SwSpring:num":"0","SwSummer:num":"0","SwAutumn:num":"0","SwWinter:num":"0","SwDayType":"","SwWeekday:num":"0","SwWeekend:num":"0","SwHourType":"","SwDawn:num":"0","SwDay:num":"0","SwDusk:num":"0","SwNight:num":"0"}
 *
 * @param RealTimeVocab:struct
 * @text Vocabulary Settings
 * @parent RealTime
 * @type struct<RealTimeVocab>
 * @desc Here are the vocabulary-related terms involving Real Time.
 * @default {"Months":"","MonthsFull":"","MonthFull1:str":"January","MonthFull2:str":"February","MonthFull3:str":"March","MonthFull4:str":"April","MonthFull5:str":"May","MonthFull6:str":"June","MonthFull7:str":"July","MonthFull8:str":"August","MonthFull9:str":"September","MonthFull10:str":"October","MonthFull11:str":"November","MonthFull12:str":"December","MonthsAbbr":"","MonthAbbr1:str":"JAN","MonthAbbr2:str":"FEB","MonthAbbr3:str":"MAR","MonthAbbr4:str":"APR","MonthAbbr5:str":"MAY","MonthAbbr6:str":"JUN","MonthAbbr7:str":"JUL","MonthAbbr8:str":"AUG","MonthAbbr9:str":"SEP","MonthAbbr10:str":"OCT","MonthAbbr11:str":"NOV","MonthAbbr12:str":"DEC","MonthsSeasons":"","SeasonSpring:str":"Spring","SeasonSummer:str":"Summer","SeasonAutumn:str":"Autumn","SeasonWinter:str":"Winter","Weekdays":"","WeekdaysFull":"","WeekdayFull1:str":"Monday","WeekdayFull2:str":"Tuesday","WeekdayFull3:str":"Wednesday","WeekdayFull4:str":"Thursday","WeekdayFull5:str":"Friday","WeekdayFull6:str":"Saturday","WeekdayFull7:str":"Sunday","WeekdaysAbbr":"","WeekdayAbbr1:str":"MON","WeekdayAbbr2:str":"TUE","WeekdayAbbr3:str":"WED","WeekdayAbbr4:str":"THU","WeekdayAbbr5:str":"FRI","WeekdayAbbr6:str":"SAT","WeekdayAbbr7:str":"SUN","WeekdaysType":"","WeekdayName:str":"Weekday","WeekendName:str":"Weekend","Time":"","TimeMeridiem":"","TimeAM:str":"AM","TimePM:str":"PM","TimeDayCycle":"","TimeDawn:str":"Dawn","TimeDay:str":"Daytime","TimeDusk:str":"Dusk","TimeNight:str":"Nighttime"}
 * 
 * @param HUD
 * @text Date/Time HUD
 *
 * @param HudSprite:struct
 * @text HUD Sprites
 * @type struct<HudSprite>
 * @parent HUD
 * @desc These settings let you adjust the HUD sprites displayed for this plugin.
 * @default {"General":"","Enable:eval":"true","Show:eval":"true","OpacitySpeed:num":"16","Position":"","PositionX:num":"+0","PositionY:num":"+0","Season":"","SeasonEnable:eval":"true","SeasonOpacity:num":"128","SeasonAnchor":"","SeasonAnchorX:num":"0.5","SeasonAnchorY:num":"0.5","SeasonOffset":"","SeasonOffsetX:num":"+48","SeasonOffsetY:num":"+48","SeasonScale":"","SeasonScaleX:num":"3.0","SeasonScaleY:num":"3.0","SeasonIcons":"","SeasonIconSpring:num":"69","SeasonIconSummer:num":"70","SeasonIconAutumn:num":"68","SeasonIconWinter:num":"65","SeasonImages":"","SeasonImageSpring:str":"","SeasonImageSummer:str":"","SeasonImageAutumn:str":"","SeasonImageWinter:str":"","DayCycle":"","DayCycleEnable:eval":"true","DayCycleOpacity:num":"128","DayCycleAnchor":"","DayCycleAnchorX:num":"0.5","DayCycleAnchorY:num":"0.5","DayCycleOffset":"","DayCycleOffsetX:num":"+144","DayCycleOffsetY:num":"+48","DayCycleScale":"","DayCycleScaleX:num":"3.0","DayCycleScaleY:num":"3.0","DayCycleIcons":"","DayCycleIconDawn:num":"73","DayCycleIconDay:num":"87","DayCycleIconDusk:num":"74","DayCycleIconNight:num":"88","DayCycleImages":"","DayCycleImageDawn:str":"","DayCycleImageDay:str":"","DayCycleImageDusk:str":"","DayCycleImageNight:str":"","WeekType":"","WeekTypeEnable:eval":"true","WeekTypeOpacity:num":"128","WeekTypeAnchor":"","WeekTypeAnchorX:num":"0.5","WeekTypeAnchorY:num":"0.5","WeekTypeOffset":"","WeekTypeOffsetX:num":"+240","WeekTypeOffsetY:num":"+48","WeekTypeScale":"","WeekTypeScaleX:num":"3.0","WeekTypeScaleY:num":"3.0","WeekTypeIcons":"","WeekTypeIconWeekday:num":"75","WeekTypeIconWeekend:num":"84","WeekTypeImages":"","WeekTypeImageWeekday:str":"","WeekTypeImageWeekend:str":"","Year":"","YearEnable:eval":"true","YearAngle:num":"+15","YearFmt:str":"Year %1","YearSize":"","YearSizeWidth:num":"200","YearSizeHeight:num":"80","YearAnchor":"","YearAnchorX:num":"0.5","YearAnchorY:num":"0.5","YearOffset":"","YearOffsetX:num":"+48","YearOffsetY:num":"+30","Year_DrawText_JS:func":"\"// Declare Constants\\nconst bitmap = arguments[0];\\nconst year = TimeManager.getYear();\\nlet text = String(year);\\nif (text.length < 4) {\\n    const fmt = TextManager.DATE_TIME_SYSTEM.yearFmt;\\n    text = fmt.format(year);\\n}\\n\\n// Change Font Settings\\nbitmap.fontFace = 'Times New Roman';\\nbitmap.fontSize = 32;\\nbitmap.outlineWidth = 5;\\nbitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';\\n\\n// Draw Text\\nbitmap.drawText(text, 0, 0, bitmap.width, bitmap.height, 'center');\"","Month":"","MonthEnable:eval":"true","MonthAngle:num":"+0","MonthSize":"","MonthSizeWidth:num":"200","MonthSizeHeight:num":"80","MonthAnchor":"","MonthAnchorX:num":"0.5","MonthAnchorY:num":"0.5","MonthOffset":"","MonthOffsetX:num":"+125","MonthOffsetY:num":"+20","Month_DrawText_JS:func":"\"// Declare Constants\\nconst bitmap = arguments[0];\\nconst monthID = TimeManager.getMonth();\\nconst monthName = TextManager.getMonthName(monthID);\\nconst monthAbbr = TextManager.getMonthAbbr(monthID);\\n\\n// Change Font Settings\\nbitmap.fontFace = 'Times New Roman';\\nbitmap.fontSize = 24;\\nbitmap.outlineWidth = 5;\\nbitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';\\n\\n// Draw Text\\nbitmap.drawText(monthAbbr, 0, 0, bitmap.width, bitmap.height, 'center');\"","Date":"","DateEnable:eval":"true","DateAngle:num":"+0","DateSize":"","DateSizeWidth:num":"200","DateSizeHeight:num":"80","DateAnchor":"","DateAnchorX:num":"0.5","DateAnchorY:num":"0.5","DateOffset":"","DateOffsetX:num":"+175","DateOffsetY:num":"+20","Date_DrawText_JS:func":"\"// Declare Constants\\nconst bitmap = arguments[0];\\nconst date = TimeManager.getDate();\\n\\n// Change Font Settings\\nbitmap.fontFace = 'Times New Roman';\\nbitmap.fontSize = 36;\\nbitmap.outlineWidth = 5;\\nbitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';\\n\\n// Draw Text\\nbitmap.drawText(date, 0, 0, bitmap.width, bitmap.height, 'center');\"","Weekday":"","WeekdayEnable:eval":"true","WeekdayAngle:num":"-15","WeekdaySize":"","WeekdaySizeWidth:num":"200","WeekdaySizeHeight:num":"80","WeekdayAnchor":"","WeekdayAnchorX:num":"0.5","WeekdayAnchorY:num":"0.5","WeekdayOffset":"","WeekdayOffsetX:num":"+240","WeekdayOffsetY:num":"+30","Weekday_DrawText_JS:func":"\"// Declare Constants\\nconst bitmap = arguments[0];\\nconst weekdayID = TimeManager.getWeekday();\\nconst weekdayName = TextManager.getWeekdayName(weekdayID);\\nconst weekdayAbbr = TextManager.getWeekdayAbbr(weekdayID);\\n\\n// Change Font Settings\\nbitmap.fontFace = 'Times New Roman';\\nbitmap.fontSize = 32;\\nbitmap.outlineWidth = 5;\\nbitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';\\n\\n// Draw Text\\nbitmap.drawText(weekdayAbbr, 0, 0, bitmap.width, bitmap.height, 'center');\"","Time":"","TimeEnable:eval":"true","TimeAngle:num":"+0","TimeSize":"","TimeSizeWidth:num":"200","TimeSizeHeight:num":"80","TimeAnchor":"","TimeAnchorX:num":"0.5","TimeAnchorY:num":"0.5","TimeOffset":"","TimeOffsetX:num":"+144","TimeOffsetY:num":"+60","Time_DrawText_JS:func":"\"// Declare Constants\\nconst bitmap = arguments[0];\\nconst hour = TimeManager.getHour();\\nconst hourMilitary = TextManager.getMilitaryHour(hour);\\nconst hourMeridiem = TextManager.getMeridiemHour(hour);\\nconst minute = TimeManager.getMinute().padZero(2);\\nconst meridiem = TextManager.getMeridiemForHour(hour);\\n\\n// Determine Time\\nlet time = '%1:%2'.format(hourMeridiem, minute);;\\ntime += ' ' + meridiem;\\n\\n// Change Font Settings\\nbitmap.fontFace = 'Times New Roman';\\nbitmap.fontSize = 40;\\nbitmap.outlineWidth = 6;\\nbitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';\\n\\n// Draw Text\\nbitmap.drawText(time, 0, 0, bitmap.width, bitmap.height, 'center');\""}
 * 
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @parent HUD
 * @desc Options settings for the Date & Time System.
 * @default {"Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Show Date & Time"}
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
 * Game Time General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameTimeGeneral:
 *
 * @param Starting
 * @text Starting Data
 *
 * @param StartYear:num
 * @text Start Year
 * @parent Starting
 * @type number
 * @min 1
 * @desc What is the number of the starting year?
 * @default 1
 *
 * @param StartMonth:num
 * @text Start Month
 * @parent Starting
 * @type number
 * @min 1
 * @desc What is the number of the starting month?
 * @default 1
 *
 * @param StartDate:num
 * @text Start Date
 * @parent Starting
 * @type number
 * @min 1
 * @desc What is the number of the starting date?
 * @default 1
 *
 * @param StartWeekday:num
 * @text Start Weekday
 * @parent Starting
 * @type number
 * @min 1
 * @desc What is the number of the starting weekday?
 * @default 1
 *
 * @param StartHour:num
 * @text Start Hour
 * @parent Starting
 * @type number
 * @desc What is the number of the starting hour?
 * @default 8
 *
 * @param StartMinute:num
 * @text Start Minute
 * @parent Starting
 * @type number
 * @desc What is the number of the starting minute?
 * @default 0
 *
 * @param Mechanics
 * @text Game Time Mechanics
 *
 * @param msPerMinute:num
 * @text MS Per Game Minute
 * @parent Mechanics
 * @type number
 * @min 20
 * @desc How many milliseconds will count as a game minute?
 * 1000 milliseconds = 1 real life second.
 * @default 1000
 *
 * @param minutesInHour:num
 * @text Minutes in an Hour
 * @parent Mechanics
 * @type number
 * @min 1
 * @desc How many minutes are there in an hour?
 * This is for Game Time only.
 * @default 60
 * 
 * @param roundMinutesTo10:eval
 * @text Round Minutes to 10s
 * @parent minutesInHour:num
 * @type boolean
 * @on Round
 * @off Don't Round
 * @desc Rounds the displayed minutes to 10's so they only
 * visually update every 10 Game Time minutes.
 * @default true
 *
 * @param HoursInDay:num
 * @text Hours in a Day
 * @parent Mechanics
 * @type number
 * @min 1
 * @desc How many hours are there in a day?
 * This is for Game Time only.
 * @default 24
 *
 * @param LeapYearCalc:func
 * @text JS: Check Leap Year
 * @parent Mechanics
 * @type note
 * @desc Code used to determine how a year is considered a leap year.
 * @default "// Declare Constants\nconst year = arguments[0];\n\n// Check Leap Year Rules\nreturn (year % 400 === 0) ||\n  ((year % 100 !== 0) && (year % 4 === 0));"
 * 
 * @param Pause
 * @text Pause Conditions
 * 
 * @param PauseEventRunning:eval
 * @text If Event Running
 * @parent Pause
 * @type boolean
 * @on Pause
 * @off Don't Pause
 * @desc Pauses Game Time update if an event is running?
 * Doesn't apply to Parallels. Applies to Autorun.
 * @default true
 * 
 * @param PauseMoveRouteForcing:eval
 * @text If Forced Player Move
 * @parent Pause
 * @type boolean
 * @on Pause
 * @off Don't Pause
 * @desc Pauses Game Time update if player movement is forced?
 * Doesn't apply to Parallels. Applies to Autorun.
 * @default true
 * 
 * @param PauseGatheringFollowers:eval
 * @text If Gather Followers
 * @parent Pause
 * @type boolean
 * @on Pause
 * @off Don't Pause
 * @desc Pauses Game Time update if followers are gathering?
 * Doesn't apply to Parallels. Applies to Autorun.
 * @default true
 * 
 * @param PauseVehicleEntry:eval
 * @text If Vehicle Entry/Exit
 * @parent Pause
 * @type boolean
 * @on Pause
 * @off Don't Pause
 * @desc Pauses Game Time update if followers are gathering?
 * Doesn't apply to Parallels. Applies to Autorun.
 * @default true
 *
 * @param MonthStruct
 * @text Month Structure
 *
 * @param Months:arraystruct
 * @text List of Months
 * @parent MonthStruct
 * @type struct<GameTimeMonth>[]
 * @desc Here, adjust the in-game months for Game Time.
 * Months will occur in the order they're in.
 * @default ["{\"Name:str\":\"Verenthilun\",\"Abbr:str\":\"VER\",\"Days:num\":\"28\",\"LeapMonth:eval\":\"false\",\"Season:str\":\"spring\"}","{\"Name:str\":\"Solarnilun\",\"Abbr:str\":\"SOL\",\"Days:num\":\"28\",\"LeapMonth:eval\":\"false\",\"Season:str\":\"summer\"}","{\"Name:str\":\"Auminolun\",\"Abbr:str\":\"AUM\",\"Days:num\":\"28\",\"LeapMonth:eval\":\"false\",\"Season:str\":\"autumn\"}","{\"Name:str\":\"Frostalun\",\"Abbr:str\":\"FRO\",\"Days:num\":\"28\",\"LeapMonth:eval\":\"false\",\"Season:str\":\"winter\"}"]
 *
 * @param WeekdayStruct
 * @text Weekday Structure
 *
 * @param Weekdays:arraystruct
 * @text List of Weekdays
 * @parent WeekdayStruct
 * @type struct<GameTimeWeekday>[]
 * @desc Here, adjust the in-game weekdays for Game Time.
 * Weekdays will occur in the order they're in.
 * @default ["{\"Name:str\":\"Lunara\",\"Abbr:str\":\"LUN\",\"WeekdayType:str\":\"weekday\"}","{\"Name:str\":\"Tundara\",\"Abbr:str\":\"TUN\",\"WeekdayType:str\":\"weekday\"}","{\"Name:str\":\"Wyrmara\",\"Abbr:str\":\"WYR\",\"WeekdayType:str\":\"weekday\"}","{\"Name:str\":\"Thundra\",\"Abbr:str\":\"THU\",\"WeekdayType:str\":\"weekday\"}","{\"Name:str\":\"Fyrara\",\"Abbr:str\":\"FYR\",\"WeekdayType:str\":\"weekday\"}","{\"Name:str\":\"Sylphira\",\"Abbr:str\":\"SYL\",\"WeekdayType:str\":\"weekend\"}","{\"Name:str\":\"Heliora\",\"Abbr:str\":\"HEL\",\"WeekdayType:str\":\"weekend\"}"]
 *
 * @param DayStruct
 * @text Day Structure
 *
 * @param DawnHours:arraynum
 * @text Dawn Hours
 * @parent DayStruct
 * @type number[]
 * @min 0
 * @max 23
 * @desc What hours are considered "Dawn" hours?
 * This is for Game Time only.
 * @default ["4","5","6"]
 *
 * @param DayHours:arraynum
 * @text Day Hours
 * @parent DayStruct
 * @type number[]
 * @min 0
 * @max 23
 * @desc What hours are considered "Day" hours?
 * This is for Game Time only.
 * @default ["7","8","9","10","11","12","13","14","15","16","17"]
 *
 * @param DuskHours:arraynum
 * @text Dusk Hours
 * @parent DayStruct
 * @type number[]
 * @min 0
 * @max 23
 * @desc What hours are considered "Dusk" hours?
 * This is for Game Time only.
 * @default ["18","19","20"]
 *
 * @param NightHours:arraynum
 * @text Night Hours
 * @parent DayStruct
 * @type number[]
 * @min 0
 * @max 23
 * @desc What hours are considered "Night" hours?
 * This is for Game Time only.
 * @default ["21","22","23","0","1","2","3"]
 *
 */
/* ----------------------------------------------------------------------------
 * Game Time Month Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameTimeMonth:
 *
 * @param Name:str
 * @text Name
 * @desc What is the name of the month?
 * @default Untitled
 *
 * @param Abbr:str
 * @text Abbreviation
 * @parent Name:str
 * @desc What is the abbreviation of this month?
 * @default UNT
 *
 * @param Days:num
 * @text Total Days
 * @type num
 * @min 1
 * @desc How many days are there in this month?
 * @default 28
 *
 * @param LeapMonth:eval
 * @text Leap Month?
 * @parent Days:num
 * @type boolean
 * @on Leap Month
 * @off Not Leap Month
 * @desc Is this month a leap month?
 * It'll get an extra day each leap year.
 * @default false
 *
 * @param Season:str
 * @text Season
 * @type select
 * @option spring
 * @option summer
 * @option autumn
 * @option winter
 * @desc What season is this month a part of?
 * @default spring
 *
 */
/* ----------------------------------------------------------------------------
 * Game Time Weekdays Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameTimeWeekday:
 *
 * @param Name:str
 * @text Name
 * @desc What is the name of this weekday?
 * @default Untitled
 *
 * @param Abbr:str
 * @text Abbreviation
 * @parent Name:str
 * @desc What is the abbreviation of this weekday?
 * @default UNT
 *
 * @param WeekdayType:str
 * @text Weekday Type
 * @type select
 * @option weekday
 * @option weekend
 * @desc Is this day part of the weekdays or weekend?
 * @default weekday
 *
 */
/* ----------------------------------------------------------------------------
 * Game Time Vocab Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameTimeVocab:
 * 
 * @param MonthsSeasons
 * @text Seasons
 *
 * @param SeasonSpring:str
 * @text Spring
 * @parent MonthsSeasons
 * @desc How "Spring" is displayed.
 * @default Spring
 *
 * @param SeasonSummer:str
 * @text Summer
 * @parent MonthsSeasons
 * @desc How "Summer" is displayed.
 * @default Summer
 *
 * @param SeasonAutumn:str
 * @text Autumn
 * @parent MonthsSeasons
 * @desc How "Autumn" is displayed.
 * @default Autumn
 *
 * @param SeasonWinter:str
 * @text Winter
 * @parent MonthsSeasons
 * @desc How "Winter" is displayed.
 * @default Winter
 * 
 * @param WeekdaysType
 * @text Weekday Type
 *
 * @param WeekdayName:str
 * @text Weekday
 * @parent WeekdaysType
 * @desc How "Weekday" is displayed.
 * @default Weekday
 *
 * @param WeekendName:str
 * @text Weekend
 * @parent WeekdaysType
 * @desc how "Weekend" is displayed.
 * @default Weekend
 *
 * @param Time
 * @text Time-Related
 *
 * @param TimeMeridiem
 * @text Meridiem
 * @parent Time
 *
 * @param TimeAM:str
 * @text Ante Meridiem
 * @parent TimeMeridiem
 * @desc How "Ante Meridiem" is displayed.
 * @default AM
 *
 * @param TimePM:str
 * @text Post Meridiem
 * @parent TimeMeridiem
 * @desc How "Post Meridiem" is displayed.
 * @default PM
 *
 * @param TimeDayCycle
 * @text Day Cycle
 * @parent Time
 *
 * @param TimeDawn:str
 * @text Dawn
 * @parent TimeDayCycle
 * @desc How "Dawn" is displayed.
 * @default Dawn
 *
 * @param TimeDay:str
 * @text Day
 * @parent TimeDayCycle
 * @desc How "Day" is displayed.
 * @default Daytime
 *
 * @param TimeDusk:str
 * @text Dusk
 * @parent TimeDayCycle
 * @desc How "Dusk" is displayed.
 * @default Dusk
 *
 * @param TimeNight:str
 * @text Night
 * @parent TimeDayCycle
 * @desc How "Night" is displayed.
 * @default Nighttime
 *
 */
/* ----------------------------------------------------------------------------
 * Real Time General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~RealTimeGeneral:
 *
 * @param Seasonal
 * @text Seasonal Months
 *
 * @param SpringMonths:arraynum
 * @text Spring Months
 * @parent Seasonal
 * @type number[]
 * @min 1
 * @max 12
 * @desc Which Real Time months are Spring months for this game?
 * @default ["3","4","5"]
 *
 * @param SummerMonths:arraynum
 * @text Summer Months
 * @parent Seasonal
 * @type number[]
 * @min 1
 * @max 12
 * @desc Which Real Time months are Summer months for this game?
 * @default ["6","7","8"]
 *
 * @param AutumnMonths:arraynum
 * @text Autumn Months
 * @parent Seasonal
 * @type number[]
 * @min 1
 * @max 12
 * @desc Which Real Time months are Autumn months for this game?
 * @default ["9","10","11"]
 *
 * @param WinterMonths:arraynum
 * @text Winter Months
 * @parent Seasonal
 * @type number[]
 * @min 1
 * @max 12
 * @desc Which Real Time months are Winter months for this game?
 * @default ["12","1","2"]
 *
 * @param Weekday
 * @text Week Structure
 *
 * @param Weekdays:arraynum
 * @text Weekdays
 * @parent Weekday
 * @type number[]
 * @min 1
 * @max 7
 * @desc Which Real Time weekdays are considered "Weekdays"?
 * @default ["1","2","3","4","5"]
 *
 * @param Weekends:arraynum
 * @text Weekends
 * @parent Weekday
 * @type number[]
 * @min 1
 * @max 7
 * @desc Which Real Time weekdays are considered "Weekends"?
 * @default ["6","7"]
 *
 * @param DayStruct
 * @text Day Structure
 *
 * @param DawnHours:arraynum
 * @text Dawn Hours
 * @parent DayStruct
 * @type number[]
 * @min 0
 * @max 23
 * @desc What hours are considered "Dawn" hours?
 * Use military time.
 * @default ["4","5","6"]
 *
 * @param DayHours:arraynum
 * @text Day Hours
 * @parent DayStruct
 * @type number[]
 * @min 0
 * @max 23
 * @desc What hours are considered "Day" hours?
 * Use military time.
 * @default ["7","8","9","10","11","12","13","14","15","16","17"]
 *
 * @param DuskHours:arraynum
 * @text Dusk Hours
 * @parent DayStruct
 * @type number[]
 * @min 0
 * @max 23
 * @desc What hours are considered "Dusk" hours?
 * Use military time.
 * @default ["18","19","20"]
 *
 * @param NightHours:arraynum
 * @text Night Hours
 * @parent DayStruct
 * @type number[]
 * @min 0
 * @max 23
 * @desc What hours are considered "Night" hours?
 * Use military time.
 * @default ["21","22","23","0","1","2","3"]
 *
 * @param SaveCore
 * @text VisuMZ_1_SaveCore
 *
 * @param LoadMinDiff:num
 * @text Difference Variable
 * @parent SaveCore
 * @type variable
 * @desc Select a variable that records the time difference from
 * the last save game and the current load game in minutes.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Real Time Tone/Overlay Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~RealTimeToneOverlay:
 *
 * @param Tones
 * @text Screen Tones/Tints
 *
 * @param Tone0:eval
 * @text 00:00 / 12 AM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [-68, -68, 0, 68]
 *
 * @param Tone1:eval
 * @text 01:00 / 1 AM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [-68, -68, 0, 68]
 *
 * @param Tone2:eval
 * @text 02:00 / 2 AM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [-68, -68, 0, 68]
 *
 * @param Tone3:eval
 * @text 03:00 / 3 AM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [-68, -68, 0, 68]
 *
 * @param Tone4:eval
 * @text 04:00 / 4 AM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [-51, -51, 0, 51]
 *
 * @param Tone5:eval
 * @text 05:00 / 5 AM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [-34, -34, 0, 34]
 *
 * @param Tone6:eval
 * @text 06:00 / 6 AM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [-17, -17, 0, 17]
 *
 * @param Tone7:eval
 * @text 07:00 / 7 AM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Tone8:eval
 * @text 08:00 / 8 AM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Tone9:eval
 * @text 09:00 / 9 AM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Tone10:eval
 * @text 10:00 / 10 AM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Tone11:eval
 * @text 11:00 / 11 AM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Tone12:eval
 * @text 12:00 / 12 PM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Tone13:eval
 * @text 13:00 / 1 PM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Tone14:eval
 * @text 14:00 / 2 PM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Tone15:eval
 * @text 15:00 / 3 PM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Tone16:eval
 * @text 16:00 / 4 PM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Tone17:eval
 * @text 17:00 / 5 PM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Tone18:eval
 * @text 18:00 / 6 PM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [34, -17, -17, 0]
 *
 * @param Tone19:eval
 * @text 19:00 / 7 PM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [68, -34, -34, 0]
 *
 * @param Tone20:eval
 * @text 20:00 / 8 PM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, -51, -17, 34]
 *
 * @param Tone21:eval
 * @text 21:00 / 9 PM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [-68, -68, 0, 68]
 *
 * @param Tone22:eval
 * @text 22:00 / 10 PM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [-68, -68, 0, 68]
 *
 * @param Tone23:eval
 * @text 23:00 / 11 PM
 * @parent Tones
 * @desc What tone/tint is used for this hour?
 * Format: [Red, Green, Blue, Gray]
 * @default [-68, -68, 0, 68]
 *
 * @param Overlays
 * @text Screen Overlay
 *
 * @param OverlaysReq
 * @text Requires
 * @parent Overlays
 * @default VisuMZ_2_LightingEffects
 *
 * @param Overlay0:str
 * @text 00:00 / 12 AM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #2e3192
 *
 * @param Overlay1:str
 * @text 01:00 / 1 AM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #2e3192
 *
 * @param Overlay2:str
 * @text 02:00 / 2 AM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #2e3192
 *
 * @param Overlay3:str
 * @text 03:00 / 3 AM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #2e3192
 *
 * @param Overlay4:str
 * @text 04:00 / 4 AM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #404d9a
 *
 * @param Overlay5:str
 * @text 05:00 / 5 AM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #5674b9
 *
 * @param Overlay6:str
 * @text 06:00 / 6 AM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #aab4e8
 *
 * @param Overlay7:str
 * @text 07:00 / 7 AM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #ffffff
 *
 * @param Overlay8:str
 * @text 08:00 / 8 AM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #ffffff
 *
 * @param Overlay9:str
 * @text 09:00 / 9 AM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #ffffff
 *
 * @param Overlay10:str
 * @text 10:00 / 10 AM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #ffffff
 *
 * @param Overlay11:str
 * @text 11:00 / 11 AM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #ffffff
 *
 * @param Overlay12:str
 * @text 12:00 / 12 PM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #ffffff
 *
 * @param Overlay13:str
 * @text 13:00 / 1 PM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #ffffff
 *
 * @param Overlay14:str
 * @text 14:00 / 2 PM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #ffffff
 *
 * @param Overlay15:str
 * @text 15:00 / 3 PM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #ffffff
 *
 * @param Overlay16:str
 * @text 16:00 / 4 PM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #ffffff
 *
 * @param Overlay17:str
 * @text 17:00 / 5 PM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #ffffff
 *
 * @param Overlay18:str
 * @text 18:00 / 6 PM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #fbca8f
 *
 * @param Overlay19:str
 * @text 19:00 / 7 PM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #f7941d
 *
 * @param Overlay20:str
 * @text 20:00 / 8 PM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #63a850
 *
 * @param Overlay21:str
 * @text 21:00 / 9 PM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #2e3192
 *
 * @param Overlay22:str
 * @text 22:00 / 10 PM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #2e3192
 *
 * @param Overlay23:str
 * @text 23:00 / 11 PM
 * @parent Overlays
 * @desc What overlay is used for this hour?
 * Format: #rrggbb. Requires VisuMZ_2_LightingEffects!
 * @default #2e3192
 *
 */
/* ----------------------------------------------------------------------------
 * Real Time Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~RealTimeVocab:
 *
 * @param Months
 * @text Month Names
 * 
 * @param MonthsFull
 * @text Full Names
 * @parent Months
 *
 * @param MonthFull1:str
 * @text Month 1
 * @parent MonthsFull
 * @desc Name of this month.
 * @default January
 *
 * @param MonthFull2:str
 * @text Month 2
 * @parent MonthsFull
 * @desc Name of this month.
 * @default February
 *
 * @param MonthFull3:str
 * @text Month 3
 * @parent MonthsFull
 * @desc Name of this month.
 * @default March
 *
 * @param MonthFull4:str
 * @text Month 4
 * @parent MonthsFull
 * @desc Name of this month.
 * @default April
 *
 * @param MonthFull5:str
 * @text Month 5
 * @parent MonthsFull
 * @desc Name of this month.
 * @default May
 *
 * @param MonthFull6:str
 * @text Month 6
 * @parent MonthsFull
 * @desc Name of this month.
 * @default June
 *
 * @param MonthFull7:str
 * @text Month 7
 * @parent MonthsFull
 * @desc Name of this month.
 * @default July
 *
 * @param MonthFull8:str
 * @text Month 8
 * @parent MonthsFull
 * @desc Name of this month.
 * @default August
 *
 * @param MonthFull9:str
 * @text Month 9
 * @parent MonthsFull
 * @desc Name of this month.
 * @default September
 *
 * @param MonthFull10:str
 * @text Month 10
 * @parent MonthsFull
 * @desc Name of this month.
 * @default October
 *
 * @param MonthFull11:str
 * @text Month 11
 * @parent MonthsFull
 * @desc Name of this month.
 * @default November
 *
 * @param MonthFull12:str
 * @text Month 12
 * @parent MonthsFull
 * @desc Name of this month.
 * @default December
 * 
 * @param MonthsAbbr
 * @text Abbreviations
 * @parent Months
 *
 * @param MonthAbbr1:str
 * @text Month 1
 * @parent MonthsAbbr
 * @desc Abbreviation of this month.
 * @default JAN
 *
 * @param MonthAbbr2:str
 * @text Month 2
 * @parent MonthsAbbr
 * @desc Abbreviation of this month.
 * @default FEB
 *
 * @param MonthAbbr3:str
 * @text Month 3
 * @parent MonthsAbbr
 * @desc Abbreviation of this month.
 * @default MAR
 *
 * @param MonthAbbr4:str
 * @text Month 4
 * @parent MonthsAbbr
 * @desc Abbreviation of this month.
 * @default APR
 *
 * @param MonthAbbr5:str
 * @text Month 5
 * @parent MonthsAbbr
 * @desc Abbreviation of this month.
 * @default MAY
 *
 * @param MonthAbbr6:str
 * @text Month 6
 * @parent MonthsAbbr
 * @desc Abbreviation of this month.
 * @default JUN
 *
 * @param MonthAbbr7:str
 * @text Month 7
 * @parent MonthsAbbr
 * @desc Abbreviation of this month.
 * @default JUL
 *
 * @param MonthAbbr8:str
 * @text Month 8
 * @parent MonthsAbbr
 * @desc Abbreviation of this month.
 * @default AUG
 *
 * @param MonthAbbr9:str
 * @text Month 9
 * @parent MonthsAbbr
 * @desc Abbreviation of this month.
 * @default SEP
 *
 * @param MonthAbbr10:str
 * @text Month 10
 * @parent MonthsAbbr
 * @desc Abbreviation of this month.
 * @default OCT
 *
 * @param MonthAbbr11:str
 * @text Month 11
 * @parent MonthsAbbr
 * @desc Abbreviation of this month.
 * @default NOV
 *
 * @param MonthAbbr12:str
 * @text Month 12
 * @parent MonthsAbbr
 * @desc Abbreviation of this month.
 * @default DEC
 * 
 * @param MonthsSeasons
 * @text Seasons
 * @parent Months
 *
 * @param SeasonSpring:str
 * @text Spring
 * @parent MonthsSeasons
 * @desc How "Spring" is displayed.
 * @default Spring
 *
 * @param SeasonSummer:str
 * @text Summer
 * @parent MonthsSeasons
 * @desc How "Summer" is displayed.
 * @default Summer
 *
 * @param SeasonAutumn:str
 * @text Autumn
 * @parent MonthsSeasons
 * @desc How "Autumn" is displayed.
 * @default Autumn
 *
 * @param SeasonWinter:str
 * @text Winter
 * @parent MonthsSeasons
 * @desc How "Winter" is displayed.
 * @default Winter
 *
 * @param Weekdays
 * @text Weekday Names
 * 
 * @param WeekdaysFull
 * @text Full Names
 * @parent Weekdays
 *
 * @param WeekdayFull1:str
 * @text Weekday 1
 * @parent WeekdaysFull
 * @desc Name of this weekday.
 * @default Monday
 *
 * @param WeekdayFull2:str
 * @text Weekday 2
 * @parent WeekdaysFull
 * @desc Name of this weekday.
 * @default Tuesday
 *
 * @param WeekdayFull3:str
 * @text Weekday 3
 * @parent WeekdaysFull
 * @desc Name of this weekday.
 * @default Wednesday
 *
 * @param WeekdayFull4:str
 * @text Weekday 4
 * @parent WeekdaysFull
 * @desc Name of this weekday.
 * @default Thursday
 *
 * @param WeekdayFull5:str
 * @text Weekday 5
 * @parent WeekdaysFull
 * @desc Name of this weekday.
 * @default Friday
 *
 * @param WeekdayFull6:str
 * @text Weekday 6
 * @parent WeekdaysFull
 * @desc Name of this weekday.
 * @default Saturday
 *
 * @param WeekdayFull7:str
 * @text Weekday 7
 * @parent WeekdaysFull
 * @desc Name of this weekday.
 * @default Sunday
 * 
 * @param WeekdaysAbbr
 * @text Abbreviation
 * @parent Weekdays
 *
 * @param WeekdayAbbr1:str
 * @text Weekday 1
 * @parent WeekdaysAbbr
 * @desc Abbreviation of this weekday.
 * @default MON
 *
 * @param WeekdayAbbr2:str
 * @text Weekday 2
 * @parent WeekdaysAbbr
 * @desc Abbreviation of this weekday.
 * @default TUE
 *
 * @param WeekdayAbbr3:str
 * @text Weekday 3
 * @parent WeekdaysAbbr
 * @desc Abbreviation of this weekday.
 * @default WED
 *
 * @param WeekdayAbbr4:str
 * @text Weekday 4
 * @parent WeekdaysAbbr
 * @desc Abbreviation of this weekday.
 * @default THU
 *
 * @param WeekdayAbbr5:str
 * @text Weekday 5
 * @parent WeekdaysAbbr
 * @desc Abbreviation of this weekday.
 * @default FRI
 *
 * @param WeekdayAbbr6:str
 * @text Weekday 6
 * @parent WeekdaysAbbr
 * @desc Abbreviation of this weekday.
 * @default SAT
 *
 * @param WeekdayAbbr7:str
 * @text Weekday 7
 * @parent WeekdaysAbbr
 * @desc Abbreviation of this weekday.
 * @default SUN
 * 
 * @param WeekdaysType
 * @text Weekday Type
 * @parent Weekdays
 *
 * @param WeekdayName:str
 * @text Weekday
 * @parent WeekdaysType
 * @desc How "Weekday" is displayed.
 * @default Weekday
 *
 * @param WeekendName:str
 * @text Weekend
 * @parent WeekdaysType
 * @desc how "Weekend" is displayed.
 * @default Weekend
 *
 * @param Time
 * @text Time-Related
 *
 * @param TimeMeridiem
 * @text Meridiem
 * @parent Time
 *
 * @param TimeAM:str
 * @text Ante Meridiem
 * @parent TimeMeridiem
 * @desc How "Ante Meridiem" is displayed.
 * @default AM
 *
 * @param TimePM:str
 * @text Post Meridiem
 * @parent TimeMeridiem
 * @desc How "Post Meridiem" is displayed.
 * @default PM
 *
 * @param TimeDayCycle
 * @text Day Cycle
 * @parent Time
 *
 * @param TimeDawn:str
 * @text Dawn
 * @parent TimeDayCycle
 * @desc How "Dawn" is displayed.
 * @default Dawn
 *
 * @param TimeDay:str
 * @text Day
 * @parent TimeDayCycle
 * @desc How "Day" is displayed.
 * @default Daytime
 *
 * @param TimeDusk:str
 * @text Dusk
 * @parent TimeDayCycle
 * @desc How "Dusk" is displayed.
 * @default Dusk
 *
 * @param TimeNight:str
 * @text Night
 * @parent TimeDayCycle
 * @desc How "Night" is displayed.
 * @default Nighttime
 *
 */
/* ----------------------------------------------------------------------------
 * Variables & Switches Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VarSw:
 *
 * @param Variables
 * 
 * @param VarCalendarType
 * @text Calendar
 * @parent Variables
 *
 * @param VarYear:num
 * @text Year Variable
 * @parent VarCalendarType
 * @type variable
 * @desc Select a variable to record the year.
 * Leave at 0 to not use.
 * @default 0
 *
 * @param VarMonth:num
 * @text Month Variable
 * @parent VarCalendarType
 * @type variable
 * @desc Select a variable to record the month.
 * Leave at 0 to not use.
 * @default 0
 *
 * @param VarDate:num
 * @text Date Variable
 * @parent VarCalendarType
 * @type variable
 * @desc Select a variable to record the date.
 * Leave at 0 to not use.
 * @default 0
 *
 * @param VarFullDate:num
 * @text Full Date Variable
 * @parent VarCalendarType
 * @type variable
 * @desc Select a variable to record the full date.
 * Leave at 0 to not use.
 * @default 0
 * 
 * @param VarDayType
 * @text Weekday
 * @parent Variables
 *
 * @param VarWeekday:num
 * @text Weekday Variable
 * @parent VarDayType
 * @type variable
 * @desc Select a variable to record the weekday.
 * Leave at 0 to not use.
 * @default 0
 * 
 * @param VarTimeType
 * @text Time
 * @parent Variables
 *
 * @param VarHour:num
 * @text Hour Variable
 * @parent VarTimeType
 * @type variable
 * @desc Select a variable to record the hour.
 * Leave at 0 to not use.
 * @default 0
 *
 * @param VarMinute:num
 * @text Minute Variable
 * @parent VarTimeType
 * @type variable
 * @desc Select a variable to record the minute.
 * Leave at 0 to not use.
 * @default 0
 *
 * @param VarSecond:num
 * @text Second Variable
 * @parent VarTimeType
 * @type variable
 * @desc Select a variable to record the second.
 * Leave at 0 to not use. Not available for Game Time.
 * @default 0
 *
 * @param VarFullTime:num
 * @text Full Time Variable
 * @parent VarTimeType
 * @type variable
 * @desc Select a variable to record the full time.
 * Leave at 0 to not use.
 * @default 0
 *
 * @param Switches
 * 
 * @param SwSeasonType
 * @text Seasons
 * @parent Switches
 *
 * @param SwSpring:num
 * @text Spring Switch
 * @parent SwSeasonType
 * @type switch
 * @desc Turns on when season is a "Spring" month.
 * Leave at 0 to not use.
 * @default 0
 *
 * @param SwSummer:num
 * @text Summer Switch
 * @parent SwSeasonType
 * @type switch
 * @desc Turns on when season is a "Summer" month.
 * Leave at 0 to not use.
 * @default 0
 *
 * @param SwAutumn:num
 * @text Autumn Switch
 * @parent SwSeasonType
 * @type switch
 * @desc Turns on when season is a "Autumn" month.
 * Leave at 0 to not use.
 * @default 0
 *
 * @param SwWinter:num
 * @text Winter Switch
 * @parent SwSeasonType
 * @type switch
 * @desc Turns on when season is a "Winter" month.
 * Leave at 0 to not use.
 * @default 0
 * 
 * @param SwDayType
 * @text Days
 * @parent Switches
 *
 * @param SwWeekday:num
 * @text Weekday Switch
 * @parent SwDayType
 * @type switch
 * @desc Turns on when day is "Weekday".
 * Leave at 0 to not use.
 * @default 0
 *
 * @param SwWeekend:num
 * @text Weekend Switch
 * @parent SwDayType
 * @type switch
 * @desc Turns on when day is "Weekend".
 * Leave at 0 to not use.
 * @default 0
 * 
 * @param SwHourType
 * @text Hours
 * @parent Switches
 *
 * @param SwDawn:num
 * @text Dawn Switch
 * @parent SwHourType
 * @type switch
 * @desc Turns on when time is "Dawn" hours.
 * Leave at 0 to not use.
 * @default 0
 *
 * @param SwDay:num
 * @text Day Switch
 * @parent SwHourType
 * @type switch
 * @desc Turns on when time is "Day" hours.
 * Leave at 0 to not use.
 * @default 0
 *
 * @param SwDusk:num
 * @text Dusk Switch
 * @parent SwHourType
 * @type switch
 * @desc Turns on when time is "Dusk" hours.
 * Leave at 0 to not use.
 * @default 0
 *
 * @param SwNight:num
 * @text Night Switch
 * @parent SwHourType
 * @type switch
 * @desc Turns on when time is "Night" hours.
 * Leave at 0 to not use.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * HUD Sprites Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~HudSprite:
 *
 * @param General
 * @text General
 *
 * @param Enable:eval
 * @text Enabled?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables usage of the Date/Time HUD.
 * @default true
 *
 * @param Show:eval
 * @text Show by Default
 * @parent General
 * @type boolean
 * @on Show
 * @off Hidden
 * @desc Sets up default visibility of the Date/Time HUD.
 * Individual maps can be adjusted by notetags.
 * @default true
 *
 * @param OpacitySpeed:num
 * @text Opacity Speed
 * @parent General
 * @desc How fast does fade in/out work?
 * Lower is slower. Higher is faster.
 * @default 16
 *
 * @param Position
 * @text Position
 * @parent General
 * 
 * @param PositionX:num
 * @text Position X
 * @parent Position
 * @desc How much to position the HUD's X by.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param PositionY:num
 * @text Position Y
 * @parent Position
 * @desc How much to position the HUD's Y by.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Season
 * @text Season Sprite
 *
 * @param SeasonEnable:eval
 * @text Enabled?
 * @parent Season
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables usage of this sprite.
 * @default true
 *
 * @param SeasonOpacity:num
 * @text Opacity
 * @parent Season
 * @type number
 * @min 0
 * @max 255
 * @desc What is the default opacity for this sprite?
 * Use a value between 0 and 255.
 * @default 128
 *
 * @param SeasonAnchor
 * @text Anchor
 * @parent Season
 * 
 * @param SeasonAnchorX:num
 * @text Anchor X
 * @parent SeasonAnchor
 * @desc Anchor X value for this sprite.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 * 
 * @param SeasonAnchorY:num
 * @text Anchor Y
 * @parent SeasonAnchor
 * @desc Anchor Y value for this sprite.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @param SeasonOffset
 * @text Offset
 * @parent Season
 * 
 * @param SeasonOffsetX:num
 * @text Offset X
 * @parent SeasonOffset
 * @desc How much to offset this sprite's X by.
 * Negative: left. Positive: right.
 * @default +48
 * 
 * @param SeasonOffsetY:num
 * @text Offset Y
 * @parent SeasonOffset
 * @desc How much to offset this sprite's Y by.
 * Negative: up. Positive: down.
 * @default +48
 *
 * @param SeasonScale
 * @text Scale
 * @parent Season
 * 
 * @param SeasonScaleX:num
 * @text Scale X
 * @parent SeasonScale
 * @desc What is the scale used for this sprite icon's X?
 * 0.0 - 0%; 0.5 - 50%; 1.0 - 100%; 1.5 - 150%; 2.0 - 200%
 * @default 3.0
 * 
 * @param SeasonScaleY:num
 * @text Scale Y
 * @parent SeasonScale
 * @desc What is the scale used for this sprite icon's Y?
 * 0.0 - 0%; 0.5 - 50%; 1.0 - 100%; 1.5 - 150%; 2.0 - 200%
 * @default 3.0
 *
 * @param SeasonIcons
 * @text Icons
 * @parent Season
 * 
 * @param SeasonIconSpring:num
 * @text Spring Icon
 * @parent SeasonIcons
 * @desc What icon is used for spring months?
 * Ignore if there is an image equivalent.
 * @default 69
 * 
 * @param SeasonIconSummer:num
 * @text Summer Icon
 * @parent SeasonIcons
 * @desc What icon is used for summer months?
 * Ignore if there is an image equivalent.
 * @default 70
 * 
 * @param SeasonIconAutumn:num
 * @text Autumn Icon
 * @parent SeasonIcons
 * @desc What icon is used for autumn months?
 * Ignore if there is an image equivalent.
 * @default 68
 * 
 * @param SeasonIconWinter:num
 * @text Winter Icon
 * @parent SeasonIcons
 * @desc What icon is used for winter months?
 * Ignore if there is an image equivalent.
 * @default 65
 *
 * @param SeasonImages
 * @text Images
 * @parent Season
 * 
 * @param SeasonImageSpring:str
 * @text Spring Image
 * @parent SeasonImages
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What image is used for spring months?
 * Ignores any icon equivalents.
 * @default 
 * 
 * @param SeasonImageSummer:str
 * @text Summer Image
 * @parent SeasonImages
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What image is used for summer months?
 * Ignores any icon equivalents.
 * @default 
 * 
 * @param SeasonImageAutumn:str
 * @text Autumn Image
 * @parent SeasonImages
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What image is used for autumn months?
 * Ignores any icon equivalents.
 * @default 
 * 
 * @param SeasonImageWinter:str
 * @text Winter Image
 * @parent SeasonImages
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What image is used for winter months?
 * Ignores any icon equivalents.
 * @default 
 *
 * @param DayCycle
 * @text DayCycle Sprite
 *
 * @param DayCycleEnable:eval
 * @text Enabled?
 * @parent DayCycle
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables usage of this sprite.
 * @default true
 *
 * @param DayCycleOpacity:num
 * @text Opacity
 * @parent DayCycle
 * @type number
 * @min 0
 * @max 255
 * @desc What is the default opacity for this sprite?
 * Use a value between 0 and 255.
 * @default 128
 *
 * @param DayCycleAnchor
 * @text Anchor
 * @parent DayCycle
 * 
 * @param DayCycleAnchorX:num
 * @text Anchor X
 * @parent DayCycleAnchor
 * @desc Anchor X value for this sprite.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 * 
 * @param DayCycleAnchorY:num
 * @text Anchor Y
 * @parent DayCycleAnchor
 * @desc Anchor Y value for this sprite.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @param DayCycleOffset
 * @text Offset
 * @parent DayCycle
 * 
 * @param DayCycleOffsetX:num
 * @text Offset X
 * @parent DayCycleOffset
 * @desc How much to offset this sprite's X by.
 * Negative: left. Positive: right.
 * @default +144
 * 
 * @param DayCycleOffsetY:num
 * @text Offset Y
 * @parent DayCycleOffset
 * @desc How much to offset this sprite's Y by.
 * Negative: up. Positive: down.
 * @default +48
 *
 * @param DayCycleScale
 * @text Scale
 * @parent DayCycle
 * 
 * @param DayCycleScaleX:num
 * @text Scale X
 * @parent DayCycleScale
 * @desc What is the scale used for this sprite icon's X?
 * 0.0 - 0%; 0.5 - 50%; 1.0 - 100%; 1.5 - 150%; 2.0 - 200%
 * @default 3.0
 * 
 * @param DayCycleScaleY:num
 * @text Scale Y
 * @parent DayCycleScale
 * @desc What is the scale used for this sprite icon's Y?
 * 0.0 - 0%; 0.5 - 50%; 1.0 - 100%; 1.5 - 150%; 2.0 - 200%
 * @default 3.0
 *
 * @param DayCycleIcons
 * @text Icons
 * @parent DayCycle
 * 
 * @param DayCycleIconDawn:num
 * @text Dawn Icon
 * @parent DayCycleIcons
 * @desc What icon is used for dawn hours?
 * Ignore if there is an image equivalent.
 * @default 73
 * 
 * @param DayCycleIconDay:num
 * @text Day Icon
 * @parent DayCycleIcons
 * @desc What icon is used for day hours?
 * Ignore if there is an image equivalent.
 * @default 87
 * 
 * @param DayCycleIconDusk:num
 * @text Dusk Icon
 * @parent DayCycleIcons
 * @desc What icon is used for dusk hours?
 * Ignore if there is an image equivalent.
 * @default 74
 * 
 * @param DayCycleIconNight:num
 * @text Night Icon
 * @parent DayCycleIcons
 * @desc What icon is used for night?
 * Ignore if there is an image equivalent.
 * @default 88
 *
 * @param DayCycleImages
 * @text Images
 * @parent DayCycle
 * 
 * @param DayCycleImageDawn:str
 * @text Dawn Image
 * @parent DayCycleImages
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What image is used for dawn hours?
 * Ignores any icon equivalents.
 * @default 
 * 
 * @param DayCycleImageDay:str
 * @text Day Image
 * @parent DayCycleImages
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What image is used for day hours?
 * Ignores any icon equivalents.
 * @default 
 * 
 * @param DayCycleImageDusk:str
 * @text Dusk Image
 * @parent DayCycleImages
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What image is used for dusk hours?
 * Ignores any icon equivalents.
 * @default 
 * 
 * @param DayCycleImageNight:str
 * @text Night Image
 * @parent DayCycleImages
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What image is used for night hours?
 * Ignores any icon equivalents.
 * @default 
 *
 * @param WeekType
 * @text Weekday Type Sprite
 *
 * @param WeekTypeEnable:eval
 * @text Enabled?
 * @parent WeekType
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables usage of this sprite.
 * @default true
 *
 * @param WeekTypeOpacity:num
 * @text Opacity
 * @parent WeekType
 * @type number
 * @min 0
 * @max 255
 * @desc What is the default opacity for this sprite?
 * Use a value between 0 and 255.
 * @default 128
 *
 * @param WeekTypeAnchor
 * @text Anchor
 * @parent WeekType
 * 
 * @param WeekTypeAnchorX:num
 * @text Anchor X
 * @parent WeekTypeAnchor
 * @desc Anchor X value for this sprite.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 * 
 * @param WeekTypeAnchorY:num
 * @text Anchor Y
 * @parent WeekTypeAnchor
 * @desc Anchor Y value for this sprite.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @param WeekTypeOffset
 * @text Offset
 * @parent WeekType
 * 
 * @param WeekTypeOffsetX:num
 * @text Offset X
 * @parent WeekTypeOffset
 * @desc How much to offset this sprite's X by.
 * Negative: left. Positive: right.
 * @default +240
 * 
 * @param WeekTypeOffsetY:num
 * @text Offset Y
 * @parent WeekTypeOffset
 * @desc How much to offset this sprite's Y by.
 * Negative: up. Positive: down.
 * @default +48
 *
 * @param WeekTypeScale
 * @text Scale
 * @parent WeekType
 * 
 * @param WeekTypeScaleX:num
 * @text Scale X
 * @parent WeekTypeScale
 * @desc What is the scale used for this sprite icon's X?
 * 0.0 - 0%; 0.5 - 50%; 1.0 - 100%; 1.5 - 150%; 2.0 - 200%
 * @default 3.0
 * 
 * @param WeekTypeScaleY:num
 * @text Scale Y
 * @parent WeekTypeScale
 * @desc What is the scale used for this sprite icon's Y?
 * 0.0 - 0%; 0.5 - 50%; 1.0 - 100%; 1.5 - 150%; 2.0 - 200%
 * @default 3.0
 *
 * @param WeekTypeIcons
 * @text Icons
 * @parent WeekType
 * 
 * @param WeekTypeIconWeekday:num
 * @text Weekday Icon
 * @parent WeekTypeIcons
 * @desc What icon is used for weekdays?
 * Ignore if there is an image equivalent.
 * @default 75
 * 
 * @param WeekTypeIconWeekend:num
 * @text Weekend Icon
 * @parent WeekTypeIcons
 * @desc What icon is used for weekends?
 * Ignore if there is an image equivalent.
 * @default 84
 *
 * @param WeekTypeImages
 * @text Images
 * @parent WeekType
 * 
 * @param WeekTypeImageWeekday:str
 * @text Weekday Image
 * @parent WeekTypeImages
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What image is used for weekdays?
 * Ignores any icon equivalents.
 * @default 
 * 
 * @param WeekTypeImageWeekend:str
 * @text Weekend Image
 * @parent WeekTypeImages
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc What image is used for weekends?
 * Ignores any icon equivalents.
 * @default 
 *
 * @param Year
 * @text Year Sprite
 *
 * @param YearEnable:eval
 * @text Enabled?
 * @parent Year
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables usage of this sprite.
 * @default true
 *
 * @param YearAngle:num
 * @text Angle
 * @parent Year
 * @desc What is the angle used for this sprite?
 * Value is written in degrees.
 * @default +15
 *
 * @param YearFmt:str
 * @text Year Format
 * @parent Year
 * @desc How is the year written when it's less than 4 digits?
 * %1 - Current Year
 * @default Year %1
 *
 * @param YearSize
 * @text Size
 * @parent Year
 * 
 * @param YearSizeWidth:num
 * @text Width
 * @parent YearSize
 * @type number
 * @min 1
 * @desc What is the width of this sprite in pixels?
 * @default 200
 * 
 * @param YearSizeHeight:num
 * @text Height
 * @parent YearSize
 * @type number
 * @min 1
 * @desc What is the height of this sprite in pixels?
 * @default 40
 *
 * @param YearAnchor
 * @text Anchor
 * @parent Year
 * 
 * @param YearAnchorX:num
 * @text Anchor X
 * @parent YearAnchor
 * @desc Anchor X value for this sprite.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 * 
 * @param YearAnchorY:num
 * @text Anchor Y
 * @parent YearAnchor
 * @desc Anchor Y value for this sprite.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @param YearOffset
 * @text Offset
 * @parent Year
 * 
 * @param YearOffsetX:num
 * @text Offset X
 * @parent YearOffset
 * @desc How much to offset this sprite's X by.
 * Negative: left. Positive: right.
 * @default +48
 * 
 * @param YearOffsetY:num
 * @text Offset Y
 * @parent YearOffset
 * @desc How much to offset this sprite's Y by.
 * Negative: up. Positive: down.
 * @default +30
 *
 * @param Year_DrawText_JS:func
 * @text JS: Draw Text
 * @parent Year
 * @type note
 * @desc Code used to draw the text for this sprite.
 * @default "// Declare Constants\nconst bitmap = arguments[0];\nconst year = TimeManager.getYear();\nlet text = String(year);\nif (text.length < 4) {\n    const fmt = TextManager.DATE_TIME_SYSTEM.yearFmt;\n    text = fmt.format(year);\n}\n\n// Change Font Settings\nbitmap.fontFace = 'Times New Roman';\nbitmap.fontSize = 32;\nbitmap.outlineWidth = 5;\nbitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';\n\n// Draw Text\nbitmap.drawText(text, 0, 0, bitmap.width, bitmap.height, 'center');"
 *
 * @param Month
 * @text Month Sprite
 *
 * @param MonthEnable:eval
 * @text Enabled?
 * @parent Month
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables usage of this sprite.
 * @default true
 *
 * @param MonthAngle:num
 * @text Angle
 * @parent Month
 * @desc What is the angle used for this sprite?
 * Value is written in degrees.
 * @default +0
 *
 * @param MonthSize
 * @text Size
 * @parent Month
 * 
 * @param MonthSizeWidth:num
 * @text Width
 * @parent MonthSize
 * @type number
 * @min 1
 * @desc What is the width of this sprite in pixels?
 * @default 200
 * 
 * @param MonthSizeHeight:num
 * @text Height
 * @parent MonthSize
 * @type number
 * @min 1
 * @desc What is the height of this sprite in pixels?
 * @default 40
 *
 * @param MonthAnchor
 * @text Anchor
 * @parent Month
 * 
 * @param MonthAnchorX:num
 * @text Anchor X
 * @parent MonthAnchor
 * @desc Anchor X value for this sprite.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 * 
 * @param MonthAnchorY:num
 * @text Anchor Y
 * @parent MonthAnchor
 * @desc Anchor Y value for this sprite.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @param MonthOffset
 * @text Offset
 * @parent Month
 * 
 * @param MonthOffsetX:num
 * @text Offset X
 * @parent MonthOffset
 * @desc How much to offset this sprite's X by.
 * Negative: left. Positive: right.
 * @default +125
 * 
 * @param MonthOffsetY:num
 * @text Offset Y
 * @parent MonthOffset
 * @desc How much to offset this sprite's Y by.
 * Negative: up. Positive: down.
 * @default +20
 *
 * @param Month_DrawText_JS:func
 * @text JS: Draw Text
 * @parent Month
 * @type note
 * @desc Code used to draw the text for this sprite.
 * @default "// Declare Constants\nconst bitmap = arguments[0];\nconst monthID = TimeManager.getMonth();\nconst monthName = TextManager.getMonthName(monthID);\nconst monthAbbr = TextManager.getMonthAbbr(monthID);\n\n// Change Font Settings\nbitmap.fontFace = 'Times New Roman';\nbitmap.fontSize = 24;\nbitmap.outlineWidth = 5;\nbitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';\n\n// Draw Text\nbitmap.drawText(monthAbbr, 0, 0, bitmap.width, bitmap.height, 'center');"
 *
 * @param Date
 * @text Date Sprite
 *
 * @param DateEnable:eval
 * @text Enabled?
 * @parent Date
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables usage of this sprite.
 * @default true
 *
 * @param DateAngle:num
 * @text Angle
 * @parent Date
 * @desc What is the angle used for this sprite?
 * Value is written in degrees.
 * @default +0
 *
 * @param DateSize
 * @text Size
 * @parent Date
 * 
 * @param DateSizeWidth:num
 * @text Width
 * @parent DateSize
 * @type number
 * @min 1
 * @desc What is the width of this sprite in pixels?
 * @default 200
 * 
 * @param DateSizeHeight:num
 * @text Height
 * @parent DateSize
 * @type number
 * @min 1
 * @desc What is the height of this sprite in pixels?
 * @default 40
 *
 * @param DateAnchor
 * @text Anchor
 * @parent Date
 * 
 * @param DateAnchorX:num
 * @text Anchor X
 * @parent DateAnchor
 * @desc Anchor X value for this sprite.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 * 
 * @param DateAnchorY:num
 * @text Anchor Y
 * @parent DateAnchor
 * @desc Anchor Y value for this sprite.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @param DateOffset
 * @text Offset
 * @parent Date
 * 
 * @param DateOffsetX:num
 * @text Offset X
 * @parent DateOffset
 * @desc How much to offset this sprite's X by.
 * Negative: left. Positive: right.
 * @default +175
 * 
 * @param DateOffsetY:num
 * @text Offset Y
 * @parent DateOffset
 * @desc How much to offset this sprite's Y by.
 * Negative: up. Positive: down.
 * @default +20
 *
 * @param Date_DrawText_JS:func
 * @text JS: Draw Text
 * @parent Date
 * @type note
 * @desc Code used to draw the text for this sprite.
 * @default "// Declare Constants\nconst bitmap = arguments[0];\nconst date = TimeManager.getDate();\n\n// Change Font Settings\nbitmap.fontFace = 'Times New Roman';\nbitmap.fontSize = 36;\nbitmap.outlineWidth = 5;\nbitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';\n\n// Draw Text\nbitmap.drawText(date, 0, 0, bitmap.width, bitmap.height, 'center');"
 *
 * @param Weekday
 * @text Weekday Sprite
 *
 * @param WeekdayEnable:eval
 * @text Enabled?
 * @parent Weekday
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables usage of this sprite.
 * @default true
 *
 * @param WeekdayAngle:num
 * @text Angle
 * @parent Weekday
 * @desc What is the angle used for this sprite?
 * Value is written in degrees.
 * @default -15
 *
 * @param WeekdaySize
 * @text Size
 * @parent Weekday
 * 
 * @param WeekdaySizeWidth:num
 * @text Width
 * @parent WeekdaySize
 * @type number
 * @min 1
 * @desc What is the width of this sprite in pixels?
 * @default 200
 * 
 * @param WeekdaySizeHeight:num
 * @text Height
 * @parent WeekdaySize
 * @type number
 * @min 1
 * @desc What is the height of this sprite in pixels?
 * @default 40
 *
 * @param WeekdayAnchor
 * @text Anchor
 * @parent Weekday
 * 
 * @param WeekdayAnchorX:num
 * @text Anchor X
 * @parent WeekdayAnchor
 * @desc Anchor X value for this sprite.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 * 
 * @param WeekdayAnchorY:num
 * @text Anchor Y
 * @parent WeekdayAnchor
 * @desc Anchor Y value for this sprite.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @param WeekdayOffset
 * @text Offset
 * @parent Weekday
 * 
 * @param WeekdayOffsetX:num
 * @text Offset X
 * @parent WeekdayOffset
 * @desc How much to offset this sprite's X by.
 * Negative: left. Positive: right.
 * @default +240
 * 
 * @param WeekdayOffsetY:num
 * @text Offset Y
 * @parent WeekdayOffset
 * @desc How much to offset this sprite's Y by.
 * Negative: up. Positive: down.
 * @default +30
 *
 * @param Weekday_DrawText_JS:func
 * @text JS: Draw Text
 * @parent Weekday
 * @type note
 * @desc Code used to draw the text for this sprite.
 * @default "// Declare Constants\nconst bitmap = arguments[0];\nconst weekdayID = TimeManager.getWeekday();\nconst weekdayName = TextManager.getWeekdayName(weekdayID);\nconst weekdayAbbr = TextManager.getWeekdayAbbr(weekdayID);\n\n// Change Font Settings\nbitmap.fontFace = 'Times New Roman';\nbitmap.fontSize = 32;\nbitmap.outlineWidth = 5;\nbitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';\n\n// Draw Text\nbitmap.drawText(weekdayAbbr, 0, 0, bitmap.width, bitmap.height, 'center');"
 *
 * @param Time
 * @text Time Sprite
 *
 * @param TimeEnable:eval
 * @text Enabled?
 * @parent Time
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables usage of this sprite.
 * @default true
 *
 * @param TimeAngle:num
 * @text Angle
 * @parent Time
 * @desc What is the angle used for this sprite?
 * Value is written in degrees.
 * @default +0
 *
 * @param TimeSize
 * @text Size
 * @parent Time
 * 
 * @param TimeSizeWidth:num
 * @text Width
 * @parent TimeSize
 * @type number
 * @min 1
 * @desc What is the width of this sprite in pixels?
 * @default 200
 * 
 * @param TimeSizeHeight:num
 * @text Height
 * @parent TimeSize
 * @type number
 * @min 1
 * @desc What is the height of this sprite in pixels?
 * @default 40
 *
 * @param TimeAnchor
 * @text Anchor
 * @parent Time
 * 
 * @param TimeAnchorX:num
 * @text Anchor X
 * @parent TimeAnchor
 * @desc Anchor X value for this sprite.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 * 
 * @param TimeAnchorY:num
 * @text Anchor Y
 * @parent TimeAnchor
 * @desc Anchor Y value for this sprite.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @param TimeOffset
 * @text Offset
 * @parent Time
 * 
 * @param TimeOffsetX:num
 * @text Offset X
 * @parent TimeOffset
 * @desc How much to offset this sprite's X by.
 * Negative: left. Positive: right.
 * @default +144
 * 
 * @param TimeOffsetY:num
 * @text Offset Y
 * @parent TimeOffset
 * @desc How much to offset this sprite's Y by.
 * Negative: up. Positive: down.
 * @default +60
 *
 * @param Time_DrawText_JS:func
 * @text JS: Draw Text
 * @parent Time
 * @type note
 * @desc Code used to draw the text for this sprite.
 * @default "// Declare Constants\nconst bitmap = arguments[0];\nconst hour = TimeManager.getHour();\nconst hourMilitary = TextManager.getMilitaryHour(hour);\nconst hourMeridiem = TextManager.getMeridiemHour(hour);\nconst minute = TimeManager.getMinute().padZero(2);\nconst meridiem = TextManager.getMeridiemForHour(hour);\n\n// Determine Time\nlet time = '%1:%2'.format(hourMeridiem, minute);;\ntime += ' ' + meridiem;\n\n// Change Font Settings\nbitmap.fontFace = 'Times New Roman';\nbitmap.fontSize = 40;\nbitmap.outlineWidth = 6;\nbitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';\n\n// Draw Text\nbitmap.drawText(time, 0, 0, bitmap.width, bitmap.height, 'center');"
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
 * @desc Add the 'Date Time HUD' option to the Options menu?
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
 * @default Show Date & Time
 *
 */
//=============================================================================

const _0x1e0c1e=_0x285e;(function(_0x297231,_0xc2b560){const _0x1835fd=_0x285e,_0x41aa6d=_0x297231();while(!![]){try{const _0xe6af27=-parseInt(_0x1835fd(0x321))/0x1*(parseInt(_0x1835fd(0x380))/0x2)+parseInt(_0x1835fd(0x1e4))/0x3+parseInt(_0x1835fd(0x2ac))/0x4*(parseInt(_0x1835fd(0x1cc))/0x5)+parseInt(_0x1835fd(0x2e2))/0x6+-parseInt(_0x1835fd(0x2ca))/0x7*(-parseInt(_0x1835fd(0x268))/0x8)+-parseInt(_0x1835fd(0x19e))/0x9+parseInt(_0x1835fd(0x1d9))/0xa*(-parseInt(_0x1835fd(0x3b6))/0xb);if(_0xe6af27===_0xc2b560)break;else _0x41aa6d['push'](_0x41aa6d['shift']());}catch(_0x2f9e77){_0x41aa6d['push'](_0x41aa6d['shift']());}}}(_0x3be9,0x8da9d));var label='DateTimeSystem',tier=tier||0x0,dependencies=[_0x1e0c1e(0x280)],pluginData=$plugins['filter'](function(_0x48d192){const _0x269180=_0x1e0c1e;return _0x48d192['status']&&_0x48d192[_0x269180(0x2fd)][_0x269180(0x36f)]('['+label+']');})[0x0];function _0x285e(_0x3345c3,_0x5484ae){const _0x3be95a=_0x3be9();return _0x285e=function(_0x285eab,_0xbca14e){_0x285eab=_0x285eab-0x171;let _0x37342b=_0x3be95a[_0x285eab];return _0x37342b;},_0x285e(_0x3345c3,_0x5484ae);}VisuMZ[label]['Settings']=VisuMZ[label][_0x1e0c1e(0x42c)]||{},VisuMZ[_0x1e0c1e(0x19a)]=function(_0x2fb21b,_0xbf9cc0){const _0x103109=_0x1e0c1e;for(const _0x37e8fe in _0xbf9cc0){if(_0x37e8fe['match'](/(.*):(.*)/i)){if(_0x103109(0x3c9)===_0x103109(0x3c9)){const _0x51f973=String(RegExp['$1']),_0x3c13f2=String(RegExp['$2'])[_0x103109(0x177)]()['trim']();let _0x360218,_0x459f31,_0x58c35f;switch(_0x3c13f2){case'NUM':_0x360218=_0xbf9cc0[_0x37e8fe]!==''?Number(_0xbf9cc0[_0x37e8fe]):0x0;break;case _0x103109(0x41f):_0x459f31=_0xbf9cc0[_0x37e8fe]!==''?JSON['parse'](_0xbf9cc0[_0x37e8fe]):[],_0x360218=_0x459f31[_0x103109(0x2d1)](_0x54ee67=>Number(_0x54ee67));break;case _0x103109(0x220):_0x360218=_0xbf9cc0[_0x37e8fe]!==''?eval(_0xbf9cc0[_0x37e8fe]):null;break;case'ARRAYEVAL':_0x459f31=_0xbf9cc0[_0x37e8fe]!==''?JSON['parse'](_0xbf9cc0[_0x37e8fe]):[],_0x360218=_0x459f31[_0x103109(0x2d1)](_0x1ffae2=>eval(_0x1ffae2));break;case _0x103109(0x282):_0x360218=_0xbf9cc0[_0x37e8fe]!==''?JSON[_0x103109(0x388)](_0xbf9cc0[_0x37e8fe]):'';break;case _0x103109(0x27e):_0x459f31=_0xbf9cc0[_0x37e8fe]!==''?JSON[_0x103109(0x388)](_0xbf9cc0[_0x37e8fe]):[],_0x360218=_0x459f31['map'](_0x4423cf=>JSON[_0x103109(0x388)](_0x4423cf));break;case _0x103109(0x406):_0x360218=_0xbf9cc0[_0x37e8fe]!==''?new Function(JSON[_0x103109(0x388)](_0xbf9cc0[_0x37e8fe])):new Function('return\x200');break;case'ARRAYFUNC':_0x459f31=_0xbf9cc0[_0x37e8fe]!==''?JSON[_0x103109(0x388)](_0xbf9cc0[_0x37e8fe]):[],_0x360218=_0x459f31['map'](_0x1c282f=>new Function(JSON[_0x103109(0x388)](_0x1c282f)));break;case _0x103109(0x261):_0x360218=_0xbf9cc0[_0x37e8fe]!==''?String(_0xbf9cc0[_0x37e8fe]):'';break;case'ARRAYSTR':_0x459f31=_0xbf9cc0[_0x37e8fe]!==''?JSON['parse'](_0xbf9cc0[_0x37e8fe]):[],_0x360218=_0x459f31[_0x103109(0x2d1)](_0x964c0f=>String(_0x964c0f));break;case _0x103109(0x460):_0x58c35f=_0xbf9cc0[_0x37e8fe]!==''?JSON[_0x103109(0x388)](_0xbf9cc0[_0x37e8fe]):{},_0x360218=VisuMZ[_0x103109(0x19a)]({},_0x58c35f);break;case _0x103109(0x2dc):_0x459f31=_0xbf9cc0[_0x37e8fe]!==''?JSON[_0x103109(0x388)](_0xbf9cc0[_0x37e8fe]):[],_0x360218=_0x459f31['map'](_0x477841=>VisuMZ[_0x103109(0x19a)]({},JSON['parse'](_0x477841)));break;default:continue;}_0x2fb21b[_0x51f973]=_0x360218;}else{_0xe84c5c[_0x103109(0x19a)](_0x1b5d01,_0x58d0b8);const _0x5e755c=_0x4e436f[_0x103109(0x467)]||0x0,_0x514d4d=_0x1e3949[_0x103109(0x2e9)]||0x0,_0x284cca=_0x338da5[_0x103109(0x332)],_0x1c8204=_0x14829d[_0x103109(0x326)];_0x5bc60c[_0x103109(0x1a0)]()[_0x103109(0x40a)]=_0x5e755c;if(!_0x284cca){const _0x4e97df=_0x4826d7[_0x103109(0x3f4)][_0x103109(0x3be)][_0x103109(0x1e9)]-0x1;_0x3b9eb9['gameTimeData']()['hour']=_0x153fd0[_0x103109(0x1a0)]()[_0x103109(0x40a)][_0x103109(0x379)](0x0,_0x4e97df);}_0x14e109[_0x103109(0x44b)](),_0x367aa8[_0x103109(0x1a0)]()[_0x103109(0x1f1)]=_0x514d4d;if(!_0x1c8204){const _0x580943=_0x33b470['GameTimeSettings'][_0x103109(0x3be)]['minutesInHour']-0x1;_0x39463e[_0x103109(0x1a0)]()[_0x103109(0x1f1)]=_0x2c1034[_0x103109(0x1a0)]()[_0x103109(0x1f1)]['clamp'](0x0,_0x580943);}_0x550e8a[_0x103109(0x3b5)](),_0x8731cc[_0x103109(0x196)]();}}}return _0x2fb21b;},(_0x4e6da2=>{const _0x1ebd5c=_0x1e0c1e,_0x257026=_0x4e6da2[_0x1ebd5c(0x179)];for(const _0x5722c4 of dependencies){if('iyjzv'===_0x1ebd5c(0x357))return _0x35730b[_0x3fd9b9][_0x1ebd5c(0x2e8)];else{if(!Imported[_0x5722c4]){alert(_0x1ebd5c(0x3e0)['format'](_0x257026,_0x5722c4)),SceneManager[_0x1ebd5c(0x401)]();break;}}}const _0x15da66=_0x4e6da2[_0x1ebd5c(0x2fd)];if(_0x15da66[_0x1ebd5c(0x264)](/\[Version[ ](.*?)\]/i)){const _0x54f442=Number(RegExp['$1']);if(_0x54f442!==VisuMZ[label][_0x1ebd5c(0x3fd)]){if(_0x1ebd5c(0x314)===_0x1ebd5c(0x314))alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x1ebd5c(0x3f1)](_0x257026,_0x54f442)),SceneManager[_0x1ebd5c(0x401)]();else{const _0x216e60=_0x332652[_0x1ebd5c(0x26f)],_0x28c44e=_0x5a049a[_0x1ebd5c(0x2cf)][_0x1ebd5c(0x36f)](_0x33f15c[_0x1ebd5c(0x40a)]);_0x1fe2f4[_0x1ebd5c(0x2d6)][_0x1ebd5c(0x3df)](_0x216e60,_0x28c44e);}}}if(_0x15da66[_0x1ebd5c(0x264)](/\[Tier[ ](\d+)\]/i)){if(_0x1ebd5c(0x27f)!==_0x1ebd5c(0x27f)){if(this[_0x1ebd5c(0x378)]===_0x23b8fc)this[_0x1ebd5c(0x1d7)]();return this[_0x1ebd5c(0x378)];}else{const _0x53936e=Number(RegExp['$1']);if(_0x53936e<tier){if('nzSbk'!==_0x1ebd5c(0x330)){const _0x58de57=_0x28c89b[_0x1ebd5c(0x34c)][_0x1ebd5c(0x1f6)];this['x']=_0x58de57['position']['x'],this['y']=_0x58de57[_0x1ebd5c(0x1c1)]['y'],!this[_0x1ebd5c(0x285)]()&&(this['opacity']=0x0);}else alert(_0x1ebd5c(0x22b)[_0x1ebd5c(0x3f1)](_0x257026,_0x53936e,tier)),SceneManager[_0x1ebd5c(0x401)]();}else _0x1ebd5c(0x2d3)==='eCRLu'?tier=Math[_0x1ebd5c(0x189)](_0x53936e,tier):this[_0x1ebd5c(0x308)]=_0x5f5317(_0x56227f['$1'])[_0x1ebd5c(0x324)]();}}VisuMZ[_0x1ebd5c(0x19a)](VisuMZ[label][_0x1ebd5c(0x42c)],_0x4e6da2[_0x1ebd5c(0x449)]);})(pluginData);if(VisuMZ[_0x1e0c1e(0x3e2)][_0x1e0c1e(0x3fd)]<1.77){let text='';text+='VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20',text+='in\x20order\x20for\x20VisuMZ_2_DateTimeSystem\x20to\x20work.',alert(text),SceneManager['exit']();}function _0x3be9(){const _0x462519=['trim','OzuJp','MinuteOverflow','Scene_Load_onLoadSuccess','realTimeSeason','_timeOverlay','kvoro','ZqGPY','_cache_season','gameTimeMinute','calcTotalDaysBetweenDates','time','nzSbk','WeekdaySizeHeight','HourOverflow','RegExp','GameTime_TimeDilation','DateOverflow','jswvz','Game_BattlerBase_prepareResetStateCounts','split','sCDTP','recordGameTime','isNotUsingTime','DuskHours','HEhWy','_dateTimeHudSprite','Weekday','initDateTimeSystemSaveTime','opacity','WeekdayType','convertDateTimeRealEscapeCodes','_%1Sprite','xueBT','GameTimeGeneral','ajOdY','oNlHe','maxCommands','kwoKK','_cache_date','SETTINGS','addDateTimeHudOptionCommand','value','minutesInHour','battlebackSummer2','year','clear','YzSHA','tilesetDay','WeekTypeIconWeekday','UNcIU','FXuDO','PnaVH','amoZV','updateBaseFilters','anchor','%1%2%3','number','GameTime_PauseTimeEnd','getWeekday','NoTimeTone','updateTimeTone','starting','HevjN','VisuMZ_1_ItemsEquipsCore','updateWeektypeSpriteBitmap','getTime','UpdateSpriteIcon','item','_needsRefresh','_lastTime','battlebackAutumn1','skillDmgCond','StartMonth','TimeAngle','includes','SwNight','upauseGameTime','processDateTimeSystemSaveTimeDifference','readFlag','SwAutumn','processSeasonTilesetNotetags','bind','getMonth','_dateTimeType','clamp','isRealTime','createTroopNote','StartMinute','AdjustRect','Timeless','SeasonImageSummer','6zTDnMD','Error','GameTime_RecordToVariables','NJrxA','full','RealTimeData','_seasonSprite','YearAnchorX','parse','tBuJm','DayCycleIconDay','angle','VisuMZ_2_LightingEffects','isUseTimeTone','getHours','getHoursInDay','ceil','hexToArray','regionBattlebacks','getYear','setValue','PWbiv','DayCycleIconDawn','AddOption','gameTimeHour','abbr','updateGameTimeData','SeasonAnchorX','TimeDusk','Options','convertDateTimeEscapeCodes','_daycycleSprite','PositionY','wAKOu','Months','meetsDateTimeSystemConditions','round','icons','This\x20is\x20a\x20static\x20class','_stateTurns','battlebackSpring1','ConfigManager_makeData','gameTimeDate','WeekdayOffsetY','_lastMin','getGameTimeTotalWeekdays','createTimeToneFilter','CheckBaseTroopID','weektype','HudSprite','isDateTimeSystemHudVisible','_battleback2Name','Date_DrawText_JS','checkGameTimeMinuteOverflow','154jumXaq','iconHeight','DFkNp','Window_ShopBuy_goodsToItem','MonthFull%1','realTimeHour','vRWou','Error\x20with\x20Troop\x20ID\x20','timeStruct','battlebackAutumn2','updateSeasonSpriteBitmap','pad','rxGoX','weekday','realTimeYear','vehicleEnterExit','_lastSaveTime','getMinutes','lkdIe','ndJpO','blt','VarFullDate','military','UpdateSpriteImage','vjqXK','isDateTimeHudVisible','UOQUs','KIrxn','GNwsL','updateTimeOverlay','gameTime','isSceneMap','#ffffff','LZWxA','second','create','PjGeJ','loadSystem','ChangeAllVariables','createSubSprite','Scene_Boot_onDatabaseLoaded','ChangeSwitch','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','battlebackWinter2','CoreEngine','getMeridiemHour','adjustSkillCost','iconWidth','lbxLW','pauseGameTime','updateRealTimeSwitchesVariables','updateDateSpriteBitmap','PgfcJ','VarWeekday','gaUvW','processSeasonBattlebackNotetags','nRxxW','enable','GameTimeOverlay','format','autumn','prepareResetStateCounts','GameTimeSettings','StartWeekday','WeekTypeImageWeekend','matchRangeCondition','WeekTypeScaleY','MFGHI','changeTileset','fullDate','EYFzp','version','_timeSprite','changeMsPerGameTimeMinute','real','exit','mzvVo','initialize','canUpdateGameTime','convertDateTimeGameEscapeCodes','FUNC','registerCommand','getWeekdayName','LoadMinDiff','hour','dawn','addGeneralOptions','gameOverlay','YearAnchorY','_timeToneFilter','Scene_Options_maxCommands','Game_Action_applyVariance','synchToRealTime','DefaultTimeType','PwsQF','getGameTimeWeekdayData','SwWinter','uznqs','getTimeOverlay','addDateTimeSystemCommands','getMonthName','MonthOverflow','battlebackWinter1','_weekdaySprite','startGameTime','ARRAYNUM','Game_Screen_update','yWXQi','egxwH','Weekday_DrawText_JS','YearSizeWidth','nextHour','SeasonOpacity','date','updateYearSpriteBitmap','_dateTimeHudVisible','tilesetSummer','TimeOffsetX','Settings','iTEWP','WeekTypeImageWeekday','Year_DrawText_JS','goodsToItem','updateDateTimeSystem','_monthSprite','KBAlJ','uMSgK','dusk','Year','Date','gameTimeDayCycle','shopBuyCondition','getTimeType','isMoveRouteForcing','tgHCm','XjVdR','mjkvs','DfUcs','addChild','TimeAM','MAkNw','LvQGO','initMembers','YgZjL','totalWeekdays','WeekendName','Game_System_onAfterLoad','parameters','WeekTypeEnable','checkGameTimeHourOverflow','DayCycleImageNight','Window_Base_preConvertEscapeCharacters','PLFhk','Weekends','createBaseFilters','msLimit','CalcSkillDmgRate','eventRunning','enabled','bAOza','WeekdaySizeWidth','EydIC','setupSeasonalBattlebackRegions','EaIYg','SwSummer','realTimeMeridiemFor','ykkpF','eAjFR','_cache_daycycle','_cache_minute','STRUCT','getMilitaryHour','eEAgF','realTimeMinute','applyData','zDrAU','oeSYd','Hour','Game_Screen_clear','QMpTI','GameTime_PauseTimeStart','meetsGameTimeUpdateCompatibilityConditions','meetsSkillConditions','_vehicleGettingOn','GameTimeVocab','_usesTimeTone','_debugActive','sQvSU','xkRWw','updateGameTimeSwitchesVariables','BvMOY','DrawHudMonth','DateAnchorY','WeekdayAbbr%1','_cache_month','RRthc','cADDL','updateDayCycleSpriteBitmap','WeekdayOverflow','game','ZKwRU','toUpperCase','ChangeAllSwitches','name','FoGwr','getDay','SeasonAnchorY','VisuMZ_1_SaveCore','synchToGameTime','stateTurnsCond','Time_DrawText_JS','gameTimeWeekDay','dLeeS','realTimeDate','_lastHour','recordRealTime','_scene','Month','eMgMa','max','increaseGameTimeData','getNextHour','gameTone','SSgwV','Game_Map_setup','realWeekDayType','checkSeason','scale','skillCostCond','KjAry','BfLur','Fwizk','forceRefreshHUD','meetsGameTimeUpdateParameterConditions','realTimeMeridiem','WeekTypeAnchorY','ConvertParams','SeasonWinter','tilesetSpring','Name','6309378WwimvX','WeekdayAnchorY','gameTimeData','DrawHudTime','getMinute','RealTime','TimeOffsetY','CalcShopPriceRate','checkGameTimeTotalDaysInMonth','GameTimeData','Spriteset_Base_createBaseFilters','GameTime_ChangeWeekdayTo','clearDateTimeSystem','pauseConditions','TimeDay','VarMonth','CheckGameTimeLeapYear','CheckGoodsAvailableToBuy','VarDate','Season','night','addCommand','SpUUw','mgxjr','SeasonIconSpring','StartDate','isBattleTest','WeekTypeOpacity','RKoPG','VarMinute','DATE_TIME_SYSTEM','YearSizeHeight','gameTimeYear','AAteI','DayCycleEnable','position','LJlTK','CwOgA','onAfterLoad','checkGameTimeDateOverflow','_baseSprite','updateTimeToneFilter','addLoadListener','nlLnE','offset','pJBHd','71970MuqoRM','bVtok','recordDateTimeSystemSaveTime','VisuMZ_1_EventsMoveCore','getTimeToneForHour','_regionBattleback2','getMinuteRaw','checkWeekdayType','SpringMonths','DawnHours','SeasonImageAutumn','setupDateTimeNotetags','BwAjg','351890OibOao','getTimeOverlayForHour','XAcxP','Tone%1','smooth','YearOffsetY','You\x20cannot\x20use\x20Date\x20&\x20Time\x20System\x20encounter\x20requirements\x20with\x20','Game_System_initialize','_cache_weekday','UYTmp','preConvertEscapeCharacters','2708628yAnyhb','_showDateTimeSystemHud','xsvfT','matchLineCondition','length','hoursInDay','winter','tileset','gameTimeMeridiemFor','SwWeekday','SHwwh','SeasonSpring','IKLXG','minute','PauseVehicleEntry','shopPriceCondition','_realTime','_date','container','forceRefresh','SeasonIconAutumn','SeasonAutumn','processGameTimeUpdate','miqUl','Game_BattlerBase_adjustSkillCost','Overlay%1','hDPgQ','_dateSprite','roundMinutes','Enable','Vnhdy','UpdateSpritePicture','_cache_year','prototype','isCurrentDateAhead','push','Game_BattlerBase_meetsSkillConditions','realTimeWeekDay','Show','Game_System_onBeforeSave','military\x20pad','fGkjU','SwDusk','makeData','vsfpi','getGameTimeTotalMonths','isEventRunning','DateSizeWidth','realTimeMonth','NcBYh','rwoKA','DayCycleImageDay','spring','LHVgX','getSecond','AutumnMonths','SeasonIconSummer','SeasonEnable','none','Igrao','EVAL','MQojc','MeetsSkillConditions','tGvzQ','indexOf','totalMonths','getHour','_timeTone','Game_Player_meetsEncounterConditions','tilesetDawn','AqqDv','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','getMonthDays','lRITs','PauseEventRunning','_tilesetId','DayCycleScaleY','_gameTime','RmRFl','_context','VisuMZ_4_Debugger','okqgW','updateMonthSpriteBitmap','battlebackSummer1','start','realTimeSecond','WeekTypeIconWeekend','UIBPA','unshift','CalcSkillCostChanges','Window_Options_addGeneralOptions','jVCEQ','SwSpring','BQiyw','WeekTypeAnchorX','WeekdayOffsetX','createDateTimeHudSprite','SeasonOffsetY','WTjHv','ZFFaO','ConfigManager_applyData','dateTimeHud','WinterMonths','RealTime_RecordToVariables','clearTimeOverlay','startRealTime','DateSizeHeight','LeapYearCalc','DayCycleIconNight','defaultShowHud','RealTimeGeneral','getDate','VarSecond','bbBwZ','isGameTime','SwWeekend','gameTimeMeridiem','WeekdayName','GameTimeTone','updateTimeSpriteBitmap','updateRealTime','GameTime_ChangeDateTo','BbCpg','DayCycleImageDawn','MonthAbbr%1','STR','mnkbo','aHlfj','match','wEbpq','PauseGatheringFollowers','initDateTimeSystemGameTime','104lkyTmm','GNzIk','Spriteset_Base_updateBaseFilters','SWugP','summer','_pauseGameTime','troopEncounterCond','SwDay','gameWeekDayType','RealTimeVocab','paused','AAeGR','TimeNight','fSoUh','setup','_regionBattleback1','lRNnQ','VarHour','getGameTimeMonthData','gameTimeMonth','troopId','Month_DrawText_JS','ARRAYJSON','tuNmr','VisuMZ_0_CoreEngine','DrawHudWeekday','JSON','OBzEF','SummerMonths','getVisibility','Scene_Boot_start','clearTimeTone','moveRouteForcing','YearFmt','weekend','Window_ShopBuy_price','a\x20troop\x20designated\x20as\x20a\x20\x22Base\x20Troop\x22.\x20','width','vKqIa','UmOcM','getFullYear','VtWiQ','SnnmY','tilesetWinter','MAX_SAFE_INTEGER','battlebackSpring2','YearAngle','updateWeekdaySpriteBitmap','IVzdQ','StartYear','tilesetAutumn','season','mhJMT','MonthAngle','mZYrA','WeekdayFull%1','MonthOffsetX','loadPicture','StartHour','normal','RlisJ','DayCycleScaleX','gameTimeSeason','DateOffsetY','toLowerCase','rmRne','DrawHudYear','wpcWE','88NRaCrY','getTimeTone','IyjWe','opacitySpeed','DrawHudDate','gameTimeSynchronizeWeekday','_yearSprite','VrMIU','DayCycleAnchorY','getMonthAbbr','update','ChangeVariable','TimeEnable','Oneal','SeasonIconWinter','initDateTimeSystemSettings','NightHours','hLbZK','pGpbn','boIwy','fullTime','price','SeasonScaleX','_weektypeSprite','call','getSeconds','DayCycleImageDusk','realTimeDayCycle','skillRequireCond','_cache_hour','151893AWMNli','HoursInDay','PositionX','day','getMinutesInHour','DayHours','HOMbp','map','height','eCRLu','IconSet','checkGameTimeWeekdayOverflow','DateTimeSystem','PYAZD','createDateSprites','note','TimeDawn','filters','ARRAYSTRUCT','UPRNC','{{%1}}','fSBzB','DayCycleOffsetY','updateGameTime','5150232kimuGw','VIYNY','createWindowLayer','TimeTone','DayCycleOffsetX','_dayTimeTilesetLoops','Abbr','Minute','VarYear','updateSprites','IVQsQ','setColorTone','bitmap','Scene_Base_createWindowLayer','defaultType','Days','OEchI','isUseTimeOverlay','DayCycleOpacity','okLGK','XpJNG','TimePM','VisuMZ_1_BattleCore','LKViC','teprn','setDateTimeSystemHudVisible','UjULk','description','checkDayCycle','aIGDk','TimeAnchorX','SwDawn','_cache_weektype','buYWN','BaseTroopIDs','WeekTypeOffsetX','meetsEncounterConditions','arrayToHex','_battleback1Name','msPerMinute','daycycle','eKsIY','WeekdayAnchorX','updateVisibility','Weekdays','VisuMZ_1_SkillsStatesCore','yucDi','isGameTimePaused','GameTime','applyVariance','ZERtK','processSeasonTileset','imageSmoothingEnabled','roundMinutesTo10','tilesetNight','month','gameTimeSecond','VarFullTime','padZero','ZdHMY','replace','NTqqw','floor','195354zLwFoY','CJwKd','SeasonImageSpring'];_0x3be9=function(){return _0x462519;};return _0x3be9();}PluginManager['registerCommand'](pluginData[_0x1e0c1e(0x179)],_0x1e0c1e(0x25d),_0x4b637e=>{const _0x21e352=_0x1e0c1e;VisuMZ[_0x21e352(0x19a)](_0x4b637e,_0x4b637e);const _0x107154=_0x4b637e[_0x21e352(0x436)]||0x0,_0x289853=_0x4b637e[_0x21e352(0x187)]||0x0,_0x56dad6=_0x4b637e[_0x21e352(0x437)]||0x0,_0x307c75=_0x4b637e['MonthOverflow'],_0x1e4ece=_0x4b637e['DateOverflow'];$gameSystem['gameTimeData']()[_0x21e352(0x351)]=_0x107154,$gameSystem[_0x21e352(0x1a0)]()[_0x21e352(0x319)]=_0x289853;!_0x307c75&&($gameSystem['gameTimeData']()[_0x21e352(0x319)]=$gameSystem[_0x21e352(0x1a0)]()[_0x21e352(0x319)][_0x21e352(0x379)](0x1,TimeManager[_0x21e352(0x211)]()));$gameSystem['gameTimeData']()[_0x21e352(0x427)]=_0x56dad6;if(!_0x1e4ece){if(_0x21e352(0x1bf)!=='ltKRT'){const _0xf87e18=TimeManager[_0x21e352(0x1a6)]($gameSystem[_0x21e352(0x1a0)]()['month'],_0x107154);$gameSystem[_0x21e352(0x1a0)]()[_0x21e352(0x427)]=$gameSystem[_0x21e352(0x1a0)]()[_0x21e352(0x427)][_0x21e352(0x379)](0x1,_0xf87e18);}else return![];}$gameSystem[_0x21e352(0x1c5)](),$gameSystem[_0x21e352(0x2b1)](),TimeManager[_0x21e352(0x196)]();}),PluginManager['registerCommand'](pluginData[_0x1e0c1e(0x179)],_0x1e0c1e(0x1a9),_0x194647=>{const _0x3dce71=_0x1e0c1e;VisuMZ[_0x3dce71(0x19a)](_0x194647,_0x194647);const _0x110a39=_0x194647[_0x3dce71(0x33f)]||0x0,_0x1b03f0=_0x194647[_0x3dce71(0x174)],_0x3109f4=TimeManager['getGameTimeTotalWeekdays']();_0x1b03f0?$gameSystem['gameTimeData']()[_0x3dce71(0x3c3)]=_0x110a39%_0x3109f4||_0x3109f4:$gameSystem[_0x3dce71(0x1a0)]()[_0x3dce71(0x3c3)]=_0x110a39['clamp'](0x1,_0x3109f4),TimeManager['forceRefreshHUD']();}),PluginManager['registerCommand'](pluginData[_0x1e0c1e(0x179)],'GameTime_ChangeTimeTo',_0x42dbd4=>{const _0x3c6ce6=_0x1e0c1e;VisuMZ[_0x3c6ce6(0x19a)](_0x42dbd4,_0x42dbd4);const _0x2e9380=_0x42dbd4['Hour']||0x0,_0x406e18=_0x42dbd4[_0x3c6ce6(0x2e9)]||0x0,_0x37751f=_0x42dbd4[_0x3c6ce6(0x332)],_0x1d9c13=_0x42dbd4[_0x3c6ce6(0x326)];$gameSystem['gameTimeData']()['hour']=_0x2e9380;if(!_0x37751f){if(_0x3c6ce6(0x22a)!=='CUIxI'){const _0x3032f8=TimeManager['GameTimeSettings'][_0x3c6ce6(0x3be)]['hoursInDay']-0x1;$gameSystem[_0x3c6ce6(0x1a0)]()[_0x3c6ce6(0x40a)]=$gameSystem[_0x3c6ce6(0x1a0)]()[_0x3c6ce6(0x40a)][_0x3c6ce6(0x379)](0x0,_0x3032f8);}else _0x2e8f74=_0x462add(_0x3db81b);}$gameSystem[_0x3c6ce6(0x44b)](),$gameSystem[_0x3c6ce6(0x1a0)]()[_0x3c6ce6(0x1f1)]=_0x406e18;if(!_0x1d9c13){if(_0x3c6ce6(0x2bf)===_0x3c6ce6(0x2bf)){const _0x13a4b4=TimeManager[_0x3c6ce6(0x3f4)][_0x3c6ce6(0x3be)][_0x3c6ce6(0x34f)]-0x1;$gameSystem[_0x3c6ce6(0x1a0)]()[_0x3c6ce6(0x1f1)]=$gameSystem[_0x3c6ce6(0x1a0)]()[_0x3c6ce6(0x1f1)][_0x3c6ce6(0x379)](0x0,_0x13a4b4);}else{const _0x2a7439=_0x406051['VarDate'],_0x2e8066=_0x4e3778['date'];_0x3550f6[_0x3c6ce6(0x2d6)]['ChangeVariable'](_0x2a7439,_0x2e8066);}}$gameSystem[_0x3c6ce6(0x3b5)](),TimeManager['forceRefreshHUD']();}),PluginManager['registerCommand'](pluginData[_0x1e0c1e(0x179)],_0x1e0c1e(0x46a),_0x3d52f8=>{const _0x48ef91=_0x1e0c1e;VisuMZ[_0x48ef91(0x19a)](_0x3d52f8,_0x3d52f8),$gameSystem[_0x48ef91(0x3e7)]();}),PluginManager['registerCommand'](pluginData[_0x1e0c1e(0x179)],_0x1e0c1e(0x35e),_0x1174b7=>{const _0x1bd1b7=_0x1e0c1e;VisuMZ[_0x1bd1b7(0x19a)](_0x1174b7,_0x1174b7),$gameSystem[_0x1bd1b7(0x371)]();}),PluginManager[_0x1e0c1e(0x407)](pluginData[_0x1e0c1e(0x179)],_0x1e0c1e(0x382),_0xfb18d0=>{const _0x8713ee=_0x1e0c1e;VisuMZ['ConvertParams'](_0xfb18d0,_0xfb18d0);const _0x376ba6=TimeManager[_0x8713ee(0x231)];if(_0xfb18d0[_0x8713ee(0x2ea)]){const _0x2b8d36=_0xfb18d0['VarYear'],_0x2d6381=_0x376ba6[_0x8713ee(0x351)];$gameVariables[_0x8713ee(0x394)](_0x2b8d36,_0x2d6381);}if(_0xfb18d0['VarMonth']){const _0x4cd651=_0xfb18d0[_0x8713ee(0x1ad)],_0x2d6569=_0x376ba6[_0x8713ee(0x319)];$gameVariables['setValue'](_0x4cd651,_0x2d6569);}if(_0xfb18d0[_0x8713ee(0x1b0)]){if('lhuWK'!=='lhuWK')_0x1efef5[_0x8713ee(0x2d6)][_0x8713ee(0x286)][_0x8713ee(0x2c4)](this),_0x2503aa[_0x8713ee(0x41e)](),_0x48748e[_0x8713ee(0x24d)]();else{const _0x33334b=_0xfb18d0[_0x8713ee(0x1b0)],_0x3bf130=_0x376ba6[_0x8713ee(0x427)];$gameVariables[_0x8713ee(0x394)](_0x33334b,_0x3bf130);}}if(_0xfb18d0[_0x8713ee(0x3cb)]){if(_0x8713ee(0x383)!==_0x8713ee(0x3d1)){const _0x474f71=_0xfb18d0['VarFullDate'],_0x43631a=_0x376ba6['fullDate'];$gameVariables['setValue'](_0x474f71,_0x43631a);}else{const _0x8bcbb2=this[_0x8713ee(0x1a0)]();_0x8bcbb2[_0x8713ee(0x3c3)]+=_0x318e97,_0x8bcbb2[_0x8713ee(0x427)]+=_0x4fffbf,this[_0x8713ee(0x2d5)](),this['checkGameTimeDateOverflow']();}}if(_0xfb18d0[_0x8713ee(0x3eb)]){const _0x1ee400=_0xfb18d0[_0x8713ee(0x3eb)],_0x39fedc=_0x376ba6['weekday'];$gameVariables['setValue'](_0x1ee400,_0x39fedc);}if(_0xfb18d0[_0x8713ee(0x279)]){const _0x1fe78d=_0xfb18d0[_0x8713ee(0x279)],_0xd4cc67=_0x376ba6[_0x8713ee(0x40a)];$gameVariables[_0x8713ee(0x394)](_0x1fe78d,_0xd4cc67);}if(_0xfb18d0[_0x8713ee(0x1bb)]){if('qJmiY'!=='joYTO'){const _0x208277=_0xfb18d0['VarMinute'],_0x2174b1=_0x376ba6[_0x8713ee(0x1f1)];$gameVariables['setValue'](_0x208277,_0x2174b1);}else{const _0xfb157=_0xac591['SwDusk'],_0x246364=_0x4c9a28[_0x8713ee(0x33c)][_0x8713ee(0x36f)](_0x5c4f16[_0x8713ee(0x40a)]);_0x56c19c[_0x8713ee(0x2d6)][_0x8713ee(0x3df)](_0xfb157,_0x246364);}}if(_0xfb18d0[_0x8713ee(0x31b)]){const _0x1b3f84=_0xfb18d0['VarFullTime'],_0x49536a=_0x376ba6[_0x8713ee(0x2c0)];$gameVariables[_0x8713ee(0x394)](_0x1b3f84,_0x49536a);}}),PluginManager[_0x1e0c1e(0x407)](pluginData[_0x1e0c1e(0x179)],_0x1e0c1e(0x334),_0x188d09=>{const _0x913cd5=_0x1e0c1e;VisuMZ[_0x913cd5(0x19a)](_0x188d09,_0x188d09);const _0x2c91bb=_0x188d09['msPerMinute'];$gameSystem[_0x913cd5(0x3ff)](_0x2c91bb);}),PluginManager[_0x1e0c1e(0x407)](pluginData[_0x1e0c1e(0x179)],'GameTime_ClearDilation',_0x2da864=>{const _0x16d2f9=_0x1e0c1e;VisuMZ[_0x16d2f9(0x19a)](_0x2da864,_0x2da864);const _0x88aa29=VisuMZ[_0x16d2f9(0x2d6)][_0x16d2f9(0x42c)][_0x16d2f9(0x346)][_0x16d2f9(0x309)];$gameSystem['changeMsPerGameTimeMinute'](_0x88aa29);}),PluginManager[_0x1e0c1e(0x407)](pluginData[_0x1e0c1e(0x179)],_0x1e0c1e(0x24b),_0x4518f7=>{const _0x3ed6e4=_0x1e0c1e;VisuMZ[_0x3ed6e4(0x19a)](_0x4518f7,_0x4518f7);const _0x1c8382=TimeManager[_0x3ed6e4(0x1f4)];if(_0x4518f7['VarYear']){const _0x46f0bc=_0x4518f7[_0x3ed6e4(0x2ea)],_0x21357c=_0x1c8382['year'];$gameVariables[_0x3ed6e4(0x394)](_0x46f0bc,_0x21357c);}if(_0x4518f7['VarMonth']){if('amwPE'!=='REaRU'){const _0x2e6c2f=_0x4518f7[_0x3ed6e4(0x1ad)],_0x1d8945=_0x1c8382[_0x3ed6e4(0x319)];$gameVariables[_0x3ed6e4(0x394)](_0x2e6c2f,_0x1d8945);}else{_0x371538['ConvertParams'](_0x3904cc,_0x174d45);const _0x43d9f6=_0x2bda35[_0x3ed6e4(0x436)]||0x0,_0x3e8908=_0x300ea3[_0x3ed6e4(0x187)]||0x0,_0x45c58e=_0x5074f2[_0x3ed6e4(0x437)]||0x0,_0x43bc52=_0x535fff[_0x3ed6e4(0x41b)],_0x390675=_0x44d152[_0x3ed6e4(0x335)];_0x3c5ce1['gameTimeData']()[_0x3ed6e4(0x351)]=_0x43d9f6,_0x3bd520[_0x3ed6e4(0x1a0)]()[_0x3ed6e4(0x319)]=_0x3e8908;!_0x43bc52&&(_0xf56479[_0x3ed6e4(0x1a0)]()[_0x3ed6e4(0x319)]=_0x468e0b[_0x3ed6e4(0x1a0)]()[_0x3ed6e4(0x319)][_0x3ed6e4(0x379)](0x1,_0x2b2f95[_0x3ed6e4(0x211)]()));_0x222510['gameTimeData']()[_0x3ed6e4(0x427)]=_0x45c58e;if(!_0x390675){const _0x2fbdb6=_0xb87bce[_0x3ed6e4(0x1a6)](_0x1affdd[_0x3ed6e4(0x1a0)]()[_0x3ed6e4(0x319)],_0x43d9f6);_0xa74263['gameTimeData']()[_0x3ed6e4(0x427)]=_0x251d16[_0x3ed6e4(0x1a0)]()['date'][_0x3ed6e4(0x379)](0x1,_0x2fbdb6);}_0x30be0a['checkGameTimeDateOverflow'](),_0x52443a['gameTimeSynchronizeWeekday'](),_0x53f10e[_0x3ed6e4(0x196)]();}}if(_0x4518f7['VarDate']){if('fzwoY'!==_0x3ed6e4(0x339)){const _0x7e2e1b=_0x4518f7[_0x3ed6e4(0x1b0)],_0x18aa85=_0x1c8382[_0x3ed6e4(0x427)];$gameVariables[_0x3ed6e4(0x394)](_0x7e2e1b,_0x18aa85);}else this[_0x3ed6e4(0x3c6)]=new _0x221186()[_0x3ed6e4(0x366)]();}if(_0x4518f7[_0x3ed6e4(0x3cb)]){const _0x43456a=_0x4518f7[_0x3ed6e4(0x3cb)],_0x4e0e1f=_0x1c8382['fullDate'];$gameVariables[_0x3ed6e4(0x394)](_0x43456a,_0x4e0e1f);}if(_0x4518f7[_0x3ed6e4(0x3eb)]){if(_0x3ed6e4(0x23f)==='oNMmV'){if(!this[_0x3ed6e4(0x1ff)])return;if(!this[_0x3ed6e4(0x1ff)][_0x3ed6e4(0x2ee)])return;if(this[_0x3ed6e4(0x34b)]===_0x399939[_0x3ed6e4(0x253)]())return;this['_cache_date']=_0x622924[_0x3ed6e4(0x253)](),this['_dateSprite'][_0x3ed6e4(0x2ee)][_0x3ed6e4(0x352)](),_0x2065bf[_0x3ed6e4(0x2d6)]['DrawHudDate'][_0x3ed6e4(0x2c4)](this,this[_0x3ed6e4(0x1ff)][_0x3ed6e4(0x2ee)]);}else{const _0x1e8fe5=_0x4518f7['VarWeekday'],_0x4198a6=_0x1c8382[_0x3ed6e4(0x3c3)];$gameVariables[_0x3ed6e4(0x394)](_0x1e8fe5,_0x4198a6);}}if(_0x4518f7['VarHour']){const _0x4db50f=_0x4518f7[_0x3ed6e4(0x279)],_0x353acd=_0x1c8382['hour'];$gameVariables[_0x3ed6e4(0x394)](_0x4db50f,_0x353acd);}if(_0x4518f7[_0x3ed6e4(0x1bb)]){const _0x5dbae4=_0x4518f7['VarMinute'],_0x1dc681=_0x1c8382[_0x3ed6e4(0x1f1)];$gameVariables['setValue'](_0x5dbae4,_0x1dc681);}if(_0x4518f7[_0x3ed6e4(0x254)]){if(_0x3ed6e4(0x3d0)===_0x3ed6e4(0x3d0)){const _0xfe4ce1=_0x4518f7[_0x3ed6e4(0x254)],_0x24e5f1=_0x1c8382[_0x3ed6e4(0x3d8)];$gameVariables[_0x3ed6e4(0x394)](_0xfe4ce1,_0x24e5f1);}else this[_0x3ed6e4(0x3dd)](_0x3ed6e4(0x29b)),this['createSubSprite']('daycycle'),this[_0x3ed6e4(0x3dd)](_0x3ed6e4(0x3b0)),this['createSubSprite'](_0x3ed6e4(0x351)),this['createSubSprite']('month'),this['createSubSprite'](_0x3ed6e4(0x427)),this[_0x3ed6e4(0x3dd)](_0x3ed6e4(0x3c3)),this[_0x3ed6e4(0x3dd)](_0x3ed6e4(0x32f));}if(_0x4518f7[_0x3ed6e4(0x31b)]){if(_0x3ed6e4(0x474)!==_0x3ed6e4(0x474))return _0x419634[_0x3ed6e4(0x1bc)][_0x3ed6e4(0x400)][_0x3ed6e4(0x39c)];else{const _0xbc0edd=_0x4518f7[_0x3ed6e4(0x31b)],_0x1a3bd2=_0x1c8382[_0x3ed6e4(0x2c0)];$gameVariables[_0x3ed6e4(0x394)](_0xbc0edd,_0x1a3bd2);}}}),PluginManager[_0x1e0c1e(0x407)](pluginData[_0x1e0c1e(0x179)],'HudShowHide',_0x3683b3=>{const _0x36a90f=_0x1e0c1e;VisuMZ[_0x36a90f(0x19a)](_0x3683b3,_0x3683b3);const _0x7482e7=_0x3683b3[_0x36a90f(0x20a)];$gameSystem['setDateTimeSystemHudVisible'](_0x7482e7);}),VisuMZ['DateTimeSystem'][_0x1e0c1e(0x333)]={'Timeless':/<TIME SYS(?:|TEM): NONE>/i,'GameTime':/<TIME SYS(?:|TEM): GAME>/i,'RealTime':/<TIME SYS(?:|TEM): REAL>/i,'NoTimeTone':/<NO TIME (?:TINT|TONE)>/i,'TimeTone':/<TIME (?:TINT|TONE)>/i,'ShowHud':/<SHOW DATE TIME HUD>/i,'HideHud':/<HIDE DATE TIME HUD>/i,'pauseGameTime':/<PAUSE GAME TIME>/i,'bypassTilesetSwap':/<BYPASS TILESET SWAP>/i,'battlebackSpring1':/<SPRING BATTLEBACK1:[ ](.*)>/i,'battlebackSpring2':/<SPRING BATTLEBACK2:[ ](.*)>/i,'battlebackSummer1':/<SUMMER BATTLEBACK1:[ ](.*)>/i,'battlebackSummer2':/<SUMMER BATTLEBACK2:[ ](.*)>/i,'battlebackAutumn1':/<AUTUMN BATTLEBACK1:[ ](.*)>/i,'battlebackAutumn2':/<AUTUMN BATTLEBACK2:[ ](.*)>/i,'battlebackWinter1':/<WINTER BATTLEBACK1:[ ](.*)>/i,'battlebackWinter2':/<WINTER BATTLEBACK2:[ ](.*)>/i,'regionBattlebacks':{'spring':/<SPRING REGION (\d+) BATTLEBACK(\d+):[ ](.*)>/gi,'summer':/<SUMMER REGION (\d+) BATTLEBACK(\d+):[ ](.*)>/gi,'autumn':/<AUTUMN REGION (\d+) BATTLEBACK(\d+):[ ](.*)>/gi,'winter':/<WINTER REGION (\d+) BATTLEBACK(\d+):[ ](.*)>/gi},'tilesetSpring':/<SPRING SWAP TO:[ ](\d+)>/i,'tilesetSummer':/<SUMMER SWAP TO:[ ](\d+)>/i,'tilesetAutumn':/<AUTUMN SWAP TO:[ ](\d+)>/i,'tilesetWinter':/<WINTER SWAP TO:[ ](\d+)>/i,'tilesetDawn':/<DAWN SWAP TO:[ ](\d+)>/i,'tilesetDay':/<DAY SWAP TO:[ ](\d+)>/i,'tilesetDusk':/<DUSK SWAP TO:[ ](\d+)>/i,'tilesetNight':/<NIGHT SWAP TO:[ ](\d+)>/i,'shopBuyCondition':/<SHOP BUY (.*):[ ](.*?)>/gi,'shopPriceCondition':/<SHOP PRICE (.*):[ ](\d+)([%％])>/gi,'skillRequireCond':/<REQUIRE (.*):[ ](.*?)>/gi,'skillDmgCond':/<(?:DAMAGE|DMG|HEAL|HEALING) IF (.*):[ ](\d+)([%％])>/gi,'skillCostCond':/<(.*) COST IF (.*):[ ](\d+)([%％])>/gi,'stateTurnsCond':/<TURNS IF (.*):[ ]([\+\-]\d+)>/gi,'troopEncounterCond':/<ENCOUNTER (.*):[ ](.*?)>/gi},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x3de)]=Scene_Boot['prototype']['onDatabaseLoaded'],Scene_Boot[_0x1e0c1e(0x205)]['onDatabaseLoaded']=function(){const _0x2c3e46=_0x1e0c1e;VisuMZ['DateTimeSystem'][_0x2c3e46(0x3de)]['call'](this),VisuMZ['DateTimeSystem']['BufferPluginParameters']();},VisuMZ[_0x1e0c1e(0x2d6)]['BufferPluginParameters']=function(){const _0x32ec5d=_0x1e0c1e,_0x58964b=VisuMZ[_0x32ec5d(0x2d6)][_0x32ec5d(0x42c)],_0x1fc538=_0x58964b[_0x32ec5d(0x346)];_0x1fc538[_0x32ec5d(0x225)]=_0x1fc538[_0x32ec5d(0x3a2)]['length'],_0x1fc538['Months']['unshift']({}),_0x1fc538[_0x32ec5d(0x446)]=_0x1fc538['Weekdays'][_0x32ec5d(0x1e8)],_0x1fc538[_0x32ec5d(0x30e)][_0x32ec5d(0x23c)]({});};function TimeManager(){const _0x38f076=_0x1e0c1e;throw new Error(_0x38f076(0x3a6));}TimeManager[_0x1e0c1e(0x451)]=0x14,VisuMZ[_0x1e0c1e(0x2d6)]['Scene_Boot_start']=Scene_Boot['prototype'][_0x1e0c1e(0x238)],Scene_Boot['prototype']['start']=function(){const _0x1e07df=_0x1e0c1e;VisuMZ[_0x1e07df(0x2d6)][_0x1e07df(0x286)][_0x1e07df(0x2c4)](this),TimeManager[_0x1e07df(0x41e)](),TimeManager[_0x1e07df(0x24d)]();},TimeManager[_0x1e0c1e(0x3f4)]={'timeStruct':{'minutesInHour':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x346)][_0x1e0c1e(0x34f)]??0x3c,'hoursInDay':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x346)][_0x1e0c1e(0x2cb)]??0x18,'dawnHours':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x346)]['DawnHours']??[0x4,0x5,0x6],'dayHours':VisuMZ['DateTimeSystem']['Settings'][_0x1e0c1e(0x346)]['DayHours']??[0x7,0x8,0x9,0xa,0xb,0xc,0xd,0xe,0xf,0x10,0x11],'duskHours':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x346)][_0x1e0c1e(0x33c)]??[0x12,0x13,0x14],'nightHours':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x346)]['NightHours']??[0x15,0x16,0x17,0x0,0x1,0x2,0x3]},'pauseConditions':{'eventRunning':VisuMZ[_0x1e0c1e(0x2d6)]['Settings'][_0x1e0c1e(0x346)][_0x1e0c1e(0x22e)]??!![],'moveRouteForcing':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x346)]['PauseMoveRouteForcing']??!![],'gatheringFollowers':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)]['GameTimeGeneral'][_0x1e0c1e(0x266)]??!![],'vehicleEnterExit':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)]['GameTimeGeneral'][_0x1e0c1e(0x1f2)]??!![]},'roundMinutes':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x346)][_0x1e0c1e(0x317)]??!![],'saveLoadVarID':VisuMZ[_0x1e0c1e(0x2d6)]['Settings']['RealTimeGeneral'][_0x1e0c1e(0x409)]??0x0},TimeManager[_0x1e0c1e(0x3d4)]=function(){return $gameSystem['gameTimeData']();},TimeManager[_0x1e0c1e(0x41e)]=function(){const _0x15add4=_0x1e0c1e;this[_0x15add4(0x2e1)]();},TimeManager[_0x1e0c1e(0x2e1)]=function(_0xc9b7d9){const _0x3a50d1=_0x1e0c1e;if(_0xc9b7d9!==undefined){if(_0xc9b7d9!==$gameSystem['gameTimeData']()['msPerMinute'])return;}if(this['canUpdateGameTime']()){if(_0x3a50d1(0x241)!=='BQiyw'){const _0x721846=_0x37902c[_0x3a50d1(0x3f4)][_0x3a50d1(0x3be)][_0x3a50d1(0x34f)]-0x1;_0xfe2a6b[_0x3a50d1(0x1a0)]()[_0x3a50d1(0x1f1)]=_0x4dc5b5[_0x3a50d1(0x1a0)]()['minute'][_0x3a50d1(0x379)](0x0,_0x721846);}else this['processGameTimeUpdate']();}this[_0x3a50d1(0x231)]===undefined&&this[_0x3a50d1(0x33a)]();this[_0x3a50d1(0x473)]();const _0x82256=Math[_0x3a50d1(0x189)]($gameSystem[_0x3a50d1(0x1a0)]()[_0x3a50d1(0x309)]||TimeManager[_0x3a50d1(0x451)]);setTimeout(TimeManager[_0x3a50d1(0x2e1)][_0x3a50d1(0x376)](this,_0x82256),Math[_0x3a50d1(0x189)](_0x82256,TimeManager[_0x3a50d1(0x451)]));},TimeManager[_0x1e0c1e(0x404)]=function(){const _0x2fdb4c=_0x1e0c1e;if(!$gameMap)return![];if(!$gameMap['isGameTime']())return![];if(!SceneManager[_0x2fdb4c(0x3d5)]())return![];if($gameMap[_0x2fdb4c(0x311)]())return![];if(!this[_0x2fdb4c(0x46b)]())return![];if(!this[_0x2fdb4c(0x197)]())return![];return!![];},TimeManager[_0x1e0c1e(0x46b)]=function(){const _0x294370=_0x1e0c1e;if(Imported[_0x294370(0x234)]){if(_0x294370(0x2f2)!=='OEchI')this[_0x294370(0x378)]=_0x294370(0x400);else{if(SceneManager[_0x294370(0x186)][_0x294370(0x470)])return![];}}return!![];},TimeManager['meetsGameTimeUpdateParameterConditions']=function(){const _0x43902e=_0x1e0c1e,_0x512ed8=TimeManager[_0x43902e(0x3f4)][_0x43902e(0x1ab)];if(_0x512ed8[_0x43902e(0x453)]&&$gameMap[_0x43902e(0x212)]())return![];if(_0x512ed8[_0x43902e(0x288)]&&$gamePlayer[_0x43902e(0x43b)]())return![];if(_0x512ed8['gatheringFollowers']&&$gamePlayer['areFollowersGathering']())return![];if(_0x512ed8[_0x43902e(0x3c5)]&&($gamePlayer[_0x43902e(0x46d)]||$gamePlayer['_vehicleGettingOff']))return![];return!![];},TimeManager[_0x1e0c1e(0x1fa)]=function(){const _0x3d3670=_0x1e0c1e;$gameSystem[_0x3d3670(0x39a)](),this['synchToGameTime'](),this['recordGameTime']();},TimeManager[_0x1e0c1e(0x17e)]=function(){const _0x3194ab=_0x1e0c1e,_0x41fce7=$gameSystem[_0x3194ab(0x1a0)](),_0x3fbd9d=TimeManager[_0x3194ab(0x3f4)][_0x3194ab(0x3be)];this[_0x3194ab(0x36a)]={'year':_0x41fce7[_0x3194ab(0x351)],'month':_0x41fce7[_0x3194ab(0x319)],'date':_0x41fce7[_0x3194ab(0x427)],'weekday':_0x41fce7[_0x3194ab(0x3c3)]||TimeManager[_0x3194ab(0x3ad)](),'hour':_0x41fce7[_0x3194ab(0x40a)],'hoursInDay':_0x3fbd9d[_0x3194ab(0x1e9)],'nextHour':(_0x41fce7['hour']+0x1)%_0x3fbd9d[_0x3194ab(0x1e9)],'minute':_0x41fce7[_0x3194ab(0x1f1)],'minutesInHour':_0x3fbd9d[_0x3194ab(0x34f)],'second':0x0};},TimeManager['recordGameTime']=function(){const _0x1f9cd5=_0x1e0c1e,_0x283c2d=$gameSystem[_0x1f9cd5(0x1a0)](),_0x581eff=TimeManager[_0x1f9cd5(0x3f4)][_0x1f9cd5(0x3be)],_0x2696bc=_0x1f9cd5(0x35c)['format'](_0x283c2d['year'],_0x283c2d['month'][_0x1f9cd5(0x31c)](0x2),_0x283c2d[_0x1f9cd5(0x427)][_0x1f9cd5(0x31c)](0x2)),_0x2d101b=_0x1f9cd5(0x35c)[_0x1f9cd5(0x3f1)](_0x283c2d[_0x1f9cd5(0x40a)],_0x283c2d['minute'][_0x1f9cd5(0x31c)](0x2),'00');this['_gameTime']={'year':_0x283c2d[_0x1f9cd5(0x351)],'month':_0x283c2d[_0x1f9cd5(0x319)],'date':_0x283c2d['date'],'weekday':_0x283c2d[_0x1f9cd5(0x3c3)]||TimeManager[_0x1f9cd5(0x3ad)](),'hour':_0x283c2d[_0x1f9cd5(0x40a)],'hoursInDay':_0x581eff[_0x1f9cd5(0x1e9)],'nextHour':(_0x283c2d['hour']+0x1)%_0x581eff[_0x1f9cd5(0x1e9)],'minute':_0x283c2d[_0x1f9cd5(0x1f1)],'minutesInHour':_0x581eff[_0x1f9cd5(0x34f)],'second':0x0,'fullDate':_0x2696bc,'fullTime':_0x2d101b};},TimeManager[_0x1e0c1e(0x473)]=function(){const _0x507484=_0x1e0c1e;if($gameSwitches){if('eMgMa'!==_0x507484(0x188))return'';else VisuMZ[_0x507484(0x2d6)][_0x507484(0x178)](![]);}$gameVariables&&(_0x507484(0x31d)===_0x507484(0x31d)?VisuMZ[_0x507484(0x2d6)][_0x507484(0x3dc)](![]):this[_0x507484(0x244)]());},TimeManager[_0x1e0c1e(0x1a6)]=function(_0x4b5523,_0x40536e){const _0x5cf5a7=_0x1e0c1e,_0x2631c9=VisuMZ[_0x5cf5a7(0x2d6)][_0x5cf5a7(0x42c)][_0x5cf5a7(0x346)],_0x5ea64a=_0x2631c9[_0x5cf5a7(0x3a2)][_0x4b5523];let _0x26729e=_0x5ea64a[_0x5cf5a7(0x2f1)];return _0x5ea64a['LeapMonth']&&VisuMZ['DateTimeSystem'][_0x5cf5a7(0x1ae)](_0x40536e)&&(_0x26729e+=0x1),_0x26729e;},VisuMZ[_0x1e0c1e(0x2d6)]['CheckGameTimeLeapYear']=function(_0x3d346e){const _0x1df21a=_0x1e0c1e;if(VisuMZ['DateTimeSystem'][_0x1df21a(0x42c)][_0x1df21a(0x346)][_0x1df21a(0x24f)])return VisuMZ['DateTimeSystem'][_0x1df21a(0x42c)][_0x1df21a(0x346)][_0x1df21a(0x24f)][_0x1df21a(0x2c4)](this,_0x3d346e);return _0x3d346e%0x190===0x0||_0x3d346e%0x64!==0x0&&_0x3d346e%0x4===0x0;},TimeManager[_0x1e0c1e(0x24d)]=function(){const _0x5adcb7=_0x1e0c1e;this[_0x5adcb7(0x1f5)]=new Date(),this[_0x5adcb7(0x25c)]();},TimeManager[_0x1e0c1e(0x25c)]=function(){const _0x39b768=_0x1e0c1e;this[_0x39b768(0x1f5)]=new Date(),$gameMap&&$gameMap[_0x39b768(0x37a)]()&&(_0x39b768(0x389)!==_0x39b768(0x389)?_0x48d2bd[_0x39b768(0x2d6)][_0x39b768(0x42c)][_0x39b768(0x3b1)]['Time_DrawText_JS']&&_0x48b098[_0x39b768(0x2d6)][_0x39b768(0x42c)][_0x39b768(0x3b1)][_0x39b768(0x180)][_0x39b768(0x2c4)](this,_0x3b90e0):this[_0x39b768(0x412)]()),this['recordRealTime'](),this['updateRealTimeSwitchesVariables'](),setTimeout(TimeManager['updateRealTime'][_0x39b768(0x376)](this),0x3e8);},TimeManager[_0x1e0c1e(0x412)]=function(){const _0x359b00=_0x1e0c1e;!this[_0x359b00(0x1f5)]&&TimeManager[_0x359b00(0x24d)](),this['_lastTime']={'year':this[_0x359b00(0x1f5)][_0x359b00(0x290)](),'month':this['_date']['getMonth']()+0x1,'date':this[_0x359b00(0x1f5)][_0x359b00(0x253)](),'weekday':this[_0x359b00(0x1f5)][_0x359b00(0x17b)]()%0x7||0x7,'hour':this[_0x359b00(0x1f5)][_0x359b00(0x38e)](),'hoursInDay':0x18,'nextHour':(this[_0x359b00(0x1f5)][_0x359b00(0x38e)]()+0x1)%0x18,'minute':this['_date']['getMinutes'](),'minutesInHour':0x3c,'second':this['_date'][_0x359b00(0x2c5)]()};},TimeManager[_0x1e0c1e(0x185)]=function(){const _0x14e07f=_0x1e0c1e,_0x7e70b8='%1%2%3'['format'](this[_0x14e07f(0x1f5)][_0x14e07f(0x290)](),Number(this[_0x14e07f(0x1f5)]['getMonth']()+0x1)['padZero'](0x2),Number(this[_0x14e07f(0x1f5)]['getDate']())[_0x14e07f(0x31c)](0x2)),_0x1bc84c=_0x14e07f(0x35c)[_0x14e07f(0x3f1)](Number(this[_0x14e07f(0x1f5)][_0x14e07f(0x38e)]()),Number(this['_date'][_0x14e07f(0x3c7)]())['padZero'](0x2),Number(this['_date'][_0x14e07f(0x2c5)]())['padZero'](0x2));this[_0x14e07f(0x1f4)]={'year':this['_date']['getFullYear'](),'month':this[_0x14e07f(0x1f5)][_0x14e07f(0x377)]()+0x1,'date':this[_0x14e07f(0x1f5)]['getDate'](),'weekday':this[_0x14e07f(0x1f5)][_0x14e07f(0x17b)]()%0x7||0x7,'hour':this[_0x14e07f(0x1f5)][_0x14e07f(0x38e)](),'minute':this[_0x14e07f(0x1f5)][_0x14e07f(0x3c7)](),'second':this['_date'][_0x14e07f(0x2c5)](),'fullDate':_0x7e70b8,'fullTime':_0x1bc84c};},TimeManager[_0x1e0c1e(0x3e8)]=function(){const _0x57bc0a=_0x1e0c1e;$gameSwitches&&VisuMZ[_0x57bc0a(0x2d6)][_0x57bc0a(0x178)](!![]),$gameVariables&&VisuMZ[_0x57bc0a(0x2d6)][_0x57bc0a(0x3dc)](!![]);},TimeManager['getYear']=function(){const _0x1cd9b8=_0x1e0c1e;if(!this['_lastTime'])return 0x0;return this[_0x1cd9b8(0x36a)][_0x1cd9b8(0x351)];},TimeManager[_0x1e0c1e(0x377)]=function(){const _0x4dd54a=_0x1e0c1e;if(!this[_0x4dd54a(0x36a)])return 0x0;return this[_0x4dd54a(0x36a)]['month'];},TimeManager[_0x1e0c1e(0x253)]=function(){const _0x3d55ae=_0x1e0c1e;if(!this['_lastTime'])return 0x0;return this[_0x3d55ae(0x36a)]['date'];},TimeManager[_0x1e0c1e(0x35f)]=function(){const _0x3ca822=_0x1e0c1e;if(!this[_0x3ca822(0x36a)])return 0x0;return this[_0x3ca822(0x36a)][_0x3ca822(0x3c3)];},TimeManager[_0x1e0c1e(0x226)]=function(){const _0x543a86=_0x1e0c1e;if(!this[_0x543a86(0x36a)])return 0x0;return this[_0x543a86(0x36a)]['hour'];},TimeManager[_0x1e0c1e(0x18b)]=function(){const _0xfbf66d=_0x1e0c1e;if(!this[_0xfbf66d(0x36a)])return 0x1;return this[_0xfbf66d(0x36a)][_0xfbf66d(0x425)];},TimeManager[_0x1e0c1e(0x38f)]=function(){const _0xf49bce=_0x1e0c1e;if(!this[_0xf49bce(0x36a)])return 0x18;return this[_0xf49bce(0x36a)][_0xf49bce(0x1e9)];},TimeManager[_0x1e0c1e(0x1a2)]=function(){const _0x30b584=_0x1e0c1e;if(!this[_0x30b584(0x36a)])return 0x0;let _0x2b9acd=this[_0x30b584(0x36a)]['minute'];return $gameMap&&$gameMap[_0x30b584(0x256)]()&&(TimeManager[_0x30b584(0x3f4)][_0x30b584(0x200)]&&(_0x2b9acd=Math[_0x30b584(0x320)](_0x2b9acd/0xa)*0xa)),_0x2b9acd;},TimeManager['getMinuteRaw']=function(){const _0x5889f1=_0x1e0c1e;if(!this[_0x5889f1(0x36a)])return 0x0;return this[_0x5889f1(0x36a)][_0x5889f1(0x1f1)];},TimeManager['getMinutesInHour']=function(){const _0x14d63a=_0x1e0c1e;if(!this[_0x14d63a(0x36a)])return 0x0;return this['_lastTime'][_0x14d63a(0x34f)];},TimeManager[_0x1e0c1e(0x21a)]=function(){const _0x368675=_0x1e0c1e;if(!this['_lastTime'])return 0x0;return this[_0x368675(0x36a)][_0x368675(0x3d8)];},TimeManager[_0x1e0c1e(0x22c)]=function(_0xcd861d,_0x4470ab){const _0x4d0f90=_0x1e0c1e;return TimeManager[_0x4d0f90(0x1a6)](_0xcd861d,_0x4470ab);},TimeManager[_0x1e0c1e(0x211)]=function(){const _0x156a63=_0x1e0c1e;return VisuMZ[_0x156a63(0x2d6)][_0x156a63(0x42c)][_0x156a63(0x346)][_0x156a63(0x225)];},TimeManager[_0x1e0c1e(0x27a)]=function(_0x36ab06){const _0x47528e=_0x1e0c1e;return VisuMZ[_0x47528e(0x2d6)][_0x47528e(0x42c)][_0x47528e(0x346)][_0x47528e(0x3a2)][_0x36ab06]||{};},TimeManager['getGameTimeTotalWeekdays']=function(){const _0x1603d4=_0x1e0c1e;return VisuMZ['DateTimeSystem'][_0x1603d4(0x42c)][_0x1603d4(0x346)][_0x1603d4(0x446)];},TimeManager[_0x1e0c1e(0x415)]=function(_0x8a0c5){const _0xe9c419=_0x1e0c1e;return VisuMZ[_0xe9c419(0x2d6)]['Settings'][_0xe9c419(0x346)][_0xe9c419(0x30e)][_0x8a0c5]||{};},TimeManager['checkSeason']=function(){const _0x4c22f8=_0x1e0c1e,_0x364a98=this[_0x4c22f8(0x377)]();if($gameMap[_0x4c22f8(0x37a)]()){const _0x11bb9d=VisuMZ[_0x4c22f8(0x2d6)]['Settings']['RealTimeGeneral'];if(_0x11bb9d[_0x4c22f8(0x1d4)]&&_0x11bb9d['SpringMonths'][_0x4c22f8(0x36f)](_0x364a98))return 0x1;else{if(_0x11bb9d[_0x4c22f8(0x284)]&&_0x11bb9d[_0x4c22f8(0x284)]['includes'](_0x364a98))return 0x2;else{if(_0x11bb9d[_0x4c22f8(0x21b)]&&_0x11bb9d[_0x4c22f8(0x21b)]['includes'](_0x364a98)){if(_0x4c22f8(0x29e)!==_0x4c22f8(0x219))return 0x3;else this[_0x4c22f8(0x22f)]=_0x16a5b7(_0x4c8a0c['$1']),this['_needsRefresh']=!![];}else{if(_0x11bb9d[_0x4c22f8(0x24a)]&&_0x11bb9d[_0x4c22f8(0x24a)][_0x4c22f8(0x36f)](_0x364a98))return 0x4;}}}}else{if($gameMap[_0x4c22f8(0x256)]()){const _0x31ffb7=VisuMZ[_0x4c22f8(0x2d6)]['Settings'][_0x4c22f8(0x346)],_0x2aa12d=_0x31ffb7['Months'][_0x364a98]||{};if(_0x2aa12d['Season'])return[_0x4c22f8(0x21e),'spring',_0x4c22f8(0x26c),_0x4c22f8(0x3f2),_0x4c22f8(0x1ea)]['indexOf'](_0x2aa12d[_0x4c22f8(0x1b1)]);}}return 0x0;},TimeManager[_0x1e0c1e(0x1d3)]=function(){const _0x294d14=_0x1e0c1e,_0x9ea595=this[_0x294d14(0x35f)]();if($gameMap[_0x294d14(0x37a)]()){if(_0x294d14(0x171)!=='RRthc'){const _0x5d52cf=_0xdf6398['DateTimeSystem'][_0x294d14(0x3a9)][_0x294d14(0x2c4)](this);return _0x5d52cf[_0x294d14(0x249)]=this[_0x294d14(0x249)],_0x5d52cf;}else{const _0x263814=VisuMZ['DateTimeSystem'][_0x294d14(0x42c)][_0x294d14(0x252)];if(_0x263814[_0x294d14(0x30e)]&&_0x263814[_0x294d14(0x30e)][_0x294d14(0x36f)](_0x9ea595))return 0x1;else{if(_0x263814['Weekends']&&_0x263814['Weekends'][_0x294d14(0x36f)](_0x9ea595))return 0x2;}}}else{if($gameMap[_0x294d14(0x256)]()){if(_0x294d14(0x471)!==_0x294d14(0x363)){const _0x50300e=VisuMZ[_0x294d14(0x2d6)]['Settings'][_0x294d14(0x346)],_0x360821=_0x50300e[_0x294d14(0x30e)][_0x9ea595]||{};if(_0x360821[_0x294d14(0x342)])return['none',_0x294d14(0x3c3),_0x294d14(0x28a)][_0x294d14(0x224)](_0x360821[_0x294d14(0x342)]);}else _0x1f7683[_0x294d14(0x2d6)][_0x294d14(0x42c)][_0x294d14(0x3b1)][_0x294d14(0x27d)]&&_0x2399a5[_0x294d14(0x2d6)][_0x294d14(0x42c)][_0x294d14(0x3b1)][_0x294d14(0x27d)][_0x294d14(0x2c4)](this,_0x22caad);}}return 0x0;},TimeManager[_0x1e0c1e(0x2fe)]=function(){const _0x50f10a=_0x1e0c1e,_0x1827d2=this[_0x50f10a(0x226)]();if($gameMap[_0x50f10a(0x37a)]()){if('KqYXx'==='KqYXx'){const _0x511ea0=VisuMZ[_0x50f10a(0x2d6)][_0x50f10a(0x42c)][_0x50f10a(0x252)];if(_0x511ea0[_0x50f10a(0x1d5)]&&_0x511ea0[_0x50f10a(0x1d5)]['includes'](_0x1827d2))return 0x1;else{if(_0x511ea0[_0x50f10a(0x2cf)]&&_0x511ea0[_0x50f10a(0x2cf)][_0x50f10a(0x36f)](_0x1827d2))return 0x2;else{if(_0x511ea0[_0x50f10a(0x33c)]&&_0x511ea0[_0x50f10a(0x33c)][_0x50f10a(0x36f)](_0x1827d2))return 0x3;else{if(_0x511ea0[_0x50f10a(0x2bc)]&&_0x511ea0[_0x50f10a(0x2bc)][_0x50f10a(0x36f)](_0x1827d2))return 0x4;}}}}else{const _0x8d5b0b=_0x49d3b6(_0x226bb5['$1'])[_0x50f10a(0x338)](',')[_0x50f10a(0x2d1)](_0x559559=>_0x24fb31(_0x559559));return _0x8d5b0b[_0x50f10a(0x36f)](_0x32f658[_0x50f10a(0x253)]());}}else{if($gameMap['isGameTime']()){const _0x3adcde=VisuMZ['DateTimeSystem'][_0x50f10a(0x42c)][_0x50f10a(0x346)];if(_0x3adcde[_0x50f10a(0x1d5)]&&_0x3adcde[_0x50f10a(0x1d5)]['includes'](_0x1827d2)){if(_0x50f10a(0x2ff)!==_0x50f10a(0x2ff)){const _0x11b846=_0x38c619[_0x50f10a(0x20e)],_0x328de7=_0x458384[_0x50f10a(0x33c)]['includes'](_0x1b0a94['hour']);_0x539d2e[_0x50f10a(0x2d6)][_0x50f10a(0x3df)](_0x11b846,_0x328de7);}else return 0x1;}else{if(_0x3adcde[_0x50f10a(0x2cf)]&&_0x3adcde[_0x50f10a(0x2cf)][_0x50f10a(0x36f)](_0x1827d2))return 0x2;else{if(_0x3adcde['DuskHours']&&_0x3adcde[_0x50f10a(0x33c)][_0x50f10a(0x36f)](_0x1827d2))return 0x3;else{if(_0x3adcde[_0x50f10a(0x2bc)]&&_0x3adcde[_0x50f10a(0x2bc)]['includes'](_0x1827d2)){if('lRITs'!==_0x50f10a(0x22d)){if(_0x16598b['isRealTime']())return _0x322802['realTimeMeridiemFor'](_0x1a631e);else{if(_0x34561d[_0x50f10a(0x256)]())return _0x43bc2c[_0x50f10a(0x1ec)](_0x184e4e);}return'';}else return 0x4;}}}}}}return 0x0;},TimeManager[_0x1e0c1e(0x196)]=function(){const _0x185b4e=_0x1e0c1e;if(!SceneManager[_0x185b4e(0x3d5)]())return;const _0x46d88c=SceneManager[_0x185b4e(0x186)];if(!_0x46d88c)return;const _0x28635e=_0x46d88c[_0x185b4e(0x33e)];if(!_0x28635e)return;_0x28635e[_0x185b4e(0x1f7)]();},ConfigManager[_0x1e0c1e(0x249)]=!![],VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x3a9)]=ConfigManager[_0x1e0c1e(0x20f)],ConfigManager[_0x1e0c1e(0x20f)]=function(){const _0x380443=_0x1e0c1e,_0xcc02ea=VisuMZ[_0x380443(0x2d6)][_0x380443(0x3a9)][_0x380443(0x2c4)](this);return _0xcc02ea[_0x380443(0x249)]=this['dateTimeHud'],_0xcc02ea;},VisuMZ[_0x1e0c1e(0x2d6)]['ConfigManager_applyData']=ConfigManager[_0x1e0c1e(0x464)],ConfigManager[_0x1e0c1e(0x464)]=function(_0xedb04b){const _0x9ea578=_0x1e0c1e;VisuMZ[_0x9ea578(0x2d6)][_0x9ea578(0x248)][_0x9ea578(0x2c4)](this,_0xedb04b),this[_0x9ea578(0x373)](_0xedb04b,_0x9ea578(0x249),!![]);if(_0x9ea578(0x249)in _0xedb04b){if(_0x9ea578(0x194)===_0x9ea578(0x194))this['dateTimeHud']=_0xedb04b[_0x9ea578(0x249)];else return 0x1;}else this[_0x9ea578(0x249)]=!![];},TextManager['DATE_TIME_SYSTEM']={'game':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x46e)],'real':VisuMZ[_0x1e0c1e(0x2d6)]['Settings'][_0x1e0c1e(0x271)],'yearFmt':VisuMZ['DateTimeSystem']['Settings'][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x289)]},TextManager[_0x1e0c1e(0x41a)]=function(_0x16f636){const _0x5ddcb4=_0x1e0c1e;if($gameMap[_0x5ddcb4(0x37a)]()){if(_0x5ddcb4(0x348)!==_0x5ddcb4(0x348))this[_0x5ddcb4(0x3fa)](_0x4ea62a);else return TextManager[_0x5ddcb4(0x1bc)][_0x5ddcb4(0x400)]['MonthFull%1'[_0x5ddcb4(0x3f1)](_0x16f636)];}else{if($gameMap[_0x5ddcb4(0x256)]()){const _0xd60bf2=TimeManager[_0x5ddcb4(0x377)](),_0x546f0d=TimeManager[_0x5ddcb4(0x27a)](_0xd60bf2);return _0x546f0d[_0x5ddcb4(0x19d)]||_0x5ddcb4(0x381);}}return'';},TextManager[_0x1e0c1e(0x2b5)]=function(_0x15b80d){const _0x4e2a34=_0x1e0c1e;if($gameMap[_0x4e2a34(0x37a)]())return TextManager[_0x4e2a34(0x1bc)][_0x4e2a34(0x400)][_0x4e2a34(0x260)[_0x4e2a34(0x3f1)](_0x15b80d)];else{if($gameMap[_0x4e2a34(0x256)]()){const _0x4ec692=TimeManager[_0x4e2a34(0x377)](),_0x145065=TimeManager[_0x4e2a34(0x27a)](_0x4ec692);return _0x145065['Abbr']||_0x4e2a34(0x381);}}return'';},TextManager[_0x1e0c1e(0x408)]=function(_0x479cab){const _0x3b7809=_0x1e0c1e;if($gameMap[_0x3b7809(0x37a)]()){if(_0x3b7809(0x2b3)!=='Rouik')return TextManager['DATE_TIME_SYSTEM'][_0x3b7809(0x400)][_0x3b7809(0x29f)[_0x3b7809(0x3f1)](_0x479cab)];else{const _0x411c4c=this[_0x3b7809(0x1a0)]();_0x411c4c[_0x3b7809(0x1f1)]+=_0x3a68a1,this[_0x3b7809(0x3b5)]();}}else{if($gameMap[_0x3b7809(0x256)]()){if(_0x3b7809(0x1cd)!==_0x3b7809(0x34a)){const _0x26960b=TimeManager[_0x3b7809(0x35f)](),_0x5e6a86=TimeManager['getGameTimeWeekdayData'](_0x26960b);return _0x5e6a86[_0x3b7809(0x19d)]||_0x3b7809(0x381);}else{if(!this[_0x3b7809(0x36a)])return 0x0;return this[_0x3b7809(0x36a)][_0x3b7809(0x3d8)];}}}return'';},TextManager['getWeekdayAbbr']=function(_0xc175cb){const _0x567701=_0x1e0c1e;if($gameMap[_0x567701(0x37a)]())return TextManager[_0x567701(0x1bc)][_0x567701(0x400)][_0x567701(0x477)['format'](_0xc175cb)];else{if($gameMap[_0x567701(0x256)]()){const _0x3bc5c2=TimeManager[_0x567701(0x35f)](),_0x20e559=TimeManager['getGameTimeWeekdayData'](_0x3bc5c2);return _0x20e559['Abbr']||_0x567701(0x381);}}return'';},TextManager[_0x1e0c1e(0x461)]=function(_0x54fbd2){const _0x1b2f73=_0x1e0c1e;if($gameMap[_0x1b2f73(0x37a)]()){if(_0x1b2f73(0x402)===_0x1b2f73(0x402))return Number(_0x54fbd2);else _0x5c4e1b[_0x1b2f73(0x2ee)]=_0x2b6e4f,_0x36285c['scale']['x']=0x1,_0x24c14a[_0x1b2f73(0x191)]['y']=0x1;}else{if($gameMap[_0x1b2f73(0x256)]()){if(_0x1b2f73(0x455)===_0x1b2f73(0x455))return Number(_0x54fbd2);else{if(!_0xcaa5b7)return _0x47910b;return _0x5f5d7e=_0x2b80ce[_0x1b2f73(0x31e)](/<GameYearP>/gi,(_0x13ceba,_0x5ca95b)=>_0x11c4a2[_0x1b2f73(0x1be)](!![])),_0x306c98=_0x286cde[_0x1b2f73(0x31e)](/<GameYear>/gi,(_0x3dde21,_0x267127)=>_0x593e96[_0x1b2f73(0x1be)](![])),_0x1cdeb4=_0x1d34c7['replace'](/<GameMonthA>/gi,(_0xe8e598,_0x3a6094)=>_0x4d6eae[_0x1b2f73(0x27b)](_0x1b2f73(0x399))),_0x316ba0=_0x507995[_0x1b2f73(0x31e)](/<GameMonthN>/gi,(_0x16f0d4,_0x1d2c76)=>_0xa47ebb[_0x1b2f73(0x27b)]('number')),_0x1588d4=_0xd9666e[_0x1b2f73(0x31e)](/<GameMonthP>/gi,(_0x16b840,_0x1adf7a)=>_0x503684[_0x1b2f73(0x27b)](_0x1b2f73(0x3c1))),_0x2682f9=_0x1a1f88[_0x1b2f73(0x31e)](/<GameMonth>/gi,(_0x350872,_0x3c3c54)=>_0x7e5863[_0x1b2f73(0x27b)](_0x1b2f73(0x384))),_0x418513=_0x3c7577[_0x1b2f73(0x31e)](/<GameSeason>/gi,(_0x1988dc,_0x4aa28d)=>_0x34029d['gameTimeSeason']()),_0x42bd58=_0x42d705[_0x1b2f73(0x31e)](/<GameDateP>/gi,(_0x5584c9,_0x412726)=>_0x68efe1[_0x1b2f73(0x3aa)](!![])),_0x4f9c32=_0x246c8a['replace'](/<GameDate>/gi,(_0x209255,_0x4200c1)=>_0x6dde26[_0x1b2f73(0x3aa)](![])),_0x4d68c1=_0x43a57e[_0x1b2f73(0x31e)](/<GameWeekdayA>/gi,(_0x59db25,_0x858442)=>_0x4b8cf0['gameTimeWeekDay'](!![])),_0x24a62d=_0xbd2965[_0x1b2f73(0x31e)](/<GameWeekday>/gi,(_0xdafd33,_0x11a55a)=>_0xfc08fc[_0x1b2f73(0x181)](![])),_0x531ad6=_0x56d761[_0x1b2f73(0x31e)](/<GameWeekdayT>/gi,(_0x23efcf,_0x14fd65)=>_0x16e6ca[_0x1b2f73(0x270)]()),_0x351847=_0x410ac8[_0x1b2f73(0x31e)](/<GameHourP>/gi,(_0x4c142b,_0x3d07ac)=>_0x1d9237[_0x1b2f73(0x398)](_0x1b2f73(0x3c1))),_0x4d53db=_0x1336bd['replace'](/<GameHourMP>/gi,(_0x23c110,_0x4ed1d3)=>_0x51e65b[_0x1b2f73(0x398)](_0x1b2f73(0x20c))),_0x589fd0=_0x14d2f0[_0x1b2f73(0x31e)](/<GameHourM>/gi,(_0x441a85,_0x3fd09e)=>_0x122b13[_0x1b2f73(0x398)](_0x1b2f73(0x3cc))),_0x4beb26=_0x479c61[_0x1b2f73(0x31e)](/<GameHour>/gi,(_0x31fb9f,_0x3f1fb3)=>_0x1e41eb[_0x1b2f73(0x398)](_0x1b2f73(0x2a3))),_0x2a0b0d=_0x52e854[_0x1b2f73(0x31e)](/<GameMinuteP>/gi,(_0x164127,_0x1ea1b5)=>_0x5d5d11[_0x1b2f73(0x32d)](!![])),_0xf33be5=_0x589141[_0x1b2f73(0x31e)](/<GameMinute>/gi,(_0x5e873c,_0x19f3b2)=>_0xd52978[_0x1b2f73(0x32d)](![])),_0x4103cd=_0x2ee206['replace'](/<GameSecondP>/gi,(_0x253a31,_0x59c737)=>_0x554d3f[_0x1b2f73(0x31a)](!![])),_0x5d29f3=_0xf55d3d[_0x1b2f73(0x31e)](/<GameSecond>/gi,(_0xa9eeaa,_0x4cf4ec)=>_0x2d7ec0[_0x1b2f73(0x31a)](![])),_0x197a19=_0x9e5af8['replace'](/<GameMeridiem>/gi,(_0x35b03a,_0x333944)=>_0x3ee894[_0x1b2f73(0x258)]()),_0x547218=_0x25ad62[_0x1b2f73(0x31e)](/<GameDayCycle>/gi,(_0x50a9ea,_0x197473)=>_0x5c425c[_0x1b2f73(0x438)]()),_0x4d2865;}}}return 0x0;},TextManager[_0x1e0c1e(0x3e3)]=function(_0x2bb2a8){const _0x27d55a=_0x1e0c1e;if($gameMap[_0x27d55a(0x37a)]()){const _0x3ad82b=0x18,_0x23d891=Math[_0x27d55a(0x390)](_0x3ad82b/0x2);return Number(_0x2bb2a8%_0x23d891||_0x23d891);}else{if($gameMap[_0x27d55a(0x256)]()){if(_0x27d55a(0x1db)!==_0x27d55a(0x1ba)){const _0x180a47=TimeManager['GameTimeSettings'][_0x27d55a(0x3be)][_0x27d55a(0x1e9)],_0x499598=Math[_0x27d55a(0x390)](_0x180a47/0x2);if(_0x2bb2a8<_0x499598){if('OYhFv'==='OChyl')_0x11fb3a+=_0x4b570f;else return Number(_0x2bb2a8%_0x499598||Math[_0x27d55a(0x320)](_0x180a47/0x2));}else return Number(_0x2bb2a8%_0x499598||Math[_0x27d55a(0x390)](_0x180a47/0x2));}else{_0x556434['ConvertParams'](_0x26ea67,_0xa0c882);const _0x41f54=_0x564274['Show'];_0x42f371[_0x27d55a(0x2fb)](_0x41f54);}}}return 0x0;},TextManager['getMeridiemForHour']=function(_0x53018d){const _0x5b37a6=_0x1e0c1e;if($gameMap[_0x5b37a6(0x37a)]()){if(_0x5b37a6(0x414)!==_0x5b37a6(0x23b))return TextManager['realTimeMeridiemFor'](_0x53018d);else this['_lastSaveTime']=null;}else{if($gameMap[_0x5b37a6(0x256)]())return TextManager[_0x5b37a6(0x1ec)](_0x53018d);}return'';},TextManager[_0x1e0c1e(0x1be)]=function(_0x156388){const _0x326c68=_0x1e0c1e,_0x514a2d=TimeManager['_gameTime']['year'],_0x18501d=String(_0x156388?_0x514a2d%0x64:_0x514a2d);return Imported[_0x326c68(0x280)]?'{{%1}}'[_0x326c68(0x3f1)](_0x18501d):_0x18501d;},TextManager['gameTimeMonth']=function(_0x257c1c){const _0x45c867=_0x1e0c1e,_0x253676=TimeManager[_0x45c867(0x231)]['month'];if(_0x257c1c===_0x45c867(0x35d)){if('ONjWy'===_0x45c867(0x469)){let _0x4aa81d=0x0;if(_0x28b283===_0x4f50cf[_0x45c867(0x351)]&&_0x236c4f===_0x2bd7cb['month'])_0x4aa81d=_0xf7fe70[_0x45c867(0x427)];let _0x38a949=_0x374546[_0x45c867(0x1a6)](_0x4fdef9,_0x29558d)-0x1;if(_0x1e7b8c===_0x642ff0[_0x45c867(0x351)]&&_0x3309d2===_0x2cb60e[_0x45c867(0x319)])_0x38a949=_0x40dcf5[_0x45c867(0x427)];_0x5b87ca+=_0x38a949-_0x4aa81d;}else return String(_0x253676);}else{if(_0x257c1c===_0x45c867(0x3c1)){const _0x233207=Number(_0x253676)[_0x45c867(0x31c)](0x2);return Imported[_0x45c867(0x280)]?_0x45c867(0x2de)[_0x45c867(0x3f1)](_0x233207):_0x233207;}else{if(_0x257c1c===_0x45c867(0x399)){const _0x26d128=VisuMZ['DateTimeSystem'][_0x45c867(0x42c)][_0x45c867(0x346)][_0x45c867(0x3a2)];if(!_0x26d128[_0x253676])return'';return _0x26d128[_0x253676][_0x45c867(0x2e8)];}else{const _0x12027d=VisuMZ[_0x45c867(0x2d6)][_0x45c867(0x42c)][_0x45c867(0x346)][_0x45c867(0x3a2)];if(!_0x12027d[_0x253676])return'';return _0x12027d[_0x253676][_0x45c867(0x19d)];}}}},TextManager[_0x1e0c1e(0x2a6)]=function(){const _0x20cdbc=_0x1e0c1e,_0x6741ae=TimeManager[_0x20cdbc(0x231)][_0x20cdbc(0x319)],_0x3c5804=VisuMZ[_0x20cdbc(0x2d6)][_0x20cdbc(0x42c)][_0x20cdbc(0x346)][_0x20cdbc(0x3a2)];if(!_0x3c5804[_0x6741ae])return'';if(_0x3c5804[_0x6741ae][_0x20cdbc(0x1b1)]===_0x20cdbc(0x218))return TextManager[_0x20cdbc(0x1bc)]['game'][_0x20cdbc(0x1ef)];else{if(_0x3c5804[_0x6741ae][_0x20cdbc(0x1b1)]==='summer'){if(_0x20cdbc(0x33d)===_0x20cdbc(0x44e)){const _0x2ed487=_0x27a50e[_0x20cdbc(0x377)](),_0x46e2af=_0x1d6e4c[_0x20cdbc(0x27a)](_0x2ed487);return _0x46e2af[_0x20cdbc(0x19d)]||_0x20cdbc(0x381);}else return TextManager[_0x20cdbc(0x1bc)][_0x20cdbc(0x175)]['SeasonSummer'];}else{if(_0x3c5804[_0x6741ae][_0x20cdbc(0x1b1)]==='autumn')return TextManager[_0x20cdbc(0x1bc)][_0x20cdbc(0x175)][_0x20cdbc(0x1f9)];else{if(_0x3c5804[_0x6741ae]['Season']===_0x20cdbc(0x1ea)){if(_0x20cdbc(0x3ce)===_0x20cdbc(0x2ae))_0x42724b['DateTimeSystem'][_0x20cdbc(0x42c)]['HudSprite'][_0x20cdbc(0x27d)][_0x20cdbc(0x2c4)](this,_0xa37057);else return TextManager['DATE_TIME_SYSTEM'][_0x20cdbc(0x175)][_0x20cdbc(0x19b)];}else{if(_0x20cdbc(0x457)===_0x20cdbc(0x3da))for(const _0x246af7 of _0x395a8c){_0x246af7[_0x20cdbc(0x264)](_0x94d2e6['skillDmgCond']);const _0x4eba49=_0x1c25b5(_0x3ae9b1['$1']),_0x545161=_0x459feb(_0x25c5e0['$2'])*0.01;_0x347e26[_0x20cdbc(0x2d6)][_0x20cdbc(0x1e7)](_0x4eba49)&&(_0x411cfe*=_0x545161);}else return'';}}}}},TextManager[_0x1e0c1e(0x3aa)]=function(_0x44bc35){const _0x1e1d4e=_0x1e0c1e,_0xaba068=TimeManager[_0x1e1d4e(0x231)][_0x1e1d4e(0x427)],_0x31e638=_0x44bc35?Number(_0xaba068)[_0x1e1d4e(0x31c)](0x2):String(_0xaba068);return Imported[_0x1e1d4e(0x280)]?_0x1e1d4e(0x2de)[_0x1e1d4e(0x3f1)](_0x31e638):_0x31e638;},TextManager[_0x1e0c1e(0x181)]=function(_0x368100){const _0x17264c=_0x1e0c1e,_0x273c19=VisuMZ[_0x17264c(0x2d6)]['Settings'][_0x17264c(0x346)][_0x17264c(0x446)];let _0x230b5a=TimeManager['_gameTime']['weekday'];_0x230b5a=_0x230b5a%_0x273c19||_0x273c19;const _0x1ae154=VisuMZ[_0x17264c(0x2d6)][_0x17264c(0x42c)][_0x17264c(0x346)][_0x17264c(0x30e)];if(!_0x1ae154[_0x230b5a])return'';return _0x368100?_0x1ae154[_0x230b5a][_0x17264c(0x2e8)]:_0x1ae154[_0x230b5a]['Name'];},TextManager[_0x1e0c1e(0x270)]=function(){const _0x181020=_0x1e0c1e,_0x2a6c43=VisuMZ['DateTimeSystem'][_0x181020(0x42c)][_0x181020(0x346)][_0x181020(0x446)];let _0x46cee3=TimeManager[_0x181020(0x231)][_0x181020(0x3c3)];_0x46cee3=_0x46cee3%_0x2a6c43||_0x2a6c43;const _0x4d3bd4=VisuMZ['DateTimeSystem'][_0x181020(0x42c)][_0x181020(0x346)][_0x181020(0x30e)];if(!_0x4d3bd4[_0x46cee3])return'';if(_0x4d3bd4[_0x46cee3]['WeekdayType']===_0x181020(0x3c3))return TextManager['DATE_TIME_SYSTEM']['game'][_0x181020(0x259)];else return _0x4d3bd4[_0x46cee3]['WeekdayType']===_0x181020(0x28a)?TextManager['DATE_TIME_SYSTEM'][_0x181020(0x175)][_0x181020(0x447)]:'';},TextManager[_0x1e0c1e(0x398)]=function(_0x5c6d43){const _0x579760=_0x1e0c1e,_0x3dede7=TimeManager[_0x579760(0x3f4)]['timeStruct'][_0x579760(0x1e9)],_0x43fca9=Math[_0x579760(0x390)](_0x3dede7/0x2),_0x291d12=TimeManager[_0x579760(0x231)][_0x579760(0x40a)];let _0x2a2934='';if(_0x5c6d43==='military')_0x2a2934=String(_0x291d12);else{if(_0x5c6d43==='military\x20pad'){if(_0x579760(0x29c)!==_0x579760(0x31f))_0x2a2934=Number(_0x291d12)[_0x579760(0x31c)](0x2);else{if(_0x56533c&&_0x4a4a24[_0x579760(0x33b)]())return!![];const _0x5e042a=_0x5dd3fb[_0x579760(0x2d6)][_0x579760(0x333)],_0x53ea43=_0x22580f[_0x579760(0x264)](_0x5e042a[_0x579760(0x26e)]);if(_0x53ea43)for(const _0x2f7bc4 of _0x53ea43){_0x2f7bc4[_0x579760(0x264)](_0x5e042a[_0x579760(0x26e)]);const _0x4a8b44=_0x2d7059(_0x11d18d['$1']),_0x3cd350=_0x25a097(_0x88bb26['$2']);_0x7be686[_0x579760(0x2d6)][_0x579760(0x3af)](_0x281d4d);if(!_0x446e39[_0x579760(0x2d6)][_0x579760(0x3f7)](_0x4a8b44,_0x3cd350))return![];}return!![];}}else{if(_0x5c6d43==='pad'){if('DmTlO'===_0x579760(0x246))_0x3d13be[_0x579760(0x2d6)][_0x579760(0x327)][_0x579760(0x2c4)](this);else{if(_0x291d12<_0x43fca9)_0x2a2934=Number(_0x291d12%_0x43fca9||Math['floor'](_0x3dede7/0x2))[_0x579760(0x31c)](0x2);else{if(_0x579760(0x273)!=='Ooual')_0x2a2934=Number(_0x291d12%_0x43fca9||Math[_0x579760(0x390)](_0x3dede7/0x2))[_0x579760(0x31c)](0x2);else{const _0x4ed82b=_0x39e2ce[_0x579760(0x1a6)](_0x2efde8['gameTimeData']()[_0x579760(0x319)],_0xeebbc7);_0x340c09[_0x579760(0x1a0)]()[_0x579760(0x427)]=_0x46cb9d['gameTimeData']()[_0x579760(0x427)]['clamp'](0x1,_0x4ed82b);}}}}else return _0x291d12<_0x43fca9?Number(_0x291d12%_0x43fca9||Math['floor'](_0x3dede7/0x2)):Number(_0x291d12%_0x43fca9||Math[_0x579760(0x390)](_0x3dede7/0x2));}}return Imported[_0x579760(0x280)]?_0x579760(0x2de)[_0x579760(0x3f1)](_0x2a2934):_0x2a2934;},TextManager[_0x1e0c1e(0x32d)]=function(_0x2179d0){const _0x69701d=_0x1e0c1e,_0x4ca2b7=TimeManager['_gameTime'][_0x69701d(0x1f1)],_0x17a52e=_0x2179d0?Number(_0x4ca2b7)[_0x69701d(0x31c)](0x2):String(_0x4ca2b7);return Imported[_0x69701d(0x280)]?'{{%1}}'[_0x69701d(0x3f1)](_0x17a52e):_0x17a52e;},TextManager[_0x1e0c1e(0x31a)]=function(_0x4a0b23){const _0x5c0851=_0x1e0c1e,_0x2cd765=TimeManager[_0x5c0851(0x231)][_0x5c0851(0x3d8)],_0x4ff34a=_0x4a0b23?Number(_0x2cd765)[_0x5c0851(0x31c)](0x2):String(_0x2cd765);return Imported[_0x5c0851(0x280)]?_0x5c0851(0x2de)['format'](_0x4ff34a):_0x4ff34a;},TextManager[_0x1e0c1e(0x1ec)]=function(_0x4002ae){const _0x9a033b=_0x1e0c1e,_0x312246=Math[_0x9a033b(0x390)](TimeManager[_0x9a033b(0x3f4)]['timeStruct']['hoursInDay']/0x2);if(_0x4002ae<_0x312246){if(_0x9a033b(0x465)!==_0x9a033b(0x465)){const _0x52a3c7=_0x3c4cd6['_realTime']['minute'],_0x2bbc49=_0x1d4d19?_0x3530c7(_0x52a3c7)['padZero'](0x2):_0x50333b(_0x52a3c7);return _0x12a6e3[_0x9a033b(0x280)]?'{{%1}}'[_0x9a033b(0x3f1)](_0x2bbc49):_0x2bbc49;}else return TextManager[_0x9a033b(0x1bc)][_0x9a033b(0x175)][_0x9a033b(0x441)];}else return TextManager['DATE_TIME_SYSTEM'][_0x9a033b(0x175)][_0x9a033b(0x2f7)];},TextManager[_0x1e0c1e(0x258)]=function(){const _0x370838=_0x1e0c1e,_0x58539b=TimeManager[_0x370838(0x231)][_0x370838(0x40a)];return this['gameTimeMeridiemFor'](_0x58539b);},TextManager[_0x1e0c1e(0x438)]=function(){const _0xb38caf=_0x1e0c1e,_0x1de09e=TimeManager[_0xb38caf(0x231)][_0xb38caf(0x40a)],_0x1d42b9=VisuMZ[_0xb38caf(0x2d6)][_0xb38caf(0x42c)][_0xb38caf(0x346)];if(_0x1d42b9[_0xb38caf(0x1d5)]&&_0x1d42b9[_0xb38caf(0x1d5)]['includes'](_0x1de09e)){if('TfelJ'===_0xb38caf(0x43f)){const _0x386ce=_0x223dbb[_0xb38caf(0x301)],_0x5d55c1=_0x1e98e8['DawnHours'][_0xb38caf(0x36f)](_0x52d194[_0xb38caf(0x40a)]);_0x1551bb[_0xb38caf(0x2d6)]['ChangeSwitch'](_0x386ce,_0x5d55c1);}else return TextManager[_0xb38caf(0x1bc)][_0xb38caf(0x400)][_0xb38caf(0x2da)];}else{if(_0x1d42b9['DayHours']&&_0x1d42b9[_0xb38caf(0x2cf)]['includes'](_0x1de09e))return TextManager['DATE_TIME_SYSTEM'][_0xb38caf(0x400)][_0xb38caf(0x1ac)];else{if(_0x1d42b9[_0xb38caf(0x33c)]&&_0x1d42b9[_0xb38caf(0x33c)][_0xb38caf(0x36f)](_0x1de09e))return TextManager[_0xb38caf(0x1bc)][_0xb38caf(0x400)][_0xb38caf(0x39c)];else{if(_0x1d42b9['NightHours']&&_0x1d42b9[_0xb38caf(0x2bc)][_0xb38caf(0x36f)](_0x1de09e))return TextManager[_0xb38caf(0x1bc)][_0xb38caf(0x400)][_0xb38caf(0x274)];else{if(_0xb38caf(0x269)!==_0xb38caf(0x2a4))return'';else{if(this[_0xb38caf(0x1e5)]===_0x397f0a)this[_0xb38caf(0x2bb)]();return this[_0xb38caf(0x1e5)];}}}}}},TextManager[_0x1e0c1e(0x3c4)]=function(_0x148eba){const _0x278c9c=_0x1e0c1e,_0x1db774=TimeManager[_0x278c9c(0x1f4)][_0x278c9c(0x351)],_0x1d216c=String(_0x148eba?_0x1db774%0x64:_0x1db774);return Imported['VisuMZ_0_CoreEngine']?_0x278c9c(0x2de)['format'](_0x1d216c):_0x1d216c;},TextManager[_0x1e0c1e(0x214)]=function(_0x5d0c6a){const _0x303826=_0x1e0c1e,_0x28531a=TimeManager[_0x303826(0x1f4)]['month'];if(_0x5d0c6a===_0x303826(0x35d))return String(_0x28531a);else{if(_0x5d0c6a===_0x303826(0x3c1)){const _0x472409=Number(_0x28531a)[_0x303826(0x31c)](0x2);return Imported[_0x303826(0x280)]?_0x303826(0x2de)[_0x303826(0x3f1)](_0x472409):_0x472409;}else{if(_0x5d0c6a===_0x303826(0x399))return TextManager[_0x303826(0x1bc)][_0x303826(0x400)][_0x303826(0x260)[_0x303826(0x3f1)](_0x28531a)];else{if(_0x303826(0x1c9)!=='UvfHq')return TextManager[_0x303826(0x1bc)][_0x303826(0x400)][_0x303826(0x3ba)['format'](_0x28531a)];else _0x3c9e61['DateTimeSystem'][_0x303826(0x23e)][_0x303826(0x2c4)](this),this['addDateTimeSystemCommands']();}}}},TextManager[_0x1e0c1e(0x328)]=function(){const _0x4861be=_0x1e0c1e,_0x55c428=TimeManager['_realTime']['month'],_0x32059a=VisuMZ[_0x4861be(0x2d6)][_0x4861be(0x42c)][_0x4861be(0x252)];if(_0x32059a[_0x4861be(0x1d4)]&&_0x32059a[_0x4861be(0x1d4)][_0x4861be(0x36f)](_0x55c428))return TextManager[_0x4861be(0x1bc)][_0x4861be(0x400)][_0x4861be(0x1ef)];else{if(_0x32059a['SummerMonths']&&_0x32059a[_0x4861be(0x284)][_0x4861be(0x36f)](_0x55c428)){if(_0x4861be(0x3f9)===_0x4861be(0x3f9))return TextManager[_0x4861be(0x1bc)][_0x4861be(0x400)]['SeasonSummer'];else{const _0x5a38fa=_0x51f952(_0x22c32b['$1'])[_0x4861be(0x338)](',')['map'](_0x204ce6=>_0x49c77f(_0x204ce6));return _0x5a38fa[_0x4861be(0x36f)](_0x3a9500[_0x4861be(0x226)]());}}else{if(_0x32059a[_0x4861be(0x21b)]&&_0x32059a['AutumnMonths'][_0x4861be(0x36f)](_0x55c428)){if(_0x4861be(0x2a9)!=='lpbln')return TextManager[_0x4861be(0x1bc)][_0x4861be(0x400)][_0x4861be(0x1f9)];else{if(this['_usesTimeTone']===_0xa6137f)this[_0x4861be(0x1d7)]();return this['_usesTimeTone'];}}else return _0x32059a[_0x4861be(0x24a)]&&_0x32059a[_0x4861be(0x24a)][_0x4861be(0x36f)](_0x55c428)?TextManager[_0x4861be(0x1bc)][_0x4861be(0x400)][_0x4861be(0x19b)]:_0x4861be(0x210)===_0x4861be(0x210)?'':0x3;}}},TextManager['realTimeDate']=function(_0x1754d0){const _0xdc7491=_0x1e0c1e,_0x1a4156=TimeManager[_0xdc7491(0x1f4)][_0xdc7491(0x427)],_0x426f3b=_0x1754d0?Number(_0x1a4156)[_0xdc7491(0x31c)](0x2):String(_0x1a4156);return Imported['VisuMZ_0_CoreEngine']?_0xdc7491(0x2de)[_0xdc7491(0x3f1)](_0x426f3b):_0x426f3b;},TextManager[_0x1e0c1e(0x209)]=function(_0x3c2293){const _0x29cb63=_0x1e0c1e;let _0x571674=TimeManager[_0x29cb63(0x1f4)][_0x29cb63(0x3c3)];return _0x571674=_0x571674%0x7||0x7,_0x3c2293?TextManager['DATE_TIME_SYSTEM'][_0x29cb63(0x400)]['WeekdayAbbr%1'['format'](_0x571674)]:TextManager[_0x29cb63(0x1bc)]['real']['WeekdayFull%1'[_0x29cb63(0x3f1)](_0x571674)];},TextManager[_0x1e0c1e(0x18f)]=function(){const _0x17b615=_0x1e0c1e;let _0x1e4838=TimeManager['_realTime'][_0x17b615(0x3c3)];const _0x24768e=VisuMZ['DateTimeSystem']['Settings'][_0x17b615(0x252)];if(_0x24768e[_0x17b615(0x30e)]&&_0x24768e[_0x17b615(0x30e)]['includes'](_0x1e4838)){if(_0x17b615(0x3bc)===_0x17b615(0x3bc))return TextManager[_0x17b615(0x1bc)][_0x17b615(0x400)][_0x17b615(0x259)];else _0xe75f36<_0x9a314f?_0x138ab9=_0x1d59b8(_0x69ec1d%_0x43d04f||_0x4577cd['floor'](_0x269550/0x2))['padZero'](0x2):_0x2e9a3b=_0x288a07(_0x120a90%_0x29ecce||_0x5e5c80['ceil'](_0x5f43ed/0x2))[_0x17b615(0x31c)](0x2);}else return _0x24768e['Weekends']&&_0x24768e['Weekends']['includes'](_0x1e4838)?TextManager[_0x17b615(0x1bc)][_0x17b615(0x400)][_0x17b615(0x447)]:'';},TextManager[_0x1e0c1e(0x3bb)]=function(_0x3b5a79){const _0x3957ff=_0x1e0c1e,_0x1acdf9=TimeManager[_0x3957ff(0x1f4)][_0x3957ff(0x40a)];let _0xfa35a9='';if(_0x3b5a79===_0x3957ff(0x3cc))_0xfa35a9=String(_0x1acdf9);else{if(_0x3b5a79===_0x3957ff(0x20c))_0xfa35a9=Number(_0x1acdf9)[_0x3957ff(0x31c)](0x2);else{if(_0x3b5a79===_0x3957ff(0x3c1))'nDWSu'===_0x3957ff(0x45c)?(this[_0x3957ff(0x22f)]=_0x1316ce(_0x3222e8['$1']),this[_0x3957ff(0x369)]=!![]):_0xfa35a9=Number(_0x1acdf9%0xc||0xc)['padZero'](0x2);else{if(_0x3957ff(0x3ee)!==_0x3957ff(0x3ee)){const _0x32e936=_0x4b5f8c['getWeekday'](),_0x2eaf40=_0x46abb3['getGameTimeWeekdayData'](_0x32e936);return _0x2eaf40[_0x3957ff(0x2e8)]||_0x3957ff(0x381);}else _0xfa35a9=String(_0x1acdf9%0xc||0xc);}}}return Imported[_0x3957ff(0x280)]?_0x3957ff(0x2de)[_0x3957ff(0x3f1)](_0xfa35a9):_0xfa35a9;},TextManager[_0x1e0c1e(0x463)]=function(_0x183ef0){const _0x39d9a2=_0x1e0c1e,_0x5d0c7a=TimeManager[_0x39d9a2(0x1f4)]['minute'],_0x133f4b=_0x183ef0?Number(_0x5d0c7a)[_0x39d9a2(0x31c)](0x2):String(_0x5d0c7a);return Imported[_0x39d9a2(0x280)]?'{{%1}}'['format'](_0x133f4b):_0x133f4b;},TextManager[_0x1e0c1e(0x239)]=function(_0x2fa700){const _0x4944ad=_0x1e0c1e,_0x153f05=TimeManager['_realTime'][_0x4944ad(0x3d8)],_0x19d53a=_0x2fa700?Number(_0x153f05)['padZero'](0x2):String(_0x153f05);return Imported[_0x4944ad(0x280)]?'{{%1}}'[_0x4944ad(0x3f1)](_0x19d53a):_0x19d53a;},TextManager[_0x1e0c1e(0x45b)]=function(_0x3a9514){const _0x51d26f=_0x1e0c1e;if(_0x3a9514<0xc){if(_0x51d26f(0x28e)!==_0x51d26f(0x43d))return TextManager[_0x51d26f(0x1bc)][_0x51d26f(0x400)][_0x51d26f(0x441)];else this['_date']=new _0x1ec915(),this[_0x51d26f(0x25c)]();}else{if(_0x51d26f(0x472)==='xkRWw')return TextManager[_0x51d26f(0x1bc)]['real']['TimePM'];else{const _0x178d5e=_0x10f5b8['VarHour'],_0x14c879=_0x59522d[_0x51d26f(0x40a)];_0x5aa090['setValue'](_0x178d5e,_0x14c879);}}},TextManager[_0x1e0c1e(0x198)]=function(){const _0x5219a8=_0x1e0c1e,_0x2d86bb=TimeManager[_0x5219a8(0x1f4)][_0x5219a8(0x40a)];return this[_0x5219a8(0x45b)](_0x2d86bb);},TextManager[_0x1e0c1e(0x2c7)]=function(){const _0x1562ad=_0x1e0c1e,_0x41c314=TimeManager[_0x1562ad(0x1f4)]['hour'],_0x3b0451=VisuMZ[_0x1562ad(0x2d6)][_0x1562ad(0x42c)][_0x1562ad(0x252)];if(_0x3b0451['DawnHours']&&_0x3b0451[_0x1562ad(0x1d5)][_0x1562ad(0x36f)](_0x41c314))return TextManager[_0x1562ad(0x1bc)]['real'][_0x1562ad(0x2da)];else{if(_0x3b0451['DayHours']&&_0x3b0451['DayHours']['includes'](_0x41c314)){if(_0x1562ad(0x1fb)===_0x1562ad(0x1fb))return TextManager[_0x1562ad(0x1bc)]['real'][_0x1562ad(0x1ac)];else _0x5b35ac*=_0x40a123;}else{if(_0x3b0451[_0x1562ad(0x33c)]&&_0x3b0451[_0x1562ad(0x33c)][_0x1562ad(0x36f)](_0x41c314))return TextManager['DATE_TIME_SYSTEM'][_0x1562ad(0x400)][_0x1562ad(0x39c)];else return _0x3b0451[_0x1562ad(0x2bc)]&&_0x3b0451[_0x1562ad(0x2bc)]['includes'](_0x41c314)?TextManager[_0x1562ad(0x1bc)][_0x1562ad(0x400)][_0x1562ad(0x274)]:'';}}},Game_System[_0x1e0c1e(0x1bc)]={'starting':{'year':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['GameTimeGeneral'][_0x1e0c1e(0x299)]??0x1,'month':VisuMZ['DateTimeSystem']['Settings'][_0x1e0c1e(0x346)][_0x1e0c1e(0x36d)]??0x1,'date':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x346)][_0x1e0c1e(0x1b7)]??0x1,'weekday':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['GameTimeGeneral'][_0x1e0c1e(0x3f5)]??0x1,'hour':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['GameTimeGeneral'][_0x1e0c1e(0x2a2)]??0x8,'minute':VisuMZ[_0x1e0c1e(0x2d6)]['Settings']['GameTimeGeneral'][_0x1e0c1e(0x37c)]??0x0,'msPerMinute':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x346)][_0x1e0c1e(0x309)]??0x3e8}},VisuMZ[_0x1e0c1e(0x2d6)]['Game_System_initialize']=Game_System['prototype'][_0x1e0c1e(0x403)],Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x403)]=function(){const _0x2312a9=_0x1e0c1e;VisuMZ['DateTimeSystem'][_0x2312a9(0x1e0)][_0x2312a9(0x2c4)](this),this['initDateTimeSystemSettings'](),this['initDateTimeSystemGameTime'](),this[_0x2312a9(0x340)]();},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x2bb)]=function(){const _0x4154ba=_0x1e0c1e;this[_0x4154ba(0x1e5)]=!![];},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x3b2)]=function(){const _0x669db6=_0x1e0c1e;if(this['_showDateTimeSystemHud']===undefined)this[_0x669db6(0x2bb)]();return this[_0x669db6(0x1e5)];},Game_System['prototype']['setDateTimeSystemHudVisible']=function(_0xdcac73){const _0x39149d=_0x1e0c1e;if(this[_0x39149d(0x1e5)]===undefined)this['initDateTimeSystemSettings']();this[_0x39149d(0x1e5)]=_0xdcac73;},Game_System['prototype'][_0x1e0c1e(0x267)]=function(){const _0x4d2356=_0x1e0c1e,_0x2667f8=Game_System[_0x4d2356(0x1bc)][_0x4d2356(0x362)];this[_0x4d2356(0x231)]={'year':_0x2667f8[_0x4d2356(0x351)],'month':_0x2667f8[_0x4d2356(0x319)],'date':_0x2667f8[_0x4d2356(0x427)],'weekday':_0x2667f8['weekday'],'hour':_0x2667f8[_0x4d2356(0x40a)],'minute':_0x2667f8[_0x4d2356(0x1f1)],'msPerMinute':Math['max'](_0x2667f8[_0x4d2356(0x309)],TimeManager[_0x4d2356(0x451)]),'paused':![]};},Game_System['prototype'][_0x1e0c1e(0x1a0)]=function(){const _0x722714=_0x1e0c1e;if(this['_gameTime']===undefined)this[_0x722714(0x267)]();return this[_0x722714(0x231)];},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x39a)]=function(){const _0x2ee21c=_0x1e0c1e;this[_0x2ee21c(0x18a)](0x1);},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x18a)]=function(_0x4cbfd6){const _0x556527=_0x1e0c1e,_0x579ad6=this[_0x556527(0x1a0)]();_0x579ad6[_0x556527(0x1f1)]+=_0x4cbfd6,this[_0x556527(0x3b5)]();},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x3b5)]=function(){const _0x27797d=_0x1e0c1e,_0x63dfbe=this[_0x27797d(0x1a0)](),_0x33461b=TimeManager[_0x27797d(0x3f4)][_0x27797d(0x3be)];if(_0x63dfbe[_0x27797d(0x1f1)]>=_0x33461b[_0x27797d(0x34f)]){if(_0x27797d(0x2f5)!==_0x27797d(0x193))_0x63dfbe[_0x27797d(0x40a)]+=Math[_0x27797d(0x320)](_0x63dfbe[_0x27797d(0x1f1)]/_0x33461b['minutesInHour']),_0x63dfbe[_0x27797d(0x1f1)]=_0x63dfbe[_0x27797d(0x1f1)]%_0x33461b['minutesInHour'];else return _0x47f9c7[_0x27797d(0x1a0)]();}this['checkGameTimeHourOverflow']();},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x44b)]=function(){const _0x2df524=_0x1e0c1e,_0x5aec6e=this[_0x2df524(0x1a0)](),_0x26f2c6=TimeManager[_0x2df524(0x3f4)][_0x2df524(0x3be)];if(_0x5aec6e[_0x2df524(0x40a)]>=_0x26f2c6[_0x2df524(0x1e9)]){if(_0x2df524(0x216)===_0x2df524(0x25e))return _0x5e0b9d(_0x37b57b%_0x2f58b5||_0x5070b1[_0x2df524(0x320)](_0x4ab063/0x2));else{const _0x225690=Math[_0x2df524(0x320)](_0x5aec6e[_0x2df524(0x40a)]/_0x26f2c6[_0x2df524(0x1e9)]);this['increaseGameTimeDays'](_0x225690),_0x5aec6e[_0x2df524(0x40a)]=_0x5aec6e[_0x2df524(0x40a)]%_0x26f2c6[_0x2df524(0x1e9)];}}},Game_System[_0x1e0c1e(0x205)]['increaseGameTimeDays']=function(_0x3fd976){const _0x4ec920=_0x1e0c1e,_0xd144d4=this['gameTimeData']();_0xd144d4[_0x4ec920(0x3c3)]+=_0x3fd976,_0xd144d4[_0x4ec920(0x427)]+=_0x3fd976,this['checkGameTimeWeekdayOverflow'](),this['checkGameTimeDateOverflow']();},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x2d5)]=function(){const _0x34ba44=_0x1e0c1e,_0x5effad=this[_0x34ba44(0x1a0)]();if(_0x5effad['weekday']>TimeManager[_0x34ba44(0x3ad)]()){const _0x4eb826=TimeManager['getGameTimeTotalWeekdays']();_0x5effad[_0x34ba44(0x3c3)]=_0x5effad[_0x34ba44(0x3c3)]%_0x4eb826||_0x4eb826;}},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x1c5)]=function(){const _0x5454be=_0x1e0c1e,_0x42cfad=this[_0x5454be(0x1a0)]();for(;;){if(_0x42cfad[_0x5454be(0x319)]>TimeManager['getGameTimeTotalMonths']()){if(_0x5454be(0x45d)===_0x5454be(0x45d)){_0x42cfad['month']-=TimeManager[_0x5454be(0x211)](),_0x42cfad[_0x5454be(0x351)]+=0x1;continue;}else{const _0x49807e=_0x46416f[_0x5454be(0x31b)],_0x3a0cbf=_0x5aee8b[_0x5454be(0x2c0)];_0x45d00c['setValue'](_0x49807e,_0x3a0cbf);}}const _0x735be4=TimeManager[_0x5454be(0x1a6)](_0x42cfad[_0x5454be(0x319)],_0x42cfad[_0x5454be(0x351)]);if(_0x42cfad['date']>_0x735be4){if(_0x5454be(0x353)===_0x5454be(0x278)){_0x447439[_0x5454be(0x264)](_0x47ffd9[_0x5454be(0x26e)]);const _0x511805=_0x3580a5(_0x1f5c6a['$1']),_0x2b44de=_0x35e8dd(_0x17b171['$2']);_0x3ea408[_0x5454be(0x2d6)][_0x5454be(0x3af)](_0x535ac3);if(!_0x176590[_0x5454be(0x2d6)][_0x5454be(0x3f7)](_0x511805,_0x2b44de))return![];}else{_0x42cfad[_0x5454be(0x427)]-=_0x735be4,_0x42cfad['month']+=0x1;continue;}}return;}},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x3ff)]=function(_0xf5e8f6){const _0x2b8c7b=_0x1e0c1e,_0x266b01=this[_0x2b8c7b(0x1a0)]();if(_0x266b01[_0x2b8c7b(0x309)]===_0xf5e8f6)return;_0x266b01[_0x2b8c7b(0x309)]=Math[_0x2b8c7b(0x189)](_0xf5e8f6,TimeManager[_0x2b8c7b(0x451)]);if(_0xf5e8f6===Number[_0x2b8c7b(0x294)])return;TimeManager['updateGameTime'](_0xf5e8f6);},Game_System['prototype']['restartGameTime']=function(){const _0x583b7c=_0x1e0c1e,_0x361b28=this[_0x583b7c(0x1a0)](),_0x4e34b4=_0x361b28[_0x583b7c(0x309)];if(_0x4e34b4===Number[_0x583b7c(0x294)])return;TimeManager[_0x583b7c(0x2e1)](_0x4e34b4);},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x327)]=Scene_Load[_0x1e0c1e(0x205)]['onLoadSuccess'],Scene_Load['prototype']['onLoadSuccess']=function(){const _0x3ff3da=_0x1e0c1e;VisuMZ['DateTimeSystem']['Scene_Load_onLoadSuccess'][_0x3ff3da(0x2c4)](this);},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x3e7)]=function(){const _0x428df7=_0x1e0c1e,_0x20c303=this[_0x428df7(0x1a0)]();_0x20c303[_0x428df7(0x272)]=!![];},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x371)]=function(){const _0x109f49=_0x1e0c1e,_0x55ad36=this['gameTimeData']();_0x55ad36[_0x109f49(0x272)]=![];},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x2b1)]=function(){const _0xc059f4=_0x1e0c1e,_0x1c8979={'year':Game_System['DATE_TIME_SYSTEM']['starting'][_0xc059f4(0x351)],'month':Game_System['DATE_TIME_SYSTEM'][_0xc059f4(0x362)]['month'],'date':Game_System['DATE_TIME_SYSTEM'][_0xc059f4(0x362)][_0xc059f4(0x427)]},_0x375b02={'year':$gameSystem[_0xc059f4(0x1a0)]()[_0xc059f4(0x351)],'month':$gameSystem[_0xc059f4(0x1a0)]()[_0xc059f4(0x319)],'date':$gameSystem['gameTimeData']()[_0xc059f4(0x427)]},_0x3f2b60=Game_System[_0xc059f4(0x1bc)][_0xc059f4(0x362)][_0xc059f4(0x3c3)];let _0x199563=0x0;VisuMZ[_0xc059f4(0x2d6)][_0xc059f4(0x206)](_0x1c8979,_0x375b02)?_0x199563=VisuMZ[_0xc059f4(0x2d6)][_0xc059f4(0x32e)](_0x1c8979,_0x375b02):_0x199563=-VisuMZ[_0xc059f4(0x2d6)][_0xc059f4(0x32e)](_0x375b02,_0x1c8979);const _0x444c11=TimeManager['getGameTimeTotalWeekdays'](),_0x13aac9=(_0x3f2b60+_0x199563)%_0x444c11||_0x444c11;$gameSystem['gameTimeData']()[_0xc059f4(0x3c3)]=_0x13aac9;},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x32e)]=function(_0x25ffc2,_0xa72e64){const _0x197848=_0x1e0c1e;let _0x39b0a2=0x0;for(let _0x1d5ee7=_0x25ffc2[_0x197848(0x351)];_0x1d5ee7<=_0xa72e64[_0x197848(0x351)];_0x1d5ee7++){let _0x3de284=0x0;if(_0x1d5ee7===_0x25ffc2['year'])_0x3de284=_0x25ffc2[_0x197848(0x319)];let _0x307865=TimeManager[_0x197848(0x211)]()-0x1;if(_0x1d5ee7===_0xa72e64[_0x197848(0x351)])_0x307865=_0xa72e64[_0x197848(0x319)];for(let _0x376df8=_0x3de284;_0x376df8<=_0x307865;_0x376df8++){let _0x1dc6e5=0x0;if(_0x1d5ee7===_0x25ffc2['year']&&_0x376df8===_0x25ffc2['month'])_0x1dc6e5=_0x25ffc2[_0x197848(0x427)];let _0x21c7bb=TimeManager['checkGameTimeTotalDaysInMonth'](_0x376df8,_0x1d5ee7)-0x1;if(_0x1d5ee7===_0xa72e64[_0x197848(0x351)]&&_0x376df8===_0xa72e64[_0x197848(0x319)])_0x21c7bb=_0xa72e64[_0x197848(0x427)];_0x39b0a2+=_0x21c7bb-_0x1dc6e5;}}return _0x39b0a2;},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x206)]=function(_0x48cd5e,_0x1da40e){const _0x106255=_0x1e0c1e;if(_0x1da40e[_0x106255(0x351)]>_0x48cd5e[_0x106255(0x351)])return!![];if(_0x1da40e[_0x106255(0x319)]>_0x48cd5e[_0x106255(0x319)])return!![];return _0x1da40e[_0x106255(0x427)]>_0x48cd5e[_0x106255(0x427)];},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x340)]=function(){const _0x385fdf=_0x1e0c1e;this[_0x385fdf(0x3c6)]=null;},VisuMZ['DateTimeSystem'][_0x1e0c1e(0x20b)]=Game_System['prototype']['onBeforeSave'],Game_System[_0x1e0c1e(0x205)]['onBeforeSave']=function(){const _0x5779d7=_0x1e0c1e;VisuMZ[_0x5779d7(0x2d6)][_0x5779d7(0x20b)]['call'](this);if(Imported[_0x5779d7(0x17d)]){if(_0x5779d7(0x176)===_0x5779d7(0x176))this[_0x5779d7(0x1ce)]();else{if(!this['_lastTime'])return 0x0;return this['_lastTime']['minutesInHour'];}}},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x1ce)]=function(){const _0x45f4b8=_0x1e0c1e;this[_0x45f4b8(0x3c6)]=new Date()[_0x45f4b8(0x366)]();},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x448)]=Game_System['prototype']['onAfterLoad'],Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x1c4)]=function(){const _0x15748f=_0x1e0c1e;VisuMZ[_0x15748f(0x2d6)][_0x15748f(0x448)][_0x15748f(0x2c4)](this),Imported[_0x15748f(0x17d)]&&this[_0x15748f(0x372)]();},Game_System[_0x1e0c1e(0x205)][_0x1e0c1e(0x372)]=function(){const _0x1302eb=_0x1e0c1e;if(!this[_0x1302eb(0x3c6)])return;const _0x53e8a7=TimeManager[_0x1302eb(0x3f4)]['saveLoadVarID'];if(_0x53e8a7<=0x0)return;const _0x10025b=new Date()[_0x1302eb(0x366)](),_0x154d6a=_0x10025b-this['_lastSaveTime'],_0x56c8fe=Math['round'](_0x154d6a/(0x3e8*0x3c));if($gameVariables){if(_0x1302eb(0x262)!=='seUtH')$gameVariables[_0x1302eb(0x394)](_0x53e8a7,_0x56c8fe);else return _0x75067b(_0x6d8ed%_0x13f97f||_0x323022['ceil'](_0x6fb1ee/0x2));}},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x178)]=function(_0x15b7c9){const _0x4b3f6d=_0x1e0c1e,_0x42a754=_0x15b7c9?'RealTimeData':_0x4b3f6d(0x1a7),_0x6243a0=VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x42c)][_0x42a754];if(!_0x6243a0)return;const _0x3286b7=_0x15b7c9?TimeManager['_realTime']:TimeManager['_gameTime'];if(!_0x3286b7)return;if(_0x15b7c9){const _0x22c394=VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x42c)][_0x4b3f6d(0x252)];if(_0x6243a0[_0x4b3f6d(0x240)]&&_0x22c394['SpringMonths']){const _0x4a643c=_0x6243a0['SwSpring'],_0x1a3e00=_0x22c394[_0x4b3f6d(0x1d4)][_0x4b3f6d(0x36f)](_0x3286b7[_0x4b3f6d(0x319)]);VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0x4a643c,_0x1a3e00);}if(_0x6243a0[_0x4b3f6d(0x45a)]&&_0x22c394[_0x4b3f6d(0x284)]){if(_0x4b3f6d(0x347)===_0x4b3f6d(0x347)){const _0x5b96ba=_0x6243a0[_0x4b3f6d(0x45a)],_0x26fd72=_0x22c394['SummerMonths'][_0x4b3f6d(0x36f)](_0x3286b7['month']);VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0x5b96ba,_0x26fd72);}else{if(!this[_0x4b3f6d(0x41d)])return;if(!this['_weekdaySprite']['bitmap'])return;if(this[_0x4b3f6d(0x1e1)]===_0x21b953[_0x4b3f6d(0x35f)]())return;this['_cache_weekday']=_0x5e622e[_0x4b3f6d(0x35f)](),this[_0x4b3f6d(0x41d)][_0x4b3f6d(0x2ee)][_0x4b3f6d(0x352)](),_0x2e72a5['DateTimeSystem'][_0x4b3f6d(0x281)][_0x4b3f6d(0x2c4)](this,this[_0x4b3f6d(0x41d)][_0x4b3f6d(0x2ee)]);}}if(_0x6243a0[_0x4b3f6d(0x374)]&&_0x22c394['AutumnMonths']){if('WPKVl'===_0x4b3f6d(0x3b8))this['_dateTimeHudVisible']=![];else{const _0x39aac2=_0x6243a0[_0x4b3f6d(0x374)],_0x363865=_0x22c394[_0x4b3f6d(0x21b)][_0x4b3f6d(0x36f)](_0x3286b7[_0x4b3f6d(0x319)]);VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0x39aac2,_0x363865);}}if(_0x6243a0[_0x4b3f6d(0x416)]&&_0x22c394[_0x4b3f6d(0x24a)]){const _0x4c9278=_0x6243a0[_0x4b3f6d(0x416)],_0x58a90d=_0x22c394[_0x4b3f6d(0x24a)][_0x4b3f6d(0x36f)](_0x3286b7[_0x4b3f6d(0x319)]);VisuMZ[_0x4b3f6d(0x2d6)]['ChangeSwitch'](_0x4c9278,_0x58a90d);}if(_0x6243a0[_0x4b3f6d(0x1ed)]&&_0x22c394[_0x4b3f6d(0x30e)]){const _0x4d8550=_0x6243a0['SwWeekday'],_0x2f52c7=_0x22c394['Weekdays']['includes'](_0x3286b7[_0x4b3f6d(0x3c3)]);VisuMZ['DateTimeSystem'][_0x4b3f6d(0x3df)](_0x4d8550,_0x2f52c7);}if(_0x6243a0[_0x4b3f6d(0x257)]&&_0x22c394[_0x4b3f6d(0x44f)]){const _0x52079d=_0x6243a0[_0x4b3f6d(0x257)],_0x2bddae=_0x22c394[_0x4b3f6d(0x44f)][_0x4b3f6d(0x36f)](_0x3286b7[_0x4b3f6d(0x3c3)]);VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0x52079d,_0x2bddae);}if(_0x6243a0['SwDawn']&&_0x22c394[_0x4b3f6d(0x1d5)]){if(_0x4b3f6d(0x2f6)!==_0x4b3f6d(0x3d2)){const _0x580e5d=_0x6243a0['SwDawn'],_0x4e994a=_0x22c394[_0x4b3f6d(0x1d5)][_0x4b3f6d(0x36f)](_0x3286b7['hour']);VisuMZ['DateTimeSystem'][_0x4b3f6d(0x3df)](_0x580e5d,_0x4e994a);}else return _0x25f724=this[_0x4b3f6d(0x405)](_0x33fe40),_0x2c4d12=this[_0x4b3f6d(0x343)](_0x24fa48),_0x348138;}if(_0x6243a0[_0x4b3f6d(0x26f)]&&_0x22c394[_0x4b3f6d(0x2cf)]){if('avdVK'===_0x4b3f6d(0x2be)){if(_0x366a26[_0x4b3f6d(0x1ed)]){const _0x16de29=_0x46169a[_0x4b3f6d(0x1ed)],_0x3ed0e3=_0x3a46e3[_0x4b3f6d(0x342)]==='weekday';_0x177b04['DateTimeSystem'][_0x4b3f6d(0x3df)](_0x16de29,_0x3ed0e3);}if(_0x45e4e6[_0x4b3f6d(0x257)]){const _0x2bd41b=_0x38ad81[_0x4b3f6d(0x257)],_0x534173=_0x2f7c75[_0x4b3f6d(0x342)]===_0x4b3f6d(0x28a);_0x9315f7[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0x2bd41b,_0x534173);}}else{const _0x117b38=_0x6243a0[_0x4b3f6d(0x26f)],_0x2c5e09=_0x22c394[_0x4b3f6d(0x2cf)][_0x4b3f6d(0x36f)](_0x3286b7[_0x4b3f6d(0x40a)]);VisuMZ[_0x4b3f6d(0x2d6)]['ChangeSwitch'](_0x117b38,_0x2c5e09);}}if(_0x6243a0[_0x4b3f6d(0x20e)]&&_0x22c394[_0x4b3f6d(0x33c)]){const _0x4cb24a=_0x6243a0[_0x4b3f6d(0x20e)],_0x1b78cb=_0x22c394[_0x4b3f6d(0x33c)][_0x4b3f6d(0x36f)](_0x3286b7['hour']);VisuMZ[_0x4b3f6d(0x2d6)]['ChangeSwitch'](_0x4cb24a,_0x1b78cb);}if(_0x6243a0[_0x4b3f6d(0x370)]&&_0x22c394[_0x4b3f6d(0x2bc)]){if(_0x4b3f6d(0x466)===_0x4b3f6d(0x466)){const _0x126c03=_0x6243a0[_0x4b3f6d(0x370)],_0x5cac23=_0x22c394[_0x4b3f6d(0x2bc)][_0x4b3f6d(0x36f)](_0x3286b7[_0x4b3f6d(0x40a)]);VisuMZ['DateTimeSystem'][_0x4b3f6d(0x3df)](_0x126c03,_0x5cac23);}else this[_0x4b3f6d(0x227)]=[0x0,0x0,0x0,0x0];}}else{if(_0x4b3f6d(0x462)!=='eEAgF'){if(!this[_0x4b3f6d(0x36a)])return 0x0;return this[_0x4b3f6d(0x36a)][_0x4b3f6d(0x427)];}else{const _0x8bac91=VisuMZ[_0x4b3f6d(0x2d6)]['Settings'][_0x4b3f6d(0x346)],_0x4f95ff=_0x3286b7[_0x4b3f6d(0x319)],_0x157f1d=_0x8bac91[_0x4b3f6d(0x3a2)][_0x4f95ff];if(_0x157f1d){if(_0x6243a0[_0x4b3f6d(0x240)]){if(_0x4b3f6d(0x26b)===_0x4b3f6d(0x26b)){const _0x81e374=_0x6243a0['SwSpring'],_0x294659=_0x157f1d[_0x4b3f6d(0x1b1)]==='spring';VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0x81e374,_0x294659);}else{const _0x21688c=_0x3c6fe4[_0x4b3f6d(0x226)](),_0x2aa616=_0x1d60d9[_0x4b3f6d(0x18b)](),_0x372ab7=_0x1bf0b9[_0x4b3f6d(0x1d2)](),_0x3525a9=_0x45dbde['getMinutesInHour'](),_0x5e5776=_0x372ab7/_0x3525a9,_0xb4596d=this[_0x4b3f6d(0x1da)](_0x21688c),_0x94169=this[_0x4b3f6d(0x1da)](_0x2aa616),_0x2fb0b4=_0x3e48e1[_0x4b3f6d(0x391)](_0xb4596d),_0x1113b2=_0x1569d2[_0x4b3f6d(0x391)](_0x94169),_0x8aba93=[_0x59089b[_0x4b3f6d(0x3a4)](_0x2fb0b4[0x0]+(_0x1113b2[0x0]-_0x2fb0b4[0x0])*_0x5e5776)['clamp'](0x0,0xff),_0xe5a7e4[_0x4b3f6d(0x3a4)](_0x2fb0b4[0x1]+(_0x1113b2[0x1]-_0x2fb0b4[0x1])*_0x5e5776)[_0x4b3f6d(0x379)](0x0,0xff),_0xb831b9[_0x4b3f6d(0x3a4)](_0x2fb0b4[0x2]+(_0x1113b2[0x2]-_0x2fb0b4[0x2])*_0x5e5776)['clamp'](0x0,0xff)];this[_0x4b3f6d(0x329)]=_0x169e4a['arrayToHex'](_0x8aba93);}}if(_0x6243a0[_0x4b3f6d(0x45a)]){if(_0x4b3f6d(0x2dd)!==_0x4b3f6d(0x2df)){const _0x53025a=_0x6243a0['SwSummer'],_0x1dfc1b=_0x157f1d[_0x4b3f6d(0x1b1)]==='summer';VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0x53025a,_0x1dfc1b);}else return 0x4;}if(_0x6243a0[_0x4b3f6d(0x374)]){if(_0x4b3f6d(0x421)===_0x4b3f6d(0x202)){const _0x39c6e5=_0x12790d['SwSpring'],_0xc1356a=_0x113361[_0x4b3f6d(0x1d4)]['includes'](_0x29269e[_0x4b3f6d(0x319)]);_0x467139[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0x39c6e5,_0xc1356a);}else{const _0x3f1781=_0x6243a0[_0x4b3f6d(0x374)],_0x2b5318=_0x157f1d[_0x4b3f6d(0x1b1)]===_0x4b3f6d(0x3f2);VisuMZ['DateTimeSystem'][_0x4b3f6d(0x3df)](_0x3f1781,_0x2b5318);}}if(_0x6243a0[_0x4b3f6d(0x416)]){const _0x25c7d8=_0x6243a0[_0x4b3f6d(0x416)],_0x287a49=_0x157f1d[_0x4b3f6d(0x1b1)]==='winter';VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0x25c7d8,_0x287a49);}}const _0x5cb9e7=_0x3286b7[_0x4b3f6d(0x3c3)],_0x1abb12=_0x8bac91['Weekdays'][_0x5cb9e7];if(_0x1abb12){if(_0x4b3f6d(0x3fc)!==_0x4b3f6d(0x221)){if(_0x6243a0[_0x4b3f6d(0x1ed)]){if(_0x4b3f6d(0x3ec)===_0x4b3f6d(0x3ec)){const _0x329529=_0x6243a0[_0x4b3f6d(0x1ed)],_0x17a28a=_0x1abb12[_0x4b3f6d(0x342)]===_0x4b3f6d(0x3c3);VisuMZ['DateTimeSystem'][_0x4b3f6d(0x3df)](_0x329529,_0x17a28a);}else{let _0x42b7fb=0x0;if(_0x2517a4===_0x271572[_0x4b3f6d(0x351)])_0x42b7fb=_0x3cfabd[_0x4b3f6d(0x319)];let _0x361a50=_0x55b5d7[_0x4b3f6d(0x211)]()-0x1;if(_0x1d8309===_0x16edc2[_0x4b3f6d(0x351)])_0x361a50=_0x7de719[_0x4b3f6d(0x319)];for(let _0x37b4ef=_0x42b7fb;_0x37b4ef<=_0x361a50;_0x37b4ef++){let _0x14520e=0x0;if(_0x516929===_0x162411['year']&&_0x37b4ef===_0x25da20['month'])_0x14520e=_0x155754[_0x4b3f6d(0x427)];let _0x1fb771=_0x5c25b3['checkGameTimeTotalDaysInMonth'](_0x37b4ef,_0x35e9e9)-0x1;if(_0x16e8d3===_0x4df91a[_0x4b3f6d(0x351)]&&_0x37b4ef===_0x4b0344[_0x4b3f6d(0x319)])_0x1fb771=_0x58c9d2[_0x4b3f6d(0x427)];_0x22d5b6+=_0x1fb771-_0x14520e;}}}if(_0x6243a0[_0x4b3f6d(0x257)]){if(_0x4b3f6d(0x3e6)!=='lbxLW'){const _0x1b11ba=_0xa1c428['SwSpring'],_0x16c78e=_0x24f617[_0x4b3f6d(0x1b1)]===_0x4b3f6d(0x218);_0x598278[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0x1b11ba,_0x16c78e);}else{const _0x1a3734=_0x6243a0[_0x4b3f6d(0x257)],_0x372949=_0x1abb12[_0x4b3f6d(0x342)]===_0x4b3f6d(0x28a);VisuMZ['DateTimeSystem']['ChangeSwitch'](_0x1a3734,_0x372949);}}}else{const _0x91351a=_0x57390a(_0x1ba68e)[_0x4b3f6d(0x338)](',')[_0x4b3f6d(0x2d1)](_0x1488e3=>_0x1488e3['toLowerCase']()[_0x4b3f6d(0x324)]()),_0x3fcfd4=_0x114689[_0x4b3f6d(0x190)]();if(_0x3fcfd4===0x1&&!_0x91351a[_0x4b3f6d(0x36f)]('spring'))return![];if(_0x3fcfd4===0x2&&!_0x91351a['includes'](_0x4b3f6d(0x26c)))return![];if(_0x3fcfd4===0x3&&!_0x91351a['includes']('autumn'))return![];if(_0x3fcfd4===0x4&&!_0x91351a[_0x4b3f6d(0x36f)]('winter'))return![];}}if(_0x6243a0['SwDawn']&&_0x8bac91[_0x4b3f6d(0x1d5)]){const _0xc654ce=_0x6243a0[_0x4b3f6d(0x301)],_0x1c66bb=_0x8bac91[_0x4b3f6d(0x1d5)][_0x4b3f6d(0x36f)](_0x3286b7['hour']);VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0xc654ce,_0x1c66bb);}if(_0x6243a0[_0x4b3f6d(0x26f)]&&_0x8bac91[_0x4b3f6d(0x2cf)]){const _0x209150=_0x6243a0[_0x4b3f6d(0x26f)],_0x42947a=_0x8bac91['DayHours'][_0x4b3f6d(0x36f)](_0x3286b7[_0x4b3f6d(0x40a)]);VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0x209150,_0x42947a);}if(_0x6243a0[_0x4b3f6d(0x20e)]&&_0x8bac91[_0x4b3f6d(0x33c)]){const _0xc1d5ab=_0x6243a0['SwDusk'],_0x3ea6a0=_0x8bac91[_0x4b3f6d(0x33c)]['includes'](_0x3286b7[_0x4b3f6d(0x40a)]);VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0xc1d5ab,_0x3ea6a0);}if(_0x6243a0[_0x4b3f6d(0x370)]&&_0x8bac91[_0x4b3f6d(0x2bc)]){const _0x1e40ec=_0x6243a0[_0x4b3f6d(0x370)],_0x3366eb=_0x8bac91['NightHours'][_0x4b3f6d(0x36f)](_0x3286b7[_0x4b3f6d(0x40a)]);VisuMZ[_0x4b3f6d(0x2d6)][_0x4b3f6d(0x3df)](_0x1e40ec,_0x3366eb);}}}},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x3df)]=function(_0x1ec67c,_0x67b045){const _0x4b245d=_0x1e0c1e;if($gameSwitches[_0x4b245d(0x34e)](_0x1ec67c)!==_0x67b045){if('FlqMP'===_0x4b245d(0x2fc))return![];else $gameSwitches['setValue'](_0x1ec67c,_0x67b045);}},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x3dc)]=function(_0x3cb584){const _0x30b719=_0x1e0c1e,_0x1c5173=_0x3cb584?_0x30b719(0x385):_0x30b719(0x1a7),_0x2bfc81=VisuMZ['DateTimeSystem'][_0x30b719(0x42c)][_0x1c5173];if(!_0x2bfc81)return;const _0x2e7372=_0x3cb584?TimeManager[_0x30b719(0x1f4)]:TimeManager['_gameTime'];if(!_0x2e7372)return;if(_0x2bfc81[_0x30b719(0x2ea)]){if(_0x30b719(0x223)!==_0x30b719(0x20d)){const _0x38053a=_0x2bfc81[_0x30b719(0x2ea)],_0x1edb76=_0x2e7372['year'];VisuMZ['DateTimeSystem'][_0x30b719(0x2b7)](_0x38053a,_0x1edb76);}else this[_0x30b719(0x22f)]=_0x4d66fb(_0x6467da['$1']),this[_0x30b719(0x369)]=!![];}if(_0x2bfc81[_0x30b719(0x1ad)]){if(_0x30b719(0x442)===_0x30b719(0x442)){const _0x2149ca=_0x2bfc81[_0x30b719(0x1ad)],_0x397b60=_0x2e7372[_0x30b719(0x319)];VisuMZ['DateTimeSystem'][_0x30b719(0x2b7)](_0x2149ca,_0x397b60);}else _0x4dfe53=_0x1fa6c6(_0x4abdb4)[_0x30b719(0x31c)](0x2);}if(_0x2bfc81[_0x30b719(0x1b0)]){const _0x22b944=_0x2bfc81[_0x30b719(0x1b0)],_0x3887dd=_0x2e7372['date'];VisuMZ[_0x30b719(0x2d6)]['ChangeVariable'](_0x22b944,_0x3887dd);}if(_0x2bfc81[_0x30b719(0x3cb)]){const _0x4dfb3e=_0x2bfc81[_0x30b719(0x3cb)],_0x59041f=_0x2e7372[_0x30b719(0x3fb)];$gameVariables[_0x30b719(0x394)](_0x4dfb3e,_0x59041f);}if(_0x2bfc81[_0x30b719(0x3eb)]){if(_0x30b719(0x443)!==_0x30b719(0x232)){const _0x122047=_0x2bfc81[_0x30b719(0x3eb)],_0x108eeb=_0x2e7372[_0x30b719(0x3c3)];VisuMZ[_0x30b719(0x2d6)][_0x30b719(0x2b7)](_0x122047,_0x108eeb);}else return _0xe49ced=_0x36ec40[_0x30b719(0x2d6)][_0x30b719(0x44d)][_0x30b719(0x2c4)](this,_0x5e1fd6),_0x638604=this['convertDateTimeEscapeCodes'](_0xc62537),_0x28faae;}if(_0x2bfc81[_0x30b719(0x279)]){if('nBOJS'==='ExZjk'){const _0x134935=_0x28a1b2(_0x2a772)['split'](',')[_0x30b719(0x2d1)](_0x52d6c1=>_0x5d46cb(_0x52d6c1));if(!_0x134935[_0x30b719(0x36f)](_0x2c8424['getWeekday']()))return![];}else{const _0x2ba35b=_0x2bfc81[_0x30b719(0x279)],_0x40864a=_0x2e7372[_0x30b719(0x40a)];VisuMZ['DateTimeSystem'][_0x30b719(0x2b7)](_0x2ba35b,_0x40864a);}}if(_0x2bfc81[_0x30b719(0x1bb)]){if(_0x30b719(0x18d)!==_0x30b719(0x18d))return[_0x30b719(0x21e),'weekday','weekend'][_0x30b719(0x224)](_0x5f34a0[_0x30b719(0x342)]);else{const _0x198ce4=_0x2bfc81[_0x30b719(0x1bb)],_0x3b8f87=_0x2e7372[_0x30b719(0x1f1)];VisuMZ[_0x30b719(0x2d6)][_0x30b719(0x2b7)](_0x198ce4,_0x3b8f87);}}if(_0x2bfc81[_0x30b719(0x254)]){const _0x446280=_0x2bfc81['VarSecond'],_0x1ad79a=_0x3cb584?_0x2e7372['second']:0x0;VisuMZ[_0x30b719(0x2d6)][_0x30b719(0x2b7)](_0x446280,_0x1ad79a);}if(_0x2bfc81[_0x30b719(0x31b)]){if(_0x30b719(0x2bd)===_0x30b719(0x2bd)){const _0x4e6514=_0x2bfc81[_0x30b719(0x31b)],_0x5a6226=_0x2e7372['fullTime'];$gameVariables[_0x30b719(0x394)](_0x4e6514,_0x5a6226);}else _0x578f2b[_0x30b719(0x2d6)][_0x30b719(0x42c)][_0x30b719(0x3b1)]['Weekday_DrawText_JS']&&_0xc4d7ec[_0x30b719(0x2d6)][_0x30b719(0x42c)][_0x30b719(0x3b1)][_0x30b719(0x423)][_0x30b719(0x2c4)](this,_0x2f3841);}},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x2b7)]=function(_0x4ce69e,_0x2a003c){const _0x24c416=_0x1e0c1e;$gameVariables[_0x24c416(0x34e)](_0x4ce69e)!==_0x2a003c&&$gameVariables['setValue'](_0x4ce69e,_0x2a003c);},Game_Screen[_0x1e0c1e(0x1bc)]={'gameTone':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x25a)],'gameOverlay':VisuMZ[_0x1e0c1e(0x2d6)]['Settings'][_0x1e0c1e(0x3f0)],'real':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)]['RealTimeToneOverlay']},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x468)]=Game_Screen['prototype'][_0x1e0c1e(0x352)],Game_Screen[_0x1e0c1e(0x205)][_0x1e0c1e(0x352)]=function(){const _0x26c61a=_0x1e0c1e;VisuMZ[_0x26c61a(0x2d6)][_0x26c61a(0x468)][_0x26c61a(0x2c4)](this),this[_0x26c61a(0x1aa)]();},Game_Screen[_0x1e0c1e(0x205)][_0x1e0c1e(0x1aa)]=function(){const _0x4a28ec=_0x1e0c1e;$gameTemp['_lastHour']=undefined,$gameTemp[_0x4a28ec(0x3ac)]=undefined,this[_0x4a28ec(0x287)](),this['clearTimeOverlay']();},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x420)]=Game_Screen[_0x1e0c1e(0x205)][_0x1e0c1e(0x2b6)],Game_Screen['prototype'][_0x1e0c1e(0x2b6)]=function(){const _0x2f3bab=_0x1e0c1e;VisuMZ[_0x2f3bab(0x2d6)][_0x2f3bab(0x420)][_0x2f3bab(0x2c4)](this),this['updateDateTimeSystem']();},Game_Screen[_0x1e0c1e(0x205)][_0x1e0c1e(0x431)]=function(){const _0x2a686e=_0x1e0c1e;if(!$gameMap){if(_0x2a686e(0x1ee)===_0x2a686e(0x1ee)){this[_0x2a686e(0x227)]=[0x0,0x0,0x0,0x0],this[_0x2a686e(0x329)]=_0x2a686e(0x3d6);return;}else this[_0x2a686e(0x315)](this[_0x2a686e(0x22f)]);}if($gameMap[_0x2a686e(0x33b)]()){if(_0x2a686e(0x356)!==_0x2a686e(0x356))return _0xd9a7e4['DateTimeSystem'][_0x2a686e(0x42c)][_0x2a686e(0x346)][_0x2a686e(0x3a2)][_0x2a846b]||{};else{this[_0x2a686e(0x227)]=[0x0,0x0,0x0,0x0],this[_0x2a686e(0x329)]=_0x2a686e(0x3d6);return;}}if($gameTemp[_0x2a686e(0x184)]===TimeManager[_0x2a686e(0x226)]()&&$gameTemp[_0x2a686e(0x3ac)]===TimeManager[_0x2a686e(0x1d2)]())return;$gameTemp['_lastHour']=TimeManager['getHour'](),$gameTemp['_lastMin']=TimeManager[_0x2a686e(0x1d2)](),Imported['VisuMZ_2_LightingEffects']?this[_0x2a686e(0x3d3)]():this[_0x2a686e(0x361)]();},Game_Screen[_0x1e0c1e(0x205)][_0x1e0c1e(0x287)]=function(){const _0x4fe1cd=_0x1e0c1e;this[_0x4fe1cd(0x227)]=[0x0,0x0,0x0,0x0];},Game_Screen[_0x1e0c1e(0x205)]['getTimeTone']=function(){const _0x37eee1=_0x1e0c1e;return this[_0x37eee1(0x227)]===undefined&&('HEqpB'!=='nYCLd'?(this[_0x37eee1(0x287)](),this[_0x37eee1(0x361)]()):this[_0x37eee1(0x378)]='game'),this[_0x37eee1(0x227)];},Game_Screen['prototype']['getTimeToneForHour']=function(_0x20352b){const _0x51915e=_0x1e0c1e;if($gameMap){if($gameMap[_0x51915e(0x37a)]()){const _0x150088=Game_Screen[_0x51915e(0x1bc)][_0x51915e(0x400)];return _0x150088['Tone%1'['format'](_0x20352b)]||[0x0,0x0,0x0,0x0];}else{if($gameMap['isGameTime']()){const _0x424ceb=Game_Screen[_0x51915e(0x1bc)][_0x51915e(0x18c)];return _0x424ceb[_0x20352b]||_0x424ceb[_0x424ceb['length']-0x1];}}}return[0x0,0x0,0x0,0x0];},Game_Screen['prototype'][_0x1e0c1e(0x361)]=function(){const _0x291d0f=_0x1e0c1e,_0x29843d=TimeManager[_0x291d0f(0x226)](),_0x352554=TimeManager[_0x291d0f(0x18b)](),_0x7090d8=TimeManager[_0x291d0f(0x1d2)](),_0x49e9e8=TimeManager[_0x291d0f(0x2ce)](),_0x345d3e=_0x7090d8/_0x49e9e8,_0x2c357b=this[_0x291d0f(0x1d0)](_0x29843d),_0x42cb71=this[_0x291d0f(0x1d0)](_0x352554),_0x50a554=Math[_0x291d0f(0x3a4)](_0x2c357b[0x0]+(_0x42cb71[0x0]-_0x2c357b[0x0])*_0x345d3e),_0x1f3b8d=Math[_0x291d0f(0x3a4)](_0x2c357b[0x1]+(_0x42cb71[0x1]-_0x2c357b[0x1])*_0x345d3e),_0x57814d=Math[_0x291d0f(0x3a4)](_0x2c357b[0x2]+(_0x42cb71[0x2]-_0x2c357b[0x2])*_0x345d3e),_0x1be525=Math['round'](_0x2c357b[0x3]+(_0x42cb71[0x3]-_0x2c357b[0x3])*_0x345d3e);this[_0x291d0f(0x227)]=[_0x50a554,_0x1f3b8d,_0x57814d,_0x1be525];},Game_Screen[_0x1e0c1e(0x205)][_0x1e0c1e(0x24c)]=function(){const _0x276b87=_0x1e0c1e;this['_timeOverlay']=_0x276b87(0x3d6);},Game_Screen['prototype'][_0x1e0c1e(0x418)]=function(){const _0x1335cf=_0x1e0c1e;return this[_0x1335cf(0x329)]===undefined&&(this['clearTimeOverlay'](),this['updateTimeOverlay']()),this['_timeOverlay'];},Game_Screen[_0x1e0c1e(0x205)]['getTimeOverlayForHour']=function(_0x14bcce){const _0x46c25e=_0x1e0c1e;if($gameMap){if($gameMap[_0x46c25e(0x37a)]()){const _0x21fc18=Game_Screen[_0x46c25e(0x1bc)][_0x46c25e(0x400)];return _0x21fc18[_0x46c25e(0x1fd)[_0x46c25e(0x3f1)](_0x14bcce)]||'#ffffff';}else{if($gameMap['isGameTime']()){if('UmOcM'!==_0x46c25e(0x28f))_0x48484a[_0x46c25e(0x2d6)][_0x46c25e(0x42c)][_0x46c25e(0x3b1)][_0x46c25e(0x3b4)]&&_0x58463b[_0x46c25e(0x2d6)][_0x46c25e(0x42c)][_0x46c25e(0x3b1)][_0x46c25e(0x3b4)][_0x46c25e(0x2c4)](this,_0x29bbd0);else{const _0x398643=Game_Screen[_0x46c25e(0x1bc)][_0x46c25e(0x40d)];return _0x398643[_0x14bcce]||_0x398643[_0x398643['length']-0x1];}}}}return _0x46c25e(0x3d6);},Game_Screen['prototype'][_0x1e0c1e(0x3d3)]=function(){const _0x356929=_0x1e0c1e,_0x2cca1c=TimeManager[_0x356929(0x226)](),_0x3ea3f6=TimeManager[_0x356929(0x18b)](),_0x24998f=TimeManager[_0x356929(0x1d2)](),_0x583b48=TimeManager['getMinutesInHour'](),_0x37cd87=_0x24998f/_0x583b48,_0x2be496=this[_0x356929(0x1da)](_0x2cca1c),_0x160596=this[_0x356929(0x1da)](_0x3ea3f6),_0x2930e5=ColorManager[_0x356929(0x391)](_0x2be496),_0x316ca7=ColorManager[_0x356929(0x391)](_0x160596),_0x5aa5c3=[Math[_0x356929(0x3a4)](_0x2930e5[0x0]+(_0x316ca7[0x0]-_0x2930e5[0x0])*_0x37cd87)[_0x356929(0x379)](0x0,0xff),Math[_0x356929(0x3a4)](_0x2930e5[0x1]+(_0x316ca7[0x1]-_0x2930e5[0x1])*_0x37cd87)[_0x356929(0x379)](0x0,0xff),Math[_0x356929(0x3a4)](_0x2930e5[0x2]+(_0x316ca7[0x2]-_0x2930e5[0x2])*_0x37cd87)[_0x356929(0x379)](0x0,0xff)];this['_timeOverlay']=ColorManager[_0x356929(0x307)](_0x5aa5c3);},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x411)]=Game_Action[_0x1e0c1e(0x205)][_0x1e0c1e(0x313)],Game_Action[_0x1e0c1e(0x205)]['applyVariance']=function(_0x5b8b03,_0x212b0f){const _0x1432cb=_0x1e0c1e;_0x5b8b03=VisuMZ[_0x1432cb(0x2d6)][_0x1432cb(0x411)][_0x1432cb(0x2c4)](this,_0x5b8b03,_0x212b0f);if(!this['isSkill']())return _0x5b8b03;if(Imported[_0x1432cb(0x30f)]){if('EUNaf'!==_0x1432cb(0x445)){const _0x5d40e9=VisuMZ[_0x1432cb(0x2d6)][_0x1432cb(0x452)](this[_0x1432cb(0x368)]());_0x5b8b03*=_0x5d40e9;}else _0x3546c1[_0x1432cb(0x394)](_0x57474e,_0xa11c0);}return _0x5b8b03;},VisuMZ['DateTimeSystem'][_0x1e0c1e(0x452)]=function(_0x242fdc){const _0x29db96=_0x1e0c1e;if($gameMap&&$gameMap['isNotUsingTime']())return 0x1;if(BattleManager['isBattleTest']())return!![];const _0x1ffc01=VisuMZ[_0x29db96(0x2d6)][_0x29db96(0x333)],_0x1ddae3=_0x242fdc[_0x29db96(0x2d9)]||'';let _0x19d190=0x1;const _0x47044e=_0x1ddae3[_0x29db96(0x264)](_0x1ffc01[_0x29db96(0x36c)]);if(_0x47044e){if('HOMbp'!==_0x29db96(0x2d0))this[_0x29db96(0x412)]();else for(const _0x4f5320 of _0x47044e){_0x4f5320[_0x29db96(0x264)](_0x1ffc01['skillDmgCond']);const _0x55acb9=String(RegExp['$1']),_0x31a590=Number(RegExp['$2'])*0.01;VisuMZ[_0x29db96(0x2d6)][_0x29db96(0x1e7)](_0x55acb9)&&(_0x19d190*=_0x31a590);}}return _0x19d190;},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x208)]=Game_BattlerBase['prototype']['meetsSkillConditions'],Game_BattlerBase[_0x1e0c1e(0x205)][_0x1e0c1e(0x46c)]=function(_0x1ed25f){const _0x1d4fcb=_0x1e0c1e;let _0x635b5d=VisuMZ[_0x1d4fcb(0x2d6)][_0x1d4fcb(0x208)][_0x1d4fcb(0x2c4)](this,_0x1ed25f);if(!_0x635b5d)return![];if(Imported[_0x1d4fcb(0x30f)]){if('agNnx'!==_0x1d4fcb(0x3c8)){if(!VisuMZ[_0x1d4fcb(0x2d6)][_0x1d4fcb(0x222)](_0x1ed25f))return![];}else{_0x5d090d[_0x1d4fcb(0x264)](_0x1be85b[_0x1d4fcb(0x17f)]);const _0x3bcec0=_0x628bb(_0x4d9a9d['$1']),_0x5ec5ac=_0x3a0cd4(_0x51c140['$2']);_0x295303[_0x1d4fcb(0x2d6)][_0x1d4fcb(0x1e7)](_0x3bcec0)&&(_0x40d37+=_0x5ec5ac);}}return _0x635b5d;},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x222)]=function(_0x4f6210){const _0x141a6e=_0x1e0c1e;if($gameMap&&$gameMap[_0x141a6e(0x33b)]())return!![];if(BattleManager[_0x141a6e(0x1b8)]())return!![];const _0x4d1801=VisuMZ['DateTimeSystem']['RegExp'],_0x3997e2=_0x4f6210['note']||'',_0x4101d0=_0x3997e2[_0x141a6e(0x264)](_0x4d1801[_0x141a6e(0x2c8)]);if(_0x4101d0)for(const _0x1ff0e5 of _0x4101d0){_0x1ff0e5[_0x141a6e(0x264)](_0x4d1801[_0x141a6e(0x2c8)]);const _0x2a06e5=String(RegExp['$1']),_0x124e4c=String(RegExp['$2']);if(!VisuMZ['DateTimeSystem'][_0x141a6e(0x3f7)](_0x2a06e5,_0x124e4c))return![];}return!![];},VisuMZ['DateTimeSystem'][_0x1e0c1e(0x1fc)]=Game_BattlerBase[_0x1e0c1e(0x205)][_0x1e0c1e(0x3e4)],Game_BattlerBase[_0x1e0c1e(0x205)][_0x1e0c1e(0x3e4)]=function(_0x4a92c8,_0x1ec5d8,_0x2f6662){const _0x5eb75e=_0x1e0c1e;_0x1ec5d8=VisuMZ[_0x5eb75e(0x2d6)][_0x5eb75e(0x1fc)][_0x5eb75e(0x2c4)](this,_0x4a92c8,_0x1ec5d8,_0x2f6662);if(_0x1ec5d8<=0x0)return _0x1ec5d8;if(_0x4a92c8&&_0x1ec5d8&&_0x2f6662&&typeof _0x1ec5d8===_0x5eb75e(0x35d)){if(_0x5eb75e(0x1e2)!==_0x5eb75e(0x291)){const _0x3bae7a=VisuMZ[_0x5eb75e(0x2d6)][_0x5eb75e(0x23d)](_0x4a92c8,_0x2f6662);_0x1ec5d8=Math['ceil'](_0x3bae7a*_0x1ec5d8);}else{const _0xd751f7=_0x5bb894[_0x5eb75e(0x2d6)]['Settings'],_0x2de12e=_0xd751f7['GameTimeGeneral'];_0x2de12e[_0x5eb75e(0x225)]=_0x2de12e[_0x5eb75e(0x3a2)][_0x5eb75e(0x1e8)],_0x2de12e[_0x5eb75e(0x3a2)][_0x5eb75e(0x23c)]({}),_0x2de12e[_0x5eb75e(0x446)]=_0x2de12e['Weekdays'][_0x5eb75e(0x1e8)],_0x2de12e[_0x5eb75e(0x30e)][_0x5eb75e(0x23c)]({});}}return _0x1ec5d8;},VisuMZ[_0x1e0c1e(0x2d6)]['CalcSkillCostChanges']=function(_0x37b20c,_0x398f98){const _0x271edf=_0x1e0c1e;if($gameMap&&$gameMap['isNotUsingTime']())return 0x1;if(BattleManager['isBattleTest']())return 0x1;const _0x3b4ca2=VisuMZ[_0x271edf(0x2d6)][_0x271edf(0x333)],_0x59b65c=_0x37b20c[_0x271edf(0x2d9)]||'';let _0x2e1ffa=0x1;const _0x2ed5fd=_0x59b65c[_0x271edf(0x264)](_0x3b4ca2[_0x271edf(0x192)]);if(_0x2ed5fd){if('cADDL'!==_0x271edf(0x172))this[_0x271edf(0x24c)](),this['updateTimeOverlay']();else for(const _0x72eba3 of _0x2ed5fd){_0x72eba3['match'](_0x3b4ca2[_0x271edf(0x192)]);const _0x18b0b0=String(RegExp['$1'])[_0x271edf(0x177)]()[_0x271edf(0x324)](),_0x30abbb=String(RegExp['$2']),_0x461136=Number(RegExp['$3'])*0.01;if(_0x18b0b0!==_0x398f98[_0x271edf(0x19d)]['toUpperCase']()['trim']())continue;if(VisuMZ[_0x271edf(0x2d6)]['matchLineCondition'](_0x30abbb)){if('mgxjr'!==_0x271edf(0x1b5)){const _0x43fa06=_0xdd30fb['icons'][_0x314a57],_0x4a84e5=_0x20eb47[_0x271edf(0x3db)](_0x271edf(0x2d4));_0x4a84e5['addLoadListener'](_0x471f89[_0x271edf(0x2d6)]['UpdateSpriteIcon']['bind'](this,_0x5302c5,_0x43fa06,_0x1fa059));}else _0x2e1ffa*=_0x461136;}}}return _0x2e1ffa;},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x337)]=Game_BattlerBase['prototype'][_0x1e0c1e(0x3f3)],Game_BattlerBase[_0x1e0c1e(0x205)][_0x1e0c1e(0x3f3)]=function(_0x4efbcf){const _0x26c470=_0x1e0c1e;VisuMZ[_0x26c470(0x2d6)][_0x26c470(0x337)]['call'](this,_0x4efbcf);let _0x225ec1=this[_0x26c470(0x3a7)][_0x4efbcf];if(_0x4efbcf>0x0){if(_0x26c470(0x358)===_0x26c470(0x358)){const _0x4ea346=VisuMZ[_0x26c470(0x2d6)]['CalcStateTurnAdjust'](_0x4efbcf);_0x225ec1=Math[_0x26c470(0x390)](_0x225ec1+_0x4ea346);}else return _0x3dd322[_0x26c470(0x1bc)][_0x26c470(0x400)][_0x26c470(0x477)[_0x26c470(0x3f1)](_0x257a2c)];}this[_0x26c470(0x3a7)][_0x4efbcf]=Math[_0x26c470(0x189)](_0x225ec1,0x0);},VisuMZ[_0x1e0c1e(0x2d6)]['CalcStateTurnAdjust']=function(_0x1b37dd){const _0x2d3ba9=_0x1e0c1e;if($gameMap&&$gameMap['isNotUsingTime']())return 0x0;if(BattleManager[_0x2d3ba9(0x1b8)]())return 0x0;const _0x11db5e=VisuMZ[_0x2d3ba9(0x2d6)]['RegExp'],_0x2e4c16=$dataStates[_0x1b37dd];if(!_0x2e4c16)return 0x0;const _0x3fcbc1=_0x2e4c16[_0x2d3ba9(0x2d9)]||'';let _0x39c4ec=0x1;const _0x360027=_0x3fcbc1[_0x2d3ba9(0x264)](_0x11db5e['stateTurnsCond']);if(_0x360027)for(const _0x43690c of _0x360027){_0x43690c[_0x2d3ba9(0x264)](_0x11db5e[_0x2d3ba9(0x17f)]);const _0x5e4de2=String(RegExp['$1']),_0x52e53a=Number(RegExp['$2']);VisuMZ[_0x2d3ba9(0x2d6)][_0x2d3ba9(0x1e7)](_0x5e4de2)&&(_0x39c4ec+=_0x52e53a);}return _0x39c4ec;},Game_Map[_0x1e0c1e(0x1bc)]={'defaultType':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x413)]??_0x1e0c1e(0x400),'defaultTone':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['DefaultTimeTone']??!![],'defaultShowHud':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['HudSprite'][_0x1e0c1e(0x20a)]??!![]},VisuMZ['DateTimeSystem']['Game_Map_setup']=Game_Map[_0x1e0c1e(0x205)]['setup'],Game_Map[_0x1e0c1e(0x205)][_0x1e0c1e(0x276)]=function(_0x42f289){const _0x2d6511=_0x1e0c1e;VisuMZ['DateTimeSystem'][_0x2d6511(0x18e)][_0x2d6511(0x2c4)](this,_0x42f289),this[_0x2d6511(0x1d7)]();},Game_Map[_0x1e0c1e(0x205)]['setupDateTimeNotetags']=function(){const _0x84429=_0x1e0c1e,_0x52cb91=Game_Map['DATE_TIME_SYSTEM'];this[_0x84429(0x378)]=_0x52cb91[_0x84429(0x2f0)],this[_0x84429(0x46f)]=_0x52cb91['defaultTone'],this[_0x84429(0x429)]=_0x52cb91[_0x84429(0x251)],this[_0x84429(0x26d)]=![];const _0x5543e8=$dataMap?$dataMap[_0x84429(0x2d9)]||'':'',_0x2655ef=VisuMZ[_0x84429(0x2d6)]['RegExp'];if(_0x5543e8[_0x84429(0x264)](_0x2655ef[_0x84429(0x37e)]))this['_dateTimeType']=_0x84429(0x21e);else{if(_0x5543e8[_0x84429(0x264)](_0x2655ef[_0x84429(0x312)]))this[_0x84429(0x378)]=_0x84429(0x175);else{if(_0x5543e8[_0x84429(0x264)](_0x2655ef[_0x84429(0x1a3)])){if(_0x84429(0x459)!==_0x84429(0x459)){let _0x338f64=_0x27f84a[_0x84429(0x1f4)][_0x84429(0x3c3)];return _0x338f64=_0x338f64%0x7||0x7,_0x350f33?_0x4fcba1[_0x84429(0x1bc)][_0x84429(0x400)]['WeekdayAbbr%1'[_0x84429(0x3f1)](_0x338f64)]:_0x121f2c['DATE_TIME_SYSTEM'][_0x84429(0x400)][_0x84429(0x29f)[_0x84429(0x3f1)](_0x338f64)];}else this[_0x84429(0x378)]=_0x84429(0x400);}}}if(_0x5543e8['match'](_0x2655ef[_0x84429(0x2e5)]))this[_0x84429(0x46f)]=!![];else _0x5543e8['match'](_0x2655ef[_0x84429(0x360)])&&('KQtoW'===_0x84429(0x2ab)?_0x45e36[_0x84429(0x412)]():this[_0x84429(0x46f)]=![]);_0x5543e8[_0x84429(0x264)](_0x2655ef['HideHud'])&&(_0x84429(0x433)===_0x84429(0x359)?(_0x41e7b3['prototype'][_0x84429(0x403)][_0x84429(0x2c4)](this),this[_0x84429(0x444)](),this['createDateSprites'](),this[_0x84429(0x2eb)]()):this[_0x84429(0x429)]=![]);_0x5543e8[_0x84429(0x264)](_0x2655ef[_0x84429(0x3e7)])&&('wAKOu'!==_0x84429(0x3a1)?this[_0x84429(0x33a)]():this[_0x84429(0x26d)]=!![]);if(this[_0x84429(0x256)]()){if(_0x84429(0x265)===_0x84429(0x2f9)){if(_0x7c7f07&&_0x2fac5c[_0x84429(0x33b)]())return!![];const _0x4f725c=_0x25e0e8[_0x84429(0x2d6)][_0x84429(0x333)],_0x4d6a34=_0x28e179['note']||'',_0x4c1d0a=_0x4d6a34[_0x84429(0x264)](_0x4f725c[_0x84429(0x439)]);if(_0x4c1d0a)for(const _0x40a882 of _0x4c1d0a){_0x40a882[_0x84429(0x264)](_0x4f725c[_0x84429(0x439)]);const _0x20bfd8=_0x2cb753(_0x322d4c['$1']),_0x5cccbe=_0x5eab18(_0x7fe89c['$2']);if(!_0x52170d[_0x84429(0x2d6)]['matchRangeCondition'](_0x20bfd8,_0x5cccbe))return![];}return!![];}else TimeManager[_0x84429(0x17e)]();}else this[_0x84429(0x37a)]()&&TimeManager[_0x84429(0x412)]();Imported['VisuMZ_1_BattleCore']&&(this[_0x84429(0x3ed)](),this[_0x84429(0x458)]());if(Imported[_0x84429(0x1cf)]){if(_0x84429(0x345)==='mZxoP'){const _0x42aa97=_0x2aaabe[_0x84429(0x1b0)],_0x454a46=_0xed2ef7[_0x84429(0x427)];_0x606666[_0x84429(0x394)](_0x42aa97,_0x454a46);}else{if(_0x5543e8[_0x84429(0x264)](_0x2655ef['bypassTilesetSwap'])){}else{if('NwWcQ'!==_0x84429(0x43e))this[_0x84429(0x2e7)]=0x0,this['processSeasonTilesetNotetags'](this[_0x84429(0x22f)]);else return _0x1a27ae['DateTimeSystem'][_0x84429(0x42c)][_0x84429(0x346)]['totalWeekdays'];}}}},Game_Map[_0x1e0c1e(0x205)][_0x1e0c1e(0x43a)]=function(){const _0x558718=_0x1e0c1e;if(this[_0x558718(0x378)]===undefined)this['setupDateTimeNotetags']();return this[_0x558718(0x378)];},Game_Map['prototype']['isNotUsingTime']=function(){const _0x110f07=_0x1e0c1e;return this[_0x110f07(0x43a)]()===_0x110f07(0x21e);},Game_Map[_0x1e0c1e(0x205)][_0x1e0c1e(0x256)]=function(){const _0x1d867e=_0x1e0c1e;return this[_0x1d867e(0x43a)]()===_0x1d867e(0x175);},Game_Map[_0x1e0c1e(0x205)][_0x1e0c1e(0x37a)]=function(){const _0x25ae35=_0x1e0c1e;return this[_0x25ae35(0x43a)]()===_0x25ae35(0x400);},Game_Map[_0x1e0c1e(0x205)][_0x1e0c1e(0x38d)]=function(){const _0x34f56d=_0x1e0c1e;if(Imported[_0x34f56d(0x38c)])return![];if(!$gameMap[_0x34f56d(0x256)]())return![];if(this[_0x34f56d(0x46f)]===undefined)this[_0x34f56d(0x1d7)]();return this['_usesTimeTone'];},Game_Map[_0x1e0c1e(0x205)][_0x1e0c1e(0x2f3)]=function(){const _0x277d3f=_0x1e0c1e;if(this[_0x277d3f(0x46f)]===undefined)this[_0x277d3f(0x1d7)]();return this[_0x277d3f(0x46f)];},Game_Map[_0x1e0c1e(0x205)][_0x1e0c1e(0x3cf)]=function(){const _0x25bb1d=_0x1e0c1e;if(ConfigManager[_0x25bb1d(0x249)]===![])return![];if(!Sprite_DateTimeHUD[_0x25bb1d(0x34c)][_0x25bb1d(0x454)])return![];if(!this[_0x25bb1d(0x429)])return![];return $gameSystem['isDateTimeSystemHudVisible']();},Game_Map[_0x1e0c1e(0x205)]['isGameTimePaused']=function(){const _0x5b872a=_0x1e0c1e;if(this['_pauseGameTime'])return!![];return $gameSystem[_0x5b872a(0x1a0)]()[_0x5b872a(0x272)];},Game_Map[_0x1e0c1e(0x205)][_0x1e0c1e(0x3ed)]=function(){const _0x43370c=_0x1e0c1e,_0x4e3050=$dataMap?$dataMap[_0x43370c(0x2d9)]||'':'',_0x4573c2=VisuMZ['DateTimeSystem']['RegExp'],_0x4e31e1=TimeManager[_0x43370c(0x190)]();if(_0x4e31e1===0x1&&_0x4e3050[_0x43370c(0x264)](_0x4573c2[_0x43370c(0x3a8)]))this['_battleback1Name']=String(RegExp['$1'])[_0x43370c(0x324)]();else{if(_0x4e31e1===0x2&&_0x4e3050[_0x43370c(0x264)](_0x4573c2[_0x43370c(0x237)])){if(_0x43370c(0x2e3)!==_0x43370c(0x2d7))this[_0x43370c(0x308)]=String(RegExp['$1'])['trim']();else{const _0x46e8f0=_0x1c5fcc[_0x43370c(0x374)],_0x430056=_0x409e0e[_0x43370c(0x1b1)]===_0x43370c(0x3f2);_0x28c4cf[_0x43370c(0x2d6)][_0x43370c(0x3df)](_0x46e8f0,_0x430056);}}else{if(_0x4e31e1===0x3&&_0x4e3050[_0x43370c(0x264)](_0x4573c2[_0x43370c(0x36b)]))_0x43370c(0x263)!=='aHlfj'?_0xecd69e=_0x2c880b(_0x5cc9ec%0xc||0xc)['padZero'](0x2):this[_0x43370c(0x308)]=String(RegExp['$1'])[_0x43370c(0x324)]();else _0x4e31e1===0x4&&_0x4e3050[_0x43370c(0x264)](_0x4573c2[_0x43370c(0x41c)])&&(this['_battleback1Name']=String(RegExp['$1'])['trim']());}}if(_0x4e31e1===0x1&&_0x4e3050[_0x43370c(0x264)](_0x4573c2[_0x43370c(0x295)])){if(_0x43370c(0x3d7)===_0x43370c(0x434))for(const _0x2e490a of _0x1dcdc4){_0x2e490a[_0x43370c(0x264)](_0xfeac1d[_0x43370c(0x439)]);const _0x499fed=_0x5d7f2f(_0x2a7bdf['$1']),_0x4d96a0=_0x3f018e(_0x15df20['$2']);if(!_0x5a3513['DateTimeSystem'][_0x43370c(0x3f7)](_0x499fed,_0x4d96a0))return![];}else this[_0x43370c(0x3b3)]=String(RegExp['$1'])[_0x43370c(0x324)]();}else{if(_0x4e31e1===0x2&&_0x4e3050[_0x43370c(0x264)](_0x4573c2[_0x43370c(0x350)])){if(_0x43370c(0x21f)!=='bKzLx')this[_0x43370c(0x3b3)]=String(RegExp['$1'])[_0x43370c(0x324)]();else{if(_0x18869b[_0x43370c(0x351)]>_0x2f01f2[_0x43370c(0x351)])return!![];if(_0x1f0d57[_0x43370c(0x319)]>_0x3c796d[_0x43370c(0x319)])return!![];return _0x5a0edf[_0x43370c(0x427)]>_0xb35ced[_0x43370c(0x427)];}}else{if(_0x4e31e1===0x3&&_0x4e3050[_0x43370c(0x264)](_0x4573c2[_0x43370c(0x3bf)]))'eKsIY'===_0x43370c(0x30b)?this[_0x43370c(0x3b3)]=String(RegExp['$1'])['trim']():this[_0x43370c(0x308)]=_0x3f20cd(_0x39d9a4['$1'])[_0x43370c(0x324)]();else _0x4e31e1===0x4&&_0x4e3050[_0x43370c(0x264)](_0x4573c2[_0x43370c(0x3e1)])&&(this[_0x43370c(0x3b3)]=String(RegExp['$1'])['trim']());}}},Game_Map['prototype']['setupSeasonalBattlebackRegions']=function(){const _0x3f3ce5=_0x1e0c1e;if(!$dataMap)return;if($gameMap[_0x3f3ce5(0x33b)]())return;const _0x2c8cda=$dataMap[_0x3f3ce5(0x2d9)];if(!_0x2c8cda)return;const _0xc94e12=TimeManager[_0x3f3ce5(0x190)]();if(_0xc94e12===0x0)return;const _0x376c3c=['none',_0x3f3ce5(0x218),_0x3f3ce5(0x26c),_0x3f3ce5(0x3f2),'winter'][_0xc94e12],_0xf5a688=VisuMZ['DateTimeSystem'][_0x3f3ce5(0x333)],_0x34054f=_0xf5a688[_0x3f3ce5(0x392)][_0x376c3c],_0x9f9f41=_0x2c8cda[_0x3f3ce5(0x264)](_0x34054f);if(_0x9f9f41)for(const _0x13e3ff of _0x9f9f41){_0x13e3ff[_0x3f3ce5(0x264)](_0x34054f);const _0x1e4fda=Number(RegExp['$1']),_0x2cbb8d=Number(RegExp['$2']),_0x29f469=_0x2cbb8d===0x1?this[_0x3f3ce5(0x277)]:this[_0x3f3ce5(0x1d1)],_0x63d4d7=String(RegExp['$3']);_0x29f469[_0x1e4fda]=_0x63d4d7;}},Game_Map[_0x1e0c1e(0x205)][_0x1e0c1e(0x375)]=function(_0x1192fe){const _0x48b75a=_0x1e0c1e;if(!this[_0x48b75a(0x1eb)]())return;if($gameMap[_0x48b75a(0x33b)]())return;this['_dayTimeTilesetLoops']++;if(this[_0x48b75a(0x2e7)]>=0x5)return;const _0x3d36ad=VisuMZ[_0x48b75a(0x2d6)][_0x48b75a(0x333)],_0x4dd832=this[_0x48b75a(0x1eb)]()[_0x48b75a(0x2d9)],_0x28c471=TimeManager['checkSeason'](),_0x306c36=TimeManager[_0x48b75a(0x2fe)]();if(_0x28c471===0x1&&_0x4dd832[_0x48b75a(0x264)](_0x3d36ad[_0x48b75a(0x19c)])){if(_0x48b75a(0x395)!==_0x48b75a(0x395)){const _0x56f932=_0x55370f[_0x48b75a(0x1bc)]['real'];return _0x56f932[_0x48b75a(0x1dc)[_0x48b75a(0x3f1)](_0x5784b8)]||[0x0,0x0,0x0,0x0];}else this['_tilesetId']=Number(RegExp['$1']),this[_0x48b75a(0x369)]=!![];}else{if(_0x28c471===0x2&&_0x4dd832[_0x48b75a(0x264)](_0x3d36ad[_0x48b75a(0x42a)]))this['_tilesetId']=Number(RegExp['$1']),this[_0x48b75a(0x369)]=!![];else{if(_0x28c471===0x3&&_0x4dd832[_0x48b75a(0x264)](_0x3d36ad[_0x48b75a(0x29a)]))this['_tilesetId']=Number(RegExp['$1']),this[_0x48b75a(0x369)]=!![];else{if(_0x28c471===0x4&&_0x4dd832[_0x48b75a(0x264)](_0x3d36ad[_0x48b75a(0x293)])){if('LJlTK'!==_0x48b75a(0x1c2))return _0x1187e0[_0x48b75a(0x1bc)][_0x48b75a(0x400)]['TimeDay'];else this[_0x48b75a(0x22f)]=Number(RegExp['$1']),this[_0x48b75a(0x369)]=!![];}else{if(_0x306c36===0x1&&_0x4dd832[_0x48b75a(0x264)](_0x3d36ad[_0x48b75a(0x229)]))'fMaVf'!==_0x48b75a(0x2ec)?(this[_0x48b75a(0x22f)]=Number(RegExp['$1']),this['_needsRefresh']=!![]):_0x179f06[_0x48b75a(0x2d6)][_0x48b75a(0x42c)][_0x48b75a(0x3b1)]['Year_DrawText_JS']['call'](this,_0x404f1b);else{if(_0x306c36===0x2&&_0x4dd832[_0x48b75a(0x264)](_0x3d36ad[_0x48b75a(0x354)]))this[_0x48b75a(0x22f)]=Number(RegExp['$1']),this[_0x48b75a(0x369)]=!![];else{if(_0x306c36===0x3&&_0x4dd832[_0x48b75a(0x264)](_0x3d36ad['tilesetDusk']))_0x48b75a(0x235)!==_0x48b75a(0x235)?this[_0x48b75a(0x26d)]=!![]:(this[_0x48b75a(0x22f)]=Number(RegExp['$1']),this[_0x48b75a(0x369)]=!![]);else _0x306c36===0x4&&_0x4dd832[_0x48b75a(0x264)](_0x3d36ad[_0x48b75a(0x318)])&&(this[_0x48b75a(0x22f)]=Number(RegExp['$1']),this[_0x48b75a(0x369)]=!![]);}}}}}}this['_tilesetId']!==_0x1192fe&&this[_0x48b75a(0x315)](this[_0x48b75a(0x22f)]);},Game_Map[_0x1e0c1e(0x205)]['processSeasonTileset']=function(_0x174dae){const _0x42ae8e=_0x1e0c1e;this[_0x42ae8e(0x3fa)](_0x174dae);},VisuMZ['DateTimeSystem'][_0x1e0c1e(0x228)]=Game_Player[_0x1e0c1e(0x205)]['meetsEncounterConditions'],Game_Player[_0x1e0c1e(0x205)][_0x1e0c1e(0x306)]=function(_0x112066){const _0x382344=_0x1e0c1e;if(!_0x112066)return![];let _0x45a454=VisuMZ[_0x382344(0x2d6)][_0x382344(0x228)]['call'](this,_0x112066);if(!_0x45a454)return![];if(!Imported[_0x382344(0x2f8)])return _0x45a454;let _0x59c449=_0x112066[_0x382344(0x27c)];const _0x2869e9=$dataTroops[_0x59c449];if(!_0x2869e9)return![];const _0x1e3be8=DataManager[_0x382344(0x37b)](_0x2869e9['id']);return this['meetsDateTimeSystemConditions'](_0x1e3be8,_0x2869e9['id']);},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x3af)]=function(_0x2ac405){const _0x2b7c96=_0x1e0c1e,_0x342424=VisuMZ['BattleCore'][_0x2b7c96(0x42c)]['Mechanics'][_0x2b7c96(0x304)];if(_0x342424[_0x2b7c96(0x36f)](_0x2ac405)){if(_0x2b7c96(0x417)!=='uznqs')return'';else{let _0x3707ca='';_0x3707ca+=_0x2b7c96(0x3bd)+_0x2ac405+'!\x0a\x0a',_0x3707ca+=_0x2b7c96(0x1df),_0x3707ca+=_0x2b7c96(0x28c),_0x3707ca+='Either\x20adjust\x20the\x20Base\x20Troop\x20IDs\x20found\x20in\x20the\x20Battle\x20Core\x20',_0x3707ca+='Mechanics\x20settings\x20or\x20duplicate\x20this\x20troop\x20to\x20an\x20ID\x20that\x20is\x20not\x20',_0x3707ca+='a\x20Base\x20Troop.\x0a\x0a',_0x3707ca+='Error\x20with\x20Troop\x20ID\x20'+_0x2ac405+'!',alert(_0x3707ca),SceneManager[_0x2b7c96(0x401)]();}}},Game_Player[_0x1e0c1e(0x205)][_0x1e0c1e(0x3a3)]=function(_0x1d6ef0,_0x3b9bff){const _0x489c25=_0x1e0c1e;if($gameMap&&$gameMap[_0x489c25(0x33b)]())return!![];const _0x3aedaf=VisuMZ[_0x489c25(0x2d6)][_0x489c25(0x333)],_0x3d1067=_0x1d6ef0[_0x489c25(0x264)](_0x3aedaf[_0x489c25(0x26e)]);if(_0x3d1067){if(_0x489c25(0x17a)!==_0x489c25(0x3ea))for(const _0x2f627c of _0x3d1067){if(_0x489c25(0x1fe)==='YOmJS')this[_0x489c25(0x1e5)]=!![];else{_0x2f627c['match'](_0x3aedaf[_0x489c25(0x26e)]);const _0x42613f=String(RegExp['$1']),_0x1f38ac=String(RegExp['$2']);VisuMZ[_0x489c25(0x2d6)][_0x489c25(0x3af)](_0x3b9bff);if(!VisuMZ[_0x489c25(0x2d6)][_0x489c25(0x3f7)](_0x42613f,_0x1f38ac)){if(_0x489c25(0x2fa)!==_0x489c25(0x1e6))return![];else{const _0x544a0c=_0x1df43d['DateTimeSystem'][_0x489c25(0x42c)][_0x489c25(0x346)][_0x489c25(0x3a2)];if(!_0x544a0c[_0x4cc392])return'';return _0x544a0c[_0x54cd6f]['Name'];}}}}else this[_0x489c25(0x3ed)](),this['setupSeasonalBattlebackRegions']();}return!![];},VisuMZ['DateTimeSystem'][_0x1e0c1e(0x410)]=Scene_Options[_0x1e0c1e(0x205)][_0x1e0c1e(0x349)],Scene_Options['prototype'][_0x1e0c1e(0x349)]=function(){const _0x3a098b=_0x1e0c1e;let _0xbf04e6=VisuMZ[_0x3a098b(0x2d6)][_0x3a098b(0x410)][_0x3a098b(0x2c4)](this);const _0x457ac3=VisuMZ[_0x3a098b(0x2d6)][_0x3a098b(0x42c)];if(_0x457ac3['Options'][_0x3a098b(0x397)]&&_0x457ac3[_0x3a098b(0x39d)][_0x3a098b(0x37d)])_0xbf04e6++;return _0xbf04e6;},VisuMZ['DateTimeSystem'][_0x1e0c1e(0x2ef)]=Scene_Base[_0x1e0c1e(0x205)][_0x1e0c1e(0x2e4)],Scene_Base['prototype'][_0x1e0c1e(0x2e4)]=function(){const _0x404b97=_0x1e0c1e;if(SceneManager[_0x404b97(0x3d5)]()){if(_0x404b97(0x255)!==_0x404b97(0x255))return _0x597c1f[_0x404b97(0x1bc)][_0x404b97(0x400)][_0x404b97(0x2da)];else this[_0x404b97(0x244)]();}VisuMZ[_0x404b97(0x2d6)][_0x404b97(0x2ef)][_0x404b97(0x2c4)](this);},Scene_Map[_0x1e0c1e(0x205)][_0x1e0c1e(0x244)]=function(){const _0x34c072=_0x1e0c1e;this[_0x34c072(0x33e)]=new Sprite_DateTimeHUD(),this[_0x34c072(0x440)](this[_0x34c072(0x33e)]);};function Sprite_DateTimeHUD(){this['initialize'](...arguments);}Sprite_DateTimeHUD['prototype']=Object[_0x1e0c1e(0x3d9)](Sprite[_0x1e0c1e(0x205)]),Sprite_DateTimeHUD['prototype']['constructor']=Sprite_DateTimeHUD,Sprite_DateTimeHUD[_0x1e0c1e(0x34c)]={'enabled':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x201)]??!![],'container':{'position':{'x':VisuMZ[_0x1e0c1e(0x2d6)]['Settings']['HudSprite'][_0x1e0c1e(0x2cc)]??0x0,'y':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x3a0)]??0x0},'opacitySpeed':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)]['HudSprite']['OpacitySpeed']??0x10},'sprites':{'season':{'enable':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x21d)]??!![],'anchor':{'x':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['HudSprite'][_0x1e0c1e(0x39b)]??0.5,'y':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x17c)]??0.5},'offset':{'x':VisuMZ[_0x1e0c1e(0x2d6)]['Settings'][_0x1e0c1e(0x3b1)]['SeasonOffsetX']??0x30,'y':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x245)]??0x30},'scale':{'x':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x2c2)]??0x3,'y':VisuMZ[_0x1e0c1e(0x2d6)]['Settings'][_0x1e0c1e(0x3b1)]['SeasonScaleY']??0x3},'opacity':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x426)]??0x80,'icons':{'spring':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x1b6)]??0x45,'summer':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x21c)]??0x46,'autumn':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x1f8)]??0x44,'winter':VisuMZ['DateTimeSystem']['Settings']['HudSprite'][_0x1e0c1e(0x2ba)]??0x41},'images':{'spring':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x323)]??'','summer':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x37f)]??'','autumn':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x1d6)]??'','winter':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['SeasonImageWinter']??''}},'daycycle':{'enable':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['HudSprite'][_0x1e0c1e(0x1c0)]??!![],'anchor':{'x':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['DayCycleAnchorX']??0.5,'y':VisuMZ[_0x1e0c1e(0x2d6)]['Settings'][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x2b4)]??0.5},'offset':{'x':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['HudSprite'][_0x1e0c1e(0x2e6)]??0x90,'y':VisuMZ[_0x1e0c1e(0x2d6)]['Settings'][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x2e0)]??0x30},'scale':{'x':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x2a5)]??0x3,'y':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x230)]??0x3},'opacity':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x2f4)]??0x80,'icons':{'dawn':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x396)]??0x49,'day':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['HudSprite'][_0x1e0c1e(0x38a)]??0x57,'dusk':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['DayCycleIconDusk']??0x4a,'night':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x250)]??0x58},'images':{'dawn':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x25f)]??'','day':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x217)]??'','dusk':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x2c6)]??'','night':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x44c)]??''}},'weektype':{'enable':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x44a)]??!![],'anchor':{'x':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x242)]??0.5,'y':VisuMZ[_0x1e0c1e(0x2d6)]['Settings'][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x199)]??0.5},'offset':{'x':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x305)]??0xf0,'y':VisuMZ['DateTimeSystem']['Settings'][_0x1e0c1e(0x3b1)]['WeekTypeOffsetY']??0x30},'scale':{'x':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['WeekTypeScaleX']??0x3,'y':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['HudSprite'][_0x1e0c1e(0x3f8)]??0x3},'opacity':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x1b9)]??0x80,'icons':{'weekday':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x355)]??0x4b,'weekend':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x23a)]??0x54},'images':{'weekday':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)]['HudSprite'][_0x1e0c1e(0x42e)]??'','weekend':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x3f6)]??''}},'year':{'enable':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['HudSprite']['YearEnable']??!![],'angle':VisuMZ[_0x1e0c1e(0x2d6)]['Settings'][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x296)]??0xf,'size':{'width':VisuMZ[_0x1e0c1e(0x2d6)]['Settings']['HudSprite'][_0x1e0c1e(0x424)]??0xc8,'height':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x1bd)]??0x50},'anchor':{'x':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x387)]??0.5,'y':VisuMZ[_0x1e0c1e(0x2d6)]['Settings'][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x40e)]??0.5},'offset':{'x':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['YearOffsetX']??0x30,'y':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['HudSprite'][_0x1e0c1e(0x1de)]??0x1e}},'month':{'enable':VisuMZ[_0x1e0c1e(0x2d6)]['Settings']['HudSprite']['MonthEnable']??!![],'angle':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x29d)]??0x0,'size':{'width':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['MonthSizeWidth']??0xc8,'height':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['MonthSizeHeight']??0x50},'anchor':{'x':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['MonthAnchorX']??0.5,'y':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['HudSprite']['MonthAnchorY']??0.5},'offset':{'x':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x2a0)]??0x7d,'y':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['MonthOffsetY']??0x14}},'date':{'enable':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['HudSprite']['DateEnable']??!![],'angle':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['DateAngle']??0x0,'size':{'width':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x213)]??0xc8,'height':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x24e)]??0x50},'anchor':{'x':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['DateAnchorX']??0.5,'y':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x476)]??0.5},'offset':{'x':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['DateOffsetX']??0xaf,'y':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x2a7)]??0x14}},'weekday':{'enable':VisuMZ[_0x1e0c1e(0x2d6)]['Settings'][_0x1e0c1e(0x3b1)]['WeekdayEnable']??!![],'angle':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)]['HudSprite']['WeekdayAngle']??-0xf,'size':{'width':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x456)]??0xc8,'height':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['HudSprite'][_0x1e0c1e(0x331)]??0x50},'anchor':{'x':VisuMZ[_0x1e0c1e(0x2d6)]['Settings']['HudSprite'][_0x1e0c1e(0x30c)]??0.5,'y':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x19f)]??0.5},'offset':{'x':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x243)]??0xf0,'y':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x3ab)]??0x1e}},'time':{'enable':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x2b8)]??!![],'angle':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x36e)]??0x0,'size':{'width':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['TimeSizeWidth']??0xc8,'height':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)]['TimeSizeHeight']??0x50},'anchor':{'x':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x300)]??0.5,'y':VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)]['HudSprite']['TimeAnchorY']??0.5},'offset':{'x':VisuMZ['DateTimeSystem']['Settings'][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x42b)]??0x90,'y':VisuMZ['DateTimeSystem'][_0x1e0c1e(0x42c)][_0x1e0c1e(0x3b1)][_0x1e0c1e(0x1a4)]??0x3c}}}},Sprite_DateTimeHUD[_0x1e0c1e(0x205)][_0x1e0c1e(0x403)]=function(){const _0x41093f=_0x1e0c1e;Sprite[_0x41093f(0x205)][_0x41093f(0x403)][_0x41093f(0x2c4)](this),this[_0x41093f(0x444)](),this[_0x41093f(0x2d8)](),this[_0x41093f(0x2eb)]();},Sprite_DateTimeHUD[_0x1e0c1e(0x205)][_0x1e0c1e(0x444)]=function(){const _0x221bda=_0x1e0c1e,_0x9ac412=Sprite_DateTimeHUD[_0x221bda(0x34c)]['container'];this['x']=_0x9ac412[_0x221bda(0x1c1)]['x'],this['y']=_0x9ac412[_0x221bda(0x1c1)]['y'],!this[_0x221bda(0x285)]()&&(this[_0x221bda(0x341)]=0x0);},Sprite_DateTimeHUD[_0x1e0c1e(0x205)][_0x1e0c1e(0x2d8)]=function(){const _0x3950b7=_0x1e0c1e;this[_0x3950b7(0x3dd)](_0x3950b7(0x29b)),this[_0x3950b7(0x3dd)](_0x3950b7(0x30a)),this[_0x3950b7(0x3dd)](_0x3950b7(0x3b0)),this['createSubSprite'](_0x3950b7(0x351)),this[_0x3950b7(0x3dd)]('month'),this[_0x3950b7(0x3dd)](_0x3950b7(0x427)),this['createSubSprite'](_0x3950b7(0x3c3)),this[_0x3950b7(0x3dd)](_0x3950b7(0x32f));},Sprite_DateTimeHUD[_0x1e0c1e(0x205)][_0x1e0c1e(0x3dd)]=function(_0xc37844){const _0x5863de=_0x1e0c1e,_0x478554=Sprite_DateTimeHUD[_0x5863de(0x34c)]['sprites'][_0xc37844];if(!_0x478554)return;if(!_0x478554[_0x5863de(0x3ef)])return;const _0x423dbd=new Sprite();this[_0x5863de(0x440)](_0x423dbd),_0x423dbd[_0x5863de(0x2ee)]=new Bitmap(_0x478554['size']?_0x478554['size'][_0x5863de(0x28d)]||0x64:0x1,_0x478554['size']?_0x478554['size'][_0x5863de(0x2d2)]||0x64:0x1),_0x423dbd[_0x5863de(0x35b)]['x']=_0x478554[_0x5863de(0x35b)]?_0x478554[_0x5863de(0x35b)]['x']||0x0:0x0,_0x423dbd[_0x5863de(0x35b)]['y']=_0x478554[_0x5863de(0x35b)]?_0x478554[_0x5863de(0x35b)]['y']||0x0:0x0,_0x423dbd[_0x5863de(0x191)]['x']=_0x478554[_0x5863de(0x191)]?_0x478554[_0x5863de(0x191)]['x']||0x1:0x1,_0x423dbd['scale']['y']=_0x478554['scale']?_0x478554[_0x5863de(0x191)]['y']||0x1:0x1,_0x423dbd[_0x5863de(0x341)]=_0x478554[_0x5863de(0x341)]??0xff,_0x423dbd['x']=_0x478554['offset']?_0x478554[_0x5863de(0x1ca)]['x']||0x0:0x0,_0x423dbd['y']=_0x478554[_0x5863de(0x1ca)]?_0x478554['offset']['y']||0x0:0x0,_0x423dbd[_0x5863de(0x38b)]=-(_0x478554[_0x5863de(0x38b)]||0x0);const _0x50f7dc=_0x5863de(0x344)[_0x5863de(0x3f1)](_0xc37844);this[_0x50f7dc]=_0x423dbd;},Sprite_DateTimeHUD[_0x1e0c1e(0x205)][_0x1e0c1e(0x2b6)]=function(){const _0x12b130=_0x1e0c1e;Sprite[_0x12b130(0x205)][_0x12b130(0x2b6)][_0x12b130(0x2c4)](this),this[_0x12b130(0x2eb)](),this[_0x12b130(0x30d)]();},Sprite_DateTimeHUD[_0x1e0c1e(0x205)][_0x1e0c1e(0x2eb)]=function(){const _0xe90e54=_0x1e0c1e;this['updateSeasonSpriteBitmap'](),this[_0xe90e54(0x173)](),this[_0xe90e54(0x365)](),this['updateYearSpriteBitmap'](),this[_0xe90e54(0x236)](),this[_0xe90e54(0x3e9)](),this[_0xe90e54(0x297)](),this[_0xe90e54(0x25b)]();},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x3cd)]=function(_0x582c18,_0x52f606,_0x105d1d){const _0x313247=_0x1e0c1e,_0xe0061b=Sprite_DateTimeHUD['SETTINGS']['sprites'][_0x52f606];if(!_0xe0061b)return;if(_0xe0061b['images'][_0x105d1d]!==''){if(_0x313247(0x310)!=='yucDi')this[_0x313247(0x34d)]();else{const _0x246d35=_0xe0061b['images'][_0x105d1d],_0x5ac660=ImageManager[_0x313247(0x2a1)](_0x246d35);_0x5ac660[_0x313247(0x1c8)](VisuMZ[_0x313247(0x2d6)]['UpdateSpritePicture'][_0x313247(0x376)](this,_0x582c18,_0x5ac660));}}else{if(_0x313247(0x182)===_0x313247(0x303)){const _0x447053=_0x51b272['SwDawn'],_0x10c40d=_0x565556[_0x313247(0x1d5)][_0x313247(0x36f)](_0x338342[_0x313247(0x40a)]);_0x4ca9a8[_0x313247(0x2d6)][_0x313247(0x3df)](_0x447053,_0x10c40d);}else{const _0x10a11a=_0xe0061b[_0x313247(0x3a5)][_0x105d1d],_0x4f44eb=ImageManager[_0x313247(0x3db)](_0x313247(0x2d4));_0x4f44eb['addLoadListener'](VisuMZ[_0x313247(0x2d6)][_0x313247(0x367)][_0x313247(0x376)](this,_0x582c18,_0x10a11a,_0xe0061b));}}},VisuMZ['DateTimeSystem'][_0x1e0c1e(0x203)]=function(_0x10c909,_0x3619e2){const _0x8fd4eb=_0x1e0c1e;_0x10c909[_0x8fd4eb(0x2ee)]=_0x3619e2,_0x10c909[_0x8fd4eb(0x191)]['x']=0x1,_0x10c909[_0x8fd4eb(0x191)]['y']=0x1;},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x367)]=function(_0x2766ee,_0x370fa8,_0x5b6ecd){const _0x14774e=_0x1e0c1e;_0x2766ee[_0x14774e(0x2ee)]=new Bitmap(ImageManager[_0x14774e(0x3e5)],ImageManager[_0x14774e(0x3b7)]);const _0x2107a7=ImageManager[_0x14774e(0x3db)](_0x14774e(0x2d4)),_0x2b27a9=_0x2766ee[_0x14774e(0x2ee)],_0x4f45b7=ImageManager[_0x14774e(0x3e5)],_0x4322dc=ImageManager['iconHeight'],_0x3b3578=_0x370fa8%0x10*_0x4f45b7,_0x50873e=Math[_0x14774e(0x320)](_0x370fa8/0x10)*_0x4322dc;_0x2b27a9[_0x14774e(0x233)]['imageSmoothingEnabled']=![],_0x2b27a9[_0x14774e(0x3ca)](_0x2107a7,_0x3b3578,_0x50873e,_0x4f45b7,_0x4322dc,0x0,0x0,_0x4f45b7,_0x4322dc),_0x2b27a9[_0x14774e(0x233)][_0x14774e(0x316)]=!![],_0x2766ee['scale']['x']=_0x5b6ecd[_0x14774e(0x191)]?_0x5b6ecd[_0x14774e(0x191)]['x']:0x1,_0x2766ee['scale']['y']=_0x5b6ecd['scale']?_0x5b6ecd[_0x14774e(0x191)]['y']:0x1,_0x2b27a9[_0x14774e(0x1dd)]=![];},Sprite_DateTimeHUD[_0x1e0c1e(0x205)][_0x1e0c1e(0x1f7)]=function(){const _0x53a02a=_0x1e0c1e;this[_0x53a02a(0x32c)]=undefined,this[_0x53a02a(0x45e)]=undefined,this[_0x53a02a(0x302)]=undefined,this[_0x53a02a(0x204)]=undefined,this[_0x53a02a(0x478)]=undefined,this[_0x53a02a(0x34b)]=undefined,this['_cache_weekday']=undefined,this['_cache_hour']=undefined,this[_0x53a02a(0x45f)]=undefined,TimeManager[_0x53a02a(0x17e)](),this['updateSprites']();},Sprite_DateTimeHUD[_0x1e0c1e(0x205)][_0x1e0c1e(0x3c0)]=function(){const _0x45f8b2=_0x1e0c1e;if(!this['_seasonSprite'])return;if(!this['_seasonSprite'][_0x45f8b2(0x2ee)])return;if(this['_cache_season']===TimeManager['checkSeason']())return;this['_cache_season']=TimeManager[_0x45f8b2(0x190)]();let _0xc52b19=['','spring',_0x45f8b2(0x26c),_0x45f8b2(0x3f2),_0x45f8b2(0x1ea)][this[_0x45f8b2(0x32c)]];VisuMZ[_0x45f8b2(0x2d6)][_0x45f8b2(0x3cd)]['call'](this,this[_0x45f8b2(0x386)],'season',_0xc52b19);},Sprite_DateTimeHUD[_0x1e0c1e(0x205)]['updateDayCycleSpriteBitmap']=function(){const _0x2f7137=_0x1e0c1e;if(!this[_0x2f7137(0x39f)])return;if(!this[_0x2f7137(0x39f)][_0x2f7137(0x2ee)])return;if(this[_0x2f7137(0x45e)]===TimeManager[_0x2f7137(0x2fe)]())return;this['_cache_daycycle']=TimeManager[_0x2f7137(0x2fe)]();let _0x31f343=['',_0x2f7137(0x40b),_0x2f7137(0x2cd),_0x2f7137(0x435),'night'][this[_0x2f7137(0x45e)]];VisuMZ['DateTimeSystem']['UpdateSpriteImage'][_0x2f7137(0x2c4)](this,this[_0x2f7137(0x39f)],_0x2f7137(0x30a),_0x31f343);},Sprite_DateTimeHUD[_0x1e0c1e(0x205)][_0x1e0c1e(0x365)]=function(){const _0x2afe47=_0x1e0c1e;if(!this[_0x2afe47(0x2c3)])return;if(!this[_0x2afe47(0x2c3)][_0x2afe47(0x2ee)])return;if(this[_0x2afe47(0x302)]===TimeManager['checkWeekdayType']())return;this[_0x2afe47(0x302)]=TimeManager[_0x2afe47(0x1d3)]();let _0x5a12bc=['',_0x2afe47(0x3c3),_0x2afe47(0x28a)][this[_0x2afe47(0x302)]];VisuMZ['DateTimeSystem'][_0x2afe47(0x3cd)][_0x2afe47(0x2c4)](this,this[_0x2afe47(0x2c3)],_0x2afe47(0x3b0),_0x5a12bc);},Sprite_DateTimeHUD['prototype'][_0x1e0c1e(0x428)]=function(){const _0x5bb4fa=_0x1e0c1e;if(!this['_yearSprite'])return;if(!this[_0x5bb4fa(0x2b2)]['bitmap'])return;if(this['_cache_year']===TimeManager['getYear']())return;this[_0x5bb4fa(0x204)]=TimeManager[_0x5bb4fa(0x393)](),this[_0x5bb4fa(0x2b2)][_0x5bb4fa(0x2ee)]['clear'](),VisuMZ[_0x5bb4fa(0x2d6)][_0x5bb4fa(0x2aa)][_0x5bb4fa(0x2c4)](this,this[_0x5bb4fa(0x2b2)][_0x5bb4fa(0x2ee)]);},VisuMZ['DateTimeSystem'][_0x1e0c1e(0x2aa)]=function(_0x181f09){const _0x31a8fe=_0x1e0c1e;VisuMZ['DateTimeSystem'][_0x31a8fe(0x42c)][_0x31a8fe(0x3b1)][_0x31a8fe(0x42f)]&&VisuMZ[_0x31a8fe(0x2d6)][_0x31a8fe(0x42c)]['HudSprite'][_0x31a8fe(0x42f)][_0x31a8fe(0x2c4)](this,_0x181f09);},Sprite_DateTimeHUD[_0x1e0c1e(0x205)]['updateMonthSpriteBitmap']=function(){const _0x935370=_0x1e0c1e;if(!this[_0x935370(0x432)])return;if(!this[_0x935370(0x432)]['bitmap'])return;if(this['_cache_month']===TimeManager[_0x935370(0x377)]())return;this[_0x935370(0x478)]=TimeManager['getMonth'](),this[_0x935370(0x432)][_0x935370(0x2ee)]['clear'](),VisuMZ[_0x935370(0x2d6)][_0x935370(0x475)][_0x935370(0x2c4)](this,this[_0x935370(0x432)][_0x935370(0x2ee)]);},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x475)]=function(_0x109924){const _0x106a2b=_0x1e0c1e;VisuMZ[_0x106a2b(0x2d6)][_0x106a2b(0x42c)][_0x106a2b(0x3b1)][_0x106a2b(0x27d)]&&(_0x106a2b(0x32b)!==_0x106a2b(0x32b)?(_0x24b747[_0x106a2b(0x205)][_0x106a2b(0x2b6)][_0x106a2b(0x2c4)](this),this['updateSprites'](),this['updateVisibility']()):VisuMZ['DateTimeSystem'][_0x106a2b(0x42c)]['HudSprite'][_0x106a2b(0x27d)][_0x106a2b(0x2c4)](this,_0x109924));},Sprite_DateTimeHUD['prototype'][_0x1e0c1e(0x3e9)]=function(){const _0x1dbec8=_0x1e0c1e;if(!this[_0x1dbec8(0x1ff)])return;if(!this[_0x1dbec8(0x1ff)][_0x1dbec8(0x2ee)])return;if(this[_0x1dbec8(0x34b)]===TimeManager[_0x1dbec8(0x253)]())return;this[_0x1dbec8(0x34b)]=TimeManager['getDate'](),this[_0x1dbec8(0x1ff)][_0x1dbec8(0x2ee)][_0x1dbec8(0x352)](),VisuMZ[_0x1dbec8(0x2d6)][_0x1dbec8(0x2b0)][_0x1dbec8(0x2c4)](this,this['_dateSprite']['bitmap']);},VisuMZ['DateTimeSystem'][_0x1e0c1e(0x2b0)]=function(_0x36ff22){const _0x11baeb=_0x1e0c1e;if(VisuMZ[_0x11baeb(0x2d6)][_0x11baeb(0x42c)][_0x11baeb(0x3b1)][_0x11baeb(0x3b4)]){if(_0x11baeb(0x325)===_0x11baeb(0x325))VisuMZ[_0x11baeb(0x2d6)][_0x11baeb(0x42c)][_0x11baeb(0x3b1)][_0x11baeb(0x3b4)]['call'](this,_0x36ff22);else{const _0x7579b7=_0x2dd6d5[_0x11baeb(0x1ad)],_0x5c619f=_0xe1babe['month'];_0x3b70a1[_0x11baeb(0x394)](_0x7579b7,_0x5c619f);}}},Sprite_DateTimeHUD[_0x1e0c1e(0x205)]['updateWeekdaySpriteBitmap']=function(){const _0x283d97=_0x1e0c1e;if(!this[_0x283d97(0x41d)])return;if(!this[_0x283d97(0x41d)][_0x283d97(0x2ee)])return;if(this[_0x283d97(0x1e1)]===TimeManager[_0x283d97(0x35f)]())return;this['_cache_weekday']=TimeManager[_0x283d97(0x35f)](),this[_0x283d97(0x41d)][_0x283d97(0x2ee)][_0x283d97(0x352)](),VisuMZ['DateTimeSystem']['DrawHudWeekday'][_0x283d97(0x2c4)](this,this[_0x283d97(0x41d)]['bitmap']);},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x281)]=function(_0x3eeaeb){const _0x51876f=_0x1e0c1e;VisuMZ[_0x51876f(0x2d6)][_0x51876f(0x42c)]['HudSprite'][_0x51876f(0x423)]&&('iTEWP'===_0x51876f(0x42d)?VisuMZ[_0x51876f(0x2d6)][_0x51876f(0x42c)][_0x51876f(0x3b1)][_0x51876f(0x423)]['call'](this,_0x3eeaeb):(this[_0x51876f(0x22f)]=_0x1b4a31(_0x4ed8c6['$1']),this[_0x51876f(0x369)]=!![]));},Sprite_DateTimeHUD[_0x1e0c1e(0x205)][_0x1e0c1e(0x25b)]=function(){const _0x4ace05=_0x1e0c1e;if(!this[_0x4ace05(0x3fe)])return;if(!this[_0x4ace05(0x3fe)]['bitmap'])return;if(this['_cache_hour']===TimeManager[_0x4ace05(0x226)]()&&this[_0x4ace05(0x45f)]===TimeManager['getMinute']()){if(_0x4ace05(0x247)===_0x4ace05(0x322))this[_0x4ace05(0x3c0)](),this[_0x4ace05(0x173)](),this[_0x4ace05(0x365)](),this[_0x4ace05(0x428)](),this['updateMonthSpriteBitmap'](),this[_0x4ace05(0x3e9)](),this[_0x4ace05(0x297)](),this['updateTimeSpriteBitmap']();else return;}this[_0x4ace05(0x2c9)]=TimeManager[_0x4ace05(0x226)](),this[_0x4ace05(0x45f)]=TimeManager[_0x4ace05(0x1a2)](),this['_timeSprite'][_0x4ace05(0x2ee)][_0x4ace05(0x352)](),VisuMZ[_0x4ace05(0x2d6)][_0x4ace05(0x1a1)][_0x4ace05(0x2c4)](this,this[_0x4ace05(0x3fe)][_0x4ace05(0x2ee)]);},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x1a1)]=function(_0x3bb3b2){const _0x8562a2=_0x1e0c1e;if(VisuMZ[_0x8562a2(0x2d6)][_0x8562a2(0x42c)][_0x8562a2(0x3b1)]['Time_DrawText_JS']){if(_0x8562a2(0x1cb)!==_0x8562a2(0x1cb))return 0x2;else VisuMZ[_0x8562a2(0x2d6)][_0x8562a2(0x42c)][_0x8562a2(0x3b1)]['Time_DrawText_JS'][_0x8562a2(0x2c4)](this,_0x3bb3b2);}},Sprite_DateTimeHUD[_0x1e0c1e(0x205)][_0x1e0c1e(0x30d)]=function(){const _0x3d53e6=_0x1e0c1e,_0x16fc6d=this[_0x3d53e6(0x285)](),_0x51bd62=Sprite_DateTimeHUD[_0x3d53e6(0x34c)][_0x3d53e6(0x1f6)][_0x3d53e6(0x2af)]||0x10;this['opacity']+=_0x16fc6d?_0x51bd62:-_0x51bd62;},Sprite_DateTimeHUD[_0x1e0c1e(0x205)][_0x1e0c1e(0x285)]=function(){return $gameMap&&$gameMap['isDateTimeHudVisible']();},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x1a8)]=Spriteset_Base[_0x1e0c1e(0x205)][_0x1e0c1e(0x450)],Spriteset_Base[_0x1e0c1e(0x205)]['createBaseFilters']=function(){const _0x33c7b4=_0x1e0c1e;VisuMZ[_0x33c7b4(0x2d6)][_0x33c7b4(0x1a8)][_0x33c7b4(0x2c4)](this),$gameMap&&$gameMap[_0x33c7b4(0x38d)]()&&!this[_0x33c7b4(0x40f)]&&this['createTimeToneFilter']();},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x26a)]=Spriteset_Base['prototype'][_0x1e0c1e(0x35a)],Spriteset_Base[_0x1e0c1e(0x205)][_0x1e0c1e(0x35a)]=function(){const _0x5ce7ef=_0x1e0c1e;VisuMZ[_0x5ce7ef(0x2d6)][_0x5ce7ef(0x26a)]['call'](this),$gameMap&&$gameMap[_0x5ce7ef(0x38d)]()&&this[_0x5ce7ef(0x40f)]&&(_0x5ce7ef(0x215)===_0x5ce7ef(0x215)?this[_0x5ce7ef(0x1c7)]():(this[_0x5ce7ef(0x32c)]=_0x3cf386,this[_0x5ce7ef(0x45e)]=_0x43698e,this[_0x5ce7ef(0x302)]=_0x4ac6f8,this['_cache_year']=_0x3deef5,this[_0x5ce7ef(0x478)]=_0x5f018c,this[_0x5ce7ef(0x34b)]=_0x323e49,this[_0x5ce7ef(0x1e1)]=_0x56586f,this[_0x5ce7ef(0x2c9)]=_0x3b827c,this[_0x5ce7ef(0x45f)]=_0x4934d2,_0x4c1865[_0x5ce7ef(0x17e)](),this['updateSprites']()));},Spriteset_Base[_0x1e0c1e(0x205)][_0x1e0c1e(0x3ae)]=function(){const _0x59f6a5=_0x1e0c1e;this['_timeToneFilter']=new ColorFilter(),this[_0x59f6a5(0x1c6)][_0x59f6a5(0x2db)][_0x59f6a5(0x207)](this[_0x59f6a5(0x40f)]);},Spriteset_Base[_0x1e0c1e(0x205)][_0x1e0c1e(0x1c7)]=function(){const _0x499c25=_0x1e0c1e,_0x2a5d50=$gameScreen[_0x499c25(0x2ad)]();this[_0x499c25(0x40f)][_0x499c25(0x2ed)]([_0x2a5d50[0x0],_0x2a5d50[0x1],_0x2a5d50[0x2],_0x2a5d50[0x3]]);},VisuMZ[_0x1e0c1e(0x2d6)]['Window_Base_preConvertEscapeCharacters']=Window_Base[_0x1e0c1e(0x205)][_0x1e0c1e(0x1e3)],Window_Base[_0x1e0c1e(0x205)][_0x1e0c1e(0x1e3)]=function(_0x528cae){const _0x5bf8da=_0x1e0c1e;return _0x528cae=VisuMZ[_0x5bf8da(0x2d6)][_0x5bf8da(0x44d)][_0x5bf8da(0x2c4)](this,_0x528cae),_0x528cae=this[_0x5bf8da(0x39e)](_0x528cae),_0x528cae;},Window_Base[_0x1e0c1e(0x205)][_0x1e0c1e(0x39e)]=function(_0x2e67e4){const _0x4f62e5=_0x1e0c1e;return _0x2e67e4=this[_0x4f62e5(0x405)](_0x2e67e4),_0x2e67e4=this[_0x4f62e5(0x343)](_0x2e67e4),_0x2e67e4;},Window_Base[_0x1e0c1e(0x205)][_0x1e0c1e(0x405)]=function(_0x5984f8){const _0x4e2406=_0x1e0c1e;if(!_0x5984f8)return _0x5984f8;return _0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameYearP>/gi,(_0x160d68,_0x2afafb)=>TextManager[_0x4e2406(0x1be)](!![])),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameYear>/gi,(_0x461f51,_0x5ea162)=>TextManager[_0x4e2406(0x1be)](![])),_0x5984f8=_0x5984f8['replace'](/<GameMonthA>/gi,(_0x387895,_0x5b267e)=>TextManager['gameTimeMonth'](_0x4e2406(0x399))),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameMonthN>/gi,(_0xfe3076,_0x2f8800)=>TextManager['gameTimeMonth'](_0x4e2406(0x35d))),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameMonthP>/gi,(_0x482eb,_0x505f0a)=>TextManager[_0x4e2406(0x27b)](_0x4e2406(0x3c1))),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameMonth>/gi,(_0x36541e,_0x315594)=>TextManager[_0x4e2406(0x27b)](_0x4e2406(0x384))),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameSeason>/gi,(_0x40bdc6,_0x2f4958)=>TextManager[_0x4e2406(0x2a6)]()),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameDateP>/gi,(_0x2768b7,_0x59d0f7)=>TextManager['gameTimeDate'](!![])),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameDate>/gi,(_0x3bcb19,_0x41be35)=>TextManager['gameTimeDate'](![])),_0x5984f8=_0x5984f8['replace'](/<GameWeekdayA>/gi,(_0x211363,_0x32185d)=>TextManager[_0x4e2406(0x181)](!![])),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameWeekday>/gi,(_0x5a7055,_0xf35d3e)=>TextManager[_0x4e2406(0x181)](![])),_0x5984f8=_0x5984f8['replace'](/<GameWeekdayT>/gi,(_0x1ba0aa,_0x20bd9c)=>TextManager[_0x4e2406(0x270)]()),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameHourP>/gi,(_0x2864ec,_0x23a6e7)=>TextManager[_0x4e2406(0x398)](_0x4e2406(0x3c1))),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameHourMP>/gi,(_0x5534df,_0x538fa2)=>TextManager[_0x4e2406(0x398)](_0x4e2406(0x20c))),_0x5984f8=_0x5984f8['replace'](/<GameHourM>/gi,(_0x4f5325,_0x36b18f)=>TextManager[_0x4e2406(0x398)]('military')),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameHour>/gi,(_0x3e0d9d,_0xbc4af7)=>TextManager[_0x4e2406(0x398)]('normal')),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameMinuteP>/gi,(_0x45d68e,_0x3ea1fd)=>TextManager[_0x4e2406(0x32d)](!![])),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameMinute>/gi,(_0x13be39,_0x17f143)=>TextManager[_0x4e2406(0x32d)](![])),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameSecondP>/gi,(_0x12b2b9,_0x3c4899)=>TextManager[_0x4e2406(0x31a)](!![])),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameSecond>/gi,(_0xdfa8a4,_0x3a65da)=>TextManager[_0x4e2406(0x31a)](![])),_0x5984f8=_0x5984f8['replace'](/<GameMeridiem>/gi,(_0x58593b,_0x104f97)=>TextManager[_0x4e2406(0x258)]()),_0x5984f8=_0x5984f8[_0x4e2406(0x31e)](/<GameDayCycle>/gi,(_0x25afb7,_0x8a608c)=>TextManager[_0x4e2406(0x438)]()),_0x5984f8;},Window_Base[_0x1e0c1e(0x205)][_0x1e0c1e(0x343)]=function(_0x31c539){const _0x1271b7=_0x1e0c1e;if(!_0x31c539)return _0x31c539;return _0x31c539=_0x31c539['replace'](/<RealYearP>/gi,(_0x7a8445,_0x455413)=>TextManager[_0x1271b7(0x3c4)](!![])),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealYear>/gi,(_0x691c42,_0x15178b)=>TextManager[_0x1271b7(0x3c4)](![])),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealMonthA>/gi,(_0x546a5f,_0x9e4878)=>TextManager[_0x1271b7(0x214)](_0x1271b7(0x399))),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealMonthN>/gi,(_0x3c2f0a,_0x33be38)=>TextManager['realTimeMonth']('number')),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealMonthP>/gi,(_0x335d05,_0x5a54d1)=>TextManager[_0x1271b7(0x214)](_0x1271b7(0x3c1))),_0x31c539=_0x31c539['replace'](/<RealMonth>/gi,(_0x241bbf,_0x122f8c)=>TextManager[_0x1271b7(0x214)]('full')),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealSeason>/gi,(_0x100010,_0x30a68f)=>TextManager[_0x1271b7(0x328)]()),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealDateP>/gi,(_0x2a4c12,_0x299643)=>TextManager[_0x1271b7(0x183)](!![])),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealDate>/gi,(_0x2aab66,_0x1d92d8)=>TextManager[_0x1271b7(0x183)](![])),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealWeekdayA>/gi,(_0x1f4d35,_0x467b0d)=>TextManager[_0x1271b7(0x209)](!![])),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealWeekday>/gi,(_0x40d568,_0x4a330d)=>TextManager[_0x1271b7(0x209)](![])),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealWeekdayT>/gi,(_0x3e0530,_0x3f90ee)=>TextManager[_0x1271b7(0x18f)]()),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealHourP>/gi,(_0x56fb7e,_0x5c71ce)=>TextManager['realTimeHour'](_0x1271b7(0x3c1))),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealHourMP>/gi,(_0x49d819,_0x22ce76)=>TextManager['realTimeHour'](_0x1271b7(0x20c))),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealHourM>/gi,(_0x2912f7,_0x958c8e)=>TextManager['realTimeHour'](_0x1271b7(0x3cc))),_0x31c539=_0x31c539['replace'](/<RealHour>/gi,(_0x4d4b78,_0x4787da)=>TextManager[_0x1271b7(0x3bb)]('normal')),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealMinuteP>/gi,(_0x6f87c5,_0x4ce1bc)=>TextManager[_0x1271b7(0x463)](!![])),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealMinute>/gi,(_0xc3fd43,_0x9a9349)=>TextManager[_0x1271b7(0x463)](![])),_0x31c539=_0x31c539['replace'](/<RealSecondP>/gi,(_0x4574c2,_0x5dea16)=>TextManager['realTimeSecond'](!![])),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealSecond>/gi,(_0x3ce569,_0x53c55)=>TextManager['realTimeSecond'](![])),_0x31c539=_0x31c539['replace'](/<RealMeridiem>/gi,(_0x5e9d98,_0x172b6c)=>TextManager[_0x1271b7(0x198)]()),_0x31c539=_0x31c539[_0x1271b7(0x31e)](/<RealDayCycle>/gi,(_0x418a54,_0x1a9546)=>TextManager[_0x1271b7(0x2c7)]()),_0x31c539;},TextManager[_0x1e0c1e(0x249)]=VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x42c)][_0x1e0c1e(0x39d)]['Name']??'Show\x20Date\x20&\x20Time',VisuMZ['DateTimeSystem'][_0x1e0c1e(0x23e)]=Window_Options['prototype'][_0x1e0c1e(0x40c)],Window_Options[_0x1e0c1e(0x205)][_0x1e0c1e(0x40c)]=function(){const _0x47a858=_0x1e0c1e;VisuMZ[_0x47a858(0x2d6)]['Window_Options_addGeneralOptions']['call'](this),this[_0x47a858(0x419)]();},Window_Options[_0x1e0c1e(0x205)][_0x1e0c1e(0x419)]=function(){const _0x22d509=_0x1e0c1e;VisuMZ['DateTimeSystem'][_0x22d509(0x42c)][_0x22d509(0x39d)]['AddOption']&&this[_0x22d509(0x34d)]();},Window_Options[_0x1e0c1e(0x205)][_0x1e0c1e(0x34d)]=function(){const _0x5807cd=_0x1e0c1e,_0x338855=TextManager['dateTimeHud'],_0x1c73a2='dateTimeHud';this[_0x5807cd(0x1b3)](_0x338855,_0x1c73a2);},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x3b9)]=Window_ShopBuy['prototype'][_0x1e0c1e(0x430)],Window_ShopBuy[_0x1e0c1e(0x205)][_0x1e0c1e(0x430)]=function(_0x243265){const _0x48dc8d=_0x1e0c1e;let _0x464ace=VisuMZ[_0x48dc8d(0x2d6)][_0x48dc8d(0x3b9)][_0x48dc8d(0x2c4)](this,_0x243265);if(_0x464ace&&Imported['VisuMZ_1_ItemsEquipsCore']){if(_0x48dc8d(0x2b9)===_0x48dc8d(0x422)){if(!this[_0x48dc8d(0x2b2)])return;if(!this[_0x48dc8d(0x2b2)]['bitmap'])return;if(this[_0x48dc8d(0x204)]===_0x2054c3['getYear']())return;this['_cache_year']=_0x36181a['getYear'](),this['_yearSprite']['bitmap'][_0x48dc8d(0x352)](),_0xa6150['DateTimeSystem'][_0x48dc8d(0x2aa)][_0x48dc8d(0x2c4)](this,this[_0x48dc8d(0x2b2)][_0x48dc8d(0x2ee)]);}else{if(!VisuMZ['DateTimeSystem'][_0x48dc8d(0x1af)](_0x464ace))return null;}}return _0x464ace;},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x1af)]=function(_0x44043c){const _0xd20af6=_0x1e0c1e;if($gameMap&&$gameMap[_0xd20af6(0x33b)]())return!![];const _0x4d36b7=VisuMZ[_0xd20af6(0x2d6)]['RegExp'],_0x58b258=_0x44043c[_0xd20af6(0x2d9)]||'',_0x513cbf=_0x58b258[_0xd20af6(0x264)](_0x4d36b7[_0xd20af6(0x439)]);if(_0x513cbf){if(_0xd20af6(0x3c2)===_0xd20af6(0x292)){if(_0x51c6a2[_0xd20af6(0x2d6)][_0xd20af6(0x42c)][_0xd20af6(0x346)][_0xd20af6(0x24f)])return _0x35d87c['DateTimeSystem'][_0xd20af6(0x42c)]['GameTimeGeneral']['LeapYearCalc'][_0xd20af6(0x2c4)](this,_0x2f0cb5);return _0x3d3e7c%0x190===0x0||_0x56de50%0x64!==0x0&&_0x5ea972%0x4===0x0;}else for(const _0x3d62cb of _0x513cbf){if(_0xd20af6(0x1c3)==='PTMfu')this['_tilesetId']=_0x4db2c4(_0x1375f0['$1']),this[_0xd20af6(0x369)]=!![];else{_0x3d62cb[_0xd20af6(0x264)](_0x4d36b7[_0xd20af6(0x439)]);const _0x4e72ab=String(RegExp['$1']),_0x4330eb=String(RegExp['$2']);if(!VisuMZ[_0xd20af6(0x2d6)]['matchRangeCondition'](_0x4e72ab,_0x4330eb))return![];}}}return!![];},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x28b)]=Window_ShopBuy[_0x1e0c1e(0x205)]['price'],Window_ShopBuy[_0x1e0c1e(0x205)][_0x1e0c1e(0x2c1)]=function(_0x51857d){const _0x430d7b=_0x1e0c1e;let _0x14d7e0=VisuMZ[_0x430d7b(0x2d6)]['Window_ShopBuy_price'][_0x430d7b(0x2c4)](this,_0x51857d);if(_0x51857d&&_0x14d7e0!==0x0&&Imported[_0x430d7b(0x364)]){const _0x4149e2=VisuMZ[_0x430d7b(0x2d6)][_0x430d7b(0x1a5)](_0x51857d);_0x14d7e0=Math['ceil'](_0x4149e2*_0x14d7e0);}return _0x14d7e0;},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x1a5)]=function(_0x416dec){const _0x467891=_0x1e0c1e;if($gameMap&&$gameMap[_0x467891(0x33b)]())return 0x1;const _0x49a30d=VisuMZ[_0x467891(0x2d6)]['RegExp'],_0x5c7cb9=_0x416dec[_0x467891(0x2d9)]||'';let _0x103c16=0x1;const _0x330374=_0x5c7cb9[_0x467891(0x264)](_0x49a30d[_0x467891(0x1f3)]);if(_0x330374){if(_0x467891(0x32a)===_0x467891(0x32a))for(const _0x59a097 of _0x330374){_0x59a097[_0x467891(0x264)](_0x49a30d[_0x467891(0x1f3)]);const _0x6e750b=String(RegExp['$1']),_0xedfbd5=Number(RegExp['$2'])*0.01;VisuMZ[_0x467891(0x2d6)][_0x467891(0x1e7)](_0x6e750b)&&(_0x103c16*=_0xedfbd5);}else return 0x3;}return _0x103c16;},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x3f7)]=function(_0x452711,_0xff7661){const _0x203b76=_0x1e0c1e;if(_0x452711['match'](/HOUR(?:|S)/i)){if('jswvz'===_0x203b76(0x336)){const _0x47815c=String(_0xff7661)[_0x203b76(0x338)](',')[_0x203b76(0x2d1)](_0x237b74=>Number(_0x237b74));if(!_0x47815c[_0x203b76(0x36f)](TimeManager[_0x203b76(0x226)]()))return![];}else{const _0x3690f7=_0x416439[_0x203b76(0x374)],_0x1d0ebf=_0xfceaed[_0x203b76(0x21b)][_0x203b76(0x36f)](_0x2d5843[_0x203b76(0x319)]);_0x2ff7fd['DateTimeSystem'][_0x203b76(0x3df)](_0x3690f7,_0x1d0ebf);}}if(_0x452711['match'](/WEEKDAY(?:|S)/i)){if('SpUUw'===_0x203b76(0x1b4)){const _0x39d200=String(_0xff7661)[_0x203b76(0x338)](',')[_0x203b76(0x2d1)](_0x4d6ead=>Number(_0x4d6ead));if(!_0x39d200['includes'](TimeManager[_0x203b76(0x35f)]()))return![];}else{const _0x1f0d85=_0x14482d[_0x203b76(0x226)](),_0x1256ed=_0x580feb[_0x203b76(0x18b)](),_0x30819a=_0x47b59c['getMinuteRaw'](),_0x5df473=_0x28f926['getMinutesInHour'](),_0x2c5f8e=_0x30819a/_0x5df473,_0x27f276=this[_0x203b76(0x1d0)](_0x1f0d85),_0x2734db=this['getTimeToneForHour'](_0x1256ed),_0x334844=_0x9941fa[_0x203b76(0x3a4)](_0x27f276[0x0]+(_0x2734db[0x0]-_0x27f276[0x0])*_0x2c5f8e),_0x2a2105=_0x39ac98[_0x203b76(0x3a4)](_0x27f276[0x1]+(_0x2734db[0x1]-_0x27f276[0x1])*_0x2c5f8e),_0x292889=_0x5a2838[_0x203b76(0x3a4)](_0x27f276[0x2]+(_0x2734db[0x2]-_0x27f276[0x2])*_0x2c5f8e),_0x155395=_0x61aa9e['round'](_0x27f276[0x3]+(_0x2734db[0x3]-_0x27f276[0x3])*_0x2c5f8e);this['_timeTone']=[_0x334844,_0x2a2105,_0x292889,_0x155395];}}if(_0x452711[_0x203b76(0x264)](/DATE(?:|S)/i)){if('IKLXG'===_0x203b76(0x1f0)){const _0x2d5eac=String(_0xff7661)[_0x203b76(0x338)](',')[_0x203b76(0x2d1)](_0x513058=>Number(_0x513058));if(!_0x2d5eac[_0x203b76(0x36f)](TimeManager[_0x203b76(0x253)]()))return![];}else _0x29c2cc+=0x1;}if(_0x452711['match'](/MONTH(?:|S)/i)){if(_0x203b76(0x43c)!==_0x203b76(0x43c)){const _0x1334b7=_0x1f3ab0[_0x203b76(0x2ea)],_0x13d995=_0x403ba9['year'];_0x133d5a[_0x203b76(0x394)](_0x1334b7,_0x13d995);}else{const _0x24c8e1=String(_0xff7661)['split'](',')[_0x203b76(0x2d1)](_0xb137d9=>Number(_0xb137d9));if(!_0x24c8e1[_0x203b76(0x36f)](TimeManager[_0x203b76(0x377)]()))return![];}}if(_0x452711[_0x203b76(0x264)](/SEASON(?:|S)/i)){const _0x5bb8f9=String(_0xff7661)[_0x203b76(0x338)](',')['map'](_0x3d1061=>_0x3d1061[_0x203b76(0x2a8)]()[_0x203b76(0x324)]()),_0x54341d=TimeManager['checkSeason']();if(_0x54341d===0x1&&!_0x5bb8f9[_0x203b76(0x36f)](_0x203b76(0x218)))return![];if(_0x54341d===0x2&&!_0x5bb8f9['includes'](_0x203b76(0x26c)))return![];if(_0x54341d===0x3&&!_0x5bb8f9[_0x203b76(0x36f)](_0x203b76(0x3f2)))return![];if(_0x54341d===0x4&&!_0x5bb8f9[_0x203b76(0x36f)](_0x203b76(0x1ea)))return![];}if(_0x452711['match'](/CYCLE(?:|S)/i)){if('BwAjg'===_0x203b76(0x1d8)){const _0x4e90dd=String(_0xff7661)[_0x203b76(0x338)](',')[_0x203b76(0x2d1)](_0x5c1753=>_0x5c1753[_0x203b76(0x2a8)]()[_0x203b76(0x324)]()),_0x336800=TimeManager['checkDayCycle']();if(_0x336800===0x1&&!_0x4e90dd[_0x203b76(0x36f)]('dawn'))return![];if(_0x336800===0x2&&!_0x4e90dd[_0x203b76(0x36f)](_0x203b76(0x2cd)))return![];if(_0x336800===0x3&&!_0x4e90dd['includes'](_0x203b76(0x435)))return![];if(_0x336800===0x4&&!_0x4e90dd[_0x203b76(0x36f)](_0x203b76(0x1b2)))return![];}else{const _0x47fa4f=_0x4e306c[_0x203b76(0x416)],_0xfa8f26=_0x5bf090['WinterMonths'][_0x203b76(0x36f)](_0x2813dd[_0x203b76(0x319)]);_0x142c5e['DateTimeSystem'][_0x203b76(0x3df)](_0x47fa4f,_0xfa8f26);}}return!![];},VisuMZ[_0x1e0c1e(0x2d6)][_0x1e0c1e(0x1e7)]=function(_0xb0757b){const _0x3b23e4=_0x1e0c1e;if(_0xb0757b[_0x3b23e4(0x264)](/SPRING MONTHS/i))return TimeManager[_0x3b23e4(0x190)]()===0x1;if(_0xb0757b['match'](/SUMMER MONTHS/i))return TimeManager['checkSeason']()===0x2;if(_0xb0757b[_0x3b23e4(0x264)](/AUTUMN MONTHS/i))return TimeManager['checkSeason']()===0x3;if(_0xb0757b[_0x3b23e4(0x264)](/WINTER MONTHS/i))return TimeManager[_0x3b23e4(0x190)]()===0x4;if(_0xb0757b[_0x3b23e4(0x264)](/WEEKDAYS ONLY/i))return TimeManager[_0x3b23e4(0x1d3)]()===0x1;if(_0xb0757b[_0x3b23e4(0x264)](/WEEKENDS ONLY/i))return TimeManager[_0x3b23e4(0x1d3)]()===0x2;if(_0xb0757b[_0x3b23e4(0x264)](/DAWN HOURS/i))return TimeManager[_0x3b23e4(0x2fe)]()===0x1;if(_0xb0757b[_0x3b23e4(0x264)](/DAY HOURS/i))return TimeManager['checkDayCycle']()===0x2;if(_0xb0757b[_0x3b23e4(0x264)](/DUSK HOURS/i))return TimeManager[_0x3b23e4(0x2fe)]()===0x3;if(_0xb0757b[_0x3b23e4(0x264)](/NIGHT HOURS/i))return TimeManager['checkDayCycle']()===0x4;if(_0xb0757b['match'](/HOUR(?:|S)[ ](.*)/i)){if(_0x3b23e4(0x283)===_0x3b23e4(0x275))this[_0x3b23e4(0x372)]();else{const _0x4bad98=String(RegExp['$1'])['split'](',')[_0x3b23e4(0x2d1)](_0x435fd4=>Number(_0x435fd4));return _0x4bad98[_0x3b23e4(0x36f)](TimeManager['getHour']());}}if(_0xb0757b[_0x3b23e4(0x264)](/WEEKDAY(?:|S)[ ](.*)/i)){if(_0x3b23e4(0x195)===_0x3b23e4(0x298))return _0x26e0e0[_0x3b23e4(0x1bc)][_0x3b23e4(0x400)][_0x3b23e4(0x29f)['format'](_0x334ddd)];else{const _0xb401c4=String(RegExp['$1'])[_0x3b23e4(0x338)](',')[_0x3b23e4(0x2d1)](_0x1d3922=>Number(_0x1d3922));return _0xb401c4[_0x3b23e4(0x36f)](TimeManager[_0x3b23e4(0x35f)]());}}if(_0xb0757b['match'](/DATE(?:|S)[ ](.*)/i)){const _0x1b0816=String(RegExp['$1'])[_0x3b23e4(0x338)](',')[_0x3b23e4(0x2d1)](_0x3d017e=>Number(_0x3d017e));return _0x1b0816[_0x3b23e4(0x36f)](TimeManager['getDate']());}if(_0xb0757b[_0x3b23e4(0x264)](/MONTH(?:|S)[ ](.*)/i)){const _0x12b846=String(RegExp['$1'])['split'](',')['map'](_0x4a023b=>Number(_0x4a023b));return _0x12b846['includes'](TimeManager['getMonth']());}return![];};