registerEventListener({
  type: Java.type('com.onaple.brawlator.events.BrawlatorEntityDiedEvent'),
  consumer: new java.util.function.Consumer( function(event) {
    var Sponge = Java.type("org.spongepowered.api.Sponge");
    var playerName = event.getPlayer().getName();
    Sponge.getCommandManager().process(Sponge.getServer().getConsole(), "nadmin exp "+playerName+" 10 PVE");
  })
});
