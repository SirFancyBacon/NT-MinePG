registerEventListener({
  type: Java.type('org.spongepowered.api.event.entity.AttackEntityEvent'),
  consumer: new java.util.function.Consumer( function(event) {
    log("Im Javascript event handler");
  })
});
