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
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  return (
    <>
      <div className={`${style.card} animate__animated animate__fadeIn`}>
        <Row justify={"center"}>
          <Divider>
            <h2>Add New Contact!</h2>
          </Divider>
        </Row>
        <Form onFinish={onFinish} />
      </div>
      {data.length > 0 && (
        <div
          className={`${style.card} animate__animated animate__fadeIn`}
          style={{ marginTop: "16px" }}
        >
          <Row gutter={[0, 10]} justify={"space-between"}>
            {data.map((item, index) => (
              <Col
                key={index}
                span={12}
                className={`${style.contacts} animate__animated ${
                  index % 2 == 0
                    ? "animate__zoomInLeft"
                    : "animate__zoomInRight"
                }`}
              >
                <p>
                  Name: <b>{item.name}</b>
                </p>
                <p>
                  Family Name: <b>{item.fname}</b>
                </p>
                <p>
                  Email: <b>{item.email}</b>
                </p>
                <p>
                  Phone Number: <b>{item.phone}</b>
                </p>
                <Button
                  type="primary"
                  danger
                  block
                  icon={<DeleteOutlined />}
                  onClick={async (e) => {
                    setData((data) =>
                      data.filter((itemSub, indexSub) => indexSub !== index)
                    );
                  }}
                >
                  Delete
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
}

export default App;
