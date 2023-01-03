import { useEffect } from 'react';
import yayJpg from '../assets/yay.jpg';
import { Log } from 'common-log-api';
import { Num } from 'example-typescript-package';
export default function HomePage() {
  useEffect(() => {
    (async () => {
      //  console.log(CommonApi);
      console.log(Log);
      const number = new Num(1);

      console.log(number.val());

      const res = await Log({
        requestParams: {
          appSecuret: 'kDCcxy3BVAeNQP05',
          appKey: 'appstore',
          requestUrl: 'https://test-appstore-logs-collect.hubstudio.cn/',
        },
      });
      console.log(res);

      /*  const res = await Log.apicommonjs.Log({
        requestParams: {
          appSecuret: 'kDCcxy3BVAeNQP05',
          appKey: 'appstore',
          requestUrl: 'https://test-appstore-logs-collect.hubstudio.cn/',
        },
        formParams: {
          contentss: 'asdsssasds',
        },
      });
      console.log(res); */
    })();
  }, []);
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
