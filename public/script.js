// Plugin Manager script for ValeMC

class PluginManager {
    constructor() {
        this.plugins = {};
    }

    // Load a new plugin
    loadPlugin(name, plugin) {
        if (this.plugins[name]) {
            console.error(`Plugin ${name} is already loaded.`);
            return;
        }
        this.plugins[name] = plugin;
        console.log(`Plugin ${name} loaded successfully.`);
    }

    // Unload a plugin
    unloadPlugin(name) {
        if (!this.plugins[name]) {
            console.error(`Plugin ${name} is not loaded.`);
            return;
        }
        delete this.plugins[name];
        console.log(`Plugin ${name} unloaded successfully.`);
    }

    // Execute a plugin method
    executePlugin(name, method, ...args) {
        const plugin = this.plugins[name];
        if (!plugin || typeof plugin[method] !== 'function') {
            console.error(`Plugin ${name} does not have method ${method}.`);
            return;
        }
        return plugin[method](...args);
    }
}

// Example usage:
const manager = new PluginManager();

// Sample plugin
const samplePlugin = {
    run: function(message) {
        console.log(`Plugin says: ${message}`);
    }
};

manager.loadPlugin('Sample', samplePlugin);
manager.executePlugin('Sample', 'run', 'Hello, world!');