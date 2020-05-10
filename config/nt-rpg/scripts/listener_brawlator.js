registerEventListener({
  type: Java.type('org.spongepowered.api.event.item.inventory.DropItemEvent'),
  consumer: new java.util.function.Consumer( function(event) {
    log("Im Javascript event handler");
  })
});
