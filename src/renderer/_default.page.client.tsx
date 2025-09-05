import ReactDOM from "react-dom/client";
import { PageWrapper } from "./PageWrapper.tsx";
import type { PageContext } from "./types.ts";

export { render };

async function render(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;
  const root = ReactDOM.createRoot(document.getElementById("page-view")!);
  root.render(
    <PageWrapper>
      <Page {...pageProps} />
    </PageWrapper>
  );
}
