import * as universal from '../entries/pages/posts/_page.js';

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/+page.js";
export const imports = ["_app/immutable/nodes/18.D0J4B2Fv.js","_app/immutable/chunks/CvMqxeUd.js","_app/immutable/chunks/DtO-chcV.js","_app/immutable/chunks/D1WLeCyM.js","_app/immutable/chunks/BatwYuTJ.js","_app/immutable/chunks/DwvPRf6u.js","_app/immutable/chunks/DedTd7GD.js","_app/immutable/chunks/CxcT2ZgC.js","_app/immutable/chunks/DIh3MrjY.js","_app/immutable/chunks/iI_LtpKd.js","_app/immutable/chunks/Dp8L_b49.js","_app/immutable/chunks/DMYLSJ60.js","_app/immutable/chunks/BFhsePhQ.js","_app/immutable/chunks/BCxhcPQd.js","_app/immutable/chunks/Bjc2Jhzt.js","_app/immutable/chunks/C_Ixy55k.js","_app/immutable/chunks/AmOIunDL.js","_app/immutable/chunks/9jjyEwQ-.js"];
export const stylesheets = ["_app/immutable/assets/BackTo.D9x6rrBs.css"];
export const fonts = [];
