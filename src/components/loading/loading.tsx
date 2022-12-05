import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const Loading: React.FunctionComponent = () => (
<div className="loading_component">
<h5>Loading data</h5>
<Spin indicator={antIcon} size='large' style={{ width: "inherit", height: "inherit"}}/>;
</div>
)


export default Loading;