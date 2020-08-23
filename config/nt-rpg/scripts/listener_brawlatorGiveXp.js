//Listener event to be used with Brawlator
//Listens for a Mob to die and gives XP to the player.
registerEventListener({
  type: Java.type('com.onaple.brawlator.events.BrawlatorEntityDiedEvent'),
  consumer: new java.util.function.Consumer( function(event) {
    var Sponge = Java.type('org.spongepowered.api.Sponge'); //loads Sponge
    var BrawlatorKeys = Java.type('com.onaple.brawlator.BrawlatorKeys'); //loads BrawlatorKeys from Brawlator plugin
    var ThirdPartyKey = Java.type('com.onaple.brawlator.plugins.ExperienceThirdParty');
    var playerName = event.getPlayer().getName(); //gets Player Name of player that killed the mob
    var brawlatorMob = event.getEntity(); //gets Brawlator Mob killed
    var xp = brawlatorMob.get(ThirdPartyKey.EXPERIENCE); //gets experience key from config of killed Mob; optional
      //Checks if XP value is present on Mob, if yes run command.
      if (xp.ispresent()){
        Sponge.getCommandManager().process(Sponge.getServer().getConsole(), "nadmin exp " + playerName + " " + xp.get() +" PVE"); //Gives player XP to all classes with PVE source.
      }
  })
});
