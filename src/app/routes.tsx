import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Expertise } from "./components/Expertise";
import { Contact } from "./components/Contact";
import { Terms } from "./components/Terms";
import { AIStrategy } from "./components/services/AIStrategy";
import { LargeLanguageModels } from "./components/expertise/LargeLanguageModels";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "services/ai-strategy", Component: AIStrategy },
      { path: "expertise", Component: Expertise },
      { path: "expertise/large-language-models", Component: LargeLanguageModels },
      { path: "contact", Component: Contact },
      { path: "terms", Component: Terms },
    ],
  },
]);
