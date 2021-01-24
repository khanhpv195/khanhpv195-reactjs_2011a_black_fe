import React, { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  function handelBooking(data) {
    console.log(data)
  }

  return (
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
  );
}
export default App;