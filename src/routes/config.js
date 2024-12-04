export const routesConfig = {
  root: { index: "/" },
  landingPage: { index: "/landing" },
  privacyPolicy: { index: "/política-de-privacidad" },
  appointmentList: {
    index: "/citas",
  },
  settings: {
    index: "/configuración",
    newLocation: "/nueva-sede",
    newProfessional: "/nuevo-profesional",
    newService: "/nuevo-servicio",
    editLocation: "/editar-sede/:id",
    editProfessional: "/editar-profesional/:id",
    editService: "/editar-servicio/:id",
  },
  history: {
    index: "/historial",
  },
  profile: {
    index: "/perfil",
  },
  changePassword: {
    index: "/cambiar-contrasena",
  },
  signup: {
    index: "/registrarse",
  },
  login: {
    index: "/iniciar-sesión",
  },
  schedule: {
    index: "/agendar/:slug",
  },
  payments: {
    index: "/pagos",
  },
};

export function seekRoute(name, pointer = "index", params) {
  console.log(`Trying ${name}`);
  console.log("params desde seekRoute", params);
  let route = routesConfig[name][pointer];
  if (pointer !== "index") {
    route = routesConfig[name].index + route;
  }
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      route = route.replace(`:${key}`, value);
    }
  }

  return route;
}
