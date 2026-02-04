# Plugins

Plugin is a an middleware-app, that implements logic for automated fetch, transform and save data from a source.

## Development

If you want to develop a new plugin, please read the following guidelines.

### High-level overview

A plugin is a Node.js application, and we recommend following the same tech stack for all plugins: Node.js, TypeScript, and Axios. This ensures consistency and maintainability across the system. If you wish to implement a plugin using a different tech stack or host your plugin separately, please utilize our API (coming soon) to integrate with the system.

### Structure

Each plugin should have a single default exported function from the root of the folder. This function will be triggered by a cron job running in a separate process. To ensure security and stability, your plugin will undergo a careful review process before being allowed to run with the cron job. In addition to the default export, your plugin must also include a named export called `config`, which provides metadata and configuration details. For more information on the structure and required fields of the `config` object, please refer to the configuration documentation below. Of course, having a README.md file in the root of your plugin folder is also a good practice.

Here is an example of how your plugin folder structure might look:

```
my-plugin/
├── src/
│   ├── something.ts    # any internal code
│   └── utils.ts        # any internal code
|── index.ts            # Main entry point, exports the default function and config object
└── README.md           # Documentation for the plugin
```

### Configuration

| Option         | Description                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| `cron_rule`    | (optional) The cron expression defining when the plugin should run. Example: `0 5 * * *` (runs daily at 5:00 AM). |
| `name`         | The name of the plugin in kebab-case. Example: `my-plugin`.                                                       |
| `author`       | Github nickname                                                                                                   |
| `version`      | The version of the plugin following [semantic versioning](https://semver.org/). Example: `1.0.0`.                 |
| `resource`     | (optional) Name of integrated resource. Example: `example`.                                                       |
| `resource_url` | (optional) The URL of integrated resource. Example: `https://example.com/data`.                                   |

Example of a `config` object:

```ts
export const config = {
  cron_rule: "0 5 * * *",
  name: "my-plugin",
  author: "my-github-nickname",
  version: "1.0.0",
};
```
