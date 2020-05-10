registerEventListener({
  type: Java.type('org.spongepowered.api.event.entity.AttackEntityEvent'),
  consumer: new java.util.function.Consumer( function(event) {
    org.spongepowered.api.Sponge.getCommandManager().process(Sponge.getServer().getConsole(), "nadmin exp hellbringer616 10 PVE");
  })
});
