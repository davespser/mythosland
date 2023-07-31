// mythos.js
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io


export function init(Constants) {
    Constants.AvatarNames = ["newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"].map((n) => ({
        type: "3d",
        name: n,
        modelType: "glb",
        avatarType: "wonderland",
        dataLocation: `./assets/avatars/${n}.zip`,
        dataRotation: [0, Math.PI, 0],
        dataScale: [0.3, 0.3, 0.3],
        behaviorModules: ["HillsideWalker"]
    }));

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "terrain.js", "ambientSound.js", "fireball.js",
        "blowing.js", "crowd.js", "horse.js", "menus.js", "urlLink.js", "replaceWorld.js", "walker.js", "bloompass.js"
    ];


    // rotates an object around a center point.
    function rotateTo(center, length, angle){
        let pos = [];
        pos.push(length*Math.sin(angle));
        pos.push(0);
        pos.push(length*Math.cos(angle));
        pos[0]+=center[0];
        pos[1]=center[1];
        pos[2]+=center[2];
        return pos;
    }

    Constants.DefaultCards = [
        {
            card: {
                name: "ambient sound",
                // translation: [0, 0, -2],
                // layers: ["pointer"],
                type: "object",
                behaviorModules: ["AmbientSound"],
                dataType: "aac",
                dataLocation: "./assets/sounds/WindAmbience.aac",
                // textureLocation: "./assets/images/mythos.png",
                loop: true,
                volume: 0.2,
                maxVolume: 0.3
            },
            id: "ambientSound"
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataType: "jpg",
                dataLocation: "./assets/sky/aboveClouds.jpg",
                attribution: "Above the Clouds texture from HDRMaps.com",
                clearColor: 0xffffff,
                loadSynchronously: true,
                
            }
        },

        {
            card: {
                name: "fireball",
               // layers: ["light"],
                type: "object",
                behaviorModules: ["Fireball"],
                layers:["pointer"],
                translation:  [-184.41652542294295, 5.129704386889346, -127.28520992667683],
    scale: [0.01242981421844663, 0.01242981421844663, 0.01242981421844663],
                attribution: "https://www.clicktorelease.com/blog/vertex-displacement-noise-3d-webgl-glsl-three-js/",
            },
        },
        {
            card: {
                name: "fireball2",
               // layers: ["light"],
                type: "object",
                behaviorModules: ["Fireball"],
                layers:["pointer"],
      translation: [-60.55246669431384, 2.528748425386507, -69.9670590207954],
    scale: [0.01242981421844663, 0.01242981421844663, 0.01242981421844663],
                attribution: "https://www.clicktorelease.com/blog/vertex-displacement-noise-3d-webgl-glsl-three-js/",
            },
        },
        {
            card: {
                name: "horse",
                layers: ["pointer"],
                type: "3d",
                behaviorModules: ["Horse"],
                modelType: "glb",
                dataLocation: "./assets/3D/horse_stone_light.glb",
                dataScale: [0.1, 0.1, 0.1],
                translation: [
                    0,
                    0,
                    0
                ],
                attribution: "Mirada for Ro.me",
            },
        },

        /*{
            card: {
                name: "Croquet Card",
                //behaviorModules: ["ReplaceWorld"],
                //targetURL: "https://github.com/davespser/mythosland/tree/main/?worlds=default2",
                translation: [0, 1.5, -7.963],
                //    translation: [4.440892098500626e-16, 2.5357677795120512, -7.9631457611584615],
                //rotation: [0, Math.PI / 2, 0],
                layers: ["pointer"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/CroquetLogo_RGB.jpg",
                cardURL: "https://croquet.io",
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.5,
                depth: 0.05,
                shadow: true,
            }
        },*/

        {
            card: {
                name: "Gallery Card",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldTargetURL: "https://croquet.github.io/gallery",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                translation: rotateTo([0, 1.5, 4], -11.963, 2*Math.PI/7),
                rotation: [0, 2*Math.PI/7, 0],
                layers: ["pointer"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/Croquet Gallery.png",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: {
                name: "Physics Card",
                translation: rotateTo([0, 1.5, 4], -11.963, 3*Math.PI/7),
                rotation: [0, 3*Math.PI/7, 0],
                behaviorModules: ["ReplaceWorld"],
                replaceWorldTargetURL: "https://croquet.github.io/physics/",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                layers: ["pointer"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/Fountain.png",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: {
                name: "About Mythos",
                translation: rotateTo([0, 1, 4], -11.963, 5*Math.PI/7), //[-5, 2.1, -7.963],
                rotation: [0, 4*Math.PI/7, 0],
                scale: [4, 4, 4],
                layers: ["pointer"],
                behaviorModules: ["PDFView"],
                color: 8947848,
                depth: 0.05,
                frameColor: 16777215,
                fullBright: true,
                modelType: "pdf",
                pdfLocation: "./assets/PDF/Mythos Readme.pdf",
                shadow: true,
                singleSided: true,
                type: "2d",
            }
        },
	      {
            card: {
                name: "alumbrado",
     translation: [150.0948712119547, -16.086605813965868, 82.1730938466165],
            scale: [0.8235336534424736, 0.8235336534424736, 0.8235336534424736],
            rotation: [0, 0, 0, -0.9994499665092285],
            layers: ["walk", "pointer"],
		
            name: "/alumbrado.glb",
            dataLocation: "./assets/3D/alumbrado.glb",
            dataScale: [1.2, 1, 1.2],
            fileName: "/alumbrado.glb",
		 placeholderOffset: [0, 0, 0],
    placeholderSize: [1000, 0.1, 1000],
		 placeholder: true,
	toneMappingExposure: 2,
	fullBright: true,
            modelType: "glb",
            noFog: false,
            shadow: true,
            singleSided: false,
            type: "3d",
	    	
            }
        },
        {
            card: {
                name:"Terrain",
                behaviorModules: ["Terrain", "Menus","synchronousLoad"],
                layers: ["terrain"],
                type: "object",
		noFog: true,
		
                translation:[0, 0, 0],
                shadow: true,
                attribution: "Terra   Mike Linkovich (spacejack) on Github",
            }
        },
        {
            card: {
                name:"Crowd",
                behaviorModules: ["Crowd"],
                layers: ["pointer"],
                type: "object",
                translation:[0, 0, 0],
                shadow: true,
            }
        },
        {
            card:{
          translation: [-4.933237958055071, -2.0866058139658676, -42.412232723806156],
    scale: [0.8235336534424736, 0.8235336534424736, 0.8235336534424736],
    rotation: [0, 0.9428291226258131, 0, 0.3332765301197186],
    layers: ["walk", "pointer"],
    name: "/treepack4_small.glb",
    dataLocation: "36bHrAibIhhNDw5QTWfleb-P1ufV9Gp4EKM28m0ss4iUXkJCRkUMGRlQX1pTRRhDRRhVRFlHQ1NCGF9ZGUMZYHp-UmwPBQdUcFVsckMHd19iAUJ4X3RCDlx8BBlfWRhVRFlHQ1NCGFJPWFdAU0RFUxlQZlFiYnJBQEIEAldxD1VnRUcHbHppUgN6blJjUXpvT3xVZ0J7bm5_ckZ_GVJXQlcZY29dBAJQYQFHfVdnWXxRUw4CbmZbZntpY0R9WHlPV1xaeX9RaUQBBhtUUQ",
    dataScale: [1.5, 1.5, 1.5],
    fileName: "/treepack4_small.glb",
    flatten: true,
    modelType: "glb",
    noFog: true,
    shadow: true,
    singleSided: true,
    type: "3d",
            }
        },
        {
        card:{
            translation: [150.0948712119547, -16.086605813965868, 82.1730938466165],
            scale: [0.8235336534424736, 0.8235336534424736, 0.8235336534424736],
            rotation: [0, 0, 0, -0.9994499665092285],
            layers: ["walk", "pointer"],
            name: "/almacen.glb",
            animationClipIndex: 0,
            animationStartTime: 9324,
            dataLocation: "./assets/3D/almacen.glb",
            dataScale: [1.2, 1, 1.2],
            fileName: "/almacen.glb",
            flatten: true,
            modelType: "glb",
            noFog: true,
            shadow: true,
            singleSided: true,
            type: "3d",
              }
          },
        {
            card: {
                    translation: [-450.1700673890571, -10.82285761041265, 125.27029600207842],
    rotation: [0, -0.9996797617296773, 0, 0.02530561179058155],
    layers: ["walk", "pointer"],
    name: "/galleon_model.glb",
    animationClipIndex: 0,
    animationStartTime: 2907,
    attribution: "Havolik, modified by Kai Oldman",
    dataLocation: "./assets/3D/galleon_model.glb",
    dataScale: [1, 1, 1],
    fileName: "/galleon_model.glb",
    flatten: true,
    modelType: "glb",
    noFog: false,
    placeholder: true,
    placeholderColor: 8421504,
    placeholderOffset: [0, 0, 0],
    placeholderSize: [1000, 0.1, 1000],
    shadow: true,
    singleSided: false,
    type: "3d",

            },
        },
 	{
            card: {
                 translation: [152.8688916176863, -19, 86.75497384472558],
    layers: ["walk", "pointer","terrain"],
    name: "/cartagena.glb",
    dataLocation: "./assets/3D/cartagenapuerto.glb",
    dataScale: [1, 1, 1],
    fileName: "/cartagena.glb",
    flatten: true,
    modelType: "glb",
    noFog: false,
	toneMappingExposure: 0,
    placeholder: true,
    placeholderColor: 8421504,
    placeholderOffset: [0, 0, 0],
    placeholderSize: [1000, 0.1, 1000],
    shadow: true,
    singleSided: false,
    type: "3d",
            },
        },
            ];
}
