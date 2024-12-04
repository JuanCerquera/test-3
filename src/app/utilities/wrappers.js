export function withAuth(loader) {
  return async (args) => {
    const isAuthenticated = Boolean(localStorage.getItem("user_id"));
    if (!isAuthenticated || !loader) {
      return null;
    }

    return loader(args);
  }
}