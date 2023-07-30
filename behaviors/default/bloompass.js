class BloomPassPawn {
    setup() {
        const THREE = Microverse.THREE;
        const { renderer, composer } = this.service("ThreeRenderManager");

        // tweak these values to get a different looking bloom effect
        const params = {
            exposure: 0.4,
            bloomStrength: 3.0,
            bloomThreshold: 0.02,
            bloomRadius: 0.0,
        };

        this.teardown();

        this.bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(256, 256), 1.5, 0.4, 0.85);
        composer.addPass(this.bloomPass);

        renderer.toneMappingExposure = params.exposure;
        this.bloomPass.threshold = params.bloomThreshold;
        this.bloomPass.strength = params.bloomStrength;
        this.bloomPass.radius = params.bloomRadius;
    }

    teardown() {
        if (this.bloomPass) {
            this.service("ThreeRenderManager").composer.removePass(this.bloomPass);
            this.bloomPass = null;
        }
    }

}

export default {
    modules: [
        {
            name: "BloomPass",
            actorBehaviors: [],
            pawnBehaviors: [BloomPassPawn]
        }
    ]
}
