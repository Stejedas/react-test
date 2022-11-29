import { Spin } from "antd";


const Loading: React.FunctionComponent = () => (
<div style={{ width: '90vw', height: '90vh'}}>
<Spin style={{ width: "inherit", height: "inherit"}}/>;
</div>
)


export default Loading;