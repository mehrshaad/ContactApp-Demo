import { useState } from "react";
import style from "./App.module.scss";
import Form from "./components/Form";
import { DeleteOutlined } from "@ant-design/icons";
import { Row, Col, Divider, Space, Button } from "antd";

function App() {
  const [data, setData] = useState([
    {
      name: "Mehrshad",
      fname: "Dadashzadeh",
      email: "mehrdadashzadeh1379@gmail.com",
      phone: "09123456789",
    },
    {
      name: "Sara",
      fname: "Mazaheri",
      email: "m.sara.mazaheri@gmail.com",
      phone: "09123456789",
    },
  ]);
  const onFinish = (values) => {
    setData([...data, values]);
  };
  return (
    <>
      <div className={style.card}>
        <Row justify={"center"}>
          <Divider>
            <h2>Add New Contact!</h2>
          </Divider>
        </Row>
        <Form onFinish={onFinish} />
      </div>
      <div className={style.card} style={{ marginTop: "16px" }}>
        <Row gutter={[16, 16]} justify={"space-between"}>
          {data.map((item, index) => (
            <Col span={12} className={style.contacts} key={index}>
              <Col span={24}>
                <p>
                  Name: <b>{item.name}</b>
                </p>
              </Col>
              <Col span={24}>
                <p>
                  Family Name: <b>{item.fname}</b>
                </p>
              </Col>
              <Col span={24}>
                <p>
                  Email: <b>{item.email}</b>
                </p>
              </Col>
              <Col span={24}>
                <p>
                  Phone Number: <b>{item.phone}</b>
                </p>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  danger
                  block
                  icon={<DeleteOutlined />}
                  onClick={() => {
                    setData(
                      data.filter((itemSub, indexSub) => indexSub !== index)
                    );
                  }}
                >
                  Delete
                </Button>
              </Col>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default App;
