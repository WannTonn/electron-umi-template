import { useEffect } from 'react';
import yayJpg from '../assets/yay.jpg';
// import { Num } from 'example-typescript-package';
export default function HomePage() {
  useEffect(() => {
    (async () => {
      //  console.log(CommonApi);
      // const number = new Num(1);

      // console.log(number.val());
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
