import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Main from './../../components/organisms/Main';
import { useCookies } from "react-cookie";

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [cookies, setCookie] = useCookies(['access_token', 'user_info', 'name_user']);
  function handelBooking(data) {
    console.log(data)
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2IiwianRpIjoiNWRhYTdhNzRkYzMxODc5MjA0NDE4MDU0ZTdhN2I2MGI4MDNlMTZiY2EzZTQ1ZjJjYTEzNjJmYjkyY2UzMzU0M2U4MTFmM2EwZDk0ODlhNjQiLCJpYXQiOjE2MTE3NTIyOTAsIm5iZiI6MTYxMTc1MjI5MCwiZXhwIjoxNjQzMjg4MjkwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.LMBHEhDHFWKSl7Ut4_y80PkYT4pYsOR439DFsyppnFcjpqjbzFE6OysXKDTH0PW9NnNRB1FkALTr1Hxl9IMgQHx-flEREoQzkrDfIcOrOewWkTvJ7cuXhgnf5-t90KLt2JJpgf5g52zg6g1OwkISWDoYVpgcUbofGq3h66xe4pI9ALgOjfH8ztK1Ix5SGq_n2kJ14vGH3mdoVbxwtONmy255OE5cuWofFAdQVN4S7VxO5w8EIOuP-SrVis6jkjNDNq1NSmiOd8yZatDSGlSYCLLSGoWlo2sTjGDDH9nAzv5I5bDqiVne-HOLrVpS7bwvGBx0F6tE7GDA6-y0q_nCy--WpryI1VswLItOEW39gwrWV5AbjdTHIgvwE4dKoB2ASQn-FwZ728tn-4JFFiQgn_rc7QhRx4vPD9-SfLmJQsk7iWKFvH05lyNW4Ld2U9qmwtH27AZmL3mNFguVkBrcKFVPz2iHmHH6fidXgxp-nmDsXEVaEzItAgw9X9dZCjXvcB5jYwz4EUS7BAdGy6nwhXuJwLivpuqfdVVEETJZQyAbzgEEeTFEjojF_zy4ju1pjqnz0R8fD_qKnDnEVMSS-SrrToQ76LpxjOxoAB8Dtahe5tNw9TTcjzLqF0CyDBzVSETmdXv7B0-Qt0euC7kzJOon1Kvdpd_je4lQX8xLDCA"
    setCookie("access_token", token, { path: "/" });
    console.log(cookies.access_token)
  }

  return (
    <Main>
      <form onSubmit={handleSubmit(handelBooking)}>
        <div className="form-group">
          <input name="title" ref={register({ required: true })} id="" className="form-control" />
          {errors.title && <span style={{ color: 'red' }}>Trường này là bắt buộc</span>}
        </div>
        <div className="form-group">
          <select name="select_type" className="form-control form-control-lg" ref={register({ required: true })}>
            <option value="" selected>Choose</option>
            <option value="1">Hello1</option>
            <option value="2">Hello2</option>
            <option value="3">Hello3</option>
          </select>
          {errors.select_type && <span style={{ color: 'red' }}>Trường này là bắt buộc</span>}
        </div>
        <div className="form-group">
          <input name="content" id="" ref={register({ required: true })} className="form-control" />
          {errors.content && <span style={{ color: 'red' }}>Trường này là bắt buộc</span>}
        </div>
        <button className="btn btn-block btn-success">Submit</button>
      </form>
    </Main>
  );
}
export default App;