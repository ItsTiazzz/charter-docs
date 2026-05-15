# The Arm <Badge type="warning" text="Preview Content" />

The Arm has two ways to be used, technically. There are a few marginal differences, so please watch out!

## About the Arm item obtainable in Creative {#arm-creative}

**Obtaining:**  
You can get an "arm" item in the Creative Menu.

**Usage:**  
When right-clicking it, you will lose your offhand.

::: danger
This action is irrevocable, and you will lose your offhand **permanently**.
The only way to get it back, is by modifying your player data, or simply
recreating the world. Read more about that [here](#retrieve-arm).

_As such we highly suggest not doing this in an important world!_
:::

## About the Arm item obtainable in Survival {#arm-survival}

**Obtaining:**  
You'll need two people for this. Let's say friend A wants friend's B arm:

1. Ensure friend B is in [debt](../mechanics/debt) to friend A;
2. Get a [contract](./contract) signed by friend B;
3. Have friend A hold said contract in their **main hand**, and any sword in their **offhand**;
4. Friend A must then hit friend B.

If successful, friend A now has friend B's arm, complete with textures!

**Usage:**  
The arm has no practical, direct use for friend A. However, friend B loses their ability
to use their offhand. As such, it can be a way for friend A to punish friend B
for not paying back their debt. 

## Ok, cool, boring. Uhm, how the f&^k do I get it back? {#retrieve-arm}

As mentioned before, it is quite hard to get back the arm once you lose it.
There is again a difference in how you retrieve it, depending on how you lost it.

### If you lost it by the [Creative Method](#arm-creative) {#retreive-creative}
1. **Log out** of the world (and close it);
2. Go to your **player data file**, which is located in: `<instance>/saves/<world>/playerdata/<your-UUID>.dat`;
   - You can find your UUID [here](https://mcuuid.net);
3. Open the file with an **NBT editor**, such as [VSCode](https://code.visualstudio.com/download)
with the [NBT Extension](https://marketplace.visualstudio.com/items?itemName=okirshen.data),
[NBTExplorer (Suggested)](https://nbtexplorer.org/), etc.;
4. Find the following value snippet:
```json5{7}
cardinal_components: {
  "charter:arm": {
    synth: {
      id: "minecraft:air"
      Count: 1B
    }
    handicap: 1B
  }
}
```
5. Change `handicap: 1B` to `handicap: 0B`;
   - This works because Minecraft interprets "`1B`" as "`true`", and "`0B`" as "`false`". Setting
   `handicap` to `0B` essentially tells the game that you "having the handicap" is false!
6. **Save** the data file;
7. **Log** back **into** the world.

::: warning
If on a server (unlikely due to a guaranteed crash on Quilt servers), make sure
to back up your data and fully close the server before changing data files.

If you don't, you might cause data corruption, which will need even more drastic measures to fix.
:::

### If you lost it by the [Survival Method](#arm-survival) {#retrieve-survival}
1. Get the physical item **back**;
2. Hold it in your **main hand**;
3. **Right-click** it.

::: tip
The [first method](#retrieve-creative) can also be used here, however, this is easier, safer and 
the "correct" way to do it.
:::