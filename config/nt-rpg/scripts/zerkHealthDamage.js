var EffectBase = Java.type("cz.neumimto.rpg.api.effects.EffectBase"); //creates an effect (also called buff)
var MyEffect = Java.extend(EffectBase, {}); //defines the "buff" applied to the player character

registerSkillHandler('ntminepg:zerkHealthDamage',{
  onCast: function(character, context) {
    var effect = new MyEffect("zerkRage", character); //creates an effect on the character called zerkRage
    var totalDuration = param("duration", context); //creates "duration" and "duration_levelbonus" configuration options in the skilltree file
    effect.setDuration(totalDuration);

    return SkillResult.OK;
  }
)}
