registerEventListener(Java.type('org.spongepowered.api.event.entity.DamageEntityEvent'), new (Java.extend(Consumer, {
    accept: function (event) {
        log(event.getPlayer().getName());
        var playerName = event.getPlayer().getName();
        Sponge.getCommandManager().process(Sponge.getServer().getConsole(), "nadmin exp " + playerName + " 10 PVE");
    }
})));
