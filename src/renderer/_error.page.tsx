import { PageWrapper } from "./PageWrapper.tsx";
import type { PageContext } from "./types.ts";

export { Page };

function Page({
  is404,
  errorInfo,
}: PageContext & { is404: boolean; errorInfo?: string }) {
  if (is404) {
    return (
      <PageWrapper>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1>404 Page Not Found</h1>
          <p>このページは存在しません。</p>
        </div>
      </PageWrapper>
    );
  } else {
    return (
      <PageWrapper>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1>500 Internal Server Error</h1>
          <p>サーバーエラーが発生しました。</p>
          {errorInfo && <pre>{errorInfo}</pre>}
        </div>
      </PageWrapper>
    );
  }
}
