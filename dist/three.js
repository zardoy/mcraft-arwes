var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// inject-dependencies:window.THREE
var require_window = __commonJS({
  "inject-dependencies:window.THREE"(exports, module) {
    module.exports = window.THREE;
  }
});

// src/sciFiWorldReveal.ts
var THREE = __toESM(require_window());
var SCI_FI_CYAN = new THREE.Color(13 / 255, 234 / 255, 238 / 255);
var CHUNKS_THRESHOLD = 9;
var REVEAL_DURATION = 3500;
var WIREFRAME_FADE_DELAY = 1200;
var SciFiWorldReveal = class {
  constructor(worldRenderer) {
    __publicField(this, "pendingGeometries", /* @__PURE__ */ new Map());
    __publicField(this, "revealingSections", /* @__PURE__ */ new Map());
    __publicField(this, "finishedChunkCount", 0);
    __publicField(this, "revealTriggered", false);
    __publicField(this, "revealStartTime", 0);
    __publicField(this, "worldRenderer");
    // Wireframe materials
    __publicField(this, "wireframeMaterial");
    __publicField(this, "wireframeGlowMaterial");
    // For pulsing animation
    __publicField(this, "pulseTime", 0);
    // Track which chunks have been revealed
    __publicField(this, "revealedChunks", /* @__PURE__ */ new Set());
    // Store original methods for patching
    __publicField(this, "originalFinishChunk", null);
    __publicField(this, "originalDestroy", null);
    __publicField(this, "originalSceneAdd", null);
    __publicField(this, "originalHandleWorkerMessage", null);
    this.worldRenderer = worldRenderer;
    this.wireframeMaterial = new THREE.LineBasicMaterial({
      color: SCI_FI_CYAN,
      transparent: true,
      opacity: 1,
      linewidth: 2
    });
    this.wireframeGlowMaterial = new THREE.LineBasicMaterial({
      color: SCI_FI_CYAN,
      transparent: true,
      opacity: 0.4,
      linewidth: 1
    });
    this.patchWorldRenderer();
    globalThis.sciFiReveal = this;
  }
  /**
   * Patch world renderer methods to integrate the reveal effect
   */
  patchWorldRenderer() {
    const wr = this.worldRenderer;
    wr.onRender.push(() => {
      this.update(16);
    });
    wr.onWorldSwitched.push(() => {
      this.reset();
    });
    this.originalFinishChunk = wr.finishChunk.bind(wr);
    wr.finishChunk = (chunkKey) => {
      this.originalFinishChunk(chunkKey);
      this.onChunkFinished(chunkKey);
    };
    this.originalDestroy = wr.destroy.bind(wr);
    wr.destroy = () => {
      this.dispose();
      this.originalDestroy();
    };
    this.originalHandleWorkerMessage = wr.handleWorkerMessage.bind(wr);
    wr.handleWorkerMessage = (data) => {
      if (data.type === "geometry") {
        const useRevealEffect = this.shouldUseRevealEffect(data.key);
        if (useRevealEffect) {
          this.registerSection(data.key, data.geometry);
        }
      }
      this.originalHandleWorkerMessage(data);
    };
    this.originalSceneAdd = wr.scene.add.bind(wr.scene);
    wr.scene.add = (...objects) => {
      const result = this.originalSceneAdd(...objects);
      for (const obj of objects) {
        this.checkAndPatchMesh(obj);
      }
      return result;
    };
  }
  /**
   * Check if an object or its children is a mesh that needs reveal effect visibility patch
   */
  checkAndPatchMesh(obj) {
    if (obj instanceof THREE.Mesh && obj.name === "mesh") {
      const sectionKey = this.findSectionKeyForMesh(obj);
      if (sectionKey && this.shouldUseRevealEffect(sectionKey)) {
        obj.visible = false;
        obj.hiddenByReveal = true;
      }
    }
    for (const child of obj.children) {
      this.checkAndPatchMesh(child);
    }
  }
  /**
   * Find the section key for a mesh by traversing up to find the parent group
   * and checking for sectionKey property
   */
  findSectionKeyForMesh(mesh) {
    let current = mesh;
    while (current) {
      const { sectionKey } = current;
      if (sectionKey && this.worldRenderer.sectionObjects[sectionKey] === current) {
        return sectionKey;
      }
      current = current.parent;
    }
    const pos = mesh.position;
    const sectionX = Math.floor(pos.x / 16) * 16;
    const sectionY = Math.floor(pos.y / 16) * 16;
    const sectionZ = Math.floor(pos.z / 16) * 16;
    const derivedKey = `${sectionX},${sectionY},${sectionZ}`;
    if (this.worldRenderer.sectionObjects[derivedKey]) {
      return derivedKey;
    }
    return null;
  }
  /**
   * Get the scene from world renderer
   */
  get scene() {
    return this.worldRenderer.scene;
  }
  /**
   * Get camera position from world renderer
   */
  getCameraPosition() {
    return this.worldRenderer.getCameraPosition();
  }
  /**
   * Get original mesh for a section key
   */
  getOriginalMesh(key) {
    const sectionObject = this.worldRenderer.sectionObjects[key];
    if (!sectionObject) return null;
    return sectionObject.children.find((child) => child.name === "mesh");
  }
  /**
   * Call this when a chunk finishes loading
   */
  onChunkFinished(_chunkKey) {
    this.finishedChunkCount++;
    if (!this.revealTriggered && this.finishedChunkCount >= CHUNKS_THRESHOLD) {
      this.triggerReveal();
    }
  }
  /**
   * Register a new section geometry for the reveal effect
   */
  registerSection(key, geometry) {
    if (this.revealedChunks.has(key) || this.revealingSections.has(key)) return;
    if (this.revealTriggered) {
      this.startSectionReveal(key, geometry);
    } else {
      this.pendingGeometries.set(key, geometry);
    }
  }
  /**
   * Check if a section should use the reveal effect
   */
  shouldUseRevealEffect(key) {
    return !this.revealedChunks.has(key) && (!this.revealTriggered || this.pendingGeometries.has(key) || this.revealingSections.has(key));
  }
  /**
   * Trigger the reveal sequence
   */
  triggerReveal() {
    this.revealTriggered = true;
    this.revealStartTime = performance.now();
    const cameraPos = this.getCameraPosition();
    const toProcess = [...this.pendingGeometries.entries()];
    this.pendingGeometries.clear();
    const sorted = toProcess.map(([key, geometry]) => {
      const distance = Math.hypot(
        geometry.sx - cameraPos.x,
        geometry.sy - cameraPos.y,
        geometry.sz - cameraPos.z
      );
      return { key, geometry, distance };
    }).sort((a, b) => a.distance - b.distance);
    const maxDistance = sorted.at(-1)?.distance || 1;
    for (const { key, geometry, distance } of sorted) {
      const delay = distance / maxDistance * 1500;
      setTimeout(() => {
        if (!this.revealedChunks.has(key) && !this.revealingSections.has(key)) {
          this.startSectionReveal(key, geometry);
        }
      }, delay);
    }
  }
  /**
   * Start the reveal effect for a single section
   */
  startSectionReveal(key, geometry) {
    if (!geometry.positions?.length) return;
    if (this.revealingSections.has(key) || this.revealedChunks.has(key)) return;
    const wireframeGeom = this.createWireframeGeometry(geometry);
    const wireframe = new THREE.LineSegments(wireframeGeom, this.wireframeMaterial.clone());
    wireframe.position.set(geometry.sx, geometry.sy, geometry.sz);
    wireframe.name = "scifi-wireframe";
    wireframe.renderOrder = 1e3;
    const glowWireframe = new THREE.LineSegments(wireframeGeom.clone(), this.wireframeGlowMaterial.clone());
    glowWireframe.position.copy(wireframe.position);
    glowWireframe.scale.set(1.02, 1.02, 1.02);
    glowWireframe.name = "scifi-glow";
    glowWireframe.renderOrder = 999;
    const group = new THREE.Group();
    group.add(wireframe);
    group.add(glowWireframe);
    group.name = "scifi-reveal-group";
    group.sectionKey = key;
    this.scene.add(group);
    const section = {
      key,
      wireframeGroup: group,
      revealStartTime: performance.now(),
      phase: "wireframe",
      originalMeshRef: null
    };
    this.revealingSections.set(key, section);
  }
  /**
   * Create wireframe geometry from mesh geometry
   */
  createWireframeGeometry(geometry) {
    const positions = geometry.positions;
    const indices = geometry.indices;
    const linePositions = [];
    const edgeSet = /* @__PURE__ */ new Set();
    for (let i = 0; i < indices.length; i += 3) {
      const i0 = indices[i];
      const i1 = indices[i + 1];
      const i2 = indices[i + 2];
      this.addEdge(positions, i0, i1, linePositions, edgeSet);
      this.addEdge(positions, i1, i2, linePositions, edgeSet);
      this.addEdge(positions, i2, i0, linePositions, edgeSet);
    }
    const wireframeGeom = new THREE.BufferGeometry();
    wireframeGeom.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    return wireframeGeom;
  }
  /**
   * Add edge to line positions if not duplicate
   */
  addEdge(positions, i0, i1, linePositions, edgeSet) {
    const minI = Math.min(i0, i1);
    const maxI = Math.max(i0, i1);
    const key = `${minI}-${maxI}`;
    if (edgeSet.has(key)) return;
    edgeSet.add(key);
    linePositions.push(
      positions[i0 * 3],
      positions[i0 * 3 + 1],
      positions[i0 * 3 + 2],
      positions[i1 * 3],
      positions[i1 * 3 + 1],
      positions[i1 * 3 + 2]
    );
  }
  /**
   * Update the reveal animation - call this every frame
   */
  update(deltaTime) {
    if (this.revealingSections.size === 0) return;
    this.pulseTime += deltaTime * 1e-3;
    const currentTime = performance.now();
    const basePulse = 0.6 + 0.4 * Math.sin(this.pulseTime * 4);
    const toComplete = [];
    for (const [key, section] of this.revealingSections) {
      const elapsed = currentTime - section.revealStartTime;
      if (section.phase === "wireframe") {
        const wireframe = section.wireframeGroup.children[0];
        const glow = section.wireframeGroup.children[1];
        if (wireframe?.material) {
          const mat = wireframe.material;
          mat.opacity = basePulse;
          const colorIntensity = 0.85 + 0.15 * Math.sin(this.pulseTime * 6 + elapsed * 2e-3);
          mat.color.setRGB(
            13 / 255 * colorIntensity,
            234 / 255 * colorIntensity,
            238 / 255 * colorIntensity
          );
        }
        if (glow?.material) {
          const glowMat = glow.material;
          glowMat.opacity = basePulse * 0.4;
        }
        if (elapsed > WIREFRAME_FADE_DELAY) {
          section.phase = "transitioning";
          section.originalMeshRef = this.getOriginalMesh(key);
          if (section.originalMeshRef) {
            section.originalMeshRef.visible = true;
            const originalMat = section.originalMeshRef.material;
            const fadeMat = originalMat.clone();
            fadeMat.transparent = true;
            fadeMat.opacity = 0;
            fadeMat.needsUpdate = true;
            section.originalMeshRef.originalMaterial = originalMat;
            section.originalMeshRef.material = fadeMat;
          }
        }
      } else if (section.phase === "transitioning") {
        const transitionElapsed = elapsed - WIREFRAME_FADE_DELAY;
        const progress = Math.min(1, transitionElapsed / REVEAL_DURATION);
        const eased = 1 - (1 - progress) ** 3;
        const wireframe = section.wireframeGroup.children[0];
        const glow = section.wireframeGroup.children[1];
        if (wireframe?.material) {
          const mat = wireframe.material;
          mat.opacity = (1 - eased) * basePulse;
        }
        if (glow?.material) {
          const glowMat = glow.material;
          glowMat.opacity = (1 - eased) * basePulse * 0.4;
        }
        if (section.originalMeshRef?.material) {
          const fadeMat = section.originalMeshRef.material;
          fadeMat.opacity = eased;
        }
        if (progress >= 1) {
          section.phase = "complete";
          toComplete.push(section);
        }
      }
    }
    for (const section of toComplete) {
      this.completeReveal(section);
    }
  }
  /**
   * Complete the reveal and clean up
   */
  completeReveal(section) {
    this.revealingSections.delete(section.key);
    this.revealedChunks.add(section.key);
    if (section.originalMeshRef) {
      const originalMat = section.originalMeshRef.originalMaterial;
      if (originalMat) {
        const currentMat = section.originalMeshRef.material;
        section.originalMeshRef.material = originalMat;
        currentMat.dispose();
        delete section.originalMeshRef.originalMaterial;
      }
      section.originalMeshRef.visible = true;
      delete section.originalMeshRef.hiddenByReveal;
    }
    this.disposeWireframeGroup(section.wireframeGroup);
  }
  /**
   * Dispose a wireframe group and remove from scene
   */
  disposeWireframeGroup(group) {
    this.scene.remove(group);
    const toDispose = [];
    group.traverse((child) => {
      toDispose.push(child);
    });
    for (const child of toDispose) {
      const lineSegments = child;
      if (lineSegments.geometry) {
        lineSegments.geometry.dispose();
      }
      if (lineSegments.material) {
        const mat = lineSegments.material;
        if (Array.isArray(mat)) {
          for (const m of mat) m.dispose();
        } else if (mat && typeof mat.dispose === "function") {
          mat.dispose();
        }
      }
    }
    group.clear();
  }
  /**
   * Reset the reveal system
   */
  reset() {
    for (const section of this.revealingSections.values()) {
      this.disposeWireframeGroup(section.wireframeGroup);
    }
    this.pendingGeometries.clear();
    this.revealingSections.clear();
    this.revealedChunks.clear();
    this.finishedChunkCount = 0;
    this.revealTriggered = false;
    this.revealStartTime = 0;
    this.pulseTime = 0;
  }
  /**
   * Dispose of all resources
   */
  dispose() {
    this.reset();
    this.wireframeMaterial.dispose();
    this.wireframeGlowMaterial.dispose();
  }
  /**
   * Force complete all reveals (skip animation)
   */
  forceCompleteAll() {
    const sections = [...this.revealingSections.values()];
    for (const section of sections) {
      if (!section.originalMeshRef) {
        section.originalMeshRef = this.getOriginalMesh(section.key);
      }
      if (section.originalMeshRef) {
        const originalMat = section.originalMeshRef.originalMaterial;
        if (originalMat) {
          section.originalMeshRef.material = originalMat;
        }
        section.originalMeshRef.visible = true;
      }
      this.completeReveal(section);
    }
  }
  // ============ DEBUG METHODS ============
  /**
   * Debug: Get all wireframe groups still in scene
   */
  debugGetWireframeGroups() {
    const groups = [];
    this.scene.traverse((child) => {
      if (child.name === "scifi-reveal-group") {
        groups.push(child);
      }
    });
    return groups;
  }
  /**
   * Debug: Force remove all wireframe groups from scene
   */
  debugForceCleanup() {
    const groups = this.debugGetWireframeGroups();
    console.log(`[SciFiReveal] Found ${groups.length} wireframe groups in scene`);
    for (const group of groups) {
      console.log(`[SciFiReveal] Removing group:`, group);
      this.disposeWireframeGroup(group);
    }
    for (const section of this.revealingSections.values()) {
      this.disposeWireframeGroup(section.wireframeGroup);
    }
    this.revealingSections.clear();
    console.log(`[SciFiReveal] Cleanup complete. Remaining groups: ${this.debugGetWireframeGroups().length}`);
  }
  /**
   * Debug: Get status of the reveal system
   */
  debugStatus() {
    const wireframeGroups = this.debugGetWireframeGroups();
    const trackedKeys = new Set(this.revealingSections.keys());
    const orphanedGroups = wireframeGroups.filter((g) => !trackedKeys.has(g.sectionKey));
    return {
      revealTriggered: this.revealTriggered,
      finishedChunkCount: this.finishedChunkCount,
      pendingGeometries: this.pendingGeometries.size,
      revealingSections: this.revealingSections.size,
      revealedChunks: this.revealedChunks.size,
      wireframeGroupsInScene: wireframeGroups.length,
      orphanedWireframeGroups: orphanedGroups.length,
      orphanedKeys: orphanedGroups.map((g) => g.sectionKey),
      sections: [...this.revealingSections.entries()].map(([key, s]) => ({
        key,
        phase: s.phase,
        hasOriginalMesh: !!s.originalMeshRef,
        wireframeInScene: s.wireframeGroup.parent !== null
      }))
    };
  }
  /**
   * Debug: Log current status to console
   */
  debugLog() {
    console.log("[SciFiReveal] Status:", this.debugStatus());
  }
};

// src/three.ts
var panoramaReady = (panorama) => {
  const [panoramaBox, ...rest] = panorama.panoramaGroup.children;
  for (let m of rest) m.visible = false;
};
var worldReady = (world) => {
  new SciFiWorldReveal(world);
};
export {
  panoramaReady,
  worldReady
};
