import * as universal from '../entries/pages/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/9.C80POyhr.js","_app/immutable/chunks/CvMqxeUd.js","_app/immutable/chunks/DtO-chcV.js","_app/immutable/chunks/DwvPRf6u.js","_app/immutable/chunks/Cw6m8VM2.js","_app/immutable/chunks/DIh3MrjY.js","_app/immutable/chunks/XohKt3TT.js","_app/immutable/chunks/DMYLSJ60.js","_app/immutable/chunks/BFhsePhQ.js","_app/immutable/chunks/BDRHpEDu.js","_app/immutable/chunks/iI_LtpKd.js","_app/immutable/chunks/BCPF9bul.js"];
export const stylesheets = ["_app/immutable/assets/Icon.8BNUikdf.css"];
export const fonts = [];
