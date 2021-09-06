import dynamic from "next/dynamic";

const Chart = dynamic(() => import("../components/Chart"), { ssr: false });

function Foo() {
  return <Chart />;
}

export default Foo;
