registerEventListener({
  type: Java.type('com.onaple.brawlator.events.BrawlatorEntityDiedEvent'),
  consumer: new java.util.function.Consumer( function(event) {
    var Sponge = Java.type("org.spongepowered.api.Sponge");
    var playerName = event.getPlayer().getName();
    var brawlatorMob = event.getEntity();
    var xp = brawlatorMob.get(BrawlatorKeys.EXPERIENCE);
      Sponge.getCommandManager().process(Sponge.getServer().getConsole(), "nadmin exp " + playerName + " " + xp +" PVE");
  })
});
