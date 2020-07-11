registerSkillHandler('mage:volcano',{
  onCastTarget: function(character, context, target) {
    var player = character.getPlayer();
    var playerName = character.getPlayer().getName();
    //Config for items to craft with Itemizer
    var item1 = sigilFire;
    var item1qty = 3;
    var item2 = sigilEarth;
    var item2qty = 2;
    //Class and XP config
    var ntclass = "Elementalist";
    var xp = 7.5;

    //Assume that player inventory is empty
    if(Itemizer.hasItemizerItem(player, item1, item1qty) && Itemizer.hasItemizerItem(player, item2, item2qty)) {
      Sponge.getCommandManager().process(console, "nadmin exp " + playerName + " " + xp + " " + ntclass);
      Itemizer.removeItem(player, item1, item1qty);
      Itemizer.removeItem(player, item2, item2qty);
            var totalDamage = param("damage", context);
            var totalRange = param("radius", context);
            var location = get_location(target)
              if(damage(character, target, totalDamage, context)) {
                //Need to figure out how to damage things...
              }
      return SkillResult.OK; //Returns Skill has functioned successfully
    }else{
      character.sendMessage("You do not have the required items");
      return SkillResult.CANCELED; //Returns Skill failure
    }
  }
})
