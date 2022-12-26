import React, { useEffect } from "react";
import commonApi from 'common-log-api';
export default function IndexPage() {
  useEffect(() => {
    commonApi.Log({
      requestParams: {
        appSecuret: 'kDCcxy3BVAeNQP05',
        appKey: 'appstore',
        requestUrl: 'https://test-appstore-logs-collect.hubstudio.cn/',
      },
      formParams: {
        contentss: 'asdsssasds'
      }
    })
  }, []);
  return (
    <div>
      <h1>Page index</h1>
    </div>
  );
}
