import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState(initailForm);

  const handleSubmit = (e) => {
    e.preventDefault(); /* Form Submit 이벤트 시 Refresh 방지 */
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
      <label htmlFor="email">이메일:</label>
      <input type="text" id="email" name="email" value={form.email} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}

const initailForm = {
  name: "",
  email: "",
};
