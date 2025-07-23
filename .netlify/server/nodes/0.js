import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Cob3KNNH.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/CvMqxeUd.js","_app/immutable/chunks/DtO-chcV.js","_app/immutable/chunks/DwvPRf6u.js","_app/immutable/chunks/BAe3Ymc5.js","_app/immutable/chunks/DedTd7GD.js","_app/immutable/chunks/CxcT2ZgC.js","_app/immutable/chunks/DIh3MrjY.js","_app/immutable/chunks/iI_LtpKd.js","_app/immutable/chunks/D1WLeCyM.js","_app/immutable/chunks/D4Caz1gY.js","_app/immutable/chunks/BCPF9bul.js","_app/immutable/chunks/XohKt3TT.js","_app/immutable/chunks/DMYLSJ60.js","_app/immutable/chunks/BuRhjc2M.js","_app/immutable/chunks/AmOIunDL.js","_app/immutable/chunks/Dp8L_b49.js","_app/immutable/chunks/BDRHpEDu.js"];
export const stylesheets = ["_app/immutable/assets/Icon.8BNUikdf.css","_app/immutable/assets/0.BPJMbzWs.css"];
export const fonts = [];
