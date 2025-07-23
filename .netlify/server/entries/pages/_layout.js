import { error } from "@sveltejs/kit";
const prerender = "auto";
const csr = true;
const load = async ({ url, fetch }) => {
  try {
    return {
      path: url.pathname
    };
  } catch (err) {
    throw error(500, err);
  }
};
export {
  csr,
  load,
  prerender
};
