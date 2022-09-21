import React, { useEffect } from "react";

export default function IndexPage() {
  useEffect(() => {
    // window.location.href = "https://zhidao.baidu.com/pages/consult/index/login"
  }, [])
  return (
    <div>
      <h1>Page index</h1>
      {/* <iframe src="https://zhidao.baidu.com/pages/consult/index/login" frameBorder="0"></iframe> */}
      <webview src="https://zhidao.baidu.com/pages/consult/index/login" style={{width: 1000, height: 500}}></webview>
    </div>
  );
}
