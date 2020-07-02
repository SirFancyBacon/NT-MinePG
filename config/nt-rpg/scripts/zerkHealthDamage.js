registerSkillHandler('ntminepg:zerkHealthDamage',{
  onCast: function(character, context) {
    var totalDuration = param("duration", context); //creates "duration" and "duration_levelbonus" configuration options in the skilltree file
    var totalMaxMulti = param("maxboot", context);
    var EffectBase = Java.type("cz.neumimto.rpg.api.effects.EffectBase") //creates an effect (also called buff)
    var zerkRage = Java.extend(EffectBase, {}); //defines the "buff" applied to the player character

    return SkillResult.OK;
  }
)}
