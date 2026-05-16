# Charters <Badge type="tip" text="Revamp Content" /> <Badge type="info" text="WIP" />

If you've ever used a claims mod, the concept of Charters might be very familiar to you.

A Charter is an area that will be protected from certain damages, and can be used to protect
buildings, farms, etc.

## Breaking and Placing
If a third party breaks a block inside a Charter, the block will slowly regenerate.
Contrary to typical claim mods, this is not instant, and whoever broke the block could still move through
it during the regeneration process. While the block is being regenerated, a golden particle outline
signifies that it is happening. 

Similarly, when a block is placed instead, it will be slowly removed and the same
particle outline will be present.

## Wall
The 32x32 area around the Charter is impenetrable by third-party players due to an invisible wall
encasing it. Other entities, such as mobs or projectiles (even those shot by third parties)
can pass through.

This wall is one-way, meaning that if a third-party player is inside the Charter, they
can leave, but they cannot enter again.

We are currently investigating whether overlapping Charters merge their walls into one big wall or
if they have separate walls inside each other instead.
