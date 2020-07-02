//Listener event that triggers whenever an entity is damaged
registerEventListener({
    type: "org.spongepowered.api.event.entity.DamageEntityEvent",
    consumer: function (event) {
        //this shit will be tricky because sponge likes to have retarded api
       pseudocode
       var ntrpgEntity = getEntity(event.attacker) //gets attacking character
       //checks of the attacker has a buff
       if (ntrpgEntity.hasEffect("zerkRage")) {
           var curHealth = character.getHealth().getValue; //gets the current health of the player character
           var maxHealth = character.getHealth().getMaxValue; //gets the maximum health of the player character
           var damageBoost = maxHealth / curHealth; //creates damage multiplier
              //caps damage multiplier at 1.2; Will probably want to configure maxmum bonus through skilltree.
              //can skilltree data be loaded into a listener? Or can buff pass along data?
              if (damageBoost > 1.2) {
                var damageBoost = 1.2
              }
              event.setBaseDamage(event.getBaseDamage() * damageBoost);
       }
    },
    order:"BEFORE_POST",
    beforeModifications: false
});
