import * as universal from '../entries/pages/animation/_page.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/animation/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/animation/+page.js";
export const imports = ["_app/immutable/nodes/11.C8p3xh5n.js","_app/immutable/chunks/CvMqxeUd.js","_app/immutable/chunks/DtO-chcV.js","_app/immutable/chunks/DwvPRf6u.js","_app/immutable/chunks/D1WLeCyM.js","_app/immutable/chunks/Dp8L_b49.js","_app/immutable/chunks/BCxhcPQd.js","_app/immutable/chunks/CxcT2ZgC.js","_app/immutable/chunks/DIh3MrjY.js","_app/immutable/chunks/Bjc2Jhzt.js","_app/immutable/chunks/C_Ixy55k.js","_app/immutable/chunks/AmOIunDL.js","_app/immutable/chunks/DMYLSJ60.js"];
export const stylesheets = ["_app/immutable/assets/BackTo.D9x6rrBs.css"];
export const fonts = [];
