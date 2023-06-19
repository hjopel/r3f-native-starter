# [v8] R3F React Native Starter

A basic starter for R3F v8's react-native support. See [official R3F react-native instructions](https://docs.pmnd.rs/react-three-fiber/getting-started/installation#react-native).

## Install & run

Make sure you have nodejs and yarn installed. Install dependencies with:

```bash
yarn
```

Once it's done start up devtools with:

```bash
yarn start
```


## Explanation
I used the original Doggo07.glb and converted it to a gltf, removed all the unnecessary infos there (considering that we'll load the textures later) and replaced the materials with two default materials. In Blender, I exported the two textures from the original model (head.png & body.jpg) which are then imported in the Doggo07-processed.js
