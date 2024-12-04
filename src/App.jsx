import "/src/app/utilities/axios.js";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "./routes/GlobalRoutes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const router = createBrowserRouter(routes);
const theme = extendTheme({
  colors: {
    tailwindGreen: {
      500: "#166534",
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;
