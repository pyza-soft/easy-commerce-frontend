import { useForm } from "react-hook-form";
import React, { useState } from "react";
import styles from "./style.module.css";
import { Input, Checkbox, Button, Image } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const TOKEN_AUTH = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      user {
        isSuperuser
      }
    }
  }
`;

const login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [tokenAuth, { data }] = useMutation(TOKEN_AUTH);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log(data);

  const onSubmit = (data) => {
    console.log(data);
    tokenAuth({
      variables: {
        username: userName,
        password: password,
      },
    }).then((data) => {
      console.log({ tokenAuth: data });
      if (data?.data?.tokenAuth?.user?.isSuperuser === true)
        localStorage.setItem("token", data?.data?.tokenAuth?.token);
      router.push("/admin/brand");
    });
  };

  return (
    <div className='d-flex justify-content-center flex-column'>
      <div className='d-flex justify-content-center flex-row mt-5'>
        <Image
          width={50}
          src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
          className='pr-2'
        />
        <h1 className={styles.textcolor}>Easy Commerce</h1>
      </div>
      <div className='d-flex justify-content-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='login-warp mt-3'>
          <Input
            name='title'
            type='text'
            placeholder='admin'
            className='form-control'
            id='title'
            prefix={<UserOutlined />}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <Input
            name='password'
            type='password'
            className='form-control mt-2'
            id='password'
            placeholder='password'
            prefix={<LockOutlined />}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <div className='mt-2 mb-3'>
            <Checkbox
            // checked={this.state.autoLogin}
            // onChange={this.changeAutoLogin}
            >
              Keep me logged in
            </Checkbox>
            <a style={{ float: "right" }} href=''>
              Forgot password
            </a>
          </div>
          <div className='d-flex justify-content-center'>
            <Button htmlType='submit' className='pr-5 pl-5'>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
