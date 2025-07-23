import * as server from '../entries/pages/cartoons/_cartoons_/_page.server.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cartoons/_cartoons_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/cartoons/[cartoons]/+page.server.js";
export const imports = ["_app/immutable/nodes/15.D-C1DxJN.js","_app/immutable/chunks/CvMqxeUd.js","_app/immutable/chunks/DtO-chcV.js","_app/immutable/chunks/CxcT2ZgC.js","_app/immutable/chunks/DIh3MrjY.js","_app/immutable/chunks/XohKt3TT.js","_app/immutable/chunks/DwvPRf6u.js","_app/immutable/chunks/D4Caz1gY.js","_app/immutable/chunks/C_Ixy55k.js","_app/immutable/chunks/AmOIunDL.js","_app/immutable/chunks/Cw6m8VM2.js","_app/immutable/chunks/CF5-Wiyt.js","_app/immutable/chunks/D9lROAtC.js","_app/immutable/chunks/DedTd7GD.js","_app/immutable/chunks/iI_LtpKd.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Bjc2Jhzt.js"];
export const stylesheets = ["_app/immutable/assets/BackTo.D9x6rrBs.css"];
export const fonts = [];
