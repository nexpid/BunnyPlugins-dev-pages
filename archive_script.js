import { readdir } from "node:fs/promises"
import { file, write, CryptoHasher } from "bun";
import { join } from "node:path";
import { format } from "node:util";

const messageTemplate = "This plugin is outdated! Zoinks! Install %s from \"%s\" instead";
const hasher = new CryptoHasher("sha256");
const remap = {
    usrpfp: "userpfp"
}

for (const plugin of await readdir("")) {
    const manifest = file(join(plugin, "manifest.json"));
    const source = file(join(plugin, "index.js"));
    if (!(await manifest.exists()) && !(await source.exists())) continue;

    const url = `https://bunny.nexpid.xyz/${remap[plugin] ?? plugin}`;
    const manifested = await manifest.json();
    const message = format(messageTemplate, manifested.name, url);

    const code = `throw ${JSON.stringify(message)}`;;

    await write(join(plugin, "index.js"), code);
    await write(join(plugin, "manifest.json"), JSON.stringify({
        name: manifested.name,
        description: message,
        authors: [{
            name: "dev.bunny.nexpid.xyz"
        }],
        main: "index.js",
        vendetta: { icon: "ic_feedback" },
        hash: hasher.update(code).digest("hex")
    }));
    console.log(`Archived ${plugin}`);
}
