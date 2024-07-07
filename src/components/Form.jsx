import {
  UserOutlined,
    TeamOutlined,
    PlusOutlined,
  UndoOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Input, Row, Col, Form, Button } from "antd";

function FormContact({ ...props }) {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };
  return (
    <Form
      name="contactInfo"
      form={form}
      initialValues={{
        remember: true,
      }}
      layout="vertical"
      autoComplete="off"
      {...props}
    >
      <Row gutter={[16, 16]} justify={"space-between"}>
        <Col span={12}>
          <Form.Item
            label="First Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input first name!",
              },
            ]}
          >
            <Input placeholder="First Name" prefix={<UserOutlined />} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Last Name"
            name="fname"
            rules={[
              {
                required: true,
                message: "Please input last name!",
              },
            ]}
          >
            <Input placeholder="Last Name" prefix={<TeamOutlined />} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input email!",
              },
            ]}
          >
            <Input placeholder="Email" prefix={<MailOutlined />} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input phone number!",
              },
            ]}
          >
            <Input placeholder="Phone Number" prefix={<PhoneOutlined />} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            htmlType="submit"
            block
            icon={<PlusOutlined />}
          >
            Add Contact
          </Button>
        </Col>
        <Col span={12}>
          <Button
            htmlType="button"
            onClick={onReset}
            block
            icon={<UndoOutlined />}
          >
            Reset Form
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormContact;
